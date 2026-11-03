import type { PostDraft } from "../blog";

export const US_TAX_FORMS_2026_B_POSTS: PostDraft[] = [
  {
    slug: "form-1096",
    title: "Form 1096: Do You Still Need It in 2027?",
    description:
      "Form 1096 is only for paper 1099 filing. See who still needs it in 2027, the 10-return e-file rule, FIRE to IRIS changes, deadlines and how to fill it out.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-file-1099-nec",
      "1099-nec-threshold-2026",
      "w9-and-1099-for-contractors",
    ],
    faqs: [
      {
        q: "Do I need Form 1096 if I e-file my 1099s?",
        a: "No. Form 1096 is a transmittal cover sheet used only when you mail paper Copy A forms to the IRS. If you file through the IRS Information Returns Intake System (IRIS) or through a software provider that e-files for you, the electronic submission replaces Form 1096 entirely. Do not mail a 1096 or paper copies of returns you already filed electronically, because the IRS may treat them as duplicate filings and send you notices.",
      },
      {
        q: "Can I print Form 1096 from the IRS website?",
        a: "Not for filing. The IRS scans paper information returns by machine, so the official red-ink Form 1096 and Copy A forms must be ordered from the IRS or bought from an office supplier. The downloadable PDF on IRS.gov is for information only. You can print recipient copies, such as Copy B of Form 1099-NEC, from the website, because those go to the payee rather than to the IRS scanning center.",
      },
      {
        q: "When is Form 1096 due?",
        a: "Form 1096 is due on the same date as the paper forms it transmits. For Form 1099-NEC covering 2026 payments, the usual January 31 deadline falls on a Sunday in 2027, so the due date moves to the next business day. Most other paper 1099s are due by the end of February, also shifted when that date falls on a weekend. Forms 5498 are due at the end of May. Confirm exact dates in the current IRS General Instructions.",
      },
      {
        q: "Do I need a separate Form 1096 for each type of 1099?",
        a: "Yes. Each 1096 can cover only one form type. If you mail both Forms 1099-NEC and 1099-MISC, you send two separate Forms 1096, each with its own totals and the matching box checked in box 6. Keep the stacks separate in the envelope, and do not staple the forms together. Mail them flat to the IRS processing center assigned to your state.",
      },
      {
        q: "What happens if I paper file when I was required to e-file?",
        a: "If you file 10 or more information returns in total during the year and still send paper, the IRS can charge a failure-to-file-electronically penalty. The General Instructions list up to $340 per return for returns due in 2026, applied to returns beyond the first 10. If e-filing would be a genuine hardship, you can request a waiver on Form 8508 at least 45 days before the due date.",
      },
      {
        q: "Is Form 1096 being discontinued?",
        a: "The IRS has not discontinued Form 1096, and it remains the required cover sheet for paper submissions. What changed is the electronic side: the FIRE system is being retired after November 2026, and IRIS becomes the IRS's only electronic intake system for information returns from the 2027 filing season. With the 10-return e-file threshold and the higher $2,000 1099-NEC reporting threshold, far fewer small businesses will need a 1096.",
      },
    ],
    content: `
<p>Form 1096 is the cover sheet you mail to the IRS with paper copies of Forms 1099, 1098, 5498 and W-2G. In 2027 you still need it only if you file fewer than 10 information returns in total and choose paper; anyone filing 10 or more, or filing electronically through IRIS, never touches a Form 1096 at all. For most small businesses that pay a handful of contractors, the honest answer is "probably not, but it depends on how many forms you file and how you file them."</p>

<p>This guide explains what Form 1096 does, who still uses it for 2026 tax-year returns filed in early 2027, how the retirement of the IRS FIRE system and the new $2,000 Form 1099-NEC threshold change the picture, and how to fill out the form box by box if you do mail paper. It is general information, not tax advice; check the current IRS instructions or a tax professional for your situation.</p>

<h2>What is Form 1096?</h2>
<p>Form 1096, "Annual Summary and Transmittal of U.S. Information Returns," is a one-page summary that sits on top of a stack of paper information returns. It tells the IRS who is filing, which form type is enclosed, how many forms are in the stack and the total dollar amount reported. The IRS scans it alongside Copy A of each form.</p>
<p>It is used with paper filings of:</p>
<ul>
<li>Forms 1099 (NEC, MISC, INT, DIV, R, S and others)</li>
<li>Forms 1097 and 1098 (for example, mortgage interest)</li>
<li>Forms 3921 and 3922 (stock option transfers)</li>
<li>Forms 5498 (IRA and HSA contributions)</li>
<li>Form W-2G (gambling winnings)</li>
</ul>
<p>It is not used for Form W-2. Paper W-2s go to the Social Security Administration with Form W-3, which plays the same transmittal role. Our guide to <a href="/blog/form-w-2">Form W-2</a> covers that process.</p>

<h2>Do you still need Form 1096 in 2027?</h2>
<p>Three rules decide it.</p>
<h3>1. The 10-return electronic filing threshold</h3>
<p>For information returns required to be filed on or after January 1, 2024, the IRS lowered the e-file threshold from 250 returns per form type to <strong>10 returns in the aggregate</strong>. You add up every information return you file for the year, across all types (1099-NEC, 1099-MISC, 1099-INT, W-2s and so on). If the total is 10 or more, you must file electronically. Five 1099-NECs plus five W-2s already puts you at 10. The rule is set out in the IRS <a href="https://www.irs.gov/instructions/i1099gi" target="_blank" rel="noopener noreferrer">General Instructions for Certain Information Returns</a>.</p>
<h3>2. Electronic filing replaces Form 1096</h3>
<p>When you e-file, no transmittal form is needed. The electronic submission carries the same summary data. Filing 1099s through IRIS, accounting software or a payroll provider means you never fill out a 1096.</p>
<h3>3. Fewer 1099-NECs are required from 2026</h3>
<p>The One Big Beautiful Bill Act raised the Form 1099-NEC and most 1099-MISC reporting thresholds from $600 to <strong>$2,000 for payments made in 2026</strong>, with inflation adjustments after that. A business that paid six contractors $900 each in 2026 has no 1099-NEC filing obligation for them at all. See our breakdown of the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold</a> for the details and exceptions.</p>

<table><thead><tr><th>Your situation (2026 tax year, filed in 2027)</th><th>Need Form 1096?</th></tr></thead><tbody>
<tr><td>No contractor paid $2,000 or more, no other information returns</td><td>No; nothing to file</td></tr>
<tr><td>3 Forms 1099-NEC, no W-2s, filing on paper</td><td>Yes, one 1096 for the NEC stack</td></tr>
<tr><td>3 Forms 1099-NEC filed through IRIS or software</td><td>No</td></tr>
<tr><td>4 Forms 1099-NEC and 2 Forms 1099-MISC on paper</td><td>Yes, two 1096s (one per form type)</td></tr>
<tr><td>6 Forms 1099-NEC plus 4 W-2s (10 total)</td><td>No; you must e-file everything</td></tr>
<tr><td>Hardship waiver approved on Form 8508</td><td>Yes, for the paper returns covered by the waiver</td></tr>
</tbody></table>

<h2>FIRE retirement and IRIS: what changes for 2027</h2>
<p>For years, high-volume filers and software vendors submitted information returns through the IRS FIRE (Filing Information Returns Electronically) system. The IRS has announced that FIRE is being retired: November 19, 2026 is the last day to file through FIRE, and the <a href="https://www.irs.gov/fire" target="_blank" rel="noopener noreferrer">IRS FIRE retirement page</a> states that IRIS will be the only intake system for information returns from the 2027 filing season, including prior-year returns and corrections.</p>
<p>For a small business this matters in two ways:</p>
<ul>
<li><strong>IRIS has a free web portal.</strong> You can key in 1099s directly, upload a CSV, issue corrections and download recipient copies. It requires an IRIS Transmitter Control Code (TCC), and the IRS warns that applications can take up to 45 days, so apply well before January.</li>
<li><strong>Your software provider must support IRIS.</strong> If you rely on accounting or payroll software to file 1099s, confirm it has moved to IRIS for 2027.</li>
</ul>
<p>None of this changes the paper route. If you file fewer than 10 returns and prefer paper, Form 1096 still goes on top of the stack.</p>

<h2>Form 1096 deadlines for 2026 returns</h2>
<p>Form 1096 is due on the same date as the forms it transmits. When a deadline falls on a weekend or legal holiday, it moves to the next business day.</p>
<table><thead><tr><th>Form transmitted</th><th>Normal deadline</th><th>For 2026 returns (filed in 2027)</th></tr></thead><tbody>
<tr><td>1099-NEC</td><td>January 31</td><td>February 1, 2027 (Jan. 31 is a Sunday)</td></tr>
<tr><td>Most other 1099s, 1098, W-2G on paper</td><td>February 28</td><td>March 1, 2027 (Feb. 28 is a Sunday)</td></tr>
<tr><td>Same forms filed electronically</td><td>March 31</td><td>March 31, 2027 (no 1096 needed)</td></tr>
<tr><td>5498 series</td><td>May 31</td><td>June 1, 2027 (May 31 is Memorial Day)</td></tr>
</tbody></table>
<p>There is no automatic extension for Form 1099-NEC. For most other information returns, Form 8809 gives an automatic 30-day extension if filed by the due date. Put these dates on the same calendar you use for the rest of your <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a>.</p>

<h2>How to fill out Form 1096, box by box</h2>
<ol>
<li><strong>Filer information.</strong> Enter your name, street address, city, state and ZIP exactly as they appear on the 1099s. Add a contact person, phone and email so the IRS can reach you about errors.</li>
<li><strong>Box 1 or Box 2.</strong> Enter your employer identification number in box 1, or your Social Security number in box 2 if you are a sole proprietor without an EIN. Never both. If you are still using your SSN, our guide on <a href="/blog/ein-vs-ssn">EIN vs SSN</a> explains why an EIN is usually better.</li>
<li><strong>Box 3, total number of forms.</strong> Count the Copy A forms in this stack, not the pages. Voided and blank forms on the same sheet do not count.</li>
<li><strong>Box 4, federal income tax withheld.</strong> The total of the withholding boxes on the enclosed forms. For most 1099-NECs this is zero unless you applied backup withholding.</li>
<li><strong>Box 5, total amount reported.</strong> The sum of the amounts in the boxes the instructions specify for that form type. For 1099-NEC that is box 1, nonemployee compensation.</li>
<li><strong>Box 6.</strong> Check exactly one box for the form type enclosed.</li>
<li><strong>Check the current-year form.</strong> The IRS occasionally adjusts the box layout, so follow the instructions printed on the edition you bought rather than last year's copy.</li>
<li><strong>Sign and date</strong> the form, then mail it flat with the Copy A forms, unstapled, to the IRS processing center listed for your state in the General Instructions.</li>
</ol>

<h2>Worked example: a small agency with paper filing</h2>
<p>Here is an illustrative case. A two-person design studio paid these contractors in 2026:</p>
<table><thead><tr><th>Payee</th><th>Type</th><th>Paid in 2026</th><th>Form needed?</th></tr></thead><tbody>
<tr><td>Freelance copywriter (sole proprietor)</td><td>Services</td><td>$8,400</td><td>1099-NEC</td></tr>
<tr><td>Photographer (single-member LLC, not taxed as a corporation)</td><td>Services</td><td>$3,150</td><td>1099-NEC</td></tr>
<tr><td>Web developer (S corporation)</td><td>Services</td><td>$12,000</td><td>No, corporations are generally exempt</td></tr>
<tr><td>Illustrator</td><td>Services</td><td>$1,600</td><td>No, under $2,000</td></tr>
<tr><td>Office landlord (individual)</td><td>Rent</td><td>$14,400</td><td>1099-MISC, box 1</td></tr>
</tbody></table>
<p>The studio has no employees and files three information returns, well under 10, so paper is allowed. It mails two packages' worth of paperwork in one envelope or two: one Form 1096 with box 3 = 2, box 5 = $11,550 and the 1099-NEC box checked, and a second Form 1096 with box 3 = 1, box 5 = $14,400 and the 1099-MISC box checked. The NEC set is due February 1, 2027; the MISC set by March 1, 2027.</p>
<p>The figures come straight from the studio's books and vendor invoices. When contractors send clear, numbered invoices with their legal name and tax ID, totaling a year of payments takes minutes. If you are a contractor yourself, our article on <a href="/blog/w9-and-1099-for-contractors">W-9s and 1099s for contractors</a> shows what to collect up front.</p>

<h2>Common Form 1096 mistakes</h2>
<ul>
<li><strong>Printing Copy A or Form 1096 from IRS.gov.</strong> Those PDFs cannot be scanned. Order official forms early, since stock runs low in January.</li>
<li><strong>Mixing form types under one 1096.</strong> One transmittal per form type, always.</li>
<li><strong>Filing paper after crossing the 10-return threshold.</strong> W-2s count toward the 10, which surprises many owners who hire their first employee.</li>
<li><strong>Sending a 1096 for e-filed returns.</strong> This creates duplicates.</li>
<li><strong>Totals that do not match.</strong> Box 5 must equal the sum of the enclosed forms. Add them twice.</li>
<li><strong>Issuing 1099s below the new threshold.</strong> Not a penalty risk, but unnecessary work and confusing for payees. Check the <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">differences between 1099-NEC, 1099-MISC and 1099-K</a> before you file.</li>
</ul>

<h2>Penalties if you get it wrong</h2>
<p>Information return penalties apply per return, and they are adjusted for inflation each year. For returns due in 2026, the IRS listed $60 per return if corrected within 30 days, $130 if corrected by August 1 and $340 after August 1 or if not filed, with lower annual caps for businesses with average gross receipts of $5 million or less. Intentional disregard starts at $680 per return with no cap. Separate penalties apply for failing to give the payee their copy. If you receive a penalty notice and had a good reason, see our guide to <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>.</p>

<h2>What to do if you made a mistake</h2>
<p>If you mailed a 1096 and later find an error on a 1099, file a corrected 1099 (check the "CORRECTED" box) with a new Form 1096 for the corrections. If you discover that you should have e-filed, file the remaining returns electronically and keep a note of the date; do not refile the same returns. If a payee reports a different amount on their own return than you filed, the mismatch may trigger an IRS notice for them; our guide to the <a href="/blog/irs-cp2000-notice">IRS CP2000 notice</a> explains that process, and our article on the <a href="/blog/amended-tax-return-1040-x">amended tax return (Form 1040-X)</a> covers how payees fix their side.</p>

<h2>Bottom line</h2>
<p>Form 1096 is a paper-era form that still exists for small filers. If you file fewer than 10 information returns and prefer paper, buy the official red-ink forms and send one 1096 per form type by the deadline. Otherwise, register for IRIS or let your software e-file, and skip the 1096 entirely. Either way, the work starts with clean payment records. Ask contractors for proper invoices, and if you are the one billing clients, create professional numbered invoices with our <a href="/invoice-generator">free invoice generator</a>; there is no sign-up, and you can download each invoice as a PDF in seconds.</p>
`,
  },
  {
    slug: "amended-tax-return-1040-x",
    title: "Amended Tax Return (Form 1040-X): When and How to File",
    description:
      "How to file an amended tax return on Form 1040-X: when you must amend, when you shouldn't, deadlines, e-filing, processing times and a self-employed example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-tax-deductions",
      "irs-penalty-abatement",
      "how-to-pay-irs-online",
    ],
    faqs: [
      {
        q: "How long do I have to file an amended tax return?",
        a: "To claim a refund, you generally must file Form 1040-X within three years after the date you filed the original return or within two years after the date you paid the tax, whichever is later. A return filed early is treated as filed on the April due date, so the three-year clock starts then. Longer windows exist for bad debts, worthless securities, foreign tax credits and federally declared disasters. There is no deadline to amend when you owe more, but interest keeps growing until you pay.",
      },
      {
        q: "Can I e-file Form 1040-X?",
        a: "Yes, for most recent years. The IRS accepts electronically filed Forms 1040-X through tax software, and e-filing allows direct deposit of any refund for tax years 2021 and later. Paper filing is still required for older tax years and in a few situations, such as when the original return for the year was filed on paper. Your tax software will tell you whether the year you are amending can be e-filed.",
      },
      {
        q: "How long does an amended return take to process?",
        a: "Amended returns are processed by hand and take far longer than original returns. The IRS generally tells taxpayers to allow 8 to 12 weeks, and it warns that processing can take up to 16 weeks or more. You can track progress with the Where's My Amended Return tool on IRS.gov, which shows returns for the current year and up to three prior years, usually starting about three weeks after you file.",
      },
      {
        q: "Should I amend if the IRS already sent me a notice?",
        a: "Usually not. If you received a CP2000 or a math-error notice about the same item, respond to that notice rather than filing a separate 1040-X, because the notice process already adjusts your account. Filing an amended return for the same change can create duplicate adjustments and delays. The exception is when you need to report other changes the notice did not cover. Read the notice carefully and follow its instructions.",
      },
      {
        q: "Do I need to amend my state return too?",
        a: "Often yes. Most states start their calculation from federal adjusted gross income or taxable income, so a federal change usually changes your state tax. Many states require you to report federal changes within a set period, commonly 90 to 180 days. File the state amended return separately with your state tax agency; the IRS says not to attach your state return to the federal 1040-X.",
      },
      {
        q: "How many times can I amend the same tax year?",
        a: "The IRS allows up to three amended returns for the same tax year to be filed electronically. In practice, wait until any earlier amended return has been processed before filing another, and gather all your corrections into one filing whenever you can. Each new 1040-X should show the figures as previously adjusted, not the original return, so keep copies of every version you file.",
      },
      {
        q: "Will filing an amended return trigger an audit?",
        a: "Amending does not automatically trigger an audit. Amended returns are reviewed individually, so a claim for a large refund without documentation may draw questions, but correcting a genuine mistake is far safer than leaving it for the IRS to discover. Keep invoices, bank statements, receipts and corrected forms that support every change, and include a clear explanation in Part II of Form 1040-X.",
      },
    ],
    content: `
<p>An amended tax return is how you correct a federal individual income tax return you have already filed. You use Form 1040-X when your filing status, income, deductions, credits or dependents were wrong, and you generally have three years from filing (or two years from paying) to claim any refund. If the only problem is a math error or a missing schedule the IRS asked for, you do not need to amend at all.</p>

<p>For self-employed people, amended returns are common: a late Form 1099, a forgotten batch of invoices, a missed home office deduction or a corrected 1099-K. This guide covers when to file an amended tax return, when not to, how to fill out Form 1040-X, how long it takes, and a worked example for a freelancer. It is general information rather than tax advice; for anything complex, talk to a tax professional.</p>

<h2>When should you file an amended tax return?</h2>
<p>The IRS says to file Form 1040-X when there is a change to your filing status, income, deductions, credits, dependents or tax liability. Typical triggers for business owners and freelancers:</p>
<ul>
<li><strong>Unreported income.</strong> A client paid an invoice you forgot to record, or a 1099-NEC arrived after you filed.</li>
<li><strong>A corrected information return.</strong> A payment platform or client issued a corrected 1099-K or 1099-NEC with a different amount.</li>
<li><strong>Missed deductions.</strong> Mileage, equipment, software or the <a href="/blog/home-office-deduction">home office deduction</a> you did not claim.</li>
<li><strong>Missed credits or deductions tied to income level,</strong> such as the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a> or the self-employed health insurance deduction.</li>
<li><strong>Wrong filing status</strong>, such as filing single when you qualified as head of household.</li>
<li><strong>Changes from a pass-through business.</strong> An amended Schedule K-1 from a partnership or S corporation changes your share of income, so wait for the corrected K-1 before amending.</li>
</ul>

<h2>When not to amend</h2>
<table><thead><tr><th>Situation</th><th>Amend?</th><th>What to do instead</th></tr></thead><tbody>
<tr><td>Math error on the original return</td><td>No</td><td>The IRS corrects it and sends a notice</td></tr>
<tr><td>Forgot to attach a W-2 or schedule</td><td>No</td><td>Wait; the IRS will ask for it if needed</td></tr>
<tr><td>Received a CP2000 notice for the same item</td><td>Usually no</td><td>Respond to the notice by its deadline</td></tr>
<tr><td>Original return not yet processed, simple error</td><td>Wait</td><td>File the 1040-X after the original is accepted and processed</td></tr>
<tr><td>Missed income or deductions</td><td>Yes</td><td>File Form 1040-X</td></tr>
<tr><td>Need to change business return (Form 1065, 1120-S)</td><td>Business return first</td><td>Business files its correction; owners then amend using new K-1s</td></tr>
</tbody></table>
<p>If the IRS proposes changes because its records do not match your return, the right response is usually to answer the notice. Our guide to the <a href="/blog/irs-cp2000-notice">IRS CP2000 notice</a> walks through that process.</p>

<h2>Amended tax return deadlines</h2>
<p>According to the IRS page on how to <a href="https://www.irs.gov/filing/file-an-amended-return" target="_blank" rel="noopener noreferrer">file an amended return</a>, a refund claim must generally be filed within three years after the date you filed your original return or two years after the date you paid the tax, whichever is later. Returns filed before the April due date are treated as filed on that date.</p>
<table><thead><tr><th>Tax year</th><th>Original due date</th><th>Refund claim deadline (if filed on time)</th></tr></thead><tbody>
<tr><td>2023</td><td>April 15, 2024</td><td>April 15, 2027</td></tr>
<tr><td>2024</td><td>April 15, 2025</td><td>April 15, 2028</td></tr>
<tr><td>2025</td><td>April 15, 2026</td><td>April 15, 2029</td></tr>
</tbody></table>
<p>If you filed on extension, for example in October, the three years run from that later filing date. If you owe additional tax, there is no "deadline" for amending, but interest and possibly penalties accrue from the original due date, so amend and pay as soon as you find the error. You can pay through IRS Direct Pay or your online account; see <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a>.</p>

<h2>How to file Form 1040-X: step by step</h2>
<ol>
<li><strong>Gather the original return and the corrected documents:</strong> new 1099s, K-1s, invoices, receipts or bank statements that support the change.</li>
<li><strong>Use the right year.</strong> Each Form 1040-X covers one tax year. Amending two years means two separate forms.</li>
<li><strong>Prepare a complete corrected return.</strong> Tax software now prepares a full corrected Form 1040 along with the 1040-X, plus any changed schedules (Schedule C, Schedule SE, Schedule 1 and so on).</li>
<li><strong>Complete the three columns.</strong> Column A shows the original or previously adjusted amounts, column B the net increase or decrease, and column C the corrected amounts.</li>
<li><strong>Explain the changes in Part II.</strong> Be specific: "Reported $4,200 of nonemployee compensation from Client X omitted from Schedule C; Form 1099-NEC received March 2026."</li>
<li><strong>File electronically if possible.</strong> E-filing is faster and allows direct deposit for tax years 2021 and later. Older years must be mailed to the address in the Form 1040-X instructions.</li>
<li><strong>Pay any balance due</strong> right away to limit interest.</li>
<li><strong>Amend your state return</strong> if the federal change affects it.</li>
<li><strong>Track the return</strong> using Where's My Amended Return, usually starting about three weeks after filing.</li>
</ol>

<h2>Worked example: a freelancer finds a missing 1099 and missed deductions</h2>
<p>Illustrative numbers only. Maya, a freelance UX designer filing single, filed her 2025 return in March 2026 showing Schedule C net profit of $62,000. In May she discovered two problems:</p>
<ul>
<li>A client's $4,500 payment for invoice #2025-041 was deposited into her savings account and never recorded.</li>
<li>She forgot $2,700 of business software subscriptions and a $1,300 laptop purchase.</li>
</ul>
<table><thead><tr><th>Item</th><th>Original (A)</th><th>Change (B)</th><th>Corrected (C)</th></tr></thead><tbody>
<tr><td>Gross receipts</td><td>$88,000</td><td>+$4,500</td><td>$92,500</td></tr>
<tr><td>Expenses</td><td>$26,000</td><td>+$4,000</td><td>$30,000</td></tr>
<tr><td>Schedule C net profit</td><td>$62,000</td><td>+$500</td><td>$62,500</td></tr>
</tbody></table>
<p>Because the extra income and the extra deductions nearly cancel out, her net profit rises by only $500. Self-employment tax on that increase is about $71 ($500 x 92.35% x 15.3%), and income tax adds a little more after the half-SE-tax and QBI deductions. She files Form 1040-X, pays the small balance with interest and avoids a future CP2000 for the unreported 1099-NEC. Had she not found the missed deductions, the same omission would have cost far more.</p>
<p>The lesson: reconcile your invoices against bank deposits before you file. A numbered invoice log makes missing payments obvious. Our <a href="/blog/self-employed-tax-deductions">list of self-employed tax deductions</a> is a useful checklist for the expense side.</p>

<h2>Amended return scenarios common for freelancers</h2>
<h3>A corrected 1099-K or 1099-NEC</h3>
<p>Payment platforms sometimes issue corrected forms in spring after you have filed. Compare the corrected amount to your own records. If your return already reported the right income from your invoices, a corrected form may not change your tax at all, and you do not need to amend just because a form arrived. Amend only when your reported figures were actually wrong. Keep the corrected form with your records in case the IRS asks.</p>
<h3>Double-counted income</h3>
<p>A frequent error is reporting the same payment twice: once from the 1099-K issued by a card processor and again from the client's 1099-NEC. If that happened, amending lowers your gross receipts and produces a refund. Your invoice log is the evidence that it was one payment, not two.</p>
<h3>Missed estimated payments credit</h3>
<p>If you made a fourth-quarter estimated payment in January but forgot to include it on the return, the IRS often catches this and adjusts your account. Check your IRS online account before amending; you may only need to respond to a notice.</p>
<h3>Changing an election</h3>
<p>Some choices, such as electing to expense equipment under section 179 or switching between actual vehicle expenses and the standard mileage rate, have special rules about when they can be changed on an amended return. Ask a preparer before amending purely to change an election.</p>

<h2>Interest and penalties when you owe more</h2>
<p>Interest on additional tax runs from the original due date of the return, not the date you amend, and compounds daily at the federal short-term rate plus 3 percentage points. A late-payment penalty of 0.5% per month can also apply to the unpaid amount. If you file after the April due date, do not calculate interest or penalties yourself; the IRS computes them and sends a bill. Paying the balance at the same time you file stops interest from growing further.</p>

<h2>Amending business returns</h2>
<p>Form 1040-X is for individuals, which includes sole proprietors and single-member LLCs reporting on Schedule C. Other entities correct their own returns:</p>
<ul>
<li><strong>C corporations</strong> file Form 1120-X.</li>
<li><strong>S corporations</strong> file a new Form 1120-S with the "amended return" box checked and issue amended K-1s.</li>
<li><strong>Partnerships</strong> under the centralized audit regime generally cannot simply amend; they file an administrative adjustment request. Our <a href="/blog/form-1065">Form 1065 guide</a> covers the basics.</li>
</ul>
<p>After the entity corrects its return, each owner reviews the new K-1 and amends their personal return if their tax changes.</p>

<h2>Common mistakes on Form 1040-X</h2>
<ul>
<li><strong>Filing before the original return is processed.</strong> Wait until the refund arrives or the balance is processed.</li>
<li><strong>Using the wrong year's form.</strong> Use the Form 1040-X revision and the tax rules for the year you are amending.</li>
<li><strong>Forgetting downstream changes.</strong> Changing Schedule C changes Schedule SE, the QBI deduction and sometimes credits.</li>
<li><strong>Not paying the extra tax.</strong> The IRS bills interest from the original due date.</li>
<li><strong>Vague explanations.</strong> A clear Part II reduces follow-up letters.</li>
<li><strong>Ignoring the state.</strong> Many states require you to report federal changes.</li>
</ul>

<h2>What if you can't pay the extra tax?</h2>
<p>File the amended return anyway. Filing stops the failure-to-file issues from growing, and you can request a payment plan online. If penalties are assessed and you have a reasonable cause or a clean history, ask for first-time abatement; see our guide to <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>. To avoid the same squeeze next year, review your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> and our sibling guide to the <a href="/blog/underpayment-penalty-form-2210">underpayment penalty (Form 2210)</a>.</p>

<h2>Keep records that make amending easy</h2>
<p>Most amended returns from freelancers trace back to incomplete income records. Keep every invoice, mark it paid when the money lands, and reconcile monthly against your bank statements and any 1099-K or 1099-NEC you receive. When your invoices are numbered, dated and stored as PDFs, finding a missing payment takes minutes rather than a weekend. You can create those invoices with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF ready for your records.</p>
`,
  },
  {
    slug: "s-corp-reasonable-salary",
    title: "S Corp Reasonable Salary: How Much to Pay Yourself",
    description:
      "How to set an S corp reasonable salary: IRS factors, court cases, the 60/40 myth, 2026 and 2027 payroll tax math and a worked example for a one-owner S corp.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "s-corp-election-form-2553",
      "how-to-pay-yourself-as-a-business-owner",
      "s-corp-vs-llc",
    ],
    faqs: [
      {
        q: "Is there an IRS formula for S corp reasonable salary?",
        a: "No. The IRS does not publish a percentage, formula or safe harbor. Reasonable compensation is a facts-and-circumstances test: what would the business pay an outside person to do the same work, given your training, duties, hours and the company's size and profits? Courts weigh many factors and no single one decides the case. The practical answer is to benchmark your role against market pay data and document how you set the figure.",
      },
      {
        q: "Does the 60/40 rule for S corp salary work?",
        a: "The 60/40 split, paying 60% of profit as salary and 40% as distributions, is a rule of thumb, not an IRS rule. It can be reasonable for some businesses and far off for others. A consultant whose profit comes almost entirely from personal services may need a higher salary share, while a business with employees and equipment generating income can justify a lower one. Base the number on market pay for your role, then sanity-check it.",
      },
      {
        q: "Can an S corp owner take no salary at all?",
        a: "Only if the owner performs no meaningful services for the company, or the business has no profit to pay a salary from. If you work in the business and take distributions, the IRS expects reasonable wages first. In years with a loss or very low profit, a lower salary or none may be defensible, but taking distributions while paying yourself nothing is the pattern most likely to be reclassified as wages in an audit.",
      },
      {
        q: "What happens if my S corp salary is too low?",
        a: "The IRS can reclassify part of your distributions as wages. That makes the company liable for the employer and employee shares of Social Security and Medicare tax on the reclassified amount, plus federal unemployment tax, interest and penalties, which can include a 20% accuracy-related penalty. Payroll returns for the affected years may also need correcting. The amounts add up quickly when the issue covers several years.",
      },
      {
        q: "How often should I review my S corp salary?",
        a: "At least once a year, usually during year-end planning. Revisit it when profit changes significantly, when your role changes, or when you hire people who take over work you used to do. Write a short memo each year noting the market data you used and why the figure fits. That memo is your best evidence if the IRS ever questions the amount.",
      },
      {
        q: "Does a higher S corp salary affect my QBI deduction?",
        a: "Yes, in two directions. Wages you pay yourself are not qualified business income, so a higher salary reduces the QBI base and the 20% deduction on it. But above the income threshold, the deduction can be limited to a share of W-2 wages the business pays, so some salary may be needed to unlock it. The best balance depends on your income level, so model both effects with a tax professional.",
      },
    ],
    content: `
<p>An S corp reasonable salary is the wage you pay yourself as an owner-employee that matches what the business would pay someone else to do your job. The IRS requires it before you take tax-advantaged distributions, but it sets no formula: you justify the number with market pay data, your duties and hours, and the company's profits. Pay too little and the IRS can reclassify distributions as wages; pay too much and you give away the payroll tax savings that made the S corp election worthwhile.</p>

<p>This guide explains the rules, the factors courts use, the payroll tax math for 2026 and 2027, a worked example and a simple process to set and document your number. It is general information, not tax or legal advice; a CPA familiar with your industry should sign off on your final figure.</p>

<h2>Why S corp reasonable salary matters</h2>
<p>An S corporation's profit flows through to its owners' personal returns, and distributions are not subject to Social Security and Medicare tax. Wages are. That gap is the whole appeal of electing S status on <a href="/blog/s-corp-election-form-2553">Form 2553</a>: a sole proprietor pays <a href="/blog/self-employment-tax">self-employment tax</a> on nearly all net profit, while an S corp owner pays payroll tax only on salary.</p>
<p>Because of that, the IRS polices the split. Its guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues" target="_blank" rel="noopener noreferrer">S corporation compensation</a> states that S corporations must pay reasonable compensation to a shareholder-employee for services before non-wage distributions, and that the IRS can reclassify distributions as wages.</p>

<h2>The factors the IRS and courts use</h2>
<p>The IRS lists factors courts have considered:</p>
<ul>
<li>Training and experience</li>
<li>Duties and responsibilities</li>
<li>Time and effort devoted to the business</li>
<li>Dividend (distribution) history</li>
<li>Payments to non-shareholder employees</li>
<li>Timing and manner of paying bonuses to key people</li>
<li>What comparable businesses pay for similar services</li>
<li>Compensation agreements</li>
<li>The use of a formula to determine compensation</li>
</ul>
<p>The IRS also ties reasonable compensation to the <strong>source of the company's gross receipts</strong>. Income produced by your personal services points toward wages. Income produced by employees, equipment or capital can support distributions. A solo consultant and a ten-person agency with the same profit can justify very different salaries.</p>

<h3>The case that set the tone: Watson</h3>
<p>In <em>David E. Watson, P.C. v. United States</em>, an accountant paid himself a $24,000 salary while taking more than $200,000 in distributions from his firm. The courts agreed with the IRS that reasonable pay for his work was about $91,000 and assessed employment taxes on the difference. The lesson: an experienced professional generating most of the firm's revenue cannot pay himself far below market and call the rest a distribution.</p>

<h2>Payroll tax math for 2026 and 2027</h2>
<table><thead><tr><th>Item</th><th>2026</th><th>2027</th></tr></thead><tbody>
<tr><td>Social Security tax rate (employer + employee)</td><td>6.2% + 6.2%</td><td>6.2% + 6.2%</td></tr>
<tr><td>Social Security wage base</td><td>$184,500</td><td>$192,300</td></tr>
<tr><td>Medicare tax rate (employer + employee)</td><td>1.45% + 1.45%, no cap</td><td>1.45% + 1.45%, no cap</td></tr>
<tr><td>Additional Medicare tax (employee)</td><td>0.9% over $200,000 (single)</td><td>0.9% over $200,000 (single)</td></tr>
</tbody></table>
<p>The 2027 wage base was announced by the Social Security Administration in October 2026. Combined, wages up to the base carry 15.3% in payroll taxes, the same rate a sole proprietor pays in self-employment tax. Employer payroll tax rules add the federal and state unemployment pieces.</p>

<h2>Worked example: a one-owner consulting S corp</h2>
<p>Illustrative numbers. Daniel runs a marketing consultancy as an S corp. In 2026 the company invoices $210,000 and has $60,000 of expenses, leaving $150,000 of profit before his salary. He works full time, has no employees, and his work generates all the revenue. Market data for a senior marketing consultant in his metro area suggests $70,000 to $95,000 for comparable full-time employees at small firms.</p>
<table><thead><tr><th></th><th>Sole proprietor</th><th>S corp, $40,000 salary</th><th>S corp, $80,000 salary</th></tr></thead><tbody>
<tr><td>Wages</td><td>n/a</td><td>$40,000</td><td>$80,000</td></tr>
<tr><td>Payroll or SE tax</td><td>$21,194</td><td>$6,120</td><td>$12,240</td></tr>
<tr><td>Distribution (approx.)</td><td>n/a</td><td>$106,940</td><td>$63,880</td></tr>
<tr><td>Payroll tax saving vs sole prop</td><td>n/a</td><td>$15,074</td><td>$8,954</td></tr>
<tr><td>Audit risk</td><td>n/a</td><td>High: well below market</td><td>Low: within market range</td></tr>
</tbody></table>
<p>The sole proprietor figure is $150,000 x 92.35% x 15.3%. The S corp figures are 15.3% of salary, with the employer half deducted before arriving at the distribution. Income tax is ignored here for simplicity.</p>
<p>The $40,000 salary looks attractive but sits far below the market range for full-time work that produces all the revenue; it resembles the Watson facts. At $80,000 Daniel still saves roughly $9,000 a year before payroll service and extra filing costs, and his salary is easy to defend. That is the real decision: not "how low can I go" but "what is the defensible market figure, and is the election still worth it at that figure?" Our <a href="/blog/s-corp-vs-llc">S corp vs LLC comparison</a> covers the break-even point.</p>

<h2>How to set your salary: a step-by-step process</h2>
<ol>
<li><strong>List what you actually do.</strong> Split your time among roles: for example, 70% service delivery, 20% sales, 10% admin.</li>
<li><strong>Price each role.</strong> Use Bureau of Labor Statistics occupational wage data, salary surveys, job postings or a paid reasonable-compensation report. Weight by your time split and adjust for part-time hours.</li>
<li><strong>Consider the source of profit.</strong> If staff, contractors or equipment generate a meaningful share of revenue, a lower wage share is easier to defend.</li>
<li><strong>Check affordability.</strong> Salary cannot create or deepen a loss without reason. In a startup year with little profit, a lower wage can be reasonable.</li>
<li><strong>Run payroll properly.</strong> Pay through payroll with withholding, file <a href="/blog/form-941">Form 941</a> quarterly and issue yourself a <a href="/blog/form-w-2">Form W-2</a>.</li>
<li><strong>Document it.</strong> Keep a one-page memo with your data sources and reasoning, updated yearly.</li>
<li><strong>Revisit at year-end.</strong> If profit jumped, consider a bonus through payroll before December 31.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Taking distributions with no payroll at all.</strong> The most common red flag.</li>
<li><strong>Applying the 60/40 rule blindly.</strong> It is a heuristic, not law, and ignores your role and market.</li>
<li><strong>Owner draws instead of payroll.</strong> Transfers from the business account are not wages unless run through payroll with withholding. Our guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> compares the methods.</li>
<li><strong>Health insurance handled wrong.</strong> For a more-than-2% shareholder, premiums paid by the S corp are included in box 1 wages on the W-2 (not boxes 3 and 5), which then supports the self-employed health insurance deduction.</li>
<li><strong>Ignoring the QBI interaction.</strong> Salary reduces QBI but can be needed for the W-2 wage limit at higher incomes. See our <a href="/blog/qbi-deduction-section-199a">QBI deduction guide</a>.</li>
<li><strong>Disproportionate distributions.</strong> With multiple owners, distributions must follow ownership percentages or you risk a second class of stock.</li>
</ul>

<h2>Salary vs distributions: how the money actually moves</h2>
<p>Once you pick a number, set up the mechanics so the books tell the same story:</p>
<table><thead><tr><th>Payment</th><th>How it is paid</th><th>Taxes withheld</th><th>Reported on</th></tr></thead><tbody>
<tr><td>Salary</td><td>Regular payroll runs (monthly, semimonthly or biweekly)</td><td>Federal and state income tax, Social Security, Medicare</td><td>Form 941, Form W-2</td></tr>
<tr><td>Year-end bonus</td><td>Through payroll before December 31</td><td>Same as salary, often at the supplemental rate</td><td>Form 941, Form W-2</td></tr>
<tr><td>Distribution</td><td>Transfer from business to personal account, in proportion to ownership</td><td>None</td><td>Schedule K-1 (via Form 1120-S)</td></tr>
<tr><td>Expense reimbursement</td><td>Under an <a href="/blog/accountable-plan">accountable plan</a>, with receipts</td><td>None</td><td>Not income if the plan rules are met</td></tr>
</tbody></table>
<p>Because distributions carry no withholding, most owners also make quarterly estimated payments or raise their own payroll withholding to cover income tax on K-1 profit. Without that, a large K-1 can produce a surprise balance and an underpayment penalty in April.</p>

<h2>What an IRS challenge looks like</h2>
<p>Reasonable compensation issues usually surface in an examination of the S corporation's return, often prompted by large distributions alongside little or no officer compensation on Form 1120-S. The examiner asks how the salary was determined, what the owner does, and what comparable workers earn. If the IRS concludes the salary was too low, it recharacterizes part of the distributions as wages for each open year and assesses the employer and employee shares of FICA, FUTA, interest and penalties. A written compensation memo, market data and consistent payroll records are the most persuasive evidence you can offer, because the burden of supporting the figure falls on the business.</p>

<h2>Edge cases</h2>
<h3>Part-time or passive owners</h3>
<p>An owner who invests but does not work in the business generally needs no salary. A part-time owner can scale salary to hours worked.</p>
<h3>Low-profit or loss years</h3>
<p>Reasonable compensation does not require paying wages the company cannot afford. If profit is $25,000, a $70,000 salary makes no sense; document why a lower figure is reasonable for that year.</p>
<h3>Late or missed S election</h3>
<p>If you thought you were an S corp but the election was never accepted, payroll and distributions may need rethinking. Our sibling guide on <a href="/blog/late-s-corp-election-relief">late S corp election relief</a> explains how to fix it.</p>

<h2>Keep revenue records that support your numbers</h2>
<p>Reasonable compensation analysis starts with knowing where your revenue comes from. Invoices that show which services you personally delivered, and which were delivered by staff or subcontractors, make it easier to explain the source of gross receipts if the IRS asks. Bill clients in the company's name, not your personal name; our guide on <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a> covers the details, and the same applies to S corps. To produce those invoices, use our <a href="/invoice-generator">free invoice generator</a>; it needs no sign-up and downloads a clean PDF for every client.</p>
`,
  },
  {
    slug: "late-s-corp-election-relief",
    title: "Late S Corp Election Relief: Rev. Proc. 2013-30 Explained",
    description:
      "Missed the Form 2553 deadline? How late S corp election relief under Rev. Proc. 2013-30 works: the 3-year-75-day window, requirements, statements and steps.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "s-corp-election-form-2553",
      "s-corp-vs-llc",
      "how-to-file-taxes-as-an-llc",
    ],
    faqs: [
      {
        q: "What is the deadline for a timely S corp election?",
        a: "Form 2553 must be filed no more than two months and 15 days after the beginning of the tax year the election is to take effect, or at any time during the preceding tax year. For a calendar-year business that wants S status for 2027, the normal deadline is March 15, 2027. A brand-new company counts its first tax year from the date it started, usually when it had shareholders, acquired assets or began doing business.",
      },
      {
        q: "How long do I have to request late S election relief?",
        a: "Under Rev. Proc. 2013-30, the request generally must be made within 3 years and 75 days of the date the election was intended to take effect. If you wanted S status from January 1, 2024, the simplified relief window runs until mid-March 2027. A narrow exception allows corporations that filed Forms 1120-S on time and heard nothing from the IRS to seek relief later, but most businesses rely on the standard window.",
      },
      {
        q: "Is there a fee for late S corp election relief?",
        a: "No. Relief under Rev. Proc. 2013-30 is requested by filing Form 2553 with the IRS service center, and there is no user fee. That is the main advantage over a private letter ruling, which carries a substantial IRS user fee plus professional costs. If you miss the 3-year-75-day window or otherwise fail the requirements, a private letter ruling is usually the only remaining route.",
      },
      {
        q: "What counts as reasonable cause for a late S corp election?",
        a: "Reasonable cause usually means the failure was not deliberate. Common explanations include relying on an accountant, attorney or formation service that was supposed to file, not knowing the election had to be filed separately, or the form being lost. Describe the facts honestly and briefly. The IRS mainly checks that everyone acted consistently with S status, so the explanation does not need to be long, but it must be included.",
      },
      {
        q: "Does an LLC need Form 8832 as well as Form 2553 for late relief?",
        a: "Usually not. An eligible LLC that files a timely Form 2553 is treated as having elected to be taxed as a corporation, so a separate Form 8832 is not needed. Rev. Proc. 2013-30 also covers a late corporate classification election that was meant to take effect on the same date as the S election, so one late Form 2553 can fix both problems if the requirements are met.",
      },
      {
        q: "How will I know if the IRS accepted my late S election?",
        a: "The IRS sends an acceptance letter, typically notice CP261, confirming the S election and its effective date. If relief is denied, you receive a letter explaining why. Processing often takes a couple of months, so keep a copy of the full filing and proof of mailing or fax confirmation. Do not assume the election is valid until you have the acceptance letter in your records.",
      },
    ],
    content: `
<p>If you missed the deadline to file Form 2553, the IRS offers a simplified fix: late S corp election relief under Revenue Procedure 2013-30. In most cases you have up to 3 years and 75 days from the date you wanted S status to begin, you pay no user fee, and you simply file Form 2553 with a reasonable-cause statement. The catch is that the business and every shareholder must have acted as if the election were already in place.</p>

<p>This guide covers who qualifies for late S corp election relief, the required statements, how to file, a worked timeline, and what to do if you are outside the window. It is general information, not tax or legal advice, and late elections are a classic area where a CPA or tax attorney earns their fee.</p>

<h2>How a late S corp election happens</h2>
<p>Form 2553 has a short deadline: no more than 2 months and 15 days after the start of the tax year the election should take effect, or any time in the prior year. For a calendar-year company that is March 15. New businesses miss it all the time because:</p>
<ul>
<li>A formation service set up the LLC but never filed the election.</li>
<li>The owner assumed an EIN application or state filing covered it.</li>
<li>The form was mailed or faxed but never processed, and nobody checked for an acceptance letter.</li>
<li>The owner decided to elect after the business took off mid-year.</li>
</ul>
<p>Often the problem only surfaces when the company files Form 1120-S and the IRS rejects it, or sends a notice saying it has no record of an S election. Our step-by-step guide to <a href="/blog/s-corp-election-form-2553">Form 2553</a> covers a timely election.</p>

<h2>Rev. Proc. 2013-30 requirements</h2>
<p>According to the IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/late-election-relief" target="_blank" rel="noopener noreferrer">late election relief</a>, the entity must meet these conditions:</p>
<table><thead><tr><th>Requirement</th><th>What it means in practice</th></tr></thead><tbody>
<tr><td>Intended to be an S corporation</td><td>The owners meant to elect S status as of the requested date</td></tr>
<tr><td>Eligible entity</td><td>100 or fewer shareholders, only eligible shareholders, one class of stock, domestic entity</td></tr>
<tr><td>Failed only because the election was late</td><td>No other defect, such as an ineligible shareholder</td></tr>
<tr><td>Reasonable cause</td><td>A short explanation of why the form was late</td></tr>
<tr><td>Consistent reporting</td><td>The entity and all shareholders reported income consistent with S status for every affected year</td></tr>
<tr><td>Within 3 years and 75 days</td><td>Measured from the intended effective date</td></tr>
<tr><td>Otherwise valid election</td><td>For example, signed consent of all shareholders</td></tr>
</tbody></table>
<p>The procedure also covers a late corporate classification election for an LLC that was meant to take effect on the same date, and late elections for qualified subchapter S subsidiaries and certain trusts.</p>

<h3>The "consistent reporting" test is where most cases fail</h3>
<p>If the company filed Form 1120-S and each owner reported K-1 income, consistency is easy. If the single-member LLC owner reported everything on Schedule C instead, the facts are inconsistent with S status for that year. Practitioners sometimes handle this with amended returns before or alongside the request, but it adds complexity. See our guide to the <a href="/blog/amended-tax-return-1040-x">amended tax return (Form 1040-X)</a>.</p>

<h2>Worked timeline example</h2>
<p>Illustrative facts. Priya formed a single-member LLC in Texas in February 2024 and asked her formation service to elect S status from day one. She paid herself a salary through payroll, filed Forms 1120-S for 2024 and 2025 and reported K-1 income on her personal returns. In October 2026 the IRS sent a letter saying it had no record of an S election.</p>
<table><thead><tr><th>Date</th><th>Event</th></tr></thead><tbody>
<tr><td>February 12, 2024</td><td>LLC formed; intended S election effective date</td></tr>
<tr><td>April 26, 2024</td><td>Normal Form 2553 deadline (2 months 15 days after start)</td></tr>
<tr><td>2025 and 2026</td><td>1120-S returns filed; owner reported K-1 income</td></tr>
<tr><td>October 2026</td><td>IRS notice: no S election on file</td></tr>
<tr><td>November 2026</td><td>Late Form 2553 filed under Rev. Proc. 2013-30</td></tr>
<tr><td>Late April 2027</td><td>End of 3-year-75-day window (Feb. 12, 2027 + 75 days)</td></tr>
</tbody></table>
<p>Priya is within the window, reported consistently and has an honest reasonable-cause explanation (reliance on the formation service). She is a strong candidate for relief. Had she discovered the problem in mid-2027, she would have missed the window and faced a private letter ruling request instead.</p>

<h2>How to request late S corp election relief, step by step</h2>
<ol>
<li><strong>Confirm the intended effective date</strong> and calculate 3 years and 75 days from it.</li>
<li><strong>Check eligibility for every year</strong> since then: shareholders, stock classes, distributions in proportion to ownership.</li>
<li><strong>Review consistency.</strong> Confirm the entity filed 1120-S returns (or none yet) and owners reported K-1 income.</li>
<li><strong>Complete Form 2553</strong> with the intended effective date and signatures of every person who was a shareholder at any time during the period.</li>
<li><strong>Write "FILED PURSUANT TO REV. PROC. 2013-30"</strong> at the top of the form, as the Form 2553 instructions direct.</li>
<li><strong>Attach the reasonable-cause statement</strong> (Form 2553 has a space for it) explaining why the election was late and describing diligent actions taken to correct it once discovered.</li>
<li><strong>Include the required shareholder statements</strong> confirming they reported consistently with the S election for all affected years.</li>
<li><strong>File it.</strong> Generally mail or fax it to the service center listed in the Form 2553 instructions, or attach it to a current-year Form 1120-S if the instructions allow for your situation. An extension to file the 1120-S does not extend the 3-year-75-day window.</li>
<li><strong>Watch for the acceptance letter</strong> (often CP261) and store it with your formation documents.</li>
</ol>

<h2>If you miss the window: other options</h2>
<table><thead><tr><th>Option</th><th>When it fits</th><th>Cost and effort</th></tr></thead><tbody>
<tr><td>Rev. Proc. 2013-30 exception for 1120-S filers</td><td>Corporation filed 1120-S timely, 6+ months passed, no IRS notice of a problem</td><td>No fee; narrow and rarely applies</td></tr>
<tr><td>Private letter ruling</td><td>Outside the window or other defects</td><td>Substantial IRS user fee plus professional fees; months of processing</td></tr>
<tr><td>Inadvertent invalid election relief (section 1362(f))</td><td>Election filed but invalid, for example a missing signature</td><td>Usually a ruling request</td></tr>
<tr><td>Elect prospectively</td><td>Accept C corp or default status for past years</td><td>File a timely 2553 for the next tax year</td></tr>
</tbody></table>
<p>The prospective route can be surprisingly painful: if the IRS treats the past years as C corporation years, the company may owe corporate tax on those profits and distributions may be taxed as dividends. Our <a href="/blog/s-corp-vs-c-corp">S corp vs C corp</a> guide explains why that is costly.</p>

<h2>Writing the reasonable-cause statement</h2>
<p>The statement does not need legal language. It needs to be specific, truthful and consistent with your filings. A workable structure:</p>
<ol>
<li><strong>Intent.</strong> State that the entity intended to be classified as an S corporation effective on the requested date.</li>
<li><strong>What went wrong.</strong> For example, "The company engaged a formation service to file Form 2553 at formation. The service did not file the form, and the company was unaware of the omission."</li>
<li><strong>Consistent conduct.</strong> Note that the company filed Forms 1120-S, paid the owner through payroll and issued K-1s for each year since the effective date.</li>
<li><strong>Prompt correction.</strong> State when you discovered the problem and that you filed promptly afterward.</li>
</ol>
<p>Keep supporting documents ready, such as the engagement letter with the formation service, payroll reports and copies of filed 1120-S returns, in case the service center asks for more information.</p>

<h2>Effects on payroll, state taxes and invoicing while you wait</h2>
<p>While the request is pending, keep operating as an S corporation: run payroll, make estimated payments and file Form 1120-S on time. Stopping payroll or switching to Schedule C reporting in the meantime undermines the consistency requirement. If the IRS rejected an 1120-S because there was no election on file, include a copy of the late Form 2553 or follow the instructions in the IRS letter. States that recognize the federal S election generally follow the IRS acceptance, but a few have their own forms, so check yours. Customers paying you do not need to do anything differently as long as you invoice under the same legal name and EIN.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Missing shareholder signatures.</strong> Anyone who was a shareholder during the period must consent, including former owners and, in community property states, spouses.</li>
<li><strong>Wrong effective date.</strong> Use the date you actually intended, which must match how you filed.</li>
<li><strong>Waiting for the next return.</strong> The clock keeps running. File as soon as you find the problem.</li>
<li><strong>Treating payroll as optional.</strong> An S corp that pays no salary to a working owner has a different problem; see our guide to <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a>.</li>
<li><strong>Not keeping the acceptance letter.</strong> Banks, lenders and future buyers may ask for proof of S status.</li>
</ul>

<h2>Practical cleanup after relief is granted</h2>
<p>Once the IRS accepts the election, check that state filings match. Some states require their own S election or follow the federal one automatically. Make sure payroll filings, W-2s and K-1s line up for every year and that the company uses its own EIN everywhere (see <a href="/blog/how-to-get-an-ein">how to get an EIN</a> if it never had one), and update your bookkeeping so owner payments are coded as salary or distributions, not mixed draws. Our guide on <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a> shows how the return types fit together, and our <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a> calendar has the March 15 dates for both Form 2553 and Form 1120-S.</p>

<p>Also make sure your invoices are issued in the company's legal name, with its EIN rather than your SSN, so customer 1099s and your own records match the entity the IRS now recognizes. You can create invoices like that in a minute with our <a href="/invoice-generator">free invoice generator</a>; there is no sign-up, and each invoice downloads as a PDF.</p>
`,
  },
  {
    slug: "pass-through-entity-tax",
    title: "Pass-Through Entity Tax (PTET) by State Explained",
    description:
      "How the pass-through entity tax (PTET) works after the 2025 SALT cap change: who benefits, state examples, deadlines, a worked example and common mistakes.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "s-corp-vs-llc",
      "qbi-deduction-section-199a",
      "form-1065",
    ],
    faqs: [
      {
        q: "What is a pass-through entity tax in simple terms?",
        a: "A pass-through entity tax is an optional state income tax that a partnership or S corporation elects to pay at the entity level on its owners' share of income. The business deducts that payment on its federal return, which lowers the income passed through to owners. The owners then get a state credit or exclusion for the tax paid. The net effect is a federal deduction for state income tax that owners could not otherwise fully deduct because of the SALT cap.",
      },
      {
        q: "Is PTET still worth it after the SALT cap went up to $40,000?",
        a: "For many owners, yes. The higher cap helps, but it phases back down toward $10,000 for taxpayers with modified adjusted gross income above $500,000 (indexed after 2025), and the cap itself must also cover property taxes. Owners with large state income tax bills or high incomes often still exceed it. Owners with modest income and low property taxes may now fit under the cap and get little extra from PTET. Run the numbers each year.",
      },
      {
        q: "Can a single-member LLC elect PTET?",
        a: "Usually not as a disregarded entity. Most state PTET regimes are available only to entities taxed as partnerships or S corporations, because a single-member LLC's income is already reported directly on the owner's return. A single-member LLC that has elected S corporation status can generally participate, subject to the state's rules. Check your state's definition of eligible entity before assuming you qualify.",
      },
      {
        q: "Does the IRS allow the PTET deduction?",
        a: "Yes. IRS Notice 2020-75 announced that state income taxes paid by a partnership or S corporation at the entity level are deductible by the entity in computing its non-separately stated income, and are not subject to the individual SALT cap. The 2025 federal tax law that raised the SALT cap left that treatment in place, so PTET elections remain available for tax years 2026 and later in states that continue to offer them.",
      },
      {
        q: "When do I have to make the PTET election?",
        a: "It depends on the state. Some require the election early in the tax year, such as New York's March 15 deadline for the current year. Others, like California, tie the election to a timely filed return but expect a prepayment by June 15 of the election year. Many states let the election be made on the original return. Missing an early election date usually means waiting until next year.",
      },
      {
        q: "Does PTET affect my QBI deduction?",
        a: "It can. Because the PTET payment is deducted at the entity level, it reduces the business's ordinary income and therefore the qualified business income passed through to owners. A lower QBI amount means a slightly smaller 20% deduction. For most owners the federal deduction for state tax outweighs the QBI reduction, but the interaction should be modeled, especially near the QBI income thresholds.",
      },
    ],
    content: `
<p>A pass-through entity tax (PTET) is an elective state income tax paid by a partnership or S corporation on behalf of its owners, designed to get around the federal cap on deducting state and local taxes. The business deducts the state tax on its federal return, owners receive a state credit, and the result is usually a lower combined federal tax bill. Roughly three dozen states offer some version, and the 2025 federal tax law kept the workaround intact.</p>

<p>This guide explains how the pass-through entity tax works, how the new $40,000 SALT cap changes the math, how a few major states handle the election, a worked example, and the mistakes owners make. It is general information, not tax advice. PTET rules differ by state and change often, so confirm details with your state tax agency or a CPA before electing.</p>

<h2>Why the pass-through entity tax exists</h2>
<p>From 2018, individuals could deduct no more than $10,000 of state and local taxes (SALT) on Schedule A. Owners of partnerships and S corporations in high-tax states were hit hard because their business profits flow onto their personal returns and are taxed by the state at the individual level.</p>
<p>States responded by letting the business pay the tax instead. In Notice 2020-75, the IRS confirmed that state income taxes imposed on and paid by a partnership or S corporation are deductible by the entity and are not subject to the individual SALT cap. Most states with an income tax have since enacted a PTET.</p>

<h2>The SALT cap after the 2025 tax law</h2>
<table><thead><tr><th>Tax year</th><th>Individual SALT cap</th><th>Notes</th></tr></thead><tbody>
<tr><td>2018-2024</td><td>$10,000</td><td>$5,000 married filing separately</td></tr>
<tr><td>2025</td><td>$40,000</td><td>Reduced for MAGI over $500,000, but not below $10,000</td></tr>
<tr><td>2026</td><td>$40,400</td><td>Cap and income threshold rise 1% a year</td></tr>
<tr><td>2027-2029</td><td>Rises 1% a year</td><td>Phase-down continues for high incomes</td></tr>
<tr><td>2030 onward</td><td>$10,000</td><td>Scheduled reversion</td></tr>
</tbody></table>
<p>Above the income threshold, the cap is reduced by 30% of the excess, down to a $10,000 floor. In practice, an owner with MAGI around $600,000 or more is back at roughly $10,000, exactly the group most likely to benefit from PTET. Commentary such as The Tax Adviser's analysis of the <a href="https://www.thetaxadviser.com/issues/2026/mar/cap-raised-strings-attached-the-2025-salt-shake-up.html" target="_blank" rel="noopener noreferrer">2025 SALT changes</a> notes that the PTET workaround survived the legislation.</p>

<h2>How a PTET election works, step by step</h2>
<ol>
<li><strong>The entity elects.</strong> A partnership or S corporation makes the annual election, often requiring owner consent.</li>
<li><strong>The entity pays state tax</strong> on its qualified net income, usually through estimated payments during the year.</li>
<li><strong>The entity deducts the payment</strong> on Form 1065 or Form 1120-S, which lowers the ordinary income on each owner's K-1.</li>
<li><strong>Owners claim a state credit</strong> (or exclusion) on their personal state returns for their share of the tax paid.</li>
<li><strong>Owners pay less federal tax</strong> because their federal taxable income is lower, while their state tax is roughly unchanged.</li>
</ol>

<h2>PTET by state: examples</h2>
<p>Each state's program is different. A few widely used ones:</p>
<table><thead><tr><th>State</th><th>Key features</th><th>Election timing</th></tr></thead><tbody>
<tr><td>California</td><td>Elective tax of 9.3% on qualified net income; extended for tax years 2026 through 2030</td><td>Made on a timely filed return; first payment due by June 15 of the election year</td></tr>
<tr><td>New York State</td><td>Graduated rates on the entity's taxable income; separate New York City PTET for eligible entities</td><td>By March 15 of the tax year</td></tr>
<tr><td>New Jersey</td><td>Long-running elective program with graduated rates</td><td>Annual election; confirm the current date with the NJ Division of Taxation</td></tr>
<tr><td>Colorado, Iowa, Massachusetts, Michigan, Minnesota</td><td>Programs linked to the federal SALT cap</td><td>Varies by state</td></tr>
</tbody></table>
<p>California's Franchise Tax Board describes its program on its <a href="https://www.ftb.ca.gov/file/business/credits/pass-through-entity-elective-tax" target="_blank" rel="noopener noreferrer">pass-through entity elective tax page</a>, including the June 15 payment and the 2026-2030 extension. For other states, look for "pass-through entity tax" or "elective entity tax" on the state revenue department's site, and confirm whether the program is permanent or tied to the federal cap.</p>

<h2>Worked example: two-owner S corp</h2>
<p>Illustrative numbers. A two-owner S corporation in a state with a 9% flat PTET rate earns $500,000 of qualified net income in 2026. Each owner has a 50% share ($250,000), pays $14,000 of property tax and has total MAGI of about $650,000 from all sources, so each owner's SALT cap is phased back to $10,000.</p>
<table><thead><tr><th></th><th>Without PTET (per owner)</th><th>With PTET (per owner)</th></tr></thead><tbody>
<tr><td>K-1 ordinary income</td><td>$250,000</td><td>$227,500 (after $22,500 PTET deduction)</td></tr>
<tr><td>State income tax on business share</td><td>$22,500 paid personally</td><td>$22,500 paid by entity; credit on state return</td></tr>
<tr><td>SALT deducted on Schedule A</td><td>$10,000 (capped; property tax alone uses it)</td><td>$10,000 (property tax)</td></tr>
<tr><td>Extra federal deduction</td><td>$0</td><td>$22,500</td></tr>
<tr><td>Federal tax saving at 35%</td><td>n/a</td><td>About $7,875</td></tr>
</tbody></table>
<p>The state tax is the same either way, but moving it to the entity converts $22,500 of non-deductible tax into a deduction. Reduce the saving slightly for the lower QBI deduction and any added preparation fees. Across both owners, that is roughly $15,000 a year.</p>
<p>Contrast an owner with $120,000 of income, $5,000 of state income tax and $4,000 of property tax: total SALT of $9,000 fits under the cap, so PTET adds almost nothing.</p>

<h2>Questions to answer before you elect</h2>
<p>Before signing the election, work through these with your preparer:</p>
<ol>
<li><strong>Are all owners on board?</strong> Some states require every owner to consent, and others let individual owners opt in or out. An owner who gains nothing (for example, a low-income partner under the SALT cap) may still be affected by the entity's cash outlay.</li>
<li><strong>Where do the owners live?</strong> Resident owners usually get a credit in the same state. Nonresident owners need their home state to give credit for tax paid by the entity to another state, and not every state does.</li>
<li><strong>Can the business fund the payments?</strong> Estimated PTET payments are due during the year, often before the owners would have paid their own personal estimates.</li>
<li><strong>How does the operating agreement treat the payment?</strong> If owners have different shares or opt-in choices, the agreement should say how the tax is charged against each owner's distributions.</li>
<li><strong>Is the state's program permanent?</strong> Several programs were tied to the federal SALT cap and could change if Congress changes the cap again.</li>
</ol>

<h2>How PTET shows up on returns and K-1s</h2>
<p>On the federal side, the PTET payment appears as a deduction in computing the entity's ordinary business income, typically within taxes and licenses on Form 1065 or Form 1120-S. It does not appear as a separately stated item on the K-1, which is why it reduces each owner's share of ordinary income. On the state side, the entity reports the tax paid and gives each owner a statement of their share of the credit, which the owner then claims on their personal state return. Owners who also pay personal estimated state tax should reduce those estimates to avoid paying twice and waiting for a refund. Federal estimates change too: a lower K-1 means less federal tax, so revisit <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> once the election is in place. If you skip that step, you simply overpay and wait for the refund, which ties up cash the business could use for the next state installment or for paying suppliers on time.</p>

<h2>Who benefits most from PTET</h2>
<ul>
<li>Owners of partnerships, multi-member LLCs and S corporations in states with meaningful income tax rates.</li>
<li>Owners whose MAGI exceeds the SALT phase-down threshold.</li>
<li>Owners who already use their SALT cap on property taxes.</li>
<li>Owners who take the standard deduction anyway, since the entity-level deduction works even if they do not itemize.</li>
</ul>
<p>It usually does not help sole proprietors or single-member LLCs taxed as disregarded entities, since they cannot elect. If you are weighing an S election partly for PTET, read our <a href="/blog/s-corp-vs-llc">S corp vs LLC comparison</a> first, and remember that an S corp also needs payroll for working owners.</p>

<h2>Common PTET mistakes</h2>
<ul>
<li><strong>Missing an early election deadline</strong>, such as New York's March 15 date.</li>
<li><strong>Underpaying estimates.</strong> Several states require minimum prepayments; California's June 15 payment is the classic trap.</li>
<li><strong>Nonresident owners.</strong> A credit in one state may not be honored by an owner's home state, which can create double tax.</li>
<li><strong>Ignoring QBI and basis effects.</strong> The PTET deduction lowers QBI and affects owner basis calculations; our <a href="/blog/qbi-deduction-section-199a">QBI deduction guide</a> explains the 20% deduction it reduces.</li>
<li><strong>Claiming the payment twice.</strong> Owners must not also deduct the entity's PTET as personal SALT on Schedule A.</li>
<li><strong>Cash flow surprises.</strong> The entity needs cash for estimated payments; collect receivables promptly so the money is there when the state payment is due.</li>
</ul>

<h2>What to do next</h2>
<p>Ask your tax preparer to model PTET as part of <a href="/blog/year-end-tax-planning-small-business">year-end tax planning</a>, using your projected income and the current SALT cap. Confirm the state's election date and payment schedule, and add them to your <a href="/blog/business-tax-deadlines-2027">2027 tax deadline calendar</a>. If you are a partnership, our <a href="/blog/form-1065">Form 1065 guide</a> explains how the deduction and credits flow to each K-1, and our sibling guide to <a href="/blog/schedule-k-1">Schedule K-1</a> shows where owners see them.</p>

<p>PTET payments come out of the business's cash, so steady invoicing and collections matter more than ever when a large state estimate is due in spring. Send clear invoices with firm due dates and track what is outstanding. Our <a href="/invoice-generator">free invoice generator</a> makes that easy: no sign-up, professional layouts and an instant PDF download for every invoice.</p>
`,
  },
];
