import type { PostDraft } from "../blog";

export const TAX_US_UK_2026_POSTS: PostDraft[] = [
  {
    slug: "1099-nec-threshold-2026",
    title: "1099 Threshold 2026: 1099-NEC Rises From $600 to $2,000",
    description:
      "The 1099 threshold for 2026 is $2,000 for Form 1099-NEC and most 1099-MISC boxes. See what changed, the exceptions, backup withholding and a worked example.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "schedule-c-for-freelancers",
      "1099-nec-vs-1099-misc-vs-1099-k",
      "w9-and-1099-for-contractors",
      "1099-k-threshold",
    ],
    faqs: [
      {
        q: "Do I still need a W-9 from a contractor I will pay less than $2,000?",
        a: "Yes, it is still good practice. You often cannot know at the start of the year whether a contractor will cross $2,000, and a W-9 gives you the legal name and taxpayer identification number you need if they do. Collecting it before the first payment also protects you from backup withholding problems later, because chasing a TIN in January is much harder than asking during onboarding.",
      },
      {
        q: "When will the $2,000 threshold change again?",
        a: "The law indexes the $2,000 amount for inflation beginning in calendar year 2027. The IRS will publish the adjusted figure, usually in its annual inflation guidance and the updated Form 1099-MISC and 1099-NEC instructions. Check the instructions for the year you are filing rather than assuming the figure stays at $2,000.",
      },
      {
        q: "Does the new threshold apply to payments I made in 2025?",
        a: "No. The $2,000 threshold applies to payments made after December 31, 2025. For payments made during 2025, reported in early 2026, the old $600 threshold still applied to Form 1099-NEC and most Form 1099-MISC categories.",
      },
      {
        q: "Do states follow the new federal 1099 threshold?",
        a: "Not necessarily. Some states run their own information-return rules or use the Combined Federal/State Filing Program, and a state can keep a lower threshold or require its own filing. If you pay contractors in several states, check each state's revenue department guidance before deciding not to file.",
      },
      {
        q: "I am a freelancer. Does the $2,000 rule mean income under $2,000 is tax-free?",
        a: "No. The threshold only decides whether your client must file a form. All income from self-employment is reportable on your return, generally on Schedule C, whether or not you receive a 1099. Keep your own invoices and payment records so you can report every client accurately, including small ones.",
      },
      {
        q: "Can I file a 1099-NEC for a contractor I paid less than $2,000?",
        a: "Generally you are not required to, and filing unnecessary forms creates extra admin for you and the contractor. The main exception is when you withheld federal income tax under backup withholding: the instructions say you must file for any person you withheld from, regardless of the amount paid.",
      },
      {
        q: "Does the $2,000 threshold apply to foreign contractors?",
        a: "No, because Forms 1099-NEC and 1099-MISC are for US persons. A foreign contractor should give you Form W-8BEN or W-8BEN-E instead of a W-9. If all the work is done outside the US, there is generally no 1099 and no US withholding. Work performed in the US by a nonresident follows different rules, so get advice in that case.",
      },
      {
        q: "If I paid one contractor partly by check and partly by PayPal, do I file?",
        a: "Count only the direct payments, such as check, ACH or cash. Card and payment network payments are reported by the processor on Form 1099-K. For example, if you paid $1,500 by check and $1,000 through PayPal goods and services, your direct total is $1,500, which is under $2,000, so no 1099-NEC is required for 2026.",
      },
      {
        q: "Do expense reimbursements count toward the $2,000 total?",
        a: "They can. Reimbursements a contractor did not account to you for, such as a flat travel allowance without receipts, are generally treated as part of their compensation. Reimbursements that were properly substantiated may be treated differently. Check the current IRS instructions for Forms 1099-MISC and 1099-NEC, and ask your tax professional how to handle your own reimbursement policy.",
      },
      {
        q: "Does the threshold change affect Forms 1099-INT or 1099-DIV?",
        a: "No. The $2,000 change covers Form 1099-NEC and most Form 1099-MISC boxes. Forms 1099-INT and 1099-DIV have their own reporting thresholds, generally $10 for most interest and dividends. Check the instructions for each form for the year you are filing, as each has its own rules and exceptions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The 1099 threshold for 2026 is $2,000. For payments made on or after January 1, 2026, you only have to file Form 1099-NEC, and most Form 1099-MISC categories such as rents, when you pay one person $2,000 or more in the year. It replaces the $600 rule in place since 1954 and will be indexed for inflation from 2027.</p>

<p>If you hire freelancers or independent contractors, the new 1099 threshold for 2026 means fewer forms to file each January. If you are the freelancer, it means some smaller clients will no longer send you a 1099 at all. Your income is still taxable either way, which is why clean invoices from a tool like our <a href="/invoice-generator/usa">free US invoice generator</a> matter more than ever.</p>

<p>This guide covers exactly what changed under the One Big Beautiful Bill Act (P.L. 119-21), which payments still use the old figures, how backup withholding fits in, and a worked example you can copy for your own vendor list.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. IRS thresholds, boxes and deadlines change, and the right treatment depends on your facts. Check the current <a href="https://www.irs.gov/instructions/i1099mec" target="_blank" rel="noopener noreferrer">IRS Instructions for Forms 1099-MISC and 1099-NEC</a> or ask a qualified tax professional before acting.</p>

<h2>What is the 1099 threshold for 2026?</h2>
<p>The threshold is the payment amount that triggers an information return. Before 2026, a business had to file Form 1099-NEC when it paid a non-employee $600 or more for services in the course of its trade or business. Section 70433 of the One Big Beautiful Bill Act raised that figure to $2,000 for payments made after December 31, 2025.</p>
<p>The IRS's December 2026 revision of the Form 1099-MISC and 1099-NEC instructions, used for 2026 forms filed in early 2027, confirms that for tax years beginning after 2025 the threshold increased to $2,000 and may be adjusted for inflation beginning in calendar year 2027.</p>
<ul>
<li><strong>Payments made in 2025</strong> (forms filed in early 2026): old $600 threshold.</li>
<li><strong>Payments made in 2026</strong> (forms filed in early 2027): new $2,000 threshold.</li>
<li><strong>Payments made in 2027 onward:</strong> $2,000 adjusted for inflation each year.</li>
</ul>

<h2>Which 1099 reporting requirements changed, and which did not?</h2>
<p>The change is not universal. It applies to the payments covered by Internal Revenue Code sections 6041 and 6041A, which feed Form 1099-NEC box 1a and several Form 1099-MISC boxes. Other boxes keep their own figures. Here is the 2026 picture based on the IRS instructions.</p>
<table><thead><tr><th>Form and box</th><th>Payment type</th><th>2026 threshold</th></tr></thead><tbody>
<tr><td>1099-NEC box 1a</td><td>Nonemployee compensation (contractor fees, attorney fees)</td><td>$2,000</td></tr>
<tr><td>1099-NEC box 2 / 1099-MISC box 7</td><td>Direct sales of consumer products for resale</td><td>$5,000 (checkbox)</td></tr>
<tr><td>1099-MISC box 1</td><td>Rents</td><td>$2,000</td></tr>
<tr><td>1099-MISC box 2</td><td>Royalties</td><td>$10</td></tr>
<tr><td>1099-MISC box 3</td><td>Other income (for example prizes and awards)</td><td>$2,000</td></tr>
<tr><td>1099-MISC box 6</td><td>Medical and health care payments</td><td>$2,000</td></tr>
<tr><td>1099-MISC box 8</td><td>Substitute payments in lieu of dividends or interest</td><td>$10</td></tr>
<tr><td>1099-MISC box 10</td><td>Gross proceeds paid to an attorney</td><td>$600</td></tr>
<tr><td>1099-MISC box 11</td><td>Fish purchased for resale</td><td>$600</td></tr>
</tbody></table>
<p>Two exceptions catch people out. Gross proceeds paid to an attorney, such as a settlement paid through a law firm, stay at $600 on Form 1099-MISC box 10. Royalties stay at $10. Attorney <em>fees</em> for legal services, on the other hand, go in 1099-NEC box 1a and now use the $2,000 threshold.</p>
<p>Form 1099-K is a separate regime with its own threshold of more than $20,000 and more than 200 transactions for payment apps and marketplaces. We cover it in our <a href="/blog/1099-k-threshold">1099-K threshold guide</a>.</p>

<h2>Who has to file Form 1099-NEC under the $2,000 1099 rule?</h2>
<p>You file Form 1099-NEC when all of these are true:</p>
<ol>
<li>You paid someone who is not your employee (an individual, partnership, or LLC taxed as either).</li>
<li>You paid for services in the course of your trade or business, not personal payments like a babysitter for your own children.</li>
<li>Your total payments to that payee in 2026 were $2,000 or more.</li>
<li>You paid by cash, check, ACH, wire, or another direct method, not by credit card or through a third-party network such as PayPal goods and services, which are reported on Form 1099-K by the processor instead.</li>
</ol>
<p>Payments to C and S corporations are generally not reportable. The main exceptions are attorneys' fees and gross proceeds paid to attorneys, and medical and health care payments, which are reportable even when the payee is a corporation. That is why you need the payee's tax classification from Form W-9; our <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 guide</a> walks through collecting it.</p>

<h2>Backup withholding and the new threshold</h2>
<p>Backup withholding is federal income tax a payer must withhold from reportable payments when the payee does not provide a taxpayer identification number (TIN) or the IRS tells you the TIN is wrong. The rate has been 24% since 2018.</p>
<p>The law ties backup withholding to the same reportable-payment thresholds, and the IRS instructions describe the $2,000 change as applying to payments you must report and/or perform backup withholding on. In practice, that means:</p>
<ul>
<li>If a contractor refuses to give you a TIN and you expect to pay them $2,000 or more, you may have to withhold 24% from payments.</li>
<li>If you do withhold, you must file a 1099 for that payee <strong>regardless of the amount</strong>, and report the tax withheld in box 4.</li>
<li>Withheld tax is reported and deposited through Form 945.</li>
</ul>
<p>Some practitioners read the timing of the backup withholding change differently, so if backup withholding is a live issue for you, confirm the current rule in IRS Publication 1099 and the instructions for the year you are filing.</p>

<h2>Worked example: applying the 1099 threshold for 2026</h2>
<p>Say you run a small marketing agency and made these payments during 2026:</p>
<table><thead><tr><th>Payee</th><th>Type</th><th>How paid</th><th>2026 total</th><th>Form required?</th></tr></thead><tbody>
<tr><td>Ana (sole proprietor copywriter)</td><td>Services</td><td>ACH</td><td>$1,950</td><td>No: under $2,000</td></tr>
<tr><td>Ben (freelance developer)</td><td>Services</td><td>ACH, 3 invoices</td><td>$800 + $700 + $500 = $2,000</td><td>Yes: 1099-NEC, $2,000 meets the threshold</td></tr>
<tr><td>Studio Co. (S corporation)</td><td>Services</td><td>Check</td><td>$6,400</td><td>No: corporation exception</td></tr>
<tr><td>Carla (designer)</td><td>Services</td><td>Credit card</td><td>$4,500</td><td>No 1099-NEC: card payments go on 1099-K</td></tr>
<tr><td>Office landlord (individual)</td><td>Rent</td><td>ACH, $200 x 12</td><td>$2,400</td><td>Yes: 1099-MISC box 1</td></tr>
<tr><td>Law firm LLP</td><td>Legal fees</td><td>ACH</td><td>$1,500</td><td>No: attorney fees use $2,000</td></tr>
<tr><td>Law firm LLP</td><td>Settlement proceeds paid to the firm</td><td>Wire</td><td>$900</td><td>Yes: 1099-MISC box 10, $600 threshold</td></tr>
</tbody></table>
<p>Under the old rules, Ana would have received a 1099-NEC. In 2026 she does not, but she still has to report the $1,950 as income. Ben is exactly on the line: because the test is $2,000 or more, he gets a form. Note that you add up every payment to the same payee across the calendar year, which is why matching invoice numbers to payments matters; a consistent scheme from our <a href="/tools/invoice-number-generator">invoice number generator</a> makes the year-end tally fast.</p>

<h2>2026 1099 deadlines and how to file</h2>
<ul>
<li><strong>Form 1099-NEC:</strong> due to the IRS and to the contractor by January 31. For 2026 payments, January 31, 2027 is a Sunday, so the deadline moves to Monday, February 1, 2027.</li>
<li><strong>Form 1099-MISC:</strong> payee copies by January 31 (February 1, 2027 for 2026 forms); IRS copies by February 28 on paper or March 31 if filed electronically, adjusted for weekends.</li>
<li><strong>E-filing:</strong> if you file 10 or more information returns in total, you generally must e-file. The IRS's free Information Returns Intake System (IRIS) handles 1099s.</li>
</ul>
<p>Late or incorrect filings attract per-form penalties that rise the later you correct them. The amounts are inflation-adjusted each year, so check the current figures on irs.gov rather than relying on an old table.</p>

<h2>What the higher threshold means for freelancers</h2>
<p>If you are the one being paid, the $2,000 rule changes your paperwork, not your tax bill:</p>
<ul>
<li><strong>Fewer 1099s will arrive.</strong> Small clients paying you under $2,000 will not send one. You cannot reconcile your income from 1099s alone any more.</li>
<li><strong>Your invoices become the record.</strong> Number every invoice, date it, and mark it paid. A simple <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> totals income per client.</li>
<li><strong>Estimated taxes still apply.</strong> Income without a 1099 still counts toward your quarterly estimated taxes and self-employment tax.</li>
<li><strong>Tips have new boxes.</strong> For 2026, Form 1099-NEC adds box 1b for cash tips and 1c for the Treasury Tipped Occupation Code, linked to the new tips deduction explained in our <a href="/blog/no-tax-on-tips-self-employed">no tax on tips guide</a>.</li>
</ul>

<h2>Common mistakes with the 2026 1099 threshold</h2>
<ul>
<li><strong>Applying $2,000 to 2025 payments.</strong> Forms filed in early 2026 covered 2025 payments and used $600.</li>
<li><strong>Testing each invoice instead of the annual total.</strong> The threshold applies to total payments to one payee in the calendar year.</li>
<li><strong>Forgetting the attorney exception.</strong> Gross proceeds paid to attorneys still use $600.</li>
<li><strong>Issuing a 1099-NEC for card or PayPal payments.</strong> Those are the processor's job on Form 1099-K, and reporting them twice inflates the contractor's income.</li>
<li><strong>Skipping the W-9 for small vendors.</strong> If they later cross $2,000, you need their TIN.</li>
<li><strong>Treating "no 1099" as "no tax".</strong> All business income is taxable.</li>
</ul>

<h2>Year-end 1099 checklist for payers</h2>
<ol>
<li>Export every 2026 vendor payment and group it by payee TIN.</li>
<li>Remove payments made by credit card or through a payment network.</li>
<li>Remove payees that are C or S corporations, except attorneys and medical providers.</li>
<li>Flag service and rent payees at $2,000 or more, attorney gross proceeds at $600 or more, and royalties at $10 or more.</li>
<li>Check each flagged payee has a valid W-9 on file; run IRS TIN matching if you are eligible.</li>
<li>File through IRIS or your software and send payee copies by the deadline.</li>
<li>Keep copies and supporting invoices with your tax records; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ol>

<h2>Next step</h2>
<p>If you are a contractor, make sure every client invoice carries your legal name, business address, invoice number and dates so your clients can match their 1099 totals to your records. Create one in a minute with the <a href="/invoice-generator/usa">US invoice generator</a>, download the PDF, and keep a copy. Not sure which form a particular payment belongs on? Read our <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K comparison</a>.</p>
`,
  },
  {
    slug: "1099-nec-vs-1099-misc-vs-1099-k",
    title: "1099-NEC vs 1099-MISC vs 1099-K: Which Form? (2026)",
    description:
      "1099-NEC vs 1099-MISC vs 1099-K explained: who files each form, 2026 thresholds, what goes in each box and how to avoid double reporting, with an example.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["1099-nec-threshold-2026", "1099-k-threshold", "independent-contractor-invoice"],
    faqs: [
      {
        q: "Can a freelancer receive both a 1099-NEC and a 1099-K for the same client?",
        a: "It should not happen for the same payment. A client who pays you by ACH or check reports it on 1099-NEC; a client who pays through a card processor or payment app leaves reporting to that platform's 1099-K. If one client used both methods, you might get a 1099-NEC for the direct payments and the platform might include the card payments in a 1099-K. Report the income once on your return.",
      },
      {
        q: "Why did the IRS bring back Form 1099-NEC?",
        a: "Before 2020, nonemployee compensation was reported in box 7 of Form 1099-MISC. Because that box had an earlier filing deadline than the rest of the form, filings were confusing. The IRS reintroduced Form 1099-NEC for the 2020 tax year so contractor pay has its own form with a single January 31 deadline, and Form 1099-MISC now covers other miscellaneous payments.",
      },
      {
        q: "What do I do if a 1099 shows the wrong amount?",
        a: "Contact the issuer, whether that is the client or the payment platform, and ask for a corrected form. Show your invoices and payment records. If you cannot get a correction before you file, report the income you actually received and keep the evidence that explains the difference, in case the IRS sends a matching notice.",
      },
      {
        q: "Do LLCs get 1099-NEC forms?",
        a: "It depends on how the LLC is taxed. A single-member LLC taxed as a disregarded entity, or a multi-member LLC taxed as a partnership, is generally reportable. An LLC that elected to be taxed as an S or C corporation is generally exempt, except for attorneys and medical providers. The tax classification box on Form W-9 tells the payer which applies.",
      },
      {
        q: "Is a 1099-K issued for personal payments like splitting rent?",
        a: "It should not be. Form 1099-K covers payments for goods and services. Personal transfers between friends and family are not income and should be marked as personal in the payment app. If you receive a 1099-K that includes personal amounts, keep records showing what they were so you can explain the difference on your return.",
      },
      {
        q: "Do I have to file 1099s if I am a freelancer paying subcontractors?",
        a: "Yes, if you pay them in the course of your trade or business and the other conditions are met. Sole proprietors and single-member LLCs have the same filing duty as larger businesses. If you pay a subcontractor $2,000 or more directly in 2026, collect a W-9 and file Form 1099-NEC unless an exception applies, such as payment to a corporation.",
      },
      {
        q: "What is the difference between a 1099 and a W-2?",
        a: "A W-2 reports wages paid to an employee, with income, Social Security and Medicare taxes withheld by the employer. A 1099-NEC reports payments to an independent contractor, who pays their own taxes, including self-employment tax. Whether someone is an employee or a contractor depends on the working relationship, not on which form you choose, so check the IRS guidance on worker classification.",
      },
      {
        q: "Can I file 1099 forms for free?",
        a: "Yes. The IRS's Information Returns Intake System (IRIS) lets businesses e-file Forms 1099 for free, and you generally must e-file if you file 10 or more information returns in total. Many accounting and payroll products also file 1099s, often for a fee. You still need to send copies to each recipient by the deadline.",
      },
      {
        q: "What should I do if I have not received a 1099 I expected?",
        a: "Report the income anyway, using your invoices and bank records. The payee copy of Form 1099-NEC is due by January 31, or the next business day, so allow a little time and then ask the client. Not receiving a form does not change what you owe, and the IRS may still receive its copy from the payer.",
      },
      {
        q: "Do I need a 1099 for payments for goods or supplies?",
        a: "Generally no. Forms 1099-NEC and 1099-MISC cover payments for services, rent and the other listed categories, not routine purchases of goods or merchandise. If an invoice mixes goods and services, such as installation work, only the service part is normally reportable. Ask suppliers to separate the two on their invoices to make year-end reporting easier.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the 1099-NEC vs 1099-MISC choice, use Form 1099-NEC for contractor fees of $2,000 or more paid directly, and Form 1099-MISC for rents, prizes, royalties and attorney settlement proceeds. Form 1099-K is filed by payment processors and apps, not by you, for card and app payments above $20,000 and 200 transactions.</p>

<p>All three are information returns: they tell the IRS that money changed hands. The confusion comes from who files each one and which payments belong where. Get it wrong and a freelancer can end up with the same income reported twice. This comparison sorts it out with a side-by-side table, the 2026 thresholds and a worked example. If you are invoicing as a contractor, our <a href="/invoice-generator/usa">US invoice generator</a> gives you clean records to match against whatever forms arrive.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Thresholds and box numbers change from year to year. Check the current <a href="https://www.irs.gov/instructions/i1099mec" target="_blank" rel="noopener noreferrer">IRS instructions for Forms 1099-MISC and 1099-NEC</a> or ask a qualified tax professional for your situation.</p>

<h2>1099 forms explained: the short version</h2>
<ul>
<li><strong>Form 1099-NEC (Nonemployee Compensation):</strong> a business reports what it paid a non-employee for services.</li>
<li><strong>Form 1099-MISC (Miscellaneous Information):</strong> a business reports other payments, such as rent, royalties, prizes, medical payments and gross proceeds paid to attorneys.</li>
<li><strong>Form 1099-K (Payment Card and Third Party Network Transactions):</strong> a payment settlement entity, such as a card processor, payment app or online marketplace, reports gross payments it processed for a payee.</li>
</ul>

<h2>1099-NEC vs 1099-MISC vs 1099-K comparison table</h2>
<table><thead><tr><th></th><th>1099-NEC</th><th>1099-MISC</th><th>1099-K</th></tr></thead><tbody>
<tr><td>Who files</td><td>The business paying a contractor</td><td>The business making the payment</td><td>The card processor, payment app or marketplace</td></tr>
<tr><td>What it reports</td><td>Fees for services by non-employees, attorney fees</td><td>Rents, royalties, prizes, other income, medical payments, attorney gross proceeds</td><td>Gross card and third-party network payments for goods and services</td></tr>
<tr><td>2026 threshold</td><td>$2,000 or more per payee</td><td>$2,000 for most boxes; $600 attorney gross proceeds; $10 royalties</td><td>Payment apps and marketplaces: more than $20,000 and more than 200 transactions; card payments: no minimum</td></tr>
<tr><td>Payment methods covered</td><td>Cash, check, ACH, wire, direct deposit</td><td>Cash, check, ACH, wire, direct deposit</td><td>Credit and debit cards, PayPal, Venmo business, Stripe, marketplaces</td></tr>
<tr><td>Deadline</td><td>January 31 to IRS and payee</td><td>January 31 to payee; Feb 28 paper or March 31 electronic to IRS</td><td>January 31 to payee; Feb 28 paper or March 31 electronic to IRS</td></tr>
<tr><td>Typical recipient</td><td>Freelancers, contractors, consultants</td><td>Landlords, prize winners, law firms, rights holders</td><td>Online sellers, freelancers paid by card or app</td></tr>
</tbody></table>
<p>The thresholds above come from the One Big Beautiful Bill Act, which raised the 1099-NEC and most 1099-MISC thresholds from $600 to $2,000 for 2026 payments and restored the 1099-K threshold to more than $20,000 and more than 200 transactions. See our deep dives on the <a href="/blog/1099-nec-threshold-2026">1099 threshold for 2026</a> and the <a href="/blog/1099-k-threshold">1099-K threshold</a>.</p>

<h2>When to use Form 1099-NEC</h2>
<p>Use 1099-NEC when you pay someone who is not your employee for work done for your business, the total reaches $2,000 or more in the year, and you paid them directly. Typical examples are freelance writers, designers, developers, consultants, bookkeepers, and attorneys billing legal fees.</p>
<p>Key boxes for 2026:</p>
<ul>
<li><strong>Box 1a:</strong> nonemployee compensation.</li>
<li><strong>Box 1b and 1c (new for 2026):</strong> cash tips included in box 1a and the Treasury Tipped Occupation Code.</li>
<li><strong>Box 1d (new for 2026):</strong> qualified overtime compensation included in box 1a.</li>
<li><strong>Box 2:</strong> checkbox for direct sales of $5,000 or more of consumer products for resale.</li>
<li><strong>Box 4:</strong> federal income tax withheld (backup withholding).</li>
</ul>
<p>Payments to C and S corporations are generally not reportable, but attorneys are an exception.</p>

<h2>When to use Form 1099-MISC</h2>
<p>1099-MISC is the catch-all for business payments that are not pay for a contractor's services. The common ones for small businesses are:</p>
<ul>
<li><strong>Box 1, rents:</strong> office or equipment rent paid to an individual landlord or non-corporate entity ($2,000).</li>
<li><strong>Box 2, royalties:</strong> payments for the use of intellectual property ($10).</li>
<li><strong>Box 3, other income:</strong> prizes and awards that are not for services ($2,000).</li>
<li><strong>Box 6, medical and health care payments:</strong> reportable even to corporations ($2,000).</li>
<li><strong>Box 10, gross proceeds paid to an attorney:</strong> for example a settlement paid to a law firm ($600).</li>
</ul>
<p>A useful test: if you would pay it against a contractor's invoice for work done, it is probably 1099-NEC. If it is rent, a prize, a royalty or money passing through a lawyer, it is probably 1099-MISC.</p>

<h2>When does a 1099-K come into play?</h2>
<p>You never file a 1099-K for paying a contractor. The platform does. If you pay a freelancer with a credit card or through a payment network, the IRS instructions say you should not report that payment on 1099-NEC or 1099-MISC, because the payment settlement entity is responsible for reporting it.</p>
<p>For payment apps and online marketplaces (third-party settlement organizations), a federal 1099-K is required when the payee gets more than $20,000 in gross payments and more than 200 transactions in the year. Card processors report card payments with no minimum. Some states set lower state-level thresholds, so you might still receive a form below the federal figure.</p>

<h2>Which 1099 do I need? A decision path</h2>
<ol>
<li><strong>Did you pay by card or through a payment network?</strong> Then no form from you; the processor handles 1099-K.</li>
<li><strong>Is the payee a corporation?</strong> Generally no form, unless it is an attorney or a medical provider.</li>
<li><strong>Was it pay for services?</strong> Use 1099-NEC if the annual total is $2,000 or more.</li>
<li><strong>Was it rent, a prize, other income or a medical payment?</strong> Use 1099-MISC at $2,000 or more.</li>
<li><strong>Was it gross proceeds to an attorney?</strong> Use 1099-MISC box 10 at $600 or more.</li>
<li><strong>Was it a royalty?</strong> Use 1099-MISC box 2 at $10 or more.</li>
</ol>

<h2>Worked example: one freelancer, three kinds of forms</h2>
<p>Maya is a freelance UX designer. In 2026 she invoices four clients:</p>
<table><thead><tr><th>Client</th><th>Paid how</th><th>2026 total</th><th>Form Maya receives</th></tr></thead><tbody>
<tr><td>Client A (sole proprietor)</td><td>ACH</td><td>$14,000</td><td>1099-NEC for $14,000</td></tr>
<tr><td>Client B (partnership)</td><td>Check</td><td>$1,600</td><td>None: under $2,000</td></tr>
<tr><td>Client C (C corporation)</td><td>Credit card via her processor</td><td>$9,000</td><td>No 1099-NEC; processor includes it in a 1099-K</td></tr>
<tr><td>Client D</td><td>Payment app, 12 payments</td><td>$3,500</td><td>Likely none federally: under $20,000 and 200 transactions</td></tr>
</tbody></table>
<p>Maya's gross receipts are $14,000 + $1,600 + $9,000 + $3,500 = $28,100. Her forms show only $14,000 (1099-NEC) plus $9,000 (1099-K) = $23,000. She reports $28,100 on Schedule C, because the remaining $5,100 is still income. She reports the $9,000 once, even if Client C mistakenly also sends a 1099-NEC for it; in that case she should ask Client C for a corrected form.</p>
<p>Her invoices are the bridge between what she earned and what the forms say. Numbering every invoice consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a> and noting the payment method on each one makes the reconciliation quick.</p>

<h2>1099-K vs 1099-NEC: avoiding double reporting</h2>
<ul>
<li><strong>Clients:</strong> exclude card and payment-app payments when preparing 1099-NECs.</li>
<li><strong>Freelancers:</strong> add up gross receipts from your own records, then check the forms against them. Do not add a 1099-K and a 1099-NEC together if they cover the same money.</li>
<li><strong>Fees:</strong> a 1099-K shows gross amounts before processor fees and refunds. Deduct fees as business expenses and back out refunds using your records.</li>
<li><strong>Payment instructions:</strong> putting your preferred method on the invoice, as covered in our <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer guide</a>, keeps payment methods consistent per client.</li>
</ul>

<h2>Do you send a 1099 to an overseas contractor?</h2>
<p>Usually not. Forms 1099-NEC and 1099-MISC are for US persons: US citizens, resident aliens and US entities, which is why you ask them for Form W-9. A foreign freelancer should give you Form W-8BEN (individuals) or W-8BEN-E (entities) instead, certifying that they are not a US person.</p>
<p>If a nonresident contractor performs all of the work outside the United States, the payment is generally foreign-source income, and there is normally no 1099 and no US withholding. Work physically performed in the US by a nonresident is different: it can be US-source income reported on Form 1042-S with withholding, unless a tax treaty applies. Keep the W-8 on file, and if any work happens on US soil, get advice before you pay.</p>
<p>For the invoicing side of cross-border work, such as currency and bank details, see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>Common 1099 mistakes to avoid</h2>
<ul>
<li>Sending contractors a 1099-MISC instead of a 1099-NEC for service fees.</li>
<li>Using the old $600 figure for 2026 payments, or the new $2,000 figure for 2025 payments.</li>
<li>Issuing 1099-NECs for card payments, causing double reporting.</li>
<li>Forgetting attorney gross proceeds still use $600.</li>
<li>Paying contractors without a W-9 on file; see our <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 guide</a>.</li>
<li>Assuming income with no form attached does not need reporting.</li>
</ul>

<h2>Checklist before you file or reconcile</h2>
<ol>
<li>List every payee and total payments by method.</li>
<li>Strip out card and payment-app payments.</li>
<li>Sort the rest into service fees, rent, prizes, royalties, medical and attorney proceeds.</li>
<li>Apply the 2026 thresholds per box.</li>
<li>Confirm W-9 details and corporate status.</li>
<li>File 1099-NEC by January 31 (February 1, 2027 for 2026 forms) and 1099-MISC by its deadline.</li>
<li>Freelancers: reconcile each form against your invoices and request corrections early.</li>
</ol>

<h2>Next step</h2>
<p>If you are a contractor, the easiest way to stay on top of 1099 season is to send a proper invoice for every job. Our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> lists what to include, and the <a href="/invoice-generator">free invoice generator</a> creates a PDF in your browser without an account.</p>
`,
  },
  {
    slug: "no-tax-on-tips-self-employed",
    title: "No Tax on Tips for Self-Employed: Rules and Invoices",
    description:
      "No tax on tips for self-employed workers: who qualifies, the $25,000 cap, net income limit, service charge vs tip rules and how to show tips on invoices.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["self-employed-tax-deductions", "1099-nec-threshold-2026", "quarterly-estimated-taxes-freelancers"],
    faqs: [
      {
        q: "Does the no tax on tips deduction reduce self-employment tax?",
        a: "No. The deduction reduces your taxable income for federal income tax only. Tips are still part of your net earnings from self-employment, so Social Security and Medicare taxes, the 15.3% self-employment tax up to the wage base, still apply. Plan your quarterly estimated payments with that in mind.",
      },
      {
        q: "Do state income taxes follow the federal tips deduction?",
        a: "Not automatically. Each state decides whether to conform to federal changes, and some states have adopted their own tips exemptions while others have not. Check your state revenue department's guidance before assuming your tips are exempt from state income tax.",
      },
      {
        q: "Can married couples filing separately claim the tips deduction?",
        a: "No. IRS guidance says that if you are married you must file a joint return to claim the deduction. You also need a valid Social Security number. The $25,000 cap applies per return, and the phase-out starts at $300,000 of modified adjusted gross income for joint filers.",
      },
      {
        q: "Are tips received through a booking app or card reader qualified?",
        a: "They can be. Qualified tips include tips charged by customers, not only cash, as long as they are voluntary and you work in a listed occupation. Card and app tips are usually easier to document because the platform records them, and they may appear on a 1099-K or 1099-NEC. Keep the platform's statements with your records.",
      },
      {
        q: "How long does the no tax on tips deduction last?",
        a: "The deduction applies to tax years 2025 through 2028. Unless Congress extends it, tips received from 2029 onward will be fully taxable for income tax again. Keep that in mind if you are setting prices or planning cash flow around the tax saving.",
      },
      {
        q: "Is a tip the same as a gratuity on an invoice?",
        a: "Only if the customer chose to pay it. A gratuity line the customer can skip or change can be a tip. An automatic gratuity added to every bill, or a fixed percentage the customer cannot remove, is treated as a service charge and is not a qualified tip under the Treasury regulations.",
      },
      {
        q: "What records should I keep to support the tips deduction?",
        a: "Keep a record of each tip with the date, amount, client or job and how it was paid. Save card reader, booking app and payment platform statements that show tips separately from service fees, and keep any Form 1099-NEC, 1099-MISC or 1099-K you receive. Receipts or paid invoices with a separate 'Tip (voluntary)' line make the amounts easy to prove.",
      },
      {
        q: "Do tips paid by a business count toward the $2,000 1099-NEC threshold?",
        a: "Yes. For 2026, cash tips a business pays you as a non-employee are included in box 1a nonemployee compensation on Form 1099-NEC, with the tip portion also shown in box 1b. So tips are part of the total that is tested against the $2,000 threshold. Tips paid through a card processor or app are reported on Form 1099-K instead.",
      },
      {
        q: "Can I claim the deduction if I get tips as both an employee and a self-employed worker?",
        a: "Yes, but the $25,000 cap applies to the total qualified tips on your return, not to each job separately. Self-employed tips are also limited to the net income of the business where you earned them. If you have both types of tip income, keep the records separate and check the IRS guidance or a tax professional before you file.",
      },
      {
        q: "Do I charge sales tax on tips?",
        a: "In many states, voluntary tips the customer chooses are not subject to sales tax, but mandatory service charges may be taxable as part of the sale price. Rules vary by state and by type of service. Check your state revenue department's guidance and keep tips on a separate line from taxable charges on your invoices and receipts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The no tax on tips deduction lets eligible employees and self-employed workers deduct up to $25,000 of qualified tips a year from federal taxable income for 2025 through 2028. Self-employed people must work in a listed tipped occupation, and the deduction cannot exceed net income from that business. Mandatory service charges do not count.</p>

<p>If you are a gig worker, mobile stylist, personal trainer or rideshare driver who gets tips, this deduction can cut your federal income tax bill. But the self-employed rules are stricter than the headlines suggest, and how you bill matters: a "service charge" on your invoice and a tip the customer chooses are treated very differently. This guide explains the rules and shows how to set up invoices, for example in our <a href="/invoice-generator/usa">free US invoice generator</a>, so your tips are clearly documented.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. The deduction is new, the IRS is still issuing guidance, and eligibility depends on your occupation and facts. Read the IRS overview, <a href="https://www.irs.gov/newsroom/what-the-no-tax-on-tips-deduction-means-for-you" target="_blank" rel="noopener noreferrer">What the No Tax on Tips deduction means for you</a>, and speak to a tax professional before you file.</p>

<h2>What is the no tax on tips deduction?</h2>
<p>The One Big Beautiful Bill Act, signed July 4, 2025, created a new federal deduction for qualified tips (Internal Revenue Code section 224). Key points from IRS guidance:</p>
<ul>
<li>Up to <strong>$25,000</strong> per return, per year.</li>
<li>Available for tax years <strong>2025 through 2028</strong>.</li>
<li>Available whether you itemize or take the standard deduction. It is claimed on the new Schedule 1-A.</li>
<li>Phases out when modified adjusted gross income (MAGI) exceeds <strong>$150,000</strong> ($300,000 for joint filers), by $100 for every $1,000 above the threshold.</li>
<li>You need a valid Social Security number, and married couples must file jointly.</li>
</ul>
<p>It is a deduction, not an exclusion: you still report tips as income, then subtract the qualifying amount.</p>

<h2>Can self-employed workers claim no tax on tips?</h2>
<p>Yes. The IRS says gig workers and other self-employed individuals can qualify if their occupation is on the Treasury's list of occupations that customarily and regularly receive tips. Three extra limits apply to the self-employed:</p>
<ol>
<li><strong>Net income cap.</strong> The deduction cannot exceed your net income, before this deduction, from the trade or business in which you earned the tips. If your business made a loss, there is nothing to deduct.</li>
<li><strong>Specified service businesses are excluded.</strong> Tips received in a specified service trade or business (SSTB) under section 199A, which includes fields such as health, performing arts and athletics, do not qualify.</li>
<li><strong>Reporting.</strong> IRS guidance for gig workers says tips must be reported on Form 1099-MISC, 1099-NEC or 1099-K to qualify. If customers tip you directly and no information return is issued, ask a tax professional how the IRS treats those tips for your situation.</li>
</ol>

<h2>Which occupations qualify? The tipped occupation list</h2>
<p>Treasury and the IRS issued final regulations on April 10, 2026 listing more than 70 occupations, each with a three-digit Treasury Tipped Occupation Code (TTOC). They are grouped into eight categories:</p>
<table><thead><tr><th>Code range</th><th>Category</th></tr></thead><tbody>
<tr><td>100s</td><td>Beverage and food service</td></tr>
<tr><td>200s</td><td>Entertainment and events</td></tr>
<tr><td>300s</td><td>Hospitality and guest services</td></tr>
<tr><td>400s</td><td>Home services</td></tr>
<tr><td>500s</td><td>Personal services</td></tr>
<tr><td>600s</td><td>Personal appearance and wellness</td></tr>
<tr><td>700s</td><td>Recreation and instruction</td></tr>
<tr><td>800s</td><td>Transportation and delivery</td></tr>
</tbody></table>
<p>The final rules added visual artists, floral designers and gas pump attendants to the earlier proposed list. Find your exact job title and code in the <a href="https://www.irs.gov/newsroom/treasury-irs-issue-final-regulations-listing-occupations-where-workers-customarily-and-regularly-receive-tips-under-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">IRS announcement of the final regulations</a> rather than assuming your work is covered.</p>

<h2>What counts as a qualified tip?</h2>
<p>According to the IRS, qualified tips are voluntary cash or charged tips received from customers, including shared tips through a tip pool. The final regulations add that a qualified tip:</p>
<ul>
<li>must be paid voluntarily by the customer and not be subject to negotiation;</li>
<li>must be paid in cash or an equivalent (card, app, check);</li>
<li>must be received in a listed occupation;</li>
<li>does not include service charges, unless the customer has the option to disregard or modify them.</li>
</ul>

<h2>Service charge vs tip: why your invoice wording matters</h2>
<p>This is where invoicing comes in. If you add a fixed "18% gratuity" to every invoice and the customer cannot remove it, that amount is a service charge. It is still taxable income, and it does not qualify for the deduction. If the customer chooses whether and how much to tip, it can be a qualified tip.</p>
<table><thead><tr><th>Invoice line</th><th>Customer can change or skip it?</th><th>Qualified tip?</th></tr></thead><tbody>
<tr><td>"Service charge 20%" (automatic)</td><td>No</td><td>No</td></tr>
<tr><td>"Gratuity included" on group bookings</td><td>No</td><td>No</td></tr>
<tr><td>"Suggested tip: 15% / 20% / custom" on the payment screen</td><td>Yes</td><td>Can be</td></tr>
<tr><td>Tip added by client after receiving the invoice</td><td>Yes</td><td>Can be</td></tr>
<tr><td>Travel fee or rush fee</td><td>No</td><td>No: this is a price, not a tip</td></tr>
</tbody></table>
<h3>How to show tips on an invoice</h3>
<ol>
<li>Invoice your services at your normal price, with line items and any sales tax.</li>
<li>Do not pre-fill a mandatory tip line. If you want to prompt a tip, add a note such as "Tips are optional and appreciated."</li>
<li>When a client adds a tip, record it as a separate line on the receipt or paid invoice, labeled "Tip (voluntary)".</li>
<li>Keep the payment record showing the tip amount, such as the card reader or app statement.</li>
<li>Issue a receipt showing service total, tip and amount paid; our <a href="/blog/payment-receipt-template">payment receipt template guide</a> shows the layout.</li>
</ol>
<p>Our generator does not process payments or collect tips; it creates the PDF invoice or receipt. You can add the tip as its own line item when you mark a job paid.</p>

<h2>Worked example: a self-employed stylist</h2>
<p>Jordan is a self-employed mobile hairstylist, filing single, in a listed personal appearance occupation. For 2026:</p>
<ul>
<li>Service income invoiced: $58,000</li>
<li>Voluntary tips received by card and reported to Jordan on an information return: $8,500</li>
<li>Business expenses (products, travel, booking app fees): $21,000</li>
</ul>
<p><strong>Step 1: net income from the business.</strong> $58,000 + $8,500 - $21,000 = $45,500.</p>
<p><strong>Step 2: apply the caps.</strong> Tips of $8,500 are below the $25,000 cap and below the $45,500 net income, so the tentative deduction is $8,500.</p>
<p><strong>Step 3: phase-out.</strong> Suppose Jordan's MAGI is $44,000, well under $150,000, so no reduction applies. Deduction: $8,500.</p>
<p>Now change the facts: if Jordan's MAGI were $170,000 (for example because of other income), it would be $20,000 over the threshold. The reduction is $100 x 20 = $2,000, so the deduction would fall to $8,500 - $2,000 = $6,500.</p>
<p>In both cases Jordan still pays self-employment tax on the full $45,500 net profit. The deduction only reduces income tax.</p>

<h2>Tips deduction 2026: new 1099 boxes</h2>
<p>For 2026 payments, the IRS added new boxes so businesses can report tips paid to non-employees: Form 1099-NEC box 1b (cash tips included in box 1a) and box 1c (TTOC code), with matching boxes 13a and 13b on Form 1099-MISC. The 1099-NEC threshold also rose to $2,000 for 2026, explained in our <a href="/blog/1099-nec-threshold-2026">1099 threshold 2026 guide</a>. If a platform or business pays you tips, check those boxes when your forms arrive.</p>

<h2>How tips affect your quarterly estimated taxes</h2>
<p>Because self-employed workers have no employer withholding tax, you usually pay federal tax through quarterly estimated payments using Form 1040-ES. The tips deduction changes the income tax part of that calculation, but not the self-employment tax part. A simple way to estimate:</p>
<ol>
<li>Work out expected net profit for the year, including tips.</li>
<li>Calculate self-employment tax on that full profit.</li>
<li>Calculate income tax on profit minus half of your self-employment tax, your standard deduction, the qualified business income deduction if it applies, and the expected tips deduction.</li>
<li>Divide the total by the number of remaining quarterly due dates.</li>
</ol>
<p>Using Jordan's figures above, the $8,500 tips deduction lowers taxable income by $8,500, but self-employment tax is still worked out on the full $45,500. If your tips vary a lot from season to season, re-estimate mid-year rather than relying on last year's figure. Our <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes guide</a> walks through the due dates and safe harbor rules.</p>

<h2>No tax on tips vs no tax on overtime</h2>
<p>The same law created a separate deduction for qualified overtime: up to $12,500 ($25,000 for joint filers) of the premium portion of overtime pay required by the Fair Labor Standards Act, the "half" in time-and-a-half. It is designed for employees paid overtime, so most self-employed people will not benefit from it. The tips deduction is the one that matters for gig workers.</p>

<h2>Common mistakes self-employed workers make</h2>
<ul>
<li><strong>Labeling a mandatory charge as a tip.</strong> If the customer cannot change it, it is not a qualified tip.</li>
<li><strong>Ignoring the net income cap.</strong> A business loss means no deduction, however much you were tipped.</li>
<li><strong>Assuming every job qualifies.</strong> Check your occupation code and whether your business is an SSTB.</li>
<li><strong>Forgetting self-employment tax.</strong> Budget for it in your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
<li><strong>Poor records.</strong> Mixing tips into service totals makes the deduction hard to support.</li>
</ul>

<h2>Checklist for claiming the tips deduction</h2>
<ol>
<li>Confirm your occupation and TTOC code on the Treasury list.</li>
<li>Check your business is not a specified service trade or business.</li>
<li>Separate tips from service charges on invoices and receipts.</li>
<li>Keep platform and card statements showing tip amounts.</li>
<li>Collect any 1099-NEC, 1099-MISC or 1099-K forms and check tip boxes.</li>
<li>Calculate net income from the business and cap the deduction at that amount and $25,000.</li>
<li>Apply the MAGI phase-out if you are over $150,000 ($300,000 joint).</li>
<li>Claim the deduction on Schedule 1-A and keep records with your return. Look at other write-offs in our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions guide</a>.</li>
</ol>

<h2>Next step</h2>
<p>Set up your invoice and receipt template so tips always appear on their own line, marked voluntary. Open the <a href="/invoice-generator/usa">US invoice generator</a>, add your services, and save the layout as a draft in your browser so every job is billed the same way. Our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> covers the rest of the essentials.</p>
`,
  },
  {
    slug: "making-tax-digital-income-tax",
    title: "Making Tax Digital for Income Tax: Sole Trader Guide",
    description:
      "Making Tax Digital for Income Tax explained for sole traders and landlords: £50,000, £30,000 and £20,000 thresholds, quarterly updates, software and deadlines.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["sole-trader-invoice-uk", "how-long-to-keep-invoices", "invoice-tracker-spreadsheet"],
    faqs: [
      {
        q: "Do quarterly updates mean I pay tax every quarter?",
        a: "No. Quarterly updates are summaries of your income and expenses, not tax returns, and they do not change when you pay. Payment dates stay the same: a balancing payment and first payment on account by 31 January, and a second payment on account by 31 July, if you make payments on account. Your software may show an estimated tax figure after each update.",
      },
      {
        q: "Can I keep using a spreadsheet under MTD for Income Tax?",
        a: "Yes, as long as you pair it with bridging software that is compatible with MTD and can send your figures to HMRC digitally. The spreadsheet must hold your digital records, and the link between it and the bridging software must be digital rather than retyped by hand.",
      },
      {
        q: "I am a partner in a partnership. Does MTD for Income Tax apply to me?",
        a: "Not yet. HMRC says partnerships are not covered for now and it will set out a timeline later. Your share of partnership profit is also excluded when working out qualifying income, although any separate sole trader or property income you have still counts.",
      },
      {
        q: "What if my income falls below the threshold later?",
        a: "HMRC checks your qualifying income each year using your Self Assessment return. If it falls below the threshold for three consecutive tax years, you may be able to stop using MTD for Income Tax. Check HMRC's current guidance on leaving the service before you stop sending quarterly updates.",
      },
      {
        q: "Can I sign up for MTD for Income Tax voluntarily?",
        a: "Yes. HMRC has allowed voluntary sign-up, which can be useful if you want to get used to the software and quarterly rhythm before your income makes it mandatory. Check the eligibility conditions on GOV.UK, as some income types and circumstances could not join voluntarily at first.",
      },
      {
        q: "Can my accountant send my quarterly updates for me?",
        a: "Yes. An accountant or other agent can sign you up and submit quarterly updates and your tax return on your behalf through their HMRC agent services account, once you have authorised them. You remain responsible for the accuracy of the figures, so agree who records transactions and by when, so your agent has your records in time for each deadline.",
      },
      {
        q: "Do I need a separate business bank account for MTD for Income Tax?",
        a: "No, MTD for Income Tax does not require a separate business account. Using one is still sensible, because it makes digital records much easier to keep and bank feeds in bookkeeping software cleaner. If you use one account for everything, you must still identify and record each business transaction separately from your personal spending.",
      },
      {
        q: "How do I correct a mistake in a quarterly update?",
        a: "You do not usually need to resubmit an old quarter. Quarterly updates are cumulative for the tax year, so correcting the figures in your records means your next update will carry the right year-to-date totals. Final adjustments can also be made in your tax return. Check HMRC's current guidance or your software's help pages for how your product handles corrections.",
      },
      {
        q: "Will HMRC sign me up for MTD for Income Tax automatically?",
        a: "No. HMRC has written to people it expects to be in scope, but you or your agent need to sign up through GOV.UK and authorise compatible software. Do not rely on receiving a letter: work out your qualifying income from your Self Assessment return and sign up before your first quarterly period ends.",
      },
      {
        q: "Does MTD for Income Tax change what I put on my invoices?",
        a: "No. MTD changes how you record and report income, not the content of your invoices. Your invoices still need your details, the client's details, a unique number, dates, a description and the amount, plus VAT details if you are registered. The difference is that each sale must also be recorded digitally in your software or linked spreadsheet.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Making Tax Digital for Income Tax requires sole traders and landlords to keep digital records and send quarterly updates to HMRC using compatible software. It started on 6 April 2026 for those with qualifying income over £50,000 in 2024-25, extends to over £30,000 from April 2027 and over £20,000 from April 2028.</p>

<p>Making Tax Digital for Income Tax, often shortened to MTD ITSA (Income Tax Self Assessment), is the biggest change to how self-employed people in the UK report income since Self Assessment began. If you invoice clients as a sole trader, you now need your income recorded in software, not just in a folder of PDFs. This guide explains who is in scope, how the £50,000 threshold is calculated, what you send and when, and where invoices made with our <a href="/invoice-generator/uk">UK invoice generator</a> fit into your digital records.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. HMRC is still refining the rules, penalties and software requirements. Check the official guidance on <a href="https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener noreferrer">checking if you are eligible for Making Tax Digital for Income Tax</a>, or speak to an accountant before relying on any date here.</p>

<h2>What is Making Tax Digital for Income Tax?</h2>
<p>MTD is HMRC's programme to move tax reporting online. VAT-registered businesses have already used it for VAT returns since 2019, extended to all VAT-registered businesses in April 2022. MTD for Income Tax applies the same approach to Self Assessment:</p>
<ul>
<li>keep <strong>digital records</strong> of business and property income and expenses;</li>
<li>send <strong>quarterly updates</strong> to HMRC from MTD-compatible software;</li>
<li>submit a <strong>tax return</strong> (often called the final declaration) through that software by 31 January after the tax year ends.</li>
</ul>
<p>An earlier plan for a separate end of period statement (EOPS) was dropped, so year-end adjustments are made in the tax return itself.</p>

<h2>Who must use MTD ITSA? The £50,000 threshold and later phases</h2>
<p>According to GOV.UK, you must use MTD for Income Tax if you are a sole trader or landlord registered for Self Assessment, you get self-employment or property income (or both), and your qualifying income is over the threshold.</p>
<table><thead><tr><th>Qualifying income</th><th>Tax year assessed</th><th>Must use MTD from</th></tr></thead><tbody>
<tr><td>Over £50,000</td><td>2024-25</td><td>6 April 2026</td></tr>
<tr><td>Over £30,000</td><td>2025-26</td><td>6 April 2027</td></tr>
<tr><td>Over £20,000</td><td>2026-27</td><td>6 April 2028</td></tr>
</tbody></table>
<p>Partnerships are not covered yet. You may be exempt if you are digitally excluded, for example because of age, disability, location or religious reasons; you apply to HMRC for an exemption, and if granted you keep filing a normal Self Assessment return.</p>

<h2>How is qualifying income worked out?</h2>
<p>This is the part most sole traders get wrong. HMRC's guidance says qualifying income is the amount <strong>before expenses</strong>, in other words turnover, not profit. It is the total of your self-employment and property income from all sources, taken from the Self Assessment return for the relevant year.</p>
<p>Not included: employment income taxed through PAYE, your share of partnership profits, dividends, the State Pension and private pensions. For a jointly owned property, only your share counts.</p>
<h3>Worked example</h3>
<p>Priya is a freelance photographer and also lets a flat. In 2024-25 her figures were:</p>
<ul>
<li>Photography turnover: £27,000 (profit after expenses £16,000)</li>
<li>Rental income: £25,000 (profit after expenses £9,000)</li>
<li>Part-time PAYE salary: £12,000</li>
</ul>
<p>Qualifying income = £27,000 + £25,000 = £52,000. Her PAYE salary is ignored, and her profits (£25,000 combined) are irrelevant. Because £52,000 is over £50,000, Priya must use Making Tax Digital for Income Tax from 6 April 2026, even though her taxable business profit is far lower.</p>
<p>Her friend Tom has £34,000 of sole trader turnover in 2025-26 and no other relevant income. He is under £50,000, so he is not in for 2026-27, but £34,000 is over £30,000, so he must start from 6 April 2027.</p>

<h2>Quarterly updates: periods and deadlines</h2>
<p>Each quarterly update is a summary of income and expenses for the period, generated by your software from your digital records. Under the standard periods, the deadlines for 2026-27, as published by HMRC, are:</p>
<table><thead><tr><th>Quarter</th><th>Period (standard)</th><th>Update due</th></tr></thead><tbody>
<tr><td>1</td><td>6 April to 5 July 2026</td><td>7 August 2026</td></tr>
<tr><td>2</td><td>6 July to 5 October 2026</td><td>7 November 2026</td></tr>
<tr><td>3</td><td>6 October 2026 to 5 January 2027</td><td>7 February 2027</td></tr>
<tr><td>4</td><td>6 January to 5 April 2027</td><td>7 May 2027</td></tr>
<tr><td>Tax return</td><td>Whole of 2026-27</td><td>31 January 2028</td></tr>
</tbody></table>
<p>You can choose calendar quarters (1 April to 30 June and so on) in your software if that suits your bookkeeping; the update deadlines stay on the 7th. Note that your 2025-26 Self Assessment return is still filed the usual way by 31 January 2027, so in your first year you deal with both systems.</p>

<h2>MTD software: what you need</h2>
<p>You need software that HMRC lists as compatible with Making Tax Digital for Income Tax. There are two broad types:</p>
<ul>
<li><strong>Full bookkeeping software</strong> that records transactions, often with bank feeds, and submits updates.</li>
<li><strong>Bridging software</strong> that takes figures from your spreadsheet and sends them to HMRC.</li>
</ul>
<p>HMRC publishes a software finder on GOV.UK, and some products have free tiers for simple sole trader businesses. Check that the product supports every income type you have, such as self-employment and UK property.</p>

<h2>Digital records: what to keep, and where invoices fit</h2>
<p>For each transaction your digital records need at least the date, the amount and the category (for example sales, or a type of expense). You can keep invoices and receipts as supporting documents, but the transaction itself must be recorded in your software or spreadsheet.</p>
<p>That means a PDF invoice is not, on its own, an MTD record. A practical workflow for a sole trader using our generator:</p>
<ol>
<li>Create the invoice in the <a href="/invoice-generator/uk">UK invoice generator</a> with a unique number from a consistent sequence; our <a href="/blog/invoice-numbering-system">invoice numbering guide</a> explains how.</li>
<li>Download the PDF and send it to the client.</li>
<li>Record the sale (date, invoice number, client, amount, category) in your MTD software or the spreadsheet linked to bridging software. An <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> is a good starting point.</li>
<li>Store the PDF for at least as long as HMRC requires; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ol>
<p>If you use cash basis accounting, record income when you are paid; under traditional accounting, record it when you invoice. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains the difference.</p>

<h2>MTD for Income Tax and MTD for VAT: how they fit together</h2>
<p>If you are VAT-registered, you already file VAT returns under Making Tax Digital. MTD for Income Tax is a separate obligation with its own sign-up, its own deadlines and a different threshold test, so being compliant for one does not make you compliant for the other.</p>
<ul>
<li><strong>Threshold:</strong> VAT registration is based on VAT-taxable turnover (currently £90,000 over a rolling 12 months), while MTD for Income Tax uses qualifying self-employment and property income over £50,000, £30,000 or £20,000.</li>
<li><strong>Frequency:</strong> VAT returns are usually quarterly and include payment; MTD Income Tax quarterly updates are summaries with no payment attached.</li>
<li><strong>Periods:</strong> your VAT quarters may not line up with the 6 April tax year; good software handles both.</li>
<li><strong>Records:</strong> one set of digital records can feed both, as long as each sale is captured with its VAT.</li>
</ul>
<p>If you are VAT-registered, your invoices must also meet the VAT invoice rules covered in our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>Penalties for late quarterly updates</h2>
<p>MTD for Income Tax uses a points-based late submission regime. Each missed submission deadline earns a point; for quarterly obligations, a £200 penalty is charged once you reach four points. Late payment penalties are separate and based on how late the tax is paid.</p>
<p>HMRC has said it will not issue penalty points for late quarterly updates during 2026-27, the first year for the £50,000 group. That relief does not cover the 2026-27 tax return or late payment. It has not been confirmed whether the same easing applies to those joining in 2027 or 2028, so check HMRC's current penalty guidance.</p>

<h2>Common mistakes with MTD for Income Tax</h2>
<ul>
<li><strong>Using profit instead of turnover</strong> to decide whether you are in scope.</li>
<li><strong>Forgetting rental income.</strong> Self-employment and property income are added together.</li>
<li><strong>Keeping only PDFs.</strong> Invoices support your records, but each sale must be recorded digitally.</li>
<li><strong>Retyping figures into bridging software.</strong> The link from spreadsheet to submission should be digital.</li>
<li><strong>Thinking quarterly updates change payment dates.</strong> They do not.</li>
<li><strong>Leaving software until the deadline.</strong> Sign up, connect and test before your first quarter ends.</li>
</ul>

<h2>MTD for Income Tax readiness checklist</h2>
<ol>
<li>Add up your self-employment and property turnover for 2024-25, 2025-26 and 2026-27.</li>
<li>Work out which start date applies: April 2026, 2027 or 2028.</li>
<li>Check whether you qualify for an exemption.</li>
<li>Choose HMRC-recognised software or bridging software.</li>
<li>Sign up for MTD for Income Tax through GOV.UK and authorise your software.</li>
<li>Decide on standard or calendar quarters.</li>
<li>Record every invoice and expense digitally as you go.</li>
<li>Diary the 7 August, 7 November, 7 February, 7 May and 31 January deadlines.</li>
</ol>

<h2>Next step</h2>
<p>Getting your invoices right is the easiest win. Each one should carry your name and address, the client's details, a unique invoice number, dates and a clear total, and VAT details if you are registered, as covered in our <a href="/blog/sole-trader-invoice-uk">sole trader invoice guide</a>. Create them for free in the <a href="/invoice-generator/uk">UK invoice generator</a>, then log each one in your MTD software the same day.</p>
`,
  },
];
