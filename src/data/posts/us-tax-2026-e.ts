import type { PostDraft } from "../blog";

export const US_TAX_2026_E_POSTS: PostDraft[] = [
  {
    slug: "how-to-file-taxes-as-an-llc",
    title: "How to File Taxes for an LLC: 2026 Guide for Every LLC Type",
    description:
      "How to file taxes for an LLC in 2026: which forms single-member, multi-member and S corp LLCs use, 2027 deadlines, self-employment tax and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "llc-vs-sole-proprietorship",
      "s-corp-vs-llc",
      "schedule-c-for-freelancers",
      "self-employment-tax",
    ],
    faqs: [
      {
        q: "Does an LLC file its own tax return?",
        a: "It depends on how the IRS classifies it. A single-member LLC is disregarded by default, so it does not file a separate federal income tax return: the owner reports the business on Schedule C of Form 1040. A multi-member LLC is a partnership by default and files Form 1065. An LLC that elects S corporation status files Form 1120-S, and one taxed as a C corporation files Form 1120.",
      },
      {
        q: "How do I file taxes for a single-member LLC?",
        a: "Report the LLC's income and expenses on Schedule C attached to your personal Form 1040, then calculate self-employment tax on Schedule SE. The net profit flows to your personal return and is taxed at your individual rates. You pay during the year through quarterly estimated payments with Form 1040-ES. For the 2026 tax year, the return is due April 15, 2027, unless you file Form 4868 for an extension.",
      },
      {
        q: "When are LLC taxes due in 2027?",
        a: "For calendar-year businesses filing 2026 returns: single-member LLCs filing on Form 1040 are due April 15, 2027. Multi-member LLCs filing Form 1065 and LLCs taxed as S corporations filing Form 1120-S are due March 15, 2027. LLCs taxed as C corporations filing Form 1120 are due April 15, 2027. Form 7004 extends business returns by six months, but not the time to pay tax.",
      },
      {
        q: "Do LLC owners pay self-employment tax?",
        a: "Yes, in most cases. Members of a single-member LLC and active members of a multi-member LLC taxed as a partnership generally pay self-employment tax of 15.3% on net earnings: 12.4% Social Security up to the $184,500 wage base for 2026 and 2.9% Medicare on everything. LLCs taxed as S corporations pay owners a salary through payroll instead, and remaining profit is not subject to self-employment tax.",
      },
      {
        q: "What happens if a multi-member LLC files Form 1065 late?",
        a: "The IRS charges a late filing penalty for each month or part of a month the return is late, up to 12 months, multiplied by the number of partners. For returns required to be filed in 2027, Rev. Proc. 2025-32 sets the amount at $260 per partner per month. A two-member LLC that files three months late could face $1,560 even if it owes no tax, so file Form 7004 if you need more time.",
      },
      {
        q: "Should my LLC elect S corporation status?",
        a: "It can save self-employment tax once profit is high enough to pay yourself a reasonable salary and still leave meaningful profit as distributions. The trade-off is payroll, a separate Form 1120-S return and more bookkeeping cost. To take effect for a tax year, Form 2553 must be filed no more than 2 months and 15 days after the start of that year, or at any time in the prior year.",
      },
      {
        q: "Does an LLC need an EIN to file taxes?",
        a: "A multi-member LLC, an LLC taxed as a corporation and any LLC with employees needs an EIN. A single-member LLC with no employees can usually report under the owner's Social Security number for income tax, though many owners get a free EIN anyway to put on W-9 forms and invoices instead of their SSN. Single-member LLCs are treated as separate entities for employment and certain excise taxes.",
      },
      {
        q: "Do LLCs pay state taxes too?",
        a: "Usually, yes. Most states with an income tax follow the federal classification, so a single-member LLC's profit shows up on the owner's state return and a partnership LLC files a state partnership return. Many states also charge an annual LLC fee, franchise tax or report fee regardless of profit. Some states and cities add gross receipts taxes. Check your state's revenue department for current rules and due dates.",
      },
      {
        q: "Can an LLC deduct the 20% QBI deduction?",
        a: "Owners of LLCs taxed as sole proprietorships, partnerships or S corporations may qualify for the qualified business income deduction under Section 199A, which the One Big Beautiful Bill Act made permanent. It is claimed on the owner's personal return, not the LLC's. Income limits and rules for specified service businesses apply, and LLCs taxed as C corporations do not get it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> How to file taxes for an LLC depends on how the IRS classifies it. A single-member LLC reports on Schedule C of the owner's Form 1040. A multi-member LLC files Form 1065 and issues K-1s. An LLC that elected S corporation status files Form 1120-S, and one taxed as a C corporation files Form 1120.</p>

<p>An LLC is a state law entity, not a federal tax category. That is the single most important thing to understand before you file. The IRS taxes your LLC as a sole proprietorship, partnership or corporation, and the forms, deadlines and tax bill all follow from that choice. This guide walks through how to file taxes for an LLC of every type for the 2026 tax year (filed in 2027), with deadlines, a step-by-step checklist and a worked example. If you bill clients through your LLC, clean records start with consistent invoices from our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax advice. State rules vary, and an LLC's best tax setup depends on your income, state and plans. Speak to a qualified tax professional about your situation.</p>

<h2>How the IRS classifies an LLC</h2>
<p>According to the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener noreferrer">IRS guidance on limited liability companies</a>, a domestic LLC gets a default classification based on its number of members:</p>
<ul>
<li><strong>One member:</strong> disregarded as separate from its owner for income tax. If the owner is an individual, the LLC is taxed like a sole proprietorship.</li>
<li><strong>Two or more members:</strong> classified as a partnership.</li>
</ul>
<p>Either type can change its classification. Filing Form 8832 lets an LLC elect to be taxed as a corporation, and filing Form 2553 lets an eligible LLC elect S corporation status. The IRS notes that an 8832 election cannot take effect more than 75 days before it is filed or more than 12 months after. If you are still choosing a structure, our comparisons of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> explain the trade-offs.</p>

<h2>Which form each type of LLC files</h2>
<table>
<thead><tr><th>LLC tax classification</th><th>Federal return</th><th>Owner reporting</th><th>2026 return due (calendar year)</th></tr></thead>
<tbody>
<tr><td>Single-member (default)</td><td>No separate return: Schedule C with Form 1040</td><td>Schedule C and Schedule SE</td><td>April 15, 2027</td></tr>
<tr><td>Multi-member (default partnership)</td><td>Form 1065</td><td>Schedule K-1 to each member</td><td>March 15, 2027</td></tr>
<tr><td>Elected S corporation</td><td>Form 1120-S</td><td>Schedule K-1 plus W-2 wages</td><td>March 15, 2027</td></tr>
<tr><td>Elected C corporation</td><td>Form 1120</td><td>W-2 wages and dividends</td><td>April 15, 2027</td></tr>
</tbody>
</table>
<p>These dates follow the IRS rules in Publication 509: partnership and S corporation returns are due on the 15th day of the third month after the tax year ends, and individual and C corporation returns on the 15th day of the fourth month. March 15, 2027 is a Monday and April 15, 2027 a Thursday, so no weekend shift applies. Form 7004 extends business returns by six months and Form 4868 extends Form 1040, but neither extends the time to pay.</p>

<h2>How to file taxes for a single-member LLC</h2>
<p>Single-member LLC taxes are the simplest version. The IRS ignores the LLC for income tax, so you report the business as if you were a sole proprietor:</p>
<ul>
<li><strong>Schedule C</strong> shows gross receipts, cost of goods sold and expenses. Our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> walks through it line by line, and our list of <a href="/blog/business-expense-categories">business expense categories</a> maps costs to each line.</li>
<li><strong>Schedule SE</strong> calculates <a href="/blog/self-employment-tax">self-employment tax</a> on your net earnings.</li>
<li><strong>Form 1040</strong> picks up the net profit, half of the self-employment tax as an adjustment and, if you qualify, the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a>.</li>
</ul>
<p>Because no one withholds tax from your LLC's income, you are expected to pay during the year with <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>. The final 2026 installment is due January 15, 2027. Missing installments can trigger an underpayment penalty even if you pay everything in April, so many owners move a fixed share of every client payment into a separate tax savings account the day it arrives.</p>
<h3>Self-employment tax for 2026</h3>
<p>Self-employment tax is 15.3%: 12.4% for Social Security on net earnings up to the 2026 wage base of $184,500, and 2.9% for Medicare with no cap. It applies to 92.35% of your net profit, and you deduct half of it on Form 1040. This is often the largest piece of a profitable single-member LLC's bill, which is why S corporation elections come up so often.</p>

<h2>How to file taxes for a multi-member LLC</h2>
<p>A multi-member LLC taxed as a partnership does not pay federal income tax itself. Instead it files an information return and passes profit through to the members:</p>
<ol>
<li>Prepare Form 1065 with the LLC's income, deductions and balance sheet details.</li>
<li>Allocate profit or loss to members according to the operating agreement.</li>
<li>Issue each member a Schedule K-1 by the Form 1065 due date.</li>
<li>Each member reports their K-1 share on their own return and generally pays self-employment tax on it if they are active in the business.</li>
</ol>
<p>Members owe tax on their share of profit whether or not the LLC actually distributes the cash. Plan distributions so each member can cover their own estimated payments.</p>
<h3>Late filing penalty for Form 1065</h3>
<p>Partnership returns carry a penalty even when no tax is due. For returns required to be filed in 2027, IRS Rev. Proc. 2025-32 sets the penalty at $260 per partner for each month or part of a month the return is late, for up to 12 months. If you cannot finish by March 15, file Form 7004 on time.</p>

<h2>How to file taxes for an LLC taxed as an S corp or C corp</h2>
<p>An LLC that elected S corporation status files Form 1120-S. Owners who work in the business must be paid a reasonable salary through payroll, with income tax and FICA withheld. Remaining profit passes through on a K-1 and is not subject to self-employment tax. That is the main saving, offset by payroll costs, quarterly payroll filings and a separate return. To be effective for a given year, the IRS instructions say Form 2553 must be filed no more than 2 months and 15 days after the start of that tax year, or at any time during the prior year.</p>
<p>An LLC taxed as a C corporation files Form 1120 and pays corporate income tax at the entity level. Profits paid out as dividends are taxed again on the owner's return. Few small service businesses choose this, but it can suit companies that plan to reinvest most profit.</p>
<p>For owners deciding between salary and draws, our sibling guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> covers each structure.</p>

<h2>Step-by-step: how to file your LLC's 2026 taxes</h2>
<ol>
<li><strong>Confirm your classification.</strong> Check whether you filed Form 8832 or 2553. If not, you are on the default.</li>
<li><strong>Close your books for 2026.</strong> Reconcile bank accounts, match every payment to an invoice and chase anything unpaid before December 31 if you use cash accounting.</li>
<li><strong>Collect 1099s and issue your own.</strong> Clients may send 1099-NEC forms, and if you paid contractors $2,000 or more in 2026 you may need to file them. See <a href="/blog/how-to-file-1099-nec">how to file 1099-NEC</a>.</li>
<li><strong>Categorize expenses.</strong> Group costs to match the return's expense lines and keep receipts.</li>
<li><strong>Prepare the right return.</strong> Schedule C, Form 1065, Form 1120-S or Form 1120.</li>
<li><strong>Issue K-1s</strong> to members or shareholders if you file 1065 or 1120-S.</li>
<li><strong>File and pay by the deadline</strong>, or file an extension and still pay what you expect to owe.</li>
<li><strong>File state returns and annual reports.</strong> Most states have their own LLC fee or report, separate from income tax.</li>
<li><strong>Set up 2027 estimated payments</strong> based on this year's result.</li>
</ol>

<h2>Worked example: single-member vs two-member LLC</h2>
<p><strong>Single-member LLC.</strong> Dana runs a design studio as a single-member LLC with no elections. In 2026 she invoiced $95,000 and had $23,000 of deductible expenses, so her Schedule C net profit is $72,000.</p>
<ul>
<li>Net earnings for self-employment: $72,000 x 92.35% = $66,492.</li>
<li>Self-employment tax: $66,492 x 15.3% = $10,173.28 (all under the $184,500 wage base).</li>
<li>Deduction for half of SE tax on Form 1040: $5,086.64.</li>
</ul>
<p>Dana's income tax is then figured on her total income after that adjustment, her standard or itemized deduction and any QBI deduction. Our sibling post on <a href="/blog/federal-tax-brackets-2026">2026 federal tax brackets</a> shows the rates.</p>
<p><strong>Two-member LLC.</strong> Omar and Lena own a consulting LLC 60/40 with no elections. Its 2026 profit is $120,000. The LLC files Form 1065 and issues K-1s showing $72,000 for Omar and $48,000 for Lena. Each reports their share on their own return and pays self-employment tax on it. If the LLC filed Form 1065 three months late without an extension, the penalty would be 2 partners x $260 x 3 months = $1,560.</p>

<h2>Records and invoices that make LLC taxes easier</h2>
<p>Whatever your classification, the IRS expects you to support income and deductions. Good habits include:</p>
<ul>
<li>Invoicing under the LLC's legal name, with the LLC's <a href="/blog/how-to-get-an-ein">EIN</a> where appropriate, so income ties to the entity and you do not have to share your Social Security number with clients.</li>
<li>Using sequential invoice numbers so gaps are easy to spot and every deposit matches a sale.</li>
<li>Keeping business and personal money in separate accounts, which also supports the liability protection an LLC is meant to give you.</li>
<li>Recording owner draws and contributions separately from income and expenses, so your profit figure is not distorted.</li>
<li>Keeping invoices, receipts, mileage logs and returns for as long as the IRS can examine them, and longer for asset purchases you are still depreciating.</li>
</ul>
<p>If you are audited, the IRS will compare your bank deposits with the income you reported. A numbered invoice for every deposit is the quickest way to show that a transfer from your personal account was a contribution, not unreported sales.</p>

<h2>State taxes, annual fees and other filings</h2>
<p>Federal returns are only part of LLC compliance. Plan for these as well:</p>
<ul>
<li><strong>State income tax.</strong> Most states with an income tax follow the federal classification, so a single-member LLC's profit appears on the owner's state return and a multi-member LLC files a state partnership return. Some states also allow or require the LLC to pay tax at the entity level.</li>
<li><strong>Annual reports and fees.</strong> Many states require an annual or biennial report with a filing fee, and some charge a minimum franchise tax even when the LLC makes no profit. Missing it can put the LLC out of good standing.</li>
<li><strong>Sales tax.</strong> If you sell taxable goods or services, you may need a sales tax permit and regular returns, separate from income tax.</li>
<li><strong>Payroll filings.</strong> If the LLC has employees, or is taxed as an S corporation paying an owner salary, quarterly Form 941 and annual W-2 filings apply.</li>
<li><strong>Information returns.</strong> If the LLC paid contractors $2,000 or more during 2026, 1099-NEC forms are due by February 1, 2027.</li>
</ul>
<p>Check your state's revenue department and secretary of state websites for current fees and due dates, since these change more often than federal rules.</p>

<h3>Common LLC tax mistakes to avoid</h3>
<ul>
<li><strong>Assuming the LLC pays its own tax.</strong> Default LLCs pass profit to owners, who pay on their personal returns.</li>
<li><strong>Missing the March 15 deadline</strong> for Form 1065 or 1120-S, which is a month earlier than personal returns.</li>
<li><strong>Taking an S election without running payroll.</strong> S corporation owners who work in the business need reasonable wages.</li>
<li><strong>Forgetting state fees.</strong> Many states charge an annual LLC fee even with no profit.</li>
<li><strong>Skipping estimated payments</strong> in the first profitable year.</li>
</ul>

<h2>Create your LLC invoices</h2>
<p>Filing taxes for an LLC is far easier when every sale is backed by a numbered invoice in the LLC's name. Use our <a href="/invoice-generator/usa">US invoice generator</a> or browse <a href="/invoice-templates/corporate">corporate invoice templates</a>, then download a PDF in seconds with the <a href="/invoice-generator">free invoice generator</a>. If you have not formed your company yet, start with our guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a>.</p>
`,
  },
  {
    slug: "how-to-file-1099-nec",
    title: "How to File 1099-NEC in 2027: IRIS Steps, Deadline and Rules",
    description:
      "How to file 1099-NEC for 2026 payments: the new $2,000 threshold, the February 1, 2027 deadline, IRIS e-filing after FIRE retires, penalties and an example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "1099-nec-threshold-2026",
      "w9-and-1099-for-contractors",
      "1099-nec-vs-1099-misc-vs-1099-k",
      "w2-vs-1099",
    ],
    faqs: [
      {
        q: "What is the 1099-NEC deadline in 2027?",
        a: "Form 1099-NEC is due to both the IRS and the recipient by January 31. For payments made in 2026, January 31, 2027 falls on a Sunday, so under the IRS weekend rule the deadline moves to Monday, February 1, 2027. Unlike most information returns, there is no automatic 30-day extension for 1099-NEC, so plan to file on time.",
      },
      {
        q: "What is the 1099-NEC threshold for 2026 payments?",
        a: "$2,000. The One Big Beautiful Bill Act raised the reporting threshold from $600 to $2,000 for payments made after December 31, 2025. You file a 1099-NEC for each person you paid at least $2,000 in nonemployee compensation during 2026. The IRS says the amount will be adjusted for inflation starting in 2027. Payments made in 2025 still used the old $600 threshold.",
      },
      {
        q: "Can I still use the FIRE system to file 1099s?",
        a: "No, not for the 2027 filing season. IRS Publication 1099 for 2026 says IRIS will be the only intake system for information returns starting with tax year 2026, and FIRE will not accept submissions once it shuts down at the end of 2026. Former FIRE users need an IRIS Transmitter Control Code, and the IRS warns TCC applications can take up to 45 days.",
      },
      {
        q: "Do I have to e-file Form 1099-NEC?",
        a: "You must e-file if you file 10 or more information returns in total during the year. The count aggregates all types, such as 1099-NEC, 1099-MISC and W-2, so a business with six W-2s and four 1099s is over the line. Below 10, you may still file on paper with Form 1096 using official red-ink Copy A forms, but e-filing through IRIS is free and simpler.",
      },
      {
        q: "Do I send a 1099-NEC to an LLC?",
        a: "It depends on how the LLC is taxed. A single-member LLC or an LLC taxed as a partnership generally gets a 1099-NEC if you paid it $2,000 or more for services. An LLC taxed as a C or S corporation is generally exempt, like other corporations. The W-9 your contractor gives you shows their tax classification, so collect one before the first payment.",
      },
      {
        q: "What is the penalty for filing 1099-NEC late?",
        a: "For returns required to be filed in 2027, the IRS penalty is $60 per return if you file within 30 days of the deadline, $130 if you file after 30 days but by August 1, and $340 if you file later or not at all. Intentional disregard starts at $690 per return with no cap. A separate penalty can apply for late or incorrect recipient copies.",
      },
      {
        q: "Do I file a 1099-NEC for payments made by credit card or PayPal?",
        a: "Generally no. Payments you make by credit card, debit card or through a payment app's goods-and-services channel are reported by the payment processor on Form 1099-K, not by you on 1099-NEC. The 1099-K threshold reverted to more than $20,000 and more than 200 transactions. Only report the amounts you paid by check, cash, ACH or wire on your 1099-NEC.",
      },
      {
        q: "Do I need to file 1099-NEC for a foreign contractor?",
        a: "Not usually. Payments to a foreign person for services performed entirely outside the United States are generally not reported on Form 1099-NEC. Collect Form W-8BEN from the contractor to document their foreign status and keep it in your files. Work performed inside the US by a foreign person follows different withholding and reporting rules, typically on Form 1042-S.",
      },
      {
        q: "How do I correct a 1099-NEC I already filed?",
        a: "File a corrected form through the same channel, marking it as corrected, and send the recipient a corrected copy. In IRIS you can file corrections directly in the Taxpayer Portal. For paper corrections, the IRS warns not to check the VOID box on the corrected form. Small dollar errors of no more than $100 may fall under the de minimis safe harbor.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To file 1099-NEC for 2026 payments, collect a W-9 from each contractor, total what you paid them, and file a 1099-NEC for anyone paid $2,000 or more. Send copies to the IRS and the contractor by February 1, 2027. E-file through IRIS, because the old FIRE system is retired.</p>

<p>If you hire freelancers or independent contractors, learning how to file 1099-NEC correctly is one of the few compliance jobs that cannot slide. Filing season 2027 brings two big changes: the reporting threshold jumps from $600 to $2,000 under the One Big Beautiful Bill Act, and the IRS's IRIS portal becomes the only electronic channel after FIRE shuts down. This guide covers who you must report, the 1099 deadline 2027, IRIS e-file steps, penalties and a worked example. Contractors sending you bills can use our <a href="/invoice-generator">free invoice generator</a>, which makes year-end totals easy to verify.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Rules for attorneys, foreign payees and backup withholding have extra detail, so check IRS instructions or a tax professional for your case.</p>

<h2>What Form 1099-NEC reports</h2>
<p>Form 1099-NEC reports nonemployee compensation: payments for services by someone who is not your employee, made in the course of your trade or business. Typical examples are freelance designers, developers, writers, consultants and subcontractors. Rent, prizes and certain other payments go on 1099-MISC instead. Our explainer on <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> sorts out which form applies, and our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> covers classification.</p>
<p>The 2026 form also has new boxes. According to the <a href="https://www.irs.gov/instructions/i1099mec" target="_blank" rel="noopener noreferrer">IRS instructions for Forms 1099-MISC and 1099-NEC</a>, boxes 1b to 1d were added for cash tips, Treasury tipped occupation codes and overtime compensation, and excess golden parachute payments moved to box 3.</p>

<h2>Who needs a 1099-NEC: the new $2,000 threshold</h2>
<p>For payments made after December 31, 2025, you file a 1099-NEC for each person you paid at least $2,000 in nonemployee compensation during the calendar year. The IRS says the threshold will be adjusted for inflation starting in 2027. Our <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold guide</a> covers the change in detail.</p>
<table>
<thead><tr><th>Item</th><th>2025 payments (filed 2026)</th><th>2026 payments (filed 2027)</th></tr></thead>
<tbody>
<tr><td>1099-NEC threshold</td><td>$600</td><td>$2,000</td></tr>
<tr><td>Deadline (IRS and recipient)</td><td>January 31, 2026 (moved to February 2, 2026, a Monday)</td><td>February 1, 2027 (January 31 is a Sunday)</td></tr>
<tr><td>E-file channels</td><td>FIRE or IRIS</td><td>IRIS only</td></tr>
<tr><td>E-file required at</td><td>10 or more returns in total</td><td>10 or more returns in total</td></tr>
<tr><td>Late penalty, filed after August 1</td><td>$340 per return</td><td>$340 per return</td></tr>
</tbody>
</table>
<h3>Payments you usually do not report</h3>
<ul>
<li><strong>Corporations</strong>, including LLCs taxed as C or S corporations (attorneys are a key exception).</li>
<li><strong>Card and app payments</strong>, which the processor reports on Form 1099-K. Our <a href="/blog/1099-k-threshold">1099-K threshold guide</a> explains the reverted $20,000 and 200 transaction test.</li>
<li><strong>Employees</strong>, who get a W-2.</li>
<li><strong>Personal payments</strong>, such as paying a plumber for your own home rather than your business.</li>
<li><strong>Foreign contractors working abroad</strong>, documented with a <a href="/blog/w-8ben-form-freelancers">Form W-8BEN</a>.</li>
</ul>

<h2>The 1099 deadline for 2027</h2>
<p>The Internal Revenue Code requires Form 1099-NEC to be filed with the IRS and furnished to the recipient by January 31. For 2026 payments, January 31, 2027 is a Sunday, so the deadline is Monday, February 1, 2027. IRS Publication 1099 is explicit that Form 8809 gives an automatic 30-day extension for most information returns, but not for Forms W-2 and 1099-NEC. Extensions for 1099-NEC are only granted in limited hardship cases, so treat February 1 as fixed.</p>

<h2>IRIS e-file: what changed when FIRE retired</h2>
<p>IRS Publication 1099 for 2026 says that starting with tax year 2026 and filing season 2027, IRIS will be the only intake system for information returns, and FIRE will not accept submissions after it shuts down in 2026. If you or your bookkeeper filed through FIRE, you need a new IRIS Transmitter Control Code (TCC).</p>
<p>According to the IRS page on <a href="https://www.irs.gov/filing/e-file-information-returns-with-iris" target="_blank" rel="noopener noreferrer">e-filing information returns with IRIS</a>, the system has two channels:</p>
<ul>
<li><strong>Taxpayer Portal:</strong> a free web portal for smaller filers. You enter forms manually or upload a CSV, up to 100 returns per batch, download recipient copies and file corrections.</li>
<li><strong>Application to Application (A2A):</strong> for software that transmits large volumes directly.</li>
</ul>
<p>You must e-file if you file 10 or more information returns in total during the year, counting all form types together. Below that, paper filing with Form 1096 and official scannable Copy A forms is still allowed, but IRIS is free and avoids ordering forms.</p>

<h2>How to file 1099-NEC step by step</h2>
<ol>
<li><strong>Collect a W-9 before you pay.</strong> It gives you the contractor's legal name, TIN and tax classification. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> explains what to ask for.</li>
<li><strong>Apply for an IRIS TCC early.</strong> The IRS warns processing can take up to 45 days, so apply in the autumn, not in late January.</li>
<li><strong>Total payments by contractor.</strong> Use your accounts payable records and contractors' invoices. Exclude card and payment-app payments that will appear on a 1099-K.</li>
<li><strong>Apply the $2,000 test</strong> and check entity type from each W-9.</li>
<li><strong>Verify names and TINs.</strong> The IRS TIN matching program lets payers check name and TIN combinations before filing, which reduces penalty and backup withholding notices.</li>
<li><strong>Enter the forms in IRIS</strong> (or your software), with box 1 for nonemployee compensation and box 4 for any backup withholding.</li>
<li><strong>Furnish recipient copies</strong> by February 1, 2027, by mail or electronically if the contractor consented.</li>
<li><strong>Submit to the IRS</strong> by the same date and save the acknowledgment.</li>
<li><strong>File state copies</strong> where your state requires them. Some states participate in the combined federal/state program, others require direct filing.</li>
</ol>
<h3>Backup withholding</h3>
<p>If a contractor will not provide a TIN, or the IRS tells you their TIN is wrong, you may need to withhold 24% backup withholding from payments, according to IRS Publication 1099. Getting the W-9 before the first payment avoids this.</p>

<h2>Special cases that trip up payers</h2>
<h3>Attorneys and law firms</h3>
<p>Payments to attorneys for legal services are reportable on 1099-NEC even if the law firm is a corporation. This is the main exception to the corporate exemption. The $2,000 threshold applies to these payments for 2026 too, according to the IRS instructions. Gross proceeds paid to an attorney, such as a settlement paid through their office, go on 1099-MISC instead.</p>
<h3>LLC contractors</h3>
<p>A single-member LLC owned by an individual is treated like a sole proprietor, so it generally gets a 1099-NEC. A multi-member LLC taxed as a partnership also generally gets one. An LLC that elected corporate or S corporation treatment generally does not. The tax classification box on the W-9 tells you which applies, which is why you should never pay a new contractor without one.</p>
<h3>Mixed payment methods</h3>
<p>If you paid a contractor partly by ACH and partly by credit card, only the ACH, check, cash and wire amounts count toward your 1099-NEC total. The card payments are the processor's to report. Run the $2,000 test on the non-card amount only.</p>
<h3>Services plus expenses</h3>
<p>If a contractor billed you for services plus travel or materials, check the IRS instructions or ask your tax preparer whether the expense portion belongs in box 1. Asking contractors to show services and expenses on separate invoice lines makes the totals easy to separate either way.</p>
<h3>Paying through a platform</h3>
<p>If you hire through a freelance marketplace and pay through the platform, the platform usually handles payment and any reporting, so you typically do not issue your own 1099-NEC for those amounts. Check the platform's terms for confirmation.</p>

<h3>Paper filing and record keeping</h3>
<p>If you have fewer than 10 information returns in total and choose paper, order official Copy A forms from the IRS, since printed downloads of Copy A are not scannable. Each form type needs its own Form 1096 transmittal. Recipient copies can be printed on plain paper. Whichever method you use, keep a copy of every 1099-NEC, the W-9s behind them and the payment records for at least as long as the IRS can examine the return, and longer if your state requires it.</p>

<h2>Penalties for late or incorrect 1099-NEC forms</h2>
<p>Rev. Proc. 2025-32 sets the penalties for information returns required to be filed in 2027. The per-return amounts are the same for small and large businesses, but annual caps are lower for businesses with average gross receipts of $5 million or less:</p>
<table>
<thead><tr><th>When corrected or filed</th><th>Penalty per return</th><th>Annual cap (gross receipts $5M or less)</th></tr></thead>
<tbody>
<tr><td>Within 30 days of the due date</td><td>$60</td><td>$244,500</td></tr>
<tr><td>After 30 days, by August 1</td><td>$130</td><td>$698,500</td></tr>
<tr><td>After August 1 or not filed</td><td>$340</td><td>$1,397,000</td></tr>
<tr><td>Intentional disregard</td><td>Greater of $690 or 10% of the amount</td><td>No cap</td></tr>
</tbody>
</table>
<p>A parallel penalty applies to failing to furnish correct payee statements. The IRS <a href="https://www.irs.gov/payments/information-return-penalties" target="_blank" rel="noopener noreferrer">information return penalties page</a> lists the current amounts. A de minimis safe harbor means a dollar error of no more than $100 (or $25 of withholding) is generally not treated as incorrect. If you get a penalty notice, our guide to <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a> covers reasonable cause relief.</p>

<h2>Worked example: which contractors get a 1099-NEC</h2>
<p>A small marketing agency paid these amounts for services in 2026:</p>
<table>
<thead><tr><th>Payee</th><th>Entity (from W-9)</th><th>Paid by</th><th>2026 total</th><th>1099-NEC?</th></tr></thead>
<tbody>
<tr><td>Web developer</td><td>Individual</td><td>ACH</td><td>$6,500</td><td>Yes</td></tr>
<tr><td>Copywriter</td><td>Single-member LLC</td><td>Check</td><td>$2,400</td><td>Yes</td></tr>
<tr><td>Illustrator</td><td>Individual</td><td>ACH</td><td>$1,800</td><td>No, under $2,000</td></tr>
<tr><td>Video studio</td><td>S corporation</td><td>Wire</td><td>$9,000</td><td>No, corporation</td></tr>
<tr><td>Photographer</td><td>Individual</td><td>Credit card</td><td>$3,000</td><td>No, reported on 1099-K</td></tr>
</tbody>
</table>
<p>The agency files two 1099-NECs: $6,500 and $2,400. Under the old $600 threshold, the illustrator would also have needed one. If the agency missed the deadline and filed both forms on March 20, 2027 (more than 30 days late but before August 1), the filing penalty would be 2 x $130 = $260, plus a possible separate penalty for late recipient copies.</p>

<h3>A year-round routine to avoid late filing</h3>
<p>The businesses that find January easy are the ones that do a little work all year. A simple routine:</p>
<ul>
<li><strong>Onboarding:</strong> request a W-9 and confirm the payment method before the first job.</li>
<li><strong>Monthly:</strong> code each contractor payment to contract labor and note whether it was paid by card or bank transfer.</li>
<li><strong>October:</strong> run a year-to-date report by payee, flag anyone approaching $2,000, and apply for or renew your IRIS TCC.</li>
<li><strong>December:</strong> chase missing W-9s and confirm addresses for recipient copies.</li>
<li><strong>January:</strong> finalize totals, file through IRIS and send copies by February 1, 2027.</li>
</ul>

<h2>Tips for contractors receiving 1099-NECs</h2>
<p>If you are on the other side, remember that all business income is taxable whether or not a 1099 arrives. With a $2,000 threshold, many freelancers will receive fewer forms for small jobs. Keep your own income records from your invoices, match them to any 1099s and report the full amount on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>. Sending a clean <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> with your legal name and TIN details makes your client's 1099 accurate. Our sibling guide on <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes for an LLC</a> explains where that income goes if you operate through an LLC.</p>

<h2>Get your contractor records in order</h2>
<p>Filing 1099-NEC forms is quick when every contractor payment ties to an invoice with a clear number and date. Ask contractors to bill you using our <a href="/invoice-generator">invoice generator</a> or a <a href="/invoice-templates/minimal">minimal invoice template</a>, keep W-9s on file, and you will have everything ready for IRIS well before February 1, 2027. Create your next invoice with the <a href="/invoice-generator/usa">US invoice generator</a>.</p>
`,
  },
  {
    slug: "business-expense-categories",
    title: "Business Expense Categories: Schedule C Categories List 2026",
    description:
      "A complete list of business expense categories mapped to Schedule C lines, with examples, 2026 rules for meals, mileage and assets, and a worked example.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-tax-deductions",
      "schedule-c-for-freelancers",
      "how-to-track-business-expenses",
      "chart-of-accounts",
    ],
    faqs: [
      {
        q: "What are the main business expense categories?",
        a: "The most useful list for US small businesses is the one on Schedule C, Part II: advertising, car and truck expenses, commissions and fees, contract labor, depletion, depreciation, employee benefits, insurance, interest, legal and professional services, office expense, pension plans, rent or lease, repairs, supplies, taxes and licenses, travel, meals, utilities, wages and other expenses, plus business use of home on line 30.",
      },
      {
        q: "How many expense categories should a small business have?",
        a: "Most small businesses work well with 15 to 25 expense categories. Start with the Schedule C lines so your bookkeeping maps straight to your tax return, then add sub-accounts only where you need detail, such as splitting software from office supplies. Too many categories make bookkeeping slow and inconsistent. Too few force you to re-sort transactions at tax time.",
      },
      {
        q: "What goes in other expenses on Schedule C?",
        a: "Other expenses are ordinary and necessary costs that do not fit a specific line, such as software subscriptions, bank fees, professional dues, education, business gifts and small tools. On the 2025 Schedule C, other expenses from Part V are reported on line 27b, and line 27a is used for the energy efficient commercial buildings deduction. List each item with its amount in Part V.",
      },
      {
        q: "Are business meals 100% deductible?",
        a: "No. The IRS Schedule C instructions state the business meals deduction is 50%. That applies to meals with clients and meals while traveling away from home overnight for business. Individuals subject to Department of Transportation hours-of-service limits can deduct 80%. Keep a note of who you met and the business purpose, plus the receipt, for every meal you claim.",
      },
      {
        q: "Is software an office expense or other expense?",
        a: "Either can work as long as you are consistent. Many bookkeepers put recurring software subscriptions in other expenses or a software sub-account, and keep office expense for postage and supplies. Software you buy outright with a longer useful life may be treated as an asset to depreciate, although many small purchases fall under the de minimis safe harbor election.",
      },
      {
        q: "What is the difference between supplies and office expense?",
        a: "Line 22 supplies covers materials and supplies used up in delivering your work, such as cleaning chemicals for a cleaning business or packaging for a product seller. Line 18 office expense covers general office items such as paper, ink and postage. Inventory and raw materials that become products go into cost of goods sold, not supplies.",
      },
      {
        q: "Can I deduct personal expenses through my business?",
        a: "No. Only ordinary and necessary business expenses are deductible. Mixed-use costs such as a phone, car or home office must be split so you only deduct the business share. Personal costs paid from the business account should be recorded as owner draws, not expenses. Mixing them weakens your records if the IRS ever examines your return.",
      },
      {
        q: "Where do I put payments to freelancers on Schedule C?",
        a: "Payments to non-employees for services go on line 11, contract labor. Payments to employees go on line 26 wages. If you paid any one contractor $2,000 or more in 2026 by cash, check or bank transfer, you may need to file Form 1099-NEC for them by February 1, 2027. Card and payment-app payments are reported by the processor instead.",
      },
      {
        q: "How do I categorize car expenses?",
        a: "Car and truck expenses go on Schedule C line 9. You choose either the standard mileage rate or actual expenses. For 2026 the IRS business rate is 72.5 cents a mile for January to June and 76 cents a mile from July 1. Parking and tolls for business trips are added separately. Vehicle depreciation under the actual method goes on line 13.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The best business expense categories for a US sole proprietor or single-member LLC are the Schedule C categories: advertising, car and truck, commissions, contract labor, depreciation, insurance, interest, legal and professional, office, rent, repairs, supplies, taxes and licenses, travel, meals, utilities, wages, other expenses and home office. Matching your books to them makes filing simple.</p>

<p>Every expense you record needs a home. Choose business expense categories well and your bookkeeping answers three questions at once: where your money goes, what you can deduct, and which line of your tax return each cost belongs on. Choose them badly and you will spend a weekend every April re-sorting transactions. This guide gives you the full Schedule C categories list, examples for each, the 2026 rules that trip people up and a worked example. If you bill clients for costs, our <a href="/invoice-generator">invoice generator</a> lets you itemize them clearly.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Deduction rules have limits and exceptions, so confirm specific items with a tax professional.</p>

<h2>Why use Schedule C categories for your books</h2>
<p>Schedule C is the form sole proprietors and single-member LLCs use to report business profit. Its Part II lists the expense lines the IRS expects. If your <a href="/blog/chart-of-accounts">chart of accounts</a> mirrors those lines, your profit and loss statement converts directly into the tax form with no reclassification. Partnerships and corporations use different forms, but the same groupings still make sense for management reporting.</p>
<p>The test for any deduction is that the cost is ordinary and necessary for your business. The category does not make something deductible, it only records where a valid deduction goes.</p>

<h2>The complete Schedule C categories list</h2>
<p>This table follows the line numbers in the <a href="https://www.irs.gov/instructions/i1040sc" target="_blank" rel="noopener noreferrer">IRS instructions for Schedule C</a> for tax year 2025, the latest final version at the time of writing:</p>
<table>
<thead><tr><th>Line</th><th>Category</th><th>Typical examples</th></tr></thead>
<tbody>
<tr><td>8</td><td>Advertising</td><td>Online ads, website promotion, printed flyers, sponsorships</td></tr>
<tr><td>9</td><td>Car and truck expenses</td><td>Standard mileage or actual costs, plus business parking and tolls</td></tr>
<tr><td>10</td><td>Commissions and fees</td><td>Sales commissions, marketplace and platform fees</td></tr>
<tr><td>11</td><td>Contract labor</td><td>Freelancers and subcontractors who are not employees</td></tr>
<tr><td>12</td><td>Depletion</td><td>Natural resources such as timber or minerals</td></tr>
<tr><td>13</td><td>Depreciation and section 179</td><td>Computers, equipment, vehicles (with Form 4562)</td></tr>
<tr><td>14</td><td>Employee benefit programs</td><td>Health plans and group-term life for employees</td></tr>
<tr><td>15</td><td>Insurance (other than health)</td><td>Liability, professional indemnity, business property</td></tr>
<tr><td>16a / 16b</td><td>Interest</td><td>Mortgage interest on business property; loan and card interest</td></tr>
<tr><td>17</td><td>Legal and professional services</td><td>Accountant, attorney and tax preparation for the business</td></tr>
<tr><td>18</td><td>Office expense</td><td>Office supplies, postage</td></tr>
<tr><td>19</td><td>Pension and profit-sharing plans</td><td>Employer contributions for employees</td></tr>
<tr><td>20a / 20b</td><td>Rent or lease</td><td>Vehicles and equipment; office or other property</td></tr>
<tr><td>21</td><td>Repairs and maintenance</td><td>Incidental repairs that do not improve or extend an asset</td></tr>
<tr><td>22</td><td>Supplies</td><td>Materials used up in your work</td></tr>
<tr><td>23</td><td>Taxes and licenses</td><td>Business licenses, employer payroll taxes, state business taxes</td></tr>
<tr><td>24a</td><td>Travel</td><td>Airfare, lodging and transport on overnight business trips</td></tr>
<tr><td>24b</td><td>Deductible meals</td><td>Business meals, generally 50% deductible</td></tr>
<tr><td>25</td><td>Utilities</td><td>Business share of phone, internet, power</td></tr>
<tr><td>26</td><td>Wages</td><td>Employee pay, less certain credits</td></tr>
<tr><td>27a</td><td>Energy efficient commercial buildings</td><td>Section 179D deduction (Form 7205)</td></tr>
<tr><td>27b</td><td>Other expenses (from Part V)</td><td>Software, bank fees, dues, education, gifts</td></tr>
<tr><td>30</td><td>Business use of home</td><td>Form 8829 or simplified method</td></tr>
</tbody>
</table>
<p>The 2025 instructions note two layout changes: the energy efficient buildings deduction moved to line 27a, and other expenses from Part V now go on line 27b. Cost of goods sold is separate, in Part III, for businesses that sell products. See our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a>.</p>

<h2>Categories that need extra care</h2>
<h3>Car and truck expenses</h3>
<p>You choose the standard mileage rate or actual costs. For 2026, the IRS business rate is 72.5 cents a mile for January 1 to June 30 and 76 cents a mile from July 1 to December 31, after a midyear increase linked to fuel prices. Our sibling posts on the <a href="/blog/irs-mileage-rate-2026">IRS mileage rate for 2026</a> and <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> explain which method suits you. A <a href="/blog/mileage-log-template">mileage log</a> is essential either way.</p>
<h3>Meals and travel</h3>
<p>The Schedule C instructions state that the business meals deduction is 50%, or 80% for people subject to Department of Transportation hours-of-service limits. Travel (line 24a) covers transport and lodging when you are away from home overnight. Keep meal receipts with a note of who attended and why.</p>
<h3>Assets vs expenses</h3>
<p>Equipment that lasts more than a year is generally capitalized and depreciated on line 13, or expensed under section 179 or bonus depreciation. The 2025 instructions list a section 179 limit of $2.5 million and allow 100% bonus depreciation for certain property placed in service after January 19, 2025. Small items can often be expensed under the de minimis safe harbor election. Our guide to <a href="/blog/section-179-vs-bonus-depreciation">section 179 vs bonus depreciation</a> goes deeper.</p>
<h3>Home office</h3>
<p>Line 30 uses Form 8829 or the simplified method of $5 per square foot up to 300 square feet. See our <a href="/blog/home-office-deduction">home office deduction guide</a>.</p>
<h3>Contract labor</h3>
<p>Line 11 is for non-employees. If you paid one person $2,000 or more in 2026 by cash, check or bank transfer, you may need to file a 1099-NEC. Our sibling guide on <a href="/blog/how-to-file-1099-nec">how to file 1099-NEC</a> walks through it.</p>

<h2>Useful sub-categories under other expenses</h2>
<p>Line 27b is a catch-all, so most businesses keep sub-accounts and list them in Part V:</p>
<ul>
<li>Software and subscriptions (design tools, accounting, cloud storage)</li>
<li>Bank and payment processing fees, unless you treat them as commissions and fees</li>
<li>Professional dues and memberships</li>
<li>Education and training that maintains or improves skills for your current business</li>
<li>Business gifts, subject to the long-standing $25 per recipient per year limit</li>
<li>Small tools and equipment expensed under the de minimis election</li>
</ul>

<h2>Expense categories by type of business</h2>
<p>The same Schedule C lines apply to everyone, but which ones matter most depends on what you do. This table shows where typical costs tend to concentrate:</p>
<table>
<thead><tr><th>Business type</th><th>Largest categories</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Freelance designer or developer</td><td>Other expenses (software), depreciation (computers), home office</td><td>Splitting phone and internet between personal and business use</td></tr>
<tr><td>Consultant</td><td>Travel, meals, car and truck, professional fees</td><td>Applying the 50% meals limit and keeping trip purposes</td></tr>
<tr><td>Cleaning or lawn care</td><td>Supplies, car and truck, contract labor, insurance</td><td>Equipment that should be depreciated rather than expensed</td></tr>
<tr><td>Trades and construction</td><td>Supplies or cost of goods sold, car and truck, depreciation, contract labor</td><td>Materials billed to clients versus materials used up in overhead</td></tr>
<tr><td>Online product seller</td><td>Cost of goods sold, commissions and fees, advertising</td><td>Putting inventory in supplies instead of Part III</td></tr>
<tr><td>Agency with staff</td><td>Wages, employee benefits, rent, taxes and licenses</td><td>Separating contractors on line 11 from employees on line 26</td></tr>
</tbody>
</table>

<h2>What you cannot deduct in any category</h2>
<p>Some costs look like business expenses but are not deductible, or are limited. Keep them out of your expense categories, or record them in a separate non-deductible account so your books still reconcile:</p>
<ul>
<li><strong>Federal income tax and self-employment tax.</strong> The Schedule C instructions say these do not belong on line 23. Half of self-employment tax is deducted on Form 1040 instead.</li>
<li><strong>Owner draws.</strong> Money you transfer to yourself is not an expense for a sole proprietor or single-member LLC.</li>
<li><strong>Personal share of mixed costs.</strong> Only the business portion of a phone, car or home is deductible.</li>
<li><strong>The base rate of the first home phone line.</strong> The Schedule C instructions specifically exclude it, although extra business calls and a separate business line can be deducted.</li>
<li><strong>Fines and penalties</strong> paid to a government for breaking the law.</li>
<li><strong>Loan principal.</strong> Repaying a business loan is not an expense; only the interest is.</li>
<li><strong>Capital improvements</strong>, which are depreciated over time rather than deducted as repairs.</li>
</ul>
<p>Getting these right in your bookkeeping means your profit figure is closer to your taxable profit, which makes estimated tax payments more accurate during the year.</p>

<h2>How to set up and use your expense categories</h2>
<ol>
<li><strong>Start from the Schedule C lines</strong> above and delete any you will never use, such as depletion.</li>
<li><strong>Add three to six sub-accounts</strong> under other expenses for your biggest recurring costs.</li>
<li><strong>Write a one-line rule for each category</strong> so you code similar costs the same way every time.</li>
<li><strong>Use a separate business account and card</strong> so every transaction is business by default.</li>
<li><strong>Categorize weekly</strong> rather than once a year. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> suggests a routine.</li>
<li><strong>Attach receipts</strong> and note the purpose for meals, travel and mixed-use items.</li>
<li><strong>Bill reimbursable costs to clients</strong> on a separate invoice line. See <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a>.</li>
<li><strong>Review your profit and loss monthly</strong> to catch miscoded items early.</li>
</ol>
<p>A good rule of thumb: if you cannot decide between two categories in a few seconds, write down which one you chose and why, then use the same answer every time. Consistency matters more than perfection, because the IRS and your accountant care that similar costs are treated the same way from year to year. If you change a rule, note the date so year-over-year comparisons still make sense.</p>

<h2>Worked example: one year of expenses by category</h2>
<p>Jordan is a freelance consultant with $80,000 of 2026 revenue. Here is how a year of costs lands on Schedule C:</p>
<table>
<thead><tr><th>Line</th><th>Category</th><th>Calculation</th><th>Deduction</th></tr></thead>
<tbody>
<tr><td>8</td><td>Advertising</td><td>Online ads</td><td>$1,200.00</td></tr>
<tr><td>9</td><td>Car and truck</td><td>1,900 miles x $0.725 + 2,100 miles x $0.76</td><td>$2,973.50</td></tr>
<tr><td>11</td><td>Contract labor</td><td>Freelance researcher</td><td>$3,500.00</td></tr>
<tr><td>15</td><td>Insurance</td><td>Professional liability</td><td>$1,100.00</td></tr>
<tr><td>17</td><td>Legal and professional</td><td>Accountant</td><td>$900.00</td></tr>
<tr><td>18</td><td>Office expense</td><td>Supplies and postage</td><td>$650.00</td></tr>
<tr><td>22</td><td>Supplies</td><td>Workshop materials</td><td>$780.00</td></tr>
<tr><td>24a</td><td>Travel</td><td>Two client trips</td><td>$1,400.00</td></tr>
<tr><td>24b</td><td>Meals</td><td>$1,000 spent x 50%</td><td>$500.00</td></tr>
<tr><td>25</td><td>Utilities</td><td>Business share of phone and internet</td><td>$600.00</td></tr>
<tr><td>27b</td><td>Other expenses</td><td>Software subscriptions</td><td>$1,850.00</td></tr>
<tr><td colspan="3"><strong>Total expenses</strong></td><td><strong>$15,453.50</strong></td></tr>
</tbody>
</table>
<p>The mileage line splits because the rate changed on July 1: 1,900 x 0.725 = $1,377.50 and 2,100 x 0.76 = $1,596.00. Jordan's net profit is $80,000 - $15,453.50 = $64,546.50, which flows to Schedule SE for <a href="/blog/self-employment-tax">self-employment tax</a> and to Form 1040. Because the paid contractor received $3,500, Jordan also checks whether a 1099-NEC is needed.</p>

<h2>Common categorization mistakes</h2>
<ul>
<li><strong>Deducting 100% of meals</strong> instead of the 50% limit.</li>
<li><strong>Expensing a large asset</strong> as supplies without a section 179, bonus or de minimis basis.</li>
<li><strong>Putting owner draws in expenses.</strong> Money you take out is not a deduction.</li>
<li><strong>Claiming mileage and gas together.</strong> The standard rate already covers fuel.</li>
<li><strong>Dumping everything in other expenses</strong>, which hides trends and invites questions.</li>
<li><strong>Mixing personal costs</strong> through the business account without recording them as draws.</li>
</ul>
<p>For a wider list of what you can claim, see our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> and remember that every category should roll up into a monthly profit and loss you actually read.</p>

<h2>Keep income as organized as your expense categories</h2>
<p>Clean business expense categories only tell half the story: your income needs the same discipline. Issue numbered invoices for every sale with our <a href="/invoice-generator">free invoice generator</a>, track totals in an <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> and choose a clear layout from our <a href="/invoice-templates">invoice templates</a>. Your Schedule C will practically fill itself.</p>
`,
  },
  {
    slug: "prompt-payment-act",
    title: "Prompt Payment Act: Interest on Late Government Invoices",
    description:
      "How the Prompt Payment Act works in 2026: the 30-day rule, the 4.75% interest rate, proper invoice rules, a worked interest example and state prompt pay laws.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "late-payment-fees",
      "invoice-payment-terms",
      "overdue-invoice",
      "po-number-on-invoice",
    ],
    faqs: [
      {
        q: "What is the Prompt Payment Act?",
        a: "The Prompt Payment Act is a federal law that requires US government agencies to pay contractors on time and to pay interest automatically when they pay late. Treasury's rules are in 5 CFR Part 1315. In most cases payment is due 30 days after the agency receives a proper invoice, and interest runs from the day after the due date until the payment date.",
      },
      {
        q: "What is the Prompt Payment Act interest rate for 2026?",
        a: "The Bureau of the Fiscal Service sets the rate every six months. The Prompt Payment interest rate for July 1 to December 31, 2026 is 4.75%. Interest uses the rate in effect on the day after the payment due date, and that rate stays fixed for the life of the late payment. Check the Fiscal Service rates page for the January to June 2027 rate.",
      },
      {
        q: "Do I have to ask for Prompt Payment interest?",
        a: "No. Under 5 CFR 1315.10, agencies must pay late payment interest even if the vendor does not request it, and each payment should come with a notice showing the interest amount, days late and the rate used. If interest is owed but not paid within 10 days of the late payment, you can request an additional penalty in writing within 40 days of payment.",
      },
      {
        q: "What makes a proper invoice under the Prompt Payment Act?",
        a: "Under 5 CFR 1315.9(b), a proper invoice includes your name, invoice date, contract number or delivery authorization, invoice number, description, price and quantity of goods or services, shipping and payment terms, taxpayer identification number, banking details, a contact name, title and phone number, and any other documents the contract requires. Missing items let the agency return it.",
      },
      {
        q: "How long does an agency have to reject an invoice?",
        a: "An agency must return an improper invoice no later than 7 days after receipt, identifying all defects and asking for a corrected invoice. Shorter windows apply to some perishable goods. If the agency takes longer than 7 days to tell you, the payment clock is adjusted in your favor. That is why sending a complete invoice the first time matters so much.",
      },
      {
        q: "What is the additional penalty under the Prompt Payment Act?",
        a: "If an agency pays late without the interest owed and does not pay that interest within 10 days, you can claim an additional penalty. The written request must be sent by the 40th day after payment. The additional penalty equals 100% of the original interest, with a minimum of $25 and a maximum of $5,000, and only applies when the interest owed is at least $1.",
      },
      {
        q: "Does the Prompt Payment Act apply to subcontractors?",
        a: "The federal act mainly governs agencies paying prime contractors, but federal construction contracts also include clauses requiring prime contractors to pay subcontractors promptly and pass interest down when they pay late. Many states have separate prompt pay laws for public projects and private construction. Check your subcontract and your state law for specific deadlines and interest rates.",
      },
      {
        q: "Do states have their own prompt payment laws?",
        a: "Yes. Most states have prompt pay statutes that set payment deadlines and interest for state agencies, and many also cover public and private construction contracts. Deadlines, interest rates and what counts as a proper invoice differ widely by state. Look up your state's statute or comptroller guidance, and reference it in your contract and invoice terms where it applies.",
      },
      {
        q: "How long can Prompt Payment interest accrue?",
        a: "Interest compounds in 30-day periods and can accrue for up to one year. Under 5 CFR 1315.10, penalties stop accruing after one year or once you file a claim for them under the Contract Disputes Act of 1978. Interest of less than $1 does not have to be paid. For longer disputes, talk to your contracting officer or a government contracts attorney.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The Prompt Payment Act requires federal agencies to pay contractors within the contract terms, usually 30 days after receiving a proper invoice, and to pay interest automatically if they are late. For July to December 2026 the rate is 4.75% a year, compounded every 30 days for up to one year.</p>

<p>Selling to the government can be steady, well-paid work, but cash flow suffers if invoices sit in an agency's queue. The Prompt Payment Act is your protection. It sets due dates, defines a proper invoice and makes agencies pay government invoice interest without being asked. This guide explains how the Prompt Payment Act works, the current rate, what your invoice must include, how interest is calculated, and how state prompt pay laws compare. If you need a clean, complete invoice format, start with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Note:</strong> This is general information, not legal advice. Your contract terms and agency procedures control the details, so check them and speak to a government contracts adviser for disputes.</p>

<h2>What the Prompt Payment Act covers</h2>
<p>The Prompt Payment Act applies to federal executive agencies paying for property and services under contracts. The Bureau of the Fiscal Service administers it, and the detailed rules are in 5 CFR Part 1315. According to Treasury's <a href="https://fiscal.treasury.gov/prompt-payment/" target="_blank" rel="noopener noreferrer">Prompt Payment overview</a>, once a vendor submits a proper invoice to the right office, the agency must pay on time, and in most cases must pay interest if it pays late.</p>
<p>The act does not force agencies to pay before the contract says so. It sets the default when the contract is silent and attaches a cost to missing the deadline.</p>

<h2>When payment is due</h2>
<p>Under 5 CFR 1315.4, if the contract does not set a date, payment is due 30 days after the payment period starts, which is when the agency receives a proper invoice (or accepts the goods or services, if later). Key timing rules:</p>
<table>
<thead><tr><th>Situation</th><th>Payment due</th></tr></thead>
<tbody>
<tr><td>Standard goods or services, no contract date</td><td>30 days after receipt of a proper invoice</td></tr>
<tr><td>Meat, fish, fresh eggs and similar items</td><td>No later than 7 days after delivery</td></tr>
<tr><td>Perishable agricultural commodities</td><td>No later than 10 days after delivery, unless the contract says otherwise</td></tr>
<tr><td>Dairy products, edible fats or oils</td><td>10 days after receipt of a proper invoice</td></tr>
<tr><td>Improper invoice</td><td>Agency must return it within 7 days with all defects listed</td></tr>
</tbody>
</table>
<p>Receipt dates matter. A mailed invoice counts from the date the agency stamps it received, or your invoice date if they do not stamp it. An electronic invoice counts from the date it arrives, or the next business day if it arrives after hours. If the agency has not formally accepted, acceptance is generally deemed to occur on the seventh day after delivery or completion, unless the contract sets a longer period.</p>
<h3>Accelerated payment for small businesses</h3>
<p>Treasury says agencies should pay early when an invoice is proper, early payment is in the government's interest and one of these applies: the invoice is under $2,500, the vendor is a small business, or the payment relates to an emergency, disaster or military deployment.</p>

<h2>The Prompt Payment interest rate for 2026</h2>
<p>The Fiscal Service sets the rate twice a year. Its <a href="https://fiscal.treasury.gov/prompt-payment/rates.html" target="_blank" rel="noopener noreferrer">Prompt Payment interest rate page</a> lists 4.75% for July 1 to December 31, 2026. The rate that applies is the one in effect on the day after the payment due date, and it stays fixed for that late payment even if the published rate changes later.</p>
<p>How interest works under 5 CFR 1315.10:</p>
<ul>
<li>It runs from the day after the due date through the payment date.</li>
<li>Calculations use a 360-day year.</li>
<li>Unpaid interest is added to principal at the end of each 30-day period, so it compounds.</li>
<li>It accrues for up to one year, or until you file a Contract Disputes Act claim.</li>
<li>Amounts under $1 do not have to be paid.</li>
<li>The agency must pay it automatically, with a notice showing the amount, days late and rate.</li>
</ul>

<h2>What a proper invoice must include</h2>
<p>Most late payment disputes start with an invoice the agency says was not proper. Under 5 CFR 1315.9(b), include:</p>
<ol>
<li>Your business name (as registered on the contract).</li>
<li>Invoice date.</li>
<li>Contract number or other delivery authorization, plus any line item numbers. See our guide to <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li>Your invoice number or other agreed identifier. A consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> helps.</li>
<li>Description, price and quantity of goods or services actually delivered.</li>
<li>Shipping and payment terms, unless the contract says these appear only there.</li>
<li>Your taxpayer identification number, unless agency procedures say otherwise. See <a href="/blog/tax-id-on-invoice">tax ID on invoices</a>.</li>
<li>Banking details for electronic funds transfer, unless waived. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers the layout.</li>
<li>A contact name, title and phone number.</li>
<li>Any other documents the contract requires, such as receiving reports or timesheets.</li>
</ol>
<p>Submit through the channel your contract names. Many agencies require an electronic invoicing system rather than email, and an invoice sent to the wrong place may not count as received.</p>

<h2>Worked example: calculating late payment interest</h2>
<p>An IT contractor sends a proper $48,000 invoice that the agency receives on August 3, 2026. The contract has no special terms, so payment is due 30 days later, on September 2, 2026. The agency pays on October 17, 2026, which is 45 days late. The rate in effect on September 3, 2026 is 4.75%.</p>
<ul>
<li><strong>First 30 days:</strong> $48,000 x 4.75% x 30 / 360 = $190.00. At the end of the 30-day period this is added to principal: $48,190.00.</li>
<li><strong>Next 15 days:</strong> $48,190 x 4.75% x 15 / 360 = $95.38.</li>
<li><strong>Total interest owed:</strong> $190.00 + $95.38 = $285.38.</li>
</ul>
<p>Without compounding the figure would be $285.00, so the 30-day rule adds a little, and more on longer delays. Treasury also publishes a compounding interest calculator. If the agency paid the $48,000 without the $285.38 and still had not paid it 10 days later, the contractor could request the additional penalty: 100% of the interest, here $285.38, because it is above the $25 minimum and below the $5,000 cap.</p>

<h2>Why government invoices get rejected</h2>
<p>An agency only starts the 30-day clock once it has a proper invoice, so a rejection can cost you weeks. Because the agency has 7 days to send back a defective invoice, you will usually learn about problems quickly, but each correction restarts the payment period from the date the corrected invoice is received. The most common causes are avoidable:</p>
<ul>
<li><strong>Wrong or missing contract number</strong>, or a task order number that does not match the work billed.</li>
<li><strong>Line items that do not match the contract</strong>, such as a different description, unit or price.</li>
<li><strong>Billing for work not yet accepted</strong>, or for more than the quantity delivered.</li>
<li><strong>Missing attachments</strong>, such as timesheets, receiving reports or travel receipts the contract requires.</li>
<li><strong>Name or banking details that differ</strong> from your registration records.</li>
<li><strong>Sending to the wrong office or system</strong>, so the invoice is never logged as received.</li>
<li><strong>Duplicate invoice numbers</strong>, which systems often reject automatically.</li>
</ul>
<p>Keep a checklist built from your contract's invoicing clause and run every invoice through it before you submit. For work billed in stages, tie each invoice to a defined, accepted deliverable.</p>

<h2>Checking the interest on a late payment</h2>
<p>When a late payment arrives, compare it with your records before you close the invoice:</p>
<ol>
<li>Confirm the receipt date the agency used, and compare it with your own submission record.</li>
<li>Work out the due date: the contract date, or 30 days after receipt of a proper invoice (or acceptance, if later).</li>
<li>Count the days late, from the day after the due date to the payment date.</li>
<li>Check the rate used was the one in effect on the day after the due date.</li>
<li>Recalculate with 30-day compounding on a 360-day year, or use Treasury's calculator.</li>
<li>If interest is missing or short, contact the paying office promptly and keep the 40-day deadline for any additional penalty request in mind.</li>
</ol>
<p>Record the interest as income separately from the invoice principal so your books reconcile.</p>

<h3>If the agency pays late without interest</h3>
<p>Under 5 CFR 1315.11, you can claim an additional penalty when:</p>
<ul>
<li>You received the late principal without the interest owed;</li>
<li>The agency did not pay the interest within 10 days of the payment date; and</li>
<li>You send a written request, postmarked, faxed or emailed by the 40th day after payment.</li>
</ul>
<p>Your request should identify the invoice, ask for the overdue interest and the additional penalty, include a copy of the invoice and state the date you received the principal. The additional penalty equals the original interest, with a $25 minimum and a $5,000 maximum, and is calculated per invoice.</p>

<h2>State prompt pay laws and private contracts</h2>
<p>The federal act only covers federal agencies. For state and local government work, look to your state's prompt pay statute. Most states have one, and many cover public construction and some private construction contracts too. They differ on payment deadlines, interest rates, retainage and what counts as a proper invoice, so check the statute or your state comptroller's guidance before you set terms.</p>
<p>Federal construction primes also have obligations to subcontractors through contract clauses, including paying subs promptly and passing down interest when they pay late. In private B2B work, there is generally no federal prompt pay rule, so your <a href="/blog/invoice-payment-terms">invoice payment terms</a> and contract are your main tools. Agree <a href="/blog/late-payment-fees">late payment fees</a> in writing up front. For construction billing, our sibling posts on <a href="/blog/lien-waiver">lien waivers</a> and <a href="/blog/aia-g702-g703-billing">AIA G702/G703 billing</a> cover related paperwork.</p>

<h3>Comparing prompt payment rules</h3>
<table>
<thead><tr><th>Setting</th><th>What sets the deadline</th><th>Interest</th></tr></thead>
<tbody>
<tr><td>Federal agencies</td><td>Contract, else 30 days after proper invoice (5 CFR 1315)</td><td>Automatic, 4.75% for July to December 2026</td></tr>
<tr><td>State and local agencies</td><td>State prompt pay statute and contract</td><td>Set by state law, varies</td></tr>
<tr><td>Private construction</td><td>Contract, plus state prompt pay law where it applies</td><td>Set by state law or contract</td></tr>
<tr><td>Private B2B</td><td>Your contract and invoice terms</td><td>Only if agreed in the contract</td></tr>
</tbody>
</table>
<p>Outside the US, other countries have their own regimes: see our guides to <a href="/blog/statutory-late-payment-interest">UK statutory late payment interest</a> and India's <a href="/blog/msme-45-days-payment-rule">MSME 45-day payment rule</a>.</p>

<h2>Tips to get government invoices paid on time</h2>
<ol>
<li>Read the contract's invoicing clause and note the system, address and required attachments.</li>
<li>Invoice only for delivered and accepted work, matching contract line items exactly.</li>
<li>Keep proof of submission and the receipt date.</li>
<li>Track every invoice against its due date, and follow up on any <a href="/blog/overdue-invoice">overdue invoice</a> before day 30.</li>
<li>Check each payment for interest, and diary day 40 if interest is missing.</li>
<li>Escalate disputes through the contracting officer, and if needed see our sibling guide to a <a href="/blog/demand-letter-for-payment">demand letter for payment</a>.</li>
</ol>

<h2>Send a proper invoice the first time</h2>
<p>The Prompt Payment Act only protects you once the agency has a proper invoice, so completeness is everything. Build yours with the <a href="/invoice-generator">invoice generator</a>, add your contract number, TIN and bank details, and pick a clean <a href="/invoice-templates/classic">classic invoice template</a>. For US-specific fields, use the <a href="/invoice-generator/usa">US invoice generator</a>.</p>
`,
  },
  {
    slug: "standard-mileage-vs-actual-expenses",
    title: "Standard Mileage vs Actual Expenses: Which Saves More in 2026?",
    description:
      "Standard mileage vs actual expenses for 2026: the 72.5 and 76 cent rates, first-year rules, who cannot switch, and a worked example comparing both methods.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "mileage-log-template",
      "self-employed-tax-deductions",
      "how-to-calculate-depreciation",
      "section-179-vs-bonus-depreciation",
    ],
    faqs: [
      {
        q: "What is the standard mileage rate for 2026?",
        a: "The IRS business standard mileage rate for 2026 is 72.5 cents per mile for January 1 to June 30 and 76 cents per mile for July 1 to December 31. The IRS raised the rate midyear in Announcement 2026-11, citing recent increases in fuel prices. You apply each rate to the business miles driven in its period, so a mileage log with dates is essential this year.",
      },
      {
        q: "Is standard mileage or actual expenses better?",
        a: "Standard mileage usually wins for efficient, lower-cost cars driven many business miles, because the rate is generous relative to running costs. Actual expenses usually win for expensive vehicles, heavy depreciation, high insurance or repair costs, or low annual mileage with a high business percentage. Run both calculations in the first year, because that choice limits what you can do later.",
      },
      {
        q: "Can I switch from actual expenses to standard mileage?",
        a: "Generally no, for the same car. To use the standard mileage rate for a car you own, you must choose it in the first year the car is used in your business. If you used actual expenses with accelerated depreciation, section 179 or bonus depreciation, you cannot switch to the standard rate for that car. A new vehicle gives you a fresh choice.",
      },
      {
        q: "Can I switch from standard mileage to actual expenses?",
        a: "Yes. If you choose the standard rate in the first year, you can switch to actual expenses in a later year. You must then depreciate the car using straight-line depreciation over its remaining useful life, and the car's basis is reduced by the depreciation built into the standard rates you already claimed: 35 cents per mile for 2026, 33 for 2025, 30 for 2024 and 28 for 2023.",
      },
      {
        q: "What does the standard mileage rate cover?",
        a: "It covers the costs of operating the car: fuel, oil, maintenance, repairs, tires, insurance, registration and depreciation or lease payments. You cannot deduct those separately when you use the standard rate. Business parking fees and tolls are deductible on top of the standard rate, and self-employed people can also deduct the business share of interest on a car loan.",
      },
      {
        q: "Can I use standard mileage for a leased car?",
        a: "Yes, but if you choose the standard rate for a leased car you must use it for the entire lease period, including renewals. You cannot use the standard rate if you previously claimed actual expenses for that leased car. Under the actual method, you deduct the business share of the lease payments, possibly reduced by an inclusion amount for higher value vehicles.",
      },
      {
        q: "Who cannot use the standard mileage rate?",
        a: "The IRS says you cannot use it if you operate five or more cars at the same time, as in a fleet, or if you previously claimed depreciation using any method other than straight-line, used MACRS, claimed section 179 or the special depreciation allowance for the car, or claimed actual expenses for a leased car. Most employees also cannot deduct unreimbursed car expenses at all.",
      },
      {
        q: "What records do I need for either method?",
        a: "For both methods you need a mileage log showing the date, destination, business purpose and miles for each trip, plus total miles for the year. For actual expenses you also need receipts for fuel, repairs, insurance, registration and the car's purchase documents for depreciation. In 2026 log dates carefully, because miles before and after July 1 use different standard rates.",
      },
      {
        q: "Is commuting deductible with either method?",
        a: "No. Driving between your home and a regular workplace is commuting and is not deductible under either method. Trips from a regular workplace to a client site, between job sites, or from a qualifying home office to clients are generally business miles. If your home is your principal place of business, trips from home to client locations usually count as business.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the standard mileage vs actual expenses decision, the standard rate (72.5 cents a mile to June 30, 2026 and 76 cents from July 1) is simpler and often better for economical cars driven lots of business miles. Actual expenses suit costly vehicles with high depreciation or running costs. Choose carefully in year one, because switching is restricted.</p>

<p>If you drive for your business, your car is probably one of your largest deductions. The IRS gives self-employed people two ways to claim it, and the choice between standard mileage vs actual expenses can be worth hundreds or thousands of dollars a year. It also has long-term consequences for the same vehicle. This guide compares both methods with the 2026 rates, explains the switching rules and works through real numbers. If you rebill mileage to clients, you can list it as a line item with our <a href="/invoice-generator">invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Depreciation limits and vehicle rules are complex, so confirm your situation with a tax professional.</p>

<h2>The 2026 mileage rates</h2>
<p>The IRS set the 2026 business rate at 72.5 cents per mile in Notice 2026-10, up from 70 cents in 2025. Then, in Announcement 2026-11, it raised the rate to 76 cents per mile for costs incurred on or after July 1, 2026, citing recent increases in fuel prices. The announcement says all other provisions of Notice 2026-10 remain in effect. The IRS <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer">standard mileage rates page</a> lists both periods.</p>
<table>
<thead><tr><th>Period</th><th>Business rate</th><th>Depreciation component (basis reduction)</th></tr></thead>
<tbody>
<tr><td>2023</td><td>65.5 cents</td><td>28 cents</td></tr>
<tr><td>2024</td><td>67 cents</td><td>30 cents</td></tr>
<tr><td>2025</td><td>70 cents</td><td>33 cents</td></tr>
<tr><td>January 1 to June 30, 2026</td><td>72.5 cents</td><td>35 cents</td></tr>
<tr><td>July 1 to December 31, 2026</td><td>76 cents</td><td>35 cents</td></tr>
</tbody>
</table>
<p>For more on the rate itself, see our sibling guide to the <a href="/blog/irs-mileage-rate-2026">IRS mileage rate for 2026</a>.</p>

<h2>How the standard mileage rate works</h2>
<p>You multiply business miles by the rate. That single figure replaces fuel, oil, maintenance, repairs, tires, insurance, registration and depreciation or lease payments. On top of it you can still deduct:</p>
<ul>
<li>Business parking fees and tolls, which the IRS says are deductible under either method.</li>
<li>The business share of interest on a car loan, if you are self-employed.</li>
<li>The business share of state and local personal property tax on the car.</li>
</ul>
<p>The method rewards high mileage and low running costs. It also needs far less paperwork: a <a href="/blog/mileage-log-template">mileage log</a> is the main record, rather than every fuel receipt.</p>

<h3>Business miles vs commuting</h3>
<p>Both methods only count business miles. Driving between home and a regular workplace is commuting and is never deductible. Trips from your office to a client, between job sites, to a supplier or to the bank for business usually count. If your home office is your principal place of business, trips from home to clients are generally business miles too, which is a big reason many freelancers qualify for meaningful car deductions.</p>
<h3>What your mileage log should show</h3>
<p>For each trip, record the date, starting point and destination, business purpose and miles driven. Note the odometer reading at the start and end of the year so you can prove total miles, which you need for the business percentage under the actual method and which Schedule C asks for. In 2026, make sure the log makes it easy to total miles before and after July 1, since each half uses a different rate.</p>

<h2>How the actual expense method works</h2>
<p>You add up the real costs of owning and running the car, then deduct the business percentage, based on business miles divided by total miles. According to <a href="https://www.irs.gov/taxtopics/tc510" target="_blank" rel="noopener noreferrer">IRS Topic 510 on business use of a car</a>, costs include gas, oil, repairs, tires, insurance, registration, licenses, and depreciation or lease payments.</p>
<p>Depreciation is the big variable. If you use actual expenses in the first year, the IRS says you must claim the special depreciation allowance unless you elect out, and annual depreciation caps apply to passenger vehicles. Our guides on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> and <a href="/blog/section-179-vs-bonus-depreciation">section 179 vs bonus depreciation</a> explain the options.</p>

<h2>Standard mileage vs actual expenses compared</h2>
<table>
<thead><tr><th>Factor</th><th>Standard mileage</th><th>Actual expenses</th></tr></thead>
<tbody>
<tr><td>Calculation</td><td>Business miles x IRS rate</td><td>Total car costs x business use %</td></tr>
<tr><td>Records</td><td>Mileage log, parking and toll receipts</td><td>Mileage log plus receipts for every cost</td></tr>
<tr><td>Depreciation</td><td>Built into the rate</td><td>Claimed separately, subject to limits</td></tr>
<tr><td>Parking and tolls</td><td>Deductible separately</td><td>Deductible separately</td></tr>
<tr><td>Best for</td><td>Economical cars, high business mileage</td><td>Expensive vehicles, high costs, high business %</td></tr>
<tr><td>Fleet of 5 or more</td><td>Not allowed</td><td>Allowed</td></tr>
<tr><td>Later switching</td><td>Can switch to actual (straight-line)</td><td>Generally cannot switch to standard</td></tr>
</tbody>
</table>

<h2>The switching rules you must know</h2>
<p>The first year a car is used in your business sets the path:</p>
<ul>
<li><strong>Owned car, standard rate in year one:</strong> you can switch to actual expenses in a later year, but must use straight-line depreciation over the remaining useful life.</li>
<li><strong>Owned car, actual expenses in year one:</strong> you generally cannot move to the standard rate for that car, particularly if you used MACRS, section 179 or bonus depreciation.</li>
<li><strong>Leased car, standard rate chosen:</strong> you must use it for the whole lease, including renewals.</li>
<li><strong>Five or more cars used at once:</strong> standard rate not available.</li>
</ul>
<p>When you sell a car you used the standard rate for, its basis is reduced by the depreciation component for each business mile. That affects the gain or loss on sale.</p>

<h2>Worked example: two drivers, two answers</h2>
<p><strong>Driver 1: economical sedan.</strong> Priya, a self-employed consultant, drove 15,000 miles in 2026, of which 9,000 were business miles (60%): 4,200 business miles from January to June and 4,800 from July to December.</p>
<ul>
<li>Standard mileage: 4,200 x $0.725 = $3,045.00, plus 4,800 x $0.76 = $3,648.00. Total $6,693.00.</li>
<li>Actual costs: fuel $2,400, insurance $1,500, repairs and maintenance $900, registration $300, depreciation $4,000. Total $9,100 x 60% = $5,460.00.</li>
<li>Standard mileage gives $1,233.00 more. Her $300 of business parking is deductible on top under either method.</li>
</ul>
<p>Her basis reduction for 2026 is 9,000 x $0.35 = $3,150, which she tracks for when she sells the car. Because she chose the standard rate in the car's first business year, she also keeps the option of switching to actual expenses later if her costs rise, for example after a major repair or a jump in insurance premiums.</p>
<p><strong>Driver 2: expensive work vehicle.</strong> Marcus, a contractor, drives the same 9,000 business miles out of 15,000, but his vehicle has much higher costs: fuel $3,600, insurance $2,400, repairs $1,100, registration $600 and allowable first-year depreciation of $12,000. Total $19,700 x 60% = $11,820.00, against the same $6,693.00 standard figure. Actual expenses give him $5,127.00 more, as long as his depreciation stays within the limits for his vehicle.</p>

<h2>What happens when you sell the car</h2>
<p>The method you use also affects the tax when you sell or trade in the vehicle. Under the standard rate, depreciation is built in, so each business mile reduces the car's basis by the depreciation component. Under the actual method, the depreciation you claimed reduces basis directly.</p>
<p>Continuing Priya's example: say she bought her sedan for $30,000 in January 2024, chose the standard rate, and drove 9,000 business miles in each of 2024, 2025 and 2026. Using the IRS depreciation components of 30, 33 and 35 cents, her total basis reduction is 9,000 x ($0.30 + $0.33 + $0.35) = 9,000 x $0.98 = $8,820. Because she also uses the car personally, the sale is split between business and personal portions, and the business portion's gain or loss is measured against the reduced basis. Your tax preparer will handle the detail, but you need the mileage records to support it.</p>

<h2>Special situations</h2>
<h3>More than one vehicle</h3>
<p>You choose a method for each car separately. A business could use the standard rate for an economical sedan and actual expenses for a heavy work truck. The fleet rule only blocks the standard rate when you operate five or more cars at the same time.</p>
<h3>Rideshare and delivery drivers</h3>
<p>Gig drivers often drive a very high share of business miles in a modest car, which tends to favor the standard rate. Count the miles driven with the app on and travelling to pick-ups, not your commute to the area you usually work from, and keep the app's mileage reports alongside your own log.</p>
<h3>Electric and hybrid vehicles</h3>
<p>The standard rate is the same for all fuel types. Owners of efficient or electric vehicles with low running costs often find the standard rate generous compared with actual costs, while very expensive EVs with large depreciation may still come out ahead on actual expenses. Run both numbers.</p>
<h3>Mid-year business start or new car</h3>
<p>If you start the business or buy the car partway through 2026, only the miles from that date count, and the business percentage under the actual method is based on miles driven while the car was in business use. Remember the July 1 rate change if you start before then.</p>

<h2>How to choose the right method</h2>
<ol>
<li><strong>Keep a full mileage log</strong> from day one, with dates, so you can split 2026 miles at July 1.</li>
<li><strong>Estimate annual costs</strong> for fuel, insurance, repairs and registration.</li>
<li><strong>Estimate allowable depreciation</strong> with your tax preparer, including any first-year limits.</li>
<li><strong>Calculate both methods</strong> using your business percentage.</li>
<li><strong>Think ahead.</strong> If the numbers are close, the standard rate keeps more flexibility, because you can switch to actual later.</li>
<li><strong>Record the choice</strong> and report it on Schedule C line 9 (and Form 4562 where required).</li>
</ol>
<p>Our list of <a href="/blog/business-expense-categories">business expense categories</a> shows where vehicle costs sit on Schedule C, and our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> guide covers what else you can claim.</p>

<h3>Common mistakes</h3>
<ul>
<li><strong>Using one 2026 rate for the whole year.</strong> Miles before July 1 use 72.5 cents and after use 76 cents.</li>
<li><strong>Deducting fuel or repairs on top of the standard rate.</strong> Only parking, tolls, loan interest and personal property taxes are extra.</li>
<li><strong>Counting commuting miles.</strong> Home to a regular workplace is not business travel.</li>
<li><strong>Taking bonus depreciation in year one</strong> without realizing it locks you out of the standard rate.</li>
<li><strong>Weak records.</strong> Reconstructing a log at year end is hard to defend. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> helps.</li>
</ul>

<h3>Billing clients for mileage</h3>
<p>Your tax method and what you charge clients are separate. Many freelancers rebill travel at the IRS rate because clients recognize it, but you can charge any rate your contract allows. Show the miles, dates and rate as a separate line, as explained in our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a>. If you rebill mileage, record the client payment as income so your deduction and reimbursement match up.</p>

<h2>Invoice mileage the easy way</h2>
<p>Whichever side of standard mileage vs actual expenses you land on, good records make the deduction safe. Log every trip, then add billable miles to client invoices with our <a href="/invoice-generator">free invoice generator</a>, the <a href="/invoice-generator/usa">US invoice generator</a> or a <a href="/invoice-templates/modern">modern invoice template</a>. Our <a href="/user-guide">user guide</a> shows how to add custom line items.</p>
`,
  },
];
