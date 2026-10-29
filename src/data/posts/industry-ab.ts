import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_AB: PostDraft[] = [
  {
    slug: "jewelry-invoice-template",
    title: "Jewelry Invoice Template: Custom Pieces, Repairs, Receipts",
    description:
      "Jewelry invoice template and receipt guide: describe metal, karat, stones and carat weight, bill custom work and repairs, and add a clear appraisal note.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "appraisal-invoice-template",
      "artist-commission-invoice-template",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "Is a jewelry receipt the same as an appraisal?",
        a: "No. A jewelry receipt or invoice records what the customer paid and describes the item sold. An appraisal is a separate document, usually prepared by a qualified appraiser, that estimates a value for a stated purpose such as insurance replacement. Insurers may accept a detailed sales receipt for scheduling a new item, but many ask for an appraisal. Add a note to your invoice making the distinction clear.",
      },
      {
        q: "What should a jewelry receipt include for insurance?",
        a: "Insurers generally want the seller's name and contact details, the date, the price paid, and a detailed description: metal type and karat or fineness, weight, each stone's type, shape, measurements or carat weight, color and clarity grades, and any grading report number. Note whether stones are natural or laboratory-grown and any known treatments. Photos and the grading report help support a claim.",
      },
      {
        q: "Do I have to disclose that a diamond is lab-grown on the invoice?",
        a: "The FTC Jewelry Guides say a lab-grown diamond can be called a diamond only if its laboratory-grown origin is clearly and conspicuously disclosed, using words such as laboratory-grown or laboratory-created, and they warn against calling it real, natural or genuine. Putting that disclosure next to the stone description on the invoice, not just in small print, is the safe practice for retailers and makers.",
      },
      {
        q: "How do jewelers bill for repairs?",
        a: "Most jewelers price repairs by job type, such as ring sizing up or down, prong retipping, chain soldering, clasp replacement or stone tightening, with the metal and any parts added. Take a repair envelope or intake record noting the item's condition, stones and metal at drop-off. The invoice then lists each repair with its price and refers to the intake number, which protects both sides.",
      },
      {
        q: "Do jewelers charge sales tax on custom pieces?",
        a: "In US states with a sales tax, finished jewelry sold to a customer is generally taxable, including custom pieces and design work that is part of the sale. Repair labor is treated differently from state to state, with some taxing it and others exempting separately stated labor. Out-of-state shipments and sales to resellers with valid certificates may be exempt. Check your state's rules.",
      },
      {
        q: "How much deposit should a jeweler take for a custom ring?",
        a: "Many jewelers take 50% at design approval, and some ask for the full cost of a center stone up front because it is bought or reserved specifically for the customer. The balance is usually due at pickup. Put the deposit amount, what it covers and your refund policy (for example, non-refundable once casting begins) on the quote and on the deposit invoice.",
      },
      {
        q: "Should the invoice show metal weight?",
        a: "Showing metal weight in grams or pennyweight is useful for custom and gold items, because price is closely tied to metal content and weight helps with insurance and future resale. For mass-produced pieces many retailers skip weight and give the karat or fineness only. If you price by weight, such as a scrap gold purchase, the weight and rate must be on the document.",
      },
      {
        q: "What is a jewelry invoice used for after the sale?",
        a: "Customers use it to schedule the piece on an insurance policy, to support warranty or return claims, to prove ownership, and sometimes when reselling or valuing an estate. Businesses use it for sales tax records, inventory and income tax. That is why accurate descriptions matter: a vague 'gold ring with diamond' line is almost useless for any of those purposes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A jewelry invoice template bills a customer for jewelry sold, made or repaired. It describes each piece precisely, including metal type and karat or fineness, weight, each stone's type, shape, carat weight and grades, any grading report number and lab-grown disclosure, then lists labor, design or repair charges, sales tax, deposits and the balance due.</p>

<p>Jewelry invoices do more work than most. Customers rely on them for insurance, warranty claims and proof of ownership long after the sale, and a precise description is part of the value you deliver. Custom work adds deposits, design fees and stone sourcing; repairs add intake records and condition notes. This guide explains how to write a jewelry invoice or jewelry receipt that holds up, with a custom ring example, a repair example and the details the FTC Jewelry Guides expect you to get right.</p>

<h2>What is a jewelry invoice (and how is it different from a receipt)?</h2>
<p>A jewelry invoice is a bill requesting payment for jewelry or jewelry services, while a jewelry receipt confirms payment has been received. In retail, one document often serves both purposes: the invoice is marked "Paid" with the payment method and date. For custom pieces and repairs, you usually send an invoice first (often for a deposit) and give a paid receipt at pickup. Our guide on <a href="/blog/invoice-vs-receipt">invoices versus receipts</a> explains the difference, and the <a href="/blog/payment-receipt-template">payment receipt template</a> covers the receipt side.</p>
<p>Jewelers typically create invoices for four kinds of transactions:</p>
<ul>
<li><strong>Retail sales</strong> of finished pieces.</li>
<li><strong>Custom design</strong>: engagement rings, wedding bands, pendants, redesigns using the customer's own stones or gold.</li>
<li><strong>Repairs and services</strong>: sizing, prong work, soldering, cleaning and polishing, stone replacement, engraving.</li>
<li><strong>Wholesale and consignment</strong> to other retailers. See our <a href="/blog/consignment-invoice">consignment invoice guide</a> for memo terms.</li>
</ul>

<h2>What should a jewelry invoice include?</h2>
<table><thead><tr><th>Field</th><th>What to write</th></tr></thead><tbody>
<tr><td>Business details</td><td>Name, address, phone, email, website, sales tax permit number if required</td></tr>
<tr><td>Invoice details</td><td>Invoice number, date, job or repair envelope number, due date</td></tr>
<tr><td>Customer</td><td>Name, address, phone, email</td></tr>
<tr><td>Item type</td><td>Ring, pendant, earrings, bracelet, with style or model number</td></tr>
<tr><td>Metal</td><td>Type and karat or fineness (14K yellow gold, 18K white gold, platinum 950, sterling silver 925), weight in grams or pennyweight</td></tr>
<tr><td>Center stone</td><td>Type, natural or laboratory-grown, shape, carat weight, measurements, color, clarity, cut grade, grading lab and report number, known treatments</td></tr>
<tr><td>Side stones</td><td>Number, type, total carat weight, approximate quality range</td></tr>
<tr><td>Labor and services</td><td>Design and CAD, casting, setting, finishing, engraving, repairs</td></tr>
<tr><td>Totals</td><td>Subtotal, sales tax, total, deposits, balance due</td></tr>
<tr><td>Notes</td><td>Warranty, return policy, appraisal disclaimer, care instructions</td></tr>
</tbody></table>
<p>Use a jewelry-specific <a href="/blog/invoice-numbering-system">invoice numbering system</a>, and link repair invoices to the intake envelope number so you can trace every item that passes through your shop.</p>

<h2>How to describe metals and stones accurately</h2>
<p>Precise, honest descriptions are both good service and a legal expectation. In the US, the <a href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-23">FTC Guides for the Jewelry, Precious Metals, and Pewter Industries (16 CFR Part 23)</a> set out how to describe metals, diamonds, gemstones and pearls without misleading buyers. Key points for invoices:</p>
<ul>
<li><strong>Metal content.</strong> Use the karat (10K, 14K, 18K) or fineness marking that matches the item. Describe plated, filled or vermeil items as such, not as solid gold.</li>
<li><strong>Lab-grown diamonds.</strong> The FTC Guides allow a lab-grown stone to be called a diamond only with a clear, conspicuous disclosure of its origin, such as "laboratory-grown" or "laboratory-created". Do not call it real, natural or genuine.</li>
<li><strong>Simulants.</strong> Stones that imitate diamonds or gems, such as cubic zirconia or moissanite, should be named for what they are.</li>
<li><strong>Treatments.</strong> Disclose treatments that significantly affect value or require special care, such as fracture filling or certain gemstone treatments.</li>
<li><strong>Carat weight.</strong> State total carat weight for multiple stones (for example, 0.50 ct tw), and avoid rounding in a way that overstates weight.</li>
</ul>
<p>When a stone has a grading report, include the lab name and report number. That single line makes insurance scheduling and later verification far easier.</p>

<h2>How do jewelers price custom work and repairs?</h2>
<p>Custom jewelry is usually priced as materials plus labor plus margin. Typical components:</p>
<table><thead><tr><th>Component</th><th>How it is often priced</th></tr></thead><tbody>
<tr><td>Design and CAD</td><td>Flat fee, sometimes credited against the order</td></tr>
<tr><td>Metal</td><td>Weight times current metal price plus a markup or casting charge</td></tr>
<tr><td>Center stone</td><td>Stone cost plus markup, often paid in full up front</td></tr>
<tr><td>Side stones and setting</td><td>Per stone setting fee plus stone cost</td></tr>
<tr><td>Finishing and polishing</td><td>Included or flat fee</td></tr>
<tr><td>Engraving</td><td>Per line or per character, hand or laser</td></tr>
</tbody></table>
<p>Because gold and platinum prices move daily, many jewelers state in the quote how long the metal price is held (for example, 7 days) and whether the final invoice may adjust if the customer delays approval. Repairs are usually priced from a service menu. The ranges below are <strong>illustrative only</strong>, since prices depend on metal, complexity and your market:</p>
<ul>
<li>Ring sizing, gold, down: often a modest flat fee; up: adds metal cost.</li>
<li>Prong retipping: priced per prong.</li>
<li>Chain solder: per break.</li>
<li>Clasp replacement: part plus labor.</li>
<li>Stone tightening, cleaning and inspection: low flat fee, sometimes free for your own customers.</li>
</ul>

<h2>Jewelry invoice example: custom engagement ring</h2>
<p>The example below shows a custom solitaire ring with a lab-grown center stone. Prices are illustrative, and the example applies an 8.25% sales tax.</p>
<p><strong>Invoice JW-2026-0213</strong> | Custom order | Design approved: September 8, 2026 | Pickup: October 27, 2026 | Customer: Daniel Reyes</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Custom design and CAD rendering, two revisions</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Solitaire setting, 14K yellow gold, 4-prong cathedral, finished weight 3.8 g, size 6.5</td><td>1</td><td>$1,150.00</td><td>$1,150.00</td></tr>
<tr><td>Center stone: laboratory-grown diamond, round brilliant, 1.52 ct, F color, VS1 clarity, Excellent cut, grading report no. LG000000 (lab-grown, not natural)</td><td>1</td><td>$1,400.00</td><td>$1,400.00</td></tr>
<tr><td>Casting, stone setting and final polish</td><td>1</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Laser inscription of report number on girdle</td><td>1</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td></td><td><strong>$3,190.00</strong></td></tr>
<tr><td>Sales tax, 8.25%</td><td></td><td></td><td>$263.18</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>$3,453.18</strong></td></tr>
<tr><td>Less deposit paid September 8, 2026 (50% of subtotal)</td><td></td><td></td><td>-$1,595.00</td></tr>
<tr><td><strong>Balance due at pickup</strong></td><td></td><td></td><td><strong>$1,858.18</strong></td></tr>
</tbody></table>
<p><em>Note on the invoice:</em> "This invoice records the price paid and describes the item sold. It is not an appraisal. For insurance valuation, obtain an independent appraisal." The grading report number shown is a placeholder; use the real number on your own invoices.</p>
<p>You can lay this out with the <a href="/invoice-generator">free invoice generator</a>, using long descriptions for each line and the notes field for the appraisal statement and warranty.</p>

<h2>Jewelry repair invoice example</h2>
<p>Repairs need fewer lines but more care about condition. A typical repair invoice:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Intake R-4471: 14K white gold ring, 1 round center stone approx. 0.75 ct, 6 side stones; light wear, one bent prong noted at drop-off</td><td></td><td></td><td></td></tr>
<tr><td>Ring sizing up 1.5 sizes, 14K white gold, added metal</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Prong retipping, 14K white gold</td><td>4</td><td>$30.00</td><td>$120.00</td></tr>
<tr><td>Rhodium plating</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>Ultrasonic cleaning and inspection</td><td>1</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td><strong>Total (labor exempt in this example state)</strong></td><td></td><td></td><td><strong>$265.00</strong></td></tr>
</tbody></table>
<p>Recording the condition at intake ("one bent prong noted at drop-off") protects you if the customer later claims damage. Our <a href="/blog/work-order-template">work order template</a> is a good format for intake records.</p>

<h2>How to invoice remounts with the customer's own gold or stones</h2>
<p>Many custom jobs reuse a customer's materials: a grandmother's diamond set into a new ring, or old gold melted into a band. These jobs need extra care on the invoice because you are handling property you did not sell.</p>
<table><thead><tr><th>Situation</th><th>What to record</th><th>How to bill</th></tr></thead><tbody>
<tr><td>Customer's stone in a new setting</td><td>Stone description and measurements at intake, any chips or inclusions visible, signed intake form</td><td>Setting, labor and setting fee only; stone listed as "customer-supplied, not sold"</td></tr>
<tr><td>Customer's gold used in the new piece</td><td>Weight and karat received, refining or alloying loss explained up front</td><td>Credit for the metal at an agreed rate, or labor only if the gold is reused directly</td></tr>
<tr><td>Trade-in toward a purchase</td><td>Item description, weight, agreed trade-in value</td><td>Trade-in shown as a credit line; check how your state taxes the net amount</td></tr>
<tr><td>Old gold purchase (scrap)</td><td>Weight, karat, rate per gram or pennyweight, seller ID where local law requires it</td><td>A purchase receipt or bill of sale to the seller, not an invoice</td></tr>
</tbody></table>
<p>Setting a customer's stone carries risk, because older or treated stones can chip under pressure. Many jewelers add a waiver for customer-supplied stones and state that liability is limited. Write the risk policy on the intake form, then repeat it in the invoice notes. For purchases of gold or jewelry from the public, a <a href="/blog/bill-of-sale-template">bill of sale</a> is the right document, and some cities and states have secondhand dealer rules that require holding periods and seller identification.</p>

<h3>What to write in the appraisal note</h3>
<p>Customers often ask for "an appraisal" when they really need a detailed receipt for their insurer. A short note avoids confusion: say the document records the price paid, it is not an independent appraisal, and replacement value for insurance may differ. If you also offer appraisals, issue them as a separate document with its own fee, signed by the appraiser, and never on the sales invoice itself.</p>

<h2>Is jewelry taxable, and what about repairs?</h2>
<p>In US states with a sales tax, retail jewelry sales are generally taxable at the rate for the delivery location. Points to check with your state revenue department:</p>
<ul>
<li>Whether repair labor is taxable or exempt when separately stated.</li>
<li>Whether parts and metal added during repairs are taxable.</li>
<li>How trade-ins and customer-supplied stones or gold are treated.</li>
<li>Exemptions for sales to resellers with a valid <a href="/blog/resale-certificate">resale certificate</a> and for out-of-state shipments.</li>
</ul>
<p>This is general information, not tax or legal advice. You can check totals with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>How to create a jewelry invoice step by step</h2>
<ol>
<li><strong>Record the customer and job details</strong>, including the intake or job number.</li>
<li><strong>Describe each item fully</strong>: type, metal, karat, weight, stones and grades.</li>
<li><strong>Add the lab-grown or simulant disclosure</strong> next to the stone description.</li>
<li><strong>Add the grading report</strong> lab and number if there is one.</li>
<li><strong>List labor separately</strong>: design, setting, engraving, repairs.</li>
<li><strong>Apply sales tax</strong> to taxable lines.</li>
<li><strong>Credit deposits</strong> and show the balance due.</li>
<li><strong>Add notes</strong>: warranty, returns, care and an appraisal disclaimer.</li>
<li><strong>Mark it paid at pickup</strong> with method and date, and give the customer a copy.</li>
</ol>

<h2>Common jewelry invoicing mistakes</h2>
<ul>
<li><strong>Vague descriptions</strong> like "diamond ring, gold". Useless for insurance and risky under the FTC Guides.</li>
<li><strong>Burying the lab-grown disclosure</strong> in the footer instead of on the stone line.</li>
<li><strong>Calling the invoice an appraisal</strong> or listing an inflated "retail value" that differs from the price paid.</li>
<li><strong>No intake record for repairs</strong>, which leaves you exposed to damage claims.</li>
<li><strong>Not holding metal prices for a set period</strong>, so a long design process erodes your margin.</li>
<li><strong>Starting custom work without a deposit</strong>, especially when you have reserved a stone.</li>
</ul>
<p>If customers also ask you for valuations, see our <a href="/blog/appraisal-invoice-template">appraisal invoice template</a> for how appraisal fees are billed. Independent makers who sell one-of-a-kind pieces may find our <a href="/blog/artist-commission-invoice-template">artist commission invoice template</a> useful too.</p>

<p>A strong jewelry invoice template describes every piece precisely, discloses what must be disclosed, separates labor from materials and records deposits clearly, so it serves as a receipt, a warranty record and an insurance document. Create yours with our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and builds a PDF in your browser that you can download, print or email to your customer.</p>
`,
  },
  {
    slug: "upholstery-invoice-template",
    title: "Upholstery Invoice Template: Labor, Fabric and Pickup",
    description:
      "Upholstery invoice template: bill labor per piece, fabric yardage, foam, supplies, COM fabric and pickup and delivery, with a sofa example and checklist.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "furniture-maker-invoice-template",
      "interior-design-invoice-template",
      "alterations-tailoring-invoice-template",
    ],
    faqs: [
      {
        q: "How much fabric does it take to reupholster a sofa?",
        a: "It depends on the size, style and fabric. As a rough guide, a standard three-seat sofa often needs somewhere in the mid-teens of yards of plain 54-inch fabric, more for skirts, tufting, loose back cushions or large pattern repeats. Measure each piece or use your yardage chart, then add an allowance for matching patterns and welting. Put the exact yardage on the quote and invoice.",
      },
      {
        q: "What is COM in upholstery?",
        a: "COM stands for customer's own material: fabric the customer buys and supplies rather than buying from the upholsterer. Shops usually charge the same or slightly higher labor for COM jobs and may add a handling fee, because they cannot control quality or quantity. Ask the customer to deliver the full yardage you specify, and note on the invoice that fabric was customer-supplied.",
      },
      {
        q: "Do upholsterers charge sales tax?",
        a: "It varies by state. Fabric, foam and other materials that become part of the furniture are often taxable when sold to the customer, while separately stated labor may be taxable or exempt depending on the state. Pickup and delivery charges have their own rules. Itemize materials and labor on the invoice and confirm the treatment with your state revenue department.",
      },
      {
        q: "Should upholsterers take a deposit?",
        a: "Yes. A deposit that at least covers fabric and materials is standard, because fabric is ordered or cut for a specific job and is hard to reuse. Many shops ask for 50% of the total or the full fabric cost when the customer approves the quote. The balance is due on delivery or pickup. State any restocking or cancellation charges for special-order fabric.",
      },
      {
        q: "What happens if hidden damage is found when the old fabric comes off?",
        a: "It is common to find broken frames, loose joints, failed springs or webbing after stripping old fabric. Good practice is to stop, photograph the problem, quote the extra repair and get the customer's approval before continuing. Add it to the invoice as a separate line with a short explanation, rather than folding it into the labor price.",
      },
      {
        q: "Do upholsterers need a license?",
        a: "Some states regulate upholstery. California, for example, requires custom upholsterers to be licensed by the Bureau of Household Goods and Services, and has labeling rules for upholstered furniture and filling materials. Other states have no specific license beyond general business registration. Check with your state consumer affairs or licensing agency before you start taking jobs.",
      },
      {
        q: "How do I charge for pickup and delivery of furniture?",
        a: "Many shops charge a flat fee per trip or per piece within a local zone, with extra for long distances, stairs without an elevator, or very large pieces that need two people. List pickup and delivery as separate lines with dates. Some shops include delivery free above a certain order value, which can be shown as a line with a zero amount to make the value visible.",
      },
      {
        q: "How long does an upholstery job take?",
        a: "Timelines depend on fabric lead times and your backlog more than the work itself. A dining chair seat can be done quickly, while a sofa may take days of shop time and weeks of waiting if fabric is back-ordered. Put the expected completion window on the quote and update the customer if fabric is delayed. Your invoice should show the actual completion date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An upholstery invoice template bills a customer for reupholstering or repairing furniture. It lists labor per piece (sofa, chair, cushions), fabric by yardage and price per yard or a customer's own material (COM) note, foam, batting, webbing and other supplies, frame or spring repairs, pickup and delivery, sales tax, the deposit paid and the balance due.</p>

<p>Upholstery customers often do not know what goes into the price. They see one sofa, but you see stripping, frame tightening, new webbing, foam, batting, 16 yards of fabric cut to match a pattern, welting and two trips with a van. A clear upholstery invoice separates labor from materials so customers understand the value, and it documents fabric and supplies for any sales tax rules in your state. This guide covers what to include, how to estimate fabric, a worked sofa example and common mistakes.</p>

<h2>What is an upholstery invoice?</h2>
<p>An upholstery invoice is a bill from an upholsterer or upholstery shop for work on furniture or other upholstered items: sofas, armchairs, dining chairs, headboards, ottomans, cushions, boat and auto interiors, and commercial seating for restaurants or offices. The usual document flow is:</p>
<ol>
<li><strong>Estimate</strong> after inspecting the piece or photos, with fabric yardage and options. See our <a href="/blog/estimate-template">estimate template</a>.</li>
<li><strong>Deposit invoice</strong> when the customer approves fabric and price, usually covering materials. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains how to bill it.</li>
<li><strong>Final invoice</strong> on completion, with any approved extras and the deposit credited.</li>
</ol>
<p>If you build new furniture as well as reupholster, our <a href="/blog/furniture-maker-invoice-template">custom furniture invoice template</a> covers design and build pricing. If you mainly sew garments, see the <a href="/blog/alterations-tailoring-invoice-template">alterations and tailoring invoice template</a>.</p>

<h2>What should an upholstery invoice include?</h2>
<table><thead><tr><th>Section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Business details</td><td>Name, address, phone, email, license number where your state requires one</td></tr>
<tr><td>Invoice details</td><td>Invoice number, job number, issue date, due date</td></tr>
<tr><td>Customer</td><td>Name, billing address, pickup and delivery address</td></tr>
<tr><td>Pieces</td><td>Each item with style and size (3-seat sofa, wingback chair, 6 dining seats)</td></tr>
<tr><td>Labor</td><td>Per piece price, plus extras such as tufting, channeling, skirts, welting, nailhead trim</td></tr>
<tr><td>Fabric</td><td>Name, color, yards, price per yard, or "COM, customer-supplied, X yards received"</td></tr>
<tr><td>Supplies</td><td>Foam (density and thickness), batting, Dacron wrap, webbing, springs, cord, zippers</td></tr>
<tr><td>Repairs</td><td>Frame regluing, joint repair, spring re-tie, with approval reference</td></tr>
<tr><td>Logistics</td><td>Pickup and delivery fees, stairs, extra crew</td></tr>
<tr><td>Totals and terms</td><td>Subtotal, tax, total, deposit, balance, storage fees for uncollected items</td></tr>
</tbody></table>

<h2>How do upholsterers price their work?</h2>
<p>Most shops price labor per piece based on type and complexity, then add materials at cost plus a markup. Hourly pricing is common for repairs and unusual items. The figures below are <strong>illustrative ranges</strong> to show the structure, not market data; your prices depend on your skills, location and overhead.</p>
<table><thead><tr><th>Piece</th><th>Typical labor basis</th><th>Illustrative labor range</th><th>Rough plain-fabric yardage</th></tr></thead><tbody>
<tr><td>Dining chair seat (drop-in)</td><td>Per seat</td><td>$40 to $90</td><td>0.5 to 1 yd</td></tr>
<tr><td>Dining chair, seat and back</td><td>Per chair</td><td>$120 to $250</td><td>1 to 2 yd</td></tr>
<tr><td>Armchair or club chair</td><td>Per chair</td><td>$400 to $900</td><td>6 to 8 yd</td></tr>
<tr><td>Wingback chair</td><td>Per chair</td><td>$500 to $1,000</td><td>7 to 9 yd</td></tr>
<tr><td>Three-seat sofa</td><td>Per sofa</td><td>$800 to $1,800</td><td>14 to 18 yd</td></tr>
<tr><td>Ottoman</td><td>Per piece</td><td>$150 to $400</td><td>2 to 4 yd</td></tr>
<tr><td>Headboard</td><td>Per piece</td><td>$200 to $500</td><td>2 to 5 yd</td></tr>
</tbody></table>
<p>Add 10% to 20% extra yardage for patterns with large repeats, stripes that must align, or fabric with a nap that must run one direction. Tufting, channeling, skirts and contrast welting add labor. To make sure each piece type pays, check margins using our guide to <a href="/blog/how-to-calculate-profit-margin">profit margin</a>, and publish standard labor prices in a <a href="/blog/price-list-template">price list</a> so estimates stay consistent.</p>

<h2>Upholstery invoice example with real numbers</h2>
<p>A customer has a three-seat sofa reupholstered in performance velvet and two dining chair seats recovered in the same fabric. Prices are illustrative. In this example state, materials are taxed at 7% and separately stated labor and delivery are not taxed. Your state may differ.</p>
<p><strong>Invoice UPH-2026-0088</strong> | Picked up: September 29, 2026 | Completed: October 22, 2026 | Delivered: October 24, 2026 | Due: on delivery</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Sofa reupholstery labor: 3-seat, attached back, self-welt, strip and reglue frame</td><td>1</td><td>$950.00</td><td>$950.00</td></tr>
<tr><td>Fabric: performance velvet, Sage, 54 in, includes repeat allowance</td><td>16 yd</td><td>$42.00</td><td>$672.00</td></tr>
<tr><td>Seat cushion foam, high-density, 5 in, with Dacron wrap</td><td>3</td><td>$110.00</td><td>$330.00</td></tr>
<tr><td>Supplies: jute webbing, cotton batting, welt cord, zippers</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Dining chair seat recover (drop-in seats)</td><td>2</td><td>$65.00</td><td>$130.00</td></tr>
<tr><td>Fabric for dining seats, performance velvet, Sage</td><td>1 yd</td><td>$42.00</td><td>$42.00</td></tr>
<tr><td>Pickup and delivery, local zone, 2-person crew</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td></td><td><strong>$2,329.00</strong></td></tr>
<tr><td>Sales tax, 7% on materials ($1,129.00)</td><td></td><td></td><td>$79.03</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>$2,408.03</strong></td></tr>
<tr><td>Less deposit paid September 22, 2026 (fabric and foam)</td><td></td><td></td><td>-$1,000.00</td></tr>
<tr><td><strong>Balance due on delivery</strong></td><td></td><td></td><td><strong>$1,408.03</strong></td></tr>
</tbody></table>
<p>The taxable materials are fabric ($672 + $42), foam ($330) and supplies ($85), totaling $1,129.00. If the customer had supplied their own fabric, the fabric lines would disappear and a COM line would note "Customer-supplied fabric, 17 yd received September 29". You can build this invoice in the <a href="/invoice-generator">free invoice generator</a> and reuse it as a template for the next sofa.</p>

<h2>How to handle COM fabric, hidden damage and change requests</h2>
<h3>Customer's own material (COM)</h3>
<p>When the customer supplies fabric, you lose control of quality and quantity. Tell them the exact yardage needed (with pattern allowance) in writing, inspect the fabric on arrival for flaws, and note it on the job record. Many shops add a COM handling fee or charge slightly higher labor, and limit liability for flaws in customer-supplied fabric. If the fabric runs short, any delay and reorder cost should be the customer's.</p>
<h3>Hidden damage</h3>
<p>Stripping old fabric often reveals broken rails, loose joints, sagging springs or rotted webbing. Photograph it, send the customer a short change quote, and only proceed with approval. On the invoice, add a separate line such as "Frame repair: reglued and doweled back rail, approved by text October 3".</p>
<h3>Changes after approval</h3>
<p>If the customer switches fabric after you have cut the first choice, bill the cut fabric (or a restocking fee from the supplier) and any extra labor as a separate line. Our guide to <a href="/blog/scope-creep-change-order">change orders</a> shows a simple approval format.</p>

<h2>How to invoice commercial and marine upholstery</h2>
<p>Restaurants, hotels, offices, medical practices and boat owners are steady upholstery customers, but they bill differently from households:</p>
<ul>
<li><strong>Volume pricing.</strong> A restaurant recovering 40 booth seats and 60 chair seats expects a per-unit price lower than a single chair. Quote by unit type and quantity, such as "Chair seat recover, vinyl, 60 at $48".</li>
<li><strong>Specified materials.</strong> Commercial jobs often require contract-grade fabric or vinyl rated for heavy use and fire-code compliance. Put the material name, color and specification on the invoice.</li>
<li><strong>Scheduling around operations.</strong> After-hours or weekend work so a restaurant can stay open is a premium; list it separately.</li>
<li><strong>Purchase orders and terms.</strong> Businesses may need a PO number on the invoice and net 30 terms. Take a materials deposit on large orders even if they pay on terms.</li>
<li><strong>Marine and auto work.</strong> Boat cushions and car interiors use marine-grade vinyl, closed-cell foam and stainless or UV-resistant thread. Describe these materials, because they cost far more than standard supplies.</li>
</ul>
<p>For large commercial projects, consider a staged schedule: a deposit for materials, a progress payment after the first batch is installed, and the balance on completion. Each invoice should show the contract total, what has been billed and what remains. This keeps cash flowing when a job runs for several weeks and makes it easier for the client's accounts team to approve each payment.</p>

<h2>What payment terms work for upholstery jobs?</h2>
<p>For households, the most common pattern is a deposit covering materials at approval and the balance due on delivery, paid by card, check or bank transfer. Some shops refuse to release the finished piece until it is paid, which is simpler than chasing a balance afterward. For designers and commercial clients, net 15 or net 30 is common. Whatever you choose, print the due date, accepted payment methods and any storage fee for pieces not collected within a set period (for example, 30 days after completion notice).</p>

<h3>Storage and abandoned pieces</h3>
<p>Customers sometimes leave finished furniture in the shop for weeks. State in your terms how long you hold completed work free of charge after notifying the customer, what daily or weekly storage fee applies after that, and what happens if the piece is never collected. Then show any storage charge as its own dated line on the final invoice.</p>

<h2>Licensing, labels and tax considerations</h2>
<p>Some states regulate upholstery businesses. In California, for example, custom upholsterers must be licensed by the <a href="https://bhgs.dca.ca.gov/">Bureau of Household Goods and Services</a> before operating, and the state has labeling rules for upholstered furniture and filling materials. Other states have no specific license, but you still need any general business license your city or county requires. Our guide on <a href="/blog/how-to-get-a-business-license">how to get a business license</a> covers the basics.</p>
<p>For sales tax, materials that become part of the finished piece are often taxable, while labor rules differ widely by state. Itemize materials, labor and delivery, and confirm the treatment with your state revenue department. Commercial clients buying for resale, such as an interior designer billing their own client, may give you a resale certificate. This is general information, not tax or legal advice. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help you check the math.</p>

<h2>How to create an upholstery invoice step by step</h2>
<ol>
<li><strong>Start from the approved estimate</strong> and fabric choice.</li>
<li><strong>List each piece</strong> with its labor price and any extras such as tufting or welting.</li>
<li><strong>Add fabric</strong> by name, color, yardage and price per yard, or a COM line.</li>
<li><strong>Add foam and supplies</strong> with enough detail for the customer to see what is new.</li>
<li><strong>Add approved repairs</strong> discovered during the job.</li>
<li><strong>Add pickup and delivery.</strong></li>
<li><strong>Apply sales tax</strong> to the correct lines.</li>
<li><strong>Credit the deposit</strong> and show the balance due with the date.</li>
<li><strong>Add terms</strong>: warranty on workmanship, storage fees for uncollected pieces, and care instructions for the fabric.</li>
</ol>

<h2>Common upholstery invoicing mistakes</h2>
<ul>
<li><strong>One lump price for labor and fabric.</strong> It hides your value and complicates tax.</li>
<li><strong>Underestimating yardage on patterned fabric</strong>, then absorbing the extra yard yourself.</li>
<li><strong>Starting without a materials deposit.</strong> Cut fabric is almost impossible to return.</li>
<li><strong>Doing hidden repairs without approval.</strong> Customers dispute surprise charges.</li>
<li><strong>Not charging for pickup and delivery.</strong> Two people and a van for an afternoon is real cost.</li>
<li><strong>No storage policy.</strong> Finished pieces left in your shop for months take up space you need.</li>
</ul>
<p>Interior designers are a valuable referral source for upholsterers. Our <a href="/blog/interior-design-invoice-template">interior design invoice template</a> shows how designers bill their clients for trade work, which helps you agree on who invoices whom.</p>

<p>A clear upholstery invoice template separates labor, fabric, foam, repairs and delivery, credits the deposit and records exactly what went into each piece. Create yours with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and builds a PDF in your browser that you can download and hand over with the finished furniture.</p>
`,
  },
  {
    slug: "laundry-service-invoice-template",
    title: "Laundry Invoice Template: Wash and Fold, Per Pound Pricing",
    description:
      "Laundry invoice template for wash and fold services: per pound pricing, minimums, pickup and delivery, commercial accounts and monthly billing, with examples.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-start-a-laundromat",
      "cleaning-service-invoice-template",
      "recurring-invoices-guide",
    ],
    faqs: [
      {
        q: "How do you charge for wash and fold laundry?",
        a: "Most wash and fold services charge per pound of dry laundry, weighed at pickup or drop-off, with a minimum order such as 10 or 15 pounds. Bulky items like comforters, pillows and sleeping bags are usually priced per piece because they take a full machine. Add-ons such as stain treatment, hypoallergenic detergent, hang-drying and same-day service are charged separately.",
      },
      {
        q: "Should I weigh laundry before or after washing?",
        a: "Most services weigh dry laundry at pickup or drop-off, before washing, and print or message the weight to the customer. That gives an agreed number up front and avoids disputes. Whichever you choose, use a certified or regularly checked scale, weigh in the customer's bag with the bag weight deducted, and record the weight on the ticket and the invoice.",
      },
      {
        q: "Is wash and fold service taxable?",
        a: "It depends on the state and sometimes the city. Some states tax laundry and dry cleaning services, others exempt them, and some exempt coin-operated machines but tax attended services. Pickup and delivery fees may also be treated differently. Check your state revenue department's guidance on laundry services and itemize the invoice so the tax can be applied correctly.",
      },
      {
        q: "How do I bill commercial laundry clients like Airbnb hosts or gyms?",
        a: "Commercial clients usually prefer a monthly invoice listing each pickup with its date and weight or piece count, priced at an agreed contract rate. Set terms such as net 15 or net 30, agree on a minimum per pickup, and keep a delivery signature or photo for each drop-off. A statement at month end showing all invoices and payments helps their bookkeeping.",
      },
      {
        q: "What is a fair minimum order for a laundry service?",
        a: "Minimums are set to cover the fixed cost of a machine cycle, handling and, for delivery services, the driver's time. Many services set a minimum weight per order (for example, 10 to 20 pounds) or a minimum dollar charge for pickup and delivery. Publish it clearly, then show any shortfall as a separate line on the invoice, such as 'Minimum order adjustment.'",
      },
      {
        q: "Who is responsible if an item is damaged in the wash?",
        a: "That depends on your terms. Many laundry services limit liability per item or per order, exclude items that should not be machine-washed, and rely on the garment's care label. The FTC Care Labeling Rule requires most textile clothing to carry care instructions, which gives you a reference point. Put your liability policy on your website, order form and invoice.",
      },
      {
        q: "How do I handle tips for laundry delivery drivers?",
        a: "If you let customers tip in your app or on the invoice, record tips separately from the service charge and pass them to the drivers who earned them. Tips are not part of your sales price, and mandatory delivery or service fees are not tips. Follow payroll rules for employee tips, and keep records so drivers can report their tip income correctly.",
      },
      {
        q: "Should laundry services offer subscriptions?",
        a: "Many do, because subscriptions smooth revenue and simplify billing. A typical plan includes a set number of pounds per month or per week for a fixed price, with overage billed per pound. Invoice the plan amount at the start of each period and add overage on the next invoice. Show both the included pounds and actual pounds so customers can see the value.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A laundry invoice template bills a customer for wash and fold or laundry services. It shows each order's date and weight in pounds at the per-pound rate, any minimum charge, per-piece items such as comforters, add-ons like stain treatment or same-day service, pickup and delivery fees, sales tax where applicable, and the total due or payment received.</p>

<p>Laundry services run on volume and repeat customers. A household might use you every week; an Airbnb host or a salon might send hundreds of pounds a month. Either way, the invoice has to be accurate about weights, simple to read, and easy to pay. This guide covers what a laundry invoice needs, how per-pound pricing and minimums work, worked examples for a household and a commercial account, and the mistakes that cause disputes.</p>

<h2>What is a laundry service invoice?</h2>
<p>A laundry service invoice is a bill from a wash and fold service, laundromat with drop-off service, or laundry pickup and delivery business. It covers:</p>
<ul>
<li><strong>Wash and fold</strong>, priced per pound.</li>
<li><strong>Per-piece items</strong>: comforters, duvets, pillows, blankets, rugs, sleeping bags.</li>
<li><strong>Add-ons</strong>: stain treatment, special detergents, hang-dry, ironing, rush service.</li>
<li><strong>Logistics</strong>: pickup and delivery, bags or hampers.</li>
<li><strong>Commercial work</strong>: linens and towels for rentals, salons, gyms, spas, restaurants and offices.</li>
</ul>
<p>Retail customers often pay at drop-off or through an app, so a receipt is enough. Commercial clients, subscriptions and delivery customers on account need proper invoices. If you are setting up a business, our guide on <a href="/blog/how-to-start-a-laundromat">how to start a laundromat</a> covers equipment, leases and adding wash and fold.</p>

<h2>What should a laundry invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Business details</td><td>Name, address, phone, email, website or app</td></tr>
<tr><td>Invoice details</td><td>Invoice number, date, due date, account number for commercial clients</td></tr>
<tr><td>Customer</td><td>Name, pickup and delivery address, contact</td></tr>
<tr><td>Order lines</td><td>Order or ticket number, pickup date, weight in pounds, rate, amount</td></tr>
<tr><td>Per-piece items</td><td>Item, quantity, price each</td></tr>
<tr><td>Add-ons</td><td>Stain treatment, hypoallergenic detergent, hang-dry, rush</td></tr>
<tr><td>Fees</td><td>Pickup and delivery, minimum order adjustment, lost bag fee</td></tr>
<tr><td>Totals</td><td>Subtotal, tax if applicable, tips if collected, total, payments, balance</td></tr>
<tr><td>Terms</td><td>Payment terms, liability limits, items not accepted, unclaimed laundry policy</td></tr>
</tbody></table>
<p>The order or ticket number on each line is the link between the scale, the bag and the bill. If a customer questions a weight, you can go straight to the ticket.</p>

<h2>How much do laundry services charge per pound?</h2>
<p>Wash and fold pricing varies by city, service level and whether pickup and delivery is included. The structure below is <strong>illustrative only</strong>; research local competitors and your own costs (labor per pound, utilities, detergent, equipment and drivers) before setting rates.</p>
<table><thead><tr><th>Service</th><th>Common unit</th><th>Illustrative range</th></tr></thead><tbody>
<tr><td>Drop-off wash and fold</td><td>Per pound</td><td>$1.25 to $2.50</td></tr>
<tr><td>Pickup and delivery wash and fold</td><td>Per pound</td><td>$1.75 to $3.00</td></tr>
<tr><td>Minimum order</td><td>Pounds or dollars</td><td>10 to 20 lb, or $20 to $40</td></tr>
<tr><td>Comforter or duvet</td><td>Per piece</td><td>$15 to $35</td></tr>
<tr><td>Bed pillow</td><td>Per piece</td><td>$5 to $12</td></tr>
<tr><td>Stain treatment</td><td>Per item</td><td>$2 to $5</td></tr>
<tr><td>Same-day or rush</td><td>Per pound or flat</td><td>Surcharge</td></tr>
<tr><td>Commercial linens</td><td>Per pound or per piece</td><td>Contract rate</td></tr>
</tbody></table>
<p>Commercial rates are usually lower per pound in exchange for volume and a regular schedule. Use our guide to <a href="/blog/how-to-calculate-profit-margin">calculating profit margin</a> to check that a discounted contract rate still covers labor and utilities, and keep your public rates in a <a href="/blog/price-list-template">price list</a>.</p>

<h2>Laundry invoice example: household wash and fold</h2>
<p>A household customer uses pickup and delivery once. Prices are illustrative, and this example state does not tax laundry services.</p>
<p><strong>Invoice LD-2026-1184</strong> | Picked up: October 20, 2026 | Delivered: October 21, 2026 | Paid by card on file</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wash and fold, ticket 55821 (weighed dry at pickup)</td><td>23 lb</td><td>$2.00</td><td>$46.00</td></tr>
<tr><td>Queen comforter</td><td>1</td><td>$25.00</td><td>$25.00</td></tr>
<tr><td>Stain treatment</td><td>2</td><td>$3.00</td><td>$6.00</td></tr>
<tr><td>Hypoallergenic detergent</td><td>1</td><td>$3.00</td><td>$3.00</td></tr>
<tr><td>Pickup and delivery</td><td>1</td><td>$5.99</td><td>$5.99</td></tr>
<tr><td><strong>Total charged October 21, 2026</strong></td><td></td><td></td><td><strong>$85.99</strong></td></tr>
</tbody></table>

<h2>Laundry invoice example: monthly commercial account</h2>
<p>A short-term rental host has weekly pickups of sheets and towels. The service bills monthly on net 15 terms at a contract rate of $1.60 per pound. Prices are illustrative.</p>
<p><strong>Invoice LD-2026-C-031</strong> | Account: Harbor View Rentals | Period: October 1 to 31, 2026 | Issued: November 1, 2026 | Due: November 16, 2026</p>
<table><thead><tr><th>Date and ticket</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oct 1, T-7701</td><td>Linens and towels, wash and fold</td><td>96 lb</td><td>$1.60</td><td>$153.60</td></tr>
<tr><td>Oct 8, T-7764</td><td>Linens and towels, wash and fold</td><td>104 lb</td><td>$1.60</td><td>$166.40</td></tr>
<tr><td>Oct 15, T-7829</td><td>Linens and towels, wash and fold</td><td>110 lb</td><td>$1.60</td><td>$176.00</td></tr>
<tr><td>Oct 22, T-7893</td><td>Linens and towels, wash and fold</td><td>102 lb</td><td>$1.60</td><td>$163.20</td></tr>
<tr><td>Oct 1 to 22</td><td>Duvets, per piece</td><td>6</td><td>$25.00</td><td>$150.00</td></tr>
<tr><td>Oct 1 to 22</td><td>Stain treatment</td><td>8</td><td>$3.00</td><td>$24.00</td></tr>
<tr><td>Oct 1 to 22</td><td>Pickup and delivery</td><td>4</td><td>$10.00</td><td>$40.00</td></tr>
<tr><td></td><td><strong>Total due by November 16, 2026</strong></td><td></td><td></td><td><strong>$873.20</strong></td></tr>
</tbody></table>
<p>Total weight is 412 pounds, or $659.20 of wash and fold. Listing each ticket with its date lets the host match pickups to guest turnovers. If the October 29 pickup were skipped because of no bookings, the invoice simply shows four lines instead of five. For clients like this, our guide to <a href="/blog/recurring-invoices-guide">recurring invoices</a> explains how to automate the monthly cycle, and a <a href="/blog/statement-of-account">statement of account</a> helps when several invoices are open. Rental hosts can also see how their own guests are billed in our <a href="/blog/vacation-rental-invoice-template">vacation rental invoice template</a>.</p>
<p>You can create both invoice types in the <a href="/invoice-generator">free invoice generator</a> by adding one line per ticket.</p>

<h2>How to set up a commercial laundry account</h2>
<p>Commercial accounts, such as rental hosts, salons, gyms, spas, restaurants and small clinics, can provide steady volume, but they need structure from the start:</p>
<ol>
<li><strong>Agree a written rate sheet</strong>: per-pound rate, per-piece items, minimum per pickup, rush charges and delivery fees.</li>
<li><strong>Set the schedule</strong>: pickup days, turnaround time and who signs for deliveries.</li>
<li><strong>Collect billing details</strong>: legal business name, billing email, any PO number and the person who approves invoices.</li>
<li><strong>Set payment terms</strong>: card on file, or net 15 or net 30 for established accounts, with a late fee stated in advance.</li>
<li><strong>Define liability</strong>: what happens to lost or damaged linens and how claims are reported.</li>
</ol>
<p>Then invoice on a fixed cycle (weekly or monthly) with one line per ticket. Regular, predictable invoices with the same layout every period get approved and paid faster than irregular ones.</p>

<h2>How to bill laundry subscriptions and memberships</h2>
<p>Subscriptions are increasingly common in wash and fold, especially for busy households and students. A plan might include 60 pounds per month for a fixed price, with extra pounds billed at a reduced rate. The invoice should show the plan, what was included and any overage, so customers see the value of staying subscribed.</p>
<table><thead><tr><th>Line</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly plan, November 2026 (includes 60 lb and weekly pickup)</td><td>1</td><td>$99.00</td><td>$99.00</td></tr>
<tr><td>Overage, October 2026 (72 lb used, 12 lb over plan)</td><td>12 lb</td><td>$1.75</td><td>$21.00</td></tr>
<tr><td><strong>Total charged November 1, 2026</strong></td><td></td><td></td><td><strong>$120.00</strong></td></tr>
</tbody></table>
<p>The plan is billed in advance and overage in arrears, which is the usual pattern for usage-based plans. State whether unused pounds roll over, how to pause or cancel, and when the card is charged. If you change plan prices, give notice before the next billing date. Our guide to <a href="/blog/usage-based-billing-invoice">usage-based billing invoices</a> covers the general structure.</p>

<h2>How should you price pickup and delivery?</h2>
<p>Pickup and delivery is often where a laundry service wins or loses money, because driver time and fuel are paid on every trip regardless of order size. Common approaches:</p>
<ul>
<li><strong>Flat fee per trip</strong>, such as a few dollars, often waived above a minimum order.</li>
<li><strong>Built into a higher per-pound rate</strong> for delivery customers, with no separate fee.</li>
<li><strong>Zone pricing</strong>, with a higher fee for addresses outside your core route.</li>
<li><strong>Route days</strong>, where pickups in each neighborhood happen on set days, keeping routes efficient.</li>
</ul>
<p>Whichever method you choose, show the fee as its own invoice line, even when it is zero, so customers see the value. If drivers are employees and customers can tip, keep tips on a separate line and pass them through in payroll.</p>

<h2>Is laundry service taxable?</h2>
<p>Sales tax on laundry is set at the state level and sometimes the local level, and the rules differ more than most owners expect. Some states tax laundry and dry cleaning as a service, others exempt them, and some treat self-service coin laundry differently from attended wash and fold. Delivery fees and products sold (detergent, bags) may have their own rules. Check your state revenue department's guidance, and see our overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a>. This is general information, not tax advice.</p>

<h2>How to protect your laundry business on the invoice</h2>
<p>Damage and loss claims are the main source of disputes for laundry services. Put clear terms on your order form, website and invoice:</p>
<ul>
<li><strong>Items not accepted</strong>: dry-clean-only garments, leather, heavily soiled items with hazardous materials, items with valuables in pockets.</li>
<li><strong>Care labels</strong>: you wash according to care labels. The <a href="https://www.ftc.gov/legal-library/browse/rules/care-labeling-rule">FTC Care Labeling Rule</a> requires most textile clothing sold in the US to carry care instructions.</li>
<li><strong>Liability limit</strong>: a cap per item or per order, and a deadline for reporting problems (for example, 48 hours after delivery).</li>
<li><strong>Weights</strong>: how you weigh, and that the bag weight is deducted.</li>
<li><strong>Unclaimed laundry</strong>: how long you hold it and any storage charges.</li>
</ul>

<h2>How to create a laundry invoice step by step</h2>
<ol>
<li><strong>Weigh and ticket each order</strong> at pickup or drop-off.</li>
<li><strong>Add one line per ticket</strong> with date, weight and rate.</li>
<li><strong>Add per-piece items and add-ons</strong> separately.</li>
<li><strong>Apply a minimum order adjustment</strong> if the order is below your minimum.</li>
<li><strong>Add pickup and delivery fees.</strong></li>
<li><strong>Apply tax</strong> if your state taxes laundry services.</li>
<li><strong>Record tips separately</strong> if customers add them.</li>
<li><strong>Set terms</strong>: paid at delivery, card on file, or net 15 or <a href="/blog/net-30-payment-terms">net 30</a> for commercial accounts.</li>
</ol>

<h2>Common laundry invoicing mistakes</h2>
<ul>
<li><strong>No weight on the invoice.</strong> Customers cannot check a per-pound bill without it.</li>
<li><strong>Weighing with the bag.</strong> Deduct the bag weight or customers will notice the difference.</li>
<li><strong>One line per month for commercial clients.</strong> List each pickup so they can reconcile.</li>
<li><strong>Mixing tips into revenue.</strong> Keep tips separate for payroll and tax records.</li>
<li><strong>Charging minimums without stating them.</strong> Publish the minimum before the first order.</li>
<li><strong>No liability terms.</strong> One expensive damaged garment can cost more than a month of profit from that customer.</li>
</ul>
<p>Many laundry businesses also offer cleaning or linen services to rental hosts and offices. Our <a href="/blog/cleaning-service-invoice-template">cleaning service invoice template</a> shows how cleaners bill recurring visits, which pairs well with linen service.</p>

<p>A good laundry invoice template makes per-pound pricing transparent, ties every charge to a ticket and weight, and turns commercial accounts into simple monthly bills. Create yours with our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and builds a PDF in your browser that you can download and send to household or business customers.</p>
`,
  },
  {
    slug: "nail-technician-invoice-template",
    title: "Nail Tech Invoice Template: Services, Booth Rent and Tips",
    description:
      "Nail tech and nail salon invoice template: bill manicures, gel and acrylic sets, nail art, bridal parties and booth rent, and record tips the right way.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "salon-invoice-template",
      "no-tax-on-tips-self-employed",
      "makeup-artist-invoice-template",
    ],
    faqs: [
      {
        q: "Do nail technicians need to give clients an invoice?",
        a: "For a walk-in client paying at the chair, a receipt from your point-of-sale system is usually enough. Invoices become important for bridal parties, events, photo shoots, corporate bookings, mobile appointments and any client who pays later or asks for a document for reimbursement. Booth renters and suite owners also invoice each other for rent and products. Use a numbered invoice whenever money is owed rather than paid on the spot.",
      },
      {
        q: "Can nail techs use the no tax on tips deduction?",
        a: "Manicurists and pedicurists, including nail technicians, appear on the IRS list of occupations that customarily and regularly received tips, so qualified tips can count toward the federal deduction of up to $25,000 a year for 2025 through 2028. Self-employed techs are limited to their net income from the business, and income limits apply. Mandatory service charges are not tips. Check irs.gov or a tax professional for your situation.",
      },
      {
        q: "Should tips appear on a nail salon invoice?",
        a: "Tips can appear as a separate line if the client adds them when paying, but they should never be built into the service price or added automatically. Keep them separate from services and products so your records show what was a voluntary tip and what was a charge. An automatic gratuity or party fee is a service charge, not a tip, for tax purposes.",
      },
      {
        q: "What is a booth rent invoice for nail technicians?",
        a: "A booth rent invoice is a bill from a salon owner to an independent nail tech who rents a station or suite, usually weekly or monthly. It lists the rent period, the rent amount, any agreed extras such as products bought from the salon, and the due date. The tech then sets their own prices and collects from their own clients. Both sides should keep the rental agreement on file.",
      },
      {
        q: "Does a booth renter have to send the salon a 1099?",
        a: "A business that pays rent in the course of its trade may have to file Form 1099-MISC for the landlord when payments reach the reporting threshold, which is $2,000 for payments made in 2026. So a booth-renting nail tech may need to issue a 1099-MISC to the salon owner, rather than the other way round, unless an exception applies, such as payments to a corporation. Confirm with the IRS instructions.",
      },
      {
        q: "Are nail services subject to sales tax?",
        a: "In most US states, personal care services such as manicures and pedicures are not subject to sales tax, but a few states and some cities tax them. Retail products you sell, such as polish, cuticle oil or nail kits, are generally taxable. Itemize services and products on the invoice so tax is applied only where it belongs, and check your state rules.",
      },
      {
        q: "How should I charge for nail art?",
        a: "Many techs charge nail art per nail, per set or by time, with tiers such as simple (dots, lines), detailed (hand-painted designs) and 3D or charms. Showing nail art as a separate line from the base service helps clients understand the price and helps you track which add-ons sell. For complex designs, quote the price before you start rather than on the invoice afterward.",
      },
      {
        q: "Can I charge a fee for no-shows and late cancellations?",
        a: "Yes, if your policy is clear before booking, ideally accepted in your booking app or in writing. Common approaches are a deposit that is forfeited for no-shows, or a fee such as 50% of the booked service for late cancellations. Bill it as a separate line or a short cancellation invoice, and apply your policy consistently.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A nail tech invoice template bills a client for nail services such as manicures, pedicures, gel, acrylic or dip sets, fills and nail art, plus products sold, travel for mobile or event work, any deposit paid and the balance due. Tips are recorded on a separate line only when the client chooses to add them. Salon owners also use invoices to bill booth rent.</p>

<p>Most nail appointments end with a quick card payment and a receipt, so many technicians never think about invoices. But as soon as you book bridal parties, photo shoots, mobile appointments, corporate events or rent a booth, you need a proper nail salon invoice: numbered, itemized and clear about deposits, products and tips. This guide covers what to include, how to handle tips and the no tax on tips deduction, a bridal party example, a booth rent example and the mistakes to avoid.</p>

<h2>What is a nail technician invoice?</h2>
<p>A nail technician invoice is a bill from a nail tech or nail salon to a client for nail care services and related products. Nail techs commonly invoice for:</p>
<ul>
<li><strong>Events and bridal parties</strong>, often on location with a deposit.</li>
<li><strong>Mobile appointments</strong> at homes, offices, hotels or care facilities.</li>
<li><strong>Photo shoots and productions</strong>, billed to a brand, photographer or agency.</li>
<li><strong>Corporate wellness or pop-up events</strong>, billed to the company.</li>
<li><strong>Booth or suite rent</strong>, billed by the salon owner to an independent tech.</li>
</ul>
<p>Hair stylists face many of the same questions. Our <a href="/blog/salon-invoice-template">salon invoice template</a> covers hair services and booth rent in more detail, and our <a href="/blog/makeup-artist-invoice-template">makeup artist invoice template</a> covers bridal beauty billing that often runs alongside nail bookings.</p>

<h2>What should a nail salon invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Business details</td><td>Salon or tech name, address, phone, email, booking link, license number if your state requires display</td></tr>
<tr><td>Invoice details</td><td>Invoice number, date, due date</td></tr>
<tr><td>Client</td><td>Name, phone, email; company name for corporate bookings</td></tr>
<tr><td>Appointment</td><td>Date, time, location (salon or address for mobile work)</td></tr>
<tr><td>Services</td><td>Each service per person: gel manicure, acrylic full set, fill, pedicure, removal</td></tr>
<tr><td>Add-ons</td><td>Nail art, extra length, shape, chrome, French tips, paraffin</td></tr>
<tr><td>Products</td><td>Retail items sold, such as cuticle oil or polish</td></tr>
<tr><td>Fees</td><td>Travel, early start, cancellation or no-show</td></tr>
<tr><td>Payments and tips</td><td>Deposit paid, tip added by client, balance due</td></tr>
<tr><td>Terms</td><td>Cancellation policy, payment methods, service guarantee (for example, free fix within 5 days)</td></tr>
</tbody></table>

<h2>Nail service price list structure</h2>
<p>Prices vary a lot by city, salon type and skill level, so the table below shows <strong>illustrative ranges</strong> only, to help structure your price list. Set your own prices from your time, product costs, booth rent or overhead and local demand.</p>
<table><thead><tr><th>Service</th><th>Illustrative price</th><th>Typical time</th></tr></thead><tbody>
<tr><td>Classic manicure</td><td>$20 to $40</td><td>30 min</td></tr>
<tr><td>Gel manicure</td><td>$35 to $60</td><td>45 to 60 min</td></tr>
<tr><td>Acrylic full set</td><td>$45 to $90</td><td>60 to 90 min</td></tr>
<tr><td>Acrylic or gel fill</td><td>$30 to $60</td><td>45 to 60 min</td></tr>
<tr><td>Dip powder</td><td>$40 to $65</td><td>45 to 60 min</td></tr>
<tr><td>Classic pedicure</td><td>$30 to $55</td><td>45 min</td></tr>
<tr><td>Nail art</td><td>$1 to $10+ per nail</td><td>Varies</td></tr>
<tr><td>Removal</td><td>$10 to $20</td><td>15 to 20 min</td></tr>
</tbody></table>
<p>A clear <a href="/blog/price-list-template">price list</a> helps clients compare options and reduces surprises at checkout. To check that your prices cover product, rent and time, see our guide to <a href="/blog/how-to-calculate-profit-margin">profit margin</a>.</p>

<h2>Nail tech invoice example: bridal party</h2>
<p>A mobile nail tech books a bridal party at the bride's home on the wedding morning. Prices are illustrative. Services are not taxed in this example state.</p>
<p><strong>Invoice NT-2026-0094</strong> | Event: Garcia bridal party | Date: Saturday, October 17, 2026, 7:30 am | Location: 12 Laurel Court | Issued: October 1, 2026 | Balance due: October 15, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Bride: gel manicure with hand-painted accent nails</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Bridesmaids: gel manicure, soft pink</td><td>5</td><td>$45.00</td><td>$225.00</td></tr>
<tr><td>Mother of the bride: classic manicure and pedicure</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Travel fee, 18 miles</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>Early start fee (before 8:00 am)</td><td>1</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td><strong>Total services and fees</strong></td><td></td><td></td><td><strong>$485.00</strong></td></tr>
<tr><td>Less deposit paid August 30, 2026 (non-refundable)</td><td></td><td></td><td>-$100.00</td></tr>
<tr><td><strong>Balance due by October 15, 2026</strong></td><td></td><td></td><td><strong>$385.00</strong></td></tr>
</tbody></table>
<p>If the bride adds a $90 tip on the day, issue a paid receipt showing $385.00 balance paid plus $90.00 tip, rather than editing the service lines. That keeps tips separate in your records. You can build this invoice in the <a href="/invoice-generator">free invoice generator</a>; our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to bill the $100 deposit first.</p>

<h2>How should nail techs handle tips on invoices?</h2>
<p>Tips are voluntary payments the client decides on. For tax and record-keeping purposes, keep them distinct from what you charge:</p>
<ul>
<li><strong>Do not build tips into service prices</strong> or add them automatically. A mandatory gratuity or party fee is a service charge, which is income but not a tip.</li>
<li><strong>Record tips on their own line</strong> on the receipt or payment record, whether paid in cash, by card or through an app.</li>
<li><strong>Employees</strong> must report tips to their employer, and the salon handles payroll reporting.</li>
<li><strong>Self-employed techs and booth renters</strong> report tips as business income.</li>
</ul>
<p>For 2025 through 2028, the federal "no tax on tips" deduction lets eligible workers deduct up to $25,000 of qualified tips a year. Manicurists and pedicurists, including nail technicians, are on the IRS list of occupations that customarily and regularly received tips. For self-employed techs, the deduction cannot exceed net income from the business, income phase-outs apply, and service charges do not count. See the <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions">IRS guidance on the One Big Beautiful Bill provisions</a> and our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>. Tips are still subject to <a href="/blog/self-employment-tax">self-employment tax</a> for independent techs. This is general information, not tax advice.</p>

<p>A practical habit: at the end of each day, total your tips by payment method (cash, card, app) and log them next to your service totals. If you are a booth renter, that daily log, together with your invoices and payment processor reports, is the evidence you would rely on to support both your reported income and any tips deduction.</p>

<h2>Booth rent invoice for nail technicians</h2>
<p>Many nail techs work as independent booth renters: they rent a station or suite from a salon, set their own prices and keep their own clients. The salon owner invoices the renter for rent and any extras. A simple monthly example (illustrative):</p>
<p><strong>Invoice BR-2026-11</strong> | From: Polished Studio LLC | To: Tara Nguyen, independent nail technician | Period: November 2026 | Due: November 1, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Station 3 booth rent, weekly</td><td>4</td><td>$225.00</td><td>$900.00</td></tr>
<tr><td>Shared front desk booking service</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Gel polish restock purchased from salon</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Sales tax on products, 7%</td><td></td><td></td><td>$8.40</td></tr>
<tr><td><strong>Total due November 1, 2026</strong></td><td></td><td></td><td><strong>$1,078.40</strong></td></tr>
</tbody></table>
<p>Some points to get right on booth rent:</p>
<ul>
<li><strong>Keep it a real rental.</strong> If the salon sets the tech's prices, hours and clients, the tech may legally be an employee, whatever the paperwork says. Our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> explains the factors.</li>
<li><strong>1099-MISC for rent.</strong> A booth renter who pays rent in the course of business may need to file <a href="https://www.irs.gov/forms-pubs/about-form-1099-misc">Form 1099-MISC</a> for the salon owner when rent paid reaches the reporting threshold ($2,000 for payments made in 2026; see our <a href="/blog/1099-nec-threshold-2026">2026 1099 threshold guide</a>), unless an exception such as payment to a corporation applies.</li>
<li><strong>Local rules.</strong> Some states require booth renters to hold their own establishment or booth rental license through the state board of cosmetology.</li>
</ul>

<h2>How to invoice photo shoots, events and corporate bookings</h2>
<p>Nail work for brands, photographers and companies looks more like freelance creative work than a salon visit. The client is usually a business, payment often comes after the job, and the invoice has to fit their accounts payable process.</p>
<ul>
<li><strong>Bill by time or by day.</strong> A half-day or full-day rate for a photo shoot is common, with overtime per hour after the agreed call time. List the call time and wrap time.</li>
<li><strong>Itemize kit and supplies.</strong> Press-on sets, custom nail art prepared in advance, or products bought for the shoot can be billed as separate lines.</li>
<li><strong>Corporate pop-ups.</strong> For a wellness day, bill per guest served or per hour per technician, plus travel and setup.</li>
<li><strong>Get the PO and billing contact</strong> before the job, and print the PO number on the invoice.</li>
<li><strong>Set terms.</strong> Net 15 or net 30 is common for businesses. Send the invoice the same day as the job so the clock starts.</li>
</ul>
<p>Because these clients pay later, you are carrying the cost of your time and products until payment arrives. Set aside money for taxes from each payment; our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> explains how self-employed techs budget for them.</p>
<p>Example lines for a beauty brand shoot: "Nail artist, half-day rate, Oct 21, call 9:00 am, wrap 1:00 pm", "Custom hand-painted press-on sets prepared for 3 models", "Overtime, 1 hour, approved by producer" and "Travel and parking, downtown studio". Each line is easy for the producer to check against the call sheet.</p>

<h2>Do nail salons charge sales tax?</h2>
<p>In most US states, personal care services like manicures and pedicures are not taxable, but some states and localities do tax them, and retail products are generally taxable. Itemize services and products separately, apply tax to the correct lines and check your state's rules. Our overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> is a starting point, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> can confirm the math.</p>

<h2>How to create a nail tech invoice step by step</h2>
<ol>
<li><strong>Confirm the booking</strong>: date, time, location, number of clients and services.</li>
<li><strong>List services per person</strong>, with add-ons such as nail art on separate lines.</li>
<li><strong>Add products sold</strong> and apply tax to them where required.</li>
<li><strong>Add travel and early start fees</strong> for mobile or event work.</li>
<li><strong>Credit the deposit</strong> and show the balance due date, usually before the event.</li>
<li><strong>Leave tips off the invoice</strong> unless the client adds one when paying; then record it on its own line.</li>
<li><strong>Add terms</strong>: cancellation and no-show policy, service guarantee, payment methods.</li>
</ol>

<h2>Common mistakes on nail salon invoices</h2>
<ul>
<li><strong>Adding a "gratuity" automatically</strong> and calling it a tip. It is a service charge.</li>
<li><strong>No deposit for events.</strong> Bridal parties book your whole morning; protect it.</li>
<li><strong>One line for a whole party.</strong> Itemize by person so the payer can split costs.</li>
<li><strong>Mixing products into services</strong>, which makes tax wrong.</li>
<li><strong>No written cancellation policy.</strong> Without it, no-show fees are hard to collect.</li>
<li><strong>Booth rent without an agreement.</strong> Put rent, period, due date and late fees in writing.</li>
</ul>

<p>A clear nail tech invoice template keeps services, products, deposits and tips separate, which makes clients comfortable and keeps your tax records clean. Create one for your next bridal party or booth rent with our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and builds a PDF in your browser that you can download and send to clients.</p>
`,
  },
  {
    slug: "recording-studio-invoice-template",
    title: "Recording Studio Invoice Template: Rates, Mixing, Mastering",
    description:
      "Recording studio invoice template: bill hourly and day rates, engineer time, mixing and mastering per song, session players and deposits, with an EP example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["musician-invoice-template", "voice-over-invoice-template", "deposit-invoice"],
    faqs: [
      {
        q: "How do recording studios charge for time?",
        a: "Most studios charge by the hour with a minimum booking (for example, 2 or 3 hours), or by the day as a lockout of 8 to 12 hours at a discounted rate. Some include an engineer in the rate, while others bill the room and engineer separately. Mixing and mastering are often priced per song rather than by the hour. State which model you use on the quote and invoice.",
      },
      {
        q: "What is a lockout rate in a recording studio?",
        a: "A lockout means the client books the room exclusively for a period, usually a full day, and no one else uses it, so gear and mic setups can stay in place overnight. Lockout rates are usually lower per hour than hourly bookings but are billed whether or not the full time is used. Show the lockout dates and hours included on the invoice, along with the overtime rate.",
      },
      {
        q: "How much do studios charge for mixing and mastering per song?",
        a: "Rates vary widely depending on the engineer's experience, genre, track count and number of revisions included. Independent engineers and small studios often quote per song with a set number of revision rounds, and mastering is usually cheaper per song than mixing. Quote from your own time and market and avoid copying a national average, which can be misleading for your local scene.",
      },
      {
        q: "Who owns the recordings made in a studio?",
        a: "Ownership of the sound recordings and files depends on the agreement. Usually the artist or label paying for the session owns the master recordings, and the studio or engineer is paid for services, but engineers sometimes negotiate credits or points. Studios commonly keep session files until the invoice is paid. Put ownership, file delivery and credits in writing before the session.",
      },
      {
        q: "Should a recording studio take a deposit?",
        a: "Yes. A deposit, often the first session or a percentage of the project, holds the booking and covers the cost of turning away other clients. Make clear when it becomes non-refundable, for example within 72 hours of the session. Credit the deposit on the final invoice. For long projects, bill in stages: tracking, then mixing, then mastering and delivery.",
      },
      {
        q: "Do recording studios charge sales tax?",
        a: "Most states treat recording services as nontaxable services, but rules vary. Some states tax certain digital products or the sale of physical media, and equipment rental may be taxable. If you sell CDs, vinyl or merchandise, those are generally taxable. Itemize services, rentals and products separately on the invoice and check your state's rules.",
      },
      {
        q: "How do I bill session musicians on a studio invoice?",
        a: "If the studio hires and pays the session player, list the fee as a separate line, either at cost or with an agreed markup, and state who the player was and what they played. If the artist hires the musician directly, the musician invoices the artist. Union sessions may have specific scale wages and benefit contributions, so check the applicable agreement.",
      },
      {
        q: "Can I charge for cancellations or late arrivals?",
        a: "Yes, if your booking policy says so. Common terms are a forfeited deposit for cancellations within a set window, and billing from the booked start time even if the client arrives late. Setup time before the client arrives is often not billed, but extra setup they request may be. Put the policy in the booking confirmation and reference it on the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A recording studio invoice template bills an artist, band, label or producer for studio services. It lists room time by the hour or as day lockouts, engineer or producer time, overtime, editing, mixing and mastering per song, session musicians, gear rentals, media or file delivery, any deposit paid and the balance due, with notes on file ownership and delivery.</p>

<p>Studio work mixes time-based billing and project pricing. A band might book two tracking days, add three hours of vocal overdubs, then pay per song for mixing and mastering. Without a clear invoice, it is easy to forget the overtime, the hired drummer or the extra revision round. A well-built recording studio invoice keeps every hour and service visible and makes payment, file delivery and credits straightforward. This guide covers what to include, pricing models, an EP worked example, ownership notes and mistakes to avoid.</p>

<h2>What is a recording studio invoice?</h2>
<p>A recording studio invoice is a bill from a recording studio, independent engineer or producer for recording, editing, mixing, mastering and related services. Clients include solo artists, bands, labels, podcasters, voice actors, ad agencies and video producers. Typical projects:</p>
<ul>
<li><strong>Tracking sessions</strong>: recording instruments and vocals.</li>
<li><strong>Overdubs and editing</strong>: vocal comping, timing and tuning edits.</li>
<li><strong>Mixing</strong>: balancing and processing tracks into a final stereo (or immersive) mix.</li>
<li><strong>Mastering</strong>: final level, tone and format preparation for release.</li>
<li><strong>Voice and podcast sessions</strong>: often billed by the hour with a short minimum.</li>
</ul>
<p>Session players and touring musicians bill differently; see our <a href="/blog/musician-invoice-template">musician invoice template</a>. If you record voice talent for ads and narration, our <a href="/blog/voice-over-invoice-template">voice-over invoice template</a> covers usage and licensing lines that clients will expect.</p>

<h2>What should a recording studio invoice include?</h2>
<table><thead><tr><th>Section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Studio details</td><td>Studio or engineer name, address, phone, email, website</td></tr>
<tr><td>Invoice details</td><td>Invoice number, project name, issue date, due date</td></tr>
<tr><td>Client</td><td>Artist or band name, legal name of the payer, label or management contact</td></tr>
<tr><td>Sessions</td><td>Date, room, start and end time, hours or lockout, rate</td></tr>
<tr><td>Engineer and producer</td><td>Name, hours or flat fee, assistant engineer if billed</td></tr>
<tr><td>Post-production</td><td>Editing hours, mixing per song, mastering per song, revisions included</td></tr>
<tr><td>Third parties</td><td>Session musicians, gear rentals, piano tuning</td></tr>
<tr><td>Deliverables</td><td>Masters, stems, instrumental and clean versions, file formats</td></tr>
<tr><td>Totals</td><td>Subtotal, tax where applicable, deposit, balance due</td></tr>
<tr><td>Terms</td><td>Cancellation, overtime, file retention, delivery on payment, credits</td></tr>
</tbody></table>
<p>Listing deliverables and file formats (for example, 24-bit/48 kHz WAV masters, stems for each song, instrumental versions) prevents the common dispute where the client expected stems and you only quoted stereo mixes.</p>

<h2>How do recording studios price their services?</h2>
<p>Studios use a mix of models. The table below explains them; any amounts in this guide are <strong>illustrative</strong>, because rates vary by room, gear, engineer experience and city.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Good for</th></tr></thead><tbody>
<tr><td>Hourly with minimum</td><td>Room plus engineer per hour, 2 to 3 hour minimum</td><td>Vocals, podcasts, demos</td></tr>
<tr><td>Day lockout</td><td>Exclusive room for 8 to 12 hours at a day rate</td><td>Band tracking, album projects</td></tr>
<tr><td>Room only (dry hire)</td><td>Room and gear, client brings own engineer</td><td>Producers with their own team</td></tr>
<tr><td>Per song</td><td>Flat price per song for mixing or mastering</td><td>Singles, EPs, online clients</td></tr>
<tr><td>Project package</td><td>Fixed price for tracking, mixing and mastering a set number of songs</td><td>Independent artists on a budget</td></tr>
</tbody></table>
<p>Whatever the model, define what is included: number of mix revisions, turnaround time, setup time, and whether files are archived. Per-song and package pricing feels simple to clients but can lose money if revisions are unlimited. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> helps when you bill time.</p>

<h2>Recording studio invoice example: five-song EP</h2>
<p>A band records a five-song EP with two tracking days, an overdub session and mixing and mastering per song. Prices are illustrative, and recording services are not taxed in this example state.</p>
<p><strong>Invoice RS-2026-0061</strong> | Project: The Low Tides, "Harbor Lights" EP | Client: The Low Tides LLC | Issued: October 26, 2026 | Due: November 9, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Studio A day lockout with engineer, 10 hours, Oct 3 and Oct 4</td><td>2</td><td>$650.00</td><td>$1,300.00</td></tr>
<tr><td>Overtime, Oct 4 (approved by band leader at 8:15 pm)</td><td>3 hrs</td><td>$75.00</td><td>$225.00</td></tr>
<tr><td>Vocal overdubs and comping, Studio B, Oct 10</td><td>6 hrs</td><td>$50.00</td><td>$300.00</td></tr>
<tr><td>Session drummer, tracks 2 and 4 (paid by studio, at cost)</td><td>1</td><td>$400.00</td><td>$400.00</td></tr>
<tr><td>Backline rental: vintage bass amp, 1 day</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>Mixing per song, 2 revision rounds included</td><td>5</td><td>$300.00</td><td>$1,500.00</td></tr>
<tr><td>Mastering per song, streaming masters and instrumentals</td><td>5</td><td>$75.00</td><td>$375.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td></td><td><strong>$4,160.00</strong></td></tr>
<tr><td>Less deposit paid September 15, 2026 (first lockout day)</td><td></td><td></td><td>-$650.00</td></tr>
<tr><td>Less progress payment October 10, 2026 (tracking balance)</td><td></td><td></td><td>-$650.00</td></tr>
<tr><td><strong>Balance due by November 9, 2026</strong></td><td></td><td></td><td><strong>$2,860.00</strong></td></tr>
</tbody></table>
<p><em>Notes on the invoice:</em> "Deliverables: 24-bit/48 kHz WAV masters, instrumental versions and stems for all five songs, delivered by download link on receipt of final payment. Session files archived for 12 months. Engineer credit: Sam Ortiz (recording and mixing)." You can create this invoice in the <a href="/invoice-generator">free invoice generator</a>, with session dates in each line and the delivery terms in the notes field.</p>

<h2>How to bill podcast, voice and corporate audio sessions</h2>
<p>Many studios fill weekday hours with podcasts, voice-over sessions, audiobook recording and corporate audio. These clients bill differently from bands:</p>
<ul>
<li><strong>Short hourly minimums.</strong> A one-hour minimum with billing in 15- or 30-minute increments after that is common for voice sessions.</li>
<li><strong>Remote connections.</strong> Live-directed sessions over a remote patch service may carry a connection fee; list it separately.</li>
<li><strong>Editing per finished hour.</strong> Podcast and audiobook editing is often priced per finished minute or hour of audio, not per hour of work. State the basis on the invoice.</li>
<li><strong>Recurring clients.</strong> A weekly podcast can be billed monthly with one line per episode, or on a monthly package fee. Our guide to <a href="/blog/retainer-invoice">retainer invoices</a> shows how to bill a fixed monthly package.</li>
<li><strong>Agencies and corporate clients.</strong> Expect PO numbers, vendor forms and net 30 terms. Put the PO and the agency's job number on every invoice.</li>
</ul>
<p>Example podcast invoice lines: "Episode 41 recording, Studio B, 1.5 hours", "Episode 41 editing and mastering, 52 finished minutes" and "Remote guest connection fee". If you also cut video for the same clients, our <a href="/blog/video-editing-invoice-template">video editing invoice template</a> covers per-minute and per-project pricing.</p>
<p>Keep numbering consistent across all of these jobs. A simple <a href="/blog/invoice-numbering-system">invoice numbering system</a> such as RS-2026-0061 makes it easy to find a session when a label or agency asks about an old invoice months later.</p>

<h2>Who owns the recordings, and what should the invoice say?</h2>
<p>Ownership is a contract question, not an invoicing one, but the invoice should reflect the agreement. In most independent projects, the artist or label paying for the sessions owns the master recordings, and the studio and engineer are paid for services. Producers may negotiate royalties (points) or other terms. Under US copyright law, sound recordings are a distinct category of work; the US Copyright Office's <a href="https://www.copyright.gov/circs/circ56.pdf">circular on copyright registration for sound recordings</a> explains how they are treated.</p>
<p>Practical points to put on the quote and invoice:</p>
<ul>
<li><strong>Delivery on payment.</strong> Final masters and stems are released when the balance is paid.</li>
<li><strong>File retention.</strong> How long you keep session files and whether archiving beyond that costs extra.</li>
<li><strong>Credits.</strong> How the engineer, producer and studio are credited on releases.</li>
<li><strong>Samples and clearances.</strong> The client is responsible for clearing samples and cover licenses.</li>
</ul>
<p>Holding files until payment is common and fair if it is stated in advance; it should not be used to renegotiate the price after the fact.</p>

<h2>How to structure deposits and staged payments</h2>
<p>Studio time is perishable: an empty day cannot be sold later. Protect it with a deposit and staged billing:</p>
<table><thead><tr><th>Stage</th><th>When</th><th>Typical amount</th></tr></thead><tbody>
<tr><td>Booking deposit</td><td>When dates are confirmed</td><td>First session or a percentage of the project</td></tr>
<tr><td>Tracking balance</td><td>End of tracking</td><td>Remaining room and engineer time</td></tr>
<tr><td>Mix and master</td><td>On approval of final mixes</td><td>Per-song charges and extras</td></tr>
</tbody></table>
<p>Our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to bill the first payment, and our guide to <a href="/blog/milestone-payments">milestone payments</a> covers staged billing in more detail. For short-notice cancellations, a <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> keeps the charge separate from the project invoice.</p>

<h3>What if a client stops paying mid-project?</h3>
<p>Projects stall: a band splits up, a label changes its plans, or an artist runs out of money after tracking. Staged billing limits the damage, because tracking time is paid before mixing starts. If a balance is overdue, send a polite reminder with the invoice attached, then a firmer notice that refers to your written terms on file delivery and late fees. Keep the session files archived as agreed and release them once the balance is settled. Record every reminder with its date, so you have a clear history if you later need to escalate the debt or use small claims court.</p>

<h2>Do recording studios charge sales tax?</h2>
<p>In most US states, recording, mixing and mastering are treated as services and are not subject to sales tax, but rules vary. Equipment rental, physical media such as CDs or vinyl, and merchandise are commonly taxable. Some states tax certain digital products. Itemize services, rentals and products separately, and check your state revenue department's guidance. This is general information, not tax advice.</p>

<h2>How to create a recording studio invoice step by step</h2>
<ol>
<li><strong>Log every session</strong> with date, room, start and end times and the engineer.</li>
<li><strong>Add room and engineer time</strong> as hours or lockout days.</li>
<li><strong>Add overtime</strong> with who approved it and when.</li>
<li><strong>Add editing, mixing and mastering</strong> per song or per hour, with revisions included.</li>
<li><strong>Add third-party costs</strong>: session players, rentals, tuning.</li>
<li><strong>List deliverables and formats</strong> in the notes.</li>
<li><strong>Credit deposits and progress payments</strong>, then show the balance and due date.</li>
<li><strong>Add terms</strong>: delivery on payment, file retention, credits, cancellation.</li>
</ol>

<h2>Common recording studio invoicing mistakes</h2>
<ul>
<li><strong>Not logging overtime</strong> at the time it happens. Bands rarely remember agreeing at midnight.</li>
<li><strong>Unlimited mix revisions.</strong> State how many rounds are included and the rate for extras.</li>
<li><strong>Unclear deliverables.</strong> Stems, instrumentals and clean versions are separate pieces of work.</li>
<li><strong>Paying session players without a line on the invoice</strong>, which turns a pass-through into a loss.</li>
<li><strong>Releasing masters before payment.</strong> Once files are out, collection gets much harder.</li>
<li><strong>No session log.</strong> Keep a simple log of each session with start and end times, room, engineer and what was recorded. It answers most billing questions before they become disputes, and it makes the final invoice quick to prepare.</li>
<li><strong>Billing the band, not the payer.</strong> Invoice the legal entity or person who agreed to pay.</li>
</ul>

<p>A clear recording studio invoice template captures every session, every song and every deliverable, so artists know what they paid for and you get paid before the masters leave the building. Create yours with our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and builds a PDF in your browser that you can download and send to the artist, band or label.</p>
`,
  },
];
