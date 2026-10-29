import type { PostDraft } from "../blog";

export const PAYMENTS_2026_C_POSTS: PostDraft[] = [
  {
    slug: "pay-by-bank",
    title: "Pay by Bank: How It Works, Fees and Invoicing in 2026",
    description:
      "Pay by bank explained for small businesses: how open banking and account-to-account payments work in the UK, EU and US, fees versus cards, and invoice setup.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "best-payment-methods-for-small-business",
      "add-payment-link-to-invoice",
      "bank-details-on-invoice",
      "ach-vs-wire-transfer",
    ],
    faqs: [
      {
        q: "What does pay by bank mean?",
        a: "Pay by bank means your customer pays you straight from their bank account instead of using a card. In most cases they pick their bank on a checkout or payment page, log in to their own banking app, and approve a transfer that is already filled in with your account details, the amount and the reference. The money moves account to account, usually over an instant or same-day bank rail, without card networks in the middle.",
      },
      {
        q: "Is pay by bank safe for customers?",
        a: "It is generally considered secure because the customer authenticates inside their own banking app, often with biometrics, and never shares card numbers or bank passwords with the merchant. In the UK and EU, the payment initiation providers that sit in the middle are regulated. The main weakness is that a bank transfer is hard to reverse, so customers have fewer chargeback-style protections than with cards, and they should always check the payee name before approving.",
      },
      {
        q: "How much does pay by bank cost a business?",
        a: "It depends on the provider and country. Many providers charge a flat fee or a small percentage that is lower than card processing, and some US ACH debit products are capped. For example, Stripe lists US ACH Direct Debit at 0.8% capped at $5 at the time of writing. Always check the current pricing page, because fees, settlement speeds and failed-payment charges differ widely between providers.",
      },
      {
        q: "What is the difference between pay by bank and a normal bank transfer?",
        a: "With a normal bank transfer, the customer copies your sort code or IBAN, the amount and the reference by hand, which leads to typos and missing references. With pay by bank, a regulated provider pre-fills all of those details and the customer simply approves the payment in their banking app. The underlying rail is often the same, such as Faster Payments or SEPA Instant, but the experience is faster and less error-prone.",
      },
      {
        q: "Can I add pay by bank to my invoices?",
        a: "Yes. The usual way is to sign up with a payment provider that offers pay by bank, create a hosted payment link or QR code for the invoice amount, and put that link in the notes or payment instructions of your invoice. You should still print your full bank details as a fallback for clients whose bank or accounting process cannot use the link.",
      },
      {
        q: "Does pay by bank work in the United States?",
        a: "Yes, but it looks different from the UK and EU. US pay by bank products usually link the customer's account through a data provider and then pull the money as an ACH debit, or in some cases send it over instant rails such as RTP or FedNow. There is no single US open banking payment standard yet, so features, speed and fees depend heavily on the provider you choose.",
      },
      {
        q: "Can customers get a refund on pay by bank payments?",
        a: "Refunds are possible, but you send them as a new outbound payment rather than reversing the original one. Many providers add a refund button that does this for you. Unlike card chargebacks, there is no automatic dispute process for authorised account-to-account payments, although UK and EU rules give some protection for unauthorised payments and, in the UK, for certain authorised push payment scams. State your refund policy in your invoice terms.",
      },
      {
        q: "What are variable recurring payments?",
        a: "Variable recurring payments, or VRPs, let a customer give a business a standing permission to collect payments from their bank account within agreed limits, such as a maximum per payment and per month. Sweeping VRPs between a person's own accounts have been live in the UK since 2022. Commercial VRPs for paying businesses started a phased launch in 2026, so availability depends on your provider and the customer's bank.",
      },
    ],
    content: `
<p><strong>Pay by bank</strong> lets a customer pay you directly from their bank account through a secure, pre-filled payment request that they approve in their own banking app. There are no card numbers involved, settlement is often instant, and fees are usually lower than card processing. It is built on open banking in the UK and EU and on ACH and instant rails in the US.</p>

<p>If you send invoices to clients who already settle by bank transfer, pay by bank is the natural upgrade: the same money movement, but without the typos, missing references and "which account do I pay?" emails. This guide explains how it works in each region, what it costs compared with cards, and how to add it to your invoices without changing how you bill.</p>

<h2>What is pay by bank?</h2>

<p>Pay by bank is an umbrella term for account-to-account payments that a third party starts on the payer's behalf. You will also see it called open banking payments, A2A payments, bank pay or instant bank pay. The idea is the same everywhere:</p>

<ol>
<li>The customer clicks a payment link, scans a QR code or chooses to pay from their bank at checkout.</li>
<li>They pick their bank from a list.</li>
<li>They are redirected to their banking app or website and log in with their usual security (often a fingerprint or face scan).</li>
<li>The app shows a payment already filled in with your name, account, the exact amount and the invoice reference.</li>
<li>They approve it, and the money moves from their account to yours over a bank rail.</li>
</ol>

<p>The provider in the middle never holds the customer's banking password. In the UK and EU it is a regulated payment initiation service provider (PISP). In the US it is usually a payment company that verifies the account and then debits it.</p>

<p>What makes this different from a plain bank transfer is that nobody types your details by hand. That one change removes most of the friction in invoice payments: wrong account numbers, missing invoice references and partial amounts.</p>

<h2>How open banking payments work in the UK</h2>

<p>The UK has the most mature open banking market. Since 2018, the largest banks have been required to offer standard APIs that let regulated providers initiate payments, and those payments usually travel over Faster Payments, so they arrive in seconds in most cases.</p>

<p>Usage keeps growing. Open Banking Limited reported that monthly open banking payments passed 40 million for the first time in May 2026 and that cumulative payments passed one billion in June 2026. Those figures cover the largest banks, so they understate total account-to-account volume.</p>

<p>Two UK features matter for invoicing:</p>

<ul>
<li><strong>Single immediate payments.</strong> This is the classic one-off payment: perfect for paying a single invoice from a link.</li>
<li><strong>Variable recurring payments (VRPs).</strong> Sweeping VRPs between a person's own accounts have run since 2022. Commercial VRPs, which let a customer authorise a business to collect variable amounts within limits, began a phased launch in June 2026 under the new UK Payments Initiative scheme. Bank coverage was still expanding at the time of writing, so check what your provider supports.</li>
</ul>

<p>UK payers also benefit from Confirmation of Payee, which checks that the account name matches the account details. That is one more reason your invoice should show the exact legal name on your business bank account. Our guide to <a href="/blog/uk-direct-debit">UK Direct Debit for small businesses</a> compares the older pull-payment option if you bill the same clients every month.</p>

<h2>Account-to-account payments in the EU</h2>

<p>In the EU, PSD2 gave regulated providers the right to initiate payments from customer accounts, and the Instant Payments Regulation has since made SEPA Instant Credit Transfers widely available. Under that regulation, payment providers in the euro area had to be able to send instant euro payments by 9 October 2025, price them no higher than standard credit transfers, and offer Verification of Payee, which checks the payee name against the IBAN.</p>

<p>On top of that infrastructure sit national and pan-European brands. The Netherlands has used iDEAL for years, and iDEAL is moving to Wero, the wallet from the European Payments Initiative. Our explainer on <a href="/blog/wero-payments-europe">Wero payments in Europe</a> covers that rollout in detail. For regular billing, <a href="/blog/sepa-direct-debit">SEPA Direct Debit</a> remains the main pull option.</p>

<h2>Pay by bank in the US</h2>

<p>The US does not have a mandated open banking payment scheme like the UK. US products usually work in one of two ways:</p>

<ul>
<li><strong>ACH debit with instant account verification.</strong> The customer links their account through a data provider, and the payment company pulls the money as an ACH debit. Funds typically settle in one to a few business days.</li>
<li><strong>Instant credit transfers.</strong> Some products use RTP or FedNow to push money instantly. Coverage depends on whether the customer's bank participates. The two US instant networks, FedNow and RTP, are run by different operators, and not every bank has joined both.</li>
</ul>

<p>US rules on consumer data access (often called the Section 1033 open banking rule) have been through legal challenges and revisions, so the market is still settling. If you invoice US clients, the practical options today are an ACH debit product from your payment provider or plain ACH and wire details on the invoice. Our guide to <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> explains the trade-offs. ACH also has new fraud monitoring duties this year; see <a href="/blog/nacha-2026-rules">the Nacha 2026 rules</a>.</p>

<h2>Pay by bank fees vs card fees</h2>

<p>The main reason businesses switch is cost. Card payments carry interchange and scheme fees that usually scale with the amount. Bank payments usually do not, or the percentage is lower and capped.</p>

<table>
<thead>
<tr><th>Payment method</th><th>Typical pricing model</th><th>Settlement</th><th>Reversal risk</th></tr>
</thead>
<tbody>
<tr><td>Credit or debit card</td><td>Percentage plus fixed fee</td><td>1 to 3 business days</td><td>Chargebacks possible for months</td></tr>
<tr><td>Open banking payment (UK and EU)</td><td>Flat fee or low percentage, varies by provider</td><td>Often instant</td><td>Low; authorised payments are hard to reverse</td></tr>
<tr><td>US ACH debit</td><td>Low percentage, often capped</td><td>1 to 4 business days</td><td>Returns possible, especially for consumer accounts</td></tr>
<tr><td>Manual bank transfer</td><td>Usually free to receive locally</td><td>Same day to a few days</td><td>Low</td></tr>
</tbody>
</table>

<h3>Worked example: a $4,000 invoice</h3>

<p>Using Stripe's published US list prices at the time of writing (2.9% plus 30 cents for domestic cards, and 0.8% capped at $5 for ACH Direct Debit):</p>

<ul>
<li>Card: 4,000 x 2.9% = $116, plus $0.30 = <strong>$116.30</strong> in fees.</li>
<li>ACH Direct Debit: 4,000 x 0.8% = $32, capped at <strong>$5.00</strong>.</li>
</ul>

<p>That is a saving of $111.30 on one invoice. If you send ten invoices of that size a month, the difference is over $13,000 a year. On a $60 invoice, the gap is much smaller ($2.04 by card versus $0.48 by ACH), which is why bank payments matter most for larger B2B invoices.</p>

<p>Prices change and differ by provider, country and account type, so always confirm on your provider's current pricing page. Also watch for extra charges, such as fees for failed payments, instant account verification or faster settlement.</p>

<p>One caution on passing costs on: if you want to add a surcharge for cards to nudge clients towards bank payments, the rules vary by country and US state. Check the surcharge rules that apply to you, and to your client, first.</p>

<h2>Pros and cons of pay by bank for invoices</h2>

<h3>Advantages</h3>
<ul>
<li><strong>Lower fees</strong>, especially on large invoices.</li>
<li><strong>Faster cash</strong>: instant settlement in the UK and much of the EU.</li>
<li><strong>Fewer reconciliation problems</strong>, because the invoice number travels as the payment reference.</li>
<li><strong>No card data</strong> to store or protect.</li>
<li><strong>Fewer chargebacks</strong>, since authorised bank payments are not disputed the same way cards are.</li>
</ul>

<h3>Drawbacks</h3>
<ul>
<li><strong>Bank coverage gaps</strong>: some smaller banks or business accounts are not supported by every provider.</li>
<li><strong>Corporate approval workflows</strong>: many larger clients pay through an accounts payable run and cannot click a link at all.</li>
<li><strong>Refunds are manual</strong> outbound payments.</li>
<li><strong>Customer protection is weaker</strong> than cards, which some consumers notice.</li>
</ul>

<h2>How to add pay by bank to your invoices</h2>

<p>You do not need special invoicing software. A clear invoice plus a payment link from your provider works well:</p>

<ol>
<li><strong>Choose a provider</strong> that supports bank payments in your clients' countries. Check fees, settlement speed and which banks are covered.</li>
<li><strong>Create your invoice</strong> with a unique number from a consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a>. That number becomes the payment reference.</li>
<li><strong>Generate a payment link or QR code</strong> in your provider's dashboard for the exact invoice total and paste it into the notes or payment instructions. Our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows the wording that works.</li>
<li><strong>Keep your bank details on the invoice</strong> as a fallback: account name, account number and sort code, or IBAN and BIC, or routing number. See <a href="/blog/bank-details-on-invoice">how to show bank details on an invoice</a>.</li>
<li><strong>State the reference clearly</strong>: "Please use INV-2026-041 as the payment reference."</li>
<li><strong>Mark the invoice paid</strong> in your own records when the money lands, and send a receipt if the client needs one.</li>
</ol>

<p>Our <a href="/invoice-generator">free invoice generator</a> lets you put the payment link and bank details in the notes and terms, set the currency, and download a clean PDF. It does not process payments or generate links itself, so the link always comes from your payment provider.</p>

<h3>Example payment instructions</h3>

<p>Here is wording you can adapt for the notes section:</p>

<p><em>"Pay instantly by bank: [your provider's link]. Or transfer to Acme Design Ltd, sort code 00-00-00, account 12345678. Reference: INV-2026-041. Payment due within 14 days."</em></p>

<h2>Explaining bank payments to clients</h2>

<p>The first time a client sees a bank payment link on your invoice, they may hesitate. A short explanation removes most of the doubt. Tell them three things:</p>

<ul>
<li><strong>They stay in control.</strong> The payment only happens when they approve it in their own banking app. You never see their login details.</li>
<li><strong>The details are pre-filled.</strong> Your account name, the amount and the invoice number appear automatically, so there is nothing to type and nothing to get wrong.</li>
<li><strong>They can still pay the old way.</strong> Your full bank details remain on the invoice for anyone who prefers a manual transfer or pays through an accounts payable run.</li>
</ul>

<p>Expect some clients to keep paying manually, especially larger companies. That is fine. The goal is to make the fastest route the easiest one, not to force a change.</p>

<h3>Handling partial payments and overpayments</h3>

<p>Because the amount is fixed in the link, partial payments are rarer than with manual transfers. If a client does pay part of the balance, record the amount paid and send an updated invoice showing the balance due; our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> shows the layout. If someone pays twice, refund the duplicate promptly as a new outbound transfer and keep a note of both transactions for your records.</p>

<h2>Is pay by bank right for your business?</h2>

<p>It fits best when most of these are true:</p>

<ul>
<li>Your invoices are mid to large value, so card fees hurt.</li>
<li>Your clients are small businesses or individuals who can approve payments themselves.</li>
<li>You invoice mainly in one country or currency zone (UK, euro area or US).</li>
<li>You already receive a lot of bank transfers and spend time matching them.</li>
</ul>

<p>If your clients are large companies with formal accounts payable teams, a link may not help much, because they pay through scheduled batches. In that case, focus on clean bank details, a correct reference and terms that match their payment cycle. Our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> covers the other levers.</p>

<h2>Conclusion</h2>

<p>Pay by bank is the cheapest and often fastest way to collect invoice payments from clients who can approve a transfer themselves. Start with one provider, add the link and your bank details to every invoice, and use the invoice number as the reference so reconciliation takes minutes, not hours. When you are ready, build your next invoice with our <a href="/invoice-generator">free invoice generator</a> and put your pay by bank link in the payment notes.</p>
`,
  },
  {
    slug: "agentic-payments",
    title: "Agentic Payments: What AI Agent Payments Mean for Invoices",
    description:
      "Agentic payments explained: how AI agents pay with Visa Intelligent Commerce and Mastercard Agent Pay, what changes for B2B invoicing, and the risks to manage.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["ai-agents-accounts-receivable", "ai-fraud-detection-payments", "invoice-scams"],
    faqs: [
      {
        q: "What are agentic payments?",
        a: "Agentic payments are payments started by an AI agent acting on behalf of a person or business, rather than by a human clicking pay. The agent works within permissions the user sets, such as a spending limit, approved merchants or a list of invoices it may pay. Card networks and payment companies are building tools so merchants and banks can recognise an agent, check what it is allowed to do, and trace each payment back to the human who authorised it.",
      },
      {
        q: "What is Visa Intelligent Commerce?",
        a: "Visa Intelligent Commerce is a Visa programme, announced on 30 April 2025, that gives developers of AI agents access to Visa tools such as tokenised credentials, authentication and spending controls, so agents can buy things on a user's behalf at participating merchants. Visa has since added related pieces, including a protocol to help merchants identify trusted agents. Availability depends on the issuer, the merchant and the agent platform, so check Visa's newsroom for current status.",
      },
      {
        q: "What is Mastercard Agent Pay?",
        a: "Mastercard Agent Pay is Mastercard's framework for AI agent payments, announced on 29 April 2025. It introduced Mastercard Agentic Tokens, which build on the tokenisation used for mobile wallets and card-on-file payments, so a registered agent can pay with a token tied to specific permissions instead of a raw card number. Mastercard has rolled it out in stages with partner banks and platforms, so coverage varies by market.",
      },
      {
        q: "Will AI agents pay my invoices automatically?",
        a: "Some will, especially inside larger companies that use accounts payable automation. In practice, agents mostly read invoices, match them to purchase orders, flag exceptions and queue payments for a human to approve. Fully autonomous payment of supplier invoices is still rare because of fraud and control concerns. The best thing you can do as a supplier is send clear, consistent invoices that software can read without guessing.",
      },
      {
        q: "Is agentic commerce safe?",
        a: "It can be, but it adds new risks. An agent might be tricked by fake instructions hidden in a document or web page, might misread an invoice, or might pay a fraudulent supplier whose bank details were changed. The card network programmes focus on verifying agents, limiting what they can spend and keeping an audit trail. Businesses should still require human approval for new payees, bank detail changes and large amounts.",
      },
      {
        q: "Who is liable if an AI agent makes a wrong payment?",
        a: "There is no single answer yet. Liability depends on the payment method, the network rules, the contract with the agent provider and local consumer and payment law. For card payments made through network agent programmes, the existing dispute rules are being adapted, and the networks have said that clear user consent is central. For bank transfers, recovering a mistaken payment is usually harder. Get advice from a qualified adviser before relying on agent payments.",
      },
      {
        q: "Does the invoice generator use AI agents?",
        a: "No. Our invoice generator has no AI features. It builds PDF invoices in your browser from the details you enter, saves drafts locally on your device, and lets you download the file. It does not send invoices, take payments or connect to any AI agent. That said, a clean, well-structured invoice PDF is easier for any downstream software, including a client's AI tools, to read correctly.",
      },
      {
        q: "How should I format invoices for AI accounts payable systems?",
        a: "Use one clear invoice number, an invoice date and due date, your legal business name and tax ID, the client's purchase order number if they gave one, itemised lines with quantities and unit prices, a clear tax line and a single total. Put your bank details in the same place every time and never change them without telling the client through a separate, trusted channel. Consistency helps both humans and software.",
      },
    ],
    content: `
<p><strong>Agentic payments</strong> are payments that an AI agent starts on behalf of a person or business, within limits that the human sets. Visa Intelligent Commerce and Mastercard Agent Pay are the best-known programmes. For small businesses, the near-term impact is less about robots shopping and more about client software reading, approving and paying your invoices.</p>

<p>This guide explains what agentic payments are, how the main programmes work, what agentic commerce means for B2B invoicing, and the risks you should plan for. One note up front: our own invoice generator has no AI features. It builds invoices in your browser from what you type. We cover this topic because your clients' systems are changing, and your invoices need to work with them.</p>

<h2>What are agentic payments?</h2>

<p>An AI agent is software that can take actions, not just answer questions. It might search for a product, compare prices, fill in a checkout form, or read a supplier invoice and queue it for payment. When that agent completes the payment step, you have an agentic payment.</p>

<p>The hard problem is trust. A merchant, a bank or a supplier needs to know three things:</p>

<ol>
<li><strong>Is this a real, approved agent</strong> and not a bot or a fraudster?</li>
<li><strong>Who does it act for</strong>, and did that person or company actually authorise this payment?</li>
<li><strong>What is it allowed to do</strong>, such as a spending limit, specific merchants or a time window?</li>
</ol>

<p>The card network programmes, and the protocols that payment companies have published, are mostly attempts to answer those three questions in a standard way.</p>

<h2>Visa Intelligent Commerce and Mastercard Agent Pay</h2>

<p>Both networks announced their programmes within a day of each other in April 2025, and both have expanded them since.</p>

<table>
<thead>
<tr><th>Programme</th><th>Announced</th><th>Core idea</th><th>What it means for merchants</th></tr>
</thead>
<tbody>
<tr><td>Mastercard Agent Pay</td><td>29 April 2025</td><td>Agentic Tokens tied to a registered agent and the user's permissions</td><td>Agent transactions can be recognised and traced to the cardholder's consent</td></tr>
<tr><td>Visa Intelligent Commerce</td><td>30 April 2025</td><td>Developer access to Visa tokens, authentication and spending controls for AI agents</td><td>Agents can pay with Visa credentials at participating merchants, with controls set by the user</td></tr>
</tbody>
</table>

<p>Since launch, Visa has added work on identifying trusted agents at checkout and, in 2026, an integration product that reports suggest supports several agent protocols. Mastercard has reported live agentic transactions with partner banks in several markets. The details move quickly, so treat dates and coverage as "at the time of writing" and check the Visa and Mastercard newsrooms for the latest.</p>

<p>Outside the card networks, payment and AI companies have published open protocols for agentic commerce, which aim to let an agent and a merchant agree on a cart, a price and a payment credential in a standard format. For a small business, the exact protocol matters less than the direction of travel: more purchases and more invoice payments will pass through software that acts on someone's behalf.</p>

<h2>How an agent payment works, step by step</h2>

<p>The details differ by network and platform, but most agentic payments follow a similar flow:</p>

<ol>
<li><strong>Set-up.</strong> A user, such as a shopper or a finance manager, connects a payment credential to an AI agent through their bank, card issuer or a payment platform. The real card number is replaced by a token.</li>
<li><strong>Permissions.</strong> The user sets limits: a maximum amount, approved merchants or suppliers, categories, or a time window. Some set-ups require confirmation for every purchase above a threshold.</li>
<li><strong>Task.</strong> The agent receives an instruction, such as "reorder printer toner from our usual supplier when stock is low".</li>
<li><strong>Checkout.</strong> The agent identifies itself to the merchant, presents the token and the order details, and the network checks that the agent is registered and within its permissions.</li>
<li><strong>Authentication and approval.</strong> The issuer approves or declines as with any card payment, sometimes asking the human to confirm.</li>
<li><strong>Record.</strong> The transaction carries data showing it was agent-initiated, which helps with disputes and audits.</li>
</ol>

<p>For a small merchant, most of this happens inside the payment provider. What you see is an order and a payment, possibly flagged as coming from an agent. For a supplier sending invoices, the agent sits on the buyer's side, reading your document and preparing payment.</p>

<h2>Agentic commerce vs B2B invoice payments</h2>

<p>Most headlines about agentic commerce focus on consumers: an assistant that books a flight or reorders groceries. B2B is different. Business purchases usually involve:</p>

<ul>
<li>A quote or proposal, then a purchase order.</li>
<li>Delivery of goods or services.</li>
<li>An invoice with payment terms such as net 30.</li>
<li>Approval by one or more people in the buyer's company.</li>
<li>Payment by bank transfer, ACH, card or a virtual card.</li>
</ul>

<p>AI agents are already showing up in the middle of that chain, mainly on the buyer's accounts payable side. Typical tasks include reading invoice PDFs, extracting the fields, matching them to purchase orders and receipts (the classic <a href="/blog/three-way-match">three-way match</a>), flagging duplicates and preparing a payment run. On the seller side, the same technology chases overdue invoices and applies cash. Our guide to <a href="/blog/ai-agents-accounts-receivable">AI agents in accounts receivable</a> covers that side.</p>

<p>Full autonomy, where an agent pays a supplier invoice with no human in the loop, is still uncommon for meaningful amounts. Most finance teams keep approval steps because of fraud and audit rules. But the trend is clear: the first reader of your invoice is increasingly software.</p>

<h2>What AI agent payments mean for your invoices</h2>

<p>If software reads your invoice before a person does, small inconsistencies cause real delays. A human can guess that "Inv 41" and "INV-2026-041" are the same document. An extraction model might not, and the invoice lands in an exceptions queue.</p>

<h3>Make your invoice machine-friendly</h3>

<ol>
<li><strong>One unique invoice number</strong>, in a consistent format. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you set a pattern.</li>
<li><strong>The client's PO number</strong> if they gave you one. Missing PO numbers are one of the most common reasons automated systems reject invoices. See <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li><strong>Clear dates</strong>: invoice date and due date, both written in full.</li>
<li><strong>Itemised lines</strong> with quantity, unit price and line total.</li>
<li><strong>One tax line and one total</strong>, so there is no ambiguity about the amount due.</li>
<li><strong>Bank details in the same place every time</strong>, with your legal account name.</li>
<li><strong>A plain, text-based PDF</strong>, not a photo or scan, so the text can be read accurately.</li>
</ol>

<p>Simple, clean layouts help here. Templates such as <a href="/invoice-templates/minimal">the minimal invoice template</a> keep fields where readers expect them. If a client asks for a structured e-invoice format instead of a PDF, that is a separate requirement; our generator produces PDFs only, not e-invoice XML.</p>

<h3>Worked example: what an exception costs</h3>

<p>Say you invoice a client $8,000 on net 30 terms. Their AP system rejects the PDF because the PO number is missing. Someone emails you on day 20, you reissue the invoice on day 22, and the client's next payment run is on day 45. You get paid 15 days later than planned. If you rely on a line of credit at, say, 12% a year, that delay costs about 8,000 x 12% x 15 / 365 = <strong>$39.45</strong>, plus your time. Across a year of similar invoices, it adds up.</p>

<h2>Risks of agentic payments</h2>

<p>New ways to pay create new ways to steal. The main risks for small businesses:</p>

<h3>Manipulated instructions</h3>
<p>AI agents can be misled by text hidden inside documents, emails or web pages, an attack often called prompt injection. A fraudster could try to embed instructions in a fake invoice telling an agent to pay a different account. This is one reason businesses should never let an agent change payee bank details by itself.</p>

<h3>Invoice and bank detail fraud</h3>
<p>Business email compromise and fake supplier invoices already cost companies heavily. Agents that pay faster could also pay fraudsters faster. Our guide to <a href="/blog/invoice-scams">invoice scams</a> lists warning signs, and <a href="/blog/ai-fraud-detection-payments">AI fraud detection in payments</a> explains how banks are responding.</p>

<h3>Duplicate and wrong payments</h3>
<p>If you send the same invoice twice, or send a corrected version without marking it clearly, an automated process may pay both. Use clear corrections and credit notes, and never reuse invoice numbers. See <a href="/blog/duplicate-invoice-payments">duplicate invoice payments</a>.</p>

<h3>Unclear liability</h3>
<p>When an agent makes a mistake, who pays? The answer depends on the payment method, network rules, contracts and local law, and the rules are still developing. Card network programmes put heavy weight on recorded user consent. For bank transfers, recovering a mistaken payment is often slow. This is not legal advice; check with a qualified adviser if you plan to let agents pay or accept agent payments.</p>

<h3>Data privacy</h3>
<p>Invoices contain names, addresses, bank details and pricing. If you or your client feed them into AI tools, check what the provider does with the data.</p>

<h2>A practical checklist for small businesses</h2>

<ul>
<li>Keep invoice layouts and numbering consistent across every client.</li>
<li>Ask large clients whether they use automated AP, and what fields they require.</li>
<li>Include PO numbers, contact details for AP queries and clear payment terms.</li>
<li>Confirm any bank detail change through a second, trusted channel, such as a phone call to a known number.</li>
<li>Require human approval for new payees and large payments in your own business.</li>
<li>Watch your provider's announcements: if your card processor supports agent transactions, read how it flags and handles disputes.</li>
<li>Use secure payment links rather than asking clients to type card numbers into emails.</li>
</ul>

<h2>Questions to ask your payment provider</h2>

<p>If you accept cards online or send payment links, your provider will decide how agent transactions reach you. Before agentic payments become routine for your customers, it is worth asking:</p>

<ul>
<li>Do you support Visa Intelligent Commerce, Mastercard Agent Pay or other agent programmes, and in which countries?</li>
<li>How are agent-initiated payments labelled in my dashboard and reports?</li>
<li>What happens when a customer disputes a purchase their agent made? Who carries the loss?</li>
<li>Can I block or require extra checks for agent traffic if I see abuse?</li>
<li>Are there any extra fees for agent transactions?</li>
</ul>

<p>Write the answers down and revisit them every six months. This area changes quickly, and a provider's answer in early 2026 may already be out of date.</p>

<h2>Will agentic payments replace invoices?</h2>

<p>Not soon. For consumer purchases, an agent paying at checkout can skip the invoice entirely. For B2B work, invoices still carry legal, tax and audit weight: they record what was supplied, at what price, with which tax. Agents will read, route and pay invoices more and more, but the invoice itself stays. If anything, accuracy matters more when a machine is the first reader.</p>

<p>Payment rails are also changing alongside AI. Instant bank payments and <a href="/blog/pay-by-bank">pay by bank</a> options make it easier for any payer, human or agent, to settle quickly once an invoice is approved.</p>

<h2>Conclusion</h2>

<p>Agentic payments are moving from announcements to early live use, led by Visa Intelligent Commerce and Mastercard Agent Pay on the card side and by AI tools inside accounts payable teams on the B2B side. You do not need AI to benefit. You need invoices that are clear, consistent and hard to tamper with. Build them with our <a href="/invoice-generator">free invoice generator</a>, which creates clean PDFs in your browser with your PO number, terms and bank details in a consistent place.</p>
`,
  },
  {
    slug: "wero-payments-europe",
    title: "Wero Payments in 2026: Status, Countries and Business Use",
    description:
      "Wero in 2026: where the European Payments Initiative wallet works, the e-commerce rollout by country, the iDEAL migration, and what it means for businesses.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["pay-by-bank", "sepa-direct-debit", "invoice-international-clients"],
    faqs: [
      {
        q: "What is Wero?",
        a: "Wero is a digital wallet and payment brand from the European Payments Initiative (EPI), a company backed by a group of European banks and payment providers. It lets people send money using a phone number or email address and pay online, with funds moving instantly between bank accounts over SEPA Instant Credit Transfer. It launched for person-to-person payments in 2024 and is expanding to online shopping and in-store payments.",
      },
      {
        q: "Which countries can use Wero?",
        a: "Wero person-to-person payments have been live in Germany, France and Belgium since 2024. EPI lists the Netherlands, Luxembourg and Austria as migration markets, with Dutch iDEAL users moving to Wero from 2026 and the move due to be complete by the end of 2027. Customers need an account at a participating bank or provider, so availability also depends on the bank, not just the country.",
      },
      {
        q: "Can businesses accept Wero payments?",
        a: "Yes, for online sales in markets where Wero e-commerce is live. Merchants usually accept Wero through their payment service provider or acquirer, which adds it as a checkout option. Germany went first in late 2025, Belgium followed in early 2026, and France started rolling out in 2026. Ask your payment provider whether it supports Wero and in which countries.",
      },
      {
        q: "Is Wero replacing iDEAL?",
        a: "Yes. The Dutch payment sector and EPI agreed that iDEAL will move to Wero in phases. Shoppers will first see a combined iDEAL | Wero brand, and the full migration is targeted for completion by 31 December 2027. Dutch businesses that accept iDEAL do not need to act immediately, but they should follow their payment provider's migration timeline and update checkout labels when asked.",
      },
      {
        q: "How much does Wero cost for merchants?",
        a: "There is no single public Wero price for all merchants, because you pay through your payment provider. Pricing is set by each provider and may be a flat fee per transaction, like many existing iDEAL plans, rather than a card-style percentage. Check your provider's pricing page for its current Wero or iDEAL | Wero rate, and compare it with your card and bank transfer costs.",
      },
      {
        q: "Is Wero safe?",
        a: "Wero payments are confirmed inside the customer's banking app or the Wero app using the bank's own security, and the money moves between regulated bank accounts. EU rules require euro payment providers to offer Verification of Payee, which checks that the name matches the IBAN before a transfer. Like any instant payment, though, a transfer sent to a scammer is hard to recover, so users should check the recipient before confirming.",
      },
      {
        q: "Can I put Wero on my invoice?",
        a: "You can mention Wero as a payment option, but for business invoices the most reliable approach is to include your IBAN, BIC and legal account name, plus a payment link from your provider if it supports Wero or other pay by bank methods. Wero's person-to-person features are designed for individuals, and dedicated business payment features were still being rolled out at the time of writing.",
      },
      {
        q: "What is the European Payments Initiative?",
        a: "The European Payments Initiative, or EPI, is the company behind Wero. It is owned by a group of European banks and payment service providers and was set up to create a European payment solution built on instant bank transfers. EPI acquired the Dutch iDEAL scheme and Payconiq, which is why Wero is replacing those brands, and it has signed a cooperation agreement with other European payment schemes.",
      },
    ],
    content: `
<p><strong>Wero</strong> is the digital wallet from the European Payments Initiative (EPI). It moves money instantly between European bank accounts and is becoming a checkout option for online shops. In 2026 it works for person-to-person payments in Germany, France and Belgium, has launched online payments in Germany and Belgium, is rolling out in France, and is replacing iDEAL in the Netherlands.</p>

<p>If you sell to customers in the euro area, or invoice European clients, EPI's wallet is worth understanding. This guide covers what it is, where it works, how the e-commerce rollout has gone, what it means for small businesses and freelancers, and how it fits alongside SEPA transfers and your invoices.</p>

<h2>What is Wero?</h2>

<p>It is a payment brand and wallet built on SEPA Instant Credit Transfer, the euro scheme that moves money between bank accounts in seconds. Users register through their bank's app or a standalone app, link their account, and can then:</p>

<ul>
<li>Send money to another person using a phone number, email address or QR code.</li>
<li>Request money from friends or contacts.</li>
<li>Pay online at shops that accept it, confirming in their banking app.</li>
</ul>

<p>Money moves straight from one bank account to another. There is no card number and no separate stored balance: the wallet is a front end on top of the customer's existing bank account.</p>

<p>EPI is owned by a group of European banks and payment service providers. Its stated aim is a European option for everyday payments that does not depend on international card schemes or big-tech wallets. Along the way, EPI bought the Dutch iDEAL scheme and the Payconiq brand, which is why those services are being folded into the new wallet.</p>

<h3>Why Europe wanted its own wallet</h3>

<p>Before this project, most European countries had their own domestic payment brands that did not work across borders. A Dutch shopper used iDEAL, a Belgian used Payconiq or Bancontact, and a German often used PayPal or a card. For a small online shop selling across borders, that meant integrating several methods or relying on cards. A single, instant, bank-based option that works in several countries is meant to simplify that picture and lower costs.</p>

<h2>Wero status in 2026</h2>

<p>According to EPI's published figures at the time of writing, the wallet has around 56 to 57 million users in markets where person-to-person payments are live, with millions more due to join through migrations. Here is where things stand by country, based on EPI's roadmap and announcements.</p>

<table>
<thead>
<tr><th>Country</th><th>Person-to-person</th><th>Online (e-commerce)</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Germany</td><td>Live since 2024</td><td>Live since late 2025</td><td>First e-commerce market; large retailers among early adopters</td></tr>
<tr><td>Belgium</td><td>Live since 2024</td><td>Live since March 2026</td><td>Payconiq users moving across</td></tr>
<tr><td>France</td><td>Live since 2024</td><td>Rolling out in 2026</td><td>First transactions in spring 2026, wider rollout from the third quarter</td></tr>
<tr><td>Netherlands</td><td>Via iDEAL migration</td><td>iDEAL becoming iDEAL | Wero</td><td>Full migration targeted by 31 December 2027</td></tr>
<tr><td>Luxembourg</td><td>Migration from autumn 2026</td><td>Acquirers enabling merchants</td><td>Payconiq Luxembourg moving across</td></tr>
<tr><td>Austria</td><td>Planned</td><td>Planned</td><td>Listed by EPI as a future migration market</td></tr>
</tbody>
</table>

<p>Rollout dates have shifted before, and bank participation varies within each country, so treat this table as a snapshot. Check EPI's announcements and your payment provider for current coverage before you plan around a date.</p>

<h2>The e-commerce rollout</h2>

<p>Online payments are where the wallet matters most for businesses. The model is familiar to anyone who has used iDEAL or a bank payment button:</p>

<ol>
<li>The customer picks the EPI wallet at checkout.</li>
<li>They confirm the payment in their app, on their phone or by scanning a QR code on a desktop screen.</li>
<li>The shop receives confirmation, and the money arrives as an instant credit transfer.</li>
</ol>

<p>Germany went first in late 2025, with major retailers among the early merchants. Belgium recorded its first e-commerce transaction in March 2026, and France saw first transactions in spring 2026 with a larger rollout planned from the third quarter. Payment service providers and acquirers, including large international ones, have joined EPI to offer the method to their merchants.</p>

<p>EPI has also said it plans in-store payments using NFC and QR codes, plus features such as recurring payments and subscription management. Those were roadmap items rather than widely available features at the time of writing.</p>

<h3>The European Payments Initiative and its partners</h3>

<p>On 2 February 2026, EPI signed a memorandum of understanding with Bancomat (Italy), Bizum (Spain), SIBS-MB WAY (Portugal) and Vipps MobilePay (Nordics). The plan is to link these schemes through a central hub so users can pay across borders: person-to-person first, then e-commerce and point of sale from 2027. In April 2026, some of the partners announced a successful proof of concept for cross-border in-store payments. A memorandum is not a finished system, so expect cross-scheme payments to arrive gradually.</p>

<h2>Wero for business: what changes for you</h2>

<p>How much this affects you depends on how you get paid.</p>

<h3>If you sell online to consumers</h3>
<p>The wallet is likely to become a standard checkout option in Germany, Belgium, France and the Netherlands. If your customers are there, ask your payment provider when it will be available. In the Netherlands you do not need to choose: iDEAL payments are migrating through your existing provider.</p>

<h3>If you invoice businesses</h3>
<p>Most B2B clients pay invoices by SEPA credit transfer from their accounting or banking systems, often in scheduled payment runs. EPI's wallet does not replace that today. Your invoice should still show your IBAN, BIC and legal account name. Read our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> for the exact fields.</p>

<h3>If you invoice consumers or very small clients</h3>
<p>Here an instant bank payment can help. A client who would struggle to type an IBAN can pay in seconds if you give them a payment link or QR code from a provider that supports this wallet or other <a href="/blog/pay-by-bank">pay by bank</a> methods. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</p>

<h3>If you are a freelancer paid by individuals</h3>
<p>The person-to-person features are designed for private use between individuals. Using a personal wallet for business income can clash with your bank's account terms and makes record keeping harder. EPI has indicated that dedicated business payment features are coming, but check your bank's terms before using the personal app for invoices.</p>

<h2>Wero vs cards vs SEPA transfers</h2>

<table>
<thead>
<tr><th>Feature</th><th>EPI wallet</th><th>Card payment</th><th>Manual SEPA transfer</th></tr>
</thead>
<tbody>
<tr><td>Speed</td><td>Seconds (instant transfer)</td><td>Authorised instantly, settles in days</td><td>Same or next business day, or instant if sent as SEPA Instant</td></tr>
<tr><td>Customer effort</td><td>Confirm in app</td><td>Enter card or use a wallet</td><td>Type IBAN, amount and reference</td></tr>
<tr><td>Typical merchant pricing</td><td>Set by provider; often a flat fee</td><td>Percentage plus fixed fee</td><td>Usually low or free to receive</td></tr>
<tr><td>Reconciliation</td><td>Reference passed automatically</td><td>Via processor reports</td><td>Depends on the payer typing the reference</td></tr>
<tr><td>Chargebacks</td><td>No card-style chargebacks</td><td>Yes</td><td>No</td></tr>
<tr><td>Best for</td><td>Online shops, consumer payments</td><td>International customers, credit</td><td>B2B invoices</td></tr>
</tbody>
</table>

<h3>Worked example: fees on a 250 euro order</h3>

<p>Assume, as an illustration only, that your provider charges a 0.30 euro flat fee per Wero payment and 1.5% plus 0.25 euro per card payment. On a 250 euro order:</p>

<ul>
<li>Card: 250 x 1.5% = 3.75, plus 0.25 = <strong>4.00 euro</strong>.</li>
<li>Instant bank payment at a flat fee: <strong>0.30 euro</strong>.</li>
</ul>

<p>On 200 such orders a month, that is 740 euro saved, or 8,880 euro a year. On a 20 euro order the gap is far smaller (0.55 euro by card versus 0.30 euro), so the savings matter most for higher-value baskets and invoices. Your real numbers depend entirely on your provider's pricing, so check before you assume savings. Some providers list the Dutch method as a single combined flat-fee option during the migration.</p>

<h2>Safety and customer protection</h2>

<p>Payments are confirmed inside the customer's banking app using the bank's own security, such as biometrics or a PIN. Under the EU Instant Payments Regulation, euro payment providers must also offer Verification of Payee, which checks the payee name against the IBAN before a transfer is sent. That makes your exact legal account name more important than ever: if your invoice says "Studio Nine" but the account is "Studio Nine BV", the customer may see a partial-match warning.</p>

<p>Instant transfers are hard to reverse, which protects merchants from chargebacks but also means customers who pay a scammer may struggle to recover money. For online purchases, EPI and its partners have described buyer protection features; check the current terms with your provider so you can answer customer questions accurately.</p>

<h2>How to prepare</h2>

<ol>
<li><strong>Ask your payment provider</strong> whether it supports the wallet, in which countries, and at what price.</li>
<li><strong>Update your checkout labels</strong> if you accept iDEAL or Payconiq and your provider asks you to switch branding.</li>
<li><strong>Keep your bank details accurate</strong>, with the exact account holder name, because of Verification of Payee checks.</li>
<li><strong>Use clear invoice references</strong> so incoming transfers match invoices. A consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> helps.</li>
<li><strong>Set the right currency.</strong> The wallet runs in euro. If you invoice clients outside the euro area, see <a href="/blog/foreign-currency-invoice">foreign currency invoicing</a>.</li>
<li><strong>Check VAT details</strong> on cross-border invoices. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> explains what to include, and a qualified adviser can confirm your position.</li>
</ol>

<h2>Questions your customers may ask</h2>

<p>If you add the new method to your checkout or payment links, a few questions come up again and again. Short, accurate answers on your payment page or FAQ save support time:</p>

<ul>
<li><strong>"Do I need a new app?"</strong> Usually not. Many participating banks build the feature into their existing banking app. Some customers use the standalone app instead.</li>
<li><strong>"Does my bank support it?"</strong> It depends on the bank and country. If their bank is not listed at checkout, they can pay by card or manual transfer instead.</li>
<li><strong>"Is there a fee for me?"</strong> Consumers are not normally charged for paying this way, but they should check their own bank's terms.</li>
<li><strong>"How do I get a refund?"</strong> Refunds come back as a new transfer from the shop, so explain your refund timescale in your terms.</li>
</ul>

<p>Keep these answers general and point customers to their bank for anything account-specific. If you sell to customers in several countries, keep card payments available too, so nobody is left without a way to pay.</p>

<h2>What it does not do</h2>

<p>It is easy to overestimate a new payment brand. At the time of writing, EPI's wallet:</p>

<ul>
<li>Is euro-only and limited to countries where participating banks are live.</li>
<li>Does not replace SEPA credit transfers for normal B2B payment runs.</li>
<li>Does not replace <a href="/blog/sepa-direct-debit">SEPA Direct Debit</a> for collecting regular payments, although recurring features are on EPI's roadmap.</li>
<li>Is not a credit product, so customers pay from available funds.</li>
<li>Does not issue invoices or receipts for you; you still need your own records.</li>
</ul>

<h2>Conclusion</h2>

<p>Wero has grown from a person-to-person app into a real e-commerce option in Germany and Belgium, with France rolling out and the Netherlands migrating from iDEAL by the end of 2027. For online sellers in those markets it is worth enabling through your provider. For invoicing, keep doing what works: clear bank details, a unique reference and, where useful, a bank payment link. Create your next euro invoice with our <a href="/invoice-generator">free invoice generator</a>, which supports multiple currencies and lets you add payment instructions in the notes.</p>
`,
  },
  {
    slug: "iso-20022-payments",
    title: "ISO 20022 for Small Businesses: What to Change on Invoices",
    description:
      "ISO 20022 explained for small businesses: the SWIFT migration, structured addresses and remittance data, and what to update on your invoices and bank details.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["bank-details-on-invoice", "invoice-international-clients", "remittance-advice"],
    faqs: [
      {
        q: "What is ISO 20022?",
        a: "ISO 20022 is an international standard for financial messages, such as payment instructions between banks. It uses structured data fields for names, addresses, references and remittance information, instead of the free-text lines used in older formats like SWIFT MT. Major payment systems, including SWIFT cross-border payments, Fedwire in the US and CHAPS in the UK, have moved to it, so the data you give your bank and clients matters more than before.",
      },
      {
        q: "Does ISO 20022 affect small businesses?",
        a: "Yes, mostly indirectly. Your bank handles the message format, but it needs good data from you and your clients. If your clients pay you internationally, their bank may ask for your full structured address, including town and country. If you send international payments, your bank may reject or delay instructions with incomplete supplier addresses. Clear invoices with complete details reduce those problems.",
      },
      {
        q: "What happened with SWIFT in November 2025?",
        a: "November 2025 marked the end of the coexistence period for cross-border payment instructions on the SWIFT network. From then on, banks were expected to send cross-border payment instructions in ISO 20022 format rather than the older MT format. SWIFT provided contingency translation for some cases, but the direction is clear: ISO 20022 is now the standard for cross-border payments between banks.",
      },
      {
        q: "What is a structured address in ISO 20022?",
        a: "A structured address puts each part of an address into its own field, such as street name, building number, postcode, town and country, instead of free-text lines. A hybrid address combines a few free-text lines with structured town and country fields. Unstructured addresses, with everything in free text, are being phased out for cross-border payments. Banks therefore want addresses split into clear components.",
      },
      {
        q: "Is the November 2026 structured address deadline still happening?",
        a: "SWIFT originally planned to stop accepting fully unstructured addresses in cross-border payment messages in November 2026. In August 2026, SWIFT said it had accepted a community request to extend the structured address migration and would consult the industry on timing, with an update expected by the end of 2026. Check SWIFT and your bank for the latest date, and use complete structured addresses anyway.",
      },
      {
        q: "What is structured remittance data?",
        a: "Remittance data is the information that tells the payee what a payment is for, such as invoice numbers and amounts. ISO 20022 allows this to travel in dedicated structured fields, including a creditor reference and details of multiple invoices, instead of a short free-text line. When your client's bank and your bank both use it, matching payments to invoices becomes much easier.",
      },
      {
        q: "What should I put on my invoice for ISO 20022?",
        a: "Include your full legal business name exactly as it appears on your bank account, a complete address split into street, building number, postcode, town and country, your IBAN and BIC or local account details, a unique invoice number to use as the payment reference, and the client's full address. Ask clients to quote the invoice number in the payment reference field without extra text.",
      },
      {
        q: "Do I need new software for ISO 20022?",
        a: "Most small businesses do not. Your bank's online banking already creates ISO 20022 messages. You may need to update supplier and customer records so addresses are split into proper fields, and if you upload payment files to your bank, check that your accounting software exports the format your bank now requires. Ask your bank which file formats and address rules apply to you.",
      },
    ],
    content: `
<p><strong>ISO 20022</strong> is the global standard for payment messages between banks. It replaces free-text fields with structured data for names, addresses and invoice references. For small businesses, the practical change is simple: give complete, structured addresses and clean invoice references on your invoices and bank details, so payments are not delayed or rejected.</p>

<p>You do not need to read message schemas or buy new software. You need to know what banks now expect, what changed with SWIFT in November 2025, where the structured address deadline stands in 2026, and which details to fix on your invoices. This guide covers all four.</p>

<h2>What is ISO 20022?</h2>

<p>The standard is published by the International Organization for Standardization, for how financial institutions describe payments and related messages. Compared with older formats such as SWIFT MT, it offers:</p>

<ul>
<li><strong>Structured fields</strong> for each piece of data, such as street name, town and country, rather than four lines of free text.</li>
<li><strong>Richer data</strong>, including longer names, legal entity identifiers and purpose codes.</li>
<li><strong>Structured remittance information</strong>, so invoice numbers and amounts can travel with the payment.</li>
</ul>

<p>The benefit is better automation. Banks can screen for sanctions and fraud more accurately, and businesses can match incoming payments to invoices without guesswork.</p>

<h2>The ISO 20022 migration timeline</h2>

<p>Many payment systems have moved to the new standard over the past few years. The milestones that matter most for small businesses:</p>

<table>
<thead>
<tr><th>System or milestone</th><th>Date</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td>SEPA credit transfers and direct debits (euro)</td><td>Since SEPA launched</td><td>Already built on the standard, which is why IBAN payments carry structured references</td></tr>
<tr><td>CHAPS (UK high-value payments)</td><td>June 2023</td><td>Bank of England moved CHAPS to the new format, with enhanced data rules phased in afterwards</td></tr>
<tr><td>Fedwire Funds Service (US)</td><td>July 2025</td><td>The Federal Reserve moved Fedwire to the new format in a single cutover</td></tr>
<tr><td>SWIFT cross-border payments</td><td>November 2025</td><td>End of the MT coexistence period for cross-border payment instructions</td></tr>
<tr><td>Unstructured addresses removed (SWIFT CBPR+)</td><td>Originally November 2026, now being extended</td><td>Only structured or hybrid addresses accepted once the change takes effect</td></tr>
</tbody>
</table>

<h3>SWIFT November 2025</h3>

<p>SWIFT ran a coexistence period from March 2023 in which banks could send cross-border payment instructions in either the old MT format or the new one. That period ended in November 2025. Since then, the new format has been the standard for cross-border payment instructions on SWIFT. For you, this mostly happened behind the scenes, but it is why banks became stricter about data quality.</p>

<h3>Structured addresses in 2026</h3>

<p>The next step was to stop accepting fully unstructured postal addresses in cross-border payments. SWIFT's plan was that, from November 2026, only <strong>fully structured</strong> addresses (each part in its own field) or <strong>hybrid</strong> addresses (some free-text lines plus structured town and country) would be accepted.</p>

<p>In August 2026, SWIFT said it had accepted a request from the banking community to extend the structured address migration for ISO 20022 payment messages. It said it would consult banks, market infrastructures and corporates on the timing and expected to give an update by the end of 2026. At the time of writing, no final new date had been confirmed, and some banks and euro schemes had published their own November 2026 changes. Check SWIFT's announcements and ask your bank what it requires.</p>

<p>Whatever the final date, the direction is fixed. Banks want town and country in dedicated fields at a minimum, and fully structured addresses are the safest choice.</p>

<h2>Structured addresses: what they look like</h2>

<p>Here is the same supplier address in three formats.</p>

<table>
<thead>
<tr><th>Format</th><th>How the data is held</th><th>Accepted going forward?</th></tr>
</thead>
<tbody>
<tr><td>Unstructured</td><td>Line 1: "Unit 4, 12 Mill Lane"; Line 2: "Leeds LS1 4AB UK"</td><td>Being phased out for cross-border payments</td></tr>
<tr><td>Hybrid</td><td>Free-text line: "Unit 4, 12 Mill Lane"; Postcode: LS1 4AB; Town: Leeds; Country: GB</td><td>Yes, under SWIFT's plan</td></tr>
<tr><td>Fully structured</td><td>Building: Unit 4; Number: 12; Street: Mill Lane; Postcode: LS1 4AB; Town: Leeds; Country: GB</td><td>Yes, and preferred</td></tr>
</tbody>
</table>

<p>For your own records, store each part of every client and supplier address in separate fields in your spreadsheet or accounting software, even if your invoice shows the address on a few lines. When a client's accounts payable team or your own bank asks for structured data later, you can copy each part straight across instead of splitting addresses by hand under deadline pressure.</p>

<p>Note the country is a two-letter ISO code (GB, not UK). Your invoice can show the country name in full; what matters is that every component is present and clearly separated, so a client's AP team can enter it correctly.</p>

<h2>Structured remittance data and invoice references</h2>

<p>The second big change is remittance information: the data that says which invoice a payment settles. ISO 20022 supports:</p>

<ul>
<li><strong>Unstructured remittance</strong>: a free-text line, often limited to 140 characters.</li>
<li><strong>Structured remittance</strong>: fields for a creditor reference, the referred document number, and amounts, including several invoices in one payment.</li>
</ul>

<p>In practice, many small payments still arrive with a free-text reference. The rule for you is the same either way: give one unique, short invoice number and ask clients to quote it exactly. Avoid long references like "Payment for consulting October invoice 41 thanks", which get truncated.</p>

<p>When a client pays several invoices at once, a <a href="/blog/remittance-advice">remittance advice</a> listing each invoice number and amount closes the gap. Our <a href="/blog/cash-application">cash application guide</a> shows how to match those payments quickly.</p>

<h2>What small businesses need to change on invoices</h2>

<p>Here is a checklist of invoice and bank detail changes that line up with ISO 20022:</p>

<ol>
<li><strong>Use your exact legal name</strong>, matching your bank account. Name-checking services such as Confirmation of Payee in the UK and Verification of Payee in the euro area compare names too.</li>
<li><strong>Split your address clearly</strong>: building or unit, street number, street name, postcode, town, country on separate lines or clearly separated.</li>
<li><strong>Collect complete client addresses</strong> in the same way. Our guide to <a href="/blog/billing-address-vs-shipping-address">billing vs shipping addresses</a> explains which one to use.</li>
<li><strong>Show full bank details</strong>: IBAN and BIC for international payments, plus local details where relevant. See <a href="/blog/bank-details-on-invoice">how to show bank details on an invoice</a>.</li>
<li><strong>Use a short, unique invoice number</strong> as the payment reference. A tool like our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the format consistent.</li>
<li><strong>Add the client's PO number</strong> if they use one, so their system can link the payment. See <a href="/blog/invoice-reference-number">invoice reference numbers</a>.</li>
<li><strong>State the currency</strong> clearly, especially for cross-border invoices. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers this.</li>
</ol>

<h3>Worked example: fixing a supplier record</h3>

<p>A UK design studio invoices a German client 6,000 euro. The old invoice shows "Studio Nine, 3rd floor, 22 Kings Road Bristol". The client's AP team enters the address as one free-text line, and their bank, applying stricter cross-border rules, asks for town and country in separate fields. The payment is held for two days while the AP clerk emails back.</p>

<p>After the fix, the invoice shows: Studio Nine Ltd, 3rd Floor, 22 Kings Road, Bristol, BS1 5XX, United Kingdom, plus IBAN, BIC and reference INV-2026-118. The AP team can map every part to a field, and the payment goes through first time. The cost of the fix: five minutes, once.</p>

<h2>If you send international payments</h2>

<p>ISO 20022 also affects payments you make. Before your bank's deadline:</p>

<ul>
<li>Review supplier records in your banking app or accounting software and fill in town, postcode and country fields.</li>
<li>If you upload payment files to your bank, ask whether your format needs updating.</li>
<li>Ask suppliers who send unclear invoices for full structured addresses.</li>
<li>Keep invoice numbers in the reference field so suppliers can match your payment.</li>
</ul>

<p>For a comparison of how cross-border transfers move, see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h2>What changes in each region</h2>

<p>The standard is global, but the way it reaches you depends on where you and your clients bank.</p>

<h3>United Kingdom</h3>
<p>CHAPS, used for high-value and time-critical sterling payments such as property completions, moved to the new format in 2023, and the Bank of England has been phasing in richer data requirements since. Everyday Faster Payments and Bacs still run on their own formats, so most small UK invoices paid by bank transfer will not look any different. Where it shows up is cross-border: a client abroad paying you through SWIFT, or you paying a foreign supplier. Our guide to <a href="/blog/vat-invoice-guide">VAT invoices</a> covers the other details UK invoices need.</p>

<h3>United States</h3>
<p>The Fedwire Funds Service moved in July 2025. If US clients pay you by wire, their bank now sends a richer message, and complete name and address data reduces the chance of a payment being held for review. ACH, which carries most US business-to-business payments, has its own Nacha format and its own 2026 rule changes; see <a href="/blog/nacha-2026-rules">the Nacha 2026 rules</a>.</p>

<h3>Euro area</h3>
<p>SEPA payments have used XML messages based on the standard for years, which is why euro transfers already carry IBANs and a structured creditor reference option. The European Payments Council has been aligning SEPA address rules with the cross-border changes, so ask your bank whether its address requirements for SEPA payments are changing at the same time.</p>

<h2>Questions to ask your bank</h2>

<p>A five-minute conversation with your bank, or a look at its business help pages, answers most questions. Ask:</p>

<ul>
<li>Which address format do you require for international payments I send, and from what date?</li>
<li>Will you reject or repair payments with incomplete addresses?</li>
<li>Do the same rules apply to SEPA, domestic and cross-border payments?</li>
<li>Do my payment file uploads need a new format?</li>
<li>Can I see structured remittance details, such as invoice numbers, on incoming payments in my statement or export?</li>
</ul>

<p>Write down the answers with the date. Banks have been updating their guidance as SWIFT's timeline has moved, so check again before the end of the year.</p>

<h3>Worked example: a multi-invoice payment</h3>

<p>A client pays three of your invoices in one transfer: INV-2026-101 for 1,200 euro, INV-2026-104 for 850 euro and INV-2026-107 for 2,450 euro, a total of 4,500 euro. With only a free-text reference, you might see "INV 101 104 107" or just the client's name, and you would have to work out the split. With structured remittance data, or a separate remittance advice, each invoice number and amount arrives clearly. Either way, you can record each invoice as paid in full in minutes instead of chasing the client for a breakdown.</p>

<h2>Common mistakes to avoid</h2>

<ul>
<li>Writing "UK" in a country field that expects a code (the ISO code is GB).</li>
<li>Putting the postcode and town in the same field or line as the street.</li>
<li>Using a trading name that does not match the bank account name.</li>
<li>Changing bank details without warning, which looks like fraud to automated checks.</li>
<li>Long payment references that get cut off.</li>
</ul>

<h2>Conclusion</h2>

<p>ISO 20022 is now the standard for payment messages, and the structured address change is coming even though SWIFT has extended its timing. You do not need new systems. You need complete, structured addresses, exact legal names and short, unique invoice references. Our <a href="/invoice-generator">free invoice generator</a> lets you enter your full business address, client address, bank details and invoice number, and download a clean PDF ready to send. For anything specific to your payment flows, check with your bank or a qualified adviser.</p>
`,
  },
  {
    slug: "nacha-2026-rules",
    title: "Nacha 2026 Rules: ACH Fraud Monitoring for Businesses",
    description:
      "Nacha 2026 rules explained: phase 1 and phase 2 ACH fraud monitoring dates, who is covered, the PAYROLL and PURCHASE descriptions, and what businesses must do.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "ach-return-codes",
      "how-to-accept-ach-payments",
      "ach-vs-wire-transfer",
      "invoice-scams",
      "bank-details-on-invoice",
    ],
    faqs: [
      {
        q: "What are the Nacha 2026 rules?",
        a: "The Nacha 2026 rules are changes to the Nacha Operating Rules, which govern the ACH Network in the United States. The main change requires financial institutions and many businesses that send ACH payments to have risk-based processes to identify payments that are unauthorized or made under false pretenses, such as business email compromise. The rules also standardize the Company Entry Descriptions PAYROLL and PURCHASE.",
      },
      {
        q: "When do the Nacha fraud monitoring rules take effect?",
        a: "Phase 1 took effect on March 20, 2026. It covered all ODFIs, plus non-consumer Originators, Third-Party Service Providers and Third-Party Senders with 2023 ACH origination volume of 6 million or more, and RDFIs with 2023 receipt volume of 10 million or more. Phase 2 has an effective date of June 19, 2026 on Nacha's rules page, which some banks treated as Monday, June 22, 2026, and covers all remaining parties.",
      },
      {
        q: "Do the Nacha 2026 rules apply to small businesses?",
        a: "Yes, if your business originates ACH entries, such as paying staff by direct deposit or paying suppliers through your bank's ACH service. Since Phase 2, there is no volume threshold for non-consumer Originators. The rule is risk-based, so a small business does not need complex software, but it should have documented procedures that fit its size and review them at least once a year.",
      },
      {
        q: "What is a false pretenses ACH payment?",
        a: "Nacha defines false pretenses as inducing a payment by misrepresenting identity, authority or account ownership. Typical examples are business email compromise, vendor impersonation where a fraudster sends fake new bank details, and payroll impersonation where someone asks HR to redirect an employee's pay. It does not cover disputes about the quality of goods or services a legitimate seller delivered.",
      },
      {
        q: "What do I need to do if I only receive ACH payments?",
        a: "Businesses that only receive ACH payments are not Originators, so the originator monitoring duty does not apply directly. However, your bank, as the RDFI, must monitor incoming credits, and it may delay or return suspicious ones. Keep your account details stable, warn clients never to accept bank detail changes by email alone, and show your correct bank details on every invoice.",
      },
      {
        q: "What are the PAYROLL and PURCHASE Company Entry Descriptions?",
        a: "From March 20, 2026, Nacha requires the Company Entry Description PAYROLL for PPD credits that pay wages, salaries and similar compensation, and PURCHASE for WEB debits for e-commerce purchases. The goal is to make these payments easier to recognize and monitor. If you run payroll or collect online payments through ACH, confirm with your bank or payroll provider that these descriptions are being used.",
      },
      {
        q: "What happens if a business does not comply with Nacha rules?",
        a: "Nacha rules bind businesses through their agreements with their bank. A bank that finds an Originator lacks adequate controls can require changes, impose limits, or end ACH origination services, and Nacha has an enforcement process for rule violations. The practical risk for a small business is losing ACH services or facing fraud losses. Ask your bank what evidence of monitoring it expects.",
      },
      {
        q: "Do I need software to meet the Nacha fraud monitoring rule?",
        a: "Not necessarily. Nacha says monitoring should be risk-based and does not require screening every entry individually or monitoring before processing. A small business might rely on documented manual controls, such as dual approval, call-back verification of bank detail changes and reviewing payment files before release, plus the fraud tools its bank offers. Larger originators often use automated monitoring.",
      },
    ],
    content: `
<p>The <strong>Nacha 2026 rules</strong> require banks and businesses that send ACH payments to have risk-based processes to spot payments that are unauthorized or made under false pretenses, such as business email compromise. Phase 1 took effect on March 20, 2026 for large originators and all ODFIs. Phase 2, effective June 19, 2026, covers everyone else, including small businesses that originate ACH.</p>

<p>If you run payroll by direct deposit, pay suppliers through your bank's ACH service, or collect payments by ACH debit, these rules apply to you. This guide explains the dates, who is affected, what "risk-based monitoring" means in practice, and the simple steps that keep your business compliant and harder to defraud. It is general information, not legal advice; check details with your bank or a qualified adviser.</p>

<h2>What changed in the Nacha 2026 rules</h2>

<p>Nacha manages the ACH Network and writes the Nacha Operating Rules that banks and their customers must follow. The 2026 changes focus on fraud, especially "credit-push" fraud, where a business is tricked into sending money to the wrong account.</p>

<p>The main changes:</p>

<ul>
<li><strong>Fraud monitoring by originators.</strong> ODFIs (the sending banks), non-consumer Originators, Third-Party Service Providers and Third-Party Senders must have risk-based processes reasonably intended to identify entries suspected of being unauthorized or authorized under false pretenses.</li>
<li><strong>Fraud monitoring by receiving banks.</strong> RDFIs must have risk-based processes to identify suspicious incoming credit entries.</li>
<li><strong>Annual review.</strong> These processes must be reviewed at least once a year and updated as risks change.</li>
<li><strong>Standard Company Entry Descriptions.</strong> PAYROLL for PPD credits paying wages and PURCHASE for WEB debits for e-commerce purchases.</li>
</ul>

<p>These build on earlier rule changes that let receiving banks return suspicious credits and expanded the definition of false pretenses.</p>

<h2>ACH fraud monitoring rules: phase 1 and phase 2 dates</h2>

<table>
<thead>
<tr><th>Phase</th><th>Effective date</th><th>Who is covered</th></tr>
</thead>
<tbody>
<tr><td>Phase 1</td><td>March 20, 2026</td><td>All ODFIs; non-consumer Originators, TPSPs and TPSs with 2023 ACH origination volume of 6 million or more; RDFIs with 2023 ACH receipt volume of 10 million or more</td></tr>
<tr><td>Phase 2</td><td>June 19, 2026</td><td>All remaining non-consumer Originators, TPSPs, TPSs and RDFIs, with no volume threshold</td></tr>
<tr><td>Company Entry Descriptions</td><td>March 20, 2026</td><td>Originators of payroll PPD credits (PAYROLL) and e-commerce WEB debits (PURCHASE)</td></tr>
</tbody>
</table>

<p>Nacha's rules page lists June 19, 2026 for Phase 2. Because June 19 is the Juneteenth federal holiday, some banks and advisers described the practical date as Monday, June 22, 2026. Either way, Phase 2 is now in force.</p>

<p>Six million entries a year is roughly 500,000 a month, so Phase 1 caught only the largest payroll processors and corporates. Phase 2 is the one that reaches typical small and mid-sized businesses.</p>

<h2>Who is affected by the Nacha rule changes in March 2026 and after</h2>

<h3>Businesses that originate ACH</h3>
<p>You are a non-consumer Originator if your business initiates ACH entries through a bank, for example:</p>
<ul>
<li>Running payroll by direct deposit through your bank (rather than a payroll company acting as the originator).</li>
<li>Paying vendors by ACH credit from your business banking portal.</li>
<li>Collecting customer payments by ACH debit under your own origination agreement.</li>
</ul>
<p>Since Phase 2, there is no minimum volume. If you originate, you need risk-based procedures.</p>

<h3>Payroll companies and payment providers</h3>
<p>Third-Party Service Providers and Third-Party Senders, such as payroll services and payment platforms, are covered too. If you pay staff through a payroll provider, much of the work sits with them, but your bank or provider may still ask you to confirm your own controls.</p>

<h3>Businesses that only receive ACH payments</h3>
<p>If clients pay your invoices by ACH and you never originate, the originator duty does not apply to you directly. But your bank, as RDFI, now monitors incoming credits and may hold or return ones that look suspicious, for example large unusual credits into a new account. Stable, correct bank details help.</p>

<h2>What "risk-based" fraud monitoring means</h2>

<p>Nacha has said that risk-based monitoring does not mean screening every single entry, and it does not require monitoring before processing. It does mean doing a risk assessment and having procedures that fit your role and size. At a minimum, you should be able to tell higher-risk payments from lower-risk ones.</p>

<p>Examples of higher-risk ACH activity for a small business:</p>

<ul>
<li>A vendor asks to change bank details by email.</li>
<li>An employee asks HR to redirect their pay to a new account.</li>
<li>An unusually large or urgent payment request, especially from a senior person "who is travelling".</li>
<li>A first payment to a brand-new payee.</li>
<li>Payment files changed after they were prepared.</li>
</ul>

<p>Nacha defines false pretenses as inducing a payment by misrepresenting identity, authority or account ownership. That covers business email compromise, vendor impersonation and payroll impersonation. It does not cover a legitimate seller who delivers poor-quality goods.</p>

<h2>What businesses should do now</h2>

<p>Here is a practical, small-business version of a compliance program:</p>

<ol>
<li><strong>Write down your ACH payment process</strong>: who prepares payments, who approves them, and which systems are used.</li>
<li><strong>Use dual approval</strong> for ACH batches above a set amount, for example $2,500, and for any new payee.</li>
<li><strong>Verify every bank detail change</strong> by calling the vendor or employee on a phone number you already have on file, never one from the change request.</li>
<li><strong>Hold new payee changes</strong> for a short cooling-off period, such as two business days, before the first payment.</li>
<li><strong>Review payment files</strong> before release and compare totals with approved invoices.</li>
<li><strong>Turn on your bank's fraud tools</strong>, such as ACH positive pay, debit blocks and filters, and payee alerts.</li>
<li><strong>Train staff</strong> on email fraud signs. Our guide to <a href="/blog/invoice-scams">invoice scams</a> is a good starting point.</li>
<li><strong>Use PAYROLL and PURCHASE descriptions</strong> correctly, or confirm your provider does.</li>
<li><strong>Review the process once a year</strong> and keep a dated record of the review.</li>
</ol>

<h3>Worked example: stopping a fake vendor change</h3>

<p>A landscaping company pays its mulch supplier about $3,200 a month by ACH. One morning, the bookkeeper gets an email that looks like it is from the supplier, with an invoice for $3,180 and "new bank details, effective immediately". Under the company's written procedure, any bank change triggers a call to the supplier's number stored in the vendor file. The supplier confirms it sent nothing. The company forwards the email to its bank, and the $3,180 stays where it should.</p>

<p>Without a procedure, the bookkeeper might have updated the details and released the payment. Recovering that money after it reaches a mule account is often impossible. The control cost a five-minute phone call.</p>

<h2>The PAYROLL and PURCHASE descriptions in practice</h2>

<p>Every ACH batch carries a short Company Entry Description, which often appears on the receiver's bank statement. Before 2026, businesses used all sorts of labels for the same type of payment, such as "SALARY", "WAGES", "DIR DEP" or the company name. That made it harder for receiving banks to spot unusual activity, such as a payroll-style credit landing in an account that has never received pay before.</p>

<p>Under the Nacha 2026 rules, from March 20, 2026:</p>

<ul>
<li><strong>PAYROLL</strong> must be used for PPD credits that pay wages, salaries and similar compensation.</li>
<li><strong>PURCHASE</strong> must be used for WEB debits for e-commerce purchases, including recurring purchases first authorized online.</li>
</ul>

<p>Nacha has said the receiving side has no obligation to verify that the descriptions are present or accurate, but using them correctly is still your duty as an Originator. If you run payroll through your bank's ACH module, check the batch template. If you use a payroll provider, ask it to confirm in writing that it uses PAYROLL. Employees may notice the change on their statements, so a one-line note in your next payslip email avoids confused questions.</p>

<h2>What your bank may ask you for</h2>

<p>Your bank, as ODFI, is responsible for making sure the businesses it lets originate ACH entries meet the rules. Since Phase 2, many banks have updated their ACH origination agreements or sent questionnaires. Typical requests include:</p>

<ul>
<li>Confirmation that you have written procedures for detecting false pretenses and unauthorized entries.</li>
<li>The name of the person responsible for ACH controls.</li>
<li>Evidence of dual control or approval limits in your banking platform.</li>
<li>Confirmation that you verify vendor and employee bank detail changes independently.</li>
<li>The date of your last annual review.</li>
</ul>

<p>Keep a short document, one or two pages, that answers these points, and update the review date each year. If your bank offers templates, use them; they show what it expects to see.</p>

<h3>Worked example: setting approval limits</h3>

<p>A 12-person agency pays about 40 vendors and runs payroll twice a month. It sets three rules in its banking platform: any ACH batch over $5,000 needs a second approver, any first payment to a new payee needs a second approver regardless of amount, and payroll batches are reviewed against the payroll register before release. With an average of 25 vendor payments a month, the second approval adds perhaps 20 minutes of work a month. Against a single business email compromise loss of several thousand dollars, the trade-off is easy.</p>

<h2>How the rules affect invoicing</h2>

<p>The Nacha 2026 rules govern payments, not invoices, but invoices are where most ACH fraud starts. Fraudsters copy real invoices and change the bank details. To protect your clients and your cash:</p>

<ul>
<li>Show the same bank details on every invoice and keep them in a consistent place. See <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</li>
<li>Add a line to your notes: "We will never change our bank details by email. Please call us to confirm any change."</li>
<li>Use a consistent invoice numbering format, so a fake invoice stands out. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li>If you genuinely change banks, tell clients in advance through a trusted channel and expect them to verify.</li>
<li>Avoid sending invoices as editable documents. A PDF is harder to alter quietly.</li>
</ul>

<p>Our <a href="/invoice-generator/usa">US invoice generator</a> creates PDF invoices with a US locale, your bank details in the notes, and optional sales tax. It does not send ACH payments or monitor fraud; it simply helps you issue clean, consistent invoices.</p>

<h2>ACH vs other payment methods after the changes</h2>

<p>The Nacha 2026 rules add some friction to ACH, but ACH remains the cheapest common way for US businesses to pay each other. Compare it with alternatives in our guides to <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> and <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP instant payments</a>. Instant payments settle immediately, which makes fraud controls before sending even more important.</p>

<p>If you collect payments online, <a href="/blog/pay-by-bank">pay by bank</a> products often run on ACH debits, and the PURCHASE description applies to WEB debits for e-commerce. For international clients, bank data standards are changing too; see <a href="/blog/iso-20022-payments">ISO 20022 for small businesses</a>.</p>

<h2>Conclusion</h2>

<p>The Nacha 2026 rules turned good fraud hygiene into a requirement. Phase 1 started March 20, 2026, Phase 2 brought in every business that originates ACH from June 2026, and the PAYROLL and PURCHASE descriptions are now standard. For most small businesses, compliance means a written process, dual approval, call-back checks on bank changes and an annual review. Pair that with clean, consistent invoices from our <a href="/invoice-generator">free invoice generator</a>, and ask your bank or a qualified adviser what evidence it expects from you.</p>
`,
  },
];
