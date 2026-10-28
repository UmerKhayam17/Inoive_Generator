import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_I: PostDraft[] = [
  {
    slug: "pool-cleaning-invoice-template",
    title: "Pool Cleaning Invoice Template: Monthly Service Billing",
    description:
      "Use this pool cleaning invoice template to bill weekly service, chemicals, filter cleans and repairs clearly, with typical rates, payment terms and a sample.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "recurring-invoices-guide",
      "landscaping-invoice-template",
      "pressure-washing-invoice-template",
    ],
    faqs: [
      {
        q: "What should a pool service invoice include?",
        a: "Include your business name and contact details, the client name and pool address, a unique invoice number, the invoice date and service period, each service with quantity and rate, chemicals or parts supplied, any tax that applies, the total, the due date and how to pay. For monthly plans, list the number of visits in the period so the client can match the bill to the service they saw.",
      },
      {
        q: "How much does pool cleaning cost per month?",
        a: "Published 2026 US cost guides put weekly residential pool service at roughly $100 to $300 per month for most homes, with chemical-only plans lower and large, salt or high-debris pools higher. Prices vary by region, pool size, season and what is included, so treat any figure as a rough guide and base your own rates on local competition and your costs.",
      },
      {
        q: "Should pool chemicals be billed separately?",
        a: "Either approach works if you are clear about it. Many pool services include routine chlorine and balancing chemicals in the monthly price and bill extra for shock treatments, algaecide, stabiliser or large top-ups. Others bill all chemicals at cost plus a markup. State which model you use in your service agreement and show extra chemicals as separate lines on the invoice.",
      },
      {
        q: "When should I send a pool maintenance invoice?",
        a: "Most pool services bill monthly, either in advance at the start of the month for a flat plan or in arrears at the end of the month when visits and chemicals vary. Pick one schedule and stick to it so clients know when to expect the bill. Repairs and one-off jobs such as openings, closings or green-to-clean work are usually invoiced when the job is done.",
      },
      {
        q: "Do I charge sales tax on pool cleaning?",
        a: "It depends on where you work. Some US states treat pool cleaning and maintenance as a taxable service, many do not, and chemicals or parts you sell are often taxable as goods. In the UK, VAT only applies once you are VAT-registered. Check your state revenue department or HMRC guidance and confirm with a qualified tax adviser before deciding.",
      },
      {
        q: "How do I bill a skipped pool visit?",
        a: "Set the rule in your service agreement. Common approaches are a credit on the next invoice for visits you missed, no credit if the client blocked access, and a rescheduled visit for weather delays. On the invoice, show the actual number of visits and add a short note such as One visit skipped due to storm, credited below, so the client sees exactly what happened.",
      },
      {
        q: "What payment terms do pool services use?",
        a: "Due on receipt and net 15 are common for residential pool maintenance billing, with autopay or card on file popular for monthly plans. Commercial clients such as apartment complexes or HOAs often expect net 30. Whatever you choose, print the due date on the invoice and state any late fee in your agreement, keeping within local rules on late charges.",
      },
      {
        q: "Can I use a free invoice generator for pool service billing?",
        a: "Yes. A free online invoice generator lets you add your logo, list visits, chemicals and repairs, apply one tax rate and download a PDF to email or print. It does not send invoices automatically, repeat them each month or collect card payments, so you create each monthly invoice yourself, send the PDF and record the payment when it arrives.",
      },
      {
        q: "How do I invoice a pool opening or closing?",
        a: "Treat seasonal openings and closings as separate one-off jobs rather than part of the monthly plan. List the labour as a flat fee, then add chemicals, winter covers, plugs or replacement parts as their own lines. If the client prepaid a deposit when booking the opening, enter it as amount paid so the balance due on the invoice is correct.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A pool cleaning invoice template shows your business details, the client and pool address, a unique invoice number, the service period, the number of cleaning visits and the monthly or per-visit rate, any extra chemicals, filter cleans or repairs, tax if it applies, the total due and your payment terms. Bill monthly, on the same day each month.</p>

<p>Pool service is repeat work. The same client, the same pool, the same visit every week, often for years. That makes billing simple in theory, but it is also where small errors creep in: a skipped visit nobody credited, chemicals added without a line on the bill, a filter clean the client never agreed to. A clear pool cleaning invoice template removes those arguments before they start.</p>

<p>This guide covers what to put on a pool service invoice, the main pricing models with typical ranges, how to bill chemicals and repairs, payment terms, a worked example you can build in our free invoice generator, and the mistakes that cost pool businesses money.</p>

<h2>What a pool cleaning invoice template should include</h2>
<p>A pool cleaning invoice template should be readable in ten seconds. The homeowner wants to know what they paid for this month and whether anything extra was added. Include:</p>
<ul>
<li><strong>Your business details:</strong> trading name, address, phone, email and logo. Add a contractor or pool operator licence number if your state or city expects it.</li>
<li><strong>Client and pool address:</strong> the billing name and, if different, the service address. Property managers often look after several pools, so the address matters.</li>
<li><strong>Invoice number and date:</strong> a sequential number such as POOL-2026-0412. The <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</li>
<li><strong>Service period:</strong> for example 1 to 31 October 2026, with the number of visits completed.</li>
<li><strong>Plan or per-visit charge:</strong> weekly full service, bi-weekly, or chemical-only.</li>
<li><strong>Extra chemicals:</strong> shock, algaecide, stabiliser, salt or phosphate remover beyond what the plan includes.</li>
<li><strong>Additional services:</strong> filter cleans, tile scrubbing, green pool recovery, openings and closings.</li>
<li><strong>Parts and repairs:</strong> pump seals, baskets, gaskets, labour for equipment work.</li>
<li><strong>Tax:</strong> only where your service or the goods you sell are taxable.</li>
<li><strong>Payment terms:</strong> due date, accepted methods and any late fee you have agreed with the client.</li>
</ul>
<p>Keep water test readings off the invoice itself, or add a single line in the notes such as "Chlorine and pH balanced at every visit". Detailed chemistry logs belong in your service report, which many clients like to see but do not need on a bill.</p>

<h2>Pool service pricing models and typical rates</h2>
<p>How you price shapes how the invoice reads. Most pool businesses use one of the models below, and many combine a monthly plan with per-job extras. The ranges come from published US cost guides at the time of writing. They vary by region, pool size, season, and whether chemicals are included, so treat them as rough illustrations rather than a price list.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Weekly full service</td><td>Flat monthly fee for skimming, brushing, vacuuming, baskets and routine chemicals</td><td>Roughly $100 to $300 per month</td><td>Weekly pool service, October, 4 visits</td></tr>
<tr><td>Chemical-only</td><td>Testing and balancing only, client does the cleaning</td><td>Often about $60 to $120 per month</td><td>Chemical service, bi-weekly, 2 visits</td></tr>
<tr><td>Per visit</td><td>Charge for each visit, common for occasional or holiday homes</td><td>Often about $35 to $100 per visit</td><td>Pool clean, single visit, 14 Oct</td></tr>
<tr><td>One-off jobs</td><td>Openings, closings, green-to-clean, filter cleans</td><td>Anything from under $100 to several hundred dollars</td><td>Green pool recovery, 3 visits, flat rate</td></tr>
</tbody></table>
<p>Large, salt-water or high-debris pools usually sit at the top of these ranges or above. Commercial pools at apartment buildings, hotels and gyms are priced differently again, because they often need more frequent visits and stricter record keeping.</p>
<h3>Chemicals: included or billed at cost?</h3>
<p>This is the biggest source of confusion in pool maintenance billing. There are two common approaches:</p>
<ul>
<li><strong>Chemicals included:</strong> routine chlorine and pH balancing is built into the monthly fee. Shock treatments, algaecide or large top-ups after a storm are billed as extras.</li>
<li><strong>Chemicals billed separately:</strong> the plan covers labour only, and every chemical is listed by quantity with your price. This suits pools with very variable demand.</li>
</ul>
<p>Either is fine, as long as the agreement says which one you use. If you bill chemicals separately, list each one with quantity and unit, such as "Liquid chlorine, 2 x 1 gal". An <a href="/blog/itemized-invoice">itemized invoice</a> is much easier to accept than a single line saying "chemicals, $46".</p>

<h2>Payment terms for pool maintenance billing</h2>
<p>Residential pool clients mostly pay monthly. The two common schedules are:</p>
<ol>
<li><strong>Billing in advance:</strong> send the invoice on the first of the month for that month's plan. This suits flat plans and protects you from clients who cancel without paying.</li>
<li><strong>Billing in arrears:</strong> send the invoice at the end of the month listing the actual visits, chemicals and extras. This suits variable work but means you carry the cost for a month.</li>
</ol>
<p>Due on receipt or net 15 is typical for homeowners, while property managers and HOAs often expect net 30. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the options. If you charge a late fee, put it in the service agreement and on the invoice, and keep it within local rules. See our overview of <a href="/blog/late-payment-fees">late payment fees</a> before setting one.</p>
<p>Because the bill is the same every month, it is worth reading our <a href="/blog/recurring-invoices-guide">guide to recurring invoices</a>. Our generator does not repeat or send invoices automatically, but it keeps your draft in the browser, so you can change the dates, visit count and extras each month and download a fresh PDF in a couple of minutes.</p>

<h2>Sample pool service invoice walk-through</h2>
<p>Here is an illustrative example. A pool company charges $160 per month for weekly full service with routine chemicals included. In October it made four visits, did one cartridge filter clean at $85, and used two bags of shock after a storm at $12 each. In this example the company works somewhere that does not tax the service, so tax is left at zero. Your situation may be different.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Weekly pool service, 1 to 31 Oct 2026 (4 visits)</td><td>1</td><td>$160.00</td><td>$160.00</td></tr>
<tr><td>Cartridge filter clean, 14 Oct</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>Shock treatment after storm, 1 lb bag</td><td>2</td><td>$12.00</td><td>$24.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$269.00</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and choose the USA preset, or the UK preset if you work in Britain.</li>
<li>Upload your logo and fill in your business name, address and phone number.</li>
<li>Enter the client's billing name and the pool address, plus the invoice number and due date.</li>
<li>Add the three line items with quantities and rates. The totals calculate automatically.</li>
<li>Set the tax rate only if your service is taxable. The generator supports one tax rate per invoice, so if only the chemicals are taxable in your area, consider invoicing goods separately or ask your adviser how to show it.</li>
<li>Add notes such as "Next filter clean due January. Thank you for your business." and your payment details.</li>
<li>Download the PDF and email it, or print it for clients who prefer paper.</li>
</ol>
<p>A clean, watery palette suits pool brands. Try the <a href="/invoice-templates/ocean">ocean invoice template</a> for a fresh look that still prints well.</p>

<h2>Billing repairs, openings and green-to-clean jobs</h2>
<p>One-off jobs should usually go on their own invoice rather than being buried in the monthly bill. That way the client can approve a repair quote, see the parts and labour, and pay it separately from the plan.</p>
<ul>
<li><strong>Equipment repairs:</strong> list labour hours and each part, such as "Pump shaft seal replacement, 1.5 hrs" and "Shaft seal kit, 1". Add the brand and model in the description if the client may need it for a warranty claim.</li>
<li><strong>Green-to-clean:</strong> a flat price or a per-visit rate, plus the extra chemicals. Note how many visits it took.</li>
<li><strong>Openings and closings:</strong> a flat labour fee plus chemicals, plugs and winter covers. In colder regions these are often booked with a deposit, which you enter as amount paid on the final invoice.</li>
</ul>
<p>The approach is similar to other outdoor property trades. Our <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> guide covers seasonal contracts and one-off jobs in more detail.</p>

<h2>Tax on pool cleaning services</h2>
<p>Sales tax on pool services is not uniform. Some US states tax pool cleaning and maintenance as a service, while many do not, and chemicals or parts you sell to the client are commonly taxable as goods. Read our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a>, check your state revenue department, and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to work out the figure if tax applies.</p>
<p>In the UK, VAT only applies once your taxable turnover passes the registration threshold or you register voluntarily. Other countries have their own rules. This is general information, not tax advice, so check with a qualified accountant before adding or leaving off tax.</p>

<h2>Skipped visits, weather and access problems</h2>
<p>Most pool billing disputes come from visits that did not happen. Set clear rules in your service agreement, then apply them on every invoice:</p>
<ul>
<li><strong>Missed by you:</strong> credit the visit on the next invoice or add a make-up visit, and say which.</li>
<li><strong>Weather delays:</strong> usually rescheduled rather than credited, as long as the visit happens within the month.</li>
<li><strong>Access blocked:</strong> locked gates or dogs in the yard. Many companies still charge the visit, but only if the agreement says so.</li>
<li><strong>Holidays:</strong> state whether the monthly fee changes when a client pauses service.</li>
</ul>
<p>On the invoice, show the actual visit count and a short note explaining any change. A simple line such as "3 of 4 visits, 1 visit credited" saves a phone call.</p>

<h2>Commercial and HOA pool billing</h2>
<p>Commercial pools at apartment complexes, hotels, gyms and HOA communities are billed differently from back-yard pools. Visits are more frequent, sometimes daily in summer, and the client usually has a manager or board who approves invoices before an accounts team pays them. Expect to provide a PO number, a monthly invoice that lists every visit date, and copies of your service logs on request. Payment terms of net 30 are common, so price the contract to cover the wait. If you look after several pools for one management company, ask whether they want one invoice per site or a single invoice with a line per property. Either way, put the site name in each description so nothing is paid against the wrong building.</p>

<h2>Common pool cleaning invoice mistakes</h2>
<ul>
<li><strong>Missing service period.</strong> "Pool service, $160" does not tell the client which month they are paying for. Always include dates.</li>
<li><strong>Unexplained chemical charges.</strong> List each chemical and quantity, especially when it is outside the plan.</li>
<li><strong>Mixing repairs into the monthly bill.</strong> A surprise $400 pump repair on a routine invoice leads to late payment. Quote it and invoice it separately.</li>
<li><strong>No written skip policy.</strong> Without one, every missed visit becomes a negotiation.</li>
<li><strong>Inconsistent billing dates.</strong> Clients pay more reliably when the invoice arrives on the same day every month.</li>
<li><strong>Reusing invoice numbers.</strong> Keep one numbering sequence across all clients so your records stay clean at tax time.</li>
</ul>

<h2>Conclusion</h2>
<p>A pool cleaning invoice template does not need to be complicated. Show the service period and visit count, list any chemicals, filter cleans or repairs beyond the plan, apply tax only where it is due, and print clear payment terms. Do that every month on the same date and most clients will simply pay. Build your next pool service invoice in the <a href="/invoice-generator">free invoice generator</a>, and browse our <a href="/blog/category/industry-invoices">industry invoice guides</a> for other trades.</p>
`,
  },
  {
    slug: "tree-service-invoice-template",
    title: "Tree Service Invoice Template: Removal, Pruning and Stumps",
    description:
      "Use this tree service invoice template to bill tree removal, pruning, stump grinding, haul-away and crane work clearly, with typical rates and a worked example.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["landscaping-invoice-template", "estimate-template", "deposit-invoice"],
    faqs: [
      {
        q: "What should a tree removal invoice include?",
        a: "Include your company details and any licence or insurance reference, the client and property address, a unique invoice number and date, a description of each tree (species, height or trunk diameter, location), the work done such as felling, stump grinding and haul-away, equipment like a crane or bucket truck, any permit fees, tax if it applies, deposits paid, the balance due and your payment terms.",
      },
      {
        q: "How much does tree removal cost in 2026?",
        a: "Published 2026 US cost guides put a typical single tree removal at somewhere around $300 to $1,500, with national averages quoted in the $800 to $900 area. Large trees, trees near buildings or power lines, and jobs needing a crane can cost several thousand dollars. Prices vary by region and access, so quote each job after seeing the tree.",
      },
      {
        q: "Do arborists charge by the hour or by the job?",
        a: "Most tree services quote by the job, because the price depends on the tree size, access, risk and clean-up. Hourly rates are used for some pruning, consulting and storm clean-up work, and cost guides often quote around $75 to $200 per hour where hourly billing is used. Whichever you choose, state it on the estimate and on the arborist invoice.",
      },
      {
        q: "Should stump grinding be a separate line on the invoice?",
        a: "Yes. Many clients assume stump removal is included in a tree removal price when it often is not. Listing stump grinding as its own line, usually priced per stump or by stump diameter, makes the scope clear. If you quoted it as optional, show it only if the client accepted it, and note the depth you ground to.",
      },
      {
        q: "Should a tree service take a deposit?",
        a: "Deposits are common for large removals, crane jobs and work that needs permits, because you may have to book equipment or crews in advance. Issue a deposit invoice when the client accepts the estimate, then enter the deposit as amount paid on the final invoice. Check any local rules on contractor deposits, as some states limit how much can be taken upfront.",
      },
      {
        q: "Will homeowners insurance pay my tree service invoice?",
        a: "Sometimes. Insurers commonly cover removal of a tree that fell on an insured structure after a storm, usually up to a policy limit, but not routine removal of healthy or dead standing trees. The client makes the claim, not you. A detailed invoice with dates, photos referenced in the notes and separate lines for each task makes the claim easier.",
      },
      {
        q: "Do I charge sales tax on tree services?",
        a: "Rules vary. Some US states tax tree trimming and removal as a landscaping or real property service, and many do not. Firewood or mulch you sell may be taxable as goods. In the UK, VAT applies once you are VAT-registered. Check your state revenue department or HMRC guidance and confirm with a qualified tax adviser.",
      },
      {
        q: "What payment terms are normal for tree work?",
        a: "Residential tree work is usually due on completion or within 7 to 14 days, often with a deposit for larger jobs. Commercial, municipal and property management clients commonly pay on net 30 terms and may require a purchase order. Print the due date and accepted payment methods on every invoice and agree any late fee in writing before work starts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A tree service invoice template lists your company details, the client and property address, a unique invoice number, a description of each tree and the work done (removal, pruning, stump grinding, haul-away), equipment such as a crane, any permit fees, deposits already paid, tax if it applies and the balance due with clear payment terms.</p>

<p>Tree work is expensive, risky and often a surprise to the client. A storm drops a limb on the garage, or a dying oak needs to come down before winter. The bill can run to thousands of dollars, so the client wants to see exactly what they are paying for, and their insurer may want to see it too. A detailed tree service invoice template protects you in both cases.</p>

<p>This guide covers what to include on a tree removal invoice, how arborists price work, deposits and payment terms, a worked example, insurance claims, tax and the common mistakes to avoid.</p>

<h2>What a tree service invoice template should include</h2>
<p>A good tree service invoice template mirrors the estimate the client accepted, so they can compare the two line by line. Include:</p>
<ul>
<li><strong>Company details:</strong> name, address, phone, email and logo, plus your contractor licence, arborist certification or insurance reference if clients or your state expect it.</li>
<li><strong>Client and job address:</strong> the billing contact and the property where the trees are.</li>
<li><strong>Invoice number and date:</strong> sequential, such as TREE-2026-0287. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a format.</li>
<li><strong>Tree descriptions:</strong> species, approximate height or trunk diameter, and location, for example "Silver maple, approx. 60 ft, rear yard by fence".</li>
<li><strong>Work performed:</strong> felling, sectional removal, crown reduction, deadwooding, cabling, stump grinding.</li>
<li><strong>Equipment:</strong> crane, bucket truck, chipper or stump grinder, if charged separately.</li>
<li><strong>Clean-up and haul-away:</strong> chipping, log removal or logs left on site at the client's request.</li>
<li><strong>Permits:</strong> local tree removal permit fees you paid on the client's behalf.</li>
<li><strong>Deposit and balance:</strong> deposit received shown as amount paid.</li>
<li><strong>Payment terms:</strong> due date, methods and any late fee agreed in writing.</li>
</ul>
<p>Reference the estimate number in the notes, such as "Per estimate EST-0287 accepted 3 Oct 2026". If the scope changed on the day, explain why in a sentence.</p>

<h2>Tree service pricing models and typical rates</h2>
<p>Tree work is usually quoted per job, because size, access and risk matter more than time. The ranges below come from published US cost guides at the time of writing. They vary by region, tree size, access, proximity to buildings or power lines, and crew size, so treat them as rough illustrations only.</p>
<table><thead><tr><th>Service</th><th>How it is usually priced</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Tree removal</td><td>Per tree, based on height, diameter and access</td><td>Roughly $300 to $1,500 for a typical tree; large or hazardous trees can cost several thousand</td><td>Remove red oak, approx. 50 ft, front yard</td></tr>
<tr><td>Pruning and trimming</td><td>Per tree or per crew day</td><td>Often a few hundred dollars per tree</td><td>Crown thinning and deadwood, 2 maples</td></tr>
<tr><td>Hourly crew work</td><td>Crew hours, common for storm clean-up</td><td>Often quoted around $75 to $200 per hour</td><td>Storm clean-up, 3-person crew, 4 hrs</td></tr>
<tr><td>Stump grinding</td><td>Per stump or per inch of diameter</td><td>Often around $100 to $400 per stump</td><td>Grind stump, 24 in diameter, 6 in below grade</td></tr>
<tr><td>Crane or bucket truck</td><td>Day or half-day rate, or built into the job price</td><td>Can add hundreds to thousands of dollars</td><td>Crane hire, half day, sectional removal</td></tr>
</tbody></table>
<p>Many arborists bundle equipment into the job price. Others show it separately so the client understands why a tree next to the house costs far more than the same tree in an open field. Either works, but an arborist invoice that explains the access problem is easier to accept.</p>

<h2>Estimates, deposits and change orders</h2>
<p>Tree work almost always starts with a written quote. Use an <a href="/blog/estimate-template">estimate template</a> to set out each tree and task, then build the invoice from the same lines. Our explainer on <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> covers the difference if clients mix them up.</p>
<ol>
<li><strong>Send the estimate.</strong> List each tree, task and optional extra such as stump grinding or log splitting.</li>
<li><strong>Take a deposit for large jobs.</strong> Crane removals and permit jobs often need one. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains the process.</li>
<li><strong>Record changes.</strong> If you find rot, a hidden wire or a second stump, get the client's approval before doing extra work. A short <a href="/blog/scope-creep-change-order">change order</a> keeps it clear.</li>
<li><strong>Issue the final invoice.</strong> List all completed work, subtract the deposit, and show the balance due.</li>
</ol>
<p>Some US states limit how much a home improvement contractor can take as a deposit before work starts. Check your state's rules before setting a deposit policy.</p>

<h2>Sample tree removal invoice walk-through</h2>
<p>Here is an illustrative example. A homeowner accepts an estimate to remove a dead ash tree close to the house, grind the stump and haul away all debris. Because of the house, the crew uses a crane for half a day. The client paid a $500 deposit when booking. In this example the service is not taxable where the company works. Check the rules for your location.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Sectional removal, dead ash, approx. 55 ft, rear of house</td><td>1</td><td>$1,450.00</td><td>$1,450.00</td></tr>
<tr><td>Crane hire, half day</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Stump grinding, 28 in diameter</td><td>1</td><td>$220.00</td><td>$220.00</td></tr>
<tr><td>Chip and haul away all debris</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$2,500.00</strong></td></tr>
<tr><td colspan="3">Deposit received (12 Oct 2026)</td><td>-$500.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$2,000.00</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and pick the USA preset, or the UK preset for British work.</li>
<li>Add your company logo, name, contact details and licence number.</li>
<li>Enter the client, the job address and an invoice number.</li>
<li>Add the four line items with quantity and rate.</li>
<li>Leave tax at zero unless your service is taxable. The generator applies one tax rate to the whole invoice.</li>
<li>Enter $500 in the amount paid field so the balance due shows $2,000.</li>
<li>In the notes, reference the estimate number, the stump grinding depth and your payment terms, then download the PDF.</li>
</ol>
<p>A green palette suits outdoor trades. The <a href="/invoice-templates/emerald">emerald invoice template</a> gives a clean, natural look.</p>

<h2>Storm work and insurance claims</h2>
<p>After storms, tree services are flooded with emergency calls. These jobs are often paid in part by the homeowner's insurer, which changes what the invoice needs to show. Insurers commonly cover removing a tree that fell on an insured structure, usually up to a policy limit, but not routine removal of standing trees. The client handles the claim, but your invoice is the main evidence.</p>
<ul>
<li><strong>Date the work clearly:</strong> the date of the storm and the date of the work.</li>
<li><strong>Separate the tasks:</strong> removal from the roof, removal of the trunk on the ground, stump grinding and clean-up as different lines, because the insurer may cover some but not others.</li>
<li><strong>Describe the damage:</strong> for example "Removed fallen oak from garage roof".</li>
<li><strong>Reference photos:</strong> note that before and after photos are available on request.</li>
</ul>
<p>Emergency call-out or after-hours rates should be agreed with the client before work starts and shown as their own line. Similar urgent seasonal trades face the same issue; see our <a href="/blog/snow-removal-invoice-template">snow removal invoice template</a> for another example.</p>

<h2>Payment terms for tree work</h2>
<p>Residential clients usually pay on completion or within 7 to 14 days. Commercial clients, municipalities and property managers often work on net 30 terms and may need a PO number on the invoice. Whatever you choose, print the due date and accepted payment methods on every invoice. If you add a late fee, agree it in writing first and keep within local rules.</p>
<p>Because tree work often sits alongside other outdoor services, many companies use the same paperwork for mowing contracts and one-off jobs. Our <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> guide covers monthly maintenance billing if you offer both.</p>

<h2>Tax on tree services</h2>
<p>Sales tax treatment of tree removal and trimming varies by state. Some states treat it as a taxable landscaping or real property service, many do not, and firewood or mulch you sell may be taxable as goods. Check your state revenue department and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if tax applies. In the UK, VAT applies only once you are registered. This is general information, so confirm with a qualified tax adviser.</p>

<h2>Commercial, municipal and utility work</h2>
<p>Larger clients bring more paperwork. Property managers, HOAs, schools and local councils usually issue a purchase order before work starts, and their accounts teams will reject an invoice that does not quote it. They may also ask for proof of insurance, a certificate of completion, or a breakdown of crew hours even on a fixed-price job. Before you start, ask the client what they need on the invoice and in what format, and keep a copy of the PO with your job file.</p>
<p>Multi-site contracts, such as pruning every street tree in a development, are easier to manage if each invoice covers one period and lists the trees or locations completed in that period. A line such as "Crown lift, 14 street trees, Oak Avenue, plots 1 to 14" lets the client tick off the work against their map. If the contract includes retainage or staged payments, show the amount retained or paid to date in the notes so both sides can reconcile it. For one-off residential work, a simpler tree service invoice template is enough, but the same principle applies: describe the work so clearly that someone who was not on site can check it.</p>
<h3>Firewood, logs and wood chips</h3>
<p>Some clients want the logs left for firewood; others want everything gone. Note which on the invoice. If you sell firewood or mulch, invoice it separately from the tree work, as goods may be taxed differently from services, and record it as income like any other sale.</p>

<h3>Permits and protected trees</h3>
<p>Many towns and cities require a permit before removing larger trees or trees in conservation areas, and some protect particular species. If you apply for the permit, show the fee on the invoice as a separate line at cost, with the permit reference in the description. If the client applied, note the reference anyway so your records show the work was authorised.</p>

<h2>Common tree service invoice mistakes</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Tree work, $2,500" invites questions. Name the tree, its size and location.</li>
<li><strong>Assuming stump removal is included.</strong> Make stump grinding a separate line, or state clearly that it is excluded.</li>
<li><strong>Skipping change orders.</strong> Extra work found on the day should be approved before you do it.</li>
<li><strong>Forgetting the deposit.</strong> Always enter it as amount paid so the balance is correct.</li>
<li><strong>Lumping storm work together.</strong> Separate lines help the client's insurance claim and get you paid faster.</li>
<li><strong>Not mentioning debris.</strong> State whether logs, chips and brush were hauled away or left on site.</li>
</ul>

<h2>Conclusion</h2>
<p>A tree service invoice template should tell the full story of the job: which trees, what was done, which equipment was needed, and what has already been paid. Match it to the estimate, apply the deposit, and put your terms in writing. Create your next tree removal invoice in the <a href="/invoice-generator">free invoice generator</a> and download the PDF in minutes. For more trade guides, see our <a href="/blog/category/industry-invoices">industry invoice articles</a>.</p>
`,
  },
  {
    slug: "carpet-cleaning-invoice-template",
    title: "Carpet Cleaning Invoice Template: Rooms, Rates and Receipts",
    description:
      "Use this carpet cleaning invoice template to bill per room or per square foot, stain treatment, stairs and upholstery cleaning, with typical rates and a sample.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "cleaning-service-invoice-template",
      "pressure-washing-invoice-template",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "What should a carpet cleaning invoice include?",
        a: "Include your business name and contact details, the client and service address, a unique invoice number and date, each area cleaned (rooms, stairs, hallways or square footage), the cleaning method, add-ons such as stain treatment, pet odour treatment or protector, upholstery items, any discount, tax if it applies, the total, and how the client paid or should pay.",
      },
      {
        q: "How much does carpet cleaning cost per room?",
        a: "Published 2026 US cost guides commonly put residential carpet cleaning at about $25 to $75 per room, or around $0.20 to $0.50 per square foot, with minimum call-out charges for small jobs. Prices vary by region, carpet type, method and how soiled the carpet is. Use these as rough guides and set your own rates from local competition and your costs.",
      },
      {
        q: "Is a carpet cleaning receipt the same as an invoice?",
        a: "No. An invoice requests payment and shows what is owed and when. A carpet cleaning receipt confirms that payment was made, with the amount, date and method. Most residential jobs are paid on the day, so many cleaners issue an invoice marked paid, which works as a receipt. Commercial clients usually want a proper invoice with payment terms.",
      },
      {
        q: "How do I bill upholstery cleaning?",
        a: "Upholstery cleaning billing usually works per piece rather than per square foot: a sofa, loveseat, armchair, dining chair or ottoman, each with its own rate. List each piece as a separate line with quantity, and add fabric protector or stain treatment as extras. Note the fabric type in the description if it affected the method or price, such as delicate or dry-clean-only fabric.",
      },
      {
        q: "Should carpet cleaners charge a minimum fee?",
        a: "Many carpet cleaning businesses set a minimum charge so that small jobs still cover travel, setup and equipment time. Cost guides often mention minimums somewhere around $75 to $150, but this varies widely by region. If you use one, state it on your price list and show it on the invoice as Minimum service charge when the job total falls below it.",
      },
      {
        q: "Do I need to charge sales tax on carpet cleaning?",
        a: "It depends on your location. Some US states tax carpet and upholstery cleaning as a service, while many do not, and products sold to clients may be taxable. In the UK, VAT applies once you are VAT-registered. Check your state revenue department or HMRC guidance and ask a qualified tax adviser before adding tax to your invoices.",
      },
      {
        q: "Can I guarantee stain removal on the invoice?",
        a: "It is safer not to. Some stains, such as old pet urine, bleach or dye, are permanent, and promising removal invites disputes. Note in the description that stain treatment was applied and add a line in the terms such as Stain removal not guaranteed, permanent stains may remain. Agree that wording before the job, not only on the invoice.",
      },
      {
        q: "How do I invoice carpet cleaning for landlords and property managers?",
        a: "Landlords and property managers usually want one invoice per property or unit, with the unit address, move-out date and any tenant damage noted separately. They often pay on net 15 or net 30 terms and may require a PO number. Keep your descriptions factual, as they may use your invoice when deciding deductions from a tenant deposit.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A carpet cleaning invoice template lists your business details, the client and service address, a unique invoice number and date, each room or area cleaned (or the square footage), the cleaning method, add-ons such as stain or pet odour treatment, upholstery pieces, any discount, tax where it applies, the total and payment details. Mark it paid to use it as a receipt.</p>

<p>Carpet cleaning jobs are short and usually paid on the day, so it is tempting to skip proper paperwork. But clients often ask for a carpet cleaning receipt for a landlord, an insurance claim or their own records, and commercial clients will not pay without an invoice. A simple carpet cleaning invoice template covers all of these with one document.</p>

<p>This guide covers what to include, pricing per room and per square foot, upholstery cleaning billing, receipts, a worked example in our free invoice generator, tax, and the most common mistakes. If you also do general domestic or office cleaning, see our <a href="/blog/cleaning-service-invoice-template">cleaning service invoice template</a> guide as well.</p>

<h2>What a carpet cleaning invoice template should include</h2>
<p>Clients want to see what was cleaned and what each extra cost. A clear carpet cleaning invoice template includes:</p>
<ul>
<li><strong>Your business details:</strong> name, address, phone, email and logo.</li>
<li><strong>Client and service address:</strong> important for landlords and property managers with several units.</li>
<li><strong>Invoice number and date:</strong> sequential, such as CC-2026-0931. Use our <a href="/tools/invoice-number-generator">invoice number generator</a> to pick a format.</li>
<li><strong>Areas cleaned:</strong> each room, hallway and staircase, or the total square footage.</li>
<li><strong>Method:</strong> hot water extraction, low-moisture or encapsulation, if clients care or it affects price.</li>
<li><strong>Add-ons:</strong> pre-spotting, pet odour treatment, carpet protector, deodoriser, furniture moving.</li>
<li><strong>Upholstery and rugs:</strong> each piece listed separately.</li>
<li><strong>Discounts:</strong> package deals or repeat-client discounts.</li>
<li><strong>Tax:</strong> only where carpet cleaning or products sold are taxable.</li>
<li><strong>Payment status:</strong> amount paid, method and balance due.</li>
</ul>
<p>Add a short note on stains. Some marks are permanent, so a line such as "Stain treatment applied, full removal not guaranteed" protects you without sounding defensive.</p>

<h2>Carpet cleaning pricing models and typical rates</h2>
<p>Most carpet cleaners price per room, per square foot, or with a minimum charge. The ranges below come from published US cost guides at the time of writing. They vary by region, carpet type, method, soiling and room size, so treat them as rough illustrations only.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Per room</td><td>Flat price per standard room, with large rooms counted as two</td><td>About $25 to $75 per room</td><td>Carpet cleaning, bedroom, hot water extraction</td></tr>
<tr><td>Per square foot</td><td>Measured area x rate, common for large homes and offices</td><td>About $0.20 to $0.50 per sq ft residential; commercial often lower</td><td>Office carpet, 1,800 sq ft, low-moisture</td></tr>
<tr><td>Stairs</td><td>Per step or per flight</td><td>Often a few dollars per step</td><td>Stairs, 14 steps</td></tr>
<tr><td>Minimum charge</td><td>Floor price for small jobs to cover travel and setup</td><td>Often around $75 to $150</td><td>Minimum service charge</td></tr>
<tr><td>Upholstery</td><td>Per piece</td><td>Varies by piece size and fabric</td><td>Upholstery cleaning, 3-seat sofa</td></tr>
</tbody></table>
<p>Whichever model you use, show the unit on the invoice. "5 rooms at $45" or "1,800 sq ft at $0.25" is much easier to check than a single total. An <a href="/blog/itemized-invoice">itemized invoice</a> also makes it obvious that add-ons were agreed extras rather than surprises.</p>
<h3>Package deals and discounts</h3>
<p>Many cleaners advertise packages such as "any 3 rooms for one price". On the invoice, you can either show the package as one line or list each room at the normal rate and apply a discount. The second approach shows the client the saving, which encourages repeat bookings. Our guide to <a href="/blog/discount-on-invoice">showing a discount on an invoice</a> explains both options.</p>

<h2>Upholstery cleaning billing</h2>
<p>Upholstery cleaning billing works differently from carpet. Clients think in pieces of furniture, not square feet, so price and invoice per piece:</p>
<ul>
<li><strong>Sofas and sectionals:</strong> per seat or per section, with a note for very large pieces.</li>
<li><strong>Armchairs and recliners:</strong> one line each.</li>
<li><strong>Dining chairs:</strong> quantity x rate, often seat only or seat and back.</li>
<li><strong>Mattresses and rugs:</strong> per item or by size.</li>
<li><strong>Fabric protector:</strong> a separate add-on line per piece.</li>
</ul>
<p>Note the fabric type if it changed the method or price, for example "Velvet, low-moisture method". It shows the client why one piece cost more than another and records what you used if they later have questions.</p>

<h2>Sample carpet cleaning invoice walk-through</h2>
<p>Here is an illustrative example. A homeowner books carpet cleaning for four rooms and the stairs, pet odour treatment in one bedroom, and upholstery cleaning for a three-seat sofa. The business gives a 10% repeat-client discount. In this example the service is not taxable where the business works. Check your own rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Carpet cleaning, hot water extraction, per room</td><td>4</td><td>$45.00</td><td>$180.00</td></tr>
<tr><td>Stairs, per step</td><td>13</td><td>$4.00</td><td>$52.00</td></tr>
<tr><td>Pet odour treatment, bedroom 2</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td>Upholstery cleaning, 3-seat sofa</td><td>1</td><td>$110.00</td><td>$110.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$377.00</strong></td></tr>
<tr><td colspan="3">Repeat-client discount (10%)</td><td>-$37.70</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$339.30</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and select the USA or UK preset.</li>
<li>Add your logo, business name and contact details.</li>
<li>Enter the client name, service address and invoice number.</li>
<li>Add the four line items with quantities and rates.</li>
<li>Set the invoice discount to 10%. The generator applies one invoice-level discount, in percent or a fixed amount, before tax.</li>
<li>Leave tax at zero unless your service is taxable.</li>
<li>If the client paid on the day, enter $339.30 as amount paid so the balance shows zero, then download the PDF as their receipt.</li>
</ol>
<p>A crisp blue design suits cleaning brands. Try the <a href="/invoice-templates/blue">blue invoice template</a> for a fresh, professional look.</p>

<h2>Carpet cleaning receipt vs invoice</h2>
<p>Most residential carpet cleaning is paid when the job is done, so clients often want a carpet cleaning receipt rather than an invoice. The difference is simple: an invoice asks for payment, a receipt confirms it was made. You can use the same template for both. Enter the payment as amount paid, note the method in the notes, and the PDF shows a zero balance.</p>
<p>Issue a proper invoice with payment terms for landlords, offices and anyone paying later. For more detail, read our guide to <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> or use a dedicated <a href="/blog/payment-receipt-template">payment receipt template</a>.</p>

<h2>Commercial, landlord and move-out cleans</h2>
<p>Commercial and rental work brings different expectations:</p>
<ul>
<li><strong>Offices and shops:</strong> usually priced per square foot, invoiced monthly or per visit, and paid on net 15 or net 30 terms. Include any PO number.</li>
<li><strong>Landlords and letting agents:</strong> one invoice per unit, with the unit address and the move-out date. Note any stains or damage factually.</li>
<li><strong>Property managers:</strong> may want a single monthly invoice listing every unit cleaned.</li>
</ul>
<p>Landlords may use your invoice when deciding whether to deduct cleaning costs from a tenant deposit, so keep descriptions accurate and neutral. Our <a href="/blog/property-management-invoice-template">property management invoice template</a> guide covers billing for managed portfolios.</p>

<h3>Keeping records of cash and card jobs</h3>
<p>Because so many carpet cleaning jobs are paid on the spot, it is easy for small cash payments to slip through the cracks. Issue a numbered invoice or receipt for every job, even a single-room clean, and match card settlements to invoices at the end of each week. Clean records make your tax return simpler and give you real figures on which services and areas earn the most.</p>

<h2>Tax on carpet cleaning</h2>
<p>Sales tax on carpet and upholstery cleaning varies by state. Some states tax cleaning services and many do not, while products you sell, such as spot cleaner, are commonly taxable. Check your state revenue department before adding tax. In the UK, VAT only applies once you are VAT-registered. This is general information, not tax advice; check with a qualified accountant for your situation.</p>

<h2>Pre-inspection, moving furniture and add-on charges</h2>
<p>Most disputes on carpet cleaning jobs are about extras the client did not expect. The fix is to walk the rooms with the client before you start, agree the price for anything beyond the basic clean, and write it on the invoice exactly as agreed. Common extras include:</p>
<ul>
<li><strong>Moving furniture:</strong> some cleaners include light furniture, others charge per heavy item. State your policy on the booking confirmation.</li>
<li><strong>Heavy soiling:</strong> very dirty high-traffic areas may need a second pass or pre-scrub, often priced as an add-on.</li>
<li><strong>Pet urine treatment:</strong> enzyme or sub-surface treatment is slower and costs more than standard spotting.</li>
<li><strong>Carpet protector:</strong> priced per room or per square foot.</li>
<li><strong>Area rugs:</strong> cleaned on site or taken away, priced by size.</li>
</ul>
<p>Note any pre-existing damage you saw before starting, such as fraying, loose seams or colour loss, in the invoice notes or your job sheet. It protects you if the client later blames the clean. For repeat clients, keep the same descriptions each visit so your carpet cleaning invoice template reads consistently and the client can compare one visit with the last.</p>
<h3>Drying time and aftercare notes</h3>
<p>Use the notes area for practical aftercare: expected drying time, keeping pets off damp carpet, and when to put furniture back. Clients appreciate it, and it reduces calls about damp patches. Add a rebooking suggestion too, for example "Recommended next clean: April 2027", which turns a one-off receipt into a reminder to book again.</p>

<h2>Payment terms and taking payment on the day</h2>
<p>Residential carpet cleaning is normally due on completion. Tell the client when booking which payment methods you accept, so they are ready when you finish. Card readers and payment apps make this easy, and the card receipt plus your invoice marked paid gives the client everything they need. For cash, write the amount received and the date in the notes before you download the PDF.</p>
<p>Commercial clients, landlords and letting agents usually expect an invoice with terms such as net 15 or net 30. Print the due date clearly and include your bank or payment details. If a client wants regular cleans, such as quarterly office carpets, agree the price per visit in advance and send each invoice on the day of the visit so the paperwork never falls behind. A deposit is rarely needed for a standard clean, but some businesses ask for one on very large commercial jobs or when booking a full day.</p>

<h2>Common carpet cleaning invoice mistakes</h2>
<ul>
<li><strong>Single unexplained totals.</strong> List rooms, stairs and add-ons separately so the client can see what each item cost.</li>
<li><strong>Surprise add-ons.</strong> Pet treatment or protector should be agreed before you apply it, then shown as its own line.</li>
<li><strong>Promising stain removal.</strong> Note that treatment was applied, not that the stain is gone.</li>
<li><strong>No receipt for cash payments.</strong> Always record cash jobs and give a receipt; it keeps your income records complete.</li>
<li><strong>Missing service address.</strong> Landlords and property managers need it to match your invoice to the right unit.</li>
<li><strong>Inconsistent numbering.</strong> Use one sequence for every job so your records are easy to follow.</li>
</ul>

<h2>Conclusion</h2>
<p>A carpet cleaning invoice template should show what was cleaned, how it was priced, which extras were agreed, and whether the client has paid. Use the same template as a carpet cleaning receipt for same-day jobs and as a proper invoice with terms for commercial clients. Create yours in the <a href="/invoice-generator">free invoice generator</a> and browse more <a href="/blog/category/industry-invoices">industry invoice guides</a> for related trades.</p>
`,
  },
  {
    slug: "flooring-invoice-template",
    title: "Flooring Invoice Template: Materials, Labor and Deposits",
    description:
      "Use this flooring invoice template to bill materials and labor for hardwood, tile, LVP and carpet installs, with deposits, change orders and a worked example.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "contractor-invoice-template",
      "construction-invoice-guide",
      "handyman-invoice-template",
    ],
    faqs: [
      {
        q: "What should a flooring installation invoice include?",
        a: "Include your company details and licence number if required, the client and job address, a unique invoice number and date, the floor type and area in square feet or metres, materials with quantities and prices, labor for removal, prep and installation, trim and transitions, disposal, deposits and progress payments received, tax where it applies, the balance due and your payment terms.",
      },
      {
        q: "Should I separate materials and labor on a flooring invoice?",
        a: "Yes, in most cases. Separating materials and labor shows the client what they are paying for, makes change orders easier, and can matter for sales tax, because some US states tax materials differently from installation labor. List each material with quantity and unit price, then list removal, prep and installation labor as their own lines.",
      },
      {
        q: "How much does flooring installation labor cost?",
        a: "Published 2026 US cost guides vary widely, but commonly quote labor roughly in the range of $1.50 to $5 per square foot for luxury vinyl plank and roughly $3 to $8 per square foot for hardwood, with tile often higher because of prep and layout. Rates vary by region, product, subfloor condition and room shape, so use local quotes to set prices.",
      },
      {
        q: "How much deposit should a flooring contractor take?",
        a: "Flooring contractors often take a deposit that at least covers materials, because flooring is ordered to the job and may not be returnable. Some states cap home improvement deposits, for example as a percentage of the contract price or a fixed amount, so check your state rules before setting a policy. Show the deposit as amount paid on the final invoice.",
      },
      {
        q: "How do I bill for subfloor repairs found during a job?",
        a: "Stop and get the client's approval before doing unplanned work. Write a short change order describing the problem, such as rotten subfloor in the bathroom doorway, the fix and the price. Once approved, add it as its own line on the invoice and reference the change order number in the description so the client can see it was agreed.",
      },
      {
        q: "Should I charge for waste and overage on flooring materials?",
        a: "Yes, it is normal. Most flooring needs extra material for cuts, pattern matching and future repairs, commonly somewhere around 5 to 15 percent depending on the product and layout. Show it either within the material quantity or as a separate overage line, and explain in the notes that leftover boxes are left with the client for future repairs.",
      },
      {
        q: "Do I charge sales tax on flooring installation?",
        a: "It depends where you work. In some US states contractors pay tax on materials when they buy them and do not charge it on installation; in others the client pays tax on materials or the whole job. In the UK, VAT applies once you are registered and the construction reverse charge can apply to some business-to-business work. Ask a qualified tax adviser.",
      },
      {
        q: "Can I make a flooring invoice for free?",
        a: "Yes. A free online invoice generator lets you list materials and labor, apply one tax rate, enter a deposit as amount paid, add a PO number and download a PDF. It does not take payments, send invoices or track progress billing for you, so keep a simple record of each stage invoice and the payments received alongside the PDFs.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A flooring invoice template lists your company details, the client and job address, a unique invoice number, the floor type and area, materials with quantities and unit prices, labor for removal, prep and installation, trim and disposal, any approved change orders, deposits received, tax where it applies and the balance due with payment terms.</p>

<p>Flooring jobs mix two very different costs: expensive materials ordered for the job, and skilled labor that depends on the subfloor you find when the old floor comes up. If the invoice lumps them together, clients question the total and disputes over extra work become hard to settle. A clear flooring invoice template that separates materials and labor solves most of that.</p>

<p>This guide covers what to include on a flooring installation invoice, pricing models, deposits and progress payments, change orders, a worked example in our free invoice generator, tax, and common mistakes. If you work across trades, our <a href="/blog/contractor-invoice-template">contractor invoice template</a> guide covers general building work too.</p>

<h2>What a flooring invoice template should include</h2>
<p>A good flooring invoice template matches the estimate the client signed and adds anything approved along the way. Include:</p>
<ul>
<li><strong>Company details:</strong> name, address, phone, email, logo and contractor licence number if your state requires it on paperwork.</li>
<li><strong>Client and job address:</strong> plus any PO number for builders or commercial clients.</li>
<li><strong>Invoice number and date:</strong> sequential and unique for every invoice, including deposit and progress invoices.</li>
<li><strong>Floor type and area:</strong> for example "Engineered oak, 7 in plank, living and dining, 420 sq ft".</li>
<li><strong>Materials:</strong> flooring, underlayment, adhesive, grout, moisture barrier, trims and transitions, each with quantity and unit price.</li>
<li><strong>Labor:</strong> removal of old flooring, subfloor prep, installation, baseboard work, each as its own line.</li>
<li><strong>Disposal:</strong> hauling and dumping old flooring.</li>
<li><strong>Change orders:</strong> approved extras, referenced by number.</li>
<li><strong>Payments received:</strong> deposit and any progress payments.</li>
<li><strong>Tax and terms:</strong> tax where it applies, due date and payment methods.</li>
</ul>

<h2>Flooring pricing models and typical rates</h2>
<p>Flooring is usually priced per square foot (or square metre), with separate rates for materials and labor, plus fixed charges for removal, stairs and disposal. The labor ranges below come from published US cost guides at the time of writing, which disagree with each other quite a bit. Rates vary by region, product, subfloor condition and room layout, so treat them as rough illustrations only.</p>
<table><thead><tr><th>Floor type</th><th>Labor pricing basis</th><th>Typical labor range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Luxury vinyl plank (LVP)</td><td>Per sq ft installed</td><td>Roughly $1.50 to $5 per sq ft</td><td>Install LVP, floating, 650 sq ft</td></tr>
<tr><td>Hardwood (solid or engineered)</td><td>Per sq ft, nail-down or glue-down</td><td>Roughly $3 to $8 per sq ft</td><td>Install engineered oak, glue-down, 420 sq ft</td></tr>
<tr><td>Tile</td><td>Per sq ft, higher for small tiles and patterns</td><td>Often higher than plank floors because of prep and layout</td><td>Install porcelain tile, 12x24, bathroom, 85 sq ft</td></tr>
<tr><td>Carpet</td><td>Per sq ft or per sq yd</td><td>Varies widely, often quoted with pad included</td><td>Install carpet and pad, 3 bedrooms</td></tr>
<tr><td>Removal and prep</td><td>Per sq ft or flat fee</td><td>Often a separate charge of a dollar or more per sq ft</td><td>Remove and dispose existing carpet and tack strip</td></tr>
</tbody></table>
<p>Stairs, borders, herringbone patterns and floor leveling are usually priced separately because they take far longer per square foot. Show them as their own lines so the client sees why the stairs cost as much as the hallway.</p>
<h3>Materials and markup</h3>
<p>Most flooring contractors either supply materials at a marked-up price or let the client buy materials and charge labor only. If you supply materials, list them with your price per unit. You do not have to show your supplier cost or markup, but your price should be consistent with the estimate. Our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> helps you set a fair material price that still covers ordering, collection and handling.</p>
<p>Include a waste allowance in the material quantity, commonly somewhere around 5 to 15 percent depending on the product and layout, and say in the notes that leftover boxes are left with the client for future repairs.</p>

<h2>Deposits, progress payments and change orders</h2>
<p>Flooring is ordered to the job, often in a specific batch or dye lot that cannot be returned. That makes deposits normal. A typical flow looks like this:</p>
<ol>
<li><strong>Estimate:</strong> set out materials, labor and exclusions. Use an <a href="/blog/estimate-template">estimate template</a> so the invoice can reuse the same lines.</li>
<li><strong>Deposit invoice:</strong> issued when the client accepts, often sized to cover materials. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains how to word it.</li>
<li><strong>Progress invoice:</strong> for larger jobs, a stage payment after removal and prep or after the first floor is laid.</li>
<li><strong>Change orders:</strong> for subfloor repairs, extra rooms or upgraded trims, approved in writing before the work. See our guide to <a href="/blog/scope-creep-change-order">change orders and scope creep</a>.</li>
<li><strong>Final invoice:</strong> lists all work, subtracts payments received and shows the balance.</li>
</ol>
<p>Some US states limit the deposit a home improvement contractor can take before starting work. Check your state rules before setting your policy. For larger renovation projects, our <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers progress billing and retainage in more detail.</p>

<h2>Sample flooring installation invoice walk-through</h2>
<p>Here is an illustrative example. A homeowner has 420 sq ft of carpet replaced with engineered hardwood in the living and dining rooms. The contractor supplies materials, removes the old carpet, and after removal finds a soft spot in the subfloor, fixed under an approved change order. The client paid a $3,000 deposit. For simplicity this example shows no sales tax; your state may tax materials, labor or both.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Engineered oak flooring, sq ft (incl. 8% waste)</td><td>454</td><td>$6.20</td><td>$2,814.80</td></tr>
<tr><td>Underlayment and adhesive, sq ft</td><td>420</td><td>$0.90</td><td>$378.00</td></tr>
<tr><td>Remove and dispose existing carpet and pad, sq ft</td><td>420</td><td>$1.00</td><td>$420.00</td></tr>
<tr><td>Install engineered hardwood, glue-down, sq ft</td><td>420</td><td>$4.50</td><td>$1,890.00</td></tr>
<tr><td>Transitions and quarter round, lot</td><td>1</td><td>$240.00</td><td>$240.00</td></tr>
<tr><td>Change order CO-1: subfloor repair, dining doorway</td><td>1</td><td>$275.00</td><td>$275.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$6,017.80</strong></td></tr>
<tr><td colspan="3">Deposit received (6 Oct 2026)</td><td>-$3,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$3,017.80</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and choose the USA or UK preset.</li>
<li>Add your company logo, name, licence number and contact details.</li>
<li>Enter the client, job address, invoice number and any PO number.</li>
<li>Add the six line items with quantities and rates; totals calculate automatically.</li>
<li>Set a tax rate only if it applies. The generator supports one tax rate per invoice, so if your state taxes materials but not labor, check with your adviser how to present it, for example by invoicing materials separately.</li>
<li>Enter $3,000 as amount paid so the balance due shows $3,017.80.</li>
<li>Add notes covering warranty, care instructions and that leftover boxes stay on site, then download the PDF.</li>
</ol>
<p>A traditional layout suits trades clients. The <a href="/invoice-templates/classic">classic invoice template</a> prints cleanly and keeps long material lists easy to read.</p>

<h2>Tile and hardwood install billing details</h2>
<p>Different floor types raise different questions on the invoice:</p>
<ul>
<li><strong>Tile:</strong> show the tile size, pattern and grout colour, plus waterproofing or backer board as separate lines. Small tiles, mosaics and diagonal layouts take longer and should be priced accordingly.</li>
<li><strong>Hardwood:</strong> state solid or engineered, nail-down, glue-down or floating, and any acclimation period. If you sand and finish on site, show finishing as its own line with the number of coats.</li>
<li><strong>LVP and laminate:</strong> list underlayment and any moisture barrier separately; note whether baseboards were removed and refitted or quarter round added.</li>
<li><strong>Carpet:</strong> show pad type and thickness, seams, and stair work separately.</li>
</ul>

<h3>Measuring and rounding</h3>
<p>Measure each room and show the area per room or per zone, rounded consistently, for example to the nearest square foot. Clients often measure again after the job, and small differences cause big arguments when the rate is several dollars per square foot. If you charge a minimum area for small rooms such as bathrooms, say so on the estimate and in the description.</p>

<h2>Tax on flooring jobs</h2>
<p>Sales tax on flooring installation is one of the more confusing areas. In some US states, contractors who install flooring into a home pay sales tax when they buy materials and do not charge it to the client. In others, materials are taxed on the invoice, and some states tax the installation labor too. Read our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> and check your state revenue department. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps once you know the rate.</p>
<p>In the UK, VAT applies once you are registered, and the domestic reverse charge for construction services can apply when you work for another VAT-registered contractor under CIS. This is general information, not tax advice; check with a qualified accountant.</p>

<h2>Working as a subcontractor for builders</h2>
<p>Many flooring installers work for general contractors, kitchen and bath companies or retailers rather than homeowners. In that case the paperwork changes. The builder is your client, they will usually issue a PO or work order, and they often want one invoice per job or per plot, with the site address and job number. Payment terms of net 30 or longer are common, and some contracts hold back retainage until the whole project is finished.</p>
<ul>
<li><strong>Quote the PO:</strong> invoices without the PO number are often rejected or delayed.</li>
<li><strong>Labor only or supply and fit:</strong> retailers often supply the flooring, so your flooring installation invoice shows labor and sundries only.</li>
<li><strong>Back charges:</strong> if the builder deducts for damage or delays, ask for it in writing and record it against the invoice.</li>
<li><strong>Lien rights:</strong> in the US, subcontractors and suppliers may have mechanics lien rights with strict notice deadlines. Check your state rules early in the job.</li>
</ul>
<p>Keep a simple log of every invoice and payment for each builder. Our generator creates and downloads the PDF but does not track who has paid, so a spreadsheet or your accounting software should hold that record. A consistent flooring invoice template makes those records far easier to reconcile at the end of the month.</p>

<h3>Warranty and care notes</h3>
<p>Use the notes area for the information clients will look for later: the product name and colour, batch or lot number, your workmanship warranty period, and basic care instructions such as cleaning products to avoid. If the manufacturer warranty depends on correct installation or maintenance, say so briefly. It turns the invoice into a useful record the homeowner can find years later.</p>

<h2>Common flooring invoice mistakes</h2>
<ul>
<li><strong>Combining materials and labor.</strong> One total hides what the client is paying for and complicates tax.</li>
<li><strong>Doing extra work without approval.</strong> Subfloor repairs and leveling need a signed change order first.</li>
<li><strong>Forgetting waste allowance.</strong> Underordering means a second trip and possibly a different dye lot.</li>
<li><strong>Not crediting the deposit.</strong> Always show payments received so the balance is right.</li>
<li><strong>Vague areas.</strong> State square footage per room so the client can check it against the estimate.</li>
<li><strong>Leaving out exclusions.</strong> Note what was not included, such as moving furniture or painting baseboards.</li>
</ul>

<h2>Conclusion</h2>
<p>A flooring invoice template should separate materials and labor, show area and unit prices, list approved change orders, and credit every payment received. Done consistently, it speeds up payment and protects you if a client questions the bill. Build your next flooring installation invoice in the <a href="/invoice-generator">free invoice generator</a> and explore more <a href="/blog/category/industry-invoices">industry invoice guides</a> for related trades.</p>
`,
  },
  {
    slug: "bookkeeping-services-invoice-template",
    title: "Bookkeeping Invoice Template: Retainers, Hourly and Catch-Up",
    description:
      "Use this bookkeeping invoice template to bill monthly retainers, hourly work and catch-up projects, with typical bookkeeper rates, payment terms and a sample.",
    category: "industry-invoices",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["retainer-invoice", "consulting-invoice-template", "bookkeeping-basics"],
    faqs: [
      {
        q: "What should a bookkeeper invoice include?",
        a: "Include your business name and contact details, the client's legal business name, a unique invoice number and date, the period covered, the services provided such as monthly bookkeeping, bank reconciliations, payroll processing or catch-up work, the fee basis (retainer, hourly or per task), any software subscriptions passed on, tax if it applies, the total, due date and payment methods.",
      },
      {
        q: "How much do bookkeeping services cost per month?",
        a: "Published 2026 US guides commonly put small business bookkeeping at roughly $300 to $800 per month for simple businesses, rising to $1,500 or more for businesses with payroll, many accounts or high transaction volume. Rates vary by region, experience, software and complexity. Use these as rough guides and set fees from the hours each client really needs.",
      },
      {
        q: "What do bookkeepers charge per hour?",
        a: "Independent US bookkeepers are commonly quoted at roughly $30 to $100 per hour in 2026 guides, with marketplace averages in the $40s and experienced or certified bookkeepers at the higher end. Offshore services are often cheaper. Rates vary by region and specialism, so check local competition and charge enough to cover non-billable time such as admin and training.",
      },
      {
        q: "Should bookkeepers bill monthly retainers in advance?",
        a: "Many do. Billing a monthly retainer at the start of the month means you are paid before you do the work, which protects your cash flow and filters out clients who pay late. Some bookkeepers bill in arrears for variable work. Whichever you choose, state it in your engagement letter and print the service period on every invoice.",
      },
      {
        q: "How do I invoice catch-up bookkeeping?",
        a: "Catch-up or clean-up bookkeeping is usually quoted as a fixed project fee per month or quarter of backlog, or billed hourly with an estimate. Take a deposit before starting, invoice in stages for large backlogs, and list the months covered on each invoice, for example January to June 2026 reconciliations. Keep it separate from the ongoing monthly retainer.",
      },
      {
        q: "Can a bookkeeper pass software costs to clients?",
        a: "Yes, if your engagement letter allows it. Many bookkeepers either include accounting software in the retainer or bill the subscription to the client as a separate line, sometimes at cost and sometimes with a small admin fee. Show it as its own line with the plan name and month, so the client sees it is a pass-through cost rather than your fee.",
      },
      {
        q: "Do bookkeepers charge VAT or sales tax on their invoices?",
        a: "In the UK, a bookkeeper must charge VAT once VAT-registered, which is required above the registration threshold. In the US, most states do not tax bookkeeping services, but a few tax some professional services, so check your state rules. Other countries have their own rules. Ask a qualified tax adviser before deciding how to treat your fees.",
      },
      {
        q: "What payment terms should a bookkeeper use?",
        a: "Due on receipt or net 7 to net 15 is common for small business clients, especially for monthly retainers billed in advance. Larger clients may ask for net 30. Many bookkeepers also pause work if an invoice is overdue by a set number of days. Put your terms and any late fee in the engagement letter and repeat them on every invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A bookkeeping invoice template shows your business details, the client's legal business name, a unique invoice number, the service period, the services provided (monthly bookkeeping, reconciliations, payroll, catch-up work), how the fee is calculated (monthly retainer, hourly or per task), any software passed on, tax where it applies, the total and the payment terms.</p>

<p>Bookkeepers spend their days chasing other people's paperwork, yet many send loose, inconsistent bills of their own. A tidy bookkeeping invoice template is part of your sales pitch: clients judge your attention to detail by the invoice you send them. It also makes your own records easier, because every client is billed the same way each month.</p>

<p>This guide covers what to include on a bookkeeper invoice, pricing models with typical rates, monthly retainer billing, catch-up projects, a worked example in our free invoice generator, tax, and mistakes to avoid. The same approach works for small accounting services invoices and virtual finance support.</p>

<h2>What a bookkeeping invoice template should include</h2>
<p>An accounting services invoice should be as precise as the books you keep. Include:</p>
<ul>
<li><strong>Your business details:</strong> name, address, email, phone and logo, plus your VAT, tax or registration number where relevant.</li>
<li><strong>Client details:</strong> the client's legal business name and address, and a PO number if they use them.</li>
<li><strong>Invoice number and date:</strong> sequential, such as BK-2026-1104. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help with a format.</li>
<li><strong>Service period:</strong> the month or quarter the work covers, for example "Services for October 2026".</li>
<li><strong>Services:</strong> monthly bookkeeping, bank and card reconciliations, accounts payable and receivable, payroll runs, month-end reports, sales tax or VAT return preparation.</li>
<li><strong>Fee basis:</strong> retainer, hours x rate, or per-task fees.</li>
<li><strong>Pass-through costs:</strong> accounting software or app subscriptions billed to the client.</li>
<li><strong>Tax:</strong> VAT or sales tax only where it applies to your services.</li>
<li><strong>Payment terms:</strong> due date, methods and any late fee or work-pause policy.</li>
</ul>
<p>Keep the descriptions specific on every bookkeeping invoice template you send. "Bookkeeping, $600" is fine for a long-standing client, but "Monthly bookkeeping: 3 bank accounts, 2 cards, approx. 180 transactions" shows exactly what the retainer buys and makes future price changes easier to justify.</p>

<h2>Bookkeeping pricing models and typical rates</h2>
<p>Most bookkeepers use one of four models. The ranges below come from published US guides at the time of writing. They vary by region, experience, certifications, software and the complexity of each client's books, so treat them as rough illustrations only.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical range (varies by region)</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Monthly retainer</td><td>Fixed monthly fee for an agreed scope</td><td>Roughly $300 to $800 per month for simple small businesses; $1,500+ for complex ones</td><td>Monthly bookkeeping retainer, October 2026</td></tr>
<tr><td>Hourly</td><td>Hours worked x rate</td><td>Roughly $30 to $100 per hour for independent bookkeepers</td><td>Bookkeeping support, 6.5 hrs at $55</td></tr>
<tr><td>Per task</td><td>Fixed price per payroll run, return or report</td><td>Varies by task and volume</td><td>Payroll processing, 2 runs, 8 employees</td></tr>
<tr><td>Catch-up project</td><td>Fixed fee per month of backlog, or hourly with an estimate</td><td>Often priced per month of backlog</td><td>Catch-up reconciliations, Jan to Jun 2026</td></tr>
</tbody></table>
<p>Many bookkeepers combine a monthly retainer for routine work with hourly or per-task billing for anything outside scope. Our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers how to present time entries clearly.</p>
<h3>Setting the retainer scope</h3>
<p>The retainer only works if the scope is clear. Define it by number of accounts, approximate transaction volume, payroll runs and reports included. When a client grows past that scope, you have a simple reason to raise the fee or bill extra hours. Write this in your engagement letter, then repeat a short summary on the invoice.</p>

<h2>Monthly retainer billing for bookkeepers</h2>
<p>Most ongoing bookkeeping is billed as a monthly retainer. A <a href="/blog/retainer-invoice">retainer invoice</a> charges a fixed fee for an agreed period, usually in advance. Billing in advance has clear advantages for a bookkeeper:</p>
<ol>
<li><strong>Cash flow:</strong> you are paid before you spend hours on the month-end close.</li>
<li><strong>Fewer late payers:</strong> clients who will not pay in advance often pay late in arrears too.</li>
<li><strong>Simple records:</strong> one invoice per client per month, on the same date.</li>
</ol>
<p>Add out-of-scope work to the following month's invoice as separate lines, so the retainer amount stays the same and extras are visible. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers scheduling. Our generator does not repeat or send invoices automatically, but it keeps your draft in the browser, so each month you can update the period and invoice number and download a new PDF quickly.</p>
<p>Watch for scope creep. A client who starts sending receipts for a second company or asks for cash flow forecasts is asking for new work. Agree a fee first. Our guide on <a href="/blog/scope-creep-change-order">scope creep and change orders</a> has practical wording.</p>

<h2>Sample bookkeeping invoice walk-through</h2>
<p>Here is an illustrative example. A bookkeeper charges a small retail business a $650 monthly retainer covering bookkeeping for two bank accounts and one card, plus monthly reports. In October the client also asked for 3 hours of extra work setting up inventory tracking at $60 per hour, and the bookkeeper passes on the client's accounting software subscription at $50. In this example the bookkeeper is not registered for VAT or sales tax, so no tax is added.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly bookkeeping retainer, November 2026 (billed in advance)</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Additional work, October: inventory tracking setup, hrs</td><td>3</td><td>$60.00</td><td>$180.00</td></tr>
<tr><td>Accounting software subscription, November (pass-through)</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$880.00</strong></td></tr>
</tbody></table>
<p>To build this in our generator:</p>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and select the USA, UK, UAE or Pakistan preset to match where you work.</li>
<li>Add your logo, business name and contact details, plus any tax registration number.</li>
<li>Enter the client's legal business name, the invoice number and the due date.</li>
<li>Add the three line items with quantities and rates.</li>
<li>Set a tax rate only if you are registered and your services are taxable. The generator applies one tax rate to the invoice.</li>
<li>Add notes such as "Retainer covers 2 bank accounts, 1 card, monthly P&amp;L and balance sheet. Work pauses on invoices overdue by 14 days."</li>
<li>Download the PDF and send it with your monthly reports.</li>
</ol>
<p>A sober, professional layout suits finance work. The <a href="/invoice-templates/corporate">corporate invoice template</a> fits well alongside formal financial reports.</p>

<h2>Billing catch-up and clean-up work</h2>
<p>Many new clients arrive months or years behind. Catch-up bookkeeping is a separate project, and it should be invoiced separately from the ongoing retainer:</p>
<ul>
<li><strong>Quote first:</strong> review a sample of statements and quote per month of backlog or as an hourly estimate.</li>
<li><strong>Take a deposit:</strong> large clean-ups often run for weeks, so ask for part upfront.</li>
<li><strong>Bill in stages:</strong> invoice by quarter completed, listing the months covered on each invoice.</li>
<li><strong>Track missing documents:</strong> note in the invoice notes if delays came from the client not supplying statements.</li>
</ul>
<p>Once the books are current, move the client to a monthly retainer. If you need a refresher on the core concepts you will explain to clients, our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide is a useful link to share.</p>

<h2>Payment terms and late payments</h2>
<p>Small business clients usually pay bookkeepers on receipt or within 7 to 15 days. Larger companies may ask for net 30. Whatever you agree, put it in the engagement letter and on every invoice. Many bookkeepers also pause work, such as month-end close, when an invoice is overdue by a set number of days. That is often more effective than a late fee, but you can use both. See our overview of <a href="/blog/late-payment-fees">late payment fees</a> before setting one, as local rules apply.</p>
<p>If you also offer advisory or CFO-style work, bill it separately at a higher rate. Our <a href="/blog/consulting-invoice-template">consulting invoice template</a> guide covers project and advisory billing.</p>

<h3>Sending invoices with the monthly reports</h3>
<p>Many bookkeepers send the invoice in the same email as the month-end reports. The client sees the value and the bill together, and it builds a steady rhythm. Name the PDF consistently, such as the client name, invoice number and month, so both of you can find it quickly later.</p>

<h2>Tax and compliance for bookkeepers</h2>
<p>In the UK, bookkeepers must register for VAT once taxable turnover passes the registration threshold, and then charge VAT on their fees. UK bookkeepers offering services to businesses also generally need anti-money laundering supervision. In the US, most states do not tax bookkeeping services, but a few tax some professional services, so check your state's rules. Self-employed bookkeepers paid by US businesses may receive a Form 1099-NEC from clients above the federal reporting threshold. This is general information, not tax advice; check with a qualified accountant or adviser for your situation.</p>

<h2>Pricing reviews and fee increases</h2>
<p>Bookkeeping clients rarely stay the same size. Transaction volumes grow, new bank accounts appear, staff are hired and payroll starts. If your retainer never changes, your effective hourly rate quietly falls. A simple habit fixes this: track your time on each client for a few months, compare it with the retainer, and review fees at least once a year.</p>
<ol>
<li><strong>Measure:</strong> note hours per client per month, even on fixed fees.</li>
<li><strong>Compare:</strong> divide the retainer by the hours to get your effective rate.</li>
<li><strong>Give notice:</strong> tell clients about a fee change at least a month ahead, with the reason, such as higher transaction volume or a new payroll service.</li>
<li><strong>Update the invoice:</strong> change the retainer line and its description from the agreed date, and mention the new scope in the notes.</li>
</ol>
<p>Your bookkeeping invoice template is a good place to show value. A one-line summary in the notes, such as "October: 214 transactions categorised, 3 accounts reconciled, payroll run twice", reminds the client what they are paying for and makes a later fee increase easier to accept. It costs you nothing and turns the bookkeeper invoice into a short monthly report.</p>

<h3>Invoicing clients in other countries</h3>
<p>Many bookkeepers now work remotely for clients abroad. Agree the currency in the engagement letter, show it clearly on every invoice, and state who pays bank or transfer fees. Our generator supports multiple currencies, so you can bill a client in the currency you agreed. Tax treatment of cross-border services differs by country, so check with an adviser before you leave tax off.</p>

<h2>Common bookkeeping invoice mistakes</h2>
<ul>
<li><strong>No service period.</strong> Always state which month or quarter the invoice covers.</li>
<li><strong>Unclear retainer scope.</strong> Without a defined scope, extra work slips in for free.</li>
<li><strong>Mixing catch-up and monthly work.</strong> Keep them on separate invoices so the client sees the one-off cost.</li>
<li><strong>Hiding pass-through costs.</strong> Show software subscriptions as their own lines.</li>
<li><strong>Billing late.</strong> Send invoices on the same date each month; late invoices get paid late.</li>
<li><strong>Inconsistent numbering.</strong> A bookkeeper with messy invoice numbers is not a good advert.</li>
</ul>

<h2>Conclusion</h2>
<p>A bookkeeping invoice template should be as clear as the books you keep: the service period, the retainer or hours, any extras and pass-through costs, tax where it applies, and firm payment terms. Bill on the same day each month and keep catch-up work separate. Create your next bookkeeper invoice in the <a href="/invoice-generator">free invoice generator</a> and browse more <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
];
