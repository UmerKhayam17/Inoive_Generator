import type { PostDraft } from "../blog";

export const TRADE_TARIFFS_2026_POSTS: PostDraft[] = [
  {
    slug: "tariff-surcharge-on-invoice",
    title: "Tariff Surcharge on Invoice: How to Add It the Right Way",
    description:
      "How to add a tariff surcharge on invoice: line item wording, contract clauses, calculation, sales tax questions and worked examples for small businesses.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-raise-prices", "itemized-invoice", "invoice-terms-and-conditions"],
    faqs: [
      {
        q: "Can I add a tariff surcharge to an invoice?",
        a: "Usually yes, if your agreement with the customer allows it. For new orders, add a surcharge clause to your quote or terms before the customer accepts. For existing fixed-price contracts, you generally need the customer's agreement, or a price adjustment clause already in the contract, before you can bill extra. Adding an unexpected charge to an invoice for work already agreed at a fixed price is the fastest way to start a dispute. When in doubt, ask a qualified adviser to review your contract.",
      },
      {
        q: "Should a tariff surcharge be a separate line item?",
        a: "In most cases, yes. A separate line keeps the base price visible, shows the customer exactly what the extra cost is, and makes it easy to remove the surcharge later if the tariff falls or is refunded. Label it clearly, for example 'Tariff surcharge, 10% of imported component cost', and reference the order or shipment it relates to. Burying the charge inside unit prices is simpler but makes later price reductions harder to show and to prove.",
      },
      {
        q: "How do I calculate a tariff surcharge?",
        a: "Start from the actual duty you paid, not the headline tariff rate on your whole invoice. Find the duty on the customs entry for the imported goods, divide it across the units in that shipment, then multiply by the units on this invoice. For example, $1,200 of duty on 400 units is $3.00 per unit, so an order of 50 units carries a $150 surcharge. Charging a flat percentage of your full sale price usually overcharges the customer.",
      },
      {
        q: "Is a tariff surcharge subject to sales tax?",
        a: "Often, yes. Many US states treat charges that the seller adds to a taxable sale as part of the sales price, whatever the charge is called. That means a tariff surcharge on taxable goods is commonly taxable too. Rules differ by state and by product, so check your state revenue department's guidance or ask a tax adviser. Do not assume that labeling something a surcharge removes it from the taxable amount.",
      },
      {
        q: "What should a tariff surcharge clause say?",
        a: "A good clause says which costs can be passed through (new or increased duties on the goods supplied), how the amount is calculated (actual duty, allocated per unit), when the customer is told (before shipment or on the quote), what evidence you provide on request, and what happens if the tariff is reduced or refunded. It should also say whether the customer can cancel unshipped orders if the surcharge exceeds a set percentage. Have a lawyer review the wording.",
      },
      {
        q: "What happens to a tariff surcharge if the tariff is refunded?",
        a: "If you passed a duty through to customers and later receive a refund of that duty, consider whether your contract or fairness requires you to pass the refund back. Many businesses issue a credit note referencing the original invoice. In 2026 this became a live question for US importers after the Supreme Court ruled that tariffs imposed under IEEPA were not authorized and CBP began processing refunds. Check your contract and get advice before deciding.",
      },
      {
        q: "Is it legal to add a tariff surcharge to prices?",
        a: "In the US, there is generally no rule against passing on tariff costs to business customers, provided you have a contractual right to do so and you describe the charge honestly. Problems arise when a surcharge is misleading, for example when the label suggests a government fee but the amount is really extra margin. Consumer sales may face stricter pricing disclosure rules in some states. Check with a qualified adviser for your situation.",
      },
      {
        q: "Should I raise base prices instead of adding a surcharge?",
        a: "It depends on how long you expect the cost to last. A surcharge suits a cost that is new, volatile or may be reversed, because you can remove it cleanly. A base price increase suits a cost that has become permanent, because customers find one clear price easier to accept than a growing list of extras. Many businesses start with a surcharge and fold it into the base price at their next annual price review.",
      },
    ],
    content: `
<p>A <strong>tariff surcharge on invoice</strong> is a separate line that passes some or all of the import duty you paid on to your customer. To add one properly, you need a contract or quote that allows it, a calculation based on the duty you actually paid, a clear label, and a plan to remove or refund it if the tariff changes.</p>

<p>Tariffs have moved a lot since 2025, and many small importers, distributors and makers have had to decide whether to absorb the cost, raise prices or bill it separately. This guide covers the separate-line option: when a tariff surcharge on invoice makes sense, how to work out the figure, what to write in your terms, and how to show it on an invoice your customer will accept. It is general information, not legal or tax advice, so check with a qualified adviser before changing contracts.</p>

<h2>What is a tariff surcharge?</h2>

<p>A tariff is a duty charged by the importing country on goods coming in. In the US, the importer of record pays it to US Customs and Border Protection (CBP). A tariff surcharge is your commercial decision to recover that cost from your customer, shown as its own charge rather than built into your unit price.</p>

<p>It is important to be clear about what a surcharge is not. It is not a government tax that you collect on the government's behalf, the way sales tax or VAT is. It is part of your price. That matters for three reasons:</p>

<ul>
<li><strong>You need a right to charge it.</strong> The customer only owes it if your agreement says so.</li>
<li><strong>It is usually part of the sales price for tax purposes.</strong> In many US states, sales tax applies to the surcharge as well as the goods.</li>
<li><strong>It must be described honestly.</strong> Calling extra margin a "tariff fee" can mislead customers and may create legal problems.</li>
</ul>

<p>If you are new to separating charges on an invoice, our guide to the <a href="/blog/itemized-invoice">itemized invoice</a> explains why clear line items reduce disputes.</p>

<h2>Surcharge or price increase: which should you use?</h2>

<p>Before you add anything to an invoice, decide whether a surcharge is the right tool. The table below compares the main options.</p>

<table>
<thead>
<tr><th>Option</th><th>Best when</th><th>Downside</th></tr>
</thead>
<tbody>
<tr><td>Absorb the cost</td><td>Duty is small relative to your margin, or a key customer is price sensitive</td><td>Your profit falls; hard to sustain if tariffs rise again</td></tr>
<tr><td>Tariff surcharge line</td><td>Duty is new, volatile or might be reversed or refunded</td><td>Needs a contract basis and clear calculation; some customers push back</td></tr>
<tr><td>Raise base prices</td><td>The higher cost looks permanent</td><td>Less transparent; harder to reverse if the tariff ends</td></tr>
<tr><td>Change the product or supplier</td><td>Another origin or material avoids the duty</td><td>Takes time; quality and lead times may change</td></tr>
</tbody>
</table>

<p>A surcharge works best for costs that might go away. US tariff policy has shown how quickly that can happen. In February 2026 the Supreme Court ruled in Learning Resources v. Trump that the International Emergency Economic Powers Act (IEEPA) did not authorize the tariffs imposed under it. Those IEEPA duties stopped being collected later that month and CBP began processing refunds, while other tariffs were put in place under different laws. A separate surcharge line is much easier to adjust in that kind of environment than a base price.</p>

<p>If the cost has clearly become permanent, a planned price increase is usually cleaner. Our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> includes a price increase letter template.</p>

<h2>Check your contract before adding a tariff surcharge on invoice</h2>

<p>The single biggest mistake is adding a surcharge to an invoice when the customer agreed to a fixed price. If you quoted $10,000 for a delivery and the customer accepted, you generally cannot send a $10,700 invoice because your duty went up, unless the agreement allows it.</p>

<p>Look for these in your existing documents:</p>

<ol>
<li><strong>A price adjustment or escalation clause.</strong> Some contracts let you pass on increases in duties, taxes or raw material costs.</li>
<li><strong>Quote validity.</strong> If your quote said prices are valid for 30 days and the customer ordered after that, you may be able to re-quote.</li>
<li><strong>Delivery terms.</strong> Under some Incoterms, the buyer pays import duty directly. Read our explainer on <a href="/blog/incoterms-on-invoice">Incoterms on invoices</a> to see who bears duty under each term.</li>
<li><strong>Your standard terms and conditions.</strong> Check what your <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a> say about taxes, duties and price changes.</li>
</ol>

<p>If nothing allows it, talk to the customer before you invoice. Explain the cost, show the evidence and agree the change in writing, for example by email or a signed change order. Then invoice.</p>

<h3>A sample surcharge clause</h3>

<p>Here is example wording you can adapt for future quotes. Have a lawyer review it for your contracts and jurisdiction.</p>

<p><em>"Prices exclude any new or increased customs duties, tariffs or import charges imposed after the date of this quote on goods supplied under it. Where such charges apply, we may add a tariff surcharge equal to the additional duty paid, allocated per unit, shown as a separate invoice line. We will notify you before shipment, and provide supporting customs documents on request. If the charge is later reduced or refunded to us, we will adjust future surcharges and credit amounts as agreed. If the surcharge exceeds 10% of the order value, you may cancel unshipped items without penalty."</em></p>

<h2>How to calculate a tariff surcharge</h2>

<p>The fair way to calculate a tariff surcharge is from the duty you actually paid on the goods you are selling, not a percentage of your entire invoice. Your sale price includes your margin, labor, freight and overheads. Duty is charged on the customs value of the imported goods, which is usually much lower.</p>

<p>Follow these steps:</p>

<ol>
<li>Find the duty paid on the customs entry for the shipment. Your customs broker's entry summary shows it line by line.</li>
<li>Separate out the extra duty if you only want to pass on the increase, not duty you already priced in.</li>
<li>Divide by the number of units in that shipment to get duty per unit.</li>
<li>Multiply by the units on this invoice.</li>
<li>Round sensibly and keep your working in case the customer asks.</li>
</ol>

<h3>Worked example: product reseller</h3>

<p>A small business imports 500 desk lamps with a customs value of $20 each, so $10,000 in total. A new 10% tariff adds $1,000 in duty to the shipment, which is $2.00 per lamp. The business sells the lamps at $60 each.</p>

<ul>
<li>Order: 40 lamps at $60 = $2,400</li>
<li>Tariff surcharge: 40 x $2.00 = $80</li>
<li>Subtotal before sales tax: $2,480</li>
</ul>

<p>If the business had instead added 10% to the $2,400 invoice, the customer would pay $240, three times the actual duty. That gap is exactly the kind of thing that damages trust.</p>

<h3>Worked example: contractor using imported materials</h3>

<p>A fit-out contractor quotes a job with $8,000 of imported fixtures. Their supplier confirms a new duty that raises the fixture cost by $560. The contract includes a material price escalation clause. The contractor invoices the agreed labor and materials, then adds a separate line: "Tariff surcharge on imported fixtures per clause 7.2 (supplier notice dated 3 March), $560.00", attaching the supplier's notice.</p>

<h2>How to show the surcharge on the invoice</h2>

<p>Clarity is the whole point of a separate line. A good tariff surcharge on invoice line has:</p>

<ul>
<li>A plain label: "Tariff surcharge" or "Import duty surcharge".</li>
<li>What it relates to: product, shipment, order or PO number.</li>
<li>The basis: per unit amount, or the contract clause that allows it.</li>
<li>A note that supporting documents are available on request.</li>
</ul>

<p>Example line items:</p>

<table>
<thead>
<tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Desk lamp, model DL-2 (PO 4471)</td><td>40</td><td>$60.00</td><td>$2,400.00</td></tr>
<tr><td>Tariff surcharge, DL-2 imported shipment, per unit</td><td>40</td><td>$2.00</td><td>$80.00</td></tr>
</tbody>
</table>

<p>Add a short note at the bottom, such as "Tariff surcharge reflects additional import duty on this product, calculated per unit. Customs documentation available on request." Our list of <a href="/blog/invoice-notes-examples">invoice notes examples</a> has more wording ideas.</p>

<h3>Adding it in our invoice generator</h3>

<p>Our free <a href="/invoice-generator">invoice generator</a> has a single tax rate for the whole invoice, so the simplest approach is to add the tariff surcharge as its own line item with a quantity and rate, exactly like the table above. A few practical points:</p>

<ul>
<li>The tax rate applies to the subtotal after any discount, and that subtotal includes your surcharge line. That matches the common US position that the surcharge is part of the taxable sale, but check your state's rules.</li>
<li>The separate "shipping / extra" field is added after tax and prints as shipping, so do not use it for tariffs.</li>
<li>Put the PO number in the PO field and the explanation in the notes or terms.</li>
</ul>

<p>Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if you want to check the tax on the total before you send it.</p>

<h2>Sales tax and accounting treatment</h2>

<p>Because a tariff surcharge is part of your price, it usually follows the tax treatment of the goods. In many US states, charges the seller adds to a taxable sale are included in the taxable sales price. If the goods are exempt, for example a sale for resale with a valid certificate, the surcharge is usually exempt too. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers the basics, but your state's revenue department is the authority.</p>

<p>For bookkeeping, record the surcharge as sales revenue (many businesses use a separate income account so they can report on it), and record the duty you paid as part of your inventory cost or cost of goods sold, as your accountant advises. Keeping both visible lets you check that surcharges roughly match duty paid. See our article on <a href="/blog/cost-of-goods-sold">cost of goods sold</a> for how landed costs flow into your margins.</p>

<h2>Being transparent with customers</h2>

<p>Customers accept a tariff surcharge on invoice more readily when they feel the charge is honest and temporary. A few habits help:</p>

<ul>
<li><strong>Tell them before you invoice.</strong> Notify customers when the surcharge starts and give an estimate on quotes.</li>
<li><strong>Pass on cost, not margin.</strong> If you want more margin, raise prices openly instead.</li>
<li><strong>Review regularly.</strong> Set a date to review the surcharge, for example monthly or quarterly.</li>
<li><strong>Remove it when the duty goes.</strong> Announce the removal. It builds goodwill for the next time you need to raise prices.</li>
<li><strong>Handle refunds fairly.</strong> If you receive a duty refund on goods you surcharged, decide with your adviser whether to pass it back. A <a href="/blog/credit-note-guide">credit note</a> referencing the original invoice is the clean way to do it.</li>
</ul>

<p>Do not confuse tariff surcharges with card surcharges. Card surcharges, which pass on card processing fees, have their own rules on caps and disclosure. Our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> covers those separately.</p>

<h2>Common mistakes to avoid</h2>

<ul>
<li>Applying a tariff percentage to the full sale price instead of the customs value of the imported parts.</li>
<li>Adding a surcharge to fixed-price work without the customer's agreement.</li>
<li>Charging a surcharge on goods that were imported before the tariff took effect.</li>
<li>Leaving the surcharge in place after the tariff is removed or refunded.</li>
<li>Calling the charge a "government fee" or "tax", which can suggest it is mandatory.</li>
<li>Forgetting sales tax on the surcharge where your state treats it as taxable.</li>
</ul>

<h2>Conclusion</h2>

<p>A tariff surcharge on invoice can protect your margins without hiding the cost from your customers, as long as it rests on a contract right, is calculated from duty actually paid and is clearly labeled. Agree it in writing, show your working, and take it off when the tariff goes. When you are ready, open the free <a href="/invoice-generator">invoice generator</a>, add the surcharge as its own line with a clear description, and download a professional PDF in minutes.</p>
`,
  },
  {
    slug: "de-minimis-exemption-end",
    title: "De Minimis Exemption Ended: What US Sellers Must Do (2026)",
    description:
      "The US de minimis exemption for $800 imports is suspended. What changed in 2025 and 2026, what duties apply now and what small sellers and importers must do.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "commercial-invoice-template",
      "hs-code-on-commercial-invoice",
      "tariff-surcharge-on-invoice",
    ],
    faqs: [
      {
        q: "Is the $800 de minimis exemption still available in 2026?",
        a: "No, not for most shipments. Duty-free de minimis treatment was suspended for goods from all countries from August 29, 2025. The suspension continued after the Supreme Court's February 2026 IEEPA ruling, and in June 2026 CBP published interim final rules suspending the exemption indefinitely under its own statutory authority. Low-value imports now generally need a formal or informal entry and are subject to applicable duties, taxes and fees. Check CBP's website for the latest guidance before you ship.",
      },
      {
        q: "What was Section 321?",
        a: "Section 321 of the Tariff Act of 1930, codified at 19 U.S.C. 1321, allowed CBP to admit shipments imported by one person on one day with a fair retail value of $800 or less free of duty and taxes, with minimal paperwork. The limit rose from $200 to $800 in 2016. The provision fueled direct-to-consumer cross-border e-commerce, because sellers could ship individual parcels into the US without paying duty or filing a full customs entry.",
      },
      {
        q: "Did the Supreme Court ruling on IEEPA tariffs restore de minimis?",
        a: "No. On February 20, 2026, the Supreme Court ruled in Learning Resources v. Trump that IEEPA does not authorize tariffs, which ended the IEEPA duties. But the de minimis suspension was continued by a new executive order the same day, and CBP later grounded the suspension in its own authority under 19 U.S.C. 1321 through interim final rules published June 24, 2026. Low-value shipments still do not enter duty free.",
      },
      {
        q: "When does de minimis end permanently?",
        a: "The One Big Beautiful Bill Act, signed in July 2025, repeals the statutory de minimis exemption for commercial shipments effective July 1, 2027. Until then, the exemption remains suspended by executive and regulatory action. In practice, sellers should assume low-value imports will continue to face duties and entry requirements and plan accordingly, rather than waiting for a specific date. Check CBP for any updates.",
      },
      {
        q: "Do gifts still qualify for duty-free entry?",
        a: "Bona fide gifts and travelers' personal exemptions are handled under separate rules from the commercial de minimis provision, and limited duty-free treatment for genuine gifts has continued. The value limits and conditions are specific, and items sold online are not gifts even if packaged as such. Misdeclaring a commercial shipment as a gift can lead to penalties. Check CBP's current guidance on gifts before relying on this treatment.",
      },
      {
        q: "What does an e-commerce seller need to do now?",
        a: "Classify each product with a correct HTS code, confirm its country of origin, work out the duty and any other tariffs that apply, and decide who pays: you (delivered duty paid) or your customer (delivered duty unpaid). Then choose a carrier or customs broker who can file entries for low-value shipments, update your prices and checkout messages, and make sure every package has an accurate commercial invoice.",
      },
      {
        q: "How do postal shipments work after de minimis?",
        a: "CBP created a postal informal entry process in June 2026. According to CBP's rule, the filer, who must be the owner, purchaser or a licensed customs broker, submits entries with 10-digit tariff classifications and pays duty monthly rather than on delivery. Some goods, such as those with partner agency requirements, must use formal entry; CBP later delayed compliance for some of these to January 20, 2027. Check CBP's international mail guidance for current rules.",
      },
      {
        q: "What should a commercial invoice include for a low-value shipment?",
        a: "At minimum: seller and buyer names and addresses, an accurate plain-language description of each item, quantity, unit price and total value, currency, country of origin, and the HTS code. Undervaluing or vaguely describing goods was always risky and is now more likely to delay shipments or trigger penalties. Use the transaction value actually paid, including any discounts honestly shown, not an estimated or reduced figure.",
      },
      {
        q: "Should I charge my US customers for duties?",
        a: "You can either include duties in your price and ship delivered duty paid, or ship delivered duty unpaid and let the carrier collect from the customer. Delivered duty paid usually gives a better customer experience because buyers are not surprised by charges at the door, but you carry the cost and need accurate duty calculations. Whatever you choose, state it clearly at checkout and on the invoice.",
      },
    ],
    content: `
<p>The US <strong>de minimis exemption</strong> let shipments worth $800 or less enter duty free with little paperwork. It is no longer available for most imports: it was suspended for all countries from August 29, 2025, the suspension survived the 2026 Supreme Court tariff ruling, and Congress has repealed it for commercial shipments from July 1, 2027.</p>

<p>For small e-commerce sellers, importers and anyone shipping parcels to US customers, this is one of the biggest trade changes in years. Low-value parcels now generally need a customs entry, accurate classification and payment of applicable duties. This guide explains what happened, where things stand as of October 2026, and what to do now. It is general information based on CBP and Federal Register sources at the time of writing; rules in this area change often, so check CBP's latest guidance and speak to a licensed customs broker or adviser before making decisions.</p>

<h2>What was the de minimis exemption (Section 321)?</h2>

<p>Section 321 of the Tariff Act of 1930, codified at 19 U.S.C. 1321, gave CBP authority to admit low-value shipments free of duty and taxes. Since 2016, the threshold was $800 in fair retail value, per person, per day. Shipments under the limit could enter with basic data rather than a full customs entry.</p>

<p>That made the de minimis exemption the backbone of direct-to-consumer cross-border selling. A seller abroad could ship individual orders straight to US buyers without paying duty, and US sellers who stored stock abroad could fulfill orders the same way. CBP processed well over a billion such shipments a year by the mid-2020s, which became a central argument for ending it: critics said it let goods avoid tariffs and made inspection of unsafe or illegal items harder.</p>

<h2>Timeline: how the $800 de minimis rule ended</h2>

<table>
<thead>
<tr><th>Date</th><th>What happened</th></tr>
</thead>
<tbody>
<tr><td>May 2, 2025</td><td>De minimis ended for goods from China and Hong Kong under executive action.</td></tr>
<tr><td>July 2025</td><td>The One Big Beautiful Bill Act became law, repealing the statutory de minimis exemption for commercial shipments effective July 1, 2027.</td></tr>
<tr><td>July 30, 2025</td><td>Executive Order 14324 suspended duty-free de minimis treatment for all countries.</td></tr>
<tr><td>August 29, 2025</td><td>Global suspension took effect. Low-value shipments became subject to applicable duties.</td></tr>
<tr><td>February 20, 2026</td><td>Supreme Court ruled in Learning Resources v. Trump that IEEPA does not authorize tariffs. A new executive order the same day continued the de minimis suspension.</td></tr>
<tr><td>February 24, 2026</td><td>IEEPA duties stopped being collected; a temporary 10% tariff under Section 122 began. De minimis remained suspended.</td></tr>
<tr><td>June 24, 2026</td><td>CBP published two interim final rules suspending the exemption indefinitely under 19 U.S.C. 1321, one for non-postal shipments and one creating a postal informal entry process.</td></tr>
<tr><td>July 24, 2026</td><td>The Section 122 tariff expired and new Section 301 tariffs took its place for many countries. The postal informal entry process took effect.</td></tr>
<tr><td>October 22, 2026</td><td>CBP extended certain postal compliance dates to January 20, 2027.</td></tr>
<tr><td>July 1, 2027</td><td>Statutory repeal for commercial shipments scheduled to take effect.</td></tr>
</tbody>
</table>

<h2>Why the Supreme Court ruling did not bring de minimis back</h2>

<p>Many sellers hoped that when the Supreme Court struck down the IEEPA tariffs in February 2026, the $800 de minimis rule would return. It did not, for two reasons.</p>

<p>First, the President issued an order the same day continuing the suspension. Second, in June 2026 CBP moved the suspension onto its own footing: the statute gives the Treasury Secretary, through CBP, authority to set and adjust exemptions by regulation, and CBP's interim final rules rely on that authority rather than on IEEPA. Combined with the statutory repeal already scheduled for July 2027, the practical message is clear: do not plan around the exemption coming back.</p>

<p>The ruling did matter in other ways. IEEPA duties already paid became the subject of refund processes run by CBP, and replacement tariffs were later imposed under other laws. If you paid IEEPA duties on imports, including on low-value shipments after the suspension, ask your broker whether you may be eligible for a refund.</p>

<h2>What applies to low-value shipments now</h2>

<p>With the de minimis exemption suspended, a parcel worth $50 is treated much like a larger shipment. In general:</p>

<ul>
<li><strong>Duties apply.</strong> The normal duty rate for the product's HTS classification applies, plus any additional tariffs in force for that product and country of origin (for example Section 232 or Section 301 duties).</li>
<li><strong>An entry is required.</strong> Non-postal shipments need a formal or informal entry, usually filed by the carrier or a customs broker.</li>
<li><strong>Mail has its own process.</strong> CBP's postal informal entry process, effective July 24, 2026, covers many mail shipments up to $2,500. Under the rule, the filer must be the owner, purchaser or a licensed customs broker, provides 10-digit tariff classifications, and pays duty on a monthly cycle rather than on delivery.</li>
<li><strong>Some goods must use formal entry.</strong> Items subject to partner government agency requirements, quotas, antidumping or countervailing duties, or certain chapter 98 and 99 provisions are excluded from the postal informal process. CBP delayed compliance for some of these exclusions to January 20, 2027.</li>
<li><strong>Fees apply.</strong> Brokers and carriers charge for filing entries, and on a small parcel those fees can exceed the duty itself.</li>
</ul>

<p>Exact rates and procedures depend on the product, origin, value and mode of shipping. Check CBP's current guidance and the Harmonized Tariff Schedule for your goods.</p>

<h2>Who is affected by the end of the de minimis exemption</h2>

<ul>
<li><strong>Overseas sellers shipping direct to US consumers.</strong> Every order now carries duty and entry costs.</li>
<li><strong>US sellers who fulfill from abroad.</strong> Dropshippers and brands using overseas warehouses lose the duty-free route.</li>
<li><strong>US small businesses buying supplies from overseas sellers.</strong> Low-value purchases of parts, samples and materials now come with duty and possibly broker fees.</li>
<li><strong>Marketplace sellers.</strong> Platforms have changed how they collect or display duties, so check your marketplace's updated policies.</li>
<li><strong>Consumers.</strong> Buyers may face charges at delivery if the seller ships delivered duty unpaid.</li>
</ul>

<h2>What small sellers and importers should do now</h2>

<ol>
<li><strong>Classify every product.</strong> Assign the correct 10-digit HTS code. Our guide to the <a href="/blog/hs-code-on-commercial-invoice">HS code on a commercial invoice</a> explains how codes work.</li>
<li><strong>Confirm country of origin.</strong> Origin drives which additional tariffs apply. It is where the goods were made or substantially transformed, not where you ship from.</li>
<li><strong>Calculate landed cost.</strong> Add product cost, freight, duty, tariffs, broker fees and carrier fees. Then check your margin per order.</li>
<li><strong>Choose DDP or DDU.</strong> Decide whether you pay duties (delivered duty paid) or the customer does (delivered duty unpaid). Our <a href="/blog/incoterms-on-invoice">Incoterms on invoices</a> guide explains the terms.</li>
<li><strong>Pick a filing partner.</strong> Ask your carrier or a licensed customs broker how they file entries for low-value shipments and what they charge.</li>
<li><strong>Consider consolidation.</strong> Shipping stock in bulk to a US warehouse and fulfilling domestically can cost less per unit than paying entry fees on every parcel.</li>
<li><strong>Update prices and checkout messages.</strong> Tell buyers clearly whether duties are included.</li>
<li><strong>Fix your paperwork.</strong> Make sure every shipment has an accurate commercial invoice.</li>
<li><strong>Keep records.</strong> Keep entries, invoices and duty payments; they also matter for any refund claims.</li>
</ol>

<h3>Worked example: landed cost on a $40 order</h3>

<p>A small brand ships a $40 cotton tote bag direct from an overseas workshop to a US customer. Before the suspension, the parcel entered duty free. Now, suppose the combined duty and additional tariffs on that product and origin total 20% of the $40 customs value: that is $8.00. If the carrier also charges a $5.00 entry or brokerage fee, the order costs $13.00 more to deliver than before, a 32.5% increase on the product value. The figures here are illustrative; your actual rate depends on classification and origin.</p>

<p>The brand has three choices: raise the price to about $53, absorb part of the cost, or move stock in bulk to a US warehouse so that one entry covers hundreds of bags. For many small sellers, a mix of modest price rises and consolidated shipping works best. See our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> if you need to communicate an increase.</p>

<h2>Commercial invoice requirements after de minimis</h2>

<p>Under de minimis, many parcels moved with minimal data. Now the commercial invoice matters on every shipment, because CBP and your broker rely on it to classify, value and clear the goods. A complete commercial invoice includes:</p>

<ul>
<li>Seller and buyer (or consignee) names and addresses</li>
<li>Invoice number and date</li>
<li>A specific, plain-language description of each item (not "gift" or "parts")</li>
<li>Quantity, unit price and total value for each line, and the currency</li>
<li>Country of origin for each item</li>
<li>HTS code where known</li>
<li>Delivery terms, such as DDP or DAP</li>
</ul>

<p>Use the price actually paid. Undervaluation was always illegal, and with every parcel now subject to entry, inaccurate invoices are more likely to cause delays, penalties or seized goods. Our <a href="/blog/commercial-invoice-template">commercial invoice template</a> guide walks through each field, and our comparison of the <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a> explains how the documents work together.</p>

<p>You can build a clean commercial-style invoice in our free <a href="/invoice-generator/usa">US invoice generator</a>: put origin and HTS codes in each item description, delivery terms in the notes, and your order or PO number in the PO field. It creates a PDF; it does not file customs entries, so your carrier or broker still handles the declaration.</p>

<h2>Common mistakes after the de minimis exemption ended</h2>

<p>Brokers and carriers report the same problems again and again. Avoid these:</p>

<ul>
<li><strong>Vague descriptions.</strong> "Accessories", "samples" or "gift" will not let anyone classify the goods. Describe what the item is, what it is made of and what it is used for.</li>
<li><strong>Undervaluing goods.</strong> Declaring a lower value to reduce duty is customs fraud. CBP can assess penalties, and shipments can be held or seized.</li>
<li><strong>Splitting orders.</strong> Breaking one order into several parcels to stay under a value threshold no longer helps and may be treated as evasion.</li>
<li><strong>Wrong country of origin.</strong> Shipping from a warehouse in one country does not change where the goods were made.</li>
<li><strong>Surprise charges for customers.</strong> If you ship delivered duty unpaid without saying so, customers may refuse the parcel and you pay to get it back.</li>
<li><strong>Ignoring partner agency rules.</strong> Food, cosmetics, electronics and some other goods may need extra data for agencies such as the FDA or FCC, which can mean formal entry.</li>
</ul>

<p>Many of these problems were easy to ignore while the de minimis exemption applied, because CBP saw so little data. Now every parcel is checked against an entry, so mistakes surface quickly.</p>

<h2>What US buyers and small businesses should watch for</h2>

<p>If you buy low-value goods from overseas suppliers for your business, budget for duties and fees on each order and ask suppliers whether prices are delivered duty paid. Check invoices for duty and tariff charges, and keep them with your import records. If a supplier starts adding a duty line, our guide to the <a href="/blog/tariff-surcharge-on-invoice">tariff surcharge on invoice</a> explains what a fair calculation looks like.</p>

<h2>Conclusion</h2>

<p>The de minimis exemption is effectively over for commercial shipments into the US. It was suspended globally in August 2025, it stayed suspended after the IEEPA ruling, CBP has made the suspension indefinite by regulation, and the statutory repeal is due on July 1, 2027. Treat duty, classification and paperwork as a normal cost of every cross-border sale. Check CBP's guidance regularly, work with a licensed broker, and make sure every parcel carries an accurate invoice. When you need one, the free <a href="/invoice-generator">invoice generator</a> lets you create a clear, professional PDF in minutes.</p>
`,
  },
  {
    slug: "how-to-raise-prices",
    title: "How to Raise Prices Without Losing Customers (+ Letter)",
    description:
      "How to raise prices with confidence: when to do it, how much, how to tell customers, plus a free price increase letter template for tariffs and rising costs.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-price-a-product", "how-to-set-freelance-rates", "markup-vs-margin"],
    faqs: [
      {
        q: "How do I tell customers about a price increase?",
        a: "Tell them in writing, in advance, and keep it short. State the new price, the date it starts, and a brief honest reason such as higher material or tariff costs. Thank them for their business and say what stays the same. Give at least 30 days' notice, or whatever your contract requires, and offer a call for key accounts. Avoid long apologies. A clear, confident letter reads as professional; a nervous one invites negotiation.",
      },
      {
        q: "How much notice should I give before raising prices?",
        a: "Check your contracts first, because many set a notice period. Where there is none, 30 days is a common minimum for small business customers, and 60 to 90 days is courteous for large or long-term clients who need to update budgets. Subscription and consumer services may have legal notice rules depending on the country or state. For one-off project work, simply quote the new price on new proposals.",
      },
      {
        q: "How much should I raise my prices?",
        a: "Work back from your costs and target margin rather than picking a round number. Calculate how much your costs have risen, then the price you need to keep your margin. Many small businesses find that a modest increase, often in the 3% to 10% range, is accepted with little pushback, while larger jumps need more explanation or a phased approach. Test on new customers first if you are unsure.",
      },
      {
        q: "Should I apologize when raising prices?",
        a: "No. Be polite and appreciative, but do not apologize. An apology suggests the increase is unfair or negotiable. Instead, explain the reason briefly, emphasize the value and service the customer keeps getting, and give clear dates. A respectful, matter-of-fact tone tells customers this is a normal business decision, which it is. Save personal conversations for your largest or longest-standing clients.",
      },
      {
        q: "Is it better to raise prices a little each year or a lot at once?",
        a: "Small regular increases are usually easier for customers to accept and easier for you to manage. An annual review tied to costs keeps your prices in line with inflation and avoids a painful catch-up later. A large one-time rise may be necessary after years without increases or a sudden cost shock like new tariffs, but consider phasing it in or offering existing customers a short grace period.",
      },
      {
        q: "Can I raise prices because of tariffs?",
        a: "Yes, rising import costs are a legitimate reason to raise prices, and customers generally understand it. Make sure the increase reflects your real cost change. If the tariff might be temporary, a separate tariff surcharge that you can remove later may be fairer than a permanent price rise. Check your contracts for fixed prices or price adjustment clauses before changing what existing customers pay.",
      },
      {
        q: "Will I lose customers if I raise prices?",
        a: "You may lose some, usually the most price-sensitive ones, and that is not always bad. If a 10% increase costs you a few low-margin clients but raises profit from everyone else, you can end up earning more for less work. Run the numbers before you decide. Customers who value reliability and service tend to stay when the increase is reasonable and well communicated.",
      },
      {
        q: "What should a price increase letter include?",
        a: "A good price increase letter includes a clear subject line, the effective date, the old and new price or percentage change, a one or two sentence reason, what the customer continues to receive, any option to lock in current prices by ordering early, and a contact for questions. Keep it under a page. Send it by email and, for major accounts, follow up with a personal call.",
      },
      {
        q: "Do I need to update my invoices after a price increase?",
        a: "Yes. Update your quote templates, price lists, saved invoice line items and any recurring billing amounts so the new price appears from the effective date. Invoices for orders placed or work done before the effective date should usually use the old price. If you include a note on the first invoice at the new rate referencing your earlier letter, it reduces surprise and late-payment disputes.",
      },
    ],
    content: `
<p>To learn <strong>how to raise prices</strong> without losing good customers, follow five steps: calculate the price you actually need, choose an effective date, give written notice, explain the reason briefly without apologizing, and update your quotes and invoices. Most customers accept a fair, well-explained increase, especially when costs like tariffs and wages have clearly risen.</p>

<p>Raising prices is one of the most uncomfortable tasks for small business owners and freelancers, so many put it off until margins are already thin. Learning how to raise prices well protects your profit and your customer relationships at the same time. This guide covers when and how much to raise, how to communicate it, how to handle pushback and, at the end, a price increase letter template you can copy. If your costs have jumped because of tariffs or inflation, you will also find advice on whether a surcharge or a permanent increase makes more sense.</p>

<h2>Signs it is time to raise prices</h2>

<p>You do not need a crisis to justify a price rise. Common signals include:</p>

<ul>
<li><strong>Your costs have gone up.</strong> Materials, imports, rent, software, insurance or wages cost more than when you set your prices.</li>
<li><strong>Your margin has shrunk.</strong> You are busy but profit per job or product is falling.</li>
<li><strong>You have not raised prices in over a year.</strong> Even modest inflation erodes your real income every year you wait.</li>
<li><strong>You are fully booked.</strong> If demand exceeds your capacity, your price is probably too low.</li>
<li><strong>Your skills or product have improved.</strong> Experience, results and better quality justify higher rates.</li>
<li><strong>Almost nobody pushes back on quotes.</strong> A 100% acceptance rate often means you are cheap, not great at sales.</li>
</ul>

<h2>How much should you raise prices?</h2>

<p>Start from your numbers, not from what feels comfortable. The goal is usually to restore or improve your margin.</p>

<h3>Worked example: restoring your margin</h3>

<p>A small business sells a product for $50. Last year it cost $30 to make and deliver, a 40% gross margin. Costs have risen to $34 because of higher material prices and new import duties.</p>

<ul>
<li>At $50, the margin is now ($50 - $34) / $50 = 32%.</li>
<li>To restore a 40% margin, the price must be $34 / (1 - 0.40) = $56.67.</li>
<li>The owner rounds to $56.95, a 13.9% increase.</li>
</ul>

<p>If that feels too big for one step, the owner might move to $54 now and review again in six months. Our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> explains the formulas, and <a href="/blog/how-to-price-a-product">how to price a product</a> covers building a price from scratch.</p>

<h3>Worked example: what you can afford to lose</h3>

<p>A freelancer bills 100 hours a month at $60 per hour, earning $6,000. If they raise their rate to $70, they would earn the same $6,000 with about 86 hours of work. In other words, they could lose around 14% of their billable work and still be no worse off, with 14 hours a month freed up. That math is why raising rates is often less risky than it feels. For more on rate setting, see <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>

<h2>How to raise prices due to tariffs or inflation</h2>

<p>Rising costs are the easiest increase to explain, because customers see them too. But how you pass them on depends on whether the cost is likely to last.</p>

<table>
<thead>
<tr><th>Situation</th><th>Better approach</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>New tariff that may change or be refunded</td><td>Separate tariff surcharge</td><td>Easy to adjust or remove later</td></tr>
<tr><td>General inflation in wages, rent, software</td><td>Base price increase</td><td>Costs rarely fall back</td></tr>
<tr><td>Volatile commodity such as fuel or metal</td><td>Index-linked adjustment clause</td><td>Prices track the cost both ways</td></tr>
<tr><td>Prices unchanged for years</td><td>Phased base price increase</td><td>Avoids a single shock</td></tr>
</tbody>
</table>

<p>US tariff policy shows why the distinction matters. Some 2025 tariffs were later struck down by the Supreme Court and replaced with different ones, so businesses that added a clear surcharge could adjust it easily. If that approach suits you, read our guide to adding a <a href="/blog/tariff-surcharge-on-invoice">tariff surcharge on invoice</a>. If you import low-value goods, the end of the US <a href="/blog/de-minimis-exemption-end">de minimis exemption</a> may also be raising your costs.</p>

<p>Be honest about the reason. If tariffs added 4% to your costs, a 4% to 5% increase is easy to defend. Using tariffs to justify a 20% increase invites skepticism and damages trust.</p>

<h2>How to raise prices step by step</h2>

<ol>
<li><strong>Check your contracts.</strong> Fixed-price agreements, retainers and subscriptions may set notice periods or limit increases. Honor them.</li>
<li><strong>Decide the new prices.</strong> Use your cost and margin numbers. Consider rounding to clean price points.</li>
<li><strong>Segment customers.</strong> You might raise prices for new customers immediately and for existing customers with notice. Key accounts may deserve a personal call.</li>
<li><strong>Pick an effective date.</strong> The start of a month or quarter is easiest for customers' budgets. Give at least 30 days' notice unless your contract says otherwise.</li>
<li><strong>Write the price increase letter.</strong> Keep it short and clear, using the template below.</li>
<li><strong>Prepare your team and answers.</strong> Anyone who talks to customers should know the reason and how to respond.</li>
<li><strong>Update your documents.</strong> Change price lists, quote templates, saved line items, proposals and your website.</li>
<li><strong>Follow through.</strong> Apply the new price from the effective date. Inconsistent exceptions undermine the whole increase.</li>
</ol>

<h2>How to communicate the increase</h2>

<p>The way you announce a price rise matters as much as the size of it. A few principles:</p>

<ul>
<li><strong>Do not apologize.</strong> Be appreciative and polite, but treat the increase as a normal business decision.</li>
<li><strong>Keep the reason brief.</strong> One or two sentences. Long explanations sound defensive.</li>
<li><strong>Lead with value.</strong> Remind customers what they continue to get: quality, reliability, support, speed.</li>
<li><strong>Be specific.</strong> State the new price or percentage and the exact effective date.</li>
<li><strong>Offer a bridge if it fits.</strong> Letting customers order at current prices before the date can soften the change and bring cash forward.</li>
<li><strong>Use the right channel.</strong> Email for most customers, a call plus email for your biggest accounts.</li>
</ul>

<h2>Price increase letter template</h2>

<p>Copy and adapt this price increase letter. Replace the bracketed text with your details.</p>

<p><strong>Subject:</strong> Update to our pricing from [effective date]</p>

<p>Dear [Customer name],</p>

<p>Thank you for working with [Business name]. We value your business and want to give you advance notice of a change to our pricing.</p>

<p>From [effective date], our prices for [product or service] will increase by [percentage]. [Product or service] will move from [old price] to [new price]. [If listing several items: "A full updated price list is attached."]</p>

<p>This change reflects increases in our costs over the past [period], including [higher material costs / new import tariffs / wages and supplier prices]. We have absorbed these costs for as long as we could, and this adjustment allows us to keep delivering the [quality / service / turnaround] you rely on.</p>

<p>Nothing else about our service changes. [Your account manager, delivery schedule, warranty and payment terms remain the same.]</p>

<p>[Optional: Orders placed before [date] will be invoiced at current prices.]</p>

<p>If you have any questions, please reply to this email or call me on [phone number]. Thank you again for your continued support.</p>

<p>Kind regards,<br>[Your name]<br>[Title], [Business name]</p>

<h3>Short version for freelancers</h3>

<p><em>"Hi [Name], a quick note that my rate for new work will be [new rate] from [date], up from [old rate]. This reflects [rising costs / expanded experience]. Any work already scheduled before that date stays at the current rate. Thank you for the ongoing work together; I am looking forward to [next project]."</em></p>

<h2>How to raise prices by business type</h2>

<p>The basic steps are the same for everyone, but the details differ depending on what you sell.</p>

<h3>Service businesses and freelancers</h3>

<p>Raise rates for new clients first, since they have no old price to compare. For existing clients, announce the new rate with 30 to 60 days' notice and apply it to new projects or the next retainer period. Hourly freelancers can also move to project or value-based pricing, which makes comparisons with your old hourly rate less direct. If you invoice by the hour, our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers how to show rates clearly.</p>

<h3>Product sellers</h3>

<p>Product businesses have more levers. You can raise list prices, reduce standard discounts, add a minimum order value, charge separately for delivery, or introduce a premium version at a higher price. Raising prices on your best-selling items by a small amount often adds more profit than large increases on slow sellers.</p>

<h3>Retainers and subscriptions</h3>

<p>Check what your agreement says about notice and renewal. A common approach is to apply the new price from the next renewal date, with written notice before the renewal. Some customers will accept a higher price more easily if you offer an annual prepayment option at a small saving.</p>

<p>Whichever model you use, knowing how to raise prices in small, regular steps is far easier than catching up after several years of rising costs.</p>

<h2>Handling pushback</h2>

<p>Some customers will ask questions or try to negotiate. Prepare responses in advance:</p>

<ul>
<li><strong>"Why now?"</strong> Restate the reason briefly and the date of your last increase.</li>
<li><strong>"Can you keep my old price?"</strong> Offer a trade instead of a discount: a longer commitment, larger orders, upfront payment or reduced scope.</li>
<li><strong>"Your competitor is cheaper."</strong> Acknowledge it and point to what you offer that matters to this customer.</li>
<li><strong>"We need time to budget."</strong> A short grace period for a valuable customer is reasonable; an indefinite freeze is not.</li>
</ul>

<p>Accept that a few customers may leave. If they were your lowest-margin accounts, losing them can improve your business.</p>

<h2>Update your quotes and invoices</h2>

<p>Once the new prices take effect, make sure every document matches. Update your saved items and quote templates so the new price appears automatically, and apply the old price only to work ordered before the effective date. On the first invoice at the new price, a note such as "Prices updated from [date] as advised in our letter of [date]" helps avoid queries. Our list of <a href="/blog/invoice-notes-examples">invoice notes examples</a> has more wording ideas.</p>

<p>If you send quotes before invoices, our guide to the <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> explains how the two documents should line up, and our <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a> guide shows how to add a price adjustment clause for the future.</p>

<h2>Mistakes to avoid when raising prices</h2>

<ul>
<li>Waiting years, then imposing a huge one-time increase.</li>
<li>Announcing an increase with no notice or after the work is done.</li>
<li>Over-explaining or apologizing.</li>
<li>Making many quiet exceptions that defeat the purpose.</li>
<li>Blaming tariffs for an increase much larger than the tariff impact.</li>
<li>Forgetting to update invoices, so customers get billed inconsistently.</li>
</ul>

<h2>Conclusion</h2>

<p>Knowing how to raise prices is a core business skill, not a confrontation. Base the increase on real numbers, give clear notice, explain briefly, and stay consistent. Plan a regular review, perhaps once a year, so increases are small and expected. When your new prices start, open the free <a href="/invoice-generator">invoice generator</a> or choose a design from our <a href="/invoice-templates">invoice templates</a>, update your line items, and send professional invoices at your new rates.</p>
`,
  },
  {
    slug: "boi-reporting-2026",
    title: "BOI Reporting in 2026: Who Still Has to File With FinCEN",
    description:
      "BOI reporting in 2026: FinCEN's final rule exempts US companies and US persons. See who still files under the Corporate Transparency Act and what to do now.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["llc-vs-sole-proprietorship", "how-to-get-an-ein", "s-corp-vs-llc"],
    faqs: [
      {
        q: "Do I need to file a BOI report in 2026?",
        a: "If your company was created in the United States, generally no. FinCEN's final rule, effective August 14, 2026, permanently exempts entities created in the US, previously called domestic reporting companies, and their beneficial owners from BOI reporting. The requirement now applies only to certain entities formed under foreign law that have registered to do business in a US state or tribal jurisdiction, and only for their non-US beneficial owners. Check FinCEN's BOI page for current guidance.",
      },
      {
        q: "Is BOI reporting still required for LLCs?",
        a: "Not for LLCs formed in the United States. A US-formed LLC is a domestic entity, and FinCEN's March 2025 interim final rule, made permanent by a final rule in August 2026, removed the reporting requirement for domestic entities. A foreign LLC-type entity that registered to do business in a US state may still have to report its non-US beneficial owners. Your state's own laws on company formation and annual reports are separate and still apply.",
      },
      {
        q: "What is the Corporate Transparency Act?",
        a: "The Corporate Transparency Act is a federal law passed in 2021 as part of the National Defense Authorization Act. It required many small companies to report information about their beneficial owners, the people who own or control them, to FinCEN, the Treasury bureau that fights financial crime. Reporting began in 2024, was disrupted by court challenges, and was then narrowed by FinCEN in 2025 and 2026 so that it now applies only to certain foreign companies.",
      },
      {
        q: "Who must still file a BOI report?",
        a: "Entities formed under the law of a foreign country that have registered to do business in any US state or tribal jurisdiction by filing with a secretary of state or similar office, and that do not qualify for one of the exemptions, remain reporting companies. They must report their non-US beneficial owners. They do not have to report US persons as beneficial owners, and under the final rule they no longer have to report US person company applicants.",
      },
      {
        q: "What is the BOI deadline for foreign companies?",
        a: "Under FinCEN's March 2025 interim final rule, foreign reporting companies registered before March 26, 2025 had to file by April 25, 2025. Those registering on or after March 26, 2025 have 30 calendar days after receiving notice that their registration is effective. FinCEN's August 2026 final rule largely adopted the interim rule. Check the final rule and FinCEN's BOI page to confirm the current deadline for your company.",
      },
      {
        q: "What happens to BOI reports I already filed?",
        a: "FinCEN said it will delete previously reported beneficial ownership information about US persons and domestic companies from its database, including information it reasonably believes relates to US persons, and will post a notice when deletion is complete. US persons who obtained a FinCEN identifier also no longer need to update or correct the information they submitted to get it. You do not need to file anything to withdraw an earlier report.",
      },
      {
        q: "Are there penalties for not filing a BOI report?",
        a: "The Corporate Transparency Act sets civil penalties of up to $500 per day, adjusted for inflation, and criminal penalties for willful violations. FinCEN has said it will not enforce BOI penalties against US citizens or domestic reporting companies. Foreign reporting companies that remain covered should treat the obligation seriously. Ask a qualified adviser if you are unsure whether your company is covered.",
      },
      {
        q: "Is a BOI reporting email from FinCEN a scam?",
        a: "Be cautious. FinCEN has warned that it does not send initial correspondence about Corporate Transparency Act penalties by email or phone, and scammers have used BOI deadlines to demand fees or personal details. US companies no longer need to file at all, so any message pressing a domestic small business to pay for urgent BOI filing is a red flag. Verify directly on FinCEN's official website before responding.",
      },
    ],
    content: `
<p><strong>BOI reporting</strong> is no longer required for companies created in the United States. FinCEN's final rule, effective August 14, 2026, permanently exempts domestic companies and US persons from beneficial ownership information reporting under the Corporate Transparency Act. Only certain foreign companies registered to do business in a US state must still file, and only for non-US owners.</p>

<p>If you set up an LLC or corporation in the last few years, you probably heard that you had to file a BOI report or face steep penalties. Then deadlines moved, courts intervened and the rules changed again. This guide explains where BOI reporting stands in 2026, who still has to file, what happened to reports already submitted, and what small business owners should do now. It is general information based on FinCEN and Treasury sources at the time of writing, not legal advice. Check FinCEN's BOI page and a qualified adviser for your situation.</p>

<h2>What BOI reporting is</h2>

<p>Beneficial ownership information is information about the real people who own or control a company. The Corporate Transparency Act (CTA), passed in 2021, required many companies to report it to the Financial Crimes Enforcement Network (FinCEN), a Treasury bureau, to make it harder to hide money behind anonymous shell companies.</p>

<p>Under the original rules, a reporting company had to tell FinCEN about:</p>

<ul>
<li>The company itself: legal name, trade names, address, jurisdiction of formation and tax ID.</li>
<li>Each beneficial owner: anyone who owns at least 25% or exercises substantial control, with name, date of birth, address and an ID document.</li>
<li>Company applicants: the people who filed the formation or registration documents, for companies created from 2024.</li>
</ul>

<p>Because the definition captured most small LLCs and corporations, millions of small businesses were expected to file. That is why the requirement became such a concern for freelancers and small business owners who had formed an entity.</p>

<h2>Timeline: how BOI reporting changed</h2>

<table>
<thead>
<tr><th>Date</th><th>What happened</th></tr>
</thead>
<tbody>
<tr><td>January 1, 2021</td><td>Corporate Transparency Act enacted as part of the National Defense Authorization Act.</td></tr>
<tr><td>January 1, 2024</td><td>Beneficial ownership reports became due from most US and foreign reporting companies.</td></tr>
<tr><td>Late 2024 to early 2025</td><td>Federal court injunctions paused and restored the requirement several times; FinCEN extended deadlines.</td></tr>
<tr><td>March 2, 2025</td><td>Treasury announced it would not enforce BOI penalties against US citizens or domestic reporting companies.</td></tr>
<tr><td>March 26, 2025</td><td>FinCEN's interim final rule published, exempting domestic companies and US persons and giving foreign companies new deadlines.</td></tr>
<tr><td>August 11, 2026</td><td>FinCEN announced the final rule making the exemptions permanent.</td></tr>
<tr><td>August 14, 2026</td><td>Final rule took effect.</td></tr>
</tbody>
</table>

<h2>The March 2025 interim final rule</h2>

<p>The interim final rule, published March 26, 2025, was the turning point. It redefined "reporting company" to mean only entities formed under the law of a foreign country that registered to do business in a US state or tribal jurisdiction. Entities created in the United States, previously known as domestic reporting companies, were exempt.</p>

<p>The interim rule also said foreign reporting companies did not have to report any US persons as beneficial owners, and US persons did not have to report for foreign companies they owned. It set new deadlines for foreign companies: those registered before March 26, 2025 had until April 25, 2025, and those registering later had 30 calendar days after notice that their registration was effective.</p>

<h2>The August 2026 final rule</h2>

<p>On August 11, 2026, FinCEN announced a final rule that permanently removes the reporting requirement for US companies and US persons, effective August 14, 2026. According to FinCEN and Treasury, the final rule adopts the interim rule with limited changes:</p>

<ul>
<li><strong>Domestic companies are permanently exempt.</strong> All entities created in the United States, and their beneficial owners, are exempt from reporting.</li>
<li><strong>US persons are not reported.</strong> Reporting companies do not report US person beneficial owners.</li>
<li><strong>No more US company applicants.</strong> Foreign companies no longer have to report US person company applicants.</li>
<li><strong>FinCEN IDs.</strong> US persons who obtained a FinCEN identifier are relieved from updating or correcting the information they gave.</li>
<li><strong>Pooled investment vehicles.</strong> Registered foreign pooled investment vehicles are exempt from reporting US persons who control them.</li>
<li><strong>Data deletion.</strong> FinCEN will delete previously reported information on US persons and domestic companies, and will post a notice when that is complete.</li>
</ul>

<h2>Who still must file a BOI report in 2026</h2>

<p>The short answer: very few small businesses. The table below summarizes the position at the time of writing.</p>

<table>
<thead>
<tr><th>Type of entity</th><th>BOI reporting in 2026?</th></tr>
</thead>
<tbody>
<tr><td>US-formed LLC, corporation or limited partnership</td><td>No, exempt</td></tr>
<tr><td>Sole proprietor with no registered entity</td><td>No, never covered</td></tr>
<tr><td>US single-member LLC owned by a non-US person</td><td>No, exempt because the entity was created in the US</td></tr>
<tr><td>Foreign company registered to do business in a US state, with only US owners</td><td>Generally no US owners to report; check whether a filing is still required</td></tr>
<tr><td>Foreign company registered to do business in a US state, with non-US owners</td><td>Yes, report non-US beneficial owners unless an exemption applies</td></tr>
<tr><td>Entities meeting one of the 23 statutory exemptions (banks, large operating companies and others)</td><td>No</td></tr>
</tbody>
</table>

<p>"Foreign" here means formed under the law of another country. A company formed in Delaware but owned by someone in Canada is a domestic entity and is exempt. A company formed in Canada that registered with a US state to do business there is a foreign reporting company, unless an exemption applies.</p>

<h3>Example: a freelancer's LLC</h3>

<p>Maria runs a design business through a single-member LLC formed in Texas in 2023. She filed a BOI report in 2024. Under the 2026 final rule, her LLC is exempt, she does not need to update that report, and FinCEN has said it will delete previously reported information about US persons. She does not need to do anything further for BOI reporting. Her state annual report and federal tax filings still apply as normal.</p>

<h3>Example: a foreign company expanding into the US</h3>

<p>A UK limited company owned by two UK residents registers with a US state in October 2026 so it can operate there. Because it was formed under foreign law and registered to do business in a state, it is a foreign reporting company. Under the deadline set by the interim rule, it would generally have 30 calendar days after receiving notice that the registration is effective to file a BOI report listing its two non-US beneficial owners. It should confirm the deadline against the final rule and get advice.</p>

<h2>Exemptions that still matter for foreign companies</h2>

<p>The Corporate Transparency Act lists 23 types of entity that are exempt from reporting even if they would otherwise qualify. Most of them are already regulated businesses, such as banks, credit unions, securities firms, insurance companies, public accounting firms and tax-exempt organizations. Two are more relevant to growing businesses:</p>

<ul>
<li><strong>Large operating companies.</strong> An entity that employs more than 20 full-time employees in the United States, has an operating presence at a physical office in the US, and reported more than $5 million in US gross receipts or sales on its prior-year federal tax return.</li>
<li><strong>Subsidiaries of certain exempt entities.</strong> An entity whose ownership interests are controlled or wholly owned by certain exempt entities.</li>
</ul>

<p>Inactive entities that meet strict conditions are also exempt. If you run a foreign company with a US registration, review these exemptions with an adviser before filing; a company that qualifies does not need to report at all.</p>

<h3>What a foreign company's report contains</h3>

<p>A foreign reporting company that must file provides details about itself (legal name, any trade names, US address, jurisdiction of formation, the state where it first registered, and a tax identification number) and about each non-US beneficial owner (full legal name, date of birth, residential address, and an identifying document such as a passport, with an image of that document). Reports are filed online with FinCEN, and there is no FinCEN filing fee. The company must also update the report if the reported information changes, so it pays to keep an ownership register.</p>

<h2>What small business owners should do now</h2>

<ol>
<li><strong>Confirm where your entity was formed.</strong> If it was created in the US, BOI reporting no longer applies.</li>
<li><strong>Stop paying for BOI compliance you do not need.</strong> Cancel subscriptions to BOI filing services if you only own domestic entities.</li>
<li><strong>Ignore pressure to file.</strong> Be wary of letters, emails or calls urging a US company to file a BOI report for a fee.</li>
<li><strong>Keep your ownership records anyway.</strong> Banks still ask for beneficial ownership details when you open business accounts under their own customer due diligence rules, and some states have their own transparency laws.</li>
<li><strong>Watch state laws.</strong> Some states have considered or passed their own beneficial ownership disclosure requirements. Check your state's rules.</li>
<li><strong>If you own a foreign company registered in a US state,</strong> check whether you must file and when, and get advice from a qualified adviser.</li>
</ol>

<h2>Beware of BOI reporting scams</h2>

<p>The CTA attracted scammers from the start, and confusion over the rule changes has made it easier for them. FinCEN has warned that it does not send initial correspondence about CTA penalties by email or phone, and filing a BOI report directly with FinCEN has always been free. Red flags include:</p>

<ul>
<li>Messages claiming your US LLC faces immediate fines for not filing.</li>
<li>Requests for payment, bank details or ID documents through links or QR codes.</li>
<li>Official-looking letters from organizations that are not FinCEN.</li>
</ul>

<p>The same caution applies to fake invoices. Our guide to <a href="/blog/invoice-scams">invoice scams</a> explains how to spot payment requests that are not genuine.</p>

<h2>What has not changed for your business</h2>

<p>BOI reporting may be gone for most small businesses, but your other compliance tasks remain. You still need an EIN for most entities with employees or multiple owners (see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>), state annual reports and registered agents where required, federal and state tax returns, sales tax registration where you have nexus, and accurate invoicing and records. If you are deciding whether to form an entity at all, compare <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a>, and see our guide on <a href="/blog/how-to-invoice-without-a-business">how to invoice without a business</a>.</p>

<p>Good records also help if rules change again. Keep formation documents, ownership changes and invoices together, and review our advice on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Conclusion</h2>

<p>BOI reporting under the Corporate Transparency Act now applies only to certain foreign companies registered in a US state, and only for their non-US owners. If your company was formed in the US, you do not need to file, update or withdraw a report, and FinCEN says it will delete information already submitted on US persons. Stay alert to scams, keep your ownership records tidy, and check FinCEN's official BOI page if your structure changes. Then get back to running your business: create professional invoices for free with our <a href="/invoice-generator/usa">US invoice generator</a> or browse the <a href="/blog/category/tax-compliance">tax compliance guides</a> for other rules that still apply.</p>
`,
  },
  {
    slug: "us-paper-checks-phase-out",
    title: "Paper Checks Phase Out: What US Businesses Need to Know",
    description:
      "The federal paper checks phase out began September 30, 2025. What Executive Order 14247 means for businesses paid by or paying federal agencies.",
    category: "payments",
    jurisdiction: "United States",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["ach-vs-wire-transfer", "bank-details-on-invoice", "how-to-get-paid-faster"],
    faqs: [
      {
        q: "Is the government stopping paper checks?",
        a: "Yes, largely. Executive Order 14247, signed March 25, 2025, directed the Treasury to stop issuing paper checks for federal disbursements from September 30, 2025, to the extent permitted by law. That covers benefits, vendor payments, tax refunds and payments between agencies. Limited exceptions remain, for example for people without access to banking or for certain emergency, national security and law enforcement payments. Treasury proposed tighter rules on exceptions in April 2026.",
      },
      {
        q: "Will the IRS still accept paper checks?",
        a: "For now, yes. The IRS has said checks and money orders are still accepted while it phases in the transition. The executive order says payments to the federal government should be processed electronically as soon as practicable, so electronic payment is the direction of travel. Businesses already have to make federal tax deposits electronically, through EFTPS, Direct Pay for businesses or a business tax account. Check irs.gov for the latest options.",
      },
      {
        q: "How do federal contractors get paid without checks?",
        a: "Federal contractors are generally paid by electronic funds transfer to the bank account in their SAM.gov registration, under existing federal acquisition rules. The executive order strengthens that. Make sure your SAM.gov banking details are current, that the name on the account matches your registered business name, and that you watch for remittance details so you can match deposits to your invoices.",
      },
      {
        q: "What are the exceptions to the paper check phase out?",
        a: "The executive order named exceptions for individuals without access to banking or electronic payment systems, certain emergency payments where electronic payment would cause undue hardship, national security or law enforcement activities, and other circumstances the Treasury Secretary determines. Treasury's April 2026 proposed rule would let agencies issue checks without approval only in specific cases, such as some foreign payments and early disaster relief, and require Treasury approval in others.",
      },
      {
        q: "How will I get my tax refund if I do not have a bank account?",
        a: "The IRS has said it will offer alternatives for people without bank accounts, such as certain prepaid debit cards, mobile apps and digital wallets that can receive direct deposits, and that paper checks will still be issued in limited circumstances. If you file without bank details, the IRS may contact you and hold the refund until you respond. Check irs.gov and the Taxpayer Advocate Service for current options.",
      },
      {
        q: "What is the best alternative to paper checks for small businesses?",
        a: "For most US small businesses, ACH bank transfer is the best all-round replacement: it is cheap or free, widely accepted and works for both paying suppliers and getting paid. Wire transfers suit large or urgent payments. Instant payment services such as RTP and FedNow move money in seconds where your bank supports them. Card payments are convenient for customers but carry processing fees. Choose based on cost, speed and what your customers use.",
      },
      {
        q: "Are paper checks being banned for private businesses?",
        a: "No. Executive Order 14247 applies to federal government payments, not to payments between private businesses. You can still pay suppliers and accept customer payments by check. But many businesses are moving away from checks anyway, because of check fraud, slower processing and handling costs. If you still accept checks, it is worth offering electronic options alongside them and putting bank details on your invoices.",
      },
      {
        q: "Why is the government ending paper checks?",
        a: "The executive order cites fraud, cost and efficiency. Treasury's April 2026 proposed rule says checks are about 16 times more likely than electronic payments to be lost, stolen, returned undeliverable or altered, and that a check costs an average of $3.07 to issue, around 20 times the cost of an ACH payment. Treasury reported printing about 40.9 million checks in fiscal year 2025.",
      },
    ],
    content: `
<p>The federal <strong>paper checks phase out</strong> began on September 30, 2025. Under Executive Order 14247, the US Treasury stopped issuing paper checks for most federal payments, including vendor payments, benefits and tax refunds, with limited exceptions. Businesses paid by federal agencies should receive electronic payments, and payments to the government are moving online too.</p>

<p>If you sell to a federal agency, receive tax refunds, or pay federal taxes and fees, this change affects how money moves in and out of your business. This guide explains what the executive order says, what has happened since, what businesses on both sides of federal payments should do, and the best alternatives to checks for your own customers and suppliers. It reflects official IRS, Treasury and Federal Register sources at the time of writing. Rules are still being finalized, so check official guidance or a qualified adviser for your situation.</p>

<h2>The paper checks phase out: what Executive Order 14247 says</h2>

<p>Executive Order 14247, "Modernizing Payments To and From America's Bank Account", was signed on March 25, 2025. Its key provisions:</p>

<ul>
<li><strong>Federal disbursements.</strong> Effective September 30, 2025, and to the extent permitted by law, the Treasury Secretary must stop issuing paper checks for federal disbursements, including intragovernmental payments, benefits, vendor payments and tax refunds.</li>
<li><strong>Payments to the government.</strong> As soon as practicable, and to the extent permitted by law, all payments made to the federal government should be processed electronically.</li>
<li><strong>Agency transition.</strong> Agencies must move to electronic funds transfer methods such as direct deposit, debit and credit cards, digital wallets and real-time payments, and enroll recipients.</li>
<li><strong>Exceptions.</strong> Treasury must maintain limited exceptions, including for people without access to banking or electronic payments, certain emergency payments, and national security or law enforcement activities.</li>
<li><strong>Public awareness.</strong> Treasury must run a campaign to help recipients set up electronic payment options.</li>
</ul>

<p>The phrase "to the extent permitted by law" matters. The paper checks phase out is a strong default, not an absolute ban, and some checks are still issued where an exception applies.</p>

<h2>What has happened since September 30, 2025</h2>

<table>
<thead>
<tr><th>Date</th><th>Development</th></tr>
</thead>
<tbody>
<tr><td>March 25, 2025</td><td>Executive Order 14247 signed.</td></tr>
<tr><td>September 30, 2025</td><td>Effective date for Treasury to stop issuing paper checks for federal disbursements, to the extent permitted by law.</td></tr>
<tr><td>Fall 2025</td><td>IRS began phasing out paper refund checks and expanding electronic payment guidance.</td></tr>
<tr><td>January 2026</td><td>IRS published questions and answers on the order, confirming checks and money orders are still accepted for now.</td></tr>
<tr><td>April 29, 2026</td><td>Treasury's Bureau of the Fiscal Service proposed changes to 31 CFR part 208, tightening when agencies may still issue paper checks. Comments closed June 15, 2026.</td></tr>
</tbody>
</table>

<p>Treasury's April 2026 proposal gives useful context. It says about 97% of the more than 1.3 billion payments Treasury disburses each year are already electronic, yet Treasury still printed about 40.9 million checks in fiscal year 2025. It says checks are roughly 16 times more likely than electronic payments to be lost, stolen, returned or altered, and cost an average of $3.07 each to issue, about 20 times an ACH payment. At the time of writing we could not find a final version of that rule, so check the Federal Register for updates.</p>

<h3>What the proposed rule would change</h3>

<ul>
<li>Agencies could issue paper checks without Treasury approval only in specific cases, such as certain foreign payments, the first 120 days in declared disaster areas, contingency operations, national security or law enforcement, and some areas without electronic payment infrastructure.</li>
<li>Other checks, including non-recurring payments to individuals and small businesses, would need Treasury approval.</li>
<li>Paying agencies, not Treasury, would review individual hardship waiver requests.</li>
</ul>

<p>For small businesses that occasionally get a one-off payment from a federal agency, the message is clear: expect to be paid electronically and have your bank details ready.</p>

<h3>What about people without bank accounts?</h3>

<p>The order recognizes that some recipients, mostly individuals rather than businesses, do not have a bank account. For them, Treasury already offers sponsored options such as the Direct Express prepaid card for federal benefits, and the proposal allows prepaid accounts and digital wallets that meet Treasury's rules for receiving federal payments. The IRS has also said it will point unbanked taxpayers to options such as certain prepaid debit cards and mobile apps that accept direct deposit. If you are a sole proprietor who mixes personal and business money, this is a good moment to open a separate business bank account, which makes electronic payments, bookkeeping and tax time far simpler.</p>

<h2>If a federal agency pays your business</h2>

<p>Federal contractors and vendors were already generally paid by electronic funds transfer under federal acquisition rules, using the bank details in their SAM.gov registration. The paper checks phase out closes remaining gaps. To avoid delays:</p>

<ol>
<li><strong>Keep SAM.gov current.</strong> Check your registration is active and your banking details are correct. Renew it before it expires.</li>
<li><strong>Match names exactly.</strong> The account name should match your registered legal business name to avoid rejected payments.</li>
<li><strong>Include clear references on invoices.</strong> Use the contract or purchase order number and your invoice number, so the agency can match payment. Our guide to the <a href="/blog/po-number-on-invoice">PO number on an invoice</a> explains why it matters.</li>
<li><strong>Watch remittance details.</strong> Electronic payments arrive with payment information. Match each deposit to the invoice it pays. See our explainer on <a href="/blog/remittance-advice">remittance advice</a>.</li>
<li><strong>Update grant and reimbursement accounts.</strong> If you receive grants or one-off reimbursements, register bank details with the paying agency.</li>
<li><strong>Be alert to fraud.</strong> Criminals target vendors with fake requests to change bank details. Verify any change through a known contact.</li>
</ol>

<h3>Worked example: a small federal subcontract</h3>

<p>A two-person IT consultancy completes a $14,500 task for a federal agency. In the past, a one-off payment like this might occasionally have arrived by check. Now the consultancy sends its invoice with the contract number, PO number and invoice number, and confirms its SAM.gov bank details are current. Payment arrives by ACH, typically with remittance information, and the consultancy records it against the invoice the same day. No check deposit, no mail delays and no risk of a stolen check.</p>

<h2>If your business pays the federal government</h2>

<p>The order says payments to the government should go electronic as soon as practicable, but at the time of writing the IRS still accepts checks and money orders while it phases in changes. Practical steps:</p>

<ul>
<li><strong>Federal tax deposits.</strong> These must already be made electronically, through EFTPS, IRS Direct Pay for businesses or your IRS business tax account. Card and cash payments are not accepted for federal tax deposits.</li>
<li><strong>Other tax payments.</strong> Use IRS Direct Pay, your business tax account, EFTPS, or card and digital wallet options through approved processors (which charge fees).</li>
<li><strong>Fees and other federal payments.</strong> Many agencies accept payment online through Pay.gov.</li>
<li><strong>Third parties.</strong> The IRS expects payroll providers and others paying on clients' behalf to use electronic methods available to them.</li>
<li><strong>Refunds.</strong> Give bank details on returns so refunds can arrive by direct deposit. The IRS has said that if you do not, it may contact you and hold the refund until you respond.</li>
</ul>

<h2>Alternatives to paper checks</h2>

<p>Whether you deal with federal agencies or not, the paper checks phase out is a good moment to review how you pay and get paid. The main options in the US:</p>

<table>
<thead>
<tr><th>Method</th><th>Typical cost</th><th>Speed</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>ACH transfer</td><td>Low or free</td><td>Same day to a few business days</td><td>Regular supplier and customer payments</td></tr>
<tr><td>Wire transfer</td><td>Higher fixed fees</td><td>Usually same day</td><td>Large or urgent payments</td></tr>
<tr><td>Instant payments (RTP, FedNow)</td><td>Varies by bank</td><td>Seconds, 24/7</td><td>Urgent payments where both banks support it</td></tr>
<tr><td>Card payments</td><td>Processing fees per transaction</td><td>Settles in days</td><td>Customer convenience</td></tr>
<tr><td>Payment apps and digital wallets</td><td>Varies; business fees often apply</td><td>Fast</td><td>Small payments and consumers</td></tr>
</tbody>
</table>

<p>For a deeper comparison, read <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> and <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP instant payments</a>. If you want to take cards, our guide on <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a> covers setup and fees.</p>

<h2>Paper checks phase out readiness checklist</h2>

<p>Use this list to make sure the change does not interrupt your cash flow:</p>

<ol>
<li>List every federal payment your business receives: contract payments, grants, tax refunds, reimbursements.</li>
<li>Confirm each paying agency has your current bank details, and that SAM.gov is active if you are a contractor.</li>
<li>List every federal payment you make: tax deposits, estimated taxes, filing and license fees.</li>
<li>Set up the right online channel for each: EFTPS or your IRS business tax account for taxes, Pay.gov or the agency's own portal for fees.</li>
<li>Include bank account details on tax returns so refunds can be paid by direct deposit.</li>
<li>Agree a written process for changing bank details, with call-back verification to a known number.</li>
<li>Tell your bookkeeper or accountant, so electronic deposits are matched to the right invoices.</li>
</ol>

<h2>Fraud risks during the transition</h2>

<p>Every big change in how payments work creates openings for criminals. Expect messages that look like they come from Treasury, the IRS or a contracting agency, asking you to "update your payment details" because checks are ending. Treat any such request with suspicion. Log in to the official portal directly rather than clicking a link, and never give bank details or login codes in response to an unsolicited call, text or email.</p>

<p>The same applies in reverse: if a supplier suddenly asks you to send payments to a new account, verify the change by calling a number you already have on file. Our guide to <a href="/blog/invoice-scams">invoice scams</a> covers the most common tricks, including fake bank detail change requests.</p>

<h2>Should your business stop accepting checks?</h2>

<p>The executive order does not affect private payments. You can still accept checks from customers. But there are good reasons to steer customers toward electronic payments:</p>

<ul>
<li><strong>Fraud.</strong> Check fraud, including stolen and altered checks, remains a serious problem.</li>
<li><strong>Speed.</strong> Electronic payments reach your account faster, which improves cash flow.</li>
<li><strong>Admin.</strong> Fewer bank trips, fewer deposit errors, easier reconciliation.</li>
</ul>

<p>The simplest step is to put your bank transfer details on every invoice and make electronic payment the default option. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows what to include, and <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> has more ideas.</p>

<h3>Worked example: moving customers off checks</h3>

<p>A landscaping company bills 60 clients a month and half pay by check. Each check takes time to record and deposit, and payments arrive about a week after the invoice. The owner adds ACH details and a payment link to every invoice, with the note "Bank transfer preferred". Within three months, most check payers have switched, payments arrive several days sooner on average, and the owner stops making weekly bank runs.</p>

<h2>Conclusion</h2>

<p>The federal paper checks phase out is well underway. Treasury stopped issuing most federal checks from September 30, 2025, tighter rules on exceptions have been proposed, and payments to the government are moving online. If federal agencies pay you, keep your SAM.gov and bank details current and put clear references on your invoices. If you pay the government, use electronic options now. Then make electronic payment easy for your own customers too: create an invoice with your bank details in our free <a href="/invoice-generator/usa">US invoice generator</a> and browse more <a href="/blog/category/payments">payments guides</a>.</p>
`,
  },
];
