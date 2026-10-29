import type { PostDraft } from "../blog";

export const TAX_GLOBAL_2026_C_POSTS: PostDraft[] = [
  {
    slug: "how-to-register-for-gst-hst-canada",
    title: "How to Register for GST/HST in Canada (2026 Guide)",
    description:
      "How to register for GST/HST in Canada: the $30,000 small supplier test, when you must register, the online steps, filing periods and what changes on invoices.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Canada",
    related: [
      "canada-gst-hst-invoice-requirements",
      "canada-self-employed-tax",
      "sales-tax-vs-vat-vs-gst",
    ],
    faqs: [
      {
        q: "Is there a fee to register for GST/HST in Canada?",
        a: "No. The Canada Revenue Agency does not charge a fee to register for a GST/HST account or to get a business number. You can register yourself online through Business Registration Online, by phone or with Form RC1. Some private websites offer to register you for a fee, but they only submit the same free application on your behalf, so there is rarely a good reason to pay them.",
      },
      {
        q: "Can I register for GST/HST if I earn less than $30,000?",
        a: "Yes. Small suppliers can register voluntarily. Once registered you must charge GST/HST on taxable sales and file returns, but you can also claim input tax credits for the GST/HST you pay on business purchases. Voluntary registration often suits businesses that sell to other GST/HST registrants, have large start-up costs, or expect to pass $30,000 soon anyway.",
      },
      {
        q: "How long does it take to get a GST/HST number?",
        a: "When you register online through Business Registration Online and the CRA can validate your identity and details, you usually receive your business number and GST/HST program account number immediately at the end of the session. Phone and paper applications take longer, and paper forms can take several weeks to process. Register before you need to issue your first taxable invoice.",
      },
      {
        q: "What does a GST/HST number look like?",
        a: "A GST/HST account number has 15 characters: your 9-digit business number, the program identifier RT, and a 4-digit reference number, for example 123456789 RT0001. The 9-digit business number stays the same across all your CRA program accounts, such as payroll (RP) or import-export (RM). Customers can check a GST/HST number with the CRA's GST/HST registry tool.",
      },
      {
        q: "Do I charge GST/HST on sales to customers outside Canada?",
        a: "Many exports of goods and services to non-residents are zero-rated, which means you charge 0% but can still claim input tax credits on related costs. The exact treatment depends on what you sell and where it is used or consumed, and there are detailed conditions for each type of supply. Check the CRA's guidance on exports before deciding an invoice is zero-rated.",
      },
      {
        q: "Can I claim back GST/HST I paid before I registered?",
        a: "In some cases. When you register, you may be able to claim input tax credits for GST/HST paid on inventory and capital property you hold on the registration date, and on certain pre-registration services and rent. Keep the original invoices with the supplier's GST/HST number. The rules have conditions, so check CRA guidance or ask an accountant before you claim.",
      },
      {
        q: "What happens if I should have registered but did not?",
        a: "If you exceeded the small supplier threshold and kept selling without registering, the CRA can treat you as a registrant from the date you should have registered. You may then owe the GST/HST you should have collected, plus interest and possibly penalties, even if you never charged it to customers. Registering and correcting the position as soon as you notice the problem limits the damage.",
      },
      {
        q: "Do I need to cancel my GST/HST account if my sales drop?",
        a: "Not automatically. If your taxable supplies fall below $30,000 and you have been registered for at least one year, you may be able to ask the CRA to cancel your registration. Cancelling can trigger a requirement to account for tax on assets you still hold, so compare the cost of staying registered with the cost of cancelling before you apply.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To register for GST/HST in Canada, apply to the Canada Revenue Agency online through Business Registration Online, by phone, or with Form RC1. You receive a 9-digit business number with an RT program account. Registration is mandatory once your worldwide taxable supplies pass $30,000 in a single calendar quarter or over four consecutive quarters, and voluntary below that.</p>

<p>Knowing when and how to register for GST/HST is one of the first tax questions for any new Canadian business, freelancer or online seller. Register too late and you can owe tax you never collected. Register early without understanding the rules and you take on filing obligations you did not plan for. This guide walks through the small supplier test, the registration steps, what you need to have ready, filing periods, and the changes you make to your invoices afterward.</p>

<p><em>This is general information, not tax or legal advice. Confirm your situation with the CRA or a qualified accountant.</em></p>

<h2>What is GST/HST registration?</h2>
<p>The goods and services tax (GST) is a 5% federal tax on most supplies of goods and services in Canada. Five provinces (Ontario, New Brunswick, Newfoundland and Labrador, Nova Scotia and Prince Edward Island) use the harmonized sales tax (HST), which combines the federal and provincial portions into one rate. Registering for GST/HST means opening a GST/HST program account with the CRA so you can charge, collect and remit the tax, and claim input tax credits (ITCs) for the GST/HST you pay on business costs.</p>
<p>Your GST/HST account is attached to your business number (BN), a 9-digit identifier the CRA uses for all your business accounts. The GST/HST account number adds the letters RT and a 4-digit reference, for example 123456789 RT0001. That full number is what goes on your invoices.</p>

<h3>Who needs to register for GST/HST?</h3>
<p>You generally must register if you make taxable supplies in Canada in the course of a commercial activity and you are not a small supplier. Some businesses must register regardless of their sales, including taxi and commercial ride-sharing drivers. Non-resident digital platforms and sellers have their own registration rules. Most other sole proprietors, partnerships and corporations only have to register once they pass the small supplier threshold.</p>

<h2>What is the small supplier threshold?</h2>
<p>You are a small supplier if your total taxable supplies (including zero-rated supplies, and including those of your associates) are $30,000 or less in a single calendar quarter and over the last four consecutive calendar quarters. Public service bodies such as charities use a $50,000 threshold, with a separate gross revenue test. Exempt supplies, such as most residential rent and many financial and health services, do not count toward the threshold.</p>
<p>The timing of your registration depends on how you pass the threshold. The CRA explains both tests on its <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html" target="_blank" rel="noopener noreferrer">GST/HST registration page</a>.</p>
<table>
<thead><tr><th>How you exceed $30,000</th><th>When you stop being a small supplier</th><th>When to register</th></tr></thead>
<tbody>
<tr><td>In a single calendar quarter</td><td>From the sale that took you over $30,000 in that quarter</td><td>Within 29 days of that sale, and you must charge GST/HST on that sale</td></tr>
<tr><td>Over four consecutive calendar quarters (but not in one quarter)</td><td>At the end of the month following the quarter in which you passed $30,000</td><td>Within 29 days of the first supply you make after you stop being a small supplier</td></tr>
<tr><td>Below $30,000 in both tests</td><td>You remain a small supplier</td><td>Optional (voluntary registration)</td></tr>
</tbody>
</table>

<h3>Worked example of the four-quarter test</h3>
<p>Maya is a freelance designer in Calgary. Her taxable sales by calendar quarter are: January to March $6,000, April to June $7,500, July to September $8,000, October to December $9,500. No single quarter is over $30,000, but the four quarters total $31,000. She passes the threshold in the October to December quarter, so she stops being a small supplier at the end of January (the month after that quarter). Her first invoice in February must include GST, and she must register within 29 days of that sale.</p>
<p>If Maya had instead landed one $32,000 contract in May, she would have passed the single-quarter test immediately. GST would apply to that very contract, and she would need to register within 29 days.</p>

<h2>How to register for GST/HST: step by step</h2>
<p>Most businesses register online in a single session. Have your details ready before you start.</p>
<ol>
<li><strong>Gather your information.</strong> You need your Social Insurance Number (for sole proprietors), legal and operating names, business address, a description of your main business activity, your start date, your estimated annual worldwide taxable sales, and your fiscal year end. Corporations also need their incorporation details.</li>
<li><strong>Choose how to apply.</strong> Use Business Registration Online (BRO), which is free and usually issues the number immediately. You can also call the CRA business enquiries line or mail Form RC1, Request for a Business Number and Certain Program Accounts. If you already have a BN (for example for payroll), add the GST/HST account in My Business Account.</li>
<li><strong>Pick your effective date.</strong> For mandatory registration this is the date you stopped being a small supplier. For voluntary registration you choose the date, which can be the day you apply.</li>
<li><strong>Answer the filing period questions.</strong> The CRA assigns a reporting period based on your estimated annual taxable sales, and you can sometimes elect a shorter one.</li>
<li><strong>Save your confirmation.</strong> Record your BN and RT account number and the effective date. Set up access to My Business Account so you can file returns and make payments online.</li>
<li><strong>Update your invoices and prices.</strong> Add your GST/HST number to your invoice template and decide whether your prices are tax-exclusive or tax-inclusive.</li>
</ol>

<h3>Province-specific accounts to check</h3>
<p>GST/HST registration is federal. British Columbia, Saskatchewan and Manitoba charge a separate provincial sales tax (PST or RST) with its own registration, and Quebec administers the QST through Revenu Québec. If you sell into those provinces, check whether you also need a provincial account. Our <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST explainer</a> covers how these consumption taxes differ in general.</p>

<h2>How much GST/HST do you charge?</h2>
<p>The rate depends on the province where the supply is made, under the place of supply rules, not where your business is based. A Toronto consultant billing a client in Halifax generally charges Nova Scotia HST, not Ontario HST. The rates below are the rates in effect as of October 2026; confirm current rates on the CRA website before relying on them.</p>
<table>
<thead><tr><th>Province or territory</th><th>Tax</th><th>Rate</th></tr></thead>
<tbody>
<tr><td>Alberta, Yukon, Northwest Territories, Nunavut</td><td>GST</td><td>5%</td></tr>
<tr><td>British Columbia, Saskatchewan, Manitoba, Quebec</td><td>GST (plus separate provincial tax)</td><td>5%</td></tr>
<tr><td>Ontario</td><td>HST</td><td>13%</td></tr>
<tr><td>Nova Scotia</td><td>HST</td><td>14%</td></tr>
<tr><td>New Brunswick, Newfoundland and Labrador, Prince Edward Island</td><td>HST</td><td>15%</td></tr>
</tbody>
</table>
<p>To check the math on a tax-inclusive or tax-exclusive price, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works for GST and HST rates too.</p>

<h2>What filing period will you get?</h2>
<p>After you register, you file GST/HST returns for each reporting period, even when you have nothing to report. The default period depends on your annual taxable supplies.</p>
<table>
<thead><tr><th>Annual taxable supplies</th><th>Default reporting period</th><th>Options</th></tr></thead>
<tbody>
<tr><td>$1,500,000 or less</td><td>Annual</td><td>Can elect monthly or quarterly</td></tr>
<tr><td>More than $1,500,000 up to $6,000,000</td><td>Quarterly</td><td>Can elect monthly</td></tr>
<tr><td>More than $6,000,000</td><td>Monthly</td><td>Monthly is required</td></tr>
</tbody>
</table>
<p>For annual filers who are individuals with business income and a December 31 fiscal year end, the return is generally due June 15 and any balance owing is due April 30. Other annual filers usually have three months after the fiscal year end. Quarterly and monthly filers have one month after the period ends. Annual filers may also have to pay quarterly instalments once their net tax reaches $3,000 or more.</p>

<h3>Should you use the Quick Method?</h3>
<p>Small businesses with annual taxable supplies (including GST/HST) of $400,000 or less can often elect the Quick Method of accounting. You still charge the normal rate on invoices, but you remit a reduced percentage of your GST/HST-included sales instead of tracking ITCs on every expense. It tends to suit service businesses with low taxable costs. Run the numbers both ways before you elect.</p>

<h2>What changes on your invoices after you register?</h2>
<p>Once registered, your invoices become the evidence your business customers need to claim ITCs. Above certain sale amounts, the CRA requires specific details, including your business name, the invoice date, your GST/HST registration number, the amount of tax charged (or a statement that it is included) and, for larger sales, the buyer's name and the terms of payment. Our guide to <a href="/blog/canada-gst-hst-invoice-requirements">Canada GST/HST invoice requirements</a> lists every field by threshold.</p>
<p>Here is how a simple invoice from an Ontario registrant to an Ontario client might look:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Brand identity design, logo and style guide</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Business card layout</td><td>1</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Revisions (hours)</td><td>3</td><td>$85.00</td><td>$255.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>$3,005.00</td></tr>
<tr><td colspan="3"><strong>HST 13% (GST/HST No. 123456789 RT0001)</strong></td><td>$390.65</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td>$3,395.65</td></tr>
</tbody>
</table>
<p>You can build an invoice like this in the <a href="/invoice-generator">free invoice generator</a>: add your GST/HST number to the business details, set the tax rate, and the subtotal, tax and total calculate automatically. Number invoices sequentially (the <a href="/tools/invoice-number-generator">invoice number generator</a> helps) and keep copies for six years, which is the CRA's general record retention period.</p>

<h2>How do you file your first GST/HST return?</h2>
<p>Your first return covers the period from your effective date of registration to the end of your first reporting period, so it may be shorter than a full year or quarter. Most small businesses file electronically through My Business Account, GST/HST NETFILE or accounting software. The core lines are simple once your records are organized:</p>
<ol>
<li><strong>Total sales and other revenue (line 101).</strong> Report taxable sales for the period, excluding the GST/HST itself. Your invoice register is the source, so make sure every invoice has a unique number and a correct date. Our guide to an <a href="/blog/invoice-numbering-system">invoice numbering system</a> shows simple formats that hold up in a review.</li>
<li><strong>GST/HST collected or collectible (line 105).</strong> This is the tax on invoices issued in the period, whether or not customers have paid yet, because GST/HST generally becomes payable when you invoice or when payment is due, whichever is earlier.</li>
<li><strong>Input tax credits (line 108).</strong> Add up the GST/HST on eligible business purchases, supported by supplier invoices that show the supplier's registration number.</li>
<li><strong>Net tax (line 109).</strong> Line 105 minus line 108, plus any adjustments. A positive figure is owing; a negative figure is a refund claim.</li>
<li><strong>Pay and keep records.</strong> Pay through online banking, My Payment or a pre-authorized debit, and keep a copy of the return with your working papers.</li>
</ol>
<p>If a customer disputes an invoice after you have reported it, issue a credit note rather than editing the original. Our <a href="/blog/credit-note-guide">credit note guide</a> explains how this adjusts the tax you reported. When you bill a client in another currency, the GST/HST still has to be reported in Canadian dollars; see <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> for how to show both amounts.</p>

<h2>Should you register voluntarily?</h2>
<p>Voluntary registration is a business decision, not just a tax one. Weigh these points:</p>
<ul>
<li><strong>Input tax credits.</strong> You recover GST/HST paid on equipment, software, rent and supplies. With high start-up costs this can be significant.</li>
<li><strong>Your customers.</strong> Business clients who are registrants can claim back the GST/HST you charge, so it costs them nothing. Consumers cannot, so adding 13% or 15% raises their price.</li>
<li><strong>Perception.</strong> Some larger clients prefer suppliers with a GST/HST number, because it signals an established business.</li>
<li><strong>Admin.</strong> You must file returns on time, even nil returns, and keep proper records. Late filing brings penalties and interest.</li>
<li><strong>Growth.</strong> If you expect to pass $30,000 within a year, registering early avoids a mid-year switch and awkward conversations about price changes.</li>
</ul>

<h2>Common mistakes when registering for GST/HST</h2>
<ul>
<li><strong>Counting only one quarter.</strong> Many freelancers watch for a single $30,000 quarter and miss that four smaller quarters added together also trigger registration.</li>
<li><strong>Forgetting associates and zero-rated sales.</strong> The threshold includes zero-rated supplies such as many exports, and the sales of associated businesses.</li>
<li><strong>Charging GST/HST before you have a number.</strong> Do not collect tax until you are registered. If you are a required registrant waiting for your number, register right away rather than invoicing without it.</li>
<li><strong>Using your home province's rate.</strong> The place of supply rules decide the rate, so out-of-province clients may need a different rate.</li>
<li><strong>Missing nil returns.</strong> Registrants must file for every period, even with no sales.</li>
<li><strong>Old invoice templates.</strong> After registering, update every template and recurring invoice with your number and the tax line.</li>
</ul>

<h2>GST/HST registration checklist</h2>
<ul>
<li>Track taxable sales by calendar quarter and on a rolling four-quarter basis.</li>
<li>Register through Business Registration Online, by phone or with Form RC1 within 29 days of the trigger.</li>
<li>Record your BN, RT account number and effective date.</li>
<li>Check whether you also need PST, RST or QST registration.</li>
<li>Add your GST/HST number and tax line to invoices.</li>
<li>Diary your filing and payment deadlines, and consider whether instalments apply.</li>
<li>Set aside the tax you collect in a separate account. Our article on <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> covers practical percentages.</li>
</ul>
<p>Registering for GST/HST also affects your income tax picture: if you are a sole proprietor, read our guide to <a href="/blog/canada-self-employed-tax">self-employed tax in Canada</a> for CPP contributions, Form T2125 and instalments. For the broader basics of tax invoices worldwide, see the <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>
<p>Once you know how to register for GST/HST and have your number, create compliant invoices in minutes with our <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up, builds the PDF right in your browser, and lets you download it instantly.</p>
`,
  },
  {
    slug: "canada-self-employed-tax",
    title: "Self-Employed Tax Canada: CPP, T2125 and Instalments (2026)",
    description:
      "Self employed tax in Canada explained: 2026 CPP rates and maximums, how to report on Form T2125, deadlines, quarterly instalments and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Canada",
    related: [
      "how-to-register-for-gst-hst-canada",
      "how-much-to-set-aside-for-taxes",
      "canada-gst-hst-invoice-requirements",
    ],
    faqs: [
      {
        q: "Do self-employed people in Canada pay EI?",
        a: "Not by default. Employment Insurance premiums are not required on self-employment income. Self-employed Canadians can opt in to the EI special benefits program, which covers benefits such as maternity, parental, sickness and caregiving, by entering an agreement with the Canada Employment Insurance Commission. Once you opt in and claim benefits, you generally have to keep paying premiums for as long as you are self-employed, so read the terms before you enroll.",
      },
      {
        q: "Can I deduct CPP contributions as self-employed?",
        a: "Partly as a deduction and partly as a credit. You can deduct the employer-equivalent half of your base CPP contributions, plus the enhanced portions (the first additional and CPP2 contributions), from your income. The remaining employee-equivalent base amount is claimed as a non-refundable tax credit. Tax software calculates the split automatically from Schedule 8 when you enter your net self-employment income.",
      },
      {
        q: "Do I have to register my business to pay self-employed tax?",
        a: "No. A sole proprietor reports business income on their personal T1 return with Form T2125 whether or not the business is registered provincially. Provincial business name registration is a separate legal requirement if you operate under a name other than your own. GST/HST registration is also separate and depends on whether your taxable sales pass the $30,000 small supplier threshold.",
      },
      {
        q: "What tax rate do self-employed people pay in Canada?",
        a: "There is no special self-employed income tax rate. Your net business income is added to any other income and taxed at the same progressive federal and provincial rates as employment income. The difference is that you also pay both halves of CPP on your net earnings and no tax is withheld at source, so you pay through instalments or a balance due in spring.",
      },
      {
        q: "Can I contribute to an RRSP if I am self-employed?",
        a: "Yes. Net self-employment income counts as earned income for RRSP purposes, so it creates RRSP contribution room for the following year, generally 18% of earned income up to the annual dollar limit. RRSP contributions are deductible and can reduce your income tax, but they do not reduce the CPP contributions calculated on your net business income.",
      },
      {
        q: "What happens if I miss a tax instalment payment?",
        a: "The CRA charges instalment interest when payments are late or less than required, compounded daily at the prescribed rate. If the interest is large, an instalment penalty can also apply. You can reduce interest by paying the next instalment early or making an extra payment, because the CRA offsets credit interest on early payments against interest on late ones within the same year.",
      },
      {
        q: "Do I need to keep receipts for self-employed expenses?",
        a: "Yes. You do not send receipts with your return, but the CRA can ask for them in a review. Keep invoices, receipts, bank statements, mileage logs and records of income for six years from the end of the tax year they relate to. Digital copies are acceptable if they are clear and complete. Good records also make it easier to defend home office and vehicle claims.",
      },
      {
        q: "Is side hustle income taxed as self-employment in Canada?",
        a: "If you carry on an activity with a reasonable expectation of profit, such as freelancing, reselling or delivery work, the income is generally business income reported on Form T2125, even if you also have a full-time job. Your employer deducts CPP on your salary, and you pay CPP on the side income up to the annual maximums, with Schedule 8 accounting for both.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Self-employed tax in Canada means reporting business income on Form T2125 with your T1 return, paying federal and provincial income tax on the net profit, and paying both halves of CPP. For 2026 that is 11.9% on net earnings between $3,500 and $74,600, plus 8% CPP2 up to $85,000. Returns are due June 15 and balances April 30.</p>

<p>When you work for yourself in Canada, nobody withholds tax from your income. That freedom comes with three jobs: tracking your profit, paying the Canada Pension Plan (CPP) contributions an employer would normally share, and paying tax on time, often through quarterly instalments. This guide explains how self employed tax in Canada works for sole proprietors and freelancers, using the 2026 CPP figures published by the government, with a full worked example.</p>

<p><em>This is general information, not tax advice. Quebec residents contribute to the QPP instead of CPP and file a separate provincial return; confirm details with the CRA, Revenu Québec or an accountant.</em></p>

<h2>What counts as self-employment income in Canada?</h2>
<p>You are self-employed when you carry on a business as a sole proprietor or as a partner in a partnership, rather than working as an employee. Freelancers, independent contractors, consultants, tradespeople, gig workers and online sellers usually fall into this category. The CRA looks at the working relationship, such as control over your work, ownership of tools, chance of profit and risk of loss, and integration into the payer's business, rather than the label in a contract.</p>
<p>If you incorporate, the corporation is a separate taxpayer that files a T2 return, and you are paid through salary or dividends. This article focuses on unincorporated sole proprietors, the most common setup for freelancers.</p>

<h2>How is self-employed tax calculated in Canada?</h2>
<p>Your bill has two main parts:</p>
<ol>
<li><strong>Income tax.</strong> Net business income (gross income minus allowable expenses) is added to any other income and taxed at the regular progressive federal and provincial rates. There is no separate self-employment income tax rate.</li>
<li><strong>CPP contributions.</strong> Because you are both employer and employee, you pay both halves of CPP on your net self-employment earnings, calculated on Schedule 8 of your return.</li>
</ol>
<p>If you are registered for GST/HST, the tax you collect from customers is not your income. It is remitted separately on your GST/HST return. See our guide on <a href="/blog/how-to-register-for-gst-hst-canada">how to register for GST/HST</a> to check whether you need to.</p>

<h2>How much CPP do self-employed people pay in 2026?</h2>
<p>CPP now has three layers: the base contribution, the first additional (enhancement) contribution, and the second additional contribution (CPP2) on a higher band of earnings. The figures below are the 2026 rates and maximums published on <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html" target="_blank" rel="noopener noreferrer">canada.ca</a>.</p>
<table>
<thead><tr><th>2026 CPP figure</th><th>Employee (and employer, each)</th><th>Self-employed</th></tr></thead>
<tbody>
<tr><td>Basic exemption</td><td>$3,500</td><td>$3,500</td></tr>
<tr><td>Year's maximum pensionable earnings (YMPE)</td><td>$74,600</td><td>$74,600</td></tr>
<tr><td>Base plus first additional rate (on $3,500 to $74,600)</td><td>5.95%</td><td>11.9%</td></tr>
<tr><td>Maximum base plus first additional contribution</td><td>$4,230.45</td><td>$8,460.90</td></tr>
<tr><td>Year's additional maximum pensionable earnings (YAMPE)</td><td>$85,000</td><td>$85,000</td></tr>
<tr><td>CPP2 rate (on $74,600 to $85,000)</td><td>4%</td><td>8%</td></tr>
<tr><td>Maximum CPP2 contribution</td><td>$416</td><td>$832</td></tr>
</tbody>
</table>
<p>So the most a self-employed person can pay in CPP for 2026 is $8,460.90 plus $832, or $9,292.90. If you also have employment income, the CPP deducted by your employer counts toward the same maximums, and Schedule 8 works out what is still owed on your business earnings.</p>

<h3>How the CPP deduction and credit work</h3>
<p>You do not lose the whole contribution to tax. The employer-equivalent half of the base contribution, and all of the enhanced contributions (the first additional portion and CPP2), are deducted from your income. The employee-equivalent base portion is claimed as a non-refundable tax credit. In practice this lowers the real cost of CPP by your marginal tax rate on the deductible part.</p>

<h2>How to report self-employment income on Form T2125</h2>
<p>Form T2125, Statement of Business or Professional Activities, is where you report your gross income and expenses. You file one T2125 for each business. Here is the process:</p>
<ol>
<li><strong>Identify the business.</strong> Enter your business name, address, fiscal period (usually January 1 to December 31 for sole proprietors) and the industry code that best matches your main activity.</li>
<li><strong>Report gross income.</strong> Total your invoiced sales and fees for the year, excluding GST/HST you collected (if you are a registrant using the regular method). Your invoices and bank deposits are the source. An organized invoice log makes this step quick.</li>
<li><strong>Enter business expenses.</strong> Claim reasonable costs incurred to earn income: advertising, software subscriptions, office supplies, professional fees, phone and internet (business portion), insurance, travel, meals (generally 50%), and supplies.</li>
<li><strong>Claim capital cost allowance (CCA).</strong> Computers, furniture and vehicles are not expensed in full. You claim CCA by asset class each year.</li>
<li><strong>Add business-use-of-home and vehicle expenses.</strong> Home office costs are prorated by area and limited so they cannot create or increase a business loss. Vehicle costs are prorated by business kilometres from a logbook.</li>
<li><strong>Carry net income to your T1.</strong> Net business income flows to your return and to Schedule 8 for CPP.</li>
</ol>

<h3>Common deductible expenses for Canadian freelancers</h3>
<table>
<thead><tr><th>Expense</th><th>How it is claimed</th></tr></thead>
<tbody>
<tr><td>Software, hosting, subscriptions</td><td>Fully deductible if used for the business</td></tr>
<tr><td>Laptop, camera, furniture</td><td>Capital cost allowance by class</td></tr>
<tr><td>Home office</td><td>Business-use percentage of rent or mortgage interest, utilities, insurance, property tax; cannot create a loss</td></tr>
<tr><td>Vehicle</td><td>Business kilometres divided by total kilometres, applied to fuel, insurance, repairs, lease or CCA</td></tr>
<tr><td>Meals and entertainment</td><td>Generally 50% of the cost</td></tr>
<tr><td>Accounting and legal fees</td><td>Fully deductible</td></tr>
<tr><td>Bank and payment processing fees</td><td>Fully deductible</td></tr>
</tbody>
</table>

<h2>When are self-employed taxes due in Canada?</h2>
<p>Self-employed individuals and their spouses or common-law partners get an extended filing deadline, but not an extended payment deadline.</p>
<table>
<thead><tr><th>Item</th><th>Deadline</th></tr></thead>
<tbody>
<tr><td>T1 return with T2125 (2026 tax year)</td><td>June 15, 2027</td></tr>
<tr><td>Balance owing for 2026 (income tax and CPP)</td><td>April 30, 2027</td></tr>
<tr><td>Quarterly instalments (if required)</td><td>March 15, June 15, September 15, December 15</td></tr>
<tr><td>Annual GST/HST return (individual, December year end)</td><td>June 15, with payment due April 30</td></tr>
</tbody>
</table>
<p>When a deadline falls on a weekend or public holiday, the CRA treats a return or payment as on time if it is received on the next business day. Interest runs on any balance not paid by April 30, even if you file on time in June.</p>

<h2>Do self-employed people have to pay tax instalments?</h2>
<p>You must pay instalments if your net tax owing is more than $3,000 in the current year and in either of the two previous years ($1,800 for Quebec residents, since the threshold is based on federal tax only). Net tax owing includes income tax and CPP contributions on self-employment income, minus tax already withheld at source.</p>
<p>The CRA offers three ways to calculate instalments. You can follow the reminder amounts it mails you (the no-calculation option, based on prior years), pay a quarter of last year's net tax owing (prior-year option), or estimate this year's tax and pay a quarter of it (current-year option). The reminder option is the safest from an interest point of view, because the CRA will not charge instalment interest if you pay those amounts on time, even if you end up owing more. The CRA's <a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/income-tax-instalments/options-calculate.html" target="_blank" rel="noopener noreferrer">instalment guidance</a> explains each option.</p>

<h2>Worked example: self-employed tax for a Canadian freelancer</h2>
<p>Liam is a self-employed web developer in Ontario with no other income. In 2026 he invoices $92,000 (excluding HST) and has $14,500 of deductible expenses, including software, a home office share, a laptop CCA claim and accounting fees.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Gross business income</td><td>From invoices</td><td>$92,000.00</td></tr>
<tr><td>Expenses</td><td>From T2125</td><td>-$14,500.00</td></tr>
<tr><td>Net self-employment income</td><td>$92,000 - $14,500</td><td>$77,500.00</td></tr>
<tr><td>CPP base and first additional</td><td>($74,600 - $3,500) x 11.9% (capped)</td><td>$8,460.90</td></tr>
<tr><td>CPP2</td><td>($77,500 - $74,600) x 8%</td><td>$232.00</td></tr>
<tr><td>Total CPP</td><td>$8,460.90 + $232.00</td><td>$8,692.90</td></tr>
</tbody>
</table>
<p>Part of that $8,692.90 is deducted from Liam's income and the rest generates a tax credit. His federal and Ontario income tax is then worked out on the remaining taxable income using the 2026 brackets in his tax software. Because his net tax owing will be well above $3,000, Liam should expect instalment reminders from the CRA from the following year onward, and he should be setting aside money from every invoice. A common rule of thumb is to reserve 25% to 35% of net income for income tax and CPP combined, but your own rate depends on your province and deductions (see <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a>).</p>

<h2>How to track self-employed income and expenses during the year</h2>
<p>The easiest tax season is one where the numbers already exist. Self-employed Canadians who do well at tax time usually follow a simple monthly routine rather than rebuilding the year from bank statements in April.</p>
<ul>
<li><strong>Invoice every job.</strong> Even for small or cash jobs, issue a numbered invoice. It records the date, client and amount, and it separates GST/HST from your fee. Our guide on <a href="/blog/how-to-invoice-as-a-sole-proprietor">how to invoice as a sole proprietor</a> covers the fields to include.</li>
<li><strong>Watch unpaid invoices.</strong> Business income is generally reported when it is earned, not when the client pays. An <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> shows which invoices are still open at year end, and which may need a reserve or bad debt claim.</li>
<li><strong>Log expenses as they happen.</strong> Photograph receipts, label them by T2125 category and record business kilometres weekly. An <a href="/blog/expense-report-template">expense report template</a> works well even for a one-person business.</li>
<li><strong>Reconcile monthly.</strong> Match invoices and expenses to bank deposits and payments so nothing is missed or counted twice.</li>
<li><strong>Review quarterly.</strong> Compare your profit so far with your tax savings and your instalment schedule. If income has jumped, increase your savings rate before the next instalment date.</li>
</ul>
<p>A spreadsheet is enough for many freelancers at the start. As volume grows, accounting software that imports bank transactions can save hours, but the invoice remains the source document for every dollar of income on your T2125.</p>

<h2>Common mistakes self-employed Canadians make</h2>
<ul>
<li><strong>Forgetting CPP when budgeting.</strong> Many new freelancers save for income tax but are surprised by a CPP bill of several thousand dollars.</li>
<li><strong>Thinking June 15 is the payment date.</strong> Payment is due April 30. Interest starts on May 1.</li>
<li><strong>Including GST/HST in income.</strong> Tax collected for the government is not revenue on your T2125 under the regular method.</li>
<li><strong>Expensing capital assets.</strong> Computers and vehicles go through CCA, not straight expenses.</li>
<li><strong>Weak records.</strong> No mileage log, no home office measurements and missing receipts make claims hard to defend.</li>
<li><strong>Ignoring the $30,000 GST/HST threshold.</strong> Income tax and GST/HST are separate systems, and passing the threshold creates a new obligation.</li>
<li><strong>Mixing personal and business accounts.</strong> A separate account makes bookkeeping, instalments and reviews far easier.</li>
</ul>

<h2>Self-employed tax checklist for Canada</h2>
<ul>
<li>Issue numbered invoices for every sale and keep a running income log. Our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> shows a simple system.</li>
<li>Save receipts and keep a vehicle logbook and home office measurements.</li>
<li>Track taxable sales against the $30,000 GST/HST threshold.</li>
<li>Move a fixed percentage of each payment into a tax savings account.</li>
<li>Pay instalments on March 15, June 15, September 15 and December 15 if required.</li>
<li>Pay your balance by April 30 and file your T1 with T2125 by June 15.</li>
<li>Review deductions with a <a href="/blog/self-employed-tax-deductions">self-employed deductions checklist</a> (written for the US, but most expense categories are similar) and confirm Canadian rules with an accountant.</li>
</ul>
<p>Clean invoices make every part of this easier, from your T2125 totals to your GST/HST return. If you bill clients in Canada, check the <a href="/blog/canada-gst-hst-invoice-requirements">GST/HST invoice requirements</a> once you are registered, and use the <a href="/invoice-generator">free invoice generator</a> or browse the <a href="/invoice-templates">invoice templates</a> for a layout that shows your business number, tax and payment terms clearly.</p>
<p>Managing self employed tax in Canada starts with knowing exactly what you invoiced. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and downloads a ready-to-send PDF built in your browser.</p>
`,
  },
  {
    slug: "how-to-get-an-abn",
    title: "How to Get an ABN: Free Application Steps (2026)",
    description:
      "How to get an ABN in Australia: who is entitled, the free online application, what you need, and why invoices without an ABN can face 47% withholding.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Australia",
    related: [
      "australia-gst-registration",
      "australia-tax-invoice-requirements",
      "how-to-invoice-as-a-sole-proprietor",
    ],
    faqs: [
      {
        q: "How long does it take to get an ABN?",
        a: "Many online applications through the Australian Business Register are processed immediately, and your ABN is shown at the end of the application. If the Registrar needs to check your entitlement or identity, it can take up to 28 days, and you may be asked for more information. Apply before you start invoicing so you are not chasing a number when your first client is ready to pay.",
      },
      {
        q: "Do I need an ABN if I am an employee?",
        a: "No. Employees are not entitled to an ABN for the work they do as employees, and an employer cannot require you to get one as a condition of employment. If someone asks you to get an ABN but controls your hours, supplies your tools and treats you like staff, check whether you are really an employee or a contractor using the ATO's employee or contractor decision tool.",
      },
      {
        q: "Can I have more than one ABN?",
        a: "An entity has only one ABN, no matter how many business activities it runs. A sole trader running a cleaning business and a photography business uses the same ABN for both. If you set up a different entity, such as a company, partnership or trust, that entity needs its own ABN because it is a separate legal structure.",
      },
      {
        q: "Is an ABN the same as a business name?",
        a: "No. An ABN identifies your business entity to the government and other businesses. A business name is a trading name registered with ASIC, and you need one if you trade under a name other than your own personal name (for a sole trader) or the company's exact name. You must have an ABN, or have applied for one, before you can register a business name.",
      },
      {
        q: "What happens to my ABN if I stop trading?",
        a: "You should cancel your ABN when you stop carrying on your business, usually through the ABR website or your registered tax agent. Before cancelling, lodge any outstanding activity statements and cancel GST registration if it applies. The Registrar can also cancel ABNs that appear inactive, for example where no business income has been reported for some time.",
      },
      {
        q: "Can a non-resident get an Australian ABN?",
        a: "A non-resident can be entitled to an ABN if they carry on an enterprise in Australia or make supplies connected with Australia, for example because they are registering for GST. Non-residents without a TFN may need to provide extra identity documents. The ATO has specific guidance for foreign businesses, and many use an Australian tax agent to manage the application.",
      },
      {
        q: "Do I need an ABN to sell on marketplaces or do gig work?",
        a: "Most platforms that treat you as an independent contractor, such as delivery, ride-sourcing and freelance marketplaces, ask for an ABN, and ride-sourcing drivers must also register for GST from their first trip. Selling a few personal items is not a business, but regular selling for profit usually is. If you are carrying on an enterprise, an ABN protects your payments from no-ABN withholding.",
      },
      {
        q: "Can I use my ABN to buy things at wholesale prices?",
        a: "An ABN does not by itself give you a right to wholesale prices or tax-free purchases. Some suppliers sell only to businesses and ask for an ABN, and GST-registered businesses can claim GST credits on business purchases. Using an ABN to make private purchases look like business ones can lead to penalties, so keep purchases under your ABN genuinely for the business.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To get an ABN, apply free online through the Australian Business Register at abr.gov.au, or through a registered tax agent. You must be carrying on, or starting to carry on, an enterprise in Australia. You need your tax file number, personal and business details and your business activity. Most online applications get an ABN immediately.</p>

<p>An Australian Business Number (ABN) is the starting point for working for yourself in Australia. You need it to invoice clients properly, register for GST, and register a business name, and without it customers may have to withhold almost half of your payment. This guide explains how to get an ABN step by step, who is entitled, what to put on your invoices, and how no-ABN withholding works.</p>

<p><em>This is general information, not tax or legal advice. Check the ABR and ATO websites or a registered tax agent for your situation.</em></p>

<h2>What is an ABN?</h2>
<p>An ABN is a unique 11-digit number that identifies your business to the government and the community. It is issued by the Australian Business Register (ABR), which is run by the Australian Taxation Office (ATO). An ABN is different from your tax file number (TFN): the TFN is private and used for income tax, while the ABN is public and appears on invoices, quotes and websites. Anyone can check an ABN on ABN Lookup, which shows the entity's name, status, GST registration and business names.</p>
<p>Having an ABN does not on its own mean you are registered for GST, and it does not register a business name. Those are separate registrations, though you can do all three in one combined online application.</p>

<h2>Who can get an ABN?</h2>
<p>You are entitled to an ABN if you are carrying on, or starting to carry on, an enterprise in Australia, or making supplies connected with Australia's indirect tax zone. The term enterprise covers activities done in the form of a business, including sole traders, partnerships, companies and trusts, plus some activities such as leasing property on a regular basis.</p>
<table>
<thead><tr><th>Situation</th><th>Entitled to an ABN?</th></tr></thead>
<tbody>
<tr><td>Freelancer or contractor running a business</td><td>Yes</td></tr>
<tr><td>Starting a business, even before the first sale</td><td>Yes, if you can show genuine steps toward trading</td></tr>
<tr><td>Employee doing work as an employee</td><td>No</td></tr>
<tr><td>Hobby, such as occasional sales of crafts with no profit motive</td><td>Generally no</td></tr>
<tr><td>Company, partnership or trust carrying on an enterprise</td><td>Yes, the entity applies in its own right</td></tr>
<tr><td>Ride-sourcing or taxi driver</td><td>Yes, and GST registration is also required</td></tr>
</tbody>
</table>
<p>If you are unsure whether your activity is a business or a hobby, consider whether you intend to make a profit, whether the activity is regular and repeated, whether you operate in a businesslike way (records, insurance, a plan), and the size of the activity.</p>

<h2>How to get an ABN: step by step</h2>
<p>The application on the <a href="https://www.abr.gov.au/" target="_blank" rel="noopener noreferrer">Australian Business Register website</a> is free. Ignore websites that charge a fee to submit it for you, unless you are knowingly paying a tax agent for advice.</p>
<ol>
<li><strong>Check you are entitled.</strong> Use the questions above or the ABR entitlement information. If you are actually an employee, do not apply.</li>
<li><strong>Choose your business structure.</strong> Most freelancers start as sole traders. Companies, partnerships and trusts need to be set up first, because the entity itself applies.</li>
<li><strong>Get your documents ready.</strong> Sole traders need their TFN (strongly recommended, since applying without it is slower and can affect entitlement checks), date of birth, contact and address details, and a description of the main business activity. You may also need details of associates, such as partners or directors.</li>
<li><strong>Apply online.</strong> Go to the ABR website and complete the application, or use Online services for business, or ask a registered tax agent to apply for you. Sole traders can sign in with their myID (formerly myGovID) to speed up identity checks.</li>
<li><strong>Add GST and a business name if needed.</strong> The same application lets you register for GST and register a business name with ASIC (the business name has its own fee).</li>
<li><strong>Record your ABN.</strong> If approved immediately, your ABN appears on screen. Otherwise, the Registrar will contact you, usually within 28 days.</li>
<li><strong>Update your invoices and accounts.</strong> Add your ABN to your invoice template, email signature, website and platform profiles.</li>
</ol>

<h3>Keeping your ABN details up to date</h3>
<p>You must update your ABN details within 28 days of a change, such as a new address, a new business activity, or a change in partners or directors. A few years after you stop trading, an out-of-date ABN can cause problems, so cancel it cleanly when the business ends.</p>

<h2>Why does an ABN matter on invoices?</h2>
<p>When you supply goods or services to another business, that business generally must withhold 47% of the payment and send it to the ATO if you do not quote your ABN. Quoting it on your invoice is the simplest way to avoid this. The ATO explains the rules and exceptions alongside its <a href="https://www.ato.gov.au/forms-and-instructions/statement-by-supplier-not-quoting-an-abn" target="_blank" rel="noopener noreferrer">Statement by a supplier not quoting an ABN</a>.</p>

<h3>How no-ABN withholding works</h3>
<p>The payer withholds 47% (the top marginal rate plus the Medicare levy) from the total payment and reports it on their activity statement. You can claim the amount withheld as a credit when you lodge your tax return, but you lose the use of that money until then. Withholding does not apply in some situations, including:</p>
<ul>
<li>the payment is $75 or less, excluding GST;</li>
<li>the supplier is an individual and the supply is wholly private or domestic, such as a hobby;</li>
<li>the supplier gives the payer a completed Statement by a supplier form explaining why they do not need to quote an ABN;</li>
<li>the supplier is not carrying on an enterprise in Australia;</li>
<li>the payment is for work done as an employee, which goes through payroll instead.</li>
</ul>

<h3>Worked example of no-ABN withholding</h3>
<p>Jess, a freelance photographer, sends a $1,200 invoice to a marketing agency but forgets her ABN. If the agency cannot get the number from her by the time it pays, it must withhold 47%:</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Invoice total</td><td>$1,200.00</td></tr>
<tr><td>Withheld by payer (47%)</td><td>$564.00</td></tr>
<tr><td>Paid to Jess</td><td>$636.00</td></tr>
</tbody>
</table>
<p>Jess gets the $564 back only as a credit against her income tax after she lodges her return. One line on her invoice would have avoided this.</p>

<h2>What should an invoice with an ABN look like?</h2>
<p>If you are not registered for GST, you issue a regular invoice (not a tax invoice), show your ABN, and do not add GST. Here is a sample:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Event photography, half day</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Image editing (hours)</td><td>4</td><td>$90.00</td><td>$360.00</td></tr>
<tr><td>Online gallery and download licence</td><td>1</td><td>$190.00</td><td>$190.00</td></tr>
<tr><td colspan="3"><strong>Total (no GST, supplier not registered for GST)</strong></td><td>$1,200.00</td></tr>
</tbody>
</table>
<p>The header would show "Invoice", your name or business name, "ABN 12 345 678 901", the invoice number and date, the client's details, and payment terms. Once you register for GST, you issue tax invoices instead, with extra requirements covered in our <a href="/blog/australia-tax-invoice-requirements">Australian tax invoice requirements</a> guide. Our <a href="/blog/australia-gst-registration">GST registration guide for Australia</a> explains when that switch happens.</p>
<p>You can add your ABN to the business details in the <a href="/invoice-generator">free invoice generator</a> and reuse it on every invoice. For numbering, try the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>

<h2>ABN vs TFN vs ACN vs business name: what is the difference?</h2>
<p>New business owners often mix up the numbers and registrations involved. This table sets them side by side.</p>
<table>
<thead><tr><th>Identifier</th><th>What it is</th><th>Who issues it</th><th>Shown on invoices?</th></tr></thead>
<tbody>
<tr><td>ABN (Australian Business Number)</td><td>11-digit public identifier for a business entity</td><td>Australian Business Register (ATO)</td><td>Yes</td></tr>
<tr><td>TFN (tax file number)</td><td>Private number for income tax</td><td>ATO</td><td>No, keep it private</td></tr>
<tr><td>ACN (Australian Company Number)</td><td>9-digit number for a registered company</td><td>ASIC</td><td>Companies show it on certain documents; a company's ABN usually contains its ACN</td></tr>
<tr><td>Business name</td><td>Registered trading name</td><td>ASIC</td><td>Yes, if you trade under it</td></tr>
<tr><td>GST registration</td><td>Status attached to your ABN</td><td>ATO</td><td>Shown by issuing tax invoices that include GST</td></tr>
</tbody>
</table>

<h2>Do you pay tax differently once you have an ABN?</h2>
<p>An ABN does not create a new tax. As a sole trader you still lodge an individual tax return and pay tax on your business profit at your personal marginal rates, plus the Medicare levy. What changes is that nobody withholds tax from your invoices the way an employer withholds from wages, so you need to set money aside yourself. After you lodge a return showing business income, the ATO may put you into the pay as you go (PAYG) instalments system, which spreads the next year's tax across payments on your activity statement.</p>
<p>A practical approach is to move a fixed share of every payment into a separate savings account. Our guide on <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> explains how to pick a percentage (it uses US examples, but the method is the same). If your clients are larger businesses, they may ask for your ABN, insurance details and bank account before your first job; having a ready <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> layout makes onboarding smoother. Sole traders are generally not required to pay super for themselves, though contributing voluntarily can be tax-effective.</p>

<h2>What else do you need after getting an ABN?</h2>
<ul>
<li><strong>GST registration</strong> if your GST turnover reaches $75,000 or you drive taxis or ride-sourcing vehicles.</li>
<li><strong>Business name registration</strong> with ASIC if you trade under a name other than your own.</li>
<li><strong>PAYG instalments</strong> may be required once you lodge a tax return showing business income above the ATO's entry thresholds.</li>
<li><strong>Superannuation obligations</strong> if you hire employees, including the Payday Super changes covered in our <a href="/blog/payday-super-2026">Payday Super 2026</a> guide.</li>
<li><strong>Records</strong> of income and expenses, kept for five years.</li>
</ul>

<h2>How do clients check your ABN?</h2>
<p>Many businesses check a new supplier's ABN on ABN Lookup before paying the first invoice. The search shows whether the ABN is active, the legal entity name, any registered business names and whether the entity is registered for GST, with the date that registration started. If you issue a tax invoice that shows GST but ABN Lookup says you are not registered, the client cannot claim that GST and will usually ask you to reissue the invoice. Check your own listing after you apply and after any change, and make sure the name on your invoices matches the name on the register. If you work with overseas clients who are not familiar with Australian rules, a short note on the invoice such as "ABN 12 345 678 901, not registered for GST" removes guesswork. For examples of other invoice formats you can adapt, browse the <a href="/blog/contractor-invoice-template">contractor invoice template</a> guide.</p>

<h2>Common ABN mistakes</h2>
<ul>
<li><strong>Applying when you are really an employee.</strong> Applications can be refused, and accepting contractor terms for employee work can cost you super and leave entitlements.</li>
<li><strong>Leaving the ABN off invoices.</strong> This invites 47% withholding and delays payment.</li>
<li><strong>Charging GST when not registered.</strong> Having an ABN alone does not allow you to charge GST.</li>
<li><strong>Paying a third-party site for a free application.</strong> Apply directly on abr.gov.au.</li>
<li><strong>Forgetting to update or cancel.</strong> Changes must be updated within 28 days.</li>
<li><strong>Getting a new ABN for each side business.</strong> One sole trader, one ABN.</li>
</ul>

<h2>ABN checklist for new sole traders</h2>
<ul>
<li>Confirm you are carrying on an enterprise, not working as an employee.</li>
<li>Have your TFN, myID and business details ready.</li>
<li>Apply free at abr.gov.au and record your ABN.</li>
<li>Decide on GST registration and a business name.</li>
<li>Put your ABN on every invoice and quote. Our guide on <a href="/blog/how-to-invoice-as-a-sole-proprietor">how to invoice as a sole proprietor</a> covers the other essentials.</li>
<li>Open a separate business bank account and start keeping records.</li>
</ul>
<p>Now you know how to get an ABN, put it to work on professional invoices. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, builds your PDF in the browser and downloads it instantly, with your ABN on every page.</p>
`,
  },
  {
    slug: "australia-gst-registration",
    title: "GST Registration Australia: $75k Threshold and BAS Guide",
    description:
      "GST registration in Australia: the $75,000 turnover test, who must register, how to apply, BAS lodgment dates, tax invoices and a worked GST example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Australia",
    related: ["how-to-get-an-abn", "australia-tax-invoice-requirements", "sales-tax-vs-vat-vs-gst"],
    faqs: [
      {
        q: "Can I register for GST if my turnover is under $75,000?",
        a: "Yes. Voluntary registration is allowed for any business with an ABN. You then must charge GST on taxable sales and lodge BAS, but you can claim GST credits on business purchases. If you register voluntarily and your turnover is under $75,000, you can generally choose to report and pay GST annually instead of quarterly, which reduces paperwork. You usually need to stay registered for at least 12 months.",
      },
      {
        q: "Do I charge GST to overseas clients?",
        a: "Many exports of goods and services to overseas customers are GST-free, which means you charge no GST but can still claim GST credits on related purchases. Services are GST-free only if they meet specific conditions, such as being supplied to a non-resident who is not in Australia when the service is performed. Check the ATO's export rules for your exact type of supply.",
      },
      {
        q: "Does GST turnover include GST-free sales?",
        a: "Yes. GST turnover includes taxable sales and GST-free sales, but excludes the GST itself, input-taxed sales such as residential rent and most financial supplies, sales not connected with your enterprise, and sales that are not for payment. It also excludes sales of capital assets and sales made because you are winding up the business when you test projected turnover.",
      },
      {
        q: "How do I cancel my GST registration?",
        a: "You can cancel through Online services for business, your registered tax or BAS agent, or by phone. You must cancel within 21 days if you stop carrying on your enterprise. If your turnover drops below $75,000 you can choose to cancel, but generally only after being registered for at least 12 months. Lodge a final BAS and account for any adjustments when you cancel.",
      },
      {
        q: "What is the difference between cash and accrual GST accounting?",
        a: "Under the cash basis, you report GST on sales when you receive payment and claim credits when you pay suppliers. Under the accrual (non-cash) basis, you report GST when you issue the invoice or receive payment, whichever comes first. Small businesses with aggregated turnover under $10 million can usually choose the cash basis, which helps cash flow because you do not pay GST on unpaid invoices.",
      },
      {
        q: "What happens if I register for GST late?",
        a: "If you should have registered but did not, the ATO can backdate your registration to the date you were required to register. You then owe GST on sales from that date even if you did not charge it, which effectively comes out of your own pocket unless you can recover it from customers. Penalties and the general interest charge can also apply, so register within 21 days of crossing the threshold.",
      },
      {
        q: "Do sole traders need to register for GST?",
        a: "Sole traders follow the same rules as any other business. You must register once your GST turnover reaches $75,000 or more, or is projected to, and immediately if you provide taxi or ride-sourcing services. Below that, registration is optional. Your GST turnover counts all your business activities together under your single ABN, not each activity separately.",
      },
      {
        q: "When must I give a customer a tax invoice?",
        a: "If you are registered for GST and a customer asks for a tax invoice for a taxable sale of more than $82.50 including GST, you must give them one within 28 days. Business customers need a valid tax invoice to claim GST credits on purchases above that amount. For sales of $1,000 or more, the tax invoice must also show the buyer's identity or ABN.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> GST registration in Australia is required within 21 days once your business's GST turnover reaches $75,000 or more ($150,000 for non-profits), or is projected to, and immediately for taxi and ride-sourcing drivers. You need an ABN first, then register through the ABR, Online services for business or a tax agent. Registered businesses charge 10% GST and lodge a BAS.</p>

<p>For most small businesses in Australia, GST registration is the moment the tax side of the business gets real: prices may change, invoices become tax invoices, and the business activity statement (BAS) arrives every quarter. This guide explains the $75,000 threshold, how to work out GST turnover, the registration steps, BAS lodgment dates, the cash versus accrual choice, and what your invoices need to show, with a worked example.</p>

<p><em>This is general information, not tax advice. Rules and dates are from the ATO as of October 2026; confirm them with the ATO or a registered tax or BAS agent.</em></p>

<h2>What is GST in Australia?</h2>
<p>The goods and services tax is a broad-based 10% tax on most goods, services and other items sold or consumed in Australia. Registered businesses add GST to the price of taxable sales, collect it from customers, and pay it to the ATO, while claiming back the GST included in their business purchases (GST credits). Some sales are GST-free, such as most basic food, some health and education services and many exports. Others are input-taxed, such as residential rent and most financial supplies, which means no GST is charged and no credits are claimed for related costs.</p>

<h2>When do you need to register for GST in Australia?</h2>
<p>According to the ATO's <a href="https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst" target="_blank" rel="noopener noreferrer">registering for GST</a> page, you must register if you are carrying on an enterprise and any of the following apply:</p>
<ul>
<li>your GST turnover is $75,000 or more (current or projected);</li>
<li>you are a non-profit organisation with GST turnover of $150,000 or more;</li>
<li>you provide taxi or limousine travel, including ride-sourcing, regardless of turnover;</li>
<li>you want to claim fuel tax credits.</li>
</ul>
<p>You must register within 21 days of becoming required to. Non-resident businesses selling to Australian consumers have their own simplified registration rules.</p>

<h3>How to work out GST turnover</h3>
<p>GST turnover is your gross business income, excluding GST, input-taxed sales, sales not connected with your business and sales not made for payment. You reach the threshold under either test:</p>
<table>
<thead><tr><th>Test</th><th>Period</th><th>You must register if</th></tr></thead>
<tbody>
<tr><td>Current GST turnover</td><td>This month plus the previous 11 months</td><td>The total is $75,000 or more</td></tr>
<tr><td>Projected GST turnover</td><td>This month plus the next 11 months</td><td>The total is likely to be $75,000 or more</td></tr>
</tbody>
</table>
<p>The projected test catches fast-growing businesses early. If you sign a $90,000 contract in your first month, your projected turnover is already over the threshold, so you need to register within 21 days, even though you have not earned $75,000 yet.</p>

<h3>Worked example of the turnover test</h3>
<p>Raj started a consulting business in July 2025. His monthly sales (excluding GST) averaged $5,500 until March 2026, then rose to $8,000 from April. At the end of June 2026, his 12-month total is 9 x $5,500 plus 3 x $8,000, or $73,500, still under $75,000. But in June he can reasonably project $8,000 a month for the next 12 months, or $96,000. Under the projected turnover test he has reached the threshold and must register within 21 days.</p>

<h2>How to register for GST in Australia: step by step</h2>
<ol>
<li><strong>Get an ABN.</strong> You cannot register for GST without one. If you do not have one, our guide on <a href="/blog/how-to-get-an-abn">how to get an ABN</a> covers the free application, and you can register for GST in the same form.</li>
<li><strong>Choose how to register.</strong> Use Online services for business, the Australian Business Register website, a registered tax or BAS agent, or phone the ATO.</li>
<li><strong>Pick your effective date.</strong> For required registration, it is the date you reached the threshold. Voluntary registrants can usually choose a date.</li>
<li><strong>Choose your accounting method.</strong> Cash or accrual (non-cash). Most small businesses with aggregated turnover under $10 million can use cash.</li>
<li><strong>Choose your reporting cycle.</strong> Quarterly is the default for small businesses. Monthly is required if GST turnover is $20 million or more and can be chosen voluntarily. Annual is available to voluntary registrants under $75,000.</li>
<li><strong>Update prices and invoices.</strong> Decide whether to absorb GST or add it on, and change invoices to tax invoices from your effective date.</li>
</ol>

<h2>What is a BAS and when is it due?</h2>
<p>The business activity statement (BAS) is the form you use to report and pay GST, plus other taxes such as PAYG instalments and PAYG withholding for employees. For GST you report total sales (G1), GST on sales (1A) and GST on purchases (1B), and pay or receive the difference.</p>
<table>
<thead><tr><th>Quarter</th><th>Period</th><th>Standard due date</th></tr></thead>
<tbody>
<tr><td>Quarter 1</td><td>July to September</td><td>28 October</td></tr>
<tr><td>Quarter 2</td><td>October to December</td><td>28 February</td></tr>
<tr><td>Quarter 3</td><td>January to March</td><td>28 April</td></tr>
<tr><td>Quarter 4</td><td>April to June</td><td>28 July</td></tr>
</tbody>
</table>
<p>Monthly BAS is generally due on the 21st of the following month. Lodging through a registered tax or BAS agent can give you extra time on quarterly due dates. When a due date falls on a weekend or public holiday, you can lodge and pay on the next business day. Late lodgment can attract a failure to lodge penalty, and unpaid amounts accrue the general interest charge.</p>

<h3>Worked BAS example</h3>
<p>Raj's first full quarter after registering is July to September 2026. He invoices $26,400 including GST and buys a laptop and software for $3,300 including GST.</p>
<table>
<thead><tr><th>BAS item</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>G1 Total sales (incl. GST)</td><td>From invoices</td><td>$26,400</td></tr>
<tr><td>1A GST on sales</td><td>$26,400 / 11</td><td>$2,400</td></tr>
<tr><td>1B GST on purchases</td><td>$3,300 / 11</td><td>$300</td></tr>
<tr><td>Net GST payable</td><td>$2,400 - $300</td><td>$2,100</td></tr>
</tbody>
</table>
<p>Raj lodges and pays $2,100 by 28 October. Dividing a GST-inclusive amount by 11 gives the GST component. For quick checks, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> handles 10% GST in both directions, and our <a href="/blog/reverse-sales-tax-calculation">reverse tax calculation</a> article shows the formula.</p>

<h2>What changes on your invoices after GST registration?</h2>
<p>Once registered, you issue tax invoices for taxable sales. A customer who asks for a tax invoice for a sale over $82.50 (including GST) must receive one within 28 days. A tax invoice generally needs to show that it is intended to be a tax invoice, your identity and ABN, the date, a brief description of items sold, the GST amount (or that the total includes GST), and for sales of $1,000 or more, the buyer's identity or ABN. Our <a href="/blog/australia-tax-invoice-requirements">Australian tax invoice requirements guide</a> goes through each element.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Unit price (ex GST)</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Business process review workshop</td><td>1</td><td>$4,500.00</td><td>$4,500.00</td></tr>
<tr><td>Follow-up consulting (hours)</td><td>12</td><td>$180.00</td><td>$2,160.00</td></tr>
<tr><td>Written recommendations report</td><td>1</td><td>$1,340.00</td><td>$1,340.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>$8,000.00</td></tr>
<tr><td colspan="3"><strong>GST 10%</strong></td><td>$800.00</td></tr>
<tr><td colspan="3"><strong>Total (incl. GST)</strong></td><td>$8,800.00</td></tr>
</tbody>
</table>
<p>The header would read "Tax invoice" with Raj's ABN, the client's business name and ABN (because the sale is over $1,000), the invoice number and the date. Set your GST rate and ABN once in the <a href="/invoice-generator">free invoice generator</a> and every tax invoice calculates the 10% for you.</p>

<h2>How should you price after registering for GST?</h2>
<p>Australian consumer law requires prices advertised to consumers to include GST, so shops and consumer-facing services generally quote GST-inclusive prices. Business-to-business quotes are often written as a price plus GST, as long as the total is clear. When you register, you have three broad options for existing prices:</p>
<table>
<thead><tr><th>Option</th><th>Price before registration</th><th>Price after registration</th><th>Your income (ex GST)</th></tr></thead>
<tbody>
<tr><td>Add GST on top</td><td>$1,000</td><td>$1,100 incl. GST</td><td>$1,000.00</td></tr>
<tr><td>Absorb GST</td><td>$1,000</td><td>$1,000 incl. GST</td><td>$909.09</td></tr>
<tr><td>Split the difference</td><td>$1,000</td><td>$1,050 incl. GST</td><td>$954.55</td></tr>
</tbody>
</table>
<p>Business clients registered for GST will usually accept the first option because they claim the $100 back. Consumers bear the full increase, so many consumer businesses absorb part of it. Whatever you choose, show the subtotal, GST and total clearly so the client understands the bill; our explainer on <a href="/blog/net-vs-gross-amount-on-invoice">net vs gross amounts on an invoice</a> covers the labels to use. If you give a discount, apply it before calculating GST, as our <a href="/blog/tax-invoice-guide">tax invoice guide</a> shows.</p>
<p>Tell existing clients about the change before your first GST invoice, ideally in writing with the effective date. For retainers and recurring work, update each recurring invoice so the GST line starts from the right billing period.</p>

<h2>Should you register for GST voluntarily?</h2>
<ul>
<li><strong>Business customers</strong> can claim the GST you charge as a credit, so adding 10% rarely puts them off.</li>
<li><strong>Consumer customers</strong> cannot, so you either raise prices by 10% or absorb the GST and earn less.</li>
<li><strong>High setup costs</strong> such as equipment, vehicles or fit-outs mean bigger GST credits.</li>
<li><strong>Admin</strong> increases: BAS lodgment, tax invoices and more careful record keeping.</li>
<li><strong>Annual reporting</strong> is available for voluntary registrants under $75,000, which keeps the extra admin light.</li>
</ul>

<h2>What records do GST-registered businesses need to keep?</h2>
<p>The ATO generally expects you to keep records that explain your GST position for five years. That includes copies of the tax invoices you issue, tax invoices from suppliers for purchases where you claim GST credits, adjustment notes for refunds and price changes, bank statements, and the working papers behind each BAS. Records can be paper or digital, but they must be in English or easily converted, and they must show how you calculated each label on the activity statement. If a customer returns goods or you give a later discount, issue an adjustment note rather than changing the original invoice; our <a href="/blog/credit-note-guide">credit note guide</a> explains the same principle in general terms. Keeping invoices numbered in one unbroken sequence makes your BAS easy to reconcile with your bank deposits.</p>

<h2>Common GST registration mistakes</h2>
<ul>
<li><strong>Ignoring projected turnover.</strong> Looking only at the past 12 months misses the forward-looking test.</li>
<li><strong>Forgetting the 21-day deadline.</strong> Late registration can be backdated, with GST owed on past sales.</li>
<li><strong>Not repricing.</strong> If your price stays the same after registration, one eleventh of every GST-inclusive sale now goes to the ATO.</li>
<li><strong>Claiming credits without tax invoices.</strong> For purchases over $82.50 including GST, you generally need a valid tax invoice before claiming.</li>
<li><strong>Charging GST on GST-free or input-taxed sales.</strong> Classify each product or service correctly.</li>
<li><strong>Spending GST collected.</strong> Keep the GST portion of each payment in a separate account until BAS time. Our <a href="/blog/cash-flow-management">cash flow management guide</a> has practical systems.</li>
</ul>

<h2>GST registration checklist</h2>
<ul>
<li>Check current and projected GST turnover every month.</li>
<li>Get an ABN, then register for GST within 21 days of reaching $75,000.</li>
<li>Choose cash or accrual accounting and a reporting cycle.</li>
<li>Update prices, quotes and invoice templates to show GST and "Tax invoice".</li>
<li>Diary BAS due dates and set aside GST from every payment.</li>
<li>Keep tax invoices for purchases and records for five years.</li>
</ul>
<p>For how Australia's GST compares to VAT and US sales tax, see our <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST comparison</a>.</p>
<p>After GST registration in Australia, every invoice you send needs to be a correct tax invoice. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a downloadable PDF in your browser with your ABN, GST line and totals already worked out.</p>
`,
  },
  {
    slug: "gst-late-fee-india",
    title: "GST Late Fee: GSTR-3B and GSTR-1 Penalty and Interest",
    description:
      "GST late fee rules for GSTR-3B and GSTR-1: Rs 50 and Rs 20 per day, turnover-based caps, 18% interest, GSTR-9 fees, worked examples and how to pay.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: ["gst-return-filing-india", "gstr-1-vs-gstr-3b", "gst-registration-india"],
    faqs: [
      {
        q: "Can the GST late fee be waived?",
        a: "Late fees are waived or capped only when the government issues a notification, usually as part of an amnesty scheme or relief measure, as happened with the 2021 amnesty for older GSTR-3B returns. There is no general application to waive a late fee for an individual taxpayer. The portal calculates the fee automatically from the due date and filing date, so the practical way to avoid it is to file on time.",
      },
      {
        q: "Why does the GST late fee show under CGST and SGST?",
        a: "The late fee is levied under Section 47 of the CGST Act and the matching provision of each State or Union Territory GST Act, so the portal splits it into two equal heads, CGST and SGST (or UTGST). The per-day rates and caps quoted in most guides, including this one, are the combined totals. Deposit the cash under both fee heads when you create your PMT-06 challan, as the portal shows.",
      },
      {
        q: "Can I pay GST late fee using input tax credit?",
        a: "No. Late fees, like interest and penalties, must be paid in cash from the electronic cash ledger. Input tax credit in the electronic credit ledger can be used only for output tax liability. Make sure enough cash is deposited through a PMT-06 challan, under the CGST and SGST late fee heads, before you try to file the return, or the filing will not go through.",
      },
      {
        q: "Is the GST late fee an allowable business expense for income tax?",
        a: "This is a debated area. Explanation 1 to Section 37(1) of the Income-tax Act, 1961 disallows expenses incurred for any purpose that is an offence or prohibited by law, and courts and tribunals have taken different views on whether GST late fees are compensatory or penal. Interest on delayed tax is more commonly allowed. Ask your chartered accountant how to treat it in your books.",
      },
      {
        q: "What is the due date for GSTR-3B and GSTR-1?",
        a: "For monthly filers, GSTR-1 is generally due on the 11th of the following month and GSTR-3B on the 20th. Taxpayers under the QRMP scheme file GSTR-1 quarterly by the 13th of the month after the quarter, and GSTR-3B by the 22nd or 24th depending on their state. The government sometimes extends due dates, so check the GST portal for the period you are filing.",
      },
      {
        q: "What happens if I do not file GST returns for a long time?",
        a: "Apart from accumulating late fees and interest, the proper officer can cancel your registration if you fail to furnish returns for a continuous period specified in the rules (six months for regular taxpayers). Your buyers may also lose input tax credit because your invoices will not reach their GSTR-2B. In addition, returns cannot be filed after three years from their due date.",
      },
      {
        q: "Is there a late fee for not filing nil GSTR-3B?",
        a: "Yes. Even if you had no sales and no purchases, you must file a nil GSTR-3B for every period while your registration is active. The late fee for a nil return is Rs 20 per day (Rs 10 CGST plus Rs 10 SGST), capped at Rs 500 per return. Nil returns can be filed easily through the portal or by SMS, so there is little reason to pay this fee.",
      },
      {
        q: "Does interest apply if I only file GSTR-1 late?",
        a: "No interest arises from a late GSTR-1 alone, because GSTR-1 is a statement of outward supplies and no tax is paid through it. Only the late fee applies. Interest arises when the tax itself is paid late, which happens through GSTR-3B. However, a late GSTR-1 can delay your customers' input tax credit, which can damage business relationships.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The GST late fee for filing GSTR-3B or GSTR-1 after the due date is Rs 50 per day (Rs 25 CGST plus Rs 25 SGST), or Rs 20 per day for nil returns. It is capped at Rs 500 for nil returns and Rs 2,000, Rs 5,000 or Rs 10,000 for others depending on turnover. Late tax payment also attracts 18% annual interest.</p>

<p>Missing a GST return deadline in India costs money in two ways: a fixed GST late fee for every day the return is late, and interest on any tax paid late. The amounts look small per day, but they add up across months and returns, and they must be paid in cash. This guide explains the late fee for GSTR-3B, GSTR-1 and GSTR-9, how the turnover-based caps work, how interest is calculated, and how to avoid both, with worked examples.</p>

<p><em>This is general information, not legal or tax advice. Fee notifications change; confirm current amounts on the GST portal or CBIC website, or with a chartered accountant.</em></p>

<h2>What is the GST late fee?</h2>
<p>The late fee is a charge under Section 47 of the Central Goods and Services Tax (CGST) Act, 2017, levied when a registered person files a return after its due date. The Act sets a higher statutory fee, but the government has reduced it by notification. For GSTR-3B, Notification No. 19/2021-Central Tax (and for GSTR-1, Notification No. 20/2021-Central Tax), both dated 1 June 2021, set the current per-day rates and caps from the June 2021 tax period onward.</p>
<p>The fee is charged equally under CGST and SGST (or UTGST), so every amount in this guide is the combined total, half under each head. The GST portal calculates it automatically when you file late; you cannot file the return until it is paid.</p>

<h3>Late fee vs interest vs penalty</h3>
<table>
<thead><tr><th>Charge</th><th>Legal basis</th><th>When it applies</th><th>How it is calculated</th></tr></thead>
<tbody>
<tr><td>Late fee</td><td>Section 47, CGST Act</td><td>Return filed after due date</td><td>Fixed amount per day of delay, with caps</td></tr>
<tr><td>Interest</td><td>Section 50, CGST Act</td><td>Tax paid after due date</td><td>18% per annum on net tax paid in cash, for days of delay</td></tr>
<tr><td>Penalty</td><td>Section 122 and others</td><td>Specific offences, such as issuing invoices without supply or evading tax</td><td>Set by the section, through proceedings by an officer</td></tr>
</tbody>
</table>

<h2>How much is the late fee for GSTR-3B?</h2>
<p>GSTR-3B is the summary return through which you declare and pay tax. Its late fee depends on whether the return has any tax liability and on your aggregate turnover in the preceding financial year. The caps below come from Notification 19/2021-CT, as summarized by the <a href="https://tutorial.gst.gov.in/downloads/news/newfunctionalities_compilationaugust2021.pdf" target="_blank" rel="noopener noreferrer">GST portal</a>.</p>
<table>
<thead><tr><th>Category</th><th>Late fee per day (CGST + SGST)</th><th>Maximum per return</th></tr></thead>
<tbody>
<tr><td>Nil return (no tax payable)</td><td>Rs 20 (Rs 10 + Rs 10)</td><td>Rs 500</td></tr>
<tr><td>Aggregate turnover up to Rs 1.5 crore</td><td>Rs 50 (Rs 25 + Rs 25)</td><td>Rs 2,000</td></tr>
<tr><td>Aggregate turnover above Rs 1.5 crore up to Rs 5 crore</td><td>Rs 50 (Rs 25 + Rs 25)</td><td>Rs 5,000</td></tr>
<tr><td>Aggregate turnover above Rs 5 crore</td><td>Rs 50 (Rs 25 + Rs 25)</td><td>Rs 10,000</td></tr>
</tbody>
</table>
<p>The fee runs from the day after the due date up to the date you actually file. A GSTR-3B due on the 20th and filed on the 30th of the same month is 10 days late.</p>

<h2>How much is the late fee for GSTR-1?</h2>
<p>GSTR-1 reports your outward supplies invoice by invoice. Its late fee follows the same pattern: Rs 20 per day for nil returns, with a Rs 500 cap, and Rs 50 per day for others, with caps of Rs 2,000, Rs 5,000 and Rs 10,000 based on the same turnover slabs. Since no tax is paid in GSTR-1, a late GSTR-1 does not attract interest. It does, however, delay your buyers' input tax credit because your invoices will not appear in their GSTR-2B on time, and the portal may block a later GSTR-1 until the earlier one is filed. Our <a href="/blog/gstr-1-vs-gstr-3b">GSTR-1 vs GSTR-3B comparison</a> explains how the two returns fit together.</p>

<h2>What is the late fee for GSTR-9 annual return?</h2>
<p>For annual returns from FY 2022-23 onward, the late fee for GSTR-9 depends on turnover. Under Notification No. 07/2023-Central Tax, the combined CGST and SGST fee is generally Rs 50 per day (capped at 0.04% of turnover in the state) for turnover up to Rs 5 crore, Rs 100 per day (capped at 0.04%) for Rs 5 crore to Rs 20 crore, and Rs 200 per day (capped at 0.5%) above Rs 20 crore. GSTR-9 is optional for taxpayers with turnover up to Rs 2 crore for the years the government has exempted. Check the portal for the year you are filing.</p>

<h2>How is interest on late GST payment calculated?</h2>
<p>Interest under Section 50(1) is charged at 18% per year on tax paid after the due date. Since 1 July 2017 (by retrospective amendment), interest is charged only on the portion of tax paid in cash through the electronic cash ledger, not on tax discharged using input tax credit, except where a return is filed after a proceeding under Section 73 or 74. The formula is:</p>
<p><strong>Interest = Net cash tax liability x 18% x days of delay / 365</strong></p>
<p>Interest is calculated from the day after the due date to the day the tax is paid. The portal pre-fills a computed interest amount in GSTR-3B for some periods, but the responsibility to pay the correct amount stays with you. Separately, wrongly availed input tax credit that is used to pay tax also attracts interest under Section 50(3).</p>

<h2>Worked example: GSTR-3B late fee and interest</h2>
<p>Priya runs a design studio with aggregate turnover of Rs 85 lakh in the previous financial year. She files monthly. Her GSTR-3B for July is due on 20 August, but she files and pays on 4 September, 15 days late. Her total output tax is Rs 64,000, of which Rs 24,000 is set off with ITC and Rs 40,000 is paid in cash.</p>
<table>
<thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Days late</td><td>21 August to 4 September</td><td>15 days</td></tr>
<tr><td>Late fee</td><td>15 x Rs 50 (cap Rs 2,000 not reached)</td><td>Rs 750 (Rs 375 CGST + Rs 375 SGST)</td></tr>
<tr><td>Interest</td><td>Rs 40,000 x 18% x 15 / 365</td><td>Rs 296 (rounded)</td></tr>
<tr><td>Total extra cost</td><td>Rs 750 + Rs 296</td><td>Rs 1,046</td></tr>
</tbody>
</table>
<p>If Priya had also filed her GSTR-1 for July (due 11 August) on 4 September, that is 24 days late, adding Rs 1,200 (24 x Rs 50) in GSTR-1 late fees. Had the delay run to 40 days or more, each return's fee would have hit the Rs 2,000 cap for her turnover slab, but interest would have kept running until the tax was paid.</p>

<h2>How to pay GST late fee on the portal</h2>
<ol>
<li><strong>Log in</strong> to the GST portal and open the return for the period.</li>
<li><strong>Check the computed late fee</strong> in the payment section of GSTR-3B (or the late fee tile in GSTR-1). The system calculates it from the filing date.</li>
<li><strong>Check your electronic cash ledger.</strong> If the balance is not enough for the late fee, interest and cash tax, create a challan in Form PMT-06.</li>
<li><strong>Deposit the cash</strong> under the correct heads: Fee under CGST and SGST, Interest under the relevant tax heads, and Tax. Pay by net banking, UPI, card, NEFT/RTGS or over the counter.</li>
<li><strong>Offset liabilities</strong> in GSTR-3B. Late fee and interest can only be paid from the cash ledger.</li>
<li><strong>File the return</strong> with DSC or EVC, and download the acknowledgement.</li>
</ol>

<h2>How late GST filing affects your customers</h2>
<p>Late returns hurt more than your own cash. Your business customers can generally claim input tax credit only for invoices that appear in their GSTR-2B, which is generated from the GSTR-1 data suppliers file. If your GSTR-1 is late, their credit for those invoices moves to a later period, and if you never file it, they may be unable to claim it at all. Many larger buyers track supplier filing status and hold payments for suppliers who file late.</p>
<p>The Invoice Management System on the GST portal also lets recipients accept, reject or keep pending the invoices you report, so accurate and timely GSTR-1 data reduces disputes. Our guide to the <a href="/blog/gst-invoice-management-system">GST Invoice Management System</a> explains how buyers act on your invoices. If your turnover crosses the e-invoicing limit, invoices reported through the Invoice Registration Portal flow into GSTR-1 automatically; see the <a href="/blog/india-e-invoice-limit">e-invoice limit in GST</a> for who must comply.</p>
<p>Some sellers issue the wrong document type and then struggle to report it correctly. Composition dealers and suppliers of exempt goods issue a <a href="/blog/bill-of-supply-gst">bill of supply</a> instead of a tax invoice, and those supplies are still reported, just without tax. Getting the document right at the start saves correction work at return time.</p>

<h2>The three-year time limit for filing GST returns</h2>
<p>Under amendments made by the Finance Act, 2023, a registered person cannot furnish GSTR-1, GSTR-3B, GSTR-9 and certain other returns after three years from the due date. The GST Network has enforced this on the portal, so very old pending returns can become impossible to file, which can create problems for cancellation of registration and for your buyers' credit. If you have pending returns, file the oldest ones first, because returns must be filed in sequence.</p>

<h2>Common mistakes that lead to GST late fees</h2>
<ul>
<li><strong>Skipping nil returns.</strong> Nil GSTR-1 and GSTR-3B must still be filed every period.</li>
<li><strong>Assuming the cap covers several months.</strong> The cap applies per return, so six late returns can mean six capped fees.</li>
<li><strong>Waiting for buyer payments.</strong> GST is due on supply, usually at invoice time, not when the customer pays.</li>
<li><strong>Trying to pay with ITC.</strong> Late fees and interest must be paid in cash.</li>
<li><strong>Wrong turnover slab.</strong> The cap depends on the previous financial year's aggregate turnover across all GSTINs on the same PAN.</li>
<li><strong>Not reconciling invoices.</strong> Missing or mismatched invoice data delays filing. Number invoices sequentially and keep a clean sales register.</li>
</ul>

<h2>Checklist to avoid GST late fees</h2>
<ul>
<li>Set reminders for the 11th (GSTR-1) and 20th (GSTR-3B), or the QRMP dates if applicable.</li>
<li>Issue GST invoices promptly and record them daily. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> lists the mandatory fields.</li>
<li>Reconcile purchases with GSTR-2B before filing GSTR-3B. See <a href="/blog/input-tax-credit-gst">input tax credit under GST</a> for the conditions.</li>
<li>Keep enough cash in the electronic cash ledger a few days before the due date.</li>
<li>File nil returns on time.</li>
<li>If you are small, consider whether the <a href="/blog/gst-composition-scheme">GST composition scheme</a> or QRMP would reduce your filing load.</li>
</ul>
<p>For full due dates and the filing process, read our guide to <a href="/blog/gst-return-filing-india">GST return filing in India</a>. If you are not yet registered, start with <a href="/blog/gst-registration-india">GST registration in India</a>. Exporters should also read about the <a href="/blog/lut-under-gst">LUT under GST</a>, because a missed LUT can mean paying IGST on exports. Once your invoices are ready, the <a href="/invoice-generator">invoice generator</a> lets you produce each one in a minute.</p>
<p>The easiest way to avoid a GST late fee is to have accurate invoices ready long before the due date. Our <a href="/invoice-generator">free invoice generator</a> needs no sign-up, lets you add your GSTIN, HSN or SAC codes and GST rates, and downloads a PDF built in your browser. You can also browse <a href="/invoice-templates">invoice templates</a> for a GST-ready layout.</p>
`,
  },
];
