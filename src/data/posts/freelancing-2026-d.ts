import type { PostDraft } from "../blog";

export const FREELANCING_2026_D_POSTS: PostDraft[] = [
  {
    slug: "value-based-pricing",
    title: "Value-Based Pricing for Freelancers: How to Set Fees",
    description:
      "Value-based pricing explained for freelancers and consultants: how to measure client value, set a fee, compare hourly vs project pricing, with a worked example.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-set-freelance-rates", "how-to-raise-prices", "freelance-proposal-template"],
    faqs: [
      {
        q: "What is value-based pricing in simple terms?",
        a: "Value-based pricing means setting your fee based on what the result is worth to the client, not on how many hours it takes you. If a new checkout page is likely to bring a client an extra $60,000 a year, a fee of $9,000 can be fair even if the work takes 30 hours. You still need a floor based on your costs and time, but the ceiling comes from the client's expected gain, savings or reduced risk.",
      },
      {
        q: "How do I calculate a value-based price?",
        a: "Start by estimating the measurable value of the outcome over a sensible period, usually one year. Use the client's own numbers where you can: revenue per customer, conversion rate, hours saved, cost of errors. Then pick a share of that value, commonly somewhere around 10% to 25%, and check it against your minimum project fee. If the share is below your floor, either reshape the scope or quote your floor. Always present the value estimate alongside the fee.",
      },
      {
        q: "Is value-based pricing better than hourly pricing?",
        a: "It is better when your work has a clear, measurable business outcome and you can deliver it efficiently. It rewards expertise and speed, while hourly billing penalises both. Hourly pricing is still the safer choice when scope is vague, when the client keeps changing direction, or when the work is ongoing support with no single outcome. Many freelancers use both: hourly or day rates for open-ended work and value-based fees for defined projects.",
      },
      {
        q: "What percentage of value should a freelancer charge?",
        a: "There is no official percentage. Many consultants aim for a fee that gives the client a clear return, often a 5x to 10x return on the fee, which works out at roughly 10% to 20% of first-year value. The right share depends on how confident you are in the estimate, how much of the result depends on you versus the client, and how much risk the client is taking. Lower confidence means a lower share.",
      },
      {
        q: "Can beginners use value-based pricing?",
        a: "Yes, but carefully. Value-based pricing depends on understanding the client's business and showing evidence that you can deliver. A beginner without case studies may struggle to justify a fee much above market rates. A practical path is to start with fixed project prices based on your time, collect results from each project, and then move clients toward value-based fees once you can point to measurable outcomes such as leads, sales or hours saved.",
      },
      {
        q: "How do I find out what a project is worth to the client?",
        a: "Ask during the discovery call. Useful questions include: what happens if this is not fixed, what does a new customer spend with you in a year, how many hours does your team spend on this each month, and how will you measure success. Write down the numbers the client gives you. If they will not share figures, use conservative public benchmarks and say clearly that your estimate is an assumption the client can correct.",
      },
      {
        q: "Should I show my value calculation in the proposal?",
        a: "Usually, yes. A short value summary makes the fee feel reasonable because the client sees the return before the price. Keep it simple: the problem, the expected outcome, the estimated value in their own numbers, and the investment. Avoid promising a guaranteed result unless you control it. Phrase it as an estimate based on the figures they shared, and offer two or three options so the conversation is about which option, not whether to buy.",
      },
      {
        q: "How do I invoice a value-based project?",
        a: "Invoice by milestone or deliverable rather than by hours. A common structure is a deposit of 30% to 50% before work starts, a middle payment at an agreed milestone, and the balance on delivery. Each invoice should describe the deliverable, reference the proposal or purchase order, and state payment terms. Line items such as 'Website conversion project, phase 1 of 3' are clearer than an hours total for this kind of work.",
      },
      {
        q: "What if the client says the value-based price is too high?",
        a: "Do not drop the price for the same scope. Instead, remove scope or change terms: offer a smaller first phase, fewer revisions, a longer timeline, or a version without optional extras. Ask which part of the value estimate they disagree with, because that tells you whether the issue is budget or belief. If they simply cannot afford it, a smaller paid diagnostic project is often a better result than a discounted full project.",
      },
    ],
    content: `<p><strong>Value-based pricing</strong> means charging a fee based on the financial value your work creates for the client, rather than the hours it takes you. You estimate the gain, savings or reduced risk the project delivers, charge a fair share of it, and make sure that share is never below your own cost floor.</p>

<p>For freelancers and consultants, this is the main way to break the link between income and hours. This guide covers how value pricing for freelancers works, when it fits and when it does not, how to compare hourly vs project vs value fees, and a full worked example you can adapt. If you have not yet worked out your baseline numbers, read <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> first, because your hourly floor still matters.</p>

<h2>What Value-Based Pricing Actually Means</h2>

<p>Every freelance fee answers one question: what is this worth? Hourly billing answers it from your side (your time multiplied by a rate). Value-based pricing answers it from the client's side (the outcome multiplied by a share). The client is not buying your hours. They are buying more leads, a faster process, fewer errors or a launch that hits a deadline.</p>

<p>Three things make value-based pricing work:</p>

<ul>
<li><strong>A measurable outcome.</strong> Revenue, cost savings, time saved, or a risk that has a known price (a fine, a lost contract, downtime).</li>
<li><strong>A client who shares numbers.</strong> You need at least rough figures such as average order value, monthly leads or staff hours spent on a task.</li>
<li><strong>A defined scope.</strong> The client is paying for a result tied to specific deliverables, so you need a clear <a href="/blog/statement-of-work-template">statement of work</a> to prevent the project growing without the fee growing.</li>
</ul>

<p>Without these, you are guessing, and a guessed value fee is just an expensive fixed price.</p>

<h2>Hourly vs Project vs Value: How the Three Models Compare</h2>

<p>Most freelancers move through three pricing models over a career. Each has a place. The table below compares them on the points that matter most day to day.</p>

<table>
<thead>
<tr><th>Model</th><th>How the fee is set</th><th>Who carries the risk</th><th>Best for</th><th>Main drawback</th></tr>
</thead>
<tbody>
<tr><td>Hourly or day rate</td><td>Hours worked × rate</td><td>Client (pays for overruns)</td><td>Open-ended support, unclear scope, ongoing retainers</td><td>Income capped by hours; getting faster lowers your pay</td></tr>
<tr><td>Fixed project price</td><td>Estimated hours × rate + buffer</td><td>Freelancer (absorbs overruns)</td><td>Well-defined deliverables you have done before</td><td>Still anchored to time, so the price ignores the outcome</td></tr>
<tr><td>Value-based pricing</td><td>Share of expected client value, checked against your floor</td><td>Shared; scope must be tight</td><td>Projects with a clear business result and a client who shares data</td><td>Needs discovery work and trust; harder to apply to small jobs</td></tr>
</tbody>
</table>

<p>If you bill by the hour today, our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers that model well. The rest of this article focuses on moving defined projects to value pricing.</p>

<h2>How to Calculate a Value-Based Price, Step by Step</h2>

<p>The process below works for most service businesses, from web design and copywriting to bookkeeping and IT consulting.</p>

<ol>
<li><strong>Find the business problem.</strong> Ask what is not working and what it costs. "Our site looks dated" is a symptom. "Our checkout loses half the people who start it" is a problem with a price.</li>
<li><strong>Quantify the outcome.</strong> Use the client's numbers: extra sales, hours saved, errors avoided. Work out the value over one year unless the benefit clearly lasts longer.</li>
<li><strong>Discount for uncertainty.</strong> Not every project hits its best case. Use a conservative scenario, or multiply the best case by a probability you are comfortable defending.</li>
<li><strong>Pick a share.</strong> Many consultants aim for the client to see a 5x to 10x return on the fee, which is roughly 10% to 20% of first-year value. There is no official rule; choose a share you can explain.</li>
<li><strong>Check your floor.</strong> Estimate the hours and multiply by your minimum effective rate. If the value fee is below that floor, the project is either too small for value pricing or needs a different scope.</li>
<li><strong>Build options.</strong> Offer two or three packages at different levels of scope and price, so the client chooses between yeses.</li>
<li><strong>Present value before price.</strong> In the proposal, restate the problem, the outcome and the estimated value, then the investment.</li>
</ol>

<p>A clear proposal does most of the selling. Our <a href="/blog/freelance-proposal-template">freelance proposal template</a> has a structure that puts the outcome before the fee.</p>

<h2>Worked Example: Value-Based Pricing for a Checkout Redesign</h2>

<p>Here is a realistic example with simple numbers. A small online shop asks a freelance UX designer to improve its checkout.</p>

<h3>The client's numbers</h3>

<ul>
<li>Monthly visitors who start checkout: 4,000</li>
<li>Current checkout completion rate: 50% (2,000 orders a month)</li>
<li>Average order value: $60</li>
<li>Gross margin on each order: 40%, so $24 profit per order</li>
</ul>

<h3>The expected outcome</h3>

<p>Based on the problems found in a short audit, the designer expects a realistic improvement of 5 percentage points, from 50% to 55% completion. That is 200 extra orders a month.</p>

<ul>
<li>Extra orders a year: 200 × 12 = 2,400</li>
<li>Extra gross profit a year: 2,400 × $24 = $57,600</li>
</ul>

<h3>Discount for uncertainty</h3>

<p>The designer is fairly confident but not certain, so they use 70% of that figure as the planning value: $57,600 × 0.7 = $40,320.</p>

<h3>Choose a share and check the floor</h3>

<p>Taking about 20% of planning value gives a fee of roughly $8,000. The designer estimates 40 hours of work. At a minimum effective rate of $90 an hour, the floor is $3,600. The value fee clears the floor comfortably, giving an effective rate of $200 an hour if the estimate of hours is right.</p>

<h3>The three options</h3>

<table>
<thead>
<tr><th>Option</th><th>Scope</th><th>Fee</th><th>Client's estimated first-year return</th></tr>
</thead>
<tbody>
<tr><td>Audit only</td><td>Checkout review with prioritised fix list; client's team builds it</td><td>$2,500</td><td>Depends on client's execution</td></tr>
<tr><td>Redesign</td><td>Audit, redesigned checkout flow, handover to developer</td><td>$8,000</td><td>About $40,000 planning value (5x)</td></tr>
<tr><td>Redesign plus testing</td><td>Everything above plus two rounds of A/B testing and refinements over 60 days</td><td>$12,000</td><td>Higher confidence in the full $57,600</td></tr>
</tbody>
</table>

<p>Most clients pick the middle option. The audit gives a budget-conscious client a way in, and the top option lets a confident client buy more certainty. Notice that none of the prices are explained by hours.</p>

<h2>Discovery Questions That Reveal Value</h2>

<p>Value-based pricing lives or dies in the discovery call. You cannot price an outcome you do not understand. These questions work in most industries:</p>

<ul>
<li>What made you look for help now rather than six months ago?</li>
<li>If this project goes perfectly, what changes in your business in a year?</li>
<li>How do you measure that today? What is the current number?</li>
<li>What does a typical customer spend with you in a year?</li>
<li>How many hours a month does your team spend on this problem?</li>
<li>What happens if you do nothing?</li>
<li>Who else is involved in the decision, and what do they care about?</li>
</ul>

<p>Write the answers down and reuse the client's exact words in your proposal. A client who hears their own numbers back is far less likely to argue with the conclusion.</p>

<h2>When Value-Based Pricing Does Not Fit</h2>

<p>Value pricing for consultants and freelancers is powerful, but it is not universal. Stick to hourly, day-rate or fixed pricing when:</p>

<ul>
<li><strong>The value cannot be measured.</strong> Some creative work, internal documentation or brand refreshes have real value that clients cannot or will not put a number on.</li>
<li><strong>The job is small.</strong> If the whole project is a few hundred dollars, a discovery process costs more than it earns.</li>
<li><strong>The scope keeps moving.</strong> If the client cannot say what done looks like, a value fee becomes a fixed fee with unlimited revisions. Use a <a href="/blog/scope-creep-change-order">change order process</a> or bill by the hour.</li>
<li><strong>You do not control the result.</strong> If success depends mostly on the client's sales team or ad budget, price lower or price only the parts you control.</li>
<li><strong>The client buys on price alone.</strong> Procurement teams comparing three quotes on cost are not looking for a value conversation.</li>
</ul>

<h2>How to Present and Defend a Value-Based Price</h2>

<p>Clients rarely object to the logic of value-based pricing. They object to surprises. Keep the presentation simple and honest:</p>

<ol>
<li>Restate the problem in their words.</li>
<li>Show the estimated value with the assumptions labelled. ("Based on 4,000 checkout starts a month and $24 profit per order, which you shared.")</li>
<li>Show the options and what each includes.</li>
<li>State terms: deposit, milestones, timeline, number of revision rounds.</li>
</ol>

<p>If the client pushes back, change scope or terms, not the price for the same scope. Our guide on <a href="/blog/how-to-negotiate-freelance-rates">how to negotiate freelance rates</a> has scripts for this, and if you are moving existing clients over from hourly billing, the advice in <a href="/blog/how-to-raise-prices">how to raise prices</a> applies.</p>

<h2>Invoicing a Value-Based Project</h2>

<p>Value fees are usually invoiced by milestone, not by time. A common structure is:</p>

<ul>
<li><strong>Deposit:</strong> 30% to 50% before work starts. A <a href="/blog/deposit-invoice">deposit invoice</a> confirms commitment and covers your early hours.</li>
<li><strong>Milestone payment:</strong> an agreed share when a defined deliverable is approved. See how to set these up in our guide to <a href="/blog/milestone-payments">milestone payments</a>.</li>
<li><strong>Final balance:</strong> on delivery or handover.</li>
</ul>

<p>Describe each line by deliverable, such as "Checkout redesign, phase 2 of 3: approved wireframes", and reference the proposal or purchase order number. Do not list hours on a value-based invoice unless the contract requires it; showing hours invites the client to judge the fee by time again.</p>

<p>Using the worked example above, an $8,000 project with a 40/30/30 split would be invoiced as $3,200 up front, $2,400 at wireframe approval and $2,400 at handover. In the free invoice generator you can enter each milestone as a line item, record the amount already paid so the balance due is shown correctly, and add the proposal reference as a PO number. Clean designs such as the <a href="/invoice-templates/agency">agency invoice template</a> suit project billing.</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
<li><strong>Inventing the value.</strong> If the client did not give you the numbers, say your estimate is an assumption and invite correction.</li>
<li><strong>Taking too big a share.</strong> A fee equal to half the client's expected gain leaves them little reason to buy.</li>
<li><strong>Leaving scope vague.</strong> Value-based pricing with open scope is the fastest route to unpaid work.</li>
<li><strong>Guaranteeing outcomes you do not control.</strong> Promise deliverables and a process, not a sales figure.</li>
<li><strong>Abandoning your floor.</strong> Always know your minimum effective rate so a "value" project never pays less than your time is worth.</li>
<li><strong>Never checking the results.</strong> Ask the client for the real numbers three to six months after delivery. Actual results make your next estimate more credible and, with permission, give you case studies to quote in future proposals.</li>
</ul>

<p>Track your effective hourly rate on every value-priced project as well. If a few projects in a row land below your floor, your hour estimates or your share of value need adjusting before the next quote goes out.</p>

<h2>Conclusion</h2>

<p>Value-based pricing lets you charge for outcomes instead of hours, which rewards expertise and speed instead of punishing them. Start with one defined project, ask good discovery questions, build three options, and keep your cost floor in view. For more on running a sustainable practice, browse the <a href="/blog/category/freelancing">freelancing guides</a>. When the client says yes, create the deposit invoice in the <a href="/invoice-generator">invoice generator</a> and get the project started.</p>`,
  },
  {
    slug: "client-onboarding-checklist",
    title: "Client Onboarding Checklist for Freelancers and Agencies",
    description:
      "A simple client onboarding checklist for freelancers and agencies: contract, deposit, questionnaire, welcome packet and kickoff call, with a copyable list.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "freelance-contract-template",
      "statement-of-work-template",
      "vendor-onboarding-checklist",
    ],
    faqs: [
      {
        q: "What should a client onboarding checklist include?",
        a: "A practical client onboarding checklist covers five stages: paperwork (signed contract or statement of work), money (deposit invoice and billing details), information (onboarding questionnaire, brand assets, logins), communication (welcome packet, channels, response times) and kickoff (a call that confirms goals, timeline and the first milestone). Add a short check-in after the first deliverable. Keeping it as a reusable list means nothing is missed when you are busy with several new clients at once.",
      },
      {
        q: "What is a client onboarding process?",
        a: "A client onboarding process is the set of steps between a client saying yes and real work starting. It turns a verbal agreement into a signed contract, a paid deposit, the information you need to do the job, and a shared understanding of how you will work together. A good process feels organised to the client and protects you from scope creep, late payment and missing information that can stall a project for weeks.",
      },
      {
        q: "What goes in a client welcome packet?",
        a: "A welcome packet is a short document, often three to six pages, that explains how working with you will go. Include a thank-you note, the project summary and timeline, who to contact and how, your working hours and response times, how feedback and revisions work, your invoicing and payment terms, what you need from the client and by when, and what happens at the end of the project. Keep it friendly and scannable.",
      },
      {
        q: "What questions should be in a client onboarding questionnaire?",
        a: "Ask about the business (what they sell, to whom, main competitors), the project (goals, success measures, deadline, budget owner), the audience, brand preferences and examples they like or dislike, existing assets and access they can share, decision makers and approval process, and billing details such as legal name, billing address, tax ID and whether a purchase order number is required. Keep it to questions you will actually use.",
      },
      {
        q: "Should I take a deposit before onboarding a client?",
        a: "In most cases, yes. A deposit confirms commitment and covers the time you spend on setup and early work. Many freelancers ask for 25% to 50% on new projects, and some require the first month in advance for retainers. Make payment of the deposit a step on your checklist, and start work only once it has cleared. Your contract should say clearly what happens to the deposit if the client cancels.",
      },
      {
        q: "How long should client onboarding take?",
        a: "For a typical freelance project, onboarding usually takes a few days to two weeks, depending mostly on how quickly the client signs, pays and returns information. You can speed it up by sending the contract, deposit invoice and questionnaire together, setting a due date for each, and booking the kickoff call as soon as the contract is signed. Agencies with larger accounts may need longer for legal and procurement steps.",
      },
      {
        q: "What billing details do I need from a new client?",
        a: "Collect the client's legal business name, billing address, accounts payable contact and email, tax or VAT number if relevant, purchase order requirements, preferred payment method, and any invoice portal or format they require. Ask whether invoices must show specific references. Getting this right at the start prevents your first invoice from being rejected, which is one of the most common causes of late payment on new accounts.",
      },
      {
        q: "Do I need a contract for small freelance jobs?",
        a: "A written agreement is wise for any paid work, even a short email that both sides confirm. For small jobs, a one-page agreement covering scope, price, deadline, revisions, payment terms and ownership of the work is often enough. Larger or ongoing projects need a full contract or a master agreement with a statement of work. Laws on contracts vary by country, so check with a qualified adviser for anything high-value.",
      },
      {
        q: "How do I onboard a client remotely?",
        a: "Run every step online: e-signature for the contract, an online questionnaire, a shared folder for assets, a password manager or secure sharing for logins, and a video call for the kickoff. Agree on one main communication channel and time zones early. Send a short summary email after the kickoff call so there is a written record of goals, deadlines and responsibilities that everyone can refer back to.",
      },
    ],
    content: `<p>A <strong>client onboarding checklist</strong> is a repeatable list of steps you complete between a client saying yes and work starting: sign the contract, collect the deposit, gather information through a questionnaire, send a welcome packet, set up communication and run a kickoff call. It keeps projects organised and stops avoidable delays.</p>

<p>Most freelance problems that surface in month two, such as unpaid invoices, missing files, endless revisions or a client who expected something different, start in week one. A clear client onboarding process fixes most of them before they happen. Below you will find each stage explained, a complete checklist you can copy, a welcome packet outline and an onboarding questionnaire.</p>

<h2>Why a Client Onboarding Process Matters</h2>

<p>Onboarding is the first real experience a client has of working with you. Before this, they saw your portfolio and your proposal. Now they see how you operate. A smooth start builds confidence; a messy one makes them watch every invoice.</p>

<p>A good onboarding process also protects you. It makes sure that:</p>

<ul>
<li>Scope, price and timeline are in writing before work begins.</li>
<li>You are paid something up front, so a client who disappears costs you less.</li>
<li>You have the information, assets and access you need on day one.</li>
<li>The client knows how to give feedback, how many revisions are included and how you invoice.</li>
<li>Your first invoice goes to the right person with the right details and gets paid on time.</li>
</ul>

<h2>Stage 1: Paperwork and Agreement</h2>

<p>Never start work on a handshake. The minimum is a written agreement both sides accept, covering scope, deliverables, price, payment terms, deadlines, revisions, ownership of the work and how either party can end the arrangement.</p>

<ul>
<li><strong>Contract or terms of engagement.</strong> Our <a href="/blog/freelance-contract-template">freelance contract template</a> covers the clauses most freelancers need.</li>
<li><strong>Statement of work.</strong> For larger projects or ongoing clients, put the specific deliverables and milestones in a separate <a href="/blog/statement-of-work-template">statement of work</a> under a master agreement.</li>
<li><strong>Change process.</strong> State how extra requests are quoted and approved, so new work is paid work.</li>
<li><strong>Tax forms where needed.</strong> US clients will usually ask a contractor for a Form W-9. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> explains what to provide.</li>
</ul>

<p>Contract rules vary by country and industry. For high-value work or unusual terms, check with a qualified adviser.</p>

<h2>Stage 2: Deposit and Billing Setup</h2>

<p>The deposit is the step that turns a yes into a commitment. Send a <a href="/blog/deposit-invoice">deposit invoice</a> at the same time as the contract and make starting work conditional on payment. For monthly work, invoice the first month in advance with a <a href="/blog/retainer-invoice">retainer invoice</a>.</p>

<p>At the same time, collect billing details so every later invoice is right first time:</p>

<ul>
<li>Legal business name and billing address</li>
<li>Accounts payable contact name and email</li>
<li>Tax or VAT number, if it needs to appear on invoices</li>
<li>Whether a purchase order number is required on every invoice</li>
<li>Preferred payment method and any supplier portal they use</li>
<li>Agreed <a href="/blog/invoice-payment-terms">payment terms</a>, such as Net 14 or Net 30</li>
</ul>

<p>Large clients may have their own supplier setup process, the mirror image of a <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a>. Ask early, because supplier registration can take longer than the project kickoff.</p>

<h3>Worked example: deposit and billing schedule</h3>

<p>A freelance copywriter agrees a $4,800 website copy project. The contract sets a 40% deposit and two further payments:</p>

<table>
<thead>
<tr><th>Invoice</th><th>Trigger</th><th>Amount</th><th>Terms</th></tr>
</thead>
<tbody>
<tr><td>INV-0107 Deposit</td><td>Contract signed</td><td>$1,920</td><td>Due on receipt</td></tr>
<tr><td>INV-0112 Milestone</td><td>Home and service pages approved</td><td>$1,440</td><td>Net 14</td></tr>
<tr><td>INV-0118 Final</td><td>All pages delivered</td><td>$1,440</td><td>Net 14</td></tr>
</tbody>
</table>

<p>Agreeing this schedule during onboarding means each invoice is expected, not a surprise. You can generate sequential numbers with the <a href="/tools/invoice-number-generator">invoice number generator</a> and build each invoice in the free invoice generator, recording the deposit as amount paid on later invoices if you prefer to show a running balance.</p>

<h2>Stage 3: The Onboarding Questionnaire</h2>

<p>An onboarding questionnaire collects everything you need in one place, so you are not chasing details across ten emails. Keep it short enough that the client actually completes it, and only ask questions you will use.</p>

<h3>Sample onboarding questionnaire</h3>

<ol>
<li>In one or two sentences, what does your business do and for whom?</li>
<li>What is the main goal of this project, and how will you measure success?</li>
<li>What is the hard deadline, and what is driving it?</li>
<li>Who is the main contact, and who gives final approval?</li>
<li>Who is your target audience or customer?</li>
<li>Share two or three examples you like and one you do not, and say why.</li>
<li>What existing assets can you share (logo files, brand guide, previous work, data)?</li>
<li>Which tools or accounts will we need access to?</li>
<li>Is there anything we must avoid (words, topics, competitors, legal limits)?</li>
<li>Billing: legal name, address, AP email, tax number, PO number if needed.</li>
</ol>

<p>Adapt the list to your trade. A web developer will add hosting and domain questions; a bookkeeper will add accounting software and bank feed questions.</p>

<h2>Stage 4: The Welcome Packet</h2>

<p>A welcome packet sets expectations in writing so you do not have to repeat them on every call. It can be a simple PDF or a shared document. Aim for something a client can read in five minutes.</p>

<h3>Welcome packet outline</h3>

<ul>
<li><strong>Thank you and project summary.</strong> One paragraph restating what you are doing and why.</li>
<li><strong>Timeline.</strong> Key dates and milestones, including what you need from the client at each step.</li>
<li><strong>Communication.</strong> The main channel, your working hours, time zone and normal response time.</li>
<li><strong>Feedback and revisions.</strong> How to give feedback, how many rounds are included, and how extra rounds are priced.</li>
<li><strong>Invoicing and payment.</strong> When you invoice, payment terms, accepted methods and what happens with late payment.</li>
<li><strong>Client responsibilities.</strong> Assets, approvals and access you need, with due dates.</li>
<li><strong>Project close.</strong> What handover looks like and how files are delivered.</li>
</ul>

<p>Mentioning late payment terms in a friendly, matter-of-fact way at the start makes them much easier to enforce later. If you charge late fees, make sure they are in the contract, not just the welcome packet.</p>

<h2>Stage 5: Kickoff Call and Setup</h2>

<p>The kickoff call is where the project becomes real for both sides. Keep it to 30 to 60 minutes with a short agenda:</p>

<ol>
<li>Introductions and roles on both sides.</li>
<li>Confirm goals, success measures and the deadline.</li>
<li>Walk through the timeline and the first milestone.</li>
<li>Review questionnaire answers and fill any gaps.</li>
<li>Confirm communication rules and approval process.</li>
<li>Agree next steps and who owns each one.</li>
</ol>

<p>Send a summary email the same day. It becomes the written record of what was agreed, which is invaluable if expectations drift later.</p>

<p>Then set up the working tools: shared folder, project board, access to client accounts (ideally through a password manager or delegated access, never passwords in plain email), and calendar invites for regular check-ins.</p>

<h2>The Complete Client Onboarding Checklist</h2>

<p>Copy this client onboarding checklist into your project tool and tick it off for every new client. The order matters less than finishing every line before real work starts.</p>

<table>
<thead>
<tr><th>Step</th><th>Task</th><th>Done when</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Send proposal acceptance confirmation</td><td>Client confirms in writing</td></tr>
<tr><td>2</td><td>Send contract and statement of work</td><td>Signed by both sides</td></tr>
<tr><td>3</td><td>Send deposit or first retainer invoice</td><td>Payment received</td></tr>
<tr><td>4</td><td>Collect billing details and PO requirements</td><td>Details saved in your records</td></tr>
<tr><td>5</td><td>Provide W-9 or other forms if requested</td><td>Client acknowledges receipt</td></tr>
<tr><td>6</td><td>Send onboarding questionnaire</td><td>Completed and reviewed</td></tr>
<tr><td>7</td><td>Send welcome packet</td><td>Client confirms they have read it</td></tr>
<tr><td>8</td><td>Collect assets and account access</td><td>Everything needed for phase 1 received</td></tr>
<tr><td>9</td><td>Run kickoff call</td><td>Summary email sent</td></tr>
<tr><td>10</td><td>Set up folders, project board and check-ins</td><td>Client has access</td></tr>
<tr><td>11</td><td>Deliver a quick first win</td><td>Client sees early progress</td></tr>
<tr><td>12</td><td>Check in after first milestone</td><td>Feedback collected, issues fixed</td></tr>
</tbody>
</table>

<h2>Common Onboarding Mistakes</h2>

<ul>
<li><strong>Starting before the deposit clears.</strong> It feels helpful, but it removes your leverage and signals that terms are optional.</li>
<li><strong>Collecting billing details late.</strong> A first invoice bounced for a missing PO number can add weeks to payment.</li>
<li><strong>Too long a questionnaire.</strong> Forty questions get ignored. Ten good ones get answered.</li>
<li><strong>No single point of contact.</strong> Feedback from five people with no final approver is how projects stall.</li>
<li><strong>No written summary.</strong> Without a kickoff recap, memories differ and disputes follow.</li>
<li><strong>Treating onboarding as admin only.</strong> It is also your best chance to spot a poor-fit client early. If warning signs pile up, read <a href="/blog/how-to-fire-a-client">how to fire a client</a> before you are in too deep.</li>
</ul>

<h2>Adapting the Client Onboarding Checklist by Client Type</h2>

<p>The core steps stay the same, but the emphasis shifts depending on who you are working with. Use the table below to adjust your client onboarding checklist for the three situations most freelancers and small agencies meet.</p>

<table>
<thead>
<tr><th>Client type</th><th>What to add</th><th>What to watch</th></tr>
</thead>
<tbody>
<tr><td>Small business owner</td><td>Plain-English summary of terms; simple payment options</td><td>Owner is often the only approver and very busy, so set firm feedback deadlines</td></tr>
<tr><td>Large company</td><td>Supplier registration, insurance certificates, PO process, invoice portal setup</td><td>Payment terms of 30 to 60 days are common; confirm them before you sign</td></tr>
<tr><td>Ongoing retainer</td><td>Monthly scope, rollover rules for unused hours, notice period</td><td>Scope drift over months; review the retainer every quarter</td></tr>
</tbody>
</table>

<h3>Onboarding returning clients</h3>

<p>A client you have worked with before still needs a short onboarding for each new project. Skip the welcome packet if nothing has changed, but always send a new statement of work, confirm the price and timeline in writing, check that billing details and contacts are still current, and take a deposit if the project is a new piece of work rather than a continuation. People change jobs, companies move offices and accounts teams change their rules, so a two-minute check now saves a rejected invoice later.</p>

<h3>Onboarding international clients</h3>

<p>For clients in another country, add a few lines to your list: agree the invoice currency and who pays transfer fees, confirm time zones for calls, and ask whether they need any tax documents from you. Some countries require specific details on invoices, so check before you send the first one.</p>

<h2>Automating Without Losing the Personal Touch</h2>

<p>You do not need expensive software to run a professional client onboarding process. Save your contract, questionnaire, welcome packet and kickoff agenda as templates, and keep a standard email that sends all three with clear due dates. Keep invoice designs consistent too: pick one of the <a href="/invoice-templates">invoice templates</a> and use it for every client so your documents are recognisable.</p>

<p>Personalise the parts the client notices: the opening of the welcome packet, the project summary and the kickoff call. Automate the parts they do not: file structures, reminders and checklists. Review the checklist every few months and remove any step that never adds value.</p>

<h2>Conclusion</h2>

<p>A simple client onboarding checklist gives every new project the same strong start: signed agreement, paid deposit, complete information, clear expectations and a kickoff everyone remembers. Build yours once, refine it after each client, and you will spend less time chasing and more time doing paid work. For more practical guides, visit the <a href="/blog/category/freelancing">freelancing category</a>, and when the contract is signed, create your deposit invoice in the <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
  {
    slug: "side-hustle-taxes",
    title: "Side Hustle Taxes: What You Owe in the US and UK (2026)",
    description:
      "Side hustle taxes explained for 2026: the US $400 self-employment tax rule, 1099-K, the UK £1,000 trading allowance and when to register, with worked examples.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["self-employment-tax", "self-assessment-tax-return-uk", "1099-k-threshold"],
    faqs: [
      {
        q: "Do I need to pay tax on side income?",
        a: "Generally, yes. In both the US and the UK, income from a side business, freelancing or selling services is taxable even if you also have a full-time job. What changes is whether you must report it and how much you owe. In the US, net self-employment earnings of $400 or more trigger self-employment tax and a filing requirement. In the UK, gross trading income up to £1,000 a year is usually covered by the trading allowance.",
      },
      {
        q: "What is the $400 rule for self-employment tax?",
        a: "The IRS says you generally must pay self-employment tax and file Schedule SE if your net earnings from self-employment are $400 or more in the year. Net earnings means your business income minus allowable business expenses, adjusted by the 92.35% factor on Schedule SE. This applies even if your total income is low enough that you would not otherwise need to file an income tax return, so many small side hustles still need to file.",
      },
      {
        q: "Do I have to report side hustle income if I don't get a 1099?",
        a: "Yes. In the US, all income is reportable whether or not you receive a Form 1099-NEC or 1099-K. The forms are information returns that help the IRS match income; they do not decide whether income is taxable. For 2026, payment platforms generally only issue a federal Form 1099-K when payments exceed $20,000 and more than 200 transactions, so many side hustlers will not get one but still owe tax.",
      },
      {
        q: "What is the UK £1,000 trading allowance?",
        a: "The trading allowance lets individuals in the UK earn up to £1,000 of gross trading income each tax year tax-free. If your gross income from self-employment, casual services or hiring out personal equipment is £1,000 or less, you generally do not need to tell HMRC. If it is higher, you can deduct the £1,000 allowance instead of actual expenses when working out your profit. You cannot claim both the allowance and expenses.",
      },
      {
        q: "When do I need to register for Self Assessment for a side hustle?",
        a: "If your gross trading income in the UK is over £1,000 in a tax year, you generally need to register for Self Assessment by 5 October after the end of that tax year. For the 2025 to 2026 tax year, which ended on 5 April 2026, GOV.UK gives the deadline as 5 October 2026. Online returns and any tax due are normally due by 31 January following, so 31 January 2027 for that year.",
      },
      {
        q: "How much should I set aside for side hustle taxes?",
        a: "A common rule of thumb is 25% to 30% of side hustle profit, but the right amount depends on your income and location. A US earner in the 22% federal bracket also pays about 14.1% in self-employment tax on profit, plus any state tax. A UK basic rate taxpayer whose salary already uses the personal allowance pays 20% income tax, plus Class 4 National Insurance only if self-employed profits exceed the lower profits limit.",
      },
      {
        q: "Do I need to make estimated tax payments for a side hustle in the US?",
        a: "You generally need to make quarterly estimated payments if you expect to owe $1,000 or more for the year after withholding and credits. If you also have a job, an alternative is to increase the federal tax withheld from your paycheck by updating Form W-4 with your employer, which can cover the tax on side income. The 2026 quarterly due dates are 15 April, 15 June, 15 September and 15 January 2027.",
      },
      {
        q: "Can I deduct expenses from side hustle income?",
        a: "Yes, if your side hustle is a business. In the US, ordinary and necessary business expenses are reported on Schedule C and reduce both income tax and self-employment tax. In the UK, allowable expenses reduce your taxable profit, or you can use the £1,000 trading allowance instead if that gives a better result. Keep receipts and records either way. Activities treated as a hobby rather than a business may not qualify for expense deductions.",
      },
      {
        q: "Does a side hustle affect my tax code in the UK?",
        a: "It can. If you owe tax on side income through Self Assessment, HMRC may collect small amounts by adjusting your PAYE tax code for a later year, depending on the amount owed and the deadline you file by. You may also have to make payments on account toward the next year if your Self Assessment bill is large enough. Check your HMRC account and seek advice if you are unsure how your code was worked out.",
      },
      {
        q: "Is selling personal items a side hustle for tax purposes?",
        a: "Usually not. Selling your own used belongings for less than you paid, such as old clothes or furniture, is generally not trading income in the UK and is generally not taxable profit in the US. It becomes a business when you buy items to resell, make things to sell, or sell regularly with a profit motive. Platforms may still report your sales, so keep records showing what you originally paid.",
      },
    ],
    content: `<p><strong>Side hustle taxes</strong> work much like any self-employed income. In the US, you generally owe income tax on all side profit and self-employment tax once net earnings reach $400. In the UK, the first £1,000 of gross trading income is usually covered by the trading allowance; above that, you register for Self Assessment and pay tax on profit.</p>

