import type { PostDraft } from "../blog";

export const GIG_TAXES_2026_POSTS: PostDraft[] = [
  {
    slug: "doordash-taxes",
    title: "DoorDash Taxes: 1099, Mileage and Deductions",
    description:
      "DoorDash taxes for 2026: the 1099-NEC and $2,000 threshold, the 72.5 and 76 cent mileage rates, deductions, self-employment tax and quarterly payments.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["irs-mileage-rate-2026", "self-employment-tax", "1099-nec-threshold-2026"],
    faqs: [
      {
        q: "Does DoorDash take taxes out of my pay?",
        a: "No. Dashers are independent contractors, so DoorDash does not withhold income tax, Social Security or Medicare from your earnings. You are responsible for paying both income tax and self-employment tax yourself, usually through quarterly estimated payments. A simple habit is to move 20% to 30% of each weekly payout into a separate savings account so the money is there when estimated payments and your annual return come due.",
      },
      {
        q: "Will I get a 1099 from DoorDash if I earned less than $2,000?",
        a: "Possibly not. For payments made in 2026, the Form 1099-NEC reporting threshold rose to $2,000 under the One Big Beautiful Bill Act, up from $600 for 2025 payments. DoorDash may still send one voluntarily. Either way, all your Dasher income is taxable and must be reported, and you owe self-employment tax once your net earnings reach $400 for the year.",
      },
      {
        q: "Can I deduct gas if I use the standard mileage rate?",
        a: "No. The standard mileage rate already covers gas, oil, repairs, insurance, registration and depreciation. If you use it, you cannot also deduct those costs. You can still deduct business parking fees and tolls separately. The alternative is the actual expense method, where you deduct the business share of real car costs, which requires keeping every receipt plus a mileage log.",
      },
      {
        q: "Are DoorDash tips taxable?",
        a: "Yes. Customer tips paid through the app are part of your earnings and are included in the amount DoorDash reports. For 2025 through 2028, federal law allows a deduction for qualified tips of up to $25,000 for workers in occupations on the IRS list, with income limits and a cap at the net income of the business for self-employed workers. The deduction reduces income tax only; self-employment tax still applies to the tips.",
      },
      {
        q: "What miles can a Dasher deduct?",
        a: "Business miles driven while dashing: driving to restaurants, delivering orders and driving between deliveries. Many tax professionals also treat driving while waiting for or heading to the next order as business miles once you are on a dash. Personal trips are not deductible. Because the Dasher app does not capture every business mile, use a mileage tracking app or a written log with dates, miles and purpose.",
      },
      {
        q: "Where do I report DoorDash income on my tax return?",
        a: "On Schedule C, Profit or Loss from Business, filed with your Form 1040. List your gross earnings, subtract your expenses such as mileage, phone and supplies, and the net profit flows to your income and to Schedule SE for self-employment tax. If you also drive for other apps, combine them on one Schedule C if they are the same type of business, or keep separate records for each.",
      },
      {
        q: "What happens if I do not pay quarterly estimated taxes?",
        a: "You may owe an underpayment penalty, calculated like interest on each late or short quarterly payment, on top of the tax itself. You can usually avoid it if your total payments and withholding cover 90% of this year's tax or 100% of last year's (110% if your prior-year AGI was over $150,000). A W-2 job can help: increasing withholding there counts as if paid evenly through the year.",
      },
    ],
    content: `
<p>DoorDash taxes come down to this: as a Dasher you are self-employed, so nothing is withheld, and you pay income tax plus 15.3% self-employment tax on your profit after deductions. Your biggest deduction is almost always mileage, worth 72.5 cents per business mile for January to June 2026 and 76 cents from July 1. DoorDash reports your earnings on Form 1099-NEC, now generally required only when you earn $2,000 or more in 2026, but all of it is taxable whether or not a form arrives.</p>

<p>This guide covers the forms, what to deduct, a worked example with real-looking numbers, quarterly payments and the mistakes that cost Dashers the most. It is general information, not tax advice; a tax professional can check your situation.</p>

<h2>How DoorDash taxes work for Dashers</h2>
<p>Dashers sign up as independent contractors. That means three things for tax purposes:</p>
<ul>
<li><strong>No withholding.</strong> DoorDash pays your gross earnings, including tips, with no income tax or FICA taken out.</li>
<li><strong>You run a small business.</strong> You report income and expenses on Schedule C, and your profit, not your gross pay, is taxed.</li>
<li><strong>You pay self-employment tax.</strong> That is Social Security and Medicare for the self-employed, 15.3% on 92.35% of net earnings once they reach $400 for the year. Our guide to <a href="/blog/self-employment-tax">self-employment tax</a> explains the calculation and the $184,500 Social Security wage base for 2026.</li>
</ul>

<h2>DoorDash 1099 forms: what you get and when</h2>
<p>DoorDash reports Dasher earnings on Form 1099-NEC (nonemployee compensation). Dashers typically receive tax forms electronically; DoorDash has used Stripe Express and the Dasher portal for delivery, so watch for an email in January asking you to confirm your tax information, and check your spam folder.</p>
<table><thead><tr><th>Payment year</th><th>1099-NEC threshold</th><th>Form due to you</th></tr></thead><tbody>
<tr><td>2025</td><td>$600</td><td>Early 2026</td></tr>
<tr><td>2026</td><td>$2,000 (One Big Beautiful Bill Act)</td><td>By early February 2027</td></tr>
<tr><td>2027 onward</td><td>$2,000 adjusted for inflation</td><td>Following January</td></tr>
</tbody></table>
<p>Two points cause confusion. First, the threshold only decides whether DoorDash must send a form; it does not decide whether you owe tax. Second, the 1099-NEC shows gross earnings including tips, before your expenses. Your taxable profit is usually far lower once mileage is deducted. For the full background on the threshold change, see the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a>.</p>

<h2>Dasher mileage: the deduction that matters most</h2>
<p>Most Dashers use the standard mileage rate. For 2026 the IRS set 72.5 cents per business mile for January 1 to June 30, then raised it midyear to 76 cents for July 1 to December 31, as reported in <a href="https://www.cpapracticeadvisor.com/2026/07/16/rising-fuel-costs-prompt-irs-to-raise-standard-mileage-rates-for-rest-of-2026/186784/" target="_blank" rel="noopener noreferrer">coverage of the IRS midyear increase</a>. That means your log must separate miles before and after July 1. Our <a href="/blog/irs-mileage-rate-2026">IRS mileage rate 2026</a> guide has the full rate history.</p>

<h3>Standard mileage vs actual expenses</h3>
<table><thead><tr><th>Method</th><th>What you deduct</th><th>Records needed</th><th>Usually better for</th></tr></thead><tbody>
<tr><td>Standard mileage rate</td><td>Business miles x rate, plus parking and tolls</td><td>Mileage log</td><td>Fuel-efficient or older paid-off cars, high mileage</td></tr>
<tr><td>Actual expenses</td><td>Business share of gas, repairs, insurance, depreciation or lease, registration</td><td>Mileage log plus every receipt</td><td>Expensive vehicles, low mileage, high repair costs</td></tr>
</tbody></table>
<p>If you own the car, you generally must use the standard rate in the first year you use it for business if you want the option to switch between methods in later years. Our comparison of <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> runs the numbers on both.</p>

<h3>What counts as a business mile</h3>
<p>Miles driven to pick up orders, to deliver them and between deliveries are business miles. Many preparers also count miles driven while on an active dash waiting for or heading toward the next order. Driving from home to your first pickup is a grey area for people without a home office as their principal place of business, so document it and ask your preparer. Do not rely on the app alone: it tracks some active-delivery miles but not everything you drive while working. A mileage app or a simple mileage log with date, start and end odometer readings and purpose is the evidence the IRS expects.</p>

<h2>Other DoorDash tax deductions</h2>
<ul>
<li><strong>Phone and data plan:</strong> the business-use percentage. If 60% of use is dashing, deduct 60%.</li>
<li><strong>Hot bags, phone mounts, chargers and car accessories</strong> used for deliveries.</li>
<li><strong>Parking fees and tolls</strong> while dashing, even with the standard mileage rate.</li>
<li><strong>Red Card or delivery supplies</strong> you buy yourself.</li>
<li><strong>Tax preparation fees</strong> for the business part of your return.</li>
<li><strong>Half of your self-employment tax</strong>, as an adjustment to income.</li>
<li><strong>Health insurance premiums</strong> if you are not eligible for an employer plan, through the self-employed health insurance deduction.</li>
<li><strong>The QBI deduction</strong>, up to 20% of qualified business income for many Dashers, subject to income limits.</li>
</ul>
<p>Not deductible: traffic tickets, meals you eat while dashing, and clothing you could wear anywhere. For the wider list, see <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>

<h2>Worked example: a part-time Dasher's 2026 taxes</h2>
<p>This example is illustrative. Jordan dashes part-time in 2026, earning $28,000 including tips, and drives 14,000 business miles: 7,000 before July 1 and 7,000 after.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross DoorDash earnings (1099-NEC)</td><td></td><td>$28,000.00</td></tr>
<tr><td>Mileage, Jan to Jun</td><td>7,000 x $0.725</td><td>-$5,075.00</td></tr>
<tr><td>Mileage, Jul to Dec</td><td>7,000 x $0.76</td><td>-$5,320.00</td></tr>
<tr><td>Phone (50% of $900)</td><td></td><td>-$450.00</td></tr>
<tr><td>Hot bags, mount, chargers</td><td></td><td>-$120.00</td></tr>
<tr><td>Parking and tolls</td><td></td><td>-$185.00</td></tr>
<tr><td><strong>Net profit (Schedule C)</strong></td><td></td><td><strong>$16,850.00</strong></td></tr>
<tr><td>Self-employment tax base</td><td>$16,850 x 92.35%</td><td>$15,560.98</td></tr>
<tr><td><strong>Self-employment tax</strong></td><td>$15,560.98 x 15.3%</td><td><strong>$2,380.83</strong></td></tr>
<tr><td>Deduction for half of SE tax</td><td></td><td>$1,190.42</td></tr>
</tbody></table>
<p>Jordan's mileage alone cut taxable profit by more than $10,000, saving roughly $1,500 in self-employment tax plus income tax. Income tax depends on Jordan's other income, filing status and deductions, so the total bill varies, but the SE tax portion is fixed by the profit figure.</p>

<h2>Quarterly estimated taxes for Dashers</h2>
<p>If you expect to owe $1,000 or more when you file, the IRS expects quarterly estimated payments using Form 1040-ES. The remaining 2026 payment is due January 15, 2027; the first 2027 payments fall on April 15, June 15 and September 15, 2027. Pay online through IRS Direct Pay or your IRS online account.</p>
<ol>
<li><strong>Estimate net profit</strong> for the quarter: earnings minus mileage and other expenses.</li>
<li><strong>Apply a rough rate.</strong> Many Dashers set aside 25% to 30% of profit to cover SE tax and income tax.</li>
<li><strong>Check the safe harbor.</strong> Paying 100% of last year's total tax (110% if prior-year AGI exceeded $150,000) generally avoids penalties.</li>
<li><strong>Pay and save the confirmation</strong> with your tax records.</li>
</ol>
<p>Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> walks through the worksheet, and the new guide to the <a href="/blog/underpayment-penalty-form-2210">underpayment penalty and Form 2210</a> explains what happens if you fall short.</p>

<h2>Tips and the no tax on tips deduction</h2>
<p>From 2025 through 2028, workers in occupations that customarily received tips can deduct up to $25,000 of qualified tips, phasing out above $150,000 of modified AGI ($300,000 joint). For self-employed workers, the deduction cannot exceed the net income of the business where the tips were earned, and the IRS's occupation list groups delivery work under transportation and delivery. Confirm that your role is covered before claiming it. The deduction affects income tax only; self-employment tax still applies. See <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</p>

<h2>Why your tax bill feels higher than an employee's</h2>
<p>New Dashers are often surprised by the bill because two taxes stack. An employee pays 7.65% for Social Security and Medicare while the employer pays the other 7.65%. As a Dasher you pay both halves, 15.3%, through self-employment tax, and then income tax on top. The deduction for half of your SE tax and the QBI deduction soften this, but the combined rate on each extra dollar of profit can still be 25% to 35% for many middle-income Dashers. The upside is that every legitimate business deduction lowers both taxes at once, which is why mileage records pay off so well.</p>
<h3>What if the IRS says your income does not match?</h3>
<p>The IRS matches the 1099-NEC DoorDash files against your return. If you leave out a 1099, or report it in a way the system cannot match, you may receive a CP2000 notice proposing extra tax, penalties and interest. Respond by the deadline on the notice, agree or explain with records, and attach a reconciliation if the income was reported elsewhere on your return. Our new guide to the <a href="/blog/irs-cp2000-notice">IRS CP2000 notice</a> walks through the response. Most mismatches come from Dashers who also drive for other apps and lump all income into one line without showing the totals by payer.</p>

<h2>Common DoorDash tax mistakes</h2>
<ul>
<li><strong>Reporting only the 1099 total</strong> and forgetting income from a second app or from months below the threshold.</li>
<li><strong>No mileage log.</strong> Reconstructing miles at tax time is hard to defend in an audit.</li>
<li><strong>Using one rate for all of 2026.</strong> Miles after July 1 earn 76 cents.</li>
<li><strong>Deducting gas on top of standard mileage.</strong> It is already included.</li>
<li><strong>Skipping estimated payments</strong> and facing a large April bill plus penalties.</li>
<li><strong>Mixing personal and Dasher money.</strong> A separate account makes Schedule C far easier.</li>
</ul>

<h2>Keeping records like a business</h2>
<p>Download your weekly pay statements, keep the 1099-NEC, and store receipts for supplies and phone bills. If you also take private delivery or errand jobs outside the app, bill those customers with a proper invoice so every dollar has a paper trail. Our guide to <a href="/blog/side-hustle-taxes">side hustle taxes</a> covers mixing app work with your own clients.</p>
<p>For any work you do outside DoorDash, create professional invoices with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add mileage or delivery fees as line items, and download a PDF in seconds.</p>
`,
  },
  {
    slug: "instacart-shopper-taxes",
    title: "Instacart Shopper Taxes: What to Report and Deduct",
    description:
      "Instacart taxes for full-service shoppers: the 1099-NEC, the 2026 $2,000 threshold, mileage at 72.5 and 76 cents, deductions, tips and quarterly payments.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "standard-mileage-vs-actual-expenses",
      "quarterly-estimated-taxes-freelancers",
      "side-hustle-taxes",
    ],
    faqs: [
      {
        q: "Do Instacart shoppers get a W-2 or a 1099?",
        a: "Full-service shoppers, who shop and deliver using their own vehicle, are independent contractors and receive Form 1099-NEC if they reach the reporting threshold. Instacart does not withhold tax from their pay. In-store shopper roles, where they exist, have generally been employee positions paid through payroll with a W-2. Check your onboarding agreement if you are unsure which type of shopper you are, because the tax treatment is completely different.",
      },
      {
        q: "How do I get my Instacart 1099?",
        a: "Instacart provides the 1099-NEC to eligible shoppers early in the year, typically through the Shopper app or an emailed link. In earlier years forms were delivered through Stripe Express, but Stripe's support pages say more recent Instacart forms are not delivered through Stripe and shoppers should contact Instacart instead. Make sure your legal name, address and taxpayer ID are correct in the app before the end of the year.",
      },
      {
        q: "Do I have to report Instacart income if I did not get a 1099?",
        a: "Yes. All self-employment income is reportable regardless of whether you receive a form. For 2026 payments, a 1099-NEC is generally required only at $2,000 or more, so a shopper who earned $1,500 may receive no form but still must report the income. Self-employment tax applies once net earnings from all your self-employment reach $400 for the year.",
      },
      {
        q: "Are Instacart tips taxable?",
        a: "Yes. Tips are income and are generally included in your earnings. Customer tips paid through the app go to you, and those tips are subject to self-employment tax. A separate federal deduction for qualified tips applies for 2025 through 2028 to workers in listed tipped occupations, capped at $25,000 and limited to the net income of the business for self-employed workers. Check that your work qualifies before claiming it.",
      },
      {
        q: "Can I deduct my insulated bags and phone as an Instacart shopper?",
        a: "Yes, if you buy them for your shopping work. Insulated bags, a phone mount and a car charger used for batches are deductible business supplies. Your phone and data plan are deductible in proportion to business use; if you use the phone 50% for Instacart, deduct 50% of the bill. Keep receipts and a short note of how you estimated the business percentage.",
      },
      {
        q: "Can I deduct miles driven to the store?",
        a: "Generally yes once you are working: miles from accepting a batch to the store, from the store to the customer, and between batches are business miles. Miles from home to the first store are less clear and depend on whether your home is your principal place of business, so record them and ask a preparer. Use a mileage app or log, and split 2026 miles before and after July 1 because the rate changed.",
      },
    ],
    content: `
<p>Instacart shopper taxes work like any small business: full-service shoppers are independent contractors, so Instacart withholds nothing, and you pay income tax plus self-employment tax on your profit after expenses. You report earnings, including tips, on Schedule C, and deduct mileage, insulated bags, phone costs and parking. Instacart reports your earnings on Form 1099-NEC, generally required for 2026 if you earn $2,000 or more.</p>

<p>Many shoppers pay more than they need to because they lose track of miles, or less than they should because they skip quarterly payments and get hit with penalties. This guide covers which form you get, what to deduct, a full worked example and a simple tax-saving routine. It is general information, not tax advice.</p>

<h2>Full-service vs in-store shoppers: why it matters</h2>
<table><thead><tr><th>Factor</th><th>Full-service shopper</th><th>In-store shopper (employee roles)</th></tr></thead><tbody>
<tr><td>Status</td><td>Independent contractor</td><td>Employee</td></tr>
<tr><td>Tax form</td><td>1099-NEC</td><td>W-2</td></tr>
<tr><td>Withholding</td><td>None</td><td>Income tax and FICA withheld</td></tr>
<tr><td>Where reported</td><td>Schedule C and Schedule SE</td><td>Wages line of Form 1040</td></tr>
<tr><td>Can deduct mileage and supplies?</td><td>Yes, as business expenses</td><td>No federal deduction for unreimbursed employee expenses</td></tr>
</tbody></table>
<p>The rest of this guide is for full-service shoppers. If you are unsure which you are, our explainer on <a href="/blog/w2-vs-1099">W-2 vs 1099</a> shows the differences in practice.</p>

<h2>Your Instacart 1099-NEC</h2>
<p>Instacart issues Form 1099-NEC to shoppers who meet the reporting threshold, showing gross payments including tips and any bonuses. In earlier years shoppers downloaded forms through Stripe Express, but Stripe's <a href="https://support.stripe.com/express/questions/guide-to-1099-tax-forms-for-instacart-shoppers" target="_blank" rel="noopener noreferrer">guide for Instacart shoppers</a> says recent forms are not delivered through Stripe and directs shoppers to Instacart. Look in the Shopper app and your email in January.</p>
<table><thead><tr><th>Payment year</th><th>1099-NEC reporting threshold</th></tr></thead><tbody>
<tr><td>2025</td><td>$600</td></tr>
<tr><td>2026</td><td>$2,000</td></tr>
<tr><td>2027 and later</td><td>$2,000, indexed for inflation</td></tr>
</tbody></table>
<p>If you also received money through a payment app or card processor for your own side business, you might separately receive a 1099-K, which follows its own $20,000 and 200-transaction federal threshold. Our <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> guide explains which form covers what, so you do not report the same income twice.</p>

<h2>What Instacart shoppers can deduct</h2>
<h3>Mileage</h3>
<p>For most shoppers, mileage is the largest deduction. The IRS standard rate for 2026 is 72.5 cents per business mile for January to June and 76 cents from July 1 to December 31, after a midyear increase driven by fuel prices. Track business miles every day you shop: to the store after accepting a batch, store to customer, and between batches. Parking and tolls are deductible on top of the standard rate. Our <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> guide compares the two methods.</p>

<h3>Other common deductions</h3>
<ul>
<li><strong>Insulated bags, coolers and crates</strong> used for groceries.</li>
<li><strong>Phone and data</strong>, at your business-use percentage.</li>
<li><strong>Phone mount, car charger and power bank.</strong></li>
<li><strong>Parking fees and tolls</strong> while on batches.</li>
<li><strong>Shopper-specific supplies</strong> such as reusable gloves or a hand truck for heavy orders.</li>
<li><strong>Half of self-employment tax</strong> and, if eligible, the 20% QBI deduction.</li>
</ul>
<p>Groceries you buy for yourself while shopping, your car payment when using standard mileage, and commuting to a job unrelated to Instacart are not deductible. For a broader list, see <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>

<h2>Worked example: Instacart shopper taxes for 2026</h2>
<p>This example is illustrative. Priya shops full-service batches in 2026 and earns $22,400 including $6,900 in tips. She drives 9,800 business miles: 4,600 before July 1 and 5,200 after.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross Instacart earnings</td><td></td><td>$22,400.00</td></tr>
<tr><td>Mileage Jan to Jun</td><td>4,600 x $0.725</td><td>-$3,335.00</td></tr>
<tr><td>Mileage Jul to Dec</td><td>5,200 x $0.76</td><td>-$3,952.00</td></tr>
<tr><td>Phone (55% of $840)</td><td></td><td>-$462.00</td></tr>
<tr><td>Insulated bags and cooler</td><td></td><td>-$95.00</td></tr>
<tr><td>Parking</td><td></td><td>-$140.00</td></tr>
<tr><td><strong>Net profit</strong></td><td></td><td><strong>$14,416.00</strong></td></tr>
<tr><td>SE tax base</td><td>$14,416 x 92.35%</td><td>$13,313.18</td></tr>
<tr><td><strong>Self-employment tax</strong></td><td>$13,313.18 x 15.3%</td><td><strong>$2,036.92</strong></td></tr>
</tbody></table>
<p>Without a mileage log, Priya's taxable profit would be $7,287 higher, adding about $1,030 in self-employment tax alone before income tax. If her tips qualify for the tips deduction, she could also reduce income tax on part of the $6,900, but not self-employment tax.</p>

<h2>Paying tax during the year</h2>
<p>Because nothing is withheld, the IRS expects quarterly estimated payments if you will owe $1,000 or more. The final 2026 installment is due January 15, 2027, followed by April 15, June 15 and September 15, 2027 for the 2027 tax year. Our <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> guide shows how to calculate them, and the IRS's <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer">self-employment tax page</a> explains the 15.3% rate.</p>
<h3>A simple weekly routine</h3>
<ol>
<li><strong>After each payout</strong>, move a fixed share, often 25%, to a tax savings account.</li>
<li><strong>Every Sunday</strong>, export or note your weekly business miles.</li>
<li><strong>Each month</strong>, photograph receipts for supplies and save your phone bill.</li>
<li><strong>Each quarter</strong>, total profit to date and pay your estimate online.</li>
<li><strong>In January</strong>, download your 1099-NEC and compare it with your own records.</li>
</ol>
<p>If you have a W-2 job too, increasing withholding there through a new Form W-4 can replace some or all quarterly payments. Line 4(c) of Form W-4 is where you add a flat extra amount per paycheck to cover side income.</p>

<h2>What if you did not keep a mileage log?</h2>
<p>It happens, especially in a shopper's first year. You cannot invent numbers, but you can rebuild a reasonable record from evidence that already exists. The IRS expects records made at or near the time, so a reconstruction is weaker than a real log, but it is far better than nothing.</p>
<ol>
<li><strong>Export your batch history</strong> from the Shopper app, which shows dates, stores and delivery locations.</li>
<li><strong>Map each batch</strong>: store to customer, then on to the next store, using a mapping tool to estimate distances.</li>
<li><strong>Check against odometer evidence</strong> such as service receipts and inspection records that show total miles for the year.</li>
<li><strong>Keep the working</strong> in a spreadsheet and save it with your return.</li>
<li><strong>Start a real log today</strong> with an app that records trips automatically.</li>
</ol>
<p>Be conservative with a rebuilt log. Claiming more business miles than your odometer shows for the whole year is an easy red flag.</p>

<h2>Instacart compared with other delivery apps</h2>
<table><thead><tr><th>Issue</th><th>Instacart full-service</th><th>Restaurant delivery apps</th></tr></thead><tbody>
<tr><td>Worker status</td><td>Independent contractor</td><td>Independent contractor</td></tr>
<tr><td>Main form</td><td>1099-NEC from Instacart</td><td>1099-NEC from the app</td></tr>
<tr><td>Time spent inside stores</td><td>High; fewer miles per hour worked</td><td>Low; more miles per hour</td></tr>
<tr><td>Typical biggest deduction</td><td>Mileage, then supplies</td><td>Mileage</td></tr>
<tr><td>Extra supplies</td><td>Insulated bags, coolers, carts</td><td>Hot bags</td></tr>
</tbody></table>
<p>Because shoppers spend more time inside stores, mileage per dollar earned is usually lower than for pure delivery drivers, so other deductions and careful tip records matter a bit more.</p>

<h3>Retirement savings cut tax too</h3>
<p>Self-employed shoppers can contribute to a SEP IRA or a solo 401(k) from net self-employment earnings, which lowers income tax (though not self-employment tax). Even a few hundred dollars a year builds a habit, and contributions for a tax year can often be made up to the filing deadline. Ask your preparer which plan fits your income.</p>

<h2>Which records to keep, and for how long</h2>
<p>Keep your 1099-NEC, monthly earnings summaries, mileage log, receipts for supplies and phone bills, and copies of each estimated payment confirmation. The IRS can generally review a return for three years after you file it, and longer in some situations, such as six years when income is substantially understated, so most preparers suggest keeping gig records for at least seven years. Digital copies are fine: a folder per tax year in cloud storage, with photos of paper receipts, is enough. If you ever apply for a mortgage or a loan, lenders will ask for the same documents, typically two years of returns plus proof of current income, so tidy records help well beyond tax season. Our new guide to a <a href="/blog/self-employed-mortgage">self-employed mortgage</a> explains what lenders look for.</p>

<h2>State taxes and multiple apps</h2>
<p>Most states tax your Instacart profit as ordinary income, and some cities add local income tax. If you shop for Instacart and also drive for other apps, combine similar work on one Schedule C or keep separate schedules if the businesses are distinct, but always track mileage once so you do not double count the same trip. Our <a href="/blog/doordash-taxes">DoorDash taxes</a> guide covers the delivery side if you multi-app.</p>

<h2>Common Instacart tax mistakes</h2>
<ul>
<li><strong>Reporting tips separately</strong> as if they were not on the 1099. They are generally included in the gross figure.</li>
<li><strong>Forgetting batch bonuses and promotions.</strong> They are taxable income too.</li>
<li><strong>Claiming 100% of the phone</strong> when you also use it personally.</li>
<li><strong>Using the old $600 threshold</strong> to decide whether income is reportable. It never decided that.</li>
<li><strong>Waiting until April</strong> to set money aside.</li>
</ul>

<h2>If you also shop or run errands privately</h2>
<p>Some shoppers build a client list of their own: regular grocery runs for elderly neighbors or offices. Those customers pay you directly, so treat it as a business: agree a rate, keep a record of each job and give a proper invoice or receipt. That creates evidence for your income and makes it easy to separate private work from app income at tax time. Our guide to <a href="/blog/hobby-vs-business">hobby vs business</a> explains why consistent records matter.</p>
<p>When you bill private customers, use our free <a href="/invoice-generator">invoice generator</a>. There is no sign-up: add your service, mileage and fees, and download a professional PDF invoice to send by email or text.</p>
`,
  },
  {
    slug: "tiktok-creator-taxes",
    title: "TikTok Creator Taxes: Reporting Creator Rewards Income",
    description:
      "TikTok creator taxes explained: how Creator Rewards, LIVE gifts, TikTok Shop commissions and brand deals are taxed, which 1099s to expect and what to deduct.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["youtuber-taxes", "influencer-invoice-template", "self-employed-tax-deductions"],
    faqs: [
      {
        q: "Do I have to pay taxes on TikTok Creator Rewards money?",
        a: "Yes. Creator Rewards payouts are taxable income in the year you receive them. Most creators who earn regularly are treated as self-employed, so the income goes on Schedule C and is subject to self-employment tax as well as income tax. This applies whether or not TikTok sends you a 1099, and whether you withdraw the money to your bank or leave it in your TikTok balance.",
      },
      {
        q: "Will TikTok send me a 1099?",
        a: "TikTok collects US tax information from creators before paying them and issues an information return to those who reach the federal reporting threshold. For nonemployee compensation paid in 2026, that threshold is generally $2,000, up from $600. Payments that arrive through PayPal or another processor may instead be reported on Form 1099-K under its own $20,000 and 200-transaction threshold. Report your income from your own records either way.",
      },
      {
        q: "Are free products from brands taxable for TikTok creators?",
        a: "Products you receive in exchange for creating content are generally income at their fair market value, just like cash. Brands sometimes report them on a 1099. Truly unsolicited gifts with no obligation to post are less clear, and practice varies. Keep a log of every product, its value and what you agreed to do, and ask a tax professional how to treat items that came with no strings attached.",
      },
      {
        q: "What are the TikTok Creator Rewards Program requirements?",
        a: "TikTok's US program requires creators to be at least 18, have a personal account in good standing with at least 10,000 followers, and have at least 100,000 authentic video views in the last 30 days. Videos must be at least one minute long to earn rewards and start earning once they reach 1,000 qualified views. Requirements can change, so check TikTok's Creator Rewards page.",
      },
      {
        q: "Can I deduct my phone and ring light as a TikTok creator?",
        a: "Yes, if you use them to create content for your business. Equipment such as a phone, lighting, microphones and editing software is deductible in proportion to business use. Expensive items may need to be depreciated, although bonus depreciation or the de minimis safe harbor often allows an immediate deduction. Keep receipts and be realistic about the personal use of devices like your phone.",
      },
      {
        q: "Do I need an LLC to be a TikTok creator?",
        a: "No. You can earn and report creator income as a sole proprietor using your SSN or an EIN. An LLC can separate business liabilities and look more professional to brands, but it does not lower taxes by itself. Larger creators sometimes elect S corporation status to manage self-employment tax, which only makes sense once profits are consistently high enough to cover a reasonable salary and extra costs.",
      },
    ],
    content: `
<p>TikTok creator taxes work like any self-employed business: Creator Rewards payouts, LIVE gift earnings, TikTok Shop affiliate commissions and brand deals are all taxable income. You report them on Schedule C, deduct your content costs, and pay income tax plus 15.3% self-employment tax on the profit. TikTok may send a 1099 if you cross the reporting threshold, which is generally $2,000 for 2026, but you owe tax on every dollar either way.</p>

<p>The tricky parts for creators are the number of income streams, payments in products rather than cash, and money paid through different platforms that issue different forms. This guide maps each income type to how it is taxed, includes a worked example and lists the deductions creators most often miss. It is general information, not tax advice.</p>

<h2>Which TikTok income is taxable?</h2>
<table><thead><tr><th>Income stream</th><th>How you are paid</th><th>Tax treatment</th><th>Form you may receive</th></tr></thead><tbody>
<tr><td>Creator Rewards Program</td><td>TikTok balance, withdrawn to bank or PayPal</td><td>Self-employment income</td><td>1099 from TikTok if over threshold</td></tr>
<tr><td>LIVE gifts (Diamonds)</td><td>Converted to cash in your balance</td><td>Self-employment income</td><td>Included with TikTok payments</td></tr>
<tr><td>Subscriptions</td><td>TikTok balance</td><td>Self-employment income</td><td>Included with TikTok payments</td></tr>
<tr><td>TikTok Shop affiliate commissions</td><td>Shop payouts</td><td>Self-employment income</td><td>1099 depending on payer and amount</td></tr>
<tr><td>Brand deals and sponsored posts</td><td>Direct from brand or agency</td><td>Self-employment income</td><td>1099-NEC from brand if $2,000+ in 2026</td></tr>
<tr><td>Brand payments via PayPal or card</td><td>Payment processor</td><td>Self-employment income</td><td>Possibly 1099-K ($20,000 and 200 transactions federally)</td></tr>
<tr><td>Products in exchange for content</td><td>Goods</td><td>Income at fair market value</td><td>Sometimes a 1099</td></tr>
</tbody></table>

<h2>How the Creator Rewards Program pays</h2>
<p>TikTok's <a href="https://www.tiktok.com/legal/page/global/creator-rewards-program-us/en" target="_blank" rel="noopener noreferrer">US Creator Rewards Program terms</a> require creators to be 18 or older, with at least 10,000 followers and 100,000 authentic views in the 30 days before applying. Rewards accrue on original videos of at least one minute once they pass 1,000 qualified For You views. Earnings vary widely by niche, audience location and engagement, so treat any per-view figure you see online as a rough estimate.</p>
<p>For tax purposes, the timing that matters is when the money is credited to you and available, not when you move it to your bank. Keep the monthly earnings statements from TikTok Studio or the creator dashboard; they are your primary income records.</p>

<h2>Forms: what TikTok and brands send</h2>
<p>Before paying, TikTok collects your tax details (a W-9 for US creators) in the app. US creators who reach the reporting threshold receive an information return early the following year. For 2026 the nonemployee compensation threshold is generally $2,000, raised from $600 by the One Big Beautiful Bill Act; see <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold 2026</a>.</p>
<p>Brands that pay you directly should send a 1099-NEC once they pay you $2,000 or more in 2026. If a brand pays through PayPal or a card processor, the processor rather than the brand may report it on a 1099-K, which uses the $20,000 and 200-transaction federal threshold. Some states have lower 1099-K thresholds. If one payment shows up on two forms, report it once and keep notes reconciling the totals. Our guide to <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> shows how to sort them.</p>

<h2>Deductions for TikTok creators</h2>
<ul>
<li><strong>Equipment:</strong> phone (business-use share), ring lights, tripods, gimbals, microphones, cameras.</li>
<li><strong>Software and apps:</strong> editing apps, music licensing, design tools, scheduling tools.</li>
<li><strong>Props, wardrobe and sets</strong> used only for content, not clothing you also wear day to day.</li>
<li><strong>Home office</strong> if you use a space regularly and exclusively for content.</li>
<li><strong>Internet and phone service</strong>, business share.</li>
<li><strong>Contractors:</strong> editors, managers, agents and UGC collaborators. You may need to issue them 1099s.</li>
<li><strong>Travel</strong> for content shoots or brand events, when primarily for business.</li>
<li><strong>Products you reported as income</strong> and then used in content can generally be treated consistently; ask your preparer how.</li>
</ul>
<p>Since the One Big Beautiful Bill Act restored 100% bonus depreciation for qualifying property acquired after January 19, 2025, many creators can deduct equipment in full in the year they put it into service. For the full list of write-offs, see <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>

<h2>Worked example: a mid-size TikTok creator's year</h2>
<p>This example is illustrative. Sam, a cooking creator, has this 2026 income and costs:</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Creator Rewards payouts</td><td>$9,600</td></tr>
<tr><td>LIVE gifts</td><td>$1,450</td></tr>
<tr><td>TikTok Shop affiliate commissions</td><td>$3,200</td></tr>
<tr><td>Three brand deals, paid by invoice</td><td>$7,500</td></tr>
<tr><td>Cookware received for a sponsored series (fair market value)</td><td>$650</td></tr>
<tr><td><strong>Gross income</strong></td><td><strong>$22,400</strong></td></tr>
<tr><td>Camera, lights and microphone</td><td>-$1,850</td></tr>
<tr><td>Ingredients and props for videos</td><td>-$2,300</td></tr>
<tr><td>Editing software and music subscriptions</td><td>-$420</td></tr>
<tr><td>Freelance video editor</td><td>-$3,000</td></tr>
<tr><td>Phone and internet (business share)</td><td>-$780</td></tr>
<tr><td><strong>Net profit</strong></td><td><strong>$14,050</strong></td></tr>
<tr><td>Self-employment tax ($14,050 x 92.35% x 15.3%)</td><td>$1,985.20</td></tr>
</tbody></table>
<p>Sam paid the editor $3,000, which is above the 2026 threshold, so Sam should collect a W-9 and issue a 1099-NEC to the editor by January 31, 2027. Our guide to the <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 for contractors</a> covers that process.</p>

<h2>Brand deals: invoice like a business</h2>
<p>Brand partnerships are usually your highest-value income, and they are paid on invoice terms. A clear invoice speeds up payment and gives you clean records for tax time. Include the deliverables (for example, "1 TikTok video, 60 to 90 seconds, posted by March 15, plus 30-day usage rights"), the agreed fee, any usage or exclusivity fees as separate lines, payment terms and your W-9 details. Our <a href="/blog/influencer-invoice-template">influencer invoice template</a> has line-by-line examples, and the same structure works for UGC-only deals where you deliver content without posting it.</p>

<h2>Managers, agencies and commissions</h2>
<p>As your account grows, a manager or talent agency may negotiate brand deals for a commission, often a percentage of each deal. Pay attention to how the money flows. If the brand pays you the full fee and you pay the agency its cut, you report the full fee as income and deduct the commission as a business expense. If the agency collects the full fee and pays you the net amount, check what the 1099 shows: if it reports the gross, report the gross and deduct the commission; if it reports only your net, report that. Either way, your contract and the agency's statements are the records that support your numbers. When you pay an individual manager $2,000 or more in 2026 for services, you may need to send them a 1099-NEC too.</p>

<h2>Estimated taxes and setting money aside</h2>
<p>Creator income is lumpy: a viral month followed by a quiet one. Because nothing is withheld, you will usually need quarterly estimated payments. The last 2026 payment is due January 15, 2027, and 2027 payments are due April 15, June 15 and September 15. A practical rule is to save 25% to 30% of every payout and brand payment in a separate account. Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains the safe harbor rules.</p>

<h2>Should a TikTok creator form an LLC or S corp?</h2>
<p>Not at the start. A single-member LLC is taxed exactly like a sole proprietor by default, so it does not reduce tax on its own; its value is legal separation, a business bank account brands recognise, and a cleaner image in contracts. The tax lever comes later: once profit is consistently high, an LLC electing S corporation status can pay you a reasonable salary and take the rest as distributions not subject to self-employment tax. That brings payroll, a separate return and extra fees, so it usually only makes sense when profit is well above what a reasonable salary for your work would be. Our <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> comparison sets out the trade-offs.</p>

<h2>A simple record-keeping system for creators</h2>
<ol>
<li><strong>Open a separate bank account</strong> and route every platform payout and brand payment into it.</li>
<li><strong>Download monthly earnings reports</strong> from TikTok and any other platform, and save them in one folder per year.</li>
<li><strong>Log products received</strong>: date, brand, item, retail value and what you agreed to post.</li>
<li><strong>Number every brand invoice</strong> and record when it was paid, so you can match it to 1099s later.</li>
<li><strong>Snap receipts</strong> for equipment and props the day you buy them, and note which content they were for.</li>
<li><strong>Review quarterly</strong> before each estimated tax payment.</li>
</ol>
<p>This takes about an hour a month and turns tax season from a scramble into a reconciliation.</p>

<h2>Common TikTok tax mistakes</h2>
<ul>
<li><strong>Ignoring income below the 1099 threshold.</strong> It is still taxable.</li>
<li><strong>Treating LIVE gifts as personal gifts.</strong> They are earned through your content and are income.</li>
<li><strong>Not recording product payments.</strong> If a product was payment for a post, it counts.</li>
<li><strong>Deducting everyday clothes and personal phone use</strong> without a business basis.</li>
<li><strong>Double-reporting</strong> a brand payment that appears on both a 1099-NEC and a 1099-K.</li>
<li><strong>No separate bank account</strong>, making it hard to prove income and expenses.</li>
</ul>

<h2>Where TikTok fits with your other platforms</h2>
<p>Most creators earn on more than one platform. Report all creator income on one Schedule C if it is the same content business, and keep a simple spreadsheet showing income by platform and month. Our <a href="/blog/youtuber-taxes">YouTuber taxes</a> guide covers AdSense, and the new <a href="/blog/twitch-streamer-taxes">Twitch streamer taxes</a> guide covers subs and Bits.</p>
<p>For brand deals and any client work, send invoices from our free <a href="/invoice-generator">invoice generator</a>. No sign-up is needed: list your deliverables and usage rights, and download a polished PDF invoice to send to the brand.</p>
`,
  },
  {
    slug: "twitch-streamer-taxes",
    title: "Twitch Streamer Taxes: Subs, Bits and Sponsorships",
    description:
      "Twitch taxes for US streamers: how subs, Bits, ads, donations and sponsorships are taxed, Twitch's royalty and service tax interviews, 1099s and deductions.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["youtuber-taxes", "schedule-c-for-freelancers", "youtube-sponsorship-invoice-template"],
    faqs: [
      {
        q: "Do I have to pay taxes on Twitch income?",
        a: "Yes. Subscriptions, Bits, ad revenue, sponsorships, affiliate links, merch sales and viewer donations are all taxable income for a US streamer. If you stream regularly to earn money, you are generally treated as self-employed: income and expenses go on Schedule C and the profit is subject to self-employment tax as well as income tax. This applies whether or not you receive a 1099.",
      },
      {
        q: "Why does Twitch ask for two tax interviews?",
        a: "Twitch splits creator earnings into royalty-type income and service-type income, and asks monetized creators to complete both a royalty tax interview and a service tax interview through Amazon's tax information system. The split matters mostly for withholding on non-US creators and for which information return a US creator receives. US creators should complete both accurately with the same legal name and taxpayer ID, or payouts can be held.",
      },
      {
        q: "Are Twitch donations taxable?",
        a: "Generally yes. Money viewers send through donation tools, tip jars or third-party services while you stream is tied to your content and is usually treated as business income, not a tax-free gift. Payments that arrive through PayPal or a card processor may also appear on Form 1099-K if you cross its threshold. Record donations with the rest of your streaming income.",
      },
      {
        q: "Is Twitch royalty income subject to self-employment tax?",
        a: "Usually, for active streamers. Even when a payer reports part of your earnings as royalties on Form 1099-MISC, income from a trade or business you actively run is normally reported on Schedule C and subject to self-employment tax. Royalties go on Schedule E without SE tax mainly for passive royalty owners. Ask a tax professional if your 1099 shows royalties and you are unsure where to report them.",
      },
      {
        q: "Can I deduct my gaming PC as a Twitch streamer?",
        a: "You can deduct the business-use percentage. A PC used 70% for streaming and content and 30% for personal gaming gives a 70% deduction. Under current law, bonus depreciation can allow the business share to be deducted in the year you place the equipment in service. Keep the receipt and a reasonable record of how you estimated business use, because mixed-use gaming equipment draws scrutiny.",
      },
      {
        q: "Do Twitch affiliates need to pay quarterly taxes?",
        a: "If you expect to owe $1,000 or more in federal tax for the year after withholding and credits, the IRS expects quarterly estimated payments. Small affiliates earning a few hundred dollars may owe little, but streamers with growing sponsorships often cross that line. The last 2026 payment is due January 15, 2027. Setting aside 25% to 30% of each payout is a common starting point.",
      },
    ],
    content: `
<p>Twitch taxes work like any self-employed business: your subscription share, Bits, ad revenue, sponsorships, donations and merch sales are all taxable income. US streamers report them on Schedule C, deduct streaming costs such as equipment and software, and pay income tax plus 15.3% self-employment tax on the profit. Twitch collects your tax details through two interviews, one for royalties and one for services, and may send information returns at year end, but you owe tax whether or not a form arrives.</p>

<p>Streamers often have six or more income streams paid by different companies, each with its own reporting rules. This guide sorts them out, explains the royalty and service split, works through an example and lists the deductions that hold up. It is general information, not tax advice.</p>

<h2>Twitch income streams and how they are taxed</h2>
<table><thead><tr><th>Income</th><th>Paid by</th><th>Typical reporting</th><th>Tax treatment for an active US streamer</th></tr></thead><tbody>
<tr><td>Subscriptions (your share)</td><td>Twitch</td><td>Often treated as royalty-type income</td><td>Schedule C, subject to SE tax</td></tr>
<tr><td>Ad revenue</td><td>Twitch</td><td>Often treated as royalty-type income</td><td>Schedule C, subject to SE tax</td></tr>
<tr><td>Bits and other services</td><td>Twitch</td><td>Service-type income</td><td>Schedule C, subject to SE tax</td></tr>
<tr><td>Sponsorships and brand deals</td><td>Brand or agency</td><td>1099-NEC if $2,000+ in 2026</td><td>Schedule C</td></tr>
<tr><td>Donations and tips via third-party tools</td><td>PayPal, Stripe or donation platform</td><td>Possibly 1099-K</td><td>Schedule C</td></tr>
<tr><td>Merch and affiliate commissions</td><td>Merch platform or affiliate program</td><td>1099-NEC, 1099-MISC or 1099-K depending on payer</td><td>Schedule C; merch also has cost of goods</td></tr>
</tbody></table>
<p>The common thread: for someone actively streaming as a business, all of it belongs on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>, and the profit is subject to <a href="/blog/self-employment-tax">self-employment tax</a>.</p>

<h2>Twitch's royalty and service tax interviews</h2>
<p>Before Twitch pays you, it requires monetized creators to complete two tax interviews through Amazon's tax system: a royalty interview and a service interview. Twitch's <a href="https://help.twitch.tv/s/article/payout-balance-faq?language=en_US" target="_blank" rel="noopener noreferrer">payout help pages</a> point creators to these interviews and to Amazon's tax information FAQs for form questions, rather than Twitch Support. The split exists because subscription and ad shares are generally characterized as royalties, while other payments are for services.</p>
<p>For US streamers, practical consequences are:</p>
<ul>
<li><strong>Complete both interviews</strong> with the same legal name and SSN or EIN. Mismatches can block payouts.</li>
<li><strong>Expect up to two information returns</strong>, for example a 1099-MISC for royalty-type income and a 1099-NEC for service income, depending on amounts and thresholds.</li>
<li><strong>Do not treat royalty-labelled income as passive.</strong> If you actively stream, it still belongs on Schedule C with SE tax in most cases.</li>
<li><strong>Update the interviews</strong> if you form an LLC or change your name or address.</li>
</ul>

<h2>1099 thresholds for streamers in 2026</h2>
<table><thead><tr><th>Form</th><th>Who sends it</th><th>2026 federal threshold</th></tr></thead><tbody>
<tr><td>1099-NEC</td><td>Payers of service income, such as sponsors</td><td>$2,000</td></tr>
<tr><td>1099-MISC (royalties)</td><td>Payers of royalties</td><td>$10 for royalties</td></tr>
<tr><td>1099-K</td><td>Payment processors and marketplaces</td><td>Over $20,000 and over 200 transactions (some states lower)</td></tr>
</tbody></table>
<p>The royalty box on Form 1099-MISC has long used a $10 threshold, so a streamer with modest sub revenue can still receive one. Totals on these forms are gross; they do not subtract your costs. Keep your own monthly revenue reports from the Twitch creator dashboard to reconcile them. See <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> for the differences.</p>

<h2>Deductions for Twitch streamers</h2>
<ul>
<li><strong>Streaming PC, consoles, capture cards and monitors</strong>, at the business-use percentage.</li>
<li><strong>Cameras, microphones, lighting, green screens and stream decks.</strong></li>
<li><strong>Software:</strong> overlays, alerts, editing tools, music licenses and moderation bots.</li>
<li><strong>Games bought for streaming content.</strong> Keep a note of which streams used them.</li>
<li><strong>Internet service</strong>, business share. Upload speed matters, so many streamers pay for higher tiers.</li>
<li><strong>Home office</strong> if a room or defined space is used regularly and exclusively for streaming. See the <a href="/blog/home-office-deduction">home office deduction</a>.</li>
<li><strong>Contractors:</strong> editors, moderators paid in cash, emote and overlay artists, managers.</li>
<li><strong>Travel to events</strong> such as conventions, when primarily for business.</li>
</ul>
<p>Since the One Big Beautiful Bill Act restored 100% bonus depreciation for qualifying property acquired after January 19, 2025, the business share of a new streaming setup can often be deducted in the year you start using it. Mixed-use equipment is where streamers get into trouble, so document your percentage honestly.</p>

<h2>Worked example: an affiliate turning partner</h2>
<p>This example is illustrative. Alex streams four nights a week and in 2026 earns:</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Subscriptions (Alex's share)</td><td>$11,200</td></tr>
<tr><td>Bits</td><td>$2,350</td></tr>
<tr><td>Ad revenue</td><td>$1,900</td></tr>
<tr><td>Two sponsorships, invoiced directly</td><td>$6,000</td></tr>
<tr><td>Viewer donations via a third-party tool</td><td>$1,750</td></tr>
<tr><td><strong>Gross income</strong></td><td><strong>$23,200</strong></td></tr>
<tr><td>New PC ($2,800 at 75% business use)</td><td>-$2,100</td></tr>
<tr><td>Microphone, camera and lights</td><td>-$640</td></tr>
<tr><td>Software, overlays and music</td><td>-$510</td></tr>
<tr><td>Internet (60% of $1,080)</td><td>-$648</td></tr>
<tr><td>Freelance editor for highlights</td><td>-$2,400</td></tr>
<tr><td><strong>Net profit</strong></td><td><strong>$16,902</strong></td></tr>
<tr><td>Self-employment tax ($16,902 x 92.35% x 15.3%)</td><td>$2,388.18</td></tr>
</tbody></table>
<p>Alex should also collect a W-9 from the editor and issue a 1099-NEC, because $2,400 exceeds the 2026 threshold. If Alex's profit keeps growing, an LLC with an S corporation election may be worth discussing with an accountant; our new guide to <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a> explains the salary rules that come with it.</p>

<h2>Sponsorships: get paid faster with clear invoices</h2>
<p>Sponsorships are negotiated deals, and the invoice is where they turn into money. List each deliverable (for example, "3 x 60-second live reads, March 4, 11 and 18", "Panel link for 30 days"), the fee for each, usage rights, payment terms and your tax details. Agencies often pay net 30 or net 60, so invoice on the day the last deliverable goes live. Our <a href="/blog/youtube-sponsorship-invoice-template">sponsorship invoice template</a> works just as well for Twitch deals and multi-platform packages.</p>

<h2>Streaming from home: office, internet and utilities</h2>
<p>Most streamers work from a bedroom or spare room, which makes the home office deduction tempting and tricky. The space must be used regularly and exclusively for your streaming business; a room that doubles as a guest room or a family gaming room does not qualify. If it does qualify, you can use the simplified method, $5 per square foot for up to 300 square feet (a maximum of $1,500), or the regular method, which takes the business percentage of rent or mortgage interest, utilities, insurance and repairs. Internet and electricity are deductible at a reasonable business share even if you do not claim the home office. Keep a floor plan sketch with measurements and a photo of the setup in your tax folder; it is simple evidence if questions come up later.</p>

<h2>Merch, cost of goods and sales tax</h2>
<p>Merch adds a layer. If you sell through a print-on-demand platform that handles production and checkout, you usually receive a commission or profit share, and the platform deals with sales tax on its sales. If you buy inventory and sell it yourself, at events or through your own store, you report gross sales on Schedule C, deduct the cost of goods sold, and may need to register for and collect sales tax in states where you have nexus. Keep inventory counts at year end so cost of goods is accurate. Our <a href="/blog/sales-tax-nexus">sales tax nexus</a> guide explains when you must register.</p>

<h3>Monthly checklist for streamers</h3>
<ul>
<li>Download the Twitch revenue report for the month and save it.</li>
<li>Export donation platform and PayPal statements.</li>
<li>Record sponsorship invoices sent and paid.</li>
<li>Save receipts for gear, software and games, with a note on which streams used them.</li>
<li>Move your tax percentage into a separate account.</li>
</ul>
<p>A spreadsheet with one tab per income source and one for expenses is enough for most streamers until revenue justifies bookkeeping software.</p>

<h2>Estimated taxes and the payout rhythm</h2>
<p>Twitch pays monthly once you pass your payout threshold, while sponsors pay on their own terms. Because no tax is withheld for US creators who provide valid tax information, plan quarterly estimated payments: the final 2026 payment is due January 15, 2027, then April 15, June 15 and September 15, 2027. Save 25% to 30% of each payout as a starting point. Our <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> guide covers safe harbors.</p>

<h2>Common Twitch tax mistakes</h2>
<ul>
<li><strong>Reporting only Twitch payouts</strong> and forgetting donations, sponsors and merch.</li>
<li><strong>Putting royalty-labelled income on Schedule E</strong> to avoid SE tax when you actively stream.</li>
<li><strong>Deducting 100% of a gaming PC</strong> used heavily for personal play.</li>
<li><strong>Skipping the second tax interview</strong> and having payouts held.</li>
<li><strong>Not issuing 1099s</strong> to editors and artists you pay $2,000 or more in 2026.</li>
<li><strong>Treating donations as gifts.</strong> In a streaming business they are generally income.</li>
</ul>

<h2>Multi-platform creators</h2>
<p>One more practical point before you combine platforms: keep the same legal name, address and taxpayer ID across Twitch, YouTube, sponsors and payment processors. When those details differ, information returns go out under different names, backup withholding can be triggered, and matching forms to your return becomes slow. If you form an LLC, update every platform and send sponsors a new W-9 on the same day, and note the switch date so income before and after it is reported correctly.</p>
<p>Many streamers also post to YouTube and TikTok. If it is all one content business, report it together on one Schedule C and track revenue by platform. Our <a href="/blog/youtuber-taxes">YouTuber taxes</a> guide covers AdSense, and the <a href="/blog/tiktok-creator-taxes">TikTok creator taxes</a> guide covers Creator Rewards and LIVE gifts.</p>
<p>When you land a sponsor, send a professional invoice from our free <a href="/invoice-generator">invoice generator</a>. There is no sign-up: list your live reads and deliverables, add payment terms, and download a PDF ready to email to the brand or agency.</p>
`,
  },
  {
    slug: "ebay-seller-1099-k",
    title: "eBay 1099-K: Thresholds and What Sellers Must Report",
    description:
      "eBay 1099-K: the $20,000 and 200-transaction threshold, lower state thresholds, backup withholding, and how to report personal items vs business sales.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["1099-k-threshold", "hobby-vs-business", "1099-nec-vs-1099-misc-vs-1099-k"],
    faqs: [
      {
        q: "How much do you have to sell on eBay to get a 1099-K?",
        a: "At the federal level, eBay issues a Form 1099-K when a seller has more than $20,000 in gross payments and more than 200 transactions in a calendar year. The One Big Beautiful Bill Act restored that threshold in July 2025. eBay also issues forms to sellers in states with lower thresholds, which eBay lists as including Arkansas, the District of Columbia, Illinois, Maryland, Massachusetts, Montana, New Jersey, Rhode Island, Vermont and Virginia.",
      },
      {
        q: "Do I have to pay tax on items I sold on eBay for less than I paid?",
        a: "No tax is due on a genuine personal item sold at a loss, such as used clothes or an old phone, but you cannot deduct the loss either. If you received a 1099-K that includes those sales, the IRS lets you report the amount at the top of Schedule 1 of Form 1040 and offset it, or report the sale on Form 8949 and Schedule D, so the reported payments are not taxed. Keep proof of what you originally paid.",
      },
      {
        q: "Does the eBay 1099-K amount include fees and shipping?",
        a: "eBay says the 1099-K reports the gross amount of payments in the calendar year and does not exclude credits, discounts, fees or refunds. That means the figure is usually higher than what reached your bank. Business sellers report gross receipts on Schedule C and then deduct eBay fees, shipping costs, refunds and the cost of goods sold. Use your eBay reports to reconcile the numbers.",
      },
      {
        q: "Why is eBay withholding 24% from my payouts?",
        a: "That is federal backup withholding. eBay applies it when a seller has not provided a valid taxpayer ID, provides an incomplete or invalid one, or after the IRS sends a B Notice about a name and number mismatch. Some states also require withholding. Fix it by entering your correct SSN, ITIN or EIN in your account. Amounts already withheld are credited on your tax return; they appear in Box 4 of your 1099-K.",
      },
      {
        q: "If I have two eBay accounts, are they combined for the 1099-K?",
        a: "Yes. eBay combines transactions across all accounts linked to the same SSN, ITIN or EIN. If the combined total exceeds the threshold, eBay issues a 1099-K for each account, even if one account on its own is below the threshold. Setting up separate accounts does not avoid reporting, and the income is reportable regardless of any form.",
      },
      {
        q: "Is eBay reselling a business or a hobby?",
        a: "If you buy items to resell for profit, regularly list inventory and try to make money, you are usually running a business. That means Schedule C, self-employment tax on profit, and the ability to deduct fees, shipping and cost of goods. Clearing out your own closet occasionally is not a business. The IRS looks at factors such as profit motive, how you run the activity and the time you spend.",
      },
    ],
    content: `
<p>An eBay 1099-K is the form eBay sends to you and the IRS showing your gross sales payments for the year. Federally, eBay must issue one when you have more than $20,000 in payments and more than 200 transactions, but some states use lower thresholds, so you can receive one for much smaller amounts. Getting a 1099-K does not automatically mean you owe tax: personal items sold at a loss are not taxable, while profits from reselling and business sales are.</p>

<p>This guide explains the thresholds, what the number on the form includes, backup withholding, and exactly how to report personal sales and business sales, with worked examples. It is general information, not tax advice.</p>

<h2>eBay 1099-K thresholds for 2025 and 2026</h2>
<p>After several years of planned changes, the One Big Beautiful Bill Act of July 2025 permanently restored the federal 1099-K threshold for marketplaces and payment apps to more than $20,000 and more than 200 transactions. Both conditions must be met. eBay's <a href="https://www.ebay.com/sellercenter/resources/changes-to-ebay-and-your-1099-k" target="_blank" rel="noopener noreferrer">1099-K and tax withholding FAQ</a> confirms this rule and lists states with lower thresholds.</p>
<table><thead><tr><th>Rule</th><th>Detail</th></tr></thead><tbody>
<tr><td>Federal threshold</td><td>More than $20,000 in gross payments and more than 200 transactions</td></tr>
<tr><td>States with lower thresholds (per eBay)</td><td>Arkansas, District of Columbia, Illinois, Maryland, Massachusetts, Montana, New Jersey, Rhode Island, Vermont, Virginia</td></tr>
<tr><td>Accounts combined?</td><td>Yes, all accounts under the same SSN, ITIN or EIN</td></tr>
<tr><td>Amount reported</td><td>Gross payments; no deduction for fees, credits, discounts or refunds</td></tr>
<tr><td>Form availability</td><td>By January 31 for the prior year, electronically unless you opt for paper</td></tr>
<tr><td>Backup withholding</td><td>24% federal if no valid taxpayer ID or after an IRS B Notice</td></tr>
</tbody></table>
<p>State thresholds change, so check your state revenue department each year. For background on how the federal threshold changed over time, see our guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a>.</p>

<h2>Do you owe tax on eBay sales?</h2>
<p>The form reports payments, not profit. Whether tax is due depends on what you sold:</p>
<table><thead><tr><th>Type of sale</th><th>Taxable?</th><th>Where to report</th></tr></thead><tbody>
<tr><td>Personal item sold for less than you paid</td><td>No, but the loss is not deductible</td><td>Top of Schedule 1 (with offsetting adjustment) or Form 8949 and Schedule D</td></tr>
<tr><td>Personal item sold for more than you paid</td><td>Yes, the gain is a capital gain</td><td>Form 8949 and Schedule D</td></tr>
<tr><td>Inventory bought to resell</td><td>Yes, profit is business income</td><td>Schedule C, plus self-employment tax</td></tr>
<tr><td>Items you make and sell</td><td>Yes, profit is business income</td><td>Schedule C</td></tr>
<tr><td>Occasional sales without profit motive</td><td>Possibly hobby income</td><td>Schedule 1; hobby expenses are not deductible</td></tr>
</tbody></table>
<p>The IRS page <a href="https://www.irs.gov/businesses/what-to-do-with-form-1099-k" target="_blank" rel="noopener noreferrer">What to do with Form 1099-K</a> says a loss on a personal item cannot be deducted, but you can avoid tax on the reported amount by reporting the payment at the top of Schedule 1 or reporting the loss on Form 8949. Whether you are a business or hobby seller matters a lot; our <a href="/blog/hobby-vs-business">hobby vs business</a> guide explains the IRS factors.</p>

<h2>Worked example 1: clearing out personal items</h2>
<p>This example is illustrative. Dana lives in Massachusetts, one of the states eBay lists with a lower threshold, and in 2026 sells 34 personal items: a used road bike, clothes, a camera and kitchen gear. Gross payments total $4,280.</p>
<table><thead><tr><th>Item group</th><th>Sale price</th><th>Original cost</th><th>Result</th></tr></thead><tbody>
<tr><td>Road bike</td><td>$1,150</td><td>$2,400</td><td>Loss, not deductible, not taxable</td></tr>
<tr><td>Camera and lens</td><td>$1,380</td><td>$1,900</td><td>Loss, not deductible, not taxable</td></tr>
<tr><td>Clothes and kitchen items</td><td>$1,050</td><td>about $2,600</td><td>Loss, not taxable</td></tr>
<tr><td>Vintage jacket inherited from a parent</td><td>$700</td><td>Basis at inheritance about $200</td><td>About $500 gain, taxable</td></tr>
<tr><td><strong>Total on 1099-K</strong></td><td><strong>$4,280</strong></td><td></td><td></td></tr>
</tbody></table>
<p>Dana reports the loss items so the $3,580 of loss-making sales is not taxed, and reports the jacket sale on Form 8949 and Schedule D as a capital gain. The key evidence is proof of original cost: old receipts, order history or a reasonable estimate backed by listings. Without it, the IRS may treat more of the $4,280 as taxable.</p>

<p>One edge case: collectibles such as coins, trading cards, art and antiques sold at a gain after being held for more than a year can be taxed at a maximum federal rate of 28% rather than the usual long-term capital gains rates. If you sell valuable collections, ask a tax professional how the gain should be calculated and keep appraisal or purchase records.</p>

<h2>Worked example 2: a part-time reseller</h2>
<p>This example is illustrative. Marcus buys clothing at thrift stores and resells it on eBay. In 2026 he has 640 sales and $31,500 in gross payments, so he receives a federal 1099-K.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross payments (1099-K)</td><td>$31,500</td></tr>
<tr><td>Refunds to buyers</td><td>-$900</td></tr>
<tr><td>Cost of goods sold (thrift purchases for items sold)</td><td>-$8,400</td></tr>
<tr><td>eBay final value and ad fees</td><td>-$4,350</td></tr>
<tr><td>Shipping labels</td><td>-$5,200</td></tr>
<tr><td>Packaging and supplies</td><td>-$610</td></tr>
<tr><td>Mileage to thrift stores (1,800 business miles, mixed 2026 rates, about)</td><td>-$1,330</td></tr>
<tr><td><strong>Net profit (Schedule C)</strong></td><td><strong>$10,710</strong></td></tr>
<tr><td>Self-employment tax ($10,710 x 92.35% x 15.3%)</td><td>$1,513.27</td></tr>
</tbody></table>
<p>The form says $31,500, but Marcus's taxable profit is about a third of that. A reseller who reports the 1099-K figure with no expenses would overpay by thousands. Our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> guide lists more costs resellers can claim.</p>

<h2>Step by step: handling your eBay 1099-K</h2>
<ol>
<li><strong>Download the form</strong> from your eBay account after it is issued by January 31.</li>
<li><strong>Download eBay's transaction and payout reports</strong> for the same year.</li>
<li><strong>Reconcile:</strong> gross payments minus refunds, fees and shipping should roughly match your deposits.</li>
<li><strong>Split personal and business sales</strong> if you have both.</li>
<li><strong>Gather cost records</strong>: purchase receipts for inventory, and evidence of original cost for personal items.</li>
<li><strong>Report</strong> business sales on Schedule C and personal sales on Schedule 1 or Form 8949 and Schedule D.</li>
<li><strong>Check Box 4</strong> for any backup withholding and claim it as a payment on your return.</li>
<li><strong>If the form is wrong</strong>, contact eBay for a correction, keep the correspondence, and file on time anyway.</li>
</ol>

<h2>What if you received an eBay 1099-K in error?</h2>
<p>Sometimes the form is simply wrong: it includes sales from an account that is not yours, payments that were fully refunded, or a period after you sold the business. The IRS advice is to contact the filer named in the top-left corner of the form and ask for a corrected 1099-K, keep the original and all correspondence, and not wait to file. If the correction does not arrive in time, report the amount as shown and make an adjustment on your return with an explanation, supported by your records. Do not just leave the form off; the IRS already has a copy and a missing amount can trigger a mismatch notice.</p>

<h3>Reporting business sales on Schedule C</h3>
<p>For resellers, the 1099-K gross figure goes into gross receipts on Schedule C. Refunds and returns are subtracted as returns and allowances, cost of goods sold is calculated in Part III using opening inventory, purchases and closing inventory, and eBay fees and shipping are listed as expenses. If you sell on several marketplaces, report all of them in the same business, and keep a summary showing each platform's 1099-K total so a reviewer can see that everything reconciles.</p>

<h2>Backup withholding and taxpayer IDs</h2>
<p>eBay requires a nine-digit SSN, ITIN or EIN for each account. If you do not provide a valid number, eBay withholds 24% of gross payments for federal backup withholding, and states such as California, Maine and Vermont have their own withholding rules. Withholding is taken from the gross payment, and eBay cannot refund it even if the buyer later returns the item; you recover it as a credit on your tax return. Business sellers should enter the business's legal name and EIN rather than personal details; see <a href="/blog/ein-vs-ssn">EIN vs SSN</a>.</p>

<h2>Sales tax on eBay sales</h2>
<p>eBay collects and remits sales tax on most US orders as a marketplace facilitator, so individual sellers usually do not collect sales tax on eBay sales themselves. That changes if you also sell through your own website or in person, where your own <a href="/blog/sales-tax-nexus">sales tax nexus</a> rules apply. Sales tax eBay collected from buyers is not your income.</p>

<h2>Common eBay 1099-K mistakes</h2>
<ul>
<li><strong>Reporting the 1099-K total as profit</strong> and ignoring costs and fees.</li>
<li><strong>Ignoring a 1099-K for personal items.</strong> The IRS has a copy; report it with the offset so it does not trigger a mismatch notice.</li>
<li><strong>Splitting sales across accounts</strong> to dodge the threshold. eBay combines them.</li>
<li><strong>No cost records.</strong> Resellers need purchase receipts; a spreadsheet updated weekly is enough.</li>
<li><strong>Assuming no form means no tax.</strong> Profit is taxable whether or not you get a 1099-K.</li>
</ul>

<h2>Selling beyond eBay</h2>
<p>Resellers who grow often add direct sales to repeat buyers, local businesses or wholesale customers. Those sales need your own invoices, both for the customer and for your records, since no marketplace report backs them up. Our <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">guide to 1099 forms</a> explains how platform and direct income are reported, and the new guide to <a href="/blog/print-on-demand-business">starting a print on demand business</a> covers another popular way sellers expand.</p>
<p>For direct and wholesale orders, create invoices with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, list items and shipping, add sales tax where it applies, and download each invoice as a PDF.</p>
`,
  },
];
