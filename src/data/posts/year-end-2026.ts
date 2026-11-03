import type { PostDraft } from "../blog";

export const YEAR_END_2026_POSTS: PostDraft[] = [
  {
    slug: "year-end-tax-planning-small-business",
    title: "Year-End Tax Planning Checklist for Small Business (2026)",
    description:
      "Year end tax planning for small business in 2026: timing income and expenses, Section 179, 100% bonus depreciation, retirement plans, SALT and estimated taxes.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "year-end-invoicing-checklist",
      "self-employed-tax-deductions",
      "section-179-vs-bonus-depreciation",
    ],
    faqs: [
      {
        q: "When should a small business start year-end tax planning?",
        a: "Start in October or early November, while there is still time to act. Most year-end moves, such as buying equipment, opening a retirement plan, making a fourth-quarter estimated payment or delaying invoices, only count if they happen by December 31. Waiting until the last week of December leaves you rushing purchases you may not need and missing deadlines like retirement plan setup. A short review with projected full-year numbers in November is usually enough.",
      },
      {
        q: "Can I delay sending invoices until January to lower my 2026 taxes?",
        a: "If you use cash-basis accounting, income is generally taxed when you receive it, so invoicing in late December or early January can push the payment into 2027. It does not work if the money is already available to you, for example a check you received in December but did not deposit, because of the constructive receipt rule. Accrual-basis businesses record income when it is earned, so delaying the invoice does not change the year.",
      },
      {
        q: "Is it smart to buy equipment in December just for the deduction?",
        a: "Only if you need the equipment. Section 179 and 100% bonus depreciation let you deduct qualifying purchases placed in service by December 31, but a deduction saves only your marginal tax rate. Spending $10,000 to save perhaps $3,000 in tax still leaves you $7,000 poorer if the item was not needed. The asset must also be placed in service, meaning ready and available for use, before year-end, not just ordered.",
      },
      {
        q: "What is the safe harbor for estimated taxes?",
        a: "You generally avoid the federal underpayment penalty if your withholding and timely estimated payments equal at least 90% of this year's tax or 100% of last year's tax, rising to 110% if last year's adjusted gross income was over $150,000 ($75,000 married filing separately). The fourth 2026 estimated payment is due January 15, 2027. If you are short, extra wage withholding in December can help because withholding is treated as paid evenly through the year.",
      },
      {
        q: "Do I need to send 1099s for 2026 payments?",
        a: "Businesses that paid a contractor $2,000 or more for services in 2026 generally must file Form 1099-NEC and send a copy to the contractor. The $2,000 threshold replaced the old $600 level for payments made from 2026 under the One Big Beautiful Bill Act. Because January 31, 2027 falls on a Sunday, the deadline moves to February 1, 2027. Collect missing Forms W-9 in December so filing is not delayed.",
      },
      {
        q: "Should I prepay expenses before December 31?",
        a: "Cash-basis businesses can often deduct prepaid expenses in the year paid if the benefit does not extend beyond the earlier of 12 months after it starts or the end of the next tax year, under the 12-month rule. Paying January rent or a 12-month software subscription in December may therefore be deductible in 2026. Prepaying only makes sense if the cash is genuinely spare and you expect your tax rate to be the same or lower next year.",
      },
    ],
    content: `
<p>Year end tax planning for a small business comes down to a handful of decisions you must make before December 31: when to collect income, which expenses and equipment purchases to pull into this year, how much to put into a retirement plan, and whether your estimated payments are on track. Done in November with real numbers, it can cut a few thousand dollars off a typical owner's bill without any aggressive tricks. This checklist covers the 2026 rules, including the changes from the One Big Beautiful Bill Act (OBBBA), with a worked example.</p>

<p>This is general information, not tax advice. Rules depend on your entity type, accounting method and state, so confirm your plan with a CPA or enrolled agent before acting.</p>

<h2>Why year end tax planning matters more in 2026</h2>
<p>The OBBBA, signed in July 2025, made several provisions permanent and changed others. For small businesses the most important ones for 2026 are:</p>
<ul>
<li><strong>100% bonus depreciation</strong> is back permanently for qualifying property acquired after January 19, 2025.</li>
<li><strong>Section 179</strong> expensing is much larger: the 2026 limit is $2,560,000, phasing out once qualifying purchases exceed $4,090,000, under the IRS inflation adjustments in Rev. Proc. 2025-32.</li>
<li><strong>The qualified business income (QBI) deduction</strong> of up to 20% for pass-through owners is now permanent. Owners near the income thresholds should check eligibility before year-end.</li>
<li><strong>The SALT cap</strong> for itemizers is $40,400 for 2026, phasing down for modified AGI above $505,000.</li>
<li><strong>1099-NEC and 1099-MISC thresholds</strong> rise to $2,000 for payments made in 2026, covered in our <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold guide</a>.</li>
<li><strong>Charitable rules changed</strong> for 2026, including a 1% floor for corporations and a 0.5% of AGI floor for individuals who itemize. Our new guide to <a href="/blog/charitable-donations-business-deduction">charitable donations and your business</a> has the details.</li>
</ul>

<h2>The 2026 year-end tax planning checklist</h2>
<table><thead><tr><th>Area</th><th>Action before Dec 31, 2026</th><th>Who it helps most</th></tr></thead><tbody>
<tr><td>Income timing</td><td>Decide which December invoices to send now and which to issue in January</td><td>Cash-basis owners expecting a lower rate next year</td></tr>
<tr><td>Expenses</td><td>Pay outstanding bills, prepay qualifying 12-month expenses</td><td>Cash-basis businesses</td></tr>
<tr><td>Equipment</td><td>Buy and place in service needed assets; elect Section 179 or bonus</td><td>Businesses with planned purchases</td></tr>
<tr><td>Retirement</td><td>Open a solo 401(k) or confirm deferral elections; plan SEP contribution</td><td>Profitable self-employed owners</td></tr>
<tr><td>Bad debts</td><td>Review unpaid invoices and document uncollectible ones</td><td>Accrual-basis businesses</td></tr>
<tr><td>Estimated taxes</td><td>Check safe harbor; plan the January 15, 2027 payment</td><td>Anyone without enough withholding</td></tr>
<tr><td>Payroll and contractors</td><td>Collect W-9s, verify addresses, review S corp salary</td><td>Employers and payers of contractors</td></tr>
<tr><td>Records</td><td>Reconcile bank accounts, match invoices to deposits</td><td>Everyone</td></tr>
</tbody></table>

<h2>Step 1: Project your full-year profit</h2>
<p>Every other decision depends on an honest projection. Take year-to-date profit from your books, add expected November and December income, and subtract expected costs. Then compare the result with last year and with what you expect for 2027. If you expect a much higher income next year, accelerating income into 2026 may be better; if 2026 is a peak year, deferring income and pulling deductions forward usually wins.</p>
<p>Use the 2026 federal tax brackets to see where your next dollar of profit lands. Add 15.3% self-employment tax on most sole proprietor and partnership profit (on 92.35% of net earnings, with the Social Security part capped at the wage base). That combined marginal rate is what each deduction is really worth.</p>

<h2>Step 2: Time your invoices and collections</h2>
<p>For cash-basis businesses, which includes most freelancers and sole proprietors, income counts in the year you receive it. That makes invoice timing a legitimate planning lever:</p>
<ol>
<li><strong>If you want income in 2026</strong>, send December invoices early, offer card or instant bank payment, and follow up on overdue balances. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> help clear old receivables before the year closes.</li>
<li><strong>If you want income in 2027</strong>, finish the work but issue the invoice in late December with January payment terms, or date it in January. Do not hold checks you already have: under the constructive receipt rule, money available to you without restriction is income now even if you do not deposit it.</li>
<li><strong>Retainers and deposits</strong> received in December are generally income when received for cash-basis taxpayers, even for 2027 work. Plan big retainer invoices with that in mind.</li>
</ol>
<p>Accrual-basis businesses record income when it is earned, so the invoice date matters less than when the work is done. If you are unsure which method you use, our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> walks through it.</p>

<h2>Step 3: Pull deductible expenses into 2026</h2>
<h3>Pay bills you already owe</h3>
<p>Paying supplier invoices, subcontractors and credit card charges for business expenses before December 31 moves the deduction into 2026 for cash-basis businesses. Charges on a business credit card count when charged, not when you pay the card.</p>
<h3>Use the 12-month rule for prepaid costs</h3>
<p>Cash-basis taxpayers can generally deduct prepaid expenses whose benefit does not extend beyond the earlier of 12 months after the benefit starts or the end of the following tax year. Insurance premiums, a year of software or a January rent payment are common examples.</p>
<h3>Review the usual deductions</h3>
<p>Run through the common categories in our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions guide</a>: home office, vehicle use (the 2026 standard mileage rate is 72.5 cents per business mile), health insurance, phone and internet, professional fees and education. Small items under $2,500 per invoice or item can usually be expensed under the de minimis safe harbor election instead of depreciated.</p>

<h2>Step 4: Equipment, Section 179 and bonus depreciation</h2>
<p>If you were going to buy a computer, vehicle, machinery or furniture in early 2027 anyway, buying it and placing it in service by December 31 can move the whole deduction into 2026. Two tools do this:</p>
<table><thead><tr><th>Feature</th><th>Section 179</th><th>Bonus depreciation</th></tr></thead><tbody>
<tr><td>2026 limit</td><td>$2,560,000, phasing out above $4,090,000 of purchases</td><td>No dollar cap; 100% for property acquired after Jan 19, 2025</td></tr>
<tr><td>Can create a loss?</td><td>No, limited to business taxable income</td><td>Yes</td></tr>
<tr><td>Choose asset by asset?</td><td>Yes</td><td>Elect out by class of property</td></tr>
<tr><td>Used property</td><td>Allowed if new to you</td><td>Allowed if new to you</td></tr>
</tbody></table>
<p>Passenger vehicles still face annual luxury auto limits, and heavy SUVs have a separate Section 179 cap. Our comparison of <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> covers which to elect. Remember that a full write-off now means no depreciation later, and if business use of an asset falls to 50% or below, you may have to recapture part of the deduction.</p>

<h2>Step 5: Retirement contributions</h2>
<p>Retirement plans are often the biggest legitimate deduction available to a profitable owner. For 2026, the 401(k) employee deferral limit is $24,500, and the overall defined contribution limit, which also caps SEP IRA contributions, is $72,000. A SEP IRA can be opened and funded up to your filing deadline, including extensions. A solo 401(k) usually lets you save more at moderate income because you contribute as both employee and employer, but plan setup and deferral election timing rules apply, so speak to your provider in November rather than December 30. Our <a href="/blog/solo-401k-vs-sep-ira">solo 401(k) vs SEP IRA comparison</a> runs the numbers.</p>

<h2>Step 6: Check estimated taxes and safe harbor</h2>
<p>If you do not have enough withheld, the fourth estimated payment for 2026 is due January 15, 2027. To avoid an underpayment penalty you generally need to pay at least 90% of 2026 tax or 100% of 2025 tax (110% if 2025 AGI was over $150,000). The IRS underpayment interest rate was 7% for the quarter starting October 1, 2026, according to the <a href="https://www.irs.gov/newsroom/interest-rates-remain-the-same-for-the-fourth-quarter-of-2026" target="_blank" rel="noopener noreferrer">IRS announcement of fourth-quarter 2026 rates</a>. Our new guide to the <a href="/blog/underpayment-penalty-form-2210">underpayment penalty and Form 2210</a> explains how the penalty is calculated and how to avoid it.</p>

<h2>Step 7: Clean up receivables and write off bad debts</h2>
<p>Go through every open invoice. For each one, decide whether to chase it, settle it or write it off. Accrual-basis businesses that already reported an invoice as income can generally deduct it as a <a href="/blog/bad-debt-write-off">bad debt</a> once it is wholly or partly worthless, with documentation of your collection efforts. Cash-basis businesses never reported unpaid invoices as income, so there is nothing to write off, but cleaning the list still improves your planning.</p>

<h2>Step 8: Contractors, payroll and S corp salary</h2>
<ul>
<li>Collect a Form W-9 from every contractor you paid $2,000 or more in 2026; a missing W-9 is the most common reason 1099s go out late.</li>
<li>S corporation owners should confirm they have taken reasonable salary through payroll before year-end. Owner health insurance premiums must also be included in W-2 wages.</li>
<li>Employers should verify employee addresses and Social Security numbers so Forms W-2 go out correctly by February 1, 2027.</li>
</ul>

<h2>Worked example: a consultant's year-end plan</h2>
<p>Maria is a sole proprietor consultant using cash accounting. These numbers are illustrative.</p>
<table><thead><tr><th>Item</th><th>Before planning</th><th>After planning</th></tr></thead><tbody>
<tr><td>Projected 2026 net profit</td><td>$128,000</td><td>$128,000</td></tr>
<tr><td>Laptop and monitor bought and set up Dec 10 (Section 179)</td><td>$0</td><td>-$3,200</td></tr>
<tr><td>Prepaid 12-month software and insurance</td><td>$0</td><td>-$1,800</td></tr>
<tr><td>Invoice for December work dated Jan 2, 2027</td><td>$0</td><td>-$6,000</td></tr>
<tr><td>Net profit for 2026</td><td>$128,000</td><td>$117,000</td></tr>
<tr><td>SEP IRA contribution (roughly 20% of net earnings after SE tax deduction)</td><td>$0</td><td>About $21,800</td></tr>
</tbody></table>
<p>Moving $11,000 of profit out of 2026 cuts both income tax and self-employment tax. At a combined marginal rate of about 37% (24% federal plus roughly 13% net self-employment tax), that is around $4,000 of tax saved or deferred, before the SEP contribution, which reduces income tax further. The deferred invoice is not a permanent saving: Maria will pay tax on that $6,000 in 2027, so it only helps if her 2027 rate is the same or lower, or if she simply values the deferral.</p>

<h2>Common year-end mistakes to avoid</h2>
<ul>
<li><strong>Buying things you do not need.</strong> A deduction returns only a fraction of what you spend.</li>
<li><strong>Ordering equipment that arrives in January.</strong> The asset must be placed in service in 2026.</li>
<li><strong>Back-dating invoices.</strong> Change when you send an invoice, never the date of an invoice already issued. Number invoices sequentially so dates and numbers tell a consistent story; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
<li><strong>Ignoring state rules.</strong> Some states do not follow federal bonus depreciation or Section 179 limits.</li>
<li><strong>Forgetting the paperwork.</strong> Keep receipts, invoices and bank records together, as described in our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a>.</li>
</ul>

<h2>What to do if you missed something</h2>
<p>Not every opportunity ends on December 31. SEP IRA contributions, HSA contributions and the choice of depreciation method can be made when you file. If you need more time to get the numbers right, an extension gives you until October 15 to file, though not to pay; see our guide to <a href="/blog/form-4868">Form 4868 personal tax extensions</a>. If you discover a missed deduction after filing, you can usually amend within three years.</p>

<p>Clean invoices make every step above easier, from timing December billing to proving income to your accountant. Create and send professional invoices with our free <a href="/invoice-generator">invoice generator</a>: no sign-up needed, and you can download each invoice as a PDF in seconds.</p>
`,
  },
  {
    slug: "charitable-donations-business-deduction",
    title: "Charitable Donations and Your Business: 2026 Deduction Rules",
    description:
      "Charitable deduction 2026 rules for businesses: the new 1% corporate floor, 0.5% itemizer floor, $1,000 non-itemizer deduction, receipts and donating inventory.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "donation-receipt-template",
      "self-employed-tax-deductions",
      "nonprofit-invoice-template",
    ],
    faqs: [
      {
        q: "Can my LLC deduct charitable donations?",
        a: "It depends on how the LLC is taxed. A single-member LLC taxed as a sole proprietorship cannot deduct donations on Schedule C; they pass to your personal return and are deductible only as personal charitable contributions. A multi-member LLC taxed as a partnership reports donations to each member on Schedule K-1. An LLC that elected C corporation status deducts donations on Form 1120, subject to the 1% floor and 10% ceiling from 2026.",
      },
      {
        q: "What is the new $1,000 charitable deduction for non-itemizers?",
        a: "Starting with 2026 returns, individuals who take the standard deduction can deduct up to $1,000 of cash gifts to qualifying public charities, or $2,000 for married couples filing jointly. Gifts to donor-advised funds and to most private foundations do not qualify, and the deduction cannot be carried forward. It is a personal deduction, so it helps sole proprietors and pass-through owners as individuals rather than reducing business profit.",
      },
      {
        q: "Are donations of my time or services deductible?",
        a: "No. You cannot deduct the value of your time or services, even if you would normally invoice the charity at your full rate. You can deduct unreimbursed out-of-pocket costs directly connected to volunteer work, such as materials or supplies, and mileage at the charitable rate of 14 cents per mile. If you want a record of value donated, send the charity an invoice showing the full fee and a 100% discount, but do not claim that discount as a deduction.",
      },
      {
        q: "Is sponsoring a charity event a donation or an advertising expense?",
        a: "It can be either. If you receive meaningful advertising in return, such as your logo on event materials with a link or promotional mention, the payment is usually a deductible business marketing expense on Schedule C or your business return, which avoids the charitable limits. If you get only a simple thank-you acknowledgment, it is a charitable contribution. Keep the sponsorship agreement or invoice showing what you received.",
      },
      {
        q: "What receipt do I need for a business donation?",
        a: "For any single contribution of $250 or more, you need a contemporaneous written acknowledgment from the charity stating the amount of cash or a description of property and whether you received goods or services in return. For cash gifts under $250, a bank record or receipt is enough. Noncash gifts over $500 require Form 8283, and most items over $5,000 need a qualified appraisal.",
      },
      {
        q: "Should my corporation bunch donations into one year?",
        a: "Possibly. Because C corporations can only deduct contributions above 1% of taxable income from 2026, small annual gifts may produce little or no deduction. Combining two or three years of giving into one year can push more of the total above the floor, as long as the total stays under the 10% ceiling. Excess over 10% can be carried forward for five years. Run the numbers with your tax adviser before changing your giving pattern.",
      },
    ],
    content: `
<p>The charitable deduction rules for 2026 changed in ways that matter to business owners: C corporations now lose the deduction on gifts up to 1% of taxable income, individuals who itemize face a 0.5% of AGI floor, and people who take the standard deduction get a new deduction of up to $1,000 ($2,000 joint). How much your business donations actually save depends on whether you run a sole proprietorship, a pass-through entity or a C corporation. This guide covers each case, the receipts you need and a worked example.</p>

<p>This is general information, not tax advice; check your own situation with a tax professional.</p>

<h2>What changed for the charitable deduction in 2026</h2>
<p>The One Big Beautiful Bill Act (OBBBA) rewrote several charitable provisions effective for tax years beginning after December 31, 2025:</p>
<table><thead><tr><th>Taxpayer</th><th>Rule through 2025</th><th>Rule from 2026</th></tr></thead><tbody>
<tr><td>C corporations</td><td>Deduct up to 10% of taxable income</td><td>Deduct only the amount above 1% of taxable income, still capped at 10%</td></tr>
<tr><td>Individuals who itemize</td><td>Deduct gifts subject to AGI limits (60% for cash to public charities)</td><td>Only gifts above 0.5% of AGI count; 60% cash limit made permanent</td></tr>
<tr><td>Top-bracket itemizers</td><td>Deduction worth up to 37 cents per dollar</td><td>Tax benefit capped at 35 cents per dollar</td></tr>
<tr><td>Non-itemizers</td><td>No charitable deduction</td><td>Up to $1,000 single, $2,000 joint, for cash gifts to qualifying public charities</td></tr>
</tbody></table>
<p>Law firm Greenberg Traurig's summary of <a href="https://www.gtlaw.com/en/insights/2025/10/new-limitations-on-charitable-deductions-take-effect-in-2026" target="_blank" rel="noopener noreferrer">the new limitations on charitable deductions</a> is a useful plain-language overview of these changes.</p>

<h2>How business structure affects the charitable deduction in 2026</h2>
<h3>Sole proprietors and single-member LLCs</h3>
<p>A sole proprietor cannot list donations as a business expense on Schedule C. Even if the check comes from your business account, the gift is treated as a personal charitable contribution. If you itemize, it goes on Schedule A subject to the new 0.5% floor. If you take the standard deduction, cash gifts to qualifying charities count toward the new $1,000 deduction. Our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> shows what does belong on the business return.</p>
<h3>Partnerships and multi-member LLCs</h3>
<p>A partnership does not deduct charitable contributions itself. It reports each partner's share on Schedule K-1, and the partners claim it on their personal returns. The same applies to S corporations, which pass donations through to shareholders. Our new <a href="/blog/schedule-k-1">Schedule K-1 guide</a> explains where those amounts appear.</p>
<h3>C corporations</h3>
<p>C corporations deduct contributions on Form 1120. From 2026, the deduction is limited to the amount above 1% of taxable income and cannot exceed 10%. If total gifts exceed the 10% cap, the excess, along with the amount disallowed by the 1% floor, can be carried forward for up to five years. If total gifts stay at or under 10%, the amount below the 1% floor is simply lost.</p>

<h2>Donation vs business expense: where the line falls</h2>
<p>Many payments to charities are not charitable contributions at all; they are ordinary business expenses, which are fully deductible without the floors and caps. The test is what you receive in return.</p>
<table><thead><tr><th>Payment</th><th>Usual treatment</th><th>Why</th></tr></thead><tbody>
<tr><td>Cash gift with nothing in return</td><td>Charitable contribution</td><td>Pure gift</td></tr>
<tr><td>Event sponsorship with logo, ads, booth</td><td>Advertising expense</td><td>You receive promotional value</td></tr>
<tr><td>Ad in a charity program or yearbook</td><td>Advertising expense</td><td>Paid marketing</td></tr>
<tr><td>Gala tickets including dinner</td><td>Contribution only above the value of the dinner</td><td>Quid pro quo</td></tr>
<tr><td>Membership dues to a chamber of commerce</td><td>Business expense (not charitable)</td><td>Chambers are not 501(c)(3) charities</td></tr>
<tr><td>Free services you donate</td><td>Not deductible</td><td>Time and labor are not property</td></tr>
</tbody></table>
<p>If a charity pays you for work at a discount, the discount is not deductible either; you simply report the lower amount you received. Our <a href="/blog/nonprofit-invoice-template">nonprofit invoice template</a> shows how to show a discounted or donated fee clearly on the invoice so both sides have a record.</p>

<h2>Donating inventory and equipment</h2>
<p>Product businesses often give goods instead of cash. The general rule is that a business deducts the lower of its cost basis or fair market value for inventory, and because the cost of the inventory is usually already in cost of goods sold, there may be no extra deduction. C corporations get an enhanced deduction under Section 170(e)(3) for donating inventory used for the care of the ill, the needy or infants, and businesses of all types have an enhanced rule for donated food inventory. Donated equipment is generally deducted at the lower of fair market value or adjusted basis, which may be small if you already depreciated it.</p>

<h2>Records and receipts you need</h2>
<ol>
<li><strong>Under $250 cash:</strong> a bank record, card statement or written receipt from the charity with its name, date and amount.</li>
<li><strong>$250 or more in a single contribution:</strong> a contemporaneous written acknowledgment from the charity, received by the time you file, stating the amount and whether you received anything in return. Our <a href="/blog/donation-receipt-template">donation receipt template</a> shows the required wording.</li>
<li><strong>Noncash gifts over $500:</strong> file Form 8283 with your return.</li>
<li><strong>Noncash gifts over $5,000:</strong> a qualified appraisal is usually required, with some exceptions such as publicly traded securities.</li>
<li><strong>Sponsorships:</strong> keep the sponsorship agreement or the charity's invoice showing the advertising you received.</li>
</ol>
<p>Track these records alongside your other expenses as covered in our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a>.</p>

<h2>Worked example: three owners, the same $5,000 gift</h2>
<p>Each owner gives $5,000 in cash to a local food bank in 2026. Figures are illustrative.</p>
<table><thead><tr><th></th><th>Sole proprietor (itemizes)</th><th>Sole proprietor (standard deduction)</th><th>C corporation</th></tr></thead><tbody>
<tr><td>Relevant income</td><td>AGI $150,000</td><td>AGI $90,000</td><td>Taxable income $300,000</td></tr>
<tr><td>Floor</td><td>0.5% = $750</td><td>None</td><td>1% = $3,000</td></tr>
<tr><td>Deductible amount</td><td>$4,250</td><td>$1,000 (cap)</td><td>$2,000</td></tr>
<tr><td>Marginal rate</td><td>24%</td><td>22%</td><td>21%</td></tr>
<tr><td>Approximate tax saved</td><td>$1,020</td><td>$220</td><td>$420</td></tr>
</tbody></table>
<p>The corporation's result is the surprise. Its $3,000 floor wipes out most of the gift, and because total giving is under the 10% cap, the disallowed amount does not carry forward. If the corporation instead gave $15,000 every third year, the floor would still be $3,000 in that year, $12,000 would be deductible, and the deduction would save about $2,520 in tax, much more than three separate $5,000 gifts would produce.</p>
<p>Now suppose the corporation instead paid the same $5,000 to sponsor the food bank's 5K run, receiving its logo on race shirts and banners. That is likely an advertising expense, fully deductible, saving $1,050 at 21%.</p>

<h2>Planning ideas for 2026 and beyond</h2>
<ul>
<li><strong>Bunching.</strong> Itemizers and corporations can combine several years of giving into one year to clear the floors, possibly through a donor-advised fund for individuals.</li>
<li><strong>Consider sponsorships.</strong> If you want visibility, structure support as a genuine sponsorship with defined promotional benefits.</li>
<li><strong>Give appreciated stock personally.</strong> Owners who itemize can often deduct fair market value of long-held stock and avoid capital gains tax.</li>
<li><strong>Time year-end gifts.</strong> A check mailed by December 31 or a card charge made by December 31 counts in 2026. Coordinate this with the rest of your <a href="/blog/year-end-tax-planning-small-business">year-end tax planning checklist</a>.</li>
<li><strong>Do not let tax drive the gift.</strong> Even the best case saves only part of what you give.</li>
</ul>

<h2>How to record business donations in your books</h2>
<p>Even when a donation is not a business deduction, it still leaves the business bank account, so it needs a clean entry. How you record it depends on your structure:</p>
<ul>
<li><strong>Sole proprietors and single-member LLCs:</strong> record the gift as an owner draw, not as an expense. It then flows to your personal return rather than reducing Schedule C profit.</li>
<li><strong>Partnerships and S corporations:</strong> record it in a separate charitable contributions account so your preparer can report it on the K-1s as a separately stated item.</li>
<li><strong>C corporations:</strong> record it in a charitable contributions account and track any carryforward from prior years.</li>
<li><strong>Sponsorships:</strong> record them under advertising or marketing, with the sponsorship agreement attached to the transaction.</li>
</ul>
<p>Attach the charity's acknowledgment letter or receipt to the bookkeeping entry, or save it in the same folder as your year-end records. Keeping donations out of your general expense accounts prevents the most common error: a preparer accidentally deducting a personal gift as a business expense, which is exactly the type of item that draws questions in an exam. Our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> covers how to set up these accounts.</p>

<h2>State tax considerations</h2>
<p>States do not all follow the federal rules. Some states have their own charitable credits, for example for gifts to specific scholarship or rural hospital programs, and some do not follow the new federal floors for corporations. Business owners in high-tax states should also coordinate giving with any pass-through entity tax election, because entity-level state tax payments and charitable deductions interact differently with the federal SALT cap. If you give significant amounts, ask your preparer to model both federal and state results before December 31.</p>

<h2>Common mistakes</h2>
<ul>
<li>Deducting donations on Schedule C, which the IRS disallows.</li>
<li>Claiming the value of free services, pro bono hours or discounts.</li>
<li>Missing the written acknowledgment for gifts of $250 or more; without it, the deduction can be denied entirely.</li>
<li>Assuming the new $1,000 non-itemizer deduction covers gifts to donor-advised funds; it does not.</li>
<li>Giving to organizations that are not qualified charities, such as political groups or individuals. Check the IRS Tax Exempt Organization Search before giving.</li>
</ul>

<h2>Showing donated work on an invoice</h2>
<p>When you donate services, send the charity an invoice anyway. List the work at your normal rate, apply a 100% discount line labeled as an in-kind donation, and show a balance of zero. It documents the gift for the charity's records and reminds them what the work is worth. Our guide to <a href="/blog/discount-on-invoice">showing a discount on an invoice</a> covers the layout. You still cannot deduct the discount, but the record is useful if the relationship turns into paid work.</p>

<p>Whether you bill a charity at full rate, a discount or zero, a clear invoice keeps everyone's records straight. Make one with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add your discount line, and download the invoice as a PDF.</p>
`,
  },
  {
    slug: "black-friday-ideas-service-business",
    title: "Black Friday Promotions for Service Businesses (2026)",
    description:
      "Black Friday small business ideas for service providers: 12 promotions that protect margins, 2026 dates, pricing math, gift cards, and how to invoice deals.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "early-payment-discount",
      "discount-on-invoice",
      "gift-certificate-template",
    ],
    faqs: [
      {
        q: "When is Black Friday 2026?",
        a: "Black Friday 2026 is Friday, November 27, the day after Thanksgiving on November 26. Small Business Saturday follows on November 28, Cyber Monday is November 30, and Giving Tuesday is December 1. Many businesses now start promotions in the week before Thanksgiving, so announcing offers to your email list by around November 20 gives clients time to plan and budget for the purchase.",
      },
      {
        q: "Should a service business run Black Friday deals at all?",
        a: "Only if a promotion fits your capacity and goals. Service businesses sell time, so a deep discount can fill your calendar with low-margin work. Deals make sense when you have predictable slow periods in January and February, want to sell prepaid packages that lock in revenue, or have an add-on service that costs little to deliver. If you are already fully booked, a value-added offer or a waitlist may be better than a discount.",
      },
      {
        q: "Do gift cards for services expire?",
        a: "Under the federal Credit CARD Act rules, most gift cards cannot expire within five years of the date they were issued or last loaded, and many states give more protection, with some banning expiration entirely. Paper-only gift certificates can be treated differently. Check your state's rules before printing an expiration date, and remember that unredeemed balances may eventually be subject to state unclaimed property laws.",
      },
      {
        q: "How do I show a Black Friday discount on an invoice?",
        a: "List the service at its regular price, then add a separate discount line naming the promotion, such as Black Friday 2026 package, minus 15%. Calculate sales tax on the discounted amount if your service is taxable. Showing the full price and the discount separately reminds the client of the normal rate, which makes it easier to return to full price later, and gives you a clean record of promotional revenue.",
      },
      {
        q: "Is it legal to advertise a sale price if I raised the regular price first?",
        a: "No. The Federal Trade Commission's guides against deceptive pricing say a former price used in a comparison must be the actual price at which the item was openly offered for a reasonably substantial period in the recent past. Raising a price shortly before a sale to make a discount look bigger is deceptive, and many states have similar rules. Compare against prices you genuinely charged.",
      },
      {
        q: "How should I account for prepaid packages sold on Black Friday?",
        a: "Cash-basis businesses generally report prepaid package sales as income when received, so a late-November promotion can increase this year's taxable income. Accrual-basis businesses may be able to defer some advance payments under IRS rules. Either way, track how many sessions or hours each client has left, and send an invoice or receipt for the prepayment that states what it covers and any usage deadline allowed under your state's law.",
      },
    ],
    content: `
<p>The best Black Friday promotions for a service business do not discount your hourly rate; they sell prepaid packages, bundles, gift cards and add-ons that bring cash in during November and fill quiet weeks in January. Black Friday 2026 falls on November 27, with Small Business Saturday on November 28 and Cyber Monday on November 30, so the planning window is now. This guide gives 12 promotion ideas, the math to check each one, and how to invoice the deals cleanly.</p>

<h2>Black Friday small business calendar for 2026</h2>
<table><thead><tr><th>Date</th><th>Event</th><th>What to do</th></tr></thead><tbody>
<tr><td>Nov 3-14</td><td>Planning</td><td>Pick one or two offers, set limits, build the offer page or email</td></tr>
<tr><td>Nov 17-20</td><td>Early access</td><td>Announce to past clients and email list first</td></tr>
<tr><td>Nov 26</td><td>Thanksgiving</td><td>Schedule posts; keep the day off</td></tr>
<tr><td>Nov 27</td><td>Black Friday</td><td>Public launch, social posts, reminder email</td></tr>
<tr><td>Nov 28</td><td>Small Business Saturday</td><td>Local and community angle; see our <a href="/blog/small-business-saturday">Small Business Saturday ideas</a></td></tr>
<tr><td>Nov 30</td><td>Cyber Monday</td><td>Last-chance email for online bookings</td></tr>
<tr><td>Dec 1</td><td>Giving Tuesday</td><td>Optional charity tie-in</td></tr>
<tr><td>Dec 1-24</td><td>Gift season</td><td>Keep gift cards available; note shipping dates for physical cards</td></tr>
</tbody></table>
<p>Small Business Saturday is still significant for local firms: surveys commissioned by American Express, which runs the <a href="https://www.americanexpress.com/en-us/benefits/shop-small/" target="_blank" rel="noopener noreferrer">Shop Small program</a>, have estimated consumer-reported spending at independent businesses on that day at around $22 billion for 2024, with lower estimates reported for 2025. Treat these as rough survey figures rather than exact sales data.</p>

<h2>Why service businesses need a different Black Friday playbook</h2>
<p>A retailer discounting a product still has inventory to sell. A service business sells hours, and an hour sold at 30% off is an hour you cannot sell at full price. Three principles keep promotions profitable:</p>
<ol>
<li><strong>Sell future capacity, not current capacity.</strong> Promote services delivered in January to March, when demand is usually lower.</li>
<li><strong>Add value instead of cutting price.</strong> A free add-on that costs you 20 minutes is cheaper than a 20% discount on a 10-hour project.</li>
<li><strong>Limit the offer.</strong> Cap the number of packages or set a firm end date so the deal stays special.</li>
</ol>

<h2>12 Black Friday promotion ideas for service businesses</h2>
<h3>Packages and prepayment</h3>
<ul>
<li><strong>Prepaid session bundles.</strong> Buy five sessions, pay for four, used by June 30 (where state law allows a usage deadline). Works for coaches, trainers, tutors, therapists and salons.</li>
<li><strong>Annual maintenance plans.</strong> Cleaners, landscapers, HVAC and IT support can sell 12 months of service at a modest discount for upfront payment.</li>
<li><strong>Retainer upgrade.</strong> Offer existing retainer clients a bonus hour per month if they renew for 2027 before December 1. Our guide to <a href="/blog/retainer-invoice">retainer invoices</a> covers billing.</li>
</ul>
<h3>Value adds</h3>
<ul>
<li><strong>Free add-on with booking.</strong> A web designer adds a free speed audit; a photographer adds five extra edited images.</li>
<li><strong>Priority scheduling.</strong> Clients who book now get first choice of January dates.</li>
<li><strong>Bonus deliverable.</strong> A bookkeeper includes a free year-end review call with any new monthly plan.</li>
</ul>
<h3>Gift-focused offers</h3>
<ul>
<li><strong>Gift cards with a bonus.</strong> Buy a $100 gift card, get a $20 bonus card for yourself, valid January to March. Our <a href="/blog/gift-certificate-template">gift certificate template</a> helps you issue them.</li>
<li><strong>Corporate gift packages.</strong> Offer local businesses bulk gift cards for their staff or clients.</li>
</ul>
<h3>Relationship offers</h3>
<ul>
<li><strong>Past-client comeback offer.</strong> A personal email to clients you have not worked with in a year, with a modest incentive.</li>
<li><strong>Referral double reward.</strong> Both the referrer and new client get a credit during November and December.</li>
<li><strong>Pay-in-full discount.</strong> Clients who book a 2027 project and pay upfront get a small discount, similar to an <a href="/blog/early-payment-discount">early payment discount</a>.</li>
<li><strong>Giving Tuesday match.</strong> Donate a set amount per booking to a local charity, which builds goodwill without discounting.</li>
</ul>

<h2>Check the math before you launch</h2>
<p>Run every offer through a simple test: what is your profit per hour at full price, and what is it under the promotion? If the promo rate falls below your minimum acceptable hourly profit, cap volume or change the offer.</p>
<table><thead><tr><th>Offer type</th><th>Revenue impact</th><th>Cost to you</th><th>Best when</th></tr></thead><tbody>
<tr><td>Percent discount</td><td>Lowers revenue on every sale</td><td>Margin</td><td>Clearing specific slow dates</td></tr>
<tr><td>Prepaid bundle</td><td>Cash now; lower effective rate</td><td>One free session per bundle</td><td>Repeat services</td></tr>
<tr><td>Value add</td><td>Full price</td><td>Time for the extra deliverable</td><td>Add-on costs little to deliver</td></tr>
<tr><td>Bonus gift card</td><td>Full price now</td><td>Bonus card redeemed later (some never are)</td><td>Gift-heavy services</td></tr>
<tr><td>Annual plan</td><td>Cash now; small discount</td><td>Commitment to a year of service</td><td>Recurring services</td></tr>
</tbody></table>

<h2>Worked example: a personal trainer's bundle</h2>
<p>Sam charges $90 per one-hour session. His costs per session (gym fee, equipment, booking software) are about $15, so profit is $75 per hour. Figures are illustrative.</p>
<ul>
<li><strong>Option A, 25% off all sessions in December:</strong> price $67.50, profit $52.50 per hour. If December is already 80% booked, most of those sessions would have sold at full price anyway. Sam loses $22.50 on each.</li>
<li><strong>Option B, 10 sessions for $750 (normally $900), used January to April, limit 15 bundles:</strong> effective price $75 per session, profit $60 per hour. Sam collects up to $11,250 in late November and fills his slow months.</li>
</ul>
<p>Option B earns $7.50 more per hour than option A, brings cash in before the holidays, and protects December's full-price bookings. If 15 bundles sell, Sam books 150 sessions in his slowest quarter. He should keep in mind that, as a cash-basis sole proprietor, the $11,250 is likely 2026 income for tax purposes even though the work happens in 2027, which belongs on his <a href="/blog/year-end-tax-planning-small-business">year-end tax planning checklist</a>.</p>

<h2>How to launch your Black Friday promotion step by step</h2>
<ol>
<li><strong>Choose one main offer</strong> and, optionally, one gift card offer. Too many deals confuse buyers.</li>
<li><strong>Write the terms</strong>: what is included, quantity limit, end date, when services must be used, refund and transfer policy.</li>
<li><strong>Prepare the paperwork</strong>: a package invoice template, a gift card or certificate, and a confirmation email. A matching <a href="/blog/payment-confirmation-email">payment confirmation email</a> reduces follow-up questions.</li>
<li><strong>Tell past clients first.</strong> They convert best and appreciate early access.</li>
<li><strong>Post publicly</strong> on Black Friday with the deadline clearly stated.</li>
<li><strong>Send a last-chance reminder</strong> on Cyber Monday.</li>
<li><strong>Track redemptions</strong> in a simple spreadsheet so each client's remaining sessions are clear.</li>
</ol>

<h2>Invoicing Black Friday deals correctly</h2>
<p>Good paperwork prevents disputes in March when a client asks how many sessions they have left. On each invoice or receipt:</p>
<ul>
<li>List the service at the regular price and the promotion as a separate line. Our guide on <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a> has layouts.</li>
<li>Name the promotion and the date range so it cannot be confused with your standard rates.</li>
<li>State what is prepaid: number of sessions, hours or months, and the usage period.</li>
<li>Apply sales tax correctly. In states that tax your service, tax generally applies to the discounted price. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the numbers, and our guide to <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> shows which states tax which services.</li>
<li>For gift cards, record the sale as a liability until redeemed, and invoice the redemption when the service is delivered.</li>
</ul>

<h2>Legal and ethical guardrails</h2>
<ul>
<li><strong>Honest reference prices.</strong> The FTC's guides against deceptive pricing require that a compared former price be one you actually charged for a reasonably substantial period. Do not inflate prices in October to show a bigger November discount.</li>
<li><strong>Gift card expiration.</strong> Federal rules generally prohibit expiration within five years of issue or last load, and some states ban expiration entirely.</li>
<li><strong>Clear refund terms.</strong> State whether unused prepaid sessions are refundable and on what terms, and follow your state's consumer rules.</li>
<li><strong>Licensed professions.</strong> Some fields, such as healthcare, legal and financial services, have advertising and fee-splitting rules that restrict certain promotions. Check with your licensing body.</li>
</ul>

<h2>Measuring whether the promotion worked</h2>
<p>A promotion is only a success if it made money you would not otherwise have made. In mid-January, review four numbers:</p>
<table><thead><tr><th>Metric</th><th>How to calculate</th><th>Good sign</th></tr></thead><tbody>
<tr><td>Promotion revenue</td><td>Total paid for packages, bundles and gift cards</td><td>Meets the target you set in November</td></tr>
<tr><td>New vs returning buyers</td><td>Share of buyers who had never paid you before</td><td>At least a quarter new, if growth was the goal</td></tr>
<tr><td>Effective hourly rate</td><td>Promotion revenue divided by hours needed to deliver</td><td>Above your minimum acceptable rate</td></tr>
<tr><td>Redemption pace</td><td>Sessions or hours used by end of February</td><td>Steady usage, not a last-minute rush</td></tr>
</tbody></table>
<p>Your invoices make this review quick if each promotional sale used the same discount line label, because you can filter by it. Compare the result with the same weeks last year. If most buyers were existing clients who would have booked anyway, next year try a value-add offer instead of a discount. If many buyers were new, follow up personally in January: a new client who has a good first session is the real prize of a Black Friday promotion, and their lifetime value usually dwarfs the discount.</p>
<p>Finally, record what you learned while it is fresh: which channel drove sales (email, social, in-person), which offer sold, and whether capacity was strained. That one-page note is the starting point for next November's plan, and it helps you decide whether a promotion belongs in your <a href="/blog/cash-flow-forecast">cash flow forecast</a> for the slow months.</p>

<h2>Common mistakes</h2>
<ul>
<li>Discounting fully booked dates instead of slow ones.</li>
<li>No quantity limit, so 60 people buy a bundle you can deliver to only 20.</li>
<li>Vague terms that lead to arguments about expiry and transfers.</li>
<li>Forgetting the deal after the weekend: follow up with buyers in January to schedule their sessions, which also turns one-time buyers into regular clients.</li>
<li>Ignoring the end of the funnel. After the season, a sincere <a href="/blog/thank-you-letter-to-clients">thank-you letter to clients</a> keeps the relationship warm.</li>
</ul>

<p>Every package, gift card and discounted booking should end in a clear invoice. Build yours with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add your promotion as a discount line, and download a professional PDF in seconds.</p>
`,
  },
  {
    slug: "thank-you-letter-to-clients",
    title: "Thank-You Letter to Clients: Holiday and Year-End Templates",
    description:
      "Thank you letter to clients templates for the holidays and year-end: 10 examples for new, long-term and paying clients, plus what to include and when to send.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "thank-you-for-your-payment-message",
      "payment-confirmation-email",
      "client-onboarding-checklist",
    ],
    faqs: [
      {
        q: "When should I send a year-end thank-you letter to clients?",
        a: "Aim for the first two weeks of December. That is early enough to stand out before inboxes fill with holiday promotions and before many clients go on vacation. If you send physical letters or cards, USPS recommends mailing First-Class items by December 17, 2026 for delivery before Christmas in the contiguous United States. A New Year letter sent in the first week of January also works well and is less crowded.",
      },
      {
        q: "Should a thank-you letter to clients mention business or sales?",
        a: "Keep the main message about gratitude. A thank-you letter that turns into a sales pitch feels transactional and undoes the goodwill. It is fine to mention practical information briefly at the end, such as holiday office hours or the date your new rates take effect, but put offers and promotions in a separate email. The most effective letters mention a specific project or moment you shared with the client.",
      },
      {
        q: "Is it okay to send a thank-you letter by email?",
        a: "Yes. Email is the norm for most client relationships and lets you send letters personally addressed to each client. For your top clients, a handwritten note or printed letter on your letterhead makes a stronger impression because so few businesses still send them. A practical approach is email for everyone, plus a handwritten card for your five to ten most important clients.",
      },
      {
        q: "Can I include a gift with a client thank-you letter?",
        a: "You can, but check the client's gift policy first, since many companies and government agencies limit what employees can accept. For your own taxes, the IRS limits the deduction for business gifts to $25 per recipient per year, not counting incidental costs like packaging and shipping. A small, thoughtful gift or a donation made in the client's name often works better than an expensive item.",
      },
      {
        q: "How long should a thank-you letter to a client be?",
        a: "Usually three short paragraphs, about 100 to 200 words. Open with the thank-you, add a specific detail about your work together or the results achieved, and close with a warm look ahead. Longer letters tend to drift into self-promotion. A handwritten card can be even shorter: two or three sentences that clearly could only have been written to that client.",
      },
      {
        q: "Should I thank clients who paid late or were difficult?",
        a: "Generally yes, if you want to keep working with them. A sincere, brief note acknowledging the year's work is appropriate even if the relationship had friction. Do not use the thank-you letter to raise late payments or complaints; deal with outstanding invoices in a separate, professional message. If you have decided to end the relationship, a short, polite closing letter is better than a holiday thank-you.",
      },
    ],
    content: `
<p>A good thank-you letter to clients is short, specific and sent without an agenda: it names something real you did together this year, says plainly that you value the relationship, and looks ahead to the next year. Sent in early December or the first week of January, it is one of the cheapest ways to keep clients loyal and generate referrals. Below are 10 templates for different clients and occasions, plus guidance on timing, format and gifts.</p>

<h2>Why year-end thank-you letters to clients work</h2>
<p>Most of what clients receive from vendors in December is promotional. A letter that asks for nothing is memorable by contrast. For freelancers and small firms, the practical benefits are concrete:</p>
<ul>
<li><strong>Retention.</strong> Clients who feel appreciated are less likely to shop around when budgets reset in January.</li>
<li><strong>Referrals.</strong> A warm note reminds a happy client to mention you to peers.</li>
<li><strong>Smoother collections.</strong> Clients who like working with you tend to pay faster. Gratitude does not replace clear payment terms, but it helps.</li>
<li><strong>Context for change.</strong> If you are raising rates in 2027, a relationship-focused letter in December makes the separate rate notice land better. See our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a>.</li>
</ul>

<h2>What to include in a client thank-you letter</h2>
<table><thead><tr><th>Element</th><th>Example</th><th>Avoid</th></tr></thead><tbody>
<tr><td>Personal greeting</td><td>Hi Priya,</td><td>Dear Valued Customer</td></tr>
<tr><td>The thank-you</td><td>Thank you for trusting us with your rebrand this year.</td><td>Generic praise with no detail</td></tr>
<tr><td>A specific detail</td><td>Seeing the new site go live two days before your launch was a highlight.</td><td>Listing every service you provided</td></tr>
<tr><td>The relationship</td><td>It is a pleasure working with a team that answers questions so quickly.</td><td>Flattery that sounds scripted</td></tr>
<tr><td>Looking ahead</td><td>I am looking forward to the spring campaign.</td><td>A hard sales pitch</td></tr>
<tr><td>Sign-off</td><td>Warm wishes, Dan</td><td>Company name only</td></tr>
</tbody></table>

<h2>Thank-you letter to clients templates</h2>
<p>Replace the bracketed parts with real details. The more specific the detail, the better the letter.</p>

<h3>1. Year-end thank-you to a long-term client</h3>
<p><em>Subject: Thank you for another great year</em></p>
<p>Hi [Name],</p>
<p>As the year wraps up, I wanted to say thank you. This is our [third] year working together, and [project or result, e.g. moving your bookkeeping to monthly closes] was one of the most satisfying pieces of work I did in 2026.</p>
<p>I appreciate the trust you place in me and how easy you make the work. I am looking forward to [next project or goal] in the new year.</p>
<p>Wishing you and your team a restful holiday season,<br>[Your name]</p>

<h3>2. Thank-you to a new client after the first year</h3>
<p>Hi [Name],</p>
<p>A year ago we were just getting started on [project]. Thank you for choosing to work with me and for being so open with feedback along the way. [Specific moment, e.g. The launch-day call when the first orders came in] is something I still mention to other clients.</p>
<p>Here is to building on it in 2027. Happy holidays,<br>[Your name]</p>

<h3>3. Holiday thank-you to all clients (short, for email)</h3>
<p>Hi [First name],</p>
<p>Thank you for being part of [Business name] this year. Every project, question and referral helped this business grow, and I do not take that for granted. Our office will be closed from [date] to [date]; we will be back on [date].</p>
<p>Wishing you a happy and healthy holiday season,<br>[Your name]</p>

<h3>4. Thank-you to a client who referred you</h3>
<p>Hi [Name],</p>
<p>I wanted to thank you personally for introducing me to [referred client]. Referrals are the best compliment a client can give, and it means a lot that you trusted me with someone in your network. I will take good care of them.</p>
<p>With thanks,<br>[Your name]</p>

<h3>5. Thank-you after completing a major project</h3>
<p>Hi [Name],</p>
<p>Now that [project] has wrapped, thank you for a great collaboration. [Result, e.g. Cutting your checkout time in half] was a team effort, and your quick decisions kept us on schedule. I have attached the final files and the closing invoice for your records.</p>
<p>I hope we can work together again soon,<br>[Your name]</p>

<h3>6. Thank-you to a client who always pays on time</h3>
<p>Hi [Name],</p>
<p>A quick note of thanks for a great year. Beyond the work itself, I want to say how much I appreciate your team's prompt payments. For a small business, reliable clients like you make planning possible. It is one reason I always look forward to your projects.</p>
<p>Happy holidays,<br>[Your name]</p>
<p>For individual payments, a short note like those in our <a href="/blog/thank-you-for-your-payment-message">thank-you for your payment messages</a> is a lighter touch.</p>

<h3>7. New Year thank-you letter</h3>
<p><em>Subject: Thank you, and happy new year</em></p>
<p>Hi [Name],</p>
<p>Before 2027 gets busy, I wanted to thank you for your support last year. [Specific highlight]. I am excited about [plan for the year] and grateful to have clients like you along for it.</p>
<p>All the best for the year ahead,<br>[Your name]</p>

<h3>8. Thank-you to a client you will no longer work with</h3>
<p>Hi [Name],</p>
<p>As [project or contract] comes to a close, thank you for the opportunity to work together. I learned a lot from [specific aspect], and I wish you every success with [their next step]. If I can ever help with a referral to another specialist, just let me know.</p>
<p>Best wishes,<br>[Your name]</p>

<h3>9. Thank-you from a team or agency</h3>
<p>Dear [Name] and the [Company] team,</p>
<p>On behalf of everyone at [Agency], thank you for a fantastic 2026. Working on [campaign or project] together was a highlight of our year, and the [result] speaks for itself. We are grateful for your trust and look forward to what comes next.</p>
<p>Warm regards,<br>[Name], on behalf of the [Agency] team</p>

<h3>10. Handwritten card version (three sentences)</h3>
<p>[Name], thank you for a wonderful year working on [project]. [One specific detail]. Wishing you a restful holiday and looking forward to 2027. [Signature]</p>
<p>For more card-length wording, see our companion collection of <a href="/blog/holiday-card-messages-for-clients">holiday card messages for clients</a>.</p>

<h3>11. Thank-you to a client who sent you a holiday gift</h3>
<p>Hi [Name],</p>
<p>Thank you so much for the [gift]. It was a lovely surprise, and it has already [how you used or enjoyed it]. More than the gift itself, I appreciate the thought behind it and the chance to work with you this year.</p>
<p>Warmly,<br>[Your name]</p>

<h2>How to personalize a template in five minutes</h2>
<p>The difference between a forgettable letter and one a client keeps is usually a single sentence. Before you write, spend a minute looking through the client's file and pick one of these:</p>
<ul>
<li><strong>A result:</strong> a number that improved, a launch that went live, a deadline you hit together.</li>
<li><strong>A moment:</strong> a call that solved a problem, a compliment they gave your work, a joke from a meeting.</li>
<li><strong>A milestone:</strong> the first project, the tenth invoice, an anniversary of working together.</li>
<li><strong>Something about them:</strong> a new office, a new hire, a personal event they mentioned, if appropriate.</li>
</ul>
<p>Your invoices are a surprisingly good memory aid. Line items show exactly what you delivered and when, which makes it easy to reference the right project. Keep the personal line in the first or second paragraph, where it will be read, and keep the rest short.</p>

<h2>When and how to send your thank-you letters</h2>
<ol>
<li><strong>Make a list</strong> of every client you billed this year. Your invoice history is the fastest source; filter by total billed to find your top ten.</li>
<li><strong>Segment</strong> into top clients (handwritten or printed letter plus email), regular clients (personal email) and occasional clients (short group-style email with a personal first line).</li>
<li><strong>Write one detail per client</strong> before drafting. If you cannot think of one, check your project notes or invoices for the work you did.</li>
<li><strong>Send between December 1 and 15</strong>, or the first week of January. For physical letters, USPS recommends mailing First-Class items by December 17 for delivery before Christmas in the lower 48 states, according to its <a href="https://www.usps.com/holiday/holiday-shipping-dates.htm?os=fdF" target="_blank" rel="noopener noreferrer">2026 holiday shipping dates</a>.</li>
<li><strong>Do not combine with an invoice.</strong> Send year-end invoices separately with a clear subject line, as in our guide to <a href="/blog/invoice-email-subject-lines">invoice email subject lines</a>.</li>
</ol>

<h2>Worked example: planning thank-you letters for 40 clients</h2>
<p>An independent marketing consultant billed 40 clients in 2026. Figures are illustrative.</p>
<table><thead><tr><th>Group</th><th>Clients</th><th>Format</th><th>Time</th><th>Cost</th></tr></thead><tbody>
<tr><td>Top clients (60% of revenue)</td><td>8</td><td>Handwritten card, small gift, personal email</td><td>2 hours</td><td>8 x $24 gift + $3 card and postage = $216</td></tr>
<tr><td>Regular clients</td><td>17</td><td>Personal email with one specific detail</td><td>2.5 hours</td><td>$0</td></tr>
<tr><td>Occasional clients</td><td>15</td><td>Short email with personalized first line</td><td>1 hour</td><td>$0</td></tr>
</tbody></table>
<p>Total: about 5.5 hours and $216. Keeping each gift at $24 (with card and postage counted as incidental costs) keeps the gifts within the $25 per-recipient business gift deduction limit described in <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS Publication 463</a>. If just one top client renews a $6,000 retainer that might otherwise have gone to review, the effort pays for itself many times over.</p>

<h2>Common mistakes in client thank-you letters</h2>
<ul>
<li><strong>Using a template unchanged.</strong> Clients recognize mail-merge letters; one specific sentence fixes this.</li>
<li><strong>Adding a sales pitch.</strong> Keep offers in a separate email.</li>
<li><strong>Getting names or details wrong.</strong> Double-check spelling and company names.</li>
<li><strong>Sending too late.</strong> A letter arriving December 28 gets lost; January is better than late December.</li>
<li><strong>Mentioning overdue invoices.</strong> Handle collections separately; see our guide to <a href="/blog/client-not-paying-invoice">what to do when a client is not paying</a>.</li>
</ul>

<h2>Beyond the letter: turning gratitude into a stronger relationship</h2>
<p>A thank-you letter works best as part of a consistent client experience: a smooth start (see our <a href="/blog/client-onboarding-checklist">client onboarding checklist</a>), clear invoices, prompt responses and an occasional check-in. If a client replies warmly, that is a natural moment to ask whether they would be willing to share a testimonial, using a separate message like those in our <a href="/blog/testimonial-request-email">testimonial request email templates</a>.</p>

<p>Thank-you letters build the relationship; clear, professional invoices keep it running smoothly. Create yours with our free <a href="/invoice-generator">invoice generator</a>: no sign-up required, and you can download each invoice as a polished PDF.</p>
`,
  },
  {
    slug: "holiday-card-messages-for-clients",
    title: "Holiday Card Messages for Clients and Customers (60+ Examples)",
    description:
      "Business holiday card messages for clients and customers: 60+ examples for formal, warm, inclusive and New Year cards, plus etiquette, timing and gift rules.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "thank-you-for-your-payment-message",
      "invoice-email-subject-lines",
      "letterhead-template",
    ],
    faqs: [
      {
        q: "What should I write in a business holiday card?",
        a: "Write a short greeting, a sincere thank-you for the client's business or partnership, and a warm wish for the season or the new year. Two or three sentences are enough. Add one personal line for important clients, such as a reference to a project you completed together. Sign by hand if possible. Avoid sales messages, discounts or reminders about invoices; the card should feel like a gesture, not marketing.",
      },
      {
        q: "Is it okay to say Merry Christmas in a business card?",
        a: "If you know the recipient celebrates Christmas, Merry Christmas is fine and warm. When sending to a broad list of clients whose traditions you do not know, inclusive wording such as Happy Holidays, Season's Greetings or Warm wishes for the new year is the safer professional choice. New Year cards are a good option because they avoid religious assumptions and arrive when inboxes are quieter.",
      },
      {
        q: "When should business holiday cards be sent?",
        a: "Mail them in the first two weeks of December so they arrive before offices close. For 2026, USPS recommends sending First-Class Mail by December 17 for delivery before Christmas in the contiguous United States, but earlier is better for business recipients who may leave for vacation. E-cards can go out until about December 20. New Year cards should arrive in the first week of January.",
      },
      {
        q: "Should I send printed cards or e-cards to clients?",
        a: "Printed cards make a stronger impression because fewer businesses send them, and a handwritten signature shows effort. E-cards are cheaper, faster and better for large lists or clients who work remotely. Many small businesses do both: printed, personally signed cards for their top clients and an e-card or personal email for everyone else. Whatever you choose, personalize the greeting with the recipient's name.",
      },
      {
        q: "Who should sign a company holiday card?",
        a: "For a small business, the owner or the person who works most closely with the client should sign. A card signed by several team members who actually know the client feels personal. Avoid printed signatures only; at least add a handwritten line or initials. For large lists, you can print the main message and add a handwritten first name and one short personal sentence.",
      },
      {
        q: "Are holiday cards and gifts to clients tax deductible?",
        a: "Holiday cards sent to clients are usually deductible as an advertising or promotional expense. Gifts are different: the IRS limits the deduction for business gifts to $25 per recipient per year. Incidental costs such as engraving, packaging and mailing generally do not count toward that limit. Keep receipts and a list of who received what, since the IRS asks for the business purpose and recipient for gifts.",
      },
    ],
    content: `
<p>The best business holiday card messages are short: a greeting, a genuine thank-you for the client's business, and a warm wish for the season or the year ahead, ideally with one personal line for your most important clients. Below are more than 60 ready-to-use messages for clients and customers, grouped by tone, along with etiquette, timing for 2026 and how cards fit with gifts and taxes.</p>

<h2>How to write business holiday card messages</h2>
<p>A simple formula works for almost every card:</p>
<ol>
<li><strong>Greeting:</strong> Dear Priya, or Hi team at Brightline.</li>
<li><strong>Thank-you:</strong> Thank you for your business and trust this year.</li>
<li><strong>Personal line (optional):</strong> It was a joy to see the new store open in June.</li>
<li><strong>Wish:</strong> Wishing you a restful holiday season and a successful new year.</li>
<li><strong>Sign-off:</strong> Warm regards, Dan and the team at Northside Print.</li>
</ol>
<table><thead><tr><th>Do</th><th>Avoid</th></tr></thead><tbody>
<tr><td>Use the client's name</td><td>Dear Valued Customer</td></tr>
<tr><td>Keep it to 2-4 sentences</td><td>Long letters about your company's year</td></tr>
<tr><td>Sign by hand</td><td>Printed signature only</td></tr>
<tr><td>Use inclusive wording for broad lists</td><td>Assuming everyone celebrates the same holiday</td></tr>
<tr><td>Mention a specific project for key clients</td><td>Discount codes, sales offers or invoice reminders</td></tr>
</tbody></table>

<h2>Formal business holiday card messages</h2>
<p>Suitable for corporate clients, professional services, legal, financial and government-related work.</p>
<ul>
<li>With sincere appreciation for your business and best wishes for a peaceful holiday season.</li>
<li>Season's greetings and warm wishes for a prosperous new year.</li>
<li>Thank you for your continued confidence in our firm. We wish you a joyful holiday season.</li>
<li>Wishing you and your organization continued success in the year ahead.</li>
<li>It has been a privilege to serve you this year. Best wishes for the holidays and the new year.</li>
<li>With gratitude for our partnership and warm wishes for the season.</li>
<li>May the coming year bring you health, happiness and continued success.</li>
<li>Thank you for the trust you placed in us this year. We look forward to working with you in 2027.</li>
<li>Our best wishes to you and your colleagues for a pleasant holiday season.</li>
<li>Warm regards for the holiday season from all of us at [Company].</li>
</ul>

<h2>Warm and personal holiday messages for clients</h2>
<p>For clients you know well, freelancers and small service businesses.</p>
<ul>
<li>Thank you for making this year so rewarding. Working with you is a highlight of what I do.</li>
<li>From our team to yours: thank you for a fantastic year. Enjoy every moment of the holidays.</li>
<li>I am so grateful for clients like you. Wishing you a cozy, happy holiday season.</li>
<li>Thank you for the laughs, the trust and the great projects. Here is to an even better 2027.</li>
<li>Your support means more than you know. Happy holidays to you and your family.</li>
<li>It was a pleasure watching [project] come to life this year. Thank you, and happy holidays.</li>
<li>Wishing you time to rest and recharge. Thank you for everything this year.</li>
<li>Thank you for being such a wonderful client. I hope your holidays are full of good things.</li>
<li>Sending warm wishes and a big thank-you for a great year together.</li>
<li>Few things make a small business owner happier than clients like you. Happy holidays.</li>
</ul>

<h2>Inclusive and non-religious holiday card messages</h2>
<ul>
<li>Happy holidays and best wishes for the new year.</li>
<li>Warm wishes for a peaceful season and a bright new year.</li>
<li>Season's greetings and thank you for a wonderful year.</li>
<li>Wishing you joy, rest and good company this holiday season.</li>
<li>May your holidays be bright and your new year successful.</li>
<li>Thinking of you this season with gratitude.</li>
<li>Here is to a restful end of the year and a fresh start in 2027.</li>
<li>With thanks for your partnership and wishes for a happy season.</li>
</ul>

<h2>Christmas, Hanukkah and other holiday-specific messages</h2>
<p>Use these when you know the recipient's tradition.</p>
<ul>
<li>Merry Christmas and thank you for a great year working together.</li>
<li>Wishing you a merry Christmas and a happy, healthy new year.</li>
<li>Happy Hanukkah. May your Festival of Lights be filled with warmth and joy.</li>
<li>Wishing you a joyful Kwanzaa and a prosperous new year.</li>
<li>Merry Christmas from all of us at [Company]. Thank you for your support.</li>
<li>Happy Diwali. Wishing you light, prosperity and success. (Diwali falls in the autumn, so send separately from December cards.)</li>
</ul>

<h2>New Year card messages for clients</h2>
<p>New Year cards arrive when inboxes are quieter and avoid holiday-specific wording.</p>
<ul>
<li>Happy new year. Thank you for your trust in 2026, and here is to a great 2027.</li>
<li>Wishing you a successful and fulfilling new year.</li>
<li>Cheers to new goals, new projects and continued partnership in 2027.</li>
<li>Thank you for being part of our story last year. We are excited for what comes next.</li>
<li>May the new year bring you growth, health and happiness.</li>
<li>New year, new chapters. We are grateful to be writing ours alongside clients like you.</li>
</ul>

<h2>Messages for specific situations</h2>
<h3>New clients</h3>
<ul>
<li>We are so glad you joined us this year. Thank you for choosing [Company], and happy holidays.</li>
<li>Thank you for giving us the chance to work with you. We look forward to a great first full year together.</li>
</ul>
<h3>Long-term clients</h3>
<ul>
<li>[Five] years together and still counting. Thank you for your loyalty and friendship.</li>
<li>Your long-standing support has helped shape our business. Thank you, and happy holidays.</li>
</ul>
<h3>Customers of a shop or local service</h3>
<ul>
<li>Thank you for shopping local and supporting our small business this year.</li>
<li>Our neighborhood is the best part of our business. Happy holidays from all of us.</li>
<li>Thank you for every visit, every review and every recommendation. See you in the new year.</li>
</ul>
<h3>Clients who referred you</h3>
<ul>
<li>Thank you for recommending us. Referrals from clients like you are the greatest compliment.</li>
<li>Your kind words brought us wonderful new clients this year. Thank you, and happy holidays.</li>
</ul>
<h3>Vendors and partners</h3>
<ul>
<li>Thank you for being a dependable partner this year. Wishing your team a well-earned rest.</li>
<li>We could not serve our clients without partners like you. Happy holidays.</li>
</ul>
<h3>After a difficult year</h3>
<ul>
<li>Thank you for standing with us through a challenging year. We wish you peace and a brighter new year.</li>
<li>We are grateful for your patience and support this year. Wishing you a restful season.</li>
</ul>

<h2>Short holiday messages for e-cards, emails and social posts</h2>
<ul>
<li>Thank you for a wonderful year. Happy holidays.</li>
<li>Grateful for you this season.</li>
<li>Warm wishes from our team to yours.</li>
<li>Thank you for being part of our year.</li>
<li>Happy holidays. Our office is closed [dates] and reopens [date].</li>
<li>Wishing you a restful break and a happy new year.</li>
</ul>
<p>For an email version, a short subject line such as Happy holidays from [Company] works best; avoid wording that looks like a bill, which our guide to <a href="/blog/invoice-email-subject-lines">invoice email subject lines</a> explains.</p>

<h2>Timing your 2026 holiday cards</h2>
<table><thead><tr><th>Card type</th><th>Send by</th><th>Notes</th></tr></thead><tbody>
<tr><td>Printed cards to businesses</td><td>December 8-12</td><td>Offices often close the week of Christmas</td></tr>
<tr><td>Printed cards, latest recommended mailing (contiguous US)</td><td>December 17 (First-Class)</td><td>USPS recommended date; Priority Mail December 18</td></tr>
<tr><td>E-cards and emails</td><td>December 10-20</td><td>Avoid the last days before December 25</td></tr>
<tr><td>New Year cards</td><td>Arrive January 2-9</td><td>Good for missed deadlines</td></tr>
</tbody></table>
<p>USPS published these recommended dates in its <a href="https://www.usps.com/holiday/holiday-shipping-dates.htm?os=fdF" target="_blank" rel="noopener noreferrer">2026 holiday shipping deadlines</a>. Dates for Alaska, Hawaii, international and military addresses differ, so check the page before mailing.</p>

<h2>Worked example: a holiday card budget for a small firm</h2>
<p>A three-person design studio sends cards to 120 contacts. Figures are illustrative.</p>
<table><thead><tr><th>Item</th><th>Quantity</th><th>Unit cost</th><th>Total</th></tr></thead><tbody>
<tr><td>Printed cards with company logo</td><td>50 (top clients and partners)</td><td>$2.20</td><td>$110</td></tr>
<tr><td>First-Class stamps</td><td>50</td><td>$0.78</td><td>$39</td></tr>
<tr><td>Small gifts for top 10 clients</td><td>10</td><td>$25</td><td>$250</td></tr>
<tr><td>E-card service for remaining 70 contacts</td><td>1 month</td><td>$15</td><td>$15</td></tr>
<tr><td>Total</td><td></td><td></td><td>$414</td></tr>
</tbody></table>
<p>Stamp prices change; check the current USPS rate. Cards themselves are typically deductible as a promotional expense. For gifts, the IRS limits the deduction to $25 per recipient per year, and incidental costs like packaging and mailing generally do not count toward that limit, according to <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS Publication 463</a>. Spending $40 on a client gift is allowed, but only $25 of it is deductible.</p>

<h2>Common mistakes with business holiday cards</h2>
<ul>
<li><strong>Misspelled names or outdated contacts.</strong> Check your client list against recent invoices and emails.</li>
<li><strong>Turning the card into an ad.</strong> Save promotions, including any <a href="/blog/black-friday-ideas-service-business">Black Friday offers</a>, for separate messages.</li>
<li><strong>Enclosing an invoice or payment reminder.</strong> It cancels the goodwill. Send invoices separately.</li>
<li><strong>Ignoring client gift policies.</strong> Many companies and public agencies restrict gifts; a card is always acceptable.</li>
<li><strong>Sending late.</strong> If December gets away from you, switch to New Year cards.</li>
</ul>

<h2>Pairing cards with the rest of your year-end communication</h2>
<p>A holiday card is one piece of year-end client care. For your most valued clients, a longer note works better; our <a href="/blog/thank-you-letter-to-clients">thank-you letter to clients templates</a> cover that. When clients pay their final invoices of the year, a short message like those in our <a href="/blog/thank-you-for-your-payment-message">thank-you for your payment examples</a> keeps the tone consistent. If you print cards in-house, matching them to your <a href="/blog/letterhead-template">company letterhead</a> and invoice design creates a recognizable brand. If you offer gift cards this season, our <a href="/blog/gift-certificate-template">gift certificate template</a> keeps them looking professional.</p>

<p>Holiday cards keep relationships warm; clear invoices keep the business running. When it is time to bill, use our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add your logo, and download a clean PDF invoice in seconds.</p>
`,
  },
];
