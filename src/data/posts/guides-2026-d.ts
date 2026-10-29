import type { PostDraft } from "../blog";

export const GUIDES_2026_D_POSTS: PostDraft[] = [
  {
    slug: "how-to-invoice-as-an-llc",
    title: "LLC Invoice: How to Invoice as an LLC (Free Template)",
    description:
      "LLC invoice guide: show your full legal LLC name, EIN, address and terms, get paid into the business account, and copy a sample LLC invoice with real totals.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-invoice-as-a-sole-proprietor", "how-to-start-an-llc", "tax-id-on-invoice"],
    faqs: [
      {
        q: "Does an LLC invoice need to say LLC after the business name?",
        a: "Yes, in most cases. State laws require an LLC to use its registered name, which includes a designator such as LLC or L.L.C., when it deals with the public. Putting the full registered name on invoices tells clients they are contracting with the company rather than with you personally. If you trade under a DBA, show the brand and the legal name together, for example Brightside Design, a DBA of Brightside Creative LLC.",
      },
      {
        q: "Can a single-member LLC use the owner's SSN on invoices?",
        a: "A single-member LLC with no employees can use the owner's Social Security number for federal tax purposes, but you should not print an SSN on invoices. Apply for a free EIN from the IRS instead and give clients that number on Form W-9. An EIN protects your personal identity, looks more professional and is often required by banks to open a business account in the LLC's name.",
      },
      {
        q: "Should an LLC invoice show the owner's name?",
        a: "It does not have to. The seller on the invoice is the LLC, so the business name, address and contact details are enough. Many owners add their own name as the contact person, which is fine. What matters is that the document clearly identifies the LLC as the party issuing the invoice and receiving payment, so it is consistent with your contracts and your W-9.",
      },
      {
        q: "Can I deposit LLC invoice payments into my personal bank account?",
        a: "You should not. Paying business income into a personal account mixes funds, which makes bookkeeping and tax filing harder and can weaken the liability protection the LLC is meant to provide if a court finds the company was not kept separate. Put the LLC's business bank details on every invoice and pay yourself from that account through owner draws or salary, depending on how the LLC is taxed.",
      },
      {
        q: "Do LLCs charge sales tax on invoices?",
        a: "An LLC charges sales tax the same way any other seller does: it depends on what you sell and where your customer is. Many states tax physical goods and some taxable services, while many professional services are exempt. If your LLC must collect tax, register for a seller's permit, show the tax as a separate line on the invoice and file returns on your state's schedule.",
      },
      {
        q: "Will clients send my LLC a 1099?",
        a: "Often, yes. Clients that pay an LLC taxed as a sole proprietorship or partnership for services generally file Form 1099-NEC once payments reach the reporting threshold, which is $2,000 for payments made in 2026. LLCs taxed as corporations are usually exempt from 1099-NEC reporting. Your W-9 tells the client which tax classification applies, so fill it in carefully.",
      },
      {
        q: "Does a multi-member LLC invoice differently from a single-member LLC?",
        a: "The invoice itself looks the same: legal LLC name, address, EIN, invoice number, dates, line items, totals and payment details. The differences are behind the scenes. A multi-member LLC files a partnership return by default, so every member's share of income flows from the books, and the operating agreement may say who is allowed to issue invoices, approve discounts or sign contracts.",
      },
      {
        q: "What payment methods can an LLC list on an invoice?",
        a: "Any method that pays into an account held in the LLC's name: ACH or bank transfer, card payments through a processor, business checks made payable to the LLC, or business profiles on payment apps. Avoid personal payment app accounts, since they mix funds and can break the app's terms for commercial use. List one or two preferred methods clearly so clients do not have to ask.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An LLC invoice is a bill issued in the name of your limited liability company, not in your personal name. It should show the full legal LLC name (including LLC), business address, EIN or other tax ID, a unique invoice number, dates, itemized charges, totals, payment terms and payment details for a bank account held by the LLC.</p>

<p>Forming an LLC changes who is doing business with your clients. Before, it was you. Now it is the company. Your invoices are one of the clearest places that change shows up, and getting them right helps with bookkeeping, taxes and the liability protection you formed the LLC to get. This guide covers what to put on an LLC invoice, a worked example with totals, step-by-step instructions, and the mistakes that most often trip up new LLC owners.</p>

<h2>What is an LLC invoice?</h2>
<p>An LLC invoice is a request for payment issued by a limited liability company to a customer for goods or services. Legally, it is the same kind of document any business sends. The difference is the seller: the LLC, a separate legal entity registered with a state, rather than an individual.</p>
<p>That matters for three reasons:</p>
<ul>
<li><strong>Liability.</strong> When contracts, invoices and payments run through the LLC, it is easier to show the company is a genuine separate business. Mixing personal and business dealings is one of the factors courts consider when deciding whether to hold owners personally liable.</li>
<li><strong>Taxes.</strong> The IRS treats an LLC according to its classification: a single-member LLC is a disregarded entity by default, a multi-member LLC is a partnership by default, and either can elect to be taxed as a corporation. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener">IRS LLC page</a> explains the options.</li>
<li><strong>Records.</strong> Invoices issued by the LLC, paid into the LLC's account, create a clean income trail for your tax return and any future lender or buyer.</li>
</ul>
<p>If you have not set up the company yet, start with our guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a>. If you are still deciding on structure, compare <a href="/blog/llc-vs-sole-proprietorship">an LLC vs a sole proprietorship</a>, or read the companion guide on <a href="/blog/how-to-invoice-as-a-sole-proprietor">how to invoice as a sole proprietor</a>.</p>

<h2>What should an LLC invoice include?</h2>
<p>An LLC invoice includes the standard invoice fields plus a few details that identify the company properly. Use this table as a checklist.</p>
<table>
<thead><tr><th>Field</th><th>What to show</th><th>Why it matters for an LLC</th></tr></thead>
<tbody>
<tr><td>Legal business name</td><td>Full registered name, e.g. Brightside Creative LLC</td><td>Shows the client is dealing with the company, not you personally</td></tr>
<tr><td>Trade name (DBA)</td><td>Optional brand name, linked to the legal name</td><td>Keeps branding and legal identity consistent</td></tr>
<tr><td>Business address</td><td>Registered office or business address</td><td>Matches your W-9 and state records</td></tr>
<tr><td>Tax ID</td><td>EIN (never your SSN)</td><td>Clients use it for 1099 reporting</td></tr>
<tr><td>Invoice number</td><td>Unique, sequential, e.g. BC-2026-041</td><td>Audit trail and easy matching of payments</td></tr>
<tr><td>Invoice and due dates</td><td>Issue date plus a specific due date</td><td>Avoids disputes over when payment is late</td></tr>
<tr><td>Client details</td><td>Client's legal name, contact, address, PO number</td><td>Helps the client's accounts payable approve it</td></tr>
<tr><td>Line items</td><td>Description, quantity or hours, rate, amount</td><td>Shows what was delivered under the contract</td></tr>
<tr><td>Tax</td><td>Sales tax line if your LLC must collect it</td><td>Keeps tax separate from revenue</td></tr>
<tr><td>Payment details</td><td>LLC's business bank account, payment link</td><td>Keeps business money out of personal accounts</td></tr>
<tr><td>Terms</td><td>Net 15 or Net 30, late fee policy</td><td>Sets expectations in writing</td></tr>
</tbody>
</table>
<p>For more on where the tax ID goes and when to show it, see <a href="/blog/tax-id-on-invoice">tax IDs on invoices</a>. If you still need a number, the IRS issues EINs free online; our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> walks through the application, and <a href="/blog/ein-vs-ssn">EIN vs SSN</a> explains why the EIN is the better number to share.</p>

<h3>Should you include "LLC" in the name on the invoice?</h3>
<p>Yes. State LLC statutes generally require the company to operate under its registered name, which contains LLC, L.L.C. or Limited Liability Company. Leaving it off can blur who the contracting party is. If you use a DBA, register it where your state requires and show both names, such as <em>Brightside Design, a DBA of Brightside Creative LLC</em>.</p>

<h2>LLC invoice example with real numbers</h2>
<p>Here is a sample LLC invoice for a single-member design company billing a retail client in a state where these services are not subject to sales tax. The numbers are illustrative.</p>
<p><strong>From:</strong> Brightside Creative LLC, 410 Elm Street, Suite 2, Columbus, OH 43215. EIN 12-3456789.<br><strong>Bill to:</strong> Harbor Goods Inc., Accounts Payable, PO #7781.<br><strong>Invoice #:</strong> BC-2026-041. <strong>Date:</strong> October 29, 2026. <strong>Due:</strong> November 28, 2026 (Net 30).</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Brand refresh: logo redesign (milestone 2 of 3)</td><td>1</td><td>$1,800.00</td><td>$1,800.00</td></tr>
<tr><td>Packaging layout, 3 SKUs</td><td>3</td><td>$350.00</td><td>$1,050.00</td></tr>
<tr><td>Additional revision rounds</td><td>4 hrs</td><td>$85.00</td><td>$340.00</td></tr>
<tr><td>Stock image license (reimbursable, at cost)</td><td>2</td><td>$29.00</td><td>$58.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$3,248.00</strong></td></tr>
<tr><td colspan="3">Sales tax (services not taxable in this example)</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$3,248.00</strong></td></tr>
</tbody>
</table>
<p><strong>Payment:</strong> ACH to Brightside Creative LLC, business checking (routing and account number on file), or pay online via the link in the invoice email. Checks payable to Brightside Creative LLC. A late fee of 1.5% per month applies to balances unpaid after the due date, where permitted by law.</p>
<p>Check the arithmetic: $1,800 + $1,050 + $340 + $58 = $3,248. If the same LLC sold a taxable product in a state with a 6% rate on a $500 item, the tax line would be $500 × 0.06 = $30, shown separately. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> handles the math, and <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> covers how to display it.</p>

<h2>How to invoice as an LLC: step by step</h2>
<ol>
<li><strong>Confirm your legal name and EIN.</strong> Copy the exact name from your articles of organization and the EIN from your IRS confirmation letter (CP 575).</li>
<li><strong>Open a business bank account.</strong> Use the LLC's name and EIN. Our guide to <a href="/blog/business-bank-account-for-freelancers">business bank accounts</a> lists what banks usually ask for.</li>
<li><strong>Send a W-9 to US clients.</strong> Fill in the LLC's name, tax classification and EIN. See <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 rules for contractors</a>.</li>
<li><strong>Set up your invoice layout.</strong> Add the legal name, logo, address and EIN to the header once. A <a href="/invoice-generator">free invoice generator</a> saves you from rebuilding this each time.</li>
<li><strong>Choose a numbering system.</strong> Use a prefix plus year plus sequence, such as BC-2026-041. The <a href="/tools/invoice-number-generator">invoice number generator</a> can create a consistent format.</li>
<li><strong>Itemize the work.</strong> Match line items to the contract or statement of work, and list reimbursable costs separately.</li>
<li><strong>Apply sales tax only where required.</strong> Check your state's rules for your goods or services.</li>
<li><strong>State terms and payment methods.</strong> Give a clear due date and business-account payment options.</li>
<li><strong>Send, track and follow up.</strong> Log each invoice and send reminders before and after the due date.</li>
<li><strong>Record payments in the LLC's books.</strong> Match each deposit to its invoice number.</li>
</ol>

<h2>How does LLC tax classification affect invoicing?</h2>
<p>Your tax classification does not change the invoice layout, but it changes what happens to the money and the paperwork clients file.</p>
<table>
<thead><tr><th>LLC type</th><th>Default federal tax treatment</th><th>Will clients usually send a 1099-NEC?</th></tr></thead>
<tbody>
<tr><td>Single-member LLC</td><td>Disregarded entity, income on owner's Schedule C</td><td>Usually yes, above the threshold</td></tr>
<tr><td>Multi-member LLC</td><td>Partnership, Form 1065 with K-1s</td><td>Usually yes, above the threshold</td></tr>
<tr><td>LLC electing S corp</td><td>Form 1120-S, owner salary plus distributions</td><td>Usually no (corporations are generally exempt)</td></tr>
<tr><td>LLC electing C corp</td><td>Form 1120, corporate tax</td><td>Usually no</td></tr>
</tbody>
</table>
<p>For the detail, read <a href="/blog/does-an-llc-get-a-1099">does an LLC get a 1099</a>, <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>, and <a href="/blog/llc-tax-rate">the LLC tax rate explained</a>. This is general information, not tax or legal advice; your accountant can confirm what applies to your company.</p>

<h2>How should an LLC get paid?</h2>
<p>Every payment option on your LLC invoice should deposit into an account held by the LLC. Common choices:</p>
<ul>
<li><strong>ACH or bank transfer:</strong> low cost, good for larger invoices and business clients.</li>
<li><strong>Card payments:</strong> faster, but processing fees usually run around 3% per transaction, so factor that into pricing.</li>
<li><strong>Business checks:</strong> ask clients to make them payable to the full LLC name.</li>
<li><strong>Payment apps:</strong> use business profiles only, linked to the LLC's bank account.</li>
</ul>
<p>Then pay yourself from the business account. In a default single-member LLC that is an owner's draw; in an LLC taxed as an S corp it is a mix of payroll and distributions. Keeping that flow clean is what makes the LLC a real separate business on paper.</p>

<h2>Common mistakes when invoicing as an LLC</h2>
<ul>
<li><strong>Invoicing in your personal name.</strong> It undermines the separation between you and the company and can confuse clients' 1099 reporting.</li>
<li><strong>Dropping the LLC designator.</strong> Brightside Creative and Brightside Creative LLC are not the same name on paper.</li>
<li><strong>Printing your SSN.</strong> Use the EIN, and share tax IDs on a W-9 rather than in emails.</li>
<li><strong>Taking payment to a personal account or app.</strong> Mixing funds is the most common way owners weaken their liability shield.</li>
<li><strong>Mismatched details.</strong> The name and EIN on the invoice, W-9 and bank account should all match.</li>
<li><strong>Restarting invoice numbers when you form the LLC.</strong> Starting a new series is fine, but never reuse a number within the same series.</li>
<li><strong>Charging sales tax you are not registered to collect.</strong> Register first (usually by getting a seller's permit), or do not add it.</li>
<li><strong>Vague terms.</strong> Add clear payment terms and a late fee clause.</li>
</ul>

<h2>LLC invoice checklist before you hit send</h2>
<ul>
<li>Full legal LLC name (and DBA if used)</li>
<li>Business address and contact email</li>
<li>EIN, matching your W-9</li>
<li>Unique invoice number and invoice date</li>
<li>Specific due date and payment terms</li>
<li>Client legal name and PO number if they use one</li>
<li>Itemized line items that match the contract</li>
<li>Sales tax line only if your LLC is registered to collect</li>
<li>Payment details for the LLC's business account</li>
<li>Saved copy in your records, filed by invoice number</li>
</ul>

<h2>Create your LLC invoice in minutes</h2>
<p>An LLC invoice is simple once the header is right: the full legal name with LLC, your EIN, a unique number, clear terms and business-account payment details. Get those consistent and your books, your 1099s and your liability protection all benefit. You can build an LLC invoice now with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and downloads a PDF built right in your browser.</p>
`,
  },
  {
    slug: "amazon-business-invoice",
    title: "Amazon Invoice: Seller VAT Invoices and Uploads (2026)",
    description:
      "Amazon invoice guide for sellers and buyers: what Amazon Business customers expect, VAT Calculation Service vs uploading your own PDF invoices, plus a sample.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-start-an-amazon-fba-business",
      "ecommerce-invoice-shopify-woocommerce",
      "vat-invoice-guide",
      "etsy-invoice",
    ],
    faqs: [
      {
        q: "How do I get an invoice for an Amazon order?",
        a: "As a buyer, open Your Orders, find the order and look for the Invoice or View invoice option, which lets you download or print an order summary or invoice. For items sold by third-party sellers, the document may come from the seller, and in some marketplaces you can use a Request invoice option or contact the seller. Amazon Business accounts often show downloadable VAT or tax invoices where sellers provide them.",
      },
      {
        q: "Does Amazon create invoices for third-party sellers automatically?",
        a: "In Europe and the UK, sellers who enroll in Amazon's VAT Calculation Service can choose to have Amazon generate VAT invoices for them using the seller's details. Sellers who do not use that option must create their own invoices and upload them. In the US, Amazon provides order documents to buyers, but sellers should still keep their own sales records and respond to any business buyer invoice requests.",
      },
      {
        q: "What format must invoices uploaded to Amazon be in?",
        a: "Amazon's seller documentation for invoice uploads says the file must be a PDF, and the invoice number should be included in the upload's metadata. Each shipment needs its own invoice, so FBA orders that ship in several parts need several invoices. Check Seller Central and Amazon's developer documentation for the current upload steps and timing, because policies are updated periodically.",
      },
      {
        q: "How quickly do sellers need to upload invoices to Amazon?",
        a: "For sellers in the VAT Calculation Service who upload their own invoices, Amazon's developer best-practices page says invoices should be uploaded within one business day after shipment, and that sellers who repeatedly miss this can be removed from the program. Late or missing invoices also hurt your invoice performance metrics for Amazon Business orders, so automate the upload if you ship in volume.",
      },
      {
        q: "Do Amazon sellers need to charge sales tax on invoices in the US?",
        a: "For sales made through Amazon's US marketplace, Amazon generally calculates, collects and remits sales tax as the marketplace facilitator in states that require it. Your invoice or record should still show the tax Amazon collected so totals match. Sales you make outside Amazon, such as on your own website, follow your own state registration and collection rules.",
      },
      {
        q: "What is the difference between an Amazon invoice and an order summary?",
        a: "An order summary is a record of what was ordered, paid and shipped. A VAT invoice or tax invoice is a legal document with the seller's name, address and VAT number, invoice number, tax rate and tax amount, which a business buyer can use to reclaim input VAT. In VAT countries, a business customer usually needs the full invoice, not just a summary.",
      },
      {
        q: "Can Amazon Business buyers reclaim VAT without a proper invoice?",
        a: "Generally not. In the UK and EU, a VAT-registered buyer normally needs a valid VAT invoice from the supplier to support an input VAT claim. That is why Amazon Business tracks whether sellers supply invoices and shows a downloadable VAT invoice badge on eligible offers. If an invoice is missing details, the buyer may ask you for a corrected document.",
      },
      {
        q: "Can I use a free invoice generator for Amazon orders?",
        a: "Yes, for occasional orders or for sales outside the marketplace. A generator produces a clean PDF with your business and tax details, which you can upload or send. At higher volumes, Amazon sellers usually rely on the VAT Calculation Service or an integrated invoicing tool so invoices are created and uploaded automatically for every shipment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An Amazon invoice is the billing document for an order sold on Amazon. Buyers download it from Your Orders. Third-party sellers either let Amazon generate VAT invoices through the VAT Calculation Service (UK and EU) or create their own PDF invoices and upload them for each shipment, which matters most for Amazon Business customers who reclaim VAT.</p>

<p>People searching for an Amazon invoice are usually in one of two situations. Either you bought something and need an invoice for expenses or VAT, or you sell on Amazon and need to know what invoices you owe your customers. This guide covers both, with a focus on sellers: what an Amazon seller invoice must contain, when Amazon creates it for you, how uploads work, and a sample invoice you can copy.</p>

<h2>What is an Amazon seller invoice?</h2>
<p>An Amazon seller invoice is the invoice a seller issues to the buyer for goods sold through an Amazon marketplace. When Amazon itself is the seller (items sold by Amazon), Amazon issues the invoice. When a third-party seller is the seller of record, the invoice obligation sits with that seller, even if Amazon fulfills the order (FBA).</p>
<p>In the US, consumers rarely need more than an order receipt. In VAT countries such as the UK, Germany, France and Italy, business buyers need a valid VAT invoice to reclaim input tax, and Amazon Business tracks whether sellers provide one. That is where most of the rules below come from. For the general requirements of a VAT invoice, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>How do buyers download an invoice from Amazon?</h2>
<ol>
<li>Sign in and go to <strong>Your Orders</strong> (Returns and Orders).</li>
<li>Find the order and select <strong>Invoice</strong> or <strong>View invoice</strong>.</li>
<li>Download or print the order summary or invoice. On Amazon Business, look for the VAT or tax invoice where available.</li>
<li>If the item came from a third-party seller and no invoice appears, use the request invoice or contact seller option, depending on your marketplace.</li>
</ol>
<p>The exact menu names vary by marketplace and app version. Remember that a simple order summary may not count as a VAT invoice for reclaiming tax.</p>

<h2>VAT Calculation Service vs uploading your own invoices</h2>
<p>Amazon's <a href="https://developer-docs.amazon.com/sp-api/docs/vat-calculation-service-guide" target="_blank" rel="noopener">VAT Calculation Service (VCS) documentation</a> describes three ways European and UK sellers can handle invoices. As of October 2026 they are:</p>
<table>
<thead><tr><th>Option</th><th>Who creates the invoice</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>1. Amazon creates invoices</td><td>Amazon, using your VAT registration and tax settings</td><td>Most sellers who want hands-off compliance</td><td>Your tax settings and product tax codes must be right</td></tr>
<tr><td>2. Your invoices, Amazon's tax data</td><td>You or your software, using Amazon's tax calculation, then uploaded</td><td>Sellers who need their own invoice numbering or layout</td><td>Requires a solution provider or SP-API integration</td></tr>
<tr><td>3. Fully your own invoices</td><td>You, outside VCS, uploaded through Seller Central or SP-API</td><td>Sellers with established ERP or accounting invoicing</td><td>Upload for every shipment, on time</td></tr>
</tbody>
</table>
<p>Amazon's <a href="https://developer-docs.amazon.com/sp-api/docs/vat-calculation-service-best-practices" target="_blank" rel="noopener">best-practices page</a> sets the key upload rules: PDF only, the seller invoice number in the upload metadata, one invoice per shipment (so split FBA shipments need separate invoices), and upload within one business day after shipment. Sellers who regularly miss uploads can be removed from VCS. Enrolling in VCS also lets Amazon Business sellers show VAT-exclusive prices and the downloadable VAT invoice badge, which business buyers look for.</p>

<h2>What must an Amazon VAT invoice include?</h2>
<p>For a UK or EU business buyer, a full VAT invoice generally needs:</p>
<ul>
<li>A unique, sequential invoice number and the invoice date</li>
<li>The time of supply (tax point) if different from the invoice date</li>
<li>Your business name, address and VAT registration number</li>
<li>The buyer's name and address (and VAT number for cross-border B2B supplies)</li>
<li>A description of the goods and quantity</li>
<li>The unit price excluding VAT, the VAT rate and the VAT amount per rate</li>
<li>The total excluding VAT and the total including VAT</li>
<li>Reverse charge wording where the buyer accounts for VAT (see <a href="/blog/reverse-charge-invoice">reverse charge invoices</a>)</li>
</ul>
<p>Credit notes follow the same logic for refunds and must reference the original invoice. Sellers shipping B2C across EU borders should also understand the <a href="/blog/eu-vat-one-stop-shop">VAT One Stop Shop</a>, and the <a href="/blog/eu-vat-rates-2026">EU VAT rates for 2026</a> since each country's rate applies.</p>

<h2>Sample Amazon seller invoice (UK B2B order)</h2>
<p>This illustrative invoice is for a UK seller shipping office supplies to a VAT-registered Amazon Business customer at the 20% standard rate.</p>
<p><strong>Seller:</strong> Northlane Supplies Ltd, Unit 4, Mill Road, Leeds LS1 4AB. VAT No. GB123456789.<br><strong>Buyer:</strong> Corbin Architects Ltd, 22 King Street, Manchester M2 4WU. Amazon order 205-1234567-7654321.<br><strong>Invoice #:</strong> NLS-AMZ-10482. <strong>Invoice date / tax point:</strong> 29 October 2026 (date of shipment).</p>
<table>
<thead><tr><th>Item</th><th>Qty</th><th>Unit price (ex VAT)</th><th>VAT rate</th><th>Net</th></tr></thead>
<tbody>
<tr><td>A4 copier paper, 5 reams</td><td>4</td><td>£18.50</td><td>20%</td><td>£74.00</td></tr>
<tr><td>Desk organiser, black mesh</td><td>2</td><td>£12.00</td><td>20%</td><td>£24.00</td></tr>
<tr><td>Shipping</td><td>1</td><td>£6.00</td><td>20%</td><td>£6.00</td></tr>
<tr><td colspan="4"><strong>Total excluding VAT</strong></td><td><strong>£104.00</strong></td></tr>
<tr><td colspan="4">VAT at 20%</td><td>£20.80</td></tr>
<tr><td colspan="4"><strong>Total including VAT</strong></td><td><strong>£124.80</strong></td></tr>
</tbody>
</table>
<p>Check: £74 + £24 + £6 = £104 net; £104 × 0.20 = £20.80 VAT; £104 + £20.80 = £124.80. Shipping follows the VAT treatment of the goods in this example. Save it as a PDF named with the invoice number and upload it against the shipment.</p>

<h2>How to upload an invoice to Amazon (seller steps)</h2>
<ol>
<li><strong>Check which orders need one.</strong> In the VAT invoice data report or the order details, look for shipments where the invoice status is pending.</li>
<li><strong>Create the invoice per shipment.</strong> Use the shipment date as the tax point and include all the fields above.</li>
<li><strong>Export to PDF.</strong> Other formats are rejected. Keep the invoice number visible on the document.</li>
<li><strong>Upload.</strong> In Seller Central, open the order and use the upload invoice option, or send it through an integrated tool via SP-API with the invoice number in the metadata.</li>
<li><strong>Watch for rejections.</strong> A rejected upload must be fixed and resubmitted.</li>
<li><strong>Monitor your invoice metrics.</strong> Amazon Business reports late or missing invoices, and poor performance can affect your business offers.</li>
</ol>
<p>Invoices sent only through buyer-seller messages may not satisfy the Amazon Business invoicing policy, so use the formal upload route. Confirm the latest steps in Seller Central, since screens change.</p>

<h2>What about US Amazon sellers?</h2>
<p>US sellers have a lighter invoicing load. Amazon acts as the marketplace facilitator and collects and remits state sales tax on most marketplace orders in states that require it, and buyers get order documents from Amazon. Still:</p>
<ul>
<li>Business buyers sometimes ask for a formal invoice with your business name and address for their records.</li>
<li>Your own bookkeeping should record gross sales, tax collected by Amazon, fees and payouts separately.</li>
<li>Sales on your own website or other channels follow your own <a href="/blog/sales-tax-nexus">sales tax nexus</a> and registration rules, covered in <a href="/blog/sales-tax-by-state">sales tax by state</a>.</li>
<li>Payment platforms report sales on Form 1099-K once you pass the federal threshold; see <a href="/blog/1099-k-threshold">the 1099-K threshold</a>.</li>
</ul>
<p>For off-Amazon orders, a <a href="/invoice-generator">free invoice generator</a> is enough to produce a professional PDF. Multi-channel sellers can compare approaches in our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoices for Shopify, WooCommerce and Amazon</a>.</p>

<h2>How should Amazon sellers number invoices and credit notes?</h2>
<p>VAT rules in the UK and EU require invoice numbers to be unique and follow a sequence, with no gaps you cannot explain. Amazon sellers often trade in several marketplaces and sell through other channels too, so plan the numbering before the volume grows.</p>
<table>
<thead><tr><th>Approach</th><th>Example</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>One series for every channel</td><td>INV-10482, INV-10483</td><td>Simple, no duplicates</td><td>Harder to see which channel an invoice came from</td></tr>
<tr><td>Prefixed series per marketplace</td><td>AMZ-UK-0482, AMZ-DE-0119, WEB-0233</td><td>Easy filtering and reconciliation</td><td>Each series must stay sequential on its own</td></tr>
<tr><td>Separate credit note series</td><td>CN-AMZ-UK-0031</td><td>Clear audit trail for refunds</td><td>Must always reference the original invoice number</td></tr>
</tbody>
</table>
<p>Whichever you choose, write it down and stick to it. If you let Amazon generate invoices through VCS, Amazon's invoices follow its own numbering, so keep any manual invoices you issue for other channels in a separate, clearly prefixed series. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you design a format.</p>
<p>Refunds deserve the same care. When an Amazon Business customer returns goods from an invoiced order, issue a credit note for the refunded amount, showing the net value, the VAT rate and the VAT reversed, and quote the original invoice number and date. Upload it the same way you upload invoices. Partial refunds, such as a refund for one damaged item out of four, need a credit note only for that portion.</p>
<p>Keep copies of every invoice and credit note with the matching order and settlement reports. HMRC and EU tax authorities generally expect VAT records to be kept for several years, and good records make your VAT returns, and any later questions from a tax office or a business customer, much easier to deal with.</p>

<h2>Common Amazon invoice mistakes</h2>
<ul>
<li><strong>One invoice for a split shipment.</strong> Each shipment needs its own invoice.</li>
<li><strong>Uploading images or Word files.</strong> Amazon accepts PDFs.</li>
<li><strong>Missing VAT number or VAT breakdown.</strong> Business buyers cannot reclaim VAT without them.</li>
<li><strong>Wrong tax point.</strong> Use the shipment date unless your rules say otherwise.</li>
<li><strong>Reusing invoice numbers across marketplaces.</strong> Keep one sequential series, or separate prefixed series per marketplace, with no duplicates.</li>
<li><strong>Late uploads.</strong> Missing the one-business-day window can cost you VCS access and Business badges.</li>
<li><strong>Not issuing credit notes for refunds.</strong> A refund on an invoiced order needs a matching credit note.</li>
</ul>

<h2>Make Amazon invoices that business buyers accept</h2>
<p>A good Amazon invoice is a standard VAT or sales invoice tied to one shipment: your legal and tax details, the buyer's details, itemized net prices, the tax rate and amount, and a unique number, uploaded as a PDF on time. For high volumes, let VCS or your software handle it; for off-Amazon or occasional orders, use our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and downloads a PDF built in your browser. This is general information, not tax advice; check your VAT position with an adviser.</p>
`,
  },
  {
    slug: "etsy-invoice",
    title: "Etsy Invoice: Custom Orders, Receipts and Sales Tax",
    description:
      "Etsy invoice guide: when Etsy receipts are enough, how to bill custom and wholesale orders the right way, how sales tax collected by Etsy works, plus a sample.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["amazon-business-invoice", "invoice-vs-receipt", "sales-tax-on-invoices-us"],
    faqs: [
      {
        q: "Does Etsy send invoices to buyers?",
        a: "Etsy sends buyers an order receipt by email and keeps it in their Purchases area, showing items, shipping, tax and the total paid. That receipt works for most consumer purchases. Etsy does not offer sellers a separate invoicing tool for billing customers before payment. For a custom order, you create a reserved listing and the buyer pays at checkout like any other Etsy purchase.",
      },
      {
        q: "Can I send an Etsy buyer a PayPal or bank invoice instead of using checkout?",
        a: "Not for a sale that started on Etsy. Etsy's rules prohibit fee avoidance, which includes moving a buyer you met through Etsy to an outside payment to skip Etsy's fees. Doing it can lead to account restrictions or suspension, and the buyer loses Etsy's purchase protection. Use a custom or reserved listing for anything arranged through Etsy messages.",
      },
      {
        q: "Do I need to charge sales tax on Etsy orders?",
        a: "For orders placed through Etsy checkout, Etsy calculates, collects and remits sales tax in US states that have marketplace facilitator laws, which covers every state with a statewide sales tax. You do not add tax yourself. Orders you sell through your own website, craft fairs or wholesale channels follow your own state registration and collection obligations.",
      },
      {
        q: "How do I print an invoice for an Etsy order?",
        a: "Sellers can open the order in Shop Manager under Orders and Shipping and print the order receipt or packing slip, which lists items, prices, shipping and the buyer's address. Buyers can view and print their receipt from Purchases. If a business buyer needs a document with your business name, address or tax number, you can prepare a matching invoice marked as paid.",
      },
      {
        q: "Should an Etsy invoice for a business buyer be marked paid?",
        a: "Yes, if the buyer already paid through Etsy checkout. Mark it Paid, reference the Etsy order number and payment date, and show the amounts exactly as charged, including any tax Etsy collected. A paid invoice is effectively a detailed receipt for the buyer's records. Never request a second payment on that document, because the order is already settled through Etsy.",
      },
      {
        q: "Do Etsy sellers get a 1099-K?",
        a: "Etsy issues Form 1099-K to US sellers whose payments reach the federal reporting threshold, and some states have lower thresholds of their own. Whether or not you receive one, all Etsy sales income is reportable. Keep your Etsy monthly statements and payment account reports, which break out sales, fees, refunds and tax collected, to reconcile with your tax return.",
      },
      {
        q: "How do I invoice wholesale customers I found through Etsy?",
        a: "If the wholesale relationship began on Etsy, keep those sales on Etsy through custom listings to stay within the fee avoidance rules. Wholesale buyers who found you independently, for example at a trade show or through your own website, can be invoiced directly with your own invoice, payment terms and resale certificate details for sales tax exemption.",
      },
      {
        q: "What is the difference between an Etsy receipt and an invoice?",
        a: "An Etsy receipt confirms a payment that has already happened through Etsy checkout. An invoice requests payment, or documents a sale in your own business's name with your invoice number and terms. For Etsy orders, the receipt is the primary record. Invoices are mainly for off-Etsy sales or for buyers who need a document showing your business details.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An Etsy invoice is usually not needed, because Etsy issues an order receipt for every checkout and collects US sales tax for you. Sellers create their own invoice only for off-Etsy sales or when a business buyer needs a paid invoice with your business details. Custom orders arranged on Etsy should be billed through a reserved listing, not an outside invoice.</p>

<p>Etsy sellers often ask how to send an invoice for a custom order, a bulk order or a corporate gift. The answer depends on where the sale started. This guide explains what Etsy already provides, when you should create your own invoice, how Etsy's sales tax collection affects your paperwork, and how to stay inside Etsy's rules. It ends with a sample paid invoice and a checklist.</p>

<h2>What is an Etsy invoice?</h2>
<p>Strictly, Etsy does not issue invoices to buyers before payment. Buyers pay at checkout and receive an <strong>order receipt</strong>, which shows the items, quantities, item price, shipping, sales tax collected, discounts and total. Sellers see the same order in Shop Manager and can print a receipt or packing slip.</p>
<p>So when people search for an Etsy invoice, they usually mean one of three things:</p>
<ul>
<li>A printable receipt for an Etsy purchase (buyer or seller side)</li>
<li>A way to charge a buyer for a custom or special order</li>
<li>A formal invoice in the seller's business name for a business customer, wholesale account or off-Etsy sale</li>
</ul>
<p>If you are unsure how receipts and invoices differ, our explainer on <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> covers the basics, and our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what a receipt includes.</p>

<h2>How do custom orders work on Etsy?</h2>
<p>For a custom order agreed in Etsy messages, the compliant way to bill is a custom (reserved) listing:</p>
<ol>
<li>Agree the details in Etsy Messages: design, size, materials, price, shipping and timing.</li>
<li>Create a listing for that buyer with the agreed price and description, or use Etsy's custom order request tool where it is enabled for your shop.</li>
<li>Send the buyer the link and let them check out normally.</li>
<li>For large jobs, split it into a deposit listing and a balance listing, both paid through Etsy.</li>
</ol>
<p>Etsy's House Rules prohibit fee avoidance, such as asking a buyer you met on Etsy to pay by PayPal, bank transfer or an outside invoice to skip Etsy fees. Breaking that rule can get your shop restricted, and buyers lose purchase protection. If the buyer found you on Etsy, keep the payment on Etsy.</p>

<h2>What fees and tax show up on an Etsy order?</h2>
<p>Knowing the fees helps you price custom work and reconcile your books. As of October 2026, the most widely published US fee schedule is below; confirm the current figures on <a href="https://www.etsy.com/legal/fees/" target="_blank" rel="noopener">Etsy's Fees and Payments Policy</a>, since they change and differ by country.</p>
<table>
<thead><tr><th>Item</th><th>Typical US amount</th><th>Who pays</th></tr></thead>
<tbody>
<tr><td>Listing fee</td><td>$0.20 per listing (and per renewal, including auto-renew on each sale)</td><td>Seller</td></tr>
<tr><td>Transaction fee</td><td>6.5% of the item price plus shipping and gift wrap</td><td>Seller</td></tr>
<tr><td>Payment processing (US)</td><td>About 3% + $0.25 per order</td><td>Seller</td></tr>
<tr><td>Offsite Ads</td><td>12% to 15% on sales attributed to the ads</td><td>Seller</td></tr>
<tr><td>Sales tax</td><td>Calculated by buyer's location</td><td>Buyer pays, Etsy collects and remits</td></tr>
</tbody>
</table>
<p>Because Etsy is the marketplace facilitator for US sales tax, you should not add your own tax line to an Etsy order. Etsy also collects VAT or GST on certain orders to buyers in the UK, EU, Australia and other countries, depending on where the buyer is and the order value.</p>

<h2>Worked example: what an Etsy custom order nets you</h2>
<p>A candle maker sells a custom set of 12 wedding favor candles for $180 plus $15 shipping to a buyer in a state with a 7% combined sales tax rate on goods. Using the fee schedule above (illustrative):</p>
<ul>
<li>Buyer pays: $180 + $15 = $195, plus sales tax of about $195 × 0.07 = $13.65 (Etsy calculates the exact amount, and whether shipping is taxed depends on the state). Buyer total: $208.65.</li>
<li>Listing fee: $0.20</li>
<li>Transaction fee: 6.5% × $195 = $12.68</li>
<li>Processing: 3% × $208.65 + $0.25 = $6.26 + $0.25 = $6.51</li>
<li>Total Etsy fees: $0.20 + $12.68 + $6.51 = $19.39</li>
<li>Seller receives about $195 − $19.39 = $175.61 before materials and postage. The $13.65 tax goes to the state through Etsy.</li>
</ul>
<p>That roughly 10% fee load is why sellers are tempted to invoice outside Etsy. Price it into the custom quote instead. Starting a candle shop? See <a href="/blog/how-to-start-a-candle-business">how to start a candle business</a>, and for selling beyond marketplaces, <a href="/blog/how-to-start-an-online-store">how to start an online store</a>.</p>

<h2>When should an Etsy seller create their own invoice?</h2>
<table>
<thead><tr><th>Situation</th><th>Use Etsy receipt?</th><th>Create your own invoice?</th></tr></thead>
<tbody>
<tr><td>Normal Etsy order</td><td>Yes</td><td>No</td></tr>
<tr><td>Custom order arranged in Etsy messages</td><td>Yes (via reserved listing)</td><td>No, do not bill outside Etsy</td></tr>
<tr><td>Business buyer needs your business name and tax number on a document</td><td>Yes</td><td>Optional: a paid invoice referencing the Etsy order</td></tr>
<tr><td>Craft fair, market or in-person sale</td><td>No</td><td>Yes, or a receipt</td></tr>
<tr><td>Wholesale account found outside Etsy</td><td>No</td><td>Yes, with terms and resale certificate</td></tr>
<tr><td>Sales on your own website</td><td>No</td><td>Yes, through your store or invoice tool</td></tr>
</tbody>
</table>
<p>For off-Etsy sales, you are responsible for sales tax yourself. Check whether you need a <a href="/blog/sellers-permit">seller's permit</a>, see <a href="/blog/sales-tax-by-state">sales tax by state</a>, and accept <a href="/blog/sales-tax-exemption-certificate">resale exemption certificates</a> from wholesale buyers.</p>

<h2>Sample paid invoice for an Etsy business buyer</h2>
<p>A company bought 40 engraved keychains through Etsy as client gifts, and its accounts team asked for an invoice with the seller's business details. The invoice simply documents the completed Etsy order.</p>
<p><strong>From:</strong> Copper Fern Studio LLC, 88 Birch Lane, Asheville, NC 28801.<br><strong>To:</strong> Lumen Analytics Inc., attn. Accounts Payable.<br><strong>Invoice #:</strong> CF-2026-118. <strong>Date:</strong> October 29, 2026. <strong>Etsy order #:</strong> 3456789012. <strong>Status:</strong> PAID via Etsy checkout on October 22, 2026.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Engraved brass keychain, custom logo</td><td>40</td><td>$14.00</td><td>$560.00</td></tr>
<tr><td>Gift box upgrade</td><td>40</td><td>$2.50</td><td>$100.00</td></tr>
<tr><td>Shipping, UPS Ground</td><td>1</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$678.00</strong></td></tr>
<tr><td colspan="3">Sales tax collected and remitted by Etsy</td><td>$47.46</td></tr>
<tr><td colspan="3"><strong>Total paid</strong></td><td><strong>$725.46</strong></td></tr>
<tr><td colspan="3">Balance due</td><td>$0.00</td></tr>
</tbody>
</table>
<p>The tax figure must match the Etsy receipt exactly (here $678 × 7% = $47.46). Add a note such as <em>Paid in full through Etsy. Sales tax collected by Etsy as marketplace facilitator.</em> Our guide to the <a href="/blog/paid-invoice-template">paid invoice template</a> shows other wording options.</p>

<h2>How to create an invoice for an Etsy sale</h2>
<ol>
<li>Open the order in Shop Manager and note the order number, date, items, shipping and tax.</li>
<li>Open a <a href="/invoice-generator">free invoice generator</a> and add your business name, logo and address.</li>
<li>Give it your own invoice number (the <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep a series), and reference the Etsy order number.</li>
<li>Enter line items and amounts exactly as on the Etsy receipt.</li>
<li>Add the tax line with a note that Etsy collected it.</li>
<li>Mark it paid, with a zero balance due, and download the PDF.</li>
<li>Send it to the buyer through Etsy Messages and save a copy with your records.</li>
</ol>

<h2>How should Etsy sellers keep records for taxes?</h2>
<p>Etsy receipts and invoices are only part of the paper trail. For your tax return, what matters is reconciling gross sales, fees, refunds and payouts. A simple monthly routine works for most small shops:</p>
<ol>
<li><strong>Download the monthly statement</strong> from Shop Manager (under Finances). It summarizes sales, fees, taxes and deposits.</li>
<li><strong>Export the orders CSV</strong> for the same month so you have order-level detail.</li>
<li><strong>Record gross sales</strong> (item price plus shipping charged), not just the deposit you received.</li>
<li><strong>Record fees as expenses</strong>: listing, transaction, processing, ads and any shipping labels bought through Etsy.</li>
<li><strong>Exclude sales tax Etsy collected</strong> from your income, since it was never yours, but keep a note of it to explain any differences against the 1099-K.</li>
<li><strong>Match deposits</strong> to your business bank account, which keeps shop money separate from personal funds.</li>
<li><strong>Add off-Etsy sales</strong> from your own invoices and receipts, plus any sales tax you collected yourself.</li>
</ol>
<p>Here is how the earlier custom candle order looks in the books: gross sales $195.00, Etsy fees $19.39 as an expense, sales tax $13.65 excluded from income, and a deposit of about $175.61. If your 1099-K shows a higher gross figure because it includes tax or shipping, your records explain the difference. Our guide to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> suggests a simple system, and if you are not sure how much to put aside each month, see <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a>.</p>
<p>Many Etsy sellers start as sole proprietors and later form an LLC. If you change structure, update your Etsy shop's tax information and bank details so payouts, 1099-K reporting and your invoices all use the same business name.</p>

<h2>Common Etsy invoicing mistakes</h2>
<ul>
<li><strong>Taking payment off Etsy for an Etsy buyer.</strong> It breaks the fee avoidance rule and removes buyer protection.</li>
<li><strong>Adding sales tax yourself on Etsy orders.</strong> Etsy already collects it, so you would double-charge.</li>
<li><strong>Invoices that do not match the receipt.</strong> Different totals confuse the buyer's accounts team.</li>
<li><strong>Forgetting off-Etsy tax duties.</strong> Craft fair and website sales are your own responsibility.</li>
<li><strong>Ignoring fees in custom quotes.</strong> Price custom work so you still make your margin after roughly 10% in fees.</li>
<li><strong>Poor records.</strong> Download monthly statements so you can reconcile sales, fees and 1099-K figures. See <a href="/blog/1099-k-threshold">the 1099-K threshold</a>.</li>
</ul>

<h2>Etsy invoice: the short version</h2>
<p>For Etsy checkout orders, the Etsy receipt is the record, and Etsy handles US sales tax. Bill custom orders through reserved listings, and create your own Etsy invoice only as a paid document for business buyers or for sales that genuinely happen off Etsy. When you need one, our <a href="/invoice-generator">free invoice generator</a> is free, needs no sign-up, and downloads a PDF built in your browser. This is general information, not tax or legal advice.</p>
`,
  },
  {
    slug: "mileage-invoice",
    title: "Mileage Invoice: How to Bill Clients for Miles (2026)",
    description:
      "Mileage invoice guide: how to bill clients for miles driven, using the 2026 IRS rate of 72.5 or 76 cents as a benchmark, with a sample invoice and mileage log.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "irs-mileage-rate-2026",
      "reimbursable-expenses-invoice",
      "how-to-bill-for-travel-time",
    ],
    faqs: [
      {
        q: "Can I charge clients for mileage?",
        a: "Yes, if your contract or quote says you will, or if it is standard in your trade and the client agrees. Mileage is a business cost like materials, and many contractors, consultants and mobile service providers bill it as a separate line. Put the rate and what counts as billable miles in writing before work starts, so the charge does not surprise the client when the invoice arrives.",
      },
      {
        q: "What mileage rate should I charge clients in 2026?",
        a: "There is no required rate for billing clients; it is a price you agree. Many businesses use the IRS business standard mileage rate as a benchmark: 72.5 cents per mile for January 1 to June 30, 2026, and 76 cents per mile for July 1 to December 31, 2026. Some charge a flat travel fee or a higher rate for heavy vehicles or towing.",
      },
      {
        q: "Is mileage I bill to a client taxable income?",
        a: "For a self-employed person, mileage you bill a client is generally part of your gross business income, and you then deduct your own vehicle costs using either the standard mileage rate or actual expenses. Reimbursements under an employer's accountable plan work differently. Ask a tax professional how this applies to you, because the treatment depends on your setup.",
      },
      {
        q: "Should I charge sales tax on mileage on an invoice?",
        a: "It depends on your state and on whether the underlying service is taxable. Some states treat travel or delivery charges tied to a taxable sale as part of the taxable price, while others exempt separately stated charges. If your main service is not taxable, mileage usually is not either. Check your state revenue department's guidance before adding tax to a mileage line.",
      },
      {
        q: "Do I bill mileage from my home or from the job site?",
        a: "Whatever your agreement says. Common approaches are door to door from your base, round trip miles minus a free radius (for example, the first 20 miles included), or only miles beyond your normal service area. For tax deductions, the IRS has separate rules about commuting, which is generally not deductible, so keep the billing method and your tax records clearly separate.",
      },
      {
        q: "What records should I keep for a mileage invoice?",
        a: "Keep a log for each billable trip: date, start and end location, purpose or client, odometer readings or mapped distance, and total miles. Attach a summary or the log itself to the invoice if the client asks for it. The same log supports your own tax deduction, and the IRS expects records made at or near the time of the trip.",
      },
      {
        q: "Can I bill travel time and mileage together?",
        a: "Yes, they are separate costs and often appear as separate lines: mileage covers the vehicle, travel time covers your hours on the road. Some businesses bill both at full rates, others bill travel time at a reduced rate or include a set amount in the service call fee. State your policy in the quote so clients understand both charges.",
      },
      {
        q: "Can I mark up mileage like materials?",
        a: "You can set any mileage rate the client accepts, but presenting it as a reimbursement at cost while charging more is misleading. If you bill above the IRS rate, label the line as a travel or mileage charge at your stated rate rather than as reimbursement. Government and some corporate clients cap mileage at the IRS or federal travel rate in their contracts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A mileage invoice bills a client for the miles you drove on their job, calculated as billable miles × your agreed rate per mile and shown as its own line item. Many US businesses use the IRS business rate as a benchmark: 72.5 cents per mile for January to June 2026 and 76 cents from July 1, 2026.</p>

<p>Driving to clients costs real money in fuel, wear and insurance. If your quotes do not cover it, a mileage line on the invoice is the cleanest way to recover it. This guide explains how mileage billing works, which rate to use, a worked example with a sample invoice, how to keep the log that backs it up, and the mistakes that cause disputes.</p>

<h2>What is a mileage invoice?</h2>
<p>A mileage invoice is either a full invoice for travel costs alone (for example, a courier or a mobile notary billing per mile) or, more often, a normal service invoice with a mileage line added. The line shows the number of billable miles, the rate per mile and the total. It may also reference the trip dates and destinations.</p>
<p>Mileage is one type of reimbursable or pass-through cost. For the wider picture, including parking, tolls, airfare and materials, see our guide to the <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses invoice</a>.</p>

<h2>How much should you charge per mile in 2026?</h2>
<p>There is no legal rate for billing clients: it is whatever you agree. In practice, most businesses pick one of these benchmarks.</p>
<table>
<thead><tr><th>Approach</th><th>Rate example</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>IRS business standard rate</td><td>72.5 cents (Jan 1 to Jun 30, 2026); 76 cents (Jul 1 to Dec 31, 2026)</td><td>Consultants, contractors, corporate and government clients</td></tr>
<tr><td>Flat trip or travel fee</td><td>e.g. $25 per visit within 30 miles</td><td>Home services, mobile beauty, pet services</td></tr>
<tr><td>Free radius plus per-mile</td><td>First 20 miles free, then 76 cents per mile</td><td>Trades with a defined service area</td></tr>
<tr><td>Vehicle-specific rate</td><td>A higher per-mile rate for trucks, trailers or towing</td><td>Towing, hauling, equipment delivery</td></tr>
</tbody>
</table>
<p>The IRS raised the business rate mid-year because of fuel price increases; the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener">IRS standard mileage rates page</a> lists both 2026 figures, and our explainer on the <a href="/blog/irs-mileage-rate-2026">IRS mileage rate for 2026</a> covers the details. If your contract says you bill at the IRS rate, use the rate in effect on the date you drove, not the invoice date.</p>

<h2>How to calculate mileage on an invoice</h2>
<p>The formula is simple: <strong>billable miles × rate per mile = mileage charge</strong>. The work is in deciding which miles are billable.</p>
<ol>
<li><strong>Decide the method in your agreement.</strong> Round trip from your base, one way, or miles beyond a free radius.</li>
<li><strong>Measure each trip.</strong> Use odometer readings or a mapping tool, and round consistently (to one decimal or whole miles).</li>
<li><strong>Apply the right rate for the trip date.</strong> Trips before July 1, 2026 at 72.5 cents and trips after at 76 cents if you follow the IRS rate.</li>
<li><strong>Total the miles for the billing period.</strong> Group by rate if the period crosses a rate change.</li>
<li><strong>Add the mileage line(s) to the invoice.</strong> Show miles, rate and amount.</li>
<li><strong>Add tolls and parking separately at cost</strong>, with receipts.</li>
</ol>

<h2>Worked example: a consultant's mileage across the rate change</h2>
<p>An independent IT consultant visits a client's two offices during June and July 2026. The contract says mileage is billed round trip at the IRS business rate in effect on the travel date.</p>
<ul>
<li>June trips: 3 round trips of 42 miles = 126 miles × $0.725 = $91.35</li>
<li>July trips: 4 round trips of 42 miles = 168 miles × $0.76 = $127.68</li>
<li>Total mileage: 294 miles, $91.35 + $127.68 = $219.03</li>
<li>Parking at the downtown office: 4 × $12 = $48.00 (at cost, receipts attached)</li>
</ul>

<h2>Sample mileage invoice</h2>
<p><strong>From:</strong> Ridgeway IT Consulting LLC, Denver, CO. <strong>To:</strong> Alpine Dental Group. <strong>Invoice #:</strong> RIT-2026-073. <strong>Date:</strong> August 3, 2026. <strong>Terms:</strong> Net 15.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>On-site network support, June and July visits</td><td>14 hrs</td><td>$110.00</td><td>$1,540.00</td></tr>
<tr><td>Mileage, June 2026 (3 round trips, IRS rate)</td><td>126 mi</td><td>$0.725</td><td>$91.35</td></tr>
<tr><td>Mileage, July 2026 (4 round trips, IRS rate)</td><td>168 mi</td><td>$0.76</td><td>$127.68</td></tr>
<tr><td>Parking, downtown office (at cost, receipts attached)</td><td>4</td><td>$12.00</td><td>$48.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$1,807.03</strong></td></tr>
</tbody>
</table>
<p>Check: $1,540 + $91.35 + $127.68 + $48 = $1,807.03. Add a note listing trip dates, or attach the log. In this example the consulting service is not subject to sales tax, so neither is the mileage; your state may differ, which you can check with our <a href="/tools/sales-tax-calculator">sales tax calculator</a> and state guidance.</p>
<p>You can build this layout in our <a href="/invoice-generator">free invoice generator</a> by adding each mileage period as a line with the miles in the quantity field and the per-mile rate in the price field.</p>

<h2>What should a mileage log include?</h2>
<p>The log is your proof if a client questions the charge, and it doubles as support for your own tax deduction. Record trips when they happen. Our <a href="/blog/mileage-log-template">mileage log template</a> has a ready layout.</p>
<table>
<thead><tr><th>Date</th><th>From</th><th>To</th><th>Purpose / client</th><th>Odometer start</th><th>Odometer end</th><th>Miles</th></tr></thead>
<tbody>
<tr><td>07/08/2026</td><td>Office, Denver</td><td>Alpine Dental, Lakewood</td><td>Server install</td><td>48,210</td><td>48,231</td><td>21</td></tr>
<tr><td>07/08/2026</td><td>Alpine Dental, Lakewood</td><td>Office, Denver</td><td>Return</td><td>48,231</td><td>48,252</td><td>21</td></tr>
</tbody>
</table>

<h2>Billing clients vs deducting mileage on your taxes</h2>
<p>These are two different things, and mixing them up causes errors.</p>
<ul>
<li><strong>Billing:</strong> What you charge a client is a price set by your contract. It can be the IRS rate, a flat fee or something else.</li>
<li><strong>Deducting:</strong> As a self-employed person you generally include billed mileage in gross income, then deduct your vehicle costs using either the standard mileage rate or actual expenses. Our comparison of <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> shows how to choose.</li>
<li><strong>Commuting:</strong> Travel between home and a regular place of business is generally not deductible, even if you bill a client for some of it.</li>
</ul>
<p>This is general information, not tax advice. A tax professional can confirm how to treat billed mileage in your situation, and how much of your income to set aside (see <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a>).</p>

<h2>How to write a mileage policy into your quote or contract</h2>
<p>Most mileage disputes are really disputes about what was agreed. A short clause in your quote, estimate or contract settles it before the first trip. Cover four points: the rate, which miles count, how the rate changes, and what is billed separately.</p>
<p>Sample wording you can adapt:</p>
<ul>
<li><em>Mileage is billed at the IRS business standard mileage rate in effect on the date of travel, currently 76 cents per mile, for round trips from our office at 120 Main Street.</em></li>
<li><em>Service visits within 25 miles of our shop are included in the service call fee. Travel beyond 25 miles is billed at $0.76 per mile for the additional distance, each way.</em></li>
<li><em>Tolls and parking are billed at cost with receipts. Travel time is billed at 50% of the hourly rate.</em></li>
<li><em>Mileage is billed monthly with a log of dates, destinations and miles attached.</em></li>
</ul>
<p>If you quote a fixed price, decide whether travel is already inside it. Many trades build typical travel into the price and add mileage only for jobs outside their usual area, which keeps quotes simple. For long-term clients, review the rate once a year or whenever the IRS changes the business rate, as it did in July 2026.</p>
<p>Corporate and government clients often have their own travel policies that cap mileage at the IRS rate or require pre-approval for trips. Ask for the policy before you start, and match your invoice wording to it so the accounts payable team can approve the line without questions. Our <a href="/blog/freelance-contract-template">freelance contract template</a> shows where clauses like these fit.</p>

<h2>Which businesses bill mileage most often?</h2>
<ul>
<li><strong>Trades and home services:</strong> often a service call fee plus mileage outside the service area. See <a href="/blog/service-call-fee">service call fees</a>.</li>
<li><strong>Towing and hauling:</strong> hook-up plus a per-mile rate; our <a href="/blog/towing-invoice-template">towing invoice template</a> shows the layout.</li>
<li><strong>Car rentals:</strong> daily rate plus charges for miles over an allowance, covered in the <a href="/blog/car-rental-invoice-template">car rental invoice template</a>.</li>
<li><strong>Consultants, inspectors, notaries and photographers:</strong> mileage at the IRS rate or a flat travel fee, sometimes with travel time billed too. See <a href="/blog/how-to-bill-for-travel-time">how to bill for travel time</a>.</li>
</ul>

<h2>Common mileage invoice mistakes</h2>
<ul>
<li><strong>No agreement in advance.</strong> Surprise mileage charges are the most disputed line on an invoice. Put the rate and method in the quote.</li>
<li><strong>Using the wrong IRS rate.</strong> In 2026, trips before July 1 and after June 30 have different business rates.</li>
<li><strong>Calling a marked-up rate a reimbursement.</strong> Label above-cost charges as travel or mileage fees, not reimbursement at cost.</li>
<li><strong>Lumping mileage into labor.</strong> A separate line is clearer and easier to approve.</li>
<li><strong>No log.</strong> Without dates and distances, you cannot defend the charge or the deduction.</li>
<li><strong>Applying sales tax without checking.</strong> Treatment of travel charges varies by state.</li>
</ul>

<h2>Bill mileage clearly and get paid for it</h2>
<p>A good mileage invoice shows billable miles, the per-mile rate and the trip period on separate lines, backed by a simple log and an agreement made before the work. Use the 2026 IRS business rate as a benchmark if you want an easy, defensible number. Create your next mileage invoice in our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and downloads a PDF built in your browser.</p>
`,
  },
  {
    slug: "how-to-add-logo-to-invoice",
    title: "Add Logo to Invoice: Best Size, Format and Placement",
    description:
      "How to add a logo to an invoice: the best file format (PNG or SVG), pixel size for screen and print, where to place it, and steps for Word, Excel and Docs.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-header-and-footer",
      "professional-invoice-design-tips",
      "best-fonts-for-invoices",
    ],
    faqs: [
      {
        q: "What size should a logo be on an invoice?",
        a: "On a US Letter or A4 invoice, a logo usually looks best about 1 to 2 inches (25 to 50 mm) tall or up to about 2.5 inches wide, which is large enough to read without crowding the header. Upload a file around 600 to 1,000 pixels wide so it stays sharp when printed. Very wide logos can be shorter; square marks can be a little taller.",
      },
      {
        q: "What file format is best for an invoice logo?",
        a: "Use a PNG with a transparent background for most invoice tools, because it keeps sharp edges and sits cleanly on white or tinted headers. SVG is ideal where the software supports it, since it scales without losing quality. JPG works but has no transparency and can show blurry edges around text. Avoid screenshots and low-resolution social media images.",
      },
      {
        q: "Where should the logo go on an invoice?",
        a: "Most invoices place the logo in the top-left corner, with the business name and contact details beside or below it and the word Invoice, the invoice number and dates on the right. Top-center works for symmetrical designs. Keep the logo out of the line item area and footer so the important billing information stays easy to scan.",
      },
      {
        q: "Why does my logo look blurry on a PDF invoice?",
        a: "Usually the source file is too small and is being stretched, or it was saved as a heavily compressed JPG. Export a larger PNG (at least 600 pixels wide) or an SVG from the original design file, and do not enlarge it beyond its natural size in the template. Also check that your PDF export settings are not reducing image quality.",
      },
      {
        q: "Should my invoice logo be in color or black and white?",
        a: "Use your normal color logo for emailed PDFs, since that reinforces your brand. If clients print invoices on office printers, make sure the logo still reads in grayscale. Many brands keep a one-color version for exactly this purpose. Avoid logos with very light colors on white backgrounds, which can disappear when printed.",
      },
      {
        q: "Does adding a logo make an invoice more official?",
        a: "Legally, no. An invoice is valid without a logo as long as it has the required details such as names, dates, invoice number, items and totals, plus tax details where applicable. Practically, a logo helps clients recognize your invoice in a crowded inbox, matches it to your brand, and makes the document look more established.",
      },
      {
        q: "Can I add a logo to an invoice without design software?",
        a: "Yes. Most invoice generators, Word, Google Docs and Excel let you insert an image file directly. If you do not have a logo file, you can export one from the tool you used to design it, ask your designer for a PNG and SVG pack, or create a simple text-based logo using your business name in a clean font.",
      },
      {
        q: "How big can a logo file be for an invoice?",
        a: "Keep it small. A well-optimized PNG logo is usually under 200 KB, and many invoice tools set an upload limit, for example 1.5 MB in our generator. Large images make PDFs heavy, slow to email and sometimes blocked by attachment limits. Crop away empty space and compress the file before uploading.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To add a logo to an invoice, upload a PNG with a transparent background (or an SVG where supported), about 600 to 1,000 pixels wide and under 200 KB, into your invoice tool's logo field or the template header. Place it top-left, sized roughly 1 to 2 inches tall, next to your business name and contact details.</p>

<p>A logo is the quickest way to make an invoice look like it came from an established business. It also helps clients spot your invoice among dozens of others. But a pixelated, oversized or badly placed logo has the opposite effect. This guide covers the right file format, size and placement, step-by-step instructions for invoice generators, Word, Google Docs and Excel, a sample header layout, and the mistakes to avoid.</p>

<h2>Why add a logo to your invoice?</h2>
<ul>
<li><strong>Recognition.</strong> Clients and their accounts payable teams see your brand at a glance.</li>
<li><strong>Trust.</strong> Branded invoices look less like a scam or a phishing attempt, which matters now that fake invoice emails are common.</li>
<li><strong>Consistency.</strong> Your quotes, invoices, receipts and website feel like one business.</li>
<li><strong>Professional finish.</strong> Paired with good typography and spacing, a logo raises the perceived quality of your work.</li>
</ul>
<p>A logo does not affect whether an invoice is legally valid. The required fields still matter most; see <a href="/blog/how-to-write-an-invoice">how to write an invoice</a> for the full list.</p>

<h2>What is the best file format for an invoice logo?</h2>
<p>Image formats behave differently, and the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types" target="_blank" rel="noopener">MDN image file type guide</a> is a good reference on how each one stores images. For invoices, this is what matters:</p>
<table>
<thead><tr><th>Format</th><th>Transparency</th><th>Scales cleanly</th><th>Best use on invoices</th></tr></thead>
<tbody>
<tr><td>PNG</td><td>Yes</td><td>Up to its pixel size</td><td>Default choice for invoice generators and Word or Docs templates</td></tr>
<tr><td>SVG</td><td>Yes</td><td>Yes, at any size</td><td>Best where supported (design tools, some invoicing software)</td></tr>
<tr><td>JPG / JPEG</td><td>No</td><td>Up to its pixel size</td><td>Acceptable for photo-style logos on a white header</td></tr>
<tr><td>WebP</td><td>Yes</td><td>Up to its pixel size</td><td>Small files, but not every tool accepts it</td></tr>
<tr><td>PDF or EPS</td><td>Varies</td><td>Yes (vector)</td><td>Source files for designers; export a PNG for invoices</td></tr>
</tbody>
</table>
<p>If you only have a JPG with a white box around the logo, it will look fine on a white header but clash with any colored background. Ask your designer for a transparent PNG, or recreate the logo. Our guide to the <a href="/blog/ai-logo-generator">AI logo generator</a> covers quick options if you do not have one yet.</p>

<h2>What size should a logo be on an invoice?</h2>
<p>Think about two sizes: the file size in pixels and the printed size on the page.</p>
<table>
<thead><tr><th>Logo shape</th><th>Recommended file size</th><th>Printed size on Letter or A4</th></tr></thead>
<tbody>
<tr><td>Wide (wordmark)</td><td>1,000 × 300 px</td><td>About 2 to 2.5 in wide (50 to 65 mm)</td></tr>
<tr><td>Square (icon or badge)</td><td>600 × 600 px</td><td>About 1 to 1.5 in square (25 to 38 mm)</td></tr>
<tr><td>Stacked (icon above name)</td><td>800 × 600 px</td><td>About 1.5 in tall (38 mm)</td></tr>
</tbody>
</table>
<p>Here is the math behind those numbers. For a sharp print, aim for about 300 pixels per inch. A logo printed 2 inches wide therefore needs about 2 × 300 = 600 pixels across. A 1,000-pixel file printed at 2.5 inches gives 1,000 ÷ 2.5 = 400 pixels per inch, which is comfortably sharp. A 200-pixel image stretched to 2 inches gives only 100 pixels per inch and will look soft.</p>
<p>Keep the file light, ideally under 200 KB. A 3 MB logo can make a one-page PDF too heavy to email comfortably. Our generator accepts image uploads up to 1.5 MB, which is plenty for an optimized logo.</p>

<h2>Where should you place the logo on an invoice?</h2>
<p>Most readers scan an invoice in a Z pattern: top-left, top-right, then down to the totals. Place elements to match.</p>
<ul>
<li><strong>Top-left (most common):</strong> logo, then your business name, address, email and tax ID.</li>
<li><strong>Top-right:</strong> the word INVOICE, invoice number, issue date and due date.</li>
<li><strong>Top-center:</strong> works for centered, symmetrical brands, with details in two columns below.</li>
<li><strong>Not in the body or footer:</strong> keep line items and totals free of decoration.</li>
</ul>
<p>Leave white space around the logo, roughly the height of one capital letter in your logo's text. For the rest of the top and bottom zones, see <a href="/blog/invoice-header-and-footer">what to put in an invoice header and footer</a>.</p>

<h3>Sample invoice header layout</h3>
<table>
<thead><tr><th>Left column</th><th>Right column</th></tr></thead>
<tbody>
<tr><td>[Logo, 2 in wide]<br>Maple and Moss Landscaping LLC<br>129 Orchard Road, Portland, OR 97205<br>hello@mapleandmoss.com, (503) 555-0142</td><td><strong>INVOICE</strong><br>Invoice #: MM-2026-212<br>Date: October 29, 2026<br>Due: November 13, 2026</td></tr>
</tbody>
</table>
<p>Below the header, the rest of the invoice stays standard. For example:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Fall cleanup, front and back yard</td><td>1</td><td>$320.00</td><td>$320.00</td></tr>
<tr><td>Mulch, dark bark, installed</td><td>4 cu yd</td><td>$65.00</td><td>$260.00</td></tr>
<tr><td>Green waste haul-away</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$625.00</strong></td></tr>
</tbody>
</table>
<p>Check: $320 + $260 + $45 = $625. Sales tax is omitted because this example assumes services that are not taxed, and Oregon has no general sales tax.</p>

<h2>How to add a logo to an invoice (step by step)</h2>
<h3>In an online invoice generator</h3>
<ol>
<li>Open our <a href="/invoice-generator">free invoice generator</a>.</li>
<li>Click the logo area in the header and choose your PNG, JPG or other image file (up to 1.5 MB).</li>
<li>Check the preview: it should be sharp and not crowd your business details.</li>
<li>Fill in the rest of the invoice and download the PDF. The logo is embedded in the file.</li>
</ol>
<h3>In Microsoft Word</h3>
<ol>
<li>Double-click the top of the page to open the header, or click the first cell of your template table.</li>
<li>Go to Insert, then Pictures, and choose the logo file.</li>
<li>Set Wrap Text to In Line with Text or Square so it does not float over other content.</li>
<li>Drag a corner handle (not a side) to resize without distorting it.</li>
</ol>
<p>Our step-by-step guide on <a href="/blog/how-to-make-an-invoice-in-word">making an invoice in Word</a> covers the full template.</p>
<h3>In Google Docs</h3>
<ol>
<li>Click into the header or the top table cell.</li>
<li>Choose Insert, Image, Upload from computer.</li>
<li>Set the image option to In line, and resize from a corner.</li>
</ol>
<p>See <a href="/blog/how-to-make-an-invoice-in-google-docs">how to make an invoice in Google Docs</a> for the rest of the layout.</p>
<h3>In Excel or Google Sheets</h3>
<ol>
<li>Select the top-left cell and choose Insert, Pictures (Excel) or Insert, Image, Image over cells (Sheets).</li>
<li>Resize to fit within the first few rows and lock aspect ratio.</li>
<li>Check Print Preview, since images can shift across page breaks.</li>
</ol>
<p>More detail is in our guide to <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a>.</p>

<h2>What if you do not have a logo yet?</h2>
<p>You do not need a professional logo to send professional invoices. Plenty of established businesses use a clean text treatment of their name, and you can upgrade later. Some practical options:</p>
<ol>
<li><strong>Text-only wordmark.</strong> Type your business name in a strong, readable font, in one brand color, and export it as a PNG. It looks deliberate and costs nothing.</li>
<li><strong>Simple template tools.</strong> Free design tools offer logo templates you can edit and export as transparent PNG files. Change the fonts and colors so it does not look generic.</li>
<li><strong>AI logo tools.</strong> These generate options quickly; check that you can download a high-resolution file and that the terms let you use it commercially.</li>
<li><strong>A freelance designer.</strong> For a lasting brand, a designer delivers a full set of files: color, one-color and white versions, in PNG, SVG and PDF. See <a href="/blog/logo-design-pricing">logo design pricing</a> for typical costs and what to expect.</li>
</ol>
<p>Whatever you choose, ask for or export these files once and keep them in one folder:</p>
<ul>
<li>Full-color PNG with a transparent background, about 1,000 px wide</li>
<li>One-color (black) PNG for grayscale printing</li>
<li>White PNG for dark backgrounds</li>
<li>SVG master file for any future resizing</li>
</ul>
<p>A square icon version is also useful for email signatures and social profiles, so your invoices, emails and website match. If you are still building your brand, our <a href="/blog/canva-invoice-template">Canva invoice template</a> guide shows how to keep invoice design consistent with the rest of your materials.</p>

<h2>Common mistakes when adding a logo to an invoice</h2>
<ul>
<li><strong>Low-resolution files.</strong> A logo saved from a social profile picture will blur when printed.</li>
<li><strong>Oversized logos.</strong> A logo taking a third of the page pushes billing details down and looks amateur.</li>
<li><strong>Distorted proportions.</strong> Dragging a side handle squashes the logo. Always resize from a corner.</li>
<li><strong>White boxes.</strong> JPGs on colored headers show a white rectangle. Use a transparent PNG.</li>
<li><strong>Huge file sizes.</strong> Multi-megabyte images bloat PDFs. Compress first.</li>
<li><strong>Clashing colors.</strong> Pick one or two brand colors for accents, and keep body text dark. Our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> and <a href="/blog/best-fonts-for-invoices">best fonts for invoices</a> help here.</li>
<li><strong>Skipping a print test.</strong> Run through the <a href="/blog/invoice-pdf-print-checklist">invoice PDF and print checklist</a> before sending to a new client.</li>
</ul>

<h2>Logo checklist for invoices</h2>
<ul>
<li>Transparent PNG (or SVG), 600 to 1,000 px wide</li>
<li>File under about 200 KB, cropped tight</li>
<li>Placed top-left or top-center, 1 to 2 inches tall</li>
<li>Readable in grayscale</li>
<li>Same logo on quotes, invoices, receipts and <a href="/blog/letterhead-template">letterhead</a></li>
<li>Saved in your invoice template so you never re-upload it</li>
</ul>

<h2>Add your logo to an invoice in under a minute</h2>
<p>The formula is simple: a transparent PNG about 600 to 1,000 pixels wide, kept light, placed top-left at 1 to 2 inches tall, with your business details beside it. Try it with one of our <a href="/invoice-templates">invoice templates</a> or add a logo to an invoice directly in our <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up, and downloads a PDF built in your browser, with your logo embedded.</p>
`,
  },
];
