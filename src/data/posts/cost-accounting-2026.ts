import type { PostDraft } from "../blog";

export const COST_ACCOUNTING_2026_POSTS: PostDraft[] = [
  {
    slug: "job-costing",
    title: "Job Costing for Contractors: Method and Example",
    description:
      "Job costing for contractors explained: track labor, materials, subs and overhead per job, apply burden rates, and compare estimate vs actual with an example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["overhead-costs", "construction-invoice-guide", "budget-vs-actual"],
    faqs: [
      {
        q: "What is job costing in simple terms?",
        a: "Job costing is tracking every cost that belongs to one specific project, such as a kitchen remodel or a roof replacement, so you can see whether that job made or lost money. You record direct labor hours, materials, equipment, subcontractors and permits against a job number, then add a share of overhead. Comparing the total with what you invoiced shows the real profit on that job, rather than an average across the whole business.",
      },
      {
        q: "What is the difference between job costing and process costing?",
        a: "Job costing is used when each project or order is different, so costs are collected per job. Contractors, agencies, print shops and custom manufacturers use it. Process costing is used when identical units flow through the same steps, such as bottling or cement production, so costs are averaged across all units made in a period. If your quotes are different every time, you need job costing; if you sell thousands of identical units, process costing fits better.",
      },
      {
        q: "How do I calculate labor burden for job costing?",
        a: "Start with the hourly wage, then add the employer costs that come with each paid hour: employer payroll taxes, workers' compensation, general liability tied to payroll, health benefits, paid time off and retirement contributions. Divide the annual total of those extra costs by productive hours worked to get a burden per hour. Many small contractors find burden adds 25% to 45% on top of wages, but calculate your own figure from your payroll and insurance records.",
      },
      {
        q: "Should overhead be included in job costs?",
        a: "Yes, for pricing and profitability decisions. Direct costs alone make every job look more profitable than it is, because rent, trucks, office staff, software and insurance still have to be paid. Apply overhead with a predetermined rate, for example a percentage of direct labor cost or a dollar amount per labor hour, and review the rate each quarter against actual overhead so it does not drift away from reality.",
      },
      {
        q: "Can I do job costing in a spreadsheet?",
        a: "Yes. A simple spreadsheet with one tab per job, or one row per cost line tagged with a job number, works well for a business running a handful of jobs at a time. List the estimate by cost code, log actual costs weekly from timesheets, receipts and subcontractor invoices, and calculate variance. Once you run many jobs at once or need progress billing and retainage, accounting or construction software with job tracking saves time.",
      },
      {
        q: "How often should I update job costs?",
        a: "Weekly for most active jobs. Post timesheets, material receipts and subcontractor bills against the job at least once a week, and compare cost to date with percent complete. Waiting until the job is finished means you only learn about an overrun when it is too late to fix it with a change order or a crew adjustment. On short jobs lasting a few days, a single close-out review may be enough.",
      },
    ],
    content: `
<p>Job costing means assigning every dollar of labor, materials, equipment, subcontractor work and overhead to the specific job that caused it, then comparing that total with what you billed. For a contractor, it is the only reliable way to know which jobs actually make money, which estimates are too low, and what to charge on the next bid. Done weekly, it also warns you about an overrun while you can still raise a change order.</p>

<p>Many small contracting businesses look profitable at year end yet run short of cash in the middle of a busy season. The usual cause is that a few jobs quietly lost money and were subsidized by the good ones. This guide walks through a practical job costing method, the cost categories to track, how to calculate labor burden and overhead rates, and a full worked example of a bathroom remodel from estimate to final invoice.</p>

<h2>What is job costing and who needs it?</h2>
<p>Job costing (also called job order costing) is a cost accounting method that collects costs by job rather than by period. Each job gets a number, and every timesheet, receipt and supplier bill is coded to that number. At the end, the job has its own small profit and loss statement.</p>
<p>It fits any business where each piece of work is different:</p>
<ul>
<li>General contractors, remodelers, roofers, electricians, plumbers and HVAC companies</li>
<li>Landscapers and hardscape installers quoting per project</li>
<li>Custom fabricators, cabinet shops and sign makers</li>
<li>Agencies, architects and engineers working on fixed-fee projects</li>
<li>Event, audio-visual and production companies</li>
</ul>
<p>If your work is billed hourly with materials passed through, job costing still matters, because it shows your true margin per hour after burden and overhead. Our guide to <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a> explains when each billing model shifts the risk to you.</p>

<h2>The cost categories to track on every job</h2>
<p>Use the same cost codes on your estimate and in your bookkeeping so you can compare like with like. A simple structure for a small contractor looks like this:</p>
<table><thead><tr><th>Cost category</th><th>What goes in it</th><th>Source document</th></tr></thead><tbody>
<tr><td>Direct labor</td><td>Hours worked on the job by your crew, at wage rate</td><td>Timesheets or time-tracking app</td></tr>
<tr><td>Labor burden</td><td>Employer payroll taxes, workers' comp, benefits, PTO tied to those hours</td><td>Payroll reports, insurance policies</td></tr>
<tr><td>Materials</td><td>Lumber, fixtures, wire, pipe, tile, concrete, consumables bought for the job</td><td>Supplier invoices and receipts</td></tr>
<tr><td>Subcontractors</td><td>Plumbers, electricians, drywall, painters you hire</td><td>Subcontractor invoices</td></tr>
<tr><td>Equipment</td><td>Rentals, or an hourly charge for owned equipment</td><td>Rental invoices, internal rate sheet</td></tr>
<tr><td>Permits and fees</td><td>Building permits, inspections, dumpster, disposal</td><td>Receipts</td></tr>
<tr><td>Overhead (applied)</td><td>Share of office, vehicles, insurance, software, owner admin time</td><td>Predetermined overhead rate</td></tr>
</tbody></table>
<p>The first six categories are direct costs. Overhead is indirect and has to be allocated, which is where most small businesses go wrong. Our explainer on <a href="/blog/overhead-costs">calculating an overhead rate</a> covers the basic math, and separating fixed from variable costs first makes the allocation cleaner.</p>

<h2>How to calculate labor burden</h2>
<p>A carpenter paid $32 an hour costs you far more than $32 an hour. Labor burden captures the employer costs that ride on top of wages. A typical calculation:</p>
<ol>
<li>Add up annual employer costs per employee: employer Social Security and Medicare, federal and state unemployment taxes, workers' compensation premium, health insurance contribution, retirement match, paid holidays and vacation.</li>
<li>Estimate productive hours: paid hours minus holidays, vacation, training, shop time and travel that you cannot bill to a job.</li>
<li>Divide total burden by productive hours to get burden per hour.</li>
<li>Add burden to the wage to get a fully burdened labor rate.</li>
</ol>
<p>Workers' comp rates vary sharply by trade and state, so roofing crews often carry much higher burden than finish carpenters. Recalculate when your insurance renews or payroll tax rates change.</p>

<h2>How to apply overhead to jobs</h2>
<p>Overhead is applied using a predetermined rate set at the start of the year:</p>
<p><strong>Overhead rate = Budgeted annual overhead / Budgeted allocation base</strong></p>
<p>The allocation base should be whatever drives your overhead. For labor-heavy trades it is usually direct labor hours or direct labor cost. For material-heavy work, some contractors use total direct cost. If your overhead is driven by very different activities, such as design meetings for some clients and simple installs for others, a single rate may distort job profit; <a href="/blog/activity-based-costing">activity-based costing</a> is the more precise alternative.</p>

<h2>Worked example: job costing a bathroom remodel</h2>
<p>The figures below are illustrative. A remodeler estimates a hall bathroom remodel, job number 2026-047, and quotes a fixed price.</p>
<p>The business has budgeted overhead of $186,000 for the year and expects 6,200 direct labor hours, so the overhead rate is $30 per direct labor hour. The crew's fully burdened labor rate is $44 per hour ($32 wage plus $12 burden).</p>
<table><thead><tr><th>Cost code</th><th>Estimate</th><th>Actual</th><th>Variance</th></tr></thead><tbody>
<tr><td>Direct labor (estimate 120 hrs, actual 138 hrs at $44)</td><td>$5,280</td><td>$6,072</td><td>-$792</td></tr>
<tr><td>Materials and fixtures</td><td>$4,900</td><td>$5,140</td><td>-$240</td></tr>
<tr><td>Plumbing subcontractor</td><td>$2,600</td><td>$2,600</td><td>$0</td></tr>
<tr><td>Electrical subcontractor</td><td>$950</td><td>$1,180</td><td>-$230</td></tr>
<tr><td>Dumpster and permit</td><td>$620</td><td>$620</td><td>$0</td></tr>
<tr><td>Overhead applied ($30 x hours)</td><td>$3,600</td><td>$4,140</td><td>-$540</td></tr>
<tr><td><strong>Total job cost</strong></td><td><strong>$17,950</strong></td><td><strong>$19,752</strong></td><td><strong>-$1,802</strong></td></tr>
<tr><td>Contract price</td><td>$22,500</td><td>$22,500</td><td></td></tr>
<tr><td><strong>Job profit</strong></td><td><strong>$4,550 (20.2%)</strong></td><td><strong>$2,748 (12.2%)</strong></td><td></td></tr>
</tbody></table>
<p>The job still made money, but margin fell by eight points. The review shows why: 18 extra labor hours came from rotted subfloor discovered after demolition, and the electrician added a GFCI circuit the inspector required. Both were legitimate scope changes. Had the remodeler issued a change order for the subfloor (roughly $1,100 at the quoted rate), the margin would have recovered to about 16%. Our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a> shows how to document and bill that kind of extra work.</p>
<p>The lesson for the next bid is also clear: on pre-1980 houses, this remodeler now adds a subfloor allowance to the estimate.</p>

<h2>Step by step: setting up job costing in a small business</h2>
<ol>
<li><strong>Create a job numbering system.</strong> Year plus sequence (2026-047) is easy to read on timesheets and receipts. Put the job number on every estimate, purchase order and invoice.</li>
<li><strong>Build estimates by cost code.</strong> Use the same categories you will track. Our <a href="/blog/estimate-template">estimate template</a> is a good starting layout.</li>
<li><strong>Set burden and overhead rates</strong> at the start of the year from your budget.</li>
<li><strong>Code every cost as it happens.</strong> Crews log hours by job; suppliers get the job number on the purchase order so it prints on their invoice.</li>
<li><strong>Review cost to date weekly</strong> against percent complete. If the job is 50% done and has used 70% of its labor budget, act now.</li>
<li><strong>Bill changes promptly.</strong> Change orders signed before the work, invoiced with the next progress bill.</li>
<li><strong>Close out each job</strong> with a one-page estimate-versus-actual report and a note on what to change in the next estimate.</li>
</ol>

<h2>Job costing and invoicing: keeping both in sync</h2>
<p>Job costing is only half the picture; the other half is billing what you earned on time. Longer jobs are usually billed in stages through <a href="/blog/progress-billing">progress billing</a>, and commercial contracts often hold back <a href="/blog/retainage-invoice">retainage</a> until completion. Each progress invoice should reference the job number and the schedule of values so your revenue lines up with the costs you are tracking.</p>
<p>Some practical habits:</p>
<ul>
<li>Show the job number and site address on every invoice.</li>
<li>For time and materials work, attach the hours and material receipts that came from your job cost records. See our <a href="/blog/time-and-materials-invoice">time and materials invoice guide</a>.</li>
<li>Bill change orders as separate line items so the client can match them to signed approvals.</li>
<li>Compare billed to date with cost to date each month. If cost is running ahead of billing, you are financing the client.</li>
</ul>
<p>You can create job-numbered invoices quickly with the <a href="/invoice-generator">free invoice generator</a>, adding the job number to the reference field.</p>

<h2>Job costing and tax accounting for contractors</h2>
<p>Job costing is a management tool first, but it also supports tax reporting. Under federal tax rules, long-term construction contracts are generally reported under the percentage-of-completion method, with an exception for smaller contractors whose average annual gross receipts pass the <a href="https://www.law.cornell.edu/uscode/text/26/448" target="_blank" rel="noopener noreferrer">section 448(c) gross receipts test</a> and whose contract is expected to be completed within two years. That threshold is indexed for inflation and is widely reported as $32 million for 2026 tax years. Which method applies to you is a question for your tax preparer; this is general information, not tax advice. Either way, clean job cost records make the calculation possible.</p>

<h2>Common job costing mistakes</h2>
<ul>
<li><strong>Using wages instead of burdened labor.</strong> Your profit can look 25% to 45% better than reality on labor-heavy jobs.</li>
<li><strong>Leaving overhead out.</strong> A job that covers direct costs but not its share of overhead is a losing job.</li>
<li><strong>Coding materials to the wrong job</strong> because one supplier run served three sites. Split the receipt on the day.</li>
<li><strong>Ignoring unbilled change work.</strong> Extra work done on a handshake rarely gets paid.</li>
<li><strong>Only reviewing at the end.</strong> Weekly reviews catch overruns while you can still fix them.</li>
<li><strong>Not feeding results back into estimates.</strong> Job costing is wasted if the next bid uses the same assumptions.</li>
</ul>

<h2>What to do if a job is running over budget</h2>
<p>First, find the cause: quantity (more hours or materials than planned), price (supplier costs rose), or scope (the client asked for more). Scope overruns should become change orders. Quantity overruns may need a crew or sequencing change. Price overruns on long jobs may be covered by an escalation clause if your contract has one. Then update the forecast to completion so you know the final margin and can plan cash. Our <a href="/blog/budget-vs-actual">budget vs actual variance report</a> uses the same approach at the company level.</p>

<p>Job costing turns your estimates into a feedback loop: estimate, track, compare, adjust. Pair it with prompt, clearly referenced billing and you will know exactly which work deserves more of your time. When a job is ready to bill, create a professional invoice with the job number and line items in our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download it as a PDF in minutes.</p>
`,
  },
  {
    slug: "activity-based-costing",
    title: "Activity-Based Costing: Example and Steps",
    description:
      "Activity-based costing explained with a worked example: identify activities, pick cost drivers, calculate rates and see which products or clients profit.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["overhead-costs", "cost-plus-pricing", "contribution-margin"],
    faqs: [
      {
        q: "What is activity-based costing in simple terms?",
        a: "Activity-based costing (ABC) assigns overhead to products, services or customers based on the activities they actually use, instead of spreading it evenly by labor hours or sales. You group overhead into activities like order processing, setups or customer support, find what drives each one, and charge each product or client for its share. The result is a more accurate cost per product or client, which often reveals that small, complex accounts are far less profitable than they look.",
      },
      {
        q: "What is a cost driver in activity-based costing?",
        a: "A cost driver is the measurable factor that causes an activity's cost to rise or fall. For order processing it might be the number of orders; for machine setups, the number of setups; for customer support, the number of tickets or support hours; for invoicing, the number of invoices. A good driver is easy to count from existing records and moves in step with the cost. If the cost does not change when the driver changes, choose a different driver.",
      },
      {
        q: "What are the disadvantages of activity-based costing?",
        a: "ABC takes more time and data than a single overhead rate. You need to interview staff about how they spend their time, track driver volumes and update rates periodically. For a business with one main product or very similar clients, the extra precision may not change any decisions. Some costs, like the owner's general management time, do not have a clear driver and still have to be allocated somewhat arbitrarily. ABC also is not used for external financial statements without adjustment.",
      },
      {
        q: "Is activity-based costing allowed under GAAP?",
        a: "ABC can be used to assign manufacturing overhead to inventory under GAAP, as long as the costs included are inventoriable production costs. Many companies, however, use ABC mainly for internal decisions such as pricing, product mix and client profitability, and include non-manufacturing costs like sales and support that GAAP does not allow in inventory. In that case, the ABC figures are a management report, while the financial statements still follow standard absorption costing rules.",
      },
      {
        q: "Can a service business use activity-based costing?",
        a: "Yes, and service firms often benefit most because their overhead is mostly people's time. An agency, accounting practice or IT support company can identify activities such as onboarding, revisions, meetings, reporting and invoicing, then measure how much of each activity every client consumes. The analysis frequently shows that a few demanding clients absorb a large share of non-billable time, which supports repricing, minimum fees or tighter scope.",
      },
      {
        q: "How often should activity rates be updated?",
        a: "Most small businesses update activity rates once a year as part of budgeting, and again if something changes significantly, such as new software that automates invoicing or a new location. Between updates, you only need to count driver volumes for each product or client. Avoid recalculating rates every month, since normal fluctuations in volume will make costs jump around and confuse pricing decisions.",
      },
    ],
    content: `
<p>Activity-based costing (ABC) assigns overhead to products, services or clients according to the activities each one actually consumes, rather than spreading it evenly by labor hours or revenue. It answers a question a single overhead rate cannot: which customers and products are really profitable once the hidden work behind them is counted. For small businesses with a mix of simple and demanding work, the answer is often surprising.</p>

<p>This guide explains how ABC works, how it differs from traditional costing, and how to run it in five steps. It ends with a worked example for a small packaging company and notes on applying the same approach to a service firm's client list.</p>

<h2>Why traditional overhead allocation can mislead you</h2>
<p>Traditional costing applies one plant-wide or company-wide overhead rate, usually per direct labor hour or per machine hour. That works when overhead rises with volume. It fails when overhead is driven by complexity: number of orders, setups, product variants, revisions or support requests.</p>
<p>Under a single rate, high-volume simple products absorb too much overhead, and low-volume complex products absorb too little. The business then underprices complex work and overprices its bread-and-butter items, sometimes losing the very customers who were most profitable. If you already calculate an overhead rate as described in our <a href="/blog/overhead-costs">overhead costs guide</a>, ABC is the next level of precision.</p>

<table><thead><tr><th>Feature</th><th>Traditional costing</th><th>Activity-based costing</th></tr></thead><tbody>
<tr><td>Overhead pools</td><td>One (or one per department)</td><td>Several, one per activity</td></tr>
<tr><td>Allocation base</td><td>Labor hours, machine hours or sales</td><td>Cost drivers: orders, setups, tickets, invoices</td></tr>
<tr><td>Effort to maintain</td><td>Low</td><td>Moderate to high</td></tr>
<tr><td>Accuracy for diverse products</td><td>Low</td><td>High</td></tr>
<tr><td>Best for</td><td>Few, similar products or services</td><td>Many products, variants or very different clients</td></tr>
</tbody></table>

<h2>How to do activity-based costing in 5 steps</h2>
<ol>
<li><strong>Identify the main activities.</strong> List the things your team does that consume overhead: purchasing, receiving, machine setups, quality checks, order processing, shipping, customer support, invoicing and collections. Five to eight activities are plenty for a small business.</li>
<li><strong>Assign overhead costs to each activity.</strong> Split salaries by the share of time staff spend on each activity (a short interview or a two-week time log is enough). Assign software, equipment and space costs to the activities that use them.</li>
<li><strong>Choose a cost driver for each activity.</strong> Pick a countable measure that moves with the cost: number of purchase orders, setups, inspections, orders, support tickets or invoices.</li>
<li><strong>Calculate an activity rate.</strong> Activity rate = activity cost pool / total driver volume. For example, $36,000 of order processing cost / 4,500 orders = $8 per order.</li>
<li><strong>Assign costs to products or clients.</strong> Multiply each product's or client's driver usage by the activity rate, then add direct materials and direct labor to get full cost.</li>
</ol>
<p>This is the classic two-stage model popularized by Robert Kaplan and Robin Cooper. Professor James R. Martin's free <a href="https://maaw.info/ABCanalysis.htm" target="_blank" rel="noopener noreferrer">ABC analysis notes on Management And Accounting Web</a> also show how to separate the cost of unused capacity, which is useful when an activity is staffed for more volume than it handles.</p>

<h2>Worked example: activity-based costing for two product lines</h2>
<p>The figures are illustrative. A small packaging company makes standard shipping boxes and custom printed boxes. Annual overhead is $240,000. Under traditional costing it allocates overhead at $24 per direct labor hour, based on 10,000 labor hours.</p>
<table><thead><tr><th></th><th>Standard boxes</th><th>Custom printed boxes</th></tr></thead><tbody>
<tr><td>Units sold</td><td>200,000</td><td>20,000</td></tr>
<tr><td>Revenue</td><td>$300,000</td><td>$110,000</td></tr>
<tr><td>Direct materials + labor</td><td>$170,000</td><td>$45,000</td></tr>
<tr><td>Direct labor hours</td><td>8,000</td><td>2,000</td></tr>
<tr><td>Overhead under traditional rate ($24/hr)</td><td>$192,000</td><td>$48,000</td></tr>
<tr><td><strong>Profit (traditional)</strong></td><td><strong>-$62,000</strong></td><td><strong>$17,000</strong></td></tr>
</tbody></table>
<p>On these numbers, management might drop standard boxes and push custom work. Now the ABC analysis. Overhead is split into four activities:</p>
<table><thead><tr><th>Activity</th><th>Cost pool</th><th>Driver</th><th>Total driver volume</th><th>Rate</th></tr></thead><tbody>
<tr><td>Machine setups</td><td>$84,000</td><td>Setups</td><td>420</td><td>$200 per setup</td></tr>
<tr><td>Design and proofing</td><td>$60,000</td><td>Design jobs</td><td>300</td><td>$200 per job</td></tr>
<tr><td>Order processing and invoicing</td><td>$36,000</td><td>Orders</td><td>1,800</td><td>$20 per order</td></tr>
<tr><td>Machine running</td><td>$60,000</td><td>Machine hours</td><td>6,000</td><td>$10 per hour</td></tr>
</tbody></table>
<p>Driver usage by product line:</p>
<table><thead><tr><th>Driver</th><th>Standard</th><th>Custom</th><th>Standard overhead</th><th>Custom overhead</th></tr></thead><tbody>
<tr><td>Setups</td><td>60</td><td>360</td><td>$12,000</td><td>$72,000</td></tr>
<tr><td>Design jobs</td><td>0</td><td>300</td><td>$0</td><td>$60,000</td></tr>
<tr><td>Orders</td><td>600</td><td>1,200</td><td>$12,000</td><td>$24,000</td></tr>
<tr><td>Machine hours</td><td>4,800</td><td>1,200</td><td>$48,000</td><td>$12,000</td></tr>
<tr><td><strong>Total overhead</strong></td><td></td><td></td><td><strong>$72,000</strong></td><td><strong>$168,000</strong></td></tr>
</tbody></table>
<p>Profit under ABC: standard boxes $300,000 - $170,000 - $72,000 = <strong>$58,000</strong>; custom boxes $110,000 - $45,000 - $168,000 = <strong>-$103,000</strong>. The picture has flipped. Custom work, with its many small orders, setups and design proofs, is consuming most of the overhead. The fix is not necessarily to drop custom boxes but to price them properly: a setup fee, a design fee and a minimum order quantity would recover the activity costs. Our guide to <a href="/blog/cost-plus-pricing">cost-plus pricing</a> shows how to build those fees into a quote.</p>

<h2>Activity-based costing for service businesses and client profitability</h2>
<p>ABC is just as useful for agencies, consultancies, bookkeepers and IT providers, where overhead is mainly non-billable staff time. Typical activities and drivers:</p>
<ul>
<li><strong>Client onboarding:</strong> number of new clients or projects</li>
<li><strong>Revisions and change requests:</strong> number of revision rounds</li>
<li><strong>Meetings and status calls:</strong> meeting hours</li>
<li><strong>Reporting:</strong> number of reports produced</li>
<li><strong>Invoicing and collections:</strong> number of invoices and number of reminders sent</li>
</ul>
<p>Run the numbers per client and you may find that a $2,000-a-month retainer client who needs weekly calls, three revision rounds and two payment reminders every month earns less than a $1,200 client who pays on time. That insight supports clearer scope, revision limits, retainer minimums or stricter payment terms. See our <a href="/blog/how-to-raise-prices">guide to raising prices</a> for how to communicate the change, and <a href="/blog/unit-economics">unit economics</a> for tying client profit back to acquisition cost.</p>

<h2>Choosing good cost drivers</h2>
<p>A cost driver works when three things are true: the data already exists in your systems, the cost really changes when the driver changes, and staff agree it is fair. Invoice counts come from your invoicing tool, orders from your sales system, and support tickets from your helpdesk. If you have to invent a new tracking process just to measure a driver, the activity probably is not worth a separate pool.</p>
<p>Watch out for activities that are batch-level rather than unit-level. A machine setup costs the same whether the run is 50 boxes or 5,000, which is exactly why small runs look cheap under traditional costing and expensive under ABC.</p>

<h2>Common mistakes with activity-based costing</h2>
<ul>
<li><strong>Too many activities.</strong> Twenty pools for a ten-person business creates work without changing decisions. Start with the few largest.</li>
<li><strong>Guessing time splits.</strong> A short time log beats a manager's guess.</li>
<li><strong>Allocating costs that no activity drives,</strong> such as owner salary or audit fees, by a fake driver. Keep these as a separate business-sustaining cost.</li>
<li><strong>Treating ABC results as the price.</strong> ABC tells you cost; price still depends on market, value and competitors. Compare with <a href="/blog/value-based-pricing">value-based pricing</a>.</li>
<li><strong>Never updating.</strong> Automation changes activity costs. If you switch to automated reminders, the collections pool shrinks.</li>
</ul>

<h2>ABC vs other costing methods</h2>
<p>ABC is about how overhead is spread. It sits alongside other costing choices rather than replacing them. <a href="/blog/job-costing">Job costing</a> tracks costs per project and can use ABC rates for its overhead line. <a href="/blog/absorption-vs-variable-costing">Absorption vs variable costing</a> is a separate decision about whether fixed production overhead goes into inventory at all. And <a href="/blog/contribution-margin">contribution margin analysis</a> ignores fixed overhead entirely to focus on short-term decisions. Many small businesses use contribution margin for quick calls and ABC once a year to check whether product lines and clients pull their weight.</p>

<h2>A lighter version: time-driven ABC for small teams</h2>
<p>Full ABC asks staff to estimate what share of their time goes to each activity, which can feel like guesswork and needs repeating whenever work patterns change. Kaplan and Anderson's time-driven variation is simpler and suits small businesses well. You need just two numbers:</p>
<ol>
<li><strong>Cost per minute of capacity.</strong> Take the total cost of a team or department (salaries, burden, software, space) and divide by the practical minutes the team is available to work. A three-person admin team costing $180,000 a year with about 300,000 practical minutes costs $0.60 per minute.</li>
<li><strong>Minutes per activity.</strong> Estimate how long each activity takes: 6 minutes to create and send an invoice, 15 minutes to chase an overdue one, 45 minutes to onboard a new client.</li>
</ol>
<p>Each activity's cost is simply minutes times cost per minute: an invoice costs $3.60 to produce, each reminder $9.00, and onboarding $27.00. Multiply by each client's volumes and you have client-level costs without any interviews. The method also shows unused capacity: if the activities you count add up to only 240,000 minutes, a fifth of the team's cost is idle time, which is a staffing question rather than a client pricing one.</p>
<p>Time-driven ABC is also easy to update. When you automate invoice reminders, change the minutes per reminder and every client's cost updates at once.</p>

<h2>What to do if ABC shows a big client is unprofitable</h2>
<p>Do not drop the client on the first analysis. Check the data, then work through the options in order: reduce the activities they consume (fewer meetings, consolidated monthly invoicing, self-service reporting), charge for the activities separately, raise the base price at renewal, and only then consider ending the relationship. Remember that some overhead will not disappear if the client leaves; if the admin team stays the same size, dropping the client may cut revenue more than cost. Compare the client's revenue with the costs that would genuinely go away, which is the <a href="/blog/contribution-margin">contribution margin</a> view of the same decision.</p>

<h2>Using ABC results in pricing and invoicing</h2>
<p>Once you know the cost of an activity, you can make it visible to clients instead of absorbing it. Common examples:</p>
<ul>
<li>A setup or onboarding fee as a separate invoice line</li>
<li>A per-revision charge after an included number of rounds</li>
<li>A small-order or rush fee</li>
<li>Bundled pricing that includes a fixed number of reports or meetings</li>
</ul>
<p>Separate line items also make discussions easier: a client who wants a discount can choose to drop an activity rather than squeeze your margin. You can list these fees clearly in the <a href="/invoice-generator">free invoice generator</a>.</p>

<p>Activity-based costing takes a few days to set up and an hour or two a year to maintain, and it often pays for itself the first time it stops you from underpricing complex work. When your new fees are ready, build itemized invoices in our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and you can download each invoice as a PDF immediately.</p>
`,
  },
  {
    slug: "standard-costing",
    title: "Standard Costing and Variance Analysis",
    description:
      "Standard costing and variance analysis explained: set standard costs and calculate price, quantity, labor and overhead variances in a worked example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["budget-vs-actual", "cost-of-goods-sold", "how-to-price-a-product"],
    faqs: [
      {
        q: "What is standard costing?",
        a: "Standard costing is a system where you set the expected cost of making one unit, broken down into materials, labor and overhead, before production starts. You then compare actual costs with those standards and investigate the differences, called variances. It is used mostly by manufacturers, food producers and makers who repeat the same products, because it turns a pile of invoices and timesheets into a few numbers that show exactly where costs went off plan.",
      },
      {
        q: "What is the difference between a favorable and unfavorable variance?",
        a: "A favorable variance means actual cost was lower than standard, for example paying $2.90 per pound when the standard was $3.00. An unfavorable variance means actual cost was higher than standard. Favorable is not automatically good: cheaper materials might cause more waste, and a favorable labor rate might come from using less experienced staff who then work more slowly. Always look at related variances together before drawing conclusions.",
      },
      {
        q: "How do you calculate material price and quantity variances?",
        a: "Material price variance equals actual quantity purchased multiplied by the difference between actual price and standard price. Material quantity (usage) variance equals standard price multiplied by the difference between actual quantity used and the standard quantity allowed for the output actually produced. Using standard price in the quantity variance isolates the effect of usage, so the purchasing team and the production team each see only the part they control.",
      },
      {
        q: "How often should standard costs be updated?",
        a: "Most businesses review standards once a year, usually during budgeting, and update them sooner if a major input changes, such as a supplier price increase, a new wage rate or new equipment. Standards that are too old produce large variances every month that nobody acts on. Standards that change constantly lose their value as a benchmark. Annual updates with exceptions for big, permanent changes are a good balance for small firms.",
      },
      {
        q: "Should small businesses use standard costing?",
        a: "It helps when you make the same products repeatedly and materials or labor are a big share of cost: bakeries, breweries, candle and soap makers, print shops, furniture and apparel makers. For a service business or a contractor where every job differs, job costing is usually a better fit. Even a simple version, with a standard cost per unit for your top five products, makes pricing and margin tracking much easier.",
      },
      {
        q: "What happens to variances at the end of the year?",
        a: "For financial statements, inventory and cost of goods sold must reflect actual cost, so variances are either closed to cost of goods sold, if they are small, or prorated between inventory and cost of goods sold if they are significant. Your accountant will choose the treatment. For tax purposes, inventory also needs to reflect actual costs under the method you use, so keep variance records with your other accounting records.",
      },
    ],
    content: `
<p>Standard costing sets the expected cost of making one unit of a product, splits it into materials, labor and overhead, and then compares what you actually spent with what you should have spent for the output you produced. The differences, called variances, tell you whether a cost overrun came from paying more, using more, working slower or producing less than planned. It is one of the most practical tools a small manufacturer or maker has for protecting margins.</p>

<p>This guide explains how to build a standard cost card, the eight variances most businesses use, and how to read them together. A worked example for a small candle maker runs through every formula with real-looking numbers.</p>

<h2>What is a standard cost?</h2>
<p>A standard cost is a carefully estimated cost for one unit under normal, efficient operating conditions. It has two parts for each input:</p>
<ul>
<li><strong>Standard quantity:</strong> how much material or how many labor hours one unit should take, including normal waste.</li>
<li><strong>Standard price or rate:</strong> what you expect to pay per pound, per meter or per hour.</li>
</ul>
<p>Standard cost per unit = standard quantity x standard price, summed across materials, labor and overhead. It works like a recipe with a price tag. Standards should be attainable rather than ideal; a standard nobody can hit gets ignored.</p>

<h2>Building a standard cost card</h2>
<p>Here is the card for a 10-ounce soy candle at a small candle business. The figures are illustrative.</p>
<table><thead><tr><th>Input</th><th>Standard quantity</th><th>Standard price</th><th>Standard cost per candle</th></tr></thead><tbody>
<tr><td>Wax and fragrance blend</td><td>0.5 lb</td><td>$3.00 per lb</td><td>$1.50</td></tr>
<tr><td>Direct labor</td><td>0.1 hr</td><td>$20.00 per hr</td><td>$2.00</td></tr>
<tr><td>Variable overhead (per labor hour)</td><td>0.1 hr</td><td>$6.00 per hr</td><td>$0.60</td></tr>
<tr><td>Fixed overhead ($4,000 per month / 10,000 planned candles)</td><td>1 unit</td><td>$0.40</td><td>$0.40</td></tr>
<tr><td><strong>Standard cost per candle</strong></td><td></td><td></td><td><strong>$4.50</strong></td></tr>
</tbody></table>
<p>Jars, wicks and labels would be added as separate material lines in a real card. Variable overhead covers costs that rise with production, like electricity for melting and packaging consumables. Fixed overhead covers rent and equipment that cost the same regardless of volume. For help sorting costs into these buckets, see <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a>.</p>

<h2>The variance formulas</h2>
<table><thead><tr><th>Variance</th><th>Formula</th><th>Who usually owns it</th></tr></thead><tbody>
<tr><td>Material price</td><td>Actual qty x (Actual price - Standard price)</td><td>Purchasing</td></tr>
<tr><td>Material quantity</td><td>Standard price x (Actual qty used - Standard qty allowed)</td><td>Production</td></tr>
<tr><td>Labor rate</td><td>Actual hours x (Actual rate - Standard rate)</td><td>Owner / HR</td></tr>
<tr><td>Labor efficiency</td><td>Standard rate x (Actual hours - Standard hours allowed)</td><td>Production</td></tr>
<tr><td>Variable overhead spending</td><td>Actual variable OH - (Actual hours x Standard VOH rate)</td><td>Operations</td></tr>
<tr><td>Variable overhead efficiency</td><td>Standard VOH rate x (Actual hours - Standard hours allowed)</td><td>Production</td></tr>
<tr><td>Fixed overhead budget</td><td>Actual fixed OH - Budgeted fixed OH</td><td>Owner</td></tr>
<tr><td>Fixed overhead volume</td><td>Budgeted fixed OH - (Actual output x Standard fixed OH per unit)</td><td>Sales / planning</td></tr>
</tbody></table>
<p>A positive result in these formulas is unfavorable (U); a negative result is favorable (F). "Standard quantity allowed" always means the standard for the output you actually produced, not the output you planned. That detail is what separates variance analysis from a simple <a href="/blog/budget-vs-actual">budget vs actual report</a>.</p>

<h2>Worked example: variance analysis for one month</h2>
<p>The candle maker planned 10,000 candles in March but produced 9,000. Actual costs:</p>
<ul>
<li>Wax blend: 4,700 lb purchased and used at $3.20 per lb = $15,040</li>
<li>Labor: 950 hours at $19.50 = $18,525</li>
<li>Variable overhead: $5,890</li>
<li>Fixed overhead: $4,150</li>
</ul>
<p>Standards allowed for 9,000 candles: 4,500 lb of wax and 900 labor hours.</p>
<table><thead><tr><th>Variance</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Material price</td><td>4,700 x ($3.20 - $3.00)</td><td>$940 U</td></tr>
<tr><td>Material quantity</td><td>$3.00 x (4,700 - 4,500)</td><td>$600 U</td></tr>
<tr><td>Labor rate</td><td>950 x ($19.50 - $20.00)</td><td>$475 F</td></tr>
<tr><td>Labor efficiency</td><td>$20.00 x (950 - 900)</td><td>$1,000 U</td></tr>
<tr><td>Variable OH spending</td><td>$5,890 - (950 x $6.00)</td><td>$190 U</td></tr>
<tr><td>Variable OH efficiency</td><td>$6.00 x (950 - 900)</td><td>$300 U</td></tr>
<tr><td>Fixed OH budget</td><td>$4,150 - $4,000</td><td>$150 U</td></tr>
<tr><td>Fixed OH volume</td><td>$4,000 - (9,000 x $0.40)</td><td>$400 U</td></tr>
<tr><td><strong>Total variance</strong></td><td></td><td><strong>$3,105 U</strong></td></tr>
</tbody></table>
<p>Check: standard cost of actual output is 9,000 x $4.50 = $40,500. Actual cost is $15,040 + $18,525 + $5,890 + $4,150 = $43,605. The difference is $3,105, matching the total of the variances.</p>

<h3>Reading the variances together</h3>
<p>The story behind the numbers: the owner switched to a cheaper-per-hour temporary worker (favorable labor rate, $475), but that person was slower and spilled more wax (unfavorable efficiency and quantity variances totaling $1,900). Meanwhile, the wax supplier raised prices by 20 cents a pound, which is a permanent change. Output also fell short of plan, so fixed costs were spread over fewer candles.</p>
<p>The actions follow directly: get a second wax quote or update the standard, train or replace the temporary worker, and review whether 10,000 candles a month is a realistic plan. With an actual cost near $4.85 per candle against a $4.50 standard, the owner should also check wholesale prices. Our guide on <a href="/blog/how-to-price-a-product">how to price a product</a> shows how a 35-cent cost rise flows into price.</p>

<h2>Step by step: introducing standard costing in a small business</h2>
<ol>
<li><strong>Pick your top products</strong> by revenue. Five products often cover most of sales.</li>
<li><strong>Build a bill of materials</strong> for each, with quantities that include normal waste.</li>
<li><strong>Time the work.</strong> Measure several normal production runs to set labor hours per unit.</li>
<li><strong>Set prices from current supplier invoices</strong> and your payroll, including burden.</li>
<li><strong>Calculate overhead rates</strong> from your budget: variable per labor or machine hour, fixed per planned unit. Our <a href="/blog/overhead-costs">overhead rate guide</a> covers the method.</li>
<li><strong>Record actuals monthly</strong>: materials purchased and used, hours worked, overhead paid, units produced.</li>
<li><strong>Calculate variances</strong> and investigate any above a threshold you set, for example 5% of standard or $250.</li>
<li><strong>Update standards annually</strong>, or sooner for permanent changes.</li>
</ol>

<h2>Standard costing, inventory and cost of goods sold</h2>
<p>Many businesses carry inventory at standard cost during the year because it simplifies bookkeeping: every finished unit is valued at the same figure. At year end, financial statements need inventory and <a href="/blog/cost-of-goods-sold">cost of goods sold</a> to reflect actual costs, so variances are closed out to cost of goods sold or prorated between inventory and cost of goods sold. The method is a decision for your accountant. Our <a href="/blog/inventory-accounting">inventory accounting guide</a> explains valuation methods such as FIFO and weighted average that sit alongside standard costing.</p>
<p>For deeper reading, the free textbook chapter on <a href="https://maaw.info/Chapter10.htm" target="_blank" rel="noopener noreferrer">standard costing on Management And Accounting Web</a> covers alternative price variance methods, and the LibreTexts chapter on <a href="https://biz.libretexts.org/Bookshelves/Accounting/Managerial_Accounting/10%3A_How_Do_Managers_Evaluate_Performance_Using_Cost_Variance_Analysis/10.08%3A_Using_Variance_Analysis_with_Activity-Based_Costing" target="_blank" rel="noopener noreferrer">variance analysis with activity-based costing</a> shows how the same formulas work when you use several overhead drivers, as in <a href="/blog/activity-based-costing">activity-based costing</a>.</p>

<h2>Common mistakes in variance analysis</h2>
<ul>
<li><strong>Using planned output instead of actual output</strong> for standard quantities. This blends a volume problem into every cost line.</li>
<li><strong>Celebrating favorable variances</strong> without checking side effects on quality, waste or speed.</li>
<li><strong>Blaming production for purchasing variances.</strong> Split price and quantity so each team sees its own number.</li>
<li><strong>Stale standards.</strong> If every month shows the same unfavorable price variance, update the standard and your prices.</li>
<li><strong>Investigating every cent.</strong> Set a materiality threshold so you focus on what matters.</li>
<li><strong>Ignoring the volume variance.</strong> Producing well below plan means fixed costs per unit rise, which matters for pricing decisions. The trade-offs are explained in <a href="/blog/absorption-vs-variable-costing">absorption vs variable costing</a>.</li>
</ul>

<h2>Setting a materiality threshold and acting on variances</h2>
<p>A variance report is only useful if it leads to action, and nobody has time to chase every small difference. Decide in advance which variances get investigated. A common rule for small producers is to review any variance larger than 5% of the standard cost for that line or larger than a fixed dollar amount, whichever is lower, plus any variance that has been unfavorable for three months in a row even if each month was small.</p>
<p>When a variance crosses the threshold, ask three questions:</p>
<ol>
<li><strong>Is it a recording error?</strong> Materials posted to the wrong month, a supplier invoice entered twice, or hours coded to the wrong product account for a surprising share of large variances. Reconcile purchases against supplier statements before digging further; our guide to <a href="/blog/duplicate-invoice-payments">preventing duplicate invoice payments</a> covers the most common data problem.</li>
<li><strong>Is it temporary or permanent?</strong> A one-off rush order bought at a premium is temporary. A supplier's new price list is permanent and means the standard and your selling prices should change.</li>
<li><strong>Is it controllable?</strong> Waste, rework and overtime can usually be managed. Commodity prices and minimum wage increases cannot, so the response is pricing, not blame.</li>
</ol>
<p>Record the cause and the decision next to each investigated variance. After a year, those notes are the best input for setting next year's standards.</p>

<h2>Where standard costing meets invoicing</h2>
<p>Standard costs give you a reliable floor for quotes and price lists. When a wholesale buyer asks for a volume discount, you can see instantly how much margin remains above the standard cost. When supplier invoices show a lasting price increase, the material price variance flags it within a month, so you can update customer price lists before margins erode. Keep supplier invoices organized by material so the purchase side of the analysis is quick, and check them against purchase orders with a <a href="/blog/three-way-match">three-way match</a>.</p>

<p>Standard costing takes some setup, but once the cost cards exist, a monthly variance report takes less than an hour and shows exactly where your margin went. When it is time to bill customers at your updated prices, create clear, itemized invoices with the <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download them as PDFs.</p>
`,
  },
  {
    slug: "absorption-vs-variable-costing",
    title: "Absorption vs Variable Costing: Differences and Example",
    description:
      "Absorption vs variable costing compared: how fixed overhead is treated, why profit differs when inventory changes, GAAP and IRS rules, and an example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["contribution-margin", "cost-of-goods-sold", "inventory-accounting"],
    faqs: [
      {
        q: "What is the main difference between absorption and variable costing?",
        a: "The only difference is how fixed manufacturing overhead is treated. Absorption costing includes it in the cost of each unit produced, so part of it sits in inventory until the unit is sold. Variable costing treats fixed manufacturing overhead as a period expense, charged in full in the month it is incurred. Direct materials, direct labor and variable overhead are product costs under both methods, and selling and administrative costs are period costs under both.",
      },
      {
        q: "Why does absorption costing show higher profit when production exceeds sales?",
        a: "When you make more units than you sell, some of the fixed manufacturing overhead is attached to the unsold units and stays on the balance sheet as inventory instead of hitting the income statement. Variable costing expenses all of it immediately. So absorption profit is higher by the fixed overhead per unit times the increase in inventory units. When inventory falls, the effect reverses and absorption profit is lower.",
      },
      {
        q: "Is variable costing allowed under GAAP?",
        a: "No, not for external financial statements. US GAAP requires inventory to include an appropriate share of fixed production overhead, which means absorption costing. Variable costing, also called direct or marginal costing, is widely used for internal management reports, pricing decisions and break-even analysis. Many businesses keep their books on absorption costing and produce a separate contribution margin report for decision-making.",
      },
      {
        q: "Which costing method does the IRS require?",
        a: "Producers and larger resellers generally must use full absorption under the uniform capitalization (UNICAP) rules of Internal Revenue Code section 263A, which can require capitalizing even more indirect costs than GAAP does. Small business taxpayers that meet the section 448(c) gross receipts test, widely reported as $32 million for 2026, are exempt from UNICAP and may use simpler inventory methods. Confirm your eligibility and method with a tax professional.",
      },
      {
        q: "When should a small business use variable costing?",
        a: "Use variable costing for short-term decisions where fixed costs will not change: accepting a special order, setting a minimum price, choosing which product to push when capacity is tight, or calculating break-even. Because it shows contribution margin clearly, it answers the question of how much each extra sale adds to covering fixed costs and profit. Use absorption costing for your official financial statements and tax returns.",
      },
      {
        q: "Can managers manipulate profit with absorption costing?",
        a: "Yes, which is a known weakness. Because overproduction pushes fixed overhead into inventory, a manager judged on monthly profit can raise reported profit simply by producing more than demand. The extra inventory ties up cash and may become obsolete. Watching inventory levels, days of inventory on hand and a variable costing report alongside the absorption statement makes this kind of distortion easy to spot.",
      },
    ],
    content: `
<p>Absorption costing and variable costing differ in one thing only: where fixed manufacturing overhead goes. Absorption costing spreads it across every unit produced, so some of it waits in inventory until the goods are sold. Variable costing charges all of it as an expense in the period it is incurred. That single difference can make the same month look profitable under one method and loss-making under the other whenever inventory levels change.</p>

<p>If you make or resell physical products, you need to understand both: absorption costing for your financial statements and tax return, and variable costing for pricing and day-to-day decisions. This guide compares the two, works through a two-year example, and covers the GAAP and IRS rules that decide which one you must use for reporting.</p>

<h2>Absorption costing vs variable costing at a glance</h2>
<table><thead><tr><th>Cost</th><th>Absorption costing</th><th>Variable costing</th></tr></thead><tbody>
<tr><td>Direct materials</td><td>Product cost (in inventory)</td><td>Product cost (in inventory)</td></tr>
<tr><td>Direct labor</td><td>Product cost</td><td>Product cost</td></tr>
<tr><td>Variable manufacturing overhead</td><td>Product cost</td><td>Product cost</td></tr>
<tr><td><strong>Fixed manufacturing overhead</strong></td><td><strong>Product cost</strong></td><td><strong>Period expense</strong></td></tr>
<tr><td>Variable selling and admin</td><td>Period expense</td><td>Period expense</td></tr>
<tr><td>Fixed selling and admin</td><td>Period expense</td><td>Period expense</td></tr>
<tr><td>Income statement format</td><td>Gross profit format</td><td>Contribution margin format</td></tr>
<tr><td>Allowed for external reporting (US GAAP)</td><td>Yes</td><td>No (internal use)</td></tr>
</tbody></table>
<p>Absorption costing is also called full costing. Variable costing is also called direct costing or marginal costing, the term common in the UK and in CIMA syllabuses.</p>

<h2>How each income statement is laid out</h2>
<p>Absorption costing uses the familiar format: sales, minus cost of goods sold, equals gross profit, minus selling and administrative expenses, equals operating income. See our guide to the <a href="/blog/profit-and-loss-statement">profit and loss statement</a> for the standard layout.</p>
<p>Variable costing uses the contribution format: sales, minus all variable costs (production and selling), equals <a href="/blog/contribution-margin">contribution margin</a>, minus all fixed costs (production and selling), equals operating income. The contribution margin line is what makes variable costing so useful for decisions.</p>

<h2>Worked example: same business, two profit figures</h2>
<p>The figures are illustrative. A small maker of cast-iron planters has these costs:</p>
<ul>
<li>Selling price: $30 per unit</li>
<li>Variable manufacturing cost: $12 per unit</li>
<li>Variable selling cost (packaging and commission): $2 per unit</li>
<li>Fixed manufacturing overhead: $60,000 per year</li>
<li>Fixed selling and administrative cost: $40,000 per year</li>
</ul>
<p>In Year 1 it produces 10,000 units and sells 8,000. In Year 2 it produces 8,000 units and sells 10,000, clearing the extra stock. Under absorption costing, fixed overhead per unit is $60,000 / 10,000 = $6 in Year 1, and $60,000 / 8,000 = $7.50 in Year 2. Inventory is assumed to be sold first-in, first-out.</p>

<h3>Year 1: production exceeds sales</h3>
<table><thead><tr><th>Line</th><th>Absorption</th><th>Variable</th></tr></thead><tbody>
<tr><td>Sales (8,000 x $30)</td><td>$240,000</td><td>$240,000</td></tr>
<tr><td>Cost of goods sold (8,000 x $18)</td><td>$144,000</td><td></td></tr>
<tr><td>Variable production costs (8,000 x $12)</td><td></td><td>$96,000</td></tr>
<tr><td>Variable selling (8,000 x $2)</td><td>$16,000</td><td>$16,000</td></tr>
<tr><td>Contribution margin</td><td></td><td>$128,000</td></tr>
<tr><td>Fixed manufacturing overhead</td><td>(in COGS and inventory)</td><td>$60,000</td></tr>
<tr><td>Fixed selling and admin</td><td>$40,000</td><td>$40,000</td></tr>
<tr><td><strong>Operating income</strong></td><td><strong>$40,000</strong></td><td><strong>$28,000</strong></td></tr>
</tbody></table>
<p>The $12,000 difference equals the 2,000 units added to inventory times $6 of fixed overhead each. Under absorption costing, that $12,000 sits on the balance sheet in ending inventory, valued at $36,000 (2,000 x $18), instead of $24,000 (2,000 x $12) under variable costing.</p>

<h3>Year 2: sales exceed production</h3>
<table><thead><tr><th>Line</th><th>Absorption</th><th>Variable</th></tr></thead><tbody>
<tr><td>Sales (10,000 x $30)</td><td>$300,000</td><td>$300,000</td></tr>
<tr><td>COGS: 2,000 old units x $18 + 8,000 new units x $19.50</td><td>$192,000</td><td></td></tr>
<tr><td>Variable production costs (10,000 x $12)</td><td></td><td>$120,000</td></tr>
<tr><td>Variable selling (10,000 x $2)</td><td>$20,000</td><td>$20,000</td></tr>
<tr><td>Fixed manufacturing overhead</td><td>(in COGS)</td><td>$60,000</td></tr>
<tr><td>Fixed selling and admin</td><td>$40,000</td><td>$40,000</td></tr>
<tr><td><strong>Operating income</strong></td><td><strong>$48,000</strong></td><td><strong>$60,000</strong></td></tr>
</tbody></table>
<p>Now the effect reverses: the $12,000 of Year 1 overhead held in inventory flows into Year 2 cost of goods sold. Over the two years combined, both methods show $88,000 of profit. Absorption costing only shifts profit between periods; it does not create it.</p>

<h2>Why the difference matters for decisions</h2>
<p>Suppose a retailer offers to buy 1,000 planters at $20 each, a one-off order with no selling cost, and you have spare capacity. Under absorption costing the unit cost looks like $18 plus selling costs, so the order seems barely worthwhile. Under variable costing the relevant cost is $12 per unit, so the order adds $8,000 of contribution toward fixed costs that you pay anyway. As long as it does not undercut your regular prices, it is a good order.</p>
<p>Variable costing also feeds directly into <a href="/blog/break-even-point">break-even analysis</a>: fixed costs of $100,000 divided by a contribution margin of $16 per unit gives a break-even point of 6,250 units. That is a far clearer target than anything an absorption statement shows.</p>
<p>The same logic applies when capacity is tight. If two products compete for the same machine time, the one with the higher contribution margin per machine hour should get priority, regardless of which looks more profitable after fixed overhead is spread across both. Absorption unit costs depend on how overhead happens to be allocated, so they can point you toward the wrong product. Contribution per unit of the scarce resource cannot.</p>

<h2>GAAP and IRS rules: which costing method you must use</h2>
<p>For external financial statements prepared under US GAAP, inventory must include fixed production overhead, so absorption costing is required. Lenders and investors reviewing your statements expect that basis.</p>
<p>For federal income tax, producers and many resellers are subject to the uniform capitalization (UNICAP) rules of section 263A, which require capitalizing direct costs and a share of indirect costs, sometimes more than GAAP does. The IRS's practice unit on <a href="https://www.irs.gov/pub/fatca/int_practice_units/producer_263a_computation.pdf" target="_blank" rel="noopener noreferrer">producer section 263A computations</a> shows how examiners approach these calculations. Small business taxpayers that meet the <a href="https://www.law.cornell.edu/uscode/text/26/448" target="_blank" rel="noopener noreferrer">section 448(c) gross receipts test</a> (average annual gross receipts over the prior three years at or below an inflation-adjusted threshold, widely reported as $32 million for 2026) are exempt from UNICAP and can use simplified inventory methods. Tax shelters cannot use the exemption. This is general information rather than tax advice; check your method with a CPA.</p>
<p>The practical answer for most small makers: keep the books on absorption costing for statements and taxes, and build a monthly contribution margin report for decisions. Our <a href="/blog/inventory-accounting">inventory accounting guide</a> covers the valuation side, and <a href="/blog/cost-of-goods-sold">cost of goods sold</a> shows what belongs in COGS.</p>

<h2>Step by step: producing both reports each month</h2>
<ol>
<li><strong>Tag every expense</strong> in your <a href="/blog/chart-of-accounts">chart of accounts</a> as production or non-production, and fixed or variable.</li>
<li><strong>Calculate a fixed overhead rate</strong> per unit or per labor hour from your annual budget.</li>
<li><strong>Value finished goods</strong> at variable cost plus fixed overhead rate for the absorption books.</li>
<li><strong>Prepare the absorption income statement</strong> from the books as usual.</li>
<li><strong>Prepare the contribution statement</strong> by pulling fixed manufacturing overhead out of COGS and showing it in full as a period cost.</li>
<li><strong>Reconcile the two:</strong> the profit difference should equal the change in inventory units times the fixed overhead rate. If it does not, a cost is misclassified.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating absorption unit cost as the minimum price.</strong> It includes fixed costs that do not change with one extra order.</li>
<li><strong>Treating variable cost as the long-run price floor.</strong> Over time, prices must cover fixed costs too, or the business shrinks.</li>
<li><strong>Building inventory to flatter profit.</strong> Absorption profit rises, but cash falls. Watch your <a href="/blog/inventory-turnover-ratio">inventory turnover ratio</a>.</li>
<li><strong>Mixing selling costs into product cost.</strong> Commissions and shipping-out are period costs under both methods.</li>
<li><strong>Comparing months without checking inventory change.</strong> A profit swing may be purely an inventory effect.</li>
</ul>

<h2>What to do if profit swings and you are not sure why</h2>
<p>A month where sales were flat but profit jumped, or the reverse, is often an absorption costing effect rather than a real change in performance. Work through this checklist before reacting:</p>
<ol>
<li><strong>Compare units produced with units sold.</strong> If production exceeded sales, fixed overhead was deferred into inventory and profit is flattered. If sales exceeded production, older overhead was released and profit is depressed.</li>
<li><strong>Calculate the inventory effect.</strong> Change in inventory units multiplied by the fixed overhead rate per unit. Strip it out to see the underlying result.</li>
<li><strong>Check whether the overhead rate changed.</strong> If you recalculate the rate monthly based on actual production, a low-volume month raises unit cost on every item produced. A rate set annually from normal capacity is steadier and is what GAAP expects for allocating fixed overhead.</li>
<li><strong>Look at cash.</strong> A profit increase driven by inventory build-up comes with a cash decrease. Your <a href="/blog/cash-flow-statement">cash flow statement</a> will show inventory growth as a use of cash in operating activities.</li>
<li><strong>Review inventory age.</strong> Slow-moving stock carrying fixed overhead may need to be written down, which hits absorption profit later.</li>
</ol>
<p>If the swing survives these checks, it reflects a real change in prices, costs or mix, and the contribution margin report will show where.</p>

<h2>Absorption vs variable costing for service businesses</h2>
<p>Service businesses with no inventory see the same profit under both methods, because nothing is held over to the next period. The contribution format is still worth using, though: separating variable costs such as subcontractors and payment processing fees from fixed costs such as salaries and rent shows how much each extra project contributes. Pair it with <a href="/blog/job-costing">job costing</a> or <a href="/blog/standard-costing">standard costing</a> if you need per-unit or per-job detail.</p>

<p>Understanding both methods keeps you from turning down profitable orders or chasing volume that only looks good on paper. When an order is confirmed, bill it promptly with clear line items using the <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF.</p>
`,
  },
  {
    slug: "rolling-forecast",
    title: "Rolling Forecast vs Annual Budget: How to Build One",
    description:
      "Rolling forecast vs annual budget: how a 12-month rolling forecast works, when it beats a static budget, step-by-step setup and a small business example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-forecast", "small-business-budget", "budget-vs-actual"],
    faqs: [
      {
        q: "What is a rolling forecast?",
        a: "A rolling forecast is a financial projection that always looks the same distance ahead. In a 12-month rolling forecast, when one month ends you replace it with actual results and add a new month at the end, so you always see the next 12 months. It is updated regularly, usually monthly or quarterly, with the latest information about sales, costs and cash, unlike an annual budget that is set once and then stays fixed for the year.",
      },
      {
        q: "Does a rolling forecast replace the annual budget?",
        a: "Not usually. Most businesses keep an annual budget as a target and a basis for spending authority, lender covenants and bonus plans, and use a rolling forecast as their best current estimate of what will actually happen. Some larger companies drop the annual budget entirely, but for a small business the combination works well: the budget says what you aimed for, the forecast says where you are heading, and the gap shows what needs action.",
      },
      {
        q: "How often should a rolling forecast be updated?",
        a: "Monthly is the most common cadence for small businesses, done a few days after the month-end close when actual figures are available. Quarterly updates suit stable businesses with predictable revenue. Businesses with tight cash should also keep a weekly 13-week cash flow forecast alongside the monthly profit forecast. Whatever cadence you choose, keep it consistent so trends are comparable from one update to the next.",
      },
      {
        q: "How far ahead should a rolling forecast go?",
        a: "Twelve months is the standard horizon because it always shows a full year and captures seasonality. Some businesses forecast 18 months so they can see into the next fiscal year when budgeting season starts. Fast-changing businesses sometimes use six months in detail plus a lighter summary beyond. The further out you go, the less detail you need: monthly detail for the near term and quarterly totals for later periods are fine.",
      },
      {
        q: "What drivers should a small business forecast?",
        a: "Forecast the few drivers that explain most of your results rather than every line in the ledger. For a service firm that might be billable headcount, utilization and average rate; for a retailer, traffic, conversion and average order value; for a subscription business, new customers, churn and price. Add payroll, rent and other major fixed costs, plus collection timing on invoices, because that determines when revenue becomes cash.",
      },
      {
        q: "Is a rolling forecast the same as a cash flow forecast?",
        a: "Not quite. A rolling forecast usually projects revenue, expenses and profit, and often the balance sheet, on an accrual basis over 12 months. A cash flow forecast projects actual cash in and out, often week by week for 13 weeks. Revenue in the profit forecast becomes cash only when invoices are paid, so the two can look very different. Many businesses keep both and link them through expected collection timing.",
      },
    ],
    content: `
<p>A rolling forecast is a projection that always looks a fixed distance ahead, usually 12 months. Each time a month closes, you swap in the actual numbers, revise the months ahead with what you now know, and add a new month at the end. An annual budget, by contrast, is set once before the year starts and then stays fixed, which means by October it is describing a world that no longer exists. For most small businesses, the best setup is both: a budget as the target and a rolling forecast as the live outlook.</p>

<p>This guide compares the two approaches, explains when a rolling forecast pays off, and walks through building one in a spreadsheet, with an example for a small design studio. It also shows how your invoices and payment terms feed the forecast, since revenue that has not been collected cannot pay this month's bills.</p>

<h2>Rolling forecast vs annual budget: key differences</h2>
<table><thead><tr><th>Feature</th><th>Annual budget</th><th>Rolling forecast</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Target, spending limits, accountability</td><td>Best current estimate of results</td></tr>
<tr><td>Time horizon</td><td>Fixed fiscal year; shrinks as the year passes</td><td>Always 12 (or 18) months ahead</td></tr>
<tr><td>Update frequency</td><td>Once a year (sometimes a mid-year reforecast)</td><td>Monthly or quarterly</td></tr>
<tr><td>Level of detail</td><td>Detailed, line by line</td><td>Driver-based, fewer lines</td></tr>
<tr><td>Time to prepare</td><td>Weeks, all at once</td><td>A few hours each cycle</td></tr>
<tr><td>Main weakness</td><td>Goes stale quickly</td><td>No fixed target unless paired with a budget</td></tr>
<tr><td>Best for</td><td>Stable businesses, lender reporting</td><td>Growing, seasonal or volatile businesses</td></tr>
</tbody></table>
<p>If you do not have a budget yet, start with our <a href="/blog/small-business-budget">small business budget guide</a>. If you want every expense justified from scratch each year, zero-based budgeting is another option; it pairs well with a rolling forecast too.</p>

<h2>When a rolling forecast is worth the effort</h2>
<ul>
<li><strong>Your revenue is lumpy or seasonal.</strong> Landscapers, tax preparers, event businesses and retailers need to see the next slow season early.</li>
<li><strong>You are growing or hiring.</strong> A forecast shows whether you can afford the next hire six months from now.</li>
<li><strong>You have a loan covenant or plan to borrow.</strong> Lenders and the SBA expect projections; the SBA's <a href="https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" target="_blank" rel="noopener noreferrer">business plan guidance</a> calls for forecasted income statements, balance sheets, cash flow statements and capital expenditure budgets over five years, with quarterly or monthly detail for the first year.</li>
<li><strong>Costs are moving.</strong> Supplier price rises or new wage rates make a static budget wrong within months.</li>
<li><strong>Your annual budget is ignored by March.</strong> That is a sign the business needs a live view instead.</li>
</ul>

<h2>How to build a 12-month rolling forecast: step by step</h2>
<ol>
<li><strong>Choose horizon and cadence.</strong> Twelve months, updated monthly within a week of month-end close, suits most small businesses.</li>
<li><strong>Identify the key drivers.</strong> Pick five to ten numbers that explain most of your revenue and costs. For a service firm: billable staff, utilization, average hourly rate, contractor spend, payroll, rent. Our <a href="/blog/sales-forecast">sales forecast guide</a> covers revenue drivers in more detail.</li>
<li><strong>Load actuals.</strong> Pull the last 12 months from your profit and loss statement to set baselines and seasonality.</li>
<li><strong>Project each driver month by month</strong>, using signed contracts, the sales pipeline, known price changes and hiring plans.</li>
<li><strong>Calculate revenue, costs and profit</strong> from the drivers with simple formulas rather than typing in totals.</li>
<li><strong>Convert to cash.</strong> Apply your actual collection pattern, for example 40% paid in the month invoiced and 55% the next month, plus timing of big payments like insurance and estimated taxes.</li>
<li><strong>Compare with budget</strong> and with last month's forecast. Explain big changes in one line each.</li>
<li><strong>Roll forward.</strong> Next month, replace the oldest forecast month with actuals and add a new month at the far end.</li>
</ol>

<h2>Worked example: a design studio's rolling forecast</h2>
<p>The figures are illustrative. A four-person design studio set a 2026 annual budget of $480,000 revenue and $72,000 profit. At the end of September 2026 it builds its rolling forecast for October 2026 to September 2027, shown here by quarter.</p>
<table><thead><tr><th>Quarter</th><th>Billable hours</th><th>Avg rate</th><th>Revenue</th><th>Costs</th><th>Profit</th></tr></thead><tbody>
<tr><td>Q4 2026 (Oct-Dec)</td><td>1,050</td><td>$110</td><td>$115,500</td><td>$99,000</td><td>$16,500</td></tr>
<tr><td>Q1 2027 (Jan-Mar)</td><td>1,150</td><td>$115</td><td>$132,250</td><td>$112,000</td><td>$20,250</td></tr>
<tr><td>Q2 2027 (Apr-Jun)</td><td>1,200</td><td>$115</td><td>$138,000</td><td>$112,000</td><td>$26,000</td></tr>
<tr><td>Q3 2027 (Jul-Sep)</td><td>1,000</td><td>$115</td><td>$115,000</td><td>$112,000</td><td>$3,000</td></tr>
<tr><td><strong>Next 12 months</strong></td><td><strong>4,400</strong></td><td></td><td><strong>$500,750</strong></td><td><strong>$435,000</strong></td><td><strong>$65,750</strong></td></tr>
</tbody></table>
<p>Three things show up that the original budget could not show:</p>
<ul>
<li><strong>Q4 2026 is weaker than budget.</strong> A large client paused a project, so the studio will finish 2026 about $18,000 below budgeted revenue. The owner knows this now, not in January.</li>
<li><strong>A planned rate increase</strong> from January lifts revenue even with flat hours. Our guide to <a href="/blog/how-to-raise-prices">raising prices</a> covers how to announce it.</li>
<li><strong>Summer 2027 is thin.</strong> With a fifth hire planned for January raising quarterly costs to $112,000, Q3 2027 barely breaks even. The owner can delay the hire to April or start selling summer work early.</li>
</ul>
<p>On the cash side, the studio invoices monthly on net 30 terms and its records show average collection around 38 days. Revenue earned in December mostly arrives in late January, so the forecast flags a tight cash month in January when annual software renewals also fall due. That detail belongs in a weekly <a href="/blog/cash-flow-forecast">13-week cash flow forecast</a>.</p>

<h2>How invoicing affects your forecast</h2>
<p>Forecasts are built on revenue, but you pay bills with cash. The bridge between them is your invoicing and collections:</p>
<ul>
<li><strong>Invoice promptly.</strong> Every day between finishing work and sending the invoice delays cash by a day.</li>
<li><strong>Track days sales outstanding.</strong> Use your real <a href="/blog/days-sales-outstanding">DSO</a> in the forecast, not your stated terms.</li>
<li><strong>Use deposits and milestones</strong> on big projects so cash arrives before costs pile up.</li>
<li><strong>Review overdue invoices</strong> in each forecast cycle with an accounts receivable aging report; move doubtful amounts out of next month's cash.</li>
</ul>
<p>Sending invoices quickly is the cheapest forecasting improvement there is. The <a href="/invoice-generator">free invoice generator</a> lets you produce one in a couple of minutes.</p>

<h2>Adding scenarios to a rolling forecast</h2>
<p>A single-line forecast hides how much could go wrong or right. Once the base forecast is built from drivers, scenarios take minutes: copy the driver tab and change the inputs. Three are usually enough:</p>
<table><thead><tr><th>Scenario</th><th>Example driver changes</th><th>Question it answers</th></tr></thead><tbody>
<tr><td>Base case</td><td>Signed work plus a realistic share of the pipeline</td><td>What do we expect?</td></tr>
<tr><td>Downside</td><td>Lose the largest client; utilization down 10 points; collections slow by 15 days</td><td>How long can we cover costs? When would we need credit?</td></tr>
<tr><td>Upside</td><td>Two new retainers from the pipeline; rate increase accepted by all clients</td><td>Can we deliver it? When do we need to hire?</td></tr>
</tbody></table>
<p>For the design studio above, the downside case shows that losing its largest client in Q1 2027 would turn the next 12 months into a loss of roughly $20,000 and exhaust its cash reserve by early summer. That is a strong argument for arranging a line of credit now, while results are good, and for adding clauses such as deposits and late fees to new contracts. Lenders will also ask for this kind of analysis; see our guide to <a href="/blog/sba-loans">SBA loans</a> for what they typically review.</p>

<h2>Sharing the forecast with partners, lenders and staff</h2>
<p>Keep the monthly pack short: a one-page summary with the next 12 months of revenue, profit and ending cash, a comparison with budget and with last month's forecast, and three to five sentences explaining what changed and what you are doing about it. Partners and lenders care more about the explanation than about the precision of any single number. Team leads benefit from seeing the driver they influence, such as utilization or average order value, rather than the whole model. Consistency matters more than polish: the same format every month makes trends obvious. Keep every past version of the forecast too, so you can look back and see how quickly the outlook changed and how accurate each update turned out to be.</p>

<h2>Common rolling forecast mistakes</h2>
<ul>
<li><strong>Too much detail.</strong> Forecasting 200 expense lines turns a monthly two-hour task into a week. Forecast drivers and big lines; group the rest.</li>
<li><strong>Sandbagging or optimism.</strong> A forecast is a best estimate, not a target. Keep targets in the budget.</li>
<li><strong>Not tracking accuracy.</strong> Compare each month's forecast with what actually happened to learn which drivers you misjudge.</li>
<li><strong>Forgetting one-off cash items:</strong> annual insurance, tax payments, equipment purchases and loan repayments.</li>
<li><strong>Letting it lapse.</strong> A rolling forecast that skips two months is just an outdated budget.</li>
</ul>

<h2>Tools for rolling forecasts</h2>
<p>A spreadsheet is enough for most small businesses: one tab for drivers, one for monthly calculations, one for actuals, and a summary. Accounting software can export actuals each month. Dedicated planning tools and AI features in accounting platforms can automate parts of the work; our article on <a href="/blog/ai-cash-flow-forecasting">AI cash flow forecasting</a> explains where those are reliable and where human judgment still matters. Whatever you use, compare actuals against the forecast with a <a href="/blog/budget-vs-actual">budget vs actual variance report</a>, and for investor or lender packs, see our guide to <a href="/blog/pro-forma-financial-statements">pro forma financial statements</a>.</p>

<p>A rolling forecast keeps the next 12 months in view all the time, so hiring, pricing and cash decisions are made early rather than in a panic. The most reliable input is a steady flow of invoices sent on time. Create yours with the <a href="/invoice-generator">free invoice generator</a>: no sign-up needed, and you can download every invoice as a PDF.</p>
`,
  },
];
