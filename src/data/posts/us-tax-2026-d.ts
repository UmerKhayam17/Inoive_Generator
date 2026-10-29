import type { PostDraft } from "../blog";

export const US_TAX_2026_D_POSTS: PostDraft[] = [
  {
    slug: "irs-mileage-rate-2026",
    title: "IRS Mileage Rate 2026: 72.5 and 76 Cents Per Mile Explained",
    description:
      "The IRS mileage rate for 2026 is 72.5 cents per mile to June 30 and 76 cents from July 1. See every rate, a worked example and how to bill mileage.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "courier-delivery-invoice-template",
      "mileage-log-template",
      "reimbursable-expenses-invoice",
      "self-employed-tax-deductions",
      "schedule-c-for-freelancers",
    ],
    faqs: [
      {
        q: "What is the IRS mileage rate for 2026?",
        a: "The 2026 business standard mileage rate is 72.5 cents per mile for driving from January 1 to June 30, 2026, and 76 cents per mile from July 1 to December 31, 2026. The IRS raised the rate mid-year in Announcement 2026-11, citing higher fuel prices. The charitable rate stays at 14 cents, and the medical and military moving rate went from 20.5 to 23.5 cents on July 1.",
      },
      {
        q: "Why did the IRS change the mileage rate in the middle of 2026?",
        a: "The IRS said the July 1 increase resulted from recent increases in the price of fuel. Mid-year changes are rare but not new: the IRS has adjusted the rate during a year before when fuel costs moved sharply. The higher 76-cent rate applies only to expenses paid or incurred on or after July 1, 2026, so miles driven earlier in the year still use 72.5 cents.",
      },
      {
        q: "How do I calculate my 2026 mileage deduction with two rates?",
        a: "Split your business miles into two groups using your mileage log. Multiply miles driven from January 1 to June 30 by $0.725 and miles driven from July 1 to December 31 by $0.76, then add the two results. Add business parking fees and tolls separately. Your log needs dates for each trip, so the split is easy if you record trips as they happen.",
      },
      {
        q: "Can I use the standard mileage rate if I use actual expenses now?",
        a: "Only in some cases. For a car you own, you must choose the standard mileage rate in the first year the car is used in your business. If you do, you can switch to actual expenses in a later year. If you started with actual expenses and depreciated the car with MACRS, Section 179 or bonus depreciation, you generally cannot switch to the standard rate for that car.",
      },
      {
        q: "Does the 76 cents per mile rate apply to electric cars?",
        a: "Yes. The IRS says the standard mileage rates apply to electric and hybrid vehicles as well as gasoline and diesel ones. The rate is a single per-mile figure for cars, vans, pickups and panel trucks, regardless of fuel type. That makes the standard rate especially attractive for EV owners whose real running costs per mile may be lower than the rate allows.",
      },
      {
        q: "Can employees deduct mileage on their 2026 tax return?",
        a: "Most cannot. The deduction for unreimbursed employee expenses was suspended and then made permanent by the One, Big, Beautiful Bill Act, so a typical W-2 employee cannot deduct work mileage. Exceptions include certain Armed Forces reservists, fee-basis state or local officials, qualifying performing artists and eligible educators. Employees should ask their employer for reimbursement under an accountable plan instead.",
      },
      {
        q: "Can I charge clients the IRS mileage rate on an invoice?",
        a: "Yes, if your contract allows it. Many freelancers and contractors bill travel at the IRS rate because it is a recognized, neutral figure. Show the dates, miles and rate on a separate line, for example 320 miles at $0.76. The amount you bill is business income to you, and you still claim your own mileage deduction for those business miles.",
      },
      {
        q: "What records do I need to claim the standard mileage rate?",
        a: "Keep a log made at or near the time of each trip showing the date, destination, business purpose and miles driven, plus your odometer readings at the start and end of the year. Keep receipts for parking and tolls, which you can deduct on top of the rate. Without a timely log, the IRS can disallow the deduction even if the driving was genuine.",
      },
      {
        q: "What is the depreciation part of the 2026 mileage rate?",
        a: "Notice 2026-10 says 35 cents of each business mile driven in 2026 is treated as depreciation. You do not deduct it separately, but you must reduce your car's tax basis by that amount for every business mile. This matters when you sell or trade in the car, because a lower basis means a larger taxable gain or smaller loss on the sale.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The IRS mileage rate for 2026 is 72.5 cents per business mile for driving from January 1 to June 30, 2026, and 76 cents per mile from July 1 to December 31, 2026, after a mid-year increase for fuel prices. The charitable rate is 14 cents, and the medical and military moving rate rose from 20.5 to 23.5 cents on July 1.</p>

<p>If you drive for your business, the IRS mileage rate 2026 is one of the simplest deductions you can claim, but this year it comes with a twist: two business rates in one tax year. This guide sets out every 2026 standard mileage rate, explains who can use it, walks through a worked example with real numbers and shows how to bill clients for travel on a clean line item using our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Mileage rules differ for employees, rideshare drivers and fleet owners, so check the IRS guidance or a tax professional for your situation.</p>

<h2>IRS mileage rate 2026: all standard rates at a glance</h2>
<p>The IRS published the original 2026 rates in Notice 2026-10 in December 2025, then revised the business, medical and moving rates in Announcement 2026-11, effective July 1, 2026. As of 2026, the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer">IRS standard mileage rates page</a> lists the following:</p>
<table>
<thead><tr><th>Purpose</th><th>2025</th><th>Jan 1 to Jun 30, 2026</th><th>Jul 1 to Dec 31, 2026</th></tr></thead>
<tbody>
<tr><td>Business (including self-employed)</td><td>70 cents</td><td>72.5 cents</td><td>76 cents</td></tr>
<tr><td>Medical</td><td>21 cents</td><td>20.5 cents</td><td>23.5 cents</td></tr>
<tr><td>Moving (active-duty military and certain intelligence community members)</td><td>21 cents</td><td>20.5 cents</td><td>23.5 cents</td></tr>
<tr><td>Charitable</td><td>14 cents</td><td>14 cents</td><td>14 cents</td></tr>
</tbody>
</table>
<p>The charitable rate never moves with fuel prices because it is fixed by statute in section 170(i) of the tax code. The business rate is based on an annual study of the fixed and variable costs of running a vehicle, while the medical and moving rates use only variable costs such as fuel. The rates apply equally to gasoline, diesel, hybrid and electric cars, vans, pickups and panel trucks.</p>

<h3>Why the rate changed on July 1</h3>
<p>Announcement 2026-11 states plainly that the modification "results from recent increases in the price of fuel." The new figures apply to transportation expenses paid or incurred on or after July 1, 2026, and to employee mileage allowances paid on or after that date. Everything else in Notice 2026-10 stays in effect, including the depreciation component and the vehicle value limits covered below.</p>

<h2>Who can use the standard mileage rate</h2>
<p>The standard mileage rate is optional. It is a shortcut that replaces tracking every gas receipt, repair bill and insurance payment. You can use it if you are:</p>
<ul>
<li><strong>Self-employed</strong>, including sole proprietors, freelancers, gig workers and single-member LLC owners who file <a href="/blog/schedule-c-for-freelancers">Schedule C</a>.</li>
<li><strong>A partner or business owner</strong> reimbursed by your company under an accountable plan.</li>
<li><strong>An employee in a qualifying group</strong>: Armed Forces reservists, fee-basis state or local government officials, certain performing artists and eligible educators.</li>
<li><strong>Anyone claiming medical or charitable miles</strong>, at those separate rates, if they itemize.</li>
</ul>
<p>Most ordinary W-2 employees cannot deduct unreimbursed work mileage. Notice 2026-10 confirms that the One, Big, Beautiful Bill Act made the disallowance of miscellaneous itemized deductions permanent, so the right move for an employee is to ask for reimbursement rather than plan on a deduction.</p>

<h3>When you cannot use the standard rate</h3>
<p>IRS Publication 463 says you cannot use the standard mileage rate for a vehicle if you:</p>
<ul>
<li>Operate five or more cars for business at the same time, such as in fleet operations.</li>
<li>Claimed depreciation using any method other than straight line for the car's estimated useful life, including MACRS.</li>
<li>Claimed a Section 179 deduction or the special (bonus) depreciation allowance on the car.</li>
<li>Claimed actual car expenses after 1997 for a car you lease.</li>
</ul>
<p>For a car you own, you must choose the standard mileage rate in the first year the car is available for business use. After that, you can switch between methods year to year, though switching to actual expenses brings its own depreciation rules. For a leased car, choosing the standard rate locks you in for the whole lease. Our sibling guide on <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> compares the two methods in depth.</p>

<h2>What counts as business mileage</h2>
<p>Only business miles qualify. The biggest trap is commuting: Publication 463 states that driving between your home and your main or regular place of work is a personal commuting expense, no matter how far it is or whether you take business calls on the way.</p>
<p>Miles that usually count include:</p>
<ul>
<li>Driving from your office to a client's site, job site or meeting.</li>
<li>Trips to the bank, post office or supplier for business errands.</li>
<li>Travel between two business locations on the same day.</li>
<li>Driving from a qualifying <a href="/blog/home-office-deduction">home office</a> that is your principal place of business to clients or temporary work sites.</li>
</ul>
<p>On top of the standard rate, you can also deduct business-related parking fees and tolls. Self-employed owners can deduct the business portion of car loan interest and state or local personal property tax on the vehicle. You cannot add fuel, insurance, repairs or depreciation, because those are already built into the per-mile rate.</p>

<h2>How to calculate your 2026 mileage deduction</h2>
<p>Because 2026 has two business rates, the calculation has one more step than usual. Follow this process:</p>
<ol>
<li><strong>Total your business miles from January 1 to June 30, 2026</strong> using your <a href="/blog/mileage-log-template">mileage log</a>.</li>
<li><strong>Multiply those miles by $0.725.</strong></li>
<li><strong>Total your business miles from July 1 to December 31, 2026.</strong></li>
<li><strong>Multiply those miles by $0.76.</strong></li>
<li><strong>Add business parking fees and tolls</strong> from your receipts.</li>
<li><strong>Add the results</strong> and report the figure as car and truck expenses on Schedule C, with vehicle details in Part IV or on Form 4562.</li>
</ol>

<h3>Worked example: a consultant with 9,000 business miles</h3>
<p>Dana is a self-employed IT consultant who visits client offices. Her 2026 log shows 4,200 business miles from January to June and 4,800 business miles from July to December. She also paid $210 in business parking and tolls.</p>
<table>
<thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>January to June miles</td><td>4,200 x $0.725</td><td>$3,045.00</td></tr>
<tr><td>July to December miles</td><td>4,800 x $0.76</td><td>$3,648.00</td></tr>
<tr><td>Parking and tolls</td><td>From receipts</td><td>$210.00</td></tr>
<tr><td><strong>Total vehicle deduction</strong></td><td>$3,045 + $3,648 + $210</td><td><strong>$6,903.00</strong></td></tr>
</tbody>
</table>
<p>If Dana had applied 72.5 cents to all 9,000 miles, she would have claimed $6,525 for mileage instead of $6,693, leaving $168 of deduction unclaimed. Using 76 cents for the full year would overstate it by $147. The split matters, which is why dated log entries are essential.</p>
<p>Dana also needs to reduce her car's tax basis. Notice 2026-10 says 35 cents of every 2026 business mile is treated as depreciation, so her basis drops by 9,000 x $0.35 = $3,150. That figure does not change her deduction this year, but it affects the gain or loss when she later sells or trades in the car.</p>

<h2>Records the IRS expects you to keep</h2>
<p>The standard mileage rate saves you from keeping fuel and repair receipts, but it does not remove the need for records. Publication 463 says you need adequate, timely records to prove the business use of your car. A good log includes:</p>
<ul>
<li>The date of each trip.</li>
<li>The starting point and destination.</li>
<li>The business purpose, such as "site visit, Smith kitchen remodel."</li>
<li>Miles driven, from odometer readings or a GPS app.</li>
<li>Odometer readings on January 1 and December 31, so you can show total and business miles.</li>
</ul>
<p>Record trips as they happen or at least weekly. A log rebuilt from memory at tax time is far weaker in an audit. Keep the log and parking receipts with your other tax records; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices and records</a> covers retention periods. If you also track other costs, the <a href="/blog/how-to-track-business-expenses">business expense tracking guide</a> shows how to keep everything in one system.</p>

<h2>Mileage reimbursement: employers and clients</h2>
<h3>Reimbursing employees</h3>
<p>Whether to reimburse mileage is largely up to the employer, though some states require reimbursement of necessary work expenses. When a business reimburses employees at or below the IRS rate under an accountable plan, with the employee substantiating the trips, the reimbursement is generally not taxable wages. For allowances paid on or after July 1, 2026, the ceiling under the standard rate is 76 cents. Allowances paid for trips before that date use 72.5 cents.</p>
<p>Notice 2026-10 also sets the maximum standard automobile cost for fixed and variable rate (FAVR) plans, and the maximum value of employer-provided cars for the cents-per-mile valuation rule, at $61,700 for 2026.</p>

<h3>Billing clients for mileage on an invoice</h3>
<p>Freelancers, contractors and consultants often pass travel costs to clients. Using the IRS rate keeps the charge easy to justify. Agree it in your contract or estimate first, then bill it as its own line rather than burying it in your fee:</p>
<ul>
<li><strong>Description:</strong> "Business mileage, Aug 4 to Aug 29, client site visits"</li>
<li><strong>Quantity:</strong> 320 miles</li>
<li><strong>Rate:</strong> $0.76</li>
<li><strong>Amount:</strong> $243.20</li>
</ul>
<p>For travel before July 1, use $0.725 if your agreement ties the charge to the IRS rate. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on an invoice</a> explains whether to mark up pass-through costs and how to show them for sales tax. Mileage you bill is income to you, and you still deduct your own business miles, so the two do not cancel out on your return.</p>
<p>Truckers and delivery businesses usually price differently, per load or per route, rather than per mile at the IRS rate.</p>

<h2>Standard mileage vs actual expenses in 2026</h2>
<p>The higher 2026 rate makes the standard method more generous than in past years, but actual expenses can still win for expensive, heavily used or inefficient vehicles. Here is a quick comparison:</p>
<table>
<thead><tr><th>Factor</th><th>Standard mileage rate</th><th>Actual expenses</th></tr></thead>
<tbody>
<tr><td>Recordkeeping</td><td>Mileage log, parking and toll receipts</td><td>Mileage log plus every vehicle receipt</td></tr>
<tr><td>Best for</td><td>Efficient, low-cost or electric cars, high mileage</td><td>Costly vehicles, high insurance or repairs, low mileage</td></tr>
<tr><td>Depreciation</td><td>Built in (35 cents per mile for 2026)</td><td>Claimed separately, subject to limits</td></tr>
<tr><td>Fleet of five or more</td><td>Not allowed</td><td>Allowed</td></tr>
<tr><td>Flexibility later</td><td>Can switch to actual in a later year</td><td>Usually locked in if MACRS or Section 179 used</td></tr>
</tbody>
</table>
<p>To decide, total what you actually spent on the car in a year, multiply by your business-use percentage and compare it to your mileage figure. Mileage is just one line among your <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>, and lower taxable profit also lowers your <a href="/blog/self-employment-tax">self-employment tax</a>, so the choice matters more than it looks.</p>

<h2>Where mileage fits in your wider tax picture</h2>
<p>Your mileage deduction reduces Schedule C profit, which in turn reduces both income tax and self-employment tax. To see what bracket that saving lands in, see our sibling guide to the <a href="/blog/federal-tax-brackets-2026">2026 tax brackets and standard deduction</a>. If your mileage figure is large, factor it into your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> so you do not overpay during the year.</p>
<p>New business owners setting up their books may also want our list of <a href="/blog/business-expense-categories">business expense categories</a>, which shows where car costs sit alongside travel, supplies and software.</p>

<h2>Bill your mileage the right way</h2>
<p>The IRS mileage rate 2026 is 72.5 cents per mile for January to June and 76 cents per mile for July to December, so split your log at June 30 and apply the right rate to each half. Keep dated trip records, add parking and tolls separately and reduce your car's basis by 35 cents per business mile.</p>
<p>When you pass travel costs on to clients, show miles, rate and dates as their own line. <a href="/invoice-generator/usa">Create a US invoice</a> with a mileage line in minutes, or start from the <a href="/invoice-templates/corporate">corporate invoice template</a>. Ready to bill? Open the <a href="/invoice-generator">invoice generator</a> and download a professional PDF free.</p>
`,
  },
  {
    slug: "federal-tax-brackets-2026",
    title: "2026 Tax Brackets and Standard Deduction: Full IRS Tables",
    description:
      "2026 tax brackets for single, joint and head of household filers, the $16,100 standard deduction, and a worked example for self-employed taxpayers.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employment-tax",
      "quarterly-estimated-taxes-freelancers",
      "qbi-deduction-section-199a",
      "estimated-tax-penalty",
    ],
    faqs: [
      {
        q: "What are the 2026 federal tax brackets?",
        a: "There are seven rates for 2026: 10%, 12%, 22%, 24%, 32%, 35% and 37%. For single filers, 10% applies up to $12,400 of taxable income, 12% up to $50,400, 22% up to $105,700, 24% up to $201,775, 32% up to $256,225, 35% up to $640,600 and 37% above that. Joint filers' thresholds are generally double the single amounts until the top brackets.",
      },
      {
        q: "What is the standard deduction for 2026?",
        a: "Revenue Procedure 2025-32 sets the 2026 standard deduction at $16,100 for single filers and married filing separately, $32,200 for married couples filing jointly and surviving spouses, and $24,150 for heads of household. People 65 or older or blind add $1,650 each if married, or $2,050 if unmarried. A separate senior deduction of up to $6,000 per person is also available through 2028.",
      },
      {
        q: "Are the 2026 tax brackets for taxes filed in 2027?",
        a: "Yes. The 2026 brackets apply to income you earn from January 1 to December 31, 2026, and you use them on the return you file in early 2027, normally due April 15, 2027. For the return you filed in 2026, which covered 2025 income, the 2025 brackets applied. Use the 2026 tables now for withholding and quarterly estimated tax planning.",
      },
      {
        q: "Do self-employed people use the same tax brackets?",
        a: "Yes. Self-employed people use the same income tax brackets as employees. The difference is that they also pay self-employment tax of 15.3% on 92.35% of net earnings, covering Social Security and Medicare, up to the Social Security wage base for the 12.4% part. Half of that tax is deductible, and many also qualify for the 20% qualified business income deduction, which lowers taxable income.",
      },
      {
        q: "What is the difference between marginal and effective tax rate?",
        a: "Your marginal rate is the rate on your last dollar of taxable income, the bracket you fall into. Your effective rate is your total tax divided by your income. Because each bracket only taxes the income within it, the effective rate is always lower. A single filer with $60,000 of taxable income in 2026 is in the 22% bracket but pays $7,912, an effective rate of about 13.2%.",
      },
      {
        q: "Did the One Big Beautiful Bill change the 2026 tax brackets?",
        a: "It kept them in place. The law made the seven-rate structure from 2018 permanent, so the brackets did not revert to the older, higher rates in 2026 as previously scheduled. It also set a larger permanent standard deduction and added temporary deductions for seniors, tips, overtime and car loan interest. The 2026 thresholds themselves come from the IRS annual inflation adjustment.",
      },
      {
        q: "What are the 2026 capital gains tax brackets?",
        a: "For 2026, long-term capital gains and qualified dividends are taxed at 0% up to $49,450 of taxable income for single filers, $98,900 for joint filers and $66,200 for heads of household. The 15% rate applies up to $545,500 single, $613,700 joint and $579,600 head of household, with 20% above those amounts. These figures come from Revenue Procedure 2025-32.",
      },
      {
        q: "How do I know which filing status to use?",
        a: "Filing status depends on your marital status on December 31 and your household. Single applies if you are unmarried with no qualifying dependent. Married couples choose joint or separate. Head of household needs you to be unmarried, pay more than half the cost of keeping up a home and have a qualifying person living with you. Head of household gets wider brackets and a bigger standard deduction than single.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The 2026 tax brackets keep seven federal rates, 10% to 37%. For single filers, 10% covers taxable income up to $12,400, 12% up to $50,400 and 22% up to $105,700, with 37% starting above $640,600 ($768,700 for joint filers). The 2026 standard deduction is $16,100 single, $32,200 married filing jointly and $24,150 head of household.</p>

<p>These are the figures you will use on the return you file in spring 2027, and the ones to plan with now for withholding and quarterly payments. This guide gives the full 2026 tax brackets for every filing status, the standard deduction and related amounts, and a worked example showing how a self-employed person's income actually gets taxed. If you freelance, the brackets are only half the story, so we cover self-employment tax too. When you are ready to bill, our <a href="/invoice-generator">free invoice generator</a> helps you keep income records clean from the first invoice.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Figures come from IRS Revenue Procedure 2025-32 and IRS announcements; your result depends on your full return.</p>

<h2>2026 tax brackets for single filers</h2>
<p>The IRS announced the 2026 inflation adjustments in October 2025, and they incorporate changes from the One, Big, Beautiful Bill Act (which the IRS now also calls the Working Families Tax Cuts). That law made the seven-rate structure permanent. As of 2026, the <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">IRS 2026 inflation adjustment announcement</a> and Revenue Procedure 2025-32 set these thresholds:</p>
<table>
<thead><tr><th>Rate</th><th>Taxable income (single)</th><th>Tax owed</th></tr></thead>
<tbody>
<tr><td>10%</td><td>$0 to $12,400</td><td>10% of taxable income</td></tr>
<tr><td>12%</td><td>$12,400 to $50,400</td><td>$1,240 plus 12% over $12,400</td></tr>
<tr><td>22%</td><td>$50,400 to $105,700</td><td>$5,800 plus 22% over $50,400</td></tr>
<tr><td>24%</td><td>$105,700 to $201,775</td><td>$17,966 plus 24% over $105,700</td></tr>
<tr><td>32%</td><td>$201,775 to $256,225</td><td>$41,024 plus 32% over $201,775</td></tr>
<tr><td>35%</td><td>$256,225 to $640,600</td><td>$58,448 plus 35% over $256,225</td></tr>
<tr><td>37%</td><td>Over $640,600</td><td>$192,979.25 plus 37% over $640,600</td></tr>
</tbody>
</table>
<p>Married people filing separately use the same thresholds as single filers up to the 35% bracket, which ends at $384,350 for them; 37% applies above that.</p>

<h2>2026 tax brackets for married filing jointly</h2>
<p>Joint filers and qualifying surviving spouses get thresholds that are exactly double the single amounts through the 35% bracket's start, which removes the marriage penalty for most couples.</p>
<table>
<thead><tr><th>Rate</th><th>Taxable income (married filing jointly)</th><th>Tax owed</th></tr></thead>
<tbody>
<tr><td>10%</td><td>$0 to $24,800</td><td>10% of taxable income</td></tr>
<tr><td>12%</td><td>$24,800 to $100,800</td><td>$2,480 plus 12% over $24,800</td></tr>
<tr><td>22%</td><td>$100,800 to $211,400</td><td>$11,600 plus 22% over $100,800</td></tr>
<tr><td>24%</td><td>$211,400 to $403,550</td><td>$35,932 plus 24% over $211,400</td></tr>
<tr><td>32%</td><td>$403,550 to $512,450</td><td>$82,048 plus 32% over $403,550</td></tr>
<tr><td>35%</td><td>$512,450 to $768,700</td><td>$116,896 plus 35% over $512,450</td></tr>
<tr><td>37%</td><td>Over $768,700</td><td>$206,583.50 plus 37% over $768,700</td></tr>
</tbody>
</table>

<h2>2026 tax brackets for head of household</h2>
<p>Head of household status gives unmarried people who support a qualifying person wider lower brackets than single filers.</p>
<table>
<thead><tr><th>Rate</th><th>Taxable income (head of household)</th><th>Tax owed</th></tr></thead>
<tbody>
<tr><td>10%</td><td>$0 to $17,700</td><td>10% of taxable income</td></tr>
<tr><td>12%</td><td>$17,700 to $67,450</td><td>$1,770 plus 12% over $17,700</td></tr>
<tr><td>22%</td><td>$67,450 to $105,700</td><td>$7,740 plus 22% over $67,450</td></tr>
<tr><td>24%</td><td>$105,700 to $201,750</td><td>$16,155 plus 24% over $105,700</td></tr>
<tr><td>32%</td><td>$201,750 to $256,200</td><td>$39,207 plus 32% over $201,750</td></tr>
<tr><td>35%</td><td>$256,200 to $640,600</td><td>$56,631 plus 35% over $256,200</td></tr>
<tr><td>37%</td><td>Over $640,600</td><td>$191,171 plus 37% over $640,600</td></tr>
</tbody>
</table>

<h2>Standard deduction 2026 and other key amounts</h2>
<p>Your bracket applies to taxable income, which is income after deductions. Most people take the standard deduction rather than itemizing. Revenue Procedure 2025-32 sets the 2026 amounts:</p>
<table>
<thead><tr><th>Filing status</th><th>2026 standard deduction</th></tr></thead>
<tbody>
<tr><td>Single or married filing separately</td><td>$16,100</td></tr>
<tr><td>Married filing jointly or surviving spouse</td><td>$32,200</td></tr>
<tr><td>Head of household</td><td>$24,150</td></tr>
</tbody>
</table>
<p>Other 2026 figures worth knowing:</p>
<ul>
<li><strong>Age 65 or blind:</strong> an additional $1,650 per qualifying person if married, or $2,050 if unmarried and not a surviving spouse.</li>
<li><strong>Senior deduction:</strong> an extra $6,000 per person aged 65 or older for 2025 through 2028, phasing out above $75,000 of modified AGI ($150,000 joint), according to the IRS.</li>
<li><strong>Charitable gifts for non-itemizers:</strong> beginning with 2026, up to $1,000 ($2,000 joint) of cash gifts to qualifying charities, per IRS Topic 506.</li>
<li><strong>Tips and overtime:</strong> temporary deductions of up to $25,000 for qualified tips and $12,500 ($25,000 joint) for qualified overtime premium pay, each phasing out above $150,000 MAGI ($300,000 joint). See our guides to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a> and <a href="/blog/no-tax-on-overtime">no tax on overtime</a>.</li>
<li><strong>Long-term capital gains:</strong> 0% up to $49,450 single, $98,900 joint and $66,200 head of household; 15% up to $545,500, $613,700 and $579,600 respectively; 20% above.</li>
<li><strong>QBI deduction threshold:</strong> the specified service and wage limits of the qualified business income deduction start to phase in above $201,750 of taxable income ($403,500 joint).</li>
</ul>

<h2>How the 2026 brackets work: marginal vs effective rate</h2>
<p>A common myth is that moving into a higher bracket makes all your income taxed at the higher rate. It does not. Each rate only applies to the slice of income inside its band.</p>
<p>Take a single filer with $60,000 of taxable income in 2026:</p>
<ul>
<li>10% on the first $12,400 = $1,240</li>
<li>12% on the next $38,000 ($12,400 to $50,400) = $4,560</li>
<li>22% on the remaining $9,600 ($50,400 to $60,000) = $2,112</li>
<li><strong>Total federal income tax = $7,912</strong></li>
</ul>
<p>This person's marginal rate is 22%, but the effective rate is $7,912 / $60,000 = about 13.2%. An extra $1,000 of income costs $220 in income tax, not 22% of everything.</p>

<h2>2026 tax brackets for the self-employed</h2>
<p>Freelancers, contractors and sole proprietors use exactly the same brackets as employees. What changes is how you get from revenue to taxable income, and the extra <a href="/blog/self-employment-tax">self-employment tax</a> on top.</p>
<p>The path looks like this:</p>
<ol>
<li><strong>Start with gross receipts</strong> from every invoice you were paid in the year.</li>
<li><strong>Subtract business expenses</strong> on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> to get net profit. Our sibling guide to <a href="/blog/business-expense-categories">business expense categories</a> lists what goes where.</li>
<li><strong>Figure self-employment tax</strong>: 15.3% of 92.35% of net profit (the 12.4% Social Security part stops at the $184,500 wage base for 2026, per the Social Security Administration).</li>
<li><strong>Deduct half of self-employment tax</strong> and any other adjustments, such as the <a href="/blog/self-employed-health-insurance-deduction">self-employed health insurance deduction</a>, to reach AGI.</li>
<li><strong>Subtract the standard deduction</strong> (or itemized deductions).</li>
<li><strong>Subtract the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a></strong>, generally 20% of qualified business income, limited to 20% of taxable income before it.</li>
<li><strong>Apply the 2026 brackets</strong> to what remains, then add self-employment tax.</li>
</ol>

<h3>Worked example: a single freelancer with $85,000 profit</h3>
<p>Jordan is a single freelance designer with $85,000 of Schedule C net profit in 2026, no other income and the standard deduction. Figures are rounded to the nearest dollar.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Net profit</td><td>Schedule C</td><td>$85,000</td></tr>
<tr><td>Self-employment tax</td><td>$85,000 x 92.35% x 15.3%</td><td>$12,010</td></tr>
<tr><td>Deductible half of SE tax</td><td>$12,010 / 2</td><td>$6,005</td></tr>
<tr><td>Adjusted gross income</td><td>$85,000 - $6,005</td><td>$78,995</td></tr>
<tr><td>Less standard deduction</td><td>$78,995 - $16,100</td><td>$62,895</td></tr>
<tr><td>QBI deduction</td><td>Lesser of 20% x $78,995 ($15,799) or 20% x $62,895 ($12,579)</td><td>$12,579</td></tr>
<tr><td>Taxable income</td><td>$62,895 - $12,579</td><td>$50,316</td></tr>
<tr><td>Income tax</td><td>$1,240 + 12% x ($50,316 - $12,400)</td><td>$5,790</td></tr>
<tr><td><strong>Total federal tax</strong></td><td>$5,790 + $12,010</td><td><strong>$17,800</strong></td></tr>
</tbody>
</table>
<p>Jordan earned $85,000 yet sits in the 12% bracket, because the SE tax deduction, standard deduction and QBI deduction remove about $34,700 before the brackets apply. Self-employment tax, not income tax, is the larger bill. That is typical for freelancers in the lower and middle brackets, and it is why tracking every deductible expense pays off twice.</p>

<h3>How the numbers change at higher profit</h3>
<p>Brackets matter more as profit grows. If Jordan's profit doubled to $170,000, the 12.4% Social Security part of self-employment tax would still apply to the full $156,995 of net earnings ($170,000 x 92.35%), because that is below the 2026 wage base of $184,500. Taxable income would move well into the 22% and 24% bands, and each extra $1,000 of profit would cost roughly $240 of income tax plus about $141 of self-employment tax before the deductions that partly offset it. Once net earnings pass the wage base, only the 2.9% Medicare part continues, which is why the marginal cost of an extra dollar can fall slightly at very high self-employed incomes, until the 0.9% Additional Medicare Tax applies.</p>
<p>Above $201,750 of taxable income for single filers ($403,500 joint), the QBI deduction also begins to phase down for specified service businesses such as consulting, law, accounting and health. The QBI guide linked above walks through that limit.</p>

<h2>What changed from 2025 to 2026</h2>
<p>For most people the change is modest: thresholds rose with inflation, so the same income lands slightly lower in the bands. Comparing the single filer figures with the 2025 amounts set under the One, Big, Beautiful Bill Act:</p>
<table>
<thead><tr><th>Item</th><th>2025</th><th>2026</th></tr></thead>
<tbody>
<tr><td>Standard deduction, single</td><td>$15,750</td><td>$16,100</td></tr>
<tr><td>Standard deduction, married filing jointly</td><td>$31,500</td><td>$32,200</td></tr>
<tr><td>Standard deduction, head of household</td><td>$23,625</td><td>$24,150</td></tr>
<tr><td>Top rate</td><td>37%</td><td>37%</td></tr>
<tr><td>Charitable deduction without itemizing</td><td>Not available</td><td>Up to $1,000 ($2,000 joint)</td></tr>
</tbody>
</table>
<p>The bigger story is what did not change. Before the 2025 law, the 2018 rate cuts were scheduled to expire after 2025, which would have brought back higher rates and a smaller standard deduction in 2026. The law made the seven-rate structure and the larger standard deduction permanent, so 2026 planning can assume stable rules. The temporary deductions for seniors, tips, overtime and car loan interest are scheduled to run through 2028, so they need revisiting in a few years.</p>

<h2>Using the 2026 brackets to plan ahead</h2>
<p>Because no one withholds tax from freelance income, you are expected to pay during the year. For 2026 the federal <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax</a> dates are April 15, June 15 and September 15, 2026, and January 15, 2027. Missing them can trigger the <a href="/blog/estimated-tax-penalty">estimated tax penalty</a>.</p>
<p>Practical steps for the rest of 2026:</p>
<ul>
<li><strong>Estimate your bracket now.</strong> Total year-to-date profit from your invoices and project the last quarter.</li>
<li><strong>Set aside a percentage of every payment.</strong> Jordan's total tax was about 21% of profit; many freelancers keep 25% to 30% in a separate account to stay safe.</li>
<li><strong>Time expenses and income.</strong> If you are near the top of a bracket, buying needed equipment before December 31 or invoicing a large project in January can keep income in a lower band, as long as it reflects real business timing.</li>
<li><strong>Consider retirement contributions.</strong> A <a href="/blog/solo-401k-vs-sep-ira">Solo 401(k) or SEP IRA</a> reduces taxable income and builds savings.</li>
<li><strong>Know your entity.</strong> The brackets are the same for a sole proprietor and a single-member LLC; see <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes for an LLC</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> if you are weighing an S corporation election.</li>
</ul>

<h2>Keep clean income records for 2026</h2>
<p>The 2026 tax brackets run from 10% to 37%, with a $16,100 standard deduction for single filers, $32,200 for joint filers and $24,150 for heads of household. For self-employed taxpayers, the bracket is only part of the bill: self-employment tax and the QBI deduction change the picture as much as the rates do.</p>
<p>Every number in that calculation starts with your invoices. Use consistent numbering from the <a href="/tools/invoice-number-generator">invoice number generator</a>, send each bill from the <a href="/invoice-generator/usa">US invoice generator</a> and keep the PDFs together for tax time. <a href="/invoice-generator">Create your next invoice free</a> and make April 2027 easier.</p>
`,
  },
  {
    slug: "resale-certificate",
    title: "Resale Certificate: What It Is, How to Get One and Use It",
    description:
      "A resale certificate lets you buy inventory without paying sales tax. Learn who qualifies, how to get one, how sellers accept it and how to avoid misuse.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sellers-permit",
      "sales-tax-exemption-certificate",
      "tax-exempt-invoice",
      "sales-tax-nexus",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "What is a resale certificate?",
        a: "A resale certificate is a document a business gives its supplier to buy goods without paying sales tax, because the goods will be resold. Sales tax is meant to be paid once, by the final consumer, so the certificate shifts collection to the later retail sale. It usually shows the buyer's name, address, sales tax permit number, the items bought and a signed statement that they are for resale.",
      },
      {
        q: "Is a resale certificate the same as a seller's permit?",
        a: "No. A seller's permit, also called a sales tax permit or license, is issued by your state and authorizes you to make taxable sales and collect tax. A resale certificate is a form you fill out yourself and hand to a supplier, citing your permit number. In most states you need the permit first, because the certificate relies on that number to prove you are a registered reseller.",
      },
      {
        q: "How much does a resale certificate cost?",
        a: "The certificate form itself is usually free; you download it from your state tax agency or use a multistate form. What may cost money is the underlying sales tax registration, and fees for that vary by state. Many states charge nothing to register, while some charge a small fee or require a security deposit. Check your state revenue department for current registration costs.",
      },
      {
        q: "Does a resale certificate expire?",
        a: "It depends on the state. Some states treat a properly completed blanket certificate as valid until it is revoked or the relationship ends, while others require renewal on a set cycle or after a period with no purchases. Sellers should keep certificates on file and refresh them periodically. Texas, for example, requires sellers to keep resale certificates for four years.",
      },
      {
        q: "Can I use a resale certificate from one state in another state?",
        a: "Sometimes. The Streamlined Sales Tax certificate of exemption is accepted by all 24 Streamlined member states, and many other states accept out-of-state registration numbers for resale, especially for drop shipments. Other states require their own form or a registration in that state. Always check the rules of the state where the goods are delivered, because that is generally where the sale is taxed.",
      },
      {
        q: "What happens if I use a resale certificate for personal items?",
        a: "Using a resale certificate for items you keep, use in the business or take for personal use is misuse. You owe the tax you avoided, usually as use tax, plus interest, and states can add penalties. California's tax agency warns that intentional misuse can lead to criminal prosecution. If you later pull resale inventory for your own use, report use tax on its cost.",
      },
      {
        q: "Do services businesses need a resale certificate?",
        a: "Usually not, unless they buy tangible goods that pass to the customer as part of a taxable sale. A web designer buying software for their own use cannot use one. A contractor or interior designer who buys materials and resells them to a client as separately invoiced goods may be able to, depending on the state. Rules for contractors are especially state-specific.",
      },
      {
        q: "How do I mark a resale sale on an invoice?",
        a: "If you are the seller accepting a certificate, do not charge sales tax on that line or invoice and add a note such as 'Exempt: sale for resale, certificate on file' with the buyer's permit number if your state expects it. Keep the certificate with your records. If you are the buyer, check that your supplier's invoice shows no tax so you are not paying tax twice.",
      },
      {
        q: "Can drop shippers accept a resale certificate?",
        a: "Yes, in many states. Under the Streamlined Sales and Use Tax Agreement, member states must let a third-party vendor such as a drop shipper accept a resale exemption certificate from its customer, the reseller. Outside Streamlined states the rules vary, and some states ask for a certificate valid in the delivery state. Online sellers using drop shipping should confirm this for each state they ship to.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A resale certificate is a form a registered business gives its supplier to buy goods tax-free because it will resell them. The buyer lists its sales tax permit number and signs that the items are for resale; the supplier keeps the certificate on file instead of collecting sales tax. Tax is then collected once, from the final customer.</p>

<p>If you buy inventory to sell, paying sales tax at purchase and then collecting it again from your customer would tax the same product twice. A resale certificate, sometimes called a reseller permit, resale license or reseller certificate, prevents that. This guide explains who qualifies, how to get and use one, what sellers must check before accepting one, and how to show a resale sale correctly on an invoice made with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Sales tax is set state by state, and resale rules differ in the details, so confirm with your state tax agency.</p>

<h2>What a resale certificate does</h2>
<p>Sales tax in the US is designed to be paid by the final consumer. A wholesaler selling to a retailer is not selling to the consumer, so the sale is exempt if the retailer proves it will resell the goods. The resale certificate is that proof.</p>
<p>In practice it does three things:</p>
<ul>
<li><strong>For the buyer:</strong> it removes sales tax from inventory purchases, improving cash flow.</li>
<li><strong>For the seller:</strong> it documents why no tax was charged. Under the Streamlined Sales and Use Tax Agreement, a seller that obtains a fully completed certificate within 90 days of the sale is relieved of the tax.</li>
<li><strong>For the state:</strong> it moves tax collection to the retail sale, where the reseller charges the customer and remits it.</li>
</ul>
<p>A resale certificate is a type of <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificate</a>, but the two are not interchangeable. Exemption certificates also cover nonprofits, government buyers, manufacturers and farmers, each claiming a different reason for exemption.</p>

<h3>Resale certificate vs seller's permit vs exemption certificate</h3>
<table>
<thead><tr><th>Document</th><th>Issued by</th><th>Purpose</th><th>Who holds it</th></tr></thead>
<tbody>
<tr><td>Seller's permit (sales tax permit)</td><td>Your state tax agency</td><td>Registers you to make sales and collect sales tax</td><td>You, the business</td></tr>
<tr><td>Resale certificate</td><td>You fill it in (state or multistate form)</td><td>Buy goods tax-free for resale</td><td>Your supplier keeps it</td></tr>
<tr><td>Exemption certificate</td><td>Buyer fills it in, sometimes with a state-issued exemption number</td><td>Claim other exemptions: nonprofit, government, manufacturing, agriculture</td><td>The supplier keeps it</td></tr>
</tbody>
</table>
<p>The confusion is understandable because some states call their seller's permit a "resale license." The key point is that the permit comes from the state, and the certificate is a form you complete and hand to suppliers.</p>

<h2>Who can use a resale certificate</h2>
<p>You can generally issue a resale certificate if you:</p>
<ul>
<li>Are registered to collect sales tax in at least one state (or your state's rules allow a valid out-of-state number).</li>
<li>Are buying tangible goods you will sell in the regular course of business, either as-is or as a physical part of a product you sell.</li>
<li>Actually intend to resell the specific items at the time you buy them.</li>
</ul>
<p>Typical users include retailers, ecommerce and marketplace sellers, wholesalers and distributors, restaurants buying food they serve, and makers buying raw materials that become part of a product. Our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoicing on Shopify and WooCommerce</a> covers how online sellers handle tax on the sale side.</p>
<p>You cannot use a resale certificate for things your business consumes: office supplies, cleaning products, tools, computers, display fixtures or packaging you do not pass to the customer as part of the sale. Those are taxable to you.</p>

<h2>How to get a resale certificate</h2>
<ol>
<li><strong>Register for a sales tax permit</strong> in the state where you have <a href="/blog/sales-tax-nexus">sales tax nexus</a>. This is usually done online through the state's revenue department, and you may need an EIN (see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>).</li>
<li><strong>Find the right form.</strong> Many states have their own resale form, for example California's CDTFA-230 General Resale Certificate or Texas Form 01-339. In Streamlined member states you can use the multistate Streamlined certificate of exemption.</li>
<li><strong>Complete it for each supplier.</strong> Enter your business name and address, permit number, a description of the goods and a statement that they are bought for resale. Date and sign it.</li>
<li><strong>Choose single-purchase or blanket.</strong> A blanket certificate covers ongoing purchases from one vendor; a single-purchase certificate covers one order.</li>
<li><strong>Send it to the supplier before you are invoiced,</strong> and keep a copy. The Streamlined Sales Tax organization says purchasers should give the certificate to their supplier, not to the state.</li>
<li><strong>Review it periodically.</strong> Update suppliers when your permit number, address or the type of goods you buy changes.</li>
</ol>

<h3>What a valid certificate contains</h3>
<p>California's tax agency does not require a specific form, but says a valid resale certificate must include the purchaser's name and address, seller's permit number, a description of the property, a statement that it is purchased for resale, the date and the purchaser's signature. It also warns that words like "nontaxable" or "exempt" alone are not acceptable. Most states expect similar elements, so these make a good checklist anywhere. See the <a href="https://cdtfa.ca.gov/formspubs/pub103/" target="_blank" rel="noopener noreferrer">CDTFA Publication 103 on sales for resale</a> for California's full guidance.</p>

<h2>Multistate resale: the Streamlined certificate</h2>
<p>Selling or buying across state lines adds complexity. The <a href="https://www.streamlinedsalestax.org/Shared-Pages/exemptions-" target="_blank" rel="noopener noreferrer">Streamlined Sales Tax exemptions page</a> states that its certificate of exemption is accepted by all 24 Streamlined member states. On that form, resale is one of the listed exemption reasons, and the buyer gives an ID number for the state where the exemption is claimed. If you are not registered in that state, the form allows a sales tax ID issued by another state. Sellers generally do not have to verify the number, though the page notes Georgia as an exception.</p>
<p>Some states outside the Streamlined group accept a uniform multistate certificate or out-of-state numbers in certain cases; others insist on their own form. When in doubt, ask the supplier which forms they accept, since they carry the audit risk.</p>

<h3>Drop shipping</h3>
<p>Drop shipping creates a three-party sale: you sell to the customer, and your supplier ships directly to them. The Streamlined Agreement requires member states to let a drop shipper accept a resale certificate from its reseller customer. Outside those states, the supplier may ask for a certificate valid in the delivery state or may charge tax. This is one of the most common sales tax headaches for online sellers, so document it carefully.</p>

<h2>Accepting resale certificates as a seller</h2>
<p>If you sell wholesale, accepting a certificate shifts tax responsibility to the buyer, but only if you accept it properly. Follow these rules:</p>
<ul>
<li><strong>Get it on time.</strong> California says the certificate should be taken before you bill, within your normal billing cycle or before delivery. Streamlined states give sellers 90 days after the sale to obtain a complete certificate.</li>
<li><strong>Check it is complete.</strong> Missing permit numbers, signatures or descriptions can make it invalid.</li>
<li><strong>Use good faith.</strong> A certificate is presumed taken in good faith if it contains the essential elements and appears valid. Do not accept one if you know the goods are not being resold, such as a dental office "reselling" office chairs.</li>
<li><strong>Verify where you can.</strong> Many states, including California, offer an online tool to verify a seller's permit.</li>
<li><strong>Keep it.</strong> The Texas Comptroller requires sellers to keep resale certificates for four years; other states set their own periods. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers general retention.</li>
<li><strong>Accept blanket certificates sensibly.</strong> Texas allows a blanket resale certificate only from a customer who buys exclusively for resale.</li>
</ul>

<h2>Worked example: a gift shop buying inventory</h2>
<p>A Texas gift shop with a sales tax permit buys 200 ceramic mugs from a wholesaler at $6.00 each and gives the wholesaler a completed Form 01-339. Its location has a combined 8.25% sales tax rate (Texas allows up to 6.25% state plus 2% local).</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Inventory purchase</td><td>200 x $6.00</td><td>$1,200.00</td></tr>
<tr><td>Sales tax avoided at purchase</td><td>$1,200 x 8.25%</td><td>$99.00</td></tr>
<tr><td>Retail sales of 190 mugs</td><td>190 x $15.00</td><td>$2,850.00</td></tr>
<tr><td>Sales tax collected from customers</td><td>$2,850 x 8.25%</td><td>$235.13</td></tr>
<tr><td>10 mugs taken for the staff kitchen: use tax on cost</td><td>10 x $6.00 x 8.25%</td><td>$4.95</td></tr>
<tr><td><strong>Total tax the shop remits</strong></td><td>$235.13 + $4.95</td><td><strong>$240.08</strong></td></tr>
</tbody>
</table>
<p>The shop never pays $99 upfront, and the state still receives tax on every mug, either as sales tax from the customer or as use tax on the 10 the shop used itself. That is the system working as intended. Use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> for quick checks like these, or the sibling guide on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a> for the formulas.</p>

<h2>Resale certificates for makers and service businesses</h2>
<p>Resale is not only for shops that buy finished goods. A furniture maker buying lumber, hardware and finish that become part of the table it sells is generally buying for resale, because those materials pass to the customer as part of the product. The same maker buying saw blades, sandpaper and a dust extractor is not, because those are consumed in production.</p>
<p>Service businesses are trickier. A photographer who sells printed albums may be able to buy album materials for resale if the album is sold as a taxable item. An interior designer who buys furniture and bills it to the client as a separate line may qualify, depending on the state. Contractors who install materials into real property are often treated as the final consumer of those materials and pay tax when they buy them, though some states take a different approach. If your work mixes labor and goods, read your state's guidance for your industry before issuing a certificate, and show goods and labor as separate lines on your invoices.</p>

<h2>Common resale certificate mistakes</h2>
<ul>
<li><strong>Using it for business supplies.</strong> Printer paper, equipment and cleaning products are consumed, not resold.</li>
<li><strong>Not paying use tax on withdrawals.</strong> Inventory you give away, use as a display or take home becomes taxable at cost.</li>
<li><strong>Letting the permit lapse.</strong> A certificate citing a closed or revoked permit is invalid.</li>
<li><strong>Ignoring state differences.</strong> A certificate that works in a Streamlined state may not satisfy a supplier in a non-member state.</li>
<li><strong>Losing the paperwork.</strong> In an audit, a seller without a certificate is usually treated as having made a taxable sale and must pay the tax itself.</li>
</ul>

<h2>Showing resale sales on your invoices</h2>
<p>Your invoice is the second half of the audit trail. When you sell to a reseller who has given you a certificate:</p>
<ol>
<li>Set the sales tax rate to zero for those lines or the whole invoice.</li>
<li>Add a note such as "Exempt: sale for resale. Resale certificate on file," and include the buyer's permit number if your state expects it.</li>
<li>Keep the certificate and invoice together, filed by customer.</li>
</ol>
<p>Our guide to <a href="/blog/tax-exempt-invoice">writing a tax-exempt invoice</a> has sample wording, and <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers how to show tax on taxable lines. Wholesale invoices benefit from a clean, formal layout such as the <a href="/invoice-templates/classic">classic invoice template</a>.</p>

<h2>Bill resale customers correctly</h2>
<p>A resale certificate lets registered sellers buy inventory without sales tax, as long as the goods are truly for resale and the certificate is complete, timely and kept on file. Buyers need a valid permit and must pay use tax on anything they pull for their own use; sellers need good faith, good records and zero-tax invoices that note the exemption.</p>
<p><a href="/invoice-generator/usa">Create a US invoice</a> with exempt line items and a resale note, or <a href="/invoice-generator">open the free invoice generator</a> to bill your next wholesale order in minutes. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "how-to-calculate-sales-tax",
    title: "How to Calculate Sales Tax: Formula, Examples and Rates",
    description:
      "Learn how to calculate sales tax with the simple formula, combined state and local rates, discounts, shipping and reverse calculation, with worked examples.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "reverse-sales-tax-calculation",
      "sales-tax-on-invoices-us",
      "sales-tax-nexus",
      "discount-on-invoice",
    ],
    faqs: [
      {
        q: "What is the formula to calculate sales tax?",
        a: "Sales tax equals the taxable price multiplied by the sales tax rate written as a decimal. To convert the rate, divide the percentage by 100, so 8.25% becomes 0.0825. For a $200 item at 8.25%, the tax is $200 x 0.0825 = $16.50, and the total is $216.50. To get the total in one step, multiply the price by 1 plus the rate: $200 x 1.0825.",
      },
      {
        q: "How do I find the pre-tax price from a total?",
        a: "Divide the total by 1 plus the tax rate. If a receipt shows $54.13 including 8.25% sales tax, the pre-tax price is $54.13 / 1.0825 = $50.00, and the tax is $4.13. Do not simply subtract 8.25% of the total, because that takes the percentage of a number that already includes tax and understates the price.",
      },
      {
        q: "How do I calculate sales tax with state and local rates?",
        a: "Add all the rates that apply at the location where the sale is sourced: state, county, city and any special district. In Texas, for example, the state rate is 6.25% and local jurisdictions can add up to 2%, for a combined maximum of 8.25%. Then apply that single combined rate to the taxable price, rather than calculating each layer separately and rounding several times.",
      },
      {
        q: "Is sales tax calculated before or after a discount?",
        a: "In most cases a seller's discount reduces the taxable price, so you apply the discount first and calculate tax on the lower amount. A 10% discount on $500 of goods means tax on $450. Manufacturer coupons and rebates are treated differently in some states, because the seller is reimbursed by a third party. Check your state's rules if you accept third-party coupons.",
      },
      {
        q: "Is shipping subject to sales tax?",
        a: "It depends on the state and how you invoice. Some states tax delivery charges when the goods are taxable, some exempt shipping if it is separately stated, and some treat handling fees differently from postage. To keep options open, always show shipping as its own line on the invoice rather than folding it into the product price, then apply your state's rule to that line.",
      },
      {
        q: "Which location's sales tax rate should I charge?",
        a: "Most states use destination sourcing for shipped goods, meaning you charge the rate where the customer receives the item. A few states use origin sourcing for in-state sellers, charging the seller's own rate. For in-person sales, the rate is usually where the sale happens. You also only need to collect in states where you have sales tax nexus, either physical presence or economic nexus.",
      },
      {
        q: "Should I round sales tax per line or per invoice?",
        a: "Most states accept rounding to the nearest cent using normal rounding, where half a cent or more rounds up, and many sellers calculate tax on the invoice's taxable subtotal. Some states allow or prefer per-item calculation. The two methods can differ by a cent or two on large invoices. Pick a method your state allows and apply it consistently in your invoicing software.",
      },
      {
        q: "Do services have sales tax?",
        a: "Some do, depending on the state. Many states tax only tangible goods and a short list of services, while others tax a wide range of services, including repairs, installation, cleaning or digital products. Labor charged separately from parts may be exempt in one state and taxable in another. Check your state tax agency's list before deciding to leave a service line untaxed.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To calculate sales tax, convert the rate to a decimal and multiply it by the taxable price: sales tax = price x rate. At 8.25%, a $200 sale has $200 x 0.0825 = $16.50 tax, for a $216.50 total. For the total in one step, multiply by 1 plus the rate. To remove tax from a total, divide by 1 plus the rate.</p>

<p>Knowing how to calculate sales tax correctly matters every time you invoice. Undercharge and you pay the difference yourself; overcharge and you owe it to the state and risk annoying customers. This guide covers the basic sales tax formula, combined state and local rates, discounts, shipping, rounding and reverse calculation, with worked examples. Our <a href="/invoice-generator">free invoice generator</a> applies the rate for you, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> is there for quick checks.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Sales tax rates and taxability rules are set by each state and locality and change during the year; confirm current rates with your state tax agency.</p>

<h2>The sales tax formula</h2>
<p>There are three formulas worth memorizing:</p>
<ul>
<li><strong>Sales tax amount</strong> = taxable price x tax rate</li>
<li><strong>Total price</strong> = taxable price x (1 + tax rate)</li>
<li><strong>Pre-tax price from a total</strong> = total / (1 + tax rate)</li>
</ul>
<p>The rate must be a decimal. Divide the percentage by 100: 6% is 0.06, 7.25% is 0.0725 and 8.875% is 0.08875. A common error is multiplying by 8.25 instead of 0.0825, which gives an answer 100 times too large.</p>

<h3>Quick reference table</h3>
<p>Here is the tax on common amounts at a range of rates, rounded to the nearest cent:</p>
<table>
<thead><tr><th>Rate</th><th>On $100</th><th>On $250</th><th>On $1,000</th></tr></thead>
<tbody>
<tr><td>5%</td><td>$5.00</td><td>$12.50</td><td>$50.00</td></tr>
<tr><td>6.25%</td><td>$6.25</td><td>$15.63</td><td>$62.50</td></tr>
<tr><td>7.25%</td><td>$7.25</td><td>$18.13</td><td>$72.50</td></tr>
<tr><td>8.25%</td><td>$8.25</td><td>$20.63</td><td>$82.50</td></tr>
<tr><td>10%</td><td>$10.00</td><td>$25.00</td><td>$100.00</td></tr>
</tbody>
</table>

<h2>How to calculate sales tax step by step</h2>
<ol>
<li><strong>Confirm you must collect.</strong> You collect sales tax only in states where you have <a href="/blog/sales-tax-nexus">sales tax nexus</a> and are registered. A handful of states have no statewide sales tax, though some local areas in those states may still levy one.</li>
<li><strong>Decide which items are taxable.</strong> Most tangible goods are taxable; services, food, clothing and digital goods vary by state. Sales to resellers with a valid <a href="/blog/resale-certificate">resale certificate</a> or exempt buyers are not taxed.</li>
<li><strong>Find the right location.</strong> For shipped goods most states use the customer's delivery address (destination sourcing); a few use the seller's location for in-state sales.</li>
<li><strong>Look up the combined rate</strong> for that address: state plus county, city and special district rates.</li>
<li><strong>Apply discounts first,</strong> then calculate tax on the reduced taxable amount.</li>
<li><strong>Treat shipping per your state's rule,</strong> shown on its own line.</li>
<li><strong>Multiply the taxable subtotal by the combined rate</strong> and round to the nearest cent.</li>
<li><strong>Show tax as a separate line</strong> on the invoice, with the rate used.</li>
</ol>

<h2>Combined rates: state, county, city and district</h2>
<p>The rate you charge is rarely just the state rate. Local governments add their own taxes, and the total can vary from one street to the next. Two examples from official sources, as of 2026:</p>
<ul>
<li><strong>Texas:</strong> the state rate is 6.25%, and cities, counties, special purpose districts and transit authorities can add up to 2% combined, for a maximum of 8.25%, according to the <a href="https://comptroller.texas.gov/taxes/sales/faq/local.php" target="_blank" rel="noopener noreferrer">Texas Comptroller local sales tax FAQ</a>.</li>
<li><strong>California:</strong> the statewide base rate is 7.25% (6% state, 1% local and 0.25% county transportation fund), and voter-approved district taxes can push the total higher, according to the <a href="https://cdtfa.ca.gov/taxes-and-fees/sales-use-tax-rates.htm" target="_blank" rel="noopener noreferrer">CDTFA sales and use tax rates page</a>.</li>
</ul>
<p>Always add the layers into one combined rate before multiplying. If a California address has a 1.00% district tax on top of the 7.25% base, the combined rate is 8.25% and the tax on $1,000 is $82.50. Calculating $72.50 and $10.00 separately gives the same answer here, but rounding each layer separately on odd amounts can create one-cent errors.</p>
<p>Rates change, often on January 1, April 1, July 1 or October 1, so use your state's official rate lookup by address rather than a list saved months ago.</p>

<h2>Worked example: a full invoice with discount and shipping</h2>
<p>A small business in Texas sells to a customer at a delivery address with an 8.25% combined rate. The invoice includes products, a discount, an installation service and shipping. For this example, assume the installation service and the separately stated shipping are not taxable under the applicable rules; check your own state.</p>
<table>
<thead><tr><th>Line</th><th>Calculation</th><th>Amount</th><th>Taxable?</th></tr></thead>
<tbody>
<tr><td>Product A</td><td>4 x $45.00</td><td>$180.00</td><td>Yes</td></tr>
<tr><td>Product B</td><td>2 x $120.00</td><td>$240.00</td><td>Yes</td></tr>
<tr><td>10% discount on products</td><td>($180 + $240) x 10%</td><td>-$42.00</td><td>Reduces taxable amount</td></tr>
<tr><td>Installation service</td><td>Flat fee</td><td>$150.00</td><td>No (assumed)</td></tr>
<tr><td>Shipping, separately stated</td><td>Flat fee</td><td>$20.00</td><td>No (assumed)</td></tr>
<tr><td>Taxable subtotal</td><td>$420.00 - $42.00</td><td>$378.00</td><td></td></tr>
<tr><td>Sales tax</td><td>$378.00 x 0.0825 = $31.185</td><td>$31.19</td><td></td></tr>
<tr><td><strong>Invoice total</strong></td><td>$378.00 + $150.00 + $20.00 + $31.19</td><td><strong>$579.19</strong></td><td></td></tr>
</tbody>
</table>
<p>Notice three things. The discount came off before tax, which is how most states treat a seller's own discount; our guide to <a href="/blog/discount-on-invoice">showing a discount on an invoice</a> explains the layout. Tax was calculated on the taxable subtotal only, not the whole invoice. And $31.185 rounded up to $31.19 because the third decimal was 5.</p>
<p>If the same invoice had been fully taxable, tax would be ($378 + $150 + $20) x 0.0825 = $548 x 0.0825 = $45.21, and the total $593.21. Getting taxability wrong on two lines changes the bill by $14.02.</p>

<h2>How to calculate sales tax backwards</h2>
<p>Sometimes you know the total and need the tax, for example from a receipt for your records or when a client agrees a tax-inclusive price. Divide by 1 plus the rate:</p>
<ul>
<li>Total paid: $54.13 at 8.25%</li>
<li>Pre-tax price: $54.13 / 1.0825 = $50.00</li>
<li>Sales tax: $54.13 - $50.00 = $4.13</li>
</ul>
<p>Check it forward: $50.00 x 0.0825 = $4.125, which rounds to $4.13. The mistake to avoid is taking 8.25% of $54.13 ($4.47), which overstates the tax because it applies the rate to an amount that already includes tax. Our full guide to <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> has more examples.</p>

<h2>Origin vs destination sourcing</h2>
<p>Which address's rate you use depends on how the state sources sales. This decision often matters more than the arithmetic, because two addresses a few miles apart can carry different combined rates.</p>
<table>
<thead><tr><th>Sale type</th><th>Usual rate to charge</th><th>Example</th></tr></thead>
<tbody>
<tr><td>In-person sale at your shop</td><td>Rate at your shop</td><td>A walk-in customer buys a lamp at your store</td></tr>
<tr><td>Shipped order, destination-based state</td><td>Rate at the customer's delivery address</td><td>You ship a lamp to a customer across the state</td></tr>
<tr><td>Shipped order, origin-based state (in-state sellers)</td><td>Rate at your business location</td><td>Some states let in-state sellers charge their own rate</td></tr>
<tr><td>Remote sale into another state</td><td>Generally destination rate, if you have nexus there</td><td>An online order delivered to another state where you are registered</td></tr>
<tr><td>Customer picks up from your warehouse</td><td>Usually the pickup location</td><td>A contractor collects materials at your yard</td></tr>
</tbody>
</table>
<p>If you sell online, your platform may calculate destination rates for you, but you are still responsible for registering in the right states. Large online marketplaces generally collect and remit tax on sales made through them in states with marketplace facilitator laws, which changes what you collect on your own website.</p>

<h2>Worked example: tax-inclusive pricing for a quote</h2>
<p>A client asks for a flat price of $1,500 "all in" for a custom product delivered to an address with a 7.25% combined rate. You need to split the price into the taxable amount and the tax so the invoice is correct:</p>
<ol>
<li>Divide the agreed total by 1 plus the rate: $1,500 / 1.0725 = $1,398.60 (rounded to the cent).</li>
<li>Calculate tax on that price: $1,398.60 x 0.0725 = $101.40 (from $101.3985).</li>
<li>Check the total: $1,398.60 + $101.40 = $1,500.00.</li>
</ol>
<p>Your invoice then shows a product line of $1,398.60, sales tax of $101.40 at 7.25% and a total of $1,500.00. Never show a tax-inclusive price as a single line with no tax shown when your state expects tax to be stated separately; it makes your sales tax return harder to reconcile and confuses customers who need to claim tax as an expense. Tracking these splits is easier if every invoice has a unique number; the <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a clean sequence.</p>

<h3>Rounding rules</h3>
<p>Sales tax is calculated to the cent. Most states accept standard rounding, where a fraction of half a cent or more rounds up. You can usually calculate either on each line or on the invoice's taxable total, but the two can differ slightly:</p>
<table>
<thead><tr><th>Method</th><th>Three items at $1.99, 8.25%</th><th>Tax</th></tr></thead>
<tbody>
<tr><td>Per line</td><td>$1.99 x 0.0825 = $0.164 (rounds to $0.16), three times</td><td>$0.48</td></tr>
<tr><td>Per invoice</td><td>$5.97 x 0.0825 = $0.4925</td><td>$0.49</td></tr>
</tbody>
</table>
<p>A one-cent difference is not a compliance problem in itself, but you should pick one method your state permits and use it consistently.</p>

<h3>What to do with the tax you collect</h3>
<p>Sales tax you collect is not your income. It is money held for the state until your filing date, which may be monthly, quarterly or annually depending on your sales volume and state. A simple habit keeps you safe: each time a customer pays, move the tax portion of that payment into a separate account. When the return is due, total the taxable sales and tax from your invoices for the period, check that the tax equals the taxable sales multiplied by the rates you charged, and file. If you collected tax by mistake, most states expect you to either refund it to the customer or remit it, not keep it.</p>

<h2>Common sales tax calculation mistakes</h2>
<ul>
<li><strong>Using only the state rate.</strong> Forgetting local and district rates is the most common cause of undercollection.</li>
<li><strong>Using your own rate for shipped orders</strong> in a destination-based state.</li>
<li><strong>Taxing the whole invoice</strong> when some lines, like certain services, are exempt.</li>
<li><strong>Applying tax before a discount.</strong></li>
<li><strong>Bundling shipping into product prices,</strong> which can make shipping taxable where it otherwise would not be.</li>
<li><strong>Taxing exempt customers</strong> who have given you a <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificate</a>.</li>
</ul>

<h2>Sales tax vs VAT calculations</h2>
<p>The arithmetic is similar, but the systems differ. US sales tax is charged once, at the final sale, and is usually added on top of the shelf price. VAT is charged at every stage, with businesses reclaiming the VAT they pay, and consumer prices usually include it. If you also bill clients abroad, see the sibling guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> and our comparison of <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>

<h2>Show sales tax clearly on your invoices</h2>
<p>To calculate sales tax, find the combined rate for the location where the sale is sourced, convert it to a decimal and multiply it by the taxable subtotal after discounts. Keep exempt items and shipping on separate lines, round to the nearest cent and show the tax and rate on the invoice. To work backwards, divide the total by 1 plus the rate.</p>
<p>For more on presentation, read <a href="/blog/sales-tax-on-invoices-us">how to show sales tax on US invoices</a>. Then <a href="/invoice-generator/usa">create a US invoice</a> with automatic tax lines, pick a layout like the <a href="/invoice-templates/modern">modern invoice template</a>, or <a href="/invoice-generator">use the free invoice generator</a> to send your next bill today. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "self-employed-health-insurance-deduction",
    title: "Self-Employed Health Insurance Deduction: Form 7206 Guide",
    description:
      "How the self-employed health insurance deduction works: who qualifies, eligible premiums, the net profit limit, Form 7206 line by line and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-tax-deductions",
      "self-employment-tax",
      "schedule-c-for-freelancers",
      "solo-401k-vs-sep-ira",
    ],
    faqs: [
      {
        q: "What is the self-employed health insurance deduction?",
        a: "It lets self-employed people deduct premiums for medical, dental, vision and qualified long-term care insurance for themselves, their spouse and dependents as an adjustment to income on Schedule 1 of Form 1040. Because it is an above-the-line deduction, you can claim it even if you take the standard deduction. It is limited to your net profit from the business, reduced by certain related deductions.",
      },
      {
        q: "Who qualifies for the self-employed health insurance deduction?",
        a: "Sole proprietors and single-member LLC owners with a net profit on Schedule C, farmers with a profit on Schedule F, partners with self-employment earnings and more-than-2% S corporation shareholders who receive wages from the company can qualify. The insurance plan must be established under the business. You cannot claim it for any month you were eligible for an employer-subsidized plan through your own or your spouse's job.",
      },
      {
        q: "Do I have to file Form 7206?",
        a: "Not always. Many people can use the worksheet in the Form 1040 instructions. The Form 7206 instructions say you must use the form if you had more than one source of self-employment income, file Form 2555 for foreign earned income, or include qualified long-term care premiums. Tax software typically decides this for you and completes the form when needed.",
      },
      {
        q: "Can I deduct Medicare premiums as self-employed?",
        a: "Yes. The Form 7206 instructions allow Medicare premiums you voluntarily pay to obtain insurance in your name that is similar to qualifying private health insurance. Check which Medicare parts qualify in the current instructions, and remember you still need self-employment net profit to support the deduction and must meet the other rules, including the monthly employer-plan test.",
      },
      {
        q: "Does the self-employed health insurance deduction reduce self-employment tax?",
        a: "No. The deduction reduces your adjusted gross income and therefore income tax, but it does not reduce net earnings for self-employment tax. Form 7206's instructions say you cannot subtract it when figuring self-employment tax on Schedule SE. That is different from health insurance paid through a business for employees, which is generally a business expense on Schedule C.",
      },
      {
        q: "What if my spouse's employer offers health insurance?",
        a: "If you were eligible to take part in a health plan subsidized by your spouse's employer, you cannot deduct premiums for any month you were eligible, even if you did not enroll. The test is applied month by month and separately for long-term care coverage. If your spouse's job started in October, for example, you could still deduct premiums for January through September.",
      },
      {
        q: "Can I deduct health insurance if my business had a loss?",
        a: "Not under this deduction. It is limited to net profit from the business under which the plan is established, after subtracting the deductible part of self-employment tax and self-employed retirement plan contributions. With a loss or zero profit the deduction is zero. You may be able to include the premiums as medical expenses on Schedule A instead, subject to the 7.5% of AGI floor.",
      },
      {
        q: "What are the 2026 long-term care premium limits?",
        a: "For 2026, Revenue Procedure 2025-32 limits deductible qualified long-term care premiums per person, by age at year end, to $500 for age 40 or under, $930 for 41 to 50, $1,860 for 51 to 60, $4,960 for 61 to 70 and $6,200 for over 70. Each covered person's amount is the smaller of premiums paid or the limit.",
      },
      {
        q: "Can I deduct premiums for my adult child?",
        a: "Yes, if your child was under age 27 at the end of the tax year, even if the child is not your dependent. The premiums must be for coverage established under your business, and the same monthly rule applies: you cannot deduct premiums for months the child was eligible for a subsidized employer plan, including through the child's own employer.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The self-employed health insurance deduction lets freelancers, sole proprietors, partners and more-than-2% S corporation shareholders deduct medical, dental, vision and qualified long-term care premiums for themselves, a spouse and dependents. It is claimed on Schedule 1 of Form 1040, often via Form 7206, and is limited to net profit from the business, minus related deductions.</p>

<p>Buying your own health insurance is one of the biggest costs of working for yourself, so this deduction is worth getting right. It lowers your income tax even if you take the standard deduction. This guide explains who qualifies, which premiums count, how the profit limit works, how to complete Form 7206 and where people commonly go wrong, with a worked example. If you are just starting out, track every payment from day one: sending numbered invoices with our <a href="/invoice-generator">free invoice generator</a> makes your profit figure easy to prove.</p>

<p><strong>Important:</strong> This is general information, not tax advice. At the time of writing, the 2025 Form 7206 and instructions are the latest final versions; check the 2026 versions when they are released.</p>

<h2>Who can claim the self-employed health insurance deduction</h2>
<p>According to the <a href="https://www.irs.gov/instructions/i7206" target="_blank" rel="noopener noreferrer">IRS instructions for Form 7206</a>, you may be able to take the deduction if you were:</p>
<ul>
<li><strong>Self-employed with a net profit</strong> on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> or Schedule F. This includes single-member LLC owners taxed as sole proprietors.</li>
<li><strong>A partner</strong> with net earnings from self-employment reported on Schedule K-1 (Form 1065), box 14, code A.</li>
<li><strong>Using an optional method</strong> to figure net earnings on Schedule SE.</li>
<li><strong>A more-than-2% S corporation shareholder</strong> who received wages from the company, with premiums paid or reimbursed by the S corporation and included in your W-2 wages.</li>
</ul>
<p>Two further conditions apply. The plan must be established under your business, which for a sole proprietor can be a policy in your own name. And you cannot claim the deduction for any month you were eligible for an employer-subsidized plan, covered next. Business structure affects how the plan is set up, so see <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> if you are deciding how to organize.</p>

<h3>The employer-subsidized plan rule</h3>
<p>You cannot deduct premiums for any month you were eligible to participate in a health plan subsidized by your employer, your spouse's employer, or the employer of your dependent or of your child under age 27. Eligibility is what counts, not enrollment. The test is monthly and is applied separately to long-term care coverage. A freelancer who also works a part-time job with subsidized health coverage generally loses the deduction for those months.</p>

<h2>Which premiums qualify</h2>
<table>
<thead><tr><th>Premium type</th><th>Deductible?</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Medical insurance, including Marketplace plans</td><td>Yes</td><td>Reduced if you receive the premium tax credit (see below)</td></tr>
<tr><td>Dental and vision insurance</td><td>Yes</td><td>Same rules as medical</td></tr>
<tr><td>Qualified long-term care insurance</td><td>Yes, up to age limits</td><td>Per-person cap based on age</td></tr>
<tr><td>Medicare premiums you voluntarily pay</td><td>Yes</td><td>Coverage in your name similar to private insurance</td></tr>
<tr><td>Coverage for your child under 27</td><td>Yes</td><td>Even if not your dependent</td></tr>
<tr><td>Out-of-pocket costs: deductibles, copays, prescriptions</td><td>No</td><td>Possibly Schedule A medical expenses, or HSA</td></tr>
<tr><td>Premiums for months with a subsidized employer plan available</td><td>No</td><td>Monthly test</td></tr>
</tbody>
</table>

<h3>2026 long-term care premium limits</h3>
<p>Qualified long-term care premiums count only up to an age-based limit per person. Revenue Procedure 2025-32 sets the 2026 limits, compared with the 2025 limits printed on the 2025 Form 7206:</p>
<table>
<thead><tr><th>Age at end of year</th><th>2025 limit</th><th>2026 limit</th></tr></thead>
<tbody>
<tr><td>40 or under</td><td>$480</td><td>$500</td></tr>
<tr><td>41 to 50</td><td>$900</td><td>$930</td></tr>
<tr><td>51 to 60</td><td>$1,800</td><td>$1,860</td></tr>
<tr><td>61 to 70</td><td>$4,810</td><td>$4,960</td></tr>
<tr><td>71 or older</td><td>$6,020</td><td>$6,200</td></tr>
</tbody>
</table>

<h2>The net profit limit</h2>
<p>The deduction cannot exceed the earned income from the business under which the plan is established. Form 7206 works this out by starting with your net profit and subtracting:</p>
<ul>
<li>The deductible part of your <a href="/blog/self-employment-tax">self-employment tax</a> attributable to that business.</li>
<li>Contributions to self-employed SEP, SIMPLE and qualified retirement plans from that business, such as a <a href="/blog/solo-401k-vs-sep-ira">Solo 401(k) or SEP IRA</a>.</li>
</ul>
<p>Your deduction is the smaller of your eligible premiums or that adjusted profit. If you have a loss, the deduction is zero. Any premiums you cannot deduct here may still count as medical expenses on Schedule A if you itemize, subject to the 7.5% of AGI floor.</p>
<p>Note that the deduction lowers income tax only. It does not reduce net earnings for self-employment tax, so you still pay 15.3% Social Security and Medicare tax on profit used to buy insurance.</p>

<h2>How to complete Form 7206</h2>
<p>The 2025 form follows this sequence. Use a separate Form 7206 for each business under which a plan is established.</p>
<ol>
<li><strong>Line 1:</strong> total premiums paid for medical, dental and vision coverage for the year, excluding months with subsidized employer coverage available and excluding long-term care.</li>
<li><strong>Line 2:</strong> qualified long-term care premiums, the smaller of payments or the age limit for each covered person.</li>
<li><strong>Line 3:</strong> add lines 1 and 2.</li>
<li><strong>Line 4:</strong> net profit and other earned income from the business where the plan is established.</li>
<li><strong>Lines 5 to 7:</strong> if you have more than one profitable business, allocate the deductible part of self-employment tax to this business.</li>
<li><strong>Lines 8 to 10:</strong> subtract that SE tax amount and any self-employed retirement contributions for this business.</li>
<li><strong>Line 11:</strong> S corporation shareholders enter Medicare wages from the S corporation instead.</li>
<li><strong>Lines 12 and 13:</strong> adjust for any foreign earned income exclusion.</li>
<li><strong>Line 14:</strong> the smaller of line 3 or line 13. This is your deduction, carried to Schedule 1 (Form 1040), line 17 on the 2025 form.</li>
</ol>
<p>The instructions say you must use Form 7206, rather than the simpler worksheet in the Form 1040 instructions, if you had more than one source of self-employment income, file Form 2555, or are including qualified long-term care premiums.</p>

<h2>Worked example: a freelancer with family coverage</h2>
<p>Alex is a self-employed web developer filing Schedule C. In 2026 Alex has $60,000 net profit and pays $650 a month for a family health plan, $7,800 for the year. Alex's spouse starts a job in October with a subsidized employer plan the family could join, so October to December premiums do not count. Alex also contributes $5,000 to a SEP IRA.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Eligible premiums (January to September)</td><td>9 months x $650</td><td>$5,850.00</td></tr>
<tr><td>Self-employment tax</td><td>$60,000 x 92.35% x 15.3%</td><td>$8,477.73</td></tr>
<tr><td>Deductible half of SE tax</td><td>$8,477.73 / 2</td><td>$4,238.87</td></tr>
<tr><td>Profit limit</td><td>$60,000 - $4,238.87 - $5,000</td><td>$50,761.13</td></tr>
<tr><td><strong>Deduction</strong></td><td>Smaller of $5,850.00 or $50,761.13</td><td><strong>$5,850.00</strong></td></tr>
</tbody>
</table>
<p>If Alex's income lands in the 12% bracket, the deduction saves about $5,850 x 12% = $702 in federal income tax. Alex cannot deduct the $1,950 paid for October to December under this deduction, because subsidized coverage was available.</p>

<h3>When the profit limit bites</h3>
<p>Now take Sam, who started freelancing late in the year: $4,000 net profit and $6,000 of eligible premiums. SE tax is $4,000 x 92.35% x 15.3% = $565.18, and half is $282.59. The limit is $4,000 - $282.59 = $3,717.41, so Sam deducts $3,717.41. The remaining $2,282.59 may go on Schedule A as a medical expense if Sam itemizes and clears the 7.5% floor. Growing profit by sending more invoices directly raises the deduction available.</p>

<h2>Step-by-step: claiming the deduction on your return</h2>
<ol>
<li><strong>Gather premium records.</strong> Collect statements showing what you paid each month for medical, dental, vision, long-term care and Medicare coverage. For Marketplace plans, have Form 1095-A ready.</li>
<li><strong>Mark ineligible months.</strong> List any month you, your spouse, a dependent or a child under 27 could have joined a subsidized employer plan.</li>
<li><strong>Finish Schedule C and Schedule SE first.</strong> You need your net profit and the deductible half of self-employment tax before you can apply the limit. Make sure your income matches the invoices you issued and the payments you received.</li>
<li><strong>Decide on retirement contributions.</strong> SEP, SIMPLE or Solo 401(k) contributions for the same business reduce the limit, so finalize them before the health insurance figure.</li>
<li><strong>Complete Form 7206 or the Form 1040 worksheet,</strong> depending on whether one of the mandatory Form 7206 situations applies.</li>
<li><strong>Enter the result on Schedule 1.</strong> It flows to Form 1040 as an adjustment to income, reducing AGI.</li>
<li><strong>Keep the records</strong> with your return in case the IRS asks you to prove the premiums and the monthly eligibility.</li>
</ol>
<p>Because the deduction depends on your profit, it rewards clean bookkeeping. Every invoice you send and every payment you receive feeds into Schedule C, so missing income records can understate profit in a year when the limit matters. A simple routine of numbering invoices, saving PDFs and recording payments weekly is enough for most freelancers.</p>

<h2>Marketplace plans and the premium tax credit</h2>
<p>If you buy coverage through the Health Insurance Marketplace and receive advance payments of the premium tax credit, the two calculations interact: your deduction depends on the credit and the credit depends on your income, which depends on the deduction. The Form 7206 instructions refer you to IRS Publication 974 for this case, which provides an iterative or simplified calculation. Tax software usually handles it. In general, you can only deduct the premiums you actually paid, not the part covered by the credit.</p>

<h2>Health insurance for S corporation owners and employees</h2>
<p>If you own more than 2% of an S corporation, the company should pay or reimburse your premiums and include them in your W-2 wages (box 1, but not Social Security and Medicare wages). You then claim the self-employed health insurance deduction on your personal return, using your S corporation Medicare wages as the limit on Form 7206 line 11.</p>
<p>If you have employees and pay for their coverage, that is generally a business expense on your return, not this deduction. Our list of <a href="/blog/business-expense-categories">business expense categories</a> shows where it goes.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Claiming months when subsidized coverage was available</strong> through a spouse or second job.</li>
<li><strong>Deducting premiums on Schedule C</strong> instead of Schedule 1, which wrongly lowers self-employment tax.</li>
<li><strong>Double counting</strong> the same premiums on Schedule A.</li>
<li><strong>Ignoring the profit limit</strong> in a low-income or loss year.</li>
<li><strong>Forgetting long-term care age caps</strong> or claiming them without Form 7206.</li>
<li><strong>Overlooking dental, vision and Medicare premiums,</strong> which also count.</li>
</ul>
<p>This deduction is one of many; see the full list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>. To see how it changes your bracket, check the sibling guide to the <a href="/blog/federal-tax-brackets-2026">2026 tax brackets</a>, and remember to factor it into your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</p>

<h2>Grow the profit that supports your deduction</h2>
<p>The self-employed health insurance deduction lets you deduct eligible medical, dental, vision, Medicare and long-term care premiums for your household, up to your business profit after the deductible part of SE tax and retirement contributions, for each month you had no subsidized employer plan available. Use Form 7206 when you have multiple businesses or long-term care premiums.</p>
<p>Clear records of what you earned make every limit easy to support. Bill clients from the <a href="/invoice-generator/usa">US invoice generator</a>, choose a clean layout like the <a href="/invoice-templates/minimal">minimal invoice template</a>, and <a href="/invoice-generator">create your next invoice free</a>. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
];
