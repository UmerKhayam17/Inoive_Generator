import type { PostDraft } from "../blog";

export const TAX_COMPLIANCE_2026_POSTS: PostDraft[] = [
  {
    slug: "invoice-requirements-by-country",
    title: "Invoice Requirements by Country: Mandatory Fields Guide",
    description:
      "Invoice requirements by country compared: mandatory invoice fields for the US, UK, EU, UAE, Saudi Arabia, Pakistan, India, Australia and Canada in one table.",
    category: "tax-compliance",
    jurisdiction: "General",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "japan-qualified-invoice-system",
      "canada-gst-hst-invoice-requirements",
      "tax-invoice-guide",
      "tax-id-on-invoice",
      "e-invoicing-mandates-2027",
    ],
    faqs: [
      {
        q: "Which fields are mandatory on an invoice in almost every country?",
        a: "Nearly every tax system expects a unique invoice number, the issue date, the seller's name and address, the buyer's name, a description of what was supplied, the quantity and price, and the total amount due. Once you are registered for VAT, GST or sales tax, most countries add your tax registration number, the tax rate and the tax amount. Start from that core and add the local extras for each country you invoice into.",
      },
      {
        q: "Does the United States have a federal invoice law?",
        a: "No. There is no federal VAT or general federal rule listing mandatory invoice fields. Invoices are commercial documents shaped by contracts, state sales tax rules and IRS record-keeping requirements. In practice, US invoices show a number, date, seller and buyer details, line items, any state and local sales tax as a separate line, the total and payment terms. Check each state where you collect sales tax for its own rules.",
      },
      {
        q: "Do I need to follow the buyer's country rules or my own?",
        a: "Generally you follow the rules of the country whose tax you are charging or accounting for, which is usually your own country for domestic sales. For cross-border sales, the place-of-supply rules decide which country's tax applies, and the buyer may need certain details, such as their VAT number and reverse charge wording, to claim or self-account for tax. When in doubt, include both parties' tax IDs and ask the client what their accounts payable team needs.",
      },
      {
        q: "Is a PDF invoice still legally valid in 2026?",
        a: "In many countries, yes, for now. But a growing number require structured e-invoices for some or all business-to-business sales, including Saudi Arabia, India above a turnover limit, Pakistan for sales tax registered persons, and several EU member states. In those cases a PDF alone does not meet the rules. Check whether your country or your client's country has an e-invoicing mandate that applies to you before relying on PDF invoices.",
      },
      {
        q: "Do invoices have to be in the local language or currency?",
        a: "It varies. The UAE requires the VAT amount in AED even if the invoice is in another currency, and Saudi tax invoices must include Arabic text. Many EU countries accept invoices in other languages but may ask for a translation during an audit. Where you invoice in a foreign currency, show the tax in the local currency where the rules demand it and note the exchange rate used.",
      },
      {
        q: "What is the difference between a full and a simplified invoice?",
        a: "Many VAT and GST systems allow a shorter simplified invoice for low-value or consumer sales. It can leave out details such as the buyer's name or the tax amount per line. The UK allows simplified invoices up to £250 including VAT for retail sales, and Saudi Arabia and the UAE have simplified tax invoices for consumer sales. Business customers who want to reclaim tax usually need a full invoice.",
      },
      {
        q: "Do I need the customer's tax ID on my invoice?",
        a: "For business customers in many countries, yes. The UAE expects the recipient's TRN where they are registered, India expects the recipient's GSTIN on B2B invoices, Pakistan expects the buyer's NTN and STRN where registered, and EU cross-border invoices need the customer's VAT number. Australia requires the buyer's identity or ABN on tax invoices of $1,000 or more. Missing buyer details often stop your customer reclaiming tax.",
      },
      {
        q: "Can I use one invoice template for every country?",
        a: "You can use one layout if it has room for every field you might need: both parties' tax IDs, supply date, tax rate and amount per line, currency, notes for reverse charge or exemption wording, and payment details. Then adjust the title and fields for each country. Our free invoice generator lets you rename the document title, add tax IDs and set tax per line, which covers most non-e-invoicing requirements.",
      },
      {
        q: "How do I check whether my invoice meets local requirements?",
        a: "Compare it against the tax authority's official guidance for that country, not a third-party summary, because rules and thresholds change. Use the checklist in this guide as a starting point, then confirm with HMRC, the IRS and your state, the EU member state's tax office, the FTA, ZATCA, FBR, CBIC, the ATO or the CRA. For high-value or regular cross-border work, a short review with a local accountant is worth the fee.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Invoice requirements by country share a common core: a unique invoice number, issue date, seller and buyer details, a description of the goods or services, quantities, prices and the total. VAT and GST countries add mandatory invoice fields such as tax registration numbers, the tax rate and tax amount per rate, and sometimes e-invoicing, QR codes or local-currency totals.</p>

<p>If you sell to clients in more than one country, you quickly discover that "a proper invoice" means slightly different things in London, Dubai, Riyadh, Karachi, Mumbai, Sydney and Toronto. This hub compares the invoice requirements by country for nine major jurisdictions in one table, explains the extra fields each one adds, and points you to our detailed country guides. When you are ready to build one, the <a href="/invoice-generator">free invoice generator</a> lets you add tax IDs, per-line tax and custom notes, then download a PDF created in your browser.</p>

<p><strong>Important:</strong> This guide is general information, not tax or legal advice. Invoice rules, tax rates and e-invoicing deadlines change often. Always confirm the current rules with the relevant tax authority or a qualified adviser before relying on any format.</p>

<h2>The universal core: fields almost every invoice needs</h2>
<p>Before looking at local differences, it helps to know what nearly every tax authority expects. If your invoice contains the fields below, you are most of the way to compliance anywhere:</p>
<ol>
<li><strong>A clear document title</strong>, such as "Invoice" or, in VAT and GST systems, "Tax Invoice".</li>
<li><strong>A unique invoice number</strong> from a sequential series with no unexplained gaps. Keep one series and explain any voids.</li>
<li><strong>The issue date</strong>, plus the supply date (tax point) if it differs.</li>
<li><strong>Seller details:</strong> legal or trading name and address.</li>
<li><strong>Buyer details:</strong> name and address, at least for business customers.</li>
<li><strong>A description of each item</strong> clear enough to identify what was supplied.</li>
<li><strong>Quantity, unit price and line total</strong>.</li>
<li><strong>The total amount due</strong>, with currency.</li>
<li><strong>Payment terms</strong>, such as the due date and how to pay.</li>
</ol>
<p>Once you register for VAT, GST or sales tax, the second layer appears: your tax registration number, often the buyer's tax number, the tax rate and tax amount, and wording for special treatments such as reverse charge, zero rating or exemption. Our <a href="/blog/tax-id-on-invoice">guide to tax IDs on invoices</a> explains each country's identifier.</p>

<h2>Invoice requirements by country: comparison table</h2>
<p>The table summarizes the main mandatory invoice fields in each jurisdiction. Standard rates are shown for orientation only; reduced, zero and special rates exist almost everywhere, so check the current rate for your goods or services.</p>
<table><thead><tr><th>Country</th><th>Main tax (standard rate)</th><th>Seller tax ID</th><th>Buyer tax ID</th><th>Distinctive requirements</th><th>E-invoicing status</th></tr></thead><tbody>
<tr><td>United States</td><td>State and local sales tax (varies; no federal VAT)</td><td>Not required by federal law; sales tax permit number sometimes shown</td><td>Not required; exemption certificate kept for exempt sales</td><td>Sales tax shown as a separate line; rules vary by state</td><td>No federal mandate</td></tr>
<tr><td>United Kingdom</td><td>VAT 20%</td><td>VAT registration number</td><td>Not generally, except some cross-border or reverse-charge cases</td><td>Supply date (tax point), VAT per rate, simplified invoices up to £250 for retail</td><td>No B2B mandate in force yet; plans announced, check current status</td></tr>
<tr><td>European Union</td><td>VAT (national rates; minimum standard rate 15%)</td><td>VAT number</td><td>Yes for intra-EU and reverse-charge supplies</td><td>Fields set by the EU VAT Directive plus national extras; reverse charge wording</td><td>Mandates spreading country by country</td></tr>
<tr><td>United Arab Emirates</td><td>VAT 5%</td><td>TRN</td><td>TRN where the recipient is registered</td><td>"Tax Invoice" title, VAT amount in AED, issue within 14 days of supply</td><td>Phased program starting with larger businesses</td></tr>
<tr><td>Saudi Arabia</td><td>VAT 15%</td><td>VAT registration number</td><td>Yes on standard (B2B) tax invoices</td><td>Arabic text, QR code on simplified invoices, compliant e-invoicing solution</td><td>Mandatory (ZATCA Fatoora), integration in waves</td></tr>
<tr><td>Pakistan</td><td>Federal sales tax on goods (18% standard; check current rate) plus provincial sales tax on services</td><td>NTN and STRN</td><td>NTN and STRN where the buyer is registered</td><td>"Sales Tax Invoice" title, value excluding tax, tax rate and amount</td><td>FBR digital invoicing for sales tax registered persons</td></tr>
<tr><td>India</td><td>GST (main slabs 5% and 18%, plus 40% for some goods)</td><td>GSTIN</td><td>GSTIN for registered recipients</td><td>HSN/SAC codes, place of supply, CGST/SGST or IGST split, reverse charge flag</td><td>Mandatory above Rs 5 crore turnover (IRN and QR code)</td></tr>
<tr><td>Australia</td><td>GST 10%</td><td>ABN</td><td>Buyer identity or ABN for sales of $1,000 or more</td><td>"Tax invoice" wording, GST amount, which items are taxable</td><td>Peppol available; no general B2B mandate</td></tr>
<tr><td>Canada</td><td>GST 5%, or HST 13% to 15% in participating provinces, plus PST in some provinces</td><td>GST/HST registration number (from $100)</td><td>Recipient name (from $500)</td><td>Tiered information rules at $100 and $500 for input tax credits</td><td>No general B2B mandate</td></tr>
</tbody></table>
<p>The pattern is clear: the further a country has moved toward VAT or GST with real-time reporting, the more data each invoice has to carry. The US sits at one end with no national invoice law; Saudi Arabia and India sit at the other, with government-validated electronic invoices.</p>

<h2>United States</h2>
<p>The US has no federal VAT, so there is no national list of mandatory invoice fields. What drives the content of a US invoice is sales tax, which is set by each state and many local jurisdictions, plus IRS rules on keeping records that support your income and expenses. A sound US invoice shows the invoice number and date, your business name and address, the client's details, line items, the taxable subtotal, the sales tax rate and amount as a separate line, the total and payment terms.</p>
<p>Five states have no statewide sales tax, and taxability of services and digital products differs widely. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers nexus and exempt customers, and the <a href="/invoice-generator/usa">USA invoice generator</a> defaults to USD with a separate tax line. If you pay contractors, W-9 forms and 1099 reporting are a separate obligation from invoicing.</p>

<h2>United Kingdom</h2>
<p>If you are not VAT-registered, a UK invoice needs the basics: a unique number, your name and address, the customer's name and address, a description, the supply date, the invoice date, the amount and the total. A limited company should also show its registered name and company details. Once you are VAT-registered (the threshold has been £90,000 of taxable turnover since April 2024), a full VAT invoice adds your VAT number, the tax point if different from the invoice date, the unit price, the VAT rate per item, and the total VAT. HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT guide (Notice 700)</a> is the official reference.</p>
<p>You can build a GBP invoice in the <a href="/invoice-generator/uk">UK invoice generator</a>. Making Tax Digital affects how you keep records rather than what appears on each invoice.</p>

<h2>European Union</h2>
<p>EU invoice content is harmonized by the VAT Directive, which lists the details a VAT invoice must contain: issue date, a sequential number, the supplier's VAT number, the customer's VAT number for certain cross-border and reverse-charge supplies, both parties' names and addresses, the quantity and nature of goods or the extent of services, the supply date, the taxable amount per rate, the unit price, the VAT rate and VAT amount, and specific wording for exemptions or reverse charge. Member states can add a few extras, and rates differ by country. The European Commission's <a href="https://europa.eu/youreurope/business/taxation/vat/invoicing-rules/index_en.htm" target="_blank" rel="noopener noreferrer">Your Europe invoicing rules page</a> summarizes the common list.</p>
<p>For cross-border B2B services, the customer usually accounts for VAT under the reverse charge; see our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> for the wording. Our general <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers mixed rates and credit notes.</p>

<h2>United Arab Emirates</h2>
<p>UAE VAT has applied at a standard rate of 5% since 2018. A full tax invoice must carry the words "Tax Invoice", your name, address and TRN, the recipient's details and TRN where registered, a sequential number, issue date, supply date if different, a description, unit price, quantity, rate and amount, any discount, and the VAT amount in AED, with the exchange rate if the invoice is in another currency. Tax invoices are generally issued within 14 days of the supply. A simplified tax invoice is allowed in some cases, such as sales to unregistered customers.</p>
<p>The full field list is in our guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>, and the <a href="/invoice-generator/uae">UAE invoice generator</a> is preset with AED and a TRN field. Official guidance is on the <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer">Federal Tax Authority website</a>. The UAE is also phasing in e-invoicing through accredited service providers, starting with larger businesses.</p>

<h2>Saudi Arabia</h2>
<p>Saudi Arabia charges VAT at 15% and has one of the most advanced e-invoicing regimes in the world. Since December 2021, tax invoices must come from a compliant electronic solution; handwritten and editable invoices are not allowed. Standard tax invoices for B2B sales carry the buyer's VAT number, and simplified tax invoices for consumers must include a QR code. Under Phase 2, businesses connect to ZATCA's platform in waves: B2B invoices are cleared in real time and B2C invoices are reported within 24 hours. Invoices must include Arabic text, and many businesses issue bilingual documents.</p>
<p>Read our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> for the details. Because Saudi invoices must come from a compliant system, a PDF generator is not suitable for issuing Saudi tax invoices, though it is fine for quotes and proformas.</p>

<h2>Pakistan</h2>
<p>A Pakistani sales tax invoice carries the words "Sales Tax Invoice", a serial number, the date, the supplier's name, address, NTN and STRN, the buyer's details and registration numbers where the buyer is registered, a description and quantity, the value excluding tax, the sales tax rate and amount, and the value including tax. Federal sales tax applies to goods, while services usually fall under provincial sales tax at different rates, so separate lines for goods and services help.</p>
<p>Under the Finance Act 2026, all sales tax registered persons must integrate with FBR's digital invoicing system. See <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a> and the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> for PKR invoices. Freelancers exporting services to foreign clients are usually treated differently, so check how your export income is taxed.</p>

<h2>India</h2>
<p>A GST tax invoice in India shows the supplier's name, address and GSTIN, a consecutive serial number unique for the financial year, the date, the recipient's name, address and GSTIN where registered, HSN or SAC codes, a description, quantity, taxable value, the rate and amount of tax split into CGST and SGST (intra-state) or IGST (inter-state), the place of supply, whether tax is payable under reverse charge, and a signature or digital signature. Since 22 September 2025, the main GST slabs are 5% and 18%, with 40% for a short list of goods.</p>
<p>Businesses with turnover above Rs 5 crore must report B2B invoices to an Invoice Registration Portal to get an IRN and signed QR code. See our <a href="/blog/gst-invoice-guide">GST invoice guide</a> for the full field list, and check current CBIC notifications for the rate on each HSN or SAC code.</p>

<h2>Australia</h2>
<p>Only GST-registered businesses can issue a tax invoice in Australia. The ATO requires the document to show it is intended to be a tax invoice, the seller's identity and ABN, the issue date, a brief description, quantity and price, the GST amount (if any), and the extent to which each item is taxable. For sales of $1,000 or more, it must also show the buyer's identity or ABN. GST is 10%. Our guide to <a href="/blog/australia-tax-invoice-requirements">Australia tax invoice requirements</a> has the full list and examples.</p>

<h2>Canada</h2>
<p>Canada does not prescribe a single invoice format, but the information your customer needs to claim input tax credits is tiered by amount. Under $100, show your name, the date and the total. From $100 to $499.99, add your GST/HST registration number and the tax charged (or a statement that tax is included). At $500 or more, also show the buyer's name, the payment terms and a description of each supply. GST is 5%, HST in participating provinces is 13% in Ontario and 14% or 15% in the Atlantic provinces, and some provinces charge separate PST. Check the CRA's current rates for each province you sell into.</p>

<h2>E-invoicing: when a PDF is no longer enough</h2>
<p>The biggest change to invoice requirements by country is not a new field but a new format. E-invoicing mandates require structured data (such as XML following EN 16931, or a national schema) sent through Peppol or a government platform, sometimes with real-time clearance before the invoice is valid. As of late 2026:</p>
<ul>
<li><strong>Saudi Arabia, India and Pakistan</strong> already require e-invoicing for many businesses.</li>
<li><strong>EU countries</strong> are rolling out mandates, with Germany, France, Poland, Belgium and others at different stages.</li>
<li><strong>The UAE</strong> is phasing in e-invoicing from 2026 to 2027.</li>
<li><strong>The US, UK, Australia and Canada</strong> have no general B2B e-invoicing mandate, though Peppol is available in Australia.</li>
</ul>
<p>For dates, see <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates in 2027</a>. Where a mandate applies to you, use certified software for compliant invoices and keep a PDF tool for quotes, proformas and non-mandated clients.</p>

<h2>Worked example: one sale, three countries</h2>
<p>Suppose you supply consulting worth 2,000 in local currency, with no reduced rates, and you are registered for tax in each country. The tax and total due change with the standard rate:</p>
<table><thead><tr><th>Country</th><th>Net amount</th><th>Standard rate</th><th>Tax calculation</th><th>Total due</th></tr></thead><tbody>
<tr><td>UAE</td><td>AED 2,000.00</td><td>5%</td><td>2,000 × 0.05 = 100.00</td><td>AED 2,100.00</td></tr>
<tr><td>UK</td><td>£2,000.00</td><td>20%</td><td>2,000 × 0.20 = 400.00</td><td>£2,400.00</td></tr>
<tr><td>Saudi Arabia</td><td>SAR 2,000.00</td><td>15%</td><td>2,000 × 0.15 = 300.00</td><td>SAR 2,300.00</td></tr>
</tbody></table>
<p>Now suppose you invoice the UAE client in USD instead. If the net is $2,000 and the exchange rate you use is 3.6725 AED per USD, the VAT is $2,000 × 5% = $100, and the invoice must also show the VAT in AED: $100 × 3.6725 = AED 367.25, with the exchange rate stated. Check the arithmetic for any rate with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Multi-country invoice compliance checklist</h2>
<ul>
<li>Correct title: "Invoice", "Tax Invoice" or "Sales Tax Invoice" as the country requires.</li>
<li>Sequential, unique invoice number with no unexplained gaps.</li>
<li>Issue date and, where different, supply date or tax point.</li>
<li>Your legal name, address and tax ID (VAT number, TRN, GSTIN, NTN/STRN, ABN or GST/HST number).</li>
<li>Buyer's name, address and tax ID for business customers where required.</li>
<li>Clear line descriptions, plus HSN/SAC codes in India.</li>
<li>Net amount, tax rate and tax amount per rate, and the gross total.</li>
<li>Tax shown in local currency where required, with the exchange rate.</li>
<li>Reverse charge, zero-rated or exempt wording where applicable.</li>
<li>Payment terms, due date and bank details.</li>
<li>E-invoicing status confirmed for your country and your client's.</li>
<li>A copy kept for the local retention period; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>Common mistakes with country invoice rules</h2>
<ul>
<li><strong>Calling a document a tax invoice before you are registered.</strong> In VAT and GST systems, only registered businesses issue tax invoices.</li>
<li><strong>Leaving out the buyer's tax ID.</strong> Your client may be unable to reclaim tax, and your invoice gets sent back.</li>
<li><strong>Using one blended tax line for mixed rates.</strong> Show net and tax per rate.</li>
<li><strong>Charging local tax on a cross-border service that should be reverse charged</strong>, or the reverse.</li>
<li><strong>Showing tax only in a foreign currency</strong> where local currency is required.</li>
<li><strong>Editing an issued invoice</strong> instead of issuing a credit note or a corrected invoice under the local rules.</li>
<li><strong>Assuming a PDF is valid</strong> in a country with an e-invoicing mandate.</li>
</ul>

<h2>Build a compliant invoice for your country</h2>
<p>Pick the country generator that matches your client, add both tax IDs, set the tax rate per line, and put any reverse charge or exemption wording in the notes. A structured layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a> gives tax IDs and totals a clear place. Then compare your invoice against the checklist above and the official guidance for that country before you send it.</p>
`,
  },
  {
    slug: "sales-tax-vs-vat-vs-gst",
    title: "Sales Tax vs VAT vs GST: Differences Explained for Invoices",
    description:
      "Sales tax vs VAT vs GST explained: how each consumption tax works, who collects it, what changes on your invoice, and a worked example of tax at each stage.",
    category: "comparisons",
    jurisdiction: "General",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "australia-gst-registration",
      "how-to-calculate-vat",
      "sales-tax-on-invoices-us",
      "vat-invoice-guide",
      "gst-invoice-guide",
    ],
    faqs: [
      {
        q: "What is the main difference between sales tax and VAT?",
        a: "Sales tax is usually collected once, at the final sale to the consumer, and businesses buying for resale are typically exempt. VAT is collected at every stage of the supply chain, but each registered business deducts the VAT it paid on purchases, so only the value added at each stage is taxed. The end consumer bears the tax in both systems, but VAT spreads collection across many businesses.",
      },
      {
        q: "Is GST the same as VAT?",
        a: "In how it works, mostly yes. GST is a value-added tax under another name, used in countries such as Australia, Canada, India, New Zealand and Singapore. Like VAT, it is charged at each stage, and registered businesses claim credits for the GST they pay on purchases. Local details differ, such as India's split into central and state GST, so read the specific country's rules.",
      },
      {
        q: "Why does the United States use sales tax instead of VAT?",
        a: "The US has never adopted a federal VAT. Consumption taxes are set by states and local governments, which have long relied on retail sales taxes as a major revenue source. Proposals for a federal VAT come up from time to time but have not been enacted. The result is a patchwork of state and local rates, rules and filing requirements rather than one national system.",
      },
      {
        q: "Do I charge VAT or GST to customers in another country?",
        a: "Often not. Exports of goods are usually zero-rated, and many business-to-business services supplied across borders fall under the reverse charge, where the customer accounts for the tax. Sales of digital services to consumers abroad are an exception, because many countries require foreign sellers to register and charge local VAT or GST. Check the place-of-supply rules for your service and customer type.",
      },
      {
        q: "Can a business reclaim sales tax like VAT?",
        a: "Not in the same way. Under a retail sales tax, businesses avoid tax on goods bought for resale by giving the seller a resale or exemption certificate, rather than paying and reclaiming it. Sales tax paid on items the business uses itself, such as equipment, is generally a cost. VAT and GST systems instead let registered businesses claim back input tax through their returns.",
      },
      {
        q: "What is HST in Canada?",
        a: "HST, the harmonized sales tax, combines the federal 5% GST with a provincial portion in participating provinces, so the invoice shows one combined rate. In 2026 HST is 13% in Ontario, 14% in Nova Scotia and 15% in New Brunswick, Newfoundland and Labrador, and Prince Edward Island. Other provinces charge GST plus a separate provincial sales tax, or GST only. Check current CRA rates.",
      },
      {
        q: "Should prices on my invoice include or exclude tax?",
        a: 'For business customers, show prices excluding tax, then the tax rate and amount, then the total, because buyers need the tax figure to reclaim it. Many VAT and GST countries require consumer prices to be displayed including tax, while US prices are usually shown before sales tax. Whatever you choose, state it clearly, for example "All prices exclude VAT", to avoid disputes.',
      },
      {
        q: "Does a freelancer need to charge sales tax, VAT or GST?",
        a: "Only once registered, or once the law requires registration. In VAT and GST countries that usually happens when your taxable turnover passes a threshold, such as £90,000 in the UK. In the US, many services are not subject to sales tax, but some states tax certain services and digital products. Until you are registered, do not add tax to your invoices or show a tax number you do not hold.",
      },
      {
        q: "Which is better for businesses, VAT or sales tax?",
        a: "Neither is simply better; they distribute work differently. VAT means more businesses file returns and keep detailed invoices, but it is harder to evade because each business has a reason to obtain proper invoices to reclaim tax. Sales tax concentrates collection at retail, with less paperwork for wholesalers but more reliance on exemption certificates and more complex multi-state rules for sellers.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Sales tax vs VAT vs GST comes down to where the tax is collected. Sales tax is charged once, at the final sale to the consumer. VAT and GST are charged at every stage of the supply chain, with registered businesses reclaiming the tax they paid on purchases. GST is essentially VAT under another name. All three are paid by the end consumer.</p>

<p>If you invoice clients in different countries, you will meet all three terms, sometimes on the same day. A US client expects state sales tax on a separate line, a UK client expects VAT with your VAT number, and an Australian or Indian client expects GST with an ABN or GSTIN. This guide explains sales tax vs VAT vs GST in plain language, shows how each one moves through a supply chain with real numbers, and covers what each tax means for the invoices you send. You can apply any rate in the <a href="/invoice-generator">free invoice generator</a>, which shows tax as its own line.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Rates, thresholds and rules for each tax change regularly and differ by country, state and province. Check the current rules with the relevant tax authority or a qualified adviser.</p>

<h2>Sales tax vs VAT vs GST at a glance</h2>
<table><thead><tr><th>Feature</th><th>Sales tax</th><th>VAT</th><th>GST</th></tr></thead><tbody>
<tr><td>Where it is used</td><td>United States (state and local); some Canadian provinces as PST</td><td>UK, EU, UAE, Saudi Arabia and most other countries</td><td>Australia, Canada (federal), India, New Zealand, Singapore, Malaysia and others</td></tr>
<tr><td>When it is collected</td><td>Once, at the final retail sale</td><td>At every stage of the supply chain</td><td>At every stage of the supply chain</td></tr>
<tr><td>Business purchases for resale</td><td>Usually exempt with a resale certificate</td><td>Taxed, then reclaimed as input VAT</td><td>Taxed, then claimed as input tax credit</td></tr>
<tr><td>Who files returns</td><td>Retailers and sellers with nexus</td><td>Every registered business in the chain</td><td>Every registered business in the chain</td></tr>
<tr><td>Typical invoice title</td><td>"Invoice"</td><td>"VAT Invoice" or "Tax Invoice"</td><td>"Tax Invoice"</td></tr>
<tr><td>Seller tax ID on invoice</td><td>Not generally required</td><td>VAT number required</td><td>GST number (ABN, GSTIN, BN) required</td></tr>
<tr><td>Example standard rates</td><td>Combined state and local rates vary by address</td><td>UK 20%, UAE 5%, Saudi Arabia 15%</td><td>Australia 10%, Canada 5%, India mainly 5% or 18%</td></tr>
</tbody></table>
<p>Rates in the table are standard rates for orientation; reduced, zero and special rates exist in most countries. Always check the current rate for your goods or services.</p>

<h2>What is sales tax?</h2>
<p>A retail sales tax is a single-stage tax collected by the seller at the point of sale to the final consumer. In the United States, there is no federal sales tax; each state decides whether to levy one, what rate to charge, and which goods and services are taxable. Counties, cities and special districts can add local rates, so the combined rate can differ between two addresses in the same state. Five states have no statewide sales tax.</p>
<p>Businesses that buy goods to resell usually do not pay sales tax on those purchases. Instead they give the supplier a resale certificate, and the tax is collected only when the goods reach a consumer. That is the core mechanism of sales tax: tax the last sale, and exempt the sales before it.</p>
<p>A seller must collect sales tax in states where it has nexus, a connection that can come from a physical presence or, since the 2018 Wayfair decision, from economic activity above a state's threshold. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers nexus, exempt customers and how to show the tax line.</p>

<h2>What is VAT?</h2>
<p>Value-added tax is a multi-stage tax. Every VAT-registered business in a supply chain charges VAT on its sales (output tax) and deducts the VAT it paid on its business purchases (input tax). It pays the difference to the tax authority. The effect is that each business pays tax only on the value it adds, and the full tax burden lands on the final consumer, who cannot reclaim it.</p>
<p>Because the credit depends on a valid invoice, VAT turns invoices into tax documents. A buyer cannot normally reclaim input VAT without an invoice that shows the supplier's VAT number, the rate and the VAT amount. That is why VAT invoices have stricter content rules than ordinary US invoices. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists the fields, and HMRC's <a href="https://www.gov.uk/vat-rates" target="_blank" rel="noopener noreferrer">VAT rates page</a> shows the UK's standard, reduced and zero rates.</p>
<p>VAT systems also distinguish standard-rated, reduced-rated, zero-rated and exempt supplies. Zero-rated and exempt both show no VAT, but they have very different effects on what the seller can reclaim; see <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a>.</p>

<h2>What is GST?</h2>
<p>Goods and services tax is the name several countries use for their value-added tax. Mechanically, GST works like VAT: registered businesses charge GST on sales, claim input tax credits for GST paid on purchases, and remit the difference. The differences are in local design:</p>
<ul>
<li><strong>Australia:</strong> GST is 10%, with GST-free items such as most basic food. Registration is required once turnover reaches $75,000 ($150,000 for non-profits), and tax invoices show the seller's ABN.</li>
<li><strong>Canada:</strong> the federal GST is 5%. Participating provinces combine it with a provincial portion into a single harmonized sales tax (HST), while others charge GST plus a separate provincial sales tax (PST). The <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html" target="_blank" rel="noopener noreferrer">CRA's GST/HST pages</a> list current rates.</li>
<li><strong>India:</strong> GST is split into central and state components (CGST and SGST) for sales within a state and integrated GST (IGST) for sales between states. Since 22 September 2025 the main slabs are 5% and 18%, with 40% for a short list of goods. See our <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</li>
</ul>
<p>So when people compare sales tax vs VAT vs GST, the real divide is between single-stage sales tax and multi-stage VAT/GST. VAT vs GST is mostly a naming difference.</p>

<h2>Worked example: tax through a three-step supply chain</h2>
<p>A manufacturer sells a desk to a retailer for 400. The retailer sells it to a consumer for 600. Compare a 10% sales tax with a 10% VAT or GST (the same rate, to keep the comparison fair).</p>
<h3>Under a 10% sales tax</h3>
<table><thead><tr><th>Step</th><th>Sale price</th><th>Tax charged</th><th>Tax credit</th><th>Tax paid to government</th></tr></thead><tbody>
<tr><td>Manufacturer to retailer (resale certificate)</td><td>400</td><td>0</td><td>None</td><td>0</td></tr>
<tr><td>Retailer to consumer</td><td>600</td><td>600 × 10% = 60</td><td>None</td><td>60</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td></td><td><strong>60</strong></td></tr>
</tbody></table>
<h3>Under a 10% VAT or GST</h3>
<table><thead><tr><th>Step</th><th>Sale price</th><th>Output tax</th><th>Input tax credit</th><th>Net tax paid</th></tr></thead><tbody>
<tr><td>Manufacturer to retailer</td><td>400</td><td>400 × 10% = 40</td><td>0</td><td>40 − 0 = 40</td></tr>
<tr><td>Retailer to consumer</td><td>600</td><td>600 × 10% = 60</td><td>40</td><td>60 − 40 = 20</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td></td><td><strong>40 + 20 = 60</strong></td></tr>
</tbody></table>
<p>The government receives 60 either way, and the consumer pays 600 + 60 = 660 either way. What differs is who collects it and when. Under VAT, the manufacturer collects 40 at the first stage and the retailer adds the remaining 20 on its 200 of value added (200 × 10% = 20). If the retailer disappears without paying, the government has still collected 40 of the 60. That fractional collection is a key reason so many countries use VAT or GST rather than a retail sales tax.</p>
<p>You can check any of these figures with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>, which works for VAT and GST rates too.</p>

<h2>How sales tax, VAT and GST change your invoice</h2>
<p>The tax system decides which fields your invoice must carry. Here is a side-by-side view of a simple 1,000 sale:</p>
<table><thead><tr><th>Invoice element</th><th>US sales tax (8.25% example)</th><th>UK VAT (20%)</th><th>Australia GST (10%)</th></tr></thead><tbody>
<tr><td>Title</td><td>Invoice</td><td>Invoice (with VAT details)</td><td>Tax invoice</td></tr>
<tr><td>Seller tax ID</td><td>Optional</td><td>VAT registration number</td><td>ABN</td></tr>
<tr><td>Net amount</td><td>$1,000.00</td><td>£1,000.00</td><td>A$1,000.00</td></tr>
<tr><td>Tax line</td><td>Sales tax 8.25%: $82.50</td><td>VAT 20%: £200.00</td><td>GST 10%: A$100.00</td></tr>
<tr><td>Total</td><td>$1,082.50</td><td>£1,200.00</td><td>A$1,100.00</td></tr>
<tr><td>Buyer can reclaim?</td><td>No (unless exempt purchase with certificate)</td><td>Yes, if VAT-registered</td><td>Yes, if GST-registered</td></tr>
</tbody></table>
<p>The arithmetic: $1,000 × 0.0825 = $82.50; £1,000 × 0.20 = £200; A$1,000 × 0.10 = A$100. The 8.25% US figure is only an example; the real rate depends on the delivery address. For full field lists, see the <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> comparison.</p>

<h3>Tax-inclusive pricing</h3>
<p>In many VAT and GST countries, consumer prices must be displayed including tax. To find the tax inside a tax-inclusive price, divide by 1 plus the rate. For a £120 price including 20% VAT: £120 ÷ 1.20 = £100 net, so the VAT is £120 − £100 = £20. A common mistake is to take 20% of £120 (£24), which overstates the tax by £4.</p>

<h2>Cross-border invoices: which tax applies?</h2>
<p>When you sell across borders, the comparison of sales tax vs VAT vs GST matters less than the place-of-supply rules, which decide which country's tax applies at all. Common patterns:</p>
<ul>
<li><strong>Exports of goods</strong> are usually zero-rated for VAT and GST, with proof of export kept on file.</li>
<li><strong>B2B services to a foreign business</strong> are often outside the scope of your VAT or subject to the reverse charge in the customer's country. The invoice shows no VAT plus a reverse charge note; see our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>.</li>
<li><strong>Digital services to foreign consumers</strong> may require you to register and charge the customer's local VAT or GST.</li>
<li><strong>US sales tax</strong> generally does not apply to exports, and many services are not taxable at all, depending on the state.</li>
</ul>
<p>Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currencies, wording and payment.</p>

<h2>Checklist: getting tax right on your invoices</h2>
<ul>
<li>Know which tax system applies to each sale: sales tax, VAT, GST, or none.</li>
<li>Confirm you are registered (or have nexus) before adding any tax.</li>
<li>Show your tax ID where the system requires it.</li>
<li>Collect the customer's tax ID for B2B and cross-border sales.</li>
<li>Show the net amount, tax rate and tax amount for each rate, then the total.</li>
<li>State whether prices include or exclude tax.</li>
<li>Add wording for zero-rated, exempt or reverse-charged items.</li>
<li>Keep resale or exemption certificates for untaxed US sales.</li>
<li>Check rates when they change, and keep invoices for the required period.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating VAT like sales tax.</strong> Businesses new to VAT sometimes forget to reclaim input tax, or charge VAT before registering.</li>
<li><strong>Treating sales tax like VAT.</strong> US sellers sometimes expect to reclaim sales tax paid on business purchases; usually they cannot.</li>
<li><strong>Using the wrong rate</strong> because they used a state rate without local add-ons, or an old GST slab.</li>
<li><strong>Calculating tax on a tax-inclusive price</strong> by multiplying instead of dividing.</li>
<li><strong>Charging domestic VAT on a reverse-charge service</strong>, which leaves the customer unable to reclaim it.</li>
<li><strong>Merging different rates into one tax line</strong> on a mixed invoice.</li>
<li><strong>Not stating the tax basis</strong>, leaving the client unsure whether the price is gross or net.</li>
</ul>

<h2>Create an invoice with the right tax line</h2>
<p>Whichever tax applies, the invoice structure is the same: net, tax rate, tax amount, total. Open the <a href="/invoice-generator/usa">USA invoice generator</a> for sales tax or the <a href="/invoice-generator/uk">UK invoice generator</a> for VAT, set the rate, and add your tax ID and any reverse charge or exemption note. A clean layout such as the <a href="/invoice-templates/minimal">Minimal invoice template</a> keeps the tax block easy to read. Confirm current rates with the relevant authority before you send.</p>
`,
  },
  {
    slug: "withholding-tax-on-invoices",
    title: "Withholding Tax on Invoices: How to Show WHT Correctly",
    description:
      "Withholding tax on invoices explained: how WHT works in Pakistan, India, Saudi Arabia and the US, how to show it, and a worked example of gross, WHT and net.",
    category: "tax-compliance",
    jurisdiction: "General",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "mexico-cfdi-invoice",
      "tds-on-professional-fees",
      "active-taxpayer-list-pakistan",
      "sales-tax-invoice-pakistan",
      "w9-and-1099-for-contractors",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "Should I deduct withholding tax on my own invoice?",
        a: 'Usually not. The invoice normally shows the full gross amount, plus any VAT, GST or sales tax, because that is the value of your supply. Withholding is the payer\'s obligation, applied when they pay you. Some sellers add a note such as "Subject to withholding tax as applicable" or show the expected net payment as information, but the invoice total should not be reduced unless your contract and local rules say otherwise.',
      },
      {
        q: "Is withholding tax the same as VAT or sales tax?",
        a: "No. VAT, GST and sales tax are consumption taxes added to the price and paid by the buyer. Withholding tax is usually an advance payment of the seller's own income tax, deducted by the payer from the amount due. They can appear in the same transaction: a client may pay your invoice including GST but minus income tax withheld. Some countries also have VAT or sales tax withholding schemes.",
      },
      {
        q: "How do I get credit for tax that a client withheld?",
        a: "Ask the payer for the withholding certificate or statement they are required to issue, and check that the deduction appears against your tax number in the tax authority's records, where such a system exists. You then claim the amount as a credit, or treat it as final tax, on your tax return. Without the certificate and a matching record, you may struggle to claim the credit.",
      },
      {
        q: "Is withholding tax calculated on the amount before or after GST or VAT?",
        a: "It depends on the country and the type of tax. In India, CBDT guidance says TDS on professional fees is generally calculated on the amount excluding GST when GST is shown separately on the invoice. Other countries may calculate withholding on the gross amount including tax. Check the local rule, because applying the rate to the wrong base produces an under- or over-deduction.",
      },
      {
        q: "What is backup withholding in the US?",
        a: "Backup withholding requires a US payer to withhold 24% from certain reportable payments, such as contractor fees, when the payee has not provided a correct taxpayer identification number on Form W-9 or the IRS has notified the payer that backup withholding applies. US contractors avoid it by giving clients an accurate W-9 before the first payment.",
      },
      {
        q: "What does a foreign client need from me to avoid or reduce withholding?",
        a: "Usually proof of your tax residence and eligibility for treaty benefits. US clients typically ask non-US individuals for Form W-8BEN and entities for W-8BEN-E. Other countries ask for a tax residency certificate from your home tax authority, sometimes with a local treaty form. Supply the documents before invoicing, because many payers apply the full domestic rate if paperwork is missing.",
      },
      {
        q: "What is grossing up, and when should I use it?",
        a: "Grossing up means increasing the invoice so that, after withholding, you receive the net amount you agreed. You divide the desired net amount by one minus the withholding rate. It is only appropriate where the contract says fees are payable net of taxes, and some countries restrict it or have special rules. Agree the approach in writing before work starts.",
      },
      {
        q: "Does the UAE have withholding tax?",
        a: "The UAE corporate tax law includes withholding tax, but the rate on payments to non-residents is currently 0%, so in practice UAE clients do not withhold income tax from your invoices. UAE invoices still need correct VAT treatment. Rules can change, so confirm the current position with the Federal Tax Authority if you invoice UAE businesses regularly.",
      },
      {
        q: "Can I show withholding tax on an invoice made with a free invoice generator?",
        a: "Yes, as information. Create the invoice with the full gross amount and any sales tax, then add a note showing the withholding rate, the expected deduction and the net amount payable if your client asks for it. Our generator builds the PDF in your browser. It does not file withholding returns or issue certificates, which remain the payer's responsibility.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Withholding tax on an invoice is income tax that your client deducts from the payment and sends to the tax authority on your behalf. Your invoice normally still shows the full gross amount plus any VAT or GST; the client pays the total minus the withholding tax and gives you a certificate so you can claim it as a credit.</p>

<p>Withholding tax (WHT) confuses many freelancers and small businesses because the money that reaches the bank does not match the invoice. A Pakistani supplier sees income tax deducted by a corporate buyer, an Indian consultant sees TDS taken from professional fees, and a foreign contractor billing a Saudi company finds 5% missing. None of that is a payment error: it is withholding tax on the invoice, applied by the payer. This guide explains how WHT works, how to show it, how to reconcile the shortfall, and how to use tax treaties to reduce it. If you need the invoice itself, the <a href="/invoice-generator">free invoice generator</a> builds one in your browser with notes for withholding wording.</p>

<p><strong>Important:</strong> This article is general information, not tax advice. Withholding rates, thresholds and certificate rules vary by country, payment type and the payee's status, and they change in annual budgets. Confirm the current rate with the tax authority or an adviser before relying on any figure here.</p>

<h2>What is withholding tax on an invoice?</h2>
<p>Withholding tax is a collection method. Instead of waiting for you to file a return and pay income tax on your earnings, the government requires the payer to deduct a percentage at source and remit it. You then claim credit for that deduction against your final tax bill, or in some regimes the deduction is your final tax.</p>
<p>Three features make it different from VAT, GST or sales tax:</p>
<ul>
<li><strong>It is your tax, not the buyer's.</strong> It is usually an advance on the seller's income tax.</li>
<li><strong>It is subtracted, not added.</strong> VAT increases the total; withholding reduces the cash you receive.</li>
<li><strong>The payer is responsible for deducting it.</strong> A payer who fails to withhold can face the tax plus penalties.</li>
</ul>
<p>Some countries also operate withholding on indirect taxes, such as sales tax withholding in Pakistan, where a registered buyer pays part of the sales tax directly to the government instead of to the supplier. Keep the two kinds separate in your records. For the differences between the consumption taxes themselves, see <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>

<h2>How to show withholding tax on an invoice</h2>
<p>The safest default is simple: invoice the full amount, and let the payer apply the withholding. The invoice records the value of your supply, which is what VAT, GST and sales tax rules care about. If you reduced the invoice total for WHT, your sales tax figures and revenue would be understated.</p>
<p>What you can add is information. Many sellers use the notes field for one of these:</p>
<ul>
<li>"Payment subject to withholding tax as applicable. Please provide the withholding certificate."</li>
<li>"Income tax to be withheld at [rate]% on fees of [amount]. Net payable: [amount]."</li>
<li>"Supplier is exempt from withholding under [certificate reference]; copy attached."</li>
</ul>
<p>Show the expected net payable only when the client asks for it, and label it clearly as information so their accounts payable team does not mistake it for the invoice total. The <a href="/blog/invoice-notes-examples">invoice notes examples</a> guide has more wording you can adapt.</p>

<h2>Worked example: gross, WHT deducted, net received</h2>
<p>An Indian consultant, registered for GST, invoices a company in the same state for professional fees of Rs 1,00,000. GST is 18% (9% CGST plus 9% SGST). The client must deduct TDS on professional fees at 10% (check the current rate and threshold, as explained below).</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Professional fees (taxable value)</td><td></td><td>1,00,000</td></tr>
<tr><td>CGST 9%</td><td>1,00,000 × 9%</td><td>9,000</td></tr>
<tr><td>SGST 9%</td><td>1,00,000 × 9%</td><td>9,000</td></tr>
<tr><td><strong>Invoice total</strong></td><td>1,00,000 + 9,000 + 9,000</td><td><strong>1,18,000</strong></td></tr>
<tr><td>TDS 10% on fees (excluding GST)</td><td>1,00,000 × 10%</td><td>(10,000)</td></tr>
<tr><td><strong>Net received in bank</strong></td><td>1,18,000 − 10,000</td><td><strong>1,08,000</strong></td></tr>
</tbody></table>
<p>The consultant's invoice shows Rs 1,18,000. The bank shows Rs 1,08,000. The Rs 10,000 gap is a tax credit, not a bad debt. In the books, the receivable is cleared with two entries: Rs 1,08,000 to the bank and Rs 10,000 to "TDS receivable", which is set against the consultant's income tax liability. If TDS had wrongly been applied to the GST-inclusive total, it would have been 1,18,000 × 10% = Rs 11,800, an over-deduction of Rs 1,800.</p>

<h3>Grossing up for a net-of-tax contract</h3>
<p>Suppose a contract says a foreign consultant must receive SAR 50,000 after any Saudi withholding at 5%. The invoice amount is 50,000 ÷ (1 − 0.05) = 50,000 ÷ 0.95 = SAR 52,631.58. Check: 52,631.58 × 5% = 2,631.58 withheld, and 52,631.58 − 2,631.58 = 50,000.00 received. Without the gross-up, invoicing SAR 50,000 would leave only 50,000 − 2,500 = SAR 47,500.</p>

<h2>Withholding tax by country</h2>
<table><thead><tr><th>Country</th><th>Common WHT on service fees</th><th>Who deducts</th><th>Evidence for the seller</th></tr></thead><tbody>
<tr><td>Pakistan</td><td>Income tax on services and supplies under the Income Tax Ordinance; rates depend on payment type and Active Taxpayer List status, and change in budgets</td><td>Companies, government bodies and other prescribed persons</td><td>Withholding certificate; deduction visible in FBR records</td></tr>
<tr><td>India</td><td>TDS, for example 10% on professional fees and 2% on technical services (check current thresholds)</td><td>Payers required to deduct TDS</td><td>TDS certificate and the deduction in your annual tax statement</td></tr>
<tr><td>Saudi Arabia</td><td>On payments to non-residents: 5% for technical and consulting services, 15% for royalties, 20% for management fees</td><td>Saudi resident payers</td><td>Payment records; treaty relief where documented</td></tr>
<tr><td>UAE</td><td>Corporate tax WHT exists but the rate is currently 0%</td><td>Not applicable in practice</td><td>None needed at 0%</td></tr>
<tr><td>United States</td><td>Backup withholding 24% if no valid TIN; generally 30% on certain US-source payments to foreign persons, reducible by treaty</td><td>US payers</td><td>Form 1099 or 1042-S</td></tr>
</tbody></table>
<p>Rates in this table are summaries for orientation. Check the current rate for your payment type with the official source.</p>

<h3>Pakistan</h3>
<p>Pakistani companies and government bodies that pay for goods, services or contracts generally must deduct income tax at source, and the rate depends on the type of payment and whether the recipient appears on FBR's Active Taxpayer List. Non-filers face much higher rates. Rates for services in particular have changed in recent budgets, so confirm the current figure on the <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR website</a>. Separately, some registered buyers must withhold part of the sales tax shown on a supplier's invoice. Our guide to <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a> covers the invoice fields, and the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> creates PKR invoices. Freelancers exporting IT services are taxed differently, through bank deduction on foreign remittances; see <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax in Pakistan 2026</a>.</p>

<h3>India (TDS)</h3>
<p>India calls withholding tax "tax deducted at source" (TDS). From 1 April 2026, TDS provisions moved into the new Income-tax Act, 2025, which consolidates the old sections (such as 194J for professional and technical fees) into a single TDS framework. The headline rates for professional fees (10%) and technical services (2%) carried over, but section numbers, form names and some thresholds changed, so check the current rate chart on the <a href="https://www.incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer">Income Tax Department website</a>. TDS is generally calculated on the value excluding GST when GST is shown separately. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers the GST side of the same invoice.</p>

<h3>Saudi Arabia and the UAE</h3>
<p>Saudi Arabia applies withholding tax to payments made by Saudi residents to non-residents for services and income from Saudi sources. ZATCA guidance sets 5% for technical and consulting services, 15% for royalties and 20% for management fees, and a tax treaty may reduce the rate where the conditions are met and documented. Saudi VAT on imported services is usually handled by the Saudi customer under the reverse charge, so a foreign consultant's invoice normally shows no Saudi VAT; see <a href="/blog/reverse-charge-invoice">reverse charge invoicing</a>. The UAE's corporate tax law provides for withholding tax but at a 0% rate, so UAE clients do not deduct income tax from your invoices.</p>

<h3>United States</h3>
<p>For US contractors, the main risk is backup withholding: if you do not give a client a correct taxpayer identification number on Form W-9, they may have to withhold 24% of reportable payments. See the IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/backup-withholding" target="_blank" rel="noopener noreferrer">backup withholding page</a> and our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 for contractors</a>. For foreign contractors, services performed entirely outside the US are generally not US-source income, but US clients still usually ask for Form W-8BEN or W-8BEN-E to document your status and any treaty claim.</p>

<h2>Cross-border services and tax treaties</h2>
<p>When a client in one country pays a supplier in another, both countries may want to tax the same income. Double taxation agreements (tax treaties) reduce that risk by capping or removing withholding on certain payments, and your home country usually gives credit for foreign tax withheld. To benefit you typically need:</p>
<ol>
<li><strong>A tax residency certificate</strong> from your home tax authority.</li>
<li><strong>The payer's treaty form</strong>, such as W-8BEN for the US, or a local declaration.</li>
<li><strong>Evidence of the nature of the service</strong>, because rates differ for consulting, royalties and management fees.</li>
<li><strong>Timing:</strong> send the documents before the first payment, because many payers apply the full domestic rate otherwise.</li>
</ol>
<p>Then keep the withholding statement the payer gives you, so you can claim a foreign tax credit at home. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and payment details.</p>

<h2>Withholding tax checklist</h2>
<ul>
<li>Ask each new client whether they will withhold tax, at what rate, and on what base.</li>
<li>Provide your tax ID, filer status, W-9, W-8BEN or residency certificate before the first invoice.</li>
<li>Invoice the full gross amount, plus any VAT, GST or sales tax.</li>
<li>Add a withholding note if the client wants it, labeled as information.</li>
<li>Agree in writing whether fees are gross or net of withholding.</li>
<li>When paid, record cash received and WHT receivable separately.</li>
<li>Collect the certificate and match it to the tax authority's records.</li>
<li>Claim the credit on your return and keep the certificates with your invoices; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>Common mistakes with withholding tax</h2>
<ul>
<li><strong>Reducing the invoice total</strong> by the withholding amount, which understates revenue and any sales tax.</li>
<li><strong>Treating the shortfall as an unpaid balance</strong> and chasing the client for money already paid to the government.</li>
<li><strong>Writing it off as a bad debt</strong> instead of recording a tax credit.</li>
<li><strong>Not collecting certificates</strong>, which can cost you the credit.</li>
<li><strong>Applying WHT to the tax-inclusive amount</strong> when local rules say to use the value excluding GST.</li>
<li><strong>Sending treaty forms too late</strong>, after the full rate has already been withheld.</li>
<li><strong>Confusing income tax withholding with VAT or sales tax withholding.</strong></li>
</ul>

<h2>Create an invoice ready for withholding</h2>
<p>Build the invoice with the full fees and any sales tax, then use the notes to state the withholding position your client expects. A clear layout such as the <a href="/invoice-templates/classic">Classic invoice template</a> keeps the gross total and notes easy to find. When payment arrives short, reconcile it against the certificate rather than chasing the client.</p>
`,
  },
  {
    slug: "invoice-audit-preparation",
    title: "Tax Audit Preparation: How to Get Your Invoices Audit-Ready",
    description:
      "Tax audit preparation for invoices: what auditors check, how to reconcile invoices to returns, a worked example and a checklist to get audit-ready fast.",
    category: "tax-compliance",
    jurisdiction: "General",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["how-long-to-keep-invoices", "invoice-numbering-system", "bookkeeping-basics"],
    faqs: [
      {
        q: "What do tax auditors usually look at first on invoices?",
        a: "They usually start by checking that your sales invoices add up to the income and tax on your returns, then test samples. Common tests include gaps or duplicates in invoice numbering, missing tax IDs, the right tax rate, supplier invoices supporting expense and input tax claims, and payments matching bank statements. Clean numbering and a reconciliation you can explain answer most of their early questions.",
      },
      {
        q: "How far back can a tax audit go?",
        a: "It depends on the country and the circumstances. The IRS generally has three years from filing to assess additional tax, extended to six years for a substantial understatement of income and with no limit for fraud or no return. HMRC normally looks back four years, longer for careless or deliberate errors. Other countries set their own periods, so keep records at least as long as the local retention rule.",
      },
      {
        q: "Are PDF invoices acceptable as audit evidence?",
        a: "In most countries, yes, as long as they are complete, legible, unaltered and can be produced on request. Keep them in an organized folder or system, with backups. In countries with e-invoicing mandates, the official record may be the structured e-invoice or the authority's cleared copy, not the PDF. Keep the format the rules treat as the original invoice.",
      },
      {
        q: "What should I do if I find a mistake on an old invoice before an audit?",
        a: "Correct it properly instead of editing the original. Issue a credit note or debit note that references the original invoice, record it in the period the rules require, and keep a note of why. If the error affected a filed return, check whether you must amend that return or report the correction in a later one. Disclosing an error before the auditor finds it can reduce penalties in many systems.",
      },
      {
        q: "Do I need to explain gaps in my invoice numbers?",
        a: 'Yes. Auditors often treat a gap as a possible unrecorded sale. Keep voided invoices marked "VOID" rather than deleting them, and keep a short log of any skipped numbers with a reason, such as a test invoice or a system error. A numbering log that accounts for every number in the series is one of the simplest ways to look audit-ready.',
      },
      {
        q: "Should I hire an accountant for a tax audit?",
        a: "For anything beyond a simple information request, it is usually worth it. An accountant or tax adviser can handle correspondence, explain technical points, check the auditor's calculations and negotiate on penalties. Your preparation still matters, because organized invoices and reconciliations reduce the time they bill and the questions the auditor raises.",
      },
      {
        q: "Which supplier invoices does an auditor need for expenses?",
        a: "For every expense you deducted and every input VAT or GST credit you claimed, the auditor may ask for the supplier invoice or receipt. In VAT and GST systems, input tax claims usually require a valid tax invoice showing the supplier's tax number and the tax amount. Missing or invalid supplier invoices are one of the most common reasons claims are disallowed.",
      },
      {
        q: "How long does it take to get invoices audit-ready?",
        a: "If your bookkeeping is up to date, a few days to pull reports, run reconciliations and organize files. If records are scattered across email, drives and paper, it can take weeks. A monthly routine of filing every invoice, reconciling bank accounts and checking numbering keeps you close to audit-ready all year and turns an audit into a document-gathering exercise.",
      },
      {
        q: "Does using a free invoice generator cause problems in an audit?",
        a: "Not if you keep your own records. Our generator creates the PDF in your browser and saves drafts only on your device, so it is not a filing system. Save every PDF you send in an organized folder, keep a sales register listing each invoice number, date, client, net amount, tax and total, and back up both. That combination gives an auditor what they need.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Tax audit preparation for invoices means making sure every sales and purchase invoice is complete, numbered without unexplained gaps, stored where you can find it, and reconciled to your tax returns and bank statements. If you can show that your invoices add up to what you reported, most invoice audit questions are quick to answer.</p>

<p>A letter from a tax authority is stressful, but the outcome of an invoice audit often depends less on the auditor than on the state of your records. Auditors look for consistency: invoices that match returns, numbering that accounts for every sale, tax charged at the right rate and expenses backed by valid supplier invoices. This guide explains what auditors typically check, how to run the reconciliations yourself, a worked example, and a checklist for tax audit preparation that works whether you have weeks of notice or a few days. If you are still creating invoices by hand, the <a href="/invoice-generator">free invoice generator</a> produces consistent, numbered PDFs in your browser.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Audit procedures, retention periods and penalty rules vary by country. If you receive an audit notice, read it carefully, note the deadlines and consider professional representation.</p>

<h2>What auditors check on invoices</h2>
<p>Whether it is the IRS, HMRC, FBR, ZATCA or another authority, invoice audit work tends to follow the same logic: start with totals, then test the detail behind them.</p>
<table><thead><tr><th>Area</th><th>What the auditor tests</th><th>What you need</th></tr></thead><tbody>
<tr><td>Completeness of sales</td><td>Are all sales recorded and reported?</td><td>Complete invoice series, sales register, bank deposits reconciled</td></tr>
<tr><td>Invoice numbering</td><td>Gaps, duplicates, out-of-sequence numbers</td><td>Numbering log with voids explained</td></tr>
<tr><td>Tax on sales</td><td>Correct rates, registration numbers, treatment of exempt, zero-rated and reverse-charge sales</td><td>Invoices showing rates and wording; evidence for zero rating</td></tr>
<tr><td>Expenses and input tax</td><td>Valid supplier invoices behind every deduction and credit</td><td>Purchase invoices and receipts filed by period</td></tr>
<tr><td>Timing</td><td>Income and tax in the right period</td><td>Invoice and supply dates; cut-off at period ends</td></tr>
<tr><td>Adjustments</td><td>Credit notes, write-offs and corrections</td><td>Credit notes referencing originals; reasons documented</td></tr>
<tr><td>Payments</td><td>Cash matches invoices; withholding credits supported</td><td>Bank statements, remittance advices, withholding certificates</td></tr>
</tbody></table>
<p>Many authorities now use data matching before an audit starts, for example comparing your return with third-party information such as Forms 1099, e-invoicing records or customers' input tax claims. In e-invoicing countries, the authority may already hold a copy of every invoice you issued, so a mismatch with your return stands out immediately.</p>

<h2>Step-by-step tax audit preparation</h2>
<ol>
<li><strong>Read the notice.</strong> Identify the tax, the periods covered, the documents requested and the deadline. Ask for more time early if you need it.</li>
<li><strong>Gather the records.</strong> Sales invoices, purchase invoices, credit and debit notes, bank statements, the general ledger, filed returns, contracts and correspondence for the periods in question.</li>
<li><strong>Build or export a sales register.</strong> One row per invoice: number, date, client, net amount, tax, total and payment date.</li>
<li><strong>Check numbering.</strong> Confirm every number in the series is accounted for, including voids.</li>
<li><strong>Reconcile invoices to returns.</strong> Total net sales and output tax per period and compare them with the returns you filed.</li>
<li><strong>Reconcile invoices to the bank.</strong> Match receipts to invoices and explain differences such as fees, withholding and partial payments.</li>
<li><strong>Review purchase invoices.</strong> Check that every input tax claim has a valid supplier invoice with the supplier's tax number.</li>
<li><strong>Fix and document errors.</strong> Prepare corrections and a short explanation before the auditor finds them.</li>
<li><strong>Organize the file.</strong> Index documents by period and type so you can answer requests quickly.</li>
</ol>

<h2>Invoice audit checks you can run yourself</h2>
<h3>Numbering and completeness</h3>
<p>Sort the sales register by invoice number and look for gaps, duplicates and numbers out of date order. Every gap needs an explanation, such as a voided invoice that you kept. A consistent sequence is easier to defend; our guide to an <a href="/blog/invoice-numbering-system">invoice numbering system</a> explains how to set one up, and the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you keep the format consistent.</p>
<h3>Required fields</h3>
<p>Sample at least a few invoices per period and check them against the mandatory fields for your country: your tax ID, the customer's tax ID for B2B sales, supply date, rate and tax amount. Our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> comparison lists the fields for nine jurisdictions, and the <a href="/blog/tax-invoice-guide">tax invoice guide</a> explains the general rules.</p>
<h3>Tax treatment</h3>
<p>Check that zero-rated, exempt and reverse-charge invoices carry the right wording and that you have the supporting evidence, such as proof of export or the customer's VAT number. Mistakes here often produce the largest assessments, because the auditor can charge the full standard rate on an unsupported zero-rated sale.</p>
<h3>Withholding and payments</h3>
<p>Where clients deducted tax at source, match each short payment to a withholding certificate so the gap is not mistaken for unrecorded income or an unpaid balance. Our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> shows how to record it.</p>
<h3>Corrections</h3>
<p>Every change to an issued invoice should be a credit note or debit note, not an edited PDF. If you find edited originals, document what happened and issue proper corrections now. See our <a href="/blog/credit-note-guide">credit note guide</a> for the correct format.</p>

<h2>Worked example: reconciling invoices to a VAT return</h2>
<p>A UK consultancy is asked about its VAT return for one quarter. It exports its sales register and compares it with the return.</p>
<table><thead><tr><th>Item</th><th>Net (£)</th><th>VAT (£)</th></tr></thead><tbody>
<tr><td>Invoices INV-1201 to INV-1260 in the register (standard-rated, 20%)</td><td>84,000.00</td><td>16,800.00</td></tr>
<tr><td>Less: credit note CN-014 against INV-1222</td><td>(1,500.00)</td><td>(300.00)</td></tr>
<tr><td><strong>Per invoices</strong></td><td><strong>82,500.00</strong></td><td><strong>16,500.00</strong></td></tr>
<tr><td>Per VAT return as filed</td><td>81,000.00</td><td>16,200.00</td></tr>
<tr><td><strong>Difference</strong></td><td><strong>1,500.00</strong></td><td><strong>300.00</strong></td></tr>
</tbody></table>
<p>The arithmetic: 84,000 × 20% = 16,800 of VAT on the invoices; the credit note reduces net by 1,500 and VAT by 1,500 × 20% = 300, giving 82,500 net and 16,500 VAT. The return shows 81,000 and 16,200, so 82,500 − 81,000 = £1,500 of net sales and 16,500 − 16,200 = £300 of VAT appear in the register but not on the return.</p>
<p>Next, the owner traces the difference. The credit note CN-014 was raised late, after the return had been prepared, but the bookkeeper had already reduced INV-1222 by the same £1,500 when preparing the return. The credit was therefore deducted twice in the books used for the return. Then the numbering check: INV-1201 to INV-1260 should be 1260 − 1201 + 1 = 60 invoices, and the register holds all 60, so no sales are missing.</p>
<p>The result is that the return under-declared £300 of VAT. Because the business found the error first, it can correct it under HMRC's error-correction rules and explain it to the auditor, rather than having it discovered during the audit. Check the current HMRC rules for whether an error can be adjusted on a later return or must be reported separately.</p>

<h2>Handling the audit once it starts</h2>
<p>Good tax audit preparation also covers how you respond once the auditor's questions arrive. A few habits keep the process short and calm:</p>
<ul>
<li><strong>Keep one point of contact.</strong> Route every request through one person, or your adviser, so answers stay consistent.</li>
<li><strong>Log every request.</strong> Note the date, what was asked, what you supplied and when. This protects you if a document is later said to be missing.</li>
<li><strong>Send copies, not originals.</strong> Keep your originals and send clear, complete copies in the format requested.</li>
<li><strong>Answer the question asked.</strong> Provide accurate, complete answers to each request, and ask for clarification if a request is vague rather than guessing.</li>
<li><strong>Explain differences with numbers.</strong> A short reconciliation showing how invoice totals connect to the return is far more persuasive than a general explanation.</li>
<li><strong>Review the findings.</strong> Check the auditor's calculations, rates and periods before you accept any assessment. Errors in assessments do happen, and most systems give you a right to ask for a review or appeal within a deadline.</li>
</ul>
<p>In e-invoicing countries such as Saudi Arabia, India and Pakistan, an extra check applies: the invoices in your own records should match the invoices cleared or reported through the government platform. Before an audit, compare your sales register with the platform's records for the same period and investigate any invoice that appears in one but not the other.</p>

<h2>Organizing records for an audit</h2>
<p>Auditors judge your records partly by how quickly you can produce them. A simple structure works for most small businesses:</p>
<ul>
<li><strong>Folders by tax year and period</strong>, each with Sales invoices, Purchase invoices, Credit notes, Bank statements and Returns subfolders.</li>
<li><strong>Consistent file names</strong>, such as "2026-03 INV-1247 ClientName.pdf", so searches work.</li>
<li><strong>A sales register and a purchase register</strong> in a spreadsheet or accounting system.</li>
<li><strong>Backups</strong> in at least two places, one off-site or in the cloud.</li>
<li><strong>Retention</strong> for the full legal period; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>. The IRS explains US periods on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" target="_blank" rel="noopener noreferrer">how long should I keep records</a> page, and HMRC sets out VAT record rules in <a href="https://www.gov.uk/guidance/record-keeping-for-vat-notice-70021" target="_blank" rel="noopener noreferrer">VAT Notice 700/21</a>.</li>
</ul>
<p>If your system relies on a browser-based generator, remember that it is not an archive. Save each PDF in your own files the moment you send it. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide shows how to keep a simple ledger alongside your invoices.</p>

<h2>Tax audit preparation checklist</h2>
<ul>
<li>Audit notice read; periods, taxes, requests and deadlines noted.</li>
<li>All sales invoices, purchase invoices and credit or debit notes collected for the periods.</li>
<li>Sales register complete, with one row per invoice.</li>
<li>Numbering log accounts for every number, including voids.</li>
<li>Invoice totals reconciled to each return, with differences explained.</li>
<li>Bank deposits reconciled to invoices, including fees and withholding.</li>
<li>Supplier invoices support every expense and input tax claim.</li>
<li>Evidence on file for zero-rated, exempt and reverse-charge sales.</li>
<li>Errors corrected with credit notes or amended returns, with reasons recorded.</li>
<li>Records indexed and backed up; adviser engaged if needed.</li>
</ul>

<h2>Common mistakes in invoice audits</h2>
<ul>
<li><strong>Deleting voided invoices</strong>, which creates unexplained numbering gaps.</li>
<li><strong>Editing issued invoices</strong> instead of issuing credit notes, which breaks the audit trail.</li>
<li><strong>Keeping invoices only in email</strong>, where they are hard to retrieve and easy to lose.</li>
<li><strong>Claiming input tax without a valid tax invoice</strong>, such as from a receipt without the supplier's tax number.</li>
<li><strong>Missing customer tax IDs</strong> on reverse-charge or zero-rated sales.</li>
<li><strong>Mixing personal and business payments</strong>, which makes bank reconciliation slow and invites questions.</li>
<li><strong>Volunteering unrequested documents or opinions</strong> without advice; answer what is asked, accurately and on time.</li>
<li><strong>Missing deadlines</strong>, which can lead to estimated assessments.</li>
</ul>

<h2>Staying audit-ready all year</h2>
<p>The best audit preparation is a routine that keeps records clean as you go. Once a month, file every invoice you sent and received, reconcile your bank account, check the numbering sequence and note any corrections. Once a quarter, reconcile invoices to the tax return before you file it. At year end, archive the year and confirm backups. Tax authorities increasingly receive invoice data directly through e-invoicing and third-party reporting, so consistent records are no longer optional. If you file in the US, the IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/irs-audits" target="_blank" rel="noopener noreferrer">IRS audits</a> is a useful official overview of the process.</p>
<p>When you create new invoices, use one consistent layout, such as the <a href="/invoice-templates/corporate">Corporate invoice template</a>, so every document carries the same fields in the same place, and keep a dated copy of every PDF you send.</p>
`,
  },
];
