import type { PostDraft } from "../blog";

export const BUSINESS_FINANCE_2026_C_POSTS: PostDraft[] = [
  {
    slug: "how-to-value-a-small-business",
    title: "How to Value a Small Business: Methods and Worked Example",
    description:
      "How to value a small business using SDE multiples, EBITDA, asset and cash flow methods, with a step-by-step worked example and the adjustments buyers make.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["ebitda", "profit-and-loss-statement", "balance-sheet-small-business"],
    faqs: [
      {
        q: "What is the most common way to value a small business?",
        a: "For owner-operated businesses, the most common approach is a multiple of seller's discretionary earnings (SDE). You take net profit, add back the owner's salary and benefits, interest, depreciation, amortization and genuine one-off costs, then multiply by a figure that reflects risk and growth. Larger businesses with a management team are more often valued on a multiple of EBITDA. Buyers and brokers usually cross-check the result with an asset-based value and a cash flow method before agreeing a price.",
      },
      {
        q: "What is seller's discretionary earnings (SDE)?",
        a: "Seller's discretionary earnings is the total financial benefit a single full-time owner gets from the business in a year. It starts with pre-tax profit and adds back the owner's salary, owner benefits paid by the business, interest, depreciation, amortization and non-recurring or personal expenses. Because it includes the owner's pay, SDE shows what a new owner-operator could take home before paying for their own time, financing and taxes. It is the standard earnings measure for small business sales.",
      },
      {
        q: "What multiple of SDE do small businesses sell for?",
        a: "There is no fixed number. Brokers often describe small owner-operated businesses changing hands at a low single-digit multiple of SDE, but the right figure depends on industry, size, growth, how much the business relies on the owner, customer concentration, how clean the books are and current lending conditions. Treat any published multiple as a starting point only. Recent sales of similar businesses, ideally gathered by a broker or valuer, are the best guide for your situation.",
      },
      {
        q: "Should I use SDE or EBITDA to value my business?",
        a: "Use SDE if the business is run by one owner who works in it full time and would be replaced by a buyer who does the same. Use EBITDA if the business has a paid manager or management team and the buyer is more likely to be an investor than an operator. The key difference is that EBITDA treats a market-rate salary for the manager as a cost, while SDE adds the owner's pay back. Using the wrong one can distort the price.",
      },
      {
        q: "How do you value a business with no profit?",
        a: "If a business has little or no profit, an earnings multiple produces a very low number, so the floor is usually asset value: what the equipment, inventory and other assets would sell for, minus liabilities. Some buyers pay above that for strong revenue, customer lists, contracts or a brand, but they will want evidence that profit is achievable. Startups with high growth are sometimes valued on revenue multiples, but that is rare for ordinary small businesses and depends heavily on the buyer.",
      },
      {
        q: "Does a business valuation include inventory and cash?",
        a: "It depends on the deal. Many small business sales are priced on a cash-free, debt-free basis, so the seller keeps the cash and pays off debts. Inventory is often added on top of the agreed price at cost, or a normal level of working capital is included and the price is adjusted if the actual level at closing is higher or lower. Always confirm in writing what the headline price includes, because it can change the amount you actually receive by a large margin.",
      },
      {
        q: "How much does a professional business valuation cost?",
        a: "Costs vary with the size and complexity of the business and the purpose of the valuation. A broker's opinion of value is sometimes free if you list with them, while a formal written valuation from a credentialed appraiser, needed for some loans, tax filings, estate planning or legal disputes, costs considerably more. Ask for a fixed quote and the scope in advance. If a lender or tax authority is involved, check what type of valuation report they will accept before commissioning one.",
      },
      {
        q: "How can I increase the value of my small business before selling?",
        a: "Start with the items buyers discount for. Keep clean, consistent monthly books and separate personal spending from business spending. Reduce dependence on yourself by documenting processes and training staff. Spread revenue across more customers, put recurring work on written contracts, and collect receivables promptly so working capital looks healthy. Fix legal loose ends such as leases, licences and supplier agreements. These steps raise both the earnings figure and the multiple a buyer is willing to pay.",
      },
      {
        q: "Is the asset-based method useful for service businesses?",
        a: "Usually only as a floor. Service businesses such as agencies, consultancies or cleaning companies often own little equipment, so their asset value is far below what a buyer would pay for the earnings stream. The asset-based method is more relevant for asset-heavy businesses, such as manufacturing, transport or equipment hire, and for businesses that are losing money, where the realistic alternative to a sale is closing down and selling the assets individually.",
      },
    ],
    content: `<p>Here is how to value a small business in short: work out seller's discretionary earnings (SDE), the profit a full-time owner actually gets from the business, multiply it by a figure that reflects risk and growth, then cross-check the answer against asset value and expected cash flow. Finally, adjust for debt, cash and working capital to reach the amount the seller receives.</p>

<p>That is the method brokers, buyers and lenders use for most owner-run businesses with a few million dollars of revenue or less. This guide explains each step, compares the main business valuation methods, and walks through a full numerical example so you can estimate a realistic range for your own company before you speak to a broker or buyer.</p>

<h2>Why the valuation method matters</h2>

<p>A small business is worth what a buyer will pay for the future cash it produces, adjusted for the risk that the cash will not arrive. Different methods approach that idea from different angles:</p>

<ul>
<li><strong>Earnings (market) methods</strong> apply a multiple to SDE or EBITDA, based on what similar businesses have sold for.</li>
<li><strong>Asset-based methods</strong> value what the business owns minus what it owes.</li>
<li><strong>Income methods</strong> estimate future cash flows and discount them back to today.</li>
</ul>

<p>Most small business sales settle on an earnings multiple, but serious buyers check the others. If the three methods give wildly different answers, that is a signal to look harder at the numbers rather than pick the most flattering one.</p>

<h2>Step 1: Get clean financial statements</h2>

<p>Every valuation starts with reliable numbers. You need at least three years of <a href="/blog/profit-and-loss-statement">profit and loss statements</a>, a current <a href="/blog/balance-sheet-small-business">balance sheet</a>, and the tax returns that match them. Buyers will compare the two, and any gap between what the accounts say and what was declared for tax will either reduce the price or end the conversation.</p>

<p>Clean books also mean revenue that can be traced to real customers. Consistent, numbered invoices make that easy. If you issue invoices from scattered templates or handwritten pads, tidy that up well before a sale; an online invoice generator with sequential numbering gives you a clear trail, and the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you set a consistent format. Separate personal spending from business spending now, because every personal expense you add back later is one more item a buyer has to take on trust.</p>

<h2>Step 2: Calculate seller's discretionary earnings</h2>

<p>SDE shows the total benefit a single owner-operator gets from the business. The formula is:</p>

<p><strong>SDE = pre-tax net profit + owner's salary and benefits + interest + depreciation and amortization + one-off and discretionary expenses</strong></p>

<p>Typical add-backs include:</p>

<ul>
<li>The owner's salary, payroll taxes on it, and health insurance or pension contributions paid by the business for the owner.</li>
<li>Interest on business loans, because the buyer will arrange their own financing.</li>
<li>Depreciation and amortization, which are non-cash accounting charges (see <a href="/blog/how-to-calculate-depreciation">how depreciation is calculated</a>).</li>
<li>Genuinely one-off costs, such as a lawsuit settlement or a one-time office move.</li>
<li>Personal expenses run through the business, such as a family member's phone or a personal vehicle, if you can document them.</li>
</ul>

<p>Be strict. Buyers and their accountants will challenge every add-back, and an add-back you cannot prove usually gets removed, taking a multiple of its value off the price with it.</p>

<h2>SDE vs EBITDA: which earnings figure to use</h2>

<p>SDE and <a href="/blog/ebitda">EBITDA</a> look similar, but they suit different businesses. The table summarizes the difference.</p>

<table>
<thead>
<tr><th>Feature</th><th>SDE</th><th>EBITDA</th></tr>
</thead>
<tbody>
<tr><td>Owner's pay</td><td>Added back in full</td><td>Market-rate manager salary treated as a cost</td></tr>
<tr><td>Typical business</td><td>Owner-operated, one main owner working full time</td><td>Larger firms with a management team</td></tr>
<tr><td>Typical buyer</td><td>Individual who will run it</td><td>Investor, private equity or a competitor</td></tr>
<tr><td>Multiple applied</td><td>Usually lower</td><td>Usually higher, reflecting lower risk and larger size</td></tr>
</tbody>
</table>

<p>Applying an EBITDA-style multiple to SDE is a common seller mistake. It double counts the owner's salary and inflates the price beyond what any buyer will finance.</p>

<h2>Step 3: Choose a realistic multiple</h2>

<p>The multiple is a shorthand for risk and growth. A higher multiple means a buyer expects the earnings to be stable or growing; a lower one means they see more ways for the earnings to fall. Factors that push the multiple up or down include:</p>

<ul>
<li><strong>Owner dependence:</strong> if customers buy from you personally, the business is worth less without you.</li>
<li><strong>Customer concentration:</strong> one customer providing a large share of revenue is a major risk.</li>
<li><strong>Recurring revenue:</strong> contracts, subscriptions and repeat customers raise value.</li>
<li><strong>Trend:</strong> three years of rising revenue and margins beat a flat or falling trend.</li>
<li><strong>Industry and size:</strong> larger businesses and sectors with steady demand attract higher multiples.</li>
<li><strong>Quality of records:</strong> clear books reduce perceived risk.</li>
<li><strong>Financing:</strong> many small deals depend on bank or SBA lending, and lenders will only fund a price the cash flow can support. The <a href="/blog/sba-loans">guide to SBA loans</a> explains how those loans work in the United States.</li>
</ul>

<p>Brokers often describe owner-operated businesses selling at a low single-digit multiple of SDE, but published averages are only a starting point. Comparable sales in your industry and region, usually gathered by a broker or professional valuer, are far more useful than any general rule of thumb.</p>

<h2>Step 4: Cross-check with asset and cash flow methods</h2>

<h3>Asset-based value</h3>

<p>Add up the fair market value of the assets, such as equipment, vehicles, inventory and receivables, then subtract liabilities. This gives a floor: a profitable business should be worth at least its net assets, and a loss-making one may be worth little more. For service businesses with few physical assets, the asset value will usually sit well below the earnings-based value.</p>

<h3>Discounted cash flow</h3>

<p>A discounted cash flow (DCF) estimate projects cash flow for several years, then discounts it at a rate that reflects risk. Small business discount rates are high because the risk is high, and small changes in the assumptions swing the answer widely. For most owner-run firms, DCF is a useful sanity check rather than the main method. If you already keep a <a href="/blog/cash-flow-forecast">cash flow forecast</a>, you have most of the inputs.</p>

<p>A simple illustration: if a business is expected to produce $100,000 of free cash flow next year, growing 3% a year, and a buyer wants a 25% annual return for the risk, a basic perpetual growth formula gives $100,000 divided by (0.25 minus 0.03), or about $455,000. Raise the required return to 30% and the value drops to about $370,000. That sensitivity is exactly why buyers rely on several methods rather than one.</p>

<h3>Rules of thumb</h3>

<p>Some industries have informal rules of thumb, such as a percentage of annual revenue or a multiple of monthly recurring revenue. They can be a quick reasonableness check, but they ignore profit, so a business with weak margins will look far more valuable than it is. Use them only alongside an earnings-based figure.</p>

<h2>Worked example: valuing a landscaping business</h2>

<p>Here is how to value a small business with real numbers. The figures below are illustrative, including the multiple, and are not a guide to what any actual business is worth.</p>

<p>GreenLine Landscaping has one owner who works full time. Last year it reported revenue of $820,000 and pre-tax net profit of $96,000. The accounts also show:</p>

<ul>
<li>Owner's salary: $70,000, plus $9,000 of health insurance paid by the business</li>
<li>Interest on an equipment loan: $6,000</li>
<li>Depreciation: $24,000</li>
<li>A one-off legal fee for a boundary dispute: $5,000</li>
</ul>

<p><strong>SDE calculation</strong></p>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Pre-tax net profit</td><td>$96,000</td></tr>
<tr><td>Add owner's salary</td><td>$70,000</td></tr>
<tr><td>Add owner's health insurance</td><td>$9,000</td></tr>
<tr><td>Add interest</td><td>$6,000</td></tr>
<tr><td>Add depreciation</td><td>$24,000</td></tr>
<tr><td>Add one-off legal fee</td><td>$5,000</td></tr>
<tr><td><strong>SDE</strong></td><td><strong>$210,000</strong></td></tr>
</tbody>
</table>

<p><strong>Applying a range of multiples</strong></p>

<p>GreenLine has steady repeat contracts but relies heavily on the owner for sales, so a buyer is unlikely to pay a premium. Testing a range:</p>

<table>
<thead>
<tr><th>Illustrative SDE multiple</th><th>Business value</th></tr>
</thead>
<tbody>
<tr><td>2.0x</td><td>$420,000</td></tr>
<tr><td>2.5x</td><td>$525,000</td></tr>
<tr><td>3.0x</td><td>$630,000</td></tr>
</tbody>
</table>

<p><strong>Cross-check against assets.</strong> The trucks, mowers and trailers have a fair market value of about $180,000. The earnings-based range is well above the asset floor, which makes sense for a profitable business.</p>

<p><strong>Cross-check against debt service.</strong> Suppose a buyer pays $525,000, funds it with a loan costing about $75,000 a year in repayments, and needs a $70,000 salary to live on. That leaves $210,000 minus $75,000 minus $70,000, or $65,000 of cushion for equipment replacement, taxes and a bad year. A lender will look at this cushion closely. At $630,000, the loan repayments rise and the cushion shrinks, which is why the top of the range may be hard to finance.</p>

<p><strong>From business value to seller proceeds.</strong> If the deal is cash-free and debt-free at $525,000, the owner pays off the $60,000 equipment loan and keeps the business cash. After broker fees and tax, the amount in the owner's pocket will be noticeably less than the headline price, so model it before agreeing terms.</p>

<h2>How to value a small business: common mistakes</h2>

<ol>
<li><strong>Using revenue alone.</strong> Two businesses with the same revenue can have very different profits. Revenue multiples rarely apply to ordinary small firms; see <a href="/blog/revenue-vs-profit">revenue vs profit</a> for why.</li>
<li><strong>Unprovable add-backs.</strong> Cash income that never reached the books and personal expenses with no receipts will not survive due diligence.</li>
<li><strong>Ignoring working capital.</strong> A buyer needs receivables, stock and cash to run the business from day one. If the deal does not leave enough <a href="/blog/working-capital">working capital</a>, expect a price adjustment.</li>
<li><strong>Picking the wrong multiple.</strong> Applying a multiple from a different industry or a much larger company gives a number no buyer will pay.</li>
<li><strong>Valuing hope.</strong> Buyers pay for proven earnings, not the growth you plan to achieve next year.</li>
</ol>

<h2>Preparing your business so it is worth more</h2>

<p>The best time to think about how to value a small business is two or three years before a sale, because that is long enough to change the numbers buyers see. Practical steps:</p>

<ul>
<li>Keep monthly accounts closed on time and reconciled to the bank.</li>
<li>Invoice promptly and chase overdue accounts, so receivables are current; <a href="/blog/days-sales-outstanding">days sales outstanding</a> is a metric buyers check.</li>
<li>Write down how the business runs and train someone else to handle sales and key customers.</li>
<li>Put regular customers on written agreements and price increases on a schedule.</li>
<li>Track gross margin by service line and drop work that does not pay.</li>
</ul>

<p>A formal valuation from a qualified appraiser, accountant or business broker is worth paying for when the stakes are high, such as a sale, partner buyout, divorce, estate planning or a loan application. Tax on a business sale can be significant and depends on how the deal is structured, so check with a qualified adviser before signing.</p>

<h2>Conclusion</h2>

<p>Knowing how to value a small business comes down to three things: an honest earnings figure, a multiple that matches the risk, and cross-checks against assets and cash flow. Run the numbers yourself first, using the worked example above as a template, and you will negotiate from facts rather than hope. Clean invoicing is part of that story, so if your records need tidying, start issuing consistent, numbered invoices with the free <a href="/invoice-generator">invoice generator</a> and browse more guides in the <a href="/blog/category/business-finance">business finance</a> section.</p>`,
  },
  {
    slug: "sba-loans",
    title: "SBA Loans 2026: 7(a), 504 and Microloan Rates and Rules",
    description:
      "SBA loans explained for 2026: 7(a) rate caps and fees, 504 and microloan limits, the new ownership rules, eligibility, and a worked repayment example.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-financing-vs-line-of-credit",
      "business-credit-score",
      "revenue-based-financing",
    ],
    jurisdiction: "United States",
    faqs: [
      {
        q: "What is an SBA loan?",
        a: "An SBA loan is a business loan made by a bank, credit union or other approved lender and partly guaranteed by the US Small Business Administration. The SBA does not usually lend the money itself. Its guarantee means the lender loses less if the borrower defaults, which lets lenders offer longer terms and lower down payments than many conventional business loans. The main programs are 7(a) loans, 504 loans for real estate and major equipment, and microloans of up to $50,000.",
      },
      {
        q: "What is the interest rate on an SBA 7(a) loan in 2026?",
        a: "SBA does not set one rate. Lenders negotiate the rate with you, but it cannot exceed SBA's maximums. For variable-rate 7(a) loans, the maximum spread over the base rate, usually the prime rate, is 6.5 percentage points for loans of $50,000 or less, 6.0 for $50,001 to $250,000, 4.5 for $250,001 to $350,000 and 3.0 above $350,000. SBA publishes separate fixed-rate maximums. Your actual rate depends on prime at the time and your credit profile.",
      },
      {
        q: "How much does an SBA 7(a) loan cost in fees?",
        a: "The main borrower cost is the upfront guaranty fee, a percentage of the guaranteed portion that the lender may pass on to you. Industry summaries of the fiscal year 2027 notice, covering loans approved from October 1, 2026, list 2% for loans of $150,000 or less and 3% for $150,001 to $700,000, with higher tiers above that, and 0% for certain qualifying loans. Lenders may also charge packaging and closing costs. Ask your lender for a written fee breakdown.",
      },
      {
        q: "Who is eligible for an SBA loan?",
        a: "Generally, the business must be for-profit, operating in the United States, within SBA size standards and not in an ineligible industry. Owners must show creditworthiness, a reasonable ability to repay, and that credit is not available on reasonable terms elsewhere. Since March 1, 2026, SBA guidance requires 7(a) and 504 borrowers to be wholly owned by US citizens or nationals whose principal residence is in the United States. Check the current SOP with your lender, because these rules have changed several times.",
      },
      {
        q: "Can green card holders still get SBA loans?",
        a: "Under SBA guidance that took effect for applications from March 1, 2026, lawful permanent residents can no longer hold any ownership in a business applying for a 7(a) or 504 loan, and reports indicate the requirement was later extended to microloans. This reversed earlier rules that allowed some ownership by permanent residents. Rules on non-owner roles are more nuanced. Because this area has changed repeatedly, confirm the current position directly with an SBA lender or your local SBA district office.",
      },
      {
        q: "What is the difference between SBA 7(a) and 504 loans?",
        a: "A 7(a) loan is the general-purpose program. It can fund working capital, equipment, inventory, real estate, refinancing and business purchases, up to $5 million. A 504 loan is narrower: it funds major fixed assets such as buildings, land and long-life equipment, with a long-term fixed rate. A 504 project is usually split between a bank, a Certified Development Company and the borrower. 504 loans cannot be used for working capital or inventory.",
      },
      {
        q: "How long does it take to get an SBA loan?",
        a: "Timing varies with the lender, the program and how complete your application is. Lenders with delegated authority can approve loans without sending them to SBA for review, which is usually faster. SBA Express loans are designed for quicker decisions. Larger loans, real estate deals and business acquisitions take longer because of appraisals, environmental reviews and legal work. Having tax returns, financial statements, a debt schedule and a business plan ready before you apply is the best way to avoid delays.",
      },
      {
        q: "Do SBA loans have prepayment penalties?",
        a: "Some do. For 7(a) loans with a maturity of 15 years or more, SBA charges a prepayment fee if you voluntarily prepay 25% or more of the outstanding balance within the first three years after first disbursement. The fee is 5% of the prepaid amount in year one, 3% in year two and 1% in year three. Shorter loans do not carry this SBA fee, but check your lender's note for any other terms before you sign.",
      },
      {
        q: "What credit score do you need for an SBA loan?",
        a: "SBA does not publish a single minimum personal credit score for 7(a) loans. Lenders set their own credit policies, and many look at both personal credit and business credit history, along with cash flow, collateral and experience. A stronger score usually means more lender options and better pricing. If your score is weak, work on paying bills on time and reducing balances, and read up on building a business credit profile before applying.",
      },
      {
        q: "Can I use an SBA loan to buy a business?",
        a: "Yes. 7(a) loans are commonly used to finance the purchase of an existing business, including goodwill. Lenders will want a business valuation, the seller's tax returns and financial statements, and a cash injection from the buyer. SBA's rules on equity injection and seller financing for change-of-ownership deals were revised in recent SOP updates, so ask your lender which version applies to your application date and how much of your own money you will need.",
      },
    ],
    content: `<p>SBA loans are business loans made by banks and other approved lenders and partly guaranteed by the US Small Business Administration. The guarantee lowers the lender's risk, so borrowers get longer terms, capped interest rates and smaller down payments. The main programs are 7(a) loans up to $5 million, 504 loans for property and major equipment, and microloans up to $50,000.</p>

<p>This guide covers how each program works, the 7(a) rate caps and fees that apply in late 2026, who qualifies under the tightened 2026 ownership rules, and a worked example of what a loan actually costs. Rules and fees change every fiscal year, so treat the figures here as a starting point and confirm them with an SBA lender or on sba.gov before you apply.</p>

<h2>How SBA loans work</h2>

<p>The SBA is mostly a guarantor, not a lender. You apply to a participating bank, credit union or other lender. If approved, SBA guarantees a share of the loan, so if you default, the lender recovers part of its loss from SBA. In return, the lender must follow SBA's Standard Operating Procedures (SOPs), including caps on interest rates and rules on how the money can be used.</p>

<p>Two points matter for borrowers. First, SBA loans still require you to qualify: lenders look at cash flow, credit, collateral and experience. Second, SBA loans are meant for businesses that cannot get credit on reasonable terms elsewhere, so lenders will document why a conventional loan is not suitable. SBA loans are not grants, and the money must be repaid.</p>

<h2>SBA 7(a) loans: the main program</h2>

<p>The 7(a) program is the most widely used of the SBA loans. It can fund working capital, equipment, inventory, real estate, refinancing of eligible debt and the purchase of an existing business. Key features from SBA's published terms:</p>

<table>
<thead>
<tr><th>Type</th><th>Maximum amount</th><th>SBA guarantee</th></tr>
</thead>
<tbody>
<tr><td>Standard 7(a)</td><td>$5 million</td><td>85% up to $150,000; 75% above</td></tr>
<tr><td>7(a) Small</td><td>$350,000</td><td>85% up to $150,000; 75% above</td></tr>
<tr><td>SBA Express</td><td>$500,000</td><td>50%</td></tr>
<tr><td>Export Express</td><td>$500,000</td><td>90% up to $350,000; 75% above</td></tr>
</tbody>
</table>

<p>Maturities are generally up to 10 years for working capital and equipment, and up to 25 years where real estate or long-life equipment is financed. Revolving lines are available under SBA Express and the CAPLines programs. SBA also runs a Working Capital Pilot for asset-based lines of credit, and its program page now lists AI-related equipment and installation among eligible uses of 7(a) proceeds.</p>

<h3>SBA 7(a) loan rates in 2026</h3>

<p>Lenders set the rate, but it cannot exceed SBA's maximum. For variable-rate loans, the maximum is the base rate (usually the prime rate) plus a spread that depends on loan size:</p>

<table>
<thead>
<tr><th>Loan amount</th><th>Maximum spread over base rate</th></tr>
</thead>
<tbody>
<tr><td>$50,000 or less</td><td>6.5 percentage points</td></tr>
<tr><td>$50,001 to $250,000</td><td>6.0 percentage points</td></tr>
<tr><td>$250,001 to $350,000</td><td>4.5 percentage points</td></tr>
<tr><td>Over $350,000</td><td>3.0 percentage points</td></tr>
</tbody>
</table>

<p>Fixed-rate maximums are published separately by SBA and move with market rates. Because prime has changed during 2026, check the current prime rate on the day you compare offers. The formula is simple: <strong>maximum variable rate = prime rate + allowed spread</strong>. Your lender can charge less than the maximum, and a strong application gives you room to negotiate.</p>

<h3>7(a) fees</h3>

<p>SBA charges lenders an upfront guaranty fee on loans, which lenders may pass on to borrowers, and an annual service fee, which lenders may not pass on. The amounts are reset each fiscal year in an SBA Information Notice. For fiscal year 2027 (loans approved October 1, 2026 to September 30, 2027), industry summaries of the notice report:</p>

<ul>
<li>2% of the guaranteed portion for loans of $150,000 or less with maturities over 12 months.</li>
<li>3% of the guaranteed portion for loans of $150,001 to $700,000.</li>
<li>3.5% of the guaranteed portion up to $1 million, plus 3.75% of the guaranteed portion above $1 million, for loans over $700,000.</li>
<li>0.25% of the guaranteed portion for loans with maturities of 12 months or less.</li>
<li>A 0% upfront fee for qualifying loans of $700,000 or less to manufacturers (NAICS 31 to 33), specified food supply chain businesses and businesses in rural areas, and for SBA Express loans to eligible veteran-owned businesses.</li>
</ul>

<p>In fiscal year 2026 the manufacturer waiver applied to loans up to $950,000, so the threshold has dropped. Confirm the fee for your exact loan with your lender before you sign, as fee notices include detailed conditions.</p>

<h2>SBA 504 loans for property and equipment</h2>

<p>The 504 program funds major fixed assets: buying or building premises, renovating buildings, buying land, and machinery or equipment with a useful life of at least 10 years. It also covers some refinancing of qualified debt. It cannot be used for working capital, inventory or rental property investment.</p>

<p>A typical 504 project is split three ways: a bank lends around 50% with a first lien, a Certified Development Company (CDC) lends around 40% backed by SBA, and the borrower puts in around 10%. Start-ups and special-purpose properties usually need a larger contribution. The CDC portion carries a fixed rate tied to US Treasury rates, with 10, 20 or 25-year maturities. SBA's page states a maximum of $5 million for most projects, and up to $5.5 million for certain manufacturing and energy projects. Total fees are roughly 3% of the debenture and can usually be financed.</p>

<h2>SBA microloans</h2>

<p>Microloans are made through nonprofit intermediary lenders rather than banks. According to SBA, they go up to $50,000, the average is about $13,000, the maximum term is seven years, and rates generally range from 8% to 13%. Funds can be used for working capital, inventory, supplies, furniture, fixtures, machinery and equipment, but not to pay existing debts or buy real estate. Many intermediaries also provide training or mentoring, which makes microloans popular with start-ups and very small firms.</p>

<h2>SBA loan eligibility, including the 2026 ownership rules</h2>

<p>To qualify for SBA loans, a business generally needs to:</p>

<ol>
<li>Be an operating, for-profit business located in the United States.</li>
<li>Meet SBA size standards for its industry.</li>
<li>Not be an ineligible business type, such as passive investment, lending or speculative businesses.</li>
<li>Show it cannot obtain the credit on reasonable terms from non-federal sources.</li>
<li>Be creditworthy, with a reasonable ability to repay from business cash flow.</li>
<li>Meet the current citizenship and residency rules for owners.</li>
</ol>

<p>The last point changed significantly in 2026. Under SBA Procedural Notice 5000-876626, for 7(a) and 504 applications entering review on or after March 1, 2026, the business must be wholly owned by US citizens or US nationals whose principal residence is in the United States. Lawful permanent residents can no longer hold ownership in an applicant business. This replaced a short-lived rule that allowed up to 5% foreign ownership from January 1, 2026, and industry reports indicate the requirement was later extended to microloans. Rules for non-owner managers and key employees are more detailed, so ask your lender to confirm how they apply to you.</p>

<p>Other policy updates affect the details of underwriting. SOP 50 10 8 took effect on June 1, 2025, and SOP 50 10 8.1, effective October 1, 2026, revised several 7(a) and 504 rules, including for change-of-ownership transactions. If you are buying a business, ask which SOP version your application falls under and what equity injection is required.</p>

<h2>Worked example: what a 7(a) loan costs</h2>

<p>A small distribution company wants $400,000 for equipment and working capital, repaid over 10 years at a variable rate. Assume, for illustration only, that prime is 7.00%.</p>

<ul>
<li><strong>Maximum rate:</strong> the loan is over $350,000, so the cap is prime + 3.0 = 10.00%.</li>
<li><strong>Guaranteed portion:</strong> 75% of $400,000 = $300,000.</li>
<li><strong>Upfront guaranty fee:</strong> the loan falls in the $150,001 to $700,000 tier, so 3% of $300,000 = $9,000, if passed on in full and no waiver applies.</li>
<li><strong>Monthly payment at 10.00% over 120 months:</strong> about $5,286.</li>
<li><strong>Total interest over 10 years:</strong> about $234,300, assuming the rate stays at 10.00%.</li>
</ul>

<p>Compare that with a $40,000 microloan at 10% over six years: the payment is about $741 a month and total interest about $13,350. The size of the payment relative to your monthly cash flow is what lenders care about most.</p>

<p>Lenders look at debt service coverage: how many times your cash flow covers the loan payments. If the distribution company generates $95,000 of annual cash flow available for debt service and the new loan needs about $63,400 a year, coverage is roughly 1.5 times. A thin margin makes approval harder, so build a <a href="/blog/cash-flow-forecast">cash flow forecast</a> showing how the business will meet repayments in a slow month.</p>

<h2>How to apply for SBA loans</h2>

<ol>
<li><strong>Decide what you need the money for.</strong> The use of funds determines the program: 7(a) for general needs, 504 for property and long-life equipment, microloans for small amounts.</li>
<li><strong>Check eligibility,</strong> including size standards and the ownership rules above.</li>
<li><strong>Gather documents:</strong> business and personal tax returns, a current <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and <a href="/blog/balance-sheet-small-business">balance sheet</a>, a debt schedule, a business plan or projections, and ownership details.</li>
<li><strong>Find lenders.</strong> SBA's Lender Match tool on sba.gov connects you with participating lenders. Speak to more than one.</li>
<li><strong>Compare offers</strong> on rate, fees, term, collateral and covenants, not just the monthly payment.</li>
</ol>

<p>Strong receivables help any credit application. Lenders like to see invoices issued promptly with clear payment terms, and a short <a href="/blog/days-sales-outstanding">days sales outstanding</a> figure. If you invoice from a spreadsheet, a consistent tool such as the <a href="/invoice-generator/usa">US invoice generator</a> makes records easier to produce for underwriting.</p>

<h3>Common reasons applications stall</h3>

<ul>
<li>Tax returns that do not match the financial statements, or accounts that are months out of date.</li>
<li>Cash flow that only just covers the proposed repayments, with no cushion.</li>
<li>An unclear use of funds, or a purchase price for a business that the earnings cannot support. If you are buying a company, see <a href="/blog/how-to-value-a-small-business">how to value a small business</a> before agreeing a price.</li>
<li>Ownership that does not meet the current citizenship and residency requirements.</li>
</ul>

<h2>SBA loans vs other financing</h2>

<table>
<thead>
<tr><th>Option</th><th>Best for</th><th>Trade-off</th></tr>
</thead>
<tbody>
<tr><td>SBA 7(a)</td><td>Long-term general financing, business purchases</td><td>Paperwork, personal guarantees, slower approval</td></tr>
<tr><td>SBA 504</td><td>Buying premises or major equipment</td><td>Only for fixed assets; multi-party process</td></tr>
<tr><td>Bank line of credit</td><td>Short-term working capital swings</td><td>Shorter terms, may need strong financials</td></tr>
<tr><td>Invoice financing</td><td>Unlocking cash tied up in receivables</td><td>Costs can be high; depends on customers paying</td></tr>
</tbody>
</table>

<p>If your need is short-term cash tied up in unpaid invoices, compare <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing and lines of credit</a> before committing to a multi-year loan. A healthy <a href="/blog/business-credit-score">business credit score</a> also improves your options across all of these. This article is general information, not financial or legal advice; speak to a qualified adviser and your lender about your circumstances.</p>

<h2>Conclusion</h2>

<p>SBA loans offer longer terms and capped rates that many small businesses cannot get elsewhere, but they come with strict eligibility rules, fees and paperwork, and the 2026 changes to ownership requirements have narrowed who can apply. Know which program fits your purpose, run the repayment numbers yourself, and prepare clean financial records before you approach lenders. Start with tidy invoicing: the free <a href="/invoice-generator">invoice generator</a> creates professional, numbered invoices in your browser, and you can find more funding and cash flow guides in <a href="/blog/category/business-finance">business finance</a>.</p>`,
  },
  {
    slug: "zero-based-budgeting",
    title: "Zero-Based Budgeting: Small Business Guide and Example",
    description:
      "Zero-based budgeting explained for small businesses: how it works, a step-by-step process, a worked ZBB example with numbers, and when it is worth the effort.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "budget-vs-actual",
      "small-business-budget",
      "operating-expenses",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What is zero-based budgeting in simple terms?",
        a: "Zero-based budgeting is a way of building a budget where every cost starts at zero and has to be justified for the coming period, rather than copying last year's figures and adjusting them. Each expense is linked to an activity or goal, and you decide whether it is needed, how much it should cost and whether a cheaper option exists. The result is a budget built around what the business actually needs now, not what it happened to spend before.",
      },
      {
        q: "What is the difference between zero-based and traditional budgeting?",
        a: "Traditional or incremental budgeting takes last year's actual spending as the base and adds or subtracts a percentage, so existing costs are rarely questioned. Zero-based budgeting ignores the old base and asks whether each cost is needed at all. Incremental budgets are faster to prepare and stable, but they tend to carry waste forward. Zero-based budgets take more time but are better at exposing unused subscriptions, outdated contracts and activities that no longer support the business.",
      },
      {
        q: "What are the advantages of zero-based budgeting?",
        a: "The main advantages are lower waste, better links between spending and goals, and clearer accountability, because whoever asks for money has to explain what it buys. It often uncovers forgotten subscriptions, duplicate tools and services nobody uses. It also helps when a business changes direction, because the budget is built from current plans instead of old habits. For a small business, even a few thousand dollars of savings can improve cash flow noticeably.",
      },
      {
        q: "What are the disadvantages of zero-based budgeting?",
        a: "It takes time. Justifying every cost from scratch is more work than adjusting last year's numbers, and in a small business the owner usually does most of it. It can also encourage short-term cuts to things that matter long term, such as training, maintenance or marketing, because their benefits are harder to prove. Some costs are fixed by contract for years, so there is little to decide. Many businesses therefore apply it every few years or to selected cost areas.",
      },
      {
        q: "How often should a small business do zero-based budgeting?",
        a: "There is no rule, but many small businesses find a full zero-based review every two or three years is enough, with ordinary incremental budgets in between. A full review also makes sense when something significant changes: revenue falls, prices rise sharply, the business pivots, or you are preparing for a loan or sale. A lighter option is to apply the zero-based approach to one or two cost categories each year, such as software and marketing.",
      },
      {
        q: "Is zero-based budgeting the same as a zero-sum personal budget?",
        a: "They share a name but differ in focus. In personal finance, a zero-based budget usually means giving every dollar of income a job, so income minus planned spending, saving and debt payments equals zero. In business, zero-based budgeting means justifying every expense from a zero starting point instead of using last year's figures. Both force deliberate decisions about money, but the business version is about questioning costs, while the personal version is about allocating income fully.",
      },
      {
        q: "Which costs should be reviewed first in a ZBB exercise?",
        a: "Start with discretionary costs that have grown quietly: software subscriptions, marketing tools, travel, professional fees, office supplies and outsourced services. These are easy to change and often contain waste. Then review larger variable costs, such as contractor spend and shipping. Fixed contractual costs like rent and loan repayments are reviewed too, but the decision may be about renegotiating at the next renewal rather than cutting now. Payroll needs care and is usually reviewed role by role.",
      },
      {
        q: "Can zero-based budgeting help with cash flow?",
        a: "Yes, indirectly. By removing unnecessary costs and timing essential ones carefully, a zero-based budget reduces the cash going out each month. It does not fix slow-paying customers, though. Cash flow also depends on invoicing promptly, setting clear payment terms and chasing overdue accounts. Combine a zero-based review of spending with a cash flow forecast and good invoicing habits to see the full benefit in your bank balance.",
      },
    ],
    content: `<p>Zero-based budgeting (ZBB) is a method where every expense starts at zero and must be justified for the coming period, instead of copying last year's budget and adding a percentage. For a small business, that means listing each activity, deciding what it really needs to cost, and funding only what supports your goals. It takes more effort, but it cuts waste quickly.</p>

<p>This guide explains how zero-based budgeting works, how it compares with the traditional approach, a step-by-step process you can follow in a spreadsheet, and a worked ZBB example for a small business with real numbers. If you have never built a budget at all, start with the basics in our <a href="/blog/small-business-budget">small business budget guide</a>, then come back here.</p>

<h2>How zero-based budgeting works</h2>

<p>Most budgets are incremental. You take last year's actual spending, adjust each line by a few percent for inflation or growth, and call it next year's budget. That is quick, but it assumes last year's spending was right. Costs that crept in, such as subscriptions nobody uses, contractors kept on out of habit or a premium plan bought for one project, simply roll forward.</p>

<p>Zero-based budgeting reverses that. The starting point for every cost line is zero. To get money in the new budget, each cost must be tied to an activity and justified on its own merits. The basic logic can be written as a simple equation:</p>

<p><strong>ZBB expense budget = sum of (required activity level x cost per unit of activity) for every justified activity</strong></p>

<p>So instead of "marketing: last year's $24,000 plus 5%", you ask what marketing activities will deliver customers next year, what each one costs, and which ones have earned their place. In practice, the ZBB process also sets a priority order, so if revenue comes in lower than planned, you know which items to drop first.</p>

<h2>Zero-based vs incremental budgeting</h2>

<table>
<thead>
<tr><th>Feature</th><th>Incremental budgeting</th><th>Zero-based budgeting</th></tr>
</thead>
<tbody>
<tr><td>Starting point</td><td>Last year's actuals</td><td>Zero for every line</td></tr>
<tr><td>Key question</td><td>How much more or less than last year?</td><td>Do we need this at all, and at what cost?</td></tr>
<tr><td>Time required</td><td>Low</td><td>Medium to high</td></tr>
<tr><td>Good at</td><td>Stability, speed, simple businesses</td><td>Finding waste, realigning spending to goals</td></tr>
<tr><td>Risk</td><td>Carrying old waste forward</td><td>Cutting long-term investments too hard</td></tr>
</tbody>
</table>

<p>Neither method is always better. Many small businesses run incremental budgets most years and use a zero-based review every few years, or when conditions change sharply.</p>

<h2>When zero-based budgeting makes sense for a small business</h2>

<p>The approach is most useful when:</p>

<ul>
<li>Margins have tightened and you need to find savings without guessing.</li>
<li>Revenue has fallen, or a major customer has gone.</li>
<li>The business has grown quickly and spending has spread across many tools, suppliers and cards.</li>
<li>You are changing direction, for example moving from project work to retainers or adding a product line.</li>
<li>You are preparing for a loan application or a sale, and want <a href="/blog/operating-expenses">operating expenses</a> that you can defend line by line.</li>
</ul>

<p>It is less useful for a very simple business where almost every cost is fixed, such as a one-person consultancy whose only real costs are insurance, an accountant and a laptop. There is little to question, so a simple annual review will do.</p>

<h2>Step-by-step: how to build a zero-based budget</h2>

<ol>
<li><strong>Set the goals and revenue target.</strong> Write down what the business needs to achieve next year, such as revenue, number of clients or a new service. Use a conservative revenue estimate, because ZBB is about matching costs to realistic income.</li>
<li><strong>List every activity.</strong> Group the business into activities or cost areas: delivery, sales and marketing, administration, premises, technology, finance. Under each, list what is done and why.</li>
<li><strong>Pull the real spending data.</strong> Export 12 months of bank and card transactions and your accounting reports. You are not using last year as the base, but you need to know what is being paid for. This is where forgotten costs appear.</li>
<li><strong>Justify each cost from zero.</strong> For every item, ask: is it necessary to deliver the goals? What is the minimum level needed? Is there a cheaper or better way? Record the reason in a column next to the amount.</li>
<li><strong>Rank items into priority tiers.</strong> Tier 1 is essential to operate legally and serve customers. Tier 2 supports growth or efficiency. Tier 3 is nice to have.</li>
<li><strong>Fund from the top down.</strong> Allocate expected revenue to Tier 1, then Tier 2, then Tier 3 until you hit your target profit. Whatever does not fit is not funded.</li>
<li><strong>Build the monthly cash view.</strong> Spread each cost across the months it will actually be paid, and check it against a <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</li>
<li><strong>Review monthly.</strong> Compare actual spending to the budget each month and keep a short note explaining variances.</li>
</ol>

<h3>Setting up the spreadsheet</h3>

<p>You do not need budgeting software. A single spreadsheet with one row per cost item works well. Useful columns are:</p>

<ul>
<li><strong>Activity or cost area</strong>, such as delivery, sales or administration.</li>
<li><strong>Item</strong>, for example "design software, 5 seats".</li>
<li><strong>Driver and quantity</strong>, such as seats, hours, units or months.</li>
<li><strong>Unit cost</strong>, from current quotes or price lists rather than last year's invoices.</li>
<li><strong>Annual amount</strong>, calculated as quantity times unit cost.</li>
<li><strong>Justification</strong>, one sentence on why the cost is needed.</li>
<li><strong>Priority tier</strong>, 1, 2 or 3.</li>
<li><strong>Owner</strong>, the person responsible for the spending.</li>
</ul>

<p>Sorting the sheet by tier makes the funding decision in step 6 easy to see: add up Tier 1, check the margin left, then add Tier 2 items in order of expected return.</p>

<h3>Handling payroll</h3>

<p>Payroll is usually the largest cost, and it needs more care than software or travel. Rather than asking whether each person is needed, ask what work the business plans to deliver and what capacity that requires. If planned work has grown, the answer may be more hours, not fewer. If it has shrunk, consider reducing contractor hours, overtime or vacancies before anything else. Treat employment changes as a separate decision with proper advice, not a line to trim in a spreadsheet.</p>

<h2>ZBB example for a small business</h2>

<p>Here is a worked example. Brightside Studio is a five-person design agency. Last year its non-payroll overheads were $118,000. An incremental budget would have set next year at $118,000 plus 4%, or $122,720. Instead, the owner rebuilt the overhead budget from zero.</p>

<p><strong>What the review found</strong></p>

<table>
<thead>
<tr><th>Cost line</th><th>Last year</th><th>ZBB decision</th><th>New budget</th></tr>
</thead>
<tbody>
<tr><td>Office rent</td><td>$36,000</td><td>Fixed by lease until next year; keep, renegotiate at renewal</td><td>$36,000</td></tr>
<tr><td>Software subscriptions</td><td>$14,400</td><td>Cut unused seats and two duplicate tools; justified need is 5 seats on core apps</td><td>$8,400</td></tr>
<tr><td>Freelance contractors</td><td>$30,000</td><td>Rebuilt from planned projects: 300 hours at $70</td><td>$21,000</td></tr>
<tr><td>Paid advertising</td><td>$12,000</td><td>Keep only channel that produced clients; 12 months at $600</td><td>$7,200</td></tr>
<tr><td>Travel and events</td><td>$8,600</td><td>Two industry events justified by past client wins</td><td>$4,500</td></tr>
<tr><td>Accounting and legal</td><td>$7,000</td><td>Fixed-fee bookkeeping plus year-end accounts</td><td>$6,600</td></tr>
<tr><td>Insurance</td><td>$4,200</td><td>Required; quotes obtained</td><td>$3,900</td></tr>
<tr><td>Office supplies and misc.</td><td>$5,800</td><td>Rebuilt from monthly needs: $250 a month</td><td>$3,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$118,000</strong></td><td></td><td><strong>$90,600</strong></td></tr>
</tbody>
</table>

<p>The zero-based budget comes to $90,600, which is $27,400 less than last year and $32,120 less than the incremental version. Not every saving is permanent. The owner decided to keep $5,000 as a Tier 2 reserve for a new website, funded only if first-quarter revenue hits target. Even with that, overheads fall to $95,600.</p>

<p><strong>What this means for profit.</strong> If Brightside expects revenue of $640,000 and payroll of $430,000, profit under the incremental budget would be $640,000 minus $430,000 minus $122,720, or $87,280. Under the zero-based budget with the reserve spent, profit is $640,000 minus $430,000 minus $95,600, or $114,400. That is a 31% increase in profit without winning a single new client.</p>

<p>Notice how the contractor line was built: hours needed times the hourly rate. That is the core of zero-based budgeting. Each figure comes from an activity and a unit cost, so it can be checked and adjusted if plans change. If Brightside wins a large project mid-year, the owner can add contractor hours at the same $70 rate and see the exact effect on profit, rather than guessing whether the old contractor budget still covers it.</p>

<h2>Applying ZBB to revenue-side costs</h2>

<p>Zero-based budgeting is usually discussed for overheads, but direct costs benefit too. If you sell products, rebuild <a href="/blog/cost-of-goods-sold">cost of goods sold</a> from planned volumes and current supplier prices rather than last year's percentage. If you bill for services, check whether the costs of delivering each service still fit your pricing; our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> explains how to price so the margin you need is built in.</p>

<p>Administrative processes count as well. Billing, for example, often hides costs: paid invoicing software for features you do not use, or hours spent formatting documents by hand. If your needs are simple, a free tool such as the <a href="/invoice-generator">invoice generator</a> with ready-made <a href="/invoice-templates">invoice templates</a> may be enough, which is exactly the kind of question a zero-based review should ask.</p>

<h2>Common mistakes with zero-based budgeting</h2>

<ul>
<li><strong>Cutting what drives future revenue.</strong> Marketing, training and equipment maintenance are easy targets because their payback is slower. Cut waste, not capacity.</li>
<li><strong>Treating it as a one-off cost-cutting exercise.</strong> The value comes from building habits: every new cost needs a reason.</li>
<li><strong>Ignoring timing.</strong> An annual total can look fine while a quarter with insurance renewals and tax payments leaves you short. Always map the budget to monthly cash.</li>
<li><strong>Too much detail.</strong> A small business does not need hundreds of budget lines. Group small items sensibly and focus the effort on the big and growing costs.</li>
<li><strong>No follow-up.</strong> A budget that nobody compares with actual spending quickly becomes fiction.</li>
</ul>

<h2>A lighter version: zero-based reviews</h2>

<p>If a full exercise feels too heavy, try a zero-based review of just one cost category each quarter. For example, review every software subscription in the first quarter, all suppliers in the second, marketing in the third and insurance and professional fees in the fourth. Each review asks the same questions: what is this for, who uses it, what would happen if we stopped, and is there a cheaper option? Over a year, you will have tested most of your spending without stopping the business to do it. Good <a href="/blog/cash-flow-management">cash flow management</a> habits, such as invoicing on time and chasing late payers, then make sure the savings actually reach the bank.</p>

<p>For tax or legal questions arising from cost changes, such as ending contracts or reclassifying workers, check with a qualified adviser before acting.</p>

<h2>Conclusion</h2>

<p>Zero-based budgeting asks a simple question about every cost: would we choose to spend this money if we were starting today? For a small business, a careful ZBB pass can uncover thousands of dollars of savings, as the example shows, and it ties spending directly to your goals. Use it in full when conditions change, and as a rolling review the rest of the time. Then protect your income side by billing promptly with the free <a href="/invoice-generator">invoice generator</a>, and explore more planning guides in <a href="/blog/category/business-finance">business finance</a>.</p>`,
  },
  {
    slug: "current-ratio-vs-quick-ratio",
    title: "Current Ratio vs Quick Ratio: Formulas and Examples",
    description:
      "Current ratio vs quick ratio explained: both liquidity ratio formulas, the acid-test calculation, worked examples with numbers and what good results look like.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "financial-ratios-small-business",
      "working-capital",
      "balance-sheet-small-business",
      "cash-conversion-cycle",
    ],
    faqs: [
      {
        q: "What is the main difference between the current ratio and the quick ratio?",
        a: "The current ratio compares all current assets with current liabilities, including inventory and prepaid expenses. The quick ratio, also called the acid-test ratio, leaves out inventory and prepaid expenses and counts only cash, short-term investments and receivables. That makes the quick ratio a stricter test of whether a business can pay its short-term bills without selling stock. The gap between the two ratios shows how much of your liquidity depends on inventory.",
      },
      {
        q: "What is the acid-test ratio formula?",
        a: "The acid-test ratio, or quick ratio, is calculated as cash plus marketable securities plus accounts receivable, divided by current liabilities. An alternative version is current assets minus inventory minus prepaid expenses, divided by current liabilities. Both give similar results for most small businesses. For example, with $20,000 cash, $40,000 receivables and $50,000 of current liabilities, the acid-test ratio is $60,000 divided by $50,000, or 1.2.",
      },
      {
        q: "What is a good current ratio for a small business?",
        a: "A current ratio between roughly 1.5 and 2.0 is often described as comfortable, meaning current assets cover short-term debts with room to spare. Below 1.0 means current liabilities exceed current assets, which can signal cash pressure. However, a very high ratio is not automatically good: it may mean too much idle cash or slow-moving stock. The right level depends on your industry, how quickly customers pay and how reliable your cash inflows are.",
      },
      {
        q: "What is a good quick ratio?",
        a: "A quick ratio of about 1.0 or higher is a common rule of thumb, because it means liquid assets alone cover current liabilities. Businesses that collect cash immediately, such as some retailers and restaurants, can operate safely with lower quick ratios because cash comes in daily. Service businesses with slow-paying clients may need higher ratios. Compare your result with your own trend over time and with similar businesses rather than relying on one benchmark.",
      },
      {
        q: "Why is inventory excluded from the quick ratio?",
        a: "Inventory is excluded because it may not turn into cash quickly or at full value. Goods have to be sold, and often invoiced and collected, before they help pay bills. In a downturn, stock may need to be discounted. Prepaid expenses are excluded too, because they cannot be used to pay creditors. Leaving these out shows whether the business could meet its short-term obligations if sales slowed sharply.",
      },
      {
        q: "Can the current ratio be too high?",
        a: "Yes. A current ratio far above what your business needs can point to cash sitting idle instead of earning a return, inventory building up because it is not selling, or receivables that customers are slow to pay. Lenders like a cushion, but owners should look at what makes up the current assets. If the high ratio comes from overdue invoices or old stock, liquidity may be weaker than the number suggests.",
      },
      {
        q: "How can I improve my quick ratio?",
        a: "Increase liquid assets or reduce current liabilities. Practical steps include invoicing promptly, shortening payment terms, chasing overdue accounts, offering easy payment methods, reducing excess stock so cash is not tied up, and refinancing short-term debt into longer-term borrowing where sensible. Retaining more profit in the business rather than drawing it out also helps. Improving collections is often the quickest lever, because it turns receivables into cash.",
      },
      {
        q: "Where do I find the numbers for liquidity ratios?",
        a: "All the inputs come from your balance sheet. Current assets typically include cash, accounts receivable, inventory, short-term investments and prepaid expenses. Current liabilities include accounts payable, accrued expenses, short-term loans, the current portion of long-term debt, credit card balances and taxes due within a year. Make sure the balance sheet is reconciled and up to date, because stale receivables or missing bills will distort the ratios.",
      },
      {
        q: "Is the quick ratio more important than the current ratio?",
        a: "Neither is more important in every case; they answer slightly different questions. The current ratio shows overall short-term coverage, while the quick ratio shows coverage without relying on inventory. For service businesses with little stock, the two are almost the same. For inventory-heavy businesses, the quick ratio is usually the more revealing test, and lenders often look at both. Tracking them together over time gives the clearest picture.",
      },
    ],
    content: `<p>Current ratio vs quick ratio comes down to inventory. The current ratio divides all current assets by current liabilities. The quick ratio, or acid-test ratio, counts only cash, short-term investments and receivables, leaving out inventory and prepaid expenses. Both measure whether you can pay bills due within a year; the quick ratio is the stricter test.</p>

<p>These liquidity ratios are among the first numbers a lender, investor or supplier checks. This guide gives both formulas, works through examples for two very different businesses, explains what good results look like and shows how to improve them. You only need your <a href="/blog/balance-sheet-small-business">balance sheet</a> to calculate them.</p>

<h2>What liquidity ratios measure</h2>

<p>Liquidity is your ability to meet short-term obligations, such as supplier invoices, payroll, rent, taxes and loan repayments due within 12 months, using assets that will turn into cash within the same period. Profit and liquidity are different. A profitable business can still run out of cash if customers pay slowly or stock piles up, which is why lenders look at liquidity ratios alongside the <a href="/blog/profit-and-loss-statement">profit and loss statement</a>.</p>

<p>Liquidity ratios are closely related to <a href="/blog/working-capital">working capital</a>, which is current assets minus current liabilities. Working capital gives you a dollar amount; the ratios turn the same inputs into a proportion so you can compare businesses of different sizes or track your own business over time.</p>

<h2>Current ratio and quick ratio formulas</h2>

<h3>Current ratio</h3>

<p><strong>Current ratio = current assets / current liabilities</strong></p>

<p>Current assets are items expected to become cash within a year: cash, accounts receivable, inventory, short-term investments and prepaid expenses. Current liabilities are obligations due within a year: accounts payable, accrued expenses, short-term loans, the current portion of long-term debt, credit card balances and taxes payable.</p>

<p>A result of 2.0 means you have $2 of current assets for every $1 of current liabilities. A result below 1.0 means short-term debts exceed the assets available to pay them.</p>

<h3>Quick ratio (acid-test ratio)</h3>

<p><strong>Quick ratio = (cash + marketable securities + accounts receivable) / current liabilities</strong></p>

<p>An equivalent approach starts from current assets and removes the less liquid items:</p>

<p><strong>Quick ratio = (current assets - inventory - prepaid expenses) / current liabilities</strong></p>

<p>The name "acid test" comes from an old method of testing whether metal was real gold. The idea is the same: could the business pay its bills right now without needing to sell stock?</p>

<h2>Current ratio vs quick ratio: side by side</h2>

<table>
<thead>
<tr><th>Feature</th><th>Current ratio</th><th>Quick ratio</th></tr>
</thead>
<tbody>
<tr><td>Includes inventory</td><td>Yes</td><td>No</td></tr>
<tr><td>Includes prepaid expenses</td><td>Yes</td><td>No</td></tr>
<tr><td>Strictness</td><td>Broad view of short-term coverage</td><td>Stricter, near-cash coverage only</td></tr>
<tr><td>Common rule of thumb</td><td>Around 1.5 to 2.0</td><td>Around 1.0 or above</td></tr>
<tr><td>Most revealing for</td><td>Overall short-term health</td><td>Inventory-heavy businesses</td></tr>
</tbody>
</table>

<p>The rules of thumb are only starting points. A grocery store that sells stock for cash every day can run safely with ratios that would worry a lender looking at a consultancy with 60-day payment terms.</p>

<h2>Worked example: a retailer and a service business</h2>

<p>Here is how the current ratio vs quick ratio comparison plays out for two businesses with similar current ratios but very different liquidity.</p>

<p><strong>Business A: a hardware store</strong></p>

<ul>
<li>Cash: $30,000</li>
<li>Accounts receivable (trade customers): $20,000</li>
<li>Inventory: $110,000</li>
<li>Prepaid expenses: $5,000</li>
<li>Total current assets: $165,000</li>
<li>Current liabilities: accounts payable $60,000, short-term loan $20,000, accrued expenses $10,000, total $90,000</li>
</ul>

<p><strong>Business B: a marketing agency</strong></p>

<ul>
<li>Cash: $45,000</li>
<li>Accounts receivable: $85,000</li>
<li>Inventory: $0</li>
<li>Prepaid expenses: $5,000</li>
<li>Total current assets: $135,000</li>
<li>Current liabilities: total $75,000</li>
</ul>

<table>
<thead>
<tr><th>Measure</th><th>Hardware store</th><th>Marketing agency</th></tr>
</thead>
<tbody>
<tr><td>Current ratio</td><td>$165,000 / $90,000 = 1.83</td><td>$135,000 / $75,000 = 1.80</td></tr>
<tr><td>Quick ratio</td><td>($30,000 + $20,000) / $90,000 = 0.56</td><td>($45,000 + $85,000) / $75,000 = 1.73</td></tr>
<tr><td>Working capital</td><td>$75,000</td><td>$60,000</td></tr>
</tbody>
</table>

<p>On the current ratio alone, the two look almost identical. The quick ratio tells a different story. Two thirds of the hardware store's current assets are stock, so without selling inventory it could cover only 56 cents of each dollar it owes in the next year. That is normal for a retailer that sells stock steadily, but it means slow sales or an overstocked season could quickly create cash pressure.</p>

<p>The agency's quick ratio of 1.73 looks strong, but its liquidity depends on clients paying $85,000 of invoices. If a large chunk is overdue, the real position is weaker. Checking the age of receivables, or calculating <a href="/blog/days-sales-outstanding">days sales outstanding</a>, shows whether that receivables figure is reliable.</p>

<h3>A third measure: the cash ratio</h3>

<p>The strictest liquidity ratio is the cash ratio: cash and marketable securities divided by current liabilities. For the hardware store it is $30,000 / $90,000 = 0.33; for the agency, $45,000 / $75,000 = 0.60. Few healthy businesses keep a cash ratio of 1.0, because idle cash earns little, but tracking it shows how long you could cope if collections stopped.</p>

<h2>How to interpret your results</h2>

<ul>
<li><strong>Both ratios healthy and stable:</strong> short-term obligations are well covered. Check you are not holding more idle cash or stock than needed.</li>
<li><strong>Current ratio fine, quick ratio low:</strong> liquidity depends on selling inventory. Watch <a href="/blog/inventory-turnover-ratio">inventory turnover</a> closely and avoid overstocking.</li>
<li><strong>Both ratios below 1.0:</strong> current liabilities exceed liquid assets. Build a short-term cash plan and talk to your lender early rather than late.</li>
<li><strong>Ratios falling quarter after quarter:</strong> even if still above the rules of thumb, a downward trend is an early warning.</li>
</ul>

<p>Always look behind the ratio. A high quick ratio built on overdue receivables, or a high current ratio built on obsolete stock, overstates liquidity. Timing matters too: ratios are calculated at a single date, and a balance sheet drawn up just after a large customer payment will look better than one drawn up the day before payroll.</p>

<h2>Tracking the ratios over time: a quarterly example</h2>

<p>A single result is a snapshot. The trend is what tells you whether liquidity is improving or slipping. Here is the hardware store from the example above over four quarters, after the owner decided to reduce stock and chase trade accounts more firmly.</p>

<table>
<thead>
<tr><th>Quarter end</th><th>Cash + receivables</th><th>Inventory + prepaid</th><th>Current liabilities</th><th>Current ratio</th><th>Quick ratio</th></tr>
</thead>
<tbody>
<tr><td>Q1</td><td>$50,000</td><td>$115,000</td><td>$90,000</td><td>1.83</td><td>0.56</td></tr>
<tr><td>Q2</td><td>$58,000</td><td>$104,000</td><td>$88,000</td><td>1.84</td><td>0.66</td></tr>
<tr><td>Q3</td><td>$66,000</td><td>$96,000</td><td>$85,000</td><td>1.91</td><td>0.78</td></tr>
<tr><td>Q4</td><td>$74,000</td><td>$90,000</td><td>$82,000</td><td>2.00</td><td>0.90</td></tr>
</tbody>
</table>

<p>The current ratio barely moved in the first half of the year, because cash was simply replacing stock within current assets. The quick ratio, however, rose from 0.56 to 0.90 over the year. This is the practical value of watching current ratio vs quick ratio together: the current ratio alone would have hidden the improvement, and in a bad year it would equally hide a business becoming more dependent on unsold stock.</p>

<p>Set up a small table like this in a spreadsheet and update it at each month or quarter end, straight after you reconcile your accounts. It takes a few minutes and gives you a far better early warning than waiting for the annual accounts.</p>

<h2>Who looks at these ratios, and why</h2>

<p><strong>Banks and lenders</strong> use both ratios to judge whether you can meet repayments, and some loan agreements include a minimum current ratio as a covenant. Breaching it can allow the lender to demand changes or repayment, so know where you stand before each reporting date.</p>

<p><strong>Suppliers</strong> offering trade credit may ask for financial statements, especially for large accounts. A weak quick ratio can mean lower credit limits or requests for payment upfront.</p>

<p><strong>Buyers and investors</strong> check liquidity during due diligence. A business that needs an immediate cash injection to pay its bills is worth less, which is one reason valuations adjust for working capital; see <a href="/blog/how-to-value-a-small-business">how to value a small business</a> for how that works.</p>

<p><strong>You</strong> are the most important user. Comparing the two ratios each period shows whether problems are building in stock, in collections or in short-term borrowing, while there is still time to act.</p>

<h3>Why results differ by industry</h3>

<p>Industry matters more than any general benchmark. Consider how the current ratio vs quick ratio gap looks for different business models:</p>

<ul>
<li><strong>Retail and wholesale:</strong> large inventories mean a wide gap between the two ratios. A low quick ratio is normal, so watch stock levels and sell-through instead.</li>
<li><strong>Restaurants and cafes:</strong> customers pay at the till and stock is perishable and small, so both ratios can be low while cash still flows daily.</li>
<li><strong>Professional services and agencies:</strong> little or no inventory, so the ratios are almost the same. The real risk sits in receivables and payment terms.</li>
<li><strong>Construction and trades:</strong> materials, work in progress and retentions can tie up cash for months, so liquidity often looks weaker than profit suggests.</li>
<li><strong>Manufacturing:</strong> raw materials, work in progress and finished goods all count as inventory, so the quick ratio is usually far below the current ratio.</li>
</ul>

<p>The best comparison is your own business over time, followed by similar businesses of similar size. Your accountant or banker may be able to tell you what is typical for your sector.</p>

<h2>How to improve your liquidity ratios</h2>

<ol>
<li><strong>Invoice immediately and accurately.</strong> Every day between finishing work and sending an invoice delays cash. A free tool like the <a href="/invoice-generator">invoice generator</a> lets you create and download a PDF invoice in minutes.</li>
<li><strong>Tighten payment terms.</strong> Shorter terms, deposits on large jobs and clear late payment wording all speed up collections.</li>
<li><strong>Chase overdue accounts on a schedule.</strong> Turning receivables into cash raises the cash ratio without changing the quick ratio, and reduces the risk of bad debts.</li>
<li><strong>Cut excess stock.</strong> Selling slow-moving inventory, even at a discount, converts it to cash and improves the quick ratio.</li>
<li><strong>Refinance short-term debt.</strong> Moving a short-term loan to a longer-term facility reduces current liabilities, though it does not reduce total debt.</li>
<li><strong>Retain profit.</strong> Leaving more profit in the business builds cash over time.</li>
</ol>

<p>Many of these steps also shorten your <a href="/blog/cash-conversion-cycle">cash conversion cycle</a>, which measures how long cash is tied up between paying suppliers and collecting from customers.</p>

<h2>Common mistakes when calculating the ratios</h2>

<ul>
<li>Including long-term assets, such as equipment, in current assets.</li>
<li>Forgetting the current portion of long-term debt, which belongs in current liabilities.</li>
<li>Counting receivables that are unlikely to be collected.</li>
<li>Using an out-of-date balance sheet that has not been reconciled to the bank.</li>
<li>Comparing your ratios with businesses in completely different industries.</li>
</ul>

<p>If you are preparing figures for a loan or investor, ask your accountant to check them. Lenders sometimes write minimum current ratio requirements into loan covenants, so understand how your lender defines each term.</p>

<h2>Conclusion</h2>

<p>The current ratio vs quick ratio comparison is quick to calculate and tells you a lot: the current ratio shows overall short-term coverage, and the quick ratio shows how much of that coverage depends on inventory. Track both every month or quarter alongside working capital, and investigate when either moves sharply. The fastest way to improve both is usually faster billing and collection, so issue clear, numbered invoices with the free <a href="/invoice-generator">invoice generator</a> and find more practical guides in <a href="/blog/category/business-finance">business finance</a>.</p>`,
  },
  {
    slug: "inventory-turnover-ratio",
    title: "Inventory Turnover Ratio: Formula, DIO and Examples",
    description:
      "Inventory turnover ratio explained: the formula, how to calculate days inventory outstanding, a worked example with numbers, and practical ways to improve it.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["cost-of-goods-sold", "cash-conversion-cycle", "inventory-management-spreadsheet"],
    faqs: [
      {
        q: "How do you calculate inventory turnover ratio?",
        a: "Divide cost of goods sold for a period by average inventory for the same period. Average inventory is usually the beginning inventory plus ending inventory, divided by two. For example, if cost of goods sold for the year is $480,000 and average inventory is $80,000, inventory turnover is 6.0, meaning the business sold and replaced its average stock six times during the year. Use inventory valued at cost so both figures are on the same basis.",
      },
      {
        q: "What is days inventory outstanding (DIO)?",
        a: "Days inventory outstanding is the average number of days it takes to sell inventory. It is calculated as average inventory divided by cost of goods sold, multiplied by the number of days in the period, usually 365. You can also divide 365 by the inventory turnover ratio. A turnover of 6.0 equals about 61 days. Lower DIO means stock sells faster and less cash is tied up on shelves or in the warehouse.",
      },
      {
        q: "What is a good inventory turnover ratio?",
        a: "It depends heavily on the industry. Businesses selling perishable or fast-moving goods, such as groceries or restaurant supplies, typically turn stock over many times a year. Businesses selling expensive, slow-moving items, such as furniture, jewellery or industrial parts, turn over far less often. Rather than chasing a universal number, compare your ratio with your own past results and with similar businesses, and check whether stockouts or excess stock are causing problems.",
      },
      {
        q: "Should I use sales or cost of goods sold for inventory turnover?",
        a: "Cost of goods sold is the better choice because inventory is recorded at cost. Using sales revenue divides a figure that includes your markup by a figure that does not, which inflates the ratio and makes it look better than it is. Some industry reports and lenders still use sales, so check which version a benchmark is based on before comparing. Whatever you choose, use the same method consistently from period to period.",
      },
      {
        q: "Is a high inventory turnover ratio always good?",
        a: "Usually it indicates efficient stock management and less cash tied up, but a very high ratio can be a warning sign. It may mean you are holding too little stock and losing sales through stockouts, ordering in small, expensive batches, or failing to meet customer demand quickly. The aim is a turnover high enough to keep cash moving but not so high that customers find empty shelves or wait too long for orders.",
      },
      {
        q: "What causes a low inventory turnover ratio?",
        a: "Common causes include over-ordering, slow-moving or obsolete products, weak sales, poor demand forecasting, buying in bulk for discounts that are not needed, and stock recorded in the system that no longer physically exists or cannot be sold. A low ratio ties up cash and increases storage, insurance and obsolescence costs. Reviewing turnover by product or category usually reveals that a small number of items are responsible for most of the problem.",
      },
      {
        q: "How does inventory turnover affect cash flow?",
        a: "Money spent on stock is not available for anything else until the stock is sold and the customer pays. The slower inventory turns, the longer cash is tied up. Days inventory outstanding is one of the three components of the cash conversion cycle, along with days sales outstanding and days payables outstanding. Reducing DIO by even a week or two can release a meaningful amount of cash for a stock-heavy business.",
      },
      {
        q: "How often should I calculate inventory turnover?",
        a: "At minimum, calculate it annually from your accounts. Most product businesses benefit from a monthly or quarterly calculation, using the cost of goods sold for that period and annualizing it or converting it to days. For seasonal businesses, monthly figures are more useful because a single year-end inventory count may not reflect typical stock levels. Calculating by product category as well as overall shows where to act.",
      },
      {
        q: "Do service businesses need to track inventory turnover?",
        a: "Most pure service businesses hold little or no inventory, so the ratio is not relevant. However, businesses that sell materials as part of their service, such as trades, salons, repair shops or print studios, may carry meaningful stock. For them, tracking turnover on parts and supplies helps avoid tying up cash in materials that sit on shelves. Billing those materials promptly on customer invoices matters too.",
      },
    ],
    content: `<p>The inventory turnover ratio shows how many times a business sells and replaces its stock in a period. The formula is cost of goods sold divided by average inventory. Divide 365 by the result to get days inventory outstanding (DIO), the average number of days stock sits before it sells. Higher turnover and lower DIO usually mean less cash tied up.</p>

<p>For any business that sells physical products, this is one of the most useful numbers to track. This guide covers the formula, how to calculate DIO, a step-by-step worked example, how to read the results for your industry, and practical ways to improve turnover without running out of stock.</p>

<h2>The inventory turnover ratio formula</h2>

<p><strong>Inventory turnover ratio = cost of goods sold / average inventory</strong></p>

<p>Where:</p>

<p><strong>Average inventory = (beginning inventory + ending inventory) / 2</strong></p>

<p>Cost of goods sold (COGS) is the direct cost of the products you sold during the period: purchase cost, inbound freight and, for manufacturers, direct materials and labour. If you are not sure how to calculate it, see our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a>. Inventory should be valued at cost, the same basis as COGS, so you are comparing like with like.</p>

<p>Using an average rather than just the year-end figure smooths out the effect of a large delivery or a clearance sale just before the balance sheet date. If stock levels swing a lot through the year, average the 12 month-end balances instead of only the opening and closing figures.</p>

<h3>Why use COGS rather than sales?</h3>

<p>Some sources calculate turnover as sales divided by inventory. Because sales include your markup and inventory does not, that version overstates turnover. If your gross margin is 40%, a sales-based ratio will be roughly two thirds higher than the COGS-based one. Use COGS for your own tracking, and check which version any benchmark uses before comparing. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> explains why the difference matters.</p>

<h2>Days inventory outstanding (DIO)</h2>

<p>Turnover is easier to act on when converted into days:</p>

<p><strong>Days inventory outstanding = (average inventory / cost of goods sold) x 365</strong></p>

<p>or, equivalently:</p>

<p><strong>DIO = 365 / inventory turnover ratio</strong></p>

<p>If you calculate for a quarter, use the quarter's COGS and 91 or 92 days instead of 365. DIO is also called days sales of inventory (DSI) or days in inventory. It is one of the three building blocks of the <a href="/blog/cash-conversion-cycle">cash conversion cycle</a>, along with days sales outstanding and days payables outstanding.</p>

<p>Why bother with days? Because days connect directly to supplier terms and cash. If your suppliers give you 30 days to pay and stock sits for 61 days, you are funding at least 31 days of inventory from your own cash or borrowing, before you even wait for customers to pay. Expressing turnover in days makes that gap obvious, and it gives you a concrete target to work towards, such as cutting a week from average stock holding over the next six months.</p>

<h2>Worked example: calculating the inventory turnover ratio</h2>

<p>Ridgeway Cycles is an independent bike shop. From its accounts for last year:</p>

<ul>
<li>Revenue: $760,000</li>
<li>Cost of goods sold: $480,000</li>
<li>Inventory at start of year (at cost): $90,000</li>
<li>Inventory at end of year (at cost): $70,000</li>
</ul>

<p><strong>Step 1: average inventory</strong> = ($90,000 + $70,000) / 2 = $80,000</p>

<p><strong>Step 2: inventory turnover ratio</strong> = $480,000 / $80,000 = 6.0</p>

<p><strong>Step 3: days inventory outstanding</strong> = 365 / 6.0 = about 61 days</p>

<p>Ridgeway sells through its average stock about six times a year, and a typical item sits in the shop for around two months. For comparison, the sales-based version would give $760,000 / $80,000 = 9.5, which looks far better but does not reflect how quickly the stock really moves.</p>

<h3>Breaking it down by category</h3>

<p>The overall figure hides big differences. Ridgeway's owner split the numbers by category:</p>

<table>
<thead>
<tr><th>Category</th><th>Annual COGS</th><th>Average inventory</th><th>Turnover</th><th>DIO (days)</th></tr>
</thead>
<tbody>
<tr><td>Complete bikes</td><td>$300,000</td><td>$60,000</td><td>5.0</td><td>73</td></tr>
<tr><td>Parts and accessories</td><td>$150,000</td><td>$15,000</td><td>10.0</td><td>37</td></tr>
<tr><td>Clothing</td><td>$30,000</td><td>$5,000</td><td>6.0</td><td>61</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$480,000</strong></td><td><strong>$80,000</strong></td><td><strong>6.0</strong></td><td><strong>61</strong></td></tr>
</tbody>
</table>

<p>Complete bikes tie up three quarters of the inventory and turn slowest. That is where the cash is.</p>

<h3>How much cash faster turnover releases</h3>

<p>Suppose Ridgeway reduces DIO on complete bikes from 73 to 55 days by ordering smaller batches more often, with no change in sales. Average bike inventory needed becomes $300,000 x 55 / 365 = about $45,200, down from $60,000. That releases roughly $14,800 of cash, money that can pay suppliers early for a discount, fund marketing or simply act as a buffer. It also cuts storage space, insurance and the risk of being left with last season's models.</p>

<h2>What is a good inventory turnover ratio?</h2>

<p>There is no single good number, because business models differ so much. As general patterns:</p>

<table>
<thead>
<tr><th>Type of business</th><th>Typical turnover pattern</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>Grocery, food service, florists</td><td>High</td><td>Perishable goods must sell quickly</td></tr>
<tr><td>General retail, e-commerce</td><td>Moderate</td><td>Mix of fast and slow lines, seasonal peaks</td></tr>
<tr><td>Furniture, jewellery, high-end goods</td><td>Low</td><td>Expensive items, wide ranges, slower purchase decisions</td></tr>
<tr><td>Industrial parts, spares</td><td>Low</td><td>Many lines held for availability rather than volume</td></tr>
</tbody>
</table>

<p>Use your own trend as the main yardstick. If turnover is falling year on year while sales are flat, stock is building up. If it is rising and customers are not complaining about availability, your buying is getting more efficient. Industry associations, trade bodies or your accountant may be able to give you sector benchmarks that are calculated on the same basis as yours.</p>

<h2>Reading high and low results</h2>

<p><strong>Low turnover (high DIO)</strong> often points to:</p>

<ul>
<li>Over-ordering or buying large quantities to get a volume discount.</li>
<li>Slow-moving, damaged or obsolete stock that should be cleared.</li>
<li>Weak sales or pricing that is out of line with the market.</li>
<li>Inaccurate stock records, where the system shows stock that does not exist.</li>
</ul>

<p><strong>Very high turnover (low DIO)</strong> can mean excellent stock control, but check for:</p>

<ul>
<li>Frequent stockouts and lost sales.</li>
<li>Rush orders and high delivery costs from ordering too often.</li>
<li>Customers waiting longer than competitors make them wait.</li>
</ul>

<p>Inventory also affects liquidity ratios. A business with slow-moving stock will show a large gap between its current ratio and quick ratio; see <a href="/blog/current-ratio-vs-quick-ratio">current ratio vs quick ratio</a> for how that works.</p>

<h2>How to improve your inventory turnover ratio</h2>

<ol>
<li><strong>Analyse by product.</strong> Rank items by sales and by turnover. A small share of products usually accounts for most of the slow stock.</li>
<li><strong>Clear dead stock.</strong> Discount, bundle or return slow items to suppliers where possible. Cash is worth more than items gathering dust.</li>
<li><strong>Order smaller batches more often.</strong> Compare the cost of extra deliveries with the cash and storage savings.</li>
<li><strong>Improve forecasting.</strong> Use past sales by month, including seasonal peaks, to set reorder points. A simple <a href="/blog/inventory-management-spreadsheet">inventory management spreadsheet</a> is enough for many small businesses.</li>
<li><strong>Negotiate supplier terms.</strong> Shorter lead times and smaller minimum orders let you hold less safety stock.</li>
<li><strong>Review pricing.</strong> Items priced well above market move slowly; items priced too low may sell fast but erode margin. Check gross margin alongside turnover, as covered in <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a>.</li>
<li><strong>Count stock regularly.</strong> Cycle counts keep records accurate, so the ratio reflects reality.</li>
</ol>

<h2>Common calculation mistakes</h2>

<ul>
<li><strong>Mixing sales and cost.</strong> Dividing revenue by inventory at cost inflates turnover, as the example above shows.</li>
<li><strong>Using only year-end stock.</strong> Many businesses run stock down before year end, so a single closing figure makes turnover look better than it is during the rest of the year. Use an average, ideally of monthly balances.</li>
<li><strong>Mismatched periods.</strong> Quarterly COGS divided by average inventory gives a quarterly turnover. Multiply by four to compare with annual figures, or convert to days using the number of days in the quarter.</li>
<li><strong>Ignoring stock that cannot be sold.</strong> Damaged, returned or obsolete items still sitting in the inventory figure drag the ratio down and overstate assets. Write them down in line with your accounting policy.</li>
<li><strong>Comparing different valuation methods.</strong> FIFO, weighted average and other methods give different inventory values when prices are changing, so comparisons between businesses may not be like for like.</li>
</ul>

<h3>Quarterly calculation example</h3>

<p>Ridgeway's spring quarter (91 days) shows COGS of $150,000, opening inventory of $95,000 and closing inventory of $75,000. Average inventory is $85,000. Quarterly turnover is $150,000 / $85,000 = 1.76, which annualizes to about 7.1. DIO for the quarter is $85,000 / $150,000 x 91 = about 52 days. The busy season turns stock faster than the annual average of 61 days, which is exactly what you would expect and why seasonal businesses should track quarterly or monthly figures.</p>

<h2>Manufacturers and online sellers</h2>

<p>Manufacturers hold three kinds of inventory: raw materials, work in progress and finished goods. The overall ratio is still COGS divided by average total inventory, but it helps to track each stage separately. Raw materials turnover shows how well purchasing matches production, while finished goods turnover shows how well production matches demand. A build-up of work in progress often points to bottlenecks on the production floor rather than weak sales.</p>

<p>Online sellers who use third-party fulfilment centres should count stock held there as their own inventory, along with goods in transit that they already own. Storage fees at fulfilment centres can rise for items held a long time, so slow turnover has a direct, visible cost. Sellers who use drop shipping hold little or no inventory, so the ratio matters much less to them than gross margin and return rates.</p>

<h2>Inventory turnover, invoicing and cash flow</h2>

<p>Faster turnover only helps cash flow if customers pay promptly once the stock is sold. For businesses selling on account, such as wholesalers or trade suppliers, the cash conversion cycle combines DIO with how long customers take to pay. Selling stock in 40 days is less useful if invoices then wait 60 days for payment.</p>

<p>Raise invoices as soon as goods ship, show clear payment terms and itemize products so customers can match invoices to deliveries quickly. The free <a href="/invoice-generator">invoice generator</a> lets you list line items with quantities and unit prices, apply one tax rate and a discount, and download a PDF to send. You can also start from a clean <a href="/invoice-templates">invoice template</a> if you want a particular look. Keeping <a href="/blog/working-capital">working capital</a> healthy depends on both sides: stock that sells and invoices that get paid.</p>

<p>Inventory valuation methods and write-downs can affect taxable profit, so check with a qualified accountant before changing how you value or write off stock.</p>

<h2>Conclusion</h2>

<p>The inventory turnover ratio is simple to calculate: cost of goods sold divided by average inventory, with DIO giving the same answer in days. Calculate it overall and by category, watch the trend, and focus on the slow lines where cash is tied up. Pair better stock control with prompt invoicing and collection, and the improvement shows up in your bank balance. Create your next invoice with the free <a href="/invoice-generator">invoice generator</a> and explore more guides in <a href="/blog/category/business-finance">business finance</a>.</p>`,
  },
];
