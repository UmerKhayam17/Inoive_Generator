import type { PostDraft } from "../blog";

export const PAYMENTS_2026_POSTS: PostDraft[] = [
  {
    slug: "stablecoin-invoice-payments",
    title: "Stablecoin Payments: How to Invoice and Get Paid in USDC",
    description:
      "Stablecoin payments explained for small businesses: how to invoice in USDC, what to put on the invoice, fees, the GENIUS Act and how stablecoin income is taxed.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["fednow-vs-rtp-instant-payments", "invoice-international-clients", "wise-vs-payoneer"],
    faqs: [
      {
        q: "Is USDC the same as US dollars in my bank account?",
        a: "No. USDC is a token issued by a private company and backed by reserves such as cash and short-term US Treasuries, so it is designed to be redeemable one-for-one for dollars. It is not a bank deposit and is not covered by FDIC insurance. You usually need an exchange or payment provider to convert it into dollars in your bank account.",
      },
      {
        q: "Can I refund a client who paid in stablecoins?",
        a: "Yes, but you have to send a new transfer back to the client, because blockchain payments cannot be reversed by the network. Confirm the refund address and network in writing, send a small test amount first if the sum is large, and issue a credit note so your records match the refund.",
      },
      {
        q: "Do I charge sales tax or VAT on an invoice paid in USDC?",
        a: "The payment method does not change whether the service is taxable. Work out sales tax or VAT exactly as you would for a card or bank payment, show it on the invoice in your normal currency, and treat the stablecoin only as the way the client settles the total.",
      },
      {
        q: "Which blockchain network should I ask clients to use?",
        a: "Use a network your own wallet or payment provider supports for that token, and name it on the invoice. USDC exists on several networks, such as Ethereum, Solana, Base and Polygon, and tokens sent on an unsupported network can be very hard or impossible to recover. Pick one network and stick to it.",
      },
      {
        q: "Does the GENIUS Act mean stablecoins are now legal tender?",
        a: "No. The GENIUS Act creates a federal licensing and reserve framework for payment stablecoin issuers in the United States. It does not make stablecoins legal tender, and no business is required to accept them. Accepting them remains a commercial choice you agree with each client.",
      },
      {
        q: "What if a client sends less or more USDC than the invoice amount?",
        a: "Treat it like any short payment or overpayment. If they sent less, often because network fees came out of the amount, record what arrived and ask for the difference as a separate transfer, pointing to your \"sender pays network fees\" term. If they sent too much, agree whether to refund the excess to a confirmed address or credit it to the next invoice, and document the choice on a statement or credit note.",
      },
      {
        q: "Should I accept USDT as well as USDC?",
        a: "Only if you're comfortable with both issuers and your wallet or provider supports both on the same network. USDC and USDT are different tokens from different companies, with different reserve disclosures and regulatory status, so they aren't interchangeable. Many businesses accept one token only to keep records simple. Whichever you choose, name it on the invoice and say that payments in other tokens may be returned at the sender's cost.",
      },
      {
        q: "Can I accept stablecoin payments in the UK or EU?",
        a: "Generally yes, but the rules differ from the US. In the EU, the MiCA regulation means regulated platforms can only offer stablecoins from authorized issuers: USDC is issued under MiCA, while USDT was removed from regulated EU exchanges after Tether chose not to seek authorization. The UK's crypto regime is still being developed by the FCA. Income is still taxable and VAT works as normal, so check HMRC or your national tax authority first.",
      },
      {
        q: "Can I pay my own contractors in stablecoins?",
        a: "You can if they agree, but your obligations don't change. In the US, payments to contractors in digital assets are reported at their dollar value, so you may still need a W-9 and a Form 1099-NEC once the annual threshold is met. Record the dollar value on the payment date, the transaction hash and the invoice it settles. Check the IRS digital assets guidance, and local rules if the contractor is abroad.",
      },
      {
        q: "How do I record a USDC payment if my business doesn't use US dollars?",
        a: "Record it at its value in your own currency on the day you receive it, using a consistent, documented exchange rate source. For example, a UK freelancer paid 2,400 USDC would convert it to pounds at the rate on the receipt date for their income records, and any later gain or loss when converting is dealt with separately. Keep the invoice in your normal currency where possible, and check your tax authority's guidance on crypto valuation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Stablecoin payments let a client settle your invoice in a dollar-pegged token such as USDC instead of a card or bank transfer. You invoice in your normal currency, state the token, the blockchain network and your wallet address, and the client sends the exact amount. Funds usually arrive in minutes, at any hour, but transfers cannot be reversed.</p>

<p>This guide explains how stablecoin payments work for a small business or freelancer, what to write on a crypto invoice, what the fees look like, how the US GENIUS Act changes the picture, and how payments received in stablecoins are taxed. You can prepare the invoice itself in our <a href="/invoice-generator">free invoice generator</a> and add your wallet details in the payment notes. The generator creates the PDF only; it does not process crypto or any other payment.</p>

<p><strong>Important:</strong> This is general information, not tax, legal or investment advice. Crypto rules change quickly and differ by country. Check the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets" target="_blank" rel="noopener noreferrer">IRS digital assets guidance</a> or your own tax authority, and speak to a qualified adviser before you accept digital assets.</p>

<h2>What are stablecoin payments?</h2>
<p>A stablecoin is a digital token designed to hold a steady value against a traditional currency, usually the US dollar. The issuer keeps reserve assets, typically cash and short-dated government debt, so each token can be redeemed for one dollar. USDC (issued by Circle) and USDT (issued by Tether) are the best-known dollar stablecoins; euro-pegged tokens also exist.</p>
<p>Stablecoin payments are simply transfers of these tokens from the payer's wallet to yours over a public blockchain. Unlike bitcoin or ether, the price is meant to stay at about $1, which is why businesses that would never accept a volatile coin sometimes accept a stablecoin. The main attractions are speed, round-the-clock settlement and low network costs on cross-border payments. The main drawbacks are irreversibility, the need to manage a wallet safely, and extra tax record keeping.</p>

<h2>Who uses stablecoins to pay invoices?</h2>
<ul>
<li><strong>Freelancers with international clients</strong>, especially where bank wires are slow or expensive. Compare the traditional routes in our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</li>
<li><strong>Web3 and software companies</strong> that already hold treasury funds in stablecoins.</li>
<li><strong>Contractors in countries with currency controls or limited dollar banking</strong>, although local law may restrict crypto, so check first.</li>
<li><strong>Online merchants</strong> using a payment provider that accepts stablecoins at checkout and settles to them in regular currency.</li>
</ul>
<p>If your client has never paid in crypto, do not push it. A bank transfer or card link is still the default for most businesses, and options like <a href="/blog/wise-vs-payoneer">Wise or Payoneer</a> already cut cross-border costs for many freelancers.</p>

<h2>How stablecoin payments work, step by step</h2>
<ol>
<li><strong>You agree the method in writing.</strong> Put the accepted token, network and who pays network fees in your contract or quote.</li>
<li><strong>You issue a normal invoice.</strong> The invoice shows your amount in USD (or your usual currency), plus the stablecoin payment instructions.</li>
<li><strong>The client sends the tokens.</strong> They paste your wallet address, choose the same network and send the exact amount, ideally with the invoice number in a memo field if their wallet supports one.</li>
<li><strong>The network confirms the transfer.</strong> Depending on the network, this can take seconds to a few minutes. You can check the transaction hash on a public block explorer.</li>
<li><strong>You record the payment.</strong> Note the date, time, amount, token, network, transaction hash and the dollar value at receipt. Mark the invoice paid and send a <a href="/blog/payment-receipt-template">payment receipt</a> if the client wants one.</li>
<li><strong>You hold or convert.</strong> Keep the tokens, or convert them to dollars through an exchange or payment provider and withdraw to your bank.</li>
</ol>

<h3>Self-custody wallet or payment provider?</h3>
<p>You can receive stablecoins directly into a wallet you control, or let a payment provider accept them for you. Some card processors now offer stablecoin acceptance and settle the proceeds as regular currency in your account, which removes the need to hold crypto yourself. A self-custody wallet avoids provider fees but makes you responsible for keys, backups and conversion.</p>

<h2>How to invoice in USDC: what to put on the invoice</h2>
<p>A crypto invoice is a normal invoice with extra payment instructions. Keep all the usual fields from our guide on <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>, then add these:</p>
<table><thead><tr><th>Field</th><th>Example</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Invoice currency and amount</td><td>USD 2,400.00</td><td>Keeps your books and tax records in your normal currency</td></tr>
<tr><td>Accepted token</td><td>USDC only</td><td>Stops the client sending a different coin</td></tr>
<tr><td>Network</td><td>Base (or Ethereum, Solana, Polygon)</td><td>Tokens sent on the wrong network may be lost</td></tr>
<tr><td>Wallet address</td><td>Full address, checked character by character</td><td>Transfers to a wrong address cannot be recalled</td></tr>
<tr><td>Amount in tokens</td><td>2,400 USDC</td><td>At a 1:1 peg the token amount matches the dollar amount</td></tr>
<tr><td>Network fee rule</td><td>Sender pays network fees; invoice must be received in full</td><td>Prevents short payments</td></tr>
<tr><td>Reference</td><td>Include INV-2026-0142 in the memo or email the transaction hash</td><td>Lets you match the payment to the invoice</td></tr>
<tr><td>Fallback method</td><td>Bank transfer details</td><td>Gives the client a choice and a backup</td></tr>
</tbody></table>
<p>Use a unique, sequential invoice number as with any invoice; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set a format.</p>

<h2>Stablecoin fees: what does it cost to get paid?</h2>
<p>Costs come in three layers, and you should check each one at the time of writing because they change often:</p>
<ul>
<li><strong>Network fees</strong> (often called gas). Usually paid by the sender. On many networks a USDC transfer costs a fraction of a dollar, but fees can spike on busy networks.</li>
<li><strong>Provider fees.</strong> If a processor accepts the payment for you, it charges a percentage. For example, Stripe's <a href="https://docs.stripe.com/crypto/stablecoins" target="_blank" rel="noopener noreferrer">stablecoin payments documentation</a> listed a 1.5% fee at the time of writing.</li>
<li><strong>Conversion and withdrawal fees.</strong> If you hold tokens yourself, an exchange may charge a trading spread or fee to convert to dollars and a fee to withdraw to your bank.</li>
</ul>

<h3>Worked example: a $2,400 invoice</h3>
<p>Suppose you invoice $2,400.00 for a design project. Here is how the net amount compares under three routes. The card rate is illustrative only; use your own provider's pricing.</p>
<table><thead><tr><th>Route</th><th>Calculation</th><th>Fee</th><th>You receive</th></tr></thead><tbody>
<tr><td>Stablecoin via provider at 1.5%</td><td>$2,400.00 x 1.5%</td><td>$36.00</td><td>$2,364.00</td></tr>
<tr><td>Card payment at an illustrative 3% + $0.30</td><td>($2,400.00 x 3%) + $0.30</td><td>$72.30</td><td>$2,327.70</td></tr>
<tr><td>USDC direct to your own wallet</td><td>Sender pays network fee</td><td>$0.00 to you on receipt</td><td>2,400 USDC (conversion costs apply later)</td></tr>
</tbody></table>
<p>The direct-wallet route looks cheapest, but you still pay to convert and withdraw, and you take on custody risk. For many small businesses the deciding factor is not the fee but whether the client can pay this way at all.</p>

<h2>The GENIUS Act: what it means for stablecoin payments</h2>
<p>The GENIUS Act, signed into US law on 18 July 2025, created the first federal framework for payment stablecoins. In summary, it:</p>
<ul>
<li>Limits issuing payment stablecoins in the US to permitted issuers supervised by federal or qualifying state regulators.</li>
<li>Requires one-to-one reserves in cash, deposits, short-dated Treasuries and similar safe assets, with monthly public reserve disclosures.</li>
<li>Bans issuers from paying interest or yield simply for holding the token.</li>
<li>Applies anti-money-laundering and sanctions rules to issuers.</li>
<li>Gives holders priority over reserves if an issuer fails.</li>
</ul>
<p>The law takes effect on the earlier of 18 months after enactment (18 January 2027) or 120 days after regulators issue final rules, and rulemaking was still under way at the time of writing. For a small business, the practical effect is more confidence in regulated dollar stablecoins, not a change to how you invoice. It does not make stablecoins legal tender, and accepting them is still optional.</p>

<h2>How are stablecoin payments taxed?</h2>
<p>In the United States, the IRS treats digital assets, including stablecoins, as property rather than currency. Key points for a business or freelancer:</p>
<ul>
<li><strong>Income at receipt.</strong> When you receive stablecoins for services, you have ordinary income equal to their fair market value in US dollars at the time you receive them. For a $1 stablecoin, that is normally the dollar amount of the invoice.</li>
<li><strong>Self-employment tax still applies</strong> to that income, just as with a bank payment. See our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>.</li>
<li><strong>Disposals can be taxable.</strong> Selling, swapping or spending the tokens later is a disposal. Because stablecoins rarely move far from $1, the gain or loss is usually tiny, but you still need records of your cost basis.</li>
<li><strong>Information returns.</strong> Form 1099-DA reports broker sales of digital assets; it does not report the payment your client made to you for services. The client may still owe you a 1099-NEC if you are a contractor and the usual thresholds are met.</li>
<li><strong>The digital asset question.</strong> Form 1040 asks whether you received digital assets for services. Answer it accurately.</li>
</ul>
<p>Outside the US, most tax authorities also treat crypto received for work as income at its value on the day you receive it, but rules on VAT, record keeping and reporting differ. Check locally before your first stablecoin invoice.</p>

<h2>Risks of crypto invoices and how to reduce them</h2>
<ul>
<li><strong>Wrong network or address.</strong> Send a small test transfer for a new client or a large invoice, and put the network in bold on the invoice.</li>
<li><strong>Address-change scams.</strong> Fraudsters impersonate suppliers and send "updated" wallet details. Confirm any change by phone. Our guide to <a href="/blog/invoice-scams">invoice scam warning signs</a> covers the patterns.</li>
<li><strong>Address poisoning.</strong> Attackers send tiny transfers from look-alike addresses so you copy the wrong one later. Always copy your address from your wallet, never from your transaction history.</li>
<li><strong>De-pegging.</strong> A stablecoin can briefly trade below $1 in stressed markets. Converting promptly limits exposure.</li>
<li><strong>Account freezes.</strong> Issuers can freeze tokens linked to sanctioned or stolen funds, and exchanges can hold withdrawals during compliance reviews.</li>
<li><strong>Chargeback-free cuts both ways.</strong> You cannot be charged back, but your client also has no network-level dispute process, so be precise about deliverables.</li>
</ul>

<h2>Common mistakes with stablecoin invoices</h2>
<ol>
<li>Invoicing only in tokens with no fiat amount, which complicates your books and tax.</li>
<li>Leaving the network off the invoice.</li>
<li>Not recording the transaction hash and dollar value at receipt.</li>
<li>Accepting any coin the client happens to hold.</li>
<li>Ignoring local rules; some countries restrict or ban crypto payments.</li>
<li>Treating the payment as "not income" because it never reached your bank.</li>
</ol>

<h2>Checklist before you accept stablecoin payments</h2>
<ul>
<li>Payment method, token and network agreed in the contract.</li>
<li>Wallet or provider account set up with two-factor authentication and secure backups.</li>
<li>Invoice shows the fiat amount, token, network, address, fee rule and a reference.</li>
<li>Test transfer completed for new clients.</li>
<li>Records kept: date, amount, token, network, transaction hash, dollar value.</li>
<li>Tax treatment confirmed with your adviser.</li>
<li>Fallback bank details listed on the invoice.</li>
</ul>

<h2>Next step: create your stablecoin-ready invoice</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, bill in your normal currency, and paste the token, network, wallet address and reference rule into the payment notes. A clean layout such as the <a href="/invoice-templates/minimal">Minimal template</a> keeps long wallet addresses readable. If you also want faster dollar payments inside the US, compare <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP instant payments</a> before you decide.</p>
`,
  },
  {
    slug: "fednow-vs-rtp-instant-payments",
    title: "FedNow vs RTP: Instant Payments for Invoices",
    description:
      "FedNow vs RTP compared: who runs each instant payment network, limits, request for payment, fees and how small businesses can get invoices paid in seconds.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["ach-vs-wire-transfer", "bank-details-on-invoice", "stablecoin-invoice-payments"],
    faqs: [
      {
        q: "Can a FedNow bank send money to an RTP-only bank?",
        a: "Not directly. FedNow and RTP are separate networks and are not interoperable, so both banks need to be on the same network for an instant transfer to go through. Many larger banks connect to both. If your client's bank and yours share no network, the payment falls back to ACH or a wire.",
      },
      {
        q: "Are instant payments available on weekends and holidays?",
        a: "Yes. Both FedNow and RTP run 24 hours a day, 7 days a week, every day of the year, and funds are available to the receiver within seconds. That is the main difference from ACH and Fedwire, which only settle on business days.",
      },
      {
        q: "Do I need new bank details to receive instant payments?",
        a: "Usually not. Instant payments in the US use your normal routing number and account number. What matters is whether your bank and that specific account are enabled to receive FedNow or RTP payments. Ask your bank, then tell clients on the invoice that instant payment is accepted.",
      },
      {
        q: "Is Zelle the same as RTP or FedNow?",
        a: "No. Zelle is a consumer and small-business payment service owned by a group of banks. It uses its own rules and limits set by each bank, and it typically identifies people by email or phone number. RTP and FedNow are interbank networks that banks plug many products into, including business payments and request for payment.",
      },
      {
        q: "What happens if a client sends an instant payment to the wrong account?",
        a: "Instant payments are final once sent, so the network will not reverse them. The sender must ask their bank to request a return from the receiving bank, and the receiver can agree or refuse. This is why you should confirm bank details carefully and treat any request to change payment details as a possible scam.",
      },
      {
        q: "Will instant payments replace ACH?",
        a: "Not soon. ACH remains cheaper and well suited to batch payroll, recurring bills and low-urgency vendor payments. Instant payments suit time-sensitive invoices, weekend payments and cases where certainty of final settlement matters. Most businesses will use both.",
      },
      {
        q: "How can I check whether my bank is on FedNow?",
        a: "The Federal Reserve publishes a downloadable list of financial institutions live on the FedNow Service, with their routing numbers, on its FedNow participants page. The Clearing House publishes participant information for RTP. A listed bank may only receive, not send, and may not enable it on every account, so ask your bank directly whether your business account can receive instant payments and at what limit.",
      },
      {
        q: "Can international clients pay me through FedNow or RTP?",
        a: "Not directly. Both networks move US dollars between accounts at participating US financial institutions. A client abroad would need to pay by international wire, a cross-border payment provider or card, and while some providers may use instant rails for the final US leg, you won't usually see that. For foreign clients, list an international payment option on the invoice alongside your US bank details.",
      },
      {
        q: "Is pay by bank the same as FedNow or RTP?",
        a: "Not exactly. Pay by bank is a checkout or invoice payment option that lets a customer pay straight from their bank account instead of by card. Behind the scenes it may run on ACH, which takes a day or more, or on an instant network like RTP or FedNow, depending on the provider and the banks involved. If speed matters, ask your provider which rail it uses and when funds become available.",
      },
      {
        q: "Are business accounts protected if an instant payment is fraudulent?",
        a: "Less than consumer accounts. Regulation E's protections for unauthorized electronic transfers apply to consumer accounts, so business accounts mostly rely on the bank's account agreement. Payments you authorized yourself, even if a scammer tricked you, are generally not reversible. Ask your bank about payee confirmation, limits and alerts, and verify any change of bank details by phone before sending money.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> FedNow vs RTP comes down to who runs the network. RTP is operated by The Clearing House (live since 2017) and FedNow by the Federal Reserve (live since July 2023). Both move money between US bank accounts in seconds, 24/7, with final settlement, a $10 million network limit and request for payment. Your bank chooses which one it joins.</p>

<p>For invoicing, the real question is whether your client's bank and your bank share a network. This guide explains how the two instant payments systems work, how they compare with ACH and wires, how request for payment can replace chasing, and what to put on your invoice. When you are ready, add the payment instructions to an invoice in our <a href="/invoice-generator/usa">US invoice generator</a>.</p>

<h2>What are instant payments?</h2>
<p>Instant payments (also called real-time payments) are account-to-account transfers that clear and settle in seconds, at any hour, and cannot be reversed by the network once sent. The receiver gets usable funds immediately, and the sender gets confirmation that the payment went through. In the United States there are two interbank instant payment networks: the RTP network and the FedNow Service.</p>
<p>From a business point of view, "pay by bank" with instant settlement sits between ACH and wires. It is faster than ACH and works on weekends, and it is generally cheaper than a wire for the payer, although each bank sets its own customer pricing.</p>

<h2>FedNow vs RTP at a glance</h2>
<table><thead><tr><th>Feature</th><th>RTP network</th><th>FedNow Service</th></tr></thead><tbody>
<tr><td>Operator</td><td>The Clearing House, owned by large US banks</td><td>Federal Reserve Banks</td></tr>
<tr><td>Launched</td><td>November 2017</td><td>20 July 2023</td></tr>
<tr><td>Availability</td><td>24/7/365</td><td>24/7/365</td></tr>
<tr><td>Settlement</td><td>Real-time, final and irrevocable</td><td>Real-time, final and irrevocable</td></tr>
<tr><td>Network transaction limit</td><td>$10 million (since 9 February 2025)</td><td>$10 million (since 12 November 2025)</td></tr>
<tr><td>Bank-set limits</td><td>Banks may set lower limits</td><td>Banks may set lower limits</td></tr>
<tr><td>Request for payment</td><td>Yes</td><td>Yes, optional feature since launch</td></tr>
<tr><td>Message standard</td><td>ISO 20022</td><td>ISO 20022</td></tr>
<tr><td>Interoperable with the other</td><td>No</td><td>No</td></tr>
</tbody></table>
<p>Limits and features change, so check the <a href="https://www.federalreserve.gov/paymentsystems/fednow_about.htm" target="_blank" rel="noopener noreferrer">Federal Reserve's FedNow pages</a> and <a href="https://www.theclearinghouse.org/" target="_blank" rel="noopener noreferrer">The Clearing House</a> for current details. Remember that the limit that applies to you is usually the lower one your own bank sets.</p>

<h3>Which network suits which business?</h3>
<p>You rarely get to choose the network directly; your bank does. In practice:</p>
<ul>
<li><strong>If you bank with a large national bank</strong>, it is likely connected to RTP and may also be on FedNow.</li>
<li><strong>If you bank with a community bank or credit union</strong>, FedNow is often the more likely route, sometimes alongside RTP through a processor.</li>
<li><strong>If your clients are large corporates</strong>, their treasury platforms may already send RTP or FedNow credits for urgent supplier payments.</li>
<li><strong>If your clients are consumers</strong>, they will usually see instant payments as a "send now" or "pay instantly" option in their banking app rather than a network name.</li>
</ul>
<p>The practical test is simple: ask your bank which networks your account can receive on, and ask big clients which networks their bank sends on.</p>

<h2>What are RTP and FedNow?</h2>
<h3>The RTP network</h3>
<p>RTP is a private-sector network run by The Clearing House, the company behind the CHIPS large-value system and one of the two ACH operators. It launched in November 2017 and was the first new US core payments rail in decades. Large banks were early participants, and many smaller banks and credit unions connect through processors. RTP raised its per-transaction limit from $1 million to $10 million in February 2025, aimed largely at business-to-business, real estate and supply-chain payments.</p>

<h3>The FedNow Service</h3>
<p>FedNow is the Federal Reserve's instant payment service, launched on 20 July 2023. Because the Fed already provides services to thousands of community banks and credit unions, FedNow was designed to bring instant payments to institutions of every size. Its network limit started at $500,000, rose to $1 million in mid-2025 and then to $10 million from 12 November 2025, matching RTP.</p>
<p>Both networks use the ISO 20022 messaging standard, which carries richer remittance information than older formats. That matters for invoicing: an instant payment can include the invoice number and other details, which makes matching payments to invoices easier for you and your accounting software.</p>

<h2>How instant payments work for an invoice</h2>
<ol>
<li><strong>You confirm your bank can receive</strong> FedNow, RTP or both on your business account. Many banks receive before they offer sending.</li>
<li><strong>You issue the invoice</strong> with your routing and account number and a note that instant payment is accepted.</li>
<li><strong>The client initiates payment</strong> in their online banking or treasury platform, choosing an instant option if their bank offers one.</li>
<li><strong>The networks move the money</strong> between the two banks in seconds.</li>
<li><strong>You see the funds and the reference</strong>, which should include your invoice number, and you mark the invoice paid.</li>
</ol>

<h3>Request for payment: invoices that can be paid with one tap</h3>
<p>Request for payment (RfP) lets a business send a payment request through the network to the payer's bank. The payer sees it in their banking app, reviews it, and approves an instant credit transfer. The request can carry invoice details and a due date, so payment and remittance data travel together. Both networks support RfP, but your bank and your client's bank must offer it, and adoption is still growing. Ask your bank whether it supports sending requests for payment for business accounts.</p>
<p>Here is how a request for payment could replace a reminder email. You invoice a client $3,200.00 on Net 15 terms. On the due date, instead of emailing a reminder, your bank sends a request for payment for $3,200.00 carrying the invoice number. The client's accounts team sees it in their banking portal, checks it against the invoice and approves it; the money arrives seconds later with the reference attached. If they decline or ignore it, you follow up as usual with our <a href="/blog/payment-reminder-emails">payment reminder emails</a>. Note that a request for payment never pulls money from the payer's account; the payer always has to approve it.</p>

<h2>FedNow and RTP vs ACH vs wire transfer</h2>
<table><thead><tr><th>Method</th><th>Speed</th><th>Hours</th><th>Reversible?</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Standard ACH</td><td>Usually 1-2 business days</td><td>Business days</td><td>Limited returns possible</td><td>Payroll, recurring bills, low-urgency invoices</td></tr>
<tr><td>Same Day ACH</td><td>Same business day if submitted in time</td><td>Business days, set windows</td><td>Limited returns possible</td><td>Urgent but not instant payments</td></tr>
<tr><td>Wire (Fedwire)</td><td>Same day, usually within hours</td><td>Business days, set hours</td><td>Final</td><td>Large or time-critical payments</td></tr>
<tr><td>RTP / FedNow</td><td>Seconds</td><td>24/7/365</td><td>Final</td><td>Time-sensitive invoices, weekend payments, payouts</td></tr>
</tbody></table>
<p>Same Day ACH has a per-payment limit of $1 million under Nacha rules, so for large urgent payments outside business hours, instant payments are now the only domestic option that settles immediately. For a deeper look at the two older rails, read <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h2>Worked example: getting paid on a Friday night</h2>
<p>You finish a job and invoice $8,500.00 at 6 pm on a Friday, due on receipt. Your client approves it at 7 pm.</p>
<ul>
<li><strong>Standard ACH:</strong> submitted Friday evening, processed from Monday, likely available Monday or Tuesday. That is roughly three to four calendar days with $8,500.00 outstanding.</li>
<li><strong>Wire:</strong> cannot be sent until Fedwire opens on Monday.</li>
<li><strong>RTP or FedNow:</strong> if both banks are on the same network, the $8,500.00 is in your account by 7:01 pm Friday.</li>
</ul>
<p>If you were planning to cover $6,000.00 of supplier costs over the weekend, instant settlement removes the need to dip into a credit line. That is the cash-flow argument for instant payments; see our guide to <a href="/blog/cash-flow-management">cash flow management</a> for the wider picture.</p>

<h2>Instant payment fees for businesses</h2>
<p>The Federal Reserve and The Clearing House charge participating banks per transaction, but your price is set by your bank. Some banks offer free incoming instant payments and charge for outgoing ones; others bundle them into treasury packages. Before promoting instant payments on your invoices, ask your bank:</p>
<ul>
<li>Is receiving RTP and FedNow payments free on my account?</li>
<li>What is my per-transaction limit, and can it be raised?</li>
<li>Can I send requests for payment, and what does each cost?</li>
<li>How does remittance information, such as the invoice number, appear on my statement?</li>
</ul>

<h2>How to add instant payment details to your invoice</h2>
<p>Instant payments use the same routing and account numbers as ACH, so the change to your invoice is small. In the payment section, list:</p>
<ul>
<li>Bank name, account name, routing number and account number. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows the layout.</li>
<li>A line such as "Instant payments accepted via RTP and FedNow."</li>
<li>The invoice number to quote as the payment reference.</li>
<li>A real due date. With instant rails, "due on receipt" becomes realistic; see <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li>Alternatives such as card or <a href="/blog/add-payment-link-to-invoice">a pay-now link</a> for clients whose banks are not on either network.</li>
</ul>

<h2>Fraud and safety: instant means final</h2>
<p>Because instant payments are irrevocable, fraudsters like them. The common trick for small businesses is a fake "change of bank details" email that appears to come from you, sent to your client. Protect yourself and your customers:</p>
<ul>
<li>Tell clients on every invoice that your bank details will never change by email alone.</li>
<li>Confirm any change of payee details by phone using a number you already have.</li>
<li>Use multi-factor authentication on email and banking.</li>
<li>Learn the warning signs in our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
</ul>

<h2>Common mistakes with instant payments</h2>
<ol>
<li>Assuming every bank can send instant payments. Many can only receive.</li>
<li>Advertising instant payments without checking your own account is enabled.</li>
<li>Forgetting the bank-set limit, which may be far below $10 million.</li>
<li>Not asking clients to include the invoice number, which makes reconciliation harder.</li>
<li>Dropping ACH entirely; it is still cheaper for routine payments.</li>
</ol>

<h2>Checklist: is your business ready for instant payments?</h2>
<ul>
<li>Bank confirms your account can receive RTP, FedNow or both.</li>
<li>You know your limits and fees for receiving and sending.</li>
<li>Invoice shows routing and account numbers and states instant payment is accepted.</li>
<li>Clients know to quote the invoice number.</li>
<li>Bank-detail change policy is written on the invoice.</li>
<li>Alternative payment options are listed for clients outside both networks.</li>
</ul>

<h2>Next step: send an invoice that can be paid in seconds</h2>
<p>Create your invoice in the <a href="/invoice-generator/usa">US invoice generator</a>, add your bank details and an "instant payments accepted" line, and download the PDF. If you work with clients abroad, instant domestic rails will not help; compare <a href="/blog/stablecoin-invoice-payments">stablecoin payments</a> and traditional international options instead.</p>
`,
  },
  {
    slug: "uk-late-payment-law-2026",
    title: "UK Late Payment Law 2026: 60-Day Cap and 8% Interest",
    description:
      "Late payment legislation UK guide for 2026: what the Small Business Protections Bill proposes, the 60-day cap, mandatory 8% interest and what applies today.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["statutory-late-payment-interest", "late-payment-statistics", "overdue-invoice"],
    faqs: [
      {
        q: "Does the 60-day payment cap apply to small businesses paying each other?",
        a: "As announced, the cap is aimed at large businesses paying smaller suppliers, which is where the government says the problem is worst. The final scope, including the size tests used, depends on the wording that passes through Parliament. Small firms should still agree clear terms, because existing law already lets you claim statutory interest when another business pays late.",
      },
      {
        q: "Can I still agree 90-day terms with a big customer today?",
        a: "Yes, for now. Under current regulations, business-to-business terms longer than 60 days are allowed if expressly agreed and not grossly unfair to the supplier. If the Bill passes as proposed, large customers would lose the ability to impose terms over 60 days on smaller suppliers once the relevant provisions come into force.",
      },
      {
        q: "Will the new rules apply to invoices issued before the law starts?",
        a: "That depends on the commencement and transitional provisions in the final Act, which had not been settled at the time of writing. New laws of this kind often apply to contracts entered into after a start date. Watch for official guidance on GOV.UK before relying on the new rules for existing contracts.",
      },
      {
        q: "Does the Bill change the fixed £40, £70 and £100 compensation?",
        a: "The published proposals focus on making 8% statutory interest mandatory, capping payment terms, banning cash retentions in construction and strengthening the Small Business Commissioner. The current fixed compensation sums under the 1998 Act remain the law today. Check the final Act for any change to compensation amounts.",
      },
      {
        q: "Who is the Small Business Commissioner?",
        a: "The Small Business Commissioner is an independent public office in England, set up under the Enterprise Act 2016, that helps small businesses with payment disputes involving larger firms and promotes better payment practice. The Bill would give the Commissioner powers to investigate, adjudicate and fine persistent late payers.",
      },
      {
        q: "Is the Small Business Commissioner's service free?",
        a: "Yes, for small businesses. The Office of the Small Business Commissioner's guidance and complaints scheme are free for businesses with fewer than 50 employees that have a payment dispute with a larger business, and you can use them now, before the Bill becomes law. Gather your contract, invoices and correspondence first. Remember the Commissioner currently reviews complaints and makes recommendations; it cannot yet issue binding rulings or fines.",
      },
      {
        q: "What is the Fair Payment Code?",
        a: "The Fair Payment Code is a voluntary scheme run by the Office of the Small Business Commissioner that replaced the Prompt Payment Code. Signatories commit to treating suppliers fairly and are awarded Gold, Silver or Bronze status depending on how quickly they pay, for example within 30 or 60 days. Checking whether a large customer has signed up, and at what level, is a quick way to judge how it is likely to pay you.",
      },
      {
        q: "What could replace cash retentions if they are banned in construction?",
        a: "Main contractors are likely to look at alternatives such as retention bonds, parent company guarantees or other security that doesn't involve withholding cash from each payment. The final Act and any guidance will decide what is allowed. If you are a subcontractor, review the retention clauses in your current contracts and keep tracking release dates, because existing retentions remain payable under the terms you signed.",
      },
      {
        q: "Will the Bill set a deadline for customers to dispute invoices?",
        a: "That is proposed. Reporting on the Bill describes a new statutory time limit for raising invoice disputes, with compensation payable to the supplier if a customer raises a dispute late. The consultation suggested 30 days, but the final period depends on the Act's wording and any regulations. Until then, ask customers to raise queries promptly, keep proof of delivery, and state on your invoice how long they have to query it under your contract.",
      },
      {
        q: "Will claiming statutory interest damage my relationship with a big customer?",
        a: "It can, which is why many suppliers use the right selectively. Government research found that 15% of businesses have avoided particular customers because of how they pay, so you are not alone in weighing it up. Reserving your right to interest on every invoice sets expectations without confrontation, and you can waive it if the customer pays promptly after a reminder. Mandatory interest, as proposed, is meant to make claiming it routine rather than personal.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> New late payment legislation in the UK is on its way but not yet law. The Small Business Protections Bill, introduced in May 2026, would cap payment terms at 60 days when large firms pay smaller suppliers, make statutory interest of 8% over Bank of England base rate mandatory, ban cash retentions in construction and let the Small Business Commissioner fine late payers.</p>

<p>Until the Bill is passed and its provisions are switched on, the Late Payment of Commercial Debts (Interest) Act 1998 still governs late business payments. This guide separates what applies today from what is proposed, shows the numbers on a worked example, and explains how to word your invoices now. You can add late payment terms to any invoice in our <a href="/invoice-generator/uk">UK invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not legal advice. The Bill may be amended before it becomes law and commencement dates had not been set at the time of writing. Check the latest stage on <a href="https://bills.parliament.uk/" target="_blank" rel="noopener noreferrer">UK Parliament Bills</a> and guidance on <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">GOV.UK</a>, or speak to a solicitor.</p>

<h2>Why the UK is changing late payment legislation</h2>
<p>Government research published by the Department for Business and Trade in 2025 estimated that late payments cost the UK economy almost £11 billion a year and that around 14,000 businesses close each year as a result, equivalent to 38 a day. Our roundup of <a href="/blog/late-payment-statistics">late payment statistics</a> has the source details. After a consultation, the government published its response in March 2026 and announced legislation in the King's Speech, with the Bill introduced to Parliament on 19 May 2026.</p>

<h2>What the Small Business Protections Bill proposes</h2>
<table><thead><tr><th>Measure</th><th>What is proposed</th><th>Today's position</th></tr></thead><tbody>
<tr><td>Maximum payment terms</td><td>Large businesses paying smaller suppliers limited to 60-day terms, with reports that this could tighten to 45 days after a review period</td><td>Terms over 60 days allowed if expressly agreed and not grossly unfair</td></tr>
<tr><td>Statutory interest</td><td>8% above base rate becomes mandatory on late payments and cannot be contracted out of</td><td>8% above base rate, but a contract can substitute a "substantial remedy"</td></tr>
<tr><td>Construction retentions</td><td>Ban on cash retentions withheld from payments</td><td>Retentions common; protected by contract terms only</td></tr>
<tr><td>Small Business Commissioner</td><td>Powers to investigate, adjudicate disputes and fine persistent late payers</td><td>Can review complaints and publish reports, but no fining power</td></tr>
<tr><td>Board accountability</td><td>Large company boards to report on payment performance</td><td>Large companies report payment practices twice a year under existing regulations</td></tr>
</tbody></table>
<p>The measures above are based on the government's published proposals and reporting on the Bill. Detail, such as how "large" and "smaller" businesses are defined, will be in the final text.</p>

<h2>When will the new UK late payment law apply?</h2>
<p>A Bill must pass all stages in both Houses and receive Royal Assent, and many provisions then need regulations or a commencement order. At the time of writing no commencement date had been announced. Commentators expected implementation from 2027 at the earliest. Plan on the current rules applying for the rest of 2026, and treat any article that says the 60-day cap is "now law" with caution.</p>

<h2>What UK late payment law says today</h2>
<p>The Late Payment of Commercial Debts (Interest) Act 1998, as amended by the 2013 regulations that implemented the EU Late Payment Directive, gives businesses three rights when another business pays late:</p>
<ol>
<li><strong>Statutory interest</strong> at 8% above the Bank of England reference rate, as simple interest from the day after the due date.</li>
<li><strong>Fixed compensation</strong> per invoice: £40 for debts under £1,000, £70 for £1,000 to £9,999.99, and £100 for £10,000 or more.</li>
<li><strong>Reasonable recovery costs</strong> above the fixed sum, where you can show them.</li>
</ol>
<p>If no payment date is agreed, payment is due 30 days after the later of delivery or receipt of the invoice. Public authorities must pay within 30 days. The full method, including the reference rate dates, is in our guide to <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a>.</p>

<h2>Other UK payment rules that already apply</h2>
<p>The Bill builds on several measures that are already in force. If you supply larger organisations, these give you useful information and leverage today.</p>

<h3>Payment practices reporting</h3>
<p>Since 2017, large companies and LLPs have had to publish a report on their payment practices every six months on a government website, under the Reporting on Payment Practices and Performance Regulations 2017. Reports show average days to pay, the share of invoices paid within 30 days, 31 to 60 days and over 60 days, and standard payment terms. Amendments that took effect in 2025 added further metrics, including the share of payments delayed by disputes and, for qualifying construction contracts, information about retentions. Before you agree terms with a large customer, look up its reports: they tell you how it really pays.</p>

<h3>Public sector contracts</h3>
<p>Public authorities must generally pay undisputed invoices within 30 days. Under the Procurement Act 2023, which came into force in February 2025, 30-day payment terms are implied into public contracts and are meant to flow down to subcontracts in the supply chain. If you are a subcontractor on a public project and your main contractor pays slower, raise it with the contractor first and then with the contracting authority.</p>

<h3>The Small Business Commissioner today</h3>
<p>The <a href="https://www.smallbusinesscommissioner.gov.uk/" target="_blank" rel="noopener noreferrer">Office of the Small Business Commissioner</a> can already consider complaints from small businesses about payment issues with larger firms, publish its findings and promote fair payment practice. What it cannot do yet is impose fines or binding decisions; that is what the Bill would add. Even now, the threat of a published report can prompt a large customer to pay.</p>

<h2>Who the 60-day payment terms cap would affect</h2>
<ul>
<li><strong>Large buyers</strong> with standard 75, 90 or 120-day terms would need to shorten them for smaller suppliers.</li>
<li><strong>Small suppliers, sole traders and freelancers</strong> billing large companies would benefit most. If you invoice as a <a href="/blog/sole-trader-invoice-uk">sole trader in the UK</a>, the rights apply to you too.</li>
<li><strong>Construction subcontractors</strong> would gain from the cash retention ban, alongside existing rights under the Construction Act.</li>
<li><strong>Consumers are not covered.</strong> Late payment interest law applies to business-to-business debts only.</li>
</ul>
<p>For construction, the retention ban is the biggest change. Main contractors commonly hold back a percentage of each payment, often released only after practical completion and a defects period. On a £200,000 subcontract with a 5% retention, that is £10,000 of earned money held for months or years, and it can be lost entirely if the main contractor becomes insolvent. A ban on cash retentions would remove that exposure, although contracts may move to alternatives such as retention bonds. If you work in construction, our <a href="/blog/construction-invoice-guide">construction invoice guide</a> explains how retainage appears on progress invoices today.</p>

<h2>Worked example: a £12,000 invoice paid 20 days late</h2>
<p>You supply a large retailer and invoice £12,000.00 including VAT. For illustration, assume the reference base rate is 3.75%, making the statutory rate 11.75%. Always check the actual reference rate for your debt.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Annual interest</td><td>£12,000.00 x 11.75%</td><td>£1,410.00</td></tr>
<tr><td>Daily interest</td><td>£1,410.00 / 365</td><td>£3.86</td></tr>
<tr><td>Interest for 20 days late</td><td>£3.863 x 20</td><td>£77.26</td></tr>
<tr><td>Fixed compensation (£10,000+)</td><td>Statutory sum</td><td>£100.00</td></tr>
<tr><td>Total claimable</td><td>£77.26 + £100.00</td><td>£177.26</td></tr>
</tbody></table>
<p><strong>Today:</strong> if your contract says 90-day terms, the clock starts after day 90, and a contract could replace statutory interest with a lower but "substantial" remedy. <strong>Under the Bill as proposed:</strong> a large customer could not impose terms beyond 60 days on you, and the 8% statutory interest could not be contracted away.</p>

<h2>How to prepare your invoices and contracts now</h2>
<ol>
<li><strong>Agree terms in writing.</strong> Put the payment period in your contract and on every invoice. See <a href="/blog/invoice-payment-terms">invoice payment terms explained</a>.</li>
<li><strong>Show a real due date</strong>, not just "Net 30".</li>
<li><strong>Reserve your statutory rights</strong> with a line such as "We reserve the right to claim interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998."</li>
<li><strong>Check purchase orders.</strong> Large buyers often issue terms through their PO; read them before you accept.</li>
<li><strong>Keep evidence</strong> of delivery and invoice receipt dates, since they set when interest starts.</li>
<li><strong>Escalate in order:</strong> reminder, phone call, statement of interest, final notice. Our <a href="/blog/overdue-invoice">overdue invoice</a> playbook sets out a timeline.</li>
</ol>

<h2>Common mistakes UK suppliers make</h2>
<ul>
<li>Assuming the 60-day cap already applies to contracts signed today.</li>
<li>Charging statutory interest to consumers, which the Act does not allow.</li>
<li>Calculating interest from the invoice date instead of the day after the due date.</li>
<li>Using the base rate on the day of calculation instead of the six-monthly reference rate.</li>
<li>Adding VAT to interest or compensation; neither is subject to VAT.</li>
<li>Forgetting the compensation is per invoice, not per customer.</li>
</ul>

<h2>Checklist for UK suppliers in 2026</h2>
<ul>
<li>Contract states payment terms and late payment rights.</li>
<li>Invoices show the issue date, due date and statutory interest reservation.</li>
<li>You know your customer's size and whether the future cap may apply.</li>
<li>Construction firms have reviewed retention clauses.</li>
<li>You are tracking the Bill on the Parliament website.</li>
<li>You know how to contact the Small Business Commissioner if a large customer pays late.</li>
</ul>

<h2>Next step: put your late payment terms on every invoice</h2>
<p>Open the <a href="/invoice-generator/uk">UK invoice generator</a>, set a clear due date and add your late payment wording in the notes. If a customer is already late, work out what you can claim with our step-by-step guide to <a href="/blog/statutory-late-payment-interest">calculating statutory interest</a>, then follow up with our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</p>
`,
  },
  {
    slug: "late-payment-statistics",
    title: "Late Payment Statistics 2026: Key Facts for Small Business",
    description:
      "Late payment statistics for 2026 from QuickBooks, the UK government, Atradius and the European Commission: overdue invoices, amounts owed and closures, sourced.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["overdue-invoice", "uk-late-payment-law-2026", "days-sales-outstanding"],
    faqs: [
      {
        q: "What percentage of invoices are paid late?",
        a: "It depends on the country, industry and how the survey measures it. Atradius's 2026 US report says late payments affect an average of 22% of B2B receivables, while QuickBooks found that 59% of US small businesses had at least one invoice overdue by 30 days or more. One figure measures value, the other measures businesses affected.",
      },
      {
        q: "How long do businesses usually wait to be paid?",
        a: "Agreed terms of 30 days are the most common in US business-to-business trade, according to Atradius, which also says most overdue invoices are settled within about a month of the due date. In practice that means many suppliers collect cash around two months after invoicing. Your own figure is best measured with days sales outstanding.",
      },
      {
        q: "Why do clients pay invoices late?",
        a: "Surveys commonly point to the customer's own cash shortages, slow internal approval processes, disputes over the invoice and plain administrative errors such as a missing PO number. Atradius says liquidity issues are the main reason US customers delay payment. Many of the causes on the supplier side, such as unclear terms, are fixable.",
      },
      {
        q: "Are late payment statistics getting better or worse?",
        a: "Recent US data suggests worse. QuickBooks reported that the share of small businesses with invoices overdue by 30 days or more rose from 47% to 59% between its 2025 and 2026 reports. In the UK, the government's decision to legislate reflects its view that late payment remains a serious, persistent problem.",
      },
      {
        q: "Can I use these statistics in my own content or pitch?",
        a: "Yes, as long as you cite the original publisher and the year, and describe what the figure measures. Link to the source report rather than to this summary, and avoid mixing figures from different countries or methods as if they were comparable.",
      },
      {
        q: "What is a good DSO for a small business?",
        a: "A good days sales outstanding figure is one close to your own payment terms. If you offer 30-day terms, a DSO in the low 30s means most customers pay roughly on time, while a figure well above that points to late payment. Comparing yourself with national averages is less useful than tracking your own DSO monthly and watching the trend, because industries with longer standard terms naturally run higher.",
      },
      {
        q: "Is it true that 82% of businesses fail because of cash flow problems?",
        a: "Treat that figure with caution. It's widely quoted and usually credited to a U.S. Bank study, but we couldn't trace the original research, its method or exactly what it measured, and it's often reworded, for example as 82% of failed businesses citing cash flow. That's why it isn't in our roundup. If you use it, present it as an attributed claim and prefer sourced data, such as government research on late payment.",
      },
      {
        q: "How often are late payment statistics updated?",
        a: "The main sources publish on different cycles. The QuickBooks and Atradius reports covered here come out yearly, large UK companies publish payment practices reports every six months, and government research such as the Department for Business and Trade's cost estimate is updated irregularly. Check the publication date before quoting any figure, and look for a newer edition of the same report rather than mixing years.",
      },
      {
        q: "How can I see how a specific UK company pays its suppliers?",
        a: "Search the government's payment practices reporting service. Large UK companies and LLPs must publish a report every six months showing their average time to pay, the share of invoices paid within 30 days, 31 to 60 days and over 60 days, and their standard terms. It's free to search by company name. Check it before agreeing terms with a big customer, so you know how it really pays rather than how it says it pays.",
      },
      {
        q: "What is the difference between a late payment and a bad debt?",
        a: "A late payment is an invoice paid after its due date; a bad debt is an invoice you no longer expect to collect, so you write it off. Atradius reports that US companies often lose 1% to 2% of B2B invoices to bad debt. The older an overdue invoice gets, the more likely it is to become a bad debt, which is why chasing early matters more than chasing hard later.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The latest late payment statistics show the problem is growing. QuickBooks' 2026 report found 59% of US small businesses had invoices overdue by 30+ days, up from 47%, with $17.7K owed on average. UK government research estimates late payments cost the economy almost £11 billion a year and close around 14,000 businesses annually.</p>

<p>Below is a sourced roundup of unpaid invoices statistics and overdue invoices data from named publishers, with what each figure actually measures. We have only included numbers we could trace to the original report, and we link those reports so you can check the method. If you want to stop being one of these statistics, start by sending clear, correct invoices from our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Late payment statistics at a glance</h2>
<table><thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead><tbody>
<tr><td>US small businesses with invoices overdue 30+ days</td><td>59% (up from 47%)</td><td>Intuit QuickBooks, 2026</td></tr>
<tr><td>Average amount owed to US businesses with unpaid invoices</td><td>$17.7K</td><td>Intuit QuickBooks, 2026</td></tr>
<tr><td>Annual cost of late payments to the UK economy</td><td>Almost £11bn</td><td>Department for Business and Trade, 2025</td></tr>
<tr><td>UK businesses closing each year because of late payment</td><td>14,000 (38 a day)</td><td>Department for Business and Trade, 2025</td></tr>
<tr><td>Share of US B2B receivables affected by late payment</td><td>22% on average</td><td>Atradius, 2026</td></tr>
<tr><td>EU bankruptcies linked to invoices not paid on time</td><td>1 in 4</td><td>European Commission, 2023</td></tr>
</tbody></table>

<h2>US unpaid invoices statistics (QuickBooks 2026)</h2>
<p>The <a href="https://quickbooks.intuit.com/r/small-business-data/small-business-late-payments-report-2026/" target="_blank" rel="noopener noreferrer">Intuit QuickBooks Small Business Late Payments Report 2026</a> draws on QuickBooks' quarterly Small Business Insights survey and an online survey of 1,305 US business owners fielded in December 2025. Key findings:</p>
<ul>
<li><strong>59%</strong> of businesses have invoices overdue by 30 days or more, up from 47% the year before.</li>
<li>Businesses with unpaid invoices are owed <strong>$17.7K</strong> on average, roughly in line with $17.5K in the previous report.</li>
<li>For <strong>22%</strong> of businesses, at least 20% of invoices are unpaid past 30 days.</li>
<li><strong>55%</strong> of businesses on net-30 terms have overdue invoices, compared with <strong>26%</strong> of businesses that require immediate payment.</li>
<li><strong>39%</strong> of owners say one late payment made it hard to cover payroll or bills in the past year; <strong>27%</strong> say a missed payment under $5,000 did so, and <strong>12%</strong> say one under $1,000 was enough.</li>
<li><strong>49%</strong> say standard payment processing times create critical or moderate cash-flow gaps, and <strong>59%</strong> paid extra fees in the past year to access money they had already earned.</li>
<li><strong>42%</strong> say outside pressures delayed payments they owed to their own contractors, suppliers or vendors.</li>
<li><strong>74%</strong> are not fully automated in managing and paying bills.</li>
</ul>
<p>The payment-terms finding is the most actionable. In the QuickBooks data, 55% of businesses on net-30 terms had overdue invoices against 26% of those requiring immediate payment, so net-30 businesses were roughly twice as likely (55 / 26 = 2.1) to be carrying overdue invoices. The report also found that 64% of businesses with no overdue invoices require immediate payment. This is an association from survey data, not proof that changing terms alone fixes late payment, because businesses that can demand immediate payment may also have different customers. Still, it supports a practical rule: ask for payment as early as your market accepts. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains how to choose them.</p>

<h3>Late payments hit small invoices too</h3>
<p>It is easy to assume only big unpaid invoices matter. The QuickBooks finding that 12% of owners said a single late payment under $1,000 strained payroll or bills shows how thin many small businesses' cash buffers are. If you run with little cash in the bank, even one client paying two weeks late can force you to borrow or delay your own bills, which is the knock-on effect captured by the 42% who delayed payments to their own suppliers.</p>

<h2>UK late payment statistics (Department for Business and Trade)</h2>
<p>Research for the Department for Business and Trade, published in 2025 as <em>Estimating the total economic cost of late payments and their impact on the UK economy</em>, is summarised in the government's <a href="https://assets.publishing.service.gov.uk/media/68652e8f6569be0acf74db3e/late-payments-infographic.pdf" target="_blank" rel="noopener noreferrer">late payments infographic</a>:</p>
<ul>
<li>Late payments cost the UK economy an estimated <strong>almost £11 billion</strong> a year.</li>
<li><strong>Over 1.5 million</strong> businesses, or <strong>28%</strong>, are affected by late payments each year.</li>
<li>Businesses are owed an estimated <strong>£26 billion</strong> in late payments at any given time, an average of <strong>£17,000</strong> per affected business.</li>
<li><strong>14,000</strong> businesses close each year as a result, equivalent to <strong>38 every day</strong>.</li>
<li><strong>22%</strong> of surveyed businesses spent staff time chasing late payments, an average of <strong>86 hours</strong> per affected business per year, or <strong>133 million hours</strong> across the economy.</li>
<li><strong>15%</strong> have avoided doing business with specific customers because of how they pay.</li>
</ul>
<p>These figures underpin the government's Small Business Protections Bill; see <a href="/blog/uk-late-payment-law-2026">UK late payment law 2026</a> for what it would change.</p>

<h2>B2B overdue invoices data (Atradius 2026)</h2>
<p>Credit insurer Atradius surveys businesses each year for its Payment Practices Barometer. Its <a href="https://atradius.us/knowledge-and-research/reports/b2b-payment-practices-trends-in-the-us-2026" target="_blank" rel="noopener noreferrer">2026 US report</a> says:</p>
<ul>
<li>US businesses make on average <strong>45%</strong> of their B2B sales on credit.</li>
<li>Late payments affect an average of <strong>22%</strong> of B2B receivables.</li>
<li>About <strong>seven in ten</strong> US and North American companies still face late payments.</li>
<li><strong>55%</strong> of US suppliers report that business customers delay invoice payments, mostly because of liquidity issues.</li>
<li>US companies often lose <strong>1% to 2%</strong> of B2B invoices to bad debt.</li>
<li>About <strong>three in five</strong> US suppliers give customers 30 days to pay, and roughly 30% give one to two months.</li>
<li>Around <strong>one in five</strong> use credit insurance.</li>
</ul>

<h2>Average days to pay an invoice</h2>
<p>There is no single official "average days to pay" figure, because it depends on terms, industry and customer size. Atradius reports that most US customers settle overdue invoices within about one month past the due date, so suppliers typically collect cash within about two months of invoicing. With 30-day terms being the most common, that suggests many invoices are paid around a month late.</p>
<p>The best number for you is your own. Calculate your <a href="/blog/days-sales-outstanding">days sales outstanding (DSO)</a> each month and compare it with your stated terms. If your terms are 30 days and your DSO is 52, customers are paying about 22 days late on average.</p>
<h3>Worked example: your own average days to pay</h3>
<p>Suppose at the end of a 90-day quarter your accounts receivable balance is $26,000 and your credit sales for the quarter were $45,000.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Receivables as a share of sales</td><td>$26,000 / $45,000</td><td>0.578</td></tr>
<tr><td>DSO</td><td>0.578 x 90 days</td><td>52 days</td></tr>
<tr><td>Stated terms</td><td>Net 30</td><td>30 days</td></tr>
<tr><td>Average days late</td><td>52 - 30</td><td>22 days</td></tr>
</tbody></table>
<p>Tracking this one figure every month tells you more about your business than any national statistic. If it rises, look at which customers are driving it in an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>.</p>

<h2>Late payment statistics in Europe</h2>
<p>When it proposed a new Late Payment Regulation in September 2023, the European Commission stated that one in four bankruptcies in the EU is due to invoices not being paid on time. The proposal included a 30-day maximum payment term for commercial transactions. It had not been adopted at the time of our last check, so the 2011 Late Payment Directive still sets the EU baseline. For how statutory interest works under that Directive, see <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a>.</p>

<h2>What these numbers cost a small business: worked example</h2>
<p>Take the QuickBooks average of $17,700 owed. Suppose you cover that gap with a credit card or credit line at an illustrative 24% APR for 30 days while you wait.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Annual interest on the gap</td><td>$17,700 x 24%</td><td>$4,248.00</td></tr>
<tr><td>Daily interest</td><td>$4,248.00 / 365</td><td>$11.64</td></tr>
<tr><td>Cost of 30 days' wait</td><td>$11.638 x 30</td><td>$349.15</td></tr>
</tbody></table>
<p>If that happens every month, the cost is over $4,000 a year, before counting the staff time spent chasing. The UK research puts that time at 86 hours a year for each affected business. Our guide to <a href="/blog/cash-flow-management">cash flow management</a> covers buffers and forecasting.</p>

<h2>How to read late payment statistics without being misled</h2>
<ul>
<li><strong>Check the unit.</strong> "22% of receivables" measures value; "59% of businesses" measures how many firms are affected. They are not comparable.</li>
<li><strong>Check the country and business size.</strong> US small business surveys and UK economy-wide estimates measure different things.</li>
<li><strong>Check the year and method.</strong> Survey samples, dates and definitions of "late" vary.</li>
<li><strong>Prefer the original report</strong> to a quote of a quote. Many widely shared figures have no traceable source.</li>
<li><strong>Treat estimates as estimates.</strong> Closure figures are modelled, not counted.</li>
</ul>

<h2>What you can do about late payments</h2>
<ol>
<li><strong>Shorten or front-load terms.</strong> The QuickBooks data links immediate payment terms with fewer overdue invoices. Taking a deposit upfront on larger jobs is a simple start.</li>
<li><strong>Send accurate invoices fast</strong>, with PO numbers and a real due date. Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> shows what causes delays.</li>
<li><strong>Make paying easy</strong> with bank details and a payment link on every invoice.</li>
<li><strong>Follow up on a schedule</strong> using our <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
<li><strong>Use your legal rights</strong> to interest and compensation where they apply.</li>
<li><strong>Track ageing</strong> weekly and chase the oldest balances first.</li>
</ol>

<h2>Checklist: reduce your exposure to late payment</h2>
<ul>
<li>Terms agreed in writing before work starts.</li>
<li>Deposits or milestones on larger jobs.</li>
<li>Invoices sent the day work is delivered.</li>
<li>Due date, PO number and payment methods on every invoice.</li>
<li>Reminder schedule set for 3 days before, on, and 7 days after the due date.</li>
<li>DSO calculated monthly.</li>
<li>Late payment interest and compensation terms stated on invoices where the law allows.</li>
</ul>

<h2>Next step: send invoices that get paid on time</h2>
<p>Statistics are only useful if they change what you do. Open the <a href="/invoice-generator">invoice generator</a>, set a clear due date and payment instructions, and if a client is already late, follow our step-by-step <a href="/blog/overdue-invoice">overdue invoice</a> guide.</p>
`,
  },
  {
    slug: "credit-card-surcharge-rules",
    title: "Credit Card Surcharge Rules 2026: US, UK, EU, Australia",
    description:
      "Credit card surcharge rules for 2026: US state laws and Visa/Mastercard caps, UK and EU consumer bans, Australia's new ban, and surcharge vs convenience fee.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["how-to-accept-credit-card-payments", "add-payment-link-to-invoice", "early-payment-discount"],
    faqs: [
      {
        q: "Can I add a credit card fee to an invoice I have already sent?",
        a: "You should not add a surcharge the customer did not agree to. Surcharges should be disclosed before the customer chooses to pay by card, and card network rules require disclosure at the point of entry and point of sale. State your surcharge policy in your terms and on the invoice before payment, and keep the surcharge as a separate line on the receipt.",
      },
      {
        q: "Can I surcharge a debit card if the customer runs it as credit?",
        a: "No, under Visa and Mastercard rules in the US. Debit and prepaid cards cannot be surcharged even when processed as credit. Your payment provider should be able to detect the card type and apply the surcharge only to eligible credit cards. If it cannot, you risk breaking the rules on every debit transaction.",
      },
      {
        q: "Can I surcharge business customers in the UK?",
        a: "The UK ban applies to consumer payments. For payments by business or corporate cards, surcharges are generally allowed but must not exceed the cost to you of accepting that payment method. Check your acquirer agreement and keep evidence of your costs if you surcharge commercial cards.",
      },
      {
        q: "Is a cash discount the same as a surcharge?",
        a: "Not legally. A cash discount program lists the card price and gives a discount for paying by cash or bank transfer, while a surcharge adds a fee on top of the listed price for card payment. Some states that ban surcharges allow cash discounts, but the presentation must be genuine and clearly disclosed.",
      },
      {
        q: "What happens if I surcharge illegally?",
        a: "Consequences vary. In the US, state attorneys general can bring enforcement actions and card networks can fine merchants through their acquirer. In the UK, Trading Standards can enforce and consumers can reclaim unlawful surcharges. In Australia, card networks can enforce their no-surcharge rules from October 2026. Refunding customers is usually the first remedy.",
      },
      {
        q: "Can I charge a fee for paying by PayPal or bank transfer?",
        a: "In the UK, the consumer surcharge ban also covers many other payment methods, including some digital wallets. In the EU, rules vary by member state. In the US, fees on non-card methods are mainly governed by state consumer law and your contract. Check the rules for each method and disclose any fee before the customer pays.",
      },
      {
        q: "Do I charge sales tax on a credit card surcharge?",
        a: "In many US states, yes, if the underlying sale is taxable. States often treat a surcharge as part of the sale price, so sales tax is calculated on the total including the surcharge, and if the sale is exempt the surcharge usually is too. Rules differ by state, so check your state revenue department's guidance and make sure your payment system calculates tax on the right amount.",
      },
      {
        q: "Can I surcharge American Express cards?",
        a: "Generally yes in the US, but under American Express's own merchant rules rather than Visa's or Mastercard's. Amex expects the surcharge to be clearly disclosed and not to exceed what you charge on other credit cards. State law still applies, and Amex said it would remove surcharging in Australia from 1 October 2026. Check the current Amex merchant regulations and your processor's settings before you start.",
      },
      {
        q: "Can businesses surcharge credit cards in Canada?",
        a: "Yes, in most provinces. Since October 2022, Visa and Mastercard rules have allowed Canadian merchants to surcharge credit cards up to 2.4% or their cost of acceptance, whichever is lower, after giving their processor notice and with clear disclosure. Quebec prohibits surcharges under its consumer protection law, and debit and prepaid cards can't be surcharged. Check current network rules and provincial law before adding a fee.",
      },
      {
        q: "Can I set a minimum amount for credit card payments instead?",
        a: "In the US, yes. Federal law lets merchants require a minimum purchase of up to $10 for credit cards, as long as it applies equally to all card networks and issuers. You can't set a minimum for debit cards. A minimum can be simpler than a surcharge for small counter sales, though it rarely matters on invoices, which are usually larger. Rules outside the US differ, so check local law.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A credit card surcharge is an extra fee for paying by credit card. In the US it is allowed in most states, capped by Visa at 3% and Mastercard at 4% (or your cost if lower), never on debit cards, and banned in a few states. The UK and EU ban surcharges on consumer cards, and Australia banned most card surcharges from 1 October 2026.</p>

<p>Card fees add up, so passing them on is tempting. This guide explains surcharge laws by state and country, the card network caps, how a convenience fee differs from a surcharge, and a worked example of the maximum you could charge. It also shows how to disclose a surcharge on invoices you create with our <a href="/invoice-generator">free invoice generator</a>. For the basics of taking cards in the first place, see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<p><strong>Important:</strong> This is general information, not legal advice. Surcharge rules change often and differ by state, country, card type and customer type. Check with your payment processor, your local regulator or a lawyer before adding any card fee.</p>

<h2>What is a credit card surcharge?</h2>
<p>A surcharge is a fee added to a transaction because the customer chooses to pay with a credit card. It is meant to recover some or all of your cost of card acceptance (the merchant discount rate). Related terms people mix up:</p>
<ul>
<li><strong>Surcharge:</strong> a percentage added for credit card payments.</li>
<li><strong>Convenience fee:</strong> a flat fee for paying through an alternative channel, such as online or by phone, that is not your usual way of taking payment.</li>
<li><strong>Service fee:</strong> a fee used by some government and education payees under specific network programmes.</li>
<li><strong>Cash discount:</strong> a lower price for paying by cash or bank transfer, rather than a higher price for cards.</li>
</ul>

<h2>Credit card surcharge rules in the US</h2>
<p>In the US, surcharging is governed by two layers: card network rules and state law. You have to satisfy both.</p>

<h3>Card network rules (Visa, Mastercard and others)</h3>
<ul>
<li><strong>Cap:</strong> Visa limits surcharges to the lower of your cost of acceptance or 3% (since 15 April 2023). Mastercard limits them to your cost of acceptance, up to 4%. Discover and American Express have their own rules.</li>
<li><strong>Credit cards only:</strong> debit and prepaid cards cannot be surcharged, even if run as credit. Federal rules also limit debit fees.</li>
<li><strong>Notice:</strong> you must notify your acquirer or processor, typically at least 30 days before you start.</li>
<li><strong>Disclosure:</strong> customers must be told at the point of entry (store door or website) and the point of sale, and the surcharge must appear as a separate line on the receipt.</li>
<li><strong>Same treatment:</strong> generally you must surcharge all credit cards of a brand equally rather than singling out specific issuers.</li>
</ul>
<p>See <a href="https://usa.visa.com/support/small-business/regulations-fees.html" target="_blank" rel="noopener noreferrer">Visa's merchant rules and fees page</a> and your processor's documentation for the current wording.</p>

<h3>Surcharge laws by state</h3>
<table><thead><tr><th>State or territory</th><th>Position (check current law)</th></tr></thead><tbody>
<tr><td>Connecticut</td><td>Surcharges on credit cards prohibited</td></tr>
<tr><td>Massachusetts</td><td>Surcharges on credit cards prohibited</td></tr>
<tr><td>Maine</td><td>Commonly listed as prohibiting card surcharges; cash discounts allowed</td></tr>
<tr><td>Oklahoma</td><td>Commonly listed as restricting or prohibiting surcharges</td></tr>
<tr><td>Puerto Rico</td><td>Surcharges prohibited</td></tr>
<tr><td>Colorado</td><td>Allowed, capped at 2% or your actual processing cost, whichever is lower</td></tr>
<tr><td>New York</td><td>Allowed, but sellers must show the total card price; surcharge cannot exceed the cost of acceptance</td></tr>
<tr><td>California</td><td>Allowed with clear disclosure; check current price-display rules</td></tr>
<tr><td>Most other states</td><td>Allowed within network caps and disclosure rules</td></tr>
</tbody></table>
<p>State rules have been challenged in court and amended several times, and summaries published by payment vendors disagree on some states. Treat this table as a starting point and confirm with your state attorney general's office or a lawyer.</p>

<h2>Credit card surcharge rules in the UK</h2>
<p>Since 13 January 2018, UK businesses cannot charge consumers a surcharge for paying by credit card, debit card and many other payment methods, such as some digital wallets, under the Consumer Rights (Payment Surcharges) Regulations 2012 as amended. The government announced this in its <a href="https://www.gov.uk/government/news/card-surcharge-ban-means-no-more-nasty-surprises-for-shoppers" target="_blank" rel="noopener noreferrer">card surcharge ban</a> notice.</p>
<ul>
<li><strong>Consumers:</strong> no surcharge for paying by card.</li>
<li><strong>Business customers paying with commercial or corporate cards:</strong> a surcharge is generally allowed but must not exceed your cost of accepting that payment method.</li>
<li><strong>Enforcement:</strong> Trading Standards, and consumers can reclaim unlawful surcharges.</li>
</ul>
<p>If you invoice consumers in the UK, build card costs into your prices instead. The <a href="/invoice-generator/uk">UK invoice generator</a> lets you list card and bank options without a fee line.</p>

<h2>Credit card surcharge rules in the EU</h2>
<p>The revised Payment Services Directive (PSD2) bans surcharges on payment cards covered by the Interchange Fee Regulation, which includes most consumer debit and credit cards issued in the EEA. Member states can go further and ban or limit surcharges on other methods. Commercial cards and cards from schemes outside the interchange caps may be surchargeable depending on national law, but any surcharge must not exceed the cost to the merchant. Check the rules of the member state where you sell.</p>

<h2>Card surcharge rules in Australia (from 1 October 2026)</h2>
<p>The Reserve Bank of Australia concluded its review of merchant card payment costs in March 2026. From 1 October 2026, surcharges on eftpos, Mastercard and Visa debit, prepaid and credit card payments are removed, enforced through the card networks' no-surcharge rules, and American Express said it would also remove surcharging from that date. The change targets surcharges for paying by card; it does not cover weekend, public holiday or general service fees. Before October 2026, surcharges were allowed up to the merchant's cost of acceptance. See the <a href="https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/" target="_blank" rel="noopener noreferrer">RBA's surcharging FAQs</a> for details.</p>

<h2>Card surcharge cap comparison</h2>
<table><thead><tr><th>Jurisdiction</th><th>Consumer credit cards</th><th>Debit cards</th><th>Cap</th></tr></thead><tbody>
<tr><td>United States (most states)</td><td>Allowed</td><td>Not allowed</td><td>Visa 3%, Mastercard 4%, or cost if lower; Colorado 2%</td></tr>
<tr><td>US states with bans</td><td>Not allowed</td><td>Not allowed</td><td>Not applicable; cash discounts may be allowed</td></tr>
<tr><td>United Kingdom</td><td>Not allowed</td><td>Not allowed</td><td>Business cards: cost of acceptance</td></tr>
<tr><td>European Union</td><td>Not allowed for regulated cards</td><td>Not allowed</td><td>Other cards: cost, subject to national law</td></tr>
<tr><td>Australia (from 1 Oct 2026)</td><td>Not allowed (eftpos, Visa, Mastercard; Amex voluntarily)</td><td>Not allowed</td><td>Not applicable</td></tr>
</tbody></table>

<h2>Worked example: the maximum surcharge on a $1,000 invoice</h2>
<p>A US contractor invoices a customer $1,000.00. The processor's effective cost of acceptance on credit cards is 2.6%.</p>
<table><thead><tr><th>Scenario</th><th>Calculation</th><th>Maximum surcharge</th></tr></thead><tbody>
<tr><td>Visa credit card, most states</td><td>Lower of 2.6% cost or 3% cap: $1,000.00 x 2.6%</td><td>$26.00</td></tr>
<tr><td>Mastercard credit card, most states</td><td>Lower of 2.6% cost or 4% cap: $1,000.00 x 2.6%</td><td>$26.00</td></tr>
<tr><td>Visa credit card in Colorado</td><td>Lower of 2.6% cost or 2% state cap: $1,000.00 x 2%</td><td>$20.00</td></tr>
<tr><td>Any debit card</td><td>Not permitted</td><td>$0.00</td></tr>
<tr><td>Customer in Connecticut or Massachusetts</td><td>Prohibited</td><td>$0.00</td></tr>
</tbody></table>
<p>A customer paying the Visa credit card in most states would see "Invoice total $1,000.00, credit card surcharge (2.6%) $26.00, total charged $1,026.00" on the receipt.</p>

<h2>Convenience fee vs surcharge: what is the difference?</h2>
<table><thead><tr><th></th><th>Surcharge</th><th>Convenience fee</th></tr></thead><tbody>
<tr><td>Triggered by</td><td>Paying with a credit card</td><td>Paying through a non-standard channel</td></tr>
<tr><td>Amount</td><td>Usually a percentage</td><td>Usually a flat amount</td></tr>
<tr><td>Applies to debit cards?</td><td>No</td><td>Can, under network rules, if conditions are met</td></tr>
<tr><td>Main condition</td><td>Credit cards only, capped, disclosed</td><td>Must be for a genuine alternative channel, same fee regardless of card type</td></tr>
</tbody></table>
<p>Do not relabel a percentage card fee as a "convenience fee" to get around surcharge rules. Networks and regulators look at substance, not labels.</p>

<h2>How to show a surcharge on an invoice</h2>
<ol>
<li>State your surcharge policy in your contract or quote before work begins.</li>
<li>On the invoice, list accepted payment methods and a line such as "A 2.6% surcharge applies to credit card payments. No surcharge for debit cards or bank transfer."</li>
<li>Keep the invoice total itself without the surcharge, because the customer may pay by bank transfer.</li>
<li>Make sure your payment link or processor applies the surcharge only to eligible credit cards and shows it before payment.</li>
<li>Show the surcharge as a separate line on the receipt.</li>
</ol>
<p>If you use a pay-now button, read <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>. Note that card surcharges may affect how sales tax applies to the fee in some states; our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> covers the basics.</p>

<h2>Alternatives to surcharging</h2>
<ul>
<li>Build card costs into your prices.</li>
<li>Offer a cheaper route, such as bank transfer, and show your <a href="/blog/bank-details-on-invoice">bank details on the invoice</a>.</li>
<li>Reward fast or cheap payment with an <a href="/blog/early-payment-discount">early payment discount</a>.</li>
<li>Negotiate your processing rate, or compare providers like <a href="/blog/square-invoice-fees">Square</a> and Stripe.</li>
</ul>

<h2>Credit card surcharge checklist and common mistakes</h2>
<h3>Common surcharge mistakes</h3>
<ul>
<li>Surcharging debit cards.</li>
<li>Charging more than your actual cost of acceptance.</li>
<li>Skipping the 30-day notice to your processor.</li>
<li>Applying US rules to UK, EU or Australian customers.</li>
<li>Hiding the fee until the final payment screen.</li>
<li>Continuing old surcharges in Australia after 1 October 2026.</li>
</ul>

<h3>Checklist before you add a card surcharge</h3>
<ul>
<li>Customer's location and type (consumer or business) checked.</li>
<li>State or national law confirmed.</li>
<li>Processor notified and surcharge configured for credit cards only.</li>
<li>Rate at or below your cost of acceptance and the network cap.</li>
<li>Disclosure at point of entry, point of sale, on the invoice and on the receipt.</li>
<li>Fee-free alternative offered.</li>
</ul>

<h2>Next step: disclose your card fees clearly</h2>
<p>Create your invoice in the <a href="/invoice-generator">invoice generator</a>, list your accepted payment methods and any lawful surcharge wording in the notes, and download the PDF. If you are reconsidering card payments entirely, compare costs in our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a>.</p>
`,
  },
  {
    slug: "raast-business-payments-pakistan",
    title: "Raast for Business: Instant Payments in Pakistan",
    description:
      "Raast for business explained: how Raast ID, Raast P2M and QR payments work in Pakistan, limits and fees to check, and how to put Raast details on your invoices.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "payment-gateway-pakistan",
      "receive-payment-from-abroad-pakistan",
      "sales-tax-invoice-pakistan",
      "fbr-e-invoicing-pakistan",
    ],
    faqs: [
      {
        q: "Is Raast free for businesses?",
        a: "The State Bank of Pakistan has kept Raast person-to-person transfers free for customers. Merchant pricing for Raast P2M depends on your bank or payment provider and any incentive scheme in force, so ask for the current merchant fee schedule in writing before you start promoting Raast QR payments to customers.",
      },
      {
        q: "Can I receive payment from abroad through Raast?",
        a: "Raast is a domestic system for payments in Pakistani rupees between accounts in Pakistan. A foreign client cannot pay you directly through Raast from an overseas bank. For international clients you need a bank remittance, a home remittance channel or a cross-border provider, as covered in our guide to receiving payments from abroad in Pakistan.",
      },
      {
        q: "Can I link my Raast ID to a business current account?",
        a: "You can link a Raast ID, which is your mobile number, to an eligible account at a participating bank or wallet provider. For a business, many banks offer merchant Raast services on business accounts with a merchant alias or QR code instead of a personal mobile alias. Ask your bank which option suits a sole proprietor, partnership or company account.",
      },
      {
        q: "How do I prove a Raast payment was received?",
        a: "Every Raast transfer generates a transaction ID or reference that appears in both the payer's and receiver's banking apps and on account statements. Ask clients to share the confirmation screen with the invoice number, check the credit in your own account before releasing goods, and record the transaction ID against the invoice.",
      },
      {
        q: "Can a Raast payment be reversed?",
        a: "Raast transfers settle instantly and are generally final. If a customer sends money to the wrong account, they must raise a complaint with their own bank, which can contact the receiving bank, but recovery is not guaranteed. This is why you should confirm your Raast ID or IBAN on every invoice and warn clients about fake account-change messages.",
      },
      {
        q: "Can customers pay my Raast ID or QR from a mobile wallet?",
        a: "In most cases, yes. Electronic money institutions and branchless banking wallets participate in Raast alongside banks, so a customer using a wallet app such as Easypaisa can send to a Raast ID or scan a Raast P2M QR, depending on what their provider has enabled. Wallet account limits are often lower than bank account limits, so for larger invoices check that the customer's limit covers the amount.",
      },
      {
        q: "How do I get a Raast QR code for my business?",
        a: "Ask your bank or payment provider to onboard you for Raast P2M. You will usually need an eligible business or merchant account and the standard know-your-customer documents, such as your CNIC and business registration details. The bank then issues a static QR, a merchant alias or both, and some offer dynamic QR or request to pay through a merchant app or portal. Ask about fees and settlement before printing the QR on invoices.",
      },
      {
        q: "What if a customer's banking app doesn't show a Raast option?",
        a: "Most banks, microfinance banks and many wallets are connected to Raast, but the option may be named differently in the app, such as \"send via Raast ID\" or \"IBAN transfer.\" If the customer can't find it, they can usually pay to your IBAN, which may route through Raast or IBFT depending on their bank. Keep your IBAN on every invoice as a fallback so the payment method never holds up payment.",
      },
      {
        q: "What should I do if a customer says they paid by Raast but nothing arrived?",
        a: "Ask for the transaction ID and time of payment, then check your account statement rather than an app notification or screenshot. Raast payments normally arrive in seconds, so a missing credit usually means the payment failed, went to a different account or is still pending at the sender's bank. The customer should raise it with their own bank using the transaction ID. Don't release goods or mark the invoice paid until the credit appears.",
      },
      {
        q: "Is a Raast payment record enough for my tax records?",
        a: "It's a good start, because Raast payments run through the regulated banking system and appear on your bank statement with a transaction ID. You still need the invoice itself, and if you're registered for sales tax, it must carry the required fields such as NTN and STRN. Match each transaction ID to its invoice and keep both. Check FBR or your provincial revenue authority's rules on how long to keep records.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Raast is the State Bank of Pakistan's instant payment system. It moves rupees between bank and wallet accounts in seconds, 24/7, using an IBAN, a Raast ID (your mobile number) or a merchant QR code. For business, Raast P2M lets customers pay you by scanning a QR or approving a request to pay, and money lands immediately.</p>

<p>This guide explains how a Raast payment works for a business, the difference between Raast P2P and Raast P2M, what to check about limits and fees, and how to show your Raast details on a sales invoice. You can add them to any invoice in our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>. The generator creates invoice PDFs only; payment always happens through your bank or wallet.</p>

<h2>What is Raast?</h2>
<p>Raast (which means "direct" in Urdu) is Pakistan's national instant payment system, built and operated by the <a href="https://www.sbp.org.pk/" target="_blank" rel="noopener noreferrer">State Bank of Pakistan</a>. It connects banks, microfinance banks and electronic money institutions so that a transfer from one to another settles in real time, at any hour, including weekends and holidays. It was rolled out in phases:</p>
<table><thead><tr><th>Phase</th><th>What it added</th><th>When</th></tr></thead><tbody>
<tr><td>Bulk payments</td><td>Bulk credits such as salaries and government payments</td><td>From January 2021</td></tr>
<tr><td>Person-to-person (P2P)</td><td>Instant transfers between individuals using IBAN or Raast ID</td><td>From early 2022</td></tr>
<tr><td>Person-to-merchant (P2M)</td><td>QR codes, request to pay, merchant alias and IBAN payments to businesses</td><td>Formally launched December 2023; banks required to enable P2M from March 2024</td></tr>
</tbody></table>
<p>Dates are based on SBP announcements and press reports; check the SBP website for the latest Raast circulars.</p>

<h2>What is a Raast ID?</h2>
<p>A Raast ID is an alias that points to your bank account so people can pay you without typing a 24-character IBAN. For individuals, the Raast ID is your mobile number, linked through your bank's app to one account. When someone pays your Raast ID, the system looks up the linked account and shows your name before they confirm, which helps catch mistakes.</p>
<p>For a business, you have three ways to be paid through Raast:</p>
<ul>
<li><strong>IBAN</strong> of your business account. Always works with any participating institution.</li>
<li><strong>Raast ID</strong> (mobile number alias), common for sole proprietors and freelancers.</li>
<li><strong>Merchant alias or QR code</strong> under Raast P2M, issued through your bank or payment provider for business accounts.</li>
</ul>

<h2>Raast P2M: merchant payments and QR</h2>
<p>Raast P2M (person-to-merchant) is the business side of Raast. Under the SBP's framework, customers can pay merchants through:</p>
<ul>
<li><strong>Static QR</strong>, a fixed code you display at a counter or print on an invoice. The customer scans it and types the amount.</li>
<li><strong>Dynamic QR</strong>, generated for a specific sale with the amount and reference built in.</li>
<li><strong>Request to pay (RTP)</strong>, where you send a payment request that the customer approves in their app.</li>
<li><strong>Merchant alias or IBAN</strong> payments.</li>
</ul>
<p>Because Raast QR codes are interoperable, a customer of any participating bank or wallet should be able to pay a QR issued by another. That is the main advantage over closed-loop wallet QRs.</p>

<h3>Static QR, dynamic QR or request to pay: which should you use?</h3>
<table><thead><tr><th>Option</th><th>Amount entered by</th><th>Reference</th><th>Good for</th></tr></thead><tbody>
<tr><td>Static QR</td><td>Customer</td><td>Customer must type it</td><td>Shops, counters, printed invoices for repeat customers</td></tr>
<tr><td>Dynamic QR</td><td>Built into the code</td><td>Built into the code</td><td>Point-of-sale systems, online checkout, exact invoice amounts</td></tr>
<tr><td>Request to pay</td><td>You, in the request</td><td>Included in the request</td><td>Invoices to known customers, deposits, follow-ups on overdue bills</td></tr>
</tbody></table>
<p>For service businesses that invoice clients, a static QR or Raast ID on the invoice is the easiest start. If your bank or payment provider supports request to pay for your account, it works like a digital payment reminder: the customer receives a request for the exact invoice amount and approves it in their app, so there is no risk of a mistyped amount or missing reference.</p>

<h3>Who benefits most from Raast P2M?</h3>
<ul>
<li><strong>Retailers and restaurants</strong> that want instant, interoperable QR acceptance without card terminals.</li>
<li><strong>Freelancers and agencies</strong> billing local clients, who want same-minute confirmation instead of waiting for cheques to clear.</li>
<li><strong>Distributors and wholesalers</strong> collecting from many small shops, where QR and request to pay reduce cash handling.</li>
<li><strong>Tutors, clinics and service providers</strong> collecting regular fees from households.</li>
</ul>

<h2>How a Raast payment works for an invoice</h2>
<ol>
<li><strong>Enable Raast on your business account</strong> and ask your bank for P2M (QR or merchant alias) if you sell to the public.</li>
<li><strong>Issue the invoice</strong> with your IBAN, Raast ID or QR code and the invoice number as the payment reference.</li>
<li><strong>The customer pays</strong> from their banking or wallet app by entering your Raast ID, scanning your QR or approving your request.</li>
<li><strong>The app shows your registered account name</strong>; the customer confirms.</li>
<li><strong>Funds arrive in seconds</strong> and both sides receive a transaction ID.</li>
<li><strong>You reconcile</strong> by matching the transaction ID and amount to the invoice, then issue a <a href="/blog/payment-receipt-template">payment receipt</a> if asked.</li>
</ol>

<h2>Raast vs IBFT vs mobile wallets</h2>
<table><thead><tr><th>Method</th><th>Speed</th><th>Identifier</th><th>Best for</th></tr></thead><tbody>
<tr><td>Raast</td><td>Seconds, 24/7</td><td>IBAN, Raast ID, merchant QR or alias</td><td>Domestic B2B and B2C invoices, counter sales</td></tr>
<tr><td>IBFT (interbank funds transfer)</td><td>Usually fast, channel-dependent</td><td>Account number or IBAN</td><td>Customers whose app does not show Raast clearly</td></tr>
<tr><td>Mobile wallet transfer</td><td>Fast</td><td>Wallet number</td><td>Customers who keep balances in a wallet</td></tr>
<tr><td>Cheque or pay order</td><td>Days</td><td>Paper instrument</td><td>Large corporate or government payers that still require it</td></tr>
</tbody></table>
<p>Pricing for IBFT and wallet transfers is set by each provider and can change, so compare your own bank's schedule of charges.</p>

<h2>Raast limits and fees to check</h2>
<p>SBP rules set a framework, but each bank applies its own limits by account type and customer risk profile. Before you rely on Raast for larger invoices, check:</p>
<ul>
<li><strong>Per-transaction and daily limits</strong> on your account and typical limits on your customers' accounts. Customers may be able to raise limits in their app.</li>
<li><strong>Merchant fees</strong> on Raast P2M payments, if any, and how they are deducted.</li>
<li><strong>Incentive schemes.</strong> A government-funded incentive for Raast P2M QR transactions ran from 1 September 2025 to 30 June 2026. Ask your bank whether any successor scheme applies.</li>
<li><strong>Settlement and statements:</strong> how the payer's name and reference appear, so you can reconcile.</li>
</ul>

<h2>Worked example: a deposit and balance paid by Raast</h2>
<p>A Lahore design studio quotes PKR 85,000 for a branding project with 40% upfront and the balance on delivery.</p>
<table><thead><tr><th>Invoice</th><th>Calculation</th><th>Amount</th><th>Payment</th></tr></thead><tbody>
<tr><td>INV-2026-031 (deposit)</td><td>PKR 85,000 x 40%</td><td>PKR 34,000</td><td>Paid via Raast QR on the invoice, transaction ID recorded</td></tr>
<tr><td>INV-2026-038 (balance)</td><td>PKR 85,000 - PKR 34,000</td><td>PKR 51,000</td><td>Paid via Raast ID on delivery</td></tr>
<tr><td>Total received</td><td>PKR 34,000 + PKR 51,000</td><td>PKR 85,000</td><td>Both credits visible in seconds</td></tr>
</tbody></table>
<p>If the studio is registered for sales tax on services, provincial sales tax would be added to each invoice and shown separately; the Raast payment simply settles the total. For billing in stages, see our guides to the <a href="/blog/deposit-invoice">deposit invoice</a> and <a href="/blog/milestone-payments">milestone payments</a>.</p>

<h2>How to put Raast details on your invoice</h2>
<p>In the payment section of the invoice, include:</p>
<ul>
<li>Account title exactly as registered, bank name and IBAN. See <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> for layout.</li>
<li>Your Raast ID or merchant alias, and a printed Raast QR if your bank issued one.</li>
<li>"Please quote invoice number INV-2026-038 as the payment reference."</li>
<li>Due date and amount in PKR.</li>
<li>A warning: "Our account details will never change by WhatsApp or email. Call us to confirm any change."</li>
</ul>
<p>If you issue tax invoices, keep the NTN, STRN and other mandatory fields described in our guide to the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a>. Larger sellers integrated with FBR systems have extra requirements covered in <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing</a>, and recent changes are summarised in <a href="/blog/finance-act-2026-pakistan-sales-tax">Finance Act 2026 Pakistan sales tax changes</a>. Note that an FBR verification QR and a Raast payment QR are different codes with different purposes.</p>

<h2>Is Raast safe for business payments?</h2>
<p>Raast runs inside the regulated banking system, shows the payee's registered name before the payer confirms, and settles through the State Bank. The main risks are human ones:</p>
<ul>
<li><strong>Fake payment screenshots.</strong> Always check the credit in your own app before handing over goods.</li>
<li><strong>Account-change scams.</strong> Fraudsters send messages claiming your account has changed. See <a href="/blog/invoice-scams">invoice scam warning signs</a>.</li>
<li><strong>Wrong-account payments.</strong> Instant and final, so ask customers to check the name shown.</li>
<li><strong>Phishing.</strong> Never share OTPs or app PINs, even with someone claiming to be from your bank.</li>
</ul>

<h2>Common mistakes when accepting Raast payments</h2>
<ol>
<li>Printing a personal Raast ID on business invoices when the payments should go to a business account.</li>
<li>Not asking customers for the invoice number as a reference.</li>
<li>Releasing goods on a screenshot instead of a confirmed credit.</li>
<li>Assuming foreign clients can pay through Raast.</li>
<li>Not checking whether your customers' limits cover large invoices.</li>
</ol>

<h2>Raast for business checklist</h2>
<ul>
<li>Raast enabled on the business account; P2M QR or alias requested if needed.</li>
<li>Limits and merchant fees confirmed with your bank.</li>
<li>Invoice shows account title, IBAN, Raast ID or QR and a payment reference.</li>
<li>Account-change warning printed on the invoice.</li>
<li>Transaction IDs recorded against each invoice.</li>
<li>Separate method arranged for international clients.</li>
</ul>

<h2>Next step: add Raast to your invoices</h2>
<p>Open the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>, enter your business and tax details, add your IBAN, Raast ID and payment reference in the notes, and download the PDF. For clients outside Pakistan, follow our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a>.</p>
`,
  },
  {
    slug: "statutory-late-payment-interest",
    title: "Statutory Interest on Late Payments: How to Calculate It",
    description:
      "Late payment interest explained: calculate statutory interest under the UK 1998 Act and EU Directive, with formulas, worked examples and £40-£100 compensation.",
    category: "payments",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["uk-late-payment-law-2026", "late-payment-fees", "overdue-invoice"],
    faqs: [
      {
        q: "Do I charge late payment interest on the VAT part of an invoice?",
        a: "In the UK, statutory interest is normally calculated on the full amount owed, including VAT, because that is the debt the customer has failed to pay. You do not add VAT to the interest or to the fixed compensation, as they are not payments for a supply. Show interest and compensation as separate lines on a statement or demand.",
      },
      {
        q: "Can I claim statutory interest from a consumer?",
        a: "No. The Late Payment of Commercial Debts (Interest) Act 1998 only applies where both parties are acting in the course of business. For consumer debts you can only charge interest if your contract allows it and the term is fair under consumer law, or if a court awards interest on a judgment.",
      },
      {
        q: "Does statutory interest stop when I start a court claim?",
        a: "You can include statutory interest accrued up to the date of the claim, and ask for it to continue at the daily rate until judgment or payment. After judgment, judgment interest rules apply instead. The online money claim forms let you state the interest basis, rate and daily amount.",
      },
      {
        q: "Can I claim compensation on every overdue invoice from the same customer?",
        a: "Yes. In the UK, the fixed sum of £40, £70 or £100 applies to each qualifying late invoice, not once per customer. If a customer pays three separate invoices late, you can generally claim compensation on each one, based on the size of each debt.",
      },
      {
        q: "What if my contract already sets a late payment interest rate?",
        a: "If your contract provides a substantial remedy for late payment, such as a reasonable contractual interest rate, that applies instead of statutory interest. A clause that sets a token rate, or excludes interest, can be challenged if it is not a substantial remedy. Many businesses simply refer to the 1998 Act in their terms.",
      },
      {
        q: "Is there statutory late payment interest in the United States?",
        a: "There is no general federal rule giving businesses automatic interest on late invoices. Late fees or interest normally have to be agreed in the contract and must respect state usury and consumer laws, and courts may award prejudgment interest under state law. Federal agencies paying contractors late must pay interest under the Prompt Payment Act.",
      },
      {
        q: "How do I calculate interest if the customer pays part of the invoice?",
        a: "Calculate interest on whatever is outstanding in each period. Charge interest on the full debt from the day after the due date until the part payment, then on the reduced balance from that date until the rest is paid. For example, if half of a £4,800 invoice is paid 20 days late, the later days run on £2,400. The fixed compensation is still claimed only once for that invoice.",
      },
      {
        q: "How long do I have to claim statutory interest on an old invoice?",
        a: "In England and Wales, you generally have six years from when the debt fell due to bring a claim for an unpaid contract debt, including interest, under the Limitation Act 1980. Northern Ireland also uses six years for contract claims, while in Scotland the prescriptive period is usually five years. Older claims are harder to prove, so act sooner, and take legal advice if a debt is close to the deadline.",
      },
      {
        q: "Do I have to warn customers before charging statutory interest?",
        a: "No. The right to statutory interest arises automatically under the 1998 Act, so it applies even if your contract and invoice never mention it. In practice, a line on your invoices reserving your rights avoids surprises and encourages customers to pay on time. When you do claim, send a written statement showing the calculation so the customer can check the figures before paying.",
      },
      {
        q: "Is statutory interest I receive taxable?",
        a: "Yes. Late payment interest and compensation you receive generally form part of your business income and are taxed with your other profits, whether you are a sole trader or a company. They are not subject to VAT. Record them separately from sales in your accounts so the figures are easy to trace, and check HMRC guidance or ask your accountant if you are unsure how to report them.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Statutory late payment interest in the UK is 8% above the Bank of England reference rate, charged as simple interest from the day after the due date. Multiply the debt by the annual rate, divide by 365 and multiply by days late. You can also claim fixed compensation of £40, £70 or £100 per invoice, depending on its size.</p>

<p>This guide works through the calculation step by step, explains which base rate to use, covers the EU Late Payment Directive and other countries, and shows how to claim. If you only need the broad picture on charging fees, read our guide to <a href="/blog/late-payment-fees">late payment fees</a>. To reissue an invoice or a demand with interest added, use our <a href="/invoice-generator/uk">UK invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not legal advice. Check the current rules and reference rates on <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">GOV.UK</a> and the <a href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate" target="_blank" rel="noopener noreferrer">Bank of England</a>, and take advice for larger or disputed debts.</p>

<h2>What is statutory late payment interest?</h2>
<p>Statutory interest is interest that the law lets you charge on a late commercial debt even if your contract says nothing about it. In the UK it comes from the Late Payment of Commercial Debts (Interest) Act 1998, amended in 2013 to implement the EU Late Payment Directive (2011/7/EU). It applies across England, Wales, Scotland and Northern Ireland.</p>
<p>The Act gives a supplier three things when a business customer pays late:</p>
<ol>
<li><strong>Interest</strong> at the statutory rate.</li>
<li><strong>Fixed compensation</strong> for the cost of recovering the debt.</li>
<li><strong>Reasonable recovery costs</strong> above the fixed sum, if you incur them.</li>
</ol>

<h2>Who can claim late payment interest?</h2>
<ul>
<li><strong>Businesses selling to other businesses</strong>, including sole traders, partnerships and companies. See <a href="/blog/sole-trader-invoice-uk">invoicing as a sole trader</a>.</li>
<li><strong>Suppliers to the public sector</strong>; public authorities are covered too.</li>
<li><strong>Not consumers.</strong> Sales to individuals acting outside a business are excluded.</li>
<li><strong>Not where your contract sets a substantial remedy.</strong> A fair contractual interest rate replaces the statutory one.</li>
</ul>

<h2>When does statutory interest start?</h2>
<p>Interest runs from the day after the payment due date:</p>
<ul>
<li><strong>Agreed date:</strong> the date in your contract. Business-to-business terms over 60 days are only valid if expressly agreed and not grossly unfair.</li>
<li><strong>No agreed date:</strong> 30 days after the later of delivery of the goods or services, or the customer receiving the invoice.</li>
<li><strong>Public authorities:</strong> 30 days, in most cases.</li>
</ul>
<p>A clear <a href="/blog/invoice-due-date">invoice due date</a> on every invoice removes arguments about when the clock started.</p>

<h2>Which base rate do you use?</h2>
<p>You do not use the base rate on the day you calculate. The Act uses a reference rate fixed for six months:</p>
<table><thead><tr><th>Debt becomes overdue between</th><th>Reference rate is the Bank of England base rate on</th></tr></thead><tbody>
<tr><td>1 January and 30 June</td><td>31 December of the previous year</td></tr>
<tr><td>1 July and 31 December</td><td>30 June of the same year</td></tr>
</tbody></table>
<p>That reference rate applies for the whole time the debt is outstanding, even if the Bank changes its rate later. Add 8 percentage points to get your statutory rate. In the examples below we use an illustrative base rate of 3.75%, giving 11.75%. Check the Bank of England's rate history for your actual reference date.</p>

<h2>How to calculate late payment interest: the formula</h2>
<ol>
<li><strong>Find the statutory rate:</strong> reference rate + 8%.</li>
<li><strong>Annual interest:</strong> amount owed x statutory rate.</li>
<li><strong>Daily interest:</strong> annual interest / 365.</li>
<li><strong>Interest due:</strong> daily interest x number of days late.</li>
</ol>
<p>In a spreadsheet, the formula is <code>=Amount*(BaseRate+0.08)/365*DaysLate</code>. Interest is simple, not compound: you never charge interest on interest.</p>

<h3>Worked example 1: £4,800 invoice, 45 days late</h3>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Statutory rate</td><td>3.75% + 8%</td><td>11.75%</td></tr>
<tr><td>Annual interest</td><td>£4,800.00 x 11.75%</td><td>£564.00</td></tr>
<tr><td>Daily interest</td><td>£564.00 / 365</td><td>£1.5452</td></tr>
<tr><td>Interest for 45 days</td><td>£1.5452 x 45</td><td>£69.53</td></tr>
<tr><td>Fixed compensation (£1,000 to £9,999.99)</td><td>Statutory sum</td><td>£70.00</td></tr>
<tr><td>Total claim on top of the debt</td><td>£69.53 + £70.00</td><td>£139.53</td></tr>
</tbody></table>

<h3>Worked example 2: £850 invoice, 60 days late</h3>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Annual interest</td><td>£850.00 x 11.75%</td><td>£99.875</td></tr>
<tr><td>Daily interest</td><td>£99.875 / 365</td><td>£0.2736</td></tr>
<tr><td>Interest for 60 days</td><td>£0.2736 x 60</td><td>£16.42</td></tr>
<tr><td>Fixed compensation (under £1,000)</td><td>Statutory sum</td><td>£40.00</td></tr>
<tr><td>Total claim on top of the debt</td><td>£16.42 + £40.00</td><td>£56.42</td></tr>
</tbody></table>
<p>On small invoices the fixed compensation is often worth more than the interest, which is why it matters to claim both.</p>

<h3>What if the base rate changes while the invoice is unpaid?</h3>
<p>Nothing changes for that debt. Suppose an invoice fell due on 15 May 2026 and is still unpaid in October. Because it became overdue between 1 January and 30 June, you use the base rate on 31 December 2025 for the whole period, even though the Bank of England may have moved its rate since. A second invoice from the same customer that fell due on 15 July 2026 would use the 30 June 2026 rate instead. If you track several late invoices, record the reference rate next to each one in your <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a>.</p>

<h3>Claiming recovery costs above the fixed sum</h3>
<p>If you pay a collection agency or solicitor to recover a debt, you can claim reasonable costs above the fixed compensation. For example, on a £4,800 debt, if a collection agency charges you £300 (an illustrative figure), you can claim the £70 fixed sum plus the £230 difference, as long as the costs are reasonable and you can show them. Courts look at proportionality, so keep invoices for every recovery cost.</p>

<h2>Late payment compensation: £40, £70 and £100</h2>
<table><thead><tr><th>Size of the debt</th><th>Fixed compensation</th></tr></thead><tbody>
<tr><td>Up to £999.99</td><td>£40</td></tr>
<tr><td>£1,000 to £9,999.99</td><td>£70</td></tr>
<tr><td>£10,000 or more</td><td>£100</td></tr>
</tbody></table>
<p>You can claim this once per late invoice. If your reasonable costs of recovering the debt, such as a collection agency fee, are higher, you can claim the difference too. Neither interest nor compensation carries VAT.</p>

<h2>EU Late Payment Directive: interest in Europe</h2>
<p>Across the EU, Directive 2011/7/EU sets minimum rules for commercial transactions, implemented through each member state's law:</p>
<ul>
<li><strong>Rate:</strong> at least 8 percentage points above the European Central Bank's reference rate (the main refinancing operations rate), usually the rate in force on the first day of each half-year.</li>
<li><strong>Compensation:</strong> a fixed minimum of €40 per late invoice, plus reasonable recovery costs.</li>
<li><strong>Default term:</strong> 30 days where none is agreed.</li>
<li><strong>Maximum terms:</strong> 60 days between businesses unless expressly agreed and not grossly unfair; 30 days for public authorities, extendable to 60 in limited cases.</li>
</ul>
<p>Some countries go further. Germany uses 9 percentage points above its base rate for business debts, and France uses the ECB rate plus 10 points, both with a €40 flat recovery fee. Confirm the current figures nationally. A proposal to replace the Directive with a stricter regulation with 30-day maximum terms was still pending at our last check.</p>

<h3>Worked example 3: €6,000 invoice, 30 days late</h3>
<p>Assume an illustrative ECB reference rate of 2.15% and the minimum 8-point margin, so 10.15%.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Annual interest</td><td>€6,000.00 x 10.15%</td><td>€609.00</td></tr>
<tr><td>Daily interest</td><td>€609.00 / 365</td><td>€1.6685</td></tr>
<tr><td>Interest for 30 days</td><td>€1.6685 x 30</td><td>€50.05</td></tr>
<tr><td>Fixed compensation</td><td>Minimum</td><td>€40.00</td></tr>
<tr><td>Total claim on top of the debt</td><td>€50.05 + €40.00</td><td>€90.05</td></tr>
</tbody></table>

<h2>Late payment interest in the US and elsewhere</h2>
<ul>
<li><strong>United States:</strong> no general statutory interest on late business invoices. Interest or late fees must normally be agreed in your contract and respect state usury and consumer laws; courts may award prejudgment interest at state rates. Federal agencies must pay interest to contractors under the Prompt Payment Act, at a rate the Treasury sets every six months.</li>
<li><strong>Australia, Canada, Pakistan and many other countries:</strong> rules vary, and interest usually depends on your contract or court awards. Put an agreed rate in your terms.</li>
</ul>

<h2>How to claim statutory interest step by step</h2>
<ol>
<li><strong>Check eligibility:</strong> business customer, debt overdue, no contractual substitute.</li>
<li><strong>Calculate</strong> interest to date and the daily rate, plus compensation.</li>
<li><strong>Write to the customer</strong> with the invoice number, amount, due date, days late, rate used, daily interest and compensation. A <a href="/blog/statement-of-account">statement of account</a> works well.</li>
<li><strong>Set a deadline</strong> and say interest continues at the daily rate until payment.</li>
<li><strong>Escalate</strong> through a final notice, then a claim. See <a href="/blog/small-claims-court-unpaid-invoice">small claims court for an unpaid invoice</a>.</li>
</ol>
<p>Sample wording: "Invoice INV-2026-118 for £4,800.00 was due on 1 September 2026. Under the Late Payment of Commercial Debts (Interest) Act 1998 we are claiming statutory interest at 11.75% a year (£1.55 a day), currently £69.53, and fixed compensation of £70.00."</p>

<h2>Common mistakes when calculating late payment interest</h2>
<ul>
<li>Starting the count from the invoice date rather than the day after the due date.</li>
<li>Using today's base rate instead of the six-monthly reference rate.</li>
<li>Compounding interest.</li>
<li>Adding VAT to interest or compensation.</li>
<li>Claiming from consumers.</li>
<li>Forgetting compensation, which is often worth more than the interest on small debts.</li>
<li>Threatening interest you have not calculated, which weakens your position.</li>
</ul>

<h2>Checklist before you claim</h2>
<ul>
<li>Business-to-business debt confirmed.</li>
<li>Due date and days late confirmed with evidence.</li>
<li>Correct reference rate identified.</li>
<li>Interest, daily rate and compensation calculated per invoice.</li>
<li>Letter or statement sent with the calculation shown.</li>
<li>Relationship considered; many suppliers waive interest if the customer pays promptly after the demand.</li>
</ul>

<h2>Next step: add interest terms to your invoices</h2>
<p>Put a late payment clause on every invoice so customers know before they are late. Open the <a href="/invoice-generator/uk">UK invoice generator</a> and add "Late payments may incur statutory interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998" in the notes. For changes coming to UK law, read <a href="/blog/uk-late-payment-law-2026">UK late payment law 2026</a>, and for a full collection timeline see our <a href="/blog/overdue-invoice">overdue invoice</a> guide.</p>
`,
  },
];
