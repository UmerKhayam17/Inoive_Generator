import type { PostDraft } from "../blog";

export const INTL_TAX_2026_POSTS: PostDraft[] = [
  {
    slug: "t4a-slip",
    title: "T4A Slip Explained for Canadian Contractors (2026)",
    description:
      "T4A slip guide for Canadian contractors and payers: box 048 fees for services, the $500 rule, the February deadline, e-filing and reconciling your income.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Canada",
    related: ["canada-self-employed-tax", "how-to-register-for-gst-hst-canada", "independent-contractor-invoice"],
    faqs: [
      {
        q: "Do I have to report income that was not on a T4A?",
        a: "Yes. A T4A is an information slip, not the source of your obligation. Self-employed contractors must report all business income on Form T2125, whether or not a client issued a slip, and whether the client paid $400 or $40,000. Many small clients never issue T4As, and the CRA's moratorium on box 048 penalties means some larger ones skip them too. Your own invoice records are the complete picture.",
      },
      {
        q: "What is the T4A filing deadline for 2026 payments?",
        a: "T4A slips and the T4A Summary are due by the last day of February following the calendar year. For payments made in 2026 that is February 28, 2027. Because that date falls on a Sunday, the CRA treats returns received or postmarked by the next business day, Monday, March 1, 2027, as on time. Payees should receive their copies by the same deadline.",
      },
      {
        q: "Does GST/HST go in box 048?",
        a: "No. The CRA's instructions say not to include GST/HST or provincial sales tax in the amount reported in box 048. If a contractor invoiced $10,000 plus $1,300 HST, the payer reports $10,000. Contractors should therefore compare the box 048 figure with their pre-tax invoice totals, not the amounts that actually landed in the bank including sales tax.",
      },
      {
        q: "Do businesses get penalized for not issuing T4A box 048?",
        a: "At the time of writing, the CRA says it is not assessing penalties for failures related to box 048, with one exception: for 2025 and later years, businesses in the trucking industry will be penalized for not reporting fees over $500 paid to Canadian-controlled private corporations in that industry. Other T4A boxes, and filing on paper when e-filing is required, can still attract penalties.",
      },
      {
        q: "Should a contractor give a SIN or business number to a client?",
        a: "For a T4A, the payer enters the recipient's SIN in box 012 for individuals, and a business number in box 013 when the recipient is a business, including sole proprietors, partnerships and corporations. If you are a sole proprietor with a BN, providing the BN limits how often you share your SIN. Incorporated contractors never give a SIN for the corporation's slip.",
      },
      {
        q: "What if my T4A amount is wrong?",
        a: "Ask the payer to issue an amended slip, marked as such, with the correct figure. Send them your invoice list and payment dates for the year so they can see the difference, which is usually timing (an invoice paid in January counted in the wrong year) or sales tax included in error. If they will not amend it, report your correct income and keep the evidence in case the CRA asks.",
      },
    ],
    content: `
<p>A T4A slip is the information slip a Canadian business files with the CRA, and sends to you, to report certain payments, most often fees for services in box 048 when a payer paid you more than $500 in the calendar year. For a contractor, the T4A is a cross-check, not a bill: you report all of your self-employment income on Form T2125 whether or not a slip arrives. For a payer, it is a February filing deadline with real admin behind it.</p>

<p>This guide explains the T4A from both sides: which boxes matter for contractors, when a business has to issue one, the e-filing rule that now applies to small payers, how to reconcile a slip against your invoices, and what to do when the figure looks wrong. It is general information, not tax advice; a Canadian accountant can confirm how it applies to your business.</p>

<h2>What is a T4A slip?</h2>
<p>T4A stands for Statement of Pension, Retirement, Annuity, and Other Income. Despite the name, it covers a wide range of payments, including pensions, scholarships, commissions to independent agents and fees for services. Each slip has a payer section, a recipient section and numbered boxes. The payer files a T4A Summary with all slips issued for the year.</p>
<p>For freelancers and contractors, three boxes matter most:</p>
<table><thead><tr><th>Box</th><th>What it reports</th><th>What the contractor does with it</th></tr></thead><tbody>
<tr><td>048 Fees for services</td><td>Fees paid for services, excluding GST/HST and PST</td><td>Include in gross business income on T2125</td></tr>
<tr><td>020 Self-employed commissions</td><td>Commissions paid to independent agents, excluding sales tax</td><td>Include in business income on T2125</td></tr>
<tr><td>022 Income tax deducted</td><td>Tax the payer withheld, if any</td><td>Claim as tax deducted on your return</td></tr>
<tr><td>012 / 013</td><td>Recipient's SIN / business number</td><td>Check it matches your records</td></tr>
<tr><td>028 Other income (code)</td><td>Amounts not covered by other boxes</td><td>Depends on the payment type</td></tr>
</tbody></table>
<p>The box definitions are in the CRA's page on <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/completing-filing-information-returns/t4a-information-payers/t4a-slip/filling-t4a-slip.html" target="_blank" rel="noopener noreferrer">filling out the T4A slip</a>.</p>

<h2>When does a business have to issue a T4A?</h2>
<p>Under the CRA's administrative policy, a payer must prepare a T4A for a recipient if income tax was deducted from any payment, or if the total of payments reported on the slip for the calendar year was more than $500. For box 048, the $500 test is applied to fees for services paid during the year, excluding sales tax.</p>
<p>Two points cause confusion:</p>
<ul>
<li><strong>Paid, not invoiced.</strong> The slip covers payments made in the calendar year. An invoice dated December 15, 2026 and paid January 10, 2027 belongs on the 2027 slip.</li>
<li><strong>The box 048 moratorium.</strong> The CRA currently says it is not assessing penalties for failures related to box 048, except in trucking, where penalties apply for 2025 and later years on fees over $500 paid to Canadian-controlled private corporations in that industry. Many payers still file box 048 slips as good practice; some do not.</li>
</ul>
<p>Payments to non-residents for services rendered in Canada use a different slip, the T4A-NR, with its own withholding rules.</p>

<h2>T4A deadline and e-filing rules</h2>
<p>Slips go to recipients and the CRA by the last day of February. For 2026 payments, that is Sunday, February 28, 2027, so returns received or postmarked by Monday, March 1, 2027 are on time.</p>
<p>The e-filing threshold catches many small businesses. For information returns filed on or after January 1, 2024, a payer with more than 5 slips of the same type for a year must file electronically, through Web Forms or Internet file transfer, rather than on paper. The CRA's penalty for paper filing when e-filing was required starts at $125 for 6 to 50 slips and rises with volume. The details are in the CRA's guide on <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/file-information-returns-slip-summaries/how-to-file.html" target="_blank" rel="noopener noreferrer">how to file information returns</a>. Web Forms handles up to 100 slips per submission and is free.</p>

<h2>How to issue a T4A: step by step for payers</h2>
<ol>
<li><strong>Collect contractor details at onboarding:</strong> legal name, address and either SIN or business number. A short contractor form saves chasing in February.</li>
<li><strong>Track payments by recipient</strong> through the year, separating the fee from GST/HST on each invoice.</li>
<li><strong>Identify recipients over $500</strong> in fees for the calendar year, plus anyone you withheld tax from.</li>
<li><strong>Prepare slips</strong> using CRA Web Forms or payroll software, entering fees in box 048 and identifiers in box 012 or 013.</li>
<li><strong>Prepare the T4A Summary</strong> totalling all slips.</li>
<li><strong>File electronically</strong> if you have more than 5 slips, and send each recipient their copy by the deadline.</li>
<li><strong>Keep records</strong> of the invoices and payments behind each slip.</li>
</ol>
<p>Your account must have a business number with an information returns (RZ) or payroll (RP) program account to file. If you do not have one yet, our guide to the <a href="/blog/cra-business-number">CRA business number</a> explains how to register.</p>

<h2>Worked example: reconciling a T4A with your invoices</h2>
<p>Leah is a freelance UX designer in Ontario, registered for GST/HST. In 2026 she invoiced one agency client as follows (illustrative figures):</p>
<table><thead><tr><th>Invoice</th><th>Date issued</th><th>Fee</th><th>HST 13%</th><th>Date paid</th></tr></thead><tbody>
<tr><td>#2026-014</td><td>Feb 3, 2026</td><td>$6,000</td><td>$780</td><td>Mar 4, 2026</td></tr>
<tr><td>#2026-031</td><td>Jun 10, 2026</td><td>$8,500</td><td>$1,105</td><td>Jul 9, 2026</td></tr>
<tr><td>#2026-052</td><td>Oct 20, 2026</td><td>$7,200</td><td>$936</td><td>Nov 18, 2026</td></tr>
<tr><td>#2026-067</td><td>Dec 16, 2026</td><td>$4,000</td><td>$520</td><td>Jan 14, 2027</td></tr>
</tbody></table>
<p>The agency's T4A box 048 should show $21,700: the three fees paid in 2026, without HST. The December invoice falls into 2027 for the agency's slip. Leah, if she reports on the accrual basis as most businesses must for income tax, includes all $25,700 of fees invoiced in 2026 on her T2125. Her income will be higher than the T4A, and that is correct. Keeping the invoice number, fee and tax in separate columns is what makes this check take two minutes. For how GST/HST should appear on each invoice, see <a href="/blog/canada-gst-hst-invoice-requirements">Canada GST/HST invoice requirements</a>.</p>

<h2>How contractors report T4A income</h2>
<p>Self-employed individuals report business income on Form T2125, Statement of Business or Professional Activities, attached to their T1 return. Enter your total gross business income from your own records, including amounts on T4A slips. Do not add the T4A on top of your invoice total, or you will double count. If tax was withheld (box 022), claim it as a credit. Self-employed people also pay both portions of CPP on net earnings; our guide to <a href="/blog/canada-self-employed-tax">self-employed tax in Canada</a> walks through the T2125, CPP and instalments.</p>
<p>Incorporated contractors receive slips in the corporation's name, with its BN in box 013. The corporation reports the income on its T2 return, not you personally.</p>

<h2>Common T4A mistakes</h2>
<ul>
<li><strong>Including GST/HST in box 048.</strong> The slip should show the fee only.</li>
<li><strong>Using invoice dates instead of payment dates.</strong> T4As are on a paid basis for the calendar year.</li>
<li><strong>Filing on paper with 6 or more slips.</strong> That alone can trigger a penalty.</li>
<li><strong>Contractors ignoring income with no slip.</strong> The CRA expects all income reported. Clients that skip box 048 do not change your obligation.</li>
<li><strong>Treating a worker as a contractor to avoid payroll.</strong> If the relationship looks like employment, a T4 with source deductions may be required instead. When unsure, the CRA can rule on worker status.</li>
</ul>

<h2>T4A edge cases contractors ask about</h2>
<h3>Platforms and marketplaces</h3>
<p>Freelance platforms and app-based services may or may not issue T4As, and some report income under other CRA reporting regimes, such as the rules for digital platform operators. Whatever slips you receive, your income figure comes from your own records of what each platform paid you, net of nothing: platform fees are a deductible expense, not a reduction in gross income.</p>
<h3>Reimbursed expenses</h3>
<p>If a client reimburses travel or materials that you billed on your invoice, the payer may include the reimbursement in box 048. Report the full amount as income and claim the costs as expenses on your T2125. Itemizing reimbursements as separate invoice lines helps you see exactly what the client included.</p>
<h3>Several slips from one client</h3>
<p>A client with more than one division, or one that changed payroll systems mid-year, may send two slips. Add them together and compare to your invoices for that client as a whole.</p>
<h3>Non-resident contractors</h3>
<p>If you live outside Canada and performed services in Canada, the payer may have withheld 15% under Regulation 105 and will issue a T4A-NR instead. That withholding is a payment on account, not necessarily your final tax, and treaty relief may be available.</p>

<h2>What to do if you did not receive a T4A</h2>
<p>Nothing is lost. Report the income from your invoices and bank deposits. If you expected a slip because a client paid you more than $500, you can ask them for it, but you do not need it to file. Keep your invoice copies for at least six years from the end of the tax year they relate to, which is the general CRA record retention period; see our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>. For billing format, our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> shows the fields clients expect, and our <a href="/blog/how-to-pay-contractors">guide to paying contractors</a> covers the payer side.</p>

<p>The fastest way to make T4A season painless is to invoice consistently: a unique number, the fee and GST/HST shown separately, and your BN on every invoice. Build those invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download each one as a PDF.</p>
`,
  },
  {
    slug: "cra-business-number",
    title: "CRA Business Number: How to Get One (2026 Guide)",
    description:
      "How to get a CRA business number in 2026: who needs a BN, program accounts like RT and RP, registering online and showing it correctly on invoices.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Canada",
    related: ["how-to-register-for-gst-hst-canada", "canada-gst-hst-invoice-requirements", "tax-id-on-invoice"],
    faqs: [
      {
        q: "Is a CRA business number free?",
        a: "Yes. The CRA does not charge to register for a business number or to add program accounts such as GST/HST or payroll. You may pay fees elsewhere, for example to register a business name with your province or to incorporate, and third-party services sometimes charge to file the BN application for you, but the BN itself costs nothing when you register directly with the CRA.",
      },
      {
        q: "Does a sole proprietor need a business number in Canada?",
        a: "Not automatically. A sole proprietor reports business income on their personal return using their SIN, and needs a BN only when they register for a CRA program account, such as GST/HST once they pass the $30,000 small supplier threshold, payroll when they hire, or import-export. Many freelancers register voluntarily so they can show a BN on invoices and avoid sharing their SIN with clients.",
      },
      {
        q: "What is the difference between a BN and a GST/HST number?",
        a: "The BN is the 9-digit number that identifies your business. Your GST/HST number is that same 9 digits followed by the program identifier RT and a 4-digit reference number, for example 123456789 RT0001. On invoices where you charge GST/HST, you must show your GST/HST registration number, which is the full 15-character account number rather than the 9-digit BN alone.",
      },
      {
        q: "How long does it take to get a business number?",
        a: "When you register through Business Registration Online and the application has no issues, you can usually receive your BN immediately at the end of the session. Applications by mail or ones that need manual review take longer. If you are a non-resident or have no SIN, the CRA has a separate registration route that may involve more processing time.",
      },
      {
        q: "Can I have more than one business number?",
        a: "Each business has one BN. A sole proprietor with several unincorporated businesses generally uses one BN and can have several program accounts of the same type, distinguished by the 4-digit reference number. Each corporation is a separate legal person and gets its own BN. If you already have a BN, use it to add new program accounts rather than registering again.",
      },
    ],
    content: `
<p>A CRA business number (BN) is a free 9-digit number that identifies your business to the Canada Revenue Agency and other government programs. You get one by registering through Business Registration Online, by phone or by mail, usually at the moment you sign up for your first CRA program account, such as GST/HST (RT) or payroll (RP). Corporations get one automatically when they incorporate; sole proprietors get one when they first need it or choose to.</p>

<p>This guide explains when a freelancer or small business needs a BN, how program accounts work, the registration steps, and how to show the right number on invoices. It is general information, not tax or legal advice; check the CRA's pages or an accountant for your circumstances.</p>

<h2>What is a CRA business number?</h2>
<p>The CRA describes the BN as a unique 9-digit number that identifies your business and is used to deal with federal, provincial, territorial and municipal programs. A business can have only one BN. The BN on its own is not a tax account. Tax accounts, called program accounts, are added to it and use a 15-character format:</p>
<table><thead><tr><th>Part</th><th>Example</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Business number</td><td>123456789</td><td>Identifies the business</td></tr>
<tr><td>Program identifier</td><td>RT</td><td>Type of account</td></tr>
<tr><td>Reference number</td><td>0001</td><td>Distinguishes accounts of the same type</td></tr>
<tr><td>Full account</td><td>123456789 RT0001</td><td>Your GST/HST account number</td></tr>
</tbody></table>
<p>The main program accounts small businesses use:</p>
<ul>
<li><strong>RT</strong> - GST/HST.</li>
<li><strong>RP</strong> - payroll deductions, when you have employees.</li>
<li><strong>RC</strong> - corporation income tax, for incorporated businesses.</li>
<li><strong>RM</strong> - import-export, if you import or export commercial goods.</li>
<li><strong>RZ</strong> - information returns, such as T4A slips for contractors you pay.</li>
</ul>
<p>The CRA's page on the <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-registration/business-number-program-account.html" target="_blank" rel="noopener noreferrer">business number and CRA program accounts</a> lists every type.</p>

<h2>Do you need a CRA business number?</h2>
<table><thead><tr><th>Situation</th><th>BN needed?</th></tr></thead><tbody>
<tr><td>Sole proprietor, under $30,000 taxable supplies, no employees</td><td>No, but optional</td></tr>
<tr><td>Sole proprietor passing $30,000 in taxable supplies (small supplier limit)</td><td>Yes, for the required GST/HST account</td></tr>
<tr><td>Rideshare or taxi driver</td><td>Yes; GST/HST registration is required from the first dollar</td></tr>
<tr><td>Hiring your first employee</td><td>Yes, for a payroll (RP) account</td></tr>
<tr><td>Incorporating</td><td>Yes; corporations receive a BN on incorporation</td></tr>
<tr><td>Importing commercial goods</td><td>Yes, for an import-export (RM) account</td></tr>
<tr><td>Paying contractors over $500 and filing T4As</td><td>Yes, with an information returns or payroll account</td></tr>
</tbody></table>
<p>The $30,000 small supplier test looks at taxable supplies, together with associated businesses, in a single calendar quarter or over four consecutive calendar quarters. Our guide on <a href="/blog/how-to-register-for-gst-hst-canada">how to register for GST/HST in Canada</a> explains the test, voluntary registration and filing periods in detail.</p>

<h2>How to get a CRA business number: step by step</h2>
<ol>
<li><strong>Decide which program accounts you need now.</strong> Most freelancers start with GST/HST; employers add payroll.</li>
<li><strong>Gather your details:</strong> your SIN, legal name, business name if different, business address, a description of your main activity, expected start date, fiscal year-end and estimated annual sales.</li>
<li><strong>Sign in to your CRA account.</strong> You need a CRA account to use Business Registration Online (BRO).</li>
<li><strong>Complete BRO.</strong> Register the BN and the program accounts you need in the same session. Owners with a temporary SIN starting with 9 must use BRO.</li>
<li><strong>Save your confirmation.</strong> If there are no issues, your BN and program account numbers are usually shown at the end of the session.</li>
<li><strong>Set up My Business Account</strong> so you can file GST/HST returns, view balances and authorize your accountant.</li>
<li><strong>Update your invoices and records</strong> with the new numbers.</li>
</ol>
<p>Alternatives to BRO: you can call the CRA business enquiries line, or mail Form RC1, Request for a Business Number and Certain Program Accounts, which covers GST/HST, payroll, corporation income tax, registered charity and information return accounts on one form. Corporations in some provinces receive their BN through provincial registration, and businesses formed outside Canada or owners without a SIN follow the CRA's non-resident registration route.</p>

<h2>Worked example: a freelancer crossing the small supplier limit</h2>
<p>Omar, a video editor in Halifax, invoices clients as a sole proprietor. These figures are illustrative.</p>
<table><thead><tr><th>Calendar quarter</th><th>Taxable sales</th><th>Running total, last four quarters</th></tr></thead><tbody>
<tr><td>Q3 2025</td><td>$5,800</td><td>$5,800</td></tr>
<tr><td>Q4 2025</td><td>$7,400</td><td>$13,200</td></tr>
<tr><td>Q1 2026</td><td>$8,900</td><td>$22,100</td></tr>
<tr><td>Q2 2026</td><td>$9,600</td><td>$31,700</td></tr>
</tbody></table>
<p>Omar's four-quarter total passed $30,000 in Q2 2026, so he stopped being a small supplier at the end of the month after that quarter, and had to register within 29 days of the day he first made a supply as a non-small supplier. He registered through BRO in early July, received BN 123456789 and account 123456789 RT0001 the same day, and from that point added 14% HST (the Nova Scotia rate at that time; check the current rate) to invoices for Canadian clients. He could have registered voluntarily a year earlier to claim input tax credits on his new editing workstation.</p>

<h2>Using your business number on invoices</h2>
<p>If you are registered for GST/HST, invoices that charge it must show your GST/HST registration number, the full number with RT, for most supplies; larger sales require more detail. If you are not registered, do not show a GST/HST number or charge the tax. Many unregistered freelancers still show their BN or just their business name, which is fine. Our guide to <a href="/blog/canada-gst-hst-invoice-requirements">Canada GST/HST invoice requirements</a> lists the fields by invoice value, and <a href="/blog/tax-id-on-invoice">tax ID on invoices</a> compares tax numbers across countries.</p>
<p>Clients who pay you more than $500 in a year may ask for your BN or SIN to file a <a href="/blog/t4a-slip">T4A slip</a>. Giving your BN, in box 013, avoids sharing your SIN.</p>

<h2>Business number vs provincial registration and business names</h2>
<p>A BN is federal and tax-focused. It does not register your business name. If you trade under a name other than your own legal name, most provinces require you to register that name separately, often through the provincial business registry, which may also add the BN to your provincial records. Check the name is free first; our <a href="/blog/business-name-search">business name search guide</a> covers how.</p>

<h2>After you get your BN: a first-month checklist</h2>
<ol>
<li><strong>Record your filing period.</strong> New GST/HST registrants are usually assigned annual filing if their sales are small, but can choose more frequent filing. Diary the due date.</li>
<li><strong>Add the numbers to your invoice template</strong> so every new invoice shows the business name, BN or GST/HST number and tax line correctly.</li>
<li><strong>Tell existing clients</strong> the date from which you will charge GST/HST, and send them your registration number so they can claim input tax credits.</li>
<li><strong>Set up a separate account for sales tax collected,</strong> so the GST/HST you charge is not spent before you remit it.</li>
<li><strong>Authorize your accountant</strong> in My Business Account if someone else will file.</li>
<li><strong>Start tracking input tax credits</strong> on business purchases with proper supplier invoices.</li>
</ol>
<p>The income tax side does not change with a BN: a sole proprietor still reports business income on Form T2125 with their personal return, as explained in our guide to <a href="/blog/canada-self-employed-tax">self-employed tax in Canada</a>. If you start paying contractors yourself, our guide on <a href="/blog/how-to-pay-contractors">how to pay contractors</a> covers the paperwork you will collect.</p>

<h2>Business number for corporations and non-residents</h2>
<p>When you incorporate federally or in most provinces, the BN is issued as part of incorporation and the corporation income tax (RC) account is opened automatically. You still need to add GST/HST and payroll accounts separately when they apply. Each corporation has its own BN, separate from its owner's.</p>
<p>Businesses outside Canada that sell into Canada, for example digital services to Canadian consumers or goods through Canadian marketplaces, may also need a BN and GST/HST registration. Non-residents and people without a SIN follow the CRA's non-resident registration route rather than the standard BRO flow, and processing can take longer, so start early.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Registering a second BN</strong> for the same sole proprietorship. Add program accounts to the existing BN instead.</li>
<li><strong>Showing the 9-digit BN only</strong> on invoices that charge GST/HST, instead of the full RT number.</li>
<li><strong>Charging GST/HST before registration,</strong> or failing to charge it after you were required to register.</li>
<li><strong>Forgetting to close accounts.</strong> When you stop a business or stop having employees, close the relevant program account so you do not keep receiving filing demands.</li>
<li><strong>Not updating your address.</strong> CRA notices go to the address on file; keep it current in My Business Account.</li>
</ul>

<h2>What to do if you lost your business number</h2>
<p>Check old CRA letters, your GST/HST returns or My Business Account. Corporations can also find the BN on provincial or federal corporate registry records. The CRA's public registries let you confirm a GST/HST number for any business, which is useful when checking a supplier's invoice. For your own records, keep the confirmation from registration with your business documents, and include the number in your invoice template so you never need to look it up again.</p>

<p>A final tip: when a client or supplier gives you their GST/HST number, check it with the CRA's online GST/HST registry before claiming input tax credits on their invoices. A wrong or made-up number on a supplier's invoice can mean your credit is denied on review.</p>

<p>Once you have your BN and GST/HST number, add them to every invoice. You can create invoices with your business number, tax lines and payment details in our <a href="/invoice-generator">free invoice generator</a>, with no sign-up and instant PDF download.</p>
`,
  },
  {
    slug: "payg-instalments",
    title: "PAYG Instalments Explained for Sole Traders (Australia)",
    description:
      "PAYG instalments for Australian sole traders: entry thresholds, amount vs rate options, quarterly due dates, the 2026-27 GDP adjustment and an example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Australia",
    related: ["australia-gst-registration", "how-to-get-an-abn", "how-much-to-set-aside-for-taxes"],
    faqs: [
      {
        q: "When do I have to start paying PAYG instalments?",
        a: "The ATO automatically enters individuals and sole traders when their latest tax return shows instalment income of $4,000 or more, tax payable of $1,000 or more and estimated notional tax of $500 or more, with some exceptions. You will receive an instalment notice or see instalments on your activity statement. You can also enter voluntarily, which many new sole traders do to avoid a large first tax bill.",
      },
      {
        q: "Are PAYG instalments extra tax?",
        a: "No. They are prepayments of your income tax for the current year. When you lodge your tax return, the ATO credits all instalments paid against your final tax assessment. If you paid more than your actual tax, the excess is refunded or offset against other debts; if you paid less, you pay the balance. Think of them as spreading your tax bill across the year.",
      },
      {
        q: "Should I choose the instalment amount or the instalment rate?",
        a: "The instalment amount option is simplest: the ATO calculates a fixed quarterly figure from your last return, uplifted by the GDP adjustment, and you pay it. The instalment rate option means you multiply your actual instalment income for the quarter by an ATO rate, so payments track your income. If your income is uneven or falling, the rate option usually fits better.",
      },
      {
        q: "What happens if I vary my PAYG instalments too low?",
        a: "The ATO may charge general interest charge (GIC) if your varied instalments are less than 85% of the benchmark based on your actual tax for the year. Vary only when you have a reasonable estimate, such as a lost major client, and keep a record of how you worked it out. You can vary again later in the year if circumstances change.",
      },
      {
        q: "Do PAYG instalments include GST?",
        a: "No. Instalment income is your gross business and investment income for the period, excluding GST. If you are registered for GST, your activity statement reports GST and PAYG instalments in separate sections, so be careful to use the GST-exclusive amount from your invoices when applying an instalment rate. Invoices that show the GST line separately make this a quick calculation each quarter.",
      },
      {
        q: "Can I pay PAYG instalments annually?",
        a: "Some small taxpayers can pay a single annual instalment, generally due 21 October after the end of the income year, if they meet the ATO's eligibility conditions, which relate to the size of their notional tax and their GST reporting. The ATO tells eligible taxpayers which options are available. Most sole traders who are automatically entered pay quarterly.",
      },
    ],
    content: `
<p>PAYG instalments are regular prepayments of income tax that the ATO asks sole traders and investors to make during the year, so that tax on business and investment income is not all due in one lump after the tax return. You are entered automatically once your last return shows enough business or investment income and tax, and most sole traders then pay quarterly, either a fixed amount set by the ATO or a rate applied to what they actually earned. Every dollar paid is credited when you lodge your return.</p>

<p>This guide explains who pays, how the two options work, the quarterly due dates, how the 2026-27 GDP adjustment affects your amount, when to vary, and a worked example with numbers. It is general information, not tax advice; a registered tax agent can look at your situation.</p>

<h2>What are PAYG instalments?</h2>
<p>Employees have tax withheld from each pay. Sole traders, contractors and people with significant investment income do not, so without instalments they would face their entire year's tax after lodging. Pay as you go (PAYG) instalments fix that by collecting tax through the year, based on either your last assessed tax or your current income.</p>
<p>Instalments are calculated on <strong>instalment income</strong>: gross business and investment income such as sales, fees, interest, dividends and rent, excluding GST. Salary and wages with PAYG withholding are not included, and neither are most capital gains.</p>

<h2>Who has to pay PAYG instalments?</h2>
<p>Individuals, including sole traders, are generally entered automatically when their most recent tax return shows all of the following:</p>
<ul>
<li>instalment income of $4,000 or more,</li>
<li>tax payable of $1,000 or more, and</li>
<li>estimated notional tax of $500 or more.</li>
</ul>
<p>There are exceptions, for example for some people of pension age or with tax losses. You can also enter voluntarily through myGov, your online services for business or a tax agent, which is often sensible in your first profitable year when the ATO has no history to trigger entry. If you are just starting, our guide on <a href="/blog/how-to-get-an-abn">how to get an ABN</a> covers the registration step that usually comes first.</p>

<h2>Instalment amount vs instalment rate</h2>
<table><thead><tr><th>Feature</th><th>Instalment amount option</th><th>Instalment rate option</th></tr></thead><tbody>
<tr><td>How it is worked out</td><td>ATO sets a fixed amount from your last return, uplifted by the GDP adjustment</td><td>You multiply your instalment income for the period by the ATO's rate</td></tr>
<tr><td>Effort</td><td>Low; pay the figure on the notice</td><td>Higher; calculate GST-exclusive income each quarter</td></tr>
<tr><td>Tracks current income?</td><td>No</td><td>Yes</td></tr>
<tr><td>Best for</td><td>Steady income similar to last year</td><td>Growing, seasonal or falling income</td></tr>
<tr><td>Who can use it</td><td>Eligible small taxpayers, usually not registered for GST or small GST payers</td><td>Anyone in the system</td></tr>
<tr><td>GDP adjustment</td><td>Applies</td><td>Does not apply</td></tr>
</tbody></table>
<p>For the 2026-27 income year, the ATO's GDP adjustment factor is 5%, applying to quarters starting on or after 1 April 2026 for instalments using the amount option. It does not affect you if you use the rate option or pay annually. The ATO publishes it on its <a href="https://softwaredevelopers.ato.gov.au/GDPupliftfactor" target="_blank" rel="noopener noreferrer">GDP adjustment page</a>.</p>

<h2>PAYG instalment due dates</h2>
<table><thead><tr><th>Quarter</th><th>Period</th><th>Due date</th></tr></thead><tbody>
<tr><td>Q1</td><td>1 July to 30 September</td><td>28 October</td></tr>
<tr><td>Q2</td><td>1 October to 31 December</td><td>28 February</td></tr>
<tr><td>Q3</td><td>1 January to 31 March</td><td>28 April</td></tr>
<tr><td>Q4</td><td>1 April to 30 June</td><td>28 July</td></tr>
</tbody></table>
<p>If you lodge through a registered tax or BAS agent, later due dates may apply under their lodgment program. Businesses that report GST monthly may report instalments on their monthly activity statement, due on the 21st of the following month. Eligible annual payers generally pay by 21 October. If a due date falls on a weekend or public holiday, you can lodge and pay on the next business day.</p>

<h2>How to pay PAYG instalments: step by step</h2>
<ol>
<li><strong>Watch for your notice.</strong> The ATO sends an instalment notice or includes the PAYG instalment section on your activity statement.</li>
<li><strong>Choose your option</strong> if offered both: amount (pay the figure shown) or rate (calculate).</li>
<li><strong>If using the rate,</strong> total your GST-exclusive business and investment income for the quarter from your invoices and statements, then multiply by the rate on your notice.</li>
<li><strong>Lodge</strong> the notice or activity statement through online services, your agent or software. If you use the amount option and are not varying, you may only need to pay.</li>
<li><strong>Pay</strong> by BPAY, card or other ATO payment methods using your payment reference number.</li>
<li><strong>Record the payment</strong> so you can match it to the credit on your tax return.</li>
</ol>

<h2>Worked example: a sole trader using the rate option</h2>
<p>Jess, a freelance copywriter in Brisbane, is registered for GST. Her notice shows an instalment rate of 18% for 2026-27. These figures are illustrative.</p>
<table><thead><tr><th>Quarter</th><th>Invoices issued (incl. GST)</th><th>GST-exclusive income</th><th>Instalment at 18%</th><th>Due</th></tr></thead><tbody>
<tr><td>Jul-Sep 2026</td><td>$24,200</td><td>$22,000</td><td>$3,960</td><td>28 Oct 2026</td></tr>
<tr><td>Oct-Dec 2026</td><td>$16,500</td><td>$15,000</td><td>$2,700</td><td>28 Feb 2027</td></tr>
<tr><td>Jan-Mar 2027</td><td>$13,200</td><td>$12,000</td><td>$2,160</td><td>28 Apr 2027</td></tr>
<tr><td>Apr-Jun 2027</td><td>$22,000</td><td>$20,000</td><td>$3,600</td><td>28 Jul 2027</td></tr>
<tr><td><strong>Total</strong></td><td>$75,900</td><td>$69,000</td><td><strong>$12,420</strong></td><td></td></tr>
</tbody></table>
<p>Jess applies the rate to the GST-exclusive figure, not the invoice totals. When she lodges her 2026-27 return, her actual tax, after deductions and Medicare levy, comes to $11,900, so the ATO credits all $12,420 and refunds $520 (or applies it to other debts). Had she been on the amount option with a figure based on a much better prior year, she might have varied it in the quiet December quarter. Because Jess's income depends on when she invoices, she also keeps a simple tax savings account; our guide on <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> explains the habit.</p>

<h2>Varying your instalments</h2>
<p>You can vary your instalment amount or rate if you expect the current instalments to be more or less than your tax for the year. The varied figure applies for the rest of the income year or until you vary again. Vary through your activity statement or instalment notice before the due date of the quarter you want it to apply to.</p>
<p>Be careful about varying too low. The ATO can charge general interest charge if your varied instalments fall below 85% of the benchmark worked out from your actual tax. Good reasons to vary include losing a major client, a long illness, or a big deductible purchase that will cut your taxable income. Record how you made your estimate.</p>

<h2>What to do in your first year as a sole trader</h2>
<p>The first profitable year is where most sole traders get caught out. The ATO has no history, so you are not in the instalment system, and your whole year's tax is due after you lodge. Then, because that return shows business income, the ATO enters you into PAYG instalments, and your first quarterly instalment for the following year can land within months of the big bill. It can feel like paying two years of tax at once.</p>
<p>Two ways to soften it:</p>
<ul>
<li><strong>Enter voluntarily</strong> during your first year so you start prepaying, using the rate option to keep payments in line with income.</li>
<li><strong>Set aside a fixed share of every invoice</strong> the day it is paid. Many sole traders use 25% to 30%, adjusted to their own tax bracket.</li>
</ul>
<p>If you have a large bill you cannot pay in full, the ATO offers payment plans, but interest generally applies. Talking to a tax agent early is much cheaper than paying general interest charge for months.</p>

<h2>PAYG instalments vs PAYG withholding</h2>
<p>The names are similar but the systems are different. PAYG <em>withholding</em> is tax a payer deducts from someone else's pay, such as employees' wages, or from contractors who do not quote an ABN. PAYG <em>instalments</em> are prepayments of your own income tax. A sole trader with employees may deal with both on the same activity statement. If your clients ask for your ABN on your invoices, that is to avoid having to withhold tax from your payments at the top rate.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Including GST in instalment income.</strong> Use the GST-exclusive amount.</li>
<li><strong>Ignoring the notice</strong> because you plan to pay at tax time. Unpaid instalments attract GIC and can lead to penalties for late lodgment.</li>
<li><strong>Double counting.</strong> Instalments are credits, not deductions; do not claim them as a business expense.</li>
<li><strong>Forgetting super and GST.</strong> Instalments cover income tax only. If you employ staff, super guarantee obligations are separate; see <a href="/blog/payday-super-2026">Payday Super 2026</a>.</li>
<li><strong>Not budgeting for the first year.</strong> New sole traders can face a full year of tax plus their first instalment in the same few months.</li>
</ul>

<h2>Where PAYG instalments sit with GST and BAS</h2>
<p>If you are registered for GST, your business activity statement combines GST and PAYG instalments, and possibly PAYG withholding for employees. Each has its own section. The <a href="/blog/australia-gst-registration">Australia GST registration guide</a> covers the $75,000 threshold and BAS basics, and the <a href="/blog/australia-tax-invoice-requirements">Australian tax invoice requirements</a> show what your invoices need. If you pay contractors in certain industries, you may also have a <a href="/blog/taxable-payments-annual-report">Taxable Payments Annual Report</a> to lodge.</p>

<p>Accurate instalments start with accurate income records. Issue every invoice with your ABN, a clear GST line and a unique number using our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed and a PDF download in seconds.</p>
`,
  },
  {
    slug: "taxable-payments-annual-report",
    title: "Taxable Payments Annual Report (TPAR) Guide for 2026",
    description:
      "TPAR guide for Australian businesses: which industries must lodge, what to report about contractors, the 28 August deadline, penalties and contractor impact.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Australia",
    related: ["how-to-get-an-abn", "construction-subcontractor-invoice-template", "australia-tax-invoice-requirements"],
    faqs: [
      {
        q: "When is the TPAR due?",
        a: "The Taxable Payments Annual Report is due by 28 August each year, covering payments made from 1 July to 30 June. The report for 2025-26 was due 28 August 2026, and the report for 2026-27 is due 28 August 2027. The ATO no longer accepts paper lodgments, so lodge through online services for business, business software or your tax agent.",
      },
      {
        q: "Which industries have to lodge a TPAR?",
        a: "Businesses paying contractors for building and construction services, cleaning services, courier and road freight services, information technology services, and security, investigation or surveillance services. Government entities also report certain payments. For the cleaning, courier, road freight, IT and security industries, a business that also does other work generally must lodge if those services make up 10% or more of its GST turnover.",
      },
      {
        q: "Do I report payments to contractors who invoice for materials only?",
        a: "Generally no. Payments solely for materials are not reportable. If an invoice covers both labour and materials, you report the whole amount paid. Payments where you withheld tax because the contractor did not quote an ABN are also handled separately through PAYG withholding rather than the TPAR. Keep the invoice so you can show why a payment was excluded.",
      },
      {
        q: "What is the penalty for not lodging a TPAR?",
        a: "The ATO can impose a failure-to-lodge penalty of one penalty unit for each 28 days, or part of 28 days, that the report is late, up to five units for a small business, with higher multiples for larger entities. Penalty unit values are indexed, so check the current figure on the ATO website. The ATO usually sends reminders and may also use the data in compliance reviews.",
      },
      {
        q: "What if I did not pay any contractors this year?",
        a: "If you were required to lodge a TPAR in a previous year but did not make any reportable payments this year, lodge a non-lodgment advice so the ATO knows no report is coming. This stops reminder letters and potential penalties. If you no longer pay contractors at all, the non-lodgment advice can also tell the ATO that you will not need to lodge in future years.",
      },
    ],
    content: `
<p>The Taxable Payments Annual Report (TPAR) is a yearly report Australian businesses in certain industries lodge with the ATO, listing each contractor they paid for specific services, the contractor's ABN, name and address, and the total paid including GST. It covers 1 July to 30 June and is due by 28 August. The ATO uses the data to check that contractors declare all their income, which is why both payers and contractors should care about it.</p>

<p>This guide explains which businesses must lodge, what to include and exclude, how to prepare it from your records, penalties, and what TPAR means for you if you are the contractor being reported. It is general information, not tax advice; your tax or BAS agent can confirm how it applies to you.</p>

<h2>Who must lodge a TPAR?</h2>
<p>The taxable payments reporting system covers businesses that pay contractors for these services:</p>
<table><thead><tr><th>Industry</th><th>Who lodges</th><th>Examples of reportable payments</th></tr></thead><tbody>
<tr><td>Building and construction</td><td>Businesses primarily in building and construction that pay contractors for building and construction services</td><td>Subcontracted carpentry, plumbing, electrical, painting, tiling</td></tr>
<tr><td>Cleaning services</td><td>Businesses providing cleaning services, including where those services are 10% or more of GST turnover</td><td>Subcontracted office or end-of-lease cleaning</td></tr>
<tr><td>Courier and road freight</td><td>Same 10% rule</td><td>Owner-driver delivery runs</td></tr>
<tr><td>Information technology</td><td>Same 10% rule</td><td>Contract developers, network support, software installation</td></tr>
<tr><td>Security, investigation or surveillance</td><td>Same 10% rule</td><td>Contract guards, crowd control, alarm monitoring</td></tr>
<tr><td>Government entities</td><td>Federal, state and local government bodies</td><td>Payments for supplies of services</td></tr>
</tbody></table>
<p>The 10% rule matters for mixed businesses. A marketing agency that also runs IT support, for example, may need to lodge if IT services make up 10% or more of its GST turnover and it pays contractors to deliver them. The ATO's <a href="https://www.ato.gov.au/businesses-and-organisations/small-business-newsroom/final-reminder-tpar-due-28-august" target="_blank" rel="noopener noreferrer">TPAR reminder for small businesses</a> sets out the industries and deadline.</p>

<h2>What to include on the TPAR</h2>
<p>For each contractor, report:</p>
<ul>
<li>ABN (if known),</li>
<li>name and address,</li>
<li>gross amount paid for the year, including GST,</li>
<li>total GST included in those payments, and</li>
<li>any tax withheld where no ABN was quoted.</li>
</ul>
<p>The report is based on payments made between 1 July and 30 June, not on invoices received. An invoice dated 20 June and paid 5 July falls into the next year's report.</p>
<h3>What not to include</h3>
<ul>
<li>Payments for materials only. If an invoice combines labour and materials, report the whole amount.</li>
<li>Wages paid to employees, which are reported through Single Touch Payroll.</li>
<li>Payments for services outside the reportable categories.</li>
<li>Incidental payments that are not for the reportable service, such as buying equipment.</li>
</ul>
<p>If a contractor does not quote an ABN, you generally must withhold tax at the top rate (47%) from their payments under the "no ABN" withholding rules, which have their own reporting.</p>

<h2>How to prepare and lodge your TPAR: step by step</h2>
<ol>
<li><strong>Collect contractor details at onboarding:</strong> ABN, legal name, address and GST status. Check the ABN on the ABN Lookup.</li>
<li><strong>Code contractor payments</strong> in your accounting software to a "TPAR contractor" category or tag through the year.</li>
<li><strong>After 30 June, run the contractor report</strong> for 1 July to 30 June on a cash (payments) basis.</li>
<li><strong>Review each line:</strong> remove materials-only payments and non-reportable services, and check totals against invoices.</li>
<li><strong>Lodge electronically</strong> through online services for business, your business software, or your tax or BAS agent. Paper lodgments are no longer accepted.</li>
<li><strong>Lodge by 28 August.</strong> If the date falls on a weekend, lodging on the next business day is generally accepted.</li>
<li><strong>Keep the records</strong> behind the report, including contractor invoices.</li>
</ol>

<h2>Worked example: a small building business</h2>
<p>Coastline Renovations Pty Ltd in Newcastle paid three subcontractors in 2025-26. These figures are illustrative.</p>
<table><thead><tr><th>Contractor</th><th>Invoices paid</th><th>Included</th><th>Gross reported (incl. GST)</th><th>GST</th></tr></thead><tbody>
<tr><td>Sam Nguyen Electrical</td><td>9 invoices, labour and parts</td><td>All</td><td>$48,180</td><td>$4,380</td></tr>
<tr><td>BlueLine Plumbing Pty Ltd</td><td>6 invoices</td><td>All</td><td>$31,350</td><td>$2,850</td></tr>
<tr><td>Hardwood Supplies</td><td>4 invoices, timber only</td><td>None (materials only)</td><td>$0</td><td>$0</td></tr>
<tr><td>Mia Ford Painting (not GST-registered)</td><td>3 invoices</td><td>All</td><td>$12,600</td><td>$0</td></tr>
</tbody></table>
<p>Coastline reports three contractors with gross payments of $92,130 and GST of $7,230. Hardwood Supplies is left off because every invoice was for materials. An invoice from BlueLine dated 25 June 2026 but paid on 3 July 2026 belongs in the 2026-27 report, due 28 August 2027.</p>

<h2>If you are the contractor: why TPAR matters to you</h2>
<p>If you are a subcontractor, cleaner, courier, IT contractor or security contractor, your clients may be reporting what they paid you. The ATO matches that data against the income in your tax return and BAS. Differences usually come from:</p>
<ul>
<li><strong>Timing:</strong> you report income on an accruals basis or by invoice date while the client reports by payment date.</li>
<li><strong>GST:</strong> the TPAR shows amounts including GST, while your income tax return uses GST-exclusive income.</li>
<li><strong>Materials:</strong> mixed labour-and-materials invoices are reported in full.</li>
<li><strong>Missing income:</strong> cash jobs left out of the return, which the ATO is specifically looking for.</li>
</ul>
<p>The best defence is clean invoicing: your ABN, a clear GST line, separate lines for labour and materials, and a unique invoice number. Our <a href="/blog/construction-subcontractor-invoice-template">construction subcontractor invoice template</a> and <a href="/blog/cleaning-service-invoice-template">cleaning service invoice template</a> show the layout. The <a href="/blog/australia-tax-invoice-requirements">Australian tax invoice requirements</a> list the mandatory fields for GST-registered suppliers.</p>

<h2>Industry-specific points to watch</h2>
<h3>Building and construction</h3>
<p>Building and construction services cover a broad range of work on buildings and structures, including alterations, repairs, installation, demolition, design and project management, landscaping and site preparation. Payments for private and domestic projects, such as building your own home, are not reportable. If you are a head contractor, check every subcontractor category, not just the obvious trades.</p>
<h3>Cleaning</h3>
<p>Cleaning covers interior and exterior cleaning of buildings, vehicles, windows, carpets and similar. A facilities business that subcontracts cleaning to sole traders must track those payments separately from its own staff costs.</p>
<h3>Courier and road freight</h3>
<p>Owner-drivers, last-mile delivery contractors and freight subcontractors are the typical reportable payees. Fuel or toll reimbursements included on their invoices are part of the gross amount paid.</p>
<h3>Information technology</h3>
<p>IT services include software development and installation, hardware installation and repair, network services, data storage and processing, and IT support and consulting. Software licences purchased off the shelf are goods, not reportable contractor services.</p>
<h3>Security, investigation or surveillance</h3>
<p>This includes contract guards, crowd controllers, alarm monitoring, private investigators and surveillance services. Agencies that provide security staff on contract are a common source of missed reports.</p>

<h2>Setting up your records so TPAR takes an hour</h2>
<table><thead><tr><th>Record</th><th>When to capture it</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Contractor ABN, name, address</td><td>Before the first payment</td><td>Required fields on the report</td></tr>
<tr><td>Contractor GST registration status</td><td>Before the first payment, then yearly</td><td>Determines the GST column</td></tr>
<tr><td>Payment date for each invoice</td><td>When you pay</td><td>Report is on a payments basis</td></tr>
<tr><td>Labour vs materials split</td><td>When you approve the invoice</td><td>Materials-only invoices are excluded</td></tr>
<tr><td>Service category</td><td>When you code the bill</td><td>Only reportable services are included</td></tr>
</tbody></table>

<h2>Penalties and late lodgment</h2>
<p>The ATO can apply a failure-to-lodge penalty of one penalty unit per 28 days or part of 28 days late, up to a maximum of five units for small businesses, with higher multiples for medium and large entities. Penalty unit values are indexed each year. In practice, the ATO sends reminders first, and lodging promptly once you realise is always better than waiting. If you were required to lodge before but have nothing to report this year, lodge a non-lodgment advice instead of ignoring the reminder.</p>

<h2>What to do if you find an error after lodging</h2>
<p>Mistakes happen, especially in the first year of reporting. If you discover that a contractor was left off, an amount was wrong, or a payment that should not have been reported was included, lodge an amended TPAR through the same channel you used for the original rather than waiting for the next year. Correct the specific contractor lines, keep a note of what changed and why, and tell the contractor if the change affects the figure the ATO holds for them. Contractors who believe a client has reported them incorrectly should ask the client to amend; meanwhile, report your own correct income and keep the invoices and bank records that support it. Data-matching letters from the ATO usually ask you to explain a difference, and an invoice-by-invoice reconciliation is the quickest answer.</p>

<h2>Common TPAR mistakes</h2>
<ul>
<li><strong>Reporting invoices instead of payments</strong> for the year.</li>
<li><strong>Excluding GST</strong> from the gross figure, which should include it.</li>
<li><strong>Missing contractor ABNs or addresses,</strong> which makes data matching fail and can draw ATO queries.</li>
<li><strong>Leaving off payments to companies.</strong> Payments to incorporated contractors are reportable too.</li>
<li><strong>Not checking the 10% rule</strong> when a side service line grows.</li>
<li><strong>Treating employees as contractors.</strong> If a worker is really an employee, they belong in payroll, with super; see <a href="/blog/payday-super-2026">Payday Super 2026</a>.</li>
</ul>
<p>Contractors who are being reported should also make sure their own tax payments keep pace; see our guide to <a href="/blog/payg-instalments">PAYG instalments</a>. If you are setting up as a contractor, start with <a href="/blog/how-to-get-an-abn">how to get an ABN</a>.</p>

<p>Clear invoices make TPAR simple for both sides. Create invoices showing your ABN, GST and separate labour and materials lines with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up and instant PDF download.</p>
`,
  },
  {
    slug: "class-2-national-insurance",
    title: "Class 2 National Insurance in 2026: What Changed",
    description:
      "Class 2 National Insurance in 2026/27: no longer compulsory, the £3.65 voluntary rate, the £7,105 threshold, the April 2026 abroad change and who should pay.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["class-4-national-insurance", "how-to-register-as-self-employed-uk", "self-assessment-tax-return-uk"],
    faqs: [
      {
        q: "Do I still have to pay Class 2 National Insurance?",
        a: "No self-employed person has to pay Class 2 since 6 April 2024. If your profits are at or above the small profits threshold, £7,105 for 2026/27, you are treated as having paid Class 2 and get a qualifying year for your State Pension at no cost. If your profits are below that threshold, you can choose to pay voluntary Class 2 at £3.65 a week to protect your record.",
      },
      {
        q: "How much is voluntary Class 2 for 2026/27?",
        a: "The rate is £3.65 a week, which is £189.80 for a full 52-week tax year. That buys a qualifying year on your National Insurance record, counting toward the new State Pension and some contributory benefits. It is far cheaper than voluntary Class 3, which the government says costs £767 a year more than Class 2 at 2026/27 rates, so eligible low-profit sole traders often find it good value.",
      },
      {
        q: "Can I pay Class 2 while living abroad?",
        a: "From 6 April 2026, you can no longer pay voluntary Class 2 for periods abroad, except in limited cases such as people treated as self-employed in the UK under a social security agreement and volunteer development workers. New applications to pay Class 3 from abroad must meet a 10-year UK residence or contribution test. Existing voluntary Class 2 payers abroad had transitional options; check GOV.UK for the deadlines.",
      },
      {
        q: "How do I pay voluntary Class 2?",
        a: "Most self-employed people pay it through Self Assessment. When you complete your tax return, you can choose to pay voluntary Class 2 if your profits are below the small profits threshold, and the amount is added to your bill, due by 31 January after the end of the tax year. Some people who are not in Self Assessment can pay it directly, using HMRC's instructions on GOV.UK.",
      },
      {
        q: "Is Class 2 worth paying if I also have a job?",
        a: "Often not. If your employment earnings are at or above the lower earnings limit, the job usually already gives you a qualifying year, so voluntary Class 2 on a small side business adds nothing to your State Pension. Check your National Insurance record on GOV.UK first. Pay voluntarily only for years that would otherwise not count, and only where you are eligible.",
      },
    ],
    content: `
<p>Class 2 National Insurance is no longer a tax most sole traders pay. Since 6 April 2024, self-employed people with profits at or above the small profits threshold (£7,105 for 2026/27) are treated as having paid it, so they get State Pension credit for free, while those below the threshold can choose to pay voluntary Class 2 at £3.65 a week. From 6 April 2026, a further change removed voluntary Class 2 for most people living or working abroad.</p>

<p>If you are self-employed in the UK, the practical question is no longer "how much Class 2 do I owe?" but "should I pay voluntarily, and does anything need to change on my tax return?" This guide explains the current rules, the April 2026 change for people abroad, who should pay, a worked example, and how Class 2 fits with Class 4. It is general information, not tax or financial advice; for your situation, check your National Insurance record on GOV.UK or speak to an accountant.</p>

<h2>What is Class 2 National Insurance?</h2>
<p>National Insurance contributions build entitlement to the State Pension and some contributory benefits. Self-employed people historically paid two classes:</p>
<ul>
<li><strong>Class 2:</strong> a flat weekly amount, giving entitlement to the State Pension, Maternity Allowance, bereavement support and contribution-based Employment and Support Allowance.</li>
<li><strong>Class 4:</strong> a percentage of profits above a threshold, which raises revenue but does not itself add to your record. Our guide to <a href="/blog/class-4-national-insurance">Class 4 National Insurance</a> covers the 2026/27 rates of 6% and 2%.</li>
</ul>
<p>Class 2 was compulsory for anyone with profits above the small profits threshold until the end of the 2023/24 tax year. From 2024/25, the government abolished the obligation to pay, while keeping the benefit of a qualifying year.</p>

<h2>Class 2 rates and thresholds for 2026/27</h2>
<table><thead><tr><th>Item</th><th>2026/27 figure</th></tr></thead><tbody>
<tr><td>Voluntary Class 2 weekly rate</td><td>£3.65 a week</td></tr>
<tr><td>Full year of voluntary Class 2 (52 weeks)</td><td>£189.80</td></tr>
<tr><td>Small profits threshold</td><td>£7,105 a year</td></tr>
<tr><td>Class 4 lower profits limit</td><td>£12,570</td></tr>
<tr><td>Class 4 rate between £12,570 and £50,270</td><td>6%</td></tr>
<tr><td>Class 4 rate above £50,270</td><td>2%</td></tr>
</tbody></table>
<p>Figures are from GOV.UK's page on <a href="https://www.gov.uk/self-employed-national-insurance-rates" target="_blank" rel="noopener noreferrer">self-employed National Insurance rates</a>.</p>

<h2>What changed: compulsory to voluntary</h2>
<p>The effect of the 2024 change depends on your profits:</p>
<table><thead><tr><th>Annual profits (2026/27)</th><th>Class 2 position</th><th>Class 4 position</th><th>Qualifying year?</th></tr></thead><tbody>
<tr><td>Below £7,105</td><td>Nothing to pay; can pay voluntarily at £3.65 a week</td><td>None</td><td>Only if you pay voluntarily or get credits/employment elsewhere</td></tr>
<tr><td>£7,105 to £12,570</td><td>Treated as paid, free</td><td>None</td><td>Yes</td></tr>
<tr><td>Above £12,570</td><td>Treated as paid, free</td><td>6% / 2% on profits above £12,570</td><td>Yes</td></tr>
</tbody></table>
<p>For sole traders between £7,105 and £12,570, this was a pure saving: they used to pay Class 2 and now pay nothing while still building their record.</p>

<h2>The April 2026 change for people abroad</h2>
<p>Until April 2026, many people who had lived or worked in the UK could pay voluntary Class 2 for years spent abroad, at the same low weekly rate, to build their State Pension. From 6 April 2026, the government removed access to voluntary Class 2 for periods abroad, for employees and most self-employed people, according to the <a href="https://www.gov.uk/government/publications/voluntary-national-insurance-contributions-for-periods-abroad-from-6-april-2026/voluntary-national-insurance-contributions-abroad-from-6-april-2026" target="_blank" rel="noopener noreferrer">GOV.UK policy paper</a>. Key points:</p>
<ul>
<li>Exceptions remain for people treated as gainfully self-employed in the UK under a relevant social security agreement, and for volunteer development workers.</li>
<li>People abroad who want to fill gaps generally pay Class 3 instead. New Class 3 applications for periods abroad must show at least 10 continuous years of UK residence or at least 10 qualifying years on their record.</li>
<li>The government states Class 3 costs £767 a year more than voluntary Class 2 at 2026/27 rates, which works out at about £956.80 a year.</li>
<li>Existing voluntary Class 2 payers abroad can apply for Class 3 without meeting the 10-year test if they apply before 6 April 2027. Contributions for years before 2026/27 are not affected.</li>
</ul>
<p>If you are a UK freelancer planning to move abroad and keep billing UK clients, consider the National Insurance side before you go, as well as income tax residence.</p>

<h2>Should you pay voluntary Class 2? Step by step</h2>
<ol>
<li><strong>Check your National Insurance record</strong> on GOV.UK to see which years are qualifying and whether any are incomplete.</li>
<li><strong>Check your State Pension forecast.</strong> You generally need 35 qualifying years for the full new State Pension and at least 10 for any.</li>
<li><strong>Look at the year in question.</strong> Did you have employment earnings above the lower earnings limit, or credits (for example for Child Benefit for a child under 12, or caring)? If so, the year may already count.</li>
<li><strong>Confirm your profits</strong> were below £7,105. Above that, Class 2 is treated as paid automatically.</li>
<li><strong>If the year would not count otherwise,</strong> voluntary Class 2 at £189.80 is usually one of the best-value ways to add a year of State Pension.</li>
<li><strong>Choose to pay on your Self Assessment return,</strong> and the amount is added to your bill due 31 January.</li>
</ol>
<p>Voluntary Class 2 can also matter for Maternity Allowance. Self-employed people who want to maximise it can pay Class 2 for at least 13 of the 26 weeks they were self-employed in the relevant test period.</p>

<h2>Worked example: three sole traders in 2026/27</h2>
<p>These figures are illustrative.</p>
<table><thead><tr><th></th><th>Aisha (illustrator, part year)</th><th>Ben (tutor)</th><th>Chloe (web developer)</th></tr></thead><tbody>
<tr><td>Invoiced sales</td><td>£8,400</td><td>£15,800</td><td>£62,000</td></tr>
<tr><td>Allowable expenses</td><td>£2,100</td><td>£2,600</td><td>£7,000</td></tr>
<tr><td>Profit</td><td>£6,300</td><td>£13,200</td><td>£55,000</td></tr>
<tr><td>Class 2</td><td>£0 due; may pay £189.80 voluntarily</td><td>Treated as paid</td><td>Treated as paid</td></tr>
<tr><td>Class 4</td><td>£0</td><td>6% x £630 = £37.80</td><td>6% x £37,700 + 2% x £4,730 = £2,356.60</td></tr>
<tr><td>Qualifying year?</td><td>Only if she pays voluntary Class 2 (no other earnings)</td><td>Yes</td><td>Yes</td></tr>
</tbody></table>
<p>Aisha has no job and no credits, so she ticks the voluntary Class 2 option on her return: £189.80 for a qualifying year. Ben and Chloe do nothing about Class 2, because their profits are above the threshold and the qualifying year is credited automatically. Note how much depends on the profit figure: if Aisha's allowable expenses were overstated, she might wrongly fall below the threshold, so accurate invoices and expense records matter. Our guide to <a href="/blog/allowable-expenses-self-employed-uk">allowable expenses for the self-employed</a> shows what counts.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Paying voluntary Class 2 when not needed,</strong> because the year already counts through employment or credits.</li>
<li><strong>Assuming you can still pay Class 2 from abroad</strong> after April 2026.</li>
<li><strong>Using the trading allowance</strong> without realising that with no reported profit, you may not have a qualifying year; see our guide to the <a href="/blog/trading-allowance">£1,000 trading allowance</a>.</li>
<li><strong>Forgetting to register for Self Assessment.</strong> You still need to register as self-employed to report profits and pay Class 4; see <a href="/blog/how-to-register-as-self-employed-uk">how to register as self-employed</a>.</li>
<li><strong>Missing the 31 January deadline,</strong> covered in our <a href="/blog/self-assessment-deadlines">Self Assessment deadlines</a> guide.</li>
</ul>

<h2>What if you have gaps from earlier years?</h2>
<p>You can usually pay voluntary contributions to fill gaps in your record for the past six tax years. For years when you were self-employed in the UK with low profits, voluntary Class 2 at that year's rate is normally the cheapest option. For years when you were not self-employed, Class 3 is the usual route. Before paying anything:</p>
<ul>
<li>Check that the year is genuinely incomplete and not already covered by credits.</li>
<li>Check your State Pension forecast to see whether the extra year actually increases your pension. If you will reach 35 qualifying years anyway, an extra year may add nothing.</li>
<li>Get the payment reference from HMRC for the specific year, so the money is allocated correctly.</li>
</ul>
<p>The figures can be striking. One year of voluntary Class 2 at 2026/27 rates costs £189.80, while a qualifying year typically adds around 1/35th of the full new State Pension each year for life. That is why HMRC's April 2026 change for people abroad was significant for expats. If HMRC's records or your forecast look wrong, raise it with HMRC before paying, because a missing credit or unrecorded employment year is cheaper to fix than to buy.</p>

<h2>Class 2 for freelancers with overseas clients</h2>
<p>Being self-employed in the UK and billing clients abroad does not change your Class 2 or Class 4 position; National Insurance follows where you live and work, not where your clients are. A UK sole trader invoicing US clients still reports the profit on Self Assessment. If you trade through a limited company and US clients request tax forms, our guide to <a href="/blog/w-8ben-e">Form W-8BEN-E</a> explains what the company signs; directors of their own company build their record through salary rather than Class 2, as covered in our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a>.</p>

<h2>Class 2 and your tax return</h2>
<p>On your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>, HMRC works out Class 4 from your profits automatically. Class 2 only appears if you choose to pay voluntarily. Your profit figure comes from your business income and expenses, so the quality of your invoicing directly determines your National Insurance position. Sole traders invoicing clients can follow our <a href="/blog/sole-trader-invoice-uk">UK sole trader invoice guide</a>.</p>

<p>Your National Insurance starts with an accurate profit figure, and that starts with your invoices. Create clean, numbered invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download them as PDFs for your Self Assessment records.</p>
`,
  },
];
