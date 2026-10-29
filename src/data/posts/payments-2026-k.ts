import type { PostDraft } from "../blog";

export const PAYMENTS_2026_K_POSTS: PostDraft[] = [
  {
    slug: "how-long-does-ach-take",
    title: "How Long Does ACH Take? Standard vs Same-Day (2026)",
    description:
      "How long does ACH take? Standard ACH usually settles in 1 to 2 business days and Same Day ACH within hours. See cutoffs, holds, holidays and a payment timeline.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-accept-ach-payments", "ach-vs-wire-transfer", "ach-debit-vs-ach-credit"],
    faqs: [
      {
        q: "Why does my ACH payment say pending for days?",
        a: "Pending usually means your bank has received or initiated the entry but settlement has not finished, or the bank is applying a hold. Payments started after the cutoff, on a weekend or on a federal holiday wait for the next banking day. New accounts, large amounts and first payments from a new payer are more likely to be held for review. Ask your bank which applies.",
      },
      {
        q: "Do ACH transfers go through on weekends?",
        a: "No. The ACH network settles only on business days when the Federal Reserve is open, so nothing settles on Saturdays, Sundays or federal holidays. You can often schedule or submit a payment in your banking app over the weekend, but it is processed on the next banking day. If you need money to move on a weekend, an instant payment through FedNow or RTP, if both banks support it, is the alternative.",
      },
      {
        q: "Is Same Day ACH really the same day?",
        a: "Yes, if the payment is submitted before one of the Same Day ACH deadlines on a banking day, is under the $1 million per-payment limit, and both banks process it on that schedule. If the originating bank does not offer Same Day ACH to you, or you submit after the last window, the payment becomes next-day. Some banks charge a premium fee for the same-day option.",
      },
      {
        q: "How long does an ACH refund or return take?",
        a: "Most ACH returns for reasons such as insufficient funds or a closed account must be sent within two banking days of settlement, so the original sender typically sees the money back within a few business days. Consumers can dispute unauthorized debits for much longer, up to 60 calendar days after settlement under Nacha rules, which is why businesses that pull payments from customers carry some return risk.",
      },
      {
        q: "Is ACH faster than a check?",
        a: "Usually, yes. An ACH credit typically arrives in one to two business days with no mailing time, while a mailed check can take several days in the post plus deposit and clearing time, and can bounce after you have deposited it. ACH also reduces the risk of lost or stolen checks, which is one reason the US government and many businesses are moving away from paper checks.",
      },
      {
        q: "How long does ACH take for direct deposit payroll?",
        a: "Payroll providers usually submit direct deposit files one to two banking days before payday so employees have funds on the morning of payday. Nacha rules require receiving banks to make funds from standard credits available by 9 a.m. local time on the settlement date when the file arrived in time. Faster payroll options use Same Day ACH, often for an extra fee from the provider.",
      },
      {
        q: "Can I speed up an ACH payment that is already pending?",
        a: "Usually not. Once an ACH entry has been sent to the network, its settlement date is set, and neither bank can make it settle sooner. If timing is critical, you would need to cancel the entry if your bank allows it and send a wire or instant payment instead, which risks double payment. Plan ahead and send early.",
      },
      {
        q: "Why is my bank holding an ACH deposit after it settled?",
        a: "Banks can apply holds for risk reasons, such as a new account, an unusually large deposit, or a pattern that looks like fraud. Holds on ACH credits are less common than on checks but do happen. Your bank's funds availability policy explains when it may delay availability. If holds keep affecting your business, ask the bank about your account history and limits.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A standard ACH transfer usually takes one to two business days to settle. Same Day ACH can settle within hours if it is submitted before a processing deadline on a banking day and is under $1 million. Weekends, federal holidays, late submission and bank holds can add a day or more.</p>

<p>If you invoice clients and ask them to pay by bank transfer, knowing how long ACH takes helps you set due dates, plan cash flow and answer the inevitable "I sent it, where is it?" email. This guide explains what ACH is, how standard and Same Day ACH differ, how cutoff times and holidays affect timing, and what to do when a payment is late. It also includes a worked timeline you can use with clients.</p>

<h2>What is ACH?</h2>
<p>ACH (Automated Clearing House) is the US network that moves electronic payments between bank accounts in batches. It is governed by the Nacha Operating Rules and operated by two ACH operators: the Federal Reserve (FedACH) and The Clearing House (EPN). Direct deposit payroll, bill autopay, vendor payments and many "pay by bank" options run on ACH.</p>
<p>There are two directions:</p>
<ul>
<li><strong>ACH credit:</strong> the payer pushes money to you, such as a client paying your invoice from their bank's bill pay.</li>
<li><strong>ACH debit:</strong> you (or your processor) pull money from the payer's account with their authorization, such as autopay for a subscription.</li>
</ul>
<p>Our guide to <a href="/blog/ach-debit-vs-ach-credit">ACH debit vs ACH credit</a> explains which suits your invoices, and <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> covers setup.</p>

<h2>How long does standard ACH take?</h2>
<p>Under Nacha rules, the business or bank that sends an ACH entry picks an effective date. ACH credits can be scheduled to settle the same day, the next banking day, or up to two banking days later. ACH debits usually settle on the next banking day. In practice:</p>
<table><thead><tr><th>Payment type</th><th>Typical settlement</th><th>When you can usually use the money</th></tr></thead><tbody>
<tr><td>Standard ACH credit (client pays you)</td><td>1 to 2 business days</td><td>On the settlement date, often by 9 a.m. local time</td></tr>
<tr><td>Standard ACH debit (you pull payment)</td><td>Next business day</td><td>After settlement; processors may hold funds longer</td></tr>
<tr><td>Same Day ACH</td><td>Same banking day</td><td>Later that day, depending on the window</td></tr>
<tr><td>Processor-initiated ACH (Stripe, payment apps)</td><td>Often 3 to 5 business days to your payout</td><td>Depends on the provider's payout schedule</td></tr>
</tbody></table>
<p>The last row surprises many small businesses. When a client pays your invoice by "bank transfer" through a payment processor, the processor waits for the ACH debit to settle and for some return risk to pass before paying you out, so the total can be longer than a direct bank-to-bank ACH credit. Check your provider's documentation; for example, Stripe fees and payout timing vary by payment method.</p>

<h2>How long does Same Day ACH take?</h2>
<p>Same Day ACH lets banks settle eligible payments on the day they are sent. The network runs three Same Day processing windows each banking day. Reported FedACH submission deadlines are about 10:30 a.m., 2:45 p.m. and 4:45 p.m. Eastern Time, with settlement at about 1:00 p.m., 5:00 p.m. and 6:00 p.m. ET. Your own bank's cutoff for customers is earlier than the network deadline, sometimes by an hour or more.</p>
<table><thead><tr><th>Same Day window</th><th>Network submission deadline (ET)</th><th>Settlement (ET)</th></tr></thead><tbody>
<tr><td>Window 1</td><td>About 10:30 a.m.</td><td>About 1:00 p.m.</td></tr>
<tr><td>Window 2</td><td>About 2:45 p.m.</td><td>About 5:00 p.m.</td></tr>
<tr><td>Window 3</td><td>About 4:45 p.m.</td><td>About 6:00 p.m.</td></tr>
</tbody></table>
<p>Key rules for Same Day ACH, as of October 2026:</p>
<ul>
<li><strong>Per-payment limit:</strong> $1 million. Larger entries are processed on the next-day schedule. Nacha has consulted on raising the limit to $10 million, so check <a href="https://www.nacha.org/" target="_blank" rel="noopener">nacha.org</a> for the current status.</li>
<li><strong>Eligibility:</strong> Most credits and debits qualify, but international ACH (IAT) entries do not.</li>
<li><strong>Bank participation:</strong> All receiving banks must accept Same Day entries, but your bank decides whether to offer origination to you and what to charge.</li>
</ul>
<p>For more on recent rule changes, see our summary of <a href="/blog/nacha-2026-rules">Nacha rules for 2026</a>.</p>

<h2>What slows down an ACH payment?</h2>
<ol>
<li><strong>Cutoff times.</strong> A payment submitted after your bank's daily cutoff is treated as sent the next banking day.</li>
<li><strong>Weekends and federal holidays.</strong> ACH settles only on days the Federal Reserve is open. A payment sent Friday evening before a Monday holiday may not settle until Tuesday or Wednesday.</li>
<li><strong>The sender's chosen date.</strong> Some bill pay systems schedule credits to arrive on or near the due date, not as soon as possible.</li>
<li><strong>Bank holds and reviews.</strong> New accounts, large or unusual payments, and fraud screening can delay availability.</li>
<li><strong>Processor payout schedules.</strong> As above, card and payment platforms add their own timeline.</li>
<li><strong>Errors and returns.</strong> A wrong account number or closed account leads to a return, usually within two banking days, and the payer has to start again.</li>
</ol>
<p>The Federal Reserve publishes its <a href="https://www.frbservices.org/about/holiday-schedules" target="_blank" rel="noopener">holiday schedule</a>, which is worth checking before you set due dates around holidays.</p>

<h2>Worked example: when will your client's ACH payment arrive?</h2>
<p>A bookkeeping firm sends invoice INV-2026-311 for $2,850, due Friday, November 6, 2026. Here is how timing plays out under different scenarios.</p>
<table><thead><tr><th>Scenario</th><th>Client sends</th><th>Settles</th><th>On time?</th></tr></thead><tbody>
<tr><td>Standard ACH, sent before cutoff</td><td>Wednesday, Nov 4, 11 a.m.</td><td>Thursday, Nov 5 (next day)</td><td>Yes</td></tr>
<tr><td>Standard ACH, two-day effective date</td><td>Wednesday, Nov 4</td><td>Friday, Nov 6</td><td>Yes, just</td></tr>
<tr><td>Standard ACH, sent after cutoff</td><td>Thursday, Nov 5, 7 p.m.</td><td>Monday, Nov 9 or Tuesday, Nov 10</td><td>No</td></tr>
<tr><td>Same Day ACH</td><td>Friday, Nov 6, 9 a.m.</td><td>Friday, Nov 6, early afternoon</td><td>Yes</td></tr>
<tr><td>Payment before Veterans Day</td><td>Tuesday, Nov 10, after cutoff</td><td>Thursday, Nov 12 at the earliest (Nov 11 is a Fed holiday)</td><td>Already late</td></tr>
</tbody></table>
<p>The practical lesson: ask clients to send ACH payments at least two business days before the due date, and say so on the invoice. Many businesses phrase it like this: "Payment by ACH is due by November 6. Please allow two business days for processing."</p>

<h2>ACH vs wire vs instant payments: speed compared</h2>
<table><thead><tr><th>Method</th><th>Typical speed</th><th>Weekends?</th><th>Typical cost to receive</th><th>Reversible?</th></tr></thead><tbody>
<tr><td>Standard ACH</td><td>1 to 2 business days</td><td>No</td><td>Often free</td><td>Returns possible in set windows</td></tr>
<tr><td>Same Day ACH</td><td>Same banking day</td><td>No</td><td>Often free; sender may pay a fee</td><td>Returns possible</td></tr>
<tr><td>Domestic wire (Fedwire)</td><td>Same day, often within hours</td><td>No</td><td>Incoming fee varies by bank</td><td>Very rarely</td></tr>
<tr><td>FedNow / RTP instant payment</td><td>Seconds</td><td>Yes, 24/7/365</td><td>Varies by bank</td><td>Final</td></tr>
<tr><td>Mailed check</td><td>Several days plus clearing</td><td>Mail only</td><td>Low</td><td>Can bounce</td></tr>
</tbody></table>
<p>Read <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> for cost and risk details, <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> for wire timing, and <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP</a> for instant payment options.</p>

<h2>How to get paid faster by ACH</h2>
<ol>
<li><strong>Put complete bank details on the invoice:</strong> account name, bank name, routing number for ACH and account number. Our <a href="/blog/bank-details-on-invoice">bank details on invoice guide</a> shows the layout. You can add them once in our <a href="/invoice-generator">free invoice generator</a> and reuse them.</li>
<li><strong>State the processing time</strong> next to the due date.</li>
<li><strong>Ask for the invoice number</strong> in the payment reference or addenda so you can match payments quickly.</li>
<li><strong>Invoice early.</strong> Many clients run payables on a set weekly cycle; an invoice that arrives the day after their run waits a week.</li>
<li><strong>Offer a payment link</strong> with ACH as an option if clients prefer not to key in details.</li>
<li><strong>Send a confirmation</strong> as soon as funds settle. Our <a href="/blog/payment-confirmation-email">payment confirmation email</a> templates help.</li>
</ol>

<h2>ACH timing for payments you pull (ACH debits)</h2>
<p>If you collect from customers by ACH debit, for example on autopay, timing works a little differently. You or your processor submit the debit, it settles the next banking day (or the same day with Same Day ACH), and the money is in your account. But the customer's bank can still return the debit:</p>
<table><thead><tr><th>Return reason</th><th>Typical return window</th><th>What it means for you</th></tr></thead><tbody>
<tr><td>Insufficient funds (R01), closed account (R02), no account (R03)</td><td>2 banking days after settlement</td><td>Most problems surface within days</td></tr>
<tr><td>Unauthorized consumer debit (R10 and similar)</td><td>Up to 60 calendar days after settlement</td><td>A customer can dispute a debit weeks later</td></tr>
<tr><td>Corporate debit disputes</td><td>Generally 2 banking days</td><td>B2B debits carry less late-return risk</td></tr>
</tbody></table>
<p>This is why payment processors often hold ACH funds for a few days before paying out, and why high-value goods should not ship the moment an ACH debit is submitted. If you pull recurring payments, our guide to <a href="/blog/recurring-payments-small-business">recurring payments for small business</a> covers authorization rules that reduce disputes.</p>

<h2>How to word ACH timing on your invoices</h2>
<p>Clear wording prevents most "I already paid" disputes. A few examples you can adapt:</p>
<ul>
<li>"Payment due November 6, 2026. ACH payments take 1 to 2 business days; please initiate by November 4."</li>
<li>"Please include invoice number INV-2026-311 in the payment reference."</li>
<li>"For same-day payment, use Same Day ACH or wire; wire details available on request."</li>
<li>"Payments received after the due date may incur a late fee of 1.5% per month, as agreed in our terms."</li>
</ul>
<p>Keep the wording identical across invoices so clients' accounts payable teams learn your process. If clients are on <a href="/blog/net-30-payment-terms">net 30 payment terms</a>, the due date still means funds in your account, not a payment started on that day, unless your contract says otherwise.</p>

<h2>What to do if an ACH payment is late</h2>
<ul>
<li>Ask the client for the date they submitted it and the amount, plus the trace number if their bank provides one.</li>
<li>Check whether the payment landed under a different reference or was combined with other invoices.</li>
<li>Confirm the routing and account numbers they used match your invoice.</li>
<li>Check for a return. Our guide to <a href="/blog/ach-return-codes">ACH return codes</a> explains common reasons such as R03 (no account) and R04 (invalid account number).</li>
<li>If funds have settled at your bank but are on hold, ask the bank when they will be available.</li>
<li>If nothing was sent, follow your usual overdue invoice process.</li>
</ul>

<h2>Common mistakes with ACH timing</h2>
<ul>
<li><strong>Treating "sent" as "received."</strong> Mark the invoice paid only when funds settle in your account.</li>
<li><strong>Ignoring federal holidays</strong> when setting due dates near the end of a month or quarter.</li>
<li><strong>Using a wire routing number for ACH</strong> or vice versa; some banks use different numbers. See <a href="/blog/routing-number-vs-account-number">routing number vs account number</a>.</li>
<li><strong>Releasing goods on an ACH debit</strong> before the return window has passed for high-value orders.</li>
<li><strong>Changing bank details by email</strong> without a phone confirmation, which invites payment fraud.</li>
</ul>

<h2>Summary</h2>
<p>So, how long does ACH take? Plan on one to two business days for standard ACH, same day for Same Day ACH sent before the cutoff, and longer around weekends, holidays and processor payouts. Build that time into your due dates and invoice wording. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a PDF in your browser, so you can add ACH instructions and processing times to every invoice in a few clicks.</p>
`,
  },
  {
    slug: "how-to-fill-out-a-money-order",
    title: "How to Fill Out a Money Order (Step by Step + Example)",
    description:
      "How to fill out a money order from USPS, Western Union or MoneyGram, step by step, plus how businesses can accept, verify and deposit money orders safely.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["certified-check-vs-cashiers-check", "how-to-write-a-check", "invoice-scams"],
    faqs: [
      {
        q: "Can I leave the pay to line blank on a money order?",
        a: "You should not. A money order with a blank payee line works almost like cash, so anyone who finds or steals it could write in their own name and cash it. Fill in the recipient's name as soon as you buy it, using the exact legal or business name on your invoice. If you are unsure of the name, ask the recipient before you buy the money order.",
      },
      {
        q: "How much does a money order cost?",
        a: "Fees are usually a few dollars, depending on where you buy it and the amount. USPS sets its money order fees in its official price list (Notice 123), and they change from time to time. Retailers such as Walmart and grocery stores that sell Western Union or MoneyGram money orders often charge less. Banks and credit unions may offer them free or at low cost to account holders.",
      },
      {
        q: "What is the maximum amount for a money order?",
        a: "USPS domestic money orders have a $1,000 maximum per money order, and international postal money orders have a lower cap. Western Union and MoneyGram money orders sold at retailers are also commonly capped at $1,000, though individual stores may set lower limits. To pay a larger invoice, buy several money orders, and note that cash purchases of $3,000 or more in a day trigger extra ID recordkeeping.",
      },
      {
        q: "How do I fix a mistake on a money order?",
        a: "Do not cross out or write over a mistake, because alterations can make the money order look tampered with and lead a bank to refuse it. Instead, take it back to the issuer with your receipt and ask about replacing or refunding it. Expect a fee and some waiting time. Taking a few seconds to check the name and amount before you write saves the hassle.",
      },
      {
        q: "How can a business verify a money order is real?",
        a: "Check the security features the issuer describes, such as watermarks, security threads and color-shifting ink, and then call the issuer's verification line or use its online verification tool, with the serial number and amount. Do not use a phone number printed on the money order itself, because counterfeiters print fake ones. When in doubt, deposit it and wait until your bank confirms the funds are final before releasing goods.",
      },
      {
        q: "Can I track a money order?",
        a: "Yes, with the receipt. USPS lets you check the status of a postal money order online or ask for a copy of the cashed item, and Western Union and MoneyGram offer status checks using the serial number and amount. If a money order is lost or stolen, you can request a replacement or refund, but it usually involves a form, a processing fee and a waiting period.",
      },
      {
        q: "Should my business accept money orders?",
        a: "Many small landlords, contractors and service businesses accept money orders from customers who do not have bank accounts or prefer not to use cards. They are generally safer than personal checks because they are prepaid, but counterfeit money orders are a real risk. Accept them for amounts that match an invoice exactly, verify large ones, and never refund an overpayment by a different method.",
      },
      {
        q: "Can I deposit a money order with a mobile banking app?",
        a: "Many banks allow mobile deposit of money orders, but some exclude them or apply holds. Endorse the back as your bank requires, often with your signature and the words For mobile deposit only, then follow the app's instructions. Keep the original until the deposit is final. For large or unfamiliar money orders, depositing at a branch can give faster answers if there is a problem.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To fill out a money order, write the recipient's full name on the Pay To line, add your name and address in the purchaser or From section, put an account or invoice number in the memo, sign only if there is a purchaser signature line, and keep the receipt. Never leave the payee line blank.</p>

<p>Money orders are still common for rent, deposits, government fees and paying small businesses when a customer prefers not to use a bank account or card. This guide shows exactly how to fill out a money order from USPS, Western Union or MoneyGram, with an example, and then covers the other side: how a business can accept, verify and deposit money orders without getting caught by a counterfeit.</p>

<h2>What is a money order?</h2>
<p>A money order is a prepaid paper payment for a fixed amount. You pay the issuer upfront (in cash or with a debit card at most locations), plus a fee, and the issuer prints the amount on the money order. Because the money is paid in advance, a genuine money order cannot bounce the way a personal check can. Common issuers in the US are:</p>
<ul>
<li><strong>The US Postal Service</strong>, sold at post offices.</li>
<li><strong>Western Union</strong> and <strong>MoneyGram</strong>, sold at retailers such as grocery stores, pharmacies, convenience stores and Walmart.</li>
<li><strong>Banks and credit unions</strong>, often for account holders only.</li>
</ul>
<p>Money orders are different from cashier's and certified checks, which are drawn on a bank and are often used for larger amounts. See <a href="/blog/certified-check-vs-cashiers-check">certified check vs cashier's check</a> for the comparison.</p>

<h2>Money order fees and limits</h2>
<table><thead><tr><th>Issuer</th><th>Typical maximum per money order</th><th>Fee</th><th>Where to buy</th></tr></thead><tbody>
<tr><td>USPS (domestic)</td><td>$1,000</td><td>A few dollars, set in USPS Notice 123</td><td>Post offices</td></tr>
<tr><td>USPS (international)</td><td>Lower cap; varies by destination</td><td>Higher than domestic</td><td>Post offices</td></tr>
<tr><td>Western Union</td><td>Commonly $1,000 (store limits vary)</td><td>Set by the retailer</td><td>Agent locations and retailers</td></tr>
<tr><td>MoneyGram</td><td>Commonly $1,000 (store limits vary)</td><td>Set by the retailer, often low at big-box stores</td><td>Agent locations and retailers</td></tr>
<tr><td>Banks and credit unions</td><td>Set by the bank</td><td>Often free to low for members</td><td>Branches</td></tr>
</tbody></table>
<p>Check the current USPS fees on the <a href="https://www.usps.com/shop/money-orders.htm" target="_blank" rel="noopener">USPS money orders page</a>, as prices change. Fees and limits above are as of October 2026 and vary by location.</p>

<h2>How to fill out a money order: step by step</h2>
<ol>
<li><strong>Buy it for the exact amount.</strong> Tell the clerk the amount you need, such as the invoice total. The amount is printed for you, so you do not write it in.</li>
<li><strong>Fill in the Pay To line.</strong> Write the recipient's full name exactly as it appears on the invoice or bill, such as "Greenline Property Services LLC." Use ink and print clearly.</li>
<li><strong>Add the recipient's address</strong> if there is an address field for the payee (USPS money orders include one).</li>
<li><strong>Complete the From or Purchaser section.</strong> Write your own name and address so the recipient knows who paid and the issuer can contact you if needed.</li>
<li><strong>Fill in the memo or account number field.</strong> Put the invoice number, account number or unit number, such as "Invoice 1045" or "Unit 3B October rent."</li>
<li><strong>Sign only where it says purchaser or drawer.</strong> Some money orders (often Western Union and MoneyGram) have a purchaser signature line on the front. Do not sign the back; that is for the recipient's endorsement.</li>
<li><strong>Detach and keep the receipt.</strong> The stub has the serial number you need to track, replace or refund the money order.</li>
<li><strong>Deliver it safely.</strong> Hand it over in person or mail it, and keep a photo of the completed front for your records.</li>
</ol>

<h3>Example: a completed money order</h3>
<table><thead><tr><th>Field</th><th>What to write</th></tr></thead><tbody>
<tr><td>Amount</td><td>Printed by the issuer: $640.00</td></tr>
<tr><td>Pay to</td><td>Greenline Property Services LLC</td></tr>
<tr><td>Payee address</td><td>418 Oak Street, Columbus, OH 43215</td></tr>
<tr><td>From / Purchaser</td><td>Maria Lopez, 22 Elm Avenue, Columbus, OH 43206</td></tr>
<tr><td>Memo / Account no.</td><td>Invoice GPS-1045, October lawn and gutter service</td></tr>
<tr><td>Purchaser signature</td><td>Maria Lopez (only if a purchaser signature line exists)</td></tr>
</tbody></table>

<h2>How to pay an invoice larger than $1,000 by money order</h2>
<p>If an invoice is $2,350 and the issuer's maximum is $1,000, buy three money orders: $1,000, $1,000 and $350. Write the same payee name and invoice number on each. The business should record all three against the invoice and issue one <a href="/blog/payment-receipt-template">payment receipt</a> showing the three serial numbers. Note that buying $3,000 or more in money orders with cash in one day requires the seller to record your ID under federal recordkeeping rules, and seller staff may ask what the money is for. That is routine, not a sign of a problem.</p>

<h2>How businesses can accept money orders safely</h2>
<p>Accepting money orders lets you serve customers who do not use cards or bank transfers, but counterfeit and overpayment scams are common. A simple policy protects you:</p>
<ol>
<li><strong>Accept money orders only for the exact invoice amount.</strong> Never accept one for more than the invoice and refund the difference. That is the classic overpayment scam; see <a href="/blog/invoice-scams">invoice scams</a>.</li>
<li><strong>Inspect it.</strong> Look for the issuer's security features. USPS describes features such as a watermark and security thread on its money orders; Western Union and MoneyGram publish their own.</li>
<li><strong>Verify it.</strong> Use the issuer's official verification phone line or website (found independently, not from the document) with the serial number and amount.</li>
<li><strong>Check the payee name.</strong> It should be your business name. Do not accept one with a blank or altered payee line.</li>
<li><strong>Endorse and deposit promptly.</strong> Sign the back as your bank requires, add "For deposit only" and your account number if your bank recommends it.</li>
<li><strong>Wait for final funds on large amounts.</strong> A bank may make funds available quickly and still reverse the deposit later if the money order turns out to be fake.</li>
<li><strong>Record it.</strong> Note the issuer, serial number and amount against the invoice.</li>
</ol>
<p>If you list accepted payment methods on your invoices, add a line such as "Money orders accepted for the exact invoice total, payable to Greenline Property Services LLC." You can add that note in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Money order vs other payment methods</h2>
<table><thead><tr><th>Method</th><th>Needs a bank account?</th><th>Can bounce?</th><th>Cost to payer</th><th>Speed to business</th></tr></thead><tbody>
<tr><td>Money order</td><td>No</td><td>Genuine ones no; counterfeits yes</td><td>A few dollars</td><td>Mail time plus deposit</td></tr>
<tr><td>Personal check</td><td>Yes</td><td>Yes</td><td>Low</td><td>Mail time plus clearing</td></tr>
<tr><td>Cashier's check</td><td>Usually</td><td>Rarely (fakes exist)</td><td>About $10 or more</td><td>Mail time plus deposit</td></tr>
<tr><td>ACH or Zelle</td><td>Yes</td><td>ACH can be returned; Zelle rarely</td><td>Usually free</td><td>Minutes to 2 days</td></tr>
<tr><td>Card</td><td>No (credit) / Yes (debit)</td><td>Chargebacks possible</td><td>Usually free to payer</td><td>1 to 2 days payout</td></tr>
</tbody></table>
<p>For a full overview, see the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a>. If you are moving away from paper altogether, our article on the <a href="/blog/us-paper-checks-phase-out">US paper checks phase-out</a> explains the federal shift and what it means for small businesses.</p>

<h2>How to record a money order payment in your books</h2>
<p>When a customer pays an invoice with a money order, record it like any other payment, with a few extra details:</p>
<ol>
<li><strong>Log the issuer and serial number</strong> against the invoice, along with the date received.</li>
<li><strong>Record the deposit</strong> on the day you take it to the bank or deposit it by app. If you deposit several money orders and checks together, list each one so the deposit total can be traced.</li>
<li><strong>Mark the invoice paid</strong> once the deposit is final, not when the paper arrives.</li>
<li><strong>Send a receipt.</strong> Customers who pay by money order often have no bank statement to prove payment, so a <a href="/blog/payment-receipt-template">payment receipt</a> with the serial number matters more than usual.</li>
<li><strong>Keep a copy</strong> or photo of the front and back for your records until the period for disputes has passed.</li>
</ol>
<p>If a customer pays part of an invoice by money order, record the partial payment and show the remaining balance on the next statement. Our guide on <a href="/blog/partial-payment-invoice">partial payment invoices</a> shows how to present it.</p>

<h2>Money orders for landlords and service businesses</h2>
<p>Landlords, property managers, daycare providers and home service businesses are the most common businesses that still see money orders. A few practical rules make them easy to manage:</p>
<ul>
<li>State in your lease or service terms that money orders are accepted and who they should be payable to.</li>
<li>Ask tenants or clients to write the unit, account or invoice number in the memo.</li>
<li>Do not accept money orders for security deposits from people you have not met, particularly when combined with a request to refund part of it.</li>
<li>Offer an electronic alternative, such as ACH or a payment link, so customers who can switch have an easier option.</li>
</ul>
<p>If you send rent or service invoices, our <a href="/blog/rent-invoice-template">rent invoice template</a> shows how to list accepted payment methods.</p>

<h2>What if a money order is lost or stolen?</h2>
<p>Contact the issuer with your receipt. USPS lets you check status and request a replacement through a money order inquiry, and Western Union and MoneyGram have similar processes. Expect a fee and a wait of several weeks while the issuer confirms the money order has not been cashed. This is why the receipt, the serial number and a filled-in payee line matter: they are your only proof and protection.</p>

<h2>Common mistakes when filling out a money order</h2>
<ul>
<li><strong>Leaving the payee blank</strong> or writing a nickname instead of the legal or business name.</li>
<li><strong>Signing the back.</strong> The back is for the recipient's endorsement.</li>
<li><strong>Forgetting the memo.</strong> Without an invoice or account number, the business may credit the wrong account.</li>
<li><strong>Throwing away the receipt.</strong> You cannot trace or replace the money order without it.</li>
<li><strong>Correcting errors by hand.</strong> Altered money orders may be refused.</li>
<li><strong>Sending a money order to a stranger online.</strong> Scammers often ask for money orders because they are hard to reverse.</li>
</ul>
<p>The same habits that make a money order safe apply to checks; see <a href="/blog/how-to-write-a-check">how to write a check</a> for the paper-check version.</p>

<h2>Summary</h2>
<p>Learning how to fill out a money order takes two minutes: payee name, your details, the invoice number, a signature only where the purchaser line asks for it, and keep the receipt. For businesses, the key is to accept money orders for the exact invoice amount and verify them through the issuer. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a downloadable PDF in your browser, so customers always have the exact payee name and invoice number to write on their money order.</p>
`,
  },
  {
    slug: "recurring-payments-small-business",
    title: "Recurring Payments for Small Business: Autopay Setup Guide",
    description:
      "Set up recurring payments for your small business: autopay by card or ACH, customer authorization rules, handling failed payments and a worked revenue example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-invoices-guide", "billing-cycle", "saas-subscription-invoice-template"],
    faqs: [
      {
        q: "What is the difference between recurring payments and recurring invoices?",
        a: "A recurring invoice is a bill sent on a schedule, which the customer still has to pay each time. A recurring payment, or autopay, charges the customer's card or bank account automatically on a schedule after they authorize it once. Many businesses combine them: an invoice or receipt is generated for each billing cycle as a record, and the payment is taken automatically on the same day.",
      },
      {
        q: "Do I need written permission to charge a customer automatically?",
        a: "Yes, you need clear authorization. For recurring ACH debits from consumer accounts, Nacha rules and Regulation E require a written or similarly authenticated authorization, and the customer must get a copy. For cards, network rules require you to get consent to store the card and disclose the amount, frequency and how to cancel. Keep proof of each authorization for as long as you charge the customer and afterwards.",
      },
      {
        q: "Is ACH or card better for recurring payments?",
        a: "ACH usually costs less, especially on larger amounts, and bank accounts expire less often than cards. Cards are easier for customers to set up, approve instantly, and work well for lower amounts and consumer subscriptions. Many businesses offer both and encourage ACH for high-value B2B retainers. Expect more failed or disputed payments with cards, and slower settlement and return risk with ACH.",
      },
      {
        q: "What happens if a recurring payment fails?",
        a: "Most billing systems retry the charge automatically over several days and email the customer to update their payment method. If retries fail, you decide whether to pause service, send an invoice for manual payment or cancel. Set this process, known as dunning, in advance, and include it in your terms so customers know what happens after a failed payment.",
      },
      {
        q: "Can customers cancel recurring payments at any time?",
        a: "Customers can usually stop future ACH debits by notifying you or their bank, and card customers can dispute charges or ask their bank to block a merchant. Your contract may set a notice period for ending the service itself, but you should honor requests to stop payments promptly. Several states have automatic renewal laws that require easy cancellation for consumer subscriptions.",
      },
      {
        q: "How do I handle price increases on recurring payments?",
        a: "Give customers clear advance notice in writing before the new price takes effect, and explain how to cancel if they do not agree. Card network rules and many state laws require notice for changes to subscription terms, and ACH rules require notice when debit amounts vary. A notice of at least 30 days is a common practice. Update the authorization if your agreement or the law requires it.",
      },
      {
        q: "Are recurring payments safe for my customers?",
        a: "Yes, when you use a reputable payment processor that stores card and bank details securely and is PCI compliant. Your business should never store full card numbers in spreadsheets, emails or notes. Using a processor's hosted payment pages or customer portal keeps sensitive data off your systems and reduces your own compliance burden.",
      },
      {
        q: "Do I still need to send invoices if customers are on autopay?",
        a: "It is good practice and often required. Business customers usually need an invoice for their accounts payable and tax records, and in VAT and GST countries a valid tax invoice may be mandatory. Consumers benefit from a receipt for each charge. Most billing tools send these automatically, or you can create them with an invoice generator for each billing cycle.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Recurring payments let you charge a customer's card or bank account automatically on a set schedule, such as monthly, after they authorize it once. To set them up, choose a processor that supports subscriptions or autopay, get a clear written authorization, send a receipt or invoice for each charge, and plan how you will handle failed payments.</p>

<p>For businesses with retainers, memberships, maintenance plans or subscriptions, recurring payments are one of the simplest ways to improve cash flow and cut down on chasing invoices. This guide explains how recurring payments work, compares card and ACH autopay, covers the authorization rules you need to follow, and shows how to handle failed payments, with a worked example of the cash flow impact.</p>

<h2>What are recurring payments?</h2>
<p>A recurring payment is a charge that repeats on a schedule using payment details the customer has authorized you, or your processor, to store. Common examples include:</p>
<ul>
<li>Monthly retainers for bookkeeping, marketing or IT support.</li>
<li>Gym and studio memberships (see our <a href="/blog/gym-membership-invoice-template">gym membership invoice template</a>).</li>
<li>Lawn care, pool cleaning or pest control plans.</li>
<li>Software subscriptions (see the <a href="/blog/saas-subscription-invoice-template">SaaS subscription invoice template</a>).</li>
<li>Installment plans for larger purchases.</li>
</ul>
<p>Payments can be <strong>fixed</strong> (the same amount every period) or <strong>variable</strong> (usage-based, such as hours or metered services). Variable payments need extra care with authorization and notice, as covered below.</p>
<p>Recurring payments are closely related to recurring invoices. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers the billing side, and our article on the <a href="/blog/billing-cycle">billing cycle</a> explains how to choose dates and periods.</p>

<h2>Recurring payment methods compared</h2>
<table><thead><tr><th>Method</th><th>Typical cost (illustrative)</th><th>Setup for customer</th><th>Main risks</th><th>Best for</th></tr></thead><tbody>
<tr><td>Card on file</td><td>About 2.5% to 3.5% plus a fixed fee per charge</td><td>Enter card once</td><td>Expired cards, declines, chargebacks</td><td>Consumer subscriptions, smaller amounts</td></tr>
<tr><td>ACH debit</td><td>Often under 1% or a flat fee, with caps at many processors</td><td>Enter bank details and authorize</td><td>Returns for insufficient funds, slower settlement</td><td>B2B retainers, larger amounts</td></tr>
<tr><td>Direct Debit (UK) / SEPA Direct Debit (EU)</td><td>Low per-transaction fees</td><td>Sign a mandate</td><td>Indemnity claims</td><td>UK and EU customers</td></tr>
<tr><td>Customer-scheduled bank transfer</td><td>Free to you</td><td>Customer sets up a standing order</td><td>Customer can stop or forget it</td><td>Simple fixed retainers</td></tr>
</tbody></table>
<p>Check your processor's current pricing; our breakdowns of <a href="/blog/stripe-fees">Stripe fees</a> and credit card processing fees help. UK and EU businesses should also read <a href="/blog/uk-direct-debit">UK Direct Debit</a> and <a href="/blog/sepa-direct-debit">SEPA Direct Debit</a>.</p>

<h2>How to set up recurring payments (step by step)</h2>
<ol>
<li><strong>Define the plan.</strong> Price, billing frequency, billing date, what is included, minimum term, notice period for cancellation and what happens with failed payments.</li>
<li><strong>Choose a processor.</strong> Look for subscription or autopay features, a customer portal for updating payment details, card account updater support, automatic retries and receipts. Many invoicing and payment tools offer these, including Stripe, Square and PayPal, as well as accounting software.</li>
<li><strong>Write the terms.</strong> Put the recurring terms in your service agreement. Our service agreement template has a payment section you can adapt.</li>
<li><strong>Collect authorization.</strong> Use the processor's hosted checkout or authorization form so the customer agrees to the amount, frequency and cancellation terms, and receives a copy.</li>
<li><strong>Schedule the first charge.</strong> Decide whether to charge on signup, on a fixed day each month, or in arrears after service.</li>
<li><strong>Send receipts or invoices.</strong> Issue a receipt or invoice for each charge with the period covered, amount and tax. You can create these in our <a href="/invoice-generator">free invoice generator</a> if your processor does not.</li>
<li><strong>Set up dunning.</strong> Configure retries and reminder emails for failed payments.</li>
<li><strong>Review monthly.</strong> Reconcile payouts against the list of active customers, and look at failed and cancelled payments.</li>
</ol>

<h2>Authorization rules for recurring payments</h2>
<p>Getting permission properly protects you in disputes and keeps you within network and legal rules. Key points for US businesses:</p>
<ul>
<li><strong>ACH debits from consumers:</strong> Regulation E requires preauthorized transfers from a consumer's account to be authorized in writing (or by a similarly authenticated method), with a copy provided to the consumer. The <a href="https://www.consumerfinance.gov/rules-policy/regulations/1005/10/" target="_blank" rel="noopener">CFPB's Regulation E section 1005.10</a> sets this out. Nacha rules add their own authorization requirements and, for online authorizations, account validation.</li>
<li><strong>ACH debits from businesses:</strong> Nacha rules require an agreement between you and the business customer; a signed authorization form is standard practice.</li>
<li><strong>Variable amounts:</strong> If the amount changes, consumers are generally entitled to notice of the amount and date before the debit, unless they have agreed to a range.</li>
<li><strong>Cards:</strong> Card network rules for stored credentials and subscriptions require you to disclose the terms, get consent, and make cancellation straightforward. Free-trial-to-paid subscriptions have extra disclosure rules.</li>
<li><strong>State automatic renewal laws:</strong> Many states, including California, require clear disclosure, affirmative consent and easy online cancellation for consumer subscriptions.</li>
</ul>
<p><em>This is general information, not legal advice. Check your processor's terms and the rules in the states where your customers are.</em></p>

<h2>Worked example: moving retainers to autopay</h2>
<p>A small IT support company has 40 clients on a $150 monthly plan. Before autopay, it emailed invoices with net 15 terms. On average, 30% of clients paid late, by about 20 days, and the owner spent around four hours a month chasing payments.</p>
<table><thead><tr><th></th><th>Invoiced manually</th><th>ACH autopay</th><th>Card autopay</th></tr></thead><tbody>
<tr><td>Monthly billings</td><td>$6,000</td><td>$6,000</td><td>$6,000</td></tr>
<tr><td>Processing cost (illustrative)</td><td>$0 (bank transfers)</td><td>About $48 (0.8% per charge)</td><td>About $186 (2.9% + $0.30 per charge)</td></tr>
<tr><td>Typical late payments</td><td>12 clients</td><td>1 to 2 failed payments, retried</td><td>2 to 3 declines, retried</td></tr>
<tr><td>Time chasing</td><td>About 4 hours</td><td>Under 1 hour</td><td>Under 1 hour</td></tr>
<tr><td>Cash on hand by the 5th</td><td>About $4,200</td><td>About $5,850</td><td>About $5,850</td></tr>
</tbody></table>
<p>The ACH route costs less than an hour of the owner's time and brings most cash in on schedule. Card autopay costs more but is easier for clients who will not share bank details. Many businesses offer both and pass on no surcharge for ACH, which nudges larger clients toward the cheaper method. If you consider adding a card fee, read our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first.</p>

<h2>How to handle failed recurring payments</h2>
<p>Some recurring payments will fail. Cards expire, get replaced after fraud, or hit their limit; bank accounts run short or close. A good failed payment process looks like this:</p>
<ol>
<li><strong>Use a card account updater.</strong> Many processors automatically fetch new card details from participating banks when a card is reissued.</li>
<li><strong>Retry smartly.</strong> Automatic retries over several days often recover a large share of declined card payments. For ACH, follow Nacha rules on re-presenting returned debits, which limit how many times you can retry.</li>
<li><strong>Notify the customer.</strong> Send a friendly email with a secure link to update the payment method.</li>
<li><strong>Escalate.</strong> After the final retry, send an invoice for manual payment and a clear date when service will pause.</li>
<li><strong>Pause or cancel</strong> according to your terms, and record the outcome.</li>
</ol>
<p>For ACH returns, our guide to <a href="/blog/ach-return-codes">ACH return codes</a> explains what codes like R01 and R10 mean, and <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> covers card disputes.</p>

<h2>Choosing the billing date and timing</h2>
<p>The day you charge affects both cash flow and failed payments. Common approaches:</p>
<table><thead><tr><th>Approach</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Anniversary billing</td><td>Charge on the same day each month as the signup date</td><td>Spreads charges across the month; simple for customers</td><td>Cash arrives unevenly</td></tr>
<tr><td>Calendar billing</td><td>Charge everyone on the 1st, with a prorated first charge</td><td>Predictable cash; easy reporting</td><td>Spike of failed payments on one day</td></tr>
<tr><td>Billing in advance</td><td>Charge at the start of the period</td><td>Paid before you deliver</td><td>Refunds needed if customers cancel mid-period</td></tr>
<tr><td>Billing in arrears</td><td>Charge after the period, often for usage</td><td>Accurate for variable work</td><td>You carry the credit risk for a month</td></tr>
</tbody></table>
<p>Many service businesses bill fixed fees in advance and extra usage in arrears on the same invoice. If you prorate a first or last month, our guide to the <a href="/blog/prorated-invoice">prorated invoice</a> shows the arithmetic.</p>

<h2>Example recurring invoice</h2>
<p>Even with autopay, send a document for each period. Here is a sample for one client:</p>
<table><thead><tr><th>Description</th><th>Period</th><th>Amount</th></tr></thead><tbody>
<tr><td>Managed IT support, Standard plan (up to 10 devices)</td><td>Nov 1 to Nov 30, 2026</td><td>$150.00</td></tr>
<tr><td>Additional device monitoring (2 devices at $12)</td><td>Nov 1 to Nov 30, 2026</td><td>$24.00</td></tr>
<tr><td>Subtotal</td><td></td><td>$174.00</td></tr>
<tr><td>Sales tax (if applicable in your state)</td><td></td><td>$0.00</td></tr>
<tr><td><strong>Total charged by ACH autopay on Nov 1, 2026</strong></td><td></td><td><strong>$174.00</strong></td></tr>
</tbody></table>
<p>Mark the invoice "Paid by autopay, no action needed" so the client's accounts payable team does not pay it twice. Use our <a href="/tools/invoice-number-generator">invoice number generator</a> to keep a consistent sequence across periods.</p>

<h2>Recurring payments and taxes</h2>
<p>Each recurring charge is a sale, so the usual tax rules apply every period. If your service is subject to sales tax in the customer's state, charge it on every billing, and update the rate when local rates change. Subscription software and digital services are taxed differently from state to state, so check before you set up a plan. For VAT and GST countries, the invoice or receipt for each charge often needs to meet tax invoice requirements, including your registration number. Annual plans paid upfront may also need to be recognized as revenue over the year in accrual accounting, rather than all in the month you collect the cash.</p>

<h2>Common mistakes with recurring payments</h2>
<ul>
<li><strong>Vague authorization.</strong> Without a clear record of what the customer agreed to, disputes are hard to win.</li>
<li><strong>Storing card numbers yourself.</strong> Let the processor store them; see our guide to <a href="/blog/pci-compliance-small-business">PCI compliance for small business</a>.</li>
<li><strong>Raising prices without notice.</strong> It drives chargebacks and can break network rules and state laws.</li>
<li><strong>Making cancellation hard.</strong> It frustrates customers and can violate state auto-renewal laws.</li>
<li><strong>No dunning process.</strong> Failed payments silently become lost revenue.</li>
<li><strong>Skipping receipts or invoices.</strong> Business clients need them for their books.</li>
</ul>

<h2>Summary</h2>
<p>Recurring payments reduce late payments, save admin time and make revenue more predictable. Pick card or ACH based on amount and customer type, get clear authorization, send a record for each charge and plan for failures. When you need to issue invoices or receipts for each period, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a PDF built in your browser, a simple companion to any system you use for recurring payments.</p>
`,
  },
  {
    slug: "pci-compliance-small-business",
    title: "PCI Compliance for Small Business: Levels and SAQs (2026)",
    description:
      "PCI compliance for small business explained: PCI DSS v4.0.1, merchant levels, which SAQ you need, non-compliance fees and a step-by-step checklist.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "credit-card-processing-fees",
      "merchant-account-vs-payment-processor",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "Is PCI compliance required by law?",
        a: "PCI DSS is not a federal law in the US. It is a security standard created by the major card brands through the PCI Security Standards Council and enforced through your merchant agreement with your processor or acquiring bank. A few states reference PCI DSS in their laws, and data breach and privacy laws apply regardless. In practice, if you accept cards, your contract requires you to comply.",
      },
      {
        q: "Do I need PCI compliance if I use Square, Stripe or PayPal?",
        a: "Yes, but your work is much lighter. These providers are PCI compliant service providers and handle the card data, so most small businesses using their hosted checkouts, readers or apps qualify for the simplest self-assessment, or the provider covers it as part of the service. You are still responsible for how you use the tools, such as not writing card numbers down and protecting your account logins.",
      },
      {
        q: "How much does PCI compliance cost for a small business?",
        a: "For a small merchant using a modern processor, the direct cost can be close to zero beyond time to complete a questionnaire. Some processors charge an annual PCI program fee or a monthly non-compliance fee if you do not complete your validation. Merchants with more complex setups may pay for quarterly vulnerability scans or security consultants. Check your merchant statement for PCI-related fees.",
      },
      {
        q: "What is a PCI non-compliance fee?",
        a: "It is a monthly or annual charge some processors add when a merchant has not completed its annual PCI validation, typically the self-assessment questionnaire and any required scans. The fee is set by your processor, not by the card brands directly. It usually stops once you complete validation, so if you see one on your statement, log in to your processor's PCI portal and finish the questionnaire.",
      },
      {
        q: "What is the current version of PCI DSS?",
        a: "As of October 2026, the current version is PCI DSS v4.0.1, published by the PCI Security Standards Council in 2024 as a limited revision of v4.0. Version 3.2.1 was retired in March 2024 and v4.0 at the end of 2024. Requirements that were future-dated in v4.0 became mandatory on March 31, 2025. Check the PCI SSC document library for any newer releases.",
      },
      {
        q: "Can I take card numbers over the phone and stay PCI compliant?",
        a: "Yes, if you enter them directly into your processor's virtual terminal or payment page while on the call and never write them down, record them or store them. Call recordings that capture card numbers create a major compliance burden. Do not ask customers to email or text card details. A better option for remote sales is sending a secure payment link with the invoice.",
      },
      {
        q: "What happens if a PCI non-compliant business has a data breach?",
        a: "The consequences can be serious: card brand fines passed through by your processor, the cost of forensic investigation, card reissuance costs, higher processing fees or loss of the ability to accept cards, plus notification duties under state breach laws. Small businesses sometimes cannot absorb these costs. That is the real reason to keep card data out of your systems entirely.",
      },
      {
        q: "How often do I need to validate PCI compliance?",
        a: "Most merchants validate annually by completing the relevant self-assessment questionnaire and attestation of compliance. Some setups also require quarterly external vulnerability scans by an Approved Scanning Vendor. Your processor or acquiring bank tells you which documents and scans they need and when, usually through an online PCI portal. Update your answers sooner if you add a new way of taking cards.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> PCI compliance means following the Payment Card Industry Data Security Standard (PCI DSS), currently version 4.0.1, whenever you accept, process or store card payments. Most small businesses are Level 4 merchants and validate once a year with a Self-Assessment Questionnaire (SAQ). Using a hosted checkout or approved reader keeps the SAQ short.</p>

<p>PCI compliance sounds like an enterprise IT project, but for most small businesses it comes down to choosing the right payment setup, keeping card numbers off your own systems, and filling out a questionnaire each year. This guide explains PCI DSS in plain terms, shows the merchant levels and SAQ types, walks through a worked example, and gives you a checklist for staying compliant without hiring a security consultant.</p>
<p><em>This is general information, not legal or security advice. Your processor or acquiring bank decides your exact validation requirements.</em></p>

<h2>What is PCI compliance?</h2>
<p>PCI DSS is a set of security requirements for any organization that stores, processes or transmits cardholder data. It is maintained by the <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener">PCI Security Standards Council</a>, founded by the major card brands, and enforced by those brands through acquiring banks and payment processors. When you sign a merchant agreement, you agree to comply.</p>
<p>The standard is organized into 12 principal requirements under six goals:</p>
<table><thead><tr><th>Goal</th><th>Requirements (summary)</th></tr></thead><tbody>
<tr><td>Build and maintain a secure network and systems</td><td>1. Network security controls; 2. Secure configurations</td></tr>
<tr><td>Protect account data</td><td>3. Protect stored account data; 4. Encrypt cardholder data in transit</td></tr>
<tr><td>Maintain a vulnerability management program</td><td>5. Protect against malware; 6. Develop and maintain secure systems</td></tr>
<tr><td>Implement strong access control</td><td>7. Restrict access by need to know; 8. Identify users and authenticate access; 9. Restrict physical access</td></tr>
<tr><td>Regularly monitor and test networks</td><td>10. Log and monitor access; 11. Test security regularly</td></tr>
<tr><td>Maintain an information security policy</td><td>12. Support security with policies and programs</td></tr>
</tbody></table>
<p>The good news for small businesses: the less card data touches your systems, the fewer of these requirements apply to you.</p>

<h2>PCI DSS 4.0.1: what changed for small merchants</h2>
<ul>
<li><strong>Version 4.0.1 is current.</strong> It replaced v4.0, which was retired at the end of 2024. Requirements that had been future-dated became mandatory on March 31, 2025.</li>
<li><strong>Stronger authentication.</strong> v4.0 introduced longer minimum password lengths (12 characters where supported) and broader multi-factor authentication for access to the cardholder data environment.</li>
<li><strong>E-commerce script controls.</strong> Requirements 6.4.3 and 11.6.1 address scripts on payment pages to fight web skimming.</li>
<li><strong>SAQ A update.</strong> In early 2025, the Council removed requirements 6.4.3 and 11.6.1 from SAQ A and replaced them with an eligibility criterion: merchants must confirm their site is not susceptible to attacks from scripts that could affect the e-commerce system. Merchants using a provider's embedded payment form or redirect should read the current SAQ A carefully or ask their provider for guidance.</li>
</ul>

<h2>PCI merchant levels</h2>
<p>Card brands set merchant levels based on annual transaction volume. The Visa levels below are widely used; Mastercard's are similar, and other brands have their own.</p>
<table><thead><tr><th>Level</th><th>Annual Visa transactions</th><th>Typical validation</th></tr></thead><tbody>
<tr><td>Level 1</td><td>Over 6 million (any channel)</td><td>Annual on-site assessment by a Qualified Security Assessor, quarterly scans</td></tr>
<tr><td>Level 2</td><td>1 million to 6 million</td><td>Annual SAQ (sometimes with assessor), quarterly scans</td></tr>
<tr><td>Level 3</td><td>20,000 to 1 million e-commerce</td><td>Annual SAQ, quarterly scans if applicable</td></tr>
<tr><td>Level 4</td><td>Fewer than 20,000 e-commerce, or up to 1 million total</td><td>Annual SAQ, scans if applicable, as required by your acquirer</td></tr>
</tbody></table>
<p>Nearly every small business is Level 4. Your acquirer can still set specific requirements, and a business that suffers a breach may be moved up a level.</p>

<h2>Which SAQ do you need?</h2>
<p>The Self-Assessment Questionnaire you complete depends on how you take cards, not on your size.</p>
<table><thead><tr><th>SAQ</th><th>Who it is for</th><th>Example small business setup</th></tr></thead><tbody>
<tr><td>A</td><td>Card-not-present merchants that fully outsource card data handling</td><td>Online store using a hosted checkout or payment links; invoice paid via a provider's payment page</td></tr>
<tr><td>A-EP</td><td>E-commerce merchants whose website can affect the security of the payment page</td><td>Site that hosts its own payment form posting directly to the processor</td></tr>
<tr><td>B</td><td>Merchants using only imprint machines or standalone dial-out terminals</td><td>Older countertop terminal on a phone line</td></tr>
<tr><td>B-IP</td><td>Merchants using only standalone, PCI-approved terminals connected over IP</td><td>Internet-connected countertop terminal with no other card systems</td></tr>
<tr><td>C-VT</td><td>Manual entry into a processor's web-based virtual terminal on one computer</td><td>Office keying phone orders into a virtual terminal</td></tr>
<tr><td>C</td><td>Merchants with payment application systems connected to the internet</td><td>Point-of-sale software on a PC connected to the internet</td></tr>
<tr><td>P2PE</td><td>Merchants using only a validated point-to-point encryption solution</td><td>Validated encrypted card readers from a P2PE provider</td></tr>
<tr><td>D</td><td>Everyone else (and service providers)</td><td>Businesses that store card numbers or run custom payment systems</td></tr>
</tbody></table>
<p>The PCI SSC publishes all SAQs and their eligibility criteria in its document library. If you use more than one channel, such as a card reader and an online store, you may need to complete more than one SAQ or the one that covers your most complex channel; ask your processor.</p>

<h2>Worked example: a small business PCI setup</h2>
<p>A home cleaning company takes about 3,500 card payments a year. It sends invoices with a payment link from its processor, takes some payments with a phone tap-to-pay app, and occasionally keys card numbers from customers who call.</p>
<table><thead><tr><th>Channel</th><th>Card data touches business systems?</th><th>Relevant validation</th></tr></thead><tbody>
<tr><td>Payment links on invoices (hosted page)</td><td>No</td><td>SAQ A</td></tr>
<tr><td>Tap to pay app from the processor</td><td>No, handled in the provider's app</td><td>Often covered by the provider's program; confirm</td></tr>
<tr><td>Phone orders keyed into virtual terminal</td><td>Yes, briefly on the office computer</td><td>SAQ C-VT</td></tr>
</tbody></table>
<p>By replacing phone orders with a payment link sent while the customer is on the call, the company removes the virtual terminal channel and can likely validate with SAQ A alone, a much shorter questionnaire. That one process change cuts both risk and paperwork. For adding links to your invoices, see <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</p>

<h2>PCI compliance checklist for small business</h2>
<ol>
<li><strong>Map how you take cards.</strong> List every channel: in person, online, phone, mail, invoices.</li>
<li><strong>Outsource card data handling.</strong> Use hosted payment pages, payment links, approved readers and the processor's apps instead of collecting card numbers yourself.</li>
<li><strong>Never store card numbers.</strong> No spreadsheets, notes, emails, photos or call recordings with full card numbers. Never store CVV codes at all.</li>
<li><strong>Secure your accounts.</strong> Use unique passwords of at least 12 characters and multi-factor authentication on your processor dashboard and email.</li>
<li><strong>Keep devices updated.</strong> Update phones, tablets, computers, routers and payment apps; change default passwords on Wi-Fi equipment.</li>
<li><strong>Inspect card readers.</strong> Check in-person devices for tampering and keep an inventory.</li>
<li><strong>Train staff.</strong> Teach them never to accept card numbers by email or text and to spot phishing.</li>
<li><strong>Complete your SAQ and attestation</strong> through your processor's PCI portal each year, and run quarterly scans if required.</li>
<li><strong>Write a short incident plan.</strong> Know who to call (your processor) if you suspect a breach.</li>
</ol>

<h2>How to complete your SAQ: a practical walkthrough</h2>
<ol>
<li><strong>Log in to your processor's PCI portal.</strong> Many processors provide one, often run by a compliance partner, and send reminders each year. If you are not sure, ask support where to validate.</li>
<li><strong>Answer the scoping questions.</strong> The portal asks how you accept cards. Be honest; choosing an SAQ that does not match your setup does not protect you after a breach.</li>
<li><strong>Work through each requirement.</strong> For each question, answer In Place, Not Applicable or Not in Place. For short SAQs like A, most questions relate to vendor management, passwords and policy.</li>
<li><strong>Fix gaps before you attest.</strong> If you answer Not in Place, write down what you will change and by when, then do it.</li>
<li><strong>Run scans if required.</strong> SAQs covering systems connected to the internet may require quarterly scans by an Approved Scanning Vendor; the portal usually arranges them.</li>
<li><strong>Sign the Attestation of Compliance.</strong> This is your formal statement that the answers are accurate.</li>
<li><strong>Set a reminder for next year</strong> and update your answers whenever you add a payment channel.</li>
</ol>

<h2>PCI compliance by payment channel</h2>
<table><thead><tr><th>How you take cards</th><th>Lowest-effort compliant approach</th></tr></thead><tbody>
<tr><td>Invoices</td><td>Payment link to a hosted page; no card fields on your own site</td></tr>
<tr><td>Online store</td><td>Hosted checkout or embedded payment form from a compliant provider</td></tr>
<tr><td>In person</td><td>Provider's reader, terminal or tap to pay app; see <a href="/blog/tap-to-pay-on-iphone">Tap to Pay on iPhone</a></td></tr>
<tr><td>Phone</td><td>Send a payment link during the call instead of keying the card</td></tr>
<tr><td>Recurring</td><td>Processor's card-on-file storage and customer portal</td></tr>
<tr><td>Mail or paper forms</td><td>Avoid; if unavoidable, process immediately and shred the form securely</td></tr>
</tbody></table>
<p>The same principle runs through every row: let a PCI-compliant provider handle the card number. Our overview of <a href="/blog/best-payment-methods-for-small-business">the best payment methods for small business</a> compares options, and <a href="/blog/stripe-vs-square">Stripe vs Square</a> covers two popular processors.</p>

<h2>PCI fees on your merchant statement</h2>
<table><thead><tr><th>Fee type</th><th>What it is</th><th>How to avoid or reduce</th></tr></thead><tbody>
<tr><td>PCI compliance or program fee</td><td>Annual or monthly charge for the processor's PCI program</td><td>Compare processors; flat-rate providers often have none</td></tr>
<tr><td>PCI non-compliance fee</td><td>Monthly charge until you validate</td><td>Complete your SAQ and any scans</td></tr>
<tr><td>Breach-related costs</td><td>Fines, forensics and card reissuance passed through after a breach</td><td>Keep card data off your systems</td></tr>
</tbody></table>
<p>Our guides to <a href="/blog/credit-card-processing-fees">credit card processing fees</a> and <a href="/blog/merchant-account-vs-payment-processor">merchant account vs payment processor</a> explain where these fees appear and how pricing models differ.</p>

<h2>Common PCI mistakes small businesses make</h2>
<ul>
<li><strong>Emailing or texting card numbers.</strong> Even once creates stored card data on several systems.</li>
<li><strong>Keeping a "card on file" spreadsheet</strong> for repeat customers instead of using the processor's secure storage. Our <a href="/blog/recurring-payments-small-business">recurring payments guide</a> shows the safe way.</li>
<li><strong>Ignoring the annual questionnaire</strong> and paying non-compliance fees month after month.</li>
<li><strong>Sharing processor logins</strong> among staff instead of creating individual users.</li>
<li><strong>Adding marketing scripts to payment pages</strong> on your own site without understanding the SAQ impact.</li>
<li><strong>Assuming the processor covers everything.</strong> They secure their systems; you secure your practices.</li>
</ul>

<h2>Where invoices fit</h2>
<p>Invoices should never contain full card numbers. Put a payment link, bank transfer details or accepted methods on the invoice instead, and let the customer pay on the processor's secure page. Our <a href="/invoice-generator">free invoice generator</a> does not process payments or collect card data at all; it only creates the invoice document. For card fees and options, see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<h2>Summary</h2>
<p>PCI compliance for small business is mostly about design: route card data through your processor, keep it off your own devices and files, secure your logins, and complete the right SAQ every year. Do that and PCI becomes a short annual task rather than a risk to your business. When you need clean invoices with a payment link, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and creates a PDF in your browser, keeping card data out of your paperwork and supporting your PCI compliance.</p>
`,
  },
  {
    slug: "how-to-pay-contractors",
    title: "How to Pay Contractors: Methods, W-9 and 1099 (2026)",
    description:
      "How to pay contractors in 2026: collect a W-9, choose ACH, check or an app, handle the new $2,000 1099-NEC threshold and pay international contractors.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "w9-and-1099-for-contractors",
      "1099-nec-threshold-2026",
      "independent-contractor-invoice",
    ],
    faqs: [
      {
        q: "Do I need a W-9 before paying a contractor?",
        a: "It is best practice to get a completed Form W-9 before the first payment. It gives you the contractor's legal name, business entity type and taxpayer identification number, which you need to file Form 1099-NEC if payments reach the threshold. If a US contractor refuses to provide a TIN, you may be required to apply backup withholding at 24% on reportable payments.",
      },
      {
        q: "What is the 1099-NEC threshold for 2026?",
        a: "For payments made after December 31, 2025, the threshold for reporting nonemployee compensation on Form 1099-NEC rose from $600 to $2,000 under the One Big Beautiful Bill Act, with inflation adjustments planned after 2026. So for payments made in 2026, you generally file a 1099-NEC when you pay a contractor $2,000 or more for services in the course of your business. Confirm current figures on irs.gov.",
      },
      {
        q: "Do I send a 1099-NEC if I paid a contractor through PayPal or a card?",
        a: "Generally no. Payments made by credit card, debit card or through a third-party payment network such as PayPal are reported by the payment settlement entity on Form 1099-K, so the IRS instructions say you should not also report them on Form 1099-NEC. Payments by ACH from your bank account, check or cash are not covered by that exception and count toward the 1099-NEC threshold.",
      },
      {
        q: "Do I need to issue a 1099 to an LLC?",
        a: "It depends on how the LLC is taxed. Single-member LLCs and LLCs taxed as partnerships generally receive a 1099-NEC if payments reach the threshold. LLCs that have elected to be taxed as C or S corporations generally do not, except for certain payments such as legal fees. The tax classification box on the contractor's W-9 tells you which applies.",
      },
      {
        q: "How do I pay a contractor who lives outside the US?",
        a: "Collect Form W-8BEN from an individual or W-8BEN-E from a foreign entity to document their foreign status, then pay by international transfer, a service such as Wise or Payoneer, or a contractor platform. Payments to a foreign person for services performed entirely outside the US are generally not subject to US withholding or 1099 reporting. Local laws in the contractor's country may still apply to the relationship.",
      },
      {
        q: "When is Form 1099-NEC due?",
        a: "Form 1099-NEC is due to both the contractor and the IRS by January 31 of the year after you made the payments. If January 31 falls on a weekend or legal holiday, the deadline moves to the next business day. Businesses filing 10 or more information returns in total must generally file electronically, which you can do through the IRS IRIS portal or tax software.",
      },
      {
        q: "Can I pay contractors through payroll software?",
        a: "Yes. Many payroll services, such as Gusto, QuickBooks Payroll and ADP, include contractor payments by direct deposit, collect W-9s during onboarding and prepare 1099-NEC forms at year end. Contractor-only plans are often cheaper than full payroll. Make sure the software treats them as contractor payments, without withholding payroll taxes, unless the worker should actually be classified as an employee. Compare total monthly cost with doing ACH transfers yourself.",
      },
      {
        q: "What happens if I misclassify an employee as a contractor?",
        a: "Misclassification can lead to back payroll taxes, penalties and interest, plus liability for unpaid overtime, minimum wage and benefits under federal and state labor laws. The IRS looks at behavioral control, financial control and the relationship between the parties. If you control how, when and where someone works, they may be an employee regardless of what the contract says. Get advice if you are unsure.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To pay contractors, sign a contract, collect a Form W-9 (or W-8BEN for foreign contractors), receive an invoice, and pay by ACH, check, wire or a payment platform without withholding payroll taxes. Track totals so you can file Form 1099-NEC by January 31 for US contractors paid $2,000 or more in 2026.</p>

<p>Paying independent contractors looks simple: they send an invoice, you send money. But the method you choose affects your costs and your tax reporting, and the paperwork you collect upfront decides whether year-end 1099 filing takes ten minutes or ten hours. This guide explains how to pay contractors step by step, compares payment methods, covers the W-9 and the 2026 1099-NEC changes, and explains how to pay international contractors.</p>
<p><em>This is general information, not tax or legal advice. Confirm your obligations with a tax professional or the IRS.</em></p>

<h2>What is an independent contractor?</h2>
<p>An independent contractor is a person or business that provides services to you but is not your employee. They control how the work is done, usually supply their own tools, can work for other clients, and invoice you for their services. Unlike employees, you do not withhold income tax or pay Social Security, Medicare or unemployment taxes on their pay; they handle their own self-employment tax.</p>
<p>Classification is a legal test, not a choice. The IRS looks at behavioral control, financial control and the type of relationship. Our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> explains the factors in detail. If someone works set hours under your direction using your equipment, they may be an employee even if you call them a contractor.</p>

<h2>How to pay contractors: step by step</h2>
<ol>
<li><strong>Sign a contract.</strong> Define the scope, rate, payment terms, invoice requirements and who owns the work. A written agreement also supports contractor status.</li>
<li><strong>Collect Form W-9</strong> from US contractors before the first payment. It gives you their legal name, entity type and TIN (SSN or EIN). The IRS publishes the form on its <a href="https://www.irs.gov/forms-pubs/about-form-w-9" target="_blank" rel="noopener">About Form W-9</a> page.</li>
<li><strong>Collect Form W-8BEN or W-8BEN-E</strong> from foreign individuals or entities instead of a W-9.</li>
<li><strong>Agree on the payment method</strong> and collect bank details securely, ideally through your bank or payment platform rather than email.</li>
<li><strong>Require an invoice</strong> for each payment, with invoice number, dates of service, description, rate and total. Contractors can use our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> or a <a href="/blog/contractor-invoice-template">contractor invoice template</a>.</li>
<li><strong>Approve and pay</strong> according to the agreed terms, such as net 15 or net 30.</li>
<li><strong>Record the payment</strong> with the method used, because card and PayPal payments are treated differently for 1099 purposes.</li>
<li><strong>File Form 1099-NEC</strong> by January 31 for each US contractor who meets the threshold.</li>
</ol>

<h2>Ways to pay contractors compared</h2>
<table><thead><tr><th>Method</th><th>Typical cost (illustrative)</th><th>Speed</th><th>1099 handling</th><th>Best for</th></tr></thead><tbody>
<tr><td>ACH transfer from your bank</td><td>Free to a few dollars per transfer</td><td>1 to 2 business days (same day available)</td><td>You file 1099-NEC</td><td>Regular US contractors</td></tr>
<tr><td>Check</td><td>Check stock and postage, plus fraud risk</td><td>Days</td><td>You file 1099-NEC</td><td>Contractors who insist on paper</td></tr>
<tr><td>Domestic wire</td><td>Outgoing fee often $15 to $35 (varies by bank)</td><td>Same day</td><td>You file 1099-NEC</td><td>Large, urgent payments</td></tr>
<tr><td>Payroll or contractor platform (Gusto, QuickBooks, ADP and similar)</td><td>Monthly base plus per-contractor fee</td><td>Typically 2 to 4 business days, faster options exist</td><td>Platform often prepares and files 1099-NEC</td><td>Several contractors, recurring payments</td></tr>
<tr><td>PayPal (goods and services) or card</td><td>Fees, typically paid by the recipient</td><td>Minutes</td><td>Reported on 1099-K by the processor, not 1099-NEC</td><td>Occasional, small payments</td></tr>
<tr><td>International platforms (Wise, Payoneer, Deel and similar)</td><td>Transfer and conversion fees or monthly fees</td><td>Same day to several days</td><td>Usually no 1099 for foreign contractors working abroad</td><td>Contractors outside the US</td></tr>
</tbody></table>
<p>For deeper comparisons, see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> and our guide to <a href="/blog/how-to-set-up-direct-deposit">setting up direct deposit</a>, which works for contractor payments too.</p>

<h2>The W-9, 1099-NEC and 2026 threshold change</h2>
<p>Under the One Big Beautiful Bill Act, the reporting threshold for Form 1099-NEC rose from $600 to $2,000 for payments made after December 31, 2025, with inflation adjustments after 2026. Key rules for payments made in 2026:</p>
<ul>
<li><strong>Threshold:</strong> File a 1099-NEC for each US contractor (individual, partnership or most LLCs) you paid $2,000 or more for services in the course of your business.</li>
<li><strong>Exceptions:</strong> Corporations generally do not receive 1099-NECs, except for payments to attorneys and certain medical payments. Payments for merchandise, rent paid through a property manager and personal (non-business) payments are not reported on 1099-NEC.</li>
<li><strong>Card and third-party network payments:</strong> Not reported by you on 1099-NEC; the processor handles 1099-K reporting.</li>
<li><strong>Deadline:</strong> January 31 to the contractor and the IRS.</li>
<li><strong>E-filing:</strong> Required if you file 10 or more information returns in total; the IRS IRIS portal is free.</li>
<li><strong>Backup withholding:</strong> If a contractor does not provide a correct TIN, you may need to withhold 24% from reportable payments.</li>
</ul>
<p>See the IRS's <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec" target="_blank" rel="noopener">About Form 1099-NEC</a> page for the official instructions. For more detail, read our guides to the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a>, <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 for contractors</a> and <a href="/blog/how-to-file-1099-nec">how to file a 1099-NEC</a>.</p>

<h2>Worked example: paying three contractors in 2026</h2>
<p>A small marketing agency uses three contractors during 2026.</p>
<table><thead><tr><th>Contractor</th><th>W-9 / W-8 entity type</th><th>How paid</th><th>2026 total</th><th>1099-NEC needed?</th></tr></thead><tbody>
<tr><td>Jordan Lee, copywriter</td><td>W-9, sole proprietor</td><td>ACH</td><td>$8,400</td><td>Yes, over $2,000 by ACH</td></tr>
<tr><td>Pixel Forge LLC, web developer</td><td>W-9, LLC taxed as S corporation</td><td>ACH</td><td>$14,750</td><td>No, S corporation (not an attorney)</td></tr>
<tr><td>Ana Ruiz, illustrator</td><td>W-9, sole proprietor</td><td>$1,200 by ACH, $2,600 by PayPal goods and services</td><td>$3,800</td><td>No: only $1,200 is reportable by the agency; PayPal reports the rest on 1099-K</td></tr>
<tr><td>Ravi Patel, video editor in India</td><td>W-8BEN, foreign individual working in India</td><td>Wise transfer</td><td>$5,200</td><td>No, foreign person, services performed outside the US</td></tr>
</tbody></table>
<p>The agency files one 1099-NEC, for Jordan Lee. Because it collected W-9s and W-8BENs upfront and recorded the payment method for each payment, year-end reporting takes minutes. The agency also keeps every contractor invoice on file to support the expense deduction.</p>

<h2>How to pay international contractors</h2>
<ol>
<li><strong>Collect a W-8BEN</strong> (individuals) or W-8BEN-E (entities) to document foreign status. Keep it on file; it generally remains valid for three years unless circumstances change.</li>
<li><strong>Agree on currency.</strong> Paying in the contractor's currency avoids confusion over exchange rates; paying in USD shifts currency risk to them.</li>
<li><strong>Choose a cost-effective method.</strong> International wires can carry fees on both ends plus intermediary deductions. Platforms such as Wise or Payoneer often cost less; compare in our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> guide.</li>
<li><strong>Get the right bank details.</strong> Depending on the country, you may need an IBAN, SWIFT code, IFSC or other local identifiers. Our explainer on <a href="/blog/swift-code-vs-iban">SWIFT code vs IBAN</a> covers what to ask for.</li>
<li><strong>Consider an employer of record or contractor platform</strong> if you hire many people abroad or need local compliance support.</li>
</ol>
<p>If the foreign contractor performs any work while physically in the US, different withholding rules can apply, so get advice before paying for US-based services.</p>

<h2>Paying contractors on a schedule</h2>
<p>Consistent payment timing keeps good contractors loyal and makes your cash flow predictable. Common patterns:</p>
<ul>
<li><strong>Per project or milestone:</strong> pay on approval of each deliverable. Our guide to milestone payments covers structuring them.</li>
<li><strong>Monthly retainer:</strong> pay a fixed amount for an agreed scope at the start or end of each month.</li>
<li><strong>Biweekly on hours:</strong> pay for hours logged in the prior two weeks, based on approved timesheets.</li>
<li><strong>Net terms:</strong> pay within 15 or 30 days of an approved invoice, aligned with your accounts payable run.</li>
</ul>
<p>Whatever you choose, write it in the contract and stick to it. If you have several contractors, a weekly payables run with a clear cutoff (for example, invoices approved by Tuesday are paid Friday) reduces ad hoc payments and errors. Our guide to the <a href="/blog/accounts-payable-process">accounts payable process</a> shows how to set one up, and the <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> covers collecting W-9s and bank details securely.</p>

<h3>State reporting and other filings</h3>
<p>Some states require their own copy of 1099-NEC forms or participate in the Combined Federal/State Filing Program, and several require reporting of new independent contractors to the state new hire registry. California, for example, requires businesses to report independent contractors paid $600 or more in a calendar year. Check your state revenue and labor department websites each year, as these rules do not always follow the federal threshold change.</p>

<h2>What a good contractor invoice includes</h2>
<p>Requiring a proper invoice protects both sides. Ask contractors to include:</p>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Contractor name and business name</td><td>Jordan Lee, Lee Copy Studio</td></tr>
<tr><td>Invoice number and date</td><td>JL-2026-019, October 31, 2026</td></tr>
<tr><td>Your business name and address</td><td>Brightside Marketing LLC</td></tr>
<tr><td>Service period and description</td><td>October 2026: 6 blog posts at $250; 1 landing page at $600</td></tr>
<tr><td>Total due and terms</td><td>$2,100, net 15</td></tr>
<tr><td>Payment details</td><td>ACH details or payment platform</td></tr>
</tbody></table>
<p>Contractors can create invoices like this in our <a href="/invoice-generator">free invoice generator</a> and number them consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>

<h2>Common mistakes when paying contractors</h2>
<ul>
<li><strong>Paying before getting a W-9.</strong> Chasing TINs in January is painful, and backup withholding rules may apply.</li>
<li><strong>Issuing 1099-NECs for card or PayPal payments</strong>, which double-reports income.</li>
<li><strong>Using the old $600 threshold</strong> for 2026 payments, or forgetting that states may have their own reporting rules.</li>
<li><strong>Misclassifying employees</strong> as contractors to avoid payroll taxes.</li>
<li><strong>Changing contractor bank details on an email request</strong> without calling to confirm, a common fraud tactic.</li>
<li><strong>Paying without an invoice</strong>, which weakens your records and expense deduction.</li>
</ul>

<h2>Summary</h2>
<p>How to pay contractors comes down to four habits: a written agreement, a W-9 or W-8 before the first payment, a clear invoice for every payment, and a record of the method used. Pick ACH or a contractor platform for regular US payments and a low-cost international service for overseas talent, then file 1099-NECs for qualifying US contractors by January 31. If your contractors need a quick way to bill you, point them to our <a href="/invoice-generator">invoice generator</a>: it is free, needs no sign-up, and downloads a PDF built right in the browser.</p>
`,
  },
];
