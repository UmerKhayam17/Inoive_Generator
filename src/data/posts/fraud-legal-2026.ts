import type { PostDraft } from "../blog";

export const FRAUD_LEGAL_2026_POSTS: PostDraft[] = [
  {
    slug: "segregation-of-duties",
    title: "Segregation of Duties in a Small Team: Practical Setup",
    description:
      "Segregation of duties for small businesses with 2-10 people: who should approve, pay, record and reconcile, a duty matrix, compensating controls and examples.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-approval-workflow",
      "bank-reconciliation",
      "positive-pay-check-fraud",
    ],
    faqs: [
      {
        q: "What is segregation of duties in simple terms?",
        a: "Segregation of duties means no single person controls every step of a financial transaction. The four steps usually split are authorizing a transaction, holding or moving the asset (cash, checks, inventory), recording it in the books, and reconciling the records against the bank or physical count. When at least two people are involved, an error or theft by one person is far more likely to be noticed by the other, which is why auditors treat it as a core internal control.",
      },
      {
        q: "How do you segregate duties with only one or two employees?",
        a: "You rarely get perfect separation in a tiny team, so the owner becomes the second person. Keep the owner as the only one who can approve payments, add vendors and sign checks, while the employee prepares invoices and records transactions. The owner then reviews the bank statement directly from the bank every month. Where you cannot split a task, add a compensating control such as a monthly review by an outside bookkeeper or accountant.",
      },
      {
        q: "What are compensating controls?",
        a: "Compensating controls are checks that reduce risk when duties cannot be fully separated. Common examples are an owner reviewing every bank and card statement, an outside accountant reconciling accounts monthly, dual approval in online banking, positive pay on checks, mandatory vacations, surprise cash counts, and reviewing system logs of who created or edited vendors and invoices. They do not prevent every problem, but they make concealment much harder and detection much faster.",
      },
      {
        q: "Which duties should never be held by the same person?",
        a: "The most dangerous combinations are adding or editing vendors and approving payments to them; receiving customer payments and recording or writing off customer balances; signing checks and reconciling the bank account; and running payroll while also approving changes to employee pay or bank details. If one person can both move money and hide the movement in the records, a fraud can run for months without anyone noticing.",
      },
      {
        q: "Does accounting software help with segregation of duties?",
        a: "Yes, if you use its permission settings. Most small business accounting and banking platforms let you give staff limited roles, for example allowing someone to create bills but not approve or pay them, and they keep an audit log of changes. Many banks also support dual control, where one user sets up a payment and another releases it. Software only helps if each person has their own login; shared passwords destroy the trail.",
      },
      {
        q: "Is segregation of duties required by law for small businesses?",
        a: "For most private small businesses it is not a legal requirement. It is a best practice expected by auditors, lenders, investors and some grant funders, and public companies have formal internal control obligations. Even without a legal mandate, weak separation of duties is one of the most common conditions behind occupational fraud, so it is worth applying in proportion to your size and the amount of money that moves through the business.",
      },
    ],
    content: `
<p>Segregation of duties is the practice of splitting a money task so that no one person can approve a payment, make it, record it and check it. In a small team you will not get textbook separation, but you can get close: the owner keeps approval and bank review, staff handle the day-to-day processing, and an outside bookkeeper or a few simple compensating controls cover the gaps. This guide shows how to assign duties with two, five or ten people, which combinations are dangerous, and how to fit the controls around your invoicing and payment process.</p>

<p>It matters because small businesses are hit hard by internal fraud. The Association of Certified Fraud Examiners' <a href="https://www.acfe.com/report-to-the-nations.aspx" target="_blank" rel="noopener noreferrer">Occupational Fraud 2026: A Report to the Nations</a> analyzed 2,402 cases and found a median loss of $104,000 per case, with organizations of fewer than 100 employees reporting a median loss of $126,000, higher than any other size group. Small firms also have fewer anti-fraud controls in place, so schemes run longer before anyone notices.</p>

<h2>What is segregation of duties?</h2>
<p>Every financial transaction passes through four kinds of activity. Segregation of duties (often shortened to SoD) assigns them to different people:</p>
<ul>
<li><strong>Authorization:</strong> deciding a transaction should happen, such as approving a vendor invoice, a refund, a pay rise or a customer credit.</li>
<li><strong>Custody:</strong> physical or electronic access to the asset, such as signing checks, releasing bank transfers, handling cash or holding inventory.</li>
<li><strong>Recording:</strong> entering the transaction in the accounting system, creating invoices, posting payments and adjusting balances.</li>
<li><strong>Reconciliation and review:</strong> comparing the records against something independent, such as the bank statement, a vendor statement or a stock count.</li>
</ul>
<p>The principle is simple: if one person can do two of these steps on the same transaction, especially custody plus recording, they can both take money and hide it. Splitting the steps means a theft or a mistake needs either collusion or will be visible to the next person in the chain. Segregation of duties is one piece of a wider system of <a href="/blog/internal-controls">internal controls</a>, alongside approvals, documentation and a reliable <a href="/blog/audit-trail">audit trail</a>.</p>

<h2>Segregation of duties matrix for a small business</h2>
<p>The table below shows a practical split for the money flows most small businesses have. Use it as a starting point and adjust names to your team.</p>
<table><thead><tr><th>Process</th><th>Authorize</th><th>Custody / execute</th><th>Record</th><th>Review / reconcile</th></tr></thead><tbody>
<tr><td>Paying vendor bills</td><td>Owner or manager approves the bill</td><td>Owner releases payment (or second approver in bank)</td><td>Bookkeeper or admin enters bill</td><td>Owner reviews bank statement; bookkeeper reconciles</td></tr>
<tr><td>Adding or changing vendors</td><td>Owner approves new vendor and bank details</td><td>Admin sets up vendor in system</td><td>System log records change</td><td>Owner reviews vendor change report monthly</td></tr>
<tr><td>Customer invoicing</td><td>Manager confirms work done and price</td><td>n/a</td><td>Admin creates and sends invoice</td><td>Owner reviews aged receivables</td></tr>
<tr><td>Receiving customer payments</td><td>n/a</td><td>Payments go straight to bank or processor; mail opened by someone outside bookkeeping</td><td>Bookkeeper applies payments to invoices</td><td>Owner compares deposits to sales report</td></tr>
<tr><td>Credit notes and write-offs</td><td>Owner approves every credit or write-off</td><td>n/a</td><td>Bookkeeper posts it</td><td>Owner reviews list of credits monthly</td></tr>
<tr><td>Payroll</td><td>Owner approves hires, pay rates, bank changes</td><td>Payroll provider pays staff</td><td>Admin enters hours</td><td>Owner reviews payroll register each run</td></tr>
<tr><td>Petty cash</td><td>Manager approves spending</td><td>Custodian holds the cash</td><td>Custodian logs receipts</td><td>Someone else counts cash at random</td></tr>
</tbody></table>
<p>For petty cash specifically, a simple <a href="/blog/petty-cash-log">petty cash log</a> with receipts and surprise counts covers most of the risk.</p>

<h2>Dangerous combinations to avoid</h2>
<p>If you only fix a few things, fix these pairings. Each one lets a single person both move money and conceal it:</p>
<ol>
<li><strong>Vendor setup plus payment approval.</strong> This is how fake vendor and billing schemes work. Someone creates a vendor, sends invoices from it and approves them. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> explains how to verify a new supplier before the first payment.</li>
<li><strong>Bank detail changes plus payment release.</strong> Changing a vendor's or employee's bank account is the most sensitive edit in your system. Require a call-back to a known phone number and a second person to approve the change.</li>
<li><strong>Receiving payments plus recording customer balances.</strong> A person who handles incoming checks and also posts receipts can pocket a payment and hide it with a credit note or by applying a later customer's payment to the earlier invoice (lapping).</li>
<li><strong>Signing checks plus reconciling the bank.</strong> Whoever reconciles should not be the person who writes or signs checks, otherwise altered or unauthorized checks never surface.</li>
<li><strong>Running payroll plus approving payroll changes.</strong> Ghost employees and inflated hours depend on this combination.</li>
</ol>

<h2>How to segregate duties when you only have 1-3 people</h2>
<p>With a very small team, the owner is the control. The goal is not that everyone does one job, but that the owner holds the high-risk steps and looks at independent evidence regularly.</p>
<h3>Owner plus one employee</h3>
<ul>
<li>The employee prepares invoices, enters bills and applies customer payments.</li>
<li>Only the owner can approve bills, release payments, add vendors, change bank details, approve credit notes and sign checks.</li>
<li>The owner downloads the bank statement directly from the bank (not from the employee) and scans it each month.</li>
<li>An outside bookkeeper or accountant reconciles the accounts quarterly or monthly.</li>
</ul>
<h3>Owner plus a part-time bookkeeper</h3>
<ul>
<li>The bookkeeper records and reconciles, but has view-only bank access with no ability to send payments.</li>
<li>The owner approves and releases all payments in online banking.</li>
<li>The owner reviews the bank reconciliation and asks about any old reconciling items. If you are unsure who should do what, our comparison of a <a href="/blog/bookkeeper-vs-accountant">bookkeeper vs accountant</a> helps.</li>
</ul>
<h3>Teams of 5-10</h3>
<p>Now you can split more cleanly: an office manager handles invoicing and receivables, a second person enters payables, the owner or a finance lead approves and pays, and an outside accountant reviews. Rotate tasks occasionally and require people to take their full vacation; schemes that need daily maintenance tend to surface when the person is away.</p>

<h2>Compensating controls when you cannot split a task</h2>
<p>When separation is impossible, add a check that would catch a problem after the fact:</p>
<ul>
<li><strong>Owner statement review:</strong> read every bank and business card statement monthly, looking for unknown payees, round-number transfers and payments just under your approval limit.</li>
<li><strong>Monthly <a href="/blog/bank-reconciliation">bank reconciliation</a></strong> done or reviewed by someone who cannot move money.</li>
<li><strong>Dual control in online banking:</strong> one user creates a payment, another approves it.</li>
<li><strong><a href="/blog/positive-pay-check-fraud">Positive pay</a></strong> on any account that issues checks, so the bank only clears checks that match your issued list.</li>
<li><strong>System audit logs:</strong> review who created vendors, edited invoices or deleted transactions.</li>
<li><strong>Duplicate checks:</strong> run a report for duplicate invoice numbers and amounts; our guide to <a href="/blog/duplicate-invoice-payments">duplicate invoice payments</a> lists the patterns to search for.</li>
<li><strong>Surprise reviews:</strong> occasional unannounced cash counts or vendor statement comparisons.</li>
</ul>

<h2>Step by step: setting up segregation of duties in a week</h2>
<ol>
<li><strong>List your money flows.</strong> Customer invoicing and receipts, vendor payments, payroll, card spending, petty cash and refunds.</li>
<li><strong>Write down who does each step today.</strong> Use the four columns: authorize, custody, record, review.</li>
<li><strong>Highlight conflicts.</strong> Mark any row where the same person has custody plus recording, or setup plus approval.</li>
<li><strong>Move the high-risk steps to the owner</strong> or a second person. Start with payment release, vendor setup and bank detail changes.</li>
<li><strong>Configure software permissions.</strong> Give each person their own login and the narrowest role that lets them work. Turn on dual approval in banking.</li>
<li><strong>Define approval limits.</strong> For example, bills under $500 approved by a manager, anything above by the owner. Document this in an <a href="/blog/invoice-approval-workflow">invoice approval workflow</a>.</li>
<li><strong>Schedule reviews.</strong> Put the monthly statement review and reconciliation sign-off in the calendar.</li>
<li><strong>Revisit after changes.</strong> New hires, departures and new software all reshape who can do what.</li>
</ol>

<h2>Worked example: a 4-person design studio</h2>
<p>This is an illustrative example. A studio bills about $40,000 a month. Before the review, the office manager created client invoices, received check payments by mail, deposited them, entered payments in the accounting software, paid vendor bills from the shared bank login and reconciled the bank. The owner looked at the profit and loss report once a quarter.</p>
<p>That set-up lets one person hold custody, recording and review at the same time. If the office manager deposited a $3,200 client check into a personal account and marked the invoice as paid with a credit note, nobody would see it until a client complained, which may never happen.</p>
<p>After the review:</p>
<ul>
<li>Clients pay by bank transfer or card link; checks go to a bank lockbox, so no one handles paper checks.</li>
<li>The office manager still creates invoices and applies payments, but cannot issue credit notes over $0 without owner approval.</li>
<li>The office manager can create vendor bills; the owner approves and releases every payment from her own banking login.</li>
<li>An outside bookkeeper reconciles the bank monthly for about $300 a month and sends the owner a one-page summary, including a list of credit notes and new vendors.</li>
<li>The owner spends 20 minutes a month reading the bank statement and the receivables aging report.</li>
</ul>
<p>The cost is a few hundred dollars a month and a little owner time. Against a typical small-business fraud loss measured in six figures, it is cheap insurance.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Shared logins.</strong> If three people use one banking or accounting password, the audit trail cannot show who did what.</li>
<li><strong>Trusting the long-serving employee.</strong> Many frauds are committed by trusted staff with years of service. Controls are not an accusation; they protect honest people too.</li>
<li><strong>Owner signs without looking.</strong> A second signature only works if the approver actually reads the invoice and checks the vendor.</li>
<li><strong>Reviewing reports produced by the person being reviewed.</strong> Pull bank statements directly from the bank.</li>
<li><strong>Ignoring credit notes and write-offs.</strong> These are favorite tools for hiding stolen receipts. Our <a href="/blog/invoice-scams">invoice scam warning signs</a> guide covers the outside threats; credits cover the inside ones.</li>
</ul>

<h2>Where invoicing fits in</h2>
<p>Clean invoicing makes segregation of duties much easier to check. Use sequential invoice numbers so gaps and duplicates stand out, keep a copy of every invoice and credit note, and make sure customer payment details on invoices point to the business bank account only. A fixed format and consistent numbering, for example from our <a href="/tools/invoice-number-generator">invoice number generator</a>, let the reviewer compare the sales list against deposits in minutes.</p>
<p>Ready to tighten your billing records? Create numbered, professional invoices with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF you can file for review and reconciliation.</p>
`,
  },
  {
    slug: "employee-embezzlement",
    title: "Employee Embezzlement: Warning Signs and What to Do",
    description:
      "Employee embezzlement signs to watch for in a small business: behavioral and accounting red flags, common schemes, what to do if you suspect theft, and taxes.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "positive-pay-check-fraud",
      "bank-reconciliation",
      "invoice-scams",
    ],
    faqs: [
      {
        q: "What are the most common signs of employee embezzlement?",
        a: "Behavioral signs include living beyond apparent means, refusing to take vacation or share duties, an unusually close relationship with a vendor or customer, defensiveness when asked about records, and working odd hours alone. Accounting signs include missing or out-of-sequence invoices and checks, rising credit notes and write-offs, customers saying they paid invoices your books show as open, unknown vendors, payments just under approval limits, and bank reconciliations that are late or never quite balance.",
      },
      {
        q: "What should I do first if I suspect an employee is stealing?",
        a: "Stay calm and do not confront the person yet. Quietly secure evidence: download bank statements directly from the bank, export accounting data and audit logs, and preserve emails. Limit the person's ability to move money, for example by adding dual approval, without tipping them off if possible. Then talk to an attorney and, ideally, a forensic accountant or certified fraud examiner before interviewing anyone or terminating employment.",
      },
      {
        q: "How do employees usually embezzle from small businesses?",
        a: "The most common schemes are billing fraud through fake or inflated vendor invoices, check tampering, skimming customer payments before they are recorded, unauthorized personal purchases on business cards, expense reimbursement fraud, and payroll schemes such as ghost employees or inflated hours. Small businesses are especially exposed because one trusted person often handles invoicing, payments and the books at the same time.",
      },
      {
        q: "Can I deduct embezzlement losses on my business taxes?",
        a: "Generally yes. In the US, a business theft loss, including embezzlement, is typically deductible in the tax year you discover it, not the year the money was taken. If you have a claim for reimbursement, such as an insurance claim, with a reasonable prospect of recovery, you usually wait until that is resolved, and any recovery reduces the deduction. The rules are technical, so work through the numbers with your tax professional.",
      },
      {
        q: "Does business insurance cover employee theft?",
        a: "Standard general liability and property policies usually do not cover employee theft. You need commercial crime insurance or an employee dishonesty (fidelity) bond, sometimes available as an add-on to a business owner's policy. Policies typically have limits, deductibles and strict notice requirements, so read the conditions and report a suspected loss promptly once you discover it. Keep the evidence your insurer will need to prove the amount taken.",
      },
      {
        q: "Should I report employee embezzlement to the police?",
        a: "Many businesses do, and an insurer may require a police report before paying a crime claim. Reporting can also support a later tax deduction because it documents that a theft occurred. However, criminal cases move slowly and restitution is not guaranteed, so many owners pursue a civil claim or a repayment agreement in parallel. Get legal advice first, especially before agreeing not to report in exchange for repayment.",
      },
    ],
    content: `
<p>Employee embezzlement rarely looks like a dramatic theft. It looks like a trusted bookkeeper who never takes a holiday, a vendor nobody quite remembers hiring, or a customer insisting they paid an invoice your books say is still open. The warning signs are usually there long before the loss is discovered; the trick is knowing what to look for and acting carefully once you see it. This guide covers the behavioral and accounting red flags, the schemes most common in small businesses, and the steps to take if you suspect someone.</p>

<p>The scale is real. In its <a href="https://www.acfe.com/report-to-the-nations.aspx" target="_blank" rel="noopener noreferrer">2026 Report to the Nations</a>, the Association of Certified Fraud Examiners studied 2,402 occupational fraud cases. The median loss was $104,000, organizations lost an estimated 5% of revenue to fraud, and schemes typically ran around a year before discovery. Organizations with fewer than 100 employees had a median loss of $126,000, and only about a quarter of small businesses had a formal way for staff to report wrongdoing. Asset misappropriation, which includes embezzlement, appeared in roughly 90% of cases.</p>

<h2>What is employee embezzlement?</h2>
<p>Embezzlement is theft by someone who was lawfully trusted with the money or property in the first place. That is the difference from ordinary theft: the bookkeeper legitimately has access to the bank account, the office manager legitimately receives customer checks. The crime is converting that access to personal use. In fraud-examination terms, it falls under asset misappropriation, the most frequent but usually smallest-per-case category, as opposed to corruption or financial statement fraud.</p>

<h2>Behavioral embezzlement signs</h2>
<p>Fraud examiners consistently find that most perpetrators show at least one behavioral red flag. None of these prove anything alone, but a cluster deserves attention:</p>
<ul>
<li><strong>Living beyond their means:</strong> new cars, expensive holidays or spending that does not match a known salary.</li>
<li><strong>Refusing vacations or help:</strong> someone who will not let anyone else touch "their" books. The ACFE's 2026 data puts the median loss where this flag appeared at $250,000.</li>
<li><strong>Unusually close relationship with a vendor or customer:</strong> associated with a $300,000 median loss in the 2026 report.</li>
<li><strong>Financial pressure:</strong> known debts, divorce, gambling or addiction problems.</li>
<li><strong>Control issues and defensiveness:</strong> irritation at simple questions, unwillingness to share passwords or explain entries.</li>
<li><strong>Odd hours:</strong> working alone early or late, especially around month end.</li>
</ul>

<h2>Accounting red flags in your books</h2>
<p>Behavior is subjective; records are not. These are the signs that usually show up in invoices, bank statements and reports:</p>
<table><thead><tr><th>Red flag</th><th>What it may indicate</th><th>Where to check</th></tr></thead><tbody>
<tr><td>Customers say they paid invoices shown as open</td><td>Skimming or lapping of receipts</td><td>Customer statements, aged receivables</td></tr>
<tr><td>Rising credit notes, discounts or write-offs</td><td>Hiding stolen customer payments</td><td>Credit note list by user</td></tr>
<tr><td>Gaps or duplicates in invoice or check numbers</td><td>Destroyed or altered documents</td><td>Invoice and check registers</td></tr>
<tr><td>New vendors with PO boxes, home addresses or personal bank accounts</td><td>Shell vendor billing scheme</td><td>Vendor master file, change logs</td></tr>
<tr><td>Payments just below approval thresholds</td><td>Splitting to avoid review</td><td>Payment report sorted by amount</td></tr>
<tr><td>Payroll for people you do not recognize, or overtime spikes</td><td>Ghost employees, inflated hours</td><td>Payroll register</td></tr>
<tr><td>Late or unreconciled bank accounts</td><td>Concealment of unauthorized transfers</td><td>Bank reconciliation reports</td></tr>
<tr><td>Personal-looking purchases on business cards</td><td>Card misuse</td><td>Card statements</td></tr>
</tbody></table>
<p>External invoice fraud has its own pattern; our guide to <a href="/blog/invoice-scams">invoice scam warning signs</a> covers fake supplier invoices sent from outside.</p>

<h2>Common embezzlement schemes in small businesses</h2>
<h3>Billing schemes</h3>
<p>An employee sets up a fake vendor, or colludes with a real one, and sends invoices for goods or services never received. Billing schemes are among the costliest for small organizations because one person often both enters and approves bills. A proper <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> makes shell companies far harder to slip in.</p>
<h3>Check tampering</h3>
<p>Forging signatures, altering payees or amounts, or writing checks to themselves and coding them to a legitimate expense. <a href="/blog/positive-pay-check-fraud">Positive pay</a> stops most altered and counterfeit checks at the bank.</p>
<h3>Skimming and lapping</h3>
<p>Taking a customer's payment before it is recorded, then covering the hole with the next customer's payment, and so on. It requires constant maintenance, which is why the perpetrator never takes leave.</p>
<h3>Expense and card misuse</h3>
<p>Personal purchases claimed as business expenses, duplicate receipts, or inflated mileage claims.</p>
<h3>Payroll fraud</h3>
<p>Ghost employees, unapproved raises, or hours padded on timesheets.</p>
<h3>Duplicate payments</h3>
<p>Paying the same invoice twice and diverting the refund. See our guide to <a href="/blog/duplicate-invoice-payments">duplicate invoice payments</a> for detection queries.</p>

<h2>What to do if you suspect embezzlement</h2>
<p>This is general information, not legal or tax advice; your attorney and accountant should guide the specifics. The order of steps matters, because a premature confrontation can lead to deleted records.</p>
<ol>
<li><strong>Do not confront or accuse yet.</strong> Keep normal behavior while you gather facts.</li>
<li><strong>Preserve evidence.</strong> Download bank and card statements straight from the bank. Export the accounting file, vendor list and audit logs. Back up email accounts. Store copies outside systems the employee can reach.</li>
<li><strong>Quietly limit access.</strong> Add dual approval on payments, remove the ability to change vendor bank details, and route mail to someone else, without tipping off the person if possible.</li>
<li><strong>Call an attorney.</strong> Employment law, defamation risk and evidence handling all matter before any interview or termination.</li>
<li><strong>Bring in a forensic accountant</strong> or certified fraud examiner to quantify the loss. You will need that number for insurance, tax and any recovery claim.</li>
<li><strong>Notify your insurer promptly</strong> if you have crime or fidelity coverage. Policies often have strict notice deadlines.</li>
<li><strong>Interview and decide.</strong> With counsel, interview the employee, then decide on termination, a police report and civil recovery.</li>
<li><strong>Fix the control gap.</strong> Rework duties so the same scheme cannot happen again; our guide to <a href="/blog/segregation-of-duties">segregation of duties in a small team</a> shows how.</li>
</ol>

<h2>Worked example: a lapping scheme</h2>
<p>This example is illustrative. A plumbing company with $1.2 million in annual sales has one office administrator who opens the mail, deposits checks and posts payments. Over 14 months she takes about $1,500 a week from incoming checks:</p>
<ul>
<li>Week 1: Customer A's $1,500 check is deposited into her personal account. Invoice A stays open.</li>
<li>Week 2: Customer B pays $1,800. She posts $1,500 of it to Invoice A and leaves Invoice B partly open.</li>
<li>Over time, older invoices are covered by newer payments, and stubborn gaps are closed with "discount" credit notes.</li>
</ul>
<p>After 14 months the loss is around $90,000. The scheme is found only because she is hospitalized for two weeks and a temporary worker sees a customer's payment confirmation for an invoice already marked as paid. The clues were there all along: receivables aging was getting older, credit notes had tripled, and she had not taken a week off in three years.</p>

<h2>Mistakes owners make after discovering theft</h2>
<ul>
<li><strong>Firing on the spot.</strong> An immediate dismissal before evidence is secured can mean wiped laptops, deleted emails and a weaker case. Remove access and preserve data first, with legal advice.</li>
<li><strong>Accepting a quick repayment deal without advice.</strong> A promise to repay "what I took" is usually far less than the real loss, and some agreements not to report a crime can create legal problems of their own.</li>
<li><strong>Letting the suspect "help" with the investigation.</strong> They know where the gaps are and can quietly fix entries.</li>
<li><strong>Underestimating the period.</strong> Losses found in one year often started years earlier. Ask the forensic accountant to test back as far as records allow.</li>
<li><strong>Talking too widely.</strong> Accusations shared with staff or customers before the facts are established can expose you to defamation claims. Keep the circle small: owner, attorney, accountant and insurer.</li>
<li><strong>Forgetting customers.</strong> If skimming was involved, some customer balances will be wrong. Send corrected statements once you know the real position, and apologize for any confusion.</li>
</ul>

<h2>Tax treatment and insurance recovery</h2>
<p>In the US, a business theft loss, including embezzlement, is generally deductible in the year the theft is discovered, not the year it happened. If you have a claim for reimbursement with a reasonable prospect of recovery, such as an insurance claim, the deduction usually waits until that is settled, and any recovery reduces it. You will need to prove that a theft occurred under local law, the amount, and when you discovered it, which is where a forensic report and a police report help. The IRS covers theft losses in Publication 547 (Casualties, Disasters, and Thefts), and the discovery-year rule comes from Internal Revenue Code section 165(e); ask your tax professional how it applies to your return.</p>
<p>Standard liability policies do not cover employee theft. Commercial crime insurance or an employee dishonesty bond does. Our overview of <a href="/blog/business-insurance">business insurance types and costs</a> explains where crime cover fits.</p>

<h2>How to prevent embezzlement</h2>
<ul>
<li>Split authorization, custody, recording and reconciliation, using our sibling guide to <a href="/blog/internal-controls">internal controls</a> as a checklist.</li>
<li>Owner reviews bank statements monthly, pulled directly from the bank.</li>
<li>Independent <a href="/blog/bank-reconciliation">bank reconciliations</a> every month.</li>
<li>Mandatory vacations and cross-training.</li>
<li>Approval required for every credit note, write-off and vendor change.</li>
<li>A simple, anonymous way for staff, customers and vendors to report concerns. Tips are the single most common way occupational fraud is detected.</li>
<li>Background and reference checks for anyone with access to money.</li>
</ul>

<h2>Keep your invoicing records clean</h2>
<p>Many embezzlement schemes depend on messy receivables. Sequential invoice numbers, consistent formats and customer statements that show every invoice and payment make skimming and lapping hard to hide, because customers will spot a balance that should not be there. Create numbered invoices and credit notes in seconds with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, download as PDF, and keep a complete copy for every review.</p>
`,
  },
  {
    slug: "liability-waiver-template",
    title: "Liability Waiver Template for Small Business (2026)",
    description:
      "Free liability waiver template for small businesses: clauses to include, what waivers cannot cover, state limits, minors, e-signatures and a sample release.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "business-insurance",
      "service-agreement-template",
      "client-intake-form",
    ],
    faqs: [
      {
        q: "Are liability waivers legally binding?",
        a: "Often, but not always. In most US states, courts enforce a clearly written waiver that covers ordinary negligence, was voluntarily signed by an adult, and plainly describes the risks and the rights being given up. Courts generally refuse to enforce waivers that try to excuse gross negligence, recklessness or intentional harm, that are hidden in fine print, or that conflict with public policy. A few states, such as Louisiana and Virginia, refuse to enforce pre-injury releases for personal injury.",
      },
      {
        q: "Can a parent sign a liability waiver for a child?",
        a: "It depends on the state. Some states enforce a parent's pre-injury waiver for a minor, at least for certain activities such as community or nonprofit recreation, while others treat such waivers as unenforceable against the child's own claim. Even where the child's claim survives, the parent's own claims may be waived. If you work with minors, have a lawyer review your form for your state, and keep strong insurance.",
      },
      {
        q: "What should a liability waiver include?",
        a: "A good waiver identifies the parties and the activity, describes the specific risks, includes an assumption of risk statement, a release of claims for ordinary negligence using the word negligence, an indemnity clause, a medical authorization if relevant, a governing law clause, a severability clause, and a clear signature block with the date. It should be written in plain language, set apart from other terms, and easy to read before signing.",
      },
      {
        q: "Does a liability waiver replace business insurance?",
        a: "No. A waiver may block or reduce some claims, but customers can still sue, and defending a lawsuit is expensive even when you win. Waivers also do not protect you from gross negligence claims, claims in states that void releases, or injuries to people who never signed. General liability insurance pays for defense and covered damages. Treat the waiver as one layer of protection alongside insurance, safety procedures and good records.",
      },
      {
        q: "Are electronic liability waivers valid?",
        a: "Generally yes. Under the federal E-SIGN Act and state laws based on the Uniform Electronic Transactions Act, electronic signatures are not denied legal effect just because they are electronic. To make an electronic waiver hold up, show the full text before signing, require an affirmative action such as typing a name and ticking a box, record the date, time and signer details, and give the signer a copy by email.",
      },
      {
        q: "How long should I keep signed liability waivers?",
        a: "Keep them at least as long as someone could bring a claim. Personal injury statutes of limitation vary by state, commonly between one and six years, and for minors the clock often does not start until they reach adulthood. Many businesses keep waivers for at least the limitation period plus a margin, and for minors until several years after they turn 18. Store them securely and indexed by name and date.",
      },
    ],
    content: `
<p>A liability waiver template gives your customers a written explanation of the risks of an activity and asks them to release your business from claims for ordinary negligence. Used well, a waiver can stop weak lawsuits early and makes customers take risks seriously. It cannot excuse gross negligence or intentional harm, and some states will not enforce it at all for personal injuries, so it works best alongside insurance and good safety practice. Below you will find what to include, a sample template, state-by-state cautions and how to collect signatures.</p>

<p>This is general information, not legal advice. Waiver law is state-specific and changes through court decisions, so have a local attorney review your final form, especially if you work with minors or high-risk activities.</p>

<h2>What is a liability waiver?</h2>
<p>A liability waiver (also called a release of liability, exculpatory agreement or hold harmless agreement) is a contract in which a participant agrees not to sue a business for injuries or losses arising from an activity, typically including injuries caused by the business's ordinary negligence. It is common for gyms, personal trainers, yoga studios, adventure and outdoor activities, equipment rental, event venues, salons and spas that use chemicals or heat, and contractors who let customers on job sites.</p>
<p>Most waivers combine three ideas:</p>
<ul>
<li><strong>Assumption of risk:</strong> the participant understands and accepts the inherent risks of the activity.</li>
<li><strong>Release:</strong> the participant gives up claims against the business for ordinary negligence.</li>
<li><strong>Indemnity:</strong> the participant agrees to cover the business's costs if they (or someone claiming through them) sue anyway.</li>
</ul>

<h2>Are liability waivers enforceable?</h2>
<p>Courts in most states will enforce a waiver that is clear, conspicuous and covers ordinary negligence. They look closely at a few factors:</p>
<table><thead><tr><th>Factor</th><th>Helps enforceability</th><th>Hurts enforceability</th></tr></thead><tbody>
<tr><td>Clarity</td><td>Plain language, uses the word "negligence"</td><td>Legal jargon, vague "any and all" wording only</td></tr>
<tr><td>Presentation</td><td>Separate document or clearly headed section, readable font</td><td>Hidden in tiny print on the back of a receipt</td></tr>
<tr><td>Scope</td><td>Ordinary negligence and inherent risks</td><td>Gross negligence, recklessness, intentional acts</td></tr>
<tr><td>Signer</td><td>Adult with capacity, signed voluntarily before the activity</td><td>Minor, or signed under time pressure after paying</td></tr>
<tr><td>Public interest</td><td>Optional recreational activity</td><td>Essential services such as medical care or housing</td></tr>
</tbody></table>

<h3>States that limit or refuse waivers</h3>
<p>A minority of states are hostile to pre-injury releases. Louisiana Civil Code article 2004 makes null any clause that in advance excludes or limits liability for causing physical injury to the other party, and the Virginia Supreme Court has long held pre-injury releases for personal injury void as against public policy. Other states restrict waivers for particular industries or require specific wording. The <a href="https://recreation-law.com/2016/06/01/states-that-do-not-support-the-use-of-a-release-5/" target="_blank" rel="noopener noreferrer">Recreation Law overview of states that do not support releases</a> is a useful starting point, but confirm the current position for your state with a lawyer.</p>

<h3>Minors</h3>
<p>Minors generally cannot bind themselves to a release, and states split on whether a parent can waive a child's injury claim in advance. Some enforce parental waivers, some do not, and some enforce them only for certain activities. If children are a big part of your business, get state-specific advice and do not rely on the waiver as your main protection.</p>

<h2>Liability waiver vs hold harmless vs indemnity</h2>
<p>These terms are often used interchangeably, but they do slightly different jobs, and many templates combine all three:</p>
<table><thead><tr><th>Clause</th><th>What it does</th><th>Who it binds</th></tr></thead><tbody>
<tr><td>Release / waiver</td><td>Participant gives up their own right to sue the business</td><td>The signer (and sometimes their estate)</td></tr>
<tr><td>Assumption of risk</td><td>Participant acknowledges inherent risks they accept</td><td>The signer</td></tr>
<tr><td>Hold harmless</td><td>Promise not to hold the business responsible for a loss</td><td>The signer</td></tr>
<tr><td>Indemnity</td><td>Signer pays the business's costs if a third party or family member sues over the activity</td><td>The signer, financially</td></tr>
</tbody></table>
<p>For business-to-business work, such as letting a client's staff onto your site, indemnity clauses usually live in the main contract rather than a separate waiver, and they are often backed by certificates of insurance.</p>

<h2>What to include in a liability waiver template</h2>
<ol>
<li><strong>Title and parties:</strong> "Release of Liability, Waiver of Claims and Assumption of Risk," your legal business name, and the participant's name.</li>
<li><strong>Description of the activity:</strong> what the participant will do, where, and with what equipment.</li>
<li><strong>Specific risks:</strong> list realistic risks (falls, strains, equipment failure, allergic reactions, weather). Specific beats generic.</li>
<li><strong>Assumption of risk:</strong> the participant confirms they understand and voluntarily accept these risks.</li>
<li><strong>Release of negligence claims:</strong> state explicitly that the release covers claims arising from the business's negligence.</li>
<li><strong>Indemnity:</strong> the participant agrees to cover costs if they or their family bring a released claim.</li>
<li><strong>Health statement and medical authorization:</strong> the participant confirms fitness for the activity and authorizes emergency treatment.</li>
<li><strong>Rules compliance:</strong> the participant will follow instructions and safety rules.</li>
<li><strong>Governing law and venue.</strong></li>
<li><strong>Severability:</strong> if part is struck out, the rest stays in force.</li>
<li><strong>Acknowledgment:</strong> "I have read this document, understand that I am giving up legal rights, and sign it voluntarily."</li>
<li><strong>Signature, printed name, date</strong> and, for minors, parent or guardian details.</li>
</ol>
<p>If you also photograph participants for marketing, use a separate consent such as a <a href="/blog/photo-release-form">photo release form</a> rather than burying it in the waiver.</p>

<h2>Sample liability waiver template</h2>
<p>Adapt the wording below to your activity and state, then have it reviewed.</p>
<p><strong>RELEASE OF LIABILITY, WAIVER OF CLAIMS AND ASSUMPTION OF RISK</strong></p>
<p>In consideration of being allowed to participate in [activity] provided by [Business Legal Name] ("the Company") at [location] on [date or "on any date"], I agree as follows:</p>
<p><strong>1. Risks.</strong> I understand that [activity] involves risks including, but not limited to, [list specific risks], which may result in injury, illness, property damage or, in rare cases, death.</p>
<p><strong>2. Assumption of risk.</strong> I voluntarily assume all risks, known and unknown, of participating, including risks arising from the negligence of the Company.</p>
<p><strong>3. Release.</strong> To the fullest extent permitted by law, I release the Company, its owners, employees and agents from any and all claims for injury, illness, death or property damage arising from my participation, including claims arising from the Company's negligence. This release does not apply to gross negligence or intentional misconduct.</p>
<p><strong>4. Indemnity.</strong> I agree to indemnify and hold harmless the Company from any claim brought by me or on my behalf that is released by this agreement.</p>
<p><strong>5. Health and medical care.</strong> I confirm I have no medical condition that prevents safe participation, except as disclosed: [space]. I authorize the Company to obtain emergency medical treatment for me at my expense.</p>
<p><strong>6. Rules.</strong> I agree to follow all instructions and safety rules.</p>
<p><strong>7. Governing law and severability.</strong> This agreement is governed by the laws of [State]. If any part is held invalid, the rest remains in effect.</p>
<p><strong>I HAVE READ THIS AGREEMENT, UNDERSTAND THAT I AM GIVING UP SUBSTANTIAL RIGHTS, AND SIGN IT VOLUNTARILY.</strong></p>
<p>Participant signature / printed name / date. Parent or guardian (if participant is under 18) signature / printed name / relationship / date.</p>

<h2>Step by step: rolling out a waiver in your business</h2>
<ol>
<li><strong>List the activities</strong> that carry real injury or property risk.</li>
<li><strong>Draft one waiver per activity type,</strong> or one master waiver with an activity schedule.</li>
<li><strong>Get attorney review</strong> for your state.</li>
<li><strong>Collect signatures before the activity</strong> and before payment where possible, so nobody feels forced to sign after paying. Many businesses add the waiver to a <a href="/blog/client-intake-form">client intake form</a>.</li>
<li><strong>Store signed copies</strong> indexed by name and date for at least the limitation period.</li>
<li><strong>Review yearly</strong> and when you add new services or equipment.</li>
</ol>

<h2>Worked example: a personal training studio</h2>
<p>This example is illustrative. A studio in Colorado runs small-group strength classes at $25 per session. Each new client completes an online intake form with a health questionnaire and the studio's waiver before booking. Six months later a client strains a shoulder during a class and threatens to sue for $15,000 in medical costs, claiming the trainer should have corrected her form.</p>
<p>Because the signed waiver specifically listed muscle strains as a risk, released claims arising from the studio's negligence, and was signed separately before the first session, the studio's insurer uses it to push back early, and the claim settles for a small amount. Had the trainer ignored a disclosed injury and loaded a dangerous weight, that could be argued as gross negligence, which the waiver would not cover. The studio's general liability policy, not the waiver, paid the defense costs. The studio invoices its sessions using a <a href="/blog/personal-trainer-invoice-template">personal trainer invoice template</a>, and the invoice references that the participant's waiver is on file.</p>

<h2>Common mistakes with liability waivers</h2>
<ul>
<li><strong>Not mentioning negligence.</strong> Many courts require explicit wording to release negligence claims.</li>
<li><strong>Trying to waive everything.</strong> Overreaching language covering intentional acts can make a court distrust the whole document.</li>
<li><strong>Fine print on a receipt or invoice.</strong> Put waiver terms in their own document, not in the small print of your <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</li>
<li><strong>Relying on it instead of insurance.</strong> See our guide to <a href="/blog/business-insurance">business insurance</a> for general liability and other covers.</li>
<li><strong>Confusing customer waivers with worker cover.</strong> Employees' injuries are handled through <a href="/blog/workers-compensation-insurance">workers' compensation insurance</a>, not waivers.</li>
<li><strong>Losing signed copies.</strong> A waiver you cannot produce is worthless.</li>
</ul>

<h2>Waivers, contracts and invoices</h2>
<p>For ongoing client work, the waiver usually sits alongside a broader <a href="/blog/service-agreement-template">service agreement</a> that covers scope, payment and cancellation. Your invoice then simply references the agreement and confirms what was delivered. When the paperwork is in place, bill each session or package with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, add your terms, and download a clean PDF for the client and your records.</p>
`,
  },
  {
    slug: "return-policy-template",
    title: "Return Policy Template With Examples (US and UK Rules)",
    description:
      "Return policy template with copy-ready examples for online and retail stores, plus US posting laws, UK 14-day rights, restocking fees and refund invoices.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "credit-note-guide",
      "how-to-handle-chargebacks",
      "invoice-terms-and-conditions",
    ],
    faqs: [
      {
        q: "Is a business legally required to have a return policy?",
        a: "In the US there is no general federal law requiring retailers to accept returns, but several states require you to disclose your policy. California requires conspicuous posting if you do not offer at least a seven-day full refund, credit or exchange, and New York requires retailers to post their refund policy. In the UK, online and distance sales carry a legal 14-day cancellation right regardless of your own policy, and faulty goods must always be dealt with.",
      },
      {
        q: "What happens if I do not post a return policy?",
        a: "It depends on the state. In California, a retailer that must post its policy but fails to do so can be liable to refund the purchase price if the buyer returns the goods within 30 days. In New York, a retailer that fails to post can be liable for a cash refund or credit, at the buyer's option, within 30 days of purchase for unused, undamaged goods with proof of purchase. Posting a clear policy avoids these defaults.",
      },
      {
        q: "Can I charge a restocking fee?",
        a: "Usually yes, as long as you disclose it clearly before purchase and it does not conflict with local consumer law. New York, for example, requires your posted policy to state any fees such as restocking fees. In the UK, you cannot charge a restocking fee to reduce a refund under the 14-day distance-selling cancellation right, though you may deduct for reduced value if the customer handled the goods more than needed to inspect them.",
      },
      {
        q: "How long should a return window be?",
        a: "Thirty days is the most common window for US retailers, and it matches the default remedy period in both the California and New York statutes. Some brands offer 60 or 90 days as a selling point, while final-sale and custom items often have no returns. For UK online sales, the legal minimum is 14 days after delivery to cancel, with a further 14 days to send goods back. Holiday season extensions are common.",
      },
      {
        q: "Should I refund to the original payment method or give store credit?",
        a: "Refunding to the original payment method is the clearest option and reduces chargeback risk, because customers who feel stuck with store credit may dispute the card payment instead. Store credit can be offered as an alternative or for returns outside the main window, if your policy says so. For UK distance sales within the cancellation period, the refund must generally be made using the same payment method unless the customer agrees otherwise.",
      },
      {
        q: "How do I record a return in my invoicing?",
        a: "If the original sale was invoiced, issue a credit note that references the original invoice number, lists the returned items, and shows the amount credited including any tax. Do not delete or edit the original invoice. The credit note reduces the customer's balance or supports the refund, and it keeps your sales tax or VAT records accurate. For cash sales with receipts, record a refund receipt instead.",
      },
    ],
    content: `
<p>A return policy template gives you ready-made wording for how long customers have to return items, what condition goods must be in, how refunds are paid and who covers shipping. A good policy is short, specific and easy to find before purchase. It also has to sit within the law: some US states require you to post your policy, and UK online sales carry a 14-day cancellation right no matter what your policy says. Below are copy-ready examples for online stores, physical shops and service businesses, plus the legal minimums and how to record refunds on your invoices.</p>

<p>This is general information, not legal advice. Consumer protection rules vary by state and country, so check with a local adviser if you sell in many places.</p>

<h2>What a return policy template should cover</h2>
<ul>
<li><strong>Return window:</strong> how many days from purchase or delivery.</li>
<li><strong>Eligible items:</strong> condition (unused, with tags, original packaging) and exclusions (final sale, perishables, personalized goods, intimate items, gift cards).</li>
<li><strong>Proof of purchase:</strong> receipt, order number or invoice.</li>
<li><strong>Refund method:</strong> original payment method, store credit or exchange.</li>
<li><strong>Refund timing:</strong> how quickly you process after receiving the item.</li>
<li><strong>Return shipping:</strong> who pays, prepaid labels, and how to send items.</li>
<li><strong>Fees:</strong> restocking fees, if any, as a dollar amount or percentage.</li>
<li><strong>Damaged or wrong items:</strong> how to report and what you will do.</li>
<li><strong>Contact:</strong> email or form to start a return.</li>
</ul>

<h2>US return policy laws you need to know</h2>
<p>There is no general federal requirement to accept returns of non-defective goods in the US. The main legal obligations come from state disclosure laws, warranty law for defective products, and card network rules that make an unclear policy a chargeback risk.</p>
<table><thead><tr><th>Jurisdiction</th><th>Rule</th><th>If you fail to comply</th></tr></thead><tbody>
<tr><td>California (Civil Code 1723)</td><td>If you do not give a full cash refund, credit or equal exchange for at least 7 days after purchase (with proof of purchase), you must conspicuously post your policy at registers, entrances, on item tags or on order forms</td><td>Buyer can return goods within 30 days for the purchase price</td></tr>
<tr><td>New York (General Business Law 218-a)</td><td>Retailers must conspicuously post their refund policy, including conditions, time limits, cash or credit, and any fees; online sellers can show or link it before billing information is requested</td><td>Buyer may get a cash refund or credit, at their option, within 30 days for unused, undamaged goods with proof of purchase</td></tr>
<tr><td>Other states</td><td>Several states have their own disclosure rules</td><td>Varies; check your state attorney general's site</td></tr>
</tbody></table>
<p>California exempts some goods from the posting rule, including food, plants, flowers and other perishables, goods marked "as is" or "all sales final," customized goods received as ordered, items used or damaged after purchase, items not returned in original packaging, and goods that cannot be resold for health reasons. You can read the text of <a href="https://www.nysenate.gov/legislation/laws/GBS/218-A" target="_blank" rel="noopener noreferrer">New York General Business Law 218-a</a> on the state senate site.</p>

<h2>UK return rules for online sellers</h2>
<p>If you sell to UK consumers online, by phone or by mail order, the Consumer Contracts Regulations give customers the right to cancel within 14 days of delivery without giving a reason, as explained in the <a href="https://www.gov.uk/online-and-distance-selling-for-businesses/returns-and-refunds" target="_blank" rel="noopener noreferrer">GOV.UK online and distance selling guidance</a>. If you fail to tell customers about this right, the cancellation period can extend by up to 12 months. Customers then have 14 days to send goods back, and the refund is generally due within 14 days. Some goods are excluded, such as personalized items and perishable goods, and the rules do not apply to sales of £42 or less. Your own policy can be more generous, never less.</p>

<h2>Return policy template examples</h2>
<h3>Example 1: Online store (30 days)</h3>
<p><em>Returns.</em> You can return most items within 30 days of delivery for a full refund. Items must be unused, in original packaging, with tags attached. Final-sale items, gift cards and personalized products cannot be returned.</p>
<p><em>How to return.</em> Email [address] with your order number. We will send a return label. Return shipping is free for exchanges; for refunds, $6.95 is deducted from your refund to cover the label.</p>
<p><em>Refunds.</em> We inspect returns within 3 business days of receipt and refund to your original payment method. Your bank may take 5-10 business days to show the credit.</p>
<p><em>Damaged or incorrect items.</em> Contact us within 7 days of delivery with a photo, and we will replace the item or refund in full, including shipping.</p>

<h3>Example 2: Physical retail shop</h3>
<p>Full refund to the original payment method within 14 days of purchase with a receipt. Exchange or store credit within 30 days with a receipt. No refunds on sale items marked "final sale." Opened cosmetics and earrings cannot be returned for hygiene reasons. A copy of this policy is available on request.</p>

<h3>Example 3: Service business or digital product</h3>
<p>Because our work is customized, payments for completed services are non-refundable. If you cancel before work starts, we refund your deposit minus a $50 administration fee. If you are unhappy with a deliverable, tell us within 7 days and we will revise it at no charge, up to two rounds. Digital downloads are non-refundable once downloaded, except where the file is faulty.</p>

<h2>Restocking fees, exchanges and store credit</h2>
<p>Restocking fees are common for large, bulky or special-order goods, often 10% to 25% of the item price, to cover inspection, repackaging and loss of value. If you charge one, state the amount in the policy and at checkout, apply it only to non-defective returns, and waive it when you shipped the wrong item. New York's statute specifically requires posted policies to disclose fees such as restocking fees.</p>
<p>Exchanges are cheaper for you than refunds because you keep the sale. Many stores offer free exchange shipping but charge for refund returns, which nudges customers toward an exchange without blocking refunds. Store credit works well for returns after the main window, but if a customer is entitled to a refund under your policy or the law, do not force credit on them.</p>

<h2>Return policies for B2B sales and invoices</h2>
<p>Business customers buying on account need the return terms in writing too, usually in the quote, order confirmation or invoice terms. Spell out who authorizes returns (a return merchandise authorization number), the window, the condition required, whether freight is credited, and how the credit appears: as a credit note against the open invoice, or a refund if the invoice is already paid. Consumer protection statutes mostly do not apply to B2B sales, so your contract terms carry more weight.</p>

<h2>How to write your return policy step by step</h2>
<ol>
<li><strong>Check your margins.</strong> Estimate return rates and costs (shipping, inspection, unsellable items) before picking a generous window.</li>
<li><strong>Choose a window</strong> and say whether it runs from purchase or delivery. Delivery is fairer for online orders.</li>
<li><strong>List exclusions</strong> clearly.</li>
<li><strong>Decide on shipping costs</strong> and any restocking fee, and state them in dollars or percent.</li>
<li><strong>Set refund timing</strong> you can actually meet.</li>
<li><strong>Publish it everywhere it matters:</strong> product pages, checkout, footer, receipts, invoices and order confirmation emails. For in-store sales, post it at the register.</li>
<li><strong>Align it with your shipping policy;</strong> our <a href="/blog/shipping-policy-template">shipping policy template</a> covers delivery times and lost parcels.</li>
</ol>

<h2>Worked example: processing a partial return</h2>
<p>This is an illustrative example. A customer in a state that does not tax separately stated shipping (8.25% combined sales tax rate in this example) buys three items from an online store on invoice #2026-0418:</p>
<ul>
<li>Jacket, $120.00</li>
<li>Scarf, $35.00</li>
<li>Gloves, $25.00</li>
<li>Subtotal $180.00, sales tax at 8.25% $14.85, shipping $8.00, total $202.85</li>
</ul>
<p>She returns the jacket within 30 days, unused. The policy says refunds exclude original shipping and deduct a $6.95 return label. The store issues credit note #CN-2026-0051 referencing invoice #2026-0418:</p>
<ul>
<li>Jacket returned: $120.00</li>
<li>Sales tax refunded on jacket: $9.90</li>
<li>Less return label: -$6.95</li>
<li>Total refund: $122.95 to the original card</li>
</ul>
<p>The original invoice stays unchanged; the credit note documents the return and keeps sales tax records right. Our <a href="/blog/credit-note-guide">credit note guide</a> explains numbering and layout, and you can check tax amounts with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>. Whether sales tax applies to shipping charges depends on the state; see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>.</p>

<h2>Common return policy mistakes</h2>
<ul>
<li><strong>Hiding the policy.</strong> A policy customers never saw is hard to enforce and invites disputes.</li>
<li><strong>Vague promises.</strong> "Hassle-free returns" without a time limit is a commitment you may regret.</li>
<li><strong>Slow refunds.</strong> Customers who wait weeks often file a card dispute. Our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> shows how a clear, accepted policy helps you win.</li>
<li><strong>Different policies in different places.</strong> Website, receipts and invoices must match.</li>
<li><strong>Ignoring faulty goods.</strong> A "no returns" policy does not remove legal rights for defective items.</li>
<li><strong>Editing original invoices.</strong> Always issue a credit note instead.</li>
</ul>

<h2>Put the policy on your invoices and receipts</h2>
<p>A one-line summary on every invoice or receipt, such as "Returns accepted within 30 days of delivery. Full policy at [URL]," reminds customers of the rules at the moment they matter. You can include that line in the notes of your <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>. If you sell through your own site, our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">ecommerce invoices for Shopify and WooCommerce</a> covers where policies appear in order emails.</p>
<p>Need a clean invoice or credit note for a return? Use our <a href="/invoice-generator">free invoice generator</a>: no sign-up, add your return terms in the notes, and download it as a PDF in under a minute.</p>
`,
  },
  {
    slug: "shipping-policy-template",
    title: "Shipping Policy Template for Online Stores (2026)",
    description:
      "Shipping policy template for online stores: processing times, rates, delays, lost parcels and FTC 30-day rule compliance, with copy-ready wording and examples.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sales-tax-on-shipping",
      "packing-slip-vs-invoice",
      "fob-shipping-point-vs-destination",
    ],
    faqs: [
      {
        q: "What should a shipping policy include?",
        a: "A shipping policy should state order processing time, shipping methods and estimated delivery times, shipping costs and free-shipping thresholds, where you ship (domestic and international), how tracking works, what happens with delays, lost, stolen or damaged parcels, address errors, customs duties for international orders, and how customers contact you. It should match what your checkout and product pages say, because those statements are promises under consumer protection law.",
      },
      {
        q: "What is the FTC 30-day rule for shipping?",
        a: "Under the FTC's Mail, Internet, or Telephone Order Merchandise Rule, you must have a reasonable basis for any shipping time you state. If you state no time, you must have a reasonable basis to ship within 30 days of receiving a properly completed order, or 50 days if the customer is applying for credit with you. If you cannot ship on time, you must offer the customer the choice to agree to the delay or cancel for a prompt refund.",
      },
      {
        q: "How fast do I have to refund a cancelled order under the FTC rule?",
        a: "When an order is cancelled under the rule, refunds for payments made by cash, check, money order or third-party credit card must be made within seven working days. If the customer bought on credit that you provide yourself, you must credit the account within one billing cycle. Store credit or vouchers are not acceptable substitutes for a required refund, and the refund must include shipping and handling charges for items not shipped.",
      },
      {
        q: "Who is responsible if a package is lost or stolen?",
        a: "Your policy and contract terms decide much of this, but for consumer sales many sellers and payment platforms treat goods as the seller's responsibility until delivered. Marking a parcel delivered when it never arrived can lead to a chargeback you lose without proof of delivery. Many stores offer shipping insurance, signature on delivery for high-value orders, and a process to file a carrier claim before reshipping or refunding.",
      },
      {
        q: "Should I charge sales tax on shipping?",
        a: "It depends on the state. Some states tax shipping and delivery charges when the item sold is taxable, others exempt separately stated shipping, and some treat shipping and handling differently. List shipping as a separate line on your invoice or receipt and check the rules for each state where you collect tax. Our sales tax on shipping guide summarizes the main approaches.",
      },
      {
        q: "Do I need a different shipping policy for international orders?",
        a: "You can use one policy with an international section. It should explain which countries you ship to, delivery estimates, that the customer may owe import duties, taxes and brokerage fees unless you ship duties-paid, what happens if the customer refuses to pay duties, and any restricted items. For business shipments, state the Incoterm you use, and include a commercial invoice where customs requires one.",
      },
    ],
    content: `
<p>A shipping policy template sets out how fast you process orders, which carriers and methods you use, what shipping costs, and what happens when parcels are late, lost or damaged. It answers customer questions before they become support tickets, and in the US it also keeps you on the right side of the FTC's rule on shipping promises: if you state a shipping time, you must be able to meet it. This guide gives copy-ready wording, the legal points that matter, and a worked example of handling a delay.</p>

<p>This is general information, not legal advice. If you sell in several countries or ship regulated goods, get specific advice on carrier, customs and consumer rules.</p>

<h2>The FTC rule behind every US shipping policy</h2>
<p>The FTC's <a href="https://www.ftc.gov/documents/bus02-business-guide-mail-and-telephone-order-merchandise-rule" target="_blank" rel="noopener noreferrer">Mail, Internet, or Telephone Order Merchandise Rule</a> applies to most goods ordered by mail, phone, fax or online. Its main points:</p>
<ul>
<li><strong>Reasonable basis:</strong> you must have a reasonable basis for any shipping time you advertise or imply.</li>
<li><strong>Default 30 days:</strong> if you state no shipping time, you must expect to ship within 30 days of receiving a properly completed order (50 days if the customer is applying for credit with you to pay).</li>
<li><strong>Shipping means handing to the carrier:</strong> the clock is measured to when the item is placed with the carrier, not delivery.</li>
<li><strong>Delay option notice:</strong> if you cannot ship on time, you must promptly tell the customer and offer the choice to consent to the delay or cancel for a full refund, with a free way to cancel.</li>
<li><strong>Prompt refunds:</strong> within seven working days for cash, check, money order or third-party card payments; within one billing cycle if you extended the credit.</li>
<li><strong>No vouchers:</strong> store credit cannot replace a required refund.</li>
</ul>
<p>The rule does not cover services, COD orders, seeds and growing plants, or magazine subscriptions after the first issue, among other exemptions. Even when the rule does not apply, your stated policy is a promise, and false claims can be deceptive under general consumer law.</p>

<h2>What to include in your shipping policy</h2>
<table><thead><tr><th>Section</th><th>What to state</th><th>Example</th></tr></thead><tbody>
<tr><td>Processing time</td><td>Business days to pack and hand to carrier</td><td>Orders ship within 1-2 business days</td></tr>
<tr><td>Methods and delivery estimates</td><td>Carrier options and typical transit time</td><td>Standard 3-7 business days; Express 1-3</td></tr>
<tr><td>Rates</td><td>Flat, weight-based or calculated; free-shipping threshold</td><td>Free standard shipping on orders over $75</td></tr>
<tr><td>Coverage area</td><td>States, territories, PO boxes, countries</td><td>We ship to all 50 states and APO/FPO</td></tr>
<tr><td>Tracking</td><td>How and when customers get tracking</td><td>Emailed when the label is created</td></tr>
<tr><td>Delays</td><td>What you do if you cannot ship on time</td><td>We email you with a new date and the option to cancel</td></tr>
<tr><td>Lost, stolen or damaged</td><td>Reporting window and remedy</td><td>Report within 7 days of expected delivery</td></tr>
<tr><td>Address errors</td><td>Who pays for reshipping</td><td>Customer pays reshipping for incorrect addresses</td></tr>
<tr><td>International</td><td>Duties, taxes, refused parcels</td><td>Duties and taxes are paid by the recipient</td></tr>
<tr><td>Pre-orders and backorders</td><td>Expected ship date and cancellation rights</td><td>Ships by March 15; cancel anytime before shipping</td></tr>
</tbody></table>

<h2>Shipping policy template (copy and adapt)</h2>
<p><strong>Order processing.</strong> We process orders within [1-2] business days (Monday to Friday, excluding public holidays). Orders placed after [2 p.m. Eastern] are processed the next business day. You will receive an email with tracking when your order ships.</p>
<p><strong>Shipping methods and rates.</strong></p>
<ul>
<li>Standard (3-7 business days): $[5.95], free on orders over $[75].</li>
<li>Express (1-3 business days): $[14.95].</li>
<li>Delivery estimates start from when your order ships and are not guaranteed by the carrier.</li>
</ul>
<p><strong>Where we ship.</strong> We ship to all US states, including PO boxes and APO/FPO addresses via USPS. International shipping is available to [countries].</p>
<p><strong>Delays.</strong> If we cannot ship your order within the time stated, we will email you with a revised ship date and give you the option to cancel for a full refund. If you cancel, we refund your payment within 7 business days.</p>
<p><strong>Lost, stolen or damaged parcels.</strong> If your tracking shows no movement for [7] days, or your parcel arrives damaged, contact us at [email] within [7] days of the expected delivery date with your order number and photos (for damage). We will file a claim with the carrier and send a replacement or refund once confirmed.</p>
<p><strong>Incorrect addresses.</strong> Please check your address at checkout. If a parcel is returned because of an incorrect or incomplete address, we will reship at your cost or refund the order minus original shipping.</p>
<p><strong>International orders.</strong> Prices do not include import duties, taxes or brokerage fees, which are the recipient's responsibility. If you refuse a parcel, we refund the item cost minus shipping and any return charges.</p>
<p><strong>Questions.</strong> Contact [email / phone].</p>

<h2>Step by step: building your shipping policy</h2>
<ol>
<li><strong>Measure your real processing time</strong> over a busy month. Promise what you can meet on a bad week, not a good one.</li>
<li><strong>Pick carriers and service levels</strong> and note their published transit times.</li>
<li><strong>Set your rate model:</strong> flat rate, free over a threshold, or carrier-calculated.</li>
<li><strong>Decide on risk:</strong> who bears loss in transit, whether you add insurance or signature requirements over a certain order value.</li>
<li><strong>Write the delay process</strong> so your team knows when to email customers.</li>
<li><strong>Publish it</strong> on product pages (short version), checkout, footer and order emails.</li>
<li><strong>Align it with returns.</strong> Your <a href="/blog/return-policy-template">return policy template</a> should use the same contact details and timing language.</li>
</ol>

<h2>Worked example: handling a supplier delay</h2>
<p>This example is illustrative. An online homeware store states "ships within 2 business days." On November 3 it takes 40 orders for a ceramic set, then learns the supplier's stock will not arrive until November 20.</p>
<ol>
<li>The store's stated time was 2 business days, so it must send delay notices by November 5 at the latest.</li>
<li>Each email gives the new ship date (November 21), explains the right to cancel for a full refund, and includes a free cancellation link.</li>
<li>Because the new date is within 30 days of the original promise, the notice states that customers who do not respond will be treated as agreeing to the delay.</li>
<li>Six customers cancel. Each paid $89 plus $5.95 shipping; the store refunds $94.95 to each card within seven working days, a total of $569.70.</li>
<li>When stock arrives early on November 19, the store ships the remaining 34 orders and emails tracking.</li>
</ol>
<p>Had the store said nothing and shipped late, it would have risked FTC exposure and a wave of "item not received" chargebacks.</p>

<h2>Setting a free-shipping threshold that pays</h2>
<p>Free shipping lifts conversion, but you pay the carrier either way. A simple approach is to set the threshold a little above your average order value, so customers add one more item to qualify. For example, if your average order is $58 and your average label cost is $8.40, a $75 threshold nudges a $58 customer to add a $20 item and check out at $78. If your gross margin is 50%, that extra item earns about $10, which covers most of the $8.40 label you now absorb, and the higher conversion rate does the rest. Track the share of orders that hit the threshold each month and the average shipping cost per order; if margins fall, raise the threshold or limit free shipping to standard service.</p>

<h2>Handling lost and porch-stolen parcels</h2>
<p>Write the process down so every case is handled the same way:</p>
<ol>
<li>Ask the customer to check with neighbors, building reception and safe places, and wait one business day after a "delivered" scan.</li>
<li>Check tracking and any GPS or photo proof of delivery from the carrier.</li>
<li>File a carrier or insurance claim if the parcel was insured.</li>
<li>Reship or refund according to your policy, and note the order so repeat claims from the same address are visible.</li>
<li>For high-value orders, require signature on delivery in future.</li>
</ol>

<h2>Shipping on invoices and packing documents</h2>
<p>For B2B and wholesale orders, your invoice should show the ship-to address separately from the billing address, the shipping charge as its own line, and the delivery terms. Our guides explain <a href="/blog/billing-address-vs-shipping-address">billing address vs shipping address</a>, <a href="/blog/fob-shipping-point-vs-destination">FOB shipping point vs destination</a> (which decides when ownership and risk pass), and international <a href="/blog/incoterms-on-invoice">Incoterms on invoices</a>. Include a packing slip in the box rather than the invoice if the recipient is not the payer; see <a href="/blog/packing-slip-vs-invoice">packing slip vs invoice</a>.</p>
<p>Shipping charges can be taxable depending on the state, so list them separately; our guide to <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a> covers the main approaches. If you offer cash on delivery, note that the FTC rule does not cover COD orders, and see <a href="/blog/cash-on-delivery-invoicing">cash on delivery invoicing</a> for how to bill it.</p>

<h2>Common shipping policy mistakes</h2>
<ul>
<li><strong>Promising delivery dates you do not control.</strong> State ship times; describe carrier transit times as estimates.</li>
<li><strong>Ignoring peak season.</strong> Update processing times for holidays and sales events.</li>
<li><strong>No delay process.</strong> Silence is the fastest route to complaints and disputes.</li>
<li><strong>Offering store credit when a refund is required.</strong></li>
<li><strong>Missing international details.</strong> Unexpected duties are a top cause of refused parcels.</li>
<li><strong>Policy contradicts checkout.</strong> If checkout says "arrives Friday," that is what customers will hold you to.</li>
</ul>

<h2>Bill shipping clearly</h2>
<p>If you are just getting started, our guide on <a href="/blog/how-to-start-an-online-store">how to start an online store</a> covers the policies you need before launch. When you invoice wholesale or custom orders, add shipping as a separate line, include the ship-to address and reference your shipping terms. Our <a href="/invoice-generator">free invoice generator</a> lets you do all of that with no sign-up and download the invoice as a PDF to send with the order confirmation.</p>
`,
  },
];
