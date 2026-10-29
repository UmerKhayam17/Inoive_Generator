import type { PostDraft } from "../blog";

export const PAYMENTS_2026_I_POSTS: PostDraft[] = [
  {
    slug: "ach-return-codes",
    title: "ACH Return Codes: R01, R02, R10 Meanings and Next Steps",
    description:
      "ACH return codes explained: what R01, R02, R03, R10, R11 and R29 mean, return timeframes, Nacha return rate limits and how to rebill a returned payment.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-accept-ach-payments",
      "nacha-2026-rules",
      "ach-vs-wire-transfer",
      "short-payments-and-deductions",
    ],
    faqs: [
      {
        q: "What does ACH return code R01 mean?",
        a: "R01 means insufficient funds: the payer's available balance did not cover the debit when their bank tried to post it. It is the most common return a small business sees when it pulls invoice payments by ACH debit. Nacha rules allow you to reinitiate an R01 debit, generally up to two more times within 180 days of the original settlement date, but it is usually better to contact the client first and agree a new date.",
      },
      {
        q: "What is the difference between R02 and R03?",
        a: "R02 means the account existed but has been closed, either by the customer or by their bank. R03 means the bank could not find the account at all, or the account number does not match the name on the entry, even though the number passed basic format checks. Both are administrative returns. For R02 you need new bank details from the client; for R03 you should re-check the numbers you keyed in before asking the client.",
      },
      {
        q: "What does R10 mean on an ACH return?",
        a: "R10 means the account holder told their bank they do not know the company that debited them, or never authorized it to debit their account. It is an unauthorized return and counts toward Nacha's 0.5% unauthorized return rate threshold. Consumer accounts can use it for up to 60 days, backed by a written statement. Do not simply resubmit an R10 debit. Get a fresh, written authorization first or switch the client to a push payment method.",
      },
      {
        q: "How long does a bank have to return an ACH payment?",
        a: "Most ACH returns, such as R01, R02 and R03, must be made within two banking days of the settlement date. Unauthorized returns on consumer accounts, such as R10 and R11, get an extended window of up to 60 days. Business accounts disputing a debit use R29, which falls under the shorter two-day window. That is why a payment can look settled on Monday and still bounce later in the week.",
      },
      {
        q: "Can an ACH credit payment be returned?",
        a: "Yes. If a client pushes an ACH credit to an account number that is closed, wrong or cannot be located, your bank returns it to the client's bank with a code such as R02, R03 or R04. You did not receive the money, so the invoice stays open. The fix is usually on your side: confirm the routing and account number on your invoice and remittance details are current and readable.",
      },
      {
        q: "Who pays the fee when an ACH payment is returned?",
        a: "It depends on your processor and your contract. Many processors charge the merchant a returned payment fee; PayPal, for example, lists a 5 USD ACH return or unauthorized fee on its US merchant fee page as of 2026. Whether you can pass a fee on to the client depends on what your terms say. If your invoice terms mention a returned payment fee, add it as a separate line on the replacement invoice.",
      },
      {
        q: "What is the Nacha unauthorized return rate threshold?",
        a: "Nacha sets an unauthorized debit return rate threshold of 0.5%. It covers return codes such as R05, R07, R10, R11, R29 and R51 on debit entries. There is also a 3.0% administrative return rate level for R02, R03 and R04 and a 15.0% overall return rate level for all debit returns. Going over a level starts an inquiry by Nacha rather than an automatic fine, but your bank will watch it closely.",
      },
      {
        q: "Should I mark the invoice unpaid after an ACH return?",
        a: "Yes. Reverse the payment in your books on the return date, reopen the invoice or issue a replacement showing the balance due, and tell the client which return code you received. Keep the return notice with the invoice record. If you already sent a payment receipt, send a short note saying the receipt is void because the payment was returned by the bank, so both sides have matching records.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> ACH return codes are two-character reasons (R01, R02, R10 and so on) that a bank attaches when it sends an ACH payment back. R01 means insufficient funds, R02 means the account is closed, R03 means no account was found, and R10 means the account holder says the debit was not authorized. Each code tells you whether to retry, fix details or get new authorization.</p>

<p>If you collect invoice payments by ACH, a return notice is the moment a "paid" invoice quietly turns back into an unpaid one. This guide explains the ACH return codes small businesses actually see, the return timeframes under the Nacha Operating Rules, the return rate limits that can put your account under review, and exactly how to rebill the client. If you are still setting up bank payments, start with <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>, and use the <a href="/invoice-generator">free invoice generator</a> to send a clean replacement invoice when a payment bounces.</p>

<p>This article is general information about US payment rules, not legal or banking advice. Your bank or processor agreement may add stricter rules.</p>

<h2>What an ACH Return Code Is</h2>

<p>The ACH network moves two kinds of entries: credits, where the payer pushes money to you, and debits, where you (through your bank or processor) pull money from the payer's account with their permission. When the receiving bank cannot or will not post an entry, it sends a return through the network with a reason code. Your bank or processor then passes that code to you, usually on a dashboard, a return report or an email.</p>

<p>The codes come from the Nacha Operating Rules, which govern the US ACH Network. There are dozens of them, but a small business invoicing clients normally runs into fewer than ten. Knowing which group a code belongs to tells you most of what you need:</p>

<ul>
<li><strong>Funding returns</strong> (R01, R09): the money was not there. Retrying may work.</li>
<li><strong>Administrative returns</strong> (R02, R03, R04): the account details are wrong or out of date. Retrying the same details will fail again.</li>
<li><strong>Unauthorized returns</strong> (R05, R07, R10, R11, R29, R51): the account holder disputes your right to debit them. You need fresh authorization or a different payment method.</li>
<li><strong>Account status returns</strong> (R16, R20 and similar): the account is frozen or cannot accept that type of entry.</li>
</ul>

<h2>Common ACH Return Codes and Their Meanings</h2>

<p>The table below lists the ACH return codes that most often appear on small business payments, what each one means in plain English, and the usual next step. Descriptions follow the Nacha code titles.</p>

<table>
<thead>
<tr><th>Code</th><th>Nacha title (short)</th><th>What it means for your invoice</th><th>Usual next step</th></tr>
</thead>
<tbody>
<tr><td>R01</td><td>Insufficient funds</td><td>Client's balance did not cover the debit</td><td>Contact client, agree a date, reinitiate (limits apply)</td></tr>
<tr><td>R02</td><td>Account closed</td><td>Account existed but is now closed</td><td>Get new bank details and a new authorization</td></tr>
<tr><td>R03</td><td>No account / unable to locate account</td><td>Number passed format checks but does not match an account or name</td><td>Re-check what you keyed in, then ask the client</td></tr>
<tr><td>R04</td><td>Invalid account number structure</td><td>Account number is not in a valid format</td><td>Correct the number; usually a typo</td></tr>
<tr><td>R05</td><td>Unauthorized debit to consumer account using corporate SEC code</td><td>You debited a personal account as if it were a business</td><td>Get consumer authorization and use the correct entry type</td></tr>
<tr><td>R07</td><td>Authorization revoked by customer</td><td>Client cancelled the permission you had</td><td>Stop debits; ask for another payment method</td></tr>
<tr><td>R08</td><td>Payment stopped</td><td>Client placed a stop payment on this entry</td><td>Talk to the client before doing anything else</td></tr>
<tr><td>R09</td><td>Uncollected funds</td><td>Balance exists but funds are not yet available</td><td>Treat like R01</td></tr>
<tr><td>R10</td><td>Customer advises originator not known or not authorized</td><td>Account holder says they never authorized you</td><td>Do not resubmit; get written authorization</td></tr>
<tr><td>R11</td><td>Entry not in accordance with terms of authorization</td><td>Authorization exists but amount, date or other detail was wrong</td><td>Correct the error and send a new entry</td></tr>
<tr><td>R16</td><td>Account frozen</td><td>Bank has frozen the account</td><td>Ask the client for another account</td></tr>
<tr><td>R20</td><td>Non-transaction account</td><td>Account type does not allow this kind of entry</td><td>Ask for a checking account</td></tr>
<tr><td>R29</td><td>Corporate customer advises not authorized</td><td>A business payer disputes your debit</td><td>Confirm authorization with the client's AP team</td></tr>
</tbody>
</table>

<h3>R01 and R09: the money was not there</h3>

<p>R01 is the return you will see most. It is not an accusation, and it does not mean the client is refusing to pay. It means that on the day the debit hit, their balance was short. Nacha rules allow an originator to reinitiate an entry returned for R01 or R09, generally no more than two more times following the return, within 180 days of the original settlement date. In practice, a quick call or email to agree a date works better than an automatic retry that may bounce again and cost you another fee.</p>

<h3>R02, R03 and R04: the details are wrong</h3>

<p>These administrative codes mean the bank details on file are no good. R04 is a structural problem (wrong length or format), R03 means the number looks valid but there is no matching account or the name does not match, and R02 means the account has been closed. Never retry these with the same numbers. If the client gave you a voided check or a bank letter, compare what you entered against it; our guide to <a href="/blog/what-is-a-voided-check">voided checks for direct deposit</a> shows where the numbers sit. For the difference between the two numbers, see <a href="/blog/routing-number-vs-account-number">routing number vs account number</a>.</p>

<h3>R10, R11 and R29: authorization disputes</h3>

<p>These are the codes that matter most to your bank. R10 says the account holder does not recognize you or never gave permission. R11 says permission exists, but the entry did not match it, for example the wrong amount or a debit taken earlier than agreed. Nacha repurposed R11 for this in 2020, and its guidance says an originator can correct the error and send a new entry within 60 days of the return's settlement date without obtaining a new authorization. R29 is the business-account equivalent of an unauthorized return, used for corporate (CCD and CTX) entries.</p>

<h2>ACH Return Timeframes: How Long Can a Payment Bounce?</h2>

<p>A common surprise is that an ACH payment that looks settled can still come back. The timeframe depends on the code:</p>

<ul>
<li><strong>Standard returns</strong> (R01, R02, R03, R04, R09, R16, R20, R29 and most others): the receiving bank must return the entry within two banking days of settlement.</li>
<li><strong>Extended returns for unauthorized consumer debits</strong> (such as R10 and R11): the receiving bank can return the entry up to 60 days after settlement, supported by the consumer's written statement of unauthorized debit.</li>
</ul>

<p>This is why many businesses wait a few banking days before treating an ACH debit as final, and why you should not ship goods or release work on the same day an ACH debit settles if the amount is large. For high-value or first-time clients, a push payment such as a wire is harder to reverse; our <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer comparison</a> covers the trade-offs.</p>

<h2>Nacha Return Rate Limits for Businesses</h2>

<p>If you originate ACH debits, your bank monitors how often your entries come back. Nacha sets three return rate levels for debit entries, calculated over the preceding 60 days or two calendar months:</p>

<table>
<thead>
<tr><th>Measure</th><th>Level</th><th>Codes counted</th></tr>
</thead>
<tbody>
<tr><td>Unauthorized return rate threshold</td><td>0.5%</td><td>R05, R07, R10, R11, R29, R51</td></tr>
<tr><td>Administrative return rate level</td><td>3.0%</td><td>R02, R03, R04</td></tr>
<tr><td>Overall return rate level</td><td>15.0%</td><td>All return codes on debits</td></tr>
</tbody>
</table>

<p>Exceeding a level triggers an inquiry rather than an automatic penalty, but repeated problems can lead your bank or processor to restrict or close your ACH access. Nacha also charges an unauthorized entry fee between banks on unauthorized returns, which many processors pass on as a returned payment charge. The <a href="https://www.nacha.org/rules/ach-network-risk-and-enforcement-topics" target="_blank" rel="noopener noreferrer">Nacha page on ACH Network risk and enforcement</a> explains the levels, and our summary of the <a href="/blog/nacha-2026-rules">Nacha 2026 rules on fraud monitoring</a> covers the newer obligations on businesses.</p>

<p>For a small business, staying well under these levels mostly comes down to good data entry, clear authorizations and debiting on the agreed date.</p>

<h2>How to Handle an ACH Return: Step by Step</h2>

<p>When a return notice arrives, work through these steps in order:</p>

<ol>
<li><strong>Read the code and the date.</strong> Note the return code, the original settlement date and the return date. These go in your records and in your message to the client.</li>
<li><strong>Reverse the payment in your books.</strong> Record the return on the return date so your bank balance and receivables match. Our <a href="/blog/bank-reconciliation">bank reconciliation guide</a> shows how to match it.</li>
<li><strong>Reopen the invoice.</strong> Mark the invoice unpaid or issue a replacement showing the balance due. Keep the original invoice number in the reference so the client's accounts payable team can match it.</li>
<li><strong>Void any receipt you sent.</strong> If you already emailed a receipt, send a brief note saying the payment was returned by the bank and the receipt no longer applies.</li>
<li><strong>Contact the client with the specific reason.</strong> "Your bank returned the payment with code R01, insufficient funds" is clearer and less awkward than a vague "your payment failed".</li>
<li><strong>Choose the fix that matches the code.</strong> Agree a new date for R01, collect new details for R02 to R04, and get a new signed authorization or switch method for R07, R10 and R29.</li>
<li><strong>Add any agreed fee as a separate line.</strong> Only if your terms already allow a returned payment fee.</li>
<li><strong>Update your authorization file.</strong> Note what changed and keep the new authorization with the client record.</li>
</ol>

<h2>Worked Example: Rebilling an R01 Return</h2>

<p>A bookkeeping firm invoices a client $2,450.00 for quarterly services on invoice INV-1042. The client authorized ACH debits, and the firm's processor pulls the payment on the due date. Two banking days later the debit comes back with R01. The firm's terms say a returned payment fee of $25.00 applies.</p>

<p>Here is how the replacement invoice works in the <a href="/invoice-generator/usa">US invoice generator</a>:</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Quarterly bookkeeping services (ref INV-1042)</td><td>$2,450.00</td></tr>
<tr><td>Tax (services not taxable in this example, 0%)</td><td>$0.00</td></tr>
<tr><td>Extra charge: returned ACH payment fee (R01)</td><td>$25.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$2,475.00</strong></td></tr>
<tr><td>Amount paid</td><td>$1,000.00</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$1,475.00</strong></td></tr>
</tbody>
</table>

<p>The client calls, apologizes and pays $1,000.00 by card the same day, then agrees to a second ACH debit of $1,475.00 in ten days. The firm enters $1,000.00 in the amount paid field, which produces the $1,475.00 balance due ($2,475.00 minus $1,000.00). The second debit is a reinitiation of the returned amount plus the agreed fee, so the firm also confirms the fee is covered by the client's written authorization before pulling it. Our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> shows how to word the amount-paid line.</p>

<h2>ACH Returns on Payments You Receive by Credit</h2>

<p>Many small businesses never originate debits: clients simply push an ACH credit using the details printed on the invoice. Returns still happen here, but the code goes to the payer's bank, not to you. If a client says their payment "came back", the usual reasons are R02 (your account is closed), R03 (the number does not match an account or the name) or R04 (a typo in the account number).</p>

<p>Those are almost always problems with the payment details you published. Check that the routing and account numbers on your invoice template are current, that the account name matches your legal or trading name, and that you have not mixed up a wire routing number with an ACH routing number. Our <a href="/blog/bank-details-on-invoice">bank details on invoice guide</a> covers exactly what to print and where.</p>

<h2>How to Prevent ACH Returns</h2>

<p>Most returns are avoidable with a few habits:</p>

<ul>
<li><strong>Verify new accounts.</strong> Use your processor's account verification, a prenote or micro-deposits before the first live debit.</li>
<li><strong>Get clear written authorization.</strong> State the amount or how it is calculated, the timing, and how the client can revoke it. This is your defense against R10 and R29.</li>
<li><strong>Use the right entry type.</strong> Personal accounts and business accounts are treated differently. Debiting a consumer account as a corporate entry leads to R05.</li>
<li><strong>Debit on the agreed date only.</strong> Early or wrong-amount debits produce R11 returns.</li>
<li><strong>Send a reminder before the debit.</strong> A short email three days before the pull reduces R01 returns more than any rule change.</li>
<li><strong>Collect bank detail changes in writing.</strong> Confirm changes by phone using a number you already have, which also protects you from payment redirection fraud. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> covers this process from the other side.</li>
</ul>

<h2>ACH Return Codes vs Other Payment Failures</h2>

<p>ACH returns are not the same as card declines or chargebacks. A card decline happens before the payment is accepted. A card chargeback can arrive months later and goes through the card network's dispute process. An ACH return is a bank-to-bank message with a fixed code and a defined timeframe. If you need to compare methods, see <a href="/blog/best-payment-methods-for-small-business">the best payment methods for small business</a>, and if a client pays less than the invoice rather than nothing, follow our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a> instead.</p>

<h2>Rebill Returned ACH Payments With a Clear Invoice</h2>

<p>ACH return codes are short, but they tell you exactly what went wrong: no funds, bad details or a disputed authorization. Match your response to the code, reopen the invoice, and send a replacement that references the original invoice number and shows any amount already paid. You can create that replacement in minutes with the <a href="/invoice-generator">free invoice generator</a>, use the <a href="/tools/invoice-number-generator">invoice number generator</a> to keep your numbering consistent, and follow up with our <a href="/blog/overdue-invoice">overdue invoice process</a> if the balance stays unpaid. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "routing-number-vs-account-number",
    title: "Routing Number vs Account Number: What Each One Does",
    description:
      "Routing number vs account number explained: what each identifies, where to find them on a check or app, ACH vs wire routing numbers, and invoice tips.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "bank-details-on-invoice",
      "what-is-a-voided-check",
      "ach-vs-wire-transfer",
      "how-to-write-a-check",
    ],
    faqs: [
      {
        q: "What is the difference between a routing number and an account number?",
        a: "A routing number identifies the bank or credit union. It is a public, nine-digit number shared by many customers of the same institution. An account number identifies your individual account at that bank and is unique to you. A payer needs both: the routing number tells the payment network which bank to send the money to, and the account number tells that bank which account to credit or debit.",
      },
      {
        q: "Where do I find my routing number and account number?",
        a: "The easiest places are your bank's mobile app or online banking, usually under account details, and your bank statement. On a personal check, the bottom line shows the routing number first (nine digits between special symbols), then the account number, then the check number, though the order of the last two can vary. Your bank's website also lists its routing numbers, sometimes by state or by payment type.",
      },
      {
        q: "Is it safe to put my routing and account number on an invoice?",
        a: "It is common practice, because clients need them to pay you by ACH or wire. Someone with both numbers can attempt a fraudulent debit, but US rules require authorization for debits and give you rights to dispute unauthorized ones. To lower risk, use a dedicated business account for receiving payments, monitor it closely, and ask your bank about debit blocks or ACH filters on that account.",
      },
      {
        q: "Are ACH and wire routing numbers the same?",
        a: "Not always. Many banks use one routing number for ACH and checks and a different one for incoming wires, and some large banks also vary ACH routing numbers by the state where the account was opened. Always copy the number your bank lists for the specific payment type. Putting a wire routing number on an invoice meant for ACH payers is a common cause of returned payments.",
      },
      {
        q: "How many digits is an account number?",
        a: "There is no single length. US account numbers vary by bank, commonly from about 8 to 12 digits, and the ACH format allows up to 17 characters in the account number field. Routing numbers, by contrast, are always exactly nine digits. If a number someone gives you as a routing number is not nine digits, it is not a valid US routing number.",
      },
      {
        q: "Is a routing number the same as a SWIFT code?",
        a: "No. A routing number is a nine-digit code for US domestic payments such as ACH, checks and domestic wires. A SWIFT or BIC code is an 8 or 11 character code used to identify banks in international wire transfers. A client abroad paying a US account normally needs the SWIFT code and your account number, and sometimes the routing number as well. Ask your bank which details foreign payers should use.",
      },
      {
        q: "Can two banks have the same routing number?",
        a: "No, each routing number is assigned to one institution, though one institution can hold several routing numbers. After a bank merger, old routing numbers may keep working for a while and are later retired. If your bank tells you a routing number is changing, update every invoice template, direct deposit form and payment link that shows it, and tell regular clients in writing.",
      },
      {
        q: "What does the check digit in a routing number do?",
        a: "The ninth digit of a routing number is a check digit calculated from the first eight digits. Payment systems multiply the digits by the repeating weights 3, 7 and 1, add the results, and the total must be a multiple of 10. If someone mistypes one digit, the total usually fails this test, so the error is caught before the payment is sent rather than after it is misrouted.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the routing number vs account number question, the routing number is a public nine-digit code that identifies your bank, while the account number identifies your specific account at that bank. Payers need both to send ACH payments, direct deposits or domestic wires. You can find them in your banking app, on a statement, or along the bottom of a check.</p>

<p>Both numbers sit side by side on checks, direct deposit forms and the payment section of an invoice, so they are easy to mix up. This guide explains what each one does, where to find them, why your bank may have more than one routing number, and how to print them safely on invoices. For the full list of international details (IBAN, SWIFT and sort codes), see our companion guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>. When you are ready to bill, add your payment details once in the <a href="/invoice-generator">free invoice generator</a> and reuse them.</p>

<h2>Routing Number vs Account Number at a Glance</h2>

<table>
<thead>
<tr><th>Feature</th><th>Routing number</th><th>Account number</th></tr>
</thead>
<tbody>
<tr><td>Identifies</td><td>The bank or credit union</td><td>Your individual account</td></tr>
<tr><td>Length</td><td>Always 9 digits</td><td>Varies by bank, up to 17 characters in ACH files</td></tr>
<tr><td>Shared with others?</td><td>Yes, by many customers of the same bank</td><td>No, unique to your account</td></tr>
<tr><td>Public?</td><td>Yes, published by the bank</td><td>Private, share only with payers you trust</td></tr>
<tr><td>Also called</td><td>ABA number, ABA routing transit number, RTN</td><td>Bank account number, DDA number</td></tr>
<tr><td>Used for</td><td>ACH, checks, domestic wires, direct deposit</td><td>The same payments, to pick the exact account</td></tr>
<tr><td>Has a check digit?</td><td>Yes, the ninth digit</td><td>Depends on the bank</td></tr>
</tbody>
</table>

<p>Think of it like a mailing address: the routing number is the building, and the account number is the apartment. The building address is printed on the outside for everyone, but only the right apartment number gets the letter to you.</p>

<h2>What a Routing Number Is</h2>

<p>A routing number, formally an ABA routing transit number, is a nine-digit code that identifies a US financial institution for payment processing. The American Bankers Association created the system more than a century ago for sorting paper checks, and it now underpins ACH payments, direct deposit and Fedwire transfers. Numbers are issued by an official registrar designated by the ABA, currently LexisNexis Risk Solutions, under policies overseen by the ABA's Routing Number Administrative Board.</p>

<h3>How the nine digits are structured</h3>

<ul>
<li><strong>Digits 1 to 4:</strong> the Federal Reserve routing symbol, which points to a Federal Reserve processing region.</li>
<li><strong>Digits 5 to 8:</strong> the ABA institution identifier for the specific bank.</li>
<li><strong>Digit 9:</strong> a check digit calculated from the first eight.</li>
</ul>

<h3>How the check digit catches typos</h3>

<p>The check digit is why a mistyped routing number is usually rejected instead of sending money to the wrong bank. Multiply the nine digits by the repeating weights 3, 7, 1, 3, 7, 1, 3, 7, 1, add the results, and a valid routing number gives a total that is a multiple of 10.</p>

<p>Here is the calculation on an illustrative eight-digit stem, 12345678:</p>

<ol>
<li>1 x 3 = 3</li>
<li>2 x 7 = 14</li>
<li>3 x 1 = 3</li>
<li>4 x 3 = 12</li>
<li>5 x 7 = 35</li>
<li>6 x 1 = 6</li>
<li>7 x 3 = 21</li>
<li>8 x 7 = 56</li>
</ol>

<p>The sum is 3 + 14 + 3 + 12 + 35 + 6 + 21 + 56 = 150. The ninth digit is multiplied by 1, and 150 is already a multiple of 10, so the check digit must be 0, giving 123456780. If a client typed 123456880 instead (one wrong digit), the seventh digit becomes 8, so 8 x 3 = 24 replaces 21, the total becomes 153, and the number fails. This example only shows the arithmetic: it is not a real bank's routing number.</p>

<h2>What an Account Number Is</h2>

<p>Your account number identifies one specific checking or savings account at your bank. Unlike routing numbers, there is no national standard for length or structure. Banks set their own formats, so account numbers commonly run from about 8 to 12 digits, and the ACH file format allows up to 17 characters. Some banks include leading zeros, which matter: dropping them is a frequent cause of R03 or R04 returns, explained in our guide to <a href="/blog/ach-return-codes">ACH return codes</a>.</p>

<p>Because the account number is what lets someone target your money, treat it as private. Share it with clients who need to pay you and with payroll or benefits providers, but not in public places such as a website footer.</p>

<h2>Where to Find Your Routing and Account Numbers</h2>

<p>Use one of these sources, ideally the first two, because they come straight from the bank:</p>

<ol>
<li><strong>Banking app or online banking.</strong> Open the account and look for "account details", "direct deposit info" or "routing and account numbers". Many apps also generate a direct deposit form.</li>
<li><strong>Bank statement.</strong> Your account number appears on every statement, and many banks print the routing number too.</li>
<li><strong>A check.</strong> The line of numbers at the bottom (the MICR line) shows the routing number first, between special symbols, then usually the account number and the check number. Our guide to <a href="/blog/how-to-write-a-check">how to write a check</a> labels each part.</li>
<li><strong>Bank website.</strong> Banks publish their routing numbers, often split by state and by payment type.</li>
<li><strong>Bank letter or voided check.</strong> Payroll departments and some clients ask for one. See <a href="/blog/what-is-a-voided-check">what a voided check is</a> and how to make one.</li>
</ol>

<p>The ABA also runs a public lookup tool, though it limits casual use to a small number of searches per day and per month and points heavy users to the official registrar. The <a href="https://www.aba.com/about-us/routing-number" target="_blank" rel="noopener noreferrer">ABA routing number page</a> explains the lookup and warns that unofficial lookup services may show outdated numbers.</p>

<h3>Routing and account numbers on direct deposit and payroll forms</h3>

<p>Direct deposit forms, client vendor setup forms and payroll portals all ask for the same pair of numbers, often with an account type (checking or savings). Fill them in from your bank's own records, and double-check the account type, because sending a credit to a checking account number labeled as savings can cause it to be rejected. If a client's AP portal asks you to upload a bank letter or voided check, that document lets them verify the numbers you typed against what your bank printed.</p>

<p>Some online banks and payment apps issue account and routing numbers that belong to a partner bank rather than the app itself. That is normal: the routing number identifies the bank that actually holds the funds. Just make sure the bank name you print on your invoice matches the routing number, or the client's AP team may query it.</p>

<h2>ACH, Wire and Check Routing Numbers: Why Yours May Differ</h2>

<p>A single bank can hold several routing numbers. That happens for three main reasons:</p>

<ul>
<li><strong>Payment type.</strong> Many banks list one routing number for ACH and direct deposit and another for incoming domestic wires.</li>
<li><strong>Region.</strong> Large banks often assign ACH routing numbers by the state where you opened the account.</li>
<li><strong>Mergers.</strong> When banks merge, older routing numbers may stay active for a while before being retired.</li>
</ul>

<p>For invoicing, this means you should never copy a routing number from a random website. Take it from your own bank's account details for the exact payment type, and label it on the invoice. If you accept both ACH and wires, print both numbers with clear labels, for example "ACH routing" and "Wire routing". Our <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer guide</a> explains when clients use each, and <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> covers timing.</p>

<h2>Routing Numbers vs Other Bank Codes</h2>

<table>
<thead>
<tr><th>Code</th><th>Country or use</th><th>Format</th><th>Identifies</th></tr>
</thead>
<tbody>
<tr><td>ABA routing number</td><td>US domestic</td><td>9 digits</td><td>Bank</td></tr>
<tr><td>SWIFT / BIC</td><td>International wires</td><td>8 or 11 characters</td><td>Bank (and branch)</td></tr>
<tr><td>IBAN</td><td>Europe, UK, Middle East and others</td><td>Up to 34 characters</td><td>Bank and account together</td></tr>
<tr><td>Sort code</td><td>UK</td><td>6 digits</td><td>Bank and branch</td></tr>
<tr><td>Transit and institution number</td><td>Canada</td><td>5 + 3 digits</td><td>Branch and bank</td></tr>
</tbody>
</table>

<p>If you bill foreign clients, they will usually need your SWIFT code and account number rather than (or as well as) your routing number. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers which details to show, and <a href="/blog/iso-20022-payments">ISO 20022 for small businesses</a> explains why structured name and address data now matters on cross-border payments.</p>

<h2>How to Show Routing and Account Numbers on an Invoice</h2>

<p>Follow these steps to set up the payment section of your invoice correctly:</p>

<ol>
<li><strong>Use a business account.</strong> A separate account keeps client payments out of your personal finances and makes monitoring easier. See <a href="/blog/business-bank-account-for-freelancers">do freelancers need a business bank account</a>.</li>
<li><strong>Copy numbers from your bank, not memory.</strong> Paste them from the app or statement and check every digit.</li>
<li><strong>Label each number.</strong> Write "Routing number (ACH)" and "Account number", not just two unlabeled strings of digits.</li>
<li><strong>Match the account name.</strong> Use the exact name on the account, which should match the business name on the invoice.</li>
<li><strong>Add the payment reference.</strong> Ask clients to quote the invoice number so you can match the deposit.</li>
<li><strong>Save it once.</strong> Enter the details in the notes or payment terms area of the <a href="/invoice-generator/usa">US invoice generator</a> and reuse them for every invoice.</li>
</ol>

<p>A clean payment block looks like this:</p>

<ul>
<li>Account name: Rivera Design LLC</li>
<li>Bank: [your bank name]</li>
<li>Routing number (ACH): 9 digits from your bank</li>
<li>Account number: from your bank</li>
<li>Reference: invoice number</li>
</ul>

<h3>Common mistakes to avoid</h3>

<ul>
<li><strong>Swapping the two numbers.</strong> A routing number is always nine digits; if the "routing number" on your invoice is longer or shorter, it is probably your account number.</li>
<li><strong>Using a wire routing number for ACH.</strong> Many banks use different numbers for each, so label them.</li>
<li><strong>Old numbers after a bank merger or account change.</strong> Update templates the day your bank tells you.</li>
<li><strong>Sending details as an image.</strong> Clients retype numbers from images and make errors; send text they can copy.</li>
<li><strong>Not quoting the account name exactly.</strong> Mismatched names can delay or block payments, especially wires.</li>
</ul>

<h2>Worked Example: What a Wrong Digit Costs</h2>

<p>A freelance designer sends an invoice for $3,600.00: $3,000.00 for a brand identity project plus $600.00 for print-ready files, no sales tax on the services in her state. The client pays $1,800.00 as a 50% deposit by ACH credit, then the remaining $1,800.00 a month later.</p>

<p>On the second payment, the client's AP clerk types the account number with a dropped leading zero. The client's bank sends the credit, but the designer's bank cannot match it, so it is returned with R03 two banking days later. The designer's invoice still shows the $1,800.00 balance due ($3,600.00 total minus $1,800.00 amount paid), so nothing in her books changes; the payment simply never arrived. The client re-sends it correctly five banking days after the original due date.</p>

<p>The cost was a week's delay and several emails. The fix was to add a line to the invoice: "Account number includes a leading zero, please copy exactly", and to send the details as text the client can copy, not as an image. Small clarity changes like this prevent most returned credits.</p>

<h2>Keeping Your Numbers Safe</h2>

<p>Printing your routing and account numbers on invoices is normal, but criminals also use them. Two risks matter most:</p>

<ul>
<li><strong>Unauthorized debits.</strong> Someone with your numbers can try to debit your account. US consumers and businesses can dispute unauthorized ACH debits, and banks offer ACH debit blocks and filters for business accounts. If you only receive payments into an account, ask your bank to block debits on it.</li>
<li><strong>Payment redirection fraud.</strong> A fraudster impersonates you and tells your client your bank details have changed. Tell clients you will never change bank details by email alone, and ask them to call you on a known number to confirm any change.</li>
</ul>

<p>For checks, <a href="/blog/positive-pay-check-fraud">Positive Pay</a> is another tool banks offer to stop altered or counterfeit checks drawn on your account.</p>

<h2>Add Your Routing and Account Numbers to Your Next Invoice</h2>

<p>The routing number vs account number difference is simple once you see it: the routing number finds the bank, the account number finds you. Take both straight from your bank, label them clearly, use the right routing number for ACH or wire, and give clients an invoice number to quote. Set up your payment block once in the <a href="/invoice-generator">free invoice generator</a>, pick a clear layout from our <a href="/invoice-templates">invoice templates</a>, and every invoice you send will tell clients exactly where to pay. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "paypal-business-vs-personal-account",
    title: "PayPal Business vs Personal Account: Which Should You Use?",
    description:
      "PayPal business vs personal account compared: features, fees, invoicing, team access, how to upgrade and what changes, with a worked fee example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "paypal-fees",
      "how-to-send-paypal-invoice",
      "paypal-goods-and-services-vs-friends-and-family",
      "stripe-vs-paypal",
    ],
    faqs: [
      {
        q: "What is the main difference between a PayPal business and personal account?",
        a: "A personal account is built for individuals who shop online and send money to friends and family. A business account is built for receiving payments from customers: it can operate under a business name, add team members with their own logins, use PayPal invoicing and checkout tools at scale, and connect to accounting software. Both cost nothing to open; you pay fees when you receive commercial payments.",
      },
      {
        q: "Is a PayPal business account free?",
        a: "Yes, to open and to hold. PayPal's US business page says there is no fee to open a business account and no monthly maintenance fee as of 2026. You pay transaction fees when customers pay you, for example 3.49% plus 0.49 USD on an invoice paid with a PayPal balance or PayPal Checkout, and 2.99% plus 0.49 USD when a customer pays the invoice by card. Optional paid add-ons exist but are not required.",
      },
      {
        q: "Can I use a personal PayPal account for my business?",
        a: "You can receive occasional goods and services payments in a personal account, and the same commercial fees apply. But if you sell regularly, invoice clients or trade under a business name, a business account is the better fit, and PayPal's terms distinguish the two account types. Using a personal account for steady business income also mixes business and personal records, which makes bookkeeping and tax reporting harder.",
      },
      {
        q: "How do I upgrade my PayPal personal account to a business account?",
        a: "PayPal's help center says to go to Settings, then Account Options, and choose Upgrade to a Business Account. You then add your business details, such as business type, name and contact information. Before you upgrade, note that it closes the account and routing numbers linked to your personal PayPal balance, so any payments set up with those numbers will fail until you update them.",
      },
      {
        q: "Can I downgrade a PayPal business account back to personal?",
        a: "Usually not. PayPal's help center says most business accounts cannot be downgraded and recommends opening a new personal account instead. Because each account needs its own email address, you would use a different email for the new personal account, or close the business account first if you want to reuse that email. Think about this before upgrading an account you also use for personal spending.",
      },
      {
        q: "Can I have both a personal and a business PayPal account?",
        a: "Yes. PayPal allows one personal account and one business account per person, each registered with a unique email address. Many freelancers keep the personal account for shopping and family transfers and open a separate business account for client payments. That split keeps your business income easy to export for bookkeeping and avoids accidental friends and family transfers for client work.",
      },
      {
        q: "Do PayPal business accounts pay higher fees than personal accounts?",
        a: "Not for the same type of payment. Fees depend on the transaction type: commercial payments for goods and services carry fees whichever account receives them, while personal friends and family transfers funded from a bank or balance are generally free in the US. The difference is that a business account is where most commercial tools live, so more of its incoming payments are fee-bearing.",
      },
      {
        q: "Does a PayPal business account need an EIN or LLC?",
        a: "No. You can open a US PayPal business account as an individual or sole proprietor using your own name and Social Security number. If you have an LLC or corporation, you would normally register the account in the business's legal name with its EIN. PayPal may ask for identity and business verification documents, and it issues tax forms based on the details you provide.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the PayPal business vs personal account choice, pick a personal account for shopping and sending money to friends, and a business account if you invoice clients, sell regularly or want to trade under a business name. Both are free to open; fees apply when you receive commercial payments. A business account adds team logins, business branding and fuller invoicing and reporting tools.</p>

<p>Plenty of freelancers start with a personal PayPal account because it is what they already have, then wonder whether they should switch once clients start paying them. This guide compares the two account types feature by feature, explains what really changes with fees, walks through upgrading (and what breaks when you do), and runs a worked fee example on a real invoice amount. If you only need the fee table, see our <a href="/blog/paypal-fees">PayPal fees guide</a>; to bill clients outside PayPal, use the <a href="/invoice-generator">free invoice generator</a> and add a PayPal option to your payment terms.</p>

<h2>PayPal Business vs Personal Account: Side by Side</h2>

<table>
<thead>
<tr><th>Feature</th><th>Personal account</th><th>Business account</th></tr>
</thead>
<tbody>
<tr><td>Cost to open</td><td>Free</td><td>Free, no monthly fee (US, as of 2026)</td></tr>
<tr><td>Name shown to payers</td><td>Your personal name</td><td>Your business or trading name</td></tr>
<tr><td>Send money to friends and family</td><td>Yes</td><td>Business-focused; designed for commercial payments</td></tr>
<tr><td>Receive goods and services payments</td><td>Yes, commercial fees apply</td><td>Yes, commercial fees apply</td></tr>
<tr><td>PayPal invoicing and checkout tools</td><td>Basic</td><td>Full set, including checkout buttons and payment links</td></tr>
<tr><td>Team members with separate logins</td><td>No</td><td>Yes, through user management</td></tr>
<tr><td>Accounting and e-commerce integrations</td><td>Limited</td><td>Broad</td></tr>
<tr><td>Can register as LLC or corporation with EIN</td><td>No</td><td>Yes</td></tr>
<tr><td>Can be downgraded later?</td><td>Not applicable</td><td>Usually not</td></tr>
</tbody>
</table>

<p>The short version: the money moves the same way, but the business account is set up to look and behave like a business on the payer's side and in your records.</p>

<h2>What a Personal PayPal Account Is For</h2>

<p>A personal account is designed for individuals. It lets you pay at online checkouts, send money to friends and family, split costs and receive the occasional payment for something you sold. It shows your own name to the people who pay you.</p>

<p>You can receive goods and services payments in a personal account, and those payments carry commercial fees and buyer protection. What you should not do is use friends and family transfers for client work to avoid fees: that removes protection for both sides and can cause problems with PayPal. Our guide to <a href="/blog/paypal-goods-and-services-vs-friends-and-family">PayPal goods and services vs friends and family</a> explains the difference in detail.</p>

<h3>When a personal account is enough</h3>

<ul>
<li>You sell personal items occasionally rather than running a business.</li>
<li>You receive one or two client payments a year and invoice them elsewhere.</li>
<li>You use PayPal mostly to pay, not to get paid.</li>
</ul>

<h2>What a PayPal Business Account Adds</h2>

<p>A business account is aimed at anyone who regularly gets paid by customers. The main practical differences are:</p>

<ul>
<li><strong>Business identity.</strong> Customers see your business name on the payment and on their statement, which looks more professional and reduces "who is this?" disputes.</li>
<li><strong>Team access.</strong> You can add users with their own logins and permissions, so a bookkeeper or assistant can see transactions without your password.</li>
<li><strong>Checkout and invoicing tools.</strong> Payment buttons, payment links, PayPal invoicing and integrations with shopping carts. See <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a> for the invoicing workflow.</li>
<li><strong>Legal entity details.</strong> An LLC or corporation can register the account in its legal name with its EIN, which keeps the account and tax reporting aligned with the business.</li>
<li><strong>Reporting.</strong> Activity downloads and integrations that make month-end bookkeeping simpler.</li>
</ul>

<h2>Fees: Does Account Type Change What You Pay?</h2>

<p>This is the most common misunderstanding. PayPal fees depend mainly on the type of transaction, not on the account type. Commercial payments for goods and services carry fees whichever account receives them; personal transfers between friends and family funded by a bank or balance are generally free in the US.</p>

<p>For US business accounts, PayPal's merchant fee page lists these invoicing rates as of 2026:</p>

<table>
<thead>
<tr><th>How the client pays a PayPal invoice</th><th>Fee to you</th></tr>
</thead>
<tbody>
<tr><td>PayPal Checkout, PayPal balance or Venmo</td><td>3.49% + 0.49 USD</td></tr>
<tr><td>Standard credit or debit card, Apple Pay</td><td>2.99% + 0.49 USD</td></tr>
<tr><td>PayPal Pay Later</td><td>4.99% + 0.49 USD</td></tr>
<tr><td>Pay by Bank (ACH)</td><td>1%, capped at 10.00 USD</td></tr>
<tr><td>International invoice payment</td><td>Add 1.50% to the domestic rate</td></tr>
</tbody>
</table>

<p>The <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal merchant fees page</a> also shows currency conversion and other charges, which change from time to time, so check it before you set prices. For a broader comparison with other processors, see <a href="/blog/stripe-vs-paypal">Stripe vs PayPal</a>.</p>

<h3>What about fees in a personal account?</h3>

<p>Personal accounts follow PayPal's consumer fee schedule. When someone sends a personal account a payment for goods or services, a seller fee applies, just as it does for a business account. Friends and family transfers funded by a bank account or PayPal balance are generally free to send and receive in the US, but they are meant for genuine personal transfers. Card-funded transfers and currency conversion carry fees in either case. The practical result: switching account type does not make client payments cheaper, and trying to route client work through friends and family transfers to avoid fees removes protections and can put the account at risk.</p>

<h3>Fees you can avoid entirely</h3>

<ul>
<li><strong>Instant transfers to your bank.</strong> PayPal lists standard withdrawals to a bank as free when no currency conversion is involved, while instant transfers cost 1.5% (minimum 0.50 USD) as of 2026. Use standard transfers unless you need the money the same day.</li>
<li><strong>Currency conversion.</strong> Holding or withdrawing in the currency you were paid in, where possible, avoids PayPal's conversion spread.</li>
<li><strong>Optional subscriptions.</strong> Basic invoicing does not need a paid plan; check whether you actually use the features before subscribing to add-ons.</li>
</ul>

<h2>Worked Example: PayPal Fees on a $1,200 Invoice</h2>

<p>A freelance copywriter invoices a US client $1,200.00 for a website copy package and offers PayPal as a payment option. Here is what she receives depending on how the client pays, using the 2026 business account invoicing rates above:</p>

<table>
<thead>
<tr><th>Client pays with</th><th>Fee calculation</th><th>Fee</th><th>She receives</th></tr>
</thead>
<tbody>
<tr><td>PayPal Checkout</td><td>3.49% x 1,200 = 41.88, plus 0.49</td><td>$42.37</td><td>$1,157.63</td></tr>
<tr><td>Debit or credit card</td><td>2.99% x 1,200 = 35.88, plus 0.49</td><td>$36.37</td><td>$1,163.63</td></tr>
<tr><td>Pay by Bank (ACH)</td><td>1% x 1,200 = 12.00, capped at 10.00</td><td>$10.00</td><td>$1,190.00</td></tr>
<tr><td>PayPal Checkout, client in the UK</td><td>(3.49% + 1.50%) x 1,200 = 59.88, plus 0.49</td><td>$60.37</td><td>$1,139.63</td></tr>
</tbody>
</table>

<p>If she received the same $1,200.00 as a goods and services payment into a personal account, a commercial fee would still apply. Account type does not save fees; payment method does. Nudging clients toward bank payment saves her $32.37 on this invoice compared with PayPal Checkout. Our article on <a href="/blog/best-payment-methods-for-small-business">the cheapest payment methods for small business</a> compares PayPal with ACH, cards and wires.</p>

<h2>How to Upgrade a PayPal Personal Account to Business</h2>

<p>If you decide to switch, the upgrade takes a few minutes. Follow these steps:</p>

<ol>
<li><strong>Check what is tied to the account.</strong> List any direct deposits, subscriptions or payments that use the account and routing numbers linked to your PayPal balance. PayPal says upgrading closes those numbers, so payments using them will fail.</li>
<li><strong>Decide whether you still need a personal account.</strong> Most business accounts cannot be downgraded. If you also use PayPal personally, consider opening a separate business account with a different email instead of upgrading.</li>
<li><strong>Go to Settings.</strong> Log in, open Settings, then Account Options.</li>
<li><strong>Choose Upgrade to a Business Account.</strong> Enter your business type (individual or sole proprietor, LLC, corporation and so on), business name and contact details.</li>
<li><strong>Complete verification.</strong> PayPal may ask for identity documents, an EIN for an entity, and bank account confirmation.</li>
<li><strong>Request new account and routing numbers if needed</strong> and update anyone who pays into them.</li>
<li><strong>Update your invoices.</strong> Change the PayPal email or payment link on your invoice template and in your payment terms.</li>
</ol>

<p>The <a href="https://www.paypal.com/us/cshelp/article/how-do-i-upgrade-or-downgrade-my-paypal-account-help339" target="_blank" rel="noopener noreferrer">PayPal help article on upgrading or downgrading</a> confirms these steps and caveats.</p>

<h3>What changes after you upgrade</h3>

<p>After the upgrade, your login and transaction history usually stay with the account, but several things change. Your payers see your business name instead of your personal name. Any account and routing numbers linked to your personal PayPal balance are closed, so update direct deposits and saved payment instructions. You can add team members through user management, and you may be asked for extra verification such as business documents or an EIN. Finally, review your notification and receipt settings, because the business name and contact details now appear on receipts your customers get.</p>

<h2>Upgrade or Open a Second Account?</h2>

<p>PayPal allows one personal and one business account per person, each with its own email. That gives you two routes:</p>

<ul>
<li><strong>Upgrade</strong> if your current account is already used almost entirely for business, its email is a business address, and you do not rely on its account and routing numbers.</li>
<li><strong>Open a new business account</strong> if you also use PayPal for personal spending and family transfers. This keeps business income separate, which is easier for bookkeeping and taxes.</li>
</ul>

<p>Keeping business money separate is the same principle as having a separate bank account; see <a href="/blog/business-bank-account-for-freelancers">do freelancers need a business bank account</a>.</p>

<h2>Which Account Should You Choose?</h2>

<table>
<thead>
<tr><th>Your situation</th><th>Better choice</th></tr>
</thead>
<tbody>
<tr><td>Occasional seller of personal items</td><td>Personal</td></tr>
<tr><td>Freelancer billing clients every month</td><td>Business</td></tr>
<tr><td>LLC or corporation</td><td>Business, in the entity's name</td></tr>
<tr><td>Need a bookkeeper or assistant to log in</td><td>Business</td></tr>
<tr><td>Selling online through a store or checkout</td><td>Business</td></tr>
<tr><td>Mainly paying for things online</td><td>Personal</td></tr>
</tbody>
</table>

<p>If you get paid by international clients, compare PayPal's cross-border costs with alternatives in <a href="/blog/wise-vs-paypal">Wise vs PayPal</a> and <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal</a> before you commit.</p>

<p>Whichever you choose, set the account up properly from day one: use a business email address you will keep, turn on two-factor authentication, link the bank account you want payouts to reach, and add your business address and customer service contact so clients recognize you. If you have staff or a bookkeeper, give each person their own user login with only the permissions they need, rather than sharing your password.</p>

<h2>Using PayPal Alongside Your Own Invoices</h2>

<p>You do not have to send invoices through PayPal to accept PayPal. Many freelancers create invoices with their own branding, then list PayPal as one of several payment options with a link or email address. That keeps your invoice numbering, terms and records in one place even when clients pay different ways.</p>

<p>When you do this, show the payment method clearly and name the fee policy. If you choose to pass on processing costs, check the rules first; our <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> guide covers where surcharges are allowed. A cleaner approach is to build typical fees into your rates and offer a bank transfer option for clients who prefer it. You can also add a pay-now button with our guide to <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a>.</p>

<h3>Recording PayPal payments and fees in your books</h3>

<p>Record the full invoice amount as income and the PayPal fee as an expense, rather than recording only the net deposit. In the $1,200.00 example paid through PayPal Checkout, that means income of $1,200.00, a merchant fee expense of $42.37, and $1,157.63 arriving in your PayPal balance. When you later transfer the balance to your bank, that is a transfer between your own accounts, not new income. Keeping the gross and fee separate makes your revenue match your invoices and makes the fee deductible as a business expense. Business accounts make this easier because their activity downloads separate fees from payments.</p>

<h3>Tax reporting</h3>

<p>Payment platforms may send you, and the IRS, a Form 1099-K when your goods and services payments pass the federal reporting threshold. That applies whichever account type you use, and income is taxable whether or not you receive a form. Our guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a> explains the current rules. A business account registered with your EIN keeps those forms in the business's name.</p>

<h2>Get Paid Through PayPal With a Professional Invoice</h2>

<p>For the PayPal business vs personal account decision, the rule of thumb is simple: if clients pay you regularly, use a business account, either by upgrading or by opening a separate one, and remember that fees follow the payment type, not the account type. Then send every client a clear invoice with your PayPal details and a cheaper bank option. Create it in the <a href="/invoice-generator">free invoice generator</a>, or start from a clean layout like the <a href="/invoice-templates/modern">modern invoice template</a>. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "best-payment-methods-for-small-business",
    title: "Best Payment Methods for Small Business: Costs Compared",
    description:
      "The best payment methods for small business compared: ACH, cards, PayPal, wires, checks and instant payments, with 2026 fees and the cheapest way to get paid.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "ach-vs-wire-transfer",
      "how-to-accept-credit-card-payments",
      "stripe-fees",
      "pay-by-bank",
    ],
    faqs: [
      {
        q: "What is the cheapest way for a small business to get paid?",
        a: "For most US invoices, a bank payment is cheapest. A client pushing an ACH credit or using their bank's bill pay often costs you nothing beyond your bank's own fees, and processor-collected ACH is usually capped: Stripe lists 0.8% capped at 5 USD and PayPal Pay by Bank lists 1% capped at 10 USD as of 2026. Cards and PayPal wallet payments cost roughly 3% or more, which adds up quickly on larger invoices.",
      },
      {
        q: "Should a small business accept credit cards?",
        a: "Usually yes, at least as an option. Cards are what many clients prefer, they settle quickly, and accepting them can speed up payment on smaller invoices. The trade-off is cost, typically around 2.9% to 3.5% plus a fixed fee per payment through common processors. Many businesses accept cards but encourage bank payment on large invoices, or build card fees into their pricing rather than surcharging.",
      },
      {
        q: "Is ACH or wire transfer better for invoices?",
        a: "ACH is better for routine invoices because it is cheap and most clients can send it from online banking. Wires are better for large, time-sensitive or international payments because they move the same day and are hard to reverse once sent, but both sides often pay bank fees. Many businesses list ACH as the default and offer wire details for big or cross-border invoices.",
      },
      {
        q: "Are paper checks still worth accepting?",
        a: "Many US businesses, especially larger companies and government bodies, still pay by check, so refusing them can slow payment. But checks are slow, can be lost or stolen, and need handling and depositing. Mobile deposit reduces the hassle. A good approach is to accept checks without making them the default, and to encourage regular check payers to move to ACH by sending them your bank details.",
      },
      {
        q: "How many payment methods should I offer on an invoice?",
        a: "Two or three is usually right: one cheap bank option (ACH or local bank transfer), one convenient card or wallet option, and a wire or international option if you have foreign clients. Too many choices make the payment section cluttered and harder to reconcile. List the preferred method first, with all the details needed to complete it, and give a payment reference such as the invoice number.",
      },
      {
        q: "Can I charge clients extra for paying by card?",
        a: "In many US states you can add a credit card surcharge if you follow card network rules, including caps and disclosure, but some states restrict surcharges and debit cards cannot be surcharged. Offering a discount for cash or bank payment is another route. Rules change, so check the current state law and your processor's rules first. Our credit card surcharge rules guide summarizes the main limits by country and state.",
      },
      {
        q: "What payment method is best for international clients?",
        a: "It depends on the client's country and the amount. International wires are reliable for large amounts but carry bank fees and exchange rate markups. Services such as Wise, Payoneer and PayPal can be cheaper or more convenient for smaller amounts, while cards are easy but add cross-border and currency conversion fees. Compare the total cost, including the exchange rate, rather than just the headline fee.",
      },
      {
        q: "Do instant payments like FedNow and RTP work for invoices?",
        a: "Yes, where both banks support them. FedNow and the RTP network let funds arrive within seconds, any time of day, and payments are final once sent. Adoption by small business banks has grown but is not universal, and fees vary by bank. Request for payment features can link a payment directly to an invoice. Check whether your bank can receive instant payments before listing it as an option.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The best payment methods for small business are usually a bank payment (ACH or local bank transfer) as the default, because it is the cheapest way to get paid, plus a card or PayPal option for convenience and a wire option for large or international invoices. As of 2026, processor ACH fees are capped at a few dollars, while card payments typically cost around 3% of the invoice.</p>

<p>Every payment method you accept is a trade-off between cost, speed, convenience for the client, and the risk the money comes back later. This guide compares the main payment methods for small business side by side, shows the 2026 fees from processors' own pricing pages, works through the real cost on a $3,000 invoice, and explains how to present your options on an invoice so clients pick the one you prefer. Once you have chosen, add your payment details to the <a href="/invoice-generator">free invoice generator</a> so every invoice shows them.</p>

<h2>Payment Methods for Small Business Compared</h2>

<table>
<thead>
<tr><th>Method</th><th>Typical cost to you (2026)</th><th>Speed</th><th>Reversal risk</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>ACH credit (client pushes)</td><td>Usually free or your bank's small fee</td><td>Same day to 2 business days</td><td>Low</td><td>Routine B2B invoices</td></tr>
<tr><td>ACH debit through a processor</td><td>Stripe: 0.8%, capped at $5</td><td>A few business days</td><td>Medium (returns allowed)</td><td>Recurring billing with authorization</td></tr>
<tr><td>Credit or debit card</td><td>Stripe: 2.9% + 30 cents; PayPal invoice: 2.99% + 49 cents</td><td>Approval instant, payout in days</td><td>Medium to high (chargebacks)</td><td>Small invoices, consumer clients</td></tr>
<tr><td>PayPal Checkout on an invoice</td><td>3.49% + 49 cents</td><td>Instant to PayPal balance</td><td>Medium</td><td>Clients who prefer PayPal</td></tr>
<tr><td>PayPal Pay by Bank</td><td>1%, capped at $10</td><td>A few business days</td><td>Low to medium</td><td>PayPal users paying larger invoices</td></tr>
<tr><td>Domestic wire</td><td>Bank fees on both sides, varies</td><td>Usually same day</td><td>Very low</td><td>Large or urgent payments</td></tr>
<tr><td>Instant payment (FedNow, RTP)</td><td>Varies by bank</td><td>Seconds, 24/7</td><td>Very low</td><td>Fast settlement where banks support it</td></tr>
<tr><td>Paper check</td><td>Handling time and deposit risk</td><td>Days to weeks</td><td>Medium (bounced or fraud)</td><td>Clients whose AP only pays by check</td></tr>
<tr><td>P2P apps (Zelle, Venmo, Cash App)</td><td>Varies; business profiles charge fees</td><td>Minutes</td><td>Low to medium</td><td>Small local service businesses</td></tr>
</tbody>
</table>

<p>Card and ACH figures come from the <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe pricing page</a> and the <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal merchant fees page</a> as of 2026. Bank and wire fees vary by bank and account plan, so check your own fee schedule.</p>

<h2>Bank Transfers: ACH and Wires</h2>

<h3>ACH payments</h3>

<p>ACH is the backbone of US business payments. When a client pushes an ACH credit using the details on your invoice, you usually pay nothing or only a small fee set by your bank. When you pull an ACH debit through a processor with the client's authorization, fees are low and capped, so they barely change on large invoices. The trade-off is speed (often one to two business days) and the possibility of returns: a debit can come back for insufficient funds or an authorization dispute. Our guide to <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> covers setup, and <a href="/blog/ach-return-codes">ACH return codes</a> explains what to do when one bounces.</p>

<h3>Wire transfers</h3>

<p>Wires move money quickly, usually the same business day, and are very hard to reverse once sent. That makes them good for large invoices and first-time clients. The downside is cost: both the sending and receiving banks may charge, and international wires add intermediary fees and exchange rate markups. See <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> for a direct comparison, and compare the total cost of international transfers, including exchange rates, before choosing a method for overseas clients.</p>

<h3>Instant payments</h3>

<p>The FedNow Service and the RTP network let money move between participating banks in seconds, every day of the year. Payments are final, and request-for-payment features can carry invoice details. The catch is coverage: not every bank can receive instant payments yet. Our <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP guide</a> explains where they fit.</p>

<h2>Card Payments and Payment Links</h2>

<p>Cards are what many clients reach for first, especially consumers and small companies paying on a company card. Accepting them usually speeds up payment on smaller invoices because the client can pay from a link in seconds. The cost is the highest of the mainstream methods: Stripe lists 2.9% plus 30 cents for domestic cards, plus 1.5% for international cards and another 1% if currency conversion is needed, as of 2026. Card payments also carry chargeback risk for months after the sale.</p>

<p>If you take cards, put a pay-now link on the invoice (see <a href="/blog/add-payment-link-to-invoice">how to add a payment link</a>) and read <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a> for setup choices. For the full breakdown of processor charges, see <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<h3>Chargebacks and disputes</h3>

<p>A card payment is not final in the way a wire is. The cardholder can dispute it with their card issuer, and if the dispute succeeds the money is taken back from you, usually with a dispute fee from your processor. Disputes for services are often about scope or quality, so the best protection is paperwork: a signed proposal or contract, an invoice that describes exactly what was delivered, and a record of the client approving the work. Keep those documents together so you can answer a dispute quickly. For large, one-off projects with a new client, asking for a bank payment instead of a card removes most of this risk.</p>

<h2>PayPal and Other Wallets</h2>

<p>PayPal is convenient for clients who already have it, and it supports invoices, cards and bank payments. Its cost depends on how the client pays: 3.49% plus 49 cents for PayPal Checkout on an invoice, 2.99% plus 49 cents for a card, and 1% capped at $10 for Pay by Bank, as of 2026. If you use PayPal for business, use a business account; our comparison of <a href="/blog/paypal-business-vs-personal-account">PayPal business vs personal accounts</a> explains why.</p>

<p>Peer-to-peer apps such as Zelle, Venmo and Cash App suit small local businesses that bill individuals. They are fast, but business use has its own rules and fees. See <a href="/blog/venmo-zelle-cash-app-invoice">Venmo, Zelle and Cash App invoicing</a> before relying on them.</p>

<h2>Checks: Still Common, Rarely Ideal</h2>

<p>Many larger US companies and public bodies still pay suppliers by check. Checks are slow, need depositing, can bounce, and are a target for theft and alteration. Mobile deposit and bank fraud tools such as Positive Pay reduce the risk on outgoing checks. Accept them when a client insists, but put your ACH details first on the invoice. Federal agencies have been moving away from paper checks, and many businesses are following, so expect check volumes to keep falling.</p>

<p>If a regular client pays by check, the easiest switch is to ask their accounts payable team to add you as an ACH vendor. Send them a short letter on your letterhead with your legal name, bank name, routing and account numbers, and a contact for confirmation. Most AP teams can change a supplier's payment method within one or two payment cycles, and you save the trip to the bank and the wait for the check to clear.</p>

<h2>Worked Example: Fees on a $3,000 Invoice</h2>

<p>A small marketing agency sends a $3,000.00 invoice each month. Here is what each method costs, using the 2026 published rates above:</p>

<table>
<thead>
<tr><th>Method</th><th>Calculation</th><th>Fee per invoice</th><th>Fee over 20 invoices a year</th></tr>
</thead>
<tbody>
<tr><td>ACH credit pushed by client</td><td>No processor fee (bank fees vary)</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Stripe ACH Direct Debit</td><td>0.8% x 3,000 = 24.00, capped at 5.00</td><td>$5.00</td><td>$100.00</td></tr>
<tr><td>PayPal Pay by Bank</td><td>1% x 3,000 = 30.00, capped at 10.00</td><td>$10.00</td><td>$200.00</td></tr>
<tr><td>Stripe domestic card</td><td>2.9% x 3,000 = 87.00, plus 0.30</td><td>$87.30</td><td>$1,746.00</td></tr>
<tr><td>PayPal invoice paid by card</td><td>2.99% x 3,000 = 89.70, plus 0.49</td><td>$90.19</td><td>$1,803.80</td></tr>
<tr><td>PayPal invoice paid with PayPal Checkout</td><td>3.49% x 3,000 = 104.70, plus 0.49</td><td>$105.19</td><td>$2,103.80</td></tr>
<tr><td>Stripe international card with conversion</td><td>(2.9% + 1.5% + 1%) x 3,000 = 162.00, plus 0.30</td><td>$162.30</td><td>$3,246.00</td></tr>
</tbody>
</table>

<p>Moving one client from card to ACH saves this agency $82.30 per invoice on Stripe ($87.30 minus $5.00), or $1,646.00 over 20 invoices. That is why the cheapest way to get paid is nearly always to make bank payment the easiest, most visible option on your invoice. If you use a hosted invoicing product, add its own fee too: Stripe Invoicing Starter, for example, lists 0.4% per paid invoice as of 2026.</p>

<h2>How to Choose Your Payment Mix</h2>

<p>Use these steps to decide what to offer:</p>

<ol>
<li><strong>List your clients by type.</strong> Businesses, consumers, government bodies and international clients pay in different ways.</li>
<li><strong>Find your typical invoice size.</strong> Percentage fees hurt most on large invoices; capped ACH fees barely change.</li>
<li><strong>Pick one cheap default.</strong> For US business clients this is usually ACH. Abroad, it may be a local bank transfer or a service like Wise.</li>
<li><strong>Add one convenient option.</strong> A card or PayPal link for clients who will not set up a bank payment.</li>
<li><strong>Add a high-value or international option.</strong> Wire details, or a multi-currency account, for big or cross-border invoices.</li>
<li><strong>Decide how you handle card costs.</strong> Build them into prices, offer an <a href="/blog/early-payment-discount">early payment discount</a> for bank payment, or surcharge where allowed (check <a href="/blog/credit-card-surcharge-rules">surcharge rules</a> first).</li>
<li><strong>Write it into your payment terms.</strong> State methods, due date and any fees in your contract and on the invoice.</li>
</ol>

<h3>Example payment mixes by business type</h3>

<p>There is no single best answer, but these combinations work well for common small businesses:</p>

<ul>
<li><strong>Freelancer or consultant billing US companies:</strong> ACH credit as the default with full bank details on the invoice, a card link for smaller clients, and wire details for large projects. Card fees on a $500 invoice are modest; on a $10,000 project, Stripe's 2.9% plus 30 cents would be $290.30, so steer big invoices to ACH.</li>
<li><strong>Local service business billing households:</strong> card payment link and a P2P app with a business profile, plus checks for older customers. Speed and convenience matter more than a percentage point here, because unpaid small invoices cost more in chasing time than in fees.</li>
<li><strong>Wholesaler or B2B supplier:</strong> ACH as standard, checks accepted from customers who insist, wires for first orders from new buyers, and credit terms only after a credit check. Offer an early payment discount instead of card acceptance if margins are thin.</li>
<li><strong>Business with overseas clients:</strong> a multi-currency account or local receiving details in the client's currency, international wire details as a fallback, and a card option for small amounts. Compare the full cost including the exchange rate, not just the transfer fee.</li>
</ul>

<p>Review the mix once a year. If most clients have moved to bank payments, you may be able to drop a costly option; if late payments are rising, adding a card link may be worth the fee.</p>

<h2>How to Present Payment Methods on an Invoice</h2>

<p>The order and clarity of your payment section affects which method clients choose. A few rules:</p>

<ul>
<li><strong>Put your preferred method first</strong>, with every detail needed to complete it: account name, bank, routing and account number, and the invoice number as the payment reference. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows the layout.</li>
<li><strong>Keep alternatives short.</strong> A single line for the card link and one for wire details is enough.</li>
<li><strong>State your terms.</strong> "Due within 30 days" or "Due on receipt", plus any late fee, so the client knows both how and when to pay.</li>
<li><strong>Be consistent.</strong> Use the same payment block on every invoice so client AP teams set you up once.</li>
</ul>

<p>In the <a href="/invoice-generator/usa">US invoice generator</a>, the notes and terms area is the right place for this block.</p>

<h2>Security Basics for Any Payment Method</h2>

<ul>
<li>Never change bank details on an invoice without telling clients by phone or another trusted channel; fraudsters impersonate suppliers to redirect payments.</li>
<li>Use a dedicated business account for receiving payments, and ask your bank about debit blocks if it only receives money.</li>
<li>Reconcile payments to invoices weekly so returns, chargebacks and short payments are caught early.</li>
<li>Keep processor accounts protected with two-factor authentication and separate user logins for staff.</li>
</ul>

<h2>Set Up Your Payment Options and Get Paid Faster</h2>

<p>The best payment methods for small business balance cost and convenience: make a bank payment your default because it is the cheapest way to get paid, add a card or PayPal option for clients who need it, and keep wires for large or international invoices. Put those options clearly on every invoice with the <a href="/invoice-generator">free invoice generator</a>, and choose a layout with room for a clean payment section from our <a href="/invoice-templates">invoice templates</a>. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
  {
    slug: "no-commercial-value-invoice",
    title: "No Commercial Value Invoice: How to Ship Samples and Gifts",
    description:
      "A no commercial value invoice explained: when to use an NCV invoice for samples, gifts and replacements, what value to declare, and a worked example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "commercial-invoice-template",
      "proforma-invoice-for-customs",
      "hs-code-on-commercial-invoice",
      "proforma-invoice-guide",
    ],
    faqs: [
      {
        q: "What is a no commercial value invoice?",
        a: "A no commercial value (NCV) invoice is a customs invoice for goods that are being shipped without a sale, such as free samples, gifts, warranty replacements or returned items. It lists the same details as a commercial invoice, including description, quantity, origin and value, but states that no payment is due. The value shown is a realistic value for customs purposes, not zero, so customs can assess any duty or tax.",
      },
      {
        q: "Can I put zero value on a customs invoice for free samples?",
        a: "No. Customs authorities expect a realistic value even when nothing is charged. HMRC guidance says free goods cannot be valued on the price paid because there is none, so another valuation method applies, and US entries need a statement of value where no commercial invoice exists. A zero or token value is a common reason for shipments being held, and deliberately understating value can lead to penalties.",
      },
      {
        q: "What value should I declare for samples or gifts?",
        a: "Use a fair value that you can explain. For goods you make, this is often production cost or the price you would charge a trade buyer for the same item; for bought-in goods, the purchase price or current replacement cost. Show the basis in your records. For a warranty replacement, the value of the replacement part or item is used, not zero, even though the customer is not paying again.",
      },
      {
        q: "Do free samples pay import duty?",
        a: "Sometimes. Free samples are generally dutiable on their declared value unless a specific relief applies. The UK offers relief from duty and import VAT for commercial samples that meet HMRC's conditions, such as being used only to obtain orders, and the US tariff schedule has provisions for samples of very low value or marked as samples. Whoever is importer of record pays any duty and tax due.",
      },
      {
        q: "What is the difference between an NCV invoice and a proforma invoice?",
        a: "A proforma invoice is a preliminary or substitute invoice: it can be sent before a sale to quote terms, or filed with customs when the final commercial invoice is not available. An NCV invoice is a customs invoice for a shipment that involves no sale at all. Some carriers and customs systems call an NCV document a proforma invoice, so check what your carrier's form expects.",
      },
      {
        q: "Who pays duties on a no commercial value shipment?",
        a: "The importer of record, usually the recipient, pays unless the shipper arranges delivered duty paid terms with the carrier. For samples sent to a business prospect, many exporters pay duties themselves so the prospect is not surprised by a bill. State the incoterm or duty payer clearly on the NCV invoice and in the carrier booking, because a refused delivery often costs more than the duty.",
      },
      {
        q: "Do I need an HS code on a no commercial value invoice?",
        a: "Yes, it is good practice and many carriers and customs systems require it. The HS code tells customs what the goods are and drives the duty rate and any restrictions, whether the goods are sold or free. Use the code for the goods themselves, not a generic code for samples. Our guide to HS codes on a commercial invoice explains how to find the right one.",
      },
      {
        q: "Is a warranty replacement a no commercial value shipment?",
        a: "It is usually shipped as no charge to the customer, so an NCV invoice is common, but it is not free of value for customs. Declare the value of the replacement goods and state that they replace a defective item under warranty, with a reference to the original sale. Some countries offer relief for replacements under specific procedures, which normally need the original shipment details.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A no commercial value invoice (NCV invoice) is the customs document you use when shipping goods that are not being sold, such as free samples, gifts, warranty replacements or returned items. It shows the same details as a commercial invoice, but states no payment is due. It must still declare a realistic value for customs, because "free" does not mean "worth nothing".</p>

<p>Small exporters often hit this problem when sending a prospect a few product samples: the courier asks for a commercial invoice, but there is no sale to invoice. This guide explains when a no commercial value invoice is the right document, how customs authorities in the US and UK treat free goods, what value to declare, the fields to include, and a worked example. For sold goods, use our <a href="/blog/commercial-invoice-template">commercial invoice template guide</a> instead; to lay out an NCV invoice quickly, the <a href="/invoice-generator">free invoice generator</a> handles line items, values and shipping.</p>

<p>This article is general information, not customs or legal advice. Rules vary by country and change often, so confirm with your carrier, broker or customs authority for each shipment.</p>

<h2>What a No Commercial Value Invoice Is</h2>

<p>Customs authorities need a document for every international shipment that tells them what the goods are, where they were made, who is sending and receiving them, and what they are worth. When goods are sold, that document is the commercial invoice. When nothing is sold, exporters use a no commercial value invoice, sometimes called an NCV invoice, a "no charge" invoice, or (by some carriers) a proforma invoice.</p>

<p>The key point is in the name: "no commercial value" means no commercial transaction, not no value. Customs still has to assess duty, import VAT or sales tax, and any restrictions, and it can only do that with a value.</p>

<h2>When to Use an NCV Invoice</h2>

<p>Typical NCV shipments include:</p>

<ul>
<li><strong>Commercial samples</strong> sent to prospects, distributors or trade buyers to win orders.</li>
<li><strong>Gifts</strong> sent by a business to a client or partner abroad.</li>
<li><strong>Warranty replacements</strong> shipped free to replace a defective item.</li>
<li><strong>Returned goods</strong> being sent back to the supplier for repair, credit or replacement.</li>
<li><strong>Marketing materials</strong> such as catalogues, display items and trade show stock (some of these may need temporary import procedures instead).</li>
<li><strong>Prototypes and test units</strong> sent for evaluation.</li>
</ul>

<p>If the recipient will pay anything for the goods, even later, it is a sale and needs a commercial invoice. If goods are shipped before a sale is final, a proforma may fit better; see <a href="/blog/proforma-invoice-for-customs">proforma invoices for customs</a>.</p>

<h3>Gifts, returns and repairs</h3>

<p>Business gifts are not the same as personal gifts. Many countries have small personal gift allowances for parcels sent between individuals, but those generally do not cover a company sending goods to a client or partner. Treat a business gift like a sample: describe it fully, give it a realistic value and say who pays any duty.</p>

<p>Returns and repairs need extra care. Goods returned to the original seller, or sent abroad for repair and brought back, may qualify for reduced duty under returned goods or outward processing procedures, but usually only if you can link them to the original export or import. Keep the original invoice number, shipment date and tracking reference, and quote them on the NCV invoice. If you are unsure which procedure applies, ask your carrier's customs team before shipping rather than after the goods are held.</p>

<h2>NCV Invoice vs Commercial Invoice vs Proforma</h2>

<table>
<thead>
<tr><th>Feature</th><th>Commercial invoice</th><th>Proforma invoice</th><th>No commercial value invoice</th></tr>
</thead>
<tbody>
<tr><td>Is there a sale?</td><td>Yes</td><td>Planned or not yet final</td><td>No</td></tr>
<tr><td>Payment requested?</td><td>Yes</td><td>Sometimes (advance payment)</td><td>No</td></tr>
<tr><td>Value shown</td><td>Price paid or payable</td><td>Expected price or statement of value</td><td>Realistic value for customs purposes</td></tr>
<tr><td>Typical goods</td><td>Sold goods</td><td>Quotes, pre-shipment, missing final invoice</td><td>Samples, gifts, replacements, returns</td></tr>
<tr><td>Customs use</td><td>Main basis for valuation</td><td>Substitute where accepted</td><td>Supports a declaration where no sale exists</td></tr>
</tbody>
</table>

<p>For a fuller comparison of the first two, read <a href="/blog/proforma-invoice-guide">proforma invoice vs commercial invoice</a>. For tax invoices, see <a href="/blog/tax-invoice-vs-commercial-invoice">tax invoice vs commercial invoice</a>.</p>

<h2>How Customs Values Free Goods</h2>

<h3>United Kingdom (HMRC)</h3>

<p>HMRC's guidance on free-of-charge goods says the usual transaction value method cannot be used because there is no price paid or payable, so a different valuation method applies. Freight, insurance, loading and handling costs to bring the goods to the UK still form part of the customs value. Where free samples or testers are included with a paid shipment under the contract, HMRC says their value forms part of the customs value, and the free supply should be shown on the sales contract, invoice or another document. See the <a href="https://www.gov.uk/guidance/customs-valuation/free-charge-goods" target="_blank" rel="noopener noreferrer">HMRC guidance on valuing free-of-charge goods</a>.</p>

<p>Separately, the UK offers relief from customs duty and import VAT on qualifying commercial samples. Under the current gov.uk guidance, samples must represent the goods they stand for, be used only to obtain orders, and cannot be sold. Freight imports claim relief on the Customs Declaration Service using additional procedure code C30, postal items are marked "Commercial samples of negligible value - relief claimed", late claims use form BOR286 within 3 months of import, and records must be kept for at least 4 years. Give-away goods to promote trade do not qualify.</p>

<h3>United States (CBP)</h3>

<p>US entries normally rely on a commercial invoice. Where no invoice exists, the regulations at <a href="https://www.law.cornell.edu/cfr/text/19/141.85" target="_blank" rel="noopener noreferrer">19 CFR 141.85</a> provide a pro forma invoice format in which the importer states the value and its basis (such as price paid, comparable shipments or market knowledge), and certifies the values as true and correct. That pro forma must list parties, descriptions, quantities, unit and total values, which charges such as freight are included, and the country of origin. In other words, US customs also expects a stated value for samples, not zero.</p>

<p>The US tariff schedule has provisions for samples of very low value or samples marked or mutilated so they cannot be sold, and low-value import treatment changed significantly in 2025, so a free sample may now attract duty where it previously would not. Ask your carrier or customs broker how they will enter the shipment.</p>

<h2>What Value to Declare</h2>

<p>Pick a value you can explain if customs asks. Common bases are:</p>

<ul>
<li><strong>Goods you manufacture:</strong> production cost, or the price you would charge a trade buyer for the same item.</li>
<li><strong>Goods you buy in:</strong> your purchase price or current replacement cost.</li>
<li><strong>Warranty replacements:</strong> the value of the replacement item, with a reference to the original sale.</li>
<li><strong>Returns:</strong> the value at which the goods were originally sold or their current value, as your broker advises.</li>
<li><strong>Gifts:</strong> what the item would cost to buy.</li>
</ul>

<p>Write the basis down in your file. Avoid token values such as "$1" or "for customs purposes only, $0": they invite holds and questions, and deliberate undervaluation can lead to penalties.</p>

<h2>Fields to Include on a No Commercial Value Invoice</h2>

<p>An NCV invoice carries essentially the same fields as a commercial invoice. Include:</p>

<ul>
<li>A heading such as "No Commercial Value Invoice" or "Invoice: No Charge, Value for Customs Purposes Only".</li>
<li>Document number and date. The <a href="/tools/invoice-number-generator">invoice number generator</a> can give NCV documents their own series, such as NCV-0001.</li>
<li>Shipper (exporter) name, address, phone and any export or tax ID such as an EORI number.</li>
<li>Consignee name, address and contact, plus importer of record if different.</li>
<li>Reason for export: sample, gift, warranty replacement, return.</li>
<li>Full description of each item, material and use, not just "samples".</li>
<li>HS code for each item; see <a href="/blog/hs-code-on-commercial-invoice">how to find the HS code</a>.</li>
<li>Country of origin for each item.</li>
<li>Quantity, unit value, line value and currency.</li>
<li>Gross and net weight and number of packages.</li>
<li>Incoterm or a statement of who pays duties and taxes.</li>
<li>A clear statement that no payment is due, the basis of the declared value, and a signed declaration that the information is true and correct.</li>
</ul>

<h2>How to Prepare an NCV Invoice: Step by Step</h2>

<ol>
<li><strong>Confirm there is no sale.</strong> If the recipient pays anything, issue a commercial invoice instead.</li>
<li><strong>Check carrier requirements.</strong> Couriers often have their own NCV or proforma format in their shipping tool; use it or match its fields.</li>
<li><strong>Classify each item.</strong> Find the HS code and confirm the goods are not restricted in the destination country.</li>
<li><strong>Set and record the value.</strong> Use cost, trade price or replacement cost, and note the basis.</li>
<li><strong>Decide who pays duty.</strong> For samples sent to prospects, many exporters pay duties so the prospect does not face a bill on delivery.</li>
<li><strong>Check for reliefs.</strong> In the UK, decide whether commercial samples relief applies and mark the declaration accordingly.</li>
<li><strong>Prepare the document.</strong> List items, values, freight and the no-charge statement, then sign and date it.</li>
<li><strong>Attach and keep copies.</strong> Put three copies with the shipment (or upload it to the carrier) and keep one with your records.</li>
</ol>

<h2>Worked Example: Shipping Handbag Samples to a US Buyer</h2>

<p>A UK leather goods maker sends three handbag samples and two leather swatch cards to a prospective US retailer. Nothing is being sold. The production cost of each handbag is $42.00 and each swatch card is $3.00. Courier freight is $38.00, and the maker will pay any US duties so the buyer is not charged.</p>

<table>
<thead>
<tr><th>Item</th><th>Qty</th><th>Unit value</th><th>Line value</th></tr>
</thead>
<tbody>
<tr><td>Leather handbag, sample, model AR-12 (with HS code)</td><td>3</td><td>$42.00</td><td>$126.00</td></tr>
<tr><td>Leather swatch card, sample (with HS code)</td><td>2</td><td>$3.00</td><td>$6.00</td></tr>
<tr><td><strong>Goods value</strong></td><td></td><td></td><td><strong>$132.00</strong></td></tr>
<tr><td>Freight (shown in the shipping field)</td><td></td><td></td><td>$38.00</td></tr>
<tr><td><strong>Total value shown</strong></td><td></td><td></td><td><strong>$170.00</strong></td></tr>
</tbody>
</table>

<p>The goods value is $126.00 + $6.00 = $132.00, and adding $38.00 freight gives $170.00. In the <a href="/invoice-generator/uk">UK invoice generator</a>, the maker enters the two lines, leaves the tax rate at 0% because no sale is taking place, and enters the freight in the shipping field so the total shows $170.00. In the notes, the maker adds: "No commercial value. Samples supplied free of charge to obtain orders. No payment is due. Value shown is production cost, for customs purposes only. Duties and taxes paid by shipper." The document title is changed to "No Commercial Value Invoice" and numbered in a separate NCV series so it never appears in sales records.</p>

<p>Whether duty is payable depends on the US classification and any sample provisions the broker can use; the declared value lets the broker work that out instead of holding the parcel.</p>

<h3>Carrier forms and electronic copies</h3>

<p>Most express carriers now let you create or upload the customs invoice inside their shipping tool, which sends it electronically to customs in the destination country before the parcel arrives. If you prepare your own NCV invoice, make sure its values, descriptions and weights match exactly what you typed into the carrier booking. Differences between the two are a common reason for delays. Save the PDF with your shipment records so you can answer any customs query or duty bill later.</p>

<h2>Common NCV Invoice Mistakes</h2>

<ul>
<li><strong>Declaring zero or $1.</strong> The most frequent reason sample shipments are held.</li>
<li><strong>Describing goods as "samples" only.</strong> Customs needs to know what the goods are.</li>
<li><strong>Missing origin or HS code.</strong> These drive duty rates and trade restrictions.</li>
<li><strong>Leaving the duty payer unclear.</strong> Unexpected bills lead to refused deliveries and return freight.</li>
<li><strong>Mixing samples into a sales invoice without saying so.</strong> HMRC expects free items in a paid shipment to be identified on the invoice or contract.</li>
<li><strong>Recording NCV documents as sales.</strong> Keep them in a separate number series so your revenue figures stay correct.</li>
</ul>

<p>If goods move on a bill of lading, make sure descriptions and weights match the NCV invoice; see <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a>. For paid freight charges billed separately, our <a href="/blog/freight-invoice">freight invoice guide</a> explains the layout.</p>

<h2>Create Your No Commercial Value Invoice</h2>

<p>A no commercial value invoice is simply a commercial invoice without a sale: full descriptions, HS codes, origin, a realistic value with its basis, freight, a clear duty payer and a statement that no payment is due. Get those right and samples, gifts and replacements clear customs like any other shipment. Build yours in the <a href="/invoice-generator">free invoice generator</a> using a clean, formal layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a>, and keep a copy in your NCV series for your records. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
];
