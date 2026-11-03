import type { PostDraft } from "../blog";

export const STATE_BUSINESS_TAX_2026_POSTS: PostDraft[] = [
  {
    slug: "texas-franchise-tax",
    title: "Texas Franchise Tax: No-Tax-Due Threshold and Filing",
    description:
      "Texas franchise tax explained: the $2.65 million no-tax-due threshold for 2026-2027 reports, rates, margin options, the May 15 deadline and what small LLCs file.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-annual-report", "how-to-start-an-llc", "sales-tax-by-state"],
    faqs: [
      {
        q: "What is the Texas franchise tax no-tax-due threshold for 2026?",
        a: "For franchise tax reports due in 2026 and 2027, the no-tax-due threshold is $2.65 million of annualized total revenue, up from $2.47 million for 2024 and 2025 reports. If your entity's annualized total revenue is at or below that amount, it owes no franchise tax. It still has to file an annual information report, either a Public Information Report or an Ownership Information Report, by the May 15 deadline.",
      },
      {
        q: "Do small LLCs still have to file a No Tax Due Report?",
        a: "No. Starting with 2024 reports, the Comptroller eliminated the No Tax Due Report. Entities at or below the threshold now file only a Public Information Report (corporations, LLCs, financial institutions) or an Ownership Information Report (most other taxable entities). The filing requirement itself did not go away, and failing to file can still lead to forfeiture of your right to do business in Texas.",
      },
      {
        q: "Does a sole proprietor pay Texas franchise tax?",
        a: "No. Sole proprietorships and general partnerships owned directly by natural persons are not subject to the franchise tax. Passive entities that meet the statutory definition are also exempt. Corporations, LLCs, limited partnerships, limited liability partnerships, professional associations and business trusts are taxable entities, including single-member LLCs that are disregarded for federal income tax purposes.",
      },
      {
        q: "When is the Texas franchise tax report due?",
        a: "Annual franchise tax reports are due May 15 each year. If May 15 falls on a weekend or holiday, the due date moves to the next business day. The report year is based on the accounting period that ended in the prior calendar year, so a 2027 report generally covers your 2026 accounting year. Extensions are available if requested by the due date, subject to payment requirements.",
      },
      {
        q: "What are the Texas franchise tax rates?",
        a: "The rate is 0.375% of taxable margin for entities primarily engaged in retail or wholesale trade and 0.75% for most other entities. Entities with total revenue of $20 million or less may instead use the EZ computation, which applies 0.331% to apportioned revenue with no margin deductions. Entities that calculate tax due of less than $1,000 owe nothing, even if their revenue is above the no-tax-due threshold.",
      },
      {
        q: "What happens if I miss the Texas franchise tax deadline?",
        a: "The Comptroller charges a $50 penalty for each report filed after the due date, plus 5% of tax due if paid 1 to 30 days late and 10% if more than 30 days late. Interest starts 61 days after the due date. If reports remain unfiled, the Comptroller can forfeit the entity's right to transact business, and the Secretary of State can later forfeit its charter or registration.",
      },
    ],
    content: `
<p>The Texas franchise tax is an annual privilege tax on most businesses with liability protection, such as LLCs and corporations, that are formed in or doing business in Texas. For reports due in 2026 and 2027, entities with annualized total revenue of $2.65 million or less owe no tax, but they still must file an information report by May 15. Above that threshold, tax is generally 0.75% of taxable margin, or 0.375% for retailers and wholesalers.</p>

<p>Texas has no personal income tax, so the franchise tax is often the only state-level business tax a small LLC deals with besides sales tax. This guide explains who must file, the no-tax-due threshold, the four ways to compute margin, a worked example, deadlines, penalties and how to keep the filing painless. It is general information, not tax advice; check the Comptroller's current instructions or a Texas CPA for your situation.</p>

<h2>Who must file the Texas franchise tax report?</h2>
<table><thead><tr><th>Entity type</th><th>Subject to franchise tax?</th></tr></thead><tbody>
<tr><td>Corporation (C or S)</td><td>Yes</td></tr>
<tr><td>LLC, including single-member LLCs disregarded for federal tax</td><td>Yes</td></tr>
<tr><td>Limited partnership, LLP</td><td>Yes</td></tr>
<tr><td>Professional association or corporation</td><td>Yes</td></tr>
<tr><td>Sole proprietorship</td><td>No</td></tr>
<tr><td>General partnership owned directly by individuals</td><td>No</td></tr>
<tr><td>Qualifying passive entity</td><td>No, if it meets the statutory test</td></tr>
</tbody></table>
<p>Out-of-state entities can also owe the tax if they have nexus with Texas, for example through physical presence or sufficient Texas receipts. If you are still choosing a structure, our guide to <a href="/blog/business-entity-types">business entity types</a> explains the trade-offs, and <a href="/blog/how-to-start-an-llc">how to start an LLC</a> covers the formation steps.</p>

<h2>The no-tax-due threshold for 2026 and 2027</h2>
<p>The threshold is adjusted every two years. According to the <a href="https://comptroller.texas.gov/taxes/franchise/" target="_blank" rel="noopener noreferrer">Texas Comptroller's franchise tax page</a>:</p>
<table><thead><tr><th>Report years</th><th>No-tax-due threshold</th><th>Compensation deduction cap</th></tr></thead><tbody>
<tr><td>2024 and 2025</td><td>$2,470,000</td><td>$450,000</td></tr>
<tr><td>2026 and 2027</td><td>$2,650,000</td><td>$480,000</td></tr>
</tbody></table>
<p>The threshold applies to <strong>annualized total revenue</strong>. If your accounting period was shorter than 12 months, for example in your first year, revenue is annualized before comparing it to the threshold.</p>

<h3>The No Tax Due Report is gone</h3>
<p>Before 2024, businesses under the threshold filed a No Tax Due Report. Starting with 2024 reports, that form was eliminated. Entities at or below the threshold now file only:</p>
<ul>
<li>a <strong>Public Information Report (PIR)</strong>, for corporations, LLCs and financial institutions; or</li>
<li>an <strong>Ownership Information Report (OIR)</strong>, for other taxable entities such as limited partnerships.</li>
</ul>
<p>These reports list officers, directors, managers or owners and the registered agent. They are short, but skipping them is the most common reason small Texas LLCs end up forfeited. Our article on the <a href="/blog/llc-annual-report">LLC annual report</a> explains how this compares with other states.</p>

<h2>How the tax is calculated above the threshold</h2>
<p>Taxable margin is the <strong>lowest</strong> of four amounts:</p>
<ol>
<li>70% of total revenue;</li>
<li>total revenue minus cost of goods sold;</li>
<li>total revenue minus compensation (capped per person at $480,000 for 2026-2027 reports); or</li>
<li>total revenue minus $1 million.</li>
</ol>
<p>Margin is then apportioned to Texas based on Texas gross receipts divided by gross receipts everywhere, and multiplied by the rate:</p>
<table><thead><tr><th>Method</th><th>Rate</th><th>Who can use it</th></tr></thead><tbody>
<tr><td>Standard, retail or wholesale</td><td>0.375%</td><td>Entities primarily engaged in retail or wholesale trade</td></tr>
<tr><td>Standard, all others</td><td>0.75%</td><td>Most service businesses and manufacturers</td></tr>
<tr><td>EZ computation</td><td>0.331% of apportioned revenue</td><td>Total revenue of $20 million or less</td></tr>
</tbody></table>
<p>If the calculated tax is less than $1,000, no tax is due, though the report must still be filed.</p>

<h2>Worked example: a Texas marketing agency</h2>
<p>Illustrative numbers. An Austin marketing LLC files its 2027 report based on its 2026 calendar year. All receipts are from Texas clients.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Total revenue</td><td>$3,200,000</td></tr>
<tr><td>Cost of goods sold</td><td>Not applicable (services)</td></tr>
<tr><td>Compensation (wages and benefits, within the cap)</td><td>$1,400,000</td></tr>
</tbody></table>
<p>Margin options:</p>
<ul>
<li>70% of revenue: $2,240,000</li>
<li>Revenue minus compensation: $1,800,000</li>
<li>Revenue minus $1 million: $2,200,000</li>
</ul>
<p>The lowest is $1,800,000. At 0.75%, the standard tax is <strong>$13,500</strong>. Under the EZ computation, the tax is $3,200,000 x 0.331% = <strong>$10,592</strong>. Because the agency's revenue is under $20 million, it can choose EZ and save about $2,900. The EZ method does not allow deductions or most credits, so the answer flips for businesses with very large compensation or cost of goods sold. Run both every year.</p>
<p>Now compare a smaller agency with $2.4 million of revenue: it is under the $2.65 million threshold, owes nothing and simply files its Public Information Report.</p>

<h2>What counts as total revenue</h2>
<p>Total revenue for franchise tax purposes starts from the revenue lines of your federal income tax return (for example, gross receipts on Form 1120, 1120-S or 1065, or the Schedule C figures for a disregarded LLC) and then removes certain items, such as bad debts already included in income, some flow-through funds that must be distributed to others under contract, and a few industry-specific exclusions. For a typical service business, total revenue is close to what you invoiced and collected during the year. Two points cause confusion:</p>
<ul>
<li><strong>Reimbursed expenses.</strong> If you bill clients for materials or travel and include the reimbursements in gross receipts on your federal return, they usually count as revenue unless a specific exclusion applies.</li>
<li><strong>Short first years.</strong> A business that started in September and earned $900,000 in four months annualizes that to $2.7 million, which is above the threshold even though actual revenue was well below it.</li>
</ul>

<h2>Apportionment for out-of-state customers</h2>
<p>Only the Texas share of margin is taxed. The apportionment factor is Texas gross receipts divided by gross receipts everywhere. For services, receipts are generally sourced to where the service is performed; for goods, to where they are delivered. A Dallas consulting firm whose staff performs work for clients in several states but does that work in Texas will usually have a high Texas factor. A remote team spread across states may have a lower one. If more than a small share of your work happens outside Texas, have a preparer review the sourcing rules before you file.</p>

<h2>Affiliated companies and combined groups</h2>
<p>Owners with several related entities should know that Texas requires certain affiliated groups engaged in a unitary business to file a single combined report. The no-tax-due threshold and the EZ revenue limit are then tested against the group's combined revenue, not each entity separately. Splitting one operating business across several LLCs does not by itself keep each under the threshold.</p>

<h2>Deadlines, extensions and how to file</h2>
<ol>
<li><strong>Know your report year.</strong> A 2027 report uses data from the accounting year ending in 2026.</li>
<li><strong>Calculate annualized total revenue</strong> from your income statement or federal return.</li>
<li><strong>Decide which report you need:</strong> PIR or OIR only if at or below the threshold; a full report with tax computation if above.</li>
<li><strong>File by May 15</strong>, normally through the Comptroller's Webfile system.</li>
<li><strong>Request an extension by May 15</strong> if you need more time; extensions generally require paying most or all of the expected tax with the request.</li>
<li><strong>Keep your Webfile number and confirmation</strong> with your corporate records.</li>
</ol>
<p>Add the May 15 date to your <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a> calendar alongside federal dates, since Texas does not follow the federal extension.</p>

<h2>Your first Texas franchise tax report</h2>
<p>A new entity's first report is due May 15 of the year after it registers with the Secretary of State. An LLC formed in Texas in June 2026 files its first report by May 15, 2027, covering the period from its formation date through the end of its first accounting year. Revenue for that short period is annualized before comparing it to the $2.65 million threshold. The Comptroller mails a notice to the address on file, but the obligation exists whether or not the letter arrives, so diary the date as soon as you form.</p>

<h2>Penalties and forfeiture</h2>
<ul>
<li>$50 penalty for each report filed late.</li>
<li>5% of tax due if paid 1 to 30 days late; 10% if more than 30 days late.</li>
<li>Interest begins 61 days after the due date.</li>
<li>Forfeiture of the right to transact business, which can block the entity from suing in Texas courts, and eventually forfeiture of the charter by the Secretary of State. Officers and managers can become personally liable for certain debts while the entity is forfeited.</li>
</ul>
<p>A forfeited entity also cannot get a <a href="/blog/certificate-of-good-standing">certificate of good standing</a> (in Texas, a certificate of account status), which banks, landlords and buyers often request.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Assuming "no tax due" means "no filing."</strong> The PIR or OIR is still required every year.</li>
<li><strong>Forgetting single-member LLCs.</strong> Disregarded for IRS purposes, but taxable entities in Texas.</li>
<li><strong>Using the wrong year's threshold.</strong> The $2.65 million figure applies to 2026 and 2027 reports.</li>
<li><strong>Not comparing EZ and standard methods.</strong> The cheaper method changes as your cost structure changes.</li>
<li><strong>Confusing franchise tax with sales tax.</strong> They are separate. If you sell taxable items or services, see our <a href="/blog/sales-tax-by-state">sales tax by state</a> guide.</li>
<li><strong>Letting the registered agent address go stale,</strong> so you never see forfeiture notices. Our <a href="/blog/registered-agent">registered agent guide</a> covers why it matters.</li>
</ul>

<h2>Keep your revenue figures clean</h2>
<p>Every Texas franchise tax calculation starts with total revenue, and the cleanest source for that number is your invoice history. Numbered invoices, issued in the LLC's legal name and reconciled to bank deposits, make it simple to confirm whether you are under the threshold and to back up the figure if the Comptroller ever asks. Our guide on <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a> covers what to include. To create those invoices, use our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF.</p>
`,
  },
  {
    slug: "delaware-franchise-tax",
    title: "Delaware Franchise Tax: Two Calculation Methods Explained",
    description:
      "Delaware franchise tax explained: authorized shares vs assumed par value capital method, why startups get huge bills, March 1 and June 1 deadlines and penalties.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-vs-corporation", "registered-agent", "llc-annual-report"],
    faqs: [
      {
        q: "Why is my Delaware franchise tax bill so high?",
        a: "Delaware's default calculation uses the Authorized Shares method, which charges by the number of shares your certificate of incorporation authorizes. A startup with 10 million authorized shares sees a bill of about $85,165 under that method. Most small companies owe far less under the Assumed Par Value Capital method, which uses issued shares and gross assets. Delaware lets you pay the lower of the two, but you must enter the data to get the lower figure.",
      },
      {
        q: "When is Delaware franchise tax due?",
        a: "For Delaware corporations, the annual report and franchise tax are due by March 1 each year. Corporations that owe $5,000 or more make estimated payments: 40% by June 1, 20% by September 1, 20% by December 1 and the remainder by March 1. Delaware LLCs, limited partnerships and general partnerships pay a flat annual tax due by June 1 and do not file an annual report.",
      },
      {
        q: "How much is the Delaware LLC annual tax?",
        a: "Delaware LLCs pay a flat annual tax of $400, due on or before June 1. There is no annual report and no calculation based on members, revenue or assets. If the tax is paid late, Delaware charges a $200 penalty plus interest of 1.5% per month on the tax and penalty. Paying through the Division of Corporations website takes a few minutes and requires your Delaware file number.",
      },
      {
        q: "What is the minimum Delaware franchise tax for a corporation?",
        a: "The minimum is $175 under the Authorized Shares method and $400 under the Assumed Par Value Capital method, plus the $50 annual report filing fee for domestic corporations. A small corporation with 5,000 or fewer authorized shares therefore pays $225 in total. The maximum franchise tax is $200,000 for most corporations, with a higher cap for certain very large companies identified as Large Corporate Filers.",
      },
      {
        q: "What happens if I don't pay Delaware franchise tax?",
        a: "Delaware charges a $200 penalty for late annual reports plus 1.5% monthly interest on unpaid tax. If the tax and report remain unpaid, the corporation's charter can become void, and it will not be in good standing, which affects fundraising, bank accounts and contracts. Reviving a void entity requires paying all back taxes, penalties and fees and filing a certificate of revival.",
      },
      {
        q: "Do I need gross assets to use the assumed par value method?",
        a: "Yes. The Assumed Par Value Capital method needs your total gross assets, generally as reported on Schedule L of your federal Form 1120, and the number of issued shares, including treasury shares, as of the end of your fiscal year. If you have not filed a federal return yet, use the figures from your year-end balance sheet. Incomplete data defaults the calculation to the Authorized Shares method.",
      },
    ],
    content: `
<p>Delaware franchise tax is an annual tax every Delaware corporation pays for the privilege of being incorporated there, whether or not it does business in the state. It can be calculated two ways, the Authorized Shares method or the Assumed Par Value Capital method, and you pay whichever is lower. For many startups the difference is dramatic: tens of thousands of dollars under the default method versus about $400 under the alternative.</p>

<p>This guide walks through both Delaware franchise tax calculation methods with a worked example, explains the deadlines for corporations and LLCs, and lists the penalties and common mistakes. It is general information, not legal or tax advice; confirm your calculation with the Delaware Division of Corporations or a professional.</p>

<h2>Who pays Delaware franchise tax?</h2>
<table><thead><tr><th>Entity</th><th>What it pays</th><th>Due</th><th>Annual report?</th></tr></thead><tbody>
<tr><td>Domestic corporation</td><td>Franchise tax (two methods) + $50 report fee</td><td>March 1</td><td>Yes</td></tr>
<tr><td>Domestic LLC</td><td>Flat $400 annual tax</td><td>June 1</td><td>No</td></tr>
<tr><td>Limited partnership / general partnership</td><td>Flat $400 annual tax</td><td>June 1</td><td>No</td></tr>
<tr><td>Foreign corporation registered in Delaware</td><td>$125 annual report fee</td><td>June 30</td><td>Yes</td></tr>
</tbody></table>
<p>Delaware franchise tax is separate from state income tax and from the Delaware gross receipts tax, which apply only if you actually do business in Delaware. Most out-of-state startups owe just the franchise tax and report fee in Delaware, plus taxes in the states where they operate. If you are deciding where to form, see our sibling comparison of <a href="/blog/wyoming-vs-delaware-llc">Wyoming vs Delaware LLCs</a> and our guide to <a href="/blog/llc-vs-corporation">LLC vs corporation</a>.</p>

<h2>Method 1: Authorized Shares</h2>
<p>This method looks only at how many shares your certificate of incorporation authorizes. According to the Division of Corporations' <a href="https://corp.delaware.gov/frtaxcalc/" target="_blank" rel="noopener noreferrer">franchise tax calculation page</a>:</p>
<table><thead><tr><th>Authorized shares</th><th>Tax</th></tr></thead><tbody>
<tr><td>5,000 or fewer</td><td>$175 (minimum)</td></tr>
<tr><td>5,001 to 10,000</td><td>$250</td></tr>
<tr><td>Each additional 10,000 shares or part of 10,000</td><td>+$85</td></tr>
<tr><td>Maximum</td><td>$200,000</td></tr>
</tbody></table>
<p>Venture-style startups commonly authorize 10 million shares so they can issue founder stock and an option pool. Under this method, 10,000,000 shares produce $250 + (999 x $85) = <strong>$85,165</strong>. That is the bill many founders see in their first notice, and it is why panicked searches for "Delaware franchise tax" spike every February.</p>

<h2>Method 2: Assumed Par Value Capital</h2>
<p>This method uses your issued shares and total gross assets to compute a notional capital figure, then charges $400 per $1 million (or part of a million), with a $400 minimum.</p>
<ol>
<li><strong>Assumed par</strong> = total gross assets / issued shares (to six decimal places).</li>
<li>For authorized shares with a par value <strong>below</strong> the assumed par, multiply the number of authorized shares by the assumed par.</li>
<li>For authorized shares with a par value <strong>at or above</strong> the assumed par, multiply the number of shares by their stated par value.</li>
<li>Add the results to get <strong>assumed par value capital</strong>.</li>
<li>If it is $1 million or more, round up to the next million, divide by $1 million and multiply by $400. If below $1 million, divide by $1 million and multiply by $400.</li>
<li>Apply the $400 minimum.</li>
</ol>
<p>Gross assets come from total assets on Schedule L of your federal Form 1120 for the fiscal year. Issued shares include treasury shares.</p>

<h2>Worked example: a seed-stage startup</h2>
<p>Illustrative numbers. A Delaware C corporation has:</p>
<ul>
<li>10,000,000 authorized shares, par value $0.00001</li>
<li>8,000,000 issued shares</li>
<li>Total gross assets of $500,000 at year-end</li>
</ul>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Assumed par</td><td>$500,000 / 8,000,000</td><td>$0.0625</td></tr>
<tr><td>Par value below assumed par?</td><td>$0.00001 < $0.0625</td><td>Yes, use assumed par</td></tr>
<tr><td>Assumed par value capital</td><td>10,000,000 x $0.0625</td><td>$625,000</td></tr>
<tr><td>Tax</td><td>($625,000 / $1,000,000) x $400 = $250</td><td>Minimum applies: $400</td></tr>
<tr><td>Annual report fee</td><td></td><td>$50</td></tr>
<tr><td><strong>Total due</strong></td><td></td><td><strong>$450</strong></td></tr>
</tbody></table>
<p>Compared with $85,165 under the Authorized Shares method, the APVC method saves almost $85,000. Now suppose the company raises a $6 million seed round and ends the year with $5.2 million of gross assets and 10,000,000 issued shares. Assumed par is $0.52; assumed par value capital is $5,200,000; rounded up to $6 million, the tax is 6 x $400 = $2,400. Still a fraction of the default figure.</p>

<h2>Step by step: filing the annual report</h2>
<ol>
<li>Gather your Delaware file number, issued shares, gross assets, principal place of business, and names and addresses of directors and at least one officer.</li>
<li>Log in to the Division of Corporations online filing system before March 1.</li>
<li>Enter issued shares and gross assets so the system calculates the APVC figure; it then charges the lower method.</li>
<li>Pay the tax and $50 fee.</li>
<li>If you owe $5,000 or more, schedule estimated payments: 40% June 1, 20% September 1, 20% December 1, remainder March 1.</li>
<li>Save the filed report and receipt with your corporate records.</li>
</ol>
<p>Your <a href="/blog/registered-agent">registered agent</a> often forwards reminders, but the obligation is yours. Put March 1 and June 1 on your <a href="/blog/business-tax-deadlines-2027">2027 tax calendar</a>.</p>

<h2>Which method fits your company?</h2>
<table><thead><tr><th>Company profile</th><th>Usually lower method</th><th>Why</th></tr></thead><tbody>
<tr><td>Few authorized shares (5,000 or fewer)</td><td>Authorized Shares</td><td>$175 beats the $400 APVC minimum</td></tr>
<tr><td>Millions of authorized shares, modest assets</td><td>Assumed Par Value Capital</td><td>Low gross assets per issued share keep capital small</td></tr>
<tr><td>Large balance sheet after a big funding round</td><td>Assumed Par Value Capital, still</td><td>Tax grows with assets, but usually far below the share-count bill</td></tr>
<tr><td>Few issued shares relative to authorized</td><td>Check both carefully</td><td>A high assumed par multiplies across all authorized shares</td></tr>
</tbody></table>
<p>The last row is the edge case to watch: assumed par is calculated per <em>issued</em> share but multiplied by <em>authorized</em> shares. A company with $2 million of assets, 1 million issued shares and 10 million authorized shares has an assumed par of $2.00 and assumed par value capital of $20 million, for a tax of $8,000. Issuing more shares or reducing authorized shares changes the result, which is a decision for your lawyer, not a tax trick to apply on your own.</p>

<h2>Received a large franchise tax notice?</h2>
<ol>
<li><strong>Do not pay the default amount.</strong> The notice usually shows the Authorized Shares figure.</li>
<li><strong>Collect your issued shares</strong> from your cap table and <strong>gross assets</strong> from your year-end balance sheet or Form 1120.</li>
<li><strong>File the annual report online</strong> and enter both numbers; the system recalculates.</li>
<li><strong>If you already paid the inflated amount,</strong> contact the Division of Corporations about recalculation and any refund, with your figures ready.</li>
<li><strong>If you missed March 1,</strong> file and pay as soon as possible; the $200 penalty and 1.5% monthly interest apply from the deadline.</li>
</ol>

<h2>Budgeting for Delaware every year</h2>
<p>For a typical seed-stage C corporation, plan on three recurring Delaware costs: the franchise tax under the APVC method (often $400 to a few thousand dollars, depending on assets), the $50 annual report fee and the registered agent's annual charge. Startups that close a large round late in the year see gross assets jump at year-end, which raises next March's tax; build that into the budget when you plan the raise. Keep the cap table and year-end balance sheet in one place so whoever files the annual report can find both figures in minutes, rather than defaulting to the Authorized Shares figure under deadline pressure.</p>

<h2>Delaware LLCs: what the $400 does and does not cover</h2>
<p>The flat $400 keeps a Delaware LLC in good standing in Delaware. It does not cover your registered agent's annual fee, which is separate, or any tax in the states where you actually operate. An LLC run from New York or California must register there as a foreign LLC and meet local rules, such as California's annual tax and Statement of Information or New York's publication requirement. Budget for both states before choosing Delaware for a small, single-location business.</p>

<h2>Penalties</h2>
<ul>
<li><strong>Corporations:</strong> $200 penalty for not filing a complete annual report by March 1, plus 1.5% interest per month on unpaid tax.</li>
<li><strong>LLCs and partnerships:</strong> $200 penalty for late or non-payment of the $400 tax, plus 1.5% interest per month on tax and penalty.</li>
<li><strong>Loss of good standing</strong> and, eventually, a void charter. Investors, banks and acquirers routinely ask for a certificate of good standing, which you cannot get with unpaid tax.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Paying the scary default bill.</strong> Always enter issued shares and gross assets so the system can compute APVC.</li>
<li><strong>Leaving gross assets blank.</strong> Without it, the calculation falls back to Authorized Shares.</li>
<li><strong>Ignoring mid-year share changes.</strong> If you amended authorized shares during the year, the tax is prorated by period.</li>
<li><strong>Forgetting the $50 report fee</strong> when budgeting.</li>
<li><strong>Not paying in the operating state.</strong> A Delaware entity doing business in California, Texas or New York must also register and pay there. See our sibling guides on the <a href="/blog/california-llc-800-tax">California $800 annual tax</a> and the Texas franchise tax.</li>
<li><strong>Responding to look-alike mailers.</strong> Private companies send official-looking notices offering to file for a fee. Pay only through the state's own website or your registered agent.</li>
</ul>

<h2>Keep the numbers ready</h2>
<p>The APVC method depends on accurate gross assets, which depend on a balance sheet that reflects your receivables, cash and equipment. Startups that invoice customers properly and track what is outstanding can pull that figure in minutes. If you are billing your first customers, our <a href="/blog/how-to-invoice-as-an-llc">guide to invoicing as a business entity</a> shows the essentials, and our <a href="/invoice-generator">free invoice generator</a> lets you create professional invoices with no sign-up and download them as PDFs.</p>
`,
  },
  {
    slug: "california-llc-800-tax",
    title: "California LLC $800 Annual Tax and LLC Fee Explained",
    description:
      "California LLC tax explained: the $800 annual tax, when it is due, the first-year rules, the gross receipts LLC fee tiers, forms 3522, 3536 and 568, and how to stop it.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-tax-rate", "how-to-dissolve-an-llc", "llc-annual-report"],
    faqs: [
      {
        q: "Do I have to pay the $800 California LLC tax in my first year?",
        a: "Yes, for LLCs formed today. A temporary first-year exemption applied only to LLCs formed for taxable years 2021 through 2023, and it has expired. A new LLC now owes the $800 annual tax by the 15th day of the 4th month after it is organized or registered in California. A narrow exception applies if the first taxable year is 15 days or less and the LLC did no business during it.",
      },
      {
        q: "Is the $800 California LLC tax due even if I made no money?",
        a: "Yes. The annual tax is owed by every LLC organized in, registered in or doing business in California, regardless of income or activity, until the LLC is formally cancelled. It is a tax for the privilege of existing or operating in the state, not a tax on profit. A dormant LLC that is never cancelled continues to accrue the tax plus penalties, which is one of the most common and costly California mistakes.",
      },
      {
        q: "What is the California LLC fee?",
        a: "The LLC fee is a separate charge on top of the $800 annual tax for LLCs with total California-source income of $250,000 or more. It is $900 for income from $250,000 to $499,999, $2,500 for $500,000 to $999,999, $6,000 for $1 million to $4,999,999, and $11,790 for $5 million or more. Income here means gross receipts, not profit. The estimated fee is paid with Form 3536 by the 15th day of the 6th month of the tax year.",
      },
      {
        q: "How do I stop paying the California $800 LLC tax?",
        a: "You must formally cancel the LLC with the California Secretary of State and file a final tax return with the Franchise Tax Board marked as final. Simply stopping business, closing the bank account or letting the LLC go suspended does not end the obligation. File the cancellation and final return in the same year you stop operating, so you do not trigger another year's annual tax.",
      },
      {
        q: "Does a single-member LLC have to pay the $800 tax?",
        a: "Yes. Single-member LLCs that are disregarded for federal income tax purposes still pay the $800 annual tax and, if their California income is high enough, the LLC fee. They file Form 568 with the Franchise Tax Board. The owner reports the business income on their personal California return, but the LLC-level tax and fee are separate obligations of the LLC itself.",
      },
      {
        q: "Does an LLC taxed as an S corporation pay the $800 LLC tax?",
        a: "An LLC that elects to be taxed as a corporation, including as an S corporation, is treated as a corporation for California tax purposes. It pays the corporate franchise tax instead: for S corporations, 1.5% of net income with an $800 minimum, and it files Form 100S rather than Form 568. It does not also pay the LLC fee. Check the first-year rules, which differ for corporations.",
      },
    ],
    content: `
<p>Every LLC organized in, registered in or doing business in California owes an $800 annual tax to the Franchise Tax Board, even if it earned nothing. On top of that, LLCs with $250,000 or more of California income pay an LLC fee that ranges from $900 to $11,790. The first payment is due by the 15th day of the 4th month after formation, and the tax keeps coming every year until the LLC is formally cancelled.</p>

<p>This guide explains how the California LLC tax and fee work in 2026, the forms and deadlines, a worked example, how S corporation status changes things, and how to stop the tax when you close. It is general information, not tax advice; the Franchise Tax Board's <a href="https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" target="_blank" rel="noopener noreferrer">LLC page</a> and a California CPA are the final word.</p>

<h2>The $800 annual tax: who pays and when</h2>
<p>The annual tax applies to every LLC that is:</p>
<ul>
<li>organized as an LLC in California;</li>
<li>a foreign (out-of-state) LLC registered with the California Secretary of State; or</li>
<li>doing business in California, whether or not registered, for example through California sales, property or payroll above the state's thresholds, or by being managed from California.</li>
</ul>
<p>That last point catches many owners who form a Delaware or Wyoming LLC while living and working in California. Forming in Wyoming or Delaware rarely avoids California tax if you live and work here; you simply add a second state's fees.</p>

<table><thead><tr><th>Item</th><th>Form</th><th>Due date (calendar-year LLC)</th></tr></thead><tbody>
<tr><td>Annual tax ($800), first year</td><td>FTB 3522</td><td>15th day of the 4th month after formation or registration</td></tr>
<tr><td>Annual tax ($800), later years</td><td>FTB 3522</td><td>April 15 of the tax year</td></tr>
<tr><td>Estimated LLC fee</td><td>FTB 3536</td><td>June 15 of the tax year (15th day of the 6th month)</td></tr>
<tr><td>Annual return, final fee balance</td><td>Form 568</td><td>Depends on how the LLC is classified; generally March 15 or April 15 of the following year</td></tr>
</tbody></table>

<h3>First-year rules</h3>
<p>California temporarily exempted new LLCs from the first-year $800 tax for taxable years 2021 through 2023. That exemption has ended, so an LLC formed in 2026 or 2027 pays $800 for its first year. The one exception: if the LLC's first taxable year is 15 days or less and it did no business in California during that period, no annual tax is due for that short year. Some owners form in the last two weeks of December for this reason.</p>
<p>Notice the timing quirk: an LLC formed on March 3, 2026 owes its first $800 by June 15, 2026, then the 2027 tax by April 15, 2027, barely ten months later.</p>

<h2>The LLC fee: a tax on gross receipts</h2>
<p>The LLC fee is based on total income from California sources, which means gross receipts plus certain other income, not profit. A low-margin business pays the same fee as a high-margin one at the same revenue level.</p>
<table><thead><tr><th>Total California income</th><th>LLC fee</th></tr></thead><tbody>
<tr><td>Under $250,000</td><td>$0</td></tr>
<tr><td>$250,000 to $499,999</td><td>$900</td></tr>
<tr><td>$500,000 to $999,999</td><td>$2,500</td></tr>
<tr><td>$1,000,000 to $4,999,999</td><td>$6,000</td></tr>
<tr><td>$5,000,000 or more</td><td>$11,790</td></tr>
</tbody></table>
<p>The fee is a cliff: crossing $250,000 by one dollar adds the full $900. You estimate it and pay by the 15th day of the 6th month using Form 3536. If the estimate is too low, the FTB can charge a penalty of 10% of the underpayment, unless your estimate equaled or exceeded the prior year's fee.</p>

<h2>Worked example: a growing design studio</h2>
<p>Illustrative numbers. A two-member California LLC taxed as a partnership invoices $620,000 in 2026, all from California clients, with $480,000 of expenses and $140,000 of profit.</p>
<table><thead><tr><th>Charge</th><th>Amount</th><th>When paid</th></tr></thead><tbody>
<tr><td>Annual tax</td><td>$800</td><td>April 15, 2026 (Form 3522)</td></tr>
<tr><td>LLC fee ($500,000-$999,999 tier)</td><td>$2,500</td><td>Estimate by June 15, 2026 (Form 3536)</td></tr>
<tr><td>Total LLC-level California cost</td><td>$3,300</td><td></td></tr>
</tbody></table>
<p>The members also pay California personal income tax on their $140,000 share of profit. If the studio had invoiced $490,000 instead, its fee would be $900, saving $1,600. That is not a reason to turn work away, but it is a reason to watch invoiced totals near a tier boundary and estimate the fee carefully in June.</p>

<h2>LLC vs S corporation in California</h2>
<table><thead><tr><th></th><th>LLC (default tax)</th><th>LLC or corporation taxed as S corp</th></tr></thead><tbody>
<tr><td>Minimum tax</td><td>$800 annual tax</td><td>$800 minimum franchise tax</td></tr>
<tr><td>Revenue-based fee</td><td>$900 to $11,790 above $250,000</td><td>None</td></tr>
<tr><td>Entity-level income tax</td><td>None</td><td>1.5% of net income (if more than $800)</td></tr>
<tr><td>Return</td><td>Form 568</td><td>Form 100S</td></tr>
</tbody></table>
<p>For high-revenue, low-margin LLCs, the S corporation route can cost less in California, but it brings payroll, reasonable salary rules and federal trade-offs. Our <a href="/blog/s-corp-vs-llc">S corp vs LLC comparison</a> and <a href="/blog/llc-tax-rate">LLC tax rate guide</a> cover the bigger picture. California partnerships and S corps may also benefit from the elective <a href="/blog/pass-through-entity-tax">pass-through entity tax</a>.</p>

<h2>"Doing business" in California</h2>
<p>An out-of-state LLC can owe the $800 even without registering with the Secretary of State. The Franchise Tax Board treats an entity as doing business in California if it actively engages in transactions for financial gain in the state, if it is commercially domiciled in California, or if its California sales, property or payroll exceed thresholds that are adjusted for inflation each year. An LLC can also be treated as doing business in California when its members or managers conduct its business there, which is why a Nevada LLC run by a Los Angeles resident usually owes California tax. Check the FTB's current thresholds before assuming you are outside the rules.</p>

<h2>What suspension means</h2>
<p>If the annual tax, fee or returns go unpaid, the FTB can suspend the LLC. A suspended LLC loses the right to use its name, cannot enforce contracts in California courts and can have contracts made during suspension voided at the other party's request. Reviving it requires filing all missing returns, paying back taxes, penalties and interest, and applying for relief from suspension. That is usually far more expensive than the $800 would have been.</p>

<h2>Budgeting the $800 and fee</h2>
<p>The simplest approach is to treat California's LLC charges as a fixed monthly overhead. Set aside about $67 a month for the $800 annual tax and, if you expect to cross $250,000 in revenue, add the fee tier you are likely to land in. A studio heading toward $600,000 should reserve roughly $275 a month for the combined $3,300. Review the estimate in May, using actual invoiced revenue to date, before the June 15 fee payment.</p>

<h2>Step by step: staying compliant each year</h2>
<ol>
<li>Pay the $800 annual tax by April 15 with Form 3522 or FTB Web Pay.</li>
<li>Estimate total California income and pay any LLC fee by June 15 with Form 3536.</li>
<li>File the biennial <a href="/blog/california-statement-of-information">California Statement of Information</a> with the Secretary of State on time.</li>
<li>File Form 568 by its due date and pay any remaining fee.</li>
<li>Issue Schedule K-1 (568) to members.</li>
<li>Calendar all of it alongside your <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a>.</li>
</ol>

<h2>Edge cases owners ask about</h2>
<h3>Two LLCs, two annual taxes</h3>
<p>Each LLC pays its own $800, so a holding LLC plus an operating LLC costs at least $1,600 a year in California before any fee. Only form a second entity when the liability or ownership benefit clearly outweighs that cost.</p>
<h3>LLC registered but never used</h3>
<p>An LLC that was organized but never opened a bank account or invoiced anyone still owes the annual tax every year until cancelled. If you formed one "just in case," either use it or cancel it promptly.</p>
<h3>Paying late</h3>
<p>Late payment of the annual tax or fee brings penalties and interest from the FTB. Pay what you can by the deadline and file on time even if you cannot pay in full, since late-filing penalties are often larger than late-payment penalties.</p>

<h2>How to stop the $800 tax</h2>
<p>The tax continues until the LLC is cancelled with the Secretary of State and a final return is filed. To close cleanly:</p>
<ol>
<li>Wind up the business: collect receivables, pay debts, close accounts.</li>
<li>File the final Form 568, checking the final return box, and pay what is due.</li>
<li>File the certificate of cancellation (or short-form cancellation if eligible) with the Secretary of State.</li>
<li>Do this before the 15th day of the 4th month of the next tax year to avoid another year's tax.</li>
</ol>
<p>Our guide on <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a> covers the general steps.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Assuming the first-year exemption still applies.</strong> It ended after 2023.</li>
<li><strong>Abandoning an LLC instead of cancelling it.</strong> The tax, penalties and interest keep accruing, and the FTB can suspend the LLC.</li>
<li><strong>Underestimating the LLC fee</strong> and paying a 10% penalty.</li>
<li><strong>Forming out of state</strong> while operating in California, then paying fees in two states.</li>
<li><strong>Confusing the fee with income tax.</strong> The LLC fee applies to revenue even in a loss year.</li>
</ul>

<h2>Track gross receipts from day one</h2>
<p>Because the LLC fee is based on revenue, your invoices are the single most important record for California compliance. Number every invoice, issue it in the LLC's legal name and reconcile invoiced totals to deposits monthly, so your June estimate is a lookup rather than a guess. You can create those invoices with our <a href="/invoice-generator">free invoice generator</a>: there is no sign-up, and each invoice downloads as a PDF for your records.</p>
`,
  },
  {
    slug: "california-statement-of-information",
    title: "California Statement of Information: Deadlines and Fees",
    description:
      "California Statement of Information guide: who files, the 90-day initial deadline, annual vs biennial schedule, $20 and $25 fees, $250 penalty and how to file online.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-annual-report", "registered-agent", "how-to-start-an-llc"],
    faqs: [
      {
        q: "How often do I file a Statement of Information in California?",
        a: "California corporations file a Statement of Information every year, and LLCs file every two years. Both must file an initial statement within 90 days of forming or registering in California. Later statements are due during a six-month filing window that ends with the last day of the anniversary month of the original formation or registration. You can check when you last filed in the Secretary of State's business search.",
      },
      {
        q: "How much does the California Statement of Information cost?",
        a: "The filing fee is $20 for LLCs and $25 for stock corporations when you file directly with the Secretary of State through bizfile Online. Nonprofit corporations have their own form and fee schedule. Private companies often mail official-looking notices charging much more to file the same form; they are not government agencies, and you can file directly yourself for the state fee.",
      },
      {
        q: "What is the penalty for filing a Statement of Information late?",
        a: "A missed Statement of Information can result in a $250 penalty, which is assessed by the Franchise Tax Board after the Secretary of State refers the delinquency. Continued failure can lead to suspension or forfeiture of the entity, which means it loses the right to do business and to defend itself in court in California. Filing promptly once you notice the miss limits the damage.",
      },
      {
        q: "Do I need to file a Statement of Information if nothing changed?",
        a: "Yes. The statement is due on schedule even if every detail is the same as last time, because it confirms the information is still current. When you file through bizfile Online, the system shows your current information so you can review and confirm it. If details change between filing periods, such as a new manager or address, you can file an updated statement at any time.",
      },
      {
        q: "What information is on a California Statement of Information?",
        a: "The statement includes the entity's principal office and mailing addresses, the names and addresses of officers (for corporations) or managers or members (for LLCs), the chief executive officer where applicable, the agent for service of process and a short description of the type of business. The information becomes public record, so use a business address rather than a home address where the rules allow.",
      },
      {
        q: "Can my registered agent file the Statement of Information for me?",
        a: "Yes, if you authorize them. Many registered agent and compliance services file it as part of their package. From August 1, 2026, online filing of Statements of Information requires web user access through bizfile Online, which lets the entity control who can file on its behalf. Set that up before your next filing window so your agent or accountant can file without delays.",
      },
    ],
    content: `
<p>The California Statement of Information is a short public filing that keeps the Secretary of State's records current: your addresses, officers or managers, and agent for service of process. Every California corporation and LLC, including out-of-state entities registered in California, files one within 90 days of formation, then every year for corporations and every two years for LLCs. The state fee is $20 for an LLC and $25 for a corporation; missing it can cost a $250 penalty and, eventually, suspension.</p>

<p>This guide explains who must file, how the filing window works, fees, penalties, the 2026 change to online access, and the mistakes that get businesses suspended. It is general information, not legal advice; the <a href="https://www.sos.ca.gov/business-programs/business-entities/statements" target="_blank" rel="noopener noreferrer">California Secretary of State's Statements of Information page</a> is the official source.</p>

<h2>Who files a California Statement of Information?</h2>
<table><thead><tr><th>Entity</th><th>Form</th><th>Frequency</th><th>State fee</th></tr></thead><tbody>
<tr><td>California stock corporation</td><td>Corporation Statement of Information</td><td>Initial within 90 days, then every year</td><td>$25</td></tr>
<tr><td>Foreign corporation registered in California</td><td>Corporation Statement of Information</td><td>Initial within 90 days, then every year</td><td>$25</td></tr>
<tr><td>California LLC</td><td>LLC Statement of Information</td><td>Initial within 90 days, then every two years</td><td>$20</td></tr>
<tr><td>Foreign LLC registered in California</td><td>LLC Statement of Information</td><td>Initial within 90 days, then every two years</td><td>$20</td></tr>
<tr><td>Nonprofit corporation</td><td>Nonprofit Statement of Information</td><td>Its own schedule</td><td>Check current fee</td></tr>
</tbody></table>
<p>Sole proprietors and general partnerships do not file one. If you operate under a fictitious name, that is a separate county filing; see our guide to <a href="/blog/what-is-a-dba">what a DBA is</a>.</p>

<h2>Deadlines: the initial filing and the six-month window</h2>
<p>The <strong>initial statement</strong> is due within 90 days after the articles of organization or incorporation are filed, or after a foreign entity registers. After that, each statement is due during a six-month window that ends on the last day of the entity's "applicable filing month," the anniversary month of its original formation or registration.</p>
<p>The Secretary of State's own example: an entity formed in January files between August 1 and January 31. You can file any time in that window, and the date of your last filing appears on the Business Search record.</p>

<h3>Worked example: an LLC formed in May 2026</h3>
<p>Illustrative timeline for a California LLC whose articles were filed on May 12, 2026:</p>
<table><thead><tr><th>Filing</th><th>Window or deadline</th><th>Fee</th></tr></thead><tbody>
<tr><td>Initial Statement of Information</td><td>By August 10, 2026 (90 days)</td><td>$20</td></tr>
<tr><td>Next statement</td><td>December 1, 2027 to May 31, 2028</td><td>$20</td></tr>
<tr><td>Following statement</td><td>December 1, 2029 to May 31, 2030</td><td>$20</td></tr>
</tbody></table>
<p>The same LLC also owes the <a href="/blog/california-llc-800-tax">California $800 annual tax</a> by the 15th day of the 4th month after formation (August 15, 2026), so the two first-year deadlines land within days of each other. A corporation formed on the same date would file an initial statement by August 10, 2026 and then one every year in the December-to-May window.</p>

<h2>What goes on the statement</h2>
<ul>
<li>Entity name and Secretary of State file number</li>
<li>Principal office address and mailing address (and California office for corporations, if any)</li>
<li>Names and business or residence addresses of officers (CEO, secretary, CFO) for corporations, or managers or members for LLCs</li>
<li>Agent for service of process: an individual in California or a registered corporate agent</li>
<li>A brief description of the type of business</li>
</ul>
<p>Everything you file becomes public. Many owners use a <a href="/blog/registered-agent">registered agent</a> as the agent for service of process and a business address for the office, to keep a home address off the record where the rules allow.</p>

<h2>How to file, step by step</h2>
<ol>
<li><strong>Set up access.</strong> From August 1, 2026, online filing requires web user access through bizfile Online, so the entity can control who files for it. Request it before your window opens.</li>
<li><strong>Search your entity</strong> on bizfile Online and choose the Statement of Information option.</li>
<li><strong>Review the pre-filled information</strong> and update anything that changed.</li>
<li><strong>Confirm the agent</strong> for service of process has agreed to act.</li>
<li><strong>Pay the fee</strong> ($20 LLC, $25 corporation) by card.</li>
<li><strong>Download and save</strong> the filed statement with your company records.</li>
<li><strong>Calendar the next window</strong> alongside your other <a href="/blog/business-tax-deadlines-2027">2027 business deadlines</a>.</li>
</ol>

<h2>How the statement fits with other California filings</h2>
<table><thead><tr><th>Filing</th><th>Agency</th><th>Who</th><th>Frequency</th></tr></thead><tbody>
<tr><td>Statement of Information</td><td>Secretary of State</td><td>Corporations and LLCs</td><td>Corporations yearly; LLCs every two years</td></tr>
<tr><td>Annual tax ($800) or minimum franchise tax</td><td>Franchise Tax Board</td><td>LLCs and corporations</td><td>Yearly</td></tr>
<tr><td>Form 568 or Form 100/100S return</td><td>Franchise Tax Board</td><td>LLCs or corporations</td><td>Yearly</td></tr>
<tr><td>Fictitious business name statement</td><td>County clerk</td><td>Anyone using a trade name</td><td>Generally every five years</td></tr>
<tr><td>Seller's permit and sales tax returns</td><td>CDTFA</td><td>Sellers of taxable goods</td><td>Monthly, quarterly or yearly</td></tr>
</tbody></table>
<p>Many owners confuse the Statement of Information with an annual report or with the $800 tax. They are separate filings with separate agencies, and paying one does not satisfy another.</p>

<h2>Updating information between filing windows</h2>
<p>You do not have to wait for your window when something changes. If you move offices, appoint a new manager or officer, or switch registered agents, file an updated statement right away. Keeping the agent current matters most: if someone sues your company and the agent on file cannot be reached, you may never learn of the lawsuit until a default judgment arrives. Your regular filing schedule stays tied to your formation month, so keep the next window on your calendar even after an interim update.</p>

<h2>Who should own this task inside your business</h2>
<p>Small companies often miss the statement because nobody is clearly responsible for it. Assign it to one person, whether that is the owner, an office manager or an outside bookkeeper, and give them the bizfile Online access they need. Store the login details, the entity number and the last filed statement in the same folder as your formation documents and tax returns. When ownership or management changes, hand the task over explicitly. Accountants who already track your FTB deadlines can usually add the statement to their calendar for little or no extra cost, which is cheaper than a $250 penalty.</p>

<h2>How to check your status</h2>
<p>Search your entity name on bizfile Online. The record shows the entity's status (active, suspended or forfeited), the date of the last Statement of Information and the agent on file. Make it a habit to check once a year, ideally at the start of your filing window, and before applying for loans, leases or large contracts, since counterparties will look at the same record.</p>

<h2>Penalties and suspension</h2>
<p>If a statement is not filed, the Secretary of State can refer the entity to the Franchise Tax Board, which assesses a <strong>$250 penalty</strong>. Continued non-compliance can lead to suspension or forfeiture. A suspended entity cannot legally do business in California, cannot enforce contracts in court and can lose the right to its name. Reviving it means filing all missing statements, paying penalties and often clearing tax issues with the FTB first. The Secretary of State has a penalty waiver request process in some circumstances, so ask if you have a good reason.</p>
<p>Suspension also blocks a <a href="/blog/certificate-of-good-standing">certificate of good standing</a>, which lenders and larger clients increasingly request during vendor onboarding.</p>

<h2>If your entity is already suspended</h2>
<ol>
<li><strong>Find out which agency suspended it.</strong> Business Search shows the status; a Secretary of State suspension for a missing statement is different from an FTB suspension for unpaid tax or returns.</li>
<li><strong>File every missing Statement of Information</strong> through bizfile Online and pay the fees.</li>
<li><strong>Resolve FTB issues,</strong> including any $250 penalty, unpaid annual tax and missing returns.</li>
<li><strong>Request revivor</strong> where required, and confirm the record shows active status before signing new contracts or filing a lawsuit.</li>
<li><strong>Tell key clients and your bank</strong> if they noticed the suspension, and keep the confirmation for their files.</li>
</ol>
<p>The longer a suspension lasts, the more filings and penalties pile up, so act on it the week you find out.</p>

<h2>Watch out for solicitation mailers</h2>
<p>Every year, California businesses receive official-looking letters titled something like "Statement of Information Filing Notice," asking for $200 or more. They come from private companies, not the state. They are legal if they disclose that, but you pay far more than the $20 or $25 state fee for the same filing. Check the sender, and file directly through bizfile Online or through the registered agent you actually hired.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Missing the initial 90-day filing</strong> because formation services sometimes do not include it.</li>
<li><strong>Assuming LLCs file annually or corporations biennially.</strong> It is the reverse: corporations every year, LLCs every two years.</li>
<li><strong>Letting an agent's address go stale</strong>, so lawsuits or notices are served on someone who cannot reach you.</li>
<li><strong>Not updating after a change</strong> of manager, officer or address between windows.</li>
<li><strong>Paying a third-party mailer</strong> without realizing it.</li>
<li><strong>Confusing the statement with the tax.</strong> Filing the statement does not pay the $800 annual tax, and paying the tax does not file the statement. Compare with the <a href="/blog/llc-annual-report">LLC annual report</a> requirements in other states.</li>
</ul>

<h2>Keep your business details consistent</h2>
<p>The legal name and address on your Statement of Information should match what appears on your invoices, contracts and bank account. Mismatches cause delays when clients run vendor checks or when you apply for financing. Our guides to <a href="/blog/how-to-start-an-llc">starting an LLC</a> and <a href="/blog/how-to-invoice-as-an-llc">invoicing as an LLC</a> cover the details. When you are ready to bill clients under your registered name, our <a href="/invoice-generator">free invoice generator</a> creates professional invoices with no sign-up and downloads them as PDFs instantly.</p>
`,
  },
  {
    slug: "new-york-llc-publication-requirement",
    title: "New York LLC Publication Requirement: Cost and Steps",
    description:
      "New York LLC publication requirement explained: the 120-day deadline, six weeks in two newspapers, typical costs by county, the $50 Certificate of Publication and suspension.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-start-an-llc", "llc-operating-agreement", "registered-agent"],
    faqs: [
      {
        q: "How long do I have to publish my New York LLC?",
        a: "You have 120 days after the effective date of your articles of organization (or, for a foreign LLC, its application for authority) to complete publication and file the Certificate of Publication with the Department of State. Publication itself takes six consecutive weeks, so in practice you should place the notices within about two months of forming to leave time for the newspapers to send affidavits and for you to file.",
      },
      {
        q: "How much does New York LLC publication cost?",
        a: "Costs depend almost entirely on the county where your LLC's office is designated and which newspapers the county clerk names. Commonly reported totals range from a few hundred dollars in many upstate counties to well over $1,000 in New York County (Manhattan) and some other New York City counties. On top of newspaper charges, the Department of State charges a $50 fee to file the Certificate of Publication.",
      },
      {
        q: "What happens if I don't publish my New York LLC?",
        a: "Under New York LLC Law Section 206, if the Certificate of Publication is not filed within 120 days, the LLC's authority to carry on, conduct or transact business is suspended. The LLC still exists, its members generally keep limited liability, and existing contracts are not voided. The suspension is lifted once the LLC completes publication and files the certificate, but it can cause problems in court, with banks and with clients in the meantime.",
      },
      {
        q: "Do I need to publish in two newspapers?",
        a: "Yes. The county clerk of the county where the LLC's office is located designates two newspapers, one published weekly and one published daily. The notice must run once a week for six successive weeks in each. After the last run, each newspaper provides an affidavit of publication, which you file with the Certificate of Publication. You cannot pick any newspaper you like; it must be the clerk's designation.",
      },
      {
        q: "Do foreign LLCs have to publish in New York?",
        a: "Yes. An LLC formed in another state that registers to do business in New York must also publish notice of its application for authority within 120 days, using newspapers designated by the clerk of the county where its New York office is located, and file a Certificate of Publication. Professional service LLCs and limited liability partnerships have similar publication rules under their own sections of New York law.",
      },
      {
        q: "Can I choose a cheaper county for my New York LLC?",
        a: "The county used for publication is the county of the LLC's office as stated in its articles of organization. Some formation services designate an office in a lower-cost county to reduce publication costs. Whether that is appropriate depends on your facts, since the stated office location carries other consequences, including where certain documents are directed. Get advice before designating a county where you have no real presence.",
      },
    ],
    content: `
<p>New York requires every newly formed LLC to publish a notice of its formation in two newspapers, one weekly and one daily, for six consecutive weeks, then file a Certificate of Publication with the Department of State within 120 days. The filing fee is $50, but newspaper costs drive the total, ranging from a few hundred dollars upstate to well over $1,000 in Manhattan. Skip it and your LLC's authority to do business is suspended until you comply.</p>

<p>This guide covers how the New York LLC publication requirement works, what it costs, the step-by-step process, a sample timeline, and what to do if you missed the deadline. It is general information, not legal advice; for unusual situations, consult a New York business attorney.</p>

<h2>What the law requires</h2>
<p>Section 206 of the New York Limited Liability Company Law requires that within 120 days after the articles of organization take effect, the LLC publish a notice of its formation, or a copy of its articles, in two newspapers designated by the county clerk of the county where the LLC's office is located. One newspaper must be weekly and one daily, and the notice must run once a week for six successive weeks. After publication, the LLC files a Certificate of Publication, with the newspapers' affidavits of publication, with the Department of State. A summary from Wolters Kluwer on <a href="https://www.wolterskluwer.com/en/expert-insights/new-yorks-llc-publication-requirement-what-you-need-to-know" target="_blank" rel="noopener noreferrer">New York's LLC publication requirement</a> walks through the same rules.</p>

<h3>What the notice must contain</h3>
<ul>
<li>The LLC's name</li>
<li>The date the articles of organization were filed with the Department of State</li>
<li>The county where the office is located</li>
<li>A statement that the Secretary of State is designated as agent for service of process, and the address to which process will be mailed</li>
<li>The registered agent's name and address, if one is designated</li>
<li>The latest date on which the LLC is to dissolve, if specified</li>
<li>The character or purpose of the business</li>
</ul>
<p>Newspapers that handle LLC notices regularly will usually draft it from your articles.</p>

<h2>How much does New York LLC publication cost?</h2>
<p>Costs vary widely because each newspaper sets its own rates and each county clerk designates different papers. Typical patterns, based on commonly reported ranges:</p>
<table><thead><tr><th>Office county</th><th>Typical total newspaper cost</th><th>Notes</th></tr></thead><tbody>
<tr><td>New York County (Manhattan)</td><td>Often $1,000 to $2,000+</td><td>Designated dailies are expensive</td></tr>
<tr><td>Kings, Queens, Bronx</td><td>Often several hundred to over $1,000</td><td>Varies by designated papers</td></tr>
<tr><td>Many upstate counties</td><td>Often under $500</td><td>Smaller papers, lower rates</td></tr>
<tr><td>Department of State filing fee</td><td>$50</td><td>For the Certificate of Publication</td></tr>
</tbody></table>
<p>Treat these as rough planning ranges and get a quote from the designated newspapers or a publication service before you commit. The cost is a one-time startup expense and is generally deductible as a business startup or organizational cost; ask your preparer how to treat it.</p>

<h2>Step by step: completing the publication requirement</h2>
<ol>
<li><strong>Confirm the county</strong> of your LLC's office from your filed articles of organization.</li>
<li><strong>Contact the county clerk</strong> to find out which weekly and daily newspapers are designated. Some clerks publish the list; others designate on request.</li>
<li><strong>Request quotes</strong> from both newspapers, or use a publication service that handles both.</li>
<li><strong>Submit the notice</strong> to both papers and pay. Ask each to confirm start dates.</li>
<li><strong>Wait six weeks</strong> while the notice runs once a week in each paper.</li>
<li><strong>Collect the affidavits of publication</strong>, one from each newspaper, after the final run.</li>
<li><strong>File the Certificate of Publication</strong> with the Department of State, attaching both affidavits, and pay the $50 fee.</li>
<li><strong>Save the filed certificate</strong> with your LLC records and <a href="/blog/llc-operating-agreement">operating agreement</a>.</li>
</ol>

<h2>Sample timeline</h2>
<p>Illustrative dates for an LLC whose articles took effect on November 3, 2026:</p>
<table><thead><tr><th>Date</th><th>Step</th></tr></thead><tbody>
<tr><td>November 3, 2026</td><td>Articles of organization effective</td></tr>
<tr><td>November 10, 2026</td><td>County clerk designates newspapers; quotes received</td></tr>
<tr><td>November 18, 2026</td><td>First run in both newspapers</td></tr>
<tr><td>December 23, 2026</td><td>Sixth and final run</td></tr>
<tr><td>Early January 2027</td><td>Affidavits of publication received</td></tr>
<tr><td>Mid-January 2027</td><td>Certificate of Publication filed with $50 fee</td></tr>
<tr><td>March 3, 2027</td><td>120-day deadline</td></tr>
</tbody></table>
<p>Starting promptly leaves a cushion for holiday schedules, slow affidavits or a newspaper error that forces a rerun.</p>

<h2>Doing it yourself vs using a publication service</h2>
<table><thead><tr><th></th><th>Do it yourself</th><th>Publication service</th></tr></thead><tbody>
<tr><td>Cost</td><td>Newspaper rates plus $50 state fee</td><td>Package price, often bundled with newspaper charges, plus $50</td></tr>
<tr><td>Work</td><td>Contact clerk, deal with two papers, collect affidavits, file certificate</td><td>Service drafts notice, coordinates papers, often files the certificate</td></tr>
<tr><td>Risk</td><td>Missed affidavit or late start</td><td>Lower, if the service is reputable</td></tr>
<tr><td>Best for</td><td>Owners in low-cost counties with time to manage it</td><td>Busy owners, Manhattan and other high-cost counties</td></tr>
</tbody></table>
<p>Compare quotes carefully. Some services show only their own fee and add newspaper charges later; ask for the all-in total including both newspapers and the state filing fee.</p>

<h2>Professional LLCs, LLPs and other entities</h2>
<p>Professional service LLCs (PLLCs) formed by licensed professionals such as accountants, architects or engineers have a parallel publication requirement, as do limited liability partnerships and foreign versions of each. If your firm uses one of these structures, follow the section of New York law that governs it; the steps of newspaper notice, affidavits and a Certificate of Publication are similar.</p>

<h2>What publication does not do</h2>
<p>Publishing your LLC does not register a trade name, obtain an EIN, set up sales tax collection or satisfy the biennial statement New York LLCs file with the Department of State every two years. Treat publication as one item on your startup checklist alongside an EIN, any local licenses, a bank account in the LLC's name and an operating agreement signed by all members.</p>

<h2>What happens if you miss the 120-day deadline</h2>
<p>If the certificate is not filed in time, the LLC's authority to carry on, conduct or transact business is suspended. Practically:</p>
<ul>
<li>The LLC continues to exist, and members generally keep their limited liability.</li>
<li>Contracts made during the suspension are not automatically void.</li>
<li>The LLC may face problems bringing a lawsuit in New York courts until it complies.</li>
<li>Banks, landlords and clients running due diligence may see the suspended status and hesitate.</li>
<li>Once you publish and file the certificate, the suspension is lifted.</li>
</ul>
<p>So the fix is the same as compliance: publish, collect affidavits, file. There is no separate late fee from the Department of State beyond the normal $50, though a status that shows as suspended can block a <a href="/blog/certificate-of-good-standing">certificate of good standing</a> request.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Waiting too long to start.</strong> Six weeks of publication plus affidavit turnaround eats most of the 120 days.</li>
<li><strong>Using non-designated newspapers.</strong> Only the county clerk's designated papers count.</li>
<li><strong>Filing only one affidavit.</strong> You need proof from both newspapers.</li>
<li><strong>Assuming a formation service handled it.</strong> Many low-cost packages exclude publication.</li>
<li><strong>Ignoring it for a foreign LLC.</strong> Out-of-state LLCs registering in New York must publish too.</li>
<li><strong>Not budgeting for it.</strong> Include publication in your startup costs alongside formation fees, a <a href="/blog/registered-agent">registered agent</a> and licenses; see <a href="/blog/how-to-get-a-business-license">how to get a business license</a>.</li>
</ul>

<h2>Worked cost example</h2>
<p>Illustrative figures for two new single-member LLCs formed the same week:</p>
<table><thead><tr><th>Item</th><th>LLC with Manhattan office</th><th>LLC with upstate office</th></tr></thead><tbody>
<tr><td>Articles of organization filing fee</td><td>$200</td><td>$200</td></tr>
<tr><td>Weekly newspaper (6 runs)</td><td>$400</td><td>$120</td></tr>
<tr><td>Daily newspaper (6 runs)</td><td>$900</td><td>$180</td></tr>
<tr><td>Certificate of Publication fee</td><td>$50</td><td>$50</td></tr>
<tr><td><strong>Total first-year state and publication cost</strong></td><td><strong>$1,550</strong></td><td><strong>$550</strong></td></tr>
</tbody></table>
<p>The newspaper figures are assumptions for illustration; real quotes vary by paper and notice length. The point is the spread: county choice can triple the total. Whatever the cost, get it done inside the 120 days, because the suspension is a bigger practical problem than the fee. Some owners also forget that New York requires LLCs to file a biennial statement with the Department of State, so put that on the calendar at the same time.</p>

<h2>Keep proof for the long term</h2>
<p>Store the two affidavits of publication and the filed Certificate of Publication with your articles of organization. Banks, title companies, investors and buyers of the business sometimes ask for proof that the LLC complied, and the Department of State record is the first thing a careful counterparty checks. If you later convert, merge or sell the LLC, having these documents ready avoids a scramble to request copies from newspapers that may have changed hands or stopped printing.</p>

<h2>Is an LLC still the right choice in New York?</h2>
<p>The publication cost is a one-time hurdle, and for most owners the liability protection and flexibility of an LLC outweigh it. Corporations formed in New York do not face the same publication rule, but they bring their own filings and tax treatment. Our comparisons of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and <a href="/blog/how-to-start-an-llc">how to start an LLC</a> can help you decide. If you form elsewhere and operate in New York, remember that foreign registration triggers publication too, and see our sibling guide to <a href="/blog/wyoming-vs-delaware-llc">Wyoming vs Delaware LLCs</a> for why out-of-state formation rarely saves money.</p>

<p>Once your LLC is published and in good standing, bill clients in its exact legal name so contracts, invoices and bank records match. Our <a href="/invoice-generator">free invoice generator</a> lets you create professional invoices under your LLC name with no sign-up and download them as PDFs in seconds.</p>
`,
  },
];
