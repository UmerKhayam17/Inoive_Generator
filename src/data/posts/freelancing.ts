import type { PostDraft } from "../blog";

export const FREELANCING_POSTS: PostDraft[] = [
  {
    slug: "how-to-set-freelance-rates",
    title: "How to Set Freelance Rates in 2026: A Practical Formula",
    description:
      "Learn how to set freelance rates with a simple formula: cover costs, taxes and non-billable time, then choose hourly, day, project or retainer pricing.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "salary-increase-percentage",
      "freelancer-invoice-guide",
      "how-to-invoice-for-hourly-work",
      "retainer-invoice",
    ],
    faqs: [
      {
        q: "How do I calculate my freelance hourly rate?",
        a: "Add the income you want to take home, your annual business costs and an allowance for taxes, then divide by the number of hours you can realistically bill in a year. Most freelancers bill far fewer hours than they work, so use a conservative number such as 1,000 to 1,300 billable hours.",
      },
      {
        q: "Should beginners charge less as freelancers?",
        a: "Charging slightly below the market while you build a portfolio is common, but never price below your break-even rate. Very low rates attract price-sensitive clients and are hard to raise later.",
      },
      {
        q: "Is it better to charge hourly or per project?",
        a: "Hourly pricing protects you when scope is unclear; project pricing rewards you for working efficiently and is easier for clients to budget. Many freelancers quote projects but calculate them from an internal hourly rate.",
      },
      {
        q: "How often should I raise my freelance rates?",
        a: "Review your rates at least once a year and whenever you are consistently fully booked. Give existing clients written notice, often 30 to 60 days, before a new rate applies.",
      },
      {
        q: "Should I publish my rates on my website?",
        a: "It depends on your market. Publishing a starting price filters out clients who cannot afford you, while keeping prices private lets you quote each project on its scope.",
      },
      {
        q: "How do I convert my hourly rate into a day rate?",
        a: "Multiply your hourly rate by the hours in your working day, usually 7 to 8. At $75 an hour, a 7.5-hour day is $562.50, which you might round to $560 or $575. Some freelancers offer a small discount for booking full days because it guarantees the time. State in writing how many hours a day covers and how extra hours are billed.",
      },
      {
        q: "Should I charge international clients a different rate?",
        a: "You can, but your minimum rate should still come from your own costs and income target. Clients in higher-cost markets often budget more, so charging their local market rate can be reasonable. Quote in a clear currency, decide who pays transfer and conversion fees, and factor in exchange rate swings. Your invoice should show the agreed currency code, such as USD or EUR, to avoid confusion.",
      },
      {
        q: "What is value-based pricing for freelancers?",
        a: "Value-based pricing sets your fee from what the work is worth to the client, rather than the hours it takes. If a new checkout flow could add significant revenue, a fee tied to that outcome can be well above your hourly figure. It works best when you can estimate the client's gain and have proof of results. Keep your hourly rate as an internal floor so you never quote below it.",
      },
      {
        q: "Should I charge for meetings, calls and revisions?",
        a: "Build them into your price one way or another. On hourly work, meetings and calls are normally billable time. On fixed-price work, include an allowance for a set number of calls and revision rounds, then charge for anything beyond it at your hourly rate. Short introductory sales calls are usually free. Write the rules into your quote so extra time is not a surprise.",
      },
      {
        q: "What should I say when a client says my rate is too high?",
        a: "Stay calm and reduce scope rather than your rate. Ask what budget they have, then offer a version of the project that fits it, such as fewer pages, fewer revision rounds or a longer timeline. Explain briefly what your price includes and the results you deliver. If the budget is far below your minimum rate, it is usually better to decline politely than to work at a loss.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To set freelance rates, work out how much revenue you need in a year (your target take-home pay plus business costs plus a tax allowance), then divide it by the hours you can realistically bill. That gives you a minimum hourly rate. Adjust it up or down for your market, experience and the value of the work, and then decide whether to present it as an hourly, day, project or retainer price.</p>

<p>This guide walks through the rate formula step by step with a worked example, compares pricing models, and shows how your rate should appear on an invoice. When you are ready to bill, our <a href="/invoice-generator">free invoice generator</a> turns your rate into a clean PDF invoice in a few minutes.</p>

<h2>Why most freelancers set rates too low</h2>
<p>The most common mistake is to take a previous salary, divide it by 2,080 working hours, and call that an hourly rate. A salaried employee is paid for holidays, sick days, training and admin. An employer also covers equipment, software, payroll taxes and often benefits. As a freelancer you pay for all of that yourself, and you only earn money in the hours a client is paying for.</p>
<p>The other trap is anchoring to what other people on marketplaces charge. Those rates are often set by people in very different cost-of-living situations or who treat freelancing as a side income. Market rates matter, but your floor should come from your own numbers.</p>

<h2>How to set freelance rates: the formula</h2>
<p>The most reliable way to set freelance rates is to start from what you need to earn, not from what you guess clients will pay:</p>
<p><code>Minimum hourly rate = (target income + annual business costs + tax allowance) / billable hours per year</code></p>
<p>Each part is worth working out carefully:</p>
<ul>
<li><strong>Target income:</strong> what you want to pay yourself before personal income tax, including the money you would want for savings or retirement.</li>
<li><strong>Business costs:</strong> software subscriptions, equipment, insurance, accounting fees, a coworking desk, professional memberships, marketing and training.</li>
<li><strong>Tax allowance:</strong> self-employed people usually pay taxes an employer would otherwise share. In the US, for example, self-employment tax for Social Security and Medicare is generally 15.3% on net earnings up to the annual wage base, on top of income tax. Check the rules where you live with a tax professional, and see our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> for costs that may reduce your bill.</li>
<li><strong>Billable hours:</strong> the hours you can actually charge for, after holidays, sick days, sales calls, admin, invoicing and quiet weeks.</li>
</ul>

<h2>Worked example: setting a freelance hourly rate</h2>
<p>Here is how the formula works for a freelance designer. The numbers are illustrative, so swap in your own.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Target income (before personal tax)</td><td>$65,000</td></tr>
<tr><td>Annual business costs</td><td>$7,000</td></tr>
<tr><td>Tax and benefits allowance</td><td>$18,000</td></tr>
<tr><td><strong>Revenue needed</strong></td><td><strong>$90,000</strong></td></tr>
<tr><td>Working weeks (52 minus 4 weeks off)</td><td>48</td></tr>
<tr><td>Billable hours per week</td><td>25</td></tr>
<tr><td><strong>Billable hours per year (48 x 25)</strong></td><td><strong>1,200</strong></td></tr>
<tr><td><strong>Minimum hourly rate ($90,000 / 1,200)</strong></td><td><strong>$75</strong></td></tr>
</tbody></table>
<p>Notice that 25 billable hours a week is not a pessimistic figure. Even busy freelancers spend a large share of their week on proposals, email, bookkeeping and learning. If you only manage 20 billable hours, the same revenue target needs $93.75 an hour ($90,000 / 960).</p>
<p>That $75 is a <em>floor</em>, not a target. If you charge less, you are working at a loss compared with your goals. Most freelancers then add a margin for risk, late payers and gaps between projects.</p>

<h2>Adjust your rate for the market and your value</h2>
<p>Once you know your floor, check it against reality. Good freelancers set rates with both numbers in view. Look at what established freelancers in your niche and region charge, what agencies charge for similar work, and what clients in your target industry typically budget. Then adjust for:</p>
<ul>
<li><strong>Specialisation:</strong> a developer who only builds checkout flows for online stores can charge more than a generalist, because the client sees less risk.</li>
<li><strong>Experience and proof:</strong> case studies, testimonials and measurable results justify higher prices.</li>
<li><strong>Client type:</strong> enterprise clients often expect higher rates, longer payment terms and more paperwork such as purchase orders.</li>
<li><strong>Urgency:</strong> rush work, weekend delivery or very short deadlines can reasonably carry a premium of 25% to 50%.</li>
<li><strong>Value created:</strong> if a sales page could bring a client tens of thousands of dollars, a price based on hours alone may undersell the work.</li>
</ul>

<h2>Hourly, day rate, project or retainer: which pricing model?</h2>
<p>The same underlying rate can be packaged in different ways. Choose the model that fits the work and the client.</p>
<table><thead><tr><th>Pricing model</th><th>How it works</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Bill each tracked hour at your rate</td><td>Unclear scope, ongoing support, edits</td><td>Clients may watch the clock; efficiency lowers income</td></tr>
<tr><td>Day rate</td><td>Fixed price per full day (often 7 to 8 hours)</td><td>On-site work, workshops, shoots</td><td>Define what a "day" includes</td></tr>
<tr><td>Fixed project</td><td>One price for an agreed scope</td><td>Well-defined deliverables</td><td>Scope creep; price changes need written approval</td></tr>
<tr><td>Milestones</td><td>Project price split into staged payments</td><td>Larger projects over several weeks</td><td>Agree what "complete" means for each stage</td></tr>
<tr><td>Retainer</td><td>Recurring fee for reserved time or ongoing access</td><td>Long-term clients with steady needs</td><td>Unused-hours policy must be clear</td></tr>
</tbody></table>
<p>If you bill by the hour, our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers timesheets and rounding. For larger fixed-price jobs, see <a href="/blog/milestone-payments">milestone payments</a>, and for ongoing arrangements read our explainer on the <a href="/blog/retainer-invoice">retainer invoice</a>.</p>

<h2>How to turn an hourly rate into a project price</h2>
<p>Clients usually prefer a single number. To build a fixed price from your hourly rate:</p>
<ol>
<li>Break the project into tasks and estimate the hours for each one.</li>
<li>Add time for meetings, feedback rounds and project management, typically 10% to 20%.</li>
<li>Multiply the total hours by your rate.</li>
<li>Add a contingency buffer for unknowns, often 10% to 15% on unfamiliar work.</li>
<li>Round to a clean figure and state exactly what is included, including the number of revision rounds.</li>
</ol>
<p>Example: a website copy project estimated at 22 hours, plus 3 hours of calls and admin, is 25 hours. At $75 an hour that is $1,875. A 10% contingency adds $187.50, giving $2,062.50, which you might quote as $2,050 or $2,100. Write the scope and the price into your agreement; our <a href="/blog/freelance-contract-template">freelance contract template</a> guide lists the clauses that protect a fixed fee.</p>

<h2>Show your rate clearly on the invoice</h2>
<p>Your rate is only useful if the client can see how the total was reached. On every invoice:</p>
<ul>
<li>Use one line per service with a quantity, a unit (hours, days, pages) and a rate.</li>
<li>Show rush or weekend premiums as their own line rather than hiding them in the rate.</li>
<li>List any agreed discount separately so the client sees your full rate.</li>
<li>Repeat the payment terms and due date you agreed in writing; our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains Net 14, Net 30 and the alternatives.</li>
</ul>
<p>A sample line set for the example above might look like this:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Website copywriting: 5 pages, 2 revision rounds</td><td>1</td><td>$2,050.00</td><td>$2,050.00</td></tr>
<tr><td>Additional revision round (requested 14 Oct)</td><td>3 hrs</td><td>$75.00</td><td>$225.00</td></tr>
<tr><td><strong>Total due</strong></td><td></td><td></td><td><strong>$2,275.00</strong></td></tr>
</tbody></table>
<p>For a layout built around freelance work, see our <a href="/blog/freelance-invoice-template">freelance invoice template</a> guide, or start from the clean <a href="/invoice-templates/minimal">Minimal invoice template</a>.</p>

<h2>How and when to raise your freelance rates</h2>
<p>Rates that were right two years ago are probably too low now. Signs it is time to raise them: you are booked out for weeks, clients accept your quotes instantly without negotiating, or your costs have risen. A sensible process:</p>
<ol>
<li>Apply the new rate to new clients first, immediately.</li>
<li>Give existing clients written notice, typically 30 to 60 days, with the new rate and the date it takes effect.</li>
<li>Explain briefly what has changed (more experience, broader services, rising costs) without over-apologising.</li>
<li>Honour any fixed quotes or contracts already signed at the old rate.</li>
</ol>
<p>Rate increases of 5% to 15% a year are easy for most clients to absorb. Bigger jumps are usually better handled by repositioning your services or moving to project or value-based pricing. For the wider invoicing habits that protect your income (deposits, terms and follow-ups), read <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a>.</p>

<p>If you resell materials or subcontract work, learn the difference between <a href="/blog/markup-vs-margin">markup vs margin</a> so your percentages mean what you think they mean.</p>

<h2>Bill your new rate with a professional invoice</h2>
<p>Once your rate is set, make sure every invoice reflects it accurately and professionally. Open the <a href="/invoice-generator">invoice generator</a>, add your services with quantities and rates, and download a PDF ready to send. Choose a template that matches your brand, such as the <a href="/invoice-templates/modern">Modern invoice template</a>, set a real due date, and get paid for the value you deliver. Revisit the numbers each year, because knowing how to set freelance rates is a skill you will use for your whole career.</p>
`,
  },
  {
    slug: "freelance-contract-template",
    title: "Freelance Contract Template: 14 Clauses to Include in 2026",
    description:
      "Use this freelance contract template checklist: the 14 clauses on scope, payment, revisions, IP and termination that protect freelancers and their invoices.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "freelance-proposal-template",
      "statement-of-work-template",
      "freelancer-invoice-guide",
      "milestone-payments",
      "client-not-paying-invoice",
    ],
    faqs: [
      {
        q: "Do freelancers really need a contract?",
        a: "Yes. A written agreement records the scope, price and payment terms both sides agreed, which makes disputes and unpaid invoices much easier to resolve. Even a short signed agreement is far better than a verbal deal.",
      },
      {
        q: "Is an email agreement a valid freelance contract?",
        a: "In many jurisdictions an exchange of emails that clearly shows an offer, acceptance and the key terms can form a binding agreement. A signed document is still clearer and easier to rely on, so ask a local lawyer if the amount at stake is significant.",
      },
      {
        q: "What payment terms should a freelance contract include?",
        a: "State the total fee or rate, any deposit, the payment schedule, the invoice due period such as Net 14, accepted payment methods and any late-payment fee. Match these terms exactly on every invoice you send.",
      },
      {
        q: "Who owns the work under a freelance contract?",
        a: "That depends on the contract and on local law. Many freelance agreements transfer ownership or grant a licence to the client only after full payment, but the wording matters, so have intellectual property clauses reviewed by a professional.",
      },
      {
        q: "Can I use a free freelance contract template?",
        a: "A template is a useful starting point and checklist, but it should be adapted to your services, your client and your jurisdiction. For high-value or complex work, have a lawyer review the final version.",
      },
      {
        q: "Can I sign a freelance contract electronically?",
        a: "In most countries, yes. In the US, the federal ESIGN Act and state laws based on the UETA generally give electronic signatures the same effect as handwritten ones, and the UK and EU also recognize electronic signatures for most commercial contracts. A typed name, a drawn signature or an e-signature service usually works. A few document types have special rules, so check if your agreement is unusual.",
      },
      {
        q: "What is the difference between a master services agreement and a statement of work?",
        a: "A master services agreement (MSA) sets the general terms for your whole relationship with a client, such as payment terms, intellectual property, confidentiality and liability. A statement of work (SOW) covers one specific project: its scope, deliverables, timeline and fee. With an MSA in place, each new project only needs a short SOW, which saves you renegotiating the legal terms every time.",
      },
      {
        q: "Should a freelance contract include a non-compete clause?",
        a: "Be careful about agreeing to one. A broad non-compete can stop you working for other clients in your field, which is a serious risk for a freelancer. Enforceability varies widely: California, for example, generally voids non-compete clauses, while other places allow limited ones. A narrower non-solicitation or confidentiality clause usually protects the client well enough. Get legal advice before signing a restrictive clause.",
      },
      {
        q: "Do I need a limitation of liability clause?",
        a: "It is strongly recommended. A limitation of liability clause caps what you could owe if something goes wrong, often at the fees paid under the contract, and usually excludes indirect losses such as lost profits. Without one, a client could in theory claim losses far larger than your fee. Some liabilities cannot be limited by law, so have a lawyer check the wording for your jurisdiction.",
      },
      {
        q: "What if I start work before the contract is signed?",
        a: "You take on more risk, because there is less clear evidence of what was agreed. If you must start early, at least get the scope, price and payment terms confirmed in a written email reply, and ideally take a deposit first. Note in the signed contract that it covers work already done from the start date. Avoid delivering final files until the agreement is in place.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A freelance contract template should cover who the parties are, the exact scope of work, deliverables and deadlines, the fee and payment schedule, invoice terms, revisions, change requests, intellectual property, confidentiality, termination and how disputes are handled. A clear contract makes your invoices easier to approve and gives you something concrete to point to if a client pays late.</p>

<p>This article explains the 14 clauses most freelance agreements include, gives sample wording you can adapt, and shows how the contract connects to the invoices you send from our <a href="/invoice-generator">free invoice generator</a>. <strong>This is general information, not legal advice.</strong> Contract law varies by country and state, so have a qualified lawyer review your agreement before you rely on it, especially for large projects.</p>

<h2>Why a freelance contract protects your invoices</h2>
<p>Most payment problems start long before the invoice is sent. A client who disputes a bill is usually disputing what was agreed: the scope, the number of revisions, the deadline or the price. When those points are written down and signed, an invoice simply applies terms both sides already accepted.</p>
<p>A contract also answers practical billing questions in advance: which legal entity you are invoicing, whether a purchase order is required, how much the deposit is, and when each payment falls due. Settling those details up front removes the most common reasons an invoice is sent back.</p>
<p>Finally, a contract sets expectations on both sides. Clients who have signed an agreement that says invoices are due in 14 days, and that work pauses when payments are overdue, are far less likely to treat your invoice as optional. It also shows you run a professional business, which tends to attract clients who behave professionally in return.</p>

<h2>The freelance contract template: 14 clauses to include</h2>
<p>Use this list as a checklist when you draft or review an agreement.</p>
<ol>
<li><strong>Parties:</strong> your legal or trading name and the client's full legal entity name, addresses and contact details.</li>
<li><strong>Scope of work:</strong> what you will do, described specifically enough that a stranger could tell whether it was done.</li>
<li><strong>Deliverables:</strong> the files, formats, pages or features the client receives.</li>
<li><strong>Exclusions:</strong> what is not included, such as stock images, hosting, printing or copy.</li>
<li><strong>Timeline:</strong> start date, milestone dates and the final delivery date, plus what happens if the client delays feedback.</li>
<li><strong>Fees:</strong> the fixed price, hourly or day rate, or retainer amount, and the currency.</li>
<li><strong>Payment schedule:</strong> deposit, milestone payments and final payment.</li>
<li><strong>Invoice and payment terms:</strong> due period, accepted payment methods, who pays transfer fees, and late-payment charges.</li>
<li><strong>Expenses:</strong> which costs are billed on top and whether they need approval first.</li>
<li><strong>Revisions and change requests:</strong> how many revision rounds are included and how extra work is quoted and approved.</li>
<li><strong>Intellectual property:</strong> who owns the final work, when ownership or a licence transfers, and your right to show the work in a portfolio.</li>
<li><strong>Confidentiality:</strong> how each side treats the other's private information.</li>
<li><strong>Termination:</strong> how either side can end the agreement, the notice required and what is payable for work already done.</li>
<li><strong>Disputes and governing law:</strong> how disagreements are handled and which jurisdiction's law applies.</li>
</ol>

<h2>Scope, deliverables and change requests</h2>
<p>Scope is the clause that does the most work. Vague scope ("website design") invites endless additions. Specific scope ("design of a five-page marketing website: home, about, services, pricing and contact; desktop and mobile layouts; two rounds of revisions per page") lets you say yes to extra requests while charging for them.</p>
<p>Sample wording you can adapt:</p>
<blockquote>Any work outside the scope described in Schedule A will be quoted separately in writing. Additional work starts only after the client approves the quote by email.</blockquote>
<p>When a change request is approved, add it to the next invoice as its own line, for example "Change request CR-03: additional landing page, approved 12 October 2026". The reference makes the line easy for the client to check.</p>

<h2>Payment terms clauses that get you paid</h2>
<p>Your payment clauses should match what appears on your invoices word for word. Ambiguity here is expensive. Common choices are summarised below.</p>
<table><thead><tr><th>Clause</th><th>Example wording</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Deposit</td><td>40% of the project fee is payable before work begins</td><td>Confirms commitment and funds early work</td></tr>
<tr><td>Schedule</td><td>30% on design approval, 30% on final delivery</td><td>Avoids financing weeks of unpaid work</td></tr>
<tr><td>Due period</td><td>Invoices are payable within 14 days of the invoice date</td><td>Gives each invoice a clear due date</td></tr>
<tr><td>Payment methods</td><td>Bank transfer or card via the payment link on the invoice</td><td>Removes "how do I pay?" delays</td></tr>
<tr><td>Late payment</td><td>Overdue amounts incur a fee of 1.5% per month, where permitted by law</td><td>Creates an incentive to pay on time</td></tr>
<tr><td>Work pause</td><td>Work may be paused while any invoice is more than 14 days overdue</td><td>Limits how much unpaid work you carry</td></tr>
</tbody></table>
<p>Late fees must be agreed in advance and must comply with local law, which sometimes caps interest or sets statutory rates. Our guide on <a href="/blog/late-payment-fees">how to charge late payment fees</a> covers this, and <a href="/blog/invoice-payment-terms">invoice payment terms explained</a> compares Net 7, Net 14, Net 30 and other options. For staged projects, see how to structure <a href="/blog/milestone-payments">milestone payments</a>, and for upfront payments read our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>.</p>

<h2>Intellectual property, confidentiality and portfolio rights</h2>
<p>Clients often assume they own everything you create the moment it exists. Many freelancers instead transfer ownership, or grant a licence, only once the final invoice is paid in full. That gives you real leverage if payment stalls. Whichever approach you choose, spell out:</p>
<ul>
<li>What transfers (final deliverables only, or also source files and drafts).</li>
<li>When it transfers (on signing, on delivery, or on full payment).</li>
<li>Any pre-existing tools, code libraries or templates you keep ownership of.</li>
<li>Whether you may display the work in your portfolio, and after what date.</li>
</ul>
<p>Intellectual property law differs between countries, and some rights cannot be transferred by a simple clause. This is an area where a lawyer's review is especially worthwhile.</p>

<h2>Termination and kill fees</h2>
<p>Projects get cancelled for reasons that have nothing to do with you. A termination clause makes sure you are paid for the work already done. Typical provisions include a notice period (for example 14 days), payment for all work completed up to the termination date, and a cancellation or "kill" fee, often expressed as a percentage of the remaining fee. If the client terminates, you invoice the amount due under the clause; if you do, you usually refund any prepaid amount for work not yet delivered.</p>

<h2>How the contract and the invoice work together</h2>
<p>Think of the contract as the rulebook and each invoice as a scorecard against it. A good workflow looks like this:</p>
<ol>
<li>Send a proposal or quote. Our guide to <a href="/blog/invoice-vs-quotation">invoices vs quotations</a> explains the difference.</li>
<li>Turn the accepted quote into a signed agreement using the clauses above.</li>
<li>Issue the deposit invoice and wait for it to clear.</li>
<li>Invoice each milestone as it is approved, quoting the contract reference.</li>
<li>Issue the final invoice on delivery and follow up on the due date.</li>
</ol>
<p>On every invoice, include the contract or project reference in the notes, for example "Per agreement FA-2026-014 dated 3 September 2026". That single line makes approval faster and gives you a clear paper trail. If you are an independent contractor billing US clients, our <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> guide covers the extra details clients expect.</p>

<h2>What to do if the client breaks the contract</h2>
<p>If a client misses a payment, start politely: send a reminder that quotes the payment clause and the invoice number. If that fails, escalate in steps: a firm reminder, a pause on further work if your contract allows it, a final notice and then a formal demand. Our step-by-step guide for when a <a href="/blog/client-not-paying-invoice">client is not paying an invoice</a> walks through each stage. Again, this is general information: if a substantial amount is at stake, take advice from a lawyer in your jurisdiction before taking formal action.</p>
<p>For the broader invoicing habits that sit alongside a good contract, read <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a>, and if you have not yet worked out what to charge, start with <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>

<h2>Create invoices that match your contract</h2>
<p>A strong freelance contract template is only half the system; the other half is invoices that reflect it exactly. Use the <a href="/invoice-generator">invoice generator</a> to add your contract reference, deposit or milestone lines and agreed due date, then download a PDF. The traditional <a href="/invoice-templates/classic">Classic invoice template</a> suits clients with formal procurement processes.</p>
`,
  },
  {
    slug: "retainer-invoice",
    title: "Retainer Invoice: What It Is, How to Bill It, With Examples",
    description:
      "Learn what a retainer invoice is, how to bill monthly retainers and prepaid hours, how to handle unused time, and see worked retainer invoice examples.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "marketing-agency-invoice-template",
      "recurring-invoices-guide",
      "deposit-invoice",
      "freelance-contract-template",
    ],
    faqs: [
      {
        q: "What is a retainer invoice?",
        a: "A retainer invoice bills a client in advance for reserved time, ongoing access to your services or a prepaid balance you will draw down against. It is usually issued at the start of each billing period, often monthly.",
      },
      {
        q: "Is a retainer invoice the same as a deposit invoice?",
        a: "Not quite. A deposit is a one-off upfront payment towards a specific project, while a retainer usually recurs and covers ongoing work or availability over time.",
      },
      {
        q: "What happens to unused retainer hours?",
        a: "That depends on your agreement. Common options are that unused hours expire, roll over for one month, or are credited against the next invoice. Put the rule in writing before the retainer starts.",
      },
      {
        q: "Should I charge tax on a retainer invoice?",
        a: "If you are registered for sales tax, VAT or GST and the service is taxable, tax is often due when the advance payment is received or invoiced, not when the work is done. Rules vary by country, so confirm the timing with your accountant.",
      },
      {
        q: "How do I record a retainer payment in my books?",
        a: "Under accrual accounting, a retainer for work not yet performed is typically recorded as unearned revenue and recognised as income as the work is delivered. Under cash accounting it is usually recorded when received. Ask your accountant which applies to you.",
      },
      {
        q: "How much should I charge for a monthly retainer?",
        a: "Start from the hours or deliverables the client needs each month and multiply by your rate. For example, 20 hours at $90 an hour is $1,800 a month. Many freelancers offer a modest discount on the rate in return for guaranteed monthly income, and charge a higher rate for overage. Review the figure every few months against the time you actually spend.",
      },
      {
        q: "Can a client cancel a retainer at any time?",
        a: "Only on the terms in your agreement. Most retainer agreements require written notice, commonly 30 days or one full billing period, and some set a minimum term such as three months. Say what happens to prepaid but unused time or balances when the arrangement ends, whether that is a refund, a credit or expiry. Without a notice clause, cancellations can leave you with an unexpected gap in income.",
      },
      {
        q: "Should I offer a retainer to a brand-new client?",
        a: "It is often better to start with a small fixed-price project first. That lets you both test the working relationship, response times and payment habits before committing to monthly fees. Once the trial goes well, propose a retainer based on the work you now know they need. If a new client asks for a retainer straight away, consider a shorter initial term with a review date.",
      },
      {
        q: "How do I raise the price of an existing retainer?",
        a: "Give written notice, often 30 to 60 days, before the new fee applies, and time the change for the renewal date or a quarterly review. Explain briefly what has changed, such as more scope or higher costs, and show the client their recent usage. Offer options, such as keeping the price with fewer hours. Update the agreement reference on the first invoice at the new rate.",
      },
      {
        q: "Can I set up automatic recurring retainer invoices with this generator?",
        a: "No. Our free generator does not send invoices or create recurring billing on a schedule. What it does do is save your draft in your browser, so each month you can open it, update the invoice number, service period and any overage line, and download a new PDF to send yourself. If you want fully automatic monthly invoices and card charging, you will need accounting or billing software.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A retainer invoice is an invoice you send in advance to bill a client for a set amount of time, ongoing availability or a prepaid balance, usually at the start of each month. It shows the retainer period, what the fee covers, the amount due and the due date, and later invoices or statements show how the retained time or balance was used.</p>

<p>Below we explain the main types of retainer, what a retainer invoice should include, how to handle overage and unused hours, and worked examples with real numbers. You can create every invoice in this guide with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a retainer invoice?</h2>
<p>A retainer is an arrangement where a client pays you regularly, in advance, to secure your time or services. The retainer invoice is the document that requests that payment. Unlike a normal invoice, which bills for work already delivered, a retainer invoice usually bills for a period that has not happened yet.</p>
<p>Retainers suit freelancers and agencies with steady, ongoing work: monthly content, website maintenance, bookkeeping, social media management, design support or advisory work. For the client, a retainer guarantees availability and predictable costs. For you, it smooths cash flow and reduces the time spent selling.</p>

<h2>Types of retainer arrangements</h2>
<table><thead><tr><th>Type</th><th>What the client pays for</th><th>How it is invoiced</th><th>Example</th></tr></thead><tbody>
<tr><td>Prepaid hours</td><td>A block of hours each period</td><td>Fixed monthly invoice; overage billed separately</td><td>20 hours of development support per month</td></tr>
<tr><td>Fixed scope retainer</td><td>A defined set of recurring deliverables</td><td>Same fixed invoice each month</td><td>8 blog posts and 1 newsletter per month</td></tr>
<tr><td>Availability (access) retainer</td><td>Priority access and response times</td><td>Fixed fee; work may be billed on top</td><td>On-call consulting with 24-hour response</td></tr>
<tr><td>Drawdown balance</td><td>A prepaid sum you bill against</td><td>One upfront invoice, then usage statements</td><td>$5,000 balance used across several small jobs</td></tr>
</tbody></table>
<p>Lawyers and some other regulated professionals use retainers held in client trust accounts with specific rules. This article covers general business retainers for freelancers and agencies, not regulated trust-account arrangements.</p>

<h2>What to include on a retainer invoice</h2>
<p>A retainer invoice needs everything a standard invoice has, plus details that make the advance nature of the bill clear:</p>
<ul>
<li>A clear title such as "Retainer invoice" or a line description that says "Monthly retainer".</li>
<li>Your business details and the client's legal billing details.</li>
<li>A unique invoice number in your normal sequence; our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you keep a consistent format.</li>
<li>The service period, for example "1–30 November 2026".</li>
<li>What the retainer covers: hours, deliverables or access level.</li>
<li>The retainer agreement reference and the policy on unused hours.</li>
<li>Any overage from the previous period, as a separate line with its own quantity and rate.</li>
<li>Tax, if you are registered and the service is taxable.</li>
<li>Payment terms and a due date before or at the start of the period.</li>
</ul>
<p>Keep retainer invoices in the same numbering series as all your other invoices rather than starting a separate sequence. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains why.</p>

<h2>Retainer invoice example: prepaid monthly hours</h2>
<p>A freelance developer has a retainer of 20 hours a month at $90 an hour, billed in advance. In October the client used 23 hours, so 3 hours of overage are billed on the November invoice at the agreed overage rate of $100 an hour.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Monthly development retainer: 20 hours, 1–30 November 2026</td><td>20</td><td>$90.00</td><td>$1,800.00</td></tr>
<tr><td>Overage: October 2026 (23 hours used, 20 included)</td><td>3</td><td>$100.00</td><td>$300.00</td></tr>
<tr><td><strong>Total due by 1 November 2026</strong></td><td></td><td></td><td><strong>$2,100.00</strong></td></tr>
</tbody></table>
<p>Attach or link a short timesheet showing the October hours so the overage line is easy to approve. If you need help presenting time, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h2>Retainer invoice example: drawdown balance</h2>
<p>A marketing consultant agrees a $5,000 prepaid balance. The first invoice simply bills the balance:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Prepaid consulting retainer: drawdown balance per agreement RA-2026-07</td><td>1</td><td>$5,000.00</td><td>$5,000.00</td></tr>
<tr><td><strong>Total due</strong></td><td></td><td></td><td><strong>$5,000.00</strong></td></tr>
</tbody></table>
<p>Each month, the consultant sends a usage statement: 14 hours at $120 ($1,680) in month one leaves $3,320; 11 hours ($1,320) in month two leaves $2,000. When the balance falls below an agreed threshold, say $1,000, a top-up retainer invoice is issued. If the client ends the arrangement, any unused prepaid balance is usually refunded or credited according to the agreement, and a <a href="/blog/credit-note-guide">credit note</a> is the clean way to document that adjustment.</p>

<h2>Handling unused hours and overage</h2>
<p>Unused hours cause more retainer disagreements than anything else. Decide your policy before the first invoice and write it into the agreement. The usual choices are:</p>
<ol>
<li><strong>Use it or lose it:</strong> unused hours expire at the end of the period. Simple, and it reflects that you reserved the time, but clients may push to use hours at month-end.</li>
<li><strong>Limited rollover:</strong> up to a set number of hours, or one month's unused hours, carry forward and then expire.</li>
<li><strong>Credit:</strong> unused hours are credited against the next invoice. Fairer to the client but closer to pay-as-you-go.</li>
</ol>
<p>For overage, agree whether extra hours are billed at the retainer rate or a higher ad-hoc rate, and whether they need approval before you start. Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide covers how to word change and overage clauses, and <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> helps you price the retainer itself. Many freelancers offer a small discount on the retainer rate in exchange for the guaranteed commitment.</p>

<h2>Retainer invoice vs deposit vs proforma invoice</h2>
<p>These three documents all relate to payment before work is complete, but they serve different purposes:</p>
<ul>
<li><strong>Retainer invoice:</strong> recurring, for ongoing time, access or a balance.</li>
<li><strong>Deposit invoice:</strong> a one-off advance towards a specific project; see our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>.</li>
<li><strong>Proforma invoice:</strong> a preliminary, non-final document that shows what a future invoice will contain, often used to approve a purchase; see <a href="/blog/proforma-invoice-guide">proforma vs commercial invoices</a>.</li>
</ul>

<h2>Tax and accounting for retainers</h2>
<p>Tax timing on advance payments can surprise people. In many VAT and GST systems, tax becomes due when an advance payment is received or invoiced, even though the work comes later. US sales tax rules on services vary by state, and many professional services are not taxable at all. Your accountant can confirm what applies to you.</p>
<p>For bookkeeping, your accounting method matters. Under accrual accounting, money received for work not yet done is generally recorded as unearned (deferred) revenue and recognised as you deliver the work. Under cash accounting, it is generally income when received. Our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> covers the difference.</p>

<h2>Automating monthly retainer invoices</h2>
<p>Retainers work best when billing is predictable. Invoice on the same date each month, use the same line wording with an updated period, and add overage lines from the previous month. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to build that routine without missing a cycle.</p>
<p>A few habits keep retainer billing smooth month after month:</p>
<ul>
<li><strong>Bill before the period starts.</strong> A retainer invoice dated the last week of the previous month, due on the 1st, keeps the arrangement genuinely prepaid.</li>
<li><strong>Send a monthly usage summary.</strong> Even when there is no overage, a short note of hours used and work completed reminds the client what the retainer delivers and makes renewals easier.</li>
<li><strong>Review the retainer every quarter.</strong> If the client regularly runs into overage, propose a larger block; if they rarely use their hours, a smaller retainer may keep them happier than one they feel is wasted.</li>
<li><strong>Keep the agreement reference on every invoice.</strong> When a new person joins the client's finance team, the reference tells them why the same amount arrives each month.</li>
</ul>
<p>Finally, stop work promptly if a retainer invoice goes unpaid. Because the fee is meant to arrive in advance, delivering a full month of work against an unpaid retainer defeats the purpose of the arrangement.</p>

<h2>Create your retainer invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, add the retainer line with its service period, include any overage from last month, and set a due date at the start of the period. The <a href="/invoice-templates/agency">Agency invoice template</a> is a good fit for monthly retainers, giving clients a clear, professional retainer invoice every time.</p>
`,
  },
  {
    slug: "client-not-paying-invoice",
    title: "Client Not Paying an Invoice? 9 Steps to Get Paid in 2026",
    description:
      "Client not paying an invoice? Follow 9 escalating steps, from a polite check-in to a formal demand letter and small claims, to recover what you are owed.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["payment-reminder-emails", "late-payment-fees", "invoice-collections"],
    faqs: [
      {
        q: "What should I do if a client will not pay my invoice?",
        a: "Start by confirming the invoice was received and is correct, then send polite reminders, call the client, pause further work if your contract allows, and send a formal demand letter. If that fails, consider a collection agency or small claims court.",
      },
      {
        q: "How long should I wait before chasing an unpaid invoice?",
        a: "Send a friendly reminder a few days before the due date and another on the day after it passes. Most freelancers escalate to firmer reminders at around 7 and 14 days overdue.",
      },
      {
        q: "Can I charge interest on an unpaid invoice?",
        a: "You can usually charge late fees or interest if they were agreed in advance and comply with local law. In the UK and EU, business-to-business debts may also carry statutory late-payment interest and compensation.",
      },
      {
        q: "Can I take a client to small claims court for an unpaid invoice?",
        a: "In many places, yes. Small claims courts handle debts up to a limit that varies by state or country and are designed to be used without a lawyer, but check the local rules and filing fees first.",
      },
      {
        q: "Is it worth sending an unpaid invoice to collections?",
        a: "Collection agencies typically keep a percentage of what they recover, so it often makes sense only for older debts where direct chasing has failed. Weigh the fee against the amount owed and the client relationship.",
      },
      {
        q: "What happens if a client goes out of business before paying me?",
        a: "If the client enters insolvency, administration or bankruptcy, you usually become an unsecured creditor. You can submit a claim with the insolvency practitioner, administrator or bankruptcy trustee, attaching your invoices and contract, but unsecured creditors often recover only part of the debt, or nothing. Act quickly, because claim deadlines apply. Stop any further work immediately and take advice on the process in your country.",
      },
      {
        q: "Can I write off an unpaid invoice for tax purposes?",
        a: "Sometimes. It depends on your accounting method and country. In the US, cash-basis taxpayers generally cannot deduct unpaid fees, because the income was never reported. Accrual-basis businesses may be able to claim a bad debt deduction. In the UK, VAT-registered businesses may claim VAT bad debt relief once a debt is over six months overdue and written off in their accounts. Ask an accountant before writing anything off.",
      },
      {
        q: "How long do I have to take legal action over an unpaid invoice?",
        a: "There is a time limit, and it varies by country and state. In England and Wales, most contract debt claims must be brought within six years under the Limitation Act 1980. In the US, limits for contract claims are set by each state and differ for written and oral agreements. Do not wait until the deadline approaches, because evidence gets harder to gather and clients become harder to trace.",
      },
      {
        q: "Can I hold back the work until the client pays?",
        a: "Often, yes, if your contract supports it. Many freelance agreements say ownership of the final work or a license to use it transfers only on full payment, and that work pauses when invoices are overdue. Be careful not to damage or delete a client's own data or systems, or breach confidentiality, because that can create legal liability for you. Check your contract and take advice in serious cases.",
      },
      {
        q: "Should I name and shame a non-paying client online?",
        a: "It is risky and rarely recovers the money. Public posts can expose you to defamation claims if anything you say is inaccurate or exaggerated, and aggressive pressure on a debtor may breach harassment or debt collection rules in some places. Stick to private, factual communication and formal steps such as a demand letter or small claims. Leaving honest, measured reviews on official platforms is a separate matter, but get the facts right.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> If a client is not paying an invoice, first confirm they received it and that nothing on it is wrong, then follow a calm escalation: polite reminders, a phone call, a firm reminder citing your terms, a pause on further work, a payment plan if needed, a formal demand letter and, as a last resort, a collection agency or small claims court. Keep everything in writing so you have a clear record at each step.</p>

<p>This guide gives you a nine-step plan for a client not paying an invoice, with timings, sample wording and a comparison of your recovery options. If you need to reissue or correct an invoice along the way, use our <a href="/invoice-generator">free invoice generator</a> to create a clean PDF. <strong>This article is general information, not legal advice.</strong> Debt recovery rules differ by country and state, so speak to a lawyer or local advice service before taking legal action.</p>

<h2>First, find out why the invoice is unpaid</h2>
<p>Most late payments are not deliberate. Before you assume the worst, check the usual causes:</p>
<ul>
<li>The invoice went to the wrong person or landed in spam.</li>
<li>It is missing a purchase order number, a tax ID or the correct legal entity name.</li>
<li>The client is waiting on an internal approval or a payment run.</li>
<li>They are unhappy with part of the work and have not said so.</li>
<li>They genuinely have a cash-flow problem.</li>
</ul>
<p>Each cause has a different fix. A missing PO needs a corrected invoice; a quality concern needs a conversation; a cash-flow problem may need a payment plan. If the client disputes the work, see our guide to resolving an <a href="/blog/invoice-dispute">invoice dispute</a> before escalating.</p>

<h2>9 steps when a client is not paying an invoice</h2>
<p>Timings assume an invoice with a 14-day due period. Adjust to your own terms.</p>

<h3>Step 1: Send a pre-due reminder (3 days before)</h3>
<p>A short, friendly note that the invoice is due soon catches problems early. Include the invoice number, amount, due date and a payment link or bank details.</p>

<h3>Step 2: Send an overdue reminder (1 day after)</h3>
<p>Keep it neutral: "Just a reminder that invoice INV-2026-0118 for $2,400.00 was due yesterday. Could you let me know when payment is scheduled?" Attach the PDF again. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> give you wording for each stage, and if you find this part uncomfortable, read <a href="/blog/how-to-ask-for-payment">how to ask for payment politely</a>.</p>

<h3>Step 3: Pick up the phone (around day 5–7)</h3>
<p>A call often achieves in five minutes what three emails could not. Ask whether the invoice has been received and approved, and whether anything is holding it up. Follow up with an email summarising what was agreed.</p>

<h3>Step 4: Send a firm reminder citing your terms (day 14)</h3>
<p>Reference the payment clause in your agreement and any late fee that applies, and ask for a specific payment date. If you agreed late fees in advance, this is when they start to matter; see <a href="/blog/late-payment-fees">how to charge late payment fees</a>.</p>

<h3>Step 5: Pause further work</h3>
<p>If your contract allows it, tell the client that work on new tasks is paused until the overdue balance is settled. Continuing to deliver while unpaid increases what is at risk. A clear <a href="/blog/freelance-contract-template">freelance contract</a> makes this step much easier to justify.</p>

<h3>Step 6: Offer a payment plan</h3>
<p>If the client is struggling financially, a written plan (for example three monthly payments) may recover more than a confrontation. Confirm the instalment amounts and dates in writing and invoice or acknowledge each payment.</p>

<h3>Step 7: Send a statement and a final notice (day 30)</h3>
<p>Send a <a href="/blog/statement-of-account">statement of account</a> listing every open invoice and the total balance, along with a final notice stating that you will take further action if payment is not received by a specific date, often 7 days later.</p>

<h3>Step 8: Send a formal letter of demand</h3>
<p>A letter before action (or demand letter) sets out the debt, the invoices concerned, any interest claimed, a deadline and the action you intend to take. In some jurisdictions, such as England and Wales, courts expect a formal pre-action letter before a claim is issued. A lawyer can send this on letterhead, which some clients take more seriously.</p>

<h3>Step 9: Use a collection agency or small claims court</h3>
<p>If the demand is ignored, your main options are a collection agency or a court claim. Our guide to <a href="/blog/invoice-collections">sending an invoice to collections</a> explains how agencies work and what they charge.</p>

<h2>Comparing your recovery options</h2>
<table><thead><tr><th>Option</th><th>Typical cost</th><th>Speed</th><th>Effect on relationship</th><th>Best when</th></tr></thead><tbody>
<tr><td>Reminders and calls</td><td>Your time</td><td>Days to weeks</td><td>Minimal</td><td>Invoice is under 30 days overdue</td></tr>
<tr><td>Payment plan</td><td>Delayed cash</td><td>Weeks to months</td><td>Preserved</td><td>Client is willing but short of cash</td></tr>
<tr><td>Demand letter</td><td>Low (or a lawyer's fee)</td><td>1–3 weeks</td><td>Strained</td><td>Client has stopped responding</td></tr>
<tr><td>Collection agency</td><td>A percentage of the amount recovered</td><td>Weeks to months</td><td>Usually ended</td><td>Debt is old and direct chasing failed</td></tr>
<tr><td>Small claims court</td><td>Filing fees; possibly recoverable</td><td>Months</td><td>Ended</td><td>Clear evidence and an amount within the court limit</td></tr>
</tbody></table>

<h2>Late payment rights in the UK, EU and US</h2>
<p>Your rights depend on where you and your client are based. A few common examples, which you should always verify locally:</p>
<ul>
<li><strong>United Kingdom:</strong> for business-to-business debts, the Late Payment of Commercial Debts (Interest) Act 1998 generally lets you claim statutory interest at 8% above the Bank of England base rate, plus fixed compensation of £40, £70 or £100 depending on the size of the debt, unless your contract sets a different substantial remedy. The small claims track in England and Wales usually covers claims up to £10,000.</li>
<li><strong>European Union:</strong> the Late Payment Directive sets a statutory interest rate for commercial debts of at least 8 percentage points above the European Central Bank reference rate, plus a minimum of €40 compensation, implemented through each member state's law.</li>
<li><strong>United States:</strong> there is no single federal late-payment rule for private businesses. Interest and late fees mainly depend on your contract and state law, including usury limits, and small claims limits vary widely from state to state.</li>
</ul>

<h2>Evidence to gather before escalating</h2>
<p>Whatever route you take, a tidy file makes recovery faster:</p>
<ul>
<li>The signed contract, proposal or email showing the agreed price and terms.</li>
<li>Every invoice, with dates and numbers.</li>
<li>Proof of delivery: files sent, approval emails, launch dates.</li>
<li>Your reminder emails and notes of phone calls.</li>
<li>Any messages where the client acknowledged the debt or promised payment.</li>
</ul>

<h2>How to stop it happening again</h2>
<p>Unpaid invoices are much rarer when the system is designed to prevent them. Take a deposit before you start, bill large projects in stages, invoice the day work is approved, and include a payment link on every invoice. Our guides on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> and <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a> cover these habits in detail, and if an invoice is already past due, our guide to handling an <a href="/blog/overdue-invoice">overdue invoice</a> covers the day-to-day follow-up.</p>

<h2>Should you keep working with a client who pays late?</h2>
<p>Once the invoice is finally paid, decide whether the relationship is worth continuing. A client who paid late once because of a missed PO is very different from one who needed a demand letter. For clients you want to keep, change the terms for future work rather than hoping things improve:</p>
<ul>
<li>Ask for a larger deposit, or full payment upfront for small jobs.</li>
<li>Shorten the payment window, for example from Net 30 to Net 14.</li>
<li>Bill in smaller milestones so less money is ever at risk.</li>
<li>Require card payment or direct debit for recurring work.</li>
<li>Agree a firm rule that work pauses when any invoice is more than a set number of days overdue.</li>
</ul>
<p>If a client has repeatedly ignored invoices, made you chase for weeks, or disputed work only after it was delivered, it is often cheaper to end the relationship politely. The time you spend chasing one bad payer is time you could have spent serving a client who pays on schedule.</p>

<p>If polite chasing and a final demand fail, our guide to <a href="/blog/small-claims-court-unpaid-invoice">small claims court for an unpaid invoice</a> explains the next step in the US and UK.</p>

<h2>Resend a clear invoice today</h2>
<p>A client not paying an invoice is often a client who has lost it or cannot process it. Recreate it in the <a href="/invoice-generator">invoice generator</a> with the PO number, correct billing entity, due date and payment details, and resend it as a fresh PDF. The <a href="/invoice-templates/corporate">Corporate invoice template</a> is easy for finance teams to read and approve.</p>
`,
  },
  {
    slug: "independent-contractor-invoice",
    title: "Independent Contractor Invoice: 1099 Billing Guide for 2026",
    description:
      "How to create an independent contractor invoice as a 1099 worker: required fields, W-9 and tax ID tips, a worked example and mistakes US clients reject.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "salary-slip-format",
      "w9-and-1099-for-contractors",
      "freelance-invoice-template",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "What should an independent contractor invoice include?",
        a: "Include your name or business name, address and contact details, the client's legal name and address, a unique invoice number, issue and due dates, itemized services with rates, the total due, and payment instructions. Add a PO number or project reference if the client uses one.",
      },
      {
        q: "Do I put my Social Security number on a 1099 contractor invoice?",
        a: "It is generally not necessary and not recommended. Clients collect your taxpayer identification number on Form W-9 instead, and many sole proprietors get a free EIN from the IRS to avoid sharing their SSN.",
      },
      {
        q: "Do independent contractors charge sales tax?",
        a: "Usually only if the service is taxable in the relevant state and you are registered to collect sales tax there. Many professional services are not taxable, but rules vary by state, so check with your state tax agency.",
      },
      {
        q: "Do I need an invoice if the client sends me a 1099?",
        a: "Yes. The 1099 is an annual tax information return, while the invoice is how you request payment and document each job. Keep your invoices so you can reconcile them against any 1099 forms you receive.",
      },
      {
        q: "Does a client withhold taxes from a contractor invoice?",
        a: "Normally no. Clients usually pay independent contractors the full invoice amount without withholding, and you are responsible for paying your own income and self-employment taxes, often through quarterly estimated payments.",
      },
      {
        q: "Will I get a 1099-NEC if a client pays me less than $2,000?",
        a: "Possibly not. For payments made from 2026 onward, the 1099-NEC reporting threshold rose from $600 to $2,000 per payee per calendar year, so a client paying you less may not have to file one. The income is still taxable either way. Report all your self-employment income from your own invoices and bank records, not just the amounts on 1099 forms. Check the IRS website for current thresholds.",
      },
      {
        q: "What if a client pays my invoice through PayPal or by card?",
        a: "Payments made by card or through a third-party payment network are generally reported by the payment platform on Form 1099-K rather than by the client on Form 1099-NEC. That means you may receive a 1099-K instead. Use your invoices to reconcile the forms, so the same income is not counted twice on your return. Thresholds for 1099-K have changed several times, so check the IRS website.",
      },
      {
        q: "When are quarterly estimated taxes due for independent contractors?",
        a: "The IRS normally sets four due dates: April 15, June 15 and September 15 of the tax year, and January 15 of the following year. If a date falls on a weekend or legal holiday, it moves to the next business day. You can calculate payments with Form 1040-ES and pay online. Many states have their own estimated tax schedule, so check with your state tax agency too.",
      },
      {
        q: "Why would a client withhold 24% from my contractor payment?",
        a: "That is backup withholding. If you do not give the client a correct taxpayer identification number on Form W-9, or the IRS notifies them that your TIN is wrong, they may be required to withhold 24% from reportable payments and send it to the IRS. You can usually avoid it by returning an accurate W-9 promptly. Any amount withheld is credited against your tax when you file.",
      },
      {
        q: "Can I add a late fee to an independent contractor invoice?",
        a: "Yes, if the client agreed to it in your contract or written terms before the work began. State the fee on the invoice, for example '1.5% per month on balances more than 30 days overdue, per agreement dated 4 August 2026'. Some states cap interest rates or regulate late charges, so keep the fee reasonable and check your state's rules. Adding a fee nobody agreed to is usually unenforceable.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An independent contractor invoice is the bill a self-employed 1099 worker sends a client to request payment for services. It should show your name or business name, the client's legal name, a unique invoice number, issue and due dates, itemized services with rates, the total, and how to pay. No taxes are normally withheld, so the client pays the full amount and you handle your own taxes.</p>

<p>This guide covers what US clients expect to see on an independent contractor invoice, how the W-9 and Form 1099 fit in, a worked example and the mistakes that delay payment. You can build yours with our <a href="/invoice-generator">free invoice generator</a> or the <a href="/invoice-generator/usa">USA invoice generator</a>, which defaults to US dollars and EIN fields. This is general information, not tax advice; confirm details with the IRS or a tax professional.</p>

<h2>What makes an independent contractor invoice different</h2>
<p>When you work as an employee, payroll handles everything. As an independent contractor, you are running a business, even if it is just you. That changes the paperwork in three ways:</p>
<ul>
<li><strong>You start the payment.</strong> Nothing gets paid until you send an invoice, so its accuracy directly controls your cash flow.</li>
<li><strong>No withholding.</strong> Clients generally pay the gross amount. You pay income tax and self-employment tax yourself, usually through quarterly estimated payments.</li>
<li><strong>Your client reports what they paid you.</strong> Businesses that pay contractors above the federal reporting threshold in a year typically file Form 1099-NEC. That threshold was $600 for many years and was raised to $2,000 for payments made from 2026 onward; check the IRS website for the current figure.</li>
</ul>
<p>For general freelance invoicing habits (deposits, terms and follow-ups), see <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a>. This article focuses on what is specific to US contractor billing.</p>
<p>One more point: whether you are legally an independent contractor depends on the working relationship, not on what the paperwork calls you. The IRS looks at factors such as who controls how and when the work is done, who provides the tools, and whether you can work for other clients. Sending invoices does not by itself make you a contractor, and some states apply stricter tests. If a client treats you like an employee (fixed hours, close supervision, their equipment), it is worth getting professional advice on your status.</p>

<h2>Required fields on a 1099 contractor invoice</h2>
<table><thead><tr><th>Field</th><th>What to enter</th><th>Why the client needs it</th></tr></thead><tbody>
<tr><td>Your name or business name</td><td>The name that matches your W-9</td><td>Matches the payment to the right vendor record</td></tr>
<tr><td>Your contact details</td><td>Address, email, phone</td><td>Needed for vendor setup and the 1099</td></tr>
<tr><td>Client legal name and address</td><td>The entity named in your agreement</td><td>Routes the invoice to the right accounts payable team</td></tr>
<tr><td>Invoice number</td><td>Unique and sequential, e.g. INV-2026-031</td><td>Prevents duplicate payments</td></tr>
<tr><td>Invoice date and due date</td><td>A real calendar due date</td><td>Sets the payment deadline</td></tr>
<tr><td>PO number or project reference</td><td>If the client issued one</td><td>Many companies cannot pay without it</td></tr>
<tr><td>Itemized services</td><td>Description, quantity, rate, amount</td><td>Lets the client approve each charge</td></tr>
<tr><td>Reimbursable expenses</td><td>Listed separately, with receipts</td><td>Keeps fees and expenses distinct</td></tr>
<tr><td>Total due</td><td>Subtotal, any tax, total</td><td>The amount to pay</td></tr>
<tr><td>Payment instructions</td><td>ACH details, payment link or mailing address for checks</td><td>Removes delays in paying</td></tr>
</tbody></table>
<p>If the client uses purchase orders, the PO number is essential; see <a href="/blog/po-number-on-invoice">what a PO number on an invoice is</a>. For a consistent numbering format, our <a href="/tools/invoice-number-generator">invoice number generator</a> creates one in seconds.</p>

<h2>The W-9, your EIN and what not to put on the invoice</h2>
<p>Before paying you, most US clients ask you to complete Form W-9, which gives them your legal name, tax classification and taxpayer identification number (TIN). They use it to prepare your 1099. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a> explains both forms in detail.</p>
<p>Because the client already has your TIN from the W-9, you generally do not need to print it on every invoice. If you are a sole proprietor, avoid putting your Social Security number on invoices that will be emailed around a client's organization. Many contractors apply for a free Employer Identification Number (EIN) from the IRS and use that on their W-9 and, where a client asks for it, on invoices. Our overview of the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers the options.</p>

<h2>Independent contractor invoice example</h2>
<p>A freelance UX researcher bills a software company for October work under a PO, with one approved expense.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>User interviews: recruit, run and summarize (PO 45821)</td><td>8</td><td>$175.00</td><td>$1,400.00</td></tr>
<tr><td>Usability testing report and presentation</td><td>12 hrs</td><td>$110.00</td><td>$1,320.00</td></tr>
<tr><td>Participant incentives (reimbursable, receipts attached)</td><td>8</td><td>$50.00</td><td>$400.00</td></tr>
<tr><td>Subtotal</td><td></td><td></td><td>$3,120.00</td></tr>
<tr><td>Sales tax (not applicable to these services)</td><td></td><td></td><td>$0.00</td></tr>
<tr><td><strong>Total due by 21 November 2026 (Net 30)</strong></td><td></td><td></td><td><strong>$3,120.00</strong></td></tr>
</tbody></table>
<p>The notes field would add: "Payment by ACH to the account below, or by card via the payment link. Per consulting agreement dated 4 August 2026." If you bill by the hour, our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> shows how to attach a timesheet.</p>

<h2>Sales tax and independent contractors</h2>
<p>Whether you charge sales tax depends on the state and the service. Many professional services (consulting, writing, design) are not taxable in many states, while some states tax a broader range of services and goods such as printed materials or software. If you are required to collect sales tax, you must register with the state first and show the tax as a separate line. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers the basics, and you can check the numbers with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. When in doubt, ask your state's tax agency or an accountant.</p>

<h2>How to create an independent contractor invoice in 6 steps</h2>
<ol>
<li><strong>Confirm the billing details.</strong> Get the client's legal entity name, AP email address and any PO number before you start work.</li>
<li><strong>Complete the W-9.</strong> Send it promptly so vendor setup does not hold up your first payment.</li>
<li><strong>Choose a template.</strong> A clean layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a> works well for company AP teams.</li>
<li><strong>Itemize the work.</strong> One line per deliverable or block of hours, with expenses on separate lines.</li>
<li><strong>Set terms and a due date.</strong> State Net 15 or Net 30 and write the actual date.</li>
<li><strong>Send the PDF.</strong> Email it to accounts payable with the invoice number and PO in the subject line.</li>
</ol>

<h2>Common mistakes that delay contractor payments</h2>
<ul>
<li>Invoicing a manager's name instead of the company's legal entity.</li>
<li>Leaving off the PO number or project code the client requires.</li>
<li>Using a different name or business name from the one on your W-9.</li>
<li>Mixing reimbursable expenses into your fee lines without receipts.</li>
<li>Writing "Net 30" without a calendar due date.</li>
<li>Reusing an invoice number from a previous invoice.</li>
</ul>

<h2>Contractor taxes: what to plan for</h2>
<p>Because nothing is withheld, set aside a share of every payment for taxes. Self-employed people in the US generally owe self-employment tax (15.3% on net earnings up to the Social Security wage base, with the Medicare portion continuing above it) plus federal and possibly state income tax, and usually make quarterly estimated payments. Business expenses can reduce your taxable profit, so keep receipts; see our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>. A tax professional can help you estimate what to set aside.</p>
<p>At year end, compare the 1099 forms you receive with your own invoice records. Our guide to the <a href="/blog/freelance-invoice-template">freelance invoice template</a> suggests a simple filing system that makes that reconciliation quick, and if you have not formed a business entity, see <a href="/blog/how-to-invoice-without-a-business">how to invoice without a business</a>.</p>

<h2>Create your independent contractor invoice now</h2>
<p>Put your W-9 details, the client's PO number and itemized services into the <a href="/invoice-generator">invoice generator</a>, set a real due date and download a professional PDF. A clear independent contractor invoice is the fastest route from finished work to money in your account.</p>
`,
  },
  {
    slug: "freelance-invoice-template",
    title: "Free Freelance Invoice Template: Fields, Example and Tips",
    description:
      "Get a free freelance invoice template and learn which fields to include, how to word line items, and see a filled-in example you can copy for your clients.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "translation-invoice-template",
      "freelancer-invoice-guide",
      "invoice-examples",
      "independent-contractor-invoice",
    ],
    faqs: [
      {
        q: "What is the best invoice template for freelancers?",
        a: "The best freelance invoice template is one that is easy to read, shows itemized services clearly and has room for payment details. Minimal and Modern layouts suit most freelancers, while Creative suits design and media work.",
      },
      {
        q: "Can I use a free freelance invoice template without signing up?",
        a: "Yes. Our invoice generator lets you choose a template, fill in your details and download a PDF without creating an account.",
      },
      {
        q: "Should I send a freelance invoice as a PDF or a Word file?",
        a: "Send a PDF. It looks the same on every device, is harder to edit by accident and is what most accounts payable teams expect.",
      },
      {
        q: "What should I write in the description on a freelance invoice?",
        a: "Describe the deliverable and scope specifically, for example 'Blog articles: 4 x 1,200 words, SEO briefs supplied by client', rather than vague phrases like 'writing services'.",
      },
      {
        q: "Do freelancers need a logo on their invoice?",
        a: "A logo is not required, but it makes your invoice easier to recognize and look more professional. A clear name and consistent design work just as well if you do not have a logo yet.",
      },
      {
        q: "How should I number my invoices as a new freelancer?",
        a: "Choose a simple format you can keep forever, such as a year and sequence like 2026-001, or your initials plus a sequence like JD-2026-001. You do not have to start at 001 if you prefer not to signal that you are new, but every number must be unique and follow on from the last. Keep a log so you never reuse or skip a number by accident.",
      },
      {
        q: "Can I invoice a freelance client in a different currency?",
        a: "Yes. Agree the currency before you start, then show every amount on the invoice in that currency with its code, such as USD, GBP or EUR, because symbols like $ are ambiguous. Add bank details that can receive that currency, or a payment link that accepts foreign cards. Our generator supports eight currencies, and the currency you pick applies to every amount on the invoice.",
      },
      {
        q: "How do I show a discount on a freelance invoice?",
        a: "List your services at your full rate, then show the discount as its own line or in the discount field, with a label such as 'Loyalty discount (5%)' or 'Launch offer'. The client sees the real value of your work and knows the discount is a choice, which makes it easier to remove later. Calculate any tax on the amount after the discount, if you charge tax.",
      },
      {
        q: "Do I need to put a tax number on my freelance invoice?",
        a: "Only in certain cases. If you are registered for VAT, GST or sales tax, your registration number is usually required on invoices where you charge that tax. If you are not registered, leave tax numbers off and do not charge tax. US freelancers normally give their SSN or EIN on Form W-9 instead of printing it on invoices. Check your tax authority's rules for your country.",
      },
      {
        q: "What should I do if I sent a freelance invoice with a mistake?",
        a: "Tell the client promptly and correct it properly. If the invoice has not been paid or entered into their system, many freelancers simply send a corrected version, clearly marked as replacing the original. If it has been paid or recorded, or you are registered for VAT or GST, issue a credit note and a new invoice instead. Never quietly change a sent invoice and keep the same number.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A freelance invoice template is a ready-made invoice layout with spaces for your details, your client's details, an invoice number, dates, itemized services, totals and payment instructions. Pick a free template, fill in each field, check the maths and send it as a PDF. Using the same template every time makes you look professional and makes your invoices faster to approve.</p>

<p>This guide shows which fields a freelance invoice template needs, how to choose a design, how to word line items, and a complete filled-in example. Every template mentioned here is available free in our <a href="/invoice-generator">invoice generator</a>, with automatic totals and PDF download.</p>

<h2>What a freelance invoice template should include</h2>
<p>Whatever your service, a good freelance invoice template has these sections:</p>
<ol>
<li><strong>Header:</strong> your name or business name, logo, address, email and phone.</li>
<li><strong>Bill to:</strong> the client's legal name, billing address and contact.</li>
<li><strong>Invoice details:</strong> invoice number, issue date, due date and any PO or project reference.</li>
<li><strong>Line items:</strong> description, quantity, unit (hours, days, items), rate and amount.</li>
<li><strong>Totals:</strong> subtotal, discount, tax if you are registered, and total due.</li>
<li><strong>Payment details:</strong> bank transfer details, a payment link or other accepted methods.</li>
<li><strong>Terms and notes:</strong> due period, late-fee terms you agreed and a short thank-you.</li>
</ol>
<p>If you need a unique number format, our <a href="/tools/invoice-number-generator">invoice number generator</a> creates one such as <code>JD-2026-014</code>. For tips on wording the covering email, see <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>

<h2>Choosing a freelance invoice template design</h2>
<p>The right design depends on your work and who pays your invoices. Here is how our free templates map to common freelance fields:</p>
<table><thead><tr><th>Template</th><th>Style</th><th>Good for</th></tr></thead><tbody>
<tr><td><a href="/invoice-templates/minimal">Minimal</a></td><td>Quiet, lots of white space</td><td>Writers, consultants, developers, any client</td></tr>
<tr><td><a href="/invoice-templates/modern">Modern</a></td><td>Clean with a colour accent</td><td>Marketers, web designers, tech freelancers</td></tr>
<tr><td><a href="/invoice-templates/creative">Creative</a></td><td>Bolder, brand-forward</td><td>Designers, illustrators, photographers</td></tr>
<tr><td>Corporate</td><td>Formal and structured</td><td>Freelancers billing large companies with AP teams</td></tr>
</tbody></table>
<p>You can browse every layout on the <a href="/invoice-templates">invoice templates</a> page and switch designs at any time without retyping your details. Whatever you choose, keep it consistent so returning clients recognize your invoices immediately.</p>
<p>A few design rules apply to every freelance invoice template. Keep the invoice number, due date and total easy to find near the top or in a summary box. Use a readable font size for line items, because many clients will open your PDF on a phone. Use your brand colour sparingly, for headings or a thin accent, so the invoice still prints cleanly in black and white. And keep it to one page whenever you can; a long list of small items can go on an attached timesheet instead.</p>

<h2>How to fill in a freelance invoice template</h2>
<h3>Step 1: Add your details once</h3>
<p>Enter your name or business name, contact details and logo. If you are registered for VAT, GST or sales tax, add your tax number. Our generator saves your draft in your browser, so these details are ready next time on the same device.</p>
<h3>Step 2: Bill the right client entity</h3>
<p>Use the company's legal name from your contract, not the first name of the person who hired you. Add their PO number if they gave you one, and send the invoice to the billing address or accounts payable email they specified rather than to your day-to-day contact, who may simply forward it late.</p>
<h3>Step 3: Set the number and dates</h3>
<p>Use the next number in your sequence, today's date as the issue date, and a calendar due date that matches your agreed terms.</p>
<h3>Step 4: Itemize your work</h3>
<p>Add a separate line for each deliverable, block of hours or expense. Specific descriptions get approved faster. Keep reimbursable expenses on their own lines so the client can see what is your fee and what is a pass-through cost.</p>
<h3>Step 5: Check totals, add payment details and send</h3>
<p>Review the subtotal, any discount and tax, then add your bank details or payment link. Download the PDF and send it to the client's billing contact.</p>

<h2>Freelance invoice example (filled in)</h2>
<p>A freelance content writer invoices a software company for October work:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Blog articles: 4 x 1,200 words, incl. 1 revision round each</td><td>4</td><td>$320.00</td><td>$1,280.00</td></tr>
<tr><td>Case study interview and write-up, customer: Northfield Ltd</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Extra revision round on case study (requested 18 Oct)</td><td>2 hrs</td><td>$70.00</td><td>$140.00</td></tr>
<tr><td>Subtotal</td><td></td><td></td><td>$2,070.00</td></tr>
<tr><td>Loyalty discount (5%)</td><td></td><td></td><td>-$103.50</td></tr>
<tr><td><strong>Total due by 6 November 2026 (Net 14)</strong></td><td></td><td></td><td><strong>$1,966.50</strong></td></tr>
</tbody></table>
<p>The invoice header shows the number <code>INV-2026-047</code>, issue date 23 October 2026, and the notes read: "Thank you for your business. Payment by bank transfer to the account below or by card using the link. Please quote INV-2026-047 as the reference." For more filled-in scenarios, see our <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>How to word freelance line items</h2>
<p>Line items are where most invoice queries start. Compare:</p>
<table><thead><tr><th>Vague</th><th>Clear</th></tr></thead><tbody>
<tr><td>Design work</td><td>Logo design: 3 concepts, 2 revision rounds, final files in SVG and PNG</td></tr>
<tr><td>Development</td><td>Checkout page bug fixes: tickets 214, 219, 222 (6.5 hrs)</td></tr>
<tr><td>Consulting</td><td>Marketing strategy workshop: 1 day on site, 9 October 2026</td></tr>
<tr><td>Expenses</td><td>Stock photo licences: 3 images, receipts attached</td></tr>
</tbody></table>
<p>Clear lines answer the questions a finance team would otherwise send back to you. If your rate itself needs work, our guide to <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through the numbers.</p>

<h2>Adapting the template to different freelance billing models</h2>
<ul>
<li><strong>Hourly work:</strong> use hours as the quantity and attach a timesheet for larger totals.</li>
<li><strong>Fixed projects:</strong> one line per deliverable or milestone, with quantity 1.</li>
<li><strong>Retainers:</strong> a monthly retainer line plus any overage; see our guide to the <a href="/blog/retainer-invoice">retainer invoice</a>.</li>
<li><strong>US contractor work:</strong> add PO numbers and match your W-9 name; see the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> guide.</li>
<li><strong>Clients abroad:</strong> choose the agreed currency and add international payment details; see <a href="/blog/invoice-international-clients">how to invoice international clients</a>.</li>
</ul>

<h2>Mistakes to avoid with a freelance invoice template</h2>
<p>A template saves time, but it can also copy errors from one invoice to the next. Watch for these:</p>
<ul>
<li><strong>Duplicating last month's file and forgetting to change the number or dates.</strong> Duplicate invoice numbers confuse clients and your own records; our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide shows how to avoid them.</li>
<li><strong>Leaving old line items in place.</strong> Delete or update every line before you send, especially descriptions that mention a previous month or project.</li>
<li><strong>Hard-coded totals.</strong> In Word or Docs templates, totals do not recalculate. A generator that calculates for you removes the risk of a client spotting an arithmetic mistake.</li>
<li><strong>Charging tax you are not registered for.</strong> Only add VAT, GST or sales tax if you are registered to collect it.</li>
<li><strong>Missing payment details.</strong> A beautiful invoice without bank details or a payment link still gets paid late.</li>
<li><strong>Sending an editable file.</strong> Always send a PDF, and keep your own copy filed by invoice number and client.</li>
</ul>
<p>A simple filing habit helps too: save every PDF in a folder per year, named with the invoice number and client, and keep a one-line log of number, client, amount, due date and date paid. That small record makes chasing overdue invoices and preparing your taxes far easier.</p>

<h2>Freelance invoice template checklist</h2>
<ul>
<li>Your name and contact details are correct and consistent.</li>
<li>The client's legal name and billing address match the contract.</li>
<li>The invoice number is unique and follows your sequence.</li>
<li>The due date is an actual date, not just "Net 14".</li>
<li>Every line has a clear description, quantity and rate, and the totals add up.</li>
<li>Payment details or a payment link are on the invoice itself.</li>
<li>The file is a PDF with a clear name, such as <code>INV-2026-047-ClientName.pdf</code>.</li>
</ul>
<p>For the bigger picture on terms, deposits and chasing, read <a href="/blog/freelancer-invoice-guide">the freelancer's invoice guide</a>.</p>

<h2>Use your free freelance invoice template now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, pick the Minimal, Modern or Creative layout, fill in your details and line items, and download your freelance invoice template as a polished PDF in a few minutes, free, with no sign-up.</p>
`,
  },
  {
    slug: "how-to-invoice-without-a-business",
    title: "How to Invoice Without a Business: A Guide for Individuals",
    description:
      "Learn how to invoice without a business as an individual: what to put on the invoice, tax ID options, registration rules and a worked example for 2026.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "llc-vs-sole-proprietorship",
      "what-is-an-invoice",
      "independent-contractor-invoice",
      "sole-trader-invoice-uk",
    ],
    faqs: [
      {
        q: "Can I send an invoice if I do not have a business?",
        a: "Yes. In most countries an individual can invoice in their own name for work they have done. You may still need to register for tax as self-employed and report the income, depending on where you live and how much you earn.",
      },
      {
        q: "What name do I put on an invoice as an individual?",
        a: "Use your full legal name. If you trade under a different name in the US, you may need to register it as a DBA or assumed name first; in the UK you can trade under a name as a sole trader as long as it follows naming rules.",
      },
      {
        q: "Do I need a tax ID to invoice as an individual?",
        a: "Not always on the invoice itself. US clients usually collect your SSN or EIN on Form W-9 rather than from the invoice, and UK sole traders who are not VAT registered do not need a VAT number on invoices.",
      },
      {
        q: "Do I have to pay tax on money I invoice as an individual?",
        a: "Usually, yes. Income from invoices is generally taxable self-employment or miscellaneous income, though allowances such as the UK's £1,000 trading allowance may apply. Check with your tax authority or an accountant.",
      },
      {
        q: "Can I invoice for a one-off job?",
        a: "Yes. A one-off invoice works the same way as any other: give it a unique number, describe the work, state the amount and due date, and include payment details. Keep a copy for your tax records.",
      },
      {
        q: "Can I receive invoice payments into my personal bank account?",
        a: "Often, yes, especially when you are starting out. Some banks' terms do not allow regular business use of personal accounts, though, so check yours. A separate account, even a second personal one used only for this work, makes it much easier to track income and expenses at tax time. Put the account name exactly as it appears at the bank on your invoice to avoid failed transfers.",
      },
      {
        q: "Does Making Tax Digital apply to me if I invoice as an individual in the UK?",
        a: "It might. From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must keep digital records and send quarterly updates to HMRC using compatible software. The threshold is due to fall to £30,000 from April 2027 and £20,000 from April 2028. Qualifying income means gross self-employment and property income before expenses. Check HMRC's current guidance to see if and when you are in scope.",
      },
      {
        q: "Can I invoice for side work while I have a full-time job?",
        a: "Yes. Many people invoice for freelance or side work alongside a salaried job. Check your employment contract first, because some restrict outside work, conflicts of interest or use of your employer's equipment. The side income is usually taxable on top of your salary, so you may need to register as self-employed and file a tax return. Set money aside, because no tax is withheld from your invoices.",
      },
      {
        q: "What if a client asks for my company registration number?",
        a: "Explain that you trade as an individual, so you have no company registration number. A sole proprietor or sole trader does not have one, and that is perfectly normal. The client may ask for other details instead, such as a W-9 in the US or your full legal name and address in the UK. If you are registered for VAT, give your VAT number, but never invent a number.",
      },
      {
        q: "Do I need an invoice if the client pays me in cash?",
        a: "It is still a good idea. An invoice, or a receipt marked as paid in cash, records what the work was, who paid and how much, which protects both of you if there is a query later. It also gives you a record of income for your tax return, because cash payments leave no bank trail. Number it in your normal sequence and keep a copy.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> You can invoice without a business by issuing the invoice in your own legal name. Include your name and contact details, the client's details, a unique invoice number, the date, a description of the work, the amount due, a due date and how to pay. In most countries an individual working for themselves is treated as a sole proprietor or sole trader automatically, but you may still need to register for tax and report the income.</p>

<p>This guide explains how to invoice as an individual, what changes when you have no company or trading name, the tax and registration basics in the US and UK, and a worked example. You can create the invoice itself in minutes with our <a href="/invoice-generator">free invoice generator</a>, no business account or sign-up required. This is general information, not tax or legal advice.</p>

<h2>Can you invoice as an individual?</h2>
<p>Yes. An invoice is simply a request for payment that records what was supplied, by whom, to whom and for how much. Nothing about it requires a registered company. Freelancers, side-hustlers, tutors, babysitters, musicians, translators and people doing one-off consulting jobs send invoices in their own names every day. If you are new to the document itself, start with <a href="/blog/what-is-an-invoice">what an invoice is</a>.</p>
<p>What usually changes is the legal and tax status behind the invoice, not the invoice. In the US, someone working for themselves without forming an entity is generally a sole proprietor by default. In the UK, they are usually a sole trader. In both cases, you and the "business" are legally the same person, so your own name goes on the invoice.</p>

<h2>Individual vs registered business: what changes on the invoice</h2>
<table><thead><tr><th>Field</th><th>Individual (no business)</th><th>Registered business</th></tr></thead><tbody>
<tr><td>Seller name</td><td>Your full legal name</td><td>Company or trading name</td></tr>
<tr><td>Address</td><td>Your address or a mailing address</td><td>Registered or business address</td></tr>
<tr><td>Logo</td><td>Optional</td><td>Usually included</td></tr>
<tr><td>Tax ID</td><td>Often not shown; may be requested separately</td><td>EIN, VAT, GST or company number where required</td></tr>
<tr><td>Sales tax / VAT</td><td>Only if you are registered to charge it</td><td>Charged where registered and applicable</td></tr>
<tr><td>Bank account</td><td>Personal account is often fine; a separate one is better</td><td>Business account</td></tr>
</tbody></table>
<p>The rest (invoice number, dates, line items, totals and payment terms) is the same for everyone.</p>

<h2>How to invoice without a business in 7 steps</h2>
<h3>Step 1: Agree the price and terms first</h3>
<p>Confirm what you are doing, the fee and when payment is due, ideally by email. That written agreement is what your invoice will refer to.</p>
<h3>Step 2: Put your own name at the top</h3>
<p>Use your full legal name, with your email and phone number. Adding an address is standard and some clients require it for their records. If you would rather not share your home address, a mailing address or PO box may be an option where clients accept it.</p>
<h3>Step 3: Add the client's details</h3>
<p>Write the name of the person or company paying you, plus their address or email. If you are billing a company, use its legal name.</p>
<h3>Step 4: Give the invoice a number and dates</h3>
<p>Even as an individual, number your invoices sequentially, for example <code>001</code>, <code>002</code> or <code>2026-001</code>. Add the issue date and a due date. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide shows simple formats.</p>
<h3>Step 5: Describe the work and the amount</h3>
<p>Add one line per service with a description, quantity, rate and amount. Do not add sales tax or VAT unless you are registered to collect it.</p>
<h3>Step 6: Say how you want to be paid</h3>
<p>Add bank transfer details, a payment app handle or a payment link. Our guide to putting <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> explains what to include and what to keep private.</p>
<h3>Step 7: Send it as a PDF and keep a copy</h3>
<p>Download the invoice as a PDF, email it to the client and save a copy. Those copies are your income records at tax time.</p>

<h2>Example: invoice from an individual</h2>
<p>Maria Lopez, a part-time photographer with no business entity, invoices a local café for a menu photo shoot.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Menu photography: on-site shoot, 14 October 2026</td><td>3 hrs</td><td>$85.00</td><td>$255.00</td></tr>
<tr><td>Editing and retouching: 20 final images</td><td>20</td><td>$9.00</td><td>$180.00</td></tr>
<tr><td><strong>Total due by 5 November 2026</strong></td><td></td><td></td><td><strong>$435.00</strong></td></tr>
</tbody></table>
<p>The header reads "Maria Lopez" with her email and phone, the invoice number is <code>2026-004</code>, and the note says "Payment by bank transfer to the account below. Thank you!" There is no tax line because she is not registered to collect sales tax and the service is not taxable where she lives. That is all a professional invoice from an individual needs.</p>

<h2>Tax IDs and registration in the US</h2>
<p>In the US, you can generally start invoicing as a sole proprietor under your own name without registering anything federally. A few things to know:</p>
<ul>
<li><strong>W-9 and TIN:</strong> business clients may ask you to complete Form W-9 so they can report what they paid you. You can give your Social Security number, or apply for a free EIN from the IRS so you do not have to share your SSN. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a> explains the forms.</li>
<li><strong>Trading names:</strong> using a name other than your own (such as "Lopez Photo") usually requires a DBA or assumed-name filing with your state or county.</li>
<li><strong>Local licences:</strong> some cities and states require a general business licence even for sole proprietors.</li>
<li><strong>Taxes:</strong> net self-employment income is generally subject to income tax and self-employment tax. Keep records and consider quarterly estimated payments.</li>
</ul>
<p>If you do regular work for US companies, our <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> guide covers what their finance teams expect. The <a href="/invoice-generator/usa">USA invoice generator</a> is preset for US dollars and US tax fields.</p>

<h2>Tax and registration in the UK</h2>
<p>In the UK, individuals who earn more than £1,000 in a tax year from self-employment (the trading allowance) generally need to register as self-employed with HMRC and file a Self Assessment tax return. You only need to register for VAT if your taxable turnover goes above the VAT threshold, which is £90,000 as of 2026. Check HMRC for the current figure. If you are not VAT registered, do not show VAT or a VAT number on your invoices.</p>
<p>Our full guide to <a href="/blog/sole-trader-invoice-uk">invoicing as a UK sole trader</a> covers the details, and the <a href="/invoice-generator/uk">UK invoice generator</a> sets GBP and UK-style fields for you. Other countries have their own rules on registration and <a href="/blog/tax-id-on-invoice">tax IDs on invoices</a>, so check with your local tax authority.</p>

<h2>Practical tips for invoicing as an individual</h2>
<ul>
<li><strong>Open a separate bank account.</strong> It is not always required, but keeping invoice income apart from personal spending makes tax returns much easier.</li>
<li><strong>Keep a simple income log.</strong> Invoice number, client, amount, date sent and date paid is enough.</li>
<li><strong>Save receipts for costs.</strong> Equipment, software and travel for the work may be deductible.</li>
<li><strong>Set aside money for tax.</strong> Nobody withholds tax from your invoices, so put a share of each payment aside.</li>
<li><strong>Look professional anyway.</strong> A clean, consistent template signals you are reliable, even without a company behind you.</li>
</ul>

<h2>When to consider setting up a business</h2>
<p>Invoicing as an individual is perfectly fine for many people. You might consider forming an entity (such as an LLC in the US or a limited company in the UK) when your income grows, when you want to separate personal liability from business risk, or when clients prefer to contract with a company. These choices have tax and legal consequences, so talk to an accountant before deciding. Whatever you choose, the invoice format barely changes; see our <a href="/blog/freelance-invoice-template">freelance invoice template</a> guide for a layout that works at any stage.</p>

<h2>Create your first invoice as an individual</h2>
<p>You do not need a company to send a professional invoice. Open the <a href="/invoice-generator">invoice generator</a>, enter your own name and the client's details, add your services and payment details, and download a PDF. The understated <a href="/invoice-templates/mono">Mono invoice template</a> looks polished whether or not you have a logo.</p>
`,
  },
  {
    slug: "milestone-payments",
    title: "Milestone Payments: How Milestone Billing Works (With Examples)",
    description:
      "Learn how milestone payments work, how to split a project into billing stages, what each milestone invoice needs, and see worked milestone billing examples.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["deposit-invoice", "freelance-contract-template", "construction-invoice-guide"],
    faqs: [
      {
        q: "What are milestone payments?",
        a: "Milestone payments split the total price of a project into several payments that fall due when defined stages of work are completed and approved, rather than one payment at the end.",
      },
      {
        q: "How do you structure milestone payments?",
        a: "Divide the project into stages with clear deliverables, assign a percentage or fixed amount to each, and agree in writing what counts as completion. Many freelancers start with a deposit and end with a final payment on delivery.",
      },
      {
        q: "What is a typical milestone payment schedule?",
        a: "Common schedules include 50/50, 40/30/30 or 30/30/30/10 splits. The best split front-loads enough payment to cover your early work and keeps a final payment large enough to motivate sign-off.",
      },
      {
        q: "What happens if a client does not approve a milestone?",
        a: "Your agreement should say how long the client has to review a milestone and what happens if they stay silent, for example deemed approval after 5 business days. This prevents projects stalling at one stage.",
      },
      {
        q: "Is milestone billing the same as progress billing?",
        a: "They are similar. Milestone billing ties payments to defined deliverables, while progress billing, common in construction, usually bills a percentage of work completed in each period.",
      },
      {
        q: "Should the first milestone payment be due before work starts?",
        a: "In most cases, yes. Making the first milestone a deposit paid before you begin, often 25% to 50%, confirms the client is committed and covers your early work. Present it as standard practice rather than a sign of distrust. If a large client cannot pay in advance, make the first milestone small and early, such as on delivery of an initial plan within the first week.",
      },
      {
        q: "Can I change milestone amounts in the middle of a project?",
        a: "Only if both sides agree in writing. If the scope grows, add a change request with its own price rather than quietly increasing a later milestone. If the client wants to re-split the payments, record the new schedule in an email or contract amendment and update the running total in the notes of each later invoice. That keeps the paper trail clear if there is a dispute.",
      },
      {
        q: "How do milestone payments work on freelance platforms such as Upwork?",
        a: "On fixed-price contracts, Upwork lets clients split the project into milestones and fund each one into escrow before you start that stage. When you submit the work, the client approves it and the funds are released to you, subject to the platform's review rules and fees. Platform procedures and charges change, so check the platform's current help pages. Off-platform work needs your own written milestone schedule.",
      },
      {
        q: "How is tax handled on milestone payments?",
        a: "Each milestone invoice is normally treated as its own taxable event. If you are registered for VAT, GST or sales tax, you generally charge tax on each milestone invoice at the rate that applies at that time, and tax may become due when you invoice or receive payment, depending on local rules. For income tax, timing depends on your accounting method. Ask your accountant how this applies to you.",
      },
      {
        q: "What is retainage in milestone billing?",
        a: "Retainage, also called retention, is a percentage of each payment that the client holds back until the whole project is finished and accepted, often around 5% to 10%. It is most common in construction and large contracts. If a client asks for it, agree the percentage and the release date in writing, and show the retained amount as a separate deduction on each invoice so the balance is clear.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Milestone payments divide a project's total fee into several payments, each due when a defined stage of work is completed and approved. Instead of waiting until the end to be paid, you invoice at each milestone, for example 30% upfront, 40% on design approval and 30% on final delivery. Milestone billing protects your cash flow and gives the client clear checkpoints.</p>

<p>This guide explains how milestone billing works, how to choose milestones and percentages, what each milestone invoice should show, and two worked examples. You can produce every milestone invoice in our <a href="/invoice-generator">free invoice generator</a> and download each one as a PDF.</p>

<h2>What are milestone payments?</h2>
<p>A milestone is a point in a project where a meaningful piece of work is finished: a wireframe set, a first draft, a working prototype, a site launch. With milestone payments, each of these points triggers an invoice for an agreed share of the total fee.</p>
<p>The approach is common in freelance design, development, writing, consulting, video production and other project work that runs for several weeks or months. It sits between two extremes: full payment upfront, which many clients resist, and full payment on completion, which leaves you financing the entire project yourself.</p>
<p>Milestones can be expressed as percentages of a fixed fee, as fixed amounts, or, on time-and-materials work, as a cap on the hours billed for each stage. Whichever you use, each milestone needs three things: a deliverable both sides can recognise, an approval step, and an amount. When those are written down, milestone billing becomes routine rather than a negotiation each time.</p>

<h2>Why milestone billing works for both sides</h2>
<table><thead><tr><th>For the freelancer</th><th>For the client</th></tr></thead><tbody>
<tr><td>Steady cash flow during long projects</td><td>Pays only for progress they can see</td></tr>
<tr><td>Less money at risk if the client stops paying</td><td>Can stop or change direction at a defined checkpoint</td></tr>
<tr><td>Formal approval at each stage reduces late changes</td><td>Easier to budget and approve in stages</td></tr>
<tr><td>Early warning if the client is slow to pay</td><td>Clear evidence of what each payment bought</td></tr>
</tbody></table>
<p>The key benefit for you is limiting exposure. If a client disappears after milestone two, you have been paid for the first two stages instead of nothing.</p>

<h2>How to set up milestone payments in 5 steps</h2>
<ol>
<li><strong>Break the project into stages.</strong> Choose three to five natural checkpoints where a deliverable can be reviewed. Too many milestones means too much admin; too few defeats the purpose.</li>
<li><strong>Define "complete" for each milestone.</strong> Write the deliverable and the approval method, for example "Homepage and two inner page designs delivered as Figma files; approved by email."</li>
<li><strong>Assign amounts.</strong> Use percentages or fixed amounts that roughly match the effort in each stage, with a deposit at the start if possible.</li>
<li><strong>Agree review periods.</strong> Give the client a set number of days to approve or request changes, and say what happens if they do not respond.</li>
<li><strong>Put it in writing.</strong> Add the milestone schedule to your agreement. Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide covers the payment-schedule clause.</li>
</ol>
<p>If you are still working out the total fee, see <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> first, then split the result into milestones.</p>

<h2>Common milestone payment schedules</h2>
<table><thead><tr><th>Schedule</th><th>Split</th><th>Best for</th></tr></thead><tbody>
<tr><td>50/50</td><td>50% upfront, 50% on delivery</td><td>Short projects of 2 to 4 weeks</td></tr>
<tr><td>40/30/30</td><td>Deposit, midpoint approval, final delivery</td><td>Most freelance projects of 1 to 3 months</td></tr>
<tr><td>30/30/30/10</td><td>Deposit, two stage approvals, final 10% after launch or handover</td><td>Larger builds with a launch or testing phase</td></tr>
<tr><td>Monthly milestones</td><td>A fixed share each month tied to monthly deliverables</td><td>Long engagements of 3 months or more</td></tr>
</tbody></table>
<p>The opening payment is often invoiced as a deposit; our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how to word it. For ongoing work without a defined end, a <a href="/blog/retainer-invoice">retainer invoice</a> may suit better than milestones.</p>

<h2>Milestone billing example: website project</h2>
<p>A freelance web designer agrees a fixed fee of $8,000 for a small business website, billed 30/40/30.</p>
<table><thead><tr><th>Milestone</th><th>Deliverable</th><th>Share</th><th>Invoice amount</th></tr></thead><tbody>
<tr><td>1. Project start</td><td>Signed agreement and kickoff call</td><td>30%</td><td>$2,400.00</td></tr>
<tr><td>2. Design approval</td><td>Homepage and 4 inner page designs approved</td><td>40%</td><td>$3,200.00</td></tr>
<tr><td>3. Launch</td><td>Site built, tested and live</td><td>30%</td><td>$2,400.00</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>100%</strong></td><td><strong>$8,000.00</strong></td></tr>
</tbody></table>
<p>The second invoice might look like this:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Milestone 2 of 3: design approval (40% of $8,000 fixed fee), approved 9 October 2026</td><td>1</td><td>$3,200.00</td><td>$3,200.00</td></tr>
<tr><td><strong>Total due by 23 October 2026</strong></td><td></td><td></td><td><strong>$3,200.00</strong></td></tr>
</tbody></table>
<p>A notes line adds: "Project total $8,000.00. Paid to date $2,400.00. This invoice $3,200.00. Remaining after this invoice $2,400.00." That running summary stops anyone wondering how much is left.</p>

<h2>Milestone billing example: content project with a change request</h2>
<p>A writer agrees $4,500 for a 12-article content series, billed in three equal milestones of $1,500 (four articles each). During milestone two, the client approves one extra article at the per-article rate of $375. The milestone 2 invoice shows two lines: "Milestone 2 of 3: articles 5–8 delivered and approved" at $1,500.00, and "Change request: additional article (approved 2 October)" at $375.00, for a total of $1,875.00. Keeping the change on its own line protects the original schedule and makes the extra charge easy to approve. The milestone 3 invoice then returns to the agreed $1,500.00, and the project total becomes $4,875.00 ($4,500.00 plus the $375.00 change). Recording the new total in the notes of each later invoice keeps both sides working from the same figure and avoids confusion when the final payment falls due.</p>

<h2>What to put on each milestone invoice</h2>
<ul>
<li>The milestone number and name, for example "Milestone 2 of 3: design approval".</li>
<li>The percentage or fixed share and the total project fee.</li>
<li>The approval date or reference to the client's sign-off.</li>
<li>A running total: paid to date, this invoice, remaining balance.</li>
<li>Any change requests as separate lines.</li>
<li>The project or agreement reference and a calendar due date.</li>
</ul>
<p>Give each milestone invoice its own number in your normal sequence; see our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide. Shorter due periods such as Net 7 or Net 14 work well for milestones, and <a href="/blog/invoice-payment-terms">invoice payment terms explained</a> compares the options. More sample layouts are in our <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>Milestone payments vs progress billing and estimates</h2>
<p>Milestone billing is closely related to progress billing, which construction contractors use to bill a percentage of work completed each period, often with retainage held back. If you work in trades, our <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers progress billing in detail. Also keep in mind that the milestone schedule usually starts life in a quote or estimate; our explainer on <a href="/blog/invoice-vs-estimate">invoices vs estimates</a> shows where one ends and the other begins.</p>

<h2>Tips to keep milestone billing on track</h2>
<ul>
<li>Do not start the next milestone until the previous invoice is paid, unless you have agreed otherwise.</li>
<li>Invoice the day a milestone is approved, not at month-end.</li>
<li>Keep the final payment meaningful, but not so large that a late payer leaves you badly exposed.</li>
<li>Confirm approvals in writing, even if the client approved on a call.</li>
<li>Agree what happens if the client pauses the project mid-milestone, such as billing the completed share of that stage.</li>
<li>Keep milestone dates realistic. If a client's feedback is late, say in writing that later milestone dates move by the same amount.</li>
</ul>
<p>Watch for the warning signs too. A client who is slow to approve milestone one and slow to pay its invoice is likely to be slow at every stage that follows. Raise it early, politely and in writing, while the amount at risk is still small. If a milestone invoice does go overdue, pausing work on the next stage is usually the most effective (and the fairest) lever you have, provided your agreement allows it.</p>

<h2>Send your first milestone invoice</h2>
<p>Set out your milestone schedule, then open the <a href="/invoice-generator">invoice generator</a> to create the invoice for the first stage, with the milestone name, share of the fee and running total in the notes. The <a href="/invoice-templates/startup">Startup invoice template</a> presents milestone payments clearly for tech and product clients.</p>
`,
  },
  {
    slug: "how-to-ask-for-payment",
    title: "How to Ask for Payment Politely: Scripts and Email Examples",
    description:
      "Learn how to ask for payment politely and professionally, with ready-to-use scripts for emails, calls and messages at every stage, from before work to overdue.",
    category: "freelancing",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["payment-reminder-emails", "client-not-paying-invoice", "how-to-get-paid-faster"],
    faqs: [
      {
        q: "How do you politely ask for payment?",
        a: "Be brief, friendly and specific: mention the invoice number, amount and due date, attach the invoice, and ask a clear question such as when payment is scheduled. Avoid apologising or guessing at the reason for the delay.",
      },
      {
        q: "How do you ask for payment without sounding rude?",
        a: "Assume good faith, keep the tone neutral and make it easy to pay by including a payment link or bank details. Stating facts, such as 'invoice 0142 was due on 3 November', never sounds rude.",
      },
      {
        q: "How do you ask a friend or family member for payment?",
        a: "Treat it like any client: send a proper invoice, agree a due date in advance and follow up with a short, friendly message. Clear paperwork actually protects the relationship.",
      },
      {
        q: "When should I ask for payment?",
        a: "Ask for payment as soon as the work is delivered or a milestone is approved by sending the invoice, then send a friendly reminder shortly before the due date and a follow-up the day after it passes.",
      },
      {
        q: "Is it OK to ask for payment upfront?",
        a: "Yes. Asking for a deposit or full payment upfront is normal, especially for new clients or small jobs. Present it as your standard policy rather than a special condition.",
      },
      {
        q: "What subject line should I use when asking for payment by email?",
        a: "Keep it factual and easy to search: include the invoice number, the amount and the status. For example, 'Invoice INV-2026-072 for $2,850.00, due 14 November' before the due date, or 'Overdue: Invoice INV-2026-072, due 14 November' afterwards. Avoid vague subjects like 'Quick question' or alarming ones in capital letters. A clear subject helps the right person find and process the email quickly.",
      },
      {
        q: "Is it OK to ask for payment by text message or WhatsApp?",
        a: "For small clients and individuals, a short, friendly message is often fine and can get a faster reply. For business clients, use email for the main request, because accounts teams work from inboxes and need a written record. If you do message someone, keep it brief, mention the invoice number and amount, and follow up by email so the request is documented.",
      },
      {
        q: "How do I ask for a partial payment when the full amount is late?",
        a: "Ask for the undisputed or affordable part now and agree dates for the rest. For example: 'Could you pay $1,000 this week, with the remaining $1,850 by 30 November?' Confirm the plan in writing, acknowledge each payment as it arrives, and show the amount paid and balance due on any updated invoice or statement. A partial payment now is usually better than waiting for the full sum.",
      },
      {
        q: "How do I ask for payment when I sent the invoice late?",
        a: "Send it now, without a long apology. A short line such as 'Apologies for the delay in sending this' is enough. Give the client a fair due date from the date you actually send it, rather than backdating the deadline, and follow your normal reminder schedule from there. Then set yourself a habit of invoicing on delivery so it does not happen again.",
      },
      {
        q: "What should I do if my contact stops replying to payment requests?",
        a: "Try a different route before escalating. Call them, or email their accounts payable team or a more senior contact, politely explaining that you have not been able to reach your usual contact about the invoice, quoting its number. Keep copies of every attempt. If nobody responds after a final notice with a firm date, move to the formal steps in your collection process, such as a demand letter.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To ask for payment politely, be brief, friendly and specific. Reference the invoice number, amount and due date, attach the invoice or a payment link, and ask one clear question such as "Could you let me know when this is scheduled for payment?" Keep the tone neutral, assume good faith and never apologise for asking to be paid for work you have done.</p>

<p>This guide gives you a framework for asking for payment, word-for-word scripts for emails, phone calls and messages at each stage, and phrases to use or avoid. A clear invoice from our <a href="/invoice-generator">free invoice generator</a> makes every one of these conversations easier, because the facts are already on the page.</p>

<h2>Why asking for payment feels awkward (and why it should not)</h2>
<p>Many freelancers and small business owners feel uncomfortable asking for money. They worry about seeming pushy, damaging a relationship or implying the client is untrustworthy. In practice, most clients pay late because of process, not intent: an invoice is stuck awaiting approval, sent to the wrong person, or simply forgotten. A polite request is usually welcomed, because it solves a problem the client did not know they had.</p>
<p>It helps to remember that you are not asking for a favour. You delivered agreed work at an agreed price, and payment is the other half of that agreement. Professional clients expect to be invoiced and reminded.</p>

<h2>The 4-part formula for a polite payment request</h2>
<ol>
<li><strong>A friendly opener:</strong> one short line, such as "I hope the launch went well."</li>
<li><strong>The facts:</strong> invoice number, amount, due date.</li>
<li><strong>Make it easy:</strong> attach the PDF and include a payment link or bank details.</li>
<li><strong>A clear ask:</strong> one question or request, for example a payment date.</li>
</ol>
<p>That is the whole structure. Short requests get answered; long, apologetic ones get skimmed. Adding a pay-now button to the invoice removes another step; see how to <a href="/blog/add-payment-link-to-invoice">add a payment link to an invoice</a>.</p>

<h2>How to ask for payment politely at each stage</h2>
<p>The right tone shifts as time passes. Here is a quick map:</p>
<table><thead><tr><th>Stage</th><th>Tone</th><th>Channel</th><th>Main goal</th></tr></thead><tbody>
<tr><td>Before work starts</td><td>Matter-of-fact</td><td>Proposal or email</td><td>Agree terms and any deposit</td></tr>
<tr><td>Sending the invoice</td><td>Warm</td><td>Email</td><td>Deliver the invoice to the right person</td></tr>
<tr><td>A few days before due</td><td>Friendly</td><td>Email</td><td>Catch problems early</td></tr>
<tr><td>Just overdue</td><td>Neutral</td><td>Email</td><td>Get a payment date</td></tr>
<tr><td>1–2 weeks overdue</td><td>Direct</td><td>Phone, then email</td><td>Find and remove the blocker</td></tr>
<tr><td>30+ days overdue</td><td>Firm</td><td>Email or letter</td><td>Set a final deadline</td></tr>
</tbody></table>

<h3>Before work starts: asking for a deposit</h3>
<blockquote>Thanks for confirming the project. As with all new projects, I take a 40% deposit before starting. I have attached invoice INV-2026-061 for $1,200.00; once it is paid, I will book in the kickoff for next week.</blockquote>
<p>Framing the deposit as standard policy removes any sense that you are singling the client out.</p>

<h3>When you send the invoice</h3>
<blockquote>Hi Sam, thanks again for a great project. Attached is invoice INV-2026-072 for $2,850.00, due on 14 November 2026. You can pay by bank transfer or card using the link on the invoice. Let me know if your team needs anything else to process it.</blockquote>
<p>Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> covers subject lines, file names and who to address.</p>

<h3>A few days before the due date</h3>
<blockquote>Hi Sam, a quick heads-up that invoice INV-2026-072 for $2,850.00 is due this Friday, 14 November. Is everything in order on your side?</blockquote>

<h3>The day after it becomes overdue</h3>
<blockquote>Hi Sam, I have not yet seen payment for invoice INV-2026-072 ($2,850.00), which was due yesterday. I have attached it again for convenience. Could you let me know when it is scheduled for payment?</blockquote>
<p>If you need to explain the dates on the invoice, our guide to the <a href="/blog/invoice-due-date">invoice due date</a> clears up the difference between invoice date and due date.</p>

<h3>One to two weeks overdue: the phone call</h3>
<p>A short call is often the fastest way forward. A simple script:</p>
<blockquote>Hi Sam, it is Alex. I am calling about invoice 072 from October. I wanted to check it reached the right person and whether anything is holding it up. ... Great, so I can expect it by next Wednesday? I will send a quick email to confirm.</blockquote>
<p>Always follow a call with an email recording what was agreed.</p>

<h3>30 days or more overdue: a firm, polite request</h3>
<blockquote>Hi Sam, invoice INV-2026-072 for $2,850.00 is now 30 days overdue. Under our agreement, a late fee of 1.5% per month applies to overdue balances. Please arrange payment by 21 December 2026. If there is a problem with the invoice, let me know today so we can resolve it.</blockquote>
<p>Only mention late fees you agreed in advance; see <a href="/blog/late-payment-fees">how to charge late payment fees</a>. If even this gets no response, follow our plan for when a <a href="/blog/client-not-paying-invoice">client is not paying an invoice</a>, and see how to handle an <a href="/blog/overdue-invoice">overdue invoice</a> for the follow-up schedule.</p>

<h2>Polite phrases to use and phrases to avoid</h2>
<table><thead><tr><th>Use</th><th>Avoid</th></tr></thead><tbody>
<tr><td>"Could you let me know when this is scheduled for payment?"</td><td>"Sorry to bother you, but..."</td></tr>
<tr><td>"I have attached the invoice again for convenience."</td><td>"You still have not paid."</td></tr>
<tr><td>"Is there anything you need from me to process this?"</td><td>"I really need this money."</td></tr>
<tr><td>"As agreed, payment was due on 14 November."</td><td>"Whenever you get a chance."</td></tr>
<tr><td>"Please arrange payment by 21 December."</td><td>"This is completely unacceptable!"</td></tr>
</tbody></table>
<p>The aim is facts plus a clear next step. "Whenever you get a chance" sounds polite but tells the client the invoice is not a priority.</p>

<h2>Asking friends, family and small clients for payment</h2>
<p>Working for people you know makes money conversations harder. The fix is to be more formal, not less: agree the price in writing, send a proper invoice with a due date and follow up in the same way as any client. A short text can work for a small job:</p>
<blockquote>Hi Jo, just sending over the invoice for the garden design: $350, due by the 30th. Bank details are on it. Thanks so much!</blockquote>
<p>Clear paperwork prevents the awkward "I thought it was a favour" conversation later.</p>

<h2>Make it easier to get paid in the first place</h2>
<p>The best way to ask for payment politely is to need to ask less often. A few habits do most of the work:</p>
<ul>
<li>Agree payment terms and a deposit before you start.</li>
<li>Bill larger projects in stages using <a href="/blog/milestone-payments">milestone payments</a>.</li>
<li>Invoice on the day work is delivered.</li>
<li>Put bank details and a payment link on every invoice.</li>
<li>Schedule reminders in advance so you never forget to follow up.</li>
</ul>
<p>For more ideas, read <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>, and for a full set of follow-up emails see our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</p>

<h2>How to respond when the client replies</h2>
<p>A polite request usually gets one of a few replies. Have your answer ready:</p>
<ul>
<li><strong>"It is with accounts payable."</strong> Ask for the AP contact's email and the date of their next payment run, then follow up with them directly.</li>
<li><strong>"We need a PO number" or "the details are wrong."</strong> Reissue the invoice promptly with the correction and the same invoice number if nothing else changes, or follow your normal correction process.</li>
<li><strong>"We are not happy with part of the work."</strong> Thank them for raising it, ask for specifics in writing and suggest a quick call. Offer to fix the issue, but ask for the undisputed part of the invoice to be paid now.</li>
<li><strong>"Cash is tight this month."</strong> Propose a short payment plan with fixed dates and confirm it in writing.</li>
<li><strong>No reply at all.</strong> Move to the next stage of your schedule rather than repeating the same email.</li>
</ul>
<p>Whatever the response, stay courteous and keep a record. Calm, consistent follow-up resolves most late payments without any damage to the relationship.</p>

<h2>Send a clear invoice before you ask</h2>
<p>Every polite payment request starts with an invoice that is easy to approve. Create yours in the <a href="/invoice-generator">invoice generator</a> with a clear due date, itemized lines and payment details, then use the scripts above to follow up. The <a href="/invoice-templates/elegant">Elegant invoice template</a> keeps the tone as courteous as your emails.</p>
`,
  },
];
