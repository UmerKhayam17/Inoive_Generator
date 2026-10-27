import type { PostDraft } from "../blog";

export const TEMPLATES_BASICS_2026_B_POSTS: PostDraft[] = [
  {
    slug: "letterhead-template",
    title: "Letterhead Template: What to Include on Business Letterhead",
    description:
      "Build a letterhead template that looks professional and meets the rules: what to include, UK company disclosures, US norms, layout sizes and a filled example.",
    category: "design-templates",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "professional-invoice-design-tips",
      "best-fonts-for-invoices",
      "sole-trader-vs-limited-company",
    ],
    faqs: [
      {
        q: "What should be included on a business letterhead?",
        a: "At minimum, the business name, logo, postal address, phone number, email address and website. Limited companies in the UK must also show the company's registered number, the part of the UK where it is registered (for example England and Wales) and the registered office address. Optional items include a tagline, social handles and professional registration numbers. Keep the design simple so the letter itself stays readable.",
      },
      {
        q: "Is a letterhead a legal requirement?",
        a: "Having a designed letterhead is not a legal requirement anywhere we know of, but the information on business letters can be. UK companies must show their registered number, place of registration and registered office on business letters, order forms and websites. Sole traders and partnerships trading under a business name must also disclose the owners' names and an address for service. In the US there is no general federal rule, though licensed professions may have their own.",
      },
      {
        q: "Do I need to put my VAT number on my letterhead?",
        a: "In the UK, a VAT number is required on VAT invoices, not on ordinary business letters. Many businesses still add it to the letterhead footer because it saves clients from asking, and because the same design is often reused for quotes and statements. If you add it, keep it accurate and remove it promptly if you deregister for VAT.",
      },
      {
        q: "What size should a letterhead be?",
        a: "Use the standard paper size for your market: US Letter (8.5 x 11 inches) in the US and Canada, and A4 (210 x 297 mm) in the UK, Europe, Pakistan, India, the UAE and most other countries. Keep the header to roughly 1 to 1.5 inches (about 25 to 40 mm) so there is plenty of space left for the letter body, and leave a margin of about 0.5 inches for printers.",
      },
      {
        q: "Should directors' names appear on a letterhead?",
        a: "It is optional. Under the UK trading disclosure rules, if a company's business letter names any director other than in the body text or as the signatory, it must name every director. Many companies avoid that by leaving directors off the letterhead entirely, which also saves reprinting stationery whenever the board changes.",
      },
      {
        q: "Can I make a letterhead in Word or Google Docs?",
        a: "Yes. Put your logo and business details in the document header and the legal disclosures in the footer, then save the file as a template (.dotx in Word) so every new letter starts from the same design. In Google Docs, create the letterhead once and use File, Make a copy for each new letter. Export to PDF before you send so the layout does not shift on the recipient's screen.",
      },
      {
        q: "Should I use my letterhead for invoices?",
        a: "You can reuse the same branding, but an invoice needs its own fields: invoice number, dates, line items, tax, total and payment terms. Typing an invoice onto blank letterhead often leads to missing details. A better approach is to keep your letterhead for letters and use an invoice template with the same logo, colors and fonts so the documents look like a matching set.",
      },
      {
        q: "What file format is best for a digital letterhead?",
        a: "Keep an editable master (Word .dotx, Google Docs or a design file) and send finished letters as PDF. PDF preserves fonts, colors and spacing on every device and printer. Save your logo as a high-resolution PNG or SVG so it stays sharp in print. Avoid sending letters as editable Word files to clients, because the layout can change and the content can be altered.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A letterhead template is a reusable page design that puts your business identity at the top of every letter. Include the business name, logo, address, phone, email and website. UK limited companies must also show their registered number, place of registration and registered office address.</p>

<p>Letterhead is the first thing a reader sees on a business letter, a reference, a quote cover letter or a formal notice. Done well, it tells them who you are and how to reach you before they read a word of the content. Done badly, it crowds the page, misses details a client or regulator expects, or looks different every time you send something. This guide covers what to include on business letterhead, which details are legally required in the UK, what is customary in the US, how to set up the layout, and how to keep your letters and invoices visually consistent.</p>

<h2>What is a letterhead template?</h2>
<p>A letterhead is the printed or digital heading at the top of business stationery, usually with a matching footer. A letterhead template is the master file you reuse for every letter so the logo, contact details and legal disclosures stay identical. It might be a Word template, a Google Doc you copy, a design file in a layout tool, or pre-printed paper stock.</p>
<p>A letterhead is not a document type in itself. It is a frame. The content inside it changes: a client letter, a reference, a price increase notice, a cover letter for a proposal. That is why the frame should be quiet. It identifies the sender and then gets out of the way.</p>

<h2>What to include on business letterhead</h2>
<p>Most business letterheads include the same core details. The table below lists them, with an example and a note on why each matters.</p>
<table>
<thead><tr><th>Element</th><th>Example</th><th>Required or optional</th></tr></thead>
<tbody>
<tr><td>Business or legal name</td><td>Harbor Lane Studio Ltd</td><td>Essential; companies should use the exact registered name</td></tr>
<tr><td>Logo</td><td>Wordmark or symbol, top left or centered</td><td>Optional but expected for most brands</td></tr>
<tr><td>Postal address</td><td>14 Quay Street, Bristol BS1 4DB</td><td>Essential; where replies and legal notices go</td></tr>
<tr><td>Phone number</td><td>+44 117 000 0000</td><td>Customary</td></tr>
<tr><td>Email address</td><td>hello@harborlane.example</td><td>Customary; use a role address, not a personal one</td></tr>
<tr><td>Website</td><td>harborlane.example</td><td>Customary</td></tr>
<tr><td>Company registration details</td><td>Registered in England and Wales, No. 01234567</td><td>Required for UK companies on business letters</td></tr>
<tr><td>Registered office</td><td>Registered office: 14 Quay Street, Bristol BS1 4DB</td><td>Required for UK companies, even if it matches the trading address</td></tr>
<tr><td>Tax or VAT number</td><td>VAT No. GB 123 4567 89</td><td>Optional on letters; required on tax invoices</td></tr>
<tr><td>Professional license or regulator number</td><td>License or registration ID</td><td>Required by some regulators for some professions</td></tr>
<tr><td>Tagline or social handles</td><td>"Brand and packaging design"</td><td>Optional; keep short</td></tr>
</tbody>
</table>
<p>Two practical rules help. First, put identity in the header (name, logo, maybe a tagline) and put the dense information in the footer (registered details, tax numbers, regulator IDs). Second, only include what you will keep up to date. An old phone number on 500 printed sheets is a cost, and a wrong registered office on a letter can be a compliance problem.</p>

<h2>UK rules: what limited companies must show</h2>
<p>In the UK, the content of business letters is regulated even though the design is not. The Company, Limited Liability Partnership and Business (Names and Trading Disclosures) Regulations 2015 require a company to show the following on its business letters, order forms and websites (see <a href="https://www.legislation.gov.uk/uksi/2015/17/regulation/25" target="_blank" rel="noopener noreferrer">regulation 25 on legislation.gov.uk</a>):</p>
<ul>
<li>The part of the United Kingdom in which the company is registered, for example England and Wales, Scotland or Northern Ireland.</li>
<li>The company's registered number.</li>
<li>The address of its registered office.</li>
<li>If the company is exempt from using "limited" in its name, the fact that it is a limited company.</li>
<li>If it mentions share capital at all, the paid-up share capital, not the authorized or nominal amount.</li>
</ul>
<p>The company's registered name must also appear on its business letters and other documents, and it must match the name at Companies House exactly, including "Limited" or "Ltd". Directors' names are optional, but there is a catch: under regulation 26, if a business letter names any director (other than in the body of the letter or as the person signing it), it must name all of them. That is why many UK companies leave directors off their letterhead.</p>
<p>Sole traders and partnerships that trade under a name other than their own also have disclosure duties. Under the business names rules in the Companies Act 2006, they generally need to show the owner's or each partner's name and a UK address where documents can be served on business letters, orders, invoices, receipts and written demands for payment. Check the current GOV.UK guidance if this applies to you. If you are deciding between structures, our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> explains how the paperwork differs.</p>
<p>VAT numbers are a common question. A UK VAT registration number must appear on a VAT invoice, but it is not required on general letters. Many businesses add it to the letterhead footer anyway because the same design is reused for quotes and statements. For invoice-specific requirements, see our guide to <a href="/blog/tax-id-on-invoice">showing a tax ID on an invoice</a>.</p>

<h2>US norms for business letterhead</h2>
<p>The US has no general federal rule on what a business letter must display. Most companies include the business name, logo, address, phone, email and website, and that is the market expectation. A few points are worth checking:</p>
<ul>
<li><strong>Legal entity name.</strong> If you operate under a trade name (a DBA or fictitious business name), it is good practice to show the legal entity name as well, for example "Harbor Lane Studio, a brand of HL Design LLC". Some states have their own rules on using assumed names, so check with your state.</li>
<li><strong>Licensed professions.</strong> Lawyers, accountants, contractors, real estate brokers and others may face state board or bar rules about how they describe themselves, list licenses or name partners. If you are licensed, check your regulator's advertising and communications rules before printing.</li>
<li><strong>Tax IDs.</strong> Do not print an EIN or Social Security number on letterhead. Share an EIN on a W-9 or an invoice when a client needs it, and never put an SSN on general stationery.</li>
</ul>

<h2>Layout and sizing: how to set up the design</h2>
<p>A clean letterhead layout follows a few conventions. Use the right paper size for your market, keep the header compact and leave generous margins.</p>
<h3>Paper sizes</h3>
<ul>
<li><strong>US Letter:</strong> 8.5 x 11 inches, standard in the US and Canada.</li>
<li><strong>A4:</strong> 210 x 297 mm, standard in the UK, Europe, Pakistan, India, the UAE and most other countries.</li>
</ul>
<p>If you send letters to both markets, design for the paper size your recipients print on, or test that your PDF prints acceptably on both.</p>
<h3>Worked example: how much space is left for the letter?</h3>
<p>Here is an illustrative US Letter layout. The page is 11 inches tall. Suppose you use a 1.25-inch header, a 0.75-inch footer and 0.5-inch print-safe margins at the top and bottom.</p>
<ul>
<li>Header plus footer: 1.25 + 0.75 = 2.0 inches.</li>
<li>Top and bottom margins: 0.5 + 0.5 = 1.0 inch.</li>
<li>Space left for the letter: 11 - 2.0 - 1.0 = 8.0 inches, which is about 73% of the page height (8.0 / 11 = 0.727).</li>
</ul>
<p>On A4 with a 32 mm header, a 20 mm footer and 12 mm margins top and bottom, the body area is 297 - 32 - 20 - 24 = 221 mm, about 74% of the page (221 / 297 = 0.744). If your header grows past about a fifth of the page, the design is probably doing too much.</p>
<h3>Typography and color</h3>
<p>Use one or two typefaces and a restrained palette, usually your brand color plus black or dark gray. A body size of 10 to 12 points reads well in print and on screen. The same principles apply to invoices; our guide to <a href="/blog/best-fonts-for-invoices">choosing fonts for business documents</a> covers readable choices and sizes, and our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> explain how to keep a branded layout readable.</p>

<h2>Sample letterhead: a filled example</h2>
<p>Below is a filled example for a fictional UK limited company. Use it as a pattern and replace every detail with your own.</p>
<p><strong>Header (top of page)</strong></p>
<ul>
<li>Logo, top left: Harbor Lane Studio wordmark</li>
<li>Right-aligned: Harbor Lane Studio Ltd, 14 Quay Street, Bristol BS1 4DB</li>
<li>Right-aligned: +44 117 000 0000, hello@harborlane.example, harborlane.example</li>
</ul>
<p><strong>Footer (bottom of page, small type)</strong></p>
<ul>
<li>Harbor Lane Studio Ltd. Registered in England and Wales, company number 01234567.</li>
<li>Registered office: 14 Quay Street, Bristol BS1 4DB. VAT No. GB 123 4567 89.</li>
</ul>
<p>For a US LLC, the footer would usually be shorter: the legal name ("HL Design LLC"), and a license number only if your profession requires one.</p>

<h2>Letterhead vs invoice: keep them separate</h2>
<p>It is tempting to type an invoice onto blank letterhead. It works for one-off bills, but it tends to fail in three ways. Invoice numbers are not tracked, so duplicates and gaps appear. Line items, tax and totals are calculated by hand, so errors creep in. And required invoice fields, such as the invoice date, supply date, tax number and payment terms, get left out because the letter format does not prompt for them.</p>
<p>A better approach is to match your branding across two separate documents. Keep a letterhead template for letters, and use the <a href="/invoice-generator">free online invoice generator</a> for bills. It lets you add your logo and a signature image, choose typography and currencies, and pick a template close to your letterhead's look, then download the invoice as a PDF. A conservative layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> pairs well with a formal letterhead. Note that the generator makes invoices only: the document heading is always "Invoice", so it is not a substitute for a letterhead, a letter or a receipt.</p>
<p>If you sign letters and invoices, use the same signature image on both. Our guide to <a href="/blog/invoice-signature">adding a signature to an invoice</a> explains when a signature helps and how to add one cleanly.</p>

<h2>Letterhead checklist</h2>
<ul>
<li>Exact business or registered company name, spelled as registered.</li>
<li>High-resolution logo (SVG or a PNG of at least 300 dpi at print size).</li>
<li>Postal address, phone, role-based email and website.</li>
<li>UK companies: part of the UK where registered, registered number and registered office address.</li>
<li>UK sole traders or partnerships using a business name: owner or partner names and an address for service.</li>
<li>Directors' names either all listed or none.</li>
<li>Tax, VAT or license numbers only if accurate and needed.</li>
<li>Correct paper size (US Letter or A4) and print-safe margins.</li>
<li>Header no taller than about a fifth of the page.</li>
<li>Master file saved as a template, letters sent as PDF.</li>
<li>Matching invoice template using the same logo, colors and fonts.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using a trading name only.</strong> A UK company that shows "Harbor Lane" but not "Harbor Lane Studio Ltd", its number and its registered office is missing required disclosures.</li>
<li><strong>Listing some directors.</strong> Naming the managing director in the letterhead without naming the rest breaches the UK rule that requires all or none.</li>
<li><strong>Out-of-date details.</strong> An old address or phone number undermines trust. Review the template whenever something changes, and avoid printing large paper runs.</li>
<li><strong>An oversized header.</strong> A logo block that takes a third of the page pushes short letters onto a second sheet and looks dated.</li>
<li><strong>Low-resolution logos.</strong> A logo copied from a website often prints blurry. Use the original vector file.</li>
<li><strong>Sending editable files.</strong> A Word document can reflow on another computer or be altered. Send PDF.</li>
<li><strong>Using letterhead as an invoice.</strong> Invoices need numbering, dates, line items, tax and payment terms. Use a proper invoice template instead.</li>
</ul>

<h2>Using your letterhead template consistently</h2>
<p>Once the design is final, lock it down. Save the master in a shared folder, restrict who can edit it, and give everyone the same version. Create variants only where there is a real need, such as a continuation-page version without the full header for multi-page letters. When your branding changes, update the letterhead template and your invoice template at the same time so clients never receive mismatched documents.</p>
<p>For more on layout and branding across business documents, browse the <a href="/blog/category/design-templates">design and templates articles</a>, or compare styles in the <a href="/invoice-templates">invoice template gallery</a> to find one that matches your letterhead.</p>
`,
  },
  {
    slug: "expense-report-template",
    title: "Expense Report Template: How to Fill Out and Submit One",
    description:
      "Use this expense report template guide to fill out and submit claims right: the fields, a worked example with advances, and US accountable plan rules.",
    category: "design-templates",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "mileage-log-template",
      "reimbursable-expenses-invoice",
      "how-to-track-business-expenses",
    ],
    faqs: [
      {
        q: "What is an expense report?",
        a: "An expense report is a form an employee (or contractor, if the contract allows) submits to claim back money spent on business costs, such as travel, meals, mileage or supplies. It lists each expense with its date, amount, category and business purpose, attaches receipts, subtracts any cash advance and shows the amount the company owes the employee, or the amount the employee must return.",
      },
      {
        q: "What should be included in an expense report?",
        a: "Include the employee's name and department, the reporting period, and for each expense the date, merchant, category, business purpose, payment method and amount. Add the total, any advance already received and the net amount due. Attach itemized receipts and get the employee's signature plus a manager's approval. Mileage claims should also show the trip details and the rate used.",
      },
      {
        q: "What is an accountable plan?",
        a: "In the US, an accountable plan is a reimbursement arrangement that meets three IRS requirements: the expenses have a business connection, the employee adequately accounts for them within a reasonable period, and any excess advance is returned within a reasonable period. Reimbursements under an accountable plan are generally not taxable wages. Payments under a plan that fails these tests are treated as wages and reported on Form W-2.",
      },
      {
        q: "How soon do I need to submit an expense report?",
        a: "Follow your employer's policy first. For US accountable plans, IRS Publication 463 treats it as reasonable if you account for expenses within 60 days after they were paid or incurred and return any excess within 120 days. Many companies set a shorter internal deadline, such as monthly, to keep their books current. Late reports may be rejected or treated as taxable.",
      },
      {
        q: "Do I need receipts for every expense?",
        a: "Your employer's policy decides, and many require receipts for everything. For US tax substantiation, IRS Publication 463 says documentary evidence such as a receipt is generally not required for an expense under $75, except for lodging, which always needs a receipt. You still need to record the amount, date, place and business purpose of every expense.",
      },
      {
        q: "Can I use an expense report as a freelancer?",
        a: "A freelancer does not usually submit an expense report to a client. If the contract lets you pass costs on, you add them to your invoice as reimbursable expenses, with receipts attached. You can still use an internal expense log to track your own business costs for tax deductions, but the client-facing document is the invoice.",
      },
      {
        q: "What happens if my expense report is rejected?",
        a: "Usually the approver sends it back with a reason, such as a missing receipt, an expense outside policy, an unclear business purpose or a math error. Fix the issue, attach the missing evidence or a written explanation, and resubmit. If an expense is outside policy, it may simply not be reimbursed. Keep a copy of the original submission and any correspondence.",
      },
      {
        q: "Should an expense report include sales tax or VAT?",
        a: "Claim the full amount you paid, including sales tax, VAT or tips that appear on the receipt. If your company is VAT-registered and wants to recover input VAT, it may ask you to record the net amount and the VAT separately and to provide a valid VAT receipt or invoice. Check your expense policy for how tax and tips should be entered.",
      },
      {
        q: "What is the difference between an expense report and an invoice?",
        a: "An expense report is an internal claim from an employee to an employer for costs already paid. An invoice is an external request for payment from a seller to a customer for goods or services, which may include reimbursable costs. Employees file expense reports; freelancers and businesses send invoices. The two documents have different fields, approvals and tax treatment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An expense report template is a standard form for claiming back business costs you paid yourself. List each expense with its date, merchant, category, business purpose and amount, attach receipts, subtract any advance, sign it and submit it to your approver within your company's deadline.</p>

<p>Expense reports are one of those tasks nobody enjoys and everybody has to get right. A missing receipt delays reimbursement, a vague business purpose gets the claim rejected, and in the US a sloppy process can turn tax-free reimbursements into taxable wages. This guide walks through what an expense report is, which fields to include, how to fill one out step by step with a worked example, the US accountable plan rules employers rely on, and the mistakes that most often get claims sent back.</p>

<h2>What is an expense report?</h2>
<p>An expense report is an internal document an employee submits to claim reimbursement for business costs paid with personal money or to account for costs charged to a company card or paid from an advance. It is the bridge between "I paid for this hotel" and "the company has recorded the cost, checked it against policy and paid me back."</p>
<p>It is different from an invoice. An invoice goes from a seller to a customer. An expense report goes from an employee to an employer. If you are a freelancer passing costs on to a client, you do not file an expense report; you add the costs to your invoice. Our guide to <a href="/blog/reimbursable-expenses-invoice">billing reimbursable expenses on an invoice</a> covers that case.</p>

<h2>What to include in an expense report template</h2>
<p>A good expense report template has three parts: a header that identifies the claim, a table of expense lines, and a summary that settles any advance and records approvals.</p>
<h3>Header fields</h3>
<ul>
<li>Employee name, employee ID and department or cost center.</li>
<li>Report number or reference.</li>
<li>Reporting period or trip dates.</li>
<li>Purpose of the trip or project, for example "Client workshop, Chicago".</li>
<li>Currency of reimbursement.</li>
</ul>
<h3>Expense line columns</h3>
<table>
<thead><tr><th>Column</th><th>What to enter</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Date</td><td>Date on the receipt</td><td>Shows the expense falls within the claim period</td></tr>
<tr><td>Merchant or description</td><td>"Marriott Downtown, 2 nights"</td><td>Lets the approver match the line to the receipt</td></tr>
<tr><td>Category</td><td>Airfare, lodging, meals, ground transport, mileage, supplies</td><td>Maps the cost to the right ledger account</td></tr>
<tr><td>Business purpose</td><td>"Dinner with client re: Q1 project scope"</td><td>Required for tax substantiation and policy checks</td></tr>
<tr><td>Payment method</td><td>Personal card, cash, company card</td><td>Company card items are accounted for but not reimbursed</td></tr>
<tr><td>Amount</td><td>Total paid, including tax and tip</td><td>The figure being claimed</td></tr>
<tr><td>Receipt reference</td><td>Receipt number or attachment name</td><td>Links evidence to each line</td></tr>
</tbody>
</table>
<h3>Summary and approval</h3>
<ul>
<li>Total expenses.</li>
<li>Less company card charges (if they are listed for accounting only).</li>
<li>Less cash advance received.</li>
<li>Net amount due to the employee, or due back to the company.</li>
<li>Employee signature and date, confirming the expenses are accurate and business related.</li>
<li>Approver name, signature and date.</li>
</ul>

<h2>How to fill out an expense report, step by step</h2>
<ol>
<li><strong>Gather your evidence.</strong> Collect receipts, booking confirmations and card statements for the period. Photograph paper receipts the day you get them.</li>
<li><strong>Check the policy.</strong> Look up per-night lodging caps, meal limits, the mileage rate and which expenses are not reimbursable (for example, alcohol or upgrades).</li>
<li><strong>Enter one line per expense.</strong> Use the receipt date and the full amount paid. Do not combine several meals into one line unless your policy allows a daily total.</li>
<li><strong>Write a real business purpose.</strong> "Meals" is not a purpose. "Lunch with Dana Ruiz, Acme Corp, to review proposal" is.</li>
<li><strong>Add mileage separately.</strong> Record the date, start and end points, purpose and miles, then multiply by the approved rate. A separate <a href="/blog/mileage-log-template">mileage log template</a> makes this much easier.</li>
<li><strong>Subtract advances.</strong> If you received cash up front, deduct it to get the net amount owed.</li>
<li><strong>Attach receipts and sign.</strong> Number each receipt to match its line and sign the declaration.</li>
<li><strong>Submit before the deadline.</strong> Send it to your manager or finance team and keep a copy.</li>
</ol>

<h2>Worked example: a filled expense report</h2>
<p>The figures below are illustrative. An employee travels to a two-day client workshop in August 2026 and received a $500.00 cash advance before the trip.</p>
<table>
<thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Business purpose</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Aug 10</td><td>Return flight, Boston to Chicago</td><td>Airfare</td><td>Travel to Acme client workshop</td><td>$412.60</td></tr>
<tr><td>Aug 10-12</td><td>Hotel, 2 nights x $189.00</td><td>Lodging</td><td>Accommodation for workshop</td><td>$378.00</td></tr>
<tr><td>Aug 11</td><td>Dinner with Acme project lead</td><td>Meals</td><td>Review workshop outcomes and next steps</td><td>$64.25</td></tr>
<tr><td>Aug 11</td><td>Taxi, hotel to Acme office and back</td><td>Ground transport</td><td>Travel to client site</td><td>$38.40</td></tr>
<tr><td>Aug 12</td><td>Personal car, home to airport and back, 46 miles x $0.76</td><td>Mileage</td><td>Airport transfer for client trip</td><td>$34.96</td></tr>
</tbody>
</table>
<p><strong>Calculation:</strong></p>
<ul>
<li>Lodging: 2 x $189.00 = $378.00.</li>
<li>Mileage: 46 x $0.76 = $34.96 (using the IRS business rate for July 1 to December 31, 2026; your employer's rate may differ).</li>
<li>Total expenses: $412.60 + $378.00 + $64.25 + $38.40 + $34.96 = $928.21.</li>
<li>Less cash advance: $928.21 - $500.00 = <strong>$428.21 due to the employee</strong>.</li>
</ul>
<p>If the total had been lower than the advance, say $430.00, the employee would owe the company $500.00 - $430.00 = $70.00, and under a US accountable plan that excess must be returned within a reasonable period.</p>

<h2>US rules: accountable plans and substantiation</h2>
<p>In the US, the way an employer reimburses expenses affects whether the payment is taxable to the employee. Under an accountable plan, reimbursements are generally not wages and are not reported as income. To qualify, the plan must meet three requirements described in <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS Publication 463</a>:</p>
<ol>
<li><strong>Business connection.</strong> The expenses must be deductible business expenses incurred while performing services as an employee.</li>
<li><strong>Adequate accounting.</strong> The employee must substantiate the expenses to the employer within a reasonable period of time.</li>
<li><strong>Return of excess.</strong> The employee must return any amount above the substantiated expenses within a reasonable period.</li>
</ol>
<p>Publication 463 gives examples of timing it treats as reasonable: receiving an advance within 30 days of the expense, accounting for expenses within 60 days after they were paid or incurred, and returning any excess within 120 days. Employers can instead give employees a periodic statement, at least quarterly, of outstanding amounts and ask them to account for or return them within 120 days of the statement.</p>
<p>If a plan does not meet these rules, it is a nonaccountable plan, and the payments are treated as wages: they are reported on Form W-2 and subject to withholding. That is a good reason for employers to insist on complete, timely reports.</p>
<p>Substantiation means recording the amount, time, place and business purpose of each expense, ideally at or near the time it happens. Publication 463 says documentary evidence such as a receipt is generally not needed for expenses under $75, except lodging. Employer policies are often stricter and require a receipt for every item. The rules change from time to time, so check the current publication before setting policy.</p>

<h2>How approvers review an expense report template</h2>
<p>Knowing what the reviewer checks helps you get paid on the first submission. Most approvers and finance teams run through the same questions:</p>
<ul>
<li><strong>Does every line have evidence?</strong> They match each amount to a receipt or booking confirmation and check that the dates fall inside the claim period.</li>
<li><strong>Is it within policy?</strong> Lodging and meals are compared against caps, and items such as alcohol, upgrades or personal travel are removed.</li>
<li><strong>Is the purpose clear?</strong> A reviewer who cannot tell why a cost was business related will send the line back.</li>
<li><strong>Is the arithmetic right?</strong> Totals, mileage multiplication and the advance deduction are rechecked.</li>
<li><strong>Is anything claimed twice?</strong> Duplicate receipts, or company card charges listed as out-of-pocket, are common errors.</li>
</ul>
<p>Building these checks into your own expense report template, for example with a "receipt attached" column and formula-driven totals, catches most problems before you hit submit.</p>

<h2>Expense report vs invoice vs petty cash</h2>
<table>
<thead><tr><th>Document</th><th>Who issues it</th><th>To whom</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Expense report</td><td>Employee</td><td>Employer</td><td>Claim back or account for business costs</td></tr>
<tr><td>Invoice</td><td>Seller or freelancer</td><td>Customer or client</td><td>Request payment for goods or services, including rebilled costs</td></tr>
<tr><td>Petty cash voucher</td><td>Petty cash custodian</td><td>Internal records</td><td>Record small cash payouts from the office float</td></tr>
</tbody>
</table>
<p>For small office purchases paid from a cash box, a <a href="/blog/petty-cash-log">petty cash log</a> is usually simpler than a full report.</p>

<h2>Expense report checklist</h2>
<ul>
<li>Header complete: name, department, period, trip purpose, currency.</li>
<li>One line per expense with date, merchant, category and amount.</li>
<li>A specific business purpose on every line.</li>
<li>Receipts attached and numbered to match lines (lodging always).</li>
<li>Mileage recorded with date, route, purpose, miles and rate.</li>
<li>Company card items marked so they are not reimbursed twice.</li>
<li>Advances subtracted and net amount calculated.</li>
<li>Totals double-checked.</li>
<li>Employee signature and approver signature.</li>
<li>Submitted before the policy deadline, with a copy kept.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Vague purposes.</strong> "Travel" or "lunch" does not explain the business reason. Name the client, project or meeting.</li>
<li><strong>Claiming company card charges as reimbursable.</strong> They are already paid by the company. List them only if your policy asks you to account for them.</li>
<li><strong>Forgetting the advance.</strong> Leaving out a cash advance overstates what you are owed and gets the report rejected.</li>
<li><strong>Missing receipts.</strong> Photograph receipts immediately. If one is lost, attach a signed missing-receipt statement if your policy allows it.</li>
<li><strong>Wrong mileage rate.</strong> In 2026 the IRS business rate changed mid-year, from 72.5 cents to 76 cents per mile on July 1. Use the rate that applies to the trip date, or your employer's own rate.</li>
<li><strong>Submitting months late.</strong> Late reports can miss accountable plan timing and become taxable, as well as distort the company's monthly accounts.</li>
<li><strong>Personal items mixed in.</strong> Minibar charges, family meals or personal side trips should be removed before you submit.</li>
</ul>

<h2>Tools and templates</h2>
<p>A spreadsheet works for a handful of claims a month: one tab per report, a line table with formulas for totals, and a summary block for the advance. Many companies use expense software that reads receipts automatically. Whichever you use, the fields above stay the same.</p>
<p>If you are self-employed, you do not reimburse yourself through an expense report, but you still need records for deductions. Our guides to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> and <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> explain what to keep. Understanding which costs count as <a href="/blog/operating-expenses">operating expenses</a> also helps you categorize lines correctly.</p>
<p>When a client has agreed to cover costs, bill them on an invoice instead. The <a href="/invoice-generator">invoice generator</a> lets you add each cost as a line item, apply one tax rate where needed and note "receipts attached" in the terms before downloading a PDF. It does not produce expense reports, so keep a dedicated expense report template for employee claims. If you need to work out the tax portion of a receipt total, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help. For more on costs, cash and records, browse our <a href="/blog/category/business-finance">business finance guides</a>.</p>
`,
  },
  {
    slug: "mileage-log-template",
    title: "Mileage Log Template: IRS Rules and What to Record",
    description:
      "Set up a mileage log template that meets IRS rules: what to record per trip, the 2026 standard mileage rates, UK HMRC mileage rates and a worked example.",
    category: "design-templates",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "expense-report-template",
      "self-employed-tax-deductions",
      "schedule-c-for-freelancers",
    ],
    faqs: [
      {
        q: "What does the IRS require in a mileage log?",
        a: "IRS Publication 463 says adequate records for car expenses include the mileage for each business use and the total miles for the year, plus the date of each use, the business destination and the business purpose. Records should be made at or near the time of the trip. A log written weeks later carries less weight than one kept as you go.",
      },
      {
        q: "What is the IRS standard mileage rate for 2026?",
        a: "For business use, the IRS set 72.5 cents per mile for January 1 to June 30, 2026, then raised it to 76 cents per mile for July 1 to December 31, 2026, citing higher fuel prices. The medical and military moving rate rose from 20.5 to 23.5 cents, and the charitable rate stayed at 14 cents. Check the IRS standard mileage rates page for any later change.",
      },
      {
        q: "Can I deduct my commute to work?",
        a: "Generally no. Travel between your home and your regular place of work is personal commuting, even if you take work calls on the way. Trips from your regular workplace to a client site, or between work locations, are usually business miles. Rules for home offices and temporary work locations have exceptions, so check IRS Publication 463 for your situation.",
      },
      {
        q: "Can I reconstruct a mileage log at the end of the year?",
        a: "You can rebuild records from calendars, emails and invoices, but a reconstructed log is weaker evidence than one kept at the time, and the IRS may reject estimates that are not supported. Publication 463 also allows you to keep an adequate record for a representative part of the year and use it for the full year, if you can show that period is typical.",
      },
      {
        q: "What are the HMRC mileage rates for 2026 to 2027?",
        a: "According to GOV.UK, the approved mileage rate for cars and vans from the 2026 to 2027 tax year is 55p per business mile for the first 10,000 miles and 25p per mile after that, up from the 45p rate that applied from 2011 to 2026. Motorcycles are 24p and bicycles 20p per mile. A passenger payment of 5p per passenger per mile may also be paid.",
      },
      {
        q: "Do I need to record odometer readings?",
        a: "The IRS asks for the mileage of each business use and total miles for the year, and odometer readings at the start and end of each trip, plus start and end of the year, are the clearest way to prove both. A GPS app that records distance is also acceptable evidence for many taxpayers. Whatever you use, keep it consistent and contemporaneous.",
      },
      {
        q: "Can I use the standard mileage rate and also claim gas and repairs?",
        a: "No. The standard mileage rate replaces actual vehicle costs such as fuel, maintenance, insurance and depreciation. You can generally still deduct business parking fees and tolls separately. If you prefer actual expenses, you need receipts for all car costs and must allocate them by the business-use percentage shown in your mileage log.",
      },
      {
        q: "How long should I keep a mileage log?",
        a: "Keep it at least as long as the tax return it supports could be examined. In the US that is generally three years from filing, longer in some situations. In the UK, self-employed people generally keep records for at least five years after the 31 January submission deadline. Store a digital copy alongside the return and the related receipts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A mileage log template is a record of every business trip you drive. For IRS purposes, log the date, destination, business purpose and miles for each trip, plus total miles for the year. For 2026, the IRS business rate is 72.5 cents per mile through June 30 and 76 cents from July 1.</p>

<p>Vehicle costs are one of the most common deductions for freelancers and small business owners, and one of the most commonly challenged. The reason is simple: without a log, there is no proof of which miles were business and which were personal. A good log takes a minute per trip and can support a deduction or reimbursement worth thousands. This guide explains what the IRS expects you to record, the 2026 rates, how UK mileage allowance works, a worked example with the arithmetic, and the mistakes that make logs fail.</p>

<h2>What is a mileage log?</h2>
<p>A mileage log is a running record of business use of a vehicle. Each entry shows when you drove, where you went, why, and how far. At year end, the log gives you total business miles and total miles, which you need either to claim the standard mileage rate or to work out the business percentage of actual car expenses.</p>
<p>Employees use the same records to support mileage reimbursement claims on an <a href="/blog/expense-report-template">expense report template</a>. Self-employed people use them to support deductions on their tax return.</p>

<h2>What the IRS requires you to record</h2>
<p>IRS Publication 463 describes the records needed to prove car expenses. For business mileage, adequate records include:</p>
<ul>
<li>The mileage for each business use of the car.</li>
<li>The total miles driven during the year (business and personal).</li>
<li>The date of each business use.</li>
<li>The business destination.</li>
<li>The business purpose of each trip.</li>
</ul>
<p>The publication also stresses timing: you should record the details at or near the time of the trip, because a timely record has more value than a statement prepared later. If you claim actual expenses instead of the standard rate, you also need receipts for fuel, repairs, insurance and other car costs, plus records of the car's cost and the date you started using it for business.</p>
<p>There is one useful shortcut. You can keep an adequate record for part of the year and use it to prove business use for the whole year, as long as you can show that the sample period is representative. A salesperson with the same weekly route, for example, may be able to rely on a representative sample. If your driving is irregular, log every trip.</p>

<h2>What to include in a mileage log template</h2>
<table>
<thead><tr><th>Column</th><th>Example entry</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Date</td><td>2026-07-14</td><td>One row per trip, or per stop on a multi-stop day</td></tr>
<tr><td>Start location</td><td>Office, 210 Main St</td><td>Use a consistent name for regular places</td></tr>
<tr><td>Destination</td><td>Client site, Lakeview Dental</td><td>Name the client or site, not just a city</td></tr>
<tr><td>Business purpose</td><td>Install and test network equipment</td><td>Specific enough that a stranger understands it</td></tr>
<tr><td>Odometer start</td><td>48,215</td><td>Optional if you use GPS distance, but strong evidence</td></tr>
<tr><td>Odometer end</td><td>48,251</td><td>End minus start gives the trip miles</td></tr>
<tr><td>Business miles</td><td>36</td><td>Round trip unless you log each leg separately</td></tr>
<tr><td>Parking and tolls</td><td>$12.00</td><td>Deductible separately from the standard rate</td></tr>
<tr><td>Vehicle</td><td>2022 sedan, plate ABC-1234</td><td>Needed if you use more than one vehicle</td></tr>
</tbody>
</table>
<p>Add a year-start and year-end odometer reading at the top of your mileage log template. Those two numbers give you total miles for the year, which the IRS asks for and which you need to calculate the business-use percentage.</p>

<h2>IRS standard mileage rates for 2026</h2>
<p>The standard mileage rate is an optional per-mile amount that replaces tracking actual fuel, repairs, insurance and depreciation. In 2026 the IRS changed the rates partway through the year. According to the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer">IRS standard mileage rates page</a>:</p>
<table>
<thead><tr><th>Purpose</th><th>Jan 1 to Jun 30, 2026</th><th>Jul 1 to Dec 31, 2026</th></tr></thead>
<tbody>
<tr><td>Business</td><td>72.5 cents per mile</td><td>76 cents per mile</td></tr>
<tr><td>Medical and military moving</td><td>20.5 cents per mile</td><td>23.5 cents per mile</td></tr>
<tr><td>Charitable service</td><td>14 cents per mile</td><td>14 cents per mile</td></tr>
</tbody>
</table>
<p>The mid-year change, made by IRS Announcement 2026-11, applies to miles driven on or after July 1, 2026. That makes the date column in your log more important than usual: you need to split 2026 business miles into the two periods. Rates for 2027 will be announced separately, so check the IRS page before you use a new rate.</p>
<p>A few other rules apply. If you own the car and want to use the standard rate, you generally must choose it in the first year the car is used for business. You cannot use the standard rate if you operate five or more cars at the same time, as in a fleet. Business parking fees and tolls can be deducted in addition to the standard rate.</p>

<h2>Worked example: a year of business miles</h2>
<p>These figures are illustrative. A self-employed IT technician drives 9,000 miles in 2026. Her mileage log template shows the following business miles, split at July 1:</p>
<ul>
<li>January 1 to June 30: 1,840 business miles x $0.725 = $1,334.00.</li>
<li>July 1 to December 31: 2,160 business miles x $0.76 = $1,641.60.</li>
<li>Total business miles: 1,840 + 2,160 = 4,000.</li>
<li>Standard mileage amount: $1,334.00 + $1,641.60 = $2,975.60.</li>
<li>Plus business parking and tolls from the log: $186.00.</li>
<li>Total vehicle deduction under the standard method: $2,975.60 + $186.00 = <strong>$3,161.60</strong>.</li>
</ul>
<p>Her business-use percentage is 4,000 / 9,000 = 44.4%. If she used the actual expense method instead, she would apply that percentage to her total car costs. For example, $9,500 of actual costs (fuel, insurance, repairs and depreciation) x 44.4% would be about $4,218. Which method is better depends on the vehicle and the year, and the first-year choice can limit later options, so it is worth discussing with a tax preparer.</p>
<p>A sole proprietor would generally report these car expenses on Schedule C; our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> shows where they go. For a broader list of deductible costs, see <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>

<h2>UK mileage rates and logs</h2>
<p>In the UK, HMRC publishes approved mileage allowance payment (AMAP) rates. According to <a href="https://www.gov.uk/government/publications/rates-and-allowances-travel-mileage-and-fuel-allowances/travel-mileage-and-fuel-rates-and-allowances" target="_blank" rel="noopener noreferrer">GOV.UK's travel and mileage rates page</a>, the rates from the 2026 to 2027 tax year are:</p>
<ul>
<li>Cars and vans: 55p per business mile for the first 10,000 miles in the tax year, then 25p per mile. The first-10,000-mile rate was 45p from 2011 to 2026.</li>
<li>Motorcycles: 24p per mile.</li>
<li>Bicycles: 20p per mile.</li>
<li>Passenger payments: 5p per passenger per business mile for carrying fellow employees on work journeys.</li>
</ul>
<p>Employers can pay up to these amounts tax-free. If an employer pays less, the employee may be able to claim tax relief on the difference. Illustrative example: an employee drives 12,000 business miles in 2026 to 2027. The approved amount is (10,000 x £0.55) + (2,000 x £0.25) = £5,500 + £500 = £6,000. If the employer pays 35p for every mile, that is 12,000 x £0.35 = £4,200, and the employee could claim relief on £6,000 - £4,200 = £1,800. Relief reduces taxable income; it is not a £1,800 refund.</p>
<p>Self-employed people in the UK can use simplified expenses at the same mileage rates instead of actual vehicle costs, subject to conditions. Either way, HMRC expects records of business journeys, so the same log columns work. You will use the totals on your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>. Because rates change, check GOV.UK before each tax year.</p>

<h2>Business miles vs commuting</h2>
<p>The most common reason logs are cut back on review is commuting. Travel between home and your regular workplace is personal, not business. Typical business trips include:</p>
<ul>
<li>Driving from your office or regular workplace to a client, supplier or job site.</li>
<li>Driving between two work locations on the same day.</li>
<li>Trips to the bank, post office or a supplier for business errands.</li>
<li>Travel to a temporary work location, within the limits set by tax rules.</li>
</ul>
<p>If your home is your principal place of business, trips from home to clients may count as business miles. The detailed rules are in IRS Publication 463 and HMRC guidance; check them before treating home-based trips as business.</p>

<h2>Paper, spreadsheet or app: choosing a mileage log template</h2>
<p>The IRS and HMRC care about what you record, not the format. Pick the option you will actually keep up with.</p>
<ul>
<li><strong>Paper logbook.</strong> A notebook in the glove box is cheap and needs no battery. The downside is that totals must be added up by hand and a lost book means lost records. Photograph the pages monthly.</li>
<li><strong>Spreadsheet.</strong> A spreadsheet mileage log template can calculate trip miles from odometer readings, total each month and multiply by the right rate for each period. Add a data-validation list for regular destinations to save typing. Back it up to cloud storage.</li>
<li><strong>GPS app.</strong> Apps record distance automatically and let you classify each trip as business or personal. They save the most time, but you still need to add a business purpose to each trip, and you should export the log at year end so you are not dependent on a subscription.</li>
</ul>
<p>Whichever format you choose, set up the mileage log template on January 1 (or April 6 for the UK tax year) with the starting odometer reading, and review it monthly so gaps are caught while you still remember the trips.</p>

<h2>Mileage log checklist</h2>
<ul>
<li>Year-start and year-end odometer readings recorded.</li>
<li>One entry per trip with date, start, destination, purpose and miles.</li>
<li>Entries made at or near the time of each trip.</li>
<li>Commuting excluded.</li>
<li>2026 US miles split at July 1 for the two business rates.</li>
<li>UK miles tracked against the 10,000-mile threshold for the tax year.</li>
<li>Parking and tolls recorded with receipts.</li>
<li>Separate logs (or a vehicle column) for each car.</li>
<li>Annual totals calculated and stored with your tax records.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Logging at year end.</strong> A reconstructed log of round numbers is easy to challenge. Log weekly at least.</li>
<li><strong>Vague purposes.</strong> "Business" or "meeting" is not enough. Name the client or task.</li>
<li><strong>Claiming the commute.</strong> Home to your regular office is personal, even with calls on the way.</li>
<li><strong>Using one rate for all of 2026.</strong> Business miles before July 1 use 72.5 cents; miles from July 1 use 76 cents.</li>
<li><strong>Double counting.</strong> Claiming the standard rate and also deducting fuel or repairs is not allowed.</li>
<li><strong>No total-miles figure.</strong> Without total miles you cannot show the business-use percentage.</li>
<li><strong>Using the old UK rate.</strong> For 2026 to 2027, the first-10,000-mile rate is 55p, not 45p.</li>
</ul>

<h2>Billing clients for mileage</h2>
<p>If a contract lets you charge clients for travel, your mileage log is the evidence behind that charge. Add a line such as "Travel, 36 miles at $0.76" to your invoice; our guide to <a href="/blog/reimbursable-expenses-invoice">invoicing reimbursable expenses</a> explains how to present it. The <a href="/invoice-generator">free invoice generator</a> lets you add mileage as a line item with quantity and rate, so the arithmetic is shown to the client, and download the invoice as a PDF. It does not track mileage, so keep your log in a spreadsheet or app. A <a href="/blog/timesheet-template">timesheet template</a> can sit alongside the log if you also bill travel time. For other record-keeping formats, browse our <a href="/blog/category/design-templates">design and template guides</a>.</p>
`,
  },
  {
    slug: "payment-voucher-format",
    title: "Payment Voucher Format: Fields, Types and Example",
    description:
      "Learn the payment voucher format accountants use: required fields, cash vs bank vouchers, a filled example with withholding tax math and the journal entry.",
    category: "design-templates",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["journal-entries", "petty-cash-log", "withholding-tax-on-invoices"],
    faqs: [
      {
        q: "What is a payment voucher?",
        a: "A payment voucher is an internal accounting document that authorizes and records money paid out by a business. It shows who was paid, how much, why, from which cash or bank account, and which expense or liability account is debited. It is signed by the preparer, checked and approved before payment, and then filed with the supporting invoice or bill as evidence for the books and for audit.",
      },
      {
        q: "What are the main types of payment vouchers?",
        a: "The common types are the cash payment voucher, for payments made in cash, and the bank payment voucher, for payments by check, bank transfer or online banking. Businesses also use petty cash vouchers for small office payouts and advance vouchers for money given to staff before an expense. Receipt vouchers record money coming in, and journal vouchers record non-cash entries such as adjustments.",
      },
      {
        q: "What is the difference between a payment voucher and a receipt?",
        a: "A payment voucher is prepared by the business paying money out and stays in its own records as authorization and proof of the payment. A receipt is issued by the person or business receiving money, confirming they were paid. A complete payment file often contains both: the voucher the payer prepared and the receipt or acknowledgment from the payee.",
      },
      {
        q: "Who signs a payment voucher?",
        a: "Usually three people: the accountant or clerk who prepares it, a person who checks the amount and account coding against the supporting documents, and an authorized signatory who approves the payment. For cash payments, the payee often signs too, confirming they received the money. Separating these roles is a basic internal control against errors and fraud.",
      },
      {
        q: "Why is the amount written in words on a voucher?",
        a: "Writing the amount in both figures and words makes it much harder to alter the voucher after approval, for example by adding a digit. If the two ever differ, the discrepancy is obvious and the voucher should be rechecked before payment. The same convention is used on checks and is standard on vouchers in India and Pakistan.",
      },
      {
        q: "What is a payment voucher under GST in India?",
        a: "Under India's GST law, a payment voucher has a specific meaning. When a registered person is liable to pay tax under reverse charge, section 31(3)(g) of the CGST Act requires them to issue a payment voucher at the time of paying the supplier. Rule 52 of the CGST Rules lists its contents, including supplier and recipient details, a serial number, the amount paid and the tax.",
      },
      {
        q: "Is a payment voucher the same as a payment slip?",
        a: "Not quite. A payment slip or challan is usually a form used to deposit money into a bank or pay a tax or fee, such as a tax payment challan. A payment voucher is an internal record of a payment the business makes. In some countries, a school fee voucher is also called a voucher, but it works more like a bill sent to the payer.",
      },
      {
        q: "How long should payment vouchers be kept?",
        a: "Keep them, with their supporting documents, for as long as your tax and company laws require. Retention periods are often in the range of five to ten years depending on the country and the type of record, and longer if an audit or dispute is open. Check the current rule in your jurisdiction and store scanned copies with the originals.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A payment voucher format is the standard layout for recording money a business pays out. It includes a voucher number, date, payee, amount in figures and words, the account debited and credited, payment method and reference, a narration, supporting document numbers, and signatures for preparation, checking and approval.</p>

<p>Every payment a business makes should be traceable: who approved it, what it was for, and which account it hit. In many companies, especially in India, Pakistan, the Gulf and in public sector bodies, that trail starts with a payment voucher. This guide explains what a payment voucher is, the fields a good format includes, the different types, a filled example with withholding tax arithmetic and the matching journal entry, and the mistakes that cause audit queries.</p>

<h2>What is a payment voucher?</h2>
<p>A payment voucher is an internal document that authorizes and records a payment. It is prepared by the business that is paying, not by the supplier, and it sits between the supplier's invoice and the actual money leaving the bank or cash box. The voucher gives the accountant a single place to show the approval, the account coding and the evidence.</p>
<p>In double-entry terms, a payment voucher is the source document for a credit to cash or bank and a debit to an expense, asset or supplier account. Our guide to <a href="/blog/journal-entries">journal entries</a> explains how those debits and credits work, and <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a> covers the system behind them.</p>

<h2>Payment voucher format: the standard fields</h2>
<p>Layouts vary between companies and accounting packages, but most include the fields below.</p>
<table>
<thead><tr><th>Field</th><th>Example</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Voucher type</td><td>Bank Payment Voucher (BPV)</td><td>Tells the reader which cash or bank book it belongs to</td></tr>
<tr><td>Voucher number</td><td>BPV-2026-0412</td><td>Unique, sequential reference for the payment</td></tr>
<tr><td>Date</td><td>27-10-2026</td><td>Date of payment, which drives the accounting period</td></tr>
<tr><td>Payee</td><td>Crescent Office Supplies</td><td>Who receives the money</td></tr>
<tr><td>Account debited</td><td>Accounts payable: Crescent Office Supplies</td><td>The expense, asset or liability being settled</td></tr>
<tr><td>Account credited</td><td>Bank: Current account 0123</td><td>Where the money comes from</td></tr>
<tr><td>Amount in figures</td><td>90,000.00</td><td>The value paid</td></tr>
<tr><td>Amount in words</td><td>Rupees Ninety Thousand Only</td><td>Guards against alteration</td></tr>
<tr><td>Payment mode and reference</td><td>Online transfer, ref 7781234</td><td>Links the voucher to the bank statement</td></tr>
<tr><td>Narration</td><td>Payment against invoice CS-1187 for printer toner, less WHT</td><td>Explains the payment in one line</td></tr>
<tr><td>Supporting documents</td><td>Invoice CS-1187, PO 3305, goods received note 552</td><td>Evidence for audit</td></tr>
<tr><td>Cost center or project</td><td>Admin department</td><td>Optional; used for management reporting</td></tr>
<tr><td>Signatures</td><td>Prepared by, checked by, approved by, received by</td><td>Shows the payment was authorized and controlled</td></tr>
</tbody>
</table>
<p>Organizations that make many deductions at source, such as withholding tax, add columns for the gross amount, each deduction and the net amount paid.</p>

<h2>Types of payment vouchers</h2>
<p>Accountants usually separate vouchers by the account the money comes from, because each type is posted to a different book.</p>
<ul>
<li><strong>Cash payment voucher (CPV).</strong> For payments in cash. The payee normally signs the voucher to confirm receipt, since there is no bank record.</li>
<li><strong>Bank payment voucher (BPV).</strong> For payments by check, bank transfer or online banking. The check number or transfer reference is recorded so the voucher can be matched during <a href="/blog/bank-reconciliation">bank reconciliation</a>.</li>
<li><strong>Petty cash voucher.</strong> For small payouts from an office float, such as courier fees or tea and snacks. These are summarized in a <a href="/blog/petty-cash-log">petty cash log</a> and replenished periodically.</li>
<li><strong>Advance voucher.</strong> For money paid to an employee or supplier before the expense happens, settled later against actual bills.</li>
</ul>
<p>Two related vouchers are not payment vouchers but often appear in the same voucher series:</p>
<ul>
<li><strong>Receipt vouchers</strong> (cash or bank) record money received.</li>
<li><strong>Journal vouchers</strong> record entries with no cash or bank movement, such as depreciation, accruals or corrections.</li>
</ul>
<p>Some accounting packages also use a contra voucher for transfers between cash and bank, such as depositing cash into the bank.</p>

<h2>Filled example: bank payment voucher with withholding tax</h2>
<p>The figures below are illustrative, and the withholding rate is an example only. Real rates depend on the country, the type of payment and the supplier's tax status, so check the current rate before you use it.</p>
<p>A company in Pakistan receives an invoice for PKR 100,000 from a supplier for office supplies. The company is required to withhold income tax at source. Using an illustrative rate of 10%:</p>
<ul>
<li>Gross invoice amount: PKR 100,000.00.</li>
<li>Withholding tax: 100,000 x 10% = PKR 10,000.00.</li>
<li>Net amount paid to supplier: 100,000 - 10,000 = PKR 90,000.00.</li>
</ul>
<p>The completed voucher would read:</p>
<table>
<thead><tr><th>Field</th><th>Entry</th></tr></thead>
<tbody>
<tr><td>Voucher</td><td>Bank Payment Voucher BPV-2026-0412</td></tr>
<tr><td>Date</td><td>27 October 2026</td></tr>
<tr><td>Payee</td><td>Crescent Office Supplies</td></tr>
<tr><td>Gross amount</td><td>PKR 100,000.00</td></tr>
<tr><td>Less income tax withheld</td><td>PKR 10,000.00</td></tr>
<tr><td>Net paid</td><td>PKR 90,000.00 (Rupees Ninety Thousand Only)</td></tr>
<tr><td>Mode</td><td>Online transfer, reference 7781234</td></tr>
<tr><td>Narration</td><td>Payment of invoice CS-1187 dated 15 Oct 2026, office supplies, less income tax withheld</td></tr>
<tr><td>Supporting documents</td><td>Invoice CS-1187, PO 3305, GRN 552</td></tr>
<tr><td>Signatures</td><td>Prepared: A. Khan; Checked: S. Malik; Approved: Finance Manager</td></tr>
</tbody>
</table>
<h3>The journal entry behind the voucher</h3>
<p>Assuming the invoice was already recorded as a liability, the voucher posts:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accounts payable: Crescent Office Supplies</td><td>100,000</td><td></td></tr>
<tr><td>Bank: Current account</td><td></td><td>90,000</td></tr>
<tr><td>Withholding tax payable</td><td></td><td>10,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>100,000</strong></td><td><strong>100,000</strong></td></tr>
</tbody>
</table>
<p>Debits equal credits, so the entry balances. The withholding tax payable is later cleared when the company deposits the tax with the authorities and issues a certificate to the supplier. For how deductions at source show up on invoices from the supplier's side, see <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Payment vouchers in India and Pakistan</h2>
<p>In South Asia, a written payment voucher format is standard practice in companies, schools, NGOs and government offices, and auditors routinely ask to see vouchers with supporting documents. Most accounting software used in the region generates vouchers by type (payment, receipt, contra, journal) and numbers them automatically.</p>
<p>India's GST law also gives "payment voucher" a specific legal meaning. When a registered business pays for a supply on which it must pay GST under reverse charge, section 31(3)(g) of the CGST Act requires it to issue a payment voucher at the time of making payment to the supplier. Rule 52 of the CGST Rules lists the contents, including the supplier's name, address and GSTIN if registered, a serial number unique for the financial year, the date, the recipient's details, a description of the goods or services, the amount paid, the tax rate and tax amount, the place of supply for inter-state supplies, and a signature. The current text is available on the <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer">CBIC GST portal</a>. Our guide to <a href="/blog/reverse-charge-invoice">reverse charge invoices</a> explains how reverse charge works more generally.</p>
<p>In Pakistan, payment vouchers commonly show income tax and, where relevant, sales tax withheld at source, together with the supplier's NTN. Withholding obligations and rates change through finance acts, so confirm them each year.</p>

<h2>How to set up your own payment voucher format</h2>
<p>Whether you print vouchers from a spreadsheet or generate them in accounting software, the setup decisions are the same.</p>
<ol>
<li><strong>Decide the series.</strong> Use a separate prefix for each type, such as CPV for cash, BPV for bank and PCV for petty cash, followed by the year and a running number. Restart numbering only at the start of a financial year, and never reuse a number.</li>
<li><strong>Fix the chart of accounts.</strong> Give preparers a dropdown or printed list of account codes so the same expense is always posted to the same account.</li>
<li><strong>Set approval limits.</strong> Write down who can approve payments up to which amount. For example, a department head might approve up to a set limit and anything larger goes to the finance manager or a director.</li>
<li><strong>Add deduction lines.</strong> If you withhold tax or deduct retention, build those lines into the payment voucher format so the gross, deductions and net are always visible.</li>
<li><strong>Design for the file.</strong> A half-page A4 or A5 layout is common, so vouchers can be stapled on top of the supplier's invoice and filed by number.</li>
<li><strong>Plan for scanning.</strong> If you keep digital records, scan each voucher with its attachments as a single PDF named by voucher number.</li>
</ol>
<p>Small businesses often start with a spreadsheet: one sheet as the printable voucher, one as a register listing every voucher number, date, payee and amount. The register makes it easy to spot gaps and to total payments by month. As volumes grow, accounting software that creates vouchers directly from approved bills usually saves time and reduces keying errors.</p>

<h2>Payment voucher vs invoice vs receipt</h2>
<table>
<thead><tr><th>Document</th><th>Prepared by</th><th>Purpose</th><th>Kept by</th></tr></thead>
<tbody>
<tr><td>Invoice</td><td>Supplier</td><td>Requests payment for goods or services</td><td>Both parties</td></tr>
<tr><td>Payment voucher</td><td>Payer</td><td>Authorizes and records the payment internally</td><td>Payer</td></tr>
<tr><td>Receipt</td><td>Payee</td><td>Confirms money was received</td><td>Payer (as evidence)</td></tr>
<tr><td>Remittance advice</td><td>Payer</td><td>Tells the supplier which invoices a payment covers</td><td>Supplier</td></tr>
</tbody>
</table>
<p>A <a href="/blog/remittance-advice">remittance advice</a> is the outward-facing companion to a voucher: the voucher stays in your files, while the remittance tells the supplier what you paid and what you deducted.</p>

<h2>Payment voucher checklist</h2>
<ul>
<li>Correct voucher type (cash, bank, petty cash, advance).</li>
<li>Unique sequential number with no gaps.</li>
<li>Payee name matching the invoice and bank account.</li>
<li>Gross amount, deductions and net amount shown separately.</li>
<li>Net amount in figures and words, and the two agree.</li>
<li>Debit and credit accounts coded correctly.</li>
<li>Check number or transfer reference recorded.</li>
<li>Clear narration naming the invoice and purpose.</li>
<li>Supporting documents attached and listed.</li>
<li>Prepared, checked and approved by different people; payee signature for cash.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Paying without a supporting document.</strong> A voucher with nothing attached is the first thing an auditor questions.</li>
<li><strong>One person doing everything.</strong> If the same person prepares, approves and pays, there is no control.</li>
<li><strong>Wrong account coding.</strong> Posting a capital purchase as an expense, or the wrong supplier account, distorts the <a href="/blog/general-ledger">general ledger</a>.</li>
<li><strong>Figures and words that disagree.</strong> Always reread the amount in words before signing.</li>
<li><strong>Skipping withholding.</strong> Paying the gross amount when tax should have been withheld can leave the payer liable for the tax.</li>
<li><strong>Paying the same invoice twice.</strong> Stamp invoices "PAID" with the voucher number once processed.</li>
<li><strong>Loose numbering.</strong> Gaps or duplicates in the voucher series make it hard to prove completeness.</li>
</ul>

<h2>Where invoices fit in</h2>
<p>A payment voucher format records money going out; the document that triggers it is usually the supplier's invoice. If you are on the supplier side and want your bills to be easy to process, make sure your invoices carry a clear invoice number, your tax number, the buyer's PO number and the payment details. The <a href="/invoice-generator/pakistan">invoice generator for Pakistan</a> includes NTN fields and lets you download a PDF, and the main <a href="/invoice-generator">invoice generator</a> works for other countries. Neither produces payment vouchers or receipts, so keep a separate voucher template or use your accounting software for those.</p>
`,
  },
  {
    slug: "cash-memo-format",
    title: "Cash Memo Format: What It Is and How to Write One",
    description:
      "See the cash memo format shops use for cash sales: required fields, a filled sample with totals, cash memo vs invoice vs receipt, and GST and FBR points.",
    category: "design-templates",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["bill-format", "invoice-vs-receipt", "tax-invoice-vs-retail-invoice"],
    faqs: [
      {
        q: "What is a cash memo?",
        a: "A cash memo is a document a seller gives a buyer when goods or services are paid for in full at the time of sale. It lists the items, quantities, rates and total, and confirms the sale was a cash sale. The term is widely used in India, Pakistan and Bangladesh, where shops often issue cash memos from pre-printed, numbered books with a carbon copy for the seller.",
      },
      {
        q: "What is the difference between a cash memo and an invoice?",
        a: "A cash memo records a sale that has already been paid for at the counter. An invoice usually records a sale on credit and asks for payment by a due date, although invoices can also be marked paid. In accounting, a cash memo is posted to cash sales, while a credit invoice creates an account receivable. Where tax law requires a tax invoice, a simple cash memo may not be enough.",
      },
      {
        q: "Is a cash memo the same as a receipt?",
        a: "They overlap but are not identical. A cash memo itemizes what was sold and shows that it was paid for at the time of sale. A receipt confirms that money was received, often for a payment against an earlier invoice or for a fee, and may not list goods at all. In everyday retail use, a shop's cash memo usually serves as the customer's receipt.",
      },
      {
        q: "What details must a cash memo have?",
        a: "At minimum: the seller's name and address, a serial number, the date, a description of each item with quantity, rate and amount, the total, and the seller's signature or stamp. Registered businesses should add their tax registration number and the tax charged, and in many cases must issue a tax invoice instead. The buyer's name is optional for small retail sales.",
      },
      {
        q: "Can a GST-registered business in India issue a cash memo?",
        a: "A GST-registered business generally must issue a tax invoice for taxable supplies, whether paid in cash or not. The CGST Act and Rule 46 allow a registered person to skip a separate invoice where the value is under Rs 200, the buyer is unregistered and does not ask for one, but a consolidated tax invoice must be issued at the end of each day. Check current rules with a GST practitioner.",
      },
      {
        q: "Do retailers in Pakistan need to issue FBR-integrated invoices?",
        a: "Retailers classified as Tier-1 under Pakistan's sales tax law are required to integrate their point-of-sale systems with FBR, and their receipts carry an FBR invoice number and QR code. Smaller retailers may still use manual cash memos. Which category applies, and the current integration rules, can change through finance acts and FBR notifications, so check the current rule with FBR or a tax adviser.",
      },
      {
        q: "Is a handwritten cash memo valid?",
        a: "Yes, for most small cash sales, a handwritten memo from a numbered book is acceptable as a sales record, provided it is legible, dated, numbered and signed or stamped, and the seller keeps the carbon copy. It may not satisfy tax rules where a tax invoice or an electronic or POS-generated invoice is mandatory, so registered businesses should confirm what their tax authority requires.",
      },
      {
        q: "Is a cash memo a credit memo?",
        a: "No. A cash memo records a cash sale. A credit memo, or credit note, reduces an amount the buyer owes, for example after a return or an overcharge on an invoice. The names sound alike, but the documents do opposite jobs: one records money received for a sale, the other records a reduction in what is owed.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cash memo format is the layout a seller uses to record a sale paid for in full at the time of purchase. It includes the seller's name and address, a serial number, date, item descriptions with quantity, rate and amount, the total in figures and words, and a signature or stamp. Registered sellers add tax details.</p>

<p>Walk into a hardware store, pharmacy or wholesale market in India or Pakistan and pay cash, and you will often get a small printed slip with the shop's name across the top and a carbon copy torn from a book. That slip is a cash memo. It is simple, but it does real work: it proves the purchase for warranty or returns, it gives the shop a sales record, and in some cases it is the only evidence of a business expense. This guide covers what a cash memo is, the standard fields, a filled sample with the arithmetic, how it differs from an invoice and a receipt, and the tax rules registered sellers need to watch.</p>

<h2>What is a cash memo?</h2>
<p>A cash memo, sometimes called a cash bill or cash memorandum, is a document issued by a seller when goods or services are paid for at the time of sale. Unlike an invoice for a credit sale, it does not ask for payment later. It records a transaction that is already complete.</p>
<p>Cash memos are most common in retail and small trade: general stores, electronics shops, pharmacies, building suppliers, tailors and repair shops. "Cash" here usually means immediate payment, which today may include card, mobile wallet or bank transfer at the counter, not just banknotes.</p>

<h2>Cash memo format: the standard fields</h2>
<p>Most printed cash memo books and software templates follow the same structure.</p>
<table>
<thead><tr><th>Section</th><th>Fields</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Header</td><td>Shop or business name, address, phone, logo</td><td>Pre-printed on memo books</td></tr>
<tr><td>Tax registration</td><td>GSTIN (India), NTN and STRN (Pakistan), TRN (UAE)</td><td>Only if registered; required on tax documents</td></tr>
<tr><td>Memo details</td><td>Cash memo number, date</td><td>Numbers must run in sequence</td></tr>
<tr><td>Customer</td><td>Name, phone or address</td><td>Optional for small retail sales; needed for warranty or business buyers</td></tr>
<tr><td>Item table</td><td>S. No., description, quantity, rate, amount</td><td>Amount = quantity x rate</td></tr>
<tr><td>Totals</td><td>Subtotal, discount, tax (if any), grand total</td><td>Show tax separately if you are registered</td></tr>
<tr><td>Amount in words</td><td>"Rupees Two Thousand Three Hundred Seventy-Five Only"</td><td>Prevents alteration</td></tr>
<tr><td>Payment mode</td><td>Cash, card, wallet, transfer</td><td>Helps with reconciliation</td></tr>
<tr><td>Footer</td><td>Signature or stamp, return or warranty note, "Thank you"</td><td>Keep notes fair and accurate</td></tr>
</tbody>
</table>
<p>For a printable layout, many shops use a half-A4 or A5 page in duplicate or triplicate: the original for the customer, one copy for the books and sometimes one for stock control.</p>

<h2>Sample cash memo: a filled example</h2>
<p>The figures below are illustrative. A small, unregistered stationery shop in Lahore sells the following items for cash.</p>
<p><strong>Al-Noor Stationers</strong>, 12 Urdu Bazaar, Lahore. Phone 0300-0000000.<br>
<strong>Cash Memo No.</strong> 1047 &nbsp; <strong>Date:</strong> 27-10-2026<br>
<strong>Customer:</strong> Bilal Ahmed</p>
<table>
<thead><tr><th>S. No.</th><th>Description</th><th>Qty</th><th>Rate (PKR)</th><th>Amount (PKR)</th></tr></thead>
<tbody>
<tr><td>1</td><td>A4 paper ream, 80 gsm</td><td>2</td><td>450</td><td>900</td></tr>
<tr><td>2</td><td>Desk calculator</td><td>1</td><td>1,200</td><td>1,200</td></tr>
<tr><td>3</td><td>Gel pens</td><td>5</td><td>80</td><td>400</td></tr>
<tr><td colspan="4">Subtotal</td><td>2,500</td></tr>
<tr><td colspan="4">Less discount 5%</td><td>125</td></tr>
<tr><td colspan="4"><strong>Total paid (cash)</strong></td><td><strong>2,375</strong></td></tr>
</tbody>
</table>
<p><strong>Rupees Two Thousand Three Hundred Seventy-Five Only.</strong> Signature and shop stamp.</p>
<p><strong>Check the arithmetic:</strong></p>
<ul>
<li>Line amounts: 2 x 450 = 900; 1 x 1,200 = 1,200; 5 x 80 = 400.</li>
<li>Subtotal: 900 + 1,200 + 400 = 2,500.</li>
<li>Discount: 2,500 x 5% = 125.</li>
<li>Total: 2,500 - 125 = 2,375.</li>
</ul>
<p>If the shop were registered for sales tax, the memo would need to show its registration numbers, the taxable value, the tax rate and the tax amount, and in many cases the tax authority would expect a proper tax invoice or a POS-generated receipt rather than a handwritten memo.</p>

<h2>Cash memo vs invoice vs receipt</h2>
<p>These three documents are often confused because a shop's printed slip can look like any of them. The difference is in what each records.</p>
<table>
<thead><tr><th>Point</th><th>Cash memo</th><th>Invoice</th><th>Receipt</th></tr></thead>
<tbody>
<tr><td>When issued</td><td>At the time of a paid sale</td><td>When goods or services are supplied, often before payment</td><td>When money is received</td></tr>
<tr><td>Payment status</td><td>Paid in full</td><td>Usually unpaid; shows a due date</td><td>Paid (fully or partly)</td></tr>
<tr><td>Itemized?</td><td>Yes</td><td>Yes</td><td>Not always</td></tr>
<tr><td>Accounting effect</td><td>Cash sales</td><td>Accounts receivable until paid</td><td>Reduces receivable or records income</td></tr>
<tr><td>Typical users</td><td>Retail shops, counter sales</td><td>B2B suppliers, freelancers, service firms</td><td>Anyone receiving payment</td></tr>
</tbody>
</table>
<p>For a deeper look at the last two, see our guide to <a href="/blog/invoice-vs-receipt">invoices vs receipts</a>. If you are designing a general sales slip, the <a href="/blog/bill-format">bill format guide</a> covers the related "bill" layout, and restaurants have their own conventions, covered in our <a href="/blog/restaurant-bill-format">restaurant bill format</a> article.</p>
<p>A related document is the cash voucher or payment voucher, which records money a business pays out rather than money it receives. Our guide to the <a href="/blog/payment-voucher-format">payment voucher format</a> explains that document.</p>

<h2>Tax rules for cash memos in India and Pakistan</h2>
<h3>India (GST)</h3>
<p>Under GST, a registered person supplying taxable goods or services must generally issue a tax invoice, and the required contents are set out in <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter6/rule46_v1.00.html" target="_blank" rel="noopener noreferrer">Rule 46 of the CGST Rules</a>. A plain cash memo without a GSTIN, tax breakup and the other mandatory particulars does not meet that requirement, and a business buyer cannot generally claim input tax credit on it. There is a limited relief: section 31(3)(b) of the CGST Act and Rule 46 let a registered person skip a separate tax invoice for supplies under Rs 200 to an unregistered buyer who does not ask for one, but a consolidated tax invoice must be issued at the end of each day for those sales. Composition taxpayers issue a bill of supply instead of a tax invoice. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> and the comparison of <a href="/blog/tax-invoice-vs-retail-invoice">tax invoices vs retail invoices</a> cover the details.</p>
<h3>Pakistan (sales tax)</h3>
<p>In Pakistan, a sales tax registered person must issue a sales tax invoice with the prescribed details, including NTN and STRN. Retailers classified as Tier-1 are required to integrate their point-of-sale systems with FBR, and their receipts carry an FBR invoice number and QR code, so a handwritten cash memo is not a substitute for them. Smaller unregistered shops commonly use manual cash memos. Because thresholds and categories change through finance acts, check the current rules. Our guide to the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a> lists the fields registered sellers need.</p>

<h2>Adapting the cash memo format to your business</h2>
<p>The core fields stay the same, but different trades add a few columns or notes that make the memo more useful.</p>
<ul>
<li><strong>Pharmacies.</strong> Add batch number and expiry date for each medicine, and the prescribing doctor's name where local rules require it. This helps with recalls and returns.</li>
<li><strong>Electronics and appliance shops.</strong> Record the model and serial number of each unit and state the warranty period. Customers will bring the memo back for warranty claims, so keep the description precise.</li>
<li><strong>Hardware and building supply.</strong> Show units clearly (bags, feet, kilograms, pieces), because quantity disputes are common with bulk items.</li>
<li><strong>Repair and service shops.</strong> Separate parts from labor, and note the job number and the item repaired. A service-only shop may find a simple receipt or invoice layout fits better.</li>
<li><strong>Wholesale counters.</strong> Add the buyer's business name and phone, because trade buyers often need the memo for their own records.</li>
</ul>

<h2>Printed book or digital cash memo format?</h2>
<p>Pre-printed, serially numbered memo books with carbon copies are cheap and need no power, which is why they remain popular in markets. Their weaknesses are handwriting errors, lost books and manual totals. A digital cash memo format, produced by billing software or a POS terminal, calculates totals automatically, keeps a searchable record and can print or send a copy to the customer's phone. For registered sellers, software is often the only practical way to meet invoice and reporting rules. Whichever you use, keep numbering continuous and back up digital records regularly.</p>

<h2>How to write a cash memo, step by step</h2>
<ol>
<li>Use the next number in the memo book or software sequence; never skip or reuse numbers.</li>
<li>Write the date and, if needed, the customer's name and phone number.</li>
<li>List each item with a clear description, quantity and rate.</li>
<li>Multiply quantity by rate for each line and add the lines for the subtotal.</li>
<li>Apply any discount and, if registered, the tax, then calculate the grand total.</li>
<li>Write the total in words.</li>
<li>Record the payment method.</li>
<li>Sign or stamp the memo, give the original to the customer and keep the copy.</li>
</ol>

<h2>Cash memo checklist</h2>
<ul>
<li>Business name, address and contact details.</li>
<li>Tax registration numbers if registered.</li>
<li>Unique, sequential memo number and date.</li>
<li>Item descriptions with quantity, rate and amount.</li>
<li>Subtotal, discount, tax and grand total, checked.</li>
<li>Amount in words matching the figures.</li>
<li>Payment mode.</li>
<li>Signature or stamp.</li>
<li>Carbon or digital copy retained for the books.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using a cash memo where a tax invoice is required.</strong> Registered sellers usually need a compliant tax invoice or POS receipt.</li>
<li><strong>Vague descriptions.</strong> "Goods" or "items" is useless for warranty claims and audits. Name the product and model.</li>
<li><strong>Skipped or torn-out numbers.</strong> Gaps in the series look like unrecorded sales. Cancel spoiled memos and keep them.</li>
<li><strong>Arithmetic errors.</strong> Recheck each line and the total before handing it over.</li>
<li><strong>Misleading footer notes.</strong> A printed "goods once sold will not be taken back" line does not override consumer protection law, and consumer authorities may treat such blanket notices as unfair.</li>
<li><strong>Not keeping copies.</strong> The seller's copy is part of the sales record for tax and stock.</li>
</ul>

<h2>When to use an invoice instead</h2>
<p>If a customer will pay later, needs a document for their company's accounts payable, or wants your tax number and their details shown, issue an invoice instead of a cash memo. The <a href="/invoice-generator">free invoice generator</a> builds a PDF with line items, one tax rate, an optional discount, and an amount paid field, so a fully paid sale shows a zero balance due. Its heading is always "Invoice", so it will not print the words "Cash Memo"; for counter sales, a dedicated cash memo format or POS system is the better fit. A clean layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a> prints well on A4. For buyers who pay the courier on delivery, see our guide to <a href="/blog/cash-on-delivery-invoicing">cash on delivery invoicing</a>.</p>
`,
  },
  {
    slug: "billing-address-vs-shipping-address",
    title: "Billing Address vs Shipping Address: What's the Difference?",
    description:
      "Billing address vs shipping address explained: what each means, when they differ, how they affect card checks and sales tax, and how to show both on invoices.",
    category: "invoicing-basics",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["packing-slip-vs-invoice", "sales-tax-nexus", "how-to-accept-credit-card-payments"],
    faqs: [
      {
        q: "What is a billing address?",
        a: "A billing address is the address linked to the person or business responsible for paying. For a card payment, it is the address the card issuer has on file for the cardholder, which is what address verification checks. On an invoice, it is the legal or accounts payable address of the customer being billed, which may be a head office rather than the site where goods are used.",
      },
      {
        q: "What is a shipping address?",
        a: "A shipping address, also called a delivery or ship-to address, is where the goods are physically sent. It can be the buyer's home, a workplace, a warehouse, a job site, a gift recipient or a locker. For services, there is usually no shipping address, although a service location may be recorded instead.",
      },
      {
        q: "Can my billing and shipping address be different?",
        a: "Yes, and they often are. People ship gifts to relatives, send orders to their office, or use a parcel locker. Businesses commonly pay from a head office and receive goods at a branch or warehouse. A different shipping address is normal. What matters for card payments is that the billing address matches the card issuer's records.",
      },
      {
        q: "What happens if my billing address is wrong?",
        a: "If the billing address does not match what your card issuer has on file, the merchant's address verification check may return a mismatch, and the payment can be declined or held for review depending on the merchant's settings. Update your address with your bank after moving, and check for typos, missing apartment numbers or old postcodes.",
      },
      {
        q: "Which address determines sales tax in the US?",
        a: "For goods shipped to a customer, most US states that have sales tax use destination-based sourcing, so tax is generally based on where the buyer receives the item, which is usually the shipping address. Some states source certain in-state sales to the seller's location. Services and digital products follow their own rules. Check the rules in each state where you have nexus.",
      },
      {
        q: "Is the billing address the same as the registered address?",
        a: "Not always. A company's registered office is its official legal address, while its billing address is where it wants invoices sent, often an accounts payable department or a shared services center. Many large customers ask suppliers to send invoices to a specific billing address or email and will reject invoices sent elsewhere.",
      },
      {
        q: "Should an invoice show both addresses?",
        a: "Show both whenever goods are delivered somewhere other than the buyer's billing address. The bill-to block identifies who must pay; the ship-to block identifies where the goods went. Both help the buyer's accounts payable team match the invoice to the purchase order and the goods received note, and they can matter for tax.",
      },
      {
        q: "What is bill to ship to under GST?",
        a: "Bill to ship to is a GST arrangement where the supplier bills one buyer but delivers goods to a third party at that buyer's direction. Section 10(1)(b) of the IGST Act treats the buyer who directs delivery as having received the goods, which is commonly read to make the buyer's principal place of business the place of supply. The e-way bill shows both addresses. Confirm specific cases with a GST practitioner.",
      },
      {
        q: "Does a PO box work as a billing or shipping address?",
        a: "A PO box can often be used as a billing address if it matches the card issuer's records. Many carriers, especially for courier and freight deliveries, cannot deliver to a PO box, so a street address is usually needed for shipping. Check what the merchant and carrier accept before placing the order.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the billing address vs shipping address question, the billing address belongs to whoever pays (for cards, the address the issuer has on file), while the shipping address is where the goods are delivered. They can differ. The billing address affects payment checks; the shipping address often decides sales tax.</p>

<p>Every checkout form and many invoices ask for two addresses, and most people fill in the same one twice. That works until it doesn't: a card is declined because the billing address is out of date, a parcel goes to a head office instead of a warehouse, or sales tax is charged at the wrong rate. This guide explains what each address means, when they should differ, how each affects card payments and tax, and how to show both correctly on an invoice.</p>

<h2>Billing address vs shipping address: the short version</h2>
<table>
<thead><tr><th>Point</th><th>Billing address</th><th>Shipping address</th></tr></thead>
<tbody>
<tr><td>Also called</td><td>Bill-to, invoice address, cardholder address</td><td>Ship-to, delivery address</td></tr>
<tr><td>Belongs to</td><td>The person or business responsible for paying</td><td>The place where goods are received</td></tr>
<tr><td>Used for</td><td>Invoices, statements, card verification, credit checks</td><td>Carrier delivery, packing slips, delivery notes</td></tr>
<tr><td>Card payments</td><td>Checked against the issuer's records (AVS)</td><td>Not checked by AVS; may be reviewed by fraud tools</td></tr>
<tr><td>Sales tax (US goods)</td><td>Usually not the deciding factor for shipped goods</td><td>Usually decides the tax rate in destination-based states</td></tr>
<tr><td>Can it be a PO box?</td><td>Often yes</td><td>Often no, depending on the carrier</td></tr>
<tr><td>Appears on</td><td>Invoice bill-to block</td><td>Invoice ship-to block, packing slip, shipping label</td></tr>
</tbody>
</table>

<h2>What is a billing address?</h2>
<p>A billing address is the address connected to the party that pays. It has two slightly different meanings depending on context.</p>
<p><strong>For card payments,</strong> it is the address your card issuer has on file for you. When you enter it at checkout, the merchant's payment processor can compare it with the issuer's records. If you moved recently and did not update your bank, your "real" address may fail that check.</p>
<p><strong>For business invoicing,</strong> it is the address of the customer entity being billed, typically its legal or accounts payable address. Large organizations often centralize invoice processing, so the billing address may be a shared services center or an email inbox in a different city from the people who ordered. Sending an invoice to the wrong place is one of the most common reasons it sits unpaid. Our guide to <a href="/blog/what-is-an-invoice">what an invoice is</a> covers the other details a bill-to block needs, such as the legal name and tax number.</p>

<h2>What is a shipping address?</h2>
<p>A shipping address is where the goods are physically delivered. It might be the buyer's home, an office reception, a warehouse with specific receiving hours, a construction site, a relative's address for a gift, or a parcel locker. Shipping addresses often need details that billing addresses do not: a contact name and phone for the driver, a loading dock, a gate code or delivery hours.</p>
<p>For services there is usually no shipping address, although some invoices record a service location, for example the property where repairs were carried out.</p>

<h2>Why the two addresses differ</h2>
<ul>
<li><strong>Gifts.</strong> The buyer pays; the recipient receives.</li>
<li><strong>Workplace delivery.</strong> The cardholder's address is at home, but they ship to the office.</li>
<li><strong>Head office and branches.</strong> Finance pays centrally; goods go to a store, plant or site.</li>
<li><strong>Drop shipping.</strong> A retailer is billed by its supplier, but goods ship straight to the retailer's customer.</li>
<li><strong>Freight forwarders.</strong> International buyers ship to a forwarder's warehouse for consolidation.</li>
<li><strong>Moving house.</strong> The bank has the old address while deliveries go to the new one.</li>
</ul>

<h2>Card payments: address verification (AVS)</h2>
<p>When a customer pays by card online or over the phone, many merchants use an address verification service (AVS). The processor sends parts of the billing address the customer entered, typically the street number and the ZIP or postcode, to the card issuer, which replies whether they match its records. AVS is mainly available for cards issued in the US, Canada and the UK; support elsewhere is limited.</p>
<p>A few points are often misunderstood:</p>
<ul>
<li>AVS checks the <strong>billing</strong> address only. A different shipping address does not, by itself, cause an AVS failure.</li>
<li>A mismatch does not automatically decline a payment. The merchant decides how to treat it, for example declining, holding for review or accepting.</li>
<li>Merchants often treat a large first order with a mismatched billing address and an unrelated shipping address as higher risk. Some will only ship high-value orders to a verified billing address.</li>
</ul>
<p>If you take card payments, our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> covers the setup, and the article on <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a> explains why proof of delivery to the shipping address matters when a cardholder disputes a charge.</p>

<h2>Tax: which address decides the rate?</h2>
<h3>US sales tax</h3>
<p>For goods shipped to a customer, most US states with a sales tax use destination-based sourcing: the sale is taxed where the buyer receives the item. Under the Streamlined Sales and Use Tax Agreement, for example, the general rule is that the sale is sourced to the location where the purchaser takes delivery, and a seller only falls back to other addresses, such as the billing address on file, when the delivery location is unknown. The <a href="https://ksrevenue.gov/sstpoverview.html" target="_blank" rel="noopener noreferrer">Kansas Department of Revenue's overview of the agreement</a> summarizes this approach. In practice that means the shipping address usually decides the rate. Some states use origin-based sourcing for certain in-state sales, and services and digital goods have their own rules, so check each state.</p>
<p><strong>Worked example (illustrative rates):</strong> A seller with nexus in two states receives a $1,200.00 order. The buyer's billing address is in a location with a 6% combined rate, but the goods ship to a warehouse where the combined rate is 8.25%.</p>
<ul>
<li>Tax based on the shipping address: $1,200.00 x 8.25% = $99.00. Invoice total: $1,299.00.</li>
<li>Tax wrongly based on the billing address: $1,200.00 x 6% = $72.00.</li>
<li>Under-collection: $99.00 - $72.00 = $27.00, which the seller may owe out of pocket if audited.</li>
</ul>
<p>The <a href="/tools/sales-tax-calculator">sales tax calculator</a> is handy for checking figures like these. Whether you must collect in a state at all depends on nexus, covered in our guide to <a href="/blog/sales-tax-nexus">sales tax nexus</a>.</p>
<h3>India GST</h3>
<p>Under GST, the place of supply decides whether a sale is intra-state (CGST plus SGST) or inter-state (IGST). For goods involving movement, it is generally where the movement ends. "Bill to ship to" deals are a special case: under section 10(1)(b) of the IGST Act, where goods are delivered to a third party on the buyer's direction, the buyer is treated as having received them, which is commonly read to make the buyer's principal place of business the place of supply. The invoice shows both addresses, and the <a href="/blog/e-way-bill">e-way bill</a> records the bill-to party and the actual delivery location. These cases can be fact-specific, so confirm with a GST practitioner.</p>
<h3>VAT</h3>
<p>For VAT in the UK and EU, the rules focus on where the goods are when transport begins or ends and, for business-to-business services, where the customer belongs. Neither the billing nor the shipping address decides the answer on its own, but both are evidence. Keep them accurate.</p>

<h2>How to show both addresses on an invoice</h2>
<p>When goods go somewhere other than the billing address, show two clearly labeled blocks:</p>
<ul>
<li><strong>Bill to:</strong> the customer's legal name, billing address, tax number if relevant, and an accounts payable email.</li>
<li><strong>Ship to:</strong> the receiving location's name, full delivery address, contact name and phone.</li>
</ul>
<p>Add the customer's PO number so their accounts payable team can match the invoice to the order and the goods received note. The same ship-to details belong on the <a href="/blog/packing-slip-vs-invoice">packing slip</a> that travels with the goods, and for exports on the <a href="/blog/commercial-invoice-template">commercial invoice</a>, where the consignee and the buyer may be different parties.</p>
<p>The <a href="/invoice-generator">free invoice generator</a> has a single "Bill to" block for the client's name, address, email, phone and tax ID, plus a PO number field. It does not have a separate ship-to block, so if the delivery address differs, add it in the notes, for example "Ship to: Unit 4, Riverside Industrial Park, Reno NV 89502, attn. Receiving". The tax rate you enter applies to the whole invoice, so choose the rate for the correct destination.</p>

<h2>Worked example: one order, two addresses</h2>
<p>An office furniture supplier receives a purchase order from Northgate Health, whose finance team is at its head office, for chairs delivered to a new clinic.</p>
<ul>
<li><strong>Bill to:</strong> Northgate Health Inc., Accounts Payable, 500 Market Street, Suite 900, San Francisco, CA 94105. PO 77120.</li>
<li><strong>Ship to:</strong> Northgate Clinic, 18 Orchard Road, Fresno, CA 93721. Contact: clinic manager, deliveries 8am to 4pm.</li>
<li>Line item: 20 task chairs x $185.00 = $3,700.00.</li>
<li>Tax at an illustrative rate for the delivery location of 8%: $3,700.00 x 8% = $296.00.</li>
<li>Total: $3,700.00 + $296.00 = $3,996.00.</li>
</ul>
<p>The invoice goes to the head office, the chairs and packing slip go to the clinic, and the PO number ties them together.</p>

<h2>Billing address vs shipping address at checkout: tips for buyers</h2>
<p>If you are the one filling in the form, a few habits avoid most problems:</p>
<ul>
<li>Enter the billing address exactly as your bank has it, including the apartment or suite number and the current postcode.</li>
<li>Untick "same as billing" only when the goods really need to go elsewhere, and then add a contact name and phone for the delivery.</li>
<li>For business purchases, use your company's billing details so the invoice reaches accounts payable, and put the site or branch in the shipping fields.</li>
<li>If a payment is declined after you moved, update your address with your card issuer first, then try again.</li>
</ul>
<p>For sellers, the billing address vs shipping address split on your checkout or order form should flow straight onto the invoice and the packing slip, so nobody has to retype it.</p>

<h2>Checklist for addresses on orders and invoices</h2>
<ul>
<li>Billing address matches the customer's legal or accounts payable details.</li>
<li>Card billing address matches the issuer's records.</li>
<li>Shipping address complete, with unit numbers, contact name and phone.</li>
<li>Both blocks labeled clearly on the invoice when they differ.</li>
<li>Tax rate based on the correct location for the type of sale.</li>
<li>PO number on the invoice and packing slip.</li>
<li>Delivery restrictions (no PO boxes, receiving hours) checked with the carrier.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using the billing address for sales tax on shipped goods.</strong> In destination-based states this can under- or over-charge tax.</li>
<li><strong>Sending invoices to the delivery site.</strong> Site staff often cannot approve payment; the invoice should go to the billing contact.</li>
<li><strong>Old card billing addresses.</strong> Customers who moved need to update their bank, not just the merchant.</li>
<li><strong>Missing unit numbers.</strong> A missing suite or apartment number is a common cause of failed deliveries and partial AVS matches.</li>
<li><strong>Shipping to a PO box.</strong> Many couriers cannot deliver there.</li>
<li><strong>No ship-to on the invoice.</strong> Without it, the buyer may struggle to match the invoice to goods received.</li>
</ul>
<p>Getting the billing address vs shipping address distinction right is a small habit that prevents declined payments, lost parcels and tax errors. For more fundamentals, browse our <a href="/blog/category/invoicing-basics">invoicing basics guides</a>.</p>
`,
  },
  {
    slug: "invoice-terms-and-conditions",
    title: "Invoice Terms and Conditions: Examples You Can Copy",
    description:
      "Copy-ready invoice terms and conditions for payment, late fees, disputes, ownership and IP, plus what is enforceable, a worked example and mistakes to avoid.",
    category: "invoicing-basics",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-payment-terms", "invoice-notes-examples", "late-payment-fees"],
    faqs: [
      {
        q: "What are invoice terms and conditions?",
        a: "They are the short rules printed on an invoice that explain how and when the customer must pay and what happens if they do not. Typical terms cover the due date, accepted payment methods, late fees or interest, early payment discounts, how to dispute the invoice, who pays bank charges, and sometimes ownership of goods or intellectual property until payment is received.",
      },
      {
        q: "Are terms and conditions on an invoice legally binding?",
        a: "Often only partly. A contract is usually formed when the customer accepts your quote, order or agreement, which is before the invoice is sent. Terms that appear for the first time on an invoice may not bind the customer unless they were agreed earlier or are implied by a course of dealing. The safest approach is to put your terms in the quote or contract and repeat them on the invoice.",
      },
      {
        q: "What should I write in the terms section of an invoice?",
        a: "Keep it to a few lines: the payment due date or term (for example Net 30), how to pay, the late fee or interest that applies, any early payment discount, the time limit for raising disputes, and a reference to your full terms if you have them. Specific, short statements are easier to read and easier to enforce than a long block of legal text.",
      },
      {
        q: "Can I charge a late fee if it is only on the invoice?",
        a: "It depends on the law where you and your customer are. In the US, a late fee is easiest to enforce when it was agreed before the work, and some states cap the rate. In the UK, businesses can claim statutory interest and fixed compensation on late B2B payments even without a contract term, unless the contract sets a different remedy. Put any late fee in your contract and on the invoice.",
      },
      {
        q: "What is the difference between payment terms and terms and conditions?",
        a: "Payment terms are a subset of terms and conditions. Payment terms state when and how to pay, such as Net 30 or due on receipt. Terms and conditions are broader and can also cover late fees, disputes, ownership of goods, returns, intellectual property, governing law and liability. On a short invoice, payment terms are often the only terms shown.",
      },
      {
        q: "How long should invoice terms and conditions be?",
        a: "On the invoice itself, aim for three to eight short lines that fit at the bottom of the page. If you need more, such as warranty, liability limits or governing law, keep the full terms in your contract or on a web page and add a one-line reference on the invoice. Long blocks of small print are rarely read and can bury the due date.",
      },
      {
        q: "Should I include a dispute clause on my invoice?",
        a: "A short dispute clause helps, for example asking the customer to raise any query within seven or fourteen days of receipt and to pay any undisputed portion by the due date. It encourages early questions instead of silent non-payment, and it gives you a clear timeline if a disagreement escalates. It does not override consumer rights or contract terms already agreed.",
      },
      {
        q: "Can I use the same terms for every client?",
        a: "You can use a standard set as your default, but adjust for each client's contract. Large customers often impose their own payment terms through their purchase order or supplier agreement, and those usually take priority. International clients may need currency, bank charge and governing law terms. Keep a master list and tailor it per client.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Invoice terms and conditions are the short rules at the bottom of an invoice: the due date, how to pay, late fees or interest, early payment discounts, how to dispute a charge, and who pays bank fees. To be enforceable, they should match terms the client agreed before the work began.</p>

<p>Most invoices end with a few lines of small print. Written well, those lines get you paid sooner and save arguments later. Written badly, or invented for the first time on the invoice, they are ignored or unenforceable. This guide explains what to include, which terms actually hold up, and gives copy-ready wording for each type of clause. It focuses on the terms block as a whole; for help with the due date itself see our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a>, and for friendly messages and thank-you lines see these <a href="/blog/invoice-notes-examples">invoice notes examples</a>.</p>

<h2>What are invoice terms and conditions?</h2>
<p>Invoice terms and conditions are the conditions under which you expect the invoice to be paid and the rules that apply if it is not. They are usually a short block of text near the total or at the foot of the page, sometimes with a link to fuller terms.</p>
<p>It helps to think of three layers:</p>
<ul>
<li><strong>Payment terms:</strong> when and how to pay. This is the core.</li>
<li><strong>Consequences:</strong> late fees, interest, collection costs, suspension of work.</li>
<li><strong>Commercial protections:</strong> disputes, ownership of goods, intellectual property, returns, governing law.</li>
</ul>
<p>Small businesses and freelancers often need only the first two layers on the invoice, with the third kept in a contract.</p>

<h2>Are invoice terms enforceable?</h2>
<p>This is the most important point and the most commonly misunderstood. In most legal systems, a contract is formed when an offer is accepted, for example when a client signs your proposal, accepts your quote or issues a purchase order. The invoice comes later. Terms that appear for the first time on the invoice are generally not part of the contract unless the customer agreed to them, or unless they became part of a regular course of dealing between you.</p>
<p>So the practical rule is: <strong>agree first, repeat on the invoice</strong>. Put your payment terms, late fee and key protections in your quote, proposal or contract, then print a short version on every invoice as a reminder. Our <a href="/blog/freelance-contract-template">freelance contract template</a> shows where these clauses go in an agreement.</p>
<p>Two other points matter:</p>
<ul>
<li>When a large customer issues a purchase order with its own terms, those terms often govern, and conflicting terms on your invoice may carry little weight.</li>
<li>Some rights exist without any contract term. In the UK, the Late Payment of Commercial Debts (Interest) Act 1998 lets businesses claim statutory interest on late B2B payments at 8% above the Bank of England base rate, plus fixed compensation, unless the contract provides a substantial alternative remedy. See the <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">GOV.UK guidance on late commercial payments</a>.</li>
</ul>

<h2>Invoice terms and conditions examples you can copy</h2>
<p>Adapt these examples to your business, currency and jurisdiction. Square brackets mark the parts to replace. If a clause has legal consequences, such as interest or ownership of goods, check it against your contract and local law.</p>
<h3>1. Payment due date</h3>
<ul>
<li>"Payment is due within 30 days of the invoice date ([due date])."</li>
<li>"Payment is due on receipt of this invoice."</li>
<li>"50% deposit due on acceptance; balance due within 14 days of delivery."</li>
</ul>
<p>Always show the actual calendar due date, not just "Net 30". For deposit and staged billing, see our guide to <a href="/blog/milestone-payments">milestone payments</a>.</p>
<h3>2. How to pay</h3>
<ul>
<li>"Please pay by bank transfer to [account name, bank, account number or IBAN, sort code or SWIFT]. Use the invoice number as the payment reference."</li>
<li>"We accept bank transfer and card payments. Card payments may incur a surcharge of [x]% where permitted by law."</li>
</ul>
<p>Card surcharges are restricted in some places, including a ban on most consumer card surcharges in the UK. Check our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> before adding one.</p>
<h3>3. Late payment</h3>
<ul>
<li>US: "Balances unpaid after the due date incur a late fee of [1.5]% per month, or the maximum permitted by law if lower."</li>
<li>UK B2B: "We reserve the right to claim interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998."</li>
<li>"We may pause work on open projects while any invoice is more than [14] days overdue."</li>
</ul>
<p>How much to charge, and state limits in the US, are covered in our guide to <a href="/blog/late-payment-fees">late payment fees</a>.</p>
<h3>4. Early payment discount</h3>
<ul>
<li>"2/10 Net 30: deduct 2% if paid within 10 days of the invoice date; otherwise the full amount is due in 30 days."</li>
</ul>
<p>Our guide to <a href="/blog/early-payment-discount">early payment discounts</a> helps you decide whether the cost is worth it.</p>
<h3>5. Disputes and queries</h3>
<ul>
<li>"Please raise any query about this invoice within [7] days of receipt. Undisputed amounts remain payable by the due date."</li>
</ul>
<p>This encourages clients to flag problems early rather than holding the whole payment. If a disagreement does arise, our guide to <a href="/blog/invoice-dispute">handling an invoice dispute</a> walks through the steps.</p>
<h3>6. Bank charges and currency</h3>
<ul>
<li>"All amounts are in [USD]. Bank and transfer charges are payable by the sender; please select 'OUR' for international wire transfers."</li>
<li>"Payment must be received in full; short payments due to bank fees will be added to the next invoice."</li>
</ul>
<h3>7. Ownership of goods (retention of title)</h3>
<ul>
<li>"Goods remain the property of [Seller] until paid for in full."</li>
</ul>
<p>Retention of title clauses only work if they are part of the contract of sale, and their effect varies by country. Treat this as a clause to agree in advance and get advice on if your goods are high value.</p>
<h3>8. Intellectual property</h3>
<ul>
<li>"Copyright in the deliverables transfers to the client on receipt of full payment. Until then, the client has a license to use drafts for review only."</li>
</ul>
<p>Common for designers, writers and developers; it gives clients a strong reason to pay on time. Make sure your contract says the same thing.</p>
<h3>9. Collection costs</h3>
<ul>
<li>"The client is responsible for reasonable costs of collecting overdue amounts, where permitted by law."</li>
</ul>
<h3>10. Reference to full terms</h3>
<ul>
<li>"This invoice is subject to the terms of our agreement dated [date] / our standard terms at [URL]."</li>
</ul>

<h2>Worked example: a terms block with the math</h2>
<p>The figures below are illustrative. A US design studio invoices a business client $4,800.00 for a website project, with terms agreed in the signed proposal:</p>
<ul>
<li>"Payment due within 30 days of the invoice date (November 26, 2026)."</li>
<li>"2/10 Net 30: deduct 2% if paid by November 6, 2026."</li>
<li>"Late fee of 1.5% per month on overdue balances."</li>
<li>"Copyright in final files transfers on receipt of full payment."</li>
</ul>
<p>What each term means in dollars:</p>
<ul>
<li>Paid within 10 days: discount = $4,800.00 x 2% = $96.00, so the client pays $4,800.00 - $96.00 = <strong>$4,704.00</strong>.</li>
<li>Paid on time (by day 30): the client pays <strong>$4,800.00</strong>.</li>
<li>Paid one month late: late fee = $4,800.00 x 1.5% = $72.00, so the balance becomes <strong>$4,872.00</strong>, provided the fee is lawful in the relevant state.</li>
</ul>
<p>For a UK B2B invoice of £5,000.00 paid 30 days late, with no contractual interest term, statutory interest would be 8% plus the Bank of England base rate. Using an illustrative base rate of 4%, the annual rate is 12%: £5,000.00 x 12% x 30 / 365 = £49.32. A fixed compensation sum of £70 also applies to debts from £1,000 up to £9,999.99 (it is £40 for smaller debts and £100 for £10,000 or more), giving £49.32 + £70.00 = £119.32. Check the current base rate and our guide to <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> before you claim.</p>

<h2>Terms by business type</h2>
<table>
<thead><tr><th>Business</th><th>Terms worth including</th></tr></thead>
<tbody>
<tr><td>Freelancer or consultant</td><td>Due date, bank details, late fee, IP transfers on payment, work paused if overdue</td></tr>
<tr><td>Product seller</td><td>Due date, retention of title, returns window, damaged goods reporting period</td></tr>
<tr><td>Trades and contractors</td><td>Deposit and stage payments, variations billed separately, materials remain your property until paid</td></tr>
<tr><td>Agencies and retainers</td><td>Billing in advance, unused hours policy, third-party costs rebilled with markup</td></tr>
<tr><td>International services</td><td>Invoice currency, who pays bank charges, governing law, tax status (for example reverse charge)</td></tr>
</tbody>
</table>

<h2>How to add terms to your invoices</h2>
<p>In the <a href="/invoice-generator">free invoice generator</a>, the form has two text fields at the bottom: Notes, for messages such as a thank-you or project reference, and Payment terms, for the conditions above. Keep the payment terms field to a few lines so the PDF stays on one page, and put your full terms in your contract. The generator shows your terms on the invoice PDF; it does not enforce them, send reminders or charge late fees automatically, so you will need to track due dates and apply any fee on a follow-up invoice. If you invoice clients in the UK, the <a href="/invoice-generator/uk">UK invoice generator</a> is preset for pounds and 20% VAT, with fields for your VAT number and company number.</p>

<h2>Checklist for invoice terms</h2>
<ul>
<li>Terms agreed in the quote, proposal or contract before work starts.</li>
<li>Actual due date shown, not just "Net 30".</li>
<li>Payment methods and bank details complete.</li>
<li>Late fee or interest stated, and lawful where you and the client are.</li>
<li>Early payment discount stated with its deadline, if offered.</li>
<li>Dispute window and "pay undisputed amounts" line.</li>
<li>Currency and bank charge responsibility for international clients.</li>
<li>Ownership or IP clause if relevant, matching the contract.</li>
<li>Reference to full terms or the agreement date.</li>
<li>Terms block short enough to read at a glance.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Introducing new terms on the invoice.</strong> A late fee the client never agreed to is hard to collect. Agree it first.</li>
<li><strong>Vague due dates.</strong> "Payment due soon" or "upon completion" invites delay. Use a date.</li>
<li><strong>Excessive late fees.</strong> A penalty rate far above market or legal limits may be unenforceable and damages the relationship.</li>
<li><strong>Contradicting the client's PO.</strong> If the purchase order says Net 60, an invoice saying Net 15 will usually be ignored. Negotiate before accepting the order.</li>
<li><strong>Walls of legal text.</strong> Long small print buries the information the client needs to pay.</li>
<li><strong>Forgetting consumer rules.</strong> Consumer customers have statutory rights that invoice terms cannot remove.</li>
<li><strong>Never applying the terms.</strong> If you state a late fee but never charge it, clients learn to ignore it. Apply your terms consistently, with discretion for good clients.</li>
</ul>
<p>Clear invoice terms and conditions are one of the cheapest ways to improve cash flow. For more on getting the basics right, see our <a href="/blog/category/invoicing-basics">invoicing basics guides</a>.</p>
`,
  },
];
