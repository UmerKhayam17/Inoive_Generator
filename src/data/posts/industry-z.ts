import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_Z: PostDraft[] = [
  {
    slug: "av-installation-invoice-template",
    title: "AV Installation Invoice Template (Home Theater + Free PDF)",
    description:
      "AV installation invoice template for home theater and smart home jobs: equipment, wiring, TV mounting, programming lines, deposits and a worked example invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "electrician-invoice-template",
      "it-managed-services-invoice-template",
      "computer-repair-invoice-template",
    ],
    faqs: [
      {
        q: "How do AV installers usually charge?",
        a: "Most AV and home theater installers combine three pricing methods: equipment sold at a marked up price, flat rates for common tasks such as mounting a TV or installing a pair of in-ceiling speakers, and hourly rates for programming, troubleshooting and custom work. Larger projects are often quoted as a fixed price per room or system with a deposit. Whatever mix you use, keep it consistent between the proposal and the invoice.",
      },
      {
        q: "Should I take a deposit for equipment on AV jobs?",
        a: "Yes, most integrators require a deposit before ordering equipment, because receivers, projectors, speakers and control processors are expensive and sometimes non-returnable once opened. A common approach is to collect most or all of the equipment cost upfront and bill labor on completion or in stages. State clearly whether deposits are refundable and how restocking fees apply if the customer cancels.",
      },
      {
        q: "Do I charge sales tax on AV installation invoices?",
        a: "Equipment sold to the customer is taxable in most states that have a sales tax. Installation labor is treated differently from state to state: some tax it, some exempt it if separately stated, and some treat permanent built-in systems as real property improvements. Separating equipment from labor on the invoice makes it easier to apply your state's rules correctly. Check with your state revenue agency or accountant.",
      },
      {
        q: "How should I invoice smart home programming?",
        a: "Programming is usually billed hourly or as a fixed fee per system or room, plus any annual software license or dealer support plan required by the control platform. Describe what was programmed, such as scenes, remotes, lighting keypads and app access, so the customer understands the value. Later changes requested by the customer should be billed as new work or under a support plan.",
      },
      {
        q: "What should my warranty terms say on an AV invoice?",
        a: "Separate your labor warranty from manufacturer warranties. A common approach is a workmanship warranty on wiring and installation for a set period, with equipment covered by the manufacturer under its own terms. Exclude damage from power surges, customer changes, moving mounted equipment and software updates outside your control. Put full terms in the contract and reference them on the invoice.",
      },
      {
        q: "Can I bill a trip charge for AV service calls?",
        a: "Yes. Many integrators charge a service call fee that covers travel and the first block of time on site, then bill additional time in smaller increments. List the fee on your rate sheet, proposal and invoice. For clients on a support or maintenance plan, the trip charge may be included or discounted, and the invoice should show that clearly.",
      },
      {
        q: "Do AV installers need a license?",
        a: "It depends on the state and the work. Some states require a low voltage or limited energy license for installing audio, video, security or data cabling, while line voltage work such as adding outlets usually requires a licensed electrician. TV mounting alone may not require a license in many places. Check your state licensing board and put your license number on invoices if one is required.",
      },
      {
        q: "How do I bill for cable and parts on an AV job?",
        a: "List major parts individually, such as HDMI cables, wall plates, in-wall boxes and mounts, and group small consumables like connectors and ties into a single materials line. For long runs, bill in-wall rated speaker or network cable by the foot or by the run. Showing the parts list helps customers see why a custom install costs more than buying a TV and soundbar.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An AV installation invoice bills a customer for audio-visual work such as home theaters, TV mounting, multi-room audio, projector installs and smart home control systems. It lists equipment with model numbers, mounts and cabling, labor for installation and wiring, programming and calibration, trip charges, deposits paid and the balance due, plus warranty terms.</p>

<p>AV jobs mix expensive hardware, skilled labor and software work, which makes them easy to underbill and easy for customers to question. An itemized invoice protects your margin on equipment, shows the value of programming time and gives the customer a record for warranty claims. This guide covers what to include on a home theater invoice, how integrators usually price their work, a full worked example and common mistakes. You can create the invoice in our <a href="/invoice-generator">free invoice generator</a> and send it as a PDF.</p>

<h2>What is an AV installation invoice?</h2>
<p>An AV installation invoice, also called a home theater invoice or audio video integration invoice, is the bill an AV integrator, TV mounting company, custom installer or low voltage contractor sends after installing or servicing audio, video and control systems. Typical jobs include:</p>
<ul>
<li>TV wall mounting with concealed wiring</li>
<li>Home theater and media rooms: projector, screen, AV receiver, surround speakers, subwoofers</li>
<li>Multi-room or whole home audio with in-ceiling or outdoor speakers</li>
<li>Smart home and control systems: lighting keypads, motorized shades, universal remotes, voice control</li>
<li>Conference rooms and small business AV: displays, video conferencing, sound systems</li>
<li>Home networks that support streaming: Wi-Fi access points, network switches, structured wiring</li>
</ul>
<p>Because AV work overlaps with electrical and IT services, compare the <a href="/blog/electrician-invoice-template">electrician invoice template</a> for line voltage work and the <a href="/blog/it-managed-services-invoice-template">IT managed services invoice template</a> for ongoing network support.</p>

<h2>What should a home theater or AV invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, address, phone, low voltage or contractor license number where required</td></tr>
<tr><td>Invoice details</td><td>Invoice number, date, due date, proposal or project number</td></tr>
<tr><td>Customer and site</td><td>Name, billing address, installation address, rooms or zones covered</td></tr>
<tr><td>Equipment</td><td>Brand, model, quantity, unit price, serial numbers for major items</td></tr>
<tr><td>Mounts and materials</td><td>Wall mounts, in-wall boxes, cables, wall plates, consumables</td></tr>
<tr><td>Labor</td><td>Installation by task or hours: mounting, pre-wire, trim-out, rack build</td></tr>
<tr><td>Programming and calibration</td><td>Control system programming, remote setup, audio calibration, video calibration</td></tr>
<tr><td>Fees</td><td>Trip charge, disposal of packaging or old equipment, after hours work</td></tr>
<tr><td>Payments and terms</td><td>Deposit, progress payments, balance due, warranty, payment methods</td></tr>
</tbody></table>
<p>Serial numbers for major equipment help the customer register warranties and file insurance claims, and they help you identify units if a product is recalled or fails.</p>

<h2>How do AV installers price their work?</h2>
<p>There is no standard national price list for AV installation; rates depend on market, complexity and the systems you sell. Most companies use a mix of the methods below. Prices in this guide are illustrative, not survey data.</p>
<table><thead><tr><th>Work</th><th>Common pricing method</th><th>What to show on the invoice</th></tr></thead><tbody>
<tr><td>TV mounting</td><td>Flat rate by TV size and wall type</td><td>Mount model, wall type (drywall, brick, over fireplace), wire concealment</td></tr>
<tr><td>Speaker installation</td><td>Per speaker or per pair</td><td>In-wall or in-ceiling, cable runs, cut-ins</td></tr>
<tr><td>Pre-wire (new construction)</td><td>Per drop or per run</td><td>Cable type and number of runs per room</td></tr>
<tr><td>Equipment</td><td>Unit price (your sell price)</td><td>Brand, model, quantity</td></tr>
<tr><td>Rack build and trim-out</td><td>Hourly or fixed per system</td><td>Rack, power conditioning, cable management</td></tr>
<tr><td>Programming</td><td>Hourly or fixed per room or system</td><td>Platform, scenes, devices integrated</td></tr>
<tr><td>Calibration</td><td>Fixed per display or room</td><td>Audio room correction, video calibration</td></tr>
<tr><td>Service calls</td><td>Trip charge plus hourly</td><td>Time on site, issue and fix</td></tr>
<tr><td>Support plans</td><td>Monthly or annual fee</td><td>Remote support, response times, visits included</td></tr>
</tbody></table>
<p>Equipment margin matters. If you supply hardware, your sell price covers sourcing, handling, returns and the risk of dead-on-arrival units. Our guide to <a href="/blog/materials-markup">materials markup</a> explains common approaches. If the customer supplies their own TV or speakers, bill labor only and note "customer-supplied equipment" so warranty responsibility is clear.</p>

<h2>Wiring, mounting and licensing details to include</h2>
<p>Customers rarely see the wiring once the walls are closed, so the invoice is their record of what is behind them. Note cable types (for example in-wall rated speaker wire, Category 6 network cable, HDMI rated for in-wall use), the number of runs and their endpoints. Cables run inside walls generally need to carry the appropriate fire rating under the National Electrical Code and local codes; using in-wall rated cable and stating it on the invoice protects you and the homeowner.</p>
<p>For TV mounting, record the mount model, the wall type, whether the mount is attached to studs or masonry, and the TV size and weight range covered. Over-fireplace mounts, brick and stone walls and ceiling mounts take longer and carry more risk, which justifies a higher rate.</p>
<p>Licensing varies widely. Some states require a low voltage or limited energy license for cabling, and adding a new outlet or circuit behind a TV is electrical work that usually needs a licensed electrician and possibly a permit. If you subcontract electrical work, show it as a separate line and keep the electrician's invoice in your records.</p>

<h2>How to price and invoice TV mounting jobs</h2>
<p>TV mounting is the entry point for many AV businesses and the most price-compared service, so a clear structure matters. Most companies set a base price by TV size, then add for the wall type, the mount and wire concealment. A rate card might look like this (illustrative figures only):</p>
<table><thead><tr><th>Item</th><th>Example rate</th><th>Why it varies</th></tr></thead><tbody>
<tr><td>Mount TV up to 55 in on drywall (studs)</td><td>$129</td><td>Standard install, one technician</td></tr>
<tr><td>Mount TV 56 to 85 in</td><td>$169</td><td>Two people often needed for weight and size</td></tr>
<tr><td>Brick, stone or tile wall</td><td>+$60</td><td>Masonry anchors, drilling time, dust control</td></tr>
<tr><td>Over fireplace</td><td>+$75</td><td>Height, heat considerations, ladder work</td></tr>
<tr><td>In-wall wire concealment kit</td><td>+$99</td><td>Cutting, pulling and finishing two openings</td></tr>
<tr><td>Soundbar mount and connection</td><td>+$49</td><td>Bracket alignment and setup</td></tr>
<tr><td>Remove and dispose of old TV</td><td>+$35</td><td>Haul-away or recycling fees</td></tr>
</tbody></table>
<p>On the invoice, use the same names as your rate card so customers can match each line. If the customer supplies the mount, note it and exclude mount failures from your warranty. If you discover the wall cannot safely hold the TV (no studs where needed, hollow masonry), stop and agree an alternative in writing before continuing.</p>
<p>Equipment substitutions also need care. When a quoted model is out of stock and you install a comparable one, record the substitution and the customer's approval on the invoice, and adjust the price if the replacement costs less. State your return and restocking policy for special order items so a canceled job does not leave you holding expensive equipment.</p>

<h2>Example AV installation invoice</h2>
<p>An illustrative media room project with example prices.</p>
<p><strong>Clearwave Home Systems LLC</strong>, Invoice AV-2026-052, dated October 23, 2026. Customer: Ethan and Mia Brooks, 61 Hollow Creek Road. Proposal P-2026-040 accepted September 15, 2026. Terms: balance due within 7 days.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>75 in 4K TV (model and serial on equipment list)</td><td>1</td><td>each</td><td>$1,499.00</td><td>$1,499.00</td></tr>
<tr><td>AV receiver, 7.2 channel</td><td>1</td><td>each</td><td>$899.00</td><td>$899.00</td></tr>
<tr><td>In-ceiling speakers (pair)</td><td>2</td><td>pairs</td><td>$420.00</td><td>$840.00</td></tr>
<tr><td>Front speakers and center channel package</td><td>1</td><td>set</td><td>$1,150.00</td><td>$1,150.00</td></tr>
<tr><td>Subwoofer, 12 in</td><td>1</td><td>each</td><td>$599.00</td><td>$599.00</td></tr>
<tr><td>Articulating wall mount, rated to 125 lb</td><td>1</td><td>each</td><td>$189.00</td><td>$189.00</td></tr>
<tr><td>Cables, wall plates, in-wall box, brackets and consumables</td><td>1</td><td>lot</td><td>$310.00</td><td>$310.00</td></tr>
<tr><td>TV mounting on studs with in-wall wire concealment</td><td>1</td><td>each</td><td>$275.00</td><td>$275.00</td></tr>
<tr><td>In-ceiling speaker installation, cut-in and wiring</td><td>4</td><td>speakers</td><td>$95.00</td><td>$380.00</td></tr>
<tr><td>Equipment setup, room calibration and remote programming</td><td>4</td><td>hours</td><td>$110.00</td><td>$440.00</td></tr>
<tr><td>Packaging removal and disposal</td><td>1</td><td>job</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$6,621.00</strong></td></tr>
<tr><td colspan="4">Sales tax on equipment and materials, illustrative 7% of $5,486.00</td><td>$384.02</td></tr>
<tr><td colspan="4">Less equipment deposit received September 15, 2026</td><td>-$4,500.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$2,505.02</strong></td></tr>
</tbody></table>
<p>Notes: One year workmanship warranty on installation and wiring. Equipment covered by manufacturer warranties; serial numbers listed on the attached equipment sheet. Customer trained on remote and app on completion.</p>
<p>The tax line in this example applies only to equipment and materials; your state may tax labor too, or treat built-in systems differently. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> once you know the rate and taxable base.</p>

<h2>How to create an AV installation invoice step by step</h2>
<ol>
<li><strong>Start from the signed proposal.</strong> Copy equipment, quantities and labor lines.</li>
<li><strong>Update equipment.</strong> Record any substitutions with customer approval, plus serial numbers.</li>
<li><strong>Add labor by task or time.</strong> Keep task names familiar to the customer: mount TV, install speakers, program remote.</li>
<li><strong>Add change orders.</strong> Extra speakers, extra rooms or rewiring discovered on site need written approval. See our article on <a href="/blog/scope-creep-change-order">scope creep and change orders</a>.</li>
<li><strong>Apply sales tax</strong> to the right lines under your state's rules.</li>
<li><strong>Subtract deposits and progress payments.</strong> Our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to present them.</li>
<li><strong>Add warranty and support terms.</strong></li>
<li><strong>Send the PDF</strong> from the <a href="/invoice-generator">free invoice generator</a> at handover, while the customer is enjoying the system.</li>
</ol>

<h2>Billing new construction and multi-phase projects</h2>
<p>Whole home AV in new construction happens in phases: pre-wire before drywall, trim-out after paint, then equipment install and programming near move-in. Billing each phase separately keeps cash flowing during long builds. A common schedule is a deposit at contract, a payment after pre-wire inspection, another at trim-out and the balance at final programming. Our <a href="/blog/progress-billing">progress billing guide</a> explains how to show completed percentages and previous payments.</p>
<p>When you work for a builder rather than the homeowner, expect purchase orders, insurance certificates, net 30 terms and possible <a href="/blog/retainage-invoice">retainage</a>. Clarify in writing who pays for equipment the homeowner upgrades directly, because builder allowances often cover only a basic package and upgrades are billed to the homeowner.</p>

<h2>Recurring support plans</h2>
<p>Smart home systems need ongoing attention: software updates, Wi-Fi changes, new devices and the inevitable "the remote stopped working" call. Many integrators sell monthly or annual support plans that include remote support, a set number of service visits and discounted labor. Bill support on a separate recurring invoice rather than mixing it into project invoices, list exactly what is included, and state the response time you commit to. If the control platform requires annual licensing or cloud subscription fees, pass them through as separate lines so customers see the vendor cost.</p>

<h2>Common mistakes on AV invoices</h2>
<ul>
<li><strong>No model or serial numbers.</strong> Customers need them for warranty, insurance and support.</li>
<li><strong>Bundling everything into one price.</strong> Separating equipment and labor helps with tax and shows the value of your work.</li>
<li><strong>Underbilling programming.</strong> Programming often takes longer than physical installation; track and bill it.</li>
<li><strong>Unclear deposit refund rules.</strong> Special order and opened equipment may not be returnable. Say so in writing.</li>
<li><strong>Customer-supplied equipment without a note.</strong> If the TV fails, the customer should know the warranty is between them and the seller.</li>
<li><strong>Skipping licensing rules.</strong> Line voltage work and some cabling require licenses in many states.</li>
<li><strong>Vague warranty terms.</strong> The FTC's <a href="https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law">guide to federal warranty law</a> explains disclosure rules for written warranties on consumer products.</li>
</ul>

<h2>Related templates for tech service businesses</h2>
<p>Many AV companies also fix and support the devices they install. The new <a href="/blog/computer-repair-invoice-template">computer repair invoice template</a> covers diagnostics and data recovery, and the <a href="/blog/phone-repair-invoice-template">phone repair invoice template</a> covers screen and battery jobs. For hourly support billing, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<p>A strong AV installation invoice lists equipment with model and serial numbers, mounting and wiring, programming time, deposits and warranty terms, so customers understand the value of a professional install and pay without questions. Create one in our free invoice generator: it needs no sign-up, builds the PDF in your browser and lets you download it instantly. More layouts are on the <a href="/invoice-templates">invoice templates</a> page.</p>
`,
  },
  {
    slug: "mobile-mechanic-invoice-template",
    title: "Mobile Mechanic Invoice Template (Free + Example)",
    description:
      "Mobile mechanic invoice template with parts, labor, call-out fee, warranty and state auto repair disclosure rules, plus a worked example invoice you can copy.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["auto-repair-invoice-template", "service-call-fee", "towing-invoice-template"],
    faqs: [
      {
        q: "Do mobile mechanics need to give written estimates?",
        a: "In many states, yes. California's Automotive Repair Act, for example, requires registered repair dealers, including mobile operators, to give a written estimate and get the customer's authorization before work starts and before exceeding the estimate. Other states such as Florida have motor vehicle repair laws with similar estimate and invoice rules. Even where it is not required, a written estimate prevents most disputes.",
      },
      {
        q: "How much should a mobile mechanic charge for a call-out fee?",
        a: "Call-out fees vary by market, distance and time of day, so there is no single standard. Many mobile mechanics charge a flat fee that covers travel within a set radius, add a per mile charge beyond it, and charge more for evenings, weekends or roadside emergencies. Some credit the call-out fee toward the repair if the customer approves the work. State your policy before you drive out.",
      },
      {
        q: "Should I charge book time or actual time for labor?",
        a: "Both are common. Book or flat rate labor uses published labor time guides, so the customer pays a predictable price even if the job takes longer. Actual time billing charges for hours worked, which suits diagnostics and unusual jobs. Mobile mechanics often use book time for routine repairs and hourly billing for diagnostics. Whatever you choose, show the hours and rate on the invoice.",
      },
      {
        q: "Do I have to give customers their old parts back?",
        a: "In some states, yes, if the customer asks. California, for example, requires repair dealers to return replaced parts on request, except parts that must go back to the supplier under a warranty or core exchange. Many shops note on the estimate whether the customer wants old parts returned. Recording this on the invoice avoids arguments and shows the work was done.",
      },
      {
        q: "What is a core charge on a mechanic's invoice?",
        a: "A core charge is a refundable deposit on remanufacturable parts such as alternators, starters, brake calipers and batteries. The parts supplier charges it until the old part is returned for rebuilding. If you keep the old part and return it, the core charge is usually credited; if the customer keeps the old part, they pay the core charge. Show it as a separate line so the customer understands it.",
      },
      {
        q: "Do I charge sales tax on parts and labor?",
        a: "Most states with a sales tax tax auto parts sold to the customer. Labor on vehicle repairs is taxed in some states and exempt in others, often only if it is separately stated. Separate parts and labor on every invoice and check your state revenue department's guidance for motor vehicle repair. Environmental and tire disposal fees may also have their own tax rules.",
      },
      {
        q: "What warranty should a mobile mechanic offer?",
        a: "Many independent mechanics offer a limited warranty on labor for a set number of months or miles and pass through the parts manufacturer's warranty. Warranty terms should say what is covered, what is excluded, such as customer-supplied parts or misuse, and how to make a claim. If you install customer-supplied parts, note that you do not warrant the part itself.",
      },
      {
        q: "Can I bill for diagnostics if the customer declines the repair?",
        a: "Yes, as long as you told the customer about the diagnostic fee before starting. Many mobile mechanics charge a diagnostic fee that is credited toward the repair if approved on the spot. Write the fee and the credit policy on your estimate or service agreement, and give the customer a written diagnosis with the invoice so they can see what they paid for.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A mobile mechanic invoice bills a customer for vehicle repairs or maintenance done at their home, workplace or roadside. It lists the vehicle (year, make, model, VIN and mileage), the customer's complaint and diagnosis, each part with part number and whether it is new, used or rebuilt, labor hours and rate, the call-out fee, shop supplies and disposal fees, tax, warranty terms and the amount due.</p>

<p>Mobile mechanics have lower overhead than a shop, but they face the same consumer protection rules and the same customer questions about price. A clear invoice that follows your state's auto repair rules gets you paid on the spot, protects you in disputes and builds the trust that drives repeat business. This guide covers the required details, how to price call-outs and labor, a worked example and the mistakes that cause trouble. Build yours in our <a href="/invoice-generator">free invoice generator</a> right from your phone.</p>

<h2>What is a mobile mechanic invoice?</h2>
<p>A mobile mechanic invoice is the bill an on-site auto mechanic gives after repairing or servicing a vehicle away from a fixed shop. Common jobs include brake pads and rotors, batteries and alternators, starters, belts, oil changes, sensors, diagnostics, fleet maintenance and pre-purchase inspections.</p>
<p>It works like a shop repair order, with a few extras: travel or call-out fees, on-site conditions and often immediate payment by card or app. Our <a href="/blog/auto-repair-invoice-template">auto repair invoice template</a> covers shop-based billing, and this guide adapts it to mobile work.</p>

<h2>What should a mobile mechanic invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Business name, phone, address, state repair dealer registration number where required</td></tr>
<tr><td>Invoice details</td><td>Invoice number, date, estimate number, technician name</td></tr>
<tr><td>Customer</td><td>Name, phone, service location</td></tr>
<tr><td>Vehicle</td><td>Year, make, model, VIN, odometer reading, license plate</td></tr>
<tr><td>Complaint and diagnosis</td><td>What the customer reported, what you found, recommended repairs</td></tr>
<tr><td>Parts</td><td>Description, part number, quantity, price, new/used/rebuilt/aftermarket</td></tr>
<tr><td>Labor</td><td>Description of each operation, hours, rate</td></tr>
<tr><td>Fees</td><td>Call-out or travel fee, diagnostic fee, shop supplies, disposal fees, core charges</td></tr>
<tr><td>Totals</td><td>Parts subtotal, labor subtotal, fees, tax, total, payment received</td></tr>
<tr><td>Terms</td><td>Warranty, old parts returned or not, customer authorization</td></tr>
</tbody></table>

<h2>State auto repair disclosure rules you should know</h2>
<p>Many states regulate auto repair businesses, and the rules usually apply to mobile mechanics as well as shops. Requirements vary, but they commonly cover estimates, authorization, invoices and replaced parts.</p>
<ul>
<li><strong>California:</strong> The <a href="https://www.bar.ca.gov/">Bureau of Automotive Repair</a> registers automotive repair dealers, including mobile operators. Under the Automotive Repair Act, dealers must give a written estimate, get authorization before work and before exceeding the estimate, give an invoice that itemizes parts and labor and identifies used, rebuilt or reconditioned parts, and return replaced parts on request (with exceptions for warranty and core parts).</li>
<li><strong>Florida:</strong> The Florida Motor Vehicle Repair Act requires motor vehicle repair shops to register with the state and sets rules for written estimates and invoices.</li>
<li><strong>Other states:</strong> New York, Michigan, Hawaii and others license or register repair facilities or technicians, and many state attorneys general enforce consumer protection rules on repair estimates and charges.</li>
</ul>
<p>Check your own state's rules before you start taking jobs. The safest default everywhere: written estimate, written authorization for extra work, itemized invoice, parts clearly labeled as new, used or rebuilt, and old parts offered back to the customer.</p>

<h2>How do mobile mechanics price call-outs, labor and parts?</h2>
<p>Rates vary by location, vehicle type and job. The table shows common methods; any numbers in this guide are illustrative, not survey data.</p>
<table><thead><tr><th>Charge</th><th>Common method</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>Call-out or travel fee</td><td>Flat fee within a radius, per mile beyond</td><td>State whether it is credited toward repairs</td></tr>
<tr><td>Diagnostic fee</td><td>Flat fee or first hour</td><td>Attach the written diagnosis or scan results</td></tr>
<tr><td>Labor</td><td>Book time x hourly rate, or actual hours</td><td>Show hours per operation</td></tr>
<tr><td>Parts</td><td>Cost plus markup</td><td>List part numbers and condition</td></tr>
<tr><td>Shop supplies</td><td>Percentage of labor or flat fee</td><td>Cap it and explain what it covers</td></tr>
<tr><td>Disposal fees</td><td>Per item (oil, tires, batteries)</td><td>Some states set tire or battery fees by law</td></tr>
<tr><td>Core charges</td><td>Supplier's core deposit</td><td>Credit it if the core is returned</td></tr>
<tr><td>After hours or roadside</td><td>Premium on call-out or labor</td><td>Disclose before dispatch</td></tr>
</tbody></table>
<p>For more on presenting travel costs, see our guides to the <a href="/blog/service-call-fee">service call fee</a> and <a href="/blog/how-to-bill-for-travel-time">billing for travel time</a>. If you sell parts, the <a href="/blog/materials-markup">materials markup</a> guide explains how other trades set and show margin.</p>

<h2>Example mobile mechanic invoice</h2>
<p>An illustrative driveway brake and battery job.</p>
<p><strong>RoadReady Mobile Auto Repair</strong> (state repair dealer registration on file), Invoice MM-2026-0347, dated October 19, 2026. Customer: Alicia Grant, service at 18 Pine Street. Vehicle: 2019 midsize sedan, VIN on file, odometer 68,412. Complaint: grinding noise when braking; slow crank in the morning. Estimate E-0347 approved by text at 9:12 a.m.; additional battery work approved at 10:05 a.m.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Call-out fee (within 15 miles)</td><td>1</td><td>visit</td><td>$59.00</td><td>$59.00</td></tr>
<tr><td>Front brake pads, ceramic, new aftermarket (part no. on file)</td><td>1</td><td>set</td><td>$68.00</td><td>$68.00</td></tr>
<tr><td>Front brake rotors, new aftermarket</td><td>2</td><td>each</td><td>$72.00</td><td>$144.00</td></tr>
<tr><td>Labor: replace front pads and rotors (book time 1.5 hr)</td><td>1.5</td><td>hr</td><td>$110.00</td><td>$165.00</td></tr>
<tr><td>Battery, group size per OEM spec, new, 36 month warranty</td><td>1</td><td>each</td><td>$189.00</td><td>$189.00</td></tr>
<tr><td>Battery core charge (old battery returned: credited below)</td><td>1</td><td>each</td><td>$22.00</td><td>$22.00</td></tr>
<tr><td>Core credit, old battery returned to supplier</td><td>1</td><td>each</td><td>-$22.00</td><td>-$22.00</td></tr>
<tr><td>Labor: battery test, replace and charging system test</td><td>0.5</td><td>hr</td><td>$110.00</td><td>$55.00</td></tr>
<tr><td>Shop supplies (brake cleaner, lubricant), capped</td><td>1</td><td>each</td><td>$12.00</td><td>$12.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$692.00</strong></td></tr>
<tr><td colspan="4">Sales tax on parts and supplies, illustrative 6.5% of $413.00</td><td>$26.85</td></tr>
<tr><td colspan="4"><strong>Total paid by card October 19, 2026</strong></td><td><strong>$718.85</strong></td></tr>
</tbody></table>
<p>Notes: Old brake parts offered to customer and declined; disposed of. Labor warranted 12 months or 12,000 miles; parts covered by manufacturer warranties. Rear brakes measured at 6 mm, recommend inspection at next service.</p>
<p>The invoice identifies parts as new aftermarket, shows book hours, records both approvals and explains the core charge and credit. Taxable lines vary by state; the example taxes only parts and supplies.</p>

<h2>How to create a mobile mechanic invoice step by step</h2>
<ol>
<li><strong>Write the estimate first</strong> with the complaint, diagnosis and price, and get approval in writing or by text. Our <a href="/blog/estimate-template">estimate template</a> shows the format.</li>
<li><strong>Record the vehicle</strong>: VIN, mileage and plate.</li>
<li><strong>List each part</strong> with part number, condition and price.</li>
<li><strong>Enter labor per operation</strong> with hours and rate.</li>
<li><strong>Add fees</strong>: call-out, diagnostic, supplies, disposal, cores.</li>
<li><strong>Note authorizations</strong> for any work beyond the estimate, with time and method.</li>
<li><strong>Add warranty and old parts notes.</strong></li>
<li><strong>Take payment on the spot</strong> and send the PDF from the <a href="/invoice-generator">free invoice generator</a>, marked paid. A <a href="/blog/payment-receipt-template">payment receipt</a> confirms the payment.</li>
</ol>

<h2>Book time vs actual time: a worked comparison</h2>
<p>Labor is the line customers question most, so it helps to understand how each method plays out. Suppose a labor guide lists 2.0 hours to replace an alternator on a particular vehicle and your rate is $110 per hour (illustrative).</p>
<table><thead><tr><th>Scenario</th><th>Book time billing</th><th>Actual time billing</th></tr></thead><tbody>
<tr><td>Job takes 1.5 hours (easy access, experienced tech)</td><td>2.0 hr x $110 = $220</td><td>1.5 hr x $110 = $165</td></tr>
<tr><td>Job takes 2.0 hours</td><td>$220</td><td>$220</td></tr>
<tr><td>Job takes 3.0 hours (seized bolt, driveway conditions)</td><td>$220</td><td>3.0 hr x $110 = $330</td></tr>
</tbody></table>
<p>Book time gives the customer a firm price and rewards efficient technicians; actual time protects you when something goes wrong. Many mobile mechanics quote book time for common repairs and switch to hourly billing, with approval, if they hit a problem outside the normal job, such as a broken exhaust stud. Whichever you use, say so on the estimate and show the hours on the invoice.</p>

<h2>Customer-supplied parts and on-site conditions</h2>
<p>Mobile customers often buy their own parts online and ask you to fit them. That is fine if you set terms:</p>
<ul>
<li><strong>No parts warranty.</strong> You warrant your labor, not a part you did not source.</li>
<li><strong>Wrong or defective parts.</strong> If the part is wrong or fails on installation, the customer pays for the time spent and any return visit.</li>
<li><strong>Labor rate.</strong> Some mechanics charge a slightly higher labor rate or a handling fee when customers supply parts, because they lose the parts margin and take on more risk.</li>
</ul>
<p>Write "customer-supplied part" next to the part on the invoice, with a price of zero, so the record is complete.</p>
<p>On-site conditions also matter. Jobs that need a lift, specialized tools or a level surface may not be possible in a driveway or parking lot. If you arrive and find the job cannot be done safely, bill only the call-out and any diagnostic time you disclosed in advance, and recommend a shop or a <a href="/blog/towing-invoice-template">tow</a>. Some apartment complexes and HOAs ban vehicle repairs on site, so ask about location rules when booking.</p>

<h2>Billing fleet and business customers</h2>
<p>Fleet maintenance for contractors, delivery companies and car rental operators is steady work for mobile mechanics. Fleet customers usually want monthly or weekly consolidated invoices listing each vehicle by unit number, plate or VIN, with mileage, the work done and the purchase order or approval reference. They often pay on net 30 terms and may set a dollar limit above which you must call for approval.</p>
<p>Agree on a written service agreement covering rates, approval limits, preferred parts brands, response times and invoice format. Our guide to <a href="/blog/consolidated-invoice">consolidated invoices</a> explains how to group many jobs into one bill without losing detail. Keep separate per vehicle records anyway, because fleet managers track maintenance costs by unit.</p>

<h2>Getting paid before you leave the driveway</h2>
<p>Unlike a shop, a mobile mechanic cannot hold the car until the bill is paid, so payment terms matter more. Practical steps that work:</p>
<ul>
<li><strong>Take a card on file or a deposit for parts</strong> when booking larger jobs, especially when you order special parts that cannot be returned.</li>
<li><strong>Accept several payment methods</strong> on site: card reader, payment link by text, and bank transfer apps where customers prefer them.</li>
<li><strong>Send the invoice before you pack up</strong>, walk the customer through it, and take payment while you are still there to answer questions.</li>
<li><strong>Use net terms only for approved accounts</strong> such as fleets and businesses with a signed service agreement.</li>
</ul>
<p>Write your payment policy on the estimate: "Payment due on completion" is clear and common. If a customer cannot pay on the day, a short written payment plan is better than an open balance with no due date.</p>

<h2>Common mistakes on mobile mechanic invoices</h2>
<ul>
<li><strong>Starting work without written approval.</strong> In regulated states this can make the charge unenforceable.</li>
<li><strong>Not labeling used or rebuilt parts.</strong> Several states require it, and customers expect it.</li>
<li><strong>Hiding the call-out fee.</strong> Disclose it before you drive out.</li>
<li><strong>Vague labor lines.</strong> "Labor: $300" invites disputes. Show operations and hours.</li>
<li><strong>Unlimited shop supply fees.</strong> Cap them and explain what they cover.</li>
<li><strong>No VIN or mileage.</strong> Both matter for warranty claims and fleet records.</li>
<li><strong>Weak warranty language.</strong> The FTC's <a href="https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law">guide to federal warranty law</a> explains how written warranties should be presented.</li>
</ul>

<h2>Related templates for vehicle service businesses</h2>
<p>Mobile mechanics often work alongside other vehicle services. Towing companies use their own templates for roadside recoveries, while the <a href="/blog/car-detailing-invoice-template">car detailing invoice template</a> covers appearance work, and the new <a href="/blog/boat-repair-invoice-template">boat repair invoice template</a> suits mechanics who also service marine engines.</p>

<p>A mobile mechanic invoice that names the vehicle, parts, labor, fees, approvals and warranty gets you paid before you leave the driveway and keeps you on the right side of state repair laws. Make yours in our free invoice generator: it is free, needs no sign-up and builds a PDF in your browser that you can download and text or email to the customer.</p>
`,
  },
  {
    slug: "phone-repair-invoice-template",
    title: "Phone Repair Invoice Template: Free Example + Disclaimers",
    description:
      "Phone repair invoice template for screen, battery and charging port jobs: parts grades, IMEI, warranty and data disclaimer wording, plus a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "computer-repair-invoice-template",
      "appliance-repair-invoice-template",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "Should a phone repair invoice include the IMEI or serial number?",
        a: "Yes. The IMEI or serial number identifies the exact device you repaired, which protects you if a customer later claims a different phone was damaged or that parts were swapped. It also helps with warranty claims and stolen device checks. Record it on the intake ticket and repeat it on the final invoice, along with the model and color.",
      },
      {
        q: "What should a phone repair data disclaimer say?",
        a: "A data disclaimer should tell the customer to back up their device before repair, state that repairs can result in data loss and that your shop is not responsible for lost data, photos or settings, and explain whether you access the device during testing. Ask for the passcode only if needed for testing, and record whether the customer provided it. Have the customer sign or accept the terms at intake.",
      },
      {
        q: "How long should a phone repair warranty be?",
        a: "Many independent repair shops offer a limited warranty of several months to a year on parts and labor, sometimes longer for premium parts. The warranty usually excludes new physical damage, liquid damage and repairs by others. Whatever you choose, write it clearly on the invoice, including how to make a claim and what happens if the device needs to be sent away.",
      },
      {
        q: "Do I have to tell customers if I use aftermarket parts?",
        a: "Honesty about part quality is both good practice and important under consumer protection laws that prohibit misleading claims. List the part grade on the invoice, such as genuine, original equipment, refurbished original or aftermarket. Some phones show a notice in settings when non-genuine parts are installed, so telling customers upfront avoids surprises and complaints later.",
      },
      {
        q: "Can I charge a diagnostic fee for phone repair?",
        a: "Yes, if you disclose it before you start. Many shops offer free quick checks for obvious issues like cracked screens, but charge a diagnostic fee for liquid damage, no power or intermittent faults that need disassembly. A common approach is to credit the diagnostic fee toward the repair if the customer approves it. Write the policy on the intake ticket and the invoice.",
      },
      {
        q: "What happens to devices customers never pick up?",
        a: "Unclaimed devices are a real issue for repair shops. State in your intake terms how long you will store a device, what storage fees apply and what notice you will send before disposing of it. State laws on abandoned property vary, so check local rules before recycling or selling unclaimed devices, and keep records of your contact attempts.",
      },
      {
        q: "Do I charge sales tax on phone repairs?",
        a: "Parts sold as part of a repair are taxable in most states with a sales tax, while repair labor is taxable in some states and exempt in others. Separating parts and labor on the invoice makes it easier to apply the right rule. Accessories like cases and screen protectors are usually taxable. Check your state's guidance on repair services.",
      },
      {
        q: "Should I give a receipt or an invoice for walk-in phone repairs?",
        a: "For a walk-in customer who pays at pickup, a paid invoice works as both: it lists the repair, parts and warranty and shows the payment received. Business customers or schools may need an invoice before paying, often on net terms. Either way, the document should show the device details and warranty, since customers will need it if the repair fails.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A phone repair invoice bills a customer for fixing a smartphone or tablet. It lists the device model, IMEI or serial number, the fault reported, the repair done (for example screen, battery or charging port replacement), the part grade used, labor, any diagnostic fee, the warranty period, a data loss disclaimer, payment received and the balance due.</p>

<p>Phone repair is fast, high volume work, and many shops still hand out handwritten tickets. That works until a warranty claim, a dispute about a scratched frame or a question about which parts were used. A clear invoice records the device, the part grade and your terms, and it doubles as a warranty card. This guide explains what to include, how to word disclaimers, how shops typically price repairs and how a complete invoice looks. You can build it in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a phone repair invoice?</h2>
<p>A phone repair invoice is the bill a cell phone repair shop, mall kiosk, mobile repair technician or electronics store issues after repairing a phone, tablet or smartwatch. It records what was fixed and what the customer paid, and it often carries the shop's warranty and liability terms.</p>
<p>Most shops use a two step process: an intake ticket or work order when the device is dropped off, and an invoice at pickup. The intake ticket captures condition, passcode consent and the quoted price; the invoice confirms the final work. If you also repair laptops, see our <a href="/blog/computer-repair-invoice-template">computer repair invoice template</a>, and for general repair billing, the <a href="/blog/appliance-repair-invoice-template">appliance repair invoice template</a> uses a similar structure.</p>

<h2>What should a phone repair invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Shop details</td><td>Business name, address, phone, website</td></tr>
<tr><td>Ticket and invoice</td><td>Invoice number, intake ticket number, intake date, pickup date</td></tr>
<tr><td>Customer</td><td>Name, phone, email</td></tr>
<tr><td>Device</td><td>Brand, model, color, storage, IMEI or serial number</td></tr>
<tr><td>Condition at intake</td><td>Cracks, dents, scratches, liquid indicators, powers on or not</td></tr>
<tr><td>Fault and repair</td><td>Customer's reported issue, diagnosis, repair performed</td></tr>
<tr><td>Parts</td><td>Part name, grade (genuine, OEM, refurbished, aftermarket), price</td></tr>
<tr><td>Labor and fees</td><td>Repair labor, diagnostic fee, rush fee, mail-in shipping</td></tr>
<tr><td>Totals</td><td>Subtotal, tax, total, payment method, amount paid</td></tr>
<tr><td>Terms</td><td>Warranty, data disclaimer, liquid damage note, unclaimed device policy</td></tr>
</tbody></table>
<p>Use sequential invoice numbers so each repair is easy to find later. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a format that includes the date or store location.</p>

<h2>How much do phone repairs cost?</h2>
<p>Repair prices depend heavily on the model and part grade: a recent flagship screen can cost several times more than an older model's, and genuine parts cost more than aftermarket. Prices also change often as new models launch and part supply shifts, so most shops keep a price list by model and review it regularly. The table shows typical pricing structures rather than market rates.</p>
<table><thead><tr><th>Repair</th><th>Pricing method</th><th>Invoice details</th></tr></thead><tbody>
<tr><td>Screen replacement</td><td>Flat price by model and part grade</td><td>Part grade, whether frame or back glass included</td></tr>
<tr><td>Battery replacement</td><td>Flat price by model</td><td>Part grade, battery health before and after if shown</td></tr>
<tr><td>Charging port</td><td>Flat price by model</td><td>Cleaning vs replacement</td></tr>
<tr><td>Back glass</td><td>Flat price by model</td><td>Method (laser or full housing)</td></tr>
<tr><td>Camera or lens</td><td>Flat price by model</td><td>Which camera</td></tr>
<tr><td>Liquid damage</td><td>Diagnostic fee plus repair quote</td><td>No guarantee of recovery</td></tr>
<tr><td>Board level repair</td><td>Quote after diagnosis</td><td>Component replaced, testing done</td></tr>
<tr><td>Data recovery</td><td>Quote, often no data no fee</td><td>What was recovered and how it was delivered</td></tr>
</tbody></table>
<p>Many shops charge a rush fee for same hour service or a mail-in fee for remote customers. Show these as separate lines; see our guide to the <a href="/blog/rush-fee">rush fee</a> for wording.</p>

<h2>Parts grades and how to describe them</h2>
<p>Customers increasingly ask what kind of part went into their phone, and some phones display a notice when non-genuine parts are installed. Being specific protects you from misrepresentation complaints.</p>
<ul>
<li><strong>Genuine:</strong> sourced from the manufacturer's own parts program.</li>
<li><strong>Original pulled or refurbished:</strong> original parts removed from other devices, sometimes with refurbished glass.</li>
<li><strong>Aftermarket premium:</strong> third party parts made to a higher standard, for example certain OLED screens.</li>
<li><strong>Aftermarket standard:</strong> lower cost third party parts, such as LCD replacements for OLED screens, which can look and perform differently.</li>
</ul>
<p>Offer tiered pricing by grade, explain the differences at intake, and write the chosen grade on the invoice. If a customer chooses a lower grade, note it to avoid complaints later about brightness, color or touch response.</p>

<h2>Warranty and data disclaimer wording</h2>
<p>Your terms do more to prevent disputes than any other part of the invoice. Short, plain wording works best. Example clauses you can adapt:</p>
<ul>
<li><strong>Warranty:</strong> "Parts and labor for the repair listed above are warranted for 180 days from pickup against defects. The warranty does not cover new physical damage, liquid damage, or repairs or opening by others."</li>
<li><strong>Data:</strong> "Customer is responsible for backing up all data before repair. We are not responsible for loss of data, photos, apps or settings."</li>
<li><strong>Liquid damage:</strong> "Devices with liquid damage may fail at any time. Repairs on liquid damaged devices carry no warranty beyond the part replaced."</li>
<li><strong>Pre-existing conditions:</strong> "Conditions noted at intake are not the result of our repair."</li>
<li><strong>Unclaimed devices:</strong> "Devices not collected within 60 days after notice may be recycled, subject to applicable law."</li>
</ul>
<p>Written warranties on consumer products are subject to federal rules; the FTC's <a href="https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law">guide to federal warranty law</a> explains disclosure requirements. Our guide to <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a> covers how to present terms clearly. The example periods above are illustrative; choose terms that fit your parts and supplier warranties.</p>

<h2>Example phone repair invoice</h2>
<p>An illustrative walk-in repair with example prices.</p>
<p><strong>FixPoint Phone Repair</strong>, Invoice FP-2026-1893, intake ticket T-5521. Intake October 25, 2026, 11:20 a.m.; picked up 1:05 p.m. Customer: Sam Rivera. Device: smartphone, 128 GB, black, IMEI on file. Condition at intake: shattered display, touch partially working, small dent on lower left corner, liquid indicator not triggered. Passcode not provided; customer tested at pickup.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Screen assembly, aftermarket premium OLED</td><td>1</td><td>$149.00</td><td>$149.00</td></tr>
<tr><td>Screen replacement labor and adhesive seal</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Battery, aftermarket, new cell</td><td>1</td><td>$49.00</td><td>$49.00</td></tr>
<tr><td>Battery replacement labor (bundle price with screen)</td><td>1</td><td>$20.00</td><td>$20.00</td></tr>
<tr><td>Tempered glass screen protector, installed</td><td>1</td><td>$15.00</td><td>$15.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$283.00</strong></td></tr>
<tr><td colspan="3">Sales tax on parts and accessories, illustrative 8% of $213.00</td><td>$17.04</td></tr>
<tr><td colspan="3"><strong>Total paid by card</strong></td><td><strong>$300.04</strong></td></tr>
</tbody></table>
<p>Warranty: 180 days parts and labor from pickup, excluding new physical or liquid damage. Data disclaimer accepted at intake. Dent noted at intake is pre-existing. Device may show a notice that a non-genuine display is installed.</p>
<p>The intake condition, IMEI, part grades and terms all appear on one page. Labor taxability varies by state; this example taxes only parts and accessories.</p>

<h2>How to create a phone repair invoice step by step</h2>
<ol>
<li><strong>Complete an intake ticket</strong> with device details, IMEI, condition and quoted price. A simple <a href="/blog/work-order-template">work order template</a> works.</li>
<li><strong>Get the customer's acceptance</strong> of your data, warranty and passcode terms.</li>
<li><strong>Repair and test</strong> the device, recording any new findings.</li>
<li><strong>Add parts with grades</strong> and labor lines.</li>
<li><strong>Add fees</strong> if applicable: diagnostic, rush, mail-in shipping.</li>
<li><strong>Apply tax</strong> based on your state's rules for repair services.</li>
<li><strong>Take payment</strong> and mark the invoice paid; our <a href="/blog/paid-invoice-template">paid invoice template</a> shows how.</li>
<li><strong>Send the PDF</strong> by email or text from the <a href="/invoice-generator">free invoice generator</a> so the customer has the warranty on file.</li>
</ol>

<h2>Offering good, better, best repair options</h2>
<p>Many shops increase average ticket value and reduce complaints by offering two or three part grades at different prices, then letting the customer choose at intake. For a screen repair, an illustrative menu might be:</p>
<table><thead><tr><th>Option</th><th>Part</th><th>Example price</th><th>Warranty</th></tr></thead><tbody>
<tr><td>Economy</td><td>Aftermarket LCD</td><td>$129</td><td>90 days</td></tr>
<tr><td>Standard</td><td>Aftermarket premium OLED</td><td>$199</td><td>180 days</td></tr>
<tr><td>Premium</td><td>Genuine or original refurbished OLED</td><td>$279</td><td>1 year</td></tr>
</tbody></table>
<p>Write the chosen option on the intake ticket and the invoice. When customers pick the economy option and later notice a dimmer display, the record shows it was their informed choice. Longer warranties on higher grades also make the premium option easier to sell.</p>

<h2>Mail-in and on-site repairs</h2>
<p>Mail-in repair services reach customers far from a store, but they add steps that should appear on the invoice: inbound shipping or a prepaid label, return shipping with tracking, and insurance on the device. Inspect and photograph the device on arrival, because shipping damage claims depend on proof of condition. Send the customer a quote after inspection and wait for approval before repairing.</p>
<p>On-site or mobile phone repair, where the technician comes to a home or office, usually carries a travel fee or higher prices. Show it as its own line, such as "On-site service fee", so customers can compare it with a store visit. For business clients, on-site repairs during working hours often justify the fee because staff are not without their phones for long.</p>

<h2>Business, school and insurance repairs</h2>
<p>Corporate and school accounts often send batches of devices and expect one invoice per batch on net terms, with each device listed by asset tag or serial number. Agree on pricing per model in advance and get a purchase order. Customers repairing a phone under an insurance or protection plan claim may need an itemized invoice with the device IMEI, the damage description and the repair cost to submit for reimbursement; keep your invoice detailed enough for that purpose. If a repair fails and you issue a refund, document it with a credit note rather than editing the original invoice; our <a href="/blog/credit-note-guide">credit note guide</a> explains how.</p>

<h2>Records to keep for every repair</h2>
<p>Repair shops handle a large volume of small tickets, and good records protect you when a warranty claim or dispute comes in months later. For each repair, keep:</p>
<ul>
<li>The intake ticket with the customer's acceptance of your terms</li>
<li>Photos of the device at intake, especially any existing damage</li>
<li>The final invoice with IMEI or serial number and part grades</li>
<li>Your supplier invoice or batch reference for the part used, so you can claim supplier warranty if it fails</li>
<li>Payment records, including refunds and credit notes</li>
</ul>
<p>Some states and cities require secondhand dealers or electronics buyers to keep records and check devices against stolen property databases. These rules usually apply to buying and selling used devices rather than repairing them, but check local requirements if you also buy phones for refurbishment. Digital invoices are far easier to search than paper tickets when you need to find one repair among thousands.</p>

<h2>Common mistakes on phone repair invoices</h2>
<ul>
<li><strong>No IMEI or serial number.</strong> Without it you cannot prove which device you repaired.</li>
<li><strong>Not recording intake condition.</strong> Pre-existing dents and cracks become your problem if not noted.</li>
<li><strong>Vague part descriptions.</strong> "Screen" is not enough. State the grade.</li>
<li><strong>No data disclaimer.</strong> Data loss claims are among the most common disputes.</li>
<li><strong>Warranty without exclusions.</strong> Spell out liquid and physical damage exclusions.</li>
<li><strong>Handwritten tickets only.</strong> They fade, get lost and are hard to search when a warranty claim arrives.</li>
</ul>

<h2>Related templates for repair shops</h2>
<p>Phone repair shops often sell related services. The new <a href="/blog/computer-repair-invoice-template">computer repair invoice template</a> covers laptops and desktops, and the <a href="/blog/av-installation-invoice-template">AV installation invoice template</a> covers TV mounting and home theater work. For walk-in transactions, compare the <a href="/blog/payment-receipt-template">payment receipt template</a>.</p>

<p>A complete phone repair invoice records the device, IMEI, intake condition, part grades, warranty and disclaimer in one place, protecting both you and your customer. Create one in our free invoice generator: no sign-up is needed, the PDF is built in your browser and you can download it and send it in seconds.</p>
`,
  },
  {
    slug: "computer-repair-invoice-template",
    title: "Computer Repair Invoice Template (Free PDF + Example)",
    description:
      "Computer repair invoice template with diagnostic fees, hourly vs flat rates, parts, data recovery and on-site lines, plus a worked laptop repair example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "it-managed-services-invoice-template",
      "phone-repair-invoice-template",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "Should computer repair be billed hourly or at a flat rate?",
        a: "Both work. Flat rates suit common, predictable jobs such as screen or battery replacements, OS reinstalls and virus removal, because customers like knowing the price upfront. Hourly billing suits troubleshooting, networking, data migration and business support where the time needed is unknown. Many shops use flat rates for bench work and hourly rates for on-site and business clients, and state both on their rate sheet.",
      },
      {
        q: "Is it normal to charge a diagnostic fee for computer repair?",
        a: "Yes. Many repair shops charge a diagnostic or bench fee to cover the time needed to find the fault, often credited toward the repair if the customer approves it. Some offer free diagnostics on simple issues to win the job. Disclose the fee at intake, explain whether it is credited, and give the customer a written diagnosis with the invoice if they decline the repair.",
      },
      {
        q: "How should data recovery be priced and invoiced?",
        a: "Data recovery is often priced by difficulty: logical recovery from a working drive with deleted files or corruption costs less than physical recovery from a failed drive that needs parts or clean room work. Many providers use a no data, no fee policy with an evaluation fee. The invoice should describe the media, the type of recovery, what was recovered and the delivery method, such as a new external drive.",
      },
      {
        q: "Do I need permission to access customer files during a repair?",
        a: "You should get written permission, limit access to what the repair requires and protect any passwords you receive. Your intake form should state whether you need the login password, that you will not browse personal files beyond what is needed, and how you handle data during transfers. Some states have privacy and data breach laws that apply if you store customer data, so keep copies only as long as needed.",
      },
      {
        q: "What should I charge for on-site computer repair?",
        a: "On-site work usually carries a higher rate than bench work because of travel time and the inability to multitask. Common approaches are a trip charge plus hourly billing with a one hour minimum, or a higher hourly rate that includes travel within a set area. List the time on site, the travel fee and what was done so business clients can approve the invoice quickly.",
      },
      {
        q: "Do I charge sales tax on computer repair?",
        a: "Parts and software sold to the customer are usually taxable in states with a sales tax. Repair labor is taxable in some states and exempt in others, and some states tax certain IT services. Separate parts, labor and software on your invoices, then check your state's rules. Remote support and managed services may be treated differently from repairs.",
      },
      {
        q: "How long should I keep unclaimed computers?",
        a: "Set a clear storage policy in your intake terms, such as a number of days after you notify the customer that the repair is complete, with storage fees after that. State laws on abandoned property vary, so check yours before disposing of a device. Because computers contain personal data, any disposal should include secure data sanitization following recognized guidelines.",
      },
      {
        q: "Should I offer a warranty on computer repairs?",
        a: "Most shops warrant their labor for a set period, such as 30 to 90 days, and pass through the manufacturer's warranty on new parts. Software work like virus removal is usually warranted for a short time or not at all, because new infections can come from user behavior. Write the warranty on the invoice so the customer knows exactly what is covered.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A computer repair invoice bills a customer for diagnosing and fixing a laptop, desktop or related hardware. It lists the device make, model and serial number, the problem reported, the diagnostic fee, labor billed hourly or at flat rates, parts with prices, software or data recovery work, on-site or trip charges, warranty terms, payment received and the balance due.</p>

<p>Computer repair covers everything from a five minute RAM upgrade to a week long data recovery job, so pricing and invoices need to be flexible. A clear invoice explains what you did, why it took the time it did and what the customer's data rights are. This guide covers the line items computer repair technicians use, how to choose between hourly and flat rate pricing, data handling disclosures, a worked example and common mistakes. You can create the invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a computer repair invoice?</h2>
<p>A computer repair invoice is the bill a computer repair shop, freelance technician or IT support company sends after fixing hardware or software problems. Customers range from home users with a slow laptop to small businesses with failed servers. The invoice records the device, the work done, parts used and the charges.</p>
<p>Computer repair overlaps with other tech services. For ongoing business support with monthly retainers, see the <a href="/blog/it-managed-services-invoice-template">IT managed services invoice template</a>. For security-focused work, the <a href="/blog/cybersecurity-consultant-invoice-template">cybersecurity consultant invoice template</a> fits better. Shops that also fix phones can use the new <a href="/blog/phone-repair-invoice-template">phone repair invoice template</a>.</p>

<h2>What should a computer repair invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, address, phone, email</td></tr>
<tr><td>Ticket and invoice</td><td>Invoice number, ticket number, intake and completion dates</td></tr>
<tr><td>Customer</td><td>Name, company, contact details, PO number for business clients</td></tr>
<tr><td>Device</td><td>Type, brand, model, serial number, accessories received (charger, bag)</td></tr>
<tr><td>Problem and diagnosis</td><td>Reported issue, tests run, findings</td></tr>
<tr><td>Labor</td><td>Flat rate services or hours with rate</td></tr>
<tr><td>Parts and software</td><td>Description, quantity, price, warranty</td></tr>
<tr><td>Data work</td><td>Backup, transfer or recovery details and destination media</td></tr>
<tr><td>Fees</td><td>Diagnostic, trip, rush, disposal</td></tr>
<tr><td>Terms</td><td>Warranty, data disclaimer, payment terms, unclaimed device policy</td></tr>
</tbody></table>
<p>Listing accessories received prevents disputes about missing chargers, and recording the serial number ties the invoice to one specific machine.</p>

<h2>Common computer repair services and how to bill them</h2>
<table><thead><tr><th>Service</th><th>Usual billing</th><th>What to note on the invoice</th></tr></thead><tbody>
<tr><td>Virus and malware removal</td><td>Flat rate</td><td>Tools used, items removed, security software installed</td></tr>
<tr><td>OS reinstall or reset</td><td>Flat rate plus data backup</td><td>OS version, drivers, apps reinstalled</td></tr>
<tr><td>SSD or RAM upgrade</td><td>Parts plus flat labor</td><td>Capacity, brand, cloning or fresh install</td></tr>
<tr><td>Laptop screen, keyboard or battery</td><td>Parts plus flat labor</td><td>Part source and warranty</td></tr>
<tr><td>Motherboard or component repair</td><td>Quote after diagnosis</td><td>Component replaced, testing done</td></tr>
<tr><td>Custom PC build</td><td>Parts plus build fee</td><td>Component list, stress testing results</td></tr>
<tr><td>Network or printer setup</td><td>Hourly, often on-site</td><td>Devices configured, credentials handed over</td></tr>
<tr><td>Data transfer to a new computer</td><td>Flat rate by data size</td><td>Amount transferred, apps and profiles migrated</td></tr>
<tr><td>Remote support session</td><td>Hourly or per session</td><td>Session time, issue, fix</td></tr>
</tbody></table>
<p>Keeping a published rate sheet with these services makes quoting fast and invoices consistent between technicians. Review it when part costs change, especially for SSDs and memory, which move in price more than labor does.</p>

<h2>Hourly vs flat rate computer repair pricing</h2>
<p>Most repair businesses blend the two. The comparison below helps you choose for each service. Figures in this guide are illustrative, not survey data.</p>
<table><thead><tr><th>Factor</th><th>Flat rate</th><th>Hourly</th></tr></thead><tbody>
<tr><td>Best for</td><td>Common, repeatable jobs: screen, battery, SSD upgrade, OS reinstall, virus removal</td><td>Troubleshooting, networking, data migration, business support</td></tr>
<tr><td>Customer view</td><td>Predictable and easy to compare</td><td>Fair for unknown problems, but harder to budget</td></tr>
<tr><td>Your risk</td><td>You absorb jobs that take longer</td><td>Customer bears time risk</td></tr>
<tr><td>Invoice detail</td><td>Service name and price</td><td>Time entries with dates, tasks and rate</td></tr>
<tr><td>Typical add-ons</td><td>Parts, data backup</td><td>Trip charge, minimum billing increment</td></tr>
</tbody></table>
<p>For hourly work, state your billing increment (for example 15 minutes after the first hour) and keep time logs. Our guides on <a href="/blog/how-to-invoice-for-hourly-work">invoicing hourly work</a> and <a href="/blog/time-and-materials-invoice">time and materials invoices</a> show clean formats. If you charge more for urgent work, list it separately as a <a href="/blog/rush-fee">rush fee</a>.</p>

<h2>Diagnostic fees, bench fees and on-site charges</h2>
<p>Diagnostics often take as long as the repair itself, especially for intermittent faults, so most shops charge for them. Three common models:</p>
<ol>
<li><strong>Free diagnostic</strong> for simple issues, as a marketing tool.</li>
<li><strong>Diagnostic fee credited toward repair</strong> if approved, which is the most common.</li>
<li><strong>Flat bench fee</strong> that covers diagnosis and a set amount of labor.</li>
</ol>
<p>On-site work is different: you cannot work on several machines at once and you spend time driving. Charge a trip fee or a minimum on-site time and explain it in advance. The guides to the <a href="/blog/service-call-fee">service call fee</a> and <a href="/blog/how-to-bill-for-travel-time">billing for travel time</a> show how other trades handle this.</p>

<h2>Data recovery, privacy and disposal</h2>
<p>Data is the most sensitive part of computer repair. Your intake terms and invoice should cover:</p>
<ul>
<li><strong>Backup responsibility.</strong> The customer should back up data before repair; if you offer backup as a service, bill it as its own line.</li>
<li><strong>Access.</strong> Whether you need the login password, and a promise to access only what the repair requires.</li>
<li><strong>Recovery type.</strong> Logical recovery (deleted files, corrupted partitions on a working drive) versus physical recovery (failed heads, motor or controller), which may require a specialist lab.</li>
<li><strong>What was recovered.</strong> Folders or file types and the media you returned them on.</li>
<li><strong>Old drives.</strong> Whether the customer took the old drive or you sanitized and recycled it. Many technicians follow NIST Special Publication 800-88 guidelines for media sanitization when wiping or destroying drives.</li>
</ul>
<p>For business clients handling health, financial or customer data, their own compliance obligations may require specific handling or a written agreement before you take a device off site.</p>

<h2>Example computer repair invoice</h2>
<p>An illustrative laptop repair with data transfer, using example prices.</p>
<p><strong>ByteFix Computer Repair</strong>, Invoice BF-2026-0612, ticket 4417. Intake October 20, 2026; completed October 22, 2026. Customer: Harper Lane Design Studio, attn. N. Patel, PO 2026-118. Device: 15 in laptop, serial on file, charger received. Problem: slow, frequent freezes, drive warnings at startup. Diagnosis: failing hard drive with reallocated sectors; RAM 8 GB fully used.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Diagnostic fee</td><td>1</td><td>each</td><td>$69.00</td><td>$69.00</td></tr>
<tr><td>Diagnostic credit applied (repair approved)</td><td>1</td><td>each</td><td>-$69.00</td><td>-$69.00</td></tr>
<tr><td>1 TB SSD, new, 5 year manufacturer warranty</td><td>1</td><td>each</td><td>$89.00</td><td>$89.00</td></tr>
<tr><td>16 GB RAM kit (2 x 8 GB), new</td><td>1</td><td>each</td><td>$54.00</td><td>$54.00</td></tr>
<tr><td>Drive replacement and RAM upgrade labor (flat rate)</td><td>1</td><td>each</td><td>$99.00</td><td>$99.00</td></tr>
<tr><td>Data transfer from failing drive (approx. 310 GB), logical recovery</td><td>1</td><td>each</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>OS reinstall, updates and app setup</td><td>1.5</td><td>hr</td><td>$85.00</td><td>$127.50</td></tr>
<tr><td>Old drive sanitized and recycled (customer declined return)</td><td>1</td><td>each</td><td>$15.00</td><td>$15.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$504.50</strong></td></tr>
<tr><td colspan="4">Sales tax on parts, illustrative 7% of $143.00</td><td>$10.01</td></tr>
<tr><td colspan="4"><strong>Total due (net 15)</strong></td><td><strong>$514.51</strong></td></tr>
</tbody></table>
<p>Notes: 90 day labor warranty; parts covered by manufacturer warranties. Recovered folders: Documents, Desktop, Pictures, Projects. Two files in Projects were unreadable and are listed on the attached report. Customer confirmed data on pickup.</p>
<p>The invoice shows the diagnostic credit, separates parts from labor, explains data work and documents what happened to the old drive. Whether labor is taxable depends on your state.</p>

<h2>How to create a computer repair invoice step by step</h2>
<ol>
<li><strong>Complete intake</strong>: device, serial, accessories, problem description, data and password terms. A <a href="/blog/work-order-template">work order template</a> can serve as your intake ticket.</li>
<li><strong>Diagnose and quote</strong>, then get approval before parts are ordered.</li>
<li><strong>Record time and parts</strong> as you work.</li>
<li><strong>Enter flat rate services and hourly lines</strong>, using your billing increment.</li>
<li><strong>Apply credits</strong> such as the diagnostic fee.</li>
<li><strong>Add data notes</strong>: what was transferred, recovered and how old media was handled.</li>
<li><strong>Apply tax</strong> by your state's rules and add terms.</li>
<li><strong>Send the PDF</strong> from the <a href="/invoice-generator">free invoice generator</a> with your invoice number and due date.</li>
</ol>

<h2>Billing business clients and support blocks</h2>
<p>Small businesses often want predictable IT costs. Two options work well alongside one-off repairs:</p>
<ul>
<li><strong>Prepaid hour blocks:</strong> the client buys a block of hours at a discount, and each invoice shows hours used and remaining.</li>
<li><strong>Monthly support plans:</strong> a fixed fee covering remote support, monitoring and a set amount of on-site time, invoiced monthly on recurring terms.</li>
</ul>
<p>Business clients usually need invoices with their PO number, the user or asset tag for each device, and net 15 or net 30 terms. Group multiple tickets into one monthly invoice if the client prefers, but keep time entries detailed enough that the office manager can see which employee's machine took the time.</p>

<h2>Invoicing remote support</h2>
<p>Remote support sessions are now a large share of many technicians' work. They need the same care as on-site jobs: log the start and end time from your remote access tool, describe the issue and fix, and bill in your stated increments. Get the customer's consent before connecting, and end sessions cleanly so access does not remain open. For small jobs, many technicians bill a minimum session charge rather than tiny fractions of an hour, and say so on the rate sheet.</p>
<p>Group remote sessions for business clients into a weekly or monthly invoice with one line per session, including the user helped. This gives managers a clear picture of support demand and makes it easier to propose a monthly support plan later.</p>

<h2>Deposits, payment terms and unclaimed machines</h2>
<p>For walk-in customers, most shops take payment at pickup and release the device once paid. For expensive parts such as replacement motherboards, laptop screens or custom build components, a parts deposit protects you if the customer changes their mind after you order. State on the intake form that special order parts are non-refundable once ordered.</p>
<p>Business clients usually receive invoices on net 15 or net 30 terms. Put the due date, accepted payment methods and late fee policy on every invoice, and send reminders before the due date rather than after. If a home customer never collects a repaired machine, follow the storage and notice policy in your intake terms, keep records of each contact, and sanitize any storage media before disposal. A clear policy, applied consistently, avoids both lost revenue and data protection problems.</p>

<h2>Common mistakes on computer repair invoices</h2>
<ul>
<li><strong>No serial number or accessories list.</strong> Leads to "that is not my laptop" or "where is my charger" disputes.</li>
<li><strong>Billing diagnostics without disclosure.</strong> Always tell customers about the fee before you start.</li>
<li><strong>Vague labor entries.</strong> "Computer work, 3 hours" is hard to approve. List tasks.</li>
<li><strong>No data disclaimer.</strong> Data loss claims can cost far more than the repair.</li>
<li><strong>Keeping customer data copies.</strong> Delete temporary backups after the customer confirms their data.</li>
<li><strong>Unclear warranty on software work.</strong> Virus removal and OS fixes need specific, limited terms. The FTC's <a href="https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law">guide to federal warranty law</a> covers written warranty basics.</li>
</ul>

<h2>Related templates for tech service businesses</h2>
<p>If you install equipment as well as repair it, the new <a href="/blog/av-installation-invoice-template">AV installation invoice template</a> covers home theater and smart home work. Web and app work belongs on the <a href="/blog/web-development-invoice-template">web development invoice template</a>.</p>

<p>A clear computer repair invoice lists the device, diagnosis, parts, labor, data work and warranty so customers understand the bill and businesses can approve it fast. Create yours in our free invoice generator: it is free, needs no sign-up and builds a PDF in your browser that you can download immediately.</p>
`,
  },
  {
    slug: "limo-service-invoice-template",
    title: "Limo Invoice Template: Free Chauffeur Invoice + Example",
    description:
      "Limo invoice template for chauffeur services: hourly minimums, gratuity, fuel surcharge, tolls, wait time and cancellation fees, with a worked example invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "car-rental-invoice-template",
      "event-planner-invoice-template",
      "wedding-planner-invoice-template",
    ],
    faqs: [
      {
        q: "What is a typical gratuity on a limo invoice?",
        a: "Many limousine companies add a standard gratuity, often in the range of 15 to 20 percent of the base rate, but practices vary by company and market. If the gratuity is automatic, call it a service charge or mandatory gratuity on the quote and invoice, and make sure the customer knows before booking. Some customers prefer to tip the chauffeur directly, so state whether extra tipping is expected.",
      },
      {
        q: "Is a mandatory gratuity a tip for tax purposes?",
        a: "Generally no. The IRS treats a charge the customer must pay, with an amount set by the business, as a service charge rather than a tip. If you pay it to an employee chauffeur, it is treated as regular wages for payroll tax purposes. Voluntary tips the customer chooses to give are treated differently, and only voluntary tips can be qualified tips for the federal no tax on tips deduction.",
      },
      {
        q: "How do hourly minimums work for limo service?",
        a: "Hourly limo service usually has a minimum number of hours per booking, which is often higher on weekends, holidays and prom or wedding season, and for larger vehicles like stretch limos and party buses. If the trip ends early, the customer still pays the minimum. Time over the booked hours is billed as overtime, often in 15 or 30 minute increments. Show the minimum and actual times on the invoice.",
      },
      {
        q: "What is garage to garage billing?",
        a: "Garage to garage billing means the clock starts when the vehicle leaves the company's base and ends when it returns, rather than at pickup and drop-off. It is common for long distance or out of area trips. Some companies use it for all bookings, while others bill from pickup to drop-off plus a travel fee. Whichever you use, explain it before booking and show the times on the invoice.",
      },
      {
        q: "Can I charge a cleaning or damage fee?",
        a: "Yes, if your terms disclose it before booking. Many limo companies charge cleaning fees for spills, smoking or sickness in the vehicle, and damage fees for broken equipment. Document the issue with photos, take them right after the trip, and bill the fee as its own line with a short description. Customers dispute these less when the policy was signed in the reservation agreement.",
      },
      {
        q: "Do limo companies need federal or state permits?",
        a: "Often, yes. Interstate for-hire passenger carriers may need a USDOT number and operating authority from the Federal Motor Carrier Safety Administration, depending on vehicle size and service. Intrastate service is regulated by state agencies, for example the California Public Utilities Commission for charter party carriers, and many cities and airports require their own permits. Show permit numbers on invoices where required.",
      },
      {
        q: "Should I charge sales tax on limo service?",
        a: "Sales tax treatment of passenger transportation varies widely. Some states exempt it, some tax it, and some cities and airports add their own fees. Gratuities and service charges may also be taxable if mandatory. Check your state and local rules and list any taxes and airport fees as separate lines so corporate clients can reconcile them with expense policies.",
      },
      {
        q: "What deposit should I take for limo bookings?",
        a: "Deposits are common for weddings, proms and large vehicles, often a set amount or a percentage of the estimated total, with the balance charged before or on the event date. State whether the deposit is refundable and by what date. Corporate accounts are often billed after the trip on net terms instead. Show the deposit and its payment date clearly on the final invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A limo invoice, or chauffeur invoice, bills a customer for chauffeured transportation. It lists the reservation details (date, pickup and drop-off, passengers and vehicle type), the base rate by the hour or by transfer, any hourly minimum, overtime, wait time, extra stops, gratuity or service charge, fuel surcharge, tolls, parking, airport fees, taxes, deposits and the balance due.</p>

<p>Limousine and black car companies serve weddings, proms, airport transfers, corporate roadshows and nights out, and each booking can collect a handful of add-ons along the way. A transparent invoice prevents disputes over minimums, overtime and gratuity, and helps corporate clients reconcile charges with their expense policies. This guide covers what to include, how to structure rates, how gratuity and service charges are treated, a full worked example and common mistakes. Create yours in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a limo or chauffeur invoice?</h2>
<p>A limo invoice is the bill a limousine company, chauffeur service, black car operator or party bus company sends for transportation services. It may be sent after the trip for corporate accounts, or used as a final receipt for prepaid retail bookings like weddings and proms.</p>
<p>The invoice usually follows a reservation confirmation that sets the vehicle, times, rates and terms. Event-related bookings often come through planners, so our <a href="/blog/event-planner-invoice-template">event planner invoice template</a> and the new <a href="/blog/wedding-planner-invoice-template">wedding planner invoice template</a> show how planners bill transportation through to their clients. For self-drive vehicles, see the <a href="/blog/car-rental-invoice-template">car rental invoice template</a>.</p>

<h2>What should a limo invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Company details</td><td>Business name, address, phone, permit or operating authority numbers where required</td></tr>
<tr><td>Invoice and reservation</td><td>Invoice number, reservation or confirmation number, trip date</td></tr>
<tr><td>Customer</td><td>Name, company, billing contact, PO or cost center for corporate clients</td></tr>
<tr><td>Trip details</td><td>Pickup and drop-off locations and times, stops, passenger count, chauffeur name</td></tr>
<tr><td>Vehicle</td><td>Type (sedan, SUV, stretch limo, sprinter, party bus) and vehicle number</td></tr>
<tr><td>Base charges</td><td>Hourly rate x hours (with minimum) or flat transfer rate</td></tr>
<tr><td>Extras</td><td>Overtime, wait time, extra stops, child seats, decorations, refreshments</td></tr>
<tr><td>Surcharges and pass-throughs</td><td>Fuel surcharge, tolls, parking, airport fees</td></tr>
<tr><td>Gratuity and taxes</td><td>Gratuity or service charge, sales or transportation taxes</td></tr>
<tr><td>Payments and terms</td><td>Deposit, balance due, cancellation policy, damage and cleaning policy</td></tr>
</tbody></table>

<h2>How do limo companies charge? Rates, minimums and surcharges</h2>
<p>Rates depend on vehicle type, market, season and demand, so this guide does not quote market prices; numbers shown are illustrative. The structures, however, are fairly standard.</p>
<table><thead><tr><th>Charge</th><th>How it works</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>Hourly rate</td><td>Per hour by vehicle type</td><td>Show booked hours, actual hours and the minimum</td></tr>
<tr><td>Hourly minimum</td><td>Minimum hours per booking, often higher on peak days</td><td>State it even if not reached</td></tr>
<tr><td>Flat transfer rate</td><td>Point to point, common for airport runs</td><td>List route and included wait time</td></tr>
<tr><td>Overtime</td><td>Billed in 15 or 30 minute increments</td><td>Show start and end times</td></tr>
<tr><td>Wait time</td><td>After a grace period on transfers</td><td>Note flight delays and grace period</td></tr>
<tr><td>Extra stops</td><td>Per stop on transfers</td><td>List each address</td></tr>
<tr><td>Fuel surcharge</td><td>Percentage of base or flat amount</td><td>Disclose in the quote</td></tr>
<tr><td>Tolls, parking, airport fees</td><td>Passed through at cost</td><td>Keep receipts for corporate clients</td></tr>
<tr><td>Gratuity or service charge</td><td>Percentage of base rate</td><td>Label as mandatory or suggested</td></tr>
<tr><td>Cleaning or damage fee</td><td>Per incident, per policy</td><td>Attach photos</td></tr>
</tbody></table>
<p>Some operators bill garage to garage, starting the clock when the car leaves the base; others bill from pickup to drop-off. Either is fine if disclosed. For general guidance on presenting extra time and travel, see <a href="/blog/how-to-bill-for-travel-time">how to bill for travel time</a>.</p>

<h2>Gratuity, service charges and taxes</h2>
<p>Gratuity is the line most likely to confuse customers, and it has tax consequences for your business.</p>
<ul>
<li><strong>Mandatory gratuity or service charge:</strong> an amount you add automatically, set by your company. The IRS treats these as service charges, not tips, as explained on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting">tip recordkeeping and reporting page</a>. If you pay them to employee chauffeurs, they are wages for payroll purposes.</li>
<li><strong>Voluntary tip:</strong> an amount the customer chooses freely, such as a tip line left blank or cash handed to the chauffeur. These are tips, and the chauffeur must report them.</li>
<li><strong>No tax on tips deduction:</strong> the federal deduction created by the 2025 tax law applies only to qualified, voluntary tips in eligible occupations, not to mandatory service charges. Our article on <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a> explains the rules for owner-operators.</li>
</ul>
<p>Label the line clearly: "Service charge (20%), retained by company" or "Gratuity (20%), paid to chauffeur" tells the customer what it is. Some states also tax mandatory service charges as part of the sale. Transportation tax rules vary widely, so check your state and local rules and list any taxes separately. If you add a card surcharge, follow the rules in our <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> guide. This section is general information, not tax advice.</p>

<h2>Example limo service invoice</h2>
<p>An illustrative wedding booking with example prices.</p>
<p><strong>Silverline Chauffeured Transportation LLC</strong> (state charter permit and USDOT number on file), Invoice SL-2026-0938, reservation R-77213. Customer: Olivia Chen and Daniel Reyes. Trip date: October 17, 2026. Vehicle: 10 passenger stretch limousine, unit 12, chauffeur M. Torres. Pickup 2:00 p.m. at 410 Elm Street; stops at St. Anne's Church and the Riverside Garden photo site; drop-off at The Grand Hall. Booked 5 hours (5 hour Saturday minimum); actual 2:00 p.m. to 7:45 p.m.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Stretch limousine, hourly (5 hour minimum)</td><td>5</td><td>hr</td><td>$165.00</td><td>$825.00</td></tr>
<tr><td>Overtime, billed in 15 minute increments (45 min)</td><td>0.75</td><td>hr</td><td>$165.00</td><td>$123.75</td></tr>
<tr><td>Wedding package: red carpet, decorations, champagne glasses and sparkling cider</td><td>1</td><td>package</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>Fuel surcharge, 5% of hourly charges ($948.75)</td><td>1</td><td>each</td><td>$47.44</td><td>$47.44</td></tr>
<tr><td>Parking at photo site (at cost, receipt attached)</td><td>1</td><td>each</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td>Gratuity, 20% of hourly charges, paid to chauffeur</td><td>1</td><td>each</td><td>$189.75</td><td>$189.75</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$1,298.94</strong></td></tr>
<tr><td colspan="4">Taxes (passenger transportation exempt in this state; illustrative)</td><td>$0.00</td></tr>
<tr><td colspan="4">Less deposit paid August 2, 2026</td><td>-$400.00</td></tr>
<tr><td colspan="4"><strong>Balance charged to card on file October 18, 2026</strong></td><td><strong>$898.94</strong></td></tr>
</tbody></table>
<p>Notes: No cleaning or damage fees applied. Times based on chauffeur trip log. Thank you for choosing Silverline.</p>
<p>The invoice shows the minimum, actual times, overtime increments and the base for the fuel surcharge and gratuity, which are the lines customers question most. Tax treatment in your state may differ; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps once you know the rate.</p>

<h2>Hourly vs point to point: which billing method fits the trip?</h2>
<p>Airport transfers and one way rides are usually billed point to point at a flat rate, while events and multi-stop evenings are billed hourly. The table compares the two.</p>
<table><thead><tr><th>Factor</th><th>Point to point (transfer)</th><th>Hourly (as directed)</th></tr></thead><tbody>
<tr><td>Typical use</td><td>Airport, hotel, single destination</td><td>Weddings, proms, nights out, roadshows</td></tr>
<tr><td>Price basis</td><td>Flat rate by route and vehicle</td><td>Hourly rate x hours, with a minimum</td></tr>
<tr><td>Wait time</td><td>Grace period, then per 15 or 30 minutes</td><td>Included in the hours</td></tr>
<tr><td>Extra stops</td><td>Per stop charge</td><td>Included if within booked time</td></tr>
<tr><td>Main invoice risk</td><td>Unexplained wait time charges</td><td>Disputed overtime</td></tr>
</tbody></table>
<p>For airport pickups, record the flight number and actual landing time on the invoice. A common policy is a free grace period after landing for domestic flights and a longer one for international arrivals, with wait time billed after that. When the invoice shows the landing time, the grace period and the time the passenger was picked up, wait charges rarely get disputed.</p>
<p>A short illustrative transfer invoice might read: sedan transfer, downtown hotel to airport, flat rate $95; airport fee at cost $5; gratuity 20% of base $19; total $119. Simple, but each element is visible.</p>

<h2>How to create a limo invoice step by step</h2>
<ol>
<li><strong>Start from the reservation</strong>: vehicle, booked hours or transfer, rates and terms.</li>
<li><strong>Use the chauffeur's trip log</strong> for actual start, stop and end times.</li>
<li><strong>Apply the minimum</strong>, then calculate overtime in your stated increments.</li>
<li><strong>Add extras</strong>: stops, wait time, packages, child seats.</li>
<li><strong>Add pass-throughs</strong> with receipts: tolls, parking, airport fees.</li>
<li><strong>Calculate surcharges and gratuity</strong> on the base you disclosed.</li>
<li><strong>Apply taxes</strong> and subtract deposits. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers presentation.</li>
<li><strong>Send the PDF</strong> from the <a href="/invoice-generator">free invoice generator</a> the day after the trip, or charge the card on file and send it as a receipt.</li>
</ol>

<h2>Cancellations, no-shows and corporate accounts</h2>
<p>Cancellation policies should be in the reservation agreement and repeated on the confirmation. Common structures: full refund of the deposit if canceled well before the date, deposit forfeited inside a set window, and full charge for no-shows or same day cancellations. When you bill a cancellation, invoice it with the policy reference; our guide to the <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> shows how.</p>
<p>Corporate accounts work differently. They usually book many rides a month and want a single monthly invoice listing each trip with date, passenger, route, times, cost center and charges. Agree on net terms, approval contacts and whether gratuity is included. Detailed trip lines help travel managers allocate costs to the right department and check them against their travel policy. Larger accounts may ask for a W-9 and proof of insurance before the first ride.</p>

<h2>Trip records to keep with each invoice</h2>
<p>Good trip records protect you in disputes, chargebacks and regulatory checks. For each booking, keep the reservation confirmation the customer accepted, the chauffeur's trip log with times and mileage, receipts for tolls, parking and airport fees, photos of any cleaning or damage issues, and the final invoice with payment details. Card disputes over overtime or damage fees are much easier to win when you can show the signed terms, the trip log and the photos together.</p>
<p>Many operators use dispatch software that records times automatically. Even so, review the times before invoicing; a chauffeur who forgot to close a trip in the app can create overtime the customer never used. Correct the record first, then invoice, and keep a note of the correction.</p>

<h2>Common mistakes on limo invoices</h2>
<ul>
<li><strong>Not showing actual times.</strong> Overtime without start and end times looks arbitrary.</li>
<li><strong>Ambiguous gratuity.</strong> Customers double tip or dispute charges when the line is unclear.</li>
<li><strong>Surcharges not in the quote.</strong> Fuel and admin fees that appear only on the invoice cause chargebacks.</li>
<li><strong>Missing receipts for pass-throughs.</strong> Corporate clients often require them.</li>
<li><strong>No cancellation policy reference.</strong> Without it, deposits are hard to keep.</li>
<li><strong>Calling a service charge a tip.</strong> This misstates payroll treatment and can mislead customers.</li>
<li><strong>Missing permit numbers.</strong> Some states and airports require them on trip records. The <a href="https://www.fmcsa.dot.gov/">FMCSA</a> explains federal registration for interstate passenger carriers.</li>
</ul>

<h2>Related templates for transportation and event services</h2>
<p>Limo operators often partner with other event vendors. The new <a href="/blog/party-rental-invoice-template">party rental invoice template</a> and <a href="/blog/photo-booth-invoice-template">photo booth invoice template</a> cover common wedding add-ons, and the <a href="/blog/travel-agency-invoice-template">travel agency invoice template</a> fits group travel bookings.</p>

<p>A clear limo invoice shows the vehicle, times, minimums, overtime, surcharges and gratuity so customers and corporate travel teams can approve it without calling. Build your chauffeur invoice in our free invoice generator: it requires no sign-up, builds the PDF in your browser and lets you download it straight away.</p>
`,
  },
];
