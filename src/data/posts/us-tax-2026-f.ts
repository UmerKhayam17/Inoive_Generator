import type { PostDraft } from "../blog";

export const US_TAX_2026_F_POSTS: PostDraft[] = [
  {
    slug: "sales-tax-by-state",
    title: "Sales Tax by State 2026: All 50 State Rates in One Table",
    description:
      "Sales tax by state for 2026: every state base rate in one table, average local rates, the 5 states with no sales tax, and how to find the rate for an invoice.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["sales-tax-nexus", "how-to-calculate-sales-tax", "sales-tax-on-invoices-us"],
    faqs: [
      {
        q: "Which state has the highest sales tax rate in 2026?",
        a: "California has the highest state-level rate at 7.25%, which includes a mandatory 1.25% statewide local portion. When local taxes are added, Louisiana has the highest average combined rate, about 10.13% in the Tax Foundation's July 2026 data, followed by Tennessee, Washington, Arkansas and Alabama. Individual cities can be higher still, so always look up the exact address rather than relying on state averages.",
      },
      {
        q: "Which states have no sales tax?",
        a: "Alaska, Delaware, Montana, New Hampshire and Oregon have no statewide sales tax. Alaska still allows local sales taxes, which average a little under 2% across the state, and some Montana resort areas levy local taxes. Delaware has a gross receipts tax paid by businesses rather than a sales tax charged to customers. Businesses in these states may still need to collect tax when selling into other states.",
      },
      {
        q: "Is the state sales tax rate the rate I charge customers?",
        a: "Usually not by itself. In most states you charge the combined rate: the state rate plus any county, city and special district rates. Which location's rate applies depends on sourcing rules. Most states use destination sourcing for shipped goods, while some use origin sourcing for in-state sellers. A rate lookup tool from the state revenue department gives the exact combined rate for an address.",
      },
      {
        q: "Do I charge sales tax to out-of-state customers?",
        a: "Only if you have sales tax nexus in the customer's state, through a physical presence or by passing that state's economic nexus threshold, which is $100,000 in sales for many states. If you have no nexus there, you normally do not collect, although the buyer may owe use tax. Marketplace sales are generally handled by the marketplace facilitator, not by you.",
      },
      {
        q: "How often do state sales tax rates change?",
        a: "State base rates change rarely, perhaps a handful of times a year across all states, usually by legislation with an effective date of January 1, April 1 or July 1. Local rates change much more often, every quarter in some states. That is why it is safer to check a state's rate lookup each quarter than to rely on a rate you saved last year.",
      },
      {
        q: "Do I need a permit before collecting sales tax?",
        a: "Yes. Before you collect sales tax in a state, register with its revenue department for a seller's permit or sales tax license. Collecting tax without a permit can be illegal in some states, and failing to register when you have nexus leaves you liable for tax you should have collected. Registration is usually free or low-cost and done online.",
      },
      {
        q: "Are groceries taxed at the state sales tax rate?",
        a: "Most states exempt groceries or tax them at a reduced rate, but the details vary. Some states tax food at the full rate, and others apply a lower state rate while localities add their own tax. Illinois, for example, eliminated its 1% state tax on groceries from January 1, 2026, though many localities now impose their own. Check your state's definition of food.",
      },
      {
        q: "What is the average sales tax rate in the US?",
        a: "The Tax Foundation calculated a population-weighted national average combined state and local sales tax rate of about 7.5% as of January 1, 2026. That average hides a wide range: from 0% in Oregon and New Hampshire to above 10% combined in parts of Louisiana, Alabama, Tennessee and Washington. The average is useful for comparisons but not for invoicing.",
      },
      {
        q: "Should my invoice show the state and local tax separately?",
        a: "Most states only require the total sales tax to be shown separately from the price, but some businesses list the state and local portions to make audits and customer questions easier. Whatever you do, show the tax rate, the taxable amount and the tax amount clearly, and keep records of which jurisdiction each sale was sourced to so you can file accurately.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> State sales tax rates in 2026 range from 0% in Alaska, Delaware, Montana, New Hampshire and Oregon to 7.25% in California. Indiana, Mississippi, Rhode Island and Tennessee follow at 7%. These are state-level base rates only: most states add county, city and district taxes on top, so the rate you charge depends on the sale's location.</p>

<p>If you sell goods or taxable services in the US, you need the right rate on every invoice. This guide lists sales tax by state for 2026 in one table, explains why the state base rate is only the starting point, shows how to find the exact combined rate for an address, and walks through a worked invoice example. Rates come from a single source, the Tax Foundation's 2026 midyear table (rates as of July 1, 2026), and the Tax Foundation reports no state base rate changes between January and July 2026. This is general information, not tax advice; confirm rates with each state's revenue department.</p>

<h2>What is state sales tax?</h2>
<p>Sales tax is a tax on retail sales of goods and some services, collected by the seller from the buyer and paid to the state. Forty-five states and the District of Columbia levy a statewide sales tax. The state sets a base rate and a tax base (what is taxable), and in 38 states local governments add their own rates. The seller is responsible for charging the right rate, filing returns and paying the tax over. Use tax is the matching tax a buyer owes when the seller did not collect sales tax on a taxable purchase. For the bigger picture, see our <a href="/blog/sales-tax-on-invoices-us">guide to sales tax on US invoices</a>.</p>

<h2>Sales tax by state 2026: state base rates table</h2>
<p>State rates below are the statewide base rates. The average local rate is the population-weighted average of local add-ons. The combined figure is an average, not a rate you can charge. Rates for California, Utah and Virginia include mandatory statewide local add-ons (1.25%, 1.25% and 1%).</p>
<table><thead><tr><th>State</th><th>State rate</th><th>Avg local rate</th><th>Avg combined</th></tr></thead><tbody>
<tr><td>Alabama</td><td>4.00%</td><td>5.46%</td><td>9.46%</td></tr>
<tr><td>Alaska</td><td>0.00%</td><td>1.82%</td><td>1.82%</td></tr>
<tr><td>Arizona</td><td>5.60%</td><td>2.94%</td><td>8.54%</td></tr>
<tr><td>Arkansas</td><td>6.50%</td><td>2.98%</td><td>9.48%</td></tr>
<tr><td>California</td><td>7.25%</td><td>1.78%</td><td>9.03%</td></tr>
<tr><td>Colorado</td><td>2.90%</td><td>4.99%</td><td>7.89%</td></tr>
<tr><td>Connecticut</td><td>6.35%</td><td>0.00%</td><td>6.35%</td></tr>
<tr><td>Delaware</td><td>0.00%</td><td>0.00%</td><td>0.00%</td></tr>
<tr><td>District of Columbia</td><td>6.00%</td><td>0.00%</td><td>6.00%</td></tr>
<tr><td>Florida</td><td>6.00%</td><td>0.98%</td><td>6.98%</td></tr>
<tr><td>Georgia</td><td>4.00%</td><td>3.56%</td><td>7.56%</td></tr>
<tr><td>Hawaii</td><td>4.00%</td><td>0.50%</td><td>4.50%</td></tr>
<tr><td>Idaho</td><td>6.00%</td><td>0.03%</td><td>6.03%</td></tr>
<tr><td>Illinois</td><td>6.25%</td><td>2.73%</td><td>8.98%</td></tr>
<tr><td>Indiana</td><td>7.00%</td><td>0.00%</td><td>7.00%</td></tr>
<tr><td>Iowa</td><td>6.00%</td><td>0.94%</td><td>6.94%</td></tr>
<tr><td>Kansas</td><td>6.50%</td><td>2.21%</td><td>8.71%</td></tr>
<tr><td>Kentucky</td><td>6.00%</td><td>0.00%</td><td>6.00%</td></tr>
<tr><td>Louisiana</td><td>5.00%</td><td>5.13%</td><td>10.13%</td></tr>
<tr><td>Maine</td><td>5.50%</td><td>0.00%</td><td>5.50%</td></tr>
<tr><td>Maryland</td><td>6.00%</td><td>0.00%</td><td>6.00%</td></tr>
<tr><td>Massachusetts</td><td>6.25%</td><td>0.00%</td><td>6.25%</td></tr>
<tr><td>Michigan</td><td>6.00%</td><td>0.00%</td><td>6.00%</td></tr>
<tr><td>Minnesota</td><td>6.875%</td><td>1.26%</td><td>8.14%</td></tr>
<tr><td>Mississippi</td><td>7.00%</td><td>0.06%</td><td>7.06%</td></tr>
<tr><td>Missouri</td><td>4.225%</td><td>4.22%</td><td>8.44%</td></tr>
<tr><td>Montana</td><td>0.00%</td><td>0.00%</td><td>0.00%</td></tr>
<tr><td>Nebraska</td><td>5.50%</td><td>1.48%</td><td>6.98%</td></tr>
<tr><td>Nevada</td><td>6.85%</td><td>1.39%</td><td>8.24%</td></tr>
<tr><td>New Hampshire</td><td>0.00%</td><td>0.00%</td><td>0.00%</td></tr>
<tr><td>New Jersey</td><td>6.625%</td><td>-0.02%</td><td>6.60%</td></tr>
<tr><td>New Mexico</td><td>4.875%</td><td>2.80%</td><td>7.68%</td></tr>
<tr><td>New York</td><td>4.00%</td><td>4.54%</td><td>8.54%</td></tr>
<tr><td>North Carolina</td><td>4.75%</td><td>2.35%</td><td>7.10%</td></tr>
<tr><td>North Dakota</td><td>5.00%</td><td>2.09%</td><td>7.09%</td></tr>
<tr><td>Ohio</td><td>5.75%</td><td>1.54%</td><td>7.29%</td></tr>
<tr><td>Oklahoma</td><td>4.50%</td><td>4.56%</td><td>9.06%</td></tr>
<tr><td>Oregon</td><td>0.00%</td><td>0.00%</td><td>0.00%</td></tr>
<tr><td>Pennsylvania</td><td>6.00%</td><td>0.34%</td><td>6.34%</td></tr>
<tr><td>Rhode Island</td><td>7.00%</td><td>0.00%</td><td>7.00%</td></tr>
<tr><td>South Carolina</td><td>6.00%</td><td>1.49%</td><td>7.49%</td></tr>
<tr><td>South Dakota</td><td>4.20%</td><td>1.91%</td><td>6.11%</td></tr>
<tr><td>Tennessee</td><td>7.00%</td><td>2.61%</td><td>9.61%</td></tr>
<tr><td>Texas</td><td>6.25%</td><td>1.95%</td><td>8.20%</td></tr>
<tr><td>Utah</td><td>6.10%</td><td>1.32%</td><td>7.42%</td></tr>
<tr><td>Vermont</td><td>6.00%</td><td>0.43%</td><td>6.43%</td></tr>
<tr><td>Virginia</td><td>5.30%</td><td>0.47%</td><td>5.77%</td></tr>
<tr><td>Washington</td><td>6.50%</td><td>3.07%</td><td>9.57%</td></tr>
<tr><td>West Virginia</td><td>6.00%</td><td>0.60%</td><td>6.60%</td></tr>
<tr><td>Wisconsin</td><td>5.00%</td><td>0.72%</td><td>5.72%</td></tr>
<tr><td>Wyoming</td><td>4.00%</td><td>1.39%</td><td>5.39%</td></tr>
</tbody></table>
<p>Source: <a href="https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/" target="_blank" rel="noopener">Tax Foundation, State and Local Sales Tax Rates, Midyear 2026</a>. Hawaii and New Mexico levy gross receipts or general excise taxes that function like sales taxes but are legally imposed on the business. New Jersey's negative local average reflects reduced rates in Urban Enterprise Zones. South Dakota's 2023 rate cut is scheduled to sunset in 2027 under current law.</p>

<h2>Why the state rate is not the rate you charge</h2>
<p>The table above shows state-level rates only. Local rates sit on top: counties, cities, transit districts and special purpose districts can each add a percentage. In Colorado, for example, the 2.9% state rate is the lowest of any state with a sales tax, but local rates average nearly 5%, so many buyers pay more than in a state with a higher base rate. A single ZIP code can contain several tax jurisdictions, which is why rate lookups work on full street addresses.</p>
<p>Two more rules decide the rate on a given sale:</p>
<ul>
<li><strong>Sourcing.</strong> Most states use destination sourcing: the rate where the buyer receives the goods. A few states, such as Texas and Illinois for many in-state sales, use forms of origin sourcing. California uses a hybrid: state, county and city taxes are origin-based while district taxes are destination-based.</li>
<li><strong>Taxability.</strong> The rate only applies to taxable items. Groceries, prescription drugs, clothing (in some states) and many services are exempt or taxed differently. See <a href="/blog/sales-tax-on-services-by-state">which states tax services</a> and <a href="/blog/sales-tax-on-shipping">whether shipping is taxable</a>.</li>
</ul>

<h2>How to find the exact sales tax rate for an invoice</h2>
<ol>
<li><strong>Confirm you have nexus</strong> in the buyer's state, through physical presence or economic nexus. Our <a href="/blog/sales-tax-nexus">sales tax nexus guide</a> lists the thresholds.</li>
<li><strong>Register</strong> for a seller's permit before collecting; see <a href="/blog/sellers-permit">how to get a seller's permit</a>.</li>
<li><strong>Check taxability</strong> of what you sell in that state.</li>
<li><strong>Check exemption certificates.</strong> Resellers and exempt buyers may give you a <a href="/blog/resale-certificate">resale certificate</a> or <a href="/blog/sales-tax-exemption-certificate">exemption certificate</a>.</li>
<li><strong>Look up the combined rate</strong> for the delivery address using the state's official lookup tool.</li>
<li><strong>Apply the rate</strong> to the taxable subtotal; use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the math.</li>
<li><strong>Show it on the invoice</strong> as a separate line, then file and pay on your assigned schedule; see <a href="/blog/how-to-file-sales-tax-return">how to file a sales tax return</a>.</li>
</ol>

<h2>Worked example: an invoice with state and local sales tax</h2>
<p>A furniture maker in Austin, Texas sells and delivers to a customer in the city. Texas's state rate is 6.25%, and local jurisdictions can add up to 2%; Austin addresses commonly total 8.25%, but confirm the exact rate for the delivery address with the Texas Comptroller's lookup. In Texas, delivery charges on taxable items are part of the taxable sales price.</p>
<table><thead><tr><th>Line item</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Walnut dining table, 72 in</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Matching bench</td><td>1</td><td>$480.00</td><td>$480.00</td></tr>
<tr><td>Local delivery and setup</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="3">Taxable subtotal</td><td>$3,000.00</td></tr>
<tr><td colspan="3">State sales tax (6.25%)</td><td>$187.50</td></tr>
<tr><td colspan="3">Local sales tax (2.00%)</td><td>$60.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$3,247.50</strong></td></tr>
</tbody></table>
<p>The same order delivered to a customer in Oregon would carry no sales tax at all, and one delivered to a Colorado address could carry a combined rate well above 8% even though Colorado's state rate is only 2.9%. Some states also have item-level quirks, such as Tennessee's cap on local tax for single articles above $1,600, which is why state guidance matters as much as the headline rate. You can build an invoice like this with our <a href="/invoice-generator">free invoice generator</a>, which lets you add a tax line and rate.</p>

<h2>States with no sales tax and the highest rates</h2>
<table><thead><tr><th>Group</th><th>States</th><th>What to know</th></tr></thead><tbody>
<tr><td>No statewide sales tax</td><td>Alaska, Delaware, Montana, New Hampshire, Oregon</td><td>Alaska localities and some Montana resort towns still tax sales</td></tr>
<tr><td>Highest state base rates</td><td>California (7.25%); Indiana, Mississippi, Rhode Island, Tennessee (7%)</td><td>Local add-ons push combined rates higher in CA and TN</td></tr>
<tr><td>Highest average combined rates</td><td>Louisiana, Tennessee, Washington, Arkansas, Alabama</td><td>Driven by high local rates</td></tr>
<tr><td>No local sales taxes</td><td>Connecticut, Indiana, Kentucky, Maine, Maryland, Massachusetts, Michigan, Rhode Island, DC</td><td>One statewide rate makes invoicing simpler</td></tr>
</tbody></table>

<h2>How does economic nexus decide which state rates apply to you?</h2>
<p>Since the Supreme Court's 2018 decision in <em>South Dakota v. Wayfair</em>, every state with a sales tax can require remote sellers to collect once they pass an economic threshold, even with no physical presence. Many states use $100,000 of sales into the state in the current or previous calendar year; a few use higher figures, such as $500,000 in California, New York and Texas, and several states have dropped the old 200-transaction test. Once you cross a threshold, you register in that state and start charging its state rate plus the local rate for each delivery address.</p>
<p>For a small online seller this usually means collecting in your home state from day one and adding other states one at a time as sales grow. Sales made through marketplaces such as Amazon or Etsy are generally collected and remitted by the marketplace facilitator, though some states still count them toward your threshold. Track sales by state monthly so you notice when you are getting close.</p>

<h2>How to keep sales tax rates up to date</h2>
<p>Rate tables like the one above are a starting point, not something to copy into your invoicing tool once and forget. Practical habits:</p>
<ul>
<li>Subscribe to rate change notices from each state where you are registered; most revenue departments publish them before each quarter.</li>
<li>Re-check combined rates for repeat customers every January, April, July and October.</li>
<li>If you sell into many states, consider sales tax software that calculates by address; states in the Streamlined Sales Tax program offer certified service providers at no cost to some remote sellers.</li>
<li>Record the rate used on each invoice so you can prove what you charged if a rate changed mid-quarter.</li>
</ul>

<h2>Common sales tax rate mistakes</h2>
<ul>
<li><strong>Charging only the state rate.</strong> Under-collecting local tax leaves you paying the difference from your own pocket.</li>
<li><strong>Using ZIP-code rates.</strong> ZIPs cross jurisdiction lines; use full addresses.</li>
<li><strong>Using last year's rate.</strong> Local rates change quarterly in many states.</li>
<li><strong>Collecting without a permit.</strong> Register first.</li>
<li><strong>Taxing exempt sales.</strong> Over-collected tax must be refunded to customers or paid to the state; it is never yours to keep.</li>
<li><strong>Mixing up gross and net.</strong> If a price includes tax, back the tax out correctly; see <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> and <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a>.</li>
</ul>

<p>Knowing sales tax by state is the first step; the exact combined rate for each address is what goes on the invoice. Once you have it, create a clean, itemized invoice with a tax line using our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "sales-tax-on-services-by-state",
    title: "Are Services Taxable? Sales Tax on Services by State",
    description:
      "Are services taxable? See which states tax services broadly, which tax only some, Washington's 2025 expansion, common taxable services and how to invoice them.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "photo-booth-invoice-template",
      "sales-tax-by-state",
      "sales-tax-nexus",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "Are consulting services subject to sales tax?",
        a: "In most states, professional consulting such as business, legal, accounting or management consulting is not subject to sales tax. The main exceptions are states with broad bases, such as Hawaii, New Mexico and South Dakota, where many services are taxed unless exempt. If consulting includes delivering software, data or tangible items, those parts may be taxable even in states that exempt the consulting itself.",
      },
      {
        q: "Is web design taxable?",
        a: "It depends on the state and what you deliver. Custom website development is non-taxable in many states, but Washington made custom website development taxable from October 1, 2025. States that tax digital products or prewritten software may tax templates, themes or hosted software you resell. Hosting and SaaS fees are taxable in a growing number of states. Check each state where your clients are.",
      },
      {
        q: "Are repair services taxable?",
        a: "Repair of tangible personal property, such as cars, appliances, machinery and electronics, is taxable in many states, often including the labor. Other states tax only the parts if they are separately stated. Repairs to real property, like plumbing or roofing, are treated under construction rules, where the contractor often pays tax on materials instead of charging it to the customer.",
      },
      {
        q: "Do I need a sales tax permit if I only sell services?",
        a: "Only if at least one of your services is taxable in a state where you have nexus. Many service-only businesses never need a permit. Some states also require registration for specific services, such as amusement, lodging or telecommunications. If you start selling products, digital goods or a newly taxable service, revisit the question before your first sale.",
      },
      {
        q: "Does economic nexus apply to services?",
        a: "Yes. Economic nexus thresholds, often $100,000 in sales into a state, usually count sales of taxable services as well as goods, and some states count all gross sales, including exempt ones. A remote consultant selling taxable services into another state could cross a threshold without ever visiting. Review each state's definition of the sales that count toward its threshold.",
      },
      {
        q: "How do I invoice a mix of taxable and non-taxable services?",
        a: "List each service on its own line, mark which lines are taxable, and calculate sales tax only on the taxable subtotal. Bundling everything into one price can make the whole charge taxable in some states. Keep descriptions specific, such as installation labor or software license, so an auditor can see why each line was treated as it was.",
      },
      {
        q: "Is SaaS subject to sales tax?",
        a: "SaaS is taxable in roughly half of the states that have a sales tax, and the list keeps changing. States including New York, Texas, Washington, Pennsylvania and Ohio tax at least some SaaS or remotely accessed software, while California generally does not. Some states tax it at a reduced rate or only for business use. Check each state's guidance on digital products and software.",
      },
      {
        q: "Why do some states tax services and others not?",
        a: "Most state sales taxes were designed in the 1930s, when the economy was mostly goods, and taxed tangible personal property by default. Services were added one by one through legislation. A few states, such as Hawaii and New Mexico, built broad gross receipts taxes that included services from the start. As services grow, more states are expanding their bases, as Washington did in 2025.",
      },
      {
        q: "Are services to businesses taxed the same as services to consumers?",
        a: "Usually yes, if the service is taxable, unless the buyer qualifies for an exemption such as resale. Some states, though, tax services that are mainly sold to businesses, such as Washington's 2025 expansion covering advertising, IT and temporary staffing. Economists criticize taxing business inputs because it can stack tax at several stages, but several states do it anyway.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Are services taxable? In most states, most services, including professional, consulting and personal services, are not subject to sales tax. Hawaii, New Mexico, South Dakota and West Virginia tax services broadly, and Washington expanded its sales tax to many business services from October 1, 2025. Other states tax only listed services, such as repairs or cleaning.</p>

<p>For service businesses, sales tax is often an afterthought until a client asks why it is on an invoice or an auditor asks why it is not. The answer depends on the state, the exact service and sometimes the customer. This guide explains how states approach services, lists the broad-base states, covers commonly taxed services, shows an invoice that mixes taxable and exempt lines, and gives a checklist for staying compliant. It is general information as of October 2026, not tax advice.</p>

<h2>Are services subject to sales tax? The basic rule</h2>
<p>State sales taxes traditionally apply to tangible personal property: things you can touch. Services are taxable only when a state's law specifically includes them. That gives three broad models:</p>
<ul>
<li><strong>Broad-base states</strong> tax most services unless the law exempts them.</li>
<li><strong>Enumerated-service states</strong> tax only services listed in the law, such as repairs, landscaping or data processing.</li>
<li><strong>Minimal-service states</strong> tax very few services, often only those connected to goods (installation, fabrication).</li>
</ul>
<p>The five states with no statewide sales tax (Alaska, Delaware, Montana, New Hampshire and Oregon) do not tax services through a sales tax, though Alaska localities and Delaware's gross receipts tax are exceptions to keep in mind. For state base rates, see our <a href="/blog/sales-tax-by-state">sales tax by state table</a>.</p>

<h2>Which states tax services broadly?</h2>
<table><thead><tr><th>State</th><th>Tax and rate</th><th>Approach to services</th></tr></thead><tbody>
<tr><td>Hawaii</td><td>General excise tax, 4% plus county surcharges (0.5% in Honolulu)</td><td>Applies to nearly all business activity, including professional services</td></tr>
<tr><td>New Mexico</td><td>Gross receipts tax, 4.875% state plus local</td><td>Applies to most services performed in the state, with deductions for some B2B sales</td></tr>
<tr><td>South Dakota</td><td>Sales tax, 4.2% plus local</td><td>Most services taxable unless specifically exempt</td></tr>
<tr><td>West Virginia</td><td>Sales tax, 6% plus local</td><td>Many services taxable; professional services are generally exempt</td></tr>
<tr><td>Washington</td><td>Retail sales tax, 6.5% plus local</td><td>Since October 1, 2025, adds advertising, IT, custom website development, investigation and security, and temporary staffing services</td></tr>
</tbody></table>
<p>The Tax Foundation notes that Hawaii, New Mexico and South Dakota have unusually broad bases that include many business-to-business services (<a href="https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/" target="_blank" rel="noopener">Tax Foundation, 2026</a>). For Washington's expansion, see the Department of Revenue's page on <a href="https://dor.wa.gov/taxes-rates/retail-sales-tax/services-newly-subject-retail-sales-tax" target="_blank" rel="noopener">services newly subject to retail sales tax</a>. Washington's law (ESSB 5814) has faced legal challenges and the Department has issued interim guidance, so check the current position before you invoice.</p>

<h2>Which services are commonly taxable in other states?</h2>
<p>Outside the broad-base states, certain categories show up again and again. Whether a specific service is taxable still depends on the state's wording.</p>
<table><thead><tr><th>Service category</th><th>Often taxable in</th><th>Notes</th></tr></thead><tbody>
<tr><td>Repair and maintenance of tangible goods</td><td>Many states</td><td>Car, appliance, equipment repair; labor may or may not be taxed</td></tr>
<tr><td>Installation of goods sold</td><td>Many states</td><td>Often taxable when bundled with the sale</td></tr>
<tr><td>Landscaping and lawn care</td><td>Some states</td><td>Examples include several Midwestern and Southern states</td></tr>
<tr><td>Janitorial and building cleaning</td><td>Some states</td><td>Texas and New York tax certain building maintenance services</td></tr>
<tr><td>Data processing and information services</td><td>Some states</td><td>Texas taxes data processing (with a partial exemption); Connecticut taxes computer services at a reduced rate</td></tr>
<tr><td>SaaS and digital products</td><td>Roughly half of sales tax states</td><td>Rapidly changing; check each state</td></tr>
<tr><td>Security and protective services</td><td>Some states</td><td>Examples include New York and Texas</td></tr>
<tr><td>Amusement, admissions, lodging</td><td>Most states</td><td>Often under separate excise or lodging taxes</td></tr>
<tr><td>Professional services (legal, accounting, medical, consulting)</td><td>Rarely</td><td>Mainly broad-base states such as Hawaii, New Mexico and South Dakota</td></tr>
</tbody></table>
<p>Freelancers in creative and digital work should look closely at deliverables. A logo design service may be exempt, but the same design delivered as a downloadable digital product, or printed on goods, may be taxable in some states. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers the invoicing side.</p>

<h2>How to tell if your service is taxable: step by step</h2>
<ol>
<li><strong>List where you have nexus.</strong> Your home state plus any state where you have physical presence or pass economic nexus thresholds; see <a href="/blog/sales-tax-nexus">sales tax nexus</a>.</li>
<li><strong>Describe the service precisely.</strong> "Marketing" could be advertising, consulting, content writing or software. Each may be treated differently.</li>
<li><strong>Check each state's taxable services list.</strong> State revenue departments publish guidance and taxability matrices.</li>
<li><strong>Check the true object of the sale.</strong> If the customer mainly wants a product (a printed report, a custom app), product rules may apply.</li>
<li><strong>Check sourcing.</strong> Services are often sourced to where they are received or used, which may not be where you are.</li>
<li><strong>Register if needed</strong> and get a <a href="/blog/sellers-permit">seller's permit</a> before charging tax.</li>
<li><strong>Collect exemption or resale certificates</strong> from qualifying buyers.</li>
<li><strong>Document your conclusion.</strong> A short memo or a ruling request protects you in an audit.</li>
</ol>

<h2>Worked example: an invoice with taxable and non-taxable services</h2>
<p>An IT services company in Seattle invoices a Washington client after October 2025. Assume custom website development and IT support are taxable under the 2025 expansion, while a separately stated management consulting workshop is not. The combined rate is illustrative at 10.35%; look up the exact rate for the client's address.</p>
<table><thead><tr><th>Line item</th><th>Taxable?</th><th>Amount</th></tr></thead><tbody>
<tr><td>Custom website development, 40 hours at $110</td><td>Yes</td><td>$4,400.00</td></tr>
<tr><td>Managed IT support, monthly</td><td>Yes</td><td>$900.00</td></tr>
<tr><td>Strategy workshop (management consulting)</td><td>No</td><td>$1,500.00</td></tr>
<tr><td colspan="2">Subtotal</td><td>$6,800.00</td></tr>
<tr><td colspan="2">Taxable subtotal</td><td>$5,300.00</td></tr>
<tr><td colspan="2">Sales tax (10.35% x $5,300, illustrative)</td><td>$548.55</td></tr>
<tr><td colspan="2"><strong>Total due</strong></td><td><strong>$7,348.55</strong></td></tr>
</tbody></table>
<p>Had the company billed one lump sum of $6,800 for "technology services", it would have risked tax on the whole amount. Separate lines and clear descriptions do the work. Build itemized invoices like this with our <a href="/invoice-generator">free invoice generator</a> and check the arithmetic with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>How are services sourced for sales tax?</h2>
<p>Sourcing decides which state's (and which locality's) rules and rate apply. For goods it is usually where the buyer receives them. Services are harder because nothing is shipped. States use different tests:</p>
<ul>
<li><strong>Where the service is performed</strong>, common for hands-on services such as repairs, cleaning or landscaping.</li>
<li><strong>Where the benefit is received</strong> or where the customer uses the service, common for digital, IT and advertising services.</li>
<li><strong>The customer's address</strong> on file as a fallback when the place of use is unclear.</li>
</ul>
<p>If a customer uses a taxable service in several states, for example a SaaS tool used by staff in five offices, some states let the customer provide a multiple points of use certificate so tax can be apportioned. Remote service providers should note that a service performed from a home office in a state that does not tax it can still be taxable where the client receives it, if you have nexus there.</p>

<h2>Digital products, software and SaaS: the fastest-changing area</h2>
<p>The biggest growth in taxable services is digital. States increasingly tax prewritten software delivered electronically, digital downloads such as e-books and stock photos, streaming, and software accessed online. Custom software written for one client is often exempt, while canned software is often taxable. Hosting, data processing and information services are taxable in some states and not others. If you sell anything digital, keep a short list of each state's position and recheck it every year, because legislatures have been expanding these bases since the Wayfair decision in 2018.</p>

<h2>Common mistakes with sales tax on services</h2>
<ul>
<li><strong>Assuming services are never taxable.</strong> True in many states for many services, but not in all, and the list is growing.</li>
<li><strong>Bundling taxable and exempt items.</strong> A single price for a mixed package can make everything taxable.</li>
<li><strong>Ignoring remote clients.</strong> Taxability is decided by the client's state rules when the service is sourced there.</li>
<li><strong>Forgetting materials.</strong> Parts and materials sold with a service are usually taxable even when labor is not.</li>
<li><strong>Charging tax without a permit.</strong> Collected tax must be remitted; collecting it without registration causes trouble.</li>
<li><strong>Not tracking law changes.</strong> Several states have considered taxing more services; review annually.</li>
</ul>

<h2>Services sales tax checklist</h2>
<ul>
<li>Every service you sell written down with a plain description</li>
<li>Taxability checked in each nexus state, with sources saved</li>
<li>Invoice template separating taxable and non-taxable lines</li>
<li>Exemption and resale certificates on file</li>
<li>Seller's permits where needed, and a filing calendar; see <a href="/blog/how-to-file-sales-tax-return">how to file a sales tax return</a></li>
<li>Annual review of new laws in your states</li>
</ul>
<p>For how sales taxes compare internationally, where VAT and GST usually tax services by default, see <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>

<p>So, are services taxable? Usually not, but often enough that every service business should check its states. When you do charge tax, show it clearly on itemized invoices made with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, no account, and a PDF built in your browser.</p>
`,
  },
  {
    slug: "sales-tax-on-shipping",
    title: "Is Shipping Taxable? Sales Tax on Shipping by State",
    description:
      "Is shipping taxable? How states treat sales tax on shipping and handling, why separately stating delivery charges matters, and an invoice example with math.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["sales-tax-by-state", "how-to-calculate-sales-tax", "freight-invoice"],
    faqs: [
      {
        q: "Is handling taxable even if shipping is not?",
        a: "Often, yes. Many states that exempt separately stated shipping or postage still tax handling, packing or combined shipping and handling charges, because those are treated as part of the seller's cost of making the sale. If you charge both, list them separately. If you combine them into one shipping and handling line, assume the whole charge may be taxable in states that tax handling.",
      },
      {
        q: "Is shipping taxable if the item is exempt?",
        a: "Generally no. In most states, delivery charges follow the taxability of the items shipped, so shipping on exempt goods such as groceries or items sold for resale is not taxable. When a shipment mixes taxable and exempt items, many states require you to allocate the delivery charge, usually by price or weight, and tax only the share attributable to taxable goods.",
      },
      {
        q: "Do I charge sales tax on free shipping?",
        a: "If shipping is truly free, there is no separate charge to tax. But if the shipping cost is built into a higher product price, that whole price is the sales price and is taxed where the item is taxable. Free shipping promotions therefore do not create a tax saving by themselves; they simply move the shipping cost into the product price.",
      },
      {
        q: "Is shipping taxable on digital products?",
        a: "Digital products are delivered electronically, so there is usually no shipping charge. If you ship a physical copy, such as a USB drive or printed book, the item and its delivery follow normal tangible goods rules. Some states that tax digital goods may treat a fee called delivery or download as part of the taxable price, so avoid labeling digital service fees as shipping.",
      },
      {
        q: "Does California tax shipping charges?",
        a: "California generally does not tax separately stated charges for delivery by common carrier or the US Postal Service, as long as the charge does not exceed the actual cost of delivery. Handling charges and any markup above cost are taxable when the goods are taxable. Delivery in the seller's own vehicles has different rules. The CDTFA's guidance on shipping and delivery charges has details.",
      },
      {
        q: "Is shipping taxable in Texas and New York?",
        a: "Yes, generally. Texas and New York both include shipping and handling charges in the taxable sales price when the items sold are taxable, whether or not the charges are separately stated. If the items are exempt, the shipping on them is generally not taxable. Both states publish guidance on delivery charges on their tax department websites.",
      },
      {
        q: "Who pays sales tax on freight between businesses?",
        a: "When a business buys freight services directly from a carrier, the transportation service itself is generally not subject to sales tax in most states. The question of taxable shipping arises when a seller charges its customer for delivering goods. If the buyer arranges and pays its own carrier, the seller's invoice should not include a shipping charge at all.",
      },
      {
        q: "What does FOB have to do with sales tax on shipping?",
        a: "FOB terms describe when ownership and risk pass from seller to buyer. Some states look at whether the sale is complete before or after delivery to decide if delivery charges are part of the sale. In those states, shipping charged on an FOB origin sale, where the buyer takes title at the seller's dock, may be treated differently. Follow the state's guidance rather than assuming.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Is shipping taxable? It depends on the state. Roughly half of states tax shipping charges when the items shipped are taxable, while others exempt delivery charges that are separately stated on the invoice and reflect actual cost. Handling fees are taxable in more states than pure shipping. Shipping on exempt goods is usually not taxable.</p>

<p>Online sellers, wholesalers and makers all face the same invoicing question: should the sales tax calculation include the shipping line? Get it wrong and you either overcharge customers or pay the shortfall yourself in an audit. This guide explains the main state approaches to sales tax on shipping, the role of separate statement, how handling fees differ, how to treat mixed shipments, and how to lay out an invoice. It is general information as of October 2026, not tax advice.</p>

<h2>What counts as a shipping or delivery charge?</h2>
<p>Most states define delivery charges broadly: transportation, shipping, postage, handling, crating and packing charged by the seller to deliver goods to the buyer. The Streamlined Sales and Use Tax Agreement, adopted by about two dozen states, uses this wide definition and lets member states decide whether to exclude delivery charges, or just postage, from the taxable sales price. That is why two states with similar rules on products can treat the same shipping line differently.</p>
<p>Shipping charges billed by a carrier directly to the buyer are different: they are a transportation service purchased from a third party and generally not subject to sales tax.</p>

<h2>How do states tax shipping? The main approaches</h2>
<table><thead><tr><th>Approach</th><th>How it works</th><th>Example states (general rule)</th></tr></thead><tbody>
<tr><td>Shipping taxable when the item is taxable</td><td>Delivery charges are part of the sales price, separately stated or not</td><td>Texas, New York, Pennsylvania and many others</td></tr>
<tr><td>Exempt if separately stated</td><td>Delivery charges listed separately on the invoice are not taxed</td><td>Several states; conditions vary</td></tr>
<tr><td>Exempt if separately stated and at actual cost</td><td>Separately stated common carrier or postal charges up to actual cost are exempt; markup and handling taxable</td><td>California</td></tr>
<tr><td>Depends on buyer's option</td><td>Separately stated delivery may be exempt if the buyer could avoid it, for example by picking up</td><td>Florida (as a general rule)</td></tr>
<tr><td>No sales tax</td><td>No statewide sales tax applies</td><td>Alaska (local rules vary), Delaware, Montana, New Hampshire, Oregon</td></tr>
</tbody></table>
<p>These are general rules with exceptions, such as delivery in the seller's own vehicle or title passing after delivery. Always read the current guidance from the state where the buyer receives the goods. California's rules, for example, are set out in guidance from the <a href="https://www.cdtfa.ca.gov/" target="_blank" rel="noopener">California Department of Tax and Fee Administration</a>, and Texas explains delivery charges on the <a href="https://comptroller.texas.gov/taxes/sales/" target="_blank" rel="noopener">Texas Comptroller's sales tax pages</a>.</p>

<h2>Why separately stating shipping on the invoice matters</h2>
<p>In states that exempt delivery charges, the exemption usually only applies if the charge is listed as its own line on the invoice or receipt. If shipping is buried in the product price, it becomes part of the taxable sales price. Separately stating shipping:</p>
<ul>
<li>Keeps exempt delivery charges out of the tax base in states that allow it.</li>
<li>Makes your allocation clear when an order mixes taxable and exempt items.</li>
<li>Gives auditors a clean trail from invoice to return.</li>
<li>Helps customers see exactly what they are paying for.</li>
</ul>
<p>Use clear labels: "Shipping (UPS Ground)" and "Handling" on separate lines, rather than one vague "S&amp;H" line. Our <a href="/invoice-generator">free invoice generator</a> lets you add shipping as its own line item and choose which lines the tax rate applies to.</p>

<h2>Is handling taxable?</h2>
<p>Handling, packing and crating fees are treated as part of the seller's cost of preparing goods for sale, so many states tax them even where pure transportation is exempt. If you combine shipping and handling into one charge, states that tax handling often treat the whole combined charge as taxable. Two practical rules:</p>
<ul>
<li>Charge handling separately only if you need to, and expect it to be taxable when the goods are.</li>
<li>If you mark up shipping above actual carrier cost, the markup is often treated like handling and taxed.</li>
</ul>

<h2>How to handle mixed shipments</h2>
<p>When one box contains taxable and exempt goods, states that tax delivery charges generally require allocation. Common methods are by sales price or by weight. Example: a $300 order contains $200 of taxable kitchenware and $100 of exempt food, with $15 shipping. By price, two-thirds of the shipping ($10) is taxable and one-third ($5) is exempt. Document the method you use and apply it consistently.</p>

<h2>Worked example: one order, three states</h2>
<p>An online seller ships a $250 taxable order with $18 shipping (actual UPS cost) and $4 handling to three buyers. Rates are illustrative combined rates; the treatment follows the general rules above.</p>
<table><thead><tr><th>Item</th><th>Buyer in Texas (8.25%)</th><th>Buyer in California (8.75%)</th><th>Buyer in Oregon</th></tr></thead><tbody>
<tr><td>Product</td><td>$250.00</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Shipping (separately stated, actual cost)</td><td>$18.00 taxable</td><td>$18.00 exempt</td><td>$18.00</td></tr>
<tr><td>Handling</td><td>$4.00 taxable</td><td>$4.00 taxable</td><td>$4.00</td></tr>
<tr><td>Taxable amount</td><td>$272.00</td><td>$254.00</td><td>$0.00</td></tr>
<tr><td>Sales tax</td><td>$22.44</td><td>$22.23</td><td>$0.00</td></tr>
<tr><td><strong>Invoice total</strong></td><td><strong>$294.44</strong></td><td><strong>$294.23</strong></td><td><strong>$272.00</strong></td></tr>
</tbody></table>
<p>Texas: 8.25% x $272 = $22.44. California: 8.75% x $254 = $22.225, rounded to $22.23. The seller only collects in Texas and California if it has nexus there and is registered. Check each calculation with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>How to get shipping tax right: step by step</h2>
<ol>
<li><strong>Identify where you must collect.</strong> Check nexus in each state you ship to; see <a href="/blog/sales-tax-nexus">sales tax nexus</a>.</li>
<li><strong>Find each state's rule</strong> on delivery and handling charges.</li>
<li><strong>Set up your invoice template</strong> with shipping and handling as separate lines; our guide to <a href="/blog/billing-address-vs-shipping-address">billing vs shipping addresses</a> explains which address decides the tax.</li>
<li><strong>Charge actual cost</strong> where the exemption depends on it, or treat any markup as taxable.</li>
<li><strong>Allocate mixed shipments</strong> by price or weight and keep the method consistent.</li>
<li><strong>Configure your shopping cart</strong> or invoicing tool so the shipping tax flag matches each state.</li>
<li><strong>Report correctly.</strong> Some returns ask for taxable and exempt sales separately; see <a href="/blog/how-to-file-sales-tax-return">how to file a sales tax return</a>.</li>
</ol>

<h2>Shipping tax on drop shipments and marketplace orders</h2>
<p>Drop shipping adds a third party. When you sell to a customer and your supplier ships directly to them, you are the retailer and generally responsible for charging the customer sales tax, including on any taxable delivery charge. Your supplier may ask for a resale certificate valid in the delivery state; if you cannot provide one, some states require the supplier to charge you tax on its invoice to you. For marketplace sales, the marketplace facilitator usually calculates and collects tax on both the item and shipping according to each state's rules, so do not add tax again on those orders.</p>

<h2>Who decides the shipping charge: you or the carrier?</h2>
<p>Some states look at who arranged the delivery and when ownership passed. If the buyer chooses the carrier and pays it directly, for example by giving you their own UPS or FedEx account number, there is usually no shipping charge on your invoice and nothing to tax. If you arrange shipping and bill the buyer, the charge is part of your sale. Where title passes after delivery (common with FOB destination terms), states that tax delivery charges are more likely to treat shipping as part of the taxable sale. Spell out shipping terms on quotes and invoices so the treatment is clear.</p>

<h2>Common mistakes with sales tax on shipping</h2>
<ul>
<li><strong>One rule for every state.</strong> A cart set to never tax shipping undercollects in Texas or New York; one set to always tax it overcharges in California.</li>
<li><strong>Combining shipping and handling.</strong> This can make the whole charge taxable.</li>
<li><strong>Marking up shipping without taxing the markup.</strong> Common audit finding in states that exempt actual-cost shipping.</li>
<li><strong>Using the billing address.</strong> For shipped goods, the delivery address usually decides the rate.</li>
<li><strong>Forgetting exempt buyers.</strong> If the buyer gives a <a href="/blog/resale-certificate">resale certificate</a>, both the item and its delivery charge are usually exempt.</li>
<li><strong>Poor documentation.</strong> Keep carrier invoices that prove actual shipping cost.</li>
</ul>
<p>For wholesale and B2B shipments, our guides to <a href="/blog/freight-invoice">freight invoices</a> and <a href="/blog/packing-list-template">packing lists</a> cover the supporting documents, and <a href="/blog/how-to-start-an-online-store">starting an online store</a> covers cart setup.</p>

<p>Is shipping taxable? In many states yes, when the goods are; in others only if you bundle it or mark it up. The safest habit is a clear invoice with shipping and handling on separate lines. Make one with our <a href="/invoice-generator">free invoice generator</a>: it is free, requires no sign-up and downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "how-much-to-set-aside-for-taxes",
    title: "How Much to Set Aside for Taxes When Self-Employed",
    description:
      "How much to set aside for taxes if you are self-employed: the 25-30% rule, a 2026 worked example with real brackets and SE tax, and how to pay quarterly.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "quarterly-estimated-taxes-freelancers",
      "self-employment-tax",
      "federal-tax-brackets-2026",
    ],
    faqs: [
      {
        q: "Should I set aside taxes from gross income or profit?",
        a: "From profit, meaning revenue minus deductible business expenses, because that is what you are taxed on. In practice many freelancers find it simpler to move a percentage of every payment received, which automatically covers tax on revenue, and then adjust at quarter end once expenses are known. If your expenses are large, a percentage of gross will overshoot, which is safer but ties up cash.",
      },
      {
        q: "Is 30% too much to set aside for taxes?",
        a: "For many self-employed people with moderate profits, 30% is a little more than the final bill, which leaves a cushion. High earners in high-tax states may need 35% or more, while people with lower profits, large deductions or a spouse with withholding may need less. Run a projection each quarter. Any surplus at year end can go toward savings or next year's first estimated payment.",
      },
      {
        q: "What happens if I do not set aside enough for taxes?",
        a: "You will owe the balance by the April filing deadline, and if you underpaid during the year you may also owe an estimated tax penalty, which works like interest on each late quarterly amount. If you cannot pay in full, the IRS offers payment plans, but interest and penalties continue. Setting aside a percentage every time you are paid avoids the problem.",
      },
      {
        q: "Do I need to pay quarterly estimated taxes?",
        a: "Generally, yes, if you expect to owe $1,000 or more in federal tax for the year after withholding and credits. Payments are due April 15, June 15, September 15 and January 15. You can avoid penalties by paying at least 100% of last year's tax (110% if your prior-year AGI was over $150,000) or 90% of this year's tax through timely payments.",
      },
      {
        q: "Where should I keep money set aside for taxes?",
        a: "Use a separate savings account that you do not touch for spending, ideally a high-yield savings account at your business bank so transfers are instant. Some freelancers open a dedicated tax account and automate a transfer of 25% to 30% of every deposit. The interest earned is taxable, but it helps, and keeping the money out of your checking account stops you spending it by accident.",
      },
      {
        q: "Does an LLC change how much I need to set aside?",
        a: "A single-member LLC taxed by default is a disregarded entity, so the tax is the same as for a sole proprietor: income tax plus self-employment tax on the profit. An LLC that elects S corporation status pays you a salary with withholding, which changes the calculation and can lower self-employment-type taxes. State LLC fees and franchise taxes may also need to be budgeted separately.",
      },
      {
        q: "Should I include state taxes in my set-aside percentage?",
        a: "Yes. State income tax ranges from zero in states like Texas, Florida and Washington to over 9% at higher incomes in states such as California and New York, and some cities, like New York City, add their own income tax. Add your expected state rate to the federal estimate. Most states with income tax also require quarterly estimated payments.",
      },
      {
        q: "Are tips and side hustle income included?",
        a: "Yes. All self-employment income counts, including side hustle, platform and gig income, whether or not you receive a Form 1099. Tips received in a business may qualify for the new federal deduction for qualified tips for 2025 through 2028 if conditions are met, but self-employment tax still applies. Include all of it when you calculate how much to set aside.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Most self-employed people should set aside 25% to 30% of net profit for taxes. That covers 15.3% self-employment tax on most of your profit plus federal income tax at typical rates, with some room for state tax. High earners or people in high-tax states may need 35% or more; people with low profits may need less.</p>

<p>When you work for yourself, no employer withholds tax from your pay. Every dollar a client pays you is pre-tax, and the bill arrives later, in quarterly estimates and at filing time. The answer to how much to set aside for taxes when self-employed depends on your profit, filing status, deductions and state. This guide explains the rule of thumb, shows exactly where the money goes using 2026 federal figures, works through a real example, and gives a simple system so you are never caught short. It is general information, not tax advice.</p>

<h2>What taxes do self-employed people pay?</h2>
<table><thead><tr><th>Tax</th><th>Rate (2026)</th><th>Applies to</th></tr></thead><tbody>
<tr><td>Social Security portion of SE tax</td><td>12.4%</td><td>92.35% of net self-employment earnings, up to the $184,500 wage base</td></tr>
<tr><td>Medicare portion of SE tax</td><td>2.9%</td><td>All net SE earnings, no cap</td></tr>
<tr><td>Additional Medicare tax</td><td>0.9%</td><td>Earnings above $200,000 single / $250,000 married filing jointly</td></tr>
<tr><td>Federal income tax</td><td>10% to 37%</td><td>Taxable income after deductions</td></tr>
<tr><td>State and local income tax</td><td>0% to over 13%</td><td>Depends on state and city</td></tr>
</tbody></table>
<p>Self-employment tax is the self-employed version of Social Security and Medicare (FICA), covering both the employee and employer halves. You can deduct half of it when calculating income tax. Our guide to <a href="/blog/self-employment-tax">self-employment tax</a> explains the calculation, and the <a href="/blog/federal-tax-brackets-2026">2026 federal tax brackets</a> show the income tax side. Official details are in <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener">IRS guidance on self-employment tax</a>.</p>

<h2>How much to set aside for taxes when self-employed: the 25-30% rule</h2>
<p>The rule of thumb works because of how the pieces add up. SE tax alone costs about 14.1% of profit (15.3% x 92.35%). Federal income tax for a single filer with moderate profits, after the standard deduction and the qualified business income deduction, often lands between 5% and 12% of profit. Add a few percent for state tax and you reach 25% to 30%.</p>
<table><thead><tr><th>Annual net profit (single, no other income)</th><th>Suggested set-aside</th><th>Why</th></tr></thead><tbody>
<tr><td>Under $30,000</td><td>15% to 20%</td><td>SE tax dominates; standard deduction absorbs much income tax</td></tr>
<tr><td>$30,000 to $100,000</td><td>25% to 30%</td><td>SE tax plus 10% to 12% (some 22%) income tax brackets</td></tr>
<tr><td>$100,000 to $200,000</td><td>30% to 35%</td><td>22% and 24% brackets; QBI deduction still helps</td></tr>
<tr><td>Over $200,000</td><td>35% to 40%+</td><td>Higher brackets, additional Medicare tax, state tax</td></tr>
</tbody></table>
<p>These ranges are illustrative starting points, not a calculation of your tax. Add your state's rate on top if you live in a state with high income tax.</p>

<h2>Worked example: $80,000 profit in 2026</h2>
<p>Maya is a single freelance designer with $80,000 net profit on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> in 2026, no other income, and she takes the standard deduction.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Net SE earnings</td><td>$80,000 x 92.35%</td><td>$73,880</td></tr>
<tr><td>Self-employment tax</td><td>$73,880 x 15.3%</td><td>$11,304</td></tr>
<tr><td>Deduction for half of SE tax</td><td>$11,304 / 2</td><td>$5,652</td></tr>
<tr><td>Adjusted gross income</td><td>$80,000 - $5,652</td><td>$74,348</td></tr>
<tr><td>Standard deduction (single)</td><td></td><td>$16,100</td></tr>
<tr><td>Income before QBI deduction</td><td>$74,348 - $16,100</td><td>$58,248</td></tr>
<tr><td>QBI deduction (20%, limited to 20% of taxable income)</td><td>$58,248 x 20%</td><td>$11,650</td></tr>
<tr><td>Taxable income</td><td>$58,248 - $11,650</td><td>$46,598</td></tr>
<tr><td>Federal income tax</td><td>$1,240 + 12% x ($46,598 - $12,400)</td><td>$5,344</td></tr>
<tr><td><strong>Total federal tax</strong></td><td>$11,304 + $5,344</td><td><strong>$16,648 (20.8% of profit)</strong></td></tr>
</tbody></table>
<p>If Maya lives in a state with an effective income tax of about 4%, add roughly $3,200, bringing her total to about $19,850, or 24.8% of profit. Setting aside 25% to 30% covers it with a buffer. The QBI deduction is explained in our <a href="/blog/qbi-deduction-section-199a">Section 199A guide</a>. Deductions such as a <a href="/blog/home-office-deduction">home office</a>, retirement contributions or <a href="/blog/self-employed-health-insurance-deduction">self-employed health insurance</a> would lower her bill further.</p>

<h2>How to set aside money for taxes: a simple system</h2>
<ol>
<li><strong>Open a separate tax savings account.</strong> Keep it at your business bank so transfers are instant.</li>
<li><strong>Pick a percentage.</strong> Start at 25% to 30% of each payment, or your own estimate from last year's return.</li>
<li><strong>Transfer on every payment.</strong> When a client pays an invoice, move the percentage the same day. Automate it if your bank allows rules.</li>
<li><strong>Track profit monthly.</strong> Record expenses so you know your real profit; see <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</li>
<li><strong>Pay quarterly estimates.</strong> Use IRS Direct Pay or EFTPS; see <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a>.</li>
<li><strong>Recalculate each quarter.</strong> Adjust the percentage if income or expenses change.</li>
<li><strong>Settle up at filing.</strong> Use the balance for any amount due in April, or keep the surplus.</li>
</ol>

<h2>When are estimated taxes due?</h2>
<table><thead><tr><th>Income earned</th><th>Due date for 2026 tax year</th></tr></thead><tbody>
<tr><td>January 1 to March 31</td><td>April 15, 2026</td></tr>
<tr><td>April 1 to May 31</td><td>June 15, 2026</td></tr>
<tr><td>June 1 to August 31</td><td>September 15, 2026</td></tr>
<tr><td>September 1 to December 31</td><td>January 15, 2027</td></tr>
</tbody></table>
<p>To avoid the underpayment penalty, pay at least 90% of this year's tax or 100% of last year's tax (110% if last year's AGI exceeded $150,000) through timely payments. See <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> and the <a href="/blog/estimated-tax-penalty">estimated tax penalty</a> guide.</p>

<h2>What if you also have a job, or are married?</h2>
<p>If you have a W-2 job as well as freelance income, your wages use up the lower income tax brackets and the standard deduction first. Your self-employment profit is then taxed at your marginal rate, which might be 22% or 24% rather than 10% or 12%. Add about 14.1% SE tax and you may need to set aside 35% or more of freelance profit. One alternative is to increase withholding at your job using Form W-4, which the IRS treats as paid evenly through the year and can remove the need for quarterly estimates.</p>
<p>Married couples filing jointly get wider brackets and a $32,200 standard deduction for 2026, which often lowers the effective rate on one spouse's self-employment income. But if both spouses earn well, combined income can push freelance profit into higher brackets. Run the numbers on your joint income, not the freelance income alone.</p>

<h2>How to lower the amount you need to set aside</h2>
<ul>
<li><strong>Track every deductible expense:</strong> software, equipment, a business share of phone and internet, mileage, professional fees.</li>
<li><strong>Contribute to a retirement plan:</strong> a SEP-IRA or solo 401(k) reduces income tax (not SE tax).</li>
<li><strong>Use an HSA</strong> if you have a qualifying high-deductible health plan.</li>
<li><strong>Get paid faster:</strong> it does not lower tax, but steady cash makes it easier to transfer the set-aside every time. Clear invoices with due dates from our <a href="/invoice-generator">free invoice generator</a> help clients pay on time.</li>
<li><strong>Review your structure</strong> once profits are high; see the <a href="/blog/llc-tax-rate">LLC tax rate guide</a> for when an S corp election can reduce payroll-type taxes.</li>
</ul>

<h2>Common mistakes when setting aside taxes</h2>
<ul>
<li><strong>Forgetting self-employment tax.</strong> New freelancers often budget only for income tax and miss the 15.3%.</li>
<li><strong>Waiting until April.</strong> Without quarterly payments, penalties build up.</li>
<li><strong>Using the set-aside account for cash flow.</strong> Borrowing from the tax pot when a client pays late is how tax debt starts. Chase invoices instead; see <a href="/blog/how-to-ask-for-payment">how to ask for payment</a>.</li>
<li><strong>Ignoring 1099-K and platform income.</strong> All income counts; see <a href="/blog/1099-k-threshold">the 1099-K threshold</a>.</li>
<li><strong>Not adjusting for growth.</strong> If income doubles mid-year, your percentage and estimates must rise too.</li>
<li><strong>Skipping state estimates.</strong> Most states with income tax want quarterly payments too.</li>
</ul>
<p>Doing gig work alongside a job? Read <a href="/blog/side-hustle-taxes">side hustle taxes</a>; you may be able to raise W-4 withholding at your job instead of paying estimates.</p>

<p>Knowing how much to set aside for taxes turns a scary April bill into a routine transfer. The habit starts with getting paid on time, so send clear invoices with due dates using our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up and downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "llc-tax-rate",
    title: "LLC Tax Rate 2026: How LLCs Are Taxed, With Examples",
    description:
      "What is the LLC tax rate? There is no single rate: compare pass-through, S corp and 21% C corp taxation with a 2026 worked example on $120,000 of profit.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-file-taxes-as-an-llc", "s-corp-vs-llc", "s-corp-election-form-2553"],
    faqs: [
      {
        q: "Do LLCs pay a flat tax rate?",
        a: "Not by default. A default LLC is a pass-through: profits flow to the owners, who pay income tax at their own graduated rates plus self-employment tax. Only an LLC that elects to be taxed as a C corporation pays the flat 21% federal corporate rate. Some states charge LLCs flat annual taxes or fees, such as California's $800 minimum, but those are not income tax rates.",
      },
      {
        q: "Is a single-member LLC taxed differently from a sole proprietorship?",
        a: "For federal income tax, no. A single-member LLC is a disregarded entity by default, so the owner reports profit on Schedule C and pays the same income and self-employment tax as a sole proprietor. The differences are legal liability protection, state formation and annual fees, and the option to elect S or C corporation taxation later.",
      },
      {
        q: "When does an S corp election save money for an LLC?",
        a: "An S corp election usually starts to save money when profits comfortably exceed a reasonable salary for your role plus the extra costs of payroll, a separate return and possibly higher accounting fees. Many advisers suggest looking at it once profits reach somewhere around $50,000 to $80,000, but the right point depends on your salary level, state taxes and fees.",
      },
      {
        q: "Does an LLC pay taxes if it makes no money?",
        a: "A default LLC with no profit generally owes no federal income tax, though a multi-member LLC still must file Form 1065 and issue K-1s. Many states charge annual fees or minimum taxes regardless of profit, such as franchise taxes or annual report fees. An LLC taxed as a corporation must file a corporate return even with a loss.",
      },
      {
        q: "Can an LLC owner take the QBI deduction?",
        a: "Yes, owners of LLCs taxed as sole proprietorships, partnerships or S corporations can generally deduct up to 20% of qualified business income, subject to limits at higher incomes and special rules for specified service businesses. The 2025 tax law made the deduction permanent. LLCs taxed as C corporations cannot pass the deduction through, because the corporation pays its own tax.",
      },
      {
        q: "How do LLC members pay their taxes during the year?",
        a: "Members of pass-through LLCs pay quarterly estimated taxes on their share of profit, because no tax is withheld. In an LLC taxed as an S corporation, owners who are employees have tax withheld from their salary, and they may make estimated payments on distributions. A C corporation LLC makes its own corporate estimated payments.",
      },
      {
        q: "What is the LLC tax rate in my state?",
        a: "Most states follow the federal treatment, so pass-through profits are taxed on the owner's state individual return at state income tax rates. On top of that, many states impose entity-level charges: annual report fees, franchise taxes, gross receipts taxes or, in a growing number of states, optional pass-through entity taxes. Check your secretary of state and state revenue department.",
      },
      {
        q: "Is it better to be taxed as an LLC or a corporation?",
        a: "For most small businesses that distribute their profits to owners, pass-through or S corporation taxation is cheaper than C corporation taxation because profits are taxed only once. A C corporation can make sense if you plan to reinvest most profits, seek venture investment or qualify for the small business stock exclusion. Model your numbers with a tax professional before switching.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> There is no single LLC tax rate. By default, LLC profits pass through to the owners, who pay their personal income tax rate (10% to 37% federally) plus 15.3% self-employment tax. An LLC can elect S corporation taxation to cut self-employment tax, or C corporation taxation at a flat 21% federal rate, plus tax on dividends.</p>

<p>A limited liability company is a state law entity. The IRS does not have an "LLC" tax category, so it taxes an LLC as a sole proprietorship, partnership, S corporation or C corporation depending on how many owners it has and what it elects. That flexibility is why "what is the LLC tax rate?" has several answers. This guide explains each option, compares the effective rates on the same profit, covers state taxes, and lists the mistakes owners make. It is general information as of October 2026, not tax advice.</p>

<h2>How is an LLC taxed? The four options</h2>
<table><thead><tr><th>Tax classification</th><th>Who it applies to</th><th>Federal return</th><th>How profit is taxed</th></tr></thead><tbody>
<tr><td>Disregarded entity (sole proprietorship)</td><td>Single-member LLC by default</td><td>Owner's Form 1040 with Schedule C</td><td>Owner's income tax rate plus self-employment tax on all profit</td></tr>
<tr><td>Partnership</td><td>Multi-member LLC by default</td><td>Form 1065, K-1s to members</td><td>Each member pays income tax and generally SE tax on their share</td></tr>
<tr><td>S corporation</td><td>LLC that files Form 2553</td><td>Form 1120-S, K-1s to owners</td><td>Owners take a reasonable salary (payroll taxes) and pass-through profit (income tax only)</td></tr>
<tr><td>C corporation</td><td>LLC that files Form 8832</td><td>Form 1120</td><td>21% corporate tax, then tax on dividends paid to owners</td></tr>
</tbody></table>
<p>The IRS explains these classifications on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener">LLC page</a>. For filing steps, see <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>.</p>

<h2>LLC tax rate under default pass-through taxation</h2>
<p>Under the default rules, the LLC itself pays no federal income tax. Owners pay:</p>
<ul>
<li><strong>Self-employment tax</strong> of 15.3% on 92.35% of net earnings (12.4% Social Security up to the $184,500 wage base for 2026, plus 2.9% Medicare on everything, and 0.9% additional Medicare above $200,000 single). See <a href="/blog/self-employment-tax">self-employment tax</a>.</li>
<li><strong>Federal income tax</strong> at graduated rates from 10% to 37%, after deducting half of SE tax, the standard or itemized deduction, and up to 20% of qualified business income under Section 199A, which the 2025 tax law made permanent. See <a href="/blog/qbi-deduction-section-199a">the QBI deduction</a>.</li>
<li><strong>State income tax</strong> where applicable.</li>
</ul>
<p>Owners pay tax on profit whether or not they withdraw it. Because no tax is withheld, they make quarterly estimated payments; see <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a>.</p>

<h2>LLC taxed as an S corporation</h2>
<p>With an S corp election, an owner who works in the business must be paid a reasonable salary through payroll. Salary carries FICA (7.65% employee plus 7.65% employer). Remaining profit passes through to the owner's return and is subject to income tax but not self-employment or FICA tax. The saving is the payroll tax avoided on profit above the salary, minus the extra costs of running payroll and filing Form 1120-S. Salaries that are unreasonably low invite IRS scrutiny. Our guides to <a href="/blog/s-corp-election-form-2553">Form 2553 and the S corp election</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> go deeper.</p>

<h2>LLC taxed as a C corporation: the 21% rate</h2>
<p>An LLC can elect corporate taxation on Form 8832. The corporation pays a flat 21% federal tax on its taxable income. Salaries paid to owner-employees are deductible to the company and taxed to the owner as wages. Profits paid out as dividends are taxed again on the owner's return, usually at qualified dividend rates of 0%, 15% or 20%, plus 3.8% net investment income tax at higher incomes. That double taxation is why C corp status suits businesses that retain profits rather than distribute them. See <a href="/blog/llc-vs-corporation">LLC vs corporation</a> for the legal differences.</p>

<h2>Worked example: $120,000 of profit, three ways</h2>
<p>A single-member LLC has $120,000 of profit before owner pay. The owner is single, with no other income. The table compares only the taxes that differ most between structures; income tax, state tax and fees are discussed below. Figures are rounded and illustrative.</p>
<table><thead><tr><th>Item</th><th>Default (disregarded)</th><th>S corp ($60,000 salary)</th><th>C corp (no salary, all paid as dividend)</th></tr></thead><tbody>
<tr><td>Self-employment or payroll tax</td><td>$120,000 x 92.35% x 15.3% = $16,955</td><td>$60,000 x 15.3% = $9,180</td><td>$0</td></tr>
<tr><td>Corporate income tax</td><td>$0</td><td>$0</td><td>$120,000 x 21% = $25,200</td></tr>
<tr><td>Dividend tax on $94,800 paid out (assumed 15%)</td><td>Not applicable</td><td>Not applicable</td><td>$14,220</td></tr>
<tr><td>Extra admin costs (illustrative)</td><td>$0</td><td>About $1,500 (payroll service, Form 1120-S prep)</td><td>About $1,500</td></tr>
<tr><td><strong>Total of these items</strong></td><td><strong>$16,955</strong></td><td><strong>$10,680</strong></td><td><strong>$40,920</strong></td></tr>
</tbody></table>
<p>The owner also pays personal income tax in the default and S corp cases, at roughly similar amounts, because the same profit lands on the personal return (the S corp version is slightly lower because the employer half of payroll tax is deductible to the business). In the C corp case, part of the dividend may fall in the 0% bracket and some owners would pay a salary instead, so real totals vary. Even so, the pattern is typical: for an owner who takes all the profit out, S corp taxation tends to cost least at this profit level, and C corp taxation costs most.</p>

<h2>What about state LLC taxes and fees?</h2>
<p>State treatment adds another layer:</p>
<ul>
<li><strong>Income tax:</strong> most states tax pass-through profit on the owner's individual return; a handful of states have no personal income tax.</li>
<li><strong>Annual fees and franchise taxes:</strong> California charges LLCs an $800 minimum annual tax plus a fee based on gross receipts above $250,000; other states charge annual report fees. See <a href="/blog/llc-annual-report">LLC annual reports</a>.</li>
<li><strong>Gross receipts taxes:</strong> a few states, such as Washington (B&amp;O tax) and Ohio (CAT, with a large exclusion), tax revenue rather than profit.</li>
<li><strong>Pass-through entity taxes:</strong> many states let LLCs elect to pay state income tax at the entity level, which can work around the federal SALT deduction cap.</li>
</ul>

<h2>How to choose your LLC tax classification: step by step</h2>
<ol>
<li><strong>Estimate annual profit</strong> realistically for the next two to three years.</li>
<li><strong>Decide how much you will distribute</strong> versus reinvest.</li>
<li><strong>Research a reasonable salary</strong> for your role and region if considering S corp status.</li>
<li><strong>Price the admin.</strong> Payroll service, extra returns, state fees.</li>
<li><strong>Model all options</strong> with a tax professional, including state taxes.</li>
<li><strong>File the election on time.</strong> Form 2553 for S corp, generally within 2 months and 15 days of the start of the tax year it takes effect; Form 8832 for C corp.</li>
<li><strong>Review annually.</strong> The best option changes as profit grows.</li>
</ol>

<h2>How do LLC owners pay themselves, and how is it taxed?</h2>
<p>How you take money out depends on the tax classification, and it is a common source of confusion:</p>
<table><thead><tr><th>Classification</th><th>How the owner is paid</th><th>Tax effect of the payment itself</th></tr></thead><tbody>
<tr><td>Disregarded or partnership</td><td>Owner's draws (or guaranteed payments to partners)</td><td>Draws are not taxed separately; you are taxed on profit whether drawn or not</td></tr>
<tr><td>S corporation</td><td>Salary through payroll, plus distributions</td><td>Salary has withholding and FICA; distributions are generally not subject to payroll tax</td></tr>
<tr><td>C corporation</td><td>Salary, bonuses and dividends</td><td>Salary is deductible to the company; dividends are taxed to the owner after corporate tax</td></tr>
</tbody></table>
<p>For a default LLC, taking a draw is just moving money from the business account to your personal account. Record it as owner's equity, not as an expense, and do not issue yourself a Form 1099 or W-2. Our guide on <a href="/blog/does-an-llc-get-a-1099">whether an LLC gets a 1099</a> covers the other side: when clients must send 1099s to your LLC.</p>
<p>Whatever the classification, the LLC's income starts with invoices. Make sure every invoice carries the LLC's exact legal name and address, so payments and any 1099s match your return. Our <a href="/invoice-generator">free invoice generator</a> lets you put those details on every invoice.</p>

<h2>Common LLC tax mistakes</h2>
<ul>
<li><strong>Thinking the LLC itself shields income from tax.</strong> Liability protection is not tax savings.</li>
<li><strong>Electing S corp too early.</strong> At low profits, admin costs can exceed the payroll tax saved.</li>
<li><strong>Paying no salary as an S corp.</strong> A classic audit trigger.</li>
<li><strong>Mixing personal and business money.</strong> It weakens liability protection and complicates returns.</li>
<li><strong>Missing state fees.</strong> Late annual taxes can lead to penalties or loss of good standing.</li>
<li><strong>Skipping estimates.</strong> Pass-through owners must pay quarterly; see <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
</ul>
<p>Still deciding on structure? Compare <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>, read <a href="/blog/how-to-start-an-llc">how to start an LLC</a>, and learn <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a> so your invoices show the correct legal name.</p>

<p>The LLC tax rate is whatever your chosen classification makes it, so pick the one that fits your profit and plans. Whatever you choose, invoice under the LLC's legal name with our <a href="/invoice-generator">free invoice generator</a>: it is free, requires no sign-up and downloads a PDF built in your browser.</p>
`,
  },
];