<p>This guide answers the question most people actually ask, "do I need to pay tax on side income?", for both countries, with clearly labelled US and UK sections, worked examples and a checklist. Figures were checked against IRS and GOV.UK guidance at the time of writing. This is general information, not tax advice; check with a qualified adviser about your own situation.</p>

<h2>Side Hustle Taxes: The Short Version</h2>

<table>
<thead>
<tr><th>Question</th><th>United States</th><th>United Kingdom</th></tr>
</thead>
<tbody>
<tr><td>Is side income taxable?</td><td>Yes, all income is reportable</td><td>Yes, trading income above the allowance is taxable</td></tr>
<tr><td>Small-income threshold</td><td>Self-employment tax and Schedule SE if net earnings are $400 or more</td><td>£1,000 trading allowance on gross income</td></tr>
<tr><td>Main forms</td><td>Form 1040 with Schedule C and Schedule SE</td><td>Self Assessment tax return (self-employment pages)</td></tr>
<tr><td>Extra tax for the self-employed</td><td>Self-employment tax: 15.3% on 92.35% of net earnings (Social Security part capped)</td><td>Class 4 National Insurance on profits above the lower profits limit</td></tr>
<tr><td>Paying during the year</td><td>Quarterly estimated tax or higher W-4 withholding</td><td>31 January balancing payment, plus payments on account if they apply</td></tr>
<tr><td>Platform reporting</td><td>Form 1099-K above $20,000 and 200 transactions; Form 1099-NEC from clients</td><td>Digital platforms report seller income to HMRC</td></tr>
</tbody>
</table>

