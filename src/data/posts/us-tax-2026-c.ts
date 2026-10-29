import type { PostDraft } from "../blog";

export const US_TAX_2026_C_POSTS: PostDraft[] = [
  {
    slug: "estimated-tax-penalty",
    title: "Estimated Tax Penalty: How It Works and How to Avoid It",
    description:
      "The estimated tax penalty explained: who owes it, the 90%, 100% and 110% safe harbors, the current 7% IRS rate, Form 2210 and how freelancers can avoid it.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "quarterly-estimated-taxes-freelancers",
      "self-employment-tax",
      "irs-penalty-abatement",
    ],
    faqs: [
      {
        q: "What is the estimated tax penalty?",
        a: "It is a charge the IRS adds when you do not pay enough tax during the year through withholding or quarterly estimated payments. It works like interest: the IRS applies its underpayment rate to each late or short installment for the number of days it was late. Freelancers, landlords, investors and anyone with income that has no withholding are the people most likely to see it on their return.",
      },
      {
        q: "How much is the IRS underpayment penalty rate right now?",
        a: "For October to December 2026 the IRS underpayment rate for individuals is 7% a year. It was 7% in the first and third quarters of 2026 and 6% in the second quarter. The rate is set every quarter from the federal short-term rate plus three percentage points, so check the IRS quarterly interest rates page before you estimate a penalty for a later period.",
      },
      {
        q: "Do I owe a penalty if I owe less than $1,000?",
        a: "Generally no. The IRS says most taxpayers avoid the underpayment penalty if the tax they owe after subtracting withholding and refundable credits is less than $1,000. If your balance due is above that, you can still avoid the penalty by meeting a safe harbor based on 90% of this year's tax or 100% (or 110%) of last year's tax.",
      },
      {
        q: "What is the 110% safe harbor rule?",
        a: "If your adjusted gross income on last year's return was more than $150,000 ($75,000 if married filing separately), the prior-year safe harbor rises from 100% to 110%. To be protected you must pay, through withholding and estimates, at least 110% of last year's total tax, or 90% of this year's tax if that is smaller. Spread evenly, that means four installments of 27.5% of last year's tax.",
      },
      {
        q: "Do I have to file Form 2210?",
        a: "Usually not. If you owe a penalty, the IRS can calculate it and send you a bill, and most people simply let it do that. You file Form 2210 when you want to request a waiver, use the annualized income method, show that withholding should be treated as paid on actual dates, or when the form's instructions say you must file it. Tax software often fills it in automatically.",
      },
      {
        q: "Can I get a refund and still owe an estimated tax penalty?",
        a: "Yes. The penalty is based on when tax was paid during the year, not on the final balance. If you paid nothing in the first three quarters and then made a large payment in January, you can end up with a refund but still owe a penalty for the earlier quarters that were underpaid. The IRS states this directly on its estimated taxes page.",
      },
      {
        q: "How can I reduce the penalty if my income was uneven?",
        a: "Use the annualized income installment method on Form 2210, Schedule AI. It bases each required installment on the income you actually earned up to that point in the year, so if most of your money came in during the autumn, your required early payments are smaller. It takes more work, but for seasonal businesses or freelancers who land a large contract late in the year it can cut or remove the penalty.",
      },
      {
        q: "Does first-time abatement remove the estimated tax penalty?",
        a: "No. First-time abatement and the new Automatic Exemption from Penalty cover failure-to-file, failure-to-pay and failure-to-deposit penalties, not the estimated tax penalty. Relief for this penalty is limited to the waivers on Form 2210: a casualty, disaster or other unusual circumstance, or retiring after age 62 or becoming disabled with reasonable cause. You request a waiver by filing Form 2210 with a written explanation.",
      },
      {
        q: "When are 2026 estimated tax payments due?",
        a: "For the 2026 tax year the four federal installments fall on April 15, June 15 and September 15, 2026, and January 15, 2027. If a date lands on a weekend or legal holiday, it moves to the next business day. You can skip the January payment if you file your 2026 return and pay the full balance by February 1, 2027, according to the Form 1040-ES instructions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The estimated tax penalty is an interest-style charge the IRS adds when you do not pay enough tax during the year through withholding or quarterly payments. You generally avoid it if you owe less than $1,000, or if you paid at least 90% of this year's tax or 100% of last year's (110% if last year's AGI was over $150,000).</p>

<p>If you freelance, run a side business or own rental property, nobody withholds tax from your income for you. The US tax system still expects that tax to arrive during the year, not in one lump in April. When it does not, the IRS adds an underpayment penalty, reported on Form 2210 for individuals. The good news is that it is one of the most predictable and avoidable charges the IRS makes. This guide explains how the estimated tax penalty is calculated, the safe harbors that protect you, the current rate and what to do if you already owe it.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Rules differ for farmers, fishers, household employers and estates, and your state may charge its own penalty. Check with a qualified tax adviser about your situation.</p>

<h2>What the estimated tax penalty is</h2>
<p>Federal income tax is a pay-as-you-go tax. Employees pay through payroll withholding. Self-employed people, investors and landlords pay through quarterly estimated tax payments using Form 1040-ES. If those payments (plus any withholding) fall short of what the law requires for a given installment, the IRS charges a penalty on the shortfall for each day it stays unpaid.</p>
<p>Three things about it surprise people:</p>
<ul>
<li><strong>It is calculated quarter by quarter.</strong> Paying everything in January does not wipe out penalties for April, June and September.</li>
<li><strong>You can owe it even with a refund.</strong> The IRS is explicit about this: a late estimated payment can be penalized even if you are due money back when you file.</li>
<li><strong>It is not the same as the late payment penalty.</strong> The failure-to-pay penalty applies to tax unpaid after the April filing deadline. The underpayment penalty covers the months before that.</li>
</ul>
<p>If you are new to quarterly payments, start with our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>, which covers how to work out each payment.</p>

<h2>Who has to pay estimated tax</h2>
<p>You generally need to make estimated payments if you expect to owe $1,000 or more when you file, after subtracting withholding and refundable credits. That catches most freelancers and sole proprietors who make a profit, because <a href="/blog/self-employment-tax">self-employment tax</a> alone is 15.3% of most of your net earnings, on top of income tax.</p>
<p>Common triggers include:</p>
<ul>
<li>Profit from a business reported on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>.</li>
<li>Rental income, interest, dividends and capital gains with no withholding.</li>
<li>A side gig on top of a salaried job where your employer's withholding does not cover the extra income.</li>
<li>A large one-off gain, such as selling shares or a property, during the year.</li>
</ul>

<h2>The safe harbors that protect you</h2>
<p>The IRS will not charge an underpayment penalty if you meet any one of these tests:</p>
<table>
<thead><tr><th>Test</th><th>What you must pay on time</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Under $1,000</td><td>Balance due after withholding and refundable credits is less than $1,000</td><td>Small side income</td></tr>
<tr><td>90% current year</td><td>At least 90% of this year's total tax</td><td>Income that fell this year</td></tr>
<tr><td>100% prior year</td><td>At least 100% of the tax shown on last year's return (a full 12-month return)</td><td>Income that is rising or unpredictable</td></tr>
<tr><td>110% prior year</td><td>At least 110% of last year's tax if last year's AGI was over $150,000 ($75,000 married filing separately)</td><td>Higher earners</td></tr>
<tr><td>No liability last year</td><td>You had no tax liability for a full 12-month prior year and were a US citizen or resident</td><td>First year in business after a year with no tax</td></tr>
</tbody>
</table>
<p>The prior-year safe harbor is the one most freelancers rely on, because you know the number in advance. Divide last year's total tax (100% or 110%) by four and pay that amount on each due date. Even if you earn far more this year, you will owe the difference in April but no estimated tax penalty.</p>

<h3>Worked example: choosing a safe harbor</h3>
<p>Maria is a self-employed designer. Her 2025 return showed total tax of $18,000 and AGI of $120,000. Using the 100% rule, she pays $4,500 on each 2026 due date. In 2026 her business grows and her actual tax is $26,000. She owes $8,000 when she files, but no underpayment penalty, because she paid 100% of last year's tax on time.</p>
<p>Her colleague James had 2025 AGI of $180,000 and total tax of $40,000. Because his AGI was over $150,000, he needs 110%: $44,000, or $11,000 a quarter. If he only paid $10,000 a quarter, he would miss the safe harbor unless his 2026 tax turned out to be $44,444 or less (so that $40,000 covered 90% of it).</p>

<h3>2026 due dates</h3>
<p>For the 2026 tax year, the four installments are due:</p>
<ol>
<li>April 15, 2026 (income from January 1 to March 31)</li>
<li>June 15, 2026 (April 1 to May 31)</li>
<li>September 15, 2026 (June 1 to August 31)</li>
<li>January 15, 2027 (September 1 to December 31)</li>
</ol>
<p>The periods are not equal quarters, which is why the second payment comes only two months after the first. If you file your 2026 return and pay all the tax due by February 1, 2027, the Form 1040-ES instructions say you do not need to make the January payment.</p>

<h2>How the penalty is calculated and the current rate</h2>
<p>The underpayment penalty is figured separately for each installment. For each one, the IRS takes the amount you were short and multiplies it by the underpayment interest rate for the number of days it was late, until it was paid or until the April filing deadline, whichever comes first.</p>
<p>The rate is the federal short-term rate plus three percentage points, reset each quarter. According to the IRS quarterly interest rates page, the individual underpayment rate for 2026 is:</p>
<table>
<thead><tr><th>Quarter</th><th>Underpayment rate</th></tr></thead>
<tbody>
<tr><td>January to March 2026</td><td>7%</td></tr>
<tr><td>April to June 2026</td><td>6%</td></tr>
<tr><td>July to September 2026</td><td>7%</td></tr>
<tr><td>October to December 2026</td><td>7%</td></tr>
</tbody>
</table>
<p>The IRS announced in August 2026 that the 7% rate would hold for the fourth quarter. The rate for January to March 2027 had not been published at the time of writing, so check the IRS page if you are estimating a penalty that runs into next year.</p>

<h3>Worked example: what a missed payment costs</h3>
<p>Say your required installment for September 15 was $3,000 and you paid nothing until December 14, 90 days later. At 7%, the approximate penalty is $3,000 x 7% x 90 / 365 = about $52. Small, but it adds up across four quarters and several years, and it is entirely avoidable. Missing all four installments of $5,000 on a $20,000 liability could easily cost a few hundred dollars.</p>

<h2>When and how to use Form 2210</h2>
<p>Form 2210, Underpayment of Estimated Tax by Individuals, Estates, and Trusts, is where the penalty is calculated. In many cases you do not need to file it: if you owe a penalty, you can leave the line blank and the IRS will compute it and send a bill. You would file Form 2210 when you want to:</p>
<ul>
<li><strong>Request a waiver</strong> of all or part of the penalty.</li>
<li><strong>Use the annualized income installment method</strong> (Schedule AI) because your income arrived unevenly.</li>
<li><strong>Treat withholding as paid on the actual dates</strong> it was withheld, rather than spread evenly across the year.</li>
<li><strong>Base the safe harbor on last year's tax</strong> when the IRS would not otherwise know you qualify, such as when last year's return was filed jointly and this year's separately.</li>
</ul>
<p>Most tax software completes Form 2210 for you and tells you whether the annualized method would help.</p>

<h2>Ways to avoid the penalty</h2>
<ol>
<li><strong>Use the prior-year safe harbor.</strong> Pay 25% (or 27.5%) of last year's tax on each due date and stop worrying about forecasting.</li>
<li><strong>Raise your withholding if you also have a job.</strong> Withholding is treated as paid evenly throughout the year, so increasing it on a new Form W-4 in October can repair an underpayment from April.</li>
<li><strong>Set aside tax on every invoice.</strong> Many freelancers move 25% to 30% of each payment into a separate tax account the day it arrives. Our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> explains how to set this up.</li>
<li><strong>Annualize if income is seasonal.</strong> Landing a large contract in November should not mean a penalty for April.</li>
<li><strong>Keep clean income records.</strong> You cannot estimate tax from income you have not tracked. Numbered invoices from our <a href="/invoice-generator">free invoice generator</a> and a simple <a href="/blog/profit-and-loss-statement">profit and loss statement</a> each quarter make the calculation quick.</li>
</ol>

<h2>Special situations</h2>
<h3>Your first year in business</h3>
<p>If you were employed last year and your withholding covered your full tax bill, you may already be protected in your first freelance year. The prior-year safe harbor only asks you to pay 100% (or 110%) of last year's total tax, and withholding from a job you held earlier in the year counts. If last year's total tax was zero and you were a US citizen or resident for the whole year, you owe no underpayment penalty this year at all, even if you make no estimated payments. You will still owe the tax itself in April, so set money aside.</p>
<h3>Farmers and fishers</h3>
<p>If at least two-thirds of your gross income comes from farming or fishing, special rules apply. You generally make one payment by January 15 of the following year, or file and pay in full by March 1, and the required amount is based on 66 2/3% of the current year's tax rather than 90%. These taxpayers use Form 2210-F instead of Form 2210.</p>
<h3>Married couples</h3>
<p>Joint filers can make joint estimated payments, and the safe harbor applies to the joint tax. If you filed jointly last year but file separately this year, or the other way round, the prior-year figure has to be split, and the Form 2210 instructions explain how. The $150,000 AGI threshold for the 110% rule drops to $75,000 for married filing separately.</p>
<h3>Household employers</h3>
<p>If you pay a nanny or other household employee and report their employment taxes on Schedule H, those taxes count toward your total tax. You can cover them through estimated payments or extra withholding from your own wages to avoid an underpayment.</p>

<h2>What to do if you already owe the penalty</h2>
<p>If it is late in the year and you have paid nothing, act now rather than waiting for April. The penalty runs daily, so every payment you make stops the clock on the shortfall it covers, even though it cannot erase penalties already built up on missed installments. A practical approach:</p>
<ol>
<li>Work out your likely total tax using your income so far and a realistic estimate for the rest of the year.</li>
<li>Compare it with the safe harbors to find the minimum you still need to pay.</li>
<li>Make a payment straight away through IRS Direct Pay, EFTPS or your IRS online account, and choose estimated tax for the correct year.</li>
<li>If you have a W-2 job, increase withholding for the rest of the year, since withholding is treated as spread evenly over the whole year.</li>
<li>When you file, let your software test the annualized income method in case it lowers the bill.</li>
</ol>
<p>Then pay the penalty when you file or when the IRS bills you. It is usually far smaller than the late payment and late filing penalties that apply after April, so filing on time is still the priority.</p>

<h2>Waivers and penalty relief</h2>
<p>The estimated tax penalty has narrower relief than other IRS penalties. First-time abatement, and the new Automatic Exemption from Penalty the IRS introduced in 2026, apply to failure-to-file, failure-to-pay and failure-to-deposit penalties, not to the underpayment penalty. The only waivers are:</p>
<ul>
<li>You did not make a payment because of a casualty, disaster or other unusual circumstance, and it would be inequitable to impose the penalty.</li>
<li>You retired after reaching age 62, or became disabled, in the tax year or the year before, and the underpayment was due to reasonable cause and not willful neglect.</li>
</ul>
<p>You request a waiver by filing Form 2210 with a statement explaining why. The IRS also announces automatic waivers in some years, for example for taxpayers in federally declared disaster areas, so it is worth checking the news on IRS.gov. For other penalties, see our guide to <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>.</p>

<h2>Conclusion</h2>
<p>The estimated tax penalty is small compared with the tax itself, but it is also the easiest IRS charge to avoid. Pick a safe harbor, put the four due dates in your calendar, and set aside tax every time a client pays. Start with organized income records: create numbered, professional invoices with our <a href="/invoice-generator/usa">US invoice generator</a>, and the quarterly maths becomes a five-minute job. For more guides, browse our <a href="/blog/category/tax-compliance">tax compliance articles</a>.</p>
`,
  },
  {
    slug: "home-office-deduction",
    title: "Home Office Deduction: Simplified vs Regular Method",
    description:
      "How the home office deduction works for self-employed people: regular and exclusive use, the $5 per sq ft simplified method, Form 8829 and worked examples.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-tax-deductions",
      "schedule-c-for-freelancers",
      "how-to-calculate-depreciation",
    ],
    faqs: [
      {
        q: "Who can claim the home office deduction?",
        a: "Self-employed people, including sole proprietors, freelancers, independent contractors and some partners, who use part of their home regularly and exclusively for business. The space must be your principal place of business, a place where you meet clients in the normal course of business, or a separate structure used for the business. W-2 employees who work from home cannot claim it on their federal return under current law.",
      },
      {
        q: "Can employees who work from home claim a home office deduction?",
        a: "No, not on a federal return. The IRS says employees cannot claim the deduction because miscellaneous itemized deductions for unreimbursed employee expenses were eliminated for tax years after 2017, and the One Big Beautiful Bill Act made that change permanent. If your employer requires you to work from home, ask whether it will reimburse costs under an accountable plan. A few states have their own rules for employee expenses.",
      },
      {
        q: "How does the simplified home office method work?",
        a: "You multiply the square footage of your office by $5, up to 300 square feet, for a maximum deduction of $1,500. You do not track actual home expenses or calculate depreciation, and you can still deduct all of your mortgage interest and property taxes on Schedule A if you itemize. The deduction cannot create a loss, and any amount above the income limit cannot be carried forward.",
      },
      {
        q: "What is Form 8829?",
        a: "Form 8829, Expenses for Business Use of Your Home, is the form self-employed people filing Schedule C use to calculate the home office deduction under the regular method. It works out your business-use percentage, splits direct and indirect expenses, calculates depreciation on the business part of the home and applies the gross income limit. You do not file Form 8829 if you use the simplified method.",
      },
      {
        q: "What does regular and exclusive use mean?",
        a: "Exclusive use means the space is used only for business, with no personal use at all. A spare room used solely as an office qualifies; a dining table you clear each evening does not. Regular use means you use it for business on a continuing basis, not occasionally. The space does not need a wall or door, but it must be a clearly identifiable area. Daycare providers and inventory storage have limited exceptions.",
      },
      {
        q: "Which home office method gives the bigger deduction?",
        a: "The regular method usually gives a bigger deduction when your home costs are high, your office is a large share of the home, or you own the home and can claim depreciation. The simplified method often wins for renters with small offices, people with low home costs, and anyone who values simplicity. Many tax programs compare both. You can choose a different method each year.",
      },
      {
        q: "Does the home office deduction affect selling my house?",
        a: "It can under the regular method. Depreciation you claimed, or could have claimed, on the business part of the home after May 6, 1997 is generally taxable when you sell, even if the rest of the gain is excluded under the home sale rules. The simplified method involves no depreciation, so there is no depreciation recapture. Talk to a tax adviser before selling a home you have used for business.",
      },
      {
        q: "Can renters claim the home office deduction?",
        a: "Yes. Renters who meet the regular and exclusive use test can claim it. Under the regular method you deduct the business percentage of rent, utilities, renters insurance and repairs; there is no depreciation because you do not own the property. Under the simplified method you claim $5 per square foot up to 300 square feet. For renters with high rent, the regular method is often worth calculating.",
      },
      {
        q: "Is there a limit on the home office deduction?",
        a: "Yes. The deduction is limited to the gross income from the business use of the home, minus other business expenses not related to the home. Under the regular method, any amount you cannot deduct because of this limit carries forward to the next year. Under the simplified method, the excess is lost. The deduction can reduce your business profit to zero but cannot create a loss.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The home office deduction lets self-employed people deduct part of their home costs if they use a space regularly and exclusively for business. You can use the simplified method ($5 per square foot, up to 300 square feet, maximum $1,500) or the regular method on Form 8829, which deducts the business share of actual expenses plus depreciation.</p>

<p>If you freelance from a spare room, part of your rent or mortgage interest, utilities and insurance may be tax deductible. The home office deduction is one of the most valuable write-offs for small businesses run from home, and also one of the most misunderstood. This guide covers who qualifies, how both methods work, a side-by-side worked example and the records you need to keep.</p>

<p><strong>Important:</strong> This is general information, not tax advice. The rules in IRS Publication 587 have many special cases, especially for daycare providers, people with more than one business and home sellers. Check with a qualified tax adviser before you claim.</p>

<h2>Who can claim the home office deduction</h2>
<p>The deduction is available to the self-employed: sole proprietors and single-member LLC owners filing <a href="/blog/schedule-c-for-freelancers">Schedule C</a>, independent contractors, and some partners. It applies whether you own or rent, and whether you live in a house, flat, condo or mobile home.</p>
<p>W-2 employees cannot claim it on their federal return. The IRS notes that miscellaneous itemized deductions for unreimbursed employee expenses were eliminated for tax years beginning after 2017, and the One Big Beautiful Bill Act made that permanent. If you are both employed and running a side business, you can claim it only for the side business, and only if the space qualifies for that business.</p>

<h2>The qualification tests: regular and exclusive use</h2>
<p>To qualify, part of your home must be used:</p>
<ul>
<li><strong>Exclusively:</strong> only for business. A guest room that doubles as your office, or a desk in the living room used by the family in the evenings, fails this test. The space does not need walls, but it must be a clearly separate, identifiable area.</li>
<li><strong>Regularly:</strong> on a continuing basis, not occasionally.</li>
</ul>
<p>And it must also be one of the following:</p>
<ul>
<li>Your <strong>principal place of business</strong>. A home office counts if you use it for administrative or management activities (invoicing, bookkeeping, scheduling) and there is no other fixed location where you do substantial amounts of that work, even if you do the actual work at client sites.</li>
<li>A place where you <strong>meet clients or customers</strong> in the normal course of business.</li>
<li>A <strong>separate structure</strong>, such as a detached studio or garage workshop, used regularly and exclusively for business.</li>
</ul>
<p>There are two exceptions to exclusive use: certain licensed daycare providers, and space used regularly to store inventory or product samples when the home is your only fixed business location.</p>

<h2>The simplified method: $5 per square foot</h2>
<p>The simplified option, introduced by Revenue Procedure 2013-13, replaces expense tracking with a flat rate:</p>
<ul>
<li>$5 per square foot of qualifying space.</li>
<li>Maximum 300 square feet, so a maximum deduction of $1,500.</li>
<li>No depreciation, and therefore no depreciation recapture when you sell.</li>
<li>Mortgage interest and property taxes stay fully deductible on Schedule A if you itemize.</li>
<li>Any amount above the income limit is lost, not carried forward.</li>
</ul>
<p>You enter the calculation directly on Schedule C (line 30) using the simplified method worksheet in the Schedule C instructions. No Form 8829 is needed.</p>

<h2>The regular method: Form 8829</h2>
<p>Under the regular method you work out the business share of your actual home costs on Form 8829. The steps are:</p>
<ol>
<li><strong>Find your business-use percentage.</strong> Divide the office's square footage by the home's total square footage. If rooms are similar in size, you can divide by the number of rooms instead.</li>
<li><strong>Deduct direct expenses in full.</strong> Costs only for the office, such as painting it or repairing its window.</li>
<li><strong>Deduct the business share of indirect expenses.</strong> Rent, mortgage interest, property taxes, home insurance, utilities, general repairs and security systems for the whole home.</li>
<li><strong>Add depreciation if you own.</strong> Depreciate the business share of the building (not the land), generally over 39 years as nonresidential real property. Our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> explains the basics.</li>
<li><strong>Apply the gross income limit.</strong> The deduction cannot exceed your business income after other expenses. Excess amounts carry forward.</li>
</ol>
<p>Expenses that do not qualify include lawn care and repairs to parts of the house you do not use for business.</p>

<h2>Worked example: both methods side by side</h2>
<p>Priya is a freelance copywriter who owns a 2,000-square-foot house. Her office is a 200-square-foot spare room used only for work, so her business-use percentage is 10%. Her annual home costs:</p>
<table>
<thead><tr><th>Expense</th><th>Annual cost</th><th>Business share (10%)</th></tr></thead>
<tbody>
<tr><td>Mortgage interest</td><td>$9,000</td><td>$900</td></tr>
<tr><td>Property tax</td><td>$3,600</td><td>$360</td></tr>
<tr><td>Homeowners insurance</td><td>$1,200</td><td>$120</td></tr>
<tr><td>Utilities</td><td>$3,000</td><td>$300</td></tr>
<tr><td>General repairs</td><td>$800</td><td>$80</td></tr>
<tr><td>Depreciation (building basis $300,000 x 10% / 39 years)</td><td>n/a</td><td>about $769</td></tr>
<tr><td><strong>Total, regular method</strong></td><td></td><td><strong>about $2,529</strong></td></tr>
</tbody>
</table>
<p><strong>Simplified method:</strong> 200 square feet x $5 = $1,000.</p>
<p>The regular method gives Priya about $1,529 more in deductions. At a combined 22% income tax and roughly 14% effective self-employment tax rate, that is worth several hundred dollars. The trade-offs: she must keep receipts for every expense, file Form 8829, and the $769 a year of depreciation may be taxed when she sells the house. The full-year depreciation figure is simplified here; the first year uses a mid-month convention.</p>
<p>Now take Leo, who rents a small flat for $1,400 a month and works from a 120-square-foot corner that is 12% of the flat. Regular method: 12% of $16,800 rent plus 12% of $2,000 utilities and insurance, about $2,256. Simplified: 120 x $5 = $600. For renters with high rent, the regular method is often clearly better and carries no recapture.</p>

<h2>Which method should you choose?</h2>
<table>
<thead><tr><th>Factor</th><th>Simplified</th><th>Regular (Form 8829)</th></tr></thead>
<tbody>
<tr><td>Calculation</td><td>Square feet x $5</td><td>Business % of actual costs</td></tr>
<tr><td>Maximum</td><td>$1,500</td><td>No fixed cap (income limit applies)</td></tr>
<tr><td>Records</td><td>Square footage and use</td><td>All home expense receipts</td></tr>
<tr><td>Depreciation</td><td>None</td><td>Yes, recaptured on sale</td></tr>
<tr><td>Carryover of excess</td><td>No</td><td>Yes</td></tr>
<tr><td>Best for</td><td>Small spaces, low costs, simplicity</td><td>High rent or home costs, larger offices</td></tr>
</tbody>
</table>
<p>You can switch methods from year to year by choosing on a timely filed original return. If you move from simplified back to regular, you use the optional depreciation tables for the later year.</p>

<h2>Direct and indirect expenses explained</h2>
<p>Under the regular method, it helps to sort every home cost into one of three buckets before you start Form 8829:</p>
<ul>
<li><strong>Direct expenses</strong> benefit only the office. Painting the office or repairing its window is deductible in full.</li>
<li><strong>Indirect expenses</strong> keep up and run the whole home, so you deduct only the business percentage. Rent, mortgage interest, property taxes, insurance, electricity, gas, water, trash collection, security monitoring and general repairs such as a roof or furnace fix all fall here.</li>
<li><strong>Unrelated expenses</strong> benefit only parts of the home you do not use for business, such as painting a bedroom or landscaping. They are not deductible at all.</li>
</ul>
<p>Telephone service is treated separately. The basic local service on the first landline in your home is not deductible, but a second business line and the business share of mobile and internet costs generally are, and they go on Schedule C rather than Form 8829. Office furniture, computers and equipment are also business assets claimed on Schedule C, under either method.</p>

<h2>Special situations</h2>
<h3>You moved or started the business mid-year</h3>
<p>Only count the months the space was used for business. Under the simplified method, you use the average monthly square footage, counting zero for months it did not qualify. Under the regular method, you include only expenses for the months the office was in use.</p>
<h3>More than one business, or a shared home</h3>
<p>If you run two businesses from the same space, it must qualify for each one, and the 300-square-foot simplified cap applies across them in total. If you share a home with another self-employed person, each of you can claim a separate qualifying space, and under the simplified method each can claim up to 300 square feet for their own office.</p>
<h3>Daycare providers and inventory storage</h3>
<p>Licensed daycare providers do not need exclusive use, but they must reduce the business percentage by the share of hours the space is used for daycare. Online sellers who store inventory at home, with no other fixed business location, can deduct that storage space even if it is also used for personal purposes, provided it is used regularly for storage.</p>
<h3>Self-employment tax and QBI</h3>
<p>Because the deduction reduces your Schedule C profit, it also lowers your <a href="/blog/self-employment-tax">self-employment tax</a>, which an itemized deduction would not. A lower profit can slightly reduce your QBI deduction too, but the net effect is almost always a tax saving.</p>

<h2>Records to keep and mistakes to avoid</h2>
<ul>
<li>A floor plan or measurements of the office and the whole home.</li>
<li>Photos showing the space is set up and used only for work.</li>
<li>Receipts and statements for rent, mortgage interest (Form 1098), property tax, insurance, utilities and repairs if using the regular method.</li>
<li>Records of the home's purchase price, land value and improvements for depreciation.</li>
<li>Evidence the business is real: client contracts, numbered invoices and a <a href="/blog/how-to-track-business-expenses">system for tracking business expenses</a>.</li>
</ul>
<p>Keep these for at least as long as the return can be examined, and depreciation records until several years after you sell the home.</p>

<h3>Common mistakes</h3>
<ul>
<li><strong>Claiming a shared space.</strong> A kitchen table or family computer room rarely passes the exclusive use test.</li>
<li><strong>Claiming as an employee.</strong> Not allowed federally under current law.</li>
<li><strong>Double counting.</strong> Under the regular method, the business share of mortgage interest and property tax goes on Form 8829; only the rest goes on Schedule A.</li>
<li><strong>Forgetting the income limit.</strong> A loss-making business cannot use the deduction to increase its loss.</li>
<li><strong>Ignoring recapture.</strong> Depreciation claimed (or allowable) after May 6, 1997 can be taxed on sale.</li>
<li><strong>Guessing the square footage.</strong> Measure the room and the home, and keep the numbers. An estimate that cannot be explained is hard to defend.</li>
<li><strong>Forgetting it in a loss year.</strong> Under the regular method, disallowed amounts carry forward, but only if you complete Form 8829 for the year they arise.</li>
</ul>
<p>A home office deduction claimed correctly is not an audit red flag in itself. What causes trouble is a claim that cannot be backed up with measurements, photos and receipts, so build the file as you go rather than when a letter arrives.</p>
<p>The home office deduction sits alongside many other write-offs. See our full list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> and the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a>, which applies to your profit after deductions.</p>

<h2>Conclusion</h2>
<p>If you have a space used only for work, the home office deduction is worth claiming. Run the numbers both ways: the simplified method is quick and safe, while Form 8829 often pays more for owners with high costs and renters with high rent. Whichever you choose, it rests on proof that your business is real, so bill every client properly with our <a href="/invoice-generator">free invoice generator</a> and keep your records in one place. More guides are in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>
`,
  },
  {
    slug: "hobby-vs-business",
    title: "Hobby vs Business: How the IRS Decides (and Why It Matters)",
    description:
      "Hobby vs business for IRS purposes: the 9 factors, the 3-of-5-year profit rule, how hobby income is reported and why business status changes your tax bill.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-get-a-business-license",
      "how-to-invoice-without-a-business",
      "schedule-c-for-freelancers",
      "1099-k-threshold",
    ],
    faqs: [
      {
        q: "What is the difference between a hobby and a business for tax purposes?",
        a: "The key difference is profit motive. A business is carried on with the genuine intention of making a profit, even if it has not yet done so. A hobby is something you do mainly for enjoyment. Business income goes on Schedule C, where you can deduct expenses and pay self-employment tax. Hobby income is reported as other income on Schedule 1, and hobby expenses are not deductible.",
      },
      {
        q: "What are the 9 factors the IRS uses for hobby loss rules?",
        a: "Under Treasury Regulation 1.183-2(b) the factors are: how businesslike the activity is run; your expertise or that of your advisers; the time and effort you spend; whether assets may rise in value; your success in other activities; the history of income or losses; the amount of occasional profits; your financial status; and elements of personal pleasure. No single factor decides the outcome.",
      },
      {
        q: "What is the 3 out of 5 year rule?",
        a: "Under section 183(d), an activity is presumed to be engaged in for profit if it made a profit in at least three of the last five tax years, including the current year. For horse breeding, training, showing or racing, the test is two of seven years. Meeting it shifts the burden to the IRS. Failing it does not automatically make the activity a hobby; the nine factors still apply.",
      },
      {
        q: "How do I report hobby income?",
        a: "Hobby income is reported on Schedule 1 of Form 1040 as other income, on the line for activity not engaged in for profit income. It is added to your other income and taxed at your normal rates, but it is not subject to self-employment tax. You must report it even if you receive no Form 1099. Keep records of sales so you can support the amount you report.",
      },
      {
        q: "Can I deduct hobby expenses?",
        a: "Not under current federal law. Hobby expenses were miscellaneous itemized deductions, which were suspended from 2018 to 2025 and made permanently nondeductible by the One Big Beautiful Bill Act. That means you pay tax on gross hobby income without subtracting supplies, fees or equipment. Costs of goods sold may still reduce gross income in some cases, so ask a tax adviser how this applies to you.",
      },
      {
        q: "Is it better to be treated as a hobby or a business?",
        a: "It depends on your numbers. A business can deduct expenses and use losses against other income, but its profit is subject to 15.3% self-employment tax. A hobby avoids self-employment tax but cannot deduct expenses. For an activity with high costs, business treatment is usually better. For a small activity with almost no expenses, hobby status may cost less, but you cannot choose it if you are truly in business.",
      },
      {
        q: "What happens if the IRS reclassifies my business as a hobby?",
        a: "If an examiner decides your activity lacks a profit motive, losses you deducted on Schedule C will be disallowed for the years under review. You would owe the extra income tax, interest and possibly an accuracy-related penalty. The income is still taxable. This most often happens when an activity shows losses year after year while the owner has a high income from other sources.",
      },
      {
        q: "What is Form 5213?",
        a: "Form 5213 lets you ask the IRS to postpone deciding whether the 3-of-5-year presumption applies until the end of the fifth tax year (seventh for horse activities) after you start the activity. It is generally due within three years of the due date of the return for the first year. Filing it extends the time the IRS has to assess tax for those years, so get advice first.",
      },
      {
        q: "Will I get a 1099-K for hobby sales?",
        a: "You might. Payment platforms and marketplaces send Form 1099-K when your payments pass the federal reporting threshold, which is back to $20,000 and more than 200 transactions under current law. A 1099-K does not decide whether your activity is a hobby or a business. If you sold personal items at a loss, that is neither; report the form as the instructions describe.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the hobby vs business question, the IRS looks at whether you genuinely intend to make a profit. A business reports income and expenses on Schedule C and pays self-employment tax. A hobby reports income as other income on Schedule 1 and cannot deduct any expenses. The IRS weighs nine factors and presumes a profit motive if you made money in three of five years.</p>

<p>Plenty of businesses start as hobbies: candles sold at a craft fair, photography for friends, an Etsy shop, a bit of freelance coding. At some point the IRS cares which side of the line you are on, because it changes how much tax you pay. The hobby vs business distinction is covered by section 183 of the tax code, often called the hobby loss rules. This guide explains the factors, the presumption, how each is taxed and how to show that your activity is a real business.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Hobby loss cases depend heavily on facts. If your activity has had several years of losses, talk to a qualified tax adviser.</p>

<h2>Why hobby vs business matters</h2>
<p>The classification changes three things:</p>
<ul>
<li><strong>Deductions.</strong> A business can deduct ordinary and necessary expenses. A hobby cannot deduct expenses at all under current law.</li>
<li><strong>Losses.</strong> A business loss can generally offset other income, such as salary. A hobby loss cannot.</li>
<li><strong>Self-employment tax.</strong> Business profit is subject to <a href="/blog/self-employment-tax">self-employment tax</a> at 15.3% on most net earnings. Hobby income is not.</li>
</ul>
<p>Most IRS disputes go one way: a taxpayer claims business losses year after year against a high salary, and the IRS argues the activity is really a hobby. If your side activity makes a profit, the question matters less, but you still need to report the income correctly.</p>

<h2>The 9 factors in the IRS hobby loss rules</h2>
<p>Treasury Regulation 1.183-2(b) lists nine factors. The IRS considers all of them, and no single factor decides the case.</p>
<table>
<thead><tr><th>Factor</th><th>Points toward a business</th><th>Points toward a hobby</th></tr></thead>
<tbody>
<tr><td>1. Manner in which you carry on the activity</td><td>Separate bank account, books, invoices, marketing, a business plan</td><td>Mixed personal and business money, no records</td></tr>
<tr><td>2. Expertise of you or your advisers</td><td>Training, industry knowledge, professional advice</td><td>No effort to learn how to make it profitable</td></tr>
<tr><td>3. Time and effort spent</td><td>Substantial, regular hours, or hiring competent help</td><td>Occasional weekends</td></tr>
<tr><td>4. Expectation that assets will appreciate</td><td>Land, equipment or stock likely to grow in value</td><td>No assets of lasting value</td></tr>
<tr><td>5. Success in similar or other activities</td><td>You have turned other ventures into profit</td><td>No business track record</td></tr>
<tr><td>6. History of income or losses</td><td>Start-up losses or losses from events outside your control</td><td>Continuous losses with no explanation</td></tr>
<tr><td>7. Amount of occasional profits</td><td>Occasional large profits or a real chance of them</td><td>Tiny profits against large investment</td></tr>
<tr><td>8. Your financial status</td><td>You depend on the income</td><td>Losses shelter large income from elsewhere</td></tr>
<tr><td>9. Elements of personal pleasure</td><td>Work is done even when it is not enjoyable</td><td>Main motive is recreation</td></tr>
</tbody>
</table>
<p>The IRS's own plain-English summary splits these into 11 questions, such as whether you changed methods to improve profitability and whether losses are normal for the start-up phase. The idea is the same: does the activity look and behave like a business?</p>
<p>In practice, the first three factors carry a lot of weight because they are easy to show on paper. An examiner can see at a glance whether you have a separate account, written records, a pricing approach and a log of hours. Factors such as your financial status and personal pleasure are harder to change, so the strongest cases are built on the ones you control.</p>
<p>Enjoying your work does not make it a hobby. Plenty of photographers, musicians and makers love what they do and still run genuine businesses.</p>

<h2>The 3-of-5-year presumption</h2>
<p>Section 183(d) gives a helpful presumption: if an activity shows a profit in at least three of the last five tax years, including the current one, it is presumed to be engaged in for profit. For activities that consist mainly of breeding, training, showing or racing horses, the test is two of seven years.</p>
<p>Two points to remember:</p>
<ul>
<li>Meeting the test shifts the burden to the IRS to prove otherwise. It does not make you untouchable.</li>
<li>Failing the test does not make you a hobby. Many real businesses lose money in their early years. The nine factors still decide.</li>
</ul>
<p>New activities can file <strong>Form 5213</strong> to ask the IRS to postpone the decision until the end of the fifth year (seventh for horses). It extends the period the IRS has to assess tax on that activity, so it is worth discussing with an adviser before filing.</p>

<h2>How hobby income is reported</h2>
<p>Hobby income is taxable. You report it on Schedule 1 (Form 1040) as other income, on the line for activity not engaged in for profit income, and it flows into your adjusted gross income. It is not subject to self-employment tax.</p>
<p>What you cannot do is deduct hobby expenses. They used to be miscellaneous itemized deductions subject to a 2% floor. The 2017 tax law suspended those from 2018 to 2025, and the One Big Beautiful Bill Act made the suspension permanent. So you are taxed on gross hobby income. In some cases cost of goods sold can reduce gross receipts; ask your adviser whether that applies to your sales.</p>
<p>A 1099-K from a payment app or marketplace does not settle the hobby vs business question. It only reports payments. See our explainer on the <a href="/blog/1099-k-threshold">1099-K threshold</a> for the current reporting rules.</p>

<h2>Worked example: the same activity taxed both ways</h2>
<p>Dana makes ceramics. This year she sells $6,000 of pottery and spends $4,000 on clay, glazes, kiln time and market fees. She is in the 22% federal bracket.</p>
<table>
<thead><tr><th></th><th>Treated as a business</th><th>Treated as a hobby</th></tr></thead>
<tbody>
<tr><td>Income reported</td><td>$6,000 on Schedule C</td><td>$6,000 on Schedule 1</td></tr>
<tr><td>Expenses deducted</td><td>$4,000</td><td>$0</td></tr>
<tr><td>Taxable amount</td><td>$2,000 profit</td><td>$6,000</td></tr>
<tr><td>Self-employment tax (approx.)</td><td>$2,000 x 92.35% x 15.3% = $283</td><td>$0</td></tr>
<tr><td>Income tax at 22% (approx.)</td><td>about $409 (after half of SE tax is deducted)</td><td>$1,320</td></tr>
<tr><td><strong>Approximate federal tax</strong></td><td><strong>about $692</strong></td><td><strong>$1,320</strong></td></tr>
</tbody>
</table>
<p>With real expenses, business treatment costs Dana far less. Flip it around: if she spent only $200, the hobby route would avoid about $800 of self-employment tax. But you cannot simply pick the cheaper option. If the activity is run as a business with a profit motive, it is a business. State taxes are ignored here for simplicity.</p>

<h2>How to show the IRS you are running a business</h2>
<ol>
<li><strong>Separate your money.</strong> Open a dedicated account; our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account</a> explains why it matters.</li>
<li><strong>Keep proper books.</strong> Record every sale and expense. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide covers the essentials.</li>
<li><strong>Invoice like a business.</strong> Send numbered invoices with your business name, client details and payment terms. Our <a href="/invoice-generator">free invoice generator</a> creates clean PDFs, and the <a href="/tools/invoice-number-generator">invoice number generator</a> keeps your sequence tidy.</li>
<li><strong>Write a simple business plan.</strong> Even a page with pricing, target customers and break-even sales helps.</li>
<li><strong>Change what is not working.</strong> Raise prices, cut costs or drop unprofitable products, and document why.</li>
<li><strong>Get licenses and registrations</strong> your city or state requires, and collect sales tax where needed.</li>
<li><strong>Track your time.</strong> A log of hours spent on production, marketing and admin supports the time-and-effort factor.</li>
</ol>

<h2>Signs the IRS may question your activity</h2>
<p>The IRS does not publish an audit checklist for hobby loss cases, but the regulation and court decisions point to the patterns that draw attention. Be especially careful if several of these apply to you:</p>
<ul>
<li>Your Schedule C shows a loss year after year, with no clear trend toward profit.</li>
<li>You have a high salary, investment income or a spouse's income that the losses reduce.</li>
<li>The activity has an obvious recreational element: horses, boats, travel writing, art collecting, music or photography gear.</li>
<li>Expenses are far larger than sales, and many look personal, such as holidays described as research.</li>
<li>Records are thin: no invoices, no separate account and no marketing.</li>
</ul>
<p>None of these makes an activity a hobby on its own. Courts have accepted long start-up losses where the owner kept proper records, sought expert advice and changed methods when things were not working. The point is to make your profit motive visible in the paperwork, not just in your head.</p>

<h2>Turning a hobby into a business</h2>
<p>If your hobby has started earning steady money, there comes a point when it makes sense to treat it as a business on purpose. Practical steps:</p>
<ol>
<li><strong>Decide on a start date.</strong> From that date, record all sales and costs as business income and expenses. Costs from your hobby years generally cannot be deducted later.</li>
<li><strong>Get an EIN if useful.</strong> A sole proprietor can use a Social Security number, but an employer identification number keeps your SSN off W-9 forms and invoices.</li>
<li><strong>Register where required.</strong> Check city or county business licenses, and register for sales tax in states where you have nexus.</li>
<li><strong>Price for profit.</strong> Work out what each product or hour really costs you, including materials and fees, and set prices that cover them with a margin.</li>
<li><strong>Plan for tax.</strong> Once you show a profit, you will owe self-employment tax and may need quarterly estimated payments.</li>
</ol>
<p>It can go the other way too. If a business winds down into something you only do occasionally for fun, stop reporting it on Schedule C and report any remaining income as hobby income.</p>

<h2>Common situations</h2>
<h3>Side gig with a full-time job</h3>
<p>Having a salary does not make a side activity a hobby. But years of losses that reduce tax on that salary invite scrutiny. Make sure the factors above are visibly met.</p>
<h3>Selling personal items</h3>
<p>Selling your own used clothes or furniture for less than you paid is neither a hobby nor a business; there is usually no taxable gain. Buying items to resell for profit, on the other hand, is a business.</p>
<h3>Content creators and online sellers</h3>
<p>YouTube channels, blogs, print-on-demand shops and resale accounts often start as fun and slowly earn money. Once you are pursuing sponsorships, affiliate income or regular sales with a plan to grow, the hobby vs business balance usually tips toward business. Treat brand deals and platform payouts as business income, keep receipts for equipment and software, and track what each channel earns.</p>
<h3>Starting out without an entity</h3>
<p>You do not need an LLC to be a business. A sole proprietorship starts when you begin trading with a profit motive. See <a href="/blog/how-to-invoice-without-a-business">how to invoice without a registered business</a> and <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> for the next step.</p>

<h2>Conclusion</h2>
<p>The hobby vs business test comes down to profit motive, shown through how you run the activity. If you want business treatment, act like one: keep records, separate your money and invoice every customer properly. Create professional invoices in minutes with our <a href="/invoice-generator/usa">US invoice generator</a>, and read more in our <a href="/blog/category/tax-compliance">tax compliance guides</a>.</p>
`,
  },
  {
    slug: "sales-tax-exemption-certificate",
    title: "Sales Tax Exemption Certificate: A Guide for Sellers",
    description:
      "How a sales tax exemption certificate works: resale certificates, multistate forms, what to check before accepting one and how to invoice tax-exempt customers.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "resale-certificate",
      "sales-tax-on-invoices-us",
      "sales-tax-nexus",
      "tax-id-on-invoice",
    ],
    faqs: [
      {
        q: "What is a sales tax exemption certificate?",
        a: "It is a document a buyer gives a seller to show that a purchase is exempt from sales tax. The certificate states the buyer's details, the reason for the exemption and, usually, a state permit or exemption number, and it is signed by the buyer. When a seller accepts a valid, complete certificate in good faith, it can generally skip charging sales tax on that sale.",
      },
      {
        q: "What is the difference between a resale certificate and an exemption certificate?",
        a: "A resale certificate is a type of exemption certificate used when the buyer will resell the goods, so tax is collected later from the final customer. Other exemption certificates cover buyers who are exempt because of who they are, such as nonprofits, schools or government agencies, or because of how the goods are used, such as manufacturing or farming. Some states use one form for both purposes.",
      },
      {
        q: "Who is responsible if an exemption certificate is invalid?",
        a: "In most states the seller is responsible for sales tax it should have collected unless it holds a valid certificate accepted in good faith. If you have no certificate, or it is incomplete, an auditor can assess the tax, interest and penalties against you. If a buyer misuses a valid certificate, liability generally shifts to the buyer. Rules vary by state, so check your state's guidance.",
      },
      {
        q: "How do I invoice a tax-exempt customer?",
        a: "Charge no sales tax, and show clearly why. Set the tax rate to zero for that invoice, add a note such as tax-exempt sale with the certificate type and number, and include the customer's legal name exactly as it appears on the certificate. Keep a copy of the certificate on file and link it to the customer account so every future invoice is covered.",
      },
      {
        q: "Can I use one exemption certificate in multiple states?",
        a: "Sometimes. The Streamlined Sales and Use Tax Certificate of Exemption is accepted by the Streamlined member states, and the Multistate Tax Commission's Uniform Sales and Use Tax Certificate is listed by the MTC as accepted for resale in 36 states, some with conditions. Neither works everywhere, and some states require their own forms, so check each state's rules.",
      },
      {
        q: "Do sales tax exemption certificates expire?",
        a: "It depends on the state and the type. Some states treat a resale certificate as valid until revoked as long as you sell to the buyer regularly, while others set an expiry period or require renewal, and some exemption numbers for nonprofits expire on a fixed date. Set a review reminder for each certificate and request a new one when it expires or the customer's details change.",
      },
      {
        q: "Does a federal tax-exempt status mean no sales tax?",
        a: "Not automatically. A 501(c)(3) determination from the IRS covers federal income tax, not state sales tax. Many states exempt some nonprofit purchases, but the organization usually needs a state-issued exemption number or certificate, and some states give no general nonprofit exemption at all. Ask for the state certificate rather than the IRS letter alone.",
      },
      {
        q: "What should I check before accepting a resale certificate?",
        a: "Check that the form is the right one for the state, all fields are complete, the buyer's name and address match your records, the permit number looks valid, the reason for exemption makes sense for what they are buying, and it is signed and dated. Many states let you verify permit numbers online. A florist buying office chairs for resale should raise questions.",
      },
      {
        q: "How long should I keep exemption certificates?",
        a: "Keep each certificate at least as long as your state can audit the sales it covers, which is commonly three or four years after the return is filed and longer in some states or if returns were not filed. Because one certificate can cover many sales over years, keep it for the full audit period after the last sale it supports. Digital copies are generally accepted.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A sales tax exemption certificate is a signed form a buyer gives a seller to prove a purchase is exempt from sales tax, for example because the goods are for resale or the buyer is a qualifying nonprofit. If you accept a complete, valid certificate in good faith, you can usually skip charging tax. Without one, you may be liable for the tax.</p>

<p>Sales tax in the US is collected by the seller, which means sellers also carry the risk when tax is not collected. Every time you sell to a wholesaler, a retailer, a school or a nonprofit without charging tax, an auditor may later ask: where is the paperwork? A sales tax exemption certificate is that paperwork. This guide explains the main types, what a valid certificate must include, multistate options, and exactly how to invoice a tax-exempt customer.</p>

<p><strong>Important:</strong> Sales tax is set by states and local governments, not the IRS, and the rules differ widely. This is general information, not tax or legal advice. Check your state department of revenue's guidance or a qualified adviser before you rely on any exemption.</p>

<h2>When a buyer can be exempt</h2>
<p>Exemptions generally fall into three groups:</p>
<ul>
<li><strong>Resale.</strong> The buyer will resell the item (or incorporate it into a product for sale), so tax will be collected later from the end customer. This is the most common exemption in B2B trade.</li>
<li><strong>Exempt entity.</strong> The buyer is a government agency, a qualifying nonprofit, school, hospital or church, depending on state law.</li>
<li><strong>Exempt use.</strong> The goods are used in a way the state exempts, such as manufacturing equipment, agricultural inputs, or items shipped out of state.</li>
</ul>
<p>Services are a separate question. Many states tax few or no services, so a freelancer selling consulting or design work may never need a certificate. Others tax a wide range of services, and the same exemption rules then apply to service invoices too. Check your state's list of taxable services before assuming you are outside the system.</p>
<p>Some products are exempt for everyone, such as groceries in many states. Those do not need a certificate; you simply do not tax them. Certificates are about the buyer and the purpose, not the product.</p>
<p>Before any of this matters, you need to know where you must collect tax at all. Our guide to <a href="/blog/sales-tax-nexus">sales tax nexus</a> explains when a state can require you to register.</p>

<h2>Types of sales tax exemption certificate</h2>
<table>
<thead><tr><th>Certificate type</th><th>Typical buyer</th><th>What it proves</th></tr></thead>
<tbody>
<tr><td>Resale certificate</td><td>Retailers, wholesalers, distributors</td><td>Goods will be resold; tax collected at final sale</td></tr>
<tr><td>Nonprofit or exempt organization certificate</td><td>Charities, schools, religious groups</td><td>Buyer holds a state exemption for its own purchases</td></tr>
<tr><td>Government purchase</td><td>Federal, state or local agencies</td><td>Purchase is by a government body, often paid directly by the agency</td></tr>
<tr><td>Manufacturing or industrial use</td><td>Manufacturers</td><td>Items are used in production as the state defines it</td></tr>
<tr><td>Agricultural</td><td>Farmers, ranchers</td><td>Items are used in qualifying farm production</td></tr>
<tr><td>Direct pay permit</td><td>Large businesses</td><td>Buyer will self-assess and pay tax directly to the state</td></tr>
</tbody>
</table>
<p>A resale certificate is the one most small businesses meet first. If you sell craft supplies to a shop that resells them, the shop gives you its resale certificate and you sell tax-free.</p>

<h2>What a valid certificate must include</h2>
<p>Forms vary by state, but most ask for the same core information:</p>
<ul>
<li>Buyer's legal name and address.</li>
<li>Buyer's state sales tax permit, registration or exemption number (or, on some multistate forms, a federal EIN or other ID).</li>
<li>The type of business and a description of what is being bought.</li>
<li>The reason for the exemption, often a checkbox.</li>
<li>Signature of an authorized person, title and date.</li>
<li>The seller's name, on some forms.</li>
</ul>
<p>Most states protect a seller who accepts a fully completed certificate in good faith. Good faith usually means the certificate is complete, and the purchase is the kind of thing this buyer could plausibly resell or use exempt. A bakery giving you a resale certificate for a delivery van should prompt questions.</p>

<h2>Multistate certificates: Streamlined and MTC</h2>
<p>If you sell into several states, collecting a different form from every buyer for every state is painful. Two multistate options help:</p>
<ul>
<li><strong>Streamlined Sales and Use Tax Certificate of Exemption.</strong> Created under the Streamlined Sales and Use Tax Agreement, it is accepted by the Streamlined member states, roughly two dozen at the time of writing. It covers resale and many other exemption reasons in one form.</li>
<li><strong>Uniform Sales and Use Tax Certificate (Multijurisdiction).</strong> Published by the Multistate Tax Commission. The MTC lists 36 states as having indicated it can be used as a resale certificate, some with conditions, and it warns that it cannot guarantee any state will accept it.</li>
</ul>
<p>Neither certificate works in every state, and some states require their own form or extra details. Check each state's current acceptance list on the Streamlined or MTC website, or the state revenue department, before relying on a multistate form.</p>

<h2>How to invoice a tax-exempt customer</h2>
<p>An exempt sale should look deliberate on the invoice, not like you forgot to add tax. Follow these steps:</p>
<ol>
<li><strong>Collect the certificate before the first sale.</strong> Do not ship and chase paperwork later.</li>
<li><strong>Check and file it.</strong> Review the fields above and store a copy linked to the customer record.</li>
<li><strong>Set tax to zero.</strong> In our <a href="/invoice-generator/usa">US invoice generator</a>, set the tax rate to 0% for that invoice.</li>
<li><strong>Explain the exemption in the notes.</strong> For example: Sales tax exempt: resale certificate on file, state permit no. 12345678.</li>
<li><strong>Use the exact legal name</strong> and address shown on the certificate.</li>
<li><strong>Add a PO number</strong> if the buyer provides one; government and nonprofit buyers often require it.</li>
<li><strong>Report the sale correctly.</strong> Most state returns ask for total sales and then exempt sales as a deduction, so keep exempt sales separately totaled.</li>
</ol>
<p>Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers how to show taxable sales, and how to <a href="/blog/tax-id-on-invoice">show tax IDs on an invoice</a>.</p>

<h3>Worked example: mixed taxable and exempt orders</h3>
<p>Sam runs a print shop in a state with a 7% combined rate. In one week he invoices:</p>
<table>
<thead><tr><th>Customer</th><th>Amount</th><th>Certificate</th><th>Sales tax</th></tr></thead>
<tbody>
<tr><td>Local cafe (menus for own use)</td><td>$800</td><td>None</td><td>$56.00</td></tr>
<tr><td>Gift shop (greeting cards to resell)</td><td>$1,500</td><td>Resale certificate</td><td>$0</td></tr>
<tr><td>School district (event posters)</td><td>$600</td><td>Government exemption</td><td>$0</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$2,900</strong></td><td></td><td><strong>$56.00</strong></td></tr>
</tbody>
</table>
<p>On his return Sam reports $2,900 gross sales, deducts $2,100 of exempt sales and pays tax on $800. If an auditor later finds he has no certificate for the gift shop, he could owe $105 (7% of $1,500) plus interest and penalties himself. You can check figures quickly with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Common mistakes sellers make</h2>
<ul>
<li><strong>Accepting an IRS 501(c)(3) letter as a sales tax exemption.</strong> Federal income tax status does not create a state sales tax exemption; ask for the state certificate.</li>
<li><strong>Taking a certificate for the wrong state.</strong> A resale permit from one state may not cover a delivery into another.</li>
<li><strong>Missing signatures or dates.</strong> Incomplete forms often lose good faith protection.</li>
<li><strong>Never renewing.</strong> Some certificates expire, and customer details change.</li>
<li><strong>Not keeping copies.</strong> In an audit, no certificate generally means taxable.</li>
<li><strong>Exempting items outside the exemption.</strong> A school's exemption usually covers purchases by the school, not by an individual teacher paying personally.</li>
</ul>

<h2>A checklist for accepting certificates</h2>
<p>If you sell to many exempt buyers, a consistent routine saves time and protects you in an audit. Use this sequence for every new exempt customer:</p>
<ol>
<li>Ask for the certificate when you open the account, before quoting tax-free prices.</li>
<li>Confirm the form matches the state where the goods are delivered, or that the state accepts the multistate form.</li>
<li>Check every required field is complete, including signature and date.</li>
<li>Verify the permit or exemption number with the state's online lookup where one exists.</li>
<li>Check that the items the buyer orders match the exemption reason.</li>
<li>Record the certificate in your customer file with any expiry or review date.</li>
<li>Flag the customer as exempt in your invoicing routine so tax is not added by mistake, and so it is added again if the certificate lapses.</li>
</ol>
<p>Blanket certificates, which cover all future purchases of a stated type from the same seller, are common for regular trade customers. A single-purchase certificate covers one order only. Note which kind you hold.</p>

<h2>Buying tax-free and drop shipping</h2>
<h3>Using your own resale certificate</h3>
<p>The same rules work in reverse when you are the buyer. If you buy stock or materials that become part of products you sell, you can usually give your suppliers your own resale certificate and avoid paying tax on those purchases. To do that you normally need to be registered for sales tax in the relevant state.</p>
<p>Use it only for items you will actually resell. Using a resale certificate for office supplies, tools or anything you consume yourself is misuse. If you later use exempt stock yourself, for example taking products from inventory for a display or for personal use, many states require you to report and pay use tax on its cost. Penalties for knowingly misusing a certificate can be significant.</p>

<h3>Drop shipping</h3>
<p>Drop shipping creates a three-party chain: you sell to a customer, and your supplier ships directly to that customer. The supplier may ask you for a resale certificate valid in the state of delivery. If you are not registered there, some states accept a home-state certificate or a multistate form and others do not, in which case the supplier may have to charge tax. Check with your suppliers and with the delivery state.</p>
<p>On your own invoice to the end customer, charge tax as normal unless that customer gives you a valid sales tax exemption certificate for the delivery state. The supplier's exemption on its sale to you does not carry through to your customer; each sale in the chain is judged on its own paperwork.</p>

<h2>Record keeping and audits</h2>
<p>Keep each sales tax exemption certificate for at least the audit period of every sale it covers, commonly three or four years after the return is filed, and longer in some states. Store them digitally, index them by customer, and record the expiry date if any. Some states let a seller obtain a certificate after the sale, within a set period, if an auditor asks; do not rely on this, because buyers may have gone out of business by then. Our <a href="/blog/invoice-audit-preparation">invoice audit preparation</a> guide covers how to organize records before a review.</p>
<p>Also check whether you need to collect a certificate for out-of-state shipments. Many states exempt goods delivered outside the state but expect proof of delivery, such as shipping records, rather than a certificate.</p>

<h2>Conclusion</h2>
<p>A sales tax exemption certificate protects you, not the buyer. Collect it before the sale, check it properly, keep it on file and make every exempt invoice show why no tax was charged. Create invoices with a zero tax rate and a clear exemption note using our <a href="/invoice-generator">free invoice generator</a>, and explore more guides in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>
`,
  },
  {
    slug: "irs-penalty-abatement",
    title: "IRS Penalty Abatement: First-Time and Reasonable Cause",
    description:
      "IRS penalty abatement explained: first-time abatement, the new automatic exemption from 2026, reasonable cause, and how to request penalty relief step by step.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "estimated-tax-penalty",
      "quarterly-estimated-taxes-freelancers",
      "self-employment-tax",
    ],
    faqs: [
      {
        q: "What is IRS penalty abatement?",
        a: "It is the removal or reduction of a penalty the IRS has charged, such as a late filing or late payment penalty. The main routes are administrative relief (first-time abatement, now becoming the Automatic Exemption from Penalty), reasonable cause, statutory exceptions such as incorrect written IRS advice, and correction of IRS errors. When a penalty is removed, the interest charged on that penalty is reduced or removed automatically.",
      },
      {
        q: "How do I qualify for first-time abatement?",
        a: "You generally need a clean compliance history for the same type of return: no penalties in the prior three years (other than an estimated tax penalty), or any penalty removed for reasonable cause. You must have filed all currently required returns or valid extensions, and paid or arranged to pay the tax due. Businesses face extra conditions for failure-to-deposit penalties.",
      },
      {
        q: "What is the IRS Automatic Exemption from Penalty?",
        a: "Announced by the IRS on July 8, 2026, it replaces first-time abatement with an automatic process. If you filed and paid on time for the prior three years, failure-to-file, failure-to-pay and failure-to-deposit penalties are not assessed when your eligible return is processed, and you receive a notice confirming the relief. It starts with 2025 returns and 2026 quarterly returns and fully replaces first-time abatement for returns originally due on or after January 1, 2027.",
      },
      {
        q: "What counts as reasonable cause for IRS penalty relief?",
        a: "The IRS lists examples such as fires, natural disasters or civil disturbances; being unable to get records; death, serious illness or unavoidable absence of you or an immediate family member; and system issues that delayed an electronic filing or payment. You must show you used ordinary business care and prudence and still could not comply, and that you acted quickly once the problem ended.",
      },
      {
        q: "Is relying on my accountant reasonable cause?",
        a: "Usually not for filing and payment deadlines. The IRS says you remain responsible for your returns and should confirm they were filed and paid on time. Reliance on a professional may support relief from accuracy-related penalties if you gave the adviser complete information and the adviser was competent. Wrong written advice from the IRS itself can qualify for relief under a separate statutory exception.",
      },
      {
        q: "How do I request IRS penalty abatement?",
        a: "Call the toll-free number on your penalty notice and ask for relief; many requests are approved by phone. If that fails, send Form 843, Claim for Refund and Request for Abatement, or a signed letter explaining the facts and including supporting documents. You do not need to name first-time abatement specifically; the IRS checks your account. If refused, you can appeal.",
      },
      {
        q: "Can first-time abatement remove the estimated tax penalty?",
        a: "No. The estimated tax penalty is not covered by first-time abatement or the new automatic exemption. Its relief is limited to waivers requested on Form 2210 for casualty, disaster or other unusual circumstances, or for people who retired after age 62 or became disabled with reasonable cause. Having an estimated tax penalty in an earlier year does not stop you qualifying for first-time abatement of other penalties.",
      },
      {
        q: "Does penalty abatement remove interest?",
        a: "Interest on the abated penalty is removed or reduced automatically. Interest on the underlying tax is not, because interest is charged by law until the tax is paid. The IRS can only abate interest in limited cases, such as unreasonable delays caused by IRS errors. So even after successful abatement, you will still owe the original tax and the interest on that tax.",
      },
      {
        q: "What are the IRS late filing and late payment penalties in 2026?",
        a: "The failure-to-file penalty is 5% of unpaid tax per month or part month, up to 25%. For returns more than 60 days late and due after December 31, 2025, the minimum is $525 or 100% of the tax owed, whichever is less. The failure-to-pay penalty is 0.5% per month up to 25%, falling to 0.25% under an approved payment plan if you filed on time.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> IRS penalty abatement is the removal of penalties for late filing, late payment or late deposits. If you have a clean three-year record, first-time abatement (now being replaced by the automatic exemption announced in July 2026) usually removes them. Otherwise you can request relief for reasonable cause by calling the number on your notice or filing Form 843.</p>

<p>Getting a penalty notice from the IRS is stressful, especially when the penalty is larger than you expected. The good news is that the IRS removes many penalties every year, and some relief is now applied automatically. This guide explains IRS penalty abatement for small business owners and freelancers: which penalties qualify, how first-time abatement and the new Automatic Exemption from Penalty work, what counts as reasonable cause and how to request relief step by step.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Large penalties, business payroll penalties and appeals can be complex. A qualified tax adviser, enrolled agent or the Taxpayer Advocate Service can help if your case is not straightforward.</p>

<h2>Common IRS penalties and what they cost</h2>
<table>
<thead><tr><th>Penalty</th><th>Rate (individuals)</th><th>Maximum</th></tr></thead>
<tbody>
<tr><td>Failure to file</td><td>5% of unpaid tax per month or part month</td><td>25%; minimum $525 (or 100% of tax if less) for returns due after December 31, 2025 that are over 60 days late</td></tr>
<tr><td>Failure to pay</td><td>0.5% of unpaid tax per month; 0.25% under an approved payment plan if filed on time; 1% after a notice of intent to levy</td><td>25%</td></tr>
<tr><td>Failure to deposit (payroll)</td><td>2% to 15% depending on how late</td><td>15%</td></tr>
<tr><td>Estimated tax underpayment</td><td>IRS underpayment rate (7% a year for Q4 2026)</td><td>Interest-style, no cap</td></tr>
<tr><td>Accuracy-related</td><td>20% of the underpayment</td><td>20% (higher in some cases)</td></tr>
</tbody>
</table>
<p>In any month when both failure-to-file and failure-to-pay apply, the failure-to-file penalty is reduced by the failure-to-pay amount. Filing on time, even if you cannot pay, is the single best way to cut penalties, because the late filing penalty is ten times the late payment one.</p>

<h3>Worked example</h3>
<p>Alex, a freelance developer, owes $10,000 on his 2025 return. He files and pays three months late. Failure to pay: 0.5% x 3 = 1.5%, or $150. Failure to file: 5% x 3 = 15%, reduced by the 1.5% failure-to-pay amount, so 13.5%, or $1,350. Total penalties: $1,500, plus interest on the tax and on the penalties. If Alex has a clean three-year record, IRS penalty abatement through first-time abatement or the new automatic exemption removes the $1,500 and the interest on it are removed. He still owes the $10,000 and the interest on that tax.</p>

<h2>Route 1: first-time abatement</h2>
<p>First-time abatement (FTA) is an administrative waiver. It does not require any explanation of why you were late; it rewards a good record. You generally qualify if:</p>
<ul>
<li>You had no penalties for the same type of return in the prior three tax years (12 quarters for quarterly returns), other than an estimated tax penalty, or any penalties were removed for reasonable cause.</li>
<li>You have filed all currently required returns, or valid extensions.</li>
<li>You have paid, or arranged to pay through a payment plan, the tax due.</li>
</ul>
<p>It covers failure-to-file, failure-to-pay and failure-to-deposit penalties, regardless of amount. It does not cover the estimated tax penalty, accuracy-related penalties or penalties on one-off filings such as estate and gift tax returns. You do not need to use the words first-time abatement; when you ask for relief, the IRS checks whether you qualify. If you can only get partial relief because the failure-to-pay penalty keeps growing until you pay, pay the balance first, then request abatement.</p>

<h2>Route 2: the new Automatic Exemption from Penalty</h2>
<p>On July 8, 2026, the IRS announced the Automatic Exemption from Penalty (AEP). Instead of charging a penalty and waiting for you to ask for removal, the IRS will simply not assess failure-to-file, failure-to-pay and failure-to-deposit penalties for eligible taxpayers when it processes the return. Key points from the IRS announcement:</p>
<ul>
<li>It applies to eligible original returns for tax year 2025 and later, and 2026 quarterly returns, including Forms 1040, 1065, 1120, 940, 941, 943, 944, 945 and CT-1.</li>
<li>Eligibility mirrors FTA: you filed on time and paid any tax due for the prior three years (or 12 quarters).</li>
<li>You do not need to do anything. The IRS sends a notice confirming the relief.</li>
<li>AEP replaces FTA for eligible returns with original due dates on or after January 1, 2027.</li>
<li>During the 2026 transition, some eligible taxpayers may still receive penalty notices. If you think you qualified, contact the IRS and request first-time abatement.</li>
</ul>
<p>Tax and interest are still due, and information returns and infrequent filings are generally excluded. If you do not qualify for AEP, you can still request relief for reasonable cause.</p>

<h2>Route 3: reasonable cause</h2>
<p>Reasonable cause relief applies when you used ordinary business care and prudence but still could not file or pay on time. The IRS gives these examples:</p>
<ul>
<li>Fire, natural disaster or civil disturbance.</li>
<li>Inability to obtain records.</li>
<li>Death, serious illness or unavoidable absence of you or an immediate family member.</li>
<li>System issues that delayed a timely electronic filing or payment.</li>
</ul>
<p>The IRS says these generally do not qualify on their own: relying on a tax professional to file, not knowing the rules, simple mistakes or forgetfulness, and lack of funds (though lack of funds can support relief if you otherwise acted carefully). Each case is decided on its facts.</p>
<p>A strong reasonable cause request answers four questions: what happened, when it happened, how it stopped you meeting the deadline, and what you did to comply once the problem ended. Back it with documents such as hospital records with dates, a death certificate, insurance claims or disaster declarations.</p>

<h2>Other grounds for relief</h2>
<ul>
<li><strong>Statutory exception:</strong> you relied on incorrect written advice from the IRS.</li>
<li><strong>Disaster relief:</strong> the IRS often extends deadlines automatically for taxpayers in federally declared disaster areas, so penalties should not apply for that period.</li>
<li><strong>IRS error:</strong> if the penalty is wrong, for example a payment was misapplied, ask the IRS to correct its records.</li>
<li><strong>Estimated tax penalty waiver:</strong> requested on Form 2210 for casualty, disaster or unusual circumstances, or retirement after 62 or disability. See our <a href="/blog/estimated-tax-penalty">estimated tax penalty guide</a>.</li>
</ul>

<h2>How to request IRS penalty abatement step by step</h2>
<ol>
<li><strong>Read the notice.</strong> Identify the tax year, the form, the penalty type and amount.</li>
<li><strong>Fix the underlying problem.</strong> File any missing returns and pay what you can, or set up a payment plan. Relief is easier when your account is current.</li>
<li><strong>Call the number on the notice.</strong> Have the notice, your reasons and your documents ready. Many first-time abatement requests are approved over the phone.</li>
<li><strong>If needed, write.</strong> File Form 843, Claim for Refund and Request for Abatement, or a signed letter explaining your facts, with copies of supporting documents. Send it to the address in the notice or Form 843 instructions.</li>
<li><strong>Keep records.</strong> Note the date, the name or ID of the IRS employee and what was agreed.</li>
<li><strong>Appeal if refused.</strong> The denial letter explains your appeal rights. You can also contact the Taxpayer Advocate Service if you are facing hardship.</li>
</ol>
<p>Choose your route carefully. If you have a strong reasonable cause case and also qualify for first-time abatement, some advisers prefer to request reasonable cause first, saving FTA for a later year. Under the new automatic process this choice may matter less, so ask your adviser.</p>

<h2>How to write a reasonable cause letter</h2>
<p>If a phone call does not resolve things, a clear letter or Form 843 statement makes the reviewer's job easy. Keep it factual and short, and structure it like this:</p>
<ol>
<li><strong>Identify yourself and the penalty.</strong> Name, taxpayer ID, tax form, tax year, notice number and the penalty amount you want removed.</li>
<li><strong>State the request.</strong> One sentence asking for the penalty to be removed for reasonable cause.</li>
<li><strong>Tell the story with dates.</strong> What happened, when it started and when it ended. For example: hospitalized from March 28 to April 20, 2026, with no one else able to prepare the return.</li>
<li><strong>Show you acted with care.</strong> Your filing history, the steps you took before the deadline, and how quickly you filed and paid once you could.</li>
<li><strong>Attach evidence.</strong> Copies, not originals, of hospital records, insurance claims, a death certificate, disaster declarations or bank records showing a failed payment.</li>
<li><strong>Sign and date it.</strong> Keep a copy and proof of mailing.</li>
</ol>
<p>Avoid long emotional narratives, vague phrases such as personal difficulties without dates, and blaming the IRS or your preparer. If your reason only covers part of the late period, say so; partial relief is better than a denial.</p>

<h2>Business and payroll penalties</h2>
<p>Small employers face a separate set of penalties that also qualify for administrative relief. The failure-to-deposit penalty for payroll taxes starts at 2% for deposits up to five days late, rises to 5% at six to 15 days and 10% after that, and reaches 15% if the tax is still unpaid more than 10 days after an IRS notice. First-time abatement and the new automatic exemption can cover it, but the IRS also checks that failure-to-deposit relief has not been granted four or more times in the prior three years and that the penalty was not for avoiding EFTPS. Partnerships and S corporations that file late face a monthly penalty per partner or shareholder, $255 per person per month for returns due after December 31, 2025, for up to 12 months. These add up quickly, so ask for relief promptly.</p>
<p>Information return penalties, such as for late or missing Forms 1099-NEC to contractors, follow their own rules. Relief generally requires showing you acted responsibly before and after the failure and that significant mitigating factors or events outside your control caused it. Good contractor records and collecting a W-9 before the first payment make these penalties much less likely.</p>

<h2>Preventing penalties in the first place</h2>
<p>IRS penalty abatement is a safety net, not a plan. Most self-employed penalties come from the same few habits, and they are easy to fix:</p>
<ul>
<li><strong>File on time even if you cannot pay.</strong> Or file an extension; remember an extension to file is not an extension to pay.</li>
<li><strong>Make quarterly estimated payments.</strong> See our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>, and remember <a href="/blog/self-employment-tax">self-employment tax</a> is part of the bill.</li>
<li><strong>Set aside tax from every payment.</strong> A separate account helps; see our <a href="/blog/business-bank-account-for-freelancers">business bank account guide</a>.</li>
<li><strong>Keep good income records.</strong> Clear, numbered invoices make it easy to reconcile 1099 forms and avoid accuracy penalties. Our <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold guide</a> explains what clients report.</li>
<li><strong>Track cash flow.</strong> A simple <a href="/blog/cash-flow-forecast">cash flow forecast</a> shows months when tax payments will be tight.</li>
</ul>

<h2>Conclusion</h2>
<p>If you have a clean history, IRS penalty abatement is often just a phone call away, and from 2027 most of that relief will happen automatically. If you do not qualify, a well-documented reasonable cause request is your next route. Either way, the best defense is good records. Track every sale with numbered invoices from our <a href="/invoice-generator">free invoice generator</a>, and find more help in our <a href="/blog/category/tax-compliance">tax compliance guides</a>.</p>
`,
  },
];
