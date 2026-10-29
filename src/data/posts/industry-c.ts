import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_C: PostDraft[] = [
  {
    slug: "roofing-invoice-template",
    title: "Roofing Invoice Template: Squares, Tear-Off & Claims",
    description:
      "A free roofing invoice template guide: bill by the square, split materials and labor, handle insurance supplements, deposits and lien waivers, with an example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-bill-insurance-companies-as-a-contractor",
      "gutter-cleaning-invoice-template",
      "construction-invoice-guide",
      "contractor-invoice-template",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "How do roofers price a job on an invoice?",
        a: "Most roofers price by the square, which is 100 square feet of roof surface. Tear-off, underlayment, shingles and installation labor are usually quoted per square, while drip edge and ridge vent are priced per linear foot and items like pipe boots or permits are priced per unit.",
      },
      {
        q: "What is a supplement on a roofing insurance claim?",
        a: "A supplement is a request to the insurer for additional money after the original estimate, usually because hidden damage such as rotten decking was found during tear-off or because code-required items were missed. Document it with photos and quantities, and show it as a separate, clearly labeled line on your final invoice.",
      },
      {
        q: "Can a roofer waive the homeowner's insurance deductible?",
        a: "In several states, no. Texas and Colorado, for example, have laws that prohibit roofing contractors from waiving, rebating or absorbing a homeowner's deductible on an insurance-funded job. Even where it isn't specifically banned, it can be treated as insurance fraud, so bill the full contract price.",
      },
      {
        q: "Should I include a lien waiver with my roofing invoice?",
        a: "Many homeowners, lenders and general contractors ask for one before releasing payment. Send a conditional waiver with the invoice and an unconditional waiver once the payment has cleared. Some states, including California and Texas, require specific statutory waiver forms, so use your state's wording.",
      },
      {
        q: "How much deposit can a roofer ask for?",
        a: "It depends on the state. Some states cap home-improvement deposits at a fixed amount or a percentage of the contract, and others leave it to the contract. Check your state contractor licensing rules, then put the agreed deposit and the remaining payment schedule in writing.",
      },
      {
        q: "When does the insurer release recoverable depreciation on a roof claim?",
        a: "Usually after the work is finished and the insurer sees proof of completion. Most replacement cost policies pay the actual cash value first, then release the withheld depreciation once the final invoice is submitted, sometimes with a certificate of completion or photos. Policies often set a deadline for finishing the work and claiming it, so check the policy wording or ask the adjuster, and send your final invoice promptly so the homeowner can claim.",
      },
      {
        q: "How should I invoice a small roof repair instead of a full replacement?",
        a: "Bill repairs by time and materials or as a flat repair price, not by the square. List the problem found, the work done (for example, replacing 12 shingles and resealing a pipe boot), the materials used, labor hours and any service call or minimum charge. Add photos of the repaired area and note anything you saw but did not fix, such as worn flashing elsewhere, so the homeowner has a record if a leak appears later.",
      },
      {
        q: "Is a roof replacement tax deductible for the property owner?",
        a: "It depends on the property. On a rental or business property, a new roof is usually a capital improvement that is depreciated over several years rather than deducted at once, while a small repair may be deductible as an expense. On a main home, a new roof generally isn't deductible but can add to the home's cost basis. Either way, your itemized invoice is the owner's evidence, so point them to a tax professional or IRS guidance.",
      },
      {
        q: "What can I do if a homeowner keeps the insurance money and doesn't pay my invoice?",
        a: "Follow your contract and your state's lien process. Send a written demand with the invoice, contract and payments received, then consider a mechanic's lien, which usually has strict notice and filing deadlines that vary by state, often counted from your last day of work. Small claims court or a collection attorney are other routes. Because deadlines can be short, check your state's lien law or speak to a construction lawyer as soon as payment is clearly late.",
      },
      {
        q: "Can I charge for a roof inspection or estimate?",
        a: "Yes, if you tell the homeowner before you go out. Many roofers give free estimates for replacements but charge for detailed inspections, leak investigations or reports for a home sale. If you charge, invoice it as its own job with the date, what you inspected and any report delivered. Some roofers credit the inspection fee against the job if the homeowner signs within a set period; if you do, state that rule on the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A roofing invoice template should list the roof size in squares (one square is 100 square feet), tear-off and disposal, each material with its quantity, installation labor, extras such as decking replacement found during tear-off, permits, the deposit already paid and the balance due. On insurance jobs, also show the claim number and keep any supplement on its own line.</p>

<p>Roofing invoices carry more money than most trade invoices, and they're read by more people: the homeowner, sometimes a spouse, an insurance adjuster, and occasionally a mortgage company that co-signs the claim check. This guide covers what belongs on a roofing invoice template, how to price squares, how to handle supplements and deductibles, and a full worked example. You can build yours in the <a href="/invoice-generator?template=bold">free invoice generator with the Bold template</a>, which gives you a strong header for your company name and license number.</p>

<h2>What should a roofing invoice include?</h2>
<p>Start with the fields any contractor invoice needs (our <a href="/blog/contractor-invoice-template">contractor invoice template guide</a> covers those), then add the details specific to roofing work:</p>
<ul>
<li><strong>Contractor license or registration number</strong>, where your state or city requires one on contracts and invoices.</li>
<li><strong>Job address</strong>, which is often different from the billing address on rental or investment properties.</li>
<li><strong>Roof measurements</strong>: total squares, pitch, number of layers torn off and the measurement source (hand measured or an aerial report).</li>
<li><strong>Material specifications</strong>: shingle manufacturer, product line and color, underlayment type, ice and water shield coverage.</li>
<li><strong>Insurance details</strong> on claim jobs: insurer, claim number and the adjuster's name.</li>
<li><strong>Payments received</strong>: deposit, material draw or insurance checks already endorsed to you.</li>
<li><strong>Warranty terms</strong>: your workmanship warranty and a note that manufacturer warranties are registered separately.</li>
<li><strong>Lien waiver reference</strong>, if you're attaching a conditional waiver with this invoice.</li>
</ul>

<h2>How to price roofing work: squares, linear feet and units</h2>
<p>Roofing has its own units, and using them on the invoice makes it easy for an adjuster or a second-opinion contractor to check your numbers.</p>
<table><thead><tr><th>Item</th><th>Usual unit</th><th>Notes</th></tr></thead><tbody>
<tr><td>Tear-off and disposal</td><td>Per square, per layer</td><td>Second and third layers usually cost extra</td></tr>
<tr><td>Shingles</td><td>Per square</td><td>Include waste; 10–15% is common on hip and cut-up roofs</td></tr>
<tr><td>Underlayment</td><td>Per square</td><td>Synthetic or felt, state which</td></tr>
<tr><td>Ice and water shield</td><td>Per roll or per square</td><td>Eaves, valleys and penetrations; often code-required in cold climates</td></tr>
<tr><td>Drip edge, starter, ridge cap, ridge vent</td><td>Per linear foot</td><td>Measured along eaves, rakes and ridges</td></tr>
<tr><td>Decking (OSB or plywood)</td><td>Per sheet</td><td>Only what is found rotten during tear-off</td></tr>
<tr><td>Pipe boots, vents, flashing kits</td><td>Each</td><td>Count them on the estimate so the final invoice matches</td></tr>
<tr><td>Steep or high roof charge</td><td>Per square</td><td>For pitches that need extra safety setup</td></tr>
<tr><td>Dumpster, permit</td><td>Flat</td><td>Pass the permit through at cost or as a stated fee</td></tr>
</tbody></table>
<p>Separate materials from labor even if you sold the job at one price per square. It makes supplements easier to justify, and in many states it also matters for sales tax, as explained below. An <a href="/blog/itemized-invoice">itemized invoice</a> is also far harder to dispute than a single "Roof replacement: $14,894" line.</p>

<h2>Worked example: a roof replacement invoice</h2>
<p>A 28-square, one-layer asphalt roof on a single-family home. The homeowner paid a $4,000 deposit at signing. During tear-off the crew found six sheets of rotten decking, which were approved by the adjuster as a supplement.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Tear-off and haul-away, 1 layer</td><td>28 sq</td><td>$85.00</td><td>$2,380.00</td></tr>
<tr><td>Architectural shingles, Charcoal (incl. waste)</td><td>31 sq</td><td>$135.00</td><td>$4,185.00</td></tr>
<tr><td>Synthetic underlayment</td><td>28 sq</td><td>$22.00</td><td>$616.00</td></tr>
<tr><td>Ice and water shield, eaves and valleys</td><td>6 rolls</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td>Drip edge, eaves and rakes</td><td>220 lf</td><td>$3.25</td><td>$715.00</td></tr>
<tr><td>Ridge vent</td><td>40 lf</td><td>$9.50</td><td>$380.00</td></tr>
<tr><td>Pipe boots</td><td>3</td><td>$45.00</td><td>$135.00</td></tr>
<tr><td>Installation labor</td><td>28 sq</td><td>$165.00</td><td>$4,620.00</td></tr>
<tr><td>Supplement S-1: replace rotten OSB decking (photos attached)</td><td>6 sheets</td><td>$78.00</td><td>$468.00</td></tr>
<tr><td>Dumpster rental and disposal</td><td>1</td><td>$575.00</td><td>$575.00</td></tr>
<tr><td>Building permit</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td colspan="3"><strong>Contract total</strong></td><td><strong>$14,894.00</strong></td></tr>
<tr><td colspan="3">Less deposit received 2 October 2026</td><td>−$4,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$10,894.00</strong></td></tr>
</tbody></table>
<p>Check the maths: $2,380 + $4,185 + $616 + $570 + $715 + $380 + $135 + $4,620 + $468 + $575 + $250 = $14,894. Subtract the $4,000 deposit and $10,894 remains.</p>

<h3>How the insurance money lines up</h3>
<p>Suppose the insurer approved $14,894 replacement cost value (RCV) including the supplement, with a $1,500 deductible and $3,100 of recoverable depreciation held back. The first check is the actual cash value: $14,894 − $3,100 − $1,500 = $10,294. After the work is done, the insurer usually releases the $3,100 once it receives your final invoice and completion photos. The homeowner pays the $1,500 deductible. Those three amounts add back up to $14,894. Your invoice should show the full contract price, not a figure reduced by the deductible.</p>

<h2>Insurance claims, supplements and deductibles</h2>
<p>Insurance jobs go wrong on paperwork more than on workmanship. A few habits help:</p>
<ul>
<li><strong>Match the adjuster's line items where you can.</strong> If the insurer's estimate lists drip edge in linear feet, invoice it in linear feet.</li>
<li><strong>Keep supplements separate and numbered</strong> (S-1, S-2), each with photos, quantities and the date approved.</li>
<li><strong>Never absorb the deductible.</strong> Texas and Colorado both have statutes that bar roofers from waiving or rebating deductibles, and the <a href="https://www.tdi.texas.gov/consumer/storms/roofing-and-insurance-know-the-law.html" target="_blank" rel="noopener noreferrer">Texas Department of Insurance</a> explains the required contract notice there. Other states treat it as fraud.</li>
<li><strong>Name the payer on the invoice.</strong> The bill goes to the homeowner, who is your customer, even when the insurer funds most of it.</li>
<li><strong>Expect two-party checks.</strong> Claim checks are often payable to the homeowner and the mortgage company, so allow time for endorsement before you mark the balance late.</li>
</ul>

<h2>Deposits and payment schedules for roofing jobs</h2>
<p>Most roofers take a deposit at signing so they can order materials, then bill the balance on completion. Larger commercial or multi-building jobs often use progress billing instead, which our <a href="/blog/construction-invoice-guide">construction invoicing guide</a> covers along with retainage. For residential work, a typical schedule looks like this:</p>
<ol>
<li><strong>Deposit at signing</strong>, invoiced separately. See <a href="/blog/deposit-invoice">how to write a deposit invoice</a>.</li>
<li><strong>Material delivery</strong>, on larger jobs where you want a draw before tear-off.</li>
<li><strong>Completion</strong>, after final inspection and cleanup, for the balance.</li>
<li><strong>Recoverable depreciation</strong>, on insurance jobs, once the insurer releases it.</li>
</ol>
<p>Deposit limits vary by state. Some states cap home-improvement deposits at a fixed dollar amount or a percentage of the contract price, so check your state's contractor or consumer-protection rules before you set your terms.</p>

<h2>Lien waivers: conditional and unconditional</h2>
<p>A lien waiver tells the owner that you (and your suppliers) won't file a mechanic's lien for the amount being paid. Two types matter:</p>
<table><thead><tr><th>Type</th><th>When to send it</th><th>Effect</th></tr></thead><tbody>
<tr><td>Conditional waiver</td><td>With the invoice, before payment</td><td>Takes effect only when the payment clears</td></tr>
<tr><td>Unconditional waiver</td><td>After the funds have cleared</td><td>Effective immediately, so never sign one before you're paid</td></tr>
</tbody></table>
<p>Several states, including California and Texas, prescribe the exact wording of statutory waiver forms, and a homemade version may not be valid there. If your supplier or subcontractors could also lien the property, homeowners may ask for their waivers too.</p>

<h2>Sales tax on roofing invoices</h2>
<p>Roofing sales tax is one of the more confusing areas because states treat contractors differently. In many states, a roofer doing work on real property is treated as the consumer of the materials and pays sales tax when buying them, so no tax appears on the homeowner's invoice. In others, repair work or separately stated materials are taxable to the customer. Rules also differ between new construction and repair. Confirm the treatment with your state revenue department, and if you do need to charge it, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out the line. The guide to <a href="/blog/sales-tax-on-invoices-us">US sales tax on invoices</a> explains how to show it.</p>

<h2>Common roofing invoice disputes and how to avoid them</h2>
<ul>
<li><strong>"You charged for more squares than the estimate."</strong> State the waste factor on the estimate and the invoice, and keep the measurement report.</li>
<li><strong>Surprise decking charges.</strong> Put a per-sheet price for replacement decking in the contract so the extra is pre-agreed.</li>
<li><strong>Cleanup complaints.</strong> Nails in the driveway delay payment. Note the magnetic sweep in the completion checklist.</li>
<li><strong>Payment held for the insurer.</strong> Agree in the contract that the balance is due on completion regardless of when the insurer pays depreciation, unless you've agreed otherwise.</li>
</ul>
<p>Painting the fascia or trim after a re-roof? Our <a href="/blog/painting-invoice-template">painting invoice template guide</a> shows how to bill that as a separate scope, and <a href="/blog/late-payment-fees">late payment fees</a> explains how to word terms that you can actually enforce.</p>

<h2>Create your roofing invoice</h2>
<p>Open the <a href="/invoice-generator?template=bold">invoice generator</a>, add your license number and the job address, enter each line in squares, linear feet or units, and subtract the deposit. Download the PDF and attach your photos and conditional waiver before you send it. Drafts save in your browser, so you can come back and add the supplement line once the adjuster signs off.</p>
`,
  },
  {
    slug: "painting-invoice-template",
    title: "Painting Invoice Template: Per Sq Ft, Rooms & Prep",
    description:
      "Use this painting invoice template guide to bill per square foot or per room, show prep, paint and materials, and add change orders, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "drywall-invoice-template",
      "contractor-invoice-template",
      "itemized-invoice",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "How do painters charge on an invoice?",
        a: "The common methods are per square foot of paintable surface, per room, per linear foot for trim, hourly, or a fixed job price. Many painters quote per square foot or per room for walls and ceilings, then add trim, doors and prep as separate lines.",
      },
      {
        q: "Should paint be listed separately on a painting invoice?",
        a: "It's a good idea. Listing paint by product and gallon shows the client what they're getting, makes color or sheen upgrades easy to price, and can matter for sales tax in states that treat materials differently from labor.",
      },
      {
        q: "How do I bill for a change order on a painting job?",
        a: "Write the change down before doing it, with a price, and get the client's approval by signature or email. On the invoice, give it its own numbered line such as CO-1 with a short description, so it's clearly separate from the original quote.",
      },
      {
        q: "How much deposit do painters usually take?",
        a: "Many painters take a deposit to cover paint and materials, often a modest percentage of the job. Some states cap deposits on home-improvement contracts, so check your state's rules before setting the amount.",
      },
      {
        q: "Do painters charge sales tax?",
        a: "It depends on the state. In many states, painting real property is treated as a contractor service and the painter pays tax on paint when buying it, while some states tax certain services or separately stated materials. Confirm with your state revenue department.",
      },
      {
        q: "How do I measure wall square footage for a painting invoice?",
        a: "Measure the perimeter of the room, multiply by the wall height, then subtract large openings if your pricing excludes them. A 12 by 14 foot room with 8 foot walls has 52 feet of perimeter and about 416 square feet of wall area. Ceilings are length times width. Say on the estimate and invoice whether you measure wall area or floor area, and whether openings are deducted, so the client can check your quantities.",
      },
      {
        q: "Do I need to follow lead-safe rules when painting an older home?",
        a: "Often, yes. In the US, the EPA's Renovation, Repair and Painting rule applies to paid work that disturbs 6 square feet or more of painted surface inside, or 20 square feet or more outside, in homes and child-occupied facilities built before 1978. Firms must be certified, use lead-safe practices and give the Renovate Right pamphlet before work starts. Keep those records, and show any extra containment cost as its own line.",
      },
      {
        q: "How should I invoice cabinet painting?",
        a: "Most painters price cabinets per door and per drawer front, with cabinet boxes, end panels and any new hardware as separate lines. Show the prep (degreasing, sanding, priming), the finish product and number of coats, and whether doors were sprayed off site. If you remove and rehang doors, say so. Cabinet finishes take days to cure, so a deposit and a clear completion date on the invoice help avoid disputes about when the balance is due.",
      },
      {
        q: "Should I charge for touch-ups after the job is finished?",
        a: "Touch-ups found during the final walkthrough are normally part of the job and shouldn't be billed. Later visits are different: if the client asks you back months later for scuffs or damage caused by movers or others, invoice it as a new small job, often with a minimum charge. If you offer a workmanship warranty, state its length and what it covers, such as peeling caused by your prep, so everyone knows which return visits are free.",
      },
      {
        q: "How do commercial painting invoices differ from residential ones?",
        a: "Commercial jobs are often billed in progress payments against a schedule of values, sometimes on AIA-style pay applications, with retainage held back until completion. Expect to quote the client's purchase order or job number, provide lien waivers with each payment, carry a certificate of insurance and accept Net 30 or longer terms. Residential jobs are simpler, usually a deposit and a balance due on completion. Agree the billing format in the contract before you start.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A painting invoice template should list each area painted with its pricing basis (square feet, per room or linear feet of trim), number of coats, prep work, paint by product and gallons, supplies, any approved change orders, the deposit paid and the balance due. Show colors and sheen so the client can match the invoice to the work they see.</p>

<p>Painting clients are rarely accountants, but they do walk around the house with your invoice in hand. A clear painting invoice template lets them tick off each room, see why the accent wall cost extra, and pay without a phone call. This guide shows how to structure one, compares per square foot and per room pricing, and walks through a worked example. Build yours in the <a href="/invoice-generator?template=creative">invoice generator using the Creative template</a>, which suits a trade where color and finish are the product.</p>

<h2>What goes on a painting invoice</h2>
<ul>
<li><strong>Your business details</strong> and contractor license number if your state requires one for painting.</li>
<li><strong>Job address</strong> and the client's name exactly as on the estimate.</li>
<li><strong>Estimate or contract reference</strong>, so the invoice links back to what was agreed.</li>
<li><strong>Scope by area</strong>: room or elevation, surfaces (walls, ceilings, trim, doors), number of coats.</li>
<li><strong>Colors and sheen</strong>: manufacturer, color name or code, flat, eggshell, satin or semi-gloss.</li>
<li><strong>Prep</strong>: patching, sanding, caulking, priming, pressure washing for exteriors.</li>
<li><strong>Materials</strong>: paint by gallon, primer, supplies.</li>
<li><strong>Change orders</strong>, numbered and dated.</li>
<li><strong>Deposit received</strong> and balance due, with a real due date.</li>
</ul>
<p>The general fields are covered in <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>; this guide focuses on what's specific to painting.</p>

<h2>Per square foot vs per room vs hourly pricing</h2>
<table><thead><tr><th>Method</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Per square foot (wall area)</td><td>Most interiors and exteriors; scales with the job</td><td>Say whether you measure wall area or floor area; they differ a lot</td></tr>
<tr><td>Per room</td><td>Standard bedrooms and repaints where clients want simplicity</td><td>Define what a "room" includes (ceiling? trim? closet?)</td></tr>
<tr><td>Per linear foot</td><td>Baseboards, crown molding, fences</td><td>Count doors and windows separately</td></tr>
<tr><td>Hourly</td><td>Touch-ups, repairs, unknown prep</td><td>Clients may want a not-to-exceed cap</td></tr>
<tr><td>Fixed job price</td><td>Experienced painters with reliable estimates</td><td>Change orders become essential</td></tr>
</tbody></table>
<p>Whichever you use, keep it consistent between the estimate and the invoice. If you quoted per room, don't invoice per square foot. The client will try to compare the two and get confused. Our guide on <a href="/blog/invoice-vs-estimate">invoices vs estimates</a> explains how the two documents should mirror each other.</p>

<h2>How to show prep work</h2>
<p>Prep is where painting jobs make or lose money, and it's invisible once the paint is dry. Bill it explicitly. Good prep lines are specific: "Patch and sand drywall, approx. 14 nail pops and 2 dents, living room" tells the client far more than "Prep." For exteriors, list scraping, washing, spot priming and caulking separately. If you found peeling lead-era paint and had to follow lead-safe work practices, say so, as that work takes longer and costs more.</p>

<h2>Worked example: interior repaint invoice</h2>
<p>Three rooms repainted, walls priced per square foot of wall area, ceilings per square foot, trim per linear foot. The client paid a $1,300 deposit and approved one change order midway through: a dark accent wall that needed an extra coat.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Living room walls, 2 coats, eggshell "Harbor Fog"</td><td>520 sq ft</td><td>$1.75</td><td>$910.00</td></tr>
<tr><td>Bedroom 1 walls, 2 coats, eggshell</td><td>380 sq ft</td><td>$1.75</td><td>$665.00</td></tr>
<tr><td>Bedroom 2 walls, 2 coats, eggshell</td><td>340 sq ft</td><td>$1.75</td><td>$595.00</td></tr>
<tr><td>Ceilings, 3 rooms, flat white</td><td>460 sq ft</td><td>$1.25</td><td>$575.00</td></tr>
<tr><td>Baseboards and door casings, semi-gloss</td><td>210 lf</td><td>$2.00</td><td>$420.00</td></tr>
<tr><td>Prep: patch, sand and spot-prime drywall</td><td>4 hrs</td><td>$65.00</td><td>$260.00</td></tr>
<tr><td>Wall paint, premium eggshell</td><td>9 gal</td><td>$58.00</td><td>$522.00</td></tr>
<tr><td>Ceiling paint, flat</td><td>3 gal</td><td>$42.00</td><td>$126.00</td></tr>
<tr><td>Supplies: tape, plastic, caulk, patching compound</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>CO-1 (approved 14 Oct): accent wall, deep navy, extra coat</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$4,338.00</strong></td></tr>
<tr><td colspan="3">Less deposit received</td><td>−$1,300.00</td></tr>
<tr><td colspan="3"><strong>Balance due on completion</strong></td><td><strong>$3,038.00</strong></td></tr>
</tbody></table>
<p>The maths: labor and prep lines total $3,425 ($910 + $665 + $595 + $575 + $420 + $260); materials total $733 ($522 + $126 + $85); add the $180 change order and you get $4,338. Less the deposit, $3,038 is due.</p>

<h2>Exterior painting line items</h2>
<p>Exterior jobs need a different breakdown from interiors, because most of the cost is prep, access and weather time rather than wall area alone. Organize the invoice by elevation (front, rear, left, right) or by surface, and include:</p>
<ul>
<li><strong>Washing</strong>, often a separate line or a subcontracted pressure wash.</li>
<li><strong>Scraping and sanding</strong> of failing paint, with an estimate of the area affected.</li>
<li><strong>Spot priming</strong> of bare wood and stain blocking.</li>
<li><strong>Caulking</strong> of joints, windows and trim, priced per linear foot or as a lump sum.</li>
<li><strong>Body, trim, doors, shutters and railings</strong>, each priced separately because they use different paints and take different time.</li>
<li><strong>Access equipment</strong>: lift or scaffold rental for tall elevations, at cost or as a stated fee.</li>
<li><strong>Carpentry repairs</strong> such as rotten trim replacement, which should always be a change order with its own price.</li>
</ul>
<p>Weather delays are part of exterior work, so don't invoice for them as labor. Do note in the contract how long a rain delay can push the schedule, and if the client asks you to return after the job for a section they decided to add, price the extra trip.</p>

<h2>Change orders: the line that prevents most disputes</h2>
<p>Clients change their minds about color more than anything else. A second color in the same room, a different sheen, or "while you're here, can you do the hallway?" are all change orders. Handle them the same way every time:</p>
<ol>
<li>Write a short description and a price before you start the extra work.</li>
<li>Get approval in writing. A reply to a text or email saying "Yes, go ahead" is better than nothing.</li>
<li>Number it (CO-1, CO-2) and date it.</li>
<li>Show it as a separate line on the invoice with the approval date.</li>
</ol>
<p>If a change reduces the scope, for example the client decides to skip a closet, show it as a negative line rather than quietly lowering another price. That keeps the invoice traceable to the estimate. For the wider picture on documenting extras, see our <a href="/blog/contractor-invoice-template">contractor invoice guide</a>.</p>

<h2>Deposits and payment terms for painters</h2>
<p>A deposit covers your paint purchase and secures the date on your schedule. Issue it as its own invoice (see <a href="/blog/deposit-invoice">deposit invoices</a>) and subtract it on the final invoice, as in the example above. Some states limit how much a home-improvement contractor can collect before work starts, so check before you set a percentage.</p>
<p>For residential work, "due on completion" or "due within 7 days" is common. Commercial clients and property managers often expect Net 30 and may need a PO number. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the options and what each means for your cash flow.</p>

<h2>Sales tax on painting invoices</h2>
<p>There's no national rule. In many states, painting a building is treated as a real-property service: the painter pays sales tax on paint and supplies at purchase, and the customer's invoice shows no tax. Some states tax specific services, and a few tax materials when they're separately stated. If your state requires you to collect it, calculate it with our <a href="/tools/sales-tax-calculator">sales tax calculator</a> and show it on its own line. Rules change, so confirm with your state's department of revenue.</p>

<h2>Painting invoice mistakes that slow payment</h2>
<ul>
<li><strong>"Labor and materials: $4,338."</strong> One line invites questions. Break it out by room and material.</li>
<li><strong>No color record.</strong> Put color names and codes on the invoice. The client will need them for touch-ups in two years, and they'll keep your invoice for it.</li>
<li><strong>Unapproved extras.</strong> If it isn't in writing, expect to argue about it.</li>
<li><strong>Billing before the walkthrough.</strong> Do a final walkthrough, fix the touch-ups, then send the invoice the same day.</li>
</ul>
<p>Pairing painting with other exterior services? See the <a href="/blog/pressure-washing-invoice-template">pressure washing invoice template</a> for how to bill surface prep as its own job, or the <a href="/blog/roofing-invoice-template">roofing invoice guide</a> if you work alongside a roofer on fascia and trim.</p>

<h2>Make your painting invoice</h2>
<p>Open the <a href="/invoice-generator?template=creative">Creative invoice template in the generator</a>, list each room or elevation with its pricing basis, add paint and supplies, number any change orders, and subtract the deposit. Export the PDF after your final walkthrough and send it while the client is still admiring the finish.</p>
`,
  },
  {
    slug: "pressure-washing-invoice-template",
    title: "Pressure Washing Invoice Template: Free Guide",
    description:
      "A pressure washing invoice template guide: price by square foot, bill house washes, driveways and commercial contracts, set minimums, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "car-wash-invoice-template",
      "window-cleaning-invoice-template",
      "pool-cleaning-invoice-template",
      "recurring-invoices-guide",
      "itemized-invoice",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "How do I price pressure washing on an invoice?",
        a: "Most residential jobs are priced per square foot of surface, such as siding, concrete, pavers or decking, with a different rate for each surface. Some companies use flat package prices for common jobs like a house wash, and commercial work is often billed per visit on a recurring schedule.",
      },
      {
        q: "Should I charge a minimum for pressure washing?",
        a: "Many companies set a job minimum because travel, setup and cleanup take the same time whether the job is a small patio or a full driveway. State the minimum on your quote and show it on the invoice as a 'minimum service charge' adjustment line.",
      },
      {
        q: "Is pressure washing subject to sales tax?",
        a: "In some states, yes. A number of states tax cleaning or building and grounds services, while others don't tax them at all. Check your state revenue department's guidance on cleaning services and real property services before you invoice.",
      },
      {
        q: "When should a pressure washing customer pay?",
        a: "Residential jobs are commonly due on completion or on receipt of the invoice, often paid by card on site. Commercial and property management clients usually expect Net 15 or Net 30 and may need a purchase order or vendor setup forms first.",
      },
      {
        q: "Who pays for the water used on a pressure washing job?",
        a: "On most residential jobs the customer supplies water from an outdoor spigot, and that cost isn't invoiced. If you bring your own water because there is no access, or the job needs a hydrant meter, you can charge for it as a separate line. State the water arrangement on your quote and confirm the spigot works before the job day, so there is no argument about a surprise water charge on the invoice.",
      },
      {
        q: "Should I note pre-existing damage on a pressure washing invoice?",
        a: 'Yes. Washing can reveal problems hidden under dirt, such as cracked concrete, loose mortar, oxidized siding or failing paint. Note what you saw before starting, take dated photos, and repeat the key points in the invoice notes, for example "Oxidation on south wall siding noted before cleaning; chalking may remain." That record protects you if the customer later says the washing caused the damage.',
      },
      {
        q: "How do I invoice paver sealing after a wash?",
        a: "Treat sealing as a separate service from cleaning. Put the wash on one line, then add joint sand replacement and sealing on their own lines, each priced per square foot, with the sealer product named. Note the curing time and any foot or vehicle traffic restrictions. Because sealing needs dry weather and sometimes a second visit, many companies take a deposit for sealing jobs and invoice the balance once the final coat is applied.",
      },
      {
        q: "Will my commercial clients send me a 1099?",
        a: "They may, if you're an unincorporated US business and they pay you enough during the year. Business clients report payments for services on Form 1099-NEC, and 2025 legislation raised the reporting threshold from $600 to $2,000 for payments made from 2026. That's why many ask for a W-9 before paying. You must report all your income whether or not you receive a 1099, so keep every invoice, and confirm current thresholds on the IRS website.",
      },
      {
        q: "Can I take a deposit for a pressure washing job?",
        a: "You can, though most small residential washes are simply paid on completion. Deposits make more sense for large or multi-day jobs, paver sealing, commercial projects where you buy chemicals in bulk, or new customers booking peak-season dates. Invoice the deposit separately, state whether it's refundable if weather forces a reschedule, and subtract it on the final invoice so the customer sees exactly what remains due.",
      },
      {
        q: "How do I invoice a customer who wasn't home when I finished the job?",
        a: "Prepare the invoice the same day, attach before and after photos, and send it by email or text with clear payment instructions and a due date, such as on receipt or within 7 days. Note any areas you couldn't reach or stains that didn't fully lift. With our free generator you can download the PDF on your phone and send it yourself, then issue a receipt when the payment arrives.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A pressure washing invoice template should list each surface cleaned with its square footage and rate (siding, driveway, patio, deck, roof or gutters), the cleaning method (pressure or soft wash), any add-ons such as rust or oil stain treatment, discounts, the service date and payment terms. Residential jobs are usually due on completion; commercial work is often billed per visit.</p>

<p>Pressure washing is a quick-turnaround business. You might finish three jobs in a day, and the customer often pays before you've rolled up the hose. That makes a clean, repeatable pressure washing invoice template worth setting up once. This guide covers pricing units, minimums, commercial contracts and a worked residential example. You can make yours in the <a href="/invoice-generator?template=ocean">invoice generator with the Ocean template</a> and reuse it for every job.</p>

<h2>What to include on a pressure washing invoice</h2>
<ul>
<li><strong>Business name, phone and license or insurance details</strong> if your city requires them. Commercial clients often want a certificate of insurance on file before they'll pay.</li>
<li><strong>Service address and date</strong>, which matters when you clean several properties for the same property manager.</li>
<li><strong>Each surface on its own line</strong> with square footage or linear feet.</li>
<li><strong>Method</strong>: high pressure for concrete, soft wash (low pressure with cleaning solution) for siding and roofs.</li>
<li><strong>Add-ons and treatments</strong>: rust, oil, gum removal, sealing.</li>
<li><strong>Discounts</strong> shown as negative lines, not hidden in the rates.</li>
<li><strong>Payment terms and methods</strong>, plus any notes about water use or plant protection.</li>
</ul>

<h2>Pressure washing pricing units</h2>
<table><thead><tr><th>Surface</th><th>Common unit</th><th>Pricing notes</th></tr></thead><tbody>
<tr><td>House siding (soft wash)</td><td>Per sq ft of siding or flat by house size</td><td>Two-story homes often carry a height surcharge</td></tr>
<tr><td>Driveways and sidewalks</td><td>Per sq ft</td><td>Surface cleaner work is fast; heavy staining is extra</td></tr>
<tr><td>Pavers</td><td>Per sq ft</td><td>Re-sanding and sealing are separate line items</td></tr>
<tr><td>Wood decks and fences</td><td>Per sq ft or per linear foot</td><td>Brightener and stain are add-ons</td></tr>
<tr><td>Roofs (soft wash)</td><td>Per sq ft or per square</td><td>Steeper pitches cost more; follow the shingle maker's cleaning guidance</td></tr>
<tr><td>Gutter exteriors</td><td>Per linear foot</td><td>"Gutter brightening" removes oxidation streaks</td></tr>
<tr><td>Commercial pads, drive-thrus, storefronts</td><td>Per visit</td><td>Usually recurring, billed weekly or monthly</td></tr>
</tbody></table>
<p>The rates in the example below are illustrative. Prices vary widely by region, so set yours from your own costs: fuel, chemicals, equipment wear, insurance and your time on the road. Our guide on <a href="/blog/markup-vs-margin">markup vs margin</a> helps you check that a rate actually leaves a profit.</p>

<h2>Worked example: residential house wash and flatwork</h2>
<p>A single-story home: soft-washed siding, a concrete driveway, a paver patio, a wood deck and gutter brightening, plus one rust stain treated on the driveway. The customer booked three or more services, which earns a $50 multi-service discount.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>House wash, soft wash, vinyl siding</td><td>2,400 sq ft</td><td>$0.20</td><td>$480.00</td></tr>
<tr><td>Driveway, surface cleaned and post-treated</td><td>1,100 sq ft</td><td>$0.18</td><td>$198.00</td></tr>
<tr><td>Back patio, pavers</td><td>450 sq ft</td><td>$0.25</td><td>$112.50</td></tr>
<tr><td>Wood deck, clean and brighten</td><td>320 sq ft</td><td>$0.45</td><td>$144.00</td></tr>
<tr><td>Gutter exterior brightening</td><td>160 lf</td><td>$1.00</td><td>$160.00</td></tr>
<tr><td>Rust stain treatment, driveway (1 area)</td><td>1</td><td>$65.00</td><td>$65.00</td></tr>
<tr><td>Multi-service discount</td><td>1</td><td>−$50.00</td><td>−$50.00</td></tr>
<tr><td colspan="3"><strong>Total due on completion</strong></td><td><strong>$1,109.50</strong></td></tr>
</tbody></table>
<p>The maths: $480 + $198 + $112.50 + $144 + $160 + $65 = $1,159.50, minus the $50 discount = $1,109.50. No sales tax is shown here; if your state taxes cleaning services, add it after the discount using the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Minimum charges, trip fees and rewashes</h2>
<p>A small job can cost you nearly as much as a big one once you count drive time and setup. Three ways to protect your margins:</p>
<ul>
<li><strong>Job minimum.</strong> If a patio job comes to $90 and your minimum is $175, add a line: "Minimum service charge adjustment: $85." That's clearer than inflating the patio rate.</li>
<li><strong>Trip fee for distant jobs.</strong> State the radius on your quote and show the fee as its own line.</li>
<li><strong>Rewash policy.</strong> Some organic staining returns quickly. If you offer a free rewash within a set window, put it in the notes so the customer doesn't think they'll be billed twice.</li>
</ul>

<h2>Invoicing commercial pressure washing contracts</h2>
<p>Restaurants, gas stations, HOAs and retail centers are where steady revenue lives, but they expect a more formal invoice. Typical requirements:</p>
<ul>
<li><strong>One invoice per visit or one monthly invoice</strong> listing each visit date. Agree which in the contract.</li>
<li><strong>Site name and number</strong> on multi-location accounts.</li>
<li><strong>PO numbers</strong> where the client uses them. A missing PO is a common reason commercial invoices sit unpaid; see <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li><strong>Net 30 terms</strong>, which means you need to plan for the cash gap.</li>
<li><strong>A W-9</strong>, which most US business clients request before the first payment.</li>
</ul>
<p>For recurring work, a fixed schedule saves time. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> shows how to keep the numbering and dates consistent month after month.</p>

<h2>Soft wash vs pressure washing: say which on the invoice</h2>
<p>Customers often call everything "pressure washing," but you know the methods differ. Siding, stucco and roofs are usually soft-washed: low pressure with a cleaning solution that does the work, then a rinse. Concrete and pavers usually get high pressure and a surface cleaner. Naming the method on each line does three things. It explains why the house wash rate per square foot is different from the driveway rate. It shows you used the right method for the surface, which matters if the customer later blames you for damaged siding or stripped paint. And it helps if a roofing or siding manufacturer's warranty specifies how the product may be cleaned.</p>
<p>If a surface couldn't be fully cleaned, say so. "Driveway: oil stain near garage lightened, not fully removed (aged stain, discussed with customer)" protects you from a refund request and sets expectations for next time.</p>

<h2>Flat packages vs square-foot pricing for house washes</h2>
<p>Square-foot pricing is accurate, but many residential customers prefer a flat package price based on the house's size and number of stories. If you sell packages, keep the invoice just as clear:</p>
<ul>
<li>Name the package and its basis: "House wash, 2-story, up to 2,500 sq ft living area."</li>
<li>List what's included (siding, soffits, fascia, front door) in the line description.</li>
<li>Add anything outside the package as a separate line, such as heavy mildew on the north side or a detached garage.</li>
</ul>
<p>Whichever method you use, quote it the same way you invoice it. A customer who receives a flat-price quote and a square-foot invoice will assume the price changed, even when it didn't.</p>

<h2>Seasonal plans and repeat customers</h2>
<p>Residential customers who book a house wash every spring and a driveway clean every fall are worth offering a plan to. Bill each visit on its own invoice with the plan name and visit number ("Annual plan, visit 1 of 2"), and show any plan discount as a negative line so the customer sees the saving each time. Keep invoice numbering continuous across all customers rather than restarting it for each plan, so your records have no gaps.</p>

<h2>Wastewater and runoff</h2>
<p>Wash water carrying detergents, oil or paint chips generally shouldn't go into storm drains, and many cities have rules on wastewater from mobile washing, especially for commercial flatwork. If you recover and dispose of wastewater on a job, that's real cost and can be its own line ("Water recovery and disposal"). Check your local stormwater rules and price them in rather than absorbing the expense.</p>

<h2>Getting paid on the spot</h2>
<p>Residential pressure washing customers usually pay the same day. To make that easy:</p>
<ol>
<li>Prepare the invoice from your quote before you arrive, then adjust square footage on site if needed.</li>
<li>Walk the customer around the finished surfaces first.</li>
<li>Take card, a bank transfer or a payment app on the spot and mark the invoice paid.</li>
<li>Send a <a href="/blog/payment-receipt-template">payment receipt</a> so the customer has a record.</li>
</ol>
<p>If you're a two-person crew billing from a phone, build the invoice on the drive over and finish it on site. For more tactics on shortening the gap between job and payment, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>

<h2>Related trades</h2>
<p>Many pressure washing businesses also offer window cleaning or mobile detailing. If that's you, the <a href="/blog/car-detailing-invoice-template">car detailing invoice template</a> covers package pricing and mobile fees, and the <a href="/blog/painting-invoice-template">painting invoice guide</a> shows how to bill exterior prep when a washing job leads into a repaint.</p>

<h2>Build your pressure washing invoice</h2>
<p>Open the <a href="/invoice-generator?template=ocean">Ocean template in the invoice generator</a>, add a line for each surface with square footage and rate, include any treatments and discounts, and download the PDF. Save it as a draft in your browser and you'll have a ready-made starting point for tomorrow's jobs.</p>
`,
  },
  {
    slug: "car-detailing-invoice-template",
    title: "Car Detailing Invoice Template: Packages & Add-Ons",
    description:
      "Use this car detailing invoice template guide to bill packages, add-ons, condition surcharges, mobile fees and ceramic coating deposits, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-start-a-car-detailing-business",
      "how-much-to-charge-for-pressure-washing",
      "auto-repair-invoice-template",
      "deposit-invoice",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "What should a car detailing invoice include?",
        a: "Include your business details, the customer's name, the vehicle year, make, model and color, the package performed, each add-on, any condition surcharge such as pet hair, a mobile service fee if applicable, the total, and how it was paid. A short note on vehicle condition at drop-off helps if a dispute arises later.",
      },
      {
        q: "How do I charge extra for a very dirty car?",
        a: "Set a condition surcharge in advance, either hourly or as a flat fee, for things like heavy pet hair, sand, mold or biohazard cleanup. Tell the customer before you start the extra work and show it as its own line on the invoice.",
      },
      {
        q: "Should I take a deposit for ceramic coating?",
        a: "Many detailers do, because coating jobs block out a full day or more and use costly product. A deposit at booking, deducted from the final invoice, protects you from no-shows. Put your cancellation and refund terms in writing.",
      },
      {
        q: "Do car detailers charge sales tax?",
        a: "Some states tax car washing and detailing services and others do not, and products sold separately are usually taxable where the state has a sales tax. Check your state's rules for motor vehicle services before you invoice.",
      },
      {
        q: "Should tips go on a detailing invoice?",
        a: "Tips can be added at payment, but keep them separate from your service charges. If you use a card reader, the tip is usually captured there and shown on the receipt rather than the invoice.",
      },
      {
        q: "How do I invoice a multi-stage paint correction?",
        a: 'Name the stage on the invoice, for example "Two-stage paint correction: compound and polish," along with the panels covered, the hours or package price and the products used. Note the condition before you started, such as heavy swirls, and the expected result, because deep scratches may remain after correction. If you add a coating afterward, bill it on its own line so the customer can see what the correction cost compared with the protection.',
      },
      {
        q: "How should I price and invoice detailing for RVs and boats?",
        a: "Most detailers price RVs and boats by length, often per foot, because size drives the time far more than the package name does. Put the length, the service (wash, oxidation removal, wax, interior) and the rate per foot on separate lines, plus any lift, ladder or marina access charges. Note the vessel or RV name or registration and the location, especially if you work at a marina or storage yard.",
      },
      {
        q: "How do I handle gift certificates on a detailing invoice?",
        a: 'Record the gift certificate as a payment on the invoice, not as a discount. When it\'s redeemed, list the full package price, add a line such as "Gift certificate GC-0142 applied: -$150.00" and show any balance due. Keep a list of certificates sold with their numbers and amounts so you know which are still outstanding, and check whether your state has rules on gift certificate expiry before printing a date on them.',
      },
      {
        q: "Does a ceramic coating warranty require maintenance visits?",
        a: "Often it does, depending on the coating product. Many professional coatings carry a warranty that requires periodic inspections or maintenance washes by an approved installer, and missed visits can void it. Check the manufacturer's terms, list the coating and warranty period on the original invoice, and bill each maintenance visit on its own dated invoice, so the customer has a service history to show if they make a warranty claim.",
      },
      {
        q: "Can I add a credit card fee to a detailing invoice?",
        a: "In most US states you can surcharge credit cards if you follow card network rules: notify your processor first, disclose the fee before payment, show it as a separate line and keep it within the cap (3% for Visa, or your cost if lower). You can't surcharge debit cards, and a few states restrict surcharges. Many detailers simply build card costs into package prices instead. Our credit card surcharge guide covers the rules by state.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A car detailing invoice template should show the vehicle (year, make, model, color), the package performed, each add-on with its price, any condition surcharge for pet hair or heavy soiling, a mobile service fee if you came to the customer, deposits paid, the total and payment method. Keep tips separate from service charges.</p>

<p>Detailing customers buy packages, then upgrade on the spot when they see the headlights or the dog hair. If your invoice doesn't show those changes clearly, you end up explaining the price difference at handover. This car detailing invoice template guide covers package pricing, add-ons, mobile fees, ceramic coating deposits and a worked example. Make yours in the <a href="/invoice-generator?template=dark">invoice generator with the Dark template</a>, which suits a premium detailing brand.</p>

<h2>What goes on a car detailing invoice</h2>
<ul>
<li><strong>Your business name, phone and booking link.</strong> Repeat customers will look for it.</li>
<li><strong>Customer name and contact</strong>, plus the service address for mobile jobs.</li>
<li><strong>Vehicle details</strong>: year, make, model, color, and plate or last four of the VIN for fleet clients.</li>
<li><strong>Package name</strong> and what it includes, briefly.</li>
<li><strong>Add-ons</strong>, each on its own line.</li>
<li><strong>Condition surcharges</strong> with a short reason.</li>
<li><strong>Mobile or travel fee</strong> if applicable.</li>
<li><strong>Deposit paid</strong>, balance due and payment method.</li>
<li><strong>Condition notes</strong>: existing scratches, chips or interior damage noted at drop-off.</li>
</ul>
<p>That last point matters. A line such as "Pre-existing: scuff on rear bumper, small tear on driver seat bolster, noted with customer at 9:05 a.m." stops most "you did this" conversations before they start.</p>

<h2>Pricing packages, add-ons and vehicle size</h2>
<p>Most detailers sell three or four packages and price them by vehicle size. Show the package and the size tier on the invoice so the customer can see why their truck cost more than their neighbor's sedan.</p>
<table><thead><tr><th>Line type</th><th>Examples</th><th>How to show it</th></tr></thead><tbody>
<tr><td>Package</td><td>Express wash, interior detail, full detail, paint correction</td><td>One line with the size tier, e.g. "Full detail, SUV/3-row"</td></tr>
<tr><td>Add-on</td><td>Headlight restoration, engine bay, odor treatment, clay bar, seat shampoo</td><td>One line each, flat price</td></tr>
<tr><td>Protection</td><td>Spray sealant, wax, ceramic coating</td><td>Name the product tier and expected durability</td></tr>
<tr><td>Condition surcharge</td><td>Pet hair, sand, heavy staining, mold</td><td>Hourly or flat, with reason</td></tr>
<tr><td>Mobile fee</td><td>Travel to customer's home or office</td><td>Flat or by distance zone</td></tr>
<tr><td>Discount</td><td>Membership, fleet, multi-car</td><td>Negative line</td></tr>
</tbody></table>

<h2>Worked example: full detail with add-ons</h2>
<p>A mobile full detail on a 2021 SUV. The customer booked the full detail package, then asked for headlight restoration and an engine bay clean on arrival. The interior had heavy dog hair, which took an extra 90 minutes at $50 per hour.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full detail package, SUV/3-row (interior + exterior)</td><td>1</td><td>$289.00</td><td>$289.00</td></tr>
<tr><td>Upgrade: ceramic spray sealant (approx. 6 months)</td><td>1</td><td>$79.00</td><td>$79.00</td></tr>
<tr><td>Pet hair removal, heavy</td><td>1.5 hrs</td><td>$50.00</td><td>$75.00</td></tr>
<tr><td>Headlight restoration, pair</td><td>1</td><td>$89.00</td><td>$89.00</td></tr>
<tr><td>Engine bay clean and dress</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>Mobile service fee, zone 2</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$612.00</strong></td></tr>
</tbody></table>
<p>The maths: $289 + $79 + $75 + $89 + $45 + $35 = $612. If your state taxes detailing services, calculate the tax on the taxable lines with the <a href="/tools/sales-tax-calculator">sales tax calculator</a> and add it as its own line. If the customer adds a tip at payment, record it on the receipt, not as a service line.</p>

<h2>Ceramic coating and paint correction deposits</h2>
<p>Coating jobs tie up a bay or a full day of mobile time and use expensive product, so a deposit is standard practice. A simple approach:</p>
<ol>
<li>Quote the job after an inspection, since paint condition drives correction time.</li>
<li>Invoice a deposit at booking, for example 25% of a $1,200 coating package, which is $300.</li>
<li>On the final invoice, show the full package price and subtract the deposit: $1,200 − $300 = $900 due at pickup.</li>
<li>Note the coating product, layers applied and any maintenance requirements for the warranty.</li>
</ol>
<p>State your cancellation terms on the deposit invoice: how much notice the customer must give for a refund, and whether the deposit can move to a new date. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> has wording you can adapt.</p>

<h2>Mobile detailing fees</h2>
<p>Mobile work is convenient for the customer and expensive for you, so the fee deserves its own line. Mobile detailers carry costs a shop doesn't: fuel, drive time, a water tank, a generator or the customer's power outlet. Two common structures:</p>
<ul>
<li><strong>Zone pricing.</strong> Zone 1 free, zone 2 a flat fee, zone 3 higher. Easy to explain and quote.</li>
<li><strong>Per-mile fee</strong> beyond a set radius. Fairer for long trips, but harder to estimate up front.</li>
</ul>
<p>If you rely on the customer's water or electricity, say so in your booking confirmation. If you bring everything, that's a selling point worth printing in the invoice notes.</p>

<h2>Fleet and dealership detailing invoices</h2>
<p>Fleet work (rental companies, dealers, contractors' work trucks) is usually billed weekly or monthly in one invoice listing each vehicle. Include the date, vehicle identifier (stock number, plate or last four of the VIN), the service and the price per vehicle. Business clients will often expect Net 15 or Net 30 terms and may ask for a W-9. Our <a href="/blog/itemized-invoice">itemized invoice guide</a> shows how to lay out a long list of similar lines so they're easy to check.</p>

<h2>Maintenance plans and memberships</h2>
<p>Recurring maintenance washes are what keep a detailing calendar full in slow months. Most detailers who offer them use one of two structures, and each needs a slightly different invoice:</p>
<ul>
<li><strong>Prepaid monthly membership.</strong> The customer pays a set amount each month for a number of maintenance washes. Invoice in advance at the start of each month with the plan name and the visits included, for example "Maintenance plan, November 2026: 2 exterior washes + interior wipe-down." Add-ons go on separate lines as they happen.</li>
<li><strong>Pay-per-visit at a member rate.</strong> The customer pays only when you visit, at a discounted rate. Show your standard price and the member discount as a negative line so the value of the plan is visible every time.</li>
</ul>
<p>Spell out the rules in the plan agreement and repeat the short version in the invoice notes: whether unused visits carry over, how much notice is needed to cancel, and whether the membership rate requires the vehicle to stay in maintainable condition. If a member's car arrives far dirtier than usual, a condition surcharge still applies, and saying so up front avoids an argument later.</p>

<h2>Invoice notes and terms worth adding</h2>
<p>Detailers rarely lose money on the work itself. They lose it on misunderstandings after the customer drives away: a coating washed too soon, damp carpets mistaken for a leak, a missing parking pass that was actually in the glovebox. A few lines of notes, written once and saved in your template, handle most of these.</p>
<p>The notes box at the bottom of a detailing invoice is where you protect yourself. Short, plain lines work best:</p>
<ul>
<li><strong>Coating care:</strong> "Avoid washing for 7 days. Hand wash only; no automatic car washes."</li>
<li><strong>Interior drying:</strong> "Carpets may feel damp for several hours after extraction. Leave windows cracked if possible."</li>
<li><strong>Personal items:</strong> "Items found in the vehicle have been bagged and placed in the trunk."</li>
<li><strong>Cancellation:</strong> "Appointments cancelled with less than 24 hours' notice may be charged a cancellation fee."</li>
</ul>
<p>Keep a copy of every invoice as a PDF. If a customer contacts you three months later about a coating warranty, the invoice is your record of what was applied and when.</p>

<h2>Common detailing disputes</h2>
<ul>
<li><strong>"That scratch wasn't there before."</strong> Photos and condition notes at drop-off are your best defense.</li>
<li><strong>Surprise surcharges.</strong> Always tell the customer before starting extra work, and note their approval.</li>
<li><strong>Expectations on correction.</strong> Paint correction reduces defects; it rarely removes deep scratches. Describe the expected improvement honestly on the quote rather than promising perfection.</li>
<li><strong>Odor returning.</strong> Note on the invoice if the source, such as a spill soaked into carpet padding, couldn't be fully removed.</li>
</ul>
<p>If you also run a repair or mechanical shop, the <a href="/blog/auto-repair-invoice-template">auto repair invoice template</a> covers parts and labor billing, and the <a href="/blog/pressure-washing-invoice-template">pressure washing invoice guide</a> is useful if you clean driveways and garage floors too.</p>

<h2>Get paid at handover</h2>
<p>Detailing customers pay best when they've just seen the result. Prepare the invoice from the booking, add upgrades as you go, walk the customer around the vehicle, and take payment before you pack up. Then send a <a href="/blog/payment-receipt-template">payment receipt</a>. To set up your template now, open the <a href="/invoice-generator?template=dark">Dark invoice template</a>, add your packages as lines, and download a PDF for each job.</p>
`,
  },
  {
    slug: "salon-invoice-template",
    title: "Salon Invoice Template: Stylists & Booth Rent",
    description:
      "A salon invoice template guide for hair stylists and salon owners: bill services, bridal parties, products and monthly booth rent, with worked examples.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "alterations-tailoring-invoice-template",
      "massage-therapy-invoice-template",
      "tattoo-invoice-template",
      "makeup-artist-invoice-template",
      "recurring-invoices-guide",
      "deposit-invoice",
      "independent-contractor-invoice",
    ],
    faqs: [
      {
        q: "What is a booth rent invoice?",
        a: "A booth rent invoice is a bill a salon owner sends to an independent stylist who rents a chair, station or suite. It lists the rental period, the rent amount and any extras the agreement allows, such as product purchases or late fees. The stylist keeps their own clients and income.",
      },
      {
        q: "Do hair stylists need to give clients an invoice?",
        a: "For everyday appointments, a point-of-sale receipt is usually enough. A full invoice is useful for bridal parties, photo shoots, film and theater work, corporate events, or any client who pays later or needs the paperwork for their own records.",
      },
      {
        q: "Is a booth renter an employee or an independent contractor?",
        a: "A true booth renter is generally an independent business that leases space, sets their own prices and hours, and keeps their own clients. If the salon controls how and when the stylist works, the relationship may look like employment, so get advice if you're unsure.",
      },
      {
        q: "Do I charge sales tax on salon services?",
        a: "Most states don't tax hair services, but a few states and localities do tax some personal-care services. Retail products such as shampoo and styling products are usually taxable where the state has a sales tax. Check your state's rules.",
      },
      {
        q: "Who issues a 1099 for booth rent?",
        a: "Generally, a business that pays rent above the reporting threshold in the course of its trade files Form 1099-MISC for the landlord, so a booth renter may need to issue one to the salon owner rather than the other way round. Exceptions apply, for example for payments to corporations, so confirm with a tax professional.",
      },
      {
        q: "Is sales tax charged on booth rent?",
        a: "In most states, renting a booth or chair isn't subject to sales tax, because it's treated as renting space rather than selling goods or taxable services. A few states or cities tax commercial rent or similar license fees, and extras on the booth rent invoice, such as products resold to the renter, may be taxable. Check with your state revenue department before adding tax to a booth rent invoice.",
      },
      {
        q: "What should a booth rental agreement include?",
        a: "At minimum: the station or suite, the rent amount and due date, the rental period, what the rent includes (utilities, laundry, backbar products, Wi-Fi), late fees, the notice needed to end the agreement and any security deposit. It should also confirm that the renter sets their own prices, hours and products and keeps their own clients. Your booth rent invoices should match the agreement line by line, so refer to clause numbers where helpful.",
      },
      {
        q: "Can a booth renter deduct booth rent as a business expense?",
        a: "Generally, yes. A self-employed stylist who rents a booth for their business can usually deduct the rent as an ordinary business expense, alongside products, tools, insurance and education. Keep every booth rent invoice and proof of payment, because they're the evidence for the deduction. This is general information, so confirm with a tax professional, especially if part of your arrangement is commission-based or you also work as an employee.",
      },
      {
        q: "How do I invoice a salon for teaching a class?",
        a: "Bill the salon or academy that hired you, not the attendees, unless you agreed to collect from students directly. List the class name and date, the length or number of attendees, your teaching fee, any kit or product costs and travel. If the host pays you a share of ticket sales instead of a fee, show the calculation. Ask whether they need a W-9 or a PO number before the class so the invoice isn't held up.",
      },
      {
        q: "How should I bill for hair extensions?",
        a: "Many stylists take a deposit at booking that covers the cost of the hair, because it's ordered for that client and often can't be returned. On the final invoice, show the hair as a product line (length, method and quantity) and the installation as a service line, then subtract the deposit. Bill move-ups or maintenance appointments separately, and print your refund policy for custom-ordered hair on the deposit invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A salon invoice template has two common uses. Stylists use it to bill clients for services such as bridal hair, color or event styling, listing each service, products, travel and deposits. Salon owners use it as a booth rent invoice, billing renters for the station, the rental period, any product purchases and agreed fees, with a clear due date.</p>

<p>Most salon appointments end with a card tap and a receipt, so many stylists never think about invoices until a bride books five people or a renter falls behind on rent. That's when a proper salon invoice template saves an awkward conversation. This guide covers both sides: hair stylist invoices for clients and booth rent invoices for salon owners. You can build either in the <a href="/invoice-generator?template=lavender">invoice generator with the Lavender template</a>.</p>

<h2>When a salon or stylist needs an invoice</h2>
<ul>
<li><strong>Bridal and wedding parties</strong>, booked months ahead with a deposit and paid by one person.</li>
<li><strong>Editorial, film, theater and photo shoots</strong>, where a production company pays on terms.</li>
<li><strong>Corporate and event styling</strong>, billed to a business rather than the person in the chair.</li>
<li><strong>Booth or suite rent</strong>, billed weekly or monthly by the salon owner.</li>
<li><strong>Education and classes</strong>, where a stylist teaches at another salon.</li>
<li><strong>Clients paying later</strong>, for example a regular who settles monthly.</li>
</ul>

<h2>What to put on a hair stylist invoice</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Stylist or salon details</td><td>Business name, address, phone, booking link</td></tr>
<tr><td>Client</td><td>Name of the person paying, not necessarily the person styled</td></tr>
<tr><td>Event or service date</td><td>Saturday 14 November 2026, on location</td></tr>
<tr><td>Services</td><td>Bridal updo, bridesmaid styling, trial, color service</td></tr>
<tr><td>Products</td><td>Retail items sold, separately from services</td></tr>
<tr><td>Travel or early-start fee</td><td>On-location fee, before-7 a.m. start fee</td></tr>
<tr><td>Deposit</td><td>Amount paid at booking and whether it's refundable</td></tr>
<tr><td>Balance and due date</td><td>Balance due on the event day before services begin</td></tr>
</tbody></table>
<p>Keep retail products on separate lines from services. If your state taxes products but not hair services, you need them split anyway, and it makes your sales records cleaner.</p>

<h2>Worked example 1: bridal party invoice</h2>
<p>Hair for a bride and four bridesmaids on location, with a trial a month earlier. The bride paid a 50% deposit at booking.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Bridal trial, 15 October 2026</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Bridal hair, wedding day</td><td>1</td><td>$175.00</td><td>$175.00</td></tr>
<tr><td>Bridesmaid styling</td><td>4</td><td>$95.00</td><td>$380.00</td></tr>
<tr><td>On-location travel fee</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$700.00</strong></td></tr>
<tr><td colspan="3">Less deposit paid 2 August 2026</td><td>−$350.00</td></tr>
<tr><td colspan="3"><strong>Balance due 14 November 2026, before services begin</strong></td><td><strong>$350.00</strong></td></tr>
</tbody></table>
<p>The maths: $85 + $175 + $380 + $60 = $700. Half was paid at booking, leaving $350. Gratuity isn't included; if the party wants to tip, it's added at payment. Some stylists instead include a stated service charge for large parties. If you do, call it a service charge, not a tip, and say who receives it.</p>

<h2>What is a booth rent invoice?</h2>
<p>Booth renters (also called chair renters or suite renters) run their own businesses inside a salon. They lease a station, set their own prices and hours, buy their own products and keep their own clients. The salon owner is effectively their landlord, and the booth rent invoice is how the owner bills that rent.</p>
<p>A booth rent invoice should show:</p>
<ul>
<li><strong>Station or suite number</strong> and the rental period (week or month).</li>
<li><strong>Rent amount</strong> as set in the booth rental agreement.</li>
<li><strong>Extras the agreement allows</strong>: backbar or color products bought from the salon, laundry, shared utilities, card processing if the salon handles it.</li>
<li><strong>Late fees</strong>, only if the agreement includes them.</li>
<li><strong>Due date</strong> and how to pay.</li>
</ul>
<p>Because booth rent repeats on the same day every week or month, treat it like any other recurring bill. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> and the <a href="/blog/rent-invoice-template">rent invoice template</a> both cover the routine, including how to number repeat invoices.</p>

<h2>Worked example 2: monthly booth rent invoice</h2>
<p>A stylist renting Station 4 for November. They bought color supplies through the salon's distributor account and paid last month's rent late.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Booth rent, Station 4, 1–30 November 2026</td><td>1</td><td>$1,050.00</td><td>$1,050.00</td></tr>
<tr><td>Color supplies purchased via salon account (receipt attached)</td><td>1</td><td>$142.00</td><td>$142.00</td></tr>
<tr><td>Towel laundry service, November</td><td>1</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td>Late fee, October rent (per agreement clause 6)</td><td>1</td><td>$25.00</td><td>$25.00</td></tr>
<tr><td colspan="3"><strong>Total due 1 November 2026</strong></td><td><strong>$1,257.00</strong></td></tr>
</tbody></table>
<p>The maths: $1,050 + $142 + $40 + $25 = $1,257. If the salon resells products at a markup, sales tax may apply to that line depending on the state; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> will work out the amount.</p>

<h2>Booth rent, contractors and 1099s</h2>
<p>Salon owners sometimes treat the booth rent invoice as a formality, but it is also evidence of the relationship. Regular invoices for a fixed rent, paid by the renter from their own business account, support the position that the renter is running an independent business. Paying a renter a share of their service revenue, by contrast, looks more like commission employment.</p>
<p>The booth rental relationship has tax consequences on both sides, so get it right from the start:</p>
<ul>
<li><strong>Classification.</strong> A booth renter who controls their schedule, prices, products and clients is generally an independent business. If the salon sets hours, assigns clients or dictates how services are done, the relationship can start to look like employment, which brings payroll obligations. When in doubt, ask a tax adviser.</li>
<li><strong>Who files the 1099.</strong> Rent paid in the course of a business is reported on Form 1099-MISC by the payer. That usually means the renter may need to issue one to the salon owner, not the reverse, subject to exceptions such as payments to corporations. Legislation passed in 2025 raised the reporting threshold from $600 to $2,000 for payments made from 2026; confirm the current figure on the IRS website.</li>
<li><strong>Commission stylists are different.</strong> A stylist paid a commission on services they perform may be an employee or a contractor depending on the facts. If they are a contractor, they invoice the salon rather than the other way round; see our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a>.</li>
</ul>
<p>This is general information, not tax advice. Classification and reporting rules depend on your specific facts, so check with a qualified professional.</p>

<h2>Chair rent, suite rent and weekly billing</h2>
<p>Not every rental looks the same, and the invoice should match the arrangement in the agreement:</p>
<table><thead><tr><th>Arrangement</th><th>Typical billing</th><th>What the invoice shows</th></tr></thead><tbody>
<tr><td>Chair or booth rent in an open salon</td><td>Weekly or monthly</td><td>Station number, period, rent, any shared supplies</td></tr>
<tr><td>Private salon suite</td><td>Monthly, often with a security deposit held separately</td><td>Suite number, rent, any utilities or amenities fees</td></tr>
<tr><td>Hybrid (lower rent plus a percentage of retail)</td><td>Monthly</td><td>Base rent plus the retail percentage, with the sales figure it's based on</td></tr>
</tbody></table>
<p>Weekly rent is common for chair rentals, which means four or five invoices a month. Use the same day each week and a predictable numbering pattern, such as <code>ST4-2026-W45</code> for week 45. If the agreement says rent is due in advance, issue the invoice a few days before the week starts. Security deposits on suites are usually best kept off the regular rent invoice and recorded on a separate document, as with residential leases.</p>
<p>Tips and card fees can also cause friction. If the salon processes card payments for renters and passes on processing fees, show those fees as their own line with the period they cover, and pay out renters' tips according to the agreement. Mixing a renter's tips into a rent credit makes everyone's records harder to reconcile.</p>

<h2>Deposits, no-shows and cancellations</h2>
<p>Salons lose real money to no-shows on long appointments. Deposits for color corrections, extensions and bridal work are common for that reason. Invoice the deposit at booking with your cancellation terms printed on it, then deduct it on the final invoice. If the client cancels inside your notice window and you keep the deposit, issue a short final invoice or receipt showing the deposit retained as a cancellation fee, so both sides have a record. The <a href="/blog/deposit-invoice">deposit invoice guide</a> shows the layout.</p>

<h2>Next step</h2>
<p>Whether you're a stylist billing a wedding party or an owner billing three renters, set up the template once. Open the <a href="/invoice-generator?template=lavender">Lavender template in the generator</a>, enter your salon details, add your standard services or booth rent as lines, and save it as a draft for next time. For renters who drift late, read <a href="/blog/late-payment-fees">how to charge late payment fees</a>. If you style weddings regularly, the <a href="/blog/event-planner-invoice-template">event planner invoice guide</a> shows how planners schedule vendor payments, which helps you line up your deposit dates with theirs.</p>
`,
  },
  {
    slug: "event-planner-invoice-template",
    title: "Event Planner Invoice Template: Retainers & Vendors",
    description:
      "An event planner invoice template guide: retainers, milestone payment schedules, vendor pass-through costs, gratuities and overtime, with a full worked example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "wedding-planner-invoice-template",
      "how-to-start-an-event-planning-business",
      "florist-invoice-template",
      "dj-invoice-template",
      "milestone-payments",
      "deposit-invoice",
      "catering-invoice-template",
    ],
    faqs: [
      {
        q: "How do event planners charge clients?",
        a: "The main models are a flat planning fee, a percentage of the total event budget, an hourly rate for partial planning or day-of coordination, or a hybrid. Most planners take a non-refundable retainer at signing and spread the rest over a milestone schedule tied to dates before the event.",
      },
      {
        q: "Should vendor costs go on the event planner's invoice?",
        a: "Only if you actually pay vendors on the client's behalf. Many planners have clients contract and pay vendors directly, which keeps the planner's invoice to their own fees. If you do pay a vendor for the client, list it as a reimbursable at cost, or disclose any markup or handling fee in the contract.",
      },
      {
        q: "What is a typical event planner retainer?",
        a: "Retainers vary, but many planners ask for a meaningful share of the planning fee at signing to secure the date, and it is usually non-refundable because it reserves time you can't sell to someone else. State the amount and refund terms in the contract and on the retainer invoice.",
      },
      {
        q: "Is a service charge the same as a gratuity?",
        a: "No. A gratuity is voluntary and the client decides the amount. A mandatory service charge is set by the business, and the IRS generally does not treat it as a tip. Many states also tax mandatory service charges differently from voluntary tips, so label them accurately.",
      },
      {
        q: "When should the final event planner invoice be paid?",
        a: "Many planners require the final planning payment before the event, often two to four weeks out, so they're not chasing money after the day. A small post-event invoice then covers overtime or reimbursables incurred on the day.",
      },
      {
        q: "How do I invoice a destination wedding or a client in another country?",
        a: "Agree the invoice currency in the contract, show the currency code next to every amount and say who pays transfer and conversion fees. If vendors are paid in a local currency, state the exchange rate used for any reimbursables and the date it applied. Milestone dates may need to move earlier to allow for international transfers. Our free generator supports 8 currencies, so each milestone invoice can be issued in the currency the client agreed to pay.",
      },
      {
        q: "What does a force majeure clause mean for my invoices?",
        a: "A force majeure clause sets out what happens when an event can't go ahead because of something outside anyone's control, such as a natural disaster or government restrictions. It usually decides whether payments already made are kept, refunded or moved to a new date, and your invoices should follow it exactly. Number the clause in your contract, and if you rely on it, cite it in the notes of the credit note or rescheduling invoice.",
      },
      {
        q: "Should I charge for an initial consultation?",
        a: "Many planners offer a short free discovery call, then charge for detailed consultations, design sessions or venue walkthroughs before a contract is signed. If you charge, invoice it as its own service with the date and time spent. A common approach is to credit the consultation fee against the planning package if the client books within a set period. State that rule on the invoice so the credit is clear later.",
      },
      {
        q: "How do I bill for extra meetings or hours beyond my package?",
        a: "Define in the contract how many meetings, site visits and hours of event-day coverage the package includes, and set an hourly rate for anything beyond it. Log the extra time as it happens, tell the client when they're close to the limit, and bill the overage on the next milestone invoice as a separate line with dates and hours. Clients accept extra charges far more easily when they saw them coming.",
      },
      {
        q: "How long should I keep event planning invoices and receipts?",
        a: "In the US, the IRS generally expects you to keep records that support your tax return for at least three years after filing, and longer in some cases, such as six years if income was substantially underreported. Keep every invoice, vendor receipt, contract and reimbursement record together for each event. Outside the US, follow your own tax authority's rules, which often require five or six years.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An event planner invoice template should show your planning fee and how it's calculated (flat, percentage of budget or hourly), the retainer already paid, which milestone payment this invoice covers, any reimbursable vendor costs paid on the client's behalf, overtime, gratuities you distributed, and the balance with a due date. Keep your fees and pass-through costs in separate sections.</p>

<p>Event planning invoices go wrong in two ways: the client doesn't understand the payment schedule, or the planner's fee gets mixed up with money flowing to the florist, caterer and band. A well-built event planner invoice template keeps those separate. This guide covers fee models, retainers, milestone schedules, vendor pass-through, gratuities and a worked example. Build yours in the <a href="/invoice-generator?template=elegant">invoice generator with the Elegant template</a>, which reads well for weddings and private events.</p>

<h2>Event planner fee models</h2>
<table><thead><tr><th>Model</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Flat fee</td><td>One planning fee for a defined scope</td><td>Weddings and private events with a clear scope</td></tr>
<tr><td>Percentage of budget</td><td>Fee is a stated percentage of total event spend</td><td>Large corporate events where budget drives workload</td></tr>
<tr><td>Hourly</td><td>Billed against a time log</td><td>Partial planning, consultations, design-only work</td></tr>
<tr><td>Day-of coordination package</td><td>Fixed fee for the final weeks plus the event day</td><td>Couples who planned it themselves</td></tr>
<tr><td>Hybrid</td><td>Base fee plus percentage, or flat fee plus hourly beyond a cap</td><td>Scope that's likely to grow</td></tr>
</tbody></table>
<p>If you charge a percentage of budget, define "budget" in the contract (does it include venue, tax and gratuities?) and invoice against confirmed vendor contracts, not estimates. Otherwise your final invoice becomes a negotiation.</p>

<h2>Retainers and milestone payment schedules</h2>
<p>A planner's work is front-loaded: venue search, vendor sourcing and design happen months before the event. Your payment schedule should reflect that. A common structure is a retainer at signing and then payments tied to dates. Our guide to <a href="/blog/milestone-payments">milestone payments</a> covers the general method, and <a href="/blog/deposit-invoice">deposit invoices</a> explains how to word the first one.</p>
<p>Here's an example schedule for a $9,000 full-planning wedding package:</p>
<table><thead><tr><th>Milestone</th><th>Due</th><th>Share</th><th>Amount</th></tr></thead><tbody>
<tr><td>Retainer, secures the date (non-refundable)</td><td>At signing</td><td>30%</td><td>$2,700.00</td></tr>
<tr><td>Second payment</td><td>120 days before event</td><td>30%</td><td>$2,700.00</td></tr>
<tr><td>Third payment</td><td>30 days before event</td><td>30%</td><td>$2,700.00</td></tr>
<tr><td>Final payment</td><td>7 days after event</td><td>10%</td><td>$900.00</td></tr>
<tr><td colspan="3"><strong>Total planning fee</strong></td><td><strong>$9,000.00</strong></td></tr>
</tbody></table>
<p>Each milestone gets its own invoice, numbered in sequence, showing the full fee, what has been paid so far and what's due now. That way every invoice tells the whole story, and a client who forwards one to a parent paying half doesn't create confusion.</p>

<h2>Vendor pass-through costs: pay direct or reimburse?</h2>
<p>Decide this in the contract, because it changes your invoices completely.</p>
<ul>
<li><strong>Client pays vendors directly.</strong> The most common approach for weddings. Vendors invoice the client; your invoice only covers your fee. You may still track vendor due dates for the client.</li>
<li><strong>Planner pays and is reimbursed.</strong> Common for corporate events and small purchases (signage, welcome bags, rentals). List each item at cost with the receipt attached, under a separate "Reimbursable expenses" heading.</li>
<li><strong>Planner pays with a markup or handling fee.</strong> Acceptable if disclosed. Undisclosed markups on vendor costs are a common source of disputes and damaged reputations.</li>
</ul>
<p>Vendor commissions or referral payments from vendors to you should also be disclosed under your contract terms. Clients find out, and it's a better conversation when it's in writing from the start.</p>

<h2>Gratuities, service charges and sales tax</h2>
<p>Planners often hand out tips to vendor staff on the event day. If the client gives you cash in envelopes, there's nothing to invoice. If you pay tips from your own funds at the client's request, invoice them as a reimbursable with a list of who received what.</p>
<p>Be careful with wording. A voluntary gratuity and a mandatory service charge are different things: the IRS generally treats a mandatory service charge as part of the business's revenue rather than a tip, and many states tax service charges and tips differently for sales tax purposes. Sales tax on event planning fees also varies; some states tax certain event services or bundled packages that include taxable items. Check your state's guidance and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if a line is taxable.</p>

<h2>Worked example: final post-event invoice</h2>
<p>The three pre-event milestones above have been paid ($8,100). This final invoice covers the last 10% of the planning fee, two hours of overtime when the reception ran late, two reimbursable purchases and vendor tips the planner distributed on the couple's instructions.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full planning package, final milestone (10% of $9,000)</td><td>1</td><td>$900.00</td><td>$900.00</td></tr>
<tr><td>Overtime, reception extended past contracted end time</td><td>2 hrs</td><td>$125.00</td><td>$250.00</td></tr>
<tr><td><em>Reimbursable at cost:</em> welcome bag supplies (receipts attached)</td><td>1</td><td>$340.00</td><td>$340.00</td></tr>
<tr><td><em>Reimbursable at cost:</em> rush printing, ceremony signage</td><td>1</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td><em>Reimbursable at cost:</em> vendor gratuities distributed per client instruction (list attached)</td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
<tr><td colspan="3"><strong>Total due by 21 November 2026</strong></td><td><strong>$2,275.00</strong></td></tr>
</tbody></table>
<p>The maths: fees are $900 + $250 = $1,150; reimbursables are $340 + $185 + $600 = $1,125; together $2,275. Add a note under the table: "Planning fee to date: $9,000.00 of $9,000.00 invoiced; $8,100.00 received." That one line answers the question every client asks.</p>

<h2>What to include on every event planner invoice</h2>
<ul>
<li>Your business name and contact details, and the client's name as on the contract.</li>
<li>Event name, date and venue.</li>
<li>Contract reference and the milestone number ("Payment 3 of 4").</li>
<li>Fee section and a separate reimbursables section.</li>
<li>Payments received to date and the balance remaining on the contract.</li>
<li>Due date, payment methods and your late-payment terms.</li>
<li>Cancellation and postponement terms, or a reference to the contract clause.</li>
</ul>
<p>Our <a href="/blog/invoice-payment-terms">invoice payment terms guide</a> explains how to phrase due dates, and <a href="/blog/late-payment-fees">late payment fees</a> covers what's reasonable to charge if a milestone slips.</p>

<h2>Corporate events and multiple payers</h2>
<p>Corporate clients usually need a PO number on every invoice, may pay only on Net 30 or Net 45 terms, and might require you to register in their supplier system before the first payment. Ask about all of this before you sign, and build the payment lag into your milestone dates. For family events where two sets of parents are splitting the bill, agree in writing who receives which invoice. Issuing two invoices for agreed shares is cleaner than one invoice that two people half-pay.</p>

<h2>Cancellations and postponements</h2>
<p>Events move. A venue floods, a family emergency happens, a corporate budget gets cut. Your contract should already say what happens to the fee in each case, and your invoices should follow it without improvising. Three common scenarios:</p>
<ul>
<li><strong>Postponement to a new date.</strong> Many planners transfer payments already made to the new date and may charge a rescheduling fee if significant work must be redone. Issue a short invoice for the fee and reissue the remaining milestone invoices with new due dates, keeping the original numbers in the description so the history is traceable.</li>
<li><strong>Cancellation by the client.</strong> The retainer is typically kept. Some contracts also make later milestones payable in full if the cancellation comes close to the event, because your time can't be resold. Invoice whatever the contract allows, citing the clause.</li>
<li><strong>Cancellation by you.</strong> If you can't perform, your contract will usually require a refund of some or all payments. Document it with a credit note rather than deleting invoices; our <a href="/blog/credit-note-guide">credit note guide</a> explains how.</li>
</ul>
<p>Write the outcome in the notes of the next invoice or credit note ("Event postponed from 14 Nov 2026 to 8 May 2027 per amendment dated 2 Oct 2026; payments received transferred to new date"). That single line saves hours if the matter is ever disputed.</p>

<h2>Common event planning invoice disputes</h2>
<ul>
<li><strong>Scope creep.</strong> An extra rehearsal dinner or welcome party is a change in scope. Price it as an add-on before you plan it.</li>
<li><strong>Retainer refunds after cancellation.</strong> State plainly that the retainer is non-refundable and why.</li>
<li><strong>Percentage-of-budget surprises.</strong> If the budget grows, so does your fee. Show the calculation on the invoice.</li>
<li><strong>Unreceipted reimbursables.</strong> Attach every receipt; no receipt, no reimbursement request.</li>
</ul>
<p>Working with caterers and stylists? See the <a href="/blog/catering-invoice-template">catering invoice template</a> for per-person pricing and the <a href="/blog/salon-invoice-template">salon invoice guide</a> for how bridal hair teams handle deposits.</p>

<h2>Set up your event planner invoice</h2>
<p>Open the <a href="/invoice-generator?template=elegant">Elegant template in the generator</a>, enter the event details and milestone number, list your fee lines, then add a reimbursables section at cost. Download the PDF and keep a draft saved in your browser so the next milestone invoice takes two minutes.</p>
`,
  },
  {
    slug: "real-estate-commission-invoice",
    title: "Real Estate Commission Invoice: Splits & Referrals",
    description:
      "How a real estate commission invoice works: brokerage billing, agent splits, referral fee invoices and commercial lease commissions, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sales-commission-invoice-template",
      "septic-pumping-invoice-template",
      "independent-contractor-invoice",
      "w9-and-1099-for-contractors",
      "consulting-invoice-template",
    ],
    faqs: [
      {
        q: "Can a real estate agent invoice a client directly for commission?",
        a: "Generally, no. In most US states a salesperson or sales agent may receive compensation for real estate work only from their sponsoring or employing broker. The brokerage bills or receives the commission, and the agent is paid their split by the brokerage.",
      },
      {
        q: "How is a real estate commission split calculated?",
        a: "The commission on the sale is divided between the brokerages according to the listing agreement and any compensation offer, then each brokerage pays its agent according to their split agreement, such as 70/30 or a cap model. Referral fees and brokerage fees are deducted along the way.",
      },
      {
        q: "Who sends a referral fee invoice?",
        a: "The referring brokerage sends the referral invoice to the brokerage that closed the deal, based on a written referral agreement. In most states the fee must be paid broker to broker, and many states allow referral fees to be paid only to licensees.",
      },
      {
        q: "Do real estate agents get a 1099?",
        a: "Most agents are independent contractors and receive a Form 1099 from their brokerage for commissions paid during the year, provided the amount meets the reporting threshold. Agents then report the income and pay self-employment tax on it.",
      },
      {
        q: "Is a commission invoice the same as a commission disbursement authorization?",
        a: "Not exactly. A commission disbursement authorization, or CDA, is an instruction from the brokerage to the title or escrow company telling it how to pay the commission at closing. It functions like an invoice to closing, while a referral or commercial lease commission invoice is a direct bill to the paying party.",
      },
      {
        q: "When is a real estate commission paid?",
        a: "On a sale, the commission is normally paid at closing by the title or escrow company, following the instructions in the CDA and settlement statement. The money goes to the brokerage, which then pays the agent their split, often within a few days depending on brokerage policy. Commercial lease commissions are usually paid on the schedule in the commission agreement, for example half on lease signing and half on occupancy.",
      },
      {
        q: "Is a commission owed if the sale falls through?",
        a: "Usually not. Most listing and buyer agreements make the commission payable only when the transaction closes. Some agreements include exceptions, for example where the seller backs out without a valid reason after accepting an offer, or sells to a buyer the agent introduced during a protection period after the listing ends. What is owed depends on the agreement's wording and state law, so read it and ask your broker before sending any demand.",
      },
      {
        q: "Can a buyer pay their own agent's commission after the NAR settlement?",
        a: "Yes. Since the 2024 settlement changes, buyers working with an MLS participant sign a written agreement that sets the agent's compensation. That amount can be paid by the buyer, by the seller as a concession negotiated in the offer, or by a mix of both. The settlement statement and CDA should show who pays what, and loan programs may limit seller concessions, so confirm the arrangement early in the transaction.",
      },
      {
        q: "Can a real estate agent rebate part of the commission to a client?",
        a: "In most states, yes, provided it's disclosed to all parties and the lender approves it, usually as a credit on the settlement statement. A small number of states ban or restrict rebates, and those rules have changed over time, so check your state real estate commission's current position. The rebate comes out of the brokerage's commission, so it should appear on the CDA as a credit to the client rather than as a payment from the agent personally.",
      },
      {
        q: "Can an agent with an inactive or referral-only license collect a referral fee?",
        a: "In many states, yes, provided the license is held with a broker or referral company and the fee is paid to that brokerage, which then pays the agent. Some states have a specific referral-only status that limits what the licensee can do. A fully lapsed license usually means no fee can be paid. Check your state's rules, and make sure the referral agreement names the brokerages rather than the individual agents.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A real estate commission invoice is a bill for a commission earned on a sale, lease or referral. In most US states agents can't invoice clients directly: the brokerage bills the commission, often through a commission disbursement authorization (CDA) sent to title or escrow, then pays the agent their split. Referral fees are invoiced broker to broker under a written agreement.</p>

<p>Searches for a "real estate commission invoice template" usually come from one of four situations: a brokerage billing closing, a broker billing a referral fee, a commercial broker billing a landlord for a lease commission, or an agent who wants to invoice their own brokerage. The rules for each are different, and licensing law matters more here than in most industries. This guide explains each case, shows a full commission split with real numbers, and points out where you need your state's rules. Use the <a href="/invoice-generator?template=corporate">invoice generator with the Corporate template</a> for referral and lease commission invoices.</p>

<h2>Who can invoice for a real estate commission?</h2>
<p>State licensing laws generally require that compensation for real estate activity flows through a broker. In Texas, for example, the <a href="https://www.trec.texas.gov/node/454" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission</a> states that a sales agent may not accept compensation from anyone other than their sponsoring broker, or pay a commission except through that broker. Michigan, Nevada and many other states have similar rules, and some extend them explicitly to referral fees.</p>
<p>In practice that means:</p>
<ul>
<li><strong>The brokerage</strong> is the party entitled to the commission under the listing or buyer agreement.</li>
<li><strong>The agent</strong> is paid by the brokerage under their independent contractor or employment agreement.</li>
<li><strong>Agents shouldn't send commission invoices to sellers, buyers or other brokerages</strong> in their own name. Doing so can breach license law.</li>
</ul>
<p>Some brokerages ask agents to submit an internal "commission request" or invoice to the brokerage itself after closing, which is fine because it's agent to broker. Rules vary by state, so check with your state's real estate commission and your broker.</p>

<h2>Four kinds of real estate commission invoice</h2>
<table><thead><tr><th>Invoice</th><th>From</th><th>To</th><th>When</th></tr></thead><tbody>
<tr><td>Commission disbursement authorization (CDA)</td><td>Brokerage</td><td>Title or escrow company</td><td>Before closing on a sale</td></tr>
<tr><td>Referral fee invoice</td><td>Referring brokerage</td><td>Closing brokerage</td><td>At or after closing</td></tr>
<tr><td>Commercial lease commission invoice</td><td>Brokerage</td><td>Landlord (or as agreed)</td><td>Often split between lease signing and occupancy</td></tr>
<tr><td>Agent commission request</td><td>Agent</td><td>Their own brokerage</td><td>After closing, if the brokerage requires it</td></tr>
</tbody></table>

<h2>Worked example: commission split on a home sale</h2>
<p>A home sells for $485,000. Under the listing agreement, the seller pays the listing brokerage 2.75% for its side. The listing agent came from a referral, and the referring broker is owed 25% of the listing side. The agent is on a 70/30 split with their brokerage.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Listing-side commission</td><td>$485,000 × 2.75%</td><td>$13,337.50</td></tr>
<tr><td>Referral fee to referring brokerage</td><td>$13,337.50 × 25%</td><td>$3,334.38</td></tr>
<tr><td>Net commission after referral</td><td>$13,337.50 − $3,334.38</td><td>$10,003.12</td></tr>
<tr><td>Agent share (70%)</td><td>$10,003.12 × 70%</td><td>$7,002.18</td></tr>
<tr><td>Brokerage share (30%)</td><td>$10,003.12 − $7,002.18</td><td>$3,000.94</td></tr>
</tbody></table>
<p>The figures check out: $3,334.38 + $7,002.18 + $3,000.94 = $13,337.50. (25% of $13,337.50 is $3,334.375, rounded to the nearest cent.) If the brokerage also charges a per-transaction fee, it comes out of the agent's share. Some referral agreements calculate the fee on the gross commission and others on the net, so read yours carefully.</p>

<h3>The referral fee invoice</h3>
<p>In this example, the referring brokerage sends an invoice like this to the listing brokerage:</p>
<table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>Referral fee per agreement dated 3 June 2026: 25% of listing-side commission on 14 Maple Ct, closed 20 October 2026 ($13,337.50 × 25%)</td><td>$3,334.38</td></tr>
<tr><td><strong>Total due on receipt</strong></td><td><strong>$3,334.38</strong></td></tr>
</tbody></table>
<p>Include the property address, closing date, client name, the referral agreement date, both brokerages' license numbers and your W-9 if the paying brokerage doesn't have one on file. Many title companies will pay referral fees directly at closing if the referral is on the CDA, which avoids a separate invoice altogether.</p>

<h2>What a CDA or commission demand shows</h2>
<p>For sales, the closing brokerage typically sends the title or escrow officer a CDA listing:</p>
<ul>
<li>Property address, buyer and seller names, and the file or escrow number.</li>
<li>Sale price and the commission rate or flat amount agreed.</li>
<li>Gross commission and how it's split: referral fee, brokerage, agent, any transaction fees.</li>
<li>Payee details for each amount (often the brokerage only, which then pays its agent).</li>
<li>Signature of the managing or designated broker.</li>
</ul>
<p>After the 2024 National Association of Realtors settlement, compensation offers are no longer advertised on MLS listings, and MLS participants working with buyers must have a written buyer agreement before touring. That makes the agreements, not the MLS, the source of the numbers on your CDA, so keep them with the file.</p>

<h2>Commercial lease commission invoices</h2>
<p>Commercial leasing is where real estate commission invoices look most like ordinary invoices. The landlord usually agrees in a listing or commission agreement to pay a commission based on the lease value, sometimes a percentage of the total base rent over the term. Payment is often split, for example half on lease signing and half when the tenant takes occupancy or starts paying rent. Each payment gets its own invoice from the brokerage to the landlord, referencing the tenant, premises, lease term and the commission agreement clause.</p>
<p>These invoices are commonly on Net 30 terms. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains how to phrase them, and the <a href="/blog/milestone-payments">milestone payments guide</a> helps if the commission is paid in several instalments.</p>

<h2>When an agent invoices their own brokerage</h2>
<p>Agents sometimes need to bill their brokerage directly, for example when the brokerage asks for a commission request after closing, or when a team leader pays team members. This is agent-to-broker or team-member-to-team-leader billing, which is generally allowed because the money still flows through the brokerage. A clear internal invoice includes:</p>
<ul>
<li>The agent's name, license number and the brokerage name.</li>
<li>Property address, closing date and the client's name.</li>
<li>The gross commission received by the brokerage for the agent's side.</li>
<li>Each deduction: referral fee, brokerage split, transaction or technology fee, team split, any amount applied to an annual cap.</li>
<li>The net amount payable to the agent.</li>
</ul>
<p>Showing every deduction lets the agent reconcile their 1099 at year end and spot errors quickly. If you're on a cap model, add a running total toward the cap so you know when your split changes. Be cautious with commission advance companies: they pay part of a pending commission in exchange for a fee, which can be expensive, and your brokerage may need to approve the arrangement.</p>

<h2>Taxes, 1099s and record keeping</h2>
<ul>
<li><strong>1099 reporting.</strong> Brokerages generally report commissions paid to independent contractor agents on Form 1099-NEC, and referral fees paid to other brokerages may be reportable too unless the payee is a corporation. The reporting threshold rose to $2,000 for payments made from 2026; confirm current rules on the IRS website. See <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099</a>.</li>
<li><strong>Self-employment tax.</strong> Agents paid as contractors pay their own self-employment tax and may need quarterly estimated payments.</li>
<li><strong>Sales tax.</strong> Real estate commissions generally aren't subject to state sales tax, though a few states apply a gross receipts or general excise tax to services. Check your state.</li>
<li><strong>Records.</strong> Keep the listing agreement, buyer agreement, referral agreement, CDA and settlement statement together. Brokerages are usually required to keep transaction records for a set number of years under state law.</li>
</ul>
<p>This article is general information about US practice, not legal or tax advice. Licensing and compensation rules are set state by state, so confirm with your state real estate commission, your broker and a tax professional.</p>

<h2>Common commission invoicing mistakes</h2>
<ul>
<li><strong>An agent invoicing in their own name</strong> instead of through the brokerage.</li>
<li><strong>Referral fees calculated on the wrong base</strong> (gross vs net of brokerage fees).</li>
<li><strong>Referral fees paid to unlicensed people</strong>, which many states prohibit.</li>
<li><strong>No agreement on file.</strong> A referral fee without a written agreement is hard to collect.</li>
</ul>
<p>Agents who do non-licensed side work, such as staging consultations or marketing services for other agents, can invoice for that like any contractor. The <a href="/blog/consulting-invoice-template">consulting invoice template</a> and <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> cover that. If you manage rentals too, the <a href="/blog/rent-invoice-template">rent invoice template</a> covers monthly tenant billing, and <a href="/blog/moving-company-invoice-template">moving company invoices</a> are useful to understand if you recommend movers to clients.</p>

<h2>Create a referral or lease commission invoice</h2>
<p>Open the <a href="/invoice-generator?template=corporate">Corporate template in the invoice generator</a>, add your brokerage name and license number, show the commission calculation in the line description, reference the agreement date, and download the PDF. Attach the agreement and send it to the paying broker or landlord the day the deal closes.</p>
`,
  },
  {
    slug: "virtual-assistant-invoice-template",
    title: "Virtual Assistant Invoice Template: Hourly or Retainer",
    description:
      "A virtual assistant invoice template guide: hourly billing with time logs, monthly retainers, overage hours and invoicing international clients, with examples.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    related: [
      "data-entry-invoice-template",
      "virtual-assistant-rates",
      "retainer-invoice",
      "how-to-invoice-for-hourly-work",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "How do virtual assistants bill clients?",
        a: "Most virtual assistants bill hourly against a time log, sell a monthly retainer for a set number of hours, or charge a fixed price per task or project. Retainers are popular because they give the VA predictable income and the client a guaranteed slot in the VA's schedule.",
      },
      {
        q: "Should a virtual assistant invoice in advance or in arrears?",
        a: "Retainers are usually invoiced in advance at the start of the month, while hourly work is invoiced in arrears, weekly, every two weeks or monthly. Overage hours beyond a retainer are normally billed in arrears on the next invoice.",
      },
      {
        q: "Do I need to attach a time log to a VA invoice?",
        a: "It isn't legally required, but most clients expect one for hourly work and it heads off questions. A summary by task category on the invoice with a detailed log attached is the usual approach.",
      },
      {
        q: "What currency should a virtual assistant invoice in?",
        a: "Invoice in the currency agreed in your contract. Many VAs working for US clients invoice in USD, then receive it through a provider that offers USD account details. Write the currency code next to the total to avoid confusion.",
      },
      {
        q: "Do unused retainer hours roll over?",
        a: "Only if your agreement says so. Many VAs let a limited number of hours roll into the next month, or none at all, because the retainer pays for reserved availability. State the rule on the contract and on each retainer invoice.",
      },
      {
        q: "Can I bill for onboarding, meetings and learning a client's tools?",
        a: 'Yes, if your contract says so. Time spent in client meetings, onboarding calls and learning systems the client asked you to use is real work and is normally billable at your usual rate. Some VAs give the first hour of onboarding free as goodwill. Whatever you decide, state it before you start and show these hours as their own category on the time log, such as "Onboarding and tool setup: 2.5 hrs."',
      },
      {
        q: "Do I need to register a business before I can invoice as a VA?",
        a: "Usually not to start. In the US, you can invoice as a sole proprietor under your own name and report the income on your tax return, though a trade name may need a DBA filing and some cities require a business license. Many VAs get a free EIN so they don't share their Social Security number. Rules differ in other countries, so check with your local tax authority about registration and when you must charge sales tax or VAT.",
      },
      {
        q: "Do I charge VAT or GST when invoicing clients in another country?",
        a: "Often not, but it depends on your own country's rules. Many tax systems treat services supplied to business clients abroad as outside the scope of local VAT or GST, or as zero-rated, though you may still need to register once your income passes a threshold and note the reason on the invoice. Rules for consumer clients can differ. Check with your tax authority, such as HMRC or the ATO, before your first international invoice.",
      },
      {
        q: "How do I raise my rate with existing clients?",
        a: 'Give written notice before the change, commonly 30 days or one full billing cycle, and say when the new rate starts and what it applies to. Then show the new rate clearly on the first invoice after the change, with a note such as "Rate updated to $40/hour from 1 January 2027, as notified on 1 December 2026." If you\'re on a retainer, update the retainer amount and the overage rate together so they stay consistent.',
      },
      {
        q: "Should each client get its own invoice numbering?",
        a: "Use one continuous numbering sequence for all your invoices rather than restarting at 1 for each client. That keeps your records complete and makes gaps easy to spot, which tax authorities in many countries expect. If it helps you filter, add a client code next to the number, such as INV-0148 (ACME). Send each client a separate invoice for their own work, even when you bill several clients on the same day.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A virtual assistant invoice template should show the billing period, your rate, hours worked or the retainer amount, a time-log summary by task, any overage hours, reimbursable tools or expenses, the currency and the due date. Invoice retainers in advance and hourly work in arrears, and attach a detailed time log so the client can see where the hours went.</p>

<p>Virtual assistants usually juggle several clients, often in different countries, each on slightly different terms. One client is on a 20-hour retainer, another pays hourly, a third wants a fixed price for inbox cleanup. A consistent virtual assistant invoice template stops you rebuilding the invoice every month. Set yours up in the <a href="/invoice-generator?template=minimal">invoice generator with the Minimal template</a>, which keeps long task descriptions readable.</p>

<h2>Hourly vs retainer vs per-task pricing</h2>
<table><thead><tr><th>Model</th><th>Invoice timing</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Hourly</td><td>In arrears, weekly to monthly</td><td>Simple, fair for unpredictable work</td><td>Income varies; clients may watch the clock</td></tr>
<tr><td>Monthly retainer</td><td>In advance, start of month</td><td>Predictable income, reserved capacity</td><td>Need clear rules on rollover and overage</td></tr>
<tr><td>Per task or project</td><td>On completion or by milestone</td><td>Rewards speed and skill</td><td>Scope must be tightly defined</td></tr>
</tbody></table>
<p>Many VAs start hourly and move good clients onto a retainer after a few months, once both sides know the typical workload. Our <a href="/blog/retainer-invoice">retainer invoice guide</a> covers how to word the retainer itself, and <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> explains rounding, minimum increments and timesheets.</p>

<h2>What to include on a virtual assistant invoice</h2>
<ul>
<li><strong>Your name or business name</strong>, contact email and country.</li>
<li><strong>Client business name</strong> and the person who approves invoices.</li>
<li><strong>Billing period</strong>, such as 1–31 October 2026.</li>
<li><strong>Rate and currency</strong>: "$35.00 USD per hour."</li>
<li><strong>Hours by task category</strong>: inbox, calendar, customer support, social media, bookkeeping entry.</li>
<li><strong>Retainer and overage lines</strong>, if on a retainer.</li>
<li><strong>Reimbursable tools or purchases</strong>, at cost, only if agreed.</li>
<li><strong>Payment methods</strong> and any transfer fees the client is expected to cover.</li>
<li><strong>Due date</strong> and late-payment terms.</li>
</ul>

<h2>Worked example: retainer with overage hours</h2>
<p>A VA works for a US online store on a 20-hour monthly retainer at $35 per hour, billed in advance. Hours above 20 are billed at $40 in arrears on the next invoice. In October the VA worked 24.5 hours. This invoice, dated 1 November, bills November's retainer plus October's overage and one tool the client asked the VA to buy.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly retainer, November 2026 (20 hours reserved)</td><td>20 hrs</td><td>$35.00</td><td>$700.00</td></tr>
<tr><td>Overage, October 2026 (24.5 worked − 20 retainer)</td><td>4.5 hrs</td><td>$40.00</td><td>$180.00</td></tr>
<tr><td>Reimbursable: scheduling app seat, October (receipt attached)</td><td>1</td><td>$15.00</td><td>$15.00</td></tr>
<tr><td colspan="3"><strong>Total due 8 November 2026 (USD)</strong></td><td><strong>$895.00</strong></td></tr>
</tbody></table>
<p>The maths: 20 × $35 = $700; 4.5 × $40 = $180; plus $15 reimbursable = $895.</p>

<h3>The time-log summary for October</h3>
<table><thead><tr><th>Task category</th><th>Hours</th></tr></thead><tbody>
<tr><td>Customer support inbox</td><td>9.0</td></tr>
<tr><td>Order issues and returns</td><td>5.5</td></tr>
<tr><td>Calendar and meeting scheduling</td><td>3.0</td></tr>
<tr><td>Social media scheduling</td><td>4.0</td></tr>
<tr><td>Product listing updates</td><td>3.0</td></tr>
<tr><td><strong>Total October hours</strong></td><td><strong>24.5</strong></td></tr>
</tbody></table>
<p>Check: 9 + 5.5 + 3 + 4 + 3 = 24.5. Put this summary in the invoice notes or as an attachment, with the detailed log (date, task, start, end, duration) available on request. Clients rarely dispute hours they can see broken down by task.</p>

<h2>Hourly invoice tips for VAs</h2>
<p>Hourly billing is where most new VAs start, and it's the model clients question most. The fixes are simple and mostly about transparency.</p>
<ul>
<li><strong>Agree your billing increment</strong>, for example 15-minute or 6-minute increments, and stick to it.</li>
<li><strong>Bill on a fixed cycle.</strong> Weekly or every two weeks for new clients keeps the exposure small if they don't pay.</li>
<li><strong>Set a cap if the client is nervous.</strong> "Not to exceed 30 hours without written approval" builds trust.</li>
<li><strong>Don't round up silently.</strong> If you charge a minimum for small requests, say so in the contract.</li>
</ul>

<h2>Invoicing international clients</h2>
<p>Many VAs live in one country and work for clients in another. A few things to get right:</p>
<ul>
<li><strong>Currency.</strong> Invoice in the agreed currency and show the code (USD, GBP, AUD). Don't leave a client to guess whether "$" means US or Australian dollars.</li>
<li><strong>Transfer fees.</strong> Say who pays them. "Payable in full; sender bears transfer fees" avoids receiving short payments.</li>
<li><strong>Payment provider.</strong> Receiving accounts in the client's currency often cost less than international wires. Our comparison of <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> covers two popular options, including how their fees and receiving accounts differ.</li>
<li><strong>Tax forms.</strong> US clients may ask a non-US contractor for Form W-8BEN instead of a W-9 to document foreign status. A US-based VA gives a W-9.</li>
<li><strong>Local tax.</strong> You may need to register for or charge tax in your own country depending on your income and where your clients are. Check local rules.</li>
</ul>
<p>The full checklist is in our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>. Within the US, VA services are generally not subject to sales tax, but a handful of states tax some business or data services, so if you're US-based check your state; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps if you do need to add it.</p>

<h2>Per-task and project invoices</h2>
<p>Some VA work fits a fixed price better than a clock: setting up a new inbox filing system, migrating a contact list into a CRM, or building a set of email templates. Pricing per task rewards you for being fast and tells the client exactly what they'll pay. The catch is scope. Write down what "done" means before you start, then invoice against that definition.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Inbox cleanup and filing system setup (scope dated 3 Oct 2026)</td><td>1</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td>Canned-response templates for customer support</td><td>12</td><td>$15.00</td><td>$180.00</td></tr>
<tr><td>Contact list import and de-duplication, up to 2,000 records</td><td>1</td><td>$220.00</td><td>$220.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$850.00</strong></td></tr>
</tbody></table>
<p>The maths: $450 + (12 × $15 = $180) + $220 = $850. If the client adds a second inbox halfway through, that's a new line with a new price, not a favor.</p>

<h2>Tools, subscriptions and expenses</h2>
<p>VAs often end up paying for tools the client uses: a scheduling app seat, a stock photo, a design tool subscription. Decide early who owns the account. If the client owns it and pays directly, nothing goes on your invoice. If you pay and get reimbursed, list each item at cost with the receipt, under a separate "Reimbursable" line, as in the retainer example above. Avoid quietly building tool costs into your hourly rate; when the client cancels that tool, you'll want to stop charging for it, and a separate line makes that simple.</p>
<p>For your own tools that you use across all clients, such as your time tracker or password manager, treat them as business overhead and set your rates to cover them rather than billing them to anyone.</p>

<h2>Retainer rules to print on the invoice</h2>
<p>Most retainer disputes come down to three questions. Answer them in the notes on every retainer invoice:</p>
<ol>
<li><strong>Rollover:</strong> "Up to 3 unused hours roll into the following month; additional unused hours expire."</li>
<li><strong>Overage:</strong> "Hours above 20 are billed at $40/hour on the following invoice."</li>
<li><strong>Cancellation:</strong> "Either party may end the retainer with 30 days' written notice."</li>
</ol>

<h2>Common VA invoicing problems</h2>
<p>Most problems VAs run into aren't about the invoice layout. They come from terms that were never written down. These are the usual ones.</p>
<ul>
<li><strong>Scope drift.</strong> A client who hired you for inbox management starts asking for graphic design. Price new task types separately or move them to a higher rate.</li>
<li><strong>Late payers.</strong> Retainers in advance largely solve this. For hourly clients, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
<li><strong>Platform clients.</strong> If you found the client on a marketplace, follow the platform's invoicing rules; our <a href="/blog/fiverr-upwork-invoice">Fiverr and Upwork invoice guide</a> explains how.</li>
</ul>
<p>VAs who also provide bookkeeping or consulting can borrow structure from the <a href="/blog/consulting-invoice-template">consulting invoice template</a>.</p>

<h2>Weekly, biweekly or monthly invoicing?</h2>
<p>For a new hourly client, a shorter cycle is safer. Weekly or biweekly invoices keep each bill small, catch disagreements about hours early, and limit what you're owed if the client disappears. Once a client has paid reliably for a few months, monthly invoicing saves you both admin time. Retainer clients are simplest of all: one invoice at the start of each month for the retainer, with last month's overage on the same document. Whatever you choose, put the cycle and the due date (for example, seven days from the invoice date) in your contract so every invoice follows it.</p>

<h2>Next step</h2>
<p>Open the <a href="/invoice-generator?template=minimal">Minimal template in the generator</a>, add your rate and currency, create lines for retainer and overage, paste your time-log summary into the notes, and download the PDF. Your draft is saved in the browser, so next month you just change the dates and hours.</p>
`,
  },
  {
    slug: "daycare-invoice-template",
    title: "Daycare Invoice Template: Tuition, Fees & Tax Receipts",
    description:
      "A daycare invoice template guide: weekly or monthly tuition, late pick-up fees, sibling discounts and the year-end receipts parents need for Form 2441.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-a-daycare",
      "nanny-invoice-template",
      "dog-walking-invoice-template",
      "payment-receipt-template",
      "recurring-invoices-guide",
      "late-payment-fees",
    ],
    faqs: [
      {
        q: "What should a daycare invoice include?",
        a: "Include the provider's name, address and taxpayer identification number, the parent's name, each child's name, the care period, tuition, any fees such as registration or late pick-up, discounts, payments received and the due date. Showing the provider's TIN makes the invoice useful for the parent's tax records.",
      },
      {
        q: "What information do parents need from a daycare for taxes?",
        a: "To claim the child and dependent care credit on Form 2441, parents must report each care provider's name, address and taxpayer identification number, either an SSN or an EIN, plus the amount paid. Tax-exempt organizations such as many church-run centers can write 'Tax-Exempt' instead of a TIN.",
      },
      {
        q: "Can a home daycare provider use an EIN instead of an SSN?",
        a: "Yes. A sole proprietor running a home daycare can apply for an Employer Identification Number from the IRS at no cost and put that on invoices and receipts instead of their Social Security number, which is a sensible privacy step.",
      },
      {
        q: "Do daycares give a year-end tax statement?",
        a: "Many do, because parents need the total paid for the year. A year-end statement listing each payment, the total, and the provider's name, address and TIN is the easiest way to answer every parent's question in January.",
      },
      {
        q: "Can a daycare charge late pick-up fees?",
        a: "Generally yes, if the fee is in your written enrollment policy that parents signed. Charge it per minute or in blocks, record the actual pick-up time, and show it as a separate line on the next invoice.",
      },
      {
        q: "Can a daycare charge an enrollment deposit to hold a spot?",
        a: "Yes, many do, as long as it's in the enrollment agreement. Common versions are a deposit applied to the first or last month's tuition, or a nonrefundable fee that holds a place on the waitlist. Say whether it's refundable and when, issue an invoice or receipt for it, and show it as a credit when it's applied to tuition. Some states regulate childcare fees, so check your licensing agency's rules.",
      },
      {
        q: "What should I do if a family stops paying tuition?",
        a: "Follow your written policy consistently. Send a reminder soon after the due date, then a written notice with the amount owed, any late fee and the date care will be suspended if it isn't paid. Requiring tuition before the week or month begins limits how much can build up. If a subsidy program pays part, contact the program before ending care. Unpaid balances can go to small claims court if needed.",
      },
      {
        q: "Which daycare fees count toward the dependent care credit or an FSA?",
        a: "Generally, amounts paid for care so the parent can work count, including some indirect fees, such as registration fees, that must be paid to get care. Separately billed items like field trips, and education costs for kindergarten and above, may be treated differently. The IRS explains the rules in Publication 503. Itemizing tuition and fees separately on your invoices helps parents and their tax preparers, but leave the decision on what qualifies to them.",
      },
      {
        q: "Can I charge a fee for a returned check or failed payment?",
        a: "Usually, yes, if your enrollment agreement says so. Many providers pass on the bank's returned payment charge or set a flat returned payment fee, and some move families with repeated failed payments to card or cash. Many states cap returned check fees, so check your state's limit before choosing an amount. Show the fee on the next invoice with the date and the payment it relates to.",
      },
      {
        q: "Do home daycare providers pay tax on tuition income?",
        a: "Yes. Tuition and fees you receive are business income. In the US, a sole proprietor running a home daycare typically reports it on Schedule C and pays self-employment tax. You may be able to deduct part of your home costs based on how much of the home is used for care and for how long, using the method in IRS Publication 587. Keep every invoice and receipt, and consider a tax professional familiar with childcare.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A daycare invoice template should list the provider's name, address and EIN or SSN, the parent and each child, the care period (week or month), tuition, fees such as registration or late pick-up, discounts, payments received and the due date. Parents need the provider's name, address and taxpayer ID to claim the child and dependent care credit on IRS Form 2441.</p>

<p>Childcare billing is recurring, emotional and tax-sensitive all at once. Parents pay every week or month, they notice every late fee, and in January they all ask for the same tax paperwork. A clear daycare invoice template handles all three. This guide covers tuition billing, fees, sibling discounts, the tax information parents need, and two worked examples. Build yours in the <a href="/invoice-generator?template=sunset">invoice generator with the Sunset template</a>, which has a warm look that suits a childcare setting.</p>

<h2>What to put on a daycare invoice</h2>
<table><thead><tr><th>Field</th><th>Example</th><th>Why</th></tr></thead><tbody>
<tr><td>Provider name and address</td><td>Little Oaks Family Child Care, 22 Pine St</td><td>Required for the parent's Form 2441</td></tr>
<tr><td>Provider TIN</td><td>EIN 12-3456789</td><td>Parents must report it; an EIN protects your SSN</td></tr>
<tr><td>License number</td><td>State childcare license or registration</td><td>Builds trust; some subsidy programs require it</td></tr>
<tr><td>Parent or guardian</td><td>Name of the person paying</td><td>Matches the payment to the account</td></tr>
<tr><td>Child names</td><td>One line per child</td><td>Separates tuition when siblings attend</td></tr>
<tr><td>Care period</td><td>1–30 November 2026, or week of 2 November</td><td>Shows exactly what's being billed</td></tr>
<tr><td>Tuition and fees</td><td>Full-time toddler, registration, field trip</td><td>Itemized so parents can check</td></tr>
<tr><td>Payments and balance</td><td>Paid to date, balance due</td><td>Avoids double payments</td></tr>
<tr><td>Due date and methods</td><td>Due 1 November by bank transfer or card</td><td>Sets expectations</td></tr>
</tbody></table>

<h2>Weekly vs monthly tuition billing</h2>
<p>Most centers bill monthly; many home daycares bill weekly. Either works, as long as it matches your enrollment agreement and stays consistent.</p>
<ul>
<li><strong>Monthly tuition</strong> is simpler to administer and smooths cash flow, but parents may push back in short months. Set a flat monthly rate regardless of the number of days, and say so in your policy.</li>
<li><strong>Weekly tuition</strong> matches how many families budget and is easier to prorate for start dates. It does mean more invoices.</li>
<li><strong>Holidays and closures.</strong> State in the enrollment agreement whether tuition is charged for closure days and the provider's vacation weeks. The invoice should simply follow that policy.</li>
<li><strong>Absences.</strong> Most providers charge for enrolled spots whether or not the child attends, because the spot is reserved. Put that in writing.</li>
</ul>
<p>Since tuition repeats, a recurring routine helps. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to keep invoice numbers and dates consistent month to month.</p>

<h2>Worked example: monthly invoice for two siblings</h2>
<p>Two children at a center: a toddler at $1,280 per month and a preschooler at $1,150 per month, with a 10% sibling discount on the second child's tuition. This month also includes the annual registration fee, two late pick-ups at $1 per minute, and a field trip.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full-time tuition, toddler room: Maya, November 2026</td><td>1</td><td>$1,280.00</td><td>$1,280.00</td></tr>
<tr><td>Full-time tuition, preschool: Leo, November 2026</td><td>1</td><td>$1,150.00</td><td>$1,150.00</td></tr>
<tr><td>Sibling discount, 10% of Leo's tuition</td><td>1</td><td>−$115.00</td><td>−$115.00</td></tr>
<tr><td>Annual registration fee, 2026–27 (per family)</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Late pick-up: 14 Oct (15 min) and 22 Oct (10 min), $1/min after 6:00 p.m.</td><td>25 min</td><td>$1.00</td><td>$25.00</td></tr>
<tr><td>Field trip, pumpkin farm, 30 October: Leo</td><td>1</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td colspan="3"><strong>Total due 1 November 2026</strong></td><td><strong>$2,433.00</strong></td></tr>
</tbody></table>
<p>The maths: $1,280 + $1,150 = $2,430; minus the $115 discount = $2,315; plus $75 + $25 + $18 = $2,433. Keep each item on its own line, because parents (and their tax preparers) will want to see tuition separately from fees and activities when working out which amounts count as care expenses.</p>

<h2>Starting mid-month or mid-week</h2>
<p>A family that starts partway through a billing period should only pay for the part they're enrolled, unless your policy says otherwise. For weekly tuition of $310 and a Wednesday start, the child attends three of five days: $310 ÷ 5 = $62 per day, × 3 days = $186. Show the calculation in the line description ("Tuition, week of 2 Nov, prorated 3 of 5 days") so the parent can see it. If your policy charges a full first period regardless of start date, say so in the enrollment agreement before the family signs.</p>

<h2>Late pick-up fees and other charges</h2>
<p>Late pick-up fees exist to cover staff overtime and ratio requirements, not to make money, and parents accept them more readily when the policy is clear. Good practice:</p>
<ul>
<li>Put the fee and grace period in the enrollment agreement that parents sign.</li>
<li>Record the actual pick-up time and have the parent initial it if possible.</li>
<li>Bill it on the next regular invoice with the date and minutes, as in the example.</li>
<li>Apply it consistently. Waiving it for some families and not others causes far more trouble than the fee itself.</li>
</ul>
<p>Late payment of tuition is a separate matter. If you charge a late-payment fee, state it in your policy and on the invoice. Our guide to <a href="/blog/late-payment-fees">charging late payment fees</a> explains how to word it.</p>

<h2>Childcare tax receipts: what parents need for Form 2441</h2>
<p>Working parents in the US can often claim the child and dependent care credit, filed on <a href="https://www.irs.gov/forms-pubs/about-form-2441" target="_blank" rel="noopener noreferrer">IRS Form 2441</a>, and many also use a dependent care FSA through their employer. Either way, they must report each care provider's:</p>
<ul>
<li><strong>Name</strong></li>
<li><strong>Address</strong></li>
<li><strong>Taxpayer identification number</strong>: an SSN or EIN. Tax-exempt organizations report "Tax-Exempt" instead.</li>
<li><strong>Amount paid</strong> during the year</li>
</ul>
<p>Parents can collect this using IRS Form W-10, but the IRS also accepts other records such as a letterhead or invoice that shows the provider's name, address and TIN. That's why it pays to print your EIN on every invoice. A provider who doesn't supply a correct TIN when asked can face a penalty, so answer these requests promptly.</p>
<p>If you run a home daycare as a sole proprietor, apply for a free EIN from the IRS and use it on invoices instead of your Social Security number.</p>
<p>Credit amounts changed for 2026: 2025 legislation raised the top credit rate, and the dependent care FSA limit rose to $7,500 for many households, though employers must adopt the higher FSA limit in their plans. You don't need to explain any of this to parents, and you shouldn't give tax advice, but it does mean more families will ask for proper documentation. Rules change, so point parents to the current Form 2441 instructions or their tax preparer.</p>

<h3>Example year-end statement</h3>
<table><thead><tr><th>Item</th><th>Detail</th></tr></thead><tbody>
<tr><td>Provider</td><td>Little Oaks Family Child Care, 22 Pine St, Springfield</td></tr>
<tr><td>Provider EIN</td><td>12-3456789</td></tr>
<tr><td>Parent</td><td>Jordan Rivera</td></tr>
<tr><td>Children</td><td>Maya Rivera, Leo Rivera</td></tr>
<tr><td>Period</td><td>1 January–31 December 2026</td></tr>
<tr><td>Total paid for care</td><td>Sum of all payments received in 2026, with a month-by-month list attached</td></tr>
</tbody></table>
<p>Base the statement on payments actually received during the calendar year, not on invoices issued, and list fees separately so the parent's preparer can decide which amounts qualify. A <a href="/blog/payment-receipt-template">payment receipt</a> for each payment through the year makes the statement easy to assemble.</p>
<p>This is general information, not tax advice. Tax rules change, so providers and parents should confirm current requirements with the IRS or a tax professional.</p>

<h2>Subsidies, sales tax and other payers</h2>
<p>If part of a child's tuition is paid by a state childcare subsidy program or an employer, invoice each payer only for their share and show the parent's co-pay as its own line. Subsidy programs have their own billing forms and attendance rules, so follow those exactly. Childcare services are generally not subject to sales tax, but a few states tax some related items such as meals or retail goods sold separately; if you sell taxable items, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out the amount.</p>

<h2>Keeping daycare billing friendly and firm</h2>
<ul>
<li><strong>Bill before the period starts</strong>, so tuition is paid in advance, as most enrollment agreements require.</li>
<li><strong>Offer autopay or a payment link</strong> where your payment provider supports it. See <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a>.</li>
<li><strong>Send a short reminder</strong> one day after the due date, then follow your written policy.</li>
<li><strong>Keep records for years.</strong> Parents may be asked for documentation after they file, and our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers retention.</li>
</ul>
<p>Tutors and after-school programs bill in a similar way; the <a href="/blog/tutoring-invoice-template">tutoring invoice template</a> covers per-session and package billing.</p>

<h2>Set up your daycare invoice</h2>
<p>Open the <a href="/invoice-generator?template=sunset">Sunset template in the generator</a>, add your center's name, address, license number and EIN, create a line for each child's tuition, and add fees and discounts as separate lines. Save the draft in your browser, and each month you only change the dates and any extras.</p>
`,
  },
  {
    slug: "moving-company-invoice-template",
    title: "Moving Invoice Template: Estimates, Crews & Packing",
    description:
      "A moving invoice template guide: hourly crew rates, packing materials, binding vs non-binding estimates and FMCSA rules for interstate moves, with examples.",
    category: "industry-invoices",
    date: "2026-10-23",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-a-moving-company",
      "junk-removal-invoice-template",
      "invoice-vs-estimate",
      "deposit-invoice",
      "trucking-invoice-template",
    ],
    faqs: [
      {
        q: "What is the difference between a binding and a non-binding moving estimate?",
        a: "A binding estimate guarantees the total cost for the goods and services listed, so the customer pays that amount unless they add items or services. A non-binding estimate is an approximation, and the final charge is based on the actual weight or time and the mover's tariff.",
      },
      {
        q: "How much can an interstate mover charge above a non-binding estimate?",
        a: "Under federal rules, on a collect-on-delivery interstate move the customer cannot be required to pay more than 110% of the non-binding estimate at delivery. Any remaining balance is billed afterward. Charges for services the customer added after the bill of lading and for certain impracticable operations are handled separately.",
      },
      {
        q: "Do local moves follow the same rules as interstate moves?",
        a: "No. FMCSA's household goods rules apply to interstate moves. Moves within one state are regulated by that state, and some states have their own estimate, licensing and pricing rules, while others have very few.",
      },
      {
        q: "How do moving companies charge for local moves?",
        a: "Most local moves are billed hourly for a crew and truck, often with a minimum number of hours and a travel or truck fee, plus packing materials and charges for heavy or specialty items. Some movers offer flat-rate quotes after an in-home or virtual survey.",
      },
      {
        q: "Should a moving invoice include valuation coverage?",
        a: "For interstate moves, the valuation option the customer chose should appear on the paperwork. Federal rules provide full value protection and a lower-cost released value option limited to 60 cents per pound per article. Local valuation rules vary by state.",
      },
      {
        q: "Should tips for the moving crew go on the invoice?",
        a: "Keep tips separate from the moving charges. If the customer tips in cash, nothing changes on the invoice. If they add a tip by card, record it on the receipt or as a clearly labeled gratuity line after the invoice total, and pass it on to the crew. Don't build a mandatory crew gratuity into the bill unless you call it a service charge, because tips and service charges are treated differently for tax.",
      },
      {
        q: "What is the difference between a bill of lading and a moving invoice?",
        a: "On an interstate move, the bill of lading is the contract between you and the customer and the receipt for their goods. It records the services, the estimate type, the valuation choice and the delivery terms, and the customer signs it before loading. The invoice, or freight bill, is the demand for payment of the resulting charges. The two must match, so reference the bill of lading number on the invoice.",
      },
      {
        q: "How long does an interstate customer have to file a damage claim?",
        a: "Under federal rules, a customer generally has nine months from delivery to file a written claim for loss or damage. The mover must acknowledge it within 30 days and then pay, deny or make a firm settlement offer within 120 days. A claim is separate from the invoice, so the customer still owes the moving charges. Intrastate moves follow state rules. Check FMCSA's Protect Your Move guidance and your tariff for details.",
      },
      {
        q: "How do I invoice storage in transit?",
        a: "Storage in transit, often called SIT, is temporary storage between pickup and delivery when the new home isn't ready. Show it as its own section: the warehouse location, the weight or number of vaults, the dates in and out, the daily or monthly rate, and handling charges for moving goods into and out of storage. If storage runs past the agreed period, it may convert to permanent storage billed on a separate recurring invoice.",
      },
      {
        q: "When can I bill the rest if I collected 110% of a non-binding estimate at delivery?",
        a: "Not straight away. Under FMCSA rules for interstate moves, you can't bill the remaining charges until at least 30 days after delivery. Your follow-up invoice should show the original estimate, the actual charges, the amount collected at delivery and the deferred balance, with a due date that respects that wait. Confirm the exact timing in the current 49 CFR Part 375 and your tariff.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A moving invoice template should show the move date and addresses, the estimate type (binding or non-binding), crew size and hourly rate or weight-based charges, travel time, packing materials by item, specialty charges such as pianos or stairs, valuation coverage, deposits and the balance. For interstate moves, federal FMCSA rules control estimates and how much you can collect at delivery.</p>

<p>Moving invoices cause more complaints than almost any other consumer bill, mostly because the final number differs from the number the customer remembers. A clear moving invoice template that ties back to the estimate prevents most of that. This guide covers local hourly billing, packing materials, binding and non-binding estimates, federal rules for interstate moves, and worked examples. Build yours in the <a href="/invoice-generator?template=slate">invoice generator with the Slate template</a>.</p>

<h2>What to include on a moving invoice</h2>
<ul>
<li><strong>Your company name, contact details and registration numbers.</strong> Interstate movers need a USDOT number; many states require a state license or permit number for intrastate moves.</li>
<li><strong>Customer name</strong>, origin and destination addresses, and the move date.</li>
<li><strong>Estimate reference and type</strong>: binding, non-binding, or local hourly quote.</li>
<li><strong>Labor</strong>: crew size, hourly rate, start and finish times, and how travel time is billed.</li>
<li><strong>Truck and travel fees</strong>, or mileage for long-distance moves.</li>
<li><strong>Packing services and materials</strong>, itemized by box type.</li>
<li><strong>Accessorial charges</strong>: stairs, long carry, elevator, shuttle, heavy items, storage.</li>
<li><strong>Valuation coverage</strong> selected by the customer.</li>
<li><strong>Deposit received</strong>, balance and accepted payment methods.</li>
</ul>

<h2>Local moves: hourly crews and materials</h2>
<p>Local moves are usually billed by the hour for a crew and truck. The invoice should make the clock easy to follow. Show the start time, finish time, any unpaid breaks, and your travel-time rule (for example a flat travel fee, or a set amount of drive time added to the job). Most movers also set a minimum number of hours.</p>
<table><thead><tr><th>Charge</th><th>Typical unit</th><th>Tip</th></tr></thead><tbody>
<tr><td>Crew and truck</td><td>Per hour, by crew size</td><td>State the billing increment, e.g. 15 minutes</td></tr>
<tr><td>Travel or truck fee</td><td>Flat or per hour</td><td>Explain it on the quote; it's the most-questioned line</td></tr>
<tr><td>Packing labor</td><td>Per hour or per room</td><td>Separate from moving labor</td></tr>
<tr><td>Boxes and materials</td><td>Each</td><td>List each box type and count</td></tr>
<tr><td>Heavy or specialty items</td><td>Each</td><td>Pianos, safes, pool tables</td></tr>
<tr><td>Stairs, long carry, elevator</td><td>Per flight, per distance or flat</td><td>Agree in advance where possible</td></tr>
<tr><td>Storage</td><td>Per day or month</td><td>Bill storage periods on a recurring invoice</td></tr>
</tbody></table>

<h2>Worked example: local hourly move invoice</h2>
<p>A three-person crew with a truck at $165 per hour moves a two-bedroom apartment across town. The job ran 5.5 billable hours including the company's travel-time rule. The crew supplied boxes and moved a gun safe. The customer paid a $200 deposit when booking.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>3 movers + 26 ft truck, 8:00 a.m.–1:30 p.m.</td><td>5.5 hrs</td><td>$165.00</td><td>$907.50</td></tr>
<tr><td>Truck and fuel fee (flat, local)</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Medium moving boxes</td><td>15</td><td>$3.50</td><td>$52.50</td></tr>
<tr><td>Wardrobe boxes</td><td>4</td><td>$14.00</td><td>$56.00</td></tr>
<tr><td>Packing tape, rolls</td><td>2</td><td>$4.00</td><td>$8.00</td></tr>
<tr><td>Mattress bags</td><td>2</td><td>$12.00</td><td>$24.00</td></tr>
<tr><td>Heavy item: gun safe, ground floor to garage</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,273.00</strong></td></tr>
<tr><td colspan="3">Less deposit received</td><td>−$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due on completion</strong></td><td><strong>$1,073.00</strong></td></tr>
</tbody></table>
<p>The maths: 5.5 × $165 = $907.50; materials are $52.50 + $56 + $8 + $24 = $140.50; $907.50 + $75 + $140.50 + $150 = $1,273. Less the $200 deposit, $1,073 is due. Some states tax packing materials sold to the customer or tax intrastate moving services; check your state and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if needed.</p>

<h2>Binding vs non-binding estimates</h2>
<p>The estimate type determines what your final invoice can say. Our general guide to <a href="/blog/invoice-vs-estimate">invoices vs estimates</a> covers the basics; moving has its own vocabulary.</p>
<table><thead><tr><th></th><th>Binding estimate</th><th>Non-binding estimate</th></tr></thead><tbody>
<tr><td>What it promises</td><td>A guaranteed total for the listed goods and services</td><td>A reasonable approximation of the cost</td></tr>
<tr><td>Final charge</td><td>The estimate amount, unless items or services are added</td><td>Based on actual weight or time and the mover's tariff</td></tr>
<tr><td>Risk for the mover</td><td>Underestimating eats your margin</td><td>Limits on what you can collect at delivery (interstate)</td></tr>
<tr><td>Changes</td><td>Must be handled before loading, in writing</td><td>Added services can be billed separately</td></tr>
</tbody></table>
<p>Some movers also offer a "binding not-to-exceed" estimate, where the customer pays the lower of the estimate or the actual charges. Check how your tariff defines it and describe it precisely on the estimate.</p>

<h2>Interstate moves: FMCSA rules that affect your invoice</h2>
<p>Interstate household goods movers are regulated by the Federal Motor Carrier Safety Administration under 49 CFR Part 375. The <a href="https://www.fmcsa.dot.gov/protect-your-move" target="_blank" rel="noopener noreferrer">FMCSA Protect Your Move</a> site sets out the consumer side. Points that directly shape your invoicing:</p>
<ul>
<li><strong>Written estimates.</strong> Movers must give a written estimate, binding or non-binding, and generally base it on a physical survey of the goods (in person or virtual) unless the customer waives it under the rules.</li>
<li><strong>Binding estimates hold after loading.</strong> If the customer adds items, the binding estimate must be reaffirmed, revised in writing, or converted to non-binding before loading. Otherwise you can't collect more than the binding amount, apart from limited exceptions.</li>
<li><strong>The 110% rule.</strong> On a collect-on-delivery shipment under a non-binding estimate, the customer can't be required to pay more than 110% of the estimate at delivery, and you must release the goods once they pay that. The rest is billed afterward under the federal collection rules.</li>
<li><strong>Exceptions.</strong> Charges for services the customer requested after the bill of lading was issued, and certain impracticable operations charges (capped at a percentage of other charges due at delivery), are treated separately.</li>
<li><strong>Required documents.</strong> Customers must receive the "Your Rights and Responsibilities When You Move" booklet and the "Ready to Move" brochure (or links), along with your arbitration program information.</li>
<li><strong>Valuation.</strong> Federal rules provide full value protection and a released value option limited to 60 cents per pound per article. Record the customer's choice.</li>
</ul>
<p>These are federal rules for interstate moves only. Intrastate moves follow state law, which varies widely. Regulations are updated from time to time, so confirm details in the current 49 CFR Part 375 or with FMCSA, and treat this as general information, not legal advice.</p>

<h3>Worked example: the 110% rule in practice</h3>
<p>An interstate customer received a non-binding estimate of $4,800. The shipment weighed more than estimated, and the actual charges came to $5,650. At delivery, the most you can require is 110% of $4,800, which is $5,280. The remaining $370 ($5,650 − $5,280) is invoiced after delivery. Your final invoice should show the estimate, the actual charges, the amount collected at delivery and the deferred balance on separate lines, with the deferred balance's due date.</p>

<h2>Deposits and payment timing</h2>
<p>Local movers often take a small booking deposit and collect the balance on completion. If you take one, put your cancellation terms on the deposit invoice; the <a href="/blog/deposit-invoice">deposit invoice guide</a> shows the layout. For interstate moves, follow your tariff and the federal rules on what can be collected and when. Business relocations are usually billed on terms instead; see <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</p>
<p>Storage changes the timing too. If you hold a customer's goods between pickup and delivery, bill storage on its own invoice for each period, with the warehouse location, the number of vaults or the weight stored, and the dates covered. Keep the move itself and the storage account separate, so a storage balance never gets mixed up with what's owed for the move.</p>

<h2>Common moving invoice disputes</h2>
<ul>
<li><strong>Clock disputes.</strong> Write start and finish times on the invoice and have the customer sign the job sheet.</li>
<li><strong>Surprise materials.</strong> Count boxes as you use them and list each type.</li>
<li><strong>Damage claims.</strong> Keep claims separate from the invoice. A customer's damage claim doesn't change the amount owed for the move, but it should be handled promptly under your claims process.</li>
<li><strong>Holding goods hostage.</strong> Refusing to deliver until a customer pays more than the law allows is a serious violation on interstate moves. Know your limits.</li>
</ul>
<p>If you also haul freight for businesses, the <a href="/blog/trucking-invoice-template">trucking invoice template</a> covers bills of lading and rate confirmations. Real estate agents often refer movers, so the <a href="/blog/real-estate-commission-invoice">real estate commission invoice guide</a> is worth a look if you're considering referral arrangements, which carry their own licensing rules.</p>

<h2>Build your moving invoice</h2>
<p>Open the <a href="/invoice-generator?template=slate">Slate template in the generator</a>, enter the addresses, estimate type and crew details, list labor, materials and specialty items on separate lines, and subtract any deposit. Download the PDF, have the customer sign the job sheet, and send the invoice before the crew leaves the driveway. For collecting the balance on time, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>
`,
  },
];
