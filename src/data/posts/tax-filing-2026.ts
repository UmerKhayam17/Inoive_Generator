import type { PostDraft } from "../blog";

export const TAX_FILING_2026_POSTS: PostDraft[] = [
  {
    slug: "sales-tax-nexus",
    title: "Sales Tax Nexus: Economic Nexus Thresholds by State",
    description:
      "Sales tax nexus explained: physical vs economic nexus, the $100,000 thresholds most states use, states that dropped the 200-transaction test, and next steps.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-get-a-business-license",
      "sales-tax-on-invoices-us",
      "ecommerce-invoice-shopify-woocommerce",
      "sales-tax-vs-vat-vs-gst",
    ],
    faqs: [
      {
        q: "What triggers sales tax nexus?",
        a: "Two things can. Physical presence, such as an office, employees, inventory in a warehouse or regular in-person work in the state, creates nexus in every state with a sales tax. Economic nexus is created when your sales into a state pass that state's threshold, most commonly $100,000 a year, even if you never set foot there. Some states also use a transaction count or a different dollar amount, so check each state where you sell.",
      },
      {
        q: "Is the 200-transaction threshold still used?",
        a: "In fewer states every year. South Dakota, the state at the center of the Wayfair case, dropped its 200-transaction test from July 1, 2023, and a number of others have followed, including Indiana, North Carolina, Utah and Illinois. Several states still apply a transaction count, sometimes alongside the dollar test with 'or' and sometimes with 'and'. Because legislatures keep changing this, confirm the current rule on each state's revenue department website.",
      },
      {
        q: "Do exempt or wholesale sales count toward economic nexus?",
        a: "It depends on the state. Some states measure gross sales into the state, which includes exempt and resale transactions. Others count only retail sales or only taxable sales. This difference matters for wholesalers and for sellers of groceries, clothing or other items that are exempt in some states. Read the definition of 'sales' in each state's remote seller guidance before you decide you are under a threshold.",
      },
      {
        q: "Do marketplace sales count toward my threshold?",
        a: "Every state with a sales tax now has a marketplace facilitator law, so platforms such as Amazon or Etsy generally collect and remit tax on the sales they facilitate. Whether those sales still count toward your own threshold varies. Some states exclude them, others include them. If all of your sales go through a facilitator you may have no separate filing duty, but if you also sell through your own website, the rules matter.",
      },
      {
        q: "How quickly must I register after crossing a threshold?",
        a: "States set their own timing. Some require you to register and start collecting from the next transaction after you cross the threshold, others give you until the first day of the following month or the following calendar year. A few measure the current or previous calendar year, others a rolling 12 months or four quarters. Note the date you crossed and check the specific state's rule straight away.",
      },
      {
        q: "Do I have nexus in a state with no sales tax?",
        a: "Alaska, Delaware, Montana, New Hampshire and Oregon have no statewide sales tax, so there is no statewide sales tax to collect. Alaska is a partial exception, because many Alaska local governments levy sales tax and a remote seller commission administers economic nexus rules for participating localities. Other taxes, such as gross receipts or income taxes, have their own nexus rules that this article does not cover.",
      },
      {
        q: "What happens if I ignore sales tax nexus?",
        a: "If a state later finds you had nexus and did not register, it can assess the tax you should have collected, plus interest and penalties, usually for every period since you crossed the threshold. You generally cannot go back and bill customers for that tax. Many states offer voluntary disclosure agreements that limit the look-back period and waive some penalties if you come forward before they contact you.",
      },
      {
        q: "Does the invoice generator work out where I have nexus?",
        a: "No. The free invoice generator builds a PDF invoice in your browser with a separate tax line and lets you enter the rate you need. It does not track your sales by state, calculate nexus, register you with any state or file returns. Use your sales records or ecommerce reports to monitor thresholds, then add the correct state and local rate to each invoice once you are registered.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Sales tax nexus is the connection with a state that obliges you to register, collect and file that state's sales tax. You get it through physical presence or through economic nexus, usually more than $100,000 in annual sales into the state. Some states also count transactions, and several have recently dropped that test.</p>
<p>If you sell online to customers in more than one state, sooner or later you need to know where you must collect sales tax. The answer turns on nexus. This guide explains how physical and economic nexus work, shows the common thresholds in a table, walks through a worked example with real numbers, and ends with a checklist and the mistakes we see most often. Thresholds change frequently, so treat the figures below as a starting point and confirm the current rule with each state before you act.</p>

<h2>What is sales tax nexus?</h2>
<p>Nexus is a legal term for a sufficient connection between a business and a taxing state. Once you have it, the state can require you to register for a sales tax permit, charge tax on taxable sales to customers there, and file regular returns. Without it, you generally do not collect that state's tax, although the buyer may owe use tax on the purchase.</p>
<p>Until 2018, nexus meant physical presence. In <em>South Dakota v. Wayfair, Inc.</em>, the US Supreme Court overturned that rule and allowed states to require out-of-state sellers to collect tax based on their sales volume alone. You can read the <a href="https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf" target="_blank" rel="noopener noreferrer">Wayfair opinion on the Supreme Court website</a>. Every state with a statewide sales tax has since adopted an economic nexus rule.</p>
<p>Sales tax nexus only decides <em>whether</em> you collect. What you charge, and how it appears on the invoice, is covered in our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>.</p>

<h3>Physical nexus</h3>
<p>Physical presence still creates nexus everywhere, regardless of sales volume. Common triggers include:</p>
<ul>
<li>An office, shop, warehouse or other place of business in the state.</li>
<li>Employees, and in many states independent sales representatives, working there.</li>
<li>Inventory stored in the state, including stock held in a third-party fulfillment center.</li>
<li>Regular installation, repair or service visits.</li>
<li>Attending trade shows and making sales, in some states.</li>
</ul>
<p>Physical presence is the oldest form of sales tax nexus, and the fulfillment center point surprises many ecommerce sellers. If a marketplace moves your stock into a warehouse in another state, you may have physical nexus there even with modest sales.</p>

<h3>Economic nexus</h3>
<p>Economic nexus is based on what you sell into a state over a measuring period. The original South Dakota law used more than $100,000 in sales <em>or</em> 200 or more separate transactions. Many states copied that model, but they have since diverged in three ways: the dollar amount, whether a transaction count applies, and which sales are counted.</p>

<h2>Economic nexus thresholds: common patterns by state</h2>
<p>The table below groups states by the type of test they use. It is a summary of published rules as we found them in October 2026, not a complete 50-state chart. Always check the state's own guidance before registering or deciding you are under a threshold.</p>
<table>
<thead><tr><th>Pattern</th><th>Examples</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td>$100,000 in sales, no transaction count</td><td>South Dakota (count removed July 1, 2023), Indiana, North Carolina, Utah, Illinois (count removed January 1, 2026)</td><td>Only the dollar figure matters; lots of small orders no longer trigger nexus on their own</td></tr>
<tr><td>$100,000 or 200 transactions</td><td>Several states still use the original Wayfair model</td><td>Crossing either test creates nexus, so low-value, high-volume sellers can be caught</td></tr>
<tr><td>Higher dollar threshold</td><td>California and Texas use $500,000</td><td>Fewer small sellers are affected</td></tr>
<tr><td>Dollar <em>and</em> transaction test</td><td>New York: more than $500,000 and more than 100 sales in the prior four quarters</td><td>You need to exceed both tests</td></tr>
<tr><td>No statewide sales tax</td><td>Delaware, Montana, New Hampshire, Oregon; Alaska has local taxes only</td><td>No statewide collection, but check Alaska local rules</td></tr>
</tbody>
</table>
<p>South Dakota's Department of Revenue confirms that, from July 1, 2023, its <a href="https://dor.sd.gov/businesses/taxes/sales-use-tax/2023-legislative-updates/" target="_blank" rel="noopener noreferrer">remote seller criteria no longer include the 200-transaction test</a>. Industry trackers also report that Kentucky planned to drop its transaction count from August 1, 2026. We could not confirm every state on an official page, so verify with the state before relying on any single figure.</p>

<h3>Which sales count?</h3>
<p>The threshold test is only as good as the number you plug into it. States differ on whether to count:</p>
<ul>
<li><strong>Gross sales</strong>, including exempt sales and sales for resale.</li>
<li><strong>Retail sales only</strong>, excluding wholesale transactions.</li>
<li><strong>Taxable sales only</strong>, excluding exempt items such as groceries or some services.</li>
<li><strong>Marketplace sales</strong>, which some states exclude because the facilitator already collected the tax.</li>
</ul>
<p>The measuring period also varies: the current or previous calendar year, the previous four quarters, or a rolling 12 months.</p>

<h2>Marketplace facilitators and your nexus</h2>
<p>All states with a sales tax now have marketplace facilitator laws. When you sell through Amazon, Etsy, eBay or a similar platform, the marketplace generally collects and remits the tax on those orders. That does not automatically end your obligations:</p>
<ul>
<li>Sales through your own website, a Shopify or WooCommerce store, or direct invoices are still your responsibility.</li>
<li>Some states count marketplace sales toward your threshold even though the platform paid the tax.</li>
<li>Inventory a marketplace stores for you can create physical nexus.</li>
</ul>
<p>If you run a store alongside marketplace listings, our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoices for Shopify and WooCommerce</a> explains how tax lines and order invoices fit together.</p>

<h2>Worked example: checking three states</h2>
<p>Here is an illustrative case. Priya runs a small online shop based in Texas selling handmade candles through her own website. Over the previous calendar year her sales into three states were:</p>
<table>
<thead><tr><th>State</th><th>Sales</th><th>Orders</th><th>Rule used in this example</th><th>Nexus?</th></tr></thead>
<tbody>
<tr><td>South Dakota</td><td>$22,400</td><td>640</td><td>More than $100,000 in sales</td><td>No</td></tr>
<tr><td>A state using $100,000 or 200 transactions</td><td>$38,000</td><td>1,050</td><td>More than $100,000 or 200 or more transactions</td><td>Yes</td></tr>
<tr><td>New York</td><td>$118,000</td><td>3,200</td><td>More than $500,000 and more than 100 sales</td><td>No</td></tr>
</tbody>
</table>
<p>The arithmetic for each:</p>
<ul>
<li><strong>South Dakota:</strong> $22,400 is less than $100,000. Before July 2023, 640 orders would have exceeded 200 transactions and created nexus. Under the current rule, the order count is irrelevant, so no nexus.</li>
<li><strong>Transaction-count state:</strong> $38,000 is under $100,000, but 1,050 orders is more than 200. Either test is enough, so Priya has nexus and must register.</li>
<li><strong>New York:</strong> 3,200 sales is more than 100, but $118,000 is less than $500,000. Both tests must be met, so no economic nexus yet.</li>
</ul>
<p>Now suppose Priya registers in the second state, where her combined state and local rate is, say, 7.25%. An order of $64.00 would carry tax of $64.00 × 0.0725 = $4.64, for a total of $68.64. You can check figures like this with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>, and if a customer quotes a tax-inclusive price, our guide to <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> shows how to split it.</p>

<h2>What to do once you have sales tax nexus: step by step</h2>
<ol>
<li><strong>Pull sales by state.</strong> Export the last 12 to 24 months of orders from your store, payment processor and invoices, and total them by ship-to state.</li>
<li><strong>Compare against each state's current rule.</strong> Use the state's official remote seller page and note the measuring period and which sales count.</li>
<li><strong>Record the date you crossed.</strong> Many states start the collection obligation from a specific point after crossing, so the date matters.</li>
<li><strong>Register for a permit.</strong> Apply through the state's revenue department. Registration is usually free. Do not charge tax before you hold a permit.</li>
<li><strong>Set up rates.</strong> Most states are destination-based, so the rate depends on where the customer receives the goods, often including local taxes.</li>
<li><strong>Show tax correctly on invoices.</strong> List the tax as a separate line with the rate, and add your permit number if the state or customer expects it; see our guide to <a href="/blog/tax-id-on-invoice">showing a tax ID on an invoice</a>.</li>
<li><strong>File and pay on time.</strong> States assign monthly, quarterly or annual filing based on volume. File even if you collected nothing, if the state requires zero returns.</li>
<li><strong>Review quarterly.</strong> Thresholds and your sales both change. Re-run your state totals every quarter.</li>
</ol>
<p>When you start charging tax, our free <a href="/invoice-generator/usa">US invoice generator</a> creates a PDF invoice with a separate tax line in your browser. It is honest to say what it does not do: it does not track your state totals, decide where you have nexus, register you or file returns.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using an old threshold chart.</strong> Several states dropped the transaction count between 2023 and 2026. A chart from a few years ago can be wrong in either direction.</li>
<li><strong>Counting only taxable sales when the state counts gross sales,</strong> or the reverse.</li>
<li><strong>Forgetting fulfillment center inventory</strong> as a source of physical nexus.</li>
<li><strong>Assuming marketplace sales never count.</strong> In some states they still count toward your threshold.</li>
<li><strong>Charging tax before registering.</strong> Collecting a state's tax without a permit creates its own problems.</li>
<li><strong>Not keeping records.</strong> Keep sales reports, exemption certificates and invoices; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers retention periods.</li>
<li><strong>Ignoring past exposure.</strong> If you crossed a threshold years ago, talk to an adviser about voluntary disclosure rather than quietly registering today.</li>
</ul>

<h2>Sales tax nexus checklist</h2>
<ul>
<li>Sales by ship-to state totaled for the right measuring period</li>
<li>Each state's current dollar and transaction tests checked on an official site</li>
<li>Marketplace and wholesale sales treated the way each state requires</li>
<li>Physical presence reviewed: staff, inventory, offices, service visits</li>
<li>Date of crossing recorded for each state</li>
<li>Permits obtained before collecting tax</li>
<li>Destination rates set up, including local taxes</li>
<li>Invoices show the tax as a separate line</li>
<li>Filing calendar created for each registration</li>
<li>Quarterly review scheduled</li>
</ul>
<p>Different countries handle consumption tax very differently; our explainer on <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a> puts the US system in context. For more state and federal topics, browse our <a href="/blog/category/tax-compliance">tax and compliance articles</a>.</p>

<p><em>This article is general information, not tax or legal advice. State thresholds and rules change often; confirm the current rule with each state's revenue department or a qualified tax professional before acting.</em></p>
`,
  },
  {
    slug: "how-to-file-vat-return-uk",
    title: "How to File a VAT Return in the UK: Step by Step (MTD)",
    description:
      "How to file a VAT return in the UK under Making Tax Digital: the 9 boxes explained, deadlines, a worked example, penalty points and late payment rules for 2026.",
    category: "tax-compliance",
    jurisdiction: "United Kingdom",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "vat-penalties-uk",
      "vat-cash-accounting-scheme",
      "vat-registration-threshold-uk",
      "vat-invoice-guide",
      "making-tax-digital-income-tax",
    ],
    faqs: [
      {
        q: "When is my VAT return due?",
        a: "For most businesses the deadline is one calendar month and 7 days after the end of the VAT period, and payment is due on the same date. A quarter ending 30 September is due by 7 November. Businesses on the Annual Accounting Scheme or making payments on account follow different timetables. Your VAT online account shows the exact due dates for your registration, so check it rather than counting manually.",
      },
      {
        q: "Can I still file a VAT return through the HMRC website?",
        a: "Generally no. HMRC says you must submit your VAT return using software compatible with Making Tax Digital. The VAT online account can only be used to file if you have an exemption from MTD, for example on religious grounds or because you cannot use computers or the internet, or if you have cancelled your registration. Bridging software that links a spreadsheet to HMRC is one MTD-compatible option.",
      },
      {
        q: "Do I need to file a VAT return if I made no sales?",
        a: "Yes. GOV.UK states that you must submit a VAT return even if you have no VAT to pay or reclaim. A nil return still needs to be submitted on time, and a late nil return can still earn a penalty point. If you have stopped trading and expect to stay below the deregistration threshold, consider whether you should cancel your registration instead of filing nil returns indefinitely.",
      },
      {
        q: "How do I correct a mistake on a previous VAT return?",
        a: "If the net error is below £10,000, or up to £50,000 but not more than 1% of your Box 6 figure for the return in which you discover it, you can usually adjust it on your next return, as long as it was not deliberate. Larger or deliberate errors should be reported to HMRC separately, typically using form VAT652 or the online equivalent. Keep a note explaining any adjustment.",
      },
      {
        q: "What happens if I file my VAT return late?",
        a: "Each late return earns a penalty point. When you reach the threshold, which is 2 points for annual filers, 4 for quarterly and 5 for monthly, HMRC charges a £200 penalty, plus another £200 for each further late return while you remain at the threshold. Points can be reset by meeting a period of compliance and filing all outstanding returns from the previous 24 months.",
      },
      {
        q: "What is the penalty for paying VAT late?",
        a: "There is no late payment penalty if you pay within 15 days of the due date, though interest runs from the first day. Under the rates HMRC introduced in 2025, paying between day 16 and 30 brings a penalty of 3% of the amount outstanding at day 15. From day 31, a second 3% applies to the amount outstanding at day 30, plus a daily penalty at 10% a year. Check GOV.UK for the current rates.",
      },
      {
        q: "Which boxes on the VAT return are in whole pounds?",
        a: "Boxes 1 to 5 show VAT amounts and include pence. Boxes 6 to 9 show values excluding VAT and are entered in whole pounds. Box 6 is your total sales, Box 7 your total purchases, and Boxes 8 and 9 relate to goods moving between Northern Ireland and the EU. Most businesses in Great Britain leave Boxes 2, 8 and 9 at zero.",
      },
      {
        q: "Can the invoice generator submit my VAT return?",
        a: "No. The free invoice generator builds VAT invoices as PDFs in your browser, with your VAT number and the VAT shown separately. It does not connect to HMRC, is not Making Tax Digital software and does not submit returns. Use the invoices it creates as source records, enter them in your bookkeeping or MTD-compatible software, and submit the return from there.",
      },
      {
        q: "How long must I keep VAT records?",
        a: "HMRC generally expects VAT-registered businesses to keep records for at least 6 years. Under Making Tax Digital, certain records, such as your VAT account and the details of supplies made and received, must be kept digitally, and the figures must flow between software digitally rather than being retyped. Copies of sales invoices, purchase invoices and credit notes should be kept alongside.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Here is how to file a VAT return in the UK: record sales and purchases in Making Tax Digital compatible software, check the figures for the nine boxes, and submit the return to HMRC from the software. The deadline is normally one calendar month and 7 days after the period ends, and payment is due by the same date.</p>
<p>Your first VAT return can feel intimidating, but the form itself is short: nine boxes, five for VAT and four for values. The work is in keeping clean records during the quarter. This guide covers how to file a VAT return step by step under Making Tax Digital (MTD), explains every box, works through a full example with numbers, and sets out the deadlines and penalties that apply in 2026. Figures here were checked against GOV.UK in October 2026.</p>

<h2>Before you start: Making Tax Digital for VAT</h2>
<p>Knowing how to file a VAT return starts with the software rule, because it decides which tools you can use.</p>
<p>Since April 2022 every VAT-registered business has been within Making Tax Digital for VAT, whatever its turnover, unless HMRC has granted an exemption. HMRC's guidance on <a href="https://www.gov.uk/submit-vat-return" target="_blank" rel="noopener noreferrer">sending a VAT Return</a> says you must submit using software compatible with MTD. In practice that means one of:</p>
<ul>
<li><strong>Accounting software</strong> that keeps your records and submits directly to HMRC.</li>
<li><strong>Bridging software</strong> that reads figures from a spreadsheet and sends them to HMRC.</li>
<li><strong>An agent</strong>, such as an accountant, using their own MTD software on your behalf.</li>
</ul>
<p>MTD also requires digital records: your business name, address and VAT number, the VAT accounting scheme you use, and for each supply the date, value and rate of VAT. Figures must move between programs digitally. Copying totals by hand from one spreadsheet into another breaks the digital link. If you are also preparing for MTD on the income tax side, our guide to <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> explains how the two regimes differ.</p>
<p>Not registered yet? Check the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a> first. It is £90,000 of taxable turnover over a rolling 12 months.</p>

<h2>The 9 boxes you complete when you file a VAT return</h2>
<table>
<thead><tr><th>Box</th><th>What goes in it</th><th>Format</th></tr></thead>
<tbody>
<tr><td>1</td><td>VAT due on sales and other outputs</td><td>Pounds and pence</td></tr>
<tr><td>2</td><td>VAT due on acquisitions of goods from the EU (Northern Ireland only)</td><td>Pounds and pence</td></tr>
<tr><td>3</td><td>Total VAT due: Box 1 plus Box 2</td><td>Pounds and pence</td></tr>
<tr><td>4</td><td>VAT reclaimed on purchases and other inputs</td><td>Pounds and pence</td></tr>
<tr><td>5</td><td>Net VAT to pay or reclaim: the difference between Box 3 and Box 4</td><td>Pounds and pence</td></tr>
<tr><td>6</td><td>Total value of sales and outputs, excluding VAT</td><td>Whole pounds</td></tr>
<tr><td>7</td><td>Total value of purchases and inputs, excluding VAT</td><td>Whole pounds</td></tr>
<tr><td>8</td><td>Supplies of goods to the EU (Northern Ireland only)</td><td>Whole pounds</td></tr>
<tr><td>9</td><td>Acquisitions of goods from the EU (Northern Ireland only)</td><td>Whole pounds</td></tr>
</tbody>
</table>
<p>A few points that trip people up:</p>
<ul>
<li>Box 6 includes zero-rated and exempt sales as well as standard-rated ones. Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference, which matters for what you can reclaim.</li>
<li>Under the reverse charge, for example on certain services bought from abroad, the VAT goes in both Box 1 and Box 4, and the value goes in Boxes 6 and 7. See our <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> guide.</li>
<li>Box 4 should only include VAT backed by a valid VAT invoice or other acceptable evidence.</li>
</ul>

<h2>How to file a VAT return: step by step</h2>
<p>The steps below assume quarterly returns and accounting software. If you use bridging software with a spreadsheet, the order is the same; only the final submission screen differs.</p>
<ol>
<li><strong>Check your period and deadline.</strong> Sign in to your VAT online account to confirm the period dates and due date.</li>
<li><strong>Record every sales invoice.</strong> Make sure each sale in the period is in your software with the correct date, net value and VAT rate. Issue proper invoices as you go; our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists what each one must show.</li>
<li><strong>Record purchases and expenses.</strong> Enter supplier invoices and receipts, and only reclaim VAT you hold evidence for.</li>
<li><strong>Account for credit notes.</strong> A <a href="/blog/credit-note-guide">credit note</a> reduces the output VAT for the period in which it is issued.</li>
<li><strong>Reconcile with the bank.</strong> Match payments in and out to invoices so nothing is missing or duplicated. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> article covers a simple routine.</li>
<li><strong>Review the nine boxes.</strong> Compare Box 1 against your sales total multiplied by the rate, and look for unusual swings from last quarter.</li>
<li><strong>Make any error corrections.</strong> Small past errors can often be adjusted on this return (see the FAQ below).</li>
<li><strong>Submit from your MTD software.</strong> Authorize the software with your Government Gateway details if you have not already, then submit. Save the confirmation.</li>
<li><strong>Pay by the deadline.</strong> Payment must be in HMRC's account by the due date. If you pay by <a href="/blog/uk-direct-debit">Direct Debit</a>, set the mandate up at least 3 working days before you submit the return; HMRC then collects automatically a few working days after the deadline.</li>
<li><strong>Archive the records.</strong> Keep the return, workings, and invoices for at least 6 years.</li>
</ol>

<h2>Worked example: a quarterly return</h2>
<p>Tom is a sole trader web designer registered for VAT, on standard quarterly returns. His quarter runs from 1 July to 30 September 2026. His records show:</p>
<ul>
<li>Standard-rated sales of £30,000 net, all at 20%.</li>
<li>A zero-rated sale of printed books of £2,000 net.</li>
<li>Purchases with VAT invoices: £7,250 net, VAT of £1,450.</li>
<li>Other costs with no VAT, such as insurance: £800.</li>
</ul>
<p>The boxes work out like this:</p>
<table>
<thead><tr><th>Box</th><th>Calculation</th><th>Figure</th></tr></thead>
<tbody>
<tr><td>1</td><td>£30,000 × 20%</td><td>£6,000.00</td></tr>
<tr><td>2</td><td>No EU acquisitions</td><td>£0.00</td></tr>
<tr><td>3</td><td>£6,000.00 + £0.00</td><td>£6,000.00</td></tr>
<tr><td>4</td><td>VAT on purchase invoices</td><td>£1,450.00</td></tr>
<tr><td>5</td><td>£6,000.00 − £1,450.00</td><td>£4,550.00 to pay</td></tr>
<tr><td>6</td><td>£30,000 + £2,000</td><td>£32,000</td></tr>
<tr><td>7</td><td>£7,250 + £800</td><td>£8,050</td></tr>
<tr><td>8 and 9</td><td>Not applicable</td><td>£0</td></tr>
</tbody>
</table>
<p>The deadline is one calendar month and 7 days after 30 September, which is 7 November 2026. Both the return and the £4,550 payment are due by then.</p>
<p>Suppose Tom files on time but pays 20 days late. Under the late payment rules HMRC applies from 2025, there is no penalty if tax is paid within 15 days. Because Tom's VAT was still outstanding at day 15 but paid before day 31, a first penalty of 3% of the day-15 balance applies: £4,550 × 3% = £136.50. Late payment interest is also charged from the day after the deadline. Paying on time would have avoided both.</p>

<h2>VAT return deadlines and penalties in 2026</h2>
<h3>Late submission: penalty points</h3>
<p>For periods starting on or after 1 January 2023, each late return earns one point. The <a href="https://www.gov.uk/guidance/penalty-points-and-penalties-if-you-submit-your-vat-return-late" target="_blank" rel="noopener noreferrer">GOV.UK penalty points guidance</a> sets these thresholds:</p>
<table>
<thead><tr><th>Filing frequency</th><th>Penalty point threshold</th></tr></thead>
<tbody>
<tr><td>Annual</td><td>2 points</td></tr>
<tr><td>Quarterly</td><td>4 points</td></tr>
<tr><td>Monthly</td><td>5 points</td></tr>
</tbody>
</table>
<p>At the threshold you get a £200 penalty, plus another £200 for each later late return while you stay there. To reset the points you need to meet a period of compliance by filing on time and submitting all outstanding returns from the previous 24 months.</p>

<h3>Late payment penalties and interest</h3>
<ul>
<li><strong>Up to day 15:</strong> no penalty, but interest runs.</li>
<li><strong>Day 16 to 30:</strong> first penalty of 3% of the VAT outstanding at day 15.</li>
<li><strong>Day 31 onward:</strong> first penalty of 3% of the amount at day 15 plus 3% of the amount still outstanding at day 30, and a second penalty charged daily at 10% a year until paid.</li>
</ul>
<p>These rates replaced the earlier 2% and 4% figures in 2025, and HMRC's manual ties the new rates to the period and due date, so older periods may use the old rates. A Time to Pay arrangement agreed with HMRC can reduce or stop late payment penalties. Late payment interest is set at the Bank of England base rate plus a margin; check GOV.UK for the current figure.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Reclaiming VAT without a valid invoice.</strong> A card receipt without the supplier's VAT number may not be enough.</li>
<li><strong>Missing zero-rated and exempt sales in Box 6.</strong> Box 6 is total sales, not just standard-rated ones.</li>
<li><strong>Reclaiming VAT on non-business or blocked costs,</strong> such as most business entertainment.</li>
<li><strong>Using the wrong tax point.</strong> VAT is usually due by reference to the invoice date or payment date, depending on your scheme, not when you happen to enter it.</li>
<li><strong>Retyping figures between spreadsheets,</strong> which breaks the MTD digital link.</li>
<li><strong>Forgetting the reverse charge</strong> on services bought from overseas.</li>
<li><strong>Paying from a new bank account too close to the deadline.</strong> Allow time for the money to clear.</li>
<li><strong>Leaving everything to the last week.</strong> Anyone who has learned how to file a VAT return the hard way will tell you the submission takes minutes; finding missing invoices takes days. Record invoices weekly.</li>
</ul>

<h2>VAT return checklist</h2>
<ul>
<li>MTD-compatible software set up and authorized</li>
<li>All sales invoices and credit notes recorded with correct dates and rates</li>
<li>Purchase invoices held for every VAT amount reclaimed</li>
<li>Bank account reconciled for the period</li>
<li>Reverse charge transactions entered in Boxes 1, 4, 6 and 7</li>
<li>Box 5 checked against your expectation</li>
<li>Return submitted and confirmation saved</li>
<li>Payment made or Direct Debit in place before the due date</li>
<li>Records stored for at least 6 years</li>
</ul>
<h3>Which VAT scheme are you on?</h3>
<p>The boxes stay the same, but the figures you put in them depend on your accounting scheme:</p>
<ul>
<li><strong>Standard accounting:</strong> VAT is due by reference to invoice dates, even if the customer has not paid.</li>
<li><strong>Cash accounting:</strong> VAT is accounted for when money is received or paid, which helps cash flow if customers pay slowly.</li>
<li><strong>Flat Rate Scheme:</strong> Box 1 is your VAT-inclusive turnover multiplied by your flat rate percentage, and you usually cannot reclaim input VAT except on certain capital purchases.</li>
<li><strong>Annual Accounting Scheme:</strong> one return a year, with interim payments during the year and a different deadline for the final return.</li>
</ul>
<p>Check which scheme applies to your registration before you prepare the figures, because using the wrong basis is one of the quickest ways to get Box 1 wrong.</p>

<p>Good returns start with good invoices. Our free <a href="/invoice-generator/uk">UK invoice generator</a> creates VAT invoices in GBP as PDFs in your browser, showing your VAT number and the VAT separately. It does not connect to HMRC or file anything, so you still enter the figures into your MTD software. Sole traders who are not yet registered can read our guide to <a href="/blog/sole-trader-invoice-uk">sole trader invoices in the UK</a>, and for retention rules see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<p><em>This article is general information, not tax advice. VAT rules, deadlines and penalty rates change; check GOV.UK or speak to an accountant about your circumstances.</em></p>
`,
  },
  {
    slug: "uae-vat-return-filing",
    title: "UAE VAT Return Filing: Deadlines, Steps and Penalties",
    description:
      "UAE VAT return filing on EmaraTax: the 28-day deadline, VAT 201 boxes explained, a worked example, payment by GIBAN and the penalties updated in April 2026.",
    category: "tax-compliance",
    jurisdiction: "UAE",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["trn-number-uae", "uae-vat-invoice-requirements", "uae-corporate-tax-freelancers"],
    faqs: [
      {
        q: "What is the deadline for filing a UAE VAT return?",
        a: "The VAT return and any payment are due no later than the 28th day after the end of the tax period. For a quarter ending 30 September, that is 28 October. Most businesses file quarterly, while larger businesses may be assigned monthly periods. Your tax periods are set by the FTA and shown in your EmaraTax account, so always check the dates there rather than assuming calendar quarters.",
      },
      {
        q: "Do I have to file a VAT return if I had no sales?",
        a: "Yes. Every VAT registrant must file a return for each tax period, even when there were no sales, no purchases and no VAT to pay. A nil return is simply a VAT 201 with zero values. A late nil return can still attract a late filing penalty. If your business has stopped making taxable supplies, consider whether you should apply to deregister instead.",
      },
      {
        q: "What is the penalty for late VAT return filing in the UAE?",
        a: "Published summaries of the penalty rules in force from 14 April 2026 under Cabinet Decision No. 129 of 2025 report AED 1,000 for a first late return and AED 2,000 for a repeat within 24 months. Late payment is reported as a flat 14% a year on the unpaid tax, calculated monthly. Check the FTA's current penalty schedule before relying on these figures, because summaries have differed.",
      },
      {
        q: "How do I pay VAT in the UAE?",
        a: "You can pay through EmaraTax using the available online methods, or by bank transfer to your Generated IBAN (GIBAN), a payment reference unique to your registration and tax type. A transfer is not treated as paid until it reaches the FTA and is allocated in EmaraTax, which can take time, especially for international transfers. Pay several working days before the 28-day deadline.",
      },
      {
        q: "How often do I file VAT returns in the UAE?",
        a: "Quarterly is the standard tax period for most registrants. Businesses with annual turnover of AED 150 million or more are generally assigned monthly tax periods, and the FTA can assign a different period in other cases. Your quarters may be staggered, so they do not always end in March, June, September and December. EmaraTax shows the exact start and end dates.",
      },
      {
        q: "What if I have more input VAT than output VAT?",
        a: "Box 14 will show a recoverable amount rather than tax payable. You can carry the excess credit forward to offset future VAT, or apply for a refund through EmaraTax. Refund requests are reviewed by the FTA and may require supporting invoices and records. Keep the tax invoices for every input VAT amount you claim, as they are the main evidence the FTA will ask for.",
      },
      {
        q: "How do I correct an error on a submitted VAT return?",
        a: "Errors that change the tax due by more than the threshold set in the law are generally corrected by a voluntary disclosure on EmaraTax, while smaller errors may be corrected in the return for the period in which you find them. Under the amended penalty rules, a voluntary disclosure before an audit notification is reported to attract a penalty of 1% a month on the tax difference. Check the FTA guidance for current limits.",
      },
      {
        q: "Does the invoice generator file VAT returns on EmaraTax?",
        a: "No. The free invoice generator creates UAE tax invoices as PDFs in your browser with AED amounts, your TRN and 5% VAT shown separately. It does not connect to EmaraTax, calculate your VAT 201 or submit anything to the FTA. Use the invoices as source records in your bookkeeping, then prepare and file the return in EmaraTax yourself or through a registered tax agent.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> UAE VAT return filing is done online on the FTA's EmaraTax platform using form VAT 201. Returns and payment are due by the 28th day after each tax period ends, usually quarterly. You report sales by emirate, purchases and input VAT, then pay any balance by card or bank transfer to your GIBAN.</p>
<p>Once you hold a TRN, filing returns becomes a regular part of running a business in the UAE. The form is logical once you understand it, but missing a deadline is costly. This guide walks through UAE VAT return filing step by step, explains each section of the VAT 201, shows a worked example with arithmetic, and summarizes the penalty changes that took effect in April 2026. Figures were checked in October 2026; always confirm against the Federal Tax Authority (FTA) before filing.</p>

<h2>Who must file a UAE VAT return</h2>
<p>Every business registered for VAT must file a return for each tax period, including periods with no activity. Mandatory registration applies once taxable supplies and imports exceeded AED 375,000 in the previous 12 months, or are expected to exceed it in the next 30 days. Voluntary registration is possible from AED 187,500. Our guide to the <a href="/blog/trn-number-uae">TRN number in the UAE</a> covers registration on EmaraTax.</p>
<p>VAT is separate from corporate tax, which has its own registration and return. Freelancers in particular should read our guide to <a href="/blog/uae-corporate-tax-freelancers">UAE corporate tax for freelancers</a>, because some will need both.</p>

<h3>Who can file on your behalf</h3>
<p>The return can be submitted by the registrant's authorized signatory in EmaraTax or by an FTA-registered tax agent linked to the account. Using an agent does not move legal responsibility: the business remains liable for errors and late filing, so review what the agent submits.</p>

<h2>Tax periods and the 28-day deadline for UAE VAT return filing</h2>
<table>
<thead><tr><th>Item</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Standard tax period</td><td>Quarterly, often staggered, as assigned by the FTA</td></tr>
<tr><td>Monthly periods</td><td>Generally for businesses with annual turnover of AED 150 million or more</td></tr>
<tr><td>Filing deadline</td><td>No later than the 28th day after the period ends</td></tr>
<tr><td>Payment deadline</td><td>Same day as the filing deadline</td></tr>
<tr><td>Filing channel</td><td>EmaraTax, online only</td></tr>
<tr><td>Record keeping</td><td>Generally at least 5 years for VAT records</td></tr>
</tbody>
</table>
<p>For example, a quarter ending 30 September 2026 is due by 28 October 2026. The FTA's <a href="https://tax.gov.ae/en/" target="_blank" rel="noopener noreferrer">official website</a> publishes deadline reminders and links to EmaraTax.</p>

<h2>Understanding the VAT 201 form</h2>
<p>The VAT 201 has two main parts: VAT on sales and all other outputs, and VAT on expenses and all other inputs. Your totals then produce the net VAT due.</p>
<table>
<thead><tr><th>Box</th><th>What it covers</th></tr></thead>
<tbody>
<tr><td>1a to 1g</td><td>Standard-rated supplies and VAT, split by emirate: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah</td></tr>
<tr><td>2</td><td>Tax refunds provided to tourists under the tourist refund scheme</td></tr>
<tr><td>3</td><td>Supplies subject to the reverse charge</td></tr>
<tr><td>4</td><td>Zero-rated supplies</td></tr>
<tr><td>5</td><td>Exempt supplies</td></tr>
<tr><td>6</td><td>Goods imported into the UAE</td></tr>
<tr><td>7</td><td>Adjustments to goods imported</td></tr>
<tr><td>8</td><td>Total outputs</td></tr>
<tr><td>9</td><td>Standard-rated expenses and recoverable VAT</td></tr>
<tr><td>10</td><td>Supplies subject to the reverse charge (input side)</td></tr>
<tr><td>11</td><td>Total inputs</td></tr>
<tr><td>12 to 14</td><td>Total value of due tax, total recoverable tax, and payable tax for the period</td></tr>
</tbody>
</table>
<p>A few practical notes. Sales are allocated to the emirate where your establishment that makes the supply is located. Exports of goods and many international services are zero-rated and go in Box 4; residential leases and some financial services are exempt and go in Box 5. Our explainer on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt supplies</a> shows why the difference matters for input VAT. Services bought from overseas suppliers are usually reported under the reverse charge, explained in our <a href="/blog/reverse-charge-invoice">reverse charge guide</a>.</p>

<h2>UAE VAT return filing: step by step on EmaraTax</h2>
<ol>
<li><strong>Close your books for the period.</strong> Record every sales invoice, credit note and supplier tax invoice dated in the period. Each sale should be backed by a compliant tax invoice; see our guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>.</li>
<li><strong>Reconcile with the bank.</strong> Match receipts and payments to invoices. Our article on <a href="/blog/bank-reconciliation">bank reconciliation</a> covers the routine.</li>
<li><strong>Split sales by emirate and type.</strong> Total standard-rated, zero-rated and exempt supplies, and identify reverse charge items and imports.</li>
<li><strong>Confirm input VAT.</strong> Only include VAT on business expenses supported by valid tax invoices, and exclude blocked items such as most entertainment.</li>
<li><strong>Log in to EmaraTax.</strong> Open the taxable person's profile, go to VAT, then VAT returns, and select the open period.</li>
<li><strong>Complete the VAT 201.</strong> Enter values and VAT in each box. Many amounts from customs imports are pre-populated; check them.</li>
<li><strong>Review the summary.</strong> Check Box 14 against your own calculation before you go further.</li>
<li><strong>Submit and save the acknowledgement.</strong> Download the submitted return for your records.</li>
<li><strong>Pay by the deadline.</strong> Pay online through EmaraTax or transfer to your GIBAN. Allow time for bank transfers to be allocated, especially from abroad.</li>
<li><strong>File and retain records.</strong> Keep invoices, import documents and workings for the required period.</li>
</ol>

<h2>Worked example: a quarterly VAT 201</h2>
<p>Layla runs a design studio in Dubai. For the quarter from 1 July to 30 September 2026 her records show:</p>
<ul>
<li>Standard-rated services to UAE clients: AED 400,000 net.</li>
<li>Services to clients outside the GCC that qualify for zero-rating: AED 60,000.</li>
<li>Standard-rated business expenses with tax invoices: AED 150,000 net.</li>
</ul>
<table>
<thead><tr><th>Line</th><th>Calculation</th><th>Amount (AED)</th></tr></thead>
<tbody>
<tr><td>Box 1b (Dubai) VAT</td><td>400,000 × 5%</td><td>20,000</td></tr>
<tr><td>Box 4 zero-rated value</td><td>No VAT charged</td><td>60,000 (VAT 0)</td></tr>
<tr><td>Box 9 recoverable VAT</td><td>150,000 × 5%</td><td>7,500</td></tr>
<tr><td>Box 14 payable tax</td><td>20,000 − 7,500</td><td>12,500</td></tr>
</tbody>
</table>
<p>The return and AED 12,500 are due by 28 October 2026. If Layla pays one month late, and the late payment rate reported for the new rules is 14% a year calculated monthly, the charge would be about 12,500 × 14% ÷ 12 = AED 145.83. That figure is illustrative; check the FTA's current penalty rules. Filing late as well would add a fixed late filing penalty on top.</p>

<h3>When the balance is a refund</h3>
<p>If your recoverable VAT is higher than output VAT, for example in a quarter with large equipment purchases and mostly zero-rated exports, Box 14 shows a credit. You can carry it forward against future periods or request a refund in EmaraTax. Refund requests are reviewed by the FTA, so make sure every input VAT figure is supported by a tax invoice addressed to your business, and that the bank details in your EmaraTax profile are correct.</p>

<h2>Penalties after the April 2026 changes</h2>
<p>Cabinet Decision No. 129 of 2025 amended the UAE's administrative penalty rules, and the FTA <a href="https://tax.gov.ae/en/media.centre/news/federal.tax.authority.announces.entry.into.force.of.the.decision.amending.administrative.penalties.imposed.for.violations.of.tax.legislation.and.calls.on.registrants.to.benefit.from.the.advantages.of.the.new.decision.aspx" target="_blank" rel="noopener noreferrer">announced that it took effect on 14 April 2026</a>. The FTA announcement describes the aim but not every amount. Professional firms' summaries report:</p>
<ul>
<li><strong>Late filing of a VAT return:</strong> AED 1,000 for a first offense and AED 2,000 for a repeat within 24 months.</li>
<li><strong>Late payment:</strong> a flat 14% a year on unpaid tax, calculated monthly, replacing the older percentage-based scheme.</li>
<li><strong>Incorrect return:</strong> reported at AED 500, waived if corrected before the filing deadline.</li>
<li><strong>Voluntary disclosure:</strong> reported at 1% a month on the tax difference if made before an audit notification, with a higher fixed penalty after one.</li>
</ul>
<p>Summaries have not all agreed, so treat these as indicative and confirm the current schedule with the FTA or a registered tax agent.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Assuming calendar quarters.</strong> Many registrants have staggered periods.</li>
<li><strong>Paying on the last day by international transfer.</strong> The payment may not be allocated until after the deadline.</li>
<li><strong>Allocating all sales to one emirate</strong> when you have establishments in more than one.</li>
<li><strong>Claiming input VAT without a tax invoice,</strong> or on blocked expenses.</li>
<li><strong>Zero-rating exports without evidence.</strong> Keep proof that services were supplied to a recipient outside the UAE, or that goods left the country.</li>
<li><strong>Skipping nil returns.</strong> They are still required, and a missed nil return is an easy way to pick up a late filing penalty.</li>
<li><strong>Reporting invoices in the wrong period.</strong> VAT generally falls due on the earliest of the date of supply, the invoice date or the date payment is received, so an advance payment can bring VAT into an earlier quarter.</li>
<li><strong>Using the wrong GIBAN.</strong> Each tax type has its own reference, so a VAT payment sent to a corporate tax GIBAN will not settle your VAT.</li>
<li><strong>Forgetting credit notes,</strong> which reduce output VAT in the period they are issued; see our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
</ul>

<h2>How to prepare for UAE VAT return filing during the quarter</h2>
<p>Most stress comes from leaving the bookkeeping until the last week. A simple monthly routine makes the quarterly return almost mechanical:</p>
<ul>
<li>Issue a numbered tax invoice for every taxable sale at the time of supply, and record it the same week.</li>
<li>Ask suppliers for tax invoices showing their TRN, and query documents that do not show VAT separately.</li>
<li>Tag each sale by emirate and VAT treatment when you record it, not at quarter end.</li>
<li>File customs declarations and export evidence alongside the related invoice.</li>
<li>Run a quick VAT summary at the end of each month to spot problems while they are easy to fix.</li>
</ul>

<h2>UAE VAT return checklist</h2>
<ul>
<li>Tax period dates confirmed in EmaraTax</li>
<li>All sales invoices and credit notes recorded</li>
<li>Sales split by emirate, standard-rated, zero-rated and exempt</li>
<li>Reverse charge items and imports identified</li>
<li>Input VAT supported by valid tax invoices</li>
<li>Bank reconciliation complete</li>
<li>VAT 201 reviewed and submitted before day 28, completing UAE VAT return filing for the period</li>
<li>Payment made early enough to clear</li>
<li>Acknowledgement and workings saved</li>
</ul>
<p>Our free <a href="/invoice-generator/uae">UAE invoice generator</a> creates tax invoices as PDFs in your browser with AED amounts, your TRN and 5% VAT on each line. It does not connect to EmaraTax or file returns. If your clients need bilingual documents, see our guide to <a href="/blog/arabic-english-invoice">Arabic and English invoices</a>, and plan ahead with our overview of <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing in 2027</a>.</p>

<p><em>This article is general information, not tax advice. UAE VAT rules and penalty amounts change; confirm details with the Federal Tax Authority or a registered tax agent.</em></p>
`,
  },
  {
    slug: "w-8ben-form-freelancers",
    title: "W-8BEN Form for Freelancers: How to Fill It Out Step by Step",
    description:
      "W-8BEN form guide for non-US freelancers: who needs it, how to fill each line, foreign TIN, treaty claims, how long it lasts and W-8BEN vs W-8BEN-E vs W-9.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "digital-nomad-tax",
      "w9-and-1099-for-contractors",
      "receive-payment-from-abroad-pakistan",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "Do I send the W-8BEN to the IRS?",
        a: "No. You give the completed form to the person or platform paying you, such as your US client, Upwork or a payment provider. They keep it on file as evidence that you are not a US person. The IRS instructions say explicitly not to send the form to the IRS. Keep your own copy, because you will need to renew it before it expires.",
      },
      {
        q: "Do non-US freelancers pay US tax on work done remotely?",
        a: "Generally no, if all the work is performed outside the United States. The IRS sources personal service income to the place where the services are performed, so work done in Pakistan or India for a US client is foreign-source income for US purposes. It is usually not subject to US withholding. You still owe tax in your home country, and the form simply documents your status.",
      },
      {
        q: "How long is a W-8BEN valid?",
        a: "Generally from the date you sign it until the last day of the third calendar year after that. A form signed on 15 March 2026 stays valid until 31 December 2029. If your circumstances change, for example you move country or become a US resident, you must give the payer a new form within 30 days. Platforms usually prompt you when renewal is due.",
      },
      {
        q: "What if I do not have a foreign tax identification number?",
        a: "Line 6a asks for the tax identification number issued by your country of residence. In Pakistan, individuals usually use their CNIC number, which also serves as their NTN; in India it is your PAN. If your country does not issue numbers to individuals, or you are not legally required to obtain one, you can check box 6b instead. Do not leave line 6a blank without a reason.",
      },
      {
        q: "Should I claim treaty benefits in Part II?",
        a: "Usually not for remote services. If the work is performed entirely outside the US, the payment is not US-source, so there is normally no US tax for a treaty to reduce. Treaty claims matter for US-source income such as royalties. Independent contractors claiming a treaty exemption for services physically performed in the US use Form 8233 instead. If a platform insists, ask which article it expects.",
      },
      {
        q: "What is the difference between W-8BEN and W-8BEN-E?",
        a: "W-8BEN is for individuals, including sole proprietors and owners of single-member disregarded entities. W-8BEN-E is for foreign entities such as companies and partnerships, and it is longer because it also covers FATCA status. If you invoice through a registered private limited company, the company completes W-8BEN-E. If you invoice in your own name, use W-8BEN.",
      },
      {
        q: "Can I sign the W-8BEN electronically?",
        a: "Yes, if the payer's system supports a valid electronic signature process, which most freelance platforms and payment providers do. The IRS instructions note that simply typing your name into the signature line of a PDF is not, by itself, an electronic signature. If a client emails you a PDF, sign it by hand or use an e-signature tool that records your consent and the date.",
      },
      {
        q: "What happens if I do not submit a W-8BEN?",
        a: "Without valid documentation, a US payer may be required to treat you under presumption rules, which can mean withholding at 30% on US-source payments or asking you for a W-9. Many platforms will also block withdrawals until tax information is complete. Submitting an accurate form upfront avoids delays, even when no US tax is ultimately due on your remote work.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The W-8BEN form is an IRS form that a non-US individual gives to a US client or platform to certify foreign status. For freelancers working entirely outside the US, it usually means no US tax is withheld. You complete Part I with your details and foreign TIN, normally skip Part II, sign, and return it to the payer.</p>
<p>Sooner or later, a US client, Upwork, Fiverr or a payment provider will ask you for tax information. If you live and work outside the United States, the right document is almost always Form W-8BEN, not a W-9. This guide explains who needs it, how to fill it out line by line, how treaty claims really work for remote freelancers in countries such as Pakistan and India, and how long the form stays valid. It is based on the IRS instructions, which were last revised in October 2021 and reviewed by the IRS in 2026.</p>

<h2>What the W-8BEN form does</h2>
<p>US businesses that pay foreigners must document whether the payee is a US person and whether any US withholding applies. The form, officially titled Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding and Reporting (Individuals), lets you certify that:</p>
<ul>
<li>You are not a US citizen or US resident for tax purposes.</li>
<li>You are the beneficial owner of the income.</li>
<li>If relevant, you reside in a country that has a tax treaty with the US.</li>
</ul>
<p>You give it to the payer, not the IRS. The official <a href="https://www.irs.gov/instructions/iw8ben" target="_blank" rel="noopener noreferrer">IRS instructions for Form W-8BEN</a> state this directly. Your US client keeps it on file instead of collecting a W-9; our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> explains the US-person side of the process.</p>

<h3>Why remote work is usually not taxed in the US</h3>
<p>The IRS treats personal service income as coming from where the work is physically done. Its page on <a href="https://www.irs.gov/individuals/international-taxpayers/source-of-income-personal-service-income" target="_blank" rel="noopener noreferrer">the source of personal service income</a> sets out this rule. A designer in Lahore or a developer in Bengaluru who never works on US soil earns foreign-source income, even when the client is American. The W-8BEN form documents that position. You still pay tax at home; see our guide to <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax in Pakistan</a> for one example.</p>

<h2>W-8BEN vs W-8BEN-E vs W-9 vs 8233</h2>
<table>
<thead><tr><th>Form</th><th>Who uses it</th><th>Typical freelancer situation</th></tr></thead>
<tbody>
<tr><td>W-8BEN</td><td>Non-US individuals</td><td>You invoice in your own name from outside the US</td></tr>
<tr><td>W-8BEN-E</td><td>Non-US entities</td><td>You invoice through your own foreign company</td></tr>
<tr><td>W-9</td><td>US persons, including US citizens living abroad</td><td>You are a US citizen or green card holder</td></tr>
<tr><td>8233</td><td>Nonresident individuals claiming a treaty exemption for services performed in the US</td><td>You travel to the US to do the work</td></tr>
<tr><td>W-8ECI</td><td>Foreign persons with income effectively connected with a US trade or business</td><td>Rare for remote freelancers</td></tr>
</tbody>
</table>
<p>A common trap: US citizens living in Pakistan, India or elsewhere are still US persons and must use a W-9, not a foreign status form.</p>

<h2>How to fill out the W-8BEN form: line by line</h2>
<p>Download the current revision from irs.gov or use your platform's online tax interview, which asks the same questions in a guided format. Use English letters, and keep your answers consistent with the ID documents the platform already holds.</p>
<h3>Part I: Identification of beneficial owner</h3>
<ol>
<li><strong>Line 1, name.</strong> Your full legal name, as on your passport or national ID. If you trade under a business name as a sole proprietor, still enter your own name.</li>
<li><strong>Line 2, country of citizenship.</strong> Enter the country whose passport you hold. If you are a dual citizen, follow the specific guidance for this line in the IRS instructions.</li>
<li><strong>Line 3, permanent residence address.</strong> Your home address in your country of tax residence. Do not use a PO box, an in-care-of address or a mailing address only.</li>
<li><strong>Line 4, mailing address.</strong> Only if different from line 3.</li>
<li><strong>Line 5, US TIN.</strong> Most freelancers leave this blank. It is required only in specific cases, such as certain treaty claims.</li>
<li><strong>Line 6a, foreign TIN.</strong> Your tax number from your country of residence: in Pakistan, usually your CNIC, which serves as your NTN (see <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a>); in India, your PAN.</li>
<li><strong>Line 6b.</strong> Check this only if you are not legally required to obtain a foreign TIN.</li>
<li><strong>Line 7, reference number.</strong> Optional. Some platforms use it for your account ID.</li>
<li><strong>Line 8, date of birth.</strong> Enter it in MM-DD-YYYY format.</li>
</ol>

<h3>Part II: Claim of tax treaty benefits</h3>
<p>Line 9 asks for your treaty country and line 10 for special rates and conditions. For services performed entirely outside the US, there is usually no US tax to reduce, so many freelancers leave Part II blank. Treaty claims matter for US-source income, such as royalties from a US publisher.</p>
<p>Pakistani freelancers often ask about the US–Pakistan treaty. It dates from 1957, and its personal services article (Article XI) deals mainly with individuals who are temporarily present in the US. If you physically work in the US, the IRS directs independent contractors to Form 8233, not this form, for that exemption. If a platform requires a line 10 entry for remote work, ask it which article and rate it expects rather than guessing, and check IRS Publication 901 or a tax adviser.</p>

<h3>Part III: Certification</h3>
<p>Read the statements, then sign and date. Platforms usually use an electronic signature flow. The IRS notes that typing your name into a PDF signature line on its own is not an electronic signature, so use the payer's system or sign by hand.</p>

<h2>Worked example: a freelancer in Pakistan</h2>
<p>Ahmed is a web developer in Karachi. A US agency hires him for a project worth $2,500, and all the work is done from his home office.</p>
<ul>
<li>He completes the form with his name, Pakistani citizenship, Karachi address and CNIC as foreign TIN, and leaves Part II blank.</li>
<li>The agency treats the payment as foreign-source and withholds nothing: $2,500 − $0 = $2,500 paid.</li>
<li>Had Ahmed sent nothing and been treated as a payee who must be withheld on, the default US rate on US-source income is 30%: $2,500 × 30% = $750, leaving $1,750 until he sorted out the paperwork.</li>
</ul>
<p>He signs on 15 March 2026. The form is valid through the end of the third calendar year after signing: 2026 + 3 = 2029, so it expires on 31 December 2029.</p>
<p>Ahmed still owes Pakistani tax on the $2,500, and how it reaches his bank affects the rate there. Our guide on <a href="/blog/receive-payment-from-abroad-pakistan">receiving payment from abroad in Pakistan</a> explains remittance channels, and our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> comparison covers fees.</p>

<h3>When the treaty question does come up</h3>
<p>Some freelancers earn more than client fees. If you license a template, course or piece of software to a US business, part of what you receive may be treated as a royalty, which can be US-source income. In that case a treaty claim in Part II can reduce the 30% default withholding, and line 10 may need the article, rate and type of income. Rates differ by treaty and income type, so check IRS Publication 901 for your country rather than copying another freelancer's entries.</p>

<h3>If you travel to the US for a project</h3>
<p>Work you physically perform in the US is US-source income, even if the client pays you abroad. A treaty exemption for that work is claimed on Form 8233, not on your W-8BEN form, and the conditions are narrow. Talk to an adviser before you accept on-site work.</p>

<h2>Step by step: submitting it to a client or platform</h2>
<ol>
<li><strong>Confirm you are not a US person</strong> for tax purposes.</li>
<li><strong>Confirm you are an individual,</strong> not invoicing through a company (if you are, the company uses W-8BEN-E).</li>
<li><strong>Gather your details:</strong> legal name, address, foreign TIN and date of birth.</li>
<li><strong>Use the payer's process.</strong> Upwork, Fiverr and payment providers have online tax interviews; direct clients usually send the IRS PDF.</li>
<li><strong>Complete Part I</strong> carefully, matching your ID documents.</li>
<li><strong>Leave Part II blank</strong> for purely remote services unless you have a specific treaty claim.</li>
<li><strong>Sign and date</strong> in Part III and return it before your first invoice is paid.</li>
<li><strong>Diary the renewal</strong> for the end of the third calendar year.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Filling out a W-9 by mistake,</strong> which tells the client you are a US person.</li>
<li><strong>Using a PO box</strong> as the permanent residence address.</li>
<li><strong>Claiming a treaty rate you have not checked,</strong> or citing an article number copied from a forum.</li>
<li><strong>Entering a company name</strong> on a form meant for individuals.</li>
<li><strong>Leaving the foreign TIN blank</strong> without checking box 6b.</li>
<li><strong>Forgetting to update it</strong> after moving country.</li>
<li><strong>Sending the W-8BEN form to the IRS</strong> instead of to the payer that requested it.</li>
<li><strong>Assuming the form settles home-country tax.</strong> It only deals with US withholding.</li>
</ul>

<h2>Checklist before you submit</h2>
<ul>
<li>You are a non-US individual working from outside the US</li>
<li>Name matches your passport or ID</li>
<li>Permanent residence address, not a PO box</li>
<li>Foreign TIN entered, or box 6b checked with a valid reason</li>
<li>Date of birth in MM-DD-YYYY format</li>
<li>Part II left blank unless you have a verified treaty claim</li>
<li>Signed and dated</li>
<li>Copy saved and renewal date noted</li>
</ul>
<p>Once your status is documented, US clients generally do not withhold US tax on remote work, but tax can still be deducted at home when the money arrives. Our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> explains how that is usually shown.</p>
<p>Once your tax details are in place, send professional invoices. Our free <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> builds PDF invoices in your browser in USD or PKR; it does not complete tax forms or file anything for you. Our guides on <a href="/blog/invoice-international-clients">invoicing international clients</a> and <a href="/blog/fiverr-upwork-invoice">Fiverr and Upwork invoices</a> cover the rest of the paperwork.</p>

<p><em>This article is general information, not tax advice. US and local tax rules change; check the current IRS instructions or speak to a qualified tax adviser about your situation.</em></p>
`,
  },
];
