import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_W: PostDraft[] = [
  {
    slug: "therapist-invoice-template",
    title: "Therapist Invoice Template (Free, Privacy-Safe Examples)",
    description:
      "Free therapist invoice template for counseling and therapy practices: session fees, CPT codes, sliding scale, cancellation fees and privacy-safe wording.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "superbill-template",
      "massage-therapy-invoice-template",
      "life-coach-invoice-template",
    ],
    faqs: [
      {
        q: "Should a therapy invoice include the client's diagnosis?",
        a: "Usually not. A standard invoice only needs to show that professional services were provided, the date, the fee and the payment. A diagnosis code belongs on a superbill, which a client requests when they want to claim out-of-network reimbursement. Keeping the diagnosis off routine invoices means fewer people see sensitive information if the invoice is forwarded, printed at work or stored in a shared email account.",
      },
      {
        q: "Can I write 'professional services' instead of 'psychotherapy' on an invoice?",
        a: "Yes, for a self-pay client who only needs a record of payment, a neutral description such as 'Professional services, 53 minutes' is common and acceptable. Some clients ask for this because a spouse, parent or employer may see the document. If the client later needs to claim from insurance, an HSA or an FSA, issue a superbill or a more detailed receipt that names the service and codes.",
      },
      {
        q: "Do therapists charge sales tax?",
        a: "In general, no. Psychotherapy and counseling are treated as health or professional services that are not taxable in most US states. A few states tax some services, and products such as workbooks or assessments sold separately can be taxable. If you sell anything besides sessions, check your state revenue department's rules before adding tax to an invoice.",
      },
      {
        q: "How do I invoice a client who pays on a sliding scale?",
        a: "Show the fee actually charged for each session, not a discount off a higher price, unless your policy says otherwise. Keep a written sliding scale policy and a record of how you set the client's rate. Use the same rate on invoices and superbills so the paperwork is consistent. Review the rate on a set schedule, such as every six or twelve months.",
      },
      {
        q: "Can I charge a fee for a late cancellation or no-show?",
        a: "Yes, if the client agreed to your cancellation policy in writing before their first session. Bill the fee as its own line, such as 'Late cancellation fee, session of October 14', at the amount your policy states. Insurers do not reimburse missed appointments, so never code a missed session as a service, and do not put a cancellation fee on a superbill.",
      },
      {
        q: "Who should the invoice be addressed to when a parent pays for a teen's therapy?",
        a: "Address it to the person responsible for payment, often the parent, and keep the service description general. Minors have confidentiality rights in many states, and what a parent can see varies by state law and the minor's age. Your intake paperwork should say who receives billing documents. When in doubt, check your licensing board's guidance or a healthcare attorney.",
      },
      {
        q: "Is it safe to email therapy invoices?",
        a: "Billing documents contain protected health information if you are a HIPAA covered entity, so use a secure client portal or encrypted email where possible. HHS guidance allows unencrypted email when a client has been warned of the risk and still prefers it, so document that choice. Avoid detailed descriptions in the email body and use a neutral subject line such as 'Invoice for October'.",
      },
      {
        q: "How often should a private practice send invoices?",
        a: "Many practices collect payment at each session and send a monthly statement or receipt that lists every date of service. Others invoice monthly in arrears for clients with a card on file. Monthly is easiest to reconcile and matches how most clients submit superbills. Whatever you choose, state it in your financial policy so clients know when to expect a bill.",
      },
      {
        q: "Does a therapist need a good faith estimate for self-pay clients?",
        a: "Generally yes. The No Surprises Act requires licensed providers to give uninsured and self-pay clients a good faith estimate of expected charges when they schedule care or on request. For ongoing therapy, the estimate usually covers a set period and expected number of sessions. If the billed amount ends up at least $400 more than the estimate, the client may use a federal dispute process.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A therapist invoice template is a bill for counseling or psychotherapy sessions that lists the practice details, the client's name, each date of service, a short service description, the fee, any sliding scale rate or cancellation fee, payments received and the balance due. Keep it to the minimum necessary information and use a superbill for insurance claims.</p>

<p>Therapists, counselors, psychologists, marriage and family therapists and social workers in private practice all need a reliable way to bill clients. A therapy invoice template looks simple, but it carries more risk than a typical service invoice: it can reveal that someone is in treatment, and it often travels through shared inboxes, printers and family bank statements. This guide shows what a counseling invoice should include, when to add CPT codes, how to bill sliding scale and cancellation fees, and how to keep invoices privacy-safe. It includes a full example and a worked month of billing.</p>

<p>You can build the invoice in our <a href="/invoice-generator">free invoice generator</a> and download a PDF, then use the separate <a href="/blog/superbill-template">superbill template</a> when a client wants to claim out-of-network reimbursement.</p>

<h2>What is a therapist invoice template?</h2>
<p>A therapist invoice template is a reusable billing document for mental health services paid by the client or another private payer. It records what was provided, when and at what fee, and it shows how much has been paid. It is different from two related documents:</p>
<ul>
<li><strong>A superbill</strong> is a detailed receipt with your NPI, tax ID, CPT procedure codes and ICD-10-CM diagnosis codes. Clients submit it to their insurer for out-of-network reimbursement.</li>
<li><strong>An insurance claim</strong> (CMS-1500 or the electronic 837P) is what an in-network provider sends directly to a health plan.</li>
</ul>
<p>The everyday counseling invoice sits before both. Many self-pay clients only ever need an invoice and a <a href="/blog/payment-receipt-template">payment receipt</a>. Others need an invoice for their own records and a superbill once a month. Keeping the two separate lets you put less sensitive information on the document that gets seen the most.</p>

<h2>What should a therapy invoice include?</h2>
<p>Every invoice needs the basics covered in our guide on <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>. For a therapy practice, the fields look like this:</p>
<table><thead><tr><th>Field</th><th>What to include</th><th>Privacy note</th></tr></thead><tbody>
<tr><td>Practice details</td><td>Practice name, clinician name and license type (for example LMFT, LPC, LCSW, PsyD), address, phone, email</td><td>A neutral practice name helps when invoices are visible to others</td></tr>
<tr><td>Invoice number and date</td><td>Unique number, issue date, due date</td><td>Use a numbering scheme without client initials</td></tr>
<tr><td>Bill to</td><td>Name and address of the person paying</td><td>May be a parent, spouse or employer, not the client</td></tr>
<tr><td>Client</td><td>Client name, if different from the payer</td><td>Omit date of birth unless needed for a claim</td></tr>
<tr><td>Dates of service</td><td>One line per session</td><td>Required for any later reimbursement</td></tr>
<tr><td>Service description</td><td>Session type and length, or "Professional services"</td><td>Keep general; no clinical content</td></tr>
<tr><td>CPT code</td><td>Optional on invoices, required on superbills</td><td>Include only if the client asks</td></tr>
<tr><td>Fee</td><td>Rate per session, sliding scale rate if used</td><td>State the rate actually charged</td></tr>
<tr><td>Payments and balance</td><td>Amounts paid, method, balance due</td><td>Show last four digits of a card at most</td></tr>
<tr><td>Terms</td><td>Due date, cancellation policy reference, accepted payment methods</td><td>Link to your financial policy rather than restating it</td></tr>
</tbody></table>
<p>Do not put session notes, treatment goals, diagnoses or anything a client said in session on an invoice. Those belong in the clinical record, and psychotherapy notes in particular have extra protection under the HIPAA Privacy Rule.</p>

<h2>How to keep a counseling invoice privacy-safe (minimum necessary)</h2>
<p>If your practice is a HIPAA covered entity (for example, you send any claims electronically), the Privacy Rule's <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html">minimum necessary requirement</a> asks you to limit the protected health information you use or disclose to what a task actually needs. Billing is a permitted purpose, but that does not mean every billing document should carry every detail. Even if you are not a covered entity, state confidentiality laws and your profession's ethics code set similar expectations.</p>
<p>In practice, minimum necessary on a therapy invoice means:</p>
<ol>
<li><strong>Use the least specific description that does the job.</strong> "Individual session, 53 min" or "Professional services" is enough for a self-pay record. Save CPT and diagnosis codes for superbills.</li>
<li><strong>Bill the payer, name the client only if needed.</strong> When a parent pays, the parent is the bill-to party. When a client pays for themselves, you rarely need anyone else's name.</li>
<li><strong>Leave out identifiers that are not required.</strong> Date of birth, home address and insurance member ID are needed on a superbill, not on a routine invoice.</li>
<li><strong>Choose a discreet sender name and subject line.</strong> "Invoice INV-2026-0142 from Northside Practice" reveals less than "Your therapy bill".</li>
<li><strong>Send through a secure channel.</strong> A client portal or encrypted email is best. HHS has said providers may use unencrypted email if the client is warned of the risk and still asks for it; record that preference in the file.</li>
<li><strong>Watch card statements.</strong> Your card processor's descriptor appears on the client's bank statement. Many practices use a neutral business name for this reason.</li>
</ol>
<p>Our guide to <a href="/blog/ai-data-privacy-financial-data">protecting financial data</a> covers general habits such as not pasting client details into third-party tools. Our invoice generator builds the PDF in your browser, so you can create an invoice without creating an account or uploading a client list.</p>

<h2>CPT codes for therapy invoices and superbills</h2>
<p>CPT codes are maintained by the American Medical Association and updated each January. Psychotherapy codes are time-based. The most common are:</p>
<table><thead><tr><th>CPT code</th><th>Service</th><th>Typical time</th></tr></thead><tbody>
<tr><td>90791</td><td>Psychiatric diagnostic evaluation (intake)</td><td>No set time</td></tr>
<tr><td>90832</td><td>Psychotherapy with patient</td><td>16 to 37 minutes</td></tr>
<tr><td>90834</td><td>Psychotherapy with patient</td><td>38 to 52 minutes</td></tr>
<tr><td>90837</td><td>Psychotherapy with patient</td><td>53 minutes or more</td></tr>
<tr><td>90846</td><td>Family psychotherapy without the patient present</td><td>50 minutes</td></tr>
<tr><td>90847</td><td>Family or couples psychotherapy with the patient present</td><td>50 minutes</td></tr>
<tr><td>90853</td><td>Group psychotherapy</td><td>Per session</td></tr>
<tr><td>90839 / 90840</td><td>Psychotherapy for crisis, first 60 minutes / each additional 30</td><td>Time-based</td></tr>
</tbody></table>
<p>Confirm codes and time ranges against the current code set and the client's plan before relying on them. Telehealth sessions usually also need a place of service code and sometimes a modifier; the <a href="/blog/superbill-template">superbill guide</a> covers those details. On an ordinary invoice, a code is optional. Add it only when the client wants it, for example to submit to an HSA or FSA administrator.</p>

<h2>How much do therapists charge per session?</h2>
<p>Fees vary widely by license, location, specialty and session length, and there is no reliable national figure that fits every practice. Set your fee from your own costs, caseload and local market, then publish it in your financial policy. The table below is illustrative only, to show how a practice might structure its fee schedule:</p>
<table><thead><tr><th>Service</th><th>Illustrative standard fee</th><th>Illustrative sliding scale range</th></tr></thead><tbody>
<tr><td>Intake assessment (90791)</td><td>$200</td><td>$90 to $200</td></tr>
<tr><td>Individual session, 53+ min (90837)</td><td>$180</td><td>$80 to $180</td></tr>
<tr><td>Individual session, 45 min (90834)</td><td>$150</td><td>$70 to $150</td></tr>
<tr><td>Couples session, 50 min (90847)</td><td>$200</td><td>$100 to $200</td></tr>
<tr><td>Group session (90853)</td><td>$60</td><td>$35 to $60</td></tr>
<tr><td>Late cancellation / no-show</td><td>Full or partial session fee per policy</td><td>Often reduced or waived once</td></tr>
</tbody></table>
<h3>Sliding scale fees</h3>
<p>A sliding scale lets clients with lower income pay less. To keep invoices clean:</p>
<ul>
<li>Write the policy down: who qualifies, what documentation you ask for (if any) and how often rates are reviewed.</li>
<li>Bill the agreed rate as the session fee. If you show a "standard fee" and a discount, make sure the superbill uses the fee actually charged, not the higher list price.</li>
<li>Apply the scale consistently. Charging some clients a lower rate is normal; charging insurers more than self-pay clients for the same service can create problems if you later go in network.</li>
</ul>
<h3>Cancellation and no-show fees</h3>
<p>A late cancellation fee needs a signed policy before care begins. Bill it as a separate line and never code it as a session. Our guide to a <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> has wording you can adapt.</p>

<h2>Example therapist invoice</h2>
<p>Here is a complete example of a monthly counseling invoice for a self-pay client billed at a sliding scale rate. All names are fictional.</p>
<p><strong>Northside Counseling, PLLC</strong> | Dana Reyes, LMFT | 410 Elm Street, Suite 3, Columbus, OH 43215<br>
<strong>Invoice:</strong> NC-2026-0142 | <strong>Issued:</strong> October 31, 2026 | <strong>Due:</strong> November 14, 2026<br>
<strong>Bill to:</strong> J. Thompson | <strong>Client:</strong> J. Thompson</p>
<table><thead><tr><th>Date</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oct 3</td><td>Individual session, 53 min</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Oct 10</td><td>Individual session, 53 min</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Oct 17</td><td>Late cancellation fee (per signed policy)</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>Oct 24</td><td>Individual session, 53 min</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Oct 31</td><td>Individual session, 53 min</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="4"><strong>Subtotal</strong></td><td><strong>$540.00</strong></td></tr>
<tr><td colspan="4">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="4">Payments received (card ending 4421, Oct 3, 10, 24)</td><td>-$360.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$180.00</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Sliding scale rate of $120 per session, reviewed April 2026. Pay by card through the client portal or by bank transfer. A superbill for insurance or HSA claims is available on request. Thank you.</p>
<p>Notice what is missing: no diagnosis, no CPT codes, no date of birth and no description of the work done in session. If the client asks for a superbill, issue one separately with the four session dates only (the cancellation fee is not reimbursable).</p>

<h2>Worked example: one month of billing for a solo practice</h2>
<p>Suppose a solo therapist sees 22 self-pay clients a week. Fourteen pay the standard $180 fee, six pay $120 on the sliding scale and two pay $80. Over a four-week month with no holidays:</p>
<ul>
<li>Standard: 14 clients x 4 sessions x $180 = $10,080</li>
<li>Sliding scale: 6 x 4 x $120 = $2,880</li>
<li>Reduced: 2 x 4 x $80 = $640</li>
<li>Late cancellation fees: 3 x $90 = $270</li>
</ul>
<p>Billed total: $13,870. If card processing costs about 3% of card payments and 90% of billing is paid by card, fees come to roughly $374, leaving about $13,496 before rent, insurance, software and taxes. Our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a> shows how to estimate your own rate. Tracking these totals by invoice each month also makes <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> easier to plan.</p>

<h2>How to create a therapy invoice, step by step</h2>
<ol>
<li><strong>Set up your practice header once.</strong> Add your practice name, clinician name and license, address and logo in the <a href="/invoice-generator">invoice generator</a>.</li>
<li><strong>Choose a numbering system.</strong> Sequential numbers like NC-2026-0142 work well; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help. Avoid client initials in numbers.</li>
<li><strong>Enter the payer and client.</strong> Bill the person responsible for payment.</li>
<li><strong>Add one line per date of service</strong> with a general description and the fee charged.</li>
<li><strong>Add cancellation fees as separate lines,</strong> labeled clearly.</li>
<li><strong>Record payments already received</strong> so the balance is accurate.</li>
<li><strong>Add short terms:</strong> due date, payment methods and a note that a superbill is available.</li>
<li><strong>Download the PDF and send it securely,</strong> through a portal or encrypted email, with a neutral subject line.</li>
</ol>

<h2>Common therapist invoicing mistakes</h2>
<ul>
<li><strong>Putting diagnosis codes on every invoice.</strong> It adds risk and is only needed on a superbill.</li>
<li><strong>Coding missed sessions.</strong> A no-show is not psychotherapy. Bill it as a cancellation fee and leave it off any superbill.</li>
<li><strong>Inconsistent fees.</strong> If the invoice shows $120 and the superbill shows $180 for the same session, insurers may reject the claim or question it.</li>
<li><strong>No written policies.</strong> Cancellation fees and sliding scale rates are much easier to collect when the client signed the policy at intake.</li>
<li><strong>Forgetting the good faith estimate.</strong> Self-pay clients are generally entitled to one under the <a href="https://www.cms.gov/nosurprises">No Surprises Act</a>.</li>
<li><strong>Billing the wrong person.</strong> In couples or family therapy, agree in advance who pays and who receives billing documents.</li>
<li><strong>Letting balances build.</strong> Collect at the time of service where possible, and use polite <a href="/blog/payment-reminder-emails">payment reminder emails</a> for anything outstanding.</li>
</ul>
<p>This guide is general information, not legal, tax or compliance advice. HIPAA, state confidentiality law and payer rules differ by situation, so check with your licensing board, a healthcare attorney or a billing specialist for your practice.</p>

<h2>Therapy invoice template vs other healthcare templates</h2>
<p>If you also offer bodywork or coaching, the billing rules differ. A <a href="/blog/massage-therapy-invoice-template">massage therapy invoice</a> may involve sales tax or gift cards in some states, and a <a href="/blog/life-coach-invoice-template">life coach invoice</a> is a non-clinical service that should never be described as therapy. Group practices with several clinicians may prefer a broader <a href="/blog/medical-invoice-template">medical invoice template</a> with a rendering provider on each line.</p>

<p>A good therapist invoice template protects your cash flow and your clients' privacy at the same time: clear dates and fees, a separate line for policy fees, no clinical detail and a superbill only when someone asks. Our invoice generator is free, needs no sign-up and downloads a clean PDF built right in your browser, so you can send your next counseling invoice in a few minutes.</p>
`,
  },
  {
    slug: "nonprofit-invoice-template",
    title: "Nonprofit Invoice Template: Fees, Grants and Donations",
    description:
      "Nonprofit invoice template with examples: when to invoice vs issue a donation receipt, grant reimbursement requests, tax-exempt status lines and sales tax.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["donation-receipt-template", "tax-exempt-invoice", "how-to-start-a-nonprofit"],
    faqs: [
      {
        q: "Can a nonprofit send an invoice?",
        a: "Yes. Nonprofits invoice for many kinds of earned revenue: program fees, training, consulting, event booths, facility rentals, membership dues and grant reimbursements. Being tax-exempt does not change how an invoice works. What changes is how certain payments are documented. A gift with nothing in return gets a donation acknowledgment, while a payment for services gets an invoice and, when paid, a receipt.",
      },
      {
        q: "Is an invoice from a nonprofit tax-deductible for the payer?",
        a: "Not as a charitable contribution if the payer receives services or goods of equal value. A school paying a nonprofit for workshops is buying a service, which may be a deductible business expense for a business payer but is not a charitable gift. Only the portion of a payment that exceeds the value of what the payer receives can count as a contribution.",
      },
      {
        q: "Should a nonprofit put its EIN on invoices?",
        a: "It is common and helpful. Business customers often need the EIN to set up the nonprofit as a vendor, and some will ask for a Form W-9. Adding the legal name, EIN and a short tax-exempt status line reduces back-and-forth with accounts payable. The EIN is public information for most exempt organizations because it appears on Form 990 filings.",
      },
      {
        q: "Do nonprofits have to charge sales tax?",
        a: "Often yes, when they sell taxable goods or services. Federal tax exemption does not automatically exempt a nonprofit from collecting state sales tax. Some states exempt certain sales by charities, such as occasional fundraisers, while others do not. Check your state revenue department and register for a seller's permit if your sales are taxable.",
      },
      {
        q: "What is the difference between a sponsorship invoice and an advertising invoice?",
        a: "Under IRS rules, a qualified sponsorship payment gets only an acknowledgment of the sponsor's name or logo, with no qualitative or comparative language, price information or calls to action. That is generally not taxable to the nonprofit. If the package includes advertising, such as endorsements or promotional messages, that part may be unrelated business income. Describe sponsorship benefits accurately on the invoice.",
      },
      {
        q: "How do I invoice a foundation for a grant?",
        a: "Follow the grant agreement. Some foundations pay on a schedule after signing and need no invoice. Others ask for a payment request or reimbursement invoice that cites the grant number, the period, budget categories, amounts spent and amounts requested, with supporting documentation. Government grants usually use their own payment systems and forms, so use those rather than a standard invoice.",
      },
      {
        q: "Can a nonprofit charge late fees on invoices?",
        a: "Yes, if the late fee was agreed in a contract or clearly stated before the work, and it complies with state law. Many nonprofits choose not to charge late fees to partner organizations or schools, preferring reminders instead. If you do charge one, state the rate and grace period in your payment terms and apply it consistently.",
      },
      {
        q: "Does a nonprofit need to send a 1099 to the people it pays?",
        a: "Nonprofits have the same information return duties as other payers. If an exempt organization pays an independent contractor $2,000 or more for services in 2026, it generally files Form 1099-NEC, after collecting a Form W-9. Payments to corporations are usually exempt from 1099 reporting, with some exceptions such as attorney fees.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A nonprofit invoice template is a bill a tax-exempt organization sends for earned revenue such as program fees, training, rentals, sponsorships or grant reimbursements. It looks like any invoice but adds the legal name, EIN and a tax-exempt status line. Donations are acknowledged with a receipt, not invoiced.</p>

<p>Nonprofits receive money in more ways than most small businesses, and each type of payment needs the right paperwork. A school district paying for after-school workshops needs an invoice. A donor writing a check needs a contribution acknowledgment. A foundation releasing grant funds may need a reimbursement request. Mixing these up creates problems at audit time and can mislead donors about what they can deduct.</p>
<p>This guide explains which payments a nonprofit should invoice, what a nonprofit invoice template should include, how to word the tax-exempt status line, how sales tax and unrelated business income fit in, and how to invoice grants. It includes a full example and a step-by-step checklist. You can build the invoice itself in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a nonprofit invoice?</h2>
<p>A nonprofit invoice is a formal request for payment issued by a charity, foundation, association or other tax-exempt organization when someone owes it money for goods or services. Legally and practically it works like a business invoice: it identifies the seller and buyer, lists what was provided, gives the amount due and sets payment terms. The guide to <a href="/blog/how-to-write-an-invoice">writing an invoice</a> covers the universal parts.</p>
<p>What makes a nonprofit invoice different is context. The organization's tax-exempt status, its accounting for restricted funds and the donor rules in IRS <a href="https://www.irs.gov/pub/irs-pdf/p1771.pdf">Publication 1771</a> all affect how a payment should be documented.</p>

<h2>Invoice, receipt or acknowledgment? Fee-for-service vs donations vs grants</h2>
<p>Start by classifying the payment. This table covers the most common nonprofit revenue types:</p>
<table><thead><tr><th>Payment type</th><th>Example</th><th>Document to issue</th><th>Deductible as a gift?</th></tr></thead><tbody>
<tr><td>Fee-for-service</td><td>Training for a school, consulting, counseling program fees</td><td>Invoice, then payment receipt</td><td>No</td></tr>
<tr><td>Sale of goods</td><td>Books, merchandise, thrift store sales</td><td>Invoice or sales receipt</td><td>No</td></tr>
<tr><td>Facility rental</td><td>Renting a hall to a community group</td><td>Invoice</td><td>No</td></tr>
<tr><td>Membership dues</td><td>Annual membership with benefits</td><td>Invoice; may need quid pro quo disclosure</td><td>Only the part above the value of benefits</td></tr>
<tr><td>Event ticket or gala table</td><td>$150 dinner ticket</td><td>Invoice or receipt with quid pro quo disclosure</td><td>Only the part above the fair market value of the meal and entertainment</td></tr>
<tr><td>Corporate sponsorship</td><td>Logo on event banner</td><td>Invoice or pledge letter describing benefits</td><td>Business decides; qualified sponsorship is generally not taxable to the nonprofit</td></tr>
<tr><td>Donation (nothing in return)</td><td>$500 check from an individual</td><td>Written acknowledgment</td><td>Yes, subject to donor's own tax situation</td></tr>
<tr><td>Grant</td><td>Foundation or government award</td><td>Grant report, payment request or reimbursement invoice per agreement</td><td>Not applicable</td></tr>
</tbody></table>
<p>Never send a donor an "invoice" for a voluntary gift. An invoice implies an obligation, and the IRS rules on charitable contributions focus on whether the donor received anything in return. For pledges, send a pledge reminder or statement instead, and when the gift is paid, issue a <a href="/blog/donation-receipt-template">donation receipt</a>.</p>
<h3>Donation acknowledgment rules worth knowing</h3>
<ul>
<li>For any single contribution of $250 or more, a donor needs a contemporaneous written acknowledgment from the charity to claim a deduction. It should state the amount (or describe non-cash property) and whether any goods or services were provided in return.</li>
<li>For a quid pro quo contribution of more than $75 (part gift, part payment for something), the charity must give a written disclosure stating the deductible amount and a good faith estimate of the value of the goods or services provided.</li>
</ul>
<p>These rules come from Publication 1771. They matter for invoices because gala tickets, auction purchases and memberships often blend a payment with a gift.</p>

<h2>What should a nonprofit invoice template include?</h2>
<ul>
<li><strong>Legal name and any DBA</strong> exactly as registered, plus address, phone and email.</li>
<li><strong>EIN.</strong> Business customers need it for vendor setup, and many will ask for a Form W-9.</li>
<li><strong>Tax-exempt status line</strong> (see wording below).</li>
<li><strong>Invoice number, issue date and due date.</strong></li>
<li><strong>Customer details</strong> and their purchase order or contract number.</li>
<li><strong>Program or project name.</strong> This helps your bookkeeper code revenue to the right program or restricted fund.</li>
<li><strong>Line items</strong> with quantity, rate and amount.</li>
<li><strong>Sales tax</strong> on taxable lines, or a note that the sale is exempt and why.</li>
<li><strong>Payment instructions:</strong> ACH details, check payee name, card link.</li>
<li><strong>Payment terms</strong> such as net 30; see our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
</ul>

<h2>How to word the tax-exempt status line</h2>
<p>A short status statement tells the customer who you are and avoids confusion about deductibility. Examples:</p>
<ul>
<li>"Riverbend Youth Arts is a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. EIN 12-3456789."</li>
<li>For fee-for-service invoices, add: "This invoice is for services provided and is not a charitable contribution."</li>
<li>For a sponsorship: "Sponsor recognition is limited to acknowledgment of the sponsor's name and logo."</li>
</ul>
<p>Do not write "tax-deductible" on an invoice for services. Also note the difference between your exemption from federal income tax and a customer's exemption from sales tax. If a nonprofit is <em>buying</em> something tax-free, it gives the seller an exemption certificate; our guide to <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificates</a> and the article on <a href="/blog/tax-exempt-invoice">tax-exempt invoices</a> explain that side.</p>

<h2>Do nonprofits charge sales tax and owe tax on invoiced income?</h2>
<h3>Sales tax</h3>
<p>Federal 501(c)(3) status does not make a nonprofit's own sales automatically exempt from state sales tax. Rules vary: some states exempt occasional fundraising sales or specific charitable activities, others tax them like any retailer. If you sell taxable items or services, you may need a <a href="/blog/sellers-permit">seller's permit</a> and to collect tax at the right rate. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the arithmetic once you know the rate.</p>
<h3>Unrelated business income</h3>
<p>Income from a regularly carried on trade or business that is not substantially related to the exempt purpose can be unrelated business taxable income. An exempt organization with $1,000 or more of gross income from an unrelated business generally files Form 990-T, as the IRS explains on its <a href="https://www.irs.gov/charities-non-profits/unrelated-business-income-tax">unrelated business income tax page</a>. Typical examples include selling advertising in a magazine or running a business unrelated to the mission. Labeling invoices by revenue type makes this much easier to track.</p>
<p>This section is general information, not tax or legal advice. Talk to a CPA familiar with exempt organizations about your specific revenue.</p>

<h2>How to invoice a grant (reimbursement requests and drawdowns)</h2>
<p>Grants are paid in three common ways:</p>
<ol>
<li><strong>Upfront or scheduled payments.</strong> The funder pays on signing or on set dates. Usually no invoice is needed, just the reports the agreement requires.</li>
<li><strong>Reimbursement.</strong> You spend first and request repayment. The funder often wants an invoice-style payment request listing budget categories, the period covered and supporting documentation such as payroll registers and receipts.</li>
<li><strong>Deliverable-based payments.</strong> Payment follows a milestone, much like <a href="/blog/milestone-payments">milestone payments</a> in a client contract.</li>
</ol>
<p>A reimbursement request typically includes the grant or award number, reporting period, a table of budget lines with approved budget, spent this period, spent to date and remaining balance, and a certification signed by an authorized officer. Federal awards normally use the agency's own payment system rather than a PDF invoice, so check the award terms first.</p>

<h2>How to invoice sponsorships, memberships and rentals</h2>
<h3>Corporate sponsorships</h3>
<p>Sponsorship invoices need careful wording because the tax treatment depends on what the sponsor receives. A qualified sponsorship payment gets acknowledgment only: the sponsor's name, logo, address, phone number or website, and neutral product descriptions. If the package also includes advertising, such as messages with qualitative or comparative language, price information, endorsements or an inducement to buy, that part can be unrelated business income. Describe the benefits on the invoice exactly as the agreement does, for example "Presenting sponsor recognition: logo on event banner and program", rather than "Advertising package". If the sponsor also gets tickets or a table, note their fair market value.</p>
<h3>Membership dues</h3>
<p>Dues that buy real benefits (a magazine, discounts, admission) are partly or fully a purchase. Invoice the dues at the published rate and, where the payment is partly a gift and exceeds $75, include the quid pro quo statement. Publication 1771 explains which low-cost membership benefits can be disregarded. Annual renewals are a natural fit for <a href="/blog/recurring-invoices-guide">recurring invoices</a>, sent 30 days before the renewal date.</p>
<h3>Facility and equipment rentals</h3>
<p>Renting out a hall, kitchen or vehicle is ordinary earned revenue. Invoice the rental period, any cleaning or staffing fees and a refundable security deposit as a separate line. Check whether your state taxes rentals and whether frequent rentals could be an unrelated business.</p>

<h2>Bookkeeping for invoiced revenue at a nonprofit</h2>
<p>An invoice is also an accounting record. Nonprofits report revenue by type on Form 990 (for example, program service revenue, contributions and grants, membership dues, rental income and fundraising events), so the way you set up invoices affects how easily the return comes together. A few habits help:</p>
<ul>
<li><strong>Use a revenue code or program name on every invoice</strong> so program service revenue can be traced to the activity that earned it.</li>
<li><strong>Separate restricted grant funds</strong> from unrestricted fee income. Reimbursement requests should map to the budget lines in the award.</li>
<li><strong>Record invoices as receivables when issued</strong> if you use accrual accounting, and track aging so overdue school or agency payments get followed up.</li>
<li><strong>Keep the paid invoice, the payment record and the deposit together.</strong> Auditors will sample them.</li>
</ul>
<p>Fiscally sponsored projects should invoice in the sponsor's legal name and EIN, not the project's, because the sponsor is the legal entity receiving the money. Agree with your fiscal sponsor who issues invoices and where payments go before the first one goes out.</p>

<h2>Example nonprofit invoice (fee-for-service)</h2>
<p>A youth arts nonprofit invoices a school district for an after-school program. Names and figures are fictional.</p>
<p><strong>Riverbend Youth Arts</strong> | 88 Mill Road, Asheville, NC 28801 | EIN 12-3456789<br>
<strong>Invoice:</strong> RYA-2026-031 | <strong>Issued:</strong> October 30, 2026 | <strong>Due:</strong> November 29, 2026 (net 30)<br>
<strong>Bill to:</strong> Buncombe Valley School District, Accounts Payable | <strong>PO:</strong> 2026-4471 | <strong>Program:</strong> Fall Arts Residency</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Teaching artist sessions, grades 3 to 5 (90 min each)</td><td>16</td><td>$175.00</td><td>$2,800.00</td></tr>
<tr><td>Program coordination (hours)</td><td>10</td><td>$55.00</td><td>$550.00</td></tr>
<tr><td>Art supplies kit per student</td><td>60</td><td>$12.00</td><td>$720.00</td></tr>
<tr><td>Family showcase evening (flat)</td><td>1</td><td>$400.00</td><td>$400.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$4,470.00</strong></td></tr>
<tr><td colspan="3">Sales tax (buyer exempt, certificate on file)</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$4,470.00</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Riverbend Youth Arts is a tax-exempt organization under Section 501(c)(3). This invoice is for services and materials provided and is not a charitable contribution. Pay by ACH (details on W-9 packet) or check payable to Riverbend Youth Arts.</p>
<h3>Worked example: a gala ticket with quid pro quo</h3>
<p>The same nonprofit sells gala tickets at $150. Dinner and entertainment have a fair market value of $60. The ticket buyer may deduct $90 at most, and because the payment exceeds $75, the organization must disclose this in writing. The ticket confirmation or invoice should say: "The deductible portion of your $150 payment is limited to $90, the amount exceeding the $60 estimated value of the dinner and entertainment provided."</p>

<h2>Step-by-step: creating a nonprofit invoice</h2>
<ol>
<li>Classify the payment: service, goods, rental, sponsorship, membership, grant or gift.</li>
<li>If it is a gift, stop and issue an acknowledgment instead.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> and add your legal name, address, EIN and logo.</li>
<li>Assign a number by program, such as RYA-2026-031; the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</li>
<li>Enter the customer, PO and program name.</li>
<li>Add line items and decide whether each line is taxable.</li>
<li>Add the status line and any quid pro quo disclosure.</li>
<li>Set terms, download the PDF and record it in your books against the correct program or fund.</li>
</ol>

<h2>Common mistakes on nonprofit invoices</h2>
<ul>
<li><strong>Invoicing donors.</strong> Use pledge reminders and acknowledgments for gifts.</li>
<li><strong>Calling service fees "donations".</strong> It misleads payers and can create tax problems for them.</li>
<li><strong>Assuming no sales tax applies.</strong> Check state rules for every taxable product line.</li>
<li><strong>Missing the quid pro quo disclosure</strong> on event tickets and memberships with benefits.</li>
<li><strong>No program code.</strong> Without it, restricted and unrestricted revenue get mixed up.</li>
<li><strong>Weak follow-up.</strong> Nonprofits are often reluctant to chase partners. A clear due date and a polite <a href="/blog/payment-reminder-emails">reminder sequence</a> protect cash flow.</li>
</ul>

<p>A nonprofit invoice template should make one thing obvious: whether the payment is for something received or a gift. Use invoices for earned revenue, acknowledgments for donations and the funder's format for grants, and include your EIN and status line every time. Our invoice generator is free, requires no sign-up and creates a PDF in your browser, so your team can produce consistent nonprofit invoices without paying for another subscription.</p>
`,
  },
  {
    slug: "software-development-invoice-template",
    title: "Software Development Invoice Template (T&M, Fixed Bid)",
    description:
      "Software development invoice template with examples for sprints, time and materials, fixed bid milestones, IP transfer on payment and hosting pass-throughs.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "web-development-invoice-template",
      "app-developer-invoice-template",
      "fixed-price-vs-time-and-materials",
    ],
    faqs: [
      {
        q: "How do software developers bill clients?",
        a: "Most bill in one of three ways: time and materials, where hours are multiplied by agreed rates; fixed bid, where a set price is split into milestone payments; or a monthly retainer for a dedicated team or ongoing maintenance. Many projects combine them, for example a fixed-price discovery phase followed by time-and-materials sprints. The invoice should match whatever the contract or statement of work says.",
      },
      {
        q: "Should I invoice per sprint?",
        a: "Invoicing at the end of each sprint works well for agile teams because it links payment to a demo or set of completed stories. For two-week sprints, that means roughly two invoices a month. Some clients prefer one monthly invoice listing each sprint. Either way, reference the sprint number and dates, summarize what was delivered and attach the timesheet for time-and-materials work.",
      },
      {
        q: "When should IP ownership transfer to the client?",
        a: "A common approach is that ownership of the custom code transfers to the client on full payment of the related invoices, while the developer keeps pre-existing tools and libraries and grants a license to use them. This protects the developer if the client does not pay. The transfer clause belongs in the contract; the invoice can reference it in a short note.",
      },
      {
        q: "Can I mark up cloud hosting and third-party services?",
        a: "Yes, if your contract allows it. Some developers pass through AWS, Google Cloud, Apple Developer or API costs at cost with receipts, others add a handling fee for managing accounts and billing. Be transparent: show pass-throughs as separate lines, state whether a markup applies and consider having clients own critical accounts so they are not locked in.",
      },
      {
        q: "Do I charge sales tax on software development?",
        a: "It depends on the state and on what you deliver. Many states treat custom software differently from prewritten (canned) software, and some tax SaaS or digital products while others do not. Development labor billed separately is often not taxable, but there are exceptions. Check the rules where your client is located, especially if you also resell licenses.",
      },
      {
        q: "What payment terms are typical for software projects?",
        a: "Net 15 and net 30 are common for small and mid-sized clients, and enterprises may insist on net 45 or longer. Fixed-bid projects often start with a deposit of 25% to 50% before work begins. Sprints billed in arrears are usually due within 15 to 30 days. Put the terms in the statement of work so accounts payable cannot change them later.",
      },
      {
        q: "How do I handle bug fixes after launch on an invoice?",
        a: "Most contracts include a warranty period, such as 30 or 60 days after acceptance, during which defects in delivered work are fixed at no charge. Show warranty fixes as zero-dollar lines or leave them off. New features, changes in scope and issues caused by third-party changes are normally billable, either hourly or under a maintenance retainer, and should be clearly labeled.",
      },
      {
        q: "What should a software development invoice say about hours?",
        a: "For time-and-materials work, show hours by role and rate and attach a timesheet or tracking export grouped by task or ticket. Clients rarely need minute-by-minute entries, but they do need enough detail to approve the bill. For fixed bids, hours are usually not shown; list the milestone and the percentage of the contract being billed.",
      },
      {
        q: "Is software written by a contractor a work made for hire?",
        a: "Usually not automatically. Under US copyright law, work by an independent contractor is a work made for hire only if it falls into specific categories and both parties sign a written agreement, and most standalone software does not fit. That is why development contracts normally include a written assignment of copyright, often effective on payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A software development invoice template bills a client for custom software work. It lists the project and statement of work, the billing method (time and materials, fixed-bid milestone or retainer), hours by role or milestone percentages, pass-through costs such as hosting and licenses, payment terms and a note on IP transfer on full payment.</p>

<p>Software projects are long, change often and involve many people, so the software development invoice is where scope disputes tend to surface. A clear invoice that matches the contract, shows what each sprint or milestone delivered and separates third-party costs gets approved faster. This guide covers billing models, what a dev invoice should include, how to handle sprints, IP transfer, hosting pass-throughs and maintenance, with a full example invoice and a worked comparison of time and materials and fixed bid.</p>
<p>Whether you are a freelance developer, a two-person studio or an agency, you can create the invoice in our <a href="/invoice-generator">free invoice generator</a> in a few minutes.</p>

<h2>What is a software development invoice?</h2>
<p>A software development invoice is a request for payment for designing, building, testing, deploying or maintaining software. It is a service invoice, but it usually ties back to a master services agreement (MSA) and a <a href="/blog/statement-of-work-template">statement of work</a> that sets scope, rates and acceptance criteria. If you build mainly websites, the <a href="/blog/web-development-invoice-template">web development invoice template</a> fits better; for mobile apps, see the <a href="/blog/app-developer-invoice-template">app developer invoice</a>.</p>

<h2>Time and materials vs fixed bid: which billing model?</h2>
<p>The billing model shapes everything on the invoice. Our full comparison of <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a> goes deeper; here is the summary for software:</p>
<table><thead><tr><th>Model</th><th>How it is billed</th><th>Best for</th><th>Risk sits with</th></tr></thead><tbody>
<tr><td>Time and materials (T&amp;M)</td><td>Hours x role rate, plus expenses, billed per sprint or monthly</td><td>Evolving products, agile teams, unclear scope</td><td>Client (budget)</td></tr>
<tr><td>Fixed bid</td><td>Agreed price split into milestones</td><td>Well-defined scope, small builds, integrations</td><td>Developer (overruns)</td></tr>
<tr><td>Capped T&amp;M</td><td>T&amp;M up to a not-to-exceed amount</td><td>Clients who want flexibility and a ceiling</td><td>Shared</td></tr>
<tr><td>Dedicated team retainer</td><td>Fixed monthly fee for agreed capacity</td><td>Ongoing development</td><td>Shared</td></tr>
<tr><td>Maintenance retainer</td><td>Monthly fee for a block of support hours</td><td>Post-launch support, updates</td><td>Shared</td></tr>
</tbody></table>
<h3>Billing per sprint</h3>
<p>Agile teams often invoice at the end of each sprint, usually two weeks. The invoice references the sprint number and dates, lists hours by role and summarizes the stories or tickets completed. Story points are a planning tool, not a billing unit; bill hours or an agreed sprint fee, not points.</p>
<h3>Fixed-bid milestones</h3>
<p>A fixed bid is typically split into a deposit and milestone payments tied to acceptance, for example 30% at signing, 30% at beta, 30% at acceptance and 10% after the warranty period. Our guide to <a href="/blog/milestone-payments">milestone payments</a> explains how to define acceptance so invoices are not held up.</p>

<h2>What should a software development invoice include?</h2>
<ul>
<li><strong>Your business details:</strong> legal name, address, tax ID if required (for example an EIN for US clients or a VAT number in the EU).</li>
<li><strong>Client details</strong> and the client's PO number. Enterprise accounts payable often rejects invoices without one.</li>
<li><strong>Contract references:</strong> MSA and SOW numbers, change order numbers.</li>
<li><strong>Billing period or milestone:</strong> sprint 14, October 13 to 24, or Milestone 2: beta release.</li>
<li><strong>Labor lines:</strong> hours by role (senior engineer, engineer, QA, project manager) and rate.</li>
<li><strong>Pass-through and reimbursable costs:</strong> hosting, domains, app store fees, API usage, licenses, travel.</li>
<li><strong>Credits:</strong> discounts, prepaid hours used, warranty work at no charge.</li>
<li><strong>Tax</strong> where applicable.</li>
<li><strong>Payment terms and methods.</strong></li>
<li><strong>IP note:</strong> for example, "Ownership of deliverables listed transfers on receipt of full payment per section 9 of the MSA."</li>
</ul>

<h2>How to handle IP transfer on payment</h2>
<p>In the US, software written by an independent contractor is generally not a "work made for hire" unless it falls within specific statutory categories and both sides sign a written agreement, as the US Copyright Office explains in <a href="https://www.copyright.gov/circs/circ30.pdf">Circular 30</a>. Most standalone software does not fit those categories, so development contracts use a written assignment of copyright instead.</p>
<p>A common and fair structure:</p>
<ol>
<li>The client owns the custom code written for the project once the related invoices are paid in full.</li>
<li>The developer keeps ownership of pre-existing code, frameworks and internal tools, and grants the client a perpetual license to use them as part of the deliverable.</li>
<li>Open-source components stay under their own licenses.</li>
<li>Until payment, the client has a license to test and evaluate, not to commercially deploy (or deployment is allowed but ownership is still pending).</li>
</ol>
<p>The invoice should not try to create these rights; it should reference them. A one-line note is enough. If you are dealing with AI-assisted code, our article on <a href="/blog/ai-generated-work-copyright">copyright and AI-generated work</a> covers why contracts should address it explicitly. This is general information, not legal advice; have a lawyer review your IP clauses.</p>

<h2>Hosting, licenses and other pass-through costs</h2>
<p>Developers often set up and pay for services on a client's behalf: cloud hosting (AWS, Google Cloud, Azure), databases, email delivery, error monitoring, domain names, SSL, app store developer accounts and paid APIs. Treat these carefully:</p>
<ul>
<li><strong>Prefer client-owned accounts.</strong> Let the client pay vendors directly where possible. It avoids lock-in and cash-flow strain on you.</li>
<li><strong>If you pay, pass through at cost or with a stated fee.</strong> Show each service as its own line with the billing period. If your contract allows a handling fee, show it separately; see <a href="/blog/materials-markup">markup on materials and pass-throughs</a>.</li>
<li><strong>Keep receipts.</strong> Attach the vendor invoices or a usage export. Our guide on <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a> shows the format.</li>
<li><strong>Watch currency.</strong> Many vendors bill in US dollars; if you invoice in another currency, state the exchange rate used.</li>
</ul>

<h2>Example software development invoice</h2>
<p>A small studio bills a client for one two-week sprint under a time-and-materials SOW. Names and rates are fictional and for illustration only.</p>
<p><strong>Harbor Code Studio LLC</strong> | 77 Pier Street, Portland, OR 97209<br>
<strong>Invoice:</strong> HCS-2026-118 | <strong>Issued:</strong> October 27, 2026 | <strong>Due:</strong> November 26, 2026 (net 30)<br>
<strong>Bill to:</strong> Fieldline Logistics Inc. | <strong>PO:</strong> FL-88213 | <strong>SOW:</strong> SOW-03 (Dispatch Platform v2) | <strong>Period:</strong> Sprint 14, Oct 13 to Oct 24, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Senior software engineer (hours)</td><td>72</td><td>$150.00</td><td>$10,800.00</td></tr>
<tr><td>Software engineer (hours)</td><td>78</td><td>$115.00</td><td>$8,970.00</td></tr>
<tr><td>QA engineer (hours)</td><td>30</td><td>$85.00</td><td>$2,550.00</td></tr>
<tr><td>Project management (hours)</td><td>12</td><td>$95.00</td><td>$1,140.00</td></tr>
<tr><td>Warranty fix: route export bug (ticket DSP-412), no charge</td><td>3</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Cloud hosting, staging environment, October (pass-through at cost, receipt attached)</td><td>1</td><td>$186.40</td><td>$186.40</td></tr>
<tr><td>Map API usage, October (pass-through at cost)</td><td>1</td><td>$92.15</td><td>$92.15</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$23,738.55</strong></td></tr>
<tr><td colspan="3">Sales tax (custom development services, not taxable in OR)</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$23,738.55</strong></td></tr>
</tbody></table>
<p><strong>Notes:</strong> Sprint 14 delivered driver assignment rules, bulk route import and the export bug fix. Sprint demo held October 24. Timesheet attached. Ownership of Sprint 14 deliverables transfers on receipt of full payment per section 9 of the MSA. Pay by ACH to the account on file.</p>
<p>Oregon has no general sales tax; in other states, check whether custom software or related services are taxable before sending.</p>

<h2>Worked example: same project, T&amp;M vs fixed bid</h2>
<p>A client wants an internal inventory tool. The studio estimates 400 hours at a blended $120 per hour, or $48,000.</p>
<ul>
<li><strong>T&amp;M:</strong> Billed every two weeks. Actual hours come in at 440 because of an extra integration. Total billed: 440 x $120 = $52,800. The client pays for the overrun but also got the integration.</li>
<li><strong>Fixed bid:</strong> The studio adds a 15% contingency and quotes $55,200. Invoices: 30% deposit ($16,560), 30% at beta ($16,560), 30% at acceptance ($16,560), 10% after a 30-day warranty ($5,520). If the work takes 440 hours, the studio's effective rate is $55,200 / 440 = $125.45. If it takes 520 hours, it falls to about $106.15.</li>
</ul>
<p>The lesson: fixed bids need contingency and tight change control. Anything outside the SOW should go through a written change order (see <a href="/blog/scope-creep-change-order">handling scope creep with change orders</a>) and appear as its own line on the next invoice.</p>

<h2>Billing maintenance and support after launch</h2>
<p>Most software needs ongoing work after launch: security patches, dependency updates, operating system and browser changes, small enhancements and incident response. Agree on how this is billed before the warranty period ends, so the first post-launch invoice is not a surprise. Common structures:</p>
<table><thead><tr><th>Model</th><th>What the client pays</th><th>What goes on the invoice</th></tr></thead><tbody>
<tr><td>Hourly on demand</td><td>Hours actually used, no commitment</td><td>Tickets worked, hours, rate</td></tr>
<tr><td>Prepaid hour block</td><td>A block such as 20 hours, used over a set period</td><td>Hours used this period and hours remaining</td></tr>
<tr><td>Monthly support retainer</td><td>Fixed monthly fee for an agreed number of hours and response times</td><td>Retainer fee, hours used, overage billed at the agreed rate</td></tr>
<tr><td>Service level agreement (SLA)</td><td>Fixed fee for guaranteed response and uptime commitments</td><td>Monthly fee, any service credits</td></tr>
</tbody></table>
<p>For retainers, invoice in advance at the start of each month and bill overage in arrears on the next invoice. Our guide to <a href="/blog/retainer-invoice">retainer invoices</a> shows the wording. Clearly state whether unused hours roll over; most retainers say they do not, or roll over for one month only.</p>

<h2>Getting software invoices approved by enterprise clients</h2>
<p>Larger clients often route invoices through procurement and accounts payable systems that check every field. To avoid delays:</p>
<ul>
<li><strong>Get set up as a vendor early.</strong> Provide your W-9 (US) or tax forms, banking details and insurance certificates before the first invoice.</li>
<li><strong>Match the PO exactly.</strong> If the PO lists line items, mirror them. If the PO amount is nearly used up, ask for a new one before you exceed it.</li>
<li><strong>Use the billing contact in the contract,</strong> not only your day-to-day product owner.</li>
<li><strong>Send one invoice per PO</strong> unless the client asks otherwise.</li>
<li><strong>Know their cutoff.</strong> Many AP teams batch approvals monthly; missing the cutoff can add weeks.</li>
</ul>
<p>For overseas clients, state the currency, who pays bank fees and any tax treatment such as reverse charge VAT. The guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the details.</p>

<h2>How to create a software development invoice in 7 steps</h2>
<ol>
<li>Confirm the billing model, rates and terms in the SOW.</li>
<li>Export hours from your time tracker grouped by role and ticket.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a>, add your logo and business details.</li>
<li>Number the invoice consistently, for example by client and sequence; try the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li>Add labor lines, then pass-throughs and any credits.</li>
<li>Add the PO, SOW reference, delivery summary and IP note.</li>
<li>Download the PDF, attach the timesheet and receipts, and send it to the contact named in the contract.</li>
</ol>

<h2>Common software invoicing mistakes</h2>
<ul>
<li><strong>Missing PO or SOW numbers,</strong> which sends the invoice back from accounts payable.</li>
<li><strong>Billing out-of-scope work without a change order.</strong> Clients dispute surprises.</li>
<li><strong>Hiding hosting costs inside labor.</strong> It confuses budgets and makes transitions messy.</li>
<li><strong>Invoicing story points</strong> instead of hours or agreed fees.</li>
<li><strong>Transferring IP before payment.</strong> Tie it to full payment in the contract.</li>
<li><strong>Waiting until project end to bill.</strong> Bill per sprint or milestone and use a <a href="/blog/deposit-invoice">deposit invoice</a> for fixed bids.</li>
</ul>

<p>A strong software development invoice mirrors the contract, shows what each sprint or milestone delivered, separates pass-throughs and reminds the client that ownership follows payment. Our invoice generator is free, needs no sign-up and builds the PDF in your browser, so you can send professional development invoices without adding another tool to your stack.</p>
`,
  },
  {
    slug: "engineering-invoice-template",
    title: "Engineering Invoice Template: Phases, Hourly and % Complete",
    description:
      "Engineering invoice template for PE firms and consultants: bill by design phase, hourly by role or percent complete, with reimbursables and a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["architect-invoice-template", "progress-billing", "consulting-invoice-template"],
    faqs: [
      {
        q: "How do engineering firms bill clients?",
        a: "The most common methods are lump sum by phase, hourly by role with a not-to-exceed limit, cost plus fixed fee (often used on public work) and, less often, a percentage of construction cost. Many contracts mix them, for example a lump sum for design phases and hourly for construction administration. The invoice should follow the fee structure and billing schedule in the signed agreement.",
      },
      {
        q: "What is percent complete billing in engineering?",
        a: "Percent complete billing means each phase or task has a fixed fee, and each month you bill the share of that fee earned to date, minus what you already billed. If schematic design is worth $20,000 and is 60% complete, you have earned $12,000; if $8,000 was billed last month, this month's invoice is $4,000. Clients expect the percentages to match visible progress.",
      },
      {
        q: "Should engineering invoices show hours?",
        a: "For hourly contracts, yes: show hours by labor category and rate, and attach a summary by task if the client asks. For lump-sum phases, hours are usually not required, but some public and institutional clients still ask for a staffing summary to support the percent complete. Keep timesheets on file either way in case of audit or dispute.",
      },
      {
        q: "Can engineers mark up subconsultant fees?",
        a: "Often, if the agreement allows it. Prime engineering firms commonly add a percentage markup on subconsultants such as geotechnical, survey or MEP engineers to cover coordination, management and liability. The rate is negotiated and should be stated in the contract. Show the subconsultant cost and the markup clearly, and attach the subconsultant's invoice when the client requires backup.",
      },
      {
        q: "What are reimbursable expenses for engineers?",
        a: "Typical reimbursables include travel and mileage, printing and plotting, courier and shipping, permit and plan review fees paid on the client's behalf, laboratory testing and specialized software or equipment rental. Contracts usually state whether they are billed at cost or with a markup. Mileage is often billed at the IRS business rate, which was 72.5 cents per mile for January to June 2026 and 76 cents from July 1.",
      },
      {
        q: "Do engineering firms charge retainage?",
        a: "Engineers more often have retainage withheld than charge it. Some public and private owners hold back a percentage of each design invoice until the project or phase is complete, and construction phase services can be subject to retainage too. Track retained amounts separately on each invoice and send a final invoice to release them when the conditions are met.",
      },
      {
        q: "Is engineering work subject to sales tax?",
        a: "Professional engineering services are not taxable in most US states, but a few states tax some professional services, and rules differ for items like reproduction or surveying. Reimbursed costs may also be treated differently. Check your state's rules, particularly if you work across state lines, and note the tax status on the invoice so the client's AP team does not query it.",
      },
      {
        q: "What payment terms do engineering clients expect?",
        a: "Monthly invoicing with net 30 terms is the norm for consulting engineers. Public agencies may follow prompt payment laws that set their own deadlines, and large developers sometimes push for net 45 or 60. Agree on terms, late interest and the right to stop work for nonpayment in the contract rather than introducing them on the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An engineering invoice template bills a client for professional engineering services. It references the project, contract and billing period, then shows fees by phase with percent complete, hours by role and rate, or both, plus reimbursable expenses, subconsultant costs, previous billings, retainage and the amount due this period.</p>

<p>Consulting engineers bill differently from most service businesses. A single project can run for a year or more across several design phases, involve subconsultants and pass-through permit fees, and be invoiced monthly against a fixed fee for each phase. Owners and their project managers review engineering invoices closely, so the format needs to show the contract value, what was earned this period and what remains.</p>
<p>This guide explains the main engineering fee structures, how to invoice by phase and percent complete, how to present hourly rates by role and reimbursables, and how to handle retainage. It includes a full engineering invoice example with real arithmetic. You can recreate it in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is an engineering invoice?</h2>
<p>An engineering invoice is a progress bill from a professional engineering firm or licensed Professional Engineer (PE) for design, analysis, inspection or consulting work. Civil, structural, mechanical, electrical, plumbing (MEP), geotechnical and environmental engineers all use one. Unlike a contractor's invoice, it bills professional services, not construction work, though the structure is similar to <a href="/blog/progress-billing">progress billing</a> in construction.</p>
<p>Engineering is a large profession: the US Bureau of Labor Statistics profiles civil engineering alone in its <a href="https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm">Occupational Outlook Handbook</a>. Firms range from solo PEs doing residential structural letters to multi-office firms billing public agencies. The invoice principles are the same.</p>

<h2>Common engineering fee structures</h2>
<table><thead><tr><th>Fee structure</th><th>How it is invoiced</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Lump sum by phase</td><td>Each phase has a fixed fee; bill monthly by percent complete</td><td>Building design, site development</td></tr>
<tr><td>Hourly (time and materials)</td><td>Hours x role rate plus expenses, often with a not-to-exceed cap</td><td>Studies, uncertain scope, construction administration</td></tr>
<tr><td>Cost plus fixed fee</td><td>Direct labor x overhead rate, plus a fixed profit fee</td><td>Federal and state agency contracts</td></tr>
<tr><td>Multiplier</td><td>Direct salary cost x agreed multiplier</td><td>Some private and institutional clients</td></tr>
<tr><td>Percentage of construction cost</td><td>Fee is a percent of estimated or actual construction cost</td><td>Less common now; some building projects</td></tr>
<tr><td>Unit or per-item</td><td>Fixed price per inspection, test or report</td><td>Special inspections, materials testing, letters</td></tr>
</tbody></table>
<p>Architects use similar structures; the <a href="/blog/architect-invoice-template">architect invoice template</a> covers AIA-style phase billing from the design side. For general professional services, the <a href="/blog/consulting-invoice-template">consulting invoice template</a> is a simpler starting point.</p>

<h2>How to invoice PE services by phase</h2>
<p>Building and site projects usually follow standard phases. Each gets a share of the total fee in the contract:</p>
<ol>
<li><strong>Study or preliminary design:</strong> site investigation, feasibility, code review.</li>
<li><strong>Schematic design (SD):</strong> basic systems and layout.</li>
<li><strong>Design development (DD):</strong> sizing, coordination, outline specifications.</li>
<li><strong>Construction documents (CD):</strong> stamped drawings, calculations and specifications for permit and bid.</li>
<li><strong>Bidding and permitting:</strong> answering questions, permit comments.</li>
<li><strong>Construction administration (CA):</strong> submittal and RFI review, site visits, punch lists.</li>
</ol>
<p>Each month, estimate percent complete per phase, calculate the fee earned to date and subtract previous billings. Keep the estimate honest: if drawings are 40% done, do not bill 70% because the budget is tight. Owners compare billing with deliverables, and over-billing early creates disputes later.</p>

<h2>Hourly rates by role</h2>
<p>For hourly work, list each labor category with its contract rate. Rates depend on region, firm size and specialty, so the figures below are illustrative only, not a market survey:</p>
<table><thead><tr><th>Labor category</th><th>Illustrative billing rate</th></tr></thead><tbody>
<tr><td>Principal / senior PE</td><td>$210 to $260 per hour</td></tr>
<tr><td>Project engineer (PE)</td><td>$150 to $190 per hour</td></tr>
<tr><td>Staff engineer (EIT)</td><td>$110 to $140 per hour</td></tr>
<tr><td>Designer / CAD technician</td><td>$90 to $120 per hour</td></tr>
<tr><td>Field technician / inspector</td><td>$80 to $110 per hour</td></tr>
<tr><td>Administrative</td><td>$65 to $85 per hour</td></tr>
</tbody></table>
<p>Most firms publish a rate schedule attached to the contract and update it each January. The contract should say whether rates can change mid-project.</p>

<h2>Reimbursables and subconsultants</h2>
<p>Reimbursable expenses are costs the firm pays on the project's behalf. Common examples are mileage and travel, large-format printing, courier fees, permit and plan review fees, lab testing and subconsultant invoices. Mileage is often billed at the IRS business rate (72.5 cents per mile for January to June 2026 and 76 cents from July 1, 2026, per <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates">irs.gov</a>). See the <a href="/blog/mileage-invoice">mileage invoice guide</a> for formatting.</p>
<p>Subconsultants (survey, geotechnical, MEP, landscape) are often billed with a markup for coordination and risk, commonly stated in the contract as a percentage. Show cost and markup separately, and attach backup if required. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> explains how to present receipts.</p>

<h2>What should an engineering invoice include?</h2>
<ul>
<li>Firm name, address, license or certificate of authorization number where your state requires it on business documents.</li>
<li>Client name, project name and number, contract or task order number, PO.</li>
<li>Invoice number, date and billing period (for example, services through October 31, 2026).</li>
<li>Fee summary by phase: contract amount, percent complete, earned to date, previously billed, this invoice.</li>
<li>Hourly section for any T&amp;M tasks.</li>
<li>Reimbursables and subconsultants with markup.</li>
<li>Additional services authorized by amendment, listed separately.</li>
<li>Retainage withheld, if applicable.</li>
<li>Total due, terms and payment instructions.</li>
</ul>

<h2>Example engineering invoice (percent complete plus hourly)</h2>
<p>A civil engineering firm bills a developer for a site plan. All names and figures are fictional.</p>
<p><strong>Crestline Civil Engineering, PC</strong> | 1200 Grant Avenue, Denver, CO 80203<br>
<strong>Invoice:</strong> CCE-24117-07 | <strong>Issued:</strong> October 31, 2026 | <strong>Services through:</strong> October 31, 2026 | <strong>Due:</strong> November 30, 2026<br>
<strong>Client:</strong> Aspen Ridge Partners LLC | <strong>Project:</strong> Aspen Ridge Townhomes, No. 24117 | <strong>Agreement:</strong> dated March 2, 2026</p>
<p><strong>Lump sum phases</strong></p>
<table><thead><tr><th>Phase</th><th>Fee</th><th>% complete</th><th>Earned to date</th><th>Previously billed</th><th>This invoice</th></tr></thead><tbody>
<tr><td>Preliminary design</td><td>$12,000</td><td>100%</td><td>$12,000</td><td>$12,000</td><td>$0</td></tr>
<tr><td>Schematic design</td><td>$18,000</td><td>100%</td><td>$18,000</td><td>$18,000</td><td>$0</td></tr>
<tr><td>Construction documents</td><td>$42,000</td><td>65%</td><td>$27,300</td><td>$16,800</td><td>$10,500</td></tr>
<tr><td>Permitting</td><td>$8,000</td><td>20%</td><td>$1,600</td><td>$0</td><td>$1,600</td></tr>
<tr><td><strong>Subtotal</strong></td><td><strong>$80,000</strong></td><td></td><td><strong>$58,900</strong></td><td><strong>$46,800</strong></td><td><strong>$12,100</strong></td></tr>
</tbody></table>
<p><strong>Hourly additional services (Amendment 1, drainage study)</strong></p>
<table><thead><tr><th>Labor category</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Project engineer (PE)</td><td>14</td><td>$175.00</td><td>$2,450.00</td></tr>
<tr><td>Staff engineer (EIT)</td><td>22</td><td>$125.00</td><td>$2,750.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td></td><td><strong>$5,200.00</strong></td></tr>
</tbody></table>
<p><strong>Reimbursables</strong></p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Geotechnical subconsultant (invoice attached) $3,400.00 + 10% markup</td><td>$3,740.00</td></tr>
<tr><td>Plan review fee paid to county</td><td>$650.00</td></tr>
<tr><td>Mileage, 84 miles x $0.76</td><td>$63.84</td></tr>
<tr><td><strong>Subtotal</strong></td><td><strong>$4,453.84</strong></td></tr>
</tbody></table>
<p><strong>Invoice summary</strong></p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Lump sum phases</td><td>$12,100.00</td></tr>
<tr><td>Hourly additional services</td><td>$5,200.00</td></tr>
<tr><td>Reimbursables</td><td>$4,453.84</td></tr>
<tr><td><strong>Total due this invoice</strong></td><td><strong>$21,753.84</strong></td></tr>
</tbody></table>
<p>Fee remaining on lump sum phases after this invoice: $80,000 - $58,900 = $21,100.</p>
<h3>How the percent complete math works</h3>
<p>Construction documents are worth $42,000. At 65% complete, earned to date is $42,000 x 0.65 = $27,300. Last month the phase was 40% complete, so $16,800 was already billed. This month's charge is $27,300 - $16,800 = $10,500. The same logic applies to every phase, so the client can check each number against the drawings they have seen.</p>

<h2>Worked example: cost plus fixed fee and multiplier billing</h2>
<p>Public agencies and some institutional owners do not pay a flat hourly rate. Instead they reimburse the firm's actual salary cost, an audited overhead rate and a fixed fee for profit. Here is how one month might look, using illustrative numbers:</p>
<ul>
<li>Direct labor (actual salaries for hours worked): $14,000</li>
<li>Overhead at an audited rate of 150% of direct labor: $14,000 x 1.50 = $21,000</li>
<li>Total labor cost: $14,000 + $21,000 = $35,000</li>
<li>Fixed fee: the contract sets profit at $40,000 for the whole job; with the work 20% complete this month, $40,000 x 0.20 = $8,000</li>
<li>Direct expenses: $1,200</li>
<li>Invoice total: $35,000 + $8,000 + $1,200 = $44,200</li>
</ul>
<p>A multiplier contract is similar but simpler. If direct salary cost is $14,000 and the agreed multiplier is 3.0, the labor billing is $42,000, with expenses added separately. The multiplier covers overhead and profit together. In both cases, the invoice must show the components so the agency can audit them, and you need timesheets that support every hour.</p>

<h2>What owners check when they review an engineering invoice</h2>
<p>Owner project managers, lenders and public agencies review engineering invoices against a checklist, whether written or not. Before sending, check that:</p>
<ol>
<li>The contract value matches the signed agreement plus approved amendments, with no unauthorized increases.</li>
<li>Percent complete matches the deliverables they have seen (drawing sets, reports, permit submittals).</li>
<li>Previously billed amounts match what they have recorded as paid or pending.</li>
<li>Hourly tasks stay within any not-to-exceed limit, with a warning if they are close.</li>
<li>Reimbursables have backup and fall within the allowed categories.</li>
<li>The invoice is addressed to the right entity, often a single-purpose LLC for the project.</li>
<li>Lien waivers are attached if the lender requires them; see our <a href="/blog/lien-waiver">lien waiver guide</a>.</li>
</ol>
<p>Public clients often have their own invoice forms and pay under state or federal prompt payment rules. For federal work, the <a href="/blog/prompt-payment-act">Prompt Payment Act</a> sets when interest accrues on late payments, and our guide on <a href="/blog/how-to-invoice-the-federal-government">how to invoice the federal government</a> walks through the systems involved.</p>

<h2>Retainage, final invoices and late payment</h2>
<p>Some owners hold back a share of each design invoice, often 5% or 10%, until a phase or the whole project is complete. If that applies, add a line below the invoice total: "Less retainage at 10%: -$2,175.38", and show cumulative retainage held to date. When the condition is met, send a separate final invoice that releases the retained amount and references every invoice it came from.</p>
<p>Close-out invoices should also confirm that all phases are at 100%, all reimbursables are billed and no further amendments are pending. Owners appreciate a statement such as "This is the final invoice for Agreement dated March 2, 2026; no further fees are due other than retainage listed above."</p>
<p>For late payment, rely on the contract. Industry agreements commonly let the engineer charge interest on overdue balances and suspend services after written notice if invoices remain unpaid. A suspension of design work is a serious step, so send reminders first and keep a record. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to word interest charges, and the article on <a href="/blog/mechanics-lien">mechanics liens</a> explains when design professionals may have lien rights, which vary by state.</p>

<h2>How to create an engineering invoice, step by step</h2>
<ol>
<li>Pull the contract fee by phase and the approved amendments.</li>
<li>Get percent complete from each project manager, with a short note on progress.</li>
<li>Export hours for any hourly tasks by labor category.</li>
<li>Collect subconsultant invoices and expense receipts.</li>
<li>Build the invoice in the <a href="/invoice-generator">invoice generator</a>: header, project references, phase table, hourly lines and reimbursables.</li>
<li>Number invoices by project and sequence, such as 24117-07; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li>Add a brief progress narrative and send the PDF with backup by the date the client's AP cycle needs.</li>
</ol>

<h2>Common engineering invoicing mistakes</h2>
<ul>
<li><strong>Front-loading percent complete.</strong> It erodes trust and leaves little fee for late phases.</li>
<li><strong>Billing additional services without an amendment.</strong> Get written authorization first; our <a href="/blog/scope-creep-change-order">change order guide</a> shows how.</li>
<li><strong>Mixing reimbursables into labor.</strong> Keep them separate with receipts.</li>
<li><strong>Forgetting the previous billings column.</strong> Without it, the client cannot reconcile.</li>
<li><strong>Ignoring retainage.</strong> If the owner holds back a percentage, track it and send a <a href="/blog/retainage-invoice">retainage release invoice</a> at completion.</li>
<li><strong>Late invoices.</strong> Missing the client's monthly cutoff can add 30 days to payment.</li>
</ul>
<p>Licensing and seal rules vary by state board; this guide is general information, not legal advice.</p>

<p>A clear engineering invoice template shows the contract value, percent complete by phase, hourly work, reimbursables and the amount due, so owners can approve it without a call. Our invoice generator is free, needs no sign-up and creates the PDF in your browser, which makes it a fast way to produce consistent progress invoices for every project.</p>
`,
  },
  {
    slug: "wedding-planner-invoice-template",
    title: "Wedding Planner Invoice Template (Packages + Deposits)",
    description:
      "Wedding planner invoice template for full, partial and day-of coordination: deposit schedules, vendor coordination fees, travel and a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "event-planner-invoice-template",
      "how-to-start-a-wedding-planning-business",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "How much deposit should a wedding planner take?",
        a: "Many planners take a non-refundable retainer at booking, often between 25% and 50% of the planning fee, to reserve the date and cover early work. The rest is split into one or more interim payments, with the final balance due several weeks before the wedding. There is no legal standard, so set a schedule that matches your workload and state it in the contract.",
      },
      {
        q: "Is a wedding planner retainer refundable?",
        a: "That depends on the contract and state law. Planners usually call the booking payment a non-refundable retainer because it reserves a date they could have sold to someone else. Courts in some states look closely at whether a non-refundable amount is reasonable compared with the planner's actual loss. Use clear contract wording and avoid calling it a deposit if you intend to keep it.",
      },
      {
        q: "Should a wedding planner invoice include vendor costs?",
        a: "Usually not. Most couples pay vendors such as venues, caterers, florists and photographers directly under their own contracts. The planner invoices only for planning services, coordination fees and reimbursable expenses. If you do pay vendors on the couple's behalf, show each payment as a separate pass-through line with receipts and disclose any handling fee or commission.",
      },
      {
        q: "Do wedding planners charge sales tax?",
        a: "Planning and coordination services are not taxable in many states, but some states tax certain services or event-related charges, and tangible items you sell, such as decor, favors or rentals, are often taxable. Rules vary, so check your state revenue department. If part of the invoice is taxable, put those items on separate lines so tax is calculated only where it applies and the couple can see why.",
      },
      {
        q: "What is the difference between day-of and month-of coordination?",
        a: "Day-of coordination is a misleading name because no planner can run a wedding well by arriving that morning. Most so-called day-of packages are really month-of coordination: the planner takes over four to eight weeks before the event, confirms vendors, builds the timeline, runs the rehearsal and manages the day. Invoice it as a fixed package fee with clear hours on the wedding day.",
      },
      {
        q: "Can a wedding planner charge overtime?",
        a: "Yes, if the contract sets the hours included on the wedding day and an hourly overtime rate. Late receptions and delays are common, so many planners include eight to twelve hours of event coverage and bill extra time per hour per staff member. Record overtime on the final invoice or a short post-event invoice, with the start and end times.",
      },
      {
        q: "Should I tip a wedding planner, and does it go on the invoice?",
        a: "Tips are optional and usually given in cash or a card at the end of the event, not invoiced. Planners should not add a gratuity line unless the contract says a service charge applies. If couples want to tip by card or transfer, you can provide a payment link or add a separate optional line, but make clear it is voluntary and is not part of the contract price.",
      },
      {
        q: "When should the final wedding planner payment be due?",
        a: "Most planners require the final balance two to four weeks before the wedding, after the final guest count and vendor confirmations. Collecting before the event avoids chasing money from newlyweds after the honeymoon starts. Any overtime or extra expenses incurred on the day can go on a short final invoice due within seven to fourteen days.",
      },
      {
        q: "Should a wedding planner accept commissions from vendors?",
        a: "Some planners receive referral fees from vendors, but undisclosed commissions damage trust because the couple may think recommendations are neutral. If you accept them, disclose the arrangement in writing. Many planners now refuse commissions and charge a higher planning fee instead, which keeps the invoice and the relationship straightforward and easy to explain.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A wedding planner invoice template bills a couple for planning and coordination services. It lists the package (full planning, partial planning or day-of coordination), the planning fee, retainer and payment schedule, extras such as additional assistants, vendor coordination, travel or overtime, payments received, any sales tax and the balance due with dates.</p>

<p>Weddings are booked a year or more ahead, paid in installments and often funded by more than one family member. That makes the wedding planner invoice part of a longer billing story: a retainer at booking, interim payments, a final balance before the date and sometimes a post-event bill for overtime. A clear wedding planner invoice keeps everyone aligned on what has been paid and what is still due.</p>
<p>This guide explains how planners price packages, how to set up a deposit and payment schedule, how to bill vendor coordination and pass-through costs, and what to put on each invoice. It includes a complete example and a payment schedule worked out with real numbers. You can build each invoice in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What is a wedding planner invoice?</h2>
<p>A wedding planner invoice is a request for payment from a wedding planner, coordinator or planning company for services under a signed planning agreement. Unlike a general <a href="/blog/event-planner-invoice-template">event planner invoice</a>, it usually covers a long engagement with several scheduled payments, a fixed event date and personal clients rather than a business with an accounts payable team.</p>
<p>Each invoice in the series should show the full contract value, payments to date and the amount due now. That way, a parent paying one installment or a couple checking their budget can see the whole picture.</p>

<h2>Wedding planning packages and how to price them</h2>
<table><thead><tr><th>Package</th><th>What it covers</th><th>Common pricing method</th></tr></thead><tbody>
<tr><td>Full planning</td><td>Budget, venue search, vendor selection, design, contract review, timeline, rehearsal and wedding day</td><td>Flat fee or a percentage of the total wedding budget, often with a minimum</td></tr>
<tr><td>Partial planning</td><td>Starts after the venue and some vendors are booked; fills gaps, design and logistics</td><td>Flat fee</td></tr>
<tr><td>Month-of / day-of coordination</td><td>Takes over 4 to 8 weeks out; confirms vendors, runs rehearsal and the day</td><td>Flat fee with set event hours</td></tr>
<tr><td>Destination planning</td><td>Full or partial planning with travel and local vendor management</td><td>Flat fee plus travel</td></tr>
<tr><td>A la carte</td><td>Design only, vendor search, rehearsal only</td><td>Hourly or per service</td></tr>
</tbody></table>
<p>Prices vary widely by market and experience. The figures in this guide are illustrative, not a survey. Some full-service planners charge a percentage of the wedding budget (with a floor so small weddings remain profitable), while others prefer a flat fee so their pay does not rise just because the couple spends more. Whichever you choose, the invoice should name the package exactly as the contract does.</p>

<h2>How to set a deposit and payment schedule</h2>
<p>Because planners turn down other bookings for the date, nearly all require a retainer when the contract is signed. A typical schedule for a full planning package:</p>
<ol>
<li><strong>Retainer at signing:</strong> often 25% to 50% of the planning fee, non-refundable per contract.</li>
<li><strong>Interim payment(s):</strong> at a midpoint such as six months before the wedding.</li>
<li><strong>Final balance:</strong> two to four weeks before the wedding.</li>
<li><strong>Post-event invoice:</strong> only for overtime or approved expenses incurred on the day.</li>
</ol>
<p>Issue an invoice for each installment rather than relying on reminders alone. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains how to word the first one, and the <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> shows how to roll prior payments forward. For couples who need a longer plan, a written <a href="/blog/payment-plan-agreement">payment plan agreement</a> avoids confusion.</p>
<p>Tax note: when you receive advance payments, the timing of income recognition depends on your accounting method; the IRS explains methods in <a href="https://www.irs.gov/publications/p538">Publication 538</a>. Most small planners use the cash method and report payments when received. This is general information, not tax advice.</p>

<h2>Vendor coordination fees and pass-through costs</h2>
<p>Most couples sign directly with the venue, caterer, photographer and other vendors and pay them directly. The planner bills for managing those relationships, not for the vendors' services. A few situations need extra lines:</p>
<ul>
<li><strong>Vendor coordination fee:</strong> some planners charge a separate fee when a couple books many vendors or vendors the planner has not worked with.</li>
<li><strong>Additional assistants:</strong> large guest counts may need extra staff on the day, billed per person.</li>
<li><strong>Purchases on the couple's behalf:</strong> signage, favors, decor or rentals. Bill at cost with receipts, or with a disclosed handling fee. Tangible items may be taxable.</li>
<li><strong>Travel and lodging:</strong> for venues beyond a stated radius or destination weddings.</li>
<li><strong>Overtime:</strong> event hours beyond those included, per hour per staff member.</li>
</ul>
<p>Be open about vendor commissions. If you accept referral fees, disclose them in writing; many planners decline them entirely.</p>

<h2>What should a wedding planner invoice include?</h2>
<ul>
<li>Your business name, logo, address, phone, email and website.</li>
<li>Invoice number, issue date and due date.</li>
<li>Client names (both partners) and the paying party if different, such as a parent.</li>
<li>Wedding date, venue and contract date.</li>
<li>Package name and total planning fee.</li>
<li>This installment and its share of the fee.</li>
<li>Extras and pass-through costs, each on its own line.</li>
<li>Sales tax on taxable items only; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps.</li>
<li>Payments received to date and remaining balance.</li>
<li>Payment methods, late fee and cancellation terms; see <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</li>
</ul>

<h2>Example wedding planner invoice (interim payment)</h2>
<p>This example shows the second of three installments on a full planning package. Names and prices are fictional and illustrative.</p>
<p><strong>Juniper &amp; Lace Events</strong> | 32 Market Street, Charleston, SC 29401<br>
<strong>Invoice:</strong> JLE-2026-219 | <strong>Issued:</strong> October 29, 2026 | <strong>Due:</strong> November 12, 2026<br>
<strong>Clients:</strong> Avery Collins and Sam Patel | <strong>Wedding date:</strong> May 15, 2027 | <strong>Venue:</strong> Magnolia Hall | <strong>Contract:</strong> signed April 20, 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full planning package, total fee $9,500. Installment 2 of 3 (35%)</td><td>1</td><td>$3,325.00</td><td>$3,325.00</td></tr>
<tr><td>Additional day-of assistant (guest count over 150)</td><td>1</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td>Vendor coordination: 3 out-of-network vendors</td><td>3</td><td>$150.00</td><td>$450.00</td></tr>
<tr><td>Welcome signage and table numbers (purchased for clients, at cost, receipt attached)</td><td>1</td><td>$212.00</td><td>$212.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$4,437.00</strong></td></tr>
<tr><td colspan="3">Sales tax on tangible goods ($212.00 x 9%)</td><td>$19.08</td></tr>
<tr><td colspan="3"><strong>Amount due this invoice</strong></td><td><strong>$4,456.08</strong></td></tr>
</tbody></table>
<p><strong>Payment summary:</strong> Planning fee $9,500.00. Paid: retainer $3,325.00 (April 20, 2026). This invoice: $3,325.00 of planning fee. Remaining planning fee after this invoice: $2,850.00, due April 24, 2027 (three weeks before the wedding).</p>
<p>Sales tax treatment and rates vary by state and locality; the 9% figure is illustrative. Check your own state's rules on signage and decor before charging tax.</p>

<h2>Worked example: building a full payment schedule</h2>
<p>A planner books a full planning package at $9,500 in April for a May wedding the following year. The contract uses a 35/35/30 split:</p>
<table><thead><tr><th>Payment</th><th>Due</th><th>Share</th><th>Amount</th><th>Balance after</th></tr></thead><tbody>
<tr><td>Retainer</td><td>At signing (April 20, 2026)</td><td>35%</td><td>$3,325</td><td>$6,175</td></tr>
<tr><td>Interim</td><td>November 12, 2026</td><td>35%</td><td>$3,325</td><td>$2,850</td></tr>
<tr><td>Final</td><td>April 24, 2027</td><td>30%</td><td>$2,850</td><td>$0</td></tr>
</tbody></table>
<p>If the reception runs 90 minutes over the 10 hours included and two staff stay, overtime at $75 per hour per person is 1.5 x 2 x $75 = $225, invoiced after the event. If the couple cancels in January 2027, the retainer is kept per contract, and the cancellation clause decides whether the interim payment is refundable. Our guide to a <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> covers how to bill that situation.</p>

<h2>Flat fee vs percentage of budget: a worked comparison</h2>
<p>Suppose a couple plans a wedding with a $60,000 total budget (venue, catering, flowers, photography and so on). Compare two ways a planner might price full planning, using illustrative numbers:</p>
<table><thead><tr><th>Pricing method</th><th>Calculation</th><th>Planning fee</th></tr></thead><tbody>
<tr><td>Percentage of budget</td><td>15% x $60,000</td><td>$9,000</td></tr>
<tr><td>Percentage with minimum</td><td>15% x $40,000 = $6,000, raised to an $8,000 minimum</td><td>$8,000</td></tr>
<tr><td>Flat fee</td><td>Based on estimated 160 hours x $60 effective rate</td><td>$9,600</td></tr>
</tbody></table>
<p>The percentage method grows with the budget, which can feel fair for complex weddings but makes the fee move if the couple changes plans. If the budget rises to $75,000 halfway through, a 15% fee rises to $11,250, and the next invoice has to explain the change. A flat fee is easier to invoice because the installments never change. Whichever you use, put the method and any adjustment rule in the contract, and show the calculation on the invoice when the fee changes.</p>

<h2>Who pays: invoicing couples, parents and split payments</h2>
<p>Weddings are often paid by several people: the couple, one or both sets of parents, sometimes grandparents. A few practices keep this clean:</p>
<ul>
<li><strong>Name the contracting party.</strong> The person who signs the planning agreement is responsible for paying. Address the invoice to them, and list the couple's names and wedding date for reference.</li>
<li><strong>Split by agreement, not by request.</strong> If two families each pay half, issue two invoices that reference the same contract and show each party's share, rather than one invoice that two people half-pay. Each party then gets its own receipt and reminder schedule.</li>
<li><strong>Keep a running statement.</strong> A simple <a href="/blog/statement-of-account">statement of account</a> listing every invoice and payment helps when several people are paying.</li>
<li><strong>Send receipts promptly.</strong> Parents often want proof that their contribution arrived.</li>
</ul>
<h3>Date changes and cancellations</h3>
<p>Postponements are common. Your contract should say whether payments transfer to a new date, whether a rebooking fee applies and what happens if the new date is unavailable. When a date moves, issue a revised payment schedule and void or credit any invoice whose due date no longer makes sense, using a <a href="/blog/credit-note-guide">credit note</a> rather than deleting it.</p>

<h2>Step-by-step: sending a wedding planner invoice</h2>
<ol>
<li>Copy the package name, fee and schedule from the signed contract.</li>
<li>Open the <a href="/invoice-generator">invoice generator</a> and add your branding.</li>
<li>Use a numbering format per year, such as JLE-2026-219; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li>Add the installment line, extras and any pass-through purchases.</li>
<li>Apply tax only to taxable lines.</li>
<li>Add the payment summary showing what has been paid and what remains.</li>
<li>Send the PDF two weeks before the due date with a friendly note and payment link.</li>
</ol>

<h2>Common wedding planner invoicing mistakes</h2>
<ul>
<li><strong>Calling a non-refundable retainer a "deposit"</strong> without clear contract terms.</li>
<li><strong>No running balance.</strong> Couples lose track of what has been paid across months.</li>
<li><strong>Final payment due after the wedding.</strong> Collect before the date.</li>
<li><strong>Undisclosed commissions or markups</strong> on vendor purchases.</li>
<li><strong>Taxing the whole invoice</strong> when only goods are taxable, or not taxing goods that are.</li>
<li><strong>Billing overtime without records.</strong> Note start and end times on the day.</li>
</ul>
<p>Planning to grow your own firm? Our guide to <a href="/blog/how-to-start-a-wedding-planning-business">starting a wedding planning business</a> covers contracts, packages and pricing in more depth, and the <a href="/blog/catering-invoice-template">catering invoice template</a> shows how one of your key vendors bills.</p>

<p>A good wedding planner invoice shows the package, the installment, any extras and a clear running balance, so couples and parents always know where they stand. Our invoice generator is free, needs no sign-up and downloads a polished PDF built in your browser, ready to send for every payment from retainer to final balance.</p>
`,
  },
];