<h2>United States: How Side Hustle Income Is Taxed</h2>

<p>In the US, a side hustle run to make a profit is usually a sole proprietorship. You report income and expenses on Schedule C, and the profit flows onto your Form 1040 alongside your wages. Two separate taxes apply to that profit.</p>

<h3>1. Federal income tax</h3>

<p>Side profit is added to your other income and taxed at your marginal rate. If your salary already puts you in the 22% bracket, most of your side profit is taxed at 22%. Some side businesses may also qualify for the qualified business income deduction, which can reduce the taxable amount. State income tax may apply on top.</p>

<h3>2. Self-employment tax and the $400 rule</h3>

<p>Employers withhold Social Security and Medicare from wages and pay a matching share. When you work for yourself, you pay both halves through <a href="/blog/self-employment-tax">self-employment tax</a>. According to the IRS:</p>

<ul>
<li>You generally must pay self-employment tax and file Schedule SE if your net earnings from self-employment are <strong>$400 or more</strong>.</li>
<li>The rate is <strong>15.3%</strong>: 12.4% for Social Security and 2.9% for Medicare.</li>
<li>It applies to <strong>92.35%</strong> of your net earnings.</li>
<li>The Social Security part only applies up to the annual wage base, which is $184,500 for 2026, and your wages count toward that cap first.</li>
<li>You can deduct half of your self-employment tax when calculating adjusted gross income.</li>
</ul>

