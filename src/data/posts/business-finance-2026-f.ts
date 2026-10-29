import type { PostDraft } from "../blog";

export const BUSINESS_FINANCE_2026_F_POSTS: PostDraft[] = [
  {
    slug: "average-profit-margin-by-industry",
    title: "Average Profit Margin by Industry (2026 Data + Benchmarks)",
    description:
      "Average profit margin by industry for 2026: net margin benchmarks from NYU Stern data, what counts as a good margin for small firms, and how to compare yours.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-calculate-profit-margin", "markup-vs-margin", "how-to-price-a-product"],
    faqs: [
      {
        q: "What is a good profit margin for a small business?",
        a: "There is no single number, because margins depend on the industry, the business model and whether you pay yourself a salary before calculating profit. As a rough rule, many owners treat a net margin under 5% as thin, 5% to 10% as average and above 10% as healthy, but a grocery store and a software company live in completely different ranges. Compare yourself with businesses that sell the same thing in the same way.",
      },
      {
        q: "Which industry has the highest profit margin?",
        a: "In large public-company data, sectors built on intellectual property and low marginal costs tend to lead. Professor Aswath Damodaran's January 2026 US dataset shows semiconductors, tobacco and system and application software with net margins above 25%. For small businesses, high-margin categories are usually service businesses with low material costs, such as consulting, bookkeeping, software and specialist professional services.",
      },
      {
        q: "Which industries have the lowest profit margins?",
        a: "High-volume, low-price businesses usually have the thinnest margins. In the January 2026 Damodaran data, grocery and food retail and auto and truck manufacturing both sit near 1% net margin, and trucking is under 4%. These businesses make money through volume and fast inventory turnover, so a small change in costs or prices can wipe out profit.",
      },
      {
        q: "Is gross margin or net margin more important?",
        a: "Both matter, for different decisions. Gross margin tells you whether each sale covers its direct costs and is the right number for pricing and product decisions. Net margin tells you whether the whole business, including rent, software, insurance, interest and taxes, actually makes money. A business can have a strong gross margin and still lose money if overhead is too high for its sales volume.",
      },
      {
        q: "Why are small business margins different from public company averages?",
        a: "Public company data covers large firms with scale, purchasing power and professional management, and it reports profit after paying all employees, including executives. A small business often has higher unit costs, and many owners do not pay themselves a market salary, which inflates reported profit. Adjust your profit for a fair owner salary before comparing it with industry benchmarks.",
      },
      {
        q: "How often are industry margin benchmarks updated?",
        a: "Damodaran's datasets at NYU Stern are usually refreshed each January using the prior year's financial data. Industry associations and benchmarking services publish on their own schedules, often annually. Because one unusual year can skew a sector, look at two or three years of data when you set targets, and focus on the trend of your own margins over time.",
      },
      {
        q: "Does a high margin always mean a better business?",
        a: "No. A business with a 40% margin on very low sales can earn less money than one with a 5% margin on large, steady volume. Margin also has to be weighed against risk, the capital required, how quickly customers pay and how much of the owner's time the business consumes. Use margin alongside revenue, cash flow and return on investment.",
      },
      {
        q: "How can I increase my profit margin quickly?",
        a: "The fastest levers are usually pricing and billing discipline: raise prices on underpriced work, stop discounting by default, invoice every billable hour and expense, and charge for rush jobs and extra revisions. On the cost side, renegotiate supplier prices, cut unused subscriptions and drop products or clients that lose money. Price changes reach the bottom line almost one for one, so they often beat cost cutting.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The average profit margin across all US industries was about 9.7% (net margin) in Professor Aswath Damodaran's January 2026 dataset at NYU Stern, or about 8.6% excluding financial firms. Industry averages range from roughly 1% for grocery retail to over 25% for software and semiconductors, so always benchmark against your own sector.</p>

<p>Knowing the average profit margin by industry helps you answer a simple question: is my business making as much money as it should on each dollar of sales? This guide explains the main margin types, shows 2026 benchmarks for common sectors, walks through a worked example and lists the mistakes owners make when they compare themselves with industry data.</p>

<h2>What is profit margin?</h2>
<p>Profit margin is profit expressed as a percentage of revenue. It shows how many cents you keep from each dollar of sales after costs. There are three versions you will see in benchmark tables:</p>
<ul>
<li><strong>Gross margin:</strong> (revenue minus cost of goods sold) divided by revenue. It covers only the direct costs of what you sell, such as materials and direct labor. See our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a> for what belongs in that line.</li>
<li><strong>Operating margin:</strong> operating income divided by revenue. It subtracts overhead such as rent, software, marketing and salaries. Our <a href="/blog/operating-income">operating income guide</a> explains the calculation.</li>
<li><strong>Net margin:</strong> net income divided by revenue, after interest and taxes. This is the "bottom line" most people mean by profit margin.</li>
</ul>
<p>If you need the formulas step by step, read <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a>. If you price by adding a percentage to cost, read <a href="/blog/markup-vs-margin">markup vs margin</a> first, because a 50% markup is only a 33% margin.</p>

<h2>Average profit margin by industry in 2026</h2>
<p>The most widely cited free source is the margins dataset maintained by Professor Aswath Damodaran at NYU Stern School of Business. It is updated each January and covers thousands of US-listed companies grouped into about 90 industries. The figures below are net margins from the <a href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/psdata.html">January 2026 US margins table</a>. Check the live table for the full list and for gross and operating margins, because the dataset is revised over time.</p>
<table><thead><tr><th>Industry (Damodaran category)</th><th>Net margin, January 2026</th><th>Margin profile</th></tr></thead><tbody>
<tr><td>Semiconductors</td><td>30.45%</td><td>Very high</td></tr>
<tr><td>Tobacco</td><td>26.65%</td><td>Very high</td></tr>
<tr><td>Software (system and application)</td><td>25.49%</td><td>Very high</td></tr>
<tr><td>Hotel and gaming</td><td>10.38%</td><td>Average to above</td></tr>
<tr><td>Total market</td><td>9.74%</td><td>Benchmark</td></tr>
<tr><td>Restaurant and dining</td><td>9.37%</td><td>Average</td></tr>
<tr><td>Total market excluding financials</td><td>8.56%</td><td>Benchmark</td></tr>
<tr><td>Trucking</td><td>3.79%</td><td>Low</td></tr>
<tr><td>Retail (grocery and food)</td><td>1.32%</td><td>Very low</td></tr>
<tr><td>Auto and truck</td><td>1.29%</td><td>Very low</td></tr>
</tbody></table>
<p>Two cautions. First, these are large public companies. A neighborhood restaurant does not have the purchasing power of a national chain, so its margin may be lower. Second, the averages are aggregates for one year. A sector with a bad year, or one giant company, can move the number a lot.</p>

<h2>What is a good profit margin for a small business?</h2>
<p>A good margin is one that beats your industry peers, pays you a fair salary and leaves enough to reinvest and survive a slow quarter. Many advisers use these rough bands for net margin, which are a rule of thumb rather than a standard:</p>
<ul>
<li><strong>Below 5%:</strong> thin. One price increase from a supplier or one unpaid invoice can push you into a loss.</li>
<li><strong>5% to 10%:</strong> typical for many product and trade businesses.</li>
<li><strong>Above 10%:</strong> healthy, and common for service businesses with low material costs.</li>
<li><strong>Above 20%:</strong> strong, usually seen in specialist services, software and businesses with pricing power.</li>
</ul>
<p>Service businesses (consulting, bookkeeping, design, IT support) often show high gross margins because their main cost is time. The catch is that the owner's time is the product. If you do not pay yourself a market salary before calculating profit, your margin looks better than it really is.</p>

<h2>How do margins differ by small business type?</h2>
<p>The structure of a business predicts its margin more reliably than its size. This table summarizes the usual drivers. It is a qualitative guide, not survey data.</p>
<table><thead><tr><th>Business type</th><th>Main cost drivers</th><th>Typical margin pattern</th></tr></thead><tbody>
<tr><td>Professional services (consulting, accounting, legal)</td><td>Labor, insurance, software</td><td>High gross margin, net margin depends on utilization</td></tr>
<tr><td>Trades (plumbing, electrical, HVAC)</td><td>Labor, materials, vehicles, insurance</td><td>Moderate, improved by materials markup and service call fees</td></tr>
<tr><td>Restaurants and food</td><td>Food cost, labor, rent</td><td>Thin to moderate, sensitive to waste and rent</td></tr>
<tr><td>Retail and e-commerce</td><td>Inventory, shipping, ads, payment fees</td><td>Low to moderate net margin, high volume needed</td></tr>
<tr><td>Transport and logistics</td><td>Fuel, equipment, insurance, maintenance</td><td>Low, very sensitive to fuel and rates</td></tr>
<tr><td>Software and digital products</td><td>Development, hosting, marketing</td><td>High once fixed costs are covered</td></tr>
</tbody></table>

<h2>Worked example: comparing your margin with the industry average</h2>
<p>Maria runs a small catering company. Last year her <a href="/blog/profit-and-loss-statement">profit and loss statement</a> showed:</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Revenue</td><td>$420,000</td></tr>
<tr><td>Food and direct staff (COGS)</td><td>$231,000</td></tr>
<tr><td>Gross profit</td><td>$189,000 (45.0% gross margin)</td></tr>
<tr><td>Rent, van, insurance, marketing, software</td><td>$118,000</td></tr>
<tr><td>Owner salary (market rate)</td><td>$52,000</td></tr>
<tr><td>Net profit before tax</td><td>$19,000 (4.5% net margin)</td></tr>
</tbody></table>
<p>The restaurant and dining average in the January 2026 data is about 9.4%. Maria is at roughly half that. Before panicking, she checks two things. First, she included a market salary for herself, which a public-company comparison effectively does too. Second, she looks for leaks. Her invoices show she has not charged for delivery or for setup time on 30% of events. Adding a $150 delivery and setup line to 120 events a year would bring in $18,000, almost all of it profit, lifting net margin to about 8.4% (37,000 divided by 438,000).</p>
<p>The lesson: closing billing gaps often moves margin faster than cutting costs. Make sure every chargeable item appears on the invoice. Our <a href="/invoice-generator">free invoice generator</a> lets you add separate lines for delivery, setup and service fees so nothing is forgotten.</p>

<h2>How to calculate and track your profit margin: step by step</h2>
<ol>
<li><strong>Get clean numbers.</strong> Use your accounting software or a <a href="/blog/bookkeeping-basics">simple bookkeeping system</a> to produce a profit and loss statement for the last 12 months.</li>
<li><strong>Separate direct costs from overhead.</strong> Put materials and direct labor in COGS. Put rent, subscriptions and admin in <a href="/blog/operating-expenses">operating expenses</a>.</li>
<li><strong>Add a fair owner salary.</strong> If you take draws instead of salary, subtract an estimated market salary before calculating net margin.</li>
<li><strong>Calculate gross, operating and net margin.</strong> Divide each profit figure by revenue.</li>
<li><strong>Pick the right benchmark.</strong> Find the closest industry in the Damodaran table or an industry association report.</li>
<li><strong>Find the gap and its cause.</strong> If gross margin is low, look at pricing and direct costs. If gross margin is fine but net is low, look at overhead.</li>
<li><strong>Track monthly.</strong> One year's figure hides seasonality. A monthly margin trend shows problems early.</li>
</ol>

<h2>How to improve a low profit margin</h2>
<p>There are only two levers: earn more per sale or spend less per sale. In practice the revenue side is usually more powerful for small businesses.</p>
<ul>
<li><strong>Review prices.</strong> Many small businesses have not raised prices in years. Our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> covers notice periods and wording.</li>
<li><strong>Price from cost and value.</strong> Use <a href="/blog/how-to-price-a-product">product pricing methods</a> that start from full cost, including overhead, rather than copying competitors.</li>
<li><strong>Bill everything.</strong> Travel time, rush work, extra revisions, materials markup and cancellation fees all belong on the invoice when your terms allow them.</li>
<li><strong>Cut low-margin work.</strong> Rank products or clients by gross margin and drop or reprice the bottom ones.</li>
<li><strong>Know your break-even.</strong> The <a href="/blog/break-even-point">break-even point</a> tells you how much revenue covers fixed costs, which makes overhead decisions easier.</li>
<li><strong>Forecast.</strong> A simple <a href="/blog/sales-forecast">sales forecast</a> shows whether planned costs fit expected revenue.</li>
</ul>

<h2>Common mistakes when comparing profit margins</h2>
<ul>
<li><strong>Mixing up markup and margin.</strong> A 100% markup is a 50% margin, not 100%.</li>
<li><strong>Comparing gross with net.</strong> Make sure the benchmark and your figure measure the same thing.</li>
<li><strong>Ignoring owner pay.</strong> A sole owner earning nothing can show a 30% margin that disappears once a fair salary is included.</li>
<li><strong>Using the wrong industry.</strong> A mobile app studio is not "software (system and application)" at the scale of a global vendor. Use the closest match and treat it as a range.</li>
<li><strong>Using cash in the bank as profit.</strong> Cash and profit differ. Unpaid invoices, inventory and loan repayments all affect cash without matching profit.</li>
<li><strong>Looking at one year only.</strong> Margins move with the economy and with one-off costs. Use a two or three year average.</li>
</ul>

<h2>Why gross margin benchmarks look so different from net margin</h2>
<p>Many owners are surprised that their gross margin looks excellent while their net margin looks poor. The gap is overhead. A web design studio may keep 80 cents of every dollar after direct contractor costs, but rent, software subscriptions, insurance, marketing and the owner's salary can absorb most of that. A grocery store is the opposite: a gross margin of roughly a quarter of sales, but very little left after staff, rent and shrinkage.</p>
<table><thead><tr><th>Margin type</th><th>What it answers</th><th>Use it for</th></tr></thead><tbody>
<tr><td>Gross margin</td><td>Does each sale cover its direct costs?</td><td>Pricing, product mix, supplier negotiations</td></tr>
<tr><td>Operating margin</td><td>Does the core business cover overhead?</td><td>Hiring, rent and software decisions</td></tr>
<tr><td>Net margin</td><td>What is left after everything, including interest and tax?</td><td>Overall health, lender and buyer comparisons</td></tr>
<tr><td>EBITDA margin</td><td>Cash-like operating profit before financing and depreciation</td><td>Valuing a business, comparing companies with different debt</td></tr>
</tbody></table>
<p>If you are preparing to sell or value your company, buyers often look at <a href="/blog/ebitda">EBITDA</a> rather than net margin, because it strips out the owner's financing choices. Our guide on <a href="/blog/how-to-value-a-small-business">how to value a small business</a> explains how margins feed into valuation multiples.</p>

<h2>How do profit margins change as a business grows?</h2>
<p>Margins usually follow a pattern. In the first year, net margin is often negative because startup costs and marketing come before steady revenue. As sales grow, fixed costs are spread over more revenue and margin improves. This is called operating leverage. Later, margin can dip again when you hire managers, move to bigger premises or enter new markets.</p>
<ul>
<li><strong>Launch stage:</strong> focus on gross margin. If each sale is not profitable before overhead, growth only makes losses bigger.</li>
<li><strong>Growth stage:</strong> watch operating margin. Overhead should grow more slowly than revenue.</li>
<li><strong>Mature stage:</strong> protect net margin with regular price reviews, cost control and tight collections.</li>
</ul>
<p>Unpaid invoices quietly erode margin too. A sale that is never collected becomes a <a href="/blog/bad-debt-write-off">bad debt write-off</a>, which reduces profit dollar for dollar. Clear payment terms and prompt invoicing protect the margin you worked to earn.</p>

<h2>Where to find more industry margin data</h2>
<p>Besides the NYU Stern data, useful sources include industry trade associations, your bank or accountant (many have benchmarking tools based on client data), and the US Census Bureau's economic surveys for revenue and cost structure by industry. When you start a new venture, combine margin benchmarks with a realistic <a href="/blog/startup-costs">startup cost estimate</a> to see how long it will take to earn back your investment.</p>

<p>Use the average profit margin by industry as a reference point, not a verdict. Calculate your own margins every month, compare them with the closest sector, and fix billing gaps before cutting costs. When you invoice, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a clean PDF built right in your browser, so every fee you are owed makes it onto the bill.</p>
`,
  },
  {
    slug: "business-plan-template",
    title: "Business Plan Template (Free Outline + One-Page Plan)",
    description:
      "Free business plan template with every section explained, a one-page plan version, a filled-in example with real numbers and tips for lenders like the SBA.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-start-a-small-business", "startup-costs", "sales-forecast"],
    faqs: [
      {
        q: "How long should a business plan be?",
        a: "Long enough to answer the reader's questions and no longer. A one-page plan works for a solo service business or for internal planning. A plan for a bank loan or SBA-backed loan is usually 10 to 25 pages plus financial statements. Investors often want a short deck first and a fuller plan later. Cut anything that does not help the reader decide whether the business will work.",
      },
      {
        q: "Do I need a business plan to get an SBA loan?",
        a: "Lenders that make SBA-guaranteed loans usually ask for a business plan, especially for startups, along with financial projections, personal financial statements and tax returns. The SBA itself provides plan guidance on sba.gov, but the bank decides what it needs. Ask your lender for its checklist before you write, so the plan covers the specific questions and projections it will review.",
      },
      {
        q: "What is the difference between a traditional and a lean business plan?",
        a: "A traditional plan is a detailed document with sections for the company, market, competition, operations, management and full financial projections. A lean plan, sometimes called a lean canvas or one-page plan, summarizes the same ideas in short bullet points: problem, solution, customers, channels, revenue, costs and key metrics. Lean plans are faster to write and update, while lenders often still expect the traditional format.",
      },
      {
        q: "Can I write a business plan myself?",
        a: "Yes, and most small business owners do. You know the customers, costs and pricing better than anyone else. Use a template for structure, get your numbers from real quotes and research, and ask an accountant or a free SCORE mentor to review the financial section. Paying someone to write the whole plan often produces generic text that lenders recognize quickly.",
      },
      {
        q: "What financial statements go in a business plan?",
        a: "Most plans include a startup cost list, a sales forecast, a projected profit and loss statement, a cash flow projection and a projected balance sheet, usually for three years with the first year shown monthly. Existing businesses also add historical statements. Include your key assumptions, such as prices, customer numbers and payment terms, so the reader can check how you reached the totals.",
      },
      {
        q: "How often should I update my business plan?",
        a: "Review it at least once a year and whenever something big changes, such as a new product, a large client, a loan application or a missed forecast. Many owners update the one-page version quarterly and compare actual results with the forecast. A plan that sits in a drawer has little value, while one you revisit becomes a tool for decisions.",
      },
      {
        q: "Is an AI business plan generator good enough?",
        a: "AI tools can produce a tidy first draft and suggest sections you might miss, but they cannot know your real costs, prices or local market. Lenders also notice generic market claims and invented statistics. Use AI for structure and wording if you like, then replace every number with figures from your own quotes, research and records, and cite real sources for market data.",
      },
      {
        q: "What is an executive summary?",
        a: "The executive summary is a one-page overview at the start of the plan covering what the business does, who it serves, why it will win, how much money it needs and what the financial outlook is. Many readers decide whether to keep reading based on this page alone. Write it last, after the other sections are finished, so it accurately reflects the full plan.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A business plan template is a ready-made outline of the sections a plan needs: executive summary, company description, market analysis, products and pricing, marketing and sales, operations, management, financial projections and funding request. Fill each section with your own facts and numbers, keep it short, and write the executive summary last.</p>

<p>This free business plan template gives you every section with prompts, a one-page plan for quick planning, and a filled-in example with real numbers. It follows the traditional structure the <a href="https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan">US Small Business Administration describes</a>, which is the format most banks and lenders expect.</p>

<h2>What is a business plan?</h2>
<p>A business plan is a written description of what your business does, who it sells to, how it will make money and what it needs to get there. It has two jobs: to help you think clearly before you spend money, and to convince lenders, investors or partners that the business is viable. If you are just starting out, read our step-by-step guide on <a href="/blog/how-to-start-a-small-business">how to start a small business</a> alongside this template.</p>

<h2>Traditional vs one-page business plan: which do you need?</h2>
<table><thead><tr><th>Feature</th><th>Traditional plan</th><th>One-page (lean) plan</th></tr></thead><tbody>
<tr><td>Length</td><td>10 to 30 pages plus financials</td><td>1 page</td></tr>
<tr><td>Best for</td><td>Bank loans, SBA loans, investors, partners</td><td>Solo businesses, side hustles, internal planning</td></tr>
<tr><td>Time to write</td><td>Days to weeks</td><td>An afternoon</td></tr>
<tr><td>Financial detail</td><td>3-year projections, first year monthly</td><td>Key numbers only</td></tr>
<tr><td>Update frequency</td><td>Yearly or before funding</td><td>Monthly or quarterly</td></tr>
</tbody></table>
<p>Many owners start with the one-page plan and expand it into a traditional plan when they apply for <a href="/blog/sba-loans">an SBA loan</a> or a <a href="/blog/business-line-of-credit">business line of credit</a>.</p>

<h2>Business plan template: section by section</h2>
<p>Copy these headings into a document and answer the prompts under each one.</p>

<h3>1. Executive summary</h3>
<ul>
<li>Business name, location and legal structure (sole proprietorship, LLC, corporation).</li>
<li>What you sell and to whom, in two sentences.</li>
<li>Why customers will choose you over alternatives.</li>
<li>Key financial highlights: year-one revenue, break-even month, funding needed.</li>
</ul>

<h3>2. Company description</h3>
<ul>
<li>Mission and the problem you solve.</li>
<li>Legal entity and ownership. Our <a href="/blog/business-entity-types">business entity types guide</a> helps you choose.</li>
<li>Stage of the business: idea, launched, growing.</li>
</ul>

<h3>3. Market analysis</h3>
<ul>
<li>Target customer profile: who they are, where they are, what they spend.</li>
<li>Market size estimate with sources (Census Bureau, industry associations, local data).</li>
<li>Competitors: names, prices, strengths and weaknesses.</li>
</ul>

<h3>4. Products, services and pricing</h3>
<ul>
<li>Each product or service with its price and cost.</li>
<li>Gross margin per product. See <a href="/blog/how-to-price-a-product">how to price a product</a>.</li>
<li>Payment terms you will offer (due on receipt, net 15, deposits).</li>
</ul>

<h3>5. Marketing and sales plan</h3>
<ul>
<li>Channels: referrals, local search, social media, marketplaces, direct sales.</li>
<li>Budget per channel and expected cost per customer.</li>
<li>Sales process from first contact to signed quote and invoice.</li>
</ul>

<h3>6. Operations</h3>
<ul>
<li>Location, equipment, suppliers and key software.</li>
<li>Licenses and permits. See <a href="/blog/how-to-get-a-business-license">how to get a business license</a>.</li>
<li>Billing and collections process: how you will invoice and follow up.</li>
</ul>

<h3>7. Management and organization</h3>
<ul>
<li>Owners and their experience.</li>
<li>Planned hires and outside advisers (accountant, lawyer, insurance broker).</li>
</ul>

<h3>8. Financial plan</h3>
<ul>
<li><a href="/blog/startup-costs">Startup costs</a> with quotes.</li>
<li>A <a href="/blog/sales-forecast">sales forecast</a> by month for year one.</li>
<li>Projected <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, <a href="/blog/cash-flow-forecast">cash flow forecast</a> and balance sheet.</li>
<li><a href="/blog/break-even-point">Break-even analysis</a>.</li>
</ul>

<h3>9. Funding request (if any)</h3>
<ul>
<li>Amount needed, what it pays for and over what period.</li>
<li>Type of funding sought (loan, equity, grant) and proposed repayment.</li>
</ul>

<h3>10. Appendix</h3>
<p>Resumes, quotes from suppliers, permits, letters of intent from customers, lease terms and charts.</p>

<h2>One-page business plan template</h2>
<p>For a quick plan, answer these nine lines on a single page:</p>
<table><thead><tr><th>Box</th><th>Prompt</th></tr></thead><tbody>
<tr><td>Problem</td><td>What pain or need do customers have?</td></tr>
<tr><td>Solution</td><td>What do you sell to solve it?</td></tr>
<tr><td>Customers</td><td>Who exactly buys, and who pays?</td></tr>
<tr><td>Unique value</td><td>Why you instead of the next option?</td></tr>
<tr><td>Channels</td><td>How customers find and buy from you</td></tr>
<tr><td>Revenue</td><td>Prices, average order and expected monthly sales</td></tr>
<tr><td>Costs</td><td>Startup costs and monthly fixed and variable costs</td></tr>
<tr><td>Key metrics</td><td>The 3 numbers you will track weekly</td></tr>
<tr><td>Milestones</td><td>What must be true in 30, 90 and 365 days</td></tr>
</tbody></table>

<p>Tip: keep the one-page plan pinned somewhere visible and update the revenue, costs and milestones boxes each quarter. It takes ten minutes and keeps the plan connected to what is actually happening in the business.</p>

<h2>Business plan example with real numbers</h2>
<p>Here is a condensed financial section for a fictional mobile dog grooming business, "Clean Paws Mobile," launching with one van.</p>
<table><thead><tr><th>Item</th><th>Year 1</th></tr></thead><tbody>
<tr><td>Average price per groom</td><td>$85</td></tr>
<tr><td>Grooms per week (average across the year)</td><td>22</td></tr>
<tr><td>Weeks worked</td><td>48</td></tr>
<tr><td>Revenue</td><td>$89,760</td></tr>
<tr><td>Supplies and fuel ($14 per groom)</td><td>$14,784</td></tr>
<tr><td>Gross profit</td><td>$74,976 (83.5%)</td></tr>
<tr><td>Van loan, insurance, phone, software, marketing</td><td>$26,400</td></tr>
<tr><td>Operating profit before owner pay and tax</td><td>$48,576</td></tr>
<tr><td>Startup costs (van fit-out, equipment, licenses)</td><td>$38,000</td></tr>
</tbody></table>
<p>Monthly fixed costs are $2,200 ($26,400 divided by 12). Each groom contributes $71 ($85 minus $14). Break-even is about 31 grooms a month, roughly 8 a week. That figure is the most persuasive line in the whole plan for a lender, because it shows how little volume the business needs to cover its bills.</p>

<h2>How to write the market analysis section</h2>
<p>The market section is where most small business plans are weakest, because owners describe the whole industry instead of their own customers. Build it from the ground up:</p>
<ol>
<li><strong>Define the service area or niche.</strong> "Pet owners within a 15-mile radius of downtown" is more useful than "the US pet care industry."</li>
<li><strong>Count potential customers.</strong> Use US Census Bureau data (for example, households and income in your ZIP codes), local registrations or trade association figures. Cite the source.</li>
<li><strong>Estimate how many can realistically buy from you.</strong> Factor in price, distance and how they buy today.</li>
<li><strong>Map the competition.</strong> List three to five direct competitors with prices, reviews and booking availability. A competitor booked two weeks ahead is evidence of unmet demand.</li>
<li><strong>State your advantage.</strong> Convenience, specialization, speed, price, quality or service hours, and why it is hard to copy.</li>
</ol>
<p>A short table comparing your offer with competitors on price, availability and key features is often more persuasive than several pages of text.</p>

<h2>What to include in the operations section</h2>
<p>Operations explains how the work actually gets done day to day. Lenders read it to judge whether you understand the business you are entering. Cover:</p>
<ul>
<li>Where you will work and why (home, leased premises, mobile, online).</li>
<li>Key suppliers and backup suppliers.</li>
<li>Equipment and software, including how you will quote, schedule, invoice and collect payment.</li>
<li>Insurance policies (general liability, professional liability, commercial auto, workers' compensation if you hire).</li>
<li>Quality control and customer service standards.</li>
<li>Bookkeeping: who records transactions and how often. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide covers a simple setup.</li>
</ul>

<h2>How to write a business plan: 8 steps</h2>
<ol>
<li><strong>Decide who will read it.</strong> A bank cares about repayment; an investor cares about growth; you care about decisions.</li>
<li><strong>Research before writing.</strong> Get real quotes for equipment, rent and insurance, and check competitor prices.</li>
<li><strong>Build the numbers first.</strong> Startup costs, sales forecast, then profit and loss and cash flow.</li>
<li><strong>Write the operational sections.</strong> Market, products, marketing, operations and management.</li>
<li><strong>State assumptions plainly.</strong> "We assume 22 grooms per week based on 3 competitors fully booked 2 weeks ahead."</li>
<li><strong>Write the executive summary last.</strong></li>
<li><strong>Get a review.</strong> SCORE offers free mentoring, and an accountant can sanity-check the financials.</li>
<li><strong>Set a review date.</strong> Put a quarterly reminder in your calendar to compare actual results with the plan.</li>
</ol>

<h2>What does each reader look for in a business plan?</h2>
<p>The same template serves different audiences, but each reader focuses on different sections. Shape the emphasis to the person you need to convince.</p>
<table><thead><tr><th>Reader</th><th>Main question</th><th>Sections to strengthen</th></tr></thead><tbody>
<tr><td>Bank or SBA lender</td><td>Can you repay on time?</td><td>Cash flow projection, collateral, owner experience, personal credit</td></tr>
<tr><td>Investor</td><td>How big can this get, and what is my return?</td><td>Market size, competition, growth plan, team</td></tr>
<tr><td>Landlord</td><td>Will you pay rent for the full lease?</td><td>Financial plan, funding, experience</td></tr>
<tr><td>Partner or key hire</td><td>Is this worth committing to?</td><td>Vision, roles, milestones</td></tr>
<tr><td>You</td><td>What should I do next, and can I afford it?</td><td>One-page plan, milestones, break-even</td></tr>
</tbody></table>

<h2>Financial projections template</h2>
<p>Lenders usually expect three years of projections, with year one by month. A summary like this sits at the top of your financial section, backed by monthly detail in a spreadsheet. The figures continue the Clean Paws example and are illustrative.</p>
<table><thead><tr><th>Line</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead><tbody>
<tr><td>Revenue</td><td>$89,760</td><td>$118,000</td><td>$196,000</td></tr>
<tr><td>Cost of sales</td><td>$14,784</td><td>$19,400</td><td>$33,000</td></tr>
<tr><td>Gross profit</td><td>$74,976</td><td>$98,600</td><td>$163,000</td></tr>
<tr><td>Operating expenses</td><td>$26,400</td><td>$29,000</td><td>$48,000</td></tr>
<tr><td>Second groomer wages</td><td>$0</td><td>$0</td><td>$42,000</td></tr>
<tr><td>Owner salary</td><td>$36,000</td><td>$45,000</td><td>$52,000</td></tr>
<tr><td>Net profit before tax</td><td>$12,576</td><td>$24,600</td><td>$21,000</td></tr>
</tbody></table>
<p>Notice the dip in year three: adding a second van and groomer raises revenue but also costs. Showing that honestly, with the reason, builds more trust than a smooth upward line. Compare your projected margins with <a href="/blog/average-profit-margin-by-industry">average profit margins by industry</a> to make sure they are realistic.</p>

<h2>How long does it take to write a business plan?</h2>
<p>A one-page plan takes an afternoon. A full plan for a loan typically takes one to three weeks of part-time work, most of it spent on research and numbers rather than writing. Gather these before you start:</p>
<ul>
<li>Quotes for equipment, premises, insurance and software.</li>
<li>Competitor prices and services (websites, phone calls, visits).</li>
<li>License and permit requirements from your city, county and state.</li>
<li>Your personal financial statement and credit report if borrowing.</li>
<li>Any letters of intent, pre-orders or signed contracts from customers.</li>
</ul>
<p>Free help is available. SCORE mentors and Small Business Development Centers (SBDCs), both supported by the SBA, review plans at no charge, and many local banks will tell you exactly what they want to see.</p>

<h2>Common business plan mistakes</h2>
<ul>
<li><strong>Top-down market claims.</strong> "If we get 1% of a $5 billion market" convinces nobody. Build revenue from customers, prices and capacity.</li>
<li><strong>No owner salary.</strong> Lenders want to see how you will live while the business grows.</li>
<li><strong>Ignoring payment timing.</strong> If clients pay in 30 days, your cash arrives a month after the sale. Your cash flow projection must reflect your <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li><strong>Forgetting taxes.</strong> Include income tax, self-employment tax and sales tax obligations.</li>
<li><strong>Generic AI text.</strong> An <a href="/blog/ai-business-plan-generator">AI business plan generator</a> can help with structure, but invented statistics damage credibility.</li>
<li><strong>Too long.</strong> A focused 15-page plan beats a padded 50-page one.</li>
</ul>

<h2>After the plan: setting up billing</h2>
<p>A plan only turns into income when you invoice customers and get paid. Decide your invoice layout, numbering and terms before your first sale. Our <a href="/invoice-templates">invoice templates</a> and <a href="/tools/invoice-number-generator">invoice number generator</a> help you start with a consistent system.</p>

<p>Use this business plan template as a working tool: fill in the one-page plan today, expand it into the full template when you need funding, and revisit the numbers every quarter. When your first customer says yes, our <a href="/invoice-generator">free invoice generator</a> creates a professional PDF invoice in your browser with no sign-up required.</p>
`,
  },
  {
    slug: "startup-costs",
    title: "Startup Costs: Estimate, Worksheet and $5,000 Tax Deduction",
    description:
      "Startup costs explained: how to estimate them with a worksheet, typical cost categories, and how the IRS $5,000 startup cost deduction and amortization work.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-start-a-small-business",
      "business-plan-template",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "How much does it cost to start a small business?",
        a: "It ranges from a few hundred dollars for a home-based service business to hundreds of thousands for a restaurant or manufacturing operation. The biggest drivers are premises, equipment, inventory and the cash reserve you need before revenue arrives. Build your own estimate from real quotes rather than relying on averages, and add a contingency of around 10% to 20% for costs you have not foreseen.",
      },
      {
        q: "Can I deduct startup costs if my business never opens?",
        a: "Generally, the startup cost deduction applies only once an active trade or business begins. If you investigate a business and decide not to start it, costs of a general search are usually personal and not deductible, while costs of trying to acquire a specific business may be treated as a capital loss. The rules are detailed, so discuss abandoned ventures with a tax professional.",
      },
      {
        q: "What is the difference between startup costs and organizational costs?",
        a: "Startup costs are expenses of investigating and creating a business before it opens, such as market research, advertising and employee training. Organizational costs are the costs of forming a corporation or partnership, such as state filing fees and legal fees for the formation documents. Each category gets its own separate deduction of up to $5,000, with the remainder amortized over 180 months.",
      },
      {
        q: "Are equipment purchases startup costs?",
        a: "No. Equipment, vehicles, computers and other property you will use for more than a year are capital assets, not startup costs. They are recovered through depreciation, Section 179 expensing or bonus depreciation once placed in service. Your startup budget should still include them, because they need cash, but they follow different tax rules from deductible startup expenses.",
      },
      {
        q: "When do I claim the startup cost deduction?",
        a: "You claim it on the tax return for the year the business begins active operations. The deduction is generally treated as elected automatically unless you choose to capitalize the costs instead. Amortization of the remaining amount is reported on Form 4562, and the deduction flows to Schedule C for sole proprietors or the entity's return for partnerships and corporations.",
      },
      {
        q: "How do I pay for startup costs?",
        a: "Common sources are personal savings, friends and family, SBA microloans and 7(a) loans, equipment financing, business credit cards and, for some ventures, grants or investors. Many service businesses start lean by keeping costs low and growing from early revenue. Whatever the source, keep business spending in a separate account so you can prove the costs at tax time.",
      },
      {
        q: "Should I include my own salary in startup costs?",
        a: "Include the living costs you will need to cover until the business pays you, either as an owner draw reserve or as part of working capital. This is not a tax deductible startup expense for a sole proprietor, but it is a real cash need. Many new businesses fail because the owner runs out of personal money before the business becomes profitable.",
      },
      {
        q: "How much contingency should I add to startup costs?",
        a: "A contingency of 10% to 20% of the total is a common planning rule. Use the higher end when you are renovating premises, buying used equipment or entering a regulated industry where permits and inspections can delay opening. A contingency is not a guess; it is protection against the costs and delays that almost every new business meets.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Startup costs are the one-time and pre-opening expenses of creating a business, such as research, licenses, equipment, deposits, initial inventory and launch marketing. For US taxes, you can generally deduct up to $5,000 of startup costs in your first year of business, reduced once costs pass $50,000, and amortize the rest over 180 months.</p>

<p>Estimating startup costs accurately is the difference between a confident launch and running out of cash in month three. This guide shows how to build a startup cost worksheet, what to include, a worked example, and how the IRS treats startup expenses. It is general information, not tax advice.</p>

<h2>What are startup costs?</h2>
<p>Startup costs are everything you spend to get a business ready to sell. For planning, they fall into two groups:</p>
<ul>
<li><strong>One-time costs:</strong> business registration, permits, equipment, renovations, website build, initial inventory, deposits on rent and utilities.</li>
<li><strong>Pre-revenue running costs:</strong> rent, insurance, software, marketing and living costs during the months before sales cover expenses. This is your working capital reserve.</li>
</ul>
<p>For tax, "startup costs" has a narrower meaning, covered below. For budgeting, include everything that needs cash before the business pays its own way.</p>

<h2>Startup cost worksheet: categories to include</h2>
<table><thead><tr><th>Category</th><th>Examples</th><th>Where to get numbers</th></tr></thead><tbody>
<tr><td>Legal and registration</td><td>LLC filing, DBA, registered agent, EIN (free from the IRS)</td><td>State and county websites</td></tr>
<tr><td>Licenses and permits</td><td>Business license, health permit, contractor license</td><td>City, county and state agencies</td></tr>
<tr><td>Premises</td><td>Security deposit, first month's rent, build-out, signage</td><td>Landlord, contractors</td></tr>
<tr><td>Equipment and tools</td><td>Computers, vehicles, machines, furniture</td><td>Supplier quotes</td></tr>
<tr><td>Initial inventory and supplies</td><td>Stock, packaging, raw materials</td><td>Wholesaler price lists</td></tr>
<tr><td>Technology</td><td>Website, domain, POS, accounting software</td><td>Vendor pricing pages</td></tr>
<tr><td>Insurance</td><td>General liability, professional liability, commercial auto</td><td>Broker quotes</td></tr>
<tr><td>Marketing</td><td>Logo, launch ads, printed materials</td><td>Designer and ad platform quotes</td></tr>
<tr><td>Professional fees</td><td>Accountant, attorney, consultants</td><td>Quotes</td></tr>
<tr><td>Working capital reserve</td><td>3 to 6 months of fixed costs and owner draw</td><td>Your monthly budget</td></tr>
<tr><td>Contingency</td><td>10% to 20% of the total</td><td>Rule of thumb</td></tr>
</tbody></table>
<p>If you have not chosen a legal structure yet, read <a href="/blog/how-to-start-an-llc">how to start an LLC</a> and <a href="/blog/what-is-a-dba">what a DBA is</a> to price the registration line correctly, and <a href="/blog/how-to-get-a-business-license">how to get a business license</a> for permits.</p>

<h2>Worked example: startup costs for a home-based bakery</h2>
<p>Jordan plans a licensed home bakery selling custom cakes. (For the full business guide, see <a href="/blog/how-to-start-a-home-bakery-business">how to start a home bakery business</a>.) The figures are illustrative.</p>
<table><thead><tr><th>Item</th><th>Cost</th></tr></thead><tbody>
<tr><td>LLC filing and annual report reserve</td><td>$200</td></tr>
<tr><td>Cottage food permit and food handler course</td><td>$150</td></tr>
<tr><td>Commercial stand mixer and pans</td><td>$1,400</td></tr>
<tr><td>Initial ingredients and packaging</td><td>$600</td></tr>
<tr><td>Website, domain and photography</td><td>$700</td></tr>
<tr><td>Liability insurance (first year)</td><td>$450</td></tr>
<tr><td>Launch marketing and samples</td><td>$500</td></tr>
<tr><td>Working capital (3 months of fixed costs at $350)</td><td>$1,050</td></tr>
<tr><td>Subtotal</td><td>$5,050</td></tr>
<tr><td>Contingency (15%)</td><td>$758</td></tr>
<tr><td><strong>Total cash needed</strong></td><td><strong>$5,808</strong></td></tr>
</tbody></table>
<p>For tax purposes, the mixer and pans are equipment (depreciated or expensed under separate rules), the LLC filing fee is an organizational cost, and items like pre-opening marketing and the course may be startup costs. Ingredients become inventory and cost of goods sold when used. Working capital is not an expense at all until it is spent.</p>

<h2>How to estimate startup costs: step by step</h2>
<ol>
<li><strong>List every activity before your first sale.</strong> Registration, fit-out, buying, hiring, marketing.</li>
<li><strong>Get at least two quotes for big items.</strong> Equipment, insurance and premises vary widely.</li>
<li><strong>Estimate monthly fixed costs.</strong> Rent, insurance, software, loan payments, phone.</li>
<li><strong>Decide how many months of reserve you need.</strong> Use a <a href="/blog/sales-forecast">sales forecast</a> to see when revenue covers costs. Three to six months is common.</li>
<li><strong>Add contingency.</strong> 10% to 20% depending on risk.</li>
<li><strong>Separate one-time from recurring.</strong> This feeds both your <a href="/blog/business-plan-template">business plan</a> and your <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</li>
<li><strong>Track actuals.</strong> Record every pre-opening expense with receipts. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> shows simple systems.</li>
</ol>

<h2>Can you deduct startup costs? The $5,000 rule</h2>
<p>Under Internal Revenue Code Section 195, as explained in <a href="https://www.irs.gov/instructions/i4562">IRS instructions for Form 4562</a>, you can generally elect to:</p>
<ul>
<li><strong>Deduct up to $5,000</strong> of startup costs in the year your active business begins.</li>
<li><strong>Reduce that $5,000</strong> dollar for dollar by the amount your total startup costs exceed $50,000. At $55,000 or more, the immediate deduction is zero.</li>
<li><strong>Amortize the remainder</strong> evenly over 180 months (15 years), starting with the month the business begins.</li>
</ul>
<p>A separate, parallel $5,000 deduction (with the same $50,000 phase-out and 180-month amortization) applies to organizational costs of a corporation or partnership, such as state filing fees and legal fees for formation documents.</p>

<h3>What qualifies as a deductible startup cost?</h3>
<p>Qualifying costs are those that would be deductible if the business were already running, but were paid before it began. Examples include market surveys, advertising before opening, training employees before opening, travel to line up suppliers or customers, and consultant fees. Equipment, inventory, land and buildings do not qualify, because they follow depreciation and inventory rules.</p>

<h3>Example of the calculation</h3>
<table><thead><tr><th>Total startup costs</th><th>First-year deduction</th><th>Amount amortized over 180 months</th><th>Monthly amortization</th></tr></thead><tbody>
<tr><td>$3,000</td><td>$3,000</td><td>$0</td><td>$0</td></tr>
<tr><td>$18,000</td><td>$5,000</td><td>$13,000</td><td>$72.22</td></tr>
<tr><td>$52,000</td><td>$3,000</td><td>$49,000</td><td>$272.22</td></tr>
<tr><td>$60,000</td><td>$0</td><td>$60,000</td><td>$333.33</td></tr>
</tbody></table>
<p>If the $18,000 business opens in July, the first year's deduction is $5,000 plus 6 months of amortization ($433.33). Sole proprietors report this on Schedule C. See our <a href="/blog/schedule-c-for-freelancers">Schedule C guide</a> and the list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> for how it fits with other write-offs.</p>

<h2>Startup costs vs organizational costs vs capital expenses</h2>
<p>For tax purposes, the same launch budget splits into several buckets, each with its own treatment. Keeping them separate in your records from the start saves your accountant time and you money.</p>
<table><thead><tr><th>Type</th><th>Examples</th><th>General tax treatment</th></tr></thead><tbody>
<tr><td>Startup costs (Section 195)</td><td>Market research, pre-opening ads, training, travel to find suppliers</td><td>Up to $5,000 deducted, rest amortized over 180 months</td></tr>
<tr><td>Organizational costs (Sections 248 and 709)</td><td>State filing fees, legal fees for forming a corporation or partnership</td><td>Separate $5,000 deduction, rest amortized over 180 months</td></tr>
<tr><td>Capital assets</td><td>Equipment, vehicles, computers, furniture</td><td>Depreciation, Section 179 or bonus depreciation</td></tr>
<tr><td>Inventory</td><td>Stock for resale, raw materials</td><td>Deducted as cost of goods sold when sold</td></tr>
<tr><td>Ordinary expenses after opening</td><td>Rent, software, ads after launch</td><td>Deducted in the year paid or incurred</td></tr>
</tbody></table>
<p>A single-member LLC taxed as a sole proprietorship is generally not a corporation or partnership, so its state filing fee is usually treated as a startup cost rather than an organizational cost. Ask a tax professional how this applies to your structure, and see our <a href="/blog/llc-tax-rate">LLC tax rate guide</a> for how LLC profits are taxed.</p>

<h2>Typical startup cost ranges by business type</h2>
<p>These ranges are illustrative, based on the categories above, and vary widely by location and scale. Use them only to sense-check your own quotes.</p>
<table><thead><tr><th>Business</th><th>Main costs</th><th>Illustrative range</th></tr></thead><tbody>
<tr><td>Freelance or consulting service from home</td><td>Laptop, software, website, insurance, registration</td><td>$500 to $5,000</td></tr>
<tr><td>Cleaning or lawn care</td><td>Equipment, supplies, insurance, vehicle signage</td><td>$1,000 to $15,000</td></tr>
<tr><td>Online store</td><td>Platform, inventory, photography, ads</td><td>$1,000 to $25,000</td></tr>
<tr><td>Mobile service with a vehicle (detailing, grooming)</td><td>Van or trailer, equipment, insurance</td><td>$5,000 to $75,000</td></tr>
<tr><td>Food truck or small restaurant</td><td>Kitchen equipment, permits, build-out, inventory</td><td>$50,000 to $300,000+</td></tr>
</tbody></table>
<p>For detailed lists by industry, see our guides on <a href="/blog/how-to-start-a-cleaning-business">starting a cleaning business</a>, <a href="/blog/how-to-start-an-online-store">starting an online store</a> and <a href="/blog/how-to-start-a-food-truck-business">starting a food truck business</a>.</p>

<h2>How to fund startup costs</h2>
<table><thead><tr><th>Source</th><th>Pros</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Personal savings</td><td>No interest, full control</td><td>Do not risk your emergency fund</td></tr>
<tr><td>SBA microloan</td><td>Small amounts (up to $50,000) with support</td><td>Paperwork, lender requirements</td></tr>
<tr><td>Equipment financing</td><td>Equipment secures the loan</td><td>Total interest cost; see <a href="/blog/equipment-financing">equipment financing</a></td></tr>
<tr><td>Business credit card</td><td>Fast, builds credit</td><td>High interest if not paid monthly</td></tr>
<tr><td>Friends and family</td><td>Flexible terms</td><td>Put terms in writing with a <a href="/blog/promissory-note-template">promissory note</a></td></tr>
<tr><td>Customer deposits</td><td>Customers fund materials</td><td>Must deliver as promised</td></tr>
</tbody></table>

<h2>How long will it take to earn back your startup costs?</h2>
<p>Once you know your total startup costs, estimate the payback period: how many months of profit it takes to recover the investment. Using the bakery example, if Jordan expects to sell 40 cakes a month at $65 with ingredient and packaging costs of $18 per cake, each month contributes $1,880 before fixed costs. With $350 of fixed costs, monthly profit is about $1,530 before owner pay and tax. The $5,808 investment would be recovered in about four months at that pace, if sales arrive as planned.</p>
<p>In practice sales ramp up slowly, so build the payback calculation on a month-by-month <a href="/blog/sales-forecast">sales forecast</a> rather than a steady average. A payback period longer than two or three years for a small service business is a warning sign to cut costs or rethink pricing.</p>

<h2>Records to keep for startup expenses</h2>
<p>The IRS expects you to support every deduction. For startup and organizational costs, keep:</p>
<ul>
<li>Receipts and invoices showing date, vendor, amount and what was bought.</li>
<li>Bank or card statements proving payment.</li>
<li>A note of the date your business began active operations, since amortization starts that month.</li>
<li>A list classifying each cost as startup, organizational, equipment or inventory.</li>
<li>Formation documents and license receipts.</li>
</ul>
<p>Keep records for at least as long as the amortization runs (up to 15 years) plus the normal period the IRS can examine a return. Organizing them by <a href="/blog/business-expense-categories">business expense category</a> from day one makes tax time much easier.</p>

<h2>Common startup cost mistakes</h2>
<ul>
<li><strong>Forgetting the reserve.</strong> Equipment gets budgeted; the four months of rent before customers arrive does not.</li>
<li><strong>Using personal cards with no records.</strong> Keep receipts and open a business account early. See <a href="/blog/business-bank-account-for-freelancers">business bank accounts</a>.</li>
<li><strong>Treating equipment as a startup expense.</strong> It follows depreciation rules. Read <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a>.</li>
<li><strong>Underestimating payment delays.</strong> If customers pay 30 days after invoice, you need cash for that gap.</li>
<li><strong>No contingency.</strong> Permits, repairs and supplier delays almost always cost more than planned.</li>
<li><strong>Missing the deduction.</strong> Pre-opening costs are easy to forget at tax time. Keep a separate list from day one.</li>
</ul>

<p>One more mistake is worth noting: spending the whole budget before launch. Keep part of your cash in reserve until you have real customers and know which tools and equipment you actually need. Many owners discover that the expensive software or premium equipment they bought in month one sits unused.</p>

<h2>How to keep startup costs low</h2>
<ul>
<li>Start from home or a shared space before signing a long lease.</li>
<li>Buy used equipment, or lease or finance it to spread the cost.</li>
<li>Use free tools early: a free <a href="/invoice-generator">invoice generator</a>, free accounting tiers and a simple website builder.</li>
<li>Take deposits on custom work so customers fund materials.</li>
<li>Pre-sell to a few customers before buying inventory at scale.</li>
</ul>

<p>Good startup cost estimates come from real quotes, a working capital reserve and an honest contingency, and good records let you claim the $5,000 startup cost deduction later. When you land your first job, bill it with our invoice generator, which is free, needs no sign-up and builds a PDF invoice in your browser.</p>
`,
  },
  {
    slug: "sales-forecast",
    title: "Sales Forecast: 5 Methods + a Worked Example (2026)",
    description:
      "How to make a sales forecast for a small business: 5 forecasting methods, a month-by-month worked example, a simple template and the mistakes that throw it off.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-forecast", "business-plan-template", "budget-vs-actual"],
    faqs: [
      {
        q: "How far ahead should a small business forecast sales?",
        a: "Most small businesses forecast 12 months ahead in monthly detail, and add a less detailed second and third year when a lender or investor asks for it. A rolling forecast, where you add a new month each time one ends, keeps the plan current. Short-term weekly forecasts are useful when cash is tight or demand is very seasonal.",
      },
      {
        q: "What is the difference between a sales forecast and a sales budget?",
        a: "A sales forecast is your best estimate of what will actually be sold. A sales budget or target is what you plan or want to sell, often set slightly higher to motivate a team. Keep them separate: base cash and spending decisions on the realistic forecast, and use targets for goals and incentives so optimism does not leak into your cash plan.",
      },
      {
        q: "How do I forecast sales for a new business with no history?",
        a: "Build the forecast from the bottom up: estimate how many leads you can reach, the share that will buy, the average sale and how many customers you can physically serve each month. Use competitor capacity, industry benchmarks, pre-orders and test sales to check the assumptions. Start conservatively and ramp up over several months rather than assuming full sales in month one.",
      },
      {
        q: "How accurate should a sales forecast be?",
        a: "No forecast is exact. For a small business, being within about 10% to 20% of actual sales each month is generally useful, and accuracy improves as you gather history. What matters more is reviewing the gap every month, understanding why it happened and adjusting assumptions. A forecast that is consistently too high is more dangerous than one that is slightly cautious.",
      },
      {
        q: "Should my sales forecast match my cash flow forecast?",
        a: "They are linked but not the same. The sales forecast shows when sales are made or invoiced. The cash flow forecast shows when the money actually arrives, which depends on payment terms and late payers. If you invoice on net 30 terms, January sales appear in February cash. Convert forecast sales to expected cash receipts using your real collection pattern.",
      },
      {
        q: "What tools can I use to create a sales forecast?",
        a: "A spreadsheet in Excel or Google Sheets is enough for most small businesses. Accounting software and CRM systems often include forecasting features based on past invoices or open deals. AI forecasting tools can spot patterns in longer histories, but they still depend on clean data and sensible assumptions about prices, capacity and upcoming changes in your business.",
      },
      {
        q: "How do I account for seasonality in a sales forecast?",
        a: "Calculate a seasonal index for each month: divide each month's average sales by the average month across one or more years. A December index of 1.4 means December is usually 40% above an average month. Multiply your forecast average month by each index. Without history, use industry patterns or competitor observations and refine after the first year.",
      },
      {
        q: "Who should own the sales forecast?",
        a: "In a small business the owner usually owns it, with input from whoever handles sales and the bookkeeper or accountant. The person who owns it should update it monthly, compare it with actual invoiced sales and explain significant differences. Sharing it with key staff helps everyone plan purchasing, staffing and marketing around the same numbers.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A sales forecast is an estimate of how much you will sell over a future period, usually month by month for the next 12 months. Small businesses build one from past sales, the sales pipeline, or a bottom-up model of leads, conversion rate and average sale, then adjust for seasonality and capacity.</p>

<p>A good sales forecast drives almost every other plan: how much stock to buy, when to hire, how much cash you will have and whether you can afford a loan. This guide explains five practical forecasting methods, works through a full 12-month example and gives you a simple template you can copy into a spreadsheet.</p>

<h2>What is a sales forecast?</h2>
<p>A sales forecast projects future revenue, usually by month and often by product or customer group. It is the top line of your projected <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and the starting point of your <a href="/blog/cash-flow-forecast">cash flow forecast</a>. Lenders reviewing a <a href="/blog/business-plan-template">business plan</a> look at the sales forecast first, because every other projection depends on it.</p>
<p>A forecast is not a target. A target is what you want; a forecast is what you realistically expect. Keep both, but plan spending on the forecast.</p>

<h2>Sales forecasting methods for small businesses</h2>
<table><thead><tr><th>Method</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Historical growth</td><td>Last year's monthly sales times an expected growth rate</td><td>Established businesses with stable demand</td></tr>
<tr><td>Bottom-up (unit) forecast</td><td>Leads x conversion rate x average sale, capped by capacity</td><td>New businesses, service businesses</td></tr>
<tr><td>Pipeline forecast</td><td>Open deals x probability of closing</td><td>B2B, agencies, contractors with quotes out</td></tr>
<tr><td>Moving average</td><td>Average of the last 3 or 6 months</td><td>Short-term planning, steady sales</td></tr>
<tr><td>Seasonal index</td><td>Average month x each month's seasonal factor</td><td>Seasonal businesses (landscaping, retail, events)</td></tr>
</tbody></table>

<h3>1. Historical growth method</h3>
<p>Take each month's sales from last year and multiply by 1 plus your expected growth rate. If March last year was $20,000 and you expect 8% growth, forecast $21,600. Adjust for known one-offs, such as a large client you have lost.</p>

<h3>2. Bottom-up forecast</h3>
<p>Multiply the number of potential customers you can reach by the share who buy and by the average sale. Then check it against capacity: a solo cleaner cannot clean 200 homes a week, however strong demand is.</p>

<h3>3. Pipeline forecast</h3>
<p>List every open quote with its value and a realistic probability of winning. A $10,000 quote at 40% contributes $4,000 to the forecast. Use your actual quote win rate from past <a href="/blog/quote-vs-estimate">quotes and estimates</a>, not a hopeful guess.</p>

<h3>4. Moving average</h3>
<p>Average the last three months to forecast the next. It smooths noise but lags behind turning points.</p>

<h3>5. Seasonal index</h3>
<p>Divide each month's sales by the average month to get an index. Multiply your forecast average month by each index to spread annual sales realistically.</p>

<h2>Worked example: a 12-month sales forecast</h2>
<p>Sam starts a residential window cleaning business in January (see our <a href="/blog/window-cleaning-invoice-template">window cleaning invoice template</a> for how jobs are billed). He uses a bottom-up method with seasonality.</p>
<ul>
<li>Average job: $220.</li>
<li>Capacity: 4 jobs a day, 5 days a week, about 80 jobs a month at full capacity.</li>
<li>Marketing reaches 400 households a month; 3% book a first job in the first months, rising to 5% as reviews accumulate.</li>
<li>40% of customers rebook each quarter.</li>
<li>Spring and early summer are busiest; December and January are slow.</li>
</ul>
<table><thead><tr><th>Month</th><th>Forecast jobs</th><th>Forecast sales</th></tr></thead><tbody>
<tr><td>Jan</td><td>12</td><td>$2,640</td></tr>
<tr><td>Feb</td><td>16</td><td>$3,520</td></tr>
<tr><td>Mar</td><td>28</td><td>$6,160</td></tr>
<tr><td>Apr</td><td>42</td><td>$9,240</td></tr>
<tr><td>May</td><td>55</td><td>$12,100</td></tr>
<tr><td>Jun</td><td>60</td><td>$13,200</td></tr>
<tr><td>Jul</td><td>52</td><td>$11,440</td></tr>
<tr><td>Aug</td><td>48</td><td>$10,560</td></tr>
<tr><td>Sep</td><td>50</td><td>$11,000</td></tr>
<tr><td>Oct</td><td>45</td><td>$9,900</td></tr>
<tr><td>Nov</td><td>30</td><td>$6,600</td></tr>
<tr><td>Dec</td><td>18</td><td>$3,960</td></tr>
<tr><td><strong>Total</strong></td><td><strong>456</strong></td><td><strong>$100,320</strong></td></tr>
</tbody></table>
<p>Peak months stay below the 80-job capacity, which makes the forecast believable. Sam invoices commercial clients on net 15 terms, so in his cash flow forecast about 30% of each month's sales arrive the following month. If you offer longer terms, read about <a href="/blog/days-sales-outstanding">days sales outstanding</a> to model the delay.</p>

<h2>How to build a sales forecast: step by step</h2>
<ol>
<li><strong>Choose the period and detail.</strong> 12 months, monthly, split by your main products or services.</li>
<li><strong>Gather data.</strong> Past invoices, website traffic, inquiries, quote win rates, competitor prices.</li>
<li><strong>Pick a method.</strong> Historical for existing businesses, bottom-up for new ones, pipeline for B2B.</li>
<li><strong>Apply seasonality.</strong> Use your own history or industry patterns.</li>
<li><strong>Cap by capacity.</strong> Staff hours, equipment, inventory and your own time.</li>
<li><strong>Write down assumptions.</strong> Price, conversion, rebooking rate, new hires.</li>
<li><strong>Create three scenarios.</strong> Conservative, expected and optimistic. Plan cash on the conservative one.</li>
<li><strong>Review monthly.</strong> Compare forecast with actual invoiced sales and update. Our <a href="/blog/budget-vs-actual">budget vs actual guide</a> shows how to analyze variances.</li>
</ol>

<h2>What data do you need for an accurate sales forecast?</h2>
<p>The quality of a forecast depends on its inputs. Collect these before you open the spreadsheet:</p>
<ul>
<li><strong>Invoice history:</strong> at least 12 months of sales by month, product and customer, if the business is running. Clean, numbered invoices make this easy to export.</li>
<li><strong>Lead data:</strong> website visits, calls, inquiries and quote requests per month, plus where they came from.</li>
<li><strong>Conversion rates:</strong> the share of inquiries that became quotes and of quotes that became jobs.</li>
<li><strong>Average sale and repeat rate:</strong> how much a typical customer spends and how often they come back.</li>
<li><strong>Capacity:</strong> billable hours, staff, equipment and stock limits.</li>
<li><strong>Known changes:</strong> planned price rises, new products, lost or new large clients, marketing campaigns.</li>
<li><strong>External factors:</strong> seasonality, local events, economic conditions in your customer base.</li>
</ul>
<p>For a new business with none of this history, use test sales, pre-orders, competitor observation and industry benchmarks, and mark every assumption clearly so you can replace it with real data within the first three months.</p>

<h2>Simple sales forecast template</h2>
<p>Copy these columns into a spreadsheet:</p>
<table><thead><tr><th>Month</th><th>Leads</th><th>Conversion %</th><th>New customers</th><th>Repeat customers</th><th>Average sale</th><th>Forecast sales</th><th>Actual sales</th><th>Variance</th></tr></thead><tbody>
<tr><td>Jan</td><td>400</td><td>3%</td><td>12</td><td>0</td><td>$220</td><td>$2,640</td><td></td><td></td></tr>
<tr><td>Feb</td><td>400</td><td>3%</td><td>12</td><td>4</td><td>$220</td><td>$3,520</td><td></td><td></td></tr>
</tbody></table>
<p>Fill "Actual sales" from your invoice records each month. A consistent invoice numbering system, such as one from our <a href="/tools/invoice-number-generator">invoice number generator</a>, makes it easy to total sales by month.</p>

<h2>How to turn a sales forecast into a cash forecast</h2>
<p>Sales and cash rarely land in the same month. Convert forecast sales into expected receipts using your real collection pattern. Suppose Sam's records show 70% of sales are paid in the month of the job (card and same-day payments) and 30% the month after (invoiced customers).</p>
<table><thead><tr><th>Month</th><th>Forecast sales</th><th>70% this month</th><th>30% from last month</th><th>Expected cash in</th></tr></thead><tbody>
<tr><td>Jan</td><td>$2,640</td><td>$1,848</td><td>$0</td><td>$1,848</td></tr>
<tr><td>Feb</td><td>$3,520</td><td>$2,464</td><td>$792</td><td>$3,256</td></tr>
<tr><td>Mar</td><td>$6,160</td><td>$4,312</td><td>$1,056</td><td>$5,368</td></tr>
<tr><td>Apr</td><td>$9,240</td><td>$6,468</td><td>$1,848</td><td>$8,316</td></tr>
</tbody></table>
<p>In a growing business, cash always lags sales. That gap is why fast-growing companies can run short of money while profitable on paper. Reduce it by invoicing on completion, taking deposits and offering card payments. Our <a href="/blog/cash-flow-management">cash flow management guide</a> covers more tactics.</p>

<h2>Scenario planning: conservative, expected and optimistic</h2>
<p>A single number hides risk. Build three versions by changing the two or three assumptions you are least sure about.</p>
<table><thead><tr><th>Assumption</th><th>Conservative</th><th>Expected</th><th>Optimistic</th></tr></thead><tbody>
<tr><td>Conversion rate</td><td>2%</td><td>3% rising to 5%</td><td>5%</td></tr>
<tr><td>Average job</td><td>$200</td><td>$220</td><td>$240</td></tr>
<tr><td>Rebooking rate</td><td>30%</td><td>40%</td><td>50%</td></tr>
<tr><td>Annual sales</td><td>About $70,000</td><td>$100,320</td><td>About $125,000</td></tr>
</tbody></table>
<p>Set fixed costs, loan payments and owner draws so the business survives the conservative case. Treat the optimistic case as upside, not a plan. If the conservative case does not cover costs, change the plan before you launch, not after.</p>

<h2>How to measure forecast accuracy</h2>
<p>Each month, calculate the variance: actual sales minus forecast, divided by forecast. Over a year, average the absolute percentage errors (this is the mean absolute percentage error, or MAPE). A falling MAPE means your assumptions are improving. Also look for bias: if you are below forecast eight months out of twelve, your assumptions are systematically too optimistic and need to come down.</p>
<ul>
<li><strong>Under forecast, demand problem:</strong> fewer leads or lower conversion. Look at marketing and pricing.</li>
<li><strong>Under forecast, capacity problem:</strong> demand was there but you could not deliver. Consider <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</li>
<li><strong>Over forecast:</strong> great, but check whether it was a one-off before raising the whole forecast.</li>
</ul>

<h2>Forecasting tips by business type</h2>
<ul>
<li><strong>Retainer and subscription businesses:</strong> forecast active clients times monthly fee, minus expected churn, plus new sign-ups. Our guide to <a href="/blog/customer-lifetime-value">customer lifetime value</a> helps estimate churn.</li>
<li><strong>Project businesses (contractors, agencies):</strong> use the pipeline method and spread large projects across months using milestone or <a href="/blog/progress-billing">progress billing</a> dates.</li>
<li><strong>Retail and e-commerce:</strong> forecast traffic times conversion rate times average order value, with strong seasonality around holidays.</li>
<li><strong>Startups:</strong> combine a bottom-up model with your <a href="/blog/startup-costs">startup costs</a> to see how many months of reserve you need.</li>
</ul>

<h2>Common sales forecasting mistakes</h2>
<ul>
<li><strong>Hockey-stick growth.</strong> Doubling every month rarely happens. Ramp up gradually.</li>
<li><strong>Ignoring capacity.</strong> Sales cannot exceed what you can produce or deliver.</li>
<li><strong>Confusing sales with cash.</strong> Payment terms and late payers delay cash.</li>
<li><strong>Using a target as the forecast.</strong> Plan spending on realistic numbers.</li>
<li><strong>Forgetting churn.</strong> Subscription and repeat businesses lose customers each month.</li>
<li><strong>Never updating.</strong> A forecast is a living document; review it monthly.</li>
<li><strong>Ignoring price changes.</strong> If you plan to <a href="/blog/how-to-raise-prices">raise prices</a>, model the effect on both price and volume.</li>
</ul>

<h2>Example: a pipeline sales forecast for a B2B service</h2>
<p>Priya runs a small IT support company that wins most work through quotes. Her pipeline at the start of the quarter looks like this, with probabilities based on her past win rate at each stage:</p>
<table><thead><tr><th>Client</th><th>Quote value</th><th>Stage</th><th>Probability</th><th>Weighted value</th></tr></thead><tbody>
<tr><td>Dental clinic network setup</td><td>$8,500</td><td>Verbal yes</td><td>80%</td><td>$6,800</td></tr>
<tr><td>Law firm managed services (3 months)</td><td>$7,200</td><td>Proposal sent</td><td>40%</td><td>$2,880</td></tr>
<tr><td>Retailer POS upgrade</td><td>$4,000</td><td>Proposal sent</td><td>40%</td><td>$1,600</td></tr>
<tr><td>Accounting firm security audit</td><td>$3,500</td><td>First meeting</td><td>15%</td><td>$525</td></tr>
<tr><td>Existing monthly contracts</td><td>$12,000</td><td>Signed</td><td>100%</td><td>$12,000</td></tr>
<tr><td><strong>Quarter forecast</strong></td><td><strong>$35,200</strong></td><td></td><td></td><td><strong>$23,805</strong></td></tr>
</tbody></table>
<p>The forecast is $23,805, not the $35,200 total of all quotes. Priya updates probabilities weekly as deals move. When a deal is won she invoices the deposit right away, which turns forecast sales into cash faster. Tracking win rates by stage over time is what makes this method accurate.</p>

<h2>Using the forecast to make decisions</h2>
<p>Once you trust your sales forecast, use it to plan stock purchases, set a hiring date, size a <a href="/blog/business-line-of-credit">line of credit</a> for slow months and check your <a href="/blog/break-even-point">break-even point</a>. Compare forecast margins with <a href="/blog/average-profit-margin-by-industry">industry profit margin benchmarks</a> to see whether the plan is realistic.</p>

<p>A sales forecast does not need complex software: a clear method, honest assumptions and monthly comparison with real invoices will make it more accurate every month. To record each sale cleanly, use our <a href="/invoice-generator">free invoice generator</a>, which needs no sign-up and downloads a PDF invoice created in your browser.</p>
`,
  },
  {
    slug: "accounts-payable-aging-report",
    title: "Accounts Payable Aging Report: How to Read It (+ Example)",
    description:
      "Accounts payable aging report explained: what the 30/60/90-day buckets mean, how to read and build one, a worked example and how to use it to plan payments.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "accounts-receivable-aging-report",
      "accounts-payable-process",
      "accounts-payable-turnover-ratio",
    ],
    faqs: [
      {
        q: "What is the difference between an AP aging report and an AR aging report?",
        a: "An accounts payable aging report lists money you owe to suppliers, grouped by how long the bills have been outstanding or overdue. An accounts receivable aging report lists money customers owe you, grouped the same way. Together they show both sides of your short-term cash position: what is coming in and what must go out over the next weeks.",
      },
      {
        q: "How often should I run an accounts payable aging report?",
        a: "Most small businesses review it weekly or every two weeks, ideally before each payment run. At a minimum, run it monthly when you close the books. Businesses with tight cash flow or many suppliers benefit from a weekly review, because it helps them plan which bills to pay, catch duplicates and avoid late fees.",
      },
      {
        q: "Should aging be based on invoice date or due date?",
        a: "Both are used. Aging by invoice date shows how long ago you received the bill. Aging by due date shows how overdue you are, which is usually more useful for payment planning because suppliers have different terms. Many accounting systems let you choose. Pick one method and use it consistently so reports are comparable over time.",
      },
      {
        q: "What does a large 90+ day balance on an AP aging report mean?",
        a: "It can mean genuine cash problems, a disputed invoice you are holding, a bill entered twice, a missing credit note or an invoice that was paid but not recorded. Investigate each old item: contact the supplier, check bank records and match against purchase orders and receipts. Clean up errors so the report reflects what you really owe.",
      },
      {
        q: "Can an AP aging report affect my business credit?",
        a: "The report itself is internal, but what it shows can matter. Some suppliers report payment history to business credit bureaus such as Dun and Bradstreet, Experian and Equifax. Consistently paying late can lower business credit scores and lead suppliers to cut credit limits or demand payment upfront. Using the aging report to pay on time protects those relationships.",
      },
      {
        q: "Does a small business need an AP aging report?",
        a: "If you buy on credit from more than a handful of suppliers, yes. It takes minutes to produce in accounting software and prevents late fees, missed early payment discounts and supplier disputes. A sole proprietor who pays every bill immediately may not need one, but anyone using net 30 or net 60 terms benefits from seeing what is coming due.",
      },
      {
        q: "How do I create an AP aging report in Excel or Google Sheets?",
        a: "List each unpaid bill with supplier, invoice number, invoice date, due date and amount. Add a column calculating days past due as today's date minus the due date. Then use formulas to place each amount in a bucket: current, 1 to 30, 31 to 60, 61 to 90 and over 90 days. A pivot table can total the buckets by supplier.",
      },
      {
        q: "What is a good AP aging profile?",
        a: "A healthy profile has most of the balance in the current bucket, a small amount just past due and little or nothing over 60 days, unless it is a known dispute. The exact mix depends on supplier terms. A growing share in older buckets month after month signals cash pressure or process problems and deserves attention before suppliers react.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An accounts payable aging report lists every unpaid supplier bill grouped by age, usually current, 1 to 30, 31 to 60, 61 to 90 and over 90 days past due. It shows what you owe, to whom and how late, so you can plan payments, avoid late fees and spot errors like duplicate bills.</p>

<p>The AP aging report is one of the simplest and most useful reports in small business bookkeeping. This guide explains what each part means, how to read it, how to build one in a spreadsheet, and how to use it to make better payment decisions.</p>

<h2>What is an accounts payable aging report?</h2>
<p>Accounts payable (AP) is money your business owes to suppliers for goods or services received but not yet paid for. An AP aging report (also called an AP aging schedule or aged payables report) sorts those unpaid bills into time buckets based on how many days have passed since the due date or invoice date. It is the mirror image of the <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>, which shows what customers owe you. Our guide to <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a> explains the difference in detail.</p>

<h2>What are the aging buckets?</h2>
<table><thead><tr><th>Bucket</th><th>Meaning</th><th>Usual action</th></tr></thead><tbody>
<tr><td>Current</td><td>Not yet due</td><td>Schedule payment by the due date; take early payment discounts if worthwhile</td></tr>
<tr><td>1 to 30 days past due</td><td>Recently overdue</td><td>Pay in the next payment run</td></tr>
<tr><td>31 to 60 days</td><td>Moderately overdue</td><td>Prioritize; contact the supplier if you need more time</td></tr>
<tr><td>61 to 90 days</td><td>Seriously overdue</td><td>Agree a payment plan; risk of credit hold</td></tr>
<tr><td>Over 90 days</td><td>Very late, or disputed or in error</td><td>Investigate, resolve disputes, correct errors</td></tr>
</tbody></table>
<p>Some businesses use 15-day buckets or add a "due in the next 7 days" column for weekly planning.</p>

<h2>Accounts payable aging report example</h2>
<p>Here is an AP aging report for a small print shop as of October 31, aged by due date.</p>
<table><thead><tr><th>Supplier</th><th>Current</th><th>1-30</th><th>31-60</th><th>61-90</th><th>90+</th><th>Total</th></tr></thead><tbody>
<tr><td>Paper Supply Co.</td><td>$3,200</td><td>$1,450</td><td>$0</td><td>$0</td><td>$0</td><td>$4,650</td></tr>
<tr><td>Ink Wholesale LLC</td><td>$1,100</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$1,100</td></tr>
<tr><td>Equipment Lease Inc.</td><td>$850</td><td>$850</td><td>$0</td><td>$0</td><td>$0</td><td>$1,700</td></tr>
<tr><td>Delivery Partners</td><td>$0</td><td>$0</td><td>$620</td><td>$0</td><td>$0</td><td>$620</td></tr>
<tr><td>Signage Studio</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$1,800</td><td>$1,800</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$5,150</strong></td><td><strong>$2,300</strong></td><td><strong>$620</strong></td><td><strong>$0</strong></td><td><strong>$1,800</strong></td><td><strong>$9,870</strong></td></tr>
<tr><td>% of total</td><td>52%</td><td>23%</td><td>6%</td><td>0%</td><td>18%</td><td>100%</td></tr>
</tbody></table>

<h2>How to read an AP aging report</h2>
<p>Using the example above:</p>
<ol>
<li><strong>Check the total.</strong> $9,870 should match the accounts payable balance on the balance sheet and in the <a href="/blog/general-ledger">general ledger</a>. If it does not, something is posted incorrectly.</li>
<li><strong>Look at the distribution.</strong> 52% current is reasonable, but 23% is already past due. That suggests payments are slipping.</li>
<li><strong>Investigate the oldest items.</strong> The $1,800 Signage Studio bill is over 90 days. The owner finds the sign was installed with the wrong colors and the bill is on hold pending a credit note. It should be flagged as disputed.</li>
<li><strong>Check for duplicates.</strong> Equipment Lease has $850 in two buckets. That is two monthly payments, but confirm the earlier one was not paid and simply not recorded. See <a href="/blog/duplicate-invoice-payments">how to prevent duplicate invoice payments</a>.</li>
<li><strong>Compare with cash.</strong> If the bank has $6,000 and AR due this week is $4,000, the owner can clear the 1-30 and 31-60 buckets now and schedule current bills by due date.</li>
</ol>

<h2>How to create an AP aging report: step by step</h2>
<ol>
<li><strong>Record every bill.</strong> Enter each supplier invoice with invoice number, date, due date and amount as soon as it arrives. Our <a href="/blog/accounts-payable-process">accounts payable process guide</a> covers approval and matching steps.</li>
<li><strong>Record payments and credits.</strong> Apply each payment and credit note to the correct bill.</li>
<li><strong>Choose the aging basis.</strong> Due date for payment planning, invoice date for supplier analysis.</li>
<li><strong>Run the report.</strong> In QuickBooks, Xero, Zoho Books, Wave and similar software, look for "A/P Aging Summary" or "Aged Payables."</li>
<li><strong>In a spreadsheet:</strong> add a column for days past due (today minus due date), then use IF formulas to place each amount in a bucket and a pivot table to total by supplier.</li>
<li><strong>Reconcile to the ledger.</strong> The report total should equal the AP balance.</li>
<li><strong>Review and act.</strong> Decide what to pay, what to query and what to correct.</li>
</ol>

<h2>How to use the AP aging report to manage cash</h2>
<ul>
<li><strong>Plan payment runs.</strong> Pay by due date, not by arrival date, to hold cash longer without paying late.</li>
<li><strong>Capture early payment discounts.</strong> Terms like <a href="/blog/2-10-net-30">2/10 net 30</a> are worth about 37% annualized; paying early often beats keeping the cash.</li>
<li><strong>Prioritize critical suppliers.</strong> Pay those who could stop supply or charge penalties first.</li>
<li><strong>Negotiate early.</strong> If you cannot pay, contact the supplier before the bill hits 60 days and agree a plan.</li>
<li><strong>Match with receivables.</strong> Compare AP due dates with expected customer payments. If customers are slow, tighten your own <a href="/blog/invoice-payment-terms">invoice payment terms</a> and invoice promptly with a <a href="/invoice-generator">free invoice generator</a>.</li>
<li><strong>Track trends.</strong> Use the <a href="/blog/accounts-payable-turnover-ratio">accounts payable turnover ratio</a> and other <a href="/blog/accounts-payable-kpis">AP KPIs</a> to see whether you are paying faster or slower over time.</li>
</ul>

<h2>AP aging summary vs AP aging detail</h2>
<p>Most accounting software offers two versions of the report.</p>
<table><thead><tr><th>Report</th><th>Shows</th><th>Use it for</th></tr></thead><tbody>
<tr><td>AP aging summary</td><td>One line per supplier with totals in each bucket</td><td>Quick overview, month-end review, sharing with a lender</td></tr>
<tr><td>AP aging detail</td><td>Every open bill with number, date, due date and balance</td><td>Payment runs, investigating old items, finding duplicates</td></tr>
</tbody></table>
<p>Here is the detail behind the Paper Supply Co. line in the example above:</p>
<table><thead><tr><th>Bill no.</th><th>Invoice date</th><th>Terms</th><th>Due date</th><th>Days past due</th><th>Open balance</th></tr></thead><tbody>
<tr><td>PS-4471</td><td>Sep 15</td><td>Net 30</td><td>Oct 15</td><td>16</td><td>$1,450</td></tr>
<tr><td>PS-4532</td><td>Oct 10</td><td>Net 30</td><td>Nov 9</td><td>Current</td><td>$1,700</td></tr>
<tr><td>PS-4560</td><td>Oct 24</td><td>Net 30</td><td>Nov 23</td><td>Current</td><td>$1,500</td></tr>
<tr><td colspan="5"><strong>Total Paper Supply Co.</strong></td><td><strong>$4,650</strong></td></tr>
</tbody></table>
<p>The detail view shows only one bill is late, and by 16 days. The owner pays PS-4471 this week and schedules the other two for their due dates.</p>

<h2>Is paying early worth it? Early payment discount math</h2>
<p>Suppose Ink Wholesale offers 2/10 net 30 on a $1,100 bill. Paying within 10 days saves $22. You give up 20 days of cash use to save 2%, which works out to about 2/98 times 365/20, or roughly 37% a year. Unless your cash is needed for something urgent, or you would have to borrow at a higher rate to pay early, taking the discount usually makes sense. The aging report helps you spot bills with discount terms in the current bucket before the window closes.</p>

<h2>What is a good accounts payable aging profile?</h2>
<p>There is no universal target, but these signals help you judge your report:</p>
<table><thead><tr><th>Signal</th><th>Healthy</th><th>Warning</th></tr></thead><tbody>
<tr><td>Share of balance current</td><td>Most of the balance</td><td>Less than half</td></tr>
<tr><td>Balance over 60 days</td><td>Little or none, only known disputes</td><td>Growing month after month</td></tr>
<tr><td>Number of suppliers past due</td><td>One or two, briefly</td><td>Many, including critical suppliers</td></tr>
<tr><td>Supplier reaction</td><td>Normal credit terms</td><td>Credit holds, demands for cash on delivery</td></tr>
<tr><td>Report vs ledger</td><td>Matches every month</td><td>Unexplained differences</td></tr>
</tbody></table>
<p>A worsening profile is often a symptom of slow customer payments rather than overspending. If your own customers pay late, your payables age too. Compare the AP aging report with your AR aging report side by side, and track <a href="/blog/days-sales-outstanding">days sales outstanding</a> alongside days payable outstanding. The difference between how fast you collect and how fast you pay drives your <a href="/blog/cash-conversion-cycle">cash conversion cycle</a>.</p>

<h2>How to talk to a supplier when you are behind</h2>
<p>If the report shows bills you cannot pay on time, contact the supplier before they chase you. Explain the situation briefly, propose a specific schedule (for example, three weekly payments), and confirm it in writing. Most suppliers prefer a reliable plan to silence. Then keep to it; a broken promise damages the relationship far more than the original delay.</p>

<h2>AP aging report checklist for month end</h2>
<ol>
<li>Enter all supplier bills received this month, including those still in email.</li>
<li>Match bills to purchase orders and delivery notes (the <a href="/blog/three-way-match">three-way match</a>).</li>
<li>Apply all payments and credit notes to the correct bills.</li>
<li>Run the AP aging summary and compare the total with the AP balance in the ledger and on the <a href="/blog/balance-sheet-small-business">balance sheet</a>.</li>
<li>Review every item over 60 days and note the reason (dispute, cash timing, error).</li>
<li>Check for duplicate supplier names and duplicate invoice numbers.</li>
<li>Plan next month's payment runs based on due dates and expected receipts.</li>
</ol>

<h2>Internal controls that keep the report accurate</h2>
<ul>
<li><strong>Separate duties:</strong> the person who enters bills should not be the only one approving payments.</li>
<li><strong>Use an approval workflow:</strong> see our guide to <a href="/blog/invoice-approval-workflow">invoice approval workflows</a>.</li>
<li><strong>Require invoice numbers:</strong> reject bills without a unique number; it is the simplest duplicate check.</li>
<li><strong>Verify bank detail changes:</strong> call the supplier on a known number before changing payment details, as fake "new bank account" emails are a common fraud.</li>
</ul>

<h2>Common AP aging report mistakes</h2>
<ul>
<li><strong>Bills not entered.</strong> Invoices sitting in an inbox do not appear, so the report understates what you owe.</li>
<li><strong>Payments not applied.</strong> A payment recorded on account but not matched to a bill leaves the bill showing as overdue.</li>
<li><strong>Ignoring disputed items.</strong> Old disputed bills distort the picture. Note them and resolve them.</li>
<li><strong>Mixing up dates.</strong> Entering the receipt date instead of the invoice date shifts bills into the wrong buckets.</li>
<li><strong>Never reconciling.</strong> If the report does not match the ledger, decisions are made on wrong numbers.</li>
<li><strong>Paying everything early.</strong> Paying a net 30 bill on day 2 without a discount reduces your cash buffer for no benefit.</li>
</ul>

<p>Finally, avoid deleting or voiding old bills just to make the report look cleaner. If a bill is genuinely not owed, record a credit note or adjustment with a reason, so there is an audit trail your accountant and any lender can follow.</p>

<h2>AP aging and your working capital</h2>
<p>Accounts payable is part of <a href="/blog/working-capital">working capital</a>, and the aging report shows how much short-term pressure you face. Paired with your AR aging report and a <a href="/blog/cash-flow-forecast">cash flow forecast</a>, it tells you whether you can meet obligations over the next month. Supplier bills that you receive should look professional too; if you sell to other businesses, make sure your own invoices include clear due dates and terms, which you can set in our <a href="/invoice-templates">invoice templates</a>.</p>

<p>Review your accounts payable aging report weekly or before every payment run, investigate anything over 60 days and reconcile it to the ledger each month. And when you bill your own customers, our invoice generator is free, requires no sign-up and creates a downloadable PDF in your browser, so your receivables move as smoothly as your payables.</p>
`,
  },
];
