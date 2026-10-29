import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_AD: PostDraft[] = [
  {
    slug: "appraisal-invoice-template",
    title: "Appraisal Invoice Template: AMC, Lender and Private Work",
    description:
      "Appraisal invoice template for real estate appraisers: AMC vs direct orders, report types, the new URAR, fees, retainers and two complete example invoices.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "home-inspection-invoice-template",
      "real-estate-commission-invoice",
      "notary-invoice-template",
    ],
    faqs: [
      {
        q: "Who pays for a home appraisal?",
        a: "For a mortgage, the borrower usually pays the appraisal fee, either upfront to the lender or appraisal management company, or at closing. The fee appears on the Loan Estimate and Closing Disclosure. For private assignments such as estate, divorce or tax appeal appraisals, the client who orders the appraisal pays the appraiser directly, typically before the report is delivered.",
      },
      {
        q: "Can an appraiser's fee depend on the value?",
        a: "No. USPAP's Ethics Rule prohibits accepting an assignment or a compensation arrangement that is contingent on reporting a predetermined result, a direction in value, a specific value, or a subsequent event such as the loan closing. Fees must be set by the work involved, such as property type, complexity, distance and turnaround, never by the value conclusion.",
      },
      {
        q: "What is the difference between an AMC and a direct lender order?",
        a: "An appraisal management company (AMC) receives orders from lenders, assigns them to appraisers on its panel, handles quality review and pays the appraiser. With a direct order, the lender engages the appraiser itself and pays them directly. AMC orders usually come through an online platform with standardized invoicing, while direct and private work is billed on the appraiser's own invoice.",
      },
      {
        q: "What does 'customary and reasonable' appraisal fee mean?",
        a: "Under Regulation Z (12 CFR 1026.42(f)), for consumer loans secured by a principal dwelling, creditors and their agents, including AMCs, must pay fee appraisers at a rate that is customary and reasonable for comparable appraisal services in the property's geographic market. Fee surveys and recent market rates are used to support compliance. It sets a standard for what lenders pay, not a fixed price.",
      },
      {
        q: "Should appraisers collect payment before delivering the report?",
        a: "For private clients, yes in most cases. Many appraisers collect full payment or a retainer at engagement, and deliver the signed report after payment. For lender and AMC work, payment terms are set by the client's agreement, often within a set number of days after delivery. Put your payment policy in your engagement letter and on the invoice.",
      },
      {
        q: "What is a trip fee on an appraisal invoice?",
        a: "A trip fee covers a wasted inspection visit, for example when the property is locked, the occupant cancels at the door, or the home is not ready for a completion inspection. Many appraisers charge a flat trip fee to compensate for travel and time. State it in your engagement terms and bill it as a separate line with the date and reason.",
      },
      {
        q: "How much does an appraisal update or recertification cost?",
        a: "An update of a prior appraisal or a completion certification is usually priced lower than a full appraisal because it involves a shorter inspection or desk review and less reporting. Prices vary by market and client. Bill it as a separate invoice referencing the original report number and effective date, and identify the update or completion report type.",
      },
      {
        q: "Do appraisers issue 1099s or receive them?",
        a: "Independent fee appraisers generally receive Form 1099-NEC from AMCs, lenders or businesses that pay them $2,000 or more for services in 2026, if the appraiser is not a corporation. Individual homeowners paying for a personal appraisal do not issue 1099s. Provide a W-9 to business clients when you join their panel or with your first invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An appraisal invoice template bills a lender, AMC or private client for a real estate appraisal. It shows the appraiser's details and license number, the client, property address, intended use, report type (for example, the redesigned URAR or an exterior-only report), effective date, fee, any rush or complexity surcharge, retainer received and balance due.</p>

<p>Most mortgage appraisal work is billed through appraisal management company platforms, but appraisers still need their own invoice for direct lender orders, estate and divorce work, tax appeals and other private assignments. This guide covers how appraisal fees are set, the difference between AMC and direct work, the report types you will list on invoices in 2026, and two complete example invoices.</p>

<h2>What is an appraisal invoice?</h2>
<p>An appraisal invoice is a bill from a licensed or certified real estate appraiser, or an appraisal firm, for preparing an appraisal report. It identifies the assignment (property, client, intended use, report type and effective date) and the fee. Because appraisal reports are prepared under the Uniform Standards of Professional Appraisal Practice (USPAP), the invoice should never suggest that the fee depends on the value reached or on the loan closing.</p>
<p>Clients fall into two broad groups:</p>
<ul>
<li><strong>Lender work:</strong> purchase and refinance appraisals ordered by a lender directly or through an appraisal management company (AMC).</li>
<li><strong>Private or non-lending work:</strong> date-of-death and estate appraisals, divorce settlements, property tax appeals, PMI removal, pre-listing and pre-purchase appraisals, litigation and relocation.</li>
</ul>
<p>Home inspectors often serve the same buyers; if you offer both services, see our <a href="/blog/home-inspection-invoice-template">home inspection invoice template</a> for that side of the business.</p>

<h2>AMC vs direct orders: how appraisers get paid</h2>
<table><thead><tr><th>Feature</th><th>AMC order</th><th>Direct lender order</th><th>Private client</th></tr></thead><tbody>
<tr><td>Who engages you</td><td>The AMC, on behalf of a lender</td><td>The lender</td><td>Homeowner, attorney, executor, CPA</td></tr>
<tr><td>Who pays you</td><td>The AMC</td><td>The lender</td><td>The client</td></tr>
<tr><td>Fee set by</td><td>AMC fee schedule or bid, subject to customary and reasonable rules</td><td>Lender agreement</td><td>Your quote and engagement letter</td></tr>
<tr><td>Invoicing</td><td>Usually through the AMC's ordering platform</td><td>Your invoice or the lender's platform</td><td>Your invoice</td></tr>
<tr><td>Payment timing</td><td>Per AMC terms, often after delivery</td><td>Per agreement</td><td>Typically upfront or before report delivery</td></tr>
</tbody></table>
<p>For consumer loans secured by a principal dwelling, Regulation Z requires creditors and their agents, including AMCs, to pay fee appraisers a rate that is customary and reasonable for comparable services in the property's geographic market (<a href="https://www.consumerfinance.gov/rules-policy/regulations/1026/42/">12 CFR 1026.42(f)</a>). The borrower's appraisal fee may be higher than what you receive, because the AMC keeps a management fee. Your invoice to the AMC should show your fee, not the borrower's total.</p>

<h2>Which report types go on an appraisal invoice in 2026?</h2>
<p>Name the report type on every invoice, since it drives the fee. Fannie Mae and Freddie Mac have been rolling out the Uniform Appraisal Dataset (UAD) 3.6 and the redesigned Uniform Residential Appraisal Report (URAR), which replaces the legacy form set, including the familiar Form 1004. According to <a href="https://sf.freddiemac.com/faqs/uad-and-forms-redesign">Freddie Mac's UAD FAQ</a>, UAD 3.6 is mandatory for new appraisal reports submitted to the Uniform Collateral Data Portal on or after November 2, 2026. The GSEs have announced a limited exception process for some lenders, and FHA and VA follow their own timelines, so check current guidance for each client.</p>
<table><thead><tr><th>Legacy form (still seen on older orders and non-GSE work)</th><th>Use</th></tr></thead><tbody>
<tr><td>Form 1004 (URAR)</td><td>Single-family home, interior and exterior inspection</td></tr>
<tr><td>Form 1073</td><td>Condominium unit</td></tr>
<tr><td>Form 1025</td><td>2 to 4 unit residential income property</td></tr>
<tr><td>Form 2055</td><td>Exterior-only (drive-by) inspection</td></tr>
<tr><td>Form 1004D</td><td>Appraisal update and/or completion report</td></tr>
</tbody></table>
<p>Under UAD 3.6, these property types are handled within the single, dynamic redesigned URAR. For invoices, describe the assignment in plain words, for example "Redesigned URAR, single-family, interior inspection" or "Completion inspection for report 26-1184." Private assignments may use narrative or restricted reports; describe those as well, for example "Retrospective appraisal report, effective date of death March 14, 2026."</p>

<h2>How are appraisal fees set?</h2>
<p>Fees reflect the time and risk involved, not the value. Common factors:</p>
<ul>
<li><strong>Property type and complexity:</strong> acreage, outbuildings, unique homes, mixed use, 2 to 4 units</li>
<li><strong>Report type:</strong> full interior inspection, exterior-only, desk, update or completion</li>
<li><strong>Location:</strong> rural travel, limited comparable sales</li>
<li><strong>Turnaround:</strong> rush fees for faster delivery</li>
<li><strong>Purpose:</strong> retrospective (date-of-death), litigation or tax appeal work often takes more research, and expert testimony is billed separately, usually hourly</li>
</ul>
<p>USPAP's Ethics Rule prohibits compensation contingent on reporting a predetermined result, a direction in value, a specific value or a subsequent event, such as the loan closing. So you will not see a "success fee" on a legitimate appraisal invoice. Fees in the examples below are illustrative; check local fee surveys and AMC schedules for your market.</p>

<h2>What should an appraisal invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Appraiser or firm</td><td>Name, address, phone, email, state license or certification number</td></tr>
<tr><td>Client</td><td>Lender, AMC, attorney or individual, with address</td></tr>
<tr><td>Invoice and order numbers</td><td>Your invoice number, client order number, loan number if lender work</td></tr>
<tr><td>Property</td><td>Full address and parcel number if useful</td></tr>
<tr><td>Assignment</td><td>Intended use, report type, effective date, inspection date</td></tr>
<tr><td>Fees</td><td>Base fee, complexity or rush surcharge, trip fee, expert testimony hours</td></tr>
<tr><td>Payments</td><td>Retainer or prepayment received</td></tr>
<tr><td>Terms</td><td>Due date, payment methods, report release policy</td></tr>
</tbody></table>
<p>Keep borrower personal information to what the client already has. For lender work, the property address and loan or order number are enough to match the invoice.</p>

<h2>Appraisal invoice example: private estate appraisal</h2>
<p>An executor needs a retrospective appraisal of a single-family home on five acres, as of the date of death, to support the stepped-up cost basis. The appraiser collected a 50% retainer at engagement and agreed to a rush turnaround.</p>
<p><strong>Valley Ridge Appraisal LLC</strong> (Certified Residential Appraiser, License #CR-000000) | Invoice VR-2026-0921 | Date: October 29, 2026 | Due: on receipt, before report release<br>Bill to: Estate of Harold Simmons, c/o Laura Simmons, Executor<br>Property: 418 County Road 12, Millbrook | Intended use: estate tax and cost basis | Effective date: March 14, 2026 | Inspection: October 22, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Retrospective appraisal report, single-family, interior and exterior inspection</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Complexity surcharge: 5 acres with detached barn</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td>Rush delivery (7 business days)</td><td>1</td><td>$100.00</td><td>$100.00</td></tr>
<tr><td colspan="3"><strong>Total fee</strong></td><td><strong>$900.00</strong></td></tr>
<tr><td colspan="3">Retainer received October 15, 2026</td><td>-$450.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$450.00</strong></td></tr>
</tbody></table>
<p>Terms: "Fee is not contingent on the value conclusion or any subsequent event. The signed report is released on receipt of the balance. Court testimony or depositions, if required, are billed separately at $175 per hour." Our <a href="/invoice-generator">free invoice generator</a> lets you put the assignment details under the client block so the executor's attorney can file it with the report.</p>

<h2>Appraisal invoice example: AMC order</h2>
<p>When an AMC allows or requires a separate invoice, keep it short and match their order details exactly.</p>
<table><thead><tr><th>Field</th><th>Entry</th></tr></thead><tbody>
<tr><td>Client</td><td>Example AMC, Accounts Payable</td></tr>
<tr><td>AMC order number</td><td>ORD-7731942</td></tr>
<tr><td>Loan number</td><td>As shown on the engagement</td></tr>
<tr><td>Property</td><td>27 Birch Lane, Unit 4B</td></tr>
<tr><td>Assignment</td><td>Redesigned URAR, condominium unit, interior inspection, purchase</td></tr>
<tr><td>Report delivered</td><td>November 3, 2026</td></tr>
<tr><td>Agreed fee</td><td>$525.00 (illustrative)</td></tr>
<tr><td>Terms</td><td>Per AMC agreement</td></tr>
</tbody></table>

<h2>Pricing private appraisal assignments</h2>
<p>Private work is where your own invoice matters most, and each type has its own billing quirks.</p>
<table><thead><tr><th>Assignment</th><th>Who orders it</th><th>Billing notes</th></tr></thead><tbody>
<tr><td>Date-of-death (retrospective) appraisal</td><td>Executor, estate attorney, CPA</td><td>Bill the estate, not an heir personally; state the effective date on the invoice</td></tr>
<tr><td>Divorce appraisal</td><td>One spouse, both spouses, or an attorney</td><td>Agree in writing who pays; collect upfront; testimony billed hourly</td></tr>
<tr><td>Property tax appeal</td><td>Homeowner or tax consultant</td><td>Fee must not depend on the tax savings achieved</td></tr>
<tr><td>PMI removal</td><td>Homeowner (often via servicer requirements)</td><td>Check whether the servicer requires an approved appraiser</td></tr>
<tr><td>Pre-listing or pre-purchase</td><td>Seller or buyer</td><td>Simple flat fee, paid before inspection</td></tr>
<tr><td>Litigation or expert witness</td><td>Attorney</td><td>Retainer plus hourly for research, depositions and trial</td></tr>
</tbody></table>
<p>For divorce and litigation work, a retainer is standard because hours are unpredictable. Bill the report as a flat fee and testimony, preparation and travel hourly, drawing down the retainer and sending a <a href="/blog/partial-payment-invoice">partial payment invoice</a> or statement when it runs low. For tax appeals, avoid any arrangement that pays you a share of the tax reduction; that would be a contingent fee under USPAP.</p>
<p>Estate appraisals often come through the estate's accountant. Clear invoices help them, because the appraisal fee is typically an estate administration expense, and the effective date and value support the heirs' cost basis later. Our <a href="/blog/tax-preparer-invoice-template">tax preparer invoice template</a> shows how accountants bill their side of the same estate.</p>

<h2>How to invoice appraisal work step by step</h2>
<ol>
<li><strong>Confirm the engagement.</strong> Get client, intended use, intended users, property, report type and fee in writing before inspection.</li>
<li><strong>Collect a retainer from private clients.</strong> Use a <a href="/blog/deposit-invoice">deposit invoice</a> for 50% or the full fee upfront.</li>
<li><strong>Number invoices to match your workfile.</strong> Using the same number for the invoice and the workfile makes records easy to find. See our guide to an <a href="/blog/invoice-numbering-system">invoice numbering system</a>.</li>
<li><strong>Bill surcharges and trip fees as separate lines.</strong> Never bury them in the base fee.</li>
<li><strong>Send the invoice with or before delivery.</strong> For private clients, release the report once paid. For AMCs, submit through the platform when you deliver.</li>
<li><strong>Track mileage for your own taxes.</strong> The IRS business rate is 76 cents per mile from July 1, 2026; see our <a href="/blog/irs-mileage-rate-2026">mileage rate guide</a>.</li>
<li><strong>Follow up on overdue AMC payments.</strong> Keep a log of delivery dates and payment dates; if a balance is late, use a polite <a href="/blog/overdue-invoice">overdue invoice</a> notice that references the order number.</li>
</ol>

<h2>Taxes and records for independent appraisers</h2>
<p>Most residential fee appraisers are self-employed and report income on Schedule C, often through an LLC. AMCs and lenders typically send Form 1099-NEC when they pay a non-corporate appraiser $2,000 or more for services in 2026, so keep a W-9 on file with each panel. Because no tax is withheld, set aside money for <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> and track deductible costs: license renewals, continuing education, E&amp;O insurance, appraisal software, data subscriptions and mileage.</p>
<p>USPAP's Record Keeping Rule requires a workfile for each assignment, retained for at least five years after preparation or two years after final disposition of any judicial proceeding in which you testified, whichever is later. Keeping the invoice and payment record in the workfile makes it easy to show the fee and engagement terms if a client or regulator asks.</p>

<h2>Common appraisal invoicing mistakes</h2>
<ul>
<li><strong>Language that implies a contingent fee.</strong> Avoid "due at closing" for private work and never tie any line to the value.</li>
<li><strong>Missing license number.</strong> Many clients and attorneys want it on the invoice.</li>
<li><strong>Wrong report type.</strong> With the switch to the redesigned URAR, make sure the invoice and engagement describe the same product.</li>
<li><strong>Delivering private reports before payment.</strong> Once delivered, collection is much harder.</li>
<li><strong>Invoicing the borrower on AMC work.</strong> The AMC engaged you, so the AMC is your client.</li>
<li><strong>Forgetting trip fees and testimony.</strong> Include them in the engagement letter so you can bill them.</li>
</ul>

<h2>Appraisal invoice checklist</h2>
<ul>
<li>Appraiser name, firm and license or certification number</li>
<li>Client name, order number and loan number if applicable</li>
<li>Property address and intended use</li>
<li>Report type, effective date and inspection date</li>
<li>Base fee and separately listed surcharges</li>
<li>Retainer received and balance due</li>
<li>Statement that the fee is not contingent on value</li>
<li>Payment terms and methods</li>
</ul>
<p>An appraisal invoice template that names the assignment, separates surcharges and states your payment policy keeps both AMC and private clients clear on what they are paying for. For private work, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a downloadable PDF right in your browser. Real estate professionals can also see our <a href="/blog/real-estate-commission-invoice">real estate commission invoice</a> guide. This article is general information, not legal advice.</p>
`,
  },
  {
    slug: "horse-boarding-invoice-template",
    title: "Horse Boarding Invoice Template: Board, Farrier + Vet",
    description:
      "Horse boarding invoice template for full, partial and pasture board, with farrier and vet pass-throughs, extra services, late fees and a sample monthly invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["farm-invoice-template", "veterinary-invoice-template", "recurring-invoices-guide"],
    faqs: [
      {
        q: "Is horse board paid in advance?",
        a: "Yes, in most barns. Board is usually due on the first of the month for the month ahead, with a grace period of five to ten days before a late fee applies. Extra services and pass-through charges from the previous month, such as farrier visits, are added to the same invoice. Billing in advance protects the barn, which buys hay and bedding before the month begins.",
      },
      {
        q: "What is the difference between full board and partial board?",
        a: "Full board usually includes a stall, feed and hay, bedding, daily stall cleaning, turnout and bringing horses in, and basic care like holding for the farrier. Partial or semi board shares some of that work with the owner, such as the owner providing grain or cleaning the stall on certain days, at a lower price. The boarding agreement should list exactly what each level includes.",
      },
      {
        q: "Can a barn mark up farrier and vet bills?",
        a: "Some barns pass farrier and vet charges through at cost, while others add a handling fee for scheduling, holding horses and fronting payment. Either approach can work if it is disclosed in the boarding agreement and shown clearly on the invoice. Many owners prefer to pay the farrier and vet directly, which avoids the issue and keeps the barn out of the middle.",
      },
      {
        q: "What happens if a boarder does not pay?",
        a: "Many states have agister's or stablekeeper's lien laws that give a boarding facility a lien on the horse for unpaid board and care, sometimes allowing sale after required notices. The rules vary widely by state. Your boarding agreement should address late fees, notice and lien rights. Talk to a local attorney before enforcing a lien, because mistakes can create liability.",
      },
      {
        q: "Should a horse boarding invoice include sales tax?",
        a: "Boarding is treated differently from state to state. Some states treat it as a nontaxable service or agricultural activity, while others tax certain boarding or care services, and supplies you sell, such as supplements, may be taxable. Check your state's revenue department guidance and keep taxable items on separate lines so you can apply tax only where it is due.",
      },
      {
        q: "How do I bill a horse that arrives mid-month?",
        a: "Prorate board for the first month by the number of days remaining, using a daily rate based on a 30-day month or the actual days in the month. For example, $900 per month is $30 per day on a 30-day basis. State your proration method in the boarding agreement, and bill the full month from the next billing date onward.",
      },
      {
        q: "What extra services do barns usually charge for?",
        a: "Common extras include blanketing in winter, fly spray and fly masks in summer, administering supplements or medication, holding for the vet or farrier, extra stall cleaning, wraps and bandages, lessons, training rides, clipping, and trailering. Price each in a published fee schedule and bill them monthly with dates, so owners can see exactly what was done and when.",
      },
      {
        q: "How much notice should a boarder give before leaving?",
        a: "Thirty days' written notice is the most common requirement in boarding agreements, giving the barn time to fill the stall. If a boarder leaves early without notice, the agreement can require board through the end of the notice period. Settle any balance, including pass-through charges, before the horse leaves, and send a final invoice showing the account at zero.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A horse boarding invoice template bills a horse owner for monthly board and related care. It shows the horse's name, board type (full, partial, pasture or self-care), the monthly rate, extra services such as blanketing or supplement feeding, pass-through charges for farrier and vet visits, any late fee, the due date and the balance owed.</p>

<p>Boarding barns live on predictable monthly income, but the bills that cause disputes are the extras: who paid the farrier, why there is a blanketing charge, whether supplements were included. A clear horse boarding invoice prevents those arguments. This guide explains how boarding is priced, what goes on the invoice, how to handle farrier and vet pass-throughs, and includes a complete monthly invoice example.</p>

<h2>What is a horse boarding invoice?</h2>
<p>A horse boarding invoice is the monthly bill a boarding stable, equestrian center or private farm sends to horse owners for keeping and caring for their horses. It covers the base board fee for the coming month and any additional services or pass-through costs from the previous month. Most barns bill on the first of the month, making it a <a href="/blog/recurring-invoices-guide">recurring invoice</a> similar to rent.</p>
<p>Boarding is often one part of a broader equine or agricultural business. If you also sell hay, eggs or livestock, our <a href="/blog/farm-invoice-template">farm invoice template</a> covers product sales.</p>

<h2>Types of horse board and what they include</h2>
<table><thead><tr><th>Board type</th><th>Typically includes</th><th>Owner provides</th><th>Relative cost</th></tr></thead><tbody>
<tr><td>Full board</td><td>Stall, hay, grain, bedding, daily stall cleaning, turnout and bring-in, feeding 2 to 3 times daily, basic health checks</td><td>Farrier, vet, supplements (often), tack</td><td>Highest</td></tr>
<tr><td>Partial (semi) board</td><td>Stall and turnout, some feeding or cleaning</td><td>Some daily chores, grain or bedding</td><td>Middle</td></tr>
<tr><td>Pasture board</td><td>Turnout with shelter, hay in winter, water, daily checks</td><td>Grain, farrier, vet</td><td>Lower</td></tr>
<tr><td>Self-care (rough) board</td><td>Stall or paddock, facility access</td><td>All feed, bedding, daily care</td><td>Lowest</td></tr>
<tr><td>Training board</td><td>Full board plus a set number of training rides or lessons per week</td><td>Farrier, vet</td><td>Highest</td></tr>
</tbody></table>
<p>Rates vary hugely by region, facility (indoor arena, trails, show barn) and hay prices, so set your own based on costs. A practical approach is to calculate cost per horse per month for hay, grain, bedding, labor, insurance and facility, then add your margin; our guide to <a href="/blog/cost-plus-pricing">cost-plus pricing</a> walks through the method.</p>

<h2>What should a horse boarding invoice include?</h2>
<ul>
<li>Barn name, address, phone and email</li>
<li>Owner name, billing address and email</li>
<li>Invoice number, invoice date, board month and due date</li>
<li>Horse name (and stall or paddock number if useful), one section per horse</li>
<li>Board type and monthly rate</li>
<li>Extra services with dates and quantities (from the previous month)</li>
<li>Pass-through charges: farrier, vet, dentist, chiropractor, with the provider's name and date</li>
<li>Supplies sold: supplements, dewormer, shavings bags</li>
<li>Credits, prepayments and late fees</li>
<li>Total, due date, payment methods and late fee policy</li>
</ul>
<p>When an owner has several horses, list each horse separately with a subtotal. It makes the invoice easier to read, and owners who share costs with a co-owner or leaser can split it correctly.</p>

<h2>How to bill farrier and vet pass-through charges</h2>
<p>Most barns schedule the farrier and vet and hold horses for them. Payment can work three ways:</p>
<ol>
<li><strong>Owner pays the provider directly.</strong> Simplest for the barn. You may still charge a small holding fee for your time.</li>
<li><strong>Barn pays and passes through at cost.</strong> Attach or reference the provider's invoice, and show the date and service.</li>
<li><strong>Barn pays and adds a handling fee.</strong> Disclose this in your boarding agreement, and show the fee as its own line rather than inflating the provider's charge.</li>
</ol>
<p>If you pass through costs, keep copies of the farrier and <a href="/blog/veterinary-invoice-template">veterinary invoices</a> in case an owner asks. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> explains how to show pass-throughs transparently, and our <a href="/blog/materials-markup">materials markup guide</a> covers when a markup is appropriate.</p>

<h2>Horse boarding invoice example</h2>
<p>An owner keeps one horse on full board. The December invoice bills December board in advance plus November extras and pass-throughs. Rates are illustrative.</p>
<p><strong>Willow Creek Stables</strong> | Invoice WC-2612-014 | Date: December 1, 2026 | Due: December 7, 2026<br>Bill to: Megan Torres | Horse: Juniper (Stall 14)</p>
<table><thead><tr><th>Date</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Dec 2026</td><td>Full board, December (stall, hay, grain, bedding, daily turnout)</td><td>1</td><td>$850.00</td><td>$850.00</td></tr>
<tr><td>Nov 2026</td><td>Blanketing service, November (blanket on and off as needed)</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Nov 2026</td><td>Supplement administration (owner-supplied joint supplement)</td><td>1</td><td>$25.00</td><td>$25.00</td></tr>
<tr><td>Nov 12</td><td>Farrier: trim and front shoes, pass-through at cost (provider invoice attached)</td><td>1</td><td>$165.00</td><td>$165.00</td></tr>
<tr><td>Nov 19</td><td>Vet: fall vaccines and wellness exam, pass-through at cost</td><td>1</td><td>$142.00</td><td>$142.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$1,232.00</strong></td></tr>
</tbody></table>
<p>Terms: "Board is due on the 1st and late after the 7th. A $35 late fee applies to unpaid balances after the 10th. Thirty days' written notice is required to end board." You can make this invoice in our <a href="/invoice-generator">free invoice generator</a>, adding the date at the start of each description line.</p>

<h2>How to calculate a horse board rate (worked example)</h2>
<p>Many barns set board by looking at what neighbors charge, then discover they lose money every winter. Start from your own costs instead. The figures below are illustrative for one full-board horse per month; replace them with your actual numbers.</p>
<table><thead><tr><th>Cost per horse per month</th><th>Illustrative amount</th><th>How to estimate it</th></tr></thead><tbody>
<tr><td>Hay</td><td>$240</td><td>Bales per day x days x price per bale</td></tr>
<tr><td>Grain and feed</td><td>$60</td><td>Pounds per day x price per pound</td></tr>
<tr><td>Bedding (shavings)</td><td>$70</td><td>Bags per week x price per bag</td></tr>
<tr><td>Labor (feeding, stalls, turnout)</td><td>$220</td><td>Hours per horse per month x hourly wage and payroll costs</td></tr>
<tr><td>Facility (mortgage or rent, maintenance, utilities)</td><td>$150</td><td>Annual facility costs / horses / 12</td></tr>
<tr><td>Insurance and manure removal</td><td>$40</td><td>Annual premiums and hauling / horses / 12</td></tr>
<tr><td><strong>Total cost</strong></td><td><strong>$780</strong></td><td></td></tr>
</tbody></table>
<p>At $780 of cost, an $850 board rate leaves about $70 a month per horse, or roughly 8%, before any vacancy. One empty stall wipes out the margin from several full ones, so many barns price higher, require 30 days' notice, and charge extras separately. Rerun the math whenever hay prices change, since hay is usually the largest variable cost.</p>
<h3>Multiple horses, co-owners and leases</h3>
<p>When one owner boards several horses, give each horse its own section and subtotal. If a horse is co-owned or leased, agree in writing who receives the invoice. A common setup is that the owner receives the board invoice and settles with the leaser privately, but some barns bill each party for their share. Never split a bill between two people without written agreement from both, or you may end up chasing two partial payments instead of one full one.</p>

<h2>How to set up horse boarding billing step by step</h2>
<ol>
<li><strong>Write a boarding agreement.</strong> Cover board type and inclusions, rates, due date, late fees, pass-through and handling policy, notice to leave, insurance, emergency care authorization and lien rights.</li>
<li><strong>Publish an extra services price list.</strong> Blanketing, supplements, holding, wraps, clipping and trailering. A <a href="/blog/price-list-template">price list template</a> makes this easy.</li>
<li><strong>Keep a daily services log.</strong> A whiteboard or shared sheet where staff record extras by horse and date. This is your evidence when billing.</li>
<li><strong>Bill board in advance on the 1st.</strong> Add the previous month's extras and pass-throughs to the same invoice.</li>
<li><strong>Prorate move-ins and move-outs.</strong> Use a <a href="/blog/prorated-invoice">prorated invoice</a> with a stated daily rate.</li>
<li><strong>Apply late fees consistently.</strong> See our guide to <a href="/blog/late-payment-fees">late payment fees</a> for wording.</li>
<li><strong>Offer autopay or ACH.</strong> Monthly board is ideal for automatic payment, which smooths cash flow.</li>
</ol>

<h2>Liability, liens and legal basics</h2>
<p>Most US states have equine activity liability laws that limit some liability for inherent risks of horse activities, often requiring specific warning signs and contract language. Requirements vary, so check your state's statute and have your boarding agreement reviewed.</p>
<p>Many states also give boarding facilities a statutory lien (often called an agister's or stablekeeper's lien) on a horse for unpaid board and care. The process for enforcing it, including notice periods and sale procedures, differs by state and must be followed exactly. This is similar in concept to a <a href="/blog/mechanics-lien">mechanic's lien</a> for contractors. Clear monthly invoices and a payment record are your best evidence if you ever need to rely on a lien.</p>
<p>Sales tax on boarding varies by state; some treat it as a nontaxable service or agricultural activity, while supplies you sell may be taxable. Check with your state revenue department. This is general information, not legal or tax advice.</p>

<h2>Payment methods and getting boarders to pay on time</h2>
<p>Board is a fixed monthly amount, which makes it ideal for automatic payment. Offer ACH autopay on the 1st, and many late payments simply disappear. Card payments are convenient for owners but cost the barn processing fees on a large monthly amount; some barns accept cards only with a disclosed surcharge where state law and card network rules allow it, while others offer a small discount for ACH or check instead.</p>
<p>For owners who pay manually, send the invoice a few days before the 1st, by email or text, with a pay link. If a payment is late, send a friendly reminder after the grace period, apply the late fee on the stated date, and call the owner if the balance reaches a second month. A short, consistent process protects relationships better than letting balances build and then confronting a boarder over several months of arrears. Keep a ledger or statement for each owner so you can show payments and charges at a glance.</p>

<h2>Seasonal charges and how to explain them</h2>
<p>Boarding costs change through the year, and invoices should explain why. Winter brings blanketing, extra hay when pasture is dormant, and sometimes heated water buckets. Summer brings fly spray, fly masks and extra turnout changes. Rather than raising board unexpectedly, many barns keep a stable base rate and bill seasonal services as extras, or announce a hay surcharge with 30 days' notice when hay prices rise.</p>
<p>If you do raise board, give written notice at least 30 days ahead and show the new rate starting on a clear date. A short note on the invoice the month before ("Board increases to $875 effective February 1, 2027 due to higher hay costs") avoids surprises and complaints.</p>

<h2>Common horse boarding invoicing mistakes</h2>
<ul>
<li><strong>Undocumented extras.</strong> Without a services log, owners dispute blanketing and holding charges.</li>
<li><strong>Bundling pass-throughs into board.</strong> Show farrier and vet charges separately with dates.</li>
<li><strong>Hidden handling fees.</strong> If you charge one, disclose it in the agreement and on the invoice.</li>
<li><strong>Billing in arrears.</strong> Board for the month ahead should be paid before the month starts.</li>
<li><strong>Letting balances grow.</strong> A horse eating hay every day while the owner pays nothing is a fast way to lose money. Follow up early.</li>
<li><strong>No written agreement.</strong> Inclusions, notice and lien rights should be in writing.</li>
</ul>

<h2>Horse boarding invoice checklist</h2>
<ul>
<li>Barn and owner details, invoice number and board month</li>
<li>Horse name and board type</li>
<li>Monthly board rate</li>
<li>Extras with dates and quantities</li>
<li>Farrier, vet and other pass-throughs with provider and date</li>
<li>Supplies sold and any taxable items</li>
<li>Late fee policy, due date and payment methods</li>
<li>Notice-to-leave reminder</li>
</ul>
<p>A horse boarding invoice template that separates board, extras and pass-through charges keeps owners confident and your barn paid on time. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a PDF in your browser that you can download and email to boarders each month.</p>
`,
  },
  {
    slug: "youtube-sponsorship-invoice-template",
    title: "YouTube Sponsorship Invoice Template for Creators (2026)",
    description:
      "YouTube sponsorship invoice template: integration vs dedicated video fees, usage rights, exclusivity, FTC disclosure and net terms with brands, plus an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["influencer-invoice-template", "youtuber-taxes", "ugc-creator-invoice"],
    faqs: [
      {
        q: "When should a YouTuber send a sponsorship invoice?",
        a: "It depends on the contract. Common options are 50% when the contract is signed and 50% after the video goes live, or 100% after the video is published, with net 30 terms. For new brands or smaller companies, ask for a deposit upfront. Always invoice on the trigger date in the contract, and include the live video link in the final invoice.",
      },
      {
        q: "What is the difference between an integration and a dedicated video?",
        a: "An integration is a segment, often 30 to 90 seconds, promoting the sponsor inside a video about something else. A dedicated video is entirely about the sponsor's product, such as a full review or tutorial. Dedicated videos usually cost more because the whole video serves the brand and may perform differently from your usual content.",
      },
      {
        q: "Should I charge extra for usage rights?",
        a: "Yes. Usage rights let the brand reuse your content or likeness in its own ads, website or social accounts, and whitelisting lets it run ads from your account. These extend the value well beyond your audience, so price them separately by channel and duration, for example 90 days of paid social. Without a separate fee, read the contract carefully for broad usage language.",
      },
      {
        q: "Do I have to disclose sponsored YouTube videos?",
        a: "Yes. The FTC expects clear and conspicuous disclosure of any material connection with a brand, in the video itself, not just in the description. YouTube also requires creators to turn on the paid promotion setting for videos with paid product placements, sponsorships or endorsements. Your contract and invoice can note that disclosure was made as required.",
      },
      {
        q: "Can I charge a kill fee if the brand cancels?",
        a: "You can if the contract includes one. A kill fee compensates you for time already spent and the slot you held if the brand cancels after work starts. Typical structures are a percentage of the total fee depending on the stage, such as after the script or after filming. Without a contract clause, you would have to negotiate.",
      },
      {
        q: "What if the brand pays late?",
        a: "Big brands and agencies often pay on net 30, net 45 or net 60 cycles, and sometimes only after receiving a PO and a W-9. Send your invoice to the accounts payable contact, include the PO number, and follow up a few days before the due date. If your contract includes a late fee, cite it. Keep all communication polite and documented.",
      },
      {
        q: "Do brands send 1099s to YouTubers?",
        a: "A US brand that pays a US creator who is not a corporation $2,000 or more for services in 2026 generally must file Form 1099-NEC. Brands will ask for a W-9 before paying. Products received as payment may also count as income. Non-US creators usually provide Form W-8BEN instead. Keep your own records of every sponsorship payment.",
      },
      {
        q: "Should I charge per view or a flat fee?",
        a: "Most sponsorships are flat fees, often estimated from your average views per video and a CPM (cost per thousand views) that the brand and creator agree is fair. Some brands offer performance deals with affiliate commissions or bonuses for views or sales. A flat fee is simpler to invoice; performance bonuses need a clear reporting date and method.",
      },
      {
        q: "What deliverables should the sponsorship invoice list?",
        a: "List the video title or working title, video type (integration or dedicated), integration length, publish date, live video URL, description links and pinned comment, any short-form cutdowns, usage rights and exclusivity period, and the number of included revision rounds. Matching the contract wording makes it easy for the brand's finance team to approve the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A YouTube sponsorship invoice template bills a brand or agency for a sponsored video. It lists the deliverables (integration or dedicated video, length, publish date and link), extras such as usage rights, whitelisting and exclusivity, the fee for each, the PO number, deposit received, payment terms such as net 30, and the creator's payment details.</p>

<p>Sponsorship deals are where many YouTube channels earn most of their income, but payments can drag on for months if the invoice does not match what the brand's finance team expects. This guide explains how YouTube sponsorships are priced, what to put on a sponsorship invoice, how to handle usage rights, exclusivity and FTC disclosure, and includes a complete example invoice.</p>

<h2>What is a YouTube sponsorship invoice?</h2>
<p>A YouTube sponsorship invoice is a bill from a creator, or the creator's company, to a brand or agency for producing and publishing sponsored content. It confirms the deliverables in the sponsorship agreement and requests payment on the agreed terms. It works like an <a href="/blog/influencer-invoice-template">influencer invoice</a>, but long-form video has its own details: integration length, placement in the video, publish dates and video links.</p>
<p>Brands and agencies typically process creator invoices through accounts payable, which means they need a purchase order (PO) number, a W-9 or W-8BEN, and an invoice that matches the contract. If you also produce videos that the brand posts on its own channels, that is closer to <a href="/blog/ugc-creator-invoice">UGC creator work</a> and is often priced differently.</p>

<h2>Integration vs dedicated video: how sponsorships are priced</h2>
<table><thead><tr><th>Deliverable</th><th>What it is</th><th>Pricing notes</th></tr></thead><tbody>
<tr><td>Integration (pre-roll or mid-roll mention)</td><td>A 30 to 90 second segment inside a regular video</td><td>Most common; priced as a flat fee</td></tr>
<tr><td>Dedicated video</td><td>Entire video about the sponsor's product or service</td><td>Higher fee; more production work and audience risk</td></tr>
<tr><td>Shorts</td><td>Sponsored YouTube Shorts or cutdowns of the main integration</td><td>Priced per Short or bundled</td></tr>
<tr><td>Livestream mention</td><td>Read or segment during a live stream</td><td>Flat fee, often lower</td></tr>
<tr><td>Usage rights</td><td>Brand reuses your video or clips in its own ads or channels</td><td>Separate fee by channel and duration</td></tr>
<tr><td>Whitelisting</td><td>Brand runs ads through your channel or identity</td><td>Separate fee, often monthly</td></tr>
<tr><td>Exclusivity</td><td>You agree not to work with competitors for a period</td><td>Separate fee; longer and broader costs more</td></tr>
</tbody></table>
<p>Many brands and creators estimate a flat fee from expected views and a CPM (cost per thousand views). For example, if your videos average 80,000 views in the first 30 days and you and the brand agree on an illustrative $50 CPM for an integration, the fee would be 80 x $50 = $4,000. CPMs vary widely by niche, audience location and engagement, so treat this as a calculation method, not a market rate. Our guides to <a href="/blog/ugc-rates">UGC rates</a> and <a href="/blog/how-to-negotiate-freelance-rates">negotiating rates</a> can help you set and defend your price.</p>

<h2>What should a YouTube sponsorship invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Creator or company</td><td>Legal name (or LLC), channel name, address, email</td></tr>
<tr><td>Client</td><td>Brand legal entity or agency, AP contact</td></tr>
<tr><td>Invoice number and date</td><td>YT-2026-022, November 5, 2026</td></tr>
<tr><td>PO and contract reference</td><td>PO 4500891, agreement dated October 1, 2026</td></tr>
<tr><td>Deliverables</td><td>Integration length, video title, publish date, live URL</td></tr>
<tr><td>Extras</td><td>Usage rights, whitelisting, exclusivity, Shorts</td></tr>
<tr><td>Deposit received</td><td>Negative line with date</td></tr>
<tr><td>Payment terms</td><td>Net 30 from publish date; see <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 terms</a> if the brand asks for longer</td></tr>
<tr><td>Payment details</td><td>Bank transfer details, PayPal or payment link</td></tr>
</tbody></table>

<h2>YouTube sponsorship invoice example</h2>
<p>A tech channel signs a deal with a software brand through an agency. The deal includes a 60 to 90 second mid-roll integration, 90 days of paid social usage, and 30 days of category exclusivity. The agency paid a 50% deposit at signing. The video went live on November 4, 2026. Figures are illustrative.</p>
<p><strong>Pixel Bench Media LLC</strong> (channel: Pixel Bench) | Invoice YT-2026-022 | Date: November 5, 2026 | Due: December 5, 2026 (net 30)<br>Bill to: BrightWave Agency on behalf of TaskFlow Inc. | PO 4500891 | Agreement dated October 1, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Sponsored integration, 60 to 90 seconds, mid-roll, in "Best Productivity Apps for 2027" (live November 4, 2026, link in notes), with description link and pinned comment for 30 days</td><td>1</td><td>$4,000.00</td><td>$4,000.00</td></tr>
<tr><td>Usage rights: integration clip on brand paid social, 90 days from live date</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Category exclusivity: project management software, 30 days from live date</td><td>1</td><td>$800.00</td><td>$800.00</td></tr>
<tr><td colspan="3"><strong>Total fee</strong></td><td><strong>$6,000.00</strong></td></tr>
<tr><td colspan="3">Deposit received October 3, 2026</td><td>-$3,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$3,000.00</strong></td></tr>
</tbody></table>
<p>Notes: "Video live at the URL provided. Paid promotion disclosure made in video and via YouTube's paid promotion setting. Two script review rounds included per agreement." You can build an invoice like this in our <a href="/invoice-generator">free invoice generator</a> and attach a screenshot of video analytics if the brand asks for proof of performance.</p>

<h2>FTC disclosure and YouTube's paid promotion setting</h2>
<p>Disclosure is part of delivering the job correctly, so it belongs in the contract and is worth noting on the invoice. The FTC's guidance for creators, <a href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers">Disclosures 101 for Social Media Influencers</a>, says to disclose any financial, employment, personal or family relationship with a brand, and that disclosures should be clear and hard to miss. For video, that means saying it in the video itself, not only in the description. The FTC updated its Endorsement Guides in 2023, with more emphasis on disclosures that match the format of the endorsement.</p>
<p>YouTube's own <a href="https://support.google.com/youtube/answer/154235">paid product placements and endorsements policy</a> requires creators to tick the paid promotion box in video details when a video includes paid product placements, sponsorships or endorsements, which shows viewers an "Includes paid promotion" label. Brand contracts usually require both. Missing disclosure can be a breach of contract and a reason for a brand to withhold payment. This is general information, not legal advice.</p>

<h2>How to invoice a YouTube sponsorship step by step</h2>
<ol>
<li><strong>Get a signed agreement.</strong> Deliverables, review rounds, publish window, minimum time the video stays live, usage, exclusivity, payment schedule, kill fee and disclosure duties.</li>
<li><strong>Ask for the PO and AP contact.</strong> Many brands cannot pay without a PO; our <a href="/blog/purchase-order-template">purchase order guide</a> explains how they work.</li>
<li><strong>Send your W-9 (or W-8BEN) early.</strong> Non-US creators should read our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide</a>.</li>
<li><strong>Invoice the deposit at signing.</strong> Especially with brands you have not worked with before.</li>
<li><strong>Publish, then invoice the balance.</strong> Include the live link and publish date.</li>
<li><strong>Bill extras separately.</strong> Usage, whitelisting and exclusivity each get their own line so the brand sees the value.</li>
<li><strong>Follow up before the due date.</strong> Check payment status with AP a few days before net 30 ends.</li>
<li><strong>Record income for taxes.</strong> Sponsorship income is self-employment income; see our guide to <a href="/blog/youtuber-taxes">YouTuber taxes</a>.</li>
</ol>

<h2>Multi-video deals, bundles and performance bonuses</h2>
<p>Brands that see results often come back with bigger packages, and the invoicing gets more involved.</p>
<h3>Multi-video campaigns</h3>
<p>A three-video campaign over a quarter is usually priced at a discount to three separate deals. Invoice per video as each goes live, or split the total into a deposit and equal installments, each tied to a publish date. Either way, list which video each invoice covers so the brand can match it to the campaign plan. Our guide to <a href="/blog/milestone-payments">milestone payments</a> shows how to structure installments.</p>
<h3>Cross-platform bundles</h3>
<p>Brands often ask for a YouTube integration plus Shorts, Instagram Reels or TikTok cutdowns. Price each platform deliverable as its own line. If you hire an editor to produce cutdowns, that cost belongs in your price; editors themselves invoice you using something like a <a href="/blog/video-editing-invoice-template">video editing invoice</a>.</p>
<h3>Performance bonuses and affiliate deals</h3>
<p>Some deals add a bonus if the video passes a view threshold within 30 days, or pay a commission on sales through your link or code. Agree how performance is measured (YouTube Studio screenshots, the brand's affiliate dashboard) and when it is reported. Invoice bonuses separately after the measurement date, referencing the original invoice and attaching the evidence. Keep the base fee independent of performance so you are always paid for the work you delivered.</p>
<h3>Product-only deals</h3>
<p>If a brand pays only in free products, there is no cash invoice, but the products may still be taxable income at fair market value. Many creators send a zero-balance invoice or a written record listing the product and its value, which helps at tax time.</p>

<h2>Negotiating payment terms with brands and agencies</h2>
<p>Creators often accept whatever terms are in the brand's template contract, but payment terms are negotiable. A few practical points:</p>
<ul>
<li><strong>Ask for a deposit.</strong> 50% at signing is common for independent creators; it also confirms the brand is serious.</li>
<li><strong>Push back on net 60 or net 90.</strong> Long terms mean you finance the brand's campaign. Ask for net 30 or a higher fee for longer terms.</li>
<li><strong>Tie the balance to publishing, not performance.</strong> Performance bonuses are fine, but the base fee should be due when you deliver.</li>
<li><strong>Include a kill fee.</strong> If the brand cancels after you script or film, you are paid for the work; see our <a href="/blog/kill-fee">kill fee guide</a>.</li>
<li><strong>Agree late fees.</strong> A modest monthly late charge in the contract gives you something to cite; see our guide to <a href="/blog/late-payment-fees">late payment fees</a>.</li>
</ul>
<p>When working through an agency, confirm whether the agency or the brand pays you, and whether the agency's payment depends on the brand paying it first ("pay when paid"). That clause can add weeks or months to your wait.</p>

<h2>Invoicing as an individual vs a company</h2>
<p>Many creators start invoicing under their own name and later form an LLC or corporation. The invoice should always show the legal entity that signed the contract and that will receive payment, along with the matching tax ID on the W-9. If you switch to an LLC mid-year, tell your brand contacts and agencies, send a new W-9, and update your invoice template and bank details at the same time, or payments may go to the wrong account or be held for verification.</p>
<p>Use a consistent invoice number sequence across all brands, such as YT-2026-001 onward; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help. A clean sequence makes it easy to reconcile payments from multiple agencies and to give your accountant a complete list of sponsorship income at year end.</p>

<h2>Common YouTube sponsorship invoicing mistakes</h2>
<ul>
<li><strong>No PO number.</strong> Invoices without a PO often sit unpaid in AP queues.</li>
<li><strong>Vague deliverables.</strong> "YouTube video, $6,000" does not let finance match the contract.</li>
<li><strong>Giving away usage rights.</strong> Check contracts for "perpetual, worldwide" usage language and price it.</li>
<li><strong>Billing the wrong entity.</strong> Invoice the company named in the contract, which may be the agency, not the brand.</li>
<li><strong>Forgetting the W-9.</strong> Brands will not pay without one.</li>
<li><strong>Skipping disclosure.</strong> Missing FTC disclosure can put your payment, and your channel, at risk.</li>
</ul>

<h2>YouTube sponsorship invoice checklist</h2>
<ul>
<li>Creator or company legal name, channel name and contact details</li>
<li>Brand or agency legal name and AP contact</li>
<li>Invoice number, date, PO and contract reference</li>
<li>Integration or dedicated video, length, publish date and live link</li>
<li>Usage rights, whitelisting and exclusivity as separate lines</li>
<li>Deposit received and balance due</li>
<li>Payment terms and payment details</li>
<li>Disclosure note</li>
</ul>
<p>A YouTube sponsorship invoice template that matches the contract, lists every deliverable and prices extras separately helps you get paid faster and on the terms you agreed. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a downloadable PDF in your browser, ready to send to brands and agencies.</p>
`,
  },
  {
    slug: "car-wash-invoice-template",
    title: "Car Wash Invoice Template: Fleet Accounts + Memberships",
    description:
      "Car wash invoice template for fleet washing accounts, per-vehicle pricing by class, memberships and mobile washing, with a monthly fleet invoice example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "car-detailing-invoice-template",
      "how-to-start-a-car-wash-business",
      "pressure-washing-invoice-template",
    ],
    faqs: [
      {
        q: "How do car washes bill fleet customers?",
        a: "Most fleet accounts are billed monthly. Each wash is recorded with the date, vehicle or unit number and service, then all washes for the month go on one invoice with net 15 or net 30 terms. Some fleets use wash cards or codes for drivers, and the car wash bills the company for every code used. Larger fleets often require a PO number on each invoice.",
      },
      {
        q: "How should fleet wash pricing be structured?",
        a: "Price by vehicle class, because a box truck takes far more time, water and chemicals than a sedan. Typical classes are cars, SUVs and pickups, cargo vans, box trucks and tractor-trailers. Add-ons like interior cleaning, undercarriage or degreasing are priced separately. Volume discounts for a guaranteed number of washes per month are common.",
      },
      {
        q: "Do car wash memberships need an invoice?",
        a: "Unlimited wash memberships are usually charged automatically to a card each month, and the customer receives an emailed receipt rather than a traditional invoice. Business memberships for company vehicles are often invoiced monthly instead. Either way, the receipt or invoice should show the plan, vehicle, billing period, amount, renewal date and how to cancel.",
      },
      {
        q: "Is a car wash subject to sales tax?",
        a: "It depends on the state. Some states tax car washing as a taxable service, others exempt it, and some tax only certain services like detailing. Products sold, such as air fresheners or towels, are usually taxable. Check your state revenue department's rules and keep taxable and nontaxable services on separate lines.",
      },
      {
        q: "What rules apply to mobile fleet washing runoff?",
        a: "Wash water containing soaps, oil and grime generally should not go into storm drains, which often flow directly to local waters. Many cities and states have stormwater rules requiring mobile washers to capture and reclaim or properly dispose of wash water. Check local requirements before washing on a client's lot, and consider a separate environmental or water reclamation line on invoices.",
      },
      {
        q: "Should a car wash charge a minimum for mobile fleet visits?",
        a: "Many mobile fleet washers set a minimum charge per visit, because travel and setup cost the same whether you wash three vehicles or thirty. A minimum, such as a set dollar amount or a set number of vehicles, keeps small visits profitable. Show it on the invoice as a minimum charge adjustment when the vehicle count falls below the threshold.",
      },
      {
        q: "How do I handle damage claims on fleet vehicles?",
        a: "Do a quick walk-around before washing and note existing damage, ideally with photos and unit numbers. Your service agreement should explain how claims are reported and investigated and what your insurance covers. Keep claims separate from the invoice; do not reduce an invoice to settle a claim without a written agreement, so your records stay clean.",
      },
      {
        q: "What payment terms work for fleet wash accounts?",
        a: "Net 15 or net 30 is common for fleet accounts, billed monthly. For new accounts, some car washes ask for a card on file or a deposit before opening credit. Larger companies may need you to complete a vendor setup, provide a W-9 and a certificate of insurance before the first payment, so start that process early.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A car wash invoice template bills a customer or fleet account for vehicle washing services. For fleets, it lists each wash by date, vehicle or unit number and vehicle class, the per-vehicle price, add-ons like interiors or undercarriage, any minimum charge or volume discount, sales tax where it applies, the PO number, payment terms and the total due.</p>

<p>Retail car wash customers pay at the tunnel or kiosk and get a receipt. The invoicing work in this business comes from fleet accounts, business memberships and mobile fleet washing, where a monthly invoice can cover dozens or hundreds of vehicles. This guide explains how to price and invoice fleet washing, how memberships are billed, and includes a complete fleet invoice example.</p>

<h2>What is a car wash invoice?</h2>
<p>A car wash invoice is a bill from a car wash, mobile wash service or fleet washing company to a customer for vehicle cleaning. It differs from a point-of-sale receipt because payment is due later, usually for multiple washes over a billing period. Common customers include delivery and service companies, car dealerships, rental agencies, municipalities, property managers, and trucking companies.</p>
<p>If your work goes deeper than a wash, such as paint correction or full interior details, our <a href="/blog/car-detailing-invoice-template">car detailing invoice template</a> covers that service. For washing buildings, equipment or lots, see our <a href="/blog/pressure-washing-invoice-template">pressure washing invoice template</a>.</p>

<h2>How is fleet washing priced?</h2>
<p>Fleet washing is priced per vehicle, by class, with add-ons. The table below shows an illustrative price sheet; your prices depend on local competition, water and chemical costs, and whether you wash at your site or the customer's.</p>
<table><thead><tr><th>Vehicle class</th><th>Exterior wash (illustrative)</th><th>Common add-ons</th></tr></thead><tbody>
<tr><td>Sedan or compact car</td><td>$14</td><td>Interior vacuum, wipe-down</td></tr>
<tr><td>SUV or pickup</td><td>$18</td><td>Bed cleaning, undercarriage</td></tr>
<tr><td>Cargo van or sprinter</td><td>$22</td><td>Cargo area clean, roof wash</td></tr>
<tr><td>Box truck</td><td>$65</td><td>Degreasing, aluminum brightening</td></tr>
<tr><td>Tractor or tractor-trailer</td><td>$95+</td><td>Trailer interior washout, degreasing</td></tr>
</tbody></table>
<p>Fleet customers usually get a discount from retail prices in return for volume and predictable scheduling. A simple structure is a published fleet rate per class, with an extra discount for committing to a minimum number of washes per month. To make sure your fleet prices still cover costs, see our guide to <a href="/blog/how-to-calculate-profit-margin">calculating profit margin</a>.</p>
<h3>Memberships and wash clubs</h3>
<p>Unlimited wash memberships are a core revenue model for express tunnel car washes. Consumers pay a monthly fee charged automatically to a card and wash as often as they like, usually for one registered vehicle. Business memberships cover several company vehicles, often invoiced monthly instead of charged to a card. Membership billing works like a <a href="/blog/gym-membership-invoice-template">gym membership invoice</a>: plan name, billing period, renewal date and how to cancel. Many states have automatic renewal laws requiring clear disclosure of recurring charges and an easy way to cancel, so check the rules where you operate.</p>

<h2>What should a car wash invoice include?</h2>
<ul>
<li>Business name, address, phone, email and logo</li>
<li>Customer legal name, billing contact and address</li>
<li>Invoice number, invoice date, billing period and due date</li>
<li>PO number or account number, if the customer uses them</li>
<li>Wash log: date, vehicle or unit number, vehicle class, service, price</li>
<li>Add-ons and any minimum charge or volume discount</li>
<li>Sales tax on taxable services or products, where applicable</li>
<li>Total, payment terms, payment methods and late fee policy</li>
</ul>
<p>For large fleets, put a summary on page one (washes by class with subtotals) and the full wash log on following pages. Fleet managers can then check totals quickly and audit details if needed.</p>

<h2>Car wash invoice example: monthly fleet account</h2>
<p>A local delivery company has 20 vehicles and a twice-monthly exterior wash plan for cars and vans, with box trucks washed once a month. Four cars also had interior cleaning. Prices are illustrative, and this example assumes washing services are not taxable in the business's state.</p>
<p><strong>ShineLine Fleet Wash</strong> | Invoice SL-2611-031 | Date: November 30, 2026 | Billing period: November 1 to 30, 2026 | Due: December 30, 2026 (net 30)<br>Bill to: Metro Parcel Express LLC, Fleet Manager | Account 2207 | PO 7712</p>
<table><thead><tr><th>Service</th><th>Vehicles</th><th>Washes each</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Exterior wash, sedans (units 101 to 112)</td><td>12</td><td>2</td><td>$14.00</td><td>$336.00</td></tr>
<tr><td>Exterior wash, cargo vans (units 201 to 206)</td><td>6</td><td>2</td><td>$22.00</td><td>$264.00</td></tr>
<tr><td>Exterior wash with degreasing, box trucks (units 301, 302)</td><td>2</td><td>1</td><td>$65.00</td><td>$130.00</td></tr>
<tr><td>Interior vacuum and wipe-down add-on (units 104, 107, 110, 111)</td><td>4</td><td>1</td><td>$25.00</td><td>$100.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$830.00</strong></td></tr>
</tbody></table>
<p>The attached wash log lists each wash with date, unit number and the employee code. Our <a href="/invoice-generator">free invoice generator</a> handles the summary page; attach your wash log exported from your wash system or a spreadsheet.</p>

<h2>How to handle volume discounts and minimums on fleet invoices</h2>
<p>Fleet agreements usually include either a volume discount, a minimum charge, or both. Show them as separate lines so the customer sees full price, discount and net amount.</p>
<p><strong>Volume discount example:</strong> a contract gives 10% off when a fleet has 100 or more washes in a month. In November, the fleet had 112 washes totaling $2,140 at standard fleet rates. The invoice shows "Fleet washes, 112 (see log) $2,140.00," then "Volume discount, 10% for 100+ washes, -$214.00," for a net of $1,926.00.</p>
<p><strong>Minimum charge example:</strong> a mobile washer has a $250 minimum per visit. On one visit only 9 vans were available at $22 each, totaling $198. The invoice shows the 9 washes for $198.00 and a "Minimum visit charge adjustment" of $52.00, bringing that visit to $250.00. If minimums apply often, talk with the fleet manager about scheduling so more vehicles are on the lot.</p>
<h3>Dealerships, rental agencies and property managers</h3>
<p>Car dealerships often need lot washes, new car prep and service-customer washes, sometimes billed to different departments. Ask which cost center each service belongs to and invoice accordingly. Rental agencies care about turnaround time and may pay per vehicle turned. Property managers may want wash days for tenants' vehicles billed to the property or to individual tenants. Trucking companies frequently need trailer washouts with documentation for food-grade loads; our <a href="/blog/trucking-invoice-template">trucking invoice template</a> shows how those customers bill their own clients, which helps you understand what paperwork they need from you.</p>
<h3>Wash cards and codes</h3>
<p>Many tunnel washes give fleet customers wash cards, RFID tags or codes. Every use is recorded automatically, and the monthly invoice pulls from that data. Deactivate lost cards quickly and note the card or tag number on each wash log line, so a fleet manager can spot misuse by a driver.</p>

<h2>How to set up fleet wash billing step by step</h2>
<ol>
<li><strong>Sign a fleet service agreement.</strong> Include prices per class, add-ons, wash frequency, location, minimum charges, payment terms, damage claim process and insurance.</li>
<li><strong>Complete vendor setup.</strong> Large customers need a W-9, certificate of insurance and banking details; start early so your first invoice is not delayed.</li>
<li><strong>Create a vehicle list.</strong> Get unit numbers, plates and classes from the fleet manager so every wash maps to a known vehicle.</li>
<li><strong>Log every wash.</strong> Use wash codes, RFID tags or a simple log with date, unit and service. Disputes are rare when the log is complete.</li>
<li><strong>Invoice monthly.</strong> Send invoices on the same date each month. If you have many fleet accounts, <a href="/blog/batch-invoicing">batch invoicing</a> saves hours.</li>
<li><strong>Track payment and follow up.</strong> Apply payments to the right invoices and send reminders before the due date for slow payers.</li>
</ol>

<h2>Mobile fleet washing: extra lines to consider</h2>
<p>Mobile fleet washers travel to the customer's lot, often overnight or early morning. That adds costs a tunnel wash does not have, and the invoice should reflect them:</p>
<ul>
<li><strong>Trip or minimum charge:</strong> a minimum per visit, so small visits remain profitable.</li>
<li><strong>Water reclamation or environmental fee:</strong> many cities and states have stormwater rules that restrict letting wash water reach storm drains, so mobile washers often use reclaim mats and pumps. Explain any fee in your agreement.</li>
<li><strong>After-hours scheduling:</strong> overnight washing may cost more in labor; build it into the rate or charge a premium.</li>
<li><strong>Water and power:</strong> if you use the customer's water or power, say so; if you bring your own, factor it into price.</li>
</ul>
<p>The US EPA's stormwater program explains why discharges to storm drains are regulated; check your city's stormwater ordinance for specific rules. Clean, compliant operations are a selling point for fleet managers who are responsible for their lots.</p>

<h2>Payments, sales tax and recordkeeping</h2>
<p>Fleet customers typically pay by ACH or check on net 15 or <a href="/blog/net-30-payment-terms">net 30 terms</a>. Card payments are convenient but add processing costs; see our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a> before deciding whether to accept cards on large fleet invoices.</p>
<p>Sales tax on car washing varies widely: some states tax it as a service, some exempt it, and some tax detailing but not basic washes. Products such as air fresheners or wiper blades are usually taxable. Our overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> is a starting point, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps compute tax on taxable lines. This is general information, not tax advice.</p>
<p>Keep wash logs with each invoice for at least as long as you keep your tax records. They support your revenue figures and resolve customer questions months later.</p>

<h2>Retail receipts and gift cards</h2>
<p>Even if most of your revenue is retail, a few customers will ask for a proper invoice or receipt, usually for business expense reimbursement. Your point-of-sale system should be able to print or email a receipt showing the business name, date, service, amount and tax. For customers who want a formal invoice after paying, issue one marked as paid, with the payment date and method; our <a href="/blog/payment-receipt-template">payment receipt template</a> covers what to include.</p>
<p>Wash books, prepaid packages and gift cards are sold before the service is delivered. Record them as prepaid amounts and draw them down as customers wash. Some states have gift card rules covering expiration dates and fees, so check before putting an expiry on a prepaid wash package.</p>

<h2>Common car wash invoicing mistakes</h2>
<ul>
<li><strong>No unit numbers.</strong> Fleet managers cannot verify washes without them, and payment stalls.</li>
<li><strong>One price for all vehicles.</strong> Box trucks priced like sedans lose money.</li>
<li><strong>Missing PO numbers.</strong> Many companies reject invoices without them.</li>
<li><strong>Taxing everything or nothing.</strong> Check which services and products are taxable in your state.</li>
<li><strong>Unclear membership terms.</strong> Unclear renewal and cancellation terms lead to chargebacks and complaints.</li>
<li><strong>Settling damage claims on the invoice.</strong> Handle claims separately and document them.</li>
</ul>

<h2>Car wash invoice checklist</h2>
<ul>
<li>Business and customer details, invoice number and billing period</li>
<li>PO or account number</li>
<li>Summary by vehicle class with quantities and rates</li>
<li>Add-ons, minimums and discounts</li>
<li>Detailed wash log with dates and unit numbers</li>
<li>Sales tax where required</li>
<li>Payment terms, methods and due date</li>
</ul>
<p>A car wash invoice template built around vehicle classes, unit numbers and a clean wash log makes fleet accounts easy to bill and easy to pay. If you are just getting started, our guide on <a href="/blog/how-to-start-a-car-wash-business">how to start a car wash business</a> covers the bigger picture. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a PDF in your browser that you can download and send to fleet customers.</p>
`,
  },
  {
    slug: "boat-repair-invoice-template",
    title: "Boat Repair Invoice Template: Labor, Parts + Haul-Out",
    description:
      "Boat repair invoice template for marine mechanics and boatyards: labor, parts, haul-out per foot, bottom paint, storage and winterization, with an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["auto-repair-invoice-template", "mobile-mechanic-invoice-template", "mechanics-lien"],
    faqs: [
      {
        q: "How do boatyards charge for haul-out?",
        a: "Haul-out is usually priced per foot of boat length, often with a minimum charge, and may be quoted as a round-trip haul and launch or as separate haul and launch fees. Blocking or cradle setup and pressure washing the bottom are often extra, also per foot. Show the boat's length and the per-foot rate on the invoice so the customer can check the math.",
      },
      {
        q: "Can a boat repair shop keep a boat until the bill is paid?",
        a: "Often, yes. Many states give repair shops and marinas a possessory lien on a vessel for unpaid repairs and storage, and federal law (46 U.S.C. 31342) gives a maritime lien to those who provide necessaries, such as repairs and supplies, to a vessel on the order of the owner or an authorized person. Enforcement procedures are technical, so consult a maritime attorney before acting.",
      },
      {
        q: "Is labor on boat repairs taxable?",
        a: "It depends on the state. Parts and materials sold are generally taxable, while repair labor is exempt in some states and taxable in others, sometimes only if not separately stated. Some states also have special rules for boats used in interstate commerce. List labor and parts on separate lines and check your state revenue department's guidance.",
      },
      {
        q: "Should a marine mechanic charge for travel?",
        a: "Mobile marine mechanics usually charge a trip or service call fee, or bill travel time at a reduced hourly rate, because they drive to marinas, docks and storage yards. Some charge a flat zone fee based on distance. Put the travel policy on your rate sheet and show the charge as a separate line, with the location, on each invoice.",
      },
      {
        q: "What is a shop supplies fee on a boat repair invoice?",
        a: "A shop supplies fee covers small consumables used on the job that are impractical to itemize, such as rags, sealant, tape, cleaners and fasteners. Many shops charge a small percentage of labor with a cap, or a flat amount. Disclose the method on your estimate, show it as its own line, and avoid charging it on top of itemized supplies.",
      },
      {
        q: "Do boat repair shops require a deposit?",
        a: "For large repairs, repowers, fiberglass work or special-order parts, many shops require a deposit before ordering parts or starting work. Smaller service jobs are often billed on completion. For storage and winterization packages, payment is commonly due before the season or before the boat is released in spring. Put deposit terms in the work order.",
      },
      {
        q: "How should winterization be billed?",
        a: "Many shops sell winterization as a package priced by engine type (outboard, sterndrive, inboard) and number of engines, plus systems like freshwater, head and generator. Shrink wrap is usually priced per foot of length. Fuel stabilizer, antifreeze and oil change parts can be included or itemized. Spell out what the package covers so spring commissioning charges are not a surprise.",
      },
      {
        q: "What should I do if repairs exceed the estimate?",
        a: "Stop and get the customer's approval before continuing. Many shops and some states require authorization for work beyond the written estimate. Send a revised estimate or change order with the added labor and parts, get written or recorded approval, and reference it on the final invoice. Unapproved overruns are the most common cause of repair disputes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A boat repair invoice template bills a boat owner for marine service. It identifies the vessel (name, make, model, length, hull ID and engine serial numbers), lists labor by task with hours and rate, parts with part numbers, yard services like haul-out and bottom paint priced per foot, storage, shop supplies, disposal fees, tax, deposits and the balance due.</p>

<p>Marine repairs mix mechanical work, fiberglass, electrical systems and yard services, often on one job. Customers compare your invoice against the estimate, and marinas and lenders may need details for insurance claims. This guide explains how boat repair invoices are structured, how to price yard services per foot, how to handle parts, storage and liens, and includes a complete worked example.</p>

<h2>What is a boat repair invoice?</h2>
<p>A boat repair invoice is a bill from a boatyard, marine service shop, marina or mobile marine mechanic to a boat owner for maintenance, repair or storage services. It documents the work performed on a specific vessel and engine, the parts installed and the charges due. A good marine invoice works the same way as an <a href="/blog/auto-repair-invoice-template">auto repair invoice</a>, with boat-specific additions: hull identification number (HIN), engine serial numbers and hours, and per-foot yard charges.</p>
<p>Most jobs start with a <a href="/blog/work-order-template">work order</a> or written <a href="/blog/estimate-template">estimate</a>, which the invoice should mirror line for line.</p>

<h2>What should a boat repair invoice include?</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Business details</td><td>Shop or yard name, address, phone, email, sales tax permit if required</td></tr>
<tr><td>Customer</td><td>Owner name, address, phone, email</td></tr>
<tr><td>Vessel</td><td>Boat name, make, model, year, length, HIN, registration or documentation number</td></tr>
<tr><td>Engines</td><td>Make, model, serial numbers, engine hours at service</td></tr>
<tr><td>Work order reference</td><td>Estimate or work order number and approval date</td></tr>
<tr><td>Labor</td><td>Task, technician hours, rate</td></tr>
<tr><td>Parts and materials</td><td>Part number, description, quantity, unit price</td></tr>
<tr><td>Yard services</td><td>Haul and launch, pressure wash, blocking, storage, shrink wrap, priced per foot or per month</td></tr>
<tr><td>Fees</td><td>Shop supplies, environmental and disposal fees, travel</td></tr>
<tr><td>Totals</td><td>Subtotals, tax, deposit applied, balance due</td></tr>
<tr><td>Terms</td><td>Due date, storage charges for unpaid boats, warranty, lien notice</td></tr>
</tbody></table>
<p>Recording engine hours on every invoice helps the owner track service intervals and supports warranty claims with engine manufacturers.</p>

<h2>How are boat repairs priced?</h2>
<h3>Labor</h3>
<p>Most marine shops bill labor by the hour, with a posted shop rate. Unlike auto repair, there is less reliance on standardized flat-rate guides across all work, though engine manufacturers publish warranty labor times that many shops use as a reference. Specialist work such as diesel engines, electronics, or fiberglass and gelcoat repair may carry a higher rate. Show the hours and rate for each task.</p>
<h3>Parts and materials</h3>
<p>List each part with its part number. Shops typically sell parts at a markup over cost, similar to other repair trades; our <a href="/blog/materials-markup">materials markup guide</a> explains common approaches. Special-order parts are often non-returnable, so collect a deposit first.</p>
<h3>Yard services priced per foot</h3>
<p>Boatyards price many services per foot of length overall (LOA), with minimums. The table below shows illustrative rates; actual rates vary greatly by region, season and facility.</p>
<table><thead><tr><th>Yard service</th><th>Typical pricing basis</th><th>Illustrative rate</th></tr></thead><tbody>
<tr><td>Haul and launch (round trip)</td><td>Per foot, minimum charge</td><td>$10 per foot</td></tr>
<tr><td>Bottom pressure wash</td><td>Per foot</td><td>$4 per foot</td></tr>
<tr><td>Blocking or cradle setup</td><td>Per foot or flat</td><td>$3 per foot</td></tr>
<tr><td>Shrink wrap</td><td>Per foot</td><td>$20 per foot</td></tr>
<tr><td>Outdoor dry storage</td><td>Per foot per month or season</td><td>$5 per foot per month</td></tr>
<tr><td>Indoor rack storage</td><td>Per foot per season</td><td>Varies widely</td></tr>
</tbody></table>
<p>On the invoice, show the length and rate, for example "Haul and launch, 24 ft x $10.00 = $240.00," so the owner can check the math.</p>

<h2>Boat repair invoice example</h2>
<p>A 24-foot center console comes in for fall service: haul-out, bottom paint, a 100-hour outboard service and new zinc anodes. The customer approved the estimate. Rates are illustrative, and the example assumes a state that taxes parts at 6% but not separately stated labor and services.</p>
<p><strong>Harborline Marine Service</strong> | Invoice HM-2026-0587 | Date: October 29, 2026 | Due: on pickup<br>Bill to: Daniel Brooks | Vessel: "Second Wind," 2019 24 ft center console, HIN on file | Engine: 250 hp outboard, S/N on file, 412 hours | Work order WO-1192 approved October 14, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Haul and launch (24 ft)</td><td>24</td><td>$10.00</td><td>$240.00</td></tr>
<tr><td>Bottom pressure wash (24 ft)</td><td>24</td><td>$4.00</td><td>$96.00</td></tr>
<tr><td>Labor: sand and apply two coats of bottom paint</td><td>6.0 h</td><td>$135.00</td><td>$810.00</td></tr>
<tr><td>Antifouling bottom paint, 1 gallon</td><td>2</td><td>$210.00</td><td>$420.00</td></tr>
<tr><td>Labor: 100-hour outboard service (oil, filters, gear lube, plugs, inspection)</td><td>2.5 h</td><td>$135.00</td><td>$337.50</td></tr>
<tr><td>100-hour service parts kit</td><td>1</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td>Zinc anode kit</td><td>1</td><td>$64.00</td><td>$64.00</td></tr>
<tr><td>Shop supplies</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td colspan="3">Labor and services subtotal</td><td>$1,528.50</td></tr>
<tr><td colspan="3">Parts and materials subtotal</td><td>$669.00</td></tr>
<tr><td colspan="3">Sales tax on parts, 6% (illustrative)</td><td>$40.14</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$2,237.64</strong></td></tr>
</tbody></table>
<p>Terms: "Payment due before launch or release. Boats not picked up within 7 days of completion incur storage at $5 per foot per month. 90-day warranty on labor; parts per manufacturer warranty." Build this layout in our <a href="/invoice-generator">free invoice generator</a> and include the vessel and engine details in the notes section.</p>

<h2>How to invoice boat repairs step by step</h2>
<ol>
<li><strong>Write up the vessel.</strong> Record boat name, HIN, engine serials and hours, and photograph pre-existing damage.</li>
<li><strong>Give a written estimate.</strong> Separate labor, parts and yard services, and get signed or recorded approval.</li>
<li><strong>Collect a deposit for large jobs.</strong> Especially for special-order parts or repowers; see our <a href="/blog/deposit-invoice">deposit invoice guide</a>.</li>
<li><strong>Get approval for additional work.</strong> If you find more problems, send a change order before proceeding.</li>
<li><strong>Track technician time by task.</strong> This makes the invoice match the work order.</li>
<li><strong>Invoice on completion.</strong> Itemize labor, parts and yard services; an <a href="/blog/itemized-invoice">itemized invoice</a> prevents disputes.</li>
<li><strong>Release the boat on payment.</strong> State this on the estimate and invoice.</li>
<li><strong>Follow up on storage accounts.</strong> Bill storage monthly or by season, in advance where possible.</li>
</ol>

<h2>Insurance claims, warranty work and specialty repairs</h2>
<h3>Insurance claim repairs</h3>
<p>After storm damage, groundings or collisions, the owner's marine insurer often pays for repairs. The adjuster usually needs a detailed estimate before approving work, then a final invoice that matches it. Itemize labor by area of damage, list every part with a part number, include photos, and note any supplement approved by the adjuster. The owner normally remains responsible for the deductible and anything the insurer does not cover, so say this on the estimate and show the deductible on the invoice if the insurer pays you directly.</p>
<h3>Manufacturer warranty work</h3>
<p>Warranty repairs on engines or boats are billed to the manufacturer through its dealer or service portal, usually at the manufacturer's labor times and rates. The owner receives a zero-balance invoice or work order showing what was done under warranty. Any non-warranty work done at the same visit, such as routine maintenance, goes on a separate customer invoice so the two do not get mixed.</p>
<h3>Fiberglass, gelcoat, welding and electrical</h3>
<p>Fiberglass and gelcoat repairs are hard to estimate because hidden damage often appears once grinding starts. Quote a range or an initial assessment fee, and get approval at each stage. Aluminum and stainless welding on rails, towers or pontoons is often billed like a <a href="/blog/welding-invoice-template">welding invoice</a>, with shop time and materials. Electrical and electronics work (wiring, chartplotters, trolling motors) should list each component and its serial number for warranty registration.</p>

<h2>Storage, winterization and seasonal billing</h2>
<p>In colder regions, fall and spring are peak season: haul-outs, winterization, shrink wrap, storage, then commissioning and launch in spring. Many yards sell a winter package that bundles haul-out, pressure wash, winterization, shrink wrap and storage. Bill packages before the boat is stored, or split them into a fall invoice (haul, winterize, wrap) and storage billed by season. Spring commissioning (de-winterizing, battery install, systems check, launch) is a separate invoice.</p>
<p>For long-term storage customers, a <a href="/blog/recurring-invoices-guide">recurring invoice</a> for monthly storage keeps payments regular and avoids a large unpaid balance building up over the winter.</p>

<h2>Liens and unpaid boat repair bills</h2>
<p>Boat repair shops and marinas have strong tools for unpaid bills, but they must be used carefully. Many states give repairers and storage facilities a possessory lien on the vessel, allowing them to keep it until paid and, after notice, sometimes to sell it. For vessels, federal law also provides a maritime lien for necessaries, which include repairs, supplies and towing provided to a vessel on the order of the owner or a person authorized by the owner (46 U.S.C. 31342). Enforcing a maritime lien involves federal court procedures, so most small shops rely on state possessory liens and consult a maritime attorney for larger balances. Our general guide to <a href="/blog/mechanics-lien">mechanic's liens</a> explains the concept on land. This is general information, not legal advice.</p>
<p>Prevention is cheaper than enforcement: written estimates, approvals for extra work, deposits on large jobs and a "release on payment" policy solve most problems before they start. Mobile marine mechanics who cannot hold the boat should collect payment on completion or use card-on-file authorization; our <a href="/blog/mobile-mechanic-invoice-template">mobile mechanic invoice template</a> covers that workflow.</p>

<h2>Environmental and disposal fees</h2>
<p>Marine service generates waste that must be handled properly: used engine oil and filters, antifreeze, old batteries, bottom paint dust and scrapings, fuel, and solvents. Many yards charge a separate environmental or disposal fee to cover hazardous waste handling and recycling. Keep the fee proportionate and explain it on your rate sheet, for example a flat fee per oil change or a small percentage of labor with a cap. If you dispose of a specific item, such as an old battery or fuel tank, list it as its own line.</p>
<p>Bottom paint work deserves extra care. Many antifouling paints contain copper or other biocides, and sanding dust and wash water from hull cleaning are regulated in many areas. Yards often use dust-free sanders and capture wash water, which costs money; reflecting it in your per-foot pricing is reasonable.</p>

<h2>Common boat repair invoicing mistakes</h2>
<ul>
<li><strong>Missing HIN and engine serials.</strong> Warranty claims and insurance claims need them.</li>
<li><strong>Per-foot charges without the length.</strong> Owners cannot check the math.</li>
<li><strong>Unapproved overruns.</strong> Get approval before exceeding the estimate.</li>
<li><strong>Mixing taxable and nontaxable items.</strong> Separate labor, services and parts.</li>
<li><strong>Double-charging supplies.</strong> Do not charge a shop supplies fee on top of itemized consumables.</li>
<li><strong>Releasing the boat before payment.</strong> Once launched and gone, your leverage is limited.</li>
</ul>

<h2>Boat repair invoice checklist</h2>
<ul>
<li>Shop details, customer details, invoice and work order numbers</li>
<li>Vessel name, make, model, length and HIN</li>
<li>Engine make, model, serials and hours</li>
<li>Labor by task with hours and rate</li>
<li>Parts with part numbers and quantities</li>
<li>Yard services with length and per-foot rate</li>
<li>Shop supplies, disposal and travel fees</li>
<li>Tax, deposit applied, balance due and release terms</li>
</ul>
<p>A boat repair invoice template that identifies the vessel, itemizes labor and parts, and shows per-foot yard charges clearly makes your marine invoices easy to approve and hard to dispute. Our <a href="/invoice-generator">invoice generator</a> is free, has no sign-up, and builds a PDF in your browser that you can download and hand to the owner at pickup.</p>
`,
  },
];
