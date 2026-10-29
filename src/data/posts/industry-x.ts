import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_X: PostDraft[] = [
  {
    slug: "water-damage-restoration-invoice-template",
    title: "Water Damage Restoration Invoice Template (Insurance-Ready)",
    description:
      "Water damage restoration invoice template with mitigation line items, drying equipment per day, Xactimate-style pricing, direction to pay and an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-bill-insurance-companies-as-a-contractor",
      "demolition-invoice-template",
      "roofing-invoice-template",
    ],
    faqs: [
      {
        q: "What is the difference between mitigation and restoration on an invoice?",
        a: "Mitigation is the emergency work to stop further damage: water extraction, removing wet materials, drying equipment, antimicrobial treatment and monitoring. Restoration (or reconstruction) is rebuilding afterward: new drywall, flooring, cabinets and paint. Many insurers handle them as separate estimates, and many companies send separate invoices, because mitigation is usually completed and paid first while reconstruction is scoped and approved later.",
      },
      {
        q: "Do I have to use Xactimate for water damage invoices?",
        a: "No law requires it, but many property insurers and adjusters write estimates in Xactimate, so a restoration invoice that follows the same line-item structure and units is easier to compare and approve. Some contractors use their own pricing or other estimating software. Whatever you use, describe each item in units the adjuster recognizes, such as square feet, linear feet and equipment days.",
      },
      {
        q: "What is a direction to pay?",
        a: "A direction to pay is a document signed by the policyholder that tells the insurer to pay the contractor directly, or to include the contractor on the check, for work on the claim. Unlike an assignment of benefits, it generally does not transfer the homeowner's policy rights to the contractor. Insurers and states treat these documents differently, so check local rules and the insurer's requirements.",
      },
      {
        q: "Who pays the restoration invoice, the homeowner or the insurer?",
        a: "The property owner is responsible for paying the contractor under the work authorization they signed. Insurance may reimburse some or all of the cost, minus the deductible, if the loss is covered. Many contractors bill the insurer directly with the owner's permission, but the owner remains liable for the deductible, uncovered items and anything the insurer refuses to pay.",
      },
      {
        q: "How are drying equipment charges calculated?",
        a: "Drying equipment is usually billed per unit per 24-hour day: for example, five air movers for three days is fifteen air mover days. Dehumidifiers are billed the same way, often by size class. Adjusters compare the equipment count with the room sizes and moisture readings, so keep daily drying logs that justify how many units ran and for how long.",
      },
      {
        q: "Can I charge the homeowner's deductible separately?",
        a: "Yes. The deductible is the owner's share of a covered loss, and the contractor should collect it from the owner. Do not offer to waive or absorb the deductible: in many states, waiving a deductible while billing the insurer the full amount can be treated as insurance fraud. Show the deductible on the invoice as an amount due from the owner.",
      },
      {
        q: "What documentation should go with a water mitigation invoice?",
        a: "Insurers commonly expect a signed work authorization, photos before and during work, a moisture map, daily psychrometric and moisture readings, an equipment log, the scope of materials removed and a certificate of completion or dry standard confirmation. Good documentation is the best defense against line items being cut, and it supports supplements when hidden damage appears.",
      },
      {
        q: "What is a supplement on a restoration claim?",
        a: "A supplement is a request for additional payment when the original estimate did not cover all necessary work, for example when wet insulation is found behind a wall or drying takes longer than expected. Submit it with photos, readings and an itemized list of the added items, then issue a revised invoice once the insurer approves the change.",
      },
      {
        q: "Is water damage restoration subject to sales tax?",
        a: "It depends on the state. Some states tax repair labor to real property, others tax only materials, and some treat restoration as a construction contract where the contractor pays tax on materials. Equipment rental is taxed differently in some states. Check your state rules and keep taxable materials on separate lines so the calculation is easy to verify.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A water damage restoration invoice template bills for emergency water mitigation and related repairs. It lists the loss address, claim number and date of loss, then itemizes extraction, removal of wet materials, drying equipment per day, antimicrobial treatment, monitoring and labor in insurer-friendly units, with the deductible, insurer payments and balance due.</p>

<p>Water losses are billed differently from most contracting work. The customer is usually a homeowner or property manager, but the money often comes from an insurance company, and an adjuster will compare every line on your invoice with their own estimate. A clear water damage restoration invoice that follows familiar line items, units and documentation standards gets paid faster and with fewer cuts.</p>
<p>This guide covers what a water damage invoice should include, how mitigation line items are priced, how equipment days are calculated, how direction to pay and assignment of benefits work, and how to handle deductibles and supplements. It includes a full example invoice with real arithmetic. You can build it in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a water damage restoration invoice?</h2>
<p>A water damage restoration invoice is a bill from a mitigation or restoration contractor for work after a water loss, such as a burst pipe, appliance leak, roof leak or flood. It usually covers two stages:</p>
<ul>
<li><strong>Mitigation (emergency services):</strong> stopping the damage from spreading. Extraction, removing saturated materials, setting drying equipment, antimicrobial application and daily monitoring until materials reach a dry standard.</li>
<li><strong>Restoration or reconstruction:</strong> putting the property back. Drywall, insulation, flooring, trim, cabinets and paint. This part looks more like a <a href="/blog/remodeling-invoice-template">remodeling invoice</a> and is often invoiced separately.</li>
</ul>
<p>The industry's main reference for water damage work is the IICRC S500 standard, published by the <a href="https://iicrc.org/s500/">Institute of Inspection, Cleaning and Restoration Certification</a>. It classifies water by contamination (Category 1 clean water, Category 2 significantly contaminated or gray water, Category 3 grossly contaminated or black water) and the job by evaporation load (Class 1 to Class 4). Those classifications drive the scope, and referencing them on your invoice helps justify what you did.</p>

<h2>What should a water mitigation invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Company</td><td>Name, address, license number where required, IICRC firm certification if held</td></tr>
<tr><td>Customer and property</td><td>Owner name, loss address, contact, property manager if any</td></tr>
<tr><td>Claim details</td><td>Insurance carrier, claim number, policy number, adjuster name, date of loss</td></tr>
<tr><td>Loss classification</td><td>Water category and class, source of loss, affected rooms</td></tr>
<tr><td>Line items</td><td>Description, quantity, unit (SF, LF, EA, day, hour), unit price, amount, grouped by room</td></tr>
<tr><td>Equipment</td><td>Air movers, dehumidifiers, air scrubbers, by unit days</td></tr>
<tr><td>Totals</td><td>Subtotal, tax, overhead and profit if applicable, total</td></tr>
<tr><td>Payments</td><td>Deductible due from owner, insurer payments received, balance</td></tr>
<tr><td>Attachments</td><td>Work authorization, direction to pay, photos, moisture logs, certificate of completion</td></tr>
</tbody></table>

<h2>Mitigation line items and how they are priced</h2>
<p>Most adjusters review restoration invoices against estimating software, especially Xactimate from Verisk, which uses regional price lists that are updated regularly. Using similar item descriptions and units makes your water damage restoration invoice easier to approve. Common mitigation line items:</p>
<table><thead><tr><th>Line item</th><th>Unit</th><th>Notes</th></tr></thead><tbody>
<tr><td>Emergency service call (after hours)</td><td>EA</td><td>Response fee, often higher at night and weekends</td></tr>
<tr><td>Water extraction from carpet / hard floor</td><td>SF</td><td>Rates differ for carpet, hard surface and heavy saturation</td></tr>
<tr><td>Tear out wet carpet pad, bag for disposal</td><td>SF</td><td>Pad is commonly removed; carpet may be dried or removed</td></tr>
<tr><td>Tear out wet drywall (flood cut 2 ft)</td><td>LF or SF</td><td>Flood cuts are measured along the wall</td></tr>
<tr><td>Remove wet insulation</td><td>SF</td><td>Batt insulation behind cut drywall</td></tr>
<tr><td>Apply antimicrobial agent</td><td>SF</td><td>Required more often for Category 2 and 3 water</td></tr>
<tr><td>Air mover (per 24 hours)</td><td>Day</td><td>Count units x days</td></tr>
<tr><td>Dehumidifier (per 24 hours)</td><td>Day</td><td>Priced by size, such as large or XL</td></tr>
<tr><td>Air scrubber / negative air machine</td><td>Day</td><td>Common with Category 3 water or mold concerns</td></tr>
<tr><td>Equipment setup, takedown and monitoring</td><td>Hour</td><td>Daily moisture readings and adjustments</td></tr>
<tr><td>Containment (poly barrier, zipper door)</td><td>SF / EA</td><td>Keeps dust and contamination in the work area</td></tr>
<tr><td>Content manipulation (move furniture)</td><td>Hour or EA</td><td>Moving and blocking furniture off wet floors</td></tr>
<tr><td>Dumpster or haul debris</td><td>EA / load</td><td>Disposal of removed materials</td></tr>
</tbody></table>
<p>We do not list unit prices here because they vary by region and change over time. Use your own costs, your market and the price list your carriers use, and keep your rates consistent from job to job.</p>

<h2>How drying equipment days are calculated</h2>
<p>Equipment is billed per unit per 24-hour period. If you run 8 air movers for 3 days, that is 24 air mover days. If you ran 2 dehumidifiers for 3 days and pulled one on day 4 while the other ran one more day, that is 7 dehumidifier days.</p>
<p>Adjusters check that equipment counts make sense for the room sizes and that drying stopped once materials hit the dry standard. Keep a daily drying log with:</p>
<ol>
<li>Date and time of each visit.</li>
<li>Temperature, relative humidity and grains per pound (GPP) inside, outside and at each dehumidifier.</li>
<li>Moisture readings for affected materials, compared with an unaffected reference.</li>
<li>Equipment added, moved or removed.</li>
</ol>
<p>If a dehumidifier ran two extra days because nobody checked readings, expect that to be cut. If it ran two extra days because the subfloor was still wet, your log proves it.</p>

<h2>Direction to pay, assignment of benefits and deductibles</h2>
<p>Getting paid on an insurance job depends on the paperwork signed before work starts. Our guide on <a href="/blog/how-to-bill-insurance-companies-as-a-contractor">how to bill insurance companies as a contractor</a> covers the full process. In short:</p>
<ul>
<li><strong>Work authorization:</strong> the owner authorizes the work and agrees to pay for it. Always required.</li>
<li><strong>Direction to pay:</strong> the owner directs the insurer to pay you directly or to add your name to the check. It does not transfer the owner's rights under the policy.</li>
<li><strong>Assignment of benefits (AOB):</strong> the owner transfers some policy rights to you. Several states restrict AOBs. Florida, for example, made post-loss assignments invalid for residential and commercial property policies issued on or after January 1, 2023 under <a href="https://www.flsenate.gov/Laws/Statutes/2024/627.7152">section 627.7152, Florida Statutes</a>. Check the rules in your state before using one.</li>
</ul>
<p>The deductible is the owner's responsibility. Show it as a separate amount due from the owner. Never advertise or agree to "waive" the deductible while billing the insurer for the full cost; many states treat that as insurance fraud. Insurance checks often name the mortgage lender as well, so allow time for endorsements before treating a payment as received.</p>
<p>This section is general information, not legal advice. Insurance and contractor rules vary by state.</p>

<h2>Example water damage restoration invoice</h2>
<p>A mitigation company bills for a Category 1, Class 2 loss from a burst supply line in a kitchen and adjoining family room. All names and prices are fictional and illustrative, not a price list.</p>
<p><strong>BlueLine Restoration LLC</strong> | 950 Industrial Way, Tampa, FL 33619 | License CBC-000000 | IICRC Certified Firm<br>
<strong>Invoice:</strong> BLR-26-0874 | <strong>Issued:</strong> October 28, 2026 | <strong>Due:</strong> November 27, 2026<br>
<strong>Owner:</strong> Maria Gonzalez | <strong>Loss address:</strong> 214 Palm Drive, Tampa, FL | <strong>Carrier:</strong> Sample Mutual | <strong>Claim:</strong> 26-55102 | <strong>Date of loss:</strong> October 14, 2026 | <strong>Loss:</strong> Category 1, Class 2</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Emergency service call, after hours</td><td>1</td><td>EA</td><td>$295.00</td><td>$295.00</td></tr>
<tr><td>Water extraction, carpet (family room)</td><td>320</td><td>SF</td><td>$0.95</td><td>$304.00</td></tr>
<tr><td>Water extraction, hard surface (kitchen)</td><td>180</td><td>SF</td><td>$0.60</td><td>$108.00</td></tr>
<tr><td>Tear out wet carpet pad and bag</td><td>320</td><td>SF</td><td>$0.70</td><td>$224.00</td></tr>
<tr><td>Flood cut drywall, 2 ft</td><td>46</td><td>LF</td><td>$4.25</td><td>$195.50</td></tr>
<tr><td>Remove wet batt insulation</td><td>92</td><td>SF</td><td>$0.85</td><td>$78.20</td></tr>
<tr><td>Apply antimicrobial</td><td>500</td><td>SF</td><td>$0.30</td><td>$150.00</td></tr>
<tr><td>Air mover (8 units x 3 days)</td><td>24</td><td>Day</td><td>$32.00</td><td>$768.00</td></tr>
<tr><td>Dehumidifier, large (2 units, 7 unit days)</td><td>7</td><td>Day</td><td>$115.00</td><td>$805.00</td></tr>
<tr><td>Equipment setup, monitoring and takedown</td><td>6</td><td>Hour</td><td>$75.00</td><td>$450.00</td></tr>
<tr><td>Content manipulation</td><td>2</td><td>Hour</td><td>$60.00</td><td>$120.00</td></tr>
<tr><td>Debris haul and disposal</td><td>1</td><td>EA</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td colspan="4"><strong>Total mitigation</strong></td><td><strong>$3,682.70</strong></td></tr>
<tr><td colspan="4">Owner deductible (due from owner)</td><td>$1,000.00</td></tr>
<tr><td colspan="4">Insurer payment received (direction to pay on file)</td><td>-$2,682.70</td></tr>
<tr><td colspan="4"><strong>Balance due from owner</strong></td><td><strong>$1,000.00</strong></td></tr>
</tbody></table>
<p><strong>Attachments:</strong> signed work authorization and direction to pay, 42 photos, moisture map, daily drying logs (Oct 14 to Oct 17), certificate of completion. Reconstruction is estimated separately under estimate BLR-E-26-0874-R.</p>
<h3>Checking the math</h3>
<p>Air movers: 8 units x 3 days = 24 days x $32.00 = $768.00. Dehumidifiers: two units for 3 days plus one unit for a 4th day = 7 days x $115.00 = $805.00. Adding all twelve lines gives $3,682.70. The insurer paid the total minus the $1,000 deductible, leaving $1,000.00 for the owner.</p>
<p>Sales tax treatment of restoration labor, materials and equipment varies by state, so this example shows no tax. Check your state's rules and the <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> guide.</p>

<h2>How to handle supplements and reconstruction invoices</h2>
<p>Water losses rarely end with the first estimate. Hidden damage turns up once baseboards come off, drying takes longer in cold weather, or the adjuster's initial scope misses rooms. When that happens, submit a supplement: a written request for additional items with photos, moisture readings and an itemized list. Once the carrier approves it, issue a revised invoice that shows the original amount, the approved supplement and the new total, rather than a brand-new invoice that hides the history.</p>
<p>Reconstruction is usually a separate invoice, and often a separate contract. It may involve recoverable depreciation: the insurer first pays the actual cash value (ACV) of the repairs and releases the held-back depreciation once the work is complete and invoiced, up to the replacement cost value (RCV). Your final reconstruction invoice is often the document the owner needs to claim that depreciation, so make it detailed and send it promptly.</p>
<table><thead><tr><th>Stage</th><th>Typical document</th><th>Who usually pays</th></tr></thead><tbody>
<tr><td>Emergency mitigation</td><td>Mitigation invoice with drying logs</td><td>Insurer (via direction to pay) plus owner's deductible</td></tr>
<tr><td>Hidden damage found</td><td>Supplement request, then revised invoice</td><td>Insurer if approved; owner if not covered</td></tr>
<tr><td>Reconstruction</td><td>Estimate, progress and final invoices</td><td>Insurer ACV first, depreciation released on completion</td></tr>
<tr><td>Owner upgrades</td><td>Separate change order invoice</td><td>Owner</td></tr>
</tbody></table>
<p>Keep owner upgrades, such as nicer flooring than what was damaged, on a separate change order so the insurance file stays clean.</p>

<h2>How to create a water damage invoice, step by step</h2>
<ol>
<li><strong>Before work:</strong> get the signed work authorization, direction to pay (if used) and the claim details.</li>
<li><strong>During work:</strong> photograph everything, record moisture readings daily and log equipment.</li>
<li><strong>Build the invoice by room</strong> in the <a href="/invoice-generator">invoice generator</a>, with units matching the adjuster's estimate.</li>
<li><strong>Number invoices by job,</strong> using a scheme that ties mitigation and reconstruction together; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li><strong>Show the deductible</strong> as the owner's responsibility and any insurer payments received.</li>
<li><strong>Attach documentation</strong> and send to both the owner and the adjuster if the owner agrees.</li>
<li><strong>Follow up on supplements</strong> for hidden damage, then issue a revised invoice.</li>
</ol>

<h2>Common water damage invoicing mistakes</h2>
<ul>
<li><strong>Lump-sum invoices.</strong> "Water mitigation: $3,700" invites the adjuster to cut it. Itemize.</li>
<li><strong>No drying logs.</strong> Equipment days without readings are the most frequently reduced items.</li>
<li><strong>Waiving deductibles.</strong> It is risky and can be illegal.</li>
<li><strong>Mixing mitigation and reconstruction</strong> on one invoice when the carrier handles them separately.</li>
<li><strong>Using an AOB where it is restricted.</strong> Check state law.</li>
<li><strong>Waiting on the insurer forever.</strong> The owner still owes you. Set clear terms and use <a href="/blog/payment-reminder-emails">payment reminders</a> and, where needed, <a href="/blog/mechanics-lien">mechanics lien</a> rights within your state's deadlines.</li>
</ul>
<p>When the job involves removing cabinets, walls or flooring at scale, the <a href="/blog/demolition-invoice-template">demolition invoice template</a> shows how to bill tear-out and disposal, and storm jobs often pair with a <a href="/blog/roofing-invoice-template">roofing invoice</a> for the source of the leak.</p>

<p>A water damage restoration invoice that mirrors the adjuster's units, proves every equipment day and separates the owner's deductible is far more likely to be paid in full and on time. Our invoice generator is free, needs no sign-up and builds the PDF in your browser, so you can send an itemized, insurance-ready invoice the day the job is dry.</p>
`,
  },
  {
    slug: "deck-building-invoice-template",
    title: "Deck Builder Invoice Template: Per Sq Ft, Materials, Draws",
    description:
      "Deck builder invoice template with per square foot pricing, composite vs wood materials, permits, railings, stairs and progress payments, plus an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["carpentry-invoice-template", "progress-billing", "fencing-invoice-template"],
    faqs: [
      {
        q: "How do deck builders charge, per square foot or itemized?",
        a: "Many deck builders quote a price per square foot for the deck surface because homeowners understand it, then add separate prices for railings per linear foot, stairs, permits, demolition and upgrades. The invoice works best itemized: it shows exactly what the homeowner is paying for and makes change orders easier. A single per square foot number on the invoice often leads to disputes over what it included.",
      },
      {
        q: "How much deposit can a deck builder ask for?",
        a: "It depends on state law and the contract. Some states cap deposits on home improvement contracts. California, for example, limits the down payment to 10% of the contract price or $1,000, whichever is less, for most home improvement work. Other states have no cap but expect deposits to be reasonable. Check your state contractor board before setting a deposit schedule.",
      },
      {
        q: "Should permit fees be a separate line on a deck invoice?",
        a: "Yes. Show the permit fee paid to the city or county as its own line, at cost or with any stated administration fee, and keep the receipt. Many jurisdictions require permits for decks attached to a house, decks above a certain height or decks over a certain size. Listing it separately shows the homeowner the job is permitted and avoids burying government fees in your price.",
      },
      {
        q: "Is composite decking more expensive than wood on an invoice?",
        a: "Composite and PVC boards usually cost more per square foot than pressure-treated lumber, and they often need hidden fasteners and specific framing spacing. Cedar and tropical hardwoods fall somewhere between or above, depending on the market. The framing underneath is commonly pressure-treated lumber either way. List decking material separately so homeowners can see what the upgrade costs.",
      },
      {
        q: "When should progress payments be due on a deck job?",
        a: "A common schedule ties payments to visible milestones: a deposit at signing, a payment when footings pass inspection or framing is complete, and the final payment after the final inspection and walkthrough. Linking payments to inspections protects both sides. Avoid asking for payment far ahead of the work completed, which some states restrict for home improvement contracts.",
      },
      {
        q: "Do deck builders charge sales tax?",
        a: "It varies by state. In some states, contractors pay sales tax on materials when they buy them and do not charge tax to the homeowner on a real property improvement. In others, tax applies to materials or to the whole invoice. Building a deck is usually treated as a capital improvement, which can affect the tax treatment. Check your state's rules for construction contractors.",
      },
      {
        q: "What should a deck invoice include about warranties?",
        a: "Reference your workmanship warranty, such as one or two years on labor, and note that material warranties come from the manufacturer, for example a composite board warranty that requires installation to the maker's specifications. Include the product line and color so the homeowner can register a warranty claim later. Put the full warranty terms in the contract.",
      },
      {
        q: "How do I bill for removing an old deck?",
        a: "Add a separate demolition line for removing and disposing of the old deck, priced per square foot or as a flat amount, plus a dumpster or haul-off charge. If you discover rot in the house rim joist or ledger area once the old deck is off, stop and get a written change order before repairing it, then bill it as its own line.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A deck builder invoice template bills a homeowner for a new deck, deck rebuild or repair. It lists the deck size in square feet, the decking material (pressure-treated, cedar, composite or PVC), framing, footings, railings per linear foot, stairs, permits, demolition and disposal, change orders, progress payments received and the balance due.</p>

<p>Decks are sold by the square foot but built from dozens of parts: footings, posts, beams, joists, ledger flashing, boards, fasteners, rails and stairs. When the invoice shows only a single total, homeowners struggle to see what they paid for, and disagreements over upgrades and hidden rot get harder to settle. An itemized deck builder invoice protects your margin and your reputation.</p>
<p>This guide explains how deck builders price jobs, how composite and wood materials affect the invoice, how to handle permits and inspections, how to structure progress payments and what to include on each invoice. It includes a complete example and a worked per square foot calculation. You can create the invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a deck builder invoice?</h2>
<p>A deck builder invoice is a request for payment from a deck contractor or carpenter for building, replacing or repairing a deck, porch or similar outdoor structure. It sits inside a home improvement contract and usually comes in several parts: a deposit invoice, one or more progress invoices and a final invoice. It is closely related to a <a href="/blog/carpentry-invoice-template">carpentry invoice</a>, with more emphasis on materials, permits and inspections.</p>

<h2>How deck builders price a job</h2>
<p>Most deck builders start with a base price per square foot of deck surface, which varies with height, shape, material and site conditions, then price extras separately:</p>
<table><thead><tr><th>Component</th><th>Common unit</th><th>What affects the price</th></tr></thead><tbody>
<tr><td>Deck surface (framing + decking)</td><td>Per sq ft</td><td>Material, height, joist spacing, board pattern (picture frame, diagonal)</td></tr>
<tr><td>Footings</td><td>Each</td><td>Frost depth, soil, helical piles vs concrete</td></tr>
<tr><td>Ledger and flashing</td><td>Per linear ft</td><td>Siding removal, house rim condition</td></tr>
<tr><td>Railing</td><td>Per linear ft</td><td>Wood, composite, aluminum, cable or glass</td></tr>
<tr><td>Stairs</td><td>Per step or per stair set</td><td>Width, landings, stringer material</td></tr>
<tr><td>Skirting, fascia</td><td>Per linear ft</td><td>Material and style</td></tr>
<tr><td>Lighting</td><td>Each fixture</td><td>Low-voltage kits, transformer, electrician needed</td></tr>
<tr><td>Demolition of old deck</td><td>Per sq ft or flat</td><td>Size, height, disposal costs</td></tr>
<tr><td>Permits and drawings</td><td>At cost</td><td>Local fees, engineered plans</td></tr>
</tbody></table>
<p>Many builders use the American Wood Council's prescriptive deck guide (DCA 6, available from the <a href="https://awc.org">American Wood Council</a>) and the local residential code to size footings, beams and joists. Code requirements affect cost, so it helps to explain them in your estimate rather than surprise the homeowner on the invoice.</p>

<h2>Composite vs wood: how materials change the invoice</h2>
<p>Decking material is the biggest single choice a homeowner makes. The comparison below is general; prices differ by region and supplier, so check current supplier pricing when you quote.</p>
<table><thead><tr><th>Decking</th><th>Relative material cost</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>Pressure-treated pine</td><td>Lowest</td><td>Standard fasteners; homeowner will need to stain or seal</td></tr>
<tr><td>Cedar or redwood</td><td>Moderate to high</td><td>Grade matters; list grade on the invoice</td></tr>
<tr><td>Composite (capped)</td><td>Higher</td><td>Hidden fasteners, manufacturer joist spacing, color and product line</td></tr>
<tr><td>PVC</td><td>Higher</td><td>Similar to composite; expansion gaps and specific fasteners</td></tr>
<tr><td>Tropical hardwood (ipe)</td><td>Highest</td><td>Pre-drilling and more labor hours</td></tr>
</tbody></table>
<p>Framing is usually pressure-treated lumber regardless of the decking. For composite decks, manufacturers often require closer joist spacing and specific fasteners for the warranty to apply, so state the product, color, fastener system and spacing on the invoice. Bill materials and labor separately where you can; our <a href="/blog/labor-and-materials-invoice">labor and materials invoice guide</a> shows the layout, and the article on <a href="/blog/materials-markup">materials markup</a> explains how to price materials you supply.</p>

<h2>Permits, inspections and paperwork</h2>
<p>Many jurisdictions require a building permit for attached decks, decks above a set height above grade and decks over a set area. Typical inspections include footings (before pouring), framing and final. On the invoice:</p>
<ul>
<li>Show the permit fee as a separate line with the permit number.</li>
<li>Bill drawing or engineering fees separately if you paid for plans.</li>
<li>Tie progress payments to passed inspections where possible.</li>
<li>List your contractor license number if your state requires it on contracts and invoices.</li>
</ul>
<p>Home improvement rules vary by state. California's Contractors State License Board, for example, limits the down payment on most home improvement contracts to 10% of the contract price or $1,000, whichever is less (see <a href="https://www.cslb.ca.gov">cslb.ca.gov</a>). Check your state's rules before you send a deposit invoice. This is general information, not legal advice.</p>

<h2>How to structure progress payments on a deck</h2>
<p>For jobs longer than a few days, progress billing protects your cash flow because you pay suppliers for lumber or composite boards up front. A typical schedule for a mid-sized deck:</p>
<ol>
<li><strong>Deposit at signing</strong> (within any state cap), often used to order materials.</li>
<li><strong>Progress payment</strong> when footings pass inspection and framing is complete.</li>
<li><strong>Final payment</strong> after the final inspection and a walkthrough with the homeowner.</li>
</ol>
<p>Each invoice should show the contract total, approved change orders, amounts previously invoiced and paid, and the balance remaining. Our guide to <a href="/blog/progress-billing">progress billing</a> explains the format, and the <a href="/blog/deposit-invoice">deposit invoice guide</a> covers the first payment. On larger jobs where you pay suppliers or subcontractors, a <a href="/blog/lien-waiver">lien waiver</a> with each payment reassures the homeowner.</p>

<h2>What should a deck builder invoice include?</h2>
<ul>
<li>Company name, address, phone, license and insurance details.</li>
<li>Homeowner name and job address.</li>
<li>Invoice number, date, due date and contract reference.</li>
<li>Deck dimensions, square footage and height.</li>
<li>Materials: framing lumber, decking product and color, fasteners, railing system.</li>
<li>Labor or installed prices per component.</li>
<li>Permits, plans, demolition, disposal.</li>
<li>Change orders listed separately with their approval dates.</li>
<li>Sales tax where applicable.</li>
<li>Payments received and balance due.</li>
<li>Warranty reference and payment terms.</li>
</ul>

<h2>Example deck builder invoice (final invoice)</h2>
<p>A deck contractor sends the final invoice for a 16 x 20 ft composite deck that replaced an old wood deck. Names and prices are fictional and illustrative only.</p>
<p><strong>Summit Decks &amp; Rails LLC</strong> | 45 Quarry Road, Columbus, OH 43228 | Registered contractor<br>
<strong>Invoice:</strong> SDR-2026-061-F | <strong>Issued:</strong> October 29, 2026 | <strong>Due:</strong> on receipt<br>
<strong>Homeowner:</strong> Kevin and Lisa Hart | <strong>Job:</strong> 718 Birch Lane, Columbus, OH | <strong>Contract:</strong> signed August 30, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Demolish and dispose of existing wood deck</td><td>280</td><td>sq ft</td><td>$5.00</td><td>$1,400.00</td></tr>
<tr><td>Concrete footings to frost depth</td><td>9</td><td>each</td><td>$165.00</td><td>$1,485.00</td></tr>
<tr><td>Pressure-treated framing, ledger with flashing, 12 in joist spacing (installed)</td><td>320</td><td>sq ft</td><td>$14.00</td><td>$4,480.00</td></tr>
<tr><td>Capped composite decking, gray, hidden fasteners, picture frame border (installed)</td><td>320</td><td>sq ft</td><td>$17.50</td><td>$5,600.00</td></tr>
<tr><td>Aluminum railing, black</td><td>44</td><td>linear ft</td><td>$78.00</td><td>$3,432.00</td></tr>
<tr><td>Stairs, 4 ft wide, 5 risers, composite treads</td><td>1</td><td>set</td><td>$1,350.00</td><td>$1,350.00</td></tr>
<tr><td>Building permit (at cost, permit BLD-26-4418)</td><td>1</td><td>each</td><td>$245.00</td><td>$245.00</td></tr>
<tr><td>Change order 1: replace rotted rim joist section (approved Sept 22)</td><td>1</td><td>each</td><td>$480.00</td><td>$480.00</td></tr>
<tr><td colspan="4"><strong>Contract total including change order</strong></td><td><strong>$18,472.00</strong></td></tr>
<tr><td colspan="4">Deposit paid August 30</td><td>-$1,000.00</td></tr>
<tr><td colspan="4">Progress payment paid September 26 (framing inspection passed)</td><td>-$9,000.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$8,472.00</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Final inspection passed October 27, 2026. Two-year workmanship warranty per contract; decking and railing carry manufacturer warranties (registration details attached). Sales tax on materials was paid at purchase per Ohio rules for construction contracts; no tax is charged on this invoice. Pay by check, ACH or card (3% card fee applies).</p>
<p>Sales tax rules for contractors differ by state; check yours before copying the tax note.</p>

<h2>Worked example: turning per square foot pricing into an invoice</h2>
<p>The builder quoted this deck at "about $50 per square foot." Here is how that rough figure maps to the itemized invoice:</p>
<ul>
<li>Framing $14.00 + decking $17.50 = $31.50 per sq ft for the surface itself, or $10,080 for 320 sq ft.</li>
<li>Footings, railing and stairs add $1,485 + $3,432 + $1,350 = $6,267, or about $19.58 per sq ft.</li>
<li>Surface plus those components: $16,347, or about $51.08 per sq ft.</li>
<li>Demolition, permit and the change order add $2,125, for a total of $18,472, or about $57.73 per sq ft.</li>
</ul>
<p>This is why a single per square foot price on an invoice causes problems: the homeowner remembers "$50," but the full job, with tear-off, permit and a rot repair, comes to nearly $58. Itemizing makes the difference clear. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if your state requires tax on materials or labor.</p>

<h2>How to handle change orders and hidden problems on a deck</h2>
<p>Deck replacements often uncover surprises once the old boards come off: a rotted house rim joist, missing ledger flashing, undersized footings or siding that has to be cut back. These are the moments when invoices turn into disputes, so handle them the same way every time:</p>
<ol>
<li><strong>Stop and photograph</strong> the problem before you fix it.</li>
<li><strong>Explain and price it</strong> in a short written change order: what you found, what you recommend, the cost and any schedule impact.</li>
<li><strong>Get approval in writing</strong> (a signature, email or text the homeowner sends back) before you continue.</li>
<li><strong>Add it to the next invoice</strong> as its own line with the change order number and approval date.</li>
</ol>
<p>Upgrades work the same way. If the homeowner switches from wood to aluminum railing halfway through, issue a change order showing the price difference, not a new invoice that hides the original price. Our <a href="/blog/scope-creep-change-order">change order guide</a> includes sample wording.</p>
<h3>Repairs and small jobs</h3>
<p>Not every deck job is a full build. For board replacement, railing repairs, staining or sealing, a simpler invoice works: hourly labor or a flat price, materials at your marked-up price and a trip charge if it applies. Pressure washing and staining are often sold as an annual maintenance service, which suits a <a href="/blog/recurring-invoices-guide">recurring invoice</a> sent each spring.</p>

<h2>Step-by-step: creating a deck invoice</h2>
<ol>
<li>Copy the scope and prices from your signed estimate; our <a href="/blog/estimate-template">estimate template</a> uses the same structure.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> and add your logo, license and insurance details.</li>
<li>Number the invoices for each job in sequence (deposit, progress, final); the <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
<li>Add each component as a line with quantity and unit.</li>
<li>Add permits and change orders as separate lines.</li>
<li>Subtract payments received and show the balance.</li>
<li>Add warranty notes and payment methods, download the PDF and send it after the walkthrough.</li>
</ol>

<h2>Common deck builder invoicing mistakes</h2>
<ul>
<li><strong>One lump sum</strong> with no square footage or materials listed.</li>
<li><strong>No change orders in writing</strong> for rot repair or upgrades discovered mid-job.</li>
<li><strong>Deposits above state limits</strong> on home improvement contracts.</li>
<li><strong>Final payment requested before inspection</strong> or walkthrough.</li>
<li><strong>Missing product details,</strong> which makes warranty claims harder later.</li>
<li><strong>Forgetting disposal costs</strong> for the old deck. See how <a href="/blog/junk-removal-invoice-template">junk removal companies bill disposal</a> for ideas on pricing it.</li>
</ul>
<p>If you also build fences or patios, the <a href="/blog/fencing-invoice-template">fencing invoice template</a> and <a href="/blog/concrete-invoice-template">concrete invoice template</a> follow the same itemized approach.</p>

<p>A clear deck builder invoice shows square footage, materials, railings, stairs, permits and every progress payment, so the homeowner sees exactly what they bought. Our invoice generator is free, needs no sign-up and downloads a PDF built in your browser, making it quick to send deposit, progress and final invoices from the job site.</p>
`,
  },
  {
    slug: "furniture-maker-invoice-template",
    title: "Custom Furniture Invoice Template for Woodworkers",
    description:
      "Custom furniture invoice template for woodworkers and furniture makers: deposits, board foot materials, finishing, delivery, sales tax and a full example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "carpentry-invoice-template",
      "artist-commission-invoice-template",
      "upholstery-invoice-template",
    ],
    faqs: [
      {
        q: "How much deposit should a furniture maker take?",
        a: "Many custom furniture makers ask for 50% at order, which covers lumber and hardware and commits the client. Some take a third at order, a third when the piece is built and a third on delivery for larger commissions. Whatever you choose, state that the deposit secures a place in your build schedule and explain in the contract when, if ever, it is refundable.",
      },
      {
        q: "Do I charge sales tax on custom furniture?",
        a: "Usually, yes. In most US states with a sales tax, furniture is tangible personal property, and the full price, including the labor to build it, is generally taxable. Delivery charges may or may not be taxable depending on the state. Furniture built into a home, such as built-in cabinets, can be treated as a real property improvement instead. Check your state revenue department.",
      },
      {
        q: "How do woodworkers calculate materials on an invoice?",
        a: "Hardwood is usually bought by the board foot, which is the volume of a board 1 inch thick, 12 inches wide and 12 inches long. Multiply thickness by width by length in inches and divide by 144. Add a waste factor, often 20% to 30% for figured or rough lumber, then show the material cost as a line or include it in the piece price.",
      },
      {
        q: "Should I show my hourly labor on a custom furniture invoice?",
        a: "You can, but many makers prefer a fixed price per piece and show labor only for changes or repairs. A fixed price rewards your efficiency and avoids debates about hours. If you show labor, break it into stages such as milling, joinery, assembly and finishing. For restoration and repair work, hourly billing is more common because the scope is less predictable.",
      },
      {
        q: "What if a client changes the design after I have started?",
        a: "Treat it as a change order. Write down the change, the extra cost and any schedule impact, and get the client's approval before continuing. Then list the change order as a separate line on the invoice. If the change means scrapping work already done, include the wasted materials and time, because the original deposit was calculated on the original design.",
      },
      {
        q: "Can I charge storage if a client does not collect their furniture?",
        a: "Yes, if your terms say so. Many makers allow a grace period, such as 14 or 30 days after completion, then charge a weekly or monthly storage fee. Some contracts also say the piece may be sold to recover costs after a long period, subject to state law on abandoned property. State the policy in your contract and invoice notes.",
      },
      {
        q: "When does ownership of a custom piece pass to the client?",
        a: "Your contract can say that title passes to the client when the final payment is received, which protects you if the balance goes unpaid. Make sure the deposit terms and the delivery policy match: many makers do not release or deliver a piece until it is paid in full. Note this on the final invoice so there is no confusion at pickup.",
      },
      {
        q: "What payment methods are common for custom furniture?",
        a: "Bank transfer, check and card are common. Card payments are convenient for clients but cost the maker processing fees, which matter on large pieces. Some makers offer a small discount for bank transfer or pass on a surcharge where state law and card network rules allow. Avoid releasing a piece on an uncleared check for a large final balance.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A custom furniture invoice template bills a client for a commissioned piece such as a dining table, bookcase or bed. It describes the piece, wood species and dimensions, the agreed price or materials and labor, finishing, hardware, design fees, delivery and installation, sales tax, the deposit received and the balance due before release.</p>

<p>Custom furniture makers and woodworkers sell something unusual: a one-off object, designed with the client, that can take weeks to build and costs hundreds or thousands of dollars in lumber before the first cut. That makes deposits, clear specifications and change orders essential, and the custom furniture invoice is where they all come together.</p>
<p>This guide covers how furniture makers price commissions, how to calculate board feet and finishing, how to set a deposit schedule, what to include on a woodworking invoice, how sales tax works and how to handle delivery, storage and changes. It includes a full example and a worked board foot calculation. You can create the invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a custom furniture invoice?</h2>
<p>A custom furniture invoice is a request for payment from a furniture maker, woodworker or small furniture studio for a made-to-order piece. Unlike a retail furniture receipt, it describes a specific design, often with drawings attached, and usually comes in stages: a deposit invoice at order, sometimes a progress invoice, and a final invoice before delivery.</p>
<p>It overlaps with a <a href="/blog/carpentry-invoice-template">carpentry invoice</a> when the work is built-in, such as cabinets or shelving, and with an <a href="/blog/artist-commission-invoice-template">artist commission invoice</a> when the piece is sculptural or one of a kind.</p>

<h2>How furniture makers price commissions</h2>
<p>There are two common approaches:</p>
<table><thead><tr><th>Method</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Fixed price per piece</td><td>Materials + estimated hours x shop rate + margin, quoted as one price</td><td>Most commissions, repeat designs</td></tr>
<tr><td>Materials plus labor</td><td>Actual materials (with markup) + hours x rate</td><td>Repairs, restoration, prototypes</td></tr>
<tr><td>Design fee plus build price</td><td>Separate fee for drawings and samples, credited or not against the build</td><td>Complex or unique pieces</td></tr>
<tr><td>Catalog price with options</td><td>Base price for a standard design, plus options (size, species, finish)</td><td>Studios with a product line</td></tr>
</tbody></table>
<p>For a fixed price, you still need to know your numbers: materials, hardware, finishing supplies, shop overhead and the hours each stage takes. Our guide to <a href="/blog/how-to-calculate-profit-margin">calculating profit margin</a> helps you check that the price covers everything, and the article on <a href="/blog/markup-vs-margin">markup vs margin</a> explains why a 50% markup is not a 50% margin.</p>

<h2>How to calculate board feet and materials</h2>
<p>Hardwood lumber is sold by the board foot (BF): a piece 1 inch thick, 12 inches wide and 12 inches long. The formula is:</p>
<p><strong>Board feet = thickness (in) x width (in) x length (in) / 144</strong></p>
<p>Rough lumber thickness is often expressed in quarters: 4/4 is 1 inch, 8/4 is 2 inches. Because boards have defects, figure and grain to match, add a waste factor, commonly 20% to 30% (more for highly figured wood or bookmatched tops).</p>
<h3>Worked example: walnut dining table top</h3>
<ul>
<li>Finished top: 84 in x 40 in, about 1.5 in thick, glued up from 8/4 rough boards.</li>
<li>Rough volume: 2 x 40 x 84 / 144 = 46.7 BF.</li>
<li>Add 25% waste: 46.7 x 1.25 = 58.4 BF, round to 59 BF.</li>
<li>Base and aprons: another 32 BF of 8/4 after waste.</li>
<li>Total: 91 BF of walnut. At an illustrative $16 per BF, that is $1,456 in lumber before hardware or finish.</li>
</ul>
<p>Lumber prices vary widely by species, grade, thickness and region, so use your supplier's current price list. Whether you show materials as a line or bundle them into the piece price is a choice, but you must know the figure to price the job correctly. For pricing materials you supply, see <a href="/blog/materials-markup">how to mark up materials</a>.</p>

<h2>Finishing, hardware, delivery and other line items</h2>
<ul>
<li><strong>Finishing:</strong> oil, hardwax oil, lacquer, conversion varnish or paint. Spray finishes and multi-coat processes take days; price them as a separate stage or line if clients choose between options.</li>
<li><strong>Hardware:</strong> drawer slides, hinges, pulls, bed rail fasteners, table extension slides. Premium hardware can add hundreds of dollars.</li>
<li><strong>Upholstery or glass:</strong> if subcontracted, show it as its own line. The <a href="/blog/upholstery-invoice-template">upholstery invoice template</a> shows how an upholsterer may bill you.</li>
<li><strong>Design fee:</strong> drawings, renderings, finish samples. State whether it is credited against the build.</li>
<li><strong>Delivery and installation:</strong> by distance or flat zones, extra for stairs, assembly or wall anchoring.</li>
<li><strong>Crating and shipping:</strong> for long-distance clients, freight and crate construction.</li>
<li><strong>Storage:</strong> after a grace period if the client does not collect.</li>
</ul>
<p>Safety rules can also apply. Dressers and other clothing storage units sold in the US are subject to a federal tip-over stability standard enforced by the <a href="https://www.cpsc.gov">Consumer Product Safety Commission</a>; if you build them, check the current requirements and include anti-tip hardware.</p>

<h2>Deposits and payment schedules for custom furniture</h2>
<p>Because you buy materials before building and the piece is made for one person, deposits are standard. Common schedules:</p>
<table><thead><tr><th>Project size</th><th>Typical schedule</th></tr></thead><tbody>
<tr><td>Small pieces (side table, shelf)</td><td>50% at order, 50% on completion before pickup</td></tr>
<tr><td>Medium (dining table, bed)</td><td>50% at order, 50% before delivery</td></tr>
<tr><td>Large or multi-piece commissions</td><td>One third at order, one third at dry-fit or before finishing, one third before delivery</td></tr>
</tbody></table>
<p>Send a separate <a href="/blog/deposit-invoice">deposit invoice</a> at order so the client has a record, and state that the deposit secures a slot in your build schedule. On the final invoice, subtract every payment received. Many makers do not release a piece until it is paid in full; say so in the contract and on the invoice.</p>

<h2>Is custom furniture subject to sales tax?</h2>
<p>In most US states that have a sales tax, furniture is tangible personal property and its full selling price, including the labor to make it, is generally taxable. Some points to check in your state:</p>
<ul>
<li>Whether delivery or shipping charges are taxable when stated separately (see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>).</li>
<li>Whether built-in furniture attached to a home is treated as a real property improvement, which can change who pays tax and how.</li>
<li>Whether you need a <a href="/blog/sellers-permit">seller's permit</a> and resale certificate to buy lumber tax-free for resale.</li>
<li>Where tax is due for out-of-state shipments, which depends on <a href="/blog/sales-tax-nexus">sales tax nexus</a> rules.</li>
</ul>
<p>Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to work out the tax once you know your rate. This is general information, not tax advice.</p>

<h2>Example custom furniture invoice (final)</h2>
<p>A small woodworking studio sends the final invoice for a walnut dining table and bench. Names and prices are fictional and illustrative.</p>
<p><strong>Oak &amp; Iron Studio</strong> | 12 Foundry Lane, Asheville, NC 28806<br>
<strong>Invoice:</strong> OIS-2026-044 | <strong>Issued:</strong> October 29, 2026 | <strong>Due:</strong> before delivery, scheduled November 6, 2026<br>
<strong>Client:</strong> Rachel Kim | <strong>Delivery address:</strong> 501 Laurel Street, Asheville, NC | <strong>Order date:</strong> August 18, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Dining table, solid black walnut, 84 x 40 in, trestle base, breadboard ends, hardwax oil finish</td><td>1</td><td>$5,400.00</td><td>$5,400.00</td></tr>
<tr><td>Matching bench, walnut, 72 x 15 in</td><td>1</td><td>$1,250.00</td><td>$1,250.00</td></tr>
<tr><td>Design fee (drawings, two finish samples)</td><td>1</td><td>$200.00</td><td>$200.00</td></tr>
<tr><td>Change order 1: add 2 in to table width (approved Sept 5)</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td>Delivery and placement, local zone 1, two-person crew</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$7,180.00</strong></td></tr>
<tr><td colspan="3">Sales tax at 7.00% (illustrative combined rate)</td><td>$502.60</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$7,682.60</strong></td></tr>
<tr><td colspan="3">Deposit paid August 18 (50% of original quote)</td><td>-$3,325.00</td></tr>
<tr><td colspan="3"><strong>Balance due before delivery</strong></td><td><strong>$4,357.60</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Title passes on receipt of full payment. Care instructions attached; re-oil annually. One-year warranty on joinery and workmanship. Pay by bank transfer or card. Pieces not collected or delivered within 30 days of completion incur storage at $25 per week.</p>
<p>The example taxes delivery along with the furniture for simplicity. In some states separately stated delivery is exempt; check your own state's rule. Tax: $7,180 x 0.07 = $502.60. Balance: $7,682.60 - $3,325.00 = $4,357.60.</p>

<h2>Worked example: pricing a commission from cost to quote</h2>
<p>Here is how a maker might build the price of the walnut table above, using illustrative figures. The point is the method, not the specific numbers.</p>
<table><thead><tr><th>Cost element</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Walnut lumber</td><td>91 BF x $16</td><td>$1,456</td></tr>
<tr><td>Finish, glue, abrasives</td><td>Estimate</td><td>$120</td></tr>
<tr><td>Hardware (table fasteners)</td><td>Estimate</td><td>$45</td></tr>
<tr><td>Labor</td><td>42 hours x $65 shop rate (covers wages and overhead)</td><td>$2,730</td></tr>
<tr><td><strong>Total cost</strong></td><td></td><td><strong>$4,351</strong></td></tr>
<tr><td>Profit</td><td>About 24% on cost</td><td>$1,049</td></tr>
<tr><td><strong>Quoted price</strong></td><td></td><td><strong>$5,400</strong></td></tr>
</tbody></table>
<p>The shop rate has to cover more than the maker's own pay: rent, tooling, dust collection, insurance, software, marketing and the hours spent on quoting and delivery that are never billed directly. If the table ends up taking 55 hours instead of 42, the profit shrinks to about $204, which is why tracking hours on every commission matters even when you quote a fixed price. Our guide to <a href="/blog/overhead-costs">overhead costs</a> shows how to work out a shop rate.</p>
<h3>Repairs and refinishing</h3>
<p>Restoration work is harder to quote because you cannot see hidden damage until a piece is taken apart. Many makers quote a range, charge a minimum bench fee and bill actual hours plus materials. If you do this, give the client a not-to-exceed figure and contact them before going over it.</p>
<h3>Shipping out of state</h3>
<p>Selling to clients in other states adds crating, freight insurance and sometimes white-glove delivery. Quote freight separately because it changes with distance and fuel prices, and state who carries the risk of damage in transit. If the piece is shipped by a carrier, document its condition with photos before crating.</p>

<h2>What to write in the notes of a furniture invoice</h2>
<p>The notes section of a custom furniture invoice does a lot of work. Short, specific notes prevent most of the disputes makers run into after delivery. Consider including:</p>
<ul>
<li><strong>Title and release:</strong> "Title passes and the piece is released on receipt of full payment."</li>
<li><strong>Wood movement:</strong> "Solid wood expands and contracts with humidity; small seasonal gaps are normal and not a defect."</li>
<li><strong>Natural variation:</strong> "Color, grain and figure will differ from samples and photos."</li>
<li><strong>Care:</strong> finish type and how to maintain it, such as re-oiling once a year.</li>
<li><strong>Warranty:</strong> what is covered (joinery, workmanship) and for how long, and what is not (misuse, sunlight, heat damage).</li>
<li><strong>Storage:</strong> the grace period and weekly fee after completion.</li>
<li><strong>Payment methods:</strong> bank details or card link, and any card fee.</li>
</ul>
<p>Our collection of <a href="/blog/invoice-notes-examples">invoice notes examples</a> has more wording you can adapt for other situations.</p>

<h2>How to create a woodworking invoice, step by step</h2>
<ol>
<li>Start from the signed quote or order form, with drawings and specifications attached.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> and add your studio name and logo.</li>
<li>Number each invoice for the commission (deposit, progress, final); the <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li>Describe each piece with species, dimensions and finish.</li>
<li>Add design fees, change orders, delivery and storage as separate lines.</li>
<li>Apply sales tax according to your state rules.</li>
<li>Subtract the deposit, add your title, warranty and care notes, then send the PDF a week before delivery.</li>
</ol>

<h2>Common custom furniture invoicing mistakes</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Table: $5,400" is hard to defend if the client disputes the size or finish.</li>
<li><strong>No deposit or too small a deposit</strong> to cover lumber.</li>
<li><strong>Changes made on a handshake.</strong> Always get approval for extra cost in writing; see our <a href="/blog/scope-creep-change-order">change order guide</a>.</li>
<li><strong>Forgetting sales tax</strong> on taxable pieces.</li>
<li><strong>Delivering before final payment</strong> on large balances.</li>
<li><strong>Underpricing finishing time,</strong> which often takes longer than expected.</li>
</ul>

<p>A clear custom furniture invoice describes the piece in detail, shows materials and changes, applies tax correctly and credits every deposit, so the final payment is easy for the client to approve. Our invoice generator is free, requires no sign-up and creates a PDF in your browser, giving woodworkers a quick way to send polished invoices from the shop.</p>
`,
  },
  {
    slug: "chimney-sweep-invoice-template",
    title: "Chimney Sweep Invoice Template (Inspections + Repairs)",
    description:
      "Chimney sweep invoice template with sweeping, NFPA 211 Level 1, 2 and 3 inspections, video scans, caps, liners and masonry repairs, plus a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "home-inspection-invoice-template",
      "hvac-invoice-template",
      "masonry-invoice-template",
    ],
    faqs: [
      {
        q: "What is the difference between a Level 1, 2 and 3 chimney inspection?",
        a: "Under NFPA 211, a Level 1 inspection checks the readily accessible parts of the chimney, fireplace or appliance and is the minimum for routine annual service. A Level 2 adds accessible areas such as attics and crawl spaces and a video scan of the flue, and is required after changes or before a property sale. A Level 3 involves removing parts of the structure to reach concealed areas when a hidden hazard is suspected.",
      },
      {
        q: "Should a chimney sweep invoice include an inspection report?",
        a: "Yes. The invoice records what was done and paid, while a separate written report records the condition of the system, the inspection level, findings and recommendations, ideally with photos or video stills. Homeowners, insurers and real estate buyers often ask for the report. Reference the report number on the invoice so the two documents stay linked.",
      },
      {
        q: "How often should a chimney be swept and inspected?",
        a: "NFPA 211 calls for chimneys, fireplaces and vents to be inspected at least once a year, with cleaning done when needed, for example when creosote or soot buildup reaches a certain level. How often a chimney needs sweeping depends on how much it is used and what fuel is burned. Many sweeps offer annual service reminders, which also help with repeat billing.",
      },
      {
        q: "Do chimney sweeps charge sales tax?",
        a: "It depends on the state. Some states tax cleaning or repair services to real property, others do not, and parts such as caps, dampers and liners are commonly taxable as tangible goods or treated as part of a construction contract. Keep parts and labor on separate lines and check your state's rules so you apply tax only where it is required.",
      },
      {
        q: "What does a chimney video scan add to the price?",
        a: "A video scan uses a camera lowered or pushed through the flue to record the condition of the liner and joints. It is a standard part of a Level 2 inspection and may be offered as an add-on to routine service. Many sweeps price it as a separate line, and some include the recording or still images with the report, which helps justify repair quotes.",
      },
      {
        q: "Can I charge a trip fee if the homeowner is not home?",
        a: "Yes, if your booking terms say so. Many chimney companies charge a missed appointment or trip fee when a customer is not available or cancels on short notice, because the crew and truck time is lost. State the fee when booking and in your confirmation message, and bill it as its own line rather than adding it quietly to the next service.",
      },
      {
        q: "How should I invoice a chimney liner installation?",
        a: "List the liner type and diameter, length in feet, insulation if used, top plate, cap and connector, and the labor, and attach the inspection findings that justified the work. Liners are a bigger ticket item, so a deposit and a written estimate approved before work is common. If the liner is for a new appliance, note any permit or inspection required locally.",
      },
      {
        q: "Should a chimney sweep invoice note safety recommendations?",
        a: "Yes, briefly. A short note such as 'Crown cracks observed, repair recommended, see report' documents that the customer was told about a hazard. It protects you if problems arise later and encourages follow-up work. If you find a serious hazard, such as a damaged liner, many sweeps advise the customer in writing not to use the appliance until it is repaired.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A chimney sweep invoice template bills a homeowner or property manager for chimney sweeping, inspection and repair. It lists the appliance and flue serviced, the sweep, the NFPA 211 inspection level (1, 2 or 3), video scans, parts such as caps, dampers and liners, masonry or waterproofing work, trip fees, tax where applicable and the amount due.</p>

<p>Chimney work ranges from a quick annual sweep to a multi-day liner or crown rebuild. Customers often book a cleaning and then hear about repairs, which makes a clear chimney sweep invoice (with a link to the written inspection report) important for trust and for winning follow-up work. Real estate agents, insurers and buyers also ask for proof that a chimney was inspected.</p>
<p>This guide covers what a chimney sweep invoice should include, how the NFPA 211 inspection levels work, typical services and repairs, how to price and present them, and a complete example invoice with real arithmetic. You can create it in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a chimney sweep invoice?</h2>
<p>A chimney sweep invoice is a bill from a chimney service company for cleaning, inspecting or repairing chimneys, fireplaces, wood and pellet stoves, inserts, gas appliance vents and sometimes dryer vents. It records the services delivered, parts installed and payment, while a separate inspection report records the condition of the system.</p>
<p>Chimney companies often also provide masonry and HVAC-adjacent services. If you service furnaces or gas appliances, the <a href="/blog/hvac-invoice-template">HVAC invoice template</a> covers those jobs; for brick and stone repairs at scale, see the <a href="/blog/masonry-invoice-template">masonry invoice template</a>.</p>

<h2>Chimney inspection levels under NFPA 211</h2>
<p>NFPA 211, the <a href="https://www.nfpa.org/codes-and-standards/nfpa-211-standard-development/211">Standard for Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances</a>, defines three levels of inspection. Naming the level on your invoice and report tells the customer exactly what was checked.</p>
<table><thead><tr><th>Level</th><th>What it covers</th><th>When it is used</th></tr></thead><tbody>
<tr><td>Level 1</td><td>Readily accessible portions of the chimney exterior, interior and appliance connection</td><td>Annual service when the system and its use have not changed</td></tr>
<tr><td>Level 2</td><td>Everything in Level 1 plus accessible areas such as attics, basements and crawl spaces, and a video scan or similar inspection of the flue interior</td><td>After a change in fuel or appliance, before a property sale or transfer, or after a chimney fire, earthquake or other event that may have caused damage</td></tr>
<tr><td>Level 3</td><td>Level 1 and 2 plus removal of parts of the building or chimney to reach concealed areas</td><td>When a serious hidden hazard is suspected and cannot be confirmed otherwise</td></tr>
</tbody></table>
<p>NFPA 211 also calls for chimneys, fireplaces and vents to be inspected at least once a year and cleaned when needed. Many sweeps hold certifications from the <a href="https://www.csia.org">Chimney Safety Institute of America (CSIA)</a> or similar bodies; if you do, list the credential on your invoice header.</p>

<h2>Common chimney services and how they are billed</h2>
<table><thead><tr><th>Service</th><th>Common unit</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>Standard chimney sweep (one flue)</td><td>Per flue</td><td>Additional flues priced separately</td></tr>
<tr><td>Level 1 inspection</td><td>Often included with sweep</td><td>State "included" rather than leaving it off</td></tr>
<tr><td>Level 2 inspection with video scan</td><td>Per flue</td><td>Common for home sales; include report</td></tr>
<tr><td>Wood stove or insert cleaning</td><td>Per appliance</td><td>Removing and reinstalling inserts may add time</td></tr>
<tr><td>Glazed creosote removal</td><td>Per hour or per treatment</td><td>Chemical or rotary methods; may need several visits</td></tr>
<tr><td>Chimney cap install</td><td>Each</td><td>Size and material (galvanized, stainless, copper)</td></tr>
<tr><td>Top-sealing damper</td><td>Each</td><td>Parts plus installation</td></tr>
<tr><td>Crown repair or seal</td><td>Flat or per sq ft</td><td>Repair vs full rebuild</td></tr>
<tr><td>Tuckpointing / repointing</td><td>Per sq ft or hour</td><td>Mortar joint repair</td></tr>
<tr><td>Waterproofing</td><td>Per chimney</td><td>Breathable sealant application</td></tr>
<tr><td>Stainless steel liner</td><td>Per foot plus fittings</td><td>Diameter, insulation, top plate, cap</td></tr>
<tr><td>Dryer vent cleaning</td><td>Per vent</td><td>Popular add-on</td></tr>
<tr><td>Trip / missed appointment fee</td><td>Each</td><td>Per booking policy</td></tr>
</tbody></table>
<p>We do not give typical prices because they vary widely by region, roof access and chimney height. Build your price list from your own labor, insurance, equipment and travel costs, and publish it so customers know what to expect; our <a href="/blog/price-list-template">price list template</a> can help. A <a href="/blog/service-call-fee">service call fee</a> is another common way to cover travel time for small jobs.</p>

<h2>What should a chimney sweep invoice include?</h2>
<ul>
<li>Company name, address, phone, license (where required) and certifications.</li>
<li>Customer name, service address and contact details.</li>
<li>Invoice number, service date and due date.</li>
<li>Appliance and flue details: fireplace, stove, insert or furnace flue; fuel type; number of flues.</li>
<li>Services performed, with the inspection level named.</li>
<li>Parts installed, with sizes and materials.</li>
<li>Labor for repairs, flat or hourly.</li>
<li>Findings summary and reference to the written report.</li>
<li>Tax on taxable items, payment received and balance.</li>
<li>Payment terms and warranty on repairs or parts.</li>
</ul>

<h2>Example chimney sweep invoice</h2>
<p>A chimney company performs a sweep, Level 2 inspection with video scan for a home sale, installs a cap and seals a cracked crown. Names and prices are fictional and illustrative only.</p>
<p><strong>Hearthside Chimney Services</strong> | 230 Old Mill Road, Burlington, VT 05401 | CSIA Certified Chimney Sweep on staff<br>
<strong>Invoice:</strong> HCS-26-1192 | <strong>Service date:</strong> October 27, 2026 | <strong>Due:</strong> on receipt<br>
<strong>Customer:</strong> Daniel Brooks | <strong>Service address:</strong> 19 Orchard Street, Burlington, VT | <strong>Report:</strong> HCS-R-26-1192</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Chimney sweep, masonry fireplace flue (wood)</td><td>1</td><td>$249.00</td><td>$249.00</td></tr>
<tr><td>Level 2 inspection with video scan (real estate transfer)</td><td>1</td><td>$199.00</td><td>$199.00</td></tr>
<tr><td>Stainless steel chimney cap, 13 x 13 in, supplied and installed</td><td>1</td><td>$235.00</td><td>$235.00</td></tr>
<tr><td>Crown seal, elastomeric coating (labor)</td><td>1</td><td>$310.00</td><td>$310.00</td></tr>
<tr><td>Crown coating material</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Dryer vent cleaning</td><td>1</td><td>$129.00</td><td>$129.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,207.00</strong></td></tr>
<tr><td colspan="3">Sales tax on materials ($235.00 cap + $85.00 coating = $320.00 x 6%)</td><td>$19.20</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,226.20</strong></td></tr>
<tr><td colspan="3">Paid by card on site</td><td>-$1,226.20</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$0.00</strong></td></tr>
</tbody></table>
<p><strong>Findings summary:</strong> Clay tile liner intact; minor mortar joint gaps at two tiles noted for monitoring. Crown hairline cracks sealed. See report HCS-R-26-1192 with video stills. Workmanship warranty: one year on crown seal.</p>
<p>Tax treatment of chimney labor and parts differs by state; the 6% tax on materials is for illustration only, and in this example the cap price includes installation for simplicity. Check your state's rules and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> once you know your rate.</p>
<h3>Worked example: quoting the follow-up liner job</h3>
<p>The video scan shows a cracked flue tile in a second chimney serving an oil furnace being replaced with a gas unit. The company quotes a stainless steel liner. Using illustrative prices:</p>
<ul>
<li>Liner, 28 ft at $38 per ft = $1,064</li>
<li>Top plate, cap and connector fittings = $320</li>
<li>Labor, 6 hours for two technicians at $95 per technician hour = 6 x 2 x $95 = $1,140</li>
<li>Subtotal = $2,524, with a 40% deposit of $1,009.60 to order materials</li>
</ul>
<p>Send it as an estimate first; the <a href="/blog/estimate-template">estimate template</a> shows the format. Once approved, issue a <a href="/blog/deposit-invoice">deposit invoice</a>, then a final invoice crediting the deposit when the job is complete.</p>

<h2>How to present repairs found during a sweep</h2>
<p>Most chimney repair revenue starts with a finding during a routine sweep. How you present that finding affects whether the customer trusts it and pays for the repair. A simple process:</p>
<ol>
<li><strong>Show the evidence.</strong> Photos or video stills of the cracked crown, missing cap, deteriorated mortar or damaged liner, attached to the report.</li>
<li><strong>Explain the risk in plain language.</strong> For example, water entry damaging masonry, or gaps in a flue liner allowing heat and gases to reach combustible materials.</li>
<li><strong>Separate urgent from optional.</strong> A damaged liner on an appliance in use is urgent; waterproofing an older chimney may be a recommendation.</li>
<li><strong>Quote in writing</strong> with parts and labor on separate lines.</li>
<li><strong>Invoice only approved work.</strong> If a customer declines, note that on the report and invoice for your records.</li>
</ol>
<p>Writing "Customer advised not to use the fireplace until the liner is repaired" on a dated document protects you and makes the risk clear to the homeowner.</p>
<h3>Gas, oil and pellet appliances</h3>
<p>Chimney sweeps often service more than wood fireplaces. Gas appliance vents, oil furnace flues and pellet stove vents have different cleaning needs and different parts. Name the fuel and appliance type on the invoice line, because it affects what inspection was appropriate and what parts are compatible. When a homeowner switches fuel or replaces an appliance, NFPA 211 calls for a Level 2 inspection, so the invoice for that job should say so.</p>
<h3>Taking payment on site</h3>
<p>Residential chimney work is ideal for collecting payment before you leave. A card reader or payment link on the PDF invoice reduces follow-up. If you charge a card fee, check the rules first; our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> explains the limits.</p>

<h2>Who to bill: homeowners, landlords and real estate deals</h2>
<p>The person at the door is not always the person who pays. Before the visit, confirm who receives the invoice:</p>
<ul>
<li><strong>Homeowners:</strong> bill and collect on site.</li>
<li><strong>Tenants:</strong> many leases make the landlord responsible for chimney maintenance. Get the landlord's or property manager's approval and billing details before you start, and do not rely on the tenant to pass the invoice on.</li>
<li><strong>Property managers:</strong> may need a work order or PO number on the invoice, and often pay on net 30 terms.</li>
<li><strong>Real estate transactions:</strong> Level 2 inspections are often ordered by the buyer or their agent but paid at closing. Agree in writing whether payment is due at the visit or through the title company, and put the property address and closing date on the invoice.</li>
</ul>

<h2>How to create a chimney sweep invoice, step by step</h2>
<ol>
<li>Record the appliance, flue and inspection level on the job ticket.</li>
<li>Write the inspection report with photos or video stills.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> on your phone or laptop and add your logo and certifications.</li>
<li>Number invoices consistently; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help, and matching the report number is useful.</li>
<li>Add services, parts and labor as separate lines; apply tax where required.</li>
<li>Add a one-line findings summary and the report reference.</li>
<li>Take payment on site if possible and send the PDF and report by email.</li>
</ol>

<h2>Seasonal billing and repeat customers</h2>
<p>Chimney work is seasonal: demand peaks in late summer and fall before heating season, and slows in spring. That makes repeat business valuable. A few ideas:</p>
<ul>
<li>Offer an annual service reminder and book next year's sweep when you invoice this year's.</li>
<li>Bundle sweep, inspection and dryer vent cleaning at a set price for returning customers.</li>
<li>For property managers with many units, send a single monthly invoice listing each address, or use <a href="/blog/recurring-invoices-guide">recurring invoices</a> for annual service contracts.</li>
<li>For real estate inspections, invoice the party who ordered the work, which might be the seller, buyer or agent, and agree up front who pays. The <a href="/blog/home-inspection-invoice-template">home inspection invoice template</a> deals with the same issue.</li>
</ul>

<h2>Common chimney sweep invoicing mistakes</h2>
<ul>
<li><strong>Not naming the inspection level,</strong> which leaves customers and buyers unsure what was checked.</li>
<li><strong>No report reference,</strong> so repair recommendations get lost.</li>
<li><strong>Bundling parts and labor,</strong> which makes tax and warranty claims harder.</li>
<li><strong>Doing repairs without written approval.</strong> Get sign-off on an estimate first.</li>
<li><strong>Skipping trip fee policies</strong> and absorbing the cost of no-shows.</li>
<li><strong>Waiting to invoice</strong> instead of collecting on site at the end of the visit.</li>
</ul>

<p>A clear chimney sweep invoice names the services, the NFPA 211 inspection level, parts and any repairs, and points to the written report, which builds trust and sets up the next job. Our invoice generator is free, needs no sign-up and downloads a PDF built in your browser, so you can finish the paperwork before you leave the driveway.</p>
`,
  },
  {
    slug: "demolition-invoice-template",
    title: "Demolition Invoice Template: Interior, Structural, Disposal",
    description:
      "Demolition invoice template for interior and structural demo: disposal and dumpster fees, hazmat surveys, permits, utility disconnects and a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "excavation-invoice-template",
      "junk-removal-invoice-template",
      "construction-subcontractor-invoice-template",
    ],
    faqs: [
      {
        q: "How do demolition contractors price their work?",
        a: "Small interior jobs are often priced per square foot of area or as a flat fee per room, while whole-building demolition is usually quoted as a lump sum based on building size, construction type, access and disposal costs. Disposal is frequently priced per ton or per container. Many contractors itemize labor, equipment, disposal, permits and surveys so the customer can see what drives the total.",
      },
      {
        q: "Do I need an asbestos survey before demolition?",
        a: "Often, yes. The federal asbestos NESHAP requires owners or operators of covered facilities to inspect for asbestos before demolition or renovation and, for demolitions, to notify the state or EPA in advance. Individual residential buildings with four or fewer units are generally outside the federal rule, but many states and cities require surveys for homes too. Check local rules before quoting.",
      },
      {
        q: "Who pays for the demolition permit?",
        a: "The contract decides. Commonly, the demolition contractor pulls the permit and bills the fee to the owner at cost, sometimes with an administration fee for the time spent. Show the permit number and amount as a separate line. Some owners or general contractors prefer to pull permits themselves, in which case the invoice should state that permits are by others.",
      },
      {
        q: "How are dumpster and disposal fees shown on a demolition invoice?",
        a: "List each roll-off container by size, such as a 20 or 30 cubic yard dumpster, with the number of hauls, and show tipping fees by weight if the landfill charges per ton. Some contractors include a set weight per container and charge overage per ton. Attach weight tickets for large jobs so the customer can verify the charges.",
      },
      {
        q: "What is selective or interior demolition?",
        a: "Selective or interior demolition, sometimes called a soft strip, removes specific elements such as drywall, flooring, cabinets, ceilings or non-structural walls while leaving the building structure in place. It is common before remodels and commercial tenant improvements. It needs care to protect what stays, so invoices often include protection, dust control and haul-out lines in addition to labor.",
      },
      {
        q: "Can I credit salvage value on a demolition invoice?",
        a: "Yes. If you sell scrap metal or salvage materials such as beams, fixtures or brick, your contract can give the owner a credit, or the value can be reflected in a lower price. Show any salvage credit as a negative line so the owner sees it. Some owners prefer to keep salvage items themselves; list those exclusions in the contract.",
      },
      {
        q: "What if hazardous materials are found during demolition?",
        a: "Stop work in the affected area, notify the owner and follow the applicable regulations. Asbestos, lead paint, mold or PCB-containing materials found after work begins usually require a licensed abatement contractor and a written change order. Bill the abatement and any delay as separate change order lines with the approval date, and keep the survey and disposal records.",
      },
      {
        q: "Do demolition contractors charge sales tax?",
        a: "Sales tax on demolition varies by state. Some states treat demolition as a real property service that is not taxed, while others tax certain services or dumpster rentals. Disposal surcharges and landfill fees may carry their own local taxes. Check your state's rules and list taxable items separately so the invoice shows how the tax was calculated.",
      },
      {
        q: "What payment terms are common for demolition jobs?",
        a: "Residential demolition often uses a deposit at signing and the balance on completion, while commercial jobs are billed monthly through the general contractor with retainage withheld. Disposal and permit costs are sometimes billed as they are incurred. Agree terms in the contract and send lien waivers with payments on commercial and larger residential projects.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A demolition invoice template bills for tearing down or stripping out all or part of a structure. It lists the scope (interior selective demo or full structural demolition), labor, equipment, dumpsters and disposal by load or ton, permits, utility disconnects, hazmat surveys and abatement, site restoration, salvage credits, payments received and the balance due.</p>

<p>Demolition looks simple from the outside, but the cost depends on hidden factors: what the building is made of, whether asbestos or lead paint is present, how far debris must travel and what the landfill charges per ton. When those details are missing from a demolition invoice, owners question the bill and general contractors delay payment. An itemized demolition invoice template solves that.</p>
<p>This guide covers interior vs structural demolition, how demo jobs are priced, disposal and dumpster billing, hazmat surveys and permits, what a demolition invoice should include, and a full example with real arithmetic. You can recreate it in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a demolition invoice?</h2>
<p>A demolition invoice is a bill from a demolition contractor, general contractor or specialty subcontractor for removing structures or building components, hauling away debris and preparing the site for the next phase. On commercial projects it is usually a subcontractor progress invoice to the general contractor; see the <a href="/blog/construction-subcontractor-invoice-template">construction subcontractor invoice template</a> for that format. On residential jobs, it often goes straight to the homeowner.</p>

<h2>Interior vs structural demolition</h2>
<table><thead><tr><th>Type</th><th>What it involves</th><th>Common pricing</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>Interior / selective demo (soft strip)</td><td>Removing drywall, flooring, cabinets, ceilings, fixtures, non-structural walls</td><td>Per sq ft, per room or hourly</td><td>Protection, dust control, haul-out by hand</td></tr>
<tr><td>Partial structural demo</td><td>Removing a wing, garage, porch or load-bearing walls with shoring</td><td>Lump sum</td><td>Engineering, shoring, temporary supports</td></tr>
<tr><td>Full building demolition</td><td>Taking down the entire structure, usually with heavy equipment</td><td>Lump sum, sometimes per sq ft of building</td><td>Utility disconnects, foundation removal, backfill</td></tr>
<tr><td>Concrete removal</td><td>Slabs, driveways, footings</td><td>Per sq ft or per ton</td><td>Thickness and reinforcement matter</td></tr>
<tr><td>Hand demolition</td><td>Tight sites where machines cannot reach</td><td>Hourly or lump sum</td><td>Higher labor share</td></tr>
</tbody></table>
<p>For site work after demolition, such as grading, foundation removal or trenching, the <a href="/blog/excavation-invoice-template">excavation invoice template</a> shows how those items are typically billed.</p>

<h2>How demolition jobs are priced</h2>
<p>Demolition prices are driven by a handful of factors. List them in your estimate so the invoice matches:</p>
<ul>
<li><strong>Size and construction type:</strong> wood frame, masonry, steel or concrete.</li>
<li><strong>Access:</strong> distance from the street, stairs, neighbors close by, overhead lines.</li>
<li><strong>Equipment:</strong> excavators, skid steers, mini excavators, breakers, with mobilization charges to bring them to site.</li>
<li><strong>Disposal:</strong> number of containers, debris weight and local landfill tipping fees.</li>
<li><strong>Hazardous materials:</strong> surveys, abatement and special disposal.</li>
<li><strong>Permits and utilities:</strong> demolition permit, utility disconnect fees, sewer capping.</li>
<li><strong>Site restoration:</strong> backfill, rough grading, seeding.</li>
</ul>
<p>Rates differ widely by region and change with fuel and landfill costs, so we do not list typical prices. Price from your own crew costs, equipment ownership or rental, and current disposal rates. If you rent equipment for a job, the <a href="/blog/equipment-rental-invoice-template">equipment rental invoice template</a> shows how rental companies will bill you, which helps you pass costs through accurately.</p>

<h2>Disposal and dumpster billing</h2>
<p>Disposal is often the largest variable cost in demolition, so show it clearly:</p>
<ol>
<li><strong>By container:</strong> roll-off dumpsters are commonly 10, 20, 30 or 40 cubic yards. List size and number of hauls.</li>
<li><strong>By weight:</strong> many landfills and transfer stations charge per ton. Concrete, brick and plaster are heavy; a container of them weighs far more than one of wood framing.</li>
<li><strong>Included weight plus overage:</strong> a container price may include a set tonnage, with overage billed per ton.</li>
<li><strong>Recycling and salvage:</strong> separating metals, concrete and clean wood can lower disposal fees. Scrap metal may earn a credit.</li>
</ol>
<p>Attach weight tickets for large jobs. Small cleanouts are closer to haul-away work; the <a href="/blog/junk-removal-invoice-template">junk removal invoice template</a> covers load-based pricing for those.</p>

<h2>Hazmat surveys, permits and regulations</h2>
<p>Demolition is one of the most regulated parts of construction. The main federal rules to know:</p>
<ul>
<li><strong>Asbestos NESHAP:</strong> under the Clean Air Act, the EPA's <a href="https://www.epa.gov/asbestos/asbestos-national-emission-standards-hazardous-air-pollutants-neshap">asbestos NESHAP</a> requires a thorough inspection for asbestos before demolition or renovation of covered facilities, and written notice to the state agency or EPA at least 10 working days before a demolition begins. Individual residential buildings with four or fewer dwelling units are generally excluded from the federal definition of a facility, unless they are part of a larger project, but many states and cities require asbestos surveys for houses as well.</li>
<li><strong>Lead paint:</strong> the EPA's <a href="https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules">Renovation, Repair and Painting (RRP) rule</a> applies to work that disturbs painted surfaces in housing and child-occupied facilities built before 1978, including interior demolition. Firms must be certified and follow lead-safe work practices.</li>
<li><strong>Local permits:</strong> most cities require a demolition permit, and often utility disconnect confirmations and sewer capping before issuing it.</li>
</ul>
<p>On the invoice, show the survey fee, any abatement subcontract, the permit and utility fees as separate lines. If hazardous materials appear mid-job, bill the extra work through a written change order. This section is general information, not legal or compliance advice; check the rules with your state environmental agency and local building department.</p>

<h2>What should a demolition invoice include?</h2>
<ul>
<li>Contractor name, address, license number and insurance information.</li>
<li>Customer name, site address and project or contract number.</li>
<li>Invoice number, date, billing period and due date.</li>
<li>Scope description: interior or structural, areas or structures removed.</li>
<li>Labor and equipment, including mobilization.</li>
<li>Disposal: containers, hauls, tonnage, tipping fees.</li>
<li>Permits, utility disconnects, surveys and abatement.</li>
<li>Site restoration items.</li>
<li>Change orders listed separately with approval dates.</li>
<li>Salvage credits as negative lines.</li>
<li>Previous payments, retainage if any, and balance due.</li>
</ul>

<h2>Example demolition invoice (residential, full structure)</h2>
<p>A contractor demolishes a detached single-story house and garage so the owner can rebuild. Names and prices are fictional and illustrative, not a price guide.</p>
<p><strong>Ironclad Demolition Inc.</strong> | 600 Riverside Drive, Sacramento, CA 95814 | License 000000<br>
<strong>Invoice:</strong> ICD-2026-0317 | <strong>Issued:</strong> October 29, 2026 | <strong>Due:</strong> November 13, 2026 (net 15)<br>
<strong>Customer:</strong> Patel Family Trust | <strong>Site:</strong> 42 Willow Court, Sacramento, CA | <strong>Contract:</strong> dated September 15, 2026 | <strong>Permit:</strong> DEM-26-0912</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Pre-demolition asbestos and lead survey (licensed consultant, at cost)</td><td>1</td><td>EA</td><td>$850.00</td><td>$850.00</td></tr>
<tr><td>Asbestos abatement: vinyl floor tile and mastic, licensed subcontractor</td><td>1</td><td>EA</td><td>$3,400.00</td><td>$3,400.00</td></tr>
<tr><td>Demolition permit fee (at cost)</td><td>1</td><td>EA</td><td>$620.00</td><td>$620.00</td></tr>
<tr><td>Utility disconnect coordination and sewer cap</td><td>1</td><td>EA</td><td>$750.00</td><td>$750.00</td></tr>
<tr><td>Equipment mobilization (excavator and skid steer)</td><td>1</td><td>EA</td><td>$900.00</td><td>$900.00</td></tr>
<tr><td>Structure demolition, house and garage, 1,850 sq ft</td><td>1,850</td><td>sq ft</td><td>$5.50</td><td>$10,175.00</td></tr>
<tr><td>Foundation and slab removal</td><td>1</td><td>LS</td><td>$3,200.00</td><td>$3,200.00</td></tr>
<tr><td>30 cu yd roll-off containers, haul and dump (4 tons included per haul)</td><td>9</td><td>haul</td><td>$575.00</td><td>$5,175.00</td></tr>
<tr><td>Overweight tonnage (weight tickets attached)</td><td>7.4</td><td>ton</td><td>$95.00</td><td>$703.00</td></tr>
<tr><td>Backfill and rough grade</td><td>1</td><td>LS</td><td>$1,800.00</td><td>$1,800.00</td></tr>
<tr><td>Salvage credit: scrap metal</td><td>1</td><td>EA</td><td>-$260.00</td><td>-$260.00</td></tr>
<tr><td colspan="4"><strong>Contract total</strong></td><td><strong>$27,313.00</strong></td></tr>
<tr><td colspan="4">Deposit paid September 15</td><td>-$5,000.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$22,313.00</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Survey report, abatement closeout documentation, disposal manifests and weight tickets attached. Unconditional lien waiver will be provided on receipt of final payment. Payment by check or ACH.</p>
<h3>Checking the numbers</h3>
<p>Structure demolition: 1,850 x $5.50 = $10,175. Containers: 9 hauls x $575 = $5,175, which includes 36 tons; actual weight was 43.4 tons, so overage is 7.4 tons x $95 = $703. Summing every line, including the $260 salvage credit, gives $27,313. After the $5,000 deposit, $22,313 remains. Sales tax treatment of demolition and disposal varies by state, so this example shows none; check your state's rules.</p>

<h2>Example interior demolition invoice (commercial tenant space)</h2>
<p>Interior demolition for a commercial build-out is usually billed to a general contractor. Here is a shorter illustrative example for a soft strip of a 3,200 sq ft retail space, billed as a single completed job:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Floor protection and dust barriers</td><td>1</td><td>LS</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Remove non-structural partitions and drywall</td><td>3,200</td><td>sq ft</td><td>$2.10</td><td>$6,720.00</td></tr>
<tr><td>Remove ceiling grid and tiles</td><td>3,200</td><td>sq ft</td><td>$0.80</td><td>$2,560.00</td></tr>
<tr><td>Remove carpet and vinyl base</td><td>2,600</td><td>sq ft</td><td>$0.65</td><td>$1,690.00</td></tr>
<tr><td>20 cu yd containers, haul and dump</td><td>4</td><td>haul</td><td>$495.00</td><td>$1,980.00</td></tr>
<tr><td colspan="4"><strong>Total this invoice</strong></td><td><strong>$13,600.00</strong></td></tr>
<tr><td colspan="4">Less retainage at 10%</td><td>-$1,360.00</td></tr>
<tr><td colspan="4"><strong>Amount due</strong></td><td><strong>$12,240.00</strong></td></tr>
</tbody></table>
<p>The general contractor holds 10% retainage until the whole project is complete, so the subcontractor sends a separate <a href="/blog/retainage-invoice">retainage invoice</a> later to collect the $1,360. Before work, the electrician should make circuits safe and the GC should confirm that a hazmat survey cleared the materials being removed.</p>

<h2>Deposits, progress billing and getting paid on demolition jobs</h2>
<p>Demolition contractors carry large costs early: equipment mobilization, permits, surveys and disposal fees often come before the customer has paid anything. Protect your cash flow with:</p>
<ul>
<li><strong>A deposit</strong> on residential jobs to cover permits, surveys and mobilization, within any state limits on home improvement deposits.</li>
<li><strong>Progress billing</strong> on larger jobs, for example after abatement, after structure removal and after site restoration. See <a href="/blog/progress-billing">progress billing</a> for the format.</li>
<li><strong>Pass-through billing</strong> of disposal as it is incurred on long projects, with weight tickets attached.</li>
<li><strong>Clear terms</strong> such as net 15 for homeowners and the contract terms for general contractors.</li>
</ul>

<h2>Exclusions to state on the contract and invoice</h2>
<p>Demolition disputes usually come from what the customer assumed was included. List exclusions in the contract and repeat the key ones in the invoice notes. Common examples:</p>
<ul>
<li>Removal of hazardous materials not identified in the pre-demolition survey.</li>
<li>Underground tanks, buried debris or unknown foundations.</li>
<li>Tree removal and landscaping beyond the work area.</li>
<li>Repairs to sidewalks, curbs or driveways damaged by others.</li>
<li>Utility company fees beyond those listed.</li>
<li>Final grading, compaction testing or erosion control, if not in scope.</li>
</ul>
<p>When an excluded item becomes necessary, price it as a change order and bill it separately.</p>

<h2>How to create a demolition invoice, step by step</h2>
<ol>
<li>Pull the scope, unit prices and exclusions from the signed contract or <a href="/blog/estimate-template">estimate</a>.</li>
<li>Collect permit receipts, survey invoices, abatement subcontractor invoices and weight tickets.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> and add your company details and license.</li>
<li>Number invoices by project; the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</li>
<li>Enter scope lines, disposal, permits and surveys separately, then change orders and salvage credits.</li>
<li>Subtract deposits and progress payments; note retainage if the contract has it.</li>
<li>Attach documentation and send the PDF with the appropriate <a href="/blog/lien-waiver">lien waiver</a>.</li>
</ol>

<h2>Common demolition invoicing mistakes</h2>
<ul>
<li><strong>Lump sum with no disposal detail,</strong> which invites disputes when tonnage runs over.</li>
<li><strong>No weight tickets</strong> to support overage charges.</li>
<li><strong>Skipping the hazmat survey</strong> or failing to price abatement as a change order when materials are found.</li>
<li><strong>Burying permits and utility fees</strong> in the demolition price.</li>
<li><strong>Forgetting salvage credits</strong> promised in the contract.</li>
<li><strong>Missing lien deadlines.</strong> If payment stalls, know your state's <a href="/blog/mechanics-lien">mechanics lien</a> timeline.</li>
</ul>
<p>Demolition often follows a water or fire loss; the <a href="/blog/water-damage-restoration-invoice-template">water damage restoration invoice template</a> shows how insurance-funded tear-out is billed.</p>

<p>A clear demolition invoice separates scope, disposal, permits, surveys and credits, and backs them up with tickets and reports, so owners and general contractors can approve it quickly. Our invoice generator is free, requires no sign-up and builds the PDF in your browser, so you can send an itemized demolition invoice as soon as the site is clear.</p>
`,
  },
];
