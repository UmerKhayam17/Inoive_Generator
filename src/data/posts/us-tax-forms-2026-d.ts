import type { PostDraft } from "../blog";

export const US_TAX_FORMS_2026_D_POSTS: PostDraft[] = [
  {
    slug: "form-941-x",
    title: "Form 941-X: How to Correct Payroll Tax Returns",
    description:
      "Form 941-X guide: how to correct a filed Form 941, adjustment vs claim, deadlines, interest-free adjustments, certifications, and a worked payroll example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["form-941", "employer-payroll-taxes", "how-to-do-payroll-yourself"],
    faqs: [
      {
        q: "What is Form 941-X used for?",
        a: "Form 941-X, Adjusted Employer's Quarterly Federal Tax Return or Claim for Refund, corrects errors on a Form 941 you already filed. It can fix wages, tips, federal income tax withholding, Social Security and Medicare amounts, Additional Medicare Tax and certain credits. You file a separate Form 941-X for each quarter you are correcting, and you never attach it to your current quarter's Form 941 or file a second Form 941 for the same quarter.",
      },
      {
        q: "What is the deadline to file Form 941-X?",
        a: "For underreported tax, file by the due date of the Form 941 for the quarter in which you discovered the error, and pay the balance when you file. For example, an error found in May is due by July 31. For overreported tax, an adjustment must be filed more than 90 days before the period of limitations expires, and a claim for refund before it expires, generally three years from April 15 of the following year.",
      },
      {
        q: "Should I choose the adjustment process or the claim process?",
        a: "Use the adjustment process for all underreported tax, and for overreported tax when you want a credit applied to the Form 941 for the quarter you file the Form 941-X. Use the claim process when you overpaid and want a refund or abatement instead. You check only one box on line 1 or line 2. If you are correcting both underreported and overreported amounts on one quarter, you generally use the adjustment process.",
      },
      {
        q: "Can I correct federal income tax withholding with Form 941-X?",
        a: "Only in limited cases. You can correct prior-year withholding errors only when they are administrative errors, such as a transposition or math error where the amount reported does not match the amount actually withheld, or where section 3509 rates apply. If you simply withheld the wrong amount from an employee's pay in a prior year, you cannot fix it on Form 941-X; the employee settles it on their own return.",
      },
      {
        q: "Do I need to issue Forms W-2c with a Form 941-X?",
        a: "Usually, yes, if the correction changes wages or taxes already reported to employees. Line 3 of Form 941-X certifies that you filed or will file Forms W-2 or W-2c as required. A W-2c corrects the employee's form, and a W-3c transmits W-2c forms to the Social Security Administration. Keeping these consistent avoids mismatch notices from the IRS and SSA later.",
      },
      {
        q: "Can I e-file Form 941-X?",
        a: "Yes. The IRS accepts Form 941-X through its Modernized e-File system, generally via payroll software or a tax professional, and encourages electronic filing. Paper filing is still allowed, using the mailing address in the instructions for your state. Many payroll providers prepare and file Form 941-X for you when they caused or discover an error, but you remain responsible as the employer.",
      },
    ],
    content: `
<p>Form 941-X is the form employers use to correct a quarterly payroll tax return (Form 941) that has already been filed. You file one Form 941-X per quarter, show the amount originally reported, the corrected amount and the difference, explain what went wrong, and either pay the shortfall or claim a credit or refund. If you catch an underpayment and file by the right deadline with payment, the correction is generally interest-free.</p>

<p>Payroll errors are common in small businesses that run payroll themselves: a missed bonus, a fringe benefit never added to wages, a misclassified worker, or a typo. This guide explains when to use Form 941-X, the adjustment and claim processes, deadlines, the certifications that trip people up, and a full worked example. It is general information, not tax advice; check your case with a payroll professional or tax adviser.</p>

<h2>When to use Form 941-X</h2>
<p>Use Form 941-X when the Form 941 you filed was wrong. The <a href="https://www.irs.gov/instructions/i941x" target="_blank" rel="noopener noreferrer">IRS Form 941-X instructions</a> (revised April 2026) cover corrections to:</p>
<ul>
<li>Wages, tips and other compensation.</li>
<li>Federal income tax withheld (administrative errors only for prior years).</li>
<li>Taxable Social Security wages and tips, and taxable Medicare wages and tips.</li>
<li>Wages and tips subject to Additional Medicare Tax withholding.</li>
<li>Certain credits, such as the qualified small business payroll tax credit for research activities.</li>
</ul>
<p>Do not use it to fix a Form 940 (federal unemployment), a Form 944, or Forms W-2 alone. If you never filed the original Form 941, file the original, not a 941-X. For the basics of the quarterly return, see our <a href="/blog/form-941">Form 941 guide</a>.</p>

<h2>Adjustment process vs claim process</h2>
<table><thead><tr><th></th><th>Adjustment (line 1)</th><th>Claim (line 2)</th></tr></thead><tbody>
<tr><td>Use for</td><td>Underreported tax; overreported tax you want credited</td><td>Overreported tax you want refunded or abated</td></tr>
<tr><td>Result of overpayment</td><td>Credit on the Form 941 for the quarter you file</td><td>Refund check or abatement</td></tr>
<tr><td>Deadline for overpayments</td><td>More than 90 days before the period of limitations ends</td><td>Before the period of limitations ends</td></tr>
<tr><td>Deadline for underpayments</td><td>Due date of Form 941 for the quarter the error was discovered</td><td>Not used for underpayments</td></tr>
</tbody></table>
<p>The period of limitations is generally three years from the date the Form 941 was filed, and forms for a calendar year filed early are treated as filed on April 15 of the following year. So the four 2023 quarterly returns are generally open until April 15, 2027.</p>

<h2>Deadlines for underreported tax</h2>
<table><thead><tr><th>Error discovered in</th><th>File Form 941-X and pay by</th></tr></thead><tbody>
<tr><td>January to March</td><td>April 30</td></tr>
<tr><td>April to June</td><td>July 31</td></tr>
<tr><td>July to September</td><td>October 31</td></tr>
<tr><td>October to December</td><td>January 31 of the next year</td></tr>
</tbody></table>
<p>If you meet these deadlines and pay in full, the IRS generally treats the correction as an interest-free adjustment. Miss them and interest, plus potentially failure-to-pay or failure-to-deposit penalties, can apply. If penalties are assessed and you have a good record, ask about <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>.</p>

<h2>Form 941-X part by part</h2>
<h3>Part 1: Select one process</h3>
<p>Check line 1 (adjusted employment tax return) or line 2 (claim). Only one.</p>
<h3>Part 2: Certifications</h3>
<p>Line 3 certifies that you filed or will file Forms W-2 or W-2c as required. Lines 4 and 5 apply to overreported tax: you certify that you repaid or reimbursed employees for their share of overcollected Social Security and Medicare tax, or obtained their written consent to a refund, or that the overpayment was only the employer share. These certifications are what let you recover the employee portion, and they need paperwork behind them.</p>
<h3>Part 3: Enter the corrections</h3>
<p>Each correction line has columns for the total corrected amount, the amount originally reported, the difference, and the tax correction. For example, for Social Security wages you multiply the difference by 12.4% (employer plus employee share), and for Medicare wages by 2.9%. Leave lines blank that do not apply.</p>
<h3>Part 4: Explain your corrections</h3>
<p>Line 41 is checked if you are correcting both under- and overreported amounts, line 42 if you reclassified workers, and line 43 requires a detailed explanation: what the error was, how you found it, the date discovered and how you calculated the correction. Vague explanations cause delays.</p>
<h3>Part 5: Sign</h3>
<p>An owner, officer or authorized agent signs. Unsigned forms are not processed.</p>

<h2>Step by step: correcting a Form 941</h2>
<ol>
<li>Identify the quarter and the exact lines that were wrong. Pull the filed Form 941 and payroll registers.</li>
<li>Recalculate the correct amounts for wages, withholding and taxable Social Security and Medicare wages.</li>
<li>Decide on adjustment or claim (overpayments only).</li>
<li>Fix the employee side: issue Forms W-2c, collect or refund the employee share, and get written consents if claiming a refund of employee tax.</li>
<li>Complete Parts 1 to 5 of Form 941-X with a clear explanation on line 43.</li>
<li>File by the deadline and pay any balance due, by EFTPS or with the return.</li>
<li>Update your payroll system so the error does not repeat, and correct any state payroll returns.</li>
</ol>

<h2>Worked example: a missed bonus</h2>
<p>Illustrative figures. A small agency paid an employee a $5,000 holiday bonus in December 2025 through a separate check that never made it into the Q4 2025 Form 941. The owner discovers the error on May 12, 2026.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Additional Social Security wages</td><td>$5,000 x 12.4% = $620</td></tr>
<tr><td>Additional Medicare wages</td><td>$5,000 x 2.9% = $145</td></tr>
<tr><td>Federal income tax that should have been withheld (22% supplemental rate)</td><td>$1,100, but this was never withheld</td></tr>
<tr><td>Total employment tax correction on Form 941-X</td><td>$765</td></tr>
</tbody></table>
<p>Because the bonus was paid but no income tax was actually withheld, the employer cannot report $1,100 of withholding that did not happen; the employee will owe it on their own return. The employer files Form 941-X for Q4 2025 using the adjustment process, explains the omitted bonus on line 43, pays $765 by July 31, 2026 (the Q2 due date, since the error was found in May), and issues a Form W-2c and W-3c. The employee's half of Social Security and Medicare, $382.50, can be collected from the employee's later wages. Our post on the <a href="/blog/bonus-tax-rate">bonus tax rate</a> explains supplemental withholding.</p>

<h2>What the IRS does after you file</h2>
<p>Form 941-X is processed separately from your regular quarterly return, and processing can take several months. If you used the adjustment process for an overpayment, the credit appears on the Form 941 for the quarter in which you filed the correction, and you apply it there. If you filed a claim, the refund arrives by check or is applied to other balances you owe. If the IRS disagrees with a correction, it sends a letter explaining the change; respond by the date shown with your worksheet and supporting records. Keep paying current deposits on time while a correction is pending, since a pending 941-X does not pause your ongoing obligations.</p>

<h2>Common Form 941-X mistakes</h2>
<ul>
<li><strong>Filing an amended Form 941 instead.</strong> Corrections always go on Form 941-X.</li>
<li><strong>Combining quarters.</strong> Each quarter needs its own Form 941-X.</li>
<li><strong>Forgetting the W-2c.</strong> The IRS and SSA compare W-2 totals with Form 941 totals.</li>
<li><strong>Claiming refunds of employee tax without consents.</strong> Without repayment or written consent, you can only recover the employer share.</li>
<li><strong>Correcting non-administrative withholding errors.</strong> Prior-year withholding that was simply under-withheld cannot be changed.</li>
<li><strong>Ignoring 2026 tip and overtime reporting.</strong> The April 2026 instructions add guidance for withholding related to qualified tips and overtime under the 2025 tax law, with limits on correcting prior-year withholding.</li>
</ul>

<h2>Related corrections you may also need</h2>
<p>A Form 941-X rarely travels alone. Changing wages for a quarter often changes several other filings:</p>
<table><thead><tr><th>Filing</th><th>When it needs correcting</th></tr></thead><tbody>
<tr><td>Form W-2c and W-3c</td><td>Wages or withholding reported to the employee changed</td></tr>
<tr><td>Form 940</td><td>FUTA wages changed (file an amended Form 940, not 941-X)</td></tr>
<tr><td>State withholding return</td><td>State taxable wages or state withholding changed</td></tr>
<tr><td>State unemployment (SUTA) report</td><td>Quarterly wages per employee changed</td></tr>
<tr><td>Deposit schedule review</td><td>Total tax for the lookback period changed enough to affect monthly vs semiweekly status</td></tr>
</tbody></table>
<p>Work through the list each time so a single fix does not leave four mismatches behind.</p>

<h2>Records to keep with every Form 941-X</h2>
<ul>
<li>The original Form 941 and the payroll register for the quarter.</li>
<li>Your recalculation worksheet showing the original, corrected and difference amounts.</li>
<li>Employee repayment records, reimbursement records or signed consents for overcollected tax.</li>
<li>Copies of Forms W-2c and W-3c, and proof of filing and payment.</li>
<li>Notes on when and how the error was discovered, which support the line 43 explanation.</li>
</ul>
<p>Keep employment tax records for at least four years after the tax was due or paid, whichever is later.</p>

<h2>Worker reclassification</h2>
<p>If you treated someone as a contractor and later reclassify them as an employee, line 42 applies, and section 3509 reduced rates may be available in some cases. Reclassification is a high-stakes area; read our guides on <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> and <a href="/blog/worker-misclassification-penalties">worker misclassification penalties</a> before acting, and get professional help.</p>

<h2>Preventing the next correction</h2>
<ul>
<li>Run every payment to an employee, including bonuses and gift cards, through payroll.</li>
<li>Reconcile payroll registers with Form 941 each quarter and with Form W-3 at year end; see our guide to <a href="/blog/form-w-3">Form W-3</a>.</li>
<li>Track deposit dates against the <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a>.</li>
<li>If you use a provider, compare features in <a href="/blog/gusto-vs-adp">Gusto vs ADP</a>; many file 941-X corrections for errors they cause.</li>
</ul>
<p>Our overview of <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains the FICA, FUTA and SUTA pieces behind every Form 941.</p>

<p>Clean payroll starts with clean income records. Bill clients on time with our <a href="/invoice-generator">free invoice generator</a>, which needs no sign-up and downloads each invoice as a PDF, so you always know the cash available to meet payroll and tax deposits.</p>
`,
  },
  {
    slug: "form-w-3",
    title: "Form W-3: Transmittal of W-2s Explained",
    description:
      "Form W-3 explained: what the W-2 transmittal is, the February 1, 2027 deadline, e-filing rules, each box, penalties and Form 941 reconciliation.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["form-w-2", "form-941", "how-to-do-payroll-yourself"],
    faqs: [
      {
        q: "What is Form W-3?",
        a: "Form W-3, Transmittal of Wage and Tax Statements, is a one-page summary that accompanies Copy A of your Forms W-2 when you file them with the Social Security Administration. It totals wages, tips and withholding across all the W-2s you are sending. Anyone required to file Form W-2 must also file Form W-3. When you file electronically through SSA's Business Services Online, the W-3 is generated automatically.",
      },
      {
        q: "When is Form W-3 due for 2026 wages?",
        a: "Form W-3 and Copy A of Forms W-2 for wages paid in 2026 are due to the Social Security Administration by February 1, 2027, whether you file on paper or electronically. The usual January 31 date moves because it falls on a Sunday. Employee copies of Form W-2 are generally due by the same date. A 30-day extension is available only in extraordinary circumstances through Form 8809.",
      },
      {
        q: "Do I need to file a W-3 if I only have one employee?",
        a: "Yes. Form W-3 is required whenever you file even a single Form W-2. A household employer with one nanny, or a small business with one part-time worker, must send a W-3 along with Copy A of the W-2. If you file through SSA Business Services Online or a payroll provider, the W-3 is created for you, so the extra step is usually invisible.",
      },
      {
        q: "Do I have to e-file Forms W-2 and W-3?",
        a: "You must e-file if you are required to file 10 or more information returns in total during the calendar year. The count combines Forms W-2 with other information returns such as Forms 1099, so a business with 4 employees and 7 contractors who receive 1099-NEC forms must file electronically. Corrected returns are not counted. Smaller filers can still choose to e-file, which is free through SSA.",
      },
      {
        q: "Where do I mail a paper Form W-3?",
        a: "Paper Forms W-2 and W-3 go to the Social Security Administration, Direct Operations Center, Wilkes-Barre, PA 18769-0001, or ZIP 18769-0002 if sent by certified mail. Use the red-ink official form ordered from the IRS, not a printout of the PDF from the website, because scanned copies of downloaded forms are not machine readable. Do not send payments with W-2 or W-3 forms.",
      },
      {
        q: "How do I correct a Form W-3?",
        a: "Use Form W-3c to transmit Forms W-2c, which correct individual employees' W-2s. Form W-3c shows the tax year, the number of W-2c forms, and the previously reported and corrected totals, with space to explain decreases. If the original W-2s were e-filed, the W-2c forms must also be e-filed. If the error also affects a Form 941, file Form 941-X for that quarter.",
      },
    ],
    content: `
<p>Form W-3 is the transmittal form that summarizes all of your Forms W-2 for the year and goes with Copy A to the Social Security Administration. It totals wages, tips, Social Security and Medicare wages and federal income tax withheld across every employee, and the SSA uses it to check that your W-2s add up. For wages paid in 2026, Form W-3 and the W-2s are due by February 1, 2027.</p>

<p>For most employers the W-3 is almost automatic: payroll software or SSA's online filing tool builds it from your W-2 data. It still matters, because its totals should match the four Forms 941 you filed during the year, and mismatches trigger letters from the IRS and SSA. This guide covers the deadline, e-filing rules, every box, the new 2026 items and how to fix errors. It is general information, not tax advice.</p>

<h2>What Form W-3 does</h2>
<p>Form W-3, Transmittal of Wage and Tax Statements, is a cover summary. The <a href="https://www.irs.gov/instructions/iw2w3" target="_blank" rel="noopener noreferrer">IRS General Instructions for Forms W-2 and W-3</a> state that anyone required to file Form W-2 must also file Form W-3. The SSA processes the W-2 wage data to credit employees' earnings records and shares it with the IRS, which compares it with your quarterly Form 941 filings and with employees' income tax returns.</p>
<p>If you are still learning the W-2 itself, start with our <a href="/blog/form-w-2">Form W-2 guide</a>, then come back for the transmittal.</p>

<h2>Form W-3 deadline and filing rules for 2026 wages</h2>
<table><thead><tr><th>Requirement</th><th>Rule for wages paid in 2026</th></tr></thead><tbody>
<tr><td>Due to SSA (paper or electronic)</td><td>February 1, 2027</td></tr>
<tr><td>Employee copies of W-2</td><td>Generally February 1, 2027</td></tr>
<tr><td>Mandatory e-filing</td><td>If filing 10 or more information returns in total (W-2s plus 1099s and others)</td></tr>
<tr><td>Extension to file with SSA</td><td>One 30-day extension via Form 8809, not automatic, extraordinary circumstances only</td></tr>
<tr><td>Extension to furnish employees</td><td>Form 15397, generally up to 15 days, 30 if clearly needed</td></tr>
<tr><td>Paper filing address</td><td>SSA, Direct Operations Center, Wilkes-Barre, PA 18769-0001</td></tr>
</tbody></table>
<p>The 10-return threshold counts W-2s together with Forms 1099, 1098 and 5498. A business with six employees and five contractors who get Form 1099-NEC already has 11 returns, so it must e-file. Note that for 2026 payments the 1099-NEC threshold rose to $2,000 (see <a href="/blog/1099-nec-threshold-2026">the 1099-NEC threshold for 2026</a>), which may reduce your count.</p>

<h2>Form W-3 box by box</h2>
<table><thead><tr><th>Box</th><th>What to enter</th></tr></thead><tbody>
<tr><td>a</td><td>Control number (optional)</td></tr>
<tr><td>b</td><td>Kind of payer (941, Military, 943, 944, CT-1, Household employer, Medicare govt. employee), kind of employer (None apply, 501c non-govt., State/local non-501c, State/local 501c, Federal govt.), and third-party sick pay checkbox</td></tr>
<tr><td>c</td><td>Total number of Forms W-2 transmitted (not counting voided forms)</td></tr>
<tr><td>d</td><td>Establishment number (optional, for separate locations)</td></tr>
<tr><td>e</td><td>Employer identification number (EIN)</td></tr>
<tr><td>f, g</td><td>Employer name and address</td></tr>
<tr><td>h</td><td>Other EIN used during the year</td></tr>
<tr><td>1 to 11</td><td>Totals of the matching W-2 boxes: wages, federal withholding, Social Security wages and tax, Medicare wages and tax, Social Security tips, allocated tips, dependent care benefits, nonqualified plans</td></tr>
<tr><td>12a</td><td>Total deferred compensation (retirement plan deferrals from W-2 box 12)</td></tr>
<tr><td>13</td><td>For third-party sick pay use only</td></tr>
<tr><td>14</td><td>Income tax withheld by payer of third-party sick pay</td></tr>
<tr><td>15 to 19</td><td>State ID, state and local wages and taxes</td></tr>
</tbody></table>
<p>Most small businesses check "941" and "None apply" in box b. Household employers who file Schedule H check "Hshld. emp."</p>

<h2>What is new on W-2 and W-3 for 2026</h2>
<ul>
<li><strong>New box 12 codes:</strong> TP for total cash tips reported to the employer, TT for total qualified overtime compensation, and TA for employer contributions to Trump accounts.</li>
<li><strong>Box 14 split:</strong> 14a (Other) and 14b (Treasury Tipped Occupation Codes).</li>
<li><strong>Tips and overtime deductions:</strong> These new codes support the employee deductions created by the 2025 tax law, up to $25,000 of qualified tips and up to $12,500 of qualified overtime ($25,000 married filing jointly). See our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips</a>.</li>
<li><strong>Higher penalties</strong> for returns required to be filed after December 31, 2026 (table below).</li>
</ul>

<h2>Step by step: filing Form W-3</h2>
<ol>
<li>Finalize payroll for the year, including bonuses, fringe benefits and third-party sick pay.</li>
<li>Reconcile year-to-date totals with your four Forms 941 (wages, withholding, Social Security and Medicare wages).</li>
<li>Prepare each employee's Form W-2 and check names and Social Security numbers.</li>
<li>File electronically through SSA Business Services Online, which generates the W-3, or let your payroll provider file. If filing on paper, use the official red-ink Copy A and W-3.</li>
<li>Furnish employees their copies by the deadline.</li>
<li>File state W-2 copies if your state requires them.</li>
<li>Keep copies for at least four years.</li>
</ol>

<h2>Worked example: reconciling W-3 with Form 941</h2>
<p>Illustrative figures for a design studio with four employees in 2026.</p>
<table><thead><tr><th>Item</th><th>Sum of four Forms 941</th><th>Form W-3</th><th>Difference</th></tr></thead><tbody>
<tr><td>Wages, tips, other compensation (W-3 box 1 vs 941 line 2)</td><td>$214,000</td><td>$209,500</td><td>$4,500</td></tr>
<tr><td>Federal income tax withheld</td><td>$26,300</td><td>$26,300</td><td>$0</td></tr>
<tr><td>Social Security wages</td><td>$228,000</td><td>$228,000</td><td>$0</td></tr>
<tr><td>Medicare wages</td><td>$228,000</td><td>$228,000</td><td>$0</td></tr>
</tbody></table>
<p>Why do the wage lines differ? Box 1 of the W-2 and W-3 excludes pre-tax 401(k) deferrals, while Social Security and Medicare wages include them, and Form 941 line 2 should follow the same rule as box 1. Here, Social Security and Medicare wages match, so the $4,500 gap is in taxable wages only. The studio traces it to the third quarter, when an employee's $4,500 of 401(k) deferrals was not subtracted on Form 941 line 2. The W-3 is correct; the Q3 Form 941 overstated line 2. Because line 2 does not change the tax owed in this case, the studio documents the reconciliation and asks its preparer whether a <a href="/blog/form-941-x">Form 941-X</a> is needed. Differences that cannot be explained should be resolved before filing, not after.</p>

<h2>Penalties for late or incorrect W-2s</h2>
<p>For returns required to be filed after December 31, 2026, the penalty per Form W-2 is:</p>
<table><thead><tr><th>When corrected or filed</th><th>Per W-2</th><th>Small business annual maximum</th></tr></thead><tbody>
<tr><td>Within 30 days after the due date</td><td>$60</td><td>$244,500</td></tr>
<tr><td>More than 30 days late, by August 1</td><td>$130</td><td>$698,500</td></tr>
<tr><td>After August 1, or not filed</td><td>$340</td><td>$1,397,000</td></tr>
<tr><td>Intentional disregard</td><td>At least $690</td><td>No maximum</td></tr>
</tbody></table>
<p>Separate penalties can apply for failing to furnish correct copies to employees. If you have reasonable cause, read about <a href="/blog/irs-penalty-abatement">penalty abatement</a>.</p>

<h2>Form W-3 and Form 941: what should match</h2>
<p>The IRS reconciles your annual W-3 totals with the sum of your four quarterly Forms 941. Federal income tax withheld (W-3 box 2) should equal the total of Form 941 line 3. Social Security wages and tips (boxes 3 and 7) should equal the totals of Form 941 lines 5a and 5b, and Medicare wages (box 5) should equal line 5c. Social Security and Medicare tax (boxes 4 and 6) should match the employee share of the tax reported. Small rounding differences are normal; anything larger needs an explanation or a correction before the IRS writes to you, which can be a year or more after filing.</p>

<h2>Common Form W-3 mistakes</h2>
<ul>
<li><strong>Printing the downloadable PDF for Copy A.</strong> SSA cannot scan it; order official forms or e-file.</li>
<li><strong>Totals that do not match Form 941.</strong> The IRS sends reconciliation notices months later.</li>
<li><strong>Wrong box b selection.</strong> A household employer checking "941" causes processing errors.</li>
<li><strong>Counting only W-2s for the e-file threshold.</strong> Include 1099s and other information returns.</li>
<li><strong>Issuing W-2s to contractors.</strong> Contractors get 1099-NEC with <a href="/blog/form-1096">Form 1096</a> on paper, not a W-3.</li>
</ul>

<h2>Filing through SSA Business Services Online</h2>
<p>Small employers that do not use a payroll service can file for free through SSA's Business Services Online (BSO). The process is straightforward:</p>
<ol>
<li>Register for a BSO account and request access to wage reporting; SSA verifies your identity and links the account to your EIN.</li>
<li>Choose to key in W-2s online (practical for up to a few dozen employees) or upload a file formatted to SSA's EFW2 specification from your software.</li>
<li>Enter each employee's W-2. BSO checks for missing fields and calculates the W-3 totals from your entries.</li>
<li>Review the generated W-3, submit, and save the confirmation (the wage file identifier) with your payroll records.</li>
<li>Print or download employee copies of each W-2 to furnish by the deadline.</li>
</ol>
<p>Electronic filing avoids paper processing delays, gives an immediate receipt, and lets you file W-2c corrections the same way later.</p>

<h2>Household employers and the W-3</h2>
<p>If you pay a nanny, housekeeper or caregiver who is your employee and their wages meet the household employment threshold, you issue a W-2 and file a W-3 just like a business, checking "Hshld. emp." in box b. You report and pay the employment taxes on Schedule H with your Form 1040 rather than on Form 941. Families often get this wrong by issuing a 1099 instead; a household worker paid by the hour under your direction is usually an employee. If your caregiver runs an independent business and invoices you, see our <a href="/blog/nanny-invoice-template">nanny invoice template</a> for how that arrangement looks on paper.</p>

<h2>Correcting errors after filing: Form W-3c</h2>
<p>When a W-2 was wrong, file Form W-2c for each affected employee with Form W-3c as the transmittal. If the originals were e-filed, the corrections must be e-filed too. If the error also changed the tax you reported for a quarter, file Form 941-X. Our <a href="/blog/how-to-do-payroll-yourself">DIY payroll guide</a> shows the year-end close process that prevents most corrections, and our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> covers the billing side.</p>

<p>Payroll season goes smoother when your receivables are under control. Send professional invoices to every client with our <a href="/invoice-generator">free invoice generator</a>, no sign-up required, and download each as a PDF so your year-end books are complete before the W-3 deadline.</p>
`,
  },
  {
    slug: "marketplace-facilitator-laws",
    title: "Marketplace Facilitator Laws: Who Collects Sales Tax",
    description:
      "Marketplace facilitator laws explained: when Amazon, Etsy or eBay collect sales tax for you, what you still owe on direct sales, nexus rules and invoice tips.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["sales-tax-nexus", "sales-tax-by-state", "etsy-invoice"],
    faqs: [
      {
        q: "What is a marketplace facilitator?",
        a: "A marketplace facilitator is a platform that lets third-party sellers list products, processes the customer's payment, and meets a state's sales threshold. Amazon, Etsy, eBay, Walmart Marketplace and similar sites are typical examples. Under state marketplace facilitator laws, the platform, not the individual seller, is responsible for calculating, collecting and remitting sales tax on the sales it facilitates, once it meets the state's threshold.",
      },
      {
        q: "Do all states have marketplace facilitator laws?",
        a: "Every state that has a statewide sales tax, plus Washington, D.C., now has a marketplace facilitator law. Missouri was the last, with its law taking effect January 1, 2023. States without a statewide sales tax, such as Delaware, Montana, New Hampshire and Oregon, do not need one, although some Alaska local jurisdictions have their own remote seller rules. Details such as thresholds and what counts as facilitating differ by state.",
      },
      {
        q: "If Amazon collects sales tax, do I still need a seller's permit?",
        a: "It depends on the state. Some states do not require you to register if all your sales in the state go through a marketplace that collects tax. Others still require registration and sometimes zero-dollar returns. If you have a physical presence such as inventory in a warehouse, you may need a permit. And if you also sell directly through your own website or in person, you must collect tax on those sales yourself.",
      },
      {
        q: "Do marketplace sales count toward my economic nexus threshold?",
        a: "States differ. Some count marketplace sales toward your own economic nexus threshold, others exclude them, and a few count them for some purposes only. This matters if you sell on Amazon and also on your own Shopify store: in a state that includes marketplace sales, you may cross the threshold and have to collect tax on your direct sales sooner than you expect. Check each state's rules.",
      },
      {
        q: "Does Etsy collect sales tax for custom orders?",
        a: "Yes, when the order is placed and paid through Etsy in a state where Etsy is a marketplace facilitator. Etsy calculates and collects the tax at checkout and remits it. If a customer pays you outside Etsy, for example by invoice for a custom piece, that is a direct sale, and you are responsible for any sales tax due in the customer's state if you have nexus there.",
      },
      {
        q: "Should my invoice show sales tax collected by a marketplace?",
        a: "Your own invoice for a marketplace sale is usually unnecessary, because the platform issues the order confirmation and receipt showing the tax it collected. If you send an invoice anyway, for example for a business buyer's records, do not add sales tax again. Show the tax as collected by the marketplace or leave it off. For direct sales outside the platform, show the tax you charge clearly.",
      },
    ],
    content: `
<p>Marketplace facilitator laws make online platforms such as Amazon, Etsy, eBay and Walmart Marketplace responsible for collecting and remitting sales tax on the sales they process for third-party sellers. Every state with a statewide sales tax, plus Washington, D.C., now has one. If you sell only through a qualifying marketplace, the platform handles tax at checkout; if you also sell directly, through your own website, social media or by invoice, the tax on those sales is still your job.</p>

<p>That split is where small sellers get caught. This guide explains how marketplace facilitator rules work, what they cover and what they do not, how they interact with economic nexus, and how to invoice cleanly when you sell both on and off platform. It is general information, not tax advice, and state rules change often, so confirm with each state's revenue department or a sales tax professional.</p>

<h2>Why marketplace facilitator laws exist</h2>
<p>Before 2018, states could generally only require sellers with a physical presence to collect sales tax. The Supreme Court's 2018 decision in <em>South Dakota v. Wayfair</em> allowed states to impose economic nexus on remote sellers based on sales volume. Rather than chase millions of small sellers, states passed laws making marketplaces collect on behalf of everyone who sells through them. Our explainer on <a href="/blog/sales-tax-nexus">sales tax nexus</a> covers the Wayfair background in depth.</p>
<p>Missouri was the final state, with economic nexus and marketplace facilitator rules effective January 1, 2023. The <a href="https://dor.mo.gov/resources/official-final-rules/documents/12_CSR_10-113_400_Marketplace_Facilitator.pdf" target="_blank" rel="noopener noreferrer">Missouri Department of Revenue marketplace facilitator rule</a> requires a facilitator to collect once its sales into the state exceed $100,000 in the previous or current calendar year.</p>

<h2>Who counts as a marketplace facilitator?</h2>
<p>Definitions vary, but a platform usually qualifies if it:</p>
<ul>
<li>Lists or advertises products for third-party sellers, and</li>
<li>Directly or indirectly processes the customer's payment, and</li>
<li>Meets the state's sales or transaction threshold, counting its own and facilitated sales.</li>
</ul>
<table><thead><tr><th>Platform type</th><th>Usually a facilitator?</th><th>Who collects tax</th></tr></thead><tbody>
<tr><td>Amazon, Walmart Marketplace, eBay, Etsy</td><td>Yes</td><td>Platform, on orders placed through it</td></tr>
<tr><td>App stores and some digital marketplaces</td><td>Often yes</td><td>Platform, where it meets the state definition</td></tr>
<tr><td>Your own Shopify, WooCommerce or Squarespace store</td><td>No (software, not a marketplace)</td><td>You</td></tr>
<tr><td>Payment-only services (Stripe, PayPal invoices)</td><td>No</td><td>You</td></tr>
<tr><td>Social media shops</td><td>Depends on whether the platform processes payment and the state definition</td><td>Check the platform's tax help page</td></tr>
</tbody></table>

<h2>What sellers still have to do</h2>
<ol>
<li><strong>Collect tax on direct sales.</strong> Orders through your website, craft fairs, wholesale or direct invoices are not covered by the marketplace. If you have nexus, you collect.</li>
<li><strong>Track nexus in each state.</strong> Physical presence, such as inventory in a fulfillment center, creates nexus even with no direct sales. Review the <a href="/blog/sales-tax-by-state">sales tax by state</a> guide for rates.</li>
<li><strong>Register where required.</strong> Some states require a <a href="/blog/sellers-permit">seller's permit</a> and even zero returns for marketplace-only sellers; others exempt them.</li>
<li><strong>Report correctly.</strong> Several states ask you to report marketplace sales as a deduction or exempt line on your return so they are not taxed twice.</li>
<li><strong>Keep marketplace tax reports.</strong> Download the platform's tax-collected reports each period for your records.</li>
</ol>

<h2>Marketplace sales and economic nexus</h2>
<p>Most states set economic nexus at $100,000 in sales, and some at higher amounts. Many states have dropped the alternative 200-transaction test in recent years, and more are removing it, so check current rules. The key question for a hybrid seller is whether marketplace sales count toward your personal threshold.</p>
<table><thead><tr><th>State approach</th><th>Effect on a seller with $80,000 on Amazon and $30,000 direct in one state</th></tr></thead><tbody>
<tr><td>Includes marketplace sales in your threshold</td><td>$110,000 total: over $100,000, so collect tax on the $30,000 direct sales</td></tr>
<tr><td>Excludes marketplace sales</td><td>$30,000 counted: under threshold, no collection on direct sales (unless physical presence)</td></tr>
</tbody></table>
<p>This table is illustrative. Look up each state's specific approach on its revenue department site before deciding.</p>

<h2>Worked example: a candle maker on Etsy and Shopify</h2>
<p>Illustrative figures. A candle maker based in Ohio sells $140,000 a year on Etsy and $45,000 through her own Shopify store. Etsy collects and remits tax on every Etsy order in every sales tax state. Her Shopify sales include $20,000 to Ohio customers and $25,000 spread across other states.</p>
<ul>
<li><strong>Ohio:</strong> she has physical presence, so she must collect Ohio sales tax on the $20,000 of direct Ohio sales and file Ohio returns, reporting Etsy sales as marketplace sales where the return asks for them.</li>
<li><strong>Other states:</strong> in a state where her combined Etsy plus direct sales exceed the threshold and marketplace sales count, she may need to register and collect on direct sales there too. In states that exclude marketplace sales, her small direct volume likely stays under the threshold.</li>
<li><strong>Wholesale:</strong> her sales to a boutique for resale are exempt if she collects a valid <a href="/blog/resale-certificate">resale certificate</a>.</li>
</ul>
<p>For invoicing direct and custom orders, see our guide to the <a href="/blog/etsy-invoice">Etsy invoice and custom orders</a>.</p>

<h2>State differences that matter to sellers</h2>
<p>Marketplace facilitator laws share a common goal but differ in details that affect small sellers:</p>
<ul>
<li><strong>Registration for marketplace-only sellers.</strong> Some states release sellers whose only in-state sales are through a collecting marketplace; others still expect a permit and periodic returns.</li>
<li><strong>Thresholds for the facilitator.</strong> Most mirror the remote seller threshold, often $100,000, but some use higher figures such as California's $500,000.</li>
<li><strong>What the marketplace must collect.</strong> Some states include local taxes and special fees, such as tire, battery or rental surcharges; others leave certain fees with the seller.</li>
<li><strong>Liability relief.</strong> Many states relieve the seller of liability for tax the marketplace should have collected, provided the seller gave accurate product information.</li>
<li><strong>Services and rentals.</strong> Some laws also cover platforms that facilitate lodging, ride or delivery services; others cover only tangible goods and digital products.</li>
</ul>
<p>Because these rules change, keep a simple table of your active states with the date you last checked each state's guidance.</p>

<h2>Marketplace sales and your income taxes</h2>
<p>Marketplace facilitator laws only deal with sales tax. The money you earn through the platform is still business income. Marketplaces report seller payouts to the IRS on Form 1099-K once you exceed the federal threshold, which the 2025 tax law restored to more than $20,000 and more than 200 transactions; see our <a href="/blog/1099-k-threshold">1099-K threshold guide</a>. Remember that the 1099-K gross amount may include the sales tax the marketplace collected. That tax is not your income, so reconcile the 1099-K with the platform's reports and subtract tax collected, refunds and fees before it reaches Schedule C.</p>

<h2>Business buyers on marketplaces</h2>
<p>Business customers who are tax-exempt or buying for resale usually register their exemption certificates with the marketplace's business program, so the platform does not charge tax. If a business buyer asks you for an invoice for a marketplace order, issue one that mirrors the platform's order record: same order number, same totals, tax shown as collected by the marketplace. Never re-bill tax that the marketplace already collected.</p>

<h2>Marketplace returns, refunds and chargebacks</h2>
<p>When a marketplace order is refunded, the platform normally refunds the sales tax it collected and adjusts its own state filings, so you do not need to do anything on your sales tax return for that order. Direct sales are different: if you refund a customer on your own store, you refund the tax too and take a deduction for returned sales on your next return in states that allow it. Keep the original invoice and the refund record together, and mark the invoice as credited rather than deleting it, so your sales records and tax filings still agree if a state asks.</p>

<h2>Common mistakes with marketplace facilitator rules</h2>
<ul>
<li><strong>Assuming the marketplace covers everything.</strong> It covers only orders it processes.</li>
<li><strong>Double taxing.</strong> Adding sales tax to an invoice for a marketplace order that already had tax collected.</li>
<li><strong>Ignoring inventory placement.</strong> Amazon FBA can store your goods in states where you never planned to have nexus; see <a href="/blog/how-to-start-an-amazon-fba-business">starting an Amazon FBA business</a>.</li>
<li><strong>Reporting marketplace sales as taxable on your return.</strong> Use the marketplace deduction line where the state provides one.</li>
<li><strong>Forgetting digital and service rules.</strong> Taxability of what you sell still matters. See our guide to <a href="/blog/sales-tax-on-digital-products">sales tax on digital products</a>.</li>
</ul>

<h2>Step by step: a quick marketplace compliance check</h2>
<ol>
<li>List every channel you sell through: marketplaces, your own store, social media checkout, events and direct invoices.</li>
<li>For each marketplace, confirm in its help center which states it collects in and download the tax report.</li>
<li>Total your direct sales by state for the current and previous year.</li>
<li>Note where you have physical presence, including inventory in third-party warehouses.</li>
<li>Compare each state's threshold, and whether it counts marketplace sales, against your totals.</li>
<li>Register, collect and file where required, and set a reminder to repeat this review every quarter.</li>
</ol>

<h2>What if you were not collecting on direct sales?</h2>
<p>If you discover you crossed a threshold months ago, stop the bleeding first: register and start collecting. For past periods, many states offer voluntary disclosure agreements that limit lookback periods and waive penalties. Our guide on how to file a sales tax return covers the filing mechanics, and our <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoice guide</a> shows how to display tax on direct orders. If you buy supplies tax-free for resale but use some yourself, you may also owe <a href="/blog/use-tax">use tax</a>.</p>

<p>For every direct sale, wholesale order or custom commission, send a clear invoice that shows the item price, any sales tax and the buyer's location. Make one in minutes with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download it as a PDF; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you get the rate right.</p>
`,
  },
  {
    slug: "sales-tax-on-digital-products",
    title: "Sales Tax on Digital Products by State (2026)",
    description:
      "Sales tax on digital products by state for 2026: which states tax ebooks, downloads, software and SaaS, California and Colorado 2027 changes, and invoicing.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sales-tax-on-services-by-state",
      "sales-tax-nexus",
      "saas-subscription-invoice-template",
    ],
    faqs: [
      {
        q: "Are digital products taxable in the US?",
        a: "It depends on the state and the product. There is no federal sales tax, and each state decides whether digital goods such as ebooks, music, video, downloaded software, apps and SaaS are taxable. Some states, such as Washington and Pennsylvania, tax most digital products. Others, such as Florida and Nevada, generally do not. Many fall in between, taxing software but not ebooks, or taxing only permanent downloads and not subscriptions.",
      },
      {
        q: "Will California tax digital products in 2027?",
        a: "Yes, for software. California's SB 122, signed June 29, 2026, extends sales and use tax to prewritten computer software transferred electronically or accessed remotely, effective January 1, 2027. That brings most downloaded software and software accessed online into the tax base for California purchasers. Digital books, movies, music, video games and cryptocurrency are excluded. The state's $500,000 economic nexus threshold for remote sellers stays the same.",
      },
      {
        q: "Do I charge sales tax on ebooks and online courses?",
        a: "Ebooks are taxable in many states that tax specified digital products, including Washington, Pennsylvania, Wisconsin and several others, and exempt in states such as California, Florida and Illinois. Online courses are harder: they may be treated as digital products, education services or a mix, depending on whether there is live instruction. Check the state rules for the specific format, and only collect where you have nexus.",
      },
      {
        q: "Do I need to collect sales tax on digital products if I sell from outside the state?",
        a: "Only where you have nexus. Remote sellers usually have nexus through economic thresholds, often $100,000 of sales into the state, with some states using higher amounts, such as California's $500,000. If you sell through a marketplace like an app store or a digital download platform that acts as a marketplace facilitator, the platform may collect for you. Below the threshold, you generally do not collect.",
      },
      {
        q: "How do I know where my digital customer is located?",
        a: "Most states source digital sales to where the customer receives or uses the product, usually the customer's address. Collect a billing address at checkout and, where possible, verify it with payment data. California's new rules source non-in-person digital product sales to the purchaser's address in the seller's records, with billing address taking priority if there are several. IP address alone is rarely sufficient.",
      },
      {
        q: "Is SaaS a digital product for sales tax?",
        a: "Many states treat SaaS as taxable prewritten software accessed remotely, others treat it as a nontaxable service, and some tax it as a data processing or information service. Texas, for example, taxes data processing services with a 20% exemption. Washington, Kentucky and Vermont tax remotely accessed software, while Idaho does not. California joins the taxing states on January 1, 2027. Check each state's guidance for your specific product.",
      },
    ],
    content: `
<p>Sales tax on digital products depends entirely on the state: some tax nearly every ebook, download, stream and software subscription, some tax only software, and a handful tax none of them. The list is also moving quickly. Louisiana broadened its digital tax base in 2025, Utah expanded in July 2026, and California and Colorado have changes taking effect on January 1, 2027. If you sell templates, ebooks, courses, apps or SaaS to US customers, you need to know where you have nexus and how each of those states classifies your product.</p>

<p>This guide groups the states, explains the 2026 and 2027 changes, walks through a worked example for a digital creator, and shows how to put sales tax on a digital product invoice correctly. It is general information, not tax advice, and taxability depends on facts; check the state revenue department or a sales tax adviser before relying on it.</p>

<h2>What counts as a digital product for sales tax?</h2>
<p>States use different labels, but they usually sort digital sales into a few buckets:</p>
<ul>
<li><strong>Specified digital products:</strong> digital audio (music, audiobooks), audio-visual works (movies, video) and digital books. This term comes from the Streamlined Sales and Use Tax Agreement.</li>
<li><strong>Prewritten (canned) software:</strong> downloaded or accessed remotely, including apps and games.</li>
<li><strong>SaaS and cloud services:</strong> software you use online without downloading.</li>
<li><strong>Other digital goods:</strong> templates, fonts, stock photos, printables, digital codes.</li>
<li><strong>Digital services:</strong> data processing, information services and similar.</li>
</ul>
<p>The same file can be taxed differently depending on whether the buyer gets a permanent right to use it or a subscription, and whether the buyer is a business or consumer.</p>

<h2>Digital product taxability by state: the main groups</h2>
<p>The groupings below summarize the July 2026 <a href="https://www.avalara.com/us/en/blog/state-by-state-guide-to-digital-products-and-sales-tax.html" target="_blank" rel="noopener noreferrer">Avalara state-by-state guide to digital products</a>. Rules have many exceptions, so treat this as a starting map, not a final answer.</p>
<table><thead><tr><th>Group</th><th>Example states</th><th>Typical treatment</th></tr></thead><tbody>
<tr><td>Broadly taxable</td><td>Washington, Pennsylvania, South Dakota, Utah, Louisiana, Kentucky, Ohio, Minnesota, New Jersey, Wisconsin, Washington D.C.</td><td>Most digital goods taxable; several also tax streaming and subscriptions</td></tr>
<tr><td>Taxable with conditions</td><td>Georgia, Idaho, Indiana, Wyoming, North Carolina, Tennessee</td><td>Often only when the buyer gets permanent use; rules on subscriptions vary</td></tr>
<tr><td>Software taxable, other digital goods generally not</td><td>New York, Massachusetts, Michigan, North Dakota, Kansas</td><td>Ebooks and music usually exempt; prewritten software taxable</td></tr>
<tr><td>Generally not taxable (for now)</td><td>Florida, Nevada, Illinois (state level), Oklahoma, Virginia</td><td>Electronically delivered goods largely exempt; local taxes may differ</td></tr>
<tr><td>Changing on January 1, 2027</td><td>California (software and SaaS), Colorado (downloaded software exemption repealed, with exceptions)</td><td>Prepare billing and registration now</td></tr>
<tr><td>No statewide sales tax</td><td>Alaska, Delaware, Montana, New Hampshire, Oregon</td><td>No state sales tax; some Alaska localities tax remote sales</td></tr>
</tbody></table>

<h3>Notable details</h3>
<ul>
<li><strong>Texas:</strong> digital goods are taxable if the physical version would be, and data processing services are taxable on 80% of the charge because of a 20% exemption.</li>
<li><strong>Maryland:</strong> has taxed digital products since 2021 and added a 3% tax on certain data, IT and software publishing services from July 1, 2025.</li>
<li><strong>Washington:</strong> taxes digital products regardless of access method, and from October 1, 2025 also taxes custom software and many IT services.</li>
<li><strong>Connecticut:</strong> digital goods are taxed at 6.35% for personal use, while electronically delivered software for business use is taxed at 1%.</li>
<li><strong>Chicago:</strong> streaming is subject to the city amusement tax even though Illinois does not tax digital downloads at the state level.</li>
</ul>

<h2>California's 2027 digital product tax</h2>
<p>California has long exempted electronically delivered software. That ends on January 1, 2027. SB 122, signed June 29, 2026, taxes prewritten computer software transferred on tangible media, transferred electronically or accessed remotely. According to an analysis by <a href="https://www.forvismazars.us/forsights/2026/07/california-expands-sales-tax-to-digital-products-what-to-know" target="_blank" rel="noopener noreferrer">Forvis Mazars</a>, digital books, movies, music, video games and cryptocurrency are excluded, the $500,000 remote seller threshold is unchanged, and sales are sourced to the purchaser's address in your records, with billing address taking priority. A seller of more than $5 million of taxable digital products to a single purchaser in a year stops collecting from that purchaser, who pays use tax instead.</p>
<p>If you sell software or SaaS to California customers and your California sales exceed $500,000, plan now: register, update checkout to collect billing addresses, and adjust invoice templates.</p>

<h2>Step by step: deciding whether to charge tax</h2>
<ol>
<li><strong>Classify your product</strong> in each state: specified digital product, software, SaaS, digital service or other.</li>
<li><strong>Find your nexus states.</strong> Track sales by state against economic thresholds; see our <a href="/blog/sales-tax-nexus">sales tax nexus guide</a>.</li>
<li><strong>Check marketplace coverage.</strong> If an app store or download platform acts as a marketplace facilitator, it may collect for you; read our post on <a href="/blog/marketplace-facilitator-laws">marketplace facilitator laws</a>.</li>
<li><strong>Look up taxability</strong> on each nexus state's revenue site.</li>
<li><strong>Register and collect</strong> in states where you have nexus and the product is taxable.</li>
<li><strong>Collect exemption or resale certificates</strong> from business buyers who qualify; see <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificates</a>.</li>
<li><strong>File returns</strong> on the schedule each state assigns.</li>
</ol>

<h2>Worked example: a template shop selling to three states</h2>
<p>Illustrative figures. A designer sells Notion and spreadsheet templates (permanent downloads) and a $15 per month SaaS invoicing add-on directly from her own website. She has crossed economic nexus in Washington and Pennsylvania and has a physical presence in Florida.</p>
<table><thead><tr><th>State</th><th>Template download ($40)</th><th>SaaS subscription ($15/mo)</th></tr></thead><tbody>
<tr><td>Washington</td><td>Taxable</td><td>Taxable (remote access taxed)</td></tr>
<tr><td>Pennsylvania</td><td>Taxable at 6% plus any local</td><td>Check Pennsylvania guidance for software access</td></tr>
<tr><td>Florida</td><td>Not taxable (digital goods exempt)</td><td>Generally not taxable as a digital good</td></tr>
</tbody></table>
<p>For a Washington customer buying one template, she adds Washington state and local tax at the customer's address. Her invoice shows the $40 price, the tax rate, the tax amount and the customer's location. A Florida customer pays $40 with no sales tax. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps check the math.</p>

<h2>Online courses, memberships and bundles</h2>
<p>Creators rarely sell a single clean product. The way you package an offer can change its tax treatment:</p>
<table><thead><tr><th>Offer</th><th>How states often view it</th><th>What to check</th></tr></thead><tbody>
<tr><td>Prerecorded video course</td><td>Digital audio-visual work or digital good</td><td>Whether the state taxes video downloads or streaming</td></tr>
<tr><td>Live online class or coaching</td><td>Service, often nontaxable</td><td>Whether the state taxes personal or educational services</td></tr>
<tr><td>Membership with library plus community</td><td>Mixed; may be taxed in full or split</td><td>State bundling rules and whether you itemize components</td></tr>
<tr><td>Digital product plus printed workbook</td><td>Bundle with tangible goods; can make the whole sale taxable</td><td>Separately stated pricing on the invoice</td></tr>
<tr><td>License for business use of templates or fonts</td><td>Software or digital good, sometimes at a business rate</td><td>Business-use rates, such as Connecticut's 1% for business software</td></tr>
</tbody></table>
<p>When an offer combines taxable and nontaxable parts, listing each part with its own price on the invoice often lets you tax only the taxable part, but only where the state allows it. If you sell to buyers outside the US, separate rules apply: many countries charge VAT or GST on digital services sold to consumers, often with registration obligations for foreign sellers.</p>

<h2>Recordkeeping for digital sales</h2>
<p>Digital sales leave fewer physical clues, so keep the data states ask for in an audit: customer billing address, the evidence used to locate the customer, the tax charged, exemption certificates for business buyers, and platform reports for marketplace sales. Export these monthly from your checkout or payment processor rather than relying on access later.</p>

<h2>What to do before January 1, 2027</h2>
<p>If you sell software, apps or SaaS, the California and Colorado changes make the next few weeks a good time to prepare. Check your California sales against the $500,000 threshold for the current and prior year, confirm your checkout collects a billing address for every customer, and decide whether your payment platform or tax software can calculate California tax on subscriptions automatically. Update your invoice template to show the tax line and your permit number. If renewals are billed annually in advance, ask a tax adviser how invoices issued before January 1 for service periods after that date will be treated, since rules on timing can differ.</p>

<h2>Common mistakes with digital product sales tax</h2>
<ul>
<li><strong>Assuming digital means tax-free.</strong> Dozens of states tax at least some digital goods.</li>
<li><strong>Applying the seller's home state rate.</strong> Digital sales are generally sourced to the buyer.</li>
<li><strong>Ignoring bundles.</strong> Shipping a physical workbook with a digital course can make the whole sale taxable in some states, as California's current rules show.</li>
<li><strong>Treating every subscription the same.</strong> Several states tax permanent downloads but not subscriptions, and vice versa.</li>
<li><strong>Not watching 2027.</strong> California and Colorado changes apply to sales from January 1, 2027.</li>
</ul>

<h2>Invoicing digital products correctly</h2>
<p>A good digital product invoice lists the product type (download, subscription period or license), the customer's billing address, the tax rate and amount for that jurisdiction, and your registration number where states require it. Recurring SaaS charges benefit from a clear template; see our <a href="/blog/saas-subscription-invoice-template">SaaS subscription invoice template</a>. If you sell services alongside products, compare with our guide to <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a>, and for the basics of showing tax on invoices read <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a>. Creators selling through KDP or TikTok should also read <a href="/blog/amazon-kdp-royalties">Amazon KDP royalties</a> for how platform sales are taxed.</p>

<p>Whatever you sell digitally, a clean invoice with the right tax line protects you in an audit. Create one with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download it as a PDF to send with every order or subscription renewal.</p>
`,
  },
  {
    slug: "use-tax",
    title: "Use Tax Explained for Small Businesses",
    description:
      "Use tax explained for small businesses: when you owe it on untaxed purchases, how to calculate and report it, common audit triggers and a worked example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["sales-tax-exemption-certificate", "resale-certificate", "sales-tax-nexus"],
    faqs: [
      {
        q: "What is use tax in simple terms?",
        a: "Use tax is the buyer's version of sales tax. When you buy taxable goods or services for use in your state and the seller does not charge your state's sales tax, you generally owe use tax at the same rate directly to the state. It exists so that buying from an out-of-state seller, or buying tax-free and then using the item yourself, does not avoid the tax a local purchase would have carried.",
      },
      {
        q: "When does a small business owe use tax?",
        a: "Common triggers are buying equipment or supplies online from a seller that did not charge your state's tax, buying items tax-free with a resale certificate and then using them in the business instead of reselling, pulling inventory for your own use or giveaways, and bringing equipment into a state from elsewhere. If the seller charged your state's sales tax at the correct rate, you do not owe use tax on that purchase.",
      },
      {
        q: "How do I report use tax?",
        a: "Businesses registered for sales tax usually report use tax on their regular sales and use tax return, on a line for purchases subject to use tax, in the period the item was first used in the state. Businesses without a sales tax account may file a separate consumer or business use tax return, or in some states report it on the income tax return. Washington and California, for example, both direct businesses to report on their regular returns.",
      },
      {
        q: "What is the use tax rate?",
        a: "The use tax rate generally equals the sales tax rate where the item is first used, including state and local portions. In Washington, for example, the state portion is 6.5% plus the local rate where the goods are put to use. If you paid a lower sales tax to another state, most states let you credit that amount and pay only the difference.",
      },
      {
        q: "Do I owe use tax on software and digital purchases?",
        a: "Only if your state taxes that type of digital product or software. If it does and the vendor did not charge tax, you owe use tax. This is changing in some states: California will tax prewritten software and SaaS from January 1, 2027, and a buyer purchasing more than $5 million of taxable digital products from one seller in a year pays use tax directly once the seller stops collecting.",
      },
      {
        q: "What happens if I never paid use tax?",
        a: "Use tax is one of the most common findings in state sales tax audits, because auditors review your fixed asset purchases and expense accounts for items bought without tax. You may be assessed the tax plus interest and penalties for the audit period. If you discover past liability before an audit, many states offer voluntary disclosure programs that limit how far back you pay and may waive penalties.",
      },
    ],
    content: `
<p>Use tax is a tax you owe as the buyer when you purchase taxable goods or services for use in your state and the seller did not collect your state's sales tax. It is charged at the same rate as sales tax, reported on your own return, and designed so that buying out of state or buying tax-free and then using the item yourself does not avoid tax. For small businesses, it most often comes up with online equipment purchases, supplies bought with a resale certificate, and inventory taken for internal use.</p>

<p>Most owners never think about use tax until an auditor does. This guide explains when you owe it, how to calculate it, where to report it, a worked example with real-looking numbers, and the mistakes that cause audit assessments. It is general information, not tax advice; state rules differ, so confirm with your state revenue department or a sales tax professional.</p>

<h2>Sales tax vs use tax</h2>
<table><thead><tr><th></th><th>Sales tax</th><th>Use tax</th></tr></thead><tbody>
<tr><td>Who is responsible</td><td>Seller collects from buyer and remits</td><td>Buyer reports and pays directly</td></tr>
<tr><td>When it applies</td><td>Taxable sale where the seller has nexus</td><td>Taxable item used in the state with no (or too little) sales tax paid</td></tr>
<tr><td>Rate</td><td>Rate at the point of sale or delivery</td><td>Rate where the item is first used</td></tr>
<tr><td>Where reported</td><td>Seller's sales tax return</td><td>Buyer's sales and use tax return, or a separate use tax return</td></tr>
</tbody></table>
<p>The <a href="https://dor.wa.gov/taxes-rates/use-tax" target="_blank" rel="noopener noreferrer">Washington Department of Revenue explains it</a> simply: sales tax is collected by the seller, while use tax is the buyer's responsibility, paid directly to the state when sales tax was not paid on the purchase.</p>

<h2>When does a small business owe use tax?</h2>
<ul>
<li><strong>Out-of-state purchases without tax.</strong> Buying a $3,000 printer from a seller who has no nexus in your state and charges no tax.</li>
<li><strong>Purchases for resale that you use instead.</strong> A contractor buys lumber with a <a href="/blog/resale-certificate">resale certificate</a> and uses some for the company's own shed.</li>
<li><strong>Inventory removed for business use.</strong> A retailer takes a laptop from stock for the office, or gives products away as samples or prizes.</li>
<li><strong>Exempt purchases used for a nonexempt purpose.</strong> Equipment bought under an exemption certificate but later used outside the exemption. See our guide to <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificates</a>.</li>
<li><strong>Moving equipment into a state.</strong> Some states impose use tax when you bring business property in, often with credit for tax paid elsewhere.</li>
<li><strong>Imports.</strong> Goods bought from overseas suppliers rarely include US state sales tax.</li>
</ul>
<p>Since 2018, most large online sellers and marketplaces collect sales tax under economic nexus and <a href="/blog/marketplace-facilitator-laws">marketplace facilitator laws</a>, so use tax gaps have narrowed. But small vendors, B2B suppliers, overseas sellers and exempt purchases still create plenty of liability.</p>

<h2>How to calculate use tax</h2>
<ol>
<li>Identify the purchase price of the taxable item, generally including shipping where your state taxes shipping (see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>).</li>
<li>Find the combined state and local rate where you first use the item.</li>
<li>Multiply price by rate.</li>
<li>Subtract any sales tax you already paid to another state, if your state allows a credit.</li>
<li>Report the result for the period in which you first used the item.</li>
</ol>
<p>The <a href="/tools/sales-tax-calculator">sales tax calculator</a> works for use tax too, since the rate is the same.</p>

<h2>How and where to report use tax</h2>
<table><thead><tr><th>Your situation</th><th>Where use tax usually goes</th></tr></thead><tbody>
<tr><td>Registered for sales tax (seller's permit)</td><td>Your regular sales and use tax return, "purchases subject to use tax" line</td></tr>
<tr><td>Not registered, buys a lot of untaxed items</td><td>Some states require registration as a use tax account or qualified purchaser</td></tr>
<tr><td>Occasional purchases, no sales tax account</td><td>A consumer use tax return, or a line on the state income tax return in some states</td></tr>
</tbody></table>
<p>In California, for example, a business with a seller's permit reports use tax on its regular return, and a business without a permit may need to register as a qualified purchaser if it makes more than $10,000 a year of purchases subject to use tax, according to CDTFA guidance. Washington businesses report it on their excise tax return in the period the goods were first used.</p>

<h2>Worked example: a small marketing agency</h2>
<p>Illustrative figures. An agency in a state with a combined 8% rate reviews its purchases for the quarter:</p>
<table><thead><tr><th>Purchase</th><th>Price</th><th>Tax charged</th><th>Use tax due</th></tr></thead><tbody>
<tr><td>Camera from an out-of-state specialty shop</td><td>$2,400</td><td>$0</td><td>$192</td></tr>
<tr><td>Office chairs from a major online retailer</td><td>$1,100</td><td>$88 (8%)</td><td>$0</td></tr>
<tr><td>Trade show banners from a supplier in a state with no sales tax</td><td>$650</td><td>$0</td><td>$52</td></tr>
<tr><td>Laptop bought in another state at 6% tax</td><td>$1,500</td><td>$90</td><td>$30 (difference)</td></tr>
<tr><td>Freelance design services (nontaxable in this state)</td><td>$3,000</td><td>$0</td><td>$0</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>$274</strong></td></tr>
</tbody></table>
<p>The agency reports $274 on its next sales and use tax return. A simple habit, tagging untaxed purchases in the bookkeeping system each month, makes this a ten-minute task. Whether services are taxable depends on the state; see <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a>.</p>

<h2>Digital purchases and use tax</h2>
<p>As more states tax software and digital products, use tax on subscriptions is growing. If your state taxes SaaS and your vendor does not charge tax, you owe use tax. California will tax prewritten software and SaaS from January 1, 2027, so California businesses buying software from vendors that do not register should plan for it. Our guide to <a href="/blog/sales-tax-on-digital-products">sales tax on digital products</a> covers state-by-state treatment.</p>

<h2>Use tax for contractors and service businesses</h2>
<p>Contractors face use tax more than most. In many states, a contractor installing materials into real property is treated as the consumer of those materials, which means the contractor pays sales tax when buying them, or use tax if bought untaxed, rather than charging sales tax to the customer. A contractor who buys materials tax-free on a resale certificate in such a state and then installs them may owe use tax on the full cost. Other states treat certain contracts differently, so check your state's contractor rules before choosing how to buy and how to invoice.</p>
<p>Service businesses such as agencies, consultants and clinics usually do not resell goods, so nearly every taxable item they buy is for their own use. If a vendor did not charge tax, use tax applies. Common examples are equipment from out-of-state specialty suppliers, promotional products, furniture, and software in states that tax it.</p>

<h2>Building a simple monthly use tax routine</h2>
<ol>
<li>In your bookkeeping software, add a tag or class for "no sales tax charged" when entering bills and card transactions.</li>
<li>At month end, filter for taxable items with that tag. Ignore nontaxable services and items where tax was charged.</li>
<li>Multiply by your local rate and record a use tax accrual as an expense or as part of the asset cost.</li>
<li>Report the total on your next sales and use tax return or use tax return.</li>
<li>Keep the vendor invoices and the monthly calculation together, so an auditor can see the process.</li>
</ol>
<p>Use tax you pay is generally part of the cost of the item, so it is deductible as an expense or added to the asset's basis for depreciation.</p>

<h2>Use tax and exemption certificates you give to vendors</h2>
<p>When you hand a vendor a resale or exemption certificate, you take on responsibility for the tax if the item is not used as the certificate says. That is the most common path into a use tax assessment for retailers and contractors. Review certificates you have issued at least once a year, make sure staff understand that personal or internal-use purchases cannot go on the resale account, and record use tax promptly when stock is diverted for your own use. Vendors keep copies of your certificates, and auditors can request them to trace what you bought tax-free.</p>

<h2>Common use tax mistakes</h2>
<ul>
<li><strong>Thinking it only applies to individuals.</strong> Businesses are the main target of use tax audits.</li>
<li><strong>Using the seller's state rate.</strong> The rate is where you use the item.</li>
<li><strong>Not tracking items pulled from inventory.</strong> Samples, giveaways and internal use are frequent audit findings.</li>
<li><strong>Double paying.</strong> If a vendor already charged your state's tax, do not report use tax again; keep the invoice showing tax paid.</li>
<li><strong>Ignoring fixed assets.</strong> Auditors start with the <a href="/blog/fixed-asset-register">fixed asset register</a> because big-ticket purchases carry big tax.</li>
<li><strong>Losing invoices.</strong> Without the vendor invoice, you cannot prove tax was paid; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>What to do if you have unpaid use tax</h2>
<p>Estimate the exposure by reviewing purchase records for the last three or four years. If it is significant, talk to a sales tax professional about a voluntary disclosure agreement, which in many states limits the lookback period and waives penalties in exchange for coming forward. Going forward, add a monthly accrual step to your bookkeeping and train whoever approves purchases to check whether tax was charged. If you are preparing for a broader review, our <a href="/blog/invoice-audit-preparation">invoice audit preparation</a> guide helps organize records, and <a href="/blog/how-to-file-sales-tax-return">filing a sales tax return</a> shows where the use tax line sits.</p>

<p>On the selling side, clear invoices that show the tax you charged help your business customers avoid use tax questions too. Create them with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download each invoice as a PDF for your records and theirs.</p>
`,
  },
];
