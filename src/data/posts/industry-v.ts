import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_V: PostDraft[] = [
  {
    slug: "printing-services-invoice-template",
    title: "Printing Invoice Template: Setup, Proofs and Quantities",
    description:
      "Printing invoice template for print shops and brokers: quantity tiers, setup and proof fees, paper stock, overruns, shipping and sales tax, with an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "screen-printing-invoice-template",
      "graphic-design-invoice-template",
      "estimate-template",
      "resale-certificate",
    ],
    faqs: [
      {
        q: "What is a setup fee on a printing invoice?",
        a: "A setup fee covers the work done before the first sheet is printed: preparing files, making plates or screens, calibrating color and running test sheets. It is charged once per job or per version, regardless of quantity, which is why short runs cost more per piece. Showing it as a separate line helps clients understand why reprints with the same setup are cheaper.",
      },
      {
        q: "Should I charge for printing proofs?",
        a: "Many printers include one digital PDF proof free and charge for hard-copy proofs, press checks or extra rounds caused by client changes. State the policy on the estimate. Digital proofs are fast and cheap, while hard proofs of a specific paper and press take real time and materials. If a client approves a proof with an error, the reprint is normally billable.",
      },
      {
        q: "What are overruns and underruns in printing?",
        a: "Printing rarely produces exactly the ordered quantity, because some sheets are spoiled in setup and finishing. Many printers' terms, following long-standing industry trade customs, allow delivering a small percentage over or under the order, often up to 10%, and bill for the actual quantity delivered. Say so in your terms so a client ordering 1,000 is not surprised by 1,040 or 970 on the invoice.",
      },
      {
        q: "Is printing subject to sales tax?",
        a: "In most US states with a sales tax, printed materials are tangible personal property and are taxable to the end customer. Exceptions are common for items bought for resale, some direct mail, and certain publications. A broker or agency reselling your printing usually gives you a resale certificate. Design or prepress labor may be taxable when it is part of a taxable printing job, depending on the state.",
      },
      {
        q: "How do quantity price breaks work on a print invoice?",
        a: "Unit prices fall as quantity rises because setup cost is spread over more pieces and press time grows more slowly than quantity. Printers often publish tiers such as 250, 500, 1,000 and 2,500. On the invoice, show the tier you priced, the quantity and the unit or total price so the client can compare it with the estimate and with a future reorder.",
      },
      {
        q: "Do print shops require a deposit?",
        a: "For large, custom or first-time orders, many do, commonly 50% upfront, because paper and other materials are bought specifically for the job and are hard to reuse. Repeat business clients often get net 30 terms instead. Small digital jobs are typically paid at order or pickup. State the deposit on the estimate and subtract it on the final invoice.",
      },
      {
        q: "Who owns the files and plates after a print job?",
        a: "Unless agreed otherwise, the client usually owns the artwork it supplied, while the printer owns tools it made, such as plates, dies and screens, even if the client paid a setup fee. Many printers store them for a limited time for reorders. If a client wants dies or native files you created, quote it as a separate item. Put the policy in your terms.",
      },
      {
        q: "Should shipping be on a printing invoice?",
        a: "Yes, as a separate line, with the method and number of boxes or pallets if relevant. Bulky jobs like catalogs or banners can have significant freight costs. Some states tax delivery charges when the items shipped are taxable, others do not if delivery is separately stated, so check your state's rules before adding tax to the shipping line.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A printing invoice template bills a customer for a print job. It shows the job name, item specifications (size, paper stock, ink, finishing), quantity and the price tier used, plus setup, proof, design and rush fees, shipping or delivery, sales tax where applicable, any deposit and the balance due with payment terms.</p>

<p>Print jobs are priced on a dozen variables, and clients compare your invoice with your estimate line by line. When the numbers do not match, payment stalls. This guide shows how print shops, print brokers and promotional product sellers can structure a printing invoice, how to handle quantity tiers, setup and proofs, and includes a full worked example.</p>

<h2>What is a printing invoice?</h2>
<p>A printing invoice is the bill a commercial printer, digital print shop, sign shop, screen printer or print broker sends after producing a job. It confirms the specs that were printed, the quantity delivered and the charges, and it is usually matched against the client's approved estimate and purchase order.</p>
<p>The workflow typically runs: estimate or quote, client approval and deposit, proof, approved proof, production, delivery, final invoice. Our <a href="/blog/estimate-template">estimate template</a> and the guide on <a href="/blog/quote-vs-estimate">quotes vs estimates</a> cover the first steps; this article covers the invoice.</p>

<h2>What should a printing invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Header</td><td>Shop name, address, contact, sales tax permit number if required by your state</td></tr>
<tr><td>Client and references</td><td>Client name, PO number, estimate number, job name</td></tr>
<tr><td>Specifications</td><td>Finished size, paper stock and weight, ink (4/4, 4/0, spot colors), finishing (folding, binding, lamination)</td></tr>
<tr><td>Quantity</td><td>Ordered quantity, delivered quantity, price tier</td></tr>
<tr><td>Prepress</td><td>Setup, file preparation, design time, proofs</td></tr>
<tr><td>Extras</td><td>Rush fee, variable data, mailing services, storage</td></tr>
<tr><td>Delivery</td><td>Shipping method, boxes or pallets, local delivery</td></tr>
<tr><td>Tax</td><td>Sales tax on taxable lines, or resale/exemption noted</td></tr>
<tr><td>Totals and terms</td><td>Subtotal, tax, deposit applied, balance, due date</td></tr>
</tbody></table>

<h2>How printing is priced: tiers, setup and proofs</h2>
<h3>Quantity tiers</h3>
<p>Because setup cost is fixed and running cost is variable, the per-piece price falls as quantity rises. Many shops publish tiers. Here is an illustrative example for 4/4 tri-fold brochures on 100 lb gloss text (not a market survey):</p>
<table><thead><tr><th>Quantity</th><th>Price</th><th>Per piece</th></tr></thead><tbody>
<tr><td>250</td><td>$185</td><td>$0.74</td></tr>
<tr><td>500</td><td>$240</td><td>$0.48</td></tr>
<tr><td>1,000</td><td>$345</td><td>$0.345</td></tr>
<tr><td>2,500</td><td>$610</td><td>$0.244</td></tr>
<tr><td>5,000</td><td>$980</td><td>$0.196</td></tr>
</tbody></table>
<p>Publish your own tiers as a <a href="/blog/price-list-template">price list</a> so clients can see why ordering 1,000 now beats ordering 500 twice.</p>
<h3>Setup and prepress</h3>
<p>Setup covers plates, screens, press calibration and makeready sheets. Prepress covers checking files for bleed, resolution, fonts and color mode. If you fix a client's file, bill design time hourly; if you design from scratch, it may be better handled as a separate design job like a <a href="/blog/graphic-design-invoice-template">graphic design invoice</a>.</p>
<h3>Proofs</h3>
<p>Include one PDF proof, then charge for hard proofs and additional revision rounds. Record proof approval (date and who approved) in your job file; the invoice can reference it.</p>
<h3>Rush and overruns</h3>
<p>Rush production disrupts the schedule; see <a href="/blog/rush-fee">how to charge a rush fee</a>. For overruns and underruns, many printers' terms allow a variance (often up to 10%) and bill the delivered quantity. Put that rule in your terms of sale, and see our <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions guide</a> for wording.</p>

<h2>Example printing invoice</h2>
<p>A local print shop invoices a dental practice for brochures and business cards. Prices are illustrative.</p>
<p><strong>Invoice PRT-26-0588</strong> | Riverside Print Co., Sacramento, CA | Issued: October 28, 2026 | Due: November 27, 2026 (net 30)<br>
Client: Brightsmile Dental Group | PO: BSD-221 | Estimate: EST-26-0412 | Job: Fall patient brochure</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Tri-fold brochure, 8.5 x 11 in, 100 lb gloss text, 4/4, folded (ordered 1,000; delivered 1,040)</td><td>1,040</td><td>$0.345</td><td>$358.80</td></tr>
<tr><td>Business cards, 3.5 x 2 in, 16 pt matte, 4/4, 3 names x 500</td><td>3</td><td>$48.00</td><td>$144.00</td></tr>
<tr><td>Setup and plates, brochure</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>File correction (bleed and color conversion)</td><td>0.75 hr</td><td>$80.00</td><td>$60.00</td></tr>
<tr><td>Hard-copy proof, brochure</td><td>1</td><td>$25.00</td><td>$25.00</td></tr>
<tr><td>Local delivery</td><td>1</td><td>$20.00</td><td>$20.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$652.80</td></tr>
<tr><td colspan="3">Sales tax 8.75% on printed goods and setup ($547.80), illustrative</td><td>$47.93</td></tr>
<tr><td colspan="3">Total</td><td>$700.73</td></tr>
<tr><td colspan="3">Less deposit received October 14</td><td>-$300.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$400.73</strong></td></tr>
</tbody></table>
<p>The taxable base here treats printed goods and setup as taxable and file correction, proofing and delivery as non-taxable, purely to illustrate separate lines. Actual treatment depends on the state; in California, for example, the <a href="https://www.cdtfa.ca.gov/">California Department of Tax and Fee Administration</a> publishes guidance for printers. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the math and our <a href="/blog/how-to-calculate-sales-tax">sales tax calculation guide</a> for the method.</p>

<h2>Sales tax for printers and brokers</h2>
<p>Printed items are usually tangible personal property, so they are generally taxable when sold to the end user. Key situations:</p>
<ul>
<li><strong>Selling to a broker, agency or reseller:</strong> collect a <a href="/blog/resale-certificate">resale certificate</a> and do not charge tax.</li>
<li><strong>Selling to exempt organizations:</strong> get the exemption certificate on file before invoicing; see <a href="/blog/tax-exempt-invoice">how to invoice tax-exempt customers</a>.</li>
<li><strong>Shipping:</strong> taxability of delivery charges varies; see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>.</li>
<li><strong>Out-of-state delivery:</strong> you may owe the destination state's tax if you have nexus there.</li>
</ul>
<p>This is general information, not tax advice; check your state department of revenue.</p>

<h2>How to create a printing invoice step by step</h2>
<ol>
<li><strong>Start from the approved estimate.</strong> Copy specs and pricing so the invoice matches.</li>
<li><strong>Update quantities</strong> to what was actually delivered, within your overs/unders policy.</li>
<li><strong>Add change-order items</strong> such as extra proofs or file fixes, each with a short reason.</li>
<li><strong>Apply tax line by line</strong> and record resale or exemption certificates.</li>
<li><strong>Subtract the deposit</strong> and show the balance.</li>
<li><strong>Generate the PDF</strong> in the <a href="/invoice-generator">free invoice generator</a> with a number from the <a href="/tools/invoice-number-generator">invoice number generator</a>, and send it with the delivery or right after.</li>
</ol>

<h2>Change orders, reprints and who pays for errors</h2>
<p>Most printing disputes are about who caused a problem. Settle that on paper before you invoice.</p>
<table><thead><tr><th>Situation</th><th>Usually billable?</th><th>How to show it</th></tr></thead><tbody>
<tr><td>Client changes copy after proof approval</td><td>Yes</td><td>Change order line with new setup and reprint cost</td></tr>
<tr><td>Typo in approved proof</td><td>Yes, client approved it</td><td>Reprint billed at standard price, reference proof approval date</td></tr>
<tr><td>Printer error (wrong stock, misregistration)</td><td>No</td><td>Reprint at no charge; no new invoice line, or a zero-priced line for the record</td></tr>
<tr><td>Client-supplied low-resolution images</td><td>Usually, if warned</td><td>Note the warning in the proof email; bill fixes as file correction</td></tr>
<tr><td>Rush requested after quote</td><td>Yes</td><td>Separate rush fee line</td></tr>
</tbody></table>
<p>Keep a written record of every proof, the approval and any warnings you gave. When the invoice references that record, most arguments end quickly.</p>

<h2>Print brokers and promotional products</h2>
<p>If you are a print broker or promotional products distributor, you buy from a printer and resell to the client. Your supplier invoices you (often without tax, against your resale certificate), and you invoice the client with your markup, collecting sales tax where it applies. Keep supplier costs, decoration charges and freight off your client invoice unless your agreement is cost-plus. Your client sees your price per piece, setup and shipping; your margin stays internal. Promotional items with decoration usually carry a setup or screen charge per color or per location, so list those as separate lines, just like printing setup fees.</p>

<h2>Common printing invoice mistakes</h2>
<ul>
<li><strong>Specs that differ from the estimate</strong> without explanation.</li>
<li><strong>Billing the ordered quantity</strong> when you delivered fewer.</li>
<li><strong>Hiding setup in the unit price</strong>, which makes reorders look overpriced.</li>
<li><strong>Charging tax to a reseller</strong> who gave you a certificate, or skipping tax without one.</li>
<li><strong>Unbilled proofs and file fixes</strong> that eat your margin.</li>
<li><strong>No PO number</strong> on invoices to corporate or school clients.</li>
</ul>

<h2>Payment terms for print shops</h2>
<p>Printing ties up cash in paper, ink and press time before the client sees anything, so terms should reflect who you are working with.</p>
<table><thead><tr><th>Client type</th><th>Suggested terms</th><th>Why</th></tr></thead><tbody>
<tr><td>Walk-in and new customers</td><td>Payment at order or pickup</td><td>No credit history</td></tr>
<tr><td>Large first-time orders</td><td>50% deposit, balance on delivery</td><td>Covers materials bought for the job</td></tr>
<tr><td>Established business accounts</td><td>Net 30</td><td>Repeat work, predictable payment</td></tr>
<tr><td>Schools, government, large companies</td><td>Net 30 on PO</td><td>Their AP process requires it</td></tr>
<tr><td>Agencies and brokers</td><td>Net 30, resale certificate on file</td><td>They bill their own client first</td></tr>
</tbody></table>
<p>Many shops add a late fee to overdue business accounts; our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to set one that is clear and enforceable. If a client asks for longer terms, consider an <a href="/blog/early-payment-discount">early payment discount</a> instead, which rewards fast payers without stretching your cash.</p>

<h2>Printing invoice checklist</h2>
<ol>
<li>Estimate and PO numbers are on the invoice.</li>
<li>Specs match the approved proof: size, stock, ink, finishing.</li>
<li>Quantity shown is the quantity delivered, within your overs/unders policy.</li>
<li>Setup, prepress, proofs and design time are separate lines.</li>
<li>Rush and change-order charges reference the client's request.</li>
<li>Tax is applied only to taxable lines, or a resale/exemption certificate is noted.</li>
<li>Shipping shows the method and number of cartons or pallets.</li>
<li>Deposit is subtracted with its date, and the balance and due date are clear.</li>
</ol>
<p>Shops that also design the artwork should keep design billing consistent with their print invoices, so clients can see the two costs separately at reorder time.</p>

<h2>Send cleaner print invoices</h2>
<p>A printing invoice template that repeats the approved specs, shows the delivered quantity, and separates setup, proofs, shipping and tax will match your client's estimate and get approved fast. Build yours with our <a href="/invoice-generator">free invoice generator</a>: no sign-up needed, the PDF is made in your browser, and you can download it and send it with the finished job.</p>
`,
  },
  {
    slug: "alterations-tailoring-invoice-template",
    title: "Tailoring Invoice Template: Alterations Price List",
    description:
      "Tailoring invoice template for alterations shops and seamstresses: per-garment pricing, rush fees, pickup dates and unclaimed item policy, with an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "embroidery-invoice-template",
      "salon-invoice-template",
      "price-list-template",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "How do tailors price alterations?",
        a: "Most alterations are priced per garment and per task, using a price list: hemming pants, taking in a waist, shortening sleeves, replacing a zipper. Complex work like wedding dress alterations is often quoted after a fitting, sometimes with a package price covering several fittings. Rates vary a lot by city and fabric, and delicate or lined garments usually cost more than simple cotton pieces.",
      },
      {
        q: "Should an alterations shop take a deposit?",
        a: "For small everyday jobs, many shops collect payment at pickup. For bridal, formalwear and custom tailoring, a deposit is common, often 50%, because the work takes many hours and the garment cannot be resold if the client disappears. Write the deposit on the ticket or invoice at drop-off and show it as a deduction on the final bill.",
      },
      {
        q: "What happens to clothes that are never picked up?",
        a: "Most shops post a policy, such as items not picked up within 60 or 90 days may be donated or disposed of, and print it on the claim ticket. Some states have specific laws on unclaimed property held by service businesses, including notice requirements, so check your state's rules. Contact the client in writing before disposing of anything, and keep a record of the notices.",
      },
      {
        q: "Is there sales tax on alterations?",
        a: "It depends on the state. Some states tax alterations and repair labor on clothing as a taxable service, others exempt it, and some tax only materials like zippers and buttons. If you sell new garments or accessories, those are usually taxable. Check your state's guidance and itemize labor and materials separately so the right tax applies to each line.",
      },
      {
        q: "Should I charge for a fitting?",
        a: "Many shops include fittings in the alteration price for standard work but charge for extra fittings caused by client changes, weight changes, or missed appointments. Bridal packages often include a set number of fittings. If you charge separately, list fittings as their own line with the date, so the client can see when each visit happened.",
      },
      {
        q: "What is a rush fee for alterations?",
        a: "A rush fee is an extra charge for finishing work faster than your normal turnaround, such as same-day or next-day hems for an event. Shops often add a flat amount per garment or a percentage of the alteration price. State the normal turnaround and rush pricing on your price list, and confirm the rush fee when the garment is dropped off.",
      },
      {
        q: "Do tailors need an invoice or just a receipt?",
        a: "Walk-in customers who pay at pickup usually need only a receipt that lists the garments and work done. Invoices matter for business accounts: costume departments, uniform programs, theaters, bridal boutiques and dry cleaners that send work to you. They need numbered invoices with due dates for their own records, and may want monthly statements.",
      },
      {
        q: "What if a customer is unhappy with an alteration?",
        a: "Most shops offer free adjustments within a short window if the work does not match what was agreed, as long as the garment has not been worn or washed. Writing the measurements and requested changes on the ticket at drop-off is the best protection. If you adjust for free, note it on the original invoice or ticket rather than issuing a new bill.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A tailoring invoice template bills a customer for alterations or custom tailoring. It lists each garment, the work done on it (hem, take in, zipper replacement), the price per task, materials, any rush fee, fittings, the deposit paid and the balance, plus the drop-off and pickup dates and your unclaimed item policy.</p>

<p>Alterations work is small-ticket and high-volume: a dozen hems, a jacket sleeve, a bridesmaid dress with a deadline. The paperwork has to be fast, and it has to protect you when a garment goes unclaimed or a customer disputes the price. This guide shows what to put on an alterations invoice, a per-garment pricing structure, and a worked example.</p>

<h2>What is a tailoring or alterations invoice?</h2>
<p>An alterations invoice is a bill from a tailor, seamstress or alterations shop for modifying garments. It is often combined with the claim ticket the customer gets at drop-off: the ticket records what will be done and the price, and the invoice (or receipt) confirms the final charges at pickup. Custom tailoring, where you make a garment from scratch, follows the same pattern with a larger deposit.</p>
<p>Who uses it:</p>
<ul>
<li>Independent tailors and home-based seamstresses</li>
<li>Alterations counters inside dry cleaners and bridal shops</li>
<li>Costume and uniform alteration services billing businesses</li>
<li>Custom suit and dressmakers</li>
</ul>
<p>Service businesses with similar walk-in workflows, like salons, use comparable paperwork; see the <a href="/blog/salon-invoice-template">salon invoice template</a>.</p>

<h2>What to include on a tailoring invoice</h2>
<table><thead><tr><th>Field</th><th>Example</th><th>Why</th></tr></thead><tbody>
<tr><td>Shop details</td><td>Name, address, phone, hours</td><td>Customer knows where to pick up</td></tr>
<tr><td>Ticket or invoice number</td><td>ALT-4821</td><td>Matches the tag on the garment</td></tr>
<tr><td>Customer</td><td>Name and phone</td><td>For pickup and reminders</td></tr>
<tr><td>Drop-off and promised date</td><td>Oct 21, ready Oct 28</td><td>Sets expectations</td></tr>
<tr><td>Garment lines</td><td>Garment, color or tag, task, price</td><td>Itemized pricing</td></tr>
<tr><td>Measurements or notes</td><td>Hem to 30.5 in, break at shoe</td><td>Prevents disputes</td></tr>
<tr><td>Materials</td><td>Zipper, buttons, lining fabric</td><td>May be taxed differently</td></tr>
<tr><td>Fees</td><td>Rush fee, extra fittings</td><td>Visible extras</td></tr>
<tr><td>Deposit and balance</td><td>Deposit paid, balance at pickup</td><td>Clear payment status</td></tr>
<tr><td>Policies</td><td>Unclaimed items, adjustments window</td><td>Protects the shop</td></tr>
</tbody></table>

<h2>How much do alterations cost? A per-garment price list</h2>
<p>Prices vary widely by city, fabric and garment construction, and there is no official national survey, so the table below is illustrative only. It shows how a shop can structure prices so invoices are consistent.</p>
<table><thead><tr><th>Garment and task</th><th>Illustrative price</th></tr></thead><tbody>
<tr><td>Pants hem, plain</td><td>$15 to $20</td></tr>
<tr><td>Pants hem, cuffed or with original hem</td><td>$22 to $30</td></tr>
<tr><td>Jeans hem, original hem kept</td><td>$20 to $28</td></tr>
<tr><td>Take in or let out waist</td><td>$20 to $35</td></tr>
<tr><td>Jacket sleeves shortened (plain)</td><td>$25 to $40</td></tr>
<tr><td>Jacket sleeves shortened (working buttonholes)</td><td>$50 to $80</td></tr>
<tr><td>Shirt taper (sides)</td><td>$20 to $30</td></tr>
<tr><td>Zipper replacement (pants or skirt)</td><td>$18 to $30</td></tr>
<tr><td>Dress hem, lined</td><td>$30 to $55</td></tr>
<tr><td>Bridal gown alterations</td><td>Quoted after fitting</td></tr>
</tbody></table>
<p>Turn your own prices into a printed <a href="/blog/price-list-template">price list</a> at the counter. When customers see the list, invoice disputes drop sharply.</p>

<h2>Pickup, unclaimed garments and policies</h2>
<p>Unclaimed garments are a real cost: rack space, liability and unpaid work. Put your policy on every ticket and invoice. A typical clause: "Garments not picked up within 60 days of the ready date may be donated. We will contact you by phone and text before that date." Some states have rules on unclaimed property held by service businesses, including how and when you must notify the owner, so check your state's requirements before disposing of items.</p>
<p>Other policies worth printing on the invoice:</p>
<ul>
<li><strong>Payment due at pickup</strong>, deposit required for bridal and formalwear.</li>
<li><strong>Adjustments</strong> free within 7 days if the garment has not been worn or washed.</li>
<li><strong>Liability</strong> limits for garments with no care label or with pre-existing damage.</li>
<li><strong>Rush service</strong> pricing and availability. See our guide on <a href="/blog/rush-fee">rush fees</a>.</li>
</ul>

<h2>Example alterations invoice</h2>
<p>A customer drops off items for a wedding, including a rush job on a suit. Prices are illustrative.</p>
<p><strong>Invoice ALT-4821</strong> | Stitch and Press Alterations, Austin, TX | Drop-off: October 21, 2026 | Ready: October 25, 2026 (rush) | Issued at pickup: October 25, 2026<br>
Customer: Marcus Bell, (512) 555-0147</p>
<table><thead><tr><th>Garment</th><th>Work</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Navy suit jacket</td><td>Shorten sleeves, working buttonholes</td><td>1</td><td>$65.00</td><td>$65.00</td></tr>
<tr><td>Navy suit jacket</td><td>Take in back seam</td><td>1</td><td>$30.00</td><td>$30.00</td></tr>
<tr><td>Navy suit trousers</td><td>Hem with slight break, take in waist</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>Dress shirts (white, blue)</td><td>Taper sides</td><td>2</td><td>$25.00</td><td>$50.00</td></tr>
<tr><td>Chinos (khaki)</td><td>Plain hem</td><td>2</td><td>$18.00</td><td>$36.00</td></tr>
<tr><td>Materials</td><td>Replacement zipper, chinos (approved at drop-off)</td><td>1</td><td>$6.00</td><td>$6.00</td></tr>
<tr><td>Rush fee</td><td>4-day turnaround on suit (25% of $140)</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$267.00</td></tr>
<tr><td colspan="4">Sales tax 8.25% (illustrative; check whether your state taxes alterations)</td><td>$22.03</td></tr>
<tr><td colspan="4">Total</td><td>$289.03</td></tr>
<tr><td colspan="4">Less deposit paid at drop-off</td><td>-$100.00</td></tr>
<tr><td colspan="4"><strong>Balance due at pickup</strong></td><td><strong>$189.03</strong></td></tr>
</tbody></table>
<p>The rush fee is 25% of the suit work only ($65 + $30 + $45 = $140), not the whole order, which is fairer and easier to explain. The tax line is illustrative: some states treat alterations as a taxable repair service and others do not, so verify the rule with your state revenue department, such as the <a href="https://comptroller.texas.gov/taxes/sales/">Texas Comptroller sales tax pages</a> if you work in Texas. Our <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> overview is a useful starting point, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> checks the math.</p>

<h2>How to invoice alterations step by step</h2>
<ol>
<li><strong>Write the ticket at drop-off</strong> with garments, tasks, measurements and the promised date.</li>
<li><strong>Quote and collect any deposit</strong>, and give the customer a copy.</li>
<li><strong>Tag each garment</strong> with the ticket number.</li>
<li><strong>Note extra work</strong> discovered during the job and get approval before doing it.</li>
<li><strong>Prepare the invoice</strong> in the <a href="/invoice-generator">free invoice generator</a>, or keep a template for repeat use.</li>
<li><strong>Notify the customer</strong> when ready, and log the notice date for your unclaimed policy.</li>
<li><strong>Collect the balance and give a receipt</strong>; our <a href="/blog/payment-receipt-template">payment receipt template</a> works for walk-in customers.</li>
</ol>

<h2>Business accounts: costume, uniform and boutique work</h2>
<p>Theaters, uniform programs, bridal boutiques and dry cleaners may send you steady work and pay on account. For them, issue numbered invoices per batch or per week, include their PO or job reference, and send a monthly statement. Agree payment terms such as net 15 or net 30; our guide to <a href="/blog/net-30-payment-terms">net 30 payment terms</a> explains how to word them. For recurring weekly batches, the <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> helps you keep a rhythm.</p>

<h2>Bridal and custom tailoring: deposits and fitting schedules</h2>
<p>Wedding dresses and custom suits are the high-value end of alterations work and need more structure than a claim ticket. A typical bridal workflow:</p>
<ol>
<li><strong>Consultation and first fitting.</strong> Pin the gown, agree the work list and quote a package price.</li>
<li><strong>Deposit invoice.</strong> Often 50% of the quote, non-refundable once work begins.</li>
<li><strong>Second fitting.</strong> Check the hem, bustle and fit; note any changes in writing.</li>
<li><strong>Final fitting and pickup.</strong> Balance invoice, with any approved extras added as separate lines.</li>
</ol>
<p>Here is how a bridal invoice might look (prices illustrative):</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Hem, three layers with horsehair braid</td><td>$180.00</td></tr>
<tr><td>Take in bodice at side seams</td><td>$95.00</td></tr>
<tr><td>French bustle, 5 points</td><td>$85.00</td></tr>
<tr><td>Add cups</td><td>$30.00</td></tr>
<tr><td>Steaming and pressing</td><td>$60.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$450.00</strong></td></tr>
<tr><td>Less deposit</td><td>-$225.00</td></tr>
<tr><td><strong>Balance at final fitting</strong></td><td><strong>$225.00</strong></td></tr>
</tbody></table>
<p>Give the bride a schedule of fittings with dates on the deposit invoice, and state what happens if a fitting is missed or the event date moves.</p>

<h2>Custom garments and materials</h2>
<p>When you make a garment from scratch, the customer is buying both labor and goods. List fabric, lining, interfacing and notions as material lines (yardage x price per yard) and pattern drafting and construction as labor. This makes the invoice easier to understand and helps with sales tax, since materials incorporated into a new garment are usually taxable in states with sales tax, even where alteration labor is not.</p>

<h2>Common tailoring invoice mistakes</h2>
<ul>
<li><strong>No measurements on the ticket</strong>, which turns "too short" into an argument.</li>
<li><strong>One total for many garments</strong> with no itemization.</li>
<li><strong>Doing extra work without approval</strong>, then adding it to the bill.</li>
<li><strong>No unclaimed item policy</strong> printed on the ticket.</li>
<li><strong>Rush fees not agreed at drop-off.</strong></li>
<li><strong>Ignoring sales tax rules</strong> in states that tax alterations.</li>
</ul>

<h2>Turnaround times, rush pricing and seasonal demand</h2>
<p>Alterations demand is lumpy: graduation, prom and wedding season can triple your workload. Publish standard turnaround times and price faster service so customers self-select.</p>
<table><thead><tr><th>Service level</th><th>Turnaround</th><th>Illustrative pricing</th></tr></thead><tbody>
<tr><td>Standard</td><td>5 to 7 business days</td><td>Price list</td></tr>
<tr><td>Express</td><td>2 to 3 business days</td><td>Price list + 25%</td></tr>
<tr><td>Same or next day</td><td>Within 24 hours</td><td>Price list + 50%, subject to availability</td></tr>
<tr><td>Bridal and formalwear</td><td>4 to 8 weeks with fittings</td><td>Quoted package</td></tr>
</tbody></table>
<p>Write the service level and promised date on the ticket and invoice. If you miss a promised rush date, waive the rush fee; customers remember that, and it keeps your pricing credible.</p>

<h2>Payment methods and deposits at the counter</h2>
<p>Small alteration shops increasingly take cards and tap-to-pay at the counter, plus cash and digital wallets. A few practical rules:</p>
<ul>
<li>Take deposits by card at drop-off for any job over a set amount, for example $100.</li>
<li>Note the deposit amount and method on the ticket, so whoever is at the counter at pickup can see it.</li>
<li>Collect the balance before releasing garments.</li>
<li>For business accounts, issue a numbered invoice and accept ACH or check on agreed terms.</li>
</ul>
<p>If you use a phone or tablet for payments, our guide to <a href="/blog/card-readers-for-small-business">card readers for small businesses</a> compares the common options.</p>

<h2>Create your alterations invoice</h2>
<p>A tailoring invoice template with per-garment lines, measurements, a visible rush fee and a printed pickup policy makes each job easy to price and easy to defend. If you keep a separate cleaning or laundry service, a <a href="/blog/service-invoice-template">service invoice template</a> keeps those bills consistent too. Create yours in our <a href="/invoice-generator">free invoice generator</a>: no sign-up, the PDF is built in your browser, and you can download it, print it and hand it over at the counter.</p>
`,
  },
  {
    slug: "staffing-agency-invoice-template",
    title: "Staffing Agency Invoice Template: Bill Rate vs Pay Rate",
    description:
      "Staffing agency invoice template: bill rate vs pay rate, markup, timesheets, overtime and conversion fees, with a weekly invoice example and the math behind it.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "recruiter-invoice-template",
      "timesheet-template",
      "markup-vs-margin",
      "how-to-invoice-for-overtime",
    ],
    faqs: [
      {
        q: "What is the difference between bill rate and pay rate?",
        a: "The pay rate is the hourly wage the staffing agency pays the worker. The bill rate is the hourly price the agency charges the client for that worker. The difference covers the employer's payroll taxes, workers' compensation, insurance, benefits, recruiting costs, overhead and profit. A worker paid $20 an hour might be billed at $30, a 50% markup on pay.",
      },
      {
        q: "What is a typical staffing agency markup?",
        a: "Markups vary widely by industry, skill level, location and contract volume, and we have not found a single authoritative survey for 2026. Light industrial and clerical roles tend to carry lower percentage markups than specialized professional or IT roles. Rather than copying a market number, calculate your burden (taxes, insurance, benefits) first, then add overhead and target profit to set a markup that actually covers your costs.",
      },
      {
        q: "How do staffing agencies bill overtime?",
        a: "Under the Fair Labor Standards Act, non-exempt workers must be paid at least 1.5 times their regular rate for hours over 40 in a workweek, and some states have daily overtime rules too. Agencies usually bill overtime hours at 1.5 times the regular bill rate, or apply their markup to the overtime pay rate. The contract should state the method, and the invoice should show regular and overtime hours on separate lines.",
      },
      {
        q: "How often do staffing agencies invoice clients?",
        a: "Weekly invoicing is the norm for temporary staffing because agencies pay workers weekly and need cash flow to cover payroll. Each invoice covers one workweek and is backed by approved timesheets. Some agencies bill professional or long-term placements biweekly or monthly. Payment terms are often net 15 or net 30, and many agencies use factoring or a credit line to bridge the gap.",
      },
      {
        q: "What is a conversion fee in staffing?",
        a: "A conversion or temp-to-hire fee is what a client pays when it hires a temporary worker directly before a set period has passed, often 520 hours or a few months. The fee compensates the agency for lost future margin and recruiting. It is often a flat amount or a percentage of the worker's first-year salary that decreases with hours worked. The terms must be in the client agreement.",
      },
      {
        q: "Who pays payroll taxes for temp workers?",
        a: "When the agency is the employer of record, it pays the worker's wages, withholds income and FICA taxes, and pays the employer share of FICA, federal and state unemployment taxes and workers' compensation. Those costs are built into the bill rate, not listed separately on the client invoice. Some agreements use a cost-plus structure that shows them, but most use a single bill rate.",
      },
      {
        q: "What documents should support a staffing invoice?",
        a: "Approved timesheets are the essential backup: worker name, dates, start and end times, breaks, total regular and overtime hours, and a client supervisor approval. Many clients also require their PO number, cost center and a summary by department. Large clients often use a vendor management system, where timesheets are approved online and the invoice must match exactly.",
      },
      {
        q: "Is sales tax charged on staffing services?",
        a: "In most US states, temporary staffing is not subject to sales tax, but a few states tax certain employment or temporary help services, and local rules can apply. Check the rules in each state where your workers are placed. If tax applies, show it as a separate line on the invoice and keep exemption documentation for clients who claim one.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A staffing agency invoice bills a client for temporary or contract workers. It lists each worker, the week worked, regular and overtime hours from approved timesheets, the bill rate for each, the total per worker and the invoice total, plus the client's PO or cost center and payment terms. The pay rate and markup stay internal.</p>

<p>Staffing runs on thin margins and weekly payroll. If invoices go out late or do not match the client's timesheets, you are paying workers out of your own cash for weeks. This guide explains bill rate vs pay rate, how to calculate markup, overtime and conversion fees, and shows a complete weekly staffing invoice with the math.</p>

<h2>What is a staffing agency invoice?</h2>
<p>A staffing agency invoice is a weekly (sometimes biweekly) bill from a staffing firm to a client business for the hours worked by temporary, contract or temp-to-hire workers placed with that client. The agency is usually the employer of record: it pays wages, withholds taxes and carries workers' compensation, then recovers all of that through the bill rate.</p>
<p>It differs from a standard <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>: the workers are agency employees, not freelancers billing for themselves. It is closer to a <a href="/blog/time-and-materials-invoice">time and materials invoice</a>, where hours are multiplied by agreed rates.</p>

<h2>Bill rate vs pay rate vs markup</h2>
<table><thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
<tr><td>Pay rate</td><td>Hourly wage paid to the worker</td><td>$20.00</td></tr>
<tr><td>Burden</td><td>Employer taxes, workers' comp, insurance, benefits</td><td>About $3.00 (illustrative)</td></tr>
<tr><td>Bill rate</td><td>Hourly price charged to the client</td><td>$30.00</td></tr>
<tr><td>Markup</td><td>(Bill rate minus pay rate) divided by pay rate</td><td>50%</td></tr>
<tr><td>Gross margin</td><td>(Bill rate minus pay rate minus burden) divided by bill rate</td><td>23.3%</td></tr>
</tbody></table>
<p>Markup and margin are not the same number; confusing them is one of the costliest mistakes new agency owners make. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> explains the difference in detail.</p>

<h2>How to calculate a staffing bill rate</h2>
<p>Start from the pay rate and build up. The federal pieces of the burden are well defined:</p>
<ul>
<li><strong>Employer FICA:</strong> 7.65% of wages (6.2% Social Security up to the wage base, plus 1.45% Medicare). See the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes">IRS employment taxes overview</a>.</li>
<li><strong>FUTA:</strong> 6.0% on the first $7,000 per employee, usually reduced to an effective 0.6% after the state unemployment credit (less in credit reduction states).</li>
<li><strong>SUTA:</strong> state unemployment tax, rate set by your state and experience.</li>
<li><strong>Workers' compensation:</strong> varies hugely by job class (office work is cheap, warehouse and construction cost more).</li>
<li><strong>Other:</strong> general liability, required paid sick leave, benefits offered or required by law, payroll processing.</li>
</ul>
<p>Worked example for a $20 per hour warehouse associate (state and comp rates illustrative):</p>
<table><thead><tr><th>Cost item</th><th>Per hour</th></tr></thead><tbody>
<tr><td>Pay rate</td><td>$20.00</td></tr>
<tr><td>Employer FICA (7.65%)</td><td>$1.53</td></tr>
<tr><td>FUTA (0.6%, early in the year)</td><td>$0.12</td></tr>
<tr><td>SUTA (illustrative 2.7%)</td><td>$0.54</td></tr>
<tr><td>Workers' comp (illustrative $3.00 per $100 payroll)</td><td>$0.60</td></tr>
<tr><td>Liability, sick leave, other (illustrative)</td><td>$0.40</td></tr>
<tr><td><strong>Loaded cost</strong></td><td><strong>$23.19</strong></td></tr>
<tr><td>Bill rate at 50% markup</td><td>$30.00</td></tr>
<tr><td>Gross profit per hour</td><td>$6.81</td></tr>
</tbody></table>
<p>From the $6.81 you still pay recruiters, rent, software and bad debts. If the client negotiates you down to a 35% markup ($27.00), gross profit drops to $3.81 an hour. Do this math before quoting.</p>

<h2>Overtime, holidays and shift differentials</h2>
<p>The Fair Labor Standards Act requires overtime pay of at least 1.5 times the regular rate for non-exempt employees after 40 hours in a workweek (<a href="https://www.dol.gov/agencies/whd/overtime">US Department of Labor overtime page</a>), and some states, like California, add daily overtime. Common billing approaches:</p>
<ol>
<li><strong>Bill overtime at 1.5 x the regular bill rate</strong> (simple, most common).</li>
<li><strong>Apply the markup to the overtime pay rate</strong> (cheaper for the client, since burden on overtime is lower than full markup).</li>
<li><strong>Bill holiday and shift differential hours</strong> at the rates in the contract.</li>
</ol>
<p>See <a href="/blog/how-to-invoice-for-overtime">how to invoice for overtime</a> for line layouts.</p>

<h2>Example weekly staffing invoice</h2>
<p><strong>Invoice SA-26-1043</strong> | Keystone Staffing Partners, Columbus, OH | Week ending: Sunday, October 25, 2026 | Issued: October 27, 2026 | Due: November 10, 2026 (net 14)<br>
Client: Midway Distribution Inc. | PO: MD-7781 | Cost center: Warehouse 2</p>
<table><thead><tr><th>Worker</th><th>Position</th><th>Hours</th><th>Bill rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>R. Alvarez</td><td>Warehouse associate, regular</td><td>40.0</td><td>$30.00</td><td>$1,200.00</td></tr>
<tr><td>R. Alvarez</td><td>Warehouse associate, overtime</td><td>6.0</td><td>$45.00</td><td>$270.00</td></tr>
<tr><td>T. Nguyen</td><td>Warehouse associate, regular</td><td>38.5</td><td>$30.00</td><td>$1,155.00</td></tr>
<tr><td>K. Brooks</td><td>Forklift operator, regular</td><td>40.0</td><td>$33.00</td><td>$1,320.00</td></tr>
<tr><td>K. Brooks</td><td>Forklift operator, overtime</td><td>4.5</td><td>$49.50</td><td>$222.75</td></tr>
<tr><td>D. Price</td><td>Shift lead, second shift, regular (incl. $1.00 differential)</td><td>40.0</td><td>$35.00</td><td>$1,400.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong> (169.0 hours)</td><td><strong>$5,567.75</strong></td></tr>
</tbody></table>
<p>Notes: Timesheets approved by J. Ortiz (Midway) on October 26, 2026, attached. Temp-to-hire conversion terms per Master Services Agreement section 6. Overtime billed at 1.5 x bill rate.</p>
<p>The math: 158.5 regular hours plus 10.5 overtime hours equals 169.0 hours. Overtime bill rates are 1.5 x the regular bill rate ($30.00 x 1.5 = $45.00; $33.00 x 1.5 = $49.50). Pay rates do not appear anywhere on the invoice.</p>

<h2>How to invoice staffing clients step by step</h2>
<ol>
<li><strong>Sign a master services agreement</strong> covering bill rates, overtime method, payment terms, conversion fees and timesheet approval.</li>
<li><strong>Collect approved timesheets weekly.</strong> Use a <a href="/blog/timesheet-template">timesheet template</a> or the client's VMS.</li>
<li><strong>Reconcile hours</strong> against payroll before invoicing; they must match.</li>
<li><strong>Split regular, overtime and differential hours</strong> into separate lines per worker.</li>
<li><strong>Add client references</strong> (PO, cost center, department).</li>
<li><strong>Invoice within a day or two of week end</strong> using the <a href="/invoice-generator">free invoice generator</a>, numbered with the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Track receivables weekly.</strong> Payroll does not wait; see <a href="/blog/cash-flow-management">cash flow management</a> and <a href="/blog/invoice-discounting-vs-factoring">factoring vs invoice discounting</a> if you need to bridge the gap.</li>
</ol>

<h2>Conversion fees and direct hire</h2>
<p>When a client hires your temp directly, bill the conversion fee on its own invoice referencing the contract clause. Many agreements waive or reduce the fee after a set number of hours. Direct-hire placements (no temp period) are usually billed as a percentage of the first-year salary, with a guarantee period; invoice those separately, like a <a href="/blog/sales-commission-invoice-template">commission invoice</a>.</p>

<h2>Vendor management systems and MSP programs</h2>
<p>Larger clients often buy staffing through a vendor management system (VMS) or a managed service provider (MSP). In those programs:</p>
<ul>
<li>Workers enter time in the VMS, and the client approves it there.</li>
<li>The VMS generates invoices or a consolidated bill from approved time, and your own invoice may only be a supporting document.</li>
<li>The MSP or VMS operator typically deducts a fee from your bill rate, so the amount you receive is less than the rate shown.</li>
<li>Rate changes, overtime approvals and extensions must be entered in the system before the work, or they will not be paid.</li>
</ul>
<p>Reconcile what the VMS paid against your payroll every week. Short payments from unapproved hours or missing overtime approvals are common and easy to lose track of.</p>

<h2>Cost-plus vs bill-rate pricing</h2>
<p>Most staffing invoices use a single bill rate. Some clients, often in government or large contracts, prefer a cost-plus model, where the invoice shows the worker's pay plus burden plus a fixed fee or percentage.</p>
<table><thead><tr><th>Model</th><th>What the client sees</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Bill rate</td><td>One hourly price per worker</td><td>Simple, protects your margin details</td><td>Client cannot see cost changes, so rate increases need negotiation</td></tr>
<tr><td>Cost-plus</td><td>Pay rate, burden, fee</td><td>Transparent, passes tax increases through automatically</td><td>Exposes your costs, more reconciliation work</td></tr>
<tr><td>Fixed fee per placement</td><td>One fee for a defined project</td><td>Easy budgeting for the client</td><td>Risk of overruns falls on the agency</td></tr>
</tbody></table>
<p>Whatever you choose, include a clause allowing rate adjustments when statutory costs change, such as minimum wage increases, new paid leave laws or higher state unemployment rates. Those changes can wipe out a thin margin halfway through a contract.</p>

<h2>Common staffing invoice mistakes</h2>
<ul>
<li><strong>Invoicing unapproved hours</strong>, which leads to short payments.</li>
<li><strong>Mixing up markup and margin</strong> when quoting.</li>
<li><strong>Billing overtime at the regular rate</strong> because the contract was silent.</li>
<li><strong>Showing pay rates on the client invoice</strong> when the agreement uses bill rates only.</li>
<li><strong>Late weekly invoices</strong> that stretch your payroll float.</li>
<li><strong>Missing PO or cost center</strong>, so the client's AP team cannot route the bill.</li>
</ul>
<p>This article is general information, not legal, tax or employment advice. Employment and wage laws differ by state.</p>

<h2>Payment terms, cash flow and funding payroll</h2>
<p>The core cash flow problem in staffing is timing: you pay workers every week, but clients pay in 15, 30 or 45 days. A $5,000 weekly invoice on net 30 means you fund four to five weeks of that client's payroll yourself before the first payment arrives.</p>
<p>Ways agencies manage this:</p>
<ul>
<li><strong>Shorter terms</strong> for small clients, such as net 7 or net 15, written into the MSA.</li>
<li><strong>Credit checks</strong> and credit limits per client before placing workers.</li>
<li><strong>Payroll funding or factoring</strong>, where a funder advances most of each invoice's value for a fee.</li>
<li><strong>A business line of credit</strong> sized to a few weeks of payroll; see <a href="/blog/business-line-of-credit">how a business line of credit works</a>.</li>
<li><strong>Fast invoicing</strong>: invoices out the day after the workweek closes, not at the end of the month.</li>
<li><strong>Late fees</strong> as allowed by the contract, applied consistently.</li>
</ul>

<h2>Staffing invoice checklist</h2>
<ol>
<li>Week ending date and client references (PO, cost center, department) are shown.</li>
<li>Every line matches an approved timesheet.</li>
<li>Regular, overtime, holiday and differential hours are on separate lines.</li>
<li>Bill rates match the current rate sheet for each position.</li>
<li>Total hours on the invoice equal total hours in payroll for that client.</li>
<li>Conversion or direct-hire fees are on their own invoice.</li>
<li>Payment terms and remittance details are printed.</li>
</ol>

<h2>Invoice your placements weekly</h2>
<p>A staffing agency invoice template with worker-by-worker hours, separate overtime lines, bill rates and approved timesheets attached gets paid on schedule and keeps payroll funded. Make yours with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, the PDF is generated in your browser, and you can download it and send it every Monday.</p>
`,
  },
  {
    slug: "saas-subscription-invoice-template",
    title: "SaaS Invoice Template: Subscriptions, Seats and Proration",
    description:
      "SaaS invoice template for subscription software: plans, seats, usage charges, proration, annual billing and sales tax on SaaS, with a worked proration example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["prorated-invoice", "usage-based-billing-invoice", "recurring-invoices-guide"],
    faqs: [
      {
        q: "What should a SaaS invoice include?",
        a: "A SaaS invoice should include your company and the customer's legal details, invoice number and date, the service period, plan name, quantity of seats or units, unit price, any usage or overage charges, proration adjustments, discounts, tax by jurisdiction, total, payment status and terms. If the customer pays by card automatically, mark it paid and show the last four digits of the card.",
      },
      {
        q: "How does proration work on a SaaS invoice?",
        a: "Proration charges or credits a customer for part of a billing period when they change plans or seats mid-cycle. The usual method divides the price by the days in the period and multiplies by the days remaining. Upgrades create a prorated charge for the rest of the period, and downgrades often create a credit applied to the next invoice. Show the calculation clearly on the invoice.",
      },
      {
        q: "Is SaaS subject to sales tax in the US?",
        a: "It depends on the state. Some states, such as New York, Washington and Pennsylvania, generally tax SaaS, and Texas taxes it as a data processing service on 80% of the charge. Many others do not tax it. Once you have economic nexus in a state that taxes SaaS, you need to register, collect and file. Rules change often, so check each state's department of revenue.",
      },
      {
        q: "Do I need to charge VAT on SaaS sold to EU customers?",
        a: "For business customers in the EU, VAT on electronically supplied services is usually accounted for by the customer under the reverse charge, and your invoice should show their VAT number and a reverse charge note. For consumers, VAT is generally due at the customer's country rate, and non-EU sellers can use the One Stop Shop scheme to report it. Check the EU and your own country's rules.",
      },
      {
        q: "Should SaaS companies bill monthly or annually?",
        a: "Both are common. Monthly billing lowers the barrier for small customers but brings more failed payments and churn. Annual billing, often discounted, gives you cash upfront and fewer invoices, but the revenue is recognized over the year, not when collected. Many SaaS companies offer both and let larger customers pay annually by invoice with net 30 terms.",
      },
      {
        q: "How do I invoice usage-based SaaS charges?",
        a: "Bill the base subscription in advance and the usage in arrears. At the end of each period, add a line for each metered item showing included units, units used, overage units and the overage rate. Customers should be able to match the usage figures to a dashboard or report. Clear units, such as API calls or GB stored, prevent disputes.",
      },
      {
        q: "What is the difference between a SaaS invoice and a receipt?",
        a: "An invoice requests payment and states what is owed; a receipt confirms that payment has been received. For card-on-file subscriptions, many companies send one document that serves as both, labeled as a paid invoice. Business customers paying by bank transfer usually need a true invoice in advance, with a due date and payment instructions, to process through their accounts payable team.",
      },
      {
        q: "How should a SaaS company handle failed payments?",
        a: "Most use a dunning process: automatic card retries over several days, emails asking the customer to update the payment method, in-app notices, and finally downgrading or suspending the account. The invoice stays open until paid. Tell customers in your terms how long the grace period lasts and what happens to their data if the account is suspended.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A SaaS invoice template bills a customer for subscription software. It shows the plan, billing period, number of seats or licenses, unit price, metered usage and overages, proration for mid-cycle changes, discounts, sales tax or VAT by location, the total, and whether it was auto-charged or is due by a date under payment terms.</p>

<p>Most subscription billing platforms generate invoices automatically, but small SaaS companies, agencies reselling software and founders invoicing their first enterprise customer often need to build invoices by hand. Even with automation, you need to know what a correct SaaS invoice contains. This guide covers subscriptions, seats, usage, proration, annual contracts, sales tax on SaaS and a fully worked example.</p>

<h2>What is a SaaS subscription invoice?</h2>
<p>A SaaS invoice is a recurring bill for access to software delivered online. Unlike a one-time sale, it covers a <strong>service period</strong> (a month, quarter or year), and the amount can change each period as seats, plan tier or usage change. It follows the logic of a <a href="/blog/recurring-invoices-guide">recurring invoice</a>, with extra lines for metered usage and mid-period adjustments.</p>
<p>Common SaaS pricing models and how they appear on invoices:</p>
<table><thead><tr><th>Model</th><th>Invoice line</th><th>Billed</th></tr></thead><tbody>
<tr><td>Flat rate</td><td>Plan name, period, price</td><td>In advance</td></tr>
<tr><td>Per seat</td><td>Seats x price per seat</td><td>In advance, true-up for adds</td></tr>
<tr><td>Tiered</td><td>Tier name and its price</td><td>In advance</td></tr>
<tr><td>Usage-based</td><td>Units used x unit price</td><td>In arrears</td></tr>
<tr><td>Hybrid</td><td>Base fee plus included units plus overage</td><td>Base in advance, overage in arrears</td></tr>
</tbody></table>
<p>For a deeper look at metered pricing, see our <a href="/blog/usage-based-billing-invoice">usage-based billing invoice guide</a>.</p>

<h2>What to include on a SaaS invoice</h2>
<ul>
<li><strong>Seller details:</strong> legal company name, address, tax registration numbers (sales tax permits, VAT number if registered).</li>
<li><strong>Customer details:</strong> legal name, billing address, customer VAT number for EU B2B, PO number if required.</li>
<li><strong>Invoice number, invoice date and due date</strong>, or "paid" with date and payment method.</li>
<li><strong>Service period</strong> for each line (for example Nov 1 to Nov 30, 2026).</li>
<li><strong>Plan and quantity:</strong> plan name, seats, unit price.</li>
<li><strong>Usage:</strong> included units, used units, overage units, overage rate.</li>
<li><strong>Proration lines</strong> with the dates covered.</li>
<li><strong>Discounts and credits</strong> (annual discount, coupon, prior credit).</li>
<li><strong>Tax</strong> by jurisdiction and rate, or exemption/reverse charge note.</li>
<li><strong>Total, amount paid and amount due.</strong></li>
</ul>
<p>Number invoices sequentially, even when your payment processor creates its own IDs; the <a href="/tools/invoice-number-generator">invoice number generator</a> and our <a href="/blog/invoice-numbering-system">numbering guide</a> help.</p>

<h2>How proration works (with the math)</h2>
<p>Proration adjusts charges when a customer changes plan or seats partway through a period. The common daily method:</p>
<ol>
<li>Daily rate = period price divided by days in the period.</li>
<li>Credit for unused time on the old plan = old daily rate x days remaining.</li>
<li>Charge for remaining time on the new plan = new daily rate x days remaining.</li>
<li>Net proration = charge minus credit.</li>
</ol>
<p>Example: a customer on 10 seats at $15 per seat per month ($150) adds 5 seats on November 21 in a 30-day November billing period. Days remaining including the 21st: 10. Charge for 5 extra seats = 5 x $15 x 10/30 = $25.00. On the next invoice you bill 15 seats for December plus the $25.00 proration line. Our <a href="/blog/prorated-invoice">prorated invoice guide</a> covers other methods, such as proration by month or by the second.</p>

<h2>Example SaaS invoice (seats, usage and proration)</h2>
<p><strong>Invoice LB-2026-12-0381</strong> | Ledgerbird Inc., Wilmington, DE | Invoice date: December 1, 2026 | Due: December 31, 2026 (net 30)<br>
Customer: Harbor Freight Brokers LLC, Seattle, WA | PO: HFB-2026-55</p>
<table><thead><tr><th>Description</th><th>Period</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Team plan, per seat</td><td>Dec 1 to Dec 31, 2026</td><td>15</td><td>$15.00</td><td>$225.00</td></tr>
<tr><td>Proration: 5 seats added Nov 21</td><td>Nov 21 to Nov 30, 2026</td><td>5</td><td>$5.00</td><td>$25.00</td></tr>
<tr><td>API calls overage (100,000 included; 148,000 used)</td><td>Nov 1 to Nov 30, 2026</td><td>48 (per 1,000)</td><td>$0.40</td><td>$19.20</td></tr>
<tr><td>Additional storage (50 GB included; 72 GB used)</td><td>Nov 1 to Nov 30, 2026</td><td>22 GB</td><td>$0.10</td><td>$2.20</td></tr>
<tr><td colspan="4">Subtotal</td><td>$271.40</td></tr>
<tr><td colspan="4">Washington sales tax, Seattle, 10.35% (illustrative; verify current rate)</td><td>$28.09</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$299.49</strong></td></tr>
</tbody></table>
<p>The base subscription is billed in advance (December), while proration and usage are billed in arrears (November). Each line states its own service period, so the customer can reconcile it against their usage dashboard. Washington treats many digital services as taxable, but confirm the current local rate with the <a href="https://dor.wa.gov/">Washington Department of Revenue</a> lookup or our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Sales tax and VAT on SaaS</h2>
<h3>United States</h3>
<p>SaaS taxability is set state by state, and it changes often. Several states generally tax SaaS (for example New York, Washington and Pennsylvania), Texas taxes it as a data processing service on 80% of the charge, and many states do not tax it at all. Since the 2018 Wayfair decision, remote sellers can have economic nexus based on sales into a state, even without staff there. Read our guide to <a href="/blog/sales-tax-nexus">sales tax nexus</a> and the overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a>, and verify current rules with each state's revenue department.</p>
<h3>EU, UK and other VAT countries</h3>
<p>SaaS is an electronically supplied service for VAT purposes. For EU business customers, VAT is usually handled by the customer under the reverse charge: show their VAT number and a reverse charge statement. For consumers, VAT is due at the customer's country rate; non-EU sellers can register for the One Stop Shop. See <a href="/blog/eu-vat-one-stop-shop">the EU VAT One Stop Shop guide</a> and the European Commission's <a href="https://vat-one-stop-shop.ec.europa.eu/index_en">OSS portal</a>.</p>
<p>This is general information, not tax advice.</p>

<h2>Annual contracts, deferred revenue and enterprise invoicing</h2>
<p>Annual plans paid upfront are attractive for cash flow, but under accrual accounting (ASC 606) you recognize the revenue over the subscription term, not on the invoice date. A $12,000 annual invoice is deferred revenue that becomes $1,000 of revenue each month. Read <a href="/blog/revenue-recognition-asc-606">revenue recognition under ASC 606</a> and <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred vs accrued revenue</a> for the accounting side.</p>
<p>Enterprise customers often require:</p>
<ul>
<li>An order form or MSA reference and PO number on every invoice</li>
<li>Payment by ACH or wire on net 30 or net 45 terms</li>
<li>Invoices submitted through a supplier portal</li>
<li>A W-9 (US) and a security questionnaire before the first payment</li>
</ul>

<h2>How to invoice SaaS customers step by step</h2>
<ol>
<li><strong>Define billing rules</strong>: period, advance vs arrears, proration method, overage rates.</li>
<li><strong>Capture tax data at signup</strong>: billing address, VAT number, exemption certificates.</li>
<li><strong>Close usage</strong> at period end and export the metered totals.</li>
<li><strong>Build the invoice</strong> with base, proration, usage, discounts and tax lines. For manual invoices, the <a href="/invoice-generator">free invoice generator</a> works well.</li>
<li><strong>Charge or send</strong>: auto-charge cards and email a paid invoice; send open invoices with due dates for invoice-paying customers.</li>
<li><strong>Run dunning</strong> on failures; see <a href="/blog/recurring-payments-small-business">recurring payments for small businesses</a>.</li>
</ol>

<h2>Discounts, credits and refunds on SaaS invoices</h2>
<p>Subscription businesses issue a lot of adjustments. Show each one explicitly rather than editing the price, so revenue reports and customer records stay accurate.</p>
<ul>
<li><strong>Annual prepay discount:</strong> list the full price, then a discount line (for example "Annual plan discount, 2 months free: -$300.00").</li>
<li><strong>Coupons and promotions:</strong> name the coupon and its duration ("LAUNCH20, 20% off first 3 months").</li>
<li><strong>Service credits:</strong> for SLA breaches or outages, add a credit line referencing the incident date and the SLA clause.</li>
<li><strong>Downgrade credits:</strong> carry forward as a credit balance applied to the next invoice.</li>
<li><strong>Refunds:</strong> issue a <a href="/blog/credit-note-guide">credit note</a> against the original invoice instead of deleting or editing it.</li>
</ul>

<h2>Worked example: upgrade mid-cycle on a monthly plan</h2>
<p>A customer on the $49 per month Starter plan upgrades to the $99 per month Growth plan on day 11 of a 30-day billing period. Twenty days remain, including the upgrade day.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Credit for unused Starter time</td><td>$49 x 20/30</td><td>-$32.67</td></tr>
<tr><td>Charge for remaining Growth time</td><td>$99 x 20/30</td><td>$66.00</td></tr>
<tr><td><strong>Net proration charged now</strong></td><td></td><td><strong>$33.33</strong></td></tr>
</tbody></table>
<p>Many billing systems invoice this immediately; others add it to the next regular invoice. Either way, show both the credit and the charge with their date ranges. If you only show the net $33.33, support will get a ticket asking where it came from.</p>

<h2>Common SaaS invoicing mistakes</h2>
<ul>
<li><strong>No service period</strong> on lines, so customers cannot tell what they paid for.</li>
<li><strong>Unexplained proration amounts.</strong> Show the dates.</li>
<li><strong>Ignoring sales tax nexus</strong> as revenue grows.</li>
<li><strong>Missing VAT numbers</strong> on EU B2B reverse charge invoices.</li>
<li><strong>Booking annual payments as immediate revenue.</strong></li>
<li><strong>Sending invoices with card-on-file customers marked as unpaid</strong>, which creates double payments.</li>
</ul>

<h2>SaaS invoice checklist</h2>
<ul>
<li>Legal names, addresses and tax IDs for both parties are correct.</li>
<li>The invoice number is unique and sequential across all billing channels.</li>
<li>Each line shows its own service period.</li>
<li>Seat counts match the account's active users at the billing date.</li>
<li>Usage lines show included, used and overage units with the rate.</li>
<li>Proration lines show dates, credits and charges separately.</li>
<li>Discounts and coupons are listed as their own lines.</li>
<li>Tax is calculated for the customer's location, or an exemption or reverse charge note is shown.</li>
<li>Status is clear: paid (with method and date) or due (with date and payment instructions).</li>
<li>PO number and order form reference are included for enterprise customers.</li>
</ul>
<p>If you start by sending invoices manually, keep a simple spreadsheet of customers, plans, seat counts and renewal dates. When you outgrow it, a dedicated billing system or the <a href="/blog/stripe-invoicing-guide">Stripe invoicing setup</a> can automate the same structure.</p>

<h2>Build your SaaS invoice</h2>
<p>A SaaS invoice template that separates subscription, proration and usage lines, dates each one, and applies the right tax will survive any customer's accounts payable review. For manual or enterprise invoices, use our <a href="/invoice-generator">free invoice generator</a>: no sign-up, the PDF is built in your browser, and you can download it and send it straight to the customer's billing contact.</p>
`,
  },
  {
    slug: "gym-membership-invoice-template",
    title: "Gym Membership Invoice Template (Free + Example)",
    description:
      "Gym membership invoice template for gyms and studios: monthly dues, enrollment fees, personal training packages, freezes and recurring billing done right.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "personal-trainer-invoice-template",
      "recurring-invoices-guide",
      "yoga-instructor-invoice-template",
    ],
    faqs: [
      {
        q: "What should a gym membership invoice include?",
        a: "Include the gym's name and contact details, member name and ID, invoice number and date, membership type, billing period, monthly or annual dues, any enrollment, annual or maintenance fees, add-ons such as personal training or classes, discounts, tax if applicable, the amount charged or due, the payment method and your cancellation and freeze policy summary.",
      },
      {
        q: "Do gyms have to send invoices for monthly dues?",
        a: "Not always by law, but members who pay by automatic draft should receive a record of each charge, and many need receipts for employer wellness reimbursements, HSA-related questions or business expense claims. Corporate members and companies paying for employee memberships need proper invoices. Sending a monthly paid invoice by email is simple and reduces chargebacks from members who do not recognize a charge.",
      },
      {
        q: "Is there sales tax on gym memberships?",
        a: "Some states and cities tax gym and health club memberships, and many do not. A few tax certain fees but not others, or tax memberships in some localities only. Personal training sessions may be treated differently from membership dues. Check your state and local revenue rules, and show any tax as a separate line on the invoice so members can see it.",
      },
      {
        q: "Can a gym charge an annual fee in addition to monthly dues?",
        a: "Yes, many gyms charge an annual maintenance or enhancement fee, but it must be disclosed in the membership agreement before the member signs. Surprise fees are a common source of complaints and chargebacks. On the invoice, label it clearly with the period it covers and the date it is charged, rather than burying it in the monthly line.",
      },
      {
        q: "Are there laws on gym membership cancellations?",
        a: "Yes. Many states have health club or health spa statutes that set contract rules, often including a short cancellation window after signing, limits on contract length and rights to cancel for relocation or disability. Many states also have automatic renewal laws for online subscriptions. The FTC's 2024 click-to-cancel rule was vacated by a federal appeals court in 2025, but other federal and state laws still apply.",
      },
      {
        q: "How should personal training packages appear on an invoice?",
        a: "Show the package as its own line, such as 10 sessions at a stated price, with the purchase date, expiry date if any, and the number of sessions used and remaining. If the client pays per session, list each session date. Clear tracking prevents disputes about unused sessions and helps when a member asks for a refund or transfer.",
      },
      {
        q: "What is a membership freeze fee?",
        a: "A freeze fee is a smaller monthly charge that holds a membership open while the member is not using it, for example during travel or injury. It keeps their rate locked and avoids a new enrollment fee later. Policies vary: some gyms freeze for free with a doctor's note. On the invoice, show the freeze period and the reduced fee instead of the normal dues.",
      },
      {
        q: "How do gyms invoice corporate memberships?",
        a: "A corporate account usually receives one monthly invoice listing each enrolled employee or the number of members, the per-member rate, any company discount and the employee share if costs are split. Include the company's PO number and a roster summary. Corporate clients often pay by ACH on net 30 terms, unlike individual members who pay by card or bank draft.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A gym membership invoice records a member's charges for a billing period: monthly or annual dues, enrollment or annual fees, add-ons like personal training, classes or towel service, freezes and discounts, tax where applicable, and whether the amount was auto-drafted or is due. It also summarizes key terms like cancellation and freeze rules.</p>

<p>Gyms, boutique studios and climbing walls live on recurring revenue, and most members pay by automatic draft. Invoices and receipts may seem optional, but they prevent chargebacks, satisfy corporate wellness programs and settle disputes about fees. This guide shows what a gym membership invoice should contain, how to bill training packages and freezes, legal points on recurring billing, and a worked example.</p>

<h2>What is a gym membership invoice?</h2>
<p>A gym membership invoice is a bill or paid statement for access to a fitness facility over a set period. For members on automatic draft, it often serves as a receipt, showing the charge and the card or account used. For corporate accounts and members who pay manually, it is a true invoice with a due date.</p>
<p>It covers several kinds of charges:</p>
<table><thead><tr><th>Charge</th><th>How it is billed</th><th>Frequency</th></tr></thead><tbody>
<tr><td>Enrollment or initiation fee</td><td>One-time at signup</td><td>Once</td></tr>
<tr><td>Membership dues</td><td>Monthly, quarterly or annual</td><td>Recurring</td></tr>
<tr><td>Annual maintenance fee</td><td>Fixed date each year</td><td>Annual</td></tr>
<tr><td>Personal training</td><td>Per session or package</td><td>As purchased</td></tr>
<tr><td>Class packs or premium classes</td><td>Per pack</td><td>As purchased</td></tr>
<tr><td>Add-ons</td><td>Locker, towel service, childcare</td><td>Monthly</td></tr>
<tr><td>Freeze fee</td><td>Reduced monthly charge</td><td>During freeze</td></tr>
<tr><td>Late or failed payment fee</td><td>Per occurrence, if in contract</td><td>As needed</td></tr>
</tbody></table>

<h2>What to include on a gym membership invoice</h2>
<ul>
<li><strong>Gym details:</strong> legal business name, address, phone, email.</li>
<li><strong>Member details:</strong> name, member ID, membership type (individual, couple, family, student).</li>
<li><strong>Invoice number and date</strong>, plus the billing period (for example November 1 to 30, 2026).</li>
<li><strong>Line items</strong> for dues, fees, training and add-ons, each with quantity and price.</li>
<li><strong>Discounts</strong> such as corporate, student or prepaid annual.</li>
<li><strong>Tax</strong> if your state or city taxes memberships or services.</li>
<li><strong>Payment status:</strong> paid by card ending 4421 on November 1, or due by a date.</li>
<li><strong>Policy summary:</strong> how to cancel, freeze rules, notice period.</li>
</ul>
<p>Personal trainers who rent space or work independently should use a <a href="/blog/personal-trainer-invoice-template">personal trainer invoice template</a> instead, and studio teachers can see the <a href="/blog/yoga-instructor-invoice-template">yoga instructor invoice template</a>.</p>

<h2>How to bill personal training packages and classes</h2>
<p>Personal training is often the most profitable line in a gym and the most disputed. Make packages easy to track:</p>
<ol>
<li><strong>Sell in packages</strong> (for example 5, 10 or 20 sessions) with a price per package and an expiry date stated at purchase.</li>
<li><strong>Show sessions used and remaining</strong> on each monthly invoice or statement.</li>
<li><strong>State the late-cancel rule</strong> (for example sessions cancelled with under 24 hours' notice are counted as used).</li>
<li><strong>Bill recurring training separately</strong> from dues, so members can cancel one without the other.</li>
</ol>
<p>Our guide to <a href="/blog/personal-trainer-rates">personal trainer rates</a> covers pricing, and <a href="/blog/cancellation-fee-invoice">cancellation fee invoices</a> show how to bill no-shows.</p>

<h2>Example gym membership invoice</h2>
<p>A member on monthly dues with an add-on and a training package, paid by automatic draft. Prices are illustrative.</p>
<p><strong>Invoice GYM-26-11-2047</strong> | Northside Strength and Fitness LLC, Columbus, OH | Invoice date: November 1, 2026 | Billing period: November 1 to 30, 2026<br>
Member: Priya Shah | Member ID: 20471 | Membership: Individual, month-to-month</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly membership dues, November 2026</td><td>1</td><td>$49.00</td><td>$49.00</td></tr>
<tr><td>Annual maintenance fee (charged each November, per agreement)</td><td>1</td><td>$39.00</td><td>$39.00</td></tr>
<tr><td>Towel service add-on</td><td>1</td><td>$8.00</td><td>$8.00</td></tr>
<tr><td>Personal training package, 10 sessions (expires May 1, 2027)</td><td>1</td><td>$550.00</td><td>$550.00</td></tr>
<tr><td>Corporate wellness discount (10% on dues)</td><td>1</td><td>-$4.90</td><td>-$4.90</td></tr>
<tr><td colspan="3">Subtotal</td><td>$641.10</td></tr>
<tr><td colspan="3">Sales tax (if your state or city taxes memberships; none applied in this example)</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total charged</strong></td><td><strong>$641.10</strong></td></tr>
<tr><td colspan="3">Paid by auto-draft, Visa ending 4421, November 1, 2026</td><td>-$641.10</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$0.00</strong></td></tr>
</tbody></table>
<p>Training sessions used: 0 of 10. To cancel your membership, give 30 days' written notice at the front desk or by email; freezes are $10 per month for up to 3 months. The tax line is a placeholder: whether dues, training or add-ons are taxable depends on your state and city, so check with your revenue department and the <a href="/tools/sales-tax-calculator">sales tax calculator</a>. Our <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> guide is a starting point.</p>

<h2>Recurring billing rules gyms must follow</h2>
<p>Gym billing draws more consumer complaints than most industries, and several layers of law apply:</p>
<ul>
<li><strong>State health club laws.</strong> Many states regulate health club contracts, commonly including a short cancellation window after signing (often a few business days), caps on contract length, and rights to cancel for relocation, disability or death. Check your state attorney general's consumer protection pages.</li>
<li><strong>Automatic renewal laws.</strong> Many states require clear disclosure of renewal terms, affirmative consent and an easy way to cancel, especially for memberships sold online.</li>
<li><strong>Federal rules.</strong> The FTC's 2024 "click-to-cancel" amendments to its Negative Option Rule were vacated by the Eighth Circuit in July 2025 before taking effect. The Restore Online Shoppers' Confidence Act (ROSCA) still applies to online sign-ups, and the FTC continues to bring cases; see the <a href="https://www.ftc.gov/business-guidance">FTC business guidance</a> pages.</li>
<li><strong>Card network rules.</strong> Recurring charges need clear descriptors and cancellation handling to limit chargebacks; see <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a>.</li>
</ul>
<p>This is general information, not legal advice. Have your membership agreement reviewed for your state.</p>

<h2>How to set up gym membership billing step by step</h2>
<ol>
<li><strong>Write the membership agreement</strong> with dues, all fees, renewal, freeze and cancellation terms.</li>
<li><strong>Choose a billing date</strong> (same day each month for everyone, or the signup anniversary). See <a href="/blog/billing-cycle">billing cycles explained</a>.</li>
<li><strong>Collect payment authorization</strong> for card or ACH drafts in writing.</li>
<li><strong>Generate a monthly invoice or paid statement</strong> for each member; for small studios, the <a href="/invoice-generator">free invoice generator</a> is enough.</li>
<li><strong>Handle failed payments</strong> with retries, a notice and a clear late-fee policy; see <a href="/blog/recurring-payments-small-business">recurring payments for small businesses</a>.</li>
<li><strong>Process freezes and cancellations</strong> promptly, confirming in writing with the final billing date.</li>
</ol>

<h2>Corporate memberships and wellness programs</h2>
<p>Employers that subsidize gym access want one consolidated invoice, not a stack of member receipts. A typical corporate invoice shows:</p>
<table><thead><tr><th>Line</th><th>Example</th></tr></thead><tbody>
<tr><td>Corporate rate, active members, November 2026</td><td>42 members x $35.00 = $1,470.00</td></tr>
<tr><td>New enrollments (enrollment fee waived per agreement)</td><td>3 members, $0.00</td></tr>
<tr><td>Employee-paid portion (billed to members directly)</td><td>Shown for information only</td></tr>
<tr><td>Total due from company</td><td>$1,470.00, net 30</td></tr>
</tbody></table>
<p>Attach a roster of member names or IDs, and agree how often the company will update it. Some wellness platforms pay gyms per visit instead of per member; in that case, invoice the platform monthly with visit counts by date.</p>

<h2>Freezes, transfers and prorated first months</h2>
<p>Three situations generate most member billing questions:</p>
<ol>
<li><strong>Prorated first month.</strong> If a member joins on November 18 and you bill everyone on the 1st, charge the remaining days (for $49 dues in a 30-day month, 13 days x $49 / 30 = $21.23), then full dues from December 1. Show the dates. Our <a href="/blog/prorated-invoice">prorated invoice guide</a> covers the formula.</li>
<li><strong>Freezes.</strong> Replace the dues line with a freeze line for each frozen month and state the resume date.</li>
<li><strong>Transfers and upgrades.</strong> Moving from individual to family, or between locations, should appear as a dated plan change, not a new membership with a second enrollment fee, unless the agreement says otherwise.</li>
</ol>
<p>Writing these rules into your membership agreement, and showing them consistently on invoices, prevents most front-desk arguments.</p>

<h2>Common gym billing mistakes</h2>
<ul>
<li><strong>Undisclosed annual fees</strong> that surprise members and trigger chargebacks.</li>
<li><strong>Charging after a valid cancellation</strong>, a top source of complaints.</li>
<li><strong>Bundling training into dues</strong> so members cannot see what they pay for.</li>
<li><strong>No sessions-remaining count</strong> for training packages.</li>
<li><strong>Unclear billing descriptors</strong> on card statements.</li>
<li><strong>Ignoring local tax</strong> on memberships in jurisdictions that tax them.</li>
</ul>

<h2>Payment methods, failed drafts and late fees</h2>
<p>Most gyms bill dues by card on file or ACH draft. Each has trade-offs:</p>
<table><thead><tr><th>Method</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Card on file</td><td>Easy signup, instant authorization</td><td>Card expirations, higher processing fees, chargeback risk</td></tr>
<tr><td>ACH bank draft</td><td>Lower fees, accounts rarely expire</td><td>Returns take days to show up, needs written authorization</td></tr>
<tr><td>Annual prepay</td><td>Cash upfront, fewer failed payments</td><td>Refund questions if member moves or cancels</td></tr>
<tr><td>Invoice and pay (corporate)</td><td>Suits employers</td><td>Net terms delay cash</td></tr>
</tbody></table>
<p>When a draft fails, retry it, notify the member the same day and give a short window to update their payment method before charging a returned payment fee. Any late or returned payment fee must be in the membership agreement, and some states limit the amount. For processing costs, see our overview of <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<h2>Gym membership invoice checklist</h2>
<ol>
<li>Member name, ID and membership type are correct.</li>
<li>Billing period dates are shown.</li>
<li>Each fee (dues, annual fee, add-ons, training) is a separate line.</li>
<li>Discounts reference the program (corporate, student, family).</li>
<li>Training packages show sessions used and remaining.</li>
<li>Tax is applied only where your state or city requires it.</li>
<li>Payment status and method are clear.</li>
<li>Cancellation and freeze policy is summarized.</li>
</ol>

<h2>Send clear gym membership invoices</h2>
<p>Corporate wellness accounts deserve their own monthly invoice listing enrolled employees and the company rate; our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> shows how to keep those consistent. A gym membership invoice template with itemized dues, fees, training packages and a short policy summary keeps members informed and chargebacks low. Create yours with our <a href="/invoice-generator">free invoice generator</a>: there is no sign-up, the PDF is built in your browser, and you can download it and email it to members or corporate clients in minutes.</p>
`,
  },
];
