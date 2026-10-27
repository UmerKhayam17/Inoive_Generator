import type { PostDraft } from "../blog";

export const PLATFORM_SOFTWARE_POSTS: PostDraft[] = [
  {
    slug: "how-to-send-paypal-invoice",
    title: "PayPal Invoice: How to Send One and What It Costs",
    description:
      "How to send an invoice on PayPal step by step, what PayPal invoice fees cost in the US, worked fee examples, and when to attach your own PDF invoice.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["stripe-invoicing-guide", "add-payment-link-to-invoice", "how-to-accept-credit-card-payments"],
    faqs: [
      {
        q: "Is it free to send an invoice on PayPal?",
        a: "Creating and sending a PayPal invoice costs nothing. PayPal charges a transaction fee only when the customer pays, and the rate depends on how they pay: PayPal balance, card, Pay Later or bank. Check PayPal's fees page for your country because rates differ outside the US.",
      },
      {
        q: "How much does PayPal charge for an invoice payment in the US?",
        a: "At the time of writing, PayPal's US fee page lists 3.49% + $0.49 for invoice payments made with PayPal checkout or Venmo, 2.99% + $0.49 for card payments, 4.99% + $0.49 for Pay Later and 1% capped at $10 for Pay by Bank. International payments add 1.50%. These rates change, so confirm them before you price a job.",
      },
      {
        q: "Can someone pay a PayPal invoice without a PayPal account?",
        a: "Usually yes. The invoice email links to a payment page where the customer can pay with a debit or credit card as a guest, as long as guest checkout is available in their country. They can also log in with a PayPal account if they have one.",
      },
      {
        q: "Should I attach my own invoice PDF to a PayPal invoice?",
        a: "Attach your own PDF when the client's accounts team needs a specific format, a PO number, tax registration numbers or detailed line items that PayPal's form does not show well. The PayPal invoice then acts as the payment link, and your PDF is the formal record.",
      },
      {
        q: "Can I pass PayPal fees on to my client?",
        a: "In many places you can add a separate convenience or processing line, but surcharging rules vary by US state and by card network, and PayPal's own policies also apply. A safer approach is to build your payment costs into your rates or offer a cheaper payment method such as bank transfer.",
      },
      {
        q: "Why is my PayPal invoice payment on hold?",
        a: "PayPal can hold payments for new sellers or accounts with little selling history, and its help pages say these holds generally last up to 21 days. For services, PayPal says funds can be released sooner, for example after the order is marked as completed. Confirming your identity and building a history of successful transactions usually reduces holds. Check the payment details in your account for the release date.",
      },
      {
        q: "Does PayPal return its fee if I refund an invoice payment?",
        a: "Generally, no. PayPal's help pages say there's no fee to issue a refund for goods or services, but the fees you paid when you received the payment are not returned. On a full refund you are therefore out of pocket by the original fee. Check the current fee terms in your account before agreeing to refunds, and factor this into your cancellation terms.",
      },
      {
        q: "Can I send a PayPal invoice in a currency other than US dollars?",
        a: "Yes. PayPal Invoicing lets you bill in many currencies, with PayPal's pages citing more than 20 at the time of writing. If you receive a currency you don't hold, PayPal may convert it and charge a currency conversion fee, and a different fixed fee applies to non-USD payments. Agree the currency with your client first and check PayPal's fee page for your country.",
      },
      {
        q: "How do I withdraw money from PayPal to my bank account?",
        a: "You transfer your PayPal balance to a linked bank account. Standard transfers are free and usually arrive within a few business days, while instant transfers arrive faster for a percentage fee that differs between personal and business accounts. Check the fee shown before you confirm. In your books, record the gross invoice as income and any transfer fee as a separate expense.",
      },
      {
        q: "Can a client pay my invoice as a friends and family payment on PayPal?",
        a: "You shouldn't ask them to. Friends and family payments are meant for personal transfers, and using them for paid work goes against PayPal's rules and leaves the client without purchase protection. A PayPal invoice or goods and services payment carries a fee, but it gives you both an itemized, trackable record of the business transaction. Always bill clients through a business payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To send a PayPal invoice, log in to a PayPal business account, open the invoicing section, add your client's email, enter line items, tax and a due date, then click send. PayPal emails the client a link to pay by PayPal, card or bank. Sending is free; you pay a fee only when the invoice is paid, and US rates currently start at 1% for bank payments.</p>

<p>A PayPal invoice is convenient when your client already uses PayPal or wants to pay by card. It is less convenient when their accounts team wants a formal invoice with your tax ID, PO number and detailed terms. This guide covers how to send an invoice on PayPal, what the fees look like on a real job, and when to pair it with your own PDF built in our <a href="/invoice-generator?template=modern">free invoice generator</a>.</p>

<h2>How to send an invoice on PayPal, step by step</h2>
<p>PayPal moves its menus around from time to time, so the labels below may differ slightly in your account. The steps themselves have stayed the same for years.</p>
<ol>
<li><strong>Use a business account.</strong> Invoicing works best from a PayPal business account. Upgrading a personal account is free, and it keeps business income separate from money friends send you.</li>
<li><strong>Open invoicing.</strong> In the web dashboard, look under the payments or "Pay &amp; Get Paid" menu for Invoices, then choose Create invoice. The PayPal Business mobile app has the same option.</li>
<li><strong>Set up your business details once.</strong> Add your business name, logo, address, phone and any tax ID you want shown. These carry over to every future invoice.</li>
<li><strong>Add the customer.</strong> Enter the client's email address. Add their billing address if they need it on the invoice for their records.</li>
<li><strong>Enter line items.</strong> Describe each service or product, the quantity or hours, and the unit price. Add sales tax per line if you collect it.</li>
<li><strong>Set the invoice number, date and due date.</strong> PayPal suggests the next number automatically; change it if you run your own sequence.</li>
<li><strong>Add notes, terms and attachments.</strong> This is where you can attach a contract, a timesheet or your own invoice PDF.</li>
<li><strong>Choose payment options.</strong> Depending on your account, you may be able to allow partial payments, tips or bank payments.</li>
<li><strong>Preview, then send.</strong> PayPal emails the invoice with a payment button. You can also copy a shareable link and send it through any channel.</li>
</ol>
<p>After you send it, the invoice shows as unpaid until the client pays. You can send reminders from the same screen, record a payment received outside PayPal (for example a paper check), or cancel the invoice if the job changes.</p>

<h2>PayPal invoice fees in the US (2026)</h2>
<p>Sending a PayPal invoice is free. The fee comes out of the payment when the client pays. Here are the US rates for invoice payments listed on <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal's official business fees page</a>, which was last updated on 1 October 2026 when we checked it.</p>
<table><thead><tr><th>How the client pays</th><th>US fee per invoice payment</th></tr></thead><tbody>
<tr><td>PayPal checkout, Pay with Venmo or guest checkout</td><td>3.49% + $0.49</td></tr>
<tr><td>Credit or debit card, Apple Pay or other wallets</td><td>2.99% + $0.49</td></tr>
<tr><td>PayPal Pay Later</td><td>4.99% + $0.49</td></tr>
<tr><td>Pay by Bank (ACH)</td><td>1%, capped at $10.00</td></tr>
<tr><td>International payment (payer outside the US)</td><td>Add 1.50% to the domestic rate</td></tr>
</tbody></table>
<p>The fixed fee of $0.49 applies to US dollar payments. If you receive another currency, PayPal applies a different fixed fee for that currency, and converting the money adds a currency conversion charge. Fees also vary by country: a seller in the UK, Canada or Australia pays a different schedule from a US seller. Always check the fee page for the country where your PayPal account is registered.</p>

<h2>Worked example: what a $1,000 PayPal invoice actually pays you</h2>
<p>Say you invoice a client $1,000.00 for a website audit. Here is what lands in your PayPal balance depending on how they pay, using the US rates above.</p>
<table><thead><tr><th>Payment method</th><th>Fee calculation</th><th>Fee</th><th>You receive</th></tr></thead><tbody>
<tr><td>Pay by Bank</td><td>1% of $1,000 = $10.00 (at the cap)</td><td>$10.00</td><td>$990.00</td></tr>
<tr><td>Card</td><td>2.99% of $1,000 = $29.90, + $0.49</td><td>$30.39</td><td>$969.61</td></tr>
<tr><td>PayPal balance (US client)</td><td>3.49% of $1,000 = $34.90, + $0.49</td><td>$35.39</td><td>$964.61</td></tr>
<tr><td>PayPal balance (client in Canada)</td><td>(3.49% + 1.50%) of $1,000 = $49.90, + $0.49</td><td>$50.39</td><td>$949.61</td></tr>
<tr><td>Pay Later</td><td>4.99% of $1,000 = $49.90, + $0.49</td><td>$50.39</td><td>$949.61</td></tr>
</tbody></table>
<p>The gap between the cheapest and most expensive option is $40.39 on a single $1,000 invoice. On larger invoices the bank option gets even better because of the $10 cap: a $5,000 invoice paid by bank still costs $10, while the same invoice paid by PayPal balance costs $174.99 (3.49% of $5,000 is $174.50, plus $0.49).</p>
<p>That is why many freelancers put bank transfer details on the same invoice. Our guide to <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> explains the cheaper bank routes, and <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows what to print so the client can pay you directly.</p>

<h2>When to attach your own PDF invoice</h2>
<p>PayPal's invoice form covers the basics: your details, the client, line items, tax, a total and a due date. For many small jobs that is all you need. There are good reasons to send a proper invoice PDF alongside it, though:</p>
<ul>
<li><strong>The client has an accounts payable team.</strong> Larger companies often need a PO number, a supplier number, your legal entity name and remittance details in specific places. A PDF you control makes that easy.</li>
<li><strong>You need tax details shown a certain way.</strong> VAT or GST invoices outside the US have required fields, and some clients want your EIN or state tax ID on the face of the invoice. See our <a href="/blog/tax-id-on-invoice">guide to tax IDs on invoices</a>.</li>
<li><strong>You bill detailed hours or milestones.</strong> A timesheet-style breakdown reads better on a full invoice than in a short PayPal line.</li>
<li><strong>You offer more than one payment method.</strong> Your PDF can list PayPal, bank transfer and card, letting the client pick the cheapest one for you.</li>
<li><strong>You want consistent records.</strong> If only some clients pay through PayPal, keeping every invoice in one format and one numbering sequence makes tax time easier.</li>
</ul>
<p>A simple workflow: create the invoice in the <a href="/invoice-generator?template=corporate">invoice generator</a>, download the PDF, then create a PayPal invoice for the same amount with the same invoice number and attach the PDF. Or skip the PayPal invoice entirely and paste a PayPal payment link into your PDF. Our article on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> walks through that option.</p>

<h2>PayPal invoice vs a payment link vs a PayPal.Me request</h2>
<p>PayPal gives you several ways to ask for money, and they are not interchangeable.</p>
<ul>
<li><strong>PayPal invoice:</strong> itemized, numbered, tracked as paid or unpaid, with reminders. Best for client work.</li>
<li><strong>Payment link or button:</strong> a fixed amount or product your customer pays through a link. Useful for repeat products or deposits, and easy to paste into an invoice you made elsewhere.</li>
<li><strong>PayPal.Me link:</strong> a personal link where the payer types an amount. Quick, but there are no line items, and it is easy for payments to come in with the wrong amount or no reference.</li>
</ul>
<p>For business income, an invoice or a payment link tied to an invoice number is far easier to reconcile than loose PayPal.Me payments.</p>

<h2>Tips to get paid faster through PayPal</h2>
<ul>
<li><strong>Use a real due date</strong> such as "Due 15 November 2026", not just "Net 30". Our guide to invoice payment terms explains why.</li>
<li><strong>Schedule reminders.</strong> PayPal can send reminders before and after the due date. Combine that with a short personal email for larger invoices.</li>
<li><strong>Keep invoice numbers consistent.</strong> If you invoice outside PayPal too, use one sequence. The <a href="/tools/invoice-number-generator">invoice number generator</a> can create a format such as INV-2026-041.</li>
<li><strong>Record off-PayPal payments.</strong> If the client pays by bank transfer instead, mark the PayPal invoice as paid so your records match.</li>
<li><strong>Watch for fake PayPal invoices.</strong> Scammers send convincing fake invoices through PayPal itself. If you are on the receiving end, read our guide to <a href="/blog/invoice-scams">invoice scams</a> before paying anything unexpected.</li>
</ul>

<h2>PayPal invoices and taxes</h2>
<p>PayPal may send you a Form 1099-K in the US if your payments for goods and services cross the federal reporting threshold, and some states use lower thresholds. Every dollar of business income is taxable whether or not you receive a form. Our post on the <a href="/blog/1099-k-threshold">1099-K threshold</a> explains the current rules. Keep your PayPal fees too: they are a business expense, and you should record the gross invoice amount as income and the fee separately, not just the net deposit.</p>
<p>Rules and rates change, and this is general information rather than tax advice. Confirm your situation with a tax professional.</p>

<h2>Next step</h2>
<p>Before your next PayPal invoice, build a matching PDF in the <a href="/invoice-generator">free invoice generator</a> with your tax ID, terms and both a PayPal link and bank details. Your client can pick how to pay, and you keep a clean, numbered record of every job.</p>
`,
  },
  {
    slug: "stripe-invoicing-guide",
    title: "Stripe Invoice Guide: Pricing, Setup and Alternatives",
    description:
      "How Stripe invoices work, what Stripe Invoicing costs on top of card fees, how the hosted invoice page works, and when a free invoice plus a payment link is enough.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "embedded-finance-invoicing",
      "add-payment-link-to-invoice",
      "how-to-send-paypal-invoice",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "How much does Stripe charge for an invoice?",
        a: "Stripe charges a per-invoice fee for Stripe Invoicing, listed at 0.4% of each paid invoice on the Starter plan and 0.5% on Plus at the time of writing, plus normal Stripe payment fees. In the US, standard card processing is 2.9% + 30 cents per successful domestic card charge. Check Stripe's pricing pages for your country before relying on these figures.",
      },
      {
        q: "Can a customer pay a Stripe invoice without a Stripe account?",
        a: "Yes. Customers do not need a Stripe account. They receive an email or link to a Stripe-hosted invoice page and pay there with a card, bank debit or another enabled payment method.",
      },
      {
        q: "Is Stripe Invoicing the same as a Stripe Payment Link?",
        a: "No. A Stripe invoice is a numbered bill for a specific customer with line items, a due date and reminders. A Payment Link is a reusable checkout page for a fixed product or amount. You can add a Payment Link to an invoice you created elsewhere instead of using Stripe Invoicing.",
      },
      {
        q: "Does Stripe Invoicing work for freelancers?",
        a: "It works, but it is built for businesses with developers or many invoices, and the dashboard has a learning curve. A freelancer sending a handful of invoices a month may find a free invoice PDF with a payment link simpler and cheaper.",
      },
      {
        q: "Does Stripe refund its fees if I refund a paid invoice?",
        a: "No. Stripe's help center says processing fees and any currency conversion fees from the original payment are not returned when you refund it, so a full refund still costs you the original fee. Some refunds of bank transfer payments can carry an extra fee as well. Check Stripe's refund documentation for the payment method your client used, and reflect this in your cancellation terms.",
      },
      {
        q: "What happens if a client disputes a Stripe invoice payment?",
        a: "The disputed amount is pulled back while the card issuer reviews it, and Stripe charges a dispute fee. At the time of writing, Stripe's US pricing page lists $15 per dispute, plus a $15 counter fee if you respond manually, which is refunded if you win. Respond in the Dashboard before the deadline with your invoice, contract and proof of delivery, and check Stripe's pricing page for current fees.",
      },
      {
        q: "Can I use Stripe Invoicing if I live in Pakistan?",
        a: "Not directly at the time of writing. Pakistan does not appear on Stripe's list of countries where businesses can open an account, and India is listed only as a preview market. Freelancers in unsupported countries usually invoice with their own PDF and receive payment through a bank wire or a service such as Payoneer. Check Stripe's global availability page, as the list changes.",
      },
      {
        q: "Can Stripe calculate sales tax or VAT on my invoices?",
        a: "Yes, through Stripe Tax, which is an add-on. At the time of writing, Stripe's pricing page lists 0.5% per transaction for no-code use with Invoicing, charged only in places where you are registered to collect tax. Stripe Tax calculates the tax, but you are still responsible for registering, filing and paying it. You can instead add tax rates manually without the Stripe Tax fee.",
      },
      {
        q: "Can I bill a client in another currency with Stripe?",
        a: "Yes. Stripe supports payments in more than 135 currencies. If a payment has to be converted to your payout currency, Stripe's US pricing lists an extra 1% at the time of writing, and international cards carry an additional percentage. Agreeing the currency upfront and quoting your price in it avoids surprises for both sides. Check Stripe's pricing page for your country.",
      },
      {
        q: "Does Stripe charge extra for recurring invoices?",
        a: "Recurring billing runs through Stripe Billing, which has its own fee. At the time of writing, Stripe's US pricing page lists pay-as-you-go Billing at 0.7% of billing volume, separate from the Invoicing fee on one-off invoices, with normal payment processing fees on top. If you only bill a few fixed monthly retainers, a reusable Payment Link pasted into your own invoice may cost less.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Stripe invoice is a bill you create in the Stripe Dashboard or API that the customer pays on a Stripe-hosted page by card, bank debit or other methods. Stripe Invoicing adds a fee per paid invoice (0.4% on Starter, 0.5% on Plus at the time of writing) on top of standard payment fees, such as 2.9% + 30¢ for US cards.</p>

<p>Stripe is one of the most capable payment platforms around, and its invoicing product is strong for businesses that bill at volume or need automation. For a freelancer sending a few invoices a month, though, you may get the same result by making a <strong>Stripe invoice</strong> alternative yourself: a PDF from our <a href="/invoice-generator?template=startup">free invoice generator</a> with a Stripe Payment Link on it. This guide explains both routes and what each costs.</p>

<h2>What is a Stripe invoice?</h2>
<p>Stripe Invoicing lets you create invoices from the Stripe Dashboard, from the mobile app, or through the API. Each invoice has a customer, line items, tax, a due date and a unique number. When you finalize it, Stripe can email it to the customer, and every invoice gets a <strong>hosted invoice page</strong>: a secure web page with the invoice details, a downloadable PDF and a pay button.</p>
<p>Stripe then tracks the invoice through its life cycle (draft, open, paid, void or uncollectible), can retry failed card payments, sends reminders, and reconciles bank transfers to the right invoice where that feature is available. Because Stripe is also the payment processor, the money and the invoice live in the same system.</p>

<h2>Stripe Invoicing pricing in 2026</h2>
<p>There are two layers of cost: the invoicing fee and the payment processing fee. Here is what Stripe's official pages showed when we checked in October 2026 (US pricing).</p>
<table><thead><tr><th>Cost</th><th>Rate</th><th>Notes</th></tr></thead><tbody>
<tr><td>Invoicing Starter</td><td>0.4% per paid invoice</td><td>No monthly fee or setup fee</td></tr>
<tr><td>Invoicing Plus</td><td>0.5% per paid invoice</td><td>Adds features such as quotes</td></tr>
<tr><td>Invoicing Custom</td><td>Negotiated</td><td>For large invoice volumes, through sales</td></tr>
<tr><td>US domestic card payment</td><td>2.9% + 30¢</td><td>Standard Stripe Payments pricing</td></tr>
<tr><td>ACH Direct Debit (US)</td><td>0.8%, capped at $5.00</td><td>Slower to settle than cards</td></tr>
<tr><td>International card</td><td>+1.5%</td><td>Added to the base card rate</td></tr>
<tr><td>Currency conversion</td><td>+1%</td><td>When conversion is required</td></tr>
</tbody></table>
<p>Prices come from <a href="https://stripe.com/invoicing/pricing" target="_blank" rel="noopener noreferrer">Stripe's Invoicing pricing page</a> and its main payments pricing page. Stripe updates pricing and offers custom rates to larger businesses, and fees differ outside the US, so check the page for your country.</p>

<h2>Worked example: a $2,500 Stripe invoice</h2>
<p>You invoice a US client $2,500.00 for a two-week development sprint using Stripe Invoicing Starter.</p>
<table><thead><tr><th>Client pays by</th><th>Invoicing fee (0.4%)</th><th>Payment fee</th><th>Total fees</th><th>You receive</th></tr></thead><tbody>
<tr><td>US card</td><td>$10.00</td><td>2.9% of $2,500 = $72.50, + $0.30 = $72.80</td><td>$82.80</td><td>$2,417.20</td></tr>
<tr><td>ACH Direct Debit</td><td>$10.00</td><td>0.8% = $20.00, capped at $5.00</td><td>$15.00</td><td>$2,485.00</td></tr>
</tbody></table>
<p>The invoicing fee is small next to card processing. What moves the total is the payment method, which is why it pays to encourage bank payments on larger invoices. Our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> covers the trade-offs of card fees in more detail.</p>

<h2>How the hosted invoice page works</h2>
<p>The hosted invoice page is the part your customer sees. It shows your business name and branding, the invoice number, the line items and total, the due date and the payment options you have turned on. The customer can download a PDF copy and pay without creating an account.</p>
<p>A few practical points:</p>
<ul>
<li><strong>Payment methods are opt-in.</strong> You choose which methods appear (cards, ACH, wallets and others depending on country). Turning on bank payments can lower your fees.</li>
<li><strong>Branding is limited.</strong> You can set a logo, colors and some text, but the layout is Stripe's. If a client needs a specific invoice format, you may still want your own PDF.</li>
<li><strong>The link stays live.</strong> Customers can return to the same page to see the status or download a receipt once paid.</li>
<li><strong>Automatic reminders and retries</strong> are available, and you can set them in your billing settings.</li>
</ul>

<h2>Setting up a Stripe invoice, step by step</h2>
<ol>
<li>Create and verify a Stripe account. You will need business details, a bank account for payouts and identity verification.</li>
<li>In the Dashboard, open Invoices and choose to create a new invoice.</li>
<li>Pick or create a customer with their email and billing details.</li>
<li>Add line items, either one-off items or saved products and prices.</li>
<li>Add tax. Stripe Tax can calculate it automatically for an additional fee, or you can add tax rates manually.</li>
<li>Set the payment terms, choose payment methods and add a memo or footer.</li>
<li>Finalize and send. Stripe emails the invoice and creates the hosted page.</li>
</ol>
<p>Once sent, a finalized invoice can't be freely edited. To change it, you void it and issue a new one, or issue a credit note, which mirrors normal accounting practice. Our guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> explains why.</p>

<h2>When a free invoice generator plus a payment link is enough</h2>
<p>Stripe Payment Links are included in standard Stripe Payments pricing in the US: you pay processing fees when someone pays, but no invoicing percentage. That opens a lighter workflow:</p>
<ol>
<li>Create a Payment Link in Stripe for the amount, or a reusable link where the customer enters an amount if your account supports it.</li>
<li>Build the invoice in our <a href="/invoice-generator?template=minimal">invoice generator</a> with your own layout, tax details and terms.</li>
<li>Paste the Payment Link into the notes or payment section of the invoice, download the PDF and email it.</li>
<li>When Stripe shows the payment, mark the invoice paid in your own records.</li>
</ol>
<p>This route suits you if:</p>
<ul>
<li>You send fewer than a couple of dozen invoices a month.</li>
<li>Your clients want a specific invoice format, PO numbers or tax fields Stripe's layout doesn't show the way they want.</li>
<li>You also accept bank transfer, PayPal or checks, and want one invoice format for everything.</li>
</ul>
<p>Stripe Invoicing is the better choice when you need automatic reminders and card retries, subscriptions, customer portals, reconciliation of many payments, or an API that creates invoices from your app. The step-by-step guide to <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows exactly where to put the link and how to word it.</p>
<p>One caution: our generator does not process payments or email invoices for you. It creates the PDF in your browser; the payment happens through Stripe (or whichever processor you link), and you send the email yourself.</p>

<h2>Stripe invoice problems people run into</h2>
<p>Most issues with Stripe invoices come from setup rather than the product itself. These are the ones worth checking before you send your first invoice:</p>
<ul>
<li><strong>Payouts held during verification.</strong> New Stripe accounts sometimes see payouts paused until identity or business details are confirmed. Finish verification before the first big invoice goes out.</li>
<li><strong>Tax shown incorrectly.</strong> If you add tax rates manually, make sure each line has the right rate and that the tax is labeled the way your jurisdiction expects. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers what to show.</li>
<li><strong>Wrong invoice numbers.</strong> Stripe generates its own number prefix per account. If you also invoice outside Stripe, decide whether Stripe's sequence or your own is the master, or you will end up with two overlapping series.</li>
<li><strong>Customers paying twice.</strong> A client who receives both a Stripe invoice email and a separate PDF with a payment link can pay both. Send one payment route per invoice, or tell the client clearly which link to use.</li>
<li><strong>Card fees eating into large invoices.</strong> On a $10,000 project, card processing alone is $290.30 at 2.9% + 30¢. Turn on ACH Direct Debit for big invoices; its fee is capped.</li>
</ul>
<p>If you only want a receipt-style record after someone pays through a Payment Link, Stripe also offers post-payment invoices for Payment Links. At the time of writing that cost 0.4% of the transaction, capped at $2.00 per invoice, in the US.</p>

<h2>Stripe vs PayPal vs Square for invoices</h2>
<table><thead><tr><th></th><th>Stripe Invoicing</th><th>PayPal invoicing</th><th>Square Invoices</th></tr></thead><tbody>
<tr><td>Best for</td><td>Online businesses, SaaS, developers</td><td>Clients who already use PayPal</td><td>Local service businesses</td></tr>
<tr><td>Invoicing fee</td><td>0.4% to 0.5% per paid invoice</td><td>None beyond transaction fees</td><td>None on the free plan</td></tr>
<tr><td>US card rate</td><td>2.9% + 30¢</td><td>2.99% + $0.49 on invoices</td><td>3.3% + 30¢ on the free plan</td></tr>
<tr><td>API and automation</td><td>Very strong</td><td>Available</td><td>Available</td></tr>
</tbody></table>
<p>All rates are US rates at the time of writing and can change. See our guides to <a href="/blog/how-to-send-paypal-invoice">sending a PayPal invoice</a> and <a href="/blog/square-invoice-fees">Square invoice fees</a> for the details behind each column.</p>

<h2>Next step</h2>
<p>If you only need a few invoices a month, create one now in the <a href="/invoice-generator">invoice generator</a>, add a Stripe Payment Link and your bank details, and send it. If you outgrow that, Stripe Invoicing will still be there, and your invoice numbering can carry straight over.</p>
`,
  },
  {
    slug: "venmo-zelle-cash-app-invoice",
    title: "Venmo Invoice, Zelle and Cash App: How to Bill Clients",
    description:
      "Can you send a Venmo invoice, Zelle invoice or Cash App invoice? What each app really offers businesses, current fees, buyer protection and 1099-K tax rules.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["1099-k-threshold", "how-to-send-paypal-invoice", "add-payment-link-to-invoice"],
    faqs: [
      {
        q: "Can you send an invoice through Zelle?",
        a: "No. Zelle has no invoicing feature. It moves money between US bank accounts, and some banks offer a request-money option inside their app. To bill a client, send your own invoice and list your Zelle email or phone number as a payment option.",
      },
      {
        q: "Does Venmo have invoices?",
        a: "Venmo does not have a full invoicing tool with line items and due dates. A Venmo business profile lets you request payments and accept them for a fee, and clients can pay PayPal invoices with Venmo in the US. Many sellers send their own invoice and include a Venmo username or QR code.",
      },
      {
        q: "What are Venmo business profile fees?",
        a: "At the time of writing, Venmo's fee page lists 1.9% + $0.10 per payment received on a business profile, and 2.29% + $0.09 for Tap to Pay. Personal accounts that receive goods and services payments pay 2.99%. Check Venmo's official fee page because rates change.",
      },
      {
        q: "Do Venmo, Zelle and Cash App report income to the IRS?",
        a: "Venmo and Cash App can issue Form 1099-K for business or goods and services payments above the federal threshold, which is currently more than $20,000 and more than 200 transactions in a year. Some states use lower thresholds. Zelle has said it does not issue 1099-K forms, but all business income is taxable either way.",
      },
      {
        q: "Is Zelle safe for receiving business payments?",
        a: "Zelle is fast and usually free for the person receiving money, and once a payment lands it is generally final. That suits you as the seller, but it also means there is no purchase protection for your customer, so some clients will be reluctant to pay a business they don't know with Zelle.",
      },
      {
        q: "Can I use Venmo to get paid by clients outside the US?",
        a: "Generally not. Venmo is a US service: accounts need a US phone number and a US bank account or card, so most overseas clients can't use it. For international clients, a PayPal invoice, a bank wire or a multi-currency service is usually a better fit. List those options in the payment section of your invoice so overseas clients have a clear way to pay.",
      },
      {
        q: "Does my client pay a fee if they pay my Venmo business profile with a credit card?",
        a: "No, according to Venmo's help center. Personal payments funded by a credit card normally carry a 3% sender fee, but payments to a business profile are exempt from it. Instead, you pay the seller fee, listed at 1.9% + $0.10 per payment at the time of writing. Venmo also says business profile fees are not refunded if you later refund a payment.",
      },
      {
        q: "Can I still use the Zelle app if my bank doesn't offer Zelle?",
        a: "No. Zelle stopped processing payments in its standalone app in April 2025, so you now need a bank or credit union that offers Zelle inside its own app or online banking. If your business bank doesn't support it, list bank transfer or another method on your invoice instead. More than 2,000 banks and credit unions offer Zelle, so check with yours first.",
      },
      {
        q: "Can I use a personal Cash App account for business payments?",
        a: "Cash App expects regular business payments to go through a business account, which charges a fee on each payment received. Using a personal account for business income can lead to account restrictions and mixes business and personal records. A business account also makes your income easier to track at tax time. Check Cash App's terms and the fee shown in your account before you start.",
      },
      {
        q: "What happens if a client sends a Zelle payment to the wrong person?",
        a: "The money usually can't be pulled back, because Zelle payments are generally final once sent. The client should contact their bank immediately and ask whether anything can be done, but recovery is not guaranteed. To prevent mistakes, put the exact email address or phone number registered to your Zelle account on the invoice and ask new clients to send a small test payment first.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Zelle has no invoicing feature, so you send your own invoice and list your Zelle details on it. Venmo has no full invoice tool either, but a Venmo business profile lets you request and accept payments for 1.9% + $0.10. Cash App business accounts also take a fee per payment. In every case, a proper invoice with a payment link or handle works best.</p>

<p>Clients love paying with apps they already use, and many small businesses get asked "can I just Venmo you?" every week. The catch is that these apps were built for paying friends, not for billing. This guide explains what a <strong>Venmo invoice</strong>, <strong>Zelle invoice</strong> or <strong>Cash App invoice</strong> really looks like in practice, what each costs you, and how to keep tidy records. You can create the invoice itself in our <a href="/invoice-generator?template=minimal">free invoice generator</a> and add your app details to the payment section.</p>

<h2>Can you invoice through Venmo, Zelle or Cash App?</h2>
<table><thead><tr><th></th><th>Venmo</th><th>Zelle</th><th>Cash App</th></tr></thead><tbody>
<tr><td>Built-in invoices with line items</td><td>No</td><td>No</td><td>No (Square, its sister company, has invoices)</td></tr>
<tr><td>Request money</td><td>Yes, including from a business profile</td><td>In some bank apps</td><td>Yes</td></tr>
<tr><td>Business account option</td><td>Business profile</td><td>Depends on your bank</td><td>Cash App business account</td></tr>
<tr><td>Fee to receive business payments</td><td>1.9% + $0.10 (business profile)</td><td>Usually none from Zelle; ask your bank</td><td>Per-payment fee on business accounts</td></tr>
<tr><td>Credit card payments</td><td>Sender can fund with a card (sender pays a fee)</td><td>No, bank to bank only</td><td>Sender can use a linked card</td></tr>
<tr><td>Buyer protection</td><td>Purchase Protection on eligible goods and services payments</td><td>None</td><td>No general purchase protection on direct payments</td></tr>
<tr><td>Form 1099-K</td><td>Yes, above the threshold</td><td>Zelle says it does not issue them</td><td>Yes, for business accounts above the threshold</td></tr>
</tbody></table>
<p>So the honest answer is that none of the three issues a real invoice. What they offer is a way to <em>receive</em> the money. The invoice, with your business details, the work done, the amount and due date, still has to come from you.</p>

<h2>How to get paid with Venmo for business</h2>
<p>Venmo, which is owned by PayPal, gives you three ways to take business payments:</p>
<ol>
<li><strong>A Venmo business profile.</strong> It sits alongside your personal profile and has its own username and QR code. Customers can pay it directly, and you can send payment requests from it. Payments carry a seller fee.</li>
<li><strong>A PayPal invoice paid with Venmo.</strong> In the US, PayPal invoices show a Venmo option. That uses PayPal's invoice fee schedule, currently 3.49% + $0.49 for PayPal or Venmo checkout. See our guide on <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a>.</li>
<li><strong>A personal account marked as goods and services.</strong> If the payer marks the payment as a purchase, you pay a 2.99% seller fee. Using a personal profile for regular business income goes against Venmo's user agreement, so a business profile is the better route.</li>
</ol>
<p>Venmo's current fees, from <a href="https://venmo.com/resources/our-fees/" target="_blank" rel="noopener noreferrer">Venmo's official fee page</a> when we checked in October 2026:</p>
<ul>
<li>Business profile payments: 1.9% + $0.10 per payment.</li>
<li>Tap to Pay: 2.29% + $0.09 per payment.</li>
<li>Goods and services payments to a personal account: 2.99%.</li>
<li>Instant transfer to your bank or debit card: 1.75%, minimum $0.25, maximum $25. Standard transfers are free.</li>
</ul>
<p>Venmo's Purchase Protection covers eligible goods and services payments, which gives customers some comfort and means a buyer can open a dispute. Eligible sellers have some protection too, but disputes can still lead to funds being held. Keep your invoice, any delivery proof and messages for every job.</p>

<h2>How to get paid with Zelle (and what a "Zelle invoice" really is)</h2>
<p>Zelle moves money directly between US bank accounts, usually within minutes when both people are enrolled. There is no Zelle invoice. What people call a Zelle invoice is a normal invoice that says "Pay by Zelle to billing@yourbusiness.com" in the payment section.</p>
<p>Some banks let business customers send a Zelle payment request from their app, and many banks support Zelle on small business accounts. Whether your bank does, and what limits apply, is set by the bank, not by Zelle.</p>
<p>What to know before you put Zelle on an invoice:</p>
<ul>
<li><strong>Payments are generally final.</strong> Once the money arrives it usually can't be reversed. That's good for you, but it also makes Zelle a favorite of scammers.</li>
<li><strong>No purchase protection.</strong> Banks state plainly that neither the bank nor Zelle protects the payer if goods or services aren't delivered. Some customers won't pay a business they don't know this way.</li>
<li><strong>No card payments.</strong> Zelle is bank to bank only.</li>
<li><strong>Limits vary by bank.</strong> Daily and monthly sending limits can be lower than a large invoice. A wire or ACH transfer may be needed for big amounts; see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</li>
<li><strong>Use a business email or phone.</strong> Register Zelle to a business email so payments arrive in the business account and the name the payer sees matches your invoice.</li>
</ul>

<h2>How to get paid with Cash App for business</h2>
<p>Cash App offers business accounts with a $Cashtag customers can pay. Like Venmo, there's no itemized invoice. Cash App's help center has listed a processing fee taken from each payment received on a business account; its newer help page gives 2.6% + $0.15 per payment from 1 June 2025, while older pages still show 2.75%. Check the fee shown in your own account activity.</p>
<p>If you want a real invoice that customers can pay with Cash App, Square Invoices (Cash App and Square are both owned by Block) can accept Cash App Pay. Our guide to <a href="/blog/square-invoice-fees">Square invoice fees</a> covers the cost of that route.</p>

<h2>Worked example: a $400 job paid four ways</h2>
<p>A dog groomer invoices a client $400.00 for a month of weekly visits. Here is what she keeps depending on how the client pays, using the rates above.</p>
<table><thead><tr><th>Payment method</th><th>Fee calculation</th><th>Fee</th><th>She receives</th></tr></thead><tbody>
<tr><td>Zelle to her business account</td><td>No Zelle fee (check your bank)</td><td>$0.00</td><td>$400.00</td></tr>
<tr><td>Venmo business profile</td><td>1.9% of $400 = $7.60, + $0.10</td><td>$7.70</td><td>$392.30</td></tr>
<tr><td>Cash App business account</td><td>2.6% of $400 = $10.40, + $0.15</td><td>$10.55</td><td>$389.45</td></tr>
<tr><td>Venmo personal, goods and services</td><td>2.99% of $400</td><td>$11.96</td><td>$388.04</td></tr>
</tbody></table>
<p>If she then uses Venmo instant transfer to move the $392.30 to her bank, she pays another 1.75%, which is $6.87, unless she waits for the free standard transfer. Those small amounts add up across a year of jobs.</p>

<h2>What to put on the invoice when clients pay by app</h2>
<p>The invoice does the work the apps don't. Include:</p>
<ul>
<li>Your business name and contact details, matching the name on your Venmo, Zelle or Cash App account.</li>
<li>A unique invoice number. Ask clients to put it in the payment note so you can match payments. The <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a simple format.</li>
<li>A clear description of the work, the amount and a due date.</li>
<li>A payment section listing each option: "Venmo: @YourBusiness", "Zelle: billing@yourbusiness.com", "Cash App: $YourBusiness", plus bank transfer or card if you offer them. Our guide to <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows how to lay this out.</li>
<li>A note on fees if you have a policy, for example offering the Zelle or bank option as the no-fee choice.</li>
</ul>
<p>After payment, mark the invoice paid and send a receipt. A <a href="/blog/payment-receipt-template">payment receipt template</a> keeps this quick.</p>

<h2>Venmo, Cash App and the 1099-K: what changed</h2>
<p>Payment apps report business payments on Form 1099-K. After years of planned changes, the One Big Beautiful Bill Act of 2025 restored the federal threshold to more than $20,000 in payments <em>and</em> more than 200 transactions in a calendar year, replacing the phase-down that would have reached $600. Some states require forms at lower amounts.</p>
<p>Three practical points:</p>
<ul>
<li>Not receiving a 1099-K doesn't make income tax-free. Report all business income whether or not a form arrives.</li>
<li>Payments between friends and family shouldn't be reported as business income. Keeping business on a business profile or account makes the split obvious.</li>
<li>Zelle has said it does not issue 1099-Ks because it doesn't hold the money; your bank records still show the income.</li>
</ul>
<p>Our full guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a> covers state rules and what to do if a form looks wrong. Tax rules change and this is general information, not tax advice.</p>

<h2>Which app should you offer?</h2>
<ul>
<li><strong>Offer Zelle</strong> if your clients are local, trust you already, and you want no fees.</li>
<li><strong>Offer a Venmo business profile</strong> if your customers are younger consumers who live in Venmo, and you are happy to pay around 2% for convenience and buyer confidence.</li>
<li><strong>Offer Cash App</strong> if your customers ask for it; otherwise it adds little over Venmo for most service businesses.</li>
<li><strong>Use a card processor or PayPal invoice</strong> for larger jobs, clients you don't know, or customers who want to pay by credit card. See <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</li>
</ul>

<h2>Next step</h2>
<p>Pick the two payment methods you most want clients to use, then build an invoice in the <a href="/invoice-generator">free invoice generator</a> with those handles in the payment section and a request to include the invoice number in the payment note. Save it as a draft and reuse it for every job.</p>
`,
  },
  {
    slug: "square-invoice-fees",
    title: "Square Invoice Fees (2026): Free vs Plus, ACH and Cards",
    description:
      "Current Square invoice fees in the US for cards, card on file, ACH and Afterpay on Square Free and Plus, with worked examples and tips to pay less per invoice.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["stripe-invoicing-guide", "how-to-accept-credit-card-payments", "how-to-send-paypal-invoice"],
    faqs: [
      {
        q: "How much does Square charge per invoice?",
        a: "Square doesn't charge to send an invoice on its free plan. When the customer pays by card online, Square's US help center lists 3.3% + 30 cents on Square Free and 2.9% + 30 cents on Square Plus. ACH bank payments are 1% with a $1 minimum. Check Square's pricing page because these rates change.",
      },
      {
        q: "Is Square Invoices free?",
        a: "Creating and sending invoices on Square's free plan has no monthly cost. You pay processing fees when invoices are paid through Square. Paid plans add features and lower some card rates for a monthly subscription.",
      },
      {
        q: "Does Square charge a fee for ACH invoice payments?",
        a: "Yes. Square's US help center lists ACH bank transfer payments on invoices at 1% with a $1 minimum, and the Plus plan adds a $10 cap per transaction. Square says ACH payments deposited into Square Checking have no fee.",
      },
      {
        q: "Can I pass Square fees on to customers?",
        a: "Surcharging credit cards is regulated by card networks and some US states, and surcharges generally can't be applied to debit cards. Many businesses instead build fees into prices or offer a discount for paying by bank transfer. Check your state's rules and Square's terms first.",
      },
      {
        q: "Is Square cheaper than PayPal for invoices?",
        a: "It depends on how customers pay. For US card payments, Square Free's 3.3% + 30 cents is higher than PayPal's 2.99% + 49 cents on invoices for most amounts, while Square Plus at 2.9% + 30 cents is lower. For bank payments, both charge about 1% with caps that differ by plan.",
      },
      {
        q: "How fast does Square deposit invoice payments?",
        a: "On Square's standard schedule, transfers to your bank are free and funds are usually available as soon as the next business day, or the second business day for payments taken late in the day. Instant and same-day transfers cost extra, listed at 1.95% per transfer on Square's US help center at the time of writing. Check your dashboard, because limits and fees change.",
      },
      {
        q: "Does Square return processing fees when I refund an invoice?",
        a: "No. Since 2023, Square has kept the original processing fee when a US seller issues a full or partial refund, although the refund itself has no extra charge. The refunded amount comes out of your Square balance, or your linked bank account if the balance is too low. Factor this into your cancellation policy, especially on large card-paid invoices.",
      },
      {
        q: "Does Square charge a fee for chargebacks?",
        a: "Square says it doesn't add a separate dispute fee. If a customer disputes a card payment, the amount is held while the dispute is reviewed. If you win, Square releases the funds, including the processing fee; if you lose, the fee isn't returned. Respond quickly with your invoice, signed estimate, photos and messages, since good evidence is your best chance of winning.",
      },
      {
        q: "Can I use Square Invoices outside the United States?",
        a: "Yes, in the countries where Square operates, such as Canada, the UK, Australia, Ireland, France, Spain and Japan, but each country has its own fees and features. The rates in this article are US rates only. Check Square's pricing page for your country before quoting fees to customers, and make sure your invoices show any local tax details your customers need.",
      },
      {
        q: "Can customers pay a Square invoice without a Square account?",
        a: "Yes. Customers receive an email, text or link that opens the invoice in their browser, where they can pay with the methods you've enabled, such as card or bank transfer, without creating an account. Turning on ACH gives them a cheaper option to choose. Make sure the email address or phone number is correct, and check the invoice page yourself before sending it to a new customer.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Square invoice fees in the US are 3.3% + 30¢ for card payments on Square Free and 2.9% + 30¢ on Square Plus. Card on file is 3.5% + 15¢, ACH bank transfer is 1% with a $1 minimum (capped at $10 on Plus), and Afterpay is 6% + 30¢. Sending invoices is free; you pay when the customer pays.</p>

<p>Square Invoices is popular with local service businesses because it ties invoicing to the same account as a card reader and point of sale. Before you rely on it, it's worth knowing exactly what each payment method costs. This guide breaks down current <strong>Square invoice fees</strong>, shows the maths on a real invoice, and explains when it makes sense to send your own invoice from our <a href="/invoice-generator?template=classic">free invoice generator</a> with Square as just one payment option.</p>

<h2>Square invoice fees in the US (October 2026)</h2>
<p>These rates come from <a href="https://squareup.com/help/us/en/article/5068" target="_blank" rel="noopener noreferrer">Square's US help center article on processing fees</a>, checked on 23 October 2026.</p>
<table><thead><tr><th>Payment type</th><th>Square Free</th><th>Square Plus</th></tr></thead><tbody>
<tr><td>Card paid online through an invoice</td><td>3.3% + 30¢</td><td>2.9% + 30¢</td></tr>
<tr><td>Card on file or manually entered</td><td>3.5% + 15¢</td><td>3.5% + 15¢</td></tr>
<tr><td>ACH bank transfer via invoice</td><td>1%, $1 minimum</td><td>1%, $1 minimum, $10 cap</td></tr>
<tr><td>ACH paid into Square Checking</td><td>No fee</td><td>No fee</td></tr>
<tr><td>Afterpay</td><td>6% + 30¢</td><td>6% + 30¢</td></tr>
<tr><td>Monthly subscription</td><td>$0</td><td>Paid plan; see Square's pricing page</td></tr>
</tbody></table>
<p>Square applies one rate to "online or invoices" card payments, so an invoice paid by card costs the same as an online checkout payment. Square has revised its plan structure and invoice rates more than once in recent years, so treat this table as a snapshot and check the help center before quoting fees to a client.</p>

<h2>What changed in Square's invoice pricing</h2>
<p>Older guides often quote 2.9% + 30¢ for every Square invoice, and that's no longer the whole story. Today the lower card rate is a feature of the paid plan, while the free plan pays 3.3% + 30¢. ACH pricing has also shifted: the free plan pays 1% with a $1 minimum, while the paid plan gets a $10 cap that makes large bank payments much cheaper.</p>
<p>If you set your prices using an older fee figure, a 0.4 percentage point difference is easy to miss. On $50,000 a year of card-paid invoices, that gap is $200.</p>

<h2>Worked example: an $800 Square invoice</h2>
<p>A handyman invoices $800.00 for a bathroom repair. Here's what he receives depending on how the customer pays.</p>
<table><thead><tr><th>Customer pays by</th><th>Fee calculation</th><th>Fee</th><th>He receives</th></tr></thead><tbody>
<tr><td>ACH (Free or Plus)</td><td>1% of $800</td><td>$8.00</td><td>$792.00</td></tr>
<tr><td>Card online, Square Plus</td><td>2.9% of $800 = $23.20, + $0.30</td><td>$23.50</td><td>$776.50</td></tr>
<tr><td>Card online, Square Free</td><td>3.3% of $800 = $26.40, + $0.30</td><td>$26.70</td><td>$773.30</td></tr>
<tr><td>Card on file</td><td>3.5% of $800 = $28.00, + $0.15</td><td>$28.15</td><td>$771.85</td></tr>
<tr><td>Afterpay</td><td>6% of $800 = $48.00, + $0.30</td><td>$48.30</td><td>$751.70</td></tr>
</tbody></table>
<p>Now take a $4,000 kitchen job. ACH on the free plan costs $40.00 (1%). On Plus, the same payment is capped at $10.00. A card payment on Free would cost $132.30 (3.3% of $4,000 is $132.00, plus $0.30). For larger invoices, steering customers to bank payment saves real money.</p>

<h2>Is Square Plus worth it for invoices?</h2>
<p>Plus lowers the online card rate by 0.4 percentage points and caps ACH at $10. Every $1,000 of card-paid invoices saves you $4.00 on Plus. To find your break-even point on card fees alone, divide the monthly subscription by 0.004. For example, if a plan cost $40 a month, you'd need $10,000 of card-paid invoices a month before the card saving alone covered it.</p>
<p>The ACH cap can change the picture. If you invoice large jobs and customers pay by bank, a single $6,000 ACH payment costs $60 on Free and $10 on Plus. Add up a typical month's ACH payments, compare both totals, and include any Plus features you would actually use, such as extra invoice customization or automation. Square offers trials of paid plans, so you can test it against a real month.</p>

<h2>How to lower your Square invoice fees</h2>
<ul>
<li><strong>Turn on ACH for invoices</strong> and mention it in your invoice note. Many customers will pay by bank if they're asked.</li>
<li><strong>Use Square Checking</strong> if it suits you, since Square says ACH payments deposited there have no fee.</li>
<li><strong>Avoid card-on-file charges</strong> for large one-off jobs; they carry the highest card rate.</li>
<li><strong>Think twice about Afterpay</strong> on low-margin work. At 6% + 30¢, it can cost more than the profit on a small job.</li>
<li><strong>Take deposits.</strong> Splitting a big job into a deposit and a final payment doesn't reduce percentage fees, but it reduces the risk of a large card dispute. See our guide on <a href="/blog/deposit-invoice">deposit invoices</a>.</li>
<li><strong>Offer a bank transfer option outside Square.</strong> Listing your bank details on the invoice gives customers a no-fee route. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows what to include.</li>
</ul>

<h2>Square vs PayPal vs Stripe on a $1,000 card invoice</h2>
<table><thead><tr><th>Provider (US)</th><th>Card rate on invoices</th><th>Fee on $1,000</th></tr></thead><tbody>
<tr><td>Square Plus</td><td>2.9% + 30¢</td><td>$29.30</td></tr>
<tr><td>PayPal invoicing</td><td>2.99% + $0.49</td><td>$30.39</td></tr>
<tr><td>Stripe Invoicing Starter</td><td>2.9% + 30¢, plus 0.4% invoicing fee</td><td>$33.30</td></tr>
<tr><td>Square Free</td><td>3.3% + 30¢</td><td>$33.30</td></tr>
</tbody></table>
<p>The Stripe figure is $29.30 in card fees plus $4.00 for Stripe Invoicing. The differences are small per invoice. Bigger factors are which payment methods your customers will use and which tools you already have. Our guides to <a href="/blog/stripe-invoicing-guide">Stripe invoices</a> and <a href="/blog/how-to-send-paypal-invoice">PayPal invoices</a> go into each option.</p>

<h2>How to send a Square invoice, step by step</h2>
<ol>
<li>In the Square Dashboard or app, open Invoices and choose to create a new invoice.</li>
<li>Add the customer, or create them with an email address so Square can send the invoice.</li>
<li>Add line items, either from your item library or as custom amounts, and apply sales tax where it's due.</li>
<li>Choose how the customer can pay. Make sure bank transfer (ACH) is switched on if you want the cheaper option to appear.</li>
<li>Set the due date, and decide whether to request a deposit or split the invoice into a payment schedule.</li>
<li>Add a message, terms or attachments such as a signed estimate.</li>
<li>Send it by email or text, or copy the invoice link.</li>
</ol>
<p>Square records the payment against the invoice automatically, and you can set reminders before and after the due date. If a customer pays you some other way, mark the invoice as paid so your reports stay accurate.</p>

<h2>Other costs that affect what you keep</h2>
<p>The processing rate isn't the only thing that reduces your take-home amount. Before you decide Square is the cheapest option, look at:</p>
<ul>
<li><strong>Payout speed.</strong> Standard transfers to your bank are free; instant or same-day transfers carry a fee. Check the current rate in your Square Dashboard before using them routinely.</li>
<li><strong>Disputes.</strong> If a customer disputes a card payment, the money can be held while the dispute is reviewed. Clear invoices, signed estimates and photos of completed work make disputes easier to answer.</li>
<li><strong>Refunds.</strong> Read Square's current refund terms to see how processing fees are treated, so a refunded job doesn't cost more than you expect.</li>
<li><strong>Paid-plan subscription.</strong> If you upgrade for a lower rate, the monthly fee is a cost every month, including slow months.</li>
</ul>
<p>Square's fees are a deductible business expense in most tax systems. Record each invoice at its full amount as income and the fee as an expense, rather than recording only the net deposit.</p>

<h2>When to send your own invoice instead</h2>
<p>Square Invoices is a good fit if you already use Square for in-person payments. A separate invoice makes more sense when:</p>
<ul>
<li>Commercial customers need a PO number, supplier ID, or a specific layout.</li>
<li>You want one invoice format for every job, whether paid by Square, bank transfer or check.</li>
<li>You need line items such as materials, labour hours and sales tax shown in a particular way. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps check the figures.</li>
</ul>
<p>In that case, create the invoice in the <a href="/invoice-generator">invoice generator</a>, download the PDF, and add a Square payment link or checkout link for the amount due. Keep in mind our generator produces the PDF only; it doesn't process the payment or email the invoice, so you send it and Square handles the card payment.</p>
<p>Card acceptance rules, including surcharging, are covered in our guide on <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<h2>Next step</h2>
<p>Look at the last three months of your Square deposits and work out how much you paid in fees by method. If most of it came from card payments on large invoices, add ACH and bank details to your next invoice and see how many customers switch.</p>
`,
  },
  {
    slug: "wise-vs-payoneer",
    title: "Wise vs Payoneer: Fees, FX and Who Each Suits (2026)",
    description:
      "Wise vs Payoneer for freelancers: how each charges to receive and convert money, receiving accounts, marketplace support, and availability in Pakistan and India.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["receive-payment-from-abroad-pakistan", "invoice-international-clients", "fiverr-upwork-invoice"],
    faqs: [
      {
        q: "Which is cheaper, Wise or Payoneer?",
        a: "For converting money, Wise is often cheaper because it uses the mid-market exchange rate and shows a separate fee, while Payoneer's conversion and withdrawal fees are percentage-based and vary by region. The real answer depends on your country, currency and how you get paid, so compare a quote for your actual amount on both.",
      },
      {
        q: "Can I use Wise in Pakistan?",
        a: "Wise can send money to Pakistani bank accounts from many countries, but its services for people living in Pakistan are limited, and Wise's own help pages say you can't currently send money from PKR. Check Wise's availability page for your situation before relying on it for client payments.",
      },
      {
        q: "Does Payoneer work in Pakistan and India?",
        a: "Yes. Payoneer is widely used by freelancers in both countries and supports withdrawals to local bank accounts. In Pakistan it is also the main way many freelancers receive Fiverr and Upwork earnings.",
      },
      {
        q: "Can Indian freelancers receive USD with Wise?",
        a: "Wise announced international account details for Indian businesses and freelancers in 2025, letting clients pay in several currencies including USD. The money is converted and paid into your Indian bank account rather than held as a balance. Check Wise's India pages for current limits and fees.",
      },
      {
        q: "Do I still need an invoice if I use Wise or Payoneer?",
        a: "Yes. Wise and Payoneer move the money, but your client still needs an invoice for their records, and you need one for your own tax records and, in some countries, for bank export documentation.",
      },
      {
        q: "Does Payoneer charge an annual fee?",
        a: "It can. At the time of writing, Payoneer's pricing page lists an annual account fee of $29.95 that applies only if your account receives less than $6,000 in any 12 consecutive months. Some older Payoneer pages cite a lower threshold, and fees can vary by region and account type. Check the Fees section in your own account for the terms that apply to you.",
      },
      {
        q: "How long do Wise and Payoneer payments take to arrive?",
        a: "Local payments into receiving accounts often arrive within a day or two, while SWIFT wires can take longer, depending on the currency, the banks involved and any compliance checks. Withdrawing to your own bank adds more time, often up to a few business days. Both providers show estimated delivery times in their apps, so ask clients to pay a few days before the due date.",
      },
      {
        q: "Can I withdraw Upwork earnings to Wise or Payoneer?",
        a: "Payoneer is a built-in Upwork withdrawal method for freelancers outside the US and India, according to Upwork's help center, and Payoneer adds its own fees. Some freelancers instead add Wise's local account details as a bank withdrawal method where Upwork supports that currency and country. Upwork's fees depend on the method and your tax address, so check its help center before choosing.",
      },
      {
        q: "Are Wise and Payoneer safe to use for client payments?",
        a: "Both are established payment companies that are regulated in the countries where they operate and protect accounts with identity checks and two-factor authentication. Neither is a traditional bank in most countries, so money held with them may not have the same deposit protection as a bank account. Keep working balances modest, withdraw regularly, and download statements in case your account is ever limited.",
      },
      {
        q: "Can a client pay me by card through Wise or Payoneer?",
        a: "Payoneer lets you send payment requests that clients can pay by card or bank debit, for a higher fee than a bank transfer to your receiving account. Wise is built mainly around bank transfers, though some Wise Business accounts in certain countries can accept card payments through payment links. Fees vary, so compare the cost with a card link from another provider before offering cards.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Wise vs Payoneer choice, Wise usually wins on exchange rates because it converts at the mid-market rate and charges a visible fee, while Payoneer wins on marketplace integration, especially with Fiverr, Upwork and Amazon. Availability matters most: Payoneer works for freelancers in Pakistan and India, while Wise is limited for Pakistan residents.</p>

<p>Both services let freelancers and small businesses receive money from foreign clients through local account details instead of costly international wires. They charge in different ways, and they serve different countries better. This comparison covers fees, receiving accounts and availability, and how to set up invoices for either. You can create an invoice with your Wise or Payoneer details in our <a href="/invoice-generator?template=corporate">free invoice generator</a>.</p>

<h2>Wise vs Payoneer at a glance</h2>
<table><thead><tr><th></th><th>Wise</th><th>Payoneer</th></tr></thead><tbody>
<tr><td>Exchange rate</td><td>Mid-market rate with a separate, upfront fee</td><td>Conversion fee built into percentage charges</td></tr>
<tr><td>Receiving accounts</td><td>Local account details in several currencies, where available</td><td>Receiving accounts in several currencies</td></tr>
<tr><td>Receiving fees</td><td>Many local payments free; some wire types carry a fixed fee</td><td>Free in your local currency; a fixed fee or up to about 1% for others, varying by region</td></tr>
<tr><td>Withdrawal to local bank</td><td>Conversion fee shown before you convert</td><td>Percentage fee when converting, flat fee for same-currency withdrawals in some countries</td></tr>
<tr><td>Marketplace payouts</td><td>Supported by some platforms as a bank account</td><td>Built-in payout option on many marketplaces</td></tr>
<tr><td>Pakistan residents</td><td>Limited</td><td>Widely used</td></tr>
<tr><td>India residents</td><td>International account details launched 2025</td><td>Widely used</td></tr>
<tr><td>Card for spending</td><td>Debit card in many countries</td><td>Prepaid or debit card in some countries</td></tr>
</tbody></table>
<p>Fees and features differ by country and account type, and both companies change pricing. Check <a href="https://wise.com/pricing" target="_blank" rel="noopener noreferrer">Wise's pricing page</a> and <a href="https://www.payoneer.com/legal/fees/" target="_blank" rel="noopener noreferrer">Payoneer's official fees page</a> for your country before deciding.</p>

<h2>How Wise charges</h2>
<p>Wise's model is simple to explain. When you convert money, you get the mid-market exchange rate, the one you see on financial news sites, and Wise shows a separate fee that depends on the currency pair and amount. You see both before you confirm.</p>
<p>For receiving money, Wise gives eligible customers local account details: for example a US routing and account number for USD, a UK sort code for GBP or an IBAN for EUR. Clients pay as if they were paying a local supplier. Wise lists receiving fees by currency and payment type; local payments in many currencies are free to receive, while some, such as USD wires over SWIFT, carry a fixed fee.</p>
<p>Wise suits you if you:</p>
<ul>
<li>Live in a country where Wise offers full account features.</li>
<li>Invoice clients directly, not through a marketplace.</li>
<li>Convert money often and want a clear view of the rate you're getting.</li>
</ul>

<h2>How Payoneer charges</h2>
<p>Payoneer's fees are percentage-based and depend on where you live and which currencies you use. Its official fee page lists receiving funds in your primary local currency as free, with a fixed fee or around 1% for other currencies depending on the amount. Withdrawing to a bank account in a different currency, which involves conversion, carries a percentage fee that Payoneer gives as a range. Same-currency withdrawals in some countries are a flat fee instead.</p>
<p>Payoneer can also let clients pay you by card or bank debit through a payment request, which costs more than a bank transfer to your receiving account. Some accounts have had an annual fee when activity was low; check the fee page for your country.</p>
<p>Payoneer suits you if you:</p>
<ul>
<li>Earn through marketplaces such as Fiverr or Upwork that pay out to Payoneer.</li>
<li>Live in a country where Wise has limited features, such as Pakistan.</li>
<li>Want one account for several marketplaces and direct clients.</li>
</ul>

<h2>Worked example: receiving $2,000 from a US client</h2>
<p>Exact fees depend on your country, currency and account, so the rates below are <em>illustrative assumptions</em>, not quotes. The point is to show how fees stack up so you can run the same calculation with real numbers from each provider.</p>
<table><thead><tr><th>Step</th><th>Provider A (receiving fee + conversion markup)</th><th>Provider B (free local receipt + conversion fee)</th></tr></thead><tbody>
<tr><td>Client pays</td><td>$2,000.00</td><td>$2,000.00</td></tr>
<tr><td>Receiving fee</td><td>1% = $20.00</td><td>$0.00</td></tr>
<tr><td>Balance</td><td>$1,980.00</td><td>$2,000.00</td></tr>
<tr><td>Conversion cost</td><td>2% of $1,980 = $39.60</td><td>0.6% of $2,000 = $12.00</td></tr>
<tr><td>Value reaching your bank (in USD terms)</td><td>$1,940.40</td><td>$1,988.00</td></tr>
</tbody></table>
<p>The difference here is $47.60, about 2.4% of the invoice. On $30,000 of annual client income, a gap of that size would be worth around $714 a year, enough to justify an hour of comparing quotes. To compare fairly, ask each provider for the amount you would receive in your local currency for the same transfer on the same day.</p>

<h2>Availability for Pakistan and India freelancers</h2>
<h3>Pakistan</h3>
<p>Payoneer is the default for many Pakistani freelancers. It supports withdrawals to local bank accounts in PKR and has partnerships with local banks. Fiverr pays sellers in Pakistan through Payoneer, and Upwork supports it as a payment method.</p>
<p>Wise is different. Clients abroad can use Wise to send money to a Pakistani bank account in PKR, but Wise's services for people living in Pakistan are limited, and its help centre states that you can't currently send money from PKR. That makes Wise a route for your client to pay you, rather than a full account for you to hold. PayPal does not operate for Pakistan residents at all. Our guide on how to <a href="/blog/receive-payment-from-abroad-pakistan">receive payment from abroad in Pakistan</a> covers every option, including direct bank remittances, which affect how your export income is taxed.</p>
<h3>India</h3>
<p>Both work in India. Wise announced international account details for Indian businesses and freelancers in 2025, letting foreign clients pay in currencies including USD, with the money converted and paid into your Indian bank account. Under Indian rules you generally can't hold the foreign currency in Wise. Payoneer also supports Indian freelancers and marketplaces. Ask either provider for the inward remittance documentation your bank or accountant needs, such as a foreign inward remittance certificate.</p>

<h2>Which should you choose?</h2>
<ul>
<li><strong>Mostly marketplace income, any country:</strong> Payoneer, because payouts are built in.</li>
<li><strong>Mostly direct clients, country with full Wise support:</strong> Wise, for the exchange rate and simple local account details.</li>
<li><strong>Pakistan:</strong> Payoneer or a direct bank remittance to your own bank. Use Wise only as a way for clients to send PKR to you.</li>
<li><strong>India:</strong> Compare both on a real amount; many freelancers keep both.</li>
<li><strong>Large invoices:</strong> A direct bank wire may beat both. See <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</li>
</ul>
<p>There is no rule against having both, and many freelancers do: Payoneer for marketplace earnings, Wise or a bank account for direct clients.</p>

<h2>How to put Wise or Payoneer details on an invoice</h2>
<ol>
<li>Copy the receiving account details exactly from the app: account holder name, bank name, account number and routing code, or IBAN and SWIFT/BIC for the relevant currency.</li>
<li>Name the currency clearly, for example "Pay in USD to:" so the client doesn't send the wrong currency.</li>
<li>State that the client should cover their own transfer fees, if that's your policy, and that the invoice is due in full.</li>
<li>Add the invoice number as the payment reference.</li>
<li>Save it in your invoice template so every invoice uses the same details.</li>
</ol>
<p>Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows a layout clients' payment teams find easy to use, and <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and tax points. If you work through marketplaces, see <a href="/blog/fiverr-upwork-invoice">Fiverr and Upwork invoices</a> for how those platforms handle invoicing.</p>

<h2>Records to keep, whichever you choose</h2>
<p>Whatever you use, keep three things together for every client payment: your invoice, the provider's transaction record showing the amount received and fees, and the bank credit when the money reaches your local account. Download monthly statements from Wise or Payoneer rather than relying on the app's history, since accounts can be closed or limited. If your country gives tax relief on export income, your bank's documentation, such as a PRC in Pakistan or a FIRC in India, may matter as much as the invoice. Rules differ by country and change often, so confirm what your tax adviser needs.</p>

<h2>Watch out for payment scams</h2>
<p>Fake "client" payments are common with both services. Be wary of anyone who overpays and asks for a refund of the difference, or who sends screenshots of payments that haven't arrived. Only treat an invoice as paid when the money shows in your own account. Our guide to <a href="/blog/invoice-scams">invoice scams</a> lists the common patterns.</p>

<h2>Next step</h2>
<p>Get a real quote from both providers for your typical invoice amount, then put the winner's receiving details into a reusable invoice in the <a href="/invoice-generator">invoice generator</a>. Keep a copy of every invoice alongside the matching deposit so your records line up at tax time.</p>
`,
  },
  {
    slug: "receive-payment-from-abroad-pakistan",
    title: "Receive Payment From Abroad in Pakistan (2026 Guide)",
    description:
      "How to receive payment from abroad in Pakistan as a freelancer: bank remittances, PRC, Payoneer, Wise limits, PayPal status, foreign currency retention and tax.",
    category: "payments",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: ["invoice-international-clients", "wise-vs-payoneer", "sales-tax-invoice-pakistan"],
    faqs: [
      {
        q: "What is the best way to receive payment from abroad in Pakistan?",
        a: "For direct clients, a bank wire to your own Pakistani bank account is usually the cleanest route because the bank documents it as export proceeds. For marketplace earnings, Payoneer is the most widely used option. Compare fees on your actual invoice amount, and keep the bank's remittance documents for tax.",
      },
      {
        q: "Is PayPal available in Pakistan?",
        a: "No. People living in Pakistan still can't open a PayPal account to receive payments, and there is no confirmed launch date. Be careful with workarounds that use someone else's account abroad, as they can break PayPal's terms and cause problems with tax and banking documentation.",
      },
      {
        q: "What is a PRC for freelancers?",
        a: "A Proceeds Realization Certificate (PRC) is a bank document confirming that foreign currency export proceeds were received in Pakistan through banking channels. Freelancers and IT exporters use it to show that income came from exports of services, which matters for the reduced tax rate. Ask your bank how to request one for each remittance.",
      },
      {
        q: "How much tax do freelancers pay on foreign income in Pakistan?",
        a: "Export proceeds from IT and IT-enabled services received through banking channels have been taxed under a reduced final tax regime: 0.25% for PSEB-registered exporters and 1% otherwise, subject to conditions. Budget coverage in June 2026 reported the concession extended to 30 June 2029. Confirm the current rate with the FBR or a tax adviser before filing.",
      },
      {
        q: "Can freelancers keep dollars in a Pakistani bank account?",
        a: "Yes, within State Bank of Pakistan limits. Current SBP rules let freelancers and IT exporters retain the higher of USD 5,000 a month or 50% of export proceeds in an Exporters' Special Foreign Currency Account, with the rest converted to PKR. Your bank can confirm how it applies the rule.",
      },
      {
        q: "What documents do I need to open a freelancer account in Pakistan?",
        a: "Banks usually ask for your CNIC and some proof of freelance work, such as a marketplace profile, client contract, invoices or earnings statements. Many banks let you apply online for a freelancer digital account with a linked foreign currency account. Exact requirements vary by bank, so check its website or call a branch before applying, and keep your details consistent with your CNIC.",
      },
      {
        q: "Should I register with PSEB as a freelancer?",
        a: "If you earn from exports of IT or IT-enabled services, it can matter, because the reduced 0.25% final tax rate applies to PSEB-registered exporters, while others are taxed at 1%. Registration with the Pakistan Software Export Board is done online and must be renewed. Check PSEB's website for current requirements and any fee, and confirm the tax treatment with the FBR or a tax adviser.",
      },
      {
        q: "Do I still need to file a tax return if the bank deducts tax on my export proceeds?",
        a: "Usually yes. Even when tax on export proceeds is final and deducted at source, filing a return keeps you on the FBR's Active Taxpayers List, which affects the withholding rates applied to many other transactions. Filing also creates a record of your income for visas, loans and property purchases. Check current FBR guidance or ask a tax adviser about your filing obligations.",
      },
      {
        q: "Can I receive freelance payments in a Roshan Digital Account?",
        a: "Generally no. Roshan Digital Accounts are designed for non-resident Pakistanis and people of Pakistani origin living abroad. If you live in Pakistan, use a freelancer account or an exporters' foreign currency account with a local bank instead, which is set up to receive export proceeds and provide the documentation you need, such as a PRC. Your bank can confirm which account type fits you.",
      },
      {
        q: "Should I invoice foreign clients in US dollars or Pakistani rupees?",
        a: "Most freelancers invoice foreign clients in US dollars or the client's own currency, because that's what the client expects to pay and it keeps the amount fixed on their side. Invoicing in PKR shifts the currency risk to the client and can confuse their accounts team. Whatever you choose, state the currency clearly, match it in your bank details and keep the bank's PRC with each invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To receive payment from abroad in Pakistan, most freelancers use a bank wire into their own Pakistani bank account, Payoneer for marketplace and client payments, or a remittance service the client uses to send PKR. PayPal is not available to Pakistan residents. Routing income through banking channels and keeping each PRC matters for the reduced tax rate on IT export income.</p>

<p>Getting paid by a client in the US, UK or Gulf is easy once you have the right set-up, and expensive or risky when you don't. This guide explains each way to <strong>receive payment from abroad in Pakistan</strong>, what documentation your bank provides, how foreign currency retention works, and how export income is taxed. It also covers the invoice your client will expect: you can make one in PKR or USD with our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>.</p>

<h2>Your options at a glance</h2>
<table><thead><tr><th>Method</th><th>Best for</th><th>Speed</th><th>Main costs</th><th>Documentation</th></tr></thead><tbody>
<tr><td>Bank wire (SWIFT) to your Pakistani account</td><td>Direct clients, larger invoices</td><td>1 to 5 working days</td><td>Sender's bank fee, intermediary bank charges, conversion</td><td>Bank credit advice and PRC</td></tr>
<tr><td>Payoneer</td><td>Fiverr, Upwork and other marketplaces; direct clients</td><td>Usually quick once set up</td><td>Receiving and withdrawal or conversion fees</td><td>Payoneer statements; bank credit for withdrawals</td></tr>
<tr><td>Client sends PKR via Wise or a remittance service</td><td>Clients who already use these services</td><td>Often same or next day</td><td>Paid mostly by the sender</td><td>Bank credit; check how it is classified</td></tr>
<tr><td>Marketplace payout to a local bank</td><td>Platforms that support Pakistan payouts</td><td>Varies</td><td>Platform withdrawal fees</td><td>Platform statements</td></tr>
<tr><td>PayPal</td><td>Not available to Pakistan residents</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
</tbody></table>

<h2>Option 1: a bank remittance straight to your Pakistani account</h2>
<p>A direct wire is the most traditional route and often the best for regular direct clients. You give the client your bank details; they send a SWIFT transfer; your bank credits your account and records it as foreign inward remittance.</p>
<p>What to put on your invoice so the payment arrives first time:</p>
<ul>
<li>Account title exactly as your bank holds it.</li>
<li>Bank name and branch, with the bank's SWIFT/BIC code.</li>
<li>Your IBAN (24 characters, starting PK).</li>
<li>Currency to send, for example USD.</li>
<li>Purpose of payment, such as "IT services export, invoice INV-2026-018". A clear purpose helps the bank classify the money correctly.</li>
</ul>
<p>Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows how to lay these out, and <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and payment-term choices.</p>
<h3>PRC and encashment certificates</h3>
<p>When foreign currency arrives as payment for exported services, your bank can issue a <strong>Proceeds Realization Certificate (PRC)</strong> confirming the export proceeds were received through banking channels. For home remittances (money sent by family, not payment for work), banks issue an <strong>encashment certificate</strong> instead. The difference matters: export proceeds are what qualify for the reduced tax regime on IT export income, so make sure your bank codes client payments as export of services. Ask your bank for a PRC for each payment, or a periodic statement if it offers one, and keep them with the matching invoice.</p>
<h3>Freelancer accounts and foreign currency retention</h3>
<p>Many Pakistani banks offer freelancer digital accounts that you can open online with limited paperwork, with an exporters' foreign currency account opened alongside a PKR account. Under the <a href="https://www.sbp.org.pk/epd/2026/FECL6-Annexure.pdf" target="_blank" rel="noopener noreferrer">State Bank of Pakistan's current instructions</a>, freelancers and IT exporters can retain the higher of USD 5,000 a month or 50% of their export proceeds in an Exporters' Special Foreign Currency Account. The rest is converted to PKR. Keeping some dollars can help if you pay for foreign software subscriptions or want to avoid converting at a poor rate.</p>

<h2>Option 2: Payoneer</h2>
<p>Payoneer is the most widely used service among Pakistani freelancers. Fiverr pays Pakistani sellers through Payoneer, and Upwork supports it. Payoneer also gives you receiving account details in several currencies, so a direct client can pay you as if paying a local supplier in the US, UK or Europe.</p>
<p>You then withdraw to your Pakistani bank account in PKR. Payoneer charges for some receiving and for conversion or withdrawal, and its fees vary by account, so check the fee schedule shown in your own account. Withdrawals land as a credit in your bank account; ask your bank how it classifies Payoneer withdrawals and whether it can issue a PRC for them, because practice can vary. For a detailed comparison, see <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a>.</p>

<h2>Option 3: Wise and remittance services</h2>
<p>Wise does not offer full accounts for people living in Pakistan, and its help centre says you can't currently send money from PKR. What does work is the other direction: a client abroad can use Wise to send PKR to a personal Pakistani bank account using your name and IBAN. Wise's help pages advise against sending to certain "express" account types and note that business accounts in Pakistan may not be supported, so check before you give the details.</p>
<p>Other remittance services work the same way. The downside is classification: a payment that arrives through a remittance channel can look like a home remittance rather than export proceeds. If you rely on the reduced IT export tax rate, talk to your bank and tax adviser about whether these payments will be documented the way you need.</p>

<h2>Is PayPal available in Pakistan?</h2>
<p>No. As of October 2026, PayPal still does not let Pakistan residents open accounts to receive payments, and there is no announced launch. Avoid using a relative's or friend's PayPal account abroad: it can break PayPal's terms, leaves the income outside your own banking records, and can cause problems with tax documentation. If a client insists on PayPal, offer Payoneer, a card payment link through a service that supports Pakistan, or a bank wire instead.</p>

<h2>Worked example: a USD 1,500 invoice paid by wire</h2>
<p>Ayesha, a PSEB-registered developer in Lahore, invoices a US client USD 1,500 for a month of work. The client's bank charges the client its own wire fee, and an intermediary bank deducts USD 15 on the way. Her bank receives USD 1,485.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Invoice total</td><td>USD 1,500.00</td></tr>
<tr><td>Intermediary bank deduction</td><td>USD 15.00</td></tr>
<tr><td>Amount credited</td><td>USD 1,485.00</td></tr>
<tr><td>Can be retained in foreign currency (higher of USD 5,000 a month or 50%)</td><td>Up to USD 1,485.00</td></tr>
</tbody></table>
<p>Because USD 5,000 a month is higher than 50% of USD 1,485 (and this is her only remittance that month), she can keep the full USD 1,485 in her foreign currency account under the retention rule, or convert some to PKR. If she converts it all at an illustrative rate of PKR 280 per dollar, she receives PKR 415,800. Under the reduced regime, final tax at 0.25% on USD 1,485 would be about USD 3.71 (PKR 1,039.50 at the same rate). Her invoice should state the full USD 1,500 so the client's records match; the USD 15 shortfall is a bank charge for her to record, unless her terms say the client covers all charges.</p>

<h2>How freelancer IT export income is taxed</h2>
<p>Pakistan taxes export proceeds from IT and IT-enabled services under a reduced final tax regime when the money comes through banking channels. Reporting and guidance from the FBR and the financial press describe:</p>
<ul>
<li><strong>0.25%</strong> final tax on export proceeds for exporters registered with the Pakistan Software Export Board (PSEB), subject to conditions such as bringing proceeds into Pakistan through banking channels.</li>
<li><strong>1%</strong> for exporters who are not PSEB-registered.</li>
<li>The concession was due to end on 30 June 2026; budget coverage in June 2026 reported it extended to 30 June 2029.</li>
<li>Income from local Pakistani clients is taxed differently, under the normal rules.</li>
</ul>
<p>Banks often deduct the final tax at the time proceeds are realised, but the conditions, and whether you must still file a return (you usually should), are set by the law and FBR guidance. Check current rules on the <a href="https://www.fbr.gov.pk" target="_blank" rel="noopener noreferrer">FBR website</a> or with a tax adviser. Tax rules change often, and this is general information, not professional tax advice.</p>
<p>If you also have local clients and are registered for sales tax on services, your invoices to them have different requirements; see our guide to the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a>. For the move towards e-invoicing, see <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing in Pakistan</a>.</p>

<h2>What your invoice to a foreign client should show</h2>
<ul>
<li>Your name or business name, address in Pakistan, email and, if you have one, your NTN.</li>
<li>The client's legal name and address.</li>
<li>A unique invoice number and date. The <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep a clean sequence.</li>
<li>A description of the services, period covered and amount in the agreed currency.</li>
<li>Payment terms and a due date.</li>
<li>Payment instructions for your chosen route: bank wire details or Payoneer receiving details.</li>
<li>A note on who pays transfer charges, for example "All bank charges outside Pakistan to be paid by the remitter."</li>
</ul>
<p>The <a href="/invoice-generator?template=corporate">corporate invoice template</a> works well for foreign companies' accounts teams. Our generator creates the PDF in your browser; it doesn't send invoices, process payments or submit anything to the FBR.</p>

<h2>Next step</h2>
<p>Open a freelancer account with your bank if you don't have one, ask how it issues PRCs, and set up a reusable invoice with those bank details in the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>. Keep each invoice, the bank credit advice and the PRC together in one folder per month.</p>
`,
  },
  {
    slug: "fiverr-upwork-invoice",
    title: "Fiverr Invoice and Upwork Invoice: How to Get Them",
    description:
      "How to download a Fiverr invoice or Upwork invoice, what each platform gives freelancers, when clients need your own invoice, and which tax records to keep.",
    category: "freelancing",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["freelancer-invoice-guide", "wise-vs-payoneer", "1099-k-threshold"],
    faqs: [
      {
        q: "Does Fiverr give sellers an invoice for completed orders?",
        a: "No. Fiverr's help center says freelancers don't receive invoices for completed orders. Buyers get invoices from Fiverr, and sellers use earnings statements and financial documents from the Earnings page for tax records. Sellers do receive invoices for Fiverr services they buy, such as Seller Plus or Fiverr Ads.",
      },
      {
        q: "How do I download invoices on Upwork?",
        a: "Upwork's help center directs you to Reports, then Transaction History, where you can open a transaction's reference ID to view its invoice or receipt. Bulk downloads work in 30-day windows of up to 50 invoices. On client accounts, only owners and admins with finance permissions can access invoices.",
      },
      {
        q: "Can I send my own invoice to a Fiverr or Upwork client?",
        a: "You can send a document for the client's records that matches the platform payment, clearly marked as paid through the platform. Do not ask for or accept payment outside the platform for work that started there, as both Fiverr and Upwork prohibit it and it can get your account suspended.",
      },
      {
        q: "Do I pay tax on Fiverr and Upwork income?",
        a: "Yes. Platform income is taxable in almost every country, whether or not you receive a tax form. US freelancers may receive a Form 1099-K from the platform above the federal threshold, and should report all income regardless.",
      },
      {
        q: "What records should a Fiverr or Upwork freelancer keep?",
        a: "Keep the annual earnings statement or transaction reports, platform fee records, withdrawal records from Payoneer or your bank, and any tax forms. If clients need invoices, keep copies in a clear numbering sequence alongside the matching order or contract.",
      },
      {
        q: "How much does Fiverr take from sellers?",
        a: "Fiverr's help center says freelancers receive 80% of the client's cleared payment for a completed order, which works out to a 20% service fee. In your books, record the full order amount as income and the fee as a business expense, rather than recording only what you withdraw. Fees and terms can change, so check Fiverr's help pages for the current figures.",
      },
      {
        q: "When can I withdraw my Fiverr earnings?",
        a: "Revenue from a completed order becomes available after a clearance period. At the time of writing, Fiverr's help center lists 14 days for most sellers and 7 days for Seller Plus, Top Rated and Pro freelancers, and some eligible sellers can use Early Payout for a fee. Once funds clear, you can withdraw them using the payout methods available in your country, such as Payoneer or a bank transfer.",
      },
      {
        q: "What does Upwork charge to withdraw earnings?",
        a: "It depends on the method and your country. At the time of writing, Upwork's help center lists $0.99 per direct to local bank withdrawal and $50 per US dollar wire, while direct to US bank is free with a US tax address. From September 1, 2026, a $2.99 fee applies to direct to US bank withdrawals for users with a tax address outside the US. Payoneer adds its own fees.",
      },
      {
        q: "How does a buyer get their company name on a Fiverr invoice?",
        a: "Buyers can usually add billing details, such as a company name and address, in the billing settings of their Fiverr account, and these then appear on invoices for future orders. Invoices already issued may not update automatically, so an older invoice may need a request to Fiverr Customer Support. As the seller, you can point the client to these settings rather than creating a separate invoice.",
      },
      {
        q: "Can my client use a Fiverr or Upwork invoice for their business expense records?",
        a: "In most cases, yes. The invoice issued through the platform documents what the client paid and is commonly used for bookkeeping and expense records. Whether it also works as a VAT or GST invoice depends on the client's country and how the platform treats the sale. If their accountant needs something different, the client should check the platform's billing settings and help pages first.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> On Fiverr, buyers get invoices from Fiverr, but sellers don't get invoices for completed orders; you download earnings statements and tax documents from the Earnings page instead. On Upwork, go to Reports and then Transaction History to view and download invoices and receipts. If a client needs an invoice with your details, you can create one that matches the platform payment.</p>

<p>Marketplace freelancers often get the same request from a client's accounts team: "Can you send us an invoice?" The answer depends on the platform, because a <strong>Fiverr invoice</strong> and an <strong>Upwork invoice</strong> work quite differently. This guide shows what each platform generates, where to download it, when your own invoice makes sense, and which records to keep for tax. You can build a matching invoice in our <a href="/invoice-generator?template=minimal">free invoice generator</a> when a client asks for one.</p>

<h2>How Fiverr invoices work</h2>
<p>Fiverr acts as the intermediary. The buyer pays Fiverr, and Fiverr issues the buyer an invoice for the order. According to <a href="https://help.fiverr.com/hc/en-us/articles/37554374533649-Invoices" target="_blank" rel="noopener noreferrer">Fiverr's help center article on invoices</a>, freelancers don't receive invoices for completed orders; they receive invoices only for Fiverr services they pay for, such as Seller Plus or Fiverr Ads. Fiverr's commission is withheld from your earnings before release, and Fiverr doesn't issue an invoice for that deduction.</p>
<h3>Where buyers download Fiverr invoices</h3>
<ol>
<li>On the Fiverr website (not the mobile app), open Billing and Payments, then Billing History.</li>
<li>Filter or search for the order.</li>
<li>Download invoices one at a time, or select several and download a CSV report or a zip of PDFs.</li>
</ol>
<p>Fiverr says invoices issued before May 2021 aren't available online and have to be requested from Customer Support. If your client asks you for an invoice, the first step is often simply pointing them to their own Billing History.</p>
<h3>What sellers download instead</h3>
<p>Sellers use the Earnings page. Under Financial documents you can download an earnings statement for completed calendar years and, where applicable, a 1099-K report for US tax purposes. Fiverr's help center notes the yearly statement only covers full calendar years, not single months.</p>

<h2>How Upwork invoices work</h2>
<p>Upwork generates invoices automatically for each transaction. Its <a href="https://support.upwork.com/hc/en-us/articles/17976724037267--Download-invoices-and-transaction-reports" target="_blank" rel="noopener noreferrer">help article on downloading invoices and transaction reports</a> sets out the process:</p>
<ol>
<li>Go to Reports, then Transaction History.</li>
<li>Choose the date range.</li>
<li>Click a transaction's reference ID to view its invoice or receipt, and download it as a PDF.</li>
<li>For bulk downloads, select invoices within a 30-day window, up to 50 at a time.</li>
</ol>
<p>Client marketplace fees and any contract initiation fee appear on separate invoices. Freelancers see Upwork's service fee deducted from earnings; since May 2025, Upwork has set that fee per contract within a range rather than using one flat rate, and you see the rate before you accept the offer.</p>
<p>Upwork's invoices are generated by the platform, and some clients find them light on detail: they may show an amount and a contract reference rather than a breakdown of work. That's one reason clients ask freelancers for a more detailed document.</p>

<h2>Fiverr vs Upwork invoicing compared</h2>
<table><thead><tr><th></th><th>Fiverr</th><th>Upwork</th></tr></thead><tbody>
<tr><td>Who issues the client invoice</td><td>Fiverr, to the buyer</td><td>Upwork, automatically per transaction</td></tr>
<tr><td>Where to find it</td><td>Billing and Payments, then Billing History (website only)</td><td>Reports, then Transaction History</td></tr>
<tr><td>Bulk download</td><td>CSV or zip of PDFs</td><td>30-day windows, up to 50 invoices</td></tr>
<tr><td>Seller or freelancer records</td><td>Earnings page, Financial documents</td><td>Transaction History and reports</td></tr>
<tr><td>Platform fee shown</td><td>Withheld; no invoice for the commission</td><td>Deducted from earnings; client fees on their own invoices</td></tr>
<tr><td>US tax form</td><td>1099-K where required</td><td>1099-K where required</td></tr>
</tbody></table>

<h2>When a client needs your own invoice</h2>
<p>Most clients are happy with the platform invoice. Some aren't, usually because:</p>
<ul>
<li>Their accounts payable system needs your legal name, address and tax ID as the supplier.</li>
<li>They need a VAT or GST invoice showing your registration number, and the platform document doesn't name you as the supplier.</li>
<li>Their auditors want a breakdown of work by milestone, hours or deliverable.</li>
<li>They need a PO number on the document.</li>
</ul>
<p>In those cases you can prepare a document for their records that mirrors the platform transaction. Mark it clearly as <strong>"Paid via Upwork, contract #12345 on 14 October 2026"</strong> or <strong>"Paid via Fiverr, order #FO123456"</strong>, show the same amount the client paid, and leave out any payment instructions. That way nobody mistakes it for a new request for money.</p>
<p>Two important rules:</p>
<ul>
<li><strong>Never use your invoice to move payment off the platform.</strong> Both Fiverr and Upwork forbid taking payment outside the platform for work that started there, and accounts are suspended for it.</li>
<li><strong>Don't double-count.</strong> If you keep your own invoice numbering, record platform-paid invoices as already settled so your income isn't counted twice.</li>
</ul>
<p>For a tax-registered freelancer, ask an accountant how your country treats marketplace sales. In some systems the platform is treated as the seller to the buyer, in others you are. That decides whose invoice carries VAT. Our VAT invoice guide explains the basics.</p>

<h2>What a "paid via platform" invoice should look like</h2>
<p>If a client's finance team asks for an invoice, keep it simple and consistent with the platform record. A typical layout:</p>
<table><thead><tr><th>Field</th><th>What to enter</th></tr></thead><tbody>
<tr><td>Invoice number</td><td>Your own sequence, e.g. MKT-2026-007</td></tr>
<tr><td>Date</td><td>The date the platform released the payment</td></tr>
<tr><td>Supplier</td><td>Your legal name, address and any tax registration number</td></tr>
<tr><td>Client</td><td>The client's company name and address as they request it</td></tr>
<tr><td>Description</td><td>Services delivered, with the platform order or contract number</td></tr>
<tr><td>Amount</td><td>The amount the client paid for your work on the platform</td></tr>
<tr><td>Status</td><td>"Paid in full via Fiverr/Upwork on [date]. No further payment due."</td></tr>
</tbody></table>
<p>Leave out bank details and payment links. The <a href="/invoice-generator?template=classic">classic template</a> works well for this kind of record because it is plain and easy for an accounts team to file.</p>

<h2>Worked example: matching an Upwork contract to your records</h2>
<p>A designer finishes a fixed-price Upwork contract worth $1,200, released in two milestones. Upwork's service fee on this contract is 10%, which she saw when she accepted the offer.</p>
<table><thead><tr><th>Milestone</th><th>Gross</th><th>Upwork fee (10%)</th><th>Net earnings</th></tr></thead><tbody>
<tr><td>Milestone 1: logo concepts</td><td>$500.00</td><td>$50.00</td><td>$450.00</td></tr>
<tr><td>Milestone 2: final files and brand sheet</td><td>$700.00</td><td>$70.00</td><td>$630.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$1,200.00</strong></td><td><strong>$120.00</strong></td><td><strong>$1,080.00</strong></td></tr>
</tbody></table>
<p>In her books she records $1,200.00 as income and $120.00 as a platform fee expense, not just the $1,080.00 she withdrew. If the client asks for an invoice, she issues one for $1,200.00 (what the client paid for the work, before any client-side marketplace fee) and marks it "Paid via Upwork". Any withdrawal fee from Payoneer or her bank is a separate expense.</p>

<h2>Tax records to keep as a marketplace freelancer</h2>
<ul>
<li><strong>Annual earnings statements or transaction reports</strong> from each platform, downloaded every January.</li>
<li><strong>Platform fees</strong>, which are usually deductible business expenses. US freelancers can see our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> guide.</li>
<li><strong>Withdrawal records</strong> from Payoneer, PayPal or your bank, so deposits match platform earnings. See <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> for withdrawal options.</li>
<li><strong>Tax forms</strong> such as Form 1099-K. The federal threshold is currently more than $20,000 and more than 200 transactions; our <a href="/blog/1099-k-threshold">1099-K threshold</a> guide has the details, including state rules.</li>
<li><strong>Your own invoices</strong>, if any, with a consistent numbering format from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
</ul>
<p>US freelancers usually also need to pay estimated tax during the year; our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains how. In Pakistan, earnings withdrawn to a local bank may qualify for the reduced tax on IT export proceeds if they arrive through banking channels; see <a href="/blog/receive-payment-from-abroad-pakistan">receiving payment from abroad in Pakistan</a>. Keep records for as long as your tax authority requires; our guide on how long to keep invoices lists common periods. Tax rules change and this is general information, not tax advice.</p>

<h2>Moving direct clients to your own invoices</h2>
<p>Clients you meet outside the marketplace can be billed directly, with your own invoice and payment terms. Keep marketplace clients on the marketplace as the rules require. For direct work, our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> covers what to include and how to set terms.</p>

<p>One practical habit helps here: keep marketplace income and direct-client income in separate columns of your records from day one. Platform income arrives net of fees and through a payout provider, while direct income arrives through your own invoices and bank account. When tax time comes, or a bank asks you to explain deposits, you can show each stream with its supporting documents instead of untangling a year of mixed transactions.</p>

<h2>Next step</h2>
<p>Download last year's earnings statement or transaction report from each platform today, and save it with your withdrawal records. Then save a "Paid via platform" invoice draft in the <a href="/invoice-generator">invoice generator</a> so you can answer the next client request in two minutes.</p>
`,
  },
  {
    slug: "best-free-invoicing-software",
    title: "Free Invoicing Software: 6 Best Options for 2026",
    description:
      "A fair comparison of free invoicing software: Wave, Zoho Invoice, Invoice Ninja, PayPal, Square and a free invoice generator, with limits, fees and who each suits.",
    category: "comparisons",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-generator-vs-accounting-software", "invoice-simple-alternatives", "freshbooks-vs-quickbooks"],
    faqs: [
      {
        q: "What is the best free invoicing software?",
        a: "It depends on what you need. Wave suits people who want free invoicing plus bookkeeping, Zoho Invoice suits those who want a full free invoicing app with reminders, Invoice Ninja suits those with few clients or who want to self-host, and a browser invoice generator suits occasional invoicing with no account.",
      },
      {
        q: "Is there truly free invoicing software with no catch?",
        a: "Several tools are free to use, but each makes money somehow: payment processing fees, paid upgrades, branding on invoices or limits on clients or invoices. Check what is limited on the free plan and what you pay when a client pays by card.",
      },
      {
        q: "Is Zoho Invoice really free?",
        a: "Zoho describes Zoho Invoice as free forever. At the time of writing its free plan allows up to 500 invoices a year and two users, and invoices carry Zoho branding. Check Zoho's pricing page for current limits.",
      },
      {
        q: "Does free invoicing software include accounting?",
        a: "Some do. Wave's free Starter plan includes bookkeeping records as well as invoices. Zoho Invoice, Invoice Ninja and simple invoice generators focus on invoicing, so you would track expenses and taxes elsewhere.",
      },
      {
        q: "Can I use free invoicing software for a business?",
        a: "Yes. Free tools are widely used by freelancers and small businesses. Make sure the invoices include what your tax rules require, that you can export your data, and that you keep copies of every invoice for the required retention period.",
      },
      {
        q: "Can I just use Excel or Google Docs instead of invoicing software?",
        a: "Yes, many small businesses start with a spreadsheet or document template. The downsides are manual numbering, easy-to-miss formula errors and no tracking of what's been paid. If you go this route, lock the template, keep a separate log of invoice numbers and payments, and save each sent invoice as a PDF. A free invoice generator handles the layout and totals for you without an account.",
      },
      {
        q: "Does Wave work outside the United States and Canada?",
        a: "Only to a limited extent. Wave announced in 2020 that it would focus on the US and Canada, and its support pages say users elsewhere can no longer send invoices or reminders through Wave. Online payments also depend on your business being located in the US or Canada. If you're based elsewhere, Zoho Invoice or Invoice Ninja are more practical free options.",
      },
      {
        q: "Which free invoicing software supports recurring invoices?",
        a: "Zoho Invoice includes recurring invoices and automated reminders on its free plan at the time of writing, which is a big reason freelancers choose it. Other tools keep some automation for paid plans; Wave, for example, reserves automated reminders for Pro. Browser-based invoice generators, including ours, don't send invoices automatically, so you would recreate and send each recurring invoice yourself.",
      },
      {
        q: "What happens to my invoices if a free invoicing tool shuts down or changes its plans?",
        a: "You could lose access or be pushed onto a paid plan, which is why your own copies matter. Download a PDF of every invoice you send, export client and item lists regularly, and keep everything in your own storage. Some providers also delete long-inactive accounts. Treat any free tool as a workspace rather than your only archive, and you can switch whenever you need to.",
      },
      {
        q: "Which free invoicing software works for businesses in the UAE, Pakistan or India?",
        a: "Tools without country restrictions, such as Zoho Invoice and Invoice Ninja, are used internationally, and Zoho offers regional editions with local tax fields in some countries. Wave is focused on the US and Canada. Where structured e-invoicing is mandatory, such as India's IRN system for businesses above the turnover threshold, you need software that connects to the official system, not just a PDF.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The best free invoicing software depends on your volume. Wave is a strong pick for free invoicing plus bookkeeping, Zoho Invoice for a full-featured free invoicing app, Invoice Ninja for up to five clients or self-hosting, PayPal or Square if you want card payments built in, and a browser invoice generator for quick invoices with no account. Most charge for card payments.</p>

<p>"Free" means different things across invoicing tools. Some are free because they earn from payment processing, others limit clients or invoices, and some carry their brand on your invoices. This comparison of <strong>free invoicing software</strong> lays out what each option does well, where it falls short, and who it suits. It's based on each provider's published plans and pricing pages, checked in October 2026, not on hands-on testing, and prices change, so follow the links to confirm. We include our own <a href="/invoice-generator">free invoice generator</a> and are upfront about what it doesn't do.</p>

<h2>Free invoicing software compared</h2>
<table><thead><tr><th>Tool</th><th>Free plan limits</th><th>Card payments</th><th>Accounting</th><th>Best for</th></tr></thead><tbody>
<tr><td>Wave (Starter)</td><td>Unlimited invoices and estimates</td><td>Yes, fee per payment</td><td>Yes, bookkeeping included</td><td>Small businesses wanting free books too</td></tr>
<tr><td>Zoho Invoice</td><td>Up to 500 invoices a year, 2 users; Zoho branding</td><td>Through connected gateways</td><td>No (Zoho Books is separate)</td><td>Full invoicing features at no cost</td></tr>
<tr><td>Invoice Ninja (Free)</td><td>Up to 5 clients</td><td>Through connected gateways</td><td>No</td><td>Few clients, or self-hosting</td></tr>
<tr><td>PayPal invoicing</td><td>Free to send</td><td>Yes, fee per payment</td><td>No</td><td>Clients who pay with PayPal</td></tr>
<tr><td>Square Invoices (Free)</td><td>Free to send</td><td>Yes, fee per payment</td><td>No</td><td>Local service businesses using Square</td></tr>
<tr><td>Our invoice generator</td><td>No limits, no account</td><td>No (add your own payment link)</td><td>No</td><td>Occasional invoices and full layout control</td></tr>
</tbody></table>

<h2>Wave: free invoicing with bookkeeping</h2>
<p>Wave's Starter plan is $0 and, per <a href="https://www.waveapps.com/pricing" target="_blank" rel="noopener noreferrer">Wave's pricing page</a>, includes unlimited estimates, invoices, bills and bookkeeping records. Wave earns from payment processing and its paid Pro plan.</p>
<ul>
<li><strong>Does better:</strong> combines invoices with basic bookkeeping, so income and expenses are in one place.</li>
<li><strong>Trade-offs:</strong> US card payments on Starter are listed at 2.9% + $0.60 for Visa, Mastercard and Discover and 3.4% + $0.60 for Amex. Automatic bank imports, late payment reminders and removal of Wave branding are Pro features ($19 a month or $190 a year when we checked).</li>
<li><strong>Suits:</strong> US and Canadian small businesses who want one free tool for invoices and simple books.</li>
</ul>

<h2>Zoho Invoice: a full invoicing app at no cost</h2>
<p>Zoho describes Zoho Invoice as free forever. Its <a href="https://www.zoho.com/us/invoice/pricing/" target="_blank" rel="noopener noreferrer">pricing page</a> lists up to 500 invoices a year, two users, three projects and two organizations, with "Powered by Zoho Invoice" branding.</p>
<ul>
<li><strong>Does better:</strong> a lot of features for free: quotes, recurring invoices, automated reminders, a client portal, time tracking and mobile apps.</li>
<li><strong>Trade-offs:</strong> no accounting (that's Zoho Books, a paid product), Zoho branding, and inactive accounts can be deleted after a long period of inactivity, so log in or back up regularly.</li>
<li><strong>Suits:</strong> freelancers and small teams who send regular invoices and want reminders and recurring billing without paying.</li>
</ul>

<h2>Invoice Ninja: free for up to five clients, or self-host</h2>
<p>Invoice Ninja's hosted free plan covers up to five clients with unlimited invoices, according to <a href="https://invoiceninja.com/pricing-plans/" target="_blank" rel="noopener noreferrer">its pricing page</a>. Paid hosted plans start at $14 a month for Pro. Its source code is published on GitHub, and it can be self-hosted.</p>
<ul>
<li><strong>Does better:</strong> flexibility. Technical users can host it themselves and control their data.</li>
<li><strong>Trade-offs:</strong> the five-client cap on the hosted free plan; self-hosting needs a server and maintenance.</li>
<li><strong>Suits:</strong> freelancers with a handful of regular clients, or developers who want to run their own invoicing.</li>
</ul>

<h2>PayPal invoicing: free to send, pay per payment</h2>
<p>PayPal charges nothing to create or send invoices. You pay a fee when the invoice is paid; US invoice fees are currently 3.49% + $0.49 for PayPal checkout and 2.99% + $0.49 for cards.</p>
<ul>
<li><strong>Does better:</strong> clients can pay with PayPal, Venmo (in the US) or card in one click.</li>
<li><strong>Trade-offs:</strong> fees are higher than a bank transfer, the layout is fixed, and there's no bookkeeping.</li>
<li><strong>Suits:</strong> anyone whose clients already pay with PayPal. See <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a>.</li>
</ul>

<h2>Square Invoices: free plan for local businesses</h2>
<p>Square's free plan lets you send invoices at no monthly cost; card payments through invoices are 3.3% + 30¢ in the US on the free plan, with lower card rates on the paid plan.</p>
<ul>
<li><strong>Does better:</strong> ties invoicing to Square's card readers and point of sale, with estimates and deposits.</li>
<li><strong>Trade-offs:</strong> processing fees on every card payment; limited layout control.</li>
<li><strong>Suits:</strong> trades and service businesses that also take in-person payments. Our <a href="/blog/square-invoice-fees">Square invoice fees</a> guide has the full rates.</li>
</ul>

<h2>Our free invoice generator: no account, no limits</h2>
<p>Our tool is a browser-based <a href="/invoice-generator?template=modern">invoice generator</a>. You fill in the invoice, choose one of 18 templates, and download a PDF. Drafts are saved in your browser's local storage, and you don't need an account.</p>
<ul>
<li><strong>Does better:</strong> speed and control. No sign-up, no invoice or client limits, no branding on your invoice, and a choice of invoice templates.</li>
<li><strong>Trade-offs:</strong> it doesn't email invoices, process payments, send reminders, sync across devices or do accounting. You send the PDF yourself and add a payment link from PayPal, Stripe or Square if you want card payments.</li>
<li><strong>Suits:</strong> freelancers and small businesses who invoice occasionally, or who want a specific layout for each client.</li>
</ul>

<h2>Worked example: what "free" costs on $3,000 of card payments</h2>
<p>Say three clients each pay a $1,000 invoice by Visa card in the US in a month. Using the published rates above:</p>
<table><thead><tr><th>Tool</th><th>Fee per $1,000 card payment</th><th>Total for 3 payments</th></tr></thead><tbody>
<tr><td>Wave Starter</td><td>2.9% = $29.00, + $0.60 = $29.60</td><td>$88.80</td></tr>
<tr><td>PayPal invoicing (card)</td><td>2.99% = $29.90, + $0.49 = $30.39</td><td>$91.17</td></tr>
<tr><td>Square Free</td><td>3.3% = $33.00, + $0.30 = $33.30</td><td>$99.90</td></tr>
<tr><td>Invoice generator + bank transfer</td><td>Depends on your bank; often $0 for domestic ACH</td><td>Often $0</td></tr>
</tbody></table>
<p>For Zoho Invoice and Invoice Ninja, the card fee depends on the gateway you connect, such as Stripe. The real cost of "free" software is mostly in how your clients pay, so it helps to give them a cheap option. See ACH vs wire transfer and <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</p>

<h2>What free invoicing software usually won't do</h2>
<p>Free plans cover the core job of creating and sending invoices. The features most often held back for paid plans, or missing entirely, are worth knowing before you commit:</p>
<ul>
<li><strong>Removing the provider's branding</strong> from invoices and emails.</li>
<li><strong>Automatic payment reminders</strong> and late fees. Wave reserves automated reminders for Pro, for example, while Zoho Invoice includes them free.</li>
<li><strong>Bank feeds and reconciliation</strong>, which matter once you need proper books.</li>
<li><strong>Multiple users</strong> with different permissions.</li>
<li><strong>Structured e-invoicing</strong> for tax portals such as those used in Saudi Arabia, Malaysia or parts of Europe. A PDF isn't a compliant e-invoice where a mandate applies; see our guide to e-invoicing.</li>
<li><strong>Priority support.</strong> Free users often get email or help-center support only.</li>
</ul>
<p>None of that is a reason to avoid free tools. It just means checking the one or two features you'd genuinely miss, rather than comparing long feature lists.</p>

<h2>How to choose free invoicing software</h2>
<ol>
<li><strong>Count your invoices and clients.</strong> Over five clients rules out Invoice Ninja's hosted free plan; over 500 invoices a year rules out Zoho Invoice's free plan.</li>
<li><strong>Decide if you need bookkeeping.</strong> If yes, Wave is the free option here; otherwise compare with paid accounting software. Our guide to <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> helps.</li>
<li><strong>Look at how clients pay.</strong> Card-heavy clients make processing fees the main cost.</li>
<li><strong>Check tax requirements.</strong> If you need structured e-invoices for a tax authority, none of these free PDF-based options replaces a compliant e-invoicing system where a mandate applies.</li>
<li><strong>Make sure you can export your data</strong> if you switch later.</li>
</ol>
<p>Comparing paid apps too? See <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a>, <a href="/blog/invoice-simple-alternatives">Invoice Simple alternatives</a> and <a href="/blog/invoice2go-alternatives">Invoice2go alternatives</a>.</p>

<h2>When to move to paid software</h2>
<p>Free tools stop being the cheapest option when your time costs more than the subscription. Signs you've reached that point: you spend more than an hour a month chasing late payments by hand, you re-type the same recurring invoices, or your accountant spends billable time rebuilding your records from PDFs and bank statements. At that stage, paying for reminders, recurring billing and bookkeeping usually pays for itself.</p>

<h2>Next step</h2>
<p>Write down how many invoices you sent last month and how most clients paid. If it's a handful and mostly bank transfers, start with the <a href="/invoice-generator">free invoice generator</a>. If you need reminders, recurring invoices or bookkeeping, try Zoho Invoice or Wave on your next real invoice.</p>
`,
  },
  {
    slug: "invoice-simple-alternatives",
    title: "Invoice Simple Alternatives: 7 Options Compared",
    description:
      "Looking for an Invoice Simple alternative? Compare free and paid options, including Wave, Zoho Invoice, Invoice Ninja, Square and a no-signup invoice generator.",
    category: "comparisons",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["best-free-invoicing-software", "invoice2go-alternatives", "freshbooks-vs-quickbooks"],
    faqs: [
      {
        q: "Is Invoice Simple free?",
        a: "Invoice Simple is a paid subscription app with a free trial. Its plans have differed in invoice limits, with lower tiers capping the number of invoices per month and the top tier allowing unlimited invoices. Check Invoice Simple's pricing page for current plans and prices.",
      },
      {
        q: "What is the best free alternative to Invoice Simple?",
        a: "For a free app with reminders and recurring invoices, Zoho Invoice is a strong option. Wave adds free bookkeeping. If you just need a professional PDF without an account, a browser invoice generator is the quickest route.",
      },
      {
        q: "Can I make invoices on my phone without Invoice Simple?",
        a: "Yes. Wave, Zoho Invoice, Square and PayPal all have mobile apps, and browser-based invoice generators work in a phone's web browser. Choose based on whether you need the app to send invoices and track payments for you.",
      },
      {
        q: "How do I move my invoices out of Invoice Simple?",
        a: "Download PDFs of your past invoices and export any client or item lists the app allows before you cancel. Keep the PDFs for your tax records and continue your invoice numbering in the new tool so there are no gaps or duplicates.",
      },
      {
        q: "Is Invoice2go the same as Invoice Simple?",
        a: "No. They are separate apps from different companies, although both are mobile-first invoicing tools aimed at tradespeople and small businesses. Invoice2go is owned by the payments company BILL. Both use paid subscription plans with different feature sets and limits. If you're comparing the two, check each one's current pricing page and invoice limits before deciding, or consider the free options in this guide.",
      },
      {
        q: "Which Invoice Simple alternatives can create estimates?",
        a: "Most of the main options can. Zoho Invoice offers quotes, Wave has estimates, Square Invoices supports estimates, and Invoice Ninja includes quotes that can be converted into invoices. Check how each handles client approval and conversion, because some let the client accept an estimate online. If you use a simple PDF generator, keep a separate quote template and copy the details into the invoice once approved.",
      },
      {
        q: "Which Invoice Simple alternative works best outside the US?",
        a: "Zoho Invoice and Invoice Ninja are used internationally and support multiple currencies and tax settings. Wave focuses on US and Canadian businesses, and Square Invoices is available only in the countries where Square operates. Check whether the tool supports your local tax fields, currency and any e-invoicing rules before switching, especially if you are VAT or GST registered.",
      },
      {
        q: "Should I tell clients when I switch invoicing apps?",
        a: "Yes, briefly. A new tool may send emails from a different address and change how your invoices look, which can make careful clients suspect fraud. Tell them which address invoices will come from, confirm that your bank details have not changed, and keep your invoice numbering continuous. If your payment details do change, confirm them by phone rather than by email alone.",
      },
      {
        q: "Are browser-based invoice generators safe for storing my invoices?",
        a: "They are fine for creating invoices, but browser storage is not a long-term archive. Our generator keeps drafts in your browser's local storage on that device, so clearing browser data or switching devices means the drafts aren't there. Download each finished invoice as a PDF and save it to your own folders or cloud storage. That gives you a permanent copy for clients, accountants and tax records.",
      },
      {
        q: "Is it worth paying for an invoicing app if I send fewer than ten invoices a month?",
        a: "Often not, unless you rely on features like automatic reminders, online payments or syncing across devices. For a handful of invoices, a free app or a browser generator covers the core job. Work out the annual subscription cost and compare it with the time the app would save you. If it helps you get paid noticeably faster, it can still pay for itself.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The best Invoice Simple alternative depends on why you're switching. For a free app with reminders, try Zoho Invoice. For free invoicing plus bookkeeping, try Wave. For a handful of clients, Invoice Ninja's free plan. For card payments built in, Square or PayPal. For a quick PDF with no account, use a free browser invoice generator. Larger businesses may prefer FreshBooks or QuickBooks.</p>

<p>Invoice Simple is a popular mobile-first invoicing app for tradespeople and freelancers, and it does the job it was built for: quick, good-looking invoices and estimates from your phone. People look for an <strong>Invoice Simple alternative</strong> mostly because of invoice limits on lower plans, subscription cost, or a need for bookkeeping. This guide compares seven options using each provider's published plans as of October 2026, not hands-on testing. Pricing changes often, so check the official pages. If you just need an invoice now, our <a href="/invoice-generator?template=classic">free invoice generator</a> needs no sign-up.</p>

<h2>What Invoice Simple offers</h2>
<p>Invoice Simple offers paid plans with a free trial. According to <a href="https://www.invoicesimple.com/pricing" target="_blank" rel="noopener noreferrer">Invoice Simple's pricing page</a>, its tiers have been named Essentials, Plus and Premium, with lower tiers capping invoices per month (Essentials at 3 and Plus at 10 per month in its published plan details) and Premium allowing unlimited invoices. Published prices have changed several times, so we don't quote them here.</p>
<p>What it does well: a clean mobile app, estimates that convert to invoices, online payments in supported countries, and simple reports. Where some users outgrow it: the invoice caps on lower plans, the absence of full bookkeeping, and the cost if you only invoice occasionally.</p>

<h2>Invoice Simple alternatives at a glance</h2>
<table><thead><tr><th>Alternative</th><th>Cost to start</th><th>Main strength</th><th>Main limit</th></tr></thead><tbody>
<tr><td>Zoho Invoice</td><td>Free</td><td>Reminders, recurring invoices, client portal</td><td>500 invoices a year, Zoho branding</td></tr>
<tr><td>Wave</td><td>Free (Starter)</td><td>Free bookkeeping alongside invoices</td><td>Reminders and branding removal are paid</td></tr>
<tr><td>Invoice Ninja</td><td>Free for up to 5 clients</td><td>Self-hosting option</td><td>Client cap on hosted free plan</td></tr>
<tr><td>Square Invoices</td><td>Free plan</td><td>Card payments, in-person POS</td><td>Processing fees per payment</td></tr>
<tr><td>PayPal invoicing</td><td>Free to send</td><td>Clients pay by PayPal or card</td><td>Fees per payment, fixed layout</td></tr>
<tr><td>FreshBooks</td><td>Paid plans</td><td>Time tracking, projects, accounting</td><td>Client limits on lower plans</td></tr>
<tr><td>Our invoice generator</td><td>Free, no account</td><td>Fast PDF, 18 templates, no limits</td><td>No sending, payments or reminders</td></tr>
</tbody></table>

<h2>1. Zoho Invoice</h2>
<p>Zoho Invoice is free, with up to 500 invoices a year and two users on its free plan when we checked. It covers quotes, recurring invoices, automated reminders, a customer portal, time tracking and mobile apps.</p>
<p><strong>Choose it if</strong> you want more features than Invoice Simple without a subscription and can live with Zoho branding on invoices.</p>

<h2>2. Wave</h2>
<p>Wave's Starter plan is free, with unlimited invoices and bookkeeping records, per <a href="https://www.waveapps.com/pricing" target="_blank" rel="noopener noreferrer">Wave's pricing page</a>. Card processing is charged per payment, and the paid Pro plan adds bank imports, automated reminders and removal of Wave branding.</p>
<p><strong>Choose it if</strong> you want your invoices and basic books in one free tool and are based in a country Wave supports, mainly the US and Canada.</p>

<h2>3. Invoice Ninja</h2>
<p>Invoice Ninja's hosted free plan covers up to five clients with unlimited invoices, and paid plans start at $14 a month. Its code is on GitHub and can be self-hosted.</p>
<p><strong>Choose it if</strong> you have a few regular clients, or you're technical and want to host your own invoicing.</p>

<h2>4. Square Invoices</h2>
<p>Square's free plan lets you send invoices at no monthly cost, with card payments at 3.3% + 30¢ in the US. It connects to Square's card readers and point of sale.</p>
<p><strong>Choose it if</strong> you're a trade or service business taking payments on site as well as by invoice. See our breakdown of <a href="/blog/square-invoice-fees">Square invoice fees</a>.</p>

<h2>5. PayPal invoicing</h2>
<p>PayPal invoices are free to send, with fees when clients pay. US invoice payments by card are 2.99% + $0.49.</p>
<p><strong>Choose it if</strong> your clients already pay with PayPal. Our guide on <a href="/blog/how-to-send-paypal-invoice">sending a PayPal invoice</a> walks through it.</p>

<h2>6. FreshBooks</h2>
<p>FreshBooks is paid accounting software built around invoicing, with time tracking, expenses, proposals and project tools. Its lowest plan limits billable clients.</p>
<p><strong>Choose it if</strong> you've outgrown simple invoicing and want accounting too. Compare it in <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a>.</p>

<h2>7. Our free invoice generator</h2>
<p>Our <a href="/invoice-generator">invoice generator</a> runs in your browser. Fill in your details, pick a template, and download a PDF. Drafts are saved in local storage on your device, and there's no account or invoice limit. It works on a phone browser too; see <a href="/blog/how-to-make-an-invoice-on-your-phone">how to make an invoice on your phone</a>.</p>
<p>It's honest to say what it doesn't do: it doesn't email invoices, take payments, send reminders, convert estimates automatically or keep accounts. You send the PDF yourself, and you can add a payment link from Stripe, PayPal or Square.</p>
<p><strong>Choose it if</strong> you invoice occasionally and don't want another subscription.</p>

<h2>What to look for in an Invoice Simple alternative</h2>
<p>Before you switch, decide what made you look in the first place. The right alternative depends on the reason:</p>
<ul>
<li><strong>Invoice limits:</strong> look for unlimited invoices on the plan you'd use. Wave Starter and our generator have no invoice cap; Zoho Invoice's free cap is 500 a year.</li>
<li><strong>Cost:</strong> compare the annual cost at the plan you'd actually need, not the entry price.</li>
<li><strong>Bookkeeping:</strong> if you want expenses and reports in the same place, Wave, FreshBooks or QuickBooks fit better than a pure invoicing app.</li>
<li><strong>Card payments:</strong> check the processing rate as well as the subscription. Over a year, fees can cost more than the app.</li>
<li><strong>Mobile use:</strong> if you invoice from job sites, make sure the alternative has a good phone app or works well in a mobile browser.</li>
<li><strong>Estimates:</strong> tradespeople who quote first should check that estimates convert into invoices, or keep a separate quote template. Our guide to invoices vs estimates explains the difference.</li>
<li><strong>Data export:</strong> make sure you can get your invoices out as PDFs or CSV if you move again.</li>
</ul>

<h2>Mobile app or browser-based?</h2>
<p>Invoice Simple's appeal is its mobile app. Most alternatives here also have apps: Wave, Zoho Invoice, Square, PayPal and FreshBooks all publish iOS and Android apps. A browser-based generator works differently: there's nothing to install, and you can use it on any device, but drafts are stored in that browser's local storage rather than synced to an account. If you switch between a phone and a laptop, either export the PDF each time or use an app that syncs.</p>

<h2>Worked example: does a subscription pay for itself?</h2>
<p>Suppose a painter sends 6 invoices a month. A plan capped at 3 invoices won't work, so she'd need a higher tier. Let's compare her annual cost with a hypothetical $15-a-month app against free options (use the real price from the provider's page):</p>
<table><thead><tr><th>Option</th><th>Monthly cost</th><th>Annual cost</th></tr></thead><tbody>
<tr><td>Hypothetical $15/month app</td><td>$15.00</td><td>$180.00</td></tr>
<tr><td>Zoho Invoice free (72 invoices a year, under the 500 cap)</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Invoice generator</td><td>$0.00</td><td>$0.00</td></tr>
</tbody></table>
<p>The $180 a year buys convenience: sending from your phone, payment tracking and reminders. If those features save you an hour a month or get you paid faster, the subscription can be worth it. If you mostly need a clean PDF, it probably isn't.</p>

<h2>How to switch without losing records</h2>
<ol>
<li>Download PDFs of every invoice you've issued, and export client and item lists if the app allows.</li>
<li>Note your last invoice number and continue the sequence in the new tool. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a format.</li>
<li>Finish chasing open invoices in the old tool, or reissue them carefully with the same numbers.</li>
<li>Keep the old PDFs for as long as tax rules require; see how long to keep invoices.</li>
</ol>
<p>For more options, see our <a href="/blog/best-free-invoicing-software">best free invoicing software</a> roundup and <a href="/blog/invoice2go-alternatives">Invoice2go alternatives</a>.</p>

<h2>Which alternative fits which business?</h2>
<ul>
<li><strong>Solo tradesperson, a few jobs a week:</strong> Square Invoices if you also take card payments on site; otherwise Zoho Invoice.</li>
<li><strong>Freelancer with a handful of retainer clients:</strong> Invoice Ninja's free plan or Zoho Invoice for recurring invoices.</li>
<li><strong>Small business that wants its books in order:</strong> Wave on a budget, or FreshBooks if you bill time and projects.</li>
<li><strong>Occasional invoicer:</strong> the browser generator, with a payment link added when needed.</li>
</ul>

<h2>Next step</h2>
<p>List the three features you actually use in Invoice Simple. If they're "make a PDF, add my logo, add tax", try the <a href="/invoice-generator">invoice generator</a> on your next job. If one of them is reminders or recurring billing, start a free Zoho Invoice account and send your next invoice from there.</p>
`,
  },
  {
    slug: "freshbooks-vs-quickbooks",
    title: "FreshBooks vs QuickBooks: Pricing and Who Each Suits",
    description:
      "FreshBooks vs QuickBooks compared: 2026 US plan prices, client and user limits, invoicing and accounting features, and which one suits freelancers or growing firms.",
    category: "comparisons",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-generator-vs-accounting-software", "best-free-invoicing-software", "bookkeeping-basics"],
    faqs: [
      {
        q: "Is FreshBooks or QuickBooks better for freelancers?",
        a: "FreshBooks is usually the easier fit for service freelancers because it is built around invoices, time tracking and client projects. QuickBooks suits freelancers who want deeper accounting, plan to grow, or whose accountant already uses QuickBooks. Both offer trials, so try each with a real invoice.",
      },
      {
        q: "How much does FreshBooks cost compared with QuickBooks?",
        a: "At the time of writing, FreshBooks' US regular prices are $23, $43 and $70 a month for Lite, Plus and Premium, with client limits on the lower plans. QuickBooks Online lists a free plan with two invoices a month, then Simple Start at $38, Essentials at $85, Plus at $140 and Advanced at $340 a month. Both run frequent promotions.",
      },
      {
        q: "Can FreshBooks do full accounting?",
        a: "Yes, from the Plus plan up FreshBooks includes double-entry accounting reports, bank reconciliation and accountant access. QuickBooks offers more depth for inventory, classes, locations and larger teams.",
      },
      {
        q: "Does QuickBooks have a free plan?",
        a: "QuickBooks Online's US pricing page lists a Free plan for one user with income and expense tracking, two invoices a month and basic reports. That is enough to try it, but most businesses sending regular invoices will need a paid plan.",
      },
      {
        q: "Do I need FreshBooks or QuickBooks if I only send a few invoices?",
        a: "Not necessarily. If you send a handful of invoices a month and keep simple records, a free invoice generator and a spreadsheet may be enough. Accounting software earns its cost when you need reconciliation, reports, payroll or an accountant working in your books.",
      },
      {
        q: "Do FreshBooks and QuickBooks offer free trials?",
        a: "Yes. Both have typically offered a 30-day free trial, and FreshBooks' trial is widely reported as not requiring a credit card. Trials and introductory discounts are sometimes offered as alternatives, so check which offer you're signing up for. Use the trial to recreate a real month of invoices and expenses, then compare the regular price rather than the promotional one.",
      },
      {
        q: "What payment processing fees do FreshBooks and QuickBooks charge on invoices?",
        a: "At the time of writing, FreshBooks' US help center lists 2.9% + $0.30 for standard cards and 1% for ACH bank transfers, with higher rates for Amex and business cards. QuickBooks lists 2.99% for invoice card payments and 1% for ACH. International cards cost extra on both. Rates change and can differ by plan, so check each provider's payments page before choosing.",
      },
      {
        q: "Can I still buy QuickBooks Desktop instead of QuickBooks Online?",
        a: "Mostly not, if you're a new US small business. Intuit stopped selling new US subscriptions to QuickBooks Desktop Pro Plus, Premier Plus, Mac Plus and Enhanced Payroll after September 30, 2024, although existing subscribers can renew and Enterprise is still sold. For most new US users, the realistic choice is QuickBooks Online or another cloud tool such as FreshBooks.",
      },
      {
        q: "Do FreshBooks and QuickBooks work outside the United States?",
        a: "Both are sold in several countries, including Canada, the UK and Australia, but plans, prices, payment options and tax features differ by country. The prices in this comparison are US prices only. If you're outside the US, check the local pricing page and make sure the software handles your VAT or GST rules, currency and any e-invoicing requirements.",
      },
      {
        q: "Which is better for payroll, FreshBooks or QuickBooks?",
        a: "QuickBooks has its own payroll product closely tied to its accounting ledger, which suits businesses with several employees. FreshBooks offers payroll in the US through a partner integration. Both are priced separately from the main subscription. If you have employees or plan to hire, compare the full monthly cost of software plus payroll, and ask your accountant which they prefer to work with.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In FreshBooks vs QuickBooks, FreshBooks suits service freelancers and small agencies who want easy invoicing, time tracking and projects, with plans from $23 a month (US). QuickBooks Online suits businesses that need deeper accounting, inventory, more users or an accountant-friendly ledger, with plans from $38 a month plus a limited free plan. For low invoice volume, a free generator may be enough.</p>

<p>FreshBooks and QuickBooks are two of the most common names in small-business software, and they overlap more than they used to. FreshBooks started as invoicing software and grew into accounting; QuickBooks started as accounting and added invoicing. This comparison covers US pricing, features and who each suits, based on the official pricing pages in October 2026, not hands-on testing. If you only need to send an invoice today, our <a href="/invoice-generator?template=corporate">free invoice generator</a> does that without a subscription.</p>

<h2>FreshBooks vs QuickBooks at a glance</h2>
<table><thead><tr><th></th><th>FreshBooks</th><th>QuickBooks Online</th></tr></thead><tbody>
<tr><td>Starting price (US, regular)</td><td>$23/month (Lite)</td><td>$0 (Free, limited) or $38/month (Simple Start)</td></tr>
<tr><td>Built around</td><td>Invoicing, time and projects</td><td>Full accounting ledger</td></tr>
<tr><td>Limits on entry plan</td><td>5 billable clients</td><td>Free: 2 invoices a month, 1 user</td></tr>
<tr><td>Extra users</td><td>$11/month per team member</td><td>More users included on higher plans</td></tr>
<tr><td>Time tracking</td><td>All plans</td><td>Employee time on invoices from Essentials</td></tr>
<tr><td>Inventory</td><td>Not a focus</td><td>Plus and Advanced</td></tr>
<tr><td>Bank reconciliation</td><td>Plus and above</td><td>Listed from Plus in the plan comparison</td></tr>
<tr><td>Accountant familiarity</td><td>Good</td><td>Very widely used by US accountants</td></tr>
</tbody></table>

<h2>FreshBooks pricing and plans (US)</h2>
<p>These are the regular monthly prices on <a href="https://www.freshbooks.com/pricing" target="_blank" rel="noopener noreferrer">FreshBooks' pricing page</a>. FreshBooks often runs introductory discounts, so the price you're offered may be lower for the first months.</p>
<table><thead><tr><th>Plan</th><th>Price/month</th><th>Billable clients</th><th>Key additions</th></tr></thead><tbody>
<tr><td>Lite</td><td>$23</td><td>5</td><td>Unlimited invoices, recurring invoices, estimates, expenses, time and mileage tracking, online payments</td></tr>
<tr><td>Plus</td><td>$43</td><td>50</td><td>Proposals, retainers, client portal, double-entry reports, bank reconciliation, receipt scanning, accountant access</td></tr>
<tr><td>Premium</td><td>$70</td><td>Unlimited</td><td>Custom email templates, project profitability, accounts payable</td></tr>
<tr><td>Select</td><td>Custom</td><td>Unlimited</td><td>Lower payment fees, dedicated support, two team members included</td></tr>
</tbody></table>
<p>Team members cost $11 a month each on every plan. Card and ACH processing fees are extra.</p>

<h2>QuickBooks Online pricing and plans (US)</h2>
<p>These are the regular monthly prices on <a href="https://quickbooks.intuit.com/pricing/" target="_blank" rel="noopener noreferrer">QuickBooks' pricing page</a>. Intuit frequently discounts the first months, and payroll is a separate add-on.</p>
<table><thead><tr><th>Plan</th><th>Price/month</th><th>Users</th><th>Key additions</th></tr></thead><tbody>
<tr><td>Free</td><td>$0</td><td>1</td><td>Income and expense tracking, 2 invoices a month, basic reports, 1 connected bank</td></tr>
<tr><td>Simple Start</td><td>$38</td><td>1</td><td>Automated bookkeeping, invoicing with payments, bill pay, general reports</td></tr>
<tr><td>Essentials</td><td>$85</td><td>3</td><td>Enhanced reports, employee time on invoices, custom KPIs</td></tr>
<tr><td>Plus</td><td>$140</td><td>5</td><td>Bank reconciliation, budgeting, project profitability, inventory, classes and locations</td></tr>
<tr><td>Advanced</td><td>$340</td><td>25</td><td>Custom dashboards, user permissions, workflows, batch invoices, priority support</td></tr>
</tbody></table>
<p>Intuit also sells QuickBooks Solopreneur for sole proprietors; its pricing page links to it but doesn't list its details alongside these plans, so check its own page if you're a one-person business.</p>

<h2>Invoicing: which is easier?</h2>
<p>FreshBooks' invoicing is its strongest area. Invoices, estimates, proposals and retainers are central to the app, and tracked time drops straight onto invoices on every plan. Client portals and project budgets suit agencies and consultants who bill by the hour or by milestone. See our guides to <a href="/blog/retainer-invoice">retainer invoices</a> and <a href="/blog/how-to-invoice-for-hourly-work">invoicing hourly work</a>.</p>
<p>QuickBooks invoicing is capable and connects to its full ledger, so every invoice updates receivables and reports automatically. Product-based businesses benefit from inventory on higher plans. Some service freelancers find the interface busier because it's built around accounting.</p>

<p>Both let you add your logo, set payment terms, send reminders and accept online payments, so the gap in basic invoicing is smaller than it once was. The difference shows in the workflow around the invoice: FreshBooks starts from the client and the project, while QuickBooks starts from the customer record and the ledger. Pick the one that matches how you already think about your work.</p>

<h2>Accounting depth: where QuickBooks leads</h2>
<p>QuickBooks is the more complete accounting system: inventory, classes and locations, budgeting, more users, permissions and an ecosystem of add-ons and accountants who know it. If you have employees, sell products, or expect an accountant to do your books, QuickBooks is often the default.</p>
<p>FreshBooks covers what most service businesses need from Plus upward, including double-entry reports and bank reconciliation, but it isn't aimed at inventory-heavy or multi-entity businesses. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide explains what each of those features is for.</p>

<h2>Worked example: a two-person design studio</h2>
<p>A studio has two people, 12 active clients and bills by the hour. It doesn't hold inventory.</p>
<table><thead><tr><th>Option</th><th>Monthly calculation</th><th>Monthly cost</th><th>Annual cost</th></tr></thead><tbody>
<tr><td>FreshBooks Plus + 1 team member</td><td>$43 + $11</td><td>$54</td><td>$648</td></tr>
<tr><td>QuickBooks Essentials (3 users included)</td><td>$85</td><td>$85</td><td>$1,020</td></tr>
<tr><td>QuickBooks Simple Start (1 user only)</td><td>$38</td><td>$38, but the second person can't log in</td><td>$456</td></tr>
</tbody></table>
<p>FreshBooks Lite won't work because of its five-client limit. For this studio, FreshBooks Plus costs $372 a year less than QuickBooks Essentials at regular prices ($1,020 − $648). QuickBooks would make more sense if the studio needed classes, inventory, or its accountant insisted on it. Promotions change these numbers, so price the real offer you get.</p>

<h2>Payment processing and other add-on costs</h2>
<p>The subscription is only part of what you'll pay. Both FreshBooks and QuickBooks charge processing fees when clients pay invoices online by card or bank transfer, and those rates differ by plan and payment method. FreshBooks' Select plan advertises lower card and ACH fees. Check each provider's current payment rates on its own site before comparing, because on a busy month processing can cost more than the software.</p>
<p>Other common add-ons:</p>
<ul>
<li><strong>Payroll.</strong> Both offer payroll as a separately priced add-on in the US.</li>
<li><strong>Extra users.</strong> FreshBooks charges per team member; QuickBooks includes more users as you move up plans.</li>
<li><strong>Advanced payments or financing features</strong>, which are priced separately where offered.</li>
<li><strong>An accountant's time.</strong> Software doesn't replace a year-end review. An accountant who already knows your software will usually work faster.</li>
</ul>

<h2>Learning curve and day-to-day use</h2>
<p>FreshBooks is generally described as the easier one to learn for people without a bookkeeping background, because the main screens are about clients, invoices and time. QuickBooks asks you to think in accounting terms sooner: chart of accounts, categories and reconciliation. That's a strength once your business is larger, and a hurdle if you just want to send invoices. Both offer free trials; the fairest test is to recreate one real month of your invoices and expenses in each and see which you'd rather open every week.</p>

<h2>Who each suits</h2>
<h3>Choose FreshBooks if</h3>
<ul>
<li>You sell services and bill by the hour, project or retainer.</li>
<li>You want invoicing and time tracking to be the easiest part of your day.</li>
<li>You have a small team and a moderate number of clients.</li>
</ul>
<h3>Choose QuickBooks if</h3>
<ul>
<li>You sell products or need inventory.</li>
<li>You need several users, classes, locations or detailed reports.</li>
<li>Your accountant or bookkeeper already works in QuickBooks.</li>
</ul>
<h3>Choose neither (yet) if</h3>
<ul>
<li>You send a handful of invoices a month and keep simple records.</li>
<li>You'd rather pay an accountant once a year than a subscription every month.</li>
</ul>
<p>For that last group, a free <a href="/invoice-generator">invoice generator</a> plus a simple spreadsheet often covers it. Our guide to <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> sets out when to move up, and <a href="/blog/best-free-invoicing-software">best free invoicing software</a> compares free options such as Wave and Zoho Invoice. The generator creates PDF invoices in your browser; it doesn't do accounting, bank feeds or payments.</p>

<h2>Common mistakes when choosing</h2>
<ul>
<li><strong>Comparing promotional prices.</strong> Both companies discount the first months heavily. Budget for the regular price, because that's what you'll pay from year two.</li>
<li><strong>Ignoring client or user limits.</strong> FreshBooks Lite's five-client limit and QuickBooks Simple Start's single user catch many small teams out after sign-up.</li>
<li><strong>Buying more plan than you need.</strong> If you don't hold inventory or track classes, QuickBooks Plus features won't help you.</li>
<li><strong>Not asking your accountant.</strong> If they work in one system every day, their preference can save you hours at year end.</li>
<li><strong>Keeping no exit plan.</strong> Export your invoices and reports at least once a year, whichever you use.</li>
</ul>

<h2>Switching between them</h2>
<p>Both can import customer lists and some historical data, and FreshBooks' Select plan includes data import help. Export your invoices as PDFs from the old system, start the new one at a clean date such as the first day of a month or tax year, and carry your invoice number sequence over. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you continue the format.</p>

<h2>Next step</h2>
<p>Count your active clients and the number of people who need to log in, then price both options using the regular rates above, not just the promotional ones. If neither is justified yet, set up a reusable invoice in the generator and revisit the decision when you hire or start selling products.</p>
`,
  },
];