<p>The $400 rule catches many people out: you may need to file a return because of self-employment tax even if your income is otherwise too low to require one.</p>

<h3>Worked example: US side hustle</h3>

<p>Maria works full time on a salary that puts her in the 22% federal bracket. Her weekend photography side business brings in $11,000 in 2026, with $3,000 of business expenses.</p>

<ol>
<li>Net profit on Schedule C: $11,000 − $3,000 = <strong>$8,000</strong></li>
<li>Net earnings for SE tax: $8,000 × 92.35% = $7,388</li>
<li>Self-employment tax: $7,388 × 15.3% = <strong>$1,130</strong> (rounded)</li>
<li>Deduction for half of SE tax: about $565</li>
<li>Income tax on remaining profit: ($8,000 − $565) × 22% = about <strong>$1,636</strong></li>
<li>Estimated federal total: about <strong>$2,766</strong>, or roughly 35% of profit, before any qualified business income deduction and before state tax</li>
</ol>

<p>Her salary is well below the $184,500 wage base, so the full 12.4% Social Security portion applies. Because she expects to owe more than $1,000 on the side income, Maria either makes <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> or raises her paycheck withholding through a new Form W-4.</p>

<h3>Form 1099-K and Form 1099-NEC in 2026</h3>

<p>Two information forms matter to side hustlers:</p>

