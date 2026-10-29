import type { PostDraft } from "../blog";

export const FORMAT_TEMPLATE_POSTS: PostDraft[] = [
  {
    slug: "quotation-format",
    title: "Quotation Format: Free Sample for Word and Excel",
    description:
      "A clear quotation format with every field explained, a worked quotation sample with VAT, and step-by-step setup for a quotation format in Word or Excel.",
    category: "invoicing-basics",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-vs-quotation", "invoice-vs-estimate", "proforma-invoice-guide"],
    faqs: [
      {
        q: "What is the format of a quotation?",
        a: "A standard quotation format has a header with your business details, the word Quotation, a quote number, the date and a validity date. Below that come the customer's details, an itemised price table with quantities and rates, any tax, the total, and the terms on which you will supply. It ends with acceptance instructions and a signature or stamp line.",
      },
      {
        q: "Is a quotation legally binding?",
        a: "A quotation is normally treated as an offer. Once the customer accepts it in writing, by purchase order or by clear conduct, it can form a binding contract on the quoted terms. That is why a validity period and clear terms matter. Rules vary by country, so take local advice for large or unusual contracts.",
      },
      {
        q: "What is the difference between a quotation and an estimate?",
        a: "A quotation is a fixed price for a defined scope that you commit to if accepted within the validity period. An estimate is an approximate figure that may change as the work progresses. If you cannot commit to a price yet, call the document an estimate and say what could change it.",
      },
      {
        q: "How long should a quotation be valid?",
        a: "Many businesses use 15 to 30 days, and shorter periods where material prices or exchange rates move quickly. State the validity as a real date, such as 'Valid until 22 November 2026', rather than a number of days, so nobody has to work it out.",
      },
      {
        q: "Should a quotation include VAT or GST?",
        a: "If you are registered for VAT or GST and the supply is taxable, show the tax separately and the tax-inclusive total, so the customer knows exactly what they will pay. If you quote prices excluding tax, say so clearly next to the total to avoid disputes later.",
      },
      {
        q: "Can I change the price after a customer accepts my quotation?",
        a: "Not on your own, once the customer has accepted within the validity period. An accepted quotation can bind you to the quoted price, so any change needs the customer's written agreement. If costs could move, say so on the quote, for example 'Steel prices subject to change after 7 days', or quote a shorter validity. For genuine scope changes, issue a revised quotation and get it accepted before you do the extra work.",
      },
      {
        q: "Does a quotation need a signature or company stamp?",
        a: "Usually it is not a legal requirement, but many buyers expect one. In India, Pakistan and the Gulf, corporate and government purchasers often want quotations on letterhead with a signature and company stamp before they will consider them. Elsewhere a typed name and title is normally enough. If the buyer has a vendor form or tender instructions, follow those exactly, because an unsigned quote can be rejected on a technicality.",
      },
      {
        q: "What is the difference between a quotation and a proforma invoice?",
        a: "A quotation offers a price before the customer has decided to buy. A proforma invoice comes after the customer has agreed, and shows exactly what the final invoice will contain so they can arrange payment, approvals or an import license. Neither is a tax invoice or a demand for payment in the legal sense. Send the quote first, then a proforma only if the buyer asks for one.",
      },
      {
        q: "How do I write a quotation for services instead of goods?",
        a: "Use the same layout, but describe the work in deliverables rather than items. State the scope, the number of revision rounds or visits included, the timeline and what is excluded. Price it per hour, per day or as a fixed fee, and say what happens if the work runs over, for example 'Additional hours billed at AED 250 per hour'. A clear scope is what stops a service quote turning into a dispute.",
      },
      {
        q: "How should I number a revised quotation?",
        a: "Keep the original number and add a revision suffix, such as QT-2026-045-R1, then R2 for the next change. Put a new date and validity date on each revision and write 'This revision replaces QT-2026-045' near the top. The buyer can then see which version is current, and your records show how the offer changed. Never reuse the same number for a different customer or job.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A quotation format is a fixed layout for offering a price before work starts. It shows your business details, the title "Quotation", a quote number, the issue date and a valid-until date, the customer's details, an itemised table of quantities, rates and amounts, tax, the total, your terms (payment, delivery, exclusions) and how the customer accepts the quote.</p>

<p>Customers compare quotations side by side, so a clean, consistent quotation format makes yours easier to approve. This guide walks through each field, gives a full quotation sample with VAT, and shows how to build the same quotation format in Word or Excel. When the customer says yes, you can turn the agreed figures into a proper invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a quotation and when do you send one?</h2>
<p>A quotation (often shortened to "quote") is a written offer to supply goods or services at a stated price, for a stated period. It is common in trading, construction, fit-outs, IT hardware, printing, events and any B2B purchase where the buyer's finance team needs a figure before raising a purchase order.</p>
<p>In India, Pakistan and the UAE in particular, corporate and government buyers often ask for two or three competing quotations before they approve a purchase. A quotation that is missing a validity date, a tax line or a clear scope is usually the first one to be set aside.</p>
<p>A quotation is not a request for payment. That is the job of the invoice you issue later. If you are unsure which document fits, our explainer on <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> covers the difference in detail, and <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> explains when an estimate is the safer choice.</p>

<h2>Standard quotation format: the fields to include</h2>
<p>There is no single legal quotation format, but buyers expect these fields. Leave any of them out and you invite questions or delays.</p>
<table><thead><tr><th>Field</th><th>What to enter</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Business header</td><td>Legal name, address, phone, email, logo</td><td>Identifies the supplier for the buyer's vendor records</td></tr>
<tr><td>Document title</td><td>"Quotation" (or "Quote")</td><td>Stops the buyer treating it as an invoice</td></tr>
<tr><td>Quote number</td><td>Unique, e.g. QT-2026-045</td><td>Lets the buyer reference it on their purchase order</td></tr>
<tr><td>Date and valid-until date</td><td>e.g. 23 Oct 2026, valid until 22 Nov 2026</td><td>Protects you if costs rise later</td></tr>
<tr><td>Customer details</td><td>Company name, contact person, address</td><td>Shows who the offer is addressed to</td></tr>
<tr><td>Tax registration</td><td>TRN, NTN/STRN or GSTIN where registered</td><td>Buyers often need it to approve a supplier</td></tr>
<tr><td>Item table</td><td>Description, quantity, unit, rate, amount</td><td>The heart of the quote; makes comparison easy</td></tr>
<tr><td>Subtotal, tax and total</td><td>Tax rate and amount on separate lines</td><td>Removes doubt about whether prices include tax</td></tr>
<tr><td>Terms</td><td>Payment terms, advance, delivery time, warranty, exclusions</td><td>Sets the conditions the price depends on</td></tr>
<tr><td>Acceptance</td><td>Signature line, or "accept by PO quoting QT-2026-045"</td><td>Makes it clear how the offer becomes an order</td></tr>
</tbody></table>
<p>Number quotes in their own series (QT-) so they never clash with invoice numbers. Our <a href="/tools/invoice-number-generator">number generator</a> can produce a consistent prefix-year-sequence format for either.</p>

<h2>Quotation sample with VAT (worked example)</h2>
<p>Here is a quotation sample from a Dubai office-furniture supplier to a new client. UAE VAT is charged at 5% on this supply, and prices are in AED.</p>
<p><strong>Quotation QT-2026-045</strong> · Date: 23 October 2026 · Valid until: 22 November 2026<br>To: Harbour Logistics LLC, Attn: Procurement Manager</p>
<table><thead><tr><th>#</th><th>Description</th><th>Qty</th><th>Rate (AED)</th><th>Amount (AED)</th></tr></thead><tbody>
<tr><td>1</td><td>Ergonomic office chair, mesh back, black</td><td>6</td><td>450.00</td><td>2,700.00</td></tr>
<tr><td>2</td><td>Workstation desk 140 × 70 cm, white oak finish</td><td>3</td><td>1,200.00</td><td>3,600.00</td></tr>
<tr><td>3</td><td>Delivery and on-site assembly (Dubai)</td><td>1</td><td>350.00</td><td>350.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>6,650.00</td></tr>
<tr><td colspan="4">VAT 5%</td><td>332.50</td></tr>
<tr><td colspan="4"><strong>Total</strong></td><td><strong>6,982.50</strong></td></tr>
</tbody></table>
<p>The maths: 6 × 450 = 2,700; 3 × 1,200 = 3,600; plus 350 gives a subtotal of 6,650. VAT at 5% is 332.50, so the total is 6,982.50.</p>
<p><strong>Terms on this quotation:</strong></p>
<ul>
<li>50% advance (AED 3,491.25) with the purchase order; balance on delivery.</li>
<li>Delivery within 10 working days of the advance.</li>
<li>Prices are valid until 22 November 2026 and assume ground-floor or lift access.</li>
<li>Warranty: 2 years on chair mechanisms and desk frames.</li>
<li>To accept, send a purchase order quoting QT-2026-045.</li>
</ul>
<p>If you are quoting in the UAE, our <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a> guide explains what the follow-up tax invoice must show. For Pakistan, see the sales tax invoice guide, which covers NTN and STRN.</p>

<h2>How to make a quotation format in Word</h2>
<p>Word is the most common tool for quotations because it is easy to send as a document or PDF. A simple build:</p>
<ol>
<li><strong>Set up the header.</strong> Insert your logo on the left and your business name, address and tax number on the right. Use Insert &gt; Header so it repeats on every page of long quotes.</li>
<li><strong>Add the title block.</strong> Type "QUOTATION" in a large heading, then a small two-column table for quote number, date, valid-until date and your reference.</li>
<li><strong>Add the customer block.</strong> A two-column table works well: "Quotation for" on the left, project or site address on the right.</li>
<li><strong>Insert the item table.</strong> Five columns: #, Description, Qty, Rate, Amount. Leave a few blank rows and add Subtotal, Tax and Total rows at the bottom.</li>
<li><strong>Write terms and acceptance.</strong> Short bullet points, followed by a signature and date line for the customer.</li>
<li><strong>Save as a template.</strong> File &gt; Save As &gt; Word Template (.dotx) so every new quote starts clean.</li>
</ol>
<p>The weakness of Word is arithmetic. Table formulas exist (Layout &gt; Formula, e.g. =SUM(ABOVE)) but they do not update until you refresh the fields, so it is easy to send a total that does not match the rows. Many people do the sums in Excel and paste the result. Our guide to making an invoice in Word uses the same layout ideas if you later want a matching invoice.</p>

<h2>How to make a quotation format in Excel</h2>
<p>Excel is the better choice when quotes have many lines or change often, because the totals recalculate as you edit. Lay it out like this:</p>
<ul>
<li>Rows 1–8: your header, the word Quotation, quote number, dates and the customer's details.</li>
<li>Row 10: column headings in A to E: #, Description, Qty, Rate, Amount.</li>
<li>Rows 11–30: item lines. In E11 enter <code>=C11*D11</code> and copy down.</li>
<li>Subtotal (E32): <code>=SUM(E11:E30)</code></li>
<li>Tax rate in D33 (e.g. 5%) and tax amount in E33: <code>=ROUND(E32*D33,2)</code></li>
<li>Total (E34): <code>=E32+E33</code></li>
</ul>
<p>Format the rate and amount columns as currency, set the print area to A1:E45, and choose Page Layout &gt; Fit to 1 page wide so the PDF does not split mid-table. Save it as an Excel template (.xltx). Our <a href="/blog/how-to-make-an-invoice-in-excel">Excel invoice guide</a> covers the same formulas, plus drop-down lists for items you quote often.</p>

<h2>Quotation format by country: what buyers expect</h2>
<h3>India</h3>
<p>Business buyers usually expect your GSTIN, the HSN or SAC code for each item, and the GST rate shown per line. A quote is not a tax document, but showing GST the way the eventual tax invoice will show it avoids surprises. See our GST invoice guide for the invoice fields.</p>
<h3>Pakistan</h3>
<p>Companies and government departments often ask for your NTN and, if registered for sales tax, your STRN on the quotation itself, plus a statement of whether prices include sales tax and withholding. Write "Prices inclusive of GST" or "exclusive of GST" beside the total. Our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> has NTN and STRN fields ready for the invoice stage.</p>
<h3>UAE and the wider Gulf</h3>
<p>Show your TRN, quote in AED (or state the currency clearly), and show VAT on its own line. Many buyers also want delivery terms and the warranty period stated on the quote.</p>

<h2>Common mistakes that cost you the order</h2>
<ul>
<li><strong>No validity date.</strong> A customer can come back months later expecting the old price.</li>
<li><strong>Vague descriptions.</strong> "Supply of chairs" invites a cheaper competitor to match a lower spec. Name model, size, finish and brand.</li>
<li><strong>Tax left unclear.</strong> If the buyer cannot tell whether VAT or GST is included, they will assume it is.</li>
<li><strong>Exclusions missing.</strong> Say what is not included: civil work, permits, parking fees, after-hours labour.</li>
<li><strong>Totals that do not add up.</strong> One arithmetic error makes a buyer doubt everything else on the page.</li>
</ul>

<h2>From accepted quotation to invoice</h2>
<p>Once the customer accepts, you usually issue one of three documents: an advance or <a href="/blog/deposit-invoice">deposit invoice</a> for the upfront percentage, a <a href="/blog/proforma-invoice-guide">proforma invoice</a> if the buyer needs one for internal approval or import, or the final tax invoice on delivery. Copy the quotation's line items exactly and put the customer's PO number and your quote number on the invoice so their accounts team can match the three documents.</p>
<p>A note on our tool: the generator produces invoices only, and the document heading is fixed as "Invoice", so it is not designed for drafting quotations. Keep your quotation in Word or Excel, then open the <a href="/invoice-generator/uae">UAE invoice generator</a> (or the version for your country), enter the accepted lines, the PO number and your tax details, and download the invoice as a PDF.</p>
`,
  },
  {
    slug: "bill-format",
    title: "Bill Format: Simple and Shop Bill Format With Sample",
    description:
      "A simple bill format you can copy, a shop bill format for retail counters, and a worked sample with discount, so every bill you hand over is clear and correct.",
    category: "invoicing-basics",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-vs-bill", "invoice-vs-receipt", "simple-invoice-template"],
    faqs: [
      {
        q: "What is the format of a bill?",
        a: "A basic bill format has the seller's name and contact details at the top, a bill number and date, the customer's name, a table of items with quantity, rate and amount, a subtotal, any discount and tax, and the total payable. It usually ends with the payment method and a thank-you or signature line.",
      },
      {
        q: "Is a bill the same as an invoice?",
        a: "In everyday use, yes. Both ask for payment for goods or services. 'Invoice' is the more common word in business-to-business trade, while 'bill' is used for shop sales, restaurants, utilities and services. In accounting, the same document is often called an invoice by the seller and a bill by the buyer.",
      },
      {
        q: "What should a shop bill include?",
        a: "A shop bill should include the shop name, address and phone number, a serial bill number, the date, each item with quantity and price, the total, any discount, tax if you are registered, and how it was paid. If you are registered for GST or sales tax, the law in your country may require extra details such as your tax number.",
      },
      {
        q: "Can I write a bill by hand?",
        a: "Yes, many small shops still use printed bill books with carbon copies. Make sure the books are pre-numbered and you keep the duplicate copy. If you are registered for sales tax or GST, check whether your tax authority requires a particular format or electronic invoicing for your business type.",
      },
      {
        q: "What is the difference between a cash memo and a credit bill?",
        a: "A cash memo is a bill for a sale paid on the spot, so it doubles as proof of payment. A credit bill is issued when the customer will pay later, and it should show a due date and stay in your list of amounts owed until it is settled. Many shops in South Asia print both types in separate, numbered books so cash and credit sales are easy to tell apart.",
      },
      {
        q: "How do I number bills if I have more than one counter or bill book?",
        a: "Give each counter or book its own prefix and keep each series unbroken, for example A-1001 onward for counter one and B-1001 onward for counter two. That way two cashiers never issue the same number on the same day. Record which range each book covers. If you are registered for GST or sales tax, check whether your tax authority allows multiple series and how they must be reported.",
      },
      {
        q: "Can I send a bill on WhatsApp instead of handing over paper?",
        a: "Yes, for most small businesses a PDF bill shared on WhatsApp or email works fine, as long as it contains the same details as a paper bill and you keep your own copy. Send a PDF rather than a photo so the figures stay sharp. If you are registered for tax, check whether your country requires a specific electronic invoicing system, because a plain PDF may not satisfy that rule.",
      },
      {
        q: "What should I do if I make a mistake on a bill?",
        a: "Do not overwrite or scratch out figures. Mark the wrong bill 'Cancelled', keep all copies so the number sequence has no gap, and issue a new bill with the correct details. If the customer has already paid or the bill has gone into tax records, a credit note or debit note may be the right way to correct it. Registered businesses should follow their tax authority's correction rules.",
      },
      {
        q: "Do I have to give a bill for every small sale?",
        a: "It depends on your country and tax status. Unregistered shops often have no strict legal duty, but a bill is still good practice and many customers ask for one. Registered businesses usually must document every sale, although some systems relax this for small amounts. In India, for example, GST rules allow a daily consolidated invoice for certain low-value sales to unregistered buyers who do not request one. Check your tax authority's current rules.",
      },
      {
        q: "Should prices on a shop bill include or exclude tax?",
        a: "Either can work if you are clear about it. Retail customers usually expect tax-inclusive prices, so many shops show the inclusive price and state the tax included at the bottom. Business customers often prefer prices before tax with the tax on its own line. If you are not registered for GST, VAT or sales tax, do not show a tax line at all, because you cannot charge tax you are not registered to collect.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A simple bill format has five parts: the seller's details at the top, a bill number and date, the customer's name, an item table (description, quantity, rate, amount), and a totals block showing subtotal, discount, tax and the amount payable. A shop bill format adds the payment method and a short return or exchange note at the bottom.</p>

<p>Whether you run a hardware store, a tailoring shop or a small repair business, a clear bill format saves arguments at the counter and keeps your records tidy. Below you will find the fields to include, a simple bill format you can copy, a shop bill format for retail, and a worked sample that adds up. If you would rather not draw the layout yourself, our <a href="/invoice-generator">free invoice generator</a> calculates the totals for you and downloads a PDF.</p>

<h2>Bill vs invoice: are they different?</h2>
<p>Mostly in name. A bill and an invoice both tell the customer what they bought and what they owe. "Bill" is the everyday word in shops, restaurants and households; "invoice" is the usual word between businesses. In bookkeeping, the seller records an invoice and the buyer records the same document as a bill to pay. Our article on <a href="/blog/invoice-vs-bill">invoice vs bill</a> explains the terms in more depth.</p>
<p>The document that is genuinely different is the receipt, which confirms money has already been received. A shop bill that is paid on the spot often doubles as a receipt if it is marked "Paid" with the payment method. See <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> for when to issue each.</p>

<h2>Simple bill format: the fields to include</h2>
<table><thead><tr><th>Section</th><th>What goes in it</th></tr></thead><tbody>
<tr><td>Header</td><td>Business name, address, phone, email; tax number if registered</td></tr>
<tr><td>Bill details</td><td>Bill number (serial), date, and due date if not paid immediately</td></tr>
<tr><td>Customer</td><td>Name and phone; full address for credit or delivery customers</td></tr>
<tr><td>Item table</td><td>No., description, quantity, rate, amount</td></tr>
<tr><td>Totals</td><td>Subtotal, discount, tax (if any), total payable</td></tr>
<tr><td>Payment</td><td>Cash, card, bank transfer or mobile wallet; amount received and balance</td></tr>
<tr><td>Footer</td><td>Return/exchange policy, signature, "Thank you"</td></tr>
</tbody></table>
<p>Keep the bill number serial and unbroken. If you spoil a bill, cancel it and keep it rather than throwing it away, so the sequence has no gaps. Our guide to an invoice numbering system applies equally to bill books.</p>

<h2>A simple bill format you can copy</h2>
<p>This plain-text layout works in a notebook, a Word document or a spreadsheet:</p>
<pre>
[SHOP NAME]
[Address] · [Phone] · [Tax no. if registered]

BILL No.: 1048          Date: 23-10-2026
Customer: ____________________  Phone: ______________

No. | Description          | Qty | Rate   | Amount
1   | ...                  |     |        |
2   | ...                  |     |        |

                         Subtotal:  ______
                         Discount:  ______
                         Tax:       ______
                         TOTAL:     ______

Paid by: Cash / Card / Transfer     Received by: ________
Goods once sold can be exchanged within 7 days with this bill.
</pre>
<p>The return line is only an example. Write whatever your actual policy is, and remember that consumer law in many countries gives customers rights that a printed notice cannot remove.</p>

<h2>Shop bill format for retail counters</h2>
<p>A shop bill format is the same as the simple version with a few practical additions for walk-in sales:</p>
<ul>
<li><strong>Item codes or units.</strong> "Paint, 4 L tin" is clearer than "paint". Add a unit column (pcs, kg, m, L) if you sell loose goods.</li>
<li><strong>Cashier or salesperson.</strong> Useful if more than one person runs the counter.</li>
<li><strong>Amount tendered and change.</strong> For cash sales: "Received Rs 5,000 · Change Rs 316.50".</li>
<li><strong>Credit customers.</strong> If the customer pays later, add a due date and mark the bill "Credit" so it goes into your receivables list.</li>
<li><strong>Two copies.</strong> One for the customer and one for your records, whether that is a carbon copy or a saved PDF.</li>
</ul>
<p>Restaurant bills, utility bills and medical bills follow the same pattern but add industry details such as table number, meter readings or treatment codes.</p>

<h2>Worked example: shop bill with a discount</h2>
<p>A hardware shop sells painting supplies to a regular customer and gives a 5% loyalty discount. The shop is not registered for sales tax, so no tax line appears.</p>
<table><thead><tr><th>No.</th><th>Description</th><th>Qty</th><th>Rate (Rs)</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>1</td><td>Emulsion paint, white, 4 L tin</td><td>2</td><td>1,850.00</td><td>3,700.00</td></tr>
<tr><td>2</td><td>Paint brush, 3 inch</td><td>3</td><td>250.00</td><td>750.00</td></tr>
<tr><td>3</td><td>Masking tape, 1 inch roll</td><td>4</td><td>120.00</td><td>480.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>4,930.00</td></tr>
<tr><td colspan="4">Discount 5%</td><td>−246.50</td></tr>
<tr><td colspan="4"><strong>Total payable</strong></td><td><strong>4,683.50</strong></td></tr>
</tbody></table>
<p>The maths: 3,700 + 750 + 480 = 4,930. Five percent of 4,930 is 246.50, leaving 4,683.50. If the customer hands over Rs 5,000 in cash, the change is Rs 316.50.</p>
<p>If the shop were registered for GST or sales tax, the tax would be calculated on the discounted amount and shown on its own line, and the bill would also need the shop's tax number and any other details the tax authority requires. Pakistan sellers should read our <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice guide for Pakistan</a>; Indian sellers can start with the <a href="/blog/gst-invoice-guide">GST invoice guide</a>; for everyone else, the general tax invoice guide covers what changes once you are registered.</p>

<h2>Bill format in Word, Excel or a generator?</h2>
<table><thead><tr><th>Option</th><th>Good for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Printed bill book</td><td>Very small counters, no electricity or device</td><td>Hand arithmetic errors; no backup if lost</td></tr>
<tr><td>Word document</td><td>Occasional bills with a branded look</td><td>Totals do not update automatically</td></tr>
<tr><td>Excel or Google Sheets</td><td>Many lines, repeat products, running totals</td><td>Needs a little formula setup</td></tr>
<tr><td>Online generator</td><td>Clean PDF bills in minutes, no setup</td><td>Not a point-of-sale system; no stock tracking</td></tr>
</tbody></table>
<p>Our generator is a good fit for service bills and credit sales where you send a PDF: it supports a discount (percentage or fixed), a single tax rate, a shipping or extra charge, and an "amount already paid" field that shows the balance due. It is not a till, so it does not print thermal receipts or track stock. The <a href="/invoice-generator/pakistan">Pakistan version</a> adds NTN and STRN fields, and the <a href="/blog/simple-invoice-template">simple invoice template</a> guide shows a stripped-back layout for quick bills.</p>

<h2>Bill format for services and credit customers</h2>
<p>Not every bill is paid at the counter. Repair shops, tailors, printers, caterers and tutors often hand over the work first and collect payment later. For these, the simple bill format needs three additions:</p>
<ul>
<li><strong>A due date.</strong> "Payable by 6 November 2026" leaves no room for "I thought it was next month".</li>
<li><strong>A clear description of the service.</strong> "Stitching, 2 suits, including lining" or "Laptop screen replacement, 15.6 inch, parts and labour" rather than "Work done".</li>
<li><strong>Advance and balance lines.</strong> If the customer paid an advance, show the full bill, subtract the advance, and show the balance. For example, a Rs 6,000 tailoring bill with a Rs 2,000 advance shows a balance of Rs 4,000.</li>
</ul>
<p>Credit customers, such as offices that buy from you every week, are better served by a proper invoice with your payment terms and bank details, and a monthly <a href="/blog/statement-of-account">statement of account</a> listing everything they owe. That keeps your counter bill book for walk-in sales and gives the office's accounts team the paperwork it expects.</p>

<h2>How many copies of a bill should you keep?</h2>
<p>Give the original to the customer and keep at least one copy yourself. If you use a carbon bill book, keep the whole book once it is full and label it with the bill number range and dates, for example "Bills 1001–1100, Aug–Oct 2026". If you issue PDF bills, save them in a folder per month with the bill number in the file name.</p>
<p>When a customer pays a credit bill later, give them a receipt or mark their copy "Paid" with the date and method. Our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what a receipt should include. A simple rule for any shop: if money changed hands, there should be a numbered piece of paper (or PDF) that proves it.</p>

<h2>Mistakes to avoid on a bill</h2>
<ul>
<li><strong>Missing bill numbers or dates.</strong> Without them you cannot match payments or answer a customer query a month later.</li>
<li><strong>Vague item names.</strong> "Material: Rs 3,000" leads to disputes. List what was sold.</li>
<li><strong>Charging tax when you are not registered.</strong> In most countries you may only charge GST, VAT or sales tax if you are registered to collect it.</li>
<li><strong>Not keeping a copy.</strong> Tax authorities generally expect you to keep sales records for several years. See how long to keep invoices.</li>
</ul>

<h2>Make your next bill</h2>
<p>Pick the layout above that suits your counter, set up your serial numbering, and decide where copies will live. For bills you send rather than hand over, open the generator, add your shop name and logo, enter the items, apply any discount, and download the bill as a PDF ready to share on WhatsApp or email. If a customer asks for a formal price before buying, use our <a href="/blog/quotation-format">quotation format</a> instead.</p>
`,
  },
  {
    slug: "delivery-challan-format",
    title: "Delivery Challan Format: GST Rules and Sample",
    description:
      "Delivery challan format explained: when GST Rule 55 allows a challan instead of an invoice, the mandatory fields, a job work sample, and how delivery notes work.",
    category: "invoicing-basics",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: [
      "delivery-note-template",
      "packing-slip-vs-invoice",
      "gst-invoice-guide",
      "purchase-order-template",
    ],
    faqs: [
      {
        q: "What is a delivery challan?",
        a: "A delivery challan is a document that travels with goods when they are moved without a tax invoice, or before one is issued. It lists what is being sent, the quantity and value, and who is sending and receiving it. In India it is governed by Rule 55 of the CGST Rules, 2017.",
      },
      {
        q: "When is a delivery challan issued under GST?",
        a: "Rule 55 allows a delivery challan instead of an invoice in specific cases, including goods sent for job work, liquid gas where the quantity is not known at removal, transport for reasons other than supply, and other notified cases. It is also used when goods are moved for supply but the tax invoice could not be issued at the time of removal.",
      },
      {
        q: "How many copies of a delivery challan are needed?",
        a: "For a supply of goods, Rule 55(2) requires the challan in triplicate: the original for the consignee, the duplicate for the transporter and the triplicate for the consignor. Many businesses keep the same three-copy practice for job work and other movements as well.",
      },
      {
        q: "Is an e-way bill needed with a delivery challan?",
        a: "It can be. Goods moved on a delivery challan must still be declared as required by Rule 138, which covers e-way bills. Whether an e-way bill is needed depends on the consignment value, the type of movement and state-specific rules, so check the current e-way bill rules before dispatch.",
      },
      {
        q: "Is a delivery note the same as a delivery challan?",
        a: "They do a similar job. 'Delivery challan' is the term used in India and Pakistan, and in India it has specific GST requirements. 'Delivery note' is the general international term for a document that lists goods delivered and is signed by the receiver as proof of delivery.",
      },
      {
        q: "How long can goods sent for job work stay with the job worker?",
        a: "Under Section 143 of the CGST Act, inputs must come back, or be supplied from the job worker's premises, within one year, and capital goods within three years, of being sent. The Commissioner can extend these periods on sufficient cause. Moulds, dies, jigs, fixtures and tools are not covered by the time limit. If the deadline is missed, the original dispatch is treated as a supply on the date the goods were sent.",
      },
      {
        q: "Do I need an e-way bill for inter-state job work below ₹50,000?",
        a: "Generally, yes. The ₹50,000 consignment value threshold that applies to most movements does not help with inter-state job work: when a principal or registered job worker moves goods for job work to another state, an e-way bill is typically required whatever the value. Intra-state job work movements follow state-specific rules, which vary. Because these provisions are amended from time to time, check the current position on the e-way bill portal before dispatch.",
      },
      {
        q: "When must a tax invoice replace a challan for goods sent on approval?",
        a: "Goods sent on approval or sale-or-return basis can move on a delivery challan. Under Section 31(7) of the CGST Act, the tax invoice must be issued when the customer confirms the purchase or six months from the date of removal, whichever comes first. So if a customer keeps approval goods beyond six months without deciding, you should treat them as sold and invoice them. Track approval challans in a register with their removal dates.",
      },
      {
        q: "Can I send goods to my branch in another state on a delivery challan?",
        a: "Usually not. Under GST, branches registered in different states have separate GSTINs and are treated as distinct persons, so an inter-state branch transfer is generally a taxable supply that needs a tax invoice, even without consideration. A delivery challan suits movements within the same registration, such as to a godown in the same state that is listed on your GST registration. Confirm the treatment with your tax adviser for your specific setup.",
      },
      {
        q: "What is the difference between a returnable and a non-returnable delivery challan?",
        a: "A returnable challan covers goods you expect to come back, such as items sent for job work, repair, testing, exhibition or approval. You track it until the goods return. A non-returnable challan covers goods that will not come back, such as supplies where the invoice follows later or certain free samples. These are business labels rather than terms in Rule 55, but marking the type on the challan keeps your register and follow-up simple.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A delivery challan format records goods being moved without a tax invoice. Under India's GST, Rule 55 of the CGST Rules requires a serially numbered challan (up to 16 characters) showing the date, consignor and consignee details with GSTINs, HSN code and description, quantity, taxable value, tax details where it is a supply, place of supply for inter-state moves, and a signature.</p>

<p>Outside India, the same idea goes by the name delivery note: a list of goods that travels with the shipment and comes back signed. This guide covers both. We explain when a delivery challan is allowed, the mandatory fields, a filled-in job work sample, and how a delivery note fits alongside the invoice you create in our <a href="/invoice-generator">invoice generator</a>.</p>
<p><em>This is general information, not tax or legal advice. GST rules and notifications change, so confirm the current position on the <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer">CBIC GST portal</a> or with a qualified adviser before relying on it.</em></p>

<h2>What is a delivery challan?</h2>
<p>A delivery challan is a movement document. It tells a tax officer at a checkpoint, the transporter and the receiver what is in the vehicle, where it is going and why. Unlike an invoice, it does not normally ask for payment. It is used when goods move but no sale has happened yet, or when the sale value is not yet known.</p>
<p>In India the challan has a legal basis in GST law. In Pakistan, businesses commonly issue a delivery challan alongside or ahead of the sales tax invoice as proof of dispatch. In the UK, UAE, US and most other markets, the equivalent is a delivery note or a <a href="/blog/packing-slip-vs-invoice">packing slip</a>, which is a commercial document rather than a tax one.</p>

<h2>When can you issue a delivery challan under GST (Rule 55)?</h2>
<p>Rule 55 of the CGST Rules, 2017 lets a consignor issue a delivery challan instead of an invoice at the time goods are removed, in these situations:</p>
<ul>
<li><strong>Supply of liquid gas</strong> where the quantity at the time of removal is not known.</li>
<li><strong>Transport of goods for job work</strong>, for example sending parts to a fabricator or components for plating.</li>
<li><strong>Transport for reasons other than supply</strong>, such as sending goods to your own branch in the same state, returning goods after repair, sending samples for testing or moving goods for exhibitions.</li>
<li><strong>Other supplies that are notified</strong> by the government.</li>
</ul>
<p>The rule also covers two practical cases. Where goods are moved for supply but the tax invoice could not be issued at the time of removal, the supplier issues the tax invoice after delivery. And where goods are sent in semi-knocked-down or completely knocked-down condition across several lots, a complete invoice is issued before the first consignment, with a delivery challan for each later lot referring to that invoice. If either case applies to you, read the rule text in full with your adviser, because the details matter.</p>
<p>A delivery challan is not a substitute for a tax invoice on a normal sale. If you sell goods and know the price and quantity, issue a GST tax invoice. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> lists the fields that invoice needs.</p>

<h2>Delivery challan format: mandatory fields</h2>
<p>GST law prescribes the content of a delivery challan, not a fixed design. As long as these particulars are present, you can use your own layout.</p>
<table><thead><tr><th>Field</th><th>Notes</th></tr></thead><tbody>
<tr><td>Date and challan number</td><td>Consecutive serial number, not exceeding 16 characters, in one or more series</td></tr>
<tr><td>Consignor</td><td>Name, address and GSTIN (if registered)</td></tr>
<tr><td>Consignee</td><td>Name, address and GSTIN or UIN (if registered)</td></tr>
<tr><td>HSN code and description</td><td>Of each item being moved</td></tr>
<tr><td>Quantity</td><td>Provisional quantity where the exact figure is not known</td></tr>
<tr><td>Taxable value</td><td>Value of the goods, even when no tax is charged</td></tr>
<tr><td>Tax rate and amount</td><td>Central, state, integrated or union territory tax and cess, only where the movement is for supply to the consignee</td></tr>
<tr><td>Place of supply</td><td>For inter-state movement</td></tr>
<tr><td>Signature</td><td>Of the consignor or authorised person</td></tr>
</tbody></table>
<p>Most businesses also add fields that are not mandatory but save time: the vehicle number, transporter name, purpose of movement ("For job work", "Sale on approval"), expected return date, and a receiver's acknowledgement box.</p>

<h3>How many copies?</h3>
<p>For a supply of goods, Rule 55(2) requires three copies: the original marked "Original for consignee", the duplicate "Duplicate for transporter" and the triplicate "Triplicate for consignor". Printing all three labels on your challan template avoids confusion at the gate.</p>

<h3>Delivery challan and e-way bills</h3>
<p>Goods moved on a challan are still subject to the transport declaration rules in Rule 138, which governs e-way bills. Whether you need one depends on the consignment value, the nature of the movement (job work has its own provisions) and any state-specific rules. Because thresholds and exemptions have been revised more than once, check the current rules on the official e-way bill portal before you dispatch.</p>

<h2>Delivery challan sample: goods sent for job work</h2>
<p>A Pune engineering firm sends steel brackets to a registered job worker in the same state for powder coating. No tax is charged because the goods are being sent for job work, not sold.</p>
<p><strong>Delivery Challan DC/26-27/0142</strong> · Date: 23-10-2026<br>
Consignor: Shree Fabricators Pvt Ltd, Bhosari MIDC, Pune · GSTIN: [consignor GSTIN]<br>
Consignee: Coatwell Finishers, Chakan, Pune · GSTIN: [consignee GSTIN]<br>
Purpose: Sent for job work (powder coating), to be returned after processing<br>
Vehicle: [vehicle number] · Transporter: Own vehicle</p>
<table><thead><tr><th>#</th><th>Description</th><th>HSN</th><th>Qty</th><th>Rate (₹)</th><th>Value (₹)</th></tr></thead><tbody>
<tr><td>1</td><td>MS mounting bracket, 150 mm, uncoated</td><td>[HSN]</td><td>400 pcs</td><td>85.00</td><td>34,000.00</td></tr>
<tr><td>2</td><td>MS L-bracket, 75 mm, uncoated</td><td>[HSN]</td><td>350 pcs</td><td>40.00</td><td>14,000.00</td></tr>
<tr><td colspan="5"><strong>Total value of goods</strong></td><td><strong>48,000.00</strong></td></tr>
</tbody></table>
<p>The maths: 400 × 85 = 34,000 and 350 × 40 = 14,000, a total value of ₹48,000. The challan carries the value so that the goods can be traced and the e-way bill question can be assessed, even though no GST is charged on the movement itself. Enter the correct HSN codes for your goods; we have left them as placeholders because classification depends on the exact product.</p>
<p>When the job worker returns the coated brackets, they issue their own document for the return, and a tax invoice for their coating charges. Job work also has time limits for the return of goods, so diary the expected return date.</p>

<h2>Delivery challan vs tax invoice</h2>
<table><thead><tr><th></th><th>Delivery challan</th><th>Tax invoice</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Covers movement of goods</td><td>Records a sale and the tax charged</td></tr>
<tr><td>Asks for payment?</td><td>No</td><td>Yes</td></tr>
<tr><td>Typical use</td><td>Job work, branch transfers, samples, approval sales</td><td>Every taxable sale</td></tr>
<tr><td>Tax shown?</td><td>Only where the movement is for supply</td><td>Always, for taxable supplies</td></tr>
<tr><td>Copies</td><td>Triplicate for supplies of goods</td><td>Triplicate for goods, duplicate for services</td></tr>
</tbody></table>
<p>Large Indian businesses above the e-invoicing threshold also need an IRN for their B2B tax invoices; delivery challans are outside that system. Our guide to the <a href="/blog/india-e-invoice-limit">India e-invoice limit</a> explains who is covered.</p>

<h2>Delivery note format for other countries</h2>
<p>If you are not in India, you will usually need a simpler delivery note. There is generally no tax rule for its content, so the format is driven by what your customer's receiving team needs:</p>
<ul>
<li>Your business name and the delivery note number.</li>
<li>The customer's name, delivery address and their <a href="/blog/po-number-on-invoice">PO number</a>.</li>
<li>Item descriptions, codes and quantities ordered, shipped and back-ordered.</li>
<li>Number of packages and total weight if relevant.</li>
<li>A receiver's name, signature, date and condition note ("received in good order").</li>
</ul>
<p>Prices are often left off a delivery note so it can be handed to warehouse staff. The signed copy is your proof of delivery if the customer later says goods never arrived, and it supports the invoice in a three-way match against the <a href="/blog/purchase-order-template">purchase order</a>. For exports, a delivery note is not enough: you will need a <a href="/blog/commercial-invoice-template">commercial invoice</a> and usually a packing list.</p>

<h2>How to make a delivery challan in Word or Excel</h2>
<ol>
<li>Create the header with your business name, address and GSTIN, and the title "DELIVERY CHALLAN".</li>
<li>Add a small table for challan number, date, purpose of movement, vehicle number and place of supply.</li>
<li>Add consignor and consignee blocks side by side.</li>
<li>Insert the item table: #, description, HSN, quantity, unit, rate, value. In Excel, value is <code>=D10*E10</code> and the total is <code>=SUM(F10:F25)</code>.</li>
<li>Add tax columns only if you use the challan for supplies where tax applies.</li>
<li>Finish with signature, receiver acknowledgement and the three copy labels.</li>
</ol>
<p>A note on our tool: the generator creates invoices, and its document heading is fixed as "Invoice", so it is not suitable for printing a delivery challan. Use the challan format above for the movement, and when it is time to bill, create the tax invoice in the generator with your GSTIN in the tax ID field and the challan number noted in the Notes box.</p>

<h2>Next step</h2>
<p>Set up a challan series (for example DC/26-27/0001) separate from your invoice numbers, print the three copy labels on your template, and keep a register of challans issued for job work with their expected return dates. When the sale itself happens, raise the invoice in the <a href="/invoice-generator?template=corporate">Corporate invoice template</a> and reference the challan number so your customer can match the two.</p>
`,
  },
  {
    slug: "canva-invoice-template",
    title: "Canva Invoice Template: Pros, Cons and Alternatives",
    description:
      "An honest look at using a Canva invoice template: what it does well, why totals and numbering are manual, and when a free invoice generator is the better choice.",
    category: "design-templates",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "simple-invoice-template",
      "invoice-template-pdf",
      "professional-invoice-design-tips",
    ],
    faqs: [
      {
        q: "Does Canva have free invoice templates?",
        a: "Yes. Canva offers a library of invoice templates, many of which are available on the free plan, and you can download your finished design as a PDF. Some templates and elements are marked as Pro and need a paid plan, so check the label before you build on one.",
      },
      {
        q: "Do Canva invoice templates calculate totals?",
        a: "The standard invoice designs are graphic layouts, so the numbers are text boxes you type yourself. Changing a quantity does not update the line total or the grand total. Canva Sheets supports formulas, but that is a separate spreadsheet product rather than the invoice design templates.",
      },
      {
        q: "Is a Canva invoice legally valid?",
        a: "The tool you design it in does not affect validity. What matters is the content: your details, the customer's, a unique invoice number, dates, a description of what was supplied, the amounts and any tax details your country requires. A Canva invoice that includes all of those is as valid as any other PDF invoice.",
      },
      {
        q: "How do I number invoices in Canva?",
        a: "You type the number by hand each time, usually after duplicating your last invoice. Keep a separate list of numbers you have used so you never skip or repeat one, because Canva will not track the sequence for you.",
      },
      {
        q: "What is better than Canva for invoices?",
        a: "If design is your priority, Canva is excellent. If you send invoices often, a tool that calculates totals and tax automatically, such as a free invoice generator or a spreadsheet template, reduces errors. Many people use Canva only to design the look, then use a calculating tool for the actual invoices.",
      },
      {
        q: "Can I make and edit a Canva invoice on my phone?",
        a: "Yes. Canva has mobile apps for iPhone and Android, so you can open an invoice design, change the text and download a PDF on the go. The small screen makes it easier to miss a wrong total or an old client name, so zoom in and check every figure before you share it. For frequent invoicing on a phone, a form-based tool that calculates totals is usually quicker.",
      },
      {
        q: "How do I add VAT, GST or sales tax to a Canva invoice?",
        a: "Work it out yourself and type the figures in. Calculate the subtotal after any discount, multiply by the tax rate, round to two decimals, and show the rate, the tax amount and the tax-inclusive total on separate lines. Add your tax registration number in the header. Only include tax if you are registered to charge it, and check your country's rules on what a tax invoice must show.",
      },
      {
        q: "Which download format should I use for a Canva invoice?",
        a: "Choose PDF. Canva offers a standard PDF and a print-quality PDF; the standard one gives a smaller file that is ideal for email, while the print version suits professional printing. Avoid sending a PNG or JPG, because images are harder for accounts teams to file and the text cannot be searched or copied. Open the downloaded PDF and check it before sending.",
      },
      {
        q: "Can I send an invoice to a client directly from Canva?",
        a: "You can share a view link to a design, but Canva is not a billing system. It will not log invoices as sent, record payments or send reminders. Most businesses download the PDF and email it from their own account, with the invoice number and due date in the subject line, then record it in a tracker. That gives you a clear sent record if the client later says it never arrived.",
      },
      {
        q: "How do I reuse my Canva invoice design for every new invoice?",
        a: "Keep one master design, named something like 'Invoice MASTER', with blank or placeholder figures, and never edit it directly. For each new invoice, duplicate the master, then fill in the client, number, dates and lines. Starting from a clean master rather than last month's invoice reduces the risk of sending old details to a new client, which is the most common mistake with duplicated designs.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Canva invoice template is a good choice if you want a highly designed invoice and only send a few a month. Canva gives you attractive layouts, brand fonts and colours, and PDF download. The trade-off is that the standard invoice designs do not calculate: line totals, tax, grand totals and invoice numbers are all typed by hand, which is where errors creep in.</p>

<p>Plenty of freelancers and small studios start with a Canva invoice template because they already use Canva for social posts and brand assets. That is a perfectly reasonable choice. This guide sets out what Canva does well, where it falls short for billing, a worked example of the most common mistake, and when a calculating tool such as our <a href="/invoice-generator?template=elegant">free invoice generator</a> is the better fit.</p>

<h2>What a Canva invoice template gives you</h2>
<p>Canva's strength is design. For invoices that means:</p>
<ul>
<li><strong>A large template library.</strong> Search "invoice" and you get a wide range of styles, from minimal to bold and illustrated. Many are usable on the free plan; some carry a Pro label.</li>
<li><strong>Drag-and-drop editing.</strong> You can move blocks, swap fonts, change colours and drop in your logo without any design software.</li>
<li><strong>Brand consistency.</strong> If you already have a brand in Canva, your invoice can match your proposals, social graphics and website.</li>
<li><strong>Easy export.</strong> Download as PDF (including a print-quality option) or share a view link.</li>
<li><strong>Collaboration.</strong> A designer can create the template and hand it to whoever does the billing.</li>
</ul>
<p>Plan features and pricing change, so check <a href="https://www.canva.com/pricing/" target="_blank" rel="noopener noreferrer">Canva's official pricing page</a> for what the free and paid tiers currently include.</p>

<h2>The catch: totals and numbering are manual</h2>
<p>A Canva invoice design is a graphic, not a calculator. Every number on it is a text box. That has knock-on effects:</p>
<ul>
<li><strong>No automatic totals.</strong> Change a quantity and you must retype the line amount, the subtotal, the tax and the total.</li>
<li><strong>No tax calculation.</strong> You work out VAT, GST or sales tax yourself, usually on a calculator or phone.</li>
<li><strong>No invoice numbering.</strong> Canva does not know what number you used last. You duplicate the previous invoice and edit the number by hand.</li>
<li><strong>No record of what is owed.</strong> There is no list of unpaid invoices, due dates or balances. You need a separate tracker.</li>
<li><strong>Table rows are fiddly.</strong> Adding a sixth line to a five-line design often means moving every block below it.</li>
</ul>
<p>Canva does have a spreadsheet product, Canva Sheets, which supports formulas (Canva's help centre lists the <a href="https://www.canva.com/help/sheets-functions/" target="_blank" rel="noopener noreferrer">functions it supports</a>). That is a different tool from the invoice design templates, though. If you want both Canva's look and automatic maths, you would have to build and maintain that yourself.</p>

<h2>Worked example: how a manual total goes wrong</h2>
<p>A designer bills a client using a Canva template. The first draft reads:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Social media graphics</td><td>3</td><td>$85.00</td><td>$255.00</td></tr>
<tr><td>Website banner set</td><td>2</td><td>$140.00</td><td>$280.00</td></tr>
<tr><td>Revision round</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$595.00</td></tr>
<tr><td colspan="3">Sales tax 8%</td><td>$47.60</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$642.60</strong></td></tr>
</tbody></table>
<p>So far so good: 255 + 280 + 60 = 595, tax at 8% is 47.60, total 642.60. (Whether a design service is taxable at all depends on where you are; the 8% is purely illustrative.)</p>
<p>The client then asks for a fourth social graphic. The designer changes the quantity to 4 and the line amount to $340.00, but forgets the subtotal, tax and total. The invoice goes out showing a line total of $340 and a grand total of $642.60. The correct figures are a subtotal of $680.00, tax of $54.40 and a total of $734.40. Either the client underpays by $91.80, or their accounts team rejects the invoice because the numbers do not reconcile. Both cost you time.</p>
<p>In a calculating tool, changing the quantity updates every figure below it. That single difference is the main reason businesses move off design-only templates once invoice volume grows. Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> has more examples.</p>

<h2>Canva vs an invoice generator vs a spreadsheet</h2>
<table><thead><tr><th></th><th>Canva template</th><th>Our invoice generator</th><th>Excel / Google Sheets</th></tr></thead><tbody>
<tr><td>Design flexibility</td><td>Very high</td><td>18 fixed templates, accent colour, fonts, logo</td><td>Moderate</td></tr>
<tr><td>Automatic totals and tax</td><td>No (design templates)</td><td>Yes</td><td>Yes, with formulas</td></tr>
<tr><td>Discount, shipping, amount paid</td><td>Typed by hand</td><td>Built-in fields</td><td>If you build them</td></tr>
<tr><td>Invoice numbering</td><td>Manual</td><td>You enter it; a free number tool helps</td><td>Manual or formula</td></tr>
<tr><td>Account needed</td><td>Yes</td><td>No; drafts save in your browser</td><td>Depends on the app</td></tr>
<tr><td>Output</td><td>PDF, PNG, link</td><td>A4 PDF</td><td>PDF, XLSX</td></tr>
</tbody></table>
<p>To be clear about our own tool's limits: it does not email invoices, take payments or track who has paid. It fills the same gap Canva leaves on calculation, not the gap an accounting package fills. If you need payment tracking, pair any of these with an <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a>.</p>

<h2>When a Canva invoice template makes sense</h2>
<ul>
<li>You send a handful of invoices a month with one or two lines each.</li>
<li>The look of the invoice is part of your offer, for example wedding stationery, event styling or a branding studio.</li>
<li>You want the invoice to match a Canva-designed proposal or welcome pack.</li>
<li>You are disciplined about double-checking every number before export.</li>
</ul>

<h2>When a generator or spreadsheet is the better choice</h2>
<ul>
<li>You invoice weekly, or your invoices have more than a few lines.</li>
<li>You charge tax, offer discounts or take deposits, so totals need more than one calculation.</li>
<li>Someone other than you prepares invoices and you want fewer chances for error.</li>
<li>Your clients' accounts teams are strict about invoices that reconcile.</li>
</ul>
<p>In those cases, start with a calculating layout. The <a href="/blog/simple-invoice-template">simple invoice template</a> guide covers a clean, fast option, and the <a href="/invoice-templates/creative">Creative template</a> or <a href="/invoice-templates/elegant">Elegant template</a> give you a designed look without retyping totals.</p>

<h2>Tips if you stick with Canva</h2>
<ol>
<li><strong>Do the maths elsewhere first.</strong> Calculate totals in a spreadsheet or calculator, then copy the figures in.</li>
<li><strong>Keep a numbering log.</strong> A one-column list of invoice numbers, dates and clients prevents duplicates. Our <a href="/blog/invoice-numbering-system">invoice numbering guide</a> suggests a format.</li>
<li><strong>Design for more rows than you need.</strong> Build the template with eight item lines so you are not rearranging blocks for every invoice.</li>
<li><strong>Use real text, not images of text.</strong> Some accounts teams copy figures out of PDFs, and text boxes keep that possible.</li>
<li><strong>Check readability.</strong> Light grey text on pastel backgrounds can look lovely and print badly. Our <a href="/blog/professional-invoice-design-tips">invoice design tips</a> cover contrast and hierarchy.</li>
<li><strong>Proof the PDF, not the canvas.</strong> Download, open the PDF and check every number before sending. The <a href="/blog/invoice-template-pdf">invoice template PDF</a> guide has a short checklist.</li>
</ol>

<h2>Moving from a Canva design to a calculating template</h2>
<p>You do not have to throw away your Canva work. Most people who switch keep the brand and lose only the manual arithmetic. A practical way to do it:</p>
<ol>
<li><strong>Note your brand basics.</strong> Your logo file, main accent colour (the hex code from Canva's colour picker) and preferred font style.</li>
<li><strong>Pick the closest layout.</strong> Browse the <a href="/invoice-templates">invoice templates gallery</a> and choose one whose structure matches your Canva design: a coloured header band, a minimal layout or a formal classic style.</li>
<li><strong>Apply your accent colour and logo.</strong> The generator lets you set a custom accent colour, upload a logo and a signature, and switch on custom typography (font style, size, bold and italic options).</li>
<li><strong>Move your standard wording.</strong> Copy your payment terms, bank details and thank-you note from the Canva design into the Notes and Payment terms fields once. The draft saves in your browser, so you will not need to retype them.</li>
<li><strong>Run one invoice in both.</strong> Make your next invoice in both tools and compare the PDFs. If the generator version is close enough to your brand, switch.</li>
</ol>
<p>The result will not be pixel-identical to a custom Canva design. That is the honest trade: a little less design freedom in return for totals, tax, discounts and balances that are always worked out for you.</p>

<h2>A pre-send check for any designed invoice</h2>
<p>Whichever tool you use, check these before you send:</p>
<ul>
<li>Every line amount equals quantity × rate.</li>
<li>The subtotal equals the sum of the lines, and the tax equals the subtotal (after any discount) × the rate.</li>
<li>The invoice number has not been used before.</li>
<li>The issue date and due date belong to this invoice, not the one you duplicated.</li>
<li>The client name and address are the new client's, not the previous one's.</li>
</ul>
<p>Duplicating an old design is the fastest way to make an invoice in Canva, and also the fastest way to send a client someone else's address. A thirty-second check prevents it.</p>

<h2>Try the calculating version</h2>
<p>If your Canva invoice keeps needing manual fixes, try building your next one in the generator: pick a template close to your brand, set your accent colour and logo, enter the lines and let it work out the totals, then download the PDF. You can keep Canva for everything else you design.</p>
`,
  },
  {
    slug: "simple-invoice-template",
    title: "Simple Invoice Template: Free, Clean and Quick",
    description:
      "Use a simple invoice template with only the fields clients need: what to keep, what to drop, a worked example, and how to make one free in a couple of minutes.",
    category: "design-templates",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["blank-invoice-template", "invoice-template-pdf", "service-invoice-template"],
    faqs: [
      {
        q: "What is the simplest way to make an invoice?",
        a: "Use a template that already has the essential fields and calculates totals for you. Fill in your details, the client's, an invoice number, dates, what you did and the price, then save it as a PDF and send it. A free online generator does this in a few minutes without any setup.",
      },
      {
        q: "What must a simple invoice include?",
        a: "At minimum: your name and contact details, the client's name, a unique invoice number, the invoice date, a due date, a description of the goods or services, the amount for each line, the total and how to pay. If you are registered for VAT, GST or sales tax, add your tax number and the tax details your country requires.",
      },
      {
        q: "Is a simple invoice template professional enough for business clients?",
        a: "Yes. Most accounts teams prefer simple invoices because they can find the number, total and due date quickly. What matters is that the details are complete and correct. Add a PO number if the client uses purchase orders.",
      },
      {
        q: "Can I use a simple invoice template if I am not a registered business?",
        a: "Yes. Individuals and sole traders can invoice under their own name. Use your legal name, and include any tax registration only if you actually have one. Our guide on invoicing without a business explains the details.",
      },
      {
        q: "Can I use the same simple invoice template for every client?",
        a: "Yes, and you should. Using one consistent layout makes your invoices recognizable and quicker for clients to approve. For each invoice, change only the client details, the invoice number, the dates and the line items. Our generator keeps your last draft in your browser on that device, so your own details stay filled in. Just double-check that nothing from the previous client's invoice is left behind.",
      },
      {
        q: "What is the difference between a simple invoice and a receipt?",
        a: "An invoice asks the client to pay and shows a due date. A receipt confirms that payment has already been received, with the date and method. If a client pays on the spot, you can mark the invoice 'Paid' with the payment date, or issue a separate receipt. Keep both documents numbered so you can match payments to invoices later.",
      },
      {
        q: "Do I need to put my address on a simple invoice?",
        a: "In most cases, yes. Business clients usually need your address for their supplier records, and VAT or GST invoices in many countries must show the supplier's address by law. If you work from home and prefer privacy, a business mailing address or PO box may be acceptable where your tax rules allow it. Check what your tax authority requires if you are registered for tax.",
      },
      {
        q: "What payment terms should I put on a simple invoice?",
        a: "Pick one clear term and pair it with a real date. 'Due on receipt' suits small jobs for individuals, while Net 14 or Net 30 is common for business clients. Write it as 'Due 6 November 2026 (Net 14)' so nobody has to count days. If you agreed terms in a contract or quote, use exactly the same terms on the invoice to avoid confusion.",
      },
      {
        q: "How can I make a simple invoice look professional without a logo?",
        a: "Use your name or business name in a larger, bold font as the header, keep one readable typeface, and leave plenty of white space. Align the numbers in the amount column and make the total due stand out in bold. Correct spelling, consistent dates and complete payment details matter more to a client than graphics. A clean minimal template does most of this for you.",
      },
      {
        q: "Can a simple invoice have just one line item?",
        a: "Yes. A single line is fine for a fixed-fee job, as long as the description is specific, such as 'Website homepage redesign, 2 revision rounds, delivered 20 October 2026'. Avoid one vague line like 'Services' for a large amount, because the client's accounts team may send it back for detail. If the client asked for a breakdown, split the work into several lines instead.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A simple invoice template keeps only what a client needs to pay you: your details, the client's details, an invoice number, the invoice and due dates, a short list of items with amounts, the total and your payment instructions. Leave out decoration and extra boxes. Add tax fields only if you are registered to charge tax.</p>

<p>The best invoices are boring in a good way. A simple invoice template puts the total and due date where the client's eye lands first and leaves nothing to interpret. This guide lists the fields to keep, the ones you can safely drop, a worked example, and how to make a simple invoice for free with our <a href="/invoice-generator?template=minimal">invoice generator using the Minimal template</a>.</p>

<h2>What makes an invoice template "simple"?</h2>
<p>Simple does not mean incomplete. It means one clear layout, readable type, generous spacing and no field that you leave empty most of the time. A simple invoice template usually has:</p>
<ul>
<li>One header with your name or business name and contact details.</li>
<li>A "Bill to" block for the client.</li>
<li>Three key facts: invoice number, issue date, due date.</li>
<li>An item table with description, quantity, rate and amount.</li>
<li>A totals block that ends with a single, bold amount due.</li>
<li>A notes area for payment details and terms.</li>
</ul>
<p>If you want a completely empty form to print and fill by hand, our <a href="/blog/blank-invoice-template">blank invoice template</a> guide is the better starting point.</p>

<h2>Fields to keep (and fields you can drop)</h2>
<table><thead><tr><th>Field</th><th>Keep?</th><th>Why</th></tr></thead><tbody>
<tr><td>Your name, email, address</td><td>Always</td><td>The client needs to know who is billing them</td></tr>
<tr><td>Client name and address</td><td>Always</td><td>Required for their records and often for tax</td></tr>
<tr><td>Invoice number</td><td>Always</td><td>Unique reference for payment and bookkeeping</td></tr>
<tr><td>Issue date and due date</td><td>Always</td><td>Sets when payment is expected</td></tr>
<tr><td>Item description, qty, rate, amount</td><td>Always</td><td>Shows what is being paid for</td></tr>
<tr><td>Total / balance due</td><td>Always</td><td>The single most important number</td></tr>
<tr><td>Payment instructions</td><td>Always</td><td>Bank details or payment link; removes friction</td></tr>
<tr><td>Tax ID and tax line</td><td>If registered</td><td>Legally required in many countries when charging tax</td></tr>
<tr><td>PO number</td><td>If the client uses POs</td><td>Missing POs are a common cause of payment delays</td></tr>
<tr><td>Logo</td><td>Optional</td><td>Nice, but a clean text header works fine</td></tr>
<tr><td>Discount, shipping</td><td>Only when used</td><td>Empty rows add clutter</td></tr>
<tr><td>Signature, stamp</td><td>Only if your market expects it</td><td>Common in parts of South Asia and the Gulf</td></tr>
</tbody></table>
<p>For the full list of fields and what each one is for, see <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>.</p>

<h2>Simple invoice example</h2>
<p>A freelance writer invoices a marketing agency for October work. They are not registered for sales tax, so no tax line appears.</p>
<p><strong>Invoice 2026-031</strong> · Issued: 23 October 2026 · Due: 6 November 2026 (Net 14)<br>
From: Maya Collins, Copywriter, maya@example.com<br>
Bill to: Northpoint Marketing Ltd, Accounts Payable</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Blog articles, 1,200 words each (client: Fernway Outdoors)</td><td>4</td><td>$150.00</td><td>$600.00</td></tr>
<tr><td>Editing and revisions (hours)</td><td>2</td><td>$45.00</td><td>$90.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$690.00</strong></td></tr>
</tbody></table>
<p>The maths: 4 × 150 = 600, 2 × 45 = 90, total 690. Notes: "Payment by bank transfer to [account details] by 6 November 2026. Please quote invoice 2026-031."</p>
<p>That is the whole invoice. It answers the three questions the client's accounts team asks: who is this from, what is it for, and how much is due by when.</p>

<h2>How to make a simple invoice for free</h2>
<ol>
<li>Open the invoice generator and choose the Minimal template, or browse the invoice templates gallery for another clean layout.</li>
<li>Fill in your details and the client's in the From and Bill to sections. Add a tax ID only if you have one.</li>
<li>Enter an invoice number. If you do not have a system yet, the <a href="/tools/invoice-number-generator">invoice number generator</a> will suggest a format.</li>
<li>Set the issue date and due date.</li>
<li>Add your line items. Totals update as you type.</li>
<li>Put payment instructions in the Notes or Payment terms field.</li>
<li>Download the PDF and send it from your own email.</li>
</ol>
<p>Your draft autosaves in your browser, so next month you can open it, change the number, dates and lines, and download again. No account is needed. The generator does not send email or collect payment; you send the PDF yourself.</p>

<h2>Which template styles count as simple?</h2>
<p>Of the designs on our site, these suit a simple invoice best:</p>
<ul>
<li><a href="/invoice-templates/minimal">Minimal</a>: lots of white space and a light structure; good for writers, designers and photographers.</li>
<li>Mono: plain and technical; popular with developers and engineers.</li>
<li>Nordic: soft, calm and uncluttered.</li>
<li>Classic: traditional and formal, for clients who expect a conventional layout.</li>
</ul>
<p>Our guide on choosing a template by client explains which style lands best with corporate, creative and individual clients.</p>

<h2>Simple invoice template in Word, Excel or Google Docs</h2>
<p>If you prefer to keep a file, the same simple layout works in any office tool:</p>
<ul>
<li><strong>Word or Google Docs:</strong> a two-column header table, a four-column item table and a short notes paragraph. Totals must be typed or calculated separately.</li>
<li><strong>Excel or Google Sheets:</strong> the same layout, with <code>=B12*C12</code> for each line and <code>=SUM(D12:D20)</code> for the total, so nothing needs retyping.</li>
</ul>
<p>Design tools such as Canva can produce attractive simple invoices too, but their invoice designs do not calculate totals; our <a href="/blog/canva-invoice-template">Canva invoice template</a> review covers the trade-offs.</p>

<h2>Keep it simple without losing anything important</h2>
<ul>
<li><strong>Use a real due date.</strong> "Due 6 November 2026" is clearer than "Net 14". See <a href="/blog/invoice-payment-terms">invoice payment terms</a> if you want to state both.</li>
<li><strong>Describe the work in plain words.</strong> One line per deliverable is enough, but "Services" on its own is not.</li>
<li><strong>Put the total where it is easy to find.</strong> Bottom right, bold, with the currency shown.</li>
<li><strong>Do not drop legal fields to save space.</strong> If you are registered for VAT or GST, the tax details are not optional.</li>
<li><strong>Use one currency per invoice.</strong> State the currency code if you bill clients abroad.</li>
</ul>

<h2>Does a simple invoice need a signature or stamp?</h2>
<p>In the UK, US and most of Europe, no. An invoice is valid without a signature. In parts of South Asia and the Gulf, some clients still expect a stamp or signature, especially on paper copies. If yours do, the generator lets you upload a signature image so it appears on every PDF without cluttering the layout.</p>

<h2>Simple invoice vs detailed invoice: when to switch</h2>
<p>A simple invoice works well for a few clear deliverables. Switch to a more detailed, <a href="/blog/itemized-invoice">itemised invoice</a> when you bill materials and labour separately, when a client asks for a breakdown, or when you charge for many small items. Services billed by the hour often need dates and hours on each line; our <a href="/blog/service-invoice-template">service invoice template</a> guide shows that layout.</p>

<h2>Simple wording you can copy into the notes</h2>
<p>A simple invoice still needs a few lines of text. These are short enough to keep the layout clean:</p>
<ul>
<li><strong>Payment instruction:</strong> "Please pay by bank transfer to [account name, bank, account number or IBAN] by 6 November 2026, quoting invoice 2026-031."</li>
<li><strong>Payment link:</strong> "Pay online by card at [your payment link]." Our guide to adding a payment link explains how to create one with your payment provider.</li>
<li><strong>Terms:</strong> "Payment due within 14 days of the invoice date."</li>
<li><strong>Late payment (only if agreed in your contract):</strong> "Overdue balances may be charged interest as set out in our agreement dated [date]."</li>
<li><strong>Thanks:</strong> "Thank you for your business." One line is plenty.</li>
</ul>
<p>Avoid long legal paragraphs on a simple invoice. If you have detailed terms, put them in your contract and refer to it.</p>

<h2>Simple invoices for clients abroad</h2>
<p>Billing a client in another country does not need a complicated template, but it does need a few details a local invoice might skip:</p>
<ul>
<li><strong>The currency, stated clearly.</strong> Use the currency code (USD, GBP, EUR, AED) where a symbol could be ambiguous, because "$" can mean several currencies. The generator's currency selector sets the currency for every amount on the invoice.</li>
<li><strong>Full international bank details</strong>, such as IBAN and SWIFT/BIC, or a payment link that accepts foreign cards. See bank details on an invoice.</li>
<li><strong>The client's full legal name and country</strong>, and their tax number if they gave you one.</li>
<li><strong>Any tax wording your rules require</strong>, such as a reverse-charge note for some cross-border services in the UK and EU.</li>
</ul>
<p>Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers exchange rates and transfer fees in more depth. The layout itself can stay exactly as simple as the example above.</p>

<h2>Make yours now</h2>
<p>Open the generator with the Minimal template, add your details once, and you will have a simple invoice ready to send in the time it takes to make a coffee. Next time, open the saved draft and change only what is new.</p>
`,
  },
  {
    slug: "invoice-template-pdf",
    title: "Invoice Template PDF: Fillable and Printable Options",
    description:
      "Invoice template PDF options compared: fillable PDF forms, printable blank invoices and generated PDFs, with tips for sending, printing and keeping PDF invoices.",
    category: "design-templates",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-pdf-print-checklist", "blank-invoice-template", "simple-invoice-template"],
    faqs: [
      {
        q: "How do I make a fillable invoice PDF?",
        a: "You need software that can add form fields to a PDF, such as Adobe Acrobat or another PDF editor with form tools. Create the invoice layout, add text fields for each box, and optionally add calculation scripts for totals. The result can be filled in a PDF reader, though calculations do not work in every reader.",
      },
      {
        q: "Can I edit an invoice PDF after downloading it?",
        a: "A flat PDF is hard to edit cleanly, and editing an invoice you have already sent is not good practice. Instead, correct the source (your template or saved draft) and export a new PDF. If the original was already sent, issue a credit note or a corrected invoice following your local rules.",
      },
      {
        q: "Is a PDF invoice legally acceptable?",
        a: "In most countries a PDF invoice is acceptable for ordinary business, as long as it contains the required details and the customer accepts electronic invoices. Where a structured e-invoicing mandate applies, such as in Saudi Arabia or for larger businesses in India, a PDF alone does not meet the requirement.",
      },
      {
        q: "What size should a printable invoice be?",
        a: "Use A4 (210 × 297 mm) in most of the world and US Letter (8.5 × 11 in) in the US and Canada. A4 files usually print acceptably on Letter paper with 'Fit to page' selected, but check the margins so nothing is cut off at the edges.",
      },
      {
        q: "Should I send an invoice as a PDF or a Word file?",
        a: "Send a PDF. It looks the same on every device, it is harder to alter by accident, and accounts teams can file it directly. Keep the Word or spreadsheet version for yourself as the editable source.",
      },
      {
        q: "How do I turn a Word, Excel or Google Docs invoice into a PDF?",
        a: "In Word or Excel, use File, then Save As or Export, and choose PDF. In Google Docs or Sheets, use File, then Download, then PDF document. Before exporting a spreadsheet, set the print area and choose to fit the sheet to one page wide so columns are not cut off. Open the PDF afterwards and check that every total and page break looks right.",
      },
      {
        q: "Can I sign an invoice PDF electronically?",
        a: "Yes. Most PDF readers have a fill and sign tool that lets you add a typed, drawn or image signature before sending. In our generator you can upload a signature image so it appears on every PDF automatically. Most countries do not require invoices to be signed at all, but some clients, especially in South Asia and the Gulf, still expect a signature or stamp.",
      },
      {
        q: "How do I stop my PDF invoice emails going to spam?",
        a: "Send from a professional address, ideally on your own domain, and use a plain subject line with the invoice number, such as 'Invoice INV-2026-031 from Maya Collins'. Write a short message in the email body rather than sending a bare attachment, avoid link shorteners, and keep the PDF small. Ask new clients to add your address to their contacts and confirm which inbox handles invoices.",
      },
      {
        q: "How big should an invoice PDF file be?",
        a: "As small as possible while still readable, ideally well under a few megabytes. Large files can be blocked or slow to open, and email providers set attachment limits, often around 20 to 25 MB. The usual cause of a bloated invoice is a high-resolution logo, so resize your logo image before adding it. If you attach timesheets or receipts, compress them or send them as a separate file.",
      },
      {
        q: "Can someone alter a PDF invoice after I send it?",
        a: "Yes, anyone with a PDF editor can change a copy, which is why invoice fraud often involves altered bank details. Protect yourself by keeping the original PDF you sent, numbering every invoice, and telling clients that your bank details will never change by email alone. Ask clients to confirm any change by phone. If there is a dispute, your saved original shows what you actually issued.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice template PDF comes in three forms. A fillable PDF has form fields you type into. A printable PDF is a blank layout you fill by hand. A generated PDF is created from a template tool after you enter the details, so totals are already calculated. For most small businesses, the generated PDF is the quickest and least error-prone option.</p>

<p>PDF is the default format for sending invoices because it looks the same on every screen and printer. The question is how you get to that PDF. This guide compares fillable, printable and generated invoice template PDF options, explains what our <a href="/invoice-generator?template=classic">free invoice generator</a> produces, and covers printing, file naming and storage.</p>

<h2>Three kinds of invoice template PDF</h2>
<table><thead><tr><th>Type</th><th>How it works</th><th>Best for</th><th>Limitations</th></tr></thead><tbody>
<tr><td>Fillable PDF</td><td>A PDF with form fields; you type into boxes in a PDF reader</td><td>Teams standardised on one PDF form</td><td>Needs form-building software to create; calculations work in some readers and not others</td></tr>
<tr><td>Printable (blank) PDF</td><td>An empty layout to print and complete by pen</td><td>Field work, markets, no device at hand</td><td>Hand arithmetic; you need to scan or photograph it to send</td></tr>
<tr><td>Generated PDF</td><td>You fill a web form or spreadsheet; it exports a finished PDF</td><td>Most freelancers and small businesses</td><td>The PDF itself is flat; edits happen in the source, then you export again</td></tr>
</tbody></table>

<h2>Fillable invoice PDF: pros and cons</h2>
<p>A fillable invoice PDF looks like a normal document but has interactive fields. They are popular inside organisations that want everyone to use exactly the same form.</p>
<ul>
<li><strong>Pros:</strong> consistent layout; no special app beyond a PDF reader to fill it; can be saved and emailed.</li>
<li><strong>Cons:</strong> you need a PDF editor with form tools to build or change it; automatic calculations rely on scripts that some readers, especially on phones and in browsers, ignore; long descriptions can overflow fixed boxes; once filled and saved, the fields may still be editable by the recipient unless you flatten the file.</li>
</ul>
<p>If you go this route, flatten (or "print to PDF") the completed invoice before sending, so the client receives a fixed document rather than an editable form.</p>

<h2>Printable invoice PDF: when paper still makes sense</h2>
<p>Printable invoices are handy for tradespeople on site, market stalls and anyone billing where a laptop is impractical. Print a stack of blank forms, pre-number them, and fill one in at the end of each job. Our <a href="/blog/blank-invoice-template">blank invoice template</a> guide covers the layout and how to fill it so nothing is missed.</p>
<p>The downsides: arithmetic is done by hand, handwriting can be misread, and you still need a digital copy for your records. Photograph or scan every invoice before handing it over.</p>

<h2>Generated invoice PDF: what our generator produces</h2>
<p>Our generator works like this: you choose one of 18 templates, fill in a form, and it shows a live preview with the totals calculated (subtotal, discount, a single tax rate, shipping or extra charges, amount already paid and balance due). When it looks right, you click Download PDF.</p>
<p>So you know exactly what you are getting:</p>
<ul>
<li><strong>Page size:</strong> the PDF is A4. On US Letter paper, print with "Fit to page".</li>
<li><strong>Flat, not fillable:</strong> the PDF is a rendered image of the invoice on the page, so it cannot be filled in or edited in a PDF reader, and the text is not selectable. To change something, edit the draft in the generator and download again.</li>
<li><strong>Your draft stays in your browser:</strong> it autosaves to local storage on that device. Clearing browser data removes it, so keep the PDFs you send.</li>
<li><strong>No account, no upload:</strong> the invoice is built in your browser.</li>
<li><strong>Not an e-invoice:</strong> the PDF is a human-readable document. It is not a structured e-invoice for systems such as ZATCA, Peppol or India's IRP. See our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> if a mandate applies to you.</li>
</ul>
<p>Because the text is not selectable, some clients whose systems extract data from PDFs automatically may prefer a text-based PDF. If a client asks for that, a Word or spreadsheet invoice exported to PDF will give them one.</p>

<h2>Worked example: a printable invoice PDF that adds up</h2>
<p>A small catering business invoices for an office lunch. VAT at 20% applies in this UK example.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Hot buffet lunch, per person</td><td>25</td><td>£14.00</td><td>£350.00</td></tr>
<tr><td>Fruit platter</td><td>2</td><td>£28.00</td><td>£56.00</td></tr>
<tr><td>Delivery and set-up</td><td>1</td><td>£30.00</td><td>£30.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>£436.00</td></tr>
<tr><td colspan="3">VAT 20%</td><td>£87.20</td></tr>
<tr><td colspan="3">Less deposit paid</td><td>−£100.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>£423.20</strong></td></tr>
</tbody></table>
<p>The maths: 25 × 14 = 350, 2 × 28 = 56, plus 30 gives 436. VAT at 20% is 87.20, so the invoice total is 523.20. After the £100 deposit, the balance due is £423.20. In the generator, the deposit goes in the "Amount already paid" field and the balance is shown automatically.</p>

<h2>Printing an invoice PDF without problems</h2>
<p>Invoices that look perfect on screen sometimes fail on paper: dark backgrounds use lots of ink, pale text disappears, and edges get clipped. Before you print a batch:</p>
<ul>
<li>Select the right paper size and "Fit to page" (or "Actual size" if the PDF matches your paper).</li>
<li>Check that totals, bank details and the invoice number are not near the page edge.</li>
<li>Print one test copy in black and white to check contrast.</li>
<li>For long invoices, check where the page break falls so a table row is not split.</li>
</ul>
<p>Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> goes through each of these in more detail, and the <a href="/invoice-templates/classic">Classic</a> and Minimal templates are the safest choices for office printers.</p>

<h2>Naming, sending and storing invoice PDFs</h2>
<ul>
<li><strong>Name files consistently.</strong> For example <code>INV-2026-031_Northpoint.pdf</code>. The invoice number first keeps files in order.</li>
<li><strong>Send from your own email</strong> with the invoice number, amount and due date in the subject line. Our guide to <a href="/blog/how-to-send-an-invoice">sending an invoice</a> includes email templates.</li>
<li><strong>Keep every PDF you issue</strong> in a folder per year, backed up. Tax authorities usually expect several years of records; see how long to keep invoices.</li>
<li><strong>Never edit a sent PDF.</strong> If something is wrong, follow the steps in how to correct an invoice.</li>
</ul>

<h2>Are PDF invoices accepted for tax purposes?</h2>
<p>In most countries, yes, for ordinary business. Tax authorities generally accept invoices in electronic form, including PDF, provided the invoice contains the required details, the records are kept for the required period, and they remain readable. In the UK and EU, for example, electronic invoices are generally acceptable where the customer agrees to receive them that way.</p>
<p>The exception is where a country has introduced mandatory structured e-invoicing. Under those systems the legally valid invoice is a data file in a set format, often cleared or reported through a government platform, and a PDF on its own does not satisfy the rule. Examples include Saudi Arabia's ZATCA regime and India's e-invoicing for businesses above the turnover threshold, with more countries phasing mandates in. Our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> and <a href="/blog/what-is-peppol">what is Peppol</a> explain how those systems work. If a mandate covers your business, use compliant e-invoicing software; a PDF generator, including ours, is not a substitute.</p>

<h2>Sending invoice PDFs from your phone</h2>
<p>You can make and send a PDF invoice entirely from a phone. In the generator, switch between the Edit and Preview tabs, then download the PDF; it lands in your phone's downloads or files app. From there, attach it to an email or share it in a messaging app. A few tips:</p>
<ul>
<li>Rename the file before sending if your phone gives it a generic name.</li>
<li>Open the PDF once to check it before you share it.</li>
<li>For business clients, email is better than chat apps, because accounts teams usually process invoices from a dedicated inbox.</li>
</ul>
<p>Our guide to making an invoice on your phone walks through the whole process on iPhone and Android.</p>

<h2>Can you password-protect an invoice PDF?</h2>
<p>You can, using a PDF editor, but most businesses do not, because the client then needs the password before their accounts team can process it. Sending the invoice to a verified email address and keeping your own copy is usually enough. If you are worried about fake invoices sent in your name, our guide to <a href="/blog/invoice-scams">invoice scams</a> explains what to watch for.</p>

<h2>Which invoice template PDF option should you choose?</h2>
<ul>
<li>Sending a few invoices a month from a laptop or phone: use a generated PDF.</li>
<li>Billing on site with no device: use a printable PDF and scan it afterwards.</li>
<li>Large team that must use one locked form: a fillable PDF, flattened before sending.</li>
<li>Client needs data they can import: ask what format they accept; it may be a structured e-invoice rather than any PDF.</li>
</ul>
<p>For a no-frills layout, see the <a href="/blog/simple-invoice-template">simple invoice template</a> guide. Otherwise, open the generator, pick a template and download your first PDF in a few minutes.</p>
`,
  },
  {
    slug: "service-invoice-template",
    title: "Service Invoice Template: Hourly, Flat-Fee and Retainer",
    description:
      "A service invoice template for hourly, flat-fee and retainer work: the fields to include, how to describe services, and a worked example with a deposit applied.",
    category: "design-templates",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "home-inspection-invoice-template",
      "invoice-for-services-rendered",
      "work-order-template",
      "how-to-invoice-for-hourly-work",
      "retainer-invoice",
      "simple-invoice-template",
    ],
    faqs: [
      {
        q: "What is a service invoice?",
        a: "A service invoice is a bill for work performed rather than goods sold. It describes the service, when it was delivered, how it was priced (by the hour, per job or on a retainer) and the amount due. It is used by consultants, trades, agencies, cleaners, IT support and most freelancers.",
      },
      {
        q: "How do I describe services on an invoice?",
        a: "Name the service, the period or date it was performed and the unit you charge by. For example, 'IT support, on-site, 14 October 2026, 3.5 hours' is far clearer than 'Support'. Reference the project, ticket or PO number where the client uses one.",
      },
      {
        q: "Do I charge sales tax or VAT on services?",
        a: "It depends on where you are and what the service is. In the UK and EU most services are subject to VAT if you are registered. In the US, many states do not tax most services, but some do tax specific ones. Check your local rules or ask an accountant before adding tax.",
      },
      {
        q: "Should I invoice services before or after the work?",
        a: "Small one-off jobs are usually invoiced on completion. Larger projects are often billed with a deposit up front and the balance on completion, or in milestones. Ongoing services are typically billed monthly, either in advance on a retainer or in arrears for hours used.",
      },
      {
        q: "How do I show a deposit on a service invoice?",
        a: "List the full work on the final invoice as normal, then subtract the deposit already received to show the balance due. Refer to the deposit invoice number or payment date so the client can match it.",
      },
      {
        q: "How do I charge for travel time on a service invoice?",
        a: "Show travel as its own line so the client can see it separately from the work itself. You can bill it hourly, sometimes at a reduced rate, as a flat charge per visit, or as mileage at an agreed rate per mile or kilometer. Whatever method you use, agree it before the job starts and state it in your quote or terms, so the line does not surprise the client.",
      },
      {
        q: "Can I charge a minimum call-out fee on a service invoice?",
        a: "Yes, if the client agreed to it before you attended. Many trades and IT support businesses charge a minimum, such as the first hour or a fixed call-out fee, even for very short jobs. Show it on the invoice as a clear line, for example 'Call-out charge, includes first 60 minutes on site', then bill any further time separately. Put the policy in your quote or booking confirmation.",
      },
      {
        q: "How do I invoice a client who cancels a service at short notice?",
        a: "You can invoice a cancellation fee only if your terms said so before the booking, for example '50% of the booking fee for cancellations within 24 hours'. Issue a normal invoice with one line describing the cancelled appointment, its date and the fee, and refer to the terms the client accepted. If there was no cancellation clause, you can ask, but the client may not be obliged to pay.",
      },
      {
        q: "Should I invoice materials separately from labour?",
        a: "Usually, yes. Listing parts or materials on their own lines, with quantities and prices, shows the client exactly what they paid for and makes queries easier to answer. It also matters for tax, because in some places goods are taxed differently from labour. If you add a markup to materials, agree it in advance. Keep supplier receipts in case the client asks to see them.",
      },
      {
        q: "How do I invoice recurring services such as monthly maintenance?",
        a: "Invoice on the same date each month, give each invoice a new number in your normal sequence, and state the service period, such as '1 to 30 November 2026'. Keep the description the same so the client's accounts team recognizes it. Our generator does not create recurring invoices automatically, but it saves your draft in the browser, so each month you can update the number, dates and period and download a new PDF.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A service invoice template bills for work rather than products. Alongside the standard fields (your details, the client's, invoice number, dates, total and payment instructions), it should show what service was performed, when, and how it is priced: hours × rate, a fixed fee per job, or a retainer for a period. Show deposits and expenses on their own lines.</p>

<p>Services are harder to invoice than products because the client cannot count what they received. A good service invoice template makes the work visible: dates, hours, deliverables and references. This guide covers the three common pricing models, the fields to include, a worked example with a deposit, and how to build one in our <a href="/invoice-generator?template=modern">free invoice generator</a>.</p>

<h2>What should a service invoice include?</h2>
<table><thead><tr><th>Field</th><th>Service-specific tip</th></tr></thead><tbody>
<tr><td>Your business details</td><td>Name, address, email, phone, tax ID if registered</td></tr>
<tr><td>Client details</td><td>Company name and the person or department who approves invoices</td></tr>
<tr><td>Invoice number and dates</td><td>Issue date, due date, and the service period (e.g. 1–31 October 2026)</td></tr>
<tr><td>PO or project reference</td><td>Many companies cannot pay without it</td></tr>
<tr><td>Service lines</td><td>What, when and how priced: hours, days, visits or fixed fee</td></tr>
<tr><td>Expenses or materials</td><td>Separate lines, with receipts available on request</td></tr>
<tr><td>Deposits or payments received</td><td>Subtracted to show the balance due</td></tr>
<tr><td>Tax</td><td>Only if registered and the service is taxable where you are</td></tr>
<tr><td>Payment terms and methods</td><td>Due date, bank details or payment link, late fee policy if agreed</td></tr>
</tbody></table>
<p>The general field-by-field walkthrough is in how to fill out an invoice.</p>

<h2>Three ways to price services on an invoice</h2>
<h3>Hourly or daily rate</h3>
<p>Each line shows hours (or days) as the quantity and your rate as the price. Group hours by task or by week so the client can follow them, and keep a timesheet in case they ask. Our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers rounding, minimum call-out charges and timesheet formats.</p>
<h3>Flat fee per job or deliverable</h3>
<p>Quantity is 1 (or the number of units) and the rate is the agreed price. Describe the deliverable precisely: "Logo design, 3 concepts and 2 revision rounds" rather than "Logo". Flat fees suit work with a well-defined scope.</p>
<h3>Retainer</h3>
<p>The client pays a fixed amount for a period, often in advance, for a set number of hours or an agreed scope. The invoice states the period covered and what is included, plus any overage from the previous period. See our <a href="/blog/retainer-invoice">retainer invoice</a> guide for wording and examples.</p>
<p>Many service businesses mix these: a flat setup fee, hourly support afterwards, and a small expense line.</p>

<h2>Worked example: IT support service invoice with a deposit</h2>
<p>An IT consultant sets up a small office network. The client paid a $200 deposit when booking. In this example, the consultant's state does not tax these services, so no tax line appears; check your own state's rules.</p>
<p><strong>Invoice INV-2026-118</strong> · Issued: 23 October 2026 · Due: 6 November 2026<br>
Bill to: Larkspur Dental Clinic · PO: LDC-4471 · Service dates: 19–21 October 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Network setup and configuration, fixed fee (router, Wi-Fi, 8 workstations)</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>On-site support and testing, 19–21 Oct (hours)</td><td>6.5</td><td>$90.00</td><td>$585.00</td></tr>
<tr><td>Travel, flat charge per visit</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td colspan="3">Total</td><td>$880.00</td></tr>
<tr><td colspan="3">Less deposit received 10 Oct 2026</td><td>−$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$680.00</strong></td></tr>
</tbody></table>
<p>The maths: 250 + (6.5 × 90 = 585) + 45 = 880. Less the $200 deposit, the balance due is $680. In the generator you would enter the three lines, put 200 in "Amount already paid", and the preview shows the $680 balance. The PO number has its own field.</p>
<p>If parts or hardware were supplied too, list each one separately. Where goods are taxable but the labour is not, tax treatment gets more complex; the generator applies one tax rate to the whole subtotal, so in that situation you may need separate invoices or a tool that supports per-line tax. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains the basics.</p>

<h2>How to write service descriptions clients approve quickly</h2>
<ul>
<li><strong>Lead with the outcome.</strong> "Monthly bookkeeping, September 2026: bank reconciliation, payroll journal, VAT return prep" beats "Accounting services".</li>
<li><strong>Add dates.</strong> Either per line or as a service period at the top.</li>
<li><strong>Match the language of the quote or contract.</strong> If the proposal said "Phase 2: content migration", use the same words.</li>
<li><strong>Reference tickets, job numbers or site addresses</strong> for trades and support work.</li>
<li><strong>Keep internal jargon off.</strong> The person approving the invoice may not be the person you worked with.</li>
</ul>

<h2>Service invoice templates by type of business</h2>
<p>The same structure adapts to most service work. Our industry guides go deeper:</p>
<ul>
<li>Consultants and advisers: <a href="/blog/consulting-invoice-template">consulting invoice template</a>.</li>
<li>Cleaners: cleaning service invoice template, with per-visit and recurring billing.</li>
<li>Independent contractors in the US: <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>.</li>
<li>Virtual assistants: <a href="/blog/virtual-assistant-invoice-template">virtual assistant invoice template</a>.</li>
</ul>
<p>For layout, the <a href="/invoice-templates/modern">Modern</a> and Agency templates suit professional services, while Emerald works well for wellness and coaching.</p>

<h2>Deposits, milestones and expenses</h2>
<p>For bigger service jobs, invoice in stages to protect your cash flow:</p>
<ul>
<li><strong>Deposit:</strong> a percentage up front, invoiced separately. See <a href="/blog/deposit-invoice">deposit invoices</a>.</li>
<li><strong>Milestones:</strong> agreed payments as phases finish. Our milestone payments guide shows how to word them.</li>
<li><strong>Expenses:</strong> travel, software licences or materials passed through at cost or with a stated markup, on their own lines. Agree in advance which expenses you will recharge.</li>
</ul>
<p>On the final invoice, list the full work and subtract everything already paid, rather than invoicing only the remainder with no context. The client's accounts team can then see the whole picture on one page.</p>

<h2>Payment terms that suit service work</h2>
<p>Net 14 or Net 30 is common for business clients; small jobs for individuals are often due on receipt. Whatever you choose, write a real due date on the invoice. If you have agreed a late fee in your contract, state it in the terms. Our payment terms guide compares the options.</p>

<h2>Service invoice vs sales invoice</h2>
<p>The two share most fields. The differences come from what is being sold:</p>
<table><thead><tr><th></th><th>Service invoice</th><th>Sales (goods) invoice</th></tr></thead><tbody>
<tr><td>What is billed</td><td>Time, expertise, labour, outcomes</td><td>Physical or digital products</td></tr>
<tr><td>Quantity means</td><td>Hours, days, visits, or 1 for a fixed fee</td><td>Units, kilograms, metres</td></tr>
<tr><td>Key extra detail</td><td>Service dates or period, scope</td><td>Item codes, delivery date, shipping</td></tr>
<tr><td>Supporting document</td><td>Timesheet, signed job sheet, contract</td><td>Delivery note or packing slip</td></tr>
<tr><td>Typical timing</td><td>On completion, monthly, or by milestone</td><td>At sale or on shipment</td></tr>
</tbody></table>
<p>If you sell both, for example a repair business that supplies parts and labour, show the two on separate lines. Our article on sales invoices covers the goods side in more detail.</p>

<h2>Service invoicing mistakes that delay payment</h2>
<ul>
<li><strong>No service dates.</strong> The approver cannot tell whether this is a new charge or a duplicate of last month's.</li>
<li><strong>Hours without a breakdown.</strong> "38 hours" on one line invites questions. Group by task or week, or attach the timesheet.</li>
<li><strong>Missing PO or project code.</strong> Many larger clients reject invoices without one. Ask for it before you start work.</li>
<li><strong>Invoicing the wrong entity.</strong> Bill the legal company named in the contract, not the brand name or the person you dealt with.</li>
<li><strong>Charging tax you are not registered for</strong>, or forgetting tax you are required to charge.</li>
<li><strong>Waiting too long to invoice.</strong> The longer the gap between the work and the invoice, the more likely payment slips. Invoice on completion or on a fixed day each month.</li>
</ul>
<p>Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> has more, with fixes for each.</p>

<h2>Keeping records that back up a service invoice</h2>
<p>Because the client cannot count a service the way they count boxes, your supporting records do the job a delivery note does for goods. Keep, for each invoice:</p>
<ul>
<li>The signed quote, proposal or contract that set the price and scope.</li>
<li>Timesheets or job sheets showing dates, hours and who did the work.</li>
<li>Any written change requests, such as an email asking for an extra revision round.</li>
<li>Receipts for expenses you have recharged.</li>
</ul>
<p>You rarely need to attach these, but if a client queries a line, being able to reply the same day with the timesheet or the email that approved the extra work usually settles it. Store them in the same folder as the invoice PDF, named with the invoice number.</p>

<h2>Create your service invoice</h2>
<p>Open the generator with the Modern template, enter your details and the client's PO number, add each service line with its quantity and rate, record any deposit in "Amount already paid", and download the PDF. Save the draft in your browser and reuse it next month with new dates and hours.</p>
`,
  },
  {
    slug: "purchase-order-template",
    title: "Purchase Order Template: Format, Fields and Sample",
    description:
      "A purchase order template and format with every field explained, a worked PO sample, how POs link to quotes and invoices, and how to set one up in Excel or Word.",
    category: "invoicing-basics",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "order-form-template",
      "purchase-requisition-vs-purchase-order",
      "invoice-vs-purchase-order",
      "po-number-on-invoice",
      "quotation-format",
    ],
    faqs: [
      {
        q: "What is a purchase order?",
        a: "A purchase order (PO) is a document a buyer sends to a supplier to order goods or services at agreed prices and terms. It authorises the purchase internally and, once the supplier accepts it, usually forms the contract. The supplier later sends an invoice quoting the PO number.",
      },
      {
        q: "Who creates a purchase order, the buyer or the seller?",
        a: "The buyer creates the purchase order. The seller creates the quotation before it and the invoice after it. If a customer asks you, as the seller, for a PO, they really mean they will send one to you.",
      },
      {
        q: "What should a purchase order include?",
        a: "A PO number, date, buyer and supplier details, delivery address, a list of items with quantities and agreed prices, tax, the total, delivery date, payment terms and an authorised signature. Many buyers also add a reference to the supplier's quotation and their own cost centre.",
      },
      {
        q: "Is a purchase order legally binding?",
        a: "A purchase order is usually an offer to buy. When the supplier accepts it, in writing or by delivering, it typically becomes a binding contract on the PO's terms. The exact rules depend on the country and on any master agreement between the parties.",
      },
      {
        q: "What is a three-way match?",
        a: "A three-way match is an accounts payable check that compares the purchase order, the goods received note or delivery note, and the supplier's invoice. Payment is approved only when quantities and prices agree across all three.",
      },
      {
        q: "Can a supplier send an invoice without a purchase order?",
        a: "Yes, unless the buyer requires one. Many small businesses buy without POs. Larger companies often have a 'no PO, no pay' policy, though, and their accounts payable team will return an invoice that does not quote a valid PO number. If you are the supplier, ask before starting work whether a PO is needed, and wait for the number so your invoice can be matched and paid.",
      },
      {
        q: "What happens if the invoice amount does not match the purchase order?",
        a: "The buyer's accounts team will usually put the invoice on hold until the difference is explained. Some companies allow a small tolerance, but anything larger needs action: either the buyer issues an amended PO for the extra quantity or price, or the supplier issues a corrected invoice or credit note. Agree any changes in writing before delivery so the documents still match at the end.",
      },
      {
        q: "Can a purchase order be changed or cancelled after it is sent?",
        a: "Usually by agreement. Before the supplier accepts it, a buyer can normally withdraw or amend a PO freely. After acceptance, changes are normally made with a written change order or amended PO that both sides accept, and cancellation may involve costs for work already done, depending on the PO terms and local law. Give the amended PO a revision number so everyone works from the latest version.",
      },
      {
        q: "What is the difference between a purchase order and a sales order?",
        a: "They describe the same deal from opposite sides. The buyer issues a purchase order to place the order with the supplier. The supplier then often creates a sales order in its own system to confirm the order internally, plan stock and schedule delivery. A sales order may be sent back to the buyer as an order confirmation, quoting the buyer's PO number.",
      },
      {
        q: "How do I invoice a partial delivery against a purchase order?",
        a: "Invoice only what you have delivered, quote the same PO number, and show the quantity shipped against the PO line. Note in the invoice what remains outstanding, for example '60 of 100 units delivered; balance to follow'. Each later delivery gets its own invoice quoting the PO. Check that the total invoiced never exceeds the PO value, because over-billed invoices are usually blocked.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A purchase order template is the buyer's ordering document. A standard purchase order format includes a unique PO number, the date, buyer and supplier details, the delivery address, an item table with quantities and agreed unit prices, tax and total, the required delivery date, payment terms, a reference to the supplier's quote and an authorised signature.</p>

<p>If you buy from suppliers regularly, a consistent purchase order template keeps spending under control and gives you something to check invoices against. If you are the supplier, understanding the PO helps you invoice in a way the buyer's accounts team will pay without queries. This guide covers both sides, with a filled-in sample and Excel setup.</p>
<p>One thing to be clear about up front: our <a href="/invoice-generator?template=corporate">invoice generator</a> creates invoices, not purchase orders. The document heading is fixed as "Invoice" and cannot be renamed, so it is not a PO tool. What it does have is a dedicated PO number field, so suppliers can reference the buyer's PO on their invoice.</p>

<h2>Where a purchase order fits</h2>
<p>A typical B2B purchase moves through these documents in order:</p>
<ol>
<li><strong>Quotation</strong> from the supplier, with prices and validity. See our <a href="/blog/quotation-format">quotation format</a> guide.</li>
<li><strong>Purchase order</strong> from the buyer, accepting those prices and setting delivery terms.</li>
<li><strong>Delivery note or <a href="/blog/delivery-challan-format">delivery challan</a></strong> travelling with the goods, signed on receipt.</li>
<li><strong>Invoice</strong> from the supplier, quoting the PO number.</li>
<li><strong>Payment</strong>, often with a <a href="/blog/remittance-advice">remittance advice</a> listing what was paid.</li>
</ol>
<p>For a detailed comparison of the two main documents, read <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a>.</p>

<h2>Purchase order format: fields to include</h2>
<table><thead><tr><th>Field</th><th>What to enter</th></tr></thead><tbody>
<tr><td>PO number</td><td>Unique, sequential, e.g. PO-2026-0217</td></tr>
<tr><td>PO date</td><td>The date the order is issued</td></tr>
<tr><td>Buyer details</td><td>Company name, billing address, contact, tax ID if relevant</td></tr>
<tr><td>Supplier details</td><td>Name, address, supplier account number if you use one</td></tr>
<tr><td>Ship-to address</td><td>Where goods should be delivered, if different from billing</td></tr>
<tr><td>Quote reference</td><td>The supplier's quotation number and date</td></tr>
<tr><td>Item table</td><td>Item code, description, quantity, unit, unit price, line total</td></tr>
<tr><td>Subtotal, tax, shipping, total</td><td>Exactly as agreed</td></tr>
<tr><td>Delivery date and method</td><td>Required-by date, shipping terms (and Incoterms for imports)</td></tr>
<tr><td>Payment terms</td><td>e.g. Net 30 from receipt of a valid invoice</td></tr>
<tr><td>Invoice instructions</td><td>"Quote PO number on all invoices; send to ap@..."</td></tr>
<tr><td>Authorisation</td><td>Name, title and signature of the approver</td></tr>
</tbody></table>
<p>Many buyers also add a cost centre or budget code for internal tracking and a line of standard terms and conditions, or a link to them.</p>

<h2>Purchase order sample (worked example)</h2>
<p>A US office manager orders supplies following the supplier's quote. Sales tax at 6% applies to the goods; in this example, the shipping charge is not taxed. Whether shipping is taxable varies by state.</p>
<p><strong>Purchase Order PO-2026-0217</strong> · Date: 23 October 2026<br>
Buyer: Ridgeview Accounting LLC · Supplier: Metro Office Supply Co.<br>
Quote ref: Q-88412 dated 20 October 2026 · Deliver by: 30 October 2026 · Terms: Net 30</p>
<table><thead><tr><th>Item</th><th>Description</th><th>Qty</th><th>Unit price</th><th>Line total</th></tr></thead><tbody>
<tr><td>PPR-A4-80</td><td>Copy paper, 500-sheet ream</td><td>50</td><td>$6.20</td><td>$310.00</td></tr>
<tr><td>TNR-HP-58X</td><td>Toner cartridge, high yield</td><td>10</td><td>$68.50</td><td>$685.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$995.00</td></tr>
<tr><td colspan="4">Sales tax 6%</td><td>$59.70</td></tr>
<tr><td colspan="4">Shipping</td><td>$25.00</td></tr>
<tr><td colspan="4"><strong>PO total</strong></td><td><strong>$1,079.70</strong></td></tr>
</tbody></table>
<p>The maths: 50 × 6.20 = 310 and 10 × 68.50 = 685, a subtotal of 995. Tax at 6% is 59.70, plus 25 shipping, for a total of 1,079.70. When Metro invoices, the invoice should show the same lines and prices and quote PO-2026-0217.</p>

<h2>How to make a purchase order template in Excel</h2>
<ul>
<li>Rows 1–10: your company header, "PURCHASE ORDER", PO number, date, supplier and ship-to blocks.</li>
<li>Row 12 headings: Item, Description, Qty, Unit price, Line total (columns A–E).</li>
<li>Rows 13–30: lines. In E13 enter <code>=C13*D13</code> and copy down.</li>
<li>Subtotal (E32): <code>=SUM(E13:E30)</code></li>
<li>Tax rate in D33, tax in E33: <code>=ROUND(E32*D33,2)</code></li>
<li>Shipping in E34; total in E35: <code>=E32+E33+E34</code></li>
<li>Below: delivery date, terms, invoice instructions and signature line.</li>
</ul>
<p>For numbering, keep a PO log on a second sheet (PO number, date, supplier, total, status) and take the next number from it, so two people never issue the same one. Our <a href="/blog/how-to-make-an-invoice-in-excel">Excel invoice guide</a> uses the same layout techniques, and the <a href="/tools/invoice-number-generator">number generator</a> can suggest a PO numbering pattern too.</p>
<p>In Word, build the same structure with tables; just remember Word will not recalculate totals reliably, so do the sums in a spreadsheet first.</p>

<h2>Can I use the invoice generator for a purchase order?</h2>
<p>Not properly. The generator's layout is built for invoices: the heading reads "Invoice", the parties are labelled "From" and "Bill to", and the dates are "Issued" and "Due". None of those labels can be changed, so a document made there would be an invoice with the wrong roles, which could confuse a supplier's accounts team. Use a PO template in Excel, Word or your purchasing software instead.</p>
<p>Where the generator does help is on the supplier's side of the same transaction. When you receive a PO, enter its number in the <strong>PO number</strong> field, copy the line descriptions and prices exactly, and the buyer can match your invoice in seconds. Our article on the <a href="/blog/po-number-on-invoice">PO number on an invoice</a> explains why a missing number is one of the most common reasons invoices sit unpaid.</p>

<h2>Purchase order best practice for small businesses</h2>
<ul>
<li><strong>Set a PO threshold.</strong> Many small firms require a PO only above a certain amount, so routine small purchases are not slowed down.</li>
<li><strong>Get the quote first.</strong> Reference it on the PO so prices are locked.</li>
<li><strong>Check deliveries against the PO.</strong> Note shortages on the delivery note before signing.</li>
<li><strong>Three-way match before paying.</strong> PO, delivery note and invoice should agree on quantities and prices.</li>
<li><strong>Close POs once complete.</strong> Mark them fulfilled in your log so nothing is invoiced twice.</li>
</ul>
<p>If you are getting organised on the buying side, our explainer on <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a> shows where POs sit in your books.</p>

<h2>What suppliers should check when a PO arrives</h2>
<p>If you are on the receiving end of a purchase order, check it before you deliver anything. Errors are much easier to fix before the goods leave than after the invoice is rejected.</p>
<ul>
<li><strong>Prices and quantities</strong> match your quotation, including any discount you agreed.</li>
<li><strong>The legal entity</strong> on the PO is the one you will invoice, and the billing address is correct.</li>
<li><strong>Delivery date and address</strong> are achievable.</li>
<li><strong>Payment terms</strong> are what you agreed. Some POs quietly specify longer terms than your quote.</li>
<li><strong>Invoice instructions</strong>: where to send invoices, and any reference they must show.</li>
</ul>
<p>If anything is wrong, ask for an amended PO in writing before you deliver.</p>

<h2>Purchase order vs quotation vs invoice</h2>
<table><thead><tr><th></th><th>Quotation</th><th>Purchase order</th><th>Invoice</th></tr></thead><tbody>
<tr><td>Issued by</td><td>Seller</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Purpose</td><td>Offers a price</td><td>Places an order at that price</td><td>Requests payment</td></tr>
<tr><td>Timing</td><td>Before the order</td><td>When the buyer commits</td><td>After delivery, or as agreed</td></tr>
<tr><td>Reference it carries</td><td>Quote number and validity</td><td>PO number and quote reference</td><td>Invoice number and PO number</td></tr>
<tr><td>Accounting effect</td><td>None</td><td>Commits budget; usually no entry in a small business's books</td><td>Creates a receivable for the seller and a payable for the buyer</td></tr>
</tbody></table>
<p>Keeping the three numbers on each other's documents is what makes the trail easy to follow. A buyer who sees "Quote Q-88412, PO-2026-0217" on an invoice can approve it in moments.</p>

<h2>Types of purchase order</h2>
<p>Most small businesses only need the standard type, but it helps to know the others when a larger customer mentions them:</p>
<ul>
<li><strong>Standard PO:</strong> a one-off order for specific items, quantities, prices and a delivery date. The example above is a standard PO.</li>
<li><strong>Blanket PO:</strong> covers repeated purchases from one supplier over a period, often up to a total value and at agreed prices. Deliveries are called off against it, and suppliers invoice each delivery quoting the blanket PO number.</li>
<li><strong>Planned PO:</strong> sets out items and prices, with delivery dates confirmed later through releases.</li>
<li><strong>Contract PO:</strong> sets the terms and conditions for a relationship without listing specific items; separate POs refer to it.</li>
</ul>
<p>If a customer issues you a blanket PO with a value limit, keep a running total of what you have invoiced against it. Once the limit is reached, further invoices are often blocked until they raise a new PO, so ask for one before you get there.</p>

<h2>Next step</h2>
<p>Buyers: copy the field list above into an Excel sheet, add the formulas, and start a PO log. Suppliers: next time a customer sends a PO, open the <a href="/invoice-templates/corporate">Corporate template</a> in the generator, put their PO number in the PO field, mirror their line items, and download a PDF invoice they can approve without a query.</p>
`,
  },
  {
    slug: "invoice-tracker-spreadsheet",
    title: "Invoice Tracker Spreadsheet: Columns and Formulas",
    description:
      "Build an invoice tracker spreadsheet in Excel or Google Sheets: columns and copy-paste formulas for status, days overdue and aging buckets, with an example.",
    category: "business-finance",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "accounts-receivable-aging-report",
      "google-sheets-invoice-template",
      "overdue-invoice",
    ],
    faqs: [
      {
        q: "How do I track invoices in Excel?",
        a: "Create one row per invoice with columns for invoice number, client, issue date, due date, amount, amount paid and date paid. Add formula columns for balance, status, days overdue and aging bucket. Use TODAY() so overdue figures update automatically each time you open the file.",
      },
      {
        q: "What columns should an invoice tracker have?",
        a: "The essentials are invoice number, client, issue date, due date, invoice amount, amount paid, balance, status and date paid. Useful extras are days overdue, aging bucket, payment method, last reminder date and notes.",
      },
      {
        q: "How do I calculate days overdue in Excel or Google Sheets?",
        a: "Subtract the due date from today's date, but only when there is a balance and the due date has passed: =IF(AND(G2>0,TODAY()>D2),TODAY()-D2,0). Format the result as a number, not a date.",
      },
      {
        q: "Does the same formula work in Google Sheets?",
        a: "Yes. The IF, AND, TODAY, SUMIFS and COUNTIF formulas in this guide work the same way in Excel and Google Sheets. The main differences are in menus, such as where conditional formatting and data validation live.",
      },
      {
        q: "When should I move from a spreadsheet to software?",
        a: "A spreadsheet works well for dozens of invoices a month. Consider accounting software when you have many clients paying part amounts, several people updating the tracker, or you need bank reconciliation and automatic reminders.",
      },
      {
        q: "How do I calculate end-of-month or business-day due dates in a tracker?",
        a: "Use date functions instead of adding days by hand. For a due date 30 business days after the issue date, use =WORKDAY(C2,30). For 'end of month following', use =EOMONTH(C2,1), which returns the last day of the next month. Both functions work in Excel and Google Sheets. Format the result as a date, and make sure the terms you calculate match those printed on the invoice.",
      },
      {
        q: "Can I track invoices in different currencies in one spreadsheet?",
        a: 'Yes. Add a Currency column and never mix currencies in a single total. Use SUMIFS with the currency as a condition, such as =SUMIFS(G:G,N:N,"USD"), to total balances per currency. If you want one combined figure, add an exchange rate column and a converted balance column, and record the rate date. Remember that the amount you finally receive may differ because of exchange rates and fees.',
      },
      {
        q: "How do I see which clients take the longest to pay?",
        a: 'First add a \'days to pay\' column for paid invoices, using =IF(I2="","",I2-C2). Then calculate the average for each client with AVERAGEIFS, for example =AVERAGEIFS(N:N,B:B,"Acme Ltd"), where N holds days to pay. A pivot table with Client as rows and the average of days to pay as values does the same for every client at once. Use the result to adjust deposits or terms.',
      },
      {
        q: "How can I spot duplicate invoice numbers in my tracker?",
        a: "Add a conditional formatting rule to the invoice number column with the custom formula =COUNTIF($A:$A,$A2)>1 and a bright fill. Any number that appears more than once will be highlighted immediately. You can also sort by invoice number to see gaps. Duplicates cause double payments and confusion with clients, so fix them at once by correcting the record or reissuing the invoice with a new number.",
      },
      {
        q: "Is an invoice tracker spreadsheet enough for my tax records?",
        a: "No, not on its own. A tracker is a summary that helps you manage cash flow, but tax authorities generally expect you to keep the invoices themselves, plus receipts and bank records, for a set number of years. Keep every invoice PDF alongside the tracker, and back up both. Check your tax authority's record-keeping rules, such as those from the IRS or HMRC, for the period that applies to you.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice tracker spreadsheet has one row per invoice with columns for invoice number, client, issue date, due date, amount, amount paid, balance, status, date paid, days overdue and aging bucket. Formulas using IF, TODAY and SUMIFS work out status, days overdue and how much sits in each aging bucket, so the sheet updates itself every day.</p>

<p>Creating invoices is only half the job; the other half is knowing which ones have been paid. If you make invoices in our <a href="/invoice-generator">free invoice generator</a>, it does not track payments for you, so a simple invoice tracker is the natural companion. Below are the columns, the formulas for Excel and Google Sheets, a worked example dated 23 October 2026, and a summary block that doubles as a mini aging report.</p>

<h2>What an invoice tracker does</h2>
<p>An invoice tracker is a running list of everything you have billed and what is still owed. At a glance it should tell you:</p>
<ul>
<li>Who owes you money and how much in total.</li>
<li>Which invoices are overdue, and by how many days.</li>
<li>How old your unpaid balances are (current, 1–30, 31–60, 61–90, over 90 days).</li>
<li>Which clients consistently pay late.</li>
</ul>
<p>That last bucket view is the core of an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>, which you can build straight from the tracker.</p>

<h2>Invoice tracking spreadsheet: the columns</h2>
<table><thead><tr><th>Col</th><th>Heading</th><th>Type</th><th>Notes</th></tr></thead><tbody>
<tr><td>A</td><td>Invoice #</td><td>Typed</td><td>Must match the number on the PDF</td></tr>
<tr><td>B</td><td>Client</td><td>Typed</td><td>Use the same spelling each time so SUMIFS works</td></tr>
<tr><td>C</td><td>Issue date</td><td>Date</td><td></td></tr>
<tr><td>D</td><td>Due date</td><td>Date</td><td>Or formula, e.g. <code>=C2+30</code> for Net 30</td></tr>
<tr><td>E</td><td>Amount</td><td>Currency</td><td>Invoice total including tax</td></tr>
<tr><td>F</td><td>Amount paid</td><td>Currency</td><td>Running total of payments received</td></tr>
<tr><td>G</td><td>Balance</td><td>Formula</td><td><code>=E2-F2</code></td></tr>
<tr><td>H</td><td>Status</td><td>Formula</td><td>Paid / Overdue / Part paid / Open</td></tr>
<tr><td>I</td><td>Date paid</td><td>Date</td><td>Date the final payment arrived</td></tr>
<tr><td>J</td><td>Days overdue</td><td>Formula</td><td>0 if paid or not yet due</td></tr>
<tr><td>K</td><td>Aging bucket</td><td>Formula</td><td>Current, 1-30, 31-60, 61-90, 90+</td></tr>
<tr><td>L</td><td>Last reminder</td><td>Date</td><td>Optional; helps you chase on schedule</td></tr>
<tr><td>M</td><td>Notes</td><td>Typed</td><td>Disputes, promises to pay, PO numbers</td></tr>
</tbody></table>
<p>Put headings in row 1, start data in row 2, and freeze the top row. Format C, D, I and L as dates and E, F, G as currency.</p>

<h2>Formulas for status, days overdue and aging buckets</h2>
<p>Enter these in row 2 and copy them down. They work in both Excel and Google Sheets.</p>
<h3>Balance (G2)</h3>
<p><code>=E2-F2</code></p>
<h3>Status (H2)</h3>
<p><code>=IF(G2&lt;=0,"Paid",IF(TODAY()&gt;D2,"Overdue",IF(F2&gt;0,"Part paid","Open")))</code></p>
<p>This checks in order: nothing left to pay means Paid; past the due date with a balance means Overdue; some money received but not yet due means Part paid; otherwise Open.</p>
<h3>Days overdue (J2)</h3>
<p><code>=IF(AND(G2&gt;0,TODAY()&gt;D2),TODAY()-D2,0)</code></p>
<p>Format J as a plain number. If it shows as a date, change the cell format to Number with no decimals.</p>
<h3>Aging bucket (K2)</h3>
<p><code>=IF(G2&lt;=0,"Paid",IF(J2=0,"Current",IF(J2&lt;=30,"1-30",IF(J2&lt;=60,"31-60",IF(J2&lt;=90,"61-90","90+")))))</code></p>
<h3>Optional: days to pay (for paid invoices)</h3>
<p><code>=IF(I2="","",I2-C2)</code> gives the number of days each client took to pay, which feeds measures such as <a href="/blog/days-sales-outstanding">days sales outstanding</a>.</p>
<p>A note on TODAY(): it recalculates whenever the file opens, which is what you want for a live tracker. If you need a fixed snapshot for a month-end report, copy the sheet and paste values only.</p>

<h2>Worked example (as at 23 October 2026)</h2>
<p>Here is a tracker with six invoices, with the formula columns already calculated using 23 October 2026 as today.</p>
<table><thead><tr><th>Invoice #</th><th>Client</th><th>Issued</th><th>Due</th><th>Amount</th><th>Paid</th><th>Balance</th><th>Status</th><th>Days overdue</th><th>Bucket</th></tr></thead><tbody>
<tr><td>INV-101</td><td>Acme Ltd</td><td>10 Aug 2026</td><td>9 Sep 2026</td><td>1,200.00</td><td>0.00</td><td>1,200.00</td><td>Overdue</td><td>44</td><td>31-60</td></tr>
<tr><td>INV-102</td><td>Brightline</td><td>1 Sep 2026</td><td>1 Oct 2026</td><td>850.00</td><td>400.00</td><td>450.00</td><td>Overdue</td><td>22</td><td>1-30</td></tr>
<tr><td>INV-103</td><td>Cedar &amp; Co</td><td>15 Jul 2026</td><td>14 Aug 2026</td><td>2,300.00</td><td>0.00</td><td>2,300.00</td><td>Overdue</td><td>70</td><td>61-90</td></tr>
<tr><td>INV-104</td><td>Delta Studio</td><td>5 Oct 2026</td><td>4 Nov 2026</td><td>640.00</td><td>0.00</td><td>640.00</td><td>Open</td><td>0</td><td>Current</td></tr>
<tr><td>INV-105</td><td>Evergreen</td><td>20 Sep 2026</td><td>20 Oct 2026</td><td>975.00</td><td>975.00</td><td>0.00</td><td>Paid</td><td>0</td><td>Paid</td></tr>
<tr><td>INV-106</td><td>Foster Group</td><td>1 Jun 2026</td><td>1 Jul 2026</td><td>500.00</td><td>0.00</td><td>500.00</td><td>Overdue</td><td>114</td><td>90+</td></tr>
</tbody></table>
<p>Checking the day counts: from 9 September to 23 October is 21 days left in September plus 23 in October, so 44. From 14 August it is 17 + 30 + 23 = 70. From 1 July it is 30 + 31 + 30 + 23 = 114. Brightline's 1 October due date gives 22 days.</p>
<p>Total outstanding is 1,200 + 450 + 2,300 + 640 + 500 = 5,090.00.</p>

<h2>Add a summary block (a mini aging report)</h2>
<p>Off to the right of the table (say in columns O and P), add a summary that updates automatically:</p>
<table><thead><tr><th>Label (O)</th><th>Formula (P)</th><th>Result in the example</th></tr></thead><tbody>
<tr><td>Current</td><td><code>=SUMIFS(G:G,K:K,"Current")</code></td><td>640.00</td></tr>
<tr><td>1-30 days</td><td><code>=SUMIFS(G:G,K:K,"1-30")</code></td><td>450.00</td></tr>
<tr><td>31-60 days</td><td><code>=SUMIFS(G:G,K:K,"31-60")</code></td><td>1,200.00</td></tr>
<tr><td>61-90 days</td><td><code>=SUMIFS(G:G,K:K,"61-90")</code></td><td>2,300.00</td></tr>
<tr><td>90+ days</td><td><code>=SUMIFS(G:G,K:K,"90+")</code></td><td>500.00</td></tr>
<tr><td>Total outstanding</td><td><code>=SUM(P2:P6)</code></td><td>5,090.00</td></tr>
<tr><td>Invoices overdue</td><td><code>=COUNTIF(H:H,"Overdue")</code></td><td>4</td></tr>
</tbody></table>
<p>The five buckets add up to the 5,090.00 outstanding, which is a good check that no invoice has fallen through the formulas. In this example, more than half the money owed (2,800 of 5,090) is over 60 days old, which is the signal to start chasing Cedar &amp; Co and Foster Group hard.</p>
<p>To see balance by client, use <code>=SUMIFS(G:G,B:B,"Acme Ltd")</code>, or a pivot table with Client as rows and Balance as values.</p>

<h2>Make overdue invoices stand out</h2>
<ul>
<li><strong>Conditional formatting:</strong> select the data rows and add a rule with the custom formula <code>=$H2="Overdue"</code> and a light red fill. Add a second rule for <code>=$K2="90+"</code> with a darker fill.</li>
<li><strong>Data validation:</strong> on the Client column, use a drop-down list from a client sheet so names are always spelled the same.</li>
<li><strong>Filter views:</strong> filter Status to "Overdue" each Monday and work through the list.</li>
<li><strong>Sort by days overdue</strong> descending to see the oldest debts first.</li>
</ul>

<h2>A simple weekly routine</h2>
<ol>
<li>When you create an invoice, add a row to the tracker straight away using the same invoice number. A sequence from the <a href="/tools/invoice-number-generator">invoice number generator</a> makes gaps and duplicates easy to spot.</li>
<li>When money arrives, update Amount paid and Date paid the same day.</li>
<li>Once a week, filter for Overdue and send reminders. Our <a href="/blog/payment-reminder-emails">payment reminder emails</a> give you wording for each stage, and record the date in Last reminder.</li>
<li>For anything in 61-90 or 90+, follow the escalation steps in our <a href="/blog/overdue-invoice">overdue invoice guide</a>.</li>
<li>At month end, copy the summary block into a log so you can see whether your receivables are getting older or younger over time.</li>
</ol>

<h2>Excel vs Google Sheets for invoice tracking</h2>
<table><thead><tr><th></th><th>Excel</th><th>Google Sheets</th></tr></thead><tbody>
<tr><td>Formulas in this guide</td><td>Work as written</td><td>Work as written</td></tr>
<tr><td>Sharing with a bookkeeper</td><td>Via OneDrive/SharePoint or by sending the file</td><td>Built-in sharing and comments</td></tr>
<tr><td>Offline use</td><td>Full</td><td>Possible with offline mode enabled</td></tr>
<tr><td>Pivot tables</td><td>Yes</td><td>Yes</td></tr>
</tbody></table>
<p>If you already create invoices in a spreadsheet, you can keep the tracker in the same file on its own tab. Our guides to a <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a> and <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a> show how.</p>

<h2>Part payments, credit notes and write-offs</h2>
<p>Real ledgers are messier than the example. A few rules keep the tracker accurate:</p>
<ul>
<li><strong>Part payments:</strong> add each payment to Amount paid rather than overwriting it, for example <code>=400+250</code> in the cell, or keep a separate Payments tab and use <code>=SUMIFS(Payments!C:C,Payments!A:A,A2)</code> to total payments for each invoice number.</li>
<li><strong>Credit notes:</strong> if you issue a credit note against an invoice, either add a Credits column and change Balance to <code>=E2-F2-N2</code>, or add the credit note as its own row with a negative amount. Our <a href="/blog/credit-note-guide">credit note guide</a> explains when to issue one.</li>
<li><strong>Voided invoices:</strong> keep the row, set the amount to zero and note "Void" so your number sequence has no unexplained gaps.</li>
<li><strong>Write-offs:</strong> if you give up on a debt, record it in a separate column rather than marking it Paid, so your reports reflect what you actually received.</li>
</ul>

<p>Finally, back the file up. A tracker that lives only on one laptop is one spilled coffee away from disappearing; keep it in cloud storage or email yourself a copy at each month end.</p>

<h2>When a spreadsheet stops being enough</h2>
<p>A tracker spreadsheet is fine for a freelancer or small business with a manageable number of invoices. Consider accounting software when several people need to update it at once, when clients pay many invoices in one lump sum that needs allocating, or when you want bank feeds and automatic reminders. Our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> sets out the trade-offs.</p>

<h2>Set yours up today</h2>
<p>Open a blank sheet, type the thirteen headings above, paste in the four formulas, and add every unpaid invoice you have. It takes about twenty minutes, and the summary block will immediately tell you which clients to call first.</p>
`,
  },
  {
    slug: "packing-slip-vs-invoice",
    title: "Packing Slip vs Invoice: Differences and Examples",
    description:
      "Packing slip vs invoice explained: what each document shows, who it is for, how a packing list differs for exports, and a worked order example for both.",
    category: "comparisons",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "delivery-note-template",
      "consignment-invoice",
      "commercial-invoice-template",
      "delivery-challan-format",
      "purchase-order-template",
    ],
    faqs: [
      {
        q: "What is the difference between a packing slip and an invoice?",
        a: "A packing slip lists what is inside a shipment so the receiver can check it, and it usually has no prices. An invoice is a request for payment that shows prices, tax, the total and the due date. The packing slip goes in the box; the invoice goes to the person who pays.",
      },
      {
        q: "Does a packing slip show prices?",
        a: "Usually not. Packing slips are often handled by warehouse staff or included in gift orders, so prices are left off on purpose. Some sellers include prices when the buyer and recipient are the same person, but the packing slip still is not a request for payment.",
      },
      {
        q: "Is a packing list the same as a packing slip?",
        a: "They are closely related. 'Packing slip' is the common term for domestic and e-commerce shipments. A 'packing list' is the more detailed export document that adds package counts, weights, dimensions and marks, and it is used by freight forwarders and customs alongside the commercial invoice.",
      },
      {
        q: "Can I put the invoice inside the package?",
        a: "You can, and many small sellers do for business customers. For gifts, or where the recipient is not the buyer, send the invoice separately to the buyer and put only a packing slip in the box.",
      },
      {
        q: "Do I need a packing slip for every order?",
        a: "It is not usually a legal requirement for domestic orders, but it is good practice. It helps the customer check the delivery, reduces 'missing item' claims and makes returns easier. Some marketplaces and business customers require one.",
      },
      {
        q: "Who creates the packing slip, the seller or the warehouse?",
        a: "The seller is responsible for it, but it is usually printed by whoever packs the order. That might be you, your e-commerce platform's fulfillment tools, or a third-party logistics warehouse working on your behalf. The invoice, by contrast, normally comes from your sales or accounts side. Make sure both documents are generated from the same order record so the order numbers and quantities always match.",
      },
      {
        q: "Can a packing slip be used as proof of delivery?",
        a: "Not by itself. A packing slip shows what you packed, not what the customer received. Proof of delivery is usually a signed delivery note, a carrier's signature record or tracking confirmation, sometimes with a photo. If you deliver goods yourself, ask the receiver to sign and date a copy of the packing slip or delivery note, noting any damage or shortages, and keep that signed copy.",
      },
      {
        q: "What is a blind packing slip for dropshipping?",
        a: "A blind packing slip leaves out the supplier's name and prices, so a dropshipped order looks as if it came straight from your shop. You ask your supplier to include either a plain slip or one with your own branding and returns address. The customer still gets the invoice or order confirmation from you, while the supplier invoices you separately for the goods at wholesale prices.",
      },
      {
        q: "What is the difference between a packing slip and a bill of lading?",
        a: "A packing slip is the seller's list of what is inside the package, mainly for the receiver. A bill of lading is the carrier's document for freight shipments: it acts as a receipt for the goods, sets out the terms of carriage and, for some ocean shipments, works as a document of title. Parcel shipments usually use a shipping label and tracking record instead of a bill of lading.",
      },
      {
        q: "What documents do I need to post or courier a parcel abroad?",
        a: "Commercial courier shipments usually need a commercial invoice showing the goods, their value and their origin, and larger consignments often add a packing list. Postal parcels use a customs declaration form, such as CN22 or CN23, depending on value and destination. A packing slip alone is never enough for customs. Requirements vary by country and carrier, so check your carrier's guidance and the destination's customs rules before shipping.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A packing slip lists the items and quantities in a shipment so the receiver can check what arrived; it normally has no prices. An invoice asks for payment and shows prices, tax, the total and the due date. The packing slip travels in the box for the receiver, while the invoice goes to whoever pays. For exports, a more detailed packing list accompanies the commercial invoice.</p>

<p>If you ship physical products, you will usually produce both documents for the same order. Mixing them up leads to awkward moments (a gift recipient seeing the price) or real delays (a customer's accounts team holding payment because no invoice arrived). This guide compares packing slip vs invoice side by side, explains where a packing list fits, and walks through one order with both documents. Invoices themselves can be made in our <a href="/invoice-generator?template=blue">free invoice generator</a>.</p>

<h2>Packing slip vs invoice at a glance</h2>
<table><thead><tr><th></th><th>Packing slip</th><th>Invoice</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Shows what is in the shipment</td><td>Requests payment</td></tr>
<tr><td>Audience</td><td>Receiver, warehouse, returns team</td><td>Buyer, accounts payable</td></tr>
<tr><td>Prices shown</td><td>Usually no</td><td>Yes, with tax and total</td></tr>
<tr><td>Where it goes</td><td>Inside or attached to the package</td><td>Emailed or posted to the payer</td></tr>
<tr><td>Key fields</td><td>Order number, ship-to, items, quantities shipped and back-ordered</td><td>Invoice number, dates, prices, tax, total, payment terms</td></tr>
<tr><td>Legal and tax role</td><td>Mainly operational</td><td>Accounting and tax record</td></tr>
<tr><td>Timing</td><td>Created when the order is packed</td><td>At sale, shipment or on agreed terms</td></tr>
</tbody></table>

<h2>What is a packing slip?</h2>
<p>A packing slip (also called a delivery slip, packing note or shipping list) is a checklist of what has been packed. Typical fields:</p>
<ul>
<li>Seller name and contact details.</li>
<li>Order number and, for business customers, their <a href="/blog/po-number-on-invoice">PO number</a>.</li>
<li>Order date and ship date.</li>
<li>Ship-to name and address (and bill-to if different).</li>
<li>Item codes, descriptions and quantities ordered, shipped and back-ordered.</li>
<li>Number of boxes in the shipment ("Box 1 of 2").</li>
<li>Returns instructions or a returns code.</li>
</ul>
<p>The receiver ticks items off against it. If something is missing, the packing slip shows whether it was never packed, is on backorder, or went missing in transit.</p>

<h2>What is an invoice?</h2>
<p>An invoice is the seller's request for payment and the core record for both parties' books and tax. It carries a unique invoice number, issue and due dates, line items with prices, any discount, tax, shipping and the total, plus payment details. If you are new to the document, start with <a href="/blog/what-is-an-invoice">what is an invoice</a>. For orders with many products, an itemised invoice keeps the lines readable.</p>

<h2>Packing list vs packing slip for exports</h2>
<p>For international shipments, the word changes and so does the detail. An export packing list usually includes:</p>
<ul>
<li>Shipper and consignee details, invoice and order references.</li>
<li>Number and type of packages (cartons, pallets, crates) and their marks and numbers.</li>
<li>Contents of each package with quantities.</li>
<li>Net and gross weight per package and in total.</li>
<li>Dimensions or volume of each package.</li>
</ul>
<p>Freight forwarders use it to book space and prepare transport documents, and customs may check it against the <a href="/blog/commercial-invoice-template">commercial invoice</a>. The commercial invoice carries the values, HS codes and Incoterms; the packing list carries the physical details. If the buyer needs a price document before shipping for import permits or payment, that is a <a href="/blog/proforma-invoice-guide">proforma invoice</a>.</p>
<p>In India and Pakistan, a <a href="/blog/delivery-challan-format">delivery challan</a> often does a similar job domestically, and in India it has its own GST rules.</p>

<h2>Worked example: one order, two documents</h2>
<p>An online ceramics shop receives order #5521 from a café: 3 large mugs, 2 teapots and 4 saucers. The saucers are out of stock and will ship later. In this example the café's state does not charge sales tax on the order; your situation may differ.</p>
<h3>The packing slip (in the box)</h3>
<table><thead><tr><th>SKU</th><th>Description</th><th>Ordered</th><th>Shipped</th><th>Back-ordered</th></tr></thead><tbody>
<tr><td>MUG-L-SAGE</td><td>Large mug, sage glaze</td><td>3</td><td>3</td><td>0</td></tr>
<tr><td>TPT-1L-WHT</td><td>Teapot 1 L, white</td><td>2</td><td>2</td><td>0</td></tr>
<tr><td>SCR-SAGE</td><td>Saucer, sage glaze</td><td>4</td><td>0</td><td>4</td></tr>
</tbody></table>
<p>Order #5521 · Shipped 23 October 2026 · Box 1 of 1 · Back-ordered items will ship separately at no extra shipping cost.</p>
<h3>The invoice (emailed to the café's accounts address)</h3>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Large mug, sage glaze (MUG-L-SAGE)</td><td>3</td><td>$18.00</td><td>$54.00</td></tr>
<tr><td>Teapot 1 L, white (TPT-1L-WHT)</td><td>2</td><td>$42.00</td><td>$84.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$138.00</td></tr>
<tr><td colspan="3">Shipping</td><td>$9.50</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$147.50</strong></td></tr>
</tbody></table>
<p>The maths: 3 × 18 = 54, 2 × 42 = 84, subtotal 138, plus 9.50 shipping gives 147.50. The invoice bills only what has shipped; the saucers (4 × $12.00 = $48.00) will go on a second invoice when they ship. Some sellers instead invoice the full order up front; whichever you choose, the packing slip and invoice should tell the same story so the customer can reconcile them.</p>

<h2>Who creates each document, and when</h2>
<p>For a typical online or wholesale order, the documents appear in this order:</p>
<ol>
<li><strong>Order or purchase order</strong> from the customer. Business buyers often send a formal <a href="/blog/purchase-order-template">purchase order</a>.</li>
<li><strong>Invoice</strong> from the seller. For prepaid web orders it may be issued at checkout; for business accounts, on shipment or on agreed terms.</li>
<li><strong>Packing slip</strong> printed by the warehouse when the order is picked and packed.</li>
<li><strong>Shipping label</strong> and, for freight, a bill of lading or waybill from the carrier.</li>
<li><strong>Signed delivery note or proof of delivery</strong>, where the carrier or customer provides one.</li>
</ol>
<p>Each document has a different owner. Sales or accounts owns the invoice. The warehouse owns the packing slip. The carrier owns the transport document. When something goes wrong, such as a short shipment, a damaged box or a billing dispute, having all of them with matching order numbers is what lets you sort it out quickly.</p>

<h2>Packing slip template: fields to include</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Seller name and returns address</td><td>Clayhouse Ceramics, Unit 3, Mill Lane</td></tr>
<tr><td>Order number and date</td><td>#5521, 21 October 2026</td></tr>
<tr><td>Customer PO number (if any)</td><td>PO-CAF-0098</td></tr>
<tr><td>Ship-to name and address</td><td>Corner Café, 14 High Street</td></tr>
<tr><td>Items: SKU, description</td><td>MUG-L-SAGE, Large mug, sage glaze</td></tr>
<tr><td>Quantities ordered, shipped, back-ordered</td><td>3 / 3 / 0</td></tr>
<tr><td>Package count</td><td>Box 1 of 1</td></tr>
<tr><td>Returns note</td><td>Returns accepted within 30 days with this slip</td></tr>
</tbody></table>
<p>Leave prices off unless the buyer and receiver are the same and want them. The returns line is just an example; use your actual policy.</p>

<h2>Which document matters if something goes missing?</h2>
<p>When a customer reports a missing item, start with the packing slip copy you kept. If the item is listed as shipped, the question becomes one for the carrier, and the weight on the shipping label can show whether the box was complete when it left. If the item was marked back-ordered, the customer simply has not received it yet. The invoice matters for the money side: if you have already billed for the missing item, you may need to issue a <a href="/blog/credit-note-guide">credit note</a> or ship a replacement at no charge. Keeping the two documents consistent from the start makes either answer quick.</p>

<h2>Common mistakes with packing slips and invoices</h2>
<ul>
<li><strong>Putting the priced invoice in a gift order.</strong> Use a packing slip without prices and send the invoice to the buyer.</li>
<li><strong>Different references on each document.</strong> Put the same order number and PO number on both.</li>
<li><strong>Invoicing items that were not shipped</strong> without saying so. If you bill in advance, state that items are back-ordered.</li>
<li><strong>Relying on the packing slip as proof of sale.</strong> For bookkeeping and tax you need the invoice.</li>
<li><strong>Using a packing slip for customs.</strong> Exports need a commercial invoice and usually a proper packing list.</li>
</ul>

<h2>How to create each document</h2>
<p>Packing slips are usually generated by your e-commerce platform or shipping software, or you can make a simple table in Word or a spreadsheet using the fields above. Our generator is built for invoices only: its heading is fixed as "Invoice" and every template shows prices, so it is not designed for packing slips.</p>
<p>For the invoice, open the generator, choose a clear layout such as the <a href="/invoice-templates/blue">Blue template</a>, add your products as line items, put the shipping charge in the Shipping field and the customer's PO number in its own field, then download the PDF. If you also sell internationally, read <a href="/blog/invoice-international-clients">invoicing international clients</a> before your first export order.</p>

<h2>Next step</h2>
<p>Check that your packing slip and invoice share the same order number, and that the packing slip shows shipped and back-ordered quantities. If business customers order from you, ask whether they need a PO number on both. Then create the invoice for your next shipment and send it to the payer, not the box.</p>
`,
  },
];
