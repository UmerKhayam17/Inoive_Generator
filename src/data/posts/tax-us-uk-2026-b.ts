import type { PostDraft } from "../blog";

export const TAX_US_UK_2026_B_POSTS: PostDraft[] = [
  {
    slug: "how-to-get-an-ein",
    title: "How to Get an EIN: Free IRS Application Step by Step",
    description:
      "How to get an EIN free from the IRS: who needs one, the online application step by step, fax and mail options, what to do after and how to use it on invoices.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-start-an-llc",
      "boi-reporting-2026",
      "tax-id-on-invoice",
      "llc-vs-sole-proprietorship",
      "w9-and-1099-for-contractors",
    ],
    faqs: [
      {
        q: "Is it free to get an EIN?",
        a: "Yes. The IRS issues employer identification numbers free of charge, whether you apply online, by fax or by mail. Websites that look official and charge a fee are third-party services that fill in the same IRS form for you. You are not required to use them. If you can answer the questions on Form SS-4 yourself, apply directly on irs.gov and keep the money for something your business actually needs.",
      },
      {
        q: "How long does it take to get an EIN?",
        a: "If you apply online and the application is approved, the IRS issues the number immediately at the end of the session and you can download your confirmation letter. A faxed Form SS-4 usually comes back in about four business days if you include a return fax number. A mailed application takes about four weeks. International applicants can call the IRS and usually receive a number during the call.",
      },
      {
        q: "Do I need an EIN as a sole proprietor?",
        a: "Not always. A sole proprietor with no employees, no Keogh or solo 401(k) plan and no excise or employment tax filings can usually use their Social Security number. Many freelancers still get one because it keeps their SSN off W-9 forms and invoices, and many banks ask for one before opening a business account. It is free, so the privacy benefit alone is often worth it.",
      },
      {
        q: "Can I apply for an EIN on the weekend?",
        a: "The online application keeps limited hours. When we checked in October 2026, the IRS listed Monday to Friday 6 a.m. to 1 a.m. the next day, Saturday 6 a.m. to 9 p.m., and Sunday 6 p.m. to midnight, all Eastern Time. So yes, you can apply on Saturday and Sunday evening. The IRS changes these hours from time to time, so check the current schedule before you start.",
      },
      {
        q: "Does an LLC need its own EIN?",
        a: "A multi-member LLC needs one because it is taxed as a partnership by default. A single-member LLC with no employees is a disregarded entity for income tax and can often use the owner's SSN, although it needs an EIN for employment and certain excise taxes, and most banks ask for one. Form the LLC with your state first, then apply, so the legal name matches the state record.",
      },
      {
        q: "What if I lose my EIN?",
        a: "Look for the confirmation letter (often a CP 575 notice) you saved after applying, an old tax return, a bank account application or a W-9 you sent a client. If you cannot find it, the IRS Business and Specialty Tax Line can give the number to an authorized person after verifying identity, and can send a 147C verification letter if a bank or client needs written confirmation.",
      },
      {
        q: "Can I get an EIN without a Social Security number?",
        a: "To apply online, the responsible party needs a valid SSN or ITIN. Foreign owners without either can still get an EIN by sending Form SS-4 by fax or mail, or international applicants can call the IRS international line. Write foreign in the SSN/ITIN field as the form instructions direct. Expect the paper routes to take longer than the online tool, so apply well before you need the number.",
      },
      {
        q: "Do I need a new EIN if my business changes?",
        a: "Sometimes. You generally need a new number if a sole proprietorship incorporates or forms a partnership, if you take on partners and become a partnership, or if you buy an existing business that you will run as a sole proprietor. Changing your business name or address usually does not require a new EIN; you notify the IRS instead. Check the IRS guidance for your exact change before applying again.",
      },
      {
        q: "Should my EIN appear on my invoices?",
        a: "There is no general federal rule that US invoices must show an EIN. Clients collect your tax ID on Form W-9 instead. Some businesses add it anyway because large clients ask for it, and it avoids printing an SSN. If you add a tax ID field to your invoice, use the EIN, never your SSN, and keep it in the business details area rather than the payment instructions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To get an EIN, apply free on irs.gov using the online EIN application during its operating hours. You need a US principal place of business and the responsible party's SSN or ITIN. Answer the questions in one session, and the IRS issues the number immediately. Fax, mail and an international phone line are the alternatives.</p>

<p>An employer identification number (EIN) is the nine-digit federal tax ID the IRS gives businesses, written like 12-3456789. If you have just started freelancing, formed an LLC or plan to hire someone, knowing how to get an EIN is one of the first admin jobs on the list, and it is far simpler than many people expect. The IRS application is free, there is no waiting period for most US applicants, and the whole thing usually takes 15 to 20 minutes if you have your details ready.</p>

<p>This guide explains who needs an EIN, what to prepare, how to complete the online application step by step, what to do if you cannot apply online, and how to use the number once you have it, including on W-9 forms and invoices. It is general information, not tax or legal advice. The IRS updates its procedures, hours and forms, so confirm the details on the official <a href="https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" target="_blank" rel="noopener noreferrer">IRS Get an EIN page</a> before you apply.</p>

<h2>What is an EIN and who needs one?</h2>
<p>An EIN identifies a business entity for federal tax purposes, much as a Social Security number identifies an individual. Banks, payroll providers, clients and state agencies use it to match your business to its tax filings. Despite the word employer in its name, you do not need employees to get one.</p>
<p>According to IRS guidance, you generally need an EIN if any of these apply:</p>
<ul>
<li>You have employees.</li>
<li>Your business operates as a corporation or a partnership, including a multi-member LLC taxed as a partnership.</li>
<li>You file employment, excise, or alcohol, tobacco and firearms tax returns.</li>
<li>You withhold tax on income, other than wages, paid to a nonresident alien.</li>
<li>You have a Keogh plan or a solo 401(k).</li>
<li>You are involved with certain trusts, estates, nonprofits, farmers' cooperatives or real estate mortgage investment conduits.</li>
</ul>
<p>A sole proprietor with none of those features can usually report business income under their own SSN on Schedule C. Our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> explains that form. Still, a lot of sole proprietors get an EIN voluntarily, for three practical reasons: it keeps your SSN off the W-9 forms you send clients, most banks want one for a business checking account, and it makes the business look more established on paperwork.</p>

<h3>EIN, SSN and ITIN compared</h3>
<table>
<thead><tr><th>Number</th><th>Issued by</th><th>Who it identifies</th><th>Typical use for a small business</th></tr></thead>
<tbody>
<tr><td>EIN</td><td>IRS</td><td>A business entity</td><td>W-9 forms, business bank accounts, payroll, entity tax returns</td></tr>
<tr><td>SSN</td><td>Social Security Administration</td><td>A US person</td><td>Personal returns; a sole proprietor's business income if no EIN is needed</td></tr>
<tr><td>ITIN</td><td>IRS</td><td>An individual who cannot get an SSN</td><td>Filing a personal return; can serve as the responsible party's ID on an EIN application</td></tr>
</tbody>
</table>
<p>If you are still deciding how to structure the business, read our comparison of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> first. The entity type is one of the first questions on the EIN application, and you should form an LLC or corporation with your state before applying, so the legal name you enter matches the state record.</p>

<h2>What you need before you apply for an EIN</h2>
<p>The online application cannot be saved, and the IRS says it expires after 15 minutes of inactivity. Gather everything first so you can finish in one sitting:</p>
<ul>
<li><strong>Legal name of the business.</strong> For a sole proprietor, this is your own name. For an LLC or corporation, use the exact name on the state filing. Any trade name (DBA) goes in its own field.</li>
<li><strong>Entity type.</strong> Sole proprietor, partnership, corporation, LLC (with the number of members), estate, trust or another option.</li>
<li><strong>Responsible party details.</strong> The name and SSN or ITIN of the person who ultimately owns or controls the entity. This must be an individual for most applicants, not another business.</li>
<li><strong>Mailing and physical address</strong> in the United States or a US territory.</li>
<li><strong>Reason for applying</strong>, such as starting a new business, hiring employees or opening a bank account.</li>
<li><strong>Start date and accounting year.</strong> Most small businesses use the calendar year, so the closing month is December.</li>
<li><strong>Expected employees</strong> in the next 12 months and the first date you will pay wages, if any.</li>
<li><strong>Principal activity</strong>, for example consulting, construction or retail.</li>
</ul>

<h2>How to get an EIN online: step by step</h2>
<p>The online tool is the fastest route and is the right choice for nearly every US-based applicant. Here is how to get an EIN online in practice:</p>
<ol>
<li><strong>Go to irs.gov directly.</strong> Type the address yourself or follow the link above. Ignore paid search ads for EIN filing services, which charge for a free government process.</li>
<li><strong>Check the hours.</strong> In October 2026 the IRS listed Monday to Friday 6 a.m. to 1 a.m. the next day, Saturday 6 a.m. to 9 p.m., and Sunday 6 p.m. to midnight, Eastern Time. Outside those windows the tool is unavailable.</li>
<li><strong>Choose the entity type.</strong> Select the type that matches your business. For an LLC you will be asked how many members it has and, in some cases, its state.</li>
<li><strong>Explain why you are applying.</strong> Starting a new business is the most common choice. Each reason can trigger different follow-up questions.</li>
<li><strong>Identify the responsible party.</strong> Enter the individual's name and SSN or ITIN. The IRS limits each responsible party to one EIN per day.</li>
<li><strong>Enter addresses and business details.</strong> Use a US address where you can reliably receive IRS mail.</li>
<li><strong>Answer the activity and employee questions.</strong> Be accurate about whether you expect to pay wages, because that affects the filing requirements the IRS associates with your number.</li>
<li><strong>Pick how to receive the confirmation.</strong> Choose to receive the letter online so you can download it immediately, rather than waiting for paper mail.</li>
<li><strong>Review and submit.</strong> Check spelling, especially the legal name. If the application is approved, your EIN appears on screen right away.</li>
<li><strong>Save the confirmation letter.</strong> Download the PDF, store it with your business records and keep a backup copy. It is the easiest proof of your number later.</li>
</ol>
<p>If the tool returns an error and asks you to apply another way, do not keep resubmitting. Note any reference number shown and use Form SS-4 by fax or mail instead, because repeating the same entries usually produces the same result.</p>

<h2>Other ways to apply: fax, mail and phone</h2>
<p>If your business is not located in the United States or a US territory, or the online tool will not accept your application, use one of the alternative methods. All of them use <a href="https://www.irs.gov/instructions/iss4" target="_blank" rel="noopener noreferrer">Form SS-4 and its official instructions</a>.</p>
<table>
<thead><tr><th>Method</th><th>Who it suits</th><th>Typical time to receive the EIN</th></tr></thead>
<tbody>
<tr><td>Online</td><td>US-based businesses with a responsible party who has an SSN or ITIN</td><td>Immediately, if approved</td></tr>
<tr><td>Fax (Form SS-4)</td><td>Applicants who cannot use the online tool</td><td>About 4 business days, if you include a return fax number</td></tr>
<tr><td>Mail (Form SS-4)</td><td>Applicants without fax access</td><td>About 4 weeks</td></tr>
<tr><td>Phone</td><td>International applicants only</td><td>Usually during the call</td></tr>
</tbody>
</table>
<p>The IRS no longer issues EINs by phone to domestic applicants. Fax numbers and mailing addresses depend on where the business is located, so take them from the current SS-4 instructions rather than from an old blog post or forum thread.</p>

<h2>Worked example: timing your EIN around your first client</h2>
<p>Here is an illustrative scenario. Maya is a freelance designer who forms a single-member LLC on Monday, October 5. She expects a new client to send her a W-9 request on Friday and to pay her first invoice of $3,600 within 30 days.</p>
<ul>
<li><strong>Monday:</strong> the state approves the LLC filing. Maya applies online the same evening and receives her EIN immediately.</li>
<li><strong>Tuesday:</strong> she opens a business checking account using the EIN and the LLC paperwork.</li>
<li><strong>Friday:</strong> she completes the client's W-9 with the LLC name and EIN instead of her SSN.</li>
<li><strong>Next week:</strong> she sends her first invoice from the LLC with bank details for the new account.</li>
</ul>
<p>Now compare a slower route. If Maya were based outside the US and had to mail Form SS-4, the IRS estimates about 4 weeks to receive the number. Counting from October 5, that is roughly November 2, about 28 days later. The client's 30-day payment window would be almost gone before she could even return a completed W-9, and many accounts payable teams will not pay a new vendor until the W-9 is on file. The lesson: apply as soon as the entity exists, not when the first payment is due.</p>
<p>The contractor side of this process is covered in our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a>. Under the new rules, a client generally files Form 1099-NEC only once its payments to you reach the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold of $2,000</a>, but most will still ask for the W-9 up front.</p>

<h2>What to do after you get your EIN</h2>
<p>Knowing how to get an EIN is only half the job; using it correctly matters too. Use this checklist in the week after you apply:</p>
<ul>
<li>Save the confirmation letter as a PDF in two places.</li>
<li>Open a separate business bank account so business income and spending stay apart.</li>
<li>Update your W-9 template with the business name and EIN.</li>
<li>Register with your state revenue department if you will collect sales tax or pay wages. An EIN is federal only; states issue their own IDs.</li>
<li>Add the EIN to your payroll provider if you will hire employees.</li>
<li>Decide whether your invoices will display a tax ID (see below).</li>
<li>Note the dates for <a href="/blog/self-employment-tax">self-employment tax</a> and estimated payments, which still apply to you personally as a sole proprietor or single-member LLC owner.</li>
</ul>

<h3>Using your EIN on invoices</h3>
<p>US federal law does not require a tax ID on every invoice, and the client usually gets your number from the W-9. But some clients, especially larger companies and government buyers, prefer to see the EIN on the invoice itself so they can match it to their vendor record. If you include one, put it in the business details block near your name and address, and never print your SSN. Our guide to showing a <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers placement and formats in more detail.</p>
<p>You can add an EIN field in our free <a href="/invoice-generator/usa">US invoice generator</a>, which builds a PDF invoice in your browser. It does not apply for an EIN, file taxes or send invoices for you; you download the PDF and send it yourself. If you sell taxable goods, also check our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>, since sales tax registration is a separate state process.</p>

<h2>Common mistakes when applying for an EIN</h2>
<ul>
<li><strong>Paying a third-party site.</strong> The IRS application is free. Paid services submit the same information for you.</li>
<li><strong>Applying before forming the LLC or corporation.</strong> If the state has not approved the entity, the name and start date may not match, and the application can be delayed or need correcting.</li>
<li><strong>Choosing the wrong entity type.</strong> A single-member LLC is not a sole proprietorship on the form, even though it may be taxed like one. Pick LLC and enter one member.</li>
<li><strong>Applying twice.</strong> If you are unsure whether you already have an EIN, search your records first. Duplicate numbers create mismatched filings.</li>
<li><strong>Not saving the confirmation.</strong> The online confirmation is easiest to get at the moment of approval. Download it before closing the window.</li>
<li><strong>Using the EIN as a substitute for state registration.</strong> Sales tax permits, state payroll accounts and local business licenses are separate.</li>
<li><strong>Thinking an EIN changes how you are taxed.</strong> It does not. A sole proprietor with an EIN still reports on Schedule C and pays self-employment tax.</li>
</ul>

<h2>EIN application checklist</h2>
<ul>
<li>Entity formed with the state (LLC or corporation only)</li>
<li>Exact legal name and any trade name ready</li>
<li>Responsible party's SSN or ITIN to hand</li>
<li>US mailing and physical address confirmed</li>
<li>Start date, accounting year and principal activity decided</li>
<li>Employee plans for the next 12 months noted</li>
<li>Online hours checked on irs.gov</li>
<li>Confirmation letter downloaded and backed up</li>
<li>W-9, bank account and invoice details updated</li>
</ul>
<p>For more on federal and state requirements, browse our <a href="/blog/category/tax-compliance">tax and compliance articles</a>. And if you have not formally registered anything yet, our guide on <a href="/blog/how-to-invoice-without-a-business">how to invoice without a registered business</a> explains what you can do in the meantime.</p>

<p><em>This article is general information, not tax or legal advice. IRS procedures, hours and forms change; check irs.gov or speak to a qualified tax professional about your situation.</em></p>
`,
  },
  {
    slug: "schedule-c-for-freelancers",
    title: "Schedule C for Freelancers: How to Fill It Out (2026)",
    description:
      "Schedule C for freelancers explained line by line: who files it, income and expense lines, home office, a worked net profit example and mistakes to avoid.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "self-employed-health-insurance-deduction",
      "qbi-deduction-section-199a",
      "self-employment-tax",
      "self-employed-tax-deductions",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "Do I have to file Schedule C if I made very little money?",
        a: "If you run a business as a sole proprietor, you generally report its income and expenses on Schedule C regardless of the amount. Separately, you must file Schedule SE and pay self-employment tax once your net earnings from self-employment reach $400. So even a small side business usually means a Schedule C. If you have a loss, filing it also records the loss, which may offset other income.",
      },
      {
        q: "Do I report income if I did not receive a 1099?",
        a: "Yes. All business income goes on Schedule C, whether or not a client sent you Form 1099-NEC or a platform sent a 1099-K. From 2026, clients only have to file a 1099-NEC once they pay you $2,000 or more in the year, so fewer forms will arrive. Use your own invoices and bank records to total your gross receipts rather than adding up the forms.",
      },
      {
        q: "What is the difference between Schedule C and Schedule SE?",
        a: "Schedule C works out your business profit: income minus deductible expenses. Schedule SE takes that profit and calculates self-employment tax, which funds Social Security and Medicare. The net profit on Schedule C line 31 flows into Schedule SE and also into your income on Form 1040 through Schedule 1. You usually file both, plus estimated payments during the year.",
      },
      {
        q: "Can I file one Schedule C for two businesses?",
        a: "No. You file a separate Schedule C for each business you operate as a sole proprietor. A freelance writer who also runs an unrelated online shop would normally complete two forms, each with its own income, expenses and principal business code. Self-employment tax is then calculated on the combined net profit on one Schedule SE. Spouses who each run a business file their own forms.",
      },
      {
        q: "Should I use cash or accrual accounting on Schedule C?",
        a: "Most freelancers use the cash method: income counts when you receive it and expenses when you pay them. That means an invoice sent in December but paid in January is income for the following year. Accrual accounting counts income when you earn it. Choose a method on line F and use it consistently, because switching later generally requires IRS consent.",
      },
      {
        q: "Can a single-member LLC file Schedule C?",
        a: "Yes, by default. A single-member LLC that has not elected to be taxed as a corporation is a disregarded entity for income tax, so its owner reports the business on Schedule C, just like a sole proprietor. A multi-member LLC is taxed as a partnership and files Form 1065 instead, and an LLC that elects S corporation status files Form 1120-S.",
      },
      {
        q: "Where do tips and overtime deductions go now?",
        a: "Not on Schedule C. For 2025 onward, the new deductions for qualified tips and overtime, and the personal car loan interest deduction, are claimed on Schedule 1-A according to the Schedule C instructions. Tips you receive in your business are still gross receipts on Schedule C. The deduction then reduces taxable income separately, but it does not reduce self-employment tax.",
      },
      {
        q: "What happens if Schedule C shows a loss?",
        a: "A net loss on line 31 generally reduces your other income, such as wages from a job, although at-risk rules, passive activity rules and the excess business loss limit can restrict it. With a loss, you usually owe no self-employment tax for that business. Repeated losses can lead the IRS to question whether the activity is a hobby rather than a business, so keep evidence of a profit motive.",
      },
      {
        q: "How long should I keep Schedule C records?",
        a: "The IRS generally advises keeping records that support income and deductions for at least three years from the date you filed the return, and longer in some situations, such as six years if you underreport income substantially, or as long as you own assets you depreciate. Keep copies of invoices, receipts, bank statements and mileage logs together with the filed return.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Schedule C (Form 1040) is where freelancers and sole proprietors report business income and expenses. You list gross receipts in Part I, deductible expenses in Part II, and subtract to get net profit on line 31. That profit is taxed as income and also feeds Schedule SE for self-employment tax.</p>

<p>If you invoice clients as an individual, without a corporation or partnership, the IRS treats you as a sole proprietor, and Schedule C is the form that turns a year of invoices and receipts into a single profit figure. Getting it right matters twice: the profit drives your income tax and your self-employment tax, so an overlooked expense costs you on both, and missing income is the most common reason for IRS letters.</p>

<p>This guide walks through Schedule C for freelancers part by part, shows a worked example with the arithmetic, and lists the mistakes that trip people up. It is general information, not tax advice. We based it on the 2025 form instructions, the latest version available when we wrote this in October 2026; the IRS usually publishes the 2026 form late in the year, so check the <a href="https://www.irs.gov/forms-pubs/about-schedule-c-form-1040" target="_blank" rel="noopener noreferrer">IRS Schedule C page</a> for the current version before you file.</p>

<h2>Who needs to file Schedule C?</h2>
<p>You file Schedule C if you operate a business or practice a profession as a sole proprietor, and your main purpose is income or profit, with regular and continuous involvement. That covers most freelancers, independent contractors, gig workers and single-member LLC owners who have not elected corporate tax treatment.</p>
<ul>
<li><strong>Freelancers and contractors</strong> paid on invoices or through platforms.</li>
<li><strong>Single-member LLCs</strong> taxed as disregarded entities, which is the default.</li>
<li><strong>Statutory employees</strong> who receive a W-2 with the statutory employee box checked.</li>
<li><strong>Spouses in a qualified joint venture</strong>, who each file their own form instead of a partnership return.</li>
</ul>
<p>If you are unsure whether to stay a sole proprietor, our comparison of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> explains how the choice affects your filing. Partnerships and multi-member LLCs file Form 1065, and corporations file their own returns, so this form does not apply to them.</p>

<h2>What you need before you start</h2>
<p>Your business profit form is only as good as the records behind it. Before you open the form, gather:</p>
<ul>
<li>Every invoice issued during the year, with the date paid, so you can total gross receipts.</li>
<li>Forms 1099-NEC, 1099-MISC and 1099-K you received, to cross-check, not to replace, your own totals.</li>
<li>Bank and card statements for the business account.</li>
<li>Receipts for expenses, grouped by category.</li>
<li>A mileage log if you drive for business, and the square footage of any home office.</li>
<li>Records of equipment purchased, with dates and costs, for depreciation or expensing.</li>
</ul>
<p>If those records are scattered, our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> sets up a simple system, and a monthly <a href="/blog/profit-and-loss-statement">profit and loss statement</a> makes the year-end filing almost a copy-and-paste job. Consistent invoice numbering from our <a href="/tools/invoice-number-generator">invoice number generator</a> also helps you prove that your income list is complete.</p>

<h2>How to fill out Schedule C, part by part</h2>

<h3>Top section: lines A to J</h3>
<p>The header identifies the business. Line A asks for your principal business or profession, and line B for a six-digit code from the list in the instructions, for example a code for consulting or for graphic design services. Line C is the business name, if different from yours, and line D the EIN if you have one; our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> covers that. Line F is your accounting method, usually cash for freelancers. Line G asks whether you materially participated, which almost every active freelancer does. Line H is checked if you started the business this year. Lines I and J ask whether you made payments that required you to file Forms 1099, and whether you filed them.</p>

<h3>Part I: income</h3>
<p>Line 1 is gross receipts or sales: everything clients paid you for your work. Subtract returns and allowances on line 2, then cost of goods sold from Part III on line 4 if you sell products. Line 6 covers other business income, such as a refund of a business expense deducted in an earlier year. Line 7 is gross income.</p>
<p>A common question is how this connects to 1099 forms. The answer is that it does not have to. Report all income, whether or not a form arrived. Our explainer on <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> shows why the forms can overlap or miss payments entirely, especially now that the NEC threshold has risen to $2,000 for 2026 payments.</p>

<h3>Part II: expenses</h3>
<p>Lines 8 to 27 cover the main deductible expense categories. These are the ones freelancers use most:</p>
<table>
<thead><tr><th>Line</th><th>Expense</th><th>Freelancer examples</th></tr></thead>
<tbody>
<tr><td>8</td><td>Advertising</td><td>Website ads, portfolio site promotion, printed cards</td></tr>
<tr><td>9</td><td>Car and truck expenses</td><td>Standard mileage or actual costs for business driving</td></tr>
<tr><td>11</td><td>Contract labor</td><td>Subcontractors you paid to help on client work</td></tr>
<tr><td>13</td><td>Depreciation and section 179</td><td>Laptop, camera, furniture (via Form 4562)</td></tr>
<tr><td>15</td><td>Insurance (other than health)</td><td>Professional liability, equipment cover</td></tr>
<tr><td>17</td><td>Legal and professional services</td><td>Accountant, lawyer, tax preparation for the business</td></tr>
<tr><td>18</td><td>Office expense</td><td>Postage, small office items</td></tr>
<tr><td>22</td><td>Supplies</td><td>Materials consumed in your work</td></tr>
<tr><td>24a / 24b</td><td>Travel / deductible meals</td><td>Client trips; business meals, generally 50% deductible</td></tr>
<tr><td>25</td><td>Utilities</td><td>Business phone line or separate internet service</td></tr>
<tr><td>27b</td><td>Other expenses (from Part V)</td><td>Software subscriptions, platform fees, professional dues</td></tr>
</tbody>
</table>
<p>Line 28 totals the expenses, and line 29 shows tentative profit. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> goes deeper into what qualifies in each category.</p>

<h3>Line 30: business use of your home</h3>
<p>If part of your home is used regularly and exclusively for business, you can deduct it here. The simplified method multiplies the square footage of the office by $5, up to a maximum of 300 square feet, so the largest simplified deduction is $1,500. The regular method uses actual costs on Form 8829 and can be larger but needs more records.</p>

<h3>Lines 31 and 32: net profit or loss</h3>
<p>Line 31 is net profit or loss: line 29 minus line 30. A profit generally goes to Schedule 1 (Form 1040) and to Schedule SE, where you calculate <a href="/blog/self-employment-tax">self-employment tax</a> on it. Line 32 deals with at-risk rules if you have a loss and some investment is not at risk.</p>

<h3>Parts III to V</h3>
<p>The <a href="https://www.irs.gov/instructions/i1040sc" target="_blank" rel="noopener noreferrer">IRS Instructions for Schedule C</a> list every line in detail, including the business activity codes and the rules for each expense category.</p>
<p>Part III calculates cost of goods sold for businesses with inventory. Part IV collects vehicle information if you claim car expenses without filing Form 4562. Part V lists other expenses individually, with the total carried to line 27b.</p>

<h2>Worked example: a freelance designer's business profit</h2>
<p>These figures are illustrative. Jordan is a freelance web designer using the cash method. During the year Jordan's clients paid $86,400 on invoices, including $4,000 for a December invoice from the previous year that the client paid in January, and excluding a $3,000 December invoice still unpaid at year end. Under the cash method, the unpaid invoice is next year's income.</p>
<table>
<thead><tr><th>Line</th><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>1</td><td>Gross receipts</td><td>$86,400</td></tr>
<tr><td>7</td><td>Gross income (no returns or COGS)</td><td>$86,400</td></tr>
<tr><td>8</td><td>Advertising</td><td>$1,200</td></tr>
<tr><td>11</td><td>Contract labor (subcontracted developer)</td><td>$9,500</td></tr>
<tr><td>13</td><td>Depreciation (new laptop expensed)</td><td>$2,400</td></tr>
<tr><td>17</td><td>Legal and professional services</td><td>$900</td></tr>
<tr><td>25</td><td>Utilities (business internet share)</td><td>$600</td></tr>
<tr><td>27b</td><td>Other expenses (software, platform fees)</td><td>$3,400</td></tr>
<tr><td>28</td><td>Total expenses</td><td>$18,000</td></tr>
<tr><td>29</td><td>Tentative profit</td><td>$68,400</td></tr>
<tr><td>30</td><td>Home office, simplified (200 sq ft x $5)</td><td>$1,000</td></tr>
<tr><td>31</td><td>Net profit</td><td>$67,400</td></tr>
</tbody>
</table>
<p>The arithmetic: expenses $1,200 + $9,500 + $2,400 + $900 + $600 + $3,400 = $18,000. Tentative profit $86,400 - $18,000 = $68,400. Home office 200 x $5 = $1,000. Net profit $68,400 - $1,000 = $67,400.</p>
<p>That $67,400 then moves to Schedule SE. Self-employment tax is calculated on 92.35% of it: $67,400 x 0.9235 = $62,243.90, and $62,243.90 x 15.3% = $9,523.32. Half of that, $4,761.66, is deductible on Schedule 1. Jordan also paid the subcontractor $9,500, which is above the $2,000 threshold, so line I should be Yes, and Jordan should have filed a 1099-NEC for that contractor.</p>

<h2>Common mistakes on Schedule C</h2>
<ul>
<li><strong>Reporting only what appears on 1099s.</strong> The IRS matches forms to returns, but it also expects income no form covered. Total your invoices.</li>
<li><strong>Mixing up cash and accrual.</strong> Under the cash method, an unpaid December invoice is not this year's income, and a January payment for last year's work is. See our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>.</li>
<li><strong>Deducting personal costs.</strong> Groceries, family phones and commuting are not business expenses. Mixed-use items need a reasonable business percentage.</li>
<li><strong>Claiming a home office that is not exclusive.</strong> A dining table you also eat at generally does not qualify.</li>
<li><strong>Forgetting the half SE tax deduction,</strong> or listing it as a business expense. It belongs on Schedule 1, not in Part II.</li>
<li><strong>Putting tips or overtime deductions in Part II.</strong> Those go on Schedule 1-A. Our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a> covers the rules.</li>
<li><strong>Combining two businesses on one form.</strong> Each business gets its own Schedule C.</li>
<li><strong>Not paying during the year.</strong> The form is filed once, but tax is due as you earn. Use <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> to avoid penalties.</li>
</ul>

<h2>Schedule C checklist for freelancers</h2>
<ul>
<li>Gross receipts totaled from invoices and bank deposits, not just 1099 forms</li>
<li>Accounting method on line F matches how you counted income</li>
<li>Principal business code chosen from the instructions</li>
<li>Expenses grouped by line, with receipts saved</li>
<li>Mileage log and home office measurements ready</li>
<li>Equipment purchases listed for Form 4562</li>
<li>1099-NEC filings checked for contractors you paid $2,000 or more in 2026</li>
<li>Net profit carried to Schedule SE and Schedule 1</li>
<li>Copies of the return and records stored together</li>
</ul>

<h2>Where invoices fit in</h2>
<p>Clean invoices make Schedule C easier because each one is a dated record of income with the client, amount and description. Our free <a href="/invoice-generator/usa">US invoice generator</a> creates PDF invoices in your browser with sequential numbers, dates and line items. It does not track payments, file your return or send invoices for you, so keep a simple log of which invoices were paid and when, then total that log at year end.</p>

<p><em>This article is general information, not tax advice. Tax law, form lines and thresholds change; check the current IRS instructions or ask a qualified tax professional before filing.</em></p>
`,
  },
  {
    slug: "self-employment-tax",
    title: "Self-Employment Tax: Rate, Calculation and Examples (2026)",
    description:
      "Self-employment tax for 2026: the 15.3% rate, the 92.35% rule, the $184,500 wage base, how to deduct half and worked examples you can follow line by line.",
    category: "tax-compliance",
    jurisdiction: "United States",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-pay-yourself-as-a-business-owner",
      "side-hustle-taxes",
      "one-big-beautiful-bill-small-business",
      "schedule-c-for-freelancers",
      "quarterly-estimated-taxes-freelancers",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "What is the self-employment tax rate for 2026?",
        a: "The rate is 15.3%: 12.4% for Social Security and 2.9% for Medicare. It applies to 92.35% of your net profit from self-employment. The 12.4% Social Security part stops once your combined wages and self-employment earnings reach the 2026 wage base of $184,500. The 2.9% Medicare part has no cap, and an extra 0.9% Additional Medicare Tax applies above certain income levels.",
      },
      {
        q: "Do I pay self-employment tax if I earn under $400?",
        a: "Generally no. You owe self-employment tax when your net earnings from self-employment are $400 or more for the year. The test uses net earnings, after business expenses and the 92.35% adjustment, not your gross receipts. Church employees have a different, lower threshold of $108.28. You still report the income for income tax purposes even if no self-employment tax is due.",
      },
      {
        q: "Why is self-employment tax calculated on 92.35% of profit?",
        a: "Employees pay 7.65% in Social Security and Medicare tax, and their employer pays a matching 7.65% that is not counted as the employee's wages. To put self-employed people on a similar footing, the law reduces net profit by 7.65% before applying the tax. One hundred percent minus 7.65% equals 92.35%, which is the multiplier on Schedule SE.",
      },
      {
        q: "Is self-employment tax in addition to income tax?",
        a: "Yes. Self-employment tax covers Social Security and Medicare, while federal income tax is calculated separately on your taxable income. Both are paid through the same Form 1040 and estimated payments, which is why the first bill often surprises new freelancers. State income tax, where it applies, is on top. The half deduction lowers income tax but not the self-employment tax itself.",
      },
      {
        q: "How does the deduction for half of self-employment tax work?",
        a: "You deduct 50% of your self-employment tax as an adjustment to income on Schedule 1 of Form 1040. It reduces your adjusted gross income and therefore your income tax, whether or not you itemize. It does not reduce the self-employment tax itself, and it is not a Schedule C business expense. For example, $9,000 of self-employment tax gives a $4,500 adjustment.",
      },
      {
        q: "Does having a W-2 job reduce my self-employment tax?",
        a: "It can, but only for high earners. Social Security wages from a job count toward the same $184,500 wage base in 2026. If your W-2 wages already reach the base, you owe only the 2.9% Medicare part on your self-employment earnings. If wages are below it, the 12.4% applies to self-employment earnings until the combined total reaches the base. Schedule SE handles the calculation.",
      },
      {
        q: "Can an LLC or S corporation avoid self-employment tax?",
        a: "A single-member LLC taxed as a sole proprietorship pays self-employment tax exactly as a sole proprietor does. An LLC or corporation that elects S corporation status pays the owner a reasonable salary subject to payroll tax, and profit distributions above that are not subject to self-employment tax. The salary must be reasonable for the work, and payroll adds costs, so get professional advice first.",
      },
      {
        q: "When do I pay self-employment tax?",
        a: "Through quarterly estimated tax payments during the year, together with income tax, and then any balance with your return. For 2026, the remaining estimated payment is due January 15, 2027, and the return is due April 15, 2027. Paying too little during the year can trigger an underpayment penalty, even if you pay the full balance when you file.",
      },
      {
        q: "What is the Social Security wage base for 2027?",
        a: "The Social Security Administration has announced that the maximum taxable earnings will rise to $192,300 for 2027, up from $184,500 in 2026. That figure will apply to self-employment earnings for the 2027 tax year, which you report on returns filed in 2028. Medicare tax remains uncapped. Check ssa.gov for the official figure before relying on it in your planning.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Self-employment tax is 15.3% (12.4% Social Security plus 2.9% Medicare) on 92.35% of your net self-employment profit. For 2026, the Social Security part applies only up to a $184,500 wage base; Medicare has no cap. You owe it once net earnings reach $400, and you can deduct half when figuring adjusted gross income.</p>

<p>When you work for an employer, Social Security and Medicare taxes are split: you pay half through payroll and the employer pays the other half. When you work for yourself, you pay both halves. That combined charge is self-employment tax, and for many freelancers it is a bigger bill than federal income tax in their first years, because it starts on almost the first dollar of profit with no standard deduction to soften it.</p>

<p>This guide explains how the tax is calculated in 2026, with three worked examples, the half deduction, how it interacts with a W-2 job, and how to pay it on time. It is general information, not tax advice. Figures come from <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer">IRS Topic 554 on self-employment tax</a> and the <a href="https://www.ssa.gov/news/en/cola/factsheets/2026.html" target="_blank" rel="noopener noreferrer">Social Security Administration's 2026 fact sheet</a>; check both for any updates before you file.</p>

<h2>What is self-employment tax?</h2>
<p>Self-employment tax (often shortened to SE tax) is the Social Security and Medicare tax paid by people who work for themselves. It funds the same programs as the FICA tax on employees' paychecks, and paying it earns you Social Security credits toward retirement and disability benefits.</p>
<p>You generally owe it if you are a sole proprietor, an independent contractor, a member of a partnership or LLC taxed as a partnership who carries on a trade or business, or a single-member LLC owner taxed as a disregarded entity. You calculate it on Schedule SE (Form 1040) and file it with your income tax return. The profit figure it starts from comes from Schedule C; our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> explains how to arrive at that number.</p>

<h2>Self-employment tax rate and 2026 figures</h2>
<table>
<thead><tr><th>Component</th><th>Rate</th><th>Applies to</th><th>2026 limit</th></tr></thead>
<tbody>
<tr><td>Social Security (OASDI)</td><td>12.4%</td><td>Net earnings from self-employment</td><td>Up to $184,500, combined with W-2 wages</td></tr>
<tr><td>Medicare (HI)</td><td>2.9%</td><td>All net earnings from self-employment</td><td>No cap</td></tr>
<tr><td>Total SE tax</td><td>15.3%</td><td>Up to the wage base; 2.9% above it</td><td>Max Social Security part: $22,878</td></tr>
<tr><td>Additional Medicare Tax</td><td>0.9%</td><td>Earnings above $200,000 (single), $250,000 (married filing jointly), $125,000 (married filing separately)</td><td>Calculated on Form 8959</td></tr>
</tbody>
</table>
<p>The 2026 wage base of $184,500 is up from $176,100 in 2025, and the SSA has announced $192,300 for 2027. The maximum Social Security portion for 2026 is $184,500 x 12.4% = $22,878.</p>

<h2>How to calculate self-employment tax, step by step</h2>
<ol>
<li><strong>Find your net profit.</strong> Start with Schedule C line 31 (or your share of partnership earnings). If you have more than one business, combine the profits and losses.</li>
<li><strong>Multiply by 92.35%.</strong> This gives your net earnings from self-employment. The 7.65% reduction mirrors the employer half of FICA, which employees never count as wages.</li>
<li><strong>Check the $400 threshold.</strong> If the result is under $400, you generally owe no SE tax.</li>
<li><strong>Apply 12.4% up to the wage base.</strong> Subtract any W-2 Social Security wages from $184,500 first; apply 12.4% to the lower of your net earnings or what remains of the base.</li>
<li><strong>Apply 2.9% to all net earnings.</strong> Medicare has no ceiling.</li>
<li><strong>Add the two parts.</strong> That is your SE tax for Schedule 2.</li>
<li><strong>Deduct half.</strong> Take 50% of the total as an adjustment to income on Schedule 1.</li>
</ol>

<h2>Worked examples of self-employment tax</h2>
<p>All numbers below are illustrative and assume a single filer in 2026 with no W-2 wages unless stated.</p>

<h3>Example 1: freelancer with $60,000 profit</h3>
<ul>
<li>Net earnings: $60,000 x 0.9235 = $55,410.00</li>
<li>Social Security: $55,410.00 x 12.4% = $6,870.84</li>
<li>Medicare: $55,410.00 x 2.9% = $1,606.89</li>
<li>SE tax: $6,870.84 + $1,606.89 = <strong>$8,477.73</strong></li>
<li>Deductible half: $8,477.73 / 2 = $4,238.87 (rounded)</li>
</ul>
<p>The effective rate on the $60,000 profit is $8,477.73 / $60,000 = about 14.1%, not 15.3%, because of the 92.35% step.</p>

<h3>Example 2: consultant with $250,000 profit</h3>
<ul>
<li>Net earnings: $250,000 x 0.9235 = $230,875.00</li>
<li>Social Security, capped at the base: $184,500 x 12.4% = $22,878.00</li>
<li>Medicare on everything: $230,875.00 x 2.9% = $6,695.38</li>
<li>SE tax: $22,878.00 + $6,695.38 = <strong>$29,573.38</strong></li>
<li>Additional Medicare Tax: ($230,875.00 - $200,000) x 0.9% = $277.88, reported on Form 8959</li>
</ul>
<p>The Additional Medicare Tax is not part of the half deduction. Only the $29,573.38 counts, giving a $14,786.69 adjustment.</p>

<h3>Example 3: side business with a W-2 job</h3>
<p>Priya earns $150,000 in W-2 wages and has $50,000 of freelance profit.</p>
<ul>
<li>Net earnings: $50,000 x 0.9235 = $46,175.00</li>
<li>Remaining wage base: $184,500 - $150,000 = $34,500</li>
<li>Social Security: $34,500 x 12.4% = $4,278.00 (only the remaining base is taxed)</li>
<li>Medicare: $46,175.00 x 2.9% = $1,339.08</li>
<li>SE tax: $4,278.00 + $1,339.08 = <strong>$5,617.08</strong></li>
</ul>
<p>Without the job, the same $50,000 would cost $46,175.00 x 15.3% = $7,064.78. Combined wages and self-employment earnings of $196,175 also stay under the $200,000 Additional Medicare threshold for a single filer.</p>

<h2>SE tax vs employee FICA</h2>
<p>It helps to compare the SE tax rate with what an employee pays. An employee earning $55,410 in wages pays 7.65% through payroll, which is $55,410 x 7.65% = $4,238.87, and the employer pays the same again on top of the salary. A freelancer with $55,410 of net earnings from self-employment pays both halves, $8,477.73, but gets the 92.35% adjustment and the half deduction to roughly match the employee's position.</p>
<table>
<thead><tr><th>Item</th><th>Employee (W-2)</th><th>Self-employed</th></tr></thead>
<tbody>
<tr><td>Social Security rate paid by the worker</td><td>6.2%</td><td>12.4%</td></tr>
<tr><td>Medicare rate paid by the worker</td><td>1.45%</td><td>2.9%</td></tr>
<tr><td>Employer share</td><td>Paid by the employer</td><td>Paid by you</td></tr>
<tr><td>How it is collected</td><td>Payroll withholding</td><td>Estimated payments and Schedule SE</td></tr>
<tr><td>Offset</td><td>Employer share is not taxable income</td><td>92.35% rule and deduction for half</td></tr>
</tbody>
</table>
<p>The practical difference is cash flow rather than the rate. Nobody withholds the tax for you, so the money has to be set aside from each payment. It also explains why a freelance rate needs to be noticeably higher than the equivalent salary per hour before it pays the same.</p>

<h3>Does SE tax count toward Social Security benefits?</h3>
<p>Yes. The Social Security portion of the tax is credited to your earnings record in the same way as payroll tax on wages, and it counts toward the credits you need for retirement and disability benefits. That is one reason to report all self-employment income accurately. Underreporting profit lowers your tax today but can also reduce the benefits you qualify for later. State income taxes are separate; SE tax is a federal tax, and states do not add their own version of it.</p>

<h2>The deduction for half of your SE tax</h2>
<p>You can deduct 50% of your SE tax as an adjustment to income on Schedule 1 of Form 1040. In Example 1, that is $4,238.87. If the freelancer's marginal federal income tax rate were 22%, the deduction would save roughly $4,238.87 x 22% = $932.55 of income tax. It does not reduce the SE tax itself, and it does not go on Schedule C. Other expenses that lower your Schedule C profit do reduce SE tax, which is why our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> is worth a careful read: every legitimate business expense saves roughly 14.1% in SE tax on top of income tax.</p>

<h2>How and when to pay self-employment tax</h2>
<p>There is no employer withholding for self-employed income, so the IRS expects you to pay as you go through estimated taxes. For 2026, the final quarterly payment is due January 15, 2027, and the return itself is due April 15, 2027. Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> covers safe harbor rules and how to work out each payment.</p>
<p>A practical habit: when an invoice is paid, move a fixed share into a separate tax savings account. Many freelancers start at 25% to 30% of each payment and adjust once they see their actual bill. That is a rule of thumb, not a calculation, and your figure depends on your income, deductions and state. It also helps to build tax into your pricing from the start, which our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> covers.</p>
<p>If you create invoices with our free <a href="/invoice-generator/usa">US invoice generator</a>, keep a copy of every PDF and note the date each one was paid. The tool builds the invoice in your browser; it does not track income, calculate tax or file anything, so that payment log is what you use when you total your income for Schedule C.</p>

<h2>Common mistakes with self-employment tax</h2>
<ul>
<li><strong>Applying 15.3% to gross receipts.</strong> The tax applies to net profit, after expenses, multiplied by 92.35%.</li>
<li><strong>Forgetting the tax entirely because no 1099 arrived.</strong> Income below the 1099 thresholds, or paid through apps covered by the <a href="/blog/1099-k-threshold">1099-K threshold</a>, is still subject to SE tax.</li>
<li><strong>Ignoring W-2 wages.</strong> If you also have a job, enter your Social Security wages on Schedule SE so you do not overpay the 12.4% part.</li>
<li><strong>Deducting half on Schedule C.</strong> It belongs on Schedule 1 as an adjustment, not as a business expense.</li>
<li><strong>Waiting until April.</strong> This tax is part of your estimated payments. Paying late can mean an underpayment penalty.</li>
<li><strong>Assuming an EIN or LLC changes the tax.</strong> Getting an EIN (see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>) or forming a single-member LLC does not change the SE tax on its own. Only an election such as S corporation status changes the treatment, and that comes with payroll costs. Our comparison of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> explains the trade-offs.</li>
</ul>

<h2>Self-employment tax checklist</h2>
<ul>
<li>Net profit from every Schedule C (and partnership K-1) added up</li>
<li>Net profit multiplied by 92.35%</li>
<li>$400 threshold checked</li>
<li>W-2 Social Security wages entered against the $184,500 base</li>
<li>12.4% and 2.9% parts calculated separately</li>
<li>Additional Medicare Tax checked on Form 8959 if income is high</li>
<li>Half of SE tax deducted on Schedule 1</li>
<li>Estimated payments scheduled, with the next one by January 15, 2027</li>
</ul>
<p>For more US and UK guides, see our <a href="/blog/category/tax-compliance">tax and compliance category</a>.</p>

<p><em>This article is general information, not tax advice. Rates, wage bases and thresholds change each year; check irs.gov and ssa.gov or speak to a qualified tax professional about your situation.</em></p>
`,
  },
  {
    slug: "self-assessment-tax-return-uk",
    title: "Self Assessment Tax Return: UK Deadlines and Steps",
    description:
      "Self Assessment tax return guide for UK sole traders: who must file, 5 October and 31 January deadlines, payments on account, penalties and a worked example.",
    category: "tax-compliance",
    jurisdiction: "United Kingdom",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-get-utr-number",
      "uk-dividend-tax-rates-2026",
      "making-tax-digital-income-tax",
      "sole-trader-invoice-uk",
      "vat-registration-threshold-uk",
    ],
    faqs: [
      {
        q: "When is the Self Assessment deadline for 2025 to 2026?",
        a: "For the 2025 to 2026 tax year, which ran from 6 April 2025 to 5 April 2026, HMRC must receive a paper return by 31 October 2026 and an online return by 11:59pm on 31 January 2027. Any tax you owe for the year, plus your first payment on account for 2026 to 2027 if one applies, is also due by 31 January 2027.",
      },
      {
        q: "Do I need to file a tax return if I earn under £1,000 from self-employment?",
        a: "Usually not, if that is your only reason to file. The £1,000 trading allowance means gross trading income of £1,000 or less in a tax year is generally tax-free and does not need to be reported. Once your gross income goes over £1,000, you normally need to register and file. You may still choose to register, for example to pay voluntary Class 2 National Insurance.",
      },
      {
        q: "What happens if I register for Self Assessment after 5 October?",
        a: "You still need to register as soon as possible. HMRC will give you a filing deadline three months from the date of the letter or email it sends if that falls after 31 January, but the payment deadline of 31 January stays the same. If you register late and do not pay all your tax by 31 January, you may get a failure to notify penalty based on the tax unpaid.",
      },
      {
        q: "How much is the penalty for a late Self Assessment return?",
        a: "There is an immediate £100 penalty if your return is up to three months late, even if you owe no tax. After three months, £10 a day is added, up to £900. After six months, a further 5% of the tax due or £300, whichever is greater, and the same again after 12 months. Late payment penalties and interest are charged separately. Different rules apply to those in Making Tax Digital.",
      },
      {
        q: "What are payments on account?",
        a: "They are two advance payments towards next year's bill, each normally half of the previous year's Self Assessment tax including Class 4 National Insurance. They are due on 31 January and 31 July. You do not have to make them if last year's bill was under £1,000, or if more than 80% of your tax was already collected at source, for example through PAYE. Any shortfall is paid the next January.",
      },
      {
        q: "Can I reduce my payments on account?",
        a: "Yes, if you expect your profits to fall, you can apply to HMRC to reduce them, online or with form SA303. Be careful: if you reduce them too far and your actual bill is higher, HMRC charges interest on the difference from the original due dates. Base the reduction on realistic figures from your bookkeeping, not on hope.",
      },
      {
        q: "Does Making Tax Digital replace the Self Assessment tax return?",
        a: "Not entirely. From 6 April 2026, sole traders and landlords with qualifying income over £50,000 keep digital records and send quarterly updates through compatible software, then submit their tax return through that software by 31 January after the tax year. The threshold falls to £30,000 from April 2027. Payment deadlines stay the same. Those below the thresholds continue with standard Self Assessment.",
      },
      {
        q: "What records do I need to keep for Self Assessment?",
        a: "Keep records of all business income, such as invoices and bank deposits, and all expenses, such as receipts and bills, plus any other income you report. Sole traders generally need to keep records for at least five years after the 31 January filing deadline of the relevant tax year. HMRC can ask to see them if it opens a check into your return.",
      },
      {
        q: "Can I pay my Self Assessment bill through my tax code?",
        a: "Possibly. If you also work as an employee or receive a UK pension, owe less than £3,000, and file your online return by 30 December, HMRC may collect the tax through your PAYE tax code over the following tax year instead of you paying a lump sum. This does not apply to payments on account. Check the conditions on GOV.UK before relying on it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Self Assessment tax return reports income HMRC has not already taxed, such as sole trader profits. Register by 5 October after your first tax year, file online by 31 January (paper by 31 October), and pay by 31 January. Payments on account may also be due on 31 January and 31 July.</p>

<p>If you have started working for yourself in the UK, the Self Assessment tax return is the yearly form that turns your invoices and expenses into an Income Tax and National Insurance bill. The process is manageable once you know the dates, but the timing catches people out: you pay for the year after it ends, often alongside an advance payment for the next year, so a first bill can be much larger than expected.</p>

<p>This guide covers who needs to file, the key deadlines for the 2025 to 2026 return, the steps from registration to payment, payments on account with a worked example, penalties, and how Making Tax Digital changes things. It is general information, not tax advice. Dates and penalties are taken from <a href="https://www.gov.uk/self-assessment-tax-returns/deadlines" target="_blank" rel="noopener noreferrer">GOV.UK's Self Assessment deadlines page</a> and related guidance; check GOV.UK before you act.</p>

<h2>Who needs to file a Self Assessment tax return?</h2>
<p>You normally need to file if, in the last tax year (6 April to 5 April), any of these applied:</p>
<ul>
<li>You were self-employed as a sole trader and earned more than £1,000 before expenses, which is the trading allowance.</li>
<li>You were a partner in a business partnership.</li>
<li>You had untaxed income, such as rental income, significant savings or investment income, or foreign income.</li>
<li>You need to pay the High Income Child Benefit Charge, or had income over certain levels.</li>
<li>HMRC sent you a notice to file.</li>
</ul>
<p>Limited company directors may need to file too, depending on their income. If you are unsure, GOV.UK has a checker tool. If you are not yet sure what structure to use, our guide to <a href="/blog/sole-trader-invoice-uk">sole trader invoices in the UK</a> explains what a sole trader's invoices must show.</p>

<h2>Self Assessment tax return deadlines</h2>
<p>These are the dates for the 2025 to 2026 tax year, which ended on 5 April 2026.</p>
<table>
<thead><tr><th>Deadline</th><th>What is due</th></tr></thead>
<tbody>
<tr><td>5 October 2026</td><td>Register for Self Assessment if you need to file for the first time (or after a gap)</td></tr>
<tr><td>31 October 2026</td><td>Paper tax return must reach HMRC</td></tr>
<tr><td>30 December 2026</td><td>Online return, if you want an eligible balance under £3,000 collected through your PAYE tax code</td></tr>
<tr><td>31 January 2027</td><td>Online tax return; balancing payment for 2025 to 2026; first payment on account for 2026 to 2027</td></tr>
<tr><td>31 July 2027</td><td>Second payment on account for 2026 to 2027</td></tr>
</tbody>
</table>
<p>Each deadline is 11:59pm on that day. If you registered after 5 October, HMRC gives you a filing deadline three months from the date of its notice if that is later than 31 January, but the payment date stays 31 January.</p>

<h2>How to file a Self Assessment tax return: step by step</h2>
<ol>
<li><strong>Register.</strong> New sole traders register online for Self Assessment and Class 2 and Class 4 National Insurance. Do it as soon as you start, and no later than 5 October after the end of your first tax year. HMRC then sends your Unique Taxpayer Reference (UTR), and you set up your online account.</li>
<li><strong>Keep records all year.</strong> Record every invoice, payment received and business expense. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> sets up a simple routine.</li>
<li><strong>Choose an accounting basis.</strong> From 2024 to 2025, the cash basis is the default for most sole traders, so you count income when paid and expenses when paid. You can opt for traditional accruals accounting instead. Our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> shows the difference.</li>
<li><strong>Total your figures after 5 April.</strong> Add up turnover, allowable expenses and any other income for the tax year. Your accounts can be simple; HMRC does not require formal financial statements from most sole traders.</li>
<li><strong>Complete the return.</strong> Online, the self-employment section asks for turnover and expenses. If your turnover is below the VAT threshold, you can usually give a single figure for total expenses.</li>
<li><strong>Check the calculation.</strong> HMRC's online service calculates your Income Tax and Class 4 National Insurance and shows any payments on account.</li>
<li><strong>Submit and pay by 31 January.</strong> Keep the submission reference and pay by bank transfer, debit card or another listed method. Allow time for payments to clear.</li>
<li><strong>Keep your records.</strong> Sole traders generally keep records for at least five years after the 31 January filing deadline. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> has the details.</li>
</ol>

<h2>What you pay: Income Tax and National Insurance</h2>
<p>Your profit is taxed alongside your other income. For 2025 to 2026 in England, Wales and Northern Ireland, the personal allowance is £12,570 and the basic rate of 20% applies to the next £37,700 of taxable income, with higher rates above that. Scotland sets its own Income Tax bands for non-savings income, so Scottish taxpayers should use Scottish rates.</p>
<p>Self-employed people also pay Class 4 National Insurance at 6% on profits between £12,570 and £50,270, and 2% above that, according to GOV.UK. Class 2 contributions are no longer compulsory: if profits are above the small profits threshold, they are treated as paid, and below it you can choose to pay voluntarily to protect your State Pension record.</p>

<h2>Payments on account explained</h2>
<p>Payments on account are advance payments towards the next year's bill. Each one is normally half of the previous year's Self Assessment liability (Income Tax plus Class 4 National Insurance). According to <a href="https://www.gov.uk/understand-self-assessment-bill/payments-on-account" target="_blank" rel="noopener noreferrer">GOV.UK's payments on account guidance</a>, you do not have to make them if last year's bill was under £1,000, or if you paid more than 80% of your tax at source.</p>

<h3>Worked example: a first-year sole trader's January bill</h3>
<p>The figures below are illustrative. Sam started as a freelance designer in England in April 2025 and has no other income. For 2025 to 2026, Sam's turnover was £52,000 and allowable expenses were £12,000.</p>
<ul>
<li>Profit: £52,000 - £12,000 = £40,000</li>
<li>Taxable income: £40,000 - £12,570 personal allowance = £27,430</li>
<li>Income Tax: £27,430 x 20% = £5,486.00</li>
<li>Class 4 National Insurance: (£40,000 - £12,570) x 6% = £27,430 x 6% = £1,645.80</li>
<li>Total 2025 to 2026 bill: £5,486.00 + £1,645.80 = £7,131.80</li>
</ul>
<p>Because the bill is over £1,000 and none of it was taxed at source, payments on account apply for 2026 to 2027. Each is half of £7,131.80, which is £3,565.90.</p>
<table>
<thead><tr><th>Date</th><th>Payment</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>31 January 2027</td><td>Balancing payment for 2025 to 2026</td><td>£7,131.80</td></tr>
<tr><td>31 January 2027</td><td>First payment on account for 2026 to 2027</td><td>£3,565.90</td></tr>
<tr><td>31 January 2027</td><td>Total due</td><td>£10,697.70</td></tr>
<tr><td>31 July 2027</td><td>Second payment on account for 2026 to 2027</td><td>£3,565.90</td></tr>
</tbody>
</table>
<p>The arithmetic for January: £7,131.80 + £3,565.90 = £10,697.70. That is roughly 150% of one year's tax in a single month, which is why first-year sole traders should set money aside from every paid invoice. If Sam's 2026 to 2027 bill turns out to be £8,000, Sam pays the difference of £8,000 - (£3,565.90 x 2) = £8,000 - £7,131.80 = £868.20 by 31 January 2028.</p>

<h2>Self Assessment penalties</h2>
<p>Under the standard Self Assessment rules on <a href="https://www.gov.uk/self-assessment-tax-returns/penalties" target="_blank" rel="noopener noreferrer">GOV.UK's penalties page</a>:</p>
<table>
<thead><tr><th>Lateness</th><th>Late filing penalty</th><th>Late payment penalty</th></tr></thead>
<tbody>
<tr><td>1 day</td><td>£100 fixed penalty</td><td>Interest starts</td></tr>
<tr><td>30 days</td><td>No change</td><td>5% of tax unpaid</td></tr>
<tr><td>3 months</td><td>£10 a day, up to £900</td><td>Interest continues</td></tr>
<tr><td>6 months</td><td>5% of tax due or £300, whichever is greater</td><td>Further 5% of tax unpaid</td></tr>
<tr><td>12 months</td><td>Another 5% or £300, whichever is greater</td><td>Further 5% of tax unpaid</td></tr>
</tbody>
</table>
<p>The £100 penalty applies even if you owe no tax. Interest is charged on late tax at a rate HMRC sets in line with the Bank of England base rate. You can appeal if you had a reasonable excuse. If you are within Making Tax Digital for Income Tax, a newer points-based system for late submissions and a different late payment regime apply, so check the current GOV.UK rules.</p>

<h2>Making Tax Digital and your Self Assessment</h2>
<p>From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must use Making Tax Digital for Income Tax. They keep digital records, send quarterly updates through compatible software and submit their return through that software by 31 January. The threshold drops to £30,000 from April 2027 and is due to fall to £20,000 from April 2028. Our guide to <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> explains who is in scope and what software you need.</p>

<h2>Common mistakes with the Self Assessment tax return</h2>
<ul>
<li><strong>Registering late.</strong> Missing 5 October can lead to a failure to notify penalty if tax is unpaid at 31 January.</li>
<li><strong>Forgetting payments on account.</strong> The first January bill often includes the next year's first instalment.</li>
<li><strong>Leaving it until January.</strong> HMRC's systems and helplines are busiest near the deadline, and you need your UTR and login ready.</li>
<li><strong>Claiming personal costs.</strong> Only costs wholly and exclusively for the business are allowable; split mixed-use costs fairly.</li>
<li><strong>Using the wrong tax year.</strong> The UK tax year runs 6 April to 5 April, not January to December.</li>
<li><strong>Ignoring VAT.</strong> If turnover passes the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a>, VAT registration is a separate obligation from Self Assessment.</li>
<li><strong>Weak records.</strong> Missing invoices make income hard to prove. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide covers a simple system.</li>
</ul>

<h2>Self Assessment checklist for sole traders</h2>
<ul>
<li>Registered with HMRC and UTR received</li>
<li>Government Gateway or HMRC online account login working</li>
<li>All invoices and payments for 6 April to 5 April listed</li>
<li>Allowable expenses totaled, with receipts kept</li>
<li>Accounting basis (cash or accruals) confirmed</li>
<li>Other income, such as interest or rent, gathered</li>
<li>Payments on account checked and money set aside</li>
<li>Return filed and paid by 31 January</li>
<li>Making Tax Digital status checked for the next tax year</li>
</ul>

<h2>Where invoices fit in</h2>
<p>Every invoice you issue is part of the evidence behind your turnover figure. Our free <a href="/invoice-generator/uk">UK invoice generator</a> creates PDF invoices in your browser with your details, dates, line items and sequential numbers, and you can choose a clean layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a>. It does not file your return, track income or send invoices for you, so keep each PDF and note when it was paid.</p>

<p><em>This article is general information, not tax advice. Tax rates, deadlines and penalties change, and your circumstances matter; check GOV.UK or speak to a qualified accountant before acting.</em></p>
`,
  },
  {
    slug: "vat-registration-threshold-uk",
    title: "UK VAT Registration Threshold 2026: When to Register",
    description:
      "The UK VAT registration threshold is £90,000. Learn the rolling 12-month and 30-day tests, register-by deadlines, what counts as turnover and a worked example.",
    category: "tax-compliance",
    jurisdiction: "United Kingdom",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "vat-flat-rate-scheme",
      "how-to-file-vat-return-uk",
      "vat-invoice-guide",
      "zero-rated-vs-exempt-vat",
      "self-assessment-tax-return-uk",
    ],
    faqs: [
      {
        q: "What is the UK VAT registration threshold in 2026?",
        a: "It is £90,000 of VAT taxable turnover. You must register if your taxable turnover for the last 12 months goes over £90,000, or if you expect it to go over £90,000 in the next 30 days alone. The figure has applied since 1 April 2024, when it rose from £85,000. The separate deregistration threshold is £88,000. Check GOV.UK for any change announced at a Budget.",
      },
      {
        q: "Is the VAT threshold based on the tax year or a rolling 12 months?",
        a: "A rolling 12 months. At the end of every month, add up your taxable turnover for that month and the previous 11 months. If the total is over £90,000, you must register. It is not tied to the tax year, your accounting year or the calendar year, which is why a business can cross the threshold in any month, including one with modest sales.",
      },
      {
        q: "How long do I have to register for VAT after going over the threshold?",
        a: "Under the rolling 12-month test, you must register within 30 days of the end of the month in which you went over. Your effective date of registration is the first day of the second month after that. For example, crossing the threshold in July means registering by 30 August with an effective date of 1 September. Under the forward-looking test, register by the end of the 30-day period.",
      },
      {
        q: "Do zero-rated sales count towards the VAT threshold?",
        a: "Yes. Zero-rated supplies are taxable supplies at 0%, so they count towards your taxable turnover. Exempt supplies, such as most insurance, and supplies outside the scope of UK VAT do not count. If most of your sales are zero-rated, you may be able to apply to HMRC for an exemption from registration, but you need HMRC's agreement.",
      },
      {
        q: "Can I register for VAT voluntarily below £90,000?",
        a: "Yes. Voluntary registration lets you reclaim VAT on business purchases and can make a small business look more established to larger clients, who can usually reclaim the VAT you charge. The downside is that you must charge VAT on taxable sales, file VAT returns under Making Tax Digital, and your prices rise by 20% for customers who cannot reclaim VAT, such as consumers.",
      },
      {
        q: "What happens if I register for VAT late?",
        a: "You must account for VAT on sales made from the date you should have been registered, even though you did not charge it at the time. That usually means paying the VAT out of your own pocket unless you can recover it from customers. HMRC may also charge a penalty based on the VAT due and on how and why the registration was late. Register as soon as you realise.",
      },
      {
        q: "Can I charge VAT while waiting for my VAT number?",
        a: "You cannot show VAT on an invoice until you have a VAT registration number. HMRC's guidance is that while waiting, you can increase your prices to cover the VAT you will owe and explain this to customers, then issue proper VAT invoices once the number arrives. You still owe VAT from your effective date of registration, so plan your pricing for that period.",
      },
      {
        q: "Does the VAT threshold apply to overseas businesses selling to the UK?",
        a: "No. A business not established in the UK that makes taxable supplies in the UK generally has to register regardless of turnover, because the threshold does not apply to non-established taxable persons. There are specific rules for online marketplaces and imports. If you are based abroad and sell into the UK, check the GOV.UK guidance or take advice before your first sale.",
      },
      {
        q: "If my turnover drops, can I deregister from VAT?",
        a: "You can apply to cancel your registration if you expect your VAT taxable turnover in the next 12 months to be below the deregistration threshold of £88,000. You must deregister if you stop making taxable supplies. On deregistration you may need to account for VAT on stock and assets you still hold, if the VAT is more than £1,000.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The UK VAT registration threshold is £90,000 of taxable turnover. You must register if your turnover over the last 12 months (a rolling period, not the tax year) goes over £90,000, or if you expect to exceed £90,000 in the next 30 days alone. Below the threshold, registration is voluntary.</p>

<p>For a growing sole trader or small company, the VAT registration threshold is one of the most important numbers to watch. Cross it without noticing, and you can end up paying VAT out of your own margin on sales you made months earlier. Register too early without thinking it through, and you may add 20% to prices for customers who cannot reclaim it.</p>

<p>This guide explains how the UK VAT registration threshold works in 2026, the two tests that trigger registration, what counts as taxable turnover, the deadlines, and what changes on your invoices once you are registered. It is general information, not tax advice. The rules below come from <a href="https://www.gov.uk/vat-registration/when-to-register" target="_blank" rel="noopener noreferrer">GOV.UK's guidance on when to register for VAT</a> and its <a href="https://www.gov.uk/how-vat-works/vat-thresholds" target="_blank" rel="noopener noreferrer">VAT thresholds page</a>; check both, because the threshold can change at a Budget.</p>

<h2>What is the UK VAT registration threshold in 2026?</h2>
<table>
<thead><tr><th>Threshold</th><th>Amount</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Registration threshold</td><td>More than £90,000</td><td>You must register if taxable turnover goes over this amount</td></tr>
<tr><td>Deregistration threshold</td><td>Less than £88,000</td><td>You can apply to cancel registration if you expect turnover below this in the next 12 months</td></tr>
<tr><td>Non-established businesses</td><td>No threshold</td><td>Overseas businesses making taxable supplies in the UK generally register from the first supply</td></tr>
</tbody>
</table>
<p>The registration threshold rose from £85,000 to £90,000 on 1 April 2024, and the deregistration threshold from £83,000 to £88,000 at the same time. Older articles that still quote £85,000 are out of date.</p>

<h2>The two tests: rolling 12 months and the next 30 days</h2>

<h3>Test 1: the rolling 12-month (historic) test</h3>
<p>At the end of each month, add your VAT taxable turnover for that month to the previous 11 months. If the total is over £90,000, you must register within 30 days of the end of that month. Your effective date of registration is the first day of the second month after the month you went over.</p>
<p>GOV.UK's own example: if you go over the threshold on 15 July, you must register by 30 August, and your effective date is 1 September.</p>

<h3>Test 2: the 30-day forward-look (future) test</h3>
<p>If at any point you expect your taxable turnover in the next 30 days alone to go over £90,000, you must register by the end of that 30-day period. Here the effective date is the date you realised, not the date you actually crossed it. GOV.UK's example: if on 1 May you sign a contract worth £100,000 that will be invoiced within 30 days, you must register by 30 May, and your effective date is 1 May. This test catches a single large contract that would otherwise slip through the monthly check.</p>

<h2>What counts as VAT taxable turnover?</h2>
<p>VAT taxable turnover is the total value of everything you sell that is not exempt from VAT. In practice:</p>
<ul>
<li><strong>Counts:</strong> standard-rated (20%) and reduced-rated (5%) sales, and zero-rated sales such as most books and children's clothing.</li>
<li><strong>Does not count:</strong> exempt supplies, such as most insurance, finance and some education and health services, and supplies outside the scope of UK VAT.</li>
<li><strong>Use the value before VAT.</strong> You are not charging VAT yet, so this is simply your sales figure.</li>
<li><strong>Count by business, not by activity.</strong> A sole trader's VAT registration covers all of their business activities, so add up taxable sales across every trade they run as a sole trader.</li>
</ul>
<p>The difference between zero-rated and exempt sales matters here, because one counts and the other does not. Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the distinction. Services you supply to business customers abroad may be outside the scope of UK VAT under the place-of-supply rules, and our guide to the <a href="/blog/reverse-charge-invoice">reverse charge on invoices</a> covers how those are usually invoiced.</p>

<h2>Worked example: when does a freelancer cross the VAT threshold?</h2>
<p>These figures are illustrative. Alex is a UK freelance developer whose monthly invoiced turnover (all standard-rated services to UK clients) was £7,000 a month from July 2025 to March 2026, then rose with a new retainer.</p>
<table>
<thead><tr><th>Month end</th><th>Turnover that month</th><th>Rolling 12-month total</th><th>Over £90,000?</th></tr></thead>
<tbody>
<tr><td>31 March 2026</td><td>£7,000</td><td>£84,000</td><td>No</td></tr>
<tr><td>30 April 2026</td><td>£9,000</td><td>£86,000</td><td>No</td></tr>
<tr><td>31 May 2026</td><td>£9,500</td><td>£88,500</td><td>No</td></tr>
<tr><td>30 June 2026</td><td>£9,500</td><td>£91,000</td><td>Yes</td></tr>
</tbody>
</table>
<p>How the totals work: assume the 12 months to 31 March 2026 were twelve months of £7,000, so £7,000 x 12 = £84,000. Each new month adds the new figure and drops the month from a year earlier, which was £7,000. April: £84,000 + £9,000 - £7,000 = £86,000. May: £86,000 + £9,500 - £7,000 = £88,500. June: £88,500 + £9,500 - £7,000 = £91,000, which is over £90,000.</p>
<p>Alex went over the threshold in June 2026, so Alex must register by 30 July 2026, and the effective date of registration is 1 August 2026. From 1 August, every invoice must include 20% VAT. A £5,000 invoice to a client becomes £5,000 + (£5,000 x 20%) = £5,000 + £1,000 = £6,000.</p>
<p>If Alex had missed it and only registered in December 2026, the VAT would still be due from 1 August. If the August to November invoices totalled £38,000 and were issued without VAT, HMRC would generally treat them as VAT-inclusive, so the VAT due would be £38,000 x 1/6 = £6,333.33, paid out of Alex's own income unless clients agreed to pay extra. That is why it pays to check the rolling total every month, which you can do quickly with our <a href="/tools/sales-tax-calculator">sales tax and VAT calculator</a> and a simple spreadsheet.</p>

<h2>Temporary breaches and exceptions</h2>
<p>Sometimes a business goes over the VAT registration threshold because of a one-off spike, such as a single large order or the sale of equipment, while its normal trade stays well below £90,000. In that case you can ask HMRC for an exception from registration. You still have to tell HMRC within the normal deadline, and you need to show that your taxable turnover in the next 12 months will not go over the deregistration threshold of £88,000. HMRC writes to confirm whether it accepts the exception; if it does not, it registers you.</p>
<p>A business whose taxable supplies are wholly or mainly zero-rated can also apply for exemption from registration, because it would usually be reclaiming more VAT than it charged. Again, HMRC must agree, and you should keep the evidence that supports your forecast. Do not simply assume you qualify and skip the application.</p>

<h2>How to register for VAT</h2>
<ol>
<li><strong>Check your turnover monthly.</strong> Keep a running 12-month total and note any big contracts coming up.</li>
<li><strong>Register online.</strong> Most businesses register through HMRC's online service; form VAT1 is the postal alternative. You will need business details, turnover figures, bank details and the date you crossed the threshold.</li>
<li><strong>Wait for your VAT number.</strong> HMRC writes to confirm your VAT registration number and effective date.</li>
<li><strong>Adjust prices from the effective date.</strong> While waiting, you can raise prices to cover the VAT but cannot show VAT on invoices until the number arrives. Then issue proper VAT invoices.</li>
<li><strong>Sign up for Making Tax Digital for VAT.</strong> VAT-registered businesses keep digital records and file VAT returns using compatible software.</li>
<li><strong>Consider a scheme.</strong> The Flat Rate Scheme, cash accounting or annual accounting may simplify things for small businesses. Check eligibility and the current flat rate percentages on GOV.UK before you choose one.</li>
</ol>

<h2>What changes on your invoices after registering</h2>
<p>Once registered, your invoices become VAT invoices. A full VAT invoice needs your VAT registration number, a unique invoice number, the invoice date, the time of supply if different, the customer's name and address, a description of each item, the VAT rate and the net, VAT and total amounts. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists every required field, and our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers where the VAT number usually appears.</p>
<p>Our free <a href="/invoice-generator/uk">UK invoice generator</a> lets you add a VAT number and a VAT rate per line, and builds the invoice as a PDF in your browser. It does not register you for VAT, file VAT returns or send invoices for you. If you are still below the threshold, our guide to <a href="/blog/sole-trader-invoice-uk">sole trader invoices in the UK</a> covers what a non-VAT-registered invoice should show.</p>

<h2>Should you register voluntarily?</h2>
<p>Voluntary registration can make sense if most of your clients are VAT-registered businesses, because they can reclaim the VAT you charge, while you reclaim VAT on your own costs. It usually makes less sense if you sell mostly to consumers, who cannot reclaim VAT, because you either raise prices by 20% or absorb the tax. A consumer price of £120 that must now include VAT leaves you £120 / 1.2 = £100, not £120. Factor this into your pricing; our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> can help.</p>

<h2>Common mistakes with the VAT registration threshold</h2>
<ul>
<li><strong>Checking against the tax year.</strong> The test is a rolling 12 months, checked at every month end.</li>
<li><strong>Using £85,000.</strong> The threshold has been £90,000 since 1 April 2024.</li>
<li><strong>Leaving out zero-rated sales.</strong> They count towards taxable turnover.</li>
<li><strong>Including exempt or out-of-scope sales.</strong> They do not count, so including them can push you into registering early.</li>
<li><strong>Missing the 30-day forward test</strong> when a single large contract arrives.</li>
<li><strong>Showing VAT before you have a number.</strong> You cannot charge VAT on an invoice until you are registered and have the number.</li>
<li><strong>Confusing VAT with Income Tax.</strong> VAT registration is separate from your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>, and from <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a>.</li>
</ul>

<h2>VAT threshold checklist</h2>
<ul>
<li>Rolling 12-month taxable turnover updated at each month end</li>
<li>Exempt and out-of-scope sales excluded; zero-rated sales included</li>
<li>Large upcoming contracts checked against the 30-day test</li>
<li>Registration deadline and effective date noted if you go over</li>
<li>Prices and contracts reviewed for the 20% VAT impact</li>
<li>Invoice template updated with VAT number and VAT lines</li>
<li>Making Tax Digital compatible software chosen for VAT returns</li>
</ul>

<p><em>This article is general information, not tax advice. VAT thresholds and rules can change at any Budget; check GOV.UK or speak to a qualified accountant about your business.</em></p>
`,
  },
];
