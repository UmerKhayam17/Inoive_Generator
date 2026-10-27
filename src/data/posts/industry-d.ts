import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_D: PostDraft[] = [
  {
    slug: "usage-based-billing-invoice",
    title: "Usage-Based Billing: How to Invoice Metered SaaS Usage",
    description:
      "Learn how usage-based billing works and how to invoice metered SaaS usage clearly: pricing models, tiers, overages, minimum commits and a worked example.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-invoices-guide", "prorated-invoice", "stripe-invoicing-guide"],
    faqs: [
      {
        q: "What is usage-based billing?",
        a: "Usage-based billing is a pricing approach where the customer pays according to how much of a product they actually consume in a billing period, such as API calls, gigabytes stored, messages sent or active users. The invoice is issued at the end of the period, or in arrears, once usage is measured. It is common in cloud infrastructure, communications APIs, data tools and many SaaS products that pair a base fee with metered charges.",
      },
      {
        q: "Is usage-based billing the same as metered billing?",
        a: "The terms are often used interchangeably. Metered billing usually describes the mechanics, meaning you meter a unit and charge per unit, while usage-based billing describes the overall pricing strategy. In practice both mean the invoice amount changes with consumption. Some companies use 'consumption pricing' or 'pay as you go' for the same idea, especially when there is no fixed subscription fee at all.",
      },
      {
        q: "Should I bill usage in advance or in arrears?",
        a: "Usage is almost always billed in arrears, because you cannot know the quantity until the period ends. Fixed parts of the price, such as a platform fee or committed spend, are often billed in advance. Many SaaS invoices therefore combine both: next month's base fee billed upfront plus last month's overage billed in arrears. Label each line with its own service period so the customer can tell which is which.",
      },
      {
        q: "How do I show tiered pricing on an invoice?",
        a: "Give each tier its own line with the unit range, the quantity that fell into that tier, the unit rate and the line total. For example, 'API calls 1 to 100,000, included' then 'API calls 100,001 to 162,500, 62,500 at $0.004'. This lets the customer reproduce the math from their own dashboard. Avoid a single blended line, because it hides the rates and invites disputes.",
      },
      {
        q: "What is a minimum commit and how is it invoiced?",
        a: "A minimum commit is a contractual promise to spend at least a set amount per period or per year. If actual usage falls short, the customer pays a true-up for the difference; if usage exceeds it, they pay the overage. On the invoice, show actual usage charges first, then a separate 'minimum commitment true-up' line with the shortfall calculation, so the customer sees both the real usage and the contractual top-up.",
      },
      {
        q: "How do I handle usage disputes?",
        a: "Start by sharing the underlying usage report for the disputed period, broken down by day, project or API key, so the customer can compare it to their own logs. If the meter was wrong, issue a credit note for the overcharge rather than editing the original invoice. If usage was real but unexpected, such as a runaway script, you may offer a one-time goodwill credit and suggest usage alerts or caps.",
      },
      {
        q: "Do I charge sales tax on usage-based SaaS fees?",
        a: "It depends on where the customer is located. In the US, some states tax SaaS or digital services and others do not, and the rules can differ for data processing or information services. In VAT countries, cross-border B2B digital services are often handled under reverse charge. Check the rules for each jurisdiction where you have customers, and apply tax to the full invoice total, including usage, where it is taxable.",
      },
      {
        q: "Can I create a usage-based invoice in a free invoice generator?",
        a: "Yes, if you calculate the usage yourself. Export the period's usage from your product or billing database, work out the tiers and overage in a spreadsheet, then enter each tier as a line item with quantity and unit price in the generator and download the PDF. A free generator will not meter usage or send invoices automatically, so it suits low volumes or early-stage products before you adopt a billing platform.",
      },
      {
        q: "How do I make usage invoices less surprising for customers?",
        a: "Publish your rates and tiers clearly, show usage in the product as it accrues, and send alerts at thresholds such as 50%, 80% and 100% of the included allowance. On the invoice itself, show the included allowance, actual usage and overage side by side. Customers rarely object to a large bill they could see coming; they object to one they could not predict or check.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Usage-based billing charges customers for what they actually consume in a period, such as API calls, storage or seats. To invoice it, measure usage at period end, apply your pricing model (per unit, tiered, volume or overage on top of a base fee), list each tier as its own line with quantity and rate, then add tax and any credits.</p>

<p>Usage-based billing, also called metered billing or consumption pricing, has become a standard way to sell SaaS, APIs and cloud services. It lines up price with value, but it makes invoices harder to read. A flat subscription invoice has one line; a usage invoice may have a base fee, three pricing tiers, an overage, a prorated plan change and a prepaid credit. If the customer cannot check the math, they will question it.</p>

<p>This guide explains the main metered pricing models, how each one should appear on an invoice, how to handle minimum commits, proration and credits, and a fully worked sample invoice with every calculation shown. If you bill a small number of usage customers, you can build each invoice in our <a href="/invoice-generator">free invoice generator</a> once you have the usage numbers from your product.</p>

<h2>What usage-based billing means for your invoices</h2>
<p>With a fixed subscription, you know the invoice amount before the period starts. With usage-based billing, you only know it after the period ends and the usage data is final. That changes three things about how you invoice:</p>
<ul>
<li><strong>Timing:</strong> usage is billed in arrears, usually a few days after the period closes so late-arriving events can be counted.</li>
<li><strong>Evidence:</strong> the invoice amount depends on data the customer did not create by hand, so they need a way to verify it, either on the invoice or in a linked usage report.</li>
<li><strong>Line structure:</strong> each billable metric, and often each tier within a metric, needs its own line item with quantity, unit and rate.</li>
</ul>
<p>The best usage invoices are boring in the right way. A finance person at the customer should be able to open the PDF, open their own usage dashboard and reconcile the two in a few minutes. That is the standard to aim for, whatever pricing model you use.</p>

<h2>Common metered pricing models</h2>
<p>Most usage-based billing setups are built from a handful of models. Many companies combine two or three of them.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Pure per-unit</td><td>Every unit costs the same, for example $0.002 per API call</td><td>One line: quantity times unit price</td></tr>
<tr><td>Graduated (tiered)</td><td>Units in each band are priced at that band's rate</td><td>One line per tier, each with its own quantity and rate</td></tr>
<tr><td>Volume</td><td>All units are priced at the rate of the tier the total lands in</td><td>One line, with the tier reached named in the description</td></tr>
<tr><td>Base fee plus overage</td><td>A fixed fee includes an allowance; extra units cost more</td><td>Base fee line, included allowance line, overage line</td></tr>
<tr><td>Package or block</td><td>Units sold in blocks, such as $10 per 1,000 messages</td><td>Number of blocks used, rounded up as the contract says</td></tr>
<tr><td>Prepaid credits</td><td>Customer buys credits upfront and draws them down</td><td>Usage lines, then a negative line for credits applied</td></tr>
<tr><td>Minimum commit</td><td>Customer promises a minimum spend per period</td><td>Usage lines, then a true-up line if usage falls short</td></tr>
</tbody></table>
<p>The difference between graduated and volume pricing causes more disputes than any other detail, so state which one you use in the contract and in the line description. Under graduated pricing, 150,000 units with a first tier of 100,000 means 100,000 at the first rate and 50,000 at the second. Under volume pricing, all 150,000 are charged at the second rate.</p>

<h3>Choosing a billable metric</h3>
<p>The metric you charge for should be easy for the customer to understand, easy for you to measure accurately, and connected to the value they get. Good metrics include API requests, gigabytes stored per month, minutes processed, messages sent, monthly active users and compute hours. Avoid metrics that the customer cannot see or influence, because they make every invoice feel arbitrary.</p>

<h3>Seats are usage too</h3>
<p>Per-seat pricing is a simple form of usage-based billing. If seats can be added mid-month, you need a policy for partial periods. Some products charge the full month for any seat active during it; others prorate by day. Our <a href="/blog/prorated-invoice">prorated invoice guide</a> walks through daily and monthly proration formulas you can reuse for seats and plan changes.</p>

<h2>How to invoice usage-based billing step by step</h2>
<ol>
<li><strong>Close the usage period.</strong> Decide on a cut-off, for example midnight UTC on the last day of the month, and wait a short grace period for delayed events before you finalize the numbers.</li>
<li><strong>Export usage per customer and per metric.</strong> Pull totals from your product database, logs or metering service. Keep the raw export; you will need it if the customer asks.</li>
<li><strong>Apply the pricing model.</strong> Split usage into tiers, subtract included allowances and calculate overage. A spreadsheet works fine at low volume.</li>
<li><strong>Add fixed and advance charges.</strong> Include the next period's base fee or platform fee if you bill it in advance, with its own service dates.</li>
<li><strong>Apply proration, discounts and credits.</strong> Add prorated amounts for mid-cycle plan changes, contractual discounts and any prepaid credits being drawn down.</li>
<li><strong>Calculate tax.</strong> Apply sales tax, VAT or GST according to the customer's location and the tax treatment of your service.</li>
<li><strong>Issue the invoice with a usage summary.</strong> Number it in sequence, attach or link the usage report, and send it on the same day each cycle.</li>
</ol>
<p>Once you invoice more than a few dozen usage customers, doing this by hand becomes risky. That is the point where a billing platform with built-in metering earns its cost. Our <a href="/blog/stripe-invoicing-guide">Stripe invoicing guide</a> covers how one popular option handles invoices, and <a href="https://docs.stripe.com/billing/subscriptions/usage-based" target="_blank" rel="noopener noreferrer">Stripe's usage-based billing documentation</a> is a useful reference for the concepts even if you use a different tool.</p>

<h2>Sample usage-based billing invoice</h2>
<p>Here is a worked example for a fictional API company. The customer is on a Growth plan: a $500 monthly platform fee that includes 100,000 API calls, graduated overage pricing above that, storage billed per gigabyte-month, and seats at $15 each. They also hold $100 of promotional credit.</p>
<p>October 2026 usage: 162,500 API calls, 1,240 GB-months of storage and 12 active seats.</p>
<table><thead><tr><th>Description</th><th>Service period</th><th>Quantity</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Growth plan platform fee (includes 100,000 API calls)</td><td>Nov 1 to Nov 30, 2026</td><td>1</td><td>$500.00</td><td>$500.00</td></tr>
<tr><td>API calls 1 to 100,000 (included in plan)</td><td>Oct 1 to Oct 31, 2026</td><td>100,000</td><td>$0.000</td><td>$0.00</td></tr>
<tr><td>API calls 100,001 to 500,000 (tier 2 overage)</td><td>Oct 1 to Oct 31, 2026</td><td>62,500</td><td>$0.004</td><td>$250.00</td></tr>
<tr><td>Storage, GB-months</td><td>Oct 1 to Oct 31, 2026</td><td>1,240</td><td>$0.02</td><td>$24.80</td></tr>
<tr><td>Active seats</td><td>Oct 1 to Oct 31, 2026</td><td>12</td><td>$15.00</td><td>$180.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$954.80</strong></td></tr>
<tr><td colspan="4">Less promotional credit applied</td><td>-$100.00</td></tr>
<tr><td colspan="4">Sales tax (not taxable in this customer's state in this example)</td><td>$0.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$854.80</strong></td></tr>
</tbody></table>
<p>The arithmetic, line by line:</p>
<ul>
<li>Overage calls: 162,500 total minus 100,000 included = 62,500 calls. 62,500 x $0.004 = $250.00.</li>
<li>Storage: 1,240 x $0.02 = $24.80.</li>
<li>Seats: 12 x $15.00 = $180.00.</li>
<li>Subtotal: $500.00 + $0.00 + $250.00 + $24.80 + $180.00 = $954.80.</li>
<li>Total: $954.80 - $100.00 credit = $854.80.</li>
</ul>
<p>Notice two details. First, the platform fee covers November and is billed in advance, while every usage line covers October and is billed in arrears; each line carries its own service period. Second, the included allowance appears as a zero-value line. That line costs nothing, but it shows the customer that the first 100,000 calls were counted and covered, which heads off the most common question on usage invoices.</p>
<p>To make this layout in our generator, enter each row as a line item, use the description field for the tier and service period, and add the credit as a discount. A clean layout such as the <a href="/invoice-templates/startup">startup invoice template</a> keeps a long list of metered lines readable.</p>

<h2>Minimum commits, true-ups and overages</h2>
<p>Larger usage-based contracts often include a minimum commitment. The customer agrees to spend at least a set amount per month or per year, usually in exchange for a lower unit rate. Invoicing it is straightforward if you keep the calculation visible.</p>
<p>Example: a customer commits to $2,000 per month. In September their metered usage totals $1,640. The invoice shows the usage lines totaling $1,640, then a line reading "Minimum monthly commitment true-up ($2,000.00 - $1,640.00)" for $360.00, for a total of $2,000.00. If usage had been $2,300, there would be no true-up and the invoice would simply total $2,300.</p>
<p>Annual commits work the same way, but the true-up usually appears on the final invoice of the contract year. Some contracts let the customer prepay the commit upfront and draw it down, which turns the commit into prepaid credits. Whichever structure you use, keep a running balance of commit consumed so far and show it in the invoice notes; it saves a support ticket every month.</p>

<h3>Rollover and expiry of credits</h3>
<p>If unused credits or commit expire at the end of a term, say so in the contract and repeat it on the invoice notes in the final months. Expiring credits also affect how you recognize revenue, which is covered in our guide to <a href="/blog/revenue-recognition-asc-606">revenue recognition under ASC 606</a>.</p>

<h2>Proration and plan changes mid-cycle</h2>
<p>Usage customers change plans often. When a customer upgrades from a $500 plan to a $1,200 plan on day 11 of a 30-day month, a common approach is to credit the unused portion of the old plan and charge the remaining portion of the new one:</p>
<ul>
<li>Unused old plan: $500 x 20/30 = $333.33 credit.</li>
<li>Remaining new plan: $1,200 x 20/30 = $800.00 charge.</li>
<li>Net proration: $800.00 - $333.33 = $466.67.</li>
</ul>
<p>Included allowances should be prorated the same way, or your contract should state that the higher allowance applies for the whole period. Pick one rule and apply it consistently. Proration lines belong on the next regular invoice unless the change is large enough to warrant an immediate one.</p>

<h2>What to include on a usage-based invoice</h2>
<p>Use this checklist before every usage-based billing run:</p>
<ul>
<li>Your business name, address, contact details and tax registration number where required.</li>
<li>Customer legal name, billing address, and their PO or account number.</li>
<li>A unique, sequential invoice number; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a format.</li>
<li>Invoice date, due date and payment terms.</li>
<li>The service period for each line, especially when advance and arrears charges are mixed.</li>
<li>Each billable metric on its own line with unit, quantity and rate.</li>
<li>Each tier on its own line under graduated pricing, including the included allowance at zero.</li>
<li>Proration, discounts, commit true-ups and credits as separate, labeled lines.</li>
<li>Tax rate and amount, or a note explaining why none applies, such as reverse charge.</li>
<li>A link to, or attachment of, the detailed usage report for the period.</li>
<li>Payment methods and, if you take cards, any auto-charge date.</li>
</ul>
<p>The general principles behind line-level detail are covered in our <a href="/blog/itemized-invoice">itemized invoice guide</a>, and they matter even more when quantities change every month.</p>

<h2>Common mistakes in usage-based billing</h2>
<ul>
<li><strong>One blended usage line.</strong> "Usage, October: $474.80" gives the customer nothing to check. Break it out by metric and tier.</li>
<li><strong>Mixing up graduated and volume pricing.</strong> Applying the wrong one can overcharge or undercharge by a large margin. Write the model into the contract and the invoice.</li>
<li><strong>Missing service periods.</strong> When advance and arrears lines share one invoice without dates, customers assume they are being double billed.</li>
<li><strong>Closing the period too early.</strong> Events that arrive after you finalize get lost or billed in the wrong month. Allow a short grace window.</li>
<li><strong>Editing a sent invoice to fix usage.</strong> Issue a <a href="/blog/credit-note-guide">credit note</a> or an adjustment invoice instead, so your audit trail stays intact.</li>
<li><strong>No usage alerts.</strong> A surprise five-figure invoice damages trust even when it is correct. Warn customers as they approach their allowance.</li>
<li><strong>Ignoring tax on usage lines.</strong> If your service is taxable in a customer's jurisdiction, usage charges usually are too, not just the base fee.</li>
<li><strong>Rounding inconsistently.</strong> Decide whether you round per unit, per line or per invoice, and whether partial blocks round up, then stick to it.</li>
</ul>

<h2>When to automate usage-based billing</h2>
<p>Manual usage invoicing works for a few customers with simple pricing. It stops working when you have many customers, several metrics, frequent plan changes or daily usage alerts. At that point you need metering that captures events reliably, a rating engine that applies your price book, and invoicing that runs on schedule. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains the scheduling side, and you can browse more billing guides by trade in the <a href="/blog/category/industry-invoices">industry invoices</a> section.</p>
<p>Until then, the combination of a usage export, a spreadsheet for the tier math and a clean PDF invoice is perfectly respectable. What matters most in usage-based billing is not the software but the transparency: every number on the invoice should be traceable to a meter the customer can see.</p>
`,
  },
  {
    slug: "marketing-agency-invoice-template",
    title: "Marketing Agency Invoice Template: Retainers & Ad Spend",
    description:
      "Use this marketing agency invoice template guide to bill retainers, pass-through ad spend, management fees and markups clearly, with a worked sample invoice.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "social-media-manager-invoice-template",
      "retainer-invoice",
      "markup-vs-margin",
      "scope-creep-change-order",
    ],
    faqs: [
      {
        q: "What should a marketing agency invoice include?",
        a: "Your agency's name, address and tax details, the client's legal name and PO number, a unique invoice number, issue and due dates, the billing period, and separate lines for the retainer, each ad platform's media spend, the management fee with its percentage and base, any marked-up third-party costs, out-of-scope work, tax, deposits already received and the balance due, plus payment instructions.",
      },
      {
        q: "Should ad spend be on the same invoice as agency fees?",
        a: "It can be, as long as the lines are clearly separated. Many agencies put media spend on its own lines, or on a separate media invoice, so the client's finance team can code it to an advertising budget and the fees to a services budget. Separate invoices also help if the client prepays media but pays fees on standard terms. Agree the approach in your contract before the first billing cycle.",
      },
      {
        q: "How do agencies charge a management fee on ad spend?",
        a: "The usual method is a percentage of media spend for the period, such as 10% to 20%, sometimes with a monthly minimum. Show the percentage and the spend it is calculated on in the line description, for example 'Media management fee, 12% of $20,000.00 spend'. Some agencies instead use flat fees by spend band or a fixed retainer that covers management; whichever you use, the contract should define it.",
      },
      {
        q: "Should I pay for client ad spend on my agency card?",
        a: "Only if your contract and cash flow can handle it. Fronting ad spend means you carry the client's media cost until they pay, which can be tens of thousands of dollars. Many agencies ask clients to put their own card on the ad accounts, or require a media deposit before campaigns launch. If you do front spend, invoice it promptly, keep platform receipts and consider a handling fee.",
      },
      {
        q: "Is it legal to mark up ad spend?",
        a: "Markups are generally allowed if the client agreed to them. Problems arise when an agency bills media 'at cost' while actually adding a margin, or when the contract promises transparency and the invoice hides fees. State whether media is billed at cost or with a markup in your contract, and keep platform invoices so you can show the client the underlying spend if asked.",
      },
      {
        q: "How do I invoice out-of-scope work on a retainer?",
        a: "Bill it as a separate line with the hours or deliverable, the rate and a reference to the client's written approval, such as an email or change order. Do not fold it into the retainer line, because that makes the retainer look like it increased. If out-of-scope requests become regular, use the data to renegotiate the retainer rather than adding extras every month.",
      },
      {
        q: "When should a marketing agency send invoices?",
        a: "Retainers are usually billed in advance on the first of the month, while ad spend and percentage-based management fees are billed in arrears once the month's spend is final. Some agencies combine both on a single invoice early in the month: next month's retainer plus last month's media and fees. Pick a consistent date so the client can plan approvals around it.",
      },
      {
        q: "Do I charge sales tax on marketing services?",
        a: "It depends on where you and your client are. In most US states, advertising and marketing services are not taxed, but rules vary and some states tax certain digital services or printed materials. In VAT and GST countries, agency fees are usually taxable, with cross-border B2B services often handled by reverse charge. Check local rules and treat pass-through media according to how your contract defines your role.",
      },
      {
        q: "What payment terms are typical for marketing agencies?",
        a: "Net 15 and Net 30 are common for fees, while media spend is often due on receipt or in advance because platforms charge the agency or card immediately. Larger clients may insist on Net 45 or Net 60, which is a strong reason to require media prepayment. Put the terms in the contract, repeat them on every invoice and state any late fee clearly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A marketing agency invoice template should separate four kinds of charges: the monthly retainer, pass-through ad spend by platform, the management fee (with its percentage and base shown), and any marked-up third-party costs or out-of-scope work. Show deposits already received and the balance due, then send it on a consistent date each month.</p>

<p>Agency billing looks simple until media spend enters the picture. A retainer alone is one line. Add Google and Meta spend, a percentage management fee, stock assets with a markup and a rush landing page, and the invoice suddenly has to explain where every dollar went. Clients who cannot follow the math delay approval, and clients who suspect hidden margins start shopping for a new agency.</p>

<p>This guide shows how to structure a marketing agency invoice template for retainers, ad spend and fees, how to calculate management fees and markups, and a worked sample you can copy. You can build the invoice in our <a href="/invoice-generator">free invoice generator</a>, and the <a href="/invoice-templates/agency">agency invoice template</a> is designed for exactly this kind of multi-line, multi-service bill.</p>

<h2>How marketing agencies usually bill</h2>
<p>Most agencies use one or a mix of these models. Your marketing agency invoice template should mirror whichever your contract sets out.</p>
<table><thead><tr><th>Billing model</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Monthly retainer</td><td>Fixed fee each month for an agreed scope or hours</td><td>Ongoing SEO, content, social and strategy work</td></tr>
<tr><td>Percentage of ad spend</td><td>Management fee calculated as a percentage of media spend</td><td>Paid search and paid social management</td></tr>
<tr><td>Flat fee by spend band</td><td>Fixed fee that steps up as spend crosses thresholds</td><td>Clients who want predictable fees at varying spend</td></tr>
<tr><td>Project fee</td><td>Fixed price for a defined deliverable</td><td>Website launches, brand campaigns, audits</td></tr>
<tr><td>Hourly or time and materials</td><td>Hours worked times rate, plus costs</td><td>Ad hoc requests and out-of-scope work</td></tr>
<tr><td>Performance-based</td><td>Fee tied to leads, sales or other results</td><td>Lead generation and affiliate-style deals</td></tr>
</tbody></table>
<p>A typical performance marketing client might pay a $4,000 retainer for strategy and creative, plus 12% of media spend for campaign management, plus media at cost. That is three different calculations on one invoice, so clarity matters.</p>

<h2>Retainers on a marketing agency invoice</h2>
<p>The retainer is the anchor of most agency invoices. Bill it in advance, usually on the first of the month, and describe what it covers in a few words so the client's approver does not need to dig out the contract: "Monthly retainer, November 2026: SEO, 8 blog posts, social scheduling (up to 40 hours)."</p>
<p>If the retainer includes a block of hours, track usage and report it in the invoice notes, such as "34 of 40 hours used in October." That builds trust and gives you data for renewal conversations. For deeper detail on structuring retainers, unused hours and rollover, see our <a href="/blog/retainer-invoice">retainer invoice guide</a>.</p>

<h3>Out-of-scope work</h3>
<p>Requests outside the retainer should appear as separate lines with hours, rate and an approval reference. Never quietly increase the retainer line. If extras show up every month, the scope is wrong; our article on <a href="/blog/scope-creep-change-order">scope creep and change orders</a> explains how to document and price them before the work begins.</p>

<h2>Billing pass-through ad spend</h2>
<p>Pass-through ad spend is money that goes to the platforms, such as Google Ads, Meta, LinkedIn or TikTok, rather than to the agency. How you bill it depends on who pays the platform:</p>
<ul>
<li><strong>Client pays the platform directly.</strong> The client's card or billing profile sits on the ad account. The agency invoices only fees. This is the lowest-risk option for the agency.</li>
<li><strong>Agency pays and rebills.</strong> The agency's card or credit line pays the platform, and the agency invoices the client for the spend. The agency carries the cash flow risk until the client pays.</li>
<li><strong>Client prepays a media deposit.</strong> The client funds expected spend upfront; the agency pays the platforms and reconciles actual spend on the next invoice.</li>
</ul>
<p>When the agency pays and rebills, list each platform on its own line with the billing period and the exact amount from the platform's invoice or billing report. Keep those source documents. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">IRS recordkeeping guidance</a> is a good reminder that supporting documents for income and expenses should be kept, and a client audit of media spend will ask for them too.</p>

<h3>Media billing at cost versus with a markup</h3>
<p>"At cost" means the client pays exactly what the platform charged. A markup adds a percentage on top. Both are legitimate if the contract says so. What damages relationships is calling something "at cost" and then adding a margin, or rounding up platform charges. If you mark up media, show it as its own line rather than baking it into the spend figure.</p>

<h2>Management fees and markups explained</h2>
<p>The management fee is what the agency earns for running campaigns. The most common structure is a percentage of spend:</p>
<ul>
<li>Management fee = media spend for the period x fee percentage.</li>
<li>Example: $20,000 spend x 12% = $2,400.</li>
</ul>
<p>Write both the base and the rate into the line description so the client can verify it instantly. If the contract has a minimum fee, such as "12% of spend or $1,500, whichever is greater," apply the minimum and say so in the description.</p>
<p>Markups on third-party costs, such as stock photos, fonts, printing, influencer fees or software seats bought for the client, work the same way: cost x (1 + markup %). A $180 stock license with a 15% markup becomes $180 x 1.15 = $207. Remember that a markup percentage is not the same as your margin; a 15% markup produces a margin of about 13%. Our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> shows the conversion.</p>

<h2>Sample marketing agency invoice template, filled in</h2>
<p>Here is a worked example for a fictional agency billing a client for October media and November services. The client prepaid a $20,000 media deposit in September.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly retainer, November 2026: SEO, content and social (up to 40 hours)</td><td>1</td><td>$4,000.00</td><td>$4,000.00</td></tr>
<tr><td>Google Ads media spend, Oct 1 to Oct 31, 2026 (at cost)</td><td>1</td><td>$12,500.00</td><td>$12,500.00</td></tr>
<tr><td>Meta Ads media spend, Oct 1 to Oct 31, 2026 (at cost)</td><td>1</td><td>$7,500.00</td><td>$7,500.00</td></tr>
<tr><td>Media management fee, 12% of $20,000.00 October spend</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Stock image licenses, cost $180.00 plus 15% handling</td><td>1</td><td>$207.00</td><td>$207.00</td></tr>
<tr><td>Out-of-scope landing page build, approved by email Oct 14 (hours)</td><td>6</td><td>$125.00</td><td>$750.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$27,357.00</strong></td></tr>
<tr><td colspan="3">Less media deposit received Sep 25 (INV-2026-0912)</td><td>-$20,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$7,357.00</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Total media spend: $12,500.00 + $7,500.00 = $20,000.00.</li>
<li>Management fee: $20,000.00 x 12% = $2,400.00.</li>
<li>Stock licenses: $180.00 x 1.15 = $207.00.</li>
<li>Out-of-scope work: 6 hours x $125.00 = $750.00.</li>
<li>Subtotal: $4,000.00 + $12,500.00 + $7,500.00 + $2,400.00 + $207.00 + $750.00 = $27,357.00.</li>
<li>Balance due: $27,357.00 - $20,000.00 deposit = $7,357.00.</li>
</ul>
<p>This example assumes no sales tax applies, which is the case for advertising services in many US states. In VAT or GST countries the fees would typically carry tax, so add a tax line and check how pass-through media should be treated for your situation. In our generator, the deposit goes in the amount-paid field so the PDF shows the balance due automatically.</p>
<p>Notice how each line answers a question before the client asks it: which period, which platform, what percentage of what base, what the original cost was and who approved the extra work. That is the whole job of a good marketing agency invoice template.</p>

<h2>Reconciling media deposits each month</h2>
<p>If clients prepay media, you need a simple reconciliation routine, or deposits and actual spend drift apart within a quarter. A workable monthly process looks like this:</p>
<ol>
<li><strong>Pull final spend from each platform</strong> after the month closes, using the platform's billing report or invoice rather than the campaign dashboard, because billed amounts can differ after adjustments for invalid activity.</li>
<li><strong>Compare spend to the deposit held.</strong> If the client deposited $20,000 and spend was $18,750, you hold $1,250 of unused funds.</li>
<li><strong>Decide how to treat the difference.</strong> Most contracts either roll the unused amount forward as a credit against next month's media or refund it. Overspend is invoiced as an additional media line.</li>
<li><strong>Show the reconciliation on the invoice.</strong> A short line such as "Media deposit $20,000.00 less October spend $18,750.00 = $1,250.00 credit carried forward" removes any doubt.</li>
<li><strong>Request the next deposit</strong> based on the approved media plan for the coming month, as a separate line or a separate deposit invoice.</li>
</ol>
<p>Keep a running media ledger per client, with deposits in, spend out and balance held. When a client leaves, that ledger tells you exactly how much to refund or invoice in the final settlement.</p>

<h3>Payment terms and timing</h3>
<p>Platforms charge the paying card or credit line quickly, often during the month as spend accrues, while clients may pay on Net 30 or longer. That timing gap is the biggest cash flow risk in agency billing. Shorter terms for media, such as due on receipt, combined with standard terms for fees, keep the gap manageable. Whatever you agree, put the terms on every invoice, not just in the contract, so the client's accounts payable team sees them at approval time.</p>

<h2>What to include: marketing agency invoice checklist</h2>
<ul>
<li>Agency legal name, address, email and tax ID or VAT number where required.</li>
<li>Client legal name, billing contact, and PO number if they use purchase orders.</li>
<li>Unique invoice number in sequence.</li>
<li>Invoice date, due date and payment terms, such as Net 15.</li>
<li>Billing period for the retainer (usually in advance) and for media and fees (usually in arrears).</li>
<li>Retainer line with a short scope description and hours included.</li>
<li>One line per ad platform with exact spend from the platform's records.</li>
<li>Management fee line showing the percentage and the spend base.</li>
<li>Third-party costs with original cost and markup shown.</li>
<li>Out-of-scope work with hours, rate and approval reference.</li>
<li>Tax where applicable, deposits received and the balance due.</li>
<li>Payment methods; if you accept cards, our guide on <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> covers fees and setup.</li>
</ul>

<h2>Common mistakes on agency invoices</h2>
<ul>
<li><strong>Lumping media and fees together.</strong> "October services: $22,400" forces the client to ask how much was spend and how much was fee. Separate them.</li>
<li><strong>Hiding the management fee base.</strong> A fee without its percentage and base looks arbitrary, even when it is correct.</li>
<li><strong>Fronting large ad spend without a deposit.</strong> One slow-paying client can drain the agency's cash. Require prepayment or put the client's card on the ad account.</li>
<li><strong>Billing estimated spend as actual.</strong> Platforms adjust charges for invalid clicks and credits. Bill from final platform figures and reconcile deposits every month.</li>
<li><strong>Undisclosed markups.</strong> If the contract says "at cost," bill at cost. Put any handling fee on its own line.</li>
<li><strong>Unapproved extras.</strong> Out-of-scope lines without an approval reference are the first to be disputed.</li>
<li><strong>Inconsistent invoice dates.</strong> Billing on random dates makes it harder for clients to plan approvals and for you to forecast cash.</li>
</ul>

<h2>How related creative services fit in</h2>
<p>Many agencies also do design, development and consulting work that bills differently from media management. For project-based creative, see our <a href="/blog/graphic-design-invoice-template">graphic design invoice template</a>; for site builds, the <a href="/blog/web-development-invoice-template">web development invoice template</a> covers milestones and hosting; and for strategy-only engagements, the <a href="/blog/consulting-invoice-template">consulting invoice template</a> is a closer fit. You can put these on the same monthly invoice as separate sections, or bill them separately if the client codes them to different budgets.</p>
<p>The common thread is transparency. A marketing agency invoice that shows the retainer, each platform's spend, the fee math and every extra in plain language gets approved faster, survives client audits and makes renewals easier, because the client can see exactly what they paid for.</p>
`,
  },
  {
    slug: "ecommerce-invoice-shopify-woocommerce",
    title: "Ecommerce Invoices: Shopify, WooCommerce & Amazon Guide",
    description:
      "Learn when an ecommerce invoice is needed for Shopify, WooCommerce and Amazon orders, what it must show, and how to handle sales tax, VAT and refunds.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "cash-on-delivery-invoicing",
      "cost-of-goods-sold",
      "invoice-vs-receipt",
      "credit-note-guide",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "Do I need to send an invoice for every online order?",
        a: "Not always. For consumer orders in the US, an order confirmation or receipt is usually enough, and invoices are typically issued only when a customer asks. Business buyers, however, often need a proper invoice to claim expenses or recover tax. In many VAT countries, B2B sales require a VAT invoice and some countries require invoices for consumer sales too. Check the rules for each country you sell into.",
      },
      {
        q: "What is the difference between an order confirmation and an invoice?",
        a: "An order confirmation acknowledges that the customer placed an order and often shows what they paid. An invoice is a formal billing document with a unique invoice number, the seller's legal and tax details, and the tax breakdown required by law. For a prepaid online order, the document the buyer keeps may function as a receipt, but business buyers usually need a document that meets invoice requirements.",
      },
      {
        q: "Does Shopify or WooCommerce create invoices automatically?",
        a: "Both platforms send order notifications, and both have extensions or apps that generate PDF invoices, but what is included by default varies by plan, version and settings. Check whether the documents you send carry a unique sequential invoice number, your tax ID and the tax breakdown your customers need. If they do not, add an invoicing app or plugin, or create invoices manually for the orders that need them.",
      },
      {
        q: "Who collects sales tax on Amazon and other marketplace sales?",
        a: "In the US, every state with a statewide sales tax now has a marketplace facilitator law, so large marketplaces generally collect and remit sales tax on third-party sellers' sales into those states. You remain responsible for sales through your own Shopify or WooCommerce store. Facilitator rules differ in details, so confirm your registration and filing obligations with each state or a tax professional.",
      },
      {
        q: "How should I number ecommerce invoices?",
        a: "Use a unique, sequential series with no gaps that you can explain. Many stores use the order number as the invoice reference, but order numbers can include cancelled or test orders. A separate invoice series, such as INV-2026-00001, avoids gaps and makes audits easier. If you sell on several channels, use a prefix per channel so numbers never collide.",
      },
      {
        q: "How do I handle refunds on an ecommerce invoice?",
        a: "Do not edit or delete the original invoice. Issue a credit note that references the original invoice number and shows the refunded items, quantities, tax and total. For partial refunds, credit only the affected lines. Your sales and tax reports then show the original sale and the reduction separately, which is what tax authorities and accountants expect.",
      },
      {
        q: "What does a B2B ecommerce invoice need that a B2C receipt does not?",
        a: "Business buyers usually need the seller's full legal name and address, the buyer's company name and address, a unique invoice number, the date of supply, a line-by-line breakdown, the tax rate and amount per line, and the seller's tax registration number. In the EU and UK, the buyer's VAT number is required for reverse-charge sales. Many B2B buyers also want their PO number on the invoice.",
      },
      {
        q: "Can I use a free invoice generator for my online store?",
        a: "Yes, for orders that need a manual invoice, such as a wholesale order, a B2B customer request or a corrected invoice. Enter the order lines, tax and amount paid, then download the PDF and send it yourself. A free generator does not connect to your store or import orders, so it suits low volumes; for hundreds of orders a day, use an invoicing app or plugin.",
      },
      {
        q: "Do I need a commercial invoice for international ecommerce orders?",
        a: "Usually yes, for physical goods crossing borders. Customs authorities require a commercial invoice or customs declaration showing the goods, their value, origin and harmonized codes. This is separate from the sales invoice or receipt you give the customer. Shipping platforms and carriers often generate customs documents, but you are responsible for the accuracy of the values and descriptions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An ecommerce invoice is a formal billing document for an online order, with a unique invoice number, seller and buyer details, line items, tax breakdown and payment status. Consumer orders often only need a receipt, but business buyers, VAT countries and wholesale orders usually need a proper invoice, whether you sell on Shopify, WooCommerce or Amazon.</p>

<p>Online sellers send a lot of documents: order confirmations, shipping notifications, packing slips, receipts and sometimes invoices. Many store owners assume the order confirmation email is an invoice. Sometimes it is close enough; often it is not. The gap usually shows up when a business customer asks for a "proper invoice" for their accounts, a tax authority asks for invoice records, or an accountant tries to match refunds to original sales.</p>

<p>This guide explains when you need an ecommerce invoice, how B2B and B2C requirements differ, how sales tax, VAT and marketplace facilitator rules affect what you put on the invoice, how to number invoices and handle refunds, and when to use an app versus making invoices manually. For one-off invoices, such as a wholesale order or a customer request, you can use our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Ecommerce invoice vs order confirmation vs receipt</h2>
<p>These three documents overlap, which is why they get confused.</p>
<table><thead><tr><th>Document</th><th>Purpose</th><th>Typical ecommerce use</th></tr></thead><tbody>
<tr><td>Order confirmation</td><td>Confirms the order was received</td><td>Sent automatically at checkout</td></tr>
<tr><td>Receipt</td><td>Proves payment was made</td><td>Prepaid consumer orders; often combined with the confirmation</td></tr>
<tr><td>Invoice</td><td>Formal bill with legal and tax details</td><td>B2B orders, VAT countries, wholesale, on-account terms, customer requests</td></tr>
<tr><td>Packing slip</td><td>Lists contents of a shipment, usually without prices</td><td>Placed in the box for picking and checking</td></tr>
<tr><td>Commercial invoice</td><td>Customs document for cross-border shipments</td><td>International orders of physical goods</td></tr>
</tbody></table>
<p>Because most online orders are paid at checkout, the invoice for an ecommerce sale is often marked "Paid" with a zero balance, which makes it look like a receipt. That is fine. What makes it an invoice is the content: a unique invoice number, your legal and tax details, the date of supply and a proper tax breakdown. Our guide on <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> explains the distinction in more depth; a packing slip, by contrast, lists what goes in the box and usually leaves prices off.</p>

<h2>B2C vs B2B ecommerce invoices</h2>
<h3>Consumer (B2C) orders</h3>
<p>In the US, consumer sales generally do not require a formal invoice; an emailed receipt showing items, price, tax and payment is normal. In the EU, UK and many other VAT countries, rules are different: some countries require an invoice or simplified invoice for certain consumer sales, and customers can usually request one. If you sell internationally, do not assume US norms apply everywhere.</p>

<h3>Business (B2B) orders</h3>
<p>Business customers buying through your store, and wholesale buyers ordering by email, usually need a full invoice. They use it to record the expense and, in VAT and GST countries, to reclaim input tax. A B2B ecommerce invoice typically needs:</p>
<ul>
<li>Your full legal business name and address, and your tax registration number where you are registered.</li>
<li>The buyer's company name and address, and their VAT number for cross-border reverse-charge sales in the EU or UK.</li>
<li>Their PO number if they issued one.</li>
<li>Payment terms if you are offering credit, such as Net 30 for wholesale accounts.</li>
</ul>
<p>Retailers buying for resale in the US will often give you a resale certificate so you do not charge sales tax. Keep the certificate on file and note the exemption on the invoice.</p>

<h2>Sales tax, VAT and marketplace facilitator rules</h2>
<p>Tax is where an ecommerce invoice has to be most precise, and the rules depend on where your customer is, what you sell and which channel the sale goes through.</p>

<h3>US sales tax on your own store</h3>
<p>When you sell through your own Shopify or WooCommerce store, you are the seller responsible for collecting sales tax in states where you have nexus, which after the 2018 Wayfair decision can include economic nexus from sales volume alone. Your invoice or receipt should show the sales tax charged, ideally by rate or jurisdiction. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers what to show, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check amounts for manual invoices. The <a href="https://www.streamlinedsalestax.org/" target="_blank" rel="noopener noreferrer">Streamlined Sales Tax Governing Board</a> publishes resources for the states in its agreement.</p>

<h3>Marketplace facilitator laws</h3>
<p>Every US state with a statewide sales tax, plus Washington, DC, has adopted a marketplace facilitator law; Missouri was the last, with its law taking effect on January 1, 2023. Under these laws, a marketplace that facilitates third-party sales, such as Amazon, Etsy, eBay or Walmart Marketplace, is generally responsible for collecting and remitting sales tax on those sales. As a marketplace seller, that usually means:</p>
<ul>
<li>The marketplace calculates and collects tax at checkout on your marketplace orders.</li>
<li>You should not add sales tax yourself to an invoice for a marketplace order that the marketplace already taxed.</li>
<li>You may still need to register or file in some states, and sales through your own website are not covered by the marketplace's collection.</li>
</ul>
<p>Rules differ in detail from state to state, so confirm your obligations with each state's revenue department or a tax professional.</p>

<h3>VAT and cross-border sales</h3>
<p>If you sell to consumers in the EU, the 2021 e-commerce VAT package changed the rules: VAT is generally charged at the rate of the customer's country once you pass the EU-wide distance-selling threshold, and the One Stop Shop lets sellers report those sales through one return. Marketplaces can be treated as the "deemed supplier" for certain sales, including imported consignments up to EUR 150 and sales by non-EU sellers of goods already in the EU. The European Commission's <a href="https://vat-one-stop-shop.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer">VAT One Stop Shop portal</a> explains the schemes. For what a compliant VAT invoice must show, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>Shopify, WooCommerce and Amazon: how invoicing usually works</h2>
<p>Platform features change often and vary by plan, region and installed extensions, so treat this as a general orientation and check your own setup.</p>
<ul>
<li><strong>Shopify:</strong> stores send order confirmation emails that you can customize, and many merchants add an invoicing app from the app store to produce PDF invoices with sequential numbers and tax details. If you sell B2B, check whether your plan and apps support company accounts, payment terms and tax-exempt customers.</li>
<li><strong>WooCommerce:</strong> as an open-source WordPress plugin, it sends order emails out of the box, and PDF invoice generation is typically added through an extension or plugin. Because you control the code and database, you are also responsible for backups and keeping invoice numbering intact through migrations.</li>
<li><strong>Amazon:</strong> invoicing requirements and options depend on the marketplace country and seller programs. Business buyers frequently request invoices, and in some regions sellers are expected to provide them. Check Seller Central help for your marketplace for the current rules on who issues the invoice and how.</li>
</ul>

<h3>Apps vs manual invoices</h3>
<p>If most of your orders need invoices, automate with an app or plugin connected to your store. If invoices are occasional, such as a handful of wholesale orders or customer requests each month, creating them manually is simpler and cheaper. Our generator builds a PDF in your browser from the details you enter; it does not connect to your store or import orders, so it fits the occasional-invoice case.</p>

<h2>Sample ecommerce invoice for a wholesale order</h2>
<p>A boutique retailer orders stock from a ceramics brand that sells through its own Shopify store and directly to wholesale accounts. The retailer has provided a resale certificate and receives a 5% trade discount on goods.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Stoneware mug, speckled white, 12 oz (SKU MUG-12-WHT)</td><td>24</td><td>$9.50</td><td>$228.00</td></tr>
<tr><td>Teapot, matte black, 1 L (SKU TPT-1L-BLK)</td><td>12</td><td>$28.00</td><td>$336.00</td></tr>
<tr><td>Freight shipping, 2 cartons</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$599.00</strong></td></tr>
<tr><td colspan="3">Trade discount, 5% of goods ($564.00)</td><td>-$28.20</td></tr>
<tr><td colspan="3">Sales tax: exempt, resale certificate on file</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due (Net 30)</strong></td><td><strong>$570.80</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Mugs: 24 x $9.50 = $228.00.</li>
<li>Teapots: 12 x $28.00 = $336.00.</li>
<li>Goods total: $228.00 + $336.00 = $564.00.</li>
<li>Subtotal including shipping: $564.00 + $35.00 = $599.00.</li>
<li>Trade discount: $564.00 x 5% = $28.20.</li>
<li>Total: $599.00 - $28.20 = $570.80.</li>
</ul>
<p>The discount applies to goods only, not shipping, so the description names its base. SKUs make it easy for the retailer to match the invoice against the delivery. If this were a taxable consumer sale, you would add a sales tax line on the taxable amount, and whether shipping is taxable depends on the state. For a simple product invoice layout, the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps SKUs and quantities easy to scan.</p>

<h2>Invoice numbering for online stores</h2>
<p>Order numbers and invoice numbers are not always the same thing. Order numbers can include abandoned, cancelled or test orders, which leaves gaps. Tax authorities in many countries expect invoice numbers to be unique and sequential, and gaps you cannot explain raise questions in an audit.</p>
<ul>
<li>Keep a separate invoice series, such as INV-2026-00001, and assign a number only when an invoice is actually issued.</li>
<li>Use a prefix per channel, such as WEB-, AMZ- and WHL-, if you invoice several channels from different systems.</li>
<li>Never reuse numbers, even for cancelled invoices; cancel with a credit note instead.</li>
</ul>
<p>Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> covers formats in detail.</p>

<h2>Refunds, returns and credit notes</h2>
<p>Ecommerce has a high return rate compared with many other businesses, which makes refund handling a core part of invoicing. When you refund an order that was invoiced, do not edit or delete the original invoice. Issue a credit note that references the original invoice number and shows the returned items, quantities, the tax being reversed and the refund total. For partial refunds, credit only the affected lines.</p>
<p>Credit notes keep your sales tax and VAT reports correct, because the original sale and the reduction are both recorded. Our <a href="/blog/credit-note-guide">credit note guide</a> walks through the layout. For marketplace orders, the marketplace typically processes the refund and adjusts the tax it collected, but keep your own records aligned.</p>

<h2>What to include on an ecommerce invoice</h2>
<ul>
<li>Your legal business name, address and contact details.</li>
<li>Your sales tax, VAT or GST registration number where registered.</li>
<li>Customer name and billing address; company name and VAT number for B2B.</li>
<li>Shipping address if different from billing.</li>
<li>Unique sequential invoice number, plus the order number for reference.</li>
<li>Invoice date and date of supply or shipment.</li>
<li>Each product with SKU, quantity, unit price and line total.</li>
<li>Shipping, discounts and gift cards as separate lines.</li>
<li>Tax rate and amount, or the exemption or reverse-charge reason.</li>
<li>Amount paid, payment method and balance due.</li>
<li>Return policy or a link to it, and payment terms for wholesale accounts.</li>
</ul>
<p>For international shipments of physical goods, prepare a separate <a href="/blog/commercial-invoice-template">commercial invoice</a> for customs as well.</p>

<h2>Common ecommerce invoicing mistakes</h2>
<ul>
<li><strong>Treating the order email as a tax invoice.</strong> It often lacks a sequential invoice number, a tax ID or a proper tax breakdown.</li>
<li><strong>Charging sales tax twice on marketplace orders.</strong> If the marketplace collected tax, do not add it again on an invoice you issue for that order.</li>
<li><strong>Editing invoices after a refund.</strong> Use a credit note so the audit trail stays intact.</li>
<li><strong>Gaps from cancelled orders.</strong> Assign invoice numbers only on issue, from a dedicated series.</li>
<li><strong>Missing B2B details.</strong> A business buyer cannot reclaim VAT without your VAT number and their own on reverse-charge invoices.</li>
<li><strong>Ignoring exemption paperwork.</strong> A tax-exempt wholesale invoice without a valid resale certificate on file can leave you liable for the tax.</li>
<li><strong>Assuming one country's rules apply everywhere.</strong> Cross-border sales bring different VAT, GST and invoice requirements.</li>
</ul>
<p>Get these basics right and your ecommerce invoices will satisfy business customers, accountants and tax authorities alike, whichever platform your store runs on. For more trade-specific billing guides, browse the <a href="/blog/category/industry-invoices">industry invoices</a> section.</p>
`,
  },
];
