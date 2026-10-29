import type { PostDraft } from "../blog";

export const PAYMENTS_2026_D_POSTS: PostDraft[] = [
  {
    slug: "virtual-cards-for-business",
    title: "Virtual Cards for Business: How They Work and What They Cost",
    description:
      "Virtual cards for business explained: how B2B virtual card payments work, what suppliers pay to accept them, spend controls, and when to accept or push for ACH.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-accept-credit-card-payments",
      "credit-card-surcharge-rules",
      "ach-vs-wire-transfer",
    ],
    faqs: [
      {
        q: "What is a virtual card for business?",
        a: "A virtual card is a card number, expiry date and security code issued digitally, with no plastic card behind it. A business creates one for a specific supplier, purchase or employee, sets a spending limit and an expiry date, and pays through the normal card networks. Because each number can be locked to one use or one merchant, a stolen number is far less useful to a fraudster than a regular company card.",
      },
      {
        q: "Are virtual cards the same as virtual credit cards?",
        a: "Mostly. People say virtual credit card because most business virtual cards sit on a credit or charge account: the buyer pays the card issuer later, often monthly. Some providers also issue virtual debit or prepaid cards that draw on money already loaded. For the supplier accepting the payment there is little practical difference. It still arrives as a card transaction, with card processing fees deducted.",
      },
      {
        q: "Why do companies pay suppliers with virtual cards?",
        a: "Three main reasons. Buyers often earn a rebate from the card issuer on their spend, which turns accounts payable from a cost into a small income stream. They also get extra days before the cash leaves their bank account, because the card bill is due later. And each card can be locked to one supplier and amount, which cuts fraud and makes reconciliation easier for the buyer's finance team.",
      },
      {
        q: "How much does it cost a supplier to accept a virtual card payment?",
        a: "It depends on your processor, the card type and the data you pass with the transaction. Commercial card acceptance often costs somewhere around 2% to 3% or more of the payment, and corporate and purchasing cards can sit at the higher end. Sending Level 2 or Level 3 data, or qualifying for large ticket rates, can lower the cost. Check your own processor statement for your effective rate.",
      },
      {
        q: "Can I refuse virtual card payments from a customer?",
        a: "Usually yes, unless your contract or the customer's supplier terms say you agreed to accept cards. Many suppliers negotiate instead of refusing outright: they accept cards for small invoices and ask for ACH or bank transfer on large ones, or accept the card only with a surcharge where the law and card rules allow it. Put your accepted payment methods in writing before the first invoice.",
      },
      {
        q: "Can I add a surcharge to virtual card payments?",
        a: "In many US states you can surcharge credit card payments, within card network rules that cap the surcharge and require disclosure. Some states restrict or ban surcharges, and debit and prepaid cards cannot be surcharged under network rules. Rules also differ in the UK and EU, where surcharges on most consumer cards are banned. Check current network and local rules, or ask a qualified adviser, before you add one.",
      },
      {
        q: "How do I process a virtual card payment I receive by email?",
        a: "Most buyers send the card number, expiry and security code through a secure portal or an encrypted email. You key it into your payment processor's virtual terminal, charge the exact invoice amount, and note the invoice number in the reference field. Do not store the card details in email, spreadsheets or notes afterwards. Delete the message once the charge succeeds to stay closer to card security standards.",
      },
      {
        q: "What is Level 3 data and why does it matter?",
        a: "Level 3 data is line-item detail sent with a card transaction: item descriptions, quantities, unit prices, tax amounts and similar fields. Card networks offer lower interchange rates on commercial cards when this data is present, because it helps buyers reconcile purchases. If you accept a lot of business card payments, ask your processor whether it supports Level 2 and Level 3 data and what saving you would realistically see.",
      },
      {
        q: "Are virtual cards safe for small businesses?",
        a: "For the buyer, they are among the safer ways to pay because each number can be capped, locked to one merchant and set to expire. For the supplier, the main risks are the same as any card payment: chargebacks and processing costs. Keep signed quotes, purchase orders and delivery proof, so you can answer a dispute, and never accept card details sent in plain text from an unverified sender.",
      },
    ],
    content: `<p><strong>Virtual cards for business</strong> are digital card numbers that a company creates for a specific purchase, supplier or employee, with its own spending limit and expiry date. Buyers use them to pay invoices through the card networks, earn rebates and reduce fraud. Suppliers who accept them get paid fast but usually pay card processing fees of a few percent.</p>
<p>This guide covers both sides. If you are a buyer, you will see how the cards work and how to set them up sensibly. If you are a freelancer or small supplier, you will see what accepting virtual card payments from customers really costs, and how to negotiate when a big client says "we only pay by card".</p>

<h2>What virtual cards for business actually are</h2>
<p>A virtual card has the same three things as a plastic card: a 16-digit number, an expiry date and a security code. The difference is that it exists only as data. A finance team generates it in a bank portal, an expense app or an accounts payable platform, usually in seconds, and can generate as many as it needs.</p>
<p>The useful part is control. Each card can be set up with rules such as:</p>
<ul>
<li><strong>Single-use:</strong> the number works once, for one payment, then closes.</li>
<li><strong>Amount lock:</strong> the card only authorizes up to an exact amount, for example the total on one invoice.</li>
<li><strong>Merchant lock:</strong> the card only works at one supplier or one merchant category.</li>
<li><strong>Time window:</strong> the card expires after a set date, such as the invoice due date plus a few days.</li>
<li><strong>Multi-use with limits:</strong> a recurring card for a software subscription, capped at the monthly fee.</li>
</ul>
<p>Most business virtual cards sit on a credit or charge account, which is why people often call them a virtual credit card. The buyer pays the card issuer on a statement cycle, so cash leaves the buyer's bank later than it would with a bank transfer. Some providers also issue prepaid or debit-style virtual cards that spend money already loaded.</p>

<h2>How B2B virtual card payments work, step by step</h2>
<p>B2B virtual card payments usually follow one of two patterns. In the first, the buyer's accounts payable system creates a card for each approved invoice and sends the card details to the supplier. In the second, the buyer's provider charges the card directly through the supplier's processor, which is sometimes called straight-through processing.</p>
<ol>
<li>The supplier sends an invoice with a clear invoice number, amount and due date.</li>
<li>The buyer approves it through its normal invoice approval workflow, often after a three-way match against the purchase order and delivery record.</li>
<li>The payables platform creates a single-use card locked to that supplier and the invoice amount.</li>
<li>The card details reach the supplier through a secure portal, encrypted email or a direct push to the supplier's processor.</li>
<li>The supplier charges the card and the processor settles the funds, minus fees, usually within one to three business days.</li>
<li>The buyer pays the card issuer later on its statement and receives any rebate it has earned.</li>
</ol>
<p>Many of these platforms also send a <a href="/blog/remittance-advice">remittance advice</a> listing which invoices the payment covers. Keep it. It saves time when you match payments to open invoices.</p>

<h2>Why buyers push virtual cards</h2>
<p>If you supply larger companies, you may notice more of them asking to pay by card. Their reasons are straightforward.</p>
<h3>Rebates on spend</h3>
<p>Card issuers share part of the interchange they earn with the buying company as a rebate. On large payables volumes, this can be meaningful income for the buyer. The money for that rebate comes, indirectly, from the fees suppliers pay to accept cards.</p>
<h3>Extra float</h3>
<p>A buyer that pays a supplier on day 30 by card may not pay the card bill until weeks later. That improves the buyer's working capital without stretching the supplier's payment terms.</p>
<h3>Fraud control</h3>
<p>Payment fraud against businesses is common. A single-use card locked to one amount is a poor target for criminals. It also helps buyers avoid the classic trap of paying a fake bank account sent in a spoofed email, a risk covered in our guide to <a href="/blog/invoice-scams">invoice scams</a>.</p>
<h3>Easier reconciliation</h3>
<p>Each card maps to one invoice, so the buyer's finance team can reconcile automatically and avoid duplicate invoice payments.</p>

<h2>What accepting virtual card payments from customers costs</h2>
<p>For suppliers, the big issue is fees. A virtual card payment is processed as a card transaction, and most virtual cards are commercial cards. Commercial cards generally carry higher interchange than ordinary consumer debit cards, and you pay that through your processor along with network and processor markups.</p>
<p>Exact rates change and depend on your processor, the card product and the data you send, so treat the figures below as illustrations rather than quotes. Many suppliers see an effective rate somewhere around 2% to 3% or more on commercial card payments. Card networks publish lower rates for large ticket transactions and for payments that include detailed Level 2 or Level 3 data, but qualifying for them depends on your processor and setup.</p>
<table>
<thead><tr><th>Invoice amount</th><th>Card fee at 2.5% (illustrative)</th><th>Card fee at 3.0% (illustrative)</th><th>Typical bank transfer cost</th></tr></thead>
<tbody>
<tr><td>$500</td><td>$12.50</td><td>$15.00</td><td>Often free to a few dollars</td></tr>
<tr><td>$5,000</td><td>$125</td><td>$150</td><td>Often free to a few dollars</td></tr>
<tr><td>$20,000</td><td>$500</td><td>$600</td><td>ACH low; wire often $15 to $50</td></tr>
<tr><td>$100,000</td><td>$2,500</td><td>$3,000</td><td>ACH low; wire often $15 to $50</td></tr>
</tbody>
</table>
<p>Our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfers</a> goes deeper into bank transfer costs. The point here is simple: the larger the invoice, the more a card payment costs relative to a bank transfer.</p>
<h3>Worked example: a design studio's annual retainer</h3>
<p>A small studio bills a client $8,000 a month. The client's payables team switches to virtual cards. At an effective 2.8% rate, each payment costs $224, or $2,688 over a year. If the studio's profit margin on that work is 20%, the card fees eat about 14% of the profit on the account ($2,688 divided by $19,200). That is worth a conversation.</p>

<h2>How to negotiate when a client wants to pay by card</h2>
<p>You do not have to accept every payment method a client proposes, but refusing outright can put the relationship at risk. Most suppliers do better with a middle path.</p>
<ul>
<li><strong>Set a card threshold.</strong> Accept cards for invoices below a set amount, for example $2,500, and ask for ACH or bank transfer above it.</li>
<li><strong>Price it in.</strong> If card payment is a condition of the contract, build the expected fee into your rates when you quote.</li>
<li><strong>Surcharge where allowed.</strong> In many US states you can add a surcharge on credit cards within network caps and disclosure rules. Read our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> before you do, and remember that debit and prepaid cards cannot be surcharged.</li>
<li><strong>Trade speed for cost.</strong> Card payments usually arrive faster. Some suppliers accept cards in exchange for shorter terms, effectively an early payment discount paid in fees.</li>
<li><strong>Ask about Level 3 support.</strong> If you take many card payments, a processor that passes line-item data may cut your effective rate on commercial cards.</li>
</ul>
<p>Whatever you agree, state it on the invoice. A line such as "Payment by ACH to the account below. Card payments over $2,500 incur a 2.5% surcharge where permitted" removes ambiguity. Our guide to <a href="/blog/bank-details-on-invoice">putting bank details on an invoice</a> shows how to present transfer instructions clearly.</p>

<h2>Processing a virtual card payment safely</h2>
<p>When card details arrive, the security burden moves to you. Card industry security standards apply to anyone who handles card numbers, even occasionally.</p>
<ol>
<li>Confirm the sender. Card details should come from the client's known payables platform or contact, not a new address.</li>
<li>Charge the exact amount through your processor's virtual terminal, and put the invoice number in the description or reference field.</li>
<li>Do not keep the card details. Delete the email or portal download once the charge succeeds, and never copy the number into a spreadsheet.</li>
<li>Send a receipt. A simple <a href="/blog/payment-receipt-template">payment receipt</a> showing the invoice number and amount closes the loop.</li>
<li>Mark the invoice paid in your records, net of the processing fee, and book the fee as an expense.</li>
</ol>
<p>Chargebacks are rarer on B2B card payments than on consumer sales, but they happen. Keep signed quotes, purchase orders and delivery proof. Our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> explains the evidence that wins disputes.</p>

<h2>Common problems suppliers run into</h2>
<p>Accepting card payments from large customers is usually smooth, but a few issues come up again and again.</p>
<ul>
<li><strong>Expired cards.</strong> A single-use card often expires within days or weeks. If you do not charge it promptly, you have to ask the buyer to issue a new one, which can push payment into the next payment run.</li>
<li><strong>Amount mismatches.</strong> If the card is locked to the invoice total and you try to add a surcharge or late fee, the charge is declined. Agree any surcharge before the card is issued.</li>
<li><strong>Short payments.</strong> Some buyers pay several invoices with one card but leave out a disputed item. Match the remittance advice line by line and follow up the gap quickly.</li>
<li><strong>Enrollment pressure.</strong> Some payables networks invite suppliers to enroll and may also charge their own fees for faster payment. Read those terms carefully before you sign up.</li>
<li><strong>Fee creep.</strong> As more clients move to cards, your blended cost of collecting rises. Review your effective rate every quarter, not just once.</li>
</ul>
<p>None of these are reasons to refuse every card payment. They are reasons to have a written policy and someone who checks card payments as carefully as bank transfers.</p>

<h2>Using virtual cards for business as a buyer</h2>
<p>If you are on the paying side, virtual cards for business are easy to start with. Many business banks, expense management apps and payables platforms include them. A few practical habits help:</p>
<ul>
<li>Use single-use cards for one-off supplier invoices and capped multi-use cards for subscriptions.</li>
<li>Give each employee their own cards, so spending is traceable to a person.</li>
<li>Match card expiry to the invoice due date, so unused cards close on their own.</li>
<li>Ask suppliers before switching them to cards. Some will add a surcharge or ask you to keep paying by transfer.</li>
<li>Track rebates against any surcharges you pay, so you know the real net benefit.</li>
</ul>
<table>
<thead><tr><th>Method</th><th>Speed to supplier</th><th>Supplier cost</th><th>Buyer benefit</th></tr></thead>
<tbody>
<tr><td>Virtual card</td><td>Fast, often 1 to 3 days</td><td>Highest, card fees</td><td>Rebates, float, strong controls</td></tr>
<tr><td>ACH or bank transfer</td><td>Same day to a few days</td><td>Low</td><td>Cheap, simple</td></tr>
<tr><td>Wire</td><td>Same day</td><td>Moderate flat fees</td><td>Final, good for large amounts</td></tr>
<tr><td>Paper check</td><td>Slowest</td><td>Low fees, high handling time</td><td>Familiar, but fraud-prone</td></tr>
</tbody>
</table>

<h2>Invoicing clients who pay by virtual card</h2>
<p>Clean invoices make card payments smoother. Payables teams that issue virtual cards rely on a matching invoice number, the correct legal name and a PO number when they use one. Missing details delay card creation.</p>
<p>The <a href="/invoice-generator">free invoice generator</a> lets you add a PO number, your payment terms and notes such as accepted payment methods and any surcharge policy, then download a PDF. It does not take card payments itself, so pair it with your card processor or a <a href="/blog/add-payment-link-to-invoice">payment link on the invoice</a>. For more on taking cards in general, see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a>.</p>

<h2>Bottom line</h2>
<p>Virtual cards for business are good for buyers: more control, less fraud and a rebate on top. For suppliers they mean faster payment at a higher cost. Know your effective card rate, set a clear policy for large invoices, and write that policy on every invoice. When you are ready to bill, create a professional PDF with the <a href="/invoice-generator">invoice generator</a> or start from one of the <a href="/invoice-templates">invoice templates</a>.</p>`,
  },
  {
    slug: "positive-pay-check-fraud",
    title: "Positive Pay: How It Stops Check Fraud and What It Costs",
    description:
      "Positive pay explained for US businesses: how check and ACH positive pay work, typical bank costs, current check fraud trends, and a simple setup checklist.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "certified-check-vs-cashiers-check",
      "how-to-write-a-check",
      "invoice-scams",
      "ach-vs-wire-transfer",
      "ai-fraud-detection-payments",
    ],
    faqs: [
      {
        q: "What is positive pay in banking?",
        a: "Positive pay is a bank service that checks every check presented against your account against a list of checks you actually wrote. You upload the check number, amount and date, and sometimes the payee name. If a presented check does not match, the bank flags it as an exception and asks you to approve or return it before it is paid. It stops most counterfeit and altered checks.",
      },
      {
        q: "How much does positive pay cost?",
        a: "Pricing varies by bank. Many banks charge a monthly service fee plus small per-item or per-exception fees, and some bundle positive pay into business or treasury management packages. Payee name matching and ACH positive pay can cost extra. Ask your bank for its current fee schedule and compare it with a realistic estimate of a single check fraud loss, which can easily exceed several years of fees.",
      },
      {
        q: "What is the difference between positive pay and reverse positive pay?",
        a: "With standard positive pay, you send the bank a list of issued checks and the bank matches presented checks against it, flagging mismatches. With reverse positive pay, the bank sends you a list of checks presented each day and you do the matching yourself. Reverse positive pay is usually cheaper but puts the work, and the risk of missing a deadline, on your team.",
      },
      {
        q: "What is ACH positive pay?",
        a: "ACH positive pay applies the same idea to electronic debits. You tell the bank which companies may debit your account, often with amount limits. When an ACH debit arrives from an unapproved company, or above the limit, the bank flags it for review. A simpler version, ACH debit block, rejects all ACH debits except those you allow. Both help stop unauthorized electronic withdrawals from business accounts.",
      },
      {
        q: "Does positive pay stop all check fraud?",
        a: "No. Basic positive pay matches check number, amount and date, so a thief who changes only the payee name on a genuine check can slip through. Payee positive pay closes that gap by matching the payee name too. Positive pay also cannot help if your issue file is wrong, if you approve exceptions without checking them, or if fraud happens through a different payment method.",
      },
      {
        q: "What happens if I do not respond to a positive pay exception?",
        a: "Your bank applies a default decision that you choose during setup, usually either pay or return. Return by default is safer, because an exception you miss is rejected rather than paid. Pay by default avoids accidentally bouncing genuine checks but leaves you exposed. Check your bank's daily cutoff time and make sure someone covers exception reviews during holidays and sick days.",
      },
      {
        q: "Is positive pay worth it for a small business?",
        a: "If you write checks regularly, it usually is. Check fraud remains the most commonly reported type of payments fraud in business surveys, and losses can take weeks to resolve. If you write only a few checks a year, you may get similar protection more cheaply by moving to ACH, closing unused accounts and using a separate account for check payments.",
      },
      {
        q: "Can a bank refuse to cover check fraud if I declined positive pay?",
        a: "Possibly. Many business account agreements say that if you decline fraud prevention services such as positive pay, you accept more liability for losses those services would have prevented. How that plays out depends on your agreement, the facts and state law under the Uniform Commercial Code. Read your account agreement and talk to your bank or a qualified adviser.",
      },
      {
        q: "How do I set up positive pay?",
        a: "Ask your business bank to enroll you, choose whether you want payee matching, and pick a default decision for exceptions. Then set up a way to send issue files, either by uploading a file exported from your accounting software or by entering checks manually in the bank portal. Test it with a few checks, assign a backup reviewer and add the daily exception review to someone's routine.",
      },
    ],
    content: `<p><strong>Positive pay</strong> is a bank fraud control that matches every check presented against your account to a list of checks you actually issued. Any check that does not match on number, amount or date, or on payee name with payee matching, is flagged as an exception. You decide whether to pay or return it before money leaves the account.</p>
<p>It is one of the most effective, and least glamorous, tools a US business can use against check fraud. This guide explains how it works, what banks typically charge, how ACH positive pay extends the idea to electronic debits, and why check fraud is still a live problem in 2026.</p>

<h2>Why check fraud is still a problem</h2>
<p>Checks feel old-fashioned, yet many US businesses still write them to suppliers, landlords and contractors. That makes them a favorite target. The Association for Financial Professionals' 2025 Payments Fraud and Control Survey reported that 79% of responding organizations experienced attempted or actual payments fraud in 2024, and that checks were the payment method most often targeted, cited by 63% of respondents.</p>
<p>FinCEN, the US Treasury bureau that collects suspicious activity reports, has also flagged the problem. In a February 2023 alert it noted that check fraud reports had roughly doubled from 2021 to 2022. A follow-up FinCEN analysis published in 2024 looked at about 15,000 reports tied to mail theft filed over six months in 2023, covering more than $688 million in suspicious activity, including attempted transactions. Common patterns were stolen checks that were altered (often the payee and amount were "washed" and rewritten), stolen checks used as templates for counterfeits, and stolen checks endorsed and deposited by someone else.</p>
<p>The federal government itself is moving away from paper. A March 2025 executive order directed federal agencies to phase out paper checks for most payments, which says something about where official thinking is heading. Figures like these change each year, so check the latest AFP and FinCEN publications for current numbers.</p>

<h2>How positive pay works, step by step</h2>
<p>The mechanics are simple. Most banks follow this pattern:</p>
<ol>
<li><strong>You issue checks.</strong> Your accounting software or check-writing tool records the check number, date, amount and payee.</li>
<li><strong>You send an issue file.</strong> The same day, you upload a file of those checks to the bank portal, or key them in manually. Many accounting systems can export a file in the bank's format.</li>
<li><strong>Checks are presented.</strong> When a check arrives for payment, through clearing or at a teller, the bank compares it with your issue file.</li>
<li><strong>Mismatches become exceptions.</strong> Anything not on the list, or with a different amount, is flagged. Duplicates of an already paid check number are flagged too.</li>
<li><strong>You decide.</strong> Each business day you review exceptions online, usually with the check image, and choose pay or return before the bank's cutoff time.</li>
<li><strong>The default applies.</strong> If you do not decide in time, the bank applies the default you chose at setup, usually return.</li>
</ol>
<p>Teller matching extends the same check to over-the-counter cashing, so a branch can refuse a fake check at the window instead of after it clears.</p>

<h2>Types of check matching services compared</h2>
<p>Banks offer several flavors. The right one depends on how many checks you write and how much time you have to review exceptions.</p>
<table>
<thead><tr><th>Service</th><th>What it matches</th><th>Stops</th><th>Gaps</th></tr></thead>
<tbody>
<tr><td>Standard matching</td><td>Check number, amount, date</td><td>Counterfeits, amount changes, unknown check numbers</td><td>Altered payee names</td></tr>
<tr><td>Payee name matching</td><td>The above plus payee name</td><td>Most altered and washed checks too</td><td>Errors in your own issue file</td></tr>
<tr><td>Reverse matching</td><td>You match the bank's daily list</td><td>Same as standard, if you review diligently</td><td>Relies entirely on your team</td></tr>
<tr><td>Teller matching</td><td>Checks cashed at a branch</td><td>Cashing of counterfeit checks</td><td>Only covers the branch channel</td></tr>
<tr><td>ACH debit filter or block</td><td>Approved ACH originators and limits</td><td>Unauthorized electronic debits</td><td>Does not cover checks or wires</td></tr>
</tbody>
</table>
<p>Payee matching matters because the most common check fraud pattern in FinCEN's analysis was alteration of a genuine stolen check. Basic matching can miss that if the thief keeps the original number and amount.</p>

<h2>ACH positive pay and debit blocks</h2>
<p>Check fraud gets the headlines, but criminals also use stolen account numbers to pull money out by ACH debit. Once a supplier has your routing and account number, printed on every check you send, anyone holding a copy could try to originate a debit.</p>
<p>The ACH version lets you pre-approve which companies may debit your account, identified by their originator ID, and set maximum amounts. A debit from anyone else becomes an exception for you to review. ACH debit block is the blunt version: it rejects all ACH debits unless you list the originator as allowed.</p>
<p>Under Nacha rules, businesses generally have far less time than consumers to dispute an unauthorized debit, so catching it before it posts matters. Our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfers</a> explains how each rail settles and when payments become final.</p>

<h2>What positive pay costs</h2>
<p>Banks do not publish a standard industry price, and fees vary a lot. In general you can expect some combination of:</p>
<ul>
<li>A monthly service fee per account enrolled.</li>
<li>A per-item fee for checks in the issue file, or per exception reviewed.</li>
<li>Extra charges for payee matching, teller matching or ACH debit filters.</li>
<li>Possible setup fees for file formats or treasury management onboarding.</li>
</ul>
<p>Some banks include basic check matching in business account bundles. Ask your relationship manager for the current fee schedule and whether fees fall at higher balances.</p>
<h3>Worked example: is it worth paying for?</h3>
<p>Imagine a construction subcontractor that writes about 60 checks a month to suppliers and crews. Suppose its bank charges $50 a month for the service with payee matching plus $0.10 per issued check. That is $56 a month, or $672 a year. These are illustrative figures, not quotes.</p>
<p>Now compare one fraud incident. FinCEN's 2024 analysis reported a median suspicious amount of a little over $14,000 in its sample of mail theft check fraud reports. A single altered check of that size would cost more than 20 years of fees at the example price, before counting the staff time spent on affidavits, bank claims and supplier calls. For a business that writes checks every week, the math usually favors positive pay.</p>

<h3>Liability: why declining positive pay can cost you</h3>
<p>Under the Uniform Commercial Code, losses from altered or forged checks are often shared between the bank and the customer depending on who failed to take ordinary care. Many business account agreements add a clause saying that if you decline fraud prevention services the bank offers, you accept responsibility for losses those services would have caught.</p>
<p>The exact effect depends on your agreement, the facts and state law, and courts have treated these clauses differently. Read the fraud prevention section of your account agreement and, if a large sum is at risk, talk to your bank or a qualified legal adviser. This article is general information, not legal advice.</p>

<h2>Setting up positive pay: a practical checklist</h2>
<ol>
<li>Ask your bank which check matching services it offers and request the fee schedule.</li>
<li>Choose payee matching if you mail checks, since mail theft and payee alteration are common patterns.</li>
<li>Set the default decision to return, so missed exceptions are rejected rather than paid.</li>
<li>Connect your accounting software's check register export to the bank's file format, or plan to enter checks manually.</li>
<li>Upload the issue file the same day you print checks, before they go in the mail.</li>
<li>Assign a primary and a backup reviewer for daily exceptions, and note the bank's cutoff time.</li>
<li>Add an ACH debit filter or block on accounts that should never be debited by outsiders.</li>
<li>Review exception reports monthly to spot patterns, such as repeated attempts on a specific check range.</li>
</ol>

<h2>Other habits that reduce check fraud</h2>
<p>Check matching works best as one layer among several. Practical steps include:</p>
<ul>
<li><strong>Pay electronically where you can.</strong> ACH or same-day bank transfers remove the paper that thieves wash and copy. Instant rails are covered in our guide to <a href="/blog/fednow-vs-rtp-instant-payments">FedNow and RTP instant payments</a>.</li>
<li><strong>Mail checks securely.</strong> Drop them inside the post office rather than in a collection box, and avoid leaving outgoing mail in an unattended mailbox.</li>
<li><strong>Use a dedicated disbursement account</strong> with a low balance for checks, kept separate from your main operating account.</li>
<li><strong>Verify bank detail changes.</strong> Fraudsters also impersonate suppliers to redirect payments. Call a known number before changing any payee details, as explained in our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
<li><strong>Reconcile promptly.</strong> A fast <a href="/blog/bank-reconciliation">bank reconciliation</a> catches anything that got past other controls while you can still dispute it.</li>
<li><strong>Use security features</strong> such as high-security check stock and tamper-resistant ink.</li>
</ul>
<p>Some banks now also use machine learning to score checks for signs of alteration. Our overview of <a href="/blog/ai-fraud-detection-payments">AI fraud detection in payments</a> explains where those tools help and where they still need human review.</p>

<h2>What to do if a fraudulent check gets through</h2>
<p>Even with good controls, a bad check can occasionally clear, for example during a period when an account was not enrolled. Speed matters, because deadlines for reporting unauthorized items to your bank are often short for business accounts.</p>
<ol>
<li>Call your bank as soon as you spot the item and follow up in writing. Ask what affidavit or claim form it needs.</li>
<li>Get a copy of the cleared check image, front and back, and note who deposited it and where.</li>
<li>Stop or void any related checks that are still outstanding, and consider closing the account and opening a new one if the account number has been widely exposed.</li>
<li>Contact the intended payee, because a stolen check usually means your supplier still has not been paid. Agree how and when you will reissue payment, preferably electronically.</li>
<li>If the check was stolen from the mail, report it to the US Postal Inspection Service, and keep records of every report you make.</li>
<li>Review what failed. Was the account enrolled, was payee matching on, was an exception approved without checking the image?</li>
</ol>
<p>Keep a simple incident log with dates, amounts and reference numbers. It speeds up the bank claim and is useful if your insurer or accountant needs the details later.</p>

<h2>What this means for the invoices you send</h2>
<p>If you are on the receiving side, you can nudge customers away from checks. Put ACH or bank transfer instructions prominently on your invoice, and list checks last if you accept them at all. Our guide on <a href="/blog/bank-details-on-invoice">how to show bank details on an invoice</a> covers the safe way to do this, and our <a href="/blog/how-to-get-paid-faster">tips to get paid faster</a> explain why electronic payments usually shorten your collection cycle.</p>
<p>The <a href="/invoice-generator/usa">US invoice generator</a> lets you add payment instructions in the notes and terms, set a due date and download a PDF. It does not process payments or track checks, so use it alongside your bank's fraud controls.</p>

<h2>Conclusion</h2>
<p>Positive pay costs a modest monthly fee and a few minutes of review each day, and it blocks the counterfeit and altered checks that make up much of business payments fraud. Choose payee matching, set the default to return, add ACH positive pay on sensitive accounts, and keep moving suppliers to electronic payments. Then send clear invoices with safe payment instructions using the <a href="/invoice-generator">free invoice generator</a>.</p>`,
  },
  {
    slug: "upi-international-payments",
    title: "UPI International: Countries, Limits and Rules (2026)",
    description:
      "UPI international in 2026: where Indians can pay with UPI abroad, NRI and international number limits, UPI-PayNow, and how freelancers receive foreign payments.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: ["invoice-international-clients", "foreign-currency-invoice", "wise-vs-payoneer"],
    faqs: [
      {
        q: "Which countries accept UPI payments?",
        a: "At the time of writing, Indian travellers can pay merchants with UPI apps in countries including the UAE, Singapore, France, Mauritius, Nepal, Bhutan, Sri Lanka, Qatar and Cambodia, with Greece reported as a 2026 addition. Acceptance is usually limited to merchants using a partner's QR codes, not every shop. The list keeps growing, so check NPCI International's website and your UPI app before you travel.",
      },
      {
        q: "Can I use UPI in the UK?",
        a: "At the time of writing, UPI is not broadly accepted at UK merchants the way it is in countries like the UAE or Singapore, although partnerships have been announced. NRIs living in the UK can, however, use UPI on Indian NRE or NRO accounts with a UK mobile number through supporting banks. Check your bank's app and NPCI International for the latest UK acceptance news before relying on it.",
      },
      {
        q: "How do I activate UPI international in my app?",
        a: "Open your UPI app, find the UPI International or international payments setting, and enable it for the bank account you want to use. Many apps ask you to choose the countries and a validity period, and to confirm with your UPI PIN. Activation is usually time-limited for security. Your bank must support international UPI, and the merchant must accept UPI QR codes.",
      },
      {
        q: "What is the UPI international transaction limit?",
        a: "Limits are set by NPCI and your bank, and they change. For NRIs using UPI on NRE or NRO accounts with an international mobile number, several banks quote a limit of around one lakh rupees per day, with a lower cap on the first day after registration. Merchant payments abroad may have their own per-transaction limits. Check your bank's current limit page before a large payment.",
      },
      {
        q: "Can NRIs use UPI with a foreign mobile number?",
        a: "Yes, in many cases. NPCI allows NRIs with mobile numbers from a list of countries, which has included the USA, UK, Canada, Australia, UAE, Singapore, Hong Kong, Oman, Qatar, Saudi Arabia, Malaysia and France, to link NRE or NRO accounts to UPI. NPCI has since announced more countries. Your bank must support the feature, so check its NRI banking page for the current list.",
      },
      {
        q: "Can I receive UPI payments from abroad as a freelancer?",
        a: "Not directly from most foreign clients. UPI is mainly a domestic Indian system, and a client in the US or Europe cannot normally pay a UPI ID from their own bank. Freelancers usually receive foreign payments through bank transfers, cross-border payment platforms or remittance services that credit an Indian bank account. Some remittance providers can deliver to a UPI ID, but the client still pays through that provider.",
      },
      {
        q: "What is the UPI-PayNow linkage?",
        a: "It is a link between India's UPI and Singapore's PayNow fast payment system, launched in February 2023. Customers of participating banks can send money between India and Singapore in near real time using a UPI ID, mobile number or virtual payment address. It covers person-to-person remittances, not business payments, and is subject to daily limits and the Liberalised Remittance Scheme on the Indian side.",
      },
      {
        q: "Do I need to charge GST when a foreign client pays me?",
        a: "Services exported from India can qualify as zero-rated supplies under GST if conditions are met, including receiving payment in convertible foreign currency or other permitted forms. Registered suppliers commonly export under a Letter of Undertaking to avoid paying IGST upfront. The rules on place of supply and payment are detailed, so confirm your situation with a qualified tax adviser before you invoice.",
      },
      {
        q: "Is UPI international cheaper than a card abroad?",
        a: "It can be, but compare the full cost. UPI international payments are converted from the foreign currency to rupees at a rate set by your bank or the partner, which may include a markup, and some banks add fees. Forex cards and travel cards have their own markups. For a meaningful trip, check the rate shown in your app against the market rate before paying.",
      },
    ],
    content: `<p><strong>UPI international</strong> lets Indians pay merchants abroad with their UPI app, debiting their Indian bank account in rupees. At the time of writing it works in a growing list of countries, including the UAE, Singapore, France, Mauritius, Nepal, Bhutan, Sri Lanka and Qatar. NRIs can also use UPI on Indian accounts with foreign mobile numbers, within daily limits.</p>
<p>What UPI international does not do, for most people, is let a foreign client pay an Indian freelancer by UPI. This guide covers both sides: paying abroad and receiving money from abroad, with current limits and the rules that matter for invoicing.</p>

<h2>How UPI international works</h2>
<p>UPI is run by the National Payments Corporation of India (NPCI). Its overseas expansion is handled by NPCI International Payments Limited, which signs partnerships with foreign payment networks, acquirers and central banks. There are three main routes:</p>
<ul>
<li><strong>Merchant acceptance abroad.</strong> An overseas merchant displays a QR code from a partner network. You scan it with your Indian UPI app, see the amount converted to rupees, and approve with your UPI PIN.</li>
<li><strong>Fast payment linkages.</strong> UPI is linked to another country's instant payment system, as with Singapore's PayNow, so people can send money across the border in near real time.</li>
<li><strong>International mobile numbers.</strong> NRIs can register UPI on Indian NRE or NRO accounts using a foreign mobile number from an approved list of countries.</li>
</ul>
<p>Before paying abroad, you generally have to switch on the international feature in your app. Most apps make it time-limited and ask you to choose the countries.</p>

<h2>Countries where UPI international is live</h2>
<p>NPCI International adds partners every year, and news reports in 2026 have given slightly different counts depending on whether they include remittance-only links. Treat the table below as a snapshot at the time of writing and check NPCI International and your app for the current position.</p>
<table>
<thead><tr><th>Country</th><th>What works</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>UAE</td><td>Merchant payments via partner QR codes</td><td>Acceptance at participating retailers, not every shop</td></tr>
<tr><td>Singapore</td><td>Merchant payments; UPI-PayNow remittances</td><td>PayNow link is person-to-person only</td></tr>
<tr><td>France</td><td>Merchant payments at selected places</td><td>Launched with tourist-facing merchants first</td></tr>
<tr><td>Mauritius</td><td>Merchant payments</td><td>Linked with the local payment ecosystem</td></tr>
<tr><td>Nepal and Bhutan</td><td>Merchant payments</td><td>Among the earliest UPI partners</td></tr>
<tr><td>Sri Lanka</td><td>Merchant payments</td><td>Via partner QR acceptance</td></tr>
<tr><td>Qatar</td><td>Merchant payments</td><td>Partner-based QR acceptance</td></tr>
<tr><td>Cambodia</td><td>Merchant payments</td><td>Reported as live in 2026</td></tr>
<tr><td>Greece</td><td>Merchant payments</td><td>Reported launch mid-2026; check availability</td></tr>
</tbody>
</table>
<h3>What about the UK and other markets?</h3>
<p>The UK is a common search, because of the large Indian community there. At the time of writing, UPI is not broadly accepted at UK merchants in the way it is in the UAE or Singapore, though partnerships and pilots have been announced over the years. UK-based NRIs can still use UPI on their Indian accounts with a UK number. NPCI International has also announced partnerships with other countries, such as Uzbekistan in 2026, which may go live later.</p>

<h2>Limits for UPI international and NRI UPI</h2>
<p>Limits are set by NPCI and then by each bank, and they change over time. These are the commonly quoted figures, which you should confirm in your bank's app:</p>
<table>
<thead><tr><th>Use case</th><th>Typical limit (check your bank)</th></tr></thead>
<tbody>
<tr><td>NRI UPI on NRE or NRO account, international number</td><td>Around Rs 1,00,000 per day or 20 transactions, per bank pages</td></tr>
<tr><td>First 24 hours after NRI registration</td><td>Lower cap at some banks, for example Rs 5,000</td></tr>
<tr><td>Merchant payments abroad</td><td>Set by bank and partner; often a per-transaction cap</td></tr>
<tr><td>UPI-PayNow remittances</td><td>Daily cap set by participating banks; LRS applies when sending from India</td></tr>
</tbody>
</table>
<p>For residents sending money abroad, the Reserve Bank of India's Liberalised Remittance Scheme sets an overall annual limit per person, and tax collected at source may apply to some remittances above a threshold. Those rules change with budgets, so check current RBI and Income Tax Department guidance.</p>

<h2>UPI for NRIs: setting up with a foreign mobile number</h2>
<p>For NRIs, the most useful part of UPI international is often not paying abroad but paying in India. NPCI allows NRE and NRO account holders with mobile numbers from an approved list of countries to register for UPI. That list has included the USA, UK, Canada, Australia, UAE, Singapore, Hong Kong, Oman, Qatar, Saudi Arabia, Malaysia and France, and NPCI has announced further countries since. Your bank must support the feature.</p>
<ol>
<li>Make sure your international mobile number is registered with your Indian bank for the NRE or NRO account.</li>
<li>Download a UPI app that supports international numbers, such as your bank's own app.</li>
<li>Verify your number by SMS, select the account and set your UPI PIN using your debit card details.</li>
<li>Start with a small payment, because some banks apply a lower limit for the first day.</li>
</ol>
<p>This is handy for paying family bills, Indian suppliers or your own Indian expenses in rupees. Money in an NRE account comes from abroad and is repatriable, while NRO accounts hold income earned in India; the tax and repatriation rules differ, so check with your bank or adviser.</p>

<h2>UPI international vs other ways to pay abroad</h2>
<table>
<thead><tr><th>Option</th><th>Where it works</th><th>Typical cost points</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>UPI international</td><td>Partner merchants in live countries</td><td>Bank or partner exchange rate, possible fees</td><td>Quick retail payments while travelling</td></tr>
<tr><td>Forex or travel card</td><td>Most card-accepting merchants</td><td>Load markup, possible ATM fees</td><td>Wide acceptance, budgeting</td></tr>
<tr><td>Indian credit or debit card</td><td>Most card-accepting merchants</td><td>Foreign currency markup; tax rules may apply</td><td>Hotels, car hire, deposits</td></tr>
<tr><td>Cash</td><td>Everywhere</td><td>Exchange spread</td><td>Small purchases, backup</td></tr>
</tbody>
</table>
<p>Many travellers use two methods: UPI where it is accepted and a card for everything else.</p>

<h2>Using UPI international when you travel</h2>
<ol>
<li>Check that your bank supports UPI international and that the destination is live.</li>
<li>In your UPI app, enable international payments for the account, choose the country and set the validity period.</li>
<li>At the merchant, scan the partner QR code. The app shows the amount in local currency and in rupees.</li>
<li>Check the exchange rate shown. It may include a bank or partner markup.</li>
<li>Approve with your UPI PIN and keep the confirmation screen until the merchant confirms receipt.</li>
</ol>
<h3>Worked example: a trip to Dubai</h3>
<p>Suppose you pay a Dubai retailer AED 500 using UPI international. If the market rate is about Rs 23 to the dirham and your bank's rate includes a 1% markup, you pay roughly Rs 11,615 instead of Rs 11,500. Paying with a forex card with a 2% markup on the same amount would cost about Rs 11,730. The numbers are illustrative. The point is to compare the rate shown in the app with the market rate before paying.</p>

<h2>Receiving UPI payments from abroad: what freelancers should know</h2>
<p>This is where many Indian freelancers get confused. UPI is excellent for receiving money from clients in India. But a client in the US, UK or Europe cannot normally open their banking app and pay your UPI ID. Their bank is not on UPI.</p>
<p>Foreign client payments typically reach Indian freelancers through:</p>
<ul>
<li><strong>Bank transfer (SWIFT)</strong> directly to your Indian account, often slow and with intermediary fees.</li>
<li><strong>Cross-border payment platforms</strong> that give you local account details in the client's currency and pay out to your Indian bank. Our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer comparison</a> covers two common options.</li>
<li><strong>Remittance providers</strong>, some of which can deliver funds to an Indian bank account or UPI ID. The client still pays through the provider, not directly through UPI.</li>
<li><strong>Freelance marketplaces</strong> that pay out to your Indian bank account.</li>
</ul>
<p>The UPI-PayNow link with Singapore is person-to-person only. It is designed for family remittances, not for receiving business income from Singapore clients.</p>
<h3>Worked example: a designer billing a US client</h3>
<p>A Bengaluru designer invoices a US client USD 2,000 for a logo project. She uses a cross-border platform that gives her US account details, so the client pays by a domestic US bank transfer. The platform converts the dollars and sends rupees to her Indian bank account. If the rate she receives is around Rs 84 per dollar after the provider's fee, about Rs 1,68,000 reaches her account, a figure that is purely illustrative. Her Indian clients, meanwhile, keep paying her by UPI. The invoice to the US client lists the platform's account details and the amount in USD, and her records keep the inward remittance certificate next to the invoice. Rates and fees change daily, so compare providers before you choose one.</p>

<h3>Paperwork matters more than the payment rail</h3>
<p>Whatever route you use, your bank should record the inward remittance with the correct purpose code for services, and you can request a Foreign Inward Remittance Advice or similar certificate. Keep it with your invoice. It is useful evidence for GST export treatment and income tax.</p>
<p>Under GST, services exported from India can be zero-rated if conditions are met, including how payment is received. Registered freelancers often export under a Letter of Undertaking. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers invoice contents, and the details for your case are best confirmed with a qualified chartered accountant. Some clients may also withhold tax at source; see our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Invoicing foreign clients when you want to use UPI at home</h2>
<p>A practical setup for many freelancers looks like this. Domestic clients pay by UPI or NEFT, using a UPI ID or QR code shown on the invoice. Foreign clients pay in their own currency through a platform or bank transfer. Each invoice should say which currency it is in and how to pay.</p>
<ul>
<li>Bill in the client's currency, or in rupees if you agree to carry the exchange risk. See our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a>.</li>
<li>Show the right payment details for that client only, never a mix that might confuse their accounts team.</li>
<li>Add your GSTIN and any export wording your adviser recommends.</li>
<li>State payment terms and the due date clearly. Our <a href="/blog/invoice-international-clients">guide to invoicing international clients</a> covers wording that works across borders.</li>
</ul>
<p>Freelancers in Pakistan face a different set of rails; our guide on <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a> covers that market.</p>

<h2>Risks and limits to keep in mind</h2>
<ul>
<li><strong>Coverage is partial.</strong> Even in live countries, only merchants using partner QR codes accept UPI.</li>
<li><strong>Exchange markups vary.</strong> Always compare the rate in your app with the market rate.</li>
<li><strong>Scams follow popular rails.</strong> Never approve a collect request you did not expect. A refund never requires you to enter your UPI PIN. Fake payment screenshots and spoofed invoices are common too; see our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
<li><strong>Rules change.</strong> NPCI circulars adjust limits, country lists and features regularly. Check NPCI and your bank, not old blog posts.</li>
</ul>

<h2>Conclusion</h2>
<p>UPI international is a convenient way for Indians to pay abroad in a growing set of countries, and NRIs can now use UPI on Indian accounts with foreign numbers. For freelancers, it is not yet a way to collect from foreign clients, who still pay through bank transfers and payment platforms. Keep your invoices clear about currency, payment method and GST treatment. You can build one in minutes with the <a href="/invoice-generator">free invoice generator</a>, choosing INR or the client's currency and adding your payment details in the notes, or start from one of the <a href="/invoice-templates">invoice templates</a>. For more on cross-border payments, browse our <a href="/blog/category/payments">payments guides</a>.</p>`,
  },
  {
    slug: "digital-euro-business",
    title: "Digital Euro 2026: Timeline and What It Means for Business",
    description:
      "Digital euro in 2026: the ECB's pilot and 2029 issuance target, legislation status, holding limits, merchant acceptance and fees, and how to prepare.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["sepa-direct-debit", "stablecoin-invoice-payments", "fednow-vs-rtp-instant-payments"],
    faqs: [
      {
        q: "When will the digital euro launch?",
        a: "The European Central Bank has said it aims to be ready for a potential first issuance during 2029, with a pilot planned from 2027. Both depend on EU legislation being adopted, which the ECB's planning assumed would happen in 2026. The final decision to issue, and the date, will be taken by the ECB's Governing Council only after the law is passed. Treat 2029 as a target, not a fixed date.",
      },
      {
        q: "What is the digital euro?",
        a: "It is a proposed digital form of cash issued by the European Central Bank, usable by people and businesses across the euro area. Like banknotes, it would be a direct claim on the central bank rather than on a commercial bank. You would hold it in a wallet provided by a bank or payment provider and pay online, in shops, or offline, using a phone or a card.",
      },
      {
        q: "Will there be a holding limit on the digital euro?",
        a: "Yes, the proposal includes a cap on how much an individual can hold, to stop large amounts moving out of bank deposits. The ECB has used around 3,000 euros as a working estimate, but the actual figure is not fixed and the legislation debate covers who sets it. Payments above your holding would be topped up automatically from a linked bank account.",
      },
      {
        q: "Will merchants have to accept the digital euro?",
        a: "Under the European Commission's 2023 proposal, the digital euro would be legal tender, so merchants that accept digital payments would generally have to accept it too. The proposal includes exceptions, for example for very small businesses that do not accept comparable digital payments. The final rules depend on the legislation still being negotiated, so watch for the adopted text.",
      },
      {
        q: "How much will merchants pay to accept the digital euro?",
        a: "The proposal would cap fees merchants pay, linked to the costs of providing the service and to fees for comparable payment methods. Parliament and Council have taken different positions on how caps should work, and some governments have proposed very low or zero fees for small payments. No final fee level had been agreed at the time of writing.",
      },
      {
        q: "Can businesses hold digital euros?",
        a: "The ECB's design work has suggested that businesses could receive digital euro payments, but that holding limits would work differently for them, with incoming funds typically moved to the business's bank account. The final rules depend on the legislation. In practice, merchants should expect the digital euro to arrive in their bank account much like card or instant transfer settlements do today.",
      },
      {
        q: "Will the digital euro replace cash?",
        a: "No. The ECB and the European Commission have both said the digital euro would complement cash, not replace it. Separate legislation in the same package aims to protect the legal tender status of euro banknotes and coins. Cash would remain available, and the digital euro would sit alongside it as a public digital payment option.",
      },
      {
        q: "Is the digital euro the same as a stablecoin or crypto?",
        a: "No. A digital euro would be issued and backed by the European Central Bank, with the same value as a euro banknote. A euro stablecoin is issued by a private company and backed by its reserves, and crypto assets like bitcoin have no issuer guaranteeing their value. The digital euro would not pay interest and would not be a speculative asset.",
      },
      {
        q: "Will the digital euro work offline?",
        a: "The proposal and ECB designs include an offline option, allowing payments between two devices without an internet connection, with a level of privacy close to cash. Online payments would use privacy protections, but the provider would still apply anti-money laundering checks. Details may change as the legislation is finalized and the ECB completes its rulebook.",
      },
      {
        q: "Should my business do anything about the digital euro now?",
        a: "Most small businesses only need to stay informed for now. Watch for final EU legislation, ask your payment provider about their plans, and make sure your invoicing and accounting can record new payment methods. Larger merchants and e-commerce businesses may consider joining pilot programs. No action is legally required until the regulation is adopted and a launch date is set.",
      },
    ],
    content: `<p>The <strong>digital euro</strong> is a proposed central bank digital currency that the European Central Bank (ECB) plans to make available across the euro area. At the time of writing in October 2026, the ECB aims to run a pilot from 2027 and be ready for a possible first issuance in 2029, but only if EU legislation is adopted first. That law was still being negotiated.</p>
<p>For businesses, the questions are practical: when will it arrive, will you have to accept it, what will it cost, and does it change how you invoice and get paid? This guide answers those with the latest official information, and is clear about what is still undecided.</p>

<h2>What it is, in plain terms</h2>
<p>Today, the only form of central bank money the public can hold is cash. Money in a bank account is a claim on a commercial bank. The ECB's project would create a digital form of cash: a claim on the central bank itself, held in a wallet run by a bank or payment provider.</p>
<p>Key design points from the ECB and the European Commission's 2023 proposal include:</p>
<ul>
<li><strong>Legal tender.</strong> It would be legal tender in the euro area, alongside banknotes and coins.</li>
<li><strong>Free basic use for people.</strong> Basic services would be free of charge for individuals.</li>
<li><strong>Online and offline.</strong> Payments could be made online or offline, by phone or card, in shops, online and between people.</li>
<li><strong>No interest.</strong> Holdings would not earn interest.</li>
<li><strong>Holding limits.</strong> Individuals could hold only a capped amount, with automatic links to a bank account.</li>
<li><strong>Privacy.</strong> Offline payments would offer cash-like privacy; online payments would have privacy protections but still follow anti-money laundering rules.</li>
</ul>

<h2>Digital euro launch date: the latest timeline</h2>
<p>The timeline has firmed up but is still conditional. Here is how it stands at the time of writing:</p>
<table>
<thead><tr><th>Date</th><th>Milestone</th><th>Status</th></tr></thead>
<tbody>
<tr><td>June 2023</td><td>European Commission publishes the single currency package, including the draft regulation</td><td>Done</td></tr>
<tr><td>October 2023 to October 2025</td><td>ECB preparation phase: rulebook drafts, provider selection, technical work</td><td>Done</td></tr>
<tr><td>October 2025</td><td>ECB Governing Council moves to the next phase, targeting readiness for issuance in 2029</td><td>Done</td></tr>
<tr><td>December 2025</td><td>Council of the EU agrees its negotiating position</td><td>Done</td></tr>
<tr><td>Mid-2026</td><td>European Parliament adopts its position and negotiations with the Council begin</td><td>Reported; trilogues ongoing</td></tr>
<tr><td>July 2026</td><td>ECB publishes an updated draft scheme rulebook (version 0.91)</td><td>Done</td></tr>
<tr><td>2026 (assumed)</td><td>Final adoption of the regulation</td><td>Not confirmed at the time of writing</td></tr>
<tr><td>2027</td><td>Pilot with selected payment providers, merchants and users</td><td>Planned, depends on legislation</td></tr>
<tr><td>2029</td><td>Possible first issuance</td><td>Target; final decision after law adopted</td></tr>
</tbody>
</table>
<p>Earlier communications sometimes mentioned other years, which is why online articles disagree. The dates above reflect the ECB's October 2025 decision and its pages as updated in 2026.</p>
<p>The ECB has been explicit that its Governing Council will decide whether and when to issue only after the legislation is adopted. If adoption slips into 2027, later steps could slip too. Check the ECB's digital euro pages and the Council and Parliament press releases for the latest status.</p>

<h2>Is the legislation passed yet?</h2>
<p>Not at the time of writing. The regulation needs agreement between the European Parliament and the Council of the EU, with the Commission involved in the talks. The Council agreed its position in December 2025. The Parliament's committee and plenary positions followed in mid-2026, opening the final stage of negotiations, often called trilogues.</p>
<p>The main sticking points reported in 2026 were:</p>
<ul>
<li><strong>Holding limits:</strong> how high the cap should be and who sets it, the ECB, the Commission or the Council.</li>
<li><strong>Merchant fees:</strong> whether caps should be set per merchant, based on costs, or linked to comparable payment methods, and whether very small payments should be free for merchants.</li>
<li><strong>Online versus offline:</strong> how much priority to give an offline-only or offline-first design.</li>
<li><strong>Compensation for banks</strong> and payment providers that distribute the wallets.</li>
</ul>
<p>Until the final text is published in the EU's Official Journal, details in this guide may change.</p>

<h2>Holding limits and how payments would work</h2>
<p>To stop large amounts leaving bank deposits, individuals would face a cap on their holdings. The ECB has used around 3,000 euros as a working estimate in its analysis, but the actual limit is not fixed.</p>
<p>The design handles the cap with two automatic features. A waterfall moves excess incoming funds above your limit to your linked bank account. A reverse waterfall tops up your wallet from your bank account when you pay more than you hold. To the payer, this feels like one payment.</p>
<h3>What about businesses?</h3>
<p>The ECB's design work has suggested that merchants and other businesses would receive these payments but would not keep large balances, with incoming funds swept to their bank accounts. In practice, a shop or online seller would see such takings settle into its normal account, much like card settlements or <a href="/blog/sepa-direct-debit">SEPA payments</a> today. The final position on business holdings depends on the legislation.</p>

<h2>Digital euro for merchants: acceptance and fees</h2>
<p>This is the part most small businesses care about. Under the Commission's proposal, because it would be legal tender, payees would generally have to accept it. The proposal includes exceptions, notably for microenterprises that do not accept comparable digital payments, and cases where refusal is justified.</p>
<p>So a small café that only takes cash might not have to accept it, while a business that already takes cards would most likely be expected to. Check the final adopted rules before relying on any exception.</p>
<h3>Fees</h3>
<p>The proposal caps the fees merchants can be charged, with caps linked to the costs of providing the service and to fees for comparable digital payment methods. Parliament and Council took different approaches in 2026, and Italy was reported in September 2026 to have proposed no merchant fees for payments under 10 euros. No final number had been agreed at the time of writing.</p>
<h3>Worked example: what a fee cap could mean</h3>
<p>Imagine a small online shop taking 3,000 card payments a month at an average of 40 euros, total 120,000 euros. If its all-in card acceptance cost is 1.2%, it pays 1,440 euros a month. If the digital euro eventually cost, say, 0.6% for the same sales and half of customers switched to it, the monthly cost would fall to about 1,080 euros, a saving of about 360 euros. These rates are purely illustrative, since no fee level has been set, but the example shows why merchant groups are watching the fee debate closely.</p>

<h2>How it compares with cards, SEPA and stablecoins</h2>
<table>
<thead><tr><th>Feature</th><th>ECB digital currency (proposed)</th><th>Card payment</th><th>SEPA instant transfer</th><th>Euro stablecoin</th></tr></thead>
<tbody>
<tr><td>Issuer</td><td>European Central Bank</td><td>Commercial bank plus card network</td><td>Commercial bank money</td><td>Private company</td></tr>
<tr><td>Legal tender</td><td>Yes, once adopted</td><td>No</td><td>No</td><td>No</td></tr>
<tr><td>Merchant fees</td><td>Capped under proposal</td><td>Interchange plus scheme and processor fees</td><td>Set by your bank</td><td>Varies by provider</td></tr>
<tr><td>Offline use</td><td>Planned</td><td>Limited</td><td>No</td><td>No</td></tr>
<tr><td>Availability</td><td>Target 2029</td><td>Now</td><td>Now</td><td>Now</td></tr>
</tbody>
</table>
<p>If you are curious about private alternatives, our guide to <a href="/blog/stablecoin-invoice-payments">stablecoin invoice payments</a> covers the risks. For context on instant payments in another major economy, see <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP</a>.</p>

<h2>What it would look like at the checkout</h2>
<p>The ECB wants paying with the new currency to feel familiar. Based on its published design work, a typical retail payment would look something like this:</p>
<ol>
<li>The customer opens a wallet provided by their bank or another payment provider, or taps a card linked to that wallet.</li>
<li>The merchant's terminal or online checkout shows the option alongside cards and other methods.</li>
<li>The customer confirms the payment. If their balance is too low, the reverse waterfall tops it up from their linked bank account.</li>
<li>The merchant's payment provider receives the funds and settles them into the merchant's account, with a report much like current card settlement reports.</li>
</ol>
<p>The ECB has also worked on common standards so acceptance could run the same way across all euro-area countries, rather than through separate national schemes. For merchants, that could mean a single method that works for customers from any euro country.</p>
<h3>Privacy and data</h3>
<p>The ECB has said it would not see who is paying whom in online transactions, and that offline payments would offer privacy close to cash. Payment providers would still carry out identity checks and anti-money laundering monitoring as they do for bank accounts. For merchants, the practical point is that data protection rules for customer payment data would continue to apply, just as they do for cards.</p>

<h3>Common misconceptions</h3>
<ul>
<li><strong>Cash is being abolished.</strong> No. The same legislative package aims to protect the legal tender status of banknotes and coins.</li>
<li><strong>It is a cryptocurrency.</strong> No. It would be central bank money worth exactly one euro per unit, without price swings.</li>
<li><strong>It is already live.</strong> No. At the time of writing it had not been issued, and no final launch date had been set.</li>
<li><strong>Businesses could hold unlimited balances.</strong> Unlikely. The design is built around limits and sweeping funds into bank accounts.</li>
</ul>

<h2>What the digital euro means for invoicing</h2>
<p>For business-to-business invoices, little is likely to change in the short term. Most B2B payments in the euro area move by SEPA credit transfer, and the digital euro's early focus is on retail and person-to-person payments. EU e-invoicing reforms will probably affect your invoicing processes sooner than the digital euro does. Our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> and our overview of <a href="/blog/vida-vat-in-the-digital-age">VAT in the Digital Age</a> explain those changes.</p>
<p>If it does launch, expect to see it as another payment method on invoices and checkout pages, alongside bank transfer and cards. Your <a href="/blog/remittance-advice">remittance</a> and reconciliation processes will need to recognize it, much as they had to learn about instant payments.</p>

<h2>How businesses can prepare</h2>
<ol>
<li><strong>Follow the legislation.</strong> Watch for the final adopted regulation and the ECB's announcements on issuance.</li>
<li><strong>Ask your payment provider.</strong> Banks and acquirers will offer acceptance. Ask whether your terminal, online checkout and settlement reports will support it.</li>
<li><strong>Review your payment costs now.</strong> Know your current effective card rate, so you can compare when the new fees are published.</li>
<li><strong>Consider a pilot.</strong> The ECB opened a call in 2026 for e-commerce and mobile merchants to take part in the pilot. Larger online sellers may find it worthwhile.</li>
<li><strong>Keep invoices flexible.</strong> Make sure the payment methods section of your invoices and terms can be updated without reprinting everything.</li>
<li><strong>Brief your team.</strong> Staff who handle payments and customer questions should know the basics, so they can explain what you accept and how refunds work once it is available.</li>
</ol>
<p>This guide is general information about a policy that is still being finalized. For decisions that depend on the final rules, check the adopted text or speak with a qualified adviser.</p>

<h2>Conclusion</h2>
<p>The digital euro is real, funded and planned, but not yet law. The ECB is working toward a 2027 pilot and a possible 2029 launch, subject to EU legislation. When it arrives, many merchants will need to accept it, with capped fees and settlement into their bank accounts. Until then, keep invoicing with clear SEPA payment details. You can create a professional euro invoice with the <a href="/invoice-generator">free invoice generator</a>, or choose a design from our <a href="/invoice-templates">invoice templates</a>, and read more in the <a href="/blog/category/payments">payments guides</a>.</p>`,
  },
  {
    slug: "revenue-based-financing",
    title: "Revenue-Based Financing: Costs, Examples and Alternatives",
    description:
      "Revenue-based financing explained: how repayment caps and revenue shares work, a worked cost example, RBF vs loans and invoice factoring, and who it suits.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "merchant-cash-advance",
      "invoice-factoring",
      "invoice-financing-vs-line-of-credit",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What is revenue-based financing?",
        a: "Revenue-based financing is funding where a provider gives a business a lump sum and the business repays it as a fixed percentage of its future revenue until a set total is reached. That total is a multiple of the amount advanced, often called the repayment cap. Repayments rise when sales are strong and fall when sales are weak. The business does not give up equity.",
      },
      {
        q: "How much does revenue-based financing cost?",
        a: "The cost is set by the repayment cap. Many providers use caps somewhere around 1.1 to 1.5 times the amount advanced, so on 100,000 dollars you might repay 110,000 to 150,000. Because the term is often short, the annualized cost can be high. A 1.3 times cap repaid in about 11 months works out to an annualized rate above 50%. Always compare the effective rate, not just the cap.",
      },
      {
        q: "Is revenue-based financing a loan?",
        a: "Legally it depends on how the contract is structured and on local law. Some products are written as loans with revenue-linked repayments, while others are structured as purchases of future revenue. Economically, both work like debt: you receive money now and repay more later. The legal form affects disclosure rules, what happens if revenue stops and which regulations apply, so read the contract carefully.",
      },
      {
        q: "What is the difference between RBF and a bank loan?",
        a: "A bank loan has a fixed repayment schedule and an interest rate, and often needs collateral, personal guarantees and years of trading history. Revenue-based financing has flexible repayments tied to revenue, faster approval based on sales data, and usually no fixed term, but it tends to cost more. A loan is usually cheaper if you qualify; RBF suits businesses that need speed or have uneven revenue.",
      },
      {
        q: "Who qualifies for revenue-based financing?",
        a: "Providers mostly look for businesses with steady, predictable revenue that they can see through bank, payment or accounting connections. Subscription software companies and e-commerce brands are common customers. Many providers set minimum monthly revenue and trading history requirements. Businesses with lumpy project income, no digital revenue data or very thin margins may struggle to qualify or find it expensive.",
      },
      {
        q: "Is revenue-based financing good for SaaS companies?",
        a: "It can be. SaaS businesses have recurring revenue and high gross margins, which suit revenue-linked repayment. Some use it to fund customer acquisition when they know each customer pays back the acquisition cost within a predictable period. It works less well if churn is high or margins are thin, because repayments then eat into cash needed for operations.",
      },
      {
        q: "How is revenue-based financing different from invoice factoring?",
        a: "Factoring advances money against specific unpaid invoices, and you repay when your customers pay those invoices. Revenue-based financing advances money against your overall future revenue, and you repay from all sales over time. Factoring suits B2B businesses with slow-paying customers; RBF suits businesses with steady sales, like SaaS or e-commerce, that need growth capital rather than help with slow receivables.",
      },
      {
        q: "What happens if my revenue drops during repayment?",
        a: "With true revenue-based repayment, your payments fall in line with revenue, which eases cash pressure. But you still owe the full cap, so repayment takes longer. Some contracts include a minimum payment, a maximum term or default triggers if revenue falls sharply. Read those clauses before signing, because they decide whether the product really flexes with your sales.",
      },
      {
        q: "Can I repay revenue-based financing early?",
        a: "Often yes, but early repayment usually does not reduce the total you owe, because the fee is a fixed multiple of the advance rather than interest that accrues over time. Some providers offer discounts for early settlement. Ask before signing, and compare the effective annual cost if you expect to repay quickly, because faster repayment makes the same cap more expensive in annual terms.",
      },
    ],
    content: `<p><strong>Revenue-based financing</strong> (RBF) is funding you repay as a fixed share of your future revenue until you have paid back a set multiple of the amount you received. Repayments rise and fall with your sales, there is no equity to give up, and approval is usually fast. The trade-off is cost: annualized, it is often more expensive than a bank loan.</p>
<p>This guide explains how it works, shows a worked cost example with real numbers, and compares RBF with bank loans and invoice factoring, so you can tell which fits your business.</p>

<h2>How revenue-based financing works</h2>
<p>Every RBF deal has three core numbers:</p>
<ul>
<li><strong>Advance:</strong> the lump sum you receive, for example $100,000.</li>
<li><strong>Repayment cap:</strong> the total you will repay, expressed as a multiple of the advance. Caps often fall somewhere around 1.1x to 1.5x in market commentary, but each provider sets its own.</li>
<li><strong>Revenue share:</strong> the percentage of your monthly revenue that goes to the provider until the cap is reached. Ranges in the low single digits up to the mid-teens are quoted.</li>
</ul>
<p>Providers usually connect to your bank account, payment processor, subscription billing or accounting software to read your revenue. They set the advance as a fraction of your monthly or annual revenue and collect repayments automatically, often weekly or monthly.</p>
<p>Because there is no fixed term, a faster-growing business repays sooner and a slower one repays later. That flexibility is the main selling point.</p>

<h2>A worked cost example</h2>
<p>Suppose an online store with steady sales of $150,000 a month takes an advance of $100,000 with a 1.3x cap and an 8% revenue share. Total repayment is $130,000, so the fee is $30,000.</p>
<table>
<thead><tr><th>Scenario</th><th>Monthly revenue</th><th>Monthly repayment (8%)</th><th>Time to repay $130,000</th><th>Approx. annualized cost</th></tr></thead>
<tbody>
<tr><td>Sales grow</td><td>$250,000</td><td>$20,000</td><td>About 6.5 months</td><td>About 90%</td></tr>
<tr><td>Sales flat</td><td>$150,000</td><td>$12,000</td><td>About 11 months</td><td>About 57%</td></tr>
<tr><td>Sales fall</td><td>$100,000</td><td>$8,000</td><td>About 16 months</td><td>About 39%</td></tr>
</tbody>
</table>
<p>The annualized figures are simple annual rates based on the monthly internal rate of return of each repayment stream, rounded. They show the key point: the fee is fixed, so the faster you repay, the higher the effective annual cost. A deal that looks cheap at "only 30%" can cost the equivalent of more than 50% a year.</p>
<h3>Is that cost worth it?</h3>
<p>It depends on what you do with the money. If the store spends the $100,000 on inventory that sells within three months at a 40% gross margin, it earns about $40,000 in gross profit on that stock, more than the $30,000 fee, and can repeat the cycle. If the money funds a speculative project with no clear payback, the fee is hard to justify. Our guide to the <a href="/blog/roi-formula">ROI formula</a> helps you test this before you sign.</p>

<h2>Revenue-based financing for SaaS and e-commerce</h2>
<p>Two business models dominate the RBF market, for similar reasons: predictable revenue that providers can see in real time.</p>
<h3>SaaS</h3>
<p>Subscription software companies have recurring revenue, high gross margins and measurable customer economics. A SaaS company that knows each new customer costs $1,200 to acquire and pays back within 12 months can use revenue-based financing to buy growth without selling equity. Some providers also advance a share of annual contracts that customers pay monthly. The risks are high churn, which reduces the revenue the repayments depend on, and discounting that squeezes margins. If you bill on usage, our guide to <a href="/blog/usage-based-billing-invoice">usage-based billing invoices</a> covers the invoicing side.</p>
<h3>Worked example: a SaaS company funding growth</h3>
<p>A SaaS company has monthly recurring revenue of $80,000, gross margins of 80% and churn of about 2% a month. Its customer acquisition cost is $1,500 per customer, and each customer pays $150 a month, so payback on gross profit takes about 12.5 months ($1,500 divided by $120 of monthly gross profit). It takes a $200,000 advance with a 1.25x cap and a 10% revenue share, total repayment $250,000.</p>
<p>At $80,000 of revenue, the repayment is $8,000 a month, so the advance takes a little over two and a half years to repay unless revenue grows. If the company spends the money on acquiring about 133 new customers, revenue rises by roughly $20,000 a month once they are on board, which speeds up repayment and adds lasting gross profit. The numbers work only if churn stays low and the acquisition cost holds. If either slips, the company pays a fixed fee for growth it does not keep.</p>

<h3>E-commerce</h3>
<p>Online brands use RBF to fund inventory and advertising before peak seasons. Repayments that dip in quiet months suit seasonal businesses. Some payment and commerce platforms offer similar embedded advances repaid from daily sales, which we discuss in our guide to <a href="/blog/embedded-finance-invoicing">embedded finance</a>. Watch margins closely: a brand with a 25% gross margin pays an 8% revenue share out of a much thinner slice than a SaaS company does.</p>

<h2>RBF vs loan: the main differences</h2>
<table>
<thead><tr><th>Factor</th><th>Revenue-based financing</th><th>Term loan</th><th>Line of credit</th></tr></thead>
<tbody>
<tr><td>Repayment</td><td>Percentage of revenue</td><td>Fixed monthly installments</td><td>Interest on what you draw</td></tr>
<tr><td>Cost</td><td>Fixed cap, often high when annualized</td><td>Interest rate, usually lower</td><td>Interest rate plus fees</td></tr>
<tr><td>Approval speed</td><td>Often days</td><td>Weeks</td><td>Weeks</td></tr>
<tr><td>Collateral and guarantees</td><td>Often limited</td><td>Often required</td><td>Often required</td></tr>
<tr><td>Best for</td><td>Growth spend with clear payback</td><td>Planned investments</td><td>Short-term gaps</td></tr>
</tbody>
</table>
<h3>When RBF makes sense, and when it does not</h3>
<p>Revenue-based financing tends to fit when you have a specific use with a measurable return, such as inventory for a proven product or marketing with a known payback, and when your revenue is steady enough to forecast. It fits less well for covering losses, funding long research projects, or businesses whose income comes in a few large, irregular payments. In those cases the fixed fee buys time rather than growth, and that is an expensive way to buy time.</p>
<p>If you can get a bank loan or line of credit on reasonable terms, it will almost always cost less. RBF earns its place when you need money quickly, lack collateral, or have revenue that swings too much for fixed repayments. Our article on <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a> covers the bank side in more depth.</p>

<h2>Revenue-based financing vs invoice factoring</h2>
<p>These two are often confused because both turn future income into cash now. The difference is what the provider is buying or lending against.</p>
<ul>
<li><strong>Invoice factoring</strong> advances money against specific unpaid B2B invoices. When your customer pays, the factor deducts its fee and releases the rest. See our full guide to <a href="/blog/invoice-factoring">invoice factoring</a>.</li>
<li><strong>RBF</strong> advances against your total future revenue and is repaid from all sales over time.</li>
</ul>
<h3>Worked comparison</h3>
<p>A B2B agency has $100,000 of invoices outstanding on 45-day terms. A factor advances 85%, or $85,000, and charges a fee of about 3% of the invoice value for the 45 days, or $3,000. That is roughly 3.5% on the cash received for 1.5 months, around 28% annualized. These terms are illustrative, and factoring fees vary widely by provider and customer credit quality.</p>
<p>Taking $85,000 of RBF at a 1.3x cap instead would cost $25,500. Even if the agency repaid it within a year, that is far more than the factoring fee. For a business whose cash problem is slow-paying customers, factoring or improving collections is usually cheaper. For a business with steady card or subscription revenue and few invoices, factoring is not an option and RBF may be.</p>

<h2>Pros and cons at a glance</h2>
<h3>Advantages</h3>
<ul>
<li><strong>No equity dilution.</strong> You keep full ownership and control, which matters if you plan to raise equity later at a higher valuation.</li>
<li><strong>Repayments flex with sales.</strong> Quiet months mean smaller payments, which protects cash when it is tight.</li>
<li><strong>Speed.</strong> Decisions based on connected revenue data can come in days rather than weeks.</li>
<li><strong>Fewer covenants.</strong> Many deals have lighter reporting and collateral requirements than bank debt.</li>
</ul>
<h3>Disadvantages</h3>
<ul>
<li><strong>High effective cost.</strong> The fixed cap can mean a high annual rate, especially when you repay quickly.</li>
<li><strong>Revenue, not profit.</strong> Repayments come off the top line, so low-margin businesses feel them more.</li>
<li><strong>Smaller amounts.</strong> Advances are usually a fraction of annual revenue, so RBF rarely funds very large projects.</li>
<li><strong>Stacking risk.</strong> Taking several advances at once can quietly absorb a large share of every sale.</li>
</ul>

<h2>How to calculate the real cost yourself</h2>
<p>You do not need special software. A spreadsheet is enough:</p>
<ol>
<li>Put the advance as a negative number in month zero, for example -100,000.</li>
<li>Project your monthly revenue for the next 12 to 24 months under a cautious scenario.</li>
<li>Multiply each month's revenue by the revenue share to get the repayment, stopping when the running total reaches the cap.</li>
<li>Use the spreadsheet's IRR function on the cash flows to get a monthly rate, then multiply by 12 for a simple annual rate.</li>
<li>Repeat for a faster and a slower scenario, and compare the results with any loan or line of credit offer you have.</li>
</ol>
<p>Also add up the total monthly outflow from repayments plus your other debts, and check it against your gross margin. If repayments would take more than a modest slice of gross profit in a weak month, the deal is probably too large for your business.</p>

<h2>Questions to ask before you sign</h2>
<ol>
<li>What is the exact repayment cap, and is there any fee on top of it?</li>
<li>What revenue counts, gross sales, net sales, or only certain channels?</li>
<li>Is there a minimum monthly payment or a maximum term?</li>
<li>What happens if revenue falls sharply or stops? Are there default triggers?</li>
<li>Does early repayment reduce the total owed?</li>
<li>Is a personal guarantee required, and is the agreement a loan or a purchase of future revenue in legal terms?</li>
<li>What is the effective annual cost under realistic growth, flat and decline scenarios?</li>
</ol>
<p>Because legal structure and disclosure rules vary by country and state, have a qualified adviser review any significant agreement.</p>

<h2>Ways to need less financing</h2>
<p>The cheapest money is often cash you are already owed. Before any revenue-based financing deal, check whether you can improve your own cash cycle:</p>
<ul>
<li>Invoice promptly and clearly, with due dates and payment details. See our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
<li>Track <a href="/blog/days-sales-outstanding">days sales outstanding</a> and chase overdue accounts early.</li>
<li>Take deposits or milestone payments on large projects.</li>
<li>Build a rolling <a href="/blog/cash-flow-forecast">cash flow forecast</a> so funding needs do not surprise you.</li>
<li>Free up <a href="/blog/working-capital">working capital</a> by negotiating supplier terms and trimming slow-moving stock.</li>
</ul>

<h2>Conclusion</h2>
<p>Revenue-based financing gives fast, flexible, non-dilutive capital to businesses with steady revenue, especially SaaS and e-commerce, but the fixed cap can mean a high effective annual cost. Model it under several scenarios, compare it with loans and with factoring, and use it for spending with a clear payback. If the numbers only work in your best-case forecast, the deal is too expensive or too large. Keep the cash coming in with clear, prompt invoices from the <a href="/invoice-generator">free invoice generator</a>, and read more in our <a href="/blog/category/business-finance">business finance guides</a>.</p>`,
  },
];
