import type { PostDraft } from "../blog";

export const PAYMENTS_2026_G_POSTS: PostDraft[] = [
  {
    slug: "how-to-write-a-check",
    title: "How to Write a Check: Step-by-Step Guide With Cents (2026)",
    description:
      "How to write a check step by step: date, payee, amount in numbers and words, writing cents as a fraction, memo and signature, plus a business check example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "us-paper-checks-phase-out",
      "positive-pay-check-fraud",
      "payment-receipt-template",
      "ach-vs-wire-transfer",
    ],
    faqs: [
      {
        q: "How do you write cents on a check?",
        a: "Write the dollars in words, then the word 'and', then the cents as a fraction over 100. For $245.50 you would write 'Two hundred forty-five and 50/100'. If there are no cents, write '00/100' or 'no/100' so nobody can add cents later. Draw a line from the end of the fraction to the word 'Dollars' printed on the check to fill the empty space and block alterations.",
      },
      {
        q: "What happens if the numbers and words on a check don't match?",
        a: "Under the Uniform Commercial Code, which every US state has adopted with some changes, words prevail over numbers when a check contradicts itself. In practice, many banks will hold or return a check with mismatched amounts rather than guess. If you notice the error before sending it, write VOID across the check, record it in your register and write a new one with the amounts matching exactly.",
      },
      {
        q: "Do I have to fill in the memo line on a check?",
        a: "No, the memo line is optional and the bank does not need it to process the check. For business payments it is very useful though. Write the invoice number, account number or a short description, such as 'INV-2026-0142 web design'. The payee can match the payment to the right invoice quickly, and you have a record of what the check was for when you reconcile your bank account.",
      },
      {
        q: "How do you write a check for a business?",
        a: "Use a check drawn on the business bank account, not a personal one. Write the payee's legal business name exactly as it appears on their invoice, enter the amount in figures and words, put the invoice number in the memo line and have an authorized signer sign it. Record the check number, date, payee and amount in your check register or accounting software, and attach a copy of the invoice to the record.",
      },
      {
        q: "Can I write a check to myself?",
        a: "Yes. Write your own name on the 'Pay to the order of' line, fill in the amount and sign it as usual, then endorse the back and deposit or cash it. People do this to move money between their own accounts at different banks. For a business owner taking money out of a company account, record it properly as an owner's draw or salary so your books stay accurate.",
      },
      {
        q: "How long is a check valid for?",
        a: "Under UCC section 4-404, a bank is not obliged to pay an ordinary personal or business check presented more than six months after its date, though it may choose to pay it in good faith. Some checks, such as certain government or business checks, print a shorter validity period like 'void after 90 days'. If a check is close to six months old, ask the writer to issue a new one.",
      },
      {
        q: "Can I postdate a check?",
        a: "You can write a future date on a check, but in the US a bank may still pay it before that date unless you have given the bank proper notice describing the check. So postdating alone does not guarantee the money will stay in your account. If you need to pay on a later date, it is safer to hand over the check on that date or schedule an ACH payment instead.",
      },
      {
        q: "Should I use a pen or pencil to write a check?",
        a: "Always use a pen with dark, permanent ink, ideally a gel pen whose ink soaks into the paper and is harder to wash off. Never use pencil or erasable ink, because anyone who handles the check could change the payee or amount. Write clearly, start close to the left edge of each line and fill unused space with a line so nothing can be added later.",
      },
      {
        q: "How do I fill out a check deposit slip or endorse a check I receive?",
        a: "To endorse a check you received, sign on the back in the endorsement area near the top. For safer deposits, add 'For deposit only' and your account number under your signature, which is called a restrictive endorsement. Mobile deposits often require extra wording such as 'For mobile deposit only at [bank name]'. Keep the paper check for a couple of weeks until the deposit has fully cleared.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> To write a check, fill in six parts in order: the date, the payee's name on the "Pay to the order of" line, the amount in numbers in the box, the amount in words with cents written as a fraction (for example "Two hundred forty-five and 50/100"), an optional memo such as an invoice number, and your signature. Then record it in your check register.</p>

<p>That is how to write a check in under a minute. The rest of this guide covers the details that trip people up: writing cents, filling out a business check against an invoice, what to do with mistakes, and how to stop check fraud. If you are the one getting paid, you can send clients a clear bill with our free <a href="/invoice-generator">online invoice generator</a> so they have the exact payee name, invoice number and total they need to write the check correctly.</p>

<p><em>This is general information about US checks, not legal or banking advice. Your bank's own rules apply to your account.</em></p>

<h2>The Parts of a Check Explained</h2>

<p>Every standard US check has the same layout, whether it is a personal check or a business check printed three to a page. Knowing what each area does makes it much easier to fill in.</p>

<table>
<thead>
<tr><th>Part of the check</th><th>Where it is</th><th>What you write or what it shows</th></tr>
</thead>
<tbody>
<tr><td>Your name and address</td><td>Top left</td><td>Pre-printed; for a business check, the company's legal name</td></tr>
<tr><td>Check number</td><td>Top right (and in the MICR line)</td><td>Pre-printed; use it to track the payment in your register</td></tr>
<tr><td>Date line</td><td>Top right, below the check number</td><td>The date you write the check</td></tr>
<tr><td>Pay to the order of</td><td>Middle left</td><td>The person or business you are paying</td></tr>
<tr><td>Amount box</td><td>Middle right, next to the $ sign</td><td>The amount in numbers, such as 1,247.75</td></tr>
<tr><td>Amount line</td><td>Below the payee line, ending in "Dollars"</td><td>The amount in words, with cents as a fraction</td></tr>
<tr><td>Memo line</td><td>Bottom left</td><td>Optional note: invoice number, account number, purpose</td></tr>
<tr><td>Signature line</td><td>Bottom right</td><td>Your signature, or an authorized signer for a business</td></tr>
<tr><td>MICR line</td><td>Bottom edge</td><td>Routing number, account number and check number in magnetic ink</td></tr>
</tbody>
</table>

<p>The routing number and account number in the MICR line are the same details a client might use to set up a direct payment. If you are deciding whether to keep accepting checks at all, our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> explains the electronic alternatives.</p>

<h2>How to Write a Check in 6 Steps</h2>

<p>Use a pen with dark permanent ink and follow these steps in order.</p>

<ol>
<li><strong>Write the date.</strong> Use the current date in a format your bank recognizes, such as 10/29/2026 or October 29, 2026. The date matters because a bank is not obliged to pay an ordinary check presented more than six months later.</li>
<li><strong>Write the payee's name.</strong> On the "Pay to the order of" line, write the full name of the person or business. For a company, copy the name exactly from their invoice, for example "Brightline Design LLC" rather than a nickname. Writing "Cash" here means anyone holding the check can cash it, so avoid that.</li>
<li><strong>Write the amount in numbers.</strong> In the box next to the dollar sign, write the amount with a decimal point and two digits for cents, starting right against the left edge of the box: 1,247.75. No gaps for anyone to squeeze in another digit.</li>
<li><strong>Write the amount in words.</strong> On the line below the payee, write the dollars in words, then "and", then the cents as a fraction over 100: "One thousand two hundred forty-seven and 75/100". Draw a line from the end of your writing to the word "Dollars".</li>
<li><strong>Fill in the memo line.</strong> This is optional, but for business payments write the invoice or account number so the payee can apply the money to the right bill.</li>
<li><strong>Sign the check.</strong> Sign on the bottom right line using the same signature your bank has on file. A check without a signature will not be paid.</li>
</ol>

<p>Finally, record the check in your register or accounting software before you seal the envelope. That one habit makes <a href="/blog/bank-reconciliation">bank reconciliation</a> at month end much faster.</p>

<h2>How to Write Cents on a Check</h2>

<p>Writing cents is the part most people search for, and it is simple once you see the pattern: dollars in words, cents as a fraction of 100.</p>

<table>
<thead>
<tr><th>Amount</th><th>Amount box</th><th>Amount line in words</th></tr>
</thead>
<tbody>
<tr><td>$45.00</td><td>45.00</td><td>Forty-five and 00/100</td></tr>
<tr><td>$245.50</td><td>245.50</td><td>Two hundred forty-five and 50/100</td></tr>
<tr><td>$1,008.09</td><td>1,008.09</td><td>One thousand eight and 09/100</td></tr>
<tr><td>$0.85</td><td>0.85</td><td>Zero and 85/100 (or "Only 85/100")</td></tr>
<tr><td>$12,600.00</td><td>12,600.00</td><td>Twelve thousand six hundred and 00/100</td></tr>
</tbody>
</table>

<h3>Rules for writing cents and numbers</h3>

<ul>
<li><strong>Use "and" only once,</strong> to separate dollars from cents. Write "One thousand eight", not "One thousand and eight".</li>
<li><strong>Hyphenate numbers from 21 to 99,</strong> such as forty-five or ninety-nine.</li>
<li><strong>Always include the cents fraction,</strong> even for round amounts. "00/100" or "no/100" stops someone adding cents later.</li>
<li><strong>Fill the leftover space</strong> with a straight line up to "Dollars".</li>
<li><strong>Make sure the words and numbers match.</strong> Under <a href="https://www.law.cornell.edu/ucc/3/3-114" target="_blank" rel="noopener noreferrer">UCC section 3-114 on contradictory terms</a>, words prevail over numbers, but many banks will simply hold or return a mismatched check, which delays the payment.</li>
</ul>

<h2>How to Write a Business Check to Pay an Invoice</h2>

<p>Writing a business check is the same six steps, with a few extra controls because the money belongs to the company and the payment must match a bill.</p>

<h3>Before you write it</h3>

<ul>
<li><strong>Check the invoice.</strong> Confirm the vendor name, invoice number, amount due and due date. A well-built invoice shows all of these clearly; see our guide on <a href="/blog/how-to-fill-out-an-invoice">how to fill out an invoice</a> for what a complete one includes.</li>
<li><strong>Confirm approval.</strong> Larger businesses match the invoice to a purchase order and receiving record before paying. Small businesses should at least have the owner approve every check.</li>
<li><strong>Verify bank-detail changes by phone.</strong> If a vendor suddenly asks you to pay a new name or address, call a known number first. Altered payee details are one of the most common <a href="/blog/invoice-scams">invoice scams</a>.</li>
</ul>

<h3>When you write it</h3>

<ul>
<li>Write the payee's legal business name exactly as on the invoice.</li>
<li>Put the invoice number in the memo line, or attach a <a href="/blog/remittance-advice">remittance advice</a> stub listing every invoice the check covers.</li>
<li>Have an authorized signer sign. Some businesses require two signatures above a set amount.</li>
<li>Record the check number against the invoice in your accounts payable records.</li>
</ul>

<h2>Worked Example: Paying a $1,247.75 Invoice by Check</h2>

<p>Suppose your business receives invoice INV-2026-0142 from Brightline Design LLC for a website refresh. The invoice shows a subtotal of $1,150.00 plus sales tax at 8.5%.</p>

<ul>
<li>Sales tax: $1,150.00 × 8.5% = $97.75</li>
<li>Invoice total: $1,150.00 + $97.75 = $1,247.75</li>
</ul>

<p>You can check that tax figure quickly with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. Here is how the check is filled in:</p>

<table>
<thead>
<tr><th>Field</th><th>What you write</th></tr>
</thead>
<tbody>
<tr><td>Date</td><td>10/29/2026</td></tr>
<tr><td>Pay to the order of</td><td>Brightline Design LLC</td></tr>
<tr><td>Amount box</td><td>1,247.75</td></tr>
<tr><td>Amount line</td><td>One thousand two hundred forty-seven and 75/100 __________ Dollars</td></tr>
<tr><td>Memo</td><td>INV-2026-0142</td></tr>
<tr><td>Signature</td><td>Authorized signer</td></tr>
</tbody>
</table>

<p>Now update your register. If the account balance before this check was $5,000.00, the new balance is $5,000.00 minus $1,247.75, which equals $3,752.25. When the check clears, tick it off in your register and match it to the bank statement line with the same check number.</p>

<p>On the vendor's side, Brightline should apply the $1,247.75 to INV-2026-0142 and can send you a receipt. Our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what that receipt should include.</p>

<h2>Common Check-Writing Mistakes and How to Fix Them</h2>

<p>Banks see the same errors again and again. Most are easy to avoid.</p>

<table>
<thead>
<tr><th>Mistake</th><th>Risk</th><th>Fix</th></tr>
</thead>
<tbody>
<tr><td>Words and numbers don't match</td><td>Check held, returned or paid at the words amount</td><td>Void it and write a new check</td></tr>
<tr><td>Leaving blank space after the amount</td><td>Someone adds digits or words</td><td>Draw a line to "Dollars"</td></tr>
<tr><td>Writing in pencil or erasable ink</td><td>Payee or amount altered</td><td>Use a permanent gel pen</td></tr>
<tr><td>Forgetting to sign</td><td>Bank will not pay it</td><td>Sign before mailing</td></tr>
<tr><td>Wrong or informal payee name</td><td>Payee cannot deposit it</td><td>Copy the legal name from the invoice</td></tr>
<tr><td>Not recording the check</td><td>Overdraft or messy reconciliation</td><td>Log it in your register immediately</td></tr>
</tbody>
</table>

<h3>Can you correct a mistake on a check?</h3>

<p>Do not cross out and initial a change. Banks may refuse altered checks, and corrections look like fraud. Write "VOID" in large letters across the front, record the voided check number in your register so the sequence stays complete, and write a new check. Keep the voided check or shred it securely. (A voided blank check is also what employers and payroll providers sometimes ask for to set up direct deposit; see <a href="/blog/what-is-a-voided-check">what a voided check is</a>.)</p>

<h2>How to Protect Business Checks From Fraud</h2>

<p>Paper checks carry your full routing and account number, which makes them a target for theft and "check washing", where criminals chemically remove the ink and rewrite the payee and amount. A few habits cut the risk sharply:</p>

<ul>
<li><strong>Use Positive Pay.</strong> Many business banks offer a service that compares each check presented against a list of checks you issued. Our guide to <a href="/blog/positive-pay-check-fraud">positive pay and check fraud</a> explains how it works.</li>
<li><strong>Mail checks from inside the post office</strong> rather than an unlocked mailbox.</li>
<li><strong>Store blank checks securely</strong> and limit who can sign.</li>
<li><strong>Reconcile often.</strong> Weekly reviews of cleared checks catch fraud before your bank's dispute window closes.</li>
<li><strong>Move recurring payments to ACH</strong> where you can. It removes the paper entirely.</li>
</ul>

<h2>Are Paper Checks Still Worth Using in 2026?</h2>

<p>Checks are still common in US business payments, especially with older suppliers, property managers and local governments. But the trend is clear. The federal government began phasing out paper checks for its own payments from September 30, 2025, under Executive Order 14247, as described in the Treasury's notice that <a href="https://fiscal.treasury.gov/news/paper-checks-going-away.html" target="_blank" rel="noopener noreferrer">paper checks are going away</a>. Our article on the <a href="/blog/us-paper-checks-phase-out">US paper checks phase-out</a> covers what that means for small businesses.</p>

<p>For most small businesses, the practical approach in 2026 is to keep a checkbook for the clients and vendors who still need it, while nudging regular payments toward electronic methods. If you are the one sending invoices, list several payment options on every bill. Our guide on <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> is a good place to start, and adding your bank details or a payment link to the invoice gets you paid faster than waiting for a check in the mail.</p>

<h2>Create the Invoice Your Clients Pay by Check</h2>

<p>Knowing how to write a check correctly protects your money when you pay bills. When you are the one being paid, a clear invoice makes it easy for clients to write the check right the first time: your exact legal name for the payee line, an invoice number for the memo, and a total they can copy straight into the amount box. Build one in minutes with our free <a href="/invoice-generator">invoice generator</a>, number it consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a>, and choose a clean layout from our <a href="/invoice-templates/classic">classic invoice template</a> if your clients still prefer paper.</p>
`,
  },
  {
    slug: "promissory-note-template",
    title: "Promissory Note Template: Secured vs Unsecured Loan Guide",
    description:
      "Free promissory note template guide: what to include, secured vs unsecured notes, interest and repayment terms, a worked loan schedule and how to sign one.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "payment-plan-agreement",
      "client-not-paying-invoice",
      "bill-of-sale-template",
      "freelance-contract-template",
    ],
    faqs: [
      {
        q: "What is a promissory note?",
        a: "A promissory note is a written, signed promise by one party (the borrower or maker) to pay a set amount of money to another party (the lender or payee), either on demand or on a set schedule. It records the loan amount, interest rate, repayment terms and what happens on default. It is simpler than a full loan agreement but still legally enforceable if it is properly drafted and signed.",
      },
      {
        q: "What is the difference between a secured and unsecured promissory note?",
        a: "A secured promissory note is backed by collateral, such as a vehicle, equipment or business inventory, which the lender can claim if the borrower defaults. An unsecured note has no collateral, so the lender relies only on the borrower's promise and must sue to collect. Secured notes usually carry lower interest rates because the lender's risk is lower, but they need a separate security agreement describing the collateral.",
      },
      {
        q: "Does a promissory note need to be notarized?",
        a: "In most US states a promissory note is valid without notarization as long as it is in writing and signed by the borrower. Notarizing it is still a good idea because it proves who signed and when, which helps if the note is ever disputed. Some secured notes tied to real estate are recorded with a mortgage or deed of trust, and those recorded documents usually do need notarization.",
      },
      {
        q: "Is a promissory note legally binding?",
        a: "Yes, a properly written promissory note is a legally binding contract. To hold up, it should identify both parties, state the amount, the repayment terms and the interest rate, and be signed by the borrower. Courts can enforce it if the borrower stops paying. An interest rate above your state's usury limit, unclear terms or a missing signature can weaken or void parts of it.",
      },
      {
        q: "What interest rate should I charge on a promissory note?",
        a: "Pick a rate both sides accept that stays below your state's usury limit. For loans between family members, US tax law matters too: under section 7872 of the Internal Revenue Code, a loan charging less than the applicable federal rate can be treated as a below-market loan with imputed interest, although gift loans between individuals of $10,000 or less in total are generally exempt. A tax professional can confirm the right rate.",
      },
      {
        q: "What happens if the borrower defaults on a promissory note?",
        a: "The note's default clause controls what happens. Typically the lender sends a written notice, the borrower gets a short cure period, and if payment is still not made the lender can accelerate the loan, making the whole balance due. With a secured note, the lender can then pursue the collateral. With an unsecured note, the lender usually has to send a demand letter and then sue, often in small claims court for smaller amounts.",
      },
      {
        q: "Can a business use a promissory note for an unpaid invoice?",
        a: "Yes. When a client cannot pay a large overdue invoice at once, converting the balance into a promissory note with a repayment schedule is common. The note turns an informal promise into a signed commitment with dates, interest and a default clause. It is more formal than a simple payment plan agreement and is easier to enforce if the client misses payments later on.",
      },
      {
        q: "Who keeps the original promissory note?",
        a: "The lender keeps the signed original, because it is the evidence of the debt. The borrower should get a copy. When the loan is fully repaid, the lender marks the original 'Paid in Full', signs and dates it, and returns it to the borrower or gives a written release. If the note was secured, the lender should also release the lien or collateral filing.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> A promissory note template is a ready-made document where a borrower promises in writing to repay a loan. It should name the borrower and lender, state the principal, interest rate and repayment schedule, set out late fees and default terms, say whether the note is secured by collateral or unsecured, and be signed and dated by the borrower.</p>

<p>Promissory notes are used for everything from family loans to business owners lending money to their company to clients who need to repay a large overdue bill over time. This guide gives you a fill-in promissory note template, explains secured vs unsecured notes, and walks through a full repayment schedule with real numbers. If your situation is an unpaid invoice rather than a cash loan, it may help to first send a clear statement of what is owed, which you can create with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><em>This article is general information, not legal or tax advice. Lending rules and usury limits vary by state and country, so have a lawyer review notes for large amounts.</em></p>

<h2>What Is a Promissory Note?</h2>

<p>A promissory note is a signed promise to pay a specific sum of money, either on demand or according to a schedule. In US law it is a type of negotiable instrument, the same broad family as checks; Cornell's legal dictionary entry on <a href="https://www.law.cornell.edu/wex/negotiable_instruments" target="_blank" rel="noopener noreferrer">negotiable instruments</a> gives a short overview. The borrower is called the maker or promisor and the lender is the payee or holder.</p>

<p>A promissory note is lighter than a full loan agreement. A loan agreement usually includes warranties, covenants and detailed conditions both parties must meet. A note focuses on the promise to repay and the key terms. For many small loans, a note is all you need.</p>

<h3>Promissory note vs other payment documents</h3>

<table>
<thead>
<tr><th>Document</th><th>Main purpose</th><th>Who signs</th><th>When to use it</th></tr>
</thead>
<tbody>
<tr><td>Promissory note</td><td>Borrower's promise to repay money, with interest and terms</td><td>Borrower (lender often too)</td><td>Personal loans, business loans, converting a large debt into scheduled payments</td></tr>
<tr><td>Loan agreement</td><td>Full contract with covenants and conditions</td><td>Both parties</td><td>Larger or complex loans, bank lending</td></tr>
<tr><td>Payment plan agreement</td><td>Schedule for paying an existing bill</td><td>Both parties</td><td>Overdue invoices paid in installments</td></tr>
<tr><td>IOU</td><td>Informal acknowledgement of a debt</td><td>Borrower</td><td>Very small, informal amounts (weak evidence)</td></tr>
<tr><td>Invoice</td><td>Request for payment for goods or services</td><td>Not signed</td><td>Billing a customer for work done</td></tr>
</tbody>
</table>

<p>If you only need installments on an existing bill without interest or collateral, a simpler <a href="/blog/payment-plan-agreement">payment plan agreement</a> may be enough.</p>

<h2>Secured vs Unsecured Promissory Notes</h2>

<p>The biggest decision when you fill out a promissory note template is whether it will be secured.</p>

<h3>Secured promissory note</h3>

<p>A secured note is backed by collateral: a vehicle, equipment, inventory, receivables or real estate. If the borrower defaults, the lender can claim the collateral. To make the security interest work, you normally need a separate security agreement describing the collateral, and for business assets in the US the lender often files a UCC-1 financing statement with the state to put other creditors on notice. Loans secured by property are documented with a mortgage or deed of trust that gets recorded.</p>

<h3>Unsecured promissory note</h3>

<p>An unsecured note relies only on the borrower's promise. If they stop paying, the lender has to demand payment and, if needed, sue for a judgment before collecting. Unsecured notes are faster to set up and common between family members, friends or a business and a trusted client.</p>

<table>
<thead>
<tr><th>Feature</th><th>Secured note</th><th>Unsecured note</th></tr>
</thead>
<tbody>
<tr><td>Collateral</td><td>Yes, described in a security agreement</td><td>None</td></tr>
<tr><td>Lender's risk</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Typical interest rate</td><td>Lower</td><td>Higher, to reflect risk</td></tr>
<tr><td>Extra paperwork</td><td>Security agreement, possibly a UCC-1 filing or recorded mortgage</td><td>Note only</td></tr>
<tr><td>If the borrower defaults</td><td>Lender can pursue the collateral</td><td>Lender must demand and usually sue</td></tr>
<tr><td>Common uses</td><td>Vehicle or equipment purchases, business loans, real estate</td><td>Family loans, small business loans, overdue-invoice settlements</td></tr>
</tbody>
</table>

<h2>What to Include in a Promissory Note Template</h2>

<p>A solid promissory note covers these points. Missing any of them is the most common reason notes cause disputes later.</p>

<ul>
<li><strong>Date and place</strong> the note is signed.</li>
<li><strong>Parties:</strong> full legal names and addresses of the borrower and lender. For a company, the registered business name and the signer's title.</li>
<li><strong>Principal:</strong> the amount borrowed, in numbers and words.</li>
<li><strong>Interest rate:</strong> annual rate, whether it is simple or compounding, and when interest starts.</li>
<li><strong>Repayment terms:</strong> installment amount, frequency, first and final due dates, or a single lump-sum date.</li>
<li><strong>Payment method:</strong> where and how to pay (bank transfer, check, ACH).</li>
<li><strong>Late fees and grace period:</strong> for example, a fee if a payment is more than 10 days late, within your state's legal limits.</li>
<li><strong>Prepayment:</strong> whether the borrower can pay early without penalty.</li>
<li><strong>Security:</strong> "secured" with a reference to the security agreement and collateral, or "unsecured".</li>
<li><strong>Default and acceleration:</strong> what counts as default and the lender's right to demand the full balance.</li>
<li><strong>Governing law:</strong> the state or country whose law applies.</li>
<li><strong>Signatures:</strong> borrower (required), lender (recommended), co-signer or guarantor if any, and optionally a notary or witness.</li>
</ul>

<h2>Free Promissory Note Template (Copy and Fill In)</h2>

<p>Copy this template into a document and replace the bracketed text. It is written as an unsecured installment note, with an optional line for security.</p>

<p><strong>PROMISSORY NOTE</strong></p>

<p>Date: [date] &nbsp; Place: [city, state]</p>

<p>Principal amount: $[amount] ([amount in words] dollars)</p>

<p>1. <strong>Promise to pay.</strong> For value received, [Borrower full name], of [address] ("Borrower"), promises to pay [Lender full name], of [address] ("Lender"), the principal sum above plus interest at [rate]% per year on the unpaid balance.</p>

<p>2. <strong>Payments.</strong> Borrower will pay [number] monthly installments of $[amount], beginning on [first date] and continuing on the [day] of each month until [final date], when any remaining balance and interest are due.</p>

<p>3. <strong>Payment method.</strong> Payments will be made by [bank transfer / check / ACH] to [details].</p>

<p>4. <strong>Late payment.</strong> If any installment is more than [number] days late, Borrower will pay a late fee of $[amount] or [percent]%, as permitted by law.</p>

<p>5. <strong>Prepayment.</strong> Borrower may prepay all or part of the balance at any time without penalty.</p>

<p>6. <strong>Security.</strong> [This note is unsecured.] OR [This note is secured by the collateral described in the Security Agreement dated (date).]</p>

<p>7. <strong>Default.</strong> If Borrower fails to make any payment within [number] days after written notice, Lender may declare the entire unpaid balance and accrued interest immediately due.</p>

<p>8. <strong>Governing law.</strong> This note is governed by the laws of [state/country].</p>

<p>Borrower signature: ____________ Date: ______<br>Lender signature: ____________ Date: ______</p>

<h2>How to Create and Sign a Promissory Note: Step by Step</h2>

<ol>
<li><strong>Agree the terms first.</strong> Principal, rate, schedule, collateral and late fees should be settled before anything is written.</li>
<li><strong>Check legal limits.</strong> Confirm your state's maximum interest rate (usury limit) and any limits on late fees.</li>
<li><strong>Calculate the payment schedule.</strong> Work out the installment amount and build an amortization table (see the example below).</li>
<li><strong>Fill in the template.</strong> Use full legal names and write the principal in numbers and words.</li>
<li><strong>Prepare a security agreement</strong> if the note is secured, and file or record it where required.</li>
<li><strong>Sign.</strong> The borrower signs; the lender signs too if the note contains lender obligations. Add a notary or witness for larger amounts.</li>
<li><strong>Store the original.</strong> The lender keeps the signed original; the borrower gets a copy.</li>
<li><strong>Track every payment.</strong> Issue a receipt for each installment and keep a running balance.</li>
</ol>

<h2>Worked Example: A $12,000 Note at 6% Over 24 Months</h2>

<p>A small business owner lends $12,000 to a supplier, repayable in 24 equal monthly payments at 6% annual interest. The monthly rate is 6% divided by 12, which is 0.5% (0.005).</p>

<p>The standard installment formula is: payment = principal × r ÷ (1 − (1 + r)<sup>−n</sup>), where r is the monthly rate and n is the number of payments.</p>

<ul>
<li>(1.005)<sup>24</sup> ≈ 1.127160, so (1.005)<sup>−24</sup> ≈ 0.887186</li>
<li>1 − 0.887186 = 0.112814</li>
<li>$12,000 × 0.005 = $60.00</li>
<li>$60.00 ÷ 0.112814 ≈ <strong>$531.85 per month</strong></li>
</ul>

<p>Over 24 months the borrower pays $531.85 × 24 = $12,764.40, of which $764.40 is interest. The first few lines of the schedule look like this:</p>

<table>
<thead>
<tr><th>Payment</th><th>Opening balance</th><th>Interest (0.5%)</th><th>Principal</th><th>Closing balance</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>$12,000.00</td><td>$60.00</td><td>$471.85</td><td>$11,528.15</td></tr>
<tr><td>2</td><td>$11,528.15</td><td>$57.64</td><td>$474.21</td><td>$11,053.94</td></tr>
<tr><td>3</td><td>$11,053.94</td><td>$55.27</td><td>$476.58</td><td>$10,577.36</td></tr>
</tbody>
</table>

<p>Each month the interest share shrinks and the principal share grows. Because of rounding to the cent, the final payment is often a few cents different from $531.85, so say in the note that the last installment "will equal the remaining balance plus interest".</p>

<p>For family loans in the US, check the tax side as well. <a href="https://www.law.cornell.edu/uscode/text/26/7872" target="_blank" rel="noopener noreferrer">Section 7872 of the Internal Revenue Code</a> can treat a loan charging less than the applicable federal rate as a below-market loan with imputed interest, though gift loans between individuals of $10,000 or less in total are generally outside the rule.</p>

<h2>Using a Promissory Note for an Overdue Invoice</h2>

<p>Freelancers and small businesses often meet promissory notes when a client owes a large invoice they cannot pay at once. Turning that balance into a note gives you a signed acknowledgement of the debt, a fixed schedule and a default clause, which is much stronger than an email promise.</p>

<p>A practical sequence:</p>

<ul>
<li>Send a final reminder and an up-to-date <a href="/blog/statement-of-account">statement of account</a> showing the total owed.</li>
<li>Offer a note with installments, possibly waiving some <a href="/blog/late-payment-fees">late payment fees</a> in return for a signed commitment.</li>
<li>Invoice each installment as it falls due, referencing the original invoice and the note. A <a href="/blog/partial-payment-invoice">partial payment invoice</a> keeps the running balance clear.</li>
<li>If the client defaults, send a formal <a href="/blog/demand-letter-for-payment">demand letter for payment</a> before taking further steps.</li>
</ul>

<p>For practical tactics when a client goes silent, see our guide on what to do when a <a href="/blog/client-not-paying-invoice">client is not paying an invoice</a>, and for smaller amounts, <a href="/blog/small-claims-court-unpaid-invoice">small claims court for an unpaid invoice</a> is often the cheapest enforcement route.</p>

<h2>Promissory Note Mistakes to Avoid</h2>

<ul>
<li><strong>Vague repayment dates.</strong> "When you can" is not a schedule. Use fixed dates.</li>
<li><strong>Interest above the legal limit.</strong> Usury rules differ by state and can void interest or add penalties.</li>
<li><strong>No default clause.</strong> Without acceleration, you may have to sue for each missed payment separately.</li>
<li><strong>Collateral named but not documented.</strong> A note that says "secured by the truck" without a security agreement and proper filing may leave you unsecured in practice.</li>
<li><strong>No payment records.</strong> Issue receipts and keep a ledger; disputes usually turn on what was paid and when.</li>
<li><strong>Not marking it paid.</strong> When the loan ends, mark the original "Paid in Full", sign it and return it, and release any lien.</li>
</ul>

<h2>Bill Every Installment Clearly</h2>

<p>A promissory note template sets the promise; clean records make it stick. Whether your note is secured or unsecured, send a dated, numbered bill or receipt for each installment that references the note and shows the remaining balance. You can do that in minutes with our free <a href="/invoice-generator">invoice generator</a>, keep numbers in sequence with the <a href="/tools/invoice-number-generator">invoice number generator</a>, and use a plain <a href="/invoice-templates/minimal">minimal invoice template</a> so each installment is easy to read and file.</p>
`,
  },
  {
    slug: "upwork-fees",
    title: "Upwork Fees 2026: Freelancer Service Fee, Connects and Payouts",
    description:
      "Upwork fees in 2026 explained: the variable 0-15% freelancer service fee, Connects, Freelancer Plus, client fees and withdrawal fees, with a worked example.",
    category: "freelancing",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "virtual-assistant-rates",
      "upwork-vs-fiverr",
      "fiverr-upwork-invoice",
      "how-to-set-freelance-rates",
      "wise-vs-payoneer",
    ],
    faqs: [
      {
        q: "How much does Upwork take from freelancers in 2026?",
        a: "As of 2026, Upwork charges freelancers a variable service fee of 0% to 15% per contract, deducted from each payment you receive. The exact rate depends on contract factors such as category and demand, and Upwork shows it to you before you submit a proposal or accept an offer. On top of the service fee, you pay for Connects to submit proposals and a small fee each time you withdraw.",
      },
      {
        q: "Is the Upwork fee still 10%?",
        a: "Not as a flat rate. Upwork used a flat 10% freelancer fee for a period, but replaced it in 2025 with a variable fee ranging from 0% to 15% per contract. Many contracts still land close to 10%, but some are lower and some reach 15%. Check the fee shown on the job or offer before you commit, because that is the rate that will apply to that contract.",
      },
      {
        q: "How much do Upwork Connects cost?",
        a: "As of 2026, extra Connects cost $0.15 each and are sold in bundles with a minimum purchase of 10. A free Basic account receives 10 Connects a month and Freelancer Plus includes 100 a month. Each proposal uses a number of Connects that depends on the job, and you can add more to boost a proposal. Connects are a cost of finding work, not a fee on what you earn.",
      },
      {
        q: "Is Upwork Freelancer Plus worth it?",
        a: "Freelancer Plus costs $19.99 a month on the web as of 2026 and includes 100 Connects plus profile and bidding insights. If you would otherwise buy many Connects, the included 100 alone are worth $15 at $0.15 each. It also removes the 5% fee on Direct Contracts, according to Upwork's pricing pages. It suits active bidders; occasional users can stay on Basic and buy Connects as needed.",
      },
      {
        q: "What are Upwork's withdrawal fees?",
        a: "Withdrawal fees depend on the method. Upwork's help center lists $0.99 per Direct to Local Bank withdrawal, $2.00 for Instant Pay in the US and $50 per US dollar wire transfer. PayPal and Payoneer withdrawals carry a small Upwork fee plus any fees those providers add. Upwork also announced a $2.99 fee for Direct to US Bank withdrawals by freelancers with a non-US tax address from September 1, 2026.",
      },
      {
        q: "Do clients pay fees on Upwork too?",
        a: "Yes. As of 2026, clients on the Basic plan pay a marketplace fee of about 5% on payments, with a reduced rate available for some US clients paying by bank account, plus a one-time contract initiation fee of $0.99 to $14.99 per contract. Business Plus clients pay a higher percentage but avoid most contract initiation fees. These client fees do not reduce what the freelancer receives.",
      },
      {
        q: "Can I avoid Upwork fees by taking clients off the platform?",
        a: "Not without risk. Upwork's terms restrict moving clients you met on the platform to outside payment, and breaking that rule can get your account suspended. A legitimate alternative is a Direct Contract with a client you brought to Upwork yourself, which carries a lower fee. For clients found elsewhere, invoice them directly.",
      },
      {
        q: "Is the Upwork fee tax deductible?",
        a: "In most countries, platform fees are a business expense you can deduct from freelance income. In the US, self-employed people generally report gross earnings and list the fees as expenses on Schedule C. Download your Upwork transaction history each year so you have a record of service fees, Connects purchases, membership charges and withdrawal fees. Ask a tax professional how the rules apply to you.",
      },
      {
        q: "How do I price my Upwork bids to cover fees?",
        a: "Decide the amount you want to receive, then divide it by one minus the fee rate. If you want $1,800 in hand and the contract fee is 10%, bid $1,800 divided by 0.90, which is $2,000. At a 15% fee you would need $1,800 divided by 0.85, about $2,117.65. Add an allowance for Connects and withdrawal fees on top.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> As of 2026, Upwork fees for freelancers are a variable service fee of 0% to 15% per contract, taken from each payment, plus the cost of Connects to bid ($0.15 each beyond your free monthly allowance) and a withdrawal fee that depends on how you are paid, such as $0.99 for Direct to Local Bank. Clients pay their own separate marketplace and contract fees.</p>

<p>That headline rate is only part of what Upwork costs you. This guide breaks down every Upwork fee a freelancer pays in 2026, shows how the variable service fee changed things, and works through a real project so you can see your true take-home pay. If you also invoice clients outside the platform, our free <a href="/invoice-generator">invoice generator</a> lets you bill them directly with no commission at all.</p>

<p><em>Fees change often. Figures below are from Upwork's own help center and pricing pages as of 2026; always check the fee shown on your contract before you accept.</em></p>

<h2>Upwork Fees at a Glance (2026)</h2>

<table>
<thead>
<tr><th>Fee</th><th>Who pays</th><th>Amount as of 2026</th><th>When it is charged</th></tr>
</thead>
<tbody>
<tr><td>Freelancer service fee</td><td>Freelancer</td><td>Variable, 0% to 15% per contract</td><td>Deducted from each payment received</td></tr>
<tr><td>Connects</td><td>Freelancer</td><td>$0.15 each (minimum purchase of 10); 10 free per month on Basic, 100 on Freelancer Plus</td><td>When you submit or boost a proposal</td></tr>
<tr><td>Freelancer Plus membership</td><td>Freelancer (optional)</td><td>$19.99 per month on the web</td><td>Monthly</td></tr>
<tr><td>Direct Contracts fee</td><td>Freelancer</td><td>5% on Basic, 0% on Freelancer Plus</td><td>On payments for clients you bring yourself</td></tr>
<tr><td>Withdrawal fee</td><td>Freelancer</td><td>From $0.99 (Direct to Local Bank) to $50 (US dollar wire)</td><td>Each withdrawal</td></tr>
<tr><td>Client marketplace fee</td><td>Client</td><td>About 5% on Basic (3% for eligible US clients paying by bank)</td><td>On each client payment</td></tr>
<tr><td>Contract initiation fee</td><td>Client</td><td>$0.99 to $14.99 per contract on Basic</td><td>Once per new contract</td></tr>
</tbody>
</table>

<h2>The Upwork Freelancer Service Fee in 2026</h2>

<p>The freelancer service fee is the largest cost for most people on Upwork. Over the years it has changed several times:</p>

<ul>
<li><strong>Earlier tiered model:</strong> 20% on the first $500 billed with a client, 10% up to $10,000, and 5% after that.</li>
<li><strong>Flat model:</strong> Upwork later moved to a flat 10% fee on all earnings.</li>
<li><strong>Variable model (current):</strong> In 2025 Upwork replaced the flat fee with a variable freelancer service fee that ranges from 0% to 15% per contract. Upwork's help article <a href="https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee" target="_blank" rel="noopener noreferrer">Learn about the Freelancer Service Fee</a> describes how it works.</li>
</ul>

<h3>How the variable fee works</h3>

<ul>
<li><strong>It is set per contract,</strong> not per account. Two jobs you win in the same week can carry different rates.</li>
<li><strong>It depends on contract factors</strong> such as the type of work and supply and demand in that category, according to Upwork's pricing pages. Upwork does not publish an exact formula.</li>
<li><strong>You see it before you commit.</strong> The rate is shown when you submit a proposal or receive an offer, and it then applies to that contract.</li>
<li><strong>It is only charged when you are paid.</strong> The fee is a percentage of each payment, whether hourly or fixed-price, including bonuses.</li>
<li><strong>The same range applies on Basic and Freelancer Plus.</strong> Paying for Plus does not lower the standard contract fee, though it does change the Direct Contracts fee.</li>
</ul>

<p>Because the fee can now vary between 0% and 15%, it pays to read the number on every job before writing a proposal. A job with a higher fee needs a higher bid to leave you with the same income.</p>

<h3>How the fee applies to hourly and fixed-price contracts</h3>

<p>The service fee works the same way on both contract types; only the timing differs. On an <strong>hourly contract</strong>, the client is billed weekly for the hours logged in Upwork's work diary, and the fee is taken from each weekly payment as it is released to you. If you bill 20 hours at $50 an hour on a 10% contract, the week's $1,000 becomes $900 in your balance. On a <strong>fixed-price contract</strong>, the client funds each milestone in advance, and the fee is deducted when you submit the work and the client releases the milestone. Bonuses and later payments on the same contract are charged at that contract's rate.</p>

<p>For hourly work, set your profile rate with the fee in mind, because clients see your rate and the fee comes out of it. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers how to track and present billable time, which is useful when the same client later moves off a platform contract onto direct billing.</p>

<h3>What clients pay on top</h3>

<p>Clients pay their own fees, separate from yours. As of 2026, Upwork's client pricing lists a marketplace fee of about 5% on the Basic plan, reduced to 3% for eligible US clients who pay by bank account, plus a one-time contract initiation fee of $0.99 to $14.99 per contract. Business Plus clients pay a higher percentage but avoid most contract initiation fees. These charges do not reduce your earnings, but they do raise the client's total cost, which some clients factor into how much they are willing to offer.</p>

<h2>Upwork Connects: The Cost of Bidding</h2>

<p>Connects are Upwork's bidding currency. You spend them to submit proposals, and you can spend extra to "boost" a proposal so it appears higher in the client's list. As of 2026:</p>

<ul>
<li>Extra Connects cost <strong>$0.15 each</strong>, with a minimum purchase of 10.</li>
<li>Free Basic accounts receive <strong>10 Connects a month</strong>.</li>
<li><strong>Freelancer Plus</strong> includes <strong>100 Connects a month</strong>.</li>
<li>The number of Connects a proposal needs varies from job to job and is shown on the listing.</li>
</ul>

<p>Connects are easy to ignore because each one is cheap, but they add up. What matters is your cost per won contract: Connects per proposal × price per Connect × proposals needed to win one job. A strong <a href="/blog/freelance-proposal-template">freelance proposal template</a> raises your win rate, which is the most effective way to cut this cost.</p>

<h2>Freelancer Plus and Direct Contracts</h2>

<p>Freelancer Plus costs $19.99 a month on the web as of 2026 (Upwork notes a higher price when bought through the Apple App Store). It includes 100 Connects, bid insights and profile features. Two things decide whether it is worth it:</p>

<ul>
<li><strong>Connects value.</strong> 100 Connects at $0.15 each are worth $15. If you would buy that many anyway, Plus costs you about $5 a month extra for the other features.</li>
<li><strong>Direct Contracts.</strong> Direct Contracts let you use Upwork's payment protection with a client you brought yourself. Upwork's pricing pages list a 5% fee on Basic and 0% on Freelancer Plus. On $1,000 a month of direct work, that 5% is $50, more than double the membership cost.</li>
</ul>

<h2>Upwork Withdrawal Fees</h2>

<p>After the service fee is deducted, your money sits in your Upwork balance until you withdraw it. Fees as listed in Upwork's help center:</p>

<table>
<thead>
<tr><th>Withdrawal method</th><th>Upwork fee as of 2026</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Direct to Local Bank</td><td>$0.99 per withdrawal</td><td>Some receiving banks add their own incoming fee</td></tr>
<tr><td>Direct to US Bank (ACH)</td><td>Free for US freelancers; $2.99 for freelancers with a non-US tax address from September 1, 2026</td><td>Check your account for the current rule</td></tr>
<tr><td>Instant Pay (US)</td><td>$2.00 per transfer</td><td>Faster access to funds</td></tr>
<tr><td>US dollar wire transfer</td><td>$50 per transfer</td><td>Intermediary and receiving banks may also charge</td></tr>
<tr><td>PayPal, Payoneer, mobile wallets</td><td>Small Upwork fee per transfer</td><td>The provider may add its own fees and currency conversion</td></tr>
</tbody>
</table>

<p>Upwork's article on <a href="https://support.upwork.com/hc/en-us/articles/211060578-What-are-the-fees-limits-and-timing-of-Direct-to-Local-Bank-payments" target="_blank" rel="noopener noreferrer">Direct to Local Bank fees and timing</a> has the current details. For freelancers outside the US, currency conversion is often a bigger cost than the withdrawal fee itself. Our comparisons of <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> and <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> explain how to compare exchange-rate margins.</p>

<h2>Worked Example: What You Actually Keep on a $2,000 Project</h2>

<p>Say you win a $2,000 fixed-price web design contract, and Upwork shows a 10% freelancer service fee for it. You bid on 10 jobs to win this one, each proposal using 12 Connects, all bought at $0.15. You withdraw by Direct to Local Bank.</p>

<table>
<thead>
<tr><th>Item</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Contract value</td><td>Agreed price</td><td>$2,000.00</td></tr>
<tr><td>Freelancer service fee</td><td>$2,000 × 10%</td><td>−$200.00</td></tr>
<tr><td>Connects to win the job</td><td>10 proposals × 12 Connects × $0.15</td><td>−$18.00</td></tr>
<tr><td>Withdrawal fee</td><td>Direct to Local Bank</td><td>−$0.99</td></tr>
<tr><td><strong>Take-home before tax</strong></td><td>$2,000 − $200 − $18 − $0.99</td><td><strong>$1,781.01</strong></td></tr>
</tbody>
</table>

<p>Your total platform cost is $218.99, or about 10.95% of the contract. The client separately pays its own marketplace fee (about 5% on Basic, or $100 here) and a contract initiation fee, which do not come out of your $2,000.</p>

<h3>How the fee rate changes your income</h3>

<table>
<thead>
<tr><th>Fee shown on contract</th><th>Fee on $2,000</th><th>You receive</th><th>Bid needed to receive $1,800</th></tr>
</thead>
<tbody>
<tr><td>0%</td><td>$0</td><td>$2,000</td><td>$1,800.00</td></tr>
<tr><td>5%</td><td>$100</td><td>$1,900</td><td>$1,894.74</td></tr>
<tr><td>10%</td><td>$200</td><td>$1,800</td><td>$2,000.00</td></tr>
<tr><td>15%</td><td>$300</td><td>$1,700</td><td>$2,117.65</td></tr>
</tbody>
</table>

<p>The last column uses a simple gross-up: bid = target ÷ (1 − fee rate). For example, $1,800 ÷ 0.85 = $2,117.65. Build that into your <a href="/blog/how-to-set-freelance-rates">freelance rates</a> rather than absorbing the fee.</p>

<h2>How to Reduce Your Upwork Fees: 6 Steps</h2>

<ol>
<li><strong>Check the fee before every proposal.</strong> Skip or reprice jobs where a high fee makes the work unprofitable.</li>
<li><strong>Bid with the fee built in.</strong> Use the gross-up formula above so your take-home matches your target.</li>
<li><strong>Raise your win rate.</strong> Fewer, better proposals use fewer Connects. Focus on jobs that match your profile closely.</li>
<li><strong>Use Direct Contracts for your own clients,</strong> and consider Freelancer Plus if the 0% Direct Contracts fee saves more than the membership costs.</li>
<li><strong>Withdraw in larger, less frequent amounts.</strong> A flat fee per withdrawal hurts small transfers most.</li>
<li><strong>Choose the cheapest payout route</strong> for your country, comparing both the fee and the exchange rate.</li>
</ol>

<p>Avoid trying to move platform clients off Upwork to dodge fees. Upwork's terms restrict off-platform payment with clients you met there, and breaking them can cost you your account.</p>

<h2>Upwork Fees vs Fiverr and Other Platforms</h2>

<p>Upwork's variable 0% to 15% fee compares with a flat 20% seller fee on Fiverr, where sellers keep 80% of each order. Upwork, however, charges for bidding through Connects, while Fiverr buyers come to your gig listing. Our detailed breakdown of <a href="/blog/fiverr-fees">Fiverr fees for sellers</a> covers the other side, and <a href="/blog/upwork-vs-fiverr">Upwork vs Fiverr</a> compares the two platforms beyond fees. For a wider view, see our roundup of the <a href="/blog/best-freelance-websites">best freelance websites</a>, including lower-commission options.</p>

<h2>Invoicing and Taxes for Upwork Earnings</h2>

<p>Upwork generates its own invoices for platform contracts, so you do not need to send separate ones for that work. But you still need records. Download your transaction history regularly so you can report gross income and list service fees, Connects, membership and withdrawal fees as business expenses. US freelancers usually report this on Schedule C; see our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a>. Non-US freelancers working with US platforms often complete a W-8BEN; our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide</a> explains it. This is general information, not tax advice.</p>

<p>If a client needs a formal invoice in their own format, or you work with clients outside Upwork, our article on <a href="/blog/fiverr-upwork-invoice">invoicing for Fiverr and Upwork work</a> explains what to include.</p>

<h2>Bill Your Off-Platform Clients With Zero Commission</h2>

<p>Upwork fees in 2026 come down to three numbers: the 0% to 15% service fee on each contract, the Connects you spend to win it, and the withdrawal fee to get paid. Know all three and you can price every bid with confidence. For clients you find yourself, skip the commission entirely: create a professional bill with our free <a href="/invoice-generator">invoice generator</a> or start from a ready-made <a href="/invoice-templates/modern">modern invoice template</a> built for freelancers.</p>
`,
  },
  {
    slug: "fiverr-fees",
    title: "Fiverr Fees for Sellers in 2026: 20% Cut and Withdrawal Fees",
    description:
      "Fiverr fees for sellers explained: the 20% service fee, buyer fees, the 14-day clearing period, withdrawal fees by payout method and a worked earnings example.",
    category: "freelancing",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "upwork-vs-fiverr",
      "fiverr-upwork-invoice",
      "payoneer-vs-paypal",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "How much does Fiverr take from sellers?",
        a: "Fiverr takes 20% of every order as its seller service fee, so sellers receive 80% of the order value. The 20% applies to the base gig price, gig extras, custom offers and tips. On a $100 order you receive $80. The fee does not change with your seller level or order size. Withdrawal fees and currency conversion, which depend on your payout method, come on top of the 20%.",
      },
      {
        q: "Does Fiverr take 20% of tips?",
        a: "Yes. Fiverr's 20% service fee applies to tips as well as the order itself, so a $10 tip adds $8 to your earnings. Buyers also pay Fiverr's buyer service fee on payments within the order, which according to Fiverr's help center includes tips and extras. That is worth knowing when a buyer asks whether a tip reaches you in full: it does not.",
      },
      {
        q: "What are Fiverr's withdrawal fees?",
        a: "As of 2026, Fiverr's help center lists no Fiverr fee for PayPal withdrawals, though PayPal may charge its own fees and conversion. Bank transfer via Payoneer carries a $1 fee and a $20 minimum, while withdrawing to a Payoneer account carries a $3 fee and a $10 minimum. The maximum is $5,000 per withdrawal transaction. Available methods vary by country, so check your Earnings page.",
      },
      {
        q: "How long does it take to get paid on Fiverr?",
        a: "After an order is marked complete, Fiverr holds the funds for a clearing period before you can withdraw them. For most sellers it is 14 days; Top Rated sellers, Fiverr Pro freelancers and some other programs have a shorter period. After clearing, withdrawal timing depends on your method: PayPal is usually fast, while bank transfers can take a few business days to arrive.",
      },
      {
        q: "How much do buyers pay in Fiverr fees?",
        a: "Buyers pay a separate service fee on top of the gig price. Fiverr's help center describes a standard fee of 5.5% of the purchase amount plus a small-order fee on lower-priced orders, currently stated as $3.50 for orders under $200 in its payment articles. Buyer fees do not reduce what the seller earns, but they do raise the buyer's total, which can affect conversion on cheap gigs.",
      },
      {
        q: "Does Fiverr Seller Plus lower the 20% fee?",
        a: "No. Seller Plus is a paid subscription with tools such as extra analytics and a success manager on higher tiers, but it does not reduce the 20% service fee on orders. Fiverr's help center lists Seller Plus Kickstart at $15 a month for newer sellers, Standard at $25 a month and Premium at $49 a month. Judge it on the extra sales it brings, not fee savings.",
      },
      {
        q: "How do I price a Fiverr gig to cover the fee?",
        a: "Divide the amount you want to keep by 0.80. If you want $80 in hand, price at $100. If you want $200, price at $250. Then allow a little extra for withdrawal fees and currency conversion if you are paid in a different currency. Compare against competing gigs: if your grossed-up price is far above the market, focus on extras and packages rather than the base price.",
      },
      {
        q: "Are Fiverr fees tax deductible?",
        a: "In most tax systems, the 20% Fiverr fee and withdrawal charges are business expenses. In the US, sellers generally report gross earnings and deduct the fees as an expense, so keep your Fiverr earnings statements. Other countries treat platform income differently, so check your local rules or ask a tax professional. This is general information, not tax advice.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> Fiverr fees for sellers are a flat 20% of every order, including gig extras and tips, so you keep 80%. After a 14-day clearing period for most sellers, you pay a withdrawal fee that depends on the payout method: as of 2026, nothing from Fiverr for PayPal, $1 for bank transfer via Payoneer, and $3 to a Payoneer account.</p>

<p>The flat fee makes Fiverr easier to budget than some platforms, but the full cost of selling also includes withdrawal fees, currency conversion and the buyer fees that affect how attractive your price looks. This guide covers each one, shows how much you really keep with a worked example, and explains how to price gigs around the fee. If you also work with clients outside Fiverr, our free <a href="/invoice-generator">invoice generator</a> lets you bill them directly with no commission.</p>

<p><em>Fees below come from Fiverr's own help center as of 2026. Fiverr updates its policies, so confirm current figures in your account before relying on them.</em></p>

<h2>Fiverr Fees for Sellers at a Glance</h2>

<table>
<thead>
<tr><th>Fee</th><th>Who pays</th><th>Amount as of 2026</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Seller service fee</td><td>Seller</td><td>20% of each order</td><td>Applies to gigs, extras, custom offers and tips</td></tr>
<tr><td>Clearing period</td><td>Seller (time, not money)</td><td>14 days for most sellers</td><td>Shorter for Top Rated, Fiverr Pro and some programs</td></tr>
<tr><td>PayPal withdrawal</td><td>Seller</td><td>No Fiverr fee; $1 minimum</td><td>PayPal may charge its own fees and conversion</td></tr>
<tr><td>Bank transfer via Payoneer</td><td>Seller</td><td>$1 per withdrawal; $20 minimum</td><td>Payoneer conversion may apply</td></tr>
<tr><td>Payoneer account</td><td>Seller</td><td>$3 per withdrawal; $10 minimum</td><td>Funds land in your Payoneer balance</td></tr>
<tr><td>Withdrawal limit</td><td>Seller</td><td>$5,000 per transaction</td><td>Make several withdrawals for larger amounts</td></tr>
<tr><td>Seller Plus (optional)</td><td>Seller</td><td>Kickstart $15, Standard $25, Premium $49 per month</td><td>Does not reduce the 20% fee</td></tr>
<tr><td>Buyer service fee</td><td>Buyer</td><td>5.5% plus a small-order fee</td><td>Does not reduce seller earnings</td></tr>
</tbody>
</table>

<h2>The 20% Fiverr Seller Fee Explained</h2>

<p>Fiverr's model is simple: after an order is completed, you receive 80% of the buyer's cleared payment. Unlike Upwork's variable fee, Fiverr's 20% does not change with your seller level, the number of orders you complete or how long you have worked with a buyer.</p>

<h3>What the 20% applies to</h3>

<ul>
<li><strong>Base gig price.</strong> A $50 basic package earns you $40.</li>
<li><strong>Gig extras and upgrades.</strong> A $25 fast-delivery extra earns you $20.</li>
<li><strong>Custom offers and milestones.</strong> The same 20% applies to each milestone payment.</li>
<li><strong>Tips.</strong> A $10 tip earns you $8.</li>
</ul>

<h3>What happens with cancellations and refunds</h3>

<p>Fiverr's fee is taken from completed orders. If an order is cancelled, whether by mutual agreement, through Fiverr's resolution process or by customer support, the buyer's payment is generally returned and you earn nothing from it, so there is no fee to pay but also no income for the time already spent. Cancellations can also affect your seller metrics. The practical defence is a clear gig description, specific package limits and written requirements before you start, the same habits that prevent <a href="/blog/scope-creep-change-order">scope creep</a> with direct clients.</p>

<h3>Custom offers and milestone orders</h3>

<p>For larger jobs, sellers often send a custom offer instead of a standard gig package, sometimes split into milestones. The 20% fee still applies, calculated on each milestone as it is completed. Custom offers are useful for pricing because you can quote the exact grossed-up figure for a specific scope rather than squeezing the job into a preset package. For example, a website build you want to net $1,600 from would be quoted at $2,000, split into two milestones of $1,000 each, each paying you $800 when delivered and accepted.</p>

<p>Because the fee is fixed, the only lever you control is the price. That makes it essential to calculate prices from the amount you want to keep, not the amount on the gig page. Our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> covers the cost and time side of that calculation.</p>

<h2>Fiverr Buyer Fees and Why They Matter to Sellers</h2>

<p>Buyers pay their own service fee on top of your price. Fiverr's help article on <a href="https://help.fiverr.com/hc/en-us/articles/360050216133-Paying-for-orders-extras-or-custom-offers" target="_blank" rel="noopener noreferrer">paying for orders, extras or custom offers</a> describes a standard fee of 5.5% of the purchase amount, plus a $3.50 fee on orders under $200. (Some older Fiverr pages show a different small-order threshold, so treat the checkout breakdown as the final word.)</p>

<p>These fees do not come out of your earnings, but they shape buyer behavior. On a $20 gig, a buyer pays $1.10 plus $3.50, so $24.60 in total: the fees add 23% to the price. On a $250 gig, the buyer pays only the 5.5%, or $13.75. This is one reason many sellers push buyers toward bundled packages above the small-order threshold instead of several tiny orders.</p>

<h2>Fiverr Withdrawal Fees by Payout Method</h2>

<p>Once your earnings clear, you can withdraw them from the Earnings page. Fiverr's help article on <a href="https://help.fiverr.com/hc/en-us/articles/360010530058-Withdrawing-your-earnings-managing-payout-methods" target="_blank" rel="noopener noreferrer">withdrawing earnings and managing payout methods</a> lists the options available in your country. As of 2026 the main methods are:</p>

<table>
<thead>
<tr><th>Payout method</th><th>Fiverr fee</th><th>Minimum</th><th>Hidden costs to check</th></tr>
</thead>
<tbody>
<tr><td>PayPal</td><td>None</td><td>$1</td><td>PayPal receiving or conversion fees; transfer to your bank</td></tr>
<tr><td>Bank transfer via Payoneer</td><td>$1</td><td>$20</td><td>Exchange rate margin when converting to local currency</td></tr>
<tr><td>Payoneer account</td><td>$3</td><td>$10</td><td>Payoneer withdrawal and conversion fees to your bank</td></tr>
</tbody>
</table>

<p>For freelancers paid in US dollars but spending another currency, the exchange rate margin often costs more than the flat withdrawal fee. A 2% conversion margin on a $1,000 withdrawal is $20, twenty times the $1 Payoneer bank-transfer fee. Our comparisons of <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal</a> and <a href="/blog/paypal-fees">PayPal fees</a> help you pick the cheaper route, and sellers in Pakistan should read <a href="/blog/receive-payment-from-abroad-pakistan">how to receive payment from abroad in Pakistan</a>.</p>

<h3>The clearing period</h3>

<p>Fiverr holds completed-order funds for a clearing period before you can withdraw. For most sellers it is 14 days. Top Rated sellers, Fiverr Pro freelancers and some other programs get a shorter period. Plan your cash flow around this: money from an order completed on the 1st is usually not withdrawable until about the 15th.</p>

<h3>Seller Plus and Fiverr Pro</h3>

<p>Fiverr sells an optional subscription called Seller Plus. According to Fiverr's help center, Seller Plus Kickstart costs $15 a month for newer, unleveled sellers, while Standard costs $25 a month and Premium $49 a month, with cheaper rates for semi-annual and annual plans paid upfront. The plans add tools such as deeper analytics, and the higher tiers add access to a success manager. None of them lowers the 20% service fee, so judge the subscription the way you would any marketing spend: if it does not bring in enough extra orders to cover its cost after the 20% fee, cancel it.</p>

<p>Fiverr Pro is different. It is a vetted program for experienced professionals, and its main money benefits are access to larger business buyers and, as noted above, a shorter clearing period. It does not change the basic 80/20 split either.</p>

<h2>Worked Example: A Month of Fiverr Earnings</h2>

<p>A logo designer completes 12 orders in a month. Base gig prices total $1,250, gig extras total $200, and buyers leave $50 in tips. She withdraws once, by bank transfer via Payoneer.</p>

<table>
<thead>
<tr><th>Item</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Gross order value</td><td>$1,250 + $200 + $50</td><td>$1,500.00</td></tr>
<tr><td>Fiverr service fee</td><td>$1,500 × 20%</td><td>−$300.00</td></tr>
<tr><td>Net earnings after clearing</td><td>$1,500 − $300</td><td>$1,200.00</td></tr>
<tr><td>Withdrawal fee</td><td>Bank transfer via Payoneer</td><td>−$1.00</td></tr>
<tr><td><strong>Received in USD before conversion and tax</strong></td><td>$1,200 − $1</td><td><strong>$1,199.00</strong></td></tr>
</tbody>
</table>

<p>Her total Fiverr cost is $301, or about 20.07% of gross sales. If her bank or Payoneer applies a currency conversion margin, that comes on top. Had she withdrawn 12 times, once after each order, she would have paid $12 in fees instead of $1, which is why batching withdrawals matters.</p>

<h2>How to Price Fiverr Gigs Around the 20% Fee</h2>

<p>The formula is: gig price = amount you want to keep ÷ 0.80.</p>

<table>
<thead>
<tr><th>You want to keep</th><th>Price to charge</th><th>Fiverr fee</th></tr>
</thead>
<tbody>
<tr><td>$40</td><td>$50</td><td>$10</td></tr>
<tr><td>$80</td><td>$100</td><td>$20</td></tr>
<tr><td>$200</td><td>$250</td><td>$50</td></tr>
<tr><td>$400</td><td>$500</td><td>$100</td></tr>
</tbody>
</table>

<p>Follow these steps to set or review your gig prices:</p>

<ol>
<li><strong>Work out your target hourly income</strong> from your living costs, business costs and available hours.</li>
<li><strong>Estimate hours per order,</strong> including revisions and messaging, not just production time.</li>
<li><strong>Multiply to get your target take-home</strong> per package.</li>
<li><strong>Divide by 0.80</strong> to find the gig price.</li>
<li><strong>Add a small buffer</strong> for withdrawal fees and currency conversion.</li>
<li><strong>Compare with competing gigs.</strong> If you are far above the market, adjust scope, add tiered packages or sell extras rather than cutting your floor.</li>
</ol>

<p>Review your prices every few months. As your reviews and seller level grow, buyers accept higher prices, and every increase is shared with Fiverr at the same 20%, so a $10 raise on a popular package still adds $8 to each order you deliver.</p>

<h2>Fiverr Fees vs Upwork and Other Platforms</h2>

<p>Fiverr's flat 20% is higher than Upwork's 2026 variable fee of 0% to 15% per contract, but Upwork charges freelancers for bidding through Connects, while Fiverr buyers find your gig without you paying to pitch. Which is cheaper depends on your win rate and order size. Read our full breakdown of <a href="/blog/upwork-fees">Upwork fees</a> and the head-to-head comparison of <a href="/blog/upwork-vs-fiverr">Upwork vs Fiverr</a>. If you want lower commissions, our guide to the <a href="/blog/best-freelance-websites">best freelance websites</a> includes platforms with smaller or zero seller fees.</p>

<h2>Ways to Keep More of Your Fiverr Earnings</h2>

<ul>
<li><strong>Raise average order value</strong> with packages and extras. The percentage is fixed, but fewer, larger orders take less admin time.</li>
<li><strong>Batch withdrawals</strong> to pay flat fees less often.</li>
<li><strong>Pick the payout route with the best exchange rate,</strong> not only the lowest fee.</li>
<li><strong>Reach the levels with shorter clearing periods</strong> to improve cash flow.</li>
<li><strong>Treat Seller Plus as a marketing cost,</strong> not a fee cut, and cancel it if it does not bring extra orders.</li>
<li><strong>Stay within Fiverr's rules.</strong> Taking Fiverr buyers off the platform for payment breaks its terms and risks your account. Build your own client base separately; our guide on <a href="/blog/how-to-get-clients-as-a-freelancer">how to get clients as a freelancer</a> covers outreach outside marketplaces.</li>
</ul>

<h2>Records, Invoices and Tax for Fiverr Sellers</h2>

<p>Fiverr provides order receipts and earnings statements, so you do not issue your own invoice for platform orders. Still, download your statements monthly. You will need gross sales, Fiverr fees and withdrawal fees to report income and expenses correctly. US sellers can read our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a>, and anyone mixing platform and direct work should see our guide to <a href="/blog/fiverr-upwork-invoice">invoicing for Fiverr and Upwork work</a>. This is general information, not tax advice.</p>

<h2>Invoice Your Direct Clients Commission-Free</h2>

<p>Fiverr fees for sellers are predictable: 20% of every order and tip, a clearing period, and a small withdrawal fee that depends on your payout method. Price from your take-home figure and those fees stop being a surprise. For clients you win outside Fiverr, keep 100% of the fee by billing them yourself: build a professional bill with our free <a href="/invoice-generator">invoice generator</a>, or pick a ready-made <a href="/invoice-templates/creative">creative invoice template</a> that suits design and content work.</p>
`,
  },
  {
    slug: "best-freelance-websites",
    title: "Best Freelance Websites in 2026: Fees and Platforms Compared",
    description:
      "The best freelance websites for 2026 compared: Upwork, Fiverr, Freelancer.com, PeoplePerHour, Guru, Contra, Toptal and LinkedIn, with fees and who each suits.",
    category: "freelancing",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-become-a-freelancer",
      "how-to-get-clients-as-a-freelancer",
      "upwork-vs-fiverr",
      "freelance-proposal-template",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "What is the best freelance website for beginners?",
        a: "For most beginners, Fiverr and Upwork are the easiest places to start because they have the most buyers and built-in payment protection. Fiverr suits people who can package a clear service at a fixed price, while Upwork suits those comfortable writing proposals for posted jobs. Expect to spend your first weeks building reviews, so price competitively at first and raise rates once you have a track record.",
      },
      {
        q: "Which freelance platform has the lowest fees?",
        a: "Among the platforms in this guide, Contra advertises commission-free payments for freelancers, so you keep 100% of what you earn, while clients pay a contract fee. Guru's freelancer fees range from about 5% to 9% depending on membership. Upwork's variable fee runs from 0% to 15% per contract. Fiverr charges sellers a flat 20%. Fees change often, so check each platform's pricing page before committing.",
      },
      {
        q: "Is Upwork or Fiverr better for freelancers?",
        a: "It depends on how you sell. Upwork works best if you like responding to client briefs, bill hourly or by milestone, and want long-term contracts; its fee is 0% to 15% per contract plus the cost of Connects. Fiverr works best if you can sell a clearly defined product-like service; its fee is a flat 20% but you don't pay to bid. Many freelancers use both.",
      },
      {
        q: "Are freelance websites worth the fees?",
        a: "Often, yes, especially early on. Platforms bring clients you would not find alone, handle payment protection and resolve disputes. The trade-off is the commission and price competition. A common path is to use platforms to build a portfolio and reviews, then gradually win direct clients through referrals, LinkedIn and outreach, where you keep the full fee and invoice them yourself.",
      },
      {
        q: "Which freelance websites are best for high-paying clients?",
        a: "Vetted networks such as Toptal focus on senior talent and screen freelancers before admitting them, which tends to mean higher rates. Upwork also has an expert-vetted program, and LinkedIn is strong for consultants and B2B specialists because you can reach decision-makers directly. High-paying clients usually care more about proven results and clear communication than about which platform you use.",
      },
      {
        q: "Can I use multiple freelance websites at the same time?",
        a: "Yes, and many freelancers do. Spreading your profiles across two or three platforms reduces your dependence on any single algorithm or policy change. Keep your profile, portfolio and pricing consistent, track where each client came from, and be careful with capacity so you don't overcommit. Follow each platform's rules about keeping clients and payments on that platform.",
      },
      {
        q: "Do I need to send invoices if I use a freelance website?",
        a: "For work paid through Upwork, Fiverr and similar marketplaces, the platform generates the transaction records and you usually do not send your own invoice. Some clients still ask for a formal invoice for their accounts, and any clients you find off-platform will need one from you. Keep your platform statements, because you need gross income and fees for your tax return.",
      },
      {
        q: "What are the best freelance websites for writers and designers?",
        a: "Writers and designers do well on Fiverr, where packaged services like logo designs or blog posts sell easily, and on Upwork, where content and design are among the busiest categories. Contra suits creatives who want a portfolio-led profile without commission. Beyond marketplaces, niche job boards and LinkedIn often lead to better-paid retainer work with agencies and in-house marketing teams.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> The best freelance websites in 2026 are Upwork for proposal-based contracts (0% to 15% fee), Fiverr for packaged services (20% seller fee), Freelancer.com for contests and bidding (10% or $5), PeoplePerHour for UK and European clients, Guru for lower fees, Contra for commission-free work, Toptal for vetted senior talent, and LinkedIn for direct B2B clients.</p>

<p>The right freelance platform depends on what you sell, how you like to win work and how much commission you can absorb. This guide compares the major freelance websites side by side, explains each one's fees and best use, and shows how much a $3,000 project actually pays on each. Whichever platforms you use, you will still need to bill direct clients, which you can do for free with our <a href="/invoice-generator">invoice generator</a>.</p>

<p><em>Fees are taken from each platform's own pricing or help pages as of 2026 and change regularly. Check the current figures before you sign up.</em></p>

<h2>Best Freelance Websites Compared (2026)</h2>

<table>
<thead>
<tr><th>Platform</th><th>How you win work</th><th>Freelancer fee as of 2026</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Upwork</td><td>Proposals on posted jobs, invitations, project catalog</td><td>Variable 0% to 15% per contract, plus Connects to bid</td><td>Ongoing contracts, hourly work, most skills</td></tr>
<tr><td>Fiverr</td><td>Buyers order your gig packages</td><td>Flat 20% of each order and tip</td><td>Packaged services: design, writing, video, voice</td></tr>
<tr><td>Freelancer.com</td><td>Bids on projects and contests</td><td>10% or $5 (whichever is greater) on fixed-price; 10% on hourly</td><td>Budget projects, contests, technical tasks</td></tr>
<tr><td>PeoplePerHour</td><td>Proposals and fixed-price offers</td><td>Tiered by lifetime billing per buyer: 20%, 7.5%, then 3.5%</td><td>UK and European clients, repeat buyers</td></tr>
<tr><td>Guru</td><td>Quotes on jobs</td><td>About 5% to 9% depending on membership</td><td>Lower fees, long-term clients</td></tr>
<tr><td>Contra</td><td>Portfolio profile and job listings</td><td>0% commission for freelancers (clients pay a contract fee)</td><td>Creatives and independents who want to keep 100%</td></tr>
<tr><td>Toptal</td><td>Matched to clients after screening</td><td>Not charged to freelancers in the usual way; the network sets client rates</td><td>Senior developers, designers, finance experts</td></tr>
<tr><td>LinkedIn</td><td>Networking, content, direct outreach</td><td>No commission on work you win</td><td>Consultants, B2B services, high-value retainers</td></tr>
</tbody>
</table>

<h2>Upwork: Best All-Round Freelance Platform</h2>

<p>Upwork is the largest general freelance marketplace and covers almost every skill, from development and design to accounting and admin. Clients post jobs, you send proposals, and work runs as hourly or fixed-price contracts with milestones.</p>

<ul>
<li><strong>Fees:</strong> a variable freelancer service fee of 0% to 15% per contract, shown before you commit, plus Connects to bid at $0.15 each beyond your free monthly allowance.</li>
<li><strong>Strengths:</strong> long-term contracts, hourly protection, a huge client base.</li>
<li><strong>Weaknesses:</strong> competition on entry-level jobs and the cost of Connects for low win rates.</li>
</ul>

<p>See our full breakdown of <a href="/blog/upwork-fees">Upwork fees</a> for withdrawal costs and pricing tips.</p>

<h2>Fiverr: Best for Packaged Services</h2>

<p>On Fiverr you list "gigs": fixed-scope services with set prices and delivery times, often in basic, standard and premium tiers. Buyers come to you, so you do not pay to pitch.</p>

<ul>
<li><strong>Fees:</strong> a flat 20% of every order, extra and tip; buyers pay their own service fee on top.</li>
<li><strong>Strengths:</strong> no bidding, simple product-style selling, strong demand for creative services.</li>
<li><strong>Weaknesses:</strong> the highest flat cut in this list and price pressure on low-cost gigs.</li>
</ul>

<p>Our guide to <a href="/blog/fiverr-fees">Fiverr fees for sellers</a> covers withdrawals and the clearing period in detail.</p>

<h2>Freelancer.com, PeoplePerHour and Guru</h2>

<h3>Freelancer.com</h3>

<p>Freelancer.com runs a bidding marketplace plus design and development contests. According to its <a href="https://www.freelancer.com/feesandcharges" target="_blank" rel="noopener noreferrer">fees and charges page</a>, freelancers pay 10% or $5, whichever is greater, on fixed-price projects and 10% on hourly payments. It suits people who like quick, smaller projects and contests, though competition on price is intense.</p>

<h3>PeoplePerHour</h3>

<p>PeoplePerHour is popular with UK and European small businesses. Its <a href="https://support.peopleperhour.com/hc/en-us/articles/205218337-Freelancer-commission-fees" target="_blank" rel="noopener noreferrer">freelancer commission fees</a> are tiered by how much you have billed each buyer over time: 20% on the first band, 7.5% on the middle band and 3.5% once lifetime billing with that buyer passes the top threshold (listed at £5,000, $7,000 or €6,000). That structure strongly rewards repeat clients.</p>

<h3>Guru</h3>

<p>Guru is an older marketplace with lower fees. Its freelancer job fees range from about 9% on the free plan down to about 5% on the top paid membership, as of 2026. It suits freelancers who want long-term clients and are happy with a smaller but less crowded marketplace.</p>

<h2>Contra, Toptal and LinkedIn: Beyond the Big Marketplaces</h2>

<h3>Contra</h3>

<p>Contra positions itself as a commission-free platform for independents. Freelancers keep 100% of what they earn through Contra payments, while clients pay a contract fee. It is portfolio-led and popular with designers, developers and creators. The client base is smaller than Upwork's, so it works best alongside your own promotion.</p>

<h3>Toptal</h3>

<p>Toptal is a vetted network that screens applicants through skills tests and interviews before matching them with clients. It focuses on senior software developers, designers, finance experts and project managers. Fewer people get in, but those who do typically work with larger companies at higher rates.</p>

<h3>LinkedIn</h3>

<p>LinkedIn is not a marketplace in the usual sense, but for consultants and B2B freelancers it is often the best source of high-value clients. You win work through your profile, posts and direct messages, and there is no commission. Combine it with good outreach habits; our guide to <a href="/blog/cold-email-for-freelancers">cold email for freelancers</a> covers messaging that gets replies.</p>

<h3>Niche job boards and communities</h3>

<p>Beyond the general marketplaces, many skills have their own job boards and communities: design portfolios with hiring sections, developer job boards, writing and editing networks, and industry Slack or Discord groups. These rarely take a commission because the client contacts you and you agree terms directly. The trade-off is that you handle contracts, invoicing and chasing payment yourself, with no platform escrow to fall back on. If you go this route, ask for a deposit on larger projects; our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how to bill one.</p>

<h3>Which platform suits which freelancer</h3>

<table>
<thead>
<tr><th>If you are...</th><th>Start with</th><th>Add later</th></tr>
</thead>
<tbody>
<tr><td>A beginner with a clear, packaged service</td><td>Fiverr</td><td>Upwork, Contra</td></tr>
<tr><td>A generalist who likes pitching for briefs</td><td>Upwork</td><td>Freelancer.com, Guru</td></tr>
<tr><td>Serving UK or European small businesses</td><td>PeoplePerHour</td><td>Upwork, LinkedIn</td></tr>
<tr><td>A designer or creator with a strong portfolio</td><td>Contra</td><td>Fiverr, niche boards</td></tr>
<tr><td>A senior developer or finance specialist</td><td>Toptal</td><td>LinkedIn, direct referrals</td></tr>
<tr><td>A consultant selling to businesses</td><td>LinkedIn</td><td>Upwork for occasional larger contracts</td></tr>
</tbody>
</table>

<h2>Worked Example: What a $3,000 Project Pays on Each Platform</h2>

<p>Here is the freelancer fee on a single $3,000 fixed-price project, before withdrawal fees, currency conversion and tax. For Upwork we assume the contract shows a 10% fee; for Guru we assume the free plan at 9%.</p>

<table>
<thead>
<tr><th>Platform</th><th>Fee calculation</th><th>Platform fee</th><th>You receive</th></tr>
</thead>
<tbody>
<tr><td>Upwork (10% shown)</td><td>$3,000 × 10%</td><td>$300</td><td>$2,700</td></tr>
<tr><td>Fiverr</td><td>$3,000 × 20%</td><td>$600</td><td>$2,400</td></tr>
<tr><td>Freelancer.com</td><td>$3,000 × 10% (more than $5)</td><td>$300</td><td>$2,700</td></tr>
<tr><td>Guru (free plan)</td><td>$3,000 × 9%</td><td>$270</td><td>$2,730</td></tr>
<tr><td>Contra</td><td>0% commission</td><td>$0</td><td>$3,000</td></tr>
<tr><td>Direct client (your own invoice)</td><td>No platform</td><td>$0</td><td>$3,000</td></tr>
</tbody>
</table>

<p>The gap between Fiverr and a direct client on this one project is $600. Over a year of similar projects, the platform you choose can be worth thousands. But fees are only half the picture: a platform that wins you twice as many projects can still be the better choice. Compare platforms on net income per month, not commission alone.</p>

<h2>How to Choose the Right Freelance Platform: 6 Steps</h2>

<ol>
<li><strong>Define what you sell.</strong> A packaged, repeatable service suits Fiverr; custom or ongoing work suits Upwork, Guru or PeoplePerHour.</li>
<li><strong>Check demand in your category.</strong> Search each platform for your service and look at the number of active jobs or competing gigs.</li>
<li><strong>Compare fees on your typical project size.</strong> Run your average project through the table above, including bidding costs.</li>
<li><strong>Look at payout options for your country.</strong> Withdrawal fees and exchange rates vary widely; see our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a>.</li>
<li><strong>Start with one or two platforms.</strong> Build a strong profile and reviews before spreading out.</li>
<li><strong>Review every quarter.</strong> Track income per platform and drop the ones that cost more time than they return.</li>
</ol>

<h2>Freelance Platforms 2026: Tips to Win Work Faster</h2>

<ul>
<li><strong>Specialize your profile.</strong> "Shopify speed optimization" beats "web developer" in search and in proposals.</li>
<li><strong>Write tailored proposals.</strong> Reference the client's brief in the first line. Our <a href="/blog/freelance-proposal-template">freelance proposal template</a> gives you a structure.</li>
<li><strong>Price from your take-home.</strong> Gross up for fees using price = target ÷ (1 − fee rate), and read <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> for the cost side.</li>
<li><strong>Use milestones and deposits</strong> for larger projects to protect cash flow; see <a href="/blog/milestone-payments">milestone payments</a>.</li>
<li><strong>Collect reviews and case studies,</strong> then use them to win direct clients who pay no platform fee.</li>
<li><strong>Use AI to speed up admin, not to write generic pitches.</strong> Our list of <a href="/blog/ai-tools-for-freelancers">AI tools for freelancers</a> shows where it helps.</li>
</ul>

<h3>Red flags to avoid on any freelance website</h3>

<p>Every large freelance platform attracts some fake clients. The patterns are consistent, so they are easy to spot once you know them:</p>

<ul>
<li><strong>Requests to move to another chat app or payment method</strong> before a contract exists. Besides breaking most platforms' rules, this removes the escrow or payment protection that is a big part of what the fee pays for.</li>
<li><strong>Clients who send you a check or payment and ask for part of it back.</strong> This is a classic overpayment scam; the original payment later bounces.</li>
<li><strong>"Test tasks" that look like real, finished work</strong> with no payment offered.</li>
<li><strong>Requests for your personal ID, bank login or to buy equipment</strong> through a supplier the client names.</li>
<li><strong>Unfunded milestones.</strong> On fixed-price work, do not start until the milestone is funded on the platform.</li>
</ul>

<p>Our guide to invoice scams covers related tricks that target freelancers who invoice clients directly.</p>

<h2>From Platforms to Direct Clients</h2>

<p>Most successful freelancers treat marketplaces as a starting point, not a permanent home. Once you have reviews and a portfolio, referrals, LinkedIn and outreach bring clients you can bill directly with no commission. Our guide on <a href="/blog/how-to-get-clients-as-a-freelancer">how to get clients as a freelancer</a> covers that transition. Stay within each platform's rules: moving clients you met on a marketplace off-platform usually breaks its terms.</p>

<p>When you do bill directly, use a proper contract and a professional invoice. Our <a href="/blog/freelance-contract-template">freelance contract template</a> and <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> cover the essentials, and the <a href="/blog/upwork-vs-fiverr">Upwork vs Fiverr comparison</a> helps if you are still choosing your first marketplace. Keep a simple record of which platform or referral each client came from, along with the fees each one cost you, so your quarterly review is based on real numbers rather than impressions. Over time that record shows you exactly where your best-paying work comes from.</p>

<h2>Invoice Direct Clients and Keep 100%</h2>

<p>The best freelance websites for you are the ones that bring steady work at a fee your prices can absorb: Upwork and Fiverr for volume, Freelancer.com, PeoplePerHour and Guru as alternatives, Contra and LinkedIn when you want to keep the whole fee. For every client you win directly, create a professional bill in minutes with our free <a href="/invoice-generator">invoice generator</a>, or start from a ready-made <a href="/invoice-templates/startup">startup invoice template</a> designed for freelancers and small studios.</p>
`,
  },
];