<ul>
<li><strong>Form 1099-K</strong> comes from payment platforms and marketplaces. After the One Big Beautiful Bill Act, the federal reporting threshold is back to more than <strong>$20,000 and more than 200 transactions</strong> in a calendar year. Some states set lower thresholds. Details are in our <a href="/blog/1099-k-threshold">1099-K threshold guide</a>.</li>
<li><strong>Form 1099-NEC</strong> comes from business clients who pay you for services. The reporting threshold changed for 2026; see our <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold guide</a> for the current figure.</li>
</ul>

<p>Not receiving a form does not make income tax-free. Report everything you earned, and keep your own records so your Schedule C total is right regardless of what platforms send. Our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> walks through the form line by line.</p>

<h2>United Kingdom: How Side Hustle Income Is Taxed</h2>

<p>In the UK, side income from selling services, making and selling goods or hiring out equipment is usually trading income. Whether you need to do anything depends first on the trading allowance.</p>

<h3>The £1,000 trading allowance</h3>

<p>GOV.UK explains that individuals can have up to <strong>£1,000 of gross trading income</strong> each tax year tax-free. Key points:</p>

<ul>
<li>If your gross trading income is £1,000 or less, you generally do not need to tell HMRC.</li>
<li>The test uses gross income (takings before expenses), not profit.</li>
<li>If your income is higher, you can deduct the £1,000 allowance instead of your actual expenses. You cannot claim both.</li>
<li>The allowance does not apply to income from a partnership, or to income from your employer, your spouse's or civil partner's employer, or a company or partnership you or a connected person controls.</li>
</ul>

<h3>Registering and filing</h3>

<p>If your gross trading income is over £1,000, you generally need to register for Self Assessment. GOV.UK gives the registration deadline as 5 October after the end of the tax year. For the 2025 to 2026 tax year (6 April 2025 to 5 April 2026), that was <strong>5 October 2026</strong>. If you missed it, register as soon as possible to limit penalties. The online return and payment are normally due by <strong>31 January</strong> following the tax year. Our guide to the <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a> covers the process in full.</p>

<h3>Income tax and National Insurance</h3>

<p>Side profit is added to your salary for income tax. If your salary already uses your personal allowance, the profit is taxed at your marginal rate, usually 20% at basic rate in England, Wales and Northern Ireland (Scotland has its own bands). Class 4 National Insurance is worked out on self-employed profits alone and only applies above the lower profits limit (£12,570 at the time of writing), so many small side hustles pay none. Class 2 contributions stopped being compulsory from April 2024. Check the current rates on GOV.UK before you file.</p>

<h3>Worked example: UK side hustle</h3>

<p>James earns a £35,000 salary and sells handmade furniture at weekends. In the 2025 to 2026 tax year he takes £4,000 and spends £600 on materials and tools.</p>

<table>
<thead>
<tr><th>Method</th><th>Calculation</th><th>Taxable profit</th></tr>
</thead>
<tbody>
<tr><td>Actual expenses</td><td>£4,000 − £600</td><td>£3,400</td></tr>
<tr><td>Trading allowance</td><td>£4,000 − £1,000</td><td>£3,000</td></tr>
</tbody>
</table>

<p>The trading allowance gives the lower profit, so James uses it. His salary already uses his personal allowance, so the £3,000 is taxed at 20%: <strong>£600 income tax</strong>. His self-employed profit is below the Class 4 lower profits limit, so no Class 4 National Insurance is due. He needed to register by 5 October 2026 and must file and pay by 31 January 2027. If his expenses had been higher than £1,000, claiming actual expenses would have been better.</p>

<h3>Making Tax Digital</h3>

<p>From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must use <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a>, with the threshold falling to £30,000 from April 2027. Qualifying income is gross self-employment and property income, not your salary, so most side hustles are well below these thresholds for now.</p>

<h2>Records Every Side Hustler Should Keep</h2>

<p>Good records make side hustle taxes far less painful, in either country. Keep:</p>

<ul>
<li>A copy of every invoice you send, numbered in sequence.</li>
<li>Bank statements, ideally from a separate account used only for the side business.</li>
<li>Receipts for every expense you plan to claim. See our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a>.</li>
<li>Platform statements and any 1099 forms (US).</li>
<li>Mileage logs if you drive for the business.</li>
</ul>

<p>Issuing proper invoices, even for small jobs, gives you a clean income record. The <a href="/invoice-generator/usa">US invoice generator</a> and <a href="/invoice-generator/uk">UK invoice generator</a> have locale presets for currency and date formats, and you can download each invoice as a PDF for your records.</p>

<h2>Deductible Expenses That Reduce Side Hustle Taxes</h2>

<p>In both countries, legitimate business costs reduce taxable profit. Common examples include equipment and software, materials, a share of phone and internet costs, business mileage, platform and payment fees, advertising, and training directly related to the work. Personal costs and the private share of mixed costs are not deductible. In the US, an activity treated as a hobby rather than a business generally cannot deduct expenses under current rules, which is one more reason to run your side hustle in a businesslike way.</p>

<h2>Common Mistakes With Side Hustle Taxes</h2>

<ul>
<li><strong>Assuming small means tax-free.</strong> In the US there is no general "under $600" or "under $20,000" exemption; those are reporting thresholds for forms, not tax thresholds.</li>
<li><strong>Using profit for the UK allowance test.</strong> The £1,000 trading allowance test looks at gross takings, so £1,800 of sales with £900 of costs is still over the limit.</li>
<li><strong>Spending the tax money.</strong> Moving a set share of each payment into a separate savings account stops a large bill arriving with nothing to pay it.</li>
<li><strong>Mixing personal and business money.</strong> A separate account makes records, expense claims and any enquiry far simpler.</li>
<li><strong>Missing the registration deadline.</strong> UK penalties can apply if you tell HMRC late, even when the tax itself is small.</li>
</ul>

<h2>Side Hustle Tax Checklist</h2>

<ol>
<li>Decide which country's rules apply to you (where you are tax resident).</li>
<li>Track gross income and expenses from the first sale.</li>
<li><strong>US:</strong> if net earnings will reach $400, plan to file Schedule C and Schedule SE.</li>
<li><strong>US:</strong> if you will owe $1,000 or more, make quarterly estimated payments or adjust W-4 withholding.</li>
<li><strong>UK:</strong> if gross trading income will exceed £1,000, register for Self Assessment by 5 October after the tax year ends.</li>
<li><strong>UK:</strong> compare actual expenses with the £1,000 trading allowance and use whichever is better.</li>
<li>Set aside a share of every payment for tax, commonly 25% to 30% of profit.</li>
<li>Check state or devolved rules (US states, Scottish income tax).</li>
</ol>

<h2>Conclusion</h2>

