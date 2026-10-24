import type { PostDraft } from "../blog";

export const HOW_TO_POSTS_A: PostDraft[] = [
  {
    slug: "how-to-make-an-invoice-in-word",
    title: "How to Make an Invoice in Word: Step-by-Step Guide (2026)",
    description:
      "Learn how to make an invoice in Word from a template or a blank document: table layout, totals, numbering and PDF export, plus a faster free alternative.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-make-an-invoice-in-excel",
      "how-to-make-an-invoice-in-google-docs",
      "how-to-create-an-invoice",
    ],
    faqs: [
      {
        q: "Does Microsoft Word have an invoice template?",
        a: "Yes. Word's template gallery usually includes several invoice designs you can find by searching for invoice. The exact selection changes over time, so treat any template as a starting point and check that it has every field your client needs.",
      },
      {
        q: "Can Word calculate invoice totals automatically?",
        a: "Only in a limited way. Word tables support simple formula fields such as =SUM(ABOVE), but they do not recalculate on their own; you have to update the fields after every change. For automatic maths, use Excel, Google Sheets or an online invoice generator.",
      },
      {
        q: "Should I send my Word invoice as a .docx file?",
        a: "No. Save or export the finished invoice as a PDF and send that. A PDF looks the same on every device and cannot be edited by accident, while a .docx can reflow or be changed.",
      },
      {
        q: "How do I number invoices made in Word?",
        a: "Type the number manually and keep a separate log of every number you issue, such as INV-2026-0001, INV-2026-0002 and so on. Never reuse a number, even if you copy last month's file as a starting point.",
      },
      {
        q: "Is it better to make an invoice in Word or Excel?",
        a: "Excel is better if you want formulas to calculate line totals and tax. Word is fine for very simple invoices with one or two lines. Many people now skip both and use a free online invoice generator that handles layout and maths for them.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To make an invoice in Word, open a new document, either pick an invoice template from Word's template gallery or insert a table for your line items, then add your business details, the client's billing details, a unique invoice number, the issue and due dates, each service with its quantity and rate, the total due and your payment instructions. Check every calculation by hand, then save the file as a PDF and email the PDF to your client.</p>

<p>This guide walks through both routes (starting from a Word invoice template and building one from a blank document) with a worked example, a field checklist and the mistakes that cause Word invoices to be rejected. If you would rather not format tables at all, our <a href="/invoice-generator">free invoice generator</a> does the layout and maths for you and exports a PDF in a few minutes.</p>

<h2>Is Word a good tool for making an invoice?</h2>
<p>Microsoft Word is fine for occasional, simple invoices: a single project fee, a couple of service lines, no complicated tax. It is familiar, it prints well and it lets you control fonts and spacing. The weakness is arithmetic. Word is a word processor, so line totals, subtotals and tax are typed by hand unless you set up table formula fields, and those fields do not update by themselves.</p>
<table><thead><tr><th>Factor</th><th>Word invoice</th><th>Online invoice generator</th></tr></thead><tbody>
<tr><td>Cost</td><td>Free if you already own Word</td><td>Free</td></tr>
<tr><td>Automatic calculations</td><td>No (manual field updates only)</td><td>Yes</td></tr>
<tr><td>Layout control</td><td>Full, but tables can shift</td><td>Ready-made templates</td></tr>
<tr><td>Risk of typos in totals</td><td>High</td><td>Low</td></tr>
<tr><td>PDF export</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Best for</td><td>One or two simple invoices a month</td><td>Regular invoicing, multiple line items, tax</td></tr>
</tbody></table>
<p>If you invoice more than a few times a month, compare this approach with <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a>, where formulas do the maths for you.</p>

<h2>What to include on a Word invoice</h2>
<p>Whatever layout you choose, the invoice has to carry the same core information. Before you start formatting, collect:</p>
<ul>
<li>The word <strong>Invoice</strong> as a clear heading</li>
<li>Your business or trading name, address, email and phone number</li>
<li>Your tax ID if you are registered (EIN, VAT number and so on)</li>
<li>The client's legal name and billing address, plus a PO number if they gave you one</li>
<li>A unique invoice number</li>
<li>The issue date and a specific due date</li>
<li>Line items: description, quantity, rate and amount</li>
<li>Subtotal, any discount or tax, and the total due</li>
<li>Payment instructions and your payment terms (for example Net 30)</li>
</ul>
<p>Our guide on <a href="/blog/how-to-write-an-invoice">how to write an invoice</a> explains the wording for each of these fields in more detail.</p>

<h2>Method 1: How to make an invoice in Word from a template</h2>
<p>Starting from a template is the quickest way to make an invoice in Word because the layout is already built. Menu names vary slightly between Word for Windows, Mac and the web version, so the steps below use general terms.</p>
<ol>
<li><strong>Open the template gallery.</strong> Start a new document and look for the option to browse templates rather than a blank page.</li>
<li><strong>Search for "invoice".</strong> Preview a few designs and choose one with a clear table for line items and enough space for payment details. Simple, high-contrast layouts read best.</li>
<li><strong>Save it as your master copy.</strong> Before typing anything client-specific, save the file with your business details filled in as something like <code>Invoice-Master.docx</code>. You will copy this file for every new invoice.</li>
<li><strong>Replace the placeholder text.</strong> Click each placeholder and overwrite it with your details. Delete any fields you don't use rather than leaving sample text behind.</li>
<li><strong>Add your logo.</strong> Insert your logo image into the header area and resize it so it doesn't push the table onto a second page.</li>
<li><strong>Fill in the client and line items.</strong> Work through the steps in the next section for the invoice-specific content.</li>
</ol>

<h2>Method 2: How to create an invoice in Word from a blank document</h2>
<p>Building your own layout takes longer the first time, but you end up with a clean, reusable file that contains exactly the fields you need.</p>

<h3>Step 1: Set up the header</h3>
<p>Type <strong>INVOICE</strong> at the top in a large, bold font. Below it, on the left, add your business name, address, email and tax ID. On the right, add the invoice number, issue date and due date. A two-column table with invisible borders is the easiest way to keep these blocks aligned.</p>

<h3>Step 2: Add the "Bill to" block</h3>
<p>Under the header, add a <strong>Bill to</strong> label followed by the client's legal business name, billing contact, address and tax ID if required. Include a PO number line if your client uses purchase orders.</p>

<h3>Step 3: Insert the line-item table</h3>
<p>Insert a table with four columns (<strong>Description</strong>, <strong>Qty</strong>, <strong>Rate</strong> and <strong>Amount</strong>) and one row per item plus a header row. Right-align the number columns so decimals line up. Leave a few spare rows; you can delete empty ones before you send.</p>

<h3>Step 4: Add the totals rows</h3>
<p>Below the items, add rows for <strong>Subtotal</strong>, <strong>Discount</strong> or <strong>Tax</strong> if they apply, and <strong>Total due</strong>. Make the total bold so it is the first number the client sees. If you want Word to add up the Amount column, place the cursor in the subtotal cell and insert a table formula such as <code>=SUM(ABOVE)</code>. Remember that this field will not refresh automatically; select it and update the field after every change, or simply calculate totals yourself and double-check them.</p>

<h3>Step 5: Add payment details and notes</h3>
<p>Under the table, state how to pay (bank transfer details, a payment link or accepted methods), the payment terms, and any late fee you agreed in your contract. Add a short thank-you line. If you charge sales tax, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the tax figure before you type it in.</p>

<h3>Step 6: Number and date the invoice</h3>
<p>Give the invoice a unique number in a consistent format, such as <code>INV-2026-0042</code>. If you don't have a scheme yet, our <a href="/tools/invoice-number-generator">invoice number generator</a> suggests one. Write the due date as a real calendar date, for example "Due 21 November 2026", not just "Net 30".</p>

<h3>Step 7: Save as PDF and send</h3>
<p>Save your working copy as a .docx, then use Word's save-as or export option to create a PDF. Open the PDF to confirm that nothing shifted, then email it. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> includes email wording you can reuse.</p>

<h2>Worked example: a simple Word invoice</h2>
<p>Here is the line-item table for a freelance copywriter billing a small business. The maths is checked so you can use it as a model.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Website copy: home, about, services, pricing and contact pages</td><td>5</td><td>180.00</td><td>900.00</td></tr>
<tr><td>SEO meta titles and descriptions</td><td>20</td><td>15.00</td><td>300.00</td></tr>
<tr><td>Additional revision round (hours)</td><td>2</td><td>75.00</td><td>150.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>1,350.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>1,350.00</strong></td></tr>
</tbody></table>
<p>Above the table sit the header (INV-2026-0042, issued 22 October 2026, due 21 November 2026) and the Bill to block. Below it: "Payment by bank transfer within 30 days. Please quote the invoice number as your payment reference." No sales tax is shown because the writer's services are not taxable in this example; always check your own local rules.</p>

<h2>Common mistakes when making invoices in Word</h2>
<ul>
<li><strong>Totals that don't match the lines.</strong> You change a quantity but forget to retype the amount and the subtotal. Re-add the column every time.</li>
<li><strong>Duplicate invoice numbers.</strong> Copying last month's file and forgetting to change the number is the classic Word mistake. Keep a simple log of issued numbers.</li>
<li><strong>Leftover placeholder text.</strong> "Company Name" or "Lorem ipsum" left in a corner looks careless and can confuse accounts payable.</li>
<li><strong>Sending the .docx.</strong> An editable file can reflow on another computer. Always send a PDF.</li>
<li><strong>Vague descriptions.</strong> "Work done" invites questions. Name the deliverable, the period or the hours.</li>
</ul>
<p>For a longer list, see our roundup of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>, and run through the <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> before sending.</p>

<h2>Word vs Google Docs vs an invoice generator</h2>
<p>Word and Google Docs work in much the same way: both are document editors with tables, and neither recalculates totals reliably. Google Docs adds easy sharing and automatic cloud saving. See <a href="/blog/how-to-make-an-invoice-in-google-docs">how to make an invoice in Google Docs</a> if you prefer working in a browser. An online invoice generator removes the formatting step entirely: you fill in fields, the totals calculate as you type, and the layout comes from professional templates such as <a href="/invoice-templates/classic">Classic</a>. For a broader comparison of methods, read <a href="/blog/how-to-create-an-invoice">how to create an invoice step by step</a>.</p>

<h2>Create your invoice without the formatting</h2>
<p>A Word invoice works, but every total is your responsibility. If you want the same professional result with automatic maths, open the <a href="/invoice-generator">free invoice generator</a>, choose the clean <a href="/invoice-templates/minimal">Minimal invoice template</a>, fill in your details and download a PDF in minutes.</p>
`,
  },
  {
    slug: "how-to-make-an-invoice-in-excel",
    title: "How to Make an Invoice in Excel (With Formulas): 2026 Guide",
    description:
      "How to make an invoice in Excel step by step, with the exact formulas for line totals, subtotal, discount, tax, due date and balance due, plus PDF export tips.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "google-sheets-invoice-template",
      "how-to-make-an-invoice-in-word",
      "invoice-numbering-system",
    ],
    faqs: [
      {
        q: "What formula do I use to calculate an invoice total in Excel?",
        a: "Multiply quantity by rate for each line, for example =B12*C12, then add the line amounts with =SUM(D12:D21). Add tax and subtract any discount in separate cells, and the total is subtotal minus discount plus tax.",
      },
      {
        q: "How do I calculate the due date in Excel?",
        a: "Enter the issue date in one cell and add the number of days in your payment terms, for example =B6+30 for Net 30. Format the result cell as a date so it displays correctly.",
      },
      {
        q: "Does Excel have a free invoice template?",
        a: "Yes, Excel's template gallery normally includes several invoice templates. Check that the formulas cover every row you need and that tax is calculated the way your jurisdiction requires before relying on one.",
      },
      {
        q: "How do I stop invoice formulas from breaking in Excel?",
        a: "Lock the formula cells and protect the sheet so only input cells can be edited, use absolute references such as $D$25 for fixed rates, and build enough line-item rows that you never have to insert new ones outside the summed range.",
      },
      {
        q: "Can I send an Excel invoice to a client?",
        a: "Send a PDF export rather than the .xlsx file. A PDF cannot be edited by accident, looks the same on any device, and does not expose your formulas or other sheets in the workbook.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To make an invoice in Excel, set up a header with your business and client details, an invoice number and dates, then build a line-item table with Description, Qty, Rate and Amount columns. Use <code>=B12*C12</code> for each line amount, <code>=SUM(D12:D21)</code> for the subtotal, and separate cells for discount, tax and the total due. Lock the formula cells, save a master copy, and export each finished invoice to PDF before sending.</p>

<p>This guide gives you a complete cell-by-cell layout, every formula you need (including tax, discount, due date and balance due), a worked example and tips for keeping a spreadsheet invoice error-free. If you would rather skip the setup, our <a href="/invoice-generator">free online invoice generator</a> already does these calculations and produces a polished PDF.</p>

<h2>Why make an invoice in Excel?</h2>
<p>Excel's big advantage over a word processor is that it calculates. Change a quantity and the line total, subtotal, tax and amount due all update. That makes an Excel invoice template a good fit for people who bill several line items, apply tax, or like to keep their invoice history in one workbook. The trade-off is maintenance: a single broken formula or a row inserted outside the summed range can produce a wrong total that looks perfectly believable.</p>
<table><thead><tr><th>Approach</th><th>Automatic maths</th><th>Setup time</th><th>Main risk</th></tr></thead><tbody>
<tr><td>Excel template from the gallery</td><td>Yes</td><td>Low</td><td>Hidden formula assumptions</td></tr>
<tr><td>Excel invoice built from scratch</td><td>Yes</td><td>30–60 minutes once</td><td>Formula errors you introduce</td></tr>
<tr><td>Word or Google Docs</td><td>No</td><td>Low</td><td>Typed totals that don't add up</td></tr>
<tr><td>Online invoice generator</td><td>Yes</td><td>None</td><td>Few: fields are validated</td></tr>
</tbody></table>

<h2>The Excel invoice layout we'll build</h2>
<p>The formulas below refer to this layout. You can move things around, but update the cell references if you do.</p>
<table><thead><tr><th>Cell / range</th><th>Contents</th></tr></thead><tbody>
<tr><td>A1</td><td>INVOICE (heading)</td></tr>
<tr><td>A2:A5</td><td>Your business name, address, email, tax ID</td></tr>
<tr><td>B4</td><td>Invoice sequence number (e.g. 42)</td></tr>
<tr><td>B5</td><td>Formatted invoice number</td></tr>
<tr><td>B6</td><td>Issue date</td></tr>
<tr><td>B7</td><td>Payment terms in days (e.g. 30)</td></tr>
<tr><td>B8</td><td>Due date</td></tr>
<tr><td>A9:A10</td><td>Bill to: client name and address</td></tr>
<tr><td>A11:D11</td><td>Column headers: Description, Qty, Rate, Amount</td></tr>
<tr><td>A12:D21</td><td>Ten line-item rows</td></tr>
<tr><td>D23</td><td>Subtotal</td></tr>
<tr><td>C24 / D24</td><td>Discount rate / discount amount</td></tr>
<tr><td>C25 / D25</td><td>Tax rate / tax amount</td></tr>
<tr><td>D26</td><td>Total</td></tr>
<tr><td>D27</td><td>Amount paid</td></tr>
<tr><td>D28</td><td>Balance due</td></tr>
</tbody></table>

<h2>How to make an invoice in Excel: step by step</h2>

<h3>Step 1: Start a new workbook or template</h3>
<p>Open Excel and either start a blank workbook or search the template gallery for "invoice". A gallery template saves time, but click into the total cells and read the formulas before trusting it. The rest of this guide assumes a blank sheet so you understand every cell.</p>

<h3>Step 2: Build the header</h3>
<p>Type <strong>INVOICE</strong> in A1 and make it large and bold. Add your business details in A2:A5. In the right-hand area, add labels for invoice number, issue date, terms and due date. Enter the client's legal name and billing address under a <strong>Bill to</strong> label.</p>

<h3>Step 3: Generate the invoice number</h3>
<p>Type the sequence number (for example <code>42</code>) in B4, then put this formula in B5 to create a consistently formatted number:</p>
<p><code>="INV-"&amp;TEXT(B6,"yyyy")&amp;"-"&amp;TEXT(B4,"0000")</code></p>
<p>With an issue date in 2026 this returns <code>INV-2026-0042</code>. Increase B4 by one for every new invoice and record each number in a log. Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains why gaps and duplicates matter, and the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</p>

<h3>Step 4: Calculate the due date</h3>
<p>Enter the issue date in B6 (or use <code>=TODAY()</code> only while drafting; replace it with a fixed date before sending, because <code>TODAY()</code> changes every day). Enter your terms in days in B7, then in B8 use:</p>
<p><code>=B6+B7</code></p>
<p>Format B8 as a date. For Net 30 terms, an invoice issued on 22 October 2026 is due on 21 November 2026. See <a href="/blog/invoice-payment-terms">invoice payment terms explained</a> if you're unsure which terms to offer.</p>

<h3>Step 5: Create the line-item formulas</h3>
<p>In D12, enter a formula that multiplies quantity by rate but stays blank when the row is empty:</p>
<p><code>=IF(B12="","",B12*C12)</code></p>
<p>Copy it down to D21. The simple version, <code>=B12*C12</code>, works too, but it shows 0.00 on every unused row. Format columns C and D as currency or as numbers with two decimal places.</p>

<h3>Step 6: Add subtotal, discount and tax</h3>
<p>Use these formulas in the summary area:</p>
<ul>
<li>Subtotal in D23: <code>=SUM(D12:D21)</code> (SUM ignores the blank text values in empty rows)</li>
<li>Discount rate in C24 (e.g. 5%), discount amount in D24: <code>=ROUND(D23*C24,2)</code></li>
<li>Tax rate in C25 (e.g. 8%), tax amount in D25: <code>=ROUND((D23-D24)*C25,2)</code></li>
<li>Total in D26: <code>=D23-D24+D25</code></li>
</ul>
<p>Wrapping tax and discount in <code>ROUND</code> keeps the displayed figures and the calculated figures identical to the cent. Whether tax applies before or after a discount, and to which items, depends on local rules. Check with your tax authority or accountant, and use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to sanity-check the result.</p>

<h3>Step 7: Track payments and balance due</h3>
<p>If the client paid a deposit, enter it in D27 and put the balance due in D28:</p>
<p><code>=D26-D27</code></p>
<p>Make D28 bold and label it <strong>Balance due</strong>. This is the number the client should pay.</p>

<h3>Step 8: Add payment instructions and notes</h3>
<p>Below the totals, add your bank details or payment link, accepted payment methods, the due date restated in words, and any late-fee terms from your contract.</p>

<h3>Step 9: Protect the formulas</h3>
<p>Unlock only the input cells (descriptions, quantities, rates, rates in C24 and C25, dates and client details), then protect the sheet. This stops you from typing over a formula by accident. If you ever copy a rate into many formulas, use an absolute reference such as <code>$C$25</code> so it doesn't shift when copied.</p>

<h3>Step 10: Save a master and export to PDF</h3>
<p>Save the blank version as an Excel template or as <code>Invoice-Master.xlsx</code>. For each new invoice, save a copy with the invoice number in the file name, set the print area to the invoice, and export to PDF. Send the PDF, never the workbook.</p>

<h2>Worked example: Excel invoice with discount and tax</h2>
<table><thead><tr><th>Row</th><th>Description</th><th>Qty (B)</th><th>Rate (C)</th><th>Amount (D)</th></tr></thead><tbody>
<tr><td>12</td><td>Product photography: half-day sessions</td><td>3</td><td>450.00</td><td>1,350.00</td></tr>
<tr><td>13</td><td>Image retouching (hours)</td><td>12</td><td>85.00</td><td>1,020.00</td></tr>
<tr><td>14</td><td>Studio prop rental</td><td>1</td><td>230.00</td><td>230.00</td></tr>
<tr><td>23</td><td colspan="3">Subtotal <code>=SUM(D12:D21)</code></td><td>2,600.00</td></tr>
<tr><td>24</td><td colspan="3">Discount 5% <code>=ROUND(D23*C24,2)</code></td><td>130.00</td></tr>
<tr><td>25</td><td colspan="3">Tax 8% <code>=ROUND((D23-D24)*C25,2)</code></td><td>197.60</td></tr>
<tr><td>26</td><td colspan="3">Total <code>=D23-D24+D25</code></td><td>2,667.60</td></tr>
<tr><td>27</td><td colspan="3">Amount paid (deposit)</td><td>1,000.00</td></tr>
<tr><td>28</td><td colspan="3"><strong>Balance due</strong> <code>=D26-D27</code></td><td><strong>1,667.60</strong></td></tr>
</tbody></table>
<p>The 8% tax rate is illustrative only. The taxable amount here is 2,600.00 − 130.00 = 2,470.00, and 8% of that is 197.60.</p>

<h2>Common Excel invoice mistakes</h2>
<ul>
<li><strong>Rows outside the SUM range.</strong> Inserting row 22 for an extra item when the subtotal sums D12:D21 silently leaves it out. Build enough rows up front, or insert rows inside the range.</li>
<li><strong>Hard-coded totals.</strong> Typing a number over a formula once breaks every future invoice made from that file.</li>
<li><strong>Floating-point pennies.</strong> Without <code>ROUND</code>, tax can display 197.60 but calculate as 197.6000001, which occasionally produces a one-cent mismatch.</li>
<li><strong>Forgetting to change the number and date.</strong> Duplicated invoice numbers are one of the most common <a href="/blog/common-invoice-mistakes">invoice mistakes</a>.</li>
<li><strong>Sending the workbook.</strong> Other tabs, client lists or notes can travel with the file.</li>
</ul>

<h2>Excel vs Google Sheets for invoices</h2>
<p>The formulas in this guide work almost identically in Google Sheets. Sheets adds cloud saving and easy sharing, plus <code>ARRAYFORMULA</code> for filling a whole column at once. Our <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template guide</a> shows that version. If you are deciding between a spreadsheet and a document editor, see <a href="/blog/how-to-make-an-invoice-in-word">how to make an invoice in Word</a> for the trade-offs.</p>

<h2>When to move beyond an Excel invoice</h2>
<p>Excel works well until you're sending many invoices a month, chasing several late payments, or need branded layouts for different clients. At that point a dedicated tool saves time. An invoice generator gives you the same automatic subtotal, discount, tax and amount-paid fields without formulas to maintain. Need a field-by-field refresher on what every invoice must show? Read <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>.</p>

<h2>Create your invoice in minutes</h2>
<p>Spreadsheets are powerful, but you don't need to build one to send a professional invoice. Open the <a href="/invoice-generator">free invoice generator</a>, pick the structured <a href="/invoice-templates/corporate">Corporate invoice template</a>, enter your line items and download a PDF with every total calculated for you.</p>
`,
  },
  {
    slug: "how-to-make-an-invoice-in-google-docs",
    title: "How to Make an Invoice in Google Docs: Free Step-by-Step Guide",
    description:
      "How to make an invoice in Google Docs from a template or blank doc: header, line-item table, totals, sharing and PDF download, with a worked example for 2026.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "google-sheets-invoice-template",
      "how-to-make-an-invoice-in-word",
      "how-to-send-an-invoice",
    ],
    faqs: [
      {
        q: "Does Google Docs have an invoice template?",
        a: "Google's template gallery has offered invoice-style designs, though the selection varies and is often larger in Google Sheets than in Docs. You can also build your own invoice in a blank document in about fifteen minutes and reuse it.",
      },
      {
        q: "Can Google Docs calculate invoice totals?",
        a: "No. Tables in Google Docs do not run formulas, so you calculate line totals and the total due yourself. If you want automatic maths, build the invoice in Google Sheets or use an online invoice generator.",
      },
      {
        q: "Should I share a Google Docs link or send a PDF invoice?",
        a: "Send a PDF. A shared link can be edited, changed after the fact or lose access permissions, while a PDF is a fixed record that accounts payable teams can file.",
      },
      {
        q: "How do I reuse a Google Docs invoice for the next client?",
        a: "Keep a master invoice document with only your business details filled in, then make a copy for each new invoice and rename it with the invoice number and client name. Never edit an invoice you have already sent.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To make an invoice in Google Docs, open a new document or an invoice template from the template gallery, add your business details and the client's billing details, insert a table for line items with Description, Qty, Rate and Amount columns, and type in the subtotal, any tax and the total due. Add your invoice number, issue date, due date and payment instructions, then download the document as a PDF and email the PDF to your client.</p>

<p>Below you'll find step-by-step instructions for building a reusable Google Docs invoice template, a worked example with checked totals, and tips for sharing and storing invoices in Google Drive. If you want the totals calculated for you, our <a href="/invoice-generator">free invoice generator</a> runs in the same browser and exports a PDF in a few minutes.</p>

<h2>Why use Google Docs for invoices?</h2>
<p>Google Docs is free, runs in any browser and saves automatically to Google Drive, so your invoices are available on your laptop and your phone. It's a reasonable choice for freelancers who send a handful of simple invoices a month. Its main limitation is that Docs tables are just text: they won't multiply quantity by rate or add up a column, so every number is typed and checked by you.</p>
<table><thead><tr><th>Tool</th><th>Calculates totals</th><th>Works offline</th><th>Good for</th></tr></thead><tbody>
<tr><td>Google Docs</td><td>No</td><td>With offline mode enabled</td><td>Simple invoices with one to three lines</td></tr>
<tr><td>Google Sheets</td><td>Yes, with formulas</td><td>With offline mode enabled</td><td>Many line items, tax and discounts</td></tr>
<tr><td>Microsoft Word</td><td>Limited table fields</td><td>Yes</td><td>Users already working in Office</td></tr>
<tr><td>Online invoice generator</td><td>Yes</td><td>Needs a browser</td><td>Regular, professional-looking invoices</td></tr>
</tbody></table>

<h2>What every Google Docs invoice needs</h2>
<ul>
<li>The heading <strong>Invoice</strong> and a unique invoice number</li>
<li>Your business name, address, contact details and tax ID if registered</li>
<li>The client's legal name, billing address and PO number if they use one</li>
<li>Issue date and a specific due date</li>
<li>A line-item table with quantities, rates and amounts</li>
<li>Subtotal, tax or discount lines, and the total due</li>
<li>Payment instructions and terms</li>
</ul>
<p>New to billing? Our explainer on <a href="/blog/what-is-an-invoice">what an invoice is</a> covers why each field matters.</p>

<h2>How to make an invoice in Google Docs: 8 steps</h2>
<p>Google updates its menus from time to time, so these steps use general terms rather than exact menu paths.</p>
<ol>
<li><strong>Create the document.</strong> Open Google Docs and start a blank document, or browse the template gallery for an invoice design. Name it <code>Invoice Master</code>.</li>
<li><strong>Add the header.</strong> Type <strong>INVOICE</strong> at the top in a large heading style. Insert a two-column table and remove its borders: put your business details in the left cell and the invoice number, issue date and due date in the right cell. This keeps both blocks aligned on every screen.</li>
<li><strong>Insert your logo.</strong> Add your logo image to the header area and keep it small enough that the line items stay on page one.</li>
<li><strong>Add the Bill to block.</strong> Below the header, add a <strong>Bill to</strong> label, then the client's legal business name, contact person, billing address and any PO number.</li>
<li><strong>Insert the line-item table.</strong> Add a table with four columns (Description, Qty, Rate, Amount) and enough rows for your usual number of items plus three rows for Subtotal, Tax and Total. Right-align the number columns.</li>
<li><strong>Calculate and type the totals.</strong> Multiply each quantity by its rate, add the amounts, and apply any tax. Use a calculator or our <a href="/tools/sales-tax-calculator">sales tax calculator</a>, then recheck the total once more before moving on.</li>
<li><strong>Add payment details.</strong> Under the table, list how to pay (bank transfer details or a payment link), the payment terms and a polite thank-you line. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> suggests clear wording.</li>
<li><strong>Download as PDF and send.</strong> Use the download option to save a PDF document, open it to check the layout, and attach it to an email. Avoid sending an edit link as your invoice.</li>
</ol>

<h2>Worked example: freelance translation invoice</h2>
<p>This example shows a translator's invoice built in a Google Docs table. Every figure has been checked.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Translation, Spanish to English: product manual (words)</td><td>4,200</td><td>0.12</td><td>504.00</td></tr>
<tr><td>Proofreading and formatting (hours)</td><td>3</td><td>40.00</td><td>120.00</td></tr>
<tr><td>Rush delivery fee (48-hour turnaround)</td><td>1</td><td>50.00</td><td>50.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>674.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>674.00</strong></td></tr>
</tbody></table>
<p>The header shows invoice number INV-2026-0018, issued 22 October 2026, due 5 November 2026 (Net 14). The notes read: "Please pay by bank transfer and use INV-2026-0018 as the reference."</p>

<h2>How to reuse your Google Docs invoice template</h2>
<p>The time savings come from never building the layout twice. A simple routine:</p>
<ul>
<li><strong>Keep one master.</strong> Your master document contains only your business details, logo and empty tables.</li>
<li><strong>Make a copy for each invoice.</strong> Use the make-a-copy option and rename it, for example <code>INV-2026-0018 - Acme Ltd</code>.</li>
<li><strong>Update the number and dates first.</strong> That way you can't forget them. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you settle on a format if you don't have one.</li>
<li><strong>File by year.</strong> Store invoice docs and their PDFs in a Drive folder per year so you can find them at tax time.</li>
<li><strong>Don't edit sent invoices.</strong> If something was wrong, issue a correction or credit note rather than silently changing the document.</li>
</ul>

<h2>Bringing calculated totals into Google Docs</h2>
<p>If typing totals by hand worries you, there is a middle ground: calculate the line items in Google Sheets, then copy the range into your Doc. Docs can paste a Sheets range as a linked table that you can refresh when the sheet changes. It works, but it adds another file to manage. For most people it's simpler to build the whole invoice in Sheets (see our <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a> guide with formulas) or to use a generator that calculates as you type.</p>

<h2>Common Google Docs invoice mistakes</h2>
<ul>
<li><strong>Sharing an editable link instead of a PDF.</strong> The client, or anyone they forward it to, could change it.</li>
<li><strong>Arithmetic errors.</strong> With no formulas, a changed quantity doesn't update the total. Recheck every time.</li>
<li><strong>Tables breaking across pages.</strong> A long table can split awkwardly in the PDF. Preview the download before sending.</li>
<li><strong>Missing due date.</strong> "Net 30" alone leaves room for argument; write the actual date.</li>
</ul>
<p>Our checklist of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> covers more, and if you also use Office, compare with <a href="/blog/how-to-make-an-invoice-in-word">making an invoice in Word</a>.</p>

<h2>Organizing Google Docs invoices in Drive</h2>
<p>Because every invoice you make in Google Docs is a separate file, a little structure saves a lot of searching later. A system that works for most freelancers:</p>
<ol>
<li><strong>Create a top-level Invoices folder</strong> with one subfolder per year, such as <code>2026</code>.</li>
<li><strong>Keep two files per invoice:</strong> the editable Doc and the PDF you actually sent. The PDF is your record of what the client received.</li>
<li><strong>Name both files the same way,</strong> starting with the invoice number so they sort in order: <code>INV-2026-0018 - Acme Ltd - 674.00</code>.</li>
<li><strong>Keep a simple list of issued invoices</strong> (invoice number, client, amount, due date and paid date) in a single sheet or document so you can see at a glance who still owes you.</li>
<li><strong>Restrict sharing.</strong> Keep the folder private to you (and your accountant, if needed). Clients only ever receive PDFs.</li>
</ol>
<p>When a client pays, move nothing and delete nothing; just mark the invoice as paid in your list and note the date. At tax time, the year folder and the list together give you a complete, ordered record of your income.</p>

<h2>Sending your Google Docs invoice</h2>
<p>Attach the PDF to an email addressed to the client's accounts payable contact, with the invoice number, amount and due date in the subject line. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> has ready-to-use email templates, and if this is your first time billing a new customer, read <a href="/blog/how-to-invoice-a-client">how to invoice a client</a> for what to confirm before you send.</p>

<h2>Make your invoice the faster way</h2>
<p>Google Docs gets the job done for simple bills, but you still do all the maths and formatting. Open the <a href="/invoice-generator">free invoice generator</a>, choose the airy <a href="/invoice-templates/nordic">Nordic invoice template</a>, and download a calculated, professional PDF in minutes, no copying master documents required.</p>
`,
  },
  {
    slug: "google-sheets-invoice-template",
    title: "Google Sheets Invoice Template: Build One With Formulas (2026)",
    description:
      "Build a free Google Sheets invoice template with working formulas for line totals, tax, due dates and balance due, plus tips for reuse, logging and PDF export.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-make-an-invoice-in-excel",
      "how-to-make-an-invoice-in-google-docs",
      "invoice-numbering-system",
    ],
    faqs: [
      {
        q: "Does Google Sheets have a free invoice template?",
        a: "The Google Sheets template gallery has typically included at least one invoice template, and you can always build your own in a blank spreadsheet. Whichever you use, check the formulas before relying on the totals.",
      },
      {
        q: "What is the formula for an invoice total in Google Sheets?",
        a: "Use =B12*C12 for each line amount, =SUM(D12:D21) for the subtotal, a separate cell for tax such as =ROUND(D23*C24,2), and add them for the total, for example =D23+D24+D25 when shipping is in D25.",
      },
      {
        q: "How do I turn a Google Sheet into a PDF invoice?",
        a: "Use the download option and choose PDF, then adjust the print settings so only the invoice range or tab is exported, scaled to fit the page width. Open the PDF to check it before you send it.",
      },
      {
        q: "How do I make a new invoice from my Google Sheets template?",
        a: "Duplicate the template tab or make a copy of the whole file, rename it with the new invoice number, increase the invoice number, update the dates and clear the old line items.",
      },
      {
        q: "Can Google Sheets track which invoices are paid?",
        a: "Yes. Add a log tab listing each invoice number, client, issue date, due date, amount and paid date. A simple formula such as =IF(F2=\"\",\"Unpaid\",\"Paid\") shows the status at a glance.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Google Sheets invoice template is a reusable spreadsheet with your business details, a line-item table and formulas that calculate each line, the subtotal, tax and total due. Build one with <code>=B12*C12</code> for line amounts, <code>=SUM(D12:D21)</code> for the subtotal and a rounded tax formula, then duplicate the tab for each new invoice and download it as a PDF to send.</p>

<p>This guide shows you how to build a Google Sheets invoice template from a blank sheet, gives every formula with cell references, adds an invoice log for tracking payments and finishes with a worked example. If you'd rather not maintain a spreadsheet, our <a href="/invoice-generator">free invoice generator</a> calculates the same totals and produces a designed PDF without any formulas.</p>

<h2>Why use a Google Sheets invoice template?</h2>
<p>Google Sheets combines the automatic maths of a spreadsheet with cloud saving and sharing. Your template is available on any device, your invoice history lives in one file, and you can add a tracking tab that shows who has paid. It's a good fit for freelancers and small businesses who are comfortable with formulas and want something free and flexible.</p>
<table><thead><tr><th>Feature</th><th>Google Sheets template</th><th>Excel template</th><th>Invoice generator</th></tr></thead><tbody>
<tr><td>Price</td><td>Free</td><td>Included with Office</td><td>Free</td></tr>
<tr><td>Automatic totals</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Cloud saving</td><td>Built in</td><td>Depends on setup</td><td>Draft saved in your browser</td></tr>
<tr><td>Whole-column formulas</td><td>ARRAYFORMULA</td><td>Dynamic arrays / fill down</td><td>Not needed</td></tr>
<tr><td>Design options</td><td>Basic formatting</td><td>Basic formatting</td><td>Professional templates</td></tr>
</tbody></table>
<p>Prefer Microsoft Office? The same layout works in Excel; see <a href="/blog/how-to-make-an-invoice-in-excel">how to make an invoice in Excel</a>.</p>

<h2>Template layout and cell map</h2>
<p>The formulas below assume this layout. If you change it, adjust the references.</p>
<ul>
<li><strong>A1:</strong> INVOICE heading; <strong>A2:A5:</strong> your business details</li>
<li><strong>B4:</strong> invoice sequence number; <strong>B5:</strong> formatted invoice number</li>
<li><strong>B6:</strong> issue date; <strong>B7:</strong> terms in days; <strong>B8:</strong> due date</li>
<li><strong>A9:A10:</strong> Bill to block</li>
<li><strong>A11:D11:</strong> headers: Description, Qty, Rate, Amount</li>
<li><strong>A12:D21:</strong> ten line-item rows</li>
<li><strong>D23:</strong> subtotal; <strong>C24/D24:</strong> tax rate and tax; <strong>D25:</strong> shipping; <strong>D26:</strong> total; <strong>D27:</strong> amount paid; <strong>D28:</strong> balance due</li>
</ul>

<h2>How to build a Google Sheets invoice template in 9 steps</h2>

<h3>Step 1: Create the spreadsheet</h3>
<p>Open Google Sheets and start a blank spreadsheet, or check the template gallery for an invoice design. Rename the file <code>Invoices 2026</code> and the first tab <code>Template</code>.</p>

<h3>Step 2: Add the header and client block</h3>
<p>Type INVOICE in A1 and format it large and bold. Enter your business name, address, email and tax ID in A2:A5. Add labels and empty cells for invoice number, dates and terms, and a Bill to area for the client's legal name and address. Insert your logo image over the cells in the top-right corner.</p>

<h3>Step 3: Format the invoice number</h3>
<p>Enter the sequence number in B4 and this formula in B5:</p>
<p><code>="INV-"&amp;TEXT(B6,"yyyy")&amp;"-"&amp;TEXT(B4,"0000")</code></p>
<p>With 7 in B4 and a 2026 issue date, it shows <code>INV-2026-0007</code>. Our <a href="/tools/invoice-number-generator">invoice number generator</a> offers other formats, and the <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains how to avoid gaps and duplicates.</p>

<h3>Step 4: Calculate the due date</h3>
<p>Enter the issue date in B6 and the number of days in B7 (for example 14), then in B8:</p>
<p><code>=B6+B7</code></p>
<p>Format B8 as a date. Avoid leaving <code>=TODAY()</code> in the issue date of a sent invoice: it changes every day you open the file.</p>

<h3>Step 5: Add the line-item formula</h3>
<p>You can put <code>=IF(B12="","",B12*C12)</code> in D12 and fill it down to D21. Or, in Google Sheets, use one formula in D12 that fills the whole column:</p>
<p><code>=ARRAYFORMULA(IF(B12:B21="","",B12:B21*C12:C21))</code></p>
<p>Leave D13:D21 empty when you use the ARRAYFORMULA version, otherwise it can't expand and shows an error.</p>

<h3>Step 6: Add subtotal, tax, shipping and total</h3>
<ul>
<li>Subtotal in D23: <code>=SUM(D12:D21)</code></li>
<li>Tax rate in C24 (for example 7.25%) and tax in D24: <code>=ROUND(D23*C24,2)</code></li>
<li>Shipping in D25: typed amount, or 0</li>
<li>Total in D26: <code>=D23+D24+D25</code></li>
<li>Amount paid in D27, balance due in D28: <code>=D26-D27</code></li>
</ul>
<p>Whether shipping or certain items are taxable depends on where you and your customer are. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers the basics, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check figures. Confirm the rules with your tax authority or accountant.</p>

<h3>Step 7: Protect the formula cells</h3>
<p>Use the protected ranges feature to lock D12:D28 and B5 and B8 so they can't be overwritten. Leave descriptions, quantities, rates, dates and the tax rate editable.</p>

<h3>Step 8: Set up the print layout</h3>
<p>Before downloading, select the invoice range and set the export options to print the selection, fit to width, portrait orientation and no gridlines. Save these settings mentally: you'll use them every time.</p>

<h3>Step 9: Create each new invoice</h3>
<p>Duplicate the Template tab and rename the copy with the invoice number. Increase B4 by one, enter the issue date, client and line items, then download the tab as a PDF. Keep the original Template tab untouched.</p>

<h2>Worked example: product invoice with sales tax and shipping</h2>
<table><thead><tr><th>Row</th><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>12</td><td>Hand-poured soy candles, 8 oz</td><td>10</td><td>18.00</td><td>180.00</td></tr>
<tr><td>13</td><td>Gift boxes, set of three candles</td><td>4</td><td>32.00</td><td>128.00</td></tr>
<tr><td>23</td><td colspan="3">Subtotal <code>=SUM(D12:D21)</code></td><td>308.00</td></tr>
<tr><td>24</td><td colspan="3">Sales tax 7.25% <code>=ROUND(D23*C24,2)</code></td><td>22.33</td></tr>
<tr><td>25</td><td colspan="3">Shipping</td><td>12.00</td></tr>
<tr><td>26</td><td colspan="3"><strong>Total</strong> <code>=D23+D24+D25</code></td><td><strong>342.33</strong></td></tr>
</tbody></table>
<p>7.25% of 308.00 is 22.33 after rounding, so the total is 308.00 + 22.33 + 12.00 = 342.33. The rate and the decision not to tax shipping are illustrative only. Listing each product on its own line, as here, makes this an <a href="/blog/itemized-invoice">itemized invoice</a> that buyers can check quickly.</p>

<h2>Add an invoice log tab</h2>
<p>A second tab called <code>Log</code> turns your Google Sheets invoice template into a light tracking system. Use these columns:</p>
<table><thead><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th></tr></thead><tbody>
<tr><td>Invoice no.</td><td>Client</td><td>Issue date</td><td>Due date</td><td>Amount</td><td>Paid date</td><td>Status</td></tr>
</tbody></table>
<p>In G2, use <code>=IF(F2&lt;&gt;"","Paid",IF(TODAY()&gt;D2,"Overdue","Unpaid"))</code> and fill down. To see what you're owed, total the unpaid amounts with <code>=SUMIF(G2:G200,"&lt;&gt;Paid",E2:E200)</code>. If you bill the same clients monthly, our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to keep a regular schedule.</p>

<h2>More useful formulas for your invoice log</h2>
<p>Once the log tab is filling up, a few extra formulas turn it into a small accounts receivable report:</p>
<ul>
<li><strong>Days overdue</strong> (in H2, filled down): <code>=IF(F2&lt;&gt;"",0,MAX(0,TODAY()-D2))</code> returns 0 for paid or not-yet-due invoices and the number of days late otherwise.</li>
<li><strong>Total billed to one client:</strong> <code>=SUMIF(B2:B200,"Acme Ltd",E2:E200)</code></li>
<li><strong>Number of unpaid invoices:</strong> <code>=COUNTIF(G2:G200,"Unpaid")+COUNTIF(G2:G200,"Overdue")</code></li>
<li><strong>Total invoiced this year:</strong> <code>=SUMIFS(E2:E200,C2:C200,"&gt;="&amp;DATE(2026,1,1),C2:C200,"&lt;="&amp;DATE(2026,12,31))</code></li>
<li><strong>Next sequence number:</strong> if you store the plain sequence number (7, 8, 9...) in a hidden column I, <code>=MAX(I2:I200)+1</code> tells you what to type in B4 on the next invoice.</li>
</ul>
<p>Add conditional formatting to the Status column (for example a red fill when it reads Overdue) and you have a quick visual of who to chase this week.</p>

<h2>Common Google Sheets invoice mistakes</h2>
<ul>
<li><strong>Editing the template instead of a copy.</strong> You overwrite last month's figures and lose the record.</li>
<li><strong>Typing into ARRAYFORMULA cells.</strong> One value in D13 breaks the whole column with an error.</li>
<li><strong>Exporting the whole workbook.</strong> Without print settings, the PDF can include your log tab and other invoices.</li>
<li><strong>Sharing the sheet with clients.</strong> A share link exposes every invoice in the file. Send the PDF only.</li>
<li><strong>Unrounded tax.</strong> Use <code>ROUND</code> so the figures shown match the figures summed.</li>
</ul>

<h2>Google Sheets vs Google Docs for invoices</h2>
<p>Docs is easier to format but can't calculate; Sheets calculates but is fiddlier to make look polished. If your invoices are mostly a single fee, <a href="/blog/how-to-make-an-invoice-in-google-docs">making an invoice in Google Docs</a> is fine. For multiple lines, tax and payment tracking, Sheets wins. When you're ready to send, our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> covers email wording and file naming.</p>

<h2>Create a designed invoice without formulas</h2>
<p>A Google Sheets invoice template is a solid free option, but it still needs maintenance. For a ready-made layout with automatic subtotal, tax, shipping and amount paid, open the <a href="/invoice-generator">free invoice generator</a>, try the fresh <a href="/invoice-templates/emerald">Emerald invoice template</a>, or browse all <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "how-to-write-an-invoice",
    title: "How to Write an Invoice: 10 Steps, Example and Free Template",
    description:
      "How to write an invoice step by step: what to include, how to word line items, payment terms and notes, with a worked example and a free template for 2026.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-create-an-invoice",
      "how-to-fill-out-an-invoice",
      "how-to-invoice-a-client",
    ],
    faqs: [
      {
        q: "What should be written on an invoice?",
        a: "An invoice should show the word Invoice, a unique invoice number, issue and due dates, your details, the client's details, a description of each product or service with quantity, rate and amount, any tax or discount, the total due and how to pay.",
      },
      {
        q: "How do I write an invoice for the first time?",
        a: "Collect your client's legal name and billing address, choose a template or invoice generator, give the invoice a starting number, list what you delivered with clear descriptions, add the total and payment instructions, then send it as a PDF.",
      },
      {
        q: "How do I write a description on an invoice?",
        a: "Name the deliverable, the quantity or time, and the period or reference, for example Bathroom retiling labor, 14 hours, 3 to 5 November. Avoid vague words like services or work done on their own.",
      },
      {
        q: "Can I write an invoice by hand?",
        a: "Yes, a handwritten invoice can be valid if it contains all the required information and is legible. It is slower and easier to get wrong, so most businesses use a template or an invoice generator and keep a copy of every invoice.",
      },
      {
        q: "What should I write in the notes section of an invoice?",
        a: "Use the notes for payment instructions, a reminder of the due date, any late-fee terms you agreed, the payment reference to quote, and a short thank-you line.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To write an invoice, start with the word Invoice and a unique invoice number, add the issue date and a specific due date, then list your business details and your client's billing details. Write one line for each product or service with a clear description, quantity, rate and amount, show the subtotal, any tax or discount and the total due, and finish with payment instructions and terms. Send the invoice as a PDF and keep a copy.</p>

<p>This article focuses on the writing itself (what to put in each section and how to word it so the invoice gets approved without questions) with a full worked example. You can follow along in our <a href="/invoice-generator">free invoice generator</a>, which lays out every field for you and calculates the totals.</p>

<h2>What an invoice must include</h2>
<p>Before you write a single line, make sure you have the information each section needs. This table summarizes the parts of an invoice and what to write in each.</p>
<table><thead><tr><th>Section</th><th>What to write</th><th>Example</th></tr></thead><tbody>
<tr><td>Title</td><td>The word Invoice (or Tax Invoice where required)</td><td>INVOICE</td></tr>
<tr><td>Invoice number</td><td>Unique, sequential reference</td><td>INV-2026-0042</td></tr>
<tr><td>Dates</td><td>Issue date and due date</td><td>Issued 22 Oct 2026, due 21 Nov 2026</td></tr>
<tr><td>From</td><td>Your name or business name, address, contact, tax ID</td><td>Rivera Consulting LLC, EIN shown if relevant</td></tr>
<tr><td>Bill to</td><td>Client's legal entity, billing address, PO number</td><td>Northwind Foods Inc., PO 55120</td></tr>
<tr><td>Line items</td><td>Description, quantity, rate, amount</td><td>Strategy workshop, 1, 1,800.00</td></tr>
<tr><td>Totals</td><td>Subtotal, discount, tax, total due</td><td>Total due 2,612.40</td></tr>
<tr><td>Payment</td><td>Methods, bank details or link, terms</td><td>Bank transfer, Net 30</td></tr>
<tr><td>Notes</td><td>Reference to quote, thanks, late-fee terms</td><td>Please quote INV-2026-0042</td></tr>
</tbody></table>
<p>For a deeper explanation of why each field matters, see <a href="/blog/how-to-create-an-invoice">how to create an invoice step by step</a>.</p>

<h2>How to write an invoice in 10 steps</h2>

<h3>Step 1: Choose a professional format</h3>
<p>Use a template rather than a blank page so nothing gets left out. A structured layout like the <a href="/invoice-templates/corporate">Corporate invoice template</a> works for most business clients.</p>

<h3>Step 2: Write a clear title</h3>
<p>Label the document <strong>Invoice</strong>. If you are registered for VAT or GST and your jurisdiction requires it, the title may need to be "Tax Invoice". Don't call a request for payment a quote or a receipt: those are different documents.</p>

<h3>Step 3: Assign a unique invoice number</h3>
<p>Each invoice gets its own number that you never reuse. A format such as <code>INV-2026-0042</code> sorts neatly and shows the year. Our <a href="/tools/invoice-number-generator">invoice number generator</a> builds one for you.</p>

<h3>Step 4: Write the issue date and due date</h3>
<p>Write the date you issue the invoice and the date payment is due. Use a real calendar date for the due date ("Due 21 November 2026") rather than only "Net 30". Our guide to the <a href="/blog/invoice-due-date">invoice due date</a> explains how to choose one, and <a href="/blog/invoice-payment-terms">invoice payment terms explained</a> covers the common options.</p>

<h3>Step 5: Write your business details</h3>
<p>Use your legal or trading name exactly as it appears in your contract, followed by your address, email, phone and tax ID if registered. Consistency helps accounts payable match you to their supplier record.</p>

<h3>Step 6: Write the client's billing details</h3>
<p>Write the name of the legal entity that pays, not the person you work with day to day. Add the billing address and, if the client issued one, the purchase order number. Missing POs are a common reason for invoices bouncing. See <a href="/blog/po-number-on-invoice">what a PO number on an invoice is</a>.</p>

<h3>Step 7: Write specific line-item descriptions</h3>
<p>This is where most invoices succeed or fail. A good description tells the approver what they're paying for without opening another document:</p>
<ul>
<li><strong>Weak:</strong> Consulting</li>
<li><strong>Strong:</strong> Pricing strategy workshop, on-site, 14 October 2026 (half day)</li>
<li><strong>Weak:</strong> Hours</li>
<li><strong>Strong:</strong> Follow-up advisory calls, 4 hours, 15–21 October 2026</li>
</ul>
<p>Keep one product or service per line with its own quantity and rate. Our <a href="/blog/itemized-invoice">itemized invoice guide</a> explains how much detail to give.</p>

<h3>Step 8: Write the totals</h3>
<p>Show the subtotal, then any discount, then tax as its own line, then the total due in bold. If you're registered to charge sales tax, VAT or GST, state the rate and the amount; if you aren't, don't add tax. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the figure.</p>

<h3>Step 9: Write payment instructions and terms</h3>
<p>Spell out exactly how to pay: bank details, a payment link, or accepted cards. State the terms and, if your contract allows, the late fee. Our guide to <a href="/blog/late-payment-fees">charging late payment fees</a> has sample wording.</p>

<h3>Step 10: Write a short note and send</h3>
<p>Add a one-line thank you and the reference the client should quote. Then export as a PDF and send it to the right billing contact. If this is a new customer, read <a href="/blog/how-to-invoice-a-client">how to invoice a client for the first time</a>.</p>

<h2>Worked example: a written consulting invoice</h2>
<p><strong>Invoice INV-2026-0042</strong>: issued 22 October 2026, due 21 November 2026. From Rivera Consulting LLC to Northwind Foods Inc., PO 55120.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Pricing strategy workshop, on-site, 14 Oct 2026 (half day)</td><td>1</td><td>1,800.00</td><td>1,800.00</td></tr>
<tr><td>Follow-up advisory calls, 15–21 Oct 2026 (hours)</td><td>4</td><td>150.00</td><td>600.00</td></tr>
<tr><td>Travel expenses at cost: train and hotel, receipts attached</td><td>1</td><td>212.40</td><td>212.40</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>2,612.40</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>2,612.40</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> "Payment by bank transfer within 30 days. Please quote INV-2026-0042 as your reference. Thank you for your business." No tax line appears because, in this example, the consultant's services aren't subject to sales tax; your situation may differ, so check local rules.</p>

<h2>Wording tips that get invoices paid</h2>
<ul>
<li><strong>Mirror the contract.</strong> Use the same project name, rates and milestones the client agreed to.</li>
<li><strong>Write dates in full.</strong> "21 November 2026" can't be misread the way 11/21 or 21/11 can.</li>
<li><strong>Be polite but direct.</strong> "Payment is due by 21 November 2026" is clearer than "at your earliest convenience".</li>
<li><strong>Use the client's references.</strong> PO numbers, project codes and cost centers speed up approval.</li>
<li><strong>Keep it to one page where possible.</strong> Attach timesheets or receipts separately rather than crowding the invoice.</li>
</ul>

<h2>How to write an invoice for different billing situations</h2>
<p>The structure stays the same, but what you write in the line items changes with how you charge.</p>

<h3>Hourly work</h3>
<p>Write one line per task or per week, with the hours as the quantity and your hourly rate as the rate: "UX research interviews, week of 12 Oct 2026: 9.5 hours at 95.00". Attach or summarize a timesheet if the client asked for one.</p>

<h3>Fixed-price projects</h3>
<p>Use a quantity of 1 and the agreed fee, and name the deliverable plus the quote or contract reference: "Website redesign, per proposal P-2026-07, phase 1 of 2". If you bill in stages, say which stage this is.</p>

<h3>Products</h3>
<p>Write the product name, model or SKU, the number of units and the unit price. Show shipping as its own line, and apply tax only where you're registered and the item is taxable.</p>

<h3>Deposits and partial payments</h3>
<p>On the final invoice, list the full value of the work, then subtract the deposit already paid on a separate line that references the earlier invoice number, so the balance due is unambiguous.</p>

<h3>Expenses and reimbursements</h3>
<p>Write expenses on their own lines, labeled "at cost" or with any agreed markup, and keep the receipts. Mixing expenses into your fee line makes the invoice harder to approve.</p>

<h3>International clients</h3>
<p>State the currency next to every amount or in the totals, write dates with the month in words to avoid day/month confusion, and give international bank details such as IBAN and SWIFT where relevant.</p>

<h2>Writing an invoice vs filling one out</h2>
<p>Writing an invoice is about content: what you say and how you say it. Filling out an invoice is about putting the right data into a template's boxes. If you already have a template and want a box-by-box walkthrough, see <a href="/blog/how-to-fill-out-an-invoice">how to fill out an invoice</a>.</p>

<h2>Write and send your invoice now</h2>
<p>Now you know how to write an invoice that's clear, complete and easy to approve. Open the <a href="/invoice-generator">free invoice generator</a>, choose the polished <a href="/invoice-templates/elegant">Elegant invoice template</a>, and turn your notes into a professional PDF in minutes.</p>
`,
  },
  {
    slug: "how-to-fill-out-an-invoice",
    title: "How to Fill Out an Invoice: Box-by-Box Guide With Example",
    description:
      "How to fill out an invoice box by box: what goes in each field, what to leave blank, a completed example and a checklist to catch errors before sending.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-write-an-invoice",
      "blank-invoice-template",
      "invoice-examples",
    ],
    faqs: [
      {
        q: "How do you fill out an invoice for the first time?",
        a: "Start with your business details, then the client's billing details, a unique invoice number, the issue and due dates, each item with quantity and rate, the totals, and your payment instructions. Check the maths and save it as a PDF before sending.",
      },
      {
        q: "What do I put in the Bill To section of an invoice?",
        a: "Enter the legal name of the business or person who will pay, their billing address and, if required, their tax ID or PO number. Use the details from your contract or purchase order, not just a contact's name.",
      },
      {
        q: "What if a field on my invoice template doesn't apply?",
        a: "Leave optional fields such as PO number, discount or shipping blank or remove them, rather than writing N/A everywhere. Required fields such as invoice number, dates, line items and total due should always be completed.",
      },
      {
        q: "Do I fill out a tax field if I'm not registered for tax?",
        a: "No. If you are not registered to collect sales tax, VAT or GST, leave the tax rate at zero and don't show a tax ID you don't have. Check with your tax authority if you're unsure whether you need to register.",
      },
      {
        q: "Should I fill out an invoice by hand or digitally?",
        a: "Digitally, in most cases. A typed invoice is easier to read, the totals can be calculated automatically, and a PDF copy is easy to store and resend. Handwritten invoices are acceptable if complete and legible.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To fill out an invoice, work through the template from top to bottom: enter your business details, the client's Bill to details, a unique invoice number, the issue date and due date, then one line per product or service with a description, quantity and rate. Add any discount, tax and shipping, confirm the total due, fill in payment instructions and notes, and save the completed invoice as a PDF.</p>

<p>This is a box-by-box guide for anyone holding a template (printed, spreadsheet or online) and wondering exactly what goes where. We cover every common field, what you can leave blank, a completed example and a final checklist. The quickest way to follow along is in our <a href="/invoice-generator">free invoice generator</a>, which has each of these boxes and calculates the totals as you type.</p>

<h2>Before you start: gather this information</h2>
<p>Filling out an invoice is fast when you have everything in front of you. Collect:</p>
<ul>
<li>Your business name, address, email, phone and tax ID (if registered)</li>
<li>The client's legal name, billing address and email for invoices</li>
<li>Any PO number or project reference the client gave you</li>
<li>Dates the work was done or goods were delivered</li>
<li>Quantities, hours or units and the agreed rates</li>
<li>Your bank details or payment link</li>
<li>The payment terms agreed in your contract or quote</li>
</ul>
<p>If you're still choosing what kind of form to use, our <a href="/blog/blank-invoice-template">blank invoice template guide</a> compares printable and digital options.</p>

<h2>How to fill out an invoice: box by box</h2>
<p>Most invoice templates use the same fields in roughly the same order. Here's what to enter in each.</p>
<table><thead><tr><th>Box</th><th>What to enter</th><th>Required?</th></tr></thead><tbody>
<tr><td>Logo</td><td>Your business logo image</td><td>Optional</td></tr>
<tr><td>From / Your details</td><td>Business name, address, email, phone</td><td>Yes</td></tr>
<tr><td>Tax ID</td><td>EIN, VAT number, GST number, TRN or NTN if registered</td><td>If registered</td></tr>
<tr><td>Bill to</td><td>Client's legal name, address, email</td><td>Yes</td></tr>
<tr><td>Invoice number</td><td>Next number in your sequence</td><td>Yes</td></tr>
<tr><td>Invoice date</td><td>Date you issue it</td><td>Yes</td></tr>
<tr><td>Due date</td><td>Specific date payment is due</td><td>Strongly recommended</td></tr>
<tr><td>PO number</td><td>Client's purchase order reference</td><td>If the client uses POs</td></tr>
<tr><td>Line items</td><td>Description, quantity, rate (amount calculates)</td><td>Yes</td></tr>
<tr><td>Discount</td><td>Percentage or fixed amount</td><td>Optional</td></tr>
<tr><td>Tax rate</td><td>Rate you're registered to charge</td><td>If registered</td></tr>
<tr><td>Shipping</td><td>Delivery charge</td><td>Optional</td></tr>
<tr><td>Amount paid</td><td>Deposit already received</td><td>Optional</td></tr>
<tr><td>Notes / Terms</td><td>Payment instructions, terms, thanks</td><td>Yes</td></tr>
<tr><td>Signature</td><td>Your signature image</td><td>Optional</td></tr>
</tbody></table>

<h3>Box 1: Your business details</h3>
<p>Enter your name exactly as it appears on your contract or registration. Include the email address you want queries sent to. If you're registered for tax, add your tax ID in its own field; our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> explains which number to use in which country.</p>

<h3>Box 2: Bill to</h3>
<p>Enter the business that pays, for example "Harbor Dental Group LLC", not "Dr. Lee". Use the billing address from the contract or PO. Add the accounts payable email if they gave you one.</p>

<h3>Box 3: Invoice number</h3>
<p>Enter the next number in your sequence. If this is your first invoice, you can start at any number, such as <code>INV-0001</code> or <code>2026-101</code>, as long as each following invoice goes up by one. The <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</p>

<h3>Box 4: Invoice date and due date</h3>
<p>The invoice date is the day you issue it. For the due date, add your payment terms to the invoice date (Net 15 on an invoice dated 22 October 2026 means a due date of 6 November 2026) and enter that date.</p>

<h3>Box 5: Line items</h3>
<p>Fill one row per product or service. In <strong>Description</strong>, say what it is and when it was delivered. In <strong>Quantity</strong>, enter units, hours or days. In <strong>Rate</strong>, enter the price per unit. If the template doesn't calculate, multiply quantity by rate yourself and enter the amount. Billing by time? See <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h3>Box 6: Discount, tax and shipping</h3>
<p>Only fill these if they apply. Enter a discount as a percentage or fixed amount. Enter the tax rate only if you're registered to charge it, and make sure the document meets local rules. Our <a href="/blog/tax-invoice-guide">tax invoice guide</a> lists the extra fields some countries require. Enter shipping if you're passing on delivery costs.</p>

<h3>Box 7: Amount paid</h3>
<p>If the client paid a deposit, enter it here so the invoice shows the balance due rather than the full total.</p>

<h3>Box 8: Notes, terms and payment details</h3>
<p>Write how to pay and where. For bank transfers, include the account name, account number and routing or sort code, or IBAN and SWIFT for international payments. See <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>. Add the terms ("Payment due within 15 days") and a thank-you line.</p>

<h3>Box 9: Signature and logo</h3>
<p>Optional, but a logo makes the invoice recognizable and a signature adds a personal touch. Neither is usually a legal requirement.</p>

<h2>Completed example: a filled-out cleaning invoice</h2>
<p><strong>From:</strong> Sparkle Pro Cleaning, 18 Elm Street, Springfield. <strong>Bill to:</strong> Harbor Dental Group LLC, 400 Bay Road, Springfield. <strong>Invoice:</strong> INV-2026-0127. <strong>Date:</strong> 22 October 2026. <strong>Due:</strong> 6 November 2026 (Net 15). <strong>PO:</strong> HDG-3381.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Weekly office cleaning, October 2026 (visits)</td><td>4</td><td>165.00</td><td>660.00</td></tr>
<tr><td>Carpet deep clean, waiting room, 17 Oct 2026</td><td>1</td><td>240.00</td><td>240.00</td></tr>
<tr><td>Window cleaning, interior and exterior (hours)</td><td>3</td><td>45.00</td><td>135.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>1,035.00</td></tr>
<tr><td colspan="3">Discount (5% loyalty)</td><td>−51.75</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>983.25</strong></td></tr>
</tbody></table>
<p>5% of 1,035.00 is 51.75, leaving 983.25. Tax is left at zero because, in this example, the cleaning company isn't charging sales tax; rules on taxing services vary by state, so check yours. For more completed samples, browse our <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>Filling out an invoice on paper, in a spreadsheet or online</h2>
<p>The boxes are the same everywhere, but each format has its own traps.</p>
<ul>
<li><strong>Paper or printed forms.</strong> Write in block capitals with a dark pen, calculate each line with a calculator and write the total twice-checked. Keep a carbon copy, a photo or a scan of every invoice you hand over, because once it leaves your hands you have no record. Number paper forms in advance so you can't skip or repeat a number.</li>
<li><strong>Spreadsheet templates.</strong> Type only in the input cells (description, quantity, rate, dates, client) and leave the formula cells alone. After filling it out, check that the subtotal range includes every line you used, then export the invoice area to PDF.</li>
<li><strong>Online invoice generators.</strong> Fill in the form fields and watch the live preview update. The amount column, subtotal, discount, tax and balance due calculate for you, so your main job is checking descriptions, dates and payment details before downloading.</li>
</ul>
<p>Whichever format you use, fill the invoice out the same way every time. A consistent order (your details, client, number, dates, lines, totals, payment) makes it much harder to forget a box.</p>

<h2>What to leave blank (and what never to)</h2>
<ul>
<li><strong>Fine to leave blank:</strong> PO number (if none was issued), discount, shipping, amount paid, signature, logo.</li>
<li><strong>Never leave blank:</strong> invoice number, invoice date, your details, client details, at least one line item, total due, payment instructions.</li>
<li><strong>Don't invent:</strong> a tax ID or tax rate you're not registered for.</li>
<li><strong>Don't write "N/A" everywhere.</strong> Remove or hide unused boxes for a cleaner invoice.</li>
</ul>

<h2>Final check before you send</h2>
<ol>
<li>Is the invoice number new and next in sequence?</li>
<li>Does the Bill to name match the contract or PO?</li>
<li>Is the due date an actual date?</li>
<li>Do quantity × rate and the totals add up?</li>
<li>Are payment details complete and correct?</li>
<li>Does the PDF look right on a phone screen?</li>
</ol>
<p>Need help with the wording of each section rather than the boxes? Read <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>. For a walkthrough of every control in our tool, see the <a href="/user-guide">invoice generator user guide</a>.</p>

<h2>Fill out your invoice online</h2>
<p>Filling out an invoice takes minutes once you know what goes in each box. Open the <a href="/invoice-generator">free invoice generator</a>, choose the clean <a href="/invoice-templates/classic">Classic invoice template</a>, fill in the fields above and download your PDF. Billing in the UK? The <a href="/invoice-generator/uk">UK invoice generator</a> pre-sets GBP and VAT fields.</p>
`,
  },
  {
    slug: "how-to-make-an-invoice-on-your-phone",
    title: "How to Make an Invoice on Your Phone (iPhone and Android)",
    description:
      "How to make an invoice on your phone, iPhone or Android: create, check and send a professional PDF invoice from your browser in minutes, with no app needed.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-send-an-invoice",
      "how-to-invoice-a-client",
      "add-payment-link-to-invoice",
    ],
    faqs: [
      {
        q: "Can I make an invoice on my phone for free?",
        a: "Yes. A browser-based invoice generator works on iPhone and Android without installing an app, and you can create, download and send a PDF invoice for free.",
      },
      {
        q: "Do I need an app to make invoices on my phone?",
        a: "No. A mobile browser is enough for most freelancers and tradespeople. Dedicated invoicing apps can add features such as client lists and payment tracking, but many charge a subscription.",
      },
      {
        q: "Where does my invoice PDF save on my phone?",
        a: "It usually goes to your phone's downloads location: the Files app on iPhone or the Downloads folder on Android. You can also share it directly from the browser to email or a messaging app.",
      },
      {
        q: "How do I send an invoice from my phone?",
        a: "Download the invoice as a PDF, then attach it to an email or use your phone's share option to send it. Email is best for business clients because it leaves a clear record with the invoice number and due date.",
      },
      {
        q: "Can I take a photo of a handwritten invoice instead?",
        a: "You can, but it often looks unprofessional, may be hard to read and is easy to lose. A typed PDF invoice with calculated totals is clearer and easier for clients to approve and file.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To make an invoice on your phone, open a free online invoice generator in your iPhone or Android browser, enter your business details and the client's details, add an invoice number, dates and line items, check the preview, then download the PDF and send it by email or your phone's share menu. It works on any modern phone, takes about five minutes and doesn't require installing an app.</p>

<p>This guide covers the ways to invoice from a phone, a step-by-step walkthrough for iPhone and Android, a worked example for a job finished on site, and tips for making mobile invoicing faster. Everything below works with our <a href="/invoice-generator">free invoice generator</a>, which runs in your phone's browser with no sign-up.</p>

<h2>Why invoice from your phone?</h2>
<p>The best moment to send an invoice is right after the job is done and the client is happy. If you're a tradesperson, cleaner, <a href="/blog/photography-invoice-template">photographer</a> or mobile service provider, that moment usually happens away from a desk. Invoicing from your phone means you don't wait until the evening (or the weekend) to bill, and every day saved at the start is a day closer to getting paid. Our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> covers more ways to shorten the gap.</p>

<h2>3 ways to make an invoice on a phone</h2>
<table><thead><tr><th>Method</th><th>Cost</th><th>Install needed</th><th>Calculates totals</th><th>Best for</th></tr></thead><tbody>
<tr><td>Browser-based invoice generator</td><td>Free</td><td>No</td><td>Yes</td><td>Most freelancers and small businesses</td></tr>
<tr><td>Dedicated invoicing app</td><td>Often a subscription</td><td>Yes</td><td>Yes</td><td>High volume with client and payment tracking</td></tr>
<tr><td>Spreadsheet or document app</td><td>Free</td><td>Usually</td><td>Spreadsheets only</td><td>People who already keep templates in the cloud</td></tr>
</tbody></table>
<p>Editing a spreadsheet invoice on a small touchscreen is fiddly, and document apps don't calculate totals. For most people, a web-based generator is the quickest and least error-prone option on a phone.</p>

<h2>How to make an invoice on your phone: step by step</h2>
<p>These steps are the same on iPhone and Android. Browser menus vary slightly between Safari, Chrome and other browsers, so we describe them in general terms.</p>
<ol>
<li><strong>Open the invoice generator in your browser.</strong> Go to the invoice generator page. Turn your phone sideways if you want a wider view of the form and preview.</li>
<li><strong>Pick a template.</strong> Choose a layout with large, clear text. Simple designs such as the <a href="/invoice-templates/modern">Modern invoice template</a> read well on small screens, which matters because your client may also open the invoice on a phone.</li>
<li><strong>Enter your business details.</strong> Add your business name, email, phone, address and tax ID if registered. Upload your logo from your photo library if you have one.</li>
<li><strong>Enter the client's details.</strong> Type the client's name or business name, billing address and email. Ask for these before you leave the job site.</li>
<li><strong>Set the invoice number and dates.</strong> Use the next number in your sequence (the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format), then set the issue date and due date.</li>
<li><strong>Add line items.</strong> Add a line for each service, part or product with a description, quantity and rate. The totals calculate as you type.</li>
<li><strong>Add tax, discount or amount paid.</strong> Enter the tax rate only if you're registered to charge it; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check it. Enter any deposit already received under amount paid.</li>
<li><strong>Add payment details and notes.</strong> Include your bank details or payment link and your terms. A short thank-you note helps.</li>
<li><strong>Check the preview.</strong> Scroll through the full preview. Zoom in on the totals, the due date and the payment details.</li>
<li><strong>Download and send.</strong> Download the PDF, then attach it to an email or use the share option to send it.</li>
</ol>

<h2>iPhone vs Android: what's different?</h2>
<p>The invoice itself is identical; the differences are in where files go and how you share them.</p>
<ul>
<li><strong>iPhone:</strong> Downloaded PDFs normally go to the Files app, in a Downloads location. From the browser's download list or the Files app, use the share icon to attach the PDF to Mail or another app.</li>
<li><strong>Android:</strong> Downloads usually land in the Downloads folder, accessible from a Files or My Files app and the notification shade. Tap the file, then use share to send it by Gmail or another app.</li>
<li><strong>Both:</strong> You can add the invoice generator to your home screen from the browser's menu, so it opens like an app in one tap.</li>
</ul>

<h2>Worked example: invoicing on site after a repair</h2>
<p>A handyman finishes a kitchen faucet replacement and invoices before leaving the driveway.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Labor: replace kitchen faucet and supply lines (hours)</td><td>1.5</td><td>80.00</td><td>120.00</td></tr>
<tr><td>Replacement faucet cartridge</td><td>1</td><td>34.50</td><td>34.50</td></tr>
<tr><td>Call-out fee</td><td>1</td><td>45.00</td><td>45.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>199.50</strong></td></tr>
</tbody></table>
<p>Invoice INV-2026-0215, issued and due 22 October 2026 (due on receipt), with a payment link in the notes. Whether parts or labor are taxable depends on your state; this example omits tax for simplicity. For trade-specific fields, see our <a href="/blog/handyman-invoice-template">handyman invoice template</a> guide.</p>

<h2>Set up before you're on the job</h2>
<p>Five minutes of preparation at your desk makes invoicing from the road much quicker and far less error-prone:</p>
<ol>
<li><strong>Fill in your business details once.</strong> Enter your name, address, phone, email, tax ID, logo and signature on the phone you'll use, so the saved draft carries them forward.</li>
<li><strong>Write your standard payment notes.</strong> Prepare your bank details, payment link and terms ("Due on receipt" or "Net 7") in a note you can paste.</li>
<li><strong>List your common line items and rates.</strong> Call-out fee, hourly labor, standard packages: keep the exact wording and prices handy.</li>
<li><strong>Decide your numbering.</strong> Know the next invoice number before you leave, especially if you sometimes invoice from a laptop as well. Two devices are the most common cause of duplicate numbers.</li>
<li><strong>Test a download.</strong> Download a sample PDF once and confirm where your phone saves it, so you're not hunting for the file in front of a client.</li>
</ol>
<p>With that done, the on-site part is just the client's details, today's line items and a quick check of the preview.</p>

<h2>Tips for faster mobile invoicing</h2>
<ul>
<li><strong>Reuse your saved draft.</strong> Our generator saves your draft in the browser, so your business details are already there next time on the same phone.</li>
<li><strong>Keep standard descriptions in a note.</strong> Copy and paste your common line items and rates instead of typing them each time.</li>
<li><strong>Add a pay-now link.</strong> Clients pay faster when they can tap and pay on the spot. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</li>
<li><strong>Send a receipt after payment.</strong> When the client pays, send a confirmation; our <a href="/blog/payment-receipt-template">payment receipt template</a> guide shows what to include.</li>
<li><strong>Use Wi-Fi or good signal for uploads.</strong> Logo and signature images upload faster, and the PDF downloads cleanly.</li>
</ul>

<h2>Common mistakes when invoicing on a phone</h2>
<ul>
<li><strong>Autocorrect errors.</strong> Phones "fix" client names, part numbers and email addresses. Proofread the preview.</li>
<li><strong>Misplaced decimals.</strong> A rate of 8.00 instead of 80.00 is easy to tap. Check every line total.</li>
<li><strong>Sending a screenshot.</strong> A screenshot isn't a proper invoice document. Send the PDF.</li>
<li><strong>Wrong recipient.</strong> Autocomplete can pick the wrong contact. Double-check the email address before you hit send.</li>
</ul>
<p>Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> covers how to check legibility on small screens.</p>

<h2>Sending your invoice from your phone</h2>
<p>Email is the most professional channel for business clients: put the invoice number, amount and due date in the subject line and attach the PDF. For homeowners, a text or messaging app can work if they've agreed to it, but follow up with an email copy for your records. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> includes subject lines and short message templates, and if it's a new customer, read <a href="/blog/how-to-invoice-a-client">how to invoice a client</a>. For a tour of every field, see the <a href="/user-guide">user guide</a>.</p>

<h2>Make your invoice on your phone now</h2>
<p>You don't need a laptop or a paid app to bill a client professionally. Open the <a href="/invoice-generator">free invoice generator</a> on your phone, choose the high-contrast <a href="/invoice-templates/bold">Bold invoice template</a>, fill in the job and send the PDF before you drive to the next one.</p>
`,
  },
  {
    slug: "how-to-invoice-a-client",
    title: "How to Invoice a Client for the First Time: 2026 Guide",
    description:
      "How to invoice a client for the first time: agree terms, collect billing details, create and send the invoice, follow up and record payment, with an example.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-write-an-invoice",
      "freelancer-invoice-guide",
      "how-to-send-an-invoice",
    ],
    faqs: [
      {
        q: "How do I invoice a client for the first time?",
        a: "Confirm the price and payment terms in writing, ask for the client's billing name, address and accounts payable email, create an invoice with a unique number and clear line items, send it as a PDF, and follow up if it isn't paid by the due date.",
      },
      {
        q: "When should I send an invoice to a client?",
        a: "Send it as soon as the work or milestone is delivered and approved, or on the date agreed in your contract. Invoicing promptly shortens the time until you are paid.",
      },
      {
        q: "What number should my first invoice be?",
        a: "Any number you like, as long as later invoices follow in sequence. Many people start with INV-0001 or a year-based format such as INV-2026-001. Never reuse a number.",
      },
      {
        q: "How do I politely ask a new client for billing information?",
        a: "Ask once, early, and in one message: request the legal business name, billing address, invoice email, any PO number or vendor forms, and their preferred payment method. Clients appreciate a single organized request.",
      },
      {
        q: "Should I ask a new client for a deposit?",
        a: "For larger or longer projects, a deposit of 25 to 50 percent is common and reduces your risk. Issue a deposit invoice before starting, then deduct the deposit on the final invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To invoice a client for the first time, agree the price and payment terms in writing, collect the client's legal billing name, address and accounts payable email, then create an invoice with a unique number, issue and due dates, clear line items, the total due and payment instructions. Send it as a PDF with a short email, note the due date, and follow up politely if payment doesn't arrive on time.</p>

<p>This guide covers the full first-invoice process: what to settle before the work starts, what to ask the client, how to create and send the invoice, a sample email and a worked example with a deposit deducted. You can create the invoice itself in our <a href="/invoice-generator">free invoice generator</a>, no account needed.</p>

<h2>Before the work starts: agree the terms</h2>
<p>Most first-invoice problems start before the invoice exists. Put these points in writing: a signed contract is best, an email the client replies "agreed" to is the minimum:</p>
<ul>
<li>The scope of work and deliverables</li>
<li>Your price: fixed fee, hourly or daily rate, or per item</li>
<li>When you'll invoice: upfront, on completion, monthly or by milestone</li>
<li>Payment terms, such as Net 14 or Net 30</li>
<li>Accepted payment methods</li>
<li>Any deposit and any late-payment fee</li>
</ul>
<p>Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide lists the clauses worth including, and <a href="/blog/invoice-payment-terms">invoice payment terms explained</a> helps you choose terms.</p>

<h2>What to ask a new client before invoicing</h2>
<p>Send one organized request so you don't have to chase details later. A new client's finance team will often need:</p>
<table><thead><tr><th>Ask for</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Legal business name</td><td>The invoice must be addressed to the entity that pays</td></tr>
<tr><td>Billing address</td><td>Required on the invoice and for their records</td></tr>
<tr><td>Accounts payable email</td><td>Invoices sent only to your project contact can sit unread</td></tr>
<tr><td>PO number or project code</td><td>Many companies won't pay an invoice without one</td></tr>
<tr><td>Vendor or supplier forms</td><td>Some clients must set you up as a supplier before paying</td></tr>
<tr><td>Tax ID (if relevant)</td><td>Needed on some tax invoices and cross-border invoices</td></tr>
<tr><td>Preferred payment method</td><td>Avoids delays from unsupported methods</td></tr>
</tbody></table>

<h2>How to invoice a client: 8 steps</h2>
<ol>
<li><strong>Decide on your invoice number.</strong> Your first invoice can start at any number, as long as each later invoice follows in sequence. A year-based format like <code>INV-2026-001</code> works well; the <a href="/tools/invoice-number-generator">invoice number generator</a> suggests options.</li>
<li><strong>Pick a professional template.</strong> Choose a clean, readable design such as the <a href="/invoice-templates/modern">Modern invoice template</a> and add your logo so the client recognizes you.</li>
<li><strong>Add both parties' details.</strong> Your name or business name, address, email and tax ID if registered; then the client's legal name, billing address and PO number.</li>
<li><strong>Set the dates.</strong> Enter the issue date and a specific due date based on the terms you agreed.</li>
<li><strong>List the work clearly.</strong> Use the same wording and rates as your contract or quote. If you need help phrasing line items, see <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>.</li>
<li><strong>Deduct any deposit.</strong> If the client paid upfront, show it as amount paid so the balance due is clear. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains how to bill the deposit itself.</li>
<li><strong>Add payment instructions.</strong> Include full <a href="/blog/bank-details-on-invoice">bank details on the invoice</a> or a payment link, plus your terms and a thank-you note.</li>
<li><strong>Send it as a PDF and log it.</strong> Email the PDF to the accounts payable address, copying your project contact, and record the invoice number, amount and due date in your own list.</li>
</ol>

<h2>Worked example: first invoice with a deposit</h2>
<p>A designer quoted 2,400.00 for a brand identity package and took a 50% deposit before starting. The final invoice looks like this:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Brand identity package: logo suite, color palette, typography guide (per quote Q-2026-014)</td><td>1</td><td>2,000.00</td><td>2,000.00</td></tr>
<tr><td>Business card and letterhead design</td><td>1</td><td>400.00</td><td>400.00</td></tr>
<tr><td colspan="3">Total</td><td>2,400.00</td></tr>
<tr><td colspan="3">Less deposit paid 1 October 2026 (INV-2026-003)</td><td>−1,200.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>1,200.00</strong></td></tr>
</tbody></table>
<p>Invoice INV-2026-004, issued 22 October 2026, due 5 November 2026 (Net 14). Referencing the quote and the deposit invoice lets the client's finance team match everything in seconds.</p>

<h2>Sample email for your first invoice</h2>
<blockquote>
<p><strong>Subject:</strong> Invoice INV-2026-004 from Studio Lane: 1,200.00 due 5 November 2026</p>
<p>Hi Priya,</p>
<p>Thank you for the opportunity to work on the new brand identity. Please find attached invoice INV-2026-004 for the remaining balance of 1,200.00, due by 5 November 2026.</p>
<p>Payment details are on the invoice. Please quote INV-2026-004 as the reference. If you need anything else from me to process it, such as a supplier form, just let me know.</p>
<p>Best regards,<br>Sam</p>
</blockquote>
<p>For more templates and timing tips, see <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>

<h2>Choosing when to invoice a new client</h2>
<p>How often you bill a first-time client affects both your cash flow and your risk. Agree the schedule in advance and stick to it.</p>
<table><thead><tr><th>Billing schedule</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Upfront</td><td>Full payment before work starts</td><td>Small, quick jobs; brand-new clients with no history</td></tr>
<tr><td>Deposit + balance</td><td>Part upfront (often 25–50%), rest on completion</td><td>Fixed-price projects of a few weeks</td></tr>
<tr><td>Milestones</td><td>An invoice at each agreed stage</td><td>Longer projects with clear phases</td></tr>
<tr><td>On completion</td><td>One invoice when the work is delivered</td><td>Short projects with trusted clients</td></tr>
<tr><td>Monthly in arrears</td><td>Invoice at month end for work done that month</td><td>Ongoing or hourly work</td></tr>
</tbody></table>
<p>With a new client you have no payment history to go on, so it's reasonable to reduce your exposure: take a deposit, bill in milestones, or keep the first project small. Whatever you choose, invoice on the day the trigger happens (the day the milestone is approved or the month ends) rather than when you get round to it. A consistent, prompt invoicing rhythm also tells the client that you run a professional business and expect to be paid on schedule.</p>
<p>If the client is in another country, agree the currency and payment method upfront too, because transfer fees and exchange rates can change what actually lands in your account.</p>

<h2>After you send: follow up and record payment</h2>
<ul>
<li><strong>Confirm receipt.</strong> For a first invoice, a quick "just checking this reached the right person" a day or two later can prevent weeks of delay.</li>
<li><strong>Remind before the due date.</strong> A friendly note a few days before is normal practice. Our <a href="/blog/payment-reminder-emails">payment reminder emails</a> are ready to copy.</li>
<li><strong>Record payment.</strong> Mark the invoice paid, note the date and method, and send a thank-you or receipt.</li>
<li><strong>Escalate calmly if overdue.</strong> Call or email the accounts payable contact, restate the invoice number and amount, and refer to your agreed terms.</li>
</ul>

<h2>When the client has its own invoicing rules</h2>
<p>Larger companies often send new suppliers a set of invoicing instructions. Read them carefully before your first invoice, because an invoice that ignores them is usually returned rather than paid. Common requirements include:</p>
<ul>
<li>Quoting a specific PO number, cost center or contract reference on every invoice</li>
<li>Sending invoices only to a dedicated accounts payable mailbox or uploading them to a supplier portal</li>
<li>One invoice per PO, rather than combining several orders</li>
<li>Completing a supplier setup form and providing tax documentation before the first payment</li>
<li>Showing their legal entity name exactly as registered</li>
</ul>
<p>If anything is unclear, ask your contact to introduce you to their accounts payable team. A two-line email at the start is far quicker than resubmitting an invoice a month later.</p>

<h2>First-invoice mistakes to avoid</h2>
<ul>
<li>Addressing the invoice to your contact's name rather than the company</li>
<li>Waiting weeks after delivery to send it</li>
<li>Leaving the due date vague ("payable soon")</li>
<li>Line items that don't match the quote or contract</li>
<li>Missing the PO number the client asked you to include</li>
<li>Sending it only to a busy project manager instead of accounts payable</li>
</ul>
<p>If you freelance, our <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a> covers rates, retainers and recurring clients beyond the first invoice.</p>

<h2>Send your first client invoice today</h2>
<p>A clear agreement, the right billing details and a well-structured invoice are all it takes to get paid on time by a new client. Open the <a href="/invoice-generator">free invoice generator</a>, choose the fresh <a href="/invoice-templates/startup">Startup invoice template</a>, and send your first invoice as a polished PDF in minutes.</p>
`,
  },
  {
    slug: "how-to-void-an-invoice",
    title: "How to Void an Invoice: Cancel It Correctly Without Gaps",
    description:
      "How to void or cancel an invoice correctly: when to void, delete or issue a credit note, how to record it, notify the client and keep your numbering intact.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "credit-note-guide",
      "how-to-correct-an-invoice",
      "invoice-numbering-system",
    ],
    faqs: [
      {
        q: "What does it mean to void an invoice?",
        a: "Voiding an invoice cancels it while keeping a record that it existed. The invoice number stays in your sequence marked as void, and its value is removed from what the client owes and from your sales figures.",
      },
      {
        q: "Is voiding an invoice the same as deleting it?",
        a: "No. Deleting removes the invoice entirely and leaves an unexplained gap in your numbering. Voiding keeps the record and the reason, which is what auditors and tax authorities generally expect.",
      },
      {
        q: "When should I use a credit note instead of voiding?",
        a: "Use a credit note when the invoice has been sent and recorded by the client, has been paid, or falls in a tax period you have already reported. In many VAT and GST systems, a credit note is the expected way to cancel an issued tax invoice.",
      },
      {
        q: "Can I reuse the number of a voided invoice?",
        a: "No. Keep the voided number in your records and give any replacement invoice the next number in your sequence, referencing the original.",
      },
      {
        q: "Do I need to tell the client when I void an invoice?",
        a: "Yes, if they have received it. Send a short note explaining that the invoice is cancelled, why, and whether a corrected invoice or credit note will follow, so they don't pay it or keep it in their system.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To void an invoice, mark it as cancelled while keeping it in your records: note "VOID", the date and the reason, keep its number in your sequence, remove its amount from the client's balance, and tell the client if they have already received it. Void only invoices that haven't been paid or reported for tax. If the invoice was paid, recorded by the client or included in a tax return, issue a credit note instead, then send a corrected invoice with a new number if needed.</p>

<p>This guide explains the difference between voiding, deleting and crediting, a decision table for common situations, step-by-step instructions, a worked example and a client email. If you need to reissue a corrected bill afterwards, our <a href="/invoice-generator">free invoice generator</a> lets you create the replacement quickly and add a watermark to the cancelled copy.</p>

<h2>Void vs delete vs credit note</h2>
<p>These three actions are often confused, but they leave very different audit trails.</p>
<table><thead><tr><th>Action</th><th>What happens to the record</th><th>Numbering</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Delete</td><td>Invoice disappears</td><td>Leaves an unexplained gap</td><td>Only for drafts that never received a number</td></tr>
<tr><td>Void</td><td>Kept, marked cancelled, value set to zero</td><td>Number stays, marked void</td><td>Sent in error and not yet paid or reported</td></tr>
<tr><td>Credit note</td><td>Original stays; a new document reverses it</td><td>Credit note gets its own number</td><td>Paid, recorded or tax-reported invoices</td></tr>
</tbody></table>
<p>A credit note is a separate document that reduces or cancels the amount on an original invoice. Our <a href="/blog/credit-note-guide">credit note guide</a> explains what it must contain, and <a href="/blog/debit-note-vs-credit-note">debit note vs credit note</a> covers the reverse case when you need to bill more.</p>

<h2>When to void an invoice (and when not to)</h2>
<table><thead><tr><th>Situation</th><th>Recommended action</th></tr></thead><tbody>
<tr><td>Draft created, never sent</td><td>Discard it; if a number was already logged, mark that number void</td></tr>
<tr><td>Sent to the wrong client, unpaid, not yet in a filed tax return</td><td>Void (or credit note where tax rules require), then invoice the right client</td></tr>
<tr><td>Duplicate invoice sent by mistake</td><td>Void the duplicate and tell the client which number to pay</td></tr>
<tr><td>Project cancelled before any payment</td><td>Void, or issue a credit note if the client has booked it</td></tr>
<tr><td>Invoice already paid</td><td>Credit note plus refund, or apply credit to a future invoice</td></tr>
<tr><td>Amount partly wrong</td><td>Credit note for the difference, or credit in full and reissue</td></tr>
<tr><td>Client disputes the charge</td><td>Resolve the dispute first; then void or credit as agreed</td></tr>
</tbody></table>
<p>If the issue is a disagreement rather than a mistake, see our guide to handling an <a href="/blog/invoice-dispute">invoice dispute</a> before cancelling anything. For smaller errors such as a typo in an address, read <a href="/blog/how-to-correct-an-invoice">how to correct an invoice mistake</a>.</p>

<h2>A note on tax rules</h2>
<p>If you are registered for VAT, GST or a similar tax, an issued tax invoice usually can't simply be voided once it has been sent; tax authorities typically expect a credit note that references the original. Rules on cancellations, timing and what the credit note must show differ by country, so check with your tax authority or accountant. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the fields involved.</p>

<h2>How to void an invoice: 7 steps</h2>
<ol>
<li><strong>Check the invoice's status.</strong> Has it been sent? Paid, even partly? Included in a sales tax or VAT return? Recorded in the client's system? The answers decide whether voiding is appropriate or a credit note is needed.</li>
<li><strong>Talk to the client.</strong> If they've received it, agree that it should be cancelled before you act, and confirm they haven't scheduled a payment.</li>
<li><strong>Mark the invoice as void.</strong> In accounting software, use its void or cancel action, which normally keeps the record at zero value. With a PDF-based workflow, keep the original file and save a copy clearly marked VOID (a diagonal watermark works well) with the void date and reason.</li>
<li><strong>Update your invoice log.</strong> Keep the number in your register with status "Void", the date and a short reason, for example "Duplicate of INV-2026-0108". Never delete the row or reuse the number. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains why gaps raise questions.</li>
<li><strong>Adjust your books.</strong> Remove the amount from accounts receivable and from income for the period. If you use cash-basis records and nothing was paid, there may be nothing else to change; if in doubt, ask your bookkeeper.</li>
<li><strong>Issue a replacement if needed.</strong> Create a new invoice with the next number in your sequence and reference the voided one: "Replaces INV-2026-0107 (void)". The <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the format consistent.</li>
<li><strong>Keep everything.</strong> Retain the voided invoice, the reason and any correspondence for as long as you keep other financial records. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ol>

<h2>Worked example: invoice sent to the wrong entity</h2>
<p>A consultant sent INV-2026-0107 for 3,200.00 to Northwind Holdings when the contract was with its subsidiary, Northwind Foods Inc. The client had already booked the invoice, so a credit note is used rather than a quiet void. Separately, INV-2026-0108 was accidentally emailed twice, and the second copy generated INV-2026-0110 in the log.</p>
<table><thead><tr><th>Document</th><th>Date</th><th>Billed to</th><th>Amount (USD)</th><th>Status / note</th></tr></thead><tbody>
<tr><td>INV-2026-0107</td><td>15 Oct 2026</td><td>Northwind Holdings</td><td>3,200.00</td><td>Cancelled by CN-2026-0012</td></tr>
<tr><td>CN-2026-0012</td><td>22 Oct 2026</td><td>Northwind Holdings</td><td>−3,200.00</td><td>Credits INV-2026-0107 in full: wrong entity</td></tr>
<tr><td>INV-2026-0108</td><td>16 Oct 2026</td><td>Bayview Retail</td><td>1,450.00</td><td>Valid, awaiting payment</td></tr>
<tr><td>INV-2026-0109</td><td>22 Oct 2026</td><td>Northwind Foods Inc.</td><td>3,200.00</td><td>Replaces INV-2026-0107</td></tr>
<tr><td>INV-2026-0110</td><td>22 Oct 2026</td><td>Bayview Retail</td><td>0.00</td><td>VOID: duplicate of INV-2026-0108</td></tr>
</tbody></table>
<p>The net position is correct: Northwind Holdings owes 3,200.00 − 3,200.00 = 0.00, Northwind Foods owes 3,200.00, Bayview owes 1,450.00 once, and every number in the sequence is accounted for.</p>

<h2>Email to send when you void an invoice</h2>
<blockquote>
<p><strong>Subject:</strong> Invoice INV-2026-0110 cancelled: duplicate of INV-2026-0108</p>
<p>Hi Jordan,</p>
<p>Invoice INV-2026-0110 was sent to you in error and duplicates INV-2026-0108. I've voided INV-2026-0110, so please disregard it. The amount due remains 1,450.00 on INV-2026-0108, due 15 November 2026.</p>
<p>Apologies for the confusion, and thank you.</p>
</blockquote>

<h2>Voiding in accounting software vs a PDF workflow</h2>
<p>How you void an invoice depends on where your invoices live.</p>
<ul>
<li><strong>Accounting or billing software.</strong> Most platforms offer a void or cancel action on an unpaid invoice. It typically keeps the invoice visible with a zero balance and a void status, and reverses its effect on your receivables and sales reports. Many systems won't let you void an invoice that has a payment applied; you remove or refund the payment first, or issue a credit note instead. Check your software's help pages for exactly how it treats tax on voided invoices.</li>
<li><strong>Invoice generator or PDF workflow.</strong> There's no database doing it for you, so your invoice log is the official record. Keep the original PDF untouched, create a copy watermarked VOID, update the log entry with the status and reason, and file both copies together.</li>
<li><strong>Paper invoices.</strong> Write VOID clearly across the original and any copies, keep them in your invoice book in number order, and note the reason on the stub.</li>
</ul>
<p>In every case the goal is the same: anyone reviewing your records later (you, your accountant or a tax inspector) can see that the number was used, why it was cancelled and what replaced it.</p>

<h2>Mistakes to avoid when cancelling invoices</h2>
<ul>
<li><strong>Deleting a sent invoice.</strong> The client still has it, and your records now don't.</li>
<li><strong>Reusing the number.</strong> Two different invoices with one number is a reconciliation headache.</li>
<li><strong>Voiding a paid invoice.</strong> The payment needs a home: use a credit note and refund or apply it.</li>
<li><strong>Editing and resending under the same number.</strong> The client may now hold two versions of "the same" invoice.</li>
<li><strong>Not telling the client.</strong> They may pay a cancelled invoice and wait for a refund.</li>
</ul>
<p>Many of these come from rushing the original invoice; our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> helps you avoid needing to void in the first place.</p>

<h2>Create your replacement invoice</h2>
<p>Voiding correctly is about keeping a clean trail: the original stays on file, the reason is recorded, and any replacement carries a new number. Open the <a href="/invoice-generator">free invoice generator</a>, choose the understated <a href="/invoice-templates/slate">Slate invoice template</a>, create the corrected invoice and reference the cancelled one in the notes.</p>
`,
  },
];
