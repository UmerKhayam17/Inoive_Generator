import type { PostDraft } from "../blog";

export const PAYMENTS_2026_L_POSTS: PostDraft[] = [
  {
    slug: "receive-money-from-abroad-india",
    title: "Receive Money From Abroad in India: FIRA, Codes, Fees",
    description:
      "How to receive money from abroad in India as a freelancer or exporter: bank wires vs platforms, purpose codes, FIRC and e-FIRA, GST LUT and a fee example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["lut-under-gst", "swift-code-vs-iban", "wise-vs-payoneer"],
    faqs: [
      {
        q: "Is money received from foreign clients taxable in India?",
        a: "Yes. If you are a resident of India, payments from foreign clients for your services are part of your taxable income, whether they arrive by wire, PayPal, Wise or another platform. Freelancers usually report them as business or professional income, and many use presumptive taxation for professionals if they qualify. Export of services is zero-rated for GST, but that does not make the income tax-free.",
      },
      {
        q: "What is the difference between FIRC and FIRA?",
        a: "FIRC is the Foreign Inward Remittance Certificate that banks traditionally issued on request as proof that foreign currency came into India for a stated purpose. FIRA, often called e-FIRA, is the advice many banks and payment platforms now issue digitally for each inward remittance. Both serve the same practical purpose: evidence of the amount, sender, date and purpose code for your GST and income tax records.",
      },
      {
        q: "Do I need GST registration to receive foreign payments?",
        a: "Not automatically. Service providers generally need to register once aggregate turnover crosses the GST threshold, which is Rs 20 lakh for most states. Exporters below that limit are often not required to register, but some choose to so they can claim input tax credit or meet platform requirements. Check the current rules on the GST portal or with a chartered accountant for your situation.",
      },
      {
        q: "Which purpose code should a freelance web developer use?",
        a: "Software and website work is commonly reported under P0802, software consultancy and implementation, unless the work is covered by a SOFTEX form. A marketing or management consultant might use P1006, and other services have their own codes in the RBI list. The correct code depends on what you actually supplied, so confirm with your bank before the payment is processed rather than after.",
      },
      {
        q: "How long does an international wire take to reach an Indian bank account?",
        a: "A SWIFT wire usually takes one to five business days, depending on the sending bank, any intermediary banks, time zones and whether your bank needs purpose code details before crediting the funds. Platform transfers that pay out through local rails are often faster once the money is in the platform. Delays usually come from missing purpose information or a name mismatch.",
      },
      {
        q: "Can I receive foreign payments in a savings account?",
        a: "Many banks allow inward remittances into savings accounts, and plenty of individual freelancers use one. However, if you run regular export business, a current account or a dedicated account for business receipts makes bookkeeping and compliance easier. Banks may ask for extra documents for business-type receipts in a savings account, so ask your branch what it requires.",
      },
      {
        q: "Why did I receive less than the invoice amount?",
        a: "Short receipts usually come from three places: the sender's bank charging its fee, an intermediary bank deducting a correspondent fee, and the exchange rate margin applied when converting to rupees. Your own bank may also charge a handling fee. Asking the client to choose the OUR charge option on a wire, or using a platform with a transparent rate, reduces the gap.",
      },
      {
        q: "Can a foreign client pay me through UPI?",
        a: "UPI is mainly a domestic system, though cross-border UPI links are expanding for some corridors and mainly for person-to-person use. For business payments from foreign clients, bank wires and payment platforms remain the common routes because they produce the inward remittance documentation and purpose codes you need for export compliance. Check whether your provider supports your specific corridor before relying on it.",
      },
      {
        q: "Should I invoice foreign clients in USD or INR?",
        a: "Most freelancers invoice in the client's currency, often USD, EUR or GBP, because it is simpler for the client and matches the payment. For GST zero-rating, the payment generally needs to be received in convertible foreign exchange or in Indian rupees where RBI permits. Record the rupee value at the applicable exchange rate in your books and keep the e-FIRA as support.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To receive money from abroad in India, give your foreign client either your bank's SWIFT details or a payment platform account, make sure each payment carries the right RBI purpose code (such as P0802 for software work), and collect a FIRC or e-FIRA as proof. Exporters of services can then treat the sale as zero-rated for GST, usually under an LUT.</p>

<p>Indian freelancers, agencies and consultants now earn a large share of income from clients in the US, UK, Europe and the Gulf. The money side is not hard, but it has more paperwork than a domestic UPI transfer. This guide explains every route to receive money from abroad in India, what purpose codes and inward remittance certificates are, how GST and income tax treat export income, and how to keep fees low. It is general information for India as of October 2026, not tax or legal advice.</p>

<h2>What does it mean to receive money from abroad in India?</h2>
<p>Any payment that comes from outside India in foreign currency is an inward remittance under the Foreign Exchange Management Act (FEMA). Your bank, an Authorised Dealer (AD) bank licensed by the Reserve Bank of India, converts it to rupees and credits your account. Because it is a cross-border transaction, the bank needs to know <em>why</em> the money arrived. That reason is recorded as a purpose code, and the bank's confirmation becomes your proof of export.</p>
<p>For a freelancer this matters for three reasons:</p>
<ul>
<li><strong>GST:</strong> export of services is zero-rated only if the payment is received in convertible foreign exchange (or in rupees where RBI permits) and the other export conditions are met.</li>
<li><strong>Income tax:</strong> the foreign income is taxable in India for residents, and the remittance records support what you report.</li>
<li><strong>Banking:</strong> unexplained inward remittances can be held until you confirm the purpose, which delays your money.</li>
</ul>

<h2>How can freelancers receive money from abroad? The main options</h2>
<p>There are two broad routes: a direct SWIFT wire to your Indian bank, or a payment platform that collects money abroad and pays out to your bank in rupees. Many freelancers use both, depending on the client.</p>
<table><thead><tr><th>Method</th><th>How it works</th><th>Typical costs</th><th>Best for</th></tr></thead><tbody>
<tr><td>SWIFT wire to your bank</td><td>Client sends from their bank using your SWIFT/BIC and account number</td><td>Sender fee, possible intermediary fee, your bank's FX margin and handling charge</td><td>Large invoices, corporate clients that only pay by wire</td></tr>
<tr><td>Wise Business</td><td>Client pays local account details (for example, a US ACH account); Wise converts and pays to India</td><td>Published conversion fee plus mid-market rate; check current pricing</td><td>Clients who prefer domestic transfers in their country</td></tr>
<tr><td>Payoneer</td><td>Receiving accounts in USD, EUR, GBP and others; withdraw to an Indian bank</td><td>Receiving and currency conversion fees vary by method</td><td>Marketplace sellers and freelancers on platforms</td></tr>
<tr><td>PayPal</td><td>Client pays by PayPal or card; funds auto-transfer to your Indian bank</td><td>Cross-border and conversion fees, often the most expensive route</td><td>Small invoices, clients who insist on PayPal</td></tr>
<tr><td>Export-focused platforms (for example, Skydo, Razorpay, Xflow)</td><td>Local collection accounts abroad, payout in rupees with e-FIRA</td><td>Flat or percentage fee; compare current pricing</td><td>Regular exporters who want documents handled</td></tr>
</tbody></table>
<p>Fees change frequently, so check each provider's pricing page on the day you decide. Our guides to <a href="/blog/wise-business-fees">Wise Business fees</a>, <a href="/blog/payoneer-fees">Payoneer fees</a> and <a href="/blog/paypal-fees">PayPal fees</a> break down the current charges, and the <a href="/blog/wise-vs-payoneer">Wise vs Payoneer comparison</a> helps if you are choosing between the two.</p>

<h2>What are RBI purpose codes and which one should you use?</h2>
<p>Purpose codes are short codes from the RBI's list for reporting foreign exchange transactions. Inward remittances use codes that start with P. The code tells the bank and RBI what you were paid for. Getting it right matters because it links the payment to the correct GST and income tax treatment.</p>
<table><thead><tr><th>Purpose code</th><th>Description</th><th>Typical user</th></tr></thead><tbody>
<tr><td>P0802</td><td>Software consultancy and implementation (other than those covered by SOFTEX)</td><td>Developers, software consultants, SaaS implementers</td></tr>
<tr><td>P0803</td><td>Data base, data processing charges</td><td>Data entry, data processing services</td></tr>
<tr><td>P1006</td><td>Business and management consultancy and public relations services</td><td>Consultants, marketers, PR freelancers</td></tr>
<tr><td>P1007</td><td>Advertising, trade fair, market research and public opinion polling</td><td>Ad agencies, market researchers</td></tr>
<tr><td>P1008</td><td>Research and development services</td><td>R&amp;D contractors</td></tr>
</tbody></table>
<p>The full list is in the RBI master direction on reporting under FEMA, available on the <a href="https://www.rbi.org.in/" target="_blank" rel="noopener">Reserve Bank of India website</a>. Many banks email you to confirm the purpose before crediting a wire. Platforms usually ask you to select a purpose when you add a client or invoice. If you are not sure which code fits, ask your bank before the money arrives: correcting a code later is possible but slow.</p>

<h2>What is a FIRC or e-FIRA and why do you need one?</h2>
<p>A Foreign Inward Remittance Certificate (FIRC) is a document from your bank confirming that foreign currency was received, the amount, the remitter, the date, the rupee value and the purpose. Many banks and platforms now issue an electronic Foreign Inward Remittance Advice (e-FIRA) for each payment instead of a paper certificate on request.</p>
<p>Keep one for every foreign receipt. You may need it to:</p>
<ul>
<li>Support zero-rated export invoices and any GST refund claim.</li>
<li>Show the source of funds to your bank, a lender or a visa office.</li>
<li>Match receipts to invoices when you prepare your income tax return.</li>
<li>Answer questions if the tax department compares your return with reported foreign remittances.</li>
</ul>
<p>When choosing a platform, check whether it issues an e-FIRA automatically or only on request, and whether there is an extra fee for it.</p>

<h2>How to receive money from abroad in India: step by step</h2>
<ol>
<li><strong>Pick the receiving route.</strong> Decide whether the client will wire directly to your bank or pay through a platform. Corporate clients often prefer wires; small businesses often prefer a local transfer in their own country.</li>
<li><strong>Collect the right bank details.</strong> For a wire you need your account name exactly as the bank holds it, account number, bank name and branch address, and the SWIFT/BIC code. India does not use IBANs; our <a href="/blog/swift-code-vs-iban">SWIFT code vs IBAN guide</a> explains what to tell clients who ask for one.</li>
<li><strong>Set up GST if applicable.</strong> If you are registered, file a Letter of Undertaking (LUT) on the GST portal before the financial year starts so you can export without paying IGST. See our <a href="/blog/lut-under-gst">LUT under GST guide</a> and the basics of <a href="/blog/gst-registration-india">GST registration in India</a>.</li>
<li><strong>Issue a proper export invoice.</strong> Show currency, client name and address abroad, a clear description of services, and, if registered, your GSTIN plus wording such as "Supply meant for export under LUT without payment of IGST". You can make one quickly with our <a href="/invoice-generator">free invoice generator</a>.</li>
<li><strong>Share the purpose.</strong> Ask the client to reference the invoice number in the payment, and tell your bank or platform the purpose code.</li>
<li><strong>Confirm and convert.</strong> Reply quickly to any bank email asking for purpose details. Note the exchange rate and any charges deducted.</li>
<li><strong>Download the FIRC or e-FIRA.</strong> Save it with the invoice in the same folder or accounting record.</li>
<li><strong>Book the receipt.</strong> Record the rupee amount, fees and any exchange difference in your books, and include the income in your advance tax estimates.</li>
</ol>

<h2>How are foreign payments taxed: GST and income tax</h2>
<h3>GST on export of services</h3>
<p>Under the IGST Act, a supply is an export of services when the supplier is in India, the recipient is outside India, the place of supply is outside India, payment is received in convertible foreign exchange (or rupees where RBI permits), and the two parties are not merely establishments of the same person. Exports are zero-rated. If you are registered, you either export under LUT without charging IGST, or pay IGST and claim a refund. Most freelancers use the LUT route. Official guidance is on the <a href="https://www.gst.gov.in/" target="_blank" rel="noopener">GST portal</a>.</p>
<h3>Income tax</h3>
<p>Resident freelancers pay income tax on worldwide income. Many professionals use presumptive taxation, where a set share of receipts is treated as income if conditions are met; our <a href="/blog/section-44ada-freelancers">Section 44ADA guide for freelancers</a> explains the limits, and the <a href="/blog/itr-for-freelancers-india">ITR for freelancers guide</a> covers which form to file. The new Income-tax Act, 2025 applies from 1 April 2026, so section numbers are changing; see our explainer on the <a href="/blog/income-tax-act-2025-india">Income-tax Act 2025</a>. If a foreign client asks for a W-8BEN, read our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide for freelancers</a> before signing it.</p>

<h2>Worked example: what actually lands in your account</h2>
<p>Priya, a web developer in Pune, invoices a US client $2,000 for a website build. The following figures are illustrative to show how costs stack up; actual fees and rates vary by provider and day.</p>
<table><thead><tr><th>Item</th><th>SWIFT wire</th><th>Platform with local USD account</th></tr></thead><tbody>
<tr><td>Invoice amount</td><td>$2,000.00</td><td>$2,000.00</td></tr>
<tr><td>Intermediary bank deduction</td><td>-$15.00</td><td>$0.00</td></tr>
<tr><td>Amount converted</td><td>$1,985.00</td><td>$2,000.00</td></tr>
<tr><td>Exchange rate applied (mid-market assumed at Rs 88.00)</td><td>Rs 87.20 (about 0.9% margin)</td><td>Rs 88.00</td></tr>
<tr><td>Rupee value</td><td>Rs 1,73,092</td><td>Rs 1,76,000</td></tr>
<tr><td>Bank or platform fee (illustrative)</td><td>Rs 500 + 18% GST = Rs 590</td><td>0.5% = Rs 880 + 18% GST = Rs 1,038</td></tr>
<tr><td><strong>Net credited</strong></td><td><strong>Rs 1,72,502</strong></td><td><strong>Rs 1,74,962</strong></td></tr>
</tbody></table>
<p>The difference is about Rs 2,460 on one invoice, almost entirely from the exchange rate margin and the intermediary deduction. Over a year of monthly invoices that gap is real money. Always compare the <em>net rupee amount</em>, not the headline fee. Our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> explains each layer in more detail.</p>

<h2>Common mistakes when receiving foreign payments</h2>
<ul>
<li><strong>Wrong or missing purpose code.</strong> A payment for software work coded as a family remittance creates problems for GST zero-rating and invites questions.</li>
<li><strong>Name mismatch.</strong> If the client types a shortened name, the bank may hold or return the wire. Send your name exactly as it appears on the account.</li>
<li><strong>No LUT on file.</strong> Registered exporters who forget the LUT may technically owe IGST on export invoices.</li>
<li><strong>Ignoring short receipts.</strong> If $15 goes missing, record it as a bank charge so your receivables match.</li>
<li><strong>Not keeping e-FIRAs.</strong> Downloading them months later from a platform you have stopped using can be hard.</li>
<li><strong>Using personal transfer services for business.</strong> Personal remittance apps may code income as gifts or family support. Use business accounts for business income.</li>
<li><strong>Vague invoices.</strong> "Services" is not enough. Describe the work so the purpose code and place of supply are clear; see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</li>
</ul>

<h2>Checklist before your first foreign invoice</h2>
<ul>
<li>Bank account that accepts inward remittances, with SWIFT code confirmed by your branch</li>
<li>At least one platform account verified (KYC complete) as a backup option</li>
<li>Purpose code agreed for your type of work</li>
<li>GST registration status checked; LUT filed if registered</li>
<li>Export invoice template with currency, client address abroad and LUT wording</li>
<li>Folder or system to store invoices with matching e-FIRAs</li>
<li>Advance tax reminders set; see <a href="/blog/advance-tax-due-dates-india">advance tax due dates</a></li>
</ul>

<p>Receiving money from abroad in India is routine once you set up the route, the purpose code and your records. Create clean export invoices in USD, EUR or GBP with our <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up and downloads a PDF built in your browser, so you can send it to your client in minutes.</p>
`,
  },
  {
    slug: "wire-transfer-fees",
    title: "Wire Transfer Fees 2026: What US Banks Charge",
    description:
      "Wire transfer fees in 2026: typical domestic and international costs at US banks, hidden FX and intermediary fees, who pays what, and how to cut costs.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "ach-vs-wire-transfer",
      "how-long-does-a-wire-transfer-take",
      "cross-border-payment-fees",
    ],
    faqs: [
      {
        q: "Who pays the wire transfer fee, sender or receiver?",
        a: "Usually both. The sender pays an outgoing fee to their bank, and the receiver's bank may charge an incoming fee. For international wires, intermediary banks can also deduct a fee from the amount in transit. On SWIFT payments the sender chooses OUR (sender pays all), SHA (shared) or BEN (receiver pays all). Your invoice terms can state that all transfer fees are the payer's responsibility.",
      },
      {
        q: "Are incoming wire transfers free?",
        a: "Sometimes. Many large US banks charge roughly $15 for an incoming wire, while some online banks, credit unions and premium accounts waive incoming fees. International incoming wires may cost a little more than domestic ones. Check your account's fee schedule, since the same bank can charge different amounts depending on the account tier and your balance.",
      },
      {
        q: "Why is a wire transfer more expensive than ACH?",
        a: "Wires move money individually, in real time or close to it, and settle with finality through Fedwire or correspondent banking networks. Banks also do more manual review for fraud because wires are hard to reverse. ACH payments are batched and settle more slowly, which makes them much cheaper to process. That is why most recurring business payments use ACH and wires are kept for large or urgent payments.",
      },
      {
        q: "Can I get a wire transfer fee refunded?",
        a: "Banks rarely refund wire fees for a completed transfer, but they sometimes waive fees for good customers, premium accounts or business accounts with enough balance. If a wire fails because of a bank error, ask for the fee back. If the beneficiary details were wrong, expect to pay for the original wire and possibly a return or recall fee as well.",
      },
      {
        q: "Is it cheaper to send an international wire in foreign currency?",
        a: "The flat fee is often lower when you send in the recipient's currency, and some banks charge little or nothing. But the bank then applies its own exchange rate, which can include a margin of a few percent. Compare the total cost by checking how much the recipient will receive against the mid-market rate. A specialist transfer service can be cheaper for mid-sized amounts.",
      },
      {
        q: "Are wire transfer fees tax deductible for a business?",
        a: "Yes. For a business, bank fees including wire transfer charges are ordinary and necessary expenses and are normally deductible, usually recorded under bank charges. If a client short-pays an invoice because of a wire fee, you can either record the difference as a bank charge or bill it back if your contract makes the client responsible for transfer costs.",
      },
      {
        q: "What is a wire recall fee?",
        a: "A recall or amendment fee is what banks charge to try to cancel, return or correct a wire after it has been sent. It is separate from the original fee and success is not guaranteed, because domestic wires settle almost immediately. Double-check the account number, routing number and beneficiary name before you send, and confirm new payment instructions by phone to avoid fraud.",
      },
      {
        q: "How can a small business avoid wire fees entirely?",
        a: "Ask clients to pay by ACH for routine invoices, use a bank or account tier that waives incoming wires, or receive international payments through local collection accounts from a transfer service. Instant payment networks such as RTP and FedNow are another option where both banks support them. Keep wires for large, urgent or one-off payments where speed and finality justify the cost.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Wire transfer fees at large US banks typically run about $25 to $35 for an outgoing domestic wire sent online (more in a branch), around $15 or less for an incoming wire, and roughly $0 to $50 for an outgoing international wire depending on currency, plus exchange rate margins and intermediary bank deductions.</p>

<p>Wires are the standard way to move large sums quickly and with finality, which is why closings, equipment purchases and overseas clients use them. But wire transfer fees add up, and on international payments the visible fee is often the smallest part of the cost. This guide explains every fee involved, who pays it, a worked example of a short-paid invoice, and practical ways to cut costs. Figures are typical ranges as of October 2026; always confirm your own bank's current fee schedule.</p>

<h2>What is a wire transfer fee?</h2>
<p>A wire transfer fee is a charge a bank applies for sending or receiving an electronic funds transfer through a wire network. Domestic US wires run on the Federal Reserve's Fedwire Funds Service (or the private CHIPS network). International wires use the SWIFT messaging network and correspondent banks. Because each wire is processed individually and settles with finality, banks price them far higher than ACH transfers. Our <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer comparison</a> covers that trade-off in depth.</p>

<h2>How much do banks charge for wire transfers in 2026?</h2>
<p>Most large banks publish fees in a deposit account agreement or "schedule of fees". The ranges below summarize what national banks commonly charge for consumer and small business checking. Treat them as typical, not exact: your account type, balance and channel (online vs branch) change the price.</p>
<table><thead><tr><th>Wire type</th><th>Typical fee at large US banks</th><th>Notes</th></tr></thead><tbody>
<tr><td>Domestic outgoing (online)</td><td>$25 to $35</td><td>Branch or phone requests often cost $5 to $15 more</td></tr>
<tr><td>Domestic incoming</td><td>$0 to $16</td><td>Often waived on premium or business tiers</td></tr>
<tr><td>International outgoing, sent in USD</td><td>$35 to $50</td><td>Recipient bank may convert at its own rate</td></tr>
<tr><td>International outgoing, sent in foreign currency</td><td>$0 to $15</td><td>Lower fee, but the bank's exchange rate includes a margin</td></tr>
<tr><td>International incoming</td><td>$0 to $16</td><td>Intermediary banks may deduct before it arrives</td></tr>
<tr><td>Recall, amendment or trace</td><td>Varies, often $15 to $50+</td><td>Charged even if the recall fails</td></tr>
</tbody></table>
<p>Online banks and credit unions are frequently cheaper, and many business accounts bundle a number of free wires each month. Before you choose a bank, check the fee schedule for Chase, Bank of America, Wells Fargo, Citi, U.S. Bank or your local bank on their official websites; fees can change at any time and published comparison tables go out of date quickly.</p>

<h2>What hidden costs come with international wire transfers?</h2>
<p>For cross-border payments, three costs often matter more than the flat fee.</p>
<h3>1. Exchange rate margin</h3>
<p>When your bank converts dollars to euros or rupees, it rarely uses the mid-market rate you see on financial sites. A margin of 1% to 4% is common at traditional banks. On a $10,000 payment, a 3% margin costs $300, ten times a typical wire fee.</p>
<h3>2. Intermediary (correspondent) bank fees</h3>
<p>If the sending and receiving banks have no direct relationship, the payment passes through one or more correspondent banks. Each may deduct a fee, often $10 to $30, from the amount in transit. The recipient simply receives less, which shows up as a short payment on your invoice.</p>
<h3>3. Charge codes: OUR, SHA and BEN</h3>
<table><thead><tr><th>Code</th><th>Meaning</th><th>Effect on the recipient</th></tr></thead><tbody>
<tr><td>OUR</td><td>Sender pays all fees</td><td>Usually receives the full amount (correspondent fees can still slip through)</td></tr>
<tr><td>SHA</td><td>Shared: each side pays its own bank</td><td>Receives the amount minus intermediary and receiving fees</td></tr>
<tr><td>BEN</td><td>Beneficiary pays all</td><td>Receives the amount minus all fees, including the sender's</td></tr>
</tbody></table>
<p>For consumer international transfers, the CFPB's remittance transfer rule requires providers to disclose fees and the exchange rate up front; you can read the basics on the <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener">Consumer Financial Protection Bureau</a> website. Business-to-business wires do not carry the same protections, so ask for a quote showing the exact amount the recipient will get. For a broader comparison of options, see our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a>.</p>

<h2>Who pays wire transfer fees on an invoice?</h2>
<p>By default, the sender pays the outgoing fee and the recipient pays the incoming fee. If you are the business being paid, you can shift costs to the client in your payment terms. Common wording:</p>
<ul>
<li>"All bank and transfer fees are the responsibility of the payer. Please select OUR for international wires."</li>
<li>"Payments received net of bank charges will be treated as partial payment; the balance will be added to the next invoice."</li>
</ul>
<p>Put your full wire instructions on the invoice so the client cannot get them wrong: account name, bank name and address, routing number for domestic wires, SWIFT/BIC for international, and a payment reference. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows a layout, and the <a href="/blog/routing-number-vs-account-number">routing number vs account number guide</a> explains which number goes where. Our <a href="/invoice-generator">free invoice generator</a> has a payment instructions field so these details print on every PDF.</p>

<h2>How do you send a wire transfer? What the bank needs</h2>
<p>Whether you pay a supplier or tell a client how to pay you, the same details are required. Missing or wrong fields are the main reason wires are delayed, returned or charged amendment fees.</p>
<table><thead><tr><th>Detail</th><th>Domestic wire</th><th>International wire</th></tr></thead><tbody>
<tr><td>Beneficiary name and address</td><td>Required</td><td>Required, exactly as on the account</td></tr>
<tr><td>Bank routing number (ABA)</td><td>Required (use the wire routing number, which can differ from the ACH one)</td><td>Not used</td></tr>
<tr><td>SWIFT/BIC code</td><td>Not used</td><td>Required</td></tr>
<tr><td>Account number or IBAN</td><td>Account number</td><td>IBAN in Europe, the UK and many other countries; account number elsewhere</td></tr>
<tr><td>Intermediary bank</td><td>Rarely</td><td>Sometimes required for certain currencies or countries</td></tr>
<tr><td>Purpose or reference</td><td>Invoice number</td><td>Invoice number, and a purpose code for countries such as India and the UAE</td></tr>
</tbody></table>
<p>Our guide to <a href="/blog/swift-code-vs-iban">SWIFT codes vs IBANs</a> explains which identifier each country uses. Most banks let you send wires online after a one-time setup with extra security, such as a token or a callback for new recipients. Business accounts often support dual approval, where one person enters the wire and another releases it: a simple control that stops many fraud attempts.</p>

<h2>Domestic vs international wire transfer fees: why they differ</h2>
<p>A domestic wire moves through one system, Fedwire or CHIPS, between two US banks that settle with each other directly through the Federal Reserve or the clearing house. The fee mostly covers the bank's processing, compliance checks and the finality it guarantees. An international wire passes through a chain of banks. Each bank in the chain screens the payment against sanctions lists, may hold it for questions and can deduct its own fee. Currency conversion adds another layer of cost. That is why an international wire with a modest flat fee can still cost several percent of the amount once the exchange rate and deductions are counted, while a domestic wire costs only the stated fee.</p>

<h2>Worked example: a short-paid international invoice</h2>
<p>A design studio in Austin invoices a client in Germany $8,500. The client sends a USD wire with the SHA option. These figures are illustrative.</p>
<table><thead><tr><th>Step</th><th>Amount</th></tr></thead><tbody>
<tr><td>Invoice total</td><td>$8,500.00</td></tr>
<tr><td>Client's bank fee (paid separately by client under SHA)</td><td>$0.00 deducted</td></tr>
<tr><td>Intermediary bank deduction</td><td>-$20.00</td></tr>
<tr><td>Studio's incoming wire fee</td><td>-$15.00</td></tr>
<tr><td><strong>Net credited</strong></td><td><strong>$8,465.00</strong></td></tr>
</tbody></table>
<p>The studio's books show $8,500 receivable and $8,465 received. If the contract says the client pays all fees, the studio bills the $35 balance on the next invoice. If not, it records $35 as bank charges and closes the invoice. Our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a> walks through both entries. On a contract worth $8,500 a month, $35 per payment is $420 a year: worth putting into the terms.</p>

<h2>How to reduce wire transfer fees: 8 practical steps</h2>
<ol>
<li><strong>Use ACH for routine payments.</strong> Standard ACH is often free or cheap; see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> and <a href="/blog/how-long-does-ach-take">how long ACH takes</a>.</li>
<li><strong>Send online, not in a branch.</strong> Branch-initiated wires usually cost more.</li>
<li><strong>Pick the right account tier.</strong> Business and premium accounts often waive incoming wires or include free outgoing wires.</li>
<li><strong>Compare currency options.</strong> Check whether sending in foreign currency or USD gives the recipient more money after the exchange rate.</li>
<li><strong>Use a specialist provider for international.</strong> Services with local collection accounts can avoid SWIFT and intermediary fees; compare <a href="/blog/wise-business-fees">Wise Business fees</a>.</li>
<li><strong>Batch payments.</strong> One wire for three invoices costs a third of three wires.</li>
<li><strong>Consider instant payments.</strong> Where both banks support RTP or FedNow, fees can be lower than wires; see <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP</a>.</li>
<li><strong>Put fees in your contract.</strong> State who pays and which SWIFT charge code to use.</li>
</ol>

<h2>Common wire transfer mistakes that cost money</h2>
<ul>
<li><strong>Acting on emailed bank changes.</strong> Business email compromise scams target wires because they are hard to reverse. Verify new instructions by phone using a number you already have; read our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
<li><strong>Wrong SWIFT or routing number.</strong> A returned wire costs fees on both ends and can take weeks.</li>
<li><strong>Missing intermediary details.</strong> Some countries and banks require a specific correspondent; leaving it out delays payment.</li>
<li><strong>Missing the cutoff time.</strong> Wires sent after the bank's cutoff go the next business day; see <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a>.</li>
<li><strong>Not recording fees.</strong> Unbooked deductions leave invoices partly open and distort your receivables.</li>
</ul>

<h2>Wire transfer fees vs other payment methods</h2>
<table><thead><tr><th>Method</th><th>Typical cost to the business</th><th>Speed</th><th>Reversible?</th></tr></thead><tbody>
<tr><td>Domestic wire</td><td>$0 to $16 incoming; $25 to $35 outgoing</td><td>Same day</td><td>Rarely</td></tr>
<tr><td>ACH</td><td>Often free to low flat fees</td><td>Same day to 2 business days</td><td>Returns possible within set windows</td></tr>
<tr><td>Card payment</td><td>Roughly 2.5% to 3.5% plus fixed fee</td><td>1 to 2 days to payout</td><td>Chargebacks possible</td></tr>
<tr><td>Instant payment (RTP/FedNow)</td><td>Varies by bank</td><td>Seconds</td><td>No</td></tr>
</tbody></table>
<p>For card costs in detail, see our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<p>Wire transfer fees are predictable once you know the layers: outgoing, incoming, intermediary and exchange rate. Put clear wire instructions and a fee clause on every invoice with our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up and downloads a PDF built right in your browser.</p>
`,
  },
  {
    slug: "ach-debit-vs-ach-credit",
    title: "ACH Debit vs ACH Credit: Differences, Risks, Uses",
    description:
      "ACH debit vs ACH credit explained: who starts the payment, authorization rules, return windows, fraud risks and which to use for invoices, payroll and bills.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-accept-ach-payments", "ach-return-codes", "nacha-2026-rules"],
    faqs: [
      {
        q: "Is direct deposit an ACH credit or debit?",
        a: "Direct deposit is an ACH credit. The employer, through its bank or payroll provider, pushes money into each employee's account. Nothing is pulled from the employee. The same applies to tax refunds, government benefits and supplier payments sent by a customer's accounts payable team. If money arrives in your account without you starting it, it was almost always an ACH credit.",
      },
      {
        q: "Is autopay an ACH debit?",
        a: "Usually, yes. When you sign up for a utility, loan or subscription to take payments from your bank account on a schedule, the company originates ACH debits against your account using the authorization you gave. Autopay that you schedule from inside your own bank's bill pay is different: your bank sends a payment, often an ACH credit or a check, to the company.",
      },
      {
        q: "Which is safer for a business, ACH debit or ACH credit?",
        a: "For the business receiving money, ACH credits are safer because the payer pushes funds and returns are rare. ACH debits can be returned for insufficient funds, closed accounts or unauthorized claims. For the business paying, credits are also safer because no outside party can pull from your account. Debit blocks and filters protect accounts that should never be debited by unknown companies.",
      },
      {
        q: "How long does a customer have to dispute an ACH debit?",
        a: "Under Nacha rules, a consumer can generally have an unauthorized debit returned for up to 60 days after the settlement date of the statement showing it. Business accounts have much shorter windows, typically two banking days for most return reasons. That is one reason consumer ACH debits carry more risk for merchants than business-to-business payments.",
      },
      {
        q: "Do I need written authorization to debit a customer's account?",
        a: "Yes, you need authorization, and its form depends on the type of entry. Consumer debits require an authorization that is clear, readable and similarly authenticated, such as a signed form or an online authorization with proper confirmation. Phone authorizations need a recording or written confirmation. Business accounts typically authorize through an agreement. Keep authorizations for two years after they end or are revoked.",
      },
      {
        q: "What is an ACH debit block?",
        a: "An ACH debit block is a bank service that stops ACH debits from posting to your account unless the originator is on an approved list. An ACH filter is similar but lets you set rules, such as maximum amounts. Businesses use them to stop fraud and unexpected pulls. Remember to whitelist legitimate debits such as tax payments, loan payments and payroll funding.",
      },
      {
        q: "Can an ACH credit be reversed?",
        a: "The originator can issue a reversal only in narrow cases, such as a duplicate payment, wrong amount or wrong account, and generally within five banking days of settlement. Reversals for any other reason are not allowed. The receiver's bank may also return a credit if the account is closed or invalid. In practice, an ACH credit that settles correctly is close to final.",
      },
      {
        q: "Which costs less, ACH debit or ACH credit?",
        a: "Per-transaction fees are often similar, but the total cost differs. With credits, the payer bears the cost of sending and the payee usually receives for free. With debits, the business pulling money pays origination fees and also absorbs return fees when payments bounce. A processor that pulls ACH debits for invoices typically charges a small percentage with a cap, or a flat fee.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In an ACH credit, the payer pushes money from their account to yours (direct deposit, a client paying your invoice from its bank). In an ACH debit, the payee pulls money from the payer's account with authorization (autopay, subscriptions). Credits are lower risk for the recipient; debits are more convenient but can be returned.</p>

<p>Both ride on the same Automated Clearing House network run under Nacha rules, settle in the same timeframes and cost far less than wires or cards. The difference is who starts the payment, and that one fact decides the authorization you need, how long a payment can be returned and who carries the fraud risk. This comparison of ACH debit vs ACH credit shows how each works, when to use each for invoices, payroll and recurring billing, and the mistakes that cause returns.</p>

<h2>What is an ACH credit?</h2>
<p>An ACH credit is a push payment. The account holder sending the money tells their bank (the originating depository financial institution, or ODFI) to deliver funds to another account. The bank sends the entry through an ACH operator (the Federal Reserve or The Clearing House) to the receiving bank (the RDFI), which credits the recipient.</p>
<p>Common examples:</p>
<ul>
<li>Payroll direct deposit (see <a href="/blog/how-to-set-up-direct-deposit">how to set up direct deposit</a>)</li>
<li>A client's accounts payable team paying your invoice</li>
<li>Paying contractors and suppliers from your business bank</li>
<li>Tax refunds and government benefits</li>
</ul>

<h2>What is an ACH debit?</h2>
<p>An ACH debit is a pull payment. The business receiving the money (the originator) uses the payer's routing and account numbers, plus their authorization, to request funds from the payer's account. The payer's bank sends the money unless the account lacks funds, is closed or the debit is blocked or disputed.</p>
<p>Common examples:</p>
<ul>
<li>Utility, insurance and loan autopay</li>
<li>Subscriptions and memberships paid by bank account</li>
<li>Invoice payments where the customer enters bank details on a payment page</li>
<li>IRS EFTPS tax payments and payroll provider funding pulls</li>
</ul>

<h2>ACH debit vs ACH credit: key differences</h2>
<table><thead><tr><th>Feature</th><th>ACH credit (push)</th><th>ACH debit (pull)</th></tr></thead><tbody>
<tr><td>Who starts it</td><td>The payer</td><td>The payee (with authorization)</td></tr>
<tr><td>Authorization needed</td><td>Payer authorizes own bank; recipient often authorizes for direct deposit</td><td>Payer must authorize the payee; rules vary by entry type</td></tr>
<tr><td>Typical uses</td><td>Payroll, supplier payments, B2B invoice payments</td><td>Recurring bills, subscriptions, customer-initiated invoice payments</td></tr>
<tr><td>Risk of insufficient funds return</td><td>Very low (payer controls timing)</td><td>Real (R01 returns)</td></tr>
<tr><td>Unauthorized return window</td><td>Rare</td><td>Up to 60 days for consumer accounts; usually 2 banking days for business accounts</td></tr>
<tr><td>Control for the payee</td><td>Low: you wait for the payer</td><td>High: you choose the date</td></tr>
<tr><td>Fraud exposure</td><td>Payer side: credit push fraud and impersonation</td><td>Account holder side: unauthorized pulls; merchant side: returns</td></tr>
<tr><td>Common SEC codes</td><td>PPD (payroll), CCD/CTX (business)</td><td>PPD, WEB, TEL (consumer), CCD (business)</td></tr>
</tbody></table>
<p>Standard Entry Class (SEC) codes describe how the payment was authorized. WEB entries come from online authorizations, TEL from phone, PPD from written consumer authorizations and CCD from corporate accounts. Nacha publishes the operating rules at <a href="https://www.nacha.org/" target="_blank" rel="noopener">nacha.org</a>. For the latest changes, including the 2026 fraud monitoring requirements, see our guide to <a href="/blog/nacha-2026-rules">Nacha 2026 rules</a>.</p>

<h2>How long do ACH credits and debits take?</h2>
<p>Settlement timing is the same for both. Originators choose same day ACH or next-day settlement, and standard entries can settle within one to two business days. Same Day ACH has a per-payment limit of $1 million. Our article on <a href="/blog/how-long-does-ach-take">how long ACH takes</a> explains processing windows and cutoffs. The practical difference: with a debit, you can schedule collection on the due date; with a credit, you depend on when the customer chooses to pay.</p>

<h2>Which should you use for invoices, payroll and recurring billing?</h2>
<h3>Getting paid on invoices</h3>
<p>Most B2B clients pay invoices by ACH credit through their own bank or AP system. Put your bank details on the invoice and ask for a remittance reference. If you want more control, offer a payment link where clients authorize an ACH debit. Our guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> compares both setups, and our <a href="/invoice-generator">free invoice generator</a> lets you add bank details and a payment link to every invoice.</p>
<h3>Payroll</h3>
<p>Always ACH credit. You push wages to employees. Your payroll provider may pull the total from your account by ACH debit first, then push credits to employees.</p>
<h3>Recurring billing</h3>
<p>ACH debit is the standard for subscriptions, retainers and installment plans, because you collect on schedule without waiting for the customer. Read <a href="/blog/recurring-payments-small-business">recurring payments for small business</a> for setup options and authorization wording.</p>

<h2>Worked example: the same $1,200 retainer, two ways</h2>
<p>A bookkeeping firm bills 20 clients a $1,200 monthly retainer. Figures below are illustrative.</p>
<table><thead><tr><th>Item</th><th>Clients pay by ACH credit</th><th>Firm collects by ACH debit</th></tr></thead><tbody>
<tr><td>Monthly billed</td><td>$24,000</td><td>$24,000</td></tr>
<tr><td>Paid on the due date</td><td>14 clients (70%)</td><td>19 clients (95%, one return)</td></tr>
<tr><td>Cash on day 1</td><td>$16,800</td><td>$22,800</td></tr>
<tr><td>Fees to the firm</td><td>$0 to receive</td><td>20 x $1.00 origination + one $5.00 return fee = $25.00</td></tr>
<tr><td>Follow-up work</td><td>6 reminder emails</td><td>1 return to resolve</td></tr>
</tbody></table>
<p>The debit route costs $25 a month but brings $6,000 in a week or more earlier and removes most chasing. That is why service businesses with fixed monthly fees often move to authorized ACH debits.</p>

<h2>How to set up ACH debits correctly: step by step</h2>
<ol>
<li><strong>Choose a provider.</strong> Use your bank's ACH origination service or a payment processor.</li>
<li><strong>Write a clear authorization.</strong> Include amount (or how it is calculated), frequency, start date, how to revoke, and the customer's account details.</li>
<li><strong>Collect it properly.</strong> Signed form, online authorization with authentication, or recorded phone authorization depending on SEC code.</li>
<li><strong>Verify the account.</strong> Use micro-deposits, instant account verification or a prenote, and for WEB debits use a commercially reasonable account validation.</li>
<li><strong>Notify before variable debits.</strong> If the amount changes, send advance notice as the rules require.</li>
<li><strong>Monitor returns.</strong> Learn the common <a href="/blog/ach-return-codes">ACH return codes</a> and act on R01, R02, R03 and R10 promptly.</li>
<li><strong>Keep records.</strong> Store authorizations for at least two years after termination.</li>
</ol>

<h2>What are the risks of ACH debits vs ACH credits?</h2>
<h3>Risks for the business receiving money</h3>
<p>With ACH credits, the main risk is simply waiting: the customer decides when to pay, and some pay late. Fraud risk is low because you do not touch the payer's account. With ACH debits, you carry return risk. A debit can come back for insufficient funds (R01), a closed account (R02), an invalid account (R03) or because the customer says it was not authorized (R10). Each return usually carries a fee, and Nacha monitors originators whose unauthorized return rate exceeds 0.5% or whose overall return rate exceeds 15%. High return rates can lead to fines or losing access to ACH debit processing.</p>
<h3>Risks for the business paying money</h3>
<p>With ACH credits you control the payment, but you are exposed to impersonation fraud: a scammer posing as a supplier sends new bank details, and you push money to the wrong account. Because credits are push payments, recovery is difficult. With ACH debits, the risk is that someone uses your routing and account numbers, which are printed on every check you write, to pull money without authorization. Banks offer debit blocks and filters, and you have a short window (generally two banking days for business accounts) to return unauthorized debits. Review your account daily.</p>

<h2>How much do ACH debits and credits cost?</h2>
<p>Costs depend on whether you use your bank or a processor. Banks offering ACH origination often charge a monthly service fee plus a per-entry fee, with extra for same day ACH. Payment processors that let customers pay invoices by bank account usually charge a percentage with a cap, or a flat fee per payment, which is still far below card processing. Receiving an ACH credit is normally free. If you only need to get paid occasionally, asking clients to send ACH credits costs you nothing; if you bill dozens of recurring clients, the fees for originating debits are usually worth the faster, predictable cash. For a full comparison with wires, see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h2>Common mistakes with ACH debits and credits</h2>
<ul>
<li><strong>Debiting without proper authorization.</strong> Leads to R10 returns, fees and possible processor termination.</li>
<li><strong>Using the wrong SEC code.</strong> A consumer debit sent as CCD can be returned and breaks the rules.</li>
<li><strong>No debit block on operating accounts.</strong> Fraudsters with your account number can try debits; a block or filter stops them. A related protection for checks is <a href="/blog/positive-pay-check-fraud">positive pay</a>.</li>
<li><strong>Accepting changed bank details by email.</strong> Credit push fraud starts with fake payment instruction changes.</li>
<li><strong>Treating a debit as final immediately.</strong> Do not ship high-value goods on a fresh consumer debit; returns can arrive later.</li>
<li><strong>Mixing up numbers.</strong> See <a href="/blog/routing-number-vs-account-number">routing number vs account number</a>; a <a href="/blog/what-is-a-voided-check">voided check</a> is still a common way to confirm both.</li>
</ul>

<h2>ACH vs direct debit outside the US</h2>
<p>Other countries have similar pull systems with their own mandates. In the UK it is Bacs Direct Debit (<a href="/blog/uk-direct-debit">UK Direct Debit guide</a>); in the eurozone it is <a href="/blog/sepa-direct-debit">SEPA Direct Debit</a>. The concepts match: credits are pushed by the payer, debits are pulled with a mandate.</p>

<p>Choosing between ACH debit vs ACH credit comes down to control versus risk: debits put the timing in your hands, credits put the risk in the payer's. Whichever you use, a clear invoice with bank details and terms speeds payment. Make one with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and it downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "how-to-set-up-direct-deposit",
    title: "How to Set Up Direct Deposit for Employees (2026)",
    description:
      "How to set up direct deposit for employees: options, forms to collect, a step-by-step setup, payroll timing, Nacha 2026 PAYROLL rules and mistakes to avoid.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-do-payroll-yourself", "employer-payroll-taxes", "hiring-your-first-employee"],
    faqs: [
      {
        q: "Can an employer require direct deposit?",
        a: "Federal Regulation E says an employer cannot require employees to receive wages by electronic transfer at a particular bank. Employers can offer direct deposit as an option, and state laws vary on whether it can be mandatory, often requiring consent or an alternative such as a paper check or pay card. Check your state labor department's rules before making direct deposit the only option.",
      },
      {
        q: "How much does direct deposit cost a small business?",
        a: "With a payroll service, direct deposit is usually included in the per-employee monthly price. If you originate payroll ACH yourself through your bank, expect a monthly ACH service fee and a small per-entry charge, though some business accounts include ACH. Same day ACH costs more than next-day settlement. Ask your bank or provider for a written fee schedule before you start.",
      },
      {
        q: "How long does it take to set up direct deposit?",
        a: "Plan for one to two weeks. Payroll providers need to verify your business and bank account, which can take a few business days, and some run a prenote or micro-deposit test on employee accounts. Banks offering ACH origination may also complete a credit review before approving your limits. Pay employees by check until the first live run is confirmed.",
      },
      {
        q: "What information do I need from an employee for direct deposit?",
        a: "You need the employee's name, bank name, routing number, account number, account type (checking or savings) and the amount or percentage to deposit if they split pay across accounts. Most employers also ask for a voided check or a bank letter to confirm the numbers, and a signed authorization that lets you credit, and correct errors in, the account.",
      },
      {
        q: "When do I need to send payroll for employees to be paid on Friday?",
        a: "It depends on your provider. Many payroll services use a two-day processing window, so you approve payroll by Wednesday for Friday pay. Next-day and same day options exist at extra cost or for qualifying businesses. If you originate ACH through your bank, send the file before the bank's cutoff with an effective date of payday, and fund the account in advance.",
      },
      {
        q: "What happens if a direct deposit goes to the wrong account?",
        a: "If the account number is invalid or closed, the bank returns the deposit, usually within a few business days, and you pay the employee another way. If it lands in a valid account that belongs to someone else, you may be able to send a reversal within five banking days, but recovery is not guaranteed. Verify details carefully and confirm changes by phone.",
      },
      {
        q: "Can employees split direct deposit between accounts?",
        a: "Yes, most payroll systems let employees divide pay between two or more accounts, for example a fixed amount to savings and the remainder to checking. The employee lists each account on the authorization form with the amount or percentage. Each split is a separate ACH credit, which can add per-entry fees if you originate payroll through your bank.",
      },
      {
        q: "Do contractors get paid by direct deposit too?",
        a: "Contractors can be paid by ACH credit, but it is not payroll. You pay their invoice from accounts payable, without withholding, and report payments on Form 1099-NEC if they meet the threshold. Collect a Form W-9 first. Keep contractors out of your payroll system unless they are misclassified employees, which is a separate problem to fix.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To set up direct deposit for employees, choose a payroll provider or your bank's ACH origination service, verify your business bank account, collect each employee's signed direct deposit authorization with routing and account numbers, test the accounts, and submit payroll before your provider's cutoff (often two business days before payday).</p>

<p>Direct deposit is how most US employees expect to be paid. It is faster than checks, cheaper over time and leaves a clean audit trail. Setting it up is mostly paperwork plus one decision: use a payroll service, or send payroll ACH files from your own bank. This guide covers both options, the forms to collect, timing, the 2026 Nacha rule on payroll descriptions, a worked example and the common mistakes. It is general information, not legal advice.</p>

<h2>What is direct deposit?</h2>
<p>Direct deposit is an ACH credit from the employer's bank account into the employee's account. The employer, or a payroll provider acting for it, sends a file of payments through the ACH network with a set effective date. On that date the money lands in each employee's account, usually available at the start of the business day. Because it is a push payment, nothing is pulled from employees. For the mechanics, see our <a href="/blog/ach-debit-vs-ach-credit">ACH debit vs ACH credit</a> comparison.</p>

<h2>What are your options for setting up direct deposit?</h2>
<table><thead><tr><th>Option</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Full-service payroll provider</td><td>Provider calculates pay, withholds taxes, debits your account and sends deposits</td><td>Tax filings and deposits included; minimal ACH know-how</td><td>Monthly base fee plus per-employee fee</td></tr>
<tr><td>Accounting software payroll add-on</td><td>Payroll built into your bookkeeping app</td><td>Syncs with your books</td><td>Features vary by plan and state</td></tr>
<tr><td>Bank ACH origination</td><td>You upload or key a payroll batch in online banking</td><td>Low per-entry cost</td><td>You calculate pay and taxes yourself; bank approval and limits required</td></tr>
<tr><td>Pay cards</td><td>Wages loaded to a prepaid card</td><td>Works for unbanked employees</td><td>Fee rules and state limits apply</td></tr>
</tbody></table>
<p>If you are handling payroll in-house, read <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> first: direct deposit only moves the money; you still need the right withholding and tax deposits.</p>

<h2>What forms and documents do you need?</h2>
<h3>From your business</h3>
<ul>
<li><strong>Employer Identification Number (EIN).</strong> Needed for payroll and tax filings; see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Business bank account</strong> with routing and account numbers, and often a voided business check or bank letter.</li>
<li><strong>State payroll registrations</strong> for withholding and unemployment insurance where required.</li>
<li><strong>ACH origination agreement</strong> if you use your bank directly.</li>
</ul>
<h3>From each employee</h3>
<ul>
<li><strong>Direct deposit authorization form</strong>: name, bank, routing number, account number, account type, split instructions, signature and date.</li>
<li><strong>Voided check or bank letter</strong> confirming the numbers. Our guide to <a href="/blog/what-is-a-voided-check">voided checks</a> explains what to accept.</li>
<li><strong>Form W-4</strong> for federal withholding and any state withholding form.</li>
<li><strong>Form I-9</strong> for employment eligibility (kept in your files, not sent to the IRS).</li>
</ul>
<p>Forms W-4 and I-9 are available on <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener">irs.gov</a> and uscis.gov. A sample authorization usually says the employee authorizes the employer to deposit pay and to make corrections if a deposit is made in error.</p>

<h2>How to set up direct deposit for employees: step by step</h2>
<ol>
<li><strong>Pick your method.</strong> Payroll provider for most small businesses; bank ACH if payroll is simple and you are confident with tax calculations.</li>
<li><strong>Register and verify your business.</strong> Provide your EIN, legal name, address and owner information. Providers verify identity and may review your business.</li>
<li><strong>Connect and verify your funding account.</strong> Usually by micro-deposits or instant bank login. Your bank may set a payroll limit per file.</li>
<li><strong>Choose a pay schedule.</strong> Weekly, biweekly, semimonthly or monthly, subject to state pay frequency laws.</li>
<li><strong>Collect employee forms.</strong> Authorization, voided check or bank letter, W-4, state form, I-9.</li>
<li><strong>Enter and double-check account details.</strong> Have a second person verify routing and account numbers against the voided check.</li>
<li><strong>Test.</strong> Some providers send a zero-dollar prenote or small test credit. Allow time for it to clear.</li>
<li><strong>Run the first payroll early.</strong> Submit before the cutoff, confirm the funding debit and check that each employee was paid.</li>
<li><strong>Issue pay stubs.</strong> Many states require itemized wage statements.</li>
<li><strong>Set up a change process.</strong> Require a new signed form for any bank change and confirm by phone or in person.</li>
</ol>

<h2>When does direct deposit money arrive?</h2>
<p>Your cutoff depends on how the provider settles ACH:</p>
<table><thead><tr><th>Processing option</th><th>Typical submit deadline for Friday pay</th><th>Notes</th></tr></thead><tbody>
<tr><td>Standard (2-day)</td><td>Wednesday, before provider cutoff</td><td>Most common and least expensive</td></tr>
<tr><td>Next-day</td><td>Thursday, before cutoff</td><td>Often for established businesses or higher plans</td></tr>
<tr><td>Same day ACH</td><td>Friday morning, before the bank's same day window</td><td>Higher fees; per-payment limit of $1 million</td></tr>
</tbody></table>
<p>Holidays shift everything: ACH does not settle on weekends or Federal Reserve holidays, so plan payroll around them. See <a href="/blog/how-long-does-ach-take">how long ACH takes</a> for timing detail.</p>

<h2>What should a direct deposit authorization form include?</h2>
<p>Payroll providers supply their own form, but if you collect details yourself, use a one-page form with these fields. Keep the signed original in the employee's payroll file, separate from performance records.</p>
<table><thead><tr><th>Section</th><th>Fields</th></tr></thead><tbody>
<tr><td>Employee details</td><td>Full legal name, employee ID, phone, email</td></tr>
<tr><td>Account 1</td><td>Bank name, routing number, account number, checking or savings, amount or percentage</td></tr>
<tr><td>Account 2 (optional)</td><td>Same fields; state which account receives the remainder</td></tr>
<tr><td>Authorization wording</td><td>"I authorize [Employer] to deposit my pay to the account(s) above and, if necessary, to initiate adjustments for any deposits made in error. This authorization remains in effect until I give written notice of cancellation or change."</td></tr>
<tr><td>Attachments</td><td>Voided check or bank letter for each account</td></tr>
<tr><td>Signature and date</td><td>Employee signature; employer received-by initials and date</td></tr>
</tbody></table>
<p>Store the form securely: it contains account numbers that criminals could use. Limit access to the people who run payroll, and shred old forms once your retention period ends.</p>

<h2>Direct deposit vs paper checks vs pay cards</h2>
<p>Paper checks cost more than they look: check stock, printing, postage or hand delivery, bank reconciliation and the risk of lost or stolen checks. Check fraud remains common, which is one reason the federal government has moved its own payments away from paper; see our article on the <a href="/blog/us-paper-checks-phase-out">US paper check phase-out</a>. Pay cards help employees without bank accounts, but many states restrict fees on payroll cards and require that employees can access full wages for free at least once per pay period. Direct deposit is usually the cheapest and most reliable option once set up, and employees can see pay on the morning of payday rather than waiting for a check to clear.</p>

<h2>What changed in 2026: the PAYROLL description rule</h2>
<p>As part of Nacha's fraud-focused rule changes, from March 20, 2026 PPD credits for wages, salaries and similar compensation must use the Company Entry Description "PAYROLL". Payroll providers handle this automatically. If you originate payroll from your bank, make sure your batch template uses that description. Banks also monitor incoming credits for fraud more closely now. Our guide to <a href="/blog/nacha-2026-rules">Nacha 2026 rules</a> has the full timeline.</p>

<h2>Worked example: first payroll for three employees</h2>
<p>A cafe pays three hourly employees biweekly on Friday. Payday is the 13th. Net pay below is after withholding and is illustrative.</p>
<table><thead><tr><th>Employee</th><th>Gross pay</th><th>Net pay</th><th>Deposit split</th></tr></thead><tbody>
<tr><td>Employee A</td><td>$1,600.00</td><td>$1,318.40</td><td>100% checking</td></tr>
<tr><td>Employee B</td><td>$1,240.00</td><td>$1,045.20</td><td>$100 savings, rest checking</td></tr>
<tr><td>Employee C</td><td>$960.00</td><td>$836.60</td><td>100% checking</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$3,800.00</strong></td><td><strong>$3,200.20</strong></td><td>4 ACH credits</td></tr>
</tbody></table>
<p>On a two-day schedule, the owner approves payroll by Wednesday the 11th. The provider debits $3,200.20 for net pay plus the employee withholding and employer taxes it will deposit with the IRS and state, and sends four ACH credits dated the 13th. Employer FICA alone is 7.65% of $3,800, or $290.70. For the full employer tax picture, see <a href="/blog/employer-payroll-taxes">employer payroll taxes</a>.</p>

<h2>Common direct deposit mistakes</h2>
<ul>
<li><strong>Accepting bank changes by email.</strong> Payroll diversion fraud uses spoofed employee emails asking to change accounts. Always verify by phone or in person.</li>
<li><strong>Transposed digits.</strong> A wrong account number leads to a return and late pay. Compare against a voided check.</li>
<li><strong>Not funding on time.</strong> If your account cannot cover the debit, payroll fails and providers may suspend you.</li>
<li><strong>Ignoring state rules.</strong> Some states require consent to direct deposit or offer of another method.</li>
<li><strong>Mixing contractors into payroll.</strong> Contractors are paid against invoices they send you (they can make one with a <a href="/invoice-generator">free invoice generator</a>); see <a href="/blog/how-to-pay-contractors">how to pay contractors</a> and <a href="/blog/w2-vs-1099">W-2 vs 1099</a>.</li>
<li><strong>Forgetting the final paycheck rules.</strong> Some states require final pay quickly after termination, sometimes faster than your normal ACH cycle.</li>
</ul>

<h2>Direct deposit setup checklist</h2>
<ul>
<li>EIN and state payroll accounts in place</li>
<li>Payroll provider or bank ACH service approved</li>
<li>Funding account verified and limits confirmed</li>
<li>Pay schedule set and holiday calendar checked</li>
<li>Signed authorization, voided check, W-4, state form and I-9 for each employee</li>
<li>Second-person check of account details</li>
<li>Bank change verification procedure written down</li>
<li>First payroll submitted early with a backup check plan</li>
</ul>
<p>If you are still preparing to hire, our <a href="/blog/hiring-your-first-employee">hiring your first employee checklist</a> covers the steps before payroll.</p>

<p>Once you set up direct deposit for employees, payroll becomes a predictable routine. For the other side of your cash flow, billing clients, use our <a href="/invoice-generator">free invoice generator</a>: no sign-up, no account, and it downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "card-readers-for-small-business",
    title: "Card Readers for Small Business: 2026 Fees Compared",
    description:
      "Card readers for small business compared: Square, Stripe, SumUp, Clover and tap to pay on phones, with 2026 hardware prices, fees and a cost example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["tap-to-pay-on-iphone", "square-vs-clover", "credit-card-processing-fees"],
    faqs: [
      {
        q: "What is the cheapest card reader for a small business?",
        a: "The cheapest hardware is no hardware: tap to pay on a compatible iPhone or Android phone through Square, Stripe or similar apps costs nothing upfront. Among physical readers, Square's contactless and chip reader and Stripe's Reader M2 both list at $59 as of October 2026. The bigger long-term cost is the processing rate, so compare fees on your expected monthly volume.",
      },
      {
        q: "Do card readers have monthly fees?",
        a: "Many mobile readers have no monthly fee: you pay the hardware and a per-transaction rate. Monthly fees appear with point-of-sale software plans, cellular connectivity (Stripe lists $10 per reader per month for cellular), and traditional merchant accounts. Read the pricing page for software subscriptions, PCI fees and early termination clauses before signing anything with a long contract.",
      },
      {
        q: "Can I take card payments on my phone without a reader?",
        a: "Yes. Tap to Pay on iPhone and tap to pay on Android let compatible phones accept contactless cards and digital wallets through a provider's app. It works well for mobile service businesses. You cannot accept chip insertion or swipes this way, so customers with non-contactless cards need another option, such as a payment link or a physical reader.",
      },
      {
        q: "Are card reader fees tax deductible?",
        a: "Yes. For a business, both the hardware cost and processing fees are ordinary business expenses. Processing fees are usually recorded as merchant or bank fees. The reader itself is equipment, and small items are commonly expensed in the year purchased under the de minimis safe harbor if you have elected it. Keep the receipt and monthly processor statements.",
      },
      {
        q: "Should I pass card fees to customers?",
        a: "You can in many states, either as a surcharge on credit cards or as a cash discount, but rules differ by state and by card network, and debit cards cannot be surcharged. Surcharges must be disclosed and capped. Many small businesses simply build card costs into prices. See our guide to credit card surcharge rules before adding any fee to receipts or invoices.",
      },
      {
        q: "Which card reader works without internet?",
        a: "Most readers need a connection to authorize payments, either through the phone's data or Wi-Fi. Some systems offer an offline mode that stores payments and processes them later, but you carry the risk if a card declines once you reconnect. Readers with built-in cellular connectivity are an alternative for markets and job sites with weak Wi-Fi.",
      },
      {
        q: "Do I need a merchant account to use a card reader?",
        a: "Not with payment facilitators like Square, Stripe or SumUp, which onboard you under their own master account so you can start within a day or two. Traditional merchant accounts from banks or ISOs require an application and underwriting but can offer lower rates at higher volumes. Our merchant account vs payment processor guide explains when switching makes sense.",
      },
      {
        q: "Is a card reader PCI compliant?",
        a: "Modern readers from major providers encrypt card data at the point of entry, which greatly reduces your PCI DSS scope, but you are still responsible for basic compliance such as protecting devices, not writing down card numbers and completing any required self-assessment. Providers explain what they cover. Read our PCI compliance guide for small businesses for the remaining steps.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The best card readers for small business in 2026 are low-cost mobile readers from Square ($59, 2.6% + 15 cents per in-person payment) and Stripe (Reader M2 $59, 2.7% + 5 cents), plus free tap to pay on a phone. Choose by processing rate on your volume, the software you need and whether you need chip, tap or both.</p>

<p>A card reader lets you take in-person payments at a counter, a market stall or a customer's home. The hardware is cheap now; the ongoing fees and software matter more. This guide compares the main options, explains every fee involved, shows a cost example at different monthly volumes and lists mistakes to avoid. Prices and rates are as of October 2026 from each provider's US pricing page; check the current page before buying.</p>

<h2>What is a card reader and how does it work?</h2>
<p>A card reader is a device that accepts chip (EMV), contactless (NFC) and sometimes swiped card payments, plus Apple Pay and Google Pay. Mobile readers connect by Bluetooth to a phone or tablet running the provider's app. Countertop terminals and handheld smart terminals run their own software and connect by Wi-Fi, Ethernet or cellular. The reader encrypts card data and sends it to the processor, which authorizes the payment with the card network and issuing bank, then pays out to your bank account, usually within one or two business days.</p>

<h2>Card readers for small business compared (2026)</h2>
<table><thead><tr><th>Provider and device</th><th>Hardware price</th><th>In-person rate</th><th>Monthly fee</th><th>Good fit</th></tr></thead><tbody>
<tr><td>Square Reader (contactless and chip, 2nd gen)</td><td>$59</td><td>2.6% + 15 cents</td><td>$0 on the free plan</td><td>Most small retailers, services, markets</td></tr>
<tr><td>Square Tap to Pay (iPhone/Android)</td><td>$0</td><td>2.6% + 15 cents</td><td>$0</td><td>Mobile trades, occasional sales</td></tr>
<tr><td>Stripe Reader M2</td><td>$59</td><td>2.7% + 5 cents</td><td>$0 (cellular readers $10/month)</td><td>Businesses already on Stripe, custom apps</td></tr>
<tr><td>Stripe Reader S700 (smart reader)</td><td>$299</td><td>2.7% + 5 cents</td><td>$0 base</td><td>Counter checkout with a screen</td></tr>
<tr><td>Stripe Tap to Pay</td><td>$0</td><td>2.7% + 5 cents + 10 cents per authorization</td><td>$0</td><td>Field sales using the Stripe app or an integrated app</td></tr>
<tr><td>SumUp readers</td><td>Check sumup.com</td><td>Check current US pricing</td><td>Usually none for basic plan</td><td>Very low-volume sellers</td></tr>
<tr><td>Clover Go and Clover devices</td><td>Varies by seller and plan</td><td>Varies by plan</td><td>Software plan fees apply</td><td>Restaurants and retail wanting a full POS</td></tr>
</tbody></table>
<p>Sources: <a href="https://squareup.com/us/en/hardware/contactless-chip-reader" target="_blank" rel="noopener">Square hardware page</a> and <a href="https://stripe.com/terminal" target="_blank" rel="noopener">Stripe Terminal pricing</a>, October 2026. Stripe adds 1.5% for international cards. Clover pricing depends on whether you buy direct or through a bank or reseller, so get a written quote. Our <a href="/blog/square-vs-clover">Square vs Clover</a> and <a href="/blog/stripe-vs-square">Stripe vs Square</a> comparisons go deeper on software.</p>

<h2>How much do card readers cost to run?</h2>
<p>Total cost has four parts:</p>
<ul>
<li><strong>Hardware:</strong> one-time, from $0 (phone) to a few hundred dollars for a smart terminal.</li>
<li><strong>Processing rate:</strong> a percentage plus a fixed fee per transaction. This is the big one.</li>
<li><strong>Software:</strong> free basic POS apps; paid plans for inventory, staff, restaurants or appointments.</li>
<li><strong>Extras:</strong> cellular data, chargeback fees, instant payout fees, and on traditional accounts, PCI and statement fees.</li>
</ul>
<p>Flat-rate pricing (Square, Stripe, SumUp) is simple and predictable. Interchange-plus pricing from merchant accounts can be cheaper at higher volume but harder to read. See <a href="/blog/credit-card-processing-fees">credit card processing fees</a> and <a href="/blog/merchant-account-vs-payment-processor">merchant account vs payment processor</a> for how those structures compare.</p>

<h2>Worked example: what a card reader costs per month</h2>
<p>A mobile dog groomer takes 120 card payments a month at an average of $75, so $9,000 in card sales. Using the published US rates above:</p>
<table><thead><tr><th>Cost item</th><th>Square Reader</th><th>Stripe Reader M2</th><th>Stripe Tap to Pay</th></tr></thead><tbody>
<tr><td>Percentage fee</td><td>2.6% x $9,000 = $234.00</td><td>2.7% x $9,000 = $243.00</td><td>2.7% x $9,000 = $243.00</td></tr>
<tr><td>Fixed fees</td><td>120 x $0.15 = $18.00</td><td>120 x $0.05 = $6.00</td><td>120 x ($0.05 + $0.10) = $18.00</td></tr>
<tr><td><strong>Monthly processing</strong></td><td><strong>$252.00</strong></td><td><strong>$249.00</strong></td><td><strong>$261.00</strong></td></tr>
<tr><td>Effective rate</td><td>2.80%</td><td>2.77%</td><td>2.90%</td></tr>
<tr><td>Hardware (one-time)</td><td>$59</td><td>$59</td><td>$0</td></tr>
</tbody></table>
<p>At this volume the rates are within a few dollars of each other, so software, payouts and ease of use matter more than the rate. The fixed fee matters more with small tickets: at a $10 average sale, Square's 15 cents is 1.5% on top of 2.6%, while Stripe's 5 cents is 0.5%. A coffee cart and a contractor should not pick the same reader for the same reasons.</p>

<h2>How to choose a card reader: step by step</h2>
<ol>
<li><strong>Estimate volume and ticket size.</strong> Monthly card sales and average sale drive which pricing is cheapest.</li>
<li><strong>List where you sell.</strong> Counter, outdoors, customer homes or online too. Outdoor sellers need battery life and maybe cellular.</li>
<li><strong>Decide on software needs.</strong> Inventory, tips, appointments, table service, invoices and staff permissions.</li>
<li><strong>Check payout speed.</strong> Standard next-business-day payouts are usually free; instant payouts cost extra.</li>
<li><strong>Read contract terms.</strong> Avoid long contracts, leases on hardware and early termination fees unless the savings are clear.</li>
<li><strong>Test with real customers.</strong> Start with a low-cost reader or tap to pay before buying a full terminal.</li>
<li><strong>Connect it to your books.</strong> Make sure deposits, fees and refunds are easy to reconcile.</li>
</ol>

<h2>What types of card readers are there?</h2>
<h3>Mobile readers</h3>
<p>Small Bluetooth readers that pair with a phone or tablet. They accept chip and tap payments and cost around $50 to $70. Best for low to moderate volume, markets, pop-ups and service calls. Battery life and Bluetooth pairing are the main practical issues.</p>
<h3>Tap to pay on a phone</h3>
<p>No hardware at all: the phone's NFC chip accepts contactless cards and wallets. Ideal for occasional sales and mobile trades. It cannot take chip-inserted payments, so keep a backup option for older cards.</p>
<h3>Smart handheld terminals</h3>
<p>All-in-one devices with a screen, card reader and sometimes a receipt printer, such as Square Terminal or Stripe's S700. They run the POS app on the device, which suits restaurants, salons and retail counters. Expect a few hundred dollars per device.</p>
<h3>Countertop POS systems</h3>
<p>Full registers with a customer-facing display, cash drawer and printer. Clover and Square Register are examples. They cost the most and usually come with software subscriptions, but they handle inventory, staff, tips and reporting for busy shops.</p>
<h3>Traditional merchant terminals</h3>
<p>Standalone terminals supplied by banks and independent sales organizations, often with a merchant account and sometimes a lease. They can suit high-volume businesses that negotiate interchange-plus pricing, but read the contract carefully.</p>

<h2>What fees show up on a card reader statement?</h2>
<p>Flat-rate providers show one fee per payment, but your monthly statement may also include refunds (the processing fee is often not returned), chargeback fees, instant payout fees and software subscriptions. Traditional merchant statements can include interchange, assessments, a processor markup, PCI compliance fees, statement fees and monthly minimums. Divide total fees by total card sales to get your effective rate, and compare that number each month. If your effective rate creeps above 3.5% on a flat-rate plan, look for add-ons you are paying for and do not need.</p>

<h2>Card reader vs invoicing: when to use each</h2>
<p>Readers are for payments while the customer is in front of you. For work billed after the job, a deposit, or business clients who pay on terms, send an invoice with a payment link or bank details instead. Many service businesses use both: tap or chip for on-the-spot payments, and invoices for larger jobs. You can create an invoice in minutes with our <a href="/invoice-generator">free invoice generator</a> and add a payment link; see <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>. For phone-only setups, read our <a href="/blog/tap-to-pay-on-iphone">Tap to Pay on iPhone guide</a>.</p>

<h2>Common mistakes when buying a card reader</h2>
<ul>
<li><strong>Comparing only the percentage.</strong> The fixed fee and add-ons change the effective rate, especially on small sales.</li>
<li><strong>Signing a hardware lease.</strong> Leased terminals can cost far more over a multi-year term than buying.</li>
<li><strong>Ignoring chargebacks.</strong> Know the dispute fee and process; read <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a>.</li>
<li><strong>Surcharging incorrectly.</strong> Surcharges are banned on debit cards and limited by state and network rules; see <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a>.</li>
<li><strong>Skipping PCI basics.</strong> Encryption helps, but you still need secure devices and staff practices; see <a href="/blog/pci-compliance-small-business">PCI compliance for small business</a>.</li>
<li><strong>Not giving receipts.</strong> Customers and your bookkeeping both need them; a <a href="/blog/payment-receipt-template">payment receipt template</a> helps for non-POS payments.</li>
</ul>

<h2>Card reader buying checklist</h2>
<ul>
<li>Accepts chip, tap and mobile wallets</li>
<li>Works with your phone or tablet model</li>
<li>Flat rate and fixed fee written down for your volume</li>
<li>No monthly fee unless you need the software</li>
<li>Payout timing and instant payout cost known</li>
<li>Offline mode or cellular option if you sell outdoors</li>
<li>Exports or integrations for your accounting</li>
<li>No long contract or lease</li>
</ul>

<p>The right card readers for small business are the ones whose fees fit your sales pattern and whose software you will actually use. For jobs you bill after the fact, pair your reader with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and downloads a professional PDF built in your browser.</p>
`,
  },
];
