import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_Y: PostDraft[] = [
  {
    slug: "asphalt-paving-invoice-template",
    title: "Asphalt Paving Invoice Template (Free Example + Line Items)",
    description:
      "Asphalt paving invoice template with tonnage math, per square foot pricing, sealcoating, striping and mobilization lines, plus a worked driveway example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "concrete-invoice-template",
      "excavation-invoice-template",
      "contractor-invoice-template",
    ],
    faqs: [
      {
        q: "How do paving contractors usually price asphalt jobs?",
        a: "Most residential paving is quoted per square foot or as a lump sum built from a per square foot rate, while larger commercial and municipal work is often priced per ton of hot mix placed. Base work, excavation, mobilization and extras such as edging or drainage are usually listed separately. Whatever method you use, the invoice should repeat the same unit and rate the customer approved on the estimate so the two documents can be matched quickly.",
      },
      {
        q: "Should I charge a deposit before paving?",
        a: "Many paving contractors collect a deposit at signing, often to cover mobilization and the cost of ordering material from the plant, then bill the balance on completion. On bigger jobs a progress schedule is common, for example after base work and after paving. Check your state's rules first, because some states cap home improvement deposits for residential work or require specific contract language when you take money upfront.",
      },
      {
        q: "Do I charge sales tax on an asphalt paving invoice?",
        a: "It depends on the state. In many states a paved driveway or parking lot is a real property improvement, so the contractor pays sales or use tax on the asphalt and stone when buying them and does not charge tax on the finished job. Other states tax certain services such as sealcoating or striping separately. Ask your state revenue department or an accountant how your work is classified before adding tax lines.",
      },
      {
        q: "What is a mobilization fee in paving?",
        a: "A mobilization fee covers the cost of getting crews and heavy equipment such as a paver, rollers, a skid steer and dump trucks to the site and set up, plus demobilization when the job ends. Small jobs often carry a minimum mobilization charge because moving equipment costs nearly the same for a 400 square foot patch as for a large driveway. Show it as its own line so customers see why small jobs cost more per square foot.",
      },
      {
        q: "How do I invoice for extra base or soft spots found during the job?",
        a: "Write the condition into your contract before work starts, including the unit price for extra excavation and stone, for example per ton of aggregate or per square yard of undercut. When you find soft subgrade, photograph it, get the customer's written approval on a change order and then bill it as a separate line referencing that change order. Surprise charges without approval are the most common cause of disputed paving invoices.",
      },
      {
        q: "Can I bill for asphalt by the ton on a residential job?",
        a: "You can, but most homeowners find tonnage hard to check, so residential invoices usually show square footage and compacted thickness instead, with the tonnage noted for reference. If you do bill by the ton, keep the plant scale tickets and offer copies with the invoice. Commercial clients and public agencies frequently expect tonnage billing backed by tickets, so match the format the client's contract asks for.",
      },
      {
        q: "What payment terms are normal for paving contractors?",
        a: "Residential paving is commonly due on completion or within a few days, because the work is finished in a day or two and the contractor has already paid for material. Commercial and property management clients often expect net 30 terms, and public work follows the agency's payment schedule and any retainage rules. State your terms, late fee policy and accepted payment methods on both the estimate and the invoice.",
      },
      {
        q: "Should my invoice include a warranty for the paving work?",
        a: "Including a short warranty statement is good practice. Many contractors offer a one year workmanship warranty against defects such as settling or raveling caused by installation, while excluding damage from heavy vehicles, petroleum spills, tree roots or lack of sealcoating. Put the full terms in the contract and reference them on the invoice so the customer knows what is covered after paying.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An asphalt paving invoice bills a customer for paving, resurfacing or maintenance work. It lists the area in square feet or square yards, compacted thickness, tonnage of hot mix asphalt, base and excavation work, mobilization, extras such as sealcoating, crack filling and line striping, any deposit already paid and the balance due with payment terms.</p>

<p>Paving jobs move quickly, but invoices often lag behind, and vague ones invite disputes about square footage, thickness or extra base work. This guide explains how to build a clear asphalt paving invoice, how to calculate tonnage, which line items to include for driveways, parking lots and maintenance work, and how a complete invoice looks with real numbers. You can fill in every section with our <a href="/invoice-generator">free invoice generator</a> and download a PDF in a few minutes.</p>

<h2>What is an asphalt paving invoice?</h2>
<p>An asphalt paving invoice is the bill a paving contractor sends after installing, overlaying or maintaining an asphalt surface. Typical customers are homeowners, homeowners associations, property managers, churches, retailers and municipalities. The invoice confirms what was done (for example, removal of an old driveway and installation of 3 inches of compacted hot mix asphalt over a 6 inch stone base), how it was measured and what the customer owes.</p>
<p>Most paving work starts with an estimate. The invoice should mirror the approved estimate line by line, with any differences explained by a signed change order. If you are new to construction billing, the <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers the general rules, and our <a href="/blog/contractor-invoice-template">contractor invoice template</a> shows the base layout this paving version builds on.</p>

<h2>What should an asphalt paving invoice include?</h2>
<table><thead><tr><th>Section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Header</td><td>Business name, address, phone, contractor license number where your state requires it, invoice number and date</td></tr>
<tr><td>Customer and site</td><td>Customer name, billing address, job site address if different, PO or contract number</td></tr>
<tr><td>Scope summary</td><td>Type of work: new install, removal and replace, overlay (resurface), patching, sealcoating, striping</td></tr>
<tr><td>Measurements</td><td>Area in square feet or square yards, compacted thickness in inches, mix type (for example surface or base course)</td></tr>
<tr><td>Quantities</td><td>Tons of asphalt placed, tons of aggregate base, linear feet of crack fill, number of stalls or lines striped</td></tr>
<tr><td>Labor and equipment</td><td>Excavation, grading, compaction, milling, mobilization and demobilization</td></tr>
<tr><td>Extras and changes</td><td>Change orders, soft spot repairs, drainage, edging, permits, traffic control</td></tr>
<tr><td>Totals</td><td>Subtotal, tax if applicable, deposit received, balance due</td></tr>
<tr><td>Terms</td><td>Due date, late fee, accepted payment methods, warranty summary, care instructions</td></tr>
</tbody></table>
<p>Number every invoice in sequence. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a simple job-based format such as PAV-2026-118.</p>

<h2>How do you calculate asphalt tonnage for an invoice?</h2>
<p>Even if you price residential jobs per square foot, knowing the tonnage helps you check that your price covers material and lets you answer customers who ask how much asphalt went down. Compacted hot mix asphalt typically weighs about 145 pounds per cubic foot (mix designs vary, so use your plant's figure when you have it). The basic calculation is:</p>
<ol>
<li>Multiply length by width to get square feet.</li>
<li>Convert compacted thickness to feet (3 inches = 0.25 feet).</li>
<li>Multiply square feet by thickness in feet to get cubic feet.</li>
<li>Multiply cubic feet by 145 to get pounds.</li>
<li>Divide by 2,000 to get tons.</li>
</ol>
<p>Example: a driveway of 2,400 square feet at 3 inches compacted is 2,400 x 0.25 = 600 cubic feet. 600 x 145 = 87,000 pounds, or 43.5 tons. Many contractors add a small allowance for waste and edges when ordering, but the invoice should reflect what was placed, backed by plant scale tickets on tonnage-billed work.</p>

<h2>How much do paving contractors charge per square foot or ton?</h2>
<p>Paving prices swing with the price of liquid asphalt binder, fuel, distance from the plant, local labor rates and the condition of the existing surface, so there is no national price list. Rather than quoting a market figure that may be out of date, use your own costs: material per ton from your plant, crew cost per hour, equipment cost per day and overhead. The table below shows how common pricing units map to the work.</p>
<table><thead><tr><th>Work type</th><th>Common billing unit</th><th>Notes for the invoice</th></tr></thead><tbody>
<tr><td>New driveway or lot</td><td>Per square foot or lump sum</td><td>State thickness and base depth; note tonnage for reference</td></tr>
<tr><td>Commercial or public paving</td><td>Per ton placed</td><td>Attach or reference scale tickets; follow the contract's bid items</td></tr>
<tr><td>Overlay or resurfacing</td><td>Per square foot or per square yard</td><td>Show milling or tack coat as separate lines</td></tr>
<tr><td>Excavation and base</td><td>Per square yard or per ton of stone</td><td>List depth of excavation and base thickness</td></tr>
<tr><td>Patching and pothole repair</td><td>Per square foot with a minimum</td><td>A minimum charge covers mobilization on small jobs</td></tr>
<tr><td>Sealcoating</td><td>Per square foot</td><td>Note number of coats and any additives</td></tr>
<tr><td>Crack filling</td><td>Per linear foot or per pound of material</td><td>Hot pour rubberized filler is common</td></tr>
<tr><td>Line striping</td><td>Per stall, per linear foot or per stencil</td><td>List accessible stalls, arrows and stencils separately</td></tr>
</tbody></table>
<p>If the price of liquid asphalt jumps between estimate and job date, an escalation clause in your contract lets you pass on part of the increase. Many state transportation departments use asphalt binder price adjustments on public contracts, and private contractors can use a simpler clause tied to plant pricing. Whatever you agree, bill it on its own line with a short explanation.</p>

<h2>Line items for sealcoating, crack filling and striping</h2>
<p>Maintenance work is a steady income stream between paving seasons and deserves clear line items of its own.</p>
<h3>Sealcoating</h3>
<p>List the area, number of coats and product (asphalt emulsion or coal tar free sealer, plus any sand or additive). Include surface preparation such as power blowing, oil spot priming and edging if you charge for them. Add care instructions in the notes: how long to keep cars off and that the surface must stay dry while it cures.</p>
<h3>Crack filling and patching</h3>
<p>Crack fill is usually billed per linear foot. Patching is billed per square foot with a minimum, and the invoice should say whether it was an infrared repair, a skin patch or a full depth removal and replacement, because the durability and price are very different.</p>
<h3>Line striping and pavement markings</h3>
<p>For parking lots, list the number of standard stalls, accessible stalls, access aisles, arrows, stop bars, fire lane markings and stencils. Accessible parking layouts must follow the <a href="https://www.ada.gov/law-and-regs/design-standards/2010-stds/">2010 ADA Standards for Accessible Design</a> and any state rules, so note on the invoice that the layout was set to the plan the owner approved. Restriping an existing layout and laying out a new one are different jobs and should be priced differently.</p>

<h2>Example asphalt paving invoice</h2>
<p>Here is an illustrative residential remove and replace job. Prices are examples only, not market rates.</p>
<p><strong>Ridge Line Paving LLC</strong>, Invoice PAV-2026-118, dated October 20, 2026. Customer: Dana Whitfield, 42 Orchard Lane. Contract signed September 28, 2026. Terms: due within 7 days of invoice.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Mobilization and demobilization (paver, rollers, skid steer, trucks)</td><td>1</td><td>job</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Remove and haul away existing asphalt driveway</td><td>2,400</td><td>sq ft</td><td>$1.10</td><td>$2,640.00</td></tr>
<tr><td>Grade and compact subgrade, add 4 in crushed stone base</td><td>2,400</td><td>sq ft</td><td>$1.40</td><td>$3,360.00</td></tr>
<tr><td>Install hot mix asphalt, 3 in compacted (approx. 43.5 tons)</td><td>2,400</td><td>sq ft</td><td>$3.25</td><td>$7,800.00</td></tr>
<tr><td>Change order CO-1: undercut soft area and add stone</td><td>12</td><td>tons</td><td>$48.00</td><td>$576.00</td></tr>
<tr><td>Hand tamped edge and apron tie-in at street</td><td>1</td><td>job</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Driveway permit (pass-through at cost)</td><td>1</td><td>each</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$15,451.00</strong></td></tr>
<tr><td colspan="4">Sales tax (not charged: real property improvement in this state, tax paid on materials)</td><td>$0.00</td></tr>
<tr><td colspan="4">Less deposit received September 28, 2026</td><td>-$4,500.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$10,951.00</strong></td></tr>
</tbody></table>
<p>Notes: Keep vehicles off for 72 hours and avoid sharp turns while stationary for the first few weeks. One year workmanship warranty per contract section 9. First sealcoat recommended after the asphalt has cured, usually 6 to 12 months.</p>
<p>The change order line references a signed document, the permit is shown at cost, and the deposit is subtracted clearly. For the mechanics of upfront payments, see our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>.</p>

<h2>How to create an asphalt paving invoice step by step</h2>
<ol>
<li><strong>Start from the approved estimate.</strong> Copy the scope, quantities and rates so both documents match.</li>
<li><strong>Measure the finished work.</strong> Confirm actual square footage and, on tonnage jobs, total the scale tickets.</li>
<li><strong>Add approved changes only.</strong> Bill extra base, drainage or added area with the change order number. Our article on <a href="/blog/scope-creep-change-order">change orders and scope creep</a> explains how to document them.</li>
<li><strong>List pass-through costs.</strong> Permits, traffic control or police details, and dump fees if they were excluded from your price.</li>
<li><strong>Apply tax correctly.</strong> Follow your state's rules for real property contractors. The <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> guide is a starting point.</li>
<li><strong>Subtract deposits and progress payments.</strong> Show dates and amounts.</li>
<li><strong>Add terms and care notes.</strong> Due date, late fee, payment methods, warranty and cure time.</li>
<li><strong>Send promptly with photos.</strong> Before and after photos reduce questions. Our <a href="/invoice-generator">free invoice generator</a> creates the PDF you can email the same day.</li>
</ol>

<h2>Billing commercial and public paving work</h2>
<p>Commercial clients and property managers often require a certificate of insurance, a W-9 before the first payment and invoices that reference their purchase order. The IRS explains the form on its <a href="https://www.irs.gov/forms-pubs/about-form-w-9">About Form W-9</a> page. Larger jobs may be billed in stages using <a href="/blog/progress-billing">progress billing</a>, and owners may hold back a percentage until completion, covered in our guide to <a href="/blog/retainage-invoice">retainage invoices</a>.</p>
<p>Lien rights matter too. If you are a subcontractor or the client is slow to pay, your state's mechanics lien deadlines start running from your last day of work. Read our overview of the <a href="/blog/mechanics-lien">mechanics lien</a> process and be ready to exchange a <a href="/blog/lien-waiver">lien waiver</a> when you get paid, which many commercial clients require before releasing funds.</p>

<h2>Deposits, payment terms and getting paid on paving jobs</h2>
<p>Paving has a cash flow problem built in: the contractor pays the asphalt plant, fuel and crew within days, while the customer may not pay for weeks. Clear terms on the estimate, contract and invoice close that gap.</p>
<h3>Residential driveways</h3>
<p>For homeowners, a deposit at signing plus the balance on completion is the most common structure. Some contractors collect a second payment when the base is finished on larger jobs. Before setting the deposit percentage, check your state's home improvement rules: several states limit how much a contractor may collect before work starts, require a written contract with a cancellation notice, or require a license number on all paperwork. Present the final invoice in person or email it the same afternoon, and offer card, ACH and check so the customer can pay before the crew leaves the area.</p>
<h3>Commercial and HOA clients</h3>
<p>Property managers and associations usually pay on net 30 terms after approving the invoice internally. Ask at the start who approves invoices, whether a purchase order number is required and where invoices should be sent. A missing PO number is one of the most common reasons a commercial paving invoice sits unpaid. Attach photos, scale tickets and a site map for striping jobs, because the person approving payment often has not seen the work.</p>
<h3>Late payments</h3>
<p>Put your late fee and due date on every invoice, follow up a few days before the due date, and send a polite reminder the day after it passes. If an account becomes seriously overdue, act before your lien deadline runs out rather than after. Keep a simple record of each contact so you can show what was agreed if the matter escalates.</p>
<table><thead><tr><th>Client type</th><th>Typical structure</th><th>Paperwork to include</th></tr></thead><tbody>
<tr><td>Homeowner</td><td>Deposit, balance on completion</td><td>Signed contract, change orders, care instructions</td></tr>
<tr><td>HOA or property manager</td><td>Net 30 after approval</td><td>PO number, photos, W-9, certificate of insurance</td></tr>
<tr><td>General contractor (as a sub)</td><td>Monthly pay applications, retainage</td><td>Schedule of values, lien waivers</td></tr>
<tr><td>Public agency</td><td>Per contract and pay estimates</td><td>Scale tickets, certified payroll where required</td></tr>
</tbody></table>

<h2>Common mistakes on paving invoices</h2>
<ul>
<li><strong>No thickness stated.</strong> "Pave driveway" invites arguments. Always state compacted thickness and base depth.</li>
<li><strong>Billing extras without approval.</strong> Soft spots and drainage fixes need a signed change order before work continues.</li>
<li><strong>Mixing units.</strong> Quoting per square foot and invoicing per ton confuses customers. Stay with the unit on the estimate.</li>
<li><strong>Hiding mobilization.</strong> Small jobs look overpriced unless mobilization is visible as its own line.</li>
<li><strong>Charging tax incorrectly.</strong> Real property rules differ by state, and mistakes can mean paying the tax yourself later.</li>
<li><strong>Missing care instructions.</strong> Damage from early traffic often turns into a warranty claim. Put cure times on the invoice.</li>
<li><strong>Late invoicing.</strong> Send the invoice the day the job is finished, while the result is fresh and the customer is pleased.</li>
</ul>

<h2>Related templates for paving and site contractors</h2>
<p>Paving often sits beside other site work. If you also pour flatwork, the <a href="/blog/concrete-invoice-template">concrete invoice template</a> covers per yard and per square foot billing, and the <a href="/blog/excavation-invoice-template">excavation invoice template</a> handles grading, hauling and equipment hours. Contractors who take on teardown work can use the new <a href="/blog/demolition-invoice-template">demolition invoice template</a>, and the same layout works if you bill materials and crew time separately.</p>

<p>A clear asphalt paving invoice states the area, thickness, tonnage, approved changes and payment terms so customers can match it to the estimate and pay without calling you first. Build yours with our free invoice generator: it needs no sign-up, builds the PDF in your browser and lets you download it right away. You can also browse ready-made layouts on our <a href="/invoice-templates">invoice templates</a> page.</p>
`,
  },
  {
    slug: "siding-installation-invoice-template",
    title: "Siding Invoice Template: Free Example for Installers",
    description:
      "Siding invoice template for installers: per square pricing, tear-off, house wrap, trim and materials lines, waste factor tips and a full worked example invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "roofing-invoice-template",
      "remodeling-invoice-template",
      "contractor-invoice-template",
    ],
    faqs: [
      {
        q: "What is a square in siding?",
        a: "A square is 100 square feet of wall coverage. Siding materials and installation labor are commonly priced per square, so a house needing 2,200 square feet of siding after window and door openings are deducted is 22 squares. Contractors usually order extra material to cover cuts and waste, but the labor line on the invoice is normally based on the measured squares installed, not the material ordered.",
      },
      {
        q: "How much waste should I add when ordering siding?",
        a: "Many installers add about 10 percent for simple walls and more for houses with many gables, dormers or angles, but the right figure depends on the product and the house. The waste allowance affects your material cost and should be built into your rate or your material line. Avoid listing waste as a separate surprise charge on the invoice unless the estimate already showed it that way.",
      },
      {
        q: "Should I separate materials and labor on a siding invoice?",
        a: "Separating them is usually clearer and can matter for sales tax, insurance claims and manufacturer warranty registration. Homeowners can see what they paid for siding panels, trim and wrap versus installation. Some contractors prefer one price per square that bundles both, which is fine if the estimate did the same. Whichever you choose, list the product brand, line and color so the customer has a record for future repairs.",
      },
      {
        q: "Do I need to follow lead-safe rules when removing old siding?",
        a: "If the home or child-occupied facility was built before 1978 and the work disturbs painted surfaces above the minimum area thresholds, the EPA Renovation, Repair and Painting Rule generally requires an EPA or state certified firm and lead-safe work practices. That covers many tear-off jobs. You must also give the owner the Renovate Right pamphlet before work starts and keep records, so note compliance in your paperwork.",
      },
      {
        q: "How do I bill for rotten sheathing found during a siding job?",
        a: "Put a unit price for sheathing replacement in your contract before work starts, such as a rate per sheet of OSB or plywood including labor. When tear-off reveals rot, photograph it, get the customer's written approval and bill the actual number of sheets on a separate change order line. Customers accept extra costs far more easily when they agreed to the unit price in advance and can see the photos.",
      },
      {
        q: "Can a siding invoice be used for an insurance claim?",
        a: "Yes. After hail or wind damage, the insurer may ask for an itemized invoice that matches the approved scope of loss. List quantities in squares, separate tear-off, wrap, trim and accessories, and reference the claim number. If the insurer pays you directly, the homeowner may need to sign a direction to pay, and any deductible is still owed by the homeowner.",
      },
      {
        q: "What payment schedule works for siding jobs?",
        a: "A common structure is a deposit at signing to order materials, a progress payment when materials are delivered or tear-off is complete, and the balance at final walkthrough. Smaller jobs may be deposit and balance only. State law may limit the deposit you can take on home improvement contracts, so check your state's rules before setting the percentage.",
      },
      {
        q: "Should I include warranty information on the invoice?",
        a: "Yes. Note your workmanship warranty period and that the manufacturer's product warranty applies according to its own terms, which may require registration or installation by a certified installer. Including the product name, color and install date on the invoice gives the homeowner what they need to register the warranty and to order matching material for future repairs.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A siding invoice template is a bill for installing or replacing exterior siding. It lists the area in squares (100 square feet each), the siding product and color, tear-off and disposal, house wrap, trim, soffit and fascia, corners and accessories, labor, approved change orders such as sheathing repair, the deposit paid and the balance due.</p>

<p>Siding jobs combine large material orders with labor that can change once the old cladding comes off. A clear invoice protects your margin and helps homeowners match the bill to the estimate, file insurance claims and register product warranties. This guide covers the line items siding contractors use, how to measure and price by the square, rules that affect tear-off work, and a full worked example. You can build the invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a siding invoice?</h2>
<p>A siding invoice is the final or progress bill a siding contractor sends for exterior wall cladding work. It applies to vinyl siding, fiber cement lap and panel products, engineered wood, metal and wood siding, plus related exterior trim. Customers include homeowners, builders, property managers and insurance-funded storm repair jobs.</p>
<p>The invoice confirms the scope delivered: how many squares were installed, whether old siding was removed, what was installed underneath (house wrap, foam board, flashing) and which trim pieces were replaced. It works alongside your estimate and contract. For general construction billing rules see our <a href="/blog/construction-invoice-guide">construction invoice guide</a>, and for exterior trade neighbors look at the <a href="/blog/roofing-invoice-template">roofing invoice template</a>, since many companies sell roofing and siding together.</p>

<h2>What should a siding invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, address, phone, contractor or home improvement license number where required</td></tr>
<tr><td>Invoice details</td><td>Invoice number, invoice date, due date, contract or estimate number</td></tr>
<tr><td>Customer and site</td><td>Owner name, job address, insurance claim number if applicable</td></tr>
<tr><td>Product information</td><td>Manufacturer, product line, profile, color, exposure (for example 7 inch lap)</td></tr>
<tr><td>Quantities</td><td>Squares installed, linear feet of trim, soffit and fascia, number of corners and mounting blocks</td></tr>
<tr><td>Prep work</td><td>Tear-off and disposal, sheathing repair, house wrap, flashing</td></tr>
<tr><td>Change orders</td><td>Numbered and approved additions with unit prices</td></tr>
<tr><td>Payments</td><td>Deposit, progress payments, balance due</td></tr>
<tr><td>Terms</td><td>Payment methods, late fee, workmanship warranty, product warranty note</td></tr>
</tbody></table>

<h2>How to measure siding in squares</h2>
<p>The square is the standard unit for siding labor and materials. One square equals 100 square feet. To get the installed squares:</p>
<ol>
<li>Measure each wall's width and height and multiply to get square feet.</li>
<li>For gables, multiply the base by the height and divide by two.</li>
<li>Add all wall and gable areas together.</li>
<li>Subtract large openings such as garage doors and big windows (many contractors ignore small openings because cutting around them takes extra time and material).</li>
<li>Divide by 100 to get squares.</li>
</ol>
<p>Example: four walls total 2,050 square feet, two gables add 240 square feet, and openings deducted total 190 square feet. That is 2,100 square feet, or 21 squares installed. If you order 10 percent extra, you buy about 23 squares of material, but the labor line still reads 21 squares.</p>
<p>Trim is measured separately in linear feet: soffit, fascia, J-channel, window and door casing, frieze boards and starter strip. Outside and inside corners are usually counted per piece or per linear foot.</p>

<h2>How much do siding contractors charge?</h2>
<p>Installed prices vary widely by product, region, house height and complexity. Vinyl is usually the lowest-cost option, fiber cement and engineered wood sit in the middle to upper range and need more labor, and specialty products cost more again. Rather than relying on a national average, price from your supplier costs per square, your crew's production rate and overhead. The structure below shows typical billing units.</p>
<table><thead><tr><th>Item</th><th>Common unit</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>Siding installation (labor)</td><td>Per square</td><td>Note product type, since fiber cement installs slower than vinyl</td></tr>
<tr><td>Siding material</td><td>Per square or lump sum</td><td>Name brand, line and color for warranty and repairs</td></tr>
<tr><td>Tear-off and disposal</td><td>Per square</td><td>Include dumpster or haul fees here or as a separate line</td></tr>
<tr><td>House wrap or weather barrier</td><td>Per square</td><td>List product and taping of seams</td></tr>
<tr><td>Insulated backer or foam board</td><td>Per square</td><td>State thickness</td></tr>
<tr><td>Trim, soffit and fascia</td><td>Per linear foot</td><td>Split materials (aluminum, PVC, fiber cement) if priced differently</td></tr>
<tr><td>Window and door wraps</td><td>Per opening</td><td>Count openings wrapped</td></tr>
<tr><td>Sheathing replacement</td><td>Per sheet</td><td>Bill only with a signed change order</td></tr>
<tr><td>Height or steep access</td><td>Per square or lump sum</td><td>Third story walls often need staging or lifts</td></tr>
</tbody></table>
<p>If you sell a bundled price per square including materials, that is fine, but list the product details anyway. For help splitting costs, see our guide to <a href="/blog/labor-and-materials-invoice">labor and materials invoices</a> and to <a href="/blog/materials-markup">materials markup</a>.</p>

<h2>Tear-off, lead paint and disposal rules</h2>
<p>Removing old siding is where most extra costs appear: rotten sheathing, missing flashing, insect damage or multiple old layers. Write unit prices for these into the contract so you can bill them cleanly.</p>
<p>On homes built before 1978, removing or cutting painted siding and trim can disturb lead-based paint. The <a href="https://www.epa.gov/lead/renovation-repair-and-painting-program">EPA Renovation, Repair and Painting (RRP) Program</a> generally requires certified firms, trained renovators and lead-safe practices for this work, plus giving the owner the Renovate Right pamphlet before starting. Some states run their own programs. If your crew follows RRP containment and cleaning, the added cost can be priced as its own line so the customer sees why the job costs more.</p>
<p>Disposal costs depend on weight and local landfill fees. Asbestos cement siding, found on some older homes, needs licensed abatement in most places and should never be torn off by a standard crew; exclude it from your scope unless you hold the right licenses.</p>

<h2>Example siding installation invoice</h2>
<p>This illustrative example uses made-up prices for a two story vinyl replacement job.</p>
<p><strong>Summit Exteriors Inc.</strong>, Invoice SID-2026-064, dated October 22, 2026. Customer: Marcus and Lena Ortiz, 15 Birch Court. Product: insulated vinyl lap siding, double 4.5 inch profile, color Pewter. Terms: balance due within 10 days.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Tear-off existing siding, haul and dispose</td><td>21</td><td>squares</td><td>$95.00</td><td>$1,995.00</td></tr>
<tr><td>House wrap installed with taped seams</td><td>21</td><td>squares</td><td>$45.00</td><td>$945.00</td></tr>
<tr><td>Insulated vinyl siding, materials</td><td>23</td><td>squares</td><td>$260.00</td><td>$5,980.00</td></tr>
<tr><td>Siding installation labor</td><td>21</td><td>squares</td><td>$210.00</td><td>$4,410.00</td></tr>
<tr><td>Aluminum soffit and fascia, installed</td><td>160</td><td>lin ft</td><td>$14.00</td><td>$2,240.00</td></tr>
<tr><td>Window and door aluminum wraps</td><td>14</td><td>openings</td><td>$85.00</td><td>$1,190.00</td></tr>
<tr><td>Outside and inside corners, J-channel and starter</td><td>1</td><td>lot</td><td>$680.00</td><td>$680.00</td></tr>
<tr><td>Change order CO-1: replace rotten OSB sheathing</td><td>6</td><td>sheets</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td>Building permit (at cost)</td><td>1</td><td>each</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$18,130.00</strong></td></tr>
<tr><td colspan="4">Less deposit paid September 30, 2026</td><td>-$5,500.00</td></tr>
<tr><td colspan="4">Less progress payment on delivery, October 8, 2026</td><td>-$6,000.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$6,630.00</strong></td></tr>
</tbody></table>
<p>Notes: Two year workmanship warranty per contract. Manufacturer warranty applies per product terms; registration information enclosed. Leftover full pieces left in garage for future repairs.</p>
<p>The material quantity (23 squares) is higher than the labor quantity (21 squares) because material includes waste. Showing both avoids the question "why did I pay for 23 squares?" Sales tax treatment of materials on real property jobs depends on your state, so check before adding a tax line.</p>

<h2>How to create a siding invoice in 8 steps</h2>
<ol>
<li>Open the signed estimate and copy product details and unit rates.</li>
<li>Record final measured squares and linear feet after installation.</li>
<li>Add tear-off, wrap and accessories exactly as quoted.</li>
<li>Add change orders with their numbers and approval dates. See <a href="/blog/scope-creep-change-order">how to handle change orders</a>.</li>
<li>List permits and dumpster fees at cost if excluded from your price.</li>
<li>Subtract the deposit and any progress payments. Our <a href="/blog/progress-billing">progress billing guide</a> explains staged invoices.</li>
<li>Add terms, warranty notes and product registration details.</li>
<li>Generate a numbered PDF with the <a href="/invoice-generator">free invoice generator</a> and send it at the final walkthrough.</li>
</ol>

<h2>Invoicing siding jobs paid by insurance</h2>
<p>After hail or wind storms, many siding jobs are funded by homeowners insurance. The insurer's adjuster writes a scope of loss, often using estimating software with line items for removal, installation, wrap and trim. Your invoice should follow that scope closely, and anything extra needs a supplement request with photos. The homeowner is still responsible for their deductible. Our new guide on <a href="/blog/how-to-bill-insurance-companies-as-a-contractor">how to bill insurance companies as a contractor</a> walks through direction to pay forms, supplements and depreciation holdbacks.</p>
<p>Matching siding is a frequent issue: if the original product is discontinued, the adjuster may approve more walls than were damaged. Note the approved scope on the invoice so it is clear why the whole elevation was replaced.</p>

<h2>Billing siding repairs vs full replacements</h2>
<p>Not every siding job is a whole house. Storm damage, a fallen branch or a failed section behind a gutter often calls for a repair, and repairs need a different invoice structure.</p>
<ul>
<li><strong>Use a minimum charge.</strong> Driving out, setting ladders and cutting in a few panels takes nearly as long as a half day of installation, so many contractors set a minimum job charge for repairs.</li>
<li><strong>Bill time and materials when scope is unknown.</strong> If you cannot see what is behind the damaged area, quote an hourly rate plus materials and explain this on the estimate.</li>
<li><strong>Record color and profile matching.</strong> If the original product is discontinued and you used the closest available match, say so on the invoice so the customer cannot later claim you promised an exact match.</li>
<li><strong>Note salvaged material.</strong> If you reused panels from a less visible wall to get a match, describe that swap and the replacement used on the hidden wall.</li>
</ul>
<p>Full replacements, by contrast, are priced per square with a detailed scope and payment schedule. The table compares the two.</p>
<table><thead><tr><th>Factor</th><th>Repair invoice</th><th>Full replacement invoice</th></tr></thead><tbody>
<tr><td>Pricing</td><td>Minimum charge, hourly or per piece</td><td>Per square plus trim and accessories</td></tr>
<tr><td>Payments</td><td>Usually paid on completion</td><td>Deposit, progress payment, final balance</td></tr>
<tr><td>Documentation</td><td>Photos, matching notes</td><td>Contract, permit, product and warranty details</td></tr>
<tr><td>Typical customer</td><td>Homeowner or insurer for small claims</td><td>Homeowner, builder or larger insurance claims</td></tr>
</tbody></table>
<p>A typical replacement payment schedule is a deposit to order materials, a progress payment at material delivery or tear-off, and the balance at the final walkthrough. Put the schedule in the contract, then show each payment received on the final invoice so the balance is easy to verify. Keep a polite reminder email ready for balances that run late, and put a firm due date on every invoice.</p>

<h2>Common siding invoice mistakes</h2>
<ul>
<li><strong>No product details.</strong> Without brand, line and color, the homeowner cannot order matching pieces or register the warranty.</li>
<li><strong>Charging waste as labor.</strong> Labor should follow installed squares, not ordered material.</li>
<li><strong>Unapproved rot repairs.</strong> Bill sheathing only with a signed change order and photos.</li>
<li><strong>Ignoring RRP rules on older homes.</strong> Fines can be far larger than the job's profit.</li>
<li><strong>Wrong deposit amounts.</strong> Some states cap home improvement deposits. Check before setting terms.</li>
<li><strong>Vague trim lines.</strong> "Trim work" should become linear feet of soffit, fascia and wraps.</li>
<li><strong>Forgetting lien paperwork.</strong> If you bought materials on account, your supplier may also have lien rights. A <a href="/blog/lien-waiver">lien waiver</a> on final payment reassures the owner.</li>
</ul>

<h2>Other exterior and remodeling templates</h2>
<p>Siding contractors often bid related work. Use the <a href="/blog/remodeling-invoice-template">remodeling invoice template</a> for larger renovations, the <a href="/blog/painting-invoice-template">painting invoice template</a> for repaint jobs, and the new <a href="/blog/insulation-invoice-template">insulation invoice template</a> if you add exterior foam or attic upgrades. If you do decks too, see the <a href="/blog/deck-building-invoice-template">deck building invoice template</a>.</p>

<p>A good siding invoice states squares installed, product details, prep work, approved changes and every payment received, so the customer can pay, file a claim or register a warranty without back and forth. Create yours in our free invoice generator: it is free, needs no sign-up and downloads a PDF built right in your browser. For more layouts, browse the <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "insulation-invoice-template",
    title: "Insulation Invoice Template: Free Example + R-Value Rules",
    description:
      "Insulation invoice template for blown-in, batt and spray foam jobs, with FTC R-value receipt rules, the 2026 status of the 25C credit and a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "hvac-invoice-template",
      "contractor-invoice-template",
      "siding-installation-invoice-template",
    ],
    faqs: [
      {
        q: "Can homeowners still claim the 25C tax credit for insulation installed in 2026?",
        a: "No. The energy efficient home improvement credit under Section 25C was ended by the 2025 tax law, often called the One Big Beautiful Bill Act, for property placed in service after December 31, 2025. The IRS says the credit covers improvements made through December 31, 2025. Insulation finished in 2025 can still be claimed on the 2025 return using Form 5695, including an amended return if it was missed.",
      },
      {
        q: "What does the FTC R-value Rule require installers to put on paper?",
        a: "The FTC's R-value Rule requires home insulation installers to give customers a receipt or contract showing the type and thickness of insulation installed, the area covered and the R-value. For loose-fill insulation, the paperwork must also show the number of bags used. Many installers simply put these details on the invoice, which satisfies the customer's need for a record and supports rebate applications.",
      },
      {
        q: "How is insulation usually priced?",
        a: "Most insulation work is priced per square foot of area covered at a target R-value, such as blowing attic insulation to R-49 over 1,200 square feet. Spray foam is often priced per board foot, which is one square foot at one inch thick. Removal of old insulation, air sealing, baffles and access work are commonly billed separately. Your invoice should state the unit and the R-value so the price can be compared to the estimate.",
      },
      {
        q: "Should I separate labor and materials on an insulation invoice?",
        a: "It is good practice. Utility and state rebate programs often ask for an itemized invoice showing materials, labor and the R-value achieved. When the 25C credit was available, only material costs counted for insulation, so homeowners needed the split. Even now, a clear breakdown makes rebate paperwork easier and shows customers what they paid for.",
      },
      {
        q: "Are there still rebates for insulation in 2026?",
        a: "Possibly, depending on where the customer lives. Many electric and gas utilities run weatherization or insulation rebate programs, and some states operate home energy rebate programs funded by the federal government. Rules, funding and contractor requirements change often, so check the utility's or state energy office's current program page before promising a rebate, and keep a copy of the program's invoice requirements.",
      },
      {
        q: "Do I charge sales tax on insulation work?",
        a: "Sales tax depends on your state and whether the job is treated as a real property improvement. In many states the contractor pays tax when buying the insulation and does not add tax to the customer's bill, while other states tax certain services or materials sold separately. Check with your state revenue agency or an accountant, and apply the same rule consistently across jobs.",
      },
      {
        q: "What R-value should attic insulation reach?",
        a: "Recommended levels depend on climate zone. ENERGY STAR guidance suggests attic levels ranging from about R-30 in the warmest zones up to R-49 or R-60 in colder areas, and local building codes set minimums for new construction and some retrofits. State both the existing R-value you found and the final R-value you installed on the invoice so the customer and any rebate program can see the improvement.",
      },
      {
        q: "How do I invoice for removing old insulation?",
        a: "Removal is normally a separate line priced per square foot or as a lump sum, plus disposal. If you find vermiculite that may contain asbestos, stop work in that area, tell the customer and refer them to a qualified tester or abatement contractor rather than disturbing it. Bill only for removal work actually done and approved, and note any areas left untouched for safety reasons.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An insulation invoice bills a customer for installing or upgrading insulation. It should state the insulation type (blown-in, batt or spray foam), the area covered, the installed thickness and R-value, the number of bags for loose-fill, air sealing and removal work, labor and materials, payments received and the balance due. Under the FTC R-value Rule, installers must give customers this information in writing.</p>

<p>Insulation invoices carry more than a price. Homeowners use them to prove what was installed, apply for utility rebates and sell their homes, and federal rules require installers to put certain facts on paper. This guide explains what an insulation invoice needs, how to price blown-in, batt and spray foam work, where the federal 25C tax credit stands in 2026, and shows a full worked example you can copy into our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is an insulation invoice?</h2>
<p>An insulation invoice is the bill an insulation contractor, weatherization company, HVAC company or general contractor sends after installing thermal insulation in attics, walls, floors, crawl spaces or basements. It confirms the materials, quantities and performance (R-value) delivered and the amount due.</p>
<p>Insulation is often sold alongside other energy work, so it may appear on a combined bill with air sealing, duct sealing or HVAC upgrades. If you also install heating and cooling equipment, our <a href="/blog/hvac-invoice-template">HVAC invoice template</a> covers equipment lines, and the <a href="/blog/contractor-invoice-template">contractor invoice template</a> provides the basic layout for any trade.</p>

<h2>What must an insulation invoice include? (FTC R-value Rule)</h2>
<p>The Federal Trade Commission's <a href="https://www.ftc.gov/legal-library/browse/rules/r-value-rule">R-value Rule</a> covers home insulation sold and installed in the United States. Among other things, it requires installers to give customers a contract or receipt showing key facts about the insulation installed. Putting them on the invoice is the simplest way to comply:</p>
<ul>
<li>The type of insulation (for example, fiberglass loose-fill, cellulose, mineral wool batts, open cell spray foam)</li>
<li>The installed thickness</li>
<li>The coverage area in square feet</li>
<li>The R-value of the insulation installed</li>
<li>For loose-fill (blown-in) insulation, the number of bags used</li>
</ul>
<p>Manufacturers publish coverage charts that show how many bags are needed to reach a given R-value over 1,000 square feet. Recording the bag count lets the customer check that the attic actually reached the promised R-value instead of just being fluffed up to the right depth. Read the full rule for current requirements, including the separate rules for sellers and manufacturers.</p>
<table><thead><tr><th>Invoice section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, address, license or registration number, phone</td></tr>
<tr><td>Customer and site</td><td>Name, job address, utility account number if a rebate is involved</td></tr>
<tr><td>Before condition</td><td>Existing insulation type, depth and approximate R-value</td></tr>
<tr><td>Work performed</td><td>Area, product, installed thickness, final R-value, bag count for loose-fill</td></tr>
<tr><td>Prep work</td><td>Air sealing, baffles, dams around hatches, removal of old material</td></tr>
<tr><td>Pricing</td><td>Materials and labor lines, rebate credits if applied at point of sale</td></tr>
<tr><td>Payment</td><td>Deposit, balance due, due date, accepted methods</td></tr>
</tbody></table>

<h2>How much does insulation cost per square foot?</h2>
<p>Prices depend on material, access, the R-value target and region. Rather than quote a national figure that may be stale, build your rates from material cost per bag or set, installed labor hours and overhead. The table shows the units contractors commonly use.</p>
<table><thead><tr><th>Insulation type</th><th>Typical billing unit</th><th>Key details for the invoice</th></tr></thead><tbody>
<tr><td>Blown-in (loose-fill) fiberglass or cellulose</td><td>Per square foot at target R-value</td><td>Bags used, settled thickness, R-value</td></tr>
<tr><td>Fiberglass or mineral wool batts</td><td>Per square foot</td><td>Batt R-value, face (kraft or unfaced), framing size</td></tr>
<tr><td>Open cell spray foam</td><td>Per board foot or per square foot at thickness</td><td>Thickness, R-value, ignition or thermal barrier if applied</td></tr>
<tr><td>Closed cell spray foam</td><td>Per board foot</td><td>Thickness, R-value, areas sprayed</td></tr>
<tr><td>Dense-pack wall insulation</td><td>Per square foot of wall</td><td>Holes drilled and plugged, patching scope</td></tr>
<tr><td>Rigid foam board</td><td>Per square foot or per sheet</td><td>Thickness, R-value, taping and fastening</td></tr>
<tr><td>Removal of old insulation</td><td>Per square foot or lump sum</td><td>Method (vacuum), disposal</td></tr>
<tr><td>Air sealing</td><td>Lump sum or per hour</td><td>Areas sealed, blower door results if tested</td></tr>
</tbody></table>
<p>A board foot equals one square foot at one inch thick, so 800 square feet of closed cell foam at 2 inches is 1,600 board feet. Spell this out on the invoice so customers can compare bids.</p>

<h2>Recommended R-values and why they belong on the invoice</h2>
<p>R-value measures resistance to heat flow; higher is better. Recommended attic levels depend on climate zone. <a href="https://www.energystar.gov/saveathome/seal_insulate/identify-problems-you-want-fix/diy-checks-inspections/insulation-r-values">ENERGY STAR's recommended insulation levels</a> range from about R-30 in the warmest parts of the country to R-49 or R-60 in colder zones for uninsulated attics, with lower add-on targets where some insulation already exists. Local codes may set minimums too.</p>
<p>Writing "existing R-11 (about 3.5 inches), final R-49" on the invoice shows the upgrade clearly. It helps with rebate claims, home sales and energy audits, and protects you if the customer later questions the job.</p>

<h2>Is the 25C energy efficient home improvement credit available in 2026?</h2>
<p>No, not for new work. The 2025 federal tax law (Public Law 119-21, widely called the One Big Beautiful Bill Act) ended the Section 25C energy efficient home improvement credit for property placed in service after December 31, 2025. The IRS <a href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit">energy efficient home improvement credit page</a> states that the credit applies to improvements made through December 31, 2025.</p>
<p>What this means for insulation contractors in late 2026:</p>
<ul>
<li><strong>Jobs completed in 2025:</strong> homeowners can still claim the credit on their 2025 return using Form 5695 (or by amending it). The credit was 30 percent of qualifying costs, within an annual limit of $1,200 for building envelope items like insulation. Only the cost of insulation and air sealing materials counted, not installation labor, and insulation was exempt from the qualified manufacturer identification number requirement that applied to other products in 2025. Customers may ask you for an itemized copy of a 2025 invoice for this purpose.</li>
<li><strong>Jobs completed in 2026 or later:</strong> do not tell customers they can claim a federal tax credit for home insulation. Remove any old "tax credit eligible" wording from your quote and invoice templates.</li>
</ul>
<p>Other incentives may still exist. Many utilities run insulation and weatherization rebates, and some states run home energy rebate programs funded by the federal government with their own contractor rules and invoice requirements. Funding and terms change, so confirm the current program before quoting a rebate amount. This section is general information, not tax advice; customers should check with a tax professional about their own situation.</p>

<h2>Example insulation invoice</h2>
<p>An illustrative attic upgrade with air sealing, using example prices.</p>
<p><strong>Warm Shield Insulation LLC</strong>, Invoice INS-2026-211, dated October 24, 2026. Customer: Priya Shah, 908 Cedar Ridge Drive. Terms: due on receipt.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Air seal attic floor: top plates, plumbing and wiring penetrations, chase openings</td><td>1</td><td>job</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Install rafter baffles at eaves</td><td>36</td><td>each</td><td>$9.00</td><td>$324.00</td></tr>
<tr><td>Build insulation dam and weatherstrip attic hatch</td><td>1</td><td>each</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Blown-in fiberglass, materials: 34 bags to reach R-49 over 1,200 sq ft per manufacturer chart</td><td>34</td><td>bags</td><td>$38.00</td><td>$1,292.00</td></tr>
<tr><td>Blowing labor and equipment, 1,200 sq ft, existing R-11 raised to R-49 (installed thickness approx. 15 in)</td><td>1,200</td><td>sq ft</td><td>$0.55</td><td>$660.00</td></tr>
<tr><td>Utility rebate applied at point of sale (program ref. on file)</td><td>1</td><td>credit</td><td>-$300.00</td><td>-$300.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$2,766.00</strong></td></tr>
<tr><td colspan="4">Sales tax (not charged: tax paid on materials as real property contractor)</td><td>$0.00</td></tr>
<tr><td colspan="4">Less deposit received</td><td>-$800.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$1,966.00</strong></td></tr>
</tbody></table>
<p>Insulation details (FTC R-value Rule): type: loose-fill fiberglass; coverage area: 1,200 sq ft; installed thickness: approx. 15 in; R-value: R-49; bags used: 34. Attic card posted near hatch.</p>
<p>The bag count, thickness, coverage area and R-value appear right on the invoice. The rebate is a negative line, which keeps the math transparent. Thicknesses and bags per R-value differ by product, so always use the chart for the product you installed.</p>

<h2>How to fill out an insulation invoice step by step</h2>
<ol>
<li><strong>Record the before condition</strong> with photos and depth measurements.</li>
<li><strong>List prep work</strong>: air sealing, baffles, hatch dams, recessed light covers rated for contact with insulation.</li>
<li><strong>Enter material quantities</strong>: bags, batts or board feet, with product name.</li>
<li><strong>Enter labor</strong> by square foot, board foot or hours, matching the estimate.</li>
<li><strong>Add the R-value Rule details</strong> in a clear block: type, thickness, area, R-value, bag count.</li>
<li><strong>Apply rebates</strong> only if your program allows point of sale discounts, and reference the program.</li>
<li><strong>Subtract deposits</strong> and show the balance due. See our <a href="/blog/deposit-invoice">deposit invoice guide</a>.</li>
<li><strong>Number and send</strong> using the <a href="/tools/invoice-number-generator">invoice number generator</a> and the <a href="/invoice-generator">free invoice generator</a>.</li>
</ol>

<h2>Billing builders, landlords and rebate programs</h2>
<p>Not every insulation customer is a homeowner upgrading an attic. Each customer type expects slightly different paperwork.</p>
<h3>Builders and general contractors</h3>
<p>New construction insulation is usually billed per house or per phase: walls before drywall, then the attic blow after drywall. Builders typically expect net 30 terms, a purchase order or job number on every invoice, and an insulation certificate for the building inspector. Many local codes require a certificate posted in the attic or near the electrical panel listing R-values for each component; mention on the invoice that it was posted. As a subcontractor, also expect lien waiver requests when you are paid.</p>
<h3>Landlords and property managers</h3>
<p>Rental owners often need invoices per unit or per building for their accounting. Split multi-unit jobs by address, or provide one invoice with a clear per unit breakdown. Business owners treat improvements and repairs differently for tax purposes, so a clear description of the work helps their accountant.</p>
<h3>Utility and state rebate programs</h3>
<p>Programs often have stricter rules than customers. Common requirements include enrollment as a participating contractor, pre-approval before work, before and after photos, a combustion safety test after air sealing, and an invoice showing the pre-existing and final R-values. Some pay you directly and leave the customer a reduced balance; others reimburse the customer. Write down which model applies so your invoice shows the right balance due.</p>
<table><thead><tr><th>Customer</th><th>Billing unit</th><th>Extra paperwork</th></tr></thead><tbody>
<tr><td>Homeowner</td><td>Per job or per square foot</td><td>R-value Rule details, photos</td></tr>
<tr><td>Builder</td><td>Per house or per phase</td><td>PO number, insulation certificate, lien waiver</td></tr>
<tr><td>Landlord</td><td>Per unit or per building</td><td>Address breakdown</td></tr>
<tr><td>Rebate program</td><td>Per program rules</td><td>Before and after R-values, test results, program forms</td></tr>
</tbody></table>

<h2>Common mistakes on insulation invoices</h2>
<ul>
<li><strong>No R-value or bag count.</strong> This misses FTC requirements and weakens rebate claims.</li>
<li><strong>Promising a 2026 federal tax credit.</strong> The 25C credit ended for property placed in service after 2025.</li>
<li><strong>Lumping everything into one line.</strong> Rebate programs often need separate material, labor and air sealing costs. Our guide to <a href="/blog/itemized-invoice">itemized invoices</a> shows how to break it down.</li>
<li><strong>Billing removal that wasn't approved.</strong> Removal of old or contaminated insulation should be agreed in writing first, ideally as a <a href="/blog/scope-creep-change-order">change order</a>.</li>
<li><strong>Ignoring vermiculite.</strong> Possible asbestos containing vermiculite should not be disturbed; note it and refer the customer to a specialist.</li>
<li><strong>Wrong sales tax treatment.</strong> Check whether your state treats insulation as a real property improvement.</li>
</ul>

<h2>Insulation as part of a bigger project</h2>
<p>Insulation often comes bundled with exterior or remodeling work. When a <a href="/blog/siding-installation-invoice-template">siding installation</a> adds rigid foam, list the foam as its own line with thickness and R-value. For whole-home renovations, the <a href="/blog/remodeling-invoice-template">remodeling invoice template</a> handles multi-trade billing, and the guide on <a href="/blog/labor-and-materials-invoice">labor and materials invoices</a> explains how to split costs. Contractors moving into EV work can also see our new <a href="/blog/ev-charger-installation-invoice-template">EV charger installation invoice template</a>.</p>

<p>A complete insulation invoice records the product, area, thickness, R-value and bag count alongside prices and payments, giving your customer proof of the upgrade and you a clean paper trail. Create one now in our free invoice generator: no sign-up is needed, and it builds a PDF in your browser that you can download and send immediately.</p>
`,
  },
  {
    slug: "ev-charger-installation-invoice-template",
    title: "EV Charger Installation Invoice Template (Free + 30C Status)",
    description:
      "EV charger installation invoice template for Level 2 installs: charger, circuit, panel upgrade and permit lines, the 30C credit's 2026 status and an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "electrician-invoice-template",
      "solar-installation-invoice-template",
      "contractor-invoice-template",
    ],
    faqs: [
      {
        q: "Is the federal EV charger tax credit still available in late 2026?",
        a: "Not for new installations. Under the 2025 tax law, the Section 30C alternative fuel vehicle refueling property credit applies only to property placed in service by June 30, 2026. The IRS page on the credit lists that end date for both individuals and businesses. A charger installed and working on or before June 30, 2026 in an eligible census tract can still be claimed on the 2026 return with Form 8911.",
      },
      {
        q: "How much was the 30C credit for a home charger?",
        a: "For individuals, the credit was 30 percent of the cost of qualified refueling property, capped at $1,000 per item, for chargers installed at a main home located in an eligible census tract. Eligible tracts are low-income or non-urban areas listed by the IRS and Treasury. Business property could qualify for up to $100,000 per item, with the full 30 percent rate requiring prevailing wage and apprenticeship rules to be met.",
      },
      {
        q: "What information should an EV charger invoice include for tax or rebate purposes?",
        a: "Include the charger make, model and serial number, the date the charger was installed and placed in service, the full installation address, and a breakdown of hardware, labor, materials, panel work and permit costs. Programs and tax preparers often need the date in service and the cost split. Keep the permit number and final inspection date on the invoice or attached to it.",
      },
      {
        q: "Do I need a permit to install a Level 2 charger?",
        a: "In most US jurisdictions, yes. Installing a new 240 volt circuit for a Level 2 charger is electrical work that usually requires a permit and inspection, and many places require a licensed electrician. Utility rebate programs commonly ask for proof of a closed permit. List the permit fee on the invoice, at cost or with a handling charge if your contract says so.",
      },
      {
        q: "Should I bill a panel upgrade separately?",
        a: "Yes. A panel or service upgrade is a separate scope that can cost far more than the charger installation itself, so show it as its own line or a separate change order with the old and new amperage, for example 100 amp to 200 amp. Utility coordination, meter work and any load management device should also be itemized so the customer understands why the total rose.",
      },
      {
        q: "Is a NEMA 14-50 outlet or a hardwired charger better for the invoice?",
        a: "It depends on the charger, the customer's needs and local code. Hardwired installs allow higher charging power on some units and avoid outlet wear, while a 14-50 outlet lets a customer swap chargers more easily. Either way, the invoice should state the circuit breaker size, wire size and length, and whether a GFCI device was required, so the work can be checked against the permit.",
      },
      {
        q: "Do I charge sales tax on EV charger installations?",
        a: "Many states tax the sale of the charger hardware when the contractor sells it to the customer, but treatment of labor and installed equipment varies, and some states treat hardwired installs as real property improvements. Check your state's rules. If the customer bought the charger themselves, your invoice covers labor, materials and permits only, and you should say so on the invoice.",
      },
      {
        q: "Can businesses still claim a credit for commercial chargers?",
        a: "Businesses face the same June 30, 2026 placed in service deadline under Section 30C, so commercial chargers installed after that date do not qualify. Commercial charging projects completed by that date in an eligible census tract may still qualify, subject to prevailing wage and apprenticeship rules for the higher rate. Business owners should confirm details with a tax professional using IRS guidance.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An EV charger installation invoice bills a customer for installing electric vehicle charging equipment, usually a Level 2 charger on a 240 volt circuit. It lists the charger make and model, the dedicated circuit, wire and conduit, breaker size, any panel upgrade or load management device, permit and inspection fees, labor, payments received and the balance due, plus the date the charger was placed in service.</p>

<p>EV charger installs look simple on paper but vary enormously in practice: a 10 foot run next to the panel is a short job, while a 90 foot run through a finished basement with a service upgrade is a different project. Clear invoices show customers what drove the price and give them the records utilities, landlords and tax preparers ask for. This guide covers every line item, explains where the federal 30C credit stands after June 30, 2026, and walks through a worked example you can build in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is an EV charger installation invoice?</h2>
<p>An EV charger installation invoice is the bill an electrician or EV installation company issues after installing a home or commercial charging station. It documents the equipment, the electrical work, the permit and the date the charger was energized. Typical customers include homeowners, landlords and HOAs, small businesses adding workplace charging, and fleets.</p>
<p>Because the work is electrical, it usually builds on a standard electrician's bill. Our <a href="/blog/electrician-invoice-template">electrician invoice template</a> covers the basics, while this guide adds the EV-specific details. Companies that also install panels can compare the <a href="/blog/solar-installation-invoice-template">solar installation invoice template</a>.</p>

<h2>What should an EV charger installation invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, electrical contractor license number, address, phone</td></tr>
<tr><td>Customer and site</td><td>Customer name, installation address (main home or business location)</td></tr>
<tr><td>Equipment</td><td>Charger make, model, serial number, rated amperage, who supplied it (contractor or customer)</td></tr>
<tr><td>Circuit details</td><td>Breaker size, wire gauge and type, run length, conduit, outlet type or hardwired, GFCI if required</td></tr>
<tr><td>Panel work</td><td>Panel or service upgrade, subpanel, load calculation, load management device</td></tr>
<tr><td>Permits</td><td>Permit number, fee, inspection date and result</td></tr>
<tr><td>Dates</td><td>Installation date and date placed in service (energized and working)</td></tr>
<tr><td>Totals</td><td>Subtotal, tax if applicable, rebates, deposit, balance due</td></tr>
<tr><td>Terms</td><td>Due date, payment methods, workmanship warranty, manufacturer warranty note</td></tr>
</tbody></table>

<h2>How do you price a Level 2 charger installation?</h2>
<p>Install costs depend on distance from the panel, panel capacity, wall and floor construction, trenching for detached garages or parking lots, and local permit fees. Rather than quoting a national average, many installers use a base price that covers a short, simple run and add per foot and per item charges for anything beyond it.</p>
<table><thead><tr><th>Line item</th><th>Common billing method</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>Base installation</td><td>Flat fee for a standard install (for example up to 25 ft from panel)</td><td>Define what the base covers in your estimate</td></tr>
<tr><td>Additional circuit run</td><td>Per foot beyond the base</td><td>Wire size and conduit type</td></tr>
<tr><td>Charger hardware</td><td>Per unit</td><td>Make, model, serial; omit if customer-supplied</td></tr>
<tr><td>Breaker, outlet, disconnect</td><td>Per item</td><td>Breaker amperage, NEMA 14-50 or hardwired, GFCI</td></tr>
<tr><td>Trenching or surface conduit</td><td>Per foot</td><td>Depth, conduit type, restoration of surfaces</td></tr>
<tr><td>Panel or service upgrade</td><td>Lump sum or change order</td><td>Old and new amperage, utility coordination</td></tr>
<tr><td>Load management device</td><td>Per unit plus labor</td><td>Model and setting</td></tr>
<tr><td>Permit and inspection</td><td>At cost or cost plus handling</td><td>Permit number</td></tr>
<tr><td>Drywall patch or core drilling</td><td>Per item or hourly</td><td>Whether painting is included</td></tr>
</tbody></table>
<p>Circuit sizing follows the National Electrical Code and your local amendments. EV chargers are treated as continuous loads, so a charger set to draw 48 amps typically needs a 60 amp circuit, and a 40 amp charger a 50 amp circuit. Writing the charger setting and breaker size on the invoice shows the work matches the permit and helps future electricians.</p>

<h2>Is the 30C EV charger tax credit available in 2026?</h2>
<p>Only for chargers placed in service by June 30, 2026. The 2025 tax law (Public Law 119-21, often called the One Big Beautiful Bill Act) moved up the end of the Section 30C alternative fuel vehicle refueling property credit. The <a href="https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit">IRS page on the credit</a> now lists property bought and placed in service at a main home from January 1, 2023 to June 30, 2026, and the same window applies to business property.</p>
<table><thead><tr><th>Situation</th><th>Credit status (as of October 2026)</th></tr></thead><tbody>
<tr><td>Home charger placed in service January 1 to June 30, 2026, in an eligible census tract</td><td>Can be claimed on the 2026 return: 30 percent of cost, up to $1,000 per item, using Form 8911</td></tr>
<tr><td>Home charger placed in service after June 30, 2026</td><td>Not eligible for the federal credit</td></tr>
<tr><td>Business charger placed in service by June 30, 2026, in an eligible tract</td><td>May qualify, up to $100,000 per item; the 30 percent rate requires prevailing wage and apprenticeship rules (6 percent base rate otherwise)</td></tr>
<tr><td>Any charger outside an eligible census tract</td><td>Not eligible; tracts must be low-income or non-urban areas on the IRS list</td></tr>
</tbody></table>
<p>For invoicing, the practical lessons are:</p>
<ul>
<li>Stop advertising a federal tax credit on installs completed now. Update estimate and invoice templates that still mention it.</li>
<li>Customers who installed before July 1, 2026 may ask for an itemized invoice showing the cost of the charger and installation and the date placed in service. Keep those records ready.</li>
<li>State, local and utility incentives may still be available. Many utilities offer rebates on qualifying chargers or make-ready wiring, often requiring an approved contractor, a specific charger list and proof of a closed permit.</li>
</ul>
<p>This is general information, not tax advice. Customers should confirm their eligibility with a tax professional.</p>

<h2>Example EV charger installation invoice</h2>
<p>An illustrative install in an attached garage with a panel upgrade. Prices are examples, not market rates.</p>
<p><strong>BrightVolt Electric LLC</strong> (Electrical Contractor License on file), Invoice EV-2026-087, dated October 21, 2026. Customer: Jordan Kim, 77 Lakeview Terrace. Installed October 16, 2026; inspection passed and placed in service October 20, 2026. Terms: net 10.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Level 2 charger, 48 A hardwired, model and serial noted below</td><td>1</td><td>each</td><td>$649.00</td><td>$649.00</td></tr>
<tr><td>Base installation: 60 A, 240 V dedicated circuit, up to 25 ft</td><td>1</td><td>job</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Additional circuit run, 6 AWG copper in EMT conduit</td><td>30</td><td>ft</td><td>$14.00</td><td>$420.00</td></tr>
<tr><td>Change order CO-1: service upgrade 100 A to 200 A, new panel, utility coordination</td><td>1</td><td>job</td><td>$2,900.00</td><td>$2,900.00</td></tr>
<tr><td>Electrical permit and inspection (at cost)</td><td>1</td><td>each</td><td>$165.00</td><td>$165.00</td></tr>
<tr><td>Drywall patch at panel location (paint by owner)</td><td>1</td><td>each</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$4,904.00</strong></td></tr>
<tr><td colspan="4">Sales tax on charger hardware (illustrative 6%)</td><td>$38.94</td></tr>
<tr><td colspan="4">Less deposit received October 2, 2026</td><td>-$1,500.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$3,442.94</strong></td></tr>
</tbody></table>
<p>Equipment: charger model and serial number recorded on the job sheet. Charger set to 48 A on 60 A breaker. Permit number and final inspection date listed on the attached permit card. Workmanship warranty one year; charger covered by manufacturer warranty per its terms.</p>
<p>Because this install was placed in service after June 30, 2026, the invoice does not mention a federal credit. If a local utility rebate applies, attach the program form or show the rebate as a credit line if paid at point of sale. Check your state's sales tax rules before copying the tax line; you can estimate amounts with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>How to create an EV charger invoice step by step</h2>
<ol>
<li><strong>Confirm who supplied the charger.</strong> Customer-supplied units mean no hardware line and no tax on hardware.</li>
<li><strong>Record equipment details</strong>: make, model, serial, amperage setting.</li>
<li><strong>Measure the final run</strong> and bill per foot beyond your base allowance.</li>
<li><strong>Add panel work</strong> with a signed change order if it wasn't in the original quote. See our article on <a href="/blog/scope-creep-change-order">change orders</a>.</li>
<li><strong>Add permit details</strong> and the final inspection date.</li>
<li><strong>Note the placed in service date</strong>, which matters for incentives and warranties.</li>
<li><strong>Subtract deposits and rebates</strong>, then show the balance due. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers upfront payments.</li>
<li><strong>Generate and send the PDF</strong> from the <a href="/invoice-generator">free invoice generator</a> with a numbered reference.</li>
</ol>

<h2>What drives the price of an EV charger install?</h2>
<p>Customers often compare an installer's total with the price of the charger alone and are surprised by the difference. Itemizing the factors below on your estimate, then on the invoice, explains the gap.</p>
<ol>
<li><strong>Panel capacity.</strong> A load calculation shows whether the existing service can carry a new continuous load. If not, the options are a service upgrade, a lower charger setting or a load management device that shares capacity with other appliances.</li>
<li><strong>Distance and route.</strong> Each foot of heavy gauge copper wire and conduit adds material and labor, and routes through finished walls, ceilings or concrete take longer.</li>
<li><strong>Location of the charger.</strong> Outdoor installs need weather rated equipment and sometimes trenching to a driveway post or detached garage.</li>
<li><strong>Permit and inspection.</strong> Fees and inspection wait times vary widely by city.</li>
<li><strong>Utility involvement.</strong> Service upgrades require coordination with the utility for disconnects, meter work or a new service drop, which can add both cost and weeks of delay.</li>
<li><strong>Charger features.</strong> Networked units with app control, power sharing between two chargers or commercial payment features cost more and take longer to commission.</li>
</ol>
<p>A short site survey before quoting, either in person or by asking the customer for photos of the panel, the panel label and the route, prevents most invoice disputes. Write survey findings into the estimate, then let the invoice point back to them. When customers want a second charger later, a well documented first invoice also shows how much spare capacity is left.</p>
<p>For multi-unit buildings, note which unit or parking space each charger serves and whether it is on a house meter or a tenant's meter, since that controls who pays for electricity and who owns the equipment.</p>

<h2>Commercial, multifamily and fleet charging invoices</h2>
<p>Commercial projects are billed more like construction jobs. Expect purchase orders, insurance certificates, schedules of values and <a href="/blog/progress-billing">progress billing</a> by milestone: design and permitting, trenching and conduit, equipment set, commissioning. Networked chargers often add recurring software or network fees, which are better billed on a separate recurring invoice than mixed into the installation bill. Owners may also hold <a href="/blog/retainage-invoice">retainage</a> until commissioning is complete.</p>
<p>If you work as a subcontractor to a general contractor, use the <a href="/blog/construction-subcontractor-invoice-template">construction subcontractor invoice template</a> and expect to provide a <a href="/blog/lien-waiver">lien waiver</a> with each payment application.</p>

<h2>Common mistakes on EV charger invoices</h2>
<ul>
<li><strong>Promising a federal credit for new installs.</strong> The 30C credit ended for property placed in service after June 30, 2026.</li>
<li><strong>No placed in service date.</strong> Incentive programs and warranty claims depend on it.</li>
<li><strong>Burying the panel upgrade.</strong> A service upgrade needs its own approved line; customers dispute surprise totals.</li>
<li><strong>Missing serial numbers.</strong> Utilities and manufacturers often require them.</li>
<li><strong>No permit details.</strong> Rebate programs and home buyers may ask for proof of a closed permit.</li>
<li><strong>Taxing everything or nothing.</strong> Sales tax on hardware and labor varies by state.</li>
<li><strong>Undefined base price.</strong> If your base covers 25 feet, say so in the estimate and the invoice.</li>
</ul>

<h2>Related templates for electrical and energy contractors</h2>
<p>EV installers often offer related upgrades. Use the new <a href="/blog/insulation-invoice-template">insulation invoice template</a> for weatherization work, the <a href="/blog/hvac-invoice-template">HVAC invoice template</a> for heat pumps, and the <a href="/blog/time-and-materials-invoice">time and materials invoice</a> guide for troubleshooting calls. For a general foundation, see <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>.</p>

<p>An EV charger installation invoice should record the equipment, circuit, panel work, permit and placed in service date along with prices and payments, so customers have everything they need for rebates, resale and warranty claims. Make yours in our free invoice generator: it needs no sign-up, builds the PDF in your browser and is ready to download in minutes.</p>
`,
  },
  {
    slug: "sprinkler-irrigation-invoice-template",
    title: "Irrigation Invoice Template: Sprinkler Repair + Install",
    description:
      "Irrigation invoice template for sprinkler installs per zone, spring startups, winterization blowouts, backflow tests and repairs, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "landscaping-invoice-template",
      "lawn-care-invoice-template",
      "plumbing-invoice-template",
    ],
    faqs: [
      {
        q: "How do irrigation contractors usually price new sprinkler systems?",
        a: "Most price new systems per zone, because each zone needs a valve, pipe, heads and wiring, and labor scales with the number of zones. The per zone price is then adjusted for soil conditions, drip versus spray zones, the controller, a backflow preventer, the water tap and any sleeves under driveways or walks. Itemize these parts on the invoice so customers can compare against the estimate.",
      },
      {
        q: "What should a sprinkler winterization invoice include?",
        a: "Include the service date, the method (usually compressed air blowout), the number of zones blown out, whether the backflow device was drained or insulated, controller settings changed to off or rain mode, and the price. Many companies bill a flat fee up to a set number of zones plus a charge per extra zone. Add a note that the system must not be turned on until spring startup.",
      },
      {
        q: "Do I need a license to install irrigation systems?",
        a: "It depends on the state and sometimes the city. Texas, for example, requires irrigation installers to hold a license issued by the Texas Commission on Environmental Quality, and backflow testing usually requires a certified tester. Other states fold irrigation into plumbing or landscape contractor licensing. Put your license number on invoices where required, and check local rules before connecting to a potable water supply.",
      },
      {
        q: "How do I bill for irrigation repairs?",
        a: "Repairs are often billed with a service call or trip charge, labor in quarter or half hour increments after the first hour, and parts such as heads, nozzles, valves, solenoids and fittings. List each part and the zone where it was installed. Wire locating and valve finding can take time, so many contractors bill those hourly and note it in their terms.",
      },
      {
        q: "What is backflow testing and should it be a separate line?",
        a: "Backflow testing checks that the device preventing irrigation water from flowing back into the drinking water supply works correctly. Many water utilities require annual testing by a certified tester and a submitted test report. Bill testing as a separate line, list the device type and serial number, record pass or fail, and note any filing fee the utility charges.",
      },
      {
        q: "Can I sell seasonal irrigation service plans?",
        a: "Yes. Many companies sell annual plans covering spring startup, a midseason check and fall winterization, often with a discount on repair labor. Bill the plan upfront or in installments and list each visit on the invoice. Make clear that parts and repairs beyond adjustments are extra, and state what happens if the customer cancels part way through the season.",
      },
      {
        q: "Should I charge sales tax on irrigation work?",
        a: "Sales tax rules vary. Some states tax repair parts and certain landscaping services, while new system installation may be treated as a real property improvement where the contractor pays tax on materials. Seasonal maintenance may be taxable in some states and exempt in others. Check your state's guidance and apply tax line by line where required.",
      },
      {
        q: "How do I invoice a smart controller upgrade?",
        a: "List the controller make and model, the number of stations, any rain or soil moisture sensor, Wi-Fi setup and programming time. Note if the controller is WaterSense labeled, since some water utilities offer rebates for labeled controllers and ask for an itemized invoice. If the customer bought the controller, bill only installation and programming and say so.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An irrigation invoice bills a customer for sprinkler system work: new installations priced per zone, spring startups, fall winterization (blowouts), backflow testing and repairs. It lists the service date, zones worked, parts such as heads, valves and controllers, labor, trip or service charges, payments received and the balance due, plus notes on settings and next service.</p>

<p>Irrigation work is seasonal and high volume: a busy company may run dozens of startups or blowouts a day in spring and fall, then large installs in between. Clear invoices keep cash flowing through that rush and reduce calls from customers asking what was done. This guide covers what to include, how to price installs, startups, winterization and repairs, and a full worked example you can recreate in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is an irrigation invoice?</h2>
<p>An irrigation invoice, also called a sprinkler invoice or sprinkler repair invoice, is the bill an irrigation contractor, landscaper or plumber sends after working on an automatic watering system. Customers include homeowners, HOAs, commercial property managers, sports fields and municipalities.</p>
<p>Many irrigation companies also offer lawn and landscape services, so the invoice may appear alongside mowing or planting work. Our <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> and <a href="/blog/lawn-care-invoice-template">lawn care invoice template</a> cover those services. For backflow and water supply connections that fall under plumbing rules, see the <a href="/blog/plumbing-invoice-template">plumbing invoice template</a>.</p>

<h2>What should a sprinkler or irrigation invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Company name, phone, address, irrigator or contractor license and backflow tester certification where required</td></tr>
<tr><td>Customer and site</td><td>Name, service address, gate code or access notes, HOA or property manager reference</td></tr>
<tr><td>Service type</td><td>Install, startup, midseason check, winterization, repair, backflow test</td></tr>
<tr><td>System details</td><td>Number of zones, controller model, backflow device type and serial</td></tr>
<tr><td>Work performed</td><td>Zone by zone notes: heads replaced, nozzles adjusted, leaks fixed</td></tr>
<tr><td>Parts</td><td>Item, quantity, unit price</td></tr>
<tr><td>Labor and fees</td><td>Service call, hourly labor, per zone charges</td></tr>
<tr><td>Totals and terms</td><td>Subtotal, tax where applicable, deposit, balance due, due date, payment methods</td></tr>
</tbody></table>

<h2>How much do irrigation contractors charge?</h2>
<p>Prices vary by region, water source, soil and labor costs. Rather than quote national figures that may not fit your market, set per zone and per visit rates from your costs. The table shows the most common pricing structures.</p>
<table><thead><tr><th>Service</th><th>Common pricing method</th><th>Invoice notes</th></tr></thead><tbody>
<tr><td>New system installation</td><td>Per zone, plus controller, backflow and tap</td><td>Zone count, spray vs rotor vs drip, sleeves</td></tr>
<tr><td>Spring startup</td><td>Flat fee up to a set number of zones, plus per extra zone</td><td>Leaks found, controller programmed, adjustments</td></tr>
<tr><td>Fall winterization (blowout)</td><td>Flat fee up to a set number of zones, plus per extra zone</td><td>Zones blown out, backflow drained</td></tr>
<tr><td>Repairs</td><td>Service call plus hourly labor and parts</td><td>Parts by zone, time on site</td></tr>
<tr><td>Backflow test</td><td>Flat fee per device</td><td>Device type, serial, pass/fail, report filed</td></tr>
<tr><td>Controller upgrade</td><td>Controller price plus install and programming</td><td>Model, stations, sensor</td></tr>
<tr><td>Drip conversion</td><td>Per zone or per bed</td><td>Emitters, tubing, pressure regulator, filter</td></tr>
<tr><td>Seasonal service plan</td><td>Annual fee or installments</td><td>Visits included, repair discount</td></tr>
</tbody></table>
<p>If you charge a minimum or trip fee, explain it on your estimate and invoice. The guides to the <a href="/blog/service-call-fee">service call fee</a> and <a href="/blog/how-to-bill-for-travel-time">billing for travel time</a> show how other trades present it.</p>

<h2>Invoicing installs per zone</h2>
<p>A zone is a group of sprinkler heads or drip emitters controlled by one valve. Because each zone needs a valve, pipe, wire, heads and trenching, per zone pricing tracks labor and material reasonably well. Typical line items for a new system:</p>
<ul>
<li>Zones installed, split by type: spray, rotor, drip</li>
<li>Main line from the tap or meter to the valve manifold</li>
<li>Backflow preventer installed (type and size) and permit</li>
<li>Controller, rain sensor or soil moisture sensor</li>
<li>Sleeves bored under driveways or sidewalks</li>
<li>Locates, permits and water tap fees at cost</li>
<li>Restoration of lawn after trenching or pulling pipe</li>
</ul>
<p>Here is how per zone pricing might add up on an illustrative new residential system with six spray zones, two rotor zones and one drip zone. Using example rates of $550 per spray or rotor zone and $450 per drip zone, the zones total $4,850 (8 x $550 plus $450). Add a smart controller installed and programmed at $380, a pressure vacuum breaker with permit at $420, two driveway sleeves at $150 each and lawn restoration at $250, and the contract total is $6,200. On the invoice, each of those items appears as its own line, so the customer can see that the zones are only part of the price and can compare your bid fairly with another contractor's.</p>
<p>Record the final zone map on or with the invoice: which valve controls which area, where valve boxes are, and the controller station for each zone. It saves time on every future service call and is one of the most appreciated things you can hand a new customer.</p>
<p>Large installs usually need a deposit and sometimes progress payments. See our guides to the <a href="/blog/deposit-invoice">deposit invoice</a> and <a href="/blog/progress-billing">progress billing</a>.</p>

<h2>Startups, winterization and backflow testing</h2>
<h3>Spring startup</h3>
<p>Startup invoices should list the date, steps taken (water turned on slowly, each zone run, heads adjusted, leaks noted), the controller program set and any repairs needed. Separate the flat startup fee from repairs so the customer can approve extra work.</p>
<h3>Fall winterization</h3>
<p>In freezing climates, compressed air blowouts clear water from pipes and heads. Note zones blown out, that the backflow device was drained or protected, and the controller set to off. Many companies schedule thousands of these a season, so a quick, consistent invoice format saves hours. Batch similar invoices at the end of each day with sequential numbers from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>
<h3>Backflow testing</h3>
<p>Backflow preventers protect the public water supply from contamination. Many water utilities require annual testing by a certified tester and a test report filed with the utility. List the device type (for example pressure vacuum breaker or reduced pressure zone assembly), serial number, test result and any utility filing fee. If a device fails, quote the repair separately.</p>

<h2>Example sprinkler irrigation invoice</h2>
<p>An illustrative repair and winterization visit using example prices.</p>
<p><strong>ClearFlow Irrigation LLC</strong> (licensed irrigator; certified backflow tester), Invoice IRR-2026-1412, dated October 14, 2026. Customer: Westbrook HOA, Unit 12 common area, 300 Westbrook Way. Terms: net 15.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Winterization blowout, up to 6 zones</td><td>1</td><td>visit</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Additional zones blown out</td><td>3</td><td>zones</td><td>$8.00</td><td>$24.00</td></tr>
<tr><td>Repair labor: locate and replace leaking valve diaphragm, zone 4</td><td>1.0</td><td>hr</td><td>$90.00</td><td>$90.00</td></tr>
<tr><td>Valve diaphragm and solenoid kit</td><td>1</td><td>each</td><td>$32.00</td><td>$32.00</td></tr>
<tr><td>Replace broken spray heads, zone 7 (4 in pop-up with nozzle)</td><td>3</td><td>each</td><td>$18.00</td><td>$54.00</td></tr>
<tr><td>Annual backflow test, PVB device, report filed with water utility</td><td>1</td><td>device</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Utility backflow report filing fee (at cost)</td><td>1</td><td>each</td><td>$10.00</td><td>$10.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$370.00</strong></td></tr>
<tr><td colspan="4">Sales tax on parts (illustrative 7% of $86.00)</td><td>$6.02</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$376.02</strong></td></tr>
</tbody></table>
<p>Notes: 9 zones blown out at 50 psi. PVB drained and insulated. Controller set to off. Do not turn water on until spring startup. Backflow test passed; serial number and readings on attached report.</p>
<p>Whether parts, labor or maintenance are taxable depends on your state, so treat the tax line as an example. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the math once you know the rate.</p>

<h2>How to create an irrigation invoice step by step</h2>
<ol>
<li>Choose the service type and enter the date and site.</li>
<li>Record system details: zones, controller, backflow device.</li>
<li>Add the flat fee for startup or winterization, plus extra zones.</li>
<li>List repair labor by time and each part by zone.</li>
<li>Add backflow test results and filing fees.</li>
<li>Apply sales tax according to your state's rules.</li>
<li>Add notes about settings and next service.</li>
<li>Send the PDF from the <a href="/invoice-generator">free invoice generator</a> the same day, or batch invoices at day's end.</li>
</ol>

<h2>Water efficiency and rebate paperwork</h2>
<p>Many water utilities offer rebates for efficient irrigation equipment, especially smart controllers and high efficiency nozzles. The EPA's <a href="https://www.epa.gov/watersense">WaterSense program</a> labels irrigation controllers and spray sprinkler bodies that meet its efficiency criteria, and utilities often require a WaterSense labeled model and an itemized invoice showing the model number. Put the model, number of stations and installation date on the invoice so your customer can apply.</p>
<p>Licensing also matters for paperwork. In Texas, for example, irrigation installation requires a license from the Texas Commission on Environmental Quality, and other states regulate the work through plumbing or landscape contractor boards. Show your license number on the invoice where it is required.</p>

<h2>Seasonal service plans and recurring billing</h2>
<p>Service plans smooth out irrigation income and lock in customers before competitors call. A typical residential plan includes spring startup, one midseason check and fall winterization, often with priority scheduling and a discount on repair labor. Commercial and HOA plans may include monthly inspections during the watering season with a written report for each visit.</p>
<p>There are three common ways to bill a plan:</p>
<ul>
<li><strong>Annual prepayment.</strong> One invoice at the start of the season, sometimes with a small discount for paying upfront.</li>
<li><strong>Per visit billing.</strong> An invoice after each included visit at the plan rate, plus any parts and repairs.</li>
<li><strong>Monthly installments.</strong> Equal payments across the season, useful for HOAs and commercial sites with monthly budgets.</li>
</ul>
<p>Whichever you choose, list the visits included, the repair discount and the cancellation terms on the first invoice. Show what each later invoice covers, for example "Plan visit 2 of 3: midseason check", so customers can see what remains. Our guide to <a href="/blog/recurring-payments-small-business">recurring payments</a> explains autopay options that reduce chasing.</p>

<h2>Billing HOAs and commercial properties</h2>
<p>Large properties bring bigger invoices and stricter approval processes. Expect to provide a certificate of insurance, a W-9, and invoices that reference the property name, a purchase order or work order number and the manager who approved the work. Inspection reports with zone maps, photos of broken parts and notes on water waste help managers approve repairs quickly.</p>
<p>Set an approval threshold in your service agreement: repairs below a fixed dollar amount can be done on the spot, while anything above it needs written approval. This avoids return trips for small fixes and protects you from disputes on larger ones. Bill each property separately when one management company oversees several sites, because each site usually has its own budget.</p>

<h2>Common irrigation invoice mistakes</h2>
<ul>
<li><strong>No zone details.</strong> "Fixed sprinklers" tells the customer nothing. Name the zone and part.</li>
<li><strong>Unapproved repairs during a startup.</strong> Get approval before replacing valves or controllers. A simple signed work order helps.</li>
<li><strong>Missing backflow serial numbers.</strong> Utilities reject reports without them.</li>
<li><strong>Late invoices in peak season.</strong> Send invoices daily during startup and blowout rushes.</li>
<li><strong>Unclear seasonal plan terms.</strong> List the visits included and what is extra.</li>
<li><strong>Wrong tax treatment.</strong> Parts, labor and installs can be taxed differently.</li>
<li><strong>No payment terms for HOAs.</strong> State the terms and late fee. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains options.</li>
</ul>

<h2>Related templates for outdoor service businesses</h2>
<p>Irrigation companies often expand into neighboring services. See the <a href="/blog/snow-removal-invoice-template">snow removal invoice template</a> for winter income, the <a href="/blog/tree-service-invoice-template">tree service invoice template</a> for arborist work, and the new <a href="/blog/deck-building-invoice-template">deck building invoice template</a> for hardscape projects.</p>

<p>A clear irrigation invoice shows the zones, parts, labor, backflow results and next steps, so customers pay quickly even in the busiest weeks of the season. Create yours with our free invoice generator: there is no sign-up, the PDF is built in your browser and you can download it right away. For more designs, visit our <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
];
