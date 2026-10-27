import type { PostDraft } from "../blog";

export const PAYMENTS_FREELANCE_2026_B_POSTS: PostDraft[] = [
  {
    slug: "uk-direct-debit",
    title: "Direct Debit UK: How Businesses Collect Payments via Bacs",
    description:
      "Learn how Direct Debit in the UK works for businesses: Bacs, DDIs, the Direct Debit Guarantee, advance notice, the 3-day cycle and how to invoice alongside it.",
    category: "payments",
    jurisdiction: "UK",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["sepa-direct-debit", "recurring-invoices-guide", "ach-vs-wire-transfer"],
    faqs: [
      {
        q: "How long does a Direct Debit take to clear in the UK?",
        a: "A Bacs Direct Debit runs on a three working day cycle: the collection is submitted on day one, processed on day two and debited from the payer and credited to the business on day three. Weekends and bank holidays do not count. Failed collections are usually reported back a day or two after the debit date, so many businesses wait until then before treating the money as safely received.",
      },
      {
        q: "How much notice must a business give before a Direct Debit?",
        a: "The Direct Debit Guarantee says the organisation will notify the payer before collecting, normally 10 working days in advance, unless a different period has been agreed. Many providers agree shorter notice with their customers and send the notice by email. The notice must cover the amount and date, and you need fresh notice when the amount, date or frequency changes.",
      },
      {
        q: "Can a customer cancel a Direct Debit at any time?",
        a: "Yes. A payer can cancel a Direct Debit by contacting their bank or building society at any time, and many banks let them do it in an app. Cancelling the Direct Debit does not cancel the underlying contract or debt, so you may still be owed money. You would then need to invoice for any outstanding balance and agree another way to pay.",
      },
      {
        q: "What is an indemnity claim?",
        a: "An indemnity claim is when a payer asks their bank for a refund under the Direct Debit Guarantee, for example because they say a collection was taken in error or without proper notice. The bank refunds the payer immediately and recovers the money from the collecting business through Bacs. The business can challenge the claim in limited circumstances, so keep mandates, notices and correspondence.",
      },
      {
        q: "Do I need a Service User Number to collect Direct Debits?",
        a: "Only if you collect directly through Bacs. A business that submits its own files needs a sponsoring bank, a Service User Number and Bacs-approved software, and banks normally assess the business before agreeing. Most small businesses instead use a Direct Debit provider or bureau that collects under its own arrangements, which is faster to set up but carries per-transaction fees.",
      },
      {
        q: "Is Direct Debit the same as a standing order?",
        a: "No. A standing order is set up and controlled by the payer, who tells their bank to send a fixed amount on a schedule. A Direct Debit is authorised by the payer but initiated by the business, so the amount can vary with proper notice. Direct Debits are protected by the Direct Debit Guarantee, while standing orders are not.",
      },
      {
        q: "Can I use Direct Debit for one-off invoices?",
        a: "Yes, Bacs Direct Debit can collect one-off and variable amounts as well as regular subscriptions, as long as the payer has signed a Direct Debit Instruction and receives proper advance notice. For a single invoice, though, the setup time and notice period mean a bank transfer, Faster Payment or card payment is often simpler.",
      },
      {
        q: "Does UK Direct Debit work for customers in Europe?",
        a: "No. Bacs Direct Debit collects sterling from UK bank and building society accounts. To collect euros from customers in the eurozone, businesses use SEPA Direct Debit, which has different mandate rules, timelines and refund rights. Some payment providers offer both schemes through one account, but the rules for each scheme still apply separately.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Direct Debit in the UK lets a business pull payments from a customer's bank account after the customer signs a Direct Debit Instruction. Collections run through Bacs on a three working day cycle, payers get advance notice (normally 10 working days) and the Direct Debit Guarantee protects them with immediate refunds for errors.</p>

<p>If you run a subscription, membership, maintenance contract or any business that bills the same customers every month, chasing individual bank transfers gets old quickly. Direct Debit in the UK flips the process: instead of waiting for the customer to remember to pay, you collect on the agreed date. This guide explains how the scheme works, who is involved, what the Direct Debit Guarantee means for you as the collector, how long collections take and how invoices fit alongside it. If you collect in euros, read our separate guide to <a href="/blog/sepa-direct-debit">SEPA Direct Debit for eurozone customers</a>, because the rules there are different.</p>

<h2>What is Direct Debit in the UK?</h2>

<p>A Direct Debit is a payment instruction that the payer gives to their own bank or building society, authorising a named organisation to collect money from their account. The organisation (called the <em>service user</em> or <em>originator</em>) decides when to collect and how much, within the terms the payer agreed and after giving notice.</p>

<p>The scheme is run through Bacs, the UK's bulk payment system that also carries Bacs Direct Credits such as many salary payments. Direct Debit is a sterling-only scheme for UK bank and building society accounts. It is widely used by utilities, councils, gyms, insurers, software companies and service businesses that bill on a regular schedule.</p>

<p>Three features make it different from other ways to get paid:</p>
<ul>
<li><strong>The business initiates the payment.</strong> The customer does not have to log in and send money each time.</li>
<li><strong>Amounts can vary.</strong> Unlike a standing order, the business can collect different amounts each month, as long as it gives notice.</li>
<li><strong>The payer is protected.</strong> The Direct Debit Guarantee gives customers strong refund rights, which is why people are willing to sign up.</li>
</ul>

<h2>Who is involved in a Bacs Direct Debit</h2>

<table>
<thead>
<tr><th>Party</th><th>Role</th></tr>
</thead>
<tbody>
<tr><td>Payer</td><td>The customer who signs the Direct Debit Instruction (DDI) and whose account is debited.</td></tr>
<tr><td>Service user (originator)</td><td>The business collecting the money. It must hold or use a Service User Number (SUN).</td></tr>
<tr><td>Sponsoring bank</td><td>The bank that sponsors a business to collect directly through Bacs and assesses whether it is suitable.</td></tr>
<tr><td>Bureau or Direct Debit provider</td><td>A third party that submits collections on a business's behalf, often under its own SUN, so small firms do not need direct Bacs access.</td></tr>
<tr><td>Payer's bank</td><td>Debits the payer, handles cancellations and pays out indemnity claims under the Guarantee.</td></tr>
</tbody>
</table>

<p>Most small businesses never deal with Bacs directly. They sign up with a Direct Debit provider, which handles mandates, notices and submission files and passes the funds on, minus its fees. Larger organisations with high volumes sometimes apply to a bank for their own Service User Number and submit files through Bacs-approved software.</p>

<h2>The Direct Debit Instruction (DDI)</h2>

<p>Before you can collect anything, the customer must complete a Direct Debit Instruction, sometimes called a mandate. It records the payer's name, sort code and account number, your service user details and the payer's authorisation. DDIs can be on paper, over the phone or online (a "paperless" DDI), but the wording and layout follow scheme rules, and online forms must include the Direct Debit Guarantee and a confirmation step.</p>

<p>Electronic mandates are usually lodged with the payer's bank through AUDDIS, the Bacs service for sending new instructions electronically. Under AUDDIS, the signed or recorded instruction stays with the collecting business, which must be able to produce it if the payer's bank asks. If you cannot show a valid instruction, you may be asked to refund collections under the indemnity arrangements.</p>

<p>After setup, you send the payer a confirmation of the instruction, including the collection schedule. Bacs also sends automated reports back to the collector, for example when a payer cancels an instruction at their bank or a collection fails.</p>

<h2>The Direct Debit Guarantee explained</h2>

<p>Every Direct Debit is covered by the Direct Debit Guarantee, which must be shown to payers when they sign up. According to the scheme's <a href="https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/" target="_blank" rel="noopener noreferrer">official Direct Debit Guarantee page</a>, it promises the payer that:</p>
<ul>
<li>The organisation will notify them before any change to the amount, date or frequency, <strong>normally 10 working days in advance</strong> of the debit, or as otherwise agreed.</li>
<li>If an error is made in the payment, they are entitled to a <strong>full and immediate refund</strong> from their bank or building society.</li>
<li>They can cancel the Direct Debit at any time by contacting their bank.</li>
<li>If they receive a refund they were not entitled to, they must pay it back when asked.</li>
</ul>

<p>For the collecting business, the practical consequence is the <strong>indemnity claim</strong>. If a payer tells their bank a collection was wrong, the bank refunds them straight away and reclaims the money from you through Bacs. You can challenge a claim in limited circumstances, but the process favours the payer. Good records (signed DDIs, advance notices, invoices and correspondence) are your main defence. This is a different mechanism from card disputes, which our guide to <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a> covers.</p>

<h2>Advance notice: what to send and when</h2>

<p>Advance notice tells the payer how much you will collect and when. The default is 10 working days before the first collection and before any change, but you can agree a shorter period with the payer (many providers use a few working days) as long as it is stated clearly at signup. For a fixed schedule, one notice listing all future dates and amounts can be enough until something changes.</p>

<p>Notice can be sent by email, letter, or printed on an invoice or statement. This is where invoicing and Direct Debit meet. A common pattern is to issue a monthly invoice that shows the amount due and includes a line such as <em>"This amount will be collected by Direct Debit on or around 15 November 2026 from the account ending 1234."</em> The invoice then doubles as the advance notice, provided it reaches the customer in time.</p>

<h2>UK Direct Debit timeline: the 3-day cycle</h2>

<p>Bacs works in batches over three working days. Here is how a typical collection runs, assuming no bank holidays:</p>

<table>
<thead>
<tr><th>Working day</th><th>What happens</th></tr>
</thead>
<tbody>
<tr><td>Before day 1</td><td>Mandate lodged and advance notice sent to the payer.</td></tr>
<tr><td>Day 1 (input day)</td><td>You or your provider submit the collection file to Bacs.</td></tr>
<tr><td>Day 2 (processing day)</td><td>Bacs processes the file and passes entries to the banks.</td></tr>
<tr><td>Day 3 (entry day)</td><td>The payer is debited and the collector is credited.</td></tr>
<tr><td>After day 3</td><td>Unpaid collections (for example, insufficient funds) are reported back, typically within a day or two.</td></tr>
</tbody>
</table>

<p>If you use a provider, add its own payout time on top, since many pay out funds a few working days after collection. Plan your cash flow around the date the money actually reaches your account, not the date the customer is debited. Compared with <a href="/blog/ach-vs-wire-transfer">US ACH and wire transfers</a>, Bacs is similar to ACH: low cost and batch-based, but not instant.</p>

<h2>Worked example: costs of collecting by Direct Debit</h2>

<p>Here is an illustrative comparison for a small business with 200 customers paying £30 a month. The fees below are made-up round numbers for the arithmetic, not any provider's actual pricing.</p>

<ul>
<li>Monthly billing: 200 × £30 = <strong>£6,000</strong></li>
<li>Illustrative Direct Debit provider fee of 1% + £0.20 per collection: (£30 × 1%) + £0.20 = £0.30 + £0.20 = £0.50 per collection</li>
<li>Direct Debit cost: 200 × £0.50 = <strong>£100 a month</strong></li>
<li>Illustrative card fee of 1.5% + £0.20: (£30 × 1.5%) + £0.20 = £0.45 + £0.20 = £0.65 per payment</li>
<li>Card cost: 200 × £0.65 = <strong>£130 a month</strong></li>
<li>Difference: £130 − £100 = <strong>£30 a month</strong>, or £360 a year</li>
</ul>

<p>The fee gap matters less than the reduction in late payments. If six of those customers usually pay a week late by bank transfer, that is 6 × £30 = £180 a month you chase manually. Use real quotes from providers before deciding, and factor in failed-payment fees, which some providers charge separately.</p>

<h2>Direct Debit vs other UK payment methods</h2>

<table>
<thead>
<tr><th>Method</th><th>Who starts it</th><th>Speed</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Bacs Direct Debit</td><td>Business</td><td>3 working days</td><td>Recurring or variable bills</td></tr>
<tr><td>Standing order</td><td>Payer</td><td>Usually same day</td><td>Fixed rent or retainers</td></tr>
<tr><td>Faster Payments (bank transfer)</td><td>Payer</td><td>Usually minutes</td><td>One-off invoices</td></tr>
<tr><td>Card (one-off or stored)</td><td>Payer or business</td><td>Authorised instantly, settles later</td><td>Online checkout, small amounts</td></tr>
</tbody>
</table>

<p>For one-off invoices, a bank transfer with clear <a href="/blog/bank-details-on-invoice">bank details printed on the invoice</a> is often simpler than setting up a mandate. Direct Debit shines when you bill the same customer repeatedly.</p>

<h2>How invoices work alongside Direct Debit</h2>

<p>Direct Debit collects the money; it does not replace the invoice. VAT-registered businesses still need to issue valid VAT invoices, and business customers usually want a document for their records. Many businesses send a regular invoice each billing period, as explained in our <a href="/blog/recurring-invoices-guide">guide to recurring invoices</a>, with the Direct Debit collection date shown in the notes.</p>

<p>You can create those invoices with the <a href="/invoice-generator/uk">UK invoice generator</a>, which builds a PDF in your browser with your VAT number, line items and a notes field for the collection date. It does not set up mandates or collect Direct Debits, so you will still need a bank or Direct Debit provider for the collection itself. When a collection succeeds, mark the invoice as paid in your own records and reconcile it against your bank statement.</p>

<h2>Setup checklist for UK Direct Debit</h2>

<ul>
<li>Decide whether to use a Direct Debit provider or apply to a bank for your own Service User Number.</li>
<li>Check the provider's fees for setup, collections, failures and payouts.</li>
<li>Use scheme-compliant DDI wording and show the Direct Debit Guarantee at signup.</li>
<li>Agree and state your advance notice period clearly.</li>
<li>Send a confirmation of the instruction with the collection schedule.</li>
<li>Add the collection date and amount to each invoice or notice.</li>
<li>Store mandates and notices so you can respond to indemnity claims.</li>
<li>Set a process for failed collections: retry rules, customer contact and fallback payment options.</li>
<li>Reconcile collections and payouts against invoices every month.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Collecting without proper notice.</strong> Taking a changed amount without notice is a common trigger for indemnity claims.</li>
<li><strong>Assuming a cancelled Direct Debit ends the debt.</strong> The contract and any balance still stand; invoice for what is owed.</li>
<li><strong>Treating the debit date as cash in the bank.</strong> Allow for failures and provider payout delays.</li>
<li><strong>Using Direct Debit for euro customers.</strong> Bacs is sterling-only; eurozone customers need SEPA.</li>
<li><strong>Losing mandate records.</strong> Without the instruction, you may have to refund collections.</li>
<li><strong>Skipping the invoice.</strong> Customers, auditors and HMRC still expect proper invoices for taxable supplies.</li>
</ul>

<p>For more on payment methods, browse the <a href="/blog/category/payments">payments section of the blog</a>. Scheme rules and provider terms change, so check current details with your bank, your provider or <a href="https://www.bacs.co.uk/" target="_blank" rel="noopener noreferrer">Bacs</a> before you launch.</p>
`,
  },
  {
    slug: "b2b-buy-now-pay-later",
    title: "B2B Buy Now Pay Later: How It Works for Invoices",
    description:
      "B2B buy now pay later explained: how BNPL providers pay suppliers upfront, what it costs, and how it compares with trade credit, factoring and net terms.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-factoring", "dynamic-discounting", "embedded-finance-invoicing"],
    faqs: [
      {
        q: "What is B2B buy now pay later?",
        a: "B2B buy now pay later is a financing arrangement where a third-party provider pays a supplier for a business purchase, usually within a few days, and the buying business repays the provider later on agreed terms such as 30, 60 or 90 days. The provider handles the credit check and collection. It is essentially outsourced trade credit offered at checkout or on an invoice.",
      },
      {
        q: "Who pays the fee in B2B BNPL?",
        a: "In most B2B BNPL arrangements the seller pays a fee, often called a merchant discount rate, which is deducted from the amount the provider pays out. Buyers usually pay nothing extra if they repay within the standard term, but they may pay interest or fees for longer terms or late repayment. Check each provider's pricing, because the split varies.",
      },
      {
        q: "How is B2B BNPL different from invoice factoring?",
        a: "With factoring, a supplier sells or borrows against invoices it has already issued, often after the buyer has received goods, and the factor may contact the buyer. With B2B BNPL, the financing is offered at the point of sale, the provider approves the buyer before the order and the buyer agrees to repay the provider. Both get the supplier paid early.",
      },
      {
        q: "Is B2B buy now pay later the same as consumer BNPL?",
        a: "Not quite. Consumer BNPL usually splits a retail purchase into a few instalments. B2B BNPL tends to offer net terms on larger business orders, with higher credit limits and invoices that meet business and tax requirements. Regulation also differs, since lending to businesses is often treated differently from consumer credit, depending on the country and the type of business.",
      },
      {
        q: "Does the supplier carry the risk if the buyer does not pay?",
        a: "In many non-recourse BNPL programs, the provider takes the credit risk once it approves the buyer, so the supplier keeps the payout even if the buyer defaults. Some programs are recourse or partly recourse, meaning the provider can claw back funds in certain cases, such as disputes about goods. Read the contract for disputes, returns and fraud before signing up.",
      },
      {
        q: "Who should issue the invoice in a BNPL transaction?",
        a: "Usually the supplier still issues the sales invoice to the buyer, because the supplier made the sale and is responsible for tax. The invoice or a separate notice then tells the buyer to pay the BNPL provider, often with the provider's bank details or payment link. Some providers generate invoices on the supplier's behalf, so confirm who issues what to avoid duplicates.",
      },
      {
        q: "Can small businesses offer B2B BNPL?",
        a: "Often yes. Several providers target small and mid-sized suppliers through ecommerce plugins, invoicing integrations and B2B marketplaces. Eligibility depends on your industry, location, order sizes and the creditworthiness of your buyers. Approval is not guaranteed for every buyer, so you still need a fallback such as card payment, prepayment or your own credit terms.",
      },
      {
        q: "Is B2B BNPL cheaper than giving my own net terms?",
        a: "It depends on your cost of capital and your bad-debt rate. Offering your own net 60 terms is free in fees but ties up cash and exposes you to late payment and defaults. BNPL costs a percentage of each order but returns cash quickly and shifts most of the risk. Run the numbers with your own margins before choosing.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> B2B buy now pay later lets a business buyer take 30 to 90 days to pay while the supplier gets paid within days. A third-party provider approves the buyer, pays the supplier upfront minus a fee and collects from the buyer later. It is a modern, outsourced version of trade credit.</p>

<p>Business buyers have always expected credit terms. A wholesaler, manufacturer or agency that insists on payment upfront often loses orders to competitors that offer net 30 or net 60. But extending credit yourself means waiting for cash, checking customers and chasing late payers. B2B BNPL providers sit in the middle: they offer terms to the buyer and pay the supplier quickly. This guide explains how the model works, what it costs, how invoices fit in and how it compares with factoring, dynamic discounting and simply offering your own terms.</p>

<h2>How B2B buy now pay later works</h2>

<p>The flow is similar across most providers, whether it appears as a checkout option in an online store or as a link on an invoice:</p>
<ol>
<li><strong>Buyer chooses terms.</strong> At checkout or on the invoice, the business buyer selects the provider's payment option, for example "pay in 60 days".</li>
<li><strong>Instant credit decision.</strong> The provider checks the buyer's business details and credit, then approves or declines, usually within seconds or minutes.</li>
<li><strong>Supplier ships and invoices.</strong> The order goes ahead and the supplier issues its sales invoice, with instructions to pay the provider.</li>
<li><strong>Supplier gets paid early.</strong> The provider pays the supplier the order value minus its fee, commonly within a few business days.</li>
<li><strong>Buyer repays the provider.</strong> At the end of the agreed term, the buyer pays the provider, not the supplier.</li>
</ol>

<p>Some B2B buy now pay later providers also offer instalments, letting the buyer split a large order into monthly payments, and some provide a revolving credit limit the buyer can reuse across suppliers in the same network. The key change is who carries the receivable. In ordinary trade credit, the supplier waits and takes the risk. With BNPL, the provider takes over the waiting and, in non-recourse programs, most of the credit risk.</p>

<h2>Who pays what</h2>

<p>In most B2B BNPL programs, the <strong>supplier pays a fee</strong>, often called a merchant discount rate, deducted from the payout. Providers publish or quote rates that typically depend on the term length, order size, industry, transaction volume and how fast the supplier wants payout. Longer terms cost more. Buyers usually pay nothing extra for the standard term, but late fees or interest can apply if they pay late or choose extended instalments.</p>

<p>Because pricing varies so much, treat any figure you see online as a starting point and ask several providers for quotes based on your actual order profile.</p>

<h2>Worked example: BNPL vs your own net 60 terms</h2>

<p>Suppose a wholesaler sells a £10,000 order to a retailer that wants 60 days to pay. The rates below are illustrative only.</p>

<p><strong>Option A: BNPL at an illustrative 2.5% merchant fee</strong></p>
<ul>
<li>Fee: £10,000 × 2.5% = <strong>£250</strong></li>
<li>Payout within a few days: £10,000 − £250 = <strong>£9,750</strong></li>
<li>Credit risk: carried by the provider (if non-recourse)</li>
</ul>

<p><strong>Option B: Offer net 60 yourself, funded by an overdraft at an illustrative 12% a year</strong></p>
<ul>
<li>Cost of waiting 60 days: £10,000 × 12% × 60 ÷ 365 = £10,000 × 0.12 × 0.1644 = <strong>about £197</strong></li>
<li>Plus your time on credit checks and chasing, and the risk of a late or failed payment</li>
<li>If 1 in 50 similar orders defaults, the expected loss per order is £10,000 ÷ 50 = <strong>£200</strong></li>
<li>Total expected cost: £197 + £200 = <strong>about £397</strong></li>
</ul>

<p>On these assumptions, BNPL is cheaper (£250 vs about £397). With a lower borrowing rate or very reliable customers, your own terms could win. The point is to compare like for like: fee versus financing cost plus expected bad debt and admin.</p>

<h2>B2B BNPL vs trade credit vs factoring vs dynamic discounting</h2>

<table>
<thead>
<tr><th>Option</th><th>Who funds it</th><th>When it is arranged</th><th>Who carries credit risk</th><th>Typical cost to supplier</th></tr>
</thead>
<tbody>
<tr><td>Own trade credit (net terms)</td><td>Supplier</td><td>When the account is opened</td><td>Supplier</td><td>Financing cost, admin and bad debts</td></tr>
<tr><td>B2B buy now pay later</td><td>BNPL provider</td><td>At checkout or on the invoice</td><td>Usually provider (check recourse)</td><td>Percentage fee per order</td></tr>
<tr><td>Invoice factoring</td><td>Factoring company</td><td>After invoices are issued</td><td>Supplier (recourse) or factor (non-recourse)</td><td>Discount fee plus service charges</td></tr>
<tr><td>Dynamic discounting</td><td>The buyer itself</td><td>After invoice approval</td><td>No third party; buyer pays early</td><td>Discount given for early payment</td></tr>
<tr><td>Invoice financing / line of credit</td><td>Lender</td><td>Facility set up in advance</td><td>Supplier</td><td>Interest and facility fees</td></tr>
</tbody>
</table>

<p>Factoring is the closest relative. Our guide to <a href="/blog/invoice-factoring">invoice factoring</a> explains how selling issued invoices works and when recourse applies. <a href="/blog/dynamic-discounting">Dynamic discounting</a> is the buyer-funded alternative, where a cash-rich customer pays early in exchange for a discount. And if you prefer a revolving facility, compare <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing with a line of credit</a>.</p>

<h2>How invoices work in a BNPL transaction</h2>

<p>The supplier is still the seller, so in most cases the supplier still issues the sales invoice and accounts for any VAT, GST or sales tax. What changes is the payment instruction. The invoice should tell the buyer clearly:</p>
<ul>
<li>That the invoice is being paid through the named provider.</li>
<li>The provider's payment details or link, not your own bank account.</li>
<li>The due date under the provider's term, which may differ from your normal terms.</li>
<li>A reference the provider uses to match the payment.</li>
</ul>

<p>Some providers generate invoices or statements on your behalf, while others ask you to upload your own. Agree which document is the tax invoice so the buyer does not receive two "invoices" for one order and pay twice. If you create your own, the <a href="/invoice-generator">free invoice generator</a> builds a PDF in your browser and lets you put the provider's payment instructions in the notes field. It does not offer credit, take payments or connect to BNPL providers.</p>

<p>In your books, record the sale at the full invoice value, the provider payout as cash received and the fee as a finance or selling expense. That keeps revenue accurate and makes reconciliation easier.</p>

<h2>Pros and cons of B2B buy now pay later</h2>

<table>
<thead>
<tr><th>For the supplier</th><th>For the buyer</th></tr>
</thead>
<tbody>
<tr><td><strong>Pro:</strong> cash within days instead of 30 to 90 days</td><td><strong>Pro:</strong> time to sell goods or finish a project before paying</td></tr>
<tr><td><strong>Pro:</strong> credit checks and collections handled by the provider</td><td><strong>Pro:</strong> quick approval without a bank loan application</td></tr>
<tr><td><strong>Pro:</strong> can raise conversion and average order size</td><td><strong>Pro:</strong> often no cost within the standard term</td></tr>
<tr><td><strong>Con:</strong> a fee on every financed order</td><td><strong>Con:</strong> late fees or interest if repayment slips</td></tr>
<tr><td><strong>Con:</strong> less control over how your customers are chased</td><td><strong>Con:</strong> another creditor to manage alongside suppliers</td></tr>
<tr><td><strong>Con:</strong> possible clawbacks on disputes in recourse programs</td><td><strong>Con:</strong> credit limits may be lower than hoped</td></tr>
</tbody>
</table>

<p>One relationship point deserves attention. When a buyer pays late, the provider, not you, will contact them. Ask how the provider communicates with overdue buyers, because a heavy-handed collection process can damage a customer relationship you spent years building.</p>

<h2>A typical B2B buy now pay later scenario</h2>

<p>Picture a small packaging wholesaler selling to independent cafés. Each café orders a few hundred pounds of cups and boxes every month and asks for 30 or 60 days. Before adding a BNPL option, the wholesaler either demanded card payment upfront (losing some orders) or offered net 30 to trusted customers and chased the rest. After adding a B2B buy now pay later option to its online trade store, new cafés can choose 30 or 60 days at checkout, the provider approves them in seconds, and the wholesaler receives the order value minus the fee a couple of days later.</p>

<p>The wholesaler still sends its normal VAT invoice with each order, but the payment section now names the provider and its reference rather than the wholesaler's bank account. Long-standing customers who always pay on time keep their existing net 30 account, because the wholesaler does not want to pay a fee on orders that carry little risk. That mix, with BNPL for new and unknown buyers and in-house terms for proven ones, is a common way to control cost.</p>

<h2>Where B2B BNPL fits in the bigger picture</h2>

<p>B2B BNPL is one example of embedded finance: credit offered inside the purchase flow rather than through a separate bank application. Our article on <a href="/blog/embedded-finance-invoicing">embedded finance in invoicing</a> covers the wider trend, including payments and financing built into invoicing and ecommerce tools.</p>

<p>It suits suppliers who sell to many small and mid-sized business buyers, have repeat orders of moderate size and lose deals because they cannot offer terms. It suits less well when margins are very thin, orders are huge and bespoke, or buyers are large corporates that pay reliably on their own long terms. For those, a clear <a href="/blog/net-60-net-90-payment-terms">net 60 or net 90 policy</a> or <a href="/blog/early-payment-discount">early payment discount</a> may work better.</p>

<h2>Questions to ask a B2B buy now pay later provider</h2>

<ul>
<li>What is the fee for each term length (30, 60, 90 days)?</li>
<li>How quickly are payouts made, and is faster payout extra?</li>
<li>Is the program recourse or non-recourse? What happens in disputes, returns or fraud?</li>
<li>What credit limits do buyers typically get, and what happens when one is declined?</li>
<li>Which countries, currencies and industries are supported?</li>
<li>Who issues the invoice, and how are partial shipments and credit notes handled?</li>
<li>How does the provider collect from buyers, and how does it treat late payers who are also your customers?</li>
<li>Are there monthly, setup or minimum volume fees?</li>
</ul>

<h2>Implementation checklist</h2>

<ul>
<li>Calculate your current cost of offering terms: financing, admin and bad debts.</li>
<li>Get written quotes from at least two providers using your real order sizes.</li>
<li>Read the recourse, dispute and returns clauses.</li>
<li>Update your <a href="/blog/customer-credit-policy">customer credit policy</a> to say when BNPL, prepayment or your own terms apply.</li>
<li>Add the provider's payment instructions to your invoice notes or template.</li>
<li>Set up accounting entries for the gross sale, net payout and fee.</li>
<li>Tell your sales team how to explain the option to buyers.</li>
<li>Review approval rates and fees after three months.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Recording only the net payout as revenue.</strong> Revenue is the full sale; the fee is an expense.</li>
<li><strong>Leaving your own bank details on BNPL invoices.</strong> Buyers may pay you instead of the provider, causing messy refunds.</li>
<li><strong>Ignoring recourse terms.</strong> A cheap rate can hide clawbacks when goods are disputed.</li>
<li><strong>Assuming every buyer will be approved.</strong> Keep a fallback payment option.</li>
<li><strong>Comparing fees to zero.</strong> Your own terms are not free; include financing costs and bad debts.</li>
<li><strong>Duplicate invoices.</strong> Agree whether you or the provider issues the tax invoice.</li>
</ul>

<p>If buyers in the UK pay late on your own terms, statutory interest may be available under the <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">late commercial payments rules on GOV.UK</a>. For more on getting paid, browse the <a href="/blog/category/payments">payments articles</a>. Provider terms and regulation change, so verify details before signing an agreement.</p>
`,
  },
  {
    slug: "cash-on-delivery-invoicing",
    title: "Cash on Delivery (COD): How to Invoice and Reconcile Orders",
    description:
      "Cash on delivery invoicing made simple: what to put on COD invoices, how courier remittances work, handling returns (RTO) and reconciling every rupee or dollar.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "payment-gateway-pakistan",
      "ecommerce-invoice-shopify-woocommerce",
      "bank-reconciliation",
    ],
    faqs: [
      {
        q: "What does cash on delivery mean?",
        a: "Cash on delivery (COD) means the customer pays when the order is delivered rather than when it is placed. A courier or delivery rider collects the money, usually in cash and sometimes by card or wallet at the door, then passes it to the seller after deducting its charges. COD is popular where customers distrust prepaying online or do not use cards.",
      },
      {
        q: "Do I need to issue an invoice for a COD order?",
        a: "Yes, you should. The invoice records the sale, shows the customer what they owe and supports your tax and accounting records. Many sellers print the invoice and put it in the parcel, while the courier label shows the COD amount to collect. The invoice amount and the COD amount should match, including any delivery charge you pass on.",
      },
      {
        q: "How long do couriers take to remit COD payments?",
        a: "It varies by courier and contract. Some remit COD collections within a few days of delivery, others weekly or on a fixed cycle, and some offer faster settlement for a fee. Get the remittance schedule, deductions and statement format in writing before you start, and track every shipment until its cash reaches your bank account.",
      },
      {
        q: "What is RTO in cash on delivery?",
        a: "RTO stands for return to origin. It happens when a COD parcel cannot be delivered, for example because the customer refuses it, is unreachable or gave a wrong address, and the courier sends it back to the seller. You usually receive no money, may pay forward and return delivery charges, and must restock or write off the goods.",
      },
      {
        q: "How do I reduce COD returns?",
        a: "Common methods include confirming orders by phone or message before dispatch, verifying addresses, offering a small discount or free delivery for prepaid orders, asking for a delivery fee in advance on high-risk orders, and blocking repeat refusers. Clear product photos and descriptions also reduce refusals caused by mismatched expectations, and shipping quickly gives customers less time to change their minds.",
      },
      {
        q: "How should I record COD sales in my books?",
        a: "Record the sale when it is delivered (or when your accounting method says revenue is earned) as a receivable from the courier, not from the customer. When the courier remits, record the cash received, the delivery fees and any COD handling charges or tax deducted. Returned parcels reverse the sale or never become sales, depending on when you recorded them.",
      },
      {
        q: "Is COD safe for sellers?",
        a: "COD carries more risk than prepaid orders: refused parcels, return shipping costs, cash handling by third parties and delays before you are paid. Reputable couriers, written contracts, order confirmation and weekly reconciliation keep the risk manageable. Many sellers offer COD alongside prepaid options and nudge customers toward prepayment with small incentives such as free delivery.",
      },
      {
        q: "Can I add a COD fee to the invoice?",
        a: "In many places you can charge a separate COD or handling fee, as long as you show it clearly before the customer orders and on the invoice, and it complies with local consumer and tax rules. If the fee is taxable, include it in the taxable amount. Avoid hiding it, since surprise charges at the door increase refusals.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> With cash on delivery, the customer pays the courier when the parcel arrives and the courier later remits the money to you, minus its charges. Issue an invoice for every COD order, match the COD amount on the label to the invoice, and reconcile each courier remittance shipment by shipment, including returns.</p>

<p>COD is still a major payment method for online sellers in many markets, especially in Pakistan, South Asia, the Middle East and parts of Africa, where many shoppers prefer to see the product before paying. It removes the trust barrier for customers but moves the work to the seller: cash sits with couriers, some parcels come back and remittance statements arrive with deductions you have to check. This guide covers how COD works, what to put on the invoice, how to handle returns and how to reconcile what the courier pays you against what you shipped.</p>

<h2>How cash on delivery works</h2>

<ol>
<li><strong>Order placed.</strong> The customer chooses COD at checkout or orders by phone or social media.</li>
<li><strong>Confirmation.</strong> Many sellers confirm the order and address by call or message before dispatch.</li>
<li><strong>Invoice and booking.</strong> You issue the invoice, pack it with the goods and book the shipment with the courier, entering the COD amount to collect.</li>
<li><strong>Delivery and collection.</strong> The rider collects the amount from the customer, usually in cash.</li>
<li><strong>Remittance.</strong> The courier pays you the collected amounts on its settlement cycle, after deducting delivery fees and any COD or handling charges.</li>
<li><strong>Returns.</strong> Undelivered parcels go back to you as returns to origin (RTO), often with return charges.</li>
</ol>

<h2>Cash on delivery in Pakistan</h2>

<p>In Pakistan, COD has been the default for a large share of ecommerce orders, especially for small online stores selling through websites, Facebook and Instagram. National couriers and specialist ecommerce logistics companies collect COD and remit to the seller's bank account, typically after deducting shipping charges. Some offer faster or advance settlement for a fee. Settlement cycles, rate cards and return charges differ between couriers and between contracts, so ask for them in writing.</p>

<p>Points that matter in the Pakistani context:</p>
<ul>
<li><strong>Remittance to a business bank account.</strong> Keep COD remittances in one account so they are easy to match and support your tax records.</li>
<li><strong>Tax deductions.</strong> In recent years, Finance Acts have introduced tax withholding on online sales collected by couriers and payment intermediaries. Check the current FBR rules and look for any tax shown on courier statements, then keep those statements to claim credit when you file. Our <a href="/blog/freelancer-tax-pakistan-2026">Pakistan tax guide for freelancers</a> explains how withholding credits work in general terms.</li>
<li><strong>Prepaid alternatives.</strong> Encouraging prepayment through bank transfer, wallets or Raast reduces RTO. See our overview of <a href="/blog/payment-gateway-pakistan">payment gateways in Pakistan</a> for online options.</li>
<li><strong>Cash memos for walk-in sales.</strong> Shops that also sell over the counter often use a <a href="/blog/cash-memo-format">cash memo format</a> for those sales and invoices for delivered orders.</li>
</ul>

<p>Elsewhere, COD works the same way in principle. Marketplaces and couriers collect and remit, and the seller reconciles. The details (fees, cycles, taxes) depend on the country and contract.</p>

<h2>What to put on a COD invoice</h2>

<p>A COD invoice needs the same core details as any sales invoice, plus a few COD-specific notes:</p>
<ul>
<li>Your business name, address, phone and tax number (NTN or STRN in Pakistan if registered).</li>
<li>A unique invoice number and the order number.</li>
<li>Customer name, delivery address and phone.</li>
<li>Items, quantities, unit prices and any discount.</li>
<li>Delivery charge and COD fee, if you pass them on.</li>
<li>Tax, if you are registered and the sale is taxable.</li>
<li><strong>Total amount payable on delivery</strong>, shown clearly.</li>
<li>Payment method: "Cash on delivery".</li>
<li>The courier tracking number, so you can match remittances later.</li>
<li>Your returns or exchange policy in the notes.</li>
</ul>

<p>The amount on the courier booking must equal the invoice total. A mismatch means either the rider collects the wrong amount or you spend hours later working out why remittances do not add up. You can create COD invoices with the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a>, which builds a PDF in your browser with PKR amounts and a notes field for the tracking number. It does not book couriers, collect cash or track deliveries.</p>

<h2>Worked example: reconciling a COD remittance</h2>

<p>Here is an illustrative month for a small online store. The charges are made-up round numbers to show the arithmetic, not any courier's actual rates.</p>

<table>
<thead>
<tr><th>Item</th><th>Calculation</th><th>Amount (PKR)</th></tr>
</thead>
<tbody>
<tr><td>Orders shipped</td><td>100 orders × Rs 3,000</td><td>300,000</td></tr>
<tr><td>Returned (RTO)</td><td>15 orders × Rs 3,000</td><td>(45,000)</td></tr>
<tr><td>Delivered and collected</td><td>85 orders × Rs 3,000</td><td>255,000</td></tr>
<tr><td>Delivery charges</td><td>85 × Rs 250</td><td>(21,250)</td></tr>
<tr><td>Return charges</td><td>15 × Rs 150</td><td>(2,250)</td></tr>
<tr><td>COD handling fee</td><td>1% × 255,000</td><td>(2,550)</td></tr>
<tr><td><strong>Expected remittance</strong></td><td>255,000 − 21,250 − 2,250 − 2,550</td><td><strong>228,950</strong></td></tr>
</tbody>
</table>

<p>If the courier's statement shows Rs 225,950, you have a Rs 3,000 gap, exactly one order. That is usually a delivered parcel missing from the remittance, a parcel marked returned that you never received back, or an extra deduction. Match by tracking number and raise a claim with the courier quickly. If tax was withheld, it should appear on the statement as a separate line, which you record as tax paid in advance rather than as a fee.</p>

<p>Notice the cost of returns: 15 RTO parcels earned nothing and cost Rs 2,250 in return charges, plus the outbound delivery charge if your courier bills it on returns too, plus packing and staff time. Cutting the return rate is usually the fastest way to improve COD profitability.</p>

<h2>Step-by-step COD reconciliation</h2>

<ol>
<li><strong>Keep a shipment log.</strong> One row per order: invoice number, tracking number, COD amount, ship date and status. An <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> works well.</li>
<li><strong>Update statuses</strong> from the courier portal: delivered, in transit, returned.</li>
<li><strong>Match each remittance statement</strong> line by line against delivered orders.</li>
<li><strong>Check deductions</strong> against your rate card: delivery, return, COD fee, weight adjustments and tax.</li>
<li><strong>Confirm the bank deposit</strong> equals the statement net total.</li>
<li><strong>Flag exceptions</strong>: delivered but unpaid, returned but not received, unexpected charges.</li>
<li><strong>Close returns</strong>: restock goods, note damaged items and cancel or credit the invoice.</li>
</ol>

<p>The same matching discipline applies to any payment channel. For the general method, see our guide to <a href="/blog/bank-reconciliation">bank reconciliation</a>.</p>

<h2>Handling returns and cancelled COD orders</h2>

<p>When a COD parcel comes back, the customer never paid, so you should not leave an unpaid invoice sitting on your books. Depending on your system, either mark the invoice as cancelled or void (if you never recorded it as revenue) or issue a credit note to reverse it (if you did). Keep the original invoice number in your records rather than reusing it, so your numbering stays continuous. Our guide to <a href="/blog/credit-note-guide">credit notes</a> explains the reversal process.</p>

<p>For partial deliveries, where the customer accepts some items and refuses others, issue a credit note for the refused items and make sure the courier collected the reduced amount.</p>

<h2>How to reduce COD returns</h2>

<p>Returns are where cash on delivery quietly eats margin, so most of the effort should go here. Practical steps sellers use:</p>
<ul>
<li><strong>Confirm before dispatch.</strong> A short call or message to confirm the order, address and amount filters out impulse orders and fake numbers.</li>
<li><strong>Verify addresses.</strong> Ask for a nearby landmark and an alternate phone number for areas where addresses are informal.</li>
<li><strong>Reward prepayment.</strong> Free delivery or a small discount for bank transfer or wallet payments shifts some customers away from COD.</li>
<li><strong>Take a partial advance on risky orders.</strong> For high-value items or first-time customers in high-return areas, ask for the delivery charge upfront.</li>
<li><strong>Keep a refusal list.</strong> Note phone numbers and addresses that repeatedly refuse parcels, and require prepayment from them.</li>
<li><strong>Describe products honestly.</strong> Accurate photos, sizes and colors reduce refusals at the door.</li>
<li><strong>Ship fast.</strong> The longer the wait, the more likely the customer has changed their mind or bought elsewhere.</li>
</ul>

<h2>Recording cash on delivery sales in your books</h2>

<p>A clean way to account for COD is to treat the courier as the party that owes you money once a parcel is delivered. In simple terms:</p>
<ol>
<li>On delivery, record the sale and a receivable from the courier for the full invoice amount.</li>
<li>When the remittance arrives, record the bank deposit, the delivery and COD charges as expenses, and any tax withheld as an advance tax asset.</li>
<li>The courier receivable should then be zero for every delivered parcel included in that statement.</li>
<li>Anything left on the courier receivable after the expected settlement date is a parcel you need to chase.</li>
</ol>

<p>This makes the courier balance a built-in control: if it keeps growing, cash is stuck somewhere. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains receivables in more depth.</p>

<h2>COD vs prepaid orders</h2>

<table>
<thead>
<tr><th>Factor</th><th>Cash on delivery</th><th>Prepaid (card, wallet, bank transfer)</th></tr>
</thead>
<tbody>
<tr><td>Customer trust barrier</td><td>Low</td><td>Higher</td></tr>
<tr><td>When seller is paid</td><td>After delivery and courier remittance</td><td>At order or shortly after</td></tr>
<tr><td>Return risk</td><td>Higher (refusals, unreachable customers)</td><td>Lower</td></tr>
<tr><td>Fees</td><td>Delivery, COD handling, return charges</td><td>Gateway or transfer fees</td></tr>
<tr><td>Reconciliation effort</td><td>High</td><td>Moderate</td></tr>
</tbody>
</table>

<h2>COD checklist</h2>

<ul>
<li>Written courier agreement with rate card, remittance cycle and return charges.</li>
<li>Order confirmation step before dispatch.</li>
<li>Invoice for every order, with tracking number and COD total.</li>
<li>COD amount on the booking equals the invoice total.</li>
<li>Shipment log updated daily or weekly.</li>
<li>Remittances reconciled line by line within a week of receipt.</li>
<li>Returns received, inspected, restocked and credited.</li>
<li>Tax deductions on courier statements recorded and statements filed.</li>
<li>Incentives for prepaid orders reviewed monthly.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Only checking the bank total.</strong> A correct-looking total can hide a missing parcel offset by a wrong fee.</li>
<li><strong>Not chasing RTO parcels.</strong> Parcels marked "returned" sometimes never come back.</li>
<li><strong>Reusing invoice numbers for reshipped orders.</strong> Issue a new invoice or keep the original with a note.</li>
<li><strong>Treating courier deductions as one lump sum.</strong> Split delivery fees, COD fees and tax so your books are accurate.</li>
<li><strong>Ignoring the true cost of returns.</strong> Count outbound and return shipping, packing and damaged stock.</li>
<li><strong>Letting cash sit too long.</strong> Long remittance cycles strain working capital; negotiate or compare couriers.</li>
</ul>

<p>For more on getting paid, browse the <a href="/blog/category/payments">payments section</a>. For digital alternatives that reduce cash handling, the <a href="https://www.sbp.org.pk/" target="_blank" rel="noopener noreferrer">State Bank of Pakistan</a> publishes information on Raast and other payment systems. Courier terms and tax rules change, so verify current details before relying on them.</p>
`,
  },
  {
    slug: "payment-confirmation-email",
    title: "Payment Confirmation Email: Templates for Received Payments",
    description:
      "Payment confirmation email templates for full, partial, deposit and final payments, with subject lines, what to include and how to attach a receipt.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["payment-receipt-template", "payment-reminder-emails", "partial-payment-invoice"],
    faqs: [
      {
        q: "What should a payment confirmation email include?",
        a: "Include the amount received, the date it arrived, the payment method, the invoice number it was applied to and any remaining balance. Add a short thank-you, attach or link a receipt or updated invoice showing the payment, and give a contact for questions. Keep it short so the client's accounts team can file it quickly.",
      },
      {
        q: "When should I send a payment confirmation email?",
        a: "Send it once the money has actually cleared in your account, ideally the same or next business day. For card payments, that is usually when the payment succeeds; for bank transfers and checks, wait until the funds appear. Confirming too early can cause awkward corrections if a payment bounces or is reversed.",
      },
      {
        q: "Is a payment confirmation email the same as a receipt?",
        a: "Not exactly. The email is the message; the receipt is the record. A receipt shows who paid, how much, when, for what and how. Many businesses put the receipt details in the email body and also attach a PDF receipt or a paid invoice, because clients often need a document for their files or expense claims.",
      },
      {
        q: "How do I confirm a partial payment?",
        a: "State the amount received, the invoice it applies to, the new balance due and when the balance is due. Attach an updated invoice that shows the amount paid and the balance due. Thank the client but keep the remaining amount clear, so there is no misunderstanding that the account is settled.",
      },
      {
        q: "What subject line should I use?",
        a: "Use a plain, searchable subject that names the payment and invoice, such as 'Payment received – Invoice 1042' or 'Thank you – payment for INV-1042 received'. Avoid vague subjects like 'Thanks!' that are hard to find later. Including the invoice number helps both your client and your own records, especially when someone searches their inbox months later during an audit.",
      },
      {
        q: "Do I need to send payment confirmation emails?",
        a: "There is usually no general legal requirement for a freelancer or small business to email a confirmation, though tax rules may require receipts in some situations. In practice, confirmations reduce duplicate payments, answer 'did you get it?' messages before they are sent and give clients the paperwork their accounts teams want.",
      },
      {
        q: "Should I confirm payments received through platforms like PayPal or Stripe?",
        a: "Platforms often send automatic receipts, but these may not reference your invoice number or show the remaining balance. A short personal confirmation linking the payment to your invoice is still useful, especially for business clients, partial payments and payments where fees or currency conversion changed the amount you received. It takes a minute and prevents later confusion.",
      },
      {
        q: "What if the client paid the wrong amount?",
        a: "Confirm what you received, then explain the difference neutrally. If they underpaid, state the shortfall and how to pay it. If they overpaid, offer a refund or a credit against the next invoice and ask which they prefer. Bank or conversion fees are a common cause, so mention them without assuming bad faith.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A payment confirmation email tells a client their payment has arrived. Send it once funds clear, state the amount, date, method and invoice number, show any remaining balance and attach a receipt or paid invoice. Below are copy-ready templates for full, partial, deposit, final and overpaid payments.</p>

<p>Most invoicing advice focuses on getting paid: payment terms, reminders and late fees. What happens after the money arrives gets less attention, but it matters. A clear confirmation stops clients from paying twice, gives their accounts team the paperwork they need and ends the transaction on a professional note that makes repeat work more likely. This guide covers what to include, when to send it and templates you can adapt. If you are still chasing a payment, start with our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> instead.</p>

<h2>What a payment confirmation email should include</h2>

<table>
<thead>
<tr><th>Element</th><th>Why it matters</th></tr>
</thead>
<tbody>
<tr><td>Amount received</td><td>Shows exactly what arrived, which may differ from the invoice after fees.</td></tr>
<tr><td>Date received</td><td>Confirms whether the payment was on time.</td></tr>
<tr><td>Payment method</td><td>Helps the client match it to their bank or card statement.</td></tr>
<tr><td>Invoice number</td><td>Links the payment to the right bill on both sides.</td></tr>
<tr><td>Remaining balance</td><td>Prevents confusion on partial and deposit payments.</td></tr>
<tr><td>Receipt or paid invoice</td><td>Gives the client a document for their records.</td></tr>
<tr><td>Thank-you and contact</td><td>Keeps the relationship warm and gives a route for questions.</td></tr>
</tbody>
</table>

<h2>When to send a payment confirmation email</h2>

<p>Send the confirmation after the money has actually cleared, not when the client says "sent". Bank transfers can take one to several business days, international wires longer, and checks can bounce. Confirming early and then retracting is awkward. For card and online payments, the processor usually confirms success immediately, so you can reply the same day.</p>

<p>Same-day or next-business-day confirmation is a good habit. If you batch admin weekly, still confirm within a few days, especially for large invoices where the client may be anxious.</p>

<h2>Subject lines that work</h2>

<p>Use clear, searchable subject lines. Your client may search their inbox for the invoice number months later.</p>
<ul>
<li>Payment received – Invoice 1042</li>
<li>Thank you – payment for INV-1042 received</li>
<li>Partial payment received – INV-1042 (balance $1,400)</li>
<li>Deposit received – Website project, INV-1050</li>
<li>Final payment received – Project complete</li>
</ul>

<p>For more patterns, see our guide to <a href="/blog/invoice-email-subject-lines">invoice email subject lines</a>.</p>

<h2>Payment confirmation email templates</h2>

<p>Replace the bracketed text. Keep the tone friendly and short.</p>

<h3>1. Full payment received</h3>

<p><em>Subject: Payment received – Invoice [number]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thank you for your payment of [amount] received on [date] by [method] for invoice [number]. This invoice is now paid in full.</em></p>
<p><em>I have attached a receipt for your records. If you need anything else for your accounts team, just let me know.</em></p>
<p><em>Thanks again, and I look forward to working with you on the next project.</em></p>
<p><em>[Your name]</em></p>

<h3>2. Partial payment received</h3>

<p><em>Subject: Partial payment received – Invoice [number]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thank you for your payment of [amount] received on [date] for invoice [number]. After this payment, the remaining balance is [balance], due by [due date].</em></p>
<p><em>I have attached an updated invoice showing the amount paid and the balance due. You can pay the balance using the same details as before.</em></p>
<p><em>Please let me know if you have any questions.</em></p>
<p><em>[Your name]</em></p>

<h3>3. Deposit received (project start)</h3>

<p><em>Subject: Deposit received – [Project name]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thanks for your deposit of [amount] received on [date] for invoice [number]. Your project is now booked, and I will start on [start date] as agreed.</em></p>
<p><em>The remaining [balance] will be invoiced on [milestone or date]. A receipt for the deposit is attached.</em></p>
<p><em>[Your name]</em></p>

<h3>4. Final payment and project close</h3>

<p><em>Subject: Final payment received – thank you</em></p>
<p><em>Hi [Name],</em></p>
<p><em>I have received your final payment of [amount] for invoice [number], so your account is fully settled. Thank you for paying promptly.</em></p>
<p><em>All final files are in [location]. It has been a pleasure working with you. If you have a moment, a short testimonial or referral would mean a lot.</em></p>
<p><em>[Your name]</em></p>

<h3>5. Payment received with fees deducted</h3>

<p><em>Subject: Payment received – Invoice [number] (small balance)</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thank you for your payment for invoice [number]. We received [amount received] on [date], which is [shortfall] less than the invoice total, most likely because of transfer or conversion fees.</em></p>
<p><em>Could you add the [shortfall] to your next payment, or send it separately? For future transfers, selecting the option where the sender covers the fees should avoid this.</em></p>
<p><em>[Your name]</em></p>

<h3>6. Overpayment received</h3>

<p><em>Subject: Payment received – Invoice [number] (overpayment)</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thank you for your payment of [amount] for invoice [number]. This is [excess] more than the invoice total. I am happy to refund the difference or apply it as a credit to your next invoice. Which would you prefer?</em></p>
<p><em>[Your name]</em></p>

<h3>7. Recurring or retainer payment</h3>

<p><em>Subject: Payment received – [Month] retainer, INV-[number]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Just confirming we received your [month] retainer payment of [amount] on [date]. Invoice [number] is now paid, and the receipt is attached.</em></p>
<p><em>Your next invoice will be issued on [date] for [period]. Thanks as always.</em></p>
<p><em>[Your name]</em></p>

<h3>8. Payment received in a different currency</h3>

<p><em>Subject: Payment received – Invoice [number]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Thank you for your payment for invoice [number], which was billed in [invoice currency]. It arrived on [date] and has been applied in full. I have attached a receipt showing the invoice amount in [invoice currency] for your records.</em></p>
<p><em>[Your name]</em></p>

<h2>Adapting a payment confirmation email to the situation</h2>

<p>The same basic structure works for almost every payment, but a few situations call for small changes:</p>
<ul>
<li><strong>Corporate clients with an accounts payable team.</strong> Copy the person who sent the remittance, quote their PO number as well as your invoice number, and attach the paid invoice as a PDF. If they sent <a href="/blog/remittance-advice">remittance advice</a>, reference it.</li>
<li><strong>Clients who pay several invoices at once.</strong> List each invoice number and the amount applied to it, so a single bulk payment is clearly allocated.</li>
<li><strong>International clients.</strong> Confirm the amount in the invoice currency and, if it arrived converted, mention any shortfall from fees. Avoid quoting your own local-currency figure unless the client asks for it.</li>
<li><strong>First-time clients.</strong> A slightly warmer payment confirmation email, with a line about next steps or how to book future work, sets the tone for a repeat relationship.</li>
<li><strong>Clients who paid late after reminders.</strong> Keep the message neutral and appreciative. The confirmation is not the place to revisit the delay.</li>
</ul>

<h2>Worked example: partial payment confirmation</h2>

<p>Here is an illustrative case. You invoiced a client $2,400 for a design project. They pay $1,000 now and promise the rest at month end.</p>

<ul>
<li>Invoice total: <strong>$2,400</strong></li>
<li>Payment received: <strong>$1,000</strong></li>
<li>Balance due: $2,400 − $1,000 = <strong>$1,400</strong></li>
</ul>

<p>Your confirmation should say "$1,000 received, balance $1,400 due by 30 November" and attach an updated invoice with an "Amount paid: $1,000" line and "Balance due: $1,400". Now suppose the client was abroad and paid by international transfer, and $1,000 was sent but only $975 arrived:</p>

<ul>
<li>Fees deducted: $1,000 − $975 = <strong>$25</strong></li>
<li>True balance: $2,400 − $975 = <strong>$1,425</strong></li>
</ul>

<p>Confirm the $975 you actually received and state the balance as $1,425, explaining the $25 difference politely. Our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> covers how to lay out paid amounts and balances on the invoice itself.</p>

<h2>Receipt or paid invoice: what to attach</h2>

<p>You have two common options. A <strong>receipt</strong> is a separate document confirming the payment; our <a href="/blog/payment-receipt-template">payment receipt template guide</a> covers the fields. A <strong>paid invoice</strong> is the original invoice reissued with the payment recorded and a zero (or reduced) balance. Business clients often prefer the paid invoice because it matches what is in their accounts payable system.</p>

<p>The <a href="/invoice-generator">invoice generator</a> lets you enter an amount paid so the PDF shows the balance due, which works well for partial and final confirmations. It builds the PDF in your browser; it does not send emails or record payments for you, so attach the file to your own email. If you want a distinct look for receipts, pick a clean layout from the <a href="/invoice-templates/minimal">minimal invoice template</a>.</p>

<h2>Automated vs personal confirmations</h2>

<p>Card processors, payment links and accounting tools often send automatic receipts. They are fast but generic: they may show the processor's reference rather than your invoice number, and they rarely mention remaining balances. A good approach is to let the automatic receipt go out and send a short personal note for business clients, larger invoices, partial payments and anything unusual.</p>

<p>Payment confirmations are generally treated as transactional messages rather than marketing. In the US, the <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer">FTC's CAN-SPAM compliance guide</a> explains that messages whose primary purpose is completing a transaction are largely exempt from commercial email rules, but they must not be misleading. If you add promotions, keep the payment information as the main content.</p>

<h2>Payment confirmation email checklist</h2>

<ul>
<li>Funds have cleared in your account.</li>
<li>Amount matches what actually arrived, after any fees.</li>
<li>Invoice number and payment date are correct.</li>
<li>Remaining balance and due date are stated, if any.</li>
<li>Receipt or updated invoice is attached and opens correctly.</li>
<li>Subject line includes the invoice number.</li>
<li>Payment is recorded in your own tracker or accounts.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Confirming before funds clear.</strong> A bounced check or reversed transfer then needs an awkward follow-up.</li>
<li><strong>Saying "paid in full" on a partial payment.</strong> Always state the balance.</li>
<li><strong>Ignoring short payments.</strong> Small fee deductions add up; mention them the first time. See <a href="/blog/short-payments-and-deductions">short payments and deductions</a>.</li>
<li><strong>No invoice number.</strong> The client cannot match the email to their records.</li>
<li><strong>Forgetting to update your own records.</strong> Otherwise you may send a reminder for an invoice that is already paid.</li>
<li><strong>Turning the confirmation into a sales pitch.</strong> Keep it about the payment.</li>
</ul>

<p>For more on collecting money smoothly, browse the <a href="/blog/category/payments">payments guides</a>.</p>
`,
  },
  {
    slug: "upwork-vs-fiverr",
    title: "Upwork vs Fiverr: Fees, Payments and Which Is Better",
    description:
      "Upwork vs Fiverr compared for freelancers in 2026: service fees, Connects, clearance periods, withdrawals, how clients find you and which platform suits you.",
    category: "freelancing",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["fiverr-upwork-invoice", "how-to-get-clients-as-a-freelancer", "wise-vs-payoneer"],
    faqs: [
      {
        q: "Which is better for beginners, Upwork or Fiverr?",
        a: "Neither is automatically better. Fiverr suits beginners who can package a clear, specific service and wait for buyers to find their gigs, without paying to apply. Upwork suits people who can write strong proposals and want larger, ongoing contracts, but proposals cost Connects. Many freelancers try both briefly, then focus on whichever brings better clients for their skill.",
      },
      {
        q: "How much does Fiverr take from freelancers?",
        a: "Fiverr's help center says freelancers receive 80% of the client's cleared payment, which means a 20% commission on orders, including extras and tips. Buyers also pay a separate service fee at checkout. Withdrawal methods may carry their own charges. Check Fiverr's current help pages before pricing, as fees can change.",
      },
      {
        q: "How much does Upwork take from freelancers?",
        a: "As of October 2026, Upwork charges freelancers a variable service fee between 0% and 15% per contract, shown before you submit a proposal or accept an offer and fixed for that contract. Freelancers also pay for Connects to submit proposals beyond any free allowance, and optional Freelancer Plus membership has a monthly fee. Clients pay their own marketplace fees.",
      },
      {
        q: "How long does it take to get paid on Fiverr and Upwork?",
        a: "On Fiverr, revenue normally clears 14 days after an order is completed, or 7 days for some higher-level and subscribed sellers, with an early payout option for eligible sellers for a fee. On Upwork, payments go through a short review and security period, which differs for hourly and fixed-price contracts. Withdrawal to your bank adds more time.",
      },
      {
        q: "Can I use both Upwork and Fiverr at the same time?",
        a: "Yes, many freelancers keep profiles on both. Follow each platform's terms, especially rules against taking clients you met on the platform off-platform for payment. Track your time per platform, because maintaining two profiles, answering messages and writing proposals takes effort. Concentrate on the one that wins better-paying clients for your skill.",
      },
      {
        q: "Do I need to send my own invoice on Upwork or Fiverr?",
        a: "Usually no for platform orders, because each platform generates its own invoices and transaction records. You may still want your own records for tax, and you need your own invoices for clients who work with you outside the platform under the platform's rules. Keep platform reports and withdrawal statements for your bookkeeping.",
      },
      {
        q: "Are Upwork and Fiverr available in Pakistan and India?",
        a: "Both platforms accept freelancers from many countries, including Pakistan and India, and support withdrawal methods such as local bank transfer and Payoneer where available. Available methods and fees vary by country and change over time, so check the withdrawal options inside your account before you rely on one route, and compare exchange rates as well as fees.",
      },
      {
        q: "Which platform pays more?",
        a: "There is no reliable universal answer. Earnings depend on your skill, niche, reviews, pricing and how much work you win. Upwork's lower percentage fee can mean you keep more of each dollar on large contracts, but you pay for Connects to apply. Fiverr's flat 20% is higher but needs no proposal spending. Compare your actual net earnings per hour.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Upwork vs Fiverr choice, Upwork usually suits freelancers who pitch for larger, ongoing projects and can win proposals, with a variable 0–15% fee plus paid Connects. Fiverr suits freelancers selling clearly packaged services that buyers order directly, with a flat 20% commission. Fees below are checked as of October 2026.</p>

<p>Upwork and Fiverr are the two marketplaces most freelancers consider first, and Upwork vs Fiverr articles often reduce the choice to "which takes less". Fees matter, but how clients find you, how you get paid and what kind of work each platform rewards matter just as much. This guide compares fees, payments and day-to-day workflow so you can decide where to spend your time. All figures are from the platforms' own help and pricing pages as of October 2026; platforms change fees, so check before you set prices.</p>

<h2>How each platform works</h2>

<p><strong>Upwork</strong> is mainly a job-board model. Clients post jobs, freelancers submit proposals, and the client interviews and hires. Contracts can be hourly (with time tracking) or fixed-price with milestones. Clients can also invite freelancers directly or buy pre-packaged services from a catalog, but proposals remain the core.</p>

<p><strong>Fiverr</strong> is mainly a storefront model. Freelancers create "gigs" with set packages and prices, and buyers browse, compare and order. Custom offers and milestones exist for bigger projects, but you largely wait for buyers to find you through search and ranking.</p>

<p>That difference shapes everything else: on Upwork you spend effort hunting for jobs, while on Fiverr you spend effort on gig design, ranking and fast delivery.</p>

<h2>Upwork vs Fiverr fees (October 2026)</h2>

<p>Fees are where the two platforms differ most visibly, and where the Upwork vs Fiverr debate usually starts.</p>

<table>
<thead>
<tr><th>Fee</th><th>Upwork</th><th>Fiverr</th></tr>
</thead>
<tbody>
<tr><td>Freelancer commission</td><td>Variable 0–15% per contract, shown before you propose or accept and fixed for that contract</td><td>20% of each order, including extras and tips (freelancer receives 80%)</td></tr>
<tr><td>Cost to apply for work</td><td>Connects needed for proposals; extra Connects are sold in bundles (listed at $0.15 each)</td><td>No cost to receive orders</td></tr>
<tr><td>Optional subscription</td><td>Freelancer Plus (monthly fee; more Connects and features)</td><td>Seller Plus (monthly fee; extra tools, faster clearance on some plans)</td></tr>
<tr><td>Client-side fees</td><td>Marketplace fee and, in some cases, a contract initiation fee</td><td>Buyer service fee at checkout; small-order fee may apply</td></tr>
<tr><td>Withdrawal</td><td>Depends on method and country</td><td>Depends on method and country</td></tr>
</tbody>
</table>

<p>Sources: Upwork's <a href="https://www.upwork.com/resources/is-upwork-free" target="_blank" rel="noopener noreferrer">pricing breakdown</a> and Fiverr's <a href="https://help.fiverr.com/hc/en-us/articles/4402267122449-Early-Payout" target="_blank" rel="noopener noreferrer">help center on payouts</a>. Treat client-side fee amounts as variable, because they depend on plan, payment method and location.</p>

<h2>Worked example: what you keep on a $1,000 project</h2>

<p>The figures below are illustrative. Your actual Upwork fee is shown per contract and may be lower or higher than the 10% used here.</p>

<p><strong>Fiverr</strong></p>
<ul>
<li>Order value: $1,000</li>
<li>Commission: $1,000 × 20% = $200</li>
<li>You keep: $1,000 − $200 = <strong>$800</strong> (before withdrawal fees)</li>
</ul>

<p><strong>Upwork</strong> (illustrative 10% fee, plus Connects spent winning the job)</p>
<ul>
<li>Contract value: $1,000</li>
<li>Service fee: $1,000 × 10% = $100</li>
<li>Connects: suppose you sent 15 proposals at 12 Connects each to win this job = 180 Connects; 180 × $0.15 = $27</li>
<li>You keep: $1,000 − $100 − $27 = <strong>$873</strong> (before withdrawal fees)</li>
</ul>

<p>On this example, the Upwork vs Fiverr gap is $73 in Upwork's favor. But if you needed 50 proposals to win one $200 job, the Connects alone would be 50 × 12 × $0.15 = $90, which is 45% of the job. Fees per dollar earned depend heavily on your win rate and job size, so track both.</p>

<h2>Getting paid: clearance and withdrawals</h2>

<p><strong>Fiverr:</strong> According to Fiverr's help center, revenue becomes available 14 days after an order is completed, or 7 days for Top Rated, Pro and some Seller Plus freelancers. Eligible sellers can use early payout to skip clearance for a fee (listed as 1% of the clearing amount). You then withdraw to a supported method.</p>

<p><strong>Upwork:</strong> Fixed-price payments are released when the client approves a milestone (or automatically after a review window), then pass through a short security period before you can withdraw. Hourly contracts are billed weekly with a review period for the client before funds become available. Exact timings are shown in your account.</p>

<p>Both platforms let you withdraw by methods such as direct bank transfer and Payoneer, depending on your country. Compare the withdrawal fee and exchange rate together: a cheap fee with a poor rate can cost more. Our comparisons of <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> and <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal</a> explain what to look for. Freelancers in Pakistan should also read how to <a href="/blog/receive-payment-from-abroad-pakistan">receive payments from abroad in Pakistan</a>, since getting funds into a local bank account properly affects tax treatment.</p>

<h2>Finding clients: proposals vs gigs</h2>

<table>
<thead>
<tr><th>Factor</th><th>Upwork</th><th>Fiverr</th></tr>
</thead>
<tbody>
<tr><td>How work starts</td><td>You apply with proposals, or clients invite you</td><td>Buyers find and order your gig</td></tr>
<tr><td>Typical project shape</td><td>Ongoing, hourly or multi-milestone projects</td><td>Packaged, fixed-scope tasks; custom offers for bigger work</td></tr>
<tr><td>Skill that matters most</td><td>Writing tailored proposals and interviewing</td><td>Gig titles, images, pricing tiers and fast delivery</td></tr>
<tr><td>Upfront cost</td><td>Connects per proposal</td><td>Time spent building gigs</td></tr>
<tr><td>Long-term relationships</td><td>Common; fee may change by contract</td><td>Possible through repeat orders and custom offers</td></tr>
</tbody>
</table>

<p>If you are new, both reward reviews. Your first few jobs may be smaller and cheaper than you would like. Our guides to <a href="/blog/how-to-get-clients-as-a-freelancer">getting clients as a freelancer</a> and <a href="/blog/how-to-set-freelance-rates">setting freelance rates</a> help you avoid racing to the bottom.</p>

<h2>Disputes, cancellations and payment protection</h2>

<p>Both platforms hold client money before work is paid out, which protects you from clients who simply disappear. The details differ:</p>
<ul>
<li><strong>Upwork fixed-price contracts</strong> use funded milestones. The client deposits the milestone amount before you start, and Upwork's dispute process can step in if the client refuses to release funds. Hourly contracts rely on tracked time and work diary records for payment protection, so time logged manually generally has weaker protection.</li>
<li><strong>Fiverr orders</strong> are paid upfront by the buyer. Buyers can request revisions or cancellations, and Fiverr's resolution center and customer support handle disagreements. A cancelled order usually means the buyer is refunded and you receive nothing for that order.</li>
</ul>

<p>On both, clear scope is your best defense. Write exactly what is included, the number of revisions and the delivery format, and keep all communication on the platform so support can see it if a dispute arises.</p>

<h2>Upwork vs Fiverr for freelancers in Pakistan and India</h2>

<p>Both marketplaces are widely used by freelancers in South Asia, and the core comparison is the same. A few local points shift the balance:</p>
<ul>
<li><strong>Withdrawals.</strong> Check which methods your account offers in your country, such as local bank transfer or Payoneer, and compare the total cost including the conversion rate your bank or provider applies.</li>
<li><strong>Getting funds through proper channels.</strong> In Pakistan, receiving platform earnings into your own bank account, ideally a <a href="/blog/freelancer-digital-account-pakistan">freelancer digital account with a linked dollar account</a>, keeps the money recorded as export proceeds.</li>
<li><strong>Competition on price.</strong> Both platforms have many sellers from the region competing on low prices. Specializing in a niche usually works better than undercutting.</li>
<li><strong>Connects budget.</strong> For freelancers earning in rupees, paying in dollars for Connects can feel expensive early on, which nudges some beginners toward Fiverr first.</li>
</ul>

<h2>Upwork vs Fiverr at a glance</h2>

<table>
<thead>
<tr><th>Question</th><th>Upwork</th><th>Fiverr</th></tr>
</thead>
<tbody>
<tr><td>Lower percentage fee?</td><td>Usually, at 0–15% variable</td><td>No, flat 20%</td></tr>
<tr><td>Free to get work?</td><td>No, proposals use Connects</td><td>Yes, buyers order your gig</td></tr>
<tr><td>Faster first sale?</td><td>Depends on proposal skill</td><td>Depends on gig ranking</td></tr>
<tr><td>Better for long contracts?</td><td>Often</td><td>Possible via repeat orders</td></tr>
<tr><td>Standard clearance</td><td>Short security period after release</td><td>14 days (7 for some levels)</td></tr>
</tbody>
</table>

<h2>Which is better for you?</h2>

<p><strong>Choose Upwork first if</strong> you offer services that vary by client (development, consulting, writing retainers), you can write strong proposals, and you want long-term hourly or milestone contracts.</p>

<p><strong>Choose Fiverr first if</strong> your service is easy to package (logo design, voiceover, video edits, specific technical fixes), you prefer buyers to come to you and you can deliver quickly and consistently.</p>

<p><strong>Use both</strong> if you have time to maintain two profiles, but measure results per platform. If you are in Pakistan and just starting, our guide on <a href="/blog/how-to-start-freelancing-in-pakistan">how to start freelancing in Pakistan</a> covers skills, platforms and payments together.</p>

<h2>Invoices and records</h2>

<p>Both platforms generate invoices and transaction records for orders placed through them, so you normally do not send your own invoice for platform work. Our guide to <a href="/blog/fiverr-upwork-invoice">Fiverr and Upwork invoices</a> explains where to find them and when your own invoice is still needed. For clients you work with outside the platforms (where the platform's terms allow it), create invoices with the <a href="/invoice-generator">free invoice generator</a>, which builds a PDF in your browser. It does not connect to Upwork or Fiverr or track platform payments.</p>

<p>For tax, keep monthly earnings reports, withdrawal statements and bank records. Your gross earnings and the platform fees usually both matter, so do not record only what reached your bank.</p>

<h2>Checklist before you commit</h2>

<ul>
<li>Check current freelancer fees on each platform's official pages.</li>
<li>Check which withdrawal methods work in your country and their costs.</li>
<li>Look at real jobs or gigs in your niche and note typical prices.</li>
<li>Estimate your Connects budget on Upwork for the first month.</li>
<li>Prepare portfolio samples for either profile.</li>
<li>Decide how you will track gross earnings, fees and withdrawals.</li>
<li>Read each platform's rules on off-platform payments.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Comparing only headline percentages.</strong> Include Connects, withdrawal fees, exchange rates and your win rate.</li>
<li><strong>Underpricing to get first reviews, then never raising rates.</strong></li>
<li><strong>Taking platform clients off-platform against the terms.</strong> This can get your account suspended.</li>
<li><strong>Spreading across too many platforms.</strong> Two half-finished profiles rarely beat one strong one.</li>
<li><strong>Ignoring clearance periods in cash-flow planning.</strong> Money earned is not money available.</li>
<li><strong>Recording net withdrawals as income.</strong> Keep gross earnings and fees for tax.</li>
</ul>

<p>For more on building a freelance business, browse the <a href="/blog/category/freelancing">freelancing guides</a>.</p>
`,
  },
  {
    slug: "freelancer-digital-account-pakistan",
    title: "Freelancer Digital Account in Pakistan: How to Open One",
    description:
      "How to open a freelancer digital account in Pakistan: SBP rules, the linked USD account, 50% retention of export proceeds, documents needed and common pitfalls.",
    category: "freelancing",
    jurisdiction: "Pakistan",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "receive-payment-from-abroad-pakistan",
      "how-to-start-freelancing-in-pakistan",
      "freelancer-tax-pakistan-2026",
    ],
    faqs: [
      {
        q: "What is a Freelancer Digital Account?",
        a: "A Freelancer Digital Account is a bank account for individual freelancers in Pakistan, offered by banks under a State Bank of Pakistan framework. It can be opened digitally or at a branch with simplified documentation, and an Exporters' Special Foreign Currency Account is opened alongside the rupee account so you can keep part of your foreign earnings in dollars.",
      },
      {
        q: "How much of my foreign earnings can I keep in dollars?",
        a: "Under SBP instructions issued in October 2023, freelancers can retain 50% of their export proceeds or USD 5,000 per month, whichever is higher, in their foreign currency account, and make payments from it without separate approval. The rest is converted to rupees. Check with your bank for the current limit, as SBP can revise it.",
      },
      {
        q: "Which banks offer Freelancer Digital Accounts?",
        a: "Many commercial and Islamic banks in Pakistan offer freelancer accounts, sometimes under their own product names. SBP's framework applies to banks generally rather than to a fixed list. Compare banks on app quality, debit card availability for the dollar account, conversion rates, fees and how quickly they process inward remittances before choosing.",
      },
      {
        q: "What documents do I need to open a freelancer account?",
        a: "Typically a valid CNIC, a mobile number registered in your name, biometric or digital identity verification and basic details about your freelance work, such as your platform profile or a client contract. Banks may ask for a self-declaration that your proceeds come from services you provide. Requirements vary by bank, so check its checklist before applying.",
      },
      {
        q: "Can I receive Payoneer or Upwork payments in a freelancer account?",
        a: "Generally yes. Freelancers commonly withdraw from marketplaces and Payoneer to their Pakistani bank account, and the funds arrive as inward remittances. Make sure the account title matches your name on the platform or Payoneer account, and ask your bank how it codes freelance export proceeds so they qualify for retention and the correct tax treatment.",
      },
      {
        q: "Is tax deducted on payments into a freelancer account?",
        a: "Banks usually deduct final tax on IT and IT-enabled services export proceeds received through banking channels, reported as 0.25% for freelancers registered with PSEB and 1% otherwise. Rates change with budgets, so confirm current rules with the FBR or a tax adviser. Keep bank certificates of tax deducted for your annual return.",
      },
      {
        q: "Can I use the dollar account to pay for software subscriptions?",
        a: "Yes, that is one of the main benefits. SBP advised banks to facilitate debit cards so freelancers and IT exporters can pay online from their foreign currency balances. In practice, check whether your bank issues a card on the dollar account and whether it works for international online payments before you rely on it.",
      },
      {
        q: "Is a Freelancer Digital Account the same as a Roshan Digital Account?",
        a: "No. A Roshan Digital Account is designed for non-resident Pakistanis and others who qualify under its rules. A Freelancer Digital Account is for resident individuals earning from freelance services exported abroad. The eligibility, features and purpose differ, so choose the account that matches your residency and income type, and ask your bank if you are unsure which applies.",
      },
      {
        q: "Do I need PSEB registration to open a freelancer account?",
        a: "Not usually. Banks open freelancer accounts for individuals without PSEB registration. PSEB registration mainly matters for tax, because it is reported as the condition for the lower withholding rate on IT export proceeds. You can open the bank account first and register with PSEB later if your income grows and the lower rate saves more than the registration cost.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A freelancer digital account in Pakistan is a bank account opened online or at a branch under State Bank of Pakistan rules, with a linked dollar account (ESFCA). Freelancers can keep 50% of export proceeds or USD 5,000 a month, whichever is higher, in dollars. You usually need a CNIC, a registered mobile number and proof of freelance work.</p>

<p>For Pakistani freelancers, getting paid is often harder than winning the work. Money from clients abroad needs to reach a Pakistani bank account through proper channels, be recognized as export proceeds and ideally not all be converted to rupees immediately. The State Bank of Pakistan (SBP) created a framework for freelancer bank accounts to make this easier. This guide explains what the account is, the retention rules, how to open one, which documents banks ask for and how it fits with platforms, Payoneer and tax. Rules here were checked against SBP publications as of October 2026; confirm details with your bank before applying.</p>

<h2>What is a Freelancer Digital Account?</h2>

<p>In October 2023, SBP issued a framework for freelancers' bank accounts through <a href="https://www.sbp.org.pk/circulars/bprd-circular-no-05-of-2023" target="_blank" rel="noopener noreferrer">BPRD Circular No. 05 of 2023</a>, alongside foreign exchange instructions on retention of export proceeds. Under that framework:</p>
<ul>
<li>Freelancers can open accounts <strong>digitally or physically</strong>, with minimum documentation.</li>
<li>An <strong>Exporters' Special Foreign Currency Account (ESFCA)</strong> is opened at the same time as the primary rupee (PKR) account.</li>
<li>Freelancer digital accounts opened before the framework are treated as falling under it.</li>
<li>Banks are advised to facilitate onboarding of prospective freelancers.</li>
</ul>

<p>In plain terms, the framework tells banks to make it easy for individual freelancers to bank their foreign earnings, rather than treating them like unusual or high-risk customers. It does not create a new tax benefit on its own; tax treatment depends on how the proceeds are received and on your registration status. Banks market the product under different names, such as "freelancer account" or "freelancer digital account", but the underlying SBP rules are similar. It is designed for <strong>resident individuals</strong> earning from services exported abroad, such as software, design, writing, marketing and virtual assistance.</p>

<h2>Retention of export proceeds: the 50% rule</h2>

<p>The main benefit of the linked ESFCA is that you do not have to convert all your foreign earnings to rupees. SBP's October 2023 announcement allowed freelancers to retain <strong>50% of their export proceeds or USD 5,000 per month, whichever is higher</strong>, in their ESFCA and to make payments from it without approval from SBP or banks. SBP also advised banks to facilitate debit cards so balances can be used for online payments.</p>

<h3>Worked example: how much you can keep in dollars</h3>

<p>The amounts below are illustrative and assume the October 2023 limits still apply to your bank.</p>

<table>
<thead>
<tr><th>Monthly receipts</th><th>50% of receipts</th><th>Higher of 50% or $5,000</th><th>Retainable in USD</th><th>Converted to PKR</th></tr>
</thead>
<tbody>
<tr><td>$1,200</td><td>$600</td><td>$5,000</td><td>$1,200 (all of it)</td><td>$0</td></tr>
<tr><td>$8,000</td><td>$4,000</td><td>$5,000</td><td>$5,000</td><td>$8,000 − $5,000 = $3,000</td></tr>
<tr><td>$14,000</td><td>$7,000</td><td>$7,000</td><td>$7,000</td><td>$14,000 − $7,000 = $7,000</td></tr>
</tbody>
</table>

<p>Now add tax. If your bank deducts final tax at the reported 1% rate (non-PSEB) on $14,000, that is $14,000 × 1% = $140. At the reported 0.25% rate for PSEB-registered freelancers, it would be $14,000 × 0.25% = $35, a difference of $105 that month. Our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax guide for Pakistan</a> explains these rates and the conditions in more detail.</p>

<h2>Who can open a freelancer account</h2>

<p>In general, you are a good fit if you:</p>
<ul>
<li>Are a Pakistani resident with a valid CNIC.</li>
<li>Earn, or are starting to earn, from clients abroad as an individual freelancer.</li>
<li>Receive payments through platforms, Payoneer, international transfer services or direct bank wires.</li>
</ul>

<p>If you live abroad, a Roshan Digital Account may be more relevant. If you operate through a registered company, a business current account and corporate ESFCA are usually more appropriate than an individual freelancer account.</p>

<h2>How to open a freelancer digital account: step by step</h2>

<ol>
<li><strong>Compare banks.</strong> Look at the mobile app, whether the dollar account comes with an international debit card, conversion spreads, account charges and how quickly inward remittances are credited.</li>
<li><strong>Start the application.</strong> Use the bank's app or website for digital onboarding, or visit a branch.</li>
<li><strong>Verify your identity.</strong> Banks typically use NADRA biometric or digital verification against your CNIC and mobile number.</li>
<li><strong>Describe your freelance work.</strong> Expect questions about your services, platforms, expected monthly receipts and countries of clients.</li>
<li><strong>Sign the self-declaration.</strong> SBP's instructions allow banks to process freelancers' export proceeds on a self-declaration basis where contracts are not available.</li>
<li><strong>Confirm the ESFCA is opened</strong> alongside the PKR account, and request a debit card for it if available.</li>
<li><strong>Link your payout methods.</strong> Add the account (and its IBAN) to your platform, Payoneer or transfer service profile, with your name exactly as on the bank account.</li>
</ol>

<h2>Documents checklist</h2>

<p>Exact requirements vary by bank, but prepare:</p>
<ul>
<li>Original valid CNIC.</li>
<li>Mobile number registered in your own name.</li>
<li>Proof of freelance activity, such as a platform profile link, client contract, recent invoices or Payoneer statements.</li>
<li>Source of income and expected monthly receipts.</li>
<li>NTN, if you are registered with the FBR (often optional at opening, but useful).</li>
<li>PSEB registration certificate, if you have one.</li>
</ul>

<p>Sending clients clear invoices also helps your bank records. The <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> creates a PDF in your browser with your bank details, IBAN and a USD or other currency total. It does not open accounts, receive payments or report to banks.</p>

<h2>Freelancer account vs other options</h2>

<table>
<thead>
<tr><th>Option</th><th>Who it is for</th><th>Foreign currency retention</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Freelancer digital account with ESFCA</td><td>Resident individual freelancers</td><td>50% or $5,000 a month, whichever is higher</td><td>Simplified onboarding under SBP framework</td></tr>
<tr><td>Ordinary PKR savings or current account</td><td>Anyone</td><td>None; inflows converted to PKR</td><td>Works, but no dollar retention</td></tr>
<tr><td>Roshan Digital Account</td><td>Non-resident Pakistanis and other eligible persons</td><td>Different rules</td><td>Not designed for resident freelancers</td></tr>
<tr><td>Corporate account with ESFCA</td><td>Registered IT companies</td><td>Exporter rules apply</td><td>Needs company documents and invoices</td></tr>
</tbody>
</table>

<h2>How money reaches the account</h2>

<p>Freelancers commonly receive funds through marketplace withdrawals, Payoneer withdrawals to a local bank, international transfer services where available, and direct SWIFT wires from clients. Our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a> compares these routes, and <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> looks at fees and rates. For direct clients, send an invoice in their currency with your IBAN and SWIFT code; see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<p>For local rupee payments from Pakistani clients, the same PKR account can receive instant transfers; see <a href="/blog/raast-business-payments-pakistan">Raast for business payments</a>.</p>

<h2>Using the dollar balance in your ESFCA</h2>

<p>Holding part of your earnings in dollars is useful only if you can spend or convert them sensibly. Common uses include:</p>
<ul>
<li><strong>Paying for tools.</strong> Software subscriptions, hosting, design assets and online courses billed in dollars can be paid from the ESFCA with a debit card where your bank issues one, avoiding a PKR-to-USD conversion on top of the earlier USD-to-PKR conversion.</li>
<li><strong>Timing conversions.</strong> You can convert to rupees when you need them rather than the day the money arrives. This is a cash-management choice, not a way to predict exchange rates; keep enough in PKR for living costs and tax.</li>
<li><strong>Paying overseas suppliers or subcontractors</strong> for work connected to your business, within the bank's and SBP's rules on outward payments.</li>
</ul>

<p>Ask your bank about any charges on the ESFCA itself, such as card issuance fees, foreign transaction fees and charges for outward remittances. These differ more between banks than the basic account features do.</p>

<h2>Records to keep for your freelancer digital account</h2>

<p>Good records make tax filing easier and help if your bank ever asks about the source of funds:</p>
<ul>
<li>Monthly bank statements for both the PKR account and the ESFCA.</li>
<li>Withholding tax certificates issued by the bank on export proceeds.</li>
<li>Platform earnings reports and Payoneer or transfer-service statements that match each inward remittance.</li>
<li>Copies of invoices you sent to direct clients, in the currency you billed.</li>
<li>Any proceeds realization certificates or similar documents your bank issues.</li>
</ul>

<p>Keep them together by month. When you file your annual return, these records support your income figures and the tax already deducted, which matters for staying on the <a href="/blog/active-taxpayer-list-pakistan">Active Taxpayer List</a>. If you bill clients in dollars, our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> explains how to show the currency and payment details clearly.</p>

<h2>First month after opening: a quick setup plan</h2>

<ol>
<li>Update your bank details on every platform and payout service, then do a small test withdrawal.</li>
<li>Check that the first inward remittance shows the expected tax deduction and lands with the correct purpose coding.</li>
<li>Split the funds as you intend: keep a dollar balance for tools and convert the rest for expenses.</li>
<li>Download the first statement and tax certificate and start your monthly records folder.</li>
<li>Decide whether PSEB and FBR registration make sense for your income level.</li>
</ol>

<h2>Common mistakes</h2>

<ul>
<li><strong>Name mismatches.</strong> If your Payoneer or platform name differs from the bank account title, transfers can be delayed or returned.</li>
<li><strong>Using informal channels.</strong> Money received through hawala or personal transfers may not count as export proceeds and can create problems with your bank and tax treatment.</li>
<li><strong>Not asking how proceeds are coded.</strong> Ask the bank to classify freelance receipts correctly as IT or IT-enabled services exports.</li>
<li><strong>Assuming retention limits never change.</strong> SBP can revise them; check with your bank.</li>
<li><strong>Ignoring tax certificates.</strong> Download withholding certificates for your annual return and to stay on the Active Taxpayer List.</li>
<li><strong>Converting everything immediately.</strong> If you pay for software or tools in dollars, keeping a balance in the ESFCA can avoid double conversion.</li>
</ul>

<h2>Next steps</h2>

<p>If you are just starting, read <a href="/blog/how-to-start-freelancing-in-pakistan">how to start freelancing in Pakistan</a> for the full setup, from skills to tax registration. For more practical guides, browse the <a href="/blog/category/freelancing">freelancing section</a>. This article is general information, not financial or tax advice; banking and tax rules change, so verify details with your bank, SBP and the FBR.</p>
`,
  },
  {
    slug: "cold-email-for-freelancers",
    title: "Cold Email for Freelancers: Templates That Get Replies",
    description:
      "Cold email for freelancers: how to find prospects, write short personal pitches, follow up without spamming, and stay within CAN-SPAM, GDPR and PECR rules.",
    category: "freelancing",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-get-clients-as-a-freelancer",
      "freelance-proposal-template",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "Does cold emailing still work for freelancers?",
        a: "It can, when emails are short, personal and sent to well-chosen prospects. Mass, generic emails tend to be ignored or flagged as spam. Freelancers usually get better results by researching a small number of businesses that clearly need their skill, referencing something specific about each one and offering a concrete, low-risk next step.",
      },
      {
        q: "How long should a cold email be?",
        a: "Short enough to read in under a minute, often around 50 to 125 words. Cover who you are, why you are writing to them specifically, what you can help with, one piece of proof and a simple question. Long emails with full service lists and pricing tables tend to get skimmed or ignored.",
      },
      {
        q: "How many follow-ups should I send?",
        a: "One to three polite follow-ups spaced several days apart is a common approach. Each should add something new, such as a relevant example or idea, rather than just asking if they saw your email. If someone asks you to stop or unsubscribe, stop immediately and record the request so they are never emailed again by mistake.",
      },
      {
        q: "Is cold emailing legal?",
        a: "In many countries, yes, if you follow the rules. In the US, CAN-SPAM requires honest headers and subject lines, a valid postal address and a working opt-out. In the UK, PECR generally lets you email corporate addresses without prior consent but treats sole traders like consumers, and UK GDPR still applies. EU rules vary by country. Check local guidance.",
      },
      {
        q: "Where do freelancers find email addresses?",
        a: "Common sources include the prospect's website contact or team page, professional profiles, industry directories and introductions. Prefer published business addresses and role addresses where appropriate. Avoid buying lists, which often contain outdated or improperly collected data and can damage your sender reputation and legal position. Note where you found each address in case a recipient asks.",
      },
      {
        q: "Should I include my rates in a cold email?",
        a: "Usually not in the first email. Prices without context invite quick rejection. Instead, show you understand the prospect's situation and suggest a short call or a small first project. Share pricing once you know the scope. You can mention a starting price range if your service is standardized and buyers expect it.",
      },
      {
        q: "What subject lines work for cold emails?",
        a: "Plain, specific subject lines tend to work better than clever or salesy ones, for example 'Question about your product pages' or 'Idea for your onboarding emails'. Avoid all caps, misleading phrases like 'Re:' on a first email, and spam-trigger wording. CAN-SPAM prohibits deceptive subject lines in commercial email, so keep the subject consistent with what the message actually says.",
      },
      {
        q: "How many cold emails should a freelancer send per day?",
        a: "Quality matters more than volume. Many freelancers send a handful of researched emails per day from their normal business address. Sending large volumes from a new domain can hurt deliverability. Start small, track replies and adjust your targeting and message before increasing volume. Ten well-researched emails usually beat a hundred generic ones sent in a rush.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cold email for freelancers works best when you send short, personal messages to a small list of businesses that clearly need your skill. Mention something specific about them, offer one relevant result, ask a simple question and follow up politely once or twice. Include your identity, a postal address where required and an easy opt-out.</p>

<p>Waiting for clients to find you on platforms or through referrals can leave long gaps between projects. Cold outreach puts you in control: you choose who you want to work with and contact them directly. Done badly, it is spam. Done well, it is a short, relevant note from a specialist who has noticed a real opportunity. This guide covers finding prospects, writing emails, templates, follow-ups, the legal basics in the US, UK and EU, and how to track results. For the bigger picture on client acquisition, see our guide to <a href="/blog/how-to-get-clients-as-a-freelancer">getting clients as a freelancer</a>.</p>

<h2>Why cold outreach works for freelancers</h2>

<p>Most small businesses do not post jobs for every problem they have. A company with slow product pages, an outdated blog or a confusing onboarding flow may not be looking for help, but it may welcome it when someone points out a specific fix. A well-targeted pitch reaches buyers before they post on marketplaces, where you would compete with dozens of proposals. It also tends to attract clients who value expertise rather than the lowest bid.</p>

<h2>Step 1: Choose a narrow target</h2>

<p>Pick one niche and one problem you solve well. "Web designer" is broad; "speeding up Shopify stores for skincare brands" is easy to research and pitch. Then build a short list:</p>
<ul>
<li>20 to 50 businesses that fit your niche.</li>
<li>The right person at each: founder, marketing lead or product manager, depending on size.</li>
<li>One specific observation per business, such as a slow page, an inactive blog or a missing translation.</li>
</ul>

<p>Use published business contact details from company websites, team pages and professional profiles. Avoid bought lists: they are often outdated, may not be lawfully collected and can hurt your deliverability.</p>

<h2>Step 2: Write the email</h2>

<p>A strong cold email has five parts and fits on a phone screen:</p>

<table>
<thead>
<tr><th>Part</th><th>Purpose</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Subject line</td><td>Specific and honest</td><td>"Question about your checkout page"</td></tr>
<tr><td>Personal opener</td><td>Show you looked</td><td>"I noticed your product pages take a while to load on mobile."</td></tr>
<tr><td>Value</td><td>What you could change</td><td>"I help skincare brands speed up Shopify stores."</td></tr>
<tr><td>Proof</td><td>One relevant result or sample</td><td>"Here is a before/after from a recent project."</td></tr>
<tr><td>Call to action</td><td>One easy next step</td><td>"Worth a 15-minute call next week?"</td></tr>
</tbody>
</table>

<h2>Cold email templates for freelancers</h2>

<p>Adapt these; do not send them word for word. The personal line is what earns a reply.</p>

<h3>1. The specific observation</h3>

<p><em>Subject: Quick idea for [Company] product pages</em></p>
<p><em>Hi [Name],</em></p>
<p><em>I was looking at [Company]'s store and noticed [specific issue, e.g. product pages take around 6 seconds to load on mobile].</em></p>
<p><em>I am a freelance [role] who helps [niche] businesses fix exactly this. For [past client or project type], I [specific result, described honestly].</em></p>
<p><em>Would it be useful if I sent over two or three quick fixes I would start with?</em></p>
<p><em>[Your name] | [Website or portfolio] | [Business postal address]</em></p>
<p><em>If you would rather not hear from me again, just reply "no thanks" and I will not follow up.</em></p>

<h3>2. The trigger event</h3>

<p><em>Subject: Congrats on the [launch / funding / new location]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>Saw that [Company] just [event]. Usually that means [related need, e.g. a lot of new content to write].</em></p>
<p><em>I write [type of content] for [niche] companies. Here is a recent example: [link].</em></p>
<p><em>If extra writing help would be useful over the next few months, I would be happy to share how I usually work.</em></p>
<p><em>[Signature with address and opt-out line]</em></p>

<h3>3. The agency or partner pitch</h3>

<p><em>Subject: Overflow [skill] support for [Agency]</em></p>
<p><em>Hi [Name],</em></p>
<p><em>I am a freelance [skill] specialist and noticed [Agency] works with [type of client]. When projects pile up, I can take on [specific deliverables] under your brand, with fast turnaround.</em></p>
<p><em>Portfolio: [link]. Open to a short call to see if there is a fit?</em></p>
<p><em>[Signature with address and opt-out line]</em></p>

<h3>4. Follow-up (send 4 to 7 days later)</h3>

<p><em>Subject: Re: Quick idea for [Company] product pages</em></p>
<p><em>Hi [Name], following up in case this got buried. One quick fix I would try first: [concrete idea]. Happy to share the rest if useful.</em></p>
<p><em>[Your name]</em></p>

<p>Using "Re:" is only honest when it really is a reply in the same thread. Do not use it on a first email to fake familiarity.</p>

<h2>Deliverability basics</h2>

<p>A great cold email is useless if it lands in spam. A few habits help your messages reach the inbox:</p>
<ul>
<li><strong>Send from a real business domain</strong> with a proper signature, not a free address with a random name.</li>
<li><strong>Set up email authentication</strong> (SPF, DKIM and DMARC) on your domain. Most email hosts publish simple setup instructions.</li>
<li><strong>Send in small, steady batches</strong> rather than hundreds at once, especially from a new domain.</li>
<li><strong>Keep links to a minimum.</strong> One portfolio link is enough; avoid link shorteners.</li>
<li><strong>Write plain text.</strong> Heavy formatting, images and tracking pixels can make messages look like bulk marketing.</li>
<li><strong>Remove bounces and opt-outs</strong> promptly so you are not repeatedly emailing dead or unwilling addresses.</li>
</ul>

<h2>How to personalize in ten minutes</h2>

<p>The personal line is what separates cold email for freelancers that gets replies from emails that get deleted. You do not need an hour of research per prospect. Spend about ten minutes on:</p>
<ol>
<li>Their website: the homepage, a product or service page and their most recent blog post or news item.</li>
<li>Their public profiles: a recent post from the founder or marketing lead.</li>
<li>One problem you can see and fix, written in a single sentence without criticism.</li>
</ol>

<p>"Your blog has not been updated since March" sounds like criticism. "I noticed your last article on onboarding did well; I write follow-up pieces like that for SaaS teams" sounds like help.</p>

<h2>Worked example: what a small campaign can look like</h2>

<p>Results vary widely, and the rates below are illustrative assumptions, not benchmarks.</p>
<ul>
<li>Emails sent: 10 per working day × 5 days × 12 weeks = <strong>600 emails</strong></li>
<li>Illustrative reply rate of 5%: 600 × 0.05 = <strong>30 replies</strong></li>
<li>Illustrative 30% of replies turning into calls: 30 × 0.30 = <strong>9 calls</strong></li>
<li>Illustrative 1 in 3 calls becoming clients: 9 ÷ 3 = <strong>3 new clients</strong></li>
<li>If each client's first project is $1,500: 3 × $1,500 = <strong>$4,500</strong> in first projects</li>
</ul>

<p>The useful part is the funnel, not the numbers. If replies are low, fix targeting and the opener. If calls do not convert, improve your offer, your <a href="/blog/freelance-proposal-template">freelance proposal</a> and how you <a href="/blog/how-to-set-freelance-rates">set your freelance rates</a>.</p>

<h2>Legal basics: CAN-SPAM, GDPR and PECR</h2>

<p>This is a general overview, not legal advice. Rules depend on where you and your recipients are.</p>

<p><strong>United States (CAN-SPAM).</strong> CAN-SPAM covers commercial email, including business-to-business messages. According to the <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer">FTC's CAN-SPAM compliance guide</a>, you must not use false or misleading header information or deceptive subject lines, you must identify the message as an ad where required, include a valid physical postal address, provide a clear way to opt out and honor opt-outs within 10 business days. Penalties can be substantial per violating email.</p>

<p><strong>United Kingdom (PECR and UK GDPR).</strong> The <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/" target="_blank" rel="noopener noreferrer">ICO's business-to-business marketing guidance</a> explains that PECR's consent rules for marketing emails do not generally apply to corporate subscribers such as limited companies and LLPs, but you must say who you are and give a valid address for opt-outs. Sole traders and some partnerships are treated as individual subscribers, so you usually need consent or the soft opt-in for them. UK GDPR still applies to named individuals' data, so you need a lawful basis (often legitimate interests) and should tell people how you got their details.</p>

<p><strong>European Union.</strong> GDPR applies to personal data, and national ePrivacy rules on B2B email differ between member states; some are stricter than the UK. Check the rules in the recipient's country before emailing.</p>

<p>Practical rules that keep you on the safe side almost everywhere: send from your real name and domain, use honest subject lines, include your business address and an opt-out line, stop when asked, keep a suppression list and email only people whose role makes your offer relevant.</p>

<h2>Tracking and next steps after a reply</h2>

<p>Track each prospect in a simple spreadsheet: name, company, date sent, follow-ups, reply and outcome. When someone says yes, move quickly: confirm scope with a <a href="/blog/statement-of-work-template">statement of work</a>, agree terms in a <a href="/blog/freelance-contract-template">freelance contract</a> and request a deposit for new clients. Then bill professionally using the <a href="/invoice-generator">free invoice generator</a>, which builds a PDF invoice in your browser with your payment details. It does not send cold emails or manage outreach, so use your own email account for that.</p>

<h2>Cold email checklist</h2>

<ul>
<li>One niche and one clear problem you solve.</li>
<li>Researched list from published business contact details, no bought lists.</li>
<li>A specific, personal first line for every email.</li>
<li>One proof point or portfolio link.</li>
<li>One simple call to action.</li>
<li>Honest subject line, your real name and domain.</li>
<li>Postal address and opt-out line in the signature.</li>
<li>No more than two or three follow-ups, each adding value.</li>
<li>Opt-out requests honored and recorded.</li>
<li>Results tracked weekly.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Writing about yourself instead of them.</strong> Lead with their situation, not your biography.</li>
<li><strong>Attaching files to a first email.</strong> Attachments can trigger spam filters; link to a portfolio instead.</li>
<li><strong>Mass sending from a new domain.</strong> This can damage deliverability quickly.</li>
<li><strong>Fake familiarity.</strong> "Re:" or "As discussed" on a first email erodes trust and can be deceptive.</li>
<li><strong>Ignoring opt-outs.</strong> Stop immediately when someone asks.</li>
<li><strong>Pitching everything.</strong> One service per email is clearer than a menu.</li>
<li><strong>Giving up after one week.</strong> Judge results over several weeks and adjust.</li>
</ul>

<p>For more on winning and keeping clients, browse the <a href="/blog/category/freelancing">freelancing guides</a>.</p>
`,
  },
];
