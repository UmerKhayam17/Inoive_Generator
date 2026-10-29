import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_H: PostDraft[] = [
  {
    slug: "tattoo-invoice-template",
    title: "Tattoo Invoice Template: Deposits, Receipts and Rates",
    description:
      "Use this tattoo invoice template to bill deposits, hourly or flat-rate sessions, touch-ups and tips clearly, with a worked sample and receipt tips for artists.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["deposit-invoice", "payment-receipt-template", "salon-invoice-template"],
    faqs: [
      {
        q: "Do tattoo artists need to give clients an invoice?",
        a: "Walk-in clients paying on the day usually just want a receipt, and that is fine for most small tattoos. An invoice becomes useful when a deposit is taken, when a large piece runs across several sessions, when a business is paying (for example, a brand commission or a company event), or when the client asks for one. Whichever document you issue, keep a numbered copy for your own records and tax return.",
      },
      {
        q: "Is a tattoo deposit refundable?",
        a: "Most studios treat the deposit as non-refundable because it pays for design time and holds a slot in the calendar, and it is usually deducted from the final price. Whether a non-refundable deposit is enforceable can depend on local consumer law and on what you told the client before they paid. Write your deposit policy on the deposit invoice and booking form, and check local rules if you are unsure.",
      },
      {
        q: "How much deposit should a tattoo artist charge?",
        a: "Studios commonly ask for a fixed amount for small and medium pieces, or a share of the estimated price for large custom work, with the deposit often roughly covering design time or one hour of tattooing. Amounts vary widely by artist, studio and region. Whatever you choose, show it on the invoice as a deposit received and subtract it from the total on the final session invoice.",
      },
      {
        q: "Should tips go on a tattoo invoice?",
        a: "Tips are optional, so they are not usually printed as a charge on the invoice. If a client adds a tip when paying by card, record it on the receipt or in your notes so your income records are complete. Tips are generally taxable income for self-employed artists. In the United States, check whether any current federal tip deduction rules apply to you with a qualified tax adviser.",
      },
      {
        q: "Do tattoo artists charge sales tax or VAT?",
        a: "It depends where you work. Some US states tax tattoo services and others do not, and aftercare products you sell are often taxable as retail goods. In the UK, VAT only applies once you are VAT-registered, which is required above the registration threshold. Rules change, so check your state revenue department or HMRC guidance, and ask an adviser before adding or leaving off tax.",
      },
      {
        q: "How do I invoice a multi-session tattoo?",
        a: "Either invoice each session as it happens, showing hours worked and the running total, or agree a flat price and split it into stage payments such as linework, shading and colour. Reference the same project name on each invoice and show the deposit only once, normally on the final invoice. A short running summary in the notes, such as Sessions 1 to 3 of an estimated 5, avoids surprises.",
      },
      {
        q: "What is the difference between a tattoo invoice and a tattoo receipt?",
        a: "An invoice asks for payment: it shows what is owed and when it is due. A receipt confirms payment has been made: it shows the amount paid, the date and the method. For a same-day tattoo paid in full at the counter, a receipt alone is normal. For deposits and multi-session work, issue an invoice, then mark it paid or issue a receipt when money comes in.",
      },
      {
        q: "Can I make a tattoo invoice for free?",
        a: "Yes. A free online invoice generator lets you add your studio name and logo, list the session, design time and products, apply a deposit as amount paid, and download a PDF to send or print. It will not take card payments or send the invoice for you, so you share the PDF yourself and record the payment when the client pays.",
      },
      {
        q: "How long should a tattoo artist keep invoices and receipts?",
        a: "Keep sales records for as long as your tax authority requires, which is several years in most countries. In the UK, self-employed records are generally kept for at least five years after the 31 January filing deadline, and in the US the IRS usually asks for three years or more. Keep consent forms separately, following your local health and data rules.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A tattoo invoice template lists your studio details, the client, a unique invoice number, the date, a description of the piece and placement, how it is priced (hourly, flat or shop minimum), any design fee, the deposit already paid, products such as aftercare, tax if it applies, and the balance due. Tips are recorded separately on the receipt.</p>

<p>Most tattoo work is paid at the counter, so many artists never think about invoices until they need one: a large custom back piece booked months ahead, a deposit dispute, a brand that wants artwork tattooed at an event, or an accountant asking for clean records. A simple tattoo invoice template solves all of those without turning your shop into an office.</p>

<p>This guide covers what to put on a tattoo artist invoice, how to handle deposits and multi-session pieces, common pricing models with typical ranges, when to issue a tattoo receipt instead, and a worked example you can copy into our free invoice generator.</p>

<h2>What a tattoo invoice template should include</h2>
<p>A good tattoo invoice template is short. Clients want to see what they paid for and how the deposit was applied, and you want a numbered record for your books. Include these items:</p>
<ul>
<li><strong>Studio or artist details:</strong> trading name, address, phone or booking email, and a logo if you have one. Add your licence or registration number if your city or county expects it to be shown.</li>
<li><strong>Client details:</strong> name and contact details. For business clients, include the company name and any PO number they give you.</li>
<li><strong>Invoice number and date:</strong> a unique, sequential number such as TAT-2026-0118. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</li>
<li><strong>Description of the work:</strong> design, placement and size, for example "Custom botanical sleeve, left forearm, session 2 of 4".</li>
<li><strong>Pricing basis:</strong> hours at your hourly rate, a flat piece price, or a shop minimum.</li>
<li><strong>Design or drawing fee:</strong> only if you charge it separately from tattoo time.</li>
<li><strong>Products:</strong> aftercare balm, film or other retail items sold to the client.</li>
<li><strong>Deposit received:</strong> shown as amount paid so the balance is correct.</li>
<li><strong>Tax:</strong> only where your state or country taxes tattoo services or the products sold.</li>
<li><strong>Payment terms and methods:</strong> due on the day of the session, accepted cards and apps, and your deposit and cancellation policy.</li>
</ul>
<p>If you only ever need a receipt, you can still use the same tattoo invoice template: mark it paid in full with the amount paid field so the balance shows zero.</p>
<p>Keep health records such as consent forms, ink batch numbers and medical questionnaires off the invoice. They belong in your client file, kept under your local health department and data protection rules.</p>

<h2>Tattoo pricing models and typical rates</h2>
<p>How you price shapes how the invoice reads. Most artists use one of four models, and many mix them depending on the piece. The ranges below are rough figures commonly quoted by US studios at the time of writing; rates vary by region, artist experience, style and demand, so treat them as illustrations only.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Shop minimum</td><td>Fixed minimum for any tattoo, covering setup and sterile supplies</td><td>About $50 to $150</td><td>Shop minimum, small script, inner wrist</td></tr>
<tr><td>Hourly rate</td><td>Hours tattooing x rate, often billed in 15 or 30 minute blocks</td><td>About $100 to $250+ per hour</td><td>Tattooing, 3.5 hrs at $160</td></tr>
<tr><td>Flat piece price</td><td>Quoted price for the whole design</td><td>Anything from under $200 to several thousand</td><td>Flash piece, rose, outer calf, flat rate</td></tr>
<tr><td>Day rate</td><td>Fixed price for a full session day, common for large work</td><td>Often $800 to $2,000+ per day for established artists</td><td>Full day session, back piece, day 2</td></tr>
</tbody></table>
<p>Whichever model you use, describe it plainly on the invoice. "3.5 hrs at $160" is much easier to accept than a single unexplained total, and it matches what the client saw on the clock.</p>
<h3>Design fees and touch-ups</h3>
<p>Some artists build drawing time into the deposit, others charge a separate design fee for complex custom work. If you charge it separately, show it as its own line so the client sees it is not tattoo time. Touch-ups are often free within a set period after healing and charged at the shop minimum afterwards. If a touch-up is free, you can still issue a zero-value invoice line, "Touch-up, healed check, no charge", so your records show the visit.</p>

<h2>How to handle a tattoo deposit on the invoice</h2>
<p>The tattoo deposit is where most disputes start, so the paperwork matters. A clean process looks like this:</p>
<ol>
<li><strong>Issue a deposit invoice when booking.</strong> One line, "Booking deposit, custom sleeve, deducted from final session", with the amount and your deposit policy in the notes. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains the general approach.</li>
<li><strong>Send a receipt when the deposit is paid.</strong> This confirms the date, amount and method, which helps if the client later disputes a card charge.</li>
<li><strong>Apply the deposit on the final session invoice.</strong> List the full work, then enter the deposit as amount paid so the balance due is correct.</li>
<li><strong>Record forfeited deposits.</strong> If a client no-shows and your policy keeps the deposit, note it in your records. It is still income.</li>
</ol>
<p>State your policy in plain words on both the deposit invoice and your booking form: how much, whether it is refundable, how much notice is needed to reschedule, and how many times a booking can be moved before the deposit is lost. Whether a non-refundable deposit holds up can depend on local consumer law, so get advice if you are unsure.</p>

<h2>Sample tattoo invoice walk-through</h2>
<p>Here is an illustrative example. A client books a custom forearm piece. They paid a $150 tattoo deposit when booking. On the day, the artist tattoos for 3.5 hours at $160 per hour, charges a $60 design fee agreed in advance, and sells a tube of aftercare balm for $18. In this example, the studio is in a state that taxes the retail product but not the service, so the artist issues the invoice without tax and records sales tax on the balm separately through the till. Tax treatment depends on your location.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Custom design, botanical forearm (agreed fee)</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>Tattooing, left forearm, 3.5 hrs</td><td>3.5</td><td>$160.00</td><td>$560.00</td></tr>
<tr><td>Aftercare balm, 50 ml</td><td>1</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$638.00</strong></td></tr>
<tr><td colspan="3">Deposit received (booking, 2 Oct 2026)</td><td>-$150.00</td></tr>
<tr><td colspan="3"><strong>Balance due today</strong></td><td><strong>$488.00</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and pick the USA preset (or the UK preset if you work in Britain).</li>
<li>Upload your studio logo and add your trading name and contact details.</li>
<li>Enter the client's name and an invoice number.</li>
<li>Add the three line items with quantity and rate. The generator multiplies them for you.</li>
<li>Leave the tax rate at zero unless your service is taxable. The generator supports one tax rate per invoice, so if only some items are taxable, issue product sales through your till or on a separate invoice.</li>
<li>Enter $150 in the amount paid field. The balance due updates to $488.</li>
<li>Add your deposit, cancellation and touch-up policy to the notes, then download the PDF.</li>
</ol>
<p>A bold, artistic layout often suits a studio brand. Try the <a href="/invoice-templates/creative">creative invoice template</a> or a darker palette to match your shop.</p>

<h2>Tattoo receipt vs tattoo invoice</h2>
<p>Artists often ask whether they need a tattoo receipt, an invoice, or both. The difference is simple:</p>
<table><thead><tr><th></th><th>Invoice</th><th>Receipt</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Requests payment</td><td>Confirms payment made</td></tr>
<tr><td>When issued</td><td>Before or at the session</td><td>After money is received</td></tr>
<tr><td>Key fields</td><td>Items, total, deposit applied, balance, due date</td><td>Amount paid, date, method, what it was for</td></tr>
<tr><td>Typical use</td><td>Deposits, multi-session pieces, business clients</td><td>Walk-ins, card payments, deposit confirmation</td></tr>
</tbody></table>
<p>For a walk-in flash tattoo paid in full, a receipt from your card reader or a <a href="/blog/payment-receipt-template">payment receipt template</a> is enough. For anything booked in advance, use an invoice for the deposit and the final session. Our explainer on <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> goes into more detail.</p>

<h2>Tips, card fees and payment methods</h2>
<p>Tips are optional and should not appear as a charge on the invoice. If the client adds a tip through the card reader, it will show on the card receipt. Record it with the job anyway so your income totals match your bank deposits. Self-employed artists generally report tips as income. In the United States there have been recent federal changes around tip income for some workers; see our summary of <a href="/blog/no-tax-on-tips-self-employed">tip deduction rules for the self-employed</a> and confirm with a tax adviser whether they apply to you.</p>
<p>Card processing fees are a cost of doing business. Some shops add a surcharge or give a cash price instead, but surcharging rules differ by state and card network, so check before adding one. If clients pay by a payment app, write the app name and transaction reference on the receipt so you can match it to your records later.</p>

<h2>Booth rent, guest spots and studio splits</h2>
<p>Not every tattoo invoice goes to a client. Many artists work under one of these arrangements, and each needs its own paper trail:</p>
<ul>
<li><strong>Booth rent:</strong> the artist rents a chair and keeps their own takings. The shop owner invoices the artist for weekly or monthly rent, and the artist invoices clients directly.</li>
<li><strong>Commission split:</strong> the shop takes payment from the client and pays the artist a percentage. The artist may invoice the shop for their share each week, listing each piece.</li>
<li><strong>Guest spots and conventions:</strong> a visiting artist invoices the host shop or the client, depending on who collected the money. Note the city and dates.</li>
</ul>
<p>The structure is similar to other chair-rental trades; our <a href="/blog/salon-invoice-template">salon invoice template</a> guide covers booth rent invoices in more depth.</p>

<h2>Tax on tattoo services</h2>
<p>Sales tax on tattoos is not uniform. Some US states treat tattooing as a taxable service, while many do not tax it at all, and retail products such as aftercare are commonly taxable. Read our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> and check your state revenue department. If tax applies, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you work out the figure.</p>
<p>In the UK, VAT only applies once your taxable turnover passes the registration threshold or you register voluntarily. Other countries have their own rules. This is general information, not tax advice; check with a qualified accountant for your situation.</p>

<h2>Common tattoo invoicing mistakes</h2>
<ul>
<li><strong>No written deposit policy.</strong> Verbal policies lead to chargebacks and arguments. Print it on the deposit invoice.</li>
<li><strong>Forgetting to deduct the deposit.</strong> Charging the full price and then refunding the deposit confuses everyone. Use the amount paid field.</li>
<li><strong>Vague descriptions.</strong> "Tattoo, $560" tells the client nothing. Include placement, hours and session number.</li>
<li><strong>Reusing invoice numbers.</strong> Keep one numbering sequence so your records are clean at tax time.</li>
<li><strong>Mixing tips into the price.</strong> Keep tips separate from the invoiced amount, but record them as income.</li>
<li><strong>Putting health details on the invoice.</strong> Keep consent and medical notes in the client file, not on a document that may be shared or emailed.</li>
</ul>

<h2>Conclusion</h2>
<p>A tattoo invoice template does not need to be complicated. List the piece, the time or flat price, any design fee and products, apply the tattoo deposit, and state your policies in the notes. That protects you in a dispute and keeps your books tidy. Build your next one in the <a href="/invoice-generator">free invoice generator</a>, download the PDF and share it with your client. For more trade-specific guides, browse our <a href="/blog/category/industry-invoices">industry invoice articles</a>.</p>
`,
  },
  {
    slug: "drone-services-invoice-template",
    title: "Drone Services Invoice Template for Aerial Work",
    description:
      "A drone services invoice template for aerial photography, video and survey work: day rates, licensing notes, deliverables and a worked sample you can copy free.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "photography-invoice-template",
      "videographer-invoice-template",
      "statement-of-work-template",
    ],
    faqs: [
      {
        q: "What should a drone services invoice include?",
        a: "Include your business name and contact details, your remote pilot certificate or operator registration number where relevant, a unique invoice number, the client and project site, the flight date or dates, the services delivered (flight time, editing, processing, data deliverables), travel and other expenses, any licence for image use, tax if it applies, payment terms and the balance due. A clear site address and date help clients match the invoice to the job.",
      },
      {
        q: "How much do drone pilots charge?",
        a: "Rates vary widely by region, sector and deliverable. Simple real estate photo packages are often a few hundred dollars, while half-day and day rates for commercial video, inspection or mapping work commonly run from several hundred to a few thousand. Survey work with processed outputs usually costs more than raw footage. Check local competitors and price by deliverable rather than flight minutes alone.",
      },
      {
        q: "Do I need a license to invoice for drone work in the US?",
        a: "In the United States, flying a drone for business generally requires operating under the FAA's Part 107 rules, which includes holding a remote pilot certificate and keeping it current through recurrent training every 24 calendar months. Registration and Remote ID rules also apply. Check the FAA's official drone pages for current requirements before taking paid work.",
      },
      {
        q: "What licence do I need for commercial drone work in the UK?",
        a: "In the UK, the CAA regulates drones by risk category rather than by whether you are paid. Most operators need an Operator ID and a Flyer ID, and work close to people or in more complex settings may need the A2 Certificate of Competency or an Operational Authorisation. Insurance is expected for commercial work. Rules were being updated in 2026, so check the CAA website before you quote.",
      },
      {
        q: "Should I charge for weather cancellations?",
        a: "Most drone operators set a policy in their terms. A common approach is free rescheduling when weather or airspace restrictions prevent safe flight, with a cancellation fee if the client cancels late for their own reasons. Write the policy in your quote and repeat it in the invoice notes so there is no argument after a postponed shoot.",
      },
      {
        q: "How do I invoice for aerial survey deliverables?",
        a: "Break the invoice into data capture (site visit, flight time, ground control points), processing (orthomosaic, 3D model, point cloud, volume calculations) and delivery (file formats, cloud hosting, report). Show acreage or hectares where you price by area. Clients often need this detail to match the invoice to a purchase order and to their own project budget lines.",
      },
      {
        q: "Should drone travel and mileage be on the invoice?",
        a: "Yes, if your quote allowed for it. Many operators include travel within a set radius and charge mileage or a travel fee beyond that. Show it as a separate line with the distance and rate. Accommodation, permits and parking can be billed as reimbursable expenses at cost, ideally with receipts kept on file in case the client asks.",
      },
      {
        q: "Who owns drone footage after the client pays?",
        a: "That depends on your contract. Many operators keep copyright and grant the client a licence to use the images or footage for agreed purposes, while some transfer rights for a higher fee. State the licence terms on the quote and in the invoice notes, for example a licence for marketing use on the client's own channels, effective on payment in full.",
      },
      {
        q: "Can I use a free invoice generator for drone services?",
        a: "Yes. Add your logo, enter each service and expense as a line item, apply one tax rate if needed, record any deposit as amount paid and download a PDF. The generator does not send emails, take payments or track flight logs, so you share the PDF yourself and keep flight records separately.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A drone services invoice template should show your business and licensing details, the client and site, the flight date, each service (flight time or package, editing, data processing), deliverables, travel and expenses, any image licence, tax where applicable, the deposit paid and the balance due. Itemising capture, processing and delivery separately makes approval faster.</p>

<p>Drone work covers a wide range: real estate photos, wedding aerials, roof and mast inspections, construction progress video, agricultural mapping and full aerial survey jobs. The clients differ, but they all want the same thing from an invoice: a clear link between what they ordered and what they are paying for. A good drone services invoice template gives you that structure without starting from scratch every time.</p>

<p>This guide explains what to include, the pricing models drone operators use, how to show licensing and insurance, a sample drone photography invoice built in our free invoice generator, and the mistakes that slow payment.</p>

<h2>What to include on a drone services invoice template</h2>
<p>Use this checklist for every job:</p>
<ul>
<li><strong>Your business details:</strong> name, address, email, phone and logo.</li>
<li><strong>Licensing reference:</strong> in the US, your remote pilot certificate number; in the UK, your Operator ID. Not legally required on an invoice in most cases, but it reassures commercial clients.</li>
<li><strong>Invoice number, date and due date:</strong> a unique number such as DRN-2026-041.</li>
<li><strong>Client details and PO number:</strong> large clients often reject invoices without their PO. See our guide to <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li><strong>Site and flight date:</strong> address or site name, plus the date of each flight.</li>
<li><strong>Services:</strong> flight package or hours, editing, processing and reporting as separate lines.</li>
<li><strong>Deliverables:</strong> number of edited photos, video length, file formats, survey outputs.</li>
<li><strong>Expenses:</strong> travel, accommodation, permits, ground control equipment hire.</li>
<li><strong>Usage licence:</strong> what the client may do with the images or data.</li>
<li><strong>Tax:</strong> sales tax or VAT where applicable.</li>
<li><strong>Payment terms:</strong> due date, accepted methods and your cancellation policy.</li>
</ul>

<h2>Drone pricing models and typical rates</h2>
<p>Most operators combine a base package with add-ons. The figures below are rough ranges seen in the US market at the time of writing. Rates vary by region, equipment, sector and the level of processing, so use them only as a starting point and check what competitors near you charge.</p>
<table><thead><tr><th>Model</th><th>Best for</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Fixed package</td><td>Real estate, small business marketing</td><td>About $150 to $500 per property</td><td>Aerial photo package, 15 edited images</td></tr>
<tr><td>Hourly rate</td><td>Short on-site jobs, events</td><td>About $100 to $300 per hour</td><td>On-site flight time, 2 hrs</td></tr>
<tr><td>Half-day or day rate</td><td>Commercial video, inspections, film work</td><td>Roughly $500 to $2,500+ per day</td><td>Half-day aerial video capture</td></tr>
<tr><td>Per acre or hectare</td><td>Mapping and aerial survey</td><td>Varies widely; often with a minimum job fee</td><td>Orthomosaic capture, 40 acres</td></tr>
<tr><td>Per deliverable</td><td>Processing, models, reports</td><td>Quoted per project</td><td>3D model and volume report, stockpile A</td></tr>
</tbody></table>
<h3>Price the deliverable, not just the flight</h3>
<p>Flight time is often the smallest part of a drone job. Planning, airspace checks, travel, setup, editing and data processing usually take far longer. Clients who see "20 minutes of flying, $450" may push back, while "pre-flight planning, capture, 15 edited images, delivery within 48 hours" explains the value. If you also shoot ground-level stills or video, our <a href="/blog/photography-invoice-template">photography invoice template</a> and <a href="/blog/videographer-invoice-template">videographer invoice template</a> guides cover editing and licensing lines in more detail.</p>

<h2>Licensing, Part 107 and CAA notes</h2>
<p>Paid drone work is regulated in most countries, and clients increasingly ask for proof before they book. A brief, accurate licensing line on your quote and invoice builds trust. Here is a high-level summary; always confirm current rules with the regulator.</p>
<ul>
<li><strong>United States:</strong> commercial flights generally fall under the FAA's Part 107 rules. Pilots need a remote pilot certificate and must complete recurrent training every 24 calendar months to keep using it. Drone registration and Remote ID rules also apply, and some airspace needs authorisation. Check the FAA's drone pages for current details.</li>
<li><strong>United Kingdom:</strong> the CAA regulates by risk category. Operators typically need an Operator ID and a Flyer ID, and flights near people or in complex locations may need the A2 Certificate of Competency or an Operational Authorisation. The CAA has been updating its rules and class marks in 2026, so check the CAA website before quoting.</li>
<li><strong>Elsewhere:</strong> most aviation authorities have their own registration and pilot competency rules. Check locally.</li>
</ul>
<p>Insurance is also worth mentioning. Many commercial clients and venues require proof of liability cover, and in the UK insurance is generally expected for commercial operations. You can add a line in the notes such as "Public liability insurance: certificate available on request". This is general information, not legal advice; check with the regulator or a qualified adviser for your situation.</p>

<h2>Sample drone services invoice walk-through</h2>
<p>Here is an illustrative aerial survey invoice for a construction client. The operator captured a 40-acre site, produced an orthomosaic and a stockpile volume report, and travelled 90 miles round trip, 50 of which fall outside the included travel radius. The client paid a 30% deposit when booking. All figures are examples.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Flight planning and airspace checks, Site 4</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td>Aerial survey capture, 40 acres (incl. ground control)</td><td>40</td><td>$18.00</td><td>$720.00</td></tr>
<tr><td>Orthomosaic processing and GeoTIFF export</td><td>1</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td>Stockpile volume report, 3 piles</td><td>3</td><td>$120.00</td><td>$360.00</td></tr>
<tr><td>Travel beyond 20-mile radius, 50 miles</td><td>50</td><td>$0.70</td><td>$35.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,715.00</strong></td></tr>
<tr><td colspan="3">Deposit received (30% of quoted $1,700)</td><td>-$510.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$1,205.00</strong></td></tr>
</tbody></table>
<p>Here is how to recreate it in the generator:</p>
<ol>
<li>Open the <a href="/invoice-generator/usa">US invoice generator</a> (or the UK preset for British jobs).</li>
<li>Add your logo, business details and an invoice number. Keep one consistent numbering sequence across all jobs.</li>
<li>Enter the client, the PO number and the site name.</li>
<li>Add each service line with quantity and rate.</li>
<li>Set a tax rate only if your state or country taxes these services. The generator applies one rate to the invoice.</li>
<li>Enter the $510 deposit as amount paid.</li>
<li>In notes, list deliverables, file formats, the usage licence and your weather policy. Download the PDF.</li>
</ol>
<p>A clean, technical layout suits drone work. The <a href="/invoice-templates/modern">modern invoice template</a> keeps the line items easy to scan.</p>

<h2>Deposits, weather and cancellations</h2>
<p>Weather is the main risk in drone work. Wind, rain, low cloud or a temporary flight restriction can stop a job on the day. Agree how this is handled before you fly, and write it down:</p>
<ul>
<li><strong>Deposit:</strong> a percentage when booking secures the date. See our guide to <a href="/blog/deposit-invoice">deposit invoices</a>.</li>
<li><strong>Weather or airspace postponement:</strong> usually rescheduled free, with the deposit carried forward.</li>
<li><strong>Client cancellation:</strong> a cancellation fee or forfeited deposit if cancelled late for reasons other than weather. Our article on <a href="/blog/kill-fee">kill fees</a> explains how to word this.</li>
<li><strong>Remobilisation:</strong> if the client is not ready on site, a fee for the extra trip.</li>
</ul>
<p>Put the agreed terms in a short scope document. A <a href="/blog/statement-of-work-template">statement of work template</a> works well for larger survey or inspection projects.</p>

<h2>Expenses and pass-through costs</h2>
<p>Separate your fees from costs you pay on the client's behalf. Typical items include mileage, hotel nights for remote sites, parking, permit fees, ground control point hire and third-party processing. Show them at cost, or at cost plus a stated handling fee, and keep receipts. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> explains the options, and a <a href="/blog/mileage-log-template">mileage log template</a> keeps your travel claims easy to support.</p>

<h2>Drone photography invoice vs aerial survey invoice</h2>
<p>The same drone services invoice template can handle very different jobs, but the line items change with the type of work. A real estate agent buying a photo package wants a short invoice with one or two lines. A civil engineering firm buying survey data wants every phase broken out so it can be charged to the right budget code. The table below shows how the emphasis shifts.</p>
<table><thead><tr><th>Job type</th><th>Typical client</th><th>Main invoice lines</th><th>Notes to include</th></tr></thead><tbody>
<tr><td>Drone photography invoice</td><td>Estate agents, hotels, small businesses</td><td>Photo package, extra edited images, rush delivery</td><td>Number of images, delivery link, usage licence</td></tr>
<tr><td>Aerial video</td><td>Marketing agencies, event organisers, film crews</td><td>Capture day or half-day, editing hours, music licence</td><td>Final video length, formats, revision rounds</td></tr>
<tr><td>Inspection</td><td>Roofers, telecom, energy, insurers</td><td>Site visit, inspection flight, annotated report</td><td>Asset ID, inspection date, report format</td></tr>
<tr><td>Aerial survey invoice</td><td>Construction, mining, agriculture, surveyors</td><td>Capture per acre or hectare, processing, volume or progress report</td><td>Coordinate system, accuracy statement, file types</td></tr>
</tbody></table>
<p>Keep a saved draft for each job type so you are not rebuilding the same lines every time. The generator stores drafts in your browser, so last month's survey invoice can become this month's in a few clicks.</p>

<h2>Recurring site visits and progress capture</h2>
<p>Construction and infrastructure clients often book a drone flight every week or month to track progress. Agree a per-visit price and a minimum number of visits, then invoice either after each flight or once a month for all flights in the period. Monthly invoicing usually suits the client's accounts payable cycle better. List each visit date on its own line, for example "Progress capture, Site 4, 6 Oct 2026", with the same unit price, so the client can tick off each flight against its records. The generator does not send recurring invoices automatically, so duplicate the previous month's draft and update the dates.</p>

<h2>Building equipment and insurance into your rates</h2>
<p>Drone operators carry real overheads: aircraft, batteries, spare propellers, cameras or sensors, processing software subscriptions, insurance, training and regulatory fees. None of those should appear as line items on a client invoice, but your rates must cover them. A simple check is to add up your yearly overheads, estimate how many billable jobs you realistically complete, and divide. If your overhead per job is $120 and your typical package is $250, your margin is thin once travel and editing time are counted. Specialist sensors, such as thermal or multispectral cameras, usually justify a higher rate or a separate equipment line for jobs that need them. Review your pricing at least once a year, as software subscriptions and insurance premiums change, and update your drone services invoice template with the new rates.</p>

<h2>Common drone invoicing mistakes</h2>
<ul>
<li><strong>One-line invoices.</strong> "Drone services, $1,715" invites questions. Itemise capture, processing and delivery.</li>
<li><strong>No usage licence.</strong> Without written terms, clients may assume they own everything outright.</li>
<li><strong>Missing PO or site reference.</strong> Construction and corporate clients often reject invoices that do not match their purchase order.</li>
<li><strong>Undercharging for processing.</strong> Survey processing and reporting take time. Price them as separate lines.</li>
<li><strong>No weather clause.</strong> Disputes after a postponed flight are common when the policy was never written down.</li>
<li><strong>Holding deliverables with no stated terms.</strong> If you release final files on payment, say so in the quote and invoice.</li>
</ul>

<h2>Conclusion</h2>
<p>A good drone services invoice template breaks the job into planning, capture, processing and delivery, references the site and date, applies any deposit, and sets out licensing, usage rights and weather terms in the notes. Whether you send a quick drone photography invoice for a house listing or a detailed aerial survey invoice for a construction firm, the structure stays the same. Build yours in the <a href="/invoice-generator">free invoice generator</a> and download a PDF in minutes.</p>
`,
  },
  {
    slug: "cybersecurity-consultant-invoice-template",
    title: "Cybersecurity Invoice Template for Consultants and Pentests",
    description:
      "A cybersecurity invoice template for consultants: bill penetration tests, audits and retainers clearly, with typical security consultant rates and a sample.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "consulting-invoice-template",
      "it-managed-services-invoice-template",
      "statement-of-work-template",
    ],
    faqs: [
      {
        q: "What should a cybersecurity invoice include?",
        a: "Include your business details, a unique invoice number, the client's legal name and PO number, a reference to the statement of work or engagement letter, the engagement type and dates, the scope in general terms, hours or fixed fees per phase, any retest, expenses, tax where applicable, payment terms and the balance due. Keep findings, IP addresses and credentials off the invoice; they belong in the confidential report.",
      },
      {
        q: "How much do cybersecurity consultants charge?",
        a: "Rates vary by region, specialism and certification. Independent consultants and boutique firms commonly quote somewhere around $100 to $300 or more per hour, with senior specialists and incident response work at the higher end. Small penetration tests may cost a few thousand dollars, while larger engagements reach tens of thousands. Treat these as rough figures and benchmark against your local market.",
      },
      {
        q: "How do you invoice a penetration test?",
        a: "Most penetration testing invoices bill a fixed fee per scope item, such as an external network test, a web application test or an internal test, often split into a deposit at kickoff and a balance on report delivery. Retesting is usually a separate line. Reference the statement of work, the testing window and the report delivery date so the client's finance team can match the invoice to the approved project.",
      },
      {
        q: "Should a cybersecurity consultant charge hourly or fixed fee?",
        a: "Fixed fees suit well-scoped work like penetration tests, vulnerability assessments and policy writing, because clients want a known budget. Hourly or daily billing suits open-ended work such as incident response, advisory calls and remediation support. Many consultants combine both: fixed-fee projects plus a monthly retainer for a set number of advisory hours, with overage billed at an hourly rate.",
      },
      {
        q: "Is it safe to put vulnerability details on an invoice?",
        a: "No. Invoices travel through accounts payable teams, email inboxes and accounting systems that are not designed for sensitive data. Describe the work in general terms, such as External penetration test, 3 public IP ranges, per SOW-0214, and keep findings, hostnames, IP addresses and credentials in the encrypted report delivered to the named security contact.",
      },
      {
        q: "How do I bill an incident response retainer?",
        a: "A common model is a prepaid retainer that buys a block of hours or guarantees a response time, invoiced monthly, quarterly or annually. Hours used during an incident are drawn down from the block, and work beyond it is billed at an agreed rate. Show the retainer period, hours included, hours used and any overage on each invoice so the client can track usage.",
      },
      {
        q: "What payment terms do cybersecurity consultants use?",
        a: "Net 30 is common for business clients, and large enterprises may push for net 45 or longer. Many consultants ask for a deposit before testing starts, especially with new clients, and invoice the balance on report delivery. State the terms in the engagement letter and repeat them on every invoice, along with any late payment policy you are entitled to apply.",
      },
      {
        q: "Do cybersecurity services include sales tax or VAT?",
        a: "In the US, some states tax certain IT or consulting services and many do not, so it depends on where the client is and how the service is classified. In the UK and EU, VAT applies if you are VAT-registered, with special rules for business clients in other countries. Check your local rules and ask a qualified tax adviser before invoicing cross-border work.",
      },
      {
        q: "Can I use a free invoice generator for cybersecurity consulting?",
        a: "Yes. A free invoice generator lets you list phases or hours as line items, add a PO number, apply one tax rate, record a deposit as amount paid and download a professional PDF. It does not send invoices, track time or integrate with ticketing tools, so pair it with your own timesheet and share the PDF through your normal channel.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cybersecurity invoice template should show your business details, the client and PO number, a reference to the statement of work, the engagement type and testing dates, fixed fees or hours per phase, any retest or retainer, expenses, tax where applicable and payment terms. Keep it general: findings, IP addresses and credentials never go on the invoice.</p>

<p>Security work is usually bought by technical teams and paid by finance teams, and those two groups read invoices very differently. The security lead wants to see that the scope matches what was tested. The accounts payable clerk wants a PO number, an approved statement of work and a total that matches the budget. A clear cybersecurity invoice template keeps both happy and gets you paid on time.</p>

<p>This guide covers what to include, common pricing models and security consultant rates, how to invoice a penetration test, retainers and incident response, a worked sample in our free invoice generator, and the mistakes that delay payment.</p>

<h2>What to include on a cybersecurity invoice template</h2>
<ul>
<li><strong>Your business details:</strong> legal name, address, contact details and tax ID where required.</li>
<li><strong>Invoice number and dates:</strong> a unique number, the invoice date and the due date.</li>
<li><strong>Client details:</strong> legal entity name, billing address and the accounts payable contact.</li>
<li><strong>PO number and SOW reference:</strong> enterprises often reject invoices without them. See our guide to <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li><strong>Engagement type:</strong> penetration test, vulnerability assessment, compliance readiness, vCISO, incident response.</li>
<li><strong>Dates:</strong> the testing window or billing period.</li>
<li><strong>Line items:</strong> one per phase or deliverable, with hours or a fixed fee.</li>
<li><strong>Expenses:</strong> travel for on-site testing, hardware, third-party tools billed at cost.</li>
<li><strong>Tax:</strong> where your jurisdiction requires it.</li>
<li><strong>Payment terms:</strong> such as net 30, plus accepted payment methods and bank details.</li>
</ul>
<h3>What to leave off</h3>
<p>Never put findings, vulnerability names, hostnames, internal IP addresses, usernames or passwords on an invoice. Invoices are forwarded, scanned into accounting systems and stored for years. Use neutral wording like "Web application penetration test, customer portal, per SOW-0214" and deliver the details only in the encrypted report.</p>

<h2>Pricing models and security consultant rates</h2>
<p>Security consultant rates depend on specialism, certifications, region and urgency. The figures below are rough ranges commonly seen in the US market at the time of writing. They vary by region and firm size, so treat them as a starting point and benchmark locally.</p>
<table><thead><tr><th>Model</th><th>Common uses</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Advisory, remediation support, ad hoc reviews</td><td>About $100 to $300+ per hour</td><td>Security advisory, 6 hrs</td></tr>
<tr><td>Daily rate</td><td>On-site testing, workshops</td><td>Roughly $800 to $2,500+ per day</td><td>On-site internal test, 3 days</td></tr>
<tr><td>Fixed project fee</td><td>Penetration tests, vulnerability assessments, policy packs</td><td>A few thousand to tens of thousands per project</td><td>External network penetration test</td></tr>
<tr><td>Monthly retainer</td><td>vCISO, managed advisory, IR retainers</td><td>Varies with hours and response commitments</td><td>vCISO retainer, Nov 2026, 16 hrs</td></tr>
<tr><td>Per asset</td><td>Scanning, app testing at scale</td><td>Quoted per IP, app or endpoint</td><td>Vulnerability scan, 120 IPs</td></tr>
</tbody></table>
<p>If you bill by the hour, keep a detailed timesheet; our <a href="/blog/timesheet-template">timesheet template</a> and guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing hourly work</a> show how to present time clearly. For general advisory work, the <a href="/blog/consulting-invoice-template">consulting invoice template</a> guide covers more models.</p>

<h2>How to invoice a penetration test</h2>
<p>A penetration testing invoice should mirror the statement of work. Clients approve a scope and a budget before testing starts, so the invoice should use the same phase names and amounts. A common structure:</p>
<ol>
<li><strong>Kickoff deposit:</strong> a share of the fee, invoiced when the SOW is signed. It secures the testing window and covers scoping time.</li>
<li><strong>Testing and reporting:</strong> the balance invoiced when the final report is delivered.</li>
<li><strong>Retest:</strong> a separate line or invoice once fixes are verified. Some firms include one retest in the price; if so, show it as a zero-cost line so the client knows it is included.</li>
</ol>
<p>Splitting a project into stages like this is a form of milestone billing. Our guide to <a href="/blog/milestone-payments">milestone payments</a> covers how to agree stages and percentages. If the client adds targets during testing, issue a change order rather than quietly expanding the work; see our article on <a href="/blog/scope-creep-change-order">scope creep and change orders</a>.</p>

<h2>Sample cybersecurity invoice walk-through</h2>
<p>Here is an illustrative invoice for a small software company. The SOW covers an external network test and a web application test at fixed fees, with one retest included. The client paid a 40% deposit at kickoff. The consultant also spent 4 hours on a remediation call at an agreed hourly rate. All figures are examples only.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>External network penetration test, per SOW-0214</td><td>1</td><td>$4,500.00</td><td>$4,500.00</td></tr>
<tr><td>Web application penetration test, customer portal, per SOW-0214</td><td>1</td><td>$7,500.00</td><td>$7,500.00</td></tr>
<tr><td>Retest of remediated findings (included)</td><td>1</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Remediation advisory call, 14 Oct 2026</td><td>4</td><td>$200.00</td><td>$800.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$12,800.00</strong></td></tr>
<tr><td colspan="3">Deposit received (40% of $12,000 fixed fees)</td><td>-$4,800.00</td></tr>
<tr><td colspan="3"><strong>Balance due, net 30</strong></td><td><strong>$8,000.00</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the invoice generator and choose your locale preset.</li>
<li>Add your logo and company details. Choose a sober layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a>, which suits enterprise buyers.</li>
<li>Enter the client and their PO number in the PO field.</li>
<li>Add each line with quantity and rate, referencing the SOW number in the description.</li>
<li>Set a tax rate only if your services are taxable where you operate.</li>
<li>Enter the $4,800 deposit as amount paid. The balance due shows $8,000.</li>
<li>Add payment terms and bank details in the notes, then download the PDF and send it through the client's normal channel.</li>
</ol>

<h2>Retainers, vCISO and incident response billing</h2>
<p>Ongoing security work is usually billed on a retainer. The three common types work differently on an invoice:</p>
<ul>
<li><strong>Advisory or vCISO retainer:</strong> a fixed monthly fee for a set number of hours or a defined service. Show the period, hours included and hours used, and bill overage at the agreed rate.</li>
<li><strong>Incident response retainer:</strong> a prepaid block of hours or a fee that guarantees a response time. Show the block balance after each incident.</li>
<li><strong>Managed service:</strong> a recurring fee per user, device or asset. Our <a href="/blog/it-managed-services-invoice-template">IT managed services invoice template</a> covers per-seat billing.</li>
</ul>
<p>For the mechanics of billing in advance and drawing down hours, see our guide to <a href="/blog/retainer-invoice">retainer invoices</a>. Note that the generator does not create recurring invoices automatically, so duplicate last month's draft and update the dates and hours.</p>

<h2>Pricing a penetration test quote that matches the invoice</h2>
<p>Most invoice disputes in security work start at the quote stage. If the proposal says "web application test" without limits, the client may expect every subdomain and API to be covered. Define the scope by countable units, such as the number of IP addresses, applications, user roles or API endpoints, and the number of testing days. Then the penetration testing invoice can repeat those units exactly. If the client later adds two more applications, the change is easy to price and easy to show as an extra line, rather than an argument about what was included.</p>

<h2>Payment terms for security engagements</h2>
<p>Security consultants often work with larger companies that have fixed payment runs. Net 30 is a reasonable default, but some enterprises insist on longer terms. Read our guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 terms</a> before accepting them, and consider these protections:</p>
<ul>
<li>A deposit before testing starts, especially with new clients.</li>
<li>Releasing the final report on payment of the final invoice, if your contract allows it.</li>
<li>A late payment clause in the engagement letter, consistent with local law.</li>
<li>Invoicing on the day the report is delivered, not weeks later.</li>
</ul>
<p>For cross-border clients, tax and VAT rules vary and reverse charge may apply. This is general information, not tax or legal advice; check with a qualified adviser.</p>

<h2>Types of security engagement and how to bill each</h2>
<p>The same cybersecurity invoice template can cover very different services. Matching the billing method to the engagement type makes the invoice easier for the client to approve.</p>
<table><thead><tr><th>Engagement</th><th>Usual billing</th><th>What to show on the invoice</th></tr></thead><tbody>
<tr><td>Penetration test</td><td>Fixed fee, deposit plus balance</td><td>Scope item, testing window, SOW reference, retest</td></tr>
<tr><td>Vulnerability assessment</td><td>Fixed fee or per asset</td><td>Number of assets scanned, report date</td></tr>
<tr><td>Compliance readiness (for example SOC 2 or ISO 27001 preparation)</td><td>Fixed fee per phase or monthly</td><td>Phase name, deliverables such as gap analysis or policy set</td></tr>
<tr><td>vCISO or advisory</td><td>Monthly retainer</td><td>Period, hours included and used, overage</td></tr>
<tr><td>Incident response</td><td>Hourly or retainer drawdown</td><td>Incident reference, dates, hours by role</td></tr>
<tr><td>Security awareness training</td><td>Per session or per seat</td><td>Session date, number of attendees</td></tr>
</tbody></table>
<p>Training and per-seat services are the simplest to invoice: the quantity is the number of sessions or attendees and the rate is fixed. Advisory and incident work need the most supporting detail, because the client is paying for time it did not directly see. A short summary of activities per day, kept in your timesheet rather than on the invoice, answers most questions.</p>
<p>When an engagement mixes models, such as a fixed-fee assessment followed by hourly remediation support, put each on its own line so the fixed and variable parts are easy to separate.</p>

<h2>Compliance and audit readiness work</h2>
<p>A growing share of security consulting is helping smaller companies prepare for audits or answer customer security questionnaires. These projects tend to run for months, so phased billing works well: a gap analysis, then policy and control work, then a readiness review. Invoice each phase on completion, and name the deliverable in the line, for example "Phase 2: information security policy set, 14 policies delivered". Be careful with wording. As a consultant you are usually preparing the client for an audit, not issuing a certification yourself, unless you are an accredited body. Your invoice should describe what you actually delivered.</p>

<h2>Documents that support a security consultant invoice</h2>
<p>Enterprise clients often need several documents in place before an invoice can be paid. Having them ready avoids weeks of delay:</p>
<ul>
<li>A signed master services agreement and a statement of work for each project. Our <a href="/blog/statement-of-work-template">statement of work template</a> is a useful starting point.</li>
<li>A purchase order issued against the SOW.</li>
<li>Vendor onboarding forms, tax forms and bank details verified by the client.</li>
<li>Proof of insurance, such as professional indemnity or cyber liability cover, if the contract requires it.</li>
<li>A delivery confirmation, such as the date the final report was sent to the named contact.</li>
</ul>
<p>Reference the SOW and PO numbers on every invoice, and use the same engagement names across all of these documents and your cybersecurity invoice template.</p>

<h2>Common cybersecurity invoicing mistakes</h2>
<ul>
<li><strong>Sensitive data on the invoice.</strong> Keep findings and system details in the report.</li>
<li><strong>Missing PO or SOW number.</strong> The most common reason enterprise invoices are bounced.</li>
<li><strong>Phase names that do not match the SOW.</strong> Finance teams match line by line.</li>
<li><strong>Unbilled scope changes.</strong> Extra targets added mid-test should go through a change order.</li>
<li><strong>Vague retainer invoices.</strong> Show hours included, used and remaining every month.</li>
<li><strong>Late invoicing.</strong> Waiting weeks after report delivery pushes payment into the next payment run.</li>
</ul>

<h2>Conclusion</h2>
<p>A strong cybersecurity invoice template mirrors the statement of work, references the PO, bills phases or hours clearly, and keeps sensitive details out. Whether you send a penetration testing invoice, a vCISO retainer or an hourly advisory bill, consistency is what gets you paid. Create yours in the <a href="/invoice-generator">free invoice generator</a> and download a professional PDF today.</p>
`,
  },
  {
    slug: "app-developer-invoice-template",
    title: "App Development Invoice Template with Milestone Billing",
    description:
      "An app development invoice template for mobile developers: milestone billing, hourly sprints, app store fees and maintenance, with a worked sample to copy free.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["web-development-invoice-template", "milestone-payments", "scope-creep-change-order"],
    faqs: [
      {
        q: "What should an app development invoice include?",
        a: "Include your business details, a unique invoice number, the client and any PO number, the project name and contract reference, the milestone or sprint being billed with its acceptance date, hours or fixed fees, third-party costs such as developer accounts or paid APIs, any deposit already received, tax where applicable, payment terms and the balance due. Linking each line to a contract milestone speeds approval.",
      },
      {
        q: "How do mobile app developers charge clients?",
        a: "Freelance and agency app developers usually charge a fixed price split into milestones, an hourly or daily rate billed per sprint, or a monthly retainer for maintenance. Fixed price suits well-defined apps, while hourly suits evolving products. Many projects combine a fixed-price build with an hourly or retainer arrangement for changes and support after launch.",
      },
      {
        q: "How much do app developers charge per hour?",
        a: "Rates vary widely by region, experience, platform and whether you hire a freelancer or agency. Freelance mobile developers commonly quote anywhere from around $50 to $150 per hour, and specialist or agency rates can exceed $200. Rates in lower-cost regions can be considerably lower. Use these as rough figures only and benchmark against your own market.",
      },
      {
        q: "What is milestone billing for app development?",
        a: "Milestone billing splits a fixed project price into payments tied to agreed deliverables, such as discovery and design, MVP build, beta, and store launch. Each milestone has acceptance criteria, and you invoice when the client signs it off. It spreads cash flow for the developer and limits risk for the client, because they only pay for work that has been delivered.",
      },
      {
        q: "Who pays for Apple and Google developer accounts?",
        a: "Usually the client, because the app should be published under the client's own developer account so they control it. If you pay a fee on their behalf, bill it as a reimbursable expense at cost with the receipt. Apple and Google set their own fees and policies, so check their current developer program pages before quoting.",
      },
      {
        q: "Should source code be released before final payment?",
        a: "Many developers state in their contract that ownership of the code or the licence to use it transfers on payment in full, while still giving the client access to a staging build for testing. Whatever you agree, write it in the contract and repeat it in the invoice notes. A clear clause avoids disputes when a final milestone is late.",
      },
      {
        q: "How do I invoice for app maintenance after launch?",
        a: "Most developers offer a monthly maintenance plan covering OS updates, bug fixes, dependency upgrades and a small number of support hours. Invoice it as a fixed monthly fee at the start of each period, and bill extra feature work separately at your hourly rate or as a new milestone. Show hours used against the included allowance.",
      },
      {
        q: "Can I use a free invoice generator for app development projects?",
        a: "Yes. List each milestone or sprint as a line item, add the PO or contract reference, apply one tax rate if needed, record deposits as amount paid and download a PDF. The generator does not track time, connect to project management tools, send invoices or recur automatically, so duplicate a previous invoice for monthly maintenance.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An app development invoice template should list your details, the client and PO number, the project and contract reference, the milestone or sprint being billed, fixed fees or hours with rates, third-party costs like developer accounts or APIs, any deposit received, tax where applicable, payment terms and the balance due. Tie every line to a signed-off milestone.</p>

<p>Building an app is a long project with a lot that can go wrong between the first wireframe and the store listing. Requirements shift, app store reviews delay launches, and clients get nervous about paying for work they cannot yet hold in their hand. A clear app development invoice template, tied to a sensible payment schedule, keeps cash flowing while giving the client confidence that each payment buys something real.</p>

<p>This guide covers what a mobile app developer invoice should include, pricing models with typical rates, how to set up milestone billing, third-party costs, a worked example in our free invoice generator, and the mistakes to avoid.</p>

<h2>What to include on an app development invoice template</h2>
<ul>
<li><strong>Your details:</strong> business or trading name, address, email and tax ID if registered.</li>
<li><strong>Invoice number and dates:</strong> a unique number, issue date and due date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you stay consistent.</li>
<li><strong>Client details and PO:</strong> legal name, billing contact and any purchase order number.</li>
<li><strong>Project and contract reference:</strong> app name, platforms (iOS, Android, cross-platform) and the contract or SOW number.</li>
<li><strong>Milestone or sprint:</strong> name, date accepted and a short summary of what was delivered.</li>
<li><strong>Fees:</strong> fixed milestone amounts or hours at your rate.</li>
<li><strong>Third-party costs:</strong> developer accounts, paid APIs, fonts, stock assets or testing devices, at cost.</li>
<li><strong>Deposit or prior payments:</strong> shown as amount paid.</li>
<li><strong>Tax:</strong> sales tax or VAT where applicable.</li>
<li><strong>Payment terms and IP clause:</strong> due date, payment methods and when rights to the code transfer.</li>
</ul>

<h2>Pricing models and typical rates for app developers</h2>
<p>App developers usually use one of four models. The rates below are rough figures commonly quoted for freelance work at the time of writing; they vary by region, platform, experience and whether you work alone or as an agency, so treat them as illustrations.</p>
<table><thead><tr><th>Model</th><th>Best for</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Fixed price with milestones</td><td>Well-defined MVPs and apps</td><td>From a few thousand to six figures per project</td><td>Milestone 2: MVP build, iOS and Android</td></tr>
<tr><td>Hourly</td><td>Evolving products, bug fixing</td><td>About $50 to $150+ per hour for freelancers</td><td>Development, sprint 6, 42 hrs</td></tr>
<tr><td>Daily or sprint rate</td><td>Agile teams, staff augmentation</td><td>Day rates roughly $400 to $1,200+</td><td>Two-week sprint, 1 developer</td></tr>
<tr><td>Monthly retainer</td><td>Maintenance and small enhancements</td><td>Varies with hours and response times</td><td>Maintenance plan, Nov 2026, 10 hrs</td></tr>
</tbody></table>
<p>Many app development projects share billing patterns with websites. If you also build web front ends or admin panels, our <a href="/blog/web-development-invoice-template">web development invoice template</a> guide covers hosting, domains and CMS work.</p>

<h2>Setting up milestone billing</h2>
<p>Milestone billing is the most common structure for fixed-price app projects. You split the total into payments tied to deliverables the client can review. A typical schedule for a cross-platform MVP might look like this:</p>
<table><thead><tr><th>Milestone</th><th>Deliverable</th><th>Share of fee</th></tr></thead><tbody>
<tr><td>Deposit</td><td>Signed contract, project kickoff</td><td>20% to 30%</td></tr>
<tr><td>Discovery and design</td><td>User flows, clickable prototype approved</td><td>15% to 20%</td></tr>
<tr><td>MVP build</td><td>Core features on a test build</td><td>25% to 30%</td></tr>
<tr><td>Beta and QA</td><td>Feature-complete beta, bugs fixed</td><td>15% to 20%</td></tr>
<tr><td>Launch</td><td>Submitted and approved in app stores</td><td>10% to 15%</td></tr>
</tbody></table>
<p>Each milestone needs clear acceptance criteria and a time limit for client review, for example "deemed accepted if no written issues are raised within 5 business days". If a milestone is partly accepted, agree in writing whether you invoice a share now or wait for full sign-off; do not quietly invoice the whole amount. Our full guide to <a href="/blog/milestone-payments">milestone payments</a> covers how to set percentages, and the <a href="/blog/deposit-invoice">deposit invoice</a> guide explains the first payment.</p>
<h3>Handle app store delays fairly</h3>
<p>App store review is outside your control. If the final milestone is "approved in the store", a rejection for a reason unrelated to your code can stall payment. Consider defining launch as "submitted for review with all agreed features", with fixes for review feedback included for a set period.</p>

<h2>Third-party and pass-through costs</h2>
<p>Apps rely on paid services. Decide upfront who pays for each and how it is billed:</p>
<ul>
<li><strong>Developer program accounts:</strong> Apple and Google charge their own fees. The app should usually sit in the client's account, so ideally the client pays directly. Check current fees on their official developer pages.</li>
<li><strong>Backend and hosting:</strong> cloud hosting, databases, push notification services and analytics.</li>
<li><strong>Paid APIs and SDKs:</strong> maps, payments, messaging, AI services.</li>
<li><strong>Assets:</strong> fonts, icons, stock photos and licences.</li>
<li><strong>Test devices:</strong> if bought specifically for the project.</li>
</ul>
<p>Where possible, set up paid services in the client's name with the client's card from day one. That avoids monthly pass-through invoices and makes the handover at the end of the project much simpler, because the client already owns every account. Bill costs you do pay at cost, or with a disclosed handling fee, and keep receipts. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a> explains how to present them. If a service bills by usage, see <a href="/blog/usage-based-billing-invoice">usage-based billing on invoices</a> for presenting variable charges.</p>

<h2>Sample app development invoice walk-through</h2>
<p>Here is an illustrative invoice for milestone 3 of a fixed-price cross-platform app with a total fee of $24,000. The deposit and milestone 2 were invoiced and paid earlier, so this invoice covers milestone 3 only, plus a change request billed hourly and one expense. All figures are examples.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Milestone 3: MVP build (30% of $24,000), accepted 20 Oct 2026, per contract APP-0031</td><td>1</td><td>$7,200.00</td><td>$7,200.00</td></tr>
<tr><td>Change request CR-04: Apple and Google sign-in, approved 9 Oct</td><td>12</td><td>$85.00</td><td>$1,020.00</td></tr>
<tr><td>Map API usage, test environment, Sept (at cost, receipt attached)</td><td>1</td><td>$46.00</td><td>$46.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$8,266.00</strong></td></tr>
</tbody></table>
<p>To build it in the generator:</p>
<ol>
<li>Open the free invoice generator and choose your locale preset and currency.</li>
<li>Add your logo and details. A clean layout like the <a href="/invoice-templates/startup">startup invoice template</a> suits tech clients.</li>
<li>Enter the client, invoice number and PO number.</li>
<li>Add the milestone, change request and expense as separate lines.</li>
<li>Apply one tax rate if your services are taxable. If the expense should not be taxed, you can bill it on a separate invoice instead.</li>
<li>Add terms, payment details and your IP transfer clause in the notes, then download the PDF.</li>
</ol>
<p>If you prefer one running invoice per milestone that shows earlier payments, list the full project value and enter previous payments in the amount paid field so the balance reflects what is left.</p>

<h2>Change requests and scope creep</h2>
<p>Most app projects change along the way. A client sees the beta and asks for social login, an extra screen or a new integration. Each request is reasonable on its own, but together they can wipe out your margin. Protect yourself with a simple process:</p>
<ol>
<li>Write up the request with an estimate of hours or a fixed price.</li>
<li>Get written approval before starting.</li>
<li>Bill it as a separate line with its change request number, as in the example above.</li>
</ol>
<p>Our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a> includes wording you can adapt, and a <a href="/blog/freelance-contract-template">freelance contract template</a> helps set the rules before the project starts.</p>

<h2>Hourly sprint invoices</h2>
<p>If you bill by the hour or by sprint, list the sprint number, dates and total hours, with a short summary of the main tickets completed, such as "Sprint 6, 6 to 17 Oct: offline mode, push notification settings, 14 bug fixes, 42 hrs". Keep the detailed ticket list in your project tool and share an export if the client asks. Consistent sprint invoices let the client compare spend from one cycle to the next.</p>

<h2>Maintenance and support after launch</h2>
<p>Apps need ongoing care: OS updates, dependency upgrades, crash fixes and store policy changes. Offer a maintenance plan as a fixed monthly fee with included hours, and bill extra work separately. Our <a href="/blog/retainer-invoice">retainer invoice</a> guide explains how to bill in advance and show hours used. The generator does not create recurring invoices, so duplicate the previous month's draft and update the period.</p>

<h2>Fixed price vs hourly for app projects</h2>
<p>Choosing the billing model is the biggest decision behind any app development invoice template. Each option has trade-offs for both sides:</p>
<table><thead><tr><th></th><th>Fixed price with milestones</th><th>Hourly or sprint-based</th></tr></thead><tbody>
<tr><td>Client budget</td><td>Known upfront</td><td>Estimated, can grow</td></tr>
<tr><td>Developer risk</td><td>Overruns come out of your margin</td><td>Paid for all time worked</td></tr>
<tr><td>Scope changes</td><td>Need formal change requests</td><td>Absorbed into the next sprint</td></tr>
<tr><td>Invoice frequency</td><td>At each milestone</td><td>Weekly, fortnightly or per sprint</td></tr>
<tr><td>Best for</td><td>Clear specs, MVPs, fixed launch dates</td><td>Evolving products, ongoing teams</td></tr>
</tbody></table>
<p>A worked example shows why the choice matters. Suppose you estimate an MVP at 280 hours and your rate is $85, giving $23,800. If you quote a fixed $24,000 and the project takes 340 hours, your effective rate drops to about $70.59 per hour. Billed hourly, the client would pay $28,900 instead. Many developers add a contingency to fixed quotes for this reason, or bill discovery as a small fixed project before quoting the build.</p>

<h2>Billing international app clients</h2>
<p>App developers often work for clients in other countries. Agree the invoice currency in the contract, and quote in the client's currency if it helps you win the work. The generator supports multiple currencies, so set the currency before adding lines. State who pays transfer fees, include full bank details or the payment platform you use, and keep exchange rate records for your own tax return. Cross-border services can trigger reverse charge VAT or withholding tax in some countries, so check with a qualified adviser before invoicing a new country for the first time.</p>

<h2>Checklist before you send an app invoice</h2>
<ul>
<li>The milestone named on the invoice has been accepted in writing.</li>
<li>The amount matches the percentage or fee in the contract.</li>
<li>Every change request has a reference number and approval date.</li>
<li>Third-party costs have receipts ready to share.</li>
<li>Previous payments are shown so the balance is correct.</li>
<li>The PO number, if any, is in the PO field.</li>
<li>The notes state payment terms, payment methods and the IP transfer clause.</li>
</ul>
<p>Running through this list takes two minutes and prevents most of the back-and-forth that delays payment on a mobile app developer invoice. Save the finished draft as your own app development invoice template for the next milestone.</p>

<h2>Common app development invoicing mistakes</h2>
<ul>
<li><strong>No acceptance criteria.</strong> Without them, clients can delay sign-off and payment indefinitely.</li>
<li><strong>Back-loaded payment schedules.</strong> Leaving 50% until launch exposes you to store delays and disputes.</li>
<li><strong>Unbilled change requests.</strong> Small extras add up. Log and bill each one.</li>
<li><strong>Paying third-party fees from your own account without recording them.</strong> Keep receipts and bill them.</li>
<li><strong>Publishing under your own developer account.</strong> Ownership disputes follow. Use the client's account.</li>
<li><strong>No IP clause.</strong> State when code ownership or licence transfers.</li>
</ul>

<h2>Conclusion</h2>
<p>A solid app development invoice template ties each payment to a signed-off milestone, separates change requests and third-party costs, and states payment and IP terms clearly. That combination keeps clients confident and your cash flow steady from kickoff to launch and beyond. Create your next mobile app developer invoice in the <a href="/invoice-generator">free invoice generator</a> and download it as a PDF in minutes.</p>
`,
  },
  {
    slug: "home-health-care-invoice-template",
    title: "Home Health Care Invoice Template for Caregivers",
    description:
      "A home health care invoice template for caregivers and agencies: hourly and live-in rates, visit logs, mileage and private-pay billing, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "physical-therapy-invoice-template",
      "medical-invoice-template",
      "timesheet-template",
      "mileage-log-template",
    ],
    faqs: [
      {
        q: "What should a home health care invoice include?",
        a: "Include your business or caregiver name and contact details, a unique invoice number, the client and the person responsible for paying, the service address, the billing period, a visit log with dates and hours, the services provided, the hourly or daily rate, mileage or errands if agreed, any deposit or prior payment, payment terms and the balance due. Keep detailed medical information off the invoice.",
      },
      {
        q: "How much do home care providers charge per hour?",
        a: "Rates vary widely by region, care level and whether you use an agency or an independent caregiver. In the US, non-medical home care is often quoted somewhere around $25 to $40 or more per hour, with higher rates for skilled nursing, nights, weekends and holidays. Rates in the UK and elsewhere differ. Check local market surveys and agency rates for your area.",
      },
      {
        q: "Can I bill Medicare or insurance with a simple invoice?",
        a: "Generally no. Medicare, Medicaid and most health insurers require claims on specific forms or electronic formats with diagnosis and procedure codes, provider identifiers and, for Medicare home health, certification by a physician and an agency that meets program requirements. A simple invoice suits private-pay clients. Long-term care insurers may reimburse the client from an itemised invoice, so check the policy.",
      },
      {
        q: "What is the difference between home health care and home care?",
        a: "Home health care usually means skilled medical services at home, such as nursing or therapy, often ordered by a doctor. Home care, or non-medical home care, covers personal care and daily living help like bathing, meals, companionship and errands. The difference matters for licensing, insurance coverage and billing, so describe services accurately on the invoice.",
      },
      {
        q: "How do caregivers invoice families directly?",
        a: "Agree the rate, schedule and payment terms in writing first. Keep a daily log of hours and tasks, then invoice weekly or every two weeks using the log as the basis for each line. Send the invoice to the family member who pays. Be aware that in some countries a caregiver hired directly by a family may legally be their employee rather than a contractor, which changes tax obligations.",
      },
      {
        q: "Is a family caregiver an employee or a contractor?",
        a: "It depends on the facts, such as who controls the schedule and how the work is done. In the US, the IRS explains household employee rules in Publication 926, and a caregiver who meets those tests may be the family's household employee. Agency-placed caregivers are usually employed by the agency. Check with a qualified tax adviser before choosing how to pay or invoice.",
      },
      {
        q: "How should overnight or live-in care be billed?",
        a: "Live-in and overnight care is often billed at a daily or nightly rate rather than hourly, with sleep time and breaks handled according to the agreement and local wage rules. State the rate, what it covers and how disturbed nights are charged. Show each day or night as a line or a quantity so the family can match the invoice to the schedule.",
      },
      {
        q: "Can I use a free invoice generator for home care billing?",
        a: "Yes, for private-pay clients. Add each week's visits or hours as line items, include mileage and reimbursed shopping, record deposits as amount paid and download a PDF. The generator does not create insurance claims, use medical codes, send invoices or track payments, so it suits simple private-pay billing only. Keep your visit logs alongside each PDF.",
      },
      {
        q: "How long should home care invoices be kept?",
        a: "Keep invoices and visit logs for as long as your tax authority and any care regulator require, which is often several years. Care records may have separate retention rules under health and data protection law. Store invoices with only the information needed for billing, and keep clinical notes in the secure care record, with access limited to the people who need it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A home health care invoice template lists the provider, the client and the person paying, the service address, the billing period, a log of visit dates and hours, services provided, the hourly, daily or live-in rate, agreed mileage or reimbursed costs, prior payments, payment terms and the balance due. It suits private-pay billing; insurance claims need separate coded forms.</p>

<p>Families arranging care at home usually juggle several things at once: a parent's health, work, siblings sharing the cost, and sometimes an insurance policy that reimburses part of the bill. A clear invoice makes the money side simple. It shows exactly which hours were worked and what they cost, so the family can pay without having to chase you for details.</p>

<p>This guide is for independent caregivers and small home care agencies billing private-pay clients. It covers what to include, typical rates, visit logs and mileage, a worked example in our <a href="/invoice-generator">free invoice generator</a>, and where a simple invoice stops and insurance billing begins.</p>

<h2>What to include on a home health care invoice template</h2>
<ul>
<li><strong>Provider details:</strong> business or caregiver name, address, phone, email and any licence or registration number your state or country requires.</li>
<li><strong>Invoice number and date:</strong> unique and sequential. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format such as HC-2026-0207.</li>
<li><strong>Client and payer:</strong> the person receiving care and, if different, the family member, trust or attorney who pays.</li>
<li><strong>Service address:</strong> where care was provided.</li>
<li><strong>Billing period:</strong> for example, 13 to 26 October 2026.</li>
<li><strong>Visit log:</strong> dates, start and end times and total hours, or a reference to an attached timesheet.</li>
<li><strong>Services:</strong> general descriptions such as personal care, companionship, meal preparation, medication reminders or skilled nursing visit.</li>
<li><strong>Rates:</strong> standard, weekend, night and holiday rates as agreed.</li>
<li><strong>Mileage and reimbursements:</strong> client errands, groceries bought on their behalf, at cost with receipts.</li>
<li><strong>Payments and balance:</strong> deposit or earlier payments and the amount due.</li>
<li><strong>Payment terms:</strong> due date and accepted payment methods.</li>
</ul>
<h3>Keep medical details off the invoice</h3>
<p>The invoice may be seen by several family members, an accountant or an insurer. Describe services in general terms and keep diagnoses, medication lists and care notes in the care record. Health information is protected by privacy laws in many countries, and in the US, covered providers have HIPAA obligations.</p>

<h2>Home health care vs home care: why it matters for billing</h2>
<p>These terms are often used interchangeably, but they mean different things, and the difference affects who pays and how.</p>
<table><thead><tr><th></th><th>Home health care (skilled)</th><th>Non-medical home care</th></tr></thead><tbody>
<tr><td>Services</td><td>Nursing, wound care, therapy, injections</td><td>Personal care, meals, companionship, errands</td></tr>
<tr><td>Who provides</td><td>Licensed nurses and therapists, often via certified agencies</td><td>Caregivers, aides, companions</td></tr>
<tr><td>Typical payer</td><td>Medicare, Medicaid, private insurance, or private pay</td><td>Mostly private pay; some long-term care insurance or local programs</td></tr>
<tr><td>Billing method</td><td>Coded insurance claims, or invoice for private pay</td><td>Simple invoice to the family</td></tr>
</tbody></table>
<p>Medical coding and insurance claims are outside the scope of a simple invoice. Programs such as Medicare and Medicaid require specific claim forms, codes and provider enrolment, and Medicare home health has its own eligibility and certification rules. If you need to bill insurers, use dedicated billing software or a billing service. For patient-facing invoices from medical practices, see our <a href="/blog/medical-invoice-template">medical invoice template</a> guide.</p>

<h2>Typical home care rates and billing models</h2>
<p>The ranges below are rough figures for the US market at the time of writing. Rates vary by region, by state wage laws, by agency versus independent caregiver, and by the level of care, so use them only as a guide.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Hours worked x rate, often with a minimum visit length</td><td>About $25 to $40+ per hour for non-medical care</td><td>Personal care and companionship, 32 hrs</td></tr>
<tr><td>Premium hours</td><td>Higher rate for weekends, nights or holidays</td><td>Often a set uplift on the standard rate</td><td>Weekend care, 8 hrs at weekend rate</td></tr>
<tr><td>Live-in or 24-hour</td><td>Daily rate, with breaks and sleep per agreement</td><td>Varies widely; often quoted per day</td><td>Live-in care, 7 days</td></tr>
<tr><td>Skilled visit</td><td>Per-visit fee for nursing or therapy</td><td>Higher than non-medical care; varies by service</td><td>Skilled nursing visit, wound care</td></tr>
</tbody></table>
<p>Whatever the model, state the rates in a written care agreement and use the same wording on the invoice. If siblings share the cost, agree in writing who receives the invoice, and consider issuing separate invoices for each payer's share.</p>

<h2>Visit logs, timesheets and mileage</h2>
<p>A visit log is the backbone of caregiver invoicing. Families rarely dispute rates; they dispute hours. Record every visit with the date, arrival and departure times, and a brief task summary, and have the client or family sign off weekly where practical. Our <a href="/blog/timesheet-template">timesheet template</a> works well for this.</p>
<p>If you drive the client to appointments or run errands, agree a mileage rate in advance and log trips with a <a href="/blog/mileage-log-template">mileage log template</a>. Bill groceries and prescriptions bought on the client's behalf at cost with receipts, as separate lines from your hourly fees.</p>

<h2>Sample caregiver invoice walk-through</h2>
<p>Here is an illustrative two-week caregiver invoice for private-pay care. The agreed rates are $32 per hour on weekdays and $38 per hour on weekends, with mileage at an agreed $0.65 per mile and groceries reimbursed at cost. The family paid a $300 deposit when care started, applied to this first invoice. All figures are examples only.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Personal care and companionship, weekdays 13 to 24 Oct (see visit log)</td><td>40</td><td>$32.00</td><td>$1,280.00</td></tr>
<tr><td>Weekend care, 18 to 19 Oct</td><td>8</td><td>$38.00</td><td>$304.00</td></tr>
<tr><td>Mileage, appointments and errands</td><td>46</td><td>$0.65</td><td>$29.90</td></tr>
<tr><td>Groceries purchased for client (receipts attached)</td><td>1</td><td>$84.60</td><td>$84.60</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,698.50</strong></td></tr>
<tr><td colspan="3">Deposit received, 10 Oct 2026</td><td>-$300.00</td></tr>
<tr><td colspan="3"><strong>Balance due within 7 days</strong></td><td><strong>$1,398.50</strong></td></tr>
</tbody></table>
<p>To build this home care billing invoice in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and choose your locale preset.</li>
<li>Add your name or agency name, logo and contact details. A calm layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a> reads well for families.</li>
<li>Enter the payer's name, and the client's name and service address in the description or notes.</li>
<li>Add each line with quantity and rate.</li>
<li>Leave tax at zero unless your services are taxable where you work; personal care services are often exempt, but check local rules.</li>
<li>Enter the $300 deposit as amount paid.</li>
<li>Add the payment terms, the billing period and "visit log attached" in the notes, then download the PDF.</li>
</ol>
<p>When the family pays, send a <a href="/blog/payment-receipt-template">payment receipt</a>. Some long-term care insurance policies reimburse families from itemised invoices and receipts, so consistent paperwork helps them claim.</p>

<h2>Handling missed visits and cancellations</h2>
<p>Agree in advance what happens when a family cancels a visit at short notice, or when the client is in hospital. Many providers charge a cancellation fee, often the full or partial visit cost, when notice is under a set period such as 24 hours, and pause billing during a hospital stay once told. If you charge for a late cancellation, show it as its own line, for example "Late cancellation, 21 Oct, under 24 hours notice", so it is not mistaken for a visit that took place.</p>

<h2>Payment terms and late payments</h2>
<p>Care is ongoing, so short payment cycles work best. Weekly or fortnightly invoicing with payment due within 7 days keeps unpaid hours from building up. A small deposit, or billing a week in advance for regular schedules, also reduces risk. If a family struggles to pay a larger balance, a written <a href="/blog/payment-plan-agreement">payment plan agreement</a> is better than stopping care suddenly. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the common options.</p>

<h2>Employment status and tax</h2>
<p>Independent caregivers should check their status carefully. In the US, a caregiver hired directly by a family may be a household employee rather than a contractor, depending on who controls the work; the IRS explains this in Publication 926. In the UK, self-employed carers must meet HMRC's tests for self-employment, and providers of regulated personal care in England generally need to register with the Care Quality Commission. Other countries have their own rules. This is general information, not legal or tax advice; check with a qualified adviser.</p>

<h2>Agency vs independent caregiver invoices</h2>
<p>The same home health care invoice template works for both agencies and independent caregivers, but the details differ.</p>
<table><thead><tr><th></th><th>Home care agency</th><th>Independent caregiver</th></tr></thead><tbody>
<tr><td>Who issues the invoice</td><td>The agency, under its business name</td><td>The caregiver, under their own or a trading name</td></tr>
<tr><td>Rates</td><td>Usually higher, covering supervision, insurance and backup staff</td><td>Often lower, set directly with the family</td></tr>
<tr><td>Caregiver names on invoice</td><td>Often listed per visit</td><td>Not needed</td></tr>
<tr><td>Licensing reference</td><td>Agency licence or registration number where required</td><td>Any relevant personal certification</td></tr>
<tr><td>Employment status</td><td>Caregivers usually employed by the agency</td><td>Check contractor vs household employee rules</td></tr>
</tbody></table>
<p>Whichever you are, keep your rates, cancellation policy and notice period in a written agreement signed before care starts. Families often arrange care in a hurry after a hospital discharge, and a one-page agreement prevents misunderstandings later about missed visits or short-notice cancellations.</p>
<p>Agencies with several caregivers on one client should list visits by caregiver, so the family can match names to the schedule they saw. Independent caregivers can keep it simpler, with one line per rate type for the period.</p>

<h2>Billing schedules for different care plans</h2>
<p>Match your invoicing rhythm to the care plan. A family with a carer for four hours a day, five days a week, generates around 40 hours a fortnight. At $32 an hour that is $1,280, a manageable fortnightly bill. A live-in arrangement at an illustrative daily rate of $300 produces $2,100 a week, so weekly invoicing, or billing a week in advance, keeps balances under control. Short-term respite care, such as two weeks of cover while a family carer is away, is often best billed with a deposit up front and the balance at the end. Whatever schedule you choose, write it into the care agreement and keep the same invoice day every cycle so families can plan.</p>

<h2>Checklist before sending a caregiver invoice</h2>
<ul>
<li>Hours match the signed visit log for the period.</li>
<li>Weekend, night and holiday hours use the agreed rates.</li>
<li>Mileage and reimbursed purchases have receipts or logs.</li>
<li>The payer's name and address are correct.</li>
<li>No diagnoses or medication details appear on the invoice.</li>
<li>Previous payments and deposits are shown as amount paid.</li>
<li>The due date and payment methods are in the notes.</li>
</ul>
<p>A consistent home health care invoice template, checked against this list, makes each billing cycle routine for you and the family.</p>

<h2>Common home care invoicing mistakes</h2>
<ul>
<li><strong>No visit log.</strong> Hours without dates and times invite disputes.</li>
<li><strong>Medical details on the invoice.</strong> Keep clinical notes in the care record.</li>
<li><strong>Unclear payer.</strong> Name the person or trust responsible for payment.</li>
<li><strong>Mixing reimbursements with fees.</strong> Show groceries and mileage on separate lines.</li>
<li><strong>Trying to bill insurance with a basic invoice.</strong> Insurers need coded claims.</li>
<li><strong>Long gaps between invoices.</strong> Monthly billing for daily care creates large, stressful bills.</li>
</ul>

<h2>Conclusion</h2>
<p>A home health care invoice template works best when it is tied to an accurate visit log, uses the rates from your care agreement, separates reimbursements from fees, and leaves medical detail in the care record. For private-pay families, that is all most need. Create your next caregiver invoice in the <a href="/invoice-generator">free invoice generator</a>, download the PDF and keep a copy with your records.</p>
`,
  },
];
