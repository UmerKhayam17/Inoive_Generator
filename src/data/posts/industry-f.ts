import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_F: PostDraft[] = [
  {
    slug: "hotel-invoice-template",
    title: "Hotel Invoice Template: Room Charges, Taxes and Folio Format",
    description:
      "Use this hotel invoice template guide to bill room nights, occupancy taxes, incidentals and corporate stays, with folio vs invoice explained and a sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["restaurant-bill-format", "itemized-invoice", "deposit-invoice"],
    faqs: [
      {
        q: "What is the difference between a hotel folio and a hotel invoice?",
        a: "A folio is the running account of a guest's stay. Room nights, taxes, restaurant charges, parking and payments are posted to it as they happen, and it can change until check-out. An invoice is the formal billing document produced from the settled folio, usually at check-out or afterward for direct-billed companies. Small properties often print the closed folio and treat it as the invoice, but it should then carry an invoice number and the required tax details.",
      },
      {
        q: "What should a hotel invoice include?",
        a: "Include the property's legal name, address and tax registration number, a unique invoice number and date, the guest's name, and the company name and billing address for corporate stays. Show arrival and departure dates, room type, number of nights and nightly rate, each tax and fee on its own line, incidentals by date, deposits and payments received, and the balance due. Add the reservation or confirmation number and any PO number the company supplied.",
      },
      {
        q: "How are hotel occupancy taxes shown on an invoice?",
        a: "List occupancy or lodging taxes as separate lines below the room charges, naming each one and its rate, rather than hiding them inside the nightly rate. In the United States the rates are set by states, counties and cities, and some areas add per-night flat fees, so the lines differ by location. Taxes usually apply to the room charge, while restaurant or retail charges may carry a different tax, so calculate each base separately.",
      },
      {
        q: "Can a guest ask for a hotel invoice in a company's name?",
        a: "Yes, most hotels will issue the invoice to the guest's employer if asked, ideally before check-out. The company's legal name, billing address and, where relevant, tax registration number should appear in the bill-to section, with the guest named as the occupant. In GST and VAT countries the business buyer may need its registration number on the invoice to claim input tax, so request it at booking rather than trying to amend the invoice later.",
      },
      {
        q: "What GST applies to hotel rooms in India?",
        a: "Under the GST rate changes that took effect on 22 September 2025, hotel accommodation priced up to Rs 7,500 per unit per day is taxed at 5% without input tax credit, and accommodation above Rs 7,500 per day is taxed at 18% with input tax credit. The rate depends on the value charged per room per night. Rules have changed several times, so confirm the current notification with a GST practitioner before setting up your invoices.",
      },
      {
        q: "How do I invoice a corporate client for several hotel stays?",
        a: "Agree on direct billing terms in writing first, including the credit limit, payment terms and which charges the company covers. You can issue one invoice per stay, which is simplest to match against expense reports, or a monthly invoice listing each guest, dates, nights and room charges, with the folios attached. Quote the company's PO or account number on every invoice and keep personal incidentals the company does not cover on the guest's own folio.",
      },
      {
        q: "Should a hotel invoice show the deposit or advance payment?",
        a: "Yes. Show the full charges first, then deduct the deposit or prepayment as a separate line so the guest sees the balance due. If the stay was fully prepaid, the invoice should still list the charges and show a zero balance. Note how the deposit was paid and its date. For non-refundable prepaid rates, say so in the notes so the guest's finance team understands why no refund appears.",
      },
      {
        q: "Can I make a hotel invoice with a free invoice generator?",
        a: "Yes, for small properties, guest houses, vacation rentals or one-off corporate billing. Enter room nights, fees and incidentals as line items, add one tax rate, deduct the deposit as amount paid, and download a PDF. A free generator is not a property management system: it will not manage reservations, post charges from your restaurant or calculate several different taxes automatically, so work out mixed taxes first and enter them as their own lines.",
      },
      {
        q: "How long should a hotel keep guest invoices and folios?",
        a: "Retention periods depend on the country and on the taxes involved, and they are often several years for tax records. Keep the folio, the invoice, card authorizations and any direct billing agreements together for each stay. Check your local tax authority's record-keeping rules, and remember that guest registration records may have separate requirements under local police or tourism regulations, as well as privacy rules on personal data.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A hotel invoice template should list the guest and bill-to party, stay dates, room type, number of nights and nightly rate, then each occupancy or lodging tax and fee on its own line, incidentals by date, deposits and payments received, and the balance due, with the property's tax registration number and a unique invoice number.</p>

<p>Hotel billing looks simple from the front desk: the guest checks out, the system prints a bill, and the card is charged. Behind that page are several moving parts, including room nights that may carry different rates, taxes set by more than one level of government, restaurant and minibar charges posted from other outlets, and companies that want the bill in their own name. A clear hotel invoice template keeps those parts visible, so guests and corporate accounts payable teams can check the bill without calling you.</p>

<p>This guide explains how a folio relates to an invoice, which charges and taxes belong on a hotel bill, how to handle corporate and direct-billed stays, and what a finished invoice looks like with the arithmetic shown. It is written for small hotels, guest houses, bed and breakfasts, serviced apartments and vacation rental hosts who need a professional invoice without a full property management system.</p>

<h2>Folio vs invoice: what a hotel actually issues</h2>
<p>In hotel accounting, the <strong>folio</strong> is the guest's running account. Every charge is posted to it during the stay: the room and tax each night, a dinner charged to the room, laundry, parking, and any payments or deposits. The folio stays open until check-out, and it can be split, for example a company folio for room and tax and a personal folio for incidentals.</p>
<p>The <strong>invoice</strong> is the formal request for payment produced from the settled folio. For a walk-in leisure guest who pays by card at check-out, the closed folio and the invoice are often the same printout. For a business guest whose employer pays later, the hotel issues a separate invoice to the company, sometimes weeks after the stay, and attaches the folio as supporting detail.</p>
<table><thead><tr><th></th><th>Folio</th><th>Invoice</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Running record of charges and payments</td><td>Formal demand for payment</td></tr>
<tr><td>When it exists</td><td>From check-in until check-out</td><td>At check-out or when billing a company</td></tr>
<tr><td>Can it change?</td><td>Yes, until it is closed</td><td>No; corrections need a credit note or new invoice</td></tr>
<tr><td>Addressed to</td><td>The guest</td><td>The guest or the paying company</td></tr>
<tr><td>Needs an invoice number?</td><td>Usually a folio number</td><td>Yes, unique and sequential</td></tr>
</tbody></table>
<p>If your printed folio is what you hand over as the bill, make sure it carries everything an invoice needs: a sequential invoice number, your tax registration details and the buyer's details where the law requires them. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a numbering pattern that stays separate from folio or reservation numbers.</p>

<h2>What to include in a hotel invoice template</h2>
<p>Use this checklist for every hotel invoice, whether it is printed from a property system or built by hand:</p>
<ul>
<li>Property legal name, trading name, address, phone, email and tax registration number (for example a GSTIN in India or a VAT number in the UK or UAE).</li>
<li>A unique invoice number, the invoice date and, for direct billing, the due date.</li>
<li>Guest name and, if a company pays, the company's legal name, billing address, tax number and PO or account reference.</li>
<li>Reservation or confirmation number, room number and room type.</li>
<li>Arrival and departure dates and the number of room nights.</li>
<li>Nightly rate, with each night listed separately if the rate changed during the stay.</li>
<li>Each tax and fee on its own line, named and with its rate or per-night amount.</li>
<li>Incidentals by date and outlet: restaurant, bar, minibar, laundry, parking, spa, telephone.</li>
<li>Deposits, prepayments and payments received, with dates and methods.</li>
<li>The balance due, currency and accepted payment methods.</li>
<li>Cancellation, no-show or damage terms if any related charges appear.</li>
</ul>
<p>Listing charges line by line matters more for hotels than for most businesses because guests often dispute small items they do not remember. Our guide to <a href="/blog/itemized-invoice">itemized invoices</a> explains how much detail each line needs.</p>

<h2>Room charges: nights, rates and packages</h2>
<p>The room line is the core of every hotel invoice template. Show it as quantity times rate: "Deluxe King, 3 nights x $189.00". When rates change across the stay, such as a weekend rate on Friday and Saturday and a weekday rate on Sunday, either list each night on its own line with the date or group nights by rate. Either way, the total should be easy to check.</p>
<p>Packages need a decision. If you sell a bed-and-breakfast rate or a room-plus-parking bundle as one price, you can show it as a single line, but in tax systems where food and accommodation carry different rates you may need to allocate the package price between components. Agree how you will show packages before you sell them, not at check-out.</p>
<h3>Extended stays and monthly rentals</h3>
<p>Some jurisdictions exempt stays beyond a certain number of consecutive nights from occupancy tax, or treat them as residential lettings. If you host long-stay guests, check the local threshold and say on the invoice why tax is or is not charged. For apartment-style lets billed monthly, our <a href="/blog/rent-invoice-template">rent invoice template guide</a> may be a better fit than a nightly hotel layout.</p>

<h2>Hotel taxes and fees by location</h2>
<p>Taxes on accommodation are where hotel invoices vary most. Rates and names are set locally, so a template that is correct in one city can be wrong in the next. The table below summarizes the common patterns; treat it as a starting point and confirm with your tax authority.</p>
<table><thead><tr><th>Location</th><th>Typical taxes on rooms</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>United States</td><td>State sales tax and/or state, county and city occupancy or lodging taxes; some cities add a flat per-night fee</td><td>Name each tax and its rate; rates differ by city, sometimes by neighborhood or district</td></tr>
<tr><td>India</td><td>GST: 5% without input tax credit for rooms up to Rs 7,500 per night, 18% with credit above that (from 22 September 2025)</td><td>Show GSTIN, HSN/SAC code, CGST and SGST or IGST split; buyer GSTIN for business stays</td></tr>
<tr><td>UK and EU</td><td>VAT on accommodation, often at a reduced or standard rate depending on the country; some cities add a tourist tax</td><td>Show VAT number, VAT rate and amount; list tourist tax separately</td></tr>
<tr><td>UAE (Dubai)</td><td>VAT plus local tourism and municipality charges</td><td>Show TRN, VAT amount and each local fee as its own line</td></tr>
<tr><td>Pakistan</td><td>Provincial sales tax on hotel services; separate provincial bed tax in some provinces</td><td>Check the provincial revenue authority's current rate and invoice rules</td></tr>
</tbody></table>
<p>As one example of how local these rules are, New York City publishes its own <a href="https://www.nyc.gov/site/finance/business/business-hotel-room-occupancy-tax.page" target="_blank" rel="noopener noreferrer">hotel room occupancy tax rules</a>, which apply in addition to New York State sales tax. For India, the rate split above follows the GST Council's 2025 changes; our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers the fields a GST tax invoice needs.</p>
<p>Occupancy taxes usually apply to the room charge, while meals, retail and services posted to the folio may carry a different tax or none. Calculate each base separately and show each tax under the lines it applies to. Do not apply the room tax to the parking or restaurant lines unless your local rules say so.</p>

<h2>Incidentals, deposits and damages</h2>
<p>Incidentals are the charges that turn a predictable room bill into a long folio. Post each one with its date and outlet: "14 Oct, Restaurant, check #2231, $64.50". Guests are far more likely to accept a charge they can match to a signed check or a receipt. If your restaurant also serves outside guests, our companion guide to the <a href="/blog/restaurant-bill-format">restaurant bill format</a> covers how outlet bills should look.</p>
<p>Deposits and card pre-authorizations need clear treatment. A card hold is not a payment and should not appear as one. A cash or card deposit that has been collected should appear as a payment line, deducted before the balance due. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains how to issue a separate deposit invoice for group bookings and events and then credit it on the final bill.</p>
<p>Damage, smoking and lost-key charges are best handled as a separate invoice after check-out, supported by photos and the policy the guest accepted at booking. Adding them silently to a card on file is the fastest route to a chargeback.</p>

<h2>Corporate billing, groups and events</h2>
<p>Corporate stays bring an accounts payable department into the picture, and they work to their own checklist. To get paid without delays:</p>
<ul>
<li>Bill the company's legal name and address exactly as given, and include its tax number where your tax system requires it for input credit.</li>
<li>Quote the company's PO or reference number on every invoice; see our guide to <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li>Split folios at check-in so personal incidentals never reach the company invoice.</li>
<li>Attach the folio and any signed restaurant checks.</li>
<li>State payment terms and the currency. International companies may ask to be billed in their own currency, so state the exchange rate if you convert.</li>
</ul>
<p>Group blocks, weddings and conferences combine rooms with meeting space and food. Bill the rooming list and the function charges as separate sections or separate invoices, and use the event's master account number throughout. If your property hosts events, the <a href="/blog/event-planner-invoice-template">event planner invoice template</a> and <a href="/blog/catering-invoice-template">catering invoice template</a> guides show how the other side of the event bills you and the client.</p>

<h2>Sample hotel invoice with the arithmetic</h2>
<p>Below is an illustrative invoice from a small US hotel for a three-night business stay. The tax rate and per-night fee are examples only and do not represent any particular city. In this example the occupancy tax applies to the room charge only.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Deluxe King, 12 to 15 Oct, room nights</td><td>3</td><td>$189.00</td><td>$567.00</td></tr>
<tr><td>Occupancy tax, 12% of $567.00 room charge (illustrative)</td><td>1</td><td>$68.04</td><td>$68.04</td></tr>
<tr><td>City per-night fee (illustrative)</td><td>3</td><td>$3.50</td><td>$10.50</td></tr>
<tr><td>Self parking, per night</td><td>3</td><td>$25.00</td><td>$75.00</td></tr>
<tr><td>13 Oct, Restaurant, check #2231 (tax included)</td><td>1</td><td>$64.50</td><td>$64.50</td></tr>
<tr><td colspan="3"><strong>Total charges</strong></td><td><strong>$785.04</strong></td></tr>
<tr><td colspan="3">Less deposit paid at booking, 2 Oct</td><td>-$189.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$596.04</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Room: 3 nights x $189.00 = $567.00.</li>
<li>Occupancy tax: $567.00 x 12% = $68.04.</li>
<li>City fee: 3 x $3.50 = $10.50.</li>
<li>Parking: 3 x $25.00 = $75.00.</li>
<li>Total charges: $567.00 + $68.04 + $10.50 + $75.00 + $64.50 = $785.04.</li>
<li>Balance due: $785.04 - $189.00 = $596.04.</li>
</ul>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each line with its quantity and rate, enter the tax lines as their own items because the tool applies one tax rate to the whole invoice, put the deposit in the amount paid field, and download the PDF. A refined layout such as the <a href="/invoice-templates/elegant">elegant invoice template</a> suits hospitality branding. The generator does not handle reservations, folios or outlet postings, so it works best for small properties, guest houses and one-off corporate bills rather than as a replacement for a property management system.</p>

<h2>Common mistakes on hotel invoices</h2>
<ul>
<li><strong>One lump sum for "room and taxes".</strong> Guests and auditors want to see each tax. Bundling them hides errors and can breach local display rules.</li>
<li><strong>Applying the room tax to everything.</strong> Parking, food and retail often carry different tax treatment.</li>
<li><strong>Billing the guest when the company pays.</strong> Without the company's name and tax number, the employer may not be able to claim input tax.</li>
<li><strong>Showing a card hold as a payment.</strong> Only collected funds belong in the payments section.</li>
<li><strong>Editing a closed invoice.</strong> Once issued, fix errors with a credit note and a new invoice so the numbering stays intact.</li>
<li><strong>Adding damage charges without notice.</strong> Send a separate invoice with evidence and the policy reference.</li>
<li><strong>No reservation or PO reference.</strong> Accounts payable cannot match the invoice to an approval, and payment stalls.</li>
</ul>

<h2>Choosing the right hotel invoice template</h2>
<p>A larger hotel will rely on its property management system to post charges and print folios, and the job is to make sure that output meets local invoice rules. A guest house, bed and breakfast or small serviced apartment business often has no such system, and a clean hotel invoice template built in a generator, word processor or spreadsheet does the job, provided the taxes are calculated correctly and every invoice has its own number.</p>
<p>Whatever tool you use, the test is the same: could a guest's finance team match every line to a night, a receipt or a tax rule without calling you? If the answer is yes, your hotel invoice is doing its job. For more trade-specific layouts, browse the <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "restaurant-bill-format",
    title: "Restaurant Bill Format: Items, Taxes and Service Charge",
    description:
      "A restaurant bill format guide covering items, GST in India, provincial sales tax in Pakistan and service charge rules, with sample bills and the math shown.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["catering-invoice-template", "gst-invoice-guide", "bill-format"],
    faqs: [
      {
        q: "What should a restaurant bill include?",
        a: "A restaurant bill should show the restaurant's legal or trading name, address and tax registration number, a unique bill number, date and time, table or order number, each item with quantity, unit price and amount, the subtotal, any discount, each tax on its own line with its rate, any optional service charge or tip line, the total and the payment method. Many jurisdictions also require a fiscal number or QR code from the tax authority's system.",
      },
      {
        q: "What is the GST rate on restaurant bills in India?",
        a: "Standalone restaurant service is generally taxed at 5% GST without input tax credit, shown as 2.5% CGST plus 2.5% SGST on an intra-state bill. Restaurants in hotels where any room is supplied at more than Rs 7,500 per night, called specified premises, are generally taxed at 18% with input tax credit. Outdoor catering and other categories have their own rules, so confirm the rate for your setup with a GST practitioner.",
      },
      {
        q: "Is service charge mandatory on restaurant bills in India?",
        a: "No. Guidelines issued by the Central Consumer Protection Authority in July 2022 say restaurants and hotels must not add a service charge automatically or by default, or collect it under another name. The Delhi High Court upheld these guidelines in March 2025, and an appeal by restaurant associations was reported as pending in 2026. A customer may still choose to tip. Check for any later court ruling before changing your bill format.",
      },
      {
        q: "Can GST be charged on a service charge?",
        a: "The CCPA guidelines say restaurants should not collect service charge by adding it to the food bill and levying GST on the total. Because the guidelines make service charge voluntary, the simplest compliant format is to keep any tip off the taxable bill entirely. The tax treatment of genuinely voluntary tips paid separately is a separate question, so take advice from a GST professional if you collect them through the bill.",
      },
      {
        q: "What is the sales tax on restaurant bills in Punjab, Pakistan?",
        a: "According to the Punjab Revenue Authority, from 1 July 2026 restaurant bills paid by debit or credit card, mobile wallet or QR code carry 8% sales tax, up from 5%, while bills paid in cash continue at 16%. Rates are set each year in the provincial Finance Act and conditions can apply, so check the PRA's current notification and its invoice monitoring requirements before printing bills.",
      },
      {
        q: "Why do Pakistani restaurant bills show different tax for cash and card?",
        a: "Provincial revenue authorities have used lower rates on card and digital payments to push payments into documented channels. Punjab and Sindh have both run dual-rate systems, with a lower rate for digital payments and the standard rate for cash, although the exact rates and eligibility conditions have changed from year to year. Your bill should name the payment method and the rate applied, so the customer can see why the tax differs.",
      },
      {
        q: "What is the difference between a restaurant bill and a tax invoice?",
        a: "A restaurant bill is the customer-facing record of a meal and its total. A tax invoice is a document that meets the tax law's content rules, such as the supplier's registration number, a sequential number, tax rate and amount and, for business buyers, the buyer's details. In many systems a properly formatted restaurant bill is the tax invoice. A business guest claiming input tax may need their registration number on it.",
      },
      {
        q: "Can I use an invoice generator as a restaurant billing system?",
        a: "Not for table service. A restaurant needs a point-of-sale system that records orders, prints kitchen tickets, takes payments and, where required, reports each bill to the tax authority in real time. A free invoice generator is useful for catering orders, corporate lunches, event menus and monthly bills to business accounts, where you build a PDF invoice with line items, one tax rate and a discount and send it yourself.",
      },
      {
        q: "Should prices on the menu include tax?",
        a: "That depends on the country and on consumer rules. In India, menu prices are often shown before GST and tax is added on the bill, while many other countries require displayed prices to include tax. Whatever your local rule, the bill should make the arithmetic visible: subtotal, each tax and the total. If menu prices already include tax, say so on the bill and show the tax portion.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A standard restaurant bill format shows the restaurant's name, address and tax number, a bill number, date, time and table, each item with quantity, price and amount, the subtotal, discounts, each tax on its own line, any voluntary service charge or tip, the total and the payment method, plus any fiscal number required.</p>

<p>Restaurant bills are among the most-read documents in business. Every customer checks the total, many check the items, and a growing number check the tax lines and service charge too. Tax authorities read them as well: in India and Pakistan, restaurant bills are a focus of enforcement, and in Pakistan provincial authorities use real-time invoice monitoring to track them. A clear restaurant bill format protects you on both fronts.</p>

<p>This guide covers the fields every bill needs, how GST works on restaurant bills in India, how provincial sales tax works in Pakistan, what the current rules say about service charge, and when a printed invoice from a generator is appropriate instead of a point-of-sale receipt. Tax rates in this guide were checked in October 2026, but they change often, so confirm them before you print.</p>

<h2>The standard restaurant bill format</h2>
<p>Whatever the country, a restaurant bill has three blocks: a header that identifies the business and the transaction, a body that lists what was ordered, and a footer that totals the bill and records payment. The checklist below covers what to include.</p>
<h3>What to include on a restaurant bill</h3>
<ul>
<li><strong>Header:</strong> legal or trading name, address, phone, tax registration number (GSTIN in India, NTN and provincial registration in Pakistan, VAT number elsewhere).</li>
<li><strong>Transaction details:</strong> a unique sequential bill number, date and time, table number or order type (dine-in, takeaway, delivery), server name or ID, and number of covers if you track them.</li>
<li><strong>Items:</strong> each dish or drink with quantity, unit price and line amount; modifiers that change the price on their own line.</li>
<li><strong>Totals:</strong> subtotal, any discount with its reason, each tax with its name and rate, and the grand total.</li>
<li><strong>Service charge or tip:</strong> only where lawful, clearly labeled as optional where the rules require it.</li>
<li><strong>Payment:</strong> method (cash, card, wallet), amount tendered and change.</li>
<li><strong>Compliance marks:</strong> HSN/SAC code where required, fiscal invoice number or QR code from the tax authority's system, and a note if prices include tax.</li>
</ul>
<p>The general principles behind these fields are the same ones covered in our guide to the <a href="/blog/bill-format">bill format</a> for any business. Restaurants add the time-sensitive and tax-specific elements on top.</p>

<h2>Restaurant bill format in India: GST rules</h2>
<p>Most restaurant service in India falls into one of two GST treatments. The distinction depends on where the restaurant operates, not on how fancy it is.</p>
<table><thead><tr><th>Type of outlet</th><th>GST rate</th><th>Input tax credit</th><th>Bill shows</th></tr></thead><tbody>
<tr><td>Standalone restaurant, cafe, dhaba, takeaway or delivery kitchen</td><td>5% (2.5% CGST + 2.5% SGST)</td><td>Not available</td><td>CGST and SGST lines at 2.5% each</td></tr>
<tr><td>Restaurant in a "specified premises" hotel (any room supplied above Rs 7,500 per night)</td><td>18% (9% CGST + 9% SGST)</td><td>Available</td><td>CGST and SGST lines at 9% each</td></tr>
<tr><td>Food supplied through an e-commerce operator such as a delivery app</td><td>5%</td><td>Not available</td><td>The platform generally collects and pays GST on these orders</td></tr>
</tbody></table>
<p>A restaurant that falls under the 5% entry generally cannot opt to charge 18% simply to claim input tax credit; advance rulings have held that the 5% rate is prescribed rather than optional. Rates and definitions were revised in 2025, so check the current position on the <a href="https://cbic-gst.gov.in/gst-goods-services-rates.html" target="_blank" rel="noopener noreferrer">CBIC GST rates page</a> or with your practitioner. If you have not registered yet, our guide to <a href="/blog/gst-registration-india">GST registration in India</a> covers thresholds and steps.</p>
<p>A restaurant bill that meets GST rules is a tax invoice in its own right. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> lists the mandatory fields, and the differences between a B2C bill and a B2B invoice are explained in <a href="/blog/tax-invoice-vs-retail-invoice">tax invoice vs retail invoice</a>.</p>

<h3>Service charge on Indian restaurant bills</h3>
<p>In July 2022 the Central Consumer Protection Authority issued guidelines saying hotels and restaurants must not add a service charge to the bill automatically or by default, must not collect it under any other name, must not force customers to pay it, and must not add it to the food bill and levy GST on the total. In March 2025 a single judge of the Delhi High Court upheld those guidelines and described service charge and tips as voluntary payments. Restaurant associations appealed, and reports in 2026 describe the appeal as still pending, while the CCPA has continued to act against restaurants that add the charge by default.</p>
<p>In practice, the safest Indian restaurant bill format today leaves service charge off the bill entirely and lets customers tip separately if they wish. If a later ruling changes the position, update your bill then. Do not rely on a small-print "service charge is voluntary" note while still adding it by default.</p>

<h2>Restaurant bill format in Pakistan: provincial sales tax</h2>
<p>In Pakistan, restaurant service is a provincial subject, so sales tax is collected by the provincial revenue authority, not the FBR, for most restaurants. Each province sets its own rates, and several now apply a lower rate when the customer pays digitally.</p>
<table><thead><tr><th>Province</th><th>Authority</th><th>Position as checked (October 2026)</th></tr></thead><tbody>
<tr><td>Punjab</td><td>Punjab Revenue Authority (PRA)</td><td>16% on cash payments; 8% on card, wallet and QR payments from 1 July 2026 (previously 5%)</td></tr>
<tr><td>Sindh</td><td>Sindh Revenue Board (SRB)</td><td>Standard rate on cash; a reduced rate for digital payments has applied under conditions. Confirm the 2026-27 schedule with the SRB</td></tr>
<tr><td>Khyber Pakhtunkhwa, Balochistan, Islamabad</td><td>KPRA, BRA, FBR (ICT)</td><td>Each publishes its own rate; check before printing bills</td></tr>
</tbody></table>
<p>The Punjab figures follow the <a href="https://pra.punjab.gov.pk/" target="_blank" rel="noopener noreferrer">Punjab Revenue Authority</a>'s confirmation of the change made in the Punjab Finance Act 2026. Provincial authorities also require larger restaurants to integrate their point-of-sale systems so each bill is reported in real time and printed with a fiscal number or QR code customers can verify. If your restaurant falls in scope, a bill without that number is not compliant, however well formatted. Registration with the relevant authority comes first; our guide to <a href="/blog/strn-registration-pakistan">STRN registration in Pakistan</a> explains the federal side, and our overview of the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a> covers the fields.</p>

<h2>Sample restaurant bills with the arithmetic</h2>
<p>The two bills below are illustrative. Prices are invented for the example, and tax rates follow the rules described above.</p>
<h3>India: standalone restaurant, dine-in</h3>
<table><thead><tr><th>Item</th><th>Qty</th><th>Rate (Rs)</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Paneer tikka</td><td>1</td><td>320.00</td><td>320.00</td></tr>
<tr><td>Dal makhani</td><td>1</td><td>280.00</td><td>280.00</td></tr>
<tr><td>Butter naan</td><td>4</td><td>60.00</td><td>240.00</td></tr>
<tr><td>Fresh lime soda</td><td>2</td><td>110.00</td><td>220.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>1,060.00</strong></td></tr>
<tr><td colspan="3">CGST @ 2.5%</td><td>26.50</td></tr>
<tr><td colspan="3">SGST @ 2.5%</td><td>26.50</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>1,113.00</strong></td></tr>
</tbody></table>
<p>Arithmetic: 320 + 280 + (4 x 60) + (2 x 110) = 1,060. CGST: 1,060 x 2.5% = 26.50. SGST: 1,060 x 2.5% = 26.50. Total: 1,060 + 26.50 + 26.50 = 1,113.00. No service charge is added; a tip, if any, is paid separately.</p>

<h3>Pakistan: Punjab restaurant, card vs cash</h3>
<table><thead><tr><th>Item</th><th>Qty</th><th>Rate (Rs)</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Chicken karahi (half)</td><td>1</td><td>1,800</td><td>1,800</td></tr>
<tr><td>Naan</td><td>4</td><td>80</td><td>320</td></tr>
<tr><td>Raita</td><td>1</td><td>200</td><td>200</td></tr>
<tr><td>Soft drink</td><td>2</td><td>150</td><td>300</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>2,620</strong></td></tr>
<tr><td colspan="3">Sales tax if paid by card @ 8%</td><td>209.60</td></tr>
<tr><td colspan="3"><strong>Total (card)</strong></td><td><strong>2,829.60</strong></td></tr>
</tbody></table>
<p>Arithmetic: 1,800 + 320 + 200 + 300 = 2,620. Card: 2,620 x 8% = 209.60, total 2,829.60. If the same bill were paid in cash at 16%, tax would be 2,620 x 16% = 419.20 and the total 3,039.20. The bill should show which rate was applied and why. You can check the tax lines with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Discounts, complimentary items and tips</h2>
<p>Discounts on restaurant bills cause more disputes than almost anything else. Show the discount as its own line below the subtotal, name it ("Happy hour 20%", "Loyalty card"), and calculate tax on the discounted amount where your tax rules allow. A complimentary dish can be shown at full price with a matching discount line, which keeps your sales records accurate. Our guide to showing a <a href="/blog/discount-on-invoice">discount on an invoice</a> covers the ordering of discount and tax in more detail.</p>
<p>Tips are a separate matter from service charge. A tip added voluntarily by the customer, usually on the card slip, is not part of the menu price. Where a tip line appears on the bill, label it clearly as optional and leave it blank for the customer to fill in.</p>

<h2>When a generated invoice makes sense for a restaurant</h2>
<p>For table service, takeaway counters and delivery, you need a point-of-sale system. It records orders, prints kitchen tickets, takes payments and, where required, reports bills to the tax authority. An invoice generator does none of that.</p>
<p>A generator is useful for the restaurant's other billing: catering orders, office lunches on account, private dining deposits, event menus and monthly statements to corporate clients. Our <a href="/invoice-generator/pakistan">invoice generator for Pakistan</a> supports PKR, line items, one tax rate and discounts, and the same tool works in INR and other currencies. A compact layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a> prints well. For full off-site events, see the <a href="/blog/catering-invoice-template">catering invoice template</a> guide, and for hotel restaurants that post to room folios, our <a href="/blog/hotel-invoice-template">hotel invoice template</a> explains the folio side.</p>

<h2>Common mistakes on restaurant bills</h2>
<ul>
<li><strong>Adding service charge by default in India.</strong> Current guidelines treat this as an unfair trade practice.</li>
<li><strong>Applying the wrong GST rate.</strong> A standalone restaurant charging 18% to claim credit, or a specified-premises hotel restaurant charging 5%, both create exposure.</li>
<li><strong>One tax line for split taxes.</strong> Indian bills should show CGST and SGST (or IGST) separately.</li>
<li><strong>Same tax rate for cash and card in Pakistan.</strong> Where the province sets different rates, the bill must apply the right one for the payment method.</li>
<li><strong>Missing fiscal number or QR code.</strong> If your restaurant is integrated with the provincial system, every bill needs it.</li>
<li><strong>Discount applied after tax.</strong> In most systems tax should be calculated on the discounted price.</li>
<li><strong>Reusing or skipping bill numbers.</strong> Gaps and duplicates attract attention in an audit.</li>
</ul>
<p>A restaurant bill format that shows every item, every tax and every adjustment is easier for guests to accept and for auditors to verify. Review yours whenever rates change, which in South Asia is often every July.</p>
`,
  },
  {
    slug: "car-rental-invoice-template",
    title: "Car Rental Invoice Template: Daily Rates, Mileage and Fees",
    description:
      "Build a car rental invoice template that bills daily rates, extra mileage, fuel, add-ons, late returns and deposits, plus a worked example and a checklist.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["deposit-invoice", "itemized-invoice", "auto-repair-invoice-template"],
    faqs: [
      {
        q: "What should a car rental invoice include?",
        a: "Include your business name, address and tax number, a unique invoice number and date, the renter's name and address, the rental agreement number, the vehicle make, model and plate, pickup and return dates, times and locations, odometer and fuel readings at both ends, the rate plan, each extra charge on its own line, taxes and fees, any deposit applied, and the balance due or the amount to be refunded.",
      },
      {
        q: "How do you calculate extra mileage on a rental invoice?",
        a: "Start with the odometer reading at return minus the reading at pickup to get miles or kilometers driven. Subtract the allowance included in the rate, usually a fixed amount per day or per rental. Multiply any excess by the per-mile or per-kilometer charge stated in the rental agreement. Show the readings, the allowance and the excess on the invoice line, so the renter can check each number against the agreement.",
      },
      {
        q: "How should fuel charges appear on a car rental invoice?",
        a: "State the fuel policy agreed at pickup, such as full-to-full or prepaid fuel, and the fuel level recorded at pickup and return. If the car came back short, bill the refueling as a line with the quantity and price, plus any refueling service fee your agreement allows, as separate lines. Some companies charge a flat fee instead. Either way, the basis should match what the renter signed.",
      },
      {
        q: "How do I show a security deposit on a rental invoice?",
        a: "A card pre-authorization hold is not a payment, so do not list it as one; release or capture it after the final invoice. A collected cash or card deposit should appear as a payment line deducted from the total. If the deposit exceeds the final charges, show the refund due to the renter. State the deposit amount, how it was taken and when it will be returned in your rental terms.",
      },
      {
        q: "Should damage charges go on the rental invoice?",
        a: "Many rental companies bill damage separately from the final rental invoice, because assessing and pricing repairs takes time. A separate damage invoice, supported by check-in and check-out photos, the inspection report and a repair estimate, is easier to defend than a charge added to the original bill. Keep traffic and parking fines separate too, and follow your local consumer rules on administration fees.",
      },
      {
        q: "How do I charge for a late car rental return?",
        a: "Your agreement should state a grace period and what happens after it, such as an hourly charge up to a cap and then an extra full day. On the invoice, show the scheduled and actual return times and the resulting charge as its own line, for example 'Late return, 1 hour 20 minutes, 1 extra hour at $15.00'. Do not silently change the number of rental days.",
      },
      {
        q: "Do car rentals have special taxes?",
        a: "In many places, yes. Besides general sales tax or VAT, some US states, counties and airports impose rental car taxes, surcharges or customer facility charges, and some countries add road or vehicle licensing recovery fees. Name each tax or fee on its own line with its rate or basis. Rules vary by location, so confirm with your state or local tax authority what applies to your business.",
      },
      {
        q: "Can a small rental business use a free invoice generator?",
        a: "Yes, for issuing the final invoice. Enter the rental days, excess mileage, add-ons and fees as line items, apply one tax rate, record the deposit as amount paid and download the PDF. The generator is not a fleet or booking system, so it will not track vehicles, calculate mileage from odometer readings or capture deposits. Work those out from your rental agreement first, then enter the results.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A car rental invoice template should show the rental agreement number, vehicle, pickup and return times, odometer and fuel readings, and the daily or weekly rate, then list extra mileage, fuel, add-ons, late return charges and each tax or fee on separate lines, apply any deposit, and finish with the balance due or the refund owed.</p>

<p>Car rentals generate some of the most disputed invoices in consumer billing. The renter agreed to a daily rate online, then received a final bill with mileage, fuel, an extra driver, an airport fee and a late return charge. Each of those may be perfectly valid, but if the invoice does not show where each number came from, the renter assumes the worst and calls their card issuer.</p>

<p>This guide is for independent rental agencies, car hire operators, peer-to-peer hosts who bill directly, and businesses renting vans or equipment vehicles. It covers the pricing structures used in car rental, how to present each charge, how deposits and damage should be handled, and a worked car rental invoice template with every calculation shown.</p>

<h2>What makes a car rental invoice different</h2>
<p>Most service invoices list work done. A rental invoice reconciles a contract: the rental agreement signed at pickup sets the rate, the mileage allowance, the fuel policy and the return time, and the invoice compares that agreement with what actually happened. The key evidence is recorded at the counter:</p>
<ul>
<li>Pickup and return dates, times and locations.</li>
<li>Odometer readings at both ends.</li>
<li>Fuel or charge level at both ends.</li>
<li>Vehicle condition at both ends, ideally with photos.</li>
<li>Optional extras the renter accepted or declined.</li>
</ul>
<p>Every extra charge on the final invoice should point back to one of those records. That is why itemizing matters more here than in most trades; our guide to <a href="/blog/itemized-invoice">itemized invoices</a> explains the general principles.</p>

<h2>What to include in a car rental invoice template</h2>
<ul>
<li>Business legal name, address, phone, email and tax registration number.</li>
<li>Unique invoice number, invoice date and due date if billing on account.</li>
<li>Renter name, address and driver's license number (or a reference to it), and the company name for business rentals.</li>
<li>Rental agreement or reservation number and any corporate PO.</li>
<li>Vehicle make, model, class and license plate.</li>
<li>Pickup and return date, time and location, scheduled and actual.</li>
<li>Odometer readings out and in, and the mileage allowance.</li>
<li>Fuel or charge level out and in, and the fuel policy.</li>
<li>Rate plan: daily, weekly or monthly rate and number of periods.</li>
<li>Add-ons such as extra drivers, child seats, GPS, toll devices and coverage products.</li>
<li>Taxes, surcharges and fees, each named.</li>
<li>Deposit taken, payments received and the balance due or refund owed.</li>
</ul>

<h2>Car rental pricing structures and fees</h2>
<p>Rental businesses use several pricing components, often on the same invoice. The table below shows how to present each one. No rates are given, because rental prices depend on vehicle class, season, location and demand.</p>
<table><thead><tr><th>Charge</th><th>How it is usually calculated</th><th>How to show it on the invoice</th></tr></thead><tbody>
<tr><td>Daily rate</td><td>Rate per 24-hour period</td><td>Number of days x daily rate, with pickup and return times</td></tr>
<tr><td>Weekly or monthly rate</td><td>Discounted rate for a longer block</td><td>Number of weeks x weekly rate, plus extra days at the daily rate</td></tr>
<tr><td>Mileage</td><td>Unlimited, or an allowance per day with a charge per extra mile or km</td><td>Odometer readings, allowance, excess x rate</td></tr>
<tr><td>Fuel or charging</td><td>Full-to-full, prepaid tank, or refuel at a stated price</td><td>Fuel out and in, quantity x price, plus any service fee</td></tr>
<tr><td>Additional driver</td><td>Per day or per rental</td><td>Days x daily fee, naming the driver</td></tr>
<tr><td>Equipment</td><td>Per day, often capped per rental</td><td>Days x daily fee, noting any cap</td></tr>
<tr><td>Coverage products</td><td>Per day, if the renter accepted them</td><td>Each product on its own line with days x rate</td></tr>
<tr><td>Young driver surcharge</td><td>Per day for drivers under a set age</td><td>Days x surcharge</td></tr>
<tr><td>Late return</td><td>Hourly after a grace period, then an extra day</td><td>Scheduled vs actual return time and the charge</td></tr>
<tr><td>One-way or drop fee</td><td>Flat fee for returning elsewhere</td><td>Single line naming both locations</td></tr>
<tr><td>Cleaning fee</td><td>Flat fee for excessive dirt, smoke or pet hair</td><td>Single line with reference to photos and policy</td></tr>
<tr><td>Tolls</td><td>Toll cost plus any device or admin fee</td><td>Toll total as a pass-through, admin fee separately</td></tr>
</tbody></table>
<p>Tolls, fines and fuel are pass-through costs: you pay them and recover them from the renter. Show the cost and any handling fee as separate lines; our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> explains why separating them builds trust.</p>

<h3>Taxes and surcharges</h3>
<p>Vehicle rentals are often taxed differently from other services. In the United States, states, counties, cities and airports may each add their own rental tax, surcharge or facility charge on top of general sales tax. Our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains how state rules work, and you can check the arithmetic with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. In VAT and GST countries, rental is usually a standard-rated service, but check whether your vehicle class or rental length changes that.</p>

<h2>Deposits, damage and fines</h2>
<p>Deposits cause confusion because two different things share the name. A <strong>card pre-authorization</strong> holds funds on the renter's card without taking them. It should not appear on the invoice as a payment. A <strong>collected deposit</strong>, taken in cash or charged to a card, is money you hold and should appear as a payment line, deducted from the final total. If the deposit is larger than the final charges, the invoice should show the refund due. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers how to issue and credit deposits cleanly.</p>
<p>Damage is best kept off the main invoice. Large rental companies typically bill damage separately after an assessment, and that approach works for small operators too. Issue a damage invoice later with the inspection report, before and after photos, and a repair estimate or invoice. If you outsource repairs, the shop's bill (see our <a href="/blog/auto-repair-invoice-template">auto repair invoice template</a> guide) becomes supporting evidence. Traffic and parking fines should also be handled separately, along with any admin fee your agreement allows. The US Federal Trade Commission's consumer guidance on <a href="https://consumer.ftc.gov/articles/renting-car" target="_blank" rel="noopener noreferrer">renting a car</a> shows the charges renters are told to watch for, which is a useful check on your own disclosures.</p>
<p>Excess cleaning is a judgment call. If your agreement includes a cleaning fee for smoke, pet hair or heavy soiling, bill it with photos. If you send cars out for professional cleaning, our <a href="/blog/car-detailing-invoice-template">car detailing invoice template</a> guide shows what that supplier invoice should contain.</p>

<h2>Sample car rental invoice with the arithmetic</h2>
<p>Here is an illustrative final invoice for a four-day compact rental with a 200-mile daily allowance. All rates and the tax rate are examples, not market figures, and for simplicity the tax applies to every line.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Compact car, plate ABC-1234, 3 Oct 10:00 to 7 Oct 10:00, days</td><td>4</td><td>$52.00</td><td>$208.00</td></tr>
<tr><td>Excess mileage: 935 driven (24,610 to 25,545) less 800 allowance</td><td>135</td><td>$0.25</td><td>$33.75</td></tr>
<tr><td>Additional driver (J. Lee), days</td><td>4</td><td>$12.00</td><td>$48.00</td></tr>
<tr><td>Child seat, days</td><td>4</td><td>$10.00</td><td>$40.00</td></tr>
<tr><td>Refueling: returned at 1/2 tank, gallons</td><td>6</td><td>$5.50</td><td>$33.00</td></tr>
<tr><td>Late return: due 10:00, returned 11:20; 30-minute grace, then 50 minutes billed as 1 hour</td><td>1</td><td>$15.00</td><td>$15.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$377.75</strong></td></tr>
<tr><td colspan="3">Sales tax, 8% (illustrative)</td><td>$30.22</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$407.97</strong></td></tr>
<tr><td colspan="3">Less deposit collected at pickup</td><td>-$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$207.97</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Rental: 4 days x $52.00 = $208.00.</li>
<li>Miles driven: 25,545 - 24,610 = 935. Allowance: 4 x 200 = 800. Excess: 935 - 800 = 135. Charge: 135 x $0.25 = $33.75.</li>
<li>Additional driver: 4 x $12.00 = $48.00. Child seat: 4 x $10.00 = $40.00.</li>
<li>Refueling: 6 x $5.50 = $33.00.</li>
<li>Subtotal: $208.00 + $33.75 + $48.00 + $40.00 + $33.00 + $15.00 = $377.75.</li>
<li>Tax: $377.75 x 8% = $30.22 (rounded). Total: $377.75 + $30.22 = $407.97.</li>
<li>Balance: $407.97 - $200.00 = $207.97.</li>
</ul>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each line with its quantity and rate, set the tax rate, record the deposit in the amount paid field and download the PDF. The tool applies one tax rate to the whole invoice, so if some lines carry a different tax or a facility charge, add those as separate lines with the amounts you calculated. A structured layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> works well for business renters. The generator does not manage bookings, vehicles or deposits; it produces the final invoice once you have the numbers.</p>

<h2>Business rentals and long-term hire</h2>
<p>Companies renting vans, trucks or pool cars by the month expect invoices that fit their approval process. Quote their PO number, invoice per vehicle or per month as agreed, and attach the mileage log. For long-term hire, a monthly invoice with the period dates, vehicle and monthly rate is simpler than daily lines. If a business customer pays late, your terms should state any late fee in advance; our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to set and show them. For businesses that move goods rather than rent vehicles, the <a href="/blog/moving-company-invoice-template">moving company invoice template</a> covers labor and truck time instead.</p>

<h2>Common mistakes on car rental invoices</h2>
<ul>
<li><strong>Missing odometer readings.</strong> A mileage charge without the readings and allowance looks arbitrary.</li>
<li><strong>Fuel charged without a recorded level.</strong> If pickup fuel was not recorded, the refueling charge is hard to defend.</li>
<li><strong>Quietly adding a day for a late return.</strong> Show scheduled and actual times and apply the policy the renter signed.</li>
<li><strong>Treating a card hold as a payment.</strong> Only collected funds belong in the payments section.</li>
<li><strong>Bundling coverage and fees into the daily rate.</strong> Renters dispute charges they cannot see.</li>
<li><strong>Adding damage to the final bill without evidence.</strong> Use a separate invoice with photos and an estimate.</li>
<li><strong>One "taxes and fees" line.</strong> Name each tax, surcharge and facility charge.</li>
</ul>
<p>A car rental invoice template that mirrors the rental agreement line by line is the best protection against disputes. When the renter can match every charge to a reading, a time or a signed option, there is little left to argue about.</p>
`,
  },
  {
    slug: "dog-walking-invoice-template",
    title: "Dog Walking Invoice Template: Pet Sitting Rates and Packages",
    description:
      "Use this dog walking invoice template guide to bill walks, extra dogs, pet sitting visits, packages and holiday rates, with a sample monthly invoice.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-invoices-guide", "daycare-invoice-template", "late-payment-fees"],
    faqs: [
      {
        q: "What should a dog walking invoice include?",
        a: "Include your business name and contact details, the client's name and address, a unique invoice number, the invoice date and due date, the pet names, each service with its date or date range, duration, quantity and rate, any add-ons such as extra dogs or medication, discounts or package credits, tax if it applies to you, payments already received, the balance due and how to pay. A short line about your cancellation policy also helps.",
      },
      {
        q: "Should I invoice dog walking clients weekly or monthly?",
        a: "Either works if you are consistent. Weekly invoices keep amounts small and catch payment problems early, which suits new clients. Monthly invoices mean less admin and suit long-term clients with a fixed schedule. Many walkers bill regular clients in advance for the coming week or month and invoice one-off visits after the service. State your billing cycle in your service agreement so clients know when to expect each invoice.",
      },
      {
        q: "How do I invoice a prepaid package of dog walks?",
        a: "Issue the package invoice when it is sold, listing the number of walks, the package price and the expiry date if there is one. As walks are used, track the balance and show it on later invoices or statements, for example '10-walk package: 7 used, 3 remaining'. If you bill extras during the package period, deduct nothing from the package for them and invoice them separately.",
      },
      {
        q: "How should I charge for walking more than one dog?",
        a: "The simplest method is a base rate for the first dog and an add-on rate for each additional dog from the same household on the same walk. Show the add-on as its own line with the number of walks times the add-on rate, rather than changing the base rate. This keeps the invoice easy to check and makes it clear what the client would save if one dog stopped walking.",
      },
      {
        q: "Can I charge a cancellation fee for dog walks?",
        a: "Yes, if your service agreement states the notice period and fee before the client books. Many walkers charge part or all of the walk fee for cancellations inside a set notice window, because the time slot cannot be resold. Show the fee on the invoice as its own line with the date, for example 'Late cancellation, 14 Oct walk, per policy'. Apply it consistently, and waive it deliberately rather than forgetting it.",
      },
      {
        q: "Do dog walkers charge sales tax?",
        a: "It depends on where you work. Many US states do not tax dog walking or pet sitting, but some tax pet care services, and local rules can differ. In VAT or GST countries, you only charge tax once you are registered or required to be. Check with your state or national tax authority, and if tax applies, show it as a separate line with its rate.",
      },
      {
        q: "How should I invoice overnight pet sitting?",
        a: "Bill overnight stays per night, listing the dates, the number of nights and the nightly rate, and add separate lines for extra visits, additional pets, medication or holiday surcharges. If the client paid a deposit when booking, deduct it as a payment so the balance is clear. Note any expenses you paid for the client, such as food or a vet visit, as reimbursable lines with receipts attached.",
      },
      {
        q: "Can I make a dog walking invoice with a free invoice generator?",
        a: "Yes. Enter each service type as a line item with quantity and rate, add any discount, apply a tax rate only if one applies to you, record payments already received and download a PDF to send. A free generator will not schedule walks, track visits or charge clients automatically, so keep your walk log in a calendar or app and copy the monthly totals into the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A dog walking invoice template lists each pet, the service period, every walk or visit type with its duration, quantity and rate, add-ons such as extra dogs or medication, holiday surcharges, package credits or discounts, payments received and the balance due, plus your payment methods and cancellation policy. Bill regular clients weekly or monthly.</p>

<p>Dog walking is a business of small, frequent transactions. A single client might book twenty walks a month, a couple of drop-in visits and a weekend of pet sitting, and each of those comes with its own rate. If your invoice says "October services, $786", the client has to trust you. If it lists every service type with the count and the rate, they can check it against their own calendar in a minute, and they pay faster.</p>

<p>This guide is for independent dog walkers, pet sitters and small pet care businesses. It covers the services and pricing structures most walkers use, how to show packages and extras, how to handle cancellations and payments, and a worked monthly dog walking invoice template with the arithmetic shown.</p>

<h2>What to include in a dog walking invoice template</h2>
<p>Before sending each invoice, check it against this list:</p>
<ul>
<li>Your business name, phone, email and, if you are registered for tax, your tax number.</li>
<li>The client's name, address and preferred contact.</li>
<li>A unique invoice number; our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a simple sequence such as DW-2026-041.</li>
<li>Invoice date, service period and due date.</li>
<li>Pet names, so households with several dogs can see who was walked.</li>
<li>Each service type on its own line: walk length, drop-in visits, overnight stays.</li>
<li>Quantity and rate for every line.</li>
<li>Add-ons: extra dogs, medication, feeding, pet taxi, bath or towel-dry after muddy walks.</li>
<li>Surcharges for holidays, weekends or same-day bookings, shown separately.</li>
<li>Package credits, discounts and prepayments.</li>
<li>Tax, only if it applies to your services where you work.</li>
<li>Balance due, payment methods and your late payment and cancellation terms.</li>
</ul>

<h2>Dog walking and pet sitting services and how to bill them</h2>
<p>Most pet care businesses offer a mix of the services below. The table shows the usual billing unit and how each one should look on the invoice. Rates are deliberately left out because they vary by city, experience, insurance and group size.</p>
<table><thead><tr><th>Service</th><th>Billing unit</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Solo walk</td><td>Per walk, by length (for example 30 or 60 minutes)</td><td>"30-minute solo walk, Max, 18 walks x rate"</td></tr>
<tr><td>Group walk</td><td>Per dog per walk</td><td>"Group walk, 60 minutes, 8 walks x rate"</td></tr>
<tr><td>Additional dog</td><td>Per extra dog per walk</td><td>"Second dog (Bella), 20 walks x add-on rate"</td></tr>
<tr><td>Drop-in visit</td><td>Per visit</td><td>"Drop-in visit, feed and let out, 4 visits x rate"</td></tr>
<tr><td>Overnight pet sitting</td><td>Per night</td><td>"Overnight sitting, 10 to 12 Oct, 2 nights x rate"</td></tr>
<tr><td>Medication</td><td>Per visit or per day</td><td>"Medication administration, 6 visits x rate"</td></tr>
<tr><td>Pet taxi</td><td>Per trip or per mile</td><td>"Vet trip, 1 round trip x rate"</td></tr>
<tr><td>Holiday or weekend surcharge</td><td>Per service</td><td>"Holiday surcharge, 1 walk x surcharge"</td></tr>
<tr><td>Same-day booking</td><td>Per service</td><td>"Same-day booking fee, 1 x fee"</td></tr>
<tr><td>Late cancellation</td><td>Per cancelled service</td><td>"Late cancellation, 14 Oct, per policy"</td></tr>
</tbody></table>
<p>Keep the base rate and the extras separate. If you fold a second dog into a higher per-walk rate, clients cannot see what changed when their circumstances change, and you lose the ability to adjust one component without renegotiating the rest.</p>

<h3>Packages and prepaid walks</h3>
<p>Packages, such as ten walks paid upfront, help with cash flow and client loyalty. Invoice the package when it is sold and show the number of walks included and any expiry date. On later invoices, show how many walks have been used and how many remain, and invoice anything beyond the package at your normal rate. If the client pays a deposit before a long pet sitting booking, issue it as a separate invoice and deduct it on the final bill; our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains the format.</p>
<p>Package discounts should appear as a discount line rather than a lower unit rate, so the client can see the saving. That also makes it easy to stop the discount if the client switches to pay-as-you-go.</p>

<h2>Billing cycles: per walk, weekly or monthly</h2>
<p>How often you invoice affects your cash flow as much as your rates do. The common options:</p>
<ul>
<li><strong>Per service, due upon receipt.</strong> Best for one-off visits and new clients. Our guide to <a href="/blog/due-upon-receipt">due upon receipt terms</a> explains when this works.</li>
<li><strong>Weekly in advance.</strong> The client pays for next week's scheduled walks; extras and cancellations are adjusted on the following invoice.</li>
<li><strong>Monthly in arrears.</strong> One invoice at month end for all services, convenient for long-standing clients but it means you carry a month of unpaid work.</li>
</ul>
<p>Regular clients with a fixed schedule suit a repeating invoice. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers how to set up the routine, and the <a href="/blog/daycare-invoice-template">daycare invoice template</a> shows a similar weekly or monthly structure from a related care business.</p>

<h2>Sample monthly dog walking invoice</h2>
<p>Here is an illustrative October invoice for a household with two dogs, Max and Bella. All rates are examples only, not market rates. In this example no sales tax applies; check whether tax applies where you work.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>30-minute solo walk, Max and Bella, weekdays 1 to 31 Oct</td><td>18</td><td>$22.00</td><td>$396.00</td></tr>
<tr><td>60-minute walk, Saturdays</td><td>2</td><td>$35.00</td><td>$70.00</td></tr>
<tr><td>Second dog (Bella), all walks</td><td>20</td><td>$8.00</td><td>$160.00</td></tr>
<tr><td>Holiday surcharge, 13 Oct</td><td>1</td><td>$10.00</td><td>$10.00</td></tr>
<tr><td>Overnight pet sitting, 24 to 26 Oct</td><td>2</td><td>$75.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$786.00</strong></td></tr>
<tr><td colspan="3">Tax (not applicable in this example)</td><td>$0.00</td></tr>
<tr><td colspan="3">Less deposit paid for overnight booking, 10 Oct</td><td>-$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 7 Nov</strong></td><td><strong>$586.00</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Solo walks: 18 x $22.00 = $396.00.</li>
<li>Saturday walks: 2 x $35.00 = $70.00.</li>
<li>Second dog: 18 + 2 = 20 walks, 20 x $8.00 = $160.00.</li>
<li>Overnight sitting: 2 nights x $75.00 = $150.00.</li>
<li>Subtotal: $396.00 + $70.00 + $160.00 + $10.00 + $150.00 = $786.00.</li>
<li>Balance: $786.00 - $200.00 = $586.00.</li>
</ul>
<p>To create this in our <a href="/invoice-generator">free invoice generator</a>, add each service as a line item, enter the deposit in the amount paid field, add your payment details and policy in the notes, and download the PDF to email or message to the client. A friendly, colorful layout such as the <a href="/invoice-templates/creative">creative invoice template</a> suits a pet care brand, and you can add your logo. The generator does not schedule walks, send invoices or collect payments for you; keep your walk log in your calendar or booking app and copy the totals across at the end of each period.</p>

<h2>Putting your service agreement on the invoice</h2>
<p>An invoice is easier to defend when it repeats the key terms the client already agreed to. Before a new client's first walk, most professional walkers send a short service agreement covering the schedule, rates for each service, the billing cycle, the cancellation notice period, holiday dates that carry a surcharge, what happens in bad weather, key handling and emergency vet authorization. The invoice does not need to restate all of that, but it should reference it.</p>
<p>A short notes section at the bottom of your dog walking invoice template can carry the essentials:</p>
<ul>
<li>"Rates per service agreement dated 1 September 2026."</li>
<li>"Cancellations with less than 24 hours' notice are charged in full."</li>
<li>"Holiday surcharge applies on the dates listed in your agreement."</li>
<li>"Payment due within 7 days by bank transfer or the payment app shown above."</li>
</ul>
<p>When you change your prices, give clients written notice before the new rates appear on an invoice, and note the effective date on the first invoice that uses them. A surprise increase discovered on a bill damages trust far more than the increase itself. The same applies to new add-ons: agree on them first, then bill them.</p>
<p>Finally, keep a simple visit log for each client, with the date, start time and length of every walk or visit. If a client queries a count, the log answers the question in seconds, and it doubles as evidence of service if a dispute ever escalates.</p>

<h2>Getting paid: methods, terms and late fees</h2>
<p>Pet care clients are mostly individuals who pay from their phones, so make paying easy. Put your bank details or payment handles on every invoice; our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers what to include, and <a href="/blog/venmo-zelle-cash-app-invoice">invoicing with Venmo, Zelle or Cash App</a> covers peer-to-peer apps, including the difference between personal and business accounts.</p>
<p>State your terms in your service agreement and repeat them on the invoice: the due date, accepted methods and what happens if payment is late. A modest late fee, disclosed in advance, encourages prompt payment; see our guide to <a href="/blog/late-payment-fees">late payment fees</a> for how to set one. For clients who fall behind, pausing future walks until the account is current is often more effective than any fee.</p>
<h3>Expenses and records</h3>
<p>If you buy food, treats or poop bags for a client, or pay a vet on their behalf, list the cost as a separate reimbursable line and keep the receipt. For your own taxes, keep invoices together with mileage logs and receipts for supplies, insurance and training. The IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer">self-employed individuals tax center</a> explains record-keeping and estimated tax for US walkers, and our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers common business costs.</p>

<h2>Common mistakes on dog walking invoices</h2>
<ul>
<li><strong>One lump sum for the month.</strong> Clients cannot reconcile it against their calendar.</li>
<li><strong>No pet names.</strong> Multi-dog households and shared custody of a pet need to see who was walked.</li>
<li><strong>Surcharges hidden in the rate.</strong> Show holiday and same-day fees as separate lines.</li>
<li><strong>Cancellation fees with no policy.</strong> Charge them only if the client agreed to the policy in advance.</li>
<li><strong>Losing track of package balances.</strong> Show walks used and remaining on each invoice or statement.</li>
<li><strong>Charging tax that does not apply, or ignoring tax that does.</strong> Check your state or national rules once and set your template accordingly.</li>
<li><strong>No payment instructions.</strong> If paying takes more than a minute, many clients put it off.</li>
</ul>
<p>A tidy dog walking invoice template that shows every walk type, extra and credit makes your business look as reliable as your walks. Build it once, reuse it every period, and update it whenever your prices change.</p>
`,
  },
  {
    slug: "school-fee-voucher-format",
    title: "School Fee Voucher Format: Fields, Bank Copy and Example",
    description:
      "School fee voucher format explained: bank, school and student copies, fee heads, due date, late fee, arrears and concessions, with a worked Pakistan example.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["tutoring-invoice-template", "daycare-invoice-template", "delivery-challan-format"],
    faqs: [
      {
        q: "What is a school fee voucher?",
        a: "A school fee voucher, also called a fee challan or fee slip, is the document a school issues to request fees for a period, usually a month or a term. It lists the student, the fee heads, the amount payable by the due date and the amount payable after it, and it is printed in several copies so the bank, the school and the parent each keep a record of the payment once it is stamped.",
      },
      {
        q: "Why does a fee voucher have three or four copies?",
        a: "Each party needs proof of the same payment. The bank keeps its copy as the deposit record, the school's accounts office uses its copy to mark the fee as received, and the parent or student keeps theirs as a receipt. Some institutions add a fourth copy for an admissions or campus office. All copies carry the same voucher number, so any one of them can be matched to the others.",
      },
      {
        q: "What fields should a school fee voucher include?",
        a: "Include the school's name, branch and logo, the bank name, branch and account number, a unique voucher number, the issue date, due date and validity date, the student's name, father's or guardian's name, registration number, class and section, the fee month or term, each fee head with its amount, arrears, concessions, the total payable by the due date, the late fee, the total payable after the due date, and spaces for the bank stamp and cashier signature.",
      },
      {
        q: "How is a late fee shown on a fee voucher?",
        a: "Most vouchers show two totals: the amount payable on or before the due date, and the amount payable after it, which includes a fixed late fee or a per-day fine up to a limit. Showing both totals means the bank can accept the correct amount without calculating anything. State the last date the voucher can be used, after which the parent needs a new voucher with updated arrears.",
      },
      {
        q: "Can school fees be paid online in Pakistan instead of at the bank?",
        a: "Many schools and universities now print a 1Bill or other payment reference on the voucher, so fees can be paid through mobile banking apps, internet banking or wallets that support bill payments, as well as at a bank branch. The voucher should show the reference number and instructions. Whether a given school accepts online payments depends on its bank arrangement, so parents should follow the instructions printed on their voucher.",
      },
      {
        q: "How should arrears appear on a fee voucher?",
        a: "Show arrears as a separate line, naming the months they relate to, for example 'Arrears, August and September tuition'. Do not merge them into the current month's tuition, because the parent and the accounts office both need to see what is overdue. If the school charges late fees on arrears, show those separately too, and make sure the arrears figure matches the school's ledger before the voucher is printed.",
      },
      {
        q: "Is there tax on school fees in Pakistan?",
        a: "Education services are generally not charged sales tax on the voucher, but income tax law has required educational institutions to collect advance tax on fees above an annual threshold from certain payers under section 236I of the Income Tax Ordinance. The rate, threshold and which payers are covered have changed across Finance Acts, so schools should confirm the current rules with a tax adviser before printing a tax line.",
      },
      {
        q: "Can I make a school fee voucher with an invoice generator?",
        a: "A free invoice generator can produce a clean single-copy fee invoice or receipt with fee heads as line items, a discount for concessions, the amount paid and the balance due, in PKR or any currency. It does not print multi-copy bank challans, generate 1Bill references or track arrears for a whole school. It suits tuition centers, academies, small schools and private tutors more than large schools that need a fee management system.",
      },
      {
        q: "What should a parent do if a fee voucher is lost?",
        a: "Ask the school's accounts office for a duplicate voucher with the same details, or download it from the school's portal if one exists. If the fee has already been paid, keep the stamped student copy or the bank's receipt as proof; a lost student copy can usually be confirmed from the bank's records using the voucher number and payment date. Avoid paying on a handwritten copy unless the school accepts it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A school fee voucher format has matching bank, school and student copies, each with the school and bank details, a voucher number, student name and class, fee month, fee heads such as tuition, exam and transport, arrears and concessions, the total payable by the due date, a late fee and the total payable after the due date.</p>

<p>In Pakistan and much of South Asia, school fees are still collected through a printed voucher, often called a fee challan, that the parent takes to a bank branch or pays through a banking app. The voucher is a small document doing a big job: it tells the parent what to pay, tells the bank where to credit it, and gives the school a record to match against its accounts. When the format is unclear, payments land against the wrong student, late fees are disputed and the accounts office spends the first week of every month answering calls.</p>

<p>This guide explains the standard school fee voucher format, what each copy is for, which fields to include, how to show late fees, arrears and concessions, and what a complete voucher looks like with the totals worked out. It also covers when a simple school fee invoice is enough, for example at a tuition academy or a small private school.</p>

<h2>What is a school fee voucher?</h2>
<p>A school fee voucher is a request for payment covering a period of study, usually a month, a quarter or a term. It works like an invoice, but it is designed around bank deposits rather than direct transfers. The same voucher number appears on every copy, and the bank stamps each one when the payment is received.</p>
<p>The word "challan" is used for many deposit and dispatch documents in Pakistan and India. A fee challan is a payment slip, which is different from a goods dispatch document; our guide to the <a href="/blog/delivery-challan-format">delivery challan format</a> covers that other kind.</p>

<h2>The copies in a fee voucher and who keeps each one</h2>
<p>Most school fee vouchers are printed on a single sheet divided into three or four vertical copies. Each copy carries the same information, with a label at the top.</p>
<table><thead><tr><th>Copy</th><th>Kept by</th><th>Used for</th></tr></thead><tbody>
<tr><td>Bank copy</td><td>The collecting bank</td><td>The bank's deposit record and reconciliation with the school's account</td></tr>
<tr><td>School or accounts copy</td><td>The school's accounts office, returned by the bank or the parent</td><td>Marking the student's fee as paid in the school ledger</td></tr>
<tr><td>Student or parent copy</td><td>The parent</td><td>Proof of payment if a dispute arises</td></tr>
<tr><td>Office copy (optional)</td><td>Admissions or campus office</td><td>Clearance for exams, results or transfer certificates</td></tr>
</tbody></table>
<p>Where fees are paid electronically, the bank or app issues its own receipt and the school receives payment data directly from the bank. The paper copies then act as a backup rather than the main record, but many schools still print them because parents expect them and branches still accept them.</p>

<h2>What to include in a school fee voucher format</h2>
<p>Use this checklist when designing or reviewing your voucher:</p>
<ul>
<li><strong>School details:</strong> name, branch or campus, address, phone and logo.</li>
<li><strong>Bank details:</strong> bank name, branch, the school's account title and account number. See our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> for what to print.</li>
<li><strong>Voucher number:</strong> unique and sequential, printed identically on every copy.</li>
<li><strong>Online payment reference:</strong> a 1Bill or similar consumer number, if your bank offers one, with brief instructions.</li>
<li><strong>Dates:</strong> issue date, due date and the last date the voucher is valid.</li>
<li><strong>Student details:</strong> name, father's or guardian's name, registration or roll number, class and section.</li>
<li><strong>Fee period:</strong> the month, quarter or term the voucher covers.</li>
<li><strong>Fee heads:</strong> tuition, admission, annual or development charges, exam, lab, library, transport, sports and any other approved charges, each on its own line.</li>
<li><strong>Arrears:</strong> unpaid amounts from earlier periods, with the months named.</li>
<li><strong>Concessions:</strong> sibling, merit or staff discounts, shown as deductions.</li>
<li><strong>Totals:</strong> amount payable by the due date, late fee, and amount payable after the due date, ideally with the amount in words.</li>
<li><strong>Bank section:</strong> space for the bank stamp, cashier signature and date received.</li>
<li><strong>Instructions:</strong> accepted payment channels, late fee policy and a contact for queries.</li>
</ul>

<h2>Fee heads, concessions, arrears and late fees</h2>
<p>Fee heads are the building blocks of the voucher. Keep the list short and consistent from month to month so parents recognize it. The table below shows common heads and how they usually appear; amounts and frequencies are set by each school, and in several provinces private school fee increases are subject to regulation, so check the rules that apply to your school.</p>
<table><thead><tr><th>Fee head</th><th>Typical frequency</th><th>Note on the voucher</th></tr></thead><tbody>
<tr><td>Admission fee</td><td>Once, at enrollment</td><td>Show only on the first voucher</td></tr>
<tr><td>Tuition fee</td><td>Monthly or per term</td><td>Name the month or term</td></tr>
<tr><td>Annual or development charges</td><td>Once a year</td><td>Name the session</td></tr>
<tr><td>Examination fee</td><td>Per exam session</td><td>Name the exam</td></tr>
<tr><td>Lab, computer or library fee</td><td>Monthly or annual</td><td>Separate line per head</td></tr>
<tr><td>Transport fee</td><td>Monthly</td><td>Name the route if fees differ</td></tr>
<tr><td>Arrears</td><td>As needed</td><td>Name the months owed</td></tr>
<tr><td>Concession</td><td>As approved</td><td>Show as a negative line with the reason</td></tr>
<tr><td>Late fee</td><td>After the due date</td><td>Shown in the "after due date" total</td></tr>
</tbody></table>
<h3>Concessions</h3>
<p>Show concessions as a separate deduction, naming the type and the base: "Sibling concession, 10% of tuition". This keeps the full fee visible, makes audits easier and allows the concession to be withdrawn without reprinting the fee structure.</p>
<h3>Late fees</h3>
<p>The clearest format prints two totals: "Payable by 10 November" and "Payable after 10 November". The second includes the late fee, either a fixed amount or a daily fine up to a maximum. Bank tellers then accept one of two printed figures rather than calculating a fine. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to set a fair, disclosed charge, and if a family needs more time, a written <a href="/blog/payment-plan-agreement">payment plan agreement</a> is usually better than accumulating fines.</p>

<h2>Sample school fee voucher with the arithmetic</h2>
<p>Below is an illustrative monthly voucher for a student at a private school in Pakistan. All amounts are examples, not a recommended fee structure. Every copy of the voucher would carry these same figures.</p>
<table><thead><tr><th>Fee head</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Tuition fee, November 2026</td><td>8,500</td></tr>
<tr><td>Computer lab fee, November 2026</td><td>600</td></tr>
<tr><td>Examination fee, mid-term</td><td>1,200</td></tr>
<tr><td>Transport fee, Route 4, November 2026</td><td>3,000</td></tr>
<tr><td>Arrears, September 2026 tuition (partial)</td><td>2,000</td></tr>
<tr><td>Less sibling concession, 10% of tuition</td><td>-850</td></tr>
<tr><td><strong>Payable by 10 November 2026</strong></td><td><strong>14,450</strong></td></tr>
<tr><td>Late fee after due date (fixed)</td><td>500</td></tr>
<tr><td><strong>Payable after 10 November 2026 (valid until 20 November)</strong></td><td><strong>14,950</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Current charges: 8,500 + 600 + 1,200 + 3,000 = 13,300.</li>
<li>Add arrears: 13,300 + 2,000 = 15,300.</li>
<li>Concession: 8,500 x 10% = 850. Payable by due date: 15,300 - 850 = 14,450.</li>
<li>Payable after due date: 14,450 + 500 = 14,950.</li>
</ul>
<p>The amount in words, such as "Fourteen thousand four hundred fifty rupees only", is often printed beside the total so it cannot be altered easily.</p>

<h2>Paying school fees online and the voucher</h2>
<p>Many Pakistani schools and universities now print a 1Bill consumer number or similar reference on the voucher. Parents enter it in their banking app, internet banking or a supported wallet, and the payment is posted to the school without a branch visit; 1LINK describes the service on its <a href="https://1link.net.pk/" target="_blank" rel="noopener noreferrer">official website</a>. Some schools also accept instant transfers; our guide to <a href="/blog/raast-business-payments-pakistan">Raast business payments in Pakistan</a> explains how those work. If you offer online payment, print the reference clearly on every copy and tell parents whether they still need to submit the student copy.</p>
<p>On tax, education fees are generally not charged sales tax on the voucher. Income tax law, however, has required educational institutions to collect advance tax on fees above an annual threshold from certain payers under section 236I of the Income Tax Ordinance. The rate, threshold and scope have changed over the years, so confirm the current position before adding a tax line.</p>

<h2>School fee invoice: the simpler alternative</h2>
<p>Not every institution needs a multi-copy bank voucher. Tuition academies, coaching centers, Quran and language tutors, preschools and small private schools that collect fees by bank transfer or cash can issue a single fee invoice instead. It carries the same core information: student, period, fee heads, concessions, amount paid and balance due.</p>
<p>Our <a href="/invoice-generator/pakistan">invoice generator for Pakistan</a> creates that kind of fee invoice in PKR: enter each fee head as a line item, apply a concession as a percentage or fixed discount, record any amount already paid, add bank details in the notes, and download the PDF. A traditional layout such as the <a href="/invoice-templates/classic">classic invoice template</a> suits schools. Be clear about the limits: the generator does not print multi-copy bank challans, create 1Bill references, track arrears across a student body or send invoices automatically. Schools with hundreds of students need a fee management system connected to their bank. For one-to-one teaching, our <a href="/blog/tutoring-invoice-template">tutoring invoice template</a> is a closer fit, and early-years settings should see the <a href="/blog/daycare-invoice-template">daycare invoice template</a>. If you bill the same families every month, the <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to keep the routine consistent.</p>

<h2>Common mistakes on school fee vouchers</h2>
<ul>
<li><strong>Different numbers on different copies.</strong> The voucher number must be identical on every copy, or the bank and school records will not match.</li>
<li><strong>Arrears merged into tuition.</strong> Parents dispute totals they cannot break down.</li>
<li><strong>Only one total printed.</strong> Without an "after due date" figure, tellers and parents calculate fines differently.</li>
<li><strong>No validity date.</strong> Old vouchers get paid with outdated arrears or fines.</li>
<li><strong>Concessions applied silently.</strong> Show them as deductions so audits and renewals are straightforward.</li>
<li><strong>Wrong or missing bank account.</strong> A single digit wrong sends fees to a suspense account.</li>
<li><strong>Unexplained new fee heads.</strong> Introduce new charges with a notice to parents before they appear on a voucher.</li>
</ul>
<p>A good school fee voucher format is boring in the best sense: every copy matches, every fee head is named, and both totals are printed. Get those basics right and fee collection becomes a routine instead of a monthly argument.</p>
`,
  },
];
