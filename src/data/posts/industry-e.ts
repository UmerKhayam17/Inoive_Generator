import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_E: PostDraft[] = [
  {
    slug: "translation-invoice-template",
    title: "Translation Invoice Template: Per-Word Rates and Fees",
    description:
      "Use this translation invoice template guide to bill per-word, per-page or hourly work, with minimum fees, rush surcharges, CAT match discounts and a sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-become-a-freelance-translator",
      "editing-proofreading-invoice-template",
      "freelance-invoice-template",
      "foreign-currency-invoice",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "What should a translation invoice include?",
        a: "Include your name or business name, contact details and tax ID where required, the client's legal name and any PO or project number, a unique invoice number, issue and due dates, the language pair and direction, the document name, the word or page count and whether it is source or target, the rate, any minimum fee, CAT match discounts, rush or certification surcharges, tax, deposits received and the balance due.",
      },
      {
        q: "Should I bill on source words or target words?",
        a: "Either can work, but agree on it before you start. Source word counts let you quote a firm price upfront because the count is known before translation begins. Target counts reflect the actual output but are only known at the end, and some languages expand or contract considerably. Whichever you use, name it on the invoice line, for example 'Source words, per CAT tool count', so the client can verify it.",
      },
      {
        q: "What is a minimum fee in translation?",
        a: "A minimum fee is the lowest amount you charge for any job, regardless of length. It covers the fixed effort of accepting a project, setting up files, researching terms, reviewing and delivering, which is the same for a 40-word email as for a 400-word one. Show it on the invoice as a single line, such as 'Minimum charge, short document', rather than inflating a per-word rate, so the client sees why the total exceeds count times rate.",
      },
      {
        q: "How do CAT tool match discounts work on an invoice?",
        a: "CAT tools compare a new text to a translation memory and classify segments as new words, fuzzy matches of various percentages, 100% matches and repetitions. Many agencies pay a reduced percentage of the full rate for each band. On the invoice, list each band as its own line with the word count, the percentage paid and the effective rate, then attach the analysis report so the client can check the counts against their own.",
      },
      {
        q: "How do I invoice a certified translation?",
        a: "Bill the translation itself on its normal basis, then add a separate line for the certification statement, and another for notarization or hard-copy mailing if you provide them. Keep these as fixed fees so the client sees what the certification costs. Note on the invoice which documents were certified and for which purpose, because clients often need the invoice as proof of the service for immigration, court or university files.",
      },
      {
        q: "How much should I charge for rush translation?",
        a: "There is no standard figure; rush surcharges are set by each translator or agency. A common approach is a percentage uplift on the translation subtotal for jobs that require weekend work or more than your normal daily output, stated in your terms in advance. On the invoice, show the surcharge as its own line with the percentage and base, for example 'Rush surcharge, 25% of $480.00', rather than folding it into the rate.",
      },
      {
        q: "Should I charge a deposit for translation work?",
        a: "Deposits are reasonable for large projects, new direct clients and certified translations for individuals, who are harder to collect from after delivery. A deposit of part of the quoted total, paid before work starts, reduces risk. Issue the deposit as its own invoice or receipt, then show it as a deduction on the final invoice so the balance due is clear. Agencies usually pay on terms instead.",
      },
      {
        q: "How do I invoice international translation clients?",
        a: "State the currency clearly, give payment details that work across borders, and check whether your country's VAT or GST rules treat the service as exported or reverse charged. Include the client's VAT number where reverse charge applies. If you invoice in the client's currency, note the exchange rate you used for your own records. Agree in advance who pays bank or platform fees so the amount you receive matches the invoice.",
      },
      {
        q: "Can I make a translation invoice with a free invoice generator?",
        a: "Yes. Enter each element of the job, such as new words, fuzzy matches, certification and rush surcharge, as a line item with quantity and unit price, add tax or discounts, and download the PDF. A free generator will not run a CAT analysis or send the invoice for you, so you calculate the word bands in your CAT tool or a spreadsheet first, then copy the totals into the line items.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A translation invoice template should show the language pair, the document, the word or page count and whether it is source or target, and the rate for each line. Add separate lines for minimum fees, CAT tool match discounts, rush surcharges and certification, then tax, any deposit paid and the balance due.</p>

<p>Translators sell a product that is easy to measure but hard to price. Two documents with the same word count can take very different amounts of time, and a client who sees "1,200 words" on an invoice may not understand why the total is higher than they expected. A good translation invoice template solves that by making every pricing decision visible: the unit, the count, the rate and every adjustment.</p>

<p>This guide covers the pricing models translators commonly use, how to show each one on an invoice, how to handle CAT tool discounts, certification and rush work, and what a complete invoice looks like with the arithmetic laid out. It applies to freelance translators billing agencies or direct clients, and to small agencies billing their own customers.</p>

<h2>Why translation invoices need extra detail</h2>
<p>Most service invoices list hours or deliverables. Translation invoices have additional variables that the client may not know about:</p>
<ul>
<li><strong>The counting unit.</strong> Words, characters, lines or pages, and whether they are counted in the source or the target text.</li>
<li><strong>The counting tool.</strong> Word processors and CAT tools can return different counts for the same file, especially with numbers, tags and hyphenated terms.</li>
<li><strong>Repetitions and matches.</strong> Agencies often pay less for text that the translation memory already covers.</li>
<li><strong>Extras.</strong> Certification, formatting, proofreading by a second linguist, glossary creation and rush delivery are often billed separately.</li>
</ul>
<p>If any of these is left unstated, the client fills the gap with their own assumption. The invoice becomes the first place the disagreement surfaces, usually after the work is done. Listing them line by line, as described in our <a href="/blog/itemized-invoice">guide to itemized invoices</a>, turns the invoice into a record of what was agreed rather than a starting point for negotiation.</p>

<h2>Translation pricing models compared</h2>
<p>Translators rarely use a single model for everything. The table below summarizes the common options and how each one should look on the invoice. Rates are deliberately omitted because they vary widely by language pair, specialization, market and client type.</p>
<table><thead><tr><th>Model</th><th>Best for</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Per word (source)</td><td>Most written translation with editable source files</td><td>Source word count x rate per word, naming the counting tool</td></tr>
<tr><td>Per word (target)</td><td>Jobs where the source cannot be counted reliably, such as scanned images</td><td>Target word count x rate, counted after delivery</td></tr>
<tr><td>Per character or per line</td><td>Languages such as Chinese or Japanese, or markets where line rates are customary</td><td>Character or standard line count x rate, defining the line length</td></tr>
<tr><td>Per page</td><td>Standard personal documents such as birth certificates and diplomas</td><td>Number of pages x page rate, with a definition of a page</td></tr>
<tr><td>Hourly</td><td>Editing, proofreading, transcreation, terminology work and formatting</td><td>Hours x hourly rate, with a short task description</td></tr>
<tr><td>Flat project fee</td><td>Websites, apps or campaigns quoted as a package</td><td>One line per deliverable or milestone, with the agreed price</td></tr>
<tr><td>Minimum fee</td><td>Very short texts</td><td>A single minimum charge line in place of the per-word calculation</td></tr>
</tbody></table>
<p>Per-word pricing on the source text is the most common arrangement in written translation because it allows a firm quote before work starts. Hourly billing suits work where volume is a poor proxy for effort, such as reviewing another linguist's translation or adapting marketing copy for a new market. If you mix models on one project, give each its own line. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers time records and rounding rules that apply to editing and review hours.</p>

<h3>Defining a page or a line</h3>
<p>Page and line rates only work if both sides agree on what a page or line contains. Some markets define a standard page or line by a fixed number of characters, while others simply count physical pages of a certificate. Put your definition in your quote and repeat it in the line description, for example "Birth certificate, 1 page (single-sided original)". It prevents disputes when a "page" turns out to be a dense two-column legal form.</p>

<h2>CAT tool match discounts</h2>
<p>Computer-assisted translation (CAT) tools store previous translations in a translation memory. When a new file arrives, the tool analyzes it and sorts the text into bands: new words with no match, fuzzy matches at various percentages, 100% matches, context matches and repetitions within the file. Agencies often apply a sliding scale, paying the full rate for new words and a reduced percentage for matched text.</p>
<p>There is no universal scale. Each agency publishes its own grid, and freelancers can accept, negotiate or decline it. What matters for invoicing is that the bands, counts and percentages are visible. A blended "1,850 words at $0.09" line hides the math and makes the invoice impossible to check against the agency's purchase order.</p>
<p>A workable line structure for a CAT-discounted job looks like this:</p>
<ul>
<li>New words: count x full rate.</li>
<li>Fuzzy matches 75% to 99%: count x full rate x agreed percentage.</li>
<li>100% matches and repetitions: count x full rate x agreed percentage, which may be low or zero.</li>
</ul>
<p>Attach the CAT analysis report or quote its reference number in the invoice notes. Many agencies issue a purchase order with these exact bands, so matching your lines to the PO speeds up approval.</p>

<h2>Minimum fees, rush surcharges and certification</h2>
<h3>Minimum fees</h3>
<p>A short text still requires you to accept the job, open the files, check terminology, review and deliver. A minimum fee recovers that fixed effort. When the per-word total falls below the minimum, invoice the minimum as a single line instead of the per-word calculation. Showing both creates confusion, so pick one per job.</p>

<h3>Rush surcharges</h3>
<p>Rush surcharges compensate for weekend or evening work, or for daily output above your normal capacity. Translators commonly express them as a percentage of the translation subtotal. State the trigger in your terms, such as "delivery within 24 hours for more than 1,500 words", and show the surcharge as a separate line with the percentage and base. A separate line also makes it easy to waive the surcharge as a goodwill gesture without touching your standard rate.</p>

<h3>Certified translations</h3>
<p>In the United States, a certified translation generally means the translation is accompanied by a signed statement from the translator attesting that it is complete and accurate. The American Translators Association explains that this is different from being an ATA-certified translator, which is a professional credential earned by exam; see the ATA's explanation of <a href="https://www.atanet.org/certification/what-is-a-certified-translation/" target="_blank" rel="noopener noreferrer">what a certified translation is</a>. Some recipients also ask for the signature to be notarized. Requirements differ by country and by the receiving authority, so confirm what the client's institution needs before quoting.</p>
<p>On the invoice, keep certification separate from the translation itself: one line for the translation, one for the certification statement, and others for notarization, extra certified copies or courier delivery if you provide them.</p>

<h2>Sample translation invoice</h2>
<p>Here is an illustrative invoice from a freelance Spanish-to-English translator to a small agency. The figures are examples only, not market rates. The agency's grid pays 100% of the rate for new words, 60% for 75% to 99% fuzzy matches and 25% for 100% matches and repetitions. The base rate is $0.12 per source word, and the client asked for 24-hour delivery, which carries a 20% rush surcharge on translation lines.</p>
<table><thead><tr><th>Description</th><th>Quantity</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>ES to EN translation, product manual, new words (source count, CAT analysis ref. 4471)</td><td>2,400</td><td>$0.120</td><td>$288.00</td></tr>
<tr><td>Fuzzy matches 75% to 99% (60% of rate)</td><td>900</td><td>$0.072</td><td>$64.80</td></tr>
<tr><td>100% matches and repetitions (25% of rate)</td><td>1,100</td><td>$0.030</td><td>$33.00</td></tr>
<tr><td>Rush surcharge, 20% of $385.80 translation subtotal</td><td>1</td><td>$77.16</td><td>$77.16</td></tr>
<tr><td>Glossary review and client query log (hourly)</td><td>1.5</td><td>$50.00</td><td>$75.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$537.96</strong></td></tr>
<tr><td colspan="3">Sales tax (not applicable in this example)</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$537.96</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>New words: 2,400 x $0.12 = $288.00.</li>
<li>Fuzzy rate: $0.12 x 60% = $0.072. Fuzzy amount: 900 x $0.072 = $64.80.</li>
<li>Match rate: $0.12 x 25% = $0.03. Match amount: 1,100 x $0.03 = $33.00.</li>
<li>Translation subtotal: $288.00 + $64.80 + $33.00 = $385.80.</li>
<li>Rush surcharge: $385.80 x 20% = $77.16.</li>
<li>Glossary work: 1.5 x $50.00 = $75.00.</li>
<li>Total: $385.80 + $77.16 + $75.00 = $537.96.</li>
</ul>
<p>Note that the rush surcharge applies only to the translation lines, not to the hourly glossary work. Your terms should say which lines a surcharge applies to. A direct client asking for a certified birth certificate translation would see a much shorter invoice: one per-page line, one certification line and possibly a mailing line.</p>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each band as a line item with its quantity and unit price, put the CAT reference and language pair in the description, and download the PDF. A clean, text-focused layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps long line descriptions readable.</p>

<h2>What to include in a translation invoice template</h2>
<p>Use this checklist before you send each translation invoice:</p>
<ul>
<li>Your name or business name, address, email and tax ID where your jurisdiction requires it.</li>
<li>The client's legal name, billing address and, for agencies, their PO or job number.</li>
<li>A unique, sequential invoice number; the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a consistent format.</li>
<li>Invoice date, delivery date and due date.</li>
<li>Language pair and direction, such as "German to English".</li>
<li>The document or project name and the file names delivered.</li>
<li>The counting unit and basis: source or target, words, characters, lines or pages, and the tool used.</li>
<li>Each CAT match band on its own line with count, percentage and rate.</li>
<li>Minimum fee, rush surcharge, certification, notarization and formatting as separate lines.</li>
<li>Currency, tax treatment, deposits already paid and the balance due.</li>
<li>Payment methods and terms, including who pays bank or transfer fees.</li>
</ul>

<h3>Billing international clients</h3>
<p>Translators frequently work across borders, which raises currency and tax questions. State the invoice currency in the header and on the total line. If you invoice a business in another country, check whether your VAT or GST rules treat the supply as outside scope or subject to the <a href="/blog/reverse-charge-invoice">reverse charge mechanism</a>, and include the client's VAT number where required. Our guide to <a href="/blog/foreign-currency-invoice">invoicing in a foreign currency</a> explains how to record exchange rates, and the broader guide on <a href="/blog/invoice-international-clients">invoicing international clients</a> covers payment methods and transfer fees.</p>

<h3>Deposits for direct clients</h3>
<p>Agencies usually pay on 30-day or longer terms after delivery. Direct clients, particularly individuals ordering a single certified translation, are a different risk. Asking for part of the fee upfront is common for large or unusual jobs. Issue a <a href="/blog/deposit-invoice">deposit invoice</a> before you start, then subtract the deposit on the final invoice so the balance due is unambiguous.</p>

<h2>Common mistakes on translation invoices</h2>
<ul>
<li><strong>Not stating source or target.</strong> A count without a basis invites a recount and a dispute. Always name the basis and the tool.</li>
<li><strong>Blending CAT bands into one line.</strong> The agency cannot match a single blended line to its purchase order, so the invoice gets queried or delayed.</li>
<li><strong>Burying surcharges in the rate.</strong> Raising the per-word rate for a rush job makes your standard rate look inconsistent. Use a separate surcharge line.</li>
<li><strong>Charging the minimum and the per-word amount.</strong> Use one or the other for each job, never both.</li>
<li><strong>Forgetting extras agreed by email.</strong> Formatting, extra certified copies and courier delivery are easy to forget. Log them as they come up.</li>
<li><strong>Wrong currency or unclear fees.</strong> If the client pays in another currency and a bank deducts a fee, you receive less than invoiced. Agree on who covers fees.</li>
<li><strong>No PO number for agencies.</strong> Many agencies cannot pay an invoice without their job or PO reference, so the payment run skips yours.</li>
<li><strong>Editing a sent invoice.</strong> If a count was wrong, issue a credit note or a corrected invoice with a new number instead of changing the original.</li>
</ul>

<h2>Tips for faster payment</h2>
<p>Invoice on delivery, not at the end of the month, unless an agency asks for monthly statements. Match the agency's PO wording exactly, because their accounts payable team compares line by line. Keep your CAT analysis files for at least as long as you keep invoices, since counts are the evidence behind every total. Finally, make sure your contact and payment details are complete on every invoice, as covered in our <a href="/blog/freelance-invoice-template">freelance invoice template guide</a>.</p>
<p>A translation invoice template that shows the unit, the count, the rate and every adjustment is rarely disputed. The extra few minutes spent laying out the bands and surcharges pay for themselves in fewer queries and quicker approvals.</p>
`,
  },
  {
    slug: "interior-design-invoice-template",
    title: "Interior Design Invoice Template: Fees, Markups & FF&E",
    description:
      "Use this interior design invoice template guide to bill flat, hourly or cost-based fees, FF&E purchases, procurement markup and deposits, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["interior-design-fees", "markup-vs-margin", "deposit-invoice", "retainer-invoice"],
    faqs: [
      {
        q: "What should an interior design invoice include?",
        a: "Include your studio name, contact details and tax ID where required, the client's name and project address, a unique invoice number, issue and due dates, the project phase or billing period, design fees with their basis, each FF&E item with vendor, quantity, net cost and markup, freight and installation, sales tax on taxable goods, retainers or deposits applied and the balance due, plus payment instructions and your terms reference.",
      },
      {
        q: "What does FF&E mean on an interior design invoice?",
        a: "FF&E stands for furniture, fixtures and equipment. In interior design it usually covers movable furniture, lighting, rugs, window treatments, accessories and similar items the designer specifies and often purchases for the client. On an invoice, FF&E purchases are typically listed separately from design fees, item by item, because they may carry a procurement markup, require deposits to vendors and be subject to sales tax where design fees are not.",
      },
      {
        q: "Should I show my markup on furniture to the client?",
        a: "That depends on your contract. Some designers show net cost and markup as separate figures; others bill a single client price that already includes the markup, and disclose the markup percentage in the contract. Either can be fair if the client agreed to it in writing. Problems arise when the client believes they are paying net cost and later discovers a markup, so whatever you choose, state it clearly before purchasing.",
      },
      {
        q: "How do interior designers charge a percentage of cost?",
        a: "Under a cost-plus or percentage arrangement, the design fee is calculated as a percentage of the cost of the goods or the construction budget the designer manages. For example, a fee of 20% on $40,000 of furnishings would be $8,000. On the invoice, show the percentage, the cost base and the period or purchase it relates to, so the client can tie the fee to the purchase orders they approved.",
      },
      {
        q: "Should I collect a deposit before ordering furniture?",
        a: "Most designers do. Vendors often require payment or a large deposit when the order is placed, and custom items are usually non-refundable. Asking the client to pay for FF&E, or a significant part of it, before you order protects you from carrying the cost. Issue a proforma or deposit invoice listing the items, then apply the payment on the final invoice when the goods are delivered and installed.",
      },
      {
        q: "Do interior designers charge sales tax?",
        a: "It depends on the state and on what you are selling. Many US states tax the sale of tangible goods such as furniture, lighting and accessories, so if you resell them you may need to collect sales tax and may be able to buy them tax-free with a resale certificate. Treatment of design services themselves varies by state. Check your state's rules and keep goods and services on separate lines.",
      },
      {
        q: "How do I invoice a design retainer?",
        a: "Issue a retainer invoice at contract signing for the agreed amount, then show how it is applied on later invoices. Some designers apply the retainer to the final invoice; others draw it down against hourly fees each month. Whichever method your contract uses, show the opening retainer, the amount applied this period and the remaining balance in the invoice notes or as a deduction line.",
      },
      {
        q: "How do I bill freight, receiving and installation?",
        a: "List them separately from the product cost. Freight is often billed at actual cost, possibly with a markup if your contract allows it. Receiving, warehousing and delivery by a white-glove service are usually passed through or marked up as agreed. Installation labor by your own team can be billed hourly or as a flat fee. Separate lines make it easier for the client to see the total landed cost of each piece.",
      },
      {
        q: "Can I create an interior design invoice with a free generator?",
        a: "Yes. Add design fees, each FF&E item, freight and installation as line items, apply tax to the taxable lines, enter any deposit as an amount paid and download the PDF. A free invoice generator will not track purchase orders, vendor deposits or project budgets, so keep a procurement spreadsheet alongside it and copy the approved items and prices onto each invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An interior design invoice template should separate design fees from purchased goods. Show the fee basis (flat, hourly or percentage of cost), list each FF&amp;E item with vendor, quantity, net cost and markup, add freight and installation, apply sales tax to taxable goods, then subtract deposits or retainers to reach the balance due.</p>

<p>Interior designers often run two businesses at once: a professional service that sells ideas, drawings and project management, and a purchasing operation that buys furniture, lighting and finishes on the client's behalf. The two have different economics, different tax treatment and different cash flow risk. A clear interior design invoice template keeps them apart so the client understands what they are paying for and you can recover every cost you carry.</p>

<p>This guide explains the main fee structures, how to invoice procurement and FF&amp;E with or without markup, how deposits and retainers flow through the billing cycle, and what a complete invoice looks like with the arithmetic shown.</p>

<h2>How interior designers charge</h2>
<p>Interior design fees are usually set in the design agreement and fall into a few broad models. Many studios combine two, such as a flat design fee plus a markup on purchases. The amounts below are left out on purpose; rates depend heavily on market, experience and project type.</p>
<table><thead><tr><th>Fee model</th><th>How it works</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Flat design fee</td><td>A fixed price for defined phases or deliverables</td><td>One line per phase or installment, with the scope named</td></tr>
<tr><td>Hourly</td><td>Time billed at one or more rates, often with a retainer</td><td>Hours x rate by task or team member, with dates</td></tr>
<tr><td>Percentage of cost (cost-plus)</td><td>Fee calculated as a percentage of goods or construction cost managed</td><td>Percentage x cost base, naming the purchases or budget it covers</td></tr>
<tr><td>Per square foot</td><td>Fee based on the area designed, common in commercial work</td><td>Square feet x rate, with the space described</td></tr>
<tr><td>Procurement markup</td><td>Designer buys at trade price and resells at a markup</td><td>Item lines at client price, or net cost plus a markup line</td></tr>
<tr><td>Hybrid</td><td>For example, flat design fee plus hourly for changes plus markup on FF&amp;E</td><td>Separate sections for fees, change work and purchases</td></tr>
</tbody></table>
<p>Whichever model you use, the agreement should say how changes are billed. Clients often ask for "one more option" or a new room partway through. A clear rule for out-of-scope requests, billed hourly or by a written change order, prevents the flat fee from quietly expanding. Our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a> includes wording you can adapt.</p>

<h3>Billing design phases</h3>
<p>Many designers break a flat or hourly project into phases: initial consultation, concept design, design development, procurement and installation. Invoicing at the start or end of each phase spreads cash flow across the project. If you work this way, see our guide to <a href="/blog/milestone-payments">milestone payments</a> for how to tie each invoice to a defined deliverable rather than a calendar date.</p>

<h2>Procurement, FF&amp;E and markup</h2>
<p>FF&amp;E means furniture, fixtures and equipment. In residential design it usually covers sofas, tables, beds, lighting, rugs, window treatments, art and accessories. In commercial work it can include office systems, seating and specialty equipment. Designers often buy these items through trade accounts at a discount off retail and resell them to the client.</p>
<p>There are three common ways to price procurement:</p>
<ul>
<li><strong>Net cost plus markup.</strong> The client pays the trade price plus a stated percentage. The invoice can show both figures or just the marked-up price.</li>
<li><strong>Retail or list price.</strong> The client pays the published retail price, and the designer keeps the difference from the trade price. The contract should disclose this.</li>
<li><strong>Net cost only.</strong> The client pays the trade price with no markup, and the designer earns through higher design fees. Some designers prefer this for transparency.</li>
</ul>
<p>Be precise about markup versus margin. A 30% markup on a $1,000 net cost gives a $1,300 client price, which is a margin of about 23% on the selling price, not 30%. If your contract says "markup", calculate on cost. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> works through the formulas in both directions.</p>

<h3>Freight, receiving and installation</h3>
<p>The price of a sofa is rarely the full cost of getting it into the room. Freight from the vendor, receiving and inspection at a warehouse, storage while other items arrive, white-glove delivery and installation can add up. Decide in your agreement whether these are billed at actual cost, marked up, or included in the item price. Then list them as separate lines. A client who sees "Sofa, $6,500" and later "Freight and delivery, $640" with no prior warning will feel surprised; one who saw both lines on the purchase approval will not. For pass-through costs in general, the guide to <a href="/blog/reimbursable-expenses-invoice">invoicing reimbursable expenses</a> covers documentation and receipts.</p>

<h2>Deposits, retainers and cash flow</h2>
<p>Procurement exposes a design studio to real cash risk. Vendors often require full payment or a large deposit when an order is placed, custom upholstery can take months to arrive, and special orders are usually non-returnable. If the client cancels or delays payment, the designer may be left holding the cost.</p>
<p>A typical billing flow that reduces that risk looks like this:</p>
<ol>
<li><strong>Design retainer at signing.</strong> Issue a <a href="/blog/retainer-invoice">retainer invoice</a> for the agreed amount, applied to design fees later.</li>
<li><strong>Purchase approval.</strong> Send the client a proposal or <a href="/blog/proforma-invoice-guide">proforma invoice</a> listing each item, price, lead time and the deposit required.</li>
<li><strong>Procurement deposit.</strong> Collect payment for the approved items, in full or a large percentage, before placing orders. A <a href="/blog/deposit-invoice">deposit invoice</a> keeps this separate from design fees.</li>
<li><strong>Delivery and installation invoice.</strong> Bill the remaining balance on goods, freight, installation and any final design fees, and show all deposits as payments received.</li>
</ol>
<p>Hourly fees are usually billed monthly alongside these, with the retainer drawn down or held until the end, as your contract specifies.</p>

<h2>Sample interior design invoice</h2>
<p>The following is an illustrative final invoice for a living room project. The figures are examples only. The studio charges a flat design fee for the room, bills change requests hourly, and marks up FF&amp;E by 25% on net cost. The client paid a $1,500 design retainer at signing and a $9,000 procurement deposit when the furniture was ordered. In this example the state taxes the sale of furnishings at 7% but not design services; your state may differ.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Living room design, concept through installation (flat fee, final 50%)</td><td>1</td><td>$2,000.00</td><td>$2,000.00</td></tr>
<tr><td>Additional design time, reading nook revision (hourly)</td><td>3</td><td>$125.00</td><td>$375.00</td></tr>
<tr><td>Sofa, custom upholstery (net $4,800.00 + 25% markup)</td><td>1</td><td>$6,000.00</td><td>$6,000.00</td></tr>
<tr><td>Lounge chairs (net $1,200.00 each + 25% markup)</td><td>2</td><td>$1,500.00</td><td>$3,000.00</td></tr>
<tr><td>Area rug, 9 x 12 (net $1,600.00 + 25% markup)</td><td>1</td><td>$2,000.00</td><td>$2,000.00</td></tr>
<tr><td>Freight and white-glove delivery (at cost)</td><td>1</td><td>$480.00</td><td>$480.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$13,855.00</td></tr>
<tr><td colspan="3">Sales tax, 7% on furnishings ($11,000.00)</td><td>$770.00</td></tr>
<tr><td colspan="3">Less design retainer applied</td><td>-$1,500.00</td></tr>
<tr><td colspan="3">Less procurement deposit received</td><td>-$9,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$4,125.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Sofa: $4,800 x 1.25 = $6,000.00.</li>
<li>Chairs: $1,200 x 1.25 = $1,500.00 each; 2 x $1,500.00 = $3,000.00.</li>
<li>Rug: $1,600 x 1.25 = $2,000.00.</li>
<li>Furnishings total: $6,000 + $3,000 + $2,000 = $11,000.00.</li>
<li>Subtotal: $2,000 + $375 + $11,000 + $480 = $13,855.00.</li>
<li>Sales tax: $11,000 x 7% = $770.00 (freight treated as non-taxable in this example; check your state).</li>
<li>Total before payments: $13,855 + $770 = $14,625.00.</li>
<li>Balance due: $14,625 - $1,500 - $9,000 = $4,125.00.</li>
</ul>
<p>This layout shows net cost and markup for each item. If your contract uses a single client price, drop the net figure from the descriptions but keep one line per item. In our <a href="/invoice-generator">online invoice generator</a> you can add each item as a line, apply tax, and enter deposits as amount paid so the PDF shows the balance due. A refined layout such as the <a href="/invoice-templates/elegant">elegant invoice template</a> suits client-facing design work.</p>

<h2>What to include in an interior design invoice template</h2>
<ul>
<li>Studio name, logo, address, email, phone and tax ID or resale permit number where required.</li>
<li>Client name, billing address and project address if different.</li>
<li>Unique invoice number and invoice, due and service dates.</li>
<li>Project name and phase, such as "Primary suite, procurement phase".</li>
<li>Design fees with their basis: flat, hourly with hours and rate, or percentage with the cost base.</li>
<li>Each FF&amp;E item on its own line: vendor or description, quantity, finish, net cost and markup if disclosed.</li>
<li>Freight, receiving, storage and installation as separate lines.</li>
<li>Sales tax applied only to taxable lines, with the rate shown.</li>
<li>Retainers, procurement deposits and prior payments as deductions.</li>
<li>Balance due, payment methods and a reference to your terms on returns and cancellations.</li>
</ul>

<h3>Sales tax on design projects</h3>
<p>US sales tax rules for interior designers vary from state to state. In many states the resale of furniture and accessories is taxable, while some states also tax certain design services, and some treat items incorporated into real property, such as built-in cabinetry, differently from movable furniture. If you resell goods you may need a sales tax permit and can often buy for resale without paying tax upfront. Our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains the basics, but confirm the rules for your state with a tax professional. Professional bodies such as the <a href="https://www.asid.org/" target="_blank" rel="noopener noreferrer">American Society of Interior Designers</a> also publish business resources for members.</p>

<h2>Common mistakes on interior design invoices</h2>
<ul>
<li><strong>Mixing fees and goods on one line.</strong> "Living room, $14,000" makes tax calculation and client review impossible. Separate services from products.</li>
<li><strong>Undisclosed markup.</strong> If the contract does not mention markup and the client later sees a trade price, trust suffers. Disclose your approach in writing.</li>
<li><strong>Confusing markup with margin.</strong> Applying the wrong formula underprices every item. Calculate on cost if the contract says markup.</li>
<li><strong>Ordering before the deposit clears.</strong> Placing non-refundable custom orders on credit leaves you exposed if the client cancels.</li>
<li><strong>Forgetting freight and installation.</strong> These costs often arrive weeks after the item is invoiced. Track them per item and bill them before the final invoice.</li>
<li><strong>Taxing the wrong lines.</strong> Applying sales tax to the whole invoice, or to none of it, can overcharge the client or leave you owing tax.</li>
<li><strong>Not applying the retainer.</strong> If the final invoice ignores the retainer, the client will notice and question every other figure.</li>
<li><strong>Vague change requests.</strong> Billing extra hours without a dated description invites disputes. Record the request and the time spent.</li>
</ul>

<h2>Keeping procurement organized</h2>
<p>For anything beyond a single room, keep a procurement log with one row per item: vendor, order date, PO number, net cost, markup, client price, deposit paid to the vendor, client payment received, expected delivery and status. When it is time to invoice, the log becomes the source for your line items, and it shows at a glance which items are paid, ordered or still waiting on approval. Time spent on change requests deserves the same care; our guide on <a href="/blog/how-to-invoice-for-hourly-work">billing hourly work</a> covers time logs that hold up when a client asks.</p>
<p>An interior design invoice that separates fees, goods, freight, tax and payments takes a little longer to prepare, but it answers the client's questions before they are asked. That is what gets a five-figure invoice paid on time.</p>
`,
  },
  {
    slug: "architect-invoice-template",
    title: "Architect Invoice Template: Phase Billing and Fees",
    description:
      "Use this architect invoice template guide to bill by design phase, percentage of construction cost or hourly, with reimbursables and a worked progress invoice.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["construction-invoice-guide", "milestone-payments", "consulting-invoice-template"],
    faqs: [
      {
        q: "How do architects usually bill clients?",
        a: "Architects commonly bill monthly progress invoices against a fee that is set as a fixed sum, a percentage of construction cost, an hourly rate with or without a cap, or a combination. The fee is usually divided among design phases, and each invoice shows the percentage of each phase completed, the fee earned to date, the amount previously billed and the amount due this period, plus reimbursable expenses and any additional services.",
      },
      {
        q: "What are the phases of architectural services?",
        a: "Under the AIA B101 owner-architect agreement, basic services are organized into schematic design, design development, construction documents, procurement (formerly called bidding or negotiation) and construction phase services, often called construction administration. Many firms add pre-design or programming at the start. Each phase has its own share of the total fee, which the contract sets; there is no mandatory split.",
      },
      {
        q: "What percentage of the fee goes to each design phase?",
        a: "The split is negotiated in each contract. A commonly cited illustrative allocation is roughly 15% for schematic design, 20% for design development, 40% for construction documents, 5% for procurement and 20% for construction administration, but firms adjust it for project type and risk. The AIA does not prescribe percentages, so use your own historical data on where time is actually spent when you set the split.",
      },
      {
        q: "How does percentage of construction cost billing work?",
        a: "The total fee is a stated percentage of the cost of the work. Early in the project the fee is based on the budget or the latest estimate, and it is usually adjusted when the construction contract is awarded or when final costs are known. On the invoice, state the cost basis used, the fee percentage and the resulting fee, so the client can see what changed if the basis is updated.",
      },
      {
        q: "What are reimbursable expenses for an architect?",
        a: "Reimbursables are project costs outside the basic fee that the contract allows the architect to pass to the client, such as travel, printing and plotting, delivery, permit and filing fees paid on the client's behalf, renderings or models, and consultants hired at the client's request. Contracts often allow a stated multiplier on these costs. List them separately from fees and keep receipts in case the client asks.",
      },
      {
        q: "How do I bill additional services?",
        a: "Additional services are tasks outside the basic scope, such as extra design options after approval, redesign due to owner-requested changes, or services the contract lists as additional. Bill them hourly or for a negotiated fee once the client has authorized them in writing. Put them in a separate section of the invoice with a short description and the authorization reference, so they are not confused with the basic fee.",
      },
      {
        q: "Should an architect ask for a retainer?",
        a: "Many firms request an initial payment at signing, especially for residential clients. It is often credited against the final invoice rather than the first, which keeps a cushion in place throughout the project. State in the contract when and how the retainer is applied, and show it as a credit on the invoice where it is used so the client can follow the balance.",
      },
      {
        q: "How do I track fees billed to date?",
        a: "Keep a running schedule for each phase showing the phase fee, percentage complete, fee earned to date, previously billed and this period's amount. Repeat the schedule on every invoice. This lets the client, and any lender reviewing draws, see at a glance how much of the fee has been earned and how much remains, and it catches errors such as billing a phase past 100%.",
      },
      {
        q: "Can I create an architect invoice in a free invoice generator?",
        a: "Yes, for small firms and sole practitioners. Calculate the phase schedule in a spreadsheet, then enter the amount due for each phase, the additional services and the reimbursables as line items, and download the PDF. A free generator will not track percent complete across invoices or connect to project management software, so keep the running fee schedule yourself and paste a summary into the notes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An architect invoice template should bill the basic fee by phase: schematic design, design development, construction documents, procurement and construction administration. For each phase, show the phase fee, percent complete, fee earned to date, previously billed and amount due, then add additional services, reimbursable expenses and any retainer credit.</p>

<p>Architectural projects run for months or years, and clients pay as the work progresses. That makes the architect's invoice less a one-time bill and more a running statement of how much of the fee has been earned. An invoice that only says "Professional services, March: $24,000" forces the client to trust your number. A good architect invoice template shows how you got there, phase by phase.</p>

<p>This guide explains the common fee structures, the standard design phases referenced in AIA agreements, how to calculate percent-complete billing, how to handle reimbursables and additional services, and what a complete progress invoice looks like with the math laid out.</p>

<h2>Architect fee structures</h2>
<p>The owner-architect agreement sets the fee basis. Most firms use one of the models below or a combination, for example a fixed fee for basic services plus hourly for additional services. Figures are left out because fees vary by project type, size, complexity and region.</p>
<table><thead><tr><th>Fee model</th><th>How it works</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Stipulated sum (fixed fee)</td><td>A fixed amount for defined services, split across phases</td><td>Phase fee x percent complete, less previously billed</td></tr>
<tr><td>Percentage of construction cost</td><td>Fee equals a percentage of the cost of the work, adjusted as estimates change</td><td>Cost basis x fee percentage, then split by phase</td></tr>
<tr><td>Hourly</td><td>Time billed at rates by staff category</td><td>Hours by role x rate, grouped by phase or task</td></tr>
<tr><td>Hourly not to exceed</td><td>Hourly billing with a cap</td><td>Hours x rate, with billed to date and remaining cap shown</td></tr>
<tr><td>Multiple of direct salary</td><td>Direct personnel expense times an agreed multiplier</td><td>Labor cost x multiplier, often with timesheet backup</td></tr>
<tr><td>Per square foot or per unit</td><td>Fee per area or per dwelling unit, common in repeat building types</td><td>Area or units x rate, then split by phase</td></tr>
</tbody></table>
<p>Fixed fees and percentage-of-cost fees are usually billed on percent complete. Hourly arrangements are billed on actual time, often with the same phase breakdown so the client can compare progress to budget. If you also work as a consultant to other architects or developers, our <a href="/blog/consulting-invoice-template">consulting invoice template guide</a> covers hourly and retainer layouts that translate well.</p>

<h2>Design phases in AIA contracts</h2>
<p>In the United States, many projects use agreements published by the American Institute of Architects. The widely used <a href="https://www.aiacontracts.com/" target="_blank" rel="noopener noreferrer">AIA Contract Documents</a> B101 owner-architect agreement organizes basic services into five phases:</p>
<ol>
<li><strong>Schematic design (SD).</strong> Concept options, site and massing studies, preliminary plans and a preliminary cost estimate.</li>
<li><strong>Design development (DD).</strong> Refined plans, sections and elevations, major systems and materials selected, an updated estimate.</li>
<li><strong>Construction documents (CD).</strong> Detailed drawings and specifications used for permitting, pricing and construction.</li>
<li><strong>Procurement.</strong> Assisting the owner with bidding or negotiation and contractor selection. Older editions called this phase bidding or negotiation.</li>
<li><strong>Construction phase services (CA).</strong> Site visits, submittal and RFI review, reviewing the contractor's payment applications and certifying completion.</li>
</ol>
<p>The contract assigns each phase a share of the total fee. The AIA does not prescribe the percentages. A commonly cited illustrative split is about 15% SD, 20% DD, 40% CD, 5% procurement and 20% CA, but firms shift weight according to project type and where their time is actually spent. Use your own completed projects as the guide.</p>
<p>Other countries use different frameworks and phase names, such as the RIBA Plan of Work in the UK. The invoicing principle is the same: tie each billed amount to a defined stage of work.</p>

<h2>How percent-complete billing works</h2>
<p>Under percent-complete billing, each invoice reports how far through each phase the work has progressed and bills the difference between fee earned to date and fee previously billed. The calculation for each phase is:</p>
<ul>
<li><strong>Fee earned to date</strong> = phase fee x percent complete.</li>
<li><strong>Amount due this period</strong> = fee earned to date - previously billed.</li>
</ul>
<p>Repeat that for every phase, add the results, and you have the basic services portion of the invoice. The percentages are your professional judgment of progress, so be ready to explain them. Many firms base them on hours spent against budget, drawings completed or milestones reached. If the client wants more certainty, tie phase billing to defined deliverables, as described in our guide to <a href="/blog/milestone-payments">milestone payments</a>.</p>
<p>During construction administration, CA fees are often billed evenly over the expected construction duration or in line with the contractor's progress. If the construction schedule slips, the contract should say whether extended CA time is an additional service.</p>

<h2>Sample architect progress invoice</h2>
<p>The following is an illustrative invoice for a small commercial renovation. All figures are examples. The fee is 8% of an estimated $1,200,000 construction cost, or $96,000, split 15/20/40/5/20 across the phases. This is the fifth monthly invoice. The contract allows reimbursables at cost plus 10%, and the owner authorized additional services for a revised entry design at $150 per hour.</p>
<table><thead><tr><th>Phase</th><th>Phase fee</th><th>% complete</th><th>Earned to date</th><th>Previously billed</th><th>This invoice</th></tr></thead><tbody>
<tr><td>Schematic design (15%)</td><td>$14,400.00</td><td>100%</td><td>$14,400.00</td><td>$14,400.00</td><td>$0.00</td></tr>
<tr><td>Design development (20%)</td><td>$19,200.00</td><td>100%</td><td>$19,200.00</td><td>$14,400.00</td><td>$4,800.00</td></tr>
<tr><td>Construction documents (40%)</td><td>$38,400.00</td><td>50%</td><td>$19,200.00</td><td>$0.00</td><td>$19,200.00</td></tr>
<tr><td>Procurement (5%)</td><td>$4,800.00</td><td>0%</td><td>$0.00</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Construction administration (20%)</td><td>$19,200.00</td><td>0%</td><td>$0.00</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td><strong>Basic services total</strong></td><td><strong>$96,000.00</strong></td><td></td><td><strong>$52,800.00</strong></td><td><strong>$28,800.00</strong></td><td><strong>$24,000.00</strong></td></tr>
<tr><td colspan="5">Additional services: revised entry design, 6 hours x $150.00 (owner authorization AS-02)</td><td>$900.00</td></tr>
<tr><td colspan="5">Reimbursables: plotting $310.00 + travel $84.00 = $394.00, plus 10% = $433.40</td><td>$433.40</td></tr>
<tr><td colspan="5"><strong>Total due this invoice</strong></td><td><strong>$25,333.40</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Phase fees: $96,000 x 15% = $14,400; x 20% = $19,200; x 40% = $38,400; x 5% = $4,800; x 20% = $19,200.</li>
<li>DD this period: $19,200 x 100% = $19,200 earned, less $14,400 previously billed = $4,800.</li>
<li>CD this period: $38,400 x 50% = $19,200 earned, less $0 previously billed = $19,200.</li>
<li>Basic services this invoice: $4,800 + $19,200 = $24,000.</li>
<li>Additional services: 6 x $150 = $900.</li>
<li>Reimbursables: ($310 + $84) x 1.10 = $433.40.</li>
<li>Total: $24,000 + $900 + $433.40 = $25,333.40.</li>
<li>Fee remaining after this invoice: $96,000 - $52,800 = $43,200.</li>
</ul>
<p>If the construction estimate changes, a percentage-of-cost contract usually adjusts the total fee, and the next invoice recalculates every phase fee on the new basis. Note the new cost basis clearly on that invoice, because the "previously billed" column will no longer match a simple percentage of the new fee.</p>
<p>To produce this in our <a href="/invoice-generator">invoice generator</a>, enter each phase's amount due, the additional service and the reimbursables as line items, and paste the phase schedule into the notes. A structured layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> suits clients with formal approval processes.</p>

<h2>Reimbursable expenses and additional services</h2>
<h3>Reimbursables</h3>
<p>Reimbursable expenses are costs incurred for the project that the contract allows you to pass through. Typical examples include travel beyond a defined radius, printing and plotting, deliveries, permit and plan review fees paid on the client's behalf, professional photography, renderings and physical models. Many contracts apply a multiplier to cover administration. Bill them as a separate section, attach or offer receipts, and do not mix them with fees. Our guide on <a href="/blog/reimbursable-expenses-invoice">invoicing reimbursable expenses</a> covers documentation and markup.</p>

<h3>Additional services</h3>
<p>Owner-requested changes after approval are the most common source of fee disputes in architecture. Additional services should be authorized in writing before you start, priced hourly or as a fixed fee, and billed in their own section with the authorization reference. The general principles in our guide to <a href="/blog/scope-creep-change-order">managing scope creep with change orders</a> apply directly. Hourly additional services need clean time records; see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> for practical tips.</p>

<h2>What to include in an architect invoice template</h2>
<ul>
<li>Firm name, address, license number where useful, and tax ID if required.</li>
<li>Client name, project name and project address.</li>
<li>Contract reference, such as the agreement date or number.</li>
<li>Unique invoice number, invoice date, billing period and due date.</li>
<li>Fee basis: fixed sum, percentage with the current cost basis, or hourly rates.</li>
<li>Phase schedule with phase fee, percent complete, earned to date, previously billed and this invoice.</li>
<li>Additional services with authorization references and hours or fixed fees.</li>
<li>Reimbursable expenses itemized, with any multiplier stated.</li>
<li>Retainer applied, if any, and total due.</li>
<li>Fee remaining, payment terms and payment instructions.</li>
</ul>

<h3>Retainers and final invoices</h3>
<p>Many firms ask for an initial payment at signing. Some apply it to the first invoice; others hold it until the final invoice so a cushion remains in place throughout. Whichever you choose, the contract should say so and the invoice should show the retainer balance. Our guide to <a href="/blog/retainer-invoice">retainer invoices</a> explains both approaches. The difference between progress billing and the closing bill is covered in <a href="/blog/interim-invoice-vs-final-invoice">interim vs final invoices</a>.</p>

<h3>Hourly contracts with a cap</h3>
<p>Smaller projects, feasibility studies and residential additions are often billed hourly with a not-to-exceed amount. The invoice then needs two things the client will look for first: the hours and rates for the period, and the running total against the cap. A simple summary line in the notes, such as "Billed to date $18,450 of $25,000 not-to-exceed; remaining $6,550", answers the question before it is asked. Group hours by phase even on hourly contracts, because it shows whether the design is tracking to plan and gives you early warning when a phase is consuming more of the cap than expected. If the cap is likely to be reached before the work is complete, raise it with the client in writing before you exceed it, not on the invoice that does.</p>

<h2>Common mistakes on architect invoices</h2>
<ul>
<li><strong>Lump-sum monthly bills.</strong> A single "services for March" line gives the client no way to judge progress. Show the phase schedule.</li>
<li><strong>Billing a phase beyond 100%.</strong> If a phase overruns, the extra time is either absorbed or billed as an additional service with authorization, not added to the phase.</li>
<li><strong>Forgetting to update the cost basis.</strong> On percentage-of-cost contracts, the fee should change when the estimate or contract sum changes, as the agreement specifies.</li>
<li><strong>Unauthorized additional services.</strong> Work done before written approval is hard to collect. Get the authorization first.</li>
<li><strong>Reimbursables without receipts.</strong> Clients and lenders often ask for backup. Keep it organized by invoice.</li>
<li><strong>Front-loading percent complete.</strong> Overstating progress early improves cash flow briefly but damages trust when later phases bill little.</li>
<li><strong>Ignoring the retainer.</strong> Losing track of how the retainer is applied leads to awkward corrections at closeout.</li>
</ul>

<h2>Working alongside the contractor's billing</h2>
<p>During construction, the contractor submits its own payment applications, which the architect often reviews and certifies under the AIA contract family. Keep the two processes separate: your invoice covers your fee and expenses, not the contractor's work. Understanding how contractors bill, including retainage and schedules of values, helps you review their applications efficiently; our <a href="/blog/construction-invoice-guide">construction invoice guide</a> explains the basics.</p>
<p>An architect invoice that shows the fee basis, the phase schedule and every addition in its own section reads like a progress report. Clients and lenders can approve it quickly, and when the project closes out, the final invoice holds no surprises.</p>
`,
  },
  {
    slug: "pest-control-invoice-template",
    title: "Pest Control Invoice Template: Service Plans & Treatments",
    description:
      "Use this pest control invoice template guide to bill one-off treatments and recurring service plans, materials, warranties and sales tax, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "home-inspection-invoice-template",
      "recurring-invoices-guide",
      "landscaping-invoice-template",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "What should a pest control invoice include?",
        a: "Include your business name, contact details and license number if your state requires it on customer documents, the customer's name and service address, a unique invoice number, service date and technician, the target pest, areas treated, products applied, the service plan or one-off treatment price, materials such as bait stations, any warranty or follow-up terms, sales tax where applicable, payments received and the balance due.",
      },
      {
        q: "How do pest control service plans get invoiced?",
        a: "Recurring plans are usually billed per visit, monthly or quarterly, often with a higher initial service fee for the first treatment. Each invoice should name the plan, the service period or visit date and what the visit covered. Customers on annual plans may prepay, in which case each visit is recorded against the prepayment. Keep the plan terms, such as free callbacks between visits, in the invoice notes.",
      },
      {
        q: "Is pest control subject to sales tax?",
        a: "It depends on the state. Some states tax pest control services broadly, some tax only nonresidential pest control, and others do not tax the service at all. For example, Texas treats structural pest control as taxable, while Florida taxes nonresidential pest control but not residential service. Check your state's revenue department guidance, and apply the correct local rate based on the service address.",
      },
      {
        q: "Should I list the chemicals used on the invoice?",
        a: "Listing the product name, and often the EPA registration number, active ingredient, amount applied and target pest, is good practice and may be required on a separate service record in your state. Many companies put this on a service ticket or treatment report attached to the invoice rather than on the price lines. Customers with children, pets or sensitivities appreciate the information, and it supports you if a complaint arises.",
      },
      {
        q: "How do I bill for a pest control warranty or callback?",
        a: "If the customer's plan includes free callbacks or re-treatments between scheduled visits, record them on an invoice or service ticket at zero cost, noting that the visit was covered under warranty. That documents the work without billing for it. If a callback falls outside the warranty, for example a different pest or an expired plan, bill it as a normal service and explain why.",
      },
      {
        q: "How do I invoice termite treatments?",
        a: "Termite work is often priced as a one-time treatment, sometimes based on linear feet of foundation or the number of bait stations, followed by an annual renewal or monitoring fee. Invoice the initial treatment and installation separately from the renewal. State the warranty type and term, the renewal date and price, and what the renewal covers, so the customer understands why they receive a bill each year.",
      },
      {
        q: "Should I charge a cancellation fee on an annual plan?",
        a: "Some companies offer a lower initial fee in exchange for a minimum term, then charge an early cancellation fee if the customer cancels before the term ends. If you do this, put the fee and how it is calculated in the service agreement the customer signs. If you invoice the fee, show the calculation, such as the discounted initial fee recovered, on its own line.",
      },
      {
        q: "Can I use a free invoice generator for pest control billing?",
        a: "Yes, for small operators. Add the service, materials and any follow-ups as line items, apply sales tax to taxable lines and download the PDF. A free generator will not schedule routes, send recurring invoices automatically or store treatment records, so pair it with a calendar and a service log, and duplicate a saved plan invoice each cycle to save typing.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A pest control invoice template should show the service address, visit date, target pest, areas treated and products applied, then price the one-off treatment or service plan visit, materials like bait stations, any warranty callbacks at zero cost, and sales tax where your state taxes pest control. Finish with payments received and balance due.</p>

<p>Pest control businesses bill in two very different rhythms. One-off treatments for a wasp nest or a bed bug infestation are priced and paid like any trade job. Recurring service plans, monthly, bimonthly or quarterly, turn each customer into a long-term account with predictable visits and occasional free callbacks. A good pest control invoice template handles both, and it doubles as a service record that shows the customer exactly what was done on their property.</p>

<p>This guide covers the common pricing models, how to invoice recurring plans and warranties, how to list materials and chemicals, how sales tax applies in different states, and what a complete invoice looks like with the arithmetic shown.</p>

<h2>Pest control pricing models</h2>
<p>Most companies combine several of the models below. Prices are not included because they depend on region, property size, pest pressure, travel time and competition.</p>
<table><thead><tr><th>Model</th><th>Typical use</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>One-time treatment</td><td>Wasp nests, a single infestation, move-in treatments</td><td>One service line with pest, areas and date</td></tr>
<tr><td>Initial service plus recurring plan</td><td>General pest plans; first visit is heavier and priced higher</td><td>Initial service line, then a plan line on each later invoice</td></tr>
<tr><td>Recurring per visit</td><td>Quarterly or bimonthly residential plans</td><td>Plan name and visit date, one line per visit</td></tr>
<tr><td>Monthly or annual contract</td><td>Restaurants, warehouses, property managers</td><td>Fixed monthly amount, with the service period named</td></tr>
<tr><td>Per unit or per device</td><td>Rodent bait stations, termite stations, traps</td><td>Quantity x unit price for installation or monitoring</td></tr>
<tr><td>Per linear or square foot</td><td>Termite liquid treatments, fumigation, exclusion work</td><td>Measured quantity x rate, with the measurement stated</td></tr>
<tr><td>Renewal or warranty fee</td><td>Annual termite protection after the initial treatment</td><td>Renewal line with coverage period</td></tr>
</tbody></table>
<p>Recurring plans give you predictable revenue and make route planning easier, but they also require consistent invoicing. If the visit dates or amounts drift, customers notice. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to set a billing schedule and keep numbering consistent across cycles.</p>

<h3>Initial services and plan pricing</h3>
<p>The first visit on a new plan usually takes longer: an inspection, interior and exterior treatment, and sometimes removal of nests or webs. Many companies charge a separate initial service fee, then a lower amount for each recurring visit. Show both clearly on the first invoice, and state the recurring price and frequency in the notes so the customer knows what to expect next time.</p>

<h3>One-off treatments and larger jobs</h3>
<p>One-time jobs range from a quick wasp nest removal to multi-visit bed bug treatments, heat treatments, wildlife exclusion and whole-structure fumigation. The bigger the job, the more the invoice should look like a trade invoice: an inspection or estimate reference, the preparation the customer agreed to do, each visit or phase with its date, and materials such as exclusion mesh or sealant listed separately. For expensive treatments that require you to schedule crews, rent equipment or buy specialty products in advance, asking for part of the price upfront is reasonable; a <a href="/blog/deposit-invoice">deposit invoice</a> keeps that payment separate and easy to apply on the final bill. If the job has several follow-up visits included in the price, list them as zero-cost lines so the customer sees that the follow-ups are part of the package and not a surprise charge later.</p>

<h2>Recurring service plans and warranties</h2>
<p>Service plans often include a guarantee: if pests return between scheduled visits, the technician comes back at no extra charge. Those callbacks still cost you time and product, so record them. The simplest method is a zero-dollar line on an invoice or a separate service ticket: "Callback, ant activity in kitchen, covered under quarterly plan, $0.00". It documents the visit, reminds the customer of the value of the plan and helps you see which accounts generate frequent callbacks.</p>
<p>Plans also raise billing questions when customers join or leave mid-cycle. If someone starts a monthly commercial plan on the 20th, you can bill a partial month or start billing on the next cycle; pick one rule and put it in your agreement. The formulas in our guide to <a href="/blog/prorated-invoice">prorated invoices</a> work for pest control plans as well as subscriptions.</p>

<h3>Termite renewals</h3>
<p>Termite treatment is typically sold as an initial treatment or bait system installation followed by an annual renewal that keeps the warranty active. The renewal invoice should name the property, the warranty type (for example, re-treatment only or repair coverage, according to your agreement), the new coverage period and the renewal price. Send it early enough that the customer can pay before coverage lapses.</p>

<h2>Listing materials and chemicals</h2>
<p>Pricing and record keeping are two different jobs on a pest control invoice. For pricing, list billable materials that the customer pays for separately, such as rodent bait stations, glue boards, exclusion materials or monitoring devices, each with quantity and unit price. Products used as part of a standard treatment are normally included in the service price rather than billed per ounce.</p>
<p>For record keeping, many states require pesticide applicators to keep records of each application, and customers often ask what was used. A treatment section or attached service report can list the product name, EPA registration number, active ingredient, amount applied, areas treated and target pest. The <a href="https://www.epa.gov/pesticide-labels" target="_blank" rel="noopener noreferrer">EPA's guidance on pesticide labels</a> explains what the registration number and label directions mean. Check your state's lead pesticide agency for the exact record and customer notice requirements that apply to you.</p>

<h2>Sales tax on pest control services</h2>
<p>Sales tax on pest control varies more than on most trades, so it deserves its own check. Some states tax pest control services broadly, some tax only commercial or nonresidential work, and many do not tax the service at all. For example, the Texas Comptroller's guidance on <a href="https://comptroller.texas.gov/taxes/publications/94-114.php" target="_blank" rel="noopener noreferrer">pest control services</a> treats structural pest control as taxable, while Florida taxes nonresidential pest control but generally exempts residential service. Separately sold goods, such as traps sold to the customer, may be taxable even where the service is not.</p>
<p>Practical steps:</p>
<ul>
<li>Confirm whether your state taxes the service, and whether residential and commercial work are treated differently.</li>
<li>Apply the combined state and local rate for the service address, not your office address.</li>
<li>Keep taxable and non-taxable lines separate so tax is applied only where it belongs.</li>
<li>Check how your state treats the chemicals and equipment you buy, since in some states the provider pays tax on supplies as the consumer.</li>
</ul>
<p>Our overview of <a href="/blog/sales-tax-on-invoices-us">US sales tax on invoices</a> covers the general rules, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the tax on a line or total. This is general information, not tax advice.</p>

<h2>Sample pest control invoice</h2>
<p>Here is an illustrative invoice for a restaurant on a monthly commercial plan in a state that, in this example, taxes nonresidential pest control at a combined 7%. All prices are examples, not market rates.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly commercial pest service, October 2026: interior crack and crevice, exterior perimeter (visit Oct 6)</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>Exterior rodent bait stations, installed and baited</td><td>6</td><td>$32.00</td><td>$192.00</td></tr>
<tr><td>Drain treatment for drain flies, kitchen floor drains</td><td>2</td><td>$45.00</td><td>$90.00</td></tr>
<tr><td>Callback Oct 20, cockroach activity at dish station (covered under plan)</td><td>1</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$377.00</td></tr>
<tr><td colspan="3">Sales tax, 7% (illustrative rate)</td><td>$26.39</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$403.39</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Bait stations: 6 x $32.00 = $192.00.</li>
<li>Drain treatment: 2 x $45.00 = $90.00.</li>
<li>Subtotal: $95.00 + $192.00 + $90.00 + $0.00 = $377.00.</li>
<li>Sales tax: $377.00 x 7% = $26.39.</li>
<li>Total: $377.00 + $26.39 = $403.39.</li>
</ul>
<p>The bait station line is a one-time installation charge; next month's invoice would show only the plan fee, plus a monitoring line if the contract prices stations separately. Product details for each treatment would appear on the attached service report.</p>
<p>You can build this in our <a href="/invoice-generator">free invoice generator</a> by adding each service as a line item, applying tax, and downloading the PDF. A fresh, green-accented design such as the <a href="/invoice-templates/emerald">emerald invoice template</a> suits outdoor and home service brands.</p>

<h2>What to include in a pest control invoice template</h2>
<ul>
<li>Business name, logo, phone, email and license or certification number where your state requires it.</li>
<li>Customer name, billing address and service address if different.</li>
<li>Unique invoice number, invoice date, service date and due date.</li>
<li>Technician name or ID.</li>
<li>Plan name and frequency, or "one-time service".</li>
<li>Target pest and areas treated.</li>
<li>Billable materials with quantity and unit price.</li>
<li>Callbacks and warranty visits, even at zero cost.</li>
<li>Sales tax with rate, applied only to taxable lines.</li>
<li>Prepayments or deposits applied and balance due.</li>
<li>Pre- and post-treatment instructions or a reference to the service report.</li>
<li>Payment methods, terms and the next scheduled visit.</li>
</ul>

<h2>Common mistakes on pest control invoices</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Pest service, $95" tells the customer nothing. Name the pest, areas and visit date.</li>
<li><strong>Not recording warranty callbacks.</strong> Unrecorded free visits make the plan look less valuable and hide which accounts cost you most.</li>
<li><strong>Applying the wrong sales tax treatment.</strong> Taxing residential service in a state that taxes only commercial work, or vice versa, creates refunds or liabilities.</li>
<li><strong>Using the office tax rate.</strong> Local rates follow the service address in most states.</li>
<li><strong>Billing the initial fee twice.</strong> When a customer renews or pauses a plan, check whether the initial service fee should apply again under your terms.</li>
<li><strong>Missing renewal notices.</strong> A termite renewal invoice sent after the coverage lapsed causes confusion about whether the warranty is still active.</li>
<li><strong>Inconsistent plan invoices.</strong> Changing descriptions or prices every cycle without notice makes customers question the bill.</li>
</ul>

<h2>Getting recurring customers to pay on time</h2>
<p>For plan customers, consistency is the main tool: the same invoice date, the same layout and the same amount each cycle. Leave the invoice on site or send it the same day as the visit, while the customer can still see the technician's work. Offer card or bank payment options and state clear terms. Many companies ask plan customers to keep a card on file with their payment processor so visits are charged automatically. For more ideas, see our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>
<p>Pest control invoicing shares a lot with other route-based home services. If you also offer lawn care or cleaning, our guides to the <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> and the <a href="/blog/cleaning-service-invoice-template">cleaning service invoice template</a> cover recurring visits, materials and add-ons in similar ways.</p>
<p>A pest control invoice that names the pest, the areas, the products and the plan tells the customer what they paid for and gives you a clean record if questions come up later. Combined with a steady billing rhythm, it keeps plan customers renewing year after year.</p>
`,
  },
  {
    slug: "it-managed-services-invoice-template",
    title: "IT Services Invoice Template for MSPs: Per-User Billing",
    description:
      "Use this IT invoice template guide for MSPs to bill per-user or per-device plans, block hours, projects, hardware resale and mid-month proration clearly.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "cybersecurity-consultant-invoice-template",
      "recurring-invoices-guide",
      "prorated-invoice",
      "usage-based-billing-invoice",
    ],
    faqs: [
      {
        q: "What should a managed services invoice include?",
        a: "Include your company details and tax ID, the client's legal name and PO or agreement number, a unique invoice number, invoice and due dates, and the service period for each line. List the managed services plan with the user or device count and rate, any prorated adds or removals, resold licenses, block hours or overage time, project work, hardware with tax where applicable, credits, payments received and the balance due.",
      },
      {
        q: "Should an MSP bill per user or per device?",
        a: "Per-user pricing suits clients where each person uses several devices and most support is tied to the person, such as accounts, email and laptops. Per-device pricing suits environments with many shared machines, servers or network equipment. Many MSPs combine them: a per-user plan for end-user support plus per-device fees for servers, firewalls and other infrastructure. Whichever you choose, define what counts as a user or device in the agreement.",
      },
      {
        q: "Do I bill managed services in advance or in arrears?",
        a: "Most MSPs bill the fixed monthly plan in advance, at the start of the period, and bill variable items such as overage hours, prorated adds and usage in arrears on the next invoice. Advance billing protects cash flow and matches the expectation that support is available all month. Label each line with its service period so the client can see which parts are upcoming and which are catch-up.",
      },
      {
        q: "How do I prorate users added mid-month?",
        a: "Multiply the per-user rate by the number of added users and by the fraction of the period they were active, usually days remaining divided by days in the month. For example, three users added on October 15 in a 31-day month are active for 17 days, so the charge is rate x 3 x 17/31. Put the proration on the next invoice with its own dates, and apply the same method to removals as credits.",
      },
      {
        q: "How do block hours work on an IT invoice?",
        a: "A block of hours is a prepaid bank of support or project time, often sold at a lower rate than ad hoc work. Invoice the block upfront, then on each later invoice show hours used in the period and the remaining balance, even if no money is due. State whether unused hours expire, and at what rate hours beyond the block are billed, both in the agreement and in the invoice notes.",
      },
      {
        q: "Should hardware resale be on the same invoice as services?",
        a: "It can be, as long as the lines are separate. Hardware is a sale of goods, so it is often subject to sales tax where services may not be, and it may need different payment terms because you pay the distributor upfront. Some MSPs require payment for hardware before ordering, or send a separate invoice for equipment. Show the item, quantity and price, and keep your markup consistent with the agreement.",
      },
      {
        q: "Are managed IT services subject to sales tax?",
        a: "It varies by state and by service. Some US states tax certain IT services, data processing or software, while others tax only tangible goods such as hardware. Resold software licenses and cloud subscriptions can also be treated differently. Keep hardware, software, cloud services and labor on separate lines, check the rules where your clients are located and consult a tax professional if you sell across several states.",
      },
      {
        q: "How do I bill project work outside the managed services agreement?",
        a: "Quote project work, such as a server migration or office move, separately with a statement of work, fixed price or hourly estimate. Bill it on its own invoice or in a clearly labeled section, referencing the project name and quote number. This keeps the recurring agreement predictable and stops project hours from being mistaken for support covered by the monthly fee.",
      },
      {
        q: "Can I create MSP invoices with a free invoice generator?",
        a: "Yes, for a small client base. Enter the plan, user count, proration, licenses, hardware and project lines as line items, apply tax and discounts, and download the PDF. The generator builds the invoice in your browser; it does not pull user counts from your PSA or RMM tools, send invoices or recur them automatically, so you update counts from your own records each cycle.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A managed services invoice should show the plan, the user or device count and rate, and the service period, followed by prorated adds or removals, resold licenses, block hours or overage time, project work and hardware on separate lines. Apply sales tax only to taxable items, then subtract credits and payments to reach the balance due.</p>

<p>Managed service providers (MSPs) sell something that is hard to see: ongoing support, monitoring, security and maintenance that keeps a client's technology running. The invoice is often the only monthly reminder of what the client is paying for. A clear IT invoice template turns a long list of seats, licenses and tickets into something the client's finance team can check in a few minutes.</p>

<p>This guide covers MSP pricing models, how to show a managed services invoice line by line, how to handle mid-month proration, block hours, project work and hardware resale, and what a complete invoice looks like with the arithmetic shown. It is written for small MSPs and independent IT consultants who support businesses on a recurring basis.</p>

<h2>MSP pricing models</h2>
<p>Most providers use one or more of the models below. Prices are not shown because they vary by region, service scope, security stack and client size.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Per user</td><td>Monthly fee per supported user, covering their devices and accounts</td><td>Users x rate, with the count date stated</td></tr>
<tr><td>Per device</td><td>Monthly fee per workstation, server or network device</td><td>One line per device type: count x rate</td></tr>
<tr><td>Tiered packages</td><td>Bundles such as basic, standard and premium with different coverage</td><td>Package name, unit count and rate</td></tr>
<tr><td>All-inclusive flat fee</td><td>A fixed monthly price for a defined environment</td><td>One plan line, with scope summarized in notes</td></tr>
<tr><td>Block hours</td><td>Prepaid bank of support or project hours</td><td>Block purchase line, then hours used and balance in notes</td></tr>
<tr><td>Time and materials</td><td>Hourly support with parts billed as used</td><td>Hours by ticket or task x rate, plus parts</td></tr>
<tr><td>Usage-based add-ons</td><td>Backup storage, cloud resources, metered security tools</td><td>Quantity used x unit rate, billed in arrears</td></tr>
</tbody></table>
<p>Per-user and per-device plans are the most common foundation. They make revenue predictable and give clients a simple way to budget: add a person, add a seat. Usage-based add-ons follow the same principles as metered SaaS billing, covered in detail in our guide to <a href="/blog/usage-based-billing-invoice">usage-based billing invoices</a>.</p>

<h3>Defining users and devices</h3>
<p>Every per-unit model needs definitions. Is a shared mailbox a user? Does a part-time employee count? Is a phone a device? Write the answer into the agreement and use the same terms on the invoice. A line such as "Managed user, standard tier (count as of Nov 1): 24" leaves little room for argument, especially if you can share the user list on request.</p>

<h2>Structuring a managed services invoice</h2>
<p>A well-built MSP invoice groups lines into sections that match how the client thinks about the spend:</p>
<ol>
<li><strong>Recurring managed services.</strong> The plan fee, per-user or per-device counts and any fixed add-ons, usually billed in advance for the coming month.</li>
<li><strong>Adjustments.</strong> Prorated charges for users or devices added during the previous month, and credits for removals.</li>
<li><strong>Licenses and subscriptions.</strong> Resold software and cloud subscriptions, each with quantity and unit price.</li>
<li><strong>Additional time.</strong> Work outside the agreement, block hours purchased, or overage hours billed in arrears.</li>
<li><strong>Projects.</strong> Fixed-price or hourly project work referenced to a quote or statement of work.</li>
<li><strong>Hardware.</strong> Equipment sold to the client, with sales tax where applicable.</li>
</ol>
<p>Label each line with its service period. When advance and arrears charges sit on one invoice, dates are what stop the client from thinking they have been billed twice. The principles for repeating monthly bills are explained in our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a>.</p>

<h2>Proration, block hours and project work</h2>
<h3>Prorating adds and removals</h3>
<p>Clients hire and leave mid-month. A common approach is to charge the full plan in advance for the current headcount and then, on the next invoice, add prorated charges for anyone added and credits for anyone removed during the month. The formula is rate x units x days active / days in the month. Some MSPs instead bill a full month for any user active on any day, which is simpler but should be stated in the agreement. Our <a href="/blog/prorated-invoice">prorated invoice guide</a> shows daily and monthly proration in more detail.</p>

<h3>Block hours</h3>
<p>Block hours give clients a discount for prepaying and give you cash upfront. Invoice the block when sold. On every later invoice, show the hours used this period, the remaining balance and the expiry date if there is one, even when the line amount is zero. When the block runs out, overage hours are billed in arrears at the agreed rate. Time records matter here; see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> for practical rules on increments and descriptions.</p>
<p>Prepaid blocks and annual plans paid upfront also have an accounting consequence: you receive cash before you deliver the service. Our explainer on <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred vs accrued revenue</a> covers how to treat that money in your books.</p>

<h3>Project work</h3>
<p>Migrations, office moves, new server deployments and security remediation projects should not be billed as support. Quote them separately, ideally with a <a href="/blog/statement-of-work-template">statement of work</a> that defines deliverables, assumptions and exclusions, and bill them on their own invoice or in a clearly labeled section. If the client asks for additional work mid-project, use a written change order, as covered in our guide to <a href="/blog/scope-creep-change-order">handling scope creep</a>.</p>

<h2>Hardware and license resale</h2>
<p>Many MSPs resell laptops, firewalls, switches and software licenses. These lines have different economics from services: you usually pay the distributor before the client pays you, and margins are thinner. Practical rules:</p>
<ul>
<li>Show each item with model, quantity and unit price; include serial numbers in the notes if the client tracks assets.</li>
<li>Decide whether to show cost plus markup or a single client price, and apply your markup consistently. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> explains why a 15% markup is not a 15% margin.</li>
<li>For expensive orders, require payment or a deposit before ordering.</li>
<li>Keep hardware separate from services, because sales tax often applies to goods even when it does not apply to services.</li>
</ul>
<p>Sales tax on IT services, software and cloud subscriptions varies by US state and by how the item is delivered. Our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers the basics, but get advice if you sell into several states.</p>

<h2>Sample managed services invoice</h2>
<p>The following is an illustrative November invoice for a 24-user office. All rates are examples. The plan is billed in advance at $125 per user per month; three users were added on October 15 and are prorated in arrears for October. The client also pays for two managed servers, resold productivity licenses and a firewall replacement project. In this example only hardware is taxed, at 6%.</p>
<table><thead><tr><th>Description</th><th>Period</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Managed services, standard tier, per user (count as of Nov 1)</td><td>Nov 1 to Nov 30</td><td>24</td><td>$125.00</td><td>$3,000.00</td></tr>
<tr><td>Proration: 3 users added Oct 15 (17 of 31 days)</td><td>Oct 15 to Oct 31</td><td>3</td><td>$68.55</td><td>$205.65</td></tr>
<tr><td>Managed server monitoring and patching</td><td>Nov 1 to Nov 30</td><td>2</td><td>$150.00</td><td>$300.00</td></tr>
<tr><td>Productivity suite licenses (resold)</td><td>Nov 1 to Nov 30</td><td>24</td><td>$22.00</td><td>$528.00</td></tr>
<tr><td>Firewall replacement project, labor (quote Q-118)</td><td>Oct 22</td><td>6</td><td>$150.00</td><td>$900.00</td></tr>
<tr><td>Firewall appliance (cost $1,400.00 + 15% markup)</td><td>Oct 22</td><td>1</td><td>$1,610.00</td><td>$1,610.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$6,543.65</td></tr>
<tr><td colspan="4">Sales tax, 6% on hardware ($1,610.00)</td><td>$96.60</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$6,640.25</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Plan: 24 x $125.00 = $3,000.00.</li>
<li>Proration: $125.00 x 3 x 17/31 = $375.00 x 0.548387 = $205.65 (shown as $68.55 per user, rounded).</li>
<li>Servers: 2 x $150.00 = $300.00.</li>
<li>Licenses: 24 x $22.00 = $528.00.</li>
<li>Project labor: 6 x $150.00 = $900.00.</li>
<li>Firewall: $1,400.00 x 1.15 = $1,610.00.</li>
<li>Subtotal: $3,000.00 + $205.65 + $300.00 + $528.00 + $900.00 + $1,610.00 = $6,543.65.</li>
<li>Tax: $1,610.00 x 6% = $96.60. Total: $6,543.65 + $96.60 = $6,640.25.</li>
</ul>
<p>When the per-user proration does not divide evenly, calculate the line total first and round once, so the line total stays accurate even if the displayed unit rate is rounded. A notes line such as "Block hours: 4.5 used in October, 5.5 remaining, expires Dec 31" would complete the picture if the client also held a block.</p>
<p>You can lay this out in our <a href="/invoice-generator">online invoice generator</a>: add each line with its quantity and rate, include the service period in the description, apply tax and download the PDF. A clean, technical design such as the <a href="/invoice-templates/slate">slate invoice template</a> handles long line descriptions well.</p>

<h2>What to include in an IT invoice template</h2>
<ul>
<li>Your company name, logo, address, contact details and tax ID.</li>
<li>Client legal name, billing address, PO number and agreement reference.</li>
<li>Unique invoice number, invoice date and due date.</li>
<li>Service period on every recurring and adjustment line.</li>
<li>Plan name, unit type (user or device), count, count date and rate.</li>
<li>Prorated adds and credits for removals with dates and days.</li>
<li>Resold licenses and subscriptions with quantities.</li>
<li>Block hours purchased, used and remaining; overage hours with ticket references.</li>
<li>Project work with quote or SOW reference.</li>
<li>Hardware with model, quantity, price and tax.</li>
<li>Credits, payments received and balance due; payment methods and terms.</li>
</ul>

<h2>Common mistakes on MSP invoices</h2>
<ul>
<li><strong>Stale user counts.</strong> Billing last quarter's headcount loses revenue or overcharges. Reconcile counts against your records before each cycle.</li>
<li><strong>No service periods.</strong> Mixing advance and arrears lines without dates looks like double billing.</li>
<li><strong>Project hours inside the support plan.</strong> Folding projects into support hides profitability and sets the wrong expectation for next month.</li>
<li><strong>Untracked block hours.</strong> If clients cannot see their balance, they dispute overage charges.</li>
<li><strong>Taxing everything or nothing.</strong> Hardware, software and services can have different tax treatment; separate them.</li>
<li><strong>Ordering hardware on credit.</strong> Carrying a large equipment order for a slow-paying client strains cash flow.</li>
<li><strong>Inconsistent proration.</strong> Prorating adds but not removals, or vice versa, erodes trust quickly.</li>
</ul>

<h2>When to move to automated billing</h2>
<p>Manual invoicing works for a handful of clients. As you grow, user counts change weekly, license quantities shift and ticket time has to be reconciled each month. That is when MSPs typically adopt professional services automation (PSA) software that syncs counts and generates recurring invoices. Industry associations such as <a href="https://www.comptia.org/" target="_blank" rel="noopener noreferrer">CompTIA</a> publish resources on running a managed services business. If you also build websites or custom software, our <a href="/blog/web-development-invoice-template">web development invoice template</a> covers project-based billing that complements recurring support.</p>
<p>Whatever tools you use, the goal of a managed services invoice is the same: every line should map to a count, a period and a rate the client can verify. When it does, the monthly invoice reinforces the value of the relationship instead of starting an argument about it.</p>
`,
  },
];
