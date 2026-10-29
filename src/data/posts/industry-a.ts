import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_A: PostDraft[] = [
  {
    slug: "contractor-invoice-template",
    title: "Contractor Invoice Template: Free Guide and Sample for 2026",
    description:
      "Use this free contractor invoice template guide to bill labor, materials, permits and deposits correctly, with a worked example and a checklist for 2026.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "excavation-invoice-template",
      "concrete-invoice-template",
      "construction-invoice-guide",
      "deposit-invoice",
      "independent-contractor-invoice",
    ],
    faqs: [
      {
        q: "What should a contractor invoice include?",
        a: "Your business name, license number and contact details, the client's name and job site address, a unique invoice number, issue and due dates, itemized labor and materials, permit fees, tax where it applies, any deposit already paid, the balance due and how to pay.",
      },
      {
        q: "Should contractors separate labor and materials on an invoice?",
        a: "Yes, in most cases. Separating them makes the invoice easier to approve, and in many US states sales tax applies to materials but not to labor, so you need the split to calculate tax correctly. Check your state's rules for construction contractors.",
      },
      {
        q: "How do I show a deposit on a contractor invoice?",
        a: "List the full job value, then add a line such as 'Less deposit received 12 Sep 2026' as a negative amount, and show the remaining balance as the amount due. Reference the deposit invoice or receipt number so the client can match it.",
      },
      {
        q: "Can I charge a markup on materials?",
        a: "Many contractors do, and it is common to build a markup into the materials price. Whatever you do, make sure it matches your contract or estimate, because clients who were promised materials at cost will dispute an unexplained markup.",
      },
      {
        q: "When should a contractor send an invoice?",
        a: "Send it as soon as the job or billing milestone is complete and approved. For longer projects, invoice at the stages set out in your contract, such as on signing, at rough-in and at completion, rather than waiting for the end.",
      },
      {
        q: "What is the difference between a contractor estimate and an invoice?",
        a: "An estimate is the price you propose before work starts, and an invoice is the bill you send once the work or a milestone is done. An estimate is not a request for payment and can change if the scope changes. Your invoice should reference the estimate number and match it line for line, with approved change orders listed separately so the client can see why the total differs.",
      },
      {
        q: "How much deposit can a contractor legally ask for?",
        a: "It depends on your state. Some states cap down payments on home improvement contracts; California, for example, limits it to $1,000 or 10% of the contract price, whichever is less. Many other states set no cap or treat commercial work differently. Check with your state contractor licensing board before setting a deposit, and write the amount and timing into your contract.",
      },
      {
        q: "How do I show retainage on a contractor invoice?",
        a: "Show the full amount earned for the period, deduct the retainage percentage your contract sets on its own line, and carry a running total of retainage held to date. Retainage of 5% to 10% is common, and several states now cap it, often at 5%, on certain projects. At completion, send a separate retainage release invoice for the accumulated amount, following any conditions in the contract.",
      },
      {
        q: "Will my client send me a 1099 for contract work?",
        a: "Possibly. US businesses that pay an independent contractor for services usually ask for a W-9 and must file Form 1099-NEC once payments reach the federal threshold, which rose from $600 to $2,000 for payments made from 2026. Homeowners paying for work on their own home generally do not issue one. Either way, you must report all your income, so keep every invoice and payment record.",
      },
      {
        q: "What can I do if a client does not pay a contractor invoice?",
        a: "Start with a polite reminder quoting the invoice number and due date, then a firmer follow-up referencing any late-fee terms in your contract. Many states also give contractors mechanic's lien rights against the property, but these usually require preliminary notices and strict filing deadlines that vary by state. Check your state's lien law early in the job, and consider small claims court or an attorney for larger debts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A contractor invoice template is a ready-made layout for billing construction, renovation or repair work. It should show your business and license details, the client and job site, a unique invoice number and due date, separate lines for labor, materials, subcontractors and permits, any tax, deposits already paid, and the balance due. Fill it in, download it as a PDF, and send it as soon as the work or milestone is complete.</p>

<p>This guide covers what belongs on a contractor invoice, how pricing usually works in the trades, how to handle deposits and change orders, and a fully worked example you can copy. You can build the invoice in minutes with our <a href="/invoice-generator">free invoice generator</a>, no sign-up, no watermark. For large multi-month projects with progress billing and retainage, also read our <a href="/blog/construction-invoice-guide">construction invoice guide</a>.</p>

<h2>What a contractor invoice template must include</h2>
<p>Homeowners, property managers and general contractors all pay faster when the invoice answers every question before they ask it. A solid contractor invoice template has these fields:</p>
<ul>
<li><strong>Your business details:</strong> legal business name, address, phone, email and your contractor license number where your state or city requires you to display it.</li>
<li><strong>Client details:</strong> the name of the person or company who signed the contract, plus their billing address.</li>
<li><strong>Job site address:</strong> often different from the billing address, especially for landlords and property managers.</li>
<li><strong>Invoice number:</strong> unique and sequential. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a format such as <code>JOB-2026-118</code>.</li>
<li><strong>Issue date and due date:</strong> a real calendar date, not just "due on receipt". See <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li><strong>Reference numbers:</strong> the estimate or contract number, and the client's <a href="/blog/po-number-on-invoice">PO number</a> if they issued one.</li>
<li><strong>Itemized lines:</strong> labor, materials, equipment rental, subcontractors, disposal and permits on separate lines.</li>
<li><strong>Tax, deposits and balance:</strong> sales tax where it applies, payments already received, and the amount still due.</li>
<li><strong>Payment instructions:</strong> accepted methods, bank or payment link, and any late-fee terms from your contract.</li>
</ul>

<h2>How contractor pricing usually works</h2>
<p>Before you fill in a contractor invoice template, be clear about which pricing model your contract uses, because it changes what the line items look like.</p>
<table><thead><tr><th>Pricing model</th><th>How it works</th><th>How it looks on the invoice</th></tr></thead><tbody>
<tr><td>Fixed price (lump sum)</td><td>One agreed price for a defined scope</td><td>One or a few lines, plus approved change orders</td></tr>
<tr><td>Time and materials</td><td>Hourly labor plus materials at cost or with a markup</td><td>Hours by worker type, then itemized materials</td></tr>
<tr><td>Cost plus</td><td>Actual costs plus an agreed fee or percentage</td><td>Costs listed with receipts, then a separate fee line</td></tr>
<tr><td>Unit pricing</td><td>Price per square foot, linear foot or item</td><td>Quantity in units times the unit rate</td></tr>
<tr><td>Progress billing</td><td>Invoices issued at agreed stages of a larger job</td><td>Percentage of contract completed, less previous billings</td></tr>
</tbody></table>
<p>Most small residential jobs are either fixed price or time and materials. Whichever you use, your invoice should mirror your estimate closely, line for line where possible, so the client can compare the two documents side by side and approve the invoice without a phone call.</p>

<h2>Typical contractor invoice line items</h2>
<h3>Labor</h3>
<p>Show labor by role if rates differ, for example lead carpenter, helper or apprentice. For time-and-materials work, list hours and the hourly rate. For fixed-price work, describe the scope: "Frame and drywall basement partition wall, 18 linear ft."</p>
<h3>Materials</h3>
<p>Itemize major materials (cabinets, flooring, fixtures, lumber packages) and group small consumables into a single "fasteners, adhesives and consumables" line. Keep supplier receipts in case the client asks.</p>
<h3>Subcontractors</h3>
<p>If you bring in a licensed electrician or plumber, show their work as its own line. Our guides to the <a href="/blog/electrician-invoice-template">electrician invoice template</a> and <a href="/blog/plumbing-invoice-template">plumbing invoice template</a> show how those trades bill you, which helps you pass costs through accurately.</p>
<h3>Permits, disposal and equipment</h3>
<p>Permit and inspection fees, dumpster or haul-away charges and equipment rental are easy to forget. List them separately so the client can see they are real costs rather than padding.</p>

<h2>Deposits, change orders and progress payments</h2>
<p>Many contractors ask for a deposit before ordering materials. Deposit limits vary by state for home improvement contracts, so check local rules before setting yours. Issue the deposit as its own invoice (our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how), then show it as a deduction on the final invoice.</p>
<p>Change orders are the most common source of disputes. Get each change approved in writing, give it a number, and invoice it as its own line: "Change order CO-02: upgrade to soft-close drawer slides." On longer jobs, bill in stages tied to clear milestones such as demolition complete, rough-in passed and final inspection.</p>

<h2>Worked example: kitchen remodel invoice</h2>
<p>Here is a sample contractor invoice for a mid-size kitchen remodel billed on time and materials, with a deposit already paid. The 7% sales tax rate is an example only and is applied to materials, which is how many, but not all, states treat contractor sales. Check your own state's rules or use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to verify the figure.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Carpentry labor: cabinet install and trim</td><td>32 hrs</td><td>$75.00</td><td>$2,400.00</td></tr>
<tr><td>Demolition and haul-away (flat rate)</td><td>1</td><td>$850.00</td><td>$850.00</td></tr>
<tr><td>Shaker cabinets, 14 units (materials)</td><td>1</td><td>$6,200.00</td><td>$6,200.00</td></tr>
<tr><td>Quartz countertop, fabricated (materials)</td><td>42 sq ft</td><td>$68.00</td><td>$2,856.00</td></tr>
<tr><td>Electrical subcontractor: 3 new circuits</td><td>1</td><td>$1,350.00</td><td>$1,350.00</td></tr>
<tr><td>Building permit fee</td><td>1</td><td>$275.00</td><td>$275.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$13,931.00</strong></td></tr>
<tr><td colspan="3">Sales tax 7% on materials ($9,056.00)</td><td>$633.92</td></tr>
<tr><td colspan="3"><strong>Invoice total</strong></td><td><strong>$14,564.92</strong></td></tr>
<tr><td colspan="3">Less deposit received (INV JOB-2026-104)</td><td>−$4,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 5 Nov 2026</strong></td><td><strong>$10,564.92</strong></td></tr>
</tbody></table>
<p>Notice that the deposit is referenced by its invoice number, the tax base is spelled out, and the due date is a real date. Those three details alone remove most of the back-and-forth that delays contractor payments.</p>

<h2>How to fill in a contractor invoice template step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator/usa">USA invoice generator</a> (or the general generator if you work elsewhere) and choose a clean layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a>, which suits property managers and commercial clients.</li>
<li>Add your business name, logo, license number and contact details.</li>
<li>Enter the client's billing details and add the job site address in the notes or description.</li>
<li>Set the invoice number, issue date and due date.</li>
<li>Add each labor, material, subcontractor and permit line with its quantity and rate.</li>
<li>Apply tax only to the lines your state taxes, and add a negative line for any deposit received.</li>
<li>Add payment instructions, your late-fee terms and a short thank-you note.</li>
<li>Download the PDF, check it on your phone, and email it with the invoice number in the subject line.</li>
</ol>

<h2>Retainage, lien waivers and paperwork clients expect</h2>
<p>Residential homeowners rarely ask for more than a clear invoice, but commercial clients, general contractors and property managers often need supporting documents before they release payment. Knowing what they expect saves a week of back-and-forth on every billing cycle.</p>
<ul>
<li><strong>Retainage:</strong> on many commercial jobs, the client holds back a percentage of each payment until the project is complete. Show the retained amount on every invoice and track the running total, so the final release invoice is easy to prepare.</li>
<li><strong>Lien waivers:</strong> some clients ask for a conditional or unconditional lien waiver with each payment request. The forms and rules are set by state law, so use the form your state requires and get advice if you are unsure.</li>
<li><strong>Certificates of insurance:</strong> commercial clients may need a current certificate on file before the first invoice is paid.</li>
<li><strong>Photos and inspection sign-offs:</strong> attaching a photo of completed work or the passed inspection card can resolve "is it really done?" questions instantly.</li>
<li><strong>Tax forms:</strong> US businesses that pay you as an independent contractor will usually ask for a W-9 before paying.</li>
</ul>
<p>Put a short line in the invoice notes listing what is attached, for example "Attached: conditional lien waiver, final inspection card". It tells the accounts payable clerk the package is complete and ready to approve.</p>

<h2>Mistakes contractors make on invoices</h2>
<ul>
<li><strong>One vague line for the whole job.</strong> "Kitchen work: $14,500" invites questions. Itemize.</li>
<li><strong>Forgetting approved change orders.</strong> Bill extras on the next invoice, not months later.</li>
<li><strong>Charging tax on the wrong base.</strong> Taxing labor in a state that only taxes materials, or the reverse, causes refunds or audit issues.</li>
<li><strong>No due date or late-fee terms.</strong> If your contract allows <a href="/blog/late-payment-fees">late payment fees</a>, say so on the invoice.</li>
<li><strong>Waiting until the end of a long job.</strong> Stage payments protect your cash flow and reduce your exposure if a client stops paying.</li>
</ul>
<p>If you work as a sole operator for a general contractor rather than for homeowners, your invoice looks more like a freelancer's. See the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> guide.</p>

<p>Specialist trades have their own line items. See our <a href="/blog/roofing-invoice-template">roofing</a> and <a href="/blog/painting-invoice-template">painting</a> invoice guides for worked examples.</p>

<h2>Create your contractor invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, pick the Corporate template or browse all <a href="/invoice-templates">invoice templates</a>, add your labor, materials and deposits, and download a professional contractor invoice as a PDF in a few minutes.</p>
`,
  },
  {
    slug: "photography-invoice-template",
    title: "Photography Invoice Template: Free Guide with Sample Invoice",
    description:
      "A free photography invoice template guide: bill sessions, editing, prints, usage licenses and retainers correctly, with a wedding example and pricing tips.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "model-invoice-template",
      "photography-pricing-guide",
      "drone-services-invoice-template",
      "deposit-invoice",
      "freelance-invoice-template",
      "graphic-design-invoice-template",
    ],
    faqs: [
      {
        q: "What should a photography invoice include?",
        a: "Your business and contact details, the client's details, a unique invoice number, the shoot date and location, itemized services such as coverage hours, editing and prints, any usage license terms, tax where it applies, the retainer already paid, the balance due and payment instructions.",
      },
      {
        q: "Should photographers charge a retainer?",
        a: "Many do, especially for weddings and events, because the date is reserved and other bookings are turned away. Whether the retainer is refundable depends on your contract, so state the terms clearly in the contract and reference them on the invoice.",
      },
      {
        q: "Do photographers charge sales tax?",
        a: "It depends on where you work and what you sell. Some US states tax photography services or the delivery of prints and albums, while others tax only physical products. Check your state's rules or ask an accountant before adding tax.",
      },
      {
        q: "How do I invoice for image licensing?",
        a: "Add a separate line for the license that states the usage (for example web and social media), the territory, the duration and whether it is exclusive. State on the invoice that the license takes effect once the invoice is paid in full.",
      },
      {
        q: "When should a wedding photographer send the final invoice?",
        a: "Most photographers send the balance invoice a few weeks before the wedding date, with payment due before or on the day, so they are not chasing money after the gallery is delivered. Follow whatever schedule your contract sets out.",
      },
      {
        q: "Who owns the copyright to photos after the client pays the invoice?",
        a: "In the US and many other countries, the photographer usually keeps the copyright by default and the client receives a license to use the images. Copyright passes to the client only if a signed written agreement assigns it, or if the work counts as work made for hire, such as photos taken by an employee. State on the invoice exactly what license the client receives once it is paid.",
      },
      {
        q: "Can I charge for travel on a photography invoice?",
        a: "Yes, if your package or contract says so. Many photographers include a set radius and bill mileage, flights, hotels or parking beyond it on separate lines at the agreed rate. Itemizing travel shows the client a real cost rather than a padded package price. Agree the method in advance, such as a per-mile rate from your studio, and keep receipts for any expenses you pass on.",
      },
      {
        q: "How should a second shooter invoice the lead photographer?",
        a: "A second shooter working as an independent contractor usually invoices the lead photographer, not the couple or event client. The invoice should list the event date, hours of coverage at the agreed rate, any culling or editing, travel and the payment terms you agreed. Note any agreed limits on portfolio use, since second-shooter agreements often restrict how you can show the images.",
      },
      {
        q: "Can I charge a late fee on an unpaid photography invoice?",
        a: "Yes, if your contract sets one and it complies with local law. State the fee or interest rate, when it applies and any grace period, then repeat the terms in the invoice notes. Apply it only after the due date, show it as a separate line, and send a reminder first. Many photographers find that holding the final gallery until payment, where the contract allows, works better than fees.",
      },
      {
        q: "Should I send an invoice for a free or portfolio-building shoot?",
        a: "It is a good idea. An invoice showing your normal fee with a 100% discount line records what you delivered, the license you granted and the real value of the work. It reminds the client what the shoot is normally worth if they hire you again, and gives you a clean bookkeeping record. If you traded services rather than working for free, ask an accountant how to report it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A photography invoice template is a billing layout built for photographers that lists the session or coverage fee, editing, prints and albums, usage licenses, travel and any retainer already paid. It should also show the shoot date, your payment terms and the balance due. Fill it in, export it as a PDF and send it to the client according to the schedule in your contract.</p>

<p>This guide explains what to put on a photography invoice, how photographers typically price weddings, portraits and commercial shoots, how to handle retainers and licensing, and a worked wedding example with correct totals. You can create the invoice directly in our <a href="/invoice-generator">free invoice generator</a> and download a branded PDF without signing up.</p>

<h2>What to include on a photography invoice template</h2>
<p>Photography clients range from couples booking a wedding to marketing managers commissioning product shots. Both need the same core information:</p>
<ul>
<li>Your studio or trading name, logo, email, phone and website.</li>
<li>The client's name and billing address. For commercial work, the company's legal name and accounts payable email.</li>
<li>A unique invoice number and the issue date and due date.</li>
<li>The shoot date, location and type of session.</li>
<li>Itemized services and products with quantities and rates.</li>
<li>Usage or license terms for commercial images.</li>
<li>Retainer or deposit already received, and the remaining balance.</li>
<li>Payment methods and your cancellation or late-payment terms.</li>
</ul>
<p>If you are just starting out, our <a href="/blog/freelance-invoice-template">freelance invoice template</a> guide covers the fundamentals that apply to every creative business.</p>

<h2>How photographers price their work</h2>
<p>Pricing in photography is usually a mix of time, deliverables and rights. The main models are:</p>
<table><thead><tr><th>Shoot type</th><th>Common pricing</th><th>Typical invoice lines</th></tr></thead><tbody>
<tr><td>Weddings</td><td>Packages based on hours of coverage</td><td>Coverage, second shooter, engagement session, album, travel</td></tr>
<tr><td>Portraits and families</td><td>Session fee plus products</td><td>Session fee, digital files, prints, wall art</td></tr>
<tr><td>Events</td><td>Hourly or half/full day</td><td>Coverage hours, editing, rush delivery</td></tr>
<tr><td>Commercial and product</td><td>Creative fee plus usage license</td><td>Creative fee, per-image fee, license, props, studio rental, retouching</td></tr>
<tr><td>Real estate</td><td>Per property or per package</td><td>Photo package, drone, floor plan, twilight shots</td></tr>
</tbody></table>
<p>Whatever model you use, the photography invoice should match the package or quote the client accepted. Our article on <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> explains how to move cleanly from one to the other.</p>

<h2>Retainers and payment schedules</h2>
<p>Wedding and event photographers commonly take a booking retainer when the contract is signed, then invoice the balance before the event. The retainer secures the date, and your contract should say whether it is refundable and what happens if the event is cancelled or postponed.</p>
<p>A typical schedule looks like this:</p>
<ol>
<li><strong>Booking:</strong> retainer invoice issued when the contract is signed.</li>
<li><strong>Balance:</strong> final invoice issued a few weeks before the date, due before the event.</li>
<li><strong>Add-ons:</strong> separate invoice after the event for extra prints, albums or overtime.</li>
</ol>
<p>Issue the retainer as its own invoice (see our <a href="/blog/deposit-invoice">deposit invoice</a> guide) and deduct it on the final invoice with a reference to its number. Clients appreciate seeing exactly what they have already paid.</p>

<h2>Invoicing for image licensing and usage rights</h2>
<p>For commercial photography, the license is often worth more than the shoot itself. List it on its own line rather than burying it in the creative fee, and describe it precisely:</p>
<ul>
<li><strong>Media:</strong> for example website, social media, print advertising or packaging.</li>
<li><strong>Territory:</strong> such as United States only or worldwide.</li>
<li><strong>Duration:</strong> for example 12 months from first use, or perpetual.</li>
<li><strong>Exclusivity:</strong> whether you can license the same images to others.</li>
</ul>
<p>Add a note that the license is granted on full payment of the invoice. That single sentence gives you leverage if a client uses the images but delays payment. If the client is overseas, our guide on <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currencies and transfer fees.</p>

<h2>Worked example: wedding photography invoice</h2>
<p>Here is a sample balance invoice for a wedding package. The client paid a $1,200 retainer at booking. Sales tax is shown only on the physical album at an example rate of 6%; your state may tax more, less or nothing, so check before you invoice.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wedding day coverage, 14 Nov 2026</td><td>8 hrs</td><td>$300.00</td><td>$2,400.00</td></tr>
<tr><td>Second shooter</td><td>6 hrs</td><td>$85.00</td><td>$510.00</td></tr>
<tr><td>Engagement session with 40 edited images</td><td>1</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td>Lay-flat album, 10x10 in, 30 pages</td><td>1</td><td>$680.00</td><td>$680.00</td></tr>
<tr><td>Travel beyond 30 miles</td><td>120 mi</td><td>$0.70</td><td>$84.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$4,124.00</strong></td></tr>
<tr><td colspan="3">Sales tax 6% on album ($680.00)</td><td>$40.80</td></tr>
<tr><td colspan="3"><strong>Invoice total</strong></td><td><strong>$4,164.80</strong></td></tr>
<tr><td colspan="3">Less retainer received (INV PH-2026-031)</td><td>−$1,200.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 31 Oct 2026</strong></td><td><strong>$2,964.80</strong></td></tr>
</tbody></table>
<p>The travel line uses the per-mile rate agreed in the contract. Itemizing it, rather than hiding it in the package price, avoids surprises and shows the client exactly what they are paying for.</p>
<p>If the couple orders extra prints or a parent album after the gallery is delivered, send a separate add-on invoice with its own number rather than editing this one. Keeping each invoice fixed once it is issued makes your records cleaner and your year-end bookkeeping simpler, and it means the client always has an unchanged copy of what they agreed to pay.</p>

<h2>Cancellations, rescheduling and overtime</h2>
<p>Photography work is tied to dates, so your invoices need to handle changes cleanly. Your contract should set the rules; the invoice simply applies them.</p>
<ul>
<li><strong>Rescheduling:</strong> if a client moves a session, note the new date on the invoice and any rescheduling fee your contract allows. Keep the original invoice number so the payment history stays together.</li>
<li><strong>Cancellations:</strong> if a booking is cancelled and the retainer is non-refundable under your contract, issue a short invoice or statement confirming that the retainer has been applied to the cancellation fee and nothing further is owed, or what is owed.</li>
<li><strong>Overtime:</strong> list extra coverage at the hourly rate stated in your package, such as "Additional coverage, 1 hr at $300". Bill it within a few days of the event while the client still remembers asking you to stay.</li>
<li><strong>Rush delivery:</strong> if a client wants edited images faster than your standard turnaround, show the rush fee as its own line.</li>
</ul>

<h2>Commercial shoots: what changes on the invoice</h2>
<p>Commercial clients pay through accounts payable, which means process matters more than presentation. Ask for the client's purchase order number, the name of the person approving the invoice, and the email address invoices should go to before the shoot day. Put the PO number near the top of the invoice.</p>
<p>A typical commercial photography invoice separates the creative fee (your time and expertise on the day), production costs (studio rental, props, stylist, hair and makeup, assistants), post-production (retouching per image), and the usage license. Production costs are often passed through at cost or with a small handling fee. Agree which in your estimate. Clients on net 30 terms may also expect a reference to the approved estimate number so they can match the two documents.</p>

<h2>How to create a photography invoice in minutes</h2>
<ol>
<li>Open the invoice generator and pick a template that fits your brand: the <a href="/invoice-templates/elegant">Elegant invoice template</a> suits weddings and portraits, while Minimal works well for commercial clients.</li>
<li>Upload your logo and add your studio details.</li>
<li>Enter the client's details and the shoot date and venue.</li>
<li>Add each service and product as its own line.</li>
<li>Apply tax only where it applies and deduct any retainer.</li>
<li>Add your payment link or bank details. A clickable link usually speeds things up. See <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a>.</li>
<li>Download the PDF and send it with a short, friendly email.</li>
</ol>

<h2>Common photography invoicing mistakes</h2>
<ul>
<li><strong>Delivering the full gallery before the balance is paid.</strong> Tie final delivery to payment in your contract.</li>
<li><strong>Vague license wording.</strong> "Unlimited use" can mean very different things to you and the client.</li>
<li><strong>Not charging for overtime.</strong> If the reception ran an hour long, invoice it promptly on a separate line.</li>
<li><strong>Inconsistent numbering.</strong> A clear <a href="/blog/invoice-numbering-system">invoice numbering system</a> makes tax time far easier.</li>
</ul>
<p>Photographers who also sell retouching or design work may find our <a href="/blog/graphic-design-invoice-template">graphic design invoice template</a> guide useful for structuring revision rounds.</p>

<h2>Create your photography invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Elegant template or browse all <a href="/invoice-templates">invoice templates</a>, list your coverage, products and licenses, deduct your retainer and download a polished photography invoice as a PDF today.</p>
`,
  },
  {
    slug: "cleaning-service-invoice-template",
    title: "Cleaning Invoice Template: Free Guide for Cleaning Businesses",
    description:
      "Get a free cleaning invoice template guide for residential and commercial cleaning: per-visit, hourly and square-foot pricing, add-ons and a worked example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "janitorial-invoice-template",
      "window-cleaning-invoice-template",
      "carpet-cleaning-invoice-template",
      "pest-control-invoice-template",
      "recurring-invoices-guide",
      "landscaping-invoice-template",
      "small-business-invoice-guide",
    ],
    faqs: [
      {
        q: "How do I make an invoice for cleaning services?",
        a: "Add your business and client details, an invoice number and due date, then list each visit or service with its date, quantity and rate. Add any extras or supplies, apply tax if your state taxes cleaning services, and send the invoice as a PDF with payment instructions.",
      },
      {
        q: "How do cleaning businesses charge?",
        a: "The most common methods are a flat rate per visit, an hourly rate per cleaner, or a price per square foot for commercial and move-out cleans. Add-ons such as inside the oven, inside the fridge or interior windows are usually priced individually.",
      },
      {
        q: "Should I invoice cleaning clients weekly or monthly?",
        a: "Residential clients are often billed per visit or weekly, while commercial clients usually prefer one monthly invoice that lists every visit. Choose one schedule per client and stick to it so payments become routine.",
      },
      {
        q: "Do I charge sales tax on cleaning services?",
        a: "Some US states tax janitorial or cleaning services and many do not, and rules can differ for residential and commercial cleaning. Check with your state revenue department or an accountant before adding tax to your invoices.",
      },
      {
        q: "Can I charge a cancellation fee for a cleaning visit?",
        a: "Yes, if your service agreement includes one and the client agreed to it. Show it on the invoice as its own line with the date of the cancelled visit, such as 'Late cancellation, 9 Oct 2026, per service agreement'.",
      },
      {
        q: "How much should I charge for a house cleaning?",
        a: "There is no single standard rate, so build yours from your costs. Work out how long a typical clean takes by home size and condition, multiply by an hourly rate that covers wages, supplies, travel, insurance and profit, then round it into flat prices per visit. Check what local competitors charge, price first and deep cleans higher, and review your rates at least once a year.",
      },
      {
        q: "Should cleaners charge more for the first clean?",
        a: "Many do, because a first or deep clean usually takes much longer than a maintenance visit. You can quote it as a separate one-off price or add a heavy-soil surcharge line, then switch to your regular rate from the second visit. Explain this in the quote so the client is not surprised, and label the invoice line clearly, such as 'Initial deep clean, 3-bed home'.",
      },
      {
        q: "Can I charge a fee if I am locked out of a client's home?",
        a: "Yes, if your service agreement says so. A lockout or no-access fee, often all or part of the visit price, covers the time you reserved and the trip you made. Record the date and time you arrived and any attempts to reach the client, then show the fee on its own invoice line with a reference to the clause in your agreement.",
      },
      {
        q: "Should I give receipts to cleaning clients who pay cash?",
        a: "Yes. A receipt confirms the amount, date and payment method, and protects both you and the client if there is a disagreement later. It also keeps your income records complete for tax purposes, since cash is easy to lose track of. You can mark the invoice as paid with the date and amount received, or issue a separate receipt that references the invoice number.",
      },
      {
        q: "How do I invoice a client who pays for cleaning in advance?",
        a: "Issue an invoice for the prepaid visits, for example four weekly cleans in November, with the service period and planned visit dates listed. Nothing more is billed when each visit happens. If a visit is skipped, apply the credit to the next invoice or refund it according to your agreement. Clear prepaid invoices make it easy for both sides to see what has been used.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cleaning invoice template is a billing layout for house cleaning, janitorial and commercial cleaning businesses. It should list each visit or service with its date, the pricing basis (per visit, per hour or per square foot), any add-ons or supplies, tax where it applies and the total due. Most cleaners send one invoice per visit for homes and one monthly invoice for commercial clients.</p>

<p>Below we cover what to include on a cleaning invoice, the pricing models cleaning businesses use, how to bill recurring clients, and a worked commercial example with correct totals. You can fill in every field and download a PDF using our <a href="/invoice-generator">free invoice generator</a>, which saves your business details in your browser so the next invoice takes even less time.</p>

<h2>What to include on a cleaning invoice template</h2>
<ul>
<li><strong>Your business details:</strong> name, logo, phone, email and, if you have one, your business license or insurance reference. Many commercial clients ask for proof of insurance.</li>
<li><strong>Client details:</strong> the client's name, billing address and the service address if different.</li>
<li><strong>Invoice number and dates:</strong> a unique number, the issue date and a clear due date.</li>
<li><strong>Service period:</strong> for recurring work, the date range covered, such as 1–31 October 2026.</li>
<li><strong>Itemized services:</strong> each visit or a summary line with the number of visits, plus add-ons.</li>
<li><strong>Supplies:</strong> any consumables you provide and bill separately.</li>
<li><strong>Tax:</strong> only if your state or locality taxes cleaning services.</li>
<li><strong>Payment terms:</strong> methods accepted, due date and any late or cancellation fees from your agreement.</li>
</ul>

<h2>How cleaning services are priced</h2>
<p>Your cleaning invoice template should reflect the pricing model in your quote or service agreement. Most cleaning businesses use one of these:</p>
<table><thead><tr><th>Pricing model</th><th>Best for</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Flat rate per visit</td><td>Regular home cleans</td><td>Standard clean, 3-bed home, 4 visits × $140</td></tr>
<tr><td>Hourly per cleaner</td><td>One-off or variable jobs</td><td>2 cleaners × 3.5 hrs × $40</td></tr>
<tr><td>Per square foot</td><td>Offices, move-out and post-construction cleans</td><td>Post-construction clean, 2,400 sq ft × $0.30</td></tr>
<tr><td>Monthly contract</td><td>Commercial janitorial</td><td>Janitorial service, October 2026, fixed monthly fee</td></tr>
<tr><td>Add-on pricing</td><td>Extras on top of the base clean</td><td>Inside oven $35, inside fridge $30, interior windows $5 per pane</td></tr>
</tbody></table>
<p>For hourly work, record start and finish times so you can back up the hours if asked. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> explains how to present time clearly.</p>

<h2>Billing recurring cleaning clients</h2>
<p>Recurring clients are the backbone of most cleaning businesses, and consistent invoicing keeps them paying on time. A few practical rules:</p>
<ul>
<li><strong>Invoice on the same day each cycle.</strong> For example, every Friday for weekly home clients or the first of the month for commercial accounts.</li>
<li><strong>List every visit date.</strong> Commercial clients often reconcile against a sign-in log, so dated lines prevent disputes.</li>
<li><strong>Show skipped visits.</strong> If a visit was cancelled by the client, list it with a zero amount or a cancellation fee per your agreement, so the gap is explained.</li>
<li><strong>Offer automatic payment.</strong> Card on file or direct debit removes the monthly chase.</li>
</ul>
<p>Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> walks through setting up a reliable billing rhythm, and the <a href="/blog/how-to-accept-credit-card-payments">guide to accepting credit card payments</a> covers the costs and options for card-on-file billing.</p>

<h2>Supplies, keys and other extras</h2>
<p>Decide up front whether your rate includes cleaning products and equipment. If the client supplies them, note it on the quote. If you restock items they keep (paper towels, toilet tissue, hand soap, trash liners), bill them on a separate supplies line, ideally at a price agreed in advance.</p>
<p>Other charges cleaners commonly invoice include key or lockbox handling, pet hair surcharges, parking fees in city locations, and heavy-soil surcharges for first cleans. Each should be in your service agreement before it appears on an invoice.</p>
<p>Commercial cleaning contracts also need a plan for price changes. If your costs rise, give clients written notice of the new rate and the date it takes effect, then start using it on the first invoice after that date. Putting a line in the notes such as "New rate of $150 per visit applies from 1 January 2027, as notified on 1 December 2026" avoids surprise and makes the change easy for the client's finance team to approve. The same applies if you add square footage, extra floors or new service days: update the scope on the invoice so it always matches what you actually clean.</p>

<h2>Worked example: monthly office cleaning invoice</h2>
<p>This sample cleaning invoice is for a small office cleaned three evenings a week, with two one-off extras during the month. No sales tax is shown because the example assumes a state that does not tax this service; if yours does, add it using the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Office cleaning, Mon/Wed/Fri evenings, 1–31 Oct 2026</td><td>13 visits</td><td>$145.00</td><td>$1,885.00</td></tr>
<tr><td>Hot-water carpet extraction, 17 Oct 2026</td><td>1,200 sq ft</td><td>$0.35</td><td>$420.00</td></tr>
<tr><td>Interior window cleaning, 24 Oct 2026</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td>Restroom supplies restock (paper, soap, liners)</td><td>1</td><td>$96.50</td><td>$96.50</td></tr>
<tr><td colspan="3"><strong>Total due by 15 Nov 2026</strong></td><td><strong>$2,581.50</strong></td></tr>
</tbody></table>
<p>Check the maths: 13 × $145 = $1,885; 1,200 × $0.35 = $420; adding $180 and $96.50 gives $2,581.50. A client's office manager can approve this invoice in seconds because every line has a date and a clear basis.</p>

<h2>Residential cleaning invoice example</h2>
<p>Home cleaning invoices are shorter, but the same principles apply: dated lines, clear rates and a real due date. Here is a fortnightly house-cleaning client billed at the end of the month.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Standard clean, 3-bed 2-bath home, 8 and 22 Oct 2026</td><td>2 visits</td><td>$140.00</td><td>$280.00</td></tr>
<tr><td>Add-on: inside oven, 22 Oct 2026</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td>Add-on: inside fridge, 22 Oct 2026</td><td>1</td><td>$30.00</td><td>$30.00</td></tr>
<tr><td colspan="3"><strong>Total due on receipt</strong></td><td><strong>$345.00</strong></td></tr>
</tbody></table>
<p>For residential clients, payment on receipt or on the day of service is normal. Many cleaners collect by card or payment app immediately after the visit and send the invoice as a record.</p>

<h2>Move-out, deep and post-construction cleans</h2>
<p>One-off cleans carry more uncertainty than routine visits, so quote and invoice them differently. Quote on square footage or estimated hours, state what is included (inside cabinets, baseboards, appliances, windows), and say how you will bill if the job takes longer than expected. Post-construction cleans in particular can involve fine dust, paint overspray and debris removal that take several passes.</p>
<p>On the invoice, describe the scope precisely, such as "Move-out deep clean, 2-bed apartment, unit 4B, including inside appliances and cabinets". Property managers often forward these invoices to landlords or tenants, so clear wording helps everyone. If you need a deposit before a large one-off clean, take it in advance and deduct it on the final invoice.</p>

<h2>How to create a cleaning invoice step by step</h2>
<ol>
<li>Open the invoice generator and choose a fresh, simple layout: the <a href="/invoice-templates/emerald">Emerald invoice template</a> suits cleaning brands well.</li>
<li>Add your business name, logo and contact details.</li>
<li>Enter the client's billing details and the service address.</li>
<li>Set an invoice number. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a consistent series.</li>
<li>Add the service period, then each visit or visit summary and any extras.</li>
<li>Add tax if it applies, then your payment terms and methods.</li>
<li>Download the PDF and send it the same day the period ends.</li>
</ol>

<h2>Getting cleaning invoices paid on time</h2>
<ul>
<li>Agree payment terms in writing before the first clean. See <a href="/blog/invoice-payment-terms">invoice payment terms explained</a>.</li>
<li>Send a friendly reminder a few days before the due date and again on the day after. Our <a href="/blog/payment-reminder-emails">payment reminder emails</a> give you wording you can reuse.</li>
<li>For one-off residential cleans, ask for payment on completion rather than offering net terms.</li>
<li>Keep a short note of any issue the client raised and how you fixed it, in case the invoice is questioned.</li>
</ul>
<p>Outdoor maintenance businesses use a very similar recurring model. See our <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> guide for a comparison.</p>

<p>Offer exterior work too? The <a href="/blog/pressure-washing-invoice-template">pressure washing invoice template</a> covers per-square-foot pricing and add-ons.</p>

<h2>Create your cleaning invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, pick the Emerald template or browse all <a href="/invoice-templates">invoice templates</a>, add your visits and extras, and download a professional cleaning invoice as a PDF in minutes.</p>
`,
  },
  {
    slug: "consulting-invoice-template",
    title: "Consulting Invoice Template: Free Guide, Example and Tips",
    description:
      "A free consulting invoice template guide for hourly, day-rate, project and retainer work, with expense billing rules and a fully worked consultant example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "speaker-invoice-template",
      "life-coach-invoice-template",
      "retainer-invoice",
      "how-to-invoice-for-hourly-work",
      "milestone-payments",
    ],
    faqs: [
      {
        q: "What should a consulting invoice include?",
        a: "Your name or firm, contact and tax details, the client's legal name and billing address, a unique invoice number, issue and due dates, the client's PO or engagement reference, itemized fees with dates and rates, reimbursable expenses, tax if applicable, the total due and payment instructions.",
      },
      {
        q: "How do consultants bill clients?",
        a: "The most common methods are hourly rates, day rates, fixed project fees often split into milestones, and monthly retainers. Many consultants combine them, for example a fixed fee for a defined deliverable plus hourly billing for extra advisory calls.",
      },
      {
        q: "Should I add expenses to a consulting invoice?",
        a: "Yes, if your engagement letter allows reimbursable expenses. List them separately from fees, describe each one, keep receipts, and follow any client expense policy such as caps on hotel rates or economy-only flights.",
      },
      {
        q: "How often should a consultant send invoices?",
        a: "Monthly is the most common cycle for ongoing engagements, while fixed-fee projects are usually billed at milestones. Retainers are typically invoiced in advance at the start of each month.",
      },
      {
        q: "Do consultants charge sales tax?",
        a: "In many US states professional consulting services are not subject to sales tax, but some states tax certain services. Outside the US, consultants registered for VAT or GST normally charge it. Check the rules where you and your client are based.",
      },
      {
        q: "Should I charge for travel time as a consultant?",
        a: "Agree it in your engagement letter before you travel. Common approaches are billing travel time at your full rate, at a reduced rate such as half, only beyond a set number of hours, or not at all and building it into your day rate. Whichever you choose, show travel time as its own line with dates and the agreed rate, separate from the travel expenses themselves.",
      },
      {
        q: "Can I charge interest on a late consulting invoice?",
        a: "Usually, if your contract allows it. In the US, your engagement letter can set a late fee or interest rate within state legal limits. In the UK, business clients can be charged statutory interest at 8% above the Bank of England base rate plus fixed compensation under late payment legislation, unless the contract sets a substantial alternative remedy. State your late terms on every invoice.",
      },
      {
        q: "Should I invoice in my currency or the client's currency?",
        a: "Either works if you agree it in advance. Billing in your own currency protects you from exchange-rate swings, while billing in the client's currency makes approval easier for them. Show the currency code, such as USD or EUR, next to amounts, say who pays transfer fees, and include correct international bank details. Our free invoice generator lets you pick the currency for each invoice.",
      },
      {
        q: "What should I do if a client disputes hours on my consulting invoice?",
        a: "Respond quickly with your time log for the disputed entries and the engagement terms that apply, such as the agreed rate and billing increments. Ask which entries concern them rather than defending the whole invoice. If you agree an adjustment, issue a credit note referencing the original invoice instead of editing it. Detailed, dated time entries sent with each invoice prevent most of these disputes.",
      },
      {
        q: "How do I invoice a success fee?",
        a: "Invoice it separately once the trigger in your agreement has happened, such as a deal closing or a savings target being confirmed. Describe the trigger event, the date it occurred and how the fee is calculated, for example a stated percentage of confirmed savings, and attach or reference the evidence. Keeping it off your regular monthly invoices helps the client approve it through the right budget.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A consulting invoice template is a professional billing layout for consultants and advisers. It should show your business details, the client's legal name and PO or engagement reference, a unique invoice number and due date, itemized fees (hours, days, milestones or retainer), reimbursable expenses on separate lines, any tax and the total due. Send it on the schedule set in your engagement letter, usually monthly or at each milestone.</p>

<p>This guide covers how consultants structure fees, what a consulting invoice should contain, how to bill expenses without disputes, and a worked example that mixes day rates, hourly calls, a milestone fee and travel. You can produce the finished PDF in our <a href="/invoice-generator">free invoice generator</a> in a few minutes, with no account needed.</p>

<h2>What belongs on a consulting invoice template</h2>
<p>Consulting clients are usually companies with formal accounts payable processes, so the invoice has to pass a checklist before it is paid. Include:</p>
<ul>
<li><strong>Your details:</strong> name or firm name, address, email and tax ID if you have one (EIN, VAT number and so on).</li>
<li><strong>Client details:</strong> the legal entity named in your engagement letter, its billing address and the AP email address.</li>
<li><strong>References:</strong> the engagement or statement-of-work number and the client's <a href="/blog/po-number-on-invoice">PO number</a>. Missing POs are one of the most common reasons consulting invoices are rejected.</li>
<li><strong>Invoice number and dates:</strong> a unique number, the issue date, the service period and a clear due date.</li>
<li><strong>Itemized fees:</strong> what you did, when, and how it was priced.</li>
<li><strong>Expenses:</strong> reimbursables listed separately from professional fees.</li>
<li><strong>Payment details:</strong> bank transfer details or a payment link, accepted currencies and the agreed terms.</li>
</ul>

<h2>How consultants price their work</h2>
<p>Your consulting invoice template should match the fee structure agreed in your proposal. The common models are:</p>
<table><thead><tr><th>Fee model</th><th>How it works</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Billed for actual time worked</td><td>Dated time entries or a summary of hours by activity × rate</td></tr>
<tr><td>Day rate</td><td>Fixed price per full or half day</td><td>Number of days × day rate, with dates</td></tr>
<tr><td>Fixed project fee</td><td>One price for a defined deliverable</td><td>Milestone lines, such as "Phase 2 of 3: analysis report"</td></tr>
<tr><td>Retainer</td><td>Monthly fee for access or a set number of hours</td><td>One retainer line per period, plus any overage</td></tr>
<tr><td>Success or value-based fee</td><td>Fee linked to an outcome</td><td>Base fee plus a separately invoiced success fee once triggered</td></tr>
</tbody></table>
<p>If you are still deciding what to charge, our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through the numbers. For pure time billing, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h2>Billing retainers and milestones</h2>
<h3>Retainers</h3>
<p>A retainer is usually invoiced in advance, for example on 1 November for November's advisory access. State what the retainer covers (such as up to 10 hours of advisory time) and how extra hours are billed. If unused hours do not roll over, say so in the engagement letter. Our <a href="/blog/retainer-invoice">retainer invoice</a> guide covers the wording in detail.</p>
<h3>Milestones</h3>
<p>Fixed-fee projects are typically split into stages, for instance 30% on kickoff, 40% on delivery of the draft report and 30% on final sign-off. Invoice each milestone as soon as it is reached and reference the milestone name from your proposal. Read more about structuring stages in our guide to <a href="/blog/milestone-payments">milestone payments</a>.</p>

<h2>How to bill consulting expenses</h2>
<p>Expenses cause more consulting invoice disputes than fees do. Avoid them with a few habits:</p>
<ol>
<li><strong>Agree the policy first.</strong> Your engagement letter should say which expenses are reimbursable and whether they are billed at cost or with an admin fee.</li>
<li><strong>Follow the client's travel policy.</strong> Many companies cap hotel rates or require economy flights.</li>
<li><strong>List expenses separately.</strong> Never fold them into your fee lines.</li>
<li><strong>Describe each one.</strong> "Return airfare Chicago–Boston, 12–14 Oct 2026" is easy to approve; "Travel" is not.</li>
<li><strong>Keep receipts and attach them if asked.</strong> Some clients require copies with every invoice.</li>
</ol>
<p>Expenses you pay and are reimbursed for still need careful records for your own tax return: keep every receipt, log what each cost related to, and ask an accountant how reimbursements should be treated in your accounts.</p>

<h2>Worked example: monthly consulting invoice</h2>
<p>This sample invoice covers one month of a strategy engagement: a two-day workshop at a day rate, advisory calls billed hourly, the second milestone of a fixed-fee report, and reimbursable travel at cost. No sales tax is applied, which is typical for consulting services in many US states, but check the rules that apply to you.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Strategy workshop facilitation, 13–14 Oct 2026</td><td>2 days</td><td>$1,800.00</td><td>$3,600.00</td></tr>
<tr><td>Advisory calls, October 2026 (log attached)</td><td>6.5 hrs</td><td>$225.00</td><td>$1,462.50</td></tr>
<tr><td>Market analysis report: milestone 2 of 3 (draft delivered)</td><td>1</td><td>$4,000.00</td><td>$4,000.00</td></tr>
<tr><td>Reimbursable: return airfare Chicago–Boston (at cost)</td><td>1</td><td>$412.60</td><td>$412.60</td></tr>
<tr><td>Reimbursable: hotel, 12–14 Oct 2026 (at cost)</td><td>2 nights</td><td>$189.00</td><td>$378.00</td></tr>
<tr><td colspan="3">Professional fees subtotal</td><td>$9,062.50</td></tr>
<tr><td colspan="3">Reimbursable expenses subtotal</td><td>$790.60</td></tr>
<tr><td colspan="3"><strong>Total due by 21 Nov 2026 (Net 30)</strong></td><td><strong>$9,853.10</strong></td></tr>
</tbody></table>
<p>Check the maths: fees are $3,600 + $1,462.50 + $4,000 = $9,062.50; expenses are $412.60 + $378 = $790.60; together $9,853.10. Showing fees and expenses as separate subtotals helps the client code each to the right budget line.</p>

<h2>Time logs and supporting detail</h2>
<p>When you bill by the hour or by the day, the client's project sponsor usually has to justify your invoice to someone else: a finance director, a procurement team or a budget holder. Make that easy by sending supporting detail with the invoice rather than waiting to be asked.</p>
<p>A good time log lists the date, the activity, the hours and, for larger teams, who did the work. Keep entries specific: "Stakeholder interviews, sales leadership (4 sessions)" is useful; "Meetings" is not. Round consistently (for example to the nearest quarter hour) and say so in your engagement letter. If you agreed a cap or budget, show how much of it has been used so far, such as "Hours billed to date: 46 of 60 approved". That one line prevents the most awkward conversation in consulting: discovering at month three that the budget ran out at month two.</p>
<p>For fixed-fee and milestone work, the supporting detail is evidence that the milestone was reached: a short note with the date the draft report was delivered or the workshop was held. Attach it as a separate page or include it in the invoice notes. Either way, the goal is the same: an approver should be able to say yes without picking up the phone.</p>

<h2>How to create a consulting invoice step by step</h2>
<ol>
<li>Choose a restrained, businesslike layout. The <a href="/invoice-templates/corporate">Corporate invoice template</a> and <a href="/invoice-templates/slate">Slate invoice template</a> both suit consulting clients.</li>
<li>Add your firm details, logo and tax ID.</li>
<li>Enter the client's legal name, billing address, PO number and engagement reference.</li>
<li>Set the invoice number, issue date, service period and due date.</li>
<li>Add fee lines with dates and rates, then expense lines.</li>
<li>Add tax only if it applies, then your payment instructions.</li>
<li>Download the PDF and send it to the AP address, copying your project sponsor.</li>
</ol>

<h2>Consulting for clients in other countries</h2>
<p>Cross-border consulting raises currency, tax and banking questions. Agree the invoice currency in advance, state who pays transfer fees, and include full international bank details. In the UK and EU, business-to-business services may fall under reverse-charge rules, which change what you must print on the invoice. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the practicalities, and the <a href="/invoice-generator/uk">UK invoice generator</a> includes GBP and VAT number fields if you consult from the UK.</p>
<p>If you work alone and bill US companies, they will usually ask for a W-9 before paying you. The <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> guide explains what US clients expect from solo consultants.</p>

<h2>Common consulting invoice mistakes</h2>
<ul>
<li><strong>Billing the wrong legal entity.</strong> Large groups often have several companies; use the one in your contract.</li>
<li><strong>Vague descriptions.</strong> "Consulting services, October" makes the sponsor re-justify your fee internally.</li>
<li><strong>Mixing expenses into fees.</strong> It hides real costs and makes approval slower.</li>
<li><strong>Late invoicing.</strong> Invoice on the first working day after the period ends, every month.</li>
<li><strong>No follow-up plan.</strong> Diary a reminder for the due date and use proven <a href="/blog/payment-reminder-emails">payment reminder emails</a> if it passes.</li>
</ul>

<h2>Create your consulting invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Corporate or Slate template, add your fees and expenses, and download a polished consulting invoice as a PDF ready for your client's accounts payable team.</p>
`,
  },
  {
    slug: "graphic-design-invoice-template",
    title: "Graphic Design Invoice Template: Free Guide with Example",
    description:
      "Free graphic design invoice template guide: bill concepts, revision rounds, usage rights, stock assets and deposits, with a branding project worked example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "motion-graphics-invoice-template",
      "graphic-design-pricing",
      "interior-design-invoice-template",
      "freelance-invoice-template",
      "deposit-invoice",
      "freelancer-invoice-guide",
    ],
    faqs: [
      {
        q: "What should a graphic design invoice include?",
        a: "Your name or studio details, the client's details, a unique invoice number, issue and due dates, the project name, itemized deliverables with quantities and rates, any extra revision rounds, stock or font licenses, the deposit already paid, the balance due and payment instructions.",
      },
      {
        q: "How do graphic designers charge for revisions?",
        a: "Most designers include a set number of revision rounds in the project price, such as two, and charge for extra rounds at an hourly rate or a fixed fee per round. State the included rounds in your proposal and list any extras on the invoice.",
      },
      {
        q: "Should a designer ask for a deposit?",
        a: "Yes, a deposit is common practice, often 30% to 50% of the project fee before work starts. It confirms the client is committed and covers your time if the project is cancelled. Deduct it clearly on the final invoice.",
      },
      {
        q: "When do copyright and usage rights transfer to the client?",
        a: "That depends on your contract, but many designers state that rights transfer, or the license takes effect, only once the final invoice is paid in full. Put that condition in both the contract and the invoice notes.",
      },
      {
        q: "Can I charge for stock photos and fonts?",
        a: "Yes. Licensed stock images and fonts bought for the client's project are normally passed through as separate lines, at cost or with a small handling fee as agreed. Make sure the license type allows the client's intended use.",
      },
      {
        q: "How much should a graphic designer charge for a logo?",
        a: "Logo prices vary enormously with experience, market and scope, so price the project rather than copying a number. Estimate the hours for research, concepts, revisions and file preparation, multiply by your target hourly rate, then adjust for the client's size and how widely the logo will be used. Put the scope, number of concepts and included revisions in the quote so the invoice matches it.",
      },
      {
        q: "Do graphic designers charge sales tax on digital files?",
        a: "It depends on your state. Many US states do not tax design services, but some tax digital products or finished artwork, and printed goods are often taxable even when the design work is not. The answer can also change depending on whether you deliver files electronically or on physical media. Check your state revenue department's guidance or ask an accountant before adding tax.",
      },
      {
        q: "How do I invoice a monthly design retainer?",
        a: "Invoice the retainer at the start of each month for the agreed fee, stating the period and what it covers, such as up to 20 hours of design time. List any overage hours from the previous month as a separate line at your agreed rate. Say whether unused hours roll over, and include a short summary of tasks completed so the client can see the value each month.",
      },
      {
        q: "Can I pause a design project if the client stops paying?",
        a: "Yes, if your contract allows it, and a clear pause clause makes this much easier. Tell the client in writing which invoice is overdue, that work will pause from a stated date, and what is needed to restart. Avoid releasing final files while invoices are unpaid. If the project stalls for a long time, your kill fee or termination clause sets out what you can invoice.",
      },
      {
        q: "What payment terms should a graphic designer use?",
        a: "Net 14 or net 30 is common for business clients, while deposits and milestone payments protect you on larger projects. Individuals and small clients are often asked to pay on receipt or before final files are released. Whatever you choose, write the terms in your proposal and show an actual due date on each invoice, not just 'net 30', so there is no doubt when payment is late.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A graphic design invoice template is a billing layout for designers and studios that lists each deliverable (such as logo concepts, brand guidelines or social assets) along with included and extra revision rounds, stock or font licenses, the deposit already paid and the balance due. It should also state when usage rights transfer. Send it at each agreed milestone or when final files are ready for handover.</p>

<p>In this guide you will learn what to put on a graphic design invoice, how designers price projects, how to handle deposits, revisions and rights, and you will see a worked branding example with correct totals. You can build your own in our <a href="/invoice-generator">free invoice generator</a> and download a branded PDF that looks as good as your portfolio.</p>

<h2>What to include on a graphic design invoice template</h2>
<ul>
<li><strong>Your details:</strong> name or studio name, logo, email, website or portfolio link, and any tax ID.</li>
<li><strong>Client details:</strong> company name, contact person, billing address and AP email if they have one.</li>
<li><strong>Invoice number and dates:</strong> unique number, issue date and due date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a tidy format.</li>
<li><strong>Project name and reference:</strong> for example "Brand identity refresh, proposal P-2026-14".</li>
<li><strong>Deliverables:</strong> each item with a description your client will recognise.</li>
<li><strong>Revisions:</strong> included rounds noted, and extra rounds billed as separate lines.</li>
<li><strong>Pass-through costs:</strong> stock images, fonts, printing or hosting bought for the project.</li>
<li><strong>Deposit and balance:</strong> what has been paid and what remains.</li>
<li><strong>Rights statement:</strong> when the license or copyright transfer takes effect.</li>
</ul>

<h2>How graphic designers price projects</h2>
<p>Design pricing usually falls into a few models, and many designers mix them:</p>
<table><thead><tr><th>Model</th><th>Works well for</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Project or package fee</td><td>Logos, brand identities, websites</td><td>Logo design: 3 concepts, 2 revision rounds</td></tr>
<tr><td>Per-deliverable rate</td><td>Social graphics, banners, presentation slides</td><td>Social media templates × 15 at $40</td></tr>
<tr><td>Hourly rate</td><td>Ongoing production work, small edits, unclear scope</td><td>Layout updates, 4.5 hrs at $85</td></tr>
<tr><td>Monthly retainer</td><td>In-house-style support for marketing teams</td><td>Design retainer, November 2026, up to 20 hrs</td></tr>
</tbody></table>
<p>Whichever model you choose, make sure your rate covers the hidden time in design work: client calls, file preparation, exporting dozens of formats and sizes, and organizing handover folders. Many designers build that time into package prices rather than billing it line by line, which keeps invoices clean while still paying you for the real work involved.</p>
<p>Project pricing rewards efficiency and is easiest for clients to budget. Hourly pricing protects you when the scope is fuzzy. Whatever you choose, describe deliverables precisely: "Brand style guide, 12 pages, PDF and editable source" is far easier to approve than "branding".</p>

<h2>Deposits and payment schedules for design work</h2>
<p>Designers commonly take a deposit before starting, often 30% to 50% of the project fee. Larger projects may be split into three stages: deposit on signing, a payment when concepts are approved, and the balance on final file delivery. Issue the deposit as a separate invoice (see our <a href="/blog/deposit-invoice">deposit invoice</a> guide) and subtract it on the final invoice, quoting the deposit invoice number.</p>
<p>For multi-month projects, tie each payment to a visible milestone rather than a calendar date. Our <a href="/blog/milestone-payments">milestone payments</a> article shows how to set this up in a proposal.</p>

<h2>Revisions, rush fees and kill fees</h2>
<h3>Revision rounds</h3>
<p>Define a "round" in your proposal: for example, one consolidated set of feedback from the client, answered by one updated version. When a client asks for more rounds than included, confirm the cost in writing before you start, then list it on the invoice: "Additional revision round × 2 at $150".</p>
<h3>Rush fees</h3>
<p>If a client needs work faster than your standard turnaround, a rush fee (often a percentage surcharge) is reasonable. Show it as its own line so the client sees exactly what speed costs.</p>
<h3>Kill fees</h3>
<p>If a client cancels mid-project, a kill fee in your contract lets you invoice for work done to date. Bill it with a description of what was completed and reference the contract clause.</p>

<h2>Worked example: brand identity invoice</h2>
<p>The client accepted a quote of $4,550 for discovery, logo, style guide and social pack, and paid a 50% deposit of $2,275. During the project they requested two extra revision rounds and three stock images. Design services carry no sales tax in this example; check your own state's rules, as some states tax certain digital or printed deliverables.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Brand discovery workshop</td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
<tr><td>Logo design: 3 concepts, 2 revision rounds included</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Additional revision round (approved 3 Oct 2026)</td><td>2</td><td>$150.00</td><td>$300.00</td></tr>
<tr><td>Brand style guide, 12 pages</td><td>1</td><td>$950.00</td><td>$950.00</td></tr>
<tr><td>Social media asset pack</td><td>15</td><td>$40.00</td><td>$600.00</td></tr>
<tr><td>Stock image license, standard (pass-through)</td><td>3</td><td>$29.00</td><td>$87.00</td></tr>
<tr><td colspan="3"><strong>Project total</strong></td><td><strong>$4,937.00</strong></td></tr>
<tr><td colspan="3">Less 50% deposit received (INV GD-2026-021)</td><td>−$2,275.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 6 Nov 2026</strong></td><td><strong>$2,662.00</strong></td></tr>
</tbody></table>
<p>The deposit was 50% of the original $4,550 quote, so the extras ($300 + $87 = $387) fall entirely into the balance: $2,275 + $387 = $2,662. Showing that clearly avoids the "why is the balance higher than half?" email.</p>

<h2>How to create a graphic design invoice</h2>
<ol>
<li>Pick a template that reflects your style. The <a href="/invoice-templates/creative">Creative invoice template</a> and <a href="/invoice-templates/agency">Agency invoice template</a> are built for design work; <a href="/invoice-templates/mono">Mono</a> suits minimalist studios.</li>
<li>Upload your logo and add your contact and portfolio details.</li>
<li>Enter the client's details and the project reference.</li>
<li>Add each deliverable, extra revision round and pass-through cost.</li>
<li>Add a negative line for the deposit received.</li>
<li>In the notes, state when rights transfer and how to pay.</li>
<li>Download the PDF and send it with the final file handover email, or hold the final files until payment, if your contract says so.</li>
</ol>
<p>Our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> explain how to keep a branded invoice readable for finance teams.</p>

<h2>Pass-through costs: stock, fonts and printing</h2>
<p>Design projects often involve buying things on the client's behalf. Treat each purchase as a pass-through cost with its own line, and decide in your proposal whether you bill at cost or add a small handling fee to cover your time sourcing and managing it.</p>
<ul>
<li><strong>Stock images and illustrations:</strong> note the license type (standard or extended) and the number of images. If the client needs the image for packaging or merchandise, a standard license may not cover it.</li>
<li><strong>Fonts:</strong> desktop font licenses are usually bought in the name of the end user. Some designers ask the client to buy the font directly to avoid license confusion; if you buy it, invoice it and tell the client whose name it is registered to.</li>
<li><strong>Printing:</strong> for business cards, brochures or signage, show print costs separately from design time. Printed goods may be subject to sales tax in many states even when design services are not, so check before you invoice.</li>
<li><strong>Software or hosting:</strong> if you set up a website theme or plugin license for the client, list it with the renewal date so they know it will need renewing.</li>
</ul>
<p>Keeping these costs visible protects your margin. A designer who silently absorbs $200 of stock images on a $2,000 project has given away 10% of the fee without the client ever knowing.</p>

<h2>Usage rights and file handover</h2>
<p>Clients often assume they own everything once the work is delivered. Your contract decides what they actually receive: full copyright assignment, an exclusive license, or a limited license for named uses. Make the invoice consistent with it by adding a line in the notes such as "On payment in full, client receives full ownership of the final logo files. Unused concepts remain the property of the designer."</p>
<p>Many designers deliver low-resolution or watermarked previews for approval and release final source files once the invoice is paid. That is common practice and fair to both sides, provided it is stated in your agreement up front. If you need help with the contract side, see our <a href="/blog/freelance-contract-template">freelance contract template</a> overview.</p>

<h2>Create your graphic design invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Creative or Agency template, list your deliverables and extras, deduct your deposit and download a professional graphic design invoice in minutes. You can also browse all <a href="/invoice-templates">invoice templates</a> to find one that matches your brand. For general freelance billing advice, read <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a>.</p>
`,
  },
  {
    slug: "plumbing-invoice-template",
    title: "Plumbing Invoice Template: Free Guide for Plumbers (2026)",
    description:
      "Free plumbing invoice template guide for plumbers: service call fees, flat-rate vs hourly pricing, parts, permits and emergency rates, plus a worked example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "septic-pumping-invoice-template",
      "hvac-invoice-template",
      "electrician-invoice-template",
      "contractor-invoice-template",
    ],
    faqs: [
      {
        q: "What should be on a plumbing invoice?",
        a: "Your business name, plumbing license number where required, contact details, the customer's name and service address, a unique invoice number and date, a description of the problem and work done, itemized labor, parts and fees, tax where it applies, the total, payment terms and any warranty.",
      },
      {
        q: "Do plumbers charge a service call fee?",
        a: "Many plumbers charge a service call or trip fee to cover travel and diagnosis. Some waive or credit it if the customer goes ahead with the repair. Whatever your policy, tell the customer before the visit and show the fee on its own line.",
      },
      {
        q: "Is flat-rate or hourly pricing better for plumbing?",
        a: "Flat-rate pricing gives customers a fixed price per task before work starts and is popular for common repairs, while hourly pricing suits diagnostic work and jobs with unknowns. Many plumbers use flat rates for standard jobs and hourly billing for everything else.",
      },
      {
        q: "Do I charge sales tax on plumbing parts?",
        a: "In many US states, parts and materials are taxable while labor on repairs may be treated differently, but the rules vary widely and can differ between repairs and new construction. Check your state's guidance or ask an accountant.",
      },
      {
        q: "Should I include a warranty on a plumbing invoice?",
        a: "It is good practice to state your workmanship warranty and note that manufacturer warranties apply to parts. Include the warranty period and any conditions, so the customer has it in writing on the same document as the work performed.",
      },
      {
        q: "How much should a plumber charge per hour?",
        a: "Rates vary widely by region, license level and whether the call is routine or an emergency, so there is no reliable national figure. To set yours, add up wages, vehicle, insurance, tools, licensing and overhead, divide by the hours you can realistically bill in a year, and add your profit margin. Compare with local competitors and set a higher rate for nights, weekends and holidays.",
      },
      {
        q: "Can a plumber charge for a call-out if nothing was fixed?",
        a: "Yes, if the customer agreed to a service call or diagnostic fee before the visit. That fee pays for travel and the time spent diagnosing the problem, even if the customer decides not to go ahead or the job needs a specialist. Explain the fee when booking, show it as its own invoice line and describe what you found, so the customer sees what they paid for.",
      },
      {
        q: "Should a plumbing invoice include photos?",
        a: "It is not required, but photos are very useful. A picture of the failed part, the leak or the finished installation helps homeowners who were not present, landlords approving tenant call-outs and insurers handling water damage claims. Attach them to the email with the PDF invoice or note that photos are available, and keep copies in the job file in case the work is questioned later.",
      },
      {
        q: "What should I write on a plumbing invoice for an insurance claim?",
        a: "Give a clear, factual account: the date of the call, the cause you found, such as a burst supply line, its location, the work done and the parts used. Keep emergency work to stop the damage separate from permanent repairs, because insurers often assess them differently. Avoid comments about coverage. The homeowner deals with the insurer, but a precise invoice and photos make their claim easier.",
      },
      {
        q: "Should I bill the tenant or the landlord for a plumbing repair?",
        a: "Bill whoever booked the job and agreed to pay for it. For rental properties that is usually the landlord or property manager, even if the tenant let you in, unless the tenant arranged and agreed to pay for the work. Confirm the bill-to party before you start, put the service address and unit number on the invoice, and quote the work order number if the manager issued one.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A plumbing invoice template is a billing layout for plumbers that records the service call fee, a description of the problem and fix, labor time or flat-rate task prices, parts used, permit fees, any emergency surcharge, tax where it applies and the total due. Most residential plumbing invoices are issued and paid on the day of the job, so the template should be quick to complete on site.</p>

<p>This guide explains what to include on a plumbing invoice, how plumbers price service calls and installations, how to handle parts, permits and after-hours work, and walks through a water heater replacement invoice with correct totals. You can create and send one from your phone using our <a href="/invoice-generator">free invoice generator</a> before you leave the driveway.</p>

<h2>What to include on a plumbing invoice template</h2>
<ul>
<li><strong>Business details:</strong> company name, logo, phone, email and your plumbing license number where your state or city requires it on paperwork.</li>
<li><strong>Customer and site:</strong> customer name, billing address and the service address if different (common for landlords).</li>
<li><strong>Invoice number and date:</strong> plus the job or work order number.</li>
<li><strong>Problem and diagnosis:</strong> a short description, for example "Water heater leaking from tank base; tank failure confirmed."</li>
<li><strong>Work performed:</strong> what you did, in plain language.</li>
<li><strong>Labor:</strong> hours and rate, or flat-rate task prices.</li>
<li><strong>Parts:</strong> each significant part with quantity and price, and small consumables grouped.</li>
<li><strong>Fees:</strong> service call, permit, disposal and any emergency surcharge.</li>
<li><strong>Tax, total and payment:</strong> tax where it applies, total due, payment methods and terms.</li>
<li><strong>Warranty:</strong> your workmanship warranty and a note on manufacturer warranties.</li>
</ul>

<h2>How plumbers price their work</h2>
<table><thead><tr><th>Pricing method</th><th>How it works</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Service call fee</td><td>Fixed fee to attend and diagnose</td><td>Every visit; sometimes credited against the repair</td></tr>
<tr><td>Hourly labor</td><td>Rate per hour, often with a minimum and then billed in increments</td><td>Diagnostics, leaks behind walls, older homes with unknowns</td></tr>
<tr><td>Flat-rate pricing</td><td>Fixed price per task from a price book</td><td>Faucet replacement, toilet rebuild, drain clearing</td></tr>
<tr><td>Installation quote</td><td>Fixed price for equipment plus install</td><td>Water heaters, repiping, fixture packages</td></tr>
<tr><td>Emergency or after-hours rate</td><td>Higher rate or surcharge outside normal hours</td><td>Nights, weekends, holidays, burst pipes</td></tr>
</tbody></table>
<p>Flat-rate pricing tends to reduce arguments because the customer agrees the price before you start. Hourly billing is fairer when you cannot see the problem yet. Whichever you use, your plumbing invoice should match what you told the customer. Our guide on <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> explains how to move from a quoted price to the final bill.</p>

<h2>Parts, materials and markup</h2>
<p>Parts are usually the largest variable on a plumbing invoice. List major parts individually (a water heater, a pressure-reducing valve, a toilet) and group fittings, solder, tape and sealant into one consumables line. Most plumbing businesses price parts above their supply-house cost to cover sourcing, stocking, returns and warranty handling. That is normal; just be consistent and make sure it matches what you quoted.</p>
<p>If a customer supplies their own fixture or part, note "Customer-supplied part: labor only" on the invoice. It makes clear that your workmanship warranty covers the installation but not the product itself, which avoids an awkward call if a cheap faucet cartridge fails a few months later.</p>
<p>Sales tax on parts and labor varies a lot by state, and rules for repair work can differ from new construction. Show tax as its own line on the right base, and use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the figure. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> explains the general principles.</p>

<h2>Permits, inspections and emergency calls</h2>
<p>Water heater replacements, gas line work, repiping and sewer line repairs often need a permit. List the permit fee as a separate line so the customer sees it is a pass-through cost, and note the permit number in the description where practical. If an inspection visit is needed, say whether it is included or billed separately.</p>
<p>For emergency calls, state the after-hours rate or surcharge before you dispatch, then show it clearly: "After-hours labor, Sat 18 Oct 2026, 1.5 hrs at $187.50 (1.5× standard rate)". Customers in an emergency remember what they were told on the phone, and an invoice that matches it gets paid without complaint.</p>

<h2>Worked example: water heater replacement invoice</h2>
<p>This sample plumbing invoice replaces a failed 50-gallon gas water heater. The 8% tax on parts is an example rate only; your state may tax a different base or rate.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Service call and diagnosis</td><td>1</td><td>$89.00</td><td>$89.00</td></tr>
<tr><td>50-gal gas water heater, 6-yr manufacturer warranty</td><td>1</td><td>$1,150.00</td><td>$1,150.00</td></tr>
<tr><td>Install kit: flex connectors, gas valve, expansion tank</td><td>1</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td>Labor: licensed plumber, remove and install</td><td>3.5 hrs</td><td>$125.00</td><td>$437.50</td></tr>
<tr><td>Old unit removal and disposal</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Plumbing permit fee</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$2,056.50</strong></td></tr>
<tr><td colspan="3">Sales tax 8% on parts ($1,335.00)</td><td>$106.80</td></tr>
<tr><td colspan="3"><strong>Total due on completion</strong></td><td><strong>$2,163.30</strong></td></tr>
</tbody></table>
<p>Check the maths: 3.5 × $125 = $437.50; the lines add up to $2,056.50; tax is 8% of $1,150 + $185 = $1,335, which is $106.80; the total is $2,163.30. Add a note such as "1-year workmanship warranty; manufacturer warranty registered to customer" to finish the invoice.</p>

<h2>How to fill in a plumbing invoice on the job</h2>
<ol>
<li>Open the generator on your phone and choose a clear layout: the <a href="/invoice-templates/blue">Blue invoice template</a> is easy to read on small screens.</li>
<li>Your business details are saved in your browser from last time; check them.</li>
<li>Add the customer and service address, and set the invoice number using your <a href="/blog/invoice-numbering-system">invoice numbering system</a>.</li>
<li>Describe the problem and the fix in one or two sentences.</li>
<li>Add the service call, labor, parts, permit and disposal lines.</li>
<li>Apply tax to the correct base and add your warranty note.</li>
<li>Download the PDF, email or text it to the customer, and take payment before you leave.</li>
</ol>
<p>Our guide on <a href="/blog/how-to-make-an-invoice-on-your-phone">how to make an invoice on your phone</a> has more tips for invoicing from the van.</p>

<h2>Writing job descriptions customers trust</h2>
<p>The description on a plumbing invoice does more work than most plumbers realize. A homeowner who was not at home during the repair, a <a href="/blog/rent-invoice-template">landlord</a> reviewing a tenant's call-out, or an insurer looking at water damage will all judge the invoice by how clearly it explains what happened. A strong description has three parts:</p>
<ol>
<li><strong>What you found:</strong> "Pinhole leak in 3/4 in copper supply line above basement ceiling, approx. 2 ft from water heater."</li>
<li><strong>What you did:</strong> "Cut out damaged section, replaced with 18 in of new copper and two couplings, pressure tested."</li>
<li><strong>What you recommend:</strong> "Remaining copper shows corrosion; recommend repiping quote."</li>
</ol>
<p>That last point matters. Recording your recommendation on the invoice protects you if the same pipe fails next month and shows the customer you are looking out for them, which is how a one-off service call turns into a larger job. If the customer declines recommended work, note that too, for example "Customer declined replacement of corroded shut-off valve at this time."</p>
<p>For property managers and landlords, also note the tenant's name or unit number and the time on site. Many management companies cross-check contractor invoices against tenant requests, and missing details are the main reason these invoices sit unpaid.</p>

<h2>Getting paid for plumbing work</h2>
<ul>
<li><strong>Collect on completion for homeowners.</strong> Card, payment link or check on the day is standard for residential service work.</li>
<li><strong>Use net terms for commercial and property management accounts</strong> only once they are approved, and quote their work order number on every invoice.</li>
<li><strong>Take a deposit on big installs.</strong> For repiping or a tankless upgrade, a deposit covers equipment you order in advance.</li>
<li><strong>Chase promptly.</strong> If an invoice is unpaid, a polite reminder the day after the due date works better than waiting weeks. See <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
</ul>
<p>Plumbers who also work on heating systems can compare billing practices in our <a href="/blog/hvac-invoice-template">HVAC invoice template</a> guide, and those working as subcontractors on renovations should read the <a href="/blog/contractor-invoice-template">contractor invoice template</a> guide.</p>

<h2>Create your plumbing invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Blue template or browse all <a href="/invoice-templates">invoice templates</a>, add your service call, labor and parts, and download a professional plumbing invoice in minutes.</p>
`,
  },
  {
    slug: "electrician-invoice-template",
    title: "Electrician Invoice Template: Free Electrical Invoice Guide",
    description:
      "Free electrician invoice template guide: bill electrical labor, materials, permits and inspections correctly, with a panel upgrade example and pricing tips.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "ev-charger-installation-invoice-template",
      "solar-installation-invoice-template",
      "contractor-invoice-template",
      "plumbing-invoice-template",
      "hvac-invoice-template",
    ],
    faqs: [
      {
        q: "What should an electrician invoice include?",
        a: "Your business name, electrical contractor license number where required, contact details, the customer's name and job address, a unique invoice number and date, a description of the work, labor by worker type, itemized materials, permit and inspection fees, tax where it applies, deposits paid, the balance and payment terms.",
      },
      {
        q: "How do electricians charge for their work?",
        a: "Electricians typically use hourly labor rates (often different for master, journeyman and apprentice electricians), flat-rate pricing for common tasks such as installing an outlet or fixture, and fixed quotes for larger jobs like panel upgrades or rewiring. Many add a service call fee for small jobs.",
      },
      {
        q: "Do electricians need to put their license number on invoices?",
        a: "Many states and cities require licensed electrical contractors to show their license number on contracts, advertising or invoices. The exact rule depends on where you work, so check with your state licensing board. Including it is good practice either way.",
      },
      {
        q: "Should I charge for the electrical permit separately?",
        a: "It is common to show permit and inspection fees as their own line, so the customer can see they are a pass-through cost set by the local authority. Make sure your quote said whether the permit was included or extra.",
      },
      {
        q: "Can I ask for a deposit on electrical work?",
        a: "Yes, deposits are common on larger jobs where you buy materials in advance, such as panels, EV chargers or generators. Some states limit deposits on home improvement contracts, so check local rules, and deduct the deposit clearly on the final invoice.",
      },
      {
        q: "How much should an electrician charge for a service call?",
        a: "Service call fees vary by region and company, so base yours on your actual costs: average drive time, the first part of diagnostic labor, vehicle costs and overhead per visit. Some electricians include the first half hour or hour of labor in the fee, and some credit it against the repair if the customer goes ahead. Tell customers the fee and what it covers when they book.",
      },
      {
        q: "Should I charge more for after-hours electrical calls?",
        a: "Many electricians do, either with a higher hourly rate or a flat emergency surcharge for nights, weekends and holidays. Quote it before you dispatch, then show it clearly on the invoice, for example 'Emergency call-out, Sunday 11:40 pm, per rate quoted by phone'. Matching the invoice to what the customer was told is the best way to avoid disputes over emergency work.",
      },
      {
        q: "How do I invoice an EV charger installation?",
        a: "List the charger, or note that the customer supplied it, then the circuit materials such as breaker and wire, labor, any panel or load management work, the permit and inspection fee and any utility coordination. Include the charger's make, model and serial number so the customer can register the warranty and apply for any utility rebate, but let them confirm eligibility with the program directly.",
      },
      {
        q: "What should an electrician do on the invoice if a job fails inspection?",
        a: "Record the failed item, what was corrected and the re-inspection date in your job notes and on the invoice where relevant. Whether you charge for the correction and any re-inspection fee depends on the cause. If the failure was your workmanship, absorbing the cost is normal, but extra work caused by customer changes or hidden conditions can be billed if your contract allows it.",
      },
      {
        q: "Should an electrical invoice include a warranty?",
        a: "It is not always required, but it is good practice. State your workmanship warranty period and conditions, and note that manufacturer warranties cover products such as breakers, fixtures and chargers. List exclusions too, such as customer-supplied parts or damage from power surges. Putting the warranty on the invoice gives the customer one document showing what was done and how it is covered.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An electrician invoice template (also called an electrical invoice template) is a billing layout for electrical contractors that lists the job description, labor by worker type, materials such as breakers, wire and devices, permit and inspection fees, any service call fee, tax where it applies, deposits already paid and the balance due. It should also show your license number where required and a clear due date.</p>

<p>This guide explains what to include on an electrical invoice, how electricians price service calls and projects, how to handle materials, permits and deposits, and walks through a 200-amp panel upgrade invoice with correct totals. You can create the finished PDF in our <a href="/invoice-generator">free invoice generator</a> straight from the job site.</p>

<h2>What to include on an electrician invoice template</h2>
<ul>
<li><strong>Your business details:</strong> company name, logo, address, phone, email and your electrical contractor license number.</li>
<li><strong>Customer and job site:</strong> the customer's name and billing address, plus the job address if different.</li>
<li><strong>Invoice and job references:</strong> a unique invoice number, the estimate or work order number, and the customer's PO number for commercial jobs.</li>
<li><strong>Dates:</strong> the issue date, the dates work was performed and a clear due date.</li>
<li><strong>Scope of work:</strong> a plain-language description of what was installed, repaired or replaced.</li>
<li><strong>Labor:</strong> hours by role, or flat-rate task prices.</li>
<li><strong>Materials:</strong> major items listed individually; small consumables grouped.</li>
<li><strong>Permits and inspections:</strong> fees and, where useful, the permit number and inspection result.</li>
<li><strong>Tax, deposits and balance:</strong> tax on the correct base, payments received and the amount due.</li>
<li><strong>Warranty and payment terms:</strong> your workmanship warranty, payment methods and any late-fee terms.</li>
</ul>

<h2>How electricians price their work</h2>
<p>An electrical invoice template should match the pricing model you quoted. Most electricians use a mix of these:</p>
<table><thead><tr><th>Pricing model</th><th>How it works</th><th>Example invoice line</th></tr></thead><tbody>
<tr><td>Service call fee</td><td>Fixed fee to attend, diagnose and often the first portion of labor</td><td>Service call and troubleshooting: $95</td></tr>
<tr><td>Hourly by role</td><td>Different rates for master, journeyman and apprentice</td><td>Journeyman electrician, 6 hrs at $95</td></tr>
<tr><td>Flat rate per task</td><td>Price-book pricing for common jobs</td><td>Install GFCI outlet, kitchen: $165</td></tr>
<tr><td>Fixed project quote</td><td>One price for a defined scope</td><td>Panel upgrade per quote Q-2026-077</td></tr>
<tr><td>Per device or per opening</td><td>Common in new construction and remodels</td><td>Recessed lights, 12 openings at $145</td></tr>
</tbody></table>
<p>Showing labor by role is worth the extra line. Customers can see that an apprentice handled the cable runs at a lower rate while the master electrician did the panel work, which makes the total feel fair rather than arbitrary.</p>

<h2>Materials: breakers, wire and devices</h2>
<p>Electrical materials range from a $3 wire nut to a several-thousand-dollar generator, so group them sensibly. List major items by name and quantity (a panel, a meter base, a whole-house surge protector, an EV charger, a set of breakers) and roll small items (connectors, staples, boxes, tape) into one "fittings and consumables" line. Wire and cable can be billed by the foot or as a single line per run.</p>
<p>Many electrical contractors price materials above their wholesale cost to cover sourcing, stock and warranty handling. That is common, but your invoice should match the quote. If a material price jumped between quote and installation and your contract allows you to pass it on, explain the change on the invoice rather than letting the customer discover it.</p>

<h2>Permits, inspections and code compliance</h2>
<p>Panel upgrades, new circuits, service changes, EV chargers and generator installs commonly require an electrical permit and inspection. Put the permit fee on its own line and note the permit number in the description. If the utility has to disconnect and reconnect service, list any coordination time or utility fee separately.</p>
<p>After a passed inspection, add a note such as "Final inspection passed 20 Oct 2026". For commercial clients and landlords, that line is often what releases payment. If you work as a subcontractor for a general contractor, they may also need it for their own progress billing. See our <a href="/blog/construction-invoice-guide">construction invoice guide</a> for how progress billing and retainage work.</p>

<h2>Worked example: 200-amp panel upgrade invoice</h2>
<p>This sample electrician invoice covers a residential panel upgrade from 100 to 200 amps. The customer paid a $900 deposit to cover materials. Tax is applied to materials only at an example rate of 7%; your state may tax a different base, so check with your <a href="/tools/sales-tax-calculator">sales tax calculator</a> and local rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>200A main breaker load center, 40 spaces</td><td>1</td><td>$425.00</td><td>$425.00</td></tr>
<tr><td>Circuit breakers, assorted (incl. AFCI/GFCI)</td><td>18</td><td>$28.00</td><td>$504.00</td></tr>
<tr><td>Service entrance cable, grounding and fittings</td><td>1</td><td>$310.00</td><td>$310.00</td></tr>
<tr><td>Labor: master electrician</td><td>8 hrs</td><td>$110.00</td><td>$880.00</td></tr>
<tr><td>Labor: apprentice electrician</td><td>8 hrs</td><td>$55.00</td><td>$440.00</td></tr>
<tr><td>Electrical permit and inspection fee</td><td>1</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td>Utility disconnect/reconnect coordination</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$2,894.00</strong></td></tr>
<tr><td colspan="3">Sales tax 7% on materials ($1,239.00)</td><td>$86.73</td></tr>
<tr><td colspan="3"><strong>Invoice total</strong></td><td><strong>$2,980.73</strong></td></tr>
<tr><td colspan="3">Less deposit received (INV EL-2026-052)</td><td>−$900.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 3 Nov 2026</strong></td><td><strong>$2,080.73</strong></td></tr>
</tbody></table>
<p>Check the maths: 18 × $28 = $504; materials are $425 + $504 + $310 = $1,239; 7% of $1,239 is $86.73; the subtotal of $2,894 plus tax gives $2,980.73; less the $900 deposit leaves $2,080.73.</p>

<h2>Service call invoices vs project invoices</h2>
<p>Electricians usually send two very different kinds of invoice, and the template should flex to suit each one.</p>
<p>A <strong>service call invoice</strong> is short and issued on the spot: a service call fee, a line or two of labor, a few parts and payment collected before you leave. The description does the heavy lifting here: "Tripping kitchen circuit traced to failed GFCI receptacle; replaced receptacle, tested all downstream outlets" tells the customer exactly what they paid for and gives you a record if the problem recurs.</p>
<p>A <strong>project invoice</strong> covers larger work such as a rewire, a basement finish, an EV charger circuit or a generator install. It usually follows a written quote, often includes a deposit, and may be split into stages such as rough-in and final. Reference the quote number, list approved change orders separately, and attach the passed inspection where relevant. For commercial clients, include their PO number and send the invoice to their accounts payable address rather than the site contact.</p>
<p>Keeping one numbering series for both types makes your records simpler, even if the layouts look a little different.</p>

<h2>How to create an electrical invoice step by step</h2>
<ol>
<li>Open the generator and choose a strong, legible layout: the <a href="/invoice-templates/bold">Bold invoice template</a> works well for trades businesses.</li>
<li>Add your company name, logo, license number and contact details.</li>
<li>Enter the customer's billing details and the job address.</li>
<li>Set the invoice number with our <a href="/tools/invoice-number-generator">invoice number generator</a> if you do not already have a series.</li>
<li>Describe the scope, then add materials, labor by role, permit and other fees.</li>
<li>Apply tax to the correct lines and deduct any deposit. See our <a href="/blog/deposit-invoice">deposit invoice</a> guide for how to issue the deposit itself.</li>
<li>Add your warranty, payment methods and <a href="/blog/invoice-payment-terms">payment terms</a>, then download and send the PDF.</li>
</ol>

<h2>Common electrician invoice mistakes</h2>
<ul>
<li><strong>"Electrical work: $2,900" as the only line.</strong> Itemize materials and labor so the customer can see value.</li>
<li><strong>Forgetting the permit.</strong> If you paid it, bill it, and say so in the quote.</li>
<li><strong>Not recording changes.</strong> If the customer asked for two extra outlets on the day, get it approved and add it as a separate line.</li>
<li><strong>Wrong tax base.</strong> Charging tax on labor in a state that only taxes materials, or the reverse, causes problems later.</li>
<li><strong>Missing license number.</strong> Where it is required on paperwork, leaving it off can cause trouble with licensing authorities.</li>
</ul>
<p>Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> covers the general errors that apply to every trade.</p>

<h2>Electrical work alongside other trades</h2>
<p>Electricians often work next to other trades on renovations, so it helps to know how they bill. If you subcontract to a general contractor, they will pass your invoice into their own. The <a href="/blog/contractor-invoice-template">contractor invoice template</a> guide shows how. If you install controls or circuits for heating and cooling equipment, compare with the <a href="/blog/hvac-invoice-template">HVAC invoice template</a>. Once you have been paid, send a receipt if the customer asks for one; our <a href="/blog/payment-receipt-template">payment receipt template</a> guide explains what it should show.</p>

<h2>Create your electrician invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, pick the Bold template or browse all <a href="/invoice-templates">invoice templates</a>, add your materials, labor and permit fees, and download a professional electrical invoice as a PDF in minutes.</p>
`,
  },
  {
    slug: "landscaping-invoice-template",
    title: "Landscaping Invoice Template: Free Guide with Examples",
    description:
      "Free landscaping invoice template guide for lawn care and landscape installs: per-visit, seasonal and project pricing, materials, plus two worked examples.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "lawn-care-invoice-template",
      "fencing-invoice-template",
      "tree-service-invoice-template",
      "snow-removal-invoice-template",
      "recurring-invoices-guide",
      "cleaning-service-invoice-template",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "What should a landscaping invoice include?",
        a: "Your business name and contact details, the client's name and property address, a unique invoice number, issue and due dates, the service period or visit dates, itemized labor, materials such as mulch, plants and sod, disposal fees, tax where it applies, deposits paid, the total due and payment instructions.",
      },
      {
        q: "How do landscapers charge for their services?",
        a: "Lawn maintenance is usually priced per visit or as a monthly or seasonal contract, while design and installation work is quoted as a project with materials and labor itemized. Hourly crew rates are common for cleanups and small jobs.",
      },
      {
        q: "Should I bill lawn care clients per visit or monthly?",
        a: "Both work. Per-visit billing matches what was done exactly, while a flat monthly fee spread across the season makes payments predictable for the client and smooths your cash flow. Choose one per client and state it in the service agreement.",
      },
      {
        q: "Do landscapers charge sales tax?",
        a: "It depends on the state. Some tax landscaping and lawn services, others tax only materials such as plants and mulch, and some tax neither. Check with your state revenue department or an accountant before adding tax.",
      },
      {
        q: "Should I take a deposit for a landscape installation?",
        a: "Yes, deposits are common for installation projects because you buy plants, stone and other materials before the job starts. Issue a deposit invoice, then deduct the amount on the final invoice with a reference to it.",
      },
      {
        q: "How much should I charge per lawn mowing visit?",
        a: "Price by the time each property takes rather than a flat number. Time a typical visit for each lot size, including travel, edging and cleanup, then multiply by an hourly rate covering crew wages, fuel, equipment wear, insurance and profit. Add extra for steep slopes, obstacles or overgrown first cuts. Compare with local competitors and review prices each season as fuel and labor costs change.",
      },
      {
        q: "How do I invoice snow removal?",
        a: "Snow removal is usually billed per push or visit, per inch over a trigger depth, hourly for equipment, or as a fixed seasonal contract. Whichever you use, list each event with the date, snowfall or trigger, the service provided and any salt or ice melt as a separate materials line. Dated records protect you if a client or property manager questions how often you came out.",
      },
      {
        q: "Can I charge for skipped visits on a seasonal lawn care contract?",
        a: "That depends on your agreement. Many fixed monthly contracts spread the season's price evenly, so clients pay the same amount even when weather cuts visits one month, because other months have extra visits. If your contract bills per visit, bill only completed visits. Spell out how rain-outs, drought and skipped cuts are handled before the season starts, and note skipped dates on the invoice.",
      },
      {
        q: "How do I bill for irrigation repairs?",
        a: "Bill irrigation work separately from your maintenance contract unless the contract includes it. List diagnostic time, each repair such as a replaced head, valve or broken line, the parts used and labor hours. For property managers, quote the approval or work order number, since irrigation repairs often need written approval first. Seasonal start-up and winterization are usually separate fixed-price lines.",
      },
      {
        q: "Do landscapers need a license to apply pesticides or fertilizer?",
        a: "Often yes for pesticides. Most US states require a license or certification for commercial pesticide application, and some also regulate fertilizer application. Requirements vary by state and by the products you use, so check with your state department of agriculture. If you hold a license, show the number on your invoice or service record and note the product and area treated.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A landscaping invoice template is a billing layout for lawn care and landscaping businesses that lists visit dates or project scope, crew labor, materials such as mulch, plants, soil and sod, equipment and disposal fees, tax where it applies and the total due. Maintenance clients are usually billed per visit or monthly, while installations are billed with a deposit up front and a final invoice on completion.</p>

<p>This guide covers what to include on a landscaping invoice, how landscapers price maintenance and installation work, how to bill materials, and two worked examples: a monthly maintenance invoice and a spring planting project. You can create either one in our <a href="/invoice-generator">free invoice generator</a> and send it the same day the work is finished.</p>

<h2>What to include on a landscaping invoice template</h2>
<ul>
<li><strong>Business details:</strong> company name, logo, phone, email and any license or pesticide applicator certification your state requires for the services you provide.</li>
<li><strong>Client and property:</strong> the client's name and billing address, plus the property address if different, essential for HOAs and property managers with many sites.</li>
<li><strong>Invoice number and dates:</strong> a unique number, issue date and due date.</li>
<li><strong>Service period or visit dates:</strong> for maintenance, list each visit; for projects, the start and completion dates.</li>
<li><strong>Labor:</strong> per visit, per crew-hour or as a project price.</li>
<li><strong>Materials:</strong> mulch, soil and stone by the cubic yard or ton, plants by size and count, sod by the square foot or pallet.</li>
<li><strong>Fees:</strong> green waste disposal, equipment rental and delivery.</li>
<li><strong>Tax, deposit and total:</strong> tax on the right base, deposits received and the balance due.</li>
<li><strong>Plant warranty:</strong> if you offer one, state the period and conditions (for example, valid if watering instructions are followed).</li>
</ul>

<h2>How landscaping services are priced</h2>
<table><thead><tr><th>Service type</th><th>Common pricing</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Lawn mowing and maintenance</td><td>Per visit, by lot size</td><td>Mow, edge and blow: 4 visits at $55</td></tr>
<tr><td>Seasonal contracts</td><td>Fixed monthly fee across the season</td><td>Maintenance plan, October 2026 (month 7 of 8)</td></tr>
<tr><td>Cleanups</td><td>Hourly per crew member or flat fee</td><td>Fall leaf cleanup, 2.5 crew-hrs at $60</td></tr>
<tr><td>Applications</td><td>Per application, by lawn area</td><td>Fertilizer and weed control, 8,000 sq ft</td></tr>
<tr><td>Design and installation</td><td>Project quote with materials and labor</td><td>Front bed renovation per quote Q-2026-033</td></tr>
<tr><td>Hardscaping</td><td>Per square foot or project price</td><td>Paver patio, 240 sq ft</td></tr>
</tbody></table>
<p>Per-visit billing is the most transparent, but many landscapers prefer a fixed seasonal contract divided into equal monthly invoices. The client gets predictable bills and you get steady cash flow even in slow weeks. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> shows how to run a monthly cycle without missing anyone.</p>

<h2>Billing materials: mulch, plants, sod and stone</h2>
<p>Materials are where landscaping invoices most often go wrong. Use the unit you bought in and quoted in, so the client can compare: mulch and topsoil by the cubic yard, gravel and stone by the ton or cubic yard, sod by the square foot or pallet, and plants by container size and count ("3-gallon boxwood × 12"). Include delivery charges as their own line if your supplier charges you for them.</p>
<p>Many landscapers mark up materials to cover pickup, handling, waste and plant guarantees. That is standard, but the price on the invoice should match the quote. If the client added plants on the day, write them up as a separate line labeled as a client-requested addition.</p>
<p>Sales tax treatment differs widely: some states tax landscaping services, some tax only the plants and materials, and some treat the whole installation as a construction job. Use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> for the numbers and confirm the rules with your state or accountant.</p>

<h2>Worked example 1: monthly lawn maintenance invoice</h2>
<p>A residential client on per-visit billing, invoiced at the end of October. No tax is applied in this example, which assumes a state that does not tax lawn services.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Mow, edge and blow: 3, 10, 17, 24 Oct 2026</td><td>4 visits</td><td>$55.00</td><td>$220.00</td></tr>
<tr><td>Fall leaf cleanup, 31 Oct 2026</td><td>2.5 crew-hrs</td><td>$60.00</td><td>$150.00</td></tr>
<tr><td>Fall fertilizer application</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td colspan="3"><strong>Total due by 14 Nov 2026</strong></td><td><strong>$455.00</strong></td></tr>
</tbody></table>

<h2>Worked example 2: spring planting project invoice</h2>
<p>This project invoice covers a front-yard bed renovation and sod installation. Tax is applied to the mulch and shrubs at an example rate of 6%; the sod is quoted as an installed price. Your state may tax a different base.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Landscape design plan, front yard</td><td>1</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Double-shredded hardwood mulch, delivered</td><td>6 cu yd</td><td>$48.00</td><td>$288.00</td></tr>
<tr><td>Shrubs, 3-gallon (boxwood and hydrangea)</td><td>12</td><td>$38.00</td><td>$456.00</td></tr>
<tr><td>Labor: bed prep, planting and mulching</td><td>14 crew-hrs</td><td>$65.00</td><td>$910.00</td></tr>
<tr><td>Sod, supplied and installed</td><td>800 sq ft</td><td>$1.10</td><td>$880.00</td></tr>
<tr><td>Green waste disposal</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$2,979.00</strong></td></tr>
<tr><td colspan="3">Sales tax 6% on mulch and shrubs ($744.00)</td><td>$44.64</td></tr>
<tr><td colspan="3"><strong>Total due by 14 Nov 2026</strong></td><td><strong>$3,023.64</strong></td></tr>
</tbody></table>
<p>Check the maths: 6 × $48 = $288; 12 × $38 = $456; 14 × $65 = $910; 800 × $1.10 = $880; with the design plan and disposal the subtotal is $2,979. Tax is 6% of $744, or $44.64, for a total of $3,023.64. If the client paid a deposit, add a negative line for it and show the balance. Our <a href="/blog/deposit-invoice">deposit invoice</a> guide explains the format.</p>

<h2>Seasonal contracts, HOAs and commercial accounts</h2>
<p>Larger landscaping clients (homeowners associations, property managers, office parks and retail sites) bring steady work but stricter invoicing rules. Before the season starts, ask each one how they want to be billed and record the answers in your service agreement.</p>
<ul>
<li><strong>One invoice per property or one combined invoice?</strong> Property managers often need a separate invoice for each site so they can charge it to the right owner.</li>
<li><strong>What reference must appear?</strong> Many require a PO number, contract number or property code on every invoice.</li>
<li><strong>Is extra work pre-approved?</strong> Storm cleanups, irrigation repairs and plant replacements usually need written approval before you start, and the approval reference should appear on the invoice line.</li>
<li><strong>What are the payment terms?</strong> Commercial accounts commonly pay on net 30 terms, so plan your cash flow around that.</li>
</ul>
<p>For a fixed seasonal contract, a clear line reads something like "Grounds maintenance, October 2026, month 7 of 8 per contract LC-2026-09". Listing the visits performed underneath, even at a zero amount, gives the client evidence that the service was delivered and protects you if a board member asks why the grass looked long one week. Irrigation start-up and winterization, snow removal and holiday lighting are usually invoiced separately from the base contract.</p>

<h2>How to create a landscaping invoice step by step</h2>
<ol>
<li>Open the generator and choose a fresh, natural-looking layout such as the <a href="/invoice-templates/emerald">Emerald invoice template</a>.</li>
<li>Add your business details and logo; they will be saved in your browser for next time.</li>
<li>Enter the client's billing details and the property address.</li>
<li>Add the service period or project dates.</li>
<li>List visits, labor, materials and fees in the units you quoted.</li>
<li>Apply tax where it applies and deduct any deposit.</li>
<li>Add your <a href="/blog/invoice-payment-terms">payment terms</a>, plant warranty note and payment methods, then download and send the PDF.</li>
</ol>

<h2>Getting landscaping invoices paid</h2>
<ul>
<li><strong>Invoice on a fixed day.</strong> Month-end for maintenance clients, completion day for projects.</li>
<li><strong>Offer a small incentive for prompt payment.</strong> Some landscapers use an <a href="/blog/early-payment-discount">early payment discount</a> for seasonal contracts paid up front.</li>
<li><strong>Use card-on-file or autopay</strong> for recurring maintenance so nobody has to remember.</li>
<li><strong>Pause service on unpaid accounts</strong> if your agreement allows it, and follow our advice on handling an <a href="/blog/overdue-invoice">overdue invoice</a>.</li>
<li><strong>Plan for winter.</strong> If revenue drops off-season, sell snow removal, holiday lighting or prepaid spring contracts so invoicing continues year-round.</li>
</ul>
<p>Cleaning companies run a very similar recurring model; compare notes in our <a href="/blog/cleaning-service-invoice-template">cleaning invoice template</a> guide. For broader advice on running billing as a small business, see the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>

<h2>Create your landscaping invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Emerald template or browse all <a href="/invoice-templates">invoice templates</a>, add your visits, materials and labor, and download a professional landscaping invoice as a PDF in minutes.</p>
`,
  },
  {
    slug: "handyman-invoice-template",
    title: "Handyman Invoice Template: Free Guide, Rates and Example",
    description:
      "Free handyman invoice template guide: bill hourly and flat-rate jobs, trip charges, minimums and materials correctly, with a multi-task worked example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "garage-door-repair-invoice-template",
      "junk-removal-invoice-template",
      "flooring-invoice-template",
      "contractor-invoice-template",
      "itemized-invoice",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "What should a handyman invoice include?",
        a: "Your name or business name, contact details and any license number your state requires, the customer's name and address, a unique invoice number and date, each task with its hours or flat price, materials with receipts where needed, any trip charge, tax where it applies, the total due and how to pay.",
      },
      {
        q: "How do handymen charge for jobs?",
        a: "Most handymen charge an hourly rate with a minimum, such as one or two hours, or a flat rate per task for common jobs like mounting a TV or hanging a door. Many also add a trip charge and bill materials separately.",
      },
      {
        q: "Should I charge for materials separately as a handyman?",
        a: "Yes. Listing materials separately from labor makes the invoice easier to understand and lets you apply sales tax correctly where materials are taxable. Keep store receipts in case the customer wants to see them.",
      },
      {
        q: "Do handymen need a license to invoice for work?",
        a: "You can invoice for work without a special license in many places, but many states and cities require a contractor license for jobs above a certain value or for electrical, plumbing and structural work. Check your local rules before quoting larger jobs.",
      },
      {
        q: "Can I charge a minimum fee for small handyman jobs?",
        a: "Yes, a minimum charge is common because travel and setup take time even for a five-minute fix. Tell the customer about the minimum when booking and show it clearly on the invoice.",
      },
      {
        q: "How much should a handyman charge per hour?",
        a: "There is no fixed national rate, so work it out from your costs and local market. Total your yearly expenses, including insurance, vehicle, tools, phone and taxes, add the income you want, and divide by the hours you can realistically bill, which is usually far fewer than the hours you work. Then compare with local handymen and adjust for specialist skills and travel distance.",
      },
      {
        q: "Should a handyman charge for time spent buying materials?",
        a: "Many do, because shopping and returns take real time. Common approaches are a materials pickup fee, a small markup on materials, or billing shopping time at your hourly rate. Pick one, tell the customer when quoting, and show it on the invoice as its own line, such as 'Materials pickup and return trip'. Avoid charging both a markup and full shopping time without explaining it.",
      },
      {
        q: "Should I give a warranty on handyman work?",
        a: "Offering a short workmanship guarantee, such as 30 or 90 days, builds trust and is common, but it is your choice unless local law requires one. State the period and what it covers in the invoice notes, and exclude customer-supplied materials and damage from misuse. Manufacturer warranties cover products such as faucets or locks, so tell the customer to keep the receipt.",
      },
      {
        q: "Can I charge more if a quoted handyman job takes longer than expected?",
        a: "Only if your quote allows for it. A fixed-price quote usually means you absorb extra time unless the scope changed or you found a hidden problem and the customer approved the extra work. For hourly jobs, bill actual time, but warn the customer as soon as it starts running over. Note any approved changes on the invoice with the date they were agreed.",
      },
      {
        q: "Should I invoice before or after finishing a handyman job?",
        a: "For most single-visit jobs, finish the work, walk the customer through it, then present the invoice and take payment on the spot. For multi-day jobs or ones needing expensive materials, invoice a deposit before you start and the balance on completion. Our free invoice generator works in your phone's browser, so you can create and download the PDF before you leave.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A handyman invoice template is a simple billing layout for odd jobs and small repairs. It should list each task with either hours worked or a flat price, any trip charge or minimum fee, materials on separate lines, tax where it applies and the total due. Because most handyman jobs are small and done in one visit, the invoice is usually issued and paid on the same day.</p>

<p>Below you will find what to put on a handyman invoice, the common ways handymen price their work, how to bill materials and minimums fairly, and a worked example of a multi-task visit with correct totals. Use our <a href="/invoice-generator">free invoice generator</a> to fill it in on your phone and send a PDF before you pack up your tools.</p>

<h2>What to include on a handyman invoice template</h2>
<ul>
<li><strong>Your details:</strong> name or business name, logo, phone and email, and any license or registration number your state requires.</li>
<li><strong>Customer details:</strong> name and address of the customer, and the job address if different.</li>
<li><strong>Invoice number and date:</strong> unique and sequential. Our <a href="/tools/invoice-number-generator">invoice number generator</a> creates a simple series such as <code>HM-0137</code>.</li>
<li><strong>Task list:</strong> each job on its own line, so the customer can see what they paid for.</li>
<li><strong>Labor:</strong> hours and rate, or a flat price per task.</li>
<li><strong>Trip charge or minimum:</strong> shown clearly if you use one.</li>
<li><strong>Materials:</strong> each item or a grouped line, with receipts available.</li>
<li><strong>Tax and total:</strong> tax only where it applies, then the amount due.</li>
<li><strong>Payment methods:</strong> card, payment link, bank transfer or check.</li>
</ul>
<p>The more itemized the invoice, the fewer questions you get. Our guide to the <a href="/blog/itemized-invoice">itemized invoice</a> explains why separate lines speed up payment.</p>

<h2>How handymen price their work</h2>
<table><thead><tr><th>Pricing method</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Hourly with minimum</td><td>Hourly rate with a one- or two-hour minimum</td><td>Repairs where the time is hard to predict</td></tr>
<tr><td>Flat rate per task</td><td>Fixed price for a defined job</td><td>TV mounting, furniture assembly, faucet swaps, door hardware</td></tr>
<tr><td>Half-day or full-day rate</td><td>Fixed price for a block of time</td><td>"Honey-do" lists with many small tasks</td></tr>
<tr><td>Trip charge</td><td>Fixed fee to cover travel and setup</td><td>Small jobs, or customers outside your normal area</td></tr>
<tr><td>Project quote</td><td>Fixed price for a larger defined job</td><td>Deck repairs, fence sections, small remodels</td></tr>
</tbody></table>
<p>Flat rates reward you for working efficiently and give customers certainty. Hourly billing protects you when a "quick fix" turns out to involve rotten framing behind the drywall. A blend works well for most handymen: flat rates for common tasks, hourly for the unknowns. For tips on presenting time, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h2>Minimums, trip charges and materials</h2>
<h3>Minimum charges</h3>
<p>A one-hour or two-hour minimum is common because travel, setup and cleanup take time regardless of the job size. State it when the customer books, and on the invoice write "Labor, 1-hour minimum" rather than billing 20 minutes and absorbing the rest.</p>
<h3>Trip charges</h3>
<p>Some handymen charge a trip fee on every visit; others charge one only outside a set radius or for very small jobs. Either way, show it as its own line.</p>
<h3>Materials</h3>
<p>If you pick up materials, list them separately from labor. Many handymen add a small markup to cover the time spent shopping and returning items, or charge a separate "materials pickup" line. Keep store receipts: some customers will want to see them, and they support your own bookkeeping. If the customer supplied the parts, note "Customer-supplied materials" so there is no confusion if something fails later.</p>

<h2>Worked example: multi-task handyman invoice</h2>
<p>A homeowner booked a half-day visit with several small jobs. Flat rates were quoted for the TV mount and door hardware, and the drywall repair was billed hourly. Tax is applied to materials at an example rate of 7%; your state's treatment may differ, so check with our <a href="/tools/sales-tax-calculator">sales tax calculator</a> and local rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Trip charge</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>Mount 65 in TV on drywall, studs located, cables tidied (flat rate)</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Replace interior door hardware (flat rate per door)</td><td>4</td><td>$25.00</td><td>$100.00</td></tr>
<tr><td>Drywall patch, sand and paint, hallway</td><td>2.5 hrs</td><td>$70.00</td><td>$175.00</td></tr>
<tr><td>Materials: interior door levers, satin nickel</td><td>4</td><td>$32.00</td><td>$128.00</td></tr>
<tr><td>Materials: joint compound, mesh tape, primer, paint sample</td><td>1</td><td>$46.80</td><td>$46.80</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$614.80</strong></td></tr>
<tr><td colspan="3">Sales tax 7% on materials ($174.80)</td><td>$12.24</td></tr>
<tr><td colspan="3"><strong>Total due on completion</strong></td><td><strong>$627.04</strong></td></tr>
</tbody></table>
<p>Check the maths: 4 × $25 = $100; 2.5 × $70 = $175; 4 × $32 = $128; the lines add up to $614.80. Materials total $128 + $46.80 = $174.80, and 7% of that is $12.236, rounded to $12.24. The total is $627.04.</p>

<h2>How to create a handyman invoice step by step</h2>
<ol>
<li>Open the generator on your phone and choose a clean layout: the <a href="/invoice-templates/minimal">Minimal invoice template</a> reads well on small screens. Our guide on <a href="/blog/how-to-make-an-invoice-on-your-phone">how to make an invoice on your phone</a> has more tips.</li>
<li>Check your saved business details.</li>
<li>Enter the customer's name and address.</li>
<li>Add each task as its own line with hours or a flat price.</li>
<li>Add materials and any trip charge, then apply tax where it applies.</li>
<li>Add your payment methods and a thank-you note.</li>
<li>Download the PDF, send it, and take payment before you leave.</li>
</ol>
<p>Once paid, the same document can serve as the customer's record, or you can send a separate receipt. See <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> for the difference.</p>

<h2>Quotes, approvals and scope creep</h2>
<p>Handyman visits have a habit of growing. You arrive to fix a sticking door and leave having also replaced a toilet flapper, re-caulked the tub and hung three shelves. That is good business, as long as the invoice reflects it and the customer agreed to it.</p>
<ol>
<li><strong>Start with a written task list.</strong> A short text or email confirming the jobs and prices before the visit is enough for small work.</li>
<li><strong>Confirm additions on the spot.</strong> When the customer asks for "one more thing", tell them the price or estimated time before you start, and get a quick yes in writing if you can.</li>
<li><strong>Flag surprises early.</strong> If a repair turns out to be bigger than expected (water damage behind tiles, rotten subfloor), stop, explain, and agree how to proceed before running up hours.</li>
<li><strong>Label additions on the invoice.</strong> A line such as "Added on site at customer request: hang 3 floating shelves" removes any doubt later.</li>
</ol>
<p>For anything beyond a single visit, give a written estimate first. It sets expectations, and it means the final invoice is a confirmation rather than a surprise.</p>

<h2>Know where handyman work ends</h2>
<p>Many states and cities limit what you can do without a contractor license, often by job value, and almost always for electrical, plumbing, gas and structural work. The thresholds and rules vary, so check with your state licensing board before quoting larger jobs. When a job is beyond your scope, refer it to a licensed tradesperson; our <a href="/blog/electrician-invoice-template">electrician invoice template</a> and <a href="/blog/contractor-invoice-template">contractor invoice template</a> guides show how those businesses bill.</p>
<p>Staying within your scope also protects your invoice. A customer who discovers that unlicensed work needs redoing is unlikely to pay for it, and your insurance may not cover it.</p>

<h2>Handyman invoicing mistakes to avoid</h2>
<ul>
<li><strong>One line for the whole visit.</strong> "Odd jobs: $627" invites a haggle. List every task.</li>
<li><strong>Not mentioning the minimum or trip charge up front.</strong> Surprise fees are the top cause of handyman disputes.</li>
<li><strong>Losing material receipts.</strong> You need them for the customer and for your own tax deductions.</li>
<li><strong>Waiting to invoice.</strong> Send it before you leave, while the work is fresh and the customer is happy.</li>
<li><strong>Reusing invoice numbers.</strong> Keep one continuous series. Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> explains why.</li>
</ul>

<h2>Create your handyman invoice now</h2>
<p>Open the <a href="/invoice-generator">free invoice generator</a>, choose the Minimal template or browse all <a href="/invoice-templates">invoice templates</a>, list your tasks, materials and trip charge, and download a professional handyman invoice in minutes.</p>
`,
  },
];
