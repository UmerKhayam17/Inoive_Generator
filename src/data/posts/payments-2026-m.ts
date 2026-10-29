import type { PostDraft } from "../blog";

export const PAYMENTS_2026_M_POSTS: PostDraft[] = [
  {
    slug: "how-to-accept-crypto-payments",
    title: "How to Accept Crypto Payments for Business (2026 Guide)",
    description:
      "How to accept crypto payments as a business in 2026: processors vs wallets, stablecoins, volatility, IRS rules, Form 1099-DA and how to invoice in crypto.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "stablecoin-invoice-payments",
      "cross-border-payment-fees",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "Is it legal for a US business to accept cryptocurrency?",
        a: "Yes. No federal law stops a business from accepting cryptocurrency as payment for goods or services, and the IRS treats it as property for tax purposes. If you use a payment processor, the processor handles its own licensing and anti-money-laundering checks. Businesses that hold or exchange crypto for other people, rather than just accepting payment, may need money transmitter licenses, so get legal advice before offering those services.",
      },
      {
        q: "Will I get a Form 1099-DA for crypto my business receives?",
        a: "Not usually for the receipt itself. Form 1099-DA is filed by brokers to report sales and exchanges of digital assets. If you later sell or convert the crypto through a custodial exchange, that exchange may issue a 1099-DA reporting your gross proceeds, and for assets acquired from 2026 in that account, your basis. Payment processors report their customers' crypto payments, not the merchant's income. You must report the income either way.",
      },
      {
        q: "Can customers get refunds on crypto payments?",
        a: "Crypto transactions cannot be reversed by the network, so there are no chargebacks as there are with cards. Refunds happen only if you send a new payment back. Set a written refund policy that states whether refunds are made in the original asset or in the dollar amount paid, and which wallet address and network the customer must provide. Many processors include a refund tool that handles the conversion.",
      },
      {
        q: "Should I keep the crypto or convert it to dollars?",
        a: "Most small businesses convert to dollars right away, either automatically through the processor or by selling soon after receipt. Converting removes price risk and simplifies bookkeeping, since there is little or no gain or loss to track. Holding crypto is an investment decision, and every later sale or spend creates a taxable gain or loss that you must calculate from the value on the day you received it.",
      },
      {
        q: "What does it cost to accept crypto payments?",
        a: "Processor fees are usually a percentage of each payment, and many are lower than card fees; Stripe, for example, has listed a 1.5% fee for stablecoin payments. Converting to dollars and withdrawing to a bank can add spreads or withdrawal fees. If you accept directly to your own wallet you pay no processor fee, but you take on network fees, security, conversion and recordkeeping yourself.",
      },
      {
        q: "Do I have to collect sales tax on purchases paid in crypto?",
        a: "Yes, if the sale is taxable. Sales tax depends on what you sell and where, not on how the customer pays. Calculate tax on the dollar price of the sale, collect it as part of the total, and remit it to the state in dollars. Your invoice or receipt should show the dollar amounts of the item price and the tax, alongside the crypto amount actually received.",
      },
      {
        q: "Can I pay my contractors or employees in crypto?",
        a: "You can pay contractors in crypto, but you report the fair market value in dollars at the time of payment, which counts toward the Form 1099-NEC threshold ($2,000 for payments made in 2026). Paying employees in crypto is more complex: wages are subject to withholding, payroll taxes and state wage-payment laws, many of which require payment in cash or a cash equivalent. Check state rules before trying it.",
      },
      {
        q: "Which cryptocurrencies should a small business accept?",
        a: "Start with what your customers actually ask for. Stablecoins such as USDC are the most practical for business payments because their value tracks the dollar, which reduces price risk. Bitcoin is the most widely recognized. Accepting many tokens adds conversion and accounting work with little extra demand. Whatever you accept, specify the exact token and network on your invoice, since sending on the wrong network can lose funds.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To accept crypto payments, a business either uses a crypto payment processor that converts payments to dollars and deposits them in your bank, or accepts coins directly into its own wallet. Most small businesses use a processor and stablecoins to avoid price swings. For US taxes, crypto received is income at its dollar value on the day you receive it.</p>

<p>Customers sometimes ask to pay in Bitcoin or USDC, especially international clients and tech-savvy buyers. Accepting crypto payments can lower fees on cross-border invoices and remove chargebacks, but it adds price risk, security work and tax recordkeeping. This guide explains the options, compares processors with self-custody wallets, walks through a worked example with real numbers, and covers the 2026 IRS rules, including Form 1099-DA.</p>

<h2>What does it mean to accept crypto payments?</h2>
<p>Accepting crypto means a customer sends a digital asset, such as Bitcoin (BTC), Ether (ETH) or a dollar-backed stablecoin like USDC, from their wallet to an address you control or that a processor controls for you. The payment settles on a blockchain, usually within minutes, and cannot be reversed by the network.</p>
<p>There are two main types of asset to consider:</p>
<ul>
<li><strong>Volatile cryptocurrencies</strong> such as Bitcoin and Ether, whose dollar value can move several percent in a day.</li>
<li><strong>Stablecoins</strong> such as USDC, designed to hold a value of one US dollar. The federal GENIUS Act, signed in July 2025, created a licensing and reserve framework for payment stablecoin issuers, which has encouraged mainstream payment companies to support them. Our guide to <a href="/blog/stablecoin-invoice-payments">stablecoin invoice payments</a> goes deeper on this option.</li>
</ul>

<h2>How to accept crypto payments: processor vs direct wallet</h2>
<table><thead><tr><th>Factor</th><th>Crypto payment processor</th><th>Direct to your own wallet</th></tr></thead><tbody>
<tr><td>Setup</td><td>Business account, identity verification (KYB), bank details</td><td>Create a wallet; no approval needed</td></tr>
<tr><td>Price risk</td><td>Can auto-convert to dollars at checkout</td><td>You hold the asset until you sell</td></tr>
<tr><td>Fees</td><td>Percentage per payment plus possible payout fees</td><td>Network fees only, plus exchange fees when you sell</td></tr>
<tr><td>Checkout</td><td>Hosted pages, invoice links, plugins for ecommerce platforms</td><td>You share an address or QR code manually</td></tr>
<tr><td>Records</td><td>Reports with dollar values for each payment</td><td>You record the dollar value yourself</td></tr>
<tr><td>Security</td><td>Processor holds keys or settles quickly to fiat</td><td>You protect private keys and seed phrase</td></tr>
<tr><td>Best for</td><td>Most small businesses</td><td>Occasional payments from clients you know</td></tr>
</tbody></table>

<h3>Common crypto payment processors</h3>
<p>Options in the US include BitPay, Coinbase's business payment tools and Stripe, which supports stablecoin payments for eligible US businesses. Stripe's <a href="https://docs.stripe.com/crypto/stablecoins" target="_blank" rel="noopener noreferrer">stablecoin payments documentation</a> has listed a 1.5% fee. PayPal also offers crypto options for some US merchants. Supported coins, countries, fees and payout methods change often, so compare current pricing pages before choosing. Look for automatic conversion to dollars, invoice or payment link support, refund tools, and downloadable reports that show the dollar value of each payment.</p>

<h2>Step by step: setting up crypto payments</h2>
<ol>
<li><strong>Decide why.</strong> Lower international fees, customer demand or faster settlement. This drives which assets and which provider you choose.</li>
<li><strong>Choose assets and networks.</strong> Start with one stablecoin and, if customers ask, Bitcoin. Name the network for each (for example, USDC on a specific network).</li>
<li><strong>Pick a processor or wallet.</strong> Complete business verification and connect your bank account for payouts.</li>
<li><strong>Turn on auto-conversion</strong> if you do not want to hold crypto.</li>
<li><strong>Update your invoices and terms.</strong> Price in dollars, state that crypto is accepted, and set the rate lock and refund rules.</li>
<li><strong>Set up bookkeeping.</strong> Record each payment's dollar value at receipt, fees, and any later conversion.</li>
<li><strong>Test with a small payment</strong> before sending the option to customers.</li>
<li><strong>Train staff</strong> on wrong-network payments, underpayments and refund requests.</li>
</ol>

<h2>How to invoice a client in crypto</h2>
<p>Keep your invoice in dollars and add crypto as a payment method. That keeps your revenue, sales tax and accounting in one currency. A clean crypto invoice includes:</p>
<ul>
<li>The total in USD, with any sales tax shown in dollars.</li>
<li>Accepted assets and networks, for example "USDC (network named on the payment page)".</li>
<li>A processor payment link, or your wallet address and QR code if you accept directly.</li>
<li>How long the quoted crypto amount is valid (processors often lock a rate for 15 minutes or so).</li>
<li>What happens with underpayments, overpayments and refunds.</li>
</ul>
<p>Here is an example invoice for a web development client paying in USDC through a processor:</p>
<table><thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Website redesign, phase 2 (milestone)</td><td>1</td><td>$3,200.00</td><td>$3,200.00</td></tr>
<tr><td>Hosting setup and migration</td><td>1</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Additional development hours</td><td>6</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td colspan="3"><strong>Total due (USD)</strong></td><td><strong>$4,120.00</strong></td></tr>
<tr><td colspan="4">Payment options: ACH, card or USDC via the payment link. Crypto amount is calculated at checkout. Refunds are made in USD value.</td></tr>
</tbody></table>
<p>You can build this layout in our <a href="/invoice-generator">free invoice generator</a> and paste the processor link into the payment instructions. For card and bank options on the same invoice, see our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a>.</p>

<h2>Worked example: fees and taxes on a crypto payment</h2>
<p>A consultant invoices a client $4,120 and is paid two ways in two months. The figures are illustrative.</p>
<table><thead><tr><th></th><th>Payment A: USDC via processor, auto-converted</th><th>Payment B: Bitcoin to own wallet, held</th></tr></thead><tbody>
<tr><td>Dollar value at receipt</td><td>$4,120.00</td><td>$4,120.00</td></tr>
<tr><td>Processor fee</td><td>$61.80 (1.5%)</td><td>$0</td></tr>
<tr><td>Business income to report</td><td>$4,120.00</td><td>$4,120.00</td></tr>
<tr><td>Later sale</td><td>Not applicable (converted at checkout)</td><td>Sold 30 days later for $3,850.00, less $15.00 exchange fee</td></tr>
<tr><td>Gain or loss on sale</td><td>$0</td><td>$285.00 capital loss ($4,120 basis vs $3,835 net proceeds)</td></tr>
<tr><td>Cash in bank</td><td>$4,058.20</td><td>$3,835.00</td></tr>
</tbody></table>
<p>Compare that with a card payment on the same invoice at 2.9% + 30 cents, which would cost $119.78. The stablecoin route saved about $58 in fees, while holding Bitcoin cost $285 in a falling market. That is why most businesses convert immediately. Our breakdown of <a href="/blog/credit-card-processing-fees">credit card processing fees</a> shows how card costs compare in more detail.</p>

<h2>How the IRS treats crypto payments in 2026</h2>
<p>The IRS treats digital assets as property, not currency. For a business, the main rules are:</p>
<ul>
<li><strong>Income at receipt:</strong> crypto received for goods or services is gross income equal to its fair market value in US dollars when you receive it. That value becomes your basis.</li>
<li><strong>Gain or loss on disposal:</strong> when you later sell, exchange or spend the crypto, you have a gain or loss equal to the difference between the dollar amount realized and your basis.</li>
<li><strong>Self-employment tax:</strong> for sole proprietors, crypto business income is subject to <a href="/blog/self-employment-tax">self-employment tax</a> like any other business income.</li>
<li><strong>Paying others in crypto:</strong> payments to contractors are reported at their dollar value, and the Form 1099-NEC threshold is $2,000 for payments made in 2026. Our guide to the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold</a> covers the details.</li>
<li><strong>The digital asset question:</strong> individual returns and several business returns ask whether you received or disposed of digital assets during the year. Receiving crypto as payment means answering yes.</li>
</ul>

<h3>Form 1099-DA timing</h3>
<p>Form 1099-DA is the new information return for digital asset brokers, such as custodial exchanges and some payment processors. Reporting is being phased in:</p>
<table><thead><tr><th>Transactions in</th><th>What brokers report</th><th>Forms arrive</th></tr></thead><tbody>
<tr><td>2025</td><td>Gross proceeds from sales and exchanges; basis optional</td><td>Early 2026</td></tr>
<tr><td>2026 and later</td><td>Gross proceeds, plus cost basis for "covered" assets acquired from January 1, 2026 and held in the same account</td><td>Early 2027 onward</td></tr>
</tbody></table>
<p>Processors that handle crypto payments for merchants report sales by the paying customers, generally when a customer's payments exceed $600 in a year, and qualifying stablecoin sales can be reported in aggregate under an optional method with a $10,000 threshold. The final rules for decentralized (non-custodial) platforms were repealed by Congress in 2025. A 1099-DA does not create or replace your income reporting: you report business income from crypto whether or not you receive any form. See the <a href="https://www.irs.gov/filing/digital-assets" target="_blank" rel="noopener noreferrer">IRS digital assets page</a> and the <a href="https://www.irs.gov/instructions/i1099da" target="_blank" rel="noopener noreferrer">Form 1099-DA instructions</a> for current details.</p>
<p>This article is general information, not tax or legal advice. Crypto rules are changing, so check with a tax professional who handles digital assets.</p>

<h2>How to record crypto payments in your books</h2>
<p>Good records make crypto payments as easy to report as any other income. For each payment, capture the date and time, the asset and amount, the dollar value at receipt and the source of that price, the transaction hash, the processor fee and the invoice it settles. Processors usually provide this in a downloadable report; if you accept directly, record it yourself the same day.</p>
<table><thead><tr><th>Event</th><th>Debit</th><th>Credit</th><th>Amount (from the Bitcoin example)</th></tr></thead><tbody>
<tr><td>Invoice issued</td><td>Accounts receivable</td><td>Service revenue</td><td>$4,120.00</td></tr>
<tr><td>Bitcoin received</td><td>Digital assets</td><td>Accounts receivable</td><td>$4,120.00</td></tr>
<tr><td>Bitcoin sold 30 days later</td><td>Cash $3,835.00 and loss on sale $285.00</td><td>Digital assets</td><td>$4,120.00</td></tr>
</tbody></table>
<p>Treat the exchange fee as part of the sale (it reduces the amount realized, as above) and keep processor fees on payments received as a business expense. Under US GAAP, businesses that hold certain crypto assets measure them at fair value, which affects financial statements but not the tax rules above. Send the customer a receipt that shows the dollar amount applied to their invoice; our <a href="/blog/payment-receipt-template">payment receipt template</a> works for this. If you pay contractors in crypto, collect a W-9 first, as explained in our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a>.</p>

<h2>Which coins and networks should you accept?</h2>
<p>Every extra asset adds work, so keep the list short and match it to demand:</p>
<ul>
<li><strong>A dollar stablecoin</strong> such as USDC is the most practical choice for invoices, because the amount received matches the amount billed.</li>
<li><strong>Bitcoin</strong> is the most requested by consumers who hold crypto, but its price moves, so auto-conversion matters.</li>
<li><strong>Networks matter as much as tokens.</strong> The same stablecoin can exist on several blockchains with different fees and speeds. Name the network on your invoice and payment page, and reject or quarantine payments on unsupported networks.</li>
</ul>
<p>Review the list once a year: if almost no one pays with an asset, drop it.</p>

<h2>Risks of accepting crypto payments</h2>
<ul>
<li><strong>Price volatility</strong> if you hold non-stable assets.</li>
<li><strong>Wrong network or address errors</strong> that can make funds unrecoverable.</li>
<li><strong>Security:</strong> lost private keys or a phished seed phrase means lost funds.</li>
<li><strong>Scams:</strong> fake "payment sent" screenshots and overpayment refund scams, the same pattern as fake check scams.</li>
<li><strong>Stablecoin risk:</strong> stablecoins depend on their issuer's reserves and can briefly trade below one dollar.</li>
<li><strong>Accounting effort:</strong> each receipt and disposal needs dollar values and dates.</li>
</ul>

<h2>Common mistakes when accepting crypto</h2>
<ul>
<li><strong>Pricing in crypto</strong> instead of dollars, which makes revenue and sales tax unpredictable.</li>
<li><strong>Not recording the dollar value at receipt</strong>, then guessing at tax time.</li>
<li><strong>Treating crypto revenue as not reportable</strong> because no 1099 arrived.</li>
<li><strong>Shipping before confirmation</strong> on direct wallet payments.</li>
<li><strong>Accepting too many tokens</strong>, multiplying work for little demand.</li>
<li><strong>No refund policy</strong>, leading to disputes about which value to refund.</li>
</ul>

<h2>Is accepting crypto worth it for a small business?</h2>
<p>It is worth it when customers ask for it, when you invoice international clients who face high bank wire costs, or when you sell to a crypto-native audience. For most local businesses, card, ACH and pay-by-bank options cover nearly every customer at predictable cost. Compare total costs using our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> and offer crypto as one option, not the only one.</p>

<p>Accepting crypto payments is straightforward with a processor and stablecoins: price in dollars, convert at checkout and keep dollar records for the IRS. Whatever payment methods you offer, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and builds your PDF invoice in the browser, ready to send with your payment link.</p>
`,
  },
  {
    slug: "virtual-terminal",
    title: "Virtual Terminal: What It Is, Fees and Best Providers",
    description:
      "What a virtual terminal is, how card-not-present payments work, typical fees (Square 3.5% + 15¢), PCI rules, fraud checks and how to pick a provider in 2026.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-accept-credit-card-payments",
      "credit-card-processing-fees",
      "pci-compliance-small-business",
    ],
    faqs: [
      {
        q: "Is a virtual terminal safe to use?",
        a: "Yes, when used properly. Reputable virtual terminals encrypt card data and store it with the provider, so card numbers do not sit on your computer. The risks come from how you handle data around it: writing card numbers on paper, emailing them, or using a shared computer with malware. Use strong passwords and two-factor login, limit user access, and enter card details directly while the customer is on the phone.",
      },
      {
        q: "Can I take payments over the phone without a virtual terminal?",
        a: "You can send the customer a payment link or invoice by text or email, which lets them enter their own card details. This is often better than taking card numbers over the phone, because the customer handles the data and you avoid some PCI scope. A virtual terminal is useful when customers prefer to read their card details aloud or when staff take orders by phone all day.",
      },
      {
        q: "What is the difference between a virtual terminal and a payment gateway?",
        a: "A payment gateway is the technology that sends card transactions from a website or app to the processor. A virtual terminal is a user interface, a web page where staff type in card details, that runs on top of a gateway. Many gateways, such as Authorize.net, include a virtual terminal as one feature alongside APIs, hosted checkout pages and recurring billing tools.",
      },
      {
        q: "Do I need a merchant account for a virtual terminal?",
        a: "Not always. Payment service providers such as Square, Stripe and PayPal include a virtual terminal-style tool under their own aggregated merchant setup, so you only need their account. Traditional gateways like Authorize.net often connect to a separate merchant account from a bank or processor. A dedicated merchant account can give lower interchange-plus pricing at higher volumes but usually takes longer to set up.",
      },
      {
        q: "Can I save a customer's card in a virtual terminal?",
        a: "Most virtual terminals let you store a card on file as a token, so you can charge it later without seeing the full number again. Card network rules require the customer's consent to store credentials and clear terms for future charges, especially for recurring payments. Get written authorization stating the amount or how it is calculated, the frequency and how to cancel, and keep it with your records.",
      },
      {
        q: "Why was my virtual terminal payment declined?",
        a: "Common reasons are a mistyped card number, expiration date or CVV, an address that does not match the issuer's records, insufficient funds, or the issuer's fraud system blocking an unusual card-not-present transaction. Ask the customer to confirm details or call their bank, then try once more. Repeated retries can trigger more declines and card network penalties, so offer another method such as ACH if it keeps failing.",
      },
      {
        q: "Can I use a virtual terminal on my phone?",
        a: "Yes. Most virtual terminals run in a web browser, so they work on a phone or tablet as well as a computer, and some providers include keyed entry in their mobile apps. For in-person sales, though, tapping or inserting the card through a card reader or tap to pay on a phone is cheaper and safer than keying the number, because the transaction counts as card-present.",
      },
      {
        q: "Can I add a surcharge to virtual terminal payments?",
        a: "In many US states you can add a credit card surcharge if you follow card network rules, which include registering in advance with your processor, disclosing it clearly, keeping it within the cap and never surcharging debit cards. Some states restrict or ban surcharges. A few virtual terminals have built-in surcharge settings. Check our surcharge guide and your provider's rules before adding one.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A virtual terminal is a secure web page from a payment provider that lets you accept card payments by typing the customer's card details into a browser, with no card reader. It is used for phone, mail and email orders. Because the card is not present, fees are higher than tapped or inserted payments, for example 3.5% + 15¢ per transaction at Square.</p>

<p>If customers call to pay, mail in order forms or ask you to charge a card on file, a virtual terminal turns any computer into a card machine. It is simple to set up, but card-not-present payments cost more, carry more fraud risk and come with security rules. This guide explains how a virtual terminal works, what it costs with a worked example, which providers offer one, and how to use it safely.</p>

<h2>What is a virtual terminal?</h2>
<p>A virtual terminal is a browser-based interface, provided by a payment processor or gateway, where an authorized user enters card details to charge a customer. Behind the scenes it sends the transaction through the same networks as any card payment: from the gateway to the processor, through the card network (Visa, Mastercard, American Express, Discover), to the cardholder's issuing bank for approval.</p>
<p>Typical features include:</p>
<ul>
<li>Manual entry of card number, expiration date, CVV and billing address.</li>
<li>Card on file, where a saved card is stored as a token for future charges.</li>
<li>Recurring or scheduled payments.</li>
<li>Email or SMS receipts.</li>
<li>Refunds and voids.</li>
<li>Multiple user logins with permissions.</li>
<li>Some support ACH payments as well as cards.</li>
</ul>

<h2>When should a business use a virtual terminal?</h2>
<table><thead><tr><th>Situation</th><th>Virtual terminal a good fit?</th><th>Better alternative</th></tr></thead><tbody>
<tr><td>Customer calls to pay an invoice</td><td>Yes</td><td>Send a payment link so they enter details themselves</td></tr>
<tr><td>Mail-in order forms with card details</td><td>Yes</td><td>Online order form</td></tr>
<tr><td>Charging a deposit or balance on a card on file</td><td>Yes, with written authorization</td><td>Autopay through a payment portal</td></tr>
<tr><td>Customer standing in front of you</td><td>No, costs more and riskier</td><td>Card reader or tap to pay on a phone</td></tr>
<tr><td>Large B2B invoices</td><td>Possible, but fees add up</td><td>ACH or pay by bank</td></tr>
</tbody></table>
<p>Service businesses such as contractors, law firms, medical offices, B2B wholesalers and nonprofits taking phone donations are the most common users. For in-person sales, our guides to <a href="/blog/card-readers-for-small-business">card readers for small business</a> and <a href="/blog/tap-to-pay-on-iphone">tap to pay on iPhone</a> cover cheaper options.</p>

<h2>How much does a virtual terminal cost?</h2>
<p>Keyed transactions are classed as card-not-present, which carry higher interchange (the fee paid to the card issuer) because fraud risk is higher. Providers pass that on in their pricing. Typical cost elements are:</p>
<ul>
<li><strong>Per-transaction fee:</strong> a percentage plus a fixed amount.</li>
<li><strong>Monthly fee:</strong> some gateways charge a monthly gateway or virtual terminal fee.</li>
<li><strong>Setup or PCI fees:</strong> more common with traditional merchant accounts.</li>
<li><strong>Chargeback fees:</strong> charged per dispute.</li>
</ul>
<p>As a concrete reference, Square's help center lists 3.5% + 15¢ for payments entered manually in its Virtual Terminal and for card on file payments, as of October 2026 (<a href="https://square.com/help/us/en/article/6109" target="_blank" rel="noopener noreferrer">Square fees FAQ</a>). Other providers price keyed transactions in their own way, often either as a higher flat rate or as interchange plus a markup. Check each provider's current pricing page before signing up, and see our comparison of <a href="/blog/stripe-fees">Stripe fees</a> and <a href="/blog/square-invoice-fees">Square invoice fees</a>.</p>

<h3>Virtual terminal providers to compare</h3>
<table><thead><tr><th>Provider type</th><th>Examples</th><th>Typical fit</th></tr></thead><tbody>
<tr><td>All-in-one payment service providers</td><td>Square Virtual Terminal, Stripe Dashboard payments, PayPal</td><td>Small businesses wanting quick setup and flat pricing</td></tr>
<tr><td>Payment gateways</td><td>Authorize.net</td><td>Businesses with an existing merchant account or website integrations</td></tr>
<tr><td>POS and processor platforms</td><td>Clover, Helcim and bank merchant services</td><td>Businesses that also need in-person POS or interchange-plus pricing</td></tr>
</tbody></table>
<p>Features and pricing change, so treat this list as a starting point. If you are weighing a flat-rate provider against a dedicated merchant account, our guide to <a href="/blog/merchant-account-vs-payment-processor">merchant accounts vs payment processors</a> explains the trade-offs.</p>

<h2>Worked example: what a phone payment really costs</h2>
<p>A landscaping company takes an $800 payment over the phone. Here is how different methods compare, using published rates where stated and labeled assumptions elsewhere:</p>
<table><thead><tr><th>Method</th><th>Fee calculation</th><th>Fee</th><th>Net received</th></tr></thead><tbody>
<tr><td>Square Virtual Terminal (keyed)</td><td>3.5% x $800 + $0.15</td><td>$28.15</td><td>$771.85</td></tr>
<tr><td>Card payment link, customer enters details online (Stripe standard online rate, 2.9% + 30¢)</td><td>2.9% x $800 + $0.30</td><td>$23.50</td><td>$776.50</td></tr>
<tr><td>ACH via Square invoice at 1% ($1 minimum)</td><td>1% x $800</td><td>$8.00</td><td>$792.00</td></tr>
</tbody></table>
<p>The difference between keyed and ACH on this one payment is $20.15. At 50 such payments a month, that is about $1,000. That is why many businesses use the virtual terminal only when the customer insists on reading out a card number, and otherwise send an invoice with a payment link. Our guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> covers the bank option.</p>

<h2>Why do card-not-present payments cost more?</h2>
<p>Every card payment carries interchange, a fee set by the card networks and paid to the cardholder's bank, plus network assessment fees and the processor's markup. Interchange categories for card-not-present transactions are generally higher than for chip or contactless payments, because the merchant cannot verify the physical card and fraud rates are higher. Flat-rate providers fold this into a higher keyed rate. On interchange-plus pricing, you see the difference line by line on your statement.</p>
<table><thead><tr><th>Payment type</th><th>How the card is verified</th><th>Relative cost and risk</th></tr></thead><tbody>
<tr><td>Tap or chip in person</td><td>Card chip or device token</td><td>Lowest; fraud liability usually with the issuer for valid chip transactions</td></tr>
<tr><td>Customer enters card online</td><td>CVV, AVS, sometimes 3-D Secure</td><td>Middle; online fraud tools available</td></tr>
<tr><td>Keyed in a virtual terminal</td><td>CVV and AVS only</td><td>Highest; merchant typically bears fraud chargebacks</td></tr>
</tbody></table>
<p>Two habits lower costs: always include CVV and billing ZIP, which can help qualify for better rates and reduce disputes, and for B2B customers using commercial cards, ask your processor whether entering extra data such as tax amount and customer reference (Level 2 data) could lower interchange.</p>

<h2>Card on file and recurring charges in a virtual terminal</h2>
<p>Most virtual terminals let you save a card as a token and charge it later. This is useful for deposits and final balances, monthly service plans and repeat orders. Card network rules on stored credentials require the customer's agreement to store the card and clear terms for how it will be used. Put the authorization in writing, either in your service agreement or a short card authorization form, stating:</p>
<ul>
<li>The customer's name and the last four digits of the card.</li>
<li>Whether charges are one-time, recurring on a schedule, or for future invoices as they come due.</li>
<li>The amount, or how the amount will be calculated.</li>
<li>How the customer can cancel the authorization.</li>
</ul>
<p>For true subscriptions, a recurring billing tool or customer portal is usually better than manually charging cards each month. Our guide to <a href="/blog/recurring-payments-small-business">recurring payments for small businesses</a> compares the options.</p>

<h2>How to choose a virtual terminal provider: checklist</h2>
<ol>
<li><strong>Keyed transaction rate</strong> and any monthly, gateway or PCI fees.</li>
<li><strong>ACH support</strong> in the same tool, so you can offer a cheaper option on the same call.</li>
<li><strong>Card on file and recurring billing</strong> with customer authorization records.</li>
<li><strong>User permissions</strong> for refunds and voids, plus an activity log.</li>
<li><strong>Fraud tools</strong>: AVS and CVV rules, velocity limits, alerts.</li>
<li><strong>Payout speed</strong> and any fee for instant transfers.</li>
<li><strong>Integration</strong> with your invoicing or accounting software.</li>
<li><strong>Surcharge or convenience fee support</strong>, if you plan to use one and your state allows it. See our guide to <a href="/blog/convenience-fee">convenience fees</a>.</li>
</ol>

<h2>How to process a virtual terminal payment: step by step</h2>
<ol>
<li><strong>Log in</strong> with your own user account, using two-factor authentication.</li>
<li><strong>Enter the amount</strong> and reference the invoice number in the note or description field.</li>
<li><strong>Enter card details</strong> directly as the customer reads them, never writing them down first.</li>
<li><strong>Add billing ZIP code and CVV</strong> so the issuer can run address verification (AVS) and card code checks.</li>
<li><strong>Submit</strong> and wait for approval or decline.</li>
<li><strong>Send a receipt</strong> by email or SMS.</li>
<li><strong>Mark the invoice paid</strong> in your records and apply the payment to the right customer.</li>
<li><strong>If saving the card</strong>, record the customer's authorization for future charges.</li>
</ol>

<h3>A simple phone payment script for staff</h3>
<p>A consistent script protects both the customer and your business, and gives you evidence if the charge is disputed later:</p>
<ol>
<li>"Thanks for calling. Which invoice number are you paying today?" Confirm the amount due.</li>
<li>"We accept bank transfer at no charge or a card. Which would you prefer?" If they choose bank transfer, send the payment link while on the call.</li>
<li>For a card: "Please read the card number, expiration date and the three or four digit security code." Type each directly into the terminal.</li>
<li>"What is the billing ZIP code for the card?"</li>
<li>"Can I confirm you authorize a charge of [amount] to the card ending in [last four] for invoice [number]?" Note the answer and time in the payment description.</li>
<li>"Where should I email the receipt?"</li>
</ol>
<p>Never ask customers to email or text card numbers, and do not repeat the full number aloud in a shared office.</p>

<h2>PCI compliance and fraud prevention</h2>
<p>Any business that accepts cards must follow the Payment Card Industry Data Security Standard (PCI DSS). Businesses using only a provider's virtual terminal on an isolated computer often qualify for the shorter self-assessment questionnaire designed for this setup (SAQ C-VT), which your provider can confirm. Key rules:</p>
<ul>
<li>Never store full card numbers or CVV codes on paper, spreadsheets, emails or call recordings.</li>
<li>Use a dedicated, updated computer for card entry where possible.</li>
<li>Give each staff member a separate login and remove access when they leave.</li>
</ul>
<p>Our <a href="/blog/pci-compliance-small-business">PCI compliance guide</a> covers the full list. For fraud, card-not-present transactions are where most card fraud happens, and the merchant usually bears the loss when a fraudulent keyed payment is disputed. Use AVS and CVV checks, be wary of rush orders shipped to a different address, call back on numbers you already have on file, and keep proof of authorization. If a dispute arrives, our guide on <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a> explains how to respond.</p>

<h2>Common virtual terminal mistakes</h2>
<ul>
<li><strong>Keying cards for in-person customers</strong> and paying card-not-present rates for no reason.</li>
<li><strong>Writing card numbers on sticky notes or order forms</strong> and keeping them.</li>
<li><strong>Charging a saved card without clear authorization</strong>, which loses disputes.</li>
<li><strong>Shared logins</strong>, which make it impossible to trace who ran a charge or refund.</li>
<li><strong>Ignoring AVS mismatches</strong> on large orders.</li>
<li><strong>Adding surcharges without following network and state rules</strong>; see our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a>.</li>
</ul>

<h2>Virtual terminals and invoicing</h2>
<p>A virtual terminal is a collection tool, not an invoicing tool. Send a clear invoice first, with the invoice number, due date and payment options, then use the terminal when the customer calls to pay. Put the invoice number in the payment description so you can match the deposit later. Our <a href="/invoice-generator">free invoice generator</a> creates numbered PDF invoices, and our <a href="/blog/payment-receipt-template">payment receipt template</a> helps if you want to send a formal receipt beyond the processor's email.</p>

<p>A virtual terminal is a practical way to take card payments by phone or mail, as long as you price in the higher card-not-present fees and follow PCI rules. Offer cheaper options like ACH and payment links alongside it. To bill customers before they pay, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a PDF built entirely in your browser.</p>
`,
  },
  {
    slug: "echeck",
    title: "eCheck (Electronic Check): How It Works, Fees vs ACH",
    description:
      "What an eCheck is, how electronic check payments work through ACH, fees vs cards, clearing times, check conversion, returns and Nacha rules for businesses.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-accept-ach-payments", "ach-return-codes", "how-long-does-ach-take"],
    faqs: [
      {
        q: "Is an eCheck the same as ACH?",
        a: "Almost always, yes. An eCheck is a consumer- or business-authorized debit from a checking account that is processed over the ACH network, so it is a type of ACH payment. The term eCheck emphasizes that the customer provides the information found on a paper check, the routing and account numbers, rather than a card. Some providers use eCheck and ACH debit interchangeably in their pricing.",
      },
      {
        q: "How long does an eCheck take to clear?",
        a: "Standard ACH debits usually settle in one to two business days, and same-day ACH can settle the same business day if submitted before cutoff. However, providers often hold funds longer, commonly three to five business days, to protect against returns for insufficient funds or unauthorized debits. PayPal eChecks, which are funded from the sender's bank account, can take up to several business days to clear.",
      },
      {
        q: "Can an eCheck bounce?",
        a: "Yes. If the customer's account lacks funds, is closed or the details are wrong, the bank returns the debit with an ACH return code, such as R01 for insufficient funds or R03 for no account. The funds are then pulled back from your account, and many providers charge a return fee. Consumers can also dispute unauthorized debits for a longer period than businesses can.",
      },
      {
        q: "What information do I need to accept an eCheck?",
        a: "You need the account holder's name, bank routing number, account number, account type (checking or savings) and their authorization to debit the account for a specific amount or schedule. Online forms and processors collect this securely, and many verify the account instantly by having the customer log in to their bank. Avoid collecting account details by plain email, because they can be misused.",
      },
      {
        q: "Are eChecks safe for the payer?",
        a: "Generally yes. Consumers in the US are protected by Regulation E, which lets them dispute unauthorized electronic debits, and ACH payments pass through regulated banks. Payers should only give account details to businesses they trust and through secure forms. Businesses must protect stored account numbers and follow Nacha security rules, which require account data to be unreadable when stored electronically above certain volume levels.",
      },
      {
        q: "Can I convert a paper check into an eCheck?",
        a: "Yes, through check conversion. Under Nacha rules, a check received at a point of sale, in a lockbox or at a back office can be converted into an ACH debit, using entry types such as POP, ARC or BOC, as long as you give the required notice. Remote deposit capture, where you scan a check with a phone or scanner, is different: it creates an image deposit, not an ACH debit.",
      },
      {
        q: "Do eChecks show up as a 1099-K?",
        a: "eChecks and ACH debits processed by a bank are not card transactions, so they are not reported as payment card transactions on Form 1099-K. Third-party payment platforms that process bank payments for you may still count them toward their own 1099-K reporting rules. Either way, all business income is taxable whether or not you receive a 1099-K, so record every eCheck payment in your books.",
      },
      {
        q: "Should small businesses stop accepting paper checks?",
        a: "Not necessarily, but many are encouraging electronic payments instead. Paper checks are slower, cost more to process, and are a major target for check fraud such as washing and counterfeiting. Offering eCheck or ACH on every invoice moves many payers away from paper. For customers who still mail checks, Positive Pay from your bank on your outgoing checks and prompt deposits help reduce fraud risk.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An eCheck (electronic check) is a payment where the customer authorizes you to debit their bank account using the routing and account numbers from a check, and the money moves over the ACH network instead of on paper. eChecks usually cost far less than card payments, settle in one to a few business days, and can be returned if the account lacks funds.</p>

<p>Many customers who would never type a card number into a form will happily pay by eCheck, especially businesses paying larger invoices. For the seller, an electronic check costs a fraction of a card payment and avoids trips to the bank. But eChecks have their own rules: authorization, returns, clearing times and fraud checks. This guide explains how electronic check payments work, how they compare with ACH, cards and paper checks, what they cost with a worked example, and how to start accepting them.</p>

<h2>What is an eCheck?</h2>
<p>An eCheck is a digital version of a paper check. Instead of writing and mailing a check, the payer gives their bank routing number and account number, plus authorization, through an online form, phone call or signed agreement. The payee's processor sends an ACH debit entry to the payer's bank, which takes the funds and sends them to the payee's bank.</p>
<p>The term is used in a few ways:</p>
<ul>
<li><strong>ACH debit with check details:</strong> the most common meaning, used by payment processors for "pay by bank account" checkout options.</li>
<li><strong>Check conversion:</strong> a paper check converted into an ACH debit at the point of sale, in a lockbox or in the back office.</li>
<li><strong>PayPal eCheck:</strong> a PayPal payment funded from the sender's bank account that shows as pending until it clears.</li>
</ul>
<p>If you are not sure where to find the numbers involved, our guide to <a href="/blog/routing-number-vs-account-number">routing numbers vs account numbers</a> explains both.</p>

<h2>How does an eCheck payment work?</h2>
<ol>
<li><strong>Authorization:</strong> the customer agrees to the debit online, in writing or by recorded phone call.</li>
<li><strong>Account verification:</strong> the processor checks the account, often instantly through bank login or with micro-deposits or a validation service.</li>
<li><strong>Origination:</strong> your processor (or your bank as the Originating Depository Financial Institution) submits the debit to the ACH network.</li>
<li><strong>Settlement:</strong> the payer's bank debits the account and the funds settle to your bank, usually in one to two business days, or the same day with same-day ACH.</li>
<li><strong>Return window:</strong> the payer's bank can return the debit, for example for insufficient funds within two banking days, or for an unauthorized consumer debit within 60 days of the statement.</li>
</ol>
<p>ACH transactions carry a Standard Entry Class (SEC) code that describes how authorization was obtained: WEB for internet-authorized consumer debits, TEL for phone authorizations, PPD for written consumer authorizations, CCD for business accounts, and POP, ARC or BOC for converted checks. Your processor sets these, but knowing them helps when reading reports.</p>

<h2>eCheck vs ACH vs card vs paper check</h2>
<table><thead><tr><th>Feature</th><th>eCheck / ACH debit</th><th>Credit card</th><th>Paper check</th></tr></thead><tbody>
<tr><td>Typical cost to merchant</td><td>Flat fee or low percentage, often capped</td><td>About 2.5% to 3.5% plus a fixed fee</td><td>Bank deposit fees, handling time, mailing delays</td></tr>
<tr><td>Speed to your account</td><td>Same day to a few business days</td><td>Usually 1 to 2 business days</td><td>Mail time plus deposit and hold time</td></tr>
<tr><td>Who starts the payment</td><td>You debit with authorization</td><td>Customer or you with card details</td><td>Customer mails it</td></tr>
<tr><td>Failure risk</td><td>Returns for NSF, closed account, unauthorized</td><td>Declines and chargebacks</td><td>Bounced checks, fraud, lost mail</td></tr>
<tr><td>Dispute window</td><td>Up to 60 days from statement for consumer unauthorized debits</td><td>Card network chargeback windows, often 120 days</td><td>Varies; fraud claims under check law</td></tr>
<tr><td>Good for</td><td>Larger invoices, recurring bills, B2B</td><td>Consumers, small amounts, rewards seekers</td><td>Customers who cannot pay electronically</td></tr>
</tbody></table>
<p>If the customer prefers to push the payment from their own bank, that is an ACH credit rather than an eCheck debit. Our article on <a href="/blog/ach-debit-vs-ach-credit">ACH debit vs ACH credit</a> covers the difference, and <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> compares the faster but more expensive option.</p>

<h2>How much do eChecks cost?</h2>
<p>Pricing varies by provider. Common models are a flat per-transaction fee, a percentage with a cap, or a percentage with a minimum. Published rates used in our other guides include Stripe ACH Direct Debit at 0.8% capped at $5 and Square ACH bank transfers at 1% with a $1 minimum (check current pricing pages, as of October 2026). Traditional ACH processors and banks often charge a flat fee per item plus a monthly fee. Add return fees, which are charged when a debit bounces.</p>

<h2>Worked example: eCheck vs card on a $1,250 invoice</h2>
<table><thead><tr><th>Method</th><th>Calculation</th><th>Fee</th><th>Net received</th></tr></thead><tbody>
<tr><td>Card online at 2.9% + 30¢</td><td>$1,250 x 2.9% + $0.30</td><td>$36.55</td><td>$1,213.45</td></tr>
<tr><td>eCheck at 1% (Square-style pricing)</td><td>$1,250 x 1%</td><td>$12.50</td><td>$1,237.50</td></tr>
<tr><td>eCheck at 0.8% capped at $5 (Stripe-style pricing)</td><td>$10.00, capped</td><td>$5.00</td><td>$1,245.00</td></tr>
<tr><td>eCheck at an illustrative $0.50 flat fee</td><td>Flat</td><td>$0.50</td><td>$1,249.50</td></tr>
</tbody></table>
<p>For a business sending 40 invoices of this size a month, moving from cards to capped eCheck pricing would save more than $1,000 a month. The trade-off is slower confirmation and return risk, which is why many businesses wait for the processor's hold to clear before releasing goods on new customers' first eCheck payments.</p>

<h2>How to start accepting eChecks: step by step</h2>
<ol>
<li><strong>Choose a provider</strong> that supports ACH debits, such as your card processor, your bank's ACH origination service or an invoicing platform with bank payments.</li>
<li><strong>Complete underwriting.</strong> The provider will review your business, expected volume and average ticket.</li>
<li><strong>Set up authorization language</strong> for online forms, phone payments (TEL rules require recording or written confirmation) and recurring debits.</li>
<li><strong>Turn on account verification</strong> to reduce returns.</li>
<li><strong>Add eCheck to your invoices</strong> with a payment link and clear instructions.</li>
<li><strong>Set hold and release rules</strong> for orders paid by new customers.</li>
<li><strong>Monitor returns</strong> and respond quickly to R-codes.</li>
<li><strong>Reconcile deposits</strong> to invoices so each payment is applied correctly.</li>
</ol>
<p>Our full guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> covers provider choices in more detail.</p>

<h2>What should an eCheck authorization say?</h2>
<p>Authorization is the foundation of every eCheck. Without it, the payer's bank can return the debit as unauthorized and you lose the funds. A simple online or written authorization for a one-time payment covers:</p>
<ul>
<li>Your business name and the payer's name.</li>
<li>The amount and the date (or "on or after" date) of the debit.</li>
<li>The account to be debited, shown with only the last four digits on confirmations.</li>
<li>Language such as: "I authorize [Business] to debit my account for the amount above. I can revoke this authorization by contacting [Business] before the debit date."</li>
<li>A record of consent: a checkbox and timestamp online, a signature on paper, or a recording for phone payments.</li>
</ul>
<p>For recurring debits, add the frequency, the amount or how it is calculated, and how to cancel, then keep the authorization for two years after it ends. Customers sometimes provide a voided check to set up recurring debits; our article on <a href="/blog/what-is-a-voided-check">voided checks</a> explains what to do with it securely.</p>

<h2>When is eCheck the right payment method?</h2>
<table><thead><tr><th>Business type</th><th>Why eCheck fits</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>B2B services and wholesale</td><td>Large invoices where card fees would be significant</td><td>Business accounts have a short return window, but corporate AP teams may prefer to push ACH credits instead</td></tr>
<tr><td>Property management</td><td>Monthly rent at a predictable amount</td><td>NSF returns near the start of the month</td></tr>
<tr><td>Membership and subscription businesses</td><td>Recurring debits with fewer failed payments from expired cards</td><td>Bank account changes and longer consumer dispute windows</td></tr>
<tr><td>Contractors and home services</td><td>Deposits and final payments on large jobs</td><td>Releasing work or materials before funds clear</td></tr>
<tr><td>Nonprofits</td><td>Recurring donations with lower processing costs</td><td>Donor authorization records</td></tr>
</tbody></table>
<p>For recurring billing, combining eCheck with autopay works especially well; our guide to <a href="/blog/recurring-payments-small-business">recurring payments</a> covers the setup.</p>

<h3>PayPal eChecks explained</h3>
<p>In PayPal, an eCheck is a payment the sender funds from their bank account when their PayPal balance or a card is not used. The payment shows as pending until it clears, often taking several business days, and PayPal advises sellers not to ship until it completes. Fees follow PayPal's standard rates for the transaction type, not a lower bank-transfer rate, so check our breakdown of <a href="/blog/paypal-fees">PayPal fees</a> before choosing it as your main eCheck channel.</p>

<h2>eCheck returns, fraud and Nacha rules</h2>
<p>Returns are the main operational headache. The most common codes are R01 (insufficient funds), R02 (account closed), R03 (no account or unable to locate) and R10 (customer advises not authorized). Our list of <a href="/blog/ach-return-codes">ACH return codes</a> explains what each means and what to do. Nacha, which writes the ACH rules, monitors originators' return rates, including a 0.5% threshold for unauthorized returns, and has added fraud monitoring requirements that took effect in 2026, covered in our guide to the <a href="/blog/nacha-2026-rules">Nacha 2026 rules</a>.</p>
<p>Practical fraud controls include validating accounts on first use for web debits, matching the account holder name where your provider supports it, being cautious with large first orders, and never accepting a request to "refund the overpayment" to a different account.</p>

<h3>Check conversion and the move away from paper</h3>
<p>Some businesses still receive paper checks and convert them. Under accounts receivable conversion (ARC) and back office conversion (BOC), a consumer check mailed to you or dropped off can be converted into an ACH debit if you give notice beforehand, typically printed on your invoice or at the counter. The original check is then destroyed after secure storage. Converting checks speeds up funds and reduces handling, and fits a wider trend away from paper explained in our article on the <a href="/blog/us-paper-checks-phase-out">US paper check phase-out</a>.</p>

<h2>Common eCheck mistakes</h2>
<ul>
<li><strong>Debiting without clear authorization</strong>, which leads to R10 returns and possible Nacha penalties.</li>
<li><strong>Shipping high-value orders before funds clear</strong> on a new customer's first payment.</li>
<li><strong>Storing account numbers in spreadsheets or email</strong>, against Nacha security rules.</li>
<li><strong>Retrying a returned debit too many times</strong>; Nacha limits re-presentment of NSF returns.</li>
<li><strong>Not updating recurring debits</strong> when customers change banks.</li>
<li><strong>Forgetting to reconcile returns</strong>, leaving invoices marked as paid when they are not.</li>
</ul>

<h2>Putting eCheck on your invoices</h2>
<p>The easiest way to move customers to eCheck is to make it the obvious option on every invoice: a payment link labeled "Pay by bank (eCheck)" with a short note that it is free for them, while cards may carry a fee where allowed. Create the invoice in our <a href="/invoice-generator">free invoice generator</a>, paste your provider's payment link into the payment instructions, and include your invoice number so the deposit matches. When the payment arrives, a quick <a href="/blog/thank-you-for-your-payment-message">thank-you for your payment message</a> confirms receipt.</p>

<p>An eCheck gives you the low cost of ACH with the familiar feel of paying by check. Get proper authorization, verify accounts, watch returns and reconcile every payment. To bill clients and offer eCheck as a payment option, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and builds a downloadable PDF in your browser.</p>
`,
  },
  {
    slug: "lockbox-services",
    title: "Lockbox Services: How Bank Lockbox Works and What It Costs",
    description:
      "Bank lockbox services explained: wholesale vs retail lockbox, how check processing works, cost components, an ROI example and how lockbox fits AR automation.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["cash-application", "positive-pay-check-fraud", "accounts-receivable-guide"],
    faqs: [
      {
        q: "Is a lockbox the same as a PO box?",
        a: "No. A PO box is just a mailbox you collect from yourself. A bank lockbox uses a special PO box or postal code controlled by the bank or its processor, which collects the mail several times a day, opens it, images the checks and remittance documents, deposits the funds and sends you the payment data. You never touch the checks, which speeds up deposits and reduces internal fraud risk.",
      },
      {
        q: "How long does it take to set up a lockbox?",
        a: "Setup often takes several weeks. The bank needs to open the lockbox address, agree on processing instructions, design the data file format for your accounting system, and test sample payments. You also need to update the remit-to address on invoices and statements and notify customers. Plan a transition period where some checks still arrive at your old address and are forwarded or deposited the old way.",
      },
      {
        q: "Can a lockbox handle ACH and card payments too?",
        a: "Many banks offer integrated receivables services that combine traditional lockbox checks with ACH, wire and card payments into one consolidated data file. Some call this an electronic or e-lockbox. This lets your AR team apply all payments with one process and reconcile deposits from every channel in one place. Ask your bank which payment types and file formats its service supports.",
      },
      {
        q: "Do small businesses use lockbox services?",
        a: "Usually only once check volume justifies the cost. A business receiving a handful of checks a week can use mobile or scanner remote deposit capture instead. Lockbox becomes worth considering when you receive dozens or hundreds of checks a month, when large checks arrive and delays cost real money, or when separation of duties for fraud control matters to auditors or lenders.",
      },
      {
        q: "What happens to exceptions in a lockbox?",
        a: "Exceptions are items the bank cannot process normally, such as checks with no remittance, mismatched amounts, missing signatures, foreign checks, or correspondence. The processing instructions tell the bank whether to deposit and flag, hold for your review or return them. Most banks give you an online portal to view images of exceptions and decide what to do, often by a daily cutoff time.",
      },
      {
        q: "Is a lockbox secure?",
        a: "Lockbox processing reduces several risks: checks are not handled by your staff, they are deposited quickly, and every item is imaged. Banks run lockbox operations under strict controls and audits. Risks remain, including mail theft before the check reaches the box and check fraud on outgoing payments. Pair your lockbox with Positive Pay on your own disbursement accounts for stronger protection overall.",
      },
      {
        q: "What file formats do lockbox services provide?",
        a: "Banks commonly deliver lockbox data in formats such as BAI2, EDI 823 or 820 for remittances, CSV or custom fixed-width files, plus images of checks and documents. Many accounting and ERP systems can import these files to apply payments automatically. Ask which format your accounting software supports before choosing a bank's file layout, since a poor match creates manual work.",
      },
      {
        q: "Does a lockbox reduce days sales outstanding?",
        a: "It can, by shortening the time between a customer mailing a check and the funds reaching your account, and by speeding cash application so customer balances are updated sooner. It does not make customers pay earlier, though. To cut DSO meaningfully, combine lockbox with clear invoices, prompt reminders and electronic payment options that remove mail time altogether.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A lockbox service is a bank service where customers mail payments to a dedicated address controlled by your bank. The bank collects, opens and images the mail, deposits the checks into your account, and sends you payment data to update your receivables. It speeds up deposits, cuts manual work and separates check handling from your staff.</p>

<p>If your business still receives a stack of checks every day, someone is opening envelopes, matching checks to invoices, filling out deposit slips and driving to the bank. A bank lockbox takes that work off your desk. This guide explains how lockbox services work, the difference between wholesale and retail lockbox, typical cost components and a worked ROI example, and how lockbox fits with modern accounts receivable automation.</p>

<h2>What is a lockbox service?</h2>
<p>A lockbox (also called bank lockbox or remittance processing) is a treasury management service offered by commercial banks and specialist processors. You print a lockbox address on your invoices as the "remit to" address. Payments mailed there go straight to the bank's processing center, not to your office.</p>
<p>The service typically includes:</p>
<ul>
<li>Several mail pickups a day from the post office.</li>
<li>Opening envelopes and extracting checks and remittance documents.</li>
<li>Imaging checks, envelopes and remittance stubs.</li>
<li>Capturing data: amount, check number, payer, invoice numbers.</li>
<li>Depositing checks the same day, usually by image.</li>
<li>Sending a data file and images to you, plus an online portal.</li>
<li>Handling exceptions according to your instructions.</li>
</ul>

<h2>How does a bank lockbox work? Step by step</h2>
<ol>
<li><strong>Customer mails a check</strong> to the lockbox address printed on your invoice.</li>
<li><strong>The bank collects the mail</strong> at the post office, often in early morning runs.</li>
<li><strong>Staff and scanners open and image</strong> each envelope's contents.</li>
<li><strong>Data is captured</strong> from checks and remittance stubs (by scanning coupons, OCR or manual keying).</li>
<li><strong>Checks are deposited</strong> to your account, usually the same business day.</li>
<li><strong>Exceptions are flagged</strong> for your review, such as missing remittance or amount mismatches.</li>
<li><strong>You receive a file</strong> to import into accounting, so payments are applied to the right invoices.</li>
</ol>
<p>The last step is where the real time saving happens. Our guide to <a href="/blog/cash-application">cash application</a> explains how payments are matched to open invoices, and our article on <a href="/blog/remittance-advice">remittance advice</a> covers the documents customers send with payments.</p>

<h2>Wholesale vs retail lockbox: what is the difference?</h2>
<table><thead><tr><th>Feature</th><th>Wholesale lockbox</th><th>Retail lockbox</th></tr></thead><tbody>
<tr><td>Payers</td><td>Businesses (B2B)</td><td>Consumers (B2C)</td></tr>
<tr><td>Volume</td><td>Lower volume</td><td>High volume</td></tr>
<tr><td>Check size</td><td>Larger, often thousands of dollars</td><td>Smaller, often under a few hundred dollars</td></tr>
<tr><td>Remittance</td><td>Varied: invoices, remittance advices, letters, multiple invoices per check</td><td>Standard payment coupons with scannable lines</td></tr>
<tr><td>Processing</td><td>More manual data capture and exception handling</td><td>Highly automated scanning</td></tr>
<tr><td>Typical users</td><td>Distributors, manufacturers, B2B service firms</td><td>Utilities, insurers, lenders, healthcare billing, property managers</td></tr>
</tbody></table>
<p>Most small and mid-sized B2B companies need wholesale lockbox. Some banks offer hybrid services for businesses that receive both.</p>

<h2>How much do lockbox services cost?</h2>
<p>Banks rarely publish lockbox pricing, and fees are usually negotiated as part of a treasury relationship. Costs are typically built from:</p>
<ul>
<li><strong>Setup or implementation fee</strong> for opening the box and configuring files.</li>
<li><strong>Monthly maintenance fee</strong> per lockbox.</li>
<li><strong>Per-item fee</strong> for each check processed.</li>
<li><strong>Per-image or per-page fees</strong> for imaging remittance documents.</li>
<li><strong>Data capture fees</strong> for keying invoice numbers and amounts.</li>
<li><strong>Exception and return-mail handling fees.</strong></li>
<li><strong>Data transmission or portal fees.</strong></li>
</ul>
<p>Some banks offset fees with earnings credits on your account balances. Ask for a pro forma pricing analysis based on your actual volumes and compare at least two banks. Any figures you see online are rough illustrations, not quotes.</p>

<h2>Worked example: is a lockbox worth it?</h2>
<p>A wholesale distributor receives 400 checks a month averaging $3,500, or $1.4 million a month. Currently, checks arrive at the office, wait for a weekly batch to be opened and deposited, and a clerk spends about 25 hours a month on handling and posting. All cost figures below are illustrative assumptions for the math, not bank pricing.</p>
<table><thead><tr><th>Item</th><th>Current process</th><th>With lockbox</th></tr></thead><tbody>
<tr><td>Average days from mail to deposit</td><td>4 days</td><td>1 day</td></tr>
<tr><td>Value of 3 days faster cash at 5% annual rate</td><td></td><td>$1.4M x 3 / 365 x 5% = about $575 per month</td></tr>
<tr><td>Staff time (at $30 per hour)</td><td>25 hours = $750</td><td>6 hours for exceptions = $180</td></tr>
<tr><td>Illustrative lockbox fees</td><td>$0</td><td>Monthly fee $150 + 400 items x $0.60 + imaging $80 = $470</td></tr>
<tr><td>Net monthly effect</td><td></td><td>$575 + ($750 - $180) - $470 = about $675 better</td></tr>
</tbody></table>
<p>The result depends heavily on volume, check size and how slow your current process is. At 40 checks a month, the same math would usually not justify a lockbox; mobile or scanner remote deposit would be cheaper. Faster cash also lowers <a href="/blog/days-sales-outstanding">days sales outstanding</a>, which matters if you borrow against receivables.</p>

<h2>Lockbox and accounts receivable automation</h2>
<p>Lockbox was the original AR automation tool, and it now sits inside wider integrated receivables services. Modern setups combine:</p>
<ul>
<li><strong>Lockbox for checks</strong>, with check conversion to ACH where allowed.</li>
<li><strong>Electronic payments</strong> such as ACH, wires and cards, consolidated into the same data file.</li>
<li><strong>Matching software</strong> that uses rules or machine learning to apply payments to invoices automatically.</li>
<li><strong>Customer payment portals</strong> that move payers from checks to electronic methods.</li>
</ul>
<p>The long-term goal for most businesses is to receive fewer paper checks at all. A <a href="/blog/customer-payment-portal">customer payment portal</a> and ACH options on invoices reduce check volume over time, while the lockbox handles the customers who still mail checks. Our guide to <a href="/blog/ai-agents-accounts-receivable">AI agents in accounts receivable</a> covers the newer automation tools.</p>

<h2>Lockbox vs remote deposit capture vs in-house processing</h2>
<table><thead><tr><th>Option</th><th>How it works</th><th>Best for</th><th>Limits</th></tr></thead><tbody>
<tr><td>In-house deposit</td><td>Staff open mail and deposit at a branch</td><td>A few checks a week</td><td>Slow, manual, weak separation of duties</td></tr>
<tr><td>Remote deposit capture (RDC)</td><td>Staff scan checks with a phone app or desktop scanner and deposit by image</td><td>Low to moderate check volume</td><td>Staff still handle checks and post payments; deposit limits apply</td></tr>
<tr><td>Wholesale lockbox</td><td>Bank collects, images, deposits and sends data</td><td>Moderate to high B2B volume, large checks</td><td>Bank fees, setup time, change of remit-to address</td></tr>
<tr><td>Retail lockbox</td><td>High-speed scanning of coupons and checks</td><td>Thousands of consumer payments a month</td><td>Needs standardized payment coupons</td></tr>
</tbody></table>
<p>Many growing businesses move from in-house deposits to RDC first, then to a lockbox when check volume or audit requirements justify it. Whichever you use, deposit checks quickly and keep an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> up to date so collections calls go to customers who actually owe money.</p>

<h2>Lockbox fraud risks and controls</h2>
<p>A lockbox removes some risks but not all. Check fraud, especially mail theft followed by check washing or counterfeiting, remains common in the US. Useful controls include:</p>
<ul>
<li><strong>Separation of duties:</strong> the people who record receivables should not be the people who handle checks; a lockbox delivers this automatically.</li>
<li><strong>Remit-to change verification:</strong> fraudsters send fake "new remit-to address" letters to your customers. Tell customers in advance that you will never change payment details by email alone, and confirm changes through a known phone number.</li>
<li><strong>Daily reconciliation:</strong> match lockbox deposits to the bank statement and to the data file every day.</li>
<li><strong>Exception review deadlines:</strong> decide quickly on held items so legitimate payments are not delayed.</li>
<li><strong>Protecting your outgoing checks</strong> with Positive Pay, since your own check stock and account numbers are visible on any check you write.</li>
</ul>

<h2>Questions to ask your bank before signing</h2>
<ol>
<li>How many mail pickups happen each day, and what is the deposit cutoff?</li>
<li>Which data is captured as standard, and what costs extra (for example, keying invoice numbers)?</li>
<li>Which file formats are available, and has the bank integrated with your accounting system before?</li>
<li>How are exceptions presented, and how long are images retained?</li>
<li>Can ACH, wires and card payments be consolidated into the same file?</li>
<li>What are all fee components, and can earnings credits offset them?</li>
<li>What is the implementation timeline and who supports testing?</li>
</ol>
<p>Faster deposits only help if the cash is put to work, so connect lockbox data to your <a href="/blog/cash-flow-management">cash flow management</a> routine.</p>

<h2>How to set up a lockbox: checklist</h2>
<ol>
<li><strong>Measure volume:</strong> checks per month, average amount and number of invoices per check.</li>
<li><strong>Request proposals</strong> from your bank and at least one other, with pricing based on your volume.</li>
<li><strong>Define processing instructions:</strong> what to do with exceptions, unsigned checks, cash, foreign checks and correspondence.</li>
<li><strong>Choose a data file format</strong> your accounting system can import.</li>
<li><strong>Test</strong> with sample remittances before going live.</li>
<li><strong>Update the remit-to address</strong> on invoices, statements and vendor profiles in customers' AP systems.</li>
<li><strong>Notify customers</strong> in writing, and verify the change through a known contact to avoid confusion with fraud attempts.</li>
<li><strong>Forward stray checks</strong> that still come to your office during the transition.</li>
</ol>

<h2>How a lockbox helps with month-end close and audits</h2>
<p>Lockbox data does more than speed up deposits. Because every check, envelope and remittance page is imaged and time-stamped by a third party, you get a clean audit trail: auditors can trace a receipt from the image to the bank deposit to the customer's account without relying on office logs. Same-day deposits also mean fewer checks sitting in "undeposited funds" at month end, which simplifies the bank reconciliation in your close checklist.</p>
<p>The data file helps your AR team too. Unapplied cash, payments without a matching invoice, shows up as an exception the day it arrives instead of weeks later, so you can contact the customer while the payment is fresh. Short payments and deductions are visible immediately, which matters if customers routinely take unauthorized discounts. And because the bank, not your staff, captures the payment data, lenders who finance your receivables often view lockbox collections as stronger collateral. Some asset-based lenders and factoring companies require collections to flow through a lockbox for exactly this reason.</p>

<h2>Common lockbox mistakes</h2>
<ul>
<li><strong>Not updating the remit-to address everywhere</strong>, including customers' vendor master files.</li>
<li><strong>Remittance that cannot be read</strong>, because invoices lack clear invoice numbers and amounts.</li>
<li><strong>Ignoring the exceptions queue</strong>, leaving payments unapplied and customers receiving wrong reminders.</li>
<li><strong>Paying for features you do not use</strong>, such as full remittance keying when invoice numbers are on a stub.</li>
<li><strong>No fraud controls on outgoing payments</strong>; use <a href="/blog/positive-pay-check-fraud">Positive Pay</a> for checks you write.</li>
</ul>

<h2>Designing invoices that work with a lockbox</h2>
<p>A lockbox works best when every payment arrives with a clear reference. Print the invoice number and amount due prominently, include a detachable remittance stub at the bottom if you can, and state the lockbox address as the only remit-to address. Ask customers to write the invoice number on the check memo line. Our <a href="/invoice-generator">free invoice generator</a> lets you put a remit-to address and payment instructions in the notes, and our <a href="/invoice-templates">invoice templates</a> give you clean layouts that scan well. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> covers the rest of the collection process.</p>

<p>Lockbox services make sense when check volume is high enough that faster deposits and less manual posting outweigh the bank fees. Run the numbers on your own volume, negotiate pricing, and keep nudging customers toward electronic payments. For the invoices that start the process, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a PDF built entirely in your browser.</p>
`,
  },
  {
    slug: "customer-payment-portal",
    title: "Customer Payment Portal: Features, Setup and Benefits",
    description:
      "What a customer payment portal is, must-have features (invoice history, ACH, cards, autopay), how self-service AR cuts DSO, setup steps and a worked example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-payments-small-business", "days-sales-outstanding", "dunning-process"],
    faqs: [
      {
        q: "Do customers have to create an account to use a payment portal?",
        a: "Not always. Many portals offer guest payment through a secure link in the invoice email, so customers can pay a single invoice without logging in. Account creation becomes useful when customers want to see their full invoice history, save payment methods or set up autopay. Offering both options gives the best adoption, since forcing a login is one of the main reasons customers abandon online payment.",
      },
      {
        q: "Is a customer payment portal secure?",
        a: "Reputable portals use encryption, tokenized storage of card and bank details, and PCI-compliant payment processing, so your business never stores full card numbers. Look for multi-factor authentication for customer accounts, role-based access for your staff and audit logs. Be careful with portals that email full invoices with sensitive data as attachments, and make sure your domain uses email authentication so customers can trust portal notifications.",
      },
      {
        q: "Can I pass card fees to customers in a payment portal?",
        a: "Some portals let you add a credit card surcharge or convenience fee, or offer a discount for ACH. Card network rules and state laws restrict how surcharges work, including registration, caps, disclosure and a ban on surcharging debit cards. Many businesses instead make ACH free and prominent in the portal, which steers large invoices away from cards without adding fees customers dislike.",
      },
      {
        q: "What is the difference between a payment portal and a payment link?",
        a: "A payment link lets a customer pay one specific invoice or amount. A payment portal is a self-service hub where a customer can see all open and paid invoices, statements and credits, pay several invoices at once, download documents, manage saved payment methods and enroll in autopay. Many small businesses start with payment links and add a portal as their customer count and invoice volume grow.",
      },
      {
        q: "How do I get customers to use the payment portal?",
        a: "Put the portal link on every invoice, statement and reminder email, and make the first experience easy with guest checkout. Explain the benefits in plain words: see all invoices in one place, pay in two clicks, set up autopay. For large accounts, offer a short walkthrough. Some businesses offer a small incentive for autopay enrollment. Track adoption monthly and follow up with customers who still pay by check.",
      },
      {
        q: "Does a payment portal work for B2B customers with AP departments?",
        a: "Yes, with the right features. B2B payers want to pay many invoices in one payment, apply credits, download invoices for their approval workflow and send remittance details. Some prefer to push ACH or use virtual cards rather than log in to a portal. A good B2B portal supports partial payments, multiple users per customer, purchase order references and downloadable statements for reconciliation.",
      },
      {
        q: "What does autopay authorization need to include?",
        a: "For recurring card or ACH debits, the authorization should state the payment amount or how it is calculated, the frequency or timing, the account to be debited, and how the customer can cancel. Nacha rules require proper authorization for recurring ACH debits, and consumer debits are subject to Regulation E. Keep a copy of the authorization for at least two years after it ends, and send notice before changing amounts.",
      },
      {
        q: "Can I build a payment portal without expensive software?",
        a: "Small businesses can get basic portal features from accounting software and payment processors they already use, such as invoice payment pages and customer accounts in common invoicing tools. Stripe and similar processors also offer hosted customer portals for subscriptions. Dedicated AR platforms add more automation for larger B2B companies. Start with what your current tools offer and upgrade when manual work becomes a bottleneck.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A customer payment portal is a secure online page or account where customers can view their invoices and statements, pay by card or bank transfer, save payment methods, set up autopay and download receipts on their own. It turns accounts receivable into a self-service process, which usually means faster payments and fewer "can you resend that invoice?" emails.</p>

<p>Every invoice that a customer cannot find, cannot pay easily or forgets about adds days to your cash cycle. A customer payment portal solves those problems by giving customers one place to see what they owe and pay it. This guide covers the features that matter, how a self-service AR portal reduces days sales outstanding with a worked example, how to set one up, and the mistakes that keep customers away.</p>

<h2>What is a customer payment portal?</h2>
<p>A customer payment portal (also called a customer billing portal, AR portal or self-service payment portal) is a website, usually provided by your invoicing, accounting or payment software, where customers can manage their billing relationship with you. The portal connects to your accounting records, so when a customer pays, the invoice is marked paid and the payment is applied without manual work.</p>
<p>Portals range from simple to sophisticated:</p>
<ul>
<li><strong>Payment page per invoice:</strong> a link in the invoice email that shows the invoice and a pay button.</li>
<li><strong>Customer account portal:</strong> login access to all invoices, statements, payments and saved methods.</li>
<li><strong>Full self-service AR portal:</strong> adds disputes, credit memos, multi-invoice payments, multiple users and integration with customers' AP systems.</li>
</ul>

<h2>What features should a customer payment portal have?</h2>
<table><thead><tr><th>Feature</th><th>Why it matters</th><th>Priority</th></tr></thead><tbody>
<tr><td>Open and paid invoice list</td><td>Customers can see exactly what they owe without asking</td><td>Must have</td></tr>
<tr><td>Card and ACH payments</td><td>Gives choice; ACH keeps fees low on large invoices</td><td>Must have</td></tr>
<tr><td>Guest payment via link</td><td>Removes login friction for one-off payers</td><td>Must have</td></tr>
<tr><td>Downloadable PDFs and receipts</td><td>Customers need them for their own records and approvals</td><td>Must have</td></tr>
<tr><td>Saved payment methods and autopay</td><td>Recurring customers pay on time automatically</td><td>High</td></tr>
<tr><td>Pay multiple invoices at once</td><td>Essential for B2B customers paying in batches</td><td>High</td></tr>
<tr><td>Partial payments and payment plans</td><td>Keeps cash coming in from customers who cannot pay in full</td><td>Medium</td></tr>
<tr><td>Statements and credit memos</td><td>Helps reconcile balances and avoid disputes</td><td>Medium</td></tr>
<tr><td>Dispute or question button</td><td>Captures issues early instead of silent non-payment</td><td>Medium</td></tr>
<tr><td>Branding and custom domain</td><td>Builds trust and reduces phishing concerns</td><td>Medium</td></tr>
<tr><td>Multi-user access per customer</td><td>Lets a client's AP team and project manager both log in</td><td>B2B</td></tr>
</tbody></table>

<h2>How does self-service AR reduce days sales outstanding?</h2>
<p><a href="/blog/days-sales-outstanding">Days sales outstanding (DSO)</a> measures how long it takes to collect after a sale. A portal shortens it in several ways:</p>
<ul>
<li><strong>Removes friction:</strong> no searching for an old email or setting up a new payee in online banking.</li>
<li><strong>Enables autopay:</strong> recurring invoices are paid on the due date without any action.</li>
<li><strong>Reduces disputes:</strong> customers see the invoice, the PO reference and supporting documents.</li>
<li><strong>Speeds cash application:</strong> payments are tied to invoices automatically.</li>
<li><strong>Supports reminders:</strong> every reminder can link straight to the payment page. Our guide to <a href="/blog/payment-reminder-emails">payment reminder emails</a> includes templates.</li>
</ul>

<h2>Worked example: what a portal is worth</h2>
<p>A B2B IT services company bills $250,000 a month across 120 customers. Before the portal, most customers paid by check or by bank transfer after a reminder, and DSO was 52 days. After launching a portal with ACH, cards and autopay, assume DSO falls to 41 days. The DSO change is an illustrative assumption to show the math.</p>
<table><thead><tr><th>Measure</th><th>Before portal</th><th>After portal</th></tr></thead><tbody>
<tr><td>Average daily sales ($250,000 / 30)</td><td>$8,333</td><td>$8,333</td></tr>
<tr><td>DSO</td><td>52 days</td><td>41 days</td></tr>
<tr><td>Receivables outstanding (daily sales x DSO)</td><td>$433,333</td><td>$341,667</td></tr>
<tr><td>Cash released</td><td></td><td>$91,667</td></tr>
<tr><td>Interest saved if that cash repays a line of credit at an illustrative 9%</td><td></td><td>About $8,250 per year</td></tr>
</tbody></table>
<p>On top of that, fewer checks to deposit and fewer status calls free up AR staff time. Against this you weigh the portal's software cost and payment fees. If many customers shift from free checks to cards, fees rise, so make ACH the easy default for larger invoices. Our breakdown of <a href="/blog/credit-card-processing-fees">credit card processing fees</a> helps you model that cost.</p>

<h2>How to set up a customer payment portal: step by step</h2>
<ol>
<li><strong>Check what you already have.</strong> Your accounting or invoicing software may include payment pages and customer accounts.</li>
<li><strong>Choose payment methods.</strong> Offer ACH and cards at minimum; consider pay by bank for consumers. Our guide to <a href="/blog/pay-by-bank">pay by bank</a> covers the newest option.</li>
<li><strong>Connect payments to your ledger</strong> so paid invoices update automatically.</li>
<li><strong>Configure autopay rules</strong>, including authorization text, retry timing for failed payments and notification emails.</li>
<li><strong>Brand the portal</strong> with your logo and, if possible, your own domain.</li>
<li><strong>Update invoice templates</strong> to include the portal link and a short "how to pay" note.</li>
<li><strong>Announce it</strong> to existing customers with clear instructions and a contact for questions.</li>
<li><strong>Measure adoption</strong>: share of payments through the portal, autopay enrollment and DSO each month.</li>
</ol>

<h3>Autopay and recurring payments</h3>
<p>Autopay is the portal feature with the biggest effect on late payments. Customers save a card or bank account and authorize you to charge it when each invoice is due. For subscriptions and retainers, this turns collections into a background process. Get clear authorization, send a pre-charge notice for variable amounts, and have a <a href="/blog/dunning-process">dunning process</a> ready for failed payments, such as expired cards. Our guide to <a href="/blog/recurring-payments-small-business">recurring payments for small businesses</a> covers the setup in detail, and <a href="/blog/batch-invoicing">batch invoicing</a> pairs well with autopay for monthly billing runs.</p>

<h2>Customer payment portal options</h2>
<table><thead><tr><th>Option</th><th>Examples</th><th>Good for</th></tr></thead><tbody>
<tr><td>Accounting and invoicing software</td><td>QuickBooks, Xero, FreshBooks, Zoho Invoice payment pages and client areas</td><td>Small businesses already using those tools</td></tr>
<tr><td>Payment processor portals</td><td>Stripe customer portal for subscriptions, Square invoice pages</td><td>Subscription and service businesses</td></tr>
<tr><td>Dedicated AR platforms</td><td>Versapay, Billtrust, Bill.com receivables and similar tools</td><td>Mid-size B2B companies with high invoice volumes</td></tr>
<tr><td>Industry software</td><td>Property management, healthcare and field service platforms</td><td>Businesses whose operations software already holds billing</td></tr>
</tbody></table>
<p>Features and pricing change frequently, so compare current plans, especially transaction fees and per-user charges.</p>

<h2>B2B vs B2C payment portals: what changes?</h2>
<table><thead><tr><th>Need</th><th>B2C customers</th><th>B2B customers</th></tr></thead><tbody>
<tr><td>Typical payment method</td><td>Cards, digital wallets, pay by bank</td><td>ACH, wire, virtual cards, checks</td></tr>
<tr><td>Invoices per payment</td><td>Usually one</td><td>Often many, with credits and short payments</td></tr>
<tr><td>Users per account</td><td>One</td><td>Several: AP clerk, approver, project lead</td></tr>
<tr><td>Documents needed</td><td>Receipt</td><td>Invoice PDF, PO number, statement, W-9, remittance details</td></tr>
<tr><td>Autopay</td><td>Common for subscriptions</td><td>Less common; AP teams prefer approval workflows</td></tr>
</tbody></table>
<p>For B2B customers, the portal should fit into their approval process rather than bypass it. Make it easy to download an invoice for their <a href="/blog/invoice-approval-workflow">invoice approval workflow</a>, include PO references, and let them pay several approved invoices in one transaction.</p>

<h2>Payment portal security checklist</h2>
<ul>
<li>Payments processed by a PCI-compliant provider, with cards and bank accounts stored as tokens.</li>
<li>Multi-factor authentication available for customer logins and required for your staff.</li>
<li>Role-based access so only authorized staff can issue refunds, credits or change bank details.</li>
<li>Portal emails sent from your own domain with SPF, DKIM and DMARC set up, so customers can trust them.</li>
<li>No full bank or card numbers in emails or PDFs.</li>
<li>A published policy that you never change payment details by email, to protect customers from invoice fraud.</li>
<li>Audit logs that record who changed what and when.</li>
</ul>

<h2>Which metrics show your portal is working?</h2>
<table><thead><tr><th>Metric</th><th>How to calculate</th><th>What good looks like</th></tr></thead><tbody>
<tr><td>Portal payment share</td><td>Payments through the portal / total payments</td><td>Rising every quarter</td></tr>
<tr><td>Autopay enrollment</td><td>Customers on autopay / customers with recurring invoices</td><td>A steadily growing share</td></tr>
<tr><td>DSO</td><td>Receivables / average daily sales</td><td>Falling or stable as sales grow</td></tr>
<tr><td>Percent of invoices paid by due date</td><td>On-time invoices / invoices due</td><td>Rising</td></tr>
<tr><td>Payment cost as % of revenue</td><td>Processing fees / collected revenue</td><td>Stable, with ACH share growing</td></tr>
<tr><td>Disputes raised through portal</td><td>Count per month</td><td>Resolved quickly, falling over time</td></tr>
</tbody></table>
<p>Pair these with your <a href="/blog/accounts-receivable-aging-report">AR aging report</a>: if older buckets are not shrinking, focus follow-ups on customers who have never logged in, and escalate truly <a href="/blog/overdue-invoice">overdue invoices</a> through your normal collections steps.</p>

<h3>Announcing the portal to customers</h3>
<p>A short, plain email works best: what is changing, the benefits for the customer, the link, and a contact for help. For example: "From March 1, you can view and pay all your invoices online at [portal link]. You can pay by bank transfer at no charge or by card, download past invoices and set up automatic payments. Your existing payment methods still work. Questions? Reply to this email or call [number]." Repeat the message on the next two invoices and statements.</p>

<h2>Common payment portal mistakes</h2>
<ul>
<li><strong>Requiring a login for every payment</strong>, which drives customers back to checks.</li>
<li><strong>Hiding the ACH option</strong>, so large invoices go on cards and fees balloon.</li>
<li><strong>Not syncing with accounting</strong>, leading to customers seeing invoices they already paid.</li>
<li><strong>Sending portal emails from an unfamiliar domain</strong>, which looks like phishing.</li>
<li><strong>No owner for disputes</strong> submitted through the portal.</li>
<li><strong>Launching without telling customers</strong> how and why to use it.</li>
<li><strong>Adding surcharges without checking the rules</strong>; see our guide to <a href="/blog/convenience-fee">convenience fees</a>.</li>
</ul>

<h2>Is a payment portal worth it for a small business?</h2>
<p>For a business with a handful of clients and one invoice a month each, a portal adds little beyond a good invoice with a payment link. The case gets stronger as volume and complexity grow. A portal tends to pay for itself when:</p>
<ul>
<li>You have dozens or hundreds of active customers, or many invoices per customer.</li>
<li>Staff spend hours each week resending invoices, answering balance questions or chasing payments.</li>
<li>Customers often pay the wrong invoice, pay twice or forget credits.</li>
<li>You bill recurring amounts that could run on autopay.</li>
<li>Your DSO is rising even though customers are not in financial trouble.</li>
</ul>
<p>A practical test: estimate the hours your team spends on payment-related questions each month, multiply by their hourly cost, and add the interest cost of the cash tied up in late receivables. If that total is well above the portal's monthly cost plus any added card fees, a portal is likely worth it. Many invoicing and accounting tools now build payment features in directly, a trend covered in our article on <a href="/blog/embedded-finance-invoicing">embedded finance in invoicing</a>, so the cost of starting is often lower than buying a dedicated platform.</p>

<h2>Start simple: invoices with payment links</h2>
<p>If a full portal is more than you need today, start with the core: clear invoices with a payment link, due date and invoice number. Our <a href="/invoice-generator">free invoice generator</a> lets you add payment instructions and links to every invoice, and our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows how to connect it to Stripe, Square or PayPal. As your customer list grows, the same habits carry over to a portal.</p>

<p>A customer payment portal gives customers a faster, clearer way to pay and gives you lower DSO and less manual AR work. Choose a tool that matches your size, make ACH and autopay easy, and put the portal link on every invoice. To create those invoices, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and builds a downloadable PDF right in your browser.</p>
`,
  },
];