<p>Side hustle taxes are manageable once you know the thresholds: $400 of net earnings for US self-employment tax and £1,000 of gross trading income for the UK trading allowance. Keep records from day one, set money aside, and file on time. For more on rules and deadlines, browse the <a href="/blog/category/tax-compliance">tax compliance guides</a>, and create clean, numbered invoices for every job with the free <a href="/invoice-generator">invoice generator</a>. For anything beyond the basics, speak to a qualified tax adviser.</p>`,
  },
  {
    slug: "how-to-fire-a-client",
    title: "How to Fire a Client: Steps, Email Templates, Final Invoice",
    description:
      "How to fire a client professionally: warning signs, what your contract says, email templates for ending a client relationship, handover and the final invoice.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["client-not-paying-invoice", "kill-fee", "freelance-contract-template"],
    faqs: [
      {
        q: "When should you fire a client?",
        a: "Consider ending the relationship when a client repeatedly pays late or not at all, keeps expanding scope without paying, treats you or your team with disrespect, asks for unethical or illegal work, or costs more in time and stress than they bring in. One bad week is not a reason. A pattern that continues after you have raised it clearly and in writing usually is. Compare the client's revenue with the hours and energy they take.",
      },
      {
        q: "How do I politely end a client relationship?",
        a: "Keep it short, calm and factual. Thank the client, state that you are ending the arrangement, give the end date in line with your contract's notice period, explain what you will finish and hand over, and say when the final invoice will arrive. Avoid listing grievances or debating. If appropriate, suggest another provider. Send it in writing, ideally by email, even if you also tell them on a call, so there is a clear record.",
      },
      {
        q: "Do I need to give notice before firing a client?",
        a: "Check your contract. Most freelance and agency agreements include a termination clause with a notice period, often 14 or 30 days, and say what is owed on termination. If you end the relationship without following that clause, you may be in breach and lose the right to some payments. Where there is no written contract, give reasonable notice and finish or hand over work in progress. For disputes, seek advice from a qualified adviser.",
      },
      {
        q: "Should I finish the project before firing a client?",
        a: "If you can reach a natural stopping point, such as the end of the current milestone, that is usually the cleanest option. It gives the client usable work and makes your final invoice easier to justify. If the relationship involves abuse, non-payment or unethical requests, you may need to stop sooner. In that case, deliver what is complete, document what is not, and follow the termination terms in your contract.",
      },
      {
        q: "What goes on a final invoice when ending a client relationship?",
        a: "Include all work completed and approved but not yet billed, work in progress up to the termination date as allowed by your contract, any agreed kill fee or cancellation charge, unbilled expenses, and a credit for any deposit or prepaid retainer not yet used. Show amounts already paid and the balance due, reference earlier invoice numbers, and state the payment terms. Make it the clear, final account of everything owed.",
      },
      {
        q: "Can I keep a deposit if I fire a client?",
        a: "It depends on your contract and how much work the deposit covers. If you end the relationship, you generally should not keep money for work you will not do. Deduct the value of completed work from the deposit and refund or credit the rest. If the client ended it or breached the contract, a non-refundable deposit or kill fee clause may let you keep more. Contract law varies by country, so take advice if unsure.",
      },
      {
        q: "How do I fire a client who owes me money?",
        a: "Separate the two issues. Send your notice of termination and a final invoice that lists every outstanding amount, including earlier overdue invoices. Hold back final files or licence transfers until payment if your contract allows it. Then follow your normal collection steps: reminders, a firm final notice, late payment interest where your contract or local law allows it, and small claims or a collection agency as a last resort.",
      },
      {
        q: "Should I give a reason when firing a client?",
        a: "A brief, neutral reason is usually enough, such as a change in your business direction or a mismatch between their needs and your services. You are not required to give a detailed explanation, and listing complaints often leads to an argument. If the reason is late payment or scope disputes and you think the client could change, you can mention it professionally. Keep the tone forward-looking and focused on a smooth handover.",
      },
      {
        q: "How can I avoid having to fire clients in the future?",
        a: "Screen clients before you sign, use a clear contract with scope, revisions, payment terms and a termination clause, take deposits, and onboard every client with written expectations. Watch for warning signs during discovery, such as pressure to start without a contract or criticism of every previous supplier. Raise problems early instead of letting them build. Charging enough also helps, because underpriced work attracts clients who value price above everything.",
      },
    ],
    content: `<p>To <strong>fire a client</strong> professionally, check your contract's termination clause, choose a clean stopping point, send a short written notice with an end date, hand over files and access, and issue a final invoice that settles every outstanding amount. Stay polite and factual; you are closing an account, not winning an argument.</p>

<p>Ending a client relationship is uncomfortable, especially when that client pays a meaningful share of your income. But the wrong client can cost far more than they pay through late payments, unpaid scope creep, stress and lost time you could spend on better work. This guide covers how to fire a client step by step, with ending-a-client-relationship email templates you can adapt and a clear approach to the final invoice.</p>

<h2>Signs It Is Time to Fire a Client</h2>

<p>Every client has bad weeks. The question is whether there is a pattern that has continued after you raised it. Common warning signs:</p>

<ul>
<li><strong>Chronic late payment.</strong> Invoices are always overdue and need several reminders. See our guide on what to do when a <a href="/blog/client-not-paying-invoice">client is not paying an invoice</a>.</li>
<li><strong>Constant scope creep.</strong> Extra requests arrive weekly and the client resists paying for them.</li>
<li><strong>Disrespect.</strong> Rude messages, contacting you at all hours, or treating your team badly.</li>
<li><strong>Unethical or illegal requests.</strong> Anything that puts your reputation or legal position at risk.</li>
<li><strong>Bad economics.</strong> The client's effective hourly rate is far below your other work once meetings, revisions and chasing are counted.</li>
<li><strong>Poor fit.</strong> They need services you no longer offer, or your business has moved in a different direction.</li>
</ul>

<h3>A quick test: the effective rate</h3>

<p>Divide what a client paid last quarter by every hour you spent on them, including emails, calls and chasing payment. If Client A paid $6,000 for 100 hours, the effective rate is $60. If your other clients average $95, Client A costs you $3,500 a quarter in lost earning capacity. Numbers make the decision less emotional.</p>

<h2>Try to Fix It First (When It Makes Sense)</h2>

<p>Firing a client is the last step, not the first. Many problems can be fixed with one clear conversation:</p>

<ul>
<li><strong>Late payment:</strong> introduce a deposit, shorter terms or <a href="/blog/late-payment-fees">late payment fees</a> for future work.</li>
<li><strong>Scope creep:</strong> start using a formal <a href="/blog/scope-creep-change-order">change order process</a> so extras are quoted and approved before you do them.</li>
<li><strong>Low rates:</strong> give notice of a price increase. Some clients accept; those who do not fire themselves.</li>
<li><strong>Communication:</strong> set response times and one channel in writing.</li>
</ul>

<p>If the client agrees and things improve, you keep the revenue without the pain. If nothing changes, you have a documented attempt to resolve the issue, which helps if the separation becomes a dispute.</p>

<h2>Check Your Contract Before You Act</h2>

<p>Your contract decides most of what happens next. Read it before you send anything. Look for:</p>

<ol>
<li><strong>Termination clause.</strong> Who can end the agreement, how, and with how much notice (14 or 30 days is common).</li>
<li><strong>Payment on termination.</strong> What is owed for completed work and work in progress.</li>
<li><strong>Kill fee or cancellation charge.</strong> Some contracts set a fixed fee if the project ends early. Our article on the <a href="/blog/kill-fee">kill fee</a> explains how these work.</li>
<li><strong>Deposit terms.</strong> Whether a deposit or retainer is refundable.</li>
<li><strong>Ownership and handover.</strong> When rights in the work transfer, often only on full payment.</li>
<li><strong>Confidentiality.</strong> What you must return or delete.</li>
</ol>

<p>If you do not have these clauses yet, add them to future agreements using our <a href="/blog/freelance-contract-template">freelance contract template</a>. If a lot of money is at stake or the client is likely to dispute, check with a qualified adviser before you act.</p>

<h2>How to Fire a Client: Step by Step</h2>

<ol>
<li><strong>Decide the end date.</strong> Follow your notice period and aim for a natural stopping point, such as the end of a milestone.</li>
<li><strong>List what is outstanding.</strong> Work done but not billed, work in progress, unpaid invoices, unused deposit or retainer.</li>
<li><strong>Prepare the handover.</strong> Files, documentation, logins you created for them, and a short status note.</li>
<li><strong>Tell the client.</strong> A short call is kind for long relationships, but always follow up in writing.</li>
<li><strong>Send the written notice.</strong> Use one of the templates below.</li>
<li><strong>Deliver the handover</strong> as your contract allows, often after final payment for final files.</li>
<li><strong>Issue the final invoice</strong> and follow up as you would any invoice.</li>
<li><strong>Close access.</strong> Remove yourself from their systems and return or delete confidential material.</li>
</ol>

<h2>Email Templates for Ending a Client Relationship</h2>

<p>Adapt these to your voice. Keep them short; the more you write, the more there is to argue with.</p>

<h3>Template 1: Neutral, change of direction</h3>

<p><em>Subject: Update on our working arrangement</em></p>

<p><em>Hi [Name],</em></p>

<p><em>Thank you for the work we have done together on [project]. I am writing to let you know that I am changing the focus of my business and will not be able to continue as your [service] provider. In line with our agreement, our arrangement will end on [date].</em></p>

<p><em>Before then I will complete [current milestone] and send you all files and documentation. You will receive a final invoice on [date] covering the remaining work. If it helps, I am happy to recommend [another provider] for future work.</em></p>

<p><em>Best regards,</em></p>

<p><em>[Your name]</em></p>

<h3>Template 2: After repeated late payment</h3>

<p><em>Subject: Notice of termination and final invoice</em></p>

<p><em>Hi [Name],</em></p>

<p><em>As discussed on [date], payments under our agreement have been consistently late, and invoices [numbers] remain outstanding. I have decided to end our working relationship, effective [date], under clause [number] of our agreement.</em></p>

<p><em>The attached final invoice lists all outstanding amounts, including the earlier invoices, with a total balance due of [amount] by [date]. Final files will be released once the balance is paid, as set out in our agreement.</em></p>

<p><em>Thank you for your understanding.</em></p>

<p><em>[Your name]</em></p>

<h3>Template 3: Immediate end for serious issues</h3>

<p><em>Subject: Ending our engagement</em></p>

<p><em>Hi [Name],</em></p>

<p><em>I am ending our engagement with effect from today, as permitted under clause [number] of our agreement. I have attached the work completed to date and a final invoice for that work, less the deposit already paid. I will not be taking on further work for [company]. Please send any questions about the invoice by email.</em></p>

<p><em>Regards,</em></p>

<p><em>[Your name]</em></p>

<p>Use the immediate version only when your contract or the situation genuinely supports it, such as abuse, illegal requests or a serious breach by the client.</p>

<h2>The Final Invoice: Getting Paid on the Way Out</h2>

<p>The final invoice is where many freelancers lose money, because they want the relationship over and do not chase. Treat it like any other invoice and make it complete. Our guide to <a href="/blog/interim-invoice-vs-final-invoice">interim vs final invoices</a> covers the general format; for a terminated client, include the items below.</p>

<h3>Worked example: final invoice on termination</h3>

