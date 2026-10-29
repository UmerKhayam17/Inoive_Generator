import type { PostDraft } from "../blog";

export const PAYMENTS_POSTS: PostDraft[] = [
  {
    slug: "how-to-accept-credit-card-payments",
    title: "How to Accept Credit Card Payments as a Small Business (2026)",
    description:
      "Learn how to accept credit card payments as a small business in 2026: compare processors, card readers and invoice payment links, fees and security basics.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "virtual-cards-for-business",
      "apple-pay-google-pay-business",
      "add-payment-link-to-invoice",
      "ach-vs-wire-transfer",
      "how-to-get-paid-faster",
    ],
    faqs: [
      {
        q: "How can a small business accept credit card payments without a card machine?",
        a: "You can accept credit card payments online through a hosted checkout page, a payment link added to each invoice, or a virtual terminal where you key in card details the customer gives you. Most payment providers offer at least one of these without any hardware.",
      },
      {
        q: "How much does it cost to accept credit card payments?",
        a: "Most providers charge a percentage of each transaction, often plus a small fixed fee, and some add monthly, chargeback or international fees. Rates vary by provider, pricing model, card type and whether the card is present, so compare the total cost on your own typical transaction size.",
      },
      {
        q: "Can I charge customers a fee for paying by credit card?",
        a: "It depends on where you and your customer are. Some US states restrict surcharges and card networks require disclosure, while the UK and EU broadly ban surcharges on consumer cards. Check local rules and your processor agreement before adding a card fee.",
      },
      {
        q: "Do I need a merchant account to accept credit cards?",
        a: "Not necessarily. Payment aggregators let you start taking cards quickly under their shared merchant account, while a dedicated merchant account usually suits businesses with higher, steady card volume that want negotiated pricing.",
      },
      {
        q: "How long does it take to receive money from card payments?",
        a: "Payouts typically arrive in your bank account within one to a few business days, depending on the provider, your account history and the payout schedule you choose. New accounts sometimes have longer holds while the provider reviews them.",
      },
      {
        q: "What is the difference between a payment processor and a payment gateway?",
        a: "A payment gateway is the technology that securely captures card details online and passes them on, while the processor moves the transaction through the card networks and settles the money to your account. Many all-in-one providers bundle both, so you never see the split. If you use a dedicated merchant account, you may need to choose a gateway separately and connect it to your website or invoicing tool.",
      },
      {
        q: "Can I set a minimum purchase amount for credit card payments?",
        a: "In the US, Visa's rules let merchants require a minimum of up to $10, but only on credit cards, never on debit or prepaid cards. Outside the US and its territories, Visa generally does not allow minimums at all. Other card networks have their own rules, so check your processor agreement before adding a minimum, and display it clearly so customers know before they pay.",
      },
      {
        q: "How do I protect my business from chargebacks?",
        a: "Prevention starts before the payment. Use a recognizable business name on card statements, describe the work precisely on the invoice, get written approval of quotes, and keep delivery confirmations and messages. Respond to complaints quickly, because a refund you offer is cheaper than a lost dispute. If a chargeback arrives, reply through your provider before its deadline with your invoice, contract and proof of delivery.",
      },
      {
        q: "Can a sole proprietor accept credit cards without a business bank account?",
        a: "Often, yes. Many payment providers let sole proprietors sign up with their own name, Social Security number or EIN, and a personal bank account for payouts. A separate business account is still worth having, because it keeps card deposits and fees apart from personal spending and makes bookkeeping and tax time much easier. Check each provider's requirements, as some ask for a business account.",
      },
      {
        q: "Are credit card processing fees tax deductible?",
        a: "In most tax systems, yes. Card processing fees are a normal cost of doing business, so US sole proprietors generally deduct them on Schedule C, and businesses elsewhere usually treat them as an expense too. Record the full invoice amount as income and the fee as a separate expense, rather than recording only the net deposit. Confirm the treatment with your accountant or tax authority.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To accept credit card payments as a small business, sign up with a payment processor, connect it to your business bank account, and give customers a way to pay: a card reader in person, a checkout on your website, or a pay-now link on every invoice. You pay a fee on each transaction, usually a percentage plus a small fixed amount, and the money lands in your bank account a few business days later.</p>

<p>This guide explains how card payments work, the main ways a small business can take them, how processing fees are structured, and the security rules you need to follow. It finishes with a setup checklist and shows how to put card payment options on the invoices you create with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>How credit card payments work</h2>
<p>Every card payment involves the same handful of parties, even if you only ever deal with one company:</p>
<ul>
<li><strong>The cardholder</strong>: your customer.</li>
<li><strong>The issuing bank</strong>: the bank that gave the customer their card and approves or declines the charge.</li>
<li><strong>The card network</strong>: Visa, Mastercard, American Express, Discover and others, which route the transaction and set many of the rules.</li>
<li><strong>The acquirer or processor</strong>: the company that accepts the payment on your behalf and pays it out to you.</li>
<li><strong>You, the merchant</strong>: the business being paid.</li>
</ul>
<p>When a customer pays, the processor asks the issuing bank to authorize the amount, then captures and settles it. After the processor deducts its fees, the net amount is deposited into your bank account on a payout schedule. Because the customer's bank stands behind the payment, cards are fast and convenient, but they can also be disputed later through a chargeback, which is one reason card payments cost more than a bank transfer.</p>

<h2>Ways to accept credit card payments as a small business</h2>
<p>You don't need every option. Pick the ones that match how your customers actually buy from you.</p>
<table><thead><tr><th>Method</th><th>How it works</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Card reader (in person)</td><td>A tap, chip or swipe reader paired with a phone, tablet or terminal</td><td>Trades, retail, markets, events, on-site services</td><td>Hardware cost and keeping the reader charged</td></tr>
<tr><td>Invoice payment link</td><td>A pay-now link or button on the invoice opens a secure checkout</td><td>Freelancers, agencies, service businesses that bill after the work</td><td>Make sure the link matches the invoice amount and number</td></tr>
<tr><td>Website checkout</td><td>A checkout page or plugin on your site</td><td>Online stores, bookings, subscriptions</td><td>Website setup and ongoing maintenance</td></tr>
<tr><td>Virtual terminal</td><td>You key in card details the customer gives you</td><td>Phone orders and occasional remote payments</td><td>Usually higher fees and higher fraud risk than card-present payments</td></tr>
<tr><td>Recurring billing</td><td>The customer's card is saved and charged on a schedule with consent</td><td>Retainers, memberships, subscriptions</td><td>Clear consent and easy cancellation</td></tr>
</tbody></table>
<p>For most service businesses that bill after delivering work, the simplest starting point is an invoice payment link. Our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> covers how to set one up and where to place the pay-now button.</p>

<h2>Choosing a payment processor</h2>
<p>Processors fall into two broad groups. Neither is universally better; the right choice depends on your volume and how much paperwork you want.</p>

<h3>Payment aggregators (all-in-one providers)</h3>
<p>An aggregator lets you sign up online and start accepting cards quickly, often the same day, because you operate under its shared merchant account. Pricing is usually simple and there is often no monthly fee. The trade-off is that aggregators can hold or freeze funds if they spot unusual activity, and per-transaction costs may be higher than negotiated rates once your volume grows.</p>

<h3>Dedicated merchant accounts</h3>
<p>A merchant account is set up for your business specifically, usually through a bank or a merchant services provider, and paired with a payment gateway for online payments. Approval takes longer and may involve monthly fees and a contract, but businesses with steady, high card volume can often negotiate better pricing and more predictable payouts.</p>

<h3>Questions to ask any provider</h3>
<ol>
<li>What is the total cost on my typical transaction size, including fixed fees?</li>
<li>Are there monthly, setup, PCI compliance, chargeback or cancellation fees?</li>
<li>How fast are payouts, and can funds be held?</li>
<li>Which cards, currencies and digital wallets are supported?</li>
<li>Does it integrate with my invoicing, website or accounting tools?</li>
<li>What happens when a customer disputes a charge?</li>
</ol>

<h2>Understanding credit card processing fees</h2>
<p>Card fees are the biggest ongoing cost of accepting card payments, and they are not standard. They vary by provider, by pricing model, by card type (business, rewards and international cards often cost more), and by whether the card is present or keyed in. Common pricing models include:</p>
<ul>
<li><strong>Flat-rate pricing</strong>: one percentage plus a fixed fee for most transactions. Easy to predict, common with aggregators.</li>
<li><strong>Interchange-plus</strong>: the card network's underlying cost passed through, plus a disclosed markup. More transparent, more complex statements.</li>
<li><strong>Tiered pricing</strong>: transactions grouped into "qualified" and "non-qualified" bands at different rates. Harder to compare.</li>
<li><strong>Subscription or membership</strong>: a monthly fee in exchange for a lower per-transaction markup.</li>
</ul>

<h3>Worked example: what a card payment really costs</h3>
<p>Suppose you send an invoice for $1,200.00 and, purely for illustration, your provider charges 3% plus $0.30 per online card payment. Your actual rate will differ, so plug in the numbers from your own agreement.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Invoice total paid by card</td><td>$1,200.00</td></tr>
<tr><td>Percentage fee (3% of $1,200.00)</td><td>$36.00</td></tr>
<tr><td>Fixed fee</td><td>$0.30</td></tr>
<tr><td>Total processing cost</td><td>$36.30</td></tr>
<tr><td>Net deposit to your bank</td><td>$1,163.70</td></tr>
</tbody></table>
<p>On large invoices, that percentage adds up. Many businesses accept credit card payments for convenience on smaller amounts but encourage bank transfer on larger ones. If you are weighing those options, compare <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> for domestic US payments.</p>

<h2>Should you pass card fees on to customers?</h2>
<p>Adding a surcharge is tempting, but it is regulated. In the United States, card network rules require surcharges to be disclosed and capped, and some states restrict or prohibit them. In the UK and the European Union, surcharges on most consumer cards are banned. Debit cards are often treated differently from credit cards. Rules change, so check your processor agreement and local law before you add any card fee.</p>
<p>Alternatives that are usually simpler:</p>
<ul>
<li>Build expected processing costs into your prices.</li>
<li>Offer a cheaper payment method, such as bank transfer, and list your <a href="/blog/bank-details-on-invoice">bank details on the invoice</a> alongside the card link.</li>
<li>Reward fast payment with an <a href="/blog/early-payment-discount">early payment discount</a> instead of penalizing card users.</li>
</ul>

<h2>Security and compliance basics</h2>
<p>When you accept credit card payments, you are responsible for handling card data safely. The core rules are straightforward:</p>
<ul>
<li><strong>Follow PCI DSS.</strong> The Payment Card Industry Data Security Standard applies to any business that accepts cards. Using a hosted checkout or payment link keeps card numbers off your systems and usually reduces your compliance work to a short self-assessment.</li>
<li><strong>Never ask for card numbers by email or text.</strong> Unencrypted messages are not a safe place for card details, and storing them creates liability.</li>
<li><strong>Watch for fraud signals.</strong> Rush orders from new customers, mismatched billing details and requests to refund to a different card are classic warning signs.</li>
<li><strong>Keep evidence for chargebacks.</strong> Signed quotes, delivery confirmations and the invoice itself help you respond if a customer disputes a charge.</li>
<li><strong>Protect your payout account.</strong> Turn on two-factor authentication with your provider and be suspicious of any message asking you to change payout bank details.</li>
</ul>

<h2>How to start accepting card payments in 6 steps</h2>
<ol>
<li><strong>Decide where customers pay.</strong> In person, online, on invoices, or a mix.</li>
<li><strong>Compare two or three providers</strong> using your average invoice size, not their headline rate.</li>
<li><strong>Sign up and verify your business.</strong> Expect to provide your legal name, tax ID, address, bank account and identity documents.</li>
<li><strong>Connect your business bank account</strong> and choose a payout schedule.</li>
<li><strong>Add payment options to your invoices.</strong> Put the payment link, accepted cards and your bank transfer details in the payment section.</li>
<li><strong>Test a small transaction</strong> end to end, then check the payout and the fee shown in your provider's report.</li>
</ol>

<h2>Show card payment options clearly on your invoices</h2>
<p>Customers pay faster when the invoice tells them exactly how. In the payment terms or notes section, list the methods you accept, include a working payment link, and state the due date as a real calendar date. Agree the terms up front; our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains common options such as Net 15 and Net 30.</p>
<p>Offering cards is one of several levers for faster payment. For the rest, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>. If you bill clients abroad, card payments can avoid wire fees for the customer, but currency conversion costs apply; read <a href="/blog/invoice-international-clients">how to invoice international clients</a> before choosing a method. For a broader view of billing processes, the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a> pulls everything together.</p>

<p>Processor costs vary more than most people expect. Compare <a href="/blog/square-invoice-fees">Square invoice fees</a>, <a href="/blog/stripe-invoicing-guide">Stripe invoicing</a> and <a href="/blog/how-to-send-paypal-invoice">PayPal invoices</a> before you choose.</p>

<h2>Create an invoice that accepts card payments</h2>
<p>Once your processor is set up, open the <a href="/invoice-generator">invoice generator</a>, choose a clean layout such as the <a href="/invoice-templates/modern">Modern invoice template</a>, and add your payment link and accepted cards to the payment instructions. Download the PDF, send it, and let your customers pay in a couple of clicks.</p>
`,
  },
  {
    slug: "add-payment-link-to-invoice",
    title: "Invoice Payment Link: How to Add a Pay Now Button to Invoices",
    description:
      "Add an invoice payment link or pay now button so clients can pay in one click. Learn link types, placement, security tips and a sample invoice payment section.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-accept-credit-card-payments",
      "bank-details-on-invoice",
      "how-to-send-an-invoice",
    ],
    faqs: [
      {
        q: "How do I add a payment link to an invoice?",
        a: "Create a payment link in your payment provider's dashboard, ideally for the exact invoice amount and with the invoice number in the description, then paste it into the payment instructions or notes section of your invoice. Export the invoice as a PDF and test that the link is clickable.",
      },
      {
        q: "Are payment links in PDF invoices clickable?",
        a: "Usually yes. Most PDF viewers make full web addresses clickable, and many invoice tools preserve hyperlinks when exporting. Always open the finished PDF and click the link yourself before sending it.",
      },
      {
        q: "Is it safe to pay an invoice through a payment link?",
        a: "It is safe when the link goes to a known, reputable payment provider and comes from a supplier you recognize. Clients should be wary of unexpected links, misspelled domains or messages saying payment details have changed, and should confirm with the supplier by phone if anything looks unusual.",
      },
      {
        q: "Should I use one payment link for all invoices?",
        a: "A reusable link is convenient but makes reconciliation harder because payments may not match a specific invoice. A unique link per invoice, set to the exact amount and labeled with the invoice number, is easier for both you and your client to track.",
      },
      {
        q: "What is a pay now button on an invoice?",
        a: "A pay now button is a clickable button or link on an invoice that opens a secure checkout page where the client can pay by card, digital wallet or another supported method without typing bank details.",
      },
      {
        q: "Can I add a payment link to an invoice if I don't have a website?",
        a: "Yes. Payment links are hosted by the payment provider, so you don't need a website, a shopping cart or any coding. You create the link in the provider's dashboard or app, copy it, and paste it into the payment section of your invoice. The client clicks it and pays on the provider's secure checkout page, and the money is paid out to your linked bank account.",
      },
      {
        q: "Do invoice payment links expire?",
        a: "It depends on the provider and the link type. Some links stay active until you deactivate them, some invoice links close automatically once paid, and some let you set an expiry date. Before resending an old invoice, open the link to make sure it still works and still shows the right amount. If a link has expired, create a new one and tell the client which link to use.",
      },
      {
        q: "Who pays the processing fee when a client pays through a payment link?",
        a: "By default, you do. The provider deducts its fee from the payment before paying out, so you receive slightly less than the invoice total. Some businesses add a surcharge, but card network rules and local laws restrict this, and surcharges on most consumer cards are banned in the UK and EU. Building the cost into your prices, or offering a cheaper bank transfer option, is usually simpler.",
      },
      {
        q: "Should I shorten a payment link before putting it on an invoice?",
        a: "Usually it's better not to. A full link on a payment provider's recognizable domain is easier for clients to trust, while a generic shortened link hides where it goes, which is exactly what scammers rely on. If the full address is very long, many providers offer their own shorter links on their own domain. Whatever you use, keep the format consistent so an unusual link stands out.",
      },
      {
        q: "Can a client pay only part of an invoice through a payment link?",
        a: "Only if the link allows it. An invoice-specific link with a fixed amount takes the full balance, while an open-amount payment page lets the client type any figure, including a partial payment. If you agree to instalments, create a separate link for each agreed amount, label it with the invoice number, and update the balance due on the invoice after each payment arrives.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice payment link is a secure web address, often shown as a "Pay now" button, that takes your client straight to a checkout page where they can pay the invoice by card or another supported method. To add one, create a link for the invoice amount in your payment provider, paste it into the payment section of the invoice, export a PDF and test that it opens correctly.</p>

<p>Below we cover the types of payment links, a step-by-step setup, where to place the pay now button, how to keep reconciliation simple, and how to protect your clients from payment-link scams. You can add a link to any invoice you build with our <a href="/invoice-generator">free invoice generator</a> by pasting it into the payment instructions.</p>

<h2>What an invoice payment link does</h2>
<p>Without a link, paying an invoice means the client copies bank details, logs into online banking, types a reference and hopes they got it right. With an invoice payment link, they click, confirm the amount and pay. Removing those steps is why a pay now button is one of the quickest wins for faster payment, especially for small invoices and for clients who approve and pay from a phone.</p>
<p>A payment link does not replace the invoice. The invoice is still the legal billing document with your details, line items, tax and due date. The link is simply the fastest route to settling it. If you have not set up card payments yet, start with our guide on <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<h2>Types of invoice payment links</h2>
<table><thead><tr><th>Link type</th><th>What the client sees</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Invoice-specific link</td><td>A checkout page for one invoice, with the exact amount pre-filled</td><td>Easy reconciliation, no amount errors</td><td>You create a new link for each invoice</td></tr>
<tr><td>Fixed-amount reusable link</td><td>A checkout for a set price, such as a monthly retainer</td><td>Good for repeat, identical charges</td><td>Payments must be matched to invoices manually</td></tr>
<tr><td>Open-amount payment page</td><td>A page where the client types the amount</td><td>One link works for everything</td><td>Typos, partial payments and harder matching</td></tr>
<tr><td>Bank payment request link</td><td>A request that opens the client's banking app (where available)</td><td>Often cheaper than cards</td><td>Availability depends on country and bank</td></tr>
</tbody></table>
<p>For most freelancers and small businesses, an invoice-specific link is the best default. Reusable links work well for retainers, as long as each payment description references the invoice number.</p>

<h2>How to add a payment link to an invoice in 6 steps</h2>
<ol>
<li><strong>Finish the invoice first.</strong> Confirm the line items, tax and total so the link amount matches exactly. Use a consistent number format; our <a href="/tools/invoice-number-generator">invoice number generator</a> can create one such as INV-2026-0157.</li>
<li><strong>Create the link in your payment provider.</strong> Set the amount and currency, and put the invoice number and your business name in the description so it shows on the checkout page and the client's statement.</li>
<li><strong>Choose accepted methods.</strong> Enable the cards and wallets you are happy to pay fees on. Some providers also let you turn on bank-based methods.</li>
<li><strong>Paste the link into the invoice.</strong> Add it to the payment instructions or notes field, labeled clearly, for example "Pay online: " followed by the full address.</li>
<li><strong>Export and test.</strong> Download the PDF, open it on your computer and your phone, and click the link. Check that it loads the right amount and invoice number.</li>
<li><strong>Mention it in your email.</strong> Repeat the link in the body of the email you send with the invoice; our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> has templates you can adapt.</li>
</ol>

<h2>Where to place the pay now button</h2>
<p>The best place is right next to the amount due, because that is where the client's eye lands. Good placement and clarity matter more than color or size:</p>
<ul>
<li><strong>Near the total.</strong> Put the link directly below the amount due and due date.</li>
<li><strong>Repeated in the payment section.</strong> List it again with your other payment options, such as bank transfer.</li>
<li><strong>Readable as text.</strong> Show the full or shortened address in text, not just the word "Pay", so it still works if printed.</li>
<li><strong>High contrast.</strong> If your template highlights a box or button, keep it legible in black-and-white print.</li>
</ul>
<p>Our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> cover hierarchy and spacing in more detail, and the <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> helps you confirm links survive export.</p>

<h2>Example: an invoice payment section with a link</h2>
<p>Here is how the bottom of a service invoice might look. The numbers are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Brand strategy workshop (half day)</td><td>1</td><td>$900.00</td><td>$900.00</td></tr>
<tr><td>Social media templates</td><td>12</td><td>$45.00</td><td>$540.00</td></tr>
<tr><td colspan="3"><strong>Total due by 15 November 2026</strong></td><td><strong>$1,440.00</strong></td></tr>
</tbody></table>
<blockquote>Payment options for invoice INV-2026-0157:<br>
1. Pay online by card: pay.example.com/inv-2026-0157<br>
2. Bank transfer: account details below, reference INV-2026-0157<br>
Questions? Call 555-0142 before paying if anything on this invoice looks different from usual.</blockquote>
<p>Offering two options (a quick card link and a lower-cost transfer) gives the client choice. For the transfer option, see what to include in <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</p>

<h2>Keep payment links secure</h2>
<p>Payment links are also a favorite tool of scammers, who send fake invoices or "updated" links that lead to lookalike pages. Protect your clients, and your reputation, with a few habits:</p>
<ul>
<li><strong>Use a reputable provider's domain.</strong> Links on a well-known payment domain are easier for clients to trust than unknown shortened links.</li>
<li><strong>Be consistent.</strong> Use the same provider and format every time, so an odd-looking link stands out.</li>
<li><strong>Tell clients your process.</strong> Let them know you will never change payment details by email alone, and invite them to call a number they already have if they get a message that says otherwise.</li>
<li><strong>Never send link "corrections" casually.</strong> If a link was wrong, reissue the invoice and call the client to confirm.</li>
<li><strong>Secure your email and provider accounts.</strong> Two-factor authentication on both makes it much harder for someone to send invoices in your name.</li>
<li><strong>Set expiry where possible.</strong> Links that expire after payment or after a set period cannot be reused fraudulently.</li>
</ul>

<h2>Reconciling payments made through links</h2>
<p>Every payment should match one invoice. Include the invoice number in the link description, record the payment date and amount against the invoice as soon as it arrives, and keep the provider's fee as a separate expense rather than reducing the invoice. When a payment lands, send a confirmation; our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what to include.</p>
<p>If the link goes unused past the due date, resend it in a polite follow-up. Our <a href="/blog/payment-reminder-emails">payment reminder emails</a> are written for that moment, and the guide to handling an <a href="/blog/overdue-invoice">overdue invoice</a> covers the next steps.</p>

<h2>Payment link or bank details: which should you offer?</h2>
<p>Most businesses do best offering both. A payment link wins on convenience; a bank transfer wins on cost, especially for large amounts. The right mix depends on who your clients are and how big your invoices tend to be.</p>
<table><thead><tr><th>Factor</th><th>Invoice payment link</th><th>Bank transfer</th></tr></thead><tbody>
<tr><td>Effort for the client</td><td>Very low: click and pay</td><td>Higher: copy details, add reference</td></tr>
<tr><td>Cost to you</td><td>Processing fee on each payment, varies by provider</td><td>Often low or free domestically</td></tr>
<tr><td>Speed to your account</td><td>Payout schedule, often a few business days</td><td>Same day to a few business days, depending on method</td></tr>
<tr><td>Reconciliation</td><td>Easy when the link carries the invoice number</td><td>Depends on the client using your reference</td></tr>
<tr><td>Typical fit</td><td>Small and medium invoices, consumers, mobile payers</td><td>Large invoices, corporate accounts payable teams</td></tr>
</tbody></table>
<p>A practical approach many service businesses use is to put a pay now link on every invoice, list bank details underneath, and let the client choose. Corporate clients with formal payment runs will usually pay by transfer regardless, while smaller clients and individuals tend to click the link. If card fees on large invoices concern you, you can set a threshold, for example offering the link only on invoices below a certain amount, as long as your terms say so up front.</p>
<p>Whichever you offer, keep the instructions identical across invoices. Consistency helps your clients' accounts teams set you up once and pay without questions, and it makes an unexpected change easier to spot as possible fraud.</p>

<h2>Common payment link mistakes</h2>
<ul>
<li>Link amount does not match the invoice total after a last-minute edit.</li>
<li>Link shown only as a button image, so it disappears when printed or forwarded.</li>
<li>No invoice number in the payment description, making reconciliation guesswork.</li>
<li>Using an open-amount page for every invoice and receiving partial payments.</li>
<li>Expired or deactivated link left on an invoice the client pays late.</li>
</ul>

<h2>Add a payment link to your next invoice</h2>
<p>Build your invoice in the <a href="/invoice-generator">invoice generator</a>, pick an uncluttered design such as the <a href="/invoice-templates/minimal">Minimal invoice template</a> so the pay now link stands out, paste your link next to the total, and test the PDF before sending. One clear link can remove days from your payment cycle.</p>
`,
  },
  {
    slug: "bank-details-on-invoice",
    title: "Bank Details on Invoice: IBAN, SWIFT and Routing Number Guide",
    description:
      "Which bank details to put on an invoice for US, UK, EU and international clients: routing numbers, sort codes, IBAN and SWIFT, plus tips to prevent fraud.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "iso-20022-payments",
      "ach-vs-wire-transfer",
      "invoice-international-clients",
      "add-payment-link-to-invoice",
    ],
    faqs: [
      {
        q: "Is it safe to put bank details on an invoice?",
        a: "Generally yes. The details needed to receive a transfer, such as account number and routing number or IBAN, are routinely shared for that purpose. The bigger risk is fraudsters sending fake invoices with their own details, so tell clients to verify any change of bank details by phone.",
      },
      {
        q: "What bank details do I need to receive an international payment?",
        a: "Typically your account holder name, IBAN or account number, the bank's SWIFT/BIC code, and the bank's name and address. US accounts receiving international wires use the account number, a routing number and the bank's SWIFT code, as US banks do not use IBANs.",
      },
      {
        q: "What is the difference between IBAN and SWIFT code?",
        a: "An IBAN identifies a specific bank account, including the country and bank, while a SWIFT or BIC code identifies the bank itself. International transfers often need both.",
      },
      {
        q: "Should I put my bank details on every invoice?",
        a: "Yes, if you accept bank transfers. Putting payment details on the invoice itself saves the client from searching old emails and reduces the risk of them using outdated or fraudulent details.",
      },
      {
        q: "Is the ACH routing number the same as the wire routing number?",
        a: "Not always. Some US banks use a different routing number for wires than for ACH transfers, so check with your bank and label each number clearly on your invoice.",
      },
      {
        q: "Can someone take money from my account with just my account and routing numbers?",
        a: "They cannot simply withdraw cash, but in the US criminals sometimes use account and routing numbers to attempt unauthorized ACH debits or counterfeit checks. Consumer accounts have legal protections against unauthorized transfers, while business accounts usually have shorter windows to report problems. Review statements often, report anything unusual quickly, and ask your bank about tools such as ACH debit blocks or positive pay.",
      },
      {
        q: "How do I find my IBAN?",
        a: "Your IBAN is usually shown in your online banking or banking app, on bank statements, or in your account details on your bank's website. Copy it directly from one of those sources rather than generating it with an online calculator, since one wrong character can send a payment back. Banks in the US and some other countries do not issue IBANs, so use your account and routing numbers instead.",
      },
      {
        q: "Do I need to include an intermediary bank on my invoice?",
        a: "Only if your bank asks for it. Some banks need incoming international payments, often in US dollars or other foreign currencies, to pass through a named correspondent bank, and they publish its SWIFT code for that purpose. If your bank gives you intermediary instructions, add them under a clear heading for international payers. If not, leave them off to avoid confusing clients who pay domestically.",
      },
      {
        q: "Should I include my bank's address on an invoice?",
        a: "For international transfers, it helps. Many overseas payers' banks ask for the beneficiary bank's name and address along with the SWIFT/BIC code, and missing details can delay a wire. For domestic payments it's rarely needed, since the routing number, sort code or IBAN already identifies the bank. Put the address in the international section of your payment details so domestic clients can ignore it.",
      },
      {
        q: "Can I put Wise or Payoneer account details on an invoice instead of my bank's?",
        a: "Yes, if the service gives you receiving account details in your name. Copy the account holder name, account number and routing code, or IBAN and SWIFT/BIC, exactly as the app shows them, and state which currency each account accepts. Clients then pay as if paying a local supplier. Check the provider's receiving fees and limits first, and label the details clearly so nobody mistakes them for a change of bank.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The bank details on an invoice should include the account holder name, bank name, and the identifiers your client's bank needs: a routing number and account number for US payments, a sort code and account number in the UK, an IBAN and BIC in Europe, and a SWIFT/BIC code plus IBAN or account number for international transfers. Add a payment reference, ideally your invoice number, so the payment can be matched.</p>

<p>This guide lists exactly which details to show by country, explains IBAN, SWIFT and routing numbers in plain English, shows a sample payment block, and covers the fraud risks every business should guard against. You can paste your details into the payment section of any invoice built with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Why bank details belong on the invoice itself</h2>
<p>Clients pay faster when everything they need is on one page. If your bank details are buried in an old email or a supplier form, the client's accounts team has to go looking, and some will simply wait for you to chase. Putting payment details on every invoice also reduces the chance that a client pays into an outdated account, and it creates a clear record of where you asked to be paid. It is one of the basic fields in our guide to <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>.</p>

<h2>Which bank details to include, by country</h2>
<table><thead><tr><th>Where the payment is going</th><th>Details to include</th><th>Format example</th></tr></thead><tbody>
<tr><td>United States (domestic ACH or wire)</td><td>Account name, bank name, routing number (ABA), account number, account type</td><td>Routing: 9 digits</td></tr>
<tr><td>United Kingdom (domestic)</td><td>Account name, bank name, sort code, account number</td><td>Sort code 12-34-56, account number 8 digits</td></tr>
<tr><td>Eurozone and SEPA countries</td><td>Account name, IBAN, BIC</td><td>German IBAN: 22 characters starting DE</td></tr>
<tr><td>United Arab Emirates</td><td>Account name, bank name, IBAN, SWIFT/BIC</td><td>UAE IBAN: 23 characters starting AE</td></tr>
<tr><td>Pakistan</td><td>Account title, bank name, branch, IBAN, SWIFT/BIC for foreign transfers</td><td>Pakistan IBAN: 24 characters starting PK</td></tr>
<tr><td>Any international transfer</td><td>Account name, IBAN or account number, SWIFT/BIC, bank name and address; for US accounts, routing number too</td><td>SWIFT/BIC: 8 or 11 characters</td></tr>
</tbody></table>
<p>Our country presets set the right currency and tax ID labels: try the <a href="/invoice-generator/usa">USA invoice generator</a>, <a href="/invoice-generator/uk">UK invoice generator</a>, <a href="/invoice-generator/uae">UAE invoice generator</a> or <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>, then add the bank details for that market.</p>

<h2>IBAN, SWIFT, routing number and sort code explained</h2>
<h3>IBAN</h3>
<p>The International Bank Account Number identifies one specific account. It starts with a two-letter country code and two check digits, followed by the bank and account identifiers. Length is fixed per country: 22 characters in the UK and Germany, 23 in the UAE, 24 in Pakistan. The check digits let banks catch most typos before money moves.</p>
<h3>SWIFT / BIC</h3>
<p>The SWIFT code, also called a BIC (Bank Identifier Code), identifies the bank, not the account. It is 8 or 11 characters: bank code, country code, location and optional branch code. International transfers outside SEPA nearly always need it.</p>
<h3>Routing number (ABA)</h3>
<p>US banks use a 9-digit routing number to identify the bank for domestic transfers. Some banks publish a different routing number for wires than for ACH, so label each one clearly. The US does not use IBANs; overseas payers sending money to a US account use the SWIFT code plus your account number.</p>
<h3>Sort code</h3>
<p>UK banks use a 6-digit sort code with an 8-digit account number for domestic payments. Overseas payers sending pounds to a UK account will usually need your IBAN and BIC instead.</p>

<h2>Sample bank details block for an invoice</h2>
<p>Keep the block short, labeled and copy-friendly. Here is an example for a UK business billing both domestic and overseas clients (all numbers are placeholders):</p>
<blockquote>Payment by bank transfer<br>
Account name: Northbrook Studio Ltd<br>
Bank: Example Bank plc<br>
Sort code: 12-34-56 · Account number: 12345678<br>
IBAN: GB00 EXMP 1234 5612 3456 78 · BIC: EXMPGB2L<br>
Reference: INV-2026-0213<br>
Our bank details will never change by email. If you receive a message saying they have, call us on 020 7946 0000 before paying.</blockquote>
<p>Using the invoice number as the reference makes reconciliation simple. For a field-by-field look at who pays which transfer charges abroad, see <a href="/blog/invoice-international-clients">how to invoice international clients</a>.</p>

<h2>International transfer charges: OUR, SHA and BEN</h2>
<p>On international wires, the sender usually chooses who pays the fees. <strong>OUR</strong> means the sender pays all charges, <strong>SHA</strong> means charges are shared, and <strong>BEN</strong> means the recipient pays. With SHA or BEN, intermediary and receiving bank fees can reduce what arrives. If you need the full amount, state on the invoice that bank charges are the payer's responsibility and agree it in your contract. Fees vary by bank and route, so check with your own bank what it charges for incoming transfers. For a comparison of US transfer types, read <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h2>Protect clients from invoice fraud</h2>
<p>The biggest risk with bank details is not that someone sees yours. It is that a fraudster sends your client a fake invoice, or a convincing email, saying your bank details have changed. This is often called invoice redirection fraud or business email compromise, and the money is frequently unrecoverable once sent. Practical safeguards:</p>
<ol>
<li><strong>Add a fixed warning line</strong> to every invoice stating that your bank details will not change by email.</li>
<li><strong>Verify every change by phone</strong> using a number already on file, never a number in the email requesting the change. Encourage your clients to do the same, and do it yourself when a supplier says their details changed.</li>
<li><strong>Use account-name checks where available.</strong> UK banks offer Confirmation of Payee, and EU payment providers now offer Verification of Payee for euro credit transfers, both of which check the account name against the account number before payment.</li>
<li><strong>Send a test payment</strong> for large first payments or after a genuine change, and confirm receipt before sending the balance.</li>
<li><strong>Secure your email account</strong> with strong passwords and two-factor authentication, since compromised mailboxes are the usual starting point.</li>
<li><strong>Issue a formal notice for real changes.</strong> If you do switch banks, tell clients in advance through more than one channel and update your invoice template on a set date.</li>
</ol>

<h2>Where to put bank details on the invoice</h2>
<p>Bank details belong in the payment section, usually at the bottom of the invoice below the totals, or in a clearly labeled box beside the amount due. A few layout habits make them easier to use:</p>
<ul>
<li><strong>Give them a heading</strong> such as "How to pay" or "Payment by bank transfer," so they are easy to find at a glance.</li>
<li><strong>One detail per line</strong> with a label in front of each number. Long strings run together are easy to mistype.</li>
<li><strong>Group IBANs in blocks of four</strong> characters when displaying them; payers can still enter them without spaces.</li>
<li><strong>Use selectable text, not an image</strong>, so the client can copy and paste instead of retyping.</li>
<li><strong>Separate domestic and international details</strong> if you bill both, with a short heading for each.</li>
<li><strong>Keep the reference instruction prominent.</strong> "Please use INV-2026-0213 as your reference" matters as much as the account number.</li>
</ul>
<p>If you bill clients in more than one currency, consider listing a separate account for each currency rather than asking clients to convert. Receiving in the client's currency into a matching account can avoid conversion costs on their side, which tends to mean fewer short payments on yours. Whatever you list, double-check it against a recent bank statement every time you update your template; one transposed digit can send a payment back days later.</p>

<h2>Common mistakes with invoice bank details</h2>
<ul>
<li>Account name that does not match the business name on the invoice, which can trigger name-check warnings.</li>
<li>Missing SWIFT/BIC for overseas clients, or an IBAN with a typo.</li>
<li>Using the ACH routing number when the client is sending a wire.</li>
<li>No payment reference, leaving unmatched payments in your account.</li>
<li>Old bank details left in a saved template after switching banks.</li>
</ul>
<p>More billing slip-ups are listed in our guide to <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>

<h2>Offer a faster option alongside bank transfer</h2>
<p>Bank transfers are often the cheapest way to get paid, but some clients prefer to pay by card. Listing both gives them a choice. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a> and our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> if you want to add one.</p>

<p>Fraudsters often target exactly these details. Read <a href="/blog/invoice-scams">how to spot invoice scams</a> so you and your clients know how to verify a change of bank account.</p>

<h2>Add your bank details to an invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose a structured layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a>, and paste your labeled bank details and payment reference into the payment section. Your draft is saved in your browser, so your bank details are ready for the next invoice on the same device.</p>
`,
  },
  {
    slug: "early-payment-discount",
    title: "Early Payment Discount: How 2/10 Net 30 Works (With Examples)",
    description:
      "How an early payment discount like 2/10 net 30 works, what it really costs you, how to show it on an invoice, and when offering one makes sense for cash flow.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "discount-on-invoice",
      "dynamic-discounting",
      "invoice-payment-terms",
      "late-payment-fees",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What does 2/10 net 30 mean?",
        a: "2/10 net 30 means the client can take a 2% discount if they pay within 10 days of the invoice date; otherwise the full amount is due within 30 days.",
      },
      {
        q: "Is an early payment discount worth offering?",
        a: "It can be if faster cash is worth more to you than the discount, for example when it lets you avoid borrowing or invoice factoring. Because the implied annual cost of terms like 2/10 net 30 is high, many businesses reserve discounts for large or slow-paying accounts.",
      },
      {
        q: "What happens if a client takes the discount but pays late?",
        a: "The discount only applies if payment arrives within the discount window. If a client deducts it after the deadline, you can politely invoice or request the shortfall, or choose to waive it once as goodwill and restate the terms.",
      },
      {
        q: "How do I show an early payment discount on an invoice?",
        a: "State the terms in words and numbers near the total, for example: 2% discount (USD 100.00) if paid by 1 November 2026; otherwise USD 5,000.00 due by 21 November 2026. Real dates prevent arguments about when the window closes.",
      },
      {
        q: "Is an early payment discount the same as a trade discount?",
        a: "No. A trade discount reduces the price before the invoice is issued and is shown on the invoice lines, while an early payment discount is conditional on when the client pays.",
      },
      {
        q: "Should an early payment discount be calculated before or after tax?",
        a: "Decide and state it in your terms, because practice varies. Many businesses apply the percentage to the net amount before tax, while others apply it to the full invoice total. Tax rules can also affect the answer: in the UK, VAT on a prompt payment discount is due on what the customer actually pays, and US states differ. Ask your accountant which method fits your tax position.",
      },
      {
        q: "What does 2/10 EOM mean?",
        a: "EOM stands for end of month. Under 2/10 EOM terms, the client can take a 2% discount if they pay within 10 days after the end of the month in which the invoice was issued, rather than 10 days from the invoice date. Because conventions vary between industries, spell out both the discount deadline and the final due date as calendar dates on the invoice.",
      },
      {
        q: "What is dynamic discounting?",
        a: "Dynamic discounting is a sliding-scale version of an early payment discount: the earlier the buyer pays, the bigger the discount, instead of one fixed rate and window. It is usually offered by large buyers through their procurement or accounts payable platforms. For a small supplier it can unlock cash quickly, but calculate the implied annual cost the same way you would for 2/10 net 30 before accepting.",
      },
      {
        q: "Can I offer an early payment discount to some clients but not others?",
        a: "Generally, yes. Payment terms are a commercial agreement, so you can offer a discount to a large, slow-paying account and keep standard terms for everyone else. Put the discount in that client's contract or quote, apply it consistently, and make sure each invoice shows the right terms for that client. If you sell goods in a regulated market, ask an adviser whether any pricing rules apply.",
      },
      {
        q: "Can a client take the early payment discount if they pay by credit card?",
        a: "Only if your terms allow it. Card fees can cancel out much of the benefit, so some businesses limit the discount to bank transfers or ACH payments and say so on the invoice, for example: 2% discount applies to bank transfers received by 1 November 2026. If you don't specify, a client may reasonably assume any payment method qualifies, so make the condition clear upfront.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An early payment discount is a small reduction, such as 2%, that a client can take if they pay an invoice before a set date. The most common format is "2/10 net 30": take 2% off if you pay within 10 days, otherwise pay the full amount within 30 days. It speeds up cash flow, but it is an expensive form of financing, so use it deliberately.</p>

<p>This article explains how to read early payment discount terms, calculates what a discount really costs, shows how to put one on an invoice, and covers the tax and bookkeeping points to check. You can add discount terms to the notes or payment terms of any invoice made with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>How early payment discount terms work</h2>
<p>Early payment discount terms have three parts: the discount percentage, the discount window, and the final due date. They are also called cash discounts, prompt payment discounts or settlement discounts. Common examples:</p>
<table><thead><tr><th>Terms</th><th>Meaning</th></tr></thead><tbody>
<tr><td>2/10 net 30</td><td>2% off if paid within 10 days; full amount due in 30 days</td></tr>
<tr><td>1/10 net 30</td><td>1% off if paid within 10 days; full amount due in 30 days</td></tr>
<tr><td>2/15 net 45</td><td>2% off if paid within 15 days; full amount due in 45 days</td></tr>
<tr><td>3/7 net 30</td><td>3% off if paid within 7 days; full amount due in 30 days</td></tr>
</tbody></table>
<p>Days are usually counted from the invoice date, but some businesses count from delivery or receipt. Whatever you choose, write the actual calendar dates on the invoice. Our guide to <a href="/blog/invoice-due-date">invoice due dates</a> explains why "Net 30" alone causes confusion, and <a href="/blog/invoice-payment-terms">invoice payment terms</a> covers the wider set of options.</p>

<h2>Worked example: 2/10 net 30 on a $5,000 invoice</h2>
<p>You invoice a client $5,000.00 on 22 October 2026 with terms of 2/10 net 30.</p>
<table><thead><tr><th>Scenario</th><th>Pay by</th><th>Discount</th><th>Amount paid</th></tr></thead><tbody>
<tr><td>Client pays early</td><td>1 November 2026</td><td>2% × $5,000.00 = $100.00</td><td>$4,900.00</td></tr>
<tr><td>Client pays on standard terms</td><td>21 November 2026</td><td>None</td><td>$5,000.00</td></tr>
</tbody></table>
<p>If the client pays early, you receive your money 20 days sooner in exchange for $100.00.</p>

<h2>What an early payment discount really costs</h2>
<p>A 2% discount sounds small, but it buys only 20 days of faster payment. Expressed as an annual rate, it is expensive. A common approximation is:</p>
<p><code>Annualized cost = discount ÷ (100 − discount) × 365 ÷ (full term − discount window)</code></p>
<ul>
<li><strong>2/10 net 30:</strong> 2 ÷ 98 × 365 ÷ 20 ≈ 37.2% a year.</li>
<li><strong>1/10 net 30:</strong> 1 ÷ 99 × 365 ÷ 20 ≈ 18.4% a year.</li>
<li><strong>2/15 net 45:</strong> 2 ÷ 98 × 365 ÷ 30 ≈ 24.8% a year.</li>
</ul>
<p>That is why finance teams at larger companies often take every discount they are offered: for them, it is a high return on cash. For you, it may still be worth it if the alternative is a costly overdraft, a missed supplier payment or <a href="/blog/invoice-factoring">invoice factoring</a>, which also charges for early access to money you are owed. Compare it against those real alternatives, not against zero.</p>

<h2>Pros and cons of offering an early payment discount</h2>
<table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Faster, more predictable cash flow</td><td>High implied cost compared with most borrowing</td></tr>
<tr><td>Positive incentive rather than a penalty</td><td>Some clients take the discount and still pay late</td></tr>
<tr><td>Can move your invoice up the client's payment queue</td><td>More admin when matching discounted payments</td></tr>
<tr><td>Fewer reminders and less chasing</td><td>Hard to withdraw once clients are used to it</td></tr>
</tbody></table>
<p>An early payment discount works as the carrot; <a href="/blog/late-payment-fees">late payment fees</a> are the stick. Many businesses use one or the other, and some use both, as long as both are agreed in the contract before work starts.</p>

<h2>When an early payment discount makes sense</h2>
<ul>
<li><strong>Large invoices with long terms</strong>, where waiting 45 or 60 days strains your cash.</li>
<li><strong>Clients with slow approval processes</strong> that prioritize invoices with discounts.</li>
<li><strong>Seasonal businesses</strong> that need cash before a busy period.</li>
<li><strong>When your margin can absorb it.</strong> A 2% discount on a 10% margin gives away a fifth of your profit on that job.</li>
</ul>
<p>It usually makes less sense for small invoices that clients already pay quickly, or where a simpler fix would work, such as accepting card payments or invoicing on the day the work is approved. For other approaches, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> and <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<h2>How to add an early payment discount to an invoice</h2>
<ol>
<li><strong>Agree the terms first.</strong> Put the discount, window and due date in your quote or contract.</li>
<li><strong>Invoice the full amount.</strong> The line items and total show the undiscounted price; the discount is conditional.</li>
<li><strong>State the terms near the total</strong> in words, percentages and amounts.</li>
<li><strong>Write real dates</strong> for both the discount deadline and the final due date.</li>
<li><strong>Say how "paid" is measured</strong>, for example "cleared funds received in our account by".</li>
<li><strong>Record what you actually receive</strong> and book the difference as a sales discount, not as a write-off.</li>
</ol>
<p>Sample wording for the invoice notes:</p>
<blockquote>Terms: 2/10 net 30. Take a 2% early payment discount (USD 100.00) and pay USD 4,900.00 if cleared funds reach us by 1 November 2026. Otherwise the full USD 5,000.00 is due by 21 November 2026. Please quote INV-2026-0188 as your payment reference.</blockquote>

<h2>Tax and accounting points to check</h2>
<p>Discounts can affect tax, so confirm the treatment with your accountant or tax authority:</p>
<ul>
<li><strong>VAT:</strong> In the UK, VAT on prompt payment discounts is due on the amount the customer actually pays, and the invoice needs to make the discount terms clear. If the discount is not taken, VAT is due on the full price. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the required invoice fields; rules elsewhere differ.</li>
<li><strong>US sales tax:</strong> Whether a cash discount reduces the taxable amount depends on the state. Check your state's guidance before adjusting how you charge tax.</li>
<li><strong>Bookkeeping:</strong> Most accounting setups record the full invoice as revenue and the discount taken as a separate "sales discounts" line, which keeps your records easy to reconcile and makes the true cost of the discount visible in your <a href="/blog/cash-flow-management">cash flow management</a>.</li>
</ul>

<h2>Early payment discount vs other ways to speed up payment</h2>
<p>A discount is only one tool. Before you commit to giving away margin, compare it with the alternatives:</p>
<table><thead><tr><th>Approach</th><th>How it works</th><th>Cost to you</th><th>Best when</th></tr></thead><tbody>
<tr><td>Early payment discount</td><td>Client pays less for paying sooner</td><td>The discount on every early payment</td><td>Large invoices and clients that chase discounts</td></tr>
<tr><td>Late payment fee</td><td>Client pays more for paying late</td><td>Nothing if clients pay on time; some goodwill risk</td><td>Clients that already pay on time most of the time</td></tr>
<tr><td>Deposit or milestone billing</td><td>Part of the fee is paid upfront or in stages</td><td>None</td><td>Long or high-value projects</td></tr>
<tr><td>Shorter payment terms</td><td>Net 14 instead of Net 30</td><td>None, but some clients will push back</td><td>Small invoices and new clients</td></tr>
<tr><td>Easier payment methods</td><td>Card link or instant bank payment on the invoice</td><td>Processing fees on card payments, which vary</td><td>Clients who pay from a phone or need convenience</td></tr>
</tbody></table>
<p>If shorter terms or a deposit gets you the same cash flow benefit at no cost, choose those first. Keep the early payment discount for situations where it genuinely changes client behavior, such as a large account whose finance team pays discounted invoices first. It is also worth testing: offer the discount to a few clients for a quarter, then compare how quickly they paid against your usual average before rolling it out further.</p>

<h2>Handling clients who deduct the discount late</h2>
<p>Sooner or later a client will take the 2% after the deadline. Decide your policy in advance. A friendly, factual note usually works: point to the agreed terms and the date payment arrived, and ask for the shortfall on their next payment run. For a valued client you might waive it once and restate the terms. What matters is applying the policy consistently, so the discount keeps its value as an incentive.</p>

<h2>Add early payment terms to your invoice</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose a clear layout such as the <a href="/invoice-templates/classic">Classic invoice template</a>, and add your discount terms and dates to the payment terms field. Done well, an early payment discount turns slow invoices into predictable cash.</p>
`,
  },
  {
    slug: "ach-vs-wire-transfer",
    title: "ACH vs Wire Transfer: Fees, Speed and Which to Use for Invoices",
    description:
      "ACH vs wire transfer compared for invoice payments: speed, typical fees, reversibility, international use and security, plus which to ask clients for and when.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-long-does-a-wire-transfer-take",
      "us-paper-checks-phase-out",
      "sepa-direct-debit",
      "bank-details-on-invoice",
      "how-to-accept-credit-card-payments",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "Is ACH or wire transfer faster?",
        a: "Wire transfers are usually faster, often arriving the same business day for domestic US wires. Standard ACH transfers typically take one to two business days, although same-day ACH is available for eligible payments if both banks support it.",
      },
      {
        q: "Which is cheaper, ACH or wire?",
        a: "ACH is usually cheaper and is often free for business customers to receive, while wires commonly carry fees for the sender and sometimes the recipient. Exact fees depend on your bank and account type.",
      },
      {
        q: "Can an ACH payment be reversed?",
        a: "In limited circumstances, yes. ACH rules allow reversals for errors such as duplicate payments, and consumers can dispute unauthorized debits. Wire transfers are generally final once sent, which is why fraudsters favor them.",
      },
      {
        q: "Can I receive an international payment by ACH?",
        a: "ACH is a US domestic network, so payments from abroad usually arrive as international wires through SWIFT or via a money transfer or multi-currency service. Some services convert overseas payments into local ACH deposits.",
      },
      {
        q: "What information do I need to receive an ACH or wire payment?",
        a: "For both, the payer needs your account name, bank name, routing number and account number. Some banks use a different routing number for wires, and international wires also need your bank's SWIFT code.",
      },
      {
        q: "Is there a limit on how much can be sent by same-day ACH?",
        a: "Yes. Since March 2022, Nacha rules allow same-day ACH entries of up to $1 million per payment. Larger payments are not rejected but settle on the next-day schedule instead. Your bank may set lower limits of its own, and it may charge extra for same-day service, so check with your bank, or ask your client to check with theirs, before relying on same-day ACH for a large invoice.",
      },
      {
        q: "What is the difference between ACH and EFT?",
        a: "EFT, or electronic funds transfer, is a broad term for any money moved electronically, including ACH transfers, wires, card payments and instant payments. ACH is one specific US network for batch-processed bank transfers. When a US client says they will pay by EFT, they usually mean ACH, but confirm the method so you can give them the correct routing number and avoid delays.",
      },
      {
        q: "Is Zelle an ACH payment or a wire transfer?",
        a: "Neither, from your point of view as the payee. Zelle is a separate bank-owned network that moves money between enrolled US bank accounts, usually within minutes, and each bank sets its own sending limits. Like a wire, a Zelle payment is generally hard to reverse once sent. It suits smaller invoices from clients you know, while ACH or wires handle larger amounts.",
      },
      {
        q: "Do ACH and wire transfers go through on weekends and holidays?",
        a: "Generally not. ACH and Fedwire process only on business days, so a payment started on a Friday evening or just before a federal holiday usually moves on the next business day. Instant payment networks such as FedNow and RTP can run around the clock if both banks support them. Set due dates with this in mind and ask clients to pay a few days early around holidays.",
      },
      {
        q: "What does it mean if an ACH payment is returned with code R01?",
        a: "R01 means insufficient funds: the payer's account didn't have enough money to cover the debit. Returns like this usually come back within two banking days of settlement, so a payment that appeared in your account can be reversed. If it happens, tell the client, ask them to arrange payment again, and don't treat the invoice as paid until the funds have fully settled.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the ACH vs wire transfer choice, ACH is the cheaper, slower option: payments move in batches through the ACH network and usually arrive in one to two business days, with low or no fees. A wire transfer moves money individually and usually arrives the same day, but typically costs more and is very hard to reverse. For routine domestic invoices, ACH is usually best; for large, urgent or international payments, wires are common.</p>

<p>Below we compare the two side by side, explain how each one works, walk through a worked example, and show how to word the payment section of your invoice so clients use the method you prefer. Our <a href="/invoice-generator/usa">USA invoice generator</a> sets USD and US fields by default, and the main <a href="/invoice-generator">invoice generator</a> works for every country.</p>

<h2>ACH vs wire transfer at a glance</h2>
<table><thead><tr><th>Feature</th><th>ACH transfer</th><th>Wire transfer</th></tr></thead><tbody>
<tr><td>Network</td><td>Automated Clearing House (US domestic), governed by Nacha rules</td><td>Fedwire or CHIPS domestically; SWIFT messaging internationally</td></tr>
<tr><td>How it settles</td><td>In batches, several times a day</td><td>Individually, in near real time</td></tr>
<tr><td>Typical speed</td><td>1–2 business days; same-day ACH for eligible payments</td><td>Same business day domestically; international often 1–5 business days</td></tr>
<tr><td>Typical cost</td><td>Low or free, depending on bank</td><td>Higher; sending fees are common and some banks charge to receive</td></tr>
<tr><td>Reversibility</td><td>Limited reversals possible (errors, unauthorized debits)</td><td>Generally final once sent</td></tr>
<tr><td>International</td><td>No (domestic only)</td><td>Yes</td></tr>
<tr><td>Best for</td><td>Recurring and routine domestic invoices, payroll, subscriptions</td><td>Large, time-sensitive or cross-border payments, property and closing payments</td></tr>
</tbody></table>
<p>Fees and cut-off times vary from bank to bank and change over time, so check your own bank's schedule rather than relying on general figures.</p>

<h2>How ACH transfers work</h2>
<p>ACH is the network US banks use for direct deposits, bill payments and most business-to-business transfers. Payments are collected and processed in batches, which keeps costs low. There are two directions:</p>
<ul>
<li><strong>ACH credit</strong>: your client pushes money from their account to yours. This is what most clients do when paying an invoice by "bank transfer" in the US.</li>
<li><strong>ACH debit</strong>: you pull money from the client's account with their authorization, typically through a payment provider or for recurring billing.</li>
</ul>
<p>Because ACH has rules for returns and disputes, a payment that appears in your account can, in some limited situations, be returned afterwards, for example if it was a duplicate or unauthorized. That's rare for genuine business payments but worth knowing for first-time clients.</p>
<h3>Why ACH payments take a day or two</h3>
<p>Banks submit ACH files at set times during the business day, and payments move only on business days. A payment the client initiates late on a Friday may not start moving until Monday, and bank holidays add further delay. Same-day ACH narrows the gap for eligible payments, but both banks have to support it and the client's bank may charge for it. If you need money by a specific date, ask the client to send it at least two business days earlier, or state on the invoice that payment must be "received in our account by" the due date rather than "sent by" it.</p>
<h3>Check payments still exist</h3>
<p>Some US businesses still pay by paper check. Checks are slower again, because of mailing and deposit holds, and carry their own fraud risks. If a client insists on checks, give a clear mailing address on the invoice, but encourage ACH as the default.</p>

<h2>How wire transfers work</h2>
<p>A wire is a single, individually processed instruction from one bank to another. Domestic US wires typically settle through Fedwire on the same business day if sent before the bank's cut-off time. International wires use SWIFT messaging, may pass through one or more intermediary banks, and can lose part of the amount to intermediary fees, depending on whether the sender chose to cover charges.</p>
<p>Wires are generally irrevocable once processed. That certainty is valuable for sellers, but it also makes wires the favorite tool of payment fraudsters, which is why verification matters so much (more on that below).</p>
<h3>What slows down a wire</h3>
<p>Wires that miss the sending bank's daily cut-off time go out the next business day. International wires can be held for compliance checks, delayed by time zones and public holidays in either country, or returned if the beneficiary name does not match the account. Giving the payer your exact account name, the correct SWIFT code and any intermediary bank instructions your bank requires is the best way to avoid a wire bouncing back days later, minus fees.</p>

<h2>Faster alternatives: instant payments</h2>
<p>The US also has instant payment networks, such as the RTP network and the Federal Reserve's FedNow service, that let participating banks send money in seconds, around the clock. Not every bank offers them yet, and limits vary. If your bank and your client's bank both support instant payments, they can combine the speed of a wire with lower costs. Ask your bank what it supports.</p>

<h2>Worked example: an $18,000 project invoice</h2>
<p>A consultant invoices a US client $18,000.00, due Net 30. The client's accounts team can pay by ACH or by wire. Fees below are illustrative only; actual fees depend on each bank.</p>
<table><thead><tr><th>Option</th><th>Arrives</th><th>Illustrative fee to client</th><th>Illustrative fee to consultant</th><th>Consultant receives</th></tr></thead><tbody>
<tr><td>ACH credit on day 28</td><td>Day 29–30</td><td>$0.00</td><td>$0.00</td><td>$18,000.00</td></tr>
<tr><td>Domestic wire on day 30</td><td>Day 30</td><td>$25.00</td><td>$15.00</td><td>$17,985.00</td></tr>
</tbody></table>
<p>For a routine invoice, ACH gets the money in on time at no cost. A wire would make sense if the consultant needed the funds on a specific day, or if the client was abroad. Compared with paying the same invoice by card, both bank options are usually far cheaper; see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a> for how card fees are structured.</p>

<h2>Which should you ask clients to use?</h2>
<ul>
<li><strong>Routine domestic invoices:</strong> ACH. Cheap and reliable, and most business clients prefer it.</li>
<li><strong>Large one-off payments with a hard deadline:</strong> wire, or instant payment if both banks support it.</li>
<li><strong>International clients:</strong> international wire, or a multi-currency or money transfer service. Read <a href="/blog/invoice-international-clients">how to invoice international clients</a> for currency and fee tips.</li>
<li><strong>Small invoices or clients who want convenience:</strong> a card or bank payment link. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</li>
</ul>
<p>Whatever you choose, agree it in your <a href="/blog/invoice-payment-terms">invoice payment terms</a> so the client's accounts team sets you up correctly from the first invoice.</p>

<h2>What to put on your invoice</h2>
<p>List the method you prefer first, label each number clearly, and include a reference:</p>
<blockquote>Preferred payment: ACH credit<br>
Account name: Redwood Analytics LLC · Bank: Example Bank, N.A.<br>
ACH routing number: 000000000 · Account number: 0000000000 (checking)<br>
Wire routing number: 000000000 · SWIFT (international wires): EXMPUS33<br>
Reference: INV-2026-0311<br>
Our bank details never change by email. Call 555-0187 to verify before sending any payment.</blockquote>
<p>Some banks use different routing numbers for ACH and wires, so confirm both with your bank. Our full guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers IBAN, SWIFT and sort codes for other countries.</p>

<h2>Security: protect wire and ACH payments</h2>
<p>Because wires are hard to recall, criminals often impersonate suppliers and send "updated" bank details, or hack email accounts to intercept real invoices. Simple rules prevent most losses:</p>
<ol>
<li>Treat any request to change bank details as suspicious until verified by phone on a known number.</li>
<li>Never act on bank details sent only by email for a first payment; confirm by a second channel.</li>
<li>For large first payments, send a small test amount and confirm it arrived.</li>
<li>Use two-factor authentication on email and online banking.</li>
<li>If a payment goes to the wrong account, contact your bank immediately. Speed matters for any chance of recovery.</li>
</ol>

<h2>Record payments when they arrive</h2>
<p>Match each deposit to its invoice using the reference, mark the invoice paid, and send a confirmation. A <a href="/blog/payment-receipt-template">payment receipt template</a> makes that quick. Keeping this routine tight is part of good billing hygiene, covered in our <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>

<p>Business payers often send a <a href="/blog/remittance-advice">remittance advice</a> with an ACH payment so you can match it to the right invoices.</p>

<h2>Create an invoice with clear payment instructions</h2>
<p>Build your invoice with a clean, numbers-friendly layout such as the <a href="/invoice-templates/slate">Slate invoice template</a>, add your ACH and wire details with labels and a reference, and download the PDF. Clear instructions are the easiest way to make sure the right payment method is used every time.</p>
`,
  },
  {
    slug: "payment-receipt-template",
    title: "Payment Receipt Template: What to Include + Free Example",
    description:
      "Use this payment receipt template to confirm payments: what to include, a worked example for full and partial payments, numbering and record-keeping tips.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "lien-waiver",
      "payment-confirmation-email",
      "rent-receipt-template",
      "invoice-vs-receipt",
      "deposit-invoice",
      "statement-of-account",
    ],
    faqs: [
      {
        q: "What should a payment receipt include?",
        a: "A payment receipt should include a receipt number, the date of payment, your business details, the payer's name, the amount received, the payment method, the invoice it relates to, and the remaining balance if the payment was partial.",
      },
      {
        q: "Is a receipt the same as an invoice?",
        a: "No. An invoice requests payment for goods or services, while a receipt confirms that payment has been received. Many businesses send a receipt or a paid invoice after the money arrives.",
      },
      {
        q: "Can I use an invoice marked PAID as a receipt?",
        a: "Often, yes. An invoice marked PAID with the payment date, amount and method is commonly accepted as proof of payment. Some clients or tax rules may require a separate receipt, so issue one if asked.",
      },
      {
        q: "Do receipts need their own numbering?",
        a: "It is good practice to give receipts their own sequential series, such as REC-2026-0001, separate from invoice numbers, so each document is unique and easy to trace in your records.",
      },
      {
        q: "Should I issue a receipt for partial payments?",
        a: "Yes. A receipt for each partial payment or deposit, showing the amount received and the balance still due, avoids confusion and gives both sides a clear record.",
      },
      {
        q: "Does a payment receipt need a signature?",
        a: "Usually not. A receipt sent by email or generated by your payment provider is valid without a handwritten signature in most situations. A signature is most useful for cash payments, where it shows who received the money and gives the customer stronger proof. Some clients, landlords or grant programs may still ask for a signed receipt, so add one when it's requested.",
      },
      {
        q: "Can I send a payment receipt by email instead of on paper?",
        a: "Yes. A PDF receipt sent by email is widely accepted and easier to store and search than paper. Use a consistent file name built around the receipt number, keep a copy with the related invoice, and make sure the PDF shows the payment date, amount, method and any balance due. If a customer needs a printed copy, the same PDF can simply be printed.",
      },
      {
        q: "What is the difference between a receipt and a remittance advice?",
        a: "A receipt comes from you, the seller, and confirms that you received a payment. A remittance advice comes from the payer and tells you which invoices a payment covers, often sent by a client's accounts team alongside an ACH or bank transfer. Use the remittance advice to match the payment to the right invoices, then issue your receipt if the client needs one.",
      },
      {
        q: "Do I need to send my own receipt if my payment provider already emails one?",
        a: "Not always. Card processors and payment apps often email the customer an automatic receipt, which may be enough for small consumer sales. Send your own receipt when the provider's version doesn't show your business details, the invoice number or the remaining balance, or when the client needs a document for their own records or reimbursement. Keep a copy either way.",
      },
      {
        q: "Is a bank statement enough proof of payment without a receipt?",
        a: "A bank statement shows that money moved, but not what it paid for, so it is weaker evidence on its own. Paired with the invoice and a matching payment reference, it is often accepted as proof of payment. A receipt that names the invoice, amount and method avoids questions later, especially for partial payments, cash, or clients who need records for tax or expense claims.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A payment receipt template is a ready-made layout for confirming that a customer has paid you. A good receipt shows a receipt number, payment date, your business details, the payer, the amount received, the payment method, the invoice it settles, and any balance still owed. Send one every time money arrives, including deposits and partial payments.</p>

<p>This guide lists every field a payment receipt should include, gives a worked example for a partial payment, explains when a paid invoice can serve as a receipt, and covers numbering and record keeping. You can produce a clean receipt-style document with our <a href="/invoice-generator">free invoice generator</a> by adding a PAID watermark and payment details.</p>

<h2>What is a payment receipt?</h2>
<p>A payment receipt is written proof that a payment was made and received. It protects both sides: the customer can prove they paid, and you have a record that ties money in your bank account to a specific sale. It differs from an invoice, which asks for payment; our explainer on <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> covers the distinction in detail.</p>
<p>Receipts are especially useful when customers pay in cash, pay in instalments, pay a deposit before work starts, or need proof of payment for their own expense claims.</p>

<h2>What to include in a payment receipt template</h2>
<ul>
<li><strong>The word "Receipt"</strong> or "Payment Receipt" as the title.</li>
<li><strong>Receipt number</strong>, unique and sequential.</li>
<li><strong>Date of payment</strong> (and date issued, if different).</li>
<li><strong>Your business details:</strong> name, address, contact details, and tax ID if you are registered.</li>
<li><strong>Payer details:</strong> customer or company name, and address if relevant.</li>
<li><strong>Invoice reference</strong> the payment applies to.</li>
<li><strong>Description</strong> of what was paid for, briefly.</li>
<li><strong>Amount received</strong>, with currency.</li>
<li><strong>Payment method:</strong> card, bank transfer, cash, check, and a transaction reference where available.</li>
<li><strong>Balance remaining</strong>, or "Paid in full".</li>
<li><strong>Signature or name</strong> of the person issuing it, for cash payments especially.</li>
</ul>

<h2>Payment receipt example: partial payment</h2>
<p>A web designer issued invoice INV-2026-0118 for $2,400.00 and received a first instalment by bank transfer. Here is the receipt:</p>
<table><thead><tr><th>Field</th><th>Details</th></tr></thead><tbody>
<tr><td>Receipt number</td><td>REC-2026-0047</td></tr>
<tr><td>Payment date</td><td>20 October 2026</td></tr>
<tr><td>Received from</td><td>Harbor Lane Bakery LLC</td></tr>
<tr><td>Invoice reference</td><td>INV-2026-0118 (website redesign)</td></tr>
<tr><td>Invoice total</td><td>$2,400.00</td></tr>
<tr><td>Previously paid</td><td>$0.00</td></tr>
<tr><td>Amount received</td><td>$1,000.00</td></tr>
<tr><td>Payment method</td><td>ACH bank transfer, ref. HLB-88213</td></tr>
<tr><td>Balance remaining</td><td>$1,400.00, due 20 November 2026</td></tr>
</tbody></table>
<p>When the second payment of $1,400.00 arrives, the next receipt (REC-2026-0052, for example) shows previously paid $1,000.00, amount received $1,400.00 and balance $0.00: paid in full. The maths always follows the same pattern: invoice total minus all payments received equals the balance.</p>

<h2>Payment receipt template you can copy</h2>
<p>If you want a plain-text version to paste into an email or a document, use this layout and replace the details in brackets:</p>
<blockquote>PAYMENT RECEIPT<br>
Receipt no.: [REC-2026-0000] · Date: [payment date]<br>
From: [Your business name, address, email, tax ID if registered]<br>
Received from: [Customer name and address]<br>
For: [Invoice number and short description]<br>
Invoice total: [amount] · Previously paid: [amount]<br>
Amount received: [amount and currency]<br>
Payment method: [bank transfer / card ending 1234 / cash / check no.] · Ref: [transaction reference]<br>
Balance remaining: [amount, or "Paid in full"]<br>
Received by: [name and signature]<br>
Thank you for your payment.</blockquote>
<p>Keep the wording factual. A receipt records what happened; it is not the place for new terms, upsells or changes to what was agreed. If the payment was for less than expected, the receipt should still show exactly what arrived and what remains due, so there is no ambiguity later.</p>

<h3>Notes for different payment methods</h3>
<ul>
<li><strong>Bank transfer:</strong> include the payer's bank reference and the date funds cleared, not the date the client says they sent it.</li>
<li><strong>Card:</strong> show the card type and last four digits only, plus the processor's transaction ID.</li>
<li><strong>Cash:</strong> write the amount in figures and words, and sign the receipt. Give the customer one copy and keep one.</li>
<li><strong>Check:</strong> note the check number and that the receipt is subject to the check clearing.</li>
</ul>

<h2>Types of payment receipts</h2>
<table><thead><tr><th>Receipt type</th><th>When to use it</th><th>Key detail to show</th></tr></thead><tbody>
<tr><td>Full payment receipt</td><td>Invoice paid in one go</td><td>"Paid in full" and the invoice number</td></tr>
<tr><td>Partial payment receipt</td><td>Instalments or milestone payments</td><td>Amount received and balance remaining</td></tr>
<tr><td>Deposit receipt</td><td>Advance payment before work starts</td><td>What the deposit secures and whether it is refundable</td></tr>
<tr><td>Cash receipt</td><td>Cash paid in person</td><td>Signature of the person receiving the cash</td></tr>
<tr><td>Rent receipt</td><td>Tenant pays rent</td><td>Property address and rental period covered</td></tr>
</tbody></table>
<p>For deposits, the invoicing side is covered in our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>, which pairs naturally with a deposit receipt.</p>

<h2>How to create a payment receipt in 5 steps</h2>
<ol>
<li><strong>Confirm the payment has cleared.</strong> Check your bank or payment provider, not just the client's email saying they paid.</li>
<li><strong>Open your receipt layout.</strong> In our generator, start from the original invoice details, switch the title to Receipt, and add a PAID watermark if the invoice is now settled.</li>
<li><strong>Assign a receipt number</strong> from your receipt series. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a format such as REC-2026-0047.</li>
<li><strong>Fill in the payment details:</strong> date, amount, method, transaction reference and remaining balance.</li>
<li><strong>Download as PDF and send</strong> to the payer, then file a copy with the original invoice.</li>
</ol>

<h2>Can a paid invoice replace a receipt?</h2>
<p>In many cases, yes. An invoice marked PAID with the payment date, amount and method is widely accepted as proof of payment, and it saves creating a second document. A separate receipt is better when:</p>
<ul>
<li>The customer paid only part of the invoice.</li>
<li>Payment was made in cash.</li>
<li>The customer needs a receipt for reimbursement or their own records.</li>
<li>You took a deposit before issuing a final invoice.</li>
</ul>
<p>Note that a receipt is not normally a tax invoice. If your client needs to reclaim VAT or GST, they will usually need the tax invoice itself, so keep issuing proper invoices and use receipts to confirm payment.</p>

<h2>Numbering and record keeping</h2>
<p>Keep receipts in their own sequential series, separate from invoices, so every document has one unique number. The principles in our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide apply equally to receipts: never reuse a number, and note any voided receipt rather than deleting it.</p>
<p>Store each receipt with the invoice it relates to. Tax authorities typically expect you to keep sales records, including receipts, for several years; the period depends on the country, so see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> and confirm the rule with your accountant. For customers who pay many invoices, a periodic <a href="/blog/statement-of-account">statement of account</a> summarizes all invoices, payments and the outstanding balance in one place.</p>

<h2>Good habits around payment confirmations</h2>
<ul>
<li><strong>Send receipts promptly</strong>, ideally the same day the payment clears.</li>
<li><strong>Use the payer's reference</strong> so their accounts team can match it.</li>
<li><strong>Be careful with card data.</strong> Show only the last four digits of a card number, never the full number. If you take card payments, your provider often emails an automatic receipt; see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</li>
<li><strong>Correct mistakes with a new document.</strong> If a receipt is wrong, void it and issue a replacement rather than editing the original.</li>
<li><strong>Handle refunds properly.</strong> If you refund a payment, issue a credit note against the invoice and record the refund, rather than deleting the original receipt.</li>
<li><strong>Watch for overpayment scams.</strong> Be wary of a new customer who "accidentally" overpays and asks you to send the difference back, especially to a different account. Wait until the original payment has fully cleared and refund only to the source.</li>
</ul>
<p>Receipts also help you spot problems early. If a client's receipts show a run of partial payments, or payments that arrive later each month, that is a signal to talk about terms before an invoice becomes seriously overdue. Reviewing receipts alongside open invoices once a week takes a few minutes and keeps your records, and your cash flow, in good order.</p>
<p>Want to see receipts and invoices side by side in real scenarios? Our <a href="/blog/invoice-examples">invoice examples</a> show how the documents fit together.</p>

<h2>Create your payment receipt now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose a simple layout such as the <a href="/invoice-templates/minimal">Minimal template</a> or the monochrome <a href="/invoice-templates/mono">Mono template</a>, add the payment details and a PAID watermark, and download a professional receipt in minutes.</p>
`,
  },
  {
    slug: "overdue-invoice",
    title: "Overdue Invoice: How to Handle Late Payments Step by Step",
    description:
      "What to do about an overdue invoice: check your side first, follow a clear timeline, use statutory interest where it applies, and know when to escalate.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "prompt-payment-act",
      "payment-reminder-emails",
      "invoice-collections",
      "client-not-paying-invoice",
    ],
    faqs: [
      {
        q: "When is an invoice considered overdue?",
        a: "An invoice is overdue from the day after its due date if it has not been paid in full. If no due date was agreed, some laws set a default period, such as 30 days in the UK and EU for business-to-business payments, so check the rules that apply to you.",
      },
      {
        q: "What should I do first when an invoice is overdue?",
        a: "Check that the client received the invoice and that it is correct, including the PO number, billing entity and amount. Then send a polite reminder with the invoice attached and a clear request for a payment date.",
      },
      {
        q: "Can I charge interest on an overdue invoice?",
        a: "Often, yes, if your contract allows it or a law provides statutory interest. In the UK, businesses can generally claim statutory interest of 8% above the Bank of England base rate on late commercial payments, plus fixed compensation. Rules vary by country, so check before you charge.",
      },
      {
        q: "How long should I wait before escalating an overdue invoice?",
        a: "Many businesses escalate after 30 to 60 days overdue if reminders and calls have not produced a payment date. Escalation might be a formal final notice, a collection agency or a small claims court claim.",
      },
      {
        q: "Should I stop work if a client has an overdue invoice?",
        a: "If your contract allows it, pausing further work until overdue invoices are paid is a common and reasonable step. Tell the client in writing beforehand and give them a chance to pay.",
      },
      {
        q: "Can I charge a late fee if it wasn't in my contract or invoice terms?",
        a: "It depends on where you are. In the US, late fees and interest generally need to be agreed in advance, so adding one after the fact is hard to enforce. In the UK, businesses can claim statutory interest and fixed compensation on late business payments even if the contract is silent. Whatever applies to you, put clear late payment terms in future contracts and invoices.",
      },
      {
        q: "What is an accounts receivable aging report?",
        a: "An aging report lists every unpaid invoice grouped by how long it is overdue, typically current, 1–30, 31–60, 61–90 and over 90 days. It shows at a glance which clients need chasing and how much cash is tied up. Reviewing it weekly helps you act before an invoice becomes hard to collect. Most accounting software produces one, or you can keep a simple spreadsheet.",
      },
      {
        q: "Should I change the date when I resend an overdue invoice?",
        a: "No. Keep the original invoice number, issue date and due date so the client's records match yours and the overdue period stays clear. Send it again with a short cover note marking it as a reminder or overdue copy. Only issue a new invoice if the original contained an error, and then cancel the old one with a credit note so nothing is billed twice.",
      },
      {
        q: "What should I do if a client says they never received the invoice?",
        a: "Resend it straight away and confirm the right accounts payable email, contact name and any PO number they need. Ask them to confirm receipt and give you an expected payment date. To avoid the problem next time, send invoices to a shared accounts address as well as your day-to-day contact, and keep a record of when and where each invoice was sent.",
      },
      {
        q: "Can I write off an overdue invoice for tax purposes?",
        a: "It depends on your accounting method. If you use the cash method, as many freelancers do, you never reported the unpaid amount as income, so there is generally nothing to deduct. Businesses using the accrual method that already reported the income may be able to claim a bad debt deduction or relief once the debt is genuinely uncollectable. Rules vary by country, so check with your accountant.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An overdue invoice is any invoice still unpaid after its due date. To handle it, first confirm the client received a correct invoice, then send a polite reminder, follow up by phone, and agree a firm payment date. If payment still doesn't arrive, apply any agreed late fees or statutory interest, pause further work, send a final notice, and escalate to collections or a small claims court as a last resort.</p>

<p>This guide gives you a practical timeline for dealing with an overdue invoice, what to check before you chase, how statutory interest works in the UK and EU, and how to decide when to escalate. If you need to reissue or resend the invoice, our <a href="/invoice-generator">free invoice generator</a> lets you recreate a clean PDF in minutes.</p>

<h2>What makes an invoice overdue?</h2>
<p>An invoice becomes overdue the day after its due date passes without full payment. That sounds obvious, but many overdue invoices start with vague terms. "Net 30" without a calendar date, or no terms at all, leaves room for argument. Where nothing was agreed, some laws fill the gap: in the UK and the EU, business-to-business payments generally default to 30 days after the invoice or delivery. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> shows how to set terms that are hard to misread.</p>

<h2>Step 1: Check your own side first</h2>
<p>A surprising number of overdue invoices are not late at all from the client's point of view; they are stuck. Before chasing, check:</p>
<ul>
<li><strong>Delivery:</strong> did the invoice reach the right accounts payable address, not just your day-to-day contact?</li>
<li><strong>Accuracy:</strong> are the billing entity, amount, tax and line items correct?</li>
<li><strong>References:</strong> did you include the required PO number or supplier ID?</li>
<li><strong>Approval:</strong> has the work been signed off, or is something still under review?</li>
<li><strong>Disagreement:</strong> has the client raised any concern? If so, treat it as an <a href="/blog/invoice-dispute">invoice dispute</a> rather than a late payment.</li>
</ul>
<p>If anything is wrong, fix it and reissue promptly. A corrected invoice resets the conversation in your favor.</p>

<h2>A practical timeline for an overdue invoice</h2>
<table><thead><tr><th>When</th><th>Action</th><th>Tone</th></tr></thead><tbody>
<tr><td>3 days before due</td><td>Friendly heads-up with the invoice attached</td><td>Helpful</td></tr>
<tr><td>1 day overdue</td><td>Polite reminder asking for a payment date</td><td>Neutral</td></tr>
<tr><td>7 days overdue</td><td>Second reminder plus a phone call to accounts payable</td><td>Firm but friendly</td></tr>
<tr><td>14 days overdue</td><td>Escalate to your main contact or a manager; mention agreed late fees</td><td>Firm</td></tr>
<tr><td>30 days overdue</td><td>Pause further work if your contract allows; apply late fees or interest</td><td>Formal</td></tr>
<tr><td>45 days overdue</td><td>Final notice with a deadline and the next step you will take</td><td>Formal</td></tr>
<tr><td>60+ days overdue</td><td>Collection agency, demand letter or small claims court</td><td>Formal</td></tr>
</tbody></table>
<p>Adjust the timeline to the size of the invoice and the relationship. For wording at each stage, use our ready-made <a href="/blog/payment-reminder-emails">payment reminder emails</a> rather than writing from scratch.</p>

<h2>Worked example: a $3,200 invoice due 30 September</h2>
<p>A marketing consultant invoices $3,200.00 on 31 August 2026, due 30 September 2026. Here is how the follow-up might run:</p>
<ol>
<li><strong>27 September:</strong> courtesy email with the invoice attached and the payment link.</li>
<li><strong>1 October:</strong> reminder: "Invoice INV-2026-0144 for $3,200.00 was due yesterday. Could you confirm when payment is scheduled?"</li>
<li><strong>7 October:</strong> call to accounts payable. They say the invoice was never approved because it went to the wrong inbox. The consultant resends it to the correct address.</li>
<li><strong>9 October:</strong> the client confirms payment in its 15 October payment run.</li>
<li><strong>15 October:</strong> payment arrives; the consultant sends a receipt and updates the client's billing email for next time.</li>
</ol>
<p>The phone call was the turning point. Emails are easy to ignore; a short, friendly call usually surfaces the real problem.</p>

<h2>Late fees and statutory interest</h2>
<p>Whether you can add charges depends on your contract and local law. Our detailed guide to <a href="/blog/late-payment-fees">late payment fees</a> covers how to set them up; here is the short version for statutory rights:</p>
<ul>
<li><strong>United Kingdom:</strong> under the Late Payment of Commercial Debts (Interest) Act 1998, businesses can generally claim interest at 8% above the Bank of England base rate on late business-to-business payments, plus fixed compensation of £40, £70 or £100 depending on the debt size. This applies to sole traders too; see <a href="/blog/sole-trader-invoice-uk">invoicing as a UK sole trader</a>.</li>
<li><strong>European Union:</strong> the Late Payment Directive gives businesses a right to interest of at least 8 percentage points above the European Central Bank reference rate, plus a minimum of €40 compensation, implemented through each country's own law.</li>
<li><strong>United States:</strong> there is no general federal rule for business invoices. Late fees and interest depend on your contract and state law, including usury limits.</li>
</ul>
<p>These rights usually apply to business customers, not consumers. Check the current rules or speak to an adviser before you claim.</p>

<h2>What to say when you call about an overdue invoice</h2>
<p>Calls feel awkward, but they resolve more overdue invoices than any email. Keep the call short, specific and friendly. A simple structure:</p>
<ol>
<li><strong>Identify yourself and the invoice:</strong> "Hi, this is Sam from Brightline Studio. I'm calling about invoice INV-2026-0144 for $3,200, which was due on 30 September."</li>
<li><strong>Ask an open question:</strong> "Can you see it in your system, and is there anything holding it up?"</li>
<li><strong>Solve what you can on the spot:</strong> resend the PDF, confirm the PO number, or give the bank details again.</li>
<li><strong>Ask for a date:</strong> "When is your next payment run, and can this be included?"</li>
<li><strong>Confirm in writing:</strong> send a two-line email the same day summarizing what was agreed.</li>
</ol>
<p>Note who you spoke to, the date and what they promised. If the promised date passes, your next contact can refer to it directly, which is much harder to brush off than a generic reminder. Keep the same calm tone even on the third call; staying professional protects the relationship and makes your position stronger if the invoice ever goes further.</p>
<p>One security point: if someone at the client asks you to confirm or change bank details during a call they initiated, or by email, verify through a number you already have before sending anything. Fraudsters sometimes target suppliers chasing overdue payments, because the pressure to get paid lowers people's guard.</p>

<h2>Payment plans and partial payments</h2>
<p>If a client is struggling rather than refusing, a payment plan can recover more than a confrontation. Put any plan in writing with amounts and dates, and confirm that missing an instalment makes the full balance due. Issue a receipt for each payment and track what is left. A partial payment now is often worth more than a full payment that never comes.</p>
<p>When you agree a plan, decide in advance how any late fees or interest will be treated. Many businesses waive them as long as every instalment arrives on time, which gives the client a strong reason to stick to the schedule. Keep further work on hold, or on upfront payment terms, until the balance is cleared.</p>

<h2>When to escalate</h2>
<p>Escalation makes sense when the client stops responding, keeps missing promised dates, or disputes the invoice without a real reason. Your options, in rough order:</p>
<ul>
<li><strong>Final notice</strong> stating the amount, the deadline and the action you will take next.</li>
<li><strong>Collection agency</strong> working for a fee on what it recovers. Our guide to <a href="/blog/invoice-collections">sending an invoice to collections</a> explains how it works.</li>
<li><strong>Demand letter from a lawyer</strong>, which often prompts payment on its own.</li>
<li><strong>Small claims court</strong> for smaller amounts, within your jurisdiction's limits.</li>
</ul>
<p>For freelancer-specific tactics, including contract wording that helps next time, read <a href="/blog/client-not-paying-invoice">what to do when a client is not paying an invoice</a>.</p>

<h2>Prevent the next overdue invoice</h2>
<ul>
<li>Agree payment terms and late fees in writing before you start.</li>
<li>Invoice immediately after delivery and use real due dates.</li>
<li>Take deposits on large projects.</li>
<li>Offer easy ways to pay, such as a card link alongside bank transfer.</li>
<li>Review an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> every week so nothing slips past 30 days unnoticed.</li>
</ul>

<h2>Resend your overdue invoice today</h2>
<p>If your overdue invoice needs correcting or resending, rebuild it in the <a href="/invoice-generator">invoice generator</a>, keep the original invoice number and dates, and choose a layout with a prominent amount due, such as the <a href="/invoice-templates/bold">Bold invoice template</a>. A clear, correct invoice is the fastest route to getting paid.</p>
`,
  },
  {
    slug: "invoice-collections",
    title: "Sending an Invoice to Collections: When and How to Do It",
    description:
      "Thinking of sending an invoice to collections? Learn when to do it, what it costs, how to prepare, how agencies work and the alternatives to try first.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["overdue-invoice", "client-not-paying-invoice", "invoice-dispute"],
    faqs: [
      {
        q: "When should I send an invoice to collections?",
        a: "Usually when an invoice is significantly overdue, often 60 to 90 days, the client has stopped responding or keeps breaking promises to pay, and you have already sent reminders and a final notice. The longer a debt ages, the harder it typically is to recover.",
      },
      {
        q: "How much do collection agencies charge?",
        a: "Many agencies work on contingency, keeping a percentage of what they recover and charging nothing if they recover nothing. Rates vary widely with the age and size of the debt, the agency and whether legal action is needed, so get written quotes.",
      },
      {
        q: "Can I send a business client to collections?",
        a: "Yes. Commercial collection agencies specialize in business-to-business debts. Consumer debts have extra legal protections, such as the Fair Debt Collection Practices Act in the US, so choose an agency that handles the type of debt you have.",
      },
      {
        q: "What should I do before sending an invoice to collections?",
        a: "Make sure the invoice is correct and undisputed, gather your contract, invoice, delivery evidence and correspondence, and send a final written notice giving a deadline and stating that the debt will be referred to collections if unpaid.",
      },
      {
        q: "Is small claims court better than a collection agency?",
        a: "It can be for smaller, well-documented debts, because fees are usually modest and you keep the full amount if you win and collect. However, it takes your time, and a judgment still has to be enforced if the client does not pay.",
      },
      {
        q: "Does sending an invoice to collections affect the client's credit?",
        a: "It can. Some collection agencies report unpaid debts to consumer or business credit bureaus, which may make it harder for the debtor to get credit later. Reporting is governed by law and by each agency's policy, and it is usually the agency, not you, that reports. Ask any agency how and when it reports debts before you sign, and make sure the amount is accurate and undisputed.",
      },
      {
        q: "Can I add collection costs to the amount the client owes?",
        a: "Only where your contract or the law allows it. Many contracts include a clause making the client liable for reasonable collection costs. In the UK, the late payment legislation lets businesses claim reasonable recovery costs on late business debts in addition to the fixed compensation, in some circumstances. Without a legal basis, adding fees can weaken your claim, so check before you add anything.",
      },
      {
        q: "How long do I have to take legal action over an unpaid invoice?",
        a: "Every jurisdiction sets a limitation period. In England and Wales, most contract debt claims must be brought within six years, and US states commonly set periods of roughly three to ten years depending on the state and type of contract. Once the period expires, the debt may become unenforceable in court, so don't let an unpaid invoice sit for years. Check the rule where your client is based.",
      },
      {
        q: "Can I send an invoice to collections if the client is in another country?",
        a: "Yes, but it is harder and often more expensive. Some agencies specialize in international commercial collections and work through partners in the debtor's country. Legal action usually has to follow local law and courts, and the costs can outweigh smaller debts. For overseas clients, deposits, milestone billing and clear contract terms on governing law are the most practical protection.",
      },
      {
        q: "What happens to my invoice if the client goes bankrupt or becomes insolvent?",
        a: "Collection activity usually has to stop, and you become a creditor in the insolvency process instead. File a claim with the trustee, administrator or liquidator, attach your invoice and supporting evidence, and follow any deadlines they set. Unsecured creditors often recover only part of what they are owed, if anything. An insolvency professional or lawyer can explain your options.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Sending an invoice to collections means handing an unpaid debt to a collection agency, or pursuing it through a lawyer or court, after your own reminders have failed. It is usually a last resort for invoices 60 to 90 or more days overdue where the client has stopped engaging. Before you do it, confirm the invoice is correct and undisputed, gather your evidence, and send a final notice with a deadline.</p>

<p>This guide explains when an invoice to collections makes sense, how collection agencies work and charge, what to prepare, the legal and relationship points to consider, and cheaper alternatives to try first. If you need a clean copy of the original invoice for your evidence pack, recreate it with our <a href="/invoice-generator">free invoice generator</a> using the same number and dates.</p>

<h2>What "sending an invoice to collections" means</h2>
<p>When an invoice goes to collections, someone other than your accounts team takes over recovering the money. Usually that is a collection agency, which contacts the client, negotiates payment and, if needed, recommends legal action. It can also mean instructing a lawyer to send a formal demand, or filing a claim yourself in a small claims court. In each case the tone changes from "friendly reminder" to "formal recovery," and the client relationship usually changes with it.</p>

<h2>Signs it is time to escalate to collections</h2>
<ul>
<li>The invoice is 60 to 90 days or more past due.</li>
<li>Reminders, phone calls and a final notice have not produced payment or a payment date.</li>
<li>The client has stopped replying, or repeatedly breaks promises to pay.</li>
<li>The client has not raised any genuine dispute about the work.</li>
<li>The amount is large enough to justify the cost of recovery.</li>
</ul>
<p>If the client says the invoice is wrong, resolve that first; see our guide to resolving an <a href="/blog/invoice-dispute">invoice dispute</a>. Agencies are much less effective on disputed debts. If you are earlier in the process, start with our <a href="/blog/overdue-invoice">overdue invoice</a> timeline and <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</p>

<h2>Your options compared</h2>
<table><thead><tr><th>Option</th><th>Typical cost</th><th>Effort for you</th><th>Best for</th></tr></thead><tbody>
<tr><td>Final notice from you</td><td>Free</td><td>Low</td><td>Every case, before anything else</td></tr>
<tr><td>Lawyer's demand letter</td><td>Fixed or hourly fee</td><td>Low</td><td>Clients who respond to formal pressure</td></tr>
<tr><td>Collection agency</td><td>Contingency percentage of amount recovered (varies)</td><td>Low to medium</td><td>Unresponsive clients, larger or older debts</td></tr>
<tr><td>Small claims court</td><td>Filing fees; your time</td><td>Medium to high</td><td>Well-documented debts within the court's limit</td></tr>
<tr><td>Selling the debt</td><td>You accept a large discount</td><td>Low</td><td>Very old debts you have written off</td></tr>
</tbody></table>
<p>Small claims limits and procedures vary by country and US state. In England and Wales, for example, the small claims track generally covers claims up to £10,000. Check the current rules where the client is based.</p>

<h2>How collection agencies work and what they charge</h2>
<p>Most commercial agencies work on contingency: they keep a share of what they collect and charge nothing if they collect nothing. The percentage varies with the age and size of the debt, how much work is involved and whether legal action follows, so ask for written terms. Some charge flat fees for letter-only services, and legal costs are often extra.</p>
<h3>Worked example</h3>
<p>Suppose a $4,800.00 invoice is 95 days overdue, and an agency offers a contingency rate of 25% for illustration (your quote may be higher or lower):</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Amount recovered</td><td>$4,800.00</td></tr>
<tr><td>Agency fee (25% of $4,800.00)</td><td>$1,200.00</td></tr>
<tr><td>You receive</td><td>$3,600.00</td></tr>
</tbody></table>
<p>Receiving $3,600.00 is better than nothing, but it shows why a strong final notice, or a contract clause letting you recover collection costs, is worth having.</p>

<h3>Choosing an agency</h3>
<ul>
<li>Pick one that handles <strong>business (commercial) debts</strong> if your client is a company.</li>
<li>Check licensing or registration requirements in your area and the client's.</li>
<li>Ask how they contact debtors; aggressive tactics can damage your reputation.</li>
<li>Get the fee, contract length and cancellation terms in writing.</li>
<li>Confirm how and when they pay you the money they collect.</li>
</ul>

<h2>How to prepare an invoice for collections</h2>
<ol>
<li><strong>Confirm the debt.</strong> Check the invoice amount, any partial payments and any credit notes already issued.</li>
<li><strong>Build an evidence pack:</strong> signed contract or accepted quote, purchase order, the invoice, proof of delivery or approval, and every reminder and reply.</li>
<li><strong>Send a final notice.</strong> State the amount, the original due date, any late fees, a final deadline (often 7 to 14 days), and that the debt will be passed to a collection agency or court if unpaid.</li>
<li><strong>Stop further work and credit</strong> for that client until the debt is settled.</li>
<li><strong>Hand over the file</strong> to the agency or lawyer, and route any client contact to them from then on.</li>
<li><strong>Record the outcome</strong> in your books, including any amount written off.</li>
</ol>
<p>Your contract is your strongest tool here. Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide covers clauses for payment terms, late fees and recovery costs, and <a href="/blog/late-payment-fees">late payment fees</a> explains how to apply charges you have agreed.</p>

<h2>Legal points to keep in mind</h2>
<ul>
<li><strong>Consumer vs business debts.</strong> Consumer debts have extra protection, such as the Fair Debt Collection Practices Act in the US, which governs third-party collectors. In the UK, the Pre-Action Protocol for Debt Claims applies when the debtor is an individual, including sole traders.</li>
<li><strong>Time limits.</strong> Debts can become legally unenforceable after a limitation period, which varies by country and state.</li>
<li><strong>Accuracy.</strong> Only pursue amounts genuinely owed under the contract or applicable law.</li>
<li><strong>Tax.</strong> If you account on an accrual basis, you may be able to claim relief or a deduction for a bad debt that you write off. Rules vary, so ask your accountant.</li>
</ul>
<p>Once an agency takes over, let it do the talking. Contacting the client separately, or accepting a side deal, can undermine the agency's position and may still leave you owing its fee under the contract. If the client contacts you directly to pay, tell the agency straight away and follow its process.</p>
<p>This is general information, not legal advice. For large debts or contested cases, speak to a lawyer.</p>

<h2>Alternatives to try before collections</h2>
<ul>
<li><strong>A payment plan</strong> with fixed dates and amounts in writing.</li>
<li><strong>A settlement offer</strong> accepting slightly less for immediate payment.</li>
<li><strong>Escalating within the client</strong> to a finance director or owner.</li>
<li><strong>Issuing a corrected invoice</strong> or <a href="/blog/credit-note-guide">credit note</a> if a small error is the real blocker.</li>
</ul>
<p>A <a href="/blog/statement-of-account">statement of account</a> listing every open invoice and payment can also prompt a client to settle the balance, especially when several invoices are outstanding and the client has lost track of what is owed.</p>

<h2>Sample final notice before collections</h2>
<p>A clear final notice resolves a surprising share of cases, because it shows you are organized and serious. Keep it short and factual:</p>
<blockquote>Subject: Final notice: invoice INV-2026-0092, $4,800.00, 65 days overdue<br>
Dear Ms. Patel,<br>
Invoice INV-2026-0092 for $4,800.00, issued on 15 July 2026 and due on 14 August 2026, remains unpaid despite our reminders of 15 August, 22 August and 12 September. A copy is attached.<br>
Please pay the full balance by 31 October 2026 using the bank details on the invoice. If payment or a written payment proposal is not received by that date, we will refer the debt to a collection agency without further notice, and recovery costs may be added where our agreement allows.<br>
If you believe any part of this invoice is incorrect, please tell us in writing before that date.<br>
Kind regards,<br>
Jordan Lee, Lee Analytics LLC</blockquote>
<p>Send it by email and, for larger debts, by tracked post as well, so there is no doubt it was received. Only state consequences you actually intend to follow through on; an empty threat weakens every notice after it. Keep a copy for your evidence pack, since an agency or court will want to see that the client had a final chance to pay or raise a dispute.</p>

<h2>Reduce the risk of future collections</h2>
<p>Take deposits on new or large projects, agree written <a href="/blog/invoice-payment-terms">invoice payment terms</a> before starting, invoice promptly, and follow up the day after the due date. Most collections cases begin with vague terms and slow follow-up.</p>

<h2>Prepare your invoice for recovery</h2>
<p>If you are sending an invoice to collections, start with a clean, accurate copy. Rebuild it in the <a href="/invoice-generator">invoice generator</a> with the original number, dates and line items, using a formal layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a>, and add it to your evidence pack.</p>
`,
  },
  {
    slug: "invoice-dispute",
    title: "Invoice Dispute: How to Resolve Billing Disagreements Fast",
    description:
      "How to resolve an invoice dispute quickly: common causes, a step-by-step process, when to use a credit note, a worked example and how to prevent disputes.",
    category: "payments",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-handle-chargebacks",
      "credit-note-guide",
      "how-to-correct-an-invoice",
      "invoice-collections",
    ],
    faqs: [
      {
        q: "What is an invoice dispute?",
        a: "An invoice dispute is when a client refuses or delays payment because they disagree with all or part of an invoice, for example the amount, the work delivered, the pricing or missing details such as a PO number.",
      },
      {
        q: "How do I respond to an invoice dispute?",
        a: "Acknowledge the dispute quickly, ask the client to specify exactly which lines and amounts they disagree with, review your contract and records, and reply with evidence or a correction. Ask them to pay any undisputed amount while you resolve the rest.",
      },
      {
        q: "Should I change the original invoice if a client disputes it?",
        a: "No. Once issued, an invoice should not be edited. If an adjustment is agreed, issue a credit note for the reduction or a debit note or additional invoice for an increase, referencing the original invoice number.",
      },
      {
        q: "Can a client refuse to pay the whole invoice over a small dispute?",
        a: "They may try, but it is reasonable to ask them to pay the undisputed portion on time. Many contracts include a clause requiring the client to pay undisputed amounts and raise disputes within a set period.",
      },
      {
        q: "How long does a client have to dispute an invoice?",
        a: "It depends on your contract. Many businesses set a dispute window, such as 7 or 14 days from receipt, after which the invoice is treated as accepted. Without such a clause, local law and the circumstances apply.",
      },
      {
        q: "Can I charge late fees on a disputed invoice?",
        a: "On the undisputed portion, usually yes, if your terms allow late fees and the client pays that portion late. For the disputed amount, it depends on your contract and the outcome: if the dispute is resolved in your favor, some contracts let you charge interest from the original due date. Charging fees on an amount you later credit looks unfair, so wait until the dispute is settled.",
      },
      {
        q: "Should I keep working for a client while an invoice is disputed?",
        a: "That depends on your contract and the relationship. If the dispute is genuine and specific, keeping work moving while you resolve it often protects the relationship. If the client is using a vague dispute to delay payment, a suspension clause lets you pause new work until undisputed amounts are paid. Tell the client in writing before you pause anything.",
      },
      {
        q: "Can mediation help resolve an invoice dispute?",
        a: "Yes. Mediation brings in a neutral person to help both sides reach an agreement, and it is usually quicker and cheaper than court. In England and Wales, many small money claims under £10,000 are referred to the free HMCTS Small Claims Mediation Service once a claim is filed. Private mediators and trade body schemes are other options, so check what applies where you and your client are based.",
      },
      {
        q: "What should a dispute clause in my contract say?",
        a: "A useful clause sets a window for raising disputes, such as 7 or 14 days from receipt, asks the client to identify the specific lines and reasons in writing, and requires them to pay undisputed amounts by the due date. It can also say that invoices not disputed within the window are treated as accepted. Have a lawyer review the wording for your jurisdiction.",
      },
      {
        q: "What if a client disputes an invoice months after paying it?",
        a: "Treat it seriously but ask for specifics, just as you would before payment. Check your contract, delivery records and any sign-off the client gave. If the client is right, issue a credit note or refund for the agreed amount. If they paid by card, they may try a chargeback instead, so keep your evidence ready. Card networks set time limits on chargebacks, but the exact windows vary.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice dispute happens when a client won't pay all or part of an invoice because they disagree with it. To resolve it fast, acknowledge the dispute the same day, ask exactly which lines are in question, check your contract and delivery records, and reply with evidence or an agreed fix, such as a credit note. Ask the client to pay the undisputed amount while you sort out the rest.</p>

<p>This guide covers the most common causes of invoice disputes and how to fix each one, a step-by-step resolution process, a worked example with a credit note, and the contract and invoicing habits that prevent disputes. When you need to issue a corrected document, our <a href="/invoice-generator">free invoice generator</a> makes it quick to produce a clean PDF.</p>

<h2>Why invoice disputes happen</h2>
<p>Most invoice disputes are not about a client trying to avoid payment. They come from a mismatch between what the client expected and what the invoice says. Common causes and their usual fixes:</p>
<table><thead><tr><th>Cause</th><th>What the client says</th><th>Typical fix</th></tr></thead><tbody>
<tr><td>Wrong amount or rate</td><td>"That's not the price we agreed."</td><td>Check the quote; issue a credit note if you overcharged</td></tr>
<tr><td>Missing PO or reference</td><td>"We can't process this."</td><td>Reissue with the correct PO number</td></tr>
<tr><td>Scope disagreement</td><td>"That wasn't included."</td><td>Show the contract or change request</td></tr>
<tr><td>Quality complaint</td><td>"The work isn't finished or isn't right."</td><td>Agree a fix, a partial credit or acceptance criteria</td></tr>
<tr><td>Quantity or hours</td><td>"We didn't use that many hours."</td><td>Share timesheets or delivery logs</td></tr>
<tr><td>Duplicate invoice</td><td>"We already paid this."</td><td>Check payments; void or credit the duplicate</td></tr>
<tr><td>Wrong billing entity or tax</td><td>"This is addressed to the wrong company."</td><td>Credit and reissue to the correct entity</td></tr>
</tbody></table>
<p>Several of these are simple administrative errors; our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> shows how to avoid them. A missing purchase order is one of the most frequent blockers, explained in <a href="/blog/po-number-on-invoice">what a PO number on an invoice is</a>.</p>

<h2>How to resolve an invoice dispute in 7 steps</h2>
<ol>
<li><strong>Acknowledge quickly.</strong> Reply the same day, thank them for raising it, and say you are looking into it. Speed shows good faith and keeps the clock from running down.</li>
<li><strong>Pin down the specifics.</strong> Ask which line items, amounts or deliverables they disagree with, and why. "We're not happy with the invoice" can't be fixed; "line 2 shows 10 pages, we received 8" can.</li>
<li><strong>Request payment of the undisputed amount.</strong> If the dispute covers one line, ask them to pay the rest by the original due date.</li>
<li><strong>Check your records.</strong> Review the contract, quote, change requests, timesheets, delivery confirmations and emails.</li>
<li><strong>Respond with evidence or a correction.</strong> If you are right, explain calmly and attach proof. If they are right, say so and fix it.</li>
<li><strong>Document the agreement.</strong> Confirm the outcome in writing: what changes, the revised amount and the new payment date.</li>
<li><strong>Issue the right document.</strong> A credit note for a reduction, a debit note or extra invoice for an increase, or a replacement invoice for an administrative error.</li>
</ol>

<h2>Worked example: resolving a disputed line with a credit note</h2>
<p>A freelance studio sends invoice INV-2026-0207:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Website design (fixed fee)</td><td>1</td><td>$3,000.00</td><td>$3,000.00</td></tr>
<tr><td>Copywriting (per page)</td><td>10</td><td>$120.00</td><td>$1,200.00</td></tr>
<tr><td>Stock photos (licensed)</td><td>8</td><td>$25.00</td><td>$200.00</td></tr>
<tr><td>Hosting setup</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$4,550.00</strong></td></tr>
</tbody></table>
<p>The client disputes the copywriting line: only 8 pages were written, because two were dropped from the site map. The studio checks the change log and agrees. It does not edit INV-2026-0207. Instead it issues credit note CN-2026-0012 for 2 pages × $120.00 = $240.00, referencing the original invoice. The amount payable becomes $4,550.00 − $240.00 = $4,310.00, and the client pays the next week.</p>
<p>Had the client disputed the whole invoice, the studio could still have asked for the undisputed $3,350.00 (design, photos and hosting) to be paid on time. For more on adjustment documents, see the <a href="/blog/credit-note-guide">credit note guide</a> and <a href="/blog/debit-note-vs-credit-note">debit note vs credit note</a>.</p>

<h2>Fixing errors: credit notes vs reissued invoices</h2>
<p>Once an invoice is issued, it should stay in your records unchanged. How you correct it depends on the problem:</p>
<ul>
<li><strong>Overcharge or partial refund:</strong> issue a credit note for the difference.</li>
<li><strong>Undercharge:</strong> issue a debit note or a supplementary invoice.</li>
<li><strong>Wrong client details, PO or tax treatment:</strong> credit the original in full and issue a new, correct invoice.</li>
</ul>
<p>Our step-by-step guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> walks through each scenario, including numbering.</p>

<h2>Communicating during a dispute</h2>
<ul>
<li><strong>Stay factual.</strong> Refer to documents and dates, not feelings.</li>
<li><strong>Keep it in writing.</strong> If you talk by phone, follow up by email summarizing what was agreed.</li>
<li><strong>Separate the issue from the relationship.</strong> A fair, quick resolution often strengthens trust.</li>
<li><strong>Be willing to compromise</strong> on small amounts where the cost of arguing is higher than the amount itself.</li>
<li><strong>Watch for stalling.</strong> If a "dispute" keeps changing or has no specifics, it may be a delay tactic; set a deadline for details.</li>
</ul>
<p>Keep a simple dispute log for each case: the date the issue was raised, who raised it, the lines in question, the evidence you sent and the outcome. It takes minutes, keeps everyone working from the same facts, and becomes valuable evidence if the matter ever escalates. Over time, the log also shows patterns, such as one service that is often queried, that you can fix in your quotes and contracts.</p>

<h2>Sample reply to an invoice dispute</h2>
<p>Your first reply sets the tone. It should acknowledge the concern, ask for specifics and keep the undisputed money moving. Adapt this:</p>
<blockquote>Subject: Re: Invoice INV-2026-0207: query received<br>
Hi Chris,<br>
Thanks for letting me know about your concern with invoice INV-2026-0207. I want to get this sorted quickly.<br>
Could you confirm which line items or amounts you are querying, and what you expected to see instead? I will check them against our agreement of 2 September and the project change log and come back to you within two business days.<br>
In the meantime, could you go ahead and process the lines that aren't in question by the original due date of 5 November?<br>
Best regards,<br>
Alex</blockquote>
<p>Once you have checked your records, reply with a clear outcome: either "You're right, here is a credit note for $240.00" or "Here is the signed change request showing these pages were approved." Attach the evidence instead of describing it.</p>
<p>A word on security: disputes sometimes end with a revised amount and a request to "pay to our new account." If you are the one paying a supplier after a dispute, verify any change of bank details by phone on a number you already hold. If you are the supplier, remind the client that your bank details have not changed.</p>

<h2>Card chargebacks: a different kind of dispute</h2>
<p>If a client paid by card, they may dispute the charge with their card issuer instead of with you. This is a chargeback: the payment is pulled back while the issuer reviews it. Respond through your payment provider within its deadline, with your invoice, contract, delivery proof and correspondence. Clear descriptions on the invoice and the card statement make chargebacks less likely in the first place.</p>

<h2>When a dispute won't resolve</h2>
<p>If you have answered every point with evidence and the client still won't pay, treat the remaining balance as an unpaid debt. Send a final notice, consider mediation for larger amounts, and, as a last resort, refer the invoice to collections or a small claims court. Our guide to <a href="/blog/invoice-collections">sending an invoice to collections</a> covers the process. Note that collection agencies and courts will want to see that the dispute was handled fairly.</p>

<h2>How to prevent invoice disputes</h2>
<ul>
<li><strong>Agree scope, price and acceptance criteria in writing</strong> before you start. Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide lists the clauses that matter, including a dispute window.</li>
<li><strong>Itemize clearly</strong> so each charge can be checked against the agreement.</li>
<li><strong>Document change requests</strong> and their cost as they happen.</li>
<li><strong>Send the invoice to the right person</strong> with the right references; see <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</li>
<li><strong>Invoice promptly</strong> while the work is fresh in everyone's mind.</li>
</ul>

<h2>Issue a clear, dispute-proof invoice</h2>
<p>The best way to avoid an invoice dispute is an invoice that answers every question before it is asked. Build yours in the <a href="/invoice-generator">invoice generator</a> with itemized lines, the client's PO number and clear terms, using a readable layout such as the <a href="/invoice-templates/modern">Modern invoice template</a>.</p>
`,
  },
];
