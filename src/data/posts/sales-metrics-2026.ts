import type { PostDraft } from "../blog";

export const SALES_METRICS_2026_POSTS: PostDraft[] = [
  {
    slug: "net-promoter-score",
    title: "Net Promoter Score (NPS): Formula and Benchmarks",
    description:
      "Net Promoter Score explained: the NPS formula, a worked example, what counts as a good score, B2B benchmarks, survey timing and how to act on detractors.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "customer-lifetime-value",
      "client-onboarding-checklist",
      "financial-ratios-small-business",
    ],
    faqs: [
      {
        q: "How do you calculate Net Promoter Score?",
        a: "Ask customers how likely they are to recommend you to a friend or colleague on a 0 to 10 scale. Count 9s and 10s as promoters, 7s and 8s as passives, and 0 to 6 as detractors. Subtract the percentage of detractors from the percentage of promoters. For example, 50% promoters minus 20% detractors gives an NPS of +30. Passives count in the total responses but not in either group.",
      },
      {
        q: "What is a good Net Promoter Score?",
        a: "Any score above zero means you have more promoters than detractors. As a rough guide, above +30 is solid, above +50 is strong and above +70 is exceptional. Benchmarks vary by industry and survey method: B2B services benchmarks from ClearlyRated have hovered around +40 in recent years. The most useful comparison is your own score over time, measured the same way, rather than another company's number.",
      },
      {
        q: "Can Net Promoter Score be negative?",
        a: "Yes. NPS ranges from -100, where every respondent is a detractor, to +100, where every respondent is a promoter. A negative score means more customers gave 0 to 6 than 9 or 10. That is a warning sign worth investigating through follow-up conversations, especially if detractors share common complaints such as slow delivery, billing errors or poor communication. Fixing the top complaint usually moves the score more than any campaign.",
      },
      {
        q: "How many responses do I need for a reliable NPS?",
        a: "There is no fixed minimum, but scores from small samples swing a lot. With 20 responses, one client moving from a 6 to a 9 changes your score by 10 points. Small businesses should treat NPS as a conversation starter and look at the comments behind each score. Track a rolling 12-month figure rather than reacting to one month, and report the number of responses alongside the score.",
      },
      {
        q: "How often should a small business send an NPS survey?",
        a: "For project-based services, send it once after each project closes or the final invoice is paid. For ongoing clients and subscriptions, a survey every six or twelve months is enough. Surveying too often causes fatigue and lower response rates. Avoid sending it right after a billing dispute or support issue unless you specifically want transactional feedback on that interaction.",
      },
      {
        q: "Who created Net Promoter Score?",
        a: "Fred Reichheld of Bain and Company introduced Net Promoter Score in a December 2003 Harvard Business Review article titled 'The One Number You Need to Grow.' It was developed with Bain and Satmetrix, and Net Promoter is a registered trademark. The idea was that a single recommendation question predicts growth and loyalty. Researchers have since debated how well it predicts growth compared with other satisfaction measures.",
      },
      {
        q: "What is the difference between NPS and CSAT?",
        a: "Net Promoter Score measures overall loyalty and willingness to recommend, using a 0 to 10 scale and the promoter-minus-detractor formula. Customer satisfaction score, or CSAT, measures satisfaction with a specific interaction, such as a support call or delivery, usually on a 1 to 5 scale, reported as the percentage of satisfied responses. Many businesses use CSAT after individual touchpoints and NPS for the relationship overall.",
      },
    ],
    content: `
<p>Net Promoter Score (NPS) measures customer loyalty with one question: "How likely are you to recommend us to a friend or colleague?" on a 0 to 10 scale. You subtract the percentage of detractors (0-6) from the percentage of promoters (9-10) to get a score between -100 and +100. Above zero is positive, above +50 is strong, and the most useful benchmark is your own score tracked over time.</p>

<p>For a small business, NPS is less about the number and more about what it starts: a short conversation with unhappy clients before they leave, and a list of happy clients ready to give referrals or testimonials. This guide covers the formula, a worked example, benchmarks, how to run the survey, and what to do with the results.</p>

<h2>Where NPS comes from</h2>
<p>Fred Reichheld of Bain &amp; Company introduced the metric in the December 2003 Harvard Business Review article "The One Number You Need to Grow." His argument was that willingness to recommend predicted repeat business and growth better than long satisfaction questionnaires. Net Promoter is a registered trademark associated with Bain, Reichheld and Satmetrix. The metric is widely used, but researchers have questioned whether it predicts growth better than ordinary satisfaction measures, so treat it as one useful signal rather than a complete picture.</p>

<h2>The Net Promoter Score formula</h2>
<p><strong>NPS = % promoters - % detractors</strong></p>
<table><thead><tr><th>Group</th><th>Score given</th><th>What it usually means</th></tr></thead><tbody>
<tr><td>Promoters</td><td>9-10</td><td>Loyal, likely to buy again and refer others</td></tr>
<tr><td>Passives</td><td>7-8</td><td>Satisfied but could switch to a competitor</td></tr>
<tr><td>Detractors</td><td>0-6</td><td>Unhappy; at risk of leaving or complaining</td></tr>
</tbody></table>
<p>Passives count in the total number of responses but are not added or subtracted. NPS is reported as a whole number, not a percentage: "+32," not "32%."</p>

<h2>Worked example: calculating NPS for a small agency</h2>
<p>An illustrative example. A marketing agency surveys its 60 active and recent clients after their projects close or at their retainer anniversary. 40 reply.</p>
<table><thead><tr><th>Group</th><th>Responses</th><th>Share of 40</th></tr></thead><tbody>
<tr><td>Promoters (9-10)</td><td>22</td><td>55%</td></tr>
<tr><td>Passives (7-8)</td><td>11</td><td>27.5%</td></tr>
<tr><td>Detractors (0-6)</td><td>7</td><td>17.5%</td></tr>
</tbody></table>
<p>NPS = 55% - 17.5% = 37.5, reported as <strong>+38</strong> (rounded).</p>
<p>Look at the comments next. Four of the seven detractors mention the same thing: invoices arrive with unclear line items and they have to email to ask what each charge covers. That is not a marketing problem, and it is cheap to fix. The agency switches to itemized invoices that match the scope in each proposal. Six months later, with a similar sample, two of those clients have moved to passive and the score is +45.</p>
<p>Notice how sensitive small samples are: with 40 responses, each client moving from detractor to promoter shifts the score by 5 points. Always report the response count with the score.</p>

<h2>What is a good Net Promoter Score? Benchmarks</h2>
<p>Benchmarks depend heavily on industry, survey method and who is asked, so use them as context only.</p>
<table><thead><tr><th>NPS range</th><th>Rough interpretation</th></tr></thead><tbody>
<tr><td>Below 0</td><td>More detractors than promoters; investigate urgently</td></tr>
<tr><td>0 to +30</td><td>Positive, but room to improve</td></tr>
<tr><td>+30 to +50</td><td>Solid for most service businesses</td></tr>
<tr><td>+50 to +70</td><td>Strong; customers actively recommend you</td></tr>
<tr><td>Above +70</td><td>Exceptional; rare at scale</td></tr>
</tbody></table>
<p>For business-to-business service firms, <a href="https://www.clearlyrated.ai/resources/2023-nps-benchmarks-for-the-b2b-services-industry" target="_blank" rel="noopener noreferrer">ClearlyRated's B2B services benchmark research</a> reported industry NPS hovering around +40 from 2021 to 2023. Small, owner-led firms often score higher than large companies because clients deal directly with the person doing the work, but a small sample can also flatter you. Compare against yourself first.</p>

<h2>How to run an NPS survey step by step</h2>
<ol>
<li><strong>Decide when to ask.</strong> After a project closes, after the final invoice is paid, or every 6-12 months for ongoing clients.</li>
<li><strong>Keep it to two questions.</strong> The 0-10 recommendation question, then "What is the main reason for your score?" as an open text box.</li>
<li><strong>Choose a tool.</strong> A free form tool works, and many CRMs and email platforms include NPS survey features.</li>
<li><strong>Send from a real person.</strong> A short personal note gets more replies than a no-reply survey link.</li>
<li><strong>Calculate</strong> the score and tag each comment by theme: price, quality, speed, communication, billing.</li>
<li><strong>Close the loop.</strong> Reply to every detractor within a few days and thank every promoter.</li>
<li><strong>Repeat</strong> on the same schedule and wording so scores are comparable.</li>
</ol>

<h3>Sample NPS email</h3>
<p><strong>Subject:</strong> One quick question about [project]</p>
<p>Hi [Name], thanks for working with us on [project]. On a scale of 0-10, how likely are you to recommend us to a friend or colleague? Just reply with a number, and if you have a moment, tell us the main reason. Every reply is read by me personally. - [Your name]</p>

<h2>What to do with promoters, passives and detractors</h2>
<table><thead><tr><th>Group</th><th>Follow-up action</th><th>Timing</th></tr></thead><tbody>
<tr><td>Promoters</td><td>Thank them; ask for a testimonial, review or referral</td><td>Within a week</td></tr>
<tr><td>Passives</td><td>Ask what would make it a 9 or 10</td><td>Within two weeks</td></tr>
<tr><td>Detractors</td><td>Personal call or email; acknowledge, fix if possible</td><td>Within 48 hours</td></tr>
</tbody></table>
<p>Promoters are your best source of social proof. Our <a href="/blog/testimonial-request-email">testimonial request email templates</a> are designed for exactly this moment, and the same promoters are the best people to ask for an online review. Do not offer rewards only to people who promise a positive review; the FTC's 2024 rule on consumer reviews prohibits incentives conditioned on sentiment.</p>
<p>Detractors are your early warning system. A detractor you call personally sometimes becomes your most loyal client, because few businesses bother. Common root causes include missed deadlines, scope disagreements and billing confusion. If billing is the issue, tightening your <a href="/blog/client-onboarding-checklist">client onboarding process</a> so payment terms are agreed up front often fixes it.</p>

<h2>NPS and revenue: why the score matters financially</h2>
<p>NPS is a leading indicator. Detractors are more likely to cancel, which shows up later as <a href="/blog/churn-rate">churn</a>, while promoters tend to stay longer, buy more and refer others, raising <a href="/blog/customer-lifetime-value">customer lifetime value</a>. A practical way to connect the two is to tag each client in your records with their latest NPS group, then compare a year later: what share of detractors renewed versus promoters? That one comparison tells you how much a point of NPS is worth to your business.</p>

<h2>Relationship NPS vs transactional NPS</h2>
<p>There are two common ways to run the survey, and they answer different questions.</p>
<table><thead><tr><th></th><th>Relationship NPS</th><th>Transactional NPS</th></tr></thead><tbody>
<tr><td>When it is sent</td><td>On a schedule, such as every 6 or 12 months</td><td>Right after a specific event: project delivery, support ticket, first invoice</td></tr>
<tr><td>What it measures</td><td>Overall loyalty to your business</td><td>How one touchpoint shaped their view</td></tr>
<tr><td>Best for</td><td>Retainers, subscriptions, long-term clients</td><td>Project work and finding weak steps in your process</td></tr>
<tr><td>Risk</td><td>Slow to show the effect of changes</td><td>Can swing with one bad day</td></tr>
</tbody></table>
<p>Most small businesses should start with one of these, not both. A project-based freelancer gets the most from a transactional survey sent once the final invoice is paid, while a business with monthly retainer clients is better served by a yearly relationship survey.</p>

<h2>What to do if your NPS drops</h2>
<ol>
<li><strong>Check the sample first.</strong> Did fewer people reply, or did a different type of client reply? A drop from +45 to +30 on 15 responses may be noise.</li>
<li><strong>Read every detractor comment</strong> from the period and group them by theme.</li>
<li><strong>Look for a recent change:</strong> a price increase, a new team member, a slower turnaround, a new billing system.</li>
<li><strong>Call the detractors.</strong> Ask what happened and what would fix it. Some problems, such as a late or confusing invoice, are quick to put right.</li>
<li><strong>Tell clients what you changed.</strong> A short note saying "you told us X, so we did Y" earns goodwill and more honest feedback next time.</li>
</ol>
<p>Sometimes a low score reveals a client who is simply a poor fit, someone whose expectations or budget you cannot meet. In that case, ending the relationship politely may be better for both sides; our guide on <a href="/blog/how-to-fire-a-client">how to fire a client</a> covers how to do it professionally, including the final invoice. And if detractor comments keep mentioning billing disputes, review how you track what clients owe in your <a href="/blog/accounts-receivable-guide">accounts receivable</a> process.</p>

<h2>Common NPS mistakes</h2>
<ul>
<li><strong>Chasing the number.</strong> Asking clients to "please give us a 10" makes the score meaningless.</li>
<li><strong>Surveying only happy clients.</strong> Cherry-picking inflates the score and hides problems.</li>
<li><strong>Ignoring comments.</strong> The reason behind the score is more valuable than the score.</li>
<li><strong>Changing the question.</strong> Altered wording or scales break comparisons over time.</li>
<li><strong>Comparing across industries.</strong> A +30 for an internet provider and a +30 for a boutique agency mean different things.</li>
<li><strong>Not closing the loop.</strong> Customers stop responding if nothing ever changes.</li>
</ul>

<h2>NPS alongside other metrics</h2>
<p>NPS works best with a few hard numbers: churn or retention rate, repeat purchase rate, average days to pay, and revenue per client. Our guide to <a href="/blog/financial-ratios-small-business">financial ratios for small business</a> covers the money side. If clients who rate you highly also pay faster and renew more, you have strong evidence that service quality drives profit.</p>
<p>Billing is part of the experience clients rate. Clear, itemized invoices that match what was agreed remove one of the most common sources of detractor comments. Create professional invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download them as PDFs ready to send.</p>
`,
  },
  {
    slug: "sales-pipeline-stages",
    title: "Sales Pipeline Stages for Small Businesses (Guide)",
    description:
      "Sales pipeline stages for small businesses and freelancers: a 7-stage model, exit criteria, conversion rates, a weighted pipeline example and how it ties to invoicing.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "sales-forecast",
      "freelance-proposal-template",
      "cash-flow-forecast",
    ],
    faqs: [
      {
        q: "What are the stages of a sales pipeline?",
        a: "A typical small business sales pipeline has six or seven stages: lead, qualified, discovery or needs assessment, proposal or quote sent, negotiation, closed won or lost, and for service firms, onboarding and first invoice. Names vary, but each stage should have a clear exit criterion, such as 'proposal sent and acknowledged by the client.' Fewer, well-defined stages work better for small teams than complex enterprise models.",
      },
      {
        q: "What is the difference between a sales pipeline and a sales funnel?",
        a: "A sales pipeline tracks individual deals and the actions your business takes to move each one forward, from first contact to payment. A sales funnel describes the buyer's journey in aggregate, showing how many prospects drop off at each step, from awareness to purchase. The pipeline is a working tool for managing deals day to day; the funnel is a view of conversion rates across the whole process.",
      },
      {
        q: "How do I calculate a weighted sales pipeline?",
        a: "Multiply each deal's value by the probability of closing it at its current stage, then add the results. For example, a $10,000 deal at the proposal stage with a 40% historical close rate counts as $4,000. Base the percentages on your own past win rates by stage rather than generic figures. The weighted total gives a more realistic forecast of revenue than adding up every open deal at full value.",
      },
      {
        q: "How many deals should be in my pipeline?",
        a: "Work backward from your revenue target. If you need $20,000 of new work a month, your average deal is $5,000 and you win one in three proposals, you need about four wins and roughly twelve proposals a month, plus enough leads upstream to produce them. Many businesses aim for pipeline coverage of about three times the revenue target, but your own conversion rates are the best guide.",
      },
      {
        q: "When should a deal be marked closed-lost?",
        a: "Mark a deal closed-lost when the prospect clearly declines, chooses a competitor, or goes silent after a defined number of follow-ups over a set period, such as three attempts over 30 days. Record the reason. Keeping dead deals open inflates your pipeline and makes forecasts unreliable. You can always reopen a deal later or move the contact into a nurture list for occasional check-ins.",
      },
      {
        q: "Do freelancers need a sales pipeline?",
        a: "Yes, even a simple one. Freelancers often swing between too much work and none because they stop selling while busy. A basic pipeline in a spreadsheet or free CRM, with columns for lead, proposal sent, negotiating, won and invoiced, shows at a glance whether next month's income is covered. Reviewing it for 15 minutes each week is usually enough to smooth out the feast-or-famine cycle.",
      },
    ],
    content: `
<p>A sales pipeline is a visual list of every potential deal, organized by stage from first contact to closed and paid. For a small business, a practical set of sales pipeline stages is: lead, qualified, discovery, proposal sent, negotiation, closed (won or lost) and onboarding/first invoice. Each stage needs a clear rule for when a deal moves forward, so you can forecast revenue and spot where deals stall.</p>

<p>Many owners and freelancers manage sales from memory and their inbox, which works until it does not. A deal goes quiet, a follow-up is forgotten, or a busy month ends with nothing lined up for the next. A simple pipeline, even a spreadsheet, prevents that. This guide explains each stage, the conversion maths, and a worked example of a weighted pipeline.</p>

<h2>Sales pipeline stages explained</h2>
<table><thead><tr><th>Stage</th><th>What happens</th><th>Exit criterion (move on when...)</th></tr></thead><tbody>
<tr><td>1. Lead</td><td>Someone shows interest: enquiry form, referral, reply to outreach</td><td>You have contact details and a stated need</td></tr>
<tr><td>2. Qualified</td><td>You check fit: budget, timing, authority, need</td><td>The prospect meets your minimum criteria</td></tr>
<tr><td>3. Discovery</td><td>Call or meeting to understand goals and scope</td><td>You can write a scope and price</td></tr>
<tr><td>4. Proposal or quote sent</td><td>Written proposal with price, scope and terms</td><td>The client has received and acknowledged it</td></tr>
<tr><td>5. Negotiation</td><td>Questions, revisions, scope or price changes</td><td>Verbal yes or a clear no</td></tr>
<tr><td>6. Closed won / lost</td><td>Signed agreement and deposit, or recorded loss reason</td><td>Contract signed or deal declined</td></tr>
<tr><td>7. Onboarding and first invoice</td><td>Kickoff, intake details, deposit or first invoice issued</td><td>First payment received</td></tr>
</tbody></table>
<p>Product sellers may stop at "closed won." Service businesses benefit from stage 7, because a signed deal that never pays is not revenue. Many small businesses treat "deposit received" as the real moment a deal is won.</p>

<h2>Stage by stage: what to do and common pitfalls</h2>
<h3>1. Lead</h3>
<p>Record every enquiry the same day with its source: referral, Google, social media, cold outreach. Source tracking later tells you which marketing is worth paying for, and lets you calculate <a href="/blog/customer-acquisition-cost">customer acquisition cost</a> by channel.</p>
<h3>2. Qualification</h3>
<p>Ask a few direct questions early: What is the timeline? Is there a budget range? Who else is involved in the decision? A short intake form on your website can collect this before the first call. Disqualifying poor fits early saves hours of proposal writing.</p>
<h3>3. Discovery</h3>
<p>Let the prospect talk. Your aim is to understand the problem well enough to price an outcome, not just list tasks. Confirm what success looks like and any deadlines.</p>
<h3>4. Proposal or quote</h3>
<p>Send it within two business days of discovery while interest is high. Include scope, price, timeline, payment terms and what is excluded. Our <a href="/blog/freelance-proposal-template">freelance proposal template</a> and <a href="/blog/estimate-template">estimate template</a> cover the essentials. Schedule a follow-up on the day you send it.</p>
<h3>5. Negotiation</h3>
<p>Expect questions. If the client pushes on price, trade scope rather than discount the same work. Put any agreed changes in writing.</p>
<h3>6. Closed won or lost</h3>
<p>For wins, get a signed agreement and, where appropriate, a deposit before starting. For losses, record the reason: price, timing, chose competitor, no decision. After 20 or 30 losses, patterns appear.</p>
<h3>7. Onboarding and first invoice</h3>
<p>Kick off with a checklist, confirm billing contacts, and issue the deposit or first invoice promptly with clear terms. Deals that stall here often have unclear payment terms; fix that in the proposal stage.</p>

<h2>Pipeline conversion rates and the maths behind them</h2>
<p>Every stage leaks. The useful numbers are your stage-to-stage conversion rates, calculated from your own history:</p>
<p><strong>Stage conversion rate = deals that reached the next stage / deals that entered this stage</strong></p>
<p>Working backward from a revenue goal:</p>
<ol>
<li>Monthly new revenue target: $15,000.</li>
<li>Average deal size: $3,000. Wins needed: 5.</li>
<li>Proposal win rate: 35%. Proposals needed: 5 / 0.35 = about 14-15.</li>
<li>Discovery to proposal rate: 70%. Discovery calls needed: about 21.</li>
<li>Lead to discovery rate: 40%. Leads needed: about 53 a month.</li>
</ol>
<p>The figures are illustrative; plug in your own. The exercise quickly shows whether your problem is too few leads, weak qualification, or proposals that do not convert.</p>

<h2>Worked example: a weighted sales pipeline</h2>
<p>An illustrative example. A small web design studio uses its own historical win rates by stage to weight open deals.</p>
<table><thead><tr><th>Deal</th><th>Stage</th><th>Value</th><th>Historical close rate at this stage</th><th>Weighted value</th></tr></thead><tbody>
<tr><td>Dental clinic site</td><td>Discovery</td><td>$8,000</td><td>20%</td><td>$1,600</td></tr>
<tr><td>Bakery ordering page</td><td>Proposal sent</td><td>$4,500</td><td>40%</td><td>$1,800</td></tr>
<tr><td>Law firm redesign</td><td>Proposal sent</td><td>$12,000</td><td>40%</td><td>$4,800</td></tr>
<tr><td>Gym membership portal</td><td>Negotiation</td><td>$6,000</td><td>70%</td><td>$4,200</td></tr>
<tr><td>Café maintenance retainer</td><td>Closed won, awaiting deposit</td><td>$2,400</td><td>95%</td><td>$2,280</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>$32,900</strong></td><td></td><td><strong>$14,680</strong></td></tr>
</tbody></table>
<p>The unweighted pipeline looks like $32,900, but a realistic expectation is about $14,700. If the studio needs $20,000 of new work next quarter, it needs more leads now, not in two months. This weighted figure feeds directly into a <a href="/blog/sales-forecast">sales forecast</a> and, once deposits and payment terms are added, a <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</p>

<h2>Sales pipeline vs sales funnel</h2>
<p>The two terms are often used interchangeably, but they look at the same process from different angles.</p>
<table><thead><tr><th></th><th>Sales pipeline</th><th>Sales funnel</th></tr></thead><tbody>
<tr><td>Focus</td><td>Individual deals and your next action on each</td><td>Aggregate conversion from awareness to purchase</td></tr>
<tr><td>Viewpoint</td><td>Seller's process</td><td>Buyer's journey</td></tr>
<tr><td>Main question</td><td>"What do I need to do this week to close deals?"</td><td>"Where do most prospects drop off?"</td></tr>
<tr><td>Typical tool</td><td>CRM board or deal spreadsheet</td><td>Marketing analytics and conversion reports</td></tr>
</tbody></table>
<p>Small businesses need the pipeline first. Once you have a few months of data, the funnel view, built from your stage conversion rates, tells you where to invest: more leads, better qualification or stronger proposals.</p>

<h2>Pipeline stages for different kinds of small business</h2>
<p>The seven-stage model fits most service firms, but adjust it to how you actually sell:</p>
<ul>
<li><strong>Trades and home services:</strong> enquiry, site visit booked, estimate sent, follow-up, job booked (deposit paid), job complete, invoice paid. The site visit is the key conversion point.</li>
<li><strong>Freelancers:</strong> lead, discovery call, proposal sent, won (contract and deposit), invoiced, paid. Keep it simple enough to update in two minutes.</li>
<li><strong>B2B agencies and consultants:</strong> add a "pitch or presentation" stage and, for larger clients, a "procurement and vendor setup" stage, because vendor forms and purchase orders can add weeks.</li>
<li><strong>Subscription and retainer businesses:</strong> add a "trial" or "first month" stage, since the real win is the client still paying in month three.</li>
</ul>
<p>Whatever stages you choose, write a one-line exit rule for each and stick to it. A pipeline is only as good as the honesty of the stage each deal sits in.</p>

<h2>Pipeline metrics to track</h2>
<table><thead><tr><th>Metric</th><th>Formula</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Pipeline value</td><td>Sum of open deal values</td><td>Size of potential work</td></tr>
<tr><td>Weighted pipeline</td><td>Sum of (value x stage probability)</td><td>Realistic revenue expectation</td></tr>
<tr><td>Win rate</td><td>Deals won / deals closed (won + lost)</td><td>Proposal and pricing effectiveness</td></tr>
<tr><td>Sales cycle length</td><td>Average days from lead to closed won</td><td>How far ahead you must sell</td></tr>
<tr><td>Average deal size</td><td>Total won revenue / deals won</td><td>Shows whether you are moving upmarket</td></tr>
<tr><td>Pipeline coverage</td><td>Pipeline value / revenue target</td><td>Whether there is enough in play</td></tr>
</tbody></table>

<h2>Tools: spreadsheet or CRM?</h2>
<p>A spreadsheet with one row per deal and columns for stage, value, next action and date is enough for a freelancer with a handful of deals a month. Once you have several people selling or more than 20 open deals, a CRM with a drag-and-drop pipeline view saves time and reminds you about follow-ups. Several CRMs have free plans; we compare them in <a href="/blog/free-crm-small-business">best free CRM for small business</a>. If you also need proposals, contracts and invoices in one place, see <a href="/blog/honeybook-vs-dubsado">HoneyBook vs Dubsado</a>.</p>

<h2>Common pipeline mistakes</h2>
<ul>
<li><strong>Too many stages.</strong> Small teams do not need twelve stages; vague stages get skipped.</li>
<li><strong>No exit criteria.</strong> If "negotiation" means different things to different people, the pipeline lies.</li>
<li><strong>Keeping dead deals open.</strong> Close them out after a defined number of follow-ups.</li>
<li><strong>Stopping selling when busy.</strong> The pipeline empties while you deliver, causing feast-or-famine months.</li>
<li><strong>Forgetting the money stage.</strong> A deal is not finished until the invoice is paid. Track deposit and first payment, and use <a href="/blog/payment-reminder-emails">payment reminder emails</a> when needed.</li>
</ul>

<h2>What to do if your pipeline runs dry</h2>
<p>If the weighted pipeline falls below next month's target, act on the top of the pipeline first, because leads take weeks to become revenue. Contact past clients (repeat work closes fastest), ask happy clients for introductions, follow up on proposals that went quiet in the last 90 days, and restart regular outreach. Avoid the temptation to slash prices to close the deals you have; a discount on work already in negotiation reduces margin without adding a single new deal.</p>

<h2>Weekly pipeline review routine</h2>
<ol>
<li>Add any new leads and sources.</li>
<li>Update every deal's stage and next action date.</li>
<li>Close out stale deals with a loss reason.</li>
<li>Check weighted pipeline against next month's target.</li>
<li>Follow up on every proposal older than five business days.</li>
<li>Check that every won deal has an invoice issued.</li>
</ol>
<p>That last step is where many small businesses lose money quietly. When a deal moves to won, send the deposit or first invoice the same day. Our <a href="/invoice-generator">free invoice generator</a> lets you create one without signing up and download it as a PDF, so the final stage of your pipeline is never the bottleneck.</p>
`,
  },
  {
    slug: "free-crm-small-business",
    title: "Best Free CRM for Small Business (2026 Compared)",
    description:
      "Best free CRM for small business in 2026: HubSpot, Zoho, Bitrix24, Freshsales and more compared on user limits, contacts, pipelines and what you outgrow first.",
    category: "comparisons",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "honeybook-vs-dubsado",
      "freshbooks-vs-wave",
      "client-onboarding-checklist",
    ],
    faqs: [
      {
        q: "What is the best free CRM for a small business?",
        a: "For most small businesses, HubSpot's free CRM is the most complete starting point, with contact management, a deal pipeline, email tracking and marketing email sends for up to two users. Zoho CRM's free edition suits teams of up to three who want workflow automation. Bitrix24's free plan suits one or two people who also want tasks and chat. The best choice depends on team size and which limits you hit first.",
      },
      {
        q: "Is HubSpot CRM really free?",
        a: "Yes, HubSpot offers free tools with no time limit and no credit card required. As of late 2026, its pricing page lists the free plan for up to two users and 1,000 contacts, with 2,000 marketing email sends a month and HubSpot branding on emails, forms and meeting links. Advanced automation, removing branding and more users require paid Starter or higher plans, which are charged per seat.",
      },
      {
        q: "Does Pipedrive have a free plan?",
        a: "Pipedrive does not offer a permanent free plan; it offers a free trial before you choose a paid plan. It is popular with small sales teams for its visual pipeline, so it is worth trialing if a pipeline view is your main need and you are willing to pay. If you need something free indefinitely, HubSpot, Zoho CRM's free edition or Bitrix24 are better places to start.",
      },
      {
        q: "Can I use a spreadsheet instead of a CRM?",
        a: "Yes, especially if you are a freelancer with a handful of clients and deals. A spreadsheet with one row per contact or deal, columns for stage, value, next action and date, and a weekly review works fine. Move to a CRM when you miss follow-ups, have more than one person selling, or need email tracking and reminders. Free CRMs make that move low-risk.",
      },
      {
        q: "Can a free CRM send invoices?",
        a: "Most free CRMs are built for contacts, deals and email, not billing. Some offer quotes or connect to accounting and payment tools, but full invoicing usually needs a separate invoicing app, an accounting system or a paid tier. Many small businesses track deals in a free CRM and create invoices separately, then mark the deal as invoiced and paid in the CRM.",
      },
      {
        q: "What should I look for in a free CRM?",
        a: "Check the user limit, contact or record limit, number of pipelines, email integration with Gmail or Outlook, mobile app, data import and export, and what branding appears on emails or forms. Also check how easy it is to export your data if you leave, and what the first paid tier costs per user, because that is what you will pay when you outgrow the free plan.",
      },
    ],
    content: `
<p>The best free CRM for most small businesses in 2026 is HubSpot's free CRM, which covers contacts, a deal pipeline and basic email marketing for up to two users. Zoho CRM's free edition is the better pick for teams of three that want simple automation, and Bitrix24's free plan suits one or two people who also want tasks and chat in the same tool. Below we compare free plans on users, contacts, pipelines and limits, and explain which limit you are likely to hit first.</p>

<p>A CRM (customer relationship management system) keeps every contact, conversation and deal in one place so follow-ups do not slip. For a small business, the main jobs are: remember who you talked to, track deals through your <a href="/blog/sales-pipeline-stages">sales pipeline stages</a>, and remind you what to do next. Free plans handle those jobs well. Where they differ is in limits.</p>

<h2>Free CRM comparison table (late 2026)</h2>
<p>Free plan terms change often. These details come from vendor pricing pages checked in November 2026; confirm before you commit.</p>
<table><thead><tr><th>CRM</th><th>Free users</th><th>Key free limits</th><th>Strengths</th><th>Weak spots on free</th></tr></thead><tbody>
<tr><td>HubSpot free tools</td><td>Up to 2</td><td>1,000 contacts; 2,000 marketing emails/month; up to 15 pipelines across objects</td><td>Polished, easy, good Gmail/Outlook integration, forms and meeting links</td><td>HubSpot branding; very limited automation; paid seats get expensive</td></tr>
<tr><td>Zoho CRM Free Edition</td><td>Up to 3</td><td>10 custom email templates; 5,000 API calls/day; limited data exports</td><td>Workflow automation, follow-up reminders, standard reports, mobile apps</td><td>Less intuitive interface; advanced features in paid editions</td></tr>
<tr><td>Bitrix24 Free</td><td>1-2</td><td>5 GB storage; basic CRM with 1 sales pipeline</td><td>CRM plus tasks, Kanban, calendars, chat and video calls</td><td>Busy interface; one pipeline</td></tr>
<tr><td>Freshsales (Freshworks)</td><td>Small teams (has offered up to 3)</td><td>Contact and deal management on free tier</td><td>Built-in phone and email features</td><td>Free tier terms have varied; check current page</td></tr>
<tr><td>Pipedrive</td><td>None (trial only)</td><td>No permanent free plan</td><td>Excellent visual pipeline</td><td>Paid from day one after the trial</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.hubspot.com/pricing/crm" target="_blank" rel="noopener noreferrer">HubSpot CRM pricing</a>, <a href="https://www.zoho.com/crm/zohocrm-pricing.html" target="_blank" rel="noopener noreferrer">Zoho CRM pricing</a> and Bitrix24's pricing page.</p>

<h2>HubSpot free CRM: best all-rounder</h2>
<p>HubSpot's free plan is the default recommendation because it is easy to set up and covers more than contacts. You get a deal pipeline, email tracking, forms, a meetings booking link, live chat and up to 2,000 marketing email sends per calendar month. The pricing page lists the free plan for up to two users and 1,000 contacts.</p>
<p><strong>Best for:</strong> solo owners and two-person teams who want one tool for leads, deals and light email marketing.</p>
<p><strong>Watch for:</strong> HubSpot branding on emails, forms and meeting links; one automated action; per-seat costs that climb quickly if you add paid users later.</p>

<h2>Zoho CRM Free Edition: best for small teams wanting automation</h2>
<p>Zoho's pricing page describes its Free Edition as free forever for three users, with contact management, follow-up reminders, workflow automation, custom email templates (up to 10), task and call tracking, standard reports and mobile apps. If you already use other Zoho tools, such as Zoho Books or Zoho Invoice, integration is a bonus.</p>
<p><strong>Best for:</strong> teams of up to three that want rules such as "assign new web leads to Ana and create a follow-up task."</p>
<p><strong>Watch for:</strong> a steeper learning curve and caps on data exports.</p>

<h2>Bitrix24 Free: best for CRM plus collaboration</h2>
<p>Bitrix24's free plan is for one or two users and includes basic CRM for contacts and deals with one sales pipeline, 5 GB of storage, task boards, shared calendars, chat and video calls. It is more of a small-business workspace than a pure CRM.</p>
<p><strong>Best for:</strong> very small teams who want deals and project tasks in one place.</p>
<p><strong>Watch for:</strong> a crowded interface and the single pipeline.</p>

<h2>Freshsales and Pipedrive</h2>
<p>Freshsales has offered a free tier for small teams with contact and deal management and built-in phone features, but the terms have varied over time, so check Freshworks' pricing page for the current offer. Pipedrive has no permanent free plan, only a trial, but many small sales teams pay for it because its pipeline view is excellent. If a visual pipeline is your top priority and you can afford a modest per-seat fee, trial it alongside the free options.</p>

<h2>How to choose: a decision guide</h2>
<table><thead><tr><th>Your situation</th><th>Start with</th></tr></thead><tbody>
<tr><td>Solo freelancer, under 30 active contacts</td><td>A spreadsheet, or HubSpot free if you want reminders</td></tr>
<tr><td>Solo or duo, want email marketing too</td><td>HubSpot free</td></tr>
<tr><td>Team of three, want automation</td><td>Zoho CRM Free Edition</td></tr>
<tr><td>Need tasks, chat and CRM in one</td><td>Bitrix24 Free</td></tr>
<tr><td>Visual pipeline is the main need, budget available</td><td>Pipedrive trial</td></tr>
<tr><td>Creative service business needing proposals, contracts and invoices</td><td>An all-in-one client tool; see <a href="/blog/honeybook-vs-dubsado">HoneyBook vs Dubsado</a></td></tr>
</tbody></table>

<h2>Worked example: when does a free CRM stop being free?</h2>
<p>An illustrative case. A three-person cleaning company starts on a free plan that allows two users. Year one:</p>
<ul>
<li>Owner and office manager use the CRM; the third person (a crew lead) does not need access.</li>
<li>They track about 400 residential clients and 60 commercial prospects, well under a 1,000-contact cap.</li>
<li>Monthly newsletter goes to 400 clients, within a 2,000-send allowance.</li>
</ul>
<p>Year two, they hire a part-time salesperson and grow to 1,200 contacts. Now they exceed both the user and contact limits on that free plan. Options:</p>
<ol>
<li>Upgrade to a paid tier for every user who needs access.</li>
<li>Move to a CRM with a three-user free plan and accept fewer marketing features.</li>
<li>Archive inactive contacts (customers who have not booked in two years) to stay under the cap.</li>
</ol>
<p>The lesson: before choosing, estimate where you will be in 18 months on users and contacts, and check the price of the first paid tier per user. A free CRM you will outgrow in six months may cost more in migration time than a cheap paid tool.</p>

<h2>Setting up a free CRM in one afternoon</h2>
<ol>
<li>Export contacts from your email, phone and invoicing tool as CSV.</li>
<li>Clean duplicates and add a "source" column (referral, Google, repeat client).</li>
<li>Import into the CRM and connect your work email.</li>
<li>Set pipeline stages to match how you actually sell: lead, qualified, proposal sent, negotiating, won, invoiced.</li>
<li>Add open deals with values and next action dates.</li>
<li>Create two or three email templates for follow-ups.</li>
<li>Book a 15-minute weekly review in your calendar.</li>
</ol>
<p>If you collect details from new clients, connect your website enquiry form to the CRM so new leads arrive automatically, then follow the steps in our <a href="/blog/client-onboarding-checklist">client onboarding checklist</a> once they sign.</p>

<h2>Free CRM features compared: what actually matters</h2>
<p>Feature lists are long, but small businesses rely on a handful of capabilities day to day.</p>
<table><thead><tr><th>Feature</th><th>Why it matters</th><th>What to check on the free plan</th></tr></thead><tbody>
<tr><td>Email integration</td><td>Logs conversations automatically, so you are not copying and pasting</td><td>Works with Gmail and Outlook; two-way sync or just tracking</td></tr>
<tr><td>Pipeline board</td><td>Shows every deal by stage at a glance</td><td>Number of pipelines and custom stages allowed</td></tr>
<tr><td>Tasks and reminders</td><td>Prevents forgotten follow-ups, the main reason to use a CRM</td><td>Due-date reminders by email or mobile notification</td></tr>
<tr><td>Mobile app</td><td>Update deals from site visits and between meetings</td><td>Whether the app is included free</td></tr>
<tr><td>Forms</td><td>Website enquiries create contacts automatically</td><td>Branding on the form; number of forms</td></tr>
<tr><td>Import and export</td><td>Getting data in, and getting it out if you leave</td><td>CSV export allowed and how often</td></tr>
<tr><td>Reporting</td><td>Win rate, pipeline value, lead sources</td><td>Standard reports vs custom dashboards</td></tr>
</tbody></table>
<p>Automation, lead scoring and AI features are tempting, but most small teams get 90% of the value from reminders and a clean pipeline. Start simple and add features only when a real problem demands it.</p>

<h2>Data privacy and security on a free CRM</h2>
<p>A CRM holds personal data about your customers, so treat it seriously even on a free plan. Turn on two-factor authentication for every user, limit access to people who need it, and remove former staff promptly. Do not store sensitive data such as full card numbers or government ID numbers in notes fields. If you have customers in the EU or UK, or in US states with consumer privacy laws, check the vendor's data processing terms and where data is stored. This is general information rather than legal advice; a professional can confirm which privacy rules apply to your business.</p>

<h2>Common mistakes with free CRMs</h2>
<ul>
<li><strong>Importing everyone.</strong> Old newsletter lists and random contacts eat into caps and clutter pipelines.</li>
<li><strong>Too many custom fields.</strong> Track what you will actually use.</li>
<li><strong>Using it for marketing without permission.</strong> CRM contacts are not automatically email marketing subscribers; follow the rules in our guide to <a href="/blog/email-marketing-small-business">email marketing for small business</a>.</li>
<li><strong>Not planning an exit.</strong> Check that you can export contacts and deals in CSV.</li>
<li><strong>Expecting it to invoice.</strong> Most free CRMs do not handle full invoicing.</li>
</ul>

<h2>CRM and invoicing: keeping them connected</h2>
<p>Free CRMs are strong on contacts and deals but rarely handle billing well. The practical setup for most small businesses is a free CRM for sales plus a separate invoicing or accounting tool. If you are choosing accounting software too, our comparison of <a href="/blog/freshbooks-vs-wave">FreshBooks vs Wave</a> covers two popular options. Add an "Invoiced" and "Paid" stage to your pipeline so won deals never sit unbilled, and track who owes what in your <a href="/blog/accounts-receivable-guide">accounts receivable</a> process.</p>
<p>When a deal closes, create the invoice straight away. Our <a href="/invoice-generator">free invoice generator</a> needs no sign-up: fill in the client details, add line items, and download a professional PDF to send.</p>
`,
  },
  {
    slug: "churn-rate",
    title: "Churn Rate: Formula, Benchmarks and How to Reduce It",
    description:
      "Churn rate explained: customer and revenue churn formulas, worked examples, benchmarks, voluntary vs involuntary churn and practical ways to reduce churn in 2026.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "customer-lifetime-value",
      "recurring-payments-small-business",
      "saas-subscription-invoice-template",
    ],
    faqs: [
      {
        q: "How do you calculate churn rate?",
        a: "Customer churn rate equals customers lost during a period divided by customers at the start of that period, multiplied by 100. If you start the month with 200 customers and 6 cancel, churn is 6 / 200 = 3%. Do not include customers who joined during the month in the denominator or the lost count, or you will distort the result. Use the same period length every time so results are comparable.",
      },
      {
        q: "What is a good churn rate?",
        a: "It depends on your business model, price point and whether you measure monthly or annually. Recurly's subscription benchmarks for July 2026 put median churn around 3% to 4% for SaaS and business services, reported on the page as annual medians. Small businesses selling low-priced monthly services typically see higher churn than those with annual contracts. Your own trend over time is the most useful benchmark.",
      },
      {
        q: "What is the difference between voluntary and involuntary churn?",
        a: "Voluntary churn is when a customer actively decides to cancel, for example because of price, poor fit or switching to a competitor. Involuntary churn happens when a customer is lost because a payment fails, such as an expired card or insufficient funds, even though they did not intend to leave. Involuntary churn is often a significant share of total churn and is usually the easiest to reduce with better billing processes.",
      },
      {
        q: "What is negative churn?",
        a: "Negative churn, or net negative revenue churn, happens when expansion revenue from existing customers, such as upgrades, extra seats or add-ons, exceeds the revenue you lose from cancellations and downgrades. Your revenue from the existing customer base grows even without new customers. It is a sign of strong product value and pricing that scales with customer usage, and it shows up as net revenue retention above 100%.",
      },
      {
        q: "How do I convert monthly churn to annual churn?",
        a: "Do not multiply by 12. Use compounding: annual churn equals 1 minus (1 minus monthly churn) to the power of 12. A 3% monthly churn rate gives 1 minus 0.97 to the 12th power, which is about 30.6% a year, not 36%. Always state whether a churn figure is monthly or annual, because the difference is large and comparing the two leads to wrong conclusions.",
      },
      {
        q: "How does churn affect customer lifetime value?",
        a: "Churn and customer lifetime are directly linked. A simple estimate of average customer lifetime is 1 divided by the churn rate for the period: 4% monthly churn implies an average lifetime of about 25 months. Multiply that by average monthly gross profit per customer to estimate lifetime value. Cutting churn from 4% to 3% raises the average lifetime to about 33 months, which is a large gain in value.",
      },
    ],
    content: `
<p>Churn rate is the percentage of customers (or revenue) you lose over a period. The basic formula is <strong>customers lost during the period / customers at the start of the period x 100</strong>. If you start a month with 200 clients and 6 cancel, your monthly churn rate is 3%. Reducing it usually comes down to three things: onboarding new customers well, fixing failed payments, and catching unhappy customers before they cancel.</p>

<p>Churn matters to any business with repeat or recurring revenue: subscriptions and SaaS, but also cleaning contracts, bookkeeping retainers, maintenance plans, memberships and agencies on monthly fees. A small change in churn has a big effect on growth, because every customer you keep is one you do not have to replace.</p>

<h2>Churn rate formulas</h2>
<table><thead><tr><th>Metric</th><th>Formula</th><th>Use it to...</th></tr></thead><tbody>
<tr><td>Customer churn rate</td><td>Customers lost / customers at start of period</td><td>Track how many accounts leave</td></tr>
<tr><td>Gross revenue churn</td><td>(Lost MRR from cancellations + downgrades) / MRR at start</td><td>Track how much recurring revenue leaves</td></tr>
<tr><td>Net revenue churn</td><td>(Lost MRR - expansion MRR) / MRR at start</td><td>Show whether upgrades offset losses</td></tr>
<tr><td>Retention rate</td><td>1 - churn rate (for a cohort with no new customers)</td><td>Report the positive side</td></tr>
<tr><td>Net revenue retention (NRR)</td><td>(Start MRR + expansion - contraction - churned MRR) / start MRR</td><td>Investor-friendly view of the base</td></tr>
</tbody></table>
<p>MRR here means <a href="/blog/monthly-recurring-revenue">monthly recurring revenue</a>. Customer churn and revenue churn can tell different stories: losing ten small clients may matter less than losing one large one.</p>

<h2>Worked example: customer and revenue churn</h2>
<p>An illustrative example. A bookkeeping firm bills clients on monthly retainers.</p>
<table><thead><tr><th>Item</th><th>Clients</th><th>MRR</th></tr></thead><tbody>
<tr><td>Start of October</td><td>80</td><td>$32,000</td></tr>
<tr><td>Cancelled during October</td><td>4</td><td>-$1,200</td></tr>
<tr><td>Downgraded to a smaller package</td><td>2</td><td>-$300</td></tr>
<tr><td>Upgraded (added payroll service)</td><td>3</td><td>+$900</td></tr>
<tr><td>New clients in October</td><td>5</td><td>+$2,000</td></tr>
</tbody></table>
<ul>
<li><strong>Customer churn:</strong> 4 / 80 = 5.0% (new clients are excluded).</li>
<li><strong>Gross revenue churn:</strong> ($1,200 + $300) / $32,000 = 4.7%.</li>
<li><strong>Net revenue churn:</strong> ($1,500 - $900) / $32,000 = 1.9%.</li>
<li><strong>Net revenue retention:</strong> ($32,000 + $900 - $300 - $1,200) / $32,000 = 98.1%.</li>
</ul>
<p>The firm loses 5% of clients but only 1.9% of net recurring revenue, because upgrades cover most of the gap. Note that the four cancelled clients were mostly small accounts.</p>

<h3>Monthly vs annual churn</h3>
<p>Churn compounds. Annual churn = 1 - (1 - monthly churn)<sup>12</sup>. A 5% monthly rate equals about 46% a year, not 60%. Always label which period you mean.</p>

<h2>What is a good churn rate? Benchmarks</h2>
<p>Benchmarks vary widely by price point, contract length and customer type. Recurly, a subscription billing platform, publishes benchmarks from its network data. Its <a href="https://recurly.com/research/churn-rate-benchmarks/" target="_blank" rel="noopener noreferrer">churn rate benchmark page</a> (July 2026 data, presented as median annual rates) shows:</p>
<table><thead><tr><th>Segment</th><th>Total churn</th><th>Voluntary</th><th>Involuntary</th></tr></thead><tbody>
<tr><td>All industries</td><td>3.60%</td><td>2.34%</td><td>1.25%</td></tr>
<tr><td>SaaS</td><td>3.22%</td><td>2.16%</td><td>1.06%</td></tr>
<tr><td>Business and professional services</td><td>3.44%</td><td>2.27%</td><td>1.18%</td></tr>
<tr><td>Ecommerce subscriptions</td><td>4.25%</td><td>2.87%</td><td>1.38%</td></tr>
</tbody></table>
<p>Two lessons stand out. First, roughly a third of churn in these figures is involuntary, meaning customers lost to failed payments rather than a decision to leave. Second, your own numbers may look very different: small businesses on month-to-month terms with low prices often see much higher churn than a billing platform's median. Use benchmarks for context and your own trend as the real target.</p>

<h2>Voluntary vs involuntary churn</h2>
<table><thead><tr><th>Type</th><th>Common causes</th><th>Main fixes</th></tr></thead><tbody>
<tr><td>Voluntary</td><td>Poor onboarding, not seeing value, price, service problems, switching to a competitor, business closing</td><td>Better onboarding, regular check-ins, NPS follow-up, flexible plans, pause options</td></tr>
<tr><td>Involuntary</td><td>Expired cards, insufficient funds, bank declines, outdated billing contact</td><td>Card updater services, smart retries, reminder emails before expiry, ACH or direct debit options</td></tr>
</tbody></table>

<h2>How to reduce churn: 10 practical steps</h2>
<ol>
<li><strong>Onboard properly.</strong> Most cancellations trace back to the first 60-90 days. Use a <a href="/blog/client-onboarding-checklist">client onboarding checklist</a> so every new customer gets a quick early win.</li>
<li><strong>Set expectations in writing.</strong> Clear scope and terms prevent "this is not what I expected" cancellations.</li>
<li><strong>Measure satisfaction.</strong> Run a <a href="/blog/net-promoter-score">Net Promoter Score</a> survey and call every detractor.</li>
<li><strong>Watch for warning signs.</strong> Reduced usage, late payments, missed meetings and a new decision-maker are early signals.</li>
<li><strong>Fix failed payments.</strong> Retry failed charges, send card-expiry reminders, and offer bank payment options. Our guide to <a href="/blog/recurring-payments-small-business">recurring payments for small business</a> covers setup.</li>
<li><strong>Offer a pause or downgrade.</strong> A smaller plan keeps revenue and the relationship.</li>
<li><strong>Show value regularly.</strong> Monthly reports of what you did and the results.</li>
<li><strong>Ask why people leave.</strong> A one-question exit survey reveals patterns.</li>
<li><strong>Price for commitment.</strong> Annual plans with a modest discount reduce churn opportunities.</li>
<li><strong>Handle price increases carefully.</strong> Give notice and explain added value; see <a href="/blog/how-to-raise-prices">how to raise prices without losing customers</a>.</li>
</ol>

<h2>How churn connects to lifetime value and acquisition cost</h2>
<p>A simple estimate of average customer lifetime is 1 / churn rate. At 4% monthly churn, the average customer stays about 25 months; at 2%, about 50 months. Multiply by average monthly gross profit per customer to get <a href="/blog/customer-lifetime-value">customer lifetime value</a>. Compare that with what it costs you to win each new customer; if churn rises, the amount you can afford to spend winning each customer falls. These links are the core of <a href="/blog/unit-economics">unit economics</a> for any recurring business.</p>

<h2>Churn for service businesses without subscriptions</h2>
<p>Not every business has a clean "cancel" button. A cleaning company, accountant or dog groomer loses customers quietly: they just stop booking. To measure churn in that case, define an inactivity rule that fits your normal buying cycle.</p>
<table><thead><tr><th>Business</th><th>Normal cycle</th><th>Reasonable "churned" rule</th></tr></thead><tbody>
<tr><td>Hair salon</td><td>Every 6-8 weeks</td><td>No visit in 4 months</td></tr>
<tr><td>Residential cleaning</td><td>Weekly or fortnightly</td><td>No booking in 6 weeks</td></tr>
<tr><td>Tax preparer</td><td>Once a year</td><td>Did not return for this year's filing</td></tr>
<tr><td>Freelance designer</td><td>Several projects a year</td><td>No new project in 12 months</td></tr>
<tr><td>HVAC maintenance</td><td>Twice a year</td><td>Missed two scheduled services</td></tr>
</tbody></table>
<p>Then calculate churn exactly as before: customers who became inactive during the period divided by active customers at the start. Your invoicing records are the easiest data source. Export a list of clients and their last invoice date, and anyone past your inactivity window is a churned customer. That same list is your win-back campaign: a personal note or a short offer to clients who have drifted away often brings a few back.</p>

<h2>Running a churn review: step by step</h2>
<ol>
<li>Pull a list of every customer lost in the last quarter, with their start date, plan or spend, and last invoice.</li>
<li>Record the reason for each, from exit surveys, emails or your own notes. Use a short list of categories: price, value, service issue, business closed, moved to competitor, payment failed, unknown.</li>
<li>Count by reason and by customer age. If most losses happen in the first three months, onboarding is the problem. If they cluster after a price increase, pricing or communication is.</li>
<li>Pick the single biggest fixable reason and assign one change, for example a 30-day check-in call for every new client.</li>
<li>Repeat next quarter and compare.</li>
</ol>
<p>Failed payments deserve their own line in this review. If customers are leaving because a card expired and nobody noticed, the fix is administrative: payment reminders before a card expires, a polite notice when a payment fails, and an easy way to update payment details. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> can be adapted for failed-payment notices.</p>

<h2>Common churn calculation mistakes</h2>
<ul>
<li><strong>Counting new customers in the denominator.</strong> This understates churn in fast-growing months.</li>
<li><strong>Mixing periods.</strong> Comparing a monthly figure with an annual benchmark.</li>
<li><strong>Ignoring revenue.</strong> Customer churn alone hides the loss of a big account.</li>
<li><strong>Treating failed payments as voluntary.</strong> You miss the easiest fixes.</li>
<li><strong>Annual contracts.</strong> Customers on annual terms can only churn at renewal, so measure renewal rate for that group separately.</li>
</ul>

<h2>What to do when a customer asks to cancel</h2>
<p>A cancellation request is not always final. Handle it respectfully and quickly:</p>
<ol>
<li><strong>Acknowledge and confirm</strong> the request promptly. Never make cancelling difficult; hidden or obstructive cancellation processes damage trust and can breach consumer protection rules in some places.</li>
<li><strong>Ask one question:</strong> "Can I ask what prompted this?" Record the answer.</li>
<li><strong>Offer one relevant alternative</strong> if it genuinely fits: a pause, a smaller plan or a fix to the problem they named. Do not pressure.</li>
<li><strong>Close cleanly.</strong> Send a final invoice or confirmation showing the last billing period and any prorated credit, and thank them.</li>
<li><strong>Leave the door open.</strong> Former customers who left on good terms come back more often than you might expect, and they count as reactivations rather than new acquisitions.</li>
</ol>
<p>Keep a simple log of every cancellation conversation: date, plan, tenure, stated reason and what you offered. After a few months, that log is more useful than any benchmark, because it shows exactly why your own customers leave and which offers, if any, actually kept them. Share the patterns with anyone who handles onboarding or billing so the fixes reach the start of the customer relationship, not just the end.</p>

<h2>Billing clarity reduces churn</h2>
<p>Confusing invoices, surprise charges and failed payments drive a surprising share of cancellations. Clear, consistent recurring invoices that show the period covered, the plan and any proration help clients see what they pay for; our <a href="/blog/saas-subscription-invoice-template">SaaS subscription invoice template</a> and <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> show how. For one-off or monthly billing, you can create a clean invoice with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download it as a PDF.</p>
`,
  },
  {
    slug: "monthly-recurring-revenue",
    title: "MRR Formula: Monthly Recurring Revenue Explained",
    description:
      "Monthly recurring revenue (MRR) formula with worked examples: new, expansion, contraction and churned MRR, ARR, annual plan handling and common mistakes.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "recurring-invoices-guide",
      "revenue-recognition-asc-606",
      "saas-subscription-invoice-template",
    ],
    faqs: [
      {
        q: "How do you calculate monthly recurring revenue?",
        a: "Add up the normalized monthly subscription or retainer fees from all active customers at a point in time. The simplest version is number of paying customers multiplied by average revenue per account per month. Exclude one-time fees such as setup charges, hardware and one-off projects. Convert annual or quarterly plans to a monthly figure by dividing the contract value by the number of months it covers.",
      },
      {
        q: "Is MRR the same as monthly revenue?",
        a: "No. Monthly revenue, as shown on your income statement, includes everything you earned in the month, including one-time fees, services and usage charges, and follows accounting rules. MRR is an operating metric that includes only predictable recurring charges, normalized to a monthly amount. A business could have $50,000 of revenue in a month but only $30,000 of MRR if the rest came from one-off projects.",
      },
      {
        q: "How do annual plans count toward MRR?",
        a: "Divide the annual contract value by 12. A customer who pays $2,400 upfront for a year adds $200 to MRR each month of the contract, not $2,400 in the month they pay. The cash arrives upfront, which helps cash flow, but for accounting the payment is deferred revenue that is recognized over the service period. Keep cash collected, revenue recognized and MRR as three separate figures.",
      },
      {
        q: "What is the difference between MRR and ARR?",
        a: "ARR, or annual recurring revenue, is the annualized version of recurring revenue, usually calculated as MRR multiplied by 12. MRR is more common for businesses with monthly plans and smaller customers, because it shows changes quickly. ARR is common in B2B software with annual contracts. Both exclude one-time fees. Neither is a forecast; they are snapshots of the current recurring run rate.",
      },
      {
        q: "Should usage-based charges be included in MRR?",
        a: "Generally, only the committed or minimum portion of usage-based pricing belongs in core MRR, because variable usage can change sharply month to month. Some companies report a separate figure for recurring usage revenue based on a trailing average. Whatever you choose, document the rule and apply it consistently so trends are meaningful. Investors and buyers will ask how variable revenue is treated.",
      },
      {
        q: "Do service businesses and freelancers have MRR?",
        a: "Yes, if clients pay a recurring fee under an ongoing agreement, such as monthly bookkeeping, IT support, cleaning contracts, SEO retainers or maintenance plans. Track it the same way: total monthly retainer fees from active clients. Hourly billing that varies each month and one-off projects are not MRR. Growing the recurring share of revenue makes income more predictable and a business more valuable if you sell it.",
      },
    ],
    content: `
<p>Monthly recurring revenue (MRR) is the predictable subscription or retainer income your business can expect each month, normalized to a monthly amount. The basic MRR formula is <strong>number of paying customers x average monthly revenue per customer</strong>, or simply the sum of every active customer's monthly recurring fee. One-time charges are excluded, and annual plans are divided by 12.</p>

<p>MRR is the headline metric for SaaS and subscription businesses, but it is just as useful for service firms with retainers, maintenance plans or memberships. It shows at a glance whether your recurring base is growing, and breaking it into components shows why. This guide covers the formulas, a worked month-by-month example, how to handle annual plans and discounts, and the mistakes that inflate MRR.</p>

<h2>The MRR formula</h2>
<p><strong>MRR = sum of monthly recurring fees from all active customers</strong></p>
<p>or, as a shortcut:</p>
<p><strong>MRR = number of paying customers x ARPA</strong> (average revenue per account per month)</p>
<table><thead><tr><th>Include in MRR</th><th>Exclude from MRR</th></tr></thead><tbody>
<tr><td>Monthly subscription and retainer fees</td><td>One-time setup or onboarding fees</td></tr>
<tr><td>Annual or quarterly plans, divided into monthly amounts</td><td>One-off projects and ad-hoc hourly work</td></tr>
<tr><td>Recurring add-ons and extra seats</td><td>Hardware, shipping, reimbursed expenses</td></tr>
<tr><td>Committed minimums on usage plans</td><td>Variable usage overages (or track separately)</td></tr>
<tr><td>Net of ongoing recurring discounts</td><td>Sales tax and VAT collected</td></tr>
</tbody></table>

<h2>MRR components: new, expansion, contraction and churn</h2>
<p>Total MRR hides what is happening underneath. Break the change in MRR into five parts:</p>
<table><thead><tr><th>Component</th><th>Meaning</th></tr></thead><tbody>
<tr><td>New MRR</td><td>Recurring revenue from customers who started this month</td></tr>
<tr><td>Expansion MRR</td><td>Increases from existing customers: upgrades, add-ons, extra seats, price increases</td></tr>
<tr><td>Contraction MRR</td><td>Decreases from existing customers who downgrade but stay</td></tr>
<tr><td>Churned MRR</td><td>Recurring revenue lost from customers who cancelled</td></tr>
<tr><td>Reactivation MRR</td><td>Former customers who come back</td></tr>
</tbody></table>
<p><strong>Net new MRR = new + expansion + reactivation - contraction - churned</strong></p>
<p><strong>Ending MRR = starting MRR + net new MRR</strong></p>

<h2>Worked example: three months of MRR</h2>
<p>An illustrative example. A small web agency sells monthly website care plans at $150, $300 and $600, and some clients pay annually.</p>
<table><thead><tr><th></th><th>August</th><th>September</th><th>October</th></tr></thead><tbody>
<tr><td>Starting MRR</td><td>$12,000</td><td>$12,900</td><td>$13,350</td></tr>
<tr><td>New MRR</td><td>+$1,200</td><td>+$900</td><td>+$1,500</td></tr>
<tr><td>Expansion MRR</td><td>+$300</td><td>+$450</td><td>+$300</td></tr>
<tr><td>Contraction MRR</td><td>-$150</td><td>$0</td><td>-$300</td></tr>
<tr><td>Churned MRR</td><td>-$450</td><td>-$900</td><td>-$300</td></tr>
<tr><td><strong>Net new MRR</strong></td><td><strong>+$900</strong></td><td><strong>+$450</strong></td><td><strong>+$1,200</strong></td></tr>
<tr><td>Ending MRR</td><td>$12,900</td><td>$13,350</td><td>$14,550</td></tr>
</tbody></table>
<p>September looks like a slow month for sales, but the real story is churn: $900 lost, twice August's figure. That is the month to call departing clients and ask why. The agency's monthly gross revenue churn in September was $900 / $12,900, or about 7%, which is worth investigating; our guide to <a href="/blog/churn-rate">churn rate</a> explains the formulas and fixes.</p>

<h3>Handling an annual plan in the example</h3>
<p>In October, one new client prepays $3,600 for a year of the $300 plan. Only $300 goes into October's new MRR, not $3,600. Cash in the bank rises by $3,600, but for accounting most of that payment is deferred revenue that is recognized month by month as the service is delivered. Our guides to <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred vs accrued revenue</a> and <a href="/blog/revenue-recognition-asc-606">revenue recognition under ASC 606</a> explain the accounting.</p>

<h2>MRR vs ARR vs revenue vs cash</h2>
<table><thead><tr><th>Measure</th><th>What it shows</th><th>Annual plan of $3,600 paid in October</th></tr></thead><tbody>
<tr><td>MRR</td><td>Current monthly recurring run rate</td><td>+$300 per month</td></tr>
<tr><td>ARR</td><td>MRR x 12</td><td>+$3,600</td></tr>
<tr><td>Recognized revenue</td><td>Earned under accounting rules</td><td>$300 per month as service is delivered</td></tr>
<tr><td>Cash collected</td><td>Money received</td><td>$3,600 in October</td></tr>
</tbody></table>
<p>Keeping these separate prevents a common mistake: treating a big upfront payment as a big growth month. Cash planning still matters, of course; upfront annual payments are excellent for your <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</p>

<h2>Step by step: tracking MRR in a spreadsheet</h2>
<ol>
<li>List every active recurring customer, one row each.</li>
<li>Record the plan, billing frequency and contract amount.</li>
<li>Calculate the monthly equivalent: annual / 12, quarterly / 3.</li>
<li>Subtract any ongoing recurring discount (ignore one-off first-month discounts or track them consistently).</li>
<li>At month end, tag each change: new, expansion, contraction, churned, reactivated.</li>
<li>Sum the columns to get starting MRR, each component and ending MRR.</li>
<li>Chart ending MRR and net new MRR monthly.</li>
</ol>
<p>If you bill through a subscription platform, it may calculate MRR for you, but check how it treats discounts, trials and failed payments.</p>

<h2>Related metrics built on MRR</h2>
<ul>
<li><strong>ARPA:</strong> MRR / paying customers. Rising ARPA can mean successful upsells or moving upmarket.</li>
<li><strong>MRR growth rate:</strong> (ending MRR - starting MRR) / starting MRR.</li>
<li><strong>Revenue churn and net revenue retention:</strong> how much of last month's MRR you kept, including expansion.</li>
<li><strong>Customer lifetime value:</strong> ARPA x gross margin / churn rate; see <a href="/blog/customer-lifetime-value">customer lifetime value</a>.</li>
<li><strong>CAC payback:</strong> months of gross-margin MRR needed to recover the cost of acquiring a customer; see <a href="/blog/customer-acquisition-cost">customer acquisition cost</a>.</li>
</ul>

<h2>How discounts, trials, pauses and proration affect MRR</h2>
<p>Edge cases are where MRR figures go wrong. Pick a rule for each and write it down.</p>
<table><thead><tr><th>Situation</th><th>Common treatment</th><th>Example</th></tr></thead><tbody>
<tr><td>Permanent discount (e.g. 10% off for life)</td><td>Count the discounted amount</td><td>$300 plan at 10% off = $270 MRR</td></tr>
<tr><td>First-month promo (e.g. first month half price)</td><td>Many count the full plan price from the start; others count actual billing. Be consistent</td><td>$300 plan, $150 first month: $300 or $150 MRR depending on your rule</td></tr>
<tr><td>Free trial</td><td>Exclude until the first paid charge</td><td>$0 MRR during a 14-day trial</td></tr>
<tr><td>Paused subscription</td><td>Remove from MRR while paused; add back as reactivation</td><td>Client pauses for 2 months: -$300, then +$300</td></tr>
<tr><td>Mid-month upgrade</td><td>Count the new full monthly rate as expansion; prorated charges are a billing detail</td><td>$300 to $600 plan: +$300 expansion MRR</td></tr>
<tr><td>Price increase for existing clients</td><td>Count as expansion MRR when it takes effect</td><td>40 clients x $20 increase = +$800</td></tr>
</tbody></table>
<p>The proration rule trips people up most. When a client upgrades on the 15th, your invoice might charge half a month of the difference, but MRR reflects the new monthly run rate immediately. The prorated invoice amount and the MRR change are two different numbers, and both are correct for their purpose.</p>

<h2>Why MRR matters beyond the spreadsheet</h2>
<p>For a small business owner, MRR answers practical questions:</p>
<ul>
<li><strong>Can I afford to hire?</strong> If recurring revenue alone covers a new salary plus your fixed costs, the hire is far less risky.</li>
<li><strong>How much can I spend on marketing?</strong> Knowing how much MRR each new client adds, and how long they stay, tells you what a new client is worth.</li>
<li><strong>What is my business worth?</strong> Buyers and lenders look closely at recurring revenue and its trend. A business with growing MRR and low churn usually earns a better valuation than one with the same revenue from one-off projects.</li>
<li><strong>Is a price increase working?</strong> Expansion MRR from the increase versus churned MRR from clients who left shows the net effect.</li>
</ul>
<p>Review MRR monthly, on the same day, alongside churn and cash in the bank. Over a few months, the components table becomes the clearest picture you have of where your business is heading.</p>

<h2>Common MRR mistakes</h2>
<ul>
<li><strong>Counting setup fees.</strong> They do not recur; including them inflates growth.</li>
<li><strong>Booking annual payments as one month's MRR.</strong> Always normalize.</li>
<li><strong>Counting free trials.</strong> Only paying customers count.</li>
<li><strong>Ignoring failed payments.</strong> A customer whose payment fails and is never recovered has churned, even if their account is still open.</li>
<li><strong>Including sales tax.</strong> Tax collected belongs to the government, not your revenue.</li>
<li><strong>Counting signed but not started contracts.</strong> Some businesses track this as "committed MRR" separately.</li>
<li><strong>Treating variable usage as fixed.</strong> If you bill by usage, see <a href="/blog/usage-based-billing-invoice">usage-based billing invoices</a> and decide a consistent rule.</li>
</ul>

<h2>MRR benchmarks: what growth looks like</h2>
<p>There is no universal "good" MRR, because it depends on your prices, market and stage. What matters is the direction and the mix. A healthy recurring business usually shows ending MRR rising most months, expansion MRR that covers a meaningful share of churned MRR, and new MRR that is not shrinking. If net new MRR is positive only because of new sales, while churn quietly grows, growth will stall as soon as sales slow. Track the ratio of new plus expansion MRR to churned plus contraction MRR; when it stays well above 1, the base is compounding.</p>
<p>In the worked example above, August's ratio is ($1,200 + $300) / ($150 + $450) = 2.5, September's is $1,350 / $900 = 1.5, and October's is $1,800 / $600 = 3.0. The September dip is the same warning the churn line gave, seen from a different angle. Plotting this ratio monthly takes two minutes once your spreadsheet is set up, and it flags trouble before ending MRR actually falls.</p>

<h2>MRR for service businesses and freelancers</h2>
<p>You do not need software to have MRR. A bookkeeper with 15 clients on $400 monthly packages has $6,000 MRR. A cleaning company with 40 weekly contracts priced monthly, an IT provider with managed service plans, or an SEO freelancer with retainers all qualify. Converting one-off clients to retainers is one of the most effective ways to stabilize income, and buyers typically value recurring revenue more highly if you ever sell the business.</p>
<p>Recurring income also needs reliable recurring billing. Invoice the same day each month, state the service period on every invoice, and prorate fairly when clients join or upgrade mid-month; see our guides on <a href="/blog/recurring-invoices-guide">recurring invoices</a> and <a href="/blog/prorated-invoice">prorated invoices</a>. For each monthly bill, you can create a professional invoice with our <a href="/invoice-generator">free invoice generator</a>, no sign-up needed, and download it as a PDF in under a minute.</p>
`,
  },
];