<p>A web developer ends a $12,000 project after milestone 2. The client paid a $3,600 deposit and invoice INV-0231 for $3,000 is still unpaid. The contract allows billing for work in progress and a 10% cancellation fee on unbilled project value.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Milestone 2: approved page templates (unbilled)</td><td>$3,000</td></tr>
<tr><td>Work in progress, milestone 3: 12 hours at $85</td><td>$1,020</td></tr>
<tr><td>Cancellation fee: 10% of unbilled remaining value ($3,000)</td><td>$300</td></tr>
<tr><td>Outstanding invoice INV-0231 (milestone 1 balance)</td><td>$3,000</td></tr>
<tr><td>Less deposit applied</td><td>−$3,600</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$3,720</strong></td></tr>
</tbody>
</table>

<p>Whether you list an older unpaid invoice as a line or simply refer to it in the notes is a matter of preference; the important thing is that the client sees one clear total. In the <a href="/invoice-generator">invoice generator</a> you can list each item, enter the deposit already paid so the balance due is calculated, and add the termination reference and payment deadline in the notes. A plain design such as the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps the focus on the numbers.</p>

<h3>If the final invoice is not paid</h3>

<p>Follow your normal process: polite <a href="/blog/payment-reminder-emails">payment reminder emails</a>, then a firm final notice, then formal steps. Business-to-business invoices in the UK may carry <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a>, and US freelancers can rely on late fee clauses in their contract or applicable state law. Small claims courts handle most freelance-sized debts.</p>

<h2>Retainer, Project and Platform Clients: What Changes</h2>

<p>The basic steps are the same whenever you fire a client, but the details shift with the type of arrangement.</p>

<table>
<thead>
<tr><th>Arrangement</th><th>Typical end point</th><th>Final invoice focus</th></tr>
</thead>
<tbody>
<tr><td>Monthly retainer</td><td>End of the notice period, often the end of a billing month</td><td>Unused prepaid hours credited or refunded under the contract; any overage billed</td></tr>
<tr><td>Fixed-price project</td><td>End of the current milestone</td><td>Approved milestones not yet billed, work in progress, any kill fee</td></tr>
<tr><td>Hourly work</td><td>After current tasks are wrapped up</td><td>All logged hours to the end date, plus expenses</td></tr>
<tr><td>Freelance platform</td><td>Close the contract through the platform</td><td>Follow the platform's rules for ending contracts and releasing funds</td></tr>
</tbody>
</table>

<p>For retainers, check whether unused hours roll over or expire. If your contract says prepaid hours are refundable, refund them promptly; holding on to money you have not earned turns a clean exit into a dispute. On platforms, keep all messages about ending the contract inside the platform so its dispute team can see them.</p>

<h3>What to say on the phone</h3>

<p>If you have worked with someone for a long time, a short call before the email is a courtesy. Keep it to a few minutes:</p>

<p><em>"I wanted to tell you personally before I send this in writing. I have decided to end our arrangement at the end of [month]. I will finish [current work], hand everything over properly, and send a final invoice on [date]. I am grateful for the work we have done together, and I will put all the details in an email today."</em></p>

<p>If the client asks why, give your short, neutral reason and avoid reopening every past issue. If they offer better terms to keep you, decide in advance whether anything would change your mind. If nothing would, say so kindly: "Thank you, but my decision is made."</p>

<h2>Protecting Your Reputation</h2>

<ul>
<li><strong>Stay professional in writing.</strong> Assume every email could be forwarded.</li>
<li><strong>Do not hold work hostage beyond your contract.</strong> Withhold final files only where your agreement allows it.</li>
<li><strong>Do not criticise the client publicly.</strong> Online complaints rarely help and can create legal risk.</li>
<li><strong>Offer a referral where sensible.</strong> It shows good faith and ends things on a better note.</li>
<li><strong>Keep records.</strong> Save emails, invoices and the signed contract for at least as long as your local record-keeping rules require.</li>
</ul>

<h2>Preventing the Next Bad Fit</h2>

<p>Most clients you need to fire showed warning signs at the start: pressure to begin without a contract, haggling over every line, or a long list of former suppliers they blame. A structured <a href="/blog/client-onboarding-checklist">client onboarding checklist</a> with a contract, a deposit and written expectations filters out many of them and gives you clear terms to rely on if things go wrong.</p>

<h2>Conclusion</h2>

<p>Knowing how to fire a client calmly is a business skill, not a failure. Check your contract, pick an end date, send a short written notice, hand over properly and send a complete final invoice. Then fill the gap with clients who respect your time. When you are ready, build the final invoice in the free <a href="/invoice-generator">invoice generator</a> and move on.</p>`,
  },
  {
    slug: "how-to-negotiate-freelance-rates",
    title: "How to Negotiate Freelance Rates: Scripts and Counteroffers",
    description:
      "Learn how to negotiate freelance rates with confidence: set a walk-away number, anchor high, trade scope instead of price, and use proven counteroffer scripts.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-set-freelance-rates", "how-to-raise-prices", "value-based-pricing"],
    faqs: [
      {
        q: "How do I negotiate pay as a freelancer?",
        a: "Prepare three numbers before the conversation: your target rate, your opening offer slightly above target, and your walk-away minimum. Ask about the client's goals and budget before naming a price. Present your fee with the value it delivers, then stay quiet. If the client pushes back, trade scope, timeline or payment terms rather than simply cutting the price. Always confirm the final agreement in writing before you start work.",
      },
      {
        q: "Should I name my rate first or let the client go first?",
        a: "If you can, ask for the client's budget first, because it tells you whether the project is viable and stops you underpricing. If they will not share a figure, name yours, anchored at the upper end of your realistic range. A confident, specific number such as $4,800 tends to work better than a loose range, which invites the client to pick the bottom. Back it up with what is included.",
      },
      {
        q: "How do I respond when a client says my rate is too high?",
        a: "Do not apologise or discount straight away. Ask what they are comparing it to, or what budget they had in mind. Then offer options: a smaller scope at a lower price, a phased project, or the original scope at the original price. A script that works is: 'I understand. To fit that budget we could focus on X and Y and leave Z for a second phase. Would that work for you?'",
      },
      {
        q: "What is a good counteroffer script for freelancers?",
        a: "A simple counteroffer script is: 'Thanks for the offer of [amount]. Based on the scope, which includes [key deliverables], my fee for this project is [amount]. I can meet you at [middle figure] if we [adjust timeline, reduce revisions, pay 50% up front]. Let me know which option suits you best.' It acknowledges their number, restates value, and links any concession to something you receive in return.",
      },
      {
        q: "How much should I counteroffer as a freelancer?",
        a: "There is no fixed rule, but many freelancers counter somewhere between their target and their opening rate, never below their walk-away minimum. If a client offers 30% below your target, a counteroffer at or just above target, with a small concession on terms, is common. Avoid splitting the difference automatically, because it rewards low first offers. Make every price movement smaller than the last so the client can see you are near your limit.",
      },
      {
        q: "Is it okay to negotiate rates on freelance platforms?",
        a: "Yes, most platforms let you discuss and adjust a proposal before a contract starts. The same principles apply: understand the brief, propose a fee with clear deliverables, and trade scope rather than simply cutting your price. Remember that platform service fees reduce what you actually receive, so build them into your walk-away number. Keep all agreed changes inside the platform's messaging so they are recorded if a dispute arises.",
      },
      {
        q: "When should I walk away from a freelance negotiation?",
        a: "Walk away when the final offer is below your minimum effective rate, when the client wants the full scope at a much lower price with no trade-offs, or when the negotiation itself shows warning signs such as pressure to start without a contract or deposit. Walking away politely and leaving the door open often brings clients back later, sometimes at your rate, once they have tried cheaper options.",
      },
      {
        q: "Can I negotiate payment terms instead of my rate?",
        a: "Yes, and it is often easier for both sides. Clients with a fixed budget may accept a larger deposit, milestone payments, shorter payment terms or a longer contract in exchange for a slightly lower price. You might offer an early payment discount if the client pays within a set number of days. Each of these improves your cash flow or security, so a small price concession can still leave you better off.",
      },
      {
        q: "How do I negotiate a higher rate with an existing client?",
        a: "Give written notice, typically 30 to 60 days, explaining the new rate and the date it applies. Mention the results you have delivered and any increase in skills or scope. Offer to keep the old rate on work already booked. If the client objects, consider a phased increase or a retainer with guaranteed hours. Most clients accept reasonable increases from a reliable freelancer, because replacing you costs them time and risk.",
      },
    ],
    content: `<p>To <strong>negotiate freelance rates</strong> well, set three numbers before you talk (target, opening and walk-away), ask about the client's goals and budget first, present your price with the value it delivers, and when clients push back, trade scope, timeline or payment terms rather than simply cutting the fee. Confirm everything in writing.</p>

<p>Most freelancers do not lose money because their rate is wrong. They lose it in the conversation, by discounting too quickly, naming a vague range or giving something for nothing. This guide shows how to negotiate pay as a freelancer step by step, with scripts and a counteroffer script you can adapt, plus a worked example. If you still need to work out your baseline, start with <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>

<h2>Before You Negotiate Freelance Rates: Know Your Three Numbers</h2>

<p>The single biggest mistake is going into a conversation without knowing your limits. Write down three numbers for every project:</p>

<table>
<thead>
<tr><th>Number</th><th>What it is</th><th>How to set it</th></tr>
</thead>
<tbody>
<tr><td>Walk-away</td><td>The lowest fee you will accept</td><td>Estimated hours × your minimum effective rate, plus platform or payment fees</td></tr>
<tr><td>Target</td><td>The fee you realistically want</td><td>Your normal rate for this type of work, or a share of the value delivered</td></tr>
<tr><td>Opening</td><td>The first number you say</td><td>Typically 10% to 20% above target, leaving room to concede on terms</td></tr>
</tbody>
</table>

<p>Your walk-away number is not a starting point for discounts. It is the line you will not cross. Knowing it makes you calmer, because you can say no without panic.</p>

<h3>Worked example: setting the numbers</h3>

<p>A freelance designer is quoting a brand identity project she estimates at 40 hours.</p>

