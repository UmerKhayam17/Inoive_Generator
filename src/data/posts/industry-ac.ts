import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_AC: PostDraft[] = [
  {
    slug: "dance-studio-invoice-template",
    title: "Dance Studio Invoice Template: Tuition, Recital + Costumes",
    description:
      "Dance studio invoice template for monthly tuition, registration, recital and costume fees, sibling discounts and late fees, with a full family invoice example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "music-lesson-invoice-template",
      "recurring-invoices-guide",
      "yoga-instructor-invoice-template",
    ],
    faqs: [
      {
        q: "How do dance studios usually charge tuition?",
        a: "Most studios set tuition by the number of class hours a student takes per week, then bill it monthly. Many calculate an annual season price and divide it into equal monthly payments, so months with holidays or a short schedule cost the same as full months. Some studios also offer a small discount for paying the full season upfront, and drop-in or class-card pricing for adult students.",
      },
      {
        q: "Should a dance studio charge a registration fee?",
        a: "Many do. A yearly registration fee, often charged per student or per family, covers enrollment paperwork, insurance and administrative setup for the season. It is usually non-refundable and billed on the first invoice of the year. List it as its own line, state who it covers, and mention it on your registration form so families are not surprised when the first invoice arrives.",
      },
      {
        q: "When should costume fees be billed?",
        a: "Costume fees are usually billed months before the recital, because studios order costumes from suppliers early in the season and need the money before placing the order. A common approach is a costume deposit in the fall and the balance by early winter. Bill each costume as a separate line with the student and routine name, and say clearly that ordered costumes are non-refundable.",
      },
      {
        q: "Do dance studios charge sales tax on tuition?",
        a: "In most US states, dance instruction is treated as a nontaxable service, but rules vary and a few states tax some recreational or fitness services. Costumes, shoes, dancewear and recital videos you sell are tangible goods and are often taxable. Keep taxable merchandise on separate lines from tuition so you can apply tax correctly, and confirm the rules with your state's revenue department.",
      },
      {
        q: "Can parents use a dependent care FSA for dance classes?",
        a: "Generally not. IRS Publication 503 treats expenses that are mainly for education or lessons, rather than care while a parent works, as not qualifying for dependent care benefits or the child and dependent care credit. Some after-school programs that combine supervision with activities may qualify. A studio can provide a clear receipt, but the parent and their plan administrator decide eligibility.",
      },
      {
        q: "How do I handle a student who quits mid-season?",
        a: "Your policy should say how much notice is required, often 30 days in writing, and whether costume and recital fees are refunded once ordered. Bill tuition through the end of the notice period, and do not refund costume orders already placed. If you use autopay, cancel future charges as soon as notice is received and send a final statement showing the account at zero.",
      },
      {
        q: "What late fee can a dance studio charge?",
        a: "Many studios charge a flat late fee, such as $10 to $25, when tuition is not paid within a set number of days after the due date. State the amount and grace period in your registration agreement, apply it consistently, and check your state's rules on late charges for consumer accounts. A clear policy plus autopay usually reduces late payments more than the fee itself.",
      },
      {
        q: "Should a dance studio invoice per student or per family?",
        a: "Invoice per family or per paying account. One invoice listing each child's classes, discounts and fees is easier for parents to pay and easier for you to reconcile. Show each student's name on every line so parents can see what belongs to whom, which also helps divorced or separated parents who split costs.",
      },
      {
        q: "Is a recital fee the same as recital tickets?",
        a: "No. A recital fee is charged to participating families to cover theater rental, staff, programs and production costs, and is usually per student or per family. Tickets are sold to audience members, often including the same families. Some studios include a set number of tickets in the recital fee. Keep the two separate on your invoices and in your bookkeeping.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A dance studio invoice template bills a family or adult student for classes and related fees. It lists each student, the classes and weekly hours, monthly tuition, registration, recital and costume fees, discounts such as sibling or multi-class pricing, any sales tax on merchandise, the due date, late fee policy and accepted payment methods.</p>

<p>Dance studios bill hundreds of families on a predictable schedule, but the details are messy: different class loads, siblings, costumes for several routines, recital fees, and the occasional student who quits in March. A clear dance class invoice keeps tuition flowing, cuts down on front-desk questions, and gives parents a record they can keep. This guide explains what a dance studio invoice should include, how studios structure tuition and fees, and walks through a complete family invoice with real numbers.</p>

<h2>What is a dance studio invoice?</h2>
<p>A dance studio invoice is a bill from a studio, academy or independent dance teacher to a student or parent. It covers tuition for regular classes and any additional fees for the season, such as registration, competition team costs, costumes, recital participation and private lessons. Unlike a one-off service bill, most studio invoices are <a href="/blog/recurring-invoices-guide">recurring invoices</a> sent on the same date each month during the season.</p>
<p>The invoice serves three purposes. It tells the family exactly what is owed and by when. It documents what was agreed at registration, which matters if there is a dispute about refunds or costume orders. And it gives the studio a clean record for bookkeeping and taxes. If you teach other lessons too, the structure is close to a <a href="/blog/music-lesson-invoice-template">music lesson invoice</a>, with recital and costume lines added.</p>

<h2>What should a dance class invoice include?</h2>
<p>Every dance studio invoice should carry the same core details, whether it is generated by studio software or a simple template.</p>
<table><thead><tr><th>Section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Studio details</td><td>Studio name, address, phone, email, website, and logo</td></tr>
<tr><td>Account details</td><td>Parent or guardian name, billing address, email, family account number</td></tr>
<tr><td>Invoice details</td><td>Invoice number, invoice date, billing period (for example, November 2026), due date</td></tr>
<tr><td>Student lines</td><td>Each student's name, class names or levels, weekly hours, monthly tuition</td></tr>
<tr><td>Fees</td><td>Registration, recital, costume, competition, private lesson or makeup class fees</td></tr>
<tr><td>Discounts</td><td>Sibling discount, multi-class discount, paid-in-full discount, scholarship</td></tr>
<tr><td>Tax</td><td>Sales tax on taxable merchandise only, if your state requires it</td></tr>
<tr><td>Totals</td><td>Subtotal, discounts, tax, payments or credits applied, balance due</td></tr>
<tr><td>Terms</td><td>Due date, late fee and grace period, autopay note, refund and withdrawal policy</td></tr>
<tr><td>Payment options</td><td>Card, ACH, check, family portal link</td></tr>
</tbody></table>
<p>Use a consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> such as studio prefix, season and sequence (for example DS-2627-0412), so you can find any family's history quickly.</p>

<h2>How do dance studios structure tuition?</h2>
<p>Most studios price tuition by weekly class time, not by individual class. A student taking one 60-minute class per week pays the base rate, and each additional hour costs a little less. This rewards dancers who take more classes and keeps billing simple.</p>
<h3>Monthly tuition from an annual season price</h3>
<p>A common model is to set an annual tuition for the season (for example, September through June), then divide it into equal monthly payments. A dancer whose season tuition is $1,500 pays $150 a month for 10 months. Months with a holiday break cost the same as months with five weeks of classes, which saves you from recalculating every invoice. Say this plainly in your policies, because a parent comparing a short December to a full October will ask.</p>
<h3>Tiered tuition by weekly hours</h3>
<p>The table below shows an illustrative tuition chart. Your rates will depend on your market, class sizes and teacher pay.</p>
<table><thead><tr><th>Weekly class time</th><th>Monthly tuition (illustrative)</th><th>Effective cost per hour of weekly class</th></tr></thead><tbody>
<tr><td>30 minutes (tiny tots)</td><td>$55</td><td>$110</td></tr>
<tr><td>1 hour</td><td>$80</td><td>$80</td></tr>
<tr><td>2 hours</td><td>$150</td><td>$75</td></tr>
<tr><td>3 hours</td><td>$210</td><td>$70</td></tr>
<tr><td>4 hours</td><td>$260</td><td>$65</td></tr>
<tr><td>Unlimited (company or competition dancers)</td><td>$325</td><td>Varies</td></tr>
</tbody></table>
<h3>Other pricing models</h3>
<ul>
<li><strong>Class cards and drop-ins:</strong> popular for adult classes. Sell a 10-class card and invoice once at purchase.</li>
<li><strong>Session pricing:</strong> camps, summer intensives and 8-week sessions billed as a single fee.</li>
<li><strong>Private lessons:</strong> billed per lesson or as a package, often at a higher hourly rate than group classes.</li>
<li><strong>Competition team fees:</strong> choreography fees per routine, competition entry fees, and travel, often billed separately from regular tuition.</li>
</ul>

<h2>What fees go on a dance studio invoice?</h2>
<p>Beyond tuition, studios typically bill several seasonal fees. Each should appear as its own line with the student's name, so parents can see exactly what they are paying for.</p>
<table><thead><tr><th>Fee</th><th>When billed</th><th>Notes</th></tr></thead><tbody>
<tr><td>Registration fee</td><td>At enrollment, once per season</td><td>Per student or per family; usually non-refundable</td></tr>
<tr><td>Costume fee</td><td>Fall or early winter</td><td>Per costume, per routine; ordered from suppliers months ahead</td></tr>
<tr><td>Recital fee</td><td>Winter or spring</td><td>Covers venue, staff, programs; may include tickets</td></tr>
<tr><td>Choreography fee</td><td>Start of competition season</td><td>Per solo, duet or group routine</td></tr>
<tr><td>Competition entry fees</td><td>Before each event</td><td>Often passed through at cost</td></tr>
<tr><td>Private lesson</td><td>Monthly or per lesson</td><td>Show date and teacher</td></tr>
<tr><td>Late fee</td><td>After the grace period</td><td>Flat fee stated in your policies</td></tr>
<tr><td>Returned payment fee</td><td>When a check or ACH payment fails</td><td>Check state limits on returned check fees</td></tr>
</tbody></table>
<p>Costumes deserve special attention. Studios usually pay suppliers in advance and cannot return custom-sized costumes. Collect a <a href="/blog/deposit-invoice">costume deposit</a> early in the season, and state in writing that ordered costumes are non-refundable even if the dancer withdraws.</p>

<h2>Dance studio invoice example</h2>
<p>Here is a complete November invoice for a family with two dancers. Maya takes two hours a week (ballet and jazz). Leo takes one hour of hip hop and gets a 10% sibling discount on his tuition. Costume fees and the per-family recital fee are billed this month. The sales tax rate is illustrative and applies to costumes only, because in this example state dance instruction is not taxable but costumes sold to families are.</p>
<p><strong>Bright Steps Dance Academy</strong> | Invoice DS-2627-0412 | Invoice date: November 1, 2026 | Billing period: November 2026 | Due: November 10, 2026<br>Bill to: Ana Rivera (Family account 1187)</p>
<table><thead><tr><th>Student</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Maya Rivera</td><td>November tuition, 2 hrs/week (Ballet 2, Jazz 2)</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td>Leo Rivera</td><td>November tuition, 1 hr/week (Hip Hop Junior)</td><td>1</td><td>$80.00</td><td>$80.00</td></tr>
<tr><td>Leo Rivera</td><td>Sibling discount, 10% of tuition</td><td>1</td><td>-$8.00</td><td>-$8.00</td></tr>
<tr><td>Maya Rivera</td><td>Recital costumes (Ballet 2, Jazz 2)</td><td>2</td><td>$75.00</td><td>$150.00</td></tr>
<tr><td>Leo Rivera</td><td>Recital costume (Hip Hop Junior)</td><td>1</td><td>$70.00</td><td>$70.00</td></tr>
<tr><td>Family</td><td>Spring recital fee (includes 2 tickets)</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$487.00</strong></td></tr>
<tr><td colspan="4">Sales tax on costumes, 6% of $220.00 (illustrative rate)</td><td>$13.20</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$500.20</strong></td></tr>
</tbody></table>
<p>Terms printed under the table: "Tuition is due by the 10th of each month. A $15 late fee applies to balances unpaid after the 15th. Costumes are ordered on November 20 and are non-refundable once ordered. Withdrawals require 30 days' written notice." You can recreate this layout in a couple of minutes in our <a href="/invoice-generator">free invoice generator</a>, adding the student name to each line description.</p>

<h2>How to create a dance studio invoice step by step</h2>
<ol>
<li><strong>Set your season calendar and tuition chart.</strong> Decide the season length, holidays, recital date and the tuition for each weekly-hour tier before registration opens.</li>
<li><strong>Collect registration details.</strong> Get the paying parent's name, email, billing address and each student's classes. Have parents sign your policies, including withdrawal and costume rules.</li>
<li><strong>Bill registration and the first month.</strong> Send the first invoice at enrollment with the registration fee and first month's tuition.</li>
<li><strong>Schedule monthly invoices.</strong> Send tuition invoices on the same day each month, typically a week or two before the due date. Our guide to <a href="/blog/recurring-invoices-guide">setting up recurring invoices</a> covers the mechanics.</li>
<li><strong>Add seasonal fees at the right time.</strong> Add costume deposits in the fall and recital fees in winter, with a note on the previous month's invoice so families can plan.</li>
<li><strong>Apply discounts consistently.</strong> Show discounts as negative lines, not by quietly lowering the price, so parents see the value they receive.</li>
<li><strong>Record payments and send receipts.</strong> Mark invoices paid and send a <a href="/blog/payment-receipt-template">payment receipt</a> when asked, which some families need for scholarship programs or reimbursement.</li>
<li><strong>Follow up on overdue accounts.</strong> Send a friendly reminder after the due date, then apply the late fee per your policy.</li>
</ol>

<h2>How to handle mid-season changes</h2>
<h3>Students who start late</h3>
<p>If a student joins mid-month, you can charge a <a href="/blog/prorated-invoice">prorated invoice</a> based on the number of remaining classes. For example, a student joining a $80/month class with two of four classes left would pay $40 for that month. Some studios skip proration and start billing the next month, offering a free trial class instead.</p>
<h3>Adding or dropping classes</h3>
<p>When a dancer adds a class, move them to the next tuition tier starting the next billing period. When they drop a class, apply your notice period. Document the change in a short note on the invoice ("Added Contemporary 2 effective December 1, 2026") so the history is clear.</p>
<h3>Withdrawals</h3>
<p>Most studios require written notice, often 30 days, and continue to bill tuition through the notice period. Costume and recital fees already paid are usually not refunded once ordered or committed. State this in writing at registration and repeat it in the invoice terms.</p>

<h2>Payment methods, autopay and late fees</h2>
<p>The single most effective tool for dance studio cash flow is autopay. Families save a card or bank account at registration and are charged on the due date. ACH bank payments cost less to process than cards, which matters on hundreds of monthly tuition payments; see our guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a>. Some studios add a small <a href="/blog/convenience-fee">convenience fee</a> for card payments, but surcharging and convenience fee rules vary by state and card network, so check before you add one.</p>
<p>For families who pay manually, a clear due date and a reasonable late fee work best. A typical policy is: due on the 10th, late fee after the 15th, and classes paused after 30 days unpaid. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to set and communicate them. A family <a href="/blog/customer-payment-portal">payment portal</a> where parents can see all invoices and pay online also cuts down on calls to the front desk.</p>

<h2>Is dance tuition taxable?</h2>
<p>Sales tax treatment varies by state. In most states, instruction in dance is a nontaxable service, while tangible goods you sell, such as costumes, dance shoes, dancewear and recital DVDs or downloads, are often taxable. A few states tax certain fitness or recreational services, so check the rules where you operate; our overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> is a good starting point. Keep taxable items on separate lines, and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to compute tax on the taxable portion only.</p>
<p>Parents sometimes ask whether dance tuition qualifies for dependent care benefits. Under IRS Publication 503, expenses that are mainly for lessons or education, rather than care while a parent works, generally do not qualify. You can provide an itemized receipt, but eligibility is decided by the parent's plan or tax preparer. This is general information, not tax advice.</p>

<h2>Common dance studio invoicing mistakes</h2>
<ul>
<li><strong>Missing student names on lines.</strong> Parents with several children cannot tell which fee belongs to whom, which leads to disputes and delayed payment.</li>
<li><strong>Surprise costume fees.</strong> Announce costume costs at registration and again a month before billing.</li>
<li><strong>Inconsistent discounts.</strong> Applying sibling discounts to some families and not others causes complaints. Write the rule down and apply it every time.</li>
<li><strong>Taxing tuition by mistake</strong> (or failing to tax merchandise). Separate lines solve most of this.</li>
<li><strong>No written withdrawal policy.</strong> Without one, you have little ground to stand on when a family stops paying mid-season.</li>
<li><strong>Billing late in the month.</strong> Invoices sent after classes start get paid later. Send them before the billing period begins.</li>
<li><strong>Skipping receipts and statements.</strong> Year-end statements help families with scholarship applications and reduce questions.</li>
</ul>

<h2>Dance studio invoice checklist</h2>
<ul>
<li>Studio name, contact details and logo</li>
<li>Parent or account holder name and family account number</li>
<li>Unique invoice number, invoice date, billing period and due date</li>
<li>Each student's name, classes and weekly hours</li>
<li>Monthly tuition, plus registration, costume and recital fees as separate lines</li>
<li>Discounts shown as negative lines</li>
<li>Sales tax on taxable merchandise only</li>
<li>Late fee, withdrawal and costume refund policy in the terms</li>
<li>Payment methods and portal or autopay instructions</li>
</ul>
<p>A dance studio invoice template that lists each dancer, separates tuition from costume and recital fees, and states your policies clearly will get you paid faster and save hours at the front desk. If you do not need full studio management software yet, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a clean PDF in your browser that you can download and email to families. For more layouts, browse our <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "grant-writer-invoice-template",
    title: "Grant Writer Invoice Template: Hourly and Project Fees",
    description:
      "Grant writer invoice template for hourly, project and retainer fees, why percentage-based fees break GPA and AFP ethics codes, and a full example invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["nonprofit-invoice-template", "consulting-invoice-template", "small-business-grants"],
    faqs: [
      {
        q: "Can a grant writer be paid from the grant itself?",
        a: "Usually not for the proposal that won the grant. Most foundations do not allow funds to pay for work done before the award, and under the federal Uniform Guidance proposal preparation costs are normally treated as indirect costs rather than charged directly to an award. A nonprofit should plan to pay its grant writer from general operating funds. Ongoing grant management work after an award may be allowable if it is in the approved budget.",
      },
      {
        q: "What is a fair hourly rate for a grant writer?",
        a: "Rates depend on experience, credentials such as the GPC, the complexity of the funder, and the market. Federal applications with detailed budgets and compliance attachments command higher rates than short foundation letters of inquiry. Rather than relying on a single number, compare rates from local consultants and published fee surveys, and estimate total hours for the project so the client can budget the full cost.",
      },
      {
        q: "Should a grant writer charge by the hour or by the project?",
        a: "Both work. Hourly billing suits open-ended work like prospect research, grant calendars and ongoing support. Project fees suit well-defined deliverables, such as a specific foundation proposal or a federal application, because the nonprofit knows the cost upfront. Many grant writers estimate hours, then quote a flat fee with a clear scope and a change-order rate for extra work.",
      },
      {
        q: "Can a grant writer get a bonus if the grant is awarded?",
        a: "The GPA Code of Ethics allows performance-based compensation only when it is consistent with prevailing practice and not based on a percentage of grant funds. A predetermined bonus that is not calculated from the award amount may be acceptable to some organizations, but many nonprofits and funders avoid success fees entirely. If you consider any bonus, put it in writing and keep it independent of the award size.",
      },
      {
        q: "Do grant writers ask for a deposit?",
        a: "Many do, especially for project fees. A common approach is 50% at signing and 50% at submission, or a retainer that is applied to the final invoice. Because payment should not depend on the funding decision, the final payment is usually due at submission, not when the award is announced. State the payment schedule in the contract and reference it on each invoice.",
      },
      {
        q: "Does a nonprofit issue a 1099 to a grant writer?",
        a: "If the grant writer is an independent contractor and not a corporation, a nonprofit that pays them $2,000 or more for services in 2026 generally must file Form 1099-NEC. The nonprofit should collect a Form W-9 before the first payment. Tax-exempt status does not remove information reporting obligations. Check irs.gov or a tax professional for your specific situation.",
      },
      {
        q: "What should a grant writing contract include?",
        a: "Scope of work (funders, deliverables, page limits), what the client must supply, deadlines for drafts and reviews, the fee and payment schedule, a statement that payment does not depend on funding, who submits the application, ownership of the final text, confidentiality, and how extra work is priced. A clear contract makes invoicing straightforward because each invoice simply references a milestone in it.",
      },
      {
        q: "Who should submit the application, the grant writer or the nonprofit?",
        a: "Usually the nonprofit, through its own funder portal or Grants.gov account, because it is the legal applicant and must certify the information. The grant writer can prepare and upload documents if given access, but the authorized organizational representative should do the final submission. Billing for submission support as a separate line makes it clear what the writer did.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A grant writer invoice template bills a nonprofit, school or agency for grant research, proposal writing, budgets and submission support. It shows hours or project milestones, the rate, any retainer applied and the balance due. It should never bill a percentage of the grant award, because the Grant Professionals Association and AFP ethics codes prohibit percentage-based compensation.</p>

<p>Grant writing is professional consulting work for clients who answer to boards and funders, so they expect clean, defensible invoices. This guide explains how grant writers structure hourly, project and retainer fees, why commission and contingency pricing is off the table, and how to lay out a grant writer invoice that a nonprofit finance team can approve without questions. A full example invoice with numbers is included.</p>

<h2>What is a grant writer invoice?</h2>
<p>A grant writer invoice is a bill from an independent grant writer or grant consulting firm to a client organization for grant-related services. Typical services include funder prospect research, writing letters of inquiry and full proposals, preparing budgets and budget justifications, collecting attachments, submitting through funder portals or Grants.gov, and post-award reporting.</p>
<p>Clients are usually nonprofits, schools, tribal governments, local agencies and sometimes small businesses applying for programs like those in our <a href="/blog/small-business-grants">small business grants</a> guide. Because nonprofit clients often have a treasurer or finance committee approving payments, the invoice needs to match the contract and show work in a way that is easy to audit. If you also bill other nonprofit work, see our <a href="/blog/nonprofit-invoice-template">nonprofit invoice template</a> for how organizations themselves bill fee-for-service work.</p>

<h2>Why grant writers should not charge a percentage of the grant</h2>
<p>New grant writers and nonprofit boards sometimes suggest a commission: "We'll pay you 10% of whatever you win." It sounds low-risk for the nonprofit, but the major professional associations treat it as unethical, and many funders will not accept it.</p>
<ul>
<li><strong>Grant Professionals Association (GPA):</strong> the <a href="https://grantprofessionals.org/page/ethics">GPA Code of Ethics</a> states that it is a violation for a member to accept a percentage of a grant award as compensation for grant writing or any services related to a grant submission. GPA says grant professionals should be paid by salary or fee regardless of the outcome, and that performance-based pay is acceptable only if it follows prevailing practice and is not based on a percentage of grant funds. Members who violate the code risk their membership and the Grant Professional Certified (GPC) credential.</li>
<li><strong>Association of Fundraising Professionals (AFP):</strong> Standard 24 of the <a href="https://afpglobal.org/ethics/code-ethics">AFP Code of Ethical Standards</a> (the revised code that became enforceable on January 1, 2025) tells members to decline receiving or paying finder's fees, commissions, or compensation based on a percentage of funds raised. The earlier version of the code had a similar rule as Standard 21.</li>
</ul>
<p>The reasons go beyond rule-following:</p>
<ul>
<li><strong>Funders generally won't pay for it.</strong> Grant funds are restricted to the purposes in the approved budget. Most foundations will not let a nonprofit spend award money on a fee for work done before the award. Under the federal Uniform Guidance, proposal preparation costs are normally treated as indirect costs (2 CFR 200.460), not charged as a direct line on the award.</li>
<li><strong>It creates a conflict of interest.</strong> A writer paid on commission has an incentive to chase large grants that may not fit the mission or to overstate capacity.</li>
<li><strong>It ignores how grants work.</strong> Strong proposals are often declined for reasons outside the writer's control, such as funder priorities or budget cuts. The work still had value.</li>
</ul>
<p>The practical takeaway for invoicing: every line on a grant writer invoice should describe work performed or a fixed deliverable, and the amount should be the same whether the proposal is funded or not.</p>

<h2>How do grant writers charge?</h2>
<p>There are three common fee structures. Many consultants use a mix, depending on the client.</p>
<table><thead><tr><th>Model</th><th>Best for</th><th>How it appears on the invoice</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Prospect research, editing, open-ended support, smaller clients</td><td>Date or task, hours, hourly rate, line total</td></tr>
<tr><td>Project (flat) fee</td><td>A specific proposal, LOI or federal application with a clear scope</td><td>Milestone, percentage of fee, amount</td></tr>
<tr><td>Monthly retainer</td><td>Ongoing grant programs: calendar, several proposals, reports</td><td>Retainer for the month, hours included, overage hours</td></tr>
</tbody></table>
<h3>Hourly billing</h3>
<p>Hourly billing is transparent and suits work that is hard to scope. Track time by task (research, drafting, budget, revisions, submission) and summarize on the invoice. A <a href="/blog/timesheet-template">timesheet template</a> makes this easier, and our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers rounding and minimum increments.</p>
<h3>Project fees</h3>
<p>Many nonprofits prefer a fixed project fee because it fits their budget process. Estimate the hours, multiply by your rate, add a buffer for revisions, and quote one price. Then invoice in milestones, for example 50% at contract signing and 50% at submission. The final payment should be tied to submission, not to the funding decision.</p>
<h3>Retainers</h3>
<p>A monthly retainer covers a set number of hours or defined services, such as maintaining a grant calendar, writing two foundation proposals and one report per month. Our <a href="/blog/retainer-invoice">retainer invoice guide</a> explains how to show hours used and overages.</p>
<p>Rates vary widely by region, experience and complexity, so we do not quote a single figure. For context on freelance writing pricing generally, see our guide to <a href="/blog/freelance-writing-rates">freelance writing rates</a>, and expect federal applications with complex budgets and compliance forms to sit at the higher end of any range.</p>

<h2>How to estimate a flat project fee for a grant proposal</h2>
<p>Most nonprofits ask "how much will this cost?" before they ask about rates. A flat fee built from an hours estimate answers that and protects you from underpricing. Break the proposal into tasks and estimate each one based on past projects:</p>
<table><thead><tr><th>Task</th><th>Foundation proposal (estimated hours)</th><th>Federal application (estimated hours)</th></tr></thead><tbody>
<tr><td>Kickoff call and document gathering</td><td>2</td><td>4</td></tr>
<tr><td>Reading the funder guidelines or notice of funding opportunity</td><td>1</td><td>5</td></tr>
<tr><td>Narrative drafting</td><td>14</td><td>35</td></tr>
<tr><td>Budget and budget justification</td><td>4</td><td>12</td></tr>
<tr><td>Logic model, evaluation plan and forms</td><td>3</td><td>10</td></tr>
<tr><td>Revisions and final edit</td><td>4</td><td>8</td></tr>
<tr><td>Attachments and submission support</td><td>2</td><td>6</td></tr>
<tr><td><strong>Total</strong></td><td><strong>30</strong></td><td><strong>80</strong></td></tr>
</tbody></table>
<p>At an illustrative $90 per hour, the foundation proposal comes to $2,700 and the federal application to $7,200. Many consultants add a 10% to 15% buffer for client delays and unexpected attachments, then round. The foundation proposal might be quoted at $3,000, payable $1,500 at signing and $1,500 at submission. The hours figures above are examples, not benchmarks: track your own time on every project so future quotes rest on real data.</p>
<p>Spell out what the fee does not cover: additional funders, a second full rewrite because the program design changed, or post-award reporting. Each of those is quoted separately. This is the same discipline any freelancer uses with a <a href="/blog/freelance-contract-template">freelance contract</a>, and it keeps a flat fee from turning into unpaid hours.</p>

<h2>What should a grant writer invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Your business details</td><td>Name or firm, address, email, phone, EIN or business ID if you use one</td></tr>
<tr><td>Client details</td><td>Organization legal name, contact (executive director or finance lead), address</td></tr>
<tr><td>Invoice number and date</td><td>GW-2026-031, November 3, 2026</td></tr>
<tr><td>Contract or SOW reference</td><td>"Per agreement dated September 15, 2026"</td></tr>
<tr><td>Project and funder</td><td>"Community Health Foundation, 2027 Capacity Building Grant"</td></tr>
<tr><td>Line items</td><td>Tasks with hours and rate, or milestone with fee</td></tr>
<tr><td>Retainer or deposit applied</td><td>Negative line showing prior payment</td></tr>
<tr><td>Balance due and terms</td><td>Net 15 or net 30, payment methods</td></tr>
<tr><td>Fee statement</td><td>"Fees are not contingent on funding decisions."</td></tr>
</tbody></table>
<p>A <a href="/blog/statement-of-work-template">statement of work</a> that lists funders, deliverables and deadlines makes each invoice easy to approve, because every line maps to the agreement.</p>

<h2>Grant writer invoice example</h2>
<p>This example shows an hourly invoice for a full foundation proposal. The rate is illustrative. The client paid a $1,000 retainer at signing, which is applied to this invoice.</p>
<p><strong>Clearpath Grant Services</strong> | Invoice GW-2026-031 | Date: November 3, 2026 | Due: November 18, 2026 (net 15)<br>Bill to: Riverside Youth Literacy Project, Attn: Executive Director<br>Project: Community Health Foundation, 2027 Capacity Building Grant (submitted October 31, 2026)</p>
<table><thead><tr><th>Description</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Funder research and eligibility review</td><td>6.0</td><td>$90.00</td><td>$540.00</td></tr>
<tr><td>Needs statement, program narrative and evaluation plan drafting</td><td>16.0</td><td>$90.00</td><td>$1,440.00</td></tr>
<tr><td>Project budget and budget justification</td><td>5.0</td><td>$90.00</td><td>$450.00</td></tr>
<tr><td>Revisions after board and staff review</td><td>4.0</td><td>$90.00</td><td>$360.00</td></tr>
<tr><td>Attachment assembly and portal submission support</td><td>3.0</td><td>$90.00</td><td>$270.00</td></tr>
<tr><td colspan="3"><strong>Subtotal (34.0 hours)</strong></td><td><strong>$3,060.00</strong></td></tr>
<tr><td colspan="3">Less retainer received September 15, 2026</td><td>-$1,000.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$2,060.00</strong></td></tr>
</tbody></table>
<p>Note under the table: "Fees are for services performed and are not contingent on the funding decision. Payable by ACH or check." Notice what is missing: there is no line tied to the $50,000 requested. That is exactly how it should be. You can build this invoice in our <a href="/invoice-generator">free invoice generator</a> and save it as a PDF for the client's files.</p>

<h2>How to invoice grant writing clients step by step</h2>
<ol>
<li><strong>Agree the scope in writing.</strong> List the funders, deliverables (LOI, full proposal, budget, attachments), draft and review dates, and who submits.</li>
<li><strong>Choose the fee model.</strong> Hourly, project fee or retainer, with a rate for work outside scope. Our <a href="/blog/consulting-invoice-template">consulting invoice template</a> uses the same principles.</li>
<li><strong>Collect a retainer or first milestone.</strong> Invoice at signing so you are not carrying the full risk of a long project.</li>
<li><strong>Track time by task.</strong> Even with a flat fee, tracking helps you price the next proposal accurately.</li>
<li><strong>Invoice at the milestone, not the award.</strong> Send the final invoice when the proposal is submitted. The funding decision can take months.</li>
<li><strong>Reference the contract on every invoice.</strong> Finance committees approve faster when they can match the invoice to an agreement.</li>
<li><strong>Send a W-9 with your first invoice.</strong> The client will need it to issue a 1099-NEC if you are paid $2,000 or more in 2026; see our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a>.</li>
<li><strong>Follow up politely.</strong> Nonprofits often pay on a board or check-signing cycle. Ask about it upfront and time your invoice to meet it.</li>
</ol>

<h2>What about post-award work and grant management?</h2>
<p>After a grant is awarded, many grant writers help with reporting, budget modifications and renewal applications. This is new work, so invoice it separately at your normal rate. Some funders allow grant administration costs to be included in the approved budget, in which case the nonprofit may be able to pay for post-award reporting from the award itself. That is very different from a commission: the cost is disclosed to the funder in advance, approved in the budget, and based on work performed.</p>
<p>For multi-year federal awards, the organization must follow the cost principles in 2 CFR Part 200 and the specific terms of the award. If you are helping a new organization get ready for federal funding, its SAM.gov registration and Unique Entity ID need to be in place before applying through Grants.gov. Our guide to <a href="/blog/how-to-start-a-nonprofit">starting a nonprofit</a> covers the early registration steps.</p>

<h2>Common grant writer invoicing mistakes</h2>
<ul>
<li><strong>Agreeing to a contingency or percentage fee.</strong> It conflicts with the GPA and AFP codes, usually cannot be paid from grant funds, and can damage your reputation with funders.</li>
<li><strong>Waiting for the award to bill.</strong> Tie the final payment to submission.</li>
<li><strong>Vague line items.</strong> "Grant writing, $3,000" invites questions. Break it into tasks or milestones.</li>
<li><strong>No scope limits.</strong> Unlimited revisions or "any grants we find" leads to unpaid work. Price additional proposals and extra rounds separately; see our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a>.</li>
<li><strong>Billing the wrong entity.</strong> Invoice the legal organization (or its fiscal sponsor), not a volunteer's name.</li>
<li><strong>Forgetting the W-9.</strong> Missing tax forms delay the first payment at many nonprofits.</li>
</ul>

<h2>Grant writer invoice checklist</h2>
<ul>
<li>Your name or firm, contact details and invoice number</li>
<li>Client's legal name and the person approving payment</li>
<li>Contract reference, funder name and grant program</li>
<li>Tasks with hours and rate, or milestones with fees</li>
<li>Retainer or deposit applied</li>
<li>Balance due, due date and payment methods</li>
<li>A statement that fees are not contingent on funding</li>
<li>No percentage-of-award line, ever</li>
</ul>
<p>A professional grant writer invoice template bills for your expertise and time, not for the outcome. Keep fees hourly, project-based or on retainer, reference the contract, and send the final invoice at submission. When you are ready, our <a href="/invoice-generator">invoice generator</a> is free, requires no sign-up, and creates a downloadable PDF in your browser. This article is general information, not legal or tax advice.</p>
`,
  },
  {
    slug: "resume-writer-invoice-template",
    title: "Resume Writer Invoice Template: Packages, LinkedIn + Rush",
    description:
      "Resume writer invoice template for resume packages, cover letters, LinkedIn profile writing, revisions and rush fees, with pricing models and a sample invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "editing-proofreading-invoice-template",
      "copywriter-invoice-template",
      "life-coach-invoice-template",
    ],
    faqs: [
      {
        q: "Should resume writers get paid before starting?",
        a: "Most professional resume writers collect full payment or at least 50% before starting work. Clients are individuals, often in a stressful job search, and the finished document has no value to anyone else if they do not pay. Taking payment upfront also commits the client to the intake process. If you split payments, release the final editable files only after the balance is paid.",
      },
      {
        q: "How many revisions should a resume package include?",
        a: "Many writers include one or two rounds of revisions within a set window, such as 14 or 30 days after the first draft. Define what a revision is (changes to wording and emphasis) versus new work (targeting a different industry or adding a new job). Put the policy in your service agreement and on the invoice so additional rounds can be billed at an hourly or flat rate.",
      },
      {
        q: "Can I deduct the cost of a resume writer on my taxes?",
        a: "For employees, generally not at the federal level. Job search expenses used to be a miscellaneous itemized deduction, but that category has been eliminated. Self-employed people who pay for marketing documents for their own business may be able to deduct them as business expenses. This is general information; check with a tax professional for your situation.",
      },
      {
        q: "What is a typical turnaround time for a resume?",
        a: "Standard turnaround is often five to ten business days from the intake call to the first draft, depending on the writer's workload and the client's career level. Executive packages usually take longer because they involve more research and several documents. Many writers offer a rush option, such as 48 to 72 hours, for an added fee shown as its own line on the invoice.",
      },
      {
        q: "Do resume writers offer refunds?",
        a: "Policies vary. Many writers refund before work starts, offer partial refunds after the intake session, and do not refund once a draft is delivered, offering revisions instead. Some professional associations encourage clear written policies. Whatever you choose, state it in your agreement and on your invoice terms, and avoid promising interview or job guarantees you cannot control.",
      },
      {
        q: "Should LinkedIn profile writing be priced separately?",
        a: "Yes, it is usually a separate line or an add-on to a package. A LinkedIn profile involves a headline, an About section, experience entries and skills, written in a different voice from a resume. Pricing it separately lets clients choose, and makes your package discounts visible. If you also update the profile directly for the client, note whether you will need login access.",
      },
      {
        q: "What payment methods do resume writers use?",
        a: "Card payments through an online invoice or checkout page are the most common, because clients are individuals who want to pay immediately. PayPal and Stripe invoices are widely used, and some writers accept Zelle or Venmo for repeat clients. Check each platform's fees and terms for business payments, and send a receipt so the client has a record.",
      },
      {
        q: "Do resume writers need to collect sales tax?",
        a: "In most states, writing a resume is a nontaxable professional service, but a handful of states tax a broader range of services, and selling templates or downloadable products may be treated differently. Check your state's revenue department rules for personal and professional services. If any item is taxable, show tax on that line only.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A resume writer invoice template bills a job seeker for career documents. It lists the package or individual services (resume, cover letter, LinkedIn profile), the career level, included revisions, add-ons like rush delivery, any package discount, deposits paid, and the balance due, plus terms covering refunds, revision windows and file delivery after payment.</p>

<p>Resume writing is a fast, high-volume service sold to individuals, so the invoice has to do a lot of work: confirm exactly what the client is buying, set expectations about revisions and turnaround, and secure payment before files change hands. This guide covers how resume writers price their services, what a resume writer invoice should include, and a complete example invoice for a mid-career client.</p>

<h2>What is a resume writer invoice?</h2>
<p>A resume writer invoice is a bill from a professional resume writer, career coach or career services firm to a client for writing or updating job search documents. Typical services include resume writing, cover letters, LinkedIn profile optimization, federal resumes, executive bios, CV conversions for academic roles, and interview coaching.</p>
<p>Unlike many freelance invoices, the client is usually a private individual, not a company. That changes a few things: clients pay by card or digital wallet, they expect to pay before work starts, and they need the invoice to be simple and friendly. If you also edit other documents, our <a href="/blog/editing-proofreading-invoice-template">editing and proofreading invoice template</a> uses a similar format.</p>

<h2>How do resume writers price their services?</h2>
<p>Most resume writers sell packages based on career level, because a senior executive's resume takes more research and strategy than a recent graduate's. Add-ons let clients customize.</p>
<table><thead><tr><th>Package or service</th><th>Typical contents</th><th>Illustrative price range</th></tr></thead><tbody>
<tr><td>Entry-level resume</td><td>Intake questionnaire, one-page resume, one revision round</td><td>$150 to $300</td></tr>
<tr><td>Professional (mid-career) resume</td><td>Intake call, 1 to 2 page resume, two revision rounds</td><td>$300 to $600</td></tr>
<tr><td>Executive resume</td><td>Strategy call, resume, leadership summary, two or more rounds</td><td>$700 to $2,000+</td></tr>
<tr><td>Cover letter</td><td>Targeted letter or adaptable template</td><td>$75 to $200</td></tr>
<tr><td>LinkedIn profile</td><td>Headline, About section, experience entries, skills</td><td>$150 to $400</td></tr>
<tr><td>Federal resume</td><td>USAJOBS-format resume with detailed duties and hours</td><td>$400 to $1,200</td></tr>
<tr><td>Rush delivery</td><td>First draft in 48 to 72 hours</td><td>Flat fee or 20% to 30% of package</td></tr>
<tr><td>Extra revision round</td><td>Changes beyond the included rounds</td><td>Hourly or flat fee</td></tr>
</tbody></table>
<p>These ranges are illustrative, based on common package structures rather than a formal survey. Your rates depend on credentials (such as the CPRW from the Professional Association of Résumé Writers and Career Coaches, or certifications from the National Résumé Writers' Association), niche expertise and market. For general guidance on setting writing rates, see our <a href="/blog/freelance-writing-rates">freelance writing rates guide</a> and <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>
<h3>Packages versus a la carte</h3>
<p>Packages simplify buying decisions and raise average order value. A la carte pricing suits returning clients who only need a cover letter or a refresh. On the invoice, you can show a package as one line, or list each component and then a package discount as a negative line. The second approach shows the client the value they are getting and makes partial refunds easier to calculate if a client cancels before all documents are delivered.</p>
<h3>Hourly pricing</h3>
<p>Hourly billing is less common for resumes but useful for updates, coaching sessions and extra revisions. If you bill hourly, set a minimum (for example, one hour) and state your rate in the agreement.</p>

<h2>What should a resume writer invoice include?</h2>
<table><thead><tr><th>Field</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Your business name and contact details</td><td>Professional appearance and a record for the client</td></tr>
<tr><td>Client name and email</td><td>Individuals rarely need a postal address, but include it if you collect sales tax</td></tr>
<tr><td>Invoice number, date and due date</td><td>Tracking and follow-up; use the <a href="/tools/invoice-number-generator">invoice number generator</a> if you need a format</td></tr>
<tr><td>Package name and career level</td><td>Confirms scope (for example, "Professional resume, mid-career")</td></tr>
<tr><td>Included revisions and window</td><td>"Two revision rounds within 30 days of first draft"</td></tr>
<tr><td>Add-ons</td><td>Cover letter, LinkedIn, rush, extra rounds</td></tr>
<tr><td>Discounts</td><td>Package or referral discount as a negative line</td></tr>
<tr><td>Deposit paid and balance due</td><td>Clear payment status</td></tr>
<tr><td>Terms</td><td>Refund policy, file delivery after payment, no job guarantee</td></tr>
</tbody></table>

<h2>Resume writer invoice example</h2>
<p>Jordan Lee is a mid-career operations manager who bought a professional package with a cover letter and LinkedIn profile, and asked for rush delivery. Jordan paid a 50% deposit at booking. Prices are illustrative.</p>
<p><strong>Northline Career Writing</strong> | Invoice RW-2026-118 | Date: October 29, 2026 | Due: on delivery of first drafts<br>Bill to: Jordan Lee, jordan.lee@example.com</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Professional resume, mid-career (intake call, 2 revision rounds within 30 days)</td><td>1</td><td>$425.00</td><td>$425.00</td></tr>
<tr><td>Targeted cover letter</td><td>1</td><td>$125.00</td><td>$125.00</td></tr>
<tr><td>LinkedIn profile rewrite (headline, About, experience, skills)</td><td>1</td><td>$195.00</td><td>$195.00</td></tr>
<tr><td>Rush delivery, first drafts within 48 hours</td><td>1</td><td>$100.00</td><td>$100.00</td></tr>
<tr><td>Package discount (resume + cover letter + LinkedIn)</td><td>1</td><td>-$75.00</td><td>-$75.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$770.00</strong></td></tr>
<tr><td colspan="3">Deposit paid October 27, 2026</td><td>-$385.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$385.00</strong></td></tr>
</tbody></table>
<p>Terms: "Final editable Word and PDF files are delivered after the balance is paid. Additional revision rounds after 30 days are billed at $60 per hour. Results such as interviews or job offers are not guaranteed." You can create this invoice in our <a href="/invoice-generator">free invoice generator</a> in a few minutes and email the PDF with the drafts.</p>

<h2>How to invoice resume writing clients step by step</h2>
<ol>
<li><strong>Publish clear packages.</strong> Put package contents, turnaround and revision limits on your website or price sheet so clients self-select.</li>
<li><strong>Send a short service agreement.</strong> Cover scope, revisions, turnaround, refund policy and confidentiality. Our <a href="/blog/freelance-contract-template">freelance contract template</a> is a good base.</li>
<li><strong>Invoice the deposit or full fee at booking.</strong> Use a <a href="/blog/payment-request-template">payment request</a> or invoice with a pay-now link.</li>
<li><strong>Run the intake.</strong> Collect the client's current resume, target roles and achievements. Note the intake date, since your turnaround clock starts here.</li>
<li><strong>Deliver drafts and track revisions.</strong> Record each revision round and the date so you can enforce the window.</li>
<li><strong>Invoice the balance at draft delivery.</strong> Release final editable files when paid, then mark the invoice as paid with a <a href="/blog/paid-invoice-template">paid invoice</a> or receipt.</li>
<li><strong>Bill extras separately.</strong> Targeting a second industry or a new job title is new work, not a revision.</li>
</ol>

<h2>How to handle revisions, rush fees and scope changes</h2>
<p>Revisions are where resume writers lose the most unpaid time. A clear definition helps: a revision changes wording, emphasis, formatting or order of existing content. New work includes a different target role, a new job added after drafting, or a second version for another industry.</p>
<p>When a client asks for new work, send a short note quoting the price, then add it to the next invoice or send a separate one. Our guide to <a href="/blog/scope-creep-change-order">managing scope creep</a> has wording you can adapt. Rush fees should be agreed before you start, shown as their own line, and only charged if you hit the promised turnaround.</p>
<p>If a client cancels after intake but before drafts, many writers keep a portion of the fee for time already spent, similar to a <a href="/blog/kill-fee">kill fee</a>. State the amount or percentage in your agreement.</p>

<h2>How to price specialized resumes and add-ons</h2>
<p>Not every resume takes the same effort, and your invoice should reflect the differences. A few common specialties:</p>
<h3>Federal resumes</h3>
<p>Federal job applications through USAJOBS usually require far more detail than private-sector resumes: duties, accomplishments, and often hours worked per week and supervisor information for each role. Federal resumes can run several pages and must match the qualifications in the job announcement. Price them as a separate package and describe them clearly on the invoice ("Federal resume, USAJOBS format, targeted to GS-0343 announcement").</p>
<h3>Executive packages</h3>
<p>Executive clients often need a resume, a leadership or board bio, a LinkedIn profile and targeted cover letters. Research takes longer, and clients expect more strategy calls. List each document so the client sees what the package includes, and consider splitting payment 50/50 to reflect the longer timeline.</p>
<h3>Academic CVs and career changers</h3>
<p>Converting a long academic CV into an industry resume, or repositioning a career changer, involves rethinking the whole document. Quote these at your professional or executive tier rather than entry level, even if the client is early in a new field.</p>
<h3>Ongoing career support</h3>
<p>Some writers sell interview coaching, job search strategy sessions or "update" packages a year or two later. Price coaching per session and updates at a reduced rate for past clients. These repeat sales are often the most profitable part of a resume business because the intake work is already done.</p>

<h2>Sample terms for a resume writer invoice</h2>
<p>Short, plain terms at the bottom of the invoice prevent most disputes. You can adapt these:</p>
<ul>
<li>"Payment of 50% is due at booking; the balance is due on delivery of first drafts."</li>
<li>"Includes two revision rounds requested within 30 days of the first draft. Additional rounds are billed at $60 per hour."</li>
<li>"Final editable files are delivered after payment in full."</li>
<li>"Cancellation before the intake call: full refund. After the intake call and before drafts: 50% refund."</li>
<li>"Client is responsible for the accuracy of all employment dates, titles and credentials provided."</li>
<li>"Interview or job offer outcomes are not guaranteed."</li>
</ul>
<p>The accuracy clause matters. You are writing from information the client supplies, and a misstatement on a resume belongs to the client. Keep a copy of the intake questionnaire with your invoice records.</p>

<h2>Payment methods and getting paid upfront</h2>
<p>Because clients are individuals, the easiest way to get paid is a card or wallet payment from a link on the invoice. Common options include Stripe and PayPal invoices; see our guide to <a href="/blog/how-to-send-paypal-invoice">sending a PayPal invoice</a>. Some writers accept Zelle or Venmo from clients they know, but read our overview of <a href="/blog/venmo-zelle-cash-app-invoice">invoicing with Venmo, Zelle and Cash App</a> first, since buyer protection and business account rules differ.</p>
<p>Many clients book from their phone, so it helps to send a short message with the invoice link; our guide on <a href="/blog/how-to-send-an-invoice-by-text">how to send an invoice by text</a> shows how. Whatever the method, require payment before releasing final editable files. That single rule removes most collection problems in this business.</p>

<h2>Taxes for resume writers</h2>
<p>Most resume writers are self-employed and report income on Schedule C. If you work with businesses (for example, outplacement firms that hire you to write for laid-off employees), they may ask for a W-9 and issue a 1099-NEC if they pay you $2,000 or more for services in 2026. Individual clients paying for their own job search do not issue 1099s. Set aside money for <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</p>
<p>Clients sometimes ask whether they can deduct your fee. For employees, job search costs are generally no longer deductible on federal returns because the miscellaneous itemized deduction was eliminated. This is general information, not tax advice.</p>

<h2>Common resume writer invoicing mistakes</h2>
<ul>
<li><strong>Releasing editable files before payment.</strong> Send watermarked PDFs for review, and final files after payment.</li>
<li><strong>Unlimited revisions.</strong> Define rounds and a time window.</li>
<li><strong>Vague package names.</strong> "Gold package" means nothing on a receipt. Describe the contents.</li>
<li><strong>Promising results.</strong> Avoid guarantees of interviews or offers in your invoice terms or marketing.</li>
<li><strong>No refund policy.</strong> A written policy prevents disputes and chargebacks.</li>
<li><strong>Hiding discounts.</strong> Show discounts as separate lines so clients see the value.</li>
</ul>

<h2>Resume writer invoice checklist</h2>
<ul>
<li>Business name, contact details, invoice number and date</li>
<li>Client name and email</li>
<li>Package name, career level and contents</li>
<li>Revision rounds and window</li>
<li>Add-ons such as cover letter, LinkedIn and rush</li>
<li>Discounts, deposit paid and balance due</li>
<li>Refund, file delivery and no-guarantee terms</li>
<li>Payment link or methods</li>
</ul>
<p>A resume writer invoice template that names the package, limits revisions and requires payment before final files are released protects your time and keeps clients happy. Our <a href="/invoice-generator">invoice generator</a> is free, has no sign-up, and creates a PDF in your browser you can download and send. For other layouts, see our <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "recruiter-invoice-template",
    title: "Recruiter Invoice Template: Placement Fees + Guarantees",
    description:
      "Recruiter invoice template for contingency and retained placement fees as a percentage of first-year salary, with guarantee terms and worked examples.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "staffing-agency-invoice-template",
      "how-to-start-a-recruiting-agency",
      "hr-consultant-invoice-template",
    ],
    faqs: [
      {
        q: "When should a recruiter send the placement fee invoice?",
        a: "Most agreements trigger the invoice when the candidate accepts the offer or on the candidate's start date, with payment due net 15 or net 30 from the invoice date. Billing at the start date is more common because the employer knows the hire actually showed up. Whatever you choose, state the trigger in the fee agreement and send the invoice on that day.",
      },
      {
        q: "Is the placement fee based on base salary or total compensation?",
        a: "It depends on the agreement. Many contingency agreements use first-year base salary, while retained searches often use total first-year cash compensation, including target bonus. Sign-on bonuses, equity and benefits are usually excluded unless stated. Define the basis precisely in the contract and repeat it on the invoice so the client's finance team can verify the calculation.",
      },
      {
        q: "What happens if a placed candidate leaves during the guarantee period?",
        a: "The agreement decides. Common remedies are a free replacement search, a full or prorated refund, or a credit toward a future placement. Most guarantees require the client to have paid the fee on time and exclude departures caused by layoffs, restructuring or a change in the job. Guarantee periods are commonly 60 to 90 days from the start date.",
      },
      {
        q: "Do recruiters charge sales tax on placement fees?",
        a: "In most states, employment placement services are not subject to sales tax, but a few states tax certain personnel or employment services. Temporary staffing is treated differently from permanent placement in some states. Check the rules in the states where you and your clients operate before invoicing, and consult a tax professional if you place candidates across state lines.",
      },
      {
        q: "Can a recruiter charge the candidate instead of the employer?",
        a: "In most US professional recruiting, the employer pays and the candidate pays nothing. Several states regulate private employment agencies that charge job seekers fees, requiring licensing, fee caps or written contracts. If you are considering any candidate-paid model, check your state's employment agency laws first. Employer-paid fees are the norm and are what this template covers.",
      },
      {
        q: "What if the client hires a candidate I referred after we stop working together?",
        a: "Good fee agreements include a referral or ownership period, often 6 to 12 months, during which the fee is still owed if the client hires a candidate you presented. Keep records of each submission, including the date and the role. If a hire happens in that window, invoice per the agreement and attach the submission record.",
      },
      {
        q: "How are retained search fees billed?",
        a: "Retained searches are typically billed in installments, often thirds: one at engagement, one at an agreed milestone such as presenting a shortlist or after 30 to 60 days, and the final third at placement. The first installments are usually non-refundable because they pay for the search work. The final invoice reconciles the estimated fee with the actual compensation of the hire.",
      },
      {
        q: "Should a recruiter offer early payment discounts?",
        a: "Some agencies offer a small discount, for example 2% if paid within 10 days, to speed up large placement fees. On a $20,000 fee, that is $400, so weigh it against your cash flow needs. Another approach is to tie the guarantee to on-time payment, which encourages prompt payment without reducing the fee.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A recruiter invoice template bills an employer for a successful hire. It shows the candidate, job title, start date, fee basis (for example, first-year base salary), the fee percentage and amount, any retainer already paid, the guarantee period, payment terms and the balance due. Contingency recruiters invoice at hire; retained recruiters invoice in installments.</p>

<p>Placement fees are large, one-off invoices, often five figures, so a mistake in the salary basis or a missing guarantee clause can delay payment by weeks. This guide explains how recruiters and search firms structure placement fees, the difference between contingency and retained search billing, and how to write an invoice that an employer's accounts payable team will process quickly. It includes worked examples for both models.</p>

<h2>What is a recruiter invoice?</h2>
<p>A recruiter invoice, also called a placement fee invoice, is a bill from a recruiting agency, executive search firm or independent recruiter to a hiring company. It charges for finding and placing a candidate in a permanent role. The fee is usually a percentage of the hire's first-year compensation and is set out in a signed fee agreement or terms of business.</p>
<p>This is different from temporary or contract staffing, where the agency employs the worker and bills hourly with a markup. For that model, see our <a href="/blog/staffing-agency-invoice-template">staffing agency invoice template</a>. Permanent placement invoices are simpler in structure but higher in value, and they come with guarantee terms that do not apply to temp work.</p>

<h2>How are recruiter placement fees calculated?</h2>
<p>The basic formula is: <strong>fee = fee basis x fee percentage</strong>. The fee basis is usually first-year base salary for contingency searches and may be total first-year cash compensation (base plus target bonus) for retained searches.</p>
<p>Industry guides commonly describe contingency fees in the range of about 15% to 25% of first-year base salary, with 20% often cited as typical, and retained search fees higher, often around 25% to 35% of first-year compensation. These are rules of thumb from industry sources rather than an official survey, and fees vary by role, seniority, market and how hard the search is. Treat the figures in this guide as illustrative and set your own rates in your agreement.</p>
<table><thead><tr><th>Feature</th><th>Contingency search</th><th>Retained search</th></tr></thead><tbody>
<tr><td>When paid</td><td>Only if the client hires your candidate</td><td>Installments during the search, regardless of outcome for early payments</td></tr>
<tr><td>Exclusivity</td><td>Often non-exclusive; client may use several agencies</td><td>Exclusive to one firm</td></tr>
<tr><td>Typical roles</td><td>Individual contributors, mid-level, high-volume roles</td><td>Executives, senior leaders, niche specialists</td></tr>
<tr><td>Fee basis</td><td>Usually first-year base salary</td><td>Often first-year base plus target bonus</td></tr>
<tr><td>Invoice timing</td><td>One invoice at offer acceptance or start date</td><td>Usually three invoices (thirds)</td></tr>
<tr><td>Guarantee</td><td>Commonly 60 to 90 days</td><td>Often replacement search for a longer period</td></tr>
</tbody></table>
<p>Some recruiters use a flat fee per hire, especially for high-volume or hourly roles, and some use "container" or engaged searches with a smaller upfront fee and the rest at placement. Whatever the model, the invoice should restate the calculation so the client can check it.</p>

<h2>What should a placement fee invoice include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Agency details</td><td>Legal name, address, contact, tax ID if requested</td></tr>
<tr><td>Client details</td><td>Company legal name, hiring manager, AP email, PO number if issued</td></tr>
<tr><td>Invoice number and date</td><td>RC-2026-0047, November 2, 2026</td></tr>
<tr><td>Agreement reference</td><td>"Per fee agreement dated July 8, 2026"</td></tr>
<tr><td>Candidate and role</td><td>Candidate name, job title, department, location</td></tr>
<tr><td>Key dates</td><td>Offer accepted date and start date</td></tr>
<tr><td>Fee basis</td><td>First-year base salary $92,000</td></tr>
<tr><td>Fee percentage and amount</td><td>20% = $18,400</td></tr>
<tr><td>Credits</td><td>Retainer or engagement fee already paid</td></tr>
<tr><td>Payment terms</td><td>Net 30 from invoice date; see <a href="/blog/net-30-payment-terms">net 30 payment terms</a></td></tr>
<tr><td>Guarantee</td><td>"90-day replacement guarantee from start date, subject to payment within terms"</td></tr>
</tbody></table>
<p>Do not include sensitive candidate details beyond what the client already knows. Name, title and start date are enough; leave out personal contact information and anything from background checks.</p>

<h2>Contingency recruiter invoice example</h2>
<p>A recruiter places a senior accountant with a 20% contingency fee based on first-year base salary. The candidate starts on November 2, 2026, and the agreement says to invoice on the start date.</p>
<p><strong>Summit Talent Partners</strong> | Invoice RC-2026-0047 | Date: November 2, 2026 | Due: December 2, 2026 (net 30)<br>Bill to: Harbor Logistics Inc., Accounts Payable | PO 55120</p>
<table><thead><tr><th>Description</th><th>Basis</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Placement fee: Senior Accountant (candidate: R. Patel), start date November 2, 2026</td><td>$92,000 first-year base salary</td><td>20%</td><td>$18,400.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$18,400.00</strong></td></tr>
</tbody></table>
<p>Terms printed below: "Fee per agreement dated July 8, 2026. 90-day replacement guarantee from the start date applies if this invoice is paid within terms. Guarantee excludes termination due to layoff, restructuring or change in role." Our <a href="/invoice-generator">free invoice generator</a> lets you add the calculation to the line description exactly like this.</p>

<h2>Retained search invoice example</h2>
<p>An executive search firm runs a retained search for a VP of Operations at 30% of first-year total cash compensation. The estimated compensation at engagement is $200,000, so the estimated fee is $60,000, billed in thirds of the estimate. The hire's actual package is $180,000 base plus a $36,000 target bonus, for $216,000 total.</p>
<table><thead><tr><th>Invoice</th><th>Trigger</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>1 of 3 (retainer)</td><td>Signed engagement</td><td>1/3 x $60,000 estimated fee</td><td>$20,000.00</td></tr>
<tr><td>2 of 3</td><td>Shortlist presented (or 45 days)</td><td>1/3 x $60,000 estimated fee</td><td>$20,000.00</td></tr>
<tr><td>3 of 3 (final)</td><td>Offer accepted</td><td>30% x $216,000 = $64,800 actual fee, less $40,000 paid</td><td>$24,800.00</td></tr>
<tr><td colspan="3"><strong>Total fee</strong></td><td><strong>$64,800.00</strong></td></tr>
</tbody></table>
<p>The final invoice reconciles the estimate to the actual fee and shows both prior payments as credits. If your retained agreement uses a fixed fee instead of a percentage, the final invoice is simply the last third. For milestone-style billing in general, see our guide to <a href="/blog/milestone-payments">milestone payments</a> and the <a href="/blog/retainer-invoice">retainer invoice guide</a>.</p>

<h2>Other recruiter fee structures and how to invoice them</h2>
<h3>Flat fee per hire</h3>
<p>For high-volume hourly roles, such as warehouse, call center or retail staff, some recruiters charge a flat amount per hire instead of a percentage. The invoice then lists each hire as a line: name, role, start date and the flat fee. A monthly invoice covering all hires that started in the month keeps paperwork manageable.</p>
<h3>Contract-to-hire conversion fees</h3>
<p>When an agency places a temporary or contract worker and the client later hires that person directly, the agreement usually requires a conversion fee. It often decreases the longer the worker was billed through the agency. For example, an agreement might set a conversion fee of 20% of first-year salary if the client converts within the first 90 days of the assignment, with a lower fee after that and none after a set number of hours. Invoice the conversion as a one-time fee line, referencing the original assignment and the conversion date.</p>
<h3>Engaged or container searches</h3>
<p>A middle ground between contingency and retained, an engaged search asks for a smaller upfront fee (for example, a fixed engagement fee) that is credited against the final placement fee. The invoices look like the retained example below in miniature: one engagement invoice, then a final invoice that shows the full fee less the engagement fee.</p>
<h3>Hourly recruiting (RPO)</h3>
<p>Recruitment process outsourcing and embedded recruiters often bill hourly or a monthly fee, regardless of hires. These invoices follow a <a href="/blog/consulting-invoice-template">consulting invoice</a> format, with hours, roles worked on and expenses such as job board postings.</p>
<table><thead><tr><th>Model</th><th>Invoice trigger</th><th>Lines on the invoice</th></tr></thead><tbody>
<tr><td>Contingency percentage</td><td>Offer acceptance or start date</td><td>Candidate, role, salary basis, percentage, fee</td></tr>
<tr><td>Retained</td><td>Engagement, milestone, placement</td><td>Installment number, calculation, credits</td></tr>
<tr><td>Flat fee per hire</td><td>Start date (often batched monthly)</td><td>Each hire with flat fee</td></tr>
<tr><td>Conversion fee</td><td>Direct hire of a contract worker</td><td>Worker, original assignment, conversion date, fee</td></tr>
<tr><td>Hourly or RPO</td><td>Monthly</td><td>Hours, rate, expenses</td></tr>
</tbody></table>

<h2>How to invoice a placement step by step</h2>
<ol>
<li><strong>Get a signed fee agreement before presenting candidates.</strong> It should cover fee percentage, fee basis, invoice trigger, payment terms, guarantee, and the period during which a fee is owed if the client hires a candidate you presented.</li>
<li><strong>Record each candidate submission.</strong> Keep the date, role and client contact. This protects your fee if the client hires your candidate months later.</li>
<li><strong>Confirm compensation in writing.</strong> When the offer is accepted, ask the client to confirm base salary (and target bonus, if relevant) by email.</li>
<li><strong>Invoice on the trigger date.</strong> Offer acceptance or start date, as agreed. Use an <a href="/tools/invoice-number-generator">invoice number</a> format that ties to the search.</li>
<li><strong>Include a PO number if the client uses them.</strong> Many larger companies will not pay without one.</li>
<li><strong>Track the guarantee period.</strong> Put the guarantee end date on your calendar and check in with the client and candidate before it ends.</li>
<li><strong>Follow up on overdue fees.</strong> Large placement fees are worth a phone call to AP a week before the due date.</li>
</ol>

<h2>How do recruiter guarantees work on invoices?</h2>
<p>A guarantee protects the client if a new hire leaves or is let go for performance within a set period after starting, commonly 60 to 90 days for contingency placements. Typical remedies:</p>
<ul>
<li><strong>Replacement search:</strong> the recruiter finds a replacement at no additional fee. This is the most common remedy and protects your revenue.</li>
<li><strong>Prorated refund:</strong> for example, a refund that decreases the longer the candidate stayed.</li>
<li><strong>Credit:</strong> applied to a future placement fee with the same client.</li>
</ul>
<p>If you issue a refund or credit, send a credit note referencing the original invoice rather than editing the paid invoice. Most guarantees only apply if the client paid the fee within terms, which is a strong incentive for on-time payment. Exclusions usually include layoffs, restructuring, a material change to the role or relocation.</p>

<h2>Tax and legal considerations</h2>
<ul>
<li><strong>Sales tax:</strong> permanent placement fees are not taxable in most states, but a few states tax certain employment or personnel services. Check your state and your clients' states; our overview of <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> is a good starting point.</li>
<li><strong>Licensing:</strong> some states license private employment agencies, especially those that charge job seekers. Employer-paid recruiters are often exempt, but check before you start.</li>
<li><strong>1099s:</strong> if you are an independent recruiter operating as a sole proprietor, clients may issue a 1099-NEC if they pay you $2,000 or more for services in 2026. Provide a W-9 with your first invoice.</li>
<li><strong>Employment law:</strong> fee agreements should not depend on candidate characteristics protected by anti-discrimination law. Keep placement fees tied to compensation and role only.</li>
</ul>
<p>This is general information, not legal or tax advice. If you are setting up an agency, our guide to <a href="/blog/how-to-start-a-recruiting-agency">starting a recruiting agency</a> covers contracts, insurance and licensing in more depth.</p>

<h2>Common recruiter invoicing mistakes</h2>
<ul>
<li><strong>Ambiguous fee basis.</strong> "20% of salary" leaves room to argue about bonuses and sign-on payments. Write "20% of first-year base salary, excluding sign-on bonus and equity."</li>
<li><strong>Invoicing without written salary confirmation.</strong> Get the figure in an email from the client.</li>
<li><strong>Missing PO or wrong legal entity.</strong> Large clients often have several entities; invoice the one that signed the agreement.</li>
<li><strong>Editing paid invoices for refunds.</strong> Issue a credit note instead.</li>
<li><strong>No candidate ownership period.</strong> Without it, a client can hire your candidate a few months later and argue no fee is due.</li>
<li><strong>Letting overdue fees slide.</strong> If a fee is seriously overdue, see our guide to <a href="/blog/collection-agency-for-unpaid-invoices">collection agencies for unpaid invoices</a> before writing it off.</li>
</ul>

<h2>Recruiter invoice checklist</h2>
<ul>
<li>Agency and client legal names, invoice number and date</li>
<li>Fee agreement reference and PO number</li>
<li>Candidate name, job title and start date</li>
<li>Fee basis and percentage, with the calculation shown</li>
<li>Credits for retainers or prior installments</li>
<li>Payment terms and due date</li>
<li>Guarantee period, remedy and conditions</li>
<li>Payment instructions (ACH details or payment link)</li>
</ul>
<p>A recruiter invoice template that shows the fee calculation, references the agreement and states the guarantee gets placement fees paid without back-and-forth. If you place candidates who later need help with HR policies, our <a href="/blog/hr-consultant-invoice-template">HR consultant invoice template</a> covers that work. When you are ready to bill, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and downloads a PDF built right in your browser.</p>
`,
  },
  {
    slug: "hr-consultant-invoice-template",
    title: "HR Consultant Invoice Template: Retainers and Projects",
    description:
      "HR consultant invoice template for monthly retainers, hourly support and projects like employee handbooks and compliance audits, with a sample invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["consulting-invoice-template", "retainer-invoice", "recruiter-invoice-template"],
    faqs: [
      {
        q: "How do HR consultants usually charge?",
        a: "The three common models are hourly billing for ad hoc questions and investigations, project fees for defined deliverables such as an employee handbook or compensation review, and monthly retainers that give a small business ongoing access to HR advice. Many consultants combine them, for example a retainer for routine support plus separate project fees for larger work.",
      },
      {
        q: "What does an HR retainer usually include?",
        a: "A typical retainer includes a set number of hours each month for phone and email advice, policy questions, help with hiring and terminations, and document reviews. It should state what happens to unused hours (expire or roll over for a limited time), the overage rate, response times, and what is excluded, such as investigations or handbook rewrites, which are billed as projects.",
      },
      {
        q: "How much does an employee handbook cost from an HR consultant?",
        a: "Pricing depends on company size, the number of states where employees work, and whether you are writing from scratch or updating an existing handbook. Multi-state employers need state-specific policies or addenda, which add time. Many consultants quote a flat project fee after a short discovery call. Recommend that the client have employment counsel review the final handbook.",
      },
      {
        q: "Should an HR consultant bill for travel time?",
        a: "Decide upfront and put it in the agreement. Some consultants bill travel at the full or a reduced hourly rate, some charge a flat on-site fee, and some include local travel. Mileage and out-of-pocket travel costs are usually reimbursable at cost or at the IRS standard mileage rate. Show them as separate lines with dates and purpose.",
      },
      {
        q: "Can an HR consultant give legal advice?",
        a: "Not unless they are a licensed attorney acting in that role. HR consultants advise on policies, best practices and compliance processes, but should recommend employment counsel for legal opinions, litigation risk and complex terminations. Your contract and invoices should describe services as HR consulting, not legal services, and your professional liability insurance should match the work you do.",
      },
      {
        q: "Do HR consultants charge sales tax?",
        a: "Consulting services are not taxable in most US states, but a few states tax a broad range of services, and some tax specific services like data processing or training materials. If you sell physical products such as printed posters or training kits, those may be taxable. Check your state's rules and separate any taxable items on the invoice.",
      },
      {
        q: "What payment terms should an HR consultant use?",
        a: "Retainers are usually billed in advance on the first of the month and due within 10 to 15 days, or charged automatically. Project fees are often split into a deposit and milestones. Hourly work is billed monthly in arrears with net 15 or net 30 terms. State the terms in the agreement and on each invoice, along with any late fee.",
      },
      {
        q: "How should I show retainer hours on an invoice?",
        a: "Show the monthly retainer as one line, then a short summary of hours included, hours used and the remaining or overage hours. Bill overage hours as a separate line at the agreed rate. Attaching a brief activity log with dates and topics helps the client see the value of the retainer and reduces questions at renewal time.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An HR consultant invoice template bills a business for human resources advice and projects. It shows the retainer or hourly charges for the period, project milestones such as an employee handbook or compliance audit, hours used versus included, overage hours, reimbursable expenses, payment terms and the balance due, with a reference to the consulting agreement.</p>

<p>Independent HR consultants and fractional HR leaders often support small businesses that do not have a full-time HR department. The work mixes ongoing advice with defined projects, so invoices need to show both clearly. This guide explains HR consulting fee models, what to put on an HR consultant invoice, how to bill handbook and compliance projects, and walks through a complete example invoice.</p>

<h2>What is an HR consultant invoice?</h2>
<p>An HR consultant invoice is a bill from an independent human resources consultant, fractional HR provider or HR consulting firm to a client business. Services typically include HR advice, policy development, employee handbooks, job descriptions, compensation reviews, performance management systems, workplace investigations, training, onboarding processes and compliance reviews covering forms like the I-9.</p>
<p>The format follows a standard <a href="/blog/consulting-invoice-template">consulting invoice template</a>, with a few HR-specific details: retainer hour tracking, project phases and careful wording that protects employee confidentiality.</p>

<h2>How do HR consultants charge for their services?</h2>
<table><thead><tr><th>Fee model</th><th>Best for</th><th>Invoice layout</th></tr></thead><tbody>
<tr><td>Monthly retainer</td><td>Small businesses that need ongoing HR access</td><td>Retainer line, hours included and used, overage line</td></tr>
<tr><td>Hourly</td><td>Ad hoc questions, investigations, terminations support</td><td>Date, task, hours, rate</td></tr>
<tr><td>Project fee</td><td>Handbooks, audits, compensation studies, HR system setup</td><td>Milestone, percentage of fee, amount</td></tr>
<tr><td>Per employee per month</td><td>Fractional HR for growing teams</td><td>Headcount x rate per month</td></tr>
<tr><td>Training fee</td><td>Harassment prevention, manager training</td><td>Per session or per attendee</td></tr>
</tbody></table>
<p>Rates depend on experience, credentials such as SHRM-CP, SHRM-SCP, PHR or SPHR, industry specialization and location. We do not cite a single market rate; for general guidance on pricing consulting work, see our guide to <a href="/blog/consulting-rates">consulting rates</a>. Figures in the examples below are illustrative.</p>

<h3>Retainers</h3>
<p>A retainer gives the client predictable access to HR help and gives you steady income. A typical small-business retainer might include a fixed number of hours per month, with response within one business day and overage billed at your hourly rate. Define what is included (advice, document review, help with hiring and terminations) and what is a separate project (handbook rewrites, investigations, audits). Our <a href="/blog/retainer-invoice">retainer invoice guide</a> covers how to present this.</p>
<h3>Project fees</h3>
<p>Projects like an employee handbook have a clear deliverable, so a flat fee works well. Split it into milestones, such as 50% at kickoff and 50% at delivery of the final handbook, or by phase for bigger projects. See our guide to <a href="/blog/milestone-payments">milestone payments</a>.</p>
<h3>Hourly work</h3>
<p>Investigations, complex terminations and one-off questions suit hourly billing. Track time by matter and describe work in neutral terms on the invoice.</p>

<h2>How to design HR retainer tiers</h2>
<p>Offering two or three retainer levels lets small businesses pick the support they need and makes renewals easier to upsell. The example below is illustrative; set your own hours and prices.</p>
<table><thead><tr><th>Tier</th><th>Hours included per month</th><th>Monthly fee (illustrative)</th><th>Typical client</th></tr></thead><tbody>
<tr><td>Essentials</td><td>4</td><td>$650</td><td>Under 15 employees, occasional questions</td></tr>
<tr><td>Standard</td><td>10</td><td>$1,500</td><td>15 to 50 employees, regular hiring and policy work</td></tr>
<tr><td>Fractional HR</td><td>24</td><td>$3,300</td><td>50+ employees, weekly on-site presence</td></tr>
</tbody></table>
<p>Each tier should state the overage rate, whether unused hours roll over (many consultants allow a one-month rollover at most), the response time, and the notice period to cancel. Effective hourly rates usually fall as the tier rises, which rewards clients who commit to more support.</p>
<h3>Per employee per month pricing</h3>
<p>Some fractional HR providers price by headcount instead of hours, for example a set amount per employee per month with a minimum monthly fee. For a 28-person company at an illustrative $45 per employee per month, the invoice would show "HR support, 28 employees x $45 = $1,260." Headcount pricing is simple for the client but can underprice heavy-use months, so state which services are excluded and billed hourly, such as investigations and on-site training. Confirm headcount each month and note it on the invoice so the client can check it against payroll.</p>
<h3>Starting a new retainer client</h3>
<p>New clients often have a backlog: missing job descriptions, outdated policies, incomplete I-9s. Rather than absorbing that in the first month's retainer, quote an onboarding assessment as a separate project, then start the retainer once the basics are in place. This keeps the retainer predictable for both sides and shows the client a clear before and after.</p>

<h2>How to bill an employee handbook project</h2>
<p>Employee handbooks are one of the most common HR consulting projects. Scope depends on the client's size and where employees work. A handbook typically covers:</p>
<ul>
<li>At-will employment statement (for US employers in at-will states) and equal employment opportunity policy</li>
<li>Anti-harassment and complaint procedures</li>
<li>Pay practices: pay periods, overtime under the Fair Labor Standards Act, timekeeping and deductions</li>
<li>Leave policies: paid time off, sick leave (many states and cities require paid sick leave), and FMLA if the employer has 50 or more employees</li>
<li>Benefits overview, remote work, technology and confidentiality policies</li>
<li>Discipline, separation and acknowledgment forms</li>
</ul>
<p>Multi-state employers need state-specific addenda, which is where costs grow. Quote a base fee plus a per-state addendum fee so the client sees why a 3-state company pays more than a single-state one. Include in your scope that the client's employment attorney should review the final document, and say you are not providing legal advice.</p>
<table><thead><tr><th>Handbook milestone</th><th>Deliverable</th><th>Share of fee (example)</th></tr></thead><tbody>
<tr><td>Kickoff</td><td>Discovery call, policy questionnaire, review of current documents</td><td>40%</td></tr>
<tr><td>First draft</td><td>Full draft handbook for client review</td><td>30%</td></tr>
<tr><td>Final</td><td>Final handbook, state addenda, acknowledgment form</td><td>30%</td></tr>
</tbody></table>

<h2>What should an HR consultant invoice include?</h2>
<ul>
<li>Your business name, contact details and logo</li>
<li>Client company legal name, billing contact and address</li>
<li>Invoice number, invoice date, service period and due date</li>
<li>Agreement or statement of work reference</li>
<li>Retainer line with hours included, used and remaining</li>
<li>Overage hours with rate</li>
<li>Project milestones with description and fee</li>
<li>Reimbursable expenses (mileage, travel, background check pass-throughs) with receipts</li>
<li>Payment terms, late fee and payment methods</li>
</ul>
<p>Keep employee details off the invoice. Write "Employee relations consultation (2 matters)" instead of naming an employee or describing a complaint. The client can see the detail in your activity log or case notes, which you share through a secure channel.</p>

<h2>HR consultant invoice example</h2>
<p>A consultant supports a 28-person company on a monthly retainer of 10 hours at $1,500, with overage at $150 per hour. In November 2026, she used 13.5 hours and delivered the final milestone of a handbook update. She also drove to the client's office twice. Mileage is billed at the IRS standard rate of 76 cents per mile for business driving from July 1, 2026; see our <a href="/blog/irs-mileage-rate-2026">IRS mileage rate guide</a>.</p>
<p><strong>Keystone People Advisory</strong> | Invoice HR-2026-112 | Date: December 1, 2026 | Service period: November 2026 | Due: December 15, 2026<br>Bill to: Greenleaf Dental Group LLC, Attn: Practice Administrator | Agreement dated March 1, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>HR advisory retainer, November 2026 (10 hours included)</td><td>1</td><td>$1,500.00</td><td>$1,500.00</td></tr>
<tr><td>Overage hours (13.5 used, 10 included)</td><td>3.5</td><td>$150.00</td><td>$525.00</td></tr>
<tr><td>Employee handbook update, milestone 3 of 3 (final handbook and state addendum)</td><td>1</td><td>$1,800.00</td><td>$1,800.00</td></tr>
<tr><td>Mileage, two on-site visits (2 x 23 miles round trip)</td><td>46</td><td>$0.76</td><td>$34.96</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$3,859.96</strong></td></tr>
</tbody></table>
<p>Attached activity summary: "Nov 4: hiring process review (1.5 h). Nov 6: on-site manager meeting (3.0 h). Nov 12: PTO policy questions (1.0 h). Nov 18: employee relations consultation, 2 matters (4.0 h). Nov 25: on-site I-9 file review (4.0 h)." You can produce an invoice like this in our <a href="/invoice-generator">free invoice generator</a> and attach the activity log as a separate page.</p>

<h2>How to invoice HR consulting clients step by step</h2>
<ol>
<li><strong>Sign an agreement.</strong> Cover services, retainer hours, overage rate, project fees, expenses, confidentiality, and a statement that you do not provide legal advice.</li>
<li><strong>Bill retainers in advance.</strong> Send the retainer invoice on the first of the month or set up automatic payment; see our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a>.</li>
<li><strong>Track time by matter.</strong> Even on retainer, log date, topic and time. It justifies the retainer and shows when the client needs a bigger plan.</li>
<li><strong>Invoice overage and expenses in arrears.</strong> Add them to the next month's invoice, or send a separate invoice at month end.</li>
<li><strong>Bill project milestones when reached.</strong> Do not wait until the end of a long project.</li>
<li><strong>Attach a short activity summary.</strong> Keep it free of sensitive employee details.</li>
<li><strong>Review the retainer quarterly.</strong> If the client regularly uses more hours, propose a larger retainer.</li>
</ol>

<h2>Related services HR consultants often bill</h2>
<ul>
<li><strong>I-9 audits:</strong> reviewing Form I-9 files and correcting errors; see our guide to <a href="/blog/form-i-9">Form I-9</a>.</li>
<li><strong>Payroll and classification reviews:</strong> checking exempt versus non-exempt status and <a href="/blog/w2-vs-1099">employee versus contractor classification</a>.</li>
<li><strong>Hiring support:</strong> job descriptions, interview guides and onboarding checklists for clients <a href="/blog/hiring-your-first-employee">hiring their first employee</a>.</li>
<li><strong>Recruiting:</strong> some HR consultants also run searches; if you charge a placement fee, use a separate line or invoice like our <a href="/blog/recruiter-invoice-template">recruiter invoice template</a>.</li>
<li><strong>Benefits and insurance coordination:</strong> helping clients compare payroll providers or set up <a href="/blog/workers-compensation-insurance">workers' compensation insurance</a>.</li>
<li><strong>Training:</strong> manager or harassment prevention training billed per session, with materials as a separate line.</li>
</ul>

<h2>Taxes, 1099s and insurance for HR consultants</h2>
<p>Most independent HR consultants are self-employed, either as sole proprietors or through an LLC. Business clients that pay an unincorporated consultant $2,000 or more for services in 2026 generally need to file Form 1099-NEC, so send a W-9 with your first invoice to avoid a payment hold. Track your income and set aside money for quarterly estimated taxes, since no one withholds tax from consulting fees.</p>
<p>Insurance is worth budgeting for and reflecting in your rates. Professional liability (errors and omissions) insurance covers claims that your advice caused a loss, and some clients require proof of coverage before signing. If you advise on terminations or investigations, check whether your policy covers employment practices exposure, and keep your role advisory: the client makes the final employment decisions. Some consultants include a line in their agreement capping liability at fees paid in the prior 12 months.</p>
<p>Finally, keep your own records as carefully as you advise clients to keep theirs. Store each invoice, activity log and signed agreement together by client and year. If a client disputes an overage or a project milestone, a clean paper trail resolves it quickly.</p>

<h2>Common HR consultant invoicing mistakes</h2>
<ul>
<li><strong>Naming employees or describing complaints on the invoice.</strong> Invoices are seen by bookkeepers and sometimes auditors. Keep them neutral.</li>
<li><strong>Unlimited retainer scope.</strong> Without an hour cap or exclusions, a retainer turns into unpaid project work.</li>
<li><strong>Not billing overage.</strong> If the agreement allows it, bill it every month, or the client will see it as included.</li>
<li><strong>Calling your work legal advice.</strong> Describe services as HR consulting and recommend counsel where needed.</li>
<li><strong>Missing expense receipts.</strong> Attach receipts for pass-through costs like background checks or training materials; see our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a>.</li>
<li><strong>Late retainer invoices.</strong> Retainers billed after the month starts get paid late. Bill in advance.</li>
</ul>

<h2>HR consultant invoice checklist</h2>
<ul>
<li>Business and client details, invoice number, date and service period</li>
<li>Agreement reference</li>
<li>Retainer line with hours included and used</li>
<li>Overage hours at the agreed rate</li>
<li>Project milestones and fees</li>
<li>Reimbursable expenses with dates and receipts</li>
<li>Payment terms, due date and methods</li>
<li>Neutral, confidential descriptions</li>
</ul>
<p>An HR consultant invoice template that separates retainer hours, overages and project milestones makes your value visible and keeps payments on schedule. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a PDF in your browser that you can download and send to clients. This article is general information, not legal or tax advice.</p>
`,
  },
];
