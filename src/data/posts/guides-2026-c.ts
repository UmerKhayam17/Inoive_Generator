import type { PostDraft } from "../blog";

export const GUIDES_2026_C_POSTS: PostDraft[] = [
  {
    slug: "how-to-create-invoice-in-xero",
    title: "How to Create an Invoice in Xero (2026 Step-by-Step)",
    description:
      "How to create an invoice in Xero step by step: customers, items, tax rates, branding, online payments, repeating invoices and the mistakes to avoid in 2026.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["xero-vs-quickbooks", "xero-vs-zoho-books", "how-to-create-invoice-in-quickbooks"],
    faqs: [
      {
        q: "Is invoicing included in every Xero plan?",
        a: "Yes, all of Xero's standard plans include invoicing, but entry-level plans have historically limited how many invoices and bills you can send or enter each month, while higher plans remove those caps and add features such as multiple currencies or projects. Plan names, limits and prices differ by country and change over time, so check Xero's current pricing page for your region before choosing.",
      },
      {
        q: "Can I edit an invoice in Xero after sending it?",
        a: "You can usually edit an approved invoice that has no payments applied, and Xero keeps a history of changes. Once a payment is recorded, you typically need to remove the payment first or issue a credit note instead. If the invoice is already in a filed tax return period, editing it can change reported figures, so talk to your accountant before altering older invoices.",
      },
      {
        q: "How do I add my logo to Xero invoices?",
        a: "Xero uses invoice branding themes, found in the invoice settings area of your organization settings. You can upload a logo, choose fonts and layout options, and set default payment terms and notes for each theme. You can create several themes, for example one per brand or customer type, and choose which theme applies when you create each invoice.",
      },
      {
        q: "Can customers pay a Xero invoice online?",
        a: "Yes, if you connect a payment service. Xero integrates with card and bank payment providers, which vary by country (Stripe is a common option for cards), and adds a pay now button to the online invoice. Processing fees are charged by the payment provider, not as part of the Xero subscription. Check the provider's current rates in your region before turning it on.",
      },
      {
        q: "What is the difference between a draft, awaiting approval and awaiting payment invoice in Xero?",
        a: "A draft invoice is saved but not final and does not affect your reports. Awaiting approval means it has been submitted for someone with approval rights to review. Awaiting payment means it has been approved, appears in your accounts receivable and can be sent. Once fully paid, it moves to paid. These statuses help teams separate preparation from approval.",
      },
      {
        q: "How do I create a recurring invoice in Xero?",
        a: "Xero calls them repeating invoices. You set up a template with the customer, line items, frequency, start date and due date terms, then choose whether Xero saves each one as a draft, approves it or approves and emails it automatically. Repeating invoices suit retainers, subscriptions and rent. Review the template whenever prices change so automatic invoices go out with the right amounts.",
      },
      {
        q: "Can I send a quote first and turn it into an invoice in Xero?",
        a: "Yes. Xero includes quotes, and once a customer accepts a quote you can convert it into an invoice without retyping the line items. This keeps quoted and invoiced amounts consistent and gives you a record of what was agreed. You can also adjust the invoice before approving it if the final work differed from the quote.",
      },
      {
        q: "Do I need Xero just to send invoices?",
        a: "Not necessarily. Xero is full accounting software with bank feeds, reconciliation, reporting and tax features. If you only need to send a handful of professional invoices and track payments in a spreadsheet, a free invoice generator may be enough. Many businesses move to Xero once they need bank reconciliation, an accountant's access or automatic tax reporting.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To create an invoice in Xero, open Invoices from the main menu (or use the + create button), click New invoice, choose or add the contact, set the issue and due dates, add line items with quantities, prices, accounts and tax rates, then approve and email it or save it as a draft. Customers can pay online if you connect a payment service.</p>

<p>Xero is one of the most popular cloud accounting tools for small businesses in New Zealand, Australia, the UK and the US, and invoicing is the feature most people use first. This guide walks through how to create an invoice in Xero step by step, the settings to configure before your first invoice, repeating invoices, online payments and the mistakes that cause trouble later. Xero changes its interface from time to time and menus vary slightly by region, so if a label below does not match your screen exactly, look for the closest equivalent or check <a href="https://central.xero.com/" target="_blank" rel="noopener">Xero Central</a>, the official help center.</p>

<h2>What do you need before creating an invoice in Xero?</h2>
<p>Ten minutes of setup makes every invoice afterward faster and more accurate. Before your first invoice, check:</p>
<ul>
<li><strong>Organization details:</strong> legal business name, address, tax registration number (if any) and contact details.</li>
<li><strong>Invoice settings and branding theme:</strong> logo, layout, default payment terms, terms and conditions and the next invoice number.</li>
<li><strong>Tax rates:</strong> sales tax, VAT or GST rates that apply to your sales. US users may connect automatic sales tax; others choose from tax rates in the settings.</li>
<li><strong>Chart of accounts:</strong> at least one revenue account (for example, Sales or Consulting Income) to code line items.</li>
<li><strong>Products and services:</strong> saved items with descriptions, prices and accounts for things you sell often.</li>
<li><strong>Payment services:</strong> a connected card or bank payment provider if you want a pay now button.</li>
</ul>
<p>If you are still choosing software, our comparisons of <a href="/blog/xero-vs-quickbooks">Xero vs QuickBooks</a> and <a href="/blog/xero-vs-zoho-books">Xero vs Zoho Books</a> cover pricing and features.</p>

<h2>How to create an invoice in Xero: step by step</h2>
<ol>
<li><strong>Open a new invoice.</strong> Go to Invoices (found under the Sales or Business menu, depending on your version of Xero's navigation) and click <em>New invoice</em>. You can also use the + create button in the top bar, or the keyboard shortcut listed in Xero's help.</li>
<li><strong>Choose the contact.</strong> Start typing the customer name. If they are new, add them from the invoice screen and fill in the email address and billing address.</li>
<li><strong>Set the dates.</strong> The issue date defaults to today. The due date follows your default terms (for example, 30 days after the invoice date) unless you change it.</li>
<li><strong>Check the invoice number and reference.</strong> Xero assigns the next number automatically. Use the reference field for the customer's PO number or project name.</li>
<li><strong>Choose the branding theme and currency</strong> if you have more than one (multi-currency is available on higher plans).</li>
<li><strong>Add line items.</strong> Pick a saved item or type a description, then enter quantity, unit price, discount (if any), revenue account and tax rate. Xero calculates line totals, tax and the invoice total.</li>
<li><strong>Decide how tax is shown.</strong> Choose whether amounts are tax exclusive, tax inclusive or have no tax.</li>
<li><strong>Preview the invoice</strong> to see exactly what the customer will receive.</li>
<li><strong>Save, approve or send.</strong> Save as a draft to finish later, submit for approval if your team uses approvals, or approve and email it in one step. The email includes a link to the online invoice, where customers can view, download or pay.</li>
</ol>
<p>Once approved, the invoice moves to awaiting payment and appears in your receivables reports. If you prefer a quick, offline alternative for a one-off job, you can build the same invoice in our <a href="/invoice-generator">free invoice generator</a> and download a PDF.</p>

<h2>Worked example: a Xero invoice for a consulting project</h2>
<p>A marketing consultant in Texas invoices a client for October work. Her default terms are 15 days, and her services are not subject to sales tax in this example (sales tax on services varies by state). Figures are illustrative.</p>
<table>
<thead><tr><th>Item</th><th>Description</th><th>Qty</th><th>Price</th><th>Account</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>STRAT</td><td>Marketing strategy workshop, Oct 7</td><td>1</td><td>$1,800.00</td><td>Consulting income</td><td>$1,800.00</td></tr>
<tr><td>HOURS</td><td>Campaign management, October</td><td>22</td><td>$95.00</td><td>Consulting income</td><td>$2,090.00</td></tr>
<tr><td>ADS</td><td>Ad spend reimbursed at cost</td><td>1</td><td>$640.00</td><td>Reimbursable expenses</td><td>$640.00</td></tr>
<tr><td colspan="5"><strong>Total due by Nov 15</strong></td><td><strong>$4,530.00</strong></td></tr>
</tbody>
</table>
<p>Coding the ad spend to a separate account keeps her consulting revenue accurate in reports. The reference field holds the client's PO number, and the online invoice link lets the client pay by card.</p>

<h2>How to set up repeating invoices in Xero</h2>
<p>For retainers, maintenance plans or rent, Xero's repeating invoices save time:</p>
<ol>
<li>From the invoices area, choose the option to create a new repeating invoice (often in the drop-down next to New invoice).</li>
<li>Set the frequency (weekly or monthly, with an interval), the start date, the due date rule and an optional end date.</li>
<li>Add the contact and line items as usual.</li>
<li>Choose what happens on each run: save as draft, approve, or approve and email automatically.</li>
<li>Save the template and check the first generated invoice before relying on automation.</li>
</ol>
<p>Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers when automatic sending makes sense and how to word recurring line items.</p>

<h2>How do customers pay Xero invoices?</h2>
<table>
<thead><tr><th>Method</th><th>How it works in Xero</th><th>What to check</th></tr></thead>
<tbody>
<tr><td>Card via a connected provider</td><td>Pay now button on the online invoice</td><td>Provider's processing fees in your country</td></tr>
<tr><td>Direct debit or bank payments</td><td>Available through supported providers in some regions</td><td>Availability and settlement time</td></tr>
<tr><td>Manual bank transfer</td><td>Your bank details printed in the invoice terms</td><td>Reconcile the deposit to the invoice in the bank feed</td></tr>
<tr><td>Check or cash</td><td>Record the payment against the invoice manually</td><td>Deposit date and reference</td></tr>
</tbody>
</table>
<p>Card fees are set by the payment provider. For context, see our guides to <a href="/blog/stripe-fees">Stripe fees</a> and <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<h2>How to follow up on unpaid Xero invoices</h2>
<ul>
<li><strong>Invoice reminders:</strong> Xero can send automatic reminder emails a set number of days before or after the due date. Turn them on in the invoice reminder settings and edit the wording.</li>
<li><strong>Aged receivables report:</strong> shows who owes what and for how long; see our guide to <a href="/blog/accounts-receivable-aging-report">accounts receivable aging reports</a>.</li>
<li><strong>Statements:</strong> send customers a statement of all open invoices.</li>
<li><strong>Late fees:</strong> Xero does not add interest automatically in most setups, so if your terms allow <a href="/blog/late-payment-fees">late payment fees</a>, add them as a separate invoice or line.</li>
</ul>

<h2>Editing, voiding and crediting invoices in Xero</h2>
<p>Mistakes happen. The right fix depends on the invoice status:</p>
<ul>
<li><strong>Draft:</strong> edit freely or delete.</li>
<li><strong>Awaiting payment, no payments:</strong> edit, or void if it should never have been issued.</li>
<li><strong>Partly or fully paid:</strong> remove the payment before editing, or issue a credit note for the difference.</li>
</ul>
<p>Voiding keeps the invoice number in your records, which preserves an audit trail. For when to use each fix, see <a href="/blog/how-to-void-an-invoice">how to void an invoice</a> and our <a href="/blog/credit-note-guide">credit note guide</a>.</p>

<h2>How to invoice in a foreign currency in Xero</h2>
<p>If you bill clients abroad, Xero's multi-currency feature (included on higher plans) lets you issue the invoice in the client's currency while your reports stay in your base currency. The general process:</p>
<ol>
<li>Turn on the currency you need in the currency settings.</li>
<li>On the new invoice, choose that currency from the currency selector.</li>
<li>Xero applies a daily exchange rate, which you can usually override with your own rate.</li>
<li>When payment arrives, Xero records any exchange gain or loss automatically when you reconcile.</li>
</ol>
<p>Tell the client which currency you expect and who pays bank or conversion fees. Wire fees deducted in transit are a common reason international invoices end up a few dollars short.</p>

<h2>Creating invoices on the Xero mobile app</h2>
<p>Xero's mobile app lets you create and send invoices, check who has paid and record payments from your phone. It is useful for tradespeople who want to invoice on site before leaving the job. The app uses the same contacts, items and branding themes as the web version, so set those up on a computer first. For a broader look at phone invoicing, see <a href="/blog/how-to-make-an-invoice-on-your-phone">how to make an invoice on your phone</a>.</p>

<h2>Common mistakes when invoicing in Xero</h2>
<ul>
<li><strong>Wrong tax setting:</strong> mixing tax inclusive and exclusive amounts changes totals and tax returns.</li>
<li><strong>Coding everything to one account</strong>, which makes reports useless for spotting which services earn money.</li>
<li><strong>Leaving invoices in draft</strong>, so they never appear in receivables and never get sent.</li>
<li><strong>Duplicate contacts</strong> for the same customer, which splits their history and statements.</li>
<li><strong>Deleting instead of voiding</strong> approved invoices, which leaves gaps in your numbering.</li>
<li><strong>Forgetting the PO number</strong>, a top reason large clients hold payment.</li>
<li><strong>Not reconciling payments</strong>, so paid invoices still show as overdue.</li>
</ul>

<h2>Xero vs a simple invoice generator</h2>
<table>
<thead><tr><th>Need</th><th>Xero</th><th>Free invoice generator</th></tr></thead>
<tbody>
<tr><td>Send a professional invoice</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Bank feeds and reconciliation</td><td>Yes</td><td>No</td></tr>
<tr><td>Tax reports and accountant access</td><td>Yes</td><td>No</td></tr>
<tr><td>Monthly cost</td><td>Paid subscription (see <a href="https://www.xero.com/us/pricing-plans/" target="_blank" rel="noopener">Xero pricing</a>)</td><td>Free</td></tr>
<tr><td>Account needed</td><td>Yes</td><td>No</td></tr>
</tbody>
</table>
<p>Our article on <a href="/blog/invoice-generator-vs-accounting-software">invoice generators vs accounting software</a> explains the trade-off in more detail.</p>

<p>Once your settings, items and tax rates are in place, knowing how to create an invoice in Xero takes only a minute per bill: choose the contact, add lines, check tax and approve. If you are not ready for a full accounting subscription, or just need a quick one-off invoice, try the <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up and builds a PDF in your browser that you can download and send right away.</p>
`,
  },
  {
    slug: "how-to-create-invoice-in-wave",
    title: "How to Create an Invoice in Wave: Steps + Fees (2026)",
    description:
      "How to create an invoice in Wave step by step, plus Wave's card and bank payment fees as of October 2026, recurring invoices, reminders and common mistakes.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["freshbooks-vs-wave", "wave-vs-quickbooks", "zoho-invoice-vs-wave"],
    faqs: [
      {
        q: "Is Wave invoicing really free?",
        a: "Wave's Starter plan is free and includes unlimited invoices and estimates. You pay only if customers pay online through Wave Payments, which charges per-transaction fees, or if you choose the paid Pro plan or add-ons such as payroll. Check Wave's pricing page for current terms in your country, because features and fees change and some are US-only or Canada-only.",
      },
      {
        q: "How much does Wave charge for credit card payments?",
        a: "As of October 2026, Wave's published rate for Visa, Mastercard and Discover is 2.9% plus $0.60 per transaction on the Starter plan, and 3.4% plus $0.60 for American Express. The Pro plan waives the fixed $0.60 on a limited number of card transactions each month. Rates can change, so confirm them on Wave's payments page before setting your prices.",
      },
      {
        q: "How much does Wave charge for bank payments?",
        a: "Wave's published fee for bank payments (ACH in the US) is 1% per transaction with a $1 minimum, as of October 2026. Bank payments are usually far cheaper than cards for larger invoices: on a $3,000 invoice, 1% is $30 compared with about $87.60 at the standard card rate. Encourage bank payments for big invoices if your clients are comfortable with them.",
      },
      {
        q: "Can I pass Wave's processing fees on to my customers?",
        a: "Some businesses add a card surcharge or a convenience fee, but surcharging rules are set by card networks and some US states restrict or regulate them, and disclosure requirements apply. A simpler approach is building payment costs into your prices or offering a small discount for bank payment. Check Wave's help center and current card network rules before adding any surcharge.",
      },
      {
        q: "Does Wave work outside the US and Canada?",
        a: "You can use Wave's invoicing and accounting in many countries, but Wave Payments and payroll are offered only in specific countries, mainly the US and Canada. Businesses elsewhere can still send Wave invoices and accept payment by bank transfer or another processor, then record the payment manually. Check Wave's help center for current availability in your country.",
      },
      {
        q: "How do I add a logo and colors to Wave invoices?",
        a: "Wave lets you customize invoices in its invoice customization settings, where you can upload a logo, choose an accent color and select a template style. You can also set default payment terms, footer text and memo. Save these once so every new invoice uses them automatically, and preview an invoice to check how it looks on screen and as a PDF.",
      },
      {
        q: "Can Wave send automatic payment reminders?",
        a: "Yes. Wave can send reminder emails before and after an invoice's due date when the feature is turned on for an invoice. You choose the timing, such as three days before and seven days after the due date. Reminders stop when the invoice is marked paid, which is another reason to record offline payments promptly.",
      },
      {
        q: "What is the difference between Wave Starter and Pro?",
        a: "Starter is the free plan with unlimited invoicing, estimates and basic bookkeeping. Pro is a paid monthly plan that adds features such as automatic bank transaction imports, receipt capture and other automation, plus reduced card fees on a limited number of transactions. Wave's own help center listed Pro at US$19 a month, billed monthly, in 2026; check the pricing page for current offers.",
      },
      {
        q: "Can I convert a Wave estimate into an invoice?",
        a: "Yes. Once a customer approves an estimate in Wave, you can convert it to an invoice so the line items, prices and customer details carry over. This saves retyping and keeps quoted and billed amounts consistent. Edit any lines that changed during the job before sending the converted invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To create an invoice in Wave, go to Sales &amp; Payments, open Invoices and click Create an invoice. Choose or add a customer, add items with quantities, prices and taxes, set the due date, then save and send it by email or share a link. Invoicing is free on Wave's Starter plan; online payments carry per-transaction fees.</p>

<p>Wave is popular with freelancers and very small businesses in the US and Canada because its Starter plan includes unlimited invoices at no monthly cost. Wave makes money mainly when your customers pay through Wave Payments, from its paid Pro plan and from add-ons such as payroll. This guide covers how to create a Wave invoice step by step, the payment fees as of October 2026, recurring invoices, reminders and common mistakes. Wave updates its interface periodically, so if a label differs slightly on your screen, look for the nearest match or check the <a href="https://support.waveapps.com/" target="_blank" rel="noopener">Wave help center</a>.</p>

<h2>How much does Wave cost for invoicing?</h2>
<p>As of October 2026, based on Wave's published pricing and payments pages:</p>
<table>
<thead><tr><th>Item</th><th>Starter (free)</th><th>Pro (paid)</th></tr></thead>
<tbody>
<tr><td>Monthly subscription</td><td>$0</td><td>US$19/month billed monthly (or US$190/year), per Wave's help center</td></tr>
<tr><td>Invoices and estimates</td><td>Unlimited</td><td>Unlimited</td></tr>
<tr><td>Card payments: Visa, Mastercard, Discover</td><td>2.9% + $0.60</td><td>2.9%, with the $0.60 waived on a limited number of transactions per month, then Starter rates</td></tr>
<tr><td>Card payments: American Express</td><td>3.4% + $0.60</td><td>3.4%, same fixed-fee waiver limit</td></tr>
<tr><td>Bank payments (ACH)</td><td>1% (minimum $1)</td><td>1% (minimum $1)</td></tr>
</tbody>
</table>
<p>Wave occasionally runs promotions on processing fees, and prices and limits change. Confirm current figures on <a href="https://www.waveapps.com/pricing" target="_blank" rel="noopener">Wave's pricing page</a> before you rely on them.</p>

<h2>What to set up in Wave before your first invoice</h2>
<ul>
<li><strong>Business profile:</strong> business name, address, phone and currency.</li>
<li><strong>Invoice customization:</strong> logo, accent color, template style, default payment terms and footer.</li>
<li><strong>Sales taxes:</strong> add each tax you charge (name, rate and, if registered, the tax number to show on invoices).</li>
<li><strong>Products and services:</strong> saved items with descriptions, prices, income accounts and default taxes.</li>
<li><strong>Customers:</strong> names, emails and billing addresses, or add them as you go.</li>
<li><strong>Payments:</strong> set up Wave Payments (US or Canada) if you want customers to pay online by card or bank.</li>
</ul>

<h2>How to create an invoice in Wave: step by step</h2>
<ol>
<li><strong>Open Invoices.</strong> In the left menu, choose Sales &amp; Payments, then Invoices, and click <em>Create an invoice</em>.</li>
<li><strong>Add the customer.</strong> Select an existing customer or add a new one with an email address so you can send the invoice.</li>
<li><strong>Check the invoice header.</strong> Confirm the invoice number (Wave increments it automatically), the invoice date, the payment due date and an optional P.O./S.O. number.</li>
<li><strong>Add items.</strong> Pick saved products or services, or type a new item. Enter quantity and price; Wave totals each line.</li>
<li><strong>Apply taxes</strong> to each taxable line. Wave calculates tax per line and shows the tax total.</li>
<li><strong>Add notes and terms</strong>, such as late payment terms, bank details or a thank-you message.</li>
<li><strong>Turn on online payments</strong> for the invoice if Wave Payments is set up, choosing which methods (card, bank) to accept.</li>
<li><strong>Preview and save.</strong> Review how the invoice looks, then save it. A saved invoice can stay as a draft until you approve it.</li>
<li><strong>Send it.</strong> Email it from Wave, copy a shareable link, or download a PDF to send yourself.</li>
</ol>
<p>Wave shows whether the customer has viewed the invoice, which helps when you follow up.</p>

<h2>Worked example: what Wave fees cost on real invoices</h2>
<p>A freelance web developer sends three invoices in a month and wants to know what payment method costs her, using the Starter rates above.</p>
<table>
<thead><tr><th>Invoice</th><th>Amount</th><th>Paid by card (2.9% + $0.60)</th><th>Paid by bank (1%, $1 min)</th></tr></thead>
<tbody>
<tr><td>#201 Website maintenance</td><td>$150.00</td><td>$4.95</td><td>$1.50</td></tr>
<tr><td>#202 Landing page build</td><td>$1,200.00</td><td>$35.40</td><td>$12.00</td></tr>
<tr><td>#203 E-commerce site, milestone 2</td><td>$4,500.00</td><td>$131.10</td><td>$45.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$5,850.00</strong></td><td><strong>$171.45</strong></td><td><strong>$58.50</strong></td></tr>
</tbody>
</table>
<p>Steering the large milestone invoice toward bank payment saves her $86.10 on that invoice alone. Many freelancers enable both methods but note on large invoices that bank payment is preferred. For broader context, compare <a href="/blog/credit-card-processing-fees">credit card processing fees</a> across providers and see our guide on <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a>.</p>

<h2>How to set up recurring invoices in Wave</h2>
<p>Wave supports recurring invoices for retainers and subscriptions. The general process:</p>
<ol>
<li>Open the recurring invoices section under Sales &amp; Payments and create a new recurring invoice.</li>
<li>Add the customer and line items.</li>
<li>Set the schedule: how often, the start date and the end date or number of invoices.</li>
<li>Choose whether Wave emails each invoice automatically, and whether to charge a saved card or bank account automatically if the customer has authorized it.</li>
<li>Save and check the first invoice it generates.</li>
</ol>
<p>Automatic charging is handy for fixed monthly fees, but get the customer's written authorization. See our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> for wording and best practices.</p>

<h2>Recording payments and following up</h2>
<ul>
<li><strong>Online payments</strong> through Wave are matched to the invoice automatically.</li>
<li><strong>Offline payments</strong> (check, cash, bank transfer to your own account) must be recorded on the invoice manually, or the invoice will keep showing as overdue and reminders may keep going out.</li>
<li><strong>Reminders:</strong> turn on automatic reminders before and after the due date. Pair them with clear <a href="/blog/payment-reminder-emails">payment reminder emails</a> for long-overdue accounts.</li>
<li><strong>Partial payments:</strong> record each payment; Wave shows the remaining balance. See <a href="/blog/partial-payment-invoice">partial payment invoices</a>.</li>
</ul>

<h2>How to create an estimate in Wave and turn it into an invoice</h2>
<p>Many service businesses quote before they bill. Wave includes free estimates:</p>
<ol>
<li>Under Sales &amp; Payments, open Estimates and create a new estimate.</li>
<li>Add the customer, items, taxes, an expiry date and any notes about what is included.</li>
<li>Send the estimate by email or link so the customer can review and accept it.</li>
<li>Once accepted, convert the estimate to an invoice. The details carry over, so you only adjust lines that changed.</li>
</ol>
<p>Converting rather than retyping keeps your quoted and invoiced prices consistent. Our guide on <a href="/blog/invoice-vs-estimate">invoices vs estimates</a> explains when each document is used.</p>

<h2>Can you pass Wave's fees on to customers?</h2>
<p>Some businesses add a surcharge for card payments. Before you do, check the card network rules and your state's laws, because surcharging is restricted or regulated in some places and requires clear disclosure. Our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> covers the basics. Simpler alternatives:</p>
<ul>
<li>Build an average payment cost into your rates.</li>
<li>Offer a small discount for bank payment on large invoices.</li>
<li>Set a minimum invoice amount for card payments, where rules allow.</li>
</ul>

<h2>When a free invoice generator is enough</h2>
<p>Wave is a good fit when you want invoices, payments and bookkeeping in one place. But if you send only a few invoices a month, are outside the US and Canada, or just need a one-off invoice without creating an account and linking a bank, a simple generator may be faster. Our <a href="/invoice-generator">free invoice generator</a> creates a PDF invoice in your browser that you can email and track in a spreadsheet.</p>

<h2>Common mistakes when invoicing in Wave</h2>
<ul>
<li><strong>Ignoring payment fees in pricing</strong>, especially the fixed fee on small invoices, which takes a larger percentage of a $50 invoice than a $5,000 one.</li>
<li><strong>Not recording offline payments</strong>, which leaves reminders running and makes reports wrong.</li>
<li><strong>Missing sales tax setup</strong>, so taxable items go out without tax. Check rates with the <a href="/tools/sales-tax-calculator">sales tax calculator</a> and your state's rules.</li>
<li><strong>Duplicate customers</strong> created from the invoice screen with slightly different names.</li>
<li><strong>Deleting sent invoices</strong> instead of adjusting them, which breaks your numbering record.</li>
<li><strong>Expecting Wave Payments outside the US and Canada</strong>; elsewhere, accept bank transfers or another processor and record payments manually.</li>
</ul>

<h2>Is Wave the right invoicing tool for you?</h2>
<p>Wave fits freelancers and small service businesses in the US and Canada who want free invoicing and simple bookkeeping. It is less suited to businesses that need inventory, multi-currency depth, project accounting or advanced approvals. If you are weighing options, read <a href="/blog/freshbooks-vs-wave">FreshBooks vs Wave</a> and <a href="/blog/wave-vs-quickbooks">Wave vs QuickBooks</a>, or our list of the <a href="/blog/best-free-invoicing-software">best free invoicing software</a>.</p>

<p>Learning how to create an invoice in Wave takes a few minutes, and the free Starter plan covers unlimited invoices. Just factor Wave's payment fees into your pricing and record offline payments promptly. If you need a quick invoice without creating any account, use the <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up, builds your invoice as a PDF in your browser and lets you download it immediately.</p>
`,
  },
  {
    slug: "how-to-create-invoice-in-zoho-books",
    title: "How to Create an Invoice in Zoho Books (2026 Guide)",
    description:
      "How to create an invoice in Zoho Books step by step: customers, items, taxes, templates, payment gateways, recurring invoices and the mistakes to avoid.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["zoho-books-vs-quickbooks", "xero-vs-zoho-books", "zoho-invoice-vs-wave"],
    faqs: [
      {
        q: "Is Zoho Books free for invoicing?",
        a: "Zoho has offered a free Zoho Books plan for very small businesses below a revenue limit in some regions, plus paid plans with more users and features. Zoho also has a separate product, Zoho Invoice, focused only on invoicing. Plan names, limits and prices vary by country and change over time, so check Zoho's pricing page for your region before deciding.",
      },
      {
        q: "What is the difference between Zoho Books and Zoho Invoice?",
        a: "Zoho Invoice handles quotes, invoices, payments, time tracking and expenses for billing purposes. Zoho Books is full accounting software: it adds bank feeds and reconciliation, a chart of accounts, bills and purchase management, inventory features and tax reporting. If you only need to bill clients, Zoho Invoice may be enough; if you need books an accountant can close, choose Zoho Books.",
      },
      {
        q: "Can I customize invoice templates in Zoho Books?",
        a: "Yes. Zoho Books includes a set of invoice templates you can customize from the templates area of its settings: logo, colors, fonts, which fields and columns appear, header and footer text, and labels. You can create several templates and pick one per customer or per invoice. Preview the template as a PDF before using it for real customers.",
      },
      {
        q: "Which payment gateways work with Zoho Books?",
        a: "Zoho Books integrates with several online payment providers, which differ by region. Options have included Zoho's own payment service in some countries along with popular third-party gateways for cards and bank payments. Once a gateway is connected, customers see a payment option on the invoice. Fees are charged by the gateway, so compare their current rates in your country.",
      },
      {
        q: "Can Zoho Books send automatic payment reminders?",
        a: "Yes. You can configure automated reminders based on the due date, for example a few days before and at set intervals after, and customize the email wording. You can also send manual reminders from an invoice. Make sure offline payments are recorded promptly so customers who have already paid do not receive reminders.",
      },
      {
        q: "How do I convert a quote to an invoice in Zoho Books?",
        a: "Zoho Books calls quotes estimates or quotes depending on region. Once the customer accepts one, open it and use the convert to invoice option. The customer, items and prices carry over, and you can edit them before saving. Some businesses also convert accepted quotes into sales orders first and invoice later, which is useful when goods ship in stages.",
      },
      {
        q: "Why can't I edit an invoice in Zoho Books?",
        a: "Editing can be restricted once an invoice has payments recorded, falls inside a locked accounting period, or has been reported under an e-invoicing or tax compliance system in certain countries. In those cases the usual fixes are removing the payment, unlocking the period with the right permissions, or issuing a credit note. Check Zoho's help documentation for your edition.",
      },
      {
        q: "Does Zoho Books handle sales tax, VAT and GST?",
        a: "Yes, Zoho Books has regional editions with tax features for different countries, including US sales tax, UK VAT, Indian GST and Gulf VAT, plus e-invoicing support in some countries. You set up tax rates or groups, apply them to items and customers, and the software calculates tax on invoices. You remain responsible for correct rates and filing.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To create an invoice in Zoho Books, go to Sales in the left sidebar, choose Invoices and click + New. Select the customer, confirm the invoice number, dates and payment terms, add items with quantities, rates and taxes, then save as draft or save and send by email. Customers can pay online if you connect a payment gateway.</p>

<p>Zoho Books is cloud accounting software used by small and mid-sized businesses around the world, with regional editions for the US, UK, India, Canada, Australia, the Gulf states and more. Its invoicing is flexible: custom templates, multiple currencies, recurring invoices, automated reminders and a client portal. This guide shows how to create an invoice in Zoho Books step by step, what to configure first, a worked example and the mistakes that cause problems at month end. Menus differ slightly by edition, so if a label does not match your screen, check the official <a href="https://www.zoho.com/books/help/invoice/" target="_blank" rel="noopener">Zoho Books invoice help docs</a>.</p>

<h2>What to set up in Zoho Books before invoicing</h2>
<ul>
<li><strong>Organization profile:</strong> legal name, address, base currency, fiscal year and tax registration numbers.</li>
<li><strong>Taxes:</strong> tax rates or groups for your region, and whether prices are tax inclusive or exclusive.</li>
<li><strong>Invoice preferences:</strong> numbering (prefix and next number), default terms and notes, and whether to allow partial payments.</li>
<li><strong>Templates:</strong> logo, colors and which fields to show.</li>
<li><strong>Items:</strong> products and services with rates, accounts and default tax.</li>
<li><strong>Payment gateway:</strong> connect one so invoices show a payment option.</li>
<li><strong>Reminders:</strong> automated reminder schedule and email wording.</li>
</ul>
<p>Choosing between platforms? See <a href="/blog/zoho-books-vs-quickbooks">Zoho Books vs QuickBooks</a> and <a href="/blog/xero-vs-zoho-books">Xero vs Zoho Books</a>.</p>

<h2>How to create an invoice in Zoho Books: step by step</h2>
<ol>
<li><strong>Open a new invoice.</strong> In the left sidebar, go to Sales, then Invoices, and click <em>+ New</em> in the top right. You can also use the quick create (+) button at the top of the screen.</li>
<li><strong>Select the customer.</strong> Pick an existing customer or create one. Their billing address, currency, payment terms and tax treatment fill in automatically.</li>
<li><strong>Confirm the invoice details.</strong> Check the auto-generated invoice number, order number (for a PO), invoice date, terms and due date. Assign a salesperson if you track sales by person.</li>
<li><strong>Add items.</strong> Choose saved items or type new ones. Enter quantity, rate, discount and tax. Zoho Books calculates line amounts, subtotal, tax and total.</li>
<li><strong>Add adjustments if needed</strong>: an invoice-level discount, shipping charges or a rounding adjustment.</li>
<li><strong>Write customer notes and terms</strong>, such as bank details, late payment terms or a thank-you message.</li>
<li><strong>Attach files</strong> like timesheets or delivery notes if the customer needs them.</li>
<li><strong>Choose a template</strong> if you use more than one.</li>
<li><strong>Save.</strong> Save as draft to finish later, or save and send to email it now. Sending marks it as sent and adds it to receivables.</li>
</ol>
<p>The invoice email links to a customer-facing page where the client can view, download as PDF and pay online if a gateway is connected.</p>

<h2>Worked example: a Zoho Books invoice with tax and a discount</h2>
<p>An IT services company in Illinois bills a client for hardware and setup. The hardware is taxable and the setup labor is treated as non-taxable in this example (tax rules on services vary by state). Figures are illustrative.</p>
<table>
<thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Discount</th><th>Tax</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Business laptop, 14-inch</td><td>3</td><td>$1,150.00</td><td>5%</td><td>Sales tax 8.25%</td><td>$3,277.50</td></tr>
<tr><td>Docking station</td><td>3</td><td>$210.00</td><td>0%</td><td>Sales tax 8.25%</td><td>$630.00</td></tr>
<tr><td>Device setup and data migration (hours)</td><td>6</td><td>$110.00</td><td>0%</td><td>Non-taxable</td><td>$660.00</td></tr>
<tr><td colspan="5">Subtotal</td><td>$4,567.50</td></tr>
<tr><td colspan="5">Sales tax 8.25% on $3,907.50</td><td>$322.37</td></tr>
<tr><td colspan="5"><strong>Total</strong></td><td><strong>$4,889.87</strong></td></tr>
</tbody>
</table>
<p>The 8.25 percent rate is illustrative; local rates differ across cities and counties. Our <a href="/blog/how-to-calculate-sales-tax">guide to calculating sales tax</a> and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> help you check the math.</p>

<h2>How to create recurring invoices in Zoho Books</h2>
<ol>
<li>Go to Sales, then Recurring Invoices, and create a new profile.</li>
<li>Name the profile, choose the customer and set how often it repeats, the start date and the end date (or never expires).</li>
<li>Add items, taxes and notes as with a normal invoice.</li>
<li>Choose whether invoices are created as drafts or sent automatically, and whether to charge a saved card or bank account if the customer authorized it.</li>
<li>Save the profile and review the first generated invoice.</li>
</ol>
<p>Recurring profiles suit retainers, maintenance contracts and subscriptions. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers wording and timing.</p>

<h2>Recording payments and handling overdue invoices</h2>
<ul>
<li><strong>Online payments</strong> through a connected gateway are recorded against the invoice automatically.</li>
<li><strong>Manual payments</strong> (bank transfer, check, cash) are recorded from the invoice's payment option, with the date, mode and reference.</li>
<li><strong>Overpayments</strong> can be kept as customer credits and applied later; see <a href="/blog/customer-overpayment">what to do when a customer overpays</a>.</li>
<li><strong>Reminders</strong> go out on your schedule; add a personal follow-up for large balances.</li>
<li><strong>Reports</strong> such as AR aging show overdue balances by customer.</li>
</ul>

<h2>Zoho Books invoice features at a glance</h2>
<table>
<thead><tr><th>Feature</th><th>What it does</th><th>When it helps</th></tr></thead>
<tbody>
<tr><td>Quotes or estimates</td><td>Send a quote and convert it to an invoice</td><td>Project and product sales</td></tr>
<tr><td>Retainer invoices</td><td>Collect advance payments and apply them later</td><td>Agencies, consultants, law firms</td></tr>
<tr><td>Multi-currency</td><td>Invoice in the customer's currency</td><td>International clients</td></tr>
<tr><td>Customer portal</td><td>Clients view invoices and pay online</td><td>Repeat customers</td></tr>
<tr><td>Credit notes</td><td>Reduce or reverse invoices</td><td>Returns and corrections</td></tr>
<tr><td>Time tracking and projects</td><td>Bill logged hours on invoices</td><td>Hourly service businesses</td></tr>
</tbody>
</table>
<p>If you bill advance fees, our <a href="/blog/retainer-invoice">retainer invoice guide</a> explains the accounting behind them.</p>

<h2>How the quote-to-invoice workflow works in Zoho Books</h2>
<p>Zoho Books is strongest when you use the whole sales flow rather than just invoices:</p>
<ol>
<li><strong>Quote (estimate):</strong> send a quote from Sales; the customer can accept it from the email or portal.</li>
<li><strong>Sales order (optional):</strong> confirm the order, useful when goods ship in stages.</li>
<li><strong>Invoice:</strong> convert the accepted quote or sales order into an invoice with one action.</li>
<li><strong>Payment:</strong> record or receive the payment online; the invoice status updates to paid.</li>
<li><strong>Credit note (if needed):</strong> handle returns or adjustments without editing the original invoice.</li>
</ol>
<p>Each document links to the next, which gives you an audit trail from quote to cash. If you bill on milestones, our guide to <a href="/blog/progress-billing">progress billing</a> explains how to structure partial invoices.</p>

<h2>Zoho Books invoices in VAT and GST countries</h2>
<p>Outside the US, invoices often have legal content requirements, such as the seller's VAT or GST number, the customer's tax number for business sales, tax amounts by rate and specific wording for reverse charge or zero-rated supplies. Zoho Books' regional editions include fields and templates for these, and in some countries support e-invoicing or real-time reporting to the tax authority. Before your first invoice:</p>
<ul>
<li>Confirm you selected the correct country edition when you created the organization.</li>
<li>Enter your tax registration numbers and set each customer's tax treatment.</li>
<li>Check that your template shows every field your tax authority requires.</li>
</ul>
<p>Zoho's documentation covers each country's settings, but you remain responsible for compliance. For comparison, see our overview of <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>

<h2>When to use a free invoice generator instead</h2>
<p>If you send only a few invoices, are testing a side business or need a quick invoice while your Zoho setup is unfinished, a <a href="/invoice-generator">free invoice generator</a> gets a professional PDF out the door in minutes without accounts or settings.</p>

<h2>Common mistakes when invoicing in Zoho Books</h2>
<ul>
<li><strong>Wrong tax treatment on customers</strong>, especially in VAT and GST countries where customer location changes the tax.</li>
<li><strong>Mixing tax inclusive and exclusive pricing</strong> between items and the invoice setting.</li>
<li><strong>Editing invoices in closed periods</strong>, which changes filed figures; use credit notes instead.</li>
<li><strong>Not recording manual payments</strong>, so reminders go out to customers who already paid.</li>
<li><strong>Too many templates</strong> with inconsistent details, confusing customers' AP teams.</li>
<li><strong>Skipping the PO number</strong> field for corporate clients, delaying approval.</li>
</ul>
<p>These issues show up in any tool; see our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> for more.</p>

<p>Once taxes, items and templates are set up, knowing how to create an invoice in Zoho Books becomes routine: choose the customer, add items, check tax and send. If you are not ready for accounting software or need a quick invoice for a single job, use the <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up and builds a downloadable PDF in your browser. You can also browse ready-made <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "how-to-create-invoice-in-freshbooks",
    title: "How to Create an Invoice in FreshBooks (2026 Guide)",
    description:
      "How to create an invoice in FreshBooks step by step: clients, billable time and expenses, taxes, online payments, recurring invoices and mistakes to avoid.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["freshbooks-vs-quickbooks", "freshbooks-vs-wave", "how-to-invoice-for-hourly-work"],
    faqs: [
      {
        q: "Does FreshBooks have a free plan?",
        a: "FreshBooks is a paid subscription service with several plan tiers, and it has typically offered a free trial and occasional discounts for new users rather than a permanent free plan. Plans differ in how many clients you can bill and which features are included. Check the FreshBooks pricing page for your country, as plans, prices and promotions change regularly.",
      },
      {
        q: "How much does FreshBooks charge for online payments?",
        a: "FreshBooks Payments and connected processors charge per-transaction fees for card and bank payments, separate from the subscription. Rates differ by country, card type and payment method, and bank payments are usually cheaper than cards. Look up the current rates on FreshBooks' payments page or in your account settings before enabling payments, and build the cost into your prices.",
      },
      {
        q: "Can I bill tracked time on a FreshBooks invoice?",
        a: "Yes. If you log time against a client or project in FreshBooks, you can import unbilled time into an invoice when you create it. The hours, rates and descriptions come in as line items, and the time is then marked as billed so it is not invoiced twice. Review descriptions before sending so the client sees clear explanations of the work.",
      },
      {
        q: "How do I add late fees in FreshBooks?",
        a: "FreshBooks lets you set late fees on invoices, either a flat amount or a percentage, applied after a set number of days past due. You can enable them per invoice or as a default in settings. Make sure your contract or terms mention late fees, and check any limits in your state or country, before switching them on for clients.",
      },
      {
        q: "Can clients pay FreshBooks invoices without an account?",
        a: "Yes. Clients receive an email with a link to view the invoice online, and they can pay with the methods you enabled without creating a FreshBooks account. They can also download a PDF. Some clients prefer to pay by bank transfer or check, which you then record as a payment on the invoice.",
      },
      {
        q: "What is the difference between FreshBooks and QuickBooks for invoicing?",
        a: "FreshBooks was built around invoicing and time tracking for service businesses and freelancers, with a simple interface. QuickBooks Online is broader accounting software with more inventory, reporting and accountant tools. Both create professional invoices and accept online payments. Service-based freelancers often find FreshBooks easier, while product businesses often prefer QuickBooks.",
      },
      {
        q: "How do I send an invoice reminder in FreshBooks?",
        a: "FreshBooks can send automatic payment reminders on a schedule you choose, before or after the due date, and you can customize the message. You can also send a reminder manually from an invoice. Reminders stop once the invoice is marked paid, so record offline payments promptly to avoid chasing clients who already paid.",
      },
      {
        q: "Can I change the invoice number format in FreshBooks?",
        a: "Yes, you can edit the invoice number on an individual invoice, and later invoices continue from the new number. Many businesses add a prefix such as the year or a client code. Keep numbers unique and sequential, and avoid restarting at 1 each year unless you include the year in the number to prevent duplicates.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To create an invoice in FreshBooks, open Invoices and click New Invoice (or use the Create New button on the dashboard). Choose the client, add line items or import unbilled time and expenses, set taxes, the due date and payment options, then preview and send it by email or save it as a draft.</p>

<p>FreshBooks is cloud accounting software designed around invoicing for freelancers and service businesses. Its strengths are a clean invoice editor, time tracking that flows straight into invoices, expense rebilling and automated reminders. This guide explains how to create an invoice in FreshBooks step by step, how to bill time and expenses, how online payments work and the mistakes that slow down payment. FreshBooks updates its design from time to time, so if a button label differs on your screen, look for the closest match or search the <a href="https://support.freshbooks.com/" target="_blank" rel="noopener">FreshBooks support center</a>.</p>

<h2>What to set up in FreshBooks before your first invoice</h2>
<ul>
<li><strong>Business information:</strong> company name, address, phone and tax numbers in your settings.</li>
<li><strong>Invoice customization:</strong> logo, colors and a template style.</li>
<li><strong>Default terms:</strong> payment due period (for example, 15 or 30 days), notes and terms and conditions.</li>
<li><strong>Taxes:</strong> add the sales tax, VAT or GST rates you charge, with your registration number if required.</li>
<li><strong>Items and services:</strong> saved descriptions and rates for work you bill often.</li>
<li><strong>Online payments:</strong> enable card and bank payments through FreshBooks Payments or a supported processor.</li>
<li><strong>Reminders and late fees:</strong> choose a reminder schedule and, if your terms allow, a late fee.</li>
</ul>

<h2>How to create an invoice in FreshBooks: step by step</h2>
<ol>
<li><strong>Start a new invoice.</strong> Go to Invoices and click <em>New Invoice</em>, or use the Create New button on the dashboard and choose Invoice.</li>
<li><strong>Choose the client.</strong> Select an existing client or add a new one with their email and billing address.</li>
<li><strong>Import unbilled work (optional).</strong> If you tracked time or recorded billable expenses for this client, use the option to add unbilled time and expenses. They become line items.</li>
<li><strong>Add line items.</strong> For each item, enter a name, description, rate and quantity (or hours). FreshBooks totals each line.</li>
<li><strong>Apply taxes</strong> to taxable lines; the tax summary appears near the total.</li>
<li><strong>Set dates and number.</strong> Check the issue date, due date and invoice number. Add a reference such as the client's PO number.</li>
<li><strong>Add a discount or deposit request</strong> if needed. Requesting a deposit is useful for larger projects.</li>
<li><strong>Write notes and terms</strong>, for example "Payment due within 15 days. Bank details below."</li>
<li><strong>Choose payment options</strong> for this invoice: card, bank transfer, or both.</li>
<li><strong>Preview and send.</strong> Send by email with a short message, or save as draft. You can also download the PDF.</li>
</ol>
<p>After sending, FreshBooks shows status changes such as sent, viewed, partially paid, paid and overdue.</p>

<h2>Worked example: a FreshBooks invoice with imported time and expenses</h2>
<p>A freelance video editor tracked time in FreshBooks for a client's product launch and recorded a stock footage purchase as a billable expense with a 10 percent markup. Figures are illustrative; no sales tax applies to her services in this example.</p>
<table>
<thead><tr><th>Item</th><th>Description</th><th>Rate</th><th>Qty/Hours</th><th>Line total</th></tr></thead>
<tbody>
<tr><td>Editing</td><td>Launch video, rough cut and revisions (Oct 1 to Oct 14)</td><td>$85.00</td><td>18.5</td><td>$1,572.50</td></tr>
<tr><td>Color grading</td><td>Final grade, 3 deliverables</td><td>$95.00</td><td>4</td><td>$380.00</td></tr>
<tr><td>Motion graphics</td><td>Lower thirds and end card, flat fee</td><td>$350.00</td><td>1</td><td>$350.00</td></tr>
<tr><td>Expense</td><td>Stock footage license ($120.00 + 10%)</td><td>$132.00</td><td>1</td><td>$132.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$2,434.50</td></tr>
<tr><td colspan="4">Deposit received Sept 28</td><td>-$600.00</td></tr>
<tr><td colspan="4"><strong>Amount due (Net 15)</strong></td><td><strong>$1,834.50</strong></td></tr>
</tbody>
</table>
<p>Importing time avoids missed hours, and showing the deposit makes the balance due unmistakable. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers how much detail clients expect in time descriptions, and <a href="/blog/deposit-invoice">deposit invoices</a> explains how to request money up front.</p>

<h2>How to set up recurring invoices in FreshBooks</h2>
<ol>
<li>Create a new invoice as usual, or open the recurring templates area under Invoices.</li>
<li>Turn the invoice into a recurring template and set the frequency (weekly, monthly, yearly and so on), start date and number of invoices or no end date.</li>
<li>Choose whether each invoice is sent automatically or saved as a draft for review.</li>
<li>If the client agrees, enable auto-bill so their saved card or bank account is charged each cycle.</li>
<li>Save and confirm the first invoice in the schedule.</li>
</ol>
<p>See our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> for best practices.</p>

<h2>Payments, reminders and late fees in FreshBooks</h2>
<table>
<thead><tr><th>Tool</th><th>What it does</th><th>Tip</th></tr></thead>
<tbody>
<tr><td>Online payments</td><td>Client pays by card or bank from the invoice link</td><td>Check current processing fees and prefer bank payment for large invoices</td></tr>
<tr><td>Manual payment recording</td><td>Mark checks, cash or direct transfers as paid</td><td>Record promptly to stop reminders</td></tr>
<tr><td>Automatic reminders</td><td>Emails before or after the due date</td><td>Keep the tone friendly; use a personal email for big balances</td></tr>
<tr><td>Late fees</td><td>Flat or percentage fee after a set number of days</td><td>Only if your terms disclose it; see <a href="/blog/late-payment-fees">late payment fees</a></td></tr>
<tr><td>Deposits</td><td>Request part payment up front</td><td>Use for large or long projects</td></tr>
</tbody>
</table>
<p>To compare processing costs, read our overview of <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<h2>Editing, duplicating and correcting FreshBooks invoices</h2>
<ul>
<li><strong>Edit</strong> a sent invoice if no payment has been recorded; FreshBooks keeps the client view up to date. Tell the client if the amount changed.</li>
<li><strong>Duplicate</strong> an invoice to bill similar work again without retyping.</li>
<li><strong>Credit</strong> part of an invoice with a credit note when you agree a reduction after payment; see our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
<li><strong>Archive or delete</strong> only drafts or genuine errors; keep sent invoices in your records for audit purposes.</li>
</ul>

<h2>How to turn a FreshBooks estimate into an invoice</h2>
<p>FreshBooks includes estimates (and proposals on some plans) so you can agree the price before work starts:</p>
<ol>
<li>Create an estimate for the client with line items, taxes and notes about scope.</li>
<li>Send it; the client can accept it online.</li>
<li>Convert the accepted estimate into an invoice. The line items carry over, and you can edit anything that changed.</li>
<li>Send the invoice, or request a deposit first if the project is large.</li>
</ol>
<p>Agreeing scope in writing before invoicing prevents most disputes. Our <a href="/blog/estimate-template">estimate template guide</a> shows what a good estimate includes.</p>

<h2>Tips for better time tracking in FreshBooks</h2>
<ul>
<li><strong>Assign every time entry to a client and project</strong> so it appears when you import unbilled time.</li>
<li><strong>Write the note when you log the time</strong>, not when you invoice. "Revised homepage hero per Oct 3 feedback" is easier to approve than "design work."</li>
<li><strong>Use different services for different rates</strong>, such as design and project management, so each line shows the correct rate.</li>
<li><strong>Review time weekly</strong> to catch missing entries while you still remember the work.</li>
<li><strong>Bill on a regular cycle</strong> (weekly, biweekly or monthly) so invoices stay small and clients are not surprised.</li>
</ul>

<h2>When a free invoice generator is enough</h2>
<p>FreshBooks is worth the subscription when you rely on time tracking, expense rebilling and automated reminders. If you send only a few fixed-price invoices a month, a <a href="/invoice-generator">free invoice generator</a> can produce the same professional PDF without a monthly fee; see our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a>.</p>

<h2>Common mistakes when invoicing in FreshBooks</h2>
<ul>
<li><strong>Forgetting to import unbilled time</strong>, leaving hours unpaid.</li>
<li><strong>Vague time descriptions</strong> like "work" that trigger client questions.</li>
<li><strong>Late fees without disclosure</strong> in your contract or terms.</li>
<li><strong>Not recording offline payments</strong>, so reminders keep firing.</li>
<li><strong>Charging card fees you have not accounted for</strong> in pricing.</li>
<li><strong>Restarting invoice numbers</strong> and creating duplicates; see our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a>.</li>
</ul>

<h2>FreshBooks vs other invoicing options</h2>
<p>FreshBooks suits service businesses that live on time tracking and client billing. Product sellers and businesses needing deep inventory may prefer other tools. For side-by-side comparisons, see <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a> and <a href="/blog/freshbooks-vs-wave">FreshBooks vs Wave</a>. If you are not ready for a subscription, a free generator covers the basics.</p>

<p>Knowing how to create an invoice in FreshBooks mostly comes down to setting defaults once, importing your tracked time and expenses, and sending with clear terms and payment options. If you only need a single invoice or want to avoid another subscription, try the <a href="/invoice-generator">free invoice generator</a>. It requires no sign-up and builds a professional PDF in your browser that you can download and send immediately.</p>
`,
  },
  {
    slug: "how-to-invoice-as-a-sole-proprietor",
    title: "Sole Proprietor Invoice: What to Include (US, 2026)",
    description:
      "How to invoice as a sole proprietor in the US: what to include, EIN vs SSN, using a DBA name, W-9s and 1099s, plus a sample invoice and common mistakes.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["ein-vs-ssn", "what-is-a-dba", "how-to-invoice-as-an-llc"],
    faqs: [
      {
        q: "Do I need a business license to invoice as a sole proprietor?",
        a: "You do not need a special license to send an invoice, but many cities, counties and states require a general business license or registration to operate, and some professions require a specific license. Requirements depend on where you work and what you do. Check your city and state websites or the SBA's licensing guidance before you start billing clients.",
      },
      {
        q: "Should I put my SSN on my invoices?",
        a: "No. Your invoice does not need a taxpayer identification number, and printing your Social Security number on documents that get emailed and filed creates identity theft risk. Clients who need your TIN for 1099 reporting should request it on Form W-9, which you send securely. Getting a free EIN from the IRS lets you avoid giving out your SSN at all.",
      },
      {
        q: "Can a sole proprietor use a business name on invoices?",
        a: "Yes, but if the name differs from your legal name, most states require you to register it as a DBA (doing business as), also called an assumed or fictitious name. Many sole proprietors show both, such as Jane Smith DBA Smith Design Studio, so clients can match payments and tax forms. Registration rules and fees vary by state and county.",
      },
      {
        q: "Can clients pay a sole proprietor's invoice to a personal bank account?",
        a: "Legally, a sole proprietorship is not separate from you, so payments to a personal account are allowed. In practice, a separate business checking account makes bookkeeping, tax preparation and audits much easier and looks more professional. If you use a DBA, banks typically ask for your DBA registration to accept checks in that name.",
      },
      {
        q: "How do sole proprietors pay taxes on invoice income?",
        a: "Sole proprietors report business income and expenses on Schedule C with their Form 1040 and pay self-employment tax on net earnings on Schedule SE, in addition to income tax. Because no one withholds tax from invoice payments, most need to make quarterly estimated tax payments. State income tax may apply too. A tax professional can help you estimate payments.",
      },
      {
        q: "Do I charge sales tax as a sole proprietor?",
        a: "If you sell taxable goods or services in a state where you have sales tax obligations, you generally must register and collect sales tax, whatever your business structure. Many services are not taxable in many states, but rules vary. Check your state revenue department's guidance, register before collecting tax and show tax as a separate line on invoices.",
      },
      {
        q: "Is an invoice from a sole proprietor legally binding?",
        a: "An invoice by itself is a request for payment, not a contract. What makes a client legally obliged to pay is the agreement for the work, which can be a written contract, an accepted quote or sometimes an oral agreement. A clear invoice that references the agreement, the work delivered and the payment terms is strong evidence if you ever need to collect.",
      },
      {
        q: "When should a sole proprietor form an LLC instead?",
        a: "Owners often consider an LLC when the business takes on more liability risk, signs larger contracts, hires workers or wants to separate business and personal assets more formally. An LLC changes how you sign contracts and what name goes on invoices, but a single-member LLC is taxed like a sole proprietorship by default. A lawyer or accountant can help you weigh the costs.",
      },
      {
        q: "Will my client send me a 1099 for my invoices?",
        a: "A business client that pays you for services in the course of its trade or business generally must file Form 1099-NEC if payments reach the IRS threshold for the year, which is $2,000 for payments made after December 31, 2025. Payments by card or payment apps are usually reported by the processor on Form 1099-K instead. You must report all income whether or not you receive a form.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A sole proprietor invoice should show your legal name (and registered DBA, if you use one), contact details, the client's details, a unique invoice number, invoice and due dates, a description of the work, amounts, any sales tax, the total and payment instructions. You do not need to print your SSN or EIN; give your tax ID to clients on Form W-9 instead.</p>

<p>Most freelancers, consultants and tradespeople in the US start as sole proprietors, often without realizing it: if you work for yourself and have not formed an LLC or corporation, you are one by default. Invoicing as a sole proprietor is straightforward, but a few questions come up again and again: which name goes on the invoice, whether to use your Social Security number or an EIN, how a DBA fits in and what clients need for 1099 reporting. This guide answers each one, with a sample sole proprietor invoice and a checklist.</p>

<h2>What is a sole proprietorship (and why it matters for invoicing)?</h2>
<p>A sole proprietorship is an unincorporated business owned by one person. Legally, you and the business are the same: the business has no separate legal identity, you are personally responsible for its debts and its profit is reported on your personal tax return. The IRS explains the basics on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships" target="_blank" rel="noopener">sole proprietorships page</a>.</p>
<p>For invoicing, this means:</p>
<ul>
<li>The seller on the invoice is <strong>you</strong>, under your legal name or a registered trade name.</li>
<li>Your clients are contracting with you personally.</li>
<li>Invoice income is your business income, reported on Schedule C.</li>
</ul>
<p>If you are weighing a different structure, see <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>, and if you already have an LLC, read <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a>.</p>

<h2>What should a sole proprietor invoice include?</h2>
<table>
<thead><tr><th>Element</th><th>Example</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Your name or business name</td><td>Jordan Lee, or Jordan Lee DBA Northside Handyman</td><td>Use a DBA only if registered where required</td></tr>
<tr><td>Contact details</td><td>Address, email, phone, website</td><td>A business address or PO box keeps your home private</td></tr>
<tr><td>Client details</td><td>Client's legal or business name and billing address</td><td>Match their AP records</td></tr>
<tr><td>Invoice number</td><td>2026-014</td><td>Unique and sequential</td></tr>
<tr><td>Invoice date and due date</td><td>Oct 29, 2026; due Nov 13, 2026</td><td>Or state terms like Net 15</td></tr>
<tr><td>Description of work</td><td>Dates, tasks, hours or quantities</td><td>Specific enough to verify</td></tr>
<tr><td>Rates and amounts</td><td>Hourly, per item or flat fee</td><td>Line totals and subtotal</td></tr>
<tr><td>Sales tax (if applicable)</td><td>State and local rate on taxable items</td><td>Only if you are registered to collect</td></tr>
<tr><td>Total due</td><td>After deposits or credits</td><td>Make it the most visible number</td></tr>
<tr><td>Payment instructions</td><td>Bank transfer, check payee, card link</td><td>Name the payee exactly as the bank account is titled</td></tr>
<tr><td>Terms</td><td>Late fee policy, PO reference</td><td>Must match your agreement</td></tr>
</tbody>
</table>
<p>For a general walkthrough of each field, see <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>. Use the <a href="/tools/invoice-number-generator">invoice number generator</a> to set up a numbering format.</p>

<h2>EIN vs SSN: which should a sole proprietor use?</h2>
<p>A sole proprietor with no employees can use their Social Security number as their taxpayer identification number. But you may want a free Employer Identification Number (EIN) from the IRS anyway.</p>
<table>
<thead><tr><th></th><th>Using your SSN</th><th>Using an EIN</th></tr></thead>
<tbody>
<tr><td>Cost</td><td>None</td><td>Free from the IRS</td></tr>
<tr><td>Required?</td><td>Allowed if you have no employees and no excise or certain retirement plan filings</td><td>Required if you hire employees or meet other IRS triggers</td></tr>
<tr><td>Identity theft risk</td><td>Higher; you share it on every W-9</td><td>Lower; your SSN stays private</td></tr>
<tr><td>Bank accounts</td><td>Many banks accept SSN for sole props</td><td>Some banks prefer or require an EIN</td></tr>
<tr><td>Professional image</td><td>Neutral</td><td>Looks more established</td></tr>
</tbody>
</table>
<p>Neither number belongs on the invoice itself. Clients who need your TIN request it on <a href="https://www.irs.gov/forms-pubs/about-form-w-9" target="_blank" rel="noopener">Form W-9</a>. You can apply for an EIN online in minutes; see our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> and the full comparison of <a href="/blog/ein-vs-ssn">EIN vs SSN</a>.</p>

<h2>Using a DBA name on your invoices</h2>
<p>If you want to trade under a name other than your own (for example, "Northside Handyman" instead of "Jordan Lee"), most states require you to register a DBA, also called an assumed name, trade name or fictitious business name. Registration may be with the county clerk, the state or both, depending on the state.</p>
<p>On invoices, a clear format is: <strong>Jordan Lee DBA Northside Handyman</strong>. This tells the client who the legal party is and matches the name on your W-9 (your legal name on line 1, the DBA on line 2). If you want clients to write checks to the DBA, your bank will usually need your DBA registration to open an account in that name. Read more in <a href="/blog/what-is-a-dba">what is a DBA</a>.</p>

<h2>Sample sole proprietor invoice</h2>
<p>Here is how a handyman working as a sole proprietor with a registered DBA might invoice a property manager (illustrative figures; materials taxed at a 7 percent state rate in this example).</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td colspan="4"><strong>From:</strong> Jordan Lee DBA Northside Handyman, PO Box 412, Columbus, OH. <strong>To:</strong> Maple Court Properties LLC. <strong>Invoice:</strong> 2026-014, dated Oct 29, 2026, due Nov 13, 2026 (Net 15). <strong>PO:</strong> MC-3381</td></tr>
<tr><td>Labor: repair and paint drywall, Units 4B and 6A (Oct 22 to 24)</td><td>14 hr</td><td>$65.00</td><td>$910.00</td></tr>
<tr><td>Labor: replace two interior doors and hardware, Unit 6A</td><td>5 hr</td><td>$65.00</td><td>$325.00</td></tr>
<tr><td>Materials: drywall, compound, paint, primer</td><td>1</td><td>$186.40</td><td>$186.40</td></tr>
<tr><td>Materials: two prehung interior doors and hardware</td><td>1</td><td>$412.00</td><td>$412.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$1,833.40</td></tr>
<tr><td colspan="3">Sales tax on materials, 7% (illustrative)</td><td>$41.89</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$1,875.29</strong></td></tr>
<tr><td colspan="4">Pay by ACH to the business checking account titled "Jordan Lee DBA Northside Handyman" (details on request) or check payable to the same name. A 1.5% monthly late fee applies after the due date, per our service agreement.</td></tr>
</tbody>
</table>
<p>Sales tax rules for contractors and repair work differ widely by state, so check yours; our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> covers the basics. You can recreate this layout in the <a href="/invoice-generator">free invoice generator</a> in a few minutes.</p>

<h2>How to start invoicing as a sole proprietor: checklist</h2>
<ol>
<li><strong>Decide on your business name</strong> and register a DBA if it is not your legal name.</li>
<li><strong>Get any required business licenses</strong> from your city, county or state; see <a href="/blog/how-to-get-a-business-license">how to get a business license</a>.</li>
<li><strong>Get an EIN</strong> (optional for most, but recommended to protect your SSN).</li>
<li><strong>Open a separate business bank account</strong> to keep invoice income apart from personal spending.</li>
<li><strong>Register for sales tax</strong> if you sell taxable goods or services.</li>
<li><strong>Prepare a W-9</strong> so you can send it when clients ask.</li>
<li><strong>Set payment terms</strong> and put them in a contract or quote.</li>
<li><strong>Create an invoice template</strong> with your details, numbering and payment instructions.</li>
<li><strong>Track invoices and payments</strong> in a spreadsheet or accounting software.</li>
<li><strong>Set aside money for taxes</strong> and plan quarterly estimated payments.</li>
</ol>

<h2>Taxes on sole proprietor invoice income</h2>
<p>Clients do not withhold tax from what they pay you, so you are responsible for it. In general:</p>
<ul>
<li><strong>Income tax:</strong> net profit from Schedule C flows to your Form 1040. See <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a>.</li>
<li><strong>Self-employment tax:</strong> Social Security and Medicare on net earnings, calculated on Schedule SE. See our guide to <a href="/blog/self-employment-tax">self-employment tax</a>.</li>
<li><strong>Estimated payments:</strong> usually due quarterly if you expect to owe $1,000 or more for the year.</li>
<li><strong>Information returns:</strong> business clients generally file Form 1099-NEC when they pay you $2,000 or more for services in a year, the threshold for payments made after December 31, 2025 (it was $600 before). Card and payment app payments are usually reported on Form 1099-K by the processor instead.</li>
</ul>
<p>Report all income whether or not you get a 1099. This section is general information, not tax advice; consult a tax professional for your situation.</p>

<h2>Sole proprietor vs LLC invoices: what changes?</h2>
<table>
<thead><tr><th></th><th>Sole proprietor</th><th>Single-member LLC</th></tr></thead>
<tbody>
<tr><td>Seller name on invoice</td><td>Your legal name, or name DBA trade name</td><td>The LLC's registered name, including "LLC"</td></tr>
<tr><td>Who the client contracts with</td><td>You personally</td><td>The LLC</td></tr>
<tr><td>Tax ID on W-9</td><td>SSN or EIN</td><td>Usually the owner's SSN or the LLC's EIN, depending on tax classification and setup</td></tr>
<tr><td>Bank account</td><td>Personal or business account (business recommended)</td><td>Business account in the LLC's name</td></tr>
<tr><td>Default federal tax treatment</td><td>Schedule C</td><td>Schedule C (disregarded entity) unless it elects otherwise</td></tr>
</tbody>
</table>
<p>The invoice layout is almost identical; what changes is the legal name and the account the money goes into.</p>

<h2>How should sole proprietors accept payment?</h2>
<ul>
<li><strong>Bank transfer (ACH):</strong> low cost and common for business clients; see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>.</li>
<li><strong>Checks:</strong> make sure the payee name on the invoice matches your bank account title.</li>
<li><strong>Cards and payment apps:</strong> convenient for consumers, but fees apply and payments may be reported on Form 1099-K.</li>
</ul>
<p>Whatever you accept, route it into one dedicated account. Our guide to choosing a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> compares the options.</p>

<h2>Common sole proprietor invoicing mistakes</h2>
<ul>
<li><strong>Printing your SSN</strong> on invoices.</li>
<li><strong>Using an unregistered trade name</strong>, which can cause problems with banks, contracts and collections.</li>
<li><strong>Calling yourself an LLC or Inc.</strong> when you have not formed one; that misrepresents your business.</li>
<li><strong>Mixing personal and business payments</strong> in one account.</li>
<li><strong>Vague descriptions</strong> that make clients delay approval.</li>
<li><strong>No due date or payment terms</strong>, which invites late payment.</li>
<li><strong>Charging sales tax without being registered</strong> to collect it.</li>
</ul>

<p>A sole proprietor invoice needs no special legal format: your legal or registered name, clear work details, a unique number, the total and payment instructions are the core. Keep your SSN off the page, use a DBA properly if you trade under another name, and keep business money in a business account. When you are ready to bill, the <a href="/invoice-generator">free invoice generator</a> lets you create a professional sole proprietor invoice with no sign-up and download it as a PDF built in your browser.</p>
`,
  },
];