<ul>
<li>Minimum effective rate: $75 an hour, so walk-away = 40 × $75 = <strong>$3,000</strong></li>
<li>Usual project rate for this work: <strong>$4,500</strong> (target)</li>
<li>Opening quote: about 15% above target, rounded to <strong>$5,200</strong></li>
</ul>

<p>She now has $2,200 of room between opening and walk-away, and she knows exactly how far she can go.</p>

<h2>Ask Before You Price</h2>

<p>The person with more information usually negotiates better. Before you name a fee, ask:</p>

<ul>
<li>What does success look like for this project?</li>
<li>What is the deadline, and what is driving it?</li>
<li>Who else is involved in the decision?</li>
<li>Have you worked with a freelancer on this before? What worked and what did not?</li>
<li>Do you have a budget range in mind?</li>
</ul>

<p>The budget question feels awkward, but most clients have a number. If theirs is far below your walk-away, you have saved hours of proposal writing. If it is above your target, you have just avoided underpricing. When the outcome is easy to measure, the answers also support <a href="/blog/value-based-pricing">value-based pricing</a>, which shifts the discussion from hours to results.</p>

<h2>Anchor With a Specific Number</h2>

<p>The first number in a negotiation tends to anchor everything after it. Use that in your favour:</p>

<ul>
<li><strong>Say a specific figure.</strong> "$5,200" sounds considered; "around five thousand" sounds negotiable.</li>
<li><strong>Avoid wide ranges.</strong> If you say "$3,500 to $5,500", expect to hear "$3,500 works".</li>
<li><strong>Lead with value.</strong> Restate the goal and deliverables before the price, so the price lands as the cost of an outcome.</li>
<li><strong>Put it in writing.</strong> A clear <a href="/blog/freelance-proposal-template">freelance proposal</a> or <a href="/blog/estimate-template">estimate</a> makes the fee look settled.</li>
</ul>

<h3>Script: presenting your rate</h3>

<p><em>"Based on what you have told me, you need [outcome] by [date]. That covers [deliverable 1], [deliverable 2] and [deliverable 3], with two rounds of revisions. My fee for this project is $5,200, with 40% up front and the balance on delivery."</em></p>

<p>Then stop talking. Silence after a price is normal. Filling it with "but I can be flexible" is how freelancers discount themselves before the client has said a word.</p>

<h2>Handling Pushback Without Cutting Your Price</h2>

<p>When a client says "that is more than we expected", it is the start of the negotiation, not the end. The golden rule: <strong>never reduce the price for the same scope</strong>. Every concession should come with something in return.</p>

<table>
<thead>
<tr><th>You give</th><th>You ask for in return</th></tr>
</thead>
<tbody>
<tr><td>Lower price</td><td>Reduced scope, fewer revisions, or one deliverable removed</td></tr>
<tr><td>Lower price</td><td>Longer deadline so you can fit it around other work</td></tr>
<tr><td>Lower price</td><td>Larger deposit, such as 50% up front with a <a href="/blog/deposit-invoice">deposit invoice</a></td></tr>
<tr><td>Small discount</td><td>Payment within 7 days, or an <a href="/blog/early-payment-discount">early payment discount</a> on the invoice</td></tr>
<tr><td>Lower rate</td><td>A three or six month commitment, or a case study and testimonial</td></tr>
</tbody>
</table>

<h3>Script: when the client says it is too expensive</h3>

<p><em>"I understand. Can I ask what budget you had in mind? ... Thanks. To get closer to that, we could start with the logo and core brand colours now and add the full guidelines document in a second phase. That would bring this phase to $3,800. Or we can keep the full scope at $5,200 and split it into three milestone payments. Which works better for you?"</em></p>

<p>This gives two options, both acceptable to you, and moves the conversation from "whether" to "which". Splitting payments into <a href="/blog/milestone-payments">milestone payments</a> often solves a cash-flow objection without any discount.</p>

<h2>Counteroffer Scripts</h2>

<p>Sometimes the client makes the first offer. Here is how to respond.</p>

<h3>Counteroffer script: offer below target, above walk-away</h3>

<p><em>"Thank you for the offer of $3,600. Based on the scope, which includes [deliverables], my fee is $5,200. I can meet you at $4,500 if we move the deadline to [date] and agree 50% up front. Let me know if that works."</em></p>

<h3>Counteroffer script: offer below your walk-away</h3>

<p><em>"Thanks for considering me. At $2,500 I would not be able to deliver the full scope to the standard you need. For that budget I could deliver [smaller scope]. If the full project is important, my fee is $4,500. Either way, I am happy to help."</em></p>

<h3>Counteroffer rules</h3>

<ol>
<li>Acknowledge their number politely.</li>
<li>Restate the scope and value before your figure.</li>
<li>Link every concession to something you get.</li>
<li>Make each move smaller than the last ($5,200 to $4,700 to $4,500, not $5,200 to $4,000).</li>
<li>Never go below your walk-away. Offer less scope instead.</li>
</ol>

<h2>Negotiating Beyond the Rate</h2>

<p>Price is only one lever. When a client's budget is fixed, negotiate the other terms that affect your real earnings:</p>

<ul>
<li><strong>Payment terms.</strong> Net 7 or Net 14 instead of Net 60. See our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li><strong>Deposit size.</strong> Larger deposits reduce your risk.</li>
<li><strong>Revision rounds.</strong> Cap them and price extra rounds.</li>
<li><strong>Usage rights.</strong> Limit usage at a lower fee, or charge more for full ownership.</li>
<li><strong>Kill fee.</strong> A cancellation fee if the client ends the project early.</li>
<li><strong>Expenses.</strong> Who pays for software, stock assets or travel.</li>
</ul>

<p>A slightly lower fee with 50% up front and Net 7 terms can be worth more than a higher fee paid 90 days late.</p>

<h2>How to Negotiate Freelance Rates With Existing Clients</h2>

<p>Raising rates for current clients is a negotiation too, but you hold more cards: they know your work and replacing you costs time. Give written notice, typically 30 to 60 days, state the new rate and start date, and mention the results you have delivered. Our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> covers the timing and wording in detail.</p>

<p><em>"From 1 January, my rate for new work will be $95 an hour, up from $80. Projects already booked will stay at the current rate. Thank you for the work together this year; I am looking forward to [next project]."</em></p>

<h2>How to Negotiate Freelance Rates by Email</h2>

<p>Many negotiations happen in writing, especially with international clients. Email has advantages: you have time to think, and there is a record of what was agreed. The risk is that tone is easy to misread and short replies can sound defensive. Use a simple structure:</p>

<ol>
<li>Thank them for the reply or offer.</li>
<li>Restate their goal in one sentence.</li>
<li>Give your figure and what it includes.</li>
<li>Offer one or two alternatives that trade scope or terms.</li>
<li>End with a clear next step.</li>
</ol>

<p><em>"Hi [Name], thanks for getting back to me. I know the priority is launching the new site before [date]. For the full scope (eight pages, copy editing and two revision rounds) my fee is $5,200. If budget is tight, a five-page version would be $3,900, or we can keep the full scope and spread payment across three milestones. Happy to jump on a 15-minute call if that is easier. Which option would you like to go with?"</em></p>

<p>Reply within a working day, keep the email short, and never send your walk-away number. If the client goes quiet, one polite follow-up after three or four working days is enough.</p>

<h2>Negotiating With Agencies and Larger Companies</h2>

<p>When you negotiate freelance rates with an agency or a corporate buyer, the person you speak to often does not control the budget. Ask early who approves the fee and whether there is a fixed rate card. Agencies may need a margin on your fee, so your rate has to leave room for it while still clearing your walk-away. Large companies often have standard payment terms of 30 to 60 days and a supplier setup process; rather than fighting those terms, you can price the delay into your fee or ask for a deposit on the first project. Procurement teams expect negotiation, so an opening number above target is normal and not a sign of greed.</p>

<h2>Mistakes That Cost Freelancers Money</h2>

<ul>
<li><strong>Discounting before being asked.</strong> Let the client raise price before you offer a reduction.</li>
<li><strong>Splitting the difference.</strong> Automatically meeting in the middle rewards lowball first offers.</li>
<li><strong>Negotiating by email only.</strong> A short call often builds trust faster, then confirm in writing.</li>
<li><strong>Accepting vague scope.</strong> A low price with unclear deliverables usually becomes a lower effective rate.</li>
<li><strong>Forgetting fees.</strong> Platform and payment fees come off your fee, so include them in your walk-away.</li>
<li><strong>Not writing it down.</strong> Every agreed change should appear in the contract and on the invoice.</li>
<li><strong>Negotiating when you are desperate.</strong> If a quiet month is pushing you to accept anything, set your walk-away number before the call and stick to it. A short gap in work usually costs less than months tied to an underpriced client who blocks better opportunities.</li>
<li><strong>Treating every client the same.</strong> A long-term client with steady work may deserve a slightly better rate than a one-off rush job. Price rush work, weekend work and unclear briefs higher.</li>
</ul>

<h2>Confirm and Invoice the Agreed Terms</h2>

<p>Once you agree, send a short confirmation listing the fee, scope, deadline, payment schedule and any concessions. Then make your invoices match it exactly. In the free <a href="/invoice-generator">invoice generator</a> you can add an invoice-level discount if you agreed one, include the payment terms in the notes, and record the deposit as amount paid on later invoices. A clean layout such as the <a href="/invoice-templates/modern">modern invoice template</a> keeps the document professional.</p>

<h2>Conclusion</h2>

<p>You can negotiate freelance rates without being pushy or giving your work away. Know your three numbers, ask before you price, anchor with a specific figure, trade scope instead of price, and write down what you agree. Practise the scripts above and the conversations get easier with every client. When the deal is done, send a clear deposit invoice from the <a href="/invoice-generator">invoice generator</a> and get started.</p>`,
  },
];
