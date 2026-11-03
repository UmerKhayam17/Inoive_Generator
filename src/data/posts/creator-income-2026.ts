import type { PostDraft } from "../blog";

export const CREATOR_INCOME_2026_POSTS: PostDraft[] = [
  {
    slug: "amazon-kdp-royalties",
    title: "Amazon KDP Royalties: How Authors Get Paid and Taxed",
    description:
      "How Amazon KDP royalties work in 2026: 35% vs 70% eBook rates, 50%/60% paperback rates, payment timing, 1099-MISC rules and how to track royalty income.",
    category: "payments",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["youtuber-taxes", "side-hustle-taxes", "1099-nec-vs-1099-misc-vs-1099-k"],
    faqs: [
      {
        q: "What percentage does Amazon KDP pay authors?",
        a: "For eBooks, KDP pays either 35% or 70% of the list price. The 70% option requires a list price between $2.99 and $12.99 on Amazon.com and subtracts a delivery cost based on file size. For paperbacks sold on Amazon.com, KDP pays 60% of list price for books priced at $9.99 or more and 50% for books at $9.98 or less, minus the printing cost. Expanded Distribution pays 40% minus printing.",
      },
      {
        q: "How often does KDP pay royalties?",
        a: "KDP pays monthly, roughly 60 days after the end of the month in which the sales were reported. Expanded Distribution paperback sales are paid about 90 days after month end. Each Amazon marketplace pays separately, so a single month can produce several deposits in different currencies. Direct deposit has no minimum, while wire and check payments only go out after you reach the minimum threshold KDP sets for that method.",
      },
      {
        q: "Does KDP send a 1099 for royalties?",
        a: "US authors who complete the KDP tax interview receive Form 1099-MISC when royalties for the year reach $10, reported in box 2. The One Big Beautiful Bill Act raised most 1099-MISC and 1099-NEC thresholds to $2,000 for 2026, but the royalty threshold stayed at $10. You must report all royalty income even if no form arrives, so keep your own monthly records from KDP reports.",
      },
      {
        q: "Are KDP royalties subject to self-employment tax?",
        a: "Usually yes, if you write and publish as an ongoing business. Self-published authors who actively create and market books typically report royalties on Schedule C, where net profit is subject to self-employment tax. Royalties from a book you no longer work on, or from rights you merely own, can belong on Schedule E instead. The line depends on your facts, so confirm the right treatment with a tax professional.",
      },
      {
        q: "Why is my KDP royalty lower than 70% of the price?",
        a: "Several deductions apply before the percentage. The 70% rate is calculated on the list price excluding VAT, then the delivery cost for your file size is subtracted. Sales in territories outside the 70% list, or sales of public domain works, earn 35% instead. If Amazon price-matches your book to a lower price elsewhere, the royalty is calculated on that lower sale price.",
      },
      {
        q: "Can non-US authors avoid 30% withholding on KDP royalties?",
        a: "Often, yes. Non-US authors complete a Form W-8BEN through the KDP tax interview. Without it, Amazon withholds 30% of US royalties. If your country has a tax treaty with the United States that covers royalties, the withholding rate can drop, sometimes to zero. You then report the royalties under your own country's tax rules, which usually allow a credit for any US tax withheld.",
      },
    ],
    content: `
<p>Amazon KDP royalties are the share of each sale that Amazon pays you as the author-publisher. For eBooks you choose between a 35% and a 70% royalty option, and for paperbacks you earn 50% or 60% of the list price minus the printing cost, with payments arriving about 60 days after the end of each month. If you are in the United States, those royalties are taxable income, usually reported on Schedule C when writing is your business.</p>

<p>The headline percentages hide a lot of detail: delivery fees, price bands that changed in 2026, separate payments from every marketplace, and Kindle Unlimited page reads that pay from a shared pool. This guide walks through each royalty type with real math, explains when and how KDP pays, and shows how to keep clean records for tax time.</p>

<h2>How Amazon KDP royalties work for eBooks</h2>
<p>Every Kindle eBook is enrolled in one of two royalty options. According to KDP's <a href="https://kdp.amazon.com/en_US/help/topic/G200644210" target="_blank" rel="noopener noreferrer">eBook royalty help page</a>, the 35% option pays 35% of the list price excluding VAT, with no delivery fee. The 70% option pays 70% of the list price excluding VAT, minus a delivery cost that depends on your file size, and only for sales in eligible territories.</p>
<p>The price band for the 70% option matters. On Amazon.com the list price must be between $2.99 and $12.99. KDP's <a href="https://kdp.amazon.com/en_US/help/topic/G200634560" target="_blank" rel="noopener noreferrer">list price requirements page</a> notes the 70% maximum rose from $9.99 to $12.99 effective July 7, 2026, which opened the higher rate to longer nonfiction and box sets that used to sit just above the old ceiling.</p>

<table><thead><tr><th>Amazon.com eBook</th><th>35% option</th><th>70% option</th></tr></thead><tbody>
<tr><td>List price (file under 3 MB)</td><td>$0.99 to $200</td><td>$2.99 to $12.99</td></tr>
<tr><td>List price (file 10 MB or larger)</td><td>$2.99 to $200</td><td>$2.99 to $12.99</td></tr>
<tr><td>Delivery cost</td><td>None</td><td>Charged per megabyte</td></tr>
<tr><td>Territories</td><td>All</td><td>Eligible territories only; others pay 35%</td></tr>
<tr><td>Public domain content</td><td>Allowed</td><td>Not eligible</td></tr>
</tbody></table>

<h3>Delivery costs on the 70% option</h3>
<p>Amazon charges the delivery cost per megabyte of the converted file. KDP says the average is about $0.06 per unit, but image-heavy books such as cookbooks, comics and illustrated children's titles can cost far more. For a large file at a low price, the 35% option can actually pay more. Compress images before upload and check the estimated delivery cost on the pricing page before you publish.</p>

<h3>Kindle Unlimited page reads</h3>
<p>If you enroll an eBook in KDP Select, it must be exclusive to Kindle in digital form for each 90-day term. In return, you earn a share of the monthly KDP Select Global Fund for every Kindle Edition Normalized Page (KENP) read by Kindle Unlimited subscribers. The per-page rate changes every month, so treat page-read income as variable and record it separately from sales royalties.</p>

<h2>Paperback and hardcover royalties</h2>
<p>Print royalties use a simple formula: royalty rate times list price, minus printing cost. Amazon's <a href="https://kdp.amazon.com/en_US/help/topic/G201834330" target="_blank" rel="noopener noreferrer">paperback royalty page</a> sets the rate by price. On Amazon.com, list prices of $9.99 and above earn 60%, while prices of $9.98 and below earn 50%. Expanded Distribution, which places your book in bookstore and library catalogs, pays 40% of list price minus printing cost.</p>
<p>Printing cost depends on page count, ink type and marketplace, not trim size. A 300-page black-ink paperback costs much less to print than a 120-page full-color one. Use the KDP pricing calculator for exact figures, because a book can easily end up with a royalty of zero if the price is set too low.</p>

<table><thead><tr><th>Print channel</th><th>Royalty rate</th><th>Formula</th></tr></thead><tbody>
<tr><td>Amazon.com, list price $9.99 or more</td><td>60%</td><td>(0.60 x list price) minus printing</td></tr>
<tr><td>Amazon.com, list price $9.98 or less</td><td>50%</td><td>(0.50 x list price) minus printing</td></tr>
<tr><td>Expanded Distribution</td><td>40%</td><td>(0.40 x list price) minus printing</td></tr>
</tbody></table>

<h2>Worked example: one book, three formats</h2>
<p>Here is an illustrative month for a 300-page self-help title. The numbers are examples, not quotes from KDP.</p>
<ul>
<li><strong>eBook at $4.99, 2 MB file, 70% option.</strong> 70% of $4.99 is $3.49. If delivery cost is about $0.30 for the file, the royalty is roughly $3.19 per sale. At 35% the royalty would be $1.75, so the 70% option clearly wins here.</li>
<li><strong>Paperback at $14.99, printing cost $4.85.</strong> 60% of $14.99 is $8.99. Subtract $4.85 and the royalty is $4.14 per Amazon sale.</li>
<li><strong>Same paperback through Expanded Distribution.</strong> 40% of $14.99 is $6.00. Subtract $4.85 and you earn $1.15.</li>
</ul>
<p>If the month brings 220 eBook sales, 85 Amazon paperback sales and 12 Expanded Distribution sales, royalties are about $701.80 + $351.90 + $13.80, or $1,067.50, plus any Kindle Unlimited page-read income. That full amount is gross business income, before ads, editing, cover design and other expenses.</p>
<p>Now consider pricing the same paperback at $8.99. The rate drops to 50%, so the royalty is $4.50 minus $4.85, which is negative. KDP will not let you publish below the minimum price, but this shows why many authors keep paperbacks at $9.99 or more.</p>

<h2>When and how KDP pays royalties</h2>
<p>KDP pays royalties monthly, approximately 60 days after the end of the month in which the sales occurred. Expanded Distribution sales are paid about 90 days after month end. So March sales arrive around the end of May.</p>
<p>Each marketplace (Amazon.com, Amazon.co.uk, Amazon.de and so on) pays separately. With direct deposit, there is no minimum payout, so you may see several small deposits. Wire and check payments are only sent once a marketplace reaches the minimum threshold for that method; otherwise the balance rolls forward. If you are paid in a currency other than the sale currency, Amazon converts it at its own rate.</p>
<p>The lag matters for cash flow. If you run a launch with heavy ads in January, the royalties from that launch will not reach your bank until late March. Plan your cash reserves around that gap rather than around the sales dashboard.</p>

<h2>How KDP royalties are taxed in the US</h2>
<p>This section is general information, not tax advice; check with a tax professional about your own situation.</p>
<h3>Form 1099-MISC</h3>
<p>KDP asks every author to complete a tax interview. US authors who earn at least $10 in royalties during the year receive Form 1099-MISC with the amount in box 2. The One Big Beautiful Bill Act raised most 1099 thresholds to $2,000 for payments from 2026, but the royalty threshold stayed at $10. Our breakdown of <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> explains how these forms differ.</p>
<h3>Schedule C or Schedule E</h3>
<p>If you write, publish and market books regularly with the aim of making a profit, royalties are business income on Schedule C. Net profit is then subject to <a href="/blog/self-employment-tax">self-employment tax</a> as well as income tax. Royalties from a work you are not actively exploiting, or from rights you inherited, may go on Schedule E without self-employment tax. Most active self-publishers fall into the Schedule C camp, which also lets them deduct editing, cover design, ISBNs, ads and software. Our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> walks through the form line by line.</p>
<h3>Estimated taxes and non-US authors</h3>
<p>Nothing is withheld from royalties paid to US authors, so successful authors usually need to make <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a>. Non-US authors submit Form W-8BEN in the tax interview; without it, Amazon withholds 30% of US royalties. A tax treaty can reduce or remove that withholding, as our guide to the <a href="/blog/w-8ben-form-freelancers">W-8BEN form for freelancers</a> explains.</p>

<h2>Tracking royalty income month by month</h2>
<p>The KDP reports dashboard shows sales by date, but your bank sees payments by marketplace two months later. Reconciling the two is the most common headache for authors at tax time. A simple system works:</p>
<ol>
<li><strong>Download the monthly report</strong> as soon as a month closes, before any adjustments for refunds.</li>
<li><strong>Record royalties by marketplace and format</strong>: eBook sales, KENP reads, paperback, hardcover and Expanded Distribution.</li>
<li><strong>Match each deposit</strong> to the month and marketplace it pays, noting any currency conversion difference.</li>
<li><strong>Track expenses in the same sheet</strong> (ads, editing, covers) so you can see net profit per title.</li>
<li><strong>Compare the year-end total to your 1099-MISC</strong> and investigate any gap, which is usually timing or currency.</li>
</ol>
<p>Authors who also earn from speaking, editing or ghostwriting have a second income stream that does need invoices. When a school or conference books you for a talk, send a proper invoice with your fee, travel costs and payment terms rather than relying on an email. The same applies to <a href="/blog/how-to-become-a-freelance-writer">freelance writing work</a> you take on between books.</p>

<h2>Common KDP royalty mistakes</h2>
<ul>
<li><strong>Pricing a paperback just under $9.99.</strong> The drop from 60% to 50% can wipe out most of the royalty once printing is subtracted.</li>
<li><strong>Ignoring delivery costs.</strong> A heavy illustrated eBook on the 70% option can earn less than it would at 35%.</li>
<li><strong>Reporting royalties when sold, not when received</strong>, without a consistent method. Most individual authors use the cash method and report when paid.</li>
<li><strong>Forgetting the timing gap</strong> between December sales and February payment when estimating taxes for the year.</li>
<li><strong>Mixing personal and book money.</strong> A separate account makes reconciliation and deductions much easier.</li>
</ul>
<p>If you publish across several platforms, KDP royalties are one stream among many. Our overview of <a href="/blog/passive-income-ideas-freelancers">passive income ideas for freelancers</a> compares books with courses, templates and other options, and <a href="/blog/tiktok-creator-taxes">TikTok creator taxes</a> covers similar reporting issues for social platforms.</p>

<p>For the paid work around your books, such as talks, workshops, editing and commissioned writing, use our <a href="/invoice-generator">free invoice generator</a>. There is no sign-up, and you can download a professional PDF invoice in a couple of minutes.</p>
`,
  },
  {
    slug: "print-on-demand-business",
    title: "Print on Demand Business: Costs, Margins and Pricing",
    description:
      "Start a print on demand business with real numbers: base costs, Etsy and Shopify fees, profit margins per product, pricing formulas, sales tax and invoicing.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-price-a-product", "etsy-invoice", "how-to-start-a-screen-printing-business"],
    faqs: [
      {
        q: "Is a print on demand business still profitable in 2026?",
        a: "It can be, but margins are thin compared with buying inventory in bulk. After the supplier's base cost, shipping and marketplace fees, many sellers keep 20% to 35% of the sale price before advertising. Profitable stores usually win on design, niche targeting and repeat customers rather than on price. Run the numbers per product before listing, and drop items that cannot clear your target margin after ads.",
      },
      {
        q: "How much does it cost to start print on demand?",
        a: "Most POD platforms charge nothing up front; you pay the base cost only when a customer orders. Your startup costs are usually design tools or designers, sample orders to check quality, and a storefront. An Etsy shop has no monthly fee but charges $0.20 per listing, while your own website costs a monthly subscription. A realistic starting budget for samples, a few designs and initial listings is a few hundred dollars.",
      },
      {
        q: "What is a good profit margin for print on demand?",
        a: "Many sellers aim for a gross margin of at least 30% to 40% after base cost, shipping and platform fees, leaving room for advertising and returns. Margins below 20% leave little room for paid ads or reprints. Premium niches, personalized items and bundles often support higher prices. Track margin per product, not just per order, because a few low-margin bestsellers can quietly drag down the whole shop.",
      },
      {
        q: "Do I need to collect sales tax on print on demand sales?",
        a: "On marketplaces such as Etsy, the marketplace generally collects and remits sales tax for you under marketplace facilitator laws. On your own store you are responsible once you have nexus in a state, which can come from economic sales thresholds. Your POD supplier may also charge you sales tax on base costs unless you give them a valid resale certificate for the states where you are registered.",
      },
      {
        q: "Do I need a business license for print on demand?",
        a: "Requirements vary by city, county and state. Many places require a general business license, and states with sales tax require a seller's permit if you sell taxable goods directly to customers. Even when you sell only on a marketplace, registering properly lets you use resale certificates with suppliers. Check your state revenue department and local licensing office before you launch.",
      },
      {
        q: "Will Etsy or Shopify report my print on demand income to the IRS?",
        a: "Payment platforms issue Form 1099-K when your payments exceed the federal threshold, which the One Big Beautiful Bill Act set back to more than $20,000 and more than 200 transactions. Some states use lower thresholds. Whether or not you receive a form, all profit from your POD business is taxable and must be reported, usually on Schedule C along with your business expenses.",
      },
    ],
    content: `
<p>A print on demand business sells custom-designed products, such as T-shirts, mugs, posters and phone cases, that a supplier prints and ships only after a customer orders. You never hold inventory, so startup costs are low, but every sale carries a base cost, shipping and platform fees that leave a typical margin of roughly 20% to 35% before advertising. Success comes down to pricing each product correctly and choosing niches where buyers will pay for the design.</p>

<p>This guide breaks down what a print on demand business really costs, works through a per-product margin calculation with current Etsy fees, shows a pricing formula you can reuse, and covers the tax and paperwork side, including when you need invoices.</p>

<h2>How a print on demand business works</h2>
<ol>
<li><strong>You create designs</strong> and upload them to a POD supplier such as Printful, Printify or Gelato.</li>
<li><strong>The supplier generates mockups</strong> and syncs listings to your storefront, such as Etsy, Shopify, WooCommerce or Amazon.</li>
<li><strong>A customer orders and pays you</strong> the retail price plus shipping.</li>
<li><strong>The supplier charges you</strong> the base cost and shipping, then prints and ships the item under your brand.</li>
<li><strong>You keep the difference</strong> after supplier costs, platform fees and advertising.</li>
</ol>
<p>The model is close to dropshipping, with the advantage that the product carries your own design. The trade-off is that you control neither production quality nor shipping speed, so supplier choice matters as much as the art.</p>

<h2>Print on demand business costs</h2>
<table><thead><tr><th>Cost</th><th>When you pay</th><th>Typical range or rule</th></tr></thead><tbody>
<tr><td>Product base cost</td><td>Per order</td><td>Varies by item and supplier; a basic tee often costs around $9 to $14</td></tr>
<tr><td>Supplier shipping</td><td>Per order</td><td>Usually a first-item rate plus a smaller additional-item rate</td></tr>
<tr><td>Etsy listing fee</td><td>Per listing, renews every 4 months or on sale</td><td>$0.20</td></tr>
<tr><td>Etsy transaction fee</td><td>Per sale</td><td>6.5% of the item price and shipping charged</td></tr>
<tr><td>Etsy payment processing (US)</td><td>Per sale</td><td>3% plus $0.25</td></tr>
<tr><td>Etsy Offsite Ads</td><td>Only on sales from those ads</td><td>12% to 15% of the order</td></tr>
<tr><td>Own store subscription</td><td>Monthly</td><td>Depends on platform and plan, plus card processing</td></tr>
<tr><td>Samples and designs</td><td>Up front</td><td>Order samples of every product you list</td></tr>
</tbody></table>
<p>Etsy figures above are the US rates reported for 2026 in this <a href="https://craftybase.com/blog/the-complete-guide-to-etsy-fees" target="_blank" rel="noopener noreferrer">Craftybase guide to Etsy fees</a>; check Etsy's own fee page before you set prices, because rates differ outside the US. Supplier base costs change often, so treat any number you read as a starting point and confirm it in your supplier dashboard.</p>

<h2>Worked example: margin on a single T-shirt</h2>
<p>Here is an illustrative Etsy sale of one T-shirt with free shipping built into the price.</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Sale price (shipping included)</td><td>$28.00</td></tr>
<tr><td>Supplier base cost</td><td>-$11.50</td></tr>
<tr><td>Supplier shipping</td><td>-$4.75</td></tr>
<tr><td>Etsy listing fee</td><td>-$0.20</td></tr>
<tr><td>Etsy transaction fee (6.5%)</td><td>-$1.82</td></tr>
<tr><td>Payment processing (3% + $0.25)</td><td>-$1.09</td></tr>
<tr><td><strong>Profit before ads</strong></td><td><strong>$8.64 (30.9%)</strong></td></tr>
<tr><td>Etsy Ads, averaged per sale</td><td>-$3.00</td></tr>
<tr><td><strong>Profit after ads</strong></td><td><strong>$5.64 (20.1%)</strong></td></tr>
</tbody></table>
<p>If the sale came through Offsite Ads at 15%, another $4.20 disappears and profit before other ads falls to about $4.44, or under 16%. Processing is charged on the total the buyer pays, so sales tax collected on the order adds a little to that fee as well. This is why experienced sellers price for the worst realistic case, not the best.</p>
<p>Now raise the price to $32. Fees rise slightly (transaction $2.08, processing $1.21), but profit before ads becomes $12.26, or 38.3%. A $4 price increase adds over 40% to profit per shirt, which shows how sensitive POD margins are to price.</p>

<h2>How to price print on demand products</h2>
<p>Work backward from your target margin instead of adding a fixed markup to the base cost. A simple formula:</p>
<p><strong>Price = (base cost + shipping + fixed fees) / (1 - percentage fees - target margin)</strong></p>
<p>Using the shirt above with a 30% target margin: fixed costs are $11.50 + $4.75 + $0.20 + $0.25 = $16.70. Percentage fees are 6.5% + 3% = 9.5%. So the price is $16.70 / (1 - 0.095 - 0.30) = $16.70 / 0.605, or about $27.60. Round to $27.99 or $28.</p>
<p>Some practical pricing rules:</p>
<ul>
<li><strong>Check margin vs markup.</strong> A 50% markup on cost is only a 33% margin. Our explainer on <a href="/blog/markup-vs-margin">markup vs margin</a> shows the conversion.</li>
<li><strong>Use psychological price points</strong> such as $24.99 or $29.99, then confirm the margin still holds.</li>
<li><strong>Price premium blanks higher.</strong> Heavier cotton, embroidery and all-over prints cost more and buyers expect to pay more.</li>
<li><strong>Bundle to raise order value.</strong> Supplier shipping on a second item is usually far cheaper than the first.</li>
</ul>
<p>For a deeper framework, see <a href="/blog/how-to-price-a-product">how to price a product</a>, and if you ever sell designs in bulk to shops, our guide to <a href="/blog/wholesale-pricing">wholesale pricing</a> explains how to leave room for a retailer's margin.</p>

<h2>Marketplace vs your own store</h2>
<table><thead><tr><th>Factor</th><th>Etsy or similar marketplace</th><th>Your own store (Shopify, WooCommerce)</th></tr></thead><tbody>
<tr><td>Traffic</td><td>Built-in buyers searching</td><td>You bring all traffic</td></tr>
<tr><td>Fees</td><td>Higher per-sale fees</td><td>Monthly plan plus card processing</td></tr>
<tr><td>Sales tax</td><td>Usually collected by the marketplace</td><td>Your responsibility once you have nexus</td></tr>
<tr><td>Customer data</td><td>Limited</td><td>Full email list and remarketing</td></tr>
<tr><td>Brand control</td><td>Limited</td><td>Complete</td></tr>
</tbody></table>
<p>Many sellers start on a marketplace to validate designs, then add their own store once they have proven products and an audience. If you go that route, our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoices for Shopify and WooCommerce</a> covers order documents.</p>

<h2>Sales tax, resale certificates and permits</h2>
<p>This is general information, not tax advice. Every US state with a statewide sales tax now has a marketplace facilitator law, so platforms like Etsy generally collect and remit tax on your marketplace sales. On your own website, you need to register and collect in states where you have <a href="/blog/sales-tax-nexus">sales tax nexus</a>.</p>
<p>A second trap is supplier tax. POD companies may charge you sales tax on the base cost of orders shipped to certain states. If you are registered in those states, you can usually provide a <a href="/blog/sales-tax-exemption-certificate">resale or exemption certificate</a> so you are not taxed twice. Registering for a <a href="/blog/sellers-permit">seller's permit</a> is the first step.</p>

<h2>Income tax and bookkeeping</h2>
<p>POD profit is self-employment income, normally reported on Schedule C. Deductible costs include base costs and shipping (as cost of goods sold), platform fees, ads, design software, samples and a share of internet and home office costs. Payment platforms report sales on Form 1099-K once you exceed $20,000 and 200 transactions in a year, but you must report income below that too.</p>
<p>Keep a monthly sheet that ties marketplace payouts to supplier charges. Payout reports net out fees, so record gross sales and fees separately or your income will look smaller than the 1099-K figure.</p>

<h2>When a print on demand seller needs invoices</h2>
<p>Marketplaces issue order receipts automatically, but you will need your own invoices for:</p>
<ul>
<li><strong>Bulk and custom orders</strong> from teams, schools, events and businesses that require an invoice for their accounts payable.</li>
<li><strong>Wholesale sales</strong> to boutiques or gift shops, usually on net 30 terms.</li>
<li><strong>Design commissions</strong> where a client pays you to create artwork, separate from the printed product.</li>
</ul>
<p>Our guide to the <a href="/blog/etsy-invoice">Etsy invoice</a> explains what marketplace documents include and when to issue your own. If bulk orders grow into a real line of business, compare the economics with traditional production in <a href="/blog/how-to-start-a-screen-printing-business">how to start a screen printing business</a>, where higher volume brings much lower unit costs.</p>

<h2>How to choose a print on demand supplier</h2>
<p>Your supplier is effectively your factory and warehouse, so compare more than the base price. Order the same product from two or three suppliers and judge them side by side:</p>
<ul>
<li><strong>Print quality and blanks.</strong> The same design can look sharp on one supplier's shirt and faded on another's. Check wash durability after a few cycles.</li>
<li><strong>Production and shipping time.</strong> Buyers compare you with fast-shipping retailers. Note how many business days each supplier takes before shipping and where its print facilities are relative to your customers.</li>
<li><strong>Shipping rates for multiple items.</strong> A cheap base cost can be undone by expensive additional-item shipping on bundle orders.</li>
<li><strong>Integrations.</strong> Confirm the supplier syncs reliably with your storefront, including variants, order status and tracking numbers.</li>
<li><strong>Reprint and refund policy.</strong> Know who pays when an item is misprinted, damaged or lost.</li>
<li><strong>Branding options.</strong> Custom labels, pack-ins and branded packing slips cost extra but help repeat sales.</li>
<li><strong>Paid plans.</strong> Some suppliers offer a monthly subscription that discounts base costs. Divide the fee by your monthly order count to see whether it actually saves money.</li>
</ul>
<p>Many sellers end up using two suppliers: one with the best quality for core products and another for items the first does not offer or for faster delivery to a particular region.</p>

<h2>How to scale once products are selling</h2>
<ol>
<li><strong>Find your winners.</strong> Usually a small share of designs drives most profit. Identify them from 60 to 90 days of sales data.</li>
<li><strong>Expand winners sideways</strong> into new colors, products and niche variations rather than adding random new designs.</li>
<li><strong>Raise average order value</strong> with bundles and free-shipping thresholds.</li>
<li><strong>Test price increases</strong> on your best sellers in small steps.</li>
<li><strong>Consider bulk production</strong> for products that sell in volume, where screen printing or embroidery in batches can cut unit cost sharply.</li>
</ol>

<h2>Common print on demand mistakes</h2>
<ul>
<li><strong>Skipping samples.</strong> Colors and print quality on screen rarely match the real product.</li>
<li><strong>Pricing from base cost alone</strong> and forgetting shipping, fees and ads.</li>
<li><strong>Using trademarked or copyrighted material.</strong> Infringing listings get removed and repeat violations can close a shop.</li>
<li><strong>Listing hundreds of products</strong> before any of them has proven demand.</li>
<li><strong>Ignoring returns and reprints.</strong> Budget a few percent of sales for misprints and lost parcels.</li>
</ul>

<p>When a team order, wholesale buyer or design client asks for an invoice, create one in minutes with our <a href="/invoice-generator">free invoice generator</a>. No sign-up is needed, and you can download a clean PDF invoice ready to send.</p>
`,
  },
  {
    slug: "passive-income-ideas-freelancers",
    title: "Passive Income Ideas for Freelancers (Realistic Options)",
    description:
      "Realistic passive income ideas for freelancers: templates, courses, eBooks, licensing and productized services, with platform fees, worked numbers and tax notes.",
    category: "freelancing",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-become-a-freelancer", "side-hustle-taxes", "retainer-invoice"],
    faqs: [
      {
        q: "What is the easiest passive income for a freelancer to start?",
        a: "Digital templates and resources based on work you already do are usually the easiest. A designer can sell brand kits, a bookkeeper can sell spreadsheet templates, and a developer can sell code snippets or plugins. They need no inventory, can be listed on Etsy or Gumroad within days, and reuse your existing skills. Expect to spend 10 to 40 hours building the first product properly before any income arrives.",
      },
      {
        q: "How much passive income can a freelancer realistically make?",
        a: "Most freelancers who try earn a modest supplement at first, often from tens to a few hundred dollars a month per product in the first year. A minority build products that replace a meaningful share of client income, usually after several launches and an audience to sell to. Treat the first product as an experiment, measure hours invested against monthly profit, and scale what works.",
      },
      {
        q: "Is passive income really passive?",
        a: "Not entirely. Building the product takes concentrated work, and keeping it selling requires updates, customer support, marketing and platform changes. A better term is leveraged income: you do the work once and get paid many times. Income from templates or courses can run with a few hours a month of maintenance, but expect sales to fade if you stop promoting entirely.",
      },
      {
        q: "Do I pay self-employment tax on passive income from digital products?",
        a: "Generally yes. In the US, income from selling digital products you create is business income reported on Schedule C, and net profit is subject to self-employment tax as well as income tax. The tax term passive activity means something narrower, mainly rental activities and businesses you do not materially participate in. This is general information, so check your situation with a tax professional.",
      },
      {
        q: "Should I sell on a marketplace or my own website?",
        a: "Marketplaces such as Etsy, Udemy and Amazon bring buyers but take a larger cut and control the customer relationship. Your own site or a creator platform keeps more of each sale and lets you build an email list, but you must drive all the traffic. Many freelancers start on a marketplace to test demand, then move their best products to their own site once they have an audience.",
      },
      {
        q: "Can passive income hurt my freelance business?",
        a: "It can if it pulls time from paying clients before it earns anything. Set a fixed weekly time budget, such as four hours, and protect client deadlines first. Products that grow from your services tend to help rather than hurt, because they attract leads and show expertise. Products unrelated to your work split your focus and are harder to market to people who already know you.",
      },
    ],
    content: `
<p>The most realistic passive income ideas for freelancers are products built from skills you already sell: templates, digital tools, online courses, eBooks, licensed work and productized services. None of them are truly hands-off, but each lets you do the work once and get paid repeatedly, which smooths out the feast-and-famine cycle of client work. Expect a slow start, platform fees of roughly 10% to 63% depending on where you sell, and full tax on the profit.</p>

<p>Freelancers trade time for money. That works until you get sick, take a vacation or lose a big client. A small stream of product income will not replace client work in a few months, but built carefully it can cover fixed costs and give you breathing room. This guide compares realistic options with real platform fees, works through the numbers on a template product, and explains how to avoid letting side projects damage your main business.</p>

<h2>Passive income ideas that fit freelancers</h2>
<table><thead><tr><th>Idea</th><th>Best for</th><th>Upfront effort</th><th>Typical platform cut</th><th>Ongoing work</th></tr></thead><tbody>
<tr><td>Templates and digital downloads</td><td>Designers, marketers, bookkeepers, writers</td><td>Low to medium</td><td>About 10% on Etsy; around 10% plus $0.50 on Gumroad direct sales</td><td>Low</td></tr>
<tr><td>Online courses</td><td>Any expert who can teach a process</td><td>High</td><td>Udemy keeps 63% of organic marketplace sales</td><td>Medium</td></tr>
<tr><td>eBooks and guides</td><td>Writers, consultants</td><td>Medium to high</td><td>KDP pays 35% or 70% on eBooks</td><td>Low to medium</td></tr>
<tr><td>Stock and licensing</td><td>Photographers, illustrators, musicians</td><td>Medium</td><td>Varies widely by agency</td><td>Low</td></tr>
<tr><td>Software, plugins, tools</td><td>Developers</td><td>High</td><td>Payment processing or app store fees</td><td>Medium to high</td></tr>
<tr><td>Print on demand</td><td>Designers, illustrators</td><td>Low</td><td>Supplier costs plus marketplace fees</td><td>Medium</td></tr>
<tr><td>Affiliate income</td><td>Freelancers with an audience or blog</td><td>Medium</td><td>Commission set by each program</td><td>Medium</td></tr>
<tr><td>Productized services</td><td>Anyone with a repeatable deliverable</td><td>Low</td><td>None beyond processing</td><td>Semi-passive</td></tr>
</tbody></table>

<h3>1. Templates and digital downloads</h3>
<p>This is where most freelancers should start. Turn the documents and files you build for clients into generic, polished products: brand style guides, social media templates, proposal templates, budgeting spreadsheets, Notion dashboards, contract checklists or code starter kits. On Etsy, digital downloads carry the same $0.20 listing fee, 6.5% transaction fee and 3% plus $0.25 processing fee as physical items.</p>

<h3>2. Online courses</h3>
<p>Courses can sell for much more than templates but take far longer to build and need regular updates. Marketplace splits are steep. Udemy's <a href="https://support.udemy.com/hc/articles/229605008-Instructor-revenue-share" target="_blank" rel="noopener noreferrer">instructor revenue share page</a> sets instructors' share at 37% for organic marketplace sales and 97% when the student buys through the instructor's own coupon or referral link, while subscription revenue is paid from a pool that dropped to 15% in 2026. Hosting a course on your own platform keeps more revenue but means you handle all marketing.</p>

<h3>3. eBooks and practical guides</h3>
<p>A focused guide that solves one problem, such as "Bookkeeping for Etsy Sellers", can sell steadily for years. Our guide to <a href="/blog/amazon-kdp-royalties">Amazon KDP royalties</a> explains the 35% and 70% eBook options and what paperbacks really earn.</p>

<h3>4. Stock, licensing and print on demand</h3>
<p>Photographers, illustrators and musicians can license existing work through stock agencies, or apply designs to products through a <a href="/blog/print-on-demand-business">print on demand business</a>. Earnings per item are small, so this works best for creators who already have large back catalogs.</p>

<h3>5. Software and tools</h3>
<p>Developers can sell plugins, themes, scripts or small SaaS tools. These can produce the most recurring revenue, but also carry the most support burden. If you sell subscriptions, a <a href="/blog/saas-subscription-invoice-template">SaaS subscription invoice template</a> helps with business customers who need invoices for their records.</p>

<h3>6. Productized and retainer services</h3>
<p>Not passive, but leveraged. A fixed-scope, fixed-price offer, such as a monthly SEO report or a website care plan, is sold and delivered the same way each time. Combined with a <a href="/blog/retainer-invoice">retainer invoice</a>, it turns irregular project income into predictable monthly revenue with far less selling effort.</p>

<h2>Worked example: a spreadsheet template on Etsy</h2>
<p>Illustrative numbers for a bookkeeper who builds a small-business expense tracker:</p>
<ul>
<li><strong>Build time:</strong> 30 hours, including design, instructions, a video walkthrough and listing photos.</li>
<li><strong>Price:</strong> $12.</li>
<li><strong>Etsy fees per sale:</strong> $0.20 listing + $0.78 transaction (6.5%) + $0.61 processing (3% + $0.25) = $1.59.</li>
<li><strong>Profit per sale:</strong> $10.41.</li>
<li><strong>Sales:</strong> 40 a month after the first three months.</li>
<li><strong>Monthly profit:</strong> 40 x $10.41 = $416.40 before ads and taxes.</li>
</ul>
<p>If the template takes two hours a month to maintain (answering questions, small updates), the first year looks roughly like this: 30 hours to build plus 24 hours of upkeep, against about nine months of full sales, or $3,747.60. That is about $69 per hour invested, competitive with many client rates, and the second year needs only the upkeep hours. Compare that against your own hourly rate, worked out with our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>, before deciding whether to build a second product.</p>
<p>The same template could also be the lead magnet that wins bookkeeping clients, which is often worth more than the product sales themselves.</p>

<h2>How to choose the right passive income idea</h2>
<ol>
<li><strong>List what clients repeatedly ask for.</strong> Questions you answer every week are product ideas.</li>
<li><strong>Check demand.</strong> Search Etsy, Gumroad, Udemy and Amazon for similar products and read their reviews for gaps.</li>
<li><strong>Estimate hours and fees.</strong> Use the platform's fee structure to calculate profit per sale, then the number of sales needed to justify the build time.</li>
<li><strong>Build a minimum version.</strong> Ship a useful first product in weeks, not months.</li>
<li><strong>Promote to your existing network</strong>: past clients, email list, LinkedIn and portfolio site.</li>
<li><strong>Review after 90 days.</strong> Keep, improve or retire the product based on profit per hour.</li>
</ol>

<h2>Taxes on freelancer passive income</h2>
<p>This is general information, not tax advice. In the US, profit from products you create and sell is generally business income on Schedule C, subject to income tax and <a href="/blog/self-employment-tax">self-employment tax</a>, just like client fees. The tax code's "passive activity" label mostly applies to rentals and businesses you do not materially participate in, so most product income from your own work is not passive for tax purposes.</p>
<p>Product income also counts toward platform reporting. Payment apps and marketplaces issue Form 1099-K above $20,000 and 200 transactions, and royalty payers issue Form 1099-MISC from $10. Add product income to your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>, and see <a href="/blog/side-hustle-taxes">side hustle taxes</a> for how extra income streams combine with your main work. If you sell digital products to buyers outside the US, check whether the platform collects VAT or GST for you.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Building in secret for months.</strong> Validate demand with a waitlist or presale first.</li>
<li><strong>Choosing ideas unrelated to your skills.</strong> You lose your built-in audience and credibility.</li>
<li><strong>Underpricing.</strong> Low prices attract demanding buyers and make profit per hour poor.</li>
<li><strong>Neglecting client work.</strong> Protect deadlines first; a lost retainer costs more than a slow product launch.</li>
<li><strong>Burning out.</strong> Building products on top of a full client load is a fast route to burnout. Set a fixed weekly time budget.</li>
<li><strong>Mixing records.</strong> Track product sales and fees separately from client invoices so you can see what each stream earns.</li>
</ul>

<h2>A 90-day plan to launch your first product</h2>
<p>A deadline keeps a product from becoming a permanent side project. Here is a realistic plan for a freelancer with about four to six spare hours a week:</p>
<table><thead><tr><th>Weeks</th><th>Focus</th><th>Output</th></tr></thead><tbody>
<tr><td>1 to 2</td><td>Idea and validation</td><td>Three product ideas from client questions; competitor research; one chosen idea</td></tr>
<tr><td>3 to 4</td><td>Presell or waitlist</td><td>Short sales page or post to your network; target at least 10 sign-ups or a few presales</td></tr>
<tr><td>5 to 8</td><td>Build version one</td><td>Finished product, instructions and listing images</td></tr>
<tr><td>9</td><td>Launch</td><td>Listing live; email to past clients and contacts; social posts</td></tr>
<tr><td>10 to 12</td><td>Feedback and fixes</td><td>Answer questions, add an FAQ, improve the listing photos and title</td></tr>
<tr><td>13</td><td>Review</td><td>Profit per hour calculated; decision to scale, improve or stop</td></tr>
</tbody></table>
<p>If validation in weeks three and four produces almost no interest, pick a different idea before building. That single checkpoint saves more wasted hours than anything else on this list.</p>

<h3>Pricing your first product</h3>
<p>Freelancers tend to underprice products just as they underprice services. Price according to the value of the result, not the hours it took to build. A contract template that saves a small agency a lawyer's review is worth more than a generic one, and a course that helps someone win their first client can command far more than a book on the same topic. Start a little higher than feels comfortable; you can always run a launch discount.</p>

<h2>Where invoicing still fits</h2>
<p>Even product income creates invoicing work. Businesses that buy team licenses for templates, organizations that book you for workshops based on your course, and companies that license your photos will often ask for a formal invoice with a license description, quantity and payment terms. Treat those like any client job, with clear invoice numbers and a record of what rights you granted. For a license, name the product, the number of users or seats, the permitted use and the license period on the invoice itself, so both sides have a record if the client later wants to expand the license or a question about usage comes up.</p>

<p>For licenses, workshops, retainers and client projects alike, create invoices with our <a href="/invoice-generator">free invoice generator</a>. There is no sign-up, and every invoice downloads as a ready-to-send PDF.</p>
`,
  },
  {
    slug: "self-employed-mortgage",
    title: "Self-Employed Mortgage: How to Prove Income With Invoices",
    description:
      "Get a self-employed mortgage: how lenders calculate your income from tax returns, what documents they want, where invoices help, and bank statement loan options.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["profit-and-loss-statement", "schedule-c-for-freelancers", "how-to-calculate-net-income"],
    faqs: [
      {
        q: "Can I get a mortgage with one year of self-employment?",
        a: "Sometimes. Under Fannie Mae guidelines, a borrower with less than two years of self-employment may qualify if the most recent tax returns show a full 12 months of income from the current business and the borrower previously earned the same or more in the same field or a similar occupation. Lenders also weigh experience and business debt. Some lenders add stricter overlays, so ask several before assuming the answer is no.",
      },
      {
        q: "Do mortgage lenders use gross or net self-employed income?",
        a: "Conventional and government-backed lenders use net income from your tax returns, not gross revenue or invoice totals. They start with Schedule C net profit or business income and add back certain non-cash deductions such as depreciation and business use of your home. Big write-offs that lowered your tax bill also lower the income a lender can count, which is the biggest surprise for many self-employed applicants.",
      },
      {
        q: "Can invoices be used as proof of income for a mortgage?",
        a: "Invoices on their own rarely qualify you for a conventional loan, because underwriters rely on tax returns and IRS transcripts. Invoices are still valuable supporting evidence. They explain large deposits, show that income is continuing in the current year, back up a year-to-date profit and loss statement, and help prove that a new contract or client is real. Organized, numbered invoices make underwriting questions faster to answer.",
      },
      {
        q: "What is a bank statement mortgage loan?",
        a: "A bank statement loan is a non-qualified mortgage that calculates income from 12 or 24 months of personal or business bank deposits instead of tax returns. Lenders typically apply an expense factor to business deposits. These loans help borrowers whose tax returns show low income after deductions, but they usually carry higher rates, larger down payments and stricter reserve requirements than conventional loans.",
      },
      {
        q: "What happens if my self-employed income dropped last year?",
        a: "Underwriters analyze the trend in your income. If the most recent year is lower than the prior year, many lenders use the lower year or require an explanation showing the decline has stabilized. A significant or ongoing decline can make the income unusable. A current year-to-date profit and loss statement and a letter explaining one-off causes, such as a lost client that has since been replaced, can help.",
      },
      {
        q: "Should I reduce my tax deductions before applying for a mortgage?",
        a: "Some self-employed borrowers choose to claim fewer discretionary deductions in the two years before buying, which raises qualifying income but also raises their tax bill. Never skip legitimate deductions without running the numbers. A tax professional and a loan officer together can estimate how much extra income you would need to show and whether the added tax is worth the better loan terms.",
      },
    ],
    content: `
<p>To get a self-employed mortgage, you usually need two years of tax returns showing stable or rising income, because lenders qualify you on the net profit the IRS sees, not on what you invoice. Your invoices, bank statements and a year-to-date profit and loss statement then back up that history and show the income is continuing. If your tax returns show too little income after deductions, a bank statement loan is the main alternative.</p>

<p>Being self-employed does not make you a worse borrower, but it does make you a more documented one. This guide explains how lenders calculate self-employed income, what they ask for, where invoices genuinely help, and how to prepare your paperwork a year before you apply.</p>

<h2>How lenders calculate self-employed mortgage income</h2>
<p>Most US mortgages follow the guidelines of Fannie Mae, Freddie Mac, the FHA or the VA. Fannie Mae's <a href="https://selling-guide.fanniemae.com/sel/b3-3.2-01/underwriting-factors-and-documentation-self-employed-borrower" target="_blank" rel="noopener noreferrer">Selling Guide section on self-employed borrowers</a> sets the standard most lenders know best:</p>
<ul>
<li>Anyone with an ownership interest of 25% or more in a business is treated as self-employed.</li>
<li>Lenders generally want a two-year history of self-employment income.</li>
<li>Income is analyzed from signed personal and business federal tax returns, or IRS transcripts, for the most recent two years.</li>
<li>The lender completes a cash flow analysis, often Fannie Mae Form 1084, and looks at the trend in gross income, expenses and taxable income.</li>
</ul>
<p>The cash flow analysis starts with your net profit from Schedule C (or K-1 income from a partnership or S corporation) and adds back certain non-cash or one-off deductions, such as depreciation and the business-use-of-home deduction. The result, averaged over the qualifying period, becomes your monthly income for the debt-to-income ratio.</p>

<h3>Exceptions to the two-year rule</h3>
<table><thead><tr><th>Situation</th><th>What Fannie Mae allows</th></tr></thead><tbody>
<tr><td>Self-employed for less than two years</td><td>May qualify if the latest returns show 12 full months of income from the business and you previously earned the same or more in the same or a similar field</td></tr>
<tr><td>Business in existence five years or more, 25%+ ownership for five years</td><td>Lender may use one year of personal and business returns</td></tr>
<tr><td>Two years of personal returns, five years in the same business, income increasing</td><td>Business returns can be waived if personal funds cover down payment, closing costs and reserves</td></tr>
</tbody></table>
<p>Individual lenders can add stricter rules, known as overlays, so a no from one lender is not always a no from all of them.</p>

<h2>Worked example: qualifying income from Schedule C</h2>
<p>An illustrative freelance designer files Schedule C as a sole proprietor:</p>
<table><thead><tr><th>Item</th><th>2024</th><th>2025</th></tr></thead><tbody>
<tr><td>Gross receipts (invoiced and paid)</td><td>$124,000</td><td>$131,000</td></tr>
<tr><td>Schedule C net profit</td><td>$78,000</td><td>$86,000</td></tr>
<tr><td>Add back: depreciation</td><td>$3,500</td><td>$4,000</td></tr>
<tr><td>Add back: business use of home</td><td>$2,400</td><td>$2,500</td></tr>
<tr><td><strong>Qualifying income</strong></td><td><strong>$83,900</strong></td><td><strong>$92,500</strong></td></tr>
</tbody></table>
<p>Income is rising, so the lender averages the two years: ($83,900 + $92,500) / 2 = $88,200 a year, or $7,350 a month. If the designer's proposed housing payment plus other monthly debts came to $3,300, the debt-to-income ratio would be about 45%. Many lenders cap conventional loans around 45% to 50% depending on the automated underwriting result, so this borrower is near the edge.</p>
<p>Notice what does not count: the $131,000 of invoices. The $45,000 gap between gross receipts and net profit is why self-employed borrowers often qualify for less than they expect. If 2025 had instead dropped to $70,000, the lender would likely use the lower year or question the trend.</p>

<h2>Documents you need for a self-employed mortgage</h2>
<table><thead><tr><th>Document</th><th>Why the lender wants it</th></tr></thead><tbody>
<tr><td>Personal tax returns, two years, all schedules</td><td>Primary source of qualifying income</td></tr>
<tr><td>Business tax returns (partnership, S corp, C corp)</td><td>Business income and stability, unless waived</td></tr>
<tr><td>Signed IRS Form 4506-C</td><td>Lets the lender pull transcripts to verify returns</td></tr>
<tr><td>Year-to-date profit and loss statement</td><td>Shows current-year income is continuing</td></tr>
<tr><td>Business and personal bank statements, usually two months</td><td>Assets, reserves and source of large deposits</td></tr>
<tr><td>Business license, CPA letter or website</td><td>Confirms the business exists and is active</td></tr>
<tr><td>Invoices, contracts and 1099s</td><td>Support deposits, new income and continuity</td></tr>
</tbody></table>
<p>A clean <a href="/blog/profit-and-loss-statement">profit and loss statement</a> matters more than many applicants realize. If you are not sure how net profit is calculated, our guide to <a href="/blog/how-to-calculate-net-income">how to calculate net income</a> walks through it.</p>

<h2>How invoices help you prove income</h2>
<p>Underwriters do not qualify you from invoices alone, but invoices answer the questions that slow loans down:</p>
<ul>
<li><strong>Sourcing large deposits.</strong> Any deposit that looks unusual compared with your income must be explained. A numbered invoice that matches the deposit amount and client name usually settles it.</li>
<li><strong>Proving continuity.</strong> Invoices dated in the current year, especially to recurring clients, show the business is still producing income.</li>
<li><strong>Supporting a P&amp;L.</strong> Totals from paid invoices reconcile to the revenue line of your year-to-date statement.</li>
<li><strong>Documenting new contracts.</strong> A signed contract plus the first invoices can support a recent rate increase or a new retainer.</li>
</ul>
<p>Keep invoices consistent: sequential numbers, your business name, client details, dates, amounts and payment status. A <a href="/blog/paid-invoice-template">paid invoice</a> marked with the payment date and method is easier for an underwriter to match to a bank statement. Running all client payments through a dedicated <a href="/blog/business-bank-account-for-freelancers">business bank account</a> makes the trail even clearer.</p>

<h2>Bank statement loans and other alternatives</h2>
<p>If your tax returns show low income because of large deductions, consider these options:</p>
<ul>
<li><strong>Bank statement loans.</strong> Non-qualified mortgages that calculate income from 12 or 24 months of deposits, usually after applying an expense factor. Expect higher rates and down payments.</li>
<li><strong>1099-only loans.</strong> Some non-QM lenders qualify contractors from one or two years of 1099 forms.</li>
<li><strong>Asset depletion loans.</strong> Qualify based on liquid assets rather than income.</li>
<li><strong>Adding a co-borrower</strong> with W-2 income.</li>
<li><strong>Waiting a year</strong> and filing a return that shows more income.</li>
</ul>
<p>For bank statement loans, every deposit becomes evidence, which makes clean invoicing and separate accounts even more important. Transfers between your own accounts and personal deposits are excluded, so mixing funds lowers your calculated income.</p>

<h2>How to prepare a year before you apply</h2>
<ol>
<li><strong>Talk to a loan officer early</strong> to learn exactly how they would calculate your income.</li>
<li><strong>Review deductions with your tax preparer.</strong> Understand which ones lower qualifying income and which are added back.</li>
<li><strong>File returns on time.</strong> An extension can delay a loan if the lender needs the latest year.</li>
<li><strong>Separate business and personal money</strong> and stop depositing cash you cannot document.</li>
<li><strong>Keep your books current</strong>, with a monthly <a href="/blog/bank-reconciliation">bank reconciliation</a> and an up-to-date P&amp;L.</li>
<li><strong>Stay current on estimated taxes.</strong> Unpaid tax balances or IRS payment plans can complicate approval; see <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>.</li>
<li><strong>Avoid new debt</strong>, such as equipment loans or a new car, in the months before applying.</li>
</ol>

<h2>LLC, partnership and S corporation owners</h2>
<p>Your business structure changes which documents the lender reads:</p>
<ul>
<li><strong>Sole proprietors and single-member LLCs</strong> taxed as disregarded entities report everything on Schedule C, so the personal return is the key document.</li>
<li><strong>Partnerships and multi-member LLCs</strong> pass income through Schedule K-1. Lenders review the K-1s and often the partnership return, and may need evidence that the business has enough liquidity to support the income you draw.</li>
<li><strong>S corporation owners</strong> usually have two income pieces: the W-2 salary the company pays them and their share of profit on the K-1. Underwriters look at both, plus the corporate return, unless business returns can be waived.</li>
</ul>
<p>If you are considering a change, such as electing S corporation status, talk to your loan officer first. A new structure can mean the lender looks at a shorter history for the new entity.</p>

<h2>Writing a letter of explanation</h2>
<p>Underwriters often ask for a short letter explaining something in your file: a drop in income, a gap in work, a large deposit or a new line of business. Keep it factual and brief:</p>
<ol>
<li>State what the lender asked about, in one sentence.</li>
<li>Explain the cause with dates and amounts.</li>
<li>Show why it is resolved or will not recur, such as a replacement client under contract.</li>
<li>List the documents attached, such as the contract and the invoices issued under it.</li>
<li>Sign and date it.</li>
</ol>
<p>For example: "My 2025 net profit fell to $71,000, from $88,000 in 2024, because a major client ended its contract in March 2025. I signed a replacement retainer in June 2025 at $4,000 a month. Attached are the contract and the invoices paid from July 2025 to September 2026."</p>

<h2>Common mistakes self-employed borrowers make</h2>
<ul>
<li><strong>Quoting gross revenue</strong> as income on the application, which leads to a pre-approval that collapses at underwriting.</li>
<li><strong>Changing business structure mid-process</strong>, such as converting to an S corporation, which can reset the history lenders look at.</li>
<li><strong>Undocumented cash deposits</strong> that cannot be used toward the down payment.</li>
<li><strong>Missing pages or schedules</strong> from tax returns.</li>
<li><strong>Ignoring a declining year</strong> instead of explaining it with a letter and a strong year-to-date P&amp;L.</li>
</ul>
<p>Many lenders also ask for a written explanation or a <a href="/blog/proof-of-income-letter">proof of income letter</a>, which you can support with the same invoices and statements. This is general information, not financial or legal advice; your loan officer and tax preparer can tell you how the rules apply to you.</p>

<p>Clear, numbered invoices make every one of these steps easier. Create them with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download each one as a PDF for your records and your lender.</p>
`,
  },
  {
    slug: "proof-of-income-letter",
    title: "Proof of Income Letter for Self-Employed (Template)",
    description:
      "Write a proof of income letter when you are self-employed: free template, what to include, supporting documents like invoices and IRS transcripts, and examples.",
    category: "freelancing",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["profit-and-loss-statement", "paid-invoice-template", "statement-of-account"],
    faqs: [
      {
        q: "Can I write my own proof of income letter if I am self-employed?",
        a: "Yes. A self-employed person can write a signed self-declaration of income, and many landlords and some agencies accept it, especially when it is supported by documents. Because you are vouching for yourself, attach evidence such as tax returns, IRS transcripts, a profit and loss statement, bank statements, 1099 forms and recent invoices. Some lenders and government programs also ask for a letter from your accountant or a client instead.",
      },
      {
        q: "What documents prove income when you are self-employed?",
        a: "The strongest proof is your filed tax returns with Schedule C or an IRS tax return transcript, followed by Forms 1099 from clients and platforms. For current income, use a year-to-date profit and loss statement, recent business bank statements, signed contracts and paid invoices. Combining a summary letter with these documents gives the reader both the big picture and the evidence behind it.",
      },
      {
        q: "Will a landlord accept invoices as proof of income?",
        a: "Many landlords accept invoices as part of a proof of income package, particularly paid invoices that match deposits on your bank statements. Invoices alone can look unverified, so pair them with bank statements and your last tax return. A short letter summarizing average monthly income, with the invoices and statements attached, is usually more persuasive than a stack of documents with no explanation.",
      },
      {
        q: "Can my accountant write a proof of income letter?",
        a: "An accountant may provide a letter confirming that they prepared your tax returns or that you have been self-employed for a stated period. Many CPAs are cautious about letters that vouch for future income or business stability, because of professional liability, and some will only confirm facts from filed returns. Ask early, explain who the letter is for, and expect a fee for preparing it.",
      },
      {
        q: "How do I get an IRS tax transcript to prove income?",
        a: "Sign in to your IRS Individual Online Account to view and download transcripts for the current year and three prior years. You can also order by phone or by mailing Form 4506-T. Transcripts are free. A tax return transcript shows most line items from your original return, and a wage and income transcript lists the W-2 and 1099 forms the IRS received for you.",
      },
      {
        q: "How should I calculate monthly income for a proof of income letter?",
        a: "Use a method the reader can verify. For an established business, divide last year's net profit from Schedule C by 12. For current income, total the net profit or paid invoices year to date and divide by the number of months elapsed. State which method you used, whether the figure is gross or net, and the period it covers, so the numbers match the attached documents.",
      },
    ],
    content: `
<p>A proof of income letter for self-employed people is a signed statement that summarizes how you earn money, how much you earn and over what period, backed by documents such as tax returns, bank statements and paid invoices. Since there is no employer to confirm your pay, you either write the letter yourself as a self-declaration or ask an accountant or major client to provide one. The template below covers both versions.</p>

<p>Landlords, lenders, car dealers, immigration offices, benefits programs and even daycare providers may ask for proof of income. Employees hand over a pay stub. Freelancers, contractors and small business owners need to build their own evidence, and a clear letter that points to verifiable documents makes approval much faster.</p>

<h2>What a proof of income letter for self-employed workers should include</h2>
<ul>
<li><strong>Your full name, address and contact details</strong>, and your business name if you use one.</li>
<li><strong>The date</strong> and the recipient (landlord, lender or agency name).</li>
<li><strong>A description of your work</strong>: what you do, your business structure and how long you have been self-employed.</li>
<li><strong>Your income</strong>: a monthly or annual figure, stating whether it is gross or net and the period it covers.</li>
<li><strong>How income is earned</strong>: number of clients, recurring contracts or retainers, and payment frequency.</li>
<li><strong>A list of attached documents</strong> that support the figures.</li>
<li><strong>A statement that the information is true</strong> and your signature.</li>
</ul>
<p>Keep the letter to one page. The reader wants the numbers, the period and the proof, not your life story.</p>

<h2>Proof of income letter template (self-declaration)</h2>
<p>Copy this into your own letterhead (see our <a href="/blog/letterhead-template">letterhead template guide</a>) and replace the bracketed text:</p>
<p>[Your Name]<br>[Business Name, if any]<br>[Address] | [Phone] | [Email]</p>
<p>[Date]</p>
<p>To: [Recipient name and organization]</p>
<p><strong>Re: Proof of income for [Your Name]</strong></p>
<p>I am writing to confirm my income as a self-employed [occupation, e.g. freelance graphic designer]. I have operated my business, [Business Name], as a [sole proprietor / single-member LLC] since [month and year]. I provide [brief description of services] to [number] active clients, including [number] on monthly retainers.</p>
<p>For the [tax year], my business reported gross receipts of [$amount] and net profit of [$amount] on my federal tax return. From [January 1] to [date] this year, I have received [$amount] in paid invoices, an average of [$amount] per month.</p>
<p>The following documents are attached to support this statement: [list, e.g. tax return transcript, year-to-date profit and loss statement, three months of business bank statements, client contracts, recent paid invoices].</p>
<p>I confirm the information in this letter is true and accurate to the best of my knowledge. Please contact me at [phone/email] if you need further information.</p>
<p>Sincerely,<br>[Signature]<br>[Printed name]</p>

<h3>Version for an accountant or client</h3>
<p>If a third party writes the letter, the structure is similar but in their voice: who they are, how they know you, the facts they can confirm and the period covered. A client might confirm "has provided bookkeeping services to our company since March 2024 under a monthly retainer of $2,500, paid on time." An accountant usually confirms only what they can verify from filed returns, such as the net profit reported in a given year.</p>

<h2>Supporting documents: what counts as proof</h2>
<table><thead><tr><th>Document</th><th>What it proves</th><th>Strength</th></tr></thead><tbody>
<tr><td>Tax return with Schedule C, or IRS tax return transcript</td><td>Annual net income reported to the IRS</td><td>Very strong</td></tr>
<tr><td>Forms 1099-NEC, 1099-MISC or 1099-K</td><td>Payments from clients and platforms</td><td>Strong, but gross only</td></tr>
<tr><td>Year-to-date profit and loss statement</td><td>Current income and expenses</td><td>Medium; stronger if prepared by a bookkeeper</td></tr>
<tr><td>Business bank statements (3 to 12 months)</td><td>Actual deposits received</td><td>Strong</td></tr>
<tr><td>Paid invoices</td><td>Which client paid what, and when</td><td>Medium alone; strong with matching bank deposits</td></tr>
<tr><td>Client contracts and retainer agreements</td><td>Future income that is already committed</td><td>Medium</td></tr>
<tr><td>Statement of account from a major client</td><td>Running balance and payment history</td><td>Medium</td></tr>
</tbody></table>
<p>You can download transcripts free through your IRS online account or by filing Form 4506-T. The IRS explains each option on its <a href="https://www.irs.gov/individuals/transcript-types-for-individuals-and-ways-to-order-them" target="_blank" rel="noopener noreferrer">transcript types and ordering page</a>. A wage and income transcript also lists the 1099 forms clients filed for you, which is useful corroboration. Note that from 2026, clients only have to file Form 1099-NEC once they pay you $2,000 or more, so smaller clients may not appear; see our article on the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a>.</p>

<h2>Worked example: calculating income for the letter</h2>
<p>An illustrative freelance copywriter applies for an apartment in October 2026. The landlord wants monthly income of at least three times the $1,800 rent, or $5,400.</p>
<ul>
<li><strong>2025 tax return:</strong> gross receipts $79,200; Schedule C net profit $61,800, or $5,150 a month.</li>
<li><strong>2026 paid invoices, January to September:</strong> $54,300, or $6,033 a month on average.</li>
<li><strong>2026 business expenses to date:</strong> $6,900, so year-to-date net profit is $47,400, or $5,267 a month.</li>
</ul>
<p>Last year's net profit alone falls short of $5,400. The stronger letter states both: net profit last year of $61,800, and current-year gross receipts averaging $6,033 a month from paid invoices, with net profit tracking above last year. Attaching a <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, three months of bank statements and the September invoices lets the landlord check every figure. Being explicit about gross and net avoids the impression that you are inflating income.</p>

<h2>How to put the package together, step by step</h2>
<ol>
<li><strong>Ask what the recipient accepts.</strong> Some landlords want only bank statements; lenders follow strict rules; benefit programs may have their own forms.</li>
<li><strong>Pull your tax documents</strong>: last year's return or transcript and any 1099s.</li>
<li><strong>Update your books</strong> and run a year-to-date P&amp;L.</li>
<li><strong>Gather paid invoices</strong> for the recent period. Mark each as paid with the date and method, as shown in our <a href="/blog/paid-invoice-template">paid invoice template</a> guide.</li>
<li><strong>Match invoices to bank deposits</strong> and highlight them on the statements.</li>
<li><strong>Write and sign the letter</strong>, with figures that match the attachments exactly.</li>
<li><strong>Remove sensitive details</strong> the reader does not need, such as full account numbers or client rates unrelated to the request.</li>
</ol>
<p>If one client provides most of your income, a <a href="/blog/statement-of-account">statement of account</a> from that client relationship shows a consistent payment history at a glance.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Quoting gross invoiced revenue as income</strong> without saying so, when the recipient expects net income.</li>
<li><strong>Including unpaid invoices</strong> as if they were income received. Separate paid from outstanding.</li>
<li><strong>Figures that do not match the attachments</strong>, which undermines trust in the whole package.</li>
<li><strong>Inconsistent invoice numbering or missing dates</strong>, which makes invoices look improvised. A sequential numbering system, like the one our <a href="/tools/invoice-number-generator">invoice number generator</a> creates, helps.</li>
<li><strong>Overstating future income</strong> based on proposals or verbal agreements. Only cite signed contracts.</li>
</ul>
<p>Never alter documents or create invoices for work that was not done. Misrepresenting income on a loan or benefits application can be a crime, and it is easy for a lender to check against IRS transcripts.</p>

<h2>Proof of income requirements by situation</h2>
<p>Different readers want different evidence. Tailor the package to the request:</p>
<table><thead><tr><th>Who is asking</th><th>What they usually want</th><th>Tips</th></tr></thead><tbody>
<tr><td>Landlord or property manager</td><td>Income of a multiple of rent (often around three times), recent bank statements, last tax return</td><td>A one-page letter plus three months of statements and paid invoices is often enough</td></tr>
<tr><td>Mortgage lender</td><td>Two years of tax returns, transcripts, year-to-date P&amp;L, bank statements</td><td>Letters explain; tax returns qualify</td></tr>
<tr><td>Auto lender</td><td>Recent tax return or bank statements</td><td>Ask whether they accept a P&amp;L for current-year income</td></tr>
<tr><td>Government benefit or assistance program</td><td>Program-specific forms, records of income and expenses for set months</td><td>Use their forms; attach your letter as a summary</td></tr>
<tr><td>Visa or immigration application</td><td>Evidence of stable income and business activity, often including contracts and tax filings</td><td>Follow the official checklist exactly and use certified translations if required</td></tr>
<tr><td>Childcare or school fee assistance</td><td>Recent income statement and tax return</td><td>Clarify whether they want gross or net income</td></tr>
</tbody></table>
<p>When the reader is unfamiliar with self-employment, add one sentence explaining that your income arrives through client invoices rather than a paycheck and that monthly totals vary. Then show the average over a longer period, which smooths out slow months and makes your income look as stable as it really is.</p>

<h3>New freelancers with little history</h3>
<p>If you have been self-employed for only a few months, you will not have a tax return showing business income yet. Strengthen the letter with signed client contracts, retainer agreements, the invoices issued so far, matching bank deposits and, if relevant, proof of earlier employment in the same field. Some landlords will also accept a larger deposit, a guarantor or several months of rent paid in advance.</p>

<h2>When a mortgage lender asks for proof of income</h2>
<p>Mortgage lenders are stricter than landlords. They qualify you on tax returns and use letters mainly to explain gaps, declines or large deposits. Our guide to the <a href="/blog/self-employed-mortgage">self-employed mortgage</a> process explains how lenders calculate your income and where invoices help. For recipient-specific requirements, such as a government benefit program, follow their checklist first and use this letter as a cover summary.</p>

<p>The best proof of income starts long before anyone asks for it: consistent, numbered invoices for every job. Create yours with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download each invoice as a PDF that is ready to attach to any proof of income package.</p>
`,
  },
];
