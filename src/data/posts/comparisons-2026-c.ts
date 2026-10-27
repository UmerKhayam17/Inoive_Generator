import type { PostDraft } from "../blog";

export const COMPARISONS_2026_C_POSTS: PostDraft[] = [
  {
    slug: "wise-vs-paypal",
    title: "Wise vs PayPal: Fees and Exchange Rates for Freelancers",
    description:
      "Wise vs PayPal for freelancers: October 2026 receiving fees, exchange rate markups, withdrawals and a worked example showing which keeps more of your invoice.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["wise-vs-payoneer", "stripe-vs-paypal", "payoneer-vs-paypal"],
    faqs: [
      {
        q: "Is Wise cheaper than PayPal for receiving international payments?",
        a: "Usually, yes, when the client can pay by bank transfer. Wise lets you receive local payments in several currencies without a receiving fee and converts at the mid-market rate plus a visible fee. PayPal charges a percentage plus a fixed fee on commercial payments, adds a cross-border fee for international payers and applies a currency conversion spread of about 3% to 4%. Compare both on your actual amount before deciding.",
      },
      {
        q: "Does Wise use the real exchange rate?",
        a: "Wise says it converts at the mid-market exchange rate, the midpoint between buy and sell prices that you see on financial news sites, and charges a separate conversion fee that it shows before you confirm. In October 2026 its US pricing page described conversion fees that vary by currency, starting from a fraction of a percent. Use the Wise calculator for your currency pair to see the exact figure.",
      },
      {
        q: "How much does PayPal charge to convert currency?",
        a: "In October 2026, PayPal's US merchant fee page listed a 4.00% currency conversion spread for some transactions, such as paying in a currency other than the item's listed currency, and 3.00% for all other conversions. The spread is built into the exchange rate rather than shown as a separate line, so compare the rate PayPal offers with the mid-market rate to see the real cost.",
      },
      {
        q: "Can a client pay me with a card through Wise?",
        a: "Wise is built mainly around bank transfers to your account details. Some Wise Business accounts in certain countries can accept card payments through payment links, but availability and fees vary by country. PayPal, by contrast, lets clients pay invoices by card, often without a PayPal account where guest checkout is available. If your clients insist on paying by card, check what Wise offers in your country first.",
      },
      {
        q: "Is PayPal or Wise better for small payments?",
        a: "For very small amounts, fixed fees matter most. PayPal's US fixed fee on commercial payments in US dollars was $0.49 in October 2026, on top of the percentage, which is a large share of a $20 payment. Wise local receipts are free in many currencies, but a USD wire into Wise carried a fixed $6.11 fee. Small bank transfers into Wise local details are usually cheapest.",
      },
      {
        q: "Does Wise have buyer and seller protection like PayPal?",
        a: "No, not in the same way. PayPal offers Seller Protection on eligible transactions and a dispute process for buyers. Wise transfers work like bank transfers, so there is no built-in dispute system for a client who changes their mind. That is good for freelancers in one sense, because a bank transfer is hard to reverse, but it means your contract and invoice carry more weight.",
      },
      {
        q: "Can I use Wise and PayPal together?",
        a: "Yes. Many freelancers offer Wise bank details as the default payment method and PayPal as a backup for clients who will only pay by PayPal or card. You can even link a Wise account as a bank account in PayPal in some countries, though that does not remove PayPal's own fees. List each option clearly on the invoice so clients pick the cheaper one when they can.",
      },
      {
        q: "Which is faster, Wise or PayPal?",
        a: "A PayPal payment usually shows in your PayPal balance within moments, though moving it to your bank takes time unless you pay for an instant transfer. Wise local payments often arrive the same day or within a business day or two, while Swift wires can take longer. Both show estimated timings, and identity or compliance checks can add delays with either provider.",
      },
      {
        q: "Are Wise and PayPal available in every country?",
        a: "No. Both list supported countries and the features differ by country. For example, PayPal's worldwide country list did not include Pakistan when we checked in October 2026, and Wise offers limited services to people living in Pakistan. Check each provider's availability page for the country where you live, not just where your clients are.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Wise vs PayPal choice, Wise is usually cheaper for freelancers because clients pay into local bank details for free and Wise converts at the mid-market rate plus a visible fee. PayPal costs more, with percentage fees, cross-border charges and a 3% to 4% conversion spread, but wins on card payments and client familiarity.</p>

<p>If you invoice clients in other countries, the way you get paid can quietly take a bigger slice of your income than any software subscription. Wise and PayPal are two of the most common options freelancers consider, and they work in very different ways. PayPal is a payment network: the client pays from a PayPal account or card, and you receive a balance. Wise is closer to a multi-currency bank account: you share local account details and clients pay by bank transfer.</p>

<p>This Wise vs PayPal guide compares receiving fees, exchange rates, withdrawals, disputes and availability, with a worked example. It does not repeat our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer comparison</a> or our look at <a href="/blog/stripe-vs-paypal">Stripe vs PayPal for card payments</a>, which cover those pairings in detail.</p>

<p><strong>A note on fees:</strong> figures below come from the official US pricing pages as checked in October 2026: <a href="https://wise.com/us/pricing/" target="_blank" rel="noopener noreferrer">Wise US pricing</a> and <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal US merchant fees</a> (the PayPal page showed a last-updated date of October 1, 2026). Both providers set fees by the country where your account is registered, so freelancers outside the US should check their own country's pages.</p>

<h2>Wise vs PayPal at a glance</h2>
<table>
<thead><tr><th>Feature</th><th>Wise</th><th>PayPal</th></tr></thead>
<tbody>
<tr><td>How clients pay</td><td>Bank transfer to your local account details</td><td>PayPal balance, linked bank, or card (guest checkout where available)</td></tr>
<tr><td>Receiving fee (US account, October 2026)</td><td>Free for domestic payments in USD, GBP, EUR and several other currencies; $6.11 per USD wire or Swift payment</td><td>3.49% + $0.49 for PayPal checkout on invoices; 2.99% + $0.49 for card payments on invoices</td></tr>
<tr><td>International payer surcharge</td><td>None listed for local receipts</td><td>Additional 1.50% for international commercial transactions</td></tr>
<tr><td>Exchange rate</td><td>Mid-market rate plus a separate fee, from a fraction of a percent</td><td>Spread of 3.00% or 4.00% built into the rate</td></tr>
<tr><td>Withdrawal to your bank</td><td>Sending fee varies by currency</td><td>Standard transfer free with no conversion; instant transfer 1.50% (minimum $0.50)</td></tr>
<tr><td>Disputes and chargebacks</td><td>No buyer dispute system; works like a bank transfer</td><td>Buyer disputes and Seller Protection on eligible transactions</td></tr>
<tr><td>Monthly fee</td><td>None listed</td><td>None for standard pricing</td></tr>
<tr><td>Best for</td><td>Direct clients who can pay by bank transfer</td><td>Clients who want to pay by card or PayPal login</td></tr>
</tbody>
</table>

<h2>How Wise charges freelancers</h2>
<p>Wise's model has three moving parts: receiving, converting and sending. Opening an account is free, and its US pricing page in October 2026 listed no subscription or monthly fee.</p>
<h3>Receiving</h3>
<p>Wise gives eligible customers local account details, such as a US routing and account number, a UK sort code or a euro IBAN. When a client pays through the local system in that country, Wise lists the payment as free to receive in currencies including USD, GBP, EUR, AUD, CAD and SGD. Wires and Swift payments cost more: the US page showed $6.11 per USD wire or Swift payment, 2.16 GBP for a GBP Swift payment and 2.39 EUR for a EUR Swift payment.</p>
<h3>Converting</h3>
<p>When you convert, Wise uses the mid-market rate and charges a fee that varies by currency pair. Its US page described conversion fees starting from 0.23%, but common pairs can cost more, so check the calculator for your exact route and amount. Because the fee is shown separately, it is easy to compare with other providers.</p>
<h3>Sending to your own bank</h3>
<p>Moving money from Wise to your local bank account is a normal Wise transfer, priced by currency. If you keep the money in the same currency, the cost is usually small; if you convert at the same time, the conversion fee applies once.</p>

<h2>How PayPal charges freelancers</h2>
<p>PayPal charges the person receiving a commercial payment. For a US account in October 2026, the merchant fee page listed:</p>
<ul>
<li><strong>Invoices paid with PayPal checkout, Venmo or guest checkout:</strong> 3.49% plus a fixed fee.</li>
<li><strong>Invoices paid by card:</strong> 2.99% plus a fixed fee.</li>
<li><strong>Fixed fee in US dollars:</strong> $0.49.</li>
<li><strong>International commercial transactions:</strong> an additional 1.50% on top of the domestic rate.</li>
<li><strong>Currency conversion:</strong> a 4.00% spread for some conversions and 3.00% for all others.</li>
<li><strong>Transfers to your bank:</strong> standard transfers free when no conversion is involved; instant transfers 1.50% with a $0.50 minimum.</li>
</ul>
<p>PayPal's strength is reach. Many clients already have a login, and guest card checkout means a client without an account can often still pay. You can send a PayPal invoice directly or create a payment link and paste it into your own invoice. Our guide on <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a> walks through both routes.</p>

<h2>Exchange rates: the hidden cost in Wise vs PayPal</h2>
<p>The headline fee is only half the story. When money changes currency, the exchange rate is where most of the cost hides, and this is the biggest difference between the two providers.</p>
<p>Wise starts from the mid-market rate and adds a separate, visible fee. PayPal builds its spread into the rate it offers. A 3% spread on a $3,000 invoice is $90 that never appears as a "fee" line, so it is easy to miss. To see the real cost, compare the rate PayPal quotes with the mid-market rate on the same day.</p>
<p>There is a second trap. If you invoice in a currency your client does not hold, someone pays to convert. With PayPal, that can be the client at checkout, which makes your invoice more expensive for them. Our guide to <a href="/blog/foreign-currency-invoice">invoicing in a foreign currency</a> explains how to choose the invoice currency and show the exchange rate you used.</p>

<h2>Worked example: a $2,000 invoice</h2>
<p>A US-based freelancer invoices a client in the UK for work worth about $2,000. The numbers below use the October 2026 US fee pages and an <em>assumed</em> exchange rate of 1 GBP = 1.25 USD and an <em>assumed</em> Wise conversion fee of 0.5%. These are illustrative, not quotes.</p>
<h3>Option A: PayPal invoice in USD</h3>
<ul>
<li>Percentage fee for PayPal checkout: 3.49% + 1.50% international = 4.99%</li>
<li>4.99% of $2,000 = $99.80</li>
<li>Fixed fee: $0.49</li>
<li>Total fee: $99.80 + $0.49 = $100.29</li>
<li>Amount received: $2,000 - $100.29 = <strong>$1,899.71</strong></li>
</ul>
<p>The UK client may also pay a conversion spread if their PayPal funds are in GBP, which is a cost to them rather than to you, but it still makes your invoice more expensive.</p>
<h3>Option B: Wise GBP account details</h3>
<ul>
<li>Invoice amount: 1,600 GBP (1,600 x 1.25 = $2,000 at the assumed rate)</li>
<li>Client pays by a UK bank transfer to your Wise GBP details: receiving fee 0</li>
<li>Convert 1,600 GBP to USD at the mid-market rate: $2,000.00</li>
<li>Assumed conversion fee of 0.5%: $2,000 x 0.005 = $10.00</li>
<li>Amount received: $2,000 - $10.00 = <strong>$1,990.00</strong></li>
</ul>
<h3>The difference</h3>
<p>$1,990.00 - $1,899.71 = $90.29 on one invoice, about 4.5% of the invoice value. On twelve similar invoices a year, that is $90.29 x 12 = $1,083.48. Your real numbers will differ, but the pattern usually holds: bank transfers into local details are cheaper than card or wallet payments with a cross-border surcharge.</p>

<h2>Disputes, holds and protection</h2>
<p>PayPal gives buyers a dispute process, and sellers can qualify for Seller Protection on eligible transactions. For physical goods that is valuable. For services, protection is narrower, and a client can still open a dispute that freezes funds while PayPal reviews it. PayPal can also place holds or reserves on new or fast-growing accounts.</p>
<p>Wise payments behave like bank transfers. Once the money arrives, the client cannot reverse it through a Wise dispute button, although fraud cases and bank recalls can still happen. Like any regulated payment company, Wise can also limit an account during identity or compliance checks, so keep your documents current and withdraw regularly.</p>

<h2>Which should you choose?</h2>
<p>The Wise vs PayPal decision usually comes down to how your clients prefer to pay.</p>
<ul>
<li><strong>Direct clients in countries Wise supports:</strong> Wise local details, for low receiving costs and transparent conversion.</li>
<li><strong>Clients who insist on card or PayPal:</strong> PayPal, accepting the higher fee, or price it into your rate.</li>
<li><strong>Small, frequent payments:</strong> watch fixed fees. A $0.49 PayPal fixed fee is a large share of a $15 payment; a $6.11 wire fee hurts small Wise wires too, so ask clients to use local transfers.</li>
<li><strong>Selling physical products:</strong> PayPal's checkout and seller protection may justify the cost.</li>
<li><strong>You live where neither works fully:</strong> see our <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal comparison</a> for marketplace-friendly options.</li>
</ul>
<p>Many freelancers keep both: Wise as the default and PayPal as the backup. Non-US freelancers working for US clients may also be asked for tax paperwork whichever provider they use; see our guide to the <a href="/blog/w-8ben-form-freelancers">W-8BEN form for freelancers</a>.</p>

<h2>Checklist: setting up an invoice for Wise or PayPal</h2>
<ol>
<li>Decide the invoice currency first, ideally the client's own currency if you have matching Wise details.</li>
<li>Copy your Wise account details exactly: account holder name, bank name, account number and routing code, or IBAN and SWIFT/BIC.</li>
<li>Label the currency clearly, for example "Pay in GBP to:".</li>
<li>If you also accept PayPal, add the payment link in the notes and say whether you add a fee for that method, where that is lawful.</li>
<li>Use the invoice number as the payment reference so you can match the deposit.</li>
<li>State the due date and late payment terms.</li>
<li>Keep the provider's transaction record with the invoice for your tax records.</li>
</ol>
<p>Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows a clean layout, and <a href="/blog/invoice-international-clients">invoicing international clients</a> covers tax and currency points. You can build the PDF itself in the free <a href="/invoice-generator">invoice generator</a>, which supports multiple currencies and lets you paste a PayPal or other payment link into the notes. The generator creates the document only; it does not send invoices, track payments or move money.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Comparing headline fees only.</strong> PayPal's conversion spread can cost more than its percentage fee.</li>
<li><strong>Forgetting the cross-border surcharge.</strong> The extra 1.50% applies to international commercial payments on top of the domestic rate.</li>
<li><strong>Asking clients to send a Swift wire to Wise</strong> when a local transfer is available, adding a fixed fee for no reason.</li>
<li><strong>Using a personal payment type for business income.</strong> Commercial payments should be received as such; misusing personal transfers can break PayPal's terms.</li>
<li><strong>Leaving large balances sitting in either account.</strong> Neither is a traditional bank in most countries, and an account review can freeze access.</li>
<li><strong>No invoice behind the payment.</strong> A transaction record is not an invoice; your client and your tax records still need one. See how to <a href="/blog/add-payment-link-to-invoice">add a payment link to an invoice</a> so both work together.</li>
</ul>

<h2>Bottom line</h2>
<p>On fees alone, Wise vs PayPal is rarely close. For most freelancers paid by direct clients, Wise keeps more of each invoice, mainly because local bank transfers are free to receive and conversion uses the mid-market rate. PayPal costs more but removes friction for clients who want to pay by card or with a PayPal login. Check both pricing pages for your country, run the arithmetic on a typical invoice, and offer the cheaper method first.</p>
`,
  },
  {
    slug: "payoneer-vs-paypal",
    title: "Payoneer vs PayPal: Which Is Better for Getting Paid?",
    description:
      "Payoneer vs PayPal for freelancers: October 2026 fees, marketplace payouts, withdrawals, Pakistan availability and a worked example on a $1,000 invoice.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["wise-vs-paypal", "wise-vs-payoneer", "receive-payment-from-abroad-pakistan"],
    faqs: [
      {
        q: "Which is better for freelancers, Payoneer or PayPal?",
        a: "It depends on where you live and how clients pay. Payoneer suits freelancers paid through marketplaces such as Fiverr or Upwork and those in countries where PayPal does not offer accounts, such as Pakistan. PayPal suits freelancers whose clients want to pay by PayPal login or card and who live in a country with full PayPal support. Many freelancers keep both and offer the cheaper option first.",
      },
      {
        q: "Is PayPal available in Pakistan?",
        a: "Not for opening a regular PayPal account as a Pakistan resident, as far as official sources show. When we checked in October 2026, Pakistan did not appear on PayPal's worldwide list of supported countries and regions. Freelancers in Pakistan typically use Payoneer, direct bank remittances or other local options instead. Check PayPal's country list yourself before relying on any workaround, and avoid accounts registered with false details.",
      },
      {
        q: "What are Payoneer's fees to receive money?",
        a: "Payoneer's official fee page, last updated January 1, 2026, listed free receipts into a receiving account in your local currency and 1% (minimum $1) for other currencies. Payment requests paid by a client's card cost up to 3.99% plus $0.49, and payment requests paid by US ACH debit cost 1%. Marketplace payment fees vary by marketplace. Your exact fees appear in your account's Fees section.",
      },
      {
        q: "What are PayPal's fees to receive business payments?",
        a: "For a US account in October 2026, PayPal's merchant fee page listed 3.49% plus $0.49 for invoices paid through PayPal checkout or Venmo and 2.99% plus $0.49 for invoices paid by card. International commercial payments added 1.50%, and currency conversion carried a spread of 3.00% or 4.00%. Fees differ in other countries, so check the page for the country where your account is registered.",
      },
      {
        q: "Does Payoneer charge an annual fee?",
        a: "It can. Payoneer's fee page listed an annual account fee of $29.95 that applies only if the account receives less than $6,000 or equivalent in any 12 consecutive months. If you use Payoneer only occasionally, include that fee in your comparison. Check the Fees section in your own account, because terms can differ by region and account type.",
      },
      {
        q: "Can I transfer money from PayPal to Payoneer?",
        a: "Payoneer lists payment requests that clients can pay through PayPal in the US, at up to 3.99% plus $0.49. Moving your own PayPal balance into Payoneer is not a standard, direct feature in most countries, and workarounds can break either provider's terms. If you need both, keep them separate: receive through each directly and withdraw to your own bank.",
      },
      {
        q: "Which has lower withdrawal fees, Payoneer or PayPal?",
        a: "PayPal's US standard bank transfer was free when no conversion was involved, while instant transfers cost 1.50%. Payoneer listed $1.50 for same-country, same-currency withdrawals in some countries and 1.2% to 4% for withdrawals involving your local currency or conversion, with possible minimum fees. For freelancers converting to a local currency, the conversion cost usually matters more than the transfer fee itself.",
      },
      {
        q: "Do clients need a Payoneer account to pay me?",
        a: "No. Clients can pay into your Payoneer receiving account details by bank transfer, as they would pay any supplier, or pay a Payoneer payment request by card or bank debit for a fee. With PayPal, clients can pay with a PayPal login or, where guest checkout is available, by card without an account. Bank transfers to receiving accounts are usually the cheapest route.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Payoneer vs PayPal choice, Payoneer is usually better for marketplace freelancers and for anyone in countries PayPal does not serve, such as Pakistan, because clients can pay receiving accounts cheaply by bank transfer. PayPal is better when clients want to pay by card or PayPal login, but its percentage fees and conversion spreads cost more.</p>

<p>Payoneer and PayPal both help freelancers and small businesses get paid across borders, but they were built for different jobs. PayPal is a consumer payment network that millions of buyers already use to check out. Payoneer is a cross-border business account that gives you receiving account details in several currencies and plugs into marketplaces that pay freelancers in bulk.</p>

<p>This Payoneer vs PayPal comparison covers fees, marketplaces, withdrawals, disputes and country availability, with a worked example. If you are weighing Wise as well, see our separate guides to <a href="/blog/wise-vs-paypal">Wise vs PayPal</a> and <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a>.</p>

<p><strong>A note on fees:</strong> figures come from <a href="https://www.payoneer.com/legal/fees/" target="_blank" rel="noopener noreferrer">Payoneer's official fees page</a> (last updated January 1, 2026) and <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal's US merchant fees page</a> (last updated October 1, 2026), both checked in October 2026. Payoneer describes its figures as estimates that vary by location, method and currency, and PayPal sets fees by the country where your account is registered.</p>

<h2>Payoneer vs PayPal at a glance</h2>
<table>
<thead><tr><th>Feature</th><th>Payoneer</th><th>PayPal</th></tr></thead>
<tbody>
<tr><td>Core model</td><td>Business account with receiving details in several currencies</td><td>Payment network and wallet</td></tr>
<tr><td>Client pays by bank transfer</td><td>Free into a local-currency receiving account; 1% (minimum $1) for other currencies</td><td>Not the main route; PayPal is built around wallet and card checkout</td></tr>
<tr><td>Client pays by card</td><td>Payment request: up to 3.99% + $0.49</td><td>US invoices: 2.99% + $0.49</td></tr>
<tr><td>Client pays with wallet login</td><td>Via PayPal on US payment requests: up to 3.99% + $0.49</td><td>US invoices via PayPal checkout: 3.49% + $0.49</td></tr>
<tr><td>Cross-border surcharge</td><td>Built into the rates above, which vary by location</td><td>Additional 1.50% on international commercial payments (US account)</td></tr>
<tr><td>Currency conversion</td><td>0.50% between Payoneer balances; withdrawal with conversion 1.2% to 4%</td><td>Spread of 3.00% or 4.00%</td></tr>
<tr><td>Withdrawal to bank</td><td>$1.50 same-country, same-currency in some countries; 1.2% to 4% otherwise</td><td>Standard free without conversion; instant 1.50% (minimum $0.50)</td></tr>
<tr><td>Annual fee</td><td>$29.95 if the account receives under $6,000 in any 12 consecutive months</td><td>None for standard pricing</td></tr>
<tr><td>Marketplace payouts</td><td>Built into many marketplaces</td><td>Supported by some platforms</td></tr>
<tr><td>Pakistan residents</td><td>Widely used</td><td>Pakistan not on PayPal's country list (October 2026)</td></tr>
</tbody>
</table>

<h2>How Payoneer charges</h2>
<p>Payoneer's pricing has more lines than PayPal's, but the logic is straightforward once you separate receiving, converting and withdrawing.</p>
<h3>Receiving</h3>
<ul>
<li><strong>From another Payoneer user:</strong> free.</li>
<li><strong>From marketplaces:</strong> varies by marketplace.</li>
<li><strong>Into a receiving account in your local currency:</strong> free.</li>
<li><strong>Into a receiving account in another currency:</strong> 1%, with a minimum of $1 or equivalent.</li>
<li><strong>Payment request paid by card:</strong> up to 3.99% + $0.49.</li>
<li><strong>Payment request paid by US ACH debit or from a UK or EU bank:</strong> 1%.</li>
</ul>
<h3>Withdrawing and converting</h3>
<p>Withdrawing to a bank in the same country and currency was listed at $1.50 in some countries. Withdrawals that involve your local currency or a conversion were listed as 1.2% to 4%, and some countries can have a minimum fee. Converting between Payoneer balances was listed at 0.50%.</p>
<h3>Annual fee</h3>
<p>Payoneer listed a $29.95 annual account fee that applies only if the account receives less than $6,000 in any 12 consecutive months. Low-volume users should include this in their maths.</p>

<h2>How PayPal charges</h2>
<p>For a US business account in October 2026, PayPal listed 3.49% + $0.49 for invoices paid through PayPal checkout, Venmo or guest checkout, and 2.99% + $0.49 for card payments on invoices. International commercial payments added 1.50%, and currency conversion used a spread of 4.00% for some transaction types and 3.00% for all others. Standard transfers to your bank were free without a conversion, and instant transfers cost 1.50%.</p>
<p>PayPal's advantage is that clients already trust it. You can send an invoice from PayPal or paste a PayPal payment link into your own invoice; our guide on <a href="/blog/how-to-send-paypal-invoice">sending a PayPal invoice</a> covers both methods.</p>

<h2>Pakistan and other countries PayPal does not serve</h2>
<p>Availability is often the deciding factor. When we checked PayPal's worldwide country list in October 2026, Pakistan was not listed, which matches what Pakistani freelancers have long reported: you cannot open a regular PayPal account as a Pakistan resident. Workarounds such as registering with a relative's foreign details can break PayPal's terms and put your money at risk.</p>
<p>Payoneer, by contrast, is widely used in Pakistan, supports withdrawals to local bank accounts in PKR and is a built-in payout option on marketplaces such as Fiverr. For the full picture, including direct bank remittances, see how to <a href="/blog/receive-payment-from-abroad-pakistan">receive payment from abroad in Pakistan</a> and our explainer on the <a href="/blog/freelancer-digital-account-pakistan">freelancer digital account in Pakistan</a>. Pakistani freelancers can create a PKR or USD invoice with the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> and add Payoneer receiving details in the payment section.</p>

<h2>Worked example: a $1,000 invoice</h2>
<p>The numbers below use the official fee pages listed above. Exact Payoneer fees vary by country, so the withdrawal rate is an <em>assumption</em> within Payoneer's published range. All amounts are illustrative.</p>
<h3>Scenario 1: US-based freelancer, US client</h3>
<table>
<thead><tr><th>Step</th><th>Payoneer (client pays by ACH to receiving account)</th><th>PayPal (client pays invoice by card)</th></tr></thead>
<tbody>
<tr><td>Invoice</td><td>$1,000.00</td><td>$1,000.00</td></tr>
<tr><td>Receiving fee</td><td>Local currency: $0.00</td><td>2.99% x $1,000 = $29.90, plus $0.49 = $30.39</td></tr>
<tr><td>Balance</td><td>$1,000.00</td><td>$969.61</td></tr>
<tr><td>Withdrawal to US bank</td><td>$1.50</td><td>Standard transfer: $0.00</td></tr>
<tr><td>Reaches your bank</td><td><strong>$998.50</strong></td><td><strong>$969.61</strong></td></tr>
</tbody>
</table>
<p>If the same client paid the PayPal invoice through PayPal checkout instead of a card, the fee would be 3.49% x $1,000 = $34.90, plus $0.49 = $35.39, leaving $964.61.</p>
<h3>Scenario 2: Pakistan-based freelancer, US client</h3>
<ul>
<li>Client pays $1,000 into the freelancer's USD receiving account. USD is not the freelancer's local currency, so the fee is 1%: $1,000 x 0.01 = $10.00.</li>
<li>Balance: $1,000 - $10.00 = $990.00.</li>
<li>Withdrawal to a PKR bank account at an <em>assumed</em> 2% (within the published 1.2% to 4% range): $990 x 0.02 = $19.80.</li>
<li>Value reaching the bank, in USD terms: $990.00 - $19.80 = <strong>$970.20</strong>.</li>
</ul>
<p>PayPal is not an option in this scenario, so the useful comparison is Payoneer against a direct bank remittance. Ask your bank what it charges for inward remittances and what rate it applies, then compare.</p>

<h2>Marketplaces and platforms</h2>
<p>Many marketplaces pay freelancers in bulk, and Payoneer is built into a large number of them. PayPal is available on some platforms too, often in countries where PayPal is fully supported. If most of your income comes through a platform, the payout methods it offers may decide the question for you. Our guides to <a href="/blog/fiverr-upwork-invoice">Fiverr and Upwork invoices</a> and <a href="/blog/upwork-vs-fiverr">Upwork vs Fiverr</a> explain how platform payouts and invoices fit together.</p>

<h2>Disputes and account holds</h2>
<p>PayPal offers buyers a dispute process and sellers Seller Protection on eligible transactions, which is valuable for goods but narrower for services. A client can still open a dispute that freezes funds while PayPal reviews it. Payoneer receiving-account payments behave like bank transfers, and card-paid payment requests can still face chargebacks. Either provider may limit an account during verification, so keep your identity documents current and withdraw regularly rather than holding large balances.</p>

<h2>Putting Payoneer or PayPal details on your invoice</h2>
<p>Whichever side of the Payoneer vs PayPal question you land on, the invoice does the real work of getting paid on time. Clients pay faster when the payment section answers every question before they ask it.</p>
<ul>
<li><strong>For a Payoneer receiving account:</strong> copy the account holder name, bank name, account number and routing or IBAN details exactly as Payoneer shows them for that currency, and label the currency, for example "Pay in USD by ACH or wire to:".</li>
<li><strong>For PayPal:</strong> paste the PayPal invoice or payment link in the notes, and state the amount so the client does not have to type it.</li>
<li><strong>For both:</strong> ask the client to use the invoice number as the payment reference, state the due date, and say who pays any transfer fees.</li>
</ul>
<p>If you offer two methods, list the cheaper one first and explain briefly why, for example "Bank transfer preferred; card accepted via the link below." You can build the PDF in the free <a href="/invoice-generator">invoice generator</a>, choose the invoice currency and paste the payment link into the notes. The generator only creates the document; Payoneer or PayPal handles the actual payment, and you mark the invoice paid in your own records when the money arrives.</p>

<h2>Checklist: choosing between Payoneer and PayPal</h2>
<ol>
<li>Confirm both providers support accounts for the country where you live.</li>
<li>List how your clients actually pay: bank transfer, card, PayPal login or marketplace payout.</li>
<li>Price a typical invoice on both fee pages for your country, including conversion.</li>
<li>Add withdrawal costs to your local bank and any annual fee.</li>
<li>Check whether your marketplaces pay out to one provider only.</li>
<li>Decide on a default method and a backup, and show both on your invoice.</li>
<li>Keep the provider's transaction record with each invoice for tax time.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Comparing only the receiving fee.</strong> Conversion and withdrawal often cost more.</li>
<li><strong>Using PayPal through someone else's account.</strong> It can lead to frozen funds and a closed account.</li>
<li><strong>Sending card payment requests by default.</strong> A bank transfer into a receiving account is far cheaper; offer card only when the client needs it.</li>
<li><strong>Ignoring the low-activity annual fee</strong> on a Payoneer account you rarely use.</li>
<li><strong>Treating a screenshot as payment.</strong> Only count an invoice as paid when the money reaches your account; see our guide to <a href="/blog/invoice-scams">invoice scams</a> for common tricks.</li>
<li><strong>Skipping the invoice.</strong> A payment record is not an invoice, and clients and tax authorities usually need one.</li>
</ul>

<h2>Verdict</h2>
<p>The Payoneer vs PayPal decision usually settles itself once you check availability and client habits. If you live in Pakistan or another country PayPal does not serve, or you earn mainly through marketplaces, Payoneer is the practical choice. If you live where PayPal works fully and your clients like to pay by card or PayPal login, PayPal is convenient but costs more per payment. Whichever you choose, browse more provider match-ups in our <a href="/blog/category/comparisons">comparisons section</a> and confirm current fees before you commit.</p>
`,
  },
  {
    slug: "w2-vs-1099",
    title: "W-2 vs 1099: Employee vs Contractor Differences Explained",
    description:
      "W-2 vs 1099 explained: the IRS common-law test, tax differences, misclassification risks and a worked example comparing employee pay with contractor rates.",
    category: "comparisons",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["w9-and-1099-for-contractors", "1099-nec-threshold-2026", "self-employment-tax"],
    faqs: [
      {
        q: "What is the main difference between W-2 and 1099?",
        a: "A W-2 worker is an employee: the employer controls how the work is done, withholds income tax and pays half of Social Security and Medicare taxes. A 1099 worker is an independent contractor who runs their own business, receives gross pay without withholding, and pays self-employment tax and estimated taxes themselves. The forms are named after the year-end tax documents each type of worker receives.",
      },
      {
        q: "Who decides whether I am a W-2 employee or a 1099 contractor?",
        a: "Not the job title or the contract alone. For federal tax purposes, the IRS looks at the actual relationship using the common-law rules, grouped into behavioral control, financial control and the type of relationship. The Department of Labor and many states apply their own tests for wage and hour law, and some are stricter. Either the business or the worker can ask the IRS for a determination using Form SS-8.",
      },
      {
        q: "Is it better to be paid on a W-2 or a 1099?",
        a: "Neither is better for everyone. W-2 employment brings withholding, employer-paid payroll taxes, and often benefits and legal protections such as minimum wage and overtime. 1099 work brings control over how and when you work, business expense deductions and the chance to set your own rates, but you pay both halves of Social Security and Medicare and fund your own benefits. Compare the full package, not the headline rate.",
      },
      {
        q: "How much more should a 1099 contractor charge than a W-2 employee earns?",
        a: "Enough to cover the employer's share of payroll taxes, benefits, unpaid time off, equipment and periods without work. In our illustrative example, matching an $80,000 salary's total cost over 1,500 billable hours needs about $66 an hour, against the employee's $38.46, but the right figure depends on your benefits, utilization and expenses. Work from your target annual income and billable hours rather than copying a rule of thumb.",
      },
      {
        q: "What happens if an employer misclassifies an employee as a 1099 contractor?",
        a: "The IRS says a business that treats an employee as a contractor without a reasonable basis may be held liable for employment taxes for that worker. There can also be penalties and interest, plus state tax, unemployment insurance and wage claim exposure. The IRS Voluntary Classification Settlement Program lets eligible businesses reclassify workers going forward with partial relief, using Form 8952.",
      },
      {
        q: "What can I do if I think I was wrongly paid on a 1099?",
        a: "You can file Form SS-8 to ask the IRS to determine your status, though the IRS says a determination may take at least six months. If you believe you were an employee, Form 8919 lets you report and pay only the employee share of Social Security and Medicare tax on those wages rather than full self-employment tax. A tax professional can help you decide which route fits.",
      },
      {
        q: "Can someone be both a W-2 employee and a 1099 contractor?",
        a: "Yes, for different work. Many people hold a W-2 job and run a side business that receives 1099 income. The test applies to each relationship separately. Problems arise when the same employer pays the same person as an employee for one role and as a contractor for very similar work, because the IRS looks at the substance of the relationship, not the paperwork.",
      },
      {
        q: "When does a business have to issue a 1099-NEC?",
        a: "For payments made after December 31, 2025, the reporting threshold for Form 1099-NEC is $2,000 per payee for the year, up from $600, with indexing for inflation starting in 2027. The form is generally due to the contractor and the IRS by January 31. Contractors must report all income whether or not they receive a form.",
      },
      {
        q: "Do 1099 contractors need to send invoices?",
        a: "Invoices are not a federal tax requirement for every contractor, but they are the normal way to bill a client and create a clear record of what was charged and when. Many clients require an invoice before they pay, and invoices make it easier to match deposits, reconcile a 1099-NEC and support your income figures at tax time.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> W-2 vs 1099 comes down to control. A W-2 employee works under the business's direction, has income tax withheld and shares Social Security and Medicare costs with the employer. A 1099 independent contractor runs their own business, is paid gross, and pays self-employment tax and estimated taxes. The IRS judges the real relationship, not the label.</p>

<p>The terms come from tax forms. Employers report an employee's wages and withholding on Form W-2. Businesses report payments to independent contractors on Form 1099-NEC. But the form follows the relationship, not the other way round. Choosing to "pay someone on a 1099" does not make them a contractor if the facts say they are an employee.</p>

<p>This W-2 vs 1099 guide explains how the IRS draws the line, the tax and benefit differences, what misclassification costs, and how much more a contractor needs to charge to match a salary. It is written for both sides: small businesses deciding how to engage help, and workers comparing a W-2 offer with 1099 work.</p>

<p><em>This is general information for the United States, not tax or legal advice. Classification depends on the facts, and federal, state and labor law tests differ. Check with a qualified professional for your situation.</em></p>

<h2>W-2 vs 1099 at a glance</h2>
<table>
<thead><tr><th>Area</th><th>W-2 employee</th><th>1099 independent contractor</th></tr></thead>
<tbody>
<tr><td>Who controls how the work is done</td><td>The employer</td><td>The contractor, who controls methods and usually hours</td></tr>
<tr><td>Income tax</td><td>Withheld from each paycheck</td><td>Not withheld; contractor pays quarterly estimated tax</td></tr>
<tr><td>Social Security and Medicare</td><td>7.65% from the employee, matched by 7.65% from the employer</td><td>Self-employment tax of 15.3% on 92.35% of net earnings, paid by the contractor</td></tr>
<tr><td>Unemployment taxes</td><td>Paid by the employer</td><td>None; contractor is generally not covered</td></tr>
<tr><td>Benefits</td><td>Often health insurance, retirement match, paid leave</td><td>Self-funded</td></tr>
<tr><td>Wage and hour protections</td><td>Minimum wage and overtime rules usually apply</td><td>Generally do not apply</td></tr>
<tr><td>Business expenses</td><td>Unreimbursed job expenses generally not deductible on the federal return</td><td>Ordinary and necessary business expenses deductible on Schedule C</td></tr>
<tr><td>Year-end form</td><td>Form W-2</td><td>Form 1099-NEC if payments reach the threshold</td></tr>
<tr><td>Onboarding form</td><td>Form W-4 and Form I-9</td><td>Form W-9</td></tr>
<tr><td>How they bill</td><td>Paid through payroll</td><td>Usually sends an invoice</td></tr>
</tbody>
</table>
<p>The 1.45% Medicare portion has no wage cap, and an additional 0.9% Medicare tax applies to higher earners. The 6.2% Social Security portion stops at the annual wage base, $184,500 for 2026.</p>

<h2>How the IRS decides: the common-law test</h2>
<p>For federal tax purposes, the IRS asks whether the business has the right to control what will be done and how it will be done. Its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer">guidance on independent contractors and employees</a> groups the evidence into three categories.</p>
<h3>Behavioral control</h3>
<p>Does the business control, or have the right to control, how the worker does the job? Detailed instructions about when, where and how to work, required training in the company's methods, and close supervision all point toward employment. A contractor is usually told the result wanted, not the method.</p>
<h3>Financial control</h3>
<p>Does the business control the financial side of the work? Signs of independence include the worker making a significant investment in their own tools, having unreimbursed expenses, offering services to the wider market, being paid a flat fee per project rather than by the hour, and being able to make a profit or a loss.</p>
<h3>Type of relationship</h3>
<p>How do the parties see the relationship? Written contracts, benefits such as insurance or paid leave, an expectation that the work continues indefinitely, and whether the work is a key part of the regular business all matter. A contract that says "independent contractor" helps, but it does not override how the work is actually done.</p>
<p>No single factor decides the question, and the IRS says businesses should weigh all of them and document their reasoning. If it is unclear, either side can file Form SS-8 to ask the IRS for a determination, which the IRS says may take at least six months.</p>
<h3>Other tests you may face</h3>
<p>The IRS test is not the only one. The Department of Labor applies an economic reality test for minimum wage and overtime purposes, and many states use their own rules for unemployment insurance, workers' compensation and state wage law. Some states use an "ABC" test that is harder to pass than the federal one. A worker can be a contractor for one purpose and an employee for another, so check the rules in each state where people work.</p>

<h2>Taxes: what changes for each side</h2>
<p>The biggest practical W-2 vs 1099 difference shows up in who sends money to the IRS and when.</p>
<h3>For the business</h3>
<p>Employing someone on a W-2 means running payroll: withholding federal income tax and the employee's share of FICA, paying the employer's 7.65% share, paying federal and state unemployment taxes, filing quarterly and annual payroll returns, and issuing Form W-2 by January 31. Hiring a contractor means collecting a Form W-9 and, if payments reach the threshold, filing Form 1099-NEC. For payments made after December 31, 2025, that threshold is $2,000 per payee per year. Our guides to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> and the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold</a> cover the paperwork in detail.</p>
<h3>For the worker</h3>
<p>An employee's taxes are mostly handled through withholding. A contractor is responsible for income tax and <a href="/blog/self-employment-tax">self-employment tax</a> on net profit, usually paid through <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>, and reports business income and expenses on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>. In return, the contractor can deduct half of their self-employment tax when working out adjusted gross income, and can deduct ordinary and necessary business costs. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers the common ones.</p>

<h2>Worked example: matching an $80,000 salary</h2>
<p>All figures are illustrative and simplified. They ignore income tax brackets, state taxes and the additional Medicare tax.</p>
<h3>Step 1: What the employee pays in FICA</h3>
<ul>
<li>Salary: $80,000</li>
<li>Employee FICA: $80,000 x 7.65% = $6,120</li>
<li>The employer pays another $6,120, which the employee never sees.</li>
</ul>
<h3>Step 2: What a contractor earning the same $80,000 net profit pays</h3>
<ul>
<li>Net earnings subject to self-employment tax: $80,000 x 92.35% = $73,880</li>
<li>Self-employment tax: $73,880 x 15.3% = $11,303.64</li>
<li>Extra compared with the employee: $11,303.64 - $6,120 = $5,183.64</li>
<li>Half of the self-employment tax ($5,651.82) is deductible for income tax, which softens, but does not erase, the difference.</li>
</ul>
<h3>Step 3: What the employer actually spends on the employee</h3>
<ul>
<li>Salary: $80,000</li>
<li>Employer FICA: $6,120</li>
<li>Assumed benefits (health insurance and retirement match): $12,000</li>
<li>Assumed unemployment taxes and other costs: $1,000</li>
<li>Total: $80,000 + $6,120 + $12,000 + $1,000 = $99,120</li>
</ul>
<h3>Step 4: A contractor rate that compares fairly</h3>
<p>Suppose the contractor wants roughly the same economic position and expects 1,500 billable hours a year after holidays, sick days, sales and admin time (compared with about 2,080 paid hours for a full-time employee). Covering the employer's total cost alone gives $99,120 / 1,500 = about $66 per hour, compared with the employee's $80,000 / 2,080 = about $38.46 per hour. Add business expenses and the contractor's own retirement savings, and the gap widens further. This is why contractor rates that look high next to a salary often are not.</p>

<h2>Misclassification: the risks</h2>
<p>Treating an employee as a contractor saves payroll costs in the short term, but the IRS says a business that does so without a reasonable basis may be held liable for employment taxes for that worker. Penalties and interest can follow, and states may pursue unpaid unemployment insurance, workers' compensation premiums and wage claims such as unpaid overtime.</p>
<p>Businesses that realize they have misclassified workers have options. The IRS Voluntary Classification Settlement Program, entered with Form 8952, lets eligible businesses reclassify workers as employees for future periods with partial relief from federal employment taxes. Workers who believe they were misclassified can use Form 8919 to pay only the employee share of Social Security and Medicare tax on those wages.</p>

<h2>Checklist: engaging a worker the right way</h2>
<ol>
<li>Describe the work: is it a defined project with a deliverable, or ongoing duties under your direction?</li>
<li>Run through the three common-law categories and write down how each factor applies.</li>
<li>Check your state's test, and the Department of Labor's, if wage and hour law applies.</li>
<li>For a contractor, sign a written agreement that matches reality; our <a href="/blog/freelance-contract-template">freelance contract template</a> is a starting point.</li>
<li>Collect Form W-9 before the first payment.</li>
<li>Pay against invoices, not timesheets on your payroll calendar, and do not provide employee-style benefits.</li>
<li>Track payments per payee and file Form 1099-NEC by January 31 when the threshold is met.</li>
<li>Review the relationship each year; arrangements drift as work continues.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Relying on the contract label.</strong> The IRS looks at the real relationship.</li>
<li><strong>Converting an employee to a contractor for the same job.</strong> Same duties, same supervision, different form is a classic red flag.</li>
<li><strong>Comparing a contractor rate with an hourly wage.</strong> Use total employer cost and realistic billable hours.</li>
<li><strong>Forgetting estimated taxes.</strong> New contractors who set nothing aside often face a large bill and penalties in April.</li>
<li><strong>Confusing take-home pay with gross pay.</strong> An employee's net pay is after withholding; a contractor's invoice total is before taxes. Our explainer on <a href="/blog/gross-pay-vs-net-pay">gross pay vs net pay</a> sets out the difference.</li>
<li><strong>No paper trail.</strong> Contractors who never invoice make it harder for both sides to show an arm's-length business relationship.</li>
</ul>

<h2>Invoicing as a 1099 contractor</h2>
<p>Contractors usually bill by invoice. A clear invoice shows your business name, the client, a unique invoice number, a description of the deliverable, the amount and the payment terms. It supports the independent nature of the work and gives you a record to reconcile against any 1099-NEC you receive. See our guide to the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>, then create one in the free <a href="/invoice-generator/usa">US invoice generator</a>, which builds a PDF in your browser. It does not file 1099s, run payroll or calculate taxes for you.</p>

<h2>Summary</h2>
<p>In the W-2 vs 1099 question, the facts of the relationship decide the answer, not preference. Employees get withholding, employer-paid payroll taxes and protections; contractors get independence and deductions but carry the full tax load and their own benefits. Businesses should classify carefully and document why. Workers comparing offers should convert everything into total annual value before choosing.</p>
`,
  },
  {
    slug: "s-corp-vs-llc",
    title: "S Corp vs LLC: Taxes, Pros and Cons for Small Businesses",
    description:
      "S corp vs LLC explained: how each is taxed, reasonable salary rules, when the S corp election saves money, with worked break-even examples for small businesses.",
    category: "comparisons",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["llc-vs-sole-proprietorship", "self-employment-tax", "w2-vs-1099"],
    faqs: [
      {
        q: "Is an S corp the same as an LLC?",
        a: "No. An LLC is a legal entity formed under state law that gives owners limited liability. An S corporation is a federal tax status that an eligible corporation, or an LLC, can elect by filing Form 2553 with the IRS. So the real question is usually whether your LLC should keep its default tax treatment or elect to be taxed as an S corp.",
      },
      {
        q: "At what income does an S corp election make sense?",
        a: "There is no official threshold. The election saves Social Security and Medicare tax only on profit above a reasonable salary, and it adds costs for payroll, a separate return and often higher accounting fees. In our illustrative examples, savings were negative at $50,000 of profit and clearly positive at $120,000. Run the numbers with your own profit, a defensible salary and real costs, ideally with a tax professional.",
      },
      {
        q: "What is a reasonable salary for an S corp owner?",
        a: "It is the pay the business would have to offer someone else to do the work you do. The IRS lists factors such as your training and experience, duties, time devoted to the business, what comparable businesses pay for similar services and payments to non-shareholder employees. The IRS can reclassify distributions as wages when the salary is too low, and courts have supported that.",
      },
      {
        q: "Can a single-member LLC be taxed as an S corp?",
        a: "Yes, if it meets the S corporation requirements. A single-member LLC is a disregarded entity by default, reported on the owner's Schedule C, but it can elect S corp status by filing Form 2553. The owner then becomes an employee of the business for payroll purposes and the business files Form 1120-S each year.",
      },
      {
        q: "What are the requirements to be an S corp?",
        a: "According to the IRS, the business must be a domestic corporation or eligible entity, have no more than 100 shareholders, have only allowable shareholders such as individuals, certain trusts and estates, and have only one class of stock. Partnerships, corporations and nonresident aliens cannot be shareholders, and certain financial institutions and insurance companies are ineligible. All shareholders must sign Form 2553.",
      },
      {
        q: "When is the deadline to file Form 2553?",
        a: "Generally, the election must be filed no more than two months and 15 days after the beginning of the tax year it is to take effect, or at any time during the preceding tax year. For a calendar-year business, that is usually mid-March. The IRS has procedures for late election relief in some cases, so check the current Form 2553 instructions if you missed it.",
      },
      {
        q: "Does an S corp avoid double taxation?",
        a: "Generally, yes. Like a default LLC, an S corporation is a pass-through entity: income, deductions and credits flow to the owners on Schedule K-1 and are taxed on their personal returns, so there is normally no corporate income tax at the federal level. The IRS notes that an S corporation may still owe tax on certain built-in gains and passive income.",
      },
      {
        q: "Can I switch from S corp back to LLC default taxation?",
        a: "You can revoke an S election, but doing so generally prevents re-electing S status for five years without IRS consent, and switching tax treatment can have its own tax consequences. Because of this, treat the election as a multi-year decision. Model at least two or three years of expected profit before electing, and get advice before revoking.",
      },
      {
        q: "Do S corps pay state taxes?",
        a: "It depends on the state. Most states follow the federal pass-through treatment, but some impose entity-level taxes or fees on S corporations or LLCs, and a few do not recognize the S election at all. For example, California charges S corporations a franchise tax. Check your state revenue department's rules, because they can tip the break-even point either way.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> S corp vs LLC is not an either-or choice of entity. An LLC is a legal structure; an S corporation is a tax election that an LLC can make. Default LLC owners pay self-employment tax on all profit. With an S election, owners take a reasonable salary and pay payroll tax only on that, which can save money once profits are high enough.</p>

<p>Small business owners hear the same advice at almost every networking event: "You should be an S corp." Sometimes that is right. Often it is premature. The election can cut Social Security and Medicare taxes, but it adds payroll, a separate tax return, stricter bookkeeping and an IRS rule on owner pay that you cannot ignore.</p>

<p>This S corp vs LLC guide compares a default LLC with an LLC or corporation taxed as an S corp: how each is taxed, what reasonable compensation means, the costs, and worked examples that show where the break-even point sits. If you are still deciding whether to form an LLC at all, start with our guide to <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>.</p>

<p><em>This is general information about US federal tax rules as checked in October 2026, not tax or legal advice. State rules differ, and your numbers depend on your facts. Talk to a CPA or enrolled agent before making an election.</em></p>

<h2>S corp vs LLC at a glance</h2>
<table>
<thead><tr><th>Area</th><th>LLC with default taxation</th><th>LLC or corporation taxed as an S corp</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>State-law entity</td><td>Federal tax election (Form 2553)</td></tr>
<tr><td>Liability protection</td><td>Yes, from the LLC itself</td><td>Same; comes from the underlying LLC or corporation</td></tr>
<tr><td>Federal return</td><td>Single member: owner's Schedule C; multi-member: Form 1065</td><td>Form 1120-S, with a Schedule K-1 for each shareholder</td></tr>
<tr><td>Owner pay</td><td>Draws; no payroll needed</td><td>Reasonable salary through payroll, plus distributions</td></tr>
<tr><td>Social Security and Medicare</td><td>Self-employment tax on owner's share of net earnings</td><td>Payroll taxes on salary only; distributions not subject to them</td></tr>
<tr><td>Owners allowed</td><td>Any number, any type</td><td>Up to 100 eligible shareholders; no nonresident aliens, partnerships or corporations</td></tr>
<tr><td>Profit splits</td><td>Flexible for multi-member LLCs under the operating agreement</td><td>Must follow ownership; one class of stock</td></tr>
<tr><td>Admin and cost</td><td>Lower</td><td>Higher: payroll filings, separate return, cleaner books</td></tr>
</tbody>
</table>

<h2>How a default LLC is taxed</h2>
<p>By default, the IRS ignores a single-member LLC for income tax purposes. The owner reports business income and expenses on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> and pays income tax plus <a href="/blog/self-employment-tax">self-employment tax</a> on net earnings. A multi-member LLC is taxed as a partnership by default, filing Form 1065 and passing each member's share through on Schedule K-1.</p>
<p>Self-employment tax is 15.3% on 92.35% of net earnings: 12.4% for Social Security up to the annual wage base ($184,500 for 2026) and 2.9% for Medicare with no cap. It applies to all of an active owner's share of profit, whether the money is left in the business or withdrawn. Owners usually pay it through <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</p>

<h2>How S corp taxation works</h2>
<p>An S corporation is a pass-through entity too. According to the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations" target="_blank" rel="noopener noreferrer">IRS overview of S corporations</a>, income, losses, deductions and credits flow through to shareholders, who report them on their personal returns. The difference is how the owner is paid.</p>
<p>An owner who works in the business becomes an employee. The company runs payroll, withholds income tax and the employee's 7.65% of FICA, pays the employer's matching 7.65%, and pays unemployment taxes. Remaining profit can be paid out as distributions, which are taxed as income on the owner's return but are not subject to Social Security and Medicare tax. That gap is the entire source of the savings.</p>
<h3>Who can elect</h3>
<p>The IRS requires a domestic corporation or eligible entity with no more than 100 shareholders, only allowable shareholders (individuals, certain trusts and estates, not partnerships, corporations or nonresident aliens), and one class of stock. All shareholders sign Form 2553, which is generally due no more than two months and 15 days after the start of the tax year the election should take effect.</p>

<h2>Reasonable salary: the rule that decides the savings</h2>
<p>The IRS says S corporations must pay reasonable compensation to a shareholder-employee for services before taking non-wage distributions, and it can reclassify distributions as wages if pay is too low. Its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues" target="_blank" rel="noopener noreferrer">page on S corporation compensation</a> lists factors including:</p>
<ul>
<li>Training and experience</li>
<li>Duties and responsibilities</li>
<li>Time and effort devoted to the business</li>
<li>Payments to non-shareholder employees</li>
<li>What comparable businesses pay for similar services</li>
<li>Dividend history and the timing of bonuses</li>
</ul>
<p>The key, in the IRS's words, is determining what the shareholder-employee did for the S corporation. There is no IRS-approved percentage split, so treat rules of thumb like "60% salary, 40% distributions" with caution. A consultant who generates nearly all revenue personally will struggle to justify a low salary; a business whose profit comes mostly from staff or equipment has more room. Keep a short memo with salary data for your role.</p>

<h2>Worked examples: when does the election pay?</h2>
<p>The figures below are illustrative. They compare only Social Security and Medicare taxes plus assumed extra costs, and ignore income tax, state taxes and the qualified business income deduction, all of which can change the result.</p>
<h3>Example 1: $120,000 of profit</h3>
<p><strong>Default LLC:</strong></p>
<ul>
<li>Net earnings for self-employment tax: $120,000 x 92.35% = $110,820</li>
<li>Self-employment tax: $110,820 x 15.3% = $16,955.46</li>
</ul>
<p><strong>S corp with a $70,000 reasonable salary:</strong></p>
<ul>
<li>Employee FICA: $70,000 x 7.65% = $5,355</li>
<li>Employer FICA: $70,000 x 7.65% = $5,355</li>
<li>Total payroll tax: $5,355 + $5,355 = $10,710</li>
<li>Remaining profit (after salary and employer FICA) of $44,645 is paid as distributions, free of payroll tax.</li>
</ul>
<p><strong>Comparison:</strong> $16,955.46 - $10,710 = $6,245.46 in payroll tax saved. Subtract assumed extra costs of $2,500 a year (payroll service, Form 1120-S preparation, unemployment taxes): $6,245.46 - $2,500 = <strong>$3,745.46 net saving</strong>.</p>
<h3>Example 2: $50,000 of profit</h3>
<ul>
<li>Default LLC: $50,000 x 92.35% = $46,175; $46,175 x 15.3% = $7,064.78</li>
<li>S corp with a $40,000 salary: $40,000 x 15.3% = $6,120</li>
<li>Payroll tax saved: $7,064.78 - $6,120 = $944.78</li>
<li>After the same $2,500 of assumed costs: $944.78 - $2,500 = <strong>-$1,555.22</strong>, a net loss</li>
</ul>
<p>The pattern is what matters. Savings grow with the gap between profit and a defensible salary; costs are mostly fixed. Below a certain profit level the election costs more than it saves, and that level depends heavily on what salary your role requires.</p>
<h3>Other effects to model</h3>
<ul>
<li><strong>Qualified business income deduction:</strong> for S corps, wages paid to the owner are not part of qualified business income, so the deduction can be smaller than for a default LLC.</li>
<li><strong>Retirement contributions:</strong> some plans base contributions on W-2 salary, so a lower salary can limit them.</li>
<li><strong>Social Security benefits:</strong> lower taxed earnings can mean lower future benefits.</li>
<li><strong>State taxes:</strong> some states charge entity-level taxes or fees on S corporations.</li>
</ul>

<h2>Multi-member LLCs and partners</h2>
<p>The S corp vs LLC trade-off looks different when there are several owners. A multi-member LLC taxed as a partnership can allocate profits and losses flexibly under its operating agreement, for example giving one partner a larger share in a year when they brought in more work, provided the allocations follow partnership tax rules. An S corporation cannot do that: with one class of stock, distributions must follow ownership percentages, and each working owner needs their own reasonable salary. Partners who value flexible splits, or who plan to bring in an investor that is itself a company or a non-US person, may find the S election too restrictive. Partners with equal ownership, similar roles and steady profits are more likely to benefit.</p>

<h2>Pros and cons</h2>
<h3>Default LLC</h3>
<ul>
<li><strong>Pros:</strong> simple to run, no payroll, flexible profit splits for multi-member LLCs, fewer filings.</li>
<li><strong>Cons:</strong> self-employment tax on all active profit.</li>
</ul>
<h3>S corp election</h3>
<ul>
<li><strong>Pros:</strong> payroll tax only on salary, which can mean meaningful savings at higher profits; owner salary through payroll can simplify personal tax withholding.</li>
<li><strong>Cons:</strong> payroll and extra returns, reasonable-salary scrutiny, ownership restrictions, less flexible profit allocation, and revoking the election generally blocks re-electing for five years without IRS consent.</li>
</ul>

<h2>Checklist before electing S corp status</h2>
<ol>
<li>Confirm your business has steady profit, not just revenue; our explainer on <a href="/blog/revenue-vs-profit">revenue vs profit</a> covers the difference.</li>
<li>Research a reasonable salary for your role and document the sources.</li>
<li>Estimate payroll, accounting and state costs with real quotes.</li>
<li>Model at least two years using your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>.</li>
<li>Check that every owner is an eligible shareholder.</li>
<li>Make sure the business has an EIN; see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li>File Form 2553 on time, signed by all shareholders.</li>
<li>Set up payroll before the first owner paycheck and keep business and personal money separate.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Electing too early.</strong> At modest profits, fixed costs can exceed the payroll tax saved.</li>
<li><strong>Paying no salary or a token salary.</strong> The IRS can reclassify distributions as wages and assess tax, penalties and interest.</li>
<li><strong>Taking distributions out of proportion to ownership.</strong> With one class of stock, distributions should follow ownership percentages.</li>
<li><strong>Mixing personal and business spending.</strong> S corps need clean books; our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> covers the habits.</li>
<li><strong>Forgetting state rules,</strong> which can add taxes or ignore the election.</li>
<li><strong>Confusing the owner's status with contractors'.</strong> Owner-employees are on payroll; outside help may be employees or contractors under the tests in our <a href="/blog/w2-vs-1099">W-2 vs 1099 guide</a>.</li>
</ul>

<h2>Invoicing does not change much</h2>
<p>Clients see little difference between an LLC and an S corp. Invoices should show the legal business name exactly as registered, including "LLC" or "Inc." where applicable, and the business, not you personally, should be paid. The free <a href="/invoice-generator/usa">US invoice generator</a> creates a PDF with your business details in the browser; it does not run payroll, file returns or make elections.</p>

<h2>Bottom line</h2>
<p>For S corp vs LLC, the useful question is whether your LLC should elect S corp taxation now. If profits comfortably exceed a defensible salary plus the extra costs, the election can save thousands a year. If not, the default LLC is simpler and often cheaper. Run the numbers with your own figures and a professional before you file.</p>
`,
  },
  {
    slug: "sole-trader-vs-limited-company",
    title: "Sole Trader vs Limited Company: Which Is Better in the UK?",
    description:
      "Sole trader vs limited company in the UK for 2026/27: tax, NI, dividends, liability and admin compared, with a worked example at £60,000 profit to show the gap.",
    category: "comparisons",
    jurisdiction: "United Kingdom",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["sole-trader-invoice-uk", "self-assessment-tax-return-uk", "s-corp-vs-llc"],
    faqs: [
      {
        q: "Is it better to be a sole trader or a limited company in the UK?",
        a: "It depends on profit, risk and how much admin you want. Sole trader status is simpler and cheaper to run, and after the April 2026 dividend tax rise the tax advantage of a company is smaller at modest profits. A limited company offers limited liability, can retain profits at corporation tax rates and may suit higher earners or businesses that need investment. Model both with your own figures.",
      },
      {
        q: "At what profit does a limited company become worth it?",
        a: "There is no fixed figure. In our illustrative 2026/27 example at £60,000 profit, the two structures left almost exactly the same take-home pay before accountancy fees, so the sole trader came out ahead once costs were included. The case for a company tends to strengthen when profits are higher, when you can leave profit in the business, or when liability protection matters. Ask an accountant to model your numbers.",
      },
      {
        q: "What are the dividend tax rates for 2026/27?",
        a: "According to GOV.UK, for the tax year 6 April 2026 to 5 April 2027 the dividend allowance is £500, and dividends above it are taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. The basic and higher rates rose by two percentage points from April 2026, which narrowed the gap between the two structures.",
      },
      {
        q: "What corporation tax rate does a small limited company pay?",
        a: "GOV.UK lists a small profits rate of 19% for profits of £50,000 or less and a main rate of 25% for profits above £250,000. Between those limits, marginal relief reduces the bill, giving an effective rate between 19% and 25%. The limits are reduced for short accounting periods and shared between associated companies.",
      },
      {
        q: "What National Insurance does a sole trader pay in 2026/27?",
        a: "Sole traders pay Class 4 National Insurance on profits: 6% between the lower profits limit of £12,570 and the upper profits limit of £50,270, and 2% above that, according to HMRC's 2026/27 rates. Class 2 is no longer compulsory; those with profits above the small profits threshold of £7,105 get credits automatically, and those below can pay voluntarily at £3.65 a week.",
      },
      {
        q: "Can I switch from sole trader to limited company later?",
        a: "Yes. Many people start as sole traders and incorporate when profits grow. You register a company with Companies House, tell HMRC you have stopped trading as a sole trader, and transfer the business. Transferring assets, contracts and goodwill can have tax consequences, so get advice on timing. Your clients will need new invoices showing the company's details from the switch date.",
      },
      {
        q: "Do limited company directors still file a Self Assessment return?",
        a: "Often, yes. Directors who take dividends above the dividend allowance, or who have other untaxed income, usually need to file a Self Assessment tax return to pay tax on it. Salary paid through PAYE is taxed at source. HMRC decides who must file, so check its guidance each year rather than assuming payroll covers everything.",
      },
      {
        q: "Is a sole trader personally liable for business debts?",
        a: "Yes. A sole trader and the business are the same legal person, so creditors can pursue personal assets for business debts. A limited company is a separate legal entity, so shareholders' liability is generally limited to what they invested or guaranteed. In practice, directors may give personal guarantees for loans or leases, and directors can be liable for wrongful trading, so limited liability is not absolute.",
      },
      {
        q: "What extra admin does a limited company involve?",
        a: "A company must file annual accounts and a confirmation statement with Companies House, file a Company Tax Return with HMRC, run payroll if it pays salaries, and keep statutory records. Directors have legal duties, and the company's accounts and directors' details appear on the public register. Many owners pay an accountant for this, which is a real cost to include in any comparison.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Sole trader vs limited company depends on profit, risk and admin appetite. Sole traders pay income tax and Class 4 National Insurance on all profit, with simple admin. A limited company pays corporation tax at 19% to 25%, then owners draw salary and dividends. After the April 2026 dividend tax rise, the tax saving at modest profits is small or gone.</p>

<p>Choosing a business structure is one of the first decisions UK freelancers and small business owners make, and one of the most debated. For years, the standard advice was to incorporate once profits reached a certain level, because a small salary plus dividends beat paying income tax and National Insurance as a sole trader. Successive changes to corporation tax, National Insurance and dividend tax have eroded that advantage, and the 2026/27 dividend rates eroded it again.</p>

<p>This guide compares the two structures on tax, liability, admin, credibility and invoicing, with a worked example using 2026/27 rates. It is written for England, Wales and Northern Ireland income tax bands; Scotland sets different income tax rates on non-savings, non-dividend income.</p>

<p><em>This is general information based on GOV.UK rates checked in October 2026, not tax advice. Your result depends on your profit, other income, pension plans and circumstances. Speak to an accountant before changing structure.</em></p>

<h2>Sole trader vs limited company at a glance</h2>
<table>
<thead><tr><th>Area</th><th>Sole trader</th><th>Limited company</th></tr></thead>
<tbody>
<tr><td>Legal status</td><td>You and the business are the same person</td><td>Separate legal entity owned by shareholders</td></tr>
<tr><td>Liability</td><td>Unlimited personal liability</td><td>Generally limited to investment or guarantees</td></tr>
<tr><td>Setting up</td><td>Register for Self Assessment with HMRC</td><td>Incorporate at Companies House, then register for Corporation Tax</td></tr>
<tr><td>Tax on profit</td><td>Income tax at 20%, 40% or 45% above the personal allowance</td><td>Corporation tax: 19% up to £50,000, 25% above £250,000, marginal relief between</td></tr>
<tr><td>National Insurance</td><td>Class 4: 6% from £12,570 to £50,270, 2% above</td><td>On salary only: employer 15% above £5,000 a year; employee 8% above £12,570</td></tr>
<tr><td>Taking money out</td><td>Drawings, no extra tax</td><td>Salary through PAYE and dividends (10.75%, 35.75% or 39.35% above a £500 allowance)</td></tr>
<tr><td>Annual filings</td><td>Self Assessment return</td><td>Accounts, confirmation statement, Company Tax Return, payroll, usually directors' Self Assessment</td></tr>
<tr><td>Privacy</td><td>Accounts are private</td><td>Accounts and director details on the public register</td></tr>
<tr><td>Typical running cost</td><td>Low</td><td>Higher, mostly accountancy and payroll</td></tr>
</tbody>
</table>

<h2>The 2026/27 rates that matter</h2>
<p>These figures come from GOV.UK pages on <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer">tax on dividends</a>, <a href="https://www.gov.uk/corporation-tax-rates" target="_blank" rel="noopener noreferrer">Corporation Tax rates</a> and <a href="https://www.gov.uk/government/publications/rates-and-allowances-national-insurance-contributions/rates-and-allowances-national-insurance-contributions" target="_blank" rel="noopener noreferrer">National Insurance rates and allowances</a>.</p>
<h3>Income tax</h3>
<p>The personal allowance is £12,570. Income in the basic rate band, up to £50,270, is taxed at 20%; the higher rate is 40% and the additional rate 45%. The personal allowance is reduced for income over £100,000.</p>
<h3>National Insurance</h3>
<ul>
<li><strong>Sole traders, Class 4:</strong> 6% on profits between £12,570 and £50,270, and 2% above.</li>
<li><strong>Class 2:</strong> no longer compulsory. Profits above the small profits threshold of £7,105 earn credits automatically; below it, voluntary contributions are £3.65 a week.</li>
<li><strong>Employees, Class 1:</strong> 8% between the primary threshold (£242 a week) and the upper earnings limit (£967 a week), 2% above.</li>
<li><strong>Employers:</strong> 15% above the secondary threshold of £96 a week, about £5,000 a year. The Employment Allowance, up to £10,500, generally cannot be claimed by a company whose only employee paid above that threshold is a director.</li>
</ul>
<h3>Corporation tax and dividends</h3>
<p>Companies pay 19% on profits up to £50,000 and 25% above £250,000, with marginal relief in between. Dividends are paid from post-tax profit. The first £500 is covered by the dividend allowance; the rest is taxed at 10.75% (basic rate), 35.75% (higher rate) or 39.35% (additional rate). The basic and higher rates both rose by two percentage points from 6 April 2026.</p>

<h2>Worked example: £60,000 of profit</h2>
<p>Illustrative only. It assumes no other income, England tax bands, no pension contributions, all post-tax company profit paid as dividends, and no Employment Allowance (a one-director company).</p>
<h3>As a sole trader</h3>
<ul>
<li>Income tax, basic rate: (£50,270 - £12,570) = £37,700 x 20% = £7,540.00</li>
<li>Income tax, higher rate: (£60,000 - £50,270) = £9,730 x 40% = £3,892.00</li>
<li>Class 4 NI at 6%: £37,700 x 6% = £2,262.00</li>
<li>Class 4 NI at 2%: £9,730 x 2% = £194.60</li>
<li>Total tax and NI: £7,540 + £3,892 + £2,262 + £194.60 = £13,888.60</li>
<li>Take-home: £60,000 - £13,888.60 = <strong>£46,111.40</strong></li>
</ul>
<h3>As a limited company</h3>
<ul>
<li>Director's salary: £12,570 (no income tax and no employee NI at this level)</li>
<li>Employer NI: (£12,570 - £5,000) x 15% = £1,135.50</li>
<li>Company profit after salary and employer NI: £60,000 - £12,570 - £1,135.50 = £46,294.50</li>
<li>Corporation tax at 19%: £46,294.50 x 19% = £8,795.96</li>
<li>Available for dividends: £46,294.50 - £8,795.96 = £37,498.54</li>
<li>Dividend tax: (£37,498.54 - £500 allowance) = £36,998.54 x 10.75% = £3,977.34 (all within the basic rate band, because £12,570 + £37,498.54 = £50,068.54)</li>
<li>Take-home: £12,570 + £37,498.54 - £3,977.34 = <strong>£46,091.20</strong></li>
</ul>
<h3>What the numbers show</h3>
<p>The difference is £46,111.40 - £46,091.20 = £20.20 in the sole trader's favour, before the company's extra accountancy and filing costs. In this example, at this profit, incorporating saves nothing on tax. A different salary level, a pension contribution through the company, retaining profit in the company or a much higher profit would change the result, which is why an accountant's model with your own figures matters more than any rule of thumb.</p>

<h2>Beyond tax: liability, credibility and flexibility</h2>
<h3>Limited liability</h3>
<p>A company's debts belong to the company, so your house and savings are generally protected if the business fails. This matters more in businesses with large contracts, stock, staff or leases. It matters less for a low-risk service business with professional indemnity insurance, and lenders and landlords often ask directors for personal guarantees anyway.</p>
<h3>Credibility and client requirements</h3>
<p>Some larger clients and agencies prefer, or require, suppliers to work through a limited company. Contractors working through their own company for a single client should also consider the off-payroll working rules, known as IR35, which can treat the engagement like employment for tax purposes.</p>
<h3>Retaining profit</h3>
<p>A company can keep profit in the business after corporation tax and pay it out in a later year, for example when your other income is lower. A sole trader is taxed on all profit in the year it is made, whether or not it is withdrawn.</p>
<h3>Privacy and admin</h3>
<p>Company accounts and directors' details are public on the Companies House register. Company money belongs to the company, so withdrawals must be salary, dividends, expenses or a properly recorded director's loan.</p>

<h2>Admin and Making Tax Digital</h2>
<p>Sole traders file one <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a> a year, but Making Tax Digital for Income Tax is changing that. From April 2026 it applies to sole traders and landlords with qualifying income over £50,000, and from April 2027 to those over £30,000, requiring digital records and quarterly updates. Our guide to <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> covers what it involves. Limited companies are outside MTD for Income Tax but have their own filing duties. Both structures register for VAT once taxable turnover passes the <a href="/blog/vat-registration-threshold-uk">VAT registration threshold</a>, and then follow the same VAT return process covered in <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return</a>.</p>

<h2>Switching from sole trader to limited company</h2>
<p>The sole trader vs limited company choice is not permanent. Many owners start as sole traders and incorporate later. The usual steps are to register the company at Companies House, register it for Corporation Tax and PAYE, open a business bank account in the company's name, move contracts and client accounts across, and tell HMRC you have stopped self-employment. Transferring equipment or goodwill can trigger tax, so agree the details with an accountant first. From day one, keep company and personal money apart; our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> covers the habits, and a director's salary should come with a proper payslip, as shown in our <a href="/blog/salary-slip-format">salary slip format guide</a>.</p>

<h2>Checklist: choosing your structure</h2>
<ol>
<li>Estimate realistic annual profit for this year and next.</li>
<li>Note other income, such as employment or rental income, which affects your tax bands.</li>
<li>Get an accountant to model sole trader vs limited company with your figures, including pension options.</li>
<li>Add the cost of accountancy, payroll and Companies House filings to the company column.</li>
<li>Consider liability: contracts, staff, stock, leases and insurance.</li>
<li>Check whether key clients require a limited company and whether IR35 could apply.</li>
<li>Decide whether you want to retain profit in the business.</li>
<li>Review the decision each tax year as rates and profits change.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Relying on old advice.</strong> Comparisons from before April 2026 used lower dividend rates and overstate the company advantage.</li>
<li><strong>Ignoring running costs.</strong> A small tax saving can disappear into accountancy fees.</li>
<li><strong>Treating company money as personal.</strong> Unrecorded withdrawals become director's loans with their own tax rules.</li>
<li><strong>Assuming Employment Allowance applies</strong> to a one-director company where it generally does not.</li>
<li><strong>Forgetting Scotland's different income tax bands</strong> when using an example built on England rates.</li>
<li><strong>Not updating invoices after incorporating.</strong> Invoices must show the right legal entity from the switch date.</li>
</ul>

<h2>Invoicing as a sole trader or a company</h2>
<p>Sole traders invoice in their own name or a trading name, with a business address; our guide to the <a href="/blog/sole-trader-invoice-uk">sole trader invoice in the UK</a> lists what to include. A limited company's invoices should show its registered name exactly, and company law also requires its registered number, place of registration and registered office address on business documents. VAT-registered businesses add their VAT number and VAT details. You can create either type of invoice in pounds with the free <a href="/invoice-generator/uk">UK invoice generator</a>, which builds the PDF in your browser. It does not file returns, run payroll or submit anything to HMRC.</p>
<p>If you are comparing structures on behalf of a US business instead, our <a href="/blog/s-corp-vs-llc">S corp vs LLC guide</a> covers the American equivalent decision.</p>

<h2>Verdict</h2>
<p>In 2026/27, the sole trader vs limited company decision is less about tax than it used to be. At modest profits the tax difference can be negligible, so simplicity often wins. A limited company makes more sense when profits are higher, when you want to retain earnings, when liability protection matters or when clients require it. Get a personalised model before you incorporate, and revisit it whenever rates change.</p>
`,
  },
];
