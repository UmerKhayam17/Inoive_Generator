import type { PostDraft } from "../blog";

export const FREELANCE_TEMPLATES_2026_C_POSTS: PostDraft[] = [
  {
    slug: "notion-invoice-template",
    title: "Notion Invoice Template: How to Build One (and Its Limits)",
    description:
      "Build a Notion invoice template step by step: a client database, line items, formulas and auto-numbering, plus the PDF and layout limits you should know first.",
    category: "design-templates",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "google-sheets-invoice-template",
      "canva-invoice-template",
      "how-to-make-an-invoice-in-excel",
    ],
    faqs: [
      {
        q: "Does Notion have a built-in invoice template?",
        a: "Notion offers a template gallery where people and Notion itself publish invoice and client-billing templates, some free and some paid. There is no dedicated invoicing feature, though. Any invoice template in Notion is a page or database built from ordinary blocks and properties. That means you can customise it fully, but it also means you inherit the same limits: manual layout, basic PDF export and no payment tracking beyond what you build yourself.",
      },
      {
        q: "How do I make an invoice in Notion?",
        a: "Create an Invoices database with properties for client, issue date, due date, status and amount. Add a Unique ID property with a prefix such as INV for numbering. Inside each invoice page, add your business details, the client's details and a simple table or linked Line Items database for the work. Add a formula for each line total and a rollup for the subtotal. Then export the page as a PDF and check the layout before sending.",
      },
      {
        q: "Can Notion automatically number invoices?",
        a: "Yes, in a database. The Unique ID property gives each new entry an automatically increasing number, and you can add a prefix such as INV so entries show as INV-1, INV-2 and so on. You cannot easily control padding, restart it each year or reuse a deleted number, so check the format works for your records. If you need a specific pattern like 2026-0042, type it into a text property instead.",
      },
      {
        q: "Can I export a Notion invoice as a PDF?",
        a: "Yes. Open the invoice page, use the three-dot menu, choose Export and select PDF. Single-page PDF export works on the free plan at the time of writing, while options such as including subpages or exporting a whole workspace as PDF are tied to higher plans, so check Notion's help centre for the current rules. Always open the exported file, because databases, toggles and wide tables can split or shrink awkwardly.",
      },
      {
        q: "Is a Notion invoice legally valid?",
        a: "The software does not decide validity; the content does. A valid invoice usually needs your name and address, the client's details, a unique invoice number, the issue date, a description of the work, amounts and, where you are registered, tax details such as a VAT or GST number. A Notion page exported as a PDF that includes everything your country requires is as valid as one from any other tool.",
      },
      {
        q: "Can Notion calculate tax and totals on an invoice?",
        a: "Yes, with formulas. A line total formula multiplies quantity by rate, a rollup sums the line totals into a subtotal, and further formulas can apply a discount and a tax rate. Rounding needs care: use the round function so tax is shown to two decimals. The calculations only work inside database properties, not inside plain text blocks, so design the template around databases from the start.",
      },
      {
        q: "Can Notion send invoices or take payments?",
        a: "No. Notion is a workspace for notes and databases. It does not email invoices from a billing address, collect card payments or send automatic payment reminders. You export the PDF and send it from your own email, then update the status property yourself when the money arrives. Some people connect Notion to automation tools, but that adds cost and complexity for a task an invoicing tool handles directly.",
      },
      {
        q: "Is it better to use Notion or a spreadsheet for invoices?",
        a: "It depends on where you already work. Notion is better if your clients, projects and notes already live there, because the invoice can link to them. A spreadsheet is better for maths-heavy invoices and gives a cleaner printed layout with less effort. If you only need a professional PDF with correct totals, a free invoice generator is faster than either and needs no setup at all.",
      },
      {
        q: "How do I track paid and unpaid invoices in Notion?",
        a: "Add a Status property with options such as Draft, Sent, Paid and Overdue, plus a Paid Date property. Create a filtered view that shows only Sent and Overdue invoices, sorted by due date, and a formula that flags any invoice past its due date. Check the view weekly. This works well for a small number of clients, but remember Notion will not notice a payment arriving; you update it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Notion invoice template is a database page that holds your business details, client details, line items and formula-driven totals, which you export as a PDF to send. It works well if your clients and projects already live in Notion. The trade-offs are manual layout, basic PDF export and no built-in sending or payment tracking.</p>

<p>Notion is popular with freelancers because it can hold everything in one place: proposals, project notes, client contacts and task lists. It is natural to want invoices there too. This guide shows you how to build a practical Notion invoice template from scratch, explains how to make an invoice in Notion each month, and is honest about where Notion falls short so you can decide when a dedicated tool is the better choice.</p>

<h2>What a Notion invoice template can and cannot do</h2>
<p>Notion is a flexible workspace, not accounting software. A Notion invoice template is built from normal pages, tables and database properties. That gives you a lot of freedom and a few hard limits.</p>
<table>
<thead><tr><th>Task</th><th>Notion</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Store client and project details</td><td>Yes</td><td>Relations link invoices to clients and projects</td></tr>
<tr><td>Calculate line totals, tax and discounts</td><td>Yes, with formulas</td><td>Only inside database properties</td></tr>
<tr><td>Automatic invoice numbers</td><td>Partly</td><td>Unique ID property with a prefix, limited format control</td></tr>
<tr><td>Export a PDF</td><td>Yes</td><td>Layout control is basic; check every export</td></tr>
<tr><td>Email the invoice from the app</td><td>No</td><td>Download the PDF and send it yourself</td></tr>
<tr><td>Take payments or send reminders</td><td>No</td><td>Track status manually</td></tr>
</tbody>
</table>
<p>If you have used a <a href="/blog/canva-invoice-template">Canva invoice template</a>, the trade-off is the reverse: Canva gives you design control but no calculations, while Notion gives you a database but limited design.</p>

<h2>Step 1: Build your Notion invoice database</h2>
<p>The core of a good Notion invoice database is one table where every row is an invoice. Create a new page, add a full-page database and name it Invoices. Then add these properties:</p>
<ul>
<li><strong>Invoice No.</strong> A Unique ID property with the prefix INV. Notion fills this in automatically for each new row.</li>
<li><strong>Client</strong> A Relation to a separate Clients database, so you only type each client's address once.</li>
<li><strong>Issue Date</strong> and <strong>Due Date</strong> Two Date properties.</li>
<li><strong>Status</strong> A Status or Select property with Draft, Sent, Paid and Overdue.</li>
<li><strong>Subtotal</strong>, <strong>Tax</strong> and <strong>Total</strong> Rollup and formula properties, which you will set up in Step 3.</li>
<li><strong>Paid Date</strong> A Date property you fill in when the money arrives.</li>
</ul>
<p>Next, create the Clients database with properties for legal name, contact name, billing address, email and tax ID if the client has one. Linking the two databases means a client's details appear on every invoice without retyping, which removes a common source of mistakes.</p>

<h2>Step 2: Add line items</h2>
<p>You have two options for the work you are billing.</p>
<h3>Option A: A simple table inside each invoice</h3>
<p>Open an invoice row as a page and insert a simple table with columns for Description, Quantity, Rate and Amount. This looks clean when exported, but simple tables do not calculate. You would have to work out each amount yourself, which defeats much of the point.</p>
<h3>Option B: A linked Line Items database (recommended)</h3>
<p>Create a third database called Line Items with properties for Description (title), Quantity (number), Rate (number), Invoice (a relation back to Invoices) and Amount (formula). Inside each invoice page, add a linked view of Line Items filtered to show only items related to that invoice. Now every line calculates, and the invoice can total them.</p>

<h2>Step 3: Formulas for totals, discount and tax</h2>
<p>Notion formulas reference other properties with the prop function. Here are the ones you need, written for a 10% tax rate:</p>
<ol>
<li><strong>Amount</strong> (in Line Items): prop("Quantity") * prop("Rate")</li>
<li><strong>Subtotal</strong> (in Invoices): a Rollup on the Line Items relation, calculating Sum of Amount.</li>
<li><strong>Discount</strong> (in Invoices): a Number property you enter, such as 50.</li>
<li><strong>Tax</strong> (in Invoices): round((prop("Subtotal") - prop("Discount")) * 0.10 * 100) / 100</li>
<li><strong>Total</strong> (in Invoices): prop("Subtotal") - prop("Discount") + prop("Tax")</li>
</ol>
<p>The rounding trick in the tax formula keeps the result to two decimal places. Without it, a tax of 10% on 333.33 would show as 33.333, which looks careless on an invoice.</p>
<h3>Worked example</h3>
<p>Say you bill a client for design work:</p>
<table>
<thead><tr><th>Description</th><th>Quantity</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Logo design</td><td>1</td><td>600.00</td><td>600.00</td></tr>
<tr><td>Brand guide pages</td><td>4</td><td>85.00</td><td>340.00</td></tr>
<tr><td>Revision hours</td><td>2.5</td><td>60.00</td><td>150.00</td></tr>
</tbody>
</table>
<p>The rollup gives a subtotal of 1,090.00. With a 50.00 discount, the taxable amount is 1,040.00, the 10% tax is 104.00 and the total due is 1,144.00. If those numbers match what you calculate by hand, your formulas are set up correctly.</p>

<h2>Step 4: Lay out the invoice page</h2>
<p>When you export, Notion prints the page as it appears, so the layout of each invoice page matters. A clean structure looks like this:</p>
<ol>
<li>Your business name, address, email and tax number at the top, using a heading block. Add your logo as an image block if you want one.</li>
<li>A two-column block: your details on the left, the client's billing details on the right.</li>
<li>The invoice number, issue date and due date. Database properties appear at the top of the page by default; you can show or hide them in the page settings.</li>
<li>The linked Line Items view, set to table layout with only Description, Quantity, Rate and Amount visible.</li>
<li>Subtotal, discount, tax and total. Since properties sit at the top, many people repeat the key figures in a callout block near the bottom so the total is easy to find.</li>
<li>Payment instructions: bank details or a payment link, plus your payment terms.</li>
</ol>
<p>Save one finished invoice as a database template (the small arrow next to the New button lets you create templates). Every new invoice then starts with the same layout, and you only fill in the client and line items.</p>
<h3>How to make an invoice in Notion each month</h3>
<p>Once the template exists, the monthly routine takes a few minutes:</p>
<ol>
<li>Click the arrow next to New in the Invoices database and pick your invoice template.</li>
<li>Choose the client in the relation property; their address appears automatically.</li>
<li>Set the issue date and due date, for example 14 or 30 days later, matching your agreed terms.</li>
<li>Add line items in the linked view, then check the subtotal, tax and total against a quick manual calculation.</li>
<li>Export the PDF, open it, and confirm the number, dates and total are correct before sending.</li>
<li>Change the status to Sent, and to Paid with a paid date once the money arrives.</li>
</ol>

<h2>Numbering invoices in Notion</h2>
<p>Every invoice needs a unique number, and many tax authorities expect a clear sequence. Notion's Unique ID property handles the basic job: each new row gets the next number with your prefix, such as INV-14. It is a good start, but know its limits:</p>
<ul>
<li>You cannot easily add zero padding (INV-0014) or a year (2026-014).</li>
<li>The counter does not reset each year.</li>
<li>Deleted rows leave gaps, which can raise questions in an audit. Mark cancelled invoices as Void instead of deleting them.</li>
<li>If you duplicate the database, numbering in the copy may not match your history.</li>
</ul>
<p>If you need a specific format, use a text property and type the number yourself, keeping a strict sequence. Our guide to <a href="/blog/invoice-numbering-system">setting up an invoice numbering system</a> covers the common formats, and the free <a href="/tools/invoice-number-generator">invoice number generator</a> can create a consistent sequence for you.</p>

<h2>Exporting your Notion invoice as a PDF</h2>
<p>To send the invoice, open the page, click the three-dot menu in the top right, choose Export and select PDF. You can pick a page size and scale. At the time of writing, single-page PDF export is available on the free plan, while bulk options such as including subpages or exporting a whole workspace as PDF are tied to higher paid plans. Plans change, so check Notion's help centre before you rely on a specific option.</p>
<p>Check every PDF before it goes out. The most common problems are:</p>
<ul>
<li>Wide tables shrinking to tiny text or cutting off the Amount column.</li>
<li>Linked database views exporting with extra columns or a heading you did not expect.</li>
<li>Page breaks splitting the line items from the totals.</li>
<li>Dark mode or coloured backgrounds printing poorly.</li>
</ul>
<p>Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF checklist</a> lists what to look at before you hit send.</p>

<h2>The real limits of Notion for invoicing</h2>
<p>A Notion invoice template is fine for a handful of invoices a month, especially if the client data already lives in Notion. As your billing grows, the gaps become more noticeable:</p>
<ul>
<li><strong>Layout control is limited.</strong> You cannot position elements precisely, set exact fonts for print, or guarantee the totals block lands at the bottom of the page.</li>
<li><strong>Formulas live in properties, not on the page.</strong> The figures your client sees depend on how Notion displays properties in the export, which is not always tidy.</li>
<li><strong>No sending, reminders or payments.</strong> You download, email and chase manually.</li>
<li><strong>Multiple tax rates and currencies take extra work.</strong> Each needs more properties and formulas, and every extra formula is something that can break.</li>
<li><strong>Access risk.</strong> Your invoice history sits inside a workspace. If you change plans or lose access, export your records regularly.</li>
</ul>
<p>Spreadsheets solve some of these problems. If you are comparing options, see our guides to the <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a>, <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a> and, for Mac users, the <a href="/blog/numbers-invoice-template">Apple Numbers invoice template</a>.</p>

<h2>When to use an invoice generator instead</h2>
<p>A good rule of thumb: keep Notion for tracking and use a purpose-built tool for the invoice document itself. That split plays to each tool's strengths. Notion tracks which client owes what and links invoices to projects. An invoice generator produces a clean, consistently formatted PDF with correct totals every time.</p>
<p>The free <a href="/invoice-generator">invoice generator</a> on this site builds the PDF in your browser. You fill in your details and the client's, add line items, and it calculates the subtotal, one tax rate, a discount (percentage or fixed, applied before tax), a shipping or extra charge, amount paid and balance due. You can add a logo, signature and PO number, choose a currency and pick a layout from the <a href="/invoice-templates">invoice templates</a> gallery. Drafts are kept in your browser, not on a server. It does not email invoices or track payments, so pair it with your Notion database or a simple <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a>.</p>
<table>
<thead><tr><th>Situation</th><th>Best fit</th></tr></thead>
<tbody>
<tr><td>Clients, projects and notes already in Notion, few invoices a month</td><td>Notion invoice template</td></tr>
<tr><td>You want a polished PDF quickly with correct totals</td><td>Invoice generator</td></tr>
<tr><td>Lots of line items or complex calculations</td><td>Spreadsheet or invoice generator</td></tr>
<tr><td>You need automatic reminders and online payments</td><td>Invoicing or accounting software</td></tr>
</tbody>
</table>

<h2>Conclusion</h2>
<p>A Notion invoice template is worth building if Notion is already your home base. Use a database for invoices, a relation for clients, a linked Line Items database with formulas for totals, and the Unique ID property for numbering. Test the PDF export carefully. When you want a reliable, well-designed PDF without the setup, create it in the free <a href="/invoice-generator">invoice generator</a> and log it in Notion. For more layout ideas, browse the <a href="/blog/category/design-templates">design and templates articles</a>.</p>
`,
  },
  {
    slug: "numbers-invoice-template",
    title: "Apple Numbers Invoice Template: Build One on Your Mac",
    description:
      "How to use or build an Apple Numbers invoice template on a Mac: built-in templates, the formulas for totals and tax, numbering, and exporting a clean PDF.",
    category: "design-templates",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-make-an-invoice-in-excel",
      "google-sheets-invoice-template",
      "notion-invoice-template",
    ],
    faqs: [
      {
        q: "Does Apple Numbers have an invoice template?",
        a: "Yes. When you create a new spreadsheet in Numbers, the template chooser includes invoice designs in its business section. They come with sample line items and formulas for the totals already in place. Template names and designs change between versions of Numbers, so look through the chooser on your own Mac. You can also save any invoice you build yourself as a custom template and reuse it from the same chooser.",
      },
      {
        q: "How do I make an invoice on a Mac for free?",
        a: "Numbers, Pages and TextEdit come free with a Mac, and Numbers is the best of the three for invoices because it calculates totals. Open Numbers, choose an invoice template or a blank sheet, enter your details and the client's, add line items with quantity and rate, and let formulas calculate the totals. Then export it as a PDF. A free browser-based invoice generator is another no-cost option.",
      },
      {
        q: "How do I export a Numbers invoice as a PDF?",
        a: "Choose File, then Export To, then PDF. Pick the image quality, click Next, name the file with the invoice number and client, and save. Before exporting, check the page layout using Print Setup in the sidebar so the invoice fits on one page. Open the finished PDF to confirm nothing is cut off, then attach it to an email. Avoid sending the editable .numbers file to clients.",
      },
      {
        q: "What formula do I use for invoice totals in Numbers?",
        a: "Use a multiplication for each line, such as =B5*C5 for quantity times rate, and SUM for the subtotal, such as =SUM(D5:D14). Calculate tax by multiplying the taxable amount by the rate and wrapping it in ROUND to keep two decimals, for example =ROUND(D16*0.2,2). The total is subtotal minus discount plus tax. Numbers formulas work the same way as Excel and Google Sheets for these basics.",
      },
      {
        q: "Can I open a Numbers invoice on Windows?",
        a: "Not in the Numbers app, which only runs on Apple devices. Windows users can open Numbers files through iCloud.com in a web browser with an Apple Account, or you can export the invoice to Excel format from Numbers using File, Export To, Excel. For clients, always send a PDF rather than the spreadsheet, so it opens on any device and cannot be accidentally edited.",
      },
      {
        q: "Can I use Numbers on iPhone or iPad for invoices?",
        a: "Yes. Numbers is available on iPhone and iPad, and files sync through iCloud Drive, so you can build the template on your Mac and fill in an invoice on the go. Editing tables on a phone is fiddly, so keep the template simple with clearly labelled input cells. Export to PDF from the share or export menu and check the result before sending, as small screens make mistakes easy to miss.",
      },
      {
        q: "How do I number invoices in Numbers?",
        a: "Numbers will not number invoices for you across separate files. Keep a simple log sheet, either in a separate tab of your template file or in its own spreadsheet, and take the next number from it each time. Use a consistent format such as INV-2026-001. Never reuse or skip numbers, and keep cancelled invoices marked as void. Saving each invoice with its number in the file name also helps.",
      },
      {
        q: "Is Numbers or Excel better for invoices?",
        a: "For a typical freelancer or small business, both are perfectly capable. Numbers is free on Apple devices and has attractive templates with a freeform canvas that makes layout easy. Excel has more advanced features and is more common in accounting teams, which matters if you share files. If your clients only ever receive a PDF, choose whichever you already know best.",
      },
      {
        q: "Should I send the Numbers file or a PDF to clients?",
        a: "Send a PDF. A PDF looks the same on every device, opens without special software, and cannot be changed by mistake. A Numbers file only opens properly on Apple devices or through iCloud, exposes your formulas and can be edited. Keep the .numbers file as your working copy, export a PDF for each invoice, and store both with the invoice number in the file name.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An Apple Numbers invoice template is a Numbers spreadsheet set up with your business details, a line items table and formulas that calculate the subtotal, tax and total. Numbers is free on every Mac, includes ready-made invoice templates, and exports to PDF in a few clicks. It suits freelancers who want a calculating invoice without paying for software.</p>

<p>If you work on a Mac, you already own a capable invoicing tool. Numbers comes free with macOS, iPadOS and iOS, and it handles the maths that a word processor cannot. This guide covers how to make an invoice on a Mac with Numbers: using the built-in template, building your own from scratch with the right formulas, numbering, exporting a PDF, and knowing when a different tool would save you time.</p>

<h2>Why use an Apple Numbers invoice template?</h2>
<p>Numbers sits between a design tool and a heavy spreadsheet. Unlike Excel, each sheet is a freeform canvas: tables, text boxes and images can sit anywhere, which makes an invoice layout easier to arrange. Unlike a Pages or Word document, the line items table calculates.</p>
<table>
<thead><tr><th>Feature</th><th>Numbers</th><th>Excel</th><th>Google Sheets</th></tr></thead>
<tbody>
<tr><td>Cost</td><td>Free on Apple devices</td><td>Paid (Microsoft 365) or limited web version</td><td>Free with a Google account</td></tr>
<tr><td>Built-in invoice templates</td><td>Yes</td><td>Yes</td><td>Yes, in the template gallery</td></tr>
<tr><td>Layout flexibility</td><td>High: freeform canvas</td><td>Grid based</td><td>Grid based</td></tr>
<tr><td>Works on Windows</td><td>Only via iCloud.com in a browser</td><td>Yes</td><td>Yes, in a browser</td></tr>
<tr><td>PDF export</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
</tbody>
</table>
<p>If you also use other platforms, compare this with our guides on <a href="/blog/how-to-make-an-invoice-in-excel">how to make an invoice in Excel</a> and the <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a>. The formulas are almost identical across all three.</p>

<h2>Option 1: Use the built-in invoice template</h2>
<p>The quickest route is the template that ships with Numbers.</p>
<ol>
<li>Open Numbers and choose File, then New. The template chooser opens.</li>
<li>Scroll to the business templates and select an invoice design. The exact names and styles vary by version, so pick the one that looks closest to what you need.</li>
<li>Replace the placeholder company name, address and logo with your own. To swap the logo, drag your image file onto the placeholder image.</li>
<li>Delete the sample line items and type your own. The totals update automatically.</li>
<li>Check the tax cell. Many templates include a sample tax rate that will not match your rate, or you may not need tax at all.</li>
<li>Save it as your own template: File, then Save as Template. It will appear in the chooser under My Templates.</li>
</ol>
<p>The built-in template is a good starting point, but read every formula before trusting it. Templates are designed to look good in a demo, not to match your country's tax rules.</p>

<h2>Option 2: Build your own Apple Numbers invoice template</h2>
<p>Building your own takes about 20 minutes and gives you a layout you fully understand. Start with a blank sheet and delete the default table.</p>
<h3>The header</h3>
<p>Add a text box at the top left with your business name, address, email, phone and any tax registration number. Put your logo at the top right. Below it, add the word Invoice in a large font, followed by small text boxes or a two-column table for the invoice number, issue date, due date and, if the client uses one, their PO number.</p>
<h3>The client block</h3>
<p>Add a text box titled Bill To for the client's legal name, contact name and billing address. If the client is VAT or GST registered and your rules require it, add their tax number here too.</p>
<h3>The line items table</h3>
<p>Insert a table with four columns: Description, Qty, Rate and Amount. Make the first row a header row. Ten body rows are enough for most invoices; you can add more when needed. Set the Qty column to number format and the Rate and Amount columns to currency format using the Format sidebar.</p>
<h3>The totals table</h3>
<p>Add a small two-column table below and to the right of the line items with rows for Subtotal, Discount, Tax and Total Due. Keeping totals in their own table makes the layout cleaner and stops them moving when you add line items.</p>
<h3>Payment details and terms</h3>
<p>Below the totals, add a text box with how to pay: bank name, account name, account number or IBAN, sort code or routing number where relevant, and any payment link you use. State your terms in plain words, such as Payment due within 14 days, and mention any late fee only if your contract allows it. A short thank-you line and a reference instruction (Please quote the invoice number with your payment) make reconciliation easier for both sides.</p>
<h3>Make the template easy to reuse</h3>
<p>Shade the cells you change each time, such as client, dates and line items, in a light colour, and leave formula cells unshaded. When you or anyone else opens the Apple Numbers invoice template later, it is obvious what to fill in and what to leave alone. Remove the shading before export, or choose a colour subtle enough that it prints cleanly. Keep fonts to one or two families and use the same accent colour as your logo for headings.</p>

<h2>The formulas you need</h2>
<p>To enter a formula in Numbers, click a cell and type the equals sign. Numbers lets you click cells to insert references, and it shows references across tables by table name. The examples below assume the line items table is called Items with data in rows 2 to 11, and the totals table is called Totals.</p>
<table>
<thead><tr><th>Cell</th><th>Formula</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Amount (row 2)</td><td>=B2*C2</td><td>Quantity times rate; fill down to row 11</td></tr>
<tr><td>Subtotal</td><td>=SUM(Items::D2:D11)</td><td>Adds every line amount</td></tr>
<tr><td>Discount</td><td>Typed value, for example 100</td><td>A fixed reduction before tax</td></tr>
<tr><td>Tax</td><td>=ROUND((B1-B2)*0.2,2)</td><td>20% tax on the discounted subtotal, rounded</td></tr>
<tr><td>Total Due</td><td>=B1-B2+B3</td><td>Subtotal minus discount plus tax</td></tr>
</tbody>
</table>
<p>In the Totals table, B1 is the subtotal, B2 the discount and B3 the tax. Replace 0.2 with your own rate, or put the rate in its own cell and reference it so you can change it in one place. For the due date, add a duration to the issue date, for example =C2+DURATION(0,30) if your issue date sits in cell C2 of the header table, then format the result as a date. DURATION takes weeks first and days second, so (0,30) means 30 days.</p>
<p>To stop empty rows showing 0.00 in the Amount column, use =IF(B2="","",B2*C2). The line stays blank until you enter a quantity.</p>
<h3>Worked example</h3>
<p>A photographer invoices a client for a half-day shoot:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Half-day shoot</td><td>1</td><td>450.00</td><td>450.00</td></tr>
<tr><td>Edited images</td><td>25</td><td>12.00</td><td>300.00</td></tr>
<tr><td>Travel</td><td>1</td><td>40.00</td><td>40.00</td></tr>
</tbody>
</table>
<p>The subtotal is 790.00. After a 40.00 loyalty discount, the taxable amount is 750.00. At 20%, the tax is 150.00 and the total due is 900.00. Before you rely on the template, test it with figures you have worked out by hand like this. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> is a quick way to double-check tax amounts.</p>

<h2>Numbering and record keeping</h2>
<p>Each Numbers invoice is usually its own file, so nothing links them together. That means numbering is your job. A simple system works:</p>
<ul>
<li>Add a second sheet called Log to your template file, or keep a separate log spreadsheet, with columns for invoice number, client, date, total, due date and paid date.</li>
<li>Before creating an invoice, take the next number from the log and record the new entry straight away.</li>
<li>Use a clear format such as INV-2026-001. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a consistent pattern.</li>
<li>Name each file with the number and client, for example INV-2026-014 Acme.numbers, and the PDF the same way.</li>
<li>Never delete an issued invoice. If it is wrong, cancel it and issue a corrected one following your local rules.</li>
</ul>
<p>Duplicating last month's file is the fastest way to start a new invoice, and also the fastest way to send a client someone else's line items. Always start from your saved template instead.</p>

<h2>Exporting a clean PDF</h2>
<p>Clients should always get a PDF, not the .numbers file. Before exporting, open the Document sidebar and turn on page view (Print Setup in some versions) so you can see where the page edges fall. Drag the content to fit inside one page, and use the scale slider if needed.</p>
<ol>
<li>Choose File, then Export To, then PDF.</li>
<li>Choose Best image quality if you have a logo.</li>
<li>Click Next, name the file with the invoice number, and save.</li>
<li>Open the PDF in Preview and check the totals, dates and client name.</li>
</ol>
<p>Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF and print checklist</a> walks through the final checks. If you prefer documents to spreadsheets, the steps for <a href="/blog/how-to-make-an-invoice-in-word">making an invoice in Word</a> translate closely to Pages, but you will have to calculate totals yourself.</p>

<h2>Using Numbers on iPhone and iPad</h2>
<p>Because Numbers syncs through iCloud Drive, you can build the template on your Mac and complete invoices from an iPhone or iPad. Keep input cells clearly labelled and lock or avoid editing the formula cells. Small screens make it easy to overtype a formula, so check totals on the exported PDF every time. For more ideas, see our guide to <a href="/blog/how-to-make-an-invoice-on-your-phone">making an invoice on your phone</a>.</p>

<h2>Limits of a Numbers invoice</h2>
<p>An Apple Numbers invoice template is a solid choice for a freelancer sending a few invoices a month. Its limits show up as you grow:</p>
<ul>
<li>Every file is separate, so reporting on unpaid invoices means maintaining a log by hand.</li>
<li>There is no sending, reminders or payment tracking.</li>
<li>Formulas can be broken by an accidental keystroke, and you may not notice.</li>
<li>Sharing editable files with Windows users is awkward.</li>
<li>Layout must be checked on every export, especially when line items grow.</li>
</ul>
<p>If you like the look of other approaches, compare it with a <a href="/blog/notion-invoice-template">Notion invoice template</a>, which links invoices to clients and projects but has weaker layout control.</p>

<h2>A faster alternative for Mac users</h2>
<p>If you mainly want a professional PDF with correct totals, the free <a href="/invoice-generator">invoice generator</a> runs in Safari or any browser on your Mac. You enter your details and line items; it calculates the subtotal, one tax rate, a percentage or fixed discount applied before tax, a shipping or extra charge, amount paid and balance due. You can add a logo and signature, choose a currency and pick a design such as the <a href="/invoice-templates/minimal">minimal invoice template</a>. Drafts stay in your browser, and the PDF is generated on your device. It does not send emails or track payments, so keep your log sheet in Numbers for that.</p>

<h2>Conclusion</h2>
<p>An Apple Numbers invoice template gives Mac users a free invoice that calculates its own totals. Start from the built-in template or build your own with a line items table, SUM for the subtotal and ROUND for tax, then save it as a custom template. Keep a log for numbering, export a PDF for every invoice, and check it before sending. When you want a polished PDF without maintaining formulas, use the free <a href="/invoice-generator">invoice generator</a> instead.</p>
`,
  },
  {
    slug: "digital-nomad-tax",
    title: "Digital Nomad Tax 2026: Residency, 183 Days and the FEIE",
    description:
      "Digital nomad tax explained: how tax residency works, what the 183-day rule really means, nomad visa taxes, and the 2026 FEIE amount for US citizens abroad.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "uae-freelance-permit",
      "invoice-international-clients",
      "self-employment-tax",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "Do digital nomads have to pay taxes?",
        a: "Yes, almost always somewhere. Travelling does not make income tax-free. Most countries tax people who are resident there, and your home country may still treat you as resident if you keep a home, family or business ties there. US citizens are taxed on worldwide income wherever they live. The goal is not to avoid tax but to know which country has the right to tax you and to file correctly there.",
      },
      {
        q: "What is the 183-day rule for tax residency?",
        a: "Many countries treat you as tax resident if you spend 183 days or more there in a tax year or a 12-month period. It is a common threshold, not a universal law. Some countries count days differently, some use lower thresholds, and many also look at where your home, family and economic interests are. You can be resident somewhere with far fewer than 183 days, so check each country's own test.",
      },
      {
        q: "Can I avoid tax by never staying 183 days in one country?",
        a: "Usually not. Staying under 183 days everywhere does not make you resident nowhere. Your home country often keeps taxing you until you clearly break residency there, and some countries apply tests based on ties rather than days. US citizens remain taxable regardless. Being resident nowhere is hard to prove and can leave you unable to use tax treaties or open bank accounts. Get advice before relying on this approach.",
      },
      {
        q: "What is the foreign earned income exclusion for 2026?",
        a: "For the 2026 tax year, the maximum foreign earned income exclusion is $132,900 per qualifying person, up from $130,000 for 2025, according to the IRS inflation adjustments. You claim it on Form 2555 with your 2026 return, filed in 2027. To qualify, your tax home must be in a foreign country and you must pass either the bona fide residence test or the physical presence test.",
      },
      {
        q: "Does the FEIE remove self-employment tax?",
        a: "No. The foreign earned income exclusion reduces income tax only. US self-employed people abroad still generally owe self-employment tax on net earnings, which is 15.3% on most freelancers' profits. The exception is where a totalization agreement between the US and the country you live in assigns your social security coverage to that country. In that case you need a certificate of coverage to show the IRS.",
      },
      {
        q: "Do digital nomad visas make you tax-free?",
        a: "Not automatically. A digital nomad visa gives you the right to stay and work remotely; it does not by itself decide your tax position. Some countries state that visa holders are not taxed on foreign income for a period, others treat you as a local tax resident once you pass their day count or residency test. Read the official visa and tax guidance for the specific country before you apply.",
      },
      {
        q: "What is the physical presence test?",
        a: "The physical presence test is one of two ways US citizens qualify for the foreign earned income exclusion. You must be physically present in a foreign country or countries for at least 330 full days during any period of 12 consecutive months. Days in the US, and often days in transit over international waters, do not count. Track your travel dates carefully, as missing by a day can cost you the exclusion.",
      },
      {
        q: "Do I still need to file a US tax return if I live abroad?",
        a: "Yes, if your income is above the normal filing threshold, and self-employed people must generally file if net self-employment earnings are $400 or more. Living abroad gives you an automatic two-month extension to file, to June 15, but interest still runs on unpaid tax from April 15. You may also need to file an FBAR if your foreign accounts together exceed $10,000 at any time in the year.",
      },
      {
        q: "Which address should a digital nomad put on invoices?",
        a: "Use the address of the business you invoice from, which is normally your registered or tax address in the country where you are resident or registered. Do not switch your invoice address every time you move. If you are registered for VAT, GST or sales tax somewhere, show that registration number. Consistency matters, because your invoices are evidence of where your business is based if a tax authority asks.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Digital nomad tax depends on where you are tax resident, not where you happen to be working. Most countries tax residents on their worldwide income, often using a 183-day threshold plus tests based on your home and ties. US citizens are taxed wherever they live but can exclude up to $132,900 of foreign earned income in 2026.</p>

<p>Working from a laptop in a different country every few months is easier than ever. Tax rules have not kept up with that lifestyle, and the gap creates risk: freelancers who assume they owe nothing anywhere, or who end up taxed twice. This guide explains how digital nomad tax works in plain terms, covers digital nomad visa taxes, the 183-day rule, and the special position of US citizens abroad, with worked examples. Country rules vary widely and change often, so treat this as a map, not a final answer, and check with a qualified adviser before you make decisions.</p>

<h2>The core idea: residency decides who taxes you</h2>
<p>Most countries tax people based on residency. If you are tax resident in a country, it usually taxes your worldwide income. If you are not resident, it usually taxes only income that comes from sources in that country. For a remote freelancer whose clients are abroad, the key question becomes: where am I resident?</p>
<p>Residency is not the same as citizenship or immigration status. You can be a citizen of one country, hold a visa for another, and be tax resident in a third. The main exception is the United States, which taxes its citizens and green card holders on worldwide income regardless of where they live. Eritrea is the other country commonly cited as using citizenship-based taxation.</p>

<h2>The 183-day rule and other residency tests</h2>
<p>The tax residency 183-day rule is the best-known test: spend 183 days or more in a country in a tax year (or in some countries, a rolling 12-month period) and you are likely to be resident there. But it is only one test, and many countries use several.</p>
<table>
<thead><tr><th>Test type</th><th>How it works</th><th>Why it matters for nomads</th></tr></thead>
<tbody>
<tr><td>Day count</td><td>Resident if present for a set number of days, often 183</td><td>Easy to trigger in a country you stay in for six months or more</td></tr>
<tr><td>Permanent home</td><td>Resident if you have a home available to you there</td><td>Keeping your flat at home can keep you resident at home</td></tr>
<tr><td>Centre of vital interests</td><td>Where your family, business and economic ties are</td><td>Often points back to your home country</td></tr>
<tr><td>Ties-based tests</td><td>Count of connections such as family, work, accommodation and prior presence</td><td>The UK Statutory Residence Test combines days with ties</td></tr>
<tr><td>Citizenship</td><td>Taxed because you are a citizen</td><td>Applies to US citizens wherever they live</td></tr>
</tbody>
</table>
<p>The UK is a good example of why the day count is not the whole story. Under its Statutory Residence Test, spending 183 days or more in the UK in a tax year makes you automatically resident, but you can also be resident with far fewer days if you have enough UK ties. Other countries have their own versions. Always look up the official test for each country you spend real time in.</p>
<h3>Can you be resident nowhere?</h3>
<p>In theory, someone who moves constantly and has given up all ties at home might not be resident anywhere. In practice this is hard to prove, and many home countries keep treating you as resident until you clearly leave. Being resident nowhere can also cause practical problems: banks ask for a tax residency, tax treaties need a country of residence, and clients may want a tax form. Most nomads are better off with one clear tax home.</p>

<h2>Digital nomad visa taxes</h2>
<p>Many countries now offer digital nomad or remote work visas. These let you stay longer than a tourist visit and work for clients or employers abroad. On tax, they fall into broad groups:</p>
<ul>
<li><strong>Visas with a stated tax exemption</strong> on foreign income for a set period, as long as you meet the conditions.</li>
<li><strong>Visas with no special tax rule</strong>, where normal residency tests apply. Stay long enough and you become a tax resident with a local filing duty.</li>
<li><strong>Visas linked to special regimes</strong>, such as reduced rates for new residents, which you usually have to apply for separately.</li>
</ul>
<p>Rules change frequently, and third-party summaries are often out of date. Before you apply, read the official immigration page and the tax authority's guidance for that country, and confirm in writing how your income will be treated. A visa that lets you stay a year can easily make you tax resident for that year.</p>

<h2>Digital nomad tax for US citizens: the FEIE in 2026</h2>
<p>US citizens and green card holders file a US return every year they meet the filing threshold, wherever they live. Self-employed people must generally file if net self-employment earnings reach $400. The main tool for reducing double taxation is the foreign earned income exclusion (FEIE).</p>
<p>For the 2026 tax year, the IRS set the maximum FEIE at <strong>$132,900</strong> per qualifying person, up from $130,000 for 2025. You claim it on Form 2555 with your 2026 return, filed in 2027. To qualify you need a tax home in a foreign country and must pass one of two tests:</p>
<ol>
<li><strong>Bona fide residence test:</strong> you are a genuine resident of a foreign country for an uninterrupted period that includes a full tax year.</li>
<li><strong>Physical presence test:</strong> you are physically present in a foreign country or countries for at least 330 full days in any 12 consecutive months.</li>
</ol>
<p>Nomads who move often usually rely on the physical presence test, because bona fide residence is hard to show without settling somewhere. Watch the tax home requirement too: if your main home (abode) stays in the US, you may not qualify even with enough days abroad.</p>
<h3>What the FEIE does not cover</h3>
<ul>
<li><strong>Self-employment tax.</strong> The exclusion removes income tax, not the 15.3% <a href="/blog/self-employment-tax">self-employment tax</a> on net earnings. A totalization agreement with your country of residence may move social security coverage there, but you need a certificate of coverage.</li>
<li><strong>Investment income.</strong> Interest, dividends and capital gains are not earned income.</li>
<li><strong>Days in the US.</strong> Income earned while working on US soil is US-source income and cannot be excluded.</li>
</ul>
<p>If you pay income tax abroad, the foreign tax credit (Form 1116) may work better than the FEIE, particularly in higher-tax countries. Some people combine them on different slices of income. You may also need to report foreign bank accounts on an FBAR if the total exceeds $10,000 at any point in the year, and US expats get an automatic two-month extension to file, to June 15, although interest on unpaid tax runs from April 15.</p>

<h2>Worked examples</h2>
<h3>Example 1: A US freelancer abroad all year</h3>
<p>Maya is a US citizen designer who spends all of 2026 moving between countries outside the US, passing the physical presence test. She invoices US clients and earns $110,000 net profit on her <a href="/blog/schedule-c-for-freelancers">Schedule C</a>.</p>
<ul>
<li>Income tax: she can exclude her earned income up to $132,900, so in this simple case her federal income tax could fall to nil.</li>
<li>Self-employment tax: still due. 92.35% of $110,000 is $101,585, and 15.3% of that is about $15,543.</li>
<li>She still files a full US return and makes <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> to cover the self-employment tax.</li>
</ul>
<h3>Example 2: A partial year</h3>
<p>If Maya's 12-month qualifying period only overlaps 200 days of 2026, her maximum exclusion is prorated: $132,900 multiplied by 200 divided by 365, or about $72,822. Income above that is taxable as normal.</p>
<h3>Example 3: A non-US freelancer</h3>
<p>Tomas is resident in a European country, rents out his flat, and spends 190 days of the year in a country that uses a 183-day test. He may now be resident in both. A tax treaty between the two countries usually contains tie-breaker rules, looking at permanent home, then centre of vital interests, then habitual abode, then nationality. The result decides which country has the main right to tax him. He needs advice in both countries.</p>

<h2>Practical steps to stay compliant</h2>
<p>Good digital nomad tax planning is mostly record keeping and decisions made before you travel, not clever tricks after the year ends. These habits cover most situations:</p>
<ol>
<li><strong>Decide your tax home deliberately.</strong> Pick the country you will be resident in and file there. Do not drift into residency by accident.</li>
<li><strong>Track every travel day.</strong> Keep a spreadsheet with entry and exit dates and boarding passes. Day counts are evidence.</li>
<li><strong>Check each country before you arrive.</strong> Look up the residency test and any digital nomad visa tax rules for stays longer than a few weeks.</li>
<li><strong>Keep your business registration stable.</strong> Invoice from one business address and tax number, not a new one with every move.</li>
<li><strong>Separate your money.</strong> A dedicated account makes it easier to prove income and claim expenses. See our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>.</li>
<li><strong>Use the right tax forms with clients.</strong> Non-US freelancers working for US clients usually provide a <a href="/blog/w-8ben-form-freelancers">Form W-8BEN</a> rather than a W-9.</li>
<li><strong>Set money aside.</strong> Put a percentage of each payment into a tax account so you are not caught short.</li>
</ol>

<h2>Invoicing as a digital nomad</h2>
<p>Your invoices are part of your tax evidence. They show who you billed, from which business and in which currency. Keep them consistent:</p>
<ul>
<li>Use your registered business name and address, not your current hotel or co-working space.</li>
<li>Show any VAT, GST or tax number you are registered for, and the client's if the rules require it.</li>
<li>Choose a currency and stick to it per client. Our guide to a <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> covers exchange rates and wording.</li>
<li>State payment details clearly. Fees and exchange rates vary by provider; our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer comparison</a> can help you choose.</li>
</ul>
<p>For a wider checklist on billing clients abroad, read <a href="/blog/invoice-international-clients">how to invoice international clients</a>.</p>

<h2>Common digital nomad tax mistakes</h2>
<table>
<thead><tr><th>Mistake</th><th>Why it is a problem</th></tr></thead>
<tbody>
<tr><td>Assuming no country can tax you</td><td>Your home country often still can, and US citizens always can</td></tr>
<tr><td>Treating the 183-day rule as the only test</td><td>Ties and permanent homes can make you resident with fewer days</td></tr>
<tr><td>Assuming a nomad visa is a tax exemption</td><td>Many visas have no special tax treatment</td></tr>
<tr><td>Forgetting self-employment tax with the FEIE</td><td>Leads to a surprise bill of roughly 15% of profit</td></tr>
<tr><td>Not tracking days</td><td>You cannot prove residency or the physical presence test</td></tr>
<tr><td>Changing invoice addresses with every move</td><td>Creates confusion about where the business is based</td></tr>
</tbody>
</table>

<h2>Conclusion</h2>
<p>Digital nomad tax is manageable once you accept one rule: you are almost always resident somewhere, and that country usually gets to tax you. Learn each country's residency test, treat the 183-day rule as a warning sign rather than a safe harbour, read the fine print on nomad visas, and if you are a US citizen, plan around the $132,900 FEIE for 2026 while budgeting for self-employment tax. This is general information, not tax advice; speak to a qualified cross-border tax adviser about your situation. When it is time to bill, create consistent, professional invoices in any currency with the free <a href="/invoice-generator">invoice generator</a>, and find more guides in the <a href="/blog/category/freelancing">freelancing section</a>.</p>
`,
  },
  {
    slug: "solo-401k-vs-sep-ira",
    title: "Solo 401k vs SEP IRA: 2026 Limits and Which to Choose",
    description:
      "Solo 401k vs SEP IRA for 2026: contribution limits, how much you can save at different incomes, deadlines, paperwork, and which plan suits self-employed people.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-health-insurance-deduction",
      "self-employment-tax",
      "self-employed-tax-deductions",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "What are the 2026 contribution limits for a Solo 401k?",
        a: "For 2026, you can defer up to $24,500 as the employee, plus an employer profit-sharing contribution of up to 25% of compensation, which works out to about 20% of net self-employment earnings for sole proprietors. The combined total is capped at $72,000. If you are 50 or older you can add an $8,000 catch-up, and people aged 60 to 63 may add $11,250 instead if the plan allows it.",
      },
      {
        q: "What is the SEP IRA limit for 2026?",
        a: "For 2026, SEP IRA contributions are limited to 25% of compensation, up to $72,000, with compensation counted up to $360,000. For a self-employed sole proprietor, the 25% works out to roughly 20% of net self-employment earnings after deducting half of self-employment tax. SEP IRAs do not allow catch-up contributions, so being over 50 does not raise the limit in a SEP the way it does in a Solo 401k.",
      },
      {
        q: "Can I have both a Solo 401k and a SEP IRA?",
        a: "You can technically maintain both, but contributing to both for the same business in the same year is usually not useful, because the employer contribution limits are combined and some plan documents restrict it. Most self-employed people pick one. A common path is to start with a SEP IRA for simplicity, then switch to a Solo 401k once they want to save more than the SEP allows. Check your plan documents and an adviser first.",
      },
      {
        q: "Which is better for a low-income freelancer, Solo 401k or SEP IRA?",
        a: "The Solo 401k usually wins at lower incomes. A SEP only allows about 20% of net earnings, so a freelancer with $40,000 of profit could save roughly $7,400. In a Solo 401k, the same person can also make employee deferrals of up to $24,500, limited by their earnings, so they can save far more of their income if they can afford it.",
      },
      {
        q: "What is the deadline to open and fund a SEP IRA?",
        a: "A SEP IRA can be set up and funded up to your tax return due date, including extensions, for the year you want the contribution to count. For a 2026 contribution, that means as late as April 2027, or October 2027 if you extend. That flexibility makes the SEP useful if you only realise after year-end how much you earned and want a deduction for the year.",
      },
      {
        q: "When do I need to open a Solo 401k for 2026?",
        a: "Rules have loosened recently. Under the SECURE Act, a new plan can generally be established by the tax return due date, including extensions, for employer contributions. SECURE 2.0 also lets sole proprietors make first-year employee deferrals up to the return due date in some cases. Provider requirements vary, so the safest approach is to open the plan before December 31 if you want to make 2026 employee deferrals.",
      },
      {
        q: "Does a Solo 401k have a Roth option?",
        a: "Many Solo 401k plans let you make your employee deferrals as Roth contributions, which are taxed now but can be withdrawn tax-free in retirement if the rules are met. Not every provider offers it, so check before you open an account. SECURE 2.0 also allows Roth treatment for SEP contributions, but provider support has been slower to arrive, so ask your provider what it currently allows.",
      },
      {
        q: "Do I have to file Form 5500-EZ for a Solo 401k?",
        a: "Generally only once plan assets exceed $250,000 at the end of the plan year, and in the plan's final year. Below that level, a one-participant plan usually has no annual filing. Missing a required 5500-EZ can trigger penalties, so set a reminder to check your balance each December. SEP IRAs do not have this filing requirement, which is part of why they are seen as simpler.",
      },
      {
        q: "Can I use a Solo 401k if I have employees?",
        a: "No. A Solo 401k is only for a business with no employees other than the owner and the owner's spouse. Part-time workers can become eligible under the plan rules, which can disqualify a solo plan. With a SEP IRA, you must contribute the same percentage of pay for eligible employees as for yourself. If you plan to hire, compare both plans with a regular 401k before you decide.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Solo 401k vs SEP IRA decision, the Solo 401k usually lets self-employed people save more at low and middle incomes, because you contribute as both employee ($24,500 in 2026) and employer. The SEP IRA is simpler, with no annual filing and a later setup deadline, but it only allows about 20% of net self-employment earnings.</p>

<p>If you are self-employed in the US, you do not have an employer 401k, but you can set up your own retirement plan and deduct the contributions. The two most popular choices are the Solo 401k (also called an individual or one-participant 401k) and the SEP IRA. Both share the same $72,000 overall cap for 2026, but they reach it differently. This guide compares the 2026 contribution limits, works through examples at different incomes, and explains which self-employed retirement plan suits which situation. It is general information only; check your numbers with a qualified tax adviser or plan provider.</p>

<h2>2026 contribution limits at a glance</h2>
<p>The IRS announced the 2026 retirement plan limits in Notice 2025-67. The figures most relevant to self-employed people are below. Confirm them on IRS.gov before you contribute, as you should with any tax figure.</p>
<table>
<thead><tr><th>Limit (2026)</th><th>Solo 401k</th><th>SEP IRA</th></tr></thead>
<tbody>
<tr><td>Employee deferral</td><td>$24,500</td><td>Not available</td></tr>
<tr><td>Employer contribution</td><td>Up to 25% of compensation (about 20% of net SE earnings for sole proprietors)</td><td>Up to 25% of compensation (about 20% of net SE earnings for sole proprietors)</td></tr>
<tr><td>Overall cap (excluding catch-up)</td><td>$72,000</td><td>$72,000</td></tr>
<tr><td>Catch-up, age 50 and over</td><td>$8,000</td><td>None</td></tr>
<tr><td>Catch-up, ages 60 to 63 (if plan allows)</td><td>$11,250 instead of $8,000</td><td>None</td></tr>
<tr><td>Compensation counted up to</td><td>$360,000</td><td>$360,000</td></tr>
</tbody>
</table>
<p>The employee deferral limit is per person, not per plan. If you also have a day job with a 401k, your deferrals across both plans share the single $24,500 limit. Employer contributions to your Solo 401k are separate.</p>

<h2>How self-employed contributions are calculated</h2>
<p>For a sole proprietor or single-member LLC taxed as a sole proprietorship, compensation is not simply your profit. You start from net profit on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>, subtract the deductible half of your <a href="/blog/self-employment-tax">self-employment tax</a>, and then apply the contribution rate. Because the contribution itself reduces your compensation, 25% of compensation works out to 20% of net earnings after the self-employment tax deduction.</p>
<ol>
<li>Calculate net self-employment earnings: net profit multiplied by 92.35%.</li>
<li>Calculate self-employment tax: 15.3% of that figure (the Social Security part stops at the annual wage base).</li>
<li>Subtract half of the self-employment tax from your net profit.</li>
<li>Multiply the result by 20%. This is your maximum employer contribution in either plan.</li>
</ol>
<p>If you run an S corporation instead, the calculation is based on your W-2 wages from the company, not your profit, and the employer contribution is 25% of those wages. Our guide to <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> explains the structures.</p>

<h2>Worked example: Solo 401k vs SEP IRA at $100,000 profit</h2>
<p>Jordan is a 42-year-old freelance developer with $100,000 net profit in 2026.</p>
<ul>
<li>Net SE earnings: $100,000 x 92.35% = $92,350</li>
<li>Self-employment tax: $92,350 x 15.3% = about $14,130</li>
<li>Half of SE tax: about $7,065</li>
<li>Adjusted earnings: $100,000 - $7,065 = $92,935</li>
<li>Employer contribution at 20%: about $18,587</li>
</ul>
<table>
<thead><tr><th>Jordan, $100,000 profit</th><th>SEP IRA</th><th>Solo 401k</th></tr></thead>
<tbody>
<tr><td>Employee deferral</td><td>$0</td><td>$24,500</td></tr>
<tr><td>Employer contribution</td><td>$18,587</td><td>$18,587</td></tr>
<tr><td>Total (age 42)</td><td>$18,587</td><td>$43,087</td></tr>
<tr><td>Total if Jordan were 55</td><td>$18,587</td><td>$51,087</td></tr>
</tbody>
</table>
<p>At this income the Solo 401k allows more than twice as much. The difference is entirely the employee deferral, plus catch-up for older savers.</p>
<h3>Example at $60,000 profit</h3>
<p>With $60,000 net profit, half of self-employment tax is about $4,239, leaving about $55,761. The SEP maximum is 20% of that, about $11,152. A Solo 401k allows the same $11,152 plus up to $24,500 in deferrals, about $35,652 in total, which is more than half of profit. Few people can save that much, but the higher ceiling gives flexibility in a good year.</p>
<h3>At high incomes the gap closes</h3>
<p>As profit rises, the 20% employer contribution grows until both plans hit the $72,000 cap. A high earner who can reach the cap through the employer contribution alone gains less from the Solo 401k, apart from catch-up contributions and the Roth option. For most freelancers and small business owners, though, incomes sit in the range where the Solo 401k's deferral makes a real difference.</p>

<h2>Beyond the limits: other differences that matter</h2>
<table>
<thead><tr><th>Feature</th><th>Solo 401k</th><th>SEP IRA</th></tr></thead>
<tbody>
<tr><td>Who can use it</td><td>Owner and spouse only, no other employees</td><td>Any business size; eligible employees must get the same percentage</td></tr>
<tr><td>Roth contributions</td><td>Often available for deferrals</td><td>Allowed by law since SECURE 2.0, but provider support varies</td></tr>
<tr><td>Loans</td><td>Plan may allow loans</td><td>No loans</td></tr>
<tr><td>Annual filing</td><td>Form 5500-EZ once assets exceed $250,000</td><td>None</td></tr>
<tr><td>Setup deadline</td><td>Generally by the tax return due date for employer contributions; deferral rules vary</td><td>Tax return due date, including extensions</td></tr>
<tr><td>Paperwork</td><td>Plan document, more admin</td><td>Simple form, minimal admin</td></tr>
<tr><td>Backdoor Roth IRA impact</td><td>No effect</td><td>SEP balance counts in the pro-rata rule</td></tr>
</tbody>
</table>
<p>The last row matters for higher earners. If you do a backdoor Roth IRA conversion, any pre-tax SEP IRA balance is included in the pro-rata calculation and can make part of the conversion taxable. Solo 401k balances are not counted, which is one reason some people roll SEP money into a Solo 401k.</p>
<h3>If your spouse works in the business</h3>
<p>A spouse who genuinely works in the business and is paid for that work can also join a Solo 401k without turning it into a plan with employees. Each spouse then has their own $24,500 deferral limit and their own employer contribution, based on their own compensation, which can roughly double what a household saves through the business. In a SEP, a paid spouse simply receives the same percentage of pay as you. Paying a spouse has payroll, tax and record-keeping consequences of its own, so this is a conversation to have with an accountant before you set it up, not an add-on at year-end.</p>

<h2>Deadlines and timing</h2>
<p>Timing is where the SEP IRA shines. You can open and fund a SEP for 2026 as late as your 2026 tax return due date, including extensions. If you finish your books in March 2027 and find a strong year, you can still make a deductible contribution.</p>
<p>The Solo 401k used to require setup by December 31. The SECURE Act allowed new plans to be established by the return due date for employer contributions, and SECURE 2.0 added some flexibility for a sole proprietor's first-year deferrals. Providers handle these rules differently, so if you want to make employee deferrals for 2026, the safest plan is to open the account before year-end and confirm the deadline with your provider.</p>
<p>Whichever plan you choose, contributions do not reduce self-employment tax, but they do reduce income tax. Plan them alongside your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> so you are not short of cash in April.</p>

<h2>Which self-employed retirement plan should you choose?</h2>
<h3>Choose a Solo 401k if:</h3>
<ul>
<li>You have no employees other than a spouse.</li>
<li>You want to save more than about 20% of your net earnings.</li>
<li>You are 50 or older and want catch-up contributions.</li>
<li>You want Roth contributions or the option of a plan loan.</li>
<li>You do, or may do, a backdoor Roth IRA.</li>
</ul>
<h3>Choose a SEP IRA if:</h3>
<ul>
<li>You want the simplest possible setup and no annual filings.</li>
<li>You are deciding after year-end and need the later deadline.</li>
<li>Your income is high enough that 20% of earnings already reaches the amount you want to save.</li>
<li>You have or plan to hire employees and are comfortable contributing for them too.</li>
</ul>
<p>Many people use both over time: a SEP in the first years of freelancing when simplicity matters, then a Solo 401k once income and savings goals grow. Contributions are also part of a wider tax picture, alongside your <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> and the choice between <a href="/blog/llc-vs-sole-proprietorship">an LLC and a sole proprietorship</a>.</p>

<h2>How to open either plan</h2>
<p>Whichever side of the Solo 401k vs SEP IRA question you land on, setup is mostly online and takes less time than people expect.</p>
<ol>
<li><strong>Pick a provider.</strong> Most large brokerages offer both plans. Compare account fees, investment choices, whether a Roth option is available, and whether the Solo 401k allows loans or rollovers in.</li>
<li><strong>Get an EIN if needed.</strong> Many Solo 401k providers ask for an Employer Identification Number rather than your Social Security number. Our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> explains the free IRS process.</li>
<li><strong>Sign the plan paperwork.</strong> A SEP usually uses the short IRS model form (Form 5305-SEP) or the provider's prototype. A Solo 401k uses a plan document and adoption agreement from the provider.</li>
<li><strong>Open the account and link your business bank account.</strong> Contributions should come from business funds so the record is clear.</li>
<li><strong>Make and label contributions.</strong> For a Solo 401k, keep employee deferrals and employer contributions separate, and note the tax year each one is for.</li>
<li><strong>Record the deduction.</strong> Sole proprietors claim contributions for themselves on Form 1040 Schedule 1, not on Schedule C. Your tax software or preparer will ask for the amounts.</li>
</ol>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Using gross revenue instead of net profit.</strong> The 20% calculation starts from profit after expenses, then subtracts half of self-employment tax. Using invoiced revenue overstates the limit.</li>
<li><strong>Exceeding the deferral limit with a day job.</strong> The $24,500 is shared across every 401k you contribute to as an employee.</li>
<li><strong>Missing the Solo 401k deadline for deferrals.</strong> If your provider requires the plan to exist by December 31, a January start may limit you to employer contributions for 2026.</li>
<li><strong>Forgetting employees.</strong> Hiring an eligible employee can disqualify a Solo 401k or require equal SEP contributions for them.</li>
<li><strong>Skipping Form 5500-EZ.</strong> Once Solo 401k assets pass $250,000, an annual filing is generally due.</li>
<li><strong>Not saving cash for the contribution.</strong> Decide your target early and set money aside from each client payment.</li>
</ul>
<p>The Solo 401k vs SEP IRA choice is not permanent. You can usually close a SEP and open a Solo 401k later, or roll balances between plans, subject to provider and IRS rules.</p>

<h2>Keep clean records</h2>
<p>Both plans depend on an accurate figure for net profit, which depends on clean books. Invoice every job, record every payment, and keep business and personal money separate. A dedicated <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> makes the year-end calculation far easier. Contributions to either plan should come from business income you can document.</p>

<h2>Conclusion</h2>
<p>For most self-employed people weighing Solo 401k vs SEP IRA in 2026, the Solo 401k offers the higher ceiling at ordinary incomes, thanks to the $24,500 employee deferral and catch-up contributions, while the SEP IRA wins on simplicity and its late deadline. Both share the $72,000 overall cap. Run your own numbers using your Schedule C profit, confirm the limits on IRS.gov, and talk to a qualified tax adviser before you commit. To keep your income records clean from the first invoice, use the free <a href="/invoice-generator/usa">US invoice generator</a> or the main <a href="/invoice-generator">invoice generator</a>, and explore more in our <a href="/blog/category/freelancing">freelancing guides</a>.</p>
`,
  },
  {
    slug: "business-bank-account-for-freelancers",
    title: "Business Bank Account for Freelancers: Do You Need One?",
    description:
      "Do you need a business bank account for freelancers? The rules in the US, UK and Pakistan, what a separate account fixes, what to compare, and how to set it up.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "what-is-a-dba",
      "bank-details-on-invoice",
      "sole-trader-invoice-uk",
      "freelancer-digital-account-pakistan",
    ],
    faqs: [
      {
        q: "Do freelancers need a business bank account?",
        a: "Legally, many do not. In the US a sole proprietor and in the UK a sole trader can usually use a personal account. Limited companies, and in practice LLCs, should have their own account because the business is a separate legal entity. Even when it is optional, a separate account makes bookkeeping, tax returns and proving income much easier, and many personal account terms do not allow business use.",
      },
      {
        q: "Can I use my personal bank account for freelance work?",
        a: "Often yes, if you are a sole proprietor or sole trader and your bank's terms allow it. The problems are practical. Business and personal transactions get mixed, so tax time takes longer and expenses are easier to miss. Some banks restrict business activity on personal accounts and may ask questions if you receive many payments from clients. A separate account, even a second personal account used only for work, solves most of this.",
      },
      {
        q: "What do I need to open a business bank account as a freelancer?",
        a: "Requirements vary by bank and country. Expect photo ID, proof of address, details of what your business does and expected income, and, for companies or LLCs, registration documents. US banks often ask for an EIN for an LLC, though many accept a Social Security number for a sole proprietor. UK banks ask for company details for a limited company. Pakistani banks ask for a CNIC and evidence of freelance work.",
      },
      {
        q: "Is a business bank account free for freelancers?",
        a: "Some are, and many have fees. Online banks and some traditional banks offer accounts with no monthly fee, while others charge a monthly fee or per-transaction charges, or waive the fee if you keep a minimum balance. Compare the full cost, including card fees, cash deposit fees, international transfer charges and foreign exchange margins, against how you actually get paid. Check current terms on each bank's official pricing page.",
      },
      {
        q: "Does an LLC need a separate bank account?",
        a: "In practice, yes. An LLC is a separate legal entity, and mixing its money with your personal money, called commingling, can weaken the liability protection that is the main reason for forming one. A separate account also makes it easier to show which income and expenses belong to the LLC. Banks usually ask for formation documents and an EIN to open an LLC account.",
      },
      {
        q: "Do UK sole traders need a business bank account?",
        a: "HMRC does not require a sole trader to have a business bank account; you must simply keep accurate records of income and expenses. However, many high-street banks' personal account terms say the account should not be used mainly for business, so check yours. A limited company needs its own account because its money belongs to the company, not to you. Many sole traders open a separate account anyway for cleaner records.",
      },
      {
        q: "What bank account should Pakistani freelancers use?",
        a: "Most Pakistani freelancers earning from abroad use a freelancer digital account under the State Bank of Pakistan framework, with a linked dollar account that lets them retain part of their export proceeds in foreign currency. Receiving through proper banking channels also matters for tax treatment. If you run a registered company, a business current account and corporate foreign currency account are usually more appropriate. Confirm current rules with your bank.",
      },
      {
        q: "Which bank details should I put on my invoices?",
        a: "Include the account name exactly as the bank holds it, the bank name, and the numbers your client needs: an account number and routing number in the US, sort code and account number in the UK, or an IBAN, plus a SWIFT or BIC code for international payments. Use your business account details so payments land where your records expect them, and double-check every digit.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A business bank account for freelancers is a separate account used only for your work income and expenses. Most sole proprietors and sole traders are not legally required to have one, but limited companies and LLCs effectively must. Even when optional, a separate account saves hours at tax time and makes your income easy to prove.</p>

<p>When you start freelancing, client payments usually land in the same account as your salary, rent and groceries. That works for a few months. Then tax season arrives, and you are scrolling through hundreds of transactions trying to remember which were business costs. This guide answers the common question, do freelancers need a business bank account, looks at the rules in the US, UK and Pakistan, and shows what to compare when you choose one. It is general information, so check the rules for your situation with a qualified accountant.</p>

<h2>Do freelancers need a business bank account?</h2>
<p>The legal answer depends on how your business is set up. The practical answer is almost always that a separate account helps.</p>
<table>
<thead><tr><th>Business type</th><th>Legally required?</th><th>Recommended?</th></tr></thead>
<tbody>
<tr><td>US sole proprietor</td><td>Generally no</td><td>Yes</td></tr>
<tr><td>US LLC or corporation</td><td>Effectively yes, to keep the entity separate</td><td>Yes</td></tr>
<tr><td>UK sole trader</td><td>No, but check your bank's terms</td><td>Yes</td></tr>
<tr><td>UK limited company</td><td>Effectively yes, the money belongs to the company</td><td>Yes</td></tr>
<tr><td>Pakistan individual freelancer</td><td>No business account required; a freelancer account is the usual route for foreign earnings</td><td>Yes, for receiving export proceeds</td></tr>
<tr><td>Pakistan registered company</td><td>Effectively yes</td><td>Yes</td></tr>
</tbody>
</table>
<p>The pattern is simple: if your business is a separate legal person, it needs its own account. If you are trading in your own name, a separate account is optional but very useful.</p>

<h2>What a separate business account fixes</h2>
<p>A separate business account is less about rules and more about making your financial life easier. Here is what changes when you separate your money:</p>
<ul>
<li><strong>Faster bookkeeping.</strong> Every transaction in the account is business-related, so you can export it straight into your records. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> shows a simple system.</li>
<li><strong>Fewer missed deductions.</strong> Business costs are not buried among personal spending, so they are easier to find and claim.</li>
<li><strong>Clear proof of income.</strong> Lenders, landlords, visa officers and tax authorities can see your business income at a glance.</li>
<li><strong>Easier reconciliation.</strong> Matching payments to invoices takes minutes when nothing else is in the account. See our guide to <a href="/blog/bank-reconciliation">bank reconciliation</a>.</li>
<li><strong>A more professional image.</strong> Clients see a business account name on your invoice and on their payment confirmation.</li>
<li><strong>Better tax discipline.</strong> You can see what the business really earns and move a share into a tax savings pot each month.</li>
</ul>
<h3>Separate business account vs a second personal account</h3>
<p>If you are a sole proprietor or sole trader, you have two ways to separate your money. The first is a dedicated business bank account for freelancers, opened in your business or trading name. The second is a second personal account that you use only for work. The second option can be cheaper, and it gives you most of the bookkeeping benefits. Its downsides are that the account name on invoices is your personal name, some banks restrict business use of personal accounts, and you may miss business features such as invoicing integrations, multiple users or higher payment limits. Start with whichever you can open quickly, but move to a proper business account once client payments are regular.</p>
<h3>A quick example</h3>
<p>Imagine a freelance writer who receives 12 client payments a month and makes 30 business purchases a year, mixed in with roughly 80 personal transactions a month in one account. At year-end, that is about 1,100 transactions to sort through to find around 175 that matter. With a separate account, the same writer exports a statement with only those 175 lines, already in date order, ready to match against invoices and receipts.</p>

<h2>United States: sole proprietors, LLCs and EINs</h2>
<p>A US sole proprietor and the business are legally the same person, so the IRS does not require a separate account. You report income and expenses on Schedule C either way. But the IRS does expect you to keep records that support every figure, and a dedicated account is the simplest way to do it.</p>
<p>If you have formed an LLC or a corporation, the case is much stronger. The main benefit of an LLC is limited liability, and mixing business and personal money, known as commingling, can give a court grounds to disregard that protection. Keep LLC money in an LLC account and pay yourself by transfer. Our comparison of an <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> explains the trade-offs.</p>
<p>To open a US business account, banks commonly ask for:</p>
<ol>
<li>Government-issued photo ID.</li>
<li>Your Social Security number, or an EIN. Many banks accept an SSN for a sole proprietor; an LLC usually needs an EIN. Our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> covers the free online application.</li>
<li>Formation documents for an LLC or corporation, such as articles of organization and an operating agreement.</li>
<li>A DBA (assumed name) registration if you trade under a name other than your own.</li>
</ol>
<p>Deposits at FDIC-insured banks are covered up to $250,000 per depositor, per insured bank, per ownership category. Some fintech apps are not banks themselves and rely on partner banks for this coverage, so read the account terms.</p>

<h2>United Kingdom: sole traders and limited companies</h2>
<p>HMRC does not require sole traders to have a business bank account. You must keep accurate records of income and expenses for Self Assessment, and from the relevant start date, digital records under Making Tax Digital for Income Tax if you are in scope. Using a separate account makes both much easier.</p>
<p>The catch is your bank. Many personal account terms say the account is not for business use, and a bank may question or restrict an account receiving regular client payments. Some sole traders get around this with a second personal account used only for work, if the bank allows it, but a proper business account is the cleaner option.</p>
<p>A limited company is different. Its money belongs to the company, and you take it out as salary, dividends or expense repayments. It needs its own account in the company's name. Our guide to <a href="/blog/sole-trader-invoice-uk">sole trader invoices in the UK</a> explains what to include on your invoices, and the <a href="/invoice-generator/uk">UK invoice generator</a> includes a UK locale preset.</p>

<h2>Pakistan: freelancer digital accounts</h2>
<p>For Pakistani freelancers, the bank account question is mostly about receiving foreign payments properly. The State Bank of Pakistan framework for freelancer accounts lets individuals open a rupee account with a linked foreign currency account (ESFCA), with minimal documentation. Under the rules announced in 2023, freelancers can keep a share of their export proceeds in dollars rather than converting everything to rupees.</p>
<p>Receiving payments through formal banking channels also matters for tax, because the withholding rates on export proceeds and the evidence for your tax return depend on it. Our detailed guide to the <a href="/blog/freelancer-digital-account-pakistan">freelancer digital account in Pakistan</a> covers retention limits and documents, and <a href="/blog/receive-payment-from-abroad-pakistan">how to receive payments from abroad in Pakistan</a> compares the routes. If you operate through a registered company, a business current account is usually more suitable. Confirm current rules with your bank, as SBP circulars are updated.</p>

<h2>How to choose a business bank account for freelancers</h2>
<p>Banks compete on different things, so compare against how you actually work. These questions help:</p>
<table>
<thead><tr><th>Factor</th><th>What to check</th></tr></thead>
<tbody>
<tr><td>Monthly fee</td><td>Is there one, and can it be waived with a minimum balance?</td></tr>
<tr><td>Transaction fees</td><td>Charges for incoming and outgoing payments, card payments and cash deposits</td></tr>
<tr><td>International payments</td><td>Fees for receiving foreign currency and the exchange rate margin</td></tr>
<tr><td>Multi-currency</td><td>Can you hold and receive USD, GBP or EUR without converting?</td></tr>
<tr><td>Integrations</td><td>Does it export to your accounting software or spreadsheet?</td></tr>
<tr><td>Deposit protection</td><td>FDIC in the US, FSCS in the UK; check whether a fintech holds funds with a partner bank</td></tr>
<tr><td>Support</td><td>Can you reach a person when a large client payment is held?</td></tr>
</tbody>
</table>
<p>If most of your clients are abroad, international receiving fees and exchange rates will matter more than the monthly fee. Our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer comparison</a> covers two popular options that freelancers often use alongside a local business account.</p>
<h3>Online banks vs traditional banks</h3>
<p>Online and app-based providers usually win on low fees, quick account opening and good expense tools. Traditional banks usually win on branch access, cash deposits, lending and established relationships if you later need an overdraft or loan. Many freelancers do not need cash handling at all, so an online business bank account for freelancers is often enough. If you take cash or plan to borrow, a traditional bank may be worth the higher fee.</p>
<h3>Worked example: the cost of exchange margins</h3>
<p>Say you invoice a US client $3,000 a month and your bank converts it to your local currency with a 2% margin over the mid-market rate. That margin costs you about $60 a month, or $720 a year. An account or service with a 0.5% margin would cost about $15 a month, or $180 a year, saving $540. These percentages are illustrative; check the actual rates each provider shows before you choose.</p>

<h2>How to set up and use your business account</h2>
<ol>
<li><strong>Choose your account</strong> using the factors above and open it with the documents your bank requires.</li>
<li><strong>Update your invoices.</strong> Put the new account details on every invoice and remove the old ones. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> lists what to include for domestic and international payments.</li>
<li><strong>Tell existing clients in writing</strong> and ask them to confirm the change by phone or another trusted channel. Fraudsters target account-change emails.</li>
<li><strong>Move business subscriptions and expenses</strong> to the business card.</li>
<li><strong>Pay yourself on a schedule.</strong> Transfer a fixed amount or a share of profit to your personal account monthly.</li>
<li><strong>Set aside tax.</strong> Move a percentage of each payment into a separate savings pot for tax.</li>
<li><strong>Reconcile monthly.</strong> Match deposits to invoices and record any unpaid balances.</li>
</ol>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Paying personal bills from the business account.</strong> It undoes the point of separating money, and for an LLC or company it creates extra tax and legal questions.</li>
<li><strong>Leaving old bank details on invoice templates.</strong> Clients will keep paying the old account.</li>
<li><strong>Ignoring your bank's terms.</strong> Running a busy freelance business through a personal account that forbids it can lead to the account being restricted.</li>
<li><strong>Choosing on monthly fee alone.</strong> Foreign exchange margins can cost far more than the fee.</li>
<li><strong>Not keeping statements.</strong> Download and store statements in case you need them for a tax enquiry.</li>
</ul>

<h2>Conclusion</h2>
<p>A business bank account for freelancers is not always legally required, but it is one of the simplest ways to save time, claim every expense and look professional. Sole proprietors and sole traders can choose; LLCs and limited companies effectively must; Pakistani freelancers should use a proper freelancer account for foreign income. Pick an account that fits how your clients pay, then put its details on every invoice. Create those invoices for free with the <a href="/invoice-generator">invoice generator</a>, or use the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> for a local preset. For tax questions, speak to a qualified accountant.</p>
`,
  },
];
