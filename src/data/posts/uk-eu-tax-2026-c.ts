import type { PostDraft } from "../blog";

export const UK_EU_TAX_2026_C_POSTS: PostDraft[] = [
  {
    slug: "vat-flat-rate-scheme",
    title: "VAT Flat Rate Scheme: Rates, 16.5% Rule and Invoicing",
    description:
      "How the VAT Flat Rate Scheme works: who can join, flat rate VAT percentages by trade, the 16.5% limited cost trader test, invoicing rules and a worked example.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["vat-registration-threshold-uk", "how-to-file-vat-return-uk", "vat-invoice-guide"],
    faqs: [
      {
        q: "Who can join the VAT Flat Rate Scheme?",
        a: "You can apply if you are VAT registered and expect your VAT taxable turnover in the next 12 months to be £150,000 or less, excluding VAT. You cannot join if you left the scheme in the last 12 months, committed a VAT offence or were charged a VAT evasion penalty in the last 12 months, or are closely associated with another business. Some businesses, such as those using a margin or capital goods scheme, are also excluded. You apply to HMRC, and joining is not automatic.",
      },
      {
        q: "What is the flat rate for a limited cost trader?",
        a: "A limited cost trader pays a flat rate of 16.5% of VAT-inclusive turnover, whatever its business sector. You are a limited cost trader if your spending on relevant goods is less than 2% of your VAT-inclusive turnover, or more than 2% but under £1,000 a year. Because 16.5% of a gross figure that includes 20% VAT is close to the full VAT charged, most limited cost traders gain little or nothing from the scheme and may be better off on standard VAT accounting.",
      },
      {
        q: "Do I charge my customers the flat rate on invoices?",
        a: "No. Your invoices show the normal VAT rate for what you sell, usually 20%, and the customer pays that VAT as usual. The flat rate is only used to work out how much you pay HMRC. A VAT-registered customer reclaims the 20% shown on your invoice in the normal way. Never print your flat rate percentage as the VAT rate, because that would make the invoice wrong and confuse your customer's VAT records.",
      },
      {
        q: "When must I leave the Flat Rate Scheme?",
        a: "You must leave if your total income, including VAT and including exempt or non-VAT income, was more than £230,000 in the last 12 months, or you expect it to go over £230,000 in the next 30 days. HMRC guidance also requires you to leave if you are no longer eligible for another reason, for example because you become associated with another business. You can also choose to leave at any time by writing to HMRC, but you cannot rejoin for 12 months.",
      },
      {
        q: "Can I reclaim VAT on purchases under the Flat Rate Scheme?",
        a: "Generally no. The flat rate is designed to account for the VAT you would normally reclaim on costs, so you cannot claim input VAT on everyday purchases. The main exception is a single purchase of capital assets costing £2,000 or more including VAT, such as computer equipment or machinery, where you can usually reclaim the VAT on your return. If you later sell that asset, you must account for VAT on the sale. Check VAT Notice 733 for the detailed rules.",
      },
      {
        q: "Does the 1% first-year discount apply automatically?",
        a: "Newly VAT-registered businesses can deduct 1% from their flat rate until the day before the first anniversary of their VAT registration. It is not applied for you, so you need to use the reduced percentage when calculating your returns. The discount is tied to your registration date, not the date you joined the scheme, so if you joined the scheme a year or more after registering for VAT, you will not get it.",
      },
      {
        q: "Is the Flat Rate Scheme worth it for consultants and freelancers?",
        a: "It depends on your costs. Service businesses with low spending on goods often fall into the limited cost trader category and pay 16.5%, which usually removes most of the benefit. Freelancers who buy enough relevant goods to avoid that test, or who have very few VAT-bearing costs, can still come out ahead with rates such as 12% or 14.5%. Run your last year's figures through both methods before applying, and ask an accountant if the numbers are close.",
      },
      {
        q: "Can I use cash accounting and the Flat Rate Scheme together?",
        a: "Not as separate schemes. You cannot be on the VAT Cash Accounting Scheme and the Flat Rate Scheme at the same time, but the Flat Rate Scheme has its own cash-based turnover method. That lets you apply your flat rate to the money you actually received in the period rather than to invoices issued. You can combine the Flat Rate Scheme with the Annual Accounting Scheme if you want to file one VAT return a year.",
      },
      {
        q: "Is the extra money I keep on the Flat Rate Scheme taxable?",
        a: "Yes. The difference between the VAT you charge customers and the flat rate amount you pay HMRC is treated as part of your business income for Income Tax or Corporation Tax. Many people keep their accounts with turnover shown net of the flat rate VAT actually paid, which brings this gain into profit automatically. Your accountant or bookkeeping software will usually handle this, but it is worth knowing that the saving is not completely tax free.",
      },
    ],
    content: `
<p>The <strong>VAT Flat Rate Scheme</strong> lets small UK VAT-registered businesses with VAT taxable turnover of £150,000 or less pay HMRC a fixed percentage of their VAT-inclusive turnover instead of working out output tax minus input tax. You still charge customers the normal VAT rate, usually 20%, but you keep the difference between what you charge and what you pay.</p>

<p>The trade-off is that you generally cannot reclaim VAT on purchases. This guide explains who can join, the flat rate VAT percentages for common trades, the 16.5% limited cost trader rule, how to invoice correctly while on the scheme, and a worked example showing when it saves money and when it does not. Figures are taken from HMRC guidance at the time of writing (October 2026).</p>

<p><strong>Important:</strong> this is general information, not tax advice. Whether the scheme suits you depends on your costs and customers, so check with a qualified accountant or tax adviser before applying.</p>

<h2>How the VAT Flat Rate Scheme works</h2>

<p>Under standard VAT accounting, each return shows the VAT you charged on sales (output tax) minus the VAT you paid on business purchases (input tax). That means tracking VAT on every receipt. The Flat Rate Scheme replaces this with one sum: your VAT-inclusive turnover for the period multiplied by the flat rate for your business type.</p>

<p>Three points catch people out:</p>

<ul>
<li><strong>The rate applies to gross turnover.</strong> You multiply the flat rate by turnover including the VAT you charged, not by the net figure.</li>
<li><strong>Customers see no difference.</strong> Your invoices still show 20% (or the relevant rate), and VAT-registered customers reclaim it as normal.</li>
<li><strong>Input VAT is mostly lost.</strong> You cannot reclaim VAT on purchases, except on capital assets costing £2,000 or more including VAT in a single purchase.</li>
</ul>

<p>The scheme was designed to cut paperwork for small businesses. For some trades it also saves money, because the flat rate is set below the average net VAT a business in that sector would pay. For others, especially service businesses with few costs, the saving has largely disappeared since the limited cost trader rule arrived in April 2017.</p>

<h2>Who can join the VAT Flat Rate Scheme and when you must leave</h2>

<p>You can apply to HMRC to join the VAT Flat Rate Scheme if you are VAT registered and expect your VAT taxable turnover (excluding VAT) in the next 12 months to be £150,000 or less. If you are not yet registered, you can apply at the same time as registering. Our guide to the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a> explains when registration becomes compulsory.</p>

<p>You cannot join if, among other things, you:</p>

<ul>
<li>left the scheme in the previous 12 months</li>
<li>committed a VAT offence, or were charged a penalty for VAT evasion, in the previous 12 months</li>
<li>are closely associated with another business, for example a business run by a connected person that shares resources</li>
<li>use a margin scheme or the capital goods scheme</li>
<li>joined a VAT group or registered for VAT as a division</li>
</ul>

<p>Once in, you must leave if your total income, including VAT and any exempt or non-VAT income, was more than £230,000 in the last 12 months, or you expect it to exceed £230,000 in the next 30 days. You can also leave voluntarily by writing to HMRC, but you then have to wait 12 months before rejoining. When you leave, you return to normal VAT accounting from the start of the next period, and you may need to make adjustments for stock and assets.</p>

<h2>Flat rate VAT percentages by business type</h2>

<p>HMRC publishes a list of flat rate VAT percentages for around 55 business categories. You choose the one that best describes your main business activity, based on where most of your turnover comes from. Here are the rates for some common trades, from the GOV.UK table at the time of writing:</p>

<table>
<thead>
<tr><th>Business type</th><th>Flat rate</th></tr>
</thead>
<tbody>
<tr><td>Accountancy or book-keeping</td><td>14.5%</td></tr>
<tr><td>Computer and IT consultancy or data processing</td><td>14.5%</td></tr>
<tr><td>Lawyer or legal services</td><td>14.5%</td></tr>
<tr><td>Management consultancy</td><td>14%</td></tr>
<tr><td>Architect, civil and structural engineer or surveyor</td><td>14.5%</td></tr>
<tr><td>Labour-only building or construction services</td><td>14.5%</td></tr>
<tr><td>General building or construction services</td><td>9.5%</td></tr>
<tr><td>Hairdressing or other beauty treatment services</td><td>13%</td></tr>
<tr><td>Film, radio, television or video production</td><td>13%</td></tr>
<tr><td>Entertainment or journalism</td><td>12.5%</td></tr>
<tr><td>Catering services, including restaurants and takeaways</td><td>12.5%</td></tr>
<tr><td>Business services not listed elsewhere</td><td>12%</td></tr>
<tr><td>Any other activity not listed elsewhere</td><td>12%</td></tr>
<tr><td>Advertising</td><td>11%</td></tr>
<tr><td>Photography</td><td>11%</td></tr>
<tr><td>Publishing</td><td>11%</td></tr>
<tr><td>Transport or storage, including couriers and taxis</td><td>10%</td></tr>
<tr><td>Retailing not listed elsewhere</td><td>7.5%</td></tr>
<tr><td>Retailing food, confectionery, tobacco, newspapers or children's clothing</td><td>4%</td></tr>
<tr><td>Limited cost trader (any sector)</td><td>16.5%</td></tr>
</tbody>
</table>

<p>Rates do change. Several hospitality rates were cut temporarily between 2020 and 2022, so always check the current GOV.UK table before you calculate a return. Labour-only building means building work where materials are less than 10% of turnover; above that, the general building rate applies.</p>

<h3>The 1% first-year discount</h3>

<p>If you are in your first year of VAT registration, you can reduce your flat rate by 1% until the day before the first anniversary of becoming VAT registered. A photographer on 11% would use 10% for that period. The discount is linked to your registration date, so joining the scheme later in your VAT life does not give you a fresh year.</p>

<h2>The limited cost trader 16.5% rule</h2>

<p>Since April 2017, any business that spends very little on goods pays a flat rate of 16.5%, regardless of its sector. You are a limited cost trader for a VAT period if your spending on relevant goods, including VAT, is either:</p>

<ul>
<li>less than 2% of your VAT-inclusive turnover in the period, or</li>
<li>more than 2% of turnover but less than £1,000 a year (£250 for a quarterly period)</li>
</ul>

<p>You test this every VAT period, so you can move in and out of the limited cost trader rate as your spending changes.</p>

<h3>What counts as relevant goods</h3>

<p>Relevant goods are goods used exclusively for your business. Services never count. HMRC also excludes:</p>

<ul>
<li>capital expenditure, such as laptops, cameras and machinery</li>
<li>food and drink for you or your staff</li>
<li>vehicles, vehicle parts and fuel, unless you run a transport business using your own or a leased vehicle</li>
<li>goods for resale, leasing, letting or hiring out, unless that is your main business</li>
<li>goods you give away or use for promotions</li>
</ul>

<p>Things that usually do count include stationery, printer ink, cleaning materials and stock or raw materials for a trade that uses them. Software you download, phone contracts, rent, accountancy fees and subcontractors are services, so they do not count. This is why most freelance consultants, developers and designers end up classed as limited cost traders.</p>

<p>Do not buy goods you do not need just to pass the test. HMRC is aware of this tactic, and spending £1,000 to save a few hundred pounds of VAT makes no commercial sense anyway.</p>

<h2>Worked example: is the scheme worth it?</h2>

<p>Priya is an IT consultant. Her annual sales are £60,000 before VAT. She charges 20% VAT, so her VAT-inclusive turnover is £72,000 and she collects £12,000 of VAT from clients. Her business costs carry £800 of VAT she could reclaim under standard accounting.</p>

<table>
<thead>
<tr><th>Method</th><th>Calculation</th><th>VAT paid to HMRC</th><th>VAT kept</th></tr>
</thead>
<tbody>
<tr><td>Standard VAT accounting</td><td>£12,000 output minus £800 input</td><td>£11,200</td><td>£0 (but reclaims £800)</td></tr>
<tr><td>Flat rate, IT consultancy 14.5%</td><td>£72,000 x 14.5%</td><td>£10,440</td><td>£1,560</td></tr>
<tr><td>Flat rate, first year 13.5%</td><td>£72,000 x 13.5%</td><td>£9,720</td><td>£2,280</td></tr>
<tr><td>Limited cost trader 16.5%</td><td>£72,000 x 16.5%</td><td>£11,880</td><td>£120</td></tr>
</tbody>
</table>

<p>If Priya buys enough relevant goods to use the 14.5% rate, she pays £760 less than under standard accounting (£11,200 minus £10,440). But her spending is mainly on software and services, so she is almost certainly a limited cost trader. At 16.5% she pays £11,880, which is £680 more than standard accounting. For her, the scheme only makes sense if she values the simpler records more than £680 a year.</p>

<p>Now take Tom, a general builder with the same £72,000 VAT-inclusive turnover who buys plenty of materials. At 9.5% he pays £6,840. If his materials carry, say, £3,000 of input VAT, standard accounting would cost £9,000 (£12,000 minus £3,000), so the scheme saves him £2,160. If his input VAT were £6,000, standard accounting would cost £6,000 and the scheme would cost him £840 more. The answer depends on your real cost base, so test both methods with last year's figures.</p>

<h2>How to invoice on the Flat Rate Scheme</h2>

<p>Being on the scheme does not change how your invoices look. You must still issue a valid VAT invoice to VAT-registered customers, and it must show the normal VAT rate for the goods or services supplied. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the full list, but in short a full VAT invoice includes:</p>

<ol>
<li>a unique, sequential invoice number (our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you keep a clean sequence)</li>
<li>your business name, address and VAT registration number</li>
<li>the invoice date and the time of supply (tax point) if different</li>
<li>the customer's name and address</li>
<li>a description of what you supplied, with quantity and unit price</li>
<li>the VAT rate charged, normally 20%, and the net amount for each rate</li>
<li>the total amount excluding VAT, the total VAT and the total payable</li>
</ol>

<p>The common mistake is printing your flat rate, such as 14.5%, as the VAT rate. That is wrong. The customer must be charged and shown the real VAT rate so they can reclaim it. Nothing on the invoice needs to mention that you use the Flat Rate Scheme.</p>

<p>For example, Priya bills a client £2,500 for a month of consultancy. Her invoice shows net £2,500, VAT at 20% of £500 and a total of £3,000. On her VAT return, that £3,000 is added to her flat-rate turnover. If you work as a sole trader, our <a href="/blog/sole-trader-invoice-uk">sole trader invoice guide for the UK</a> shows how to lay out your details.</p>

<p>Our free <a href="/invoice-generator/uk">UK invoice generator</a> lets you add your VAT number, set the 20% rate, and download a PDF. It applies one tax rate per invoice, so if a single sale mixes standard-rated and zero-rated items, issue separate invoices or check how your accounting software handles mixed rates.</p>

<h2>Filling in your VAT return on the scheme</h2>

<p>The VAT return boxes work slightly differently when you use flat rate VAT:</p>

<ul>
<li><strong>Box 1:</strong> your VAT-inclusive turnover multiplied by your flat rate, plus any VAT due on acquisitions or reverse charge supplies</li>
<li><strong>Box 4:</strong> normally zero, except for VAT reclaimed on capital assets of £2,000 or more</li>
<li><strong>Box 6:</strong> your flat-rate turnover, including VAT</li>
<li><strong>Box 7:</strong> purchases excluding VAT, as normal</li>
</ul>

<p>Returns must be filed through Making Tax Digital-compatible software. The step-by-step process is in our guide on <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return in the UK</a>. You can choose to calculate turnover on a cash basis (money received in the period) or on the basic method (invoices issued), and the scheme can be combined with the Annual Accounting Scheme.</p>

<h2>Pros and cons of the VAT Flat Rate Scheme</h2>

<table>
<thead>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
</thead>
<tbody>
<tr><td>One calculation per return, less record keeping of input VAT</td><td>No input VAT reclaim on most purchases</td></tr>
<tr><td>Can save money in sectors with low flat rates</td><td>Limited cost traders at 16.5% usually lose money</td></tr>
<tr><td>1% discount in the first year of VAT registration</td><td>The gain is taxable business income</td></tr>
<tr><td>Cash-based turnover option helps cash flow</td><td>Zero-rated and exempt sales still count in turnover at the flat rate</td></tr>
</tbody>
</table>

<p>That last point matters for anyone with large zero-rated or exempt sales, such as exports. Those sales are still included in flat-rate turnover, so you pay a percentage on income that carries no VAT. In that situation the scheme can be costly.</p>

<h2>Common mistakes to avoid</h2>

<ul>
<li>Applying the flat rate to net sales instead of VAT-inclusive turnover.</li>
<li>Forgetting to test the limited cost trader rule every period.</li>
<li>Claiming the 1% discount after the first anniversary of VAT registration.</li>
<li>Choosing a sector with a lower rate that does not match your main activity.</li>
<li>Showing the flat rate on invoices instead of the standard VAT rate.</li>
<li>Staying in the scheme after income passes £230,000.</li>
</ul>

<p>If you are deciding between business structures as well as VAT schemes, our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> covers the wider tax picture, and the <a href="/blog/vat-cash-accounting-scheme">VAT cash accounting scheme</a> is the other main option for smaller businesses.</p>

<h2>Conclusion</h2>

<p>The VAT Flat Rate Scheme still suits businesses that buy plenty of goods or work in sectors with low rates, and it simplifies record keeping for everyone. But for many service-based freelancers, the 16.5% limited cost trader rate wipes out the benefit. Run the numbers for both methods using real figures, and take advice if the result is close. Whatever scheme you use, your invoices should always show the real VAT rate. Create a compliant VAT invoice in a couple of minutes with our free <a href="/invoice-generator">invoice generator</a>.</p>
`,
  },
  {
    slug: "vat-cash-accounting-scheme",
    title: "VAT Cash Accounting Scheme: How It Works and Who Can Use It",
    description:
      "The VAT cash accounting scheme explained: pay VAT only when customers pay you, the £1.35m entry and £1.6m exit thresholds, exclusions and a worked example.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["vat-flat-rate-scheme", "how-to-file-vat-return-uk", "cash-vs-accrual-accounting"],
    faqs: [
      {
        q: "What is the VAT cash accounting scheme?",
        a: "It is an HMRC scheme that lets you account for VAT on the date money changes hands instead of the invoice date. You pay VAT on sales only when your customer pays you, and you reclaim VAT on purchases only when you have paid your supplier. It helps cash flow for businesses whose customers pay late, and it gives automatic relief if a customer never pays, because you never owed VAT on that sale in the first place.",
      },
      {
        q: "What is the threshold for VAT cash accounting?",
        a: "You can join if your estimated VAT taxable turnover for the next 12 months is £1.35 million or less, excluding VAT. Once in, you can stay until your VAT taxable turnover goes over £1.6 million, at which point you must leave. The gap between the two figures stops businesses near the limit from having to jump in and out of the scheme each year. Check GOV.UK for the current figures before relying on them.",
      },
      {
        q: "Do I need to tell HMRC I am using cash accounting?",
        a: "No application is needed. If you are eligible, you simply start using cash accounting at the beginning of a VAT accounting period and keep records that show when payments were received and made. You also do not need to tell HMRC when you leave, but you must then account for any outstanding VAT on unpaid invoices. Your bookkeeping software needs to be set to the cash basis so your returns are calculated correctly.",
      },
      {
        q: "Who cannot use VAT cash accounting?",
        a: "You cannot use it if you are on the VAT Flat Rate Scheme, which has its own cash-based method, if you are behind on VAT returns or payments, or if you were convicted of a VAT offence or charged a penalty for VAT evasion in the last 12 months. Certain transactions are also excluded, including invoices with payment terms of six months or more, invoices issued in advance of supply, hire purchase and lease purchase deals, and some imports and warehouse movements.",
      },
      {
        q: "Is cash accounting better than standard VAT accounting?",
        a: "It is better for cash flow if your customers pay slowly and you pay your suppliers promptly, because you hand over VAT only after you receive it. It is usually worse if you pay suppliers long before customers pay you, or if you make mostly zero-rated sales and normally get VAT refunds, because your reclaims are delayed until you pay. Compare a typical quarter under both methods before switching.",
      },
      {
        q: "What happens when I leave the cash accounting scheme?",
        a: "You must account for VAT on all invoices that are still unpaid, both sales and purchases, because they were never included in a return. If you leave voluntarily or because turnover passes £1.6 million, HMRC allows you to account for this outstanding VAT over six months. If your turnover exceeded £1.35 million in the last three months, or HMRC has withdrawn your use of the scheme, you must pay it straight away.",
      },
      {
        q: "Can I use cash accounting with the Annual Accounting Scheme?",
        a: "Yes. Cash accounting can be combined with the Annual Accounting Scheme, which lets you file one VAT return a year and pay through interim instalments. Many small businesses use both together to simplify paperwork and smooth payments. The combination you cannot use is cash accounting with the Flat Rate Scheme, although the Flat Rate Scheme has its own option to calculate turnover based on money received.",
      },
      {
        q: "Do invoices look different under cash accounting?",
        a: "No. You still issue full VAT invoices showing your VAT number, the VAT rate and the VAT amount, and your customers reclaim VAT according to their own accounting method. Your invoice date and tax point stay the same; only the timing of when you include the VAT on your own return changes. It is good practice to record the payment date and method against each invoice so your cash-basis returns are easy to check.",
      },
      {
        q: "Does cash accounting give bad debt relief?",
        a: "In effect, yes, and automatically. Because you only pay VAT when a customer pays, an invoice that is never paid never reaches your VAT return. Under standard accounting you would have paid the VAT to HMRC already and would need to wait six months from the payment due date before claiming bad debt relief. This built-in protection is one of the main reasons businesses with unreliable customers choose cash accounting.",
      },
    ],
    content: `
<p>The <strong>VAT cash accounting scheme</strong> lets UK businesses with VAT taxable turnover of £1.35 million or less pay VAT on sales when their customers actually pay, and reclaim VAT on purchases when they pay their suppliers. Under standard VAT accounting, VAT is due based on invoice dates, even if the invoice is still unpaid.</p>

<p>For a small business waiting 60 or 90 days for payment, that difference can decide whether a VAT bill is paid from cash in the bank or from an overdraft. This guide explains how cash accounting compares with standard VAT accounting, the £1.35m and £1.6m thresholds, which transactions are excluded, how joining and leaving work, and a worked example with real numbers.</p>

<p><strong>Note:</strong> this is general guidance based on HMRC's GOV.UK pages at the time of writing (October 2026), not tax advice. Check the current rules and speak to a qualified accountant before changing how you account for VAT.</p>

<h2>How the VAT cash accounting scheme works</h2>

<p>Every VAT return reports output tax (VAT on your sales) and input tax (VAT on your purchases). The question is when each sale or purchase counts.</p>

<ul>
<li><strong>Standard (invoice) accounting:</strong> you include VAT on a sale in the return for the period in which the tax point falls, usually the invoice date. You reclaim VAT on a purchase when you receive the supplier's invoice.</li>
<li><strong>Cash accounting:</strong> you include VAT on a sale only in the period you receive payment, and reclaim VAT on a purchase only in the period you pay for it.</li>
</ul>

<p>Nothing changes for your customers. You still issue full VAT invoices with your VAT number and the 20% (or other) rate. Cash accounting only changes the timing of when you report that VAT to HMRC. The total VAT over the life of your business is the same; it is a cash flow tool, not a tax saving.</p>

<h2>Cash accounting vs standard VAT accounting</h2>

<table>
<thead>
<tr><th>Feature</th><th>Standard VAT accounting</th><th>Cash accounting</th></tr>
</thead>
<tbody>
<tr><td>When output VAT is due</td><td>Tax point, usually invoice date</td><td>When the customer pays</td></tr>
<tr><td>When input VAT is reclaimed</td><td>When you hold the supplier invoice</td><td>When you pay the supplier</td></tr>
<tr><td>Unpaid customer invoices</td><td>VAT paid anyway; bad debt relief after 6 months</td><td>No VAT due until paid</td></tr>
<tr><td>Best for</td><td>Businesses paid upfront, or that buy on long credit</td><td>Businesses that wait for payment and pay suppliers quickly</td></tr>
<tr><td>Turnover limit</td><td>None</td><td>£1.35m to join, £1.6m to stay</td></tr>
<tr><td>Need to apply?</td><td>Default method</td><td>No, start at the beginning of a VAT period</td></tr>
</tbody>
</table>

<p>The same idea exists in general bookkeeping. If you want the wider picture, read our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>. Note that using cash basis for Income Tax and using cash accounting for VAT are separate choices with separate rules.</p>

<h2>Who can use cash accounting: the £1.35m threshold</h2>

<p>You can use the VAT cash accounting scheme if your estimated VAT taxable turnover for the next 12 months is £1.35 million or less, excluding VAT. VAT taxable turnover means the total of everything you sell that is not exempt from VAT, including zero-rated sales.</p>

<p>You cannot use it if:</p>

<ul>
<li>you use the VAT Flat Rate Scheme (it has its own cash-based turnover method instead)</li>
<li>you are not up to date with your VAT returns or payments</li>
<li>you were convicted of a VAT offence, or charged a penalty for VAT evasion, in the last 12 months</li>
</ul>

<p>If you have only just registered for VAT, you can start using cash accounting from your first return. Our guide to the <a href="/blog/vat-registration-threshold-uk">VAT registration threshold</a> covers when registration becomes compulsory.</p>

<h3>Transactions you must account for normally</h3>

<p>Even inside the scheme, some transactions must be accounted for using standard rules:</p>

<ul>
<li>sales or purchases where the payment terms on the VAT invoice are six months or longer</li>
<li>sales where you issue a VAT invoice in advance of supplying the goods or services</li>
<li>goods bought or sold under lease purchase, hire purchase, conditional sale or credit sale</li>
<li>imports of goods into Northern Ireland from the EU</li>
<li>goods moved out of a customs warehouse</li>
</ul>

<p>The advance invoice rule matters for anyone who bills deposits or retainers. If you send a VAT invoice before you do the work, that invoice falls outside cash accounting. Some businesses send a request for payment or proforma instead, then issue the VAT invoice when paid. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains the options.</p>

<h2>Worked example: one quarter under both methods</h2>

<p>Sam runs a small design studio. In the July to September quarter:</p>

<ul>
<li>Sam invoices clients £30,000 plus £6,000 VAT, but by 30 September clients have paid only £18,000 plus £3,600 VAT. The rest is on 60-day terms.</li>
<li>Sam receives supplier invoices for £5,000 plus £1,000 VAT and has paid £3,000 plus £600 VAT of them by the quarter end.</li>
</ul>

<table>
<thead>
<tr><th>Line</th><th>Standard accounting</th><th>Cash accounting</th></tr>
</thead>
<tbody>
<tr><td>Output VAT (Box 1)</td><td>£6,000</td><td>£3,600</td></tr>
<tr><td>Input VAT (Box 4)</td><td>£1,000</td><td>£600</td></tr>
<tr><td>VAT payable</td><td>£5,000</td><td>£3,000</td></tr>
</tbody>
</table>

<p>Under the VAT cash accounting scheme, Sam pays £2,000 less this quarter. That £2,000 is not saved; it is paid in the next quarter, once the remaining clients pay. But Sam never has to fund VAT on money not yet received.</p>

<p>Now suppose one client, owing £2,400 including £400 VAT, goes out of business and never pays. Under standard accounting, Sam has already paid that £400 to HMRC and must wait at least six months from the due date to claim bad debt relief. Under cash accounting, the £400 is simply never due.</p>

<h3>When cash accounting costs you</h3>

<p>Reverse the situation. A retailer that buys stock on 30-day terms but sells to consumers who pay at the till gains nothing on output VAT, because sales are paid immediately anyway, and loses on input VAT, because the reclaim is delayed until the supplier is paid. A business that mostly makes zero-rated sales and normally receives VAT repayments is also usually better off on standard accounting, because repayments come sooner.</p>

<h2>Joining and leaving the scheme</h2>

<p>Joining is simple. You do not apply to HMRC. If you are eligible, you start at the beginning of a VAT accounting period and keep records that show payment dates. Set your accounting software to the cash basis for VAT, because Making Tax Digital returns are calculated from those records. Our guide on <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return in the UK</a> covers the filing process.</p>

<p>You can leave at any time, ideally at the end of a VAT period, and you must leave if you are no longer eligible, for example because VAT taxable turnover passes £1.6 million. When you leave:</p>

<ol>
<li>List every sales invoice that has not been paid and every purchase invoice you have not paid.</li>
<li>Work out the VAT on those invoices, since it has never been included in a return.</li>
<li>Account for it in your returns. HMRC allows you to spread this over six months in most cases.</li>
<li>Pay it immediately instead if turnover went over £1.35 million in the last three months or HMRC has withdrawn your use of the scheme.</li>
<li>Switch your software to standard VAT accounting for all new transactions.</li>
</ol>

<h2>Record keeping and invoicing tips</h2>

<p>Cash accounting depends on accurate payment records. HMRC expects you to be able to match each payment to the invoice it relates to. Practical habits that make this easy:</p>

<ul>
<li>Number invoices in an unbroken sequence; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps if you are starting fresh.</li>
<li>Ask customers to quote the invoice number when they pay, and put your bank details and the reference on every invoice.</li>
<li>Record part payments against the right invoice. If a customer pays half, you account for half the VAT.</li>
<li>Keep bank statements, paying-in slips and card settlement reports alongside your invoices.</li>
<li>Track overdue invoices so you know how much VAT will become due when they are paid. An <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> gives you that view.</li>
</ul>

<p>A partially paid invoice under cash accounting works pro rata. If you invoice £1,200 including £200 VAT and receive £600, you include £100 of output VAT in the period the £600 arrived. Our <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> explains how to show amounts paid and the balance due.</p>

<h2>Cash accounting vs other HMRC VAT schemes</h2>

<table>
<thead>
<tr><th>Scheme</th><th>What it does</th><th>Entry limit</th><th>Combine with cash accounting?</th></tr>
</thead>
<tbody>
<tr><td>Cash accounting</td><td>VAT on payments, not invoices</td><td>£1.35m</td><td>Not applicable</td></tr>
<tr><td>Annual accounting</td><td>One return a year with interim payments</td><td>£1.35m</td><td>Yes</td></tr>
<tr><td>Flat Rate Scheme</td><td>Fixed percentage of VAT-inclusive turnover</td><td>£150,000</td><td>No (has its own cash-based option)</td></tr>
</tbody>
</table>

<p>Smaller businesses often compare cash accounting with the <a href="/blog/vat-flat-rate-scheme">VAT Flat Rate Scheme</a>. Flat rate simplifies calculations but blocks most input VAT reclaims; cash accounting keeps normal VAT calculations but changes their timing. You can only pick one of them.</p>

<h2>Common mistakes with cash accounting</h2>

<p>Most problems HMRC finds with cash accounting come from records, not from the scheme itself. Watch out for these:</p>

<ol>
<li><strong>Using the wrong date.</strong> The relevant date for a sale is when you receive the money. For a cheque, that is the date you receive it, not the date it clears; for card payments, it is the date of the transaction, not the date the card provider settles with you.</li>
<li><strong>Ignoring payments in kind or set-offs.</strong> If a customer pays partly by offsetting a debt you owe them, the offset counts as payment and VAT is due on it.</li>
<li><strong>Treating deposits loosely.</strong> A deposit received counts as a payment, so the VAT on it is due in the period you receive it, even if the work finishes later.</li>
<li><strong>Applying the scheme to excluded deals.</strong> Hire purchase sales, invoices with terms of six months or more and invoices raised in advance must still be accounted for under standard rules.</li>
<li><strong>Staying in too long.</strong> Growing businesses sometimes miss the point where turnover passes £1.6 million. Review your rolling 12-month turnover each quarter.</li>
<li><strong>Forgetting unpaid invoices on exit.</strong> When you leave, VAT on every outstanding invoice becomes due, which can create a larger-than-expected bill.</li>
</ol>

<p>If you sell through marketplaces or payment processors that deduct fees before paying you, record the gross sale amount and the fee separately. VAT is due on the full price the customer paid, not on the net payout that reaches your bank. The processor's fee is a separate purchase, and you reclaim any VAT on it when it is paid, which in practice is when it is deducted.</p>

<h2>Is the VAT cash accounting scheme right for you?</h2>

<p>It usually suits you if most of these are true:</p>

<ul>
<li>You sell mainly to other businesses on credit terms such as 30 or 60 days.</li>
<li>Late payment is common in your industry.</li>
<li>You pay most suppliers quickly or upfront.</li>
<li>You make mostly standard-rated sales, so you normally pay VAT rather than reclaim it.</li>
</ul>

<p>It usually does not suit you if your customers pay at the point of sale, you buy on long credit terms, or you mainly make zero-rated sales and get regular refunds. If you are unsure, model the last four quarters under both methods. If the difference is small, standard accounting has one advantage: it matches the invoice-based accounts most accountants already prepare.</p>

<h2>Conclusion</h2>

<p>The VAT cash accounting scheme is one of the easiest HMRC schemes to adopt: no application, a generous £1.35 million entry threshold, and automatic protection when customers fail to pay. It does not reduce the VAT you owe, but it means you only hand over VAT once it is in your account. Whatever method you use, your invoices still need to be full, accurate VAT invoices. Create one with your VAT number, 20% rate and payment details using our free <a href="/invoice-generator/uk">UK invoice generator</a>.</p>
`,
  },
  {
    slug: "trading-allowance",
    title: "Trading Allowance UK: £1,000 Side Income Rules (2026)",
    description:
      "How the UK £1,000 trading allowance works for side income in 2026: when to tell HMRC, allowance vs expenses, platform reporting and the planned £3,000 limit.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "self-assessment-tax-return-uk",
      "how-to-invoice-without-a-business",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "What is the £1,000 trading allowance?",
        a: "It is a UK tax exemption that lets individuals earn up to £1,000 a year in gross trading income without paying tax on it or telling HMRC. It covers self-employment, casual work such as babysitting or gardening, and hiring out personal equipment. The £1,000 is a single limit for all your trading income combined, not £1,000 per activity, and it is measured before expenses. It has applied since 6 April 2017.",
      },
      {
        q: "Do I need to tell HMRC about side income under £1,000?",
        a: "Usually not. If your total gross trading income in a tax year is £1,000 or less and none of it comes from an excluded source, such as your employer or a partnership, you do not need to register for Self Assessment or report it. You might still choose to register, for example to record a loss or to pay voluntary National Insurance. Keep basic records anyway so you can show HMRC your income stayed within the limit if asked.",
      },
      {
        q: "What happens if my side income goes over £1,000?",
        a: "You must register for Self Assessment by 5 October after the end of the tax year in which you went over, then file a return and pay any tax by 31 January. On the return you choose between deducting the £1,000 allowance from your gross income or deducting your actual allowable expenses. You cannot use both. Pick whichever gives the lower profit; the allowance usually wins when your real expenses are under £1,000.",
      },
      {
        q: "Is the trading allowance increasing to £3,000?",
        a: "Not as a tax-free allowance. In March 2025 the government announced that the Self Assessment reporting threshold for trading income would rise to £3,000 gross during this Parliament, with a new digital service for people earning between £1,000 and £3,000. HMRC's side hustle guidance says that tool is due by 2029. The tax-free allowance remains £1,000, and until the new service launches, income over £1,000 must still be reported through Self Assessment.",
      },
      {
        q: "Do online platforms report my sales to HMRC?",
        a: "Yes, if you pass certain limits. Since 1 January 2024, UK digital platforms must collect seller details and report income to HMRC each January for the previous calendar year. Goods sellers are reported once they make 30 or more sales or receive more than €2,000, about £1,700, in a year. Service providers and people renting out property are reported whatever they earn. Being reported does not create a tax bill; it only gives HMRC data to check against returns.",
      },
      {
        q: "Do I pay tax on selling my own unwanted items online?",
        a: "Generally no Income Tax is due when you sell personal possessions you no longer need, because that is not trading. Tax only applies if you buy things to resell for profit, make items to sell, or show other signs of trading. Capital Gains Tax can apply to single items sold for more than £6,000, but most household sales are well below that. A platform may still report your sales to HMRC, so keep notes showing they were personal items.",
      },
      {
        q: "Can I use the trading allowance if I am employed?",
        a: "Yes. Employees can use the allowance for side income from a separate trade, such as freelance design or selling crafts. You cannot use it for income from your own employer or your spouse's or civil partner's employer, for example if your employer pays you separately for extra work outside the payroll. Your employer does not report side income to HMRC for you, so it is your responsibility to check whether you have passed the £1,000 limit.",
      },
      {
        q: "Can I use the trading allowance with a partnership or limited company?",
        a: "No. The allowance applies to individuals' trading income only. It does not apply to your share of partnership profits, or to income from a partnership or company that you or a connected person own or control. A limited company is a separate taxpayer that pays Corporation Tax on its profits, so it cannot claim the allowance either. If you work through your own company, the £1,000 exemption is not available for that income.",
      },
      {
        q: "Is there a separate allowance for property income?",
        a: "Yes. The £1,000 property allowance is separate from the trading allowance and covers income such as renting out a driveway or occasional room lettings outside Rent a Room relief. You can use both in the same tax year, so someone with £800 of craft sales and £700 of driveway rental would not need to report either. The property allowance cannot be used alongside Rent a Room relief on the same income.",
      },
    ],
    content: `
<p>The UK <strong>trading allowance</strong> is a £1,000 tax-free exemption for individuals' gross trading income each tax year. If your side income from selling goods, freelancing or casual services is £1,000 or less before expenses, you normally pay no tax on it and do not need to tell HMRC. Above £1,000, you must register for Self Assessment, but you can still deduct the £1,000 instead of your actual expenses.</p>

<p>This guide covers who can use it, how to choose between the allowance and real expenses, how HMRC reporting rules for digital platforms work, and what the announced £3,000 reporting threshold actually means. It reflects HMRC guidance at the time of writing (October 2026). It is general information, not tax advice; check your own position with HMRC or a qualified accountant.</p>

<h2>How the trading allowance works</h2>

<p>The allowance was introduced on 6 April 2017 to take people with small amounts of side income out of the tax system. The rules are short, but each word matters:</p>

<ul>
<li><strong>It is gross, not profit.</strong> The £1,000 is measured on income before expenses. If you sell £1,400 of goods that cost you £800 to make, your gross income is £1,400, which is over the limit.</li>
<li><strong>It is one limit for everything.</strong> Income from all your trading activities is added together. Dog walking plus online craft sales plus freelance editing share the same £1,000.</li>
<li><strong>It is per tax year.</strong> The UK tax year runs from 6 April to 5 April.</li>
<li><strong>It is per person.</strong> A couple running separate side businesses each have their own £1,000.</li>
</ul>

<p>HMRC's own example: someone earning £800 from content creation and £500 from online craft sales has £1,300 of side income, so they need to tell HMRC.</p>

<h2>Who can and cannot use it</h2>

<p>You can use the allowance for income from self-employment, casual services such as babysitting, gardening or odd jobs, and hiring out personal equipment such as power tools. It applies whether you are employed, retired, a student or otherwise self-employed.</p>

<p>You cannot use it for:</p>

<ul>
<li>your share of profits from a partnership</li>
<li>income from a partnership where you or a connected person are partners</li>
<li>income from a company that you or a connected person own or control</li>
<li>income from your employer, or your spouse's or civil partner's employer</li>
</ul>

<p>Limited companies cannot claim it at all, because a company pays Corporation Tax on its own profits; see our guide to <a href="/blog/corporation-tax-uk">UK corporation tax rates</a>. If you are weighing up whether to formalise a side business, our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> explains the trade-offs.</p>

<h2>Side income tax UK: under or over £1,000</h2>

<table>
<thead>
<tr><th>Gross trading income in the tax year</th><th>What you need to do</th></tr>
</thead>
<tbody>
<tr><td>£1,000 or less</td><td>Nothing in most cases. No tax, no Self Assessment registration. Keep basic records.</td></tr>
<tr><td>Over £1,000</td><td>Register for Self Assessment by 5 October after the tax year ends, file a return by 31 January (online) and pay any tax due.</td></tr>
<tr><td>Over £1,000 with low expenses</td><td>Deduct the £1,000 allowance instead of expenses on your return.</td></tr>
<tr><td>Over £1,000 with expenses above £1,000</td><td>Deduct actual allowable expenses instead of the allowance.</td></tr>
</tbody>
</table>

<p>Going over £1,000 does not automatically mean you owe tax. If your total income, including your salary, is below your personal allowance (£12,570 for most people at the time of writing), the profit may be covered. But you must still report it. Our <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return guide</a> walks through registration and filing.</p>

<h2>Allowance or expenses: a worked example</h2>

<p>Once your gross income is over £1,000, you choose on your tax return between two methods. You cannot use both for the same income.</p>

<p><strong>Example 1: low costs.</strong> Jamie tutors maths in the evenings and earns £2,800 in 2025/26. His real costs are about £400 for books and travel.</p>

<ul>
<li>Using expenses: £2,800 minus £400 = £1,400 taxable profit</li>
<li>Using the allowance: £2,800 minus £1,000 = £1,800 taxable profit</li>
</ul>

<p>Expenses give the lower profit here, so Jamie deducts expenses. If Jamie is a basic rate taxpayer through his salary, his tax is 20% of £1,400 = £280, plus any Class 4 National Insurance if his total self-employed profits are above the lower profits limit.</p>

<p><strong>Example 2: almost no costs.</strong> Aisha does freelance proofreading for £2,800 with only £150 of costs.</p>

<ul>
<li>Using expenses: £2,800 minus £150 = £2,650</li>
<li>Using the allowance: £2,800 minus £1,000 = £1,800</li>
</ul>

<p>The allowance saves Aisha £850 of taxable profit, worth £170 at the basic rate. The rule of thumb is simple: if your genuine allowable expenses are under £1,000, use the allowance; if they are over £1,000, deduct them. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> helps you check what counts as an allowable expense.</p>

<p><strong>Example 3: a loss.</strong> If expenses exceed income, deducting expenses creates a loss that may be usable against other income. The allowance can never create a loss, so in this case expenses are the better choice and you may want to register even if income is below £1,000.</p>

<h2>HMRC reporting rules for digital platforms</h2>

<p>Since 1 January 2024, the UK has applied the OECD's model reporting rules for digital platforms. Online marketplaces and gig apps that let you sell goods, provide services or rent out property must collect your details and send HMRC a report of what you earned. Reports are due by 31 January for the previous calendar year, so income from January to December 2025 was reported by 31 January 2026.</p>

<table>
<thead>
<tr><th>Activity</th><th>Is the seller reported?</th></tr>
</thead>
<tbody>
<tr><td>Selling goods, fewer than 30 sales and €2,000 (about £1,700) or less</td><td>No, excluded as an occasional seller</td></tr>
<tr><td>Selling goods, 30 or more sales, or more than €2,000</td><td>Yes</td></tr>
<tr><td>Providing services (tutoring, driving, delivery, freelance work)</td><td>Yes, no minimum</td></tr>
<tr><td>Renting out property or transport</td><td>Yes, no minimum</td></tr>
</tbody>
</table>

<p>The platform must also give you a copy of what it reported. Two points cause confusion:</p>

<ol>
<li><strong>Reporting is not a new tax.</strong> HMRC has said plainly that there are no tax changes for online sellers. The data simply helps HMRC check whether people who should be filing returns are doing so.</li>
<li><strong>The platform thresholds are not the trading allowance.</strong> You can be reported and owe nothing, for example a person selling 40 second-hand books for £5 each. You can also be under the platform thresholds and still need to report, for example someone selling 20 handmade items for £75 each, which is £1,500 of trading income.</li>
</ol>

<p>Selling your own unwanted belongings is generally not trading, even if you sell a lot. Trading usually involves buying to resell, making goods to sell, or doing it regularly with a profit motive. If a platform reports you for personal sales, keep a note of what you sold and why. The OECD has consulted on changing its model thresholds, so check GOV.UK for the current UK figures.</p>

<h2>The planned £3,000 reporting threshold</h2>

<p>In March 2025 the government announced that the Self Assessment reporting threshold for trading income would rise from £1,000 to £3,000 gross during this Parliament. The plan also aligns the thresholds for property income and other taxable income at £3,000 each. People earning between £1,000 and £3,000 would report through a new, simpler digital service instead of a full tax return, or stay in Self Assessment if they prefer.</p>

<p>The key facts, as of October 2026:</p>

<ul>
<li>The tax-free trading allowance itself is still £1,000. The £3,000 figure is a reporting threshold, not a bigger exemption.</li>
<li>Income between £1,000 and £3,000 will remain taxable. Only the way you report it changes.</li>
<li>HMRC's side hustle guidance says the new reporting tool is due by 2029. Until it launches, income over £1,000 must be reported through Self Assessment.</li>
</ul>

<p>Social media claims that "you do not need to do anything until you earn £3,000" are wrong, and HMRC has said so directly. Check GOV.UK for the launch date of the new service.</p>

<h2>Records, invoices and Making Tax Digital</h2>

<p>Even under £1,000, keep a simple record of what you earned, when and from whom. It is the only way to prove you stayed under the limit. Once your side business grows, good records save time at filing:</p>

<ul>
<li>Issue a proper invoice for freelance or service work. You do not need a registered business to do this; our guide on <a href="/blog/how-to-invoice-without-a-business">how to invoice without a business</a> covers the basics.</li>
<li>Use a consistent numbering system and keep copies of every invoice.</li>
<li>Keep receipts for costs, even if you expect to use the allowance, so you can compare both methods.</li>
<li>Separate side income from personal money, ideally in a dedicated account.</li>
</ul>

<p>Making Tax Digital for Income Tax started in April 2026 for sole traders and landlords with qualifying income over £50,000, with the threshold due to drop to £30,000 from April 2027 and £20,000 from April 2028. Most side hustles are well below these levels, but our <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax guide</a> explains what to expect as you grow.</p>

<h2>How to claim the trading allowance on your tax return</h2>

<p>If your income is over £1,000 and you decide the allowance gives the better result, the claim itself is quick. The steps for most sole traders filing online are:</p>

<ol>
<li><strong>Register for Self Assessment</strong> by 5 October after the end of the tax year. You will receive a Unique Taxpayer Reference (UTR) by post, which can take a couple of weeks.</li>
<li><strong>Add up your gross trading income</strong> for the tax year from all activities: invoices paid, platform payouts before fees, and cash jobs.</li>
<li><strong>Complete the self-employment pages.</strong> Enter your turnover, then tick or enter the trading income allowance instead of listing expenses. You cannot claim both for the same income.</li>
<li><strong>Check the result.</strong> The calculation shows any Income Tax and Class 4 National Insurance due on the profit.</li>
<li><strong>File and pay by 31 January.</strong> If your Self Assessment bill is more than £1,000, payments on account towards the next year may also be due.</li>
</ol>

<p>Platform payouts often arrive net of commission. Your gross income is the full amount customers paid, so add the fees back. For example, if a freelance marketplace shows £3,000 billed and paid you £2,400 after a 20% fee, your turnover is £3,000 and the £600 fee is an expense. In that case actual expenses already beat the £1,000 allowance before you count anything else. Our guide to <a href="/blog/fiverr-upwork-invoice">invoicing on Fiverr and Upwork</a> explains how to keep track of gross and net figures.</p>

<h2>Common mistakes with side income</h2>

<ul>
<li>Applying the £1,000 to profit instead of gross income.</li>
<li>Claiming a separate £1,000 for each activity.</li>
<li>Assuming platform reporting thresholds are tax thresholds.</li>
<li>Claiming the allowance and expenses at the same time.</li>
<li>Missing the 5 October registration deadline in your first year over the limit, which can lead to penalties.</li>
<li>Believing the £3,000 threshold is already in force.</li>
</ul>

<h2>Conclusion</h2>

<p>The trading allowance makes small side incomes simple: stay at or under £1,000 gross across all your activities and there is nothing to report. Go over, and you register for Self Assessment but can still deduct £1,000 instead of expenses when that gives a better result. Platform reporting gives HMRC more visibility, and a £3,000 reporting threshold is on the way, but neither changes the tax rules today. If you invoice clients for side work, our free <a href="/invoice-generator/uk">UK invoice generator</a> creates a clean PDF invoice with your details in minutes, and our <a href="/invoice-templates/minimal">minimal invoice template</a> suits most freelancers.</p>
`,
  },
  {
    slug: "corporation-tax-uk",
    title: "Corporation Tax Rates UK 2026: 19%, 25% and Marginal Relief",
    description:
      "UK corporation tax rates for 2026/27: the 19% small profits rate, 25% main rate, marginal relief with worked examples, deadlines and associated companies.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "how-to-set-up-a-limited-company",
      "sole-trader-vs-limited-company",
      "uk-dividend-tax-rates-2026",
      "employer-national-insurance-2026",
    ],
    faqs: [
      {
        q: "What is the UK corporation tax rate for 2026?",
        a: "For the financial year starting 1 April 2026, the main rate is 25% for companies with taxable profits over £250,000, and the small profits rate is 19% for profits of £50,000 or less. Companies with profits between those limits pay the main rate reduced by marginal relief, giving an effective rate between 19% and 25%. These rates have applied since 1 April 2023, and the government has committed to capping the main rate at 25% for this Parliament.",
      },
      {
        q: "How is marginal relief calculated?",
        a: "Work out tax at the 25% main rate, then subtract marginal relief. The standard formula is (upper limit minus augmented profits) multiplied by (taxable profits divided by augmented profits) multiplied by the fraction 3/200. If the company has no exempt dividends from other companies, taxable and augmented profits are the same, so relief is simply £250,000 minus profits, multiplied by 3/200. For £100,000 of profit, relief is £2,250 and tax is £22,750.",
      },
      {
        q: "What is the marginal rate of corporation tax between £50,000 and £250,000?",
        a: "Each extra pound of profit between £50,000 and £250,000 is effectively taxed at 26.5%. That is because the 25% main rate applies and marginal relief shrinks by 1.5p for every extra pound. A company at £50,000 pays £9,500, and at £250,000 pays £62,500, so the extra £200,000 of profit costs £53,000 in tax, which is 26.5%. This matters when deciding on pension contributions, bonuses or the timing of expenses.",
      },
      {
        q: "When is corporation tax due?",
        a: "For most companies, corporation tax must be paid 9 months and 1 day after the end of the accounting period. The Company Tax Return (CT600) is due 12 months after the end of the accounting period. Large companies with profits over £1.5 million pay in quarterly instalments instead. You do not receive a bill from HMRC, so you must calculate what is owed and pay on time to avoid interest and penalties.",
      },
      {
        q: "How do associated companies affect corporation tax?",
        a: "The £50,000 and £250,000 limits are divided by the number of associated companies plus one. Companies are generally associated if one controls the other or both are under the control of the same person or group. With one associated company, the limits fall to £25,000 and £125,000. This stops business owners splitting profits across several companies to get more profit taxed at 19%. Dormant companies and some passive holding companies are ignored.",
      },
      {
        q: "Do small companies still pay 19% corporation tax?",
        a: "Yes, if their taxable profits are £50,000 or less, after adjusting for associated companies and short accounting periods. The small profits rate is 19%. Note that the test uses taxable profits, after deducting allowable expenses and capital allowances, not turnover. A company with £400,000 of sales and £45,000 of taxable profit pays 19%, while a company with £120,000 of sales and £60,000 of profit pays a little over 19% due to marginal relief.",
      },
      {
        q: "Does corporation tax apply to sole traders?",
        a: "No. Corporation tax is paid by limited companies and some other organisations such as clubs and co-operatives. Sole traders and partners pay Income Tax and National Insurance on their business profits through Self Assessment instead. If you run a limited company, you then pay personal tax on any salary or dividends you take out, so the total tax bill depends on how you extract profit as well as the corporation tax rate.",
      },
      {
        q: "What counts as taxable profit for corporation tax?",
        a: "Taxable profit is the company's trading profit plus investment income and chargeable gains, after deducting allowable business expenses and capital allowances. Some accounting expenses, such as client entertaining and depreciation, are not deductible and are added back. Capital allowances, including the Annual Investment Allowance of up to £1 million a year, give relief for equipment instead. Dividends received from other companies are usually exempt but can affect the marginal relief calculation.",
      },
      {
        q: "Are corporation tax rates going to change?",
        a: "The government's Corporate Tax Roadmap, published in October 2024, committed to keeping the main rate capped at 25% for this Parliament and keeping the small profits rate and marginal relief thresholds at their current levels. The Finance Act 2025 set the rates for the financial year starting 1 April 2026. Future Budgets can still change policy, so check GOV.UK for the latest rates before you prepare a tax computation.",
      },
    ],
    content: `
<p>UK <strong>corporation tax rates</strong> for the financial year starting 1 April 2026 are 19% for companies with taxable profits of £50,000 or less and 25% for profits over £250,000. Companies in between pay the 25% main rate reduced by marginal relief, which gives an effective rate between 19% and 25% and a marginal rate of 26.5% on profits in that band.</p>

<p>This guide explains how the small profits rate and marginal relief work, with worked examples, how associated companies and short accounting periods change the limits, and when you must pay and file. Figures come from GOV.UK and HMRC guidance at the time of writing (October 2026). This is general information, not tax advice, so check your own calculation with an accountant.</p>

<h2>Corporation tax rates for 2026/27 at a glance</h2>

<table>
<thead>
<tr><th>Taxable profits</th><th>Rate</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>£0 to £50,000</td><td>19% small profits rate</td><td>Lower limit</td></tr>
<tr><td>£50,001 to £250,000</td><td>25% less marginal relief</td><td>Effective rate between 19% and 25%</td></tr>
<tr><td>Over £250,000</td><td>25% main rate</td><td>Upper limit</td></tr>
<tr><td>Marginal relief fraction</td><td>3/200</td><td>Used in the relief formula</td></tr>
</tbody>
</table>

<p>Corporation tax works on financial years that run from 1 April to 31 March, so "financial year 2026" means 1 April 2026 to 31 March 2027. These corporation tax rates have been in place since 1 April 2023, when the main rate rose from a flat 19%. The Corporate Tax Roadmap published in October 2024 committed to capping the main rate at 25% for this Parliament, and the Finance Act 2025 set the rates for financial year 2026.</p>

<p>Because the rates have not changed since 2023, a company whose accounting period straddles 1 April 2026, such as a year ending 31 December 2026, uses the same rates throughout. If rates ever change, profits are split by the number of days falling in each financial year.</p>

<h2>Who pays corporation tax</h2>

<p>Corporation tax is paid by UK limited companies, foreign companies with a UK branch or office, and some unincorporated organisations such as clubs, societies and co-operatives. Sole traders and partnerships do not pay it; they pay Income Tax through Self Assessment on their profits. If you are deciding which structure to use, our guide to <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> compares the total tax picture.</p>

<p>A company must tell HMRC it is active for corporation tax within 3 months of starting to do business. It then has to work out its own liability; HMRC does not send a bill.</p>

<h2>How the small profits rate works</h2>

<p>The 19% small profits rate applies when taxable profits are £50,000 or less. Taxable profits are not the same as sales or bank balance. They are:</p>

<ul>
<li>trading profit from your accounts</li>
<li>plus any investment income, such as interest, and chargeable gains</li>
<li>minus allowable expenses and capital allowances</li>
<li>with disallowable items, such as depreciation and client entertaining, added back</li>
</ul>

<p>Example: a small consultancy has sales of £140,000, running costs of £85,000 including £3,000 of depreciation and £1,000 of client entertaining, and claims £4,000 of capital allowances on new laptops. Taxable profit is £140,000 minus £85,000 = £55,000, plus £4,000 added back = £59,000, minus £4,000 capital allowances = £55,000. That is just above the lower limit, so marginal relief applies rather than the flat 19%.</p>

<p>Good records make this calculation easy. A clean <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and a reliable way to <a href="/blog/how-to-track-business-expenses">track business expenses</a> are the starting points for every corporation tax computation.</p>

<h2>Marginal relief explained with worked examples</h2>

<p>Marginal relief smooths the jump from 19% to 25%. You calculate tax at 25% on all profits, then deduct relief using this formula:</p>

<p><strong>Marginal relief = (U minus A) x (N / A) x 3/200</strong></p>

<ul>
<li><strong>U</strong> is the upper limit, normally £250,000</li>
<li><strong>A</strong> is augmented profits: taxable profits plus exempt distributions (dividends) from companies that are not in the same group</li>
<li><strong>N</strong> is taxable total profits</li>
</ul>

<p>If your company receives no such dividends, N and A are equal, and the formula simplifies to (£250,000 minus profits) x 3/200.</p>

<h3>Example 1: £100,000 of profit</h3>

<ol>
<li>Tax at main rate: £100,000 x 25% = £25,000</li>
<li>Marginal relief: (£250,000 minus £100,000) x 3/200 = £150,000 x 0.015 = £2,250</li>
<li>Corporation tax due: £25,000 minus £2,250 = £22,750</li>
<li>Effective rate: £22,750 / £100,000 = 22.75%</li>
</ol>

<h3>Example 2: profit with dividends from another company</h3>

<p>A company has taxable profits of £100,000 and also receives £20,000 of exempt dividends from shares in an unrelated company. Augmented profits are £120,000.</p>

<ol>
<li>Tax at main rate on taxable profits: £100,000 x 25% = £25,000</li>
<li>Marginal relief: (£250,000 minus £120,000) x (£100,000 / £120,000) x 3/200 = £130,000 x 0.8333 x 0.015 = £1,625</li>
<li>Corporation tax due: £25,000 minus £1,625 = £23,375</li>
</ol>

<p>The dividends are not taxed themselves, but they reduce the relief, so the company pays £625 more than in Example 1.</p>

<h3>Effective rates across the band</h3>

<table>
<thead>
<tr><th>Taxable profits</th><th>Tax at 25%</th><th>Marginal relief</th><th>Tax due</th><th>Effective rate</th></tr>
</thead>
<tbody>
<tr><td>£50,000</td><td>n/a</td><td>n/a</td><td>£9,500</td><td>19%</td></tr>
<tr><td>£75,000</td><td>£18,750</td><td>£2,625</td><td>£16,125</td><td>21.5%</td></tr>
<tr><td>£100,000</td><td>£25,000</td><td>£2,250</td><td>£22,750</td><td>22.75%</td></tr>
<tr><td>£150,000</td><td>£37,500</td><td>£1,500</td><td>£36,000</td><td>24%</td></tr>
<tr><td>£200,000</td><td>£50,000</td><td>£750</td><td>£49,250</td><td>24.63%</td></tr>
<tr><td>£250,000</td><td>£62,500</td><td>£0</td><td>£62,500</td><td>25%</td></tr>
</tbody>
</table>

<h3>The hidden 26.5% marginal rate</h3>

<p>Compare the £50,000 and £250,000 rows. The extra £200,000 of profit costs £53,000 more tax (£62,500 minus £9,500), which is 26.5%. In other words, each extra pound of profit in the marginal relief band is taxed at 26.5%, higher than the main rate. That makes deductible spending, such as employer pension contributions or equipment purchases, slightly more valuable for companies in this band. HMRC's online marginal relief calculator will check your figures.</p>

<h2>How corporation tax rates have changed</h2>

<p>Many owners still quote "19%" as the UK rate because it applied to every company for six years. The history explains why older guides and software settings can mislead you:</p>

<table>
<thead>
<tr><th>Financial year starting</th><th>Small profits rate</th><th>Main rate</th></tr>
</thead>
<tbody>
<tr><td>1 April 2017 to 1 April 2022</td><td>19% (single rate for all profits)</td><td>19%</td></tr>
<tr><td>1 April 2023</td><td>19% up to £50,000</td><td>25% over £250,000</td></tr>
<tr><td>1 April 2024</td><td>19%</td><td>25%</td></tr>
<tr><td>1 April 2025</td><td>19%</td><td>25%</td></tr>
<tr><td>1 April 2026</td><td>19%</td><td>25%</td></tr>
</tbody>
</table>

<p>If you are reviewing an old computation or a spreadsheet built before April 2023, check that it applies the current corporation tax rates and marginal relief rather than a flat 19%. The difference is large: on £150,000 of profit, a flat 19% gives £28,500, while the correct figure is £36,000.</p>

<h2>Year-end planning example</h2>

<p>Take a company expecting £130,000 of taxable profit for the year to 31 March 2027. Using the formula, tax would be £32,500 minus marginal relief of £1,800 (£120,000 x 3/200), so £30,700.</p>

<p>Before the year end, the directors decide to make a £20,000 employer pension contribution, which is a deductible expense. Taxable profit falls to £110,000. Tax becomes £27,500 minus £2,100 (£140,000 x 3/200), so £25,400. The £20,000 contribution has cut the bill by £5,300, which is 26.5% of £20,000, exactly the marginal rate in the band.</p>

<p>The same logic applies to buying equipment that qualifies for the Annual Investment Allowance before the year end, as long as the purchase makes commercial sense. Never spend money purely for a tax deduction: spending £20,000 to save £5,300 still leaves the company £14,700 poorer unless the spending has value for the business. Discuss pension and investment timing with your accountant, since contribution limits and personal tax also matter.</p>

<h2>Associated companies and short accounting periods</h2>

<p>The £50,000 and £250,000 limits are shared, not given to each company. They are divided by the number of associated companies plus one. Companies are generally associated if one controls the other, or both are controlled by the same person or group of persons, at any time in the accounting period. Dormant companies and certain passive holding companies are ignored.</p>

<table>
<thead>
<tr><th>Associated companies</th><th>Lower limit</th><th>Upper limit</th></tr>
</thead>
<tbody>
<tr><td>None</td><td>£50,000</td><td>£250,000</td></tr>
<tr><td>1</td><td>£25,000</td><td>£125,000</td></tr>
<tr><td>2</td><td>£16,667</td><td>£83,333</td></tr>
<tr><td>3</td><td>£12,500</td><td>£62,500</td></tr>
</tbody>
</table>

<p>Example: a company with £100,000 of profit and one associated company uses an upper limit of £125,000. Marginal relief is (£125,000 minus £100,000) x 3/200 = £375, so tax is £25,000 minus £375 = £24,625, compared with £22,750 for a standalone company.</p>

<p>The limits are also reduced proportionately for accounting periods shorter than 12 months. A company's first accounting period of six months would have limits of roughly £25,000 and £125,000, calculated precisely by the number of days in the period.</p>

<h2>Deadlines: paying and filing</h2>

<table>
<thead>
<tr><th>Obligation</th><th>Deadline</th></tr>
</thead>
<tbody>
<tr><td>Tell HMRC the company is active</td><td>Within 3 months of starting to do business</td></tr>
<tr><td>Pay corporation tax (profits up to £1.5m)</td><td>9 months and 1 day after the end of the accounting period</td></tr>
<tr><td>Pay corporation tax (large companies, profits over £1.5m)</td><td>Quarterly instalment payments</td></tr>
<tr><td>File Company Tax Return (CT600)</td><td>12 months after the end of the accounting period</td></tr>
<tr><td>File accounts at Companies House</td><td>Usually 9 months after the year end (private companies)</td></tr>
</tbody>
</table>

<p>Notice that payment is due before the return. A company with a 31 March 2026 year end must pay by 1 January 2027 and file its return by 31 March 2027. Late payment attracts interest, and late filing starts with a £100 penalty. Directors should also keep on top of Companies House duties, including <a href="/blog/companies-house-identity-verification">Companies House identity verification</a>.</p>

<h2>Corporation tax and taking money out</h2>

<p>Corporation tax is only the first layer. When you take profit out of a company as a director-shareholder, you pay personal tax as well:</p>

<ul>
<li><strong>Dividends</strong> come from profits after corporation tax and are taxed at dividend rates; see our <a href="/blog/uk-dividend-tax-rates-2026">UK dividend tax rates 2026</a> guide.</li>
<li><strong>Salary</strong> is deductible for corporation tax but carries employer National Insurance; our <a href="/blog/employer-national-insurance-2026">employer National Insurance 2026</a> guide has the current figures.</li>
<li><strong>Employer pension contributions</strong> are usually deductible and free of National Insurance, which is why they are popular for companies in the 26.5% marginal band.</li>
</ul>

<p>Capital allowances also affect the bill. The Annual Investment Allowance gives a 100% deduction for up to £1 million of qualifying plant and machinery a year, and companies can claim full expensing on new main-rate plant. Further changes to capital allowances were announced at the November 2025 Budget, so check GOV.UK or your accountant for the current rules before making a big purchase.</p>

<h3>Practical checklist for small company owners</h3>

<ol>
<li>Confirm your accounting period dates and any associated companies.</li>
<li>Keep invoices, receipts and bank records organised throughout the year.</li>
<li>Estimate taxable profit a few months before the year end and decide on any pension contributions or equipment purchases.</li>
<li>Set aside money for corporation tax monthly, using your expected effective rate.</li>
<li>Pay 9 months and 1 day after the year end, then file the CT600 within 12 months.</li>
</ol>

<p>If you also have a small side trade in your own name, note that the <a href="/blog/trading-allowance">£1,000 trading allowance</a> is for individuals and cannot be used for income that flows through your company.</p>

<h2>Conclusion</h2>

<p>UK corporation tax rates for 2026/27 are straightforward at either end: 19% up to £50,000 and 25% above £250,000. The work is in the middle, where marginal relief, associated companies and dividends all change the result, and where every extra pound of profit costs 26.5%. Accurate sales records make the computation reliable, and that starts with consistent invoicing. Create professional company invoices with your registered company number and VAT details using our free <a href="/invoice-generator/uk">UK invoice generator</a>, or choose a polished layout from our <a href="/invoice-templates/corporate">corporate invoice template</a>.</p>
`,
  },
  {
    slug: "eu-vat-one-stop-shop",
    title: "VAT One Stop Shop (OSS): EU Rules, IOSS and €10,000 Limit",
    description:
      "How the EU VAT One Stop Shop works: Union, non-Union and IOSS schemes, the €10,000 distance selling threshold, filing deadlines, examples and ViDA changes.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "European Union",
    related: [
      "eu-vat-rates-2026",
      "vida-vat-in-the-digital-age",
      "ecommerce-invoice-shopify-woocommerce",
      "reverse-charge-invoice",
    ],
    faqs: [
      {
        q: "What is the EU VAT One Stop Shop?",
        a: "The One Stop Shop (OSS) is an EU system that lets businesses selling to consumers in other EU countries declare and pay the VAT due in all those countries through a single quarterly return in one member state. Without it, a seller would need a VAT registration in each country where its customers live. It launched on 1 July 2021, replacing the older Mini One Stop Shop (MOSS) that covered only telecoms, broadcasting and electronic services.",
      },
      {
        q: "What is the €10,000 OSS threshold?",
        a: "It is an EU-wide threshold for small sellers established in only one member state. If your combined cross-border sales of goods to consumers in other EU countries plus your telecoms, broadcasting and electronic services to them total €10,000 or less, excluding VAT, in both the current and previous calendar year, you can charge your home country's VAT. Once you exceed it, destination country VAT applies from the sale that takes you over, and OSS is the simplest way to pay it.",
      },
      {
        q: "What is the difference between OSS and IOSS?",
        a: "OSS covers sales of goods moved within the EU and services to EU consumers. IOSS, the Import One Stop Shop, covers distance sales of goods imported from outside the EU in consignments worth €150 or less. With IOSS, the seller charges VAT at checkout and the parcel clears customs without the customer paying import VAT on delivery. OSS returns are quarterly, while IOSS returns are monthly, and non-EU sellers usually need an EU intermediary for IOSS.",
      },
      {
        q: "When are OSS returns due?",
        a: "Union and non-Union OSS returns are quarterly and are due by the end of the month after the quarter: 30 April, 31 July, 31 October and 31 January. IOSS returns are monthly, due by the end of the following month. Deadlines do not move for weekends or public holidays, and you cannot file before the period ends. If you made no OSS sales in a period, you must still submit a nil return.",
      },
      {
        q: "Is OSS mandatory?",
        a: "No, it is optional, but the alternative is registering for VAT in every member state where you owe VAT on consumer sales. Once you choose OSS, you must declare all supplies covered by that scheme through it, not just some. Most small and mid-sized online sellers find it far simpler than multiple registrations. Domestic sales and business-to-business sales stay outside OSS and are reported in your normal national VAT return.",
      },
      {
        q: "Can UK businesses use the EU One Stop Shop?",
        a: "Yes, in some cases. A UK business selling services, such as digital downloads or online courses, to EU consumers can register for the non-Union scheme in one EU country, and no €10,000 threshold applies to non-EU sellers. Goods shipped from Great Britain to EU consumers are imports, so they fall under IOSS for consignments up to €150 or normal import rules above that. Northern Ireland businesses can use the Union scheme for goods. Take advice on your exact setup.",
      },
      {
        q: "How long must I keep OSS records?",
        a: "The EU rules require OSS and IOSS users to keep records of the transactions covered by the scheme for 10 years from the end of the year in which the transaction took place. Records must be detailed enough for the tax authority of the customer's country to check that the VAT declared is correct, including the country of consumption, the date, the amount, the VAT rate and evidence of the customer's location.",
      },
      {
        q: "What does ViDA change for OSS?",
        a: "The EU's VAT in the Digital Age package extends single VAT registration. From 1 January 2027, smaller changes apply to OSS and IOSS users, including a new correction mechanism. From 1 July 2028, the OSS schemes are extended to cover more supplies, a new scheme for transfers of own goods is introduced, and a mandatory reverse charge applies to more sales by non-established suppliers. The aim is that fewer businesses need VAT registrations in several countries.",
      },
      {
        q: "Do I need to issue invoices for OSS sales?",
        a: "When you use OSS, the invoicing rules of your member state of identification apply, and for many consumer sales an invoice is not strictly required. Many sellers still issue one or a detailed receipt because customers expect it. If you do, show the VAT rate and amount of the customer's country, not your home rate. Check the rules of the country where you are registered for OSS, because requirements vary.",
      },
    ],
    content: `
<p>The EU <strong>VAT One Stop Shop</strong> (OSS) lets businesses selling goods or services to consumers in other EU countries report and pay the VAT owed in each of those countries through one quarterly return filed in a single member state. Above the €10,000 EU distance selling threshold, you charge VAT at the customer's country rate, and OSS saves you from registering for VAT in every country you sell to.</p>

<p>This guide explains the three OSS schemes, including the Import One Stop Shop (IOSS), how the €10,000 threshold works, deadlines, a worked example and what the EU's VAT in the Digital Age (ViDA) package changes from 2027 and 2028. It is based on European Commission guidance at the time of writing (October 2026). It is general information, not tax advice; check with a qualified VAT adviser before you register.</p>

<h2>What the VAT One Stop Shop covers</h2>

<p>OSS replaced the Mini One Stop Shop (MOSS) on 1 July 2021. MOSS covered only telecoms, broadcasting and electronic services; OSS widened the system to most business-to-consumer (B2C) cross-border sales. There are three schemes:</p>

<table>
<thead>
<tr><th>Scheme</th><th>Who uses it</th><th>What it covers</th><th>Return frequency</th></tr>
</thead>
<tbody>
<tr><td>Union scheme</td><td>EU-established businesses, and non-EU businesses holding goods in the EU</td><td>Intra-EU distance sales of goods to consumers; B2C services supplied in member states where the supplier is not established; some platform-facilitated domestic sales</td><td>Quarterly</td></tr>
<tr><td>Non-Union scheme</td><td>Businesses not established in the EU</td><td>All B2C services supplied to consumers in the EU</td><td>Quarterly</td></tr>
<tr><td>Import scheme (IOSS)</td><td>Sellers and platforms importing goods to EU consumers</td><td>Distance sales of imported goods in consignments of €150 or less, excluding excise goods</td><td>Monthly</td></tr>
</tbody>
</table>

<p>OSS is for consumer sales. Sales to VAT-registered businesses in other EU countries normally use the reverse charge instead, which our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> explains. Your domestic sales also stay on your normal national VAT return.</p>

<h2>The €10,000 threshold for EU distance selling</h2>

<p>Since 1 July 2021, there is a single EU-wide threshold of €10,000 for small sellers. It replaced the old country-by-country distance selling thresholds, which were often €35,000 or €100,000.</p>

<p>The threshold applies only if you are established in one EU member state. You add up, excluding VAT:</p>

<ul>
<li>intra-Community distance sales of goods to consumers in other EU countries, and</li>
<li>telecoms, broadcasting and electronic services supplied to consumers in other EU countries.</li>
</ul>

<p>If the total was €10,000 or less in the previous calendar year and stays at or below €10,000 in the current year, you can charge your home country's VAT on those sales. Once the total goes over €10,000, the sale that crosses the line and every later one is taxed in the customer's country. You can also opt out of the threshold voluntarily and charge destination VAT from the first euro, but that choice binds you for at least two calendar years.</p>

<p>The threshold does not apply to businesses established outside the EU. A UK, US or Pakistani seller of digital services to EU consumers owes VAT in the customer's country from the first sale.</p>

<h3>Threshold example</h3>

<p>A small Dutch shop sold €8,500 of goods to consumers in other EU countries in 2025, charging Dutch VAT. In 2026 sales grow, and on 14 August a German order takes the year's cross-border total to €10,300. From that order onwards, the shop must charge German VAT to German customers, French VAT to French customers and so on. The earlier 2026 sales stay taxed in the Netherlands. Because the threshold was crossed in 2026, it cannot use the threshold again in 2027 either.</p>

<h2>How the VAT One Stop Shop works step by step</h2>

<ol>
<li><strong>Register in your member state of identification.</strong> For EU businesses, that is the country where you are established. You register online through that country's tax portal, and you can only register for each scheme in one member state.</li>
<li><strong>Charge the right rate.</strong> Apply the VAT rate of the customer's country to each sale, for example 19% in Germany, 20% in France, 21% in Spain or 22% in Italy for standard-rated goods. Reduced rates vary by country and product.</li>
<li><strong>Keep evidence of location.</strong> Record the delivery address for goods, or two pieces of non-contradictory evidence such as billing address and IP location for digital services.</li>
<li><strong>File one return per quarter.</strong> List sales and VAT for each member state of consumption, in euros.</li>
<li><strong>Pay in one go.</strong> Pay the total to your member state of identification, quoting the return reference. It passes each country's share on.</li>
<li><strong>Keep records for 10 years.</strong> The tax authority of any customer country can ask to see them.</li>
</ol>

<h3>OSS return deadlines</h3>

<table>
<thead>
<tr><th>Quarter</th><th>Return and payment due</th></tr>
</thead>
<tbody>
<tr><td>January to March</td><td>30 April</td></tr>
<tr><td>April to June</td><td>31 July</td></tr>
<tr><td>July to September</td><td>31 October</td></tr>
<tr><td>October to December</td><td>31 January</td></tr>
</tbody>
</table>

<p>Deadlines do not move for weekends or holidays, and you must file a nil return for a quarter with no OSS sales. Corrections to earlier returns are made in a later return, within three years of the original due date. There are no payment plans through OSS itself.</p>

<h2>Worked example: one OSS return</h2>

<p>Back to the Dutch shop. In the July to September 2026 quarter, its cross-border consumer sales after crossing the threshold were:</p>

<table>
<thead>
<tr><th>Customer country</th><th>Net sales</th><th>VAT rate</th><th>VAT due</th></tr>
</thead>
<tbody>
<tr><td>Germany</td><td>€4,000</td><td>19%</td><td>€760</td></tr>
<tr><td>France</td><td>€3,000</td><td>20%</td><td>€600</td></tr>
<tr><td>Italy</td><td>€2,000</td><td>22%</td><td>€440</td></tr>
<tr><td><strong>Total</strong></td><td><strong>€9,000</strong></td><td></td><td><strong>€1,800</strong></td></tr>
</tbody>
</table>

<p>The shop files one OSS return in the Netherlands by 31 October 2026 and pays €1,800 there. Without the VAT One Stop Shop, it would need VAT registrations and returns in Germany, France and Italy. Its input VAT on purchases is still reclaimed through its normal Dutch VAT return, not through OSS. Foreign VAT on costs incurred in other countries is reclaimed through the separate EU refund procedure.</p>

<h2>IOSS: selling imported goods to EU consumers</h2>

<p>The Import One Stop Shop covers goods shipped from outside the EU to EU consumers in consignments with an intrinsic value of €150 or less. Without IOSS, import VAT is collected when the parcel arrives, usually from the customer along with a handling fee from the carrier. With IOSS:</p>

<ul>
<li>the seller (or the marketplace) charges the destination country's VAT at checkout</li>
<li>the IOSS number is passed to customs, so the parcel clears without import VAT being charged again</li>
<li>the seller files one monthly IOSS return and pays the VAT collected</li>
</ul>

<p>Sellers established outside the EU must usually appoint an EU-established intermediary to use IOSS, unless they are established in a country with a qualifying mutual assistance agreement with the EU. Excise goods, such as alcohol and tobacco, are excluded. Where an online marketplace facilitates the sale, the marketplace is usually treated as the deemed supplier and handles the VAT.</p>

<p>Customs rules for low-value parcels are also changing. The EU introduced a temporary €3 customs duty on low-value e-commerce items from 1 July 2026, ahead of wider customs reform. Check the European Commission's customs pages for the current scope before pricing EU deliveries.</p>

<h2>ViDA: how the One Stop Shop is being extended</h2>

<p>The EU's VAT in the Digital Age package, adopted in 2025, includes a "single VAT registration" pillar that builds directly on OSS. According to the European Commission, the key dates are:</p>

<table>
<thead>
<tr><th>Date</th><th>Change</th></tr>
</thead>
<tbody>
<tr><td>1 January 2027</td><td>Clarifications for OSS and IOSS users, including a new OSS correction mechanism, more IOSS information before import and monthly IOSS listings per member state of consumption</td></tr>
<tr><td>1 July 2028</td><td>OSS schemes extended to more supplies; new scheme for transfers of own goods; mandatory reverse charge for more supplies by non-identified suppliers</td></tr>
<tr><td>1 July 2028</td><td>Platforms for short-term accommodation and road passenger transport become deemed suppliers where the provider does not charge VAT (member states may delay to 1 January 2030)</td></tr>
<tr><td>1 July 2030</td><td>Mandatory e-invoicing and digital reporting for intra-EU B2B transactions</td></tr>
</tbody>
</table>

<p>The transfer of own goods change matters for sellers who keep stock in fulfilment centres in other EU countries. Today, moving your own stock across a border usually triggers a VAT registration in the destination country. The Commission adopted the implementing regulation for the new scheme in July 2026, and the aim is that these movements can be reported centrally instead. Our full guide to <a href="/blog/vida-vat-in-the-digital-age">ViDA (VAT in the Digital Age)</a> covers the e-invoicing and reporting side, and our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027</a> list tracks national deadlines.</p>

<h2>OSS for UK and other non-EU sellers</h2>

<p>Since Brexit, a business in Great Britain is a non-EU business for VAT, which changes how OSS applies:</p>

<ul>
<li><strong>Services to EU consumers</strong>, such as online courses, software subscriptions or digital downloads, can be declared through the non-Union scheme. You register in one EU country of your choice and charge each customer's local VAT from the first sale, because the €10,000 threshold is not available to non-EU sellers.</li>
<li><strong>Goods shipped from Great Britain to EU consumers</strong> are imports into the EU. Consignments of €150 or less can go through IOSS, usually with an EU intermediary; above €150, import VAT and any duty are handled through customs.</li>
<li><strong>Stock held in an EU warehouse</strong> and sold to consumers in other EU countries can be reported through the Union scheme.</li>
<li><strong>Northern Ireland businesses</strong> selling goods to EU consumers can use the Union scheme, under the Windsor Framework arrangements.</li>
</ul>

<p>Sales of services to EU business customers are normally outside OSS and use the reverse charge, so the invoice carries no UK or EU VAT. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers that case. Cross-border setups vary a lot, so take advice from a VAT adviser who knows both UK and EU rules before you register.</p>

<h2>Invoices and records for OSS sales</h2>

<p>When you use OSS, the invoicing rules of your member state of identification apply. For many consumer distance sales an invoice is not strictly required, but most online shops issue one or a detailed receipt anyway. If you do, make sure it shows:</p>

<ul>
<li>the VAT rate and amount for the customer's country, not your home rate</li>
<li>your VAT number and business details</li>
<li>a clear description of the goods or service and the date of supply</li>
<li>the customer's country, which also supports your location evidence</li>
</ul>

<p>Your shop platform should store the evidence of customer location automatically. Our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">Shopify and WooCommerce invoices</a> explains how to set up destination-based tax rates, and our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> guide lists local rules. If you invoice in a currency other than euros, convert for the return using the European Central Bank rate for the last day of the period; see our <a href="/blog/foreign-currency-invoice">foreign currency invoice guide</a>.</p>

<p>For one-off invoices to EU consumers, our free <a href="/invoice-generator">invoice generator</a> lets you set the destination VAT rate, choose euros or another currency and download a PDF. It applies one tax rate per invoice and does not file OSS returns, so keep using your national tax portal for those.</p>

<h2>Common VAT One Stop Shop mistakes</h2>

<ul>
<li>Charging your home VAT rate after crossing the €10,000 threshold.</li>
<li>Putting business-to-business sales through OSS instead of using the reverse charge.</li>
<li>Declaring only some eligible sales through OSS; once registered, all sales covered by the scheme must go through it.</li>
<li>Missing nil returns for quiet quarters.</li>
<li>Trying to reclaim input VAT through the OSS return.</li>
<li>Using the threshold as a non-EU seller, which is not allowed.</li>
</ul>

<h2>Conclusion</h2>

<p>The VAT One Stop Shop turns what would be a VAT registration in every EU country into one quarterly return. Small EU sellers can stay on home-country VAT until cross-border consumer sales pass €10,000; after that, charge each customer's local rate and report it through OSS, or through IOSS for low-value imports. ViDA will widen the system further in 2027 and 2028. Whatever scheme you use, accurate invoices with the right destination rate make every return easier. Create one in minutes with our free <a href="/invoice-generator">invoice generator</a> and a clean <a href="/invoice-templates/modern">modern invoice template</a>.</p>
`,
  },
];
