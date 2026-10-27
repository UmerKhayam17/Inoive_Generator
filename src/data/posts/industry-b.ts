import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_B: PostDraft[] = [
  {
    slug: "rent-invoice-template",
    title: "Rent Invoice Template: A Free Guide for Landlords (2026)",
    description:
      "Use a free rent invoice template to bill tenants clearly for rent, utilities, parking and late fees, with a worked example, prorated rent maths and tips.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "property-management-invoice-template",
      "hotel-invoice-template",
      "recurring-invoices-guide",
      "late-payment-fees",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "Do landlords have to send a rent invoice?",
        a: "Most residential leases do not require a monthly invoice, because the lease already sets the rent and due date. Many landlords still send one because it shows exactly what is owed, including utilities or fees, and gives both sides a clear record.",
      },
      {
        q: "What is the difference between a rent invoice and a rent receipt?",
        a: "A rent invoice asks the tenant to pay a stated amount by a due date. A rent receipt confirms that payment was received. Many landlords send an invoice before the due date and a receipt once the money arrives.",
      },
      {
        q: "How do I calculate prorated rent?",
        a: "Divide the monthly rent by the number of days in that month to get a daily rate, then multiply by the number of days the tenant occupies the unit. Some leases use a 30-day month or an annual daily rate instead, so follow the method written in your lease.",
      },
      {
        q: "Can I add a late fee to a rent invoice?",
        a: "You can usually add a late fee only if the lease allows it and the amount complies with local law. Many US states and cities cap residential late fees or set a grace period, so check your local rules before charging one.",
      },
      {
        q: "Should commercial rent invoices include tax?",
        a: "Sometimes. In some places commercial rent can be subject to VAT or a local tax, for example where a UK landlord has opted to tax a commercial property. Residential rent is usually exempt, but confirm with an accountant for your property and location.",
      },
      {
        q: "Do landlords need rent invoices for tax purposes?",
        a: "There is usually no rule that you must issue rent invoices, but you do need records of rent received and expenses for your tax return. Invoices and receipts make that record easy to keep and to match against bank deposits. US landlords report rental income to the IRS; UK landlords report to HMRC, and some must now keep digital records under Making Tax Digital. Ask an accountant what applies.",
      },
      {
        q: "Do I have to protect a tenant's security deposit?",
        a: "In many places, yes. In England, most deposits for assured tenancies must be placed in a government-approved protection scheme within 30 days, and the tenant must be given prescribed information. Many US states set their own rules on where deposits are held, interest and return deadlines. Check your local landlord-tenant law, and keep the deposit off your monthly rent invoices.",
      },
      {
        q: "What should I do if a tenant pays only part of the rent?",
        a: "Record the partial payment with its date, give a receipt for the amount received, and show the remaining balance as overdue on the next invoice or a statement. Be careful: in some places, accepting partial rent can affect your right to start eviction proceedings for that period. Check your local landlord-tenant law or ask an attorney before accepting partial payments if legal action is likely.",
      },
      {
        q: "Can I add a card processing fee to a rent invoice?",
        a: "Possibly, but check the rules first. Card surcharges are restricted in some US states and by card network rules, and in the UK surcharges on consumer card payments are banned. Some landlords offer free bank transfer and accept cards only through a platform that charges a disclosed fee. Make sure any fee is allowed by your lease and local law before adding it to an invoice.",
      },
      {
        q: "How far in advance should I send a rent invoice?",
        a: "Sending it a week or two before the due date works well for most tenants, because it gives them time to arrange payment without forgetting. Consistency matters more than the exact day: pick one, such as the 20th of each month for rent due on the 1st, and stick to it. If your lease or local law sets notice periods for new charges or rent increases, follow those.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A rent invoice template is a reusable layout landlords use to bill tenants for rent and related charges. It should show the landlord and tenant names, the property address, the rental period, the rent amount, any extra charges such as utilities or parking, the due date and how to pay. Send it on the same day each month so tenants know exactly what they owe and when.</p>

<p>This guide covers what to put on a rent invoice, the line items landlords commonly bill, a worked example with prorated rent, and how to handle late fees, deposits and commercial tenants. You can build one in a few minutes with our <a href="/invoice-generator">free invoice generator</a>, then reuse it every month.</p>

<h2>What is a rent invoice and when do landlords use one?</h2>
<p>A rent invoice is a request for payment of rent for a specific period, usually a calendar month. The lease is the contract; the invoice is the monthly bill that puts the contract into numbers. For a single flat with fixed rent and no extras, some landlords skip invoices entirely. As soon as anything varies (utilities passed through to the tenant, a parking space, a one-off repair charge, a late fee), an invoice removes guesswork.</p>
<p>Rent invoices are especially common for:</p>
<ul>
<li><strong>Commercial tenants</strong>, whose finance teams often won't pay without an invoice and may require a purchase order number or a supplier reference.</li>
<li><strong>Landlords with several units</strong>, who need a consistent record for each tenant and property.</li>
<li><strong>Room rentals and lodgers</strong>, where rent may include a share of bills.</li>
<li><strong>Storage, garage and parking rentals</strong>, which often have no formal lease at all.</li>
<li><strong>Tenants who need proof of housing costs</strong>, for example for benefits, employers or visa applications.</li>
</ul>

<h2>What to include on a rent invoice template</h2>
<p>A good rent invoice template has the same core fields as any invoice, plus a few that are specific to property. Our guide on <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> explains the general fields in more depth.</p>
<table><thead><tr><th>Field</th><th>What to enter</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Landlord or managing agent</td><td>Legal name, address, email, phone</td><td>Tells the tenant who is owed the money</td></tr>
<tr><td>Tenant</td><td>Name(s) exactly as on the lease</td><td>Matches the invoice to the right tenancy</td></tr>
<tr><td>Property address</td><td>Full address including unit number</td><td>Essential if you let more than one unit</td></tr>
<tr><td>Invoice number</td><td>Unique and sequential, e.g. RENT-2026-011</td><td>Keeps your records clean for tax time</td></tr>
<tr><td>Rental period</td><td>e.g. 1–30 November 2026</td><td>Shows exactly which month is being billed</td></tr>
<tr><td>Issue date and due date</td><td>A real calendar date, matching the lease</td><td>Removes any doubt about when rent is late</td></tr>
<tr><td>Line items</td><td>Rent, utilities, parking, fees, credits</td><td>Lets the tenant check every charge</td></tr>
<tr><td>Payment details</td><td>Bank transfer details, payment link or accepted methods</td><td>Makes paying on time easy</td></tr>
<tr><td>Notes</td><td>Late fee policy as written in the lease, contact for maintenance</td><td>Reminds the tenant of agreed terms</td></tr>
</tbody></table>
<p>Use a single numbering sequence across all your properties, or a prefix per property if you prefer. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can build a format such as <code>APT4-2026-011</code> so you never duplicate a number.</p>

<h2>Typical line items on a rent invoice</h2>
<p>Keep rent on its own line and show every extra charge separately. A tenant who can see each amount is far less likely to dispute the total.</p>
<ul>
<li><strong>Base rent</strong> for the period, at the amount in the lease.</li>
<li><strong>Prorated rent</strong> for a partial first or last month.</li>
<li><strong>Utilities</strong> passed through to the tenant (water, sewer, trash, gas or electricity), ideally with the meter reading or bill reference.</li>
<li><strong>Parking, storage or garage</strong> fees if they are billed separately from rent.</li>
<li><strong>Pet rent</strong>, where the lease allows it.</li>
<li><strong>Common area or service charges</strong> for commercial tenancies.</li>
<li><strong>Repairs the tenant is responsible for</strong> under the lease, with a short description.</li>
<li><strong>Late fees</strong> from a previous period, if permitted.</li>
<li><strong>Credits</strong>, such as a rent concession or reimbursement for a repair the tenant paid for, shown as a negative line.</li>
</ul>
<p>Security deposits are usually best handled on a separate document, not mixed into a monthly rent invoice. Many jurisdictions have specific rules on how deposits are held, protected and returned, and keeping them separate makes your records much clearer.</p>

<h2>Worked example: a monthly rent invoice</h2>
<p>Here is a sample rent invoice for an apartment, issued on 22 October 2026 for November rent, due on 1 November 2026. The tenant paid a plumber $120 for a repair the landlord agreed to cover, so it appears as a credit.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Rent: Unit 4B, 1–30 November 2026</td><td>1</td><td>$1,850.00</td><td>$1,850.00</td></tr>
<tr><td>Parking space #12: November 2026</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Water and sewer: September billing period (city bill #88213)</td><td>1</td><td>$62.40</td><td>$62.40</td></tr>
<tr><td>Late fee: October rent paid after grace period (per lease clause 5)</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Credit: kitchen sink repair paid by tenant (receipt on file)</td><td>1</td><td>−$120.00</td><td>−$120.00</td></tr>
<tr><td colspan="3"><strong>Total due by 1 November 2026</strong></td><td><strong>$1,917.40</strong></td></tr>
</tbody></table>
<p>The maths: $1,850.00 + $75.00 + $62.40 + $50.00 − $120.00 = $1,917.40. No tax is shown because residential rent is generally not taxed, but rules for commercial and short-term rentals differ. See the section on commercial tenants below.</p>

<h3>How to calculate prorated rent</h3>
<p>When a tenant moves in mid-month, bill only the days they occupy the unit. The most common method is a daily rate based on the days in that month:</p>
<ol>
<li>Divide the monthly rent by the days in the month: $1,850 ÷ 30 = $61.6667 per day for November.</li>
<li>Count the days occupied, including the move-in day: 18 to 30 November is 13 days.</li>
<li>Multiply: $61.6667 × 13 = $801.67 (rounded to the nearest cent).</li>
</ol>
<p>Some leases use a fixed 30-day month or an annual daily rate (annual rent ÷ 365) instead. Use whichever method your lease specifies, and write it in the line description, for example "Prorated rent, 18–30 Nov (13 days × $61.67)".</p>

<h2>Late fees, grace periods and local rules</h2>
<p>A rent invoice can only include charges the lease allows. Late fees are the area where landlords most often get into trouble, because many US states and cities cap residential late fees, require a grace period, or require the fee to be stated in the lease. Some places outside the US restrict them further. Before adding a late fee, check your lease and your local landlord-tenant rules, and consult a local attorney or housing authority if you are unsure.</p>
<p>When you do charge one, describe it plainly ("Late fee: October rent received 8 October, per lease clause 5") rather than burying it in the rent line. Our guide to <a href="/blog/late-payment-fees">charging late payment fees</a> explains how to word late terms clearly, and <a href="/blog/overdue-invoice">handling an overdue invoice</a> covers what to do when rent simply doesn't arrive.</p>

<h2>Rent invoice vs rent receipt</h2>
<p>Landlords often need both documents, and they do different jobs:</p>
<table><thead><tr><th></th><th>Rent invoice</th><th>Rent receipt</th></tr></thead><tbody>
<tr><td>When sent</td><td>Before rent is due</td><td>After rent is paid</td></tr>
<tr><td>Purpose</td><td>Requests payment</td><td>Confirms payment</td></tr>
<tr><td>Key fields</td><td>Amount due, due date, how to pay</td><td>Amount received, date received, method, balance remaining</td></tr>
<tr><td>Who keeps it</td><td>Both parties</td><td>Mainly the tenant, as proof of payment</td></tr>
</tbody></table>
<p>Some jurisdictions require landlords to give a receipt for cash rent payments, so it is a good habit for every payment. Our <a href="/blog/payment-receipt-template">payment receipt template</a> guide shows what to include, and <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> explains the difference in more detail.</p>

<h2>Invoicing commercial tenants</h2>
<p>Commercial tenancies tend to be more formal. Business tenants may need your tax ID on the invoice, a reference to the lease, separate lines for base rent and service charges, and sometimes quarterly rather than monthly billing. Tax can also apply: in the UK, a landlord who has opted to tax a commercial property must charge VAT on the rent, and some other jurisdictions apply sales or rental taxes to commercial or short-term lets. Residential rent is usually exempt. Because these rules depend on the property and location, confirm the treatment with your accountant before adding tax to a rent invoice.</p>
<p>If you do charge VAT or another tax, show it as its own line with the rate, and use a clean, formal layout such as the <a href="/invoice-templates/classic">Classic invoice template</a> so the tenant's accounts team can process it quickly.</p>

<h2>Tips to collect rent on time</h2>
<ul>
<li><strong>Invoice on a fixed schedule.</strong> Send the invoice the same number of days before each due date. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to make this routine.</li>
<li><strong>Use a real due date.</strong> Write "Due 1 November 2026" rather than "due on the first". See <a href="/blog/invoice-due-date">invoice due dates explained</a>.</li>
<li><strong>Make paying easy.</strong> Put your bank details or payment link on every invoice. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows which fields to include.</li>
<li><strong>Keep one record per tenancy.</strong> Save every invoice and receipt as a PDF in a folder per property, which makes tax returns and any dispute much easier.</li>
<li><strong>Follow up quickly and politely.</strong> A short reminder the day after rent is late resolves most missed payments before they become a problem.</li>
</ul>

<h2>Create your rent invoice now</h2>
<p>A clear rent invoice template saves you time each month and gives tenants no reason to query what they owe. Open the generator with <a href="/invoice-generator/usa">US presets</a> or start from the uncluttered <a href="/invoice-templates/minimal">Minimal template</a>, add your property and tenant details, list rent and any extras, and download a PDF ready to send.</p>
`,
  },
  {
    slug: "medical-invoice-template",
    title: "Medical Invoice Template for Private Practice Billing (2026)",
    description:
      "Free medical invoice template guide for private and self-pay practices: required fields, CPT and superbill details, privacy tips and a worked patient example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["itemized-invoice", "payment-receipt-template", "how-long-to-keep-invoices"],
    faqs: [
      {
        q: "Is a medical invoice the same as an insurance claim?",
        a: "No. A medical invoice bills the patient or another payer directly for services. Insurance claims are submitted on standardized claim forms or electronic formats defined by the insurer or government program, which a general invoice template does not replace.",
      },
      {
        q: "What is a superbill?",
        a: "A superbill is an itemized statement that a patient can submit to their insurer for out-of-network reimbursement. It usually lists the provider's details and identifiers, dates of service, procedure codes, diagnosis codes and amounts paid.",
      },
      {
        q: "Should I put diagnosis codes on a patient invoice?",
        a: "Only if the patient or payer needs them, for example on a superbill. A medical invoice can contain protected health information, so include the minimum detail necessary and send it securely. Check your privacy obligations with a compliance adviser.",
      },
      {
        q: "Do I need to give self-pay patients a cost estimate in the US?",
        a: "Under the No Surprises Act, many US providers must give uninsured or self-pay patients a good faith estimate before scheduled care, and patients may dispute bills that substantially exceed it. Confirm how the rules apply to your practice with a healthcare attorney or compliance professional.",
      },
      {
        q: "Are medical services subject to VAT or sales tax?",
        a: "Medical care is commonly exempt from VAT and sales tax, but there are exceptions, such as some cosmetic treatments and products. Treatment varies by country and service, so confirm with an accountant before invoicing.",
      },
      {
        q: "Can patients use an HSA or FSA to pay a medical invoice?",
        a: "Often yes, for qualified medical expenses. Patients usually need an itemized invoice or receipt showing the provider, patient name, date of service, a description of each service and the amount paid, because plan administrators can ask for proof. Whether a service qualifies depends on IRS rules and the plan, so patients should confirm with their administrator rather than rely on the practice.",
      },
      {
        q: "When can a self-pay patient dispute a bill that exceeds the good faith estimate?",
        a: "Under the No Surprises Act process, an uninsured or self-pay patient can generally dispute a bill that is at least $400 more than the provider's good faith estimate, within 120 days of the date on the initial bill. An independent reviewer then decides the amount owed. Keep invoices consistent with your estimate and explain unexpected charges. CMS publishes the current rules.",
      },
      {
        q: "Can I offer a discount to self-pay patients?",
        a: "Many practices do, such as a cash-pay or prompt-pay discount, and showing it as a separate adjustment line keeps your standard fee visible. Be careful with insured patients: routinely waiving copays or deductibles can breach insurer contracts and, for government programs, raise fraud and abuse concerns. Write a consistent discount policy and check it with a healthcare attorney or compliance adviser.",
      },
      {
        q: "Can I email a medical invoice to a patient?",
        a: "You can, but take care with privacy. In the US, HIPAA allows email communication with reasonable safeguards, and patients can choose unencrypted email after being told of the risks. Use a secure portal or encrypted email where possible, keep clinical detail to the minimum the patient needs, and never put diagnoses or treatment names in the subject line.",
      },
      {
        q: "Can I set up a payment plan for a patient's balance?",
        a: "Yes. Agree the plan in writing: the total balance, the number and amount of payments, due dates and what happens if a payment is missed. Then send each installment as its own invoice, or a statement showing the original balance, payments received and the amount remaining. Some states regulate medical debt, interest and collection practices, so check local rules before adding interest or fees.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A medical invoice template is a billing layout that private practices, clinics and independent practitioners use to charge patients directly for care. It should show the practice and provider details, the patient and account number, dates of service, each service with a clear description (and procedure code if used), the fee, any payments or adjustments, the balance due and how to pay. It is for direct patient billing, not a replacement for insurance claim forms.</p>

<p>This guide explains what belongs on a medical invoice, the typical line items in private practice, how superbills differ, privacy and pricing rules to be aware of, and a worked example. You can build a clean, professional patient invoice with our <a href="/invoice-generator">free invoice generator</a> and download it as a PDF.</p>

<h2>When practices use a medical invoice template</h2>
<p>Most insured care in the US is billed to insurers through standardized claim forms and electronic transactions. A medical invoice template is for everything else: the situations where the practice bills a person or organization directly:</p>
<ul>
<li><strong>Self-pay and uninsured patients</strong>, including cash-pay clinics and direct primary care memberships.</li>
<li><strong>Out-of-network care</strong>, where the patient pays and then claims reimbursement.</li>
<li><strong>Services insurance doesn't cover</strong>, such as many cosmetic, wellness or elective treatments.</li>
<li><strong>Patient balances</strong> after insurance: copays, coinsurance and deductibles.</li>
<li><strong>Third-party payers</strong>, such as employers paying for occupational health checks or attorneys requesting medical reports.</li>
<li><strong>Independent practitioners</strong>: therapists, physiotherapists, chiropractors, dietitians, locum doctors and private nurses.</li>
</ul>

<h2>What to include on a medical invoice</h2>
<p>A medical billing invoice needs the standard invoice fields plus some healthcare-specific details. If you are new to invoicing, start with our <a href="/blog/what-is-an-invoice">guide to what an invoice is</a>.</p>
<table><thead><tr><th>Field</th><th>Details</th></tr></thead><tbody>
<tr><td>Practice details</td><td>Practice name, address, phone, billing contact, tax ID</td></tr>
<tr><td>Provider</td><td>Treating clinician's name and credentials; in the US, the NPI if the patient may seek reimbursement</td></tr>
<tr><td>Patient and account</td><td>Patient name, date of birth or account number, billing address; responsible party if different (e.g. a parent)</td></tr>
<tr><td>Invoice number and dates</td><td>Unique invoice number, issue date, due date</td></tr>
<tr><td>Date of service</td><td>One per line if the invoice covers several visits</td></tr>
<tr><td>Services</td><td>Plain-language description, plus procedure code (such as a CPT code) where useful</td></tr>
<tr><td>Fees, adjustments, payments</td><td>Charge per service, discounts, insurance payments, amounts paid at visit</td></tr>
<tr><td>Balance due and payment options</td><td>Amount the patient owes now and how to pay</td></tr>
</tbody></table>
<p>Keep invoice numbers separate from patient account numbers. A consistent scheme (explained in our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide) makes it easy to match payments without exposing patient details in the reference.</p>

<h2>Typical line items in private practice billing</h2>
<p>An itemized medical invoice lists each service so the patient can see exactly what they are paying for. Common lines include:</p>
<ul>
<li>New patient or follow-up consultations, often by length (30, 45 or 60 minutes).</li>
<li>Procedures performed in the office, such as an ECG, wound care or a joint injection.</li>
<li>Diagnostic tests and lab work, including pass-through lab fees where an outside lab bills the practice.</li>
<li>Supplies, medications or devices dispensed in the clinic.</li>
<li>Telehealth visits.</li>
<li>Administrative services: medical reports, forms, records copies, missed-appointment fees where your policy allows them.</li>
<li>Package or membership fees for direct-care or treatment programs.</li>
<li>Adjustments: self-pay discounts, prompt-pay discounts, write-offs or insurance payments received.</li>
</ul>
<p>The more specific each line is, the fewer billing calls you get. Our <a href="/blog/itemized-invoice">itemized invoice guide</a> shows how to write descriptions that answer the patient's questions before they ask.</p>

<h2>Worked example: a self-pay patient invoice</h2>
<p>A self-pay patient visits a private practice on 14 October 2026. The practice offers a 10% prompt-pay discount on invoices settled within 14 days, and the patient paid $100 at the visit.</p>
<table><thead><tr><th>Date of service</th><th>Description</th><th>Code</th><th>Qty</th><th>Fee</th><th>Amount</th></tr></thead><tbody>
<tr><td>14 Oct 2026</td><td>New patient consultation, 60 minutes</td><td>99204</td><td>1</td><td>$220.00</td><td>$220.00</td></tr>
<tr><td>14 Oct 2026</td><td>Resting ECG with interpretation</td><td>93000</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td>14 Oct 2026</td><td>Blood panel (outside laboratory, passed through at cost)</td><td>—</td><td>1</td><td>$64.50</td><td>$64.50</td></tr>
<tr><td colspan="5">Subtotal</td><td>$369.50</td></tr>
<tr><td colspan="5">Prompt-pay discount 10% (if paid by 28 Oct 2026)</td><td>−$36.95</td></tr>
<tr><td colspan="5">Total after discount</td><td>$332.55</td></tr>
<tr><td colspan="5">Less: paid at visit (card)</td><td>−$100.00</td></tr>
<tr><td colspan="5"><strong>Balance due by 28 October 2026</strong></td><td><strong>$232.55</strong></td></tr>
</tbody></table>
<p>The maths: $220.00 + $85.00 + $64.50 = $369.50. Ten percent of $369.50 is $36.95, leaving $332.55. Subtracting the $100.00 paid at the visit leaves $232.55. The codes shown are for illustration only. Use the codes that accurately describe the care you provided. If you offer a discount, state the condition and the deadline clearly; our guide to <a href="/blog/early-payment-discount">early payment discounts</a> explains how to word one.</p>

<h2>Medical invoice vs superbill vs insurance claim</h2>
<table><thead><tr><th>Document</th><th>Sent to</th><th>Purpose</th><th>Typical content</th></tr></thead><tbody>
<tr><td>Medical invoice</td><td>Patient or third-party payer</td><td>Request payment</td><td>Services, fees, payments, balance, due date</td></tr>
<tr><td>Superbill</td><td>Patient, who submits it to their insurer</td><td>Support an out-of-network reimbursement claim</td><td>Provider identifiers, procedure and diagnosis codes, amounts paid</td></tr>
<tr><td>Insurance claim</td><td>Insurer or government program</td><td>Bill the insurer directly</td><td>Standardized form or electronic format set by the payer</td></tr>
</tbody></table>
<p>An invoice template can be adapted into a superbill by adding the codes and identifiers the patient's insurer asks for, but it cannot replace the standardized formats insurers require when the practice bills them directly.</p>

<h2>Privacy, pricing and compliance notes</h2>
<p>Healthcare billing comes with obligations a general business invoice does not. The points below are general information, not legal advice. Check the rules that apply to your practice with a healthcare attorney, compliance adviser or professional body.</p>
<ul>
<li><strong>Patient privacy.</strong> An invoice that names a patient and describes their care can be protected health information under HIPAA in the US, and is personal health data under laws such as the UK and EU GDPR. Include only the detail the payer needs, send invoices through secure channels, and avoid putting diagnoses in email subject lines.</li>
<li><strong>Good faith estimates.</strong> Under the US No Surprises Act, many providers must give uninsured or self-pay patients a good faith estimate of expected charges for scheduled care, and patients may dispute a bill that substantially exceeds it. Keep your invoice consistent with any estimate you gave.</li>
<li><strong>Tax.</strong> Medical care is commonly exempt from VAT and sales tax, though exceptions exist, for example some cosmetic procedures and retail products. Confirm with an accountant before adding tax to a patient invoice.</li>
<li><strong>Record retention.</strong> Billing records may need to be kept for several years, and medical records rules can be longer. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers the general principles.</li>
</ul>

<h2>Adapting the template for therapists and independent practitioners</h2>
<p>Solo practitioners (counselors, psychotherapists, physical therapists, chiropractors, dietitians, speech therapists, massage therapists and private nurses) often bill in simpler patterns than a multi-provider clinic. The same medical invoice template works if you adjust a few things:</p>
<ul>
<li><strong>Bill by session.</strong> One line per session, with the date, length and type of session, for example "Individual therapy session, 50 minutes". Monthly invoices that list every session in the period save time for clients who attend weekly.</li>
<li><strong>Packages and prepayments.</strong> If a client buys a block of sessions, invoice the package once, then show sessions used and remaining on later statements so the client can track their balance.</li>
<li><strong>Cancellation and no-show fees.</strong> Charge these only if your written policy allows them and the client agreed to it before treatment. Show them as a separate line with the date of the missed appointment.</li>
<li><strong>Sliding-scale fees.</strong> Show your standard fee and the agreed reduction as a separate adjustment line, so the invoice reflects both the usual price and what the client actually pays.</li>
<li><strong>Discretion.</strong> Some clients prefer that the invoice describes a service generically ("Professional services" rather than a specific therapy type), particularly if an employer or family member pays. Agree on wording with the client, but keep full detail in your clinical and billing records.</li>
</ul>
<p>Whatever your discipline, keep the layout calm and easy to read. Patients and clients are not accountants, and an invoice they understand at a glance is one they are more likely to pay promptly.</p>

<h2>How to get patient invoices paid</h2>
<ol>
<li><strong>Collect at the time of service where you can.</strong> Taking payment at the desk avoids most follow-up. Card terminals and online payment links both make this easy.</li>
<li><strong>Send the invoice promptly</strong>, ideally the same day as the visit or as soon as lab charges are known.</li>
<li><strong>Use clear terms.</strong> Many practices ask for payment within 14 or 30 days; see <a href="/blog/invoice-payment-terms">invoice payment terms explained</a>.</li>
<li><strong>Give a receipt for every payment.</strong> Patients often need proof of payment for reimbursement or health spending accounts; our <a href="/blog/payment-receipt-template">payment receipt template</a> guide shows what to include.</li>
<li><strong>Follow up kindly.</strong> Medical bills can be stressful. A courteous reminder, and an offer of a payment plan where appropriate, works better than a stern letter. See our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</li>
</ol>

<h2>Create your medical invoice now</h2>
<p>A well-structured medical invoice template makes patient billing faster and clearer for everyone. Open the generator with <a href="/invoice-generator/usa">US presets</a>, choose a calm, readable layout such as the <a href="/invoice-templates/minimal">Minimal template</a>, add your practice details and services, and download a PDF ready to send securely.</p>
`,
  },
  {
    slug: "legal-invoice-template",
    title: "Legal Invoice Template: How Attorneys Should Bill Clients",
    description:
      "Free legal invoice template guide for attorneys and law firms: hourly increments, flat fees, retainers, disbursements and a worked example with correct maths.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["retainer-invoice", "how-to-invoice-for-hourly-work", "invoice-dispute"],
    faqs: [
      {
        q: "What should be on an attorney invoice?",
        a: "An attorney invoice should show the firm and client details, matter name or number, billing period, each time entry with date, timekeeper, description, hours and rate, any expenses or disbursements, trust or retainer funds applied, and the balance due.",
      },
      {
        q: "Why do lawyers bill in 6-minute increments?",
        a: "Billing in tenths of an hour, or 6-minute increments, is a common convention that makes time entries easy to record and calculate. The increment you use should be stated in your engagement letter and applied consistently.",
      },
      {
        q: "Can I invoice against a client retainer?",
        a: "Yes, but how you apply retainer funds depends on whether they are an advance against fees held in a client trust account or an earned or general retainer. Trust accounting rules are strict, so follow your bar or regulator's rules and record each transfer clearly on the invoice.",
      },
      {
        q: "What is LEDES billing?",
        a: "LEDES is a standardized electronic billing format used by many corporate legal departments and insurers. It is often paired with UTBMS task and activity codes. If a client requires it, you will usually need billing software that exports the format rather than a PDF invoice alone.",
      },
      {
        q: "Do lawyers charge VAT or sales tax on legal fees?",
        a: "In the UK and EU, legal services are generally subject to VAT if the firm is registered, with special rules for international clients and some disbursements. Most US states do not tax legal services, though a few tax some services. Check with your accountant.",
      },
      {
        q: "Does a contingency fee agreement need to be in writing?",
        a: "Under the ABA Model Rules, which most US states follow in some form, a contingent fee agreement must be in writing and signed by the client, and must explain how the fee is calculated and how expenses are handled. At the end of the matter, the lawyer gives the client a written closing statement showing the outcome and the calculation. State rules can add requirements, so check your jurisdiction.",
      },
      {
        q: "Can lawyers charge interest on unpaid invoices?",
        a: "In many jurisdictions, yes, if the client agreed to it in the engagement letter and the rate complies with local law and professional conduct rules. Some bars expect interest terms to be disclosed in advance and applied only to overdue amounts. State the rate and when it starts on each invoice, and check your bar or regulator's guidance before charging it.",
      },
      {
        q: "Can a client challenge a legal bill?",
        a: "Yes. Clients can query entries directly, and many US state bars run fee arbitration programs for disputes between lawyers and clients. In England and Wales, clients can also ask the court to assess a solicitor's bill in certain circumstances. Clear time entries, rates that match the engagement letter and a prompt, factual response to questions resolve most challenges long before they reach that stage.",
      },
      {
        q: "Should lawyers bill for short emails and phone calls?",
        a: "If you bill hourly, client communication is generally billable at your minimum increment, as long as your engagement letter explains how you record time. Describe each entry specifically, such as 'Call with client re settlement offer: 0.2', rather than 'Phone call'. Some lawyers write off very short contacts as goodwill; whatever your policy, apply it consistently so clients are not surprised.",
      },
      {
        q: "Can lawyers accept credit card payments for invoices?",
        a: "Generally yes, but trust accounting rules apply. Payments of earned fees can go to the operating account, while advance fees belong in the client trust account, and card processing fees should not be taken out of client trust funds. Use a processor that can keep operating and trust deposits separate, and check your bar's guidance on surcharges and card payments.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A legal invoice template is a billing layout attorneys and law firms use to charge clients for legal work. It should identify the firm, the client and the matter, list each time entry with date, timekeeper, task description, hours and rate, show expenses and disbursements separately, apply any retainer or trust funds, and state the balance due and payment terms. Clear, detailed entries are what get legal bills approved without challenge.</p>

<p>This guide covers the common legal billing models, what to include on an attorney invoice, how to handle retainers and disbursements, a worked example, and notes on e-billing and tax. You can create a professional legal invoice with our <a href="/invoice-generator">free invoice generator</a> and export it as a PDF.</p>

<h2>How legal billing works: the main fee models</h2>
<p>Legal invoices look different depending on how the engagement is priced. Your engagement letter should set the model, rates and billing frequency before any work starts.</p>
<table><thead><tr><th>Fee model</th><th>How it is billed</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Hourly</td><td>Time entries × timekeeper rate, usually in 0.1-hour increments</td><td>Litigation, advisory work, ongoing corporate matters</td></tr>
<tr><td>Flat or fixed fee</td><td>One agreed price per matter or stage</td><td>Wills, incorporations, trademark filings, uncontested matters</td></tr>
<tr><td>Contingency</td><td>A percentage of the amount recovered, plus costs</td><td>Personal injury and some commercial claims, where permitted</td></tr>
<tr><td>Retainer</td><td>Advance payment drawn down, or a monthly fee for availability</td><td>Ongoing advice, outside general counsel arrangements</td></tr>
<tr><td>Hybrid</td><td>A mix, such as a reduced hourly rate plus a success fee</td><td>Negotiated commercial matters</td></tr>
</tbody></table>
<p>Hourly billing produces the most detailed invoices. If you are new to time-based invoicing, our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers the basics.</p>

<h2>What to include on a legal invoice template</h2>
<ul>
<li><strong>Firm details:</strong> firm name, address, phone, billing email and tax ID.</li>
<li><strong>Client details:</strong> the legal entity or individual responsible for payment, billing address and any client reference or <a href="/blog/po-number-on-invoice">PO number</a> their legal department requires.</li>
<li><strong>Matter information:</strong> matter name and number, so a client with several matters can allocate the cost.</li>
<li><strong>Invoice number, date, billing period and due date.</strong></li>
<li><strong>Time entries:</strong> date, timekeeper (name or initials and role), a specific description, hours and rate.</li>
<li><strong>Fee summary by timekeeper:</strong> total hours and fees per person.</li>
<li><strong>Expenses and disbursements:</strong> court fees, filing fees, expert fees, travel, courier and copying, as allowed by the engagement letter.</li>
<li><strong>Trust or retainer activity:</strong> funds applied to this invoice and the remaining balance.</li>
<li><strong>Payment terms and methods</strong>, plus any interest or late terms permitted under your rules.</li>
</ul>

<h3>Write time entries clients will approve</h3>
<p>Vague entries are the most common reason legal invoices are questioned. Compare:</p>
<ul>
<li>Weak: "Research: 3.0"</li>
<li>Strong: "Research case law on enforceability of non-compete clause in Texas; summarize findings for client: 3.0"</li>
</ul>
<p>Avoid "block billing" (lumping several tasks under one time entry), because many corporate clients and insurers reject it. Record each task separately with its own time.</p>

<h2>Worked example: an hourly legal invoice</h2>
<p>A firm bills a business client for October 2026 work on a contract dispute. The client paid a $2,500 advance that the firm holds in its client trust account, and the engagement letter authorizes applying it to invoices.</p>
<table><thead><tr><th>Timekeeper</th><th>Role</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>J. Patel</td><td>Partner</td><td>2.4</td><td>$450.00</td><td>$1,080.00</td></tr>
<tr><td>M. Chen</td><td>Associate</td><td>5.7</td><td>$275.00</td><td>$1,567.50</td></tr>
<tr><td>R. Diaz</td><td>Paralegal</td><td>3.0</td><td>$140.00</td><td>$420.00</td></tr>
<tr><td colspan="4"><strong>Total professional fees (11.1 hours)</strong></td><td><strong>$3,067.50</strong></td></tr>
<tr><td colspan="4">Disbursement: court filing fee (receipt attached)</td><td>$405.00</td></tr>
<tr><td colspan="4">Disbursement: courier, service of documents</td><td>$38.00</td></tr>
<tr><td colspan="4"><strong>Total disbursements</strong></td><td><strong>$443.00</strong></td></tr>
<tr><td colspan="4"><strong>Total for this invoice</strong></td><td><strong>$3,510.50</strong></td></tr>
<tr><td colspan="4">Less: applied from client trust account</td><td>−$2,500.00</td></tr>
<tr><td colspan="4"><strong>Balance due by 21 November 2026</strong></td><td><strong>$1,010.50</strong></td></tr>
</tbody></table>
<p>The maths: 2.4 × $450 = $1,080.00; 5.7 × $275 = $1,567.50; 3.0 × $140 = $420.00; fees total $3,067.50 for 11.1 hours. Disbursements are $405.00 + $38.00 = $443.00, so the invoice total is $3,510.50. After applying $2,500.00 from trust, $1,010.50 remains due. The detailed time entries for each timekeeper would follow on a second page.</p>

<h2>Flat-fee and contingency legal invoices</h2>
<p>Not every attorney invoice is a list of time entries. Flat-fee and contingency matters need a different structure, though the same legal invoice template can handle both.</p>
<h3>Flat-fee invoices</h3>
<p>For a fixed-fee matter, describe the scope precisely so the client can see what the price covers. A line such as "Formation of Delaware LLC: includes certificate of formation, operating agreement and EIN application; state filing fee billed separately" is far clearer than "Corporate services". If you bill a flat fee in stages, invoice each stage when it is complete, for example 50% on engagement and 50% on filing, and reference the stage on each invoice. Third-party costs such as state filing fees are usually listed as separate disbursements so the client can see what goes to the government and what goes to the firm.</p>
<p>Some jurisdictions have rules about whether a flat fee paid in advance must be held in trust until earned, so check your professional conduct rules before treating advance flat fees as the firm's money.</p>
<h3>Contingency fee statements</h3>
<p>When a contingency matter settles, the closing statement typically shows the gross recovery, the agreed percentage fee, costs advanced by the firm, any liens or other deductions, and the net amount paid to the client. Many jurisdictions require a written closing statement for contingency matters and regulate how fees and costs are calculated, so follow your local rules. Present the calculation line by line so the client can follow every deduction from the gross amount to their net payment.</p>
<p>Even in contingency cases, firms sometimes invoice clients periodically for costs, if the engagement letter says the client is responsible for them as they arise. In that case, a regular itemized cost invoice with receipts keeps the client informed and avoids a surprise at settlement.</p>

<h2>Retainers and trust accounts</h2>
<p>Retainers are where legal invoicing differs most from ordinary business billing. Funds a client pays in advance for future fees are generally client money until earned, and in many jurisdictions must be held in a separate client trust account: an IOLTA or similar account in the US, a client account under the SRA rules in England and Wales. You typically may only transfer funds to the firm's operating account once fees are earned and billed, and the invoice should show the transfer.</p>
<p>These rules are strict and vary by state and country, so follow the guidance of your bar association or regulator and take advice if you are unsure. For the general mechanics of billing against an advance, see our <a href="/blog/retainer-invoice">retainer invoice guide</a>. Many firms also send a periodic <a href="/blog/statement-of-account">statement of account</a> showing all invoices, payments and trust balances for a client.</p>

<h2>Expenses, disbursements and tax</h2>
<p>Show costs separately from fees, and only bill what the engagement letter allows. Attach receipts for larger items. Some firms mark up certain costs (such as in-house copying); if you do, disclose it in advance.</p>
<p>Tax treatment varies. In the UK, legal services supplied by a VAT-registered firm are generally standard-rated at 20%, while some true disbursements paid on the client's behalf may be outside the scope of VAT. HMRC applies specific tests, so check with your accountant. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the fields a VAT invoice needs, and the <a href="/invoice-generator/uk">UK invoice generator</a> includes VAT number fields. Most US states do not tax legal services, but a few tax some professional services, so confirm locally.</p>

<h2>E-billing for corporate clients</h2>
<p>Many large companies and insurers require law firms to submit invoices through an e-billing platform in a standardized format such as LEDES, with UTBMS task and activity codes on each time entry. They may also apply billing guidelines that cap rates, restrict who can bill for meetings or disallow certain expenses. If a client uses e-billing, you will usually need practice-management software that exports the required file; a PDF invoice from a generator is still useful for smaller clients and as a human-readable copy.</p>

<h2>Tips to reduce write-offs and disputes</h2>
<ul>
<li><strong>Record time daily.</strong> Reconstructed time at month-end tends to be less accurate and less detailed.</li>
<li><strong>Bill monthly.</strong> Smaller, regular invoices are easier for clients to approve than one large bill at the end of a matter.</li>
<li><strong>Match the engagement letter.</strong> Rates, increments and expense policies on the invoice should agree with what the client signed.</li>
<li><strong>Use a formal, readable layout.</strong> The <a href="/invoice-templates/corporate">Corporate template</a> suits law firm billing well.</li>
<li><strong>Handle queries quickly.</strong> If a client challenges an entry, respond with detail rather than defensiveness; our guide to resolving an <a href="/blog/invoice-dispute">invoice dispute</a> explains a fair process, and adjustments should be made with a <a href="/blog/credit-note-guide">credit note</a> rather than by editing the issued invoice.</li>
</ul>

<h2>Create your legal invoice now</h2>
<p>A detailed legal invoice template helps clients understand your fees and pay promptly. Open the generator with <a href="/invoice-generator/usa">US presets</a>, choose the understated <a href="/invoice-templates/classic">Classic template</a>, enter your matter details and time entries, and download a polished PDF invoice.</p>
`,
  },
  {
    slug: "trucking-invoice-template",
    title: "Trucking Invoice Template: Freight Billing, BOL and Rate Cons",
    description:
      "Free trucking invoice template guide: line haul, fuel surcharge, detention and lumper fees, BOL and rate confirmation details, plus a worked freight example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-factoring", "accounts-receivable-aging-report", "how-to-get-paid-faster"],
    faqs: [
      {
        q: "What documents do I send with a trucking invoice?",
        a: "Most brokers and shippers want the signed bill of lading or proof of delivery, the rate confirmation, and receipts for any reimbursable charges such as lumper fees or scale tickets. Check the broker's packet or rate confirmation for their exact requirements.",
      },
      {
        q: "What is a rate confirmation?",
        a: "A rate confirmation is the broker's written agreement for a specific load. It sets the pickup and delivery details, the agreed rate, accessorial terms such as detention, and billing instructions. Your invoice should match it exactly.",
      },
      {
        q: "How do owner-operators bill detention?",
        a: "Detention is usually billed at an hourly rate after a set number of free hours at the shipper or receiver, as stated on the rate confirmation. Record arrival and departure times, ideally signed on the BOL, and list detention as its own line.",
      },
      {
        q: "How long do brokers take to pay trucking invoices?",
        a: "Payment terms vary by broker and are set in the carrier agreement or rate confirmation; 30 days or longer is common. Many brokers offer quick pay for a fee, and some carriers use factoring companies to get paid sooner.",
      },
      {
        q: "Should my MC and DOT numbers be on the invoice?",
        a: "Yes. Brokers and shippers use your MC and USDOT numbers to match the invoice to your carrier profile, so include them in your business details on every freight invoice.",
      },
      {
        q: "What can I do if a broker never pays my freight invoice?",
        a: "Follow up in writing with the invoice, rate confirmation and POD. If the broker still does not pay, you can usually file a claim against the $75,000 surety bond or trust fund that every licensed freight broker must maintain, and you can find the surety through FMCSA records. For larger amounts, a freight collections agency or transportation attorney may help.",
      },
      {
        q: "How long do I have to collect unpaid freight charges?",
        a: "Under federal law, a motor carrier generally has 18 months from when the claim accrues to start a lawsuit to recover charges for interstate transportation. That is the outer limit, not a target: broker and shipper agreements often set much shorter deadlines for submitting invoices and paperwork. Invoice promptly after delivery and diary follow-ups well before any deadline passes.",
      },
      {
        q: "Can I see what the shipper paid the broker for my load?",
        a: "Federal rules require brokers to keep a record of each transaction and give each party to a brokered transaction the right to review it. In practice, some brokers argue the carrier is not a party or ask carriers to waive the right in the carrier agreement, and FMCSA has been working on broker transparency rules. Read your agreement before signing, and request the record in writing.",
      },
      {
        q: "How should I invoice a load with multiple stops?",
        a: "Show the line haul for the full move, then list each extra pickup or drop as a stop-off charge with its location and date, at the rate set on the rate confirmation. Attach a BOL or POD for every stop. If detention happened at more than one stop, list each separately with in and out times, so the broker can match every charge to a document.",
      },
      {
        q: "How do I invoice a rate change agreed after the rate confirmation?",
        a: "Ask the broker for a revised rate confirmation or written approval, such as an email, before billing the new amount. Then invoice at the revised rate and attach the updated rate con with your paperwork. If you bill more than the signed rate con without written support, expect the invoice to be held or short paid. Reference the revision or approval date in the line description.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A trucking invoice template is a freight billing layout carriers and owner-operators use to charge brokers or shippers for a completed load. It should include your company name with MC and USDOT numbers, the broker or shipper, the load or reference number from the rate confirmation, pickup and delivery details, the line haul rate, fuel surcharge and any accessorials such as detention or lumper fees, the total due and remit-to details. Send it with the signed bill of lading as soon as the load delivers.</p>

<p>This guide covers the fields brokers look for, common freight charges, the paperwork to attach, a worked example and ways to get paid faster. You can build a clean freight invoice with our <a href="/invoice-generator">free invoice generator</a> in a few minutes from the cab or the office.</p>

<h2>How trucking billing works</h2>
<p>Freight billing is document-driven. Before the truck moves, the broker or shipper issues a <strong>rate confirmation</strong> (often called a rate con) setting the agreed price and terms for the load. At pickup, the shipper signs a <strong>bill of lading (BOL)</strong> describing the freight. At delivery, the receiver signs the BOL or a separate <strong>proof of delivery (POD)</strong>. Your invoice turns those documents into a bill.</p>
<p>Because brokers process hundreds of invoices, they match each one against the rate con and POD. If the load number, rate or accessorials don't match exactly, the invoice is held, which is the main reason carriers wait longer than their terms. Treat the load number the way an office supplier treats a <a href="/blog/po-number-on-invoice">PO number on an invoice</a>: it must be on the document, and it must be right.</p>

<h2>What to include on a trucking invoice template</h2>
<table><thead><tr><th>Field</th><th>What to enter</th></tr></thead><tbody>
<tr><td>Carrier details</td><td>Legal name, address, phone, email, MC number, USDOT number, tax ID</td></tr>
<tr><td>Bill to</td><td>Broker or shipper legal name and billing address or email from the rate con</td></tr>
<tr><td>Invoice number and date</td><td>Unique invoice number and the date issued</td></tr>
<tr><td>Load reference</td><td>Load number or PRO number exactly as on the rate confirmation; BOL number</td></tr>
<tr><td>Pickup and delivery</td><td>Shipper and receiver names, cities, dates</td></tr>
<tr><td>Equipment and freight</td><td>Truck and trailer numbers, equipment type, commodity, weight if relevant</td></tr>
<tr><td>Charges</td><td>Line haul, fuel surcharge, accessorials, reimbursements</td></tr>
<tr><td>Terms and remit-to</td><td>Payment terms; your bank details, or the factoring company's remit-to address if you factor</td></tr>
</tbody></table>
<p>Give every load its own invoice and its own number. A simple sequence such as <code>TRK-2026-0318</code> works well, and our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains how to keep it consistent.</p>

<h2>Common freight charges and accessorials</h2>
<p>Bill only charges that are on the rate confirmation or approved in writing by the broker. Many will not pay an accessorial they did not authorize. Common lines include:</p>
<ul>
<li><strong>Line haul:</strong> the base rate for moving the load, either a flat rate or a per-mile rate.</li>
<li><strong>Fuel surcharge:</strong> often a per-mile amount tied to a fuel price index, or included in an all-in rate.</li>
<li><strong>Detention:</strong> waiting time at the shipper or receiver beyond the free time stated on the rate con, billed hourly.</li>
<li><strong>Lumper fee:</strong> reimbursement for paying a third-party crew to unload, supported by the lumper receipt.</li>
<li><strong>Layover:</strong> a flat charge when the truck is held overnight or longer.</li>
<li><strong>TONU (truck ordered, not used):</strong> a fee when a load is cancelled after the truck is dispatched.</li>
<li><strong>Stop-off charges:</strong> for extra pickups or drops.</li>
<li><strong>Driver assist, tarping or other handling:</strong> where the rate con allows it.</li>
<li><strong>Scale tickets, tolls or permits:</strong> where agreed as reimbursable.</li>
</ul>

<h2>Worked example: a freight invoice for one load</h2>
<p>An owner-operator hauls a dry van load 1,150 miles from Dallas, TX, to Atlanta, GA. The rate con sets $2.10 per mile line haul, a $0.48 per mile fuel surcharge, and detention at $75 per hour after two free hours. The truck waited five hours at the receiver, so three hours of detention apply. The driver paid a $185 lumper fee.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Line haul: Load #BRK-55821, Dallas TX to Atlanta GA (miles)</td><td>1,150</td><td>$2.10</td><td>$2,415.00</td></tr>
<tr><td>Fuel surcharge (miles)</td><td>1,150</td><td>$0.48</td><td>$552.00</td></tr>
<tr><td>Detention at receiver: arrived 07:00, departed 12:00, 2 hours free (hours)</td><td>3</td><td>$75.00</td><td>$225.00</td></tr>
<tr><td>Lumper fee reimbursement (receipt #L-20931 attached)</td><td>1</td><td>$185.00</td><td>$185.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$3,377.00</strong></td></tr>
</tbody></table>
<p>The maths: 1,150 × $2.10 = $2,415.00; 1,150 × $0.48 = $552.00; 3 × $75.00 = $225.00; plus $185.00. Total: $2,415.00 + $552.00 + $225.00 + $185.00 = $3,377.00. The effective all-in rate is $3,377.00 ÷ 1,150 = about $2.94 per mile.</p>
<p>If the broker offers quick pay at, say, a 2% fee, the carrier would receive $3,377.00 − $67.54 = $3,309.46. Quick pay percentages vary by broker, so compare them against your cash needs and your normal payment terms. It is the same trade-off as an early payment discount in other industries.</p>

<h2>Paperwork to send with your trucking invoice</h2>
<ol>
<li><strong>Signed BOL or POD:</strong> clear and legible, showing the receiver's signature and any exceptions such as shortages or damage.</li>
<li><strong>Rate confirmation:</strong> the signed version, so the broker can match the rate instantly.</li>
<li><strong>Accessorial support:</strong> in and out times for detention, lumper receipts, scale tickets, and any written approval for extra charges.</li>
<li><strong>Your invoice as a PDF:</strong> named with the load number, for example <code>Invoice-TRK-2026-0318-Load-BRK-55821.pdf</code>.</li>
</ol>
<p>Many brokers ask for all documents in a single file or upload, and some have deadlines for submitting PODs. Read the carrier packet so you know their rules before the first load.</p>

<h2>Invoicing brokers vs direct shippers</h2>
<p>Most small carriers haul for freight brokers, but many also build direct relationships with shippers. The trucking invoice template is the same; what changes is the paperwork around it.</p>
<ul>
<li><strong>Broker loads</strong> are governed by the broker-carrier agreement and each rate confirmation. The broker usually sets the billing method (email, an online portal or a load board's payment system) and the documents required. Follow their process exactly, because invoices submitted the wrong way are often simply not processed.</li>
<li><strong>Direct shipper loads</strong> rely on your own terms. Agree on rates, fuel surcharge method, detention, payment terms and credit limits in writing before the first load, since there is no rate con from a broker to fall back on. Larger shippers may also issue purchase orders or require you to be set up as a vendor first, which can include submitting tax forms and insurance certificates.</li>
<li><strong>Dedicated or recurring lanes</strong> can be invoiced per load or on a weekly statement listing every load, with each load's BOL attached. Even on a weekly statement, keep each load as a separate line with its own reference so the customer can reconcile it.</li>
</ul>
<p>Whoever you haul for, check the customer's credit before you accept a load: an unpaid freight bill on a long run can wipe out a week's profit.</p>

<h2>Payment terms, quick pay and factoring</h2>
<p>Broker payment terms are set in your carrier agreement or on the rate con, and 30 days or longer is common. That gap is hard on small fleets that pay for fuel, insurance and maintenance up front. Carriers usually choose between three options:</p>
<table><thead><tr><th>Option</th><th>How it works</th><th>Trade-off</th></tr></thead><tbody>
<tr><td>Standard terms</td><td>Wait for the broker to pay in full</td><td>No fee, but slow cash flow</td></tr>
<tr><td>Quick pay</td><td>The broker pays within a few days for a percentage fee</td><td>Faster, but you give up part of the rate</td></tr>
<tr><td>Factoring</td><td>A factoring company buys your invoices and advances most of the value</td><td>Fast and predictable, but fees and contract terms vary widely</td></tr>
</tbody></table>
<p>If you factor, your invoice must usually show the factoring company's remit-to details, and the broker will have received a notice of assignment. Paying the wrong party causes long delays, so double-check the remit-to on every invoice. Our guide to <a href="/blog/invoice-factoring">invoice factoring</a> explains recourse vs non-recourse arrangements and what to look for in a contract. For bank payments, see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>, since most brokers pay by ACH.</p>

<h2>Avoiding short pays and disputes</h2>
<p>A short pay (the broker paying less than the invoice) usually comes from an unapproved accessorial, a missing document, or a claim for damaged freight. Reduce the risk by:</p>
<ul>
<li>Getting written approval for any accessorial not on the original rate con before you bill it.</li>
<li>Recording times at the dock and asking the shipper or receiver to note them on the BOL.</li>
<li>Photographing freight, seals and the signed BOL at delivery.</li>
<li>Following up on any short pay quickly with documents; our guide on handling an <a href="/blog/invoice-dispute">invoice dispute</a> sets out a calm, evidence-based process.</li>
</ul>
<p>Track every open invoice by broker and age. A weekly look at an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> shows which brokers pay slowly, which is useful when deciding which loads to accept. More general tactics are in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>

<p>Household moves follow different rules from freight. See the <a href="/blog/moving-company-invoice-template">moving company invoice template</a> for estimates, crews and packing materials.</p>

<h2>Create your trucking invoice now</h2>
<p>A clear trucking invoice template that mirrors the rate con gets loads paid without back-and-forth. Open the generator with <a href="/invoice-generator/usa">US presets</a>, pick a bold, high-contrast layout such as the <a href="/invoice-templates/slate">Slate template</a>, enter the load details and charges, and send your PDF with the signed BOL the same day.</p>
`,
  },
  {
    slug: "auto-repair-invoice-template",
    title: "Auto Repair Invoice Template: Parts, Labor and Tax Explained",
    description:
      "Free auto repair invoice template guide for mechanics and shops: parts, labor, shop supplies, sales tax and consumer rules, with a worked brake job example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "car-rental-invoice-template",
      "itemized-invoice",
      "invoice-vs-estimate",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "What should be on an auto repair invoice?",
        a: "An auto repair invoice should show the shop details, customer details, vehicle year, make, model, VIN and mileage, the work performed, each part with its price and whether it is new, used or rebuilt, labor charges, fees, tax and the total. Some states require specific details, so check your state's rules.",
      },
      {
        q: "Do mechanics charge sales tax on labor?",
        a: "It depends on the state. Many US states tax parts but not separately stated repair labor, while others tax labor too. Check your state revenue department's guidance and show parts and labor on separate lines so tax can be applied correctly.",
      },
      {
        q: "What is a shop supplies fee?",
        a: "A shop supplies fee covers small consumables used during a repair, such as rags, cleaners and lubricants. It is often a flat amount or a percentage of labor. Disclose it on the estimate, and check whether your state limits or taxes it.",
      },
      {
        q: "Do auto repair shops need a written estimate?",
        a: "Several states, including California, require shops to give a written estimate and get the customer's authorization before starting work or exceeding the estimate. Even where it isn't required, a signed estimate helps prevent disputes.",
      },
      {
        q: "What is flat-rate labor in auto repair?",
        a: "Flat-rate labor charges a standard number of hours for each job from a labor time guide, regardless of how long the technician actually takes. The invoice shows the book hours multiplied by the shop's hourly labor rate.",
      },
      {
        q: "Can a repair shop hold a vehicle until the invoice is paid?",
        a: "In many US states, yes. Repair shops typically have a possessory lien that lets them keep a vehicle until authorized repairs are paid for, and some states allow a sale after notice periods. Storage fees and lien procedures depend on state law and your written terms. Check your state's garage keeper or mechanic's lien statute, and get legal advice before holding or selling a vehicle.",
      },
      {
        q: "Can I charge a diagnostic fee if the customer declines the repair?",
        a: "Yes, if you disclosed the fee before diagnosing and the customer approved it. Diagnosis takes skilled time and equipment whether or not the repair goes ahead. Show the fee as its own line, describe what you tested and found, and list the recommended repair with its estimated price. Some shops credit the fee toward the repair if the customer books it within a set period.",
      },
      {
        q: "Does using aftermarket parts void a customer's car warranty?",
        a: "Not automatically in the US. The Magnuson-Moss Warranty Act generally stops manufacturers from voiding a warranty just because aftermarket or recycled parts were used, although they can deny a claim if that part caused the failure. Label each part on the invoice as OEM, aftermarket, used or rebuilt, so the customer has a clear record if a warranty question comes up later.",
      },
      {
        q: "How should I invoice a tire sale and installation?",
        a: "List the tires with brand, size and quantity, then mounting and balancing, valve stems or TPMS service kits, and any road hazard warranty as separate lines. Many states charge a fee on new tire sales, which belongs on its own line. Record the tire identification numbers if you can, since they help the customer with recalls and warranty claims.",
      },
      {
        q: "Should an auto repair invoice show the technician's name?",
        a: "It is not always required, but many shops show the technician's name or number on each labor line. It helps with comebacks, warranty claims and internal quality checks, and customers often like knowing who worked on their car. Some states require specific certifications for certain work, such as emissions inspections, so recording the certified technician on those jobs is especially important.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An auto repair invoice template is a billing layout mechanics and repair shops use to charge customers for vehicle work. It should list the shop and customer details, the vehicle's year, make, model, VIN and mileage, the customer's concern and the work performed, each part with part number and price, labor hours and rate, any shop fees, sales tax and the total due. Keeping parts and labor on separate lines makes tax correct and the bill easy to trust.</p>

<p>This guide explains the fields every repair invoice needs, how parts and labor pricing works, state consumer rules to be aware of, a worked brake-job example and tips to avoid disputes at pickup. You can create a professional mechanic invoice with our <a href="/invoice-generator">free invoice generator</a> and print or email it in minutes.</p>

<h2>What to include on an auto repair invoice template</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Shop details</td><td>Business name, address, phone, email, tax ID, and any state repair dealer registration number</td></tr>
<tr><td>Customer</td><td>Name, phone, email, address</td></tr>
<tr><td>Vehicle</td><td>Year, make, model, VIN, license plate, odometer reading in and out</td></tr>
<tr><td>Repair order reference</td><td>Invoice number, repair order or estimate number, dates in and out</td></tr>
<tr><td>Concern and diagnosis</td><td>What the customer reported and what you found</td></tr>
<tr><td>Parts</td><td>Description, part number, quantity, unit price; new, used, rebuilt or aftermarket</td></tr>
<tr><td>Labor</td><td>Job description, hours (book or actual), labor rate</td></tr>
<tr><td>Fees</td><td>Shop supplies, hazardous waste or tire disposal fees</td></tr>
<tr><td>Totals and payment</td><td>Parts subtotal, labor subtotal, tax, total, payments, balance due</td></tr>
<tr><td>Warranty and notes</td><td>Parts and labor warranty terms, recommendations for future service</td></tr>
</tbody></table>
<p>Use a unique invoice number for every repair order. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a format such as <code>RO-2026-1042</code> that matches your workflow.</p>

<h2>How auto repair pricing works</h2>
<h3>Labor: flat rate vs actual time</h3>
<p>Most shops bill labor using a <strong>flat-rate</strong> method: a labor time guide lists the standard hours for each job on each vehicle, and the shop charges those "book hours" times its posted labor rate, whatever the actual time taken. Other shops, especially for diagnosis, custom work or older vehicles, bill <strong>actual time</strong>. Either is fine as long as you are consistent and transparent. State the hours and rate on every labor line rather than showing a single lump sum.</p>
<h3>Parts: markup and part type</h3>
<p>Shops usually sell parts at a markup over their cost, which is a normal part of the business. What matters on the invoice is clarity: name each part, show its part number and quantity, and say whether it is new OEM, new aftermarket, used or rebuilt. Some states require that information, and customers increasingly ask for it.</p>
<h3>Fees</h3>
<p>Shop supplies and environmental fees are common. Disclose them on the estimate, show them as separate lines, and keep them reasonable. Some states cap or regulate how they are charged.</p>

<h2>Typical line items on a mechanic invoice</h2>
<ul>
<li>Diagnostic time or a diagnostic fee, sometimes credited toward the repair.</li>
<li>Labor for each repair job, such as brake service, timing belt replacement or A/C recharge.</li>
<li>Parts: pads, rotors, filters, belts, sensors, batteries, tires.</li>
<li>Fluids: oil by the quart, coolant, brake fluid, transmission fluid.</li>
<li>Shop supplies fee.</li>
<li>Hazardous waste, oil or tire disposal fees.</li>
<li>Sublet work, such as alignment or machining done by another shop.</li>
<li>Towing or mobile service call fees.</li>
<li>Discounts, coupons or warranty credits shown as negative lines.</li>
</ul>

<h2>Worked example: front brake job invoice</h2>
<p>A customer brings in a 2019 sedan with grinding brakes. The shop's labor rate is $135 per hour. The job is 1.8 book hours for front pads and rotors, plus 0.5 hours of diagnosis. In this example the shop's state taxes parts at 7.25% but not separately stated labor or the shop supplies fee. Your state may differ.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Labor: inspect and diagnose brake noise (hours)</td><td>0.5</td><td>$135.00</td><td>$67.50</td></tr>
<tr><td>Labor: replace front brake pads and rotors (book hours)</td><td>1.8</td><td>$135.00</td><td>$243.00</td></tr>
<tr><td>Front brake pad set, ceramic, new aftermarket, part #BP-4471</td><td>1</td><td>$68.99</td><td>$68.99</td></tr>
<tr><td>Front brake rotor, new aftermarket, part #BR-2290</td><td>2</td><td>$74.50</td><td>$149.00</td></tr>
<tr><td>Brake fluid DOT 3, 32 oz</td><td>1</td><td>$14.99</td><td>$14.99</td></tr>
<tr><td>Shop supplies (flat fee)</td><td>1</td><td>$15.00</td><td>$15.00</td></tr>
</tbody></table>
<table><thead><tr><th>Summary</th><th>Amount</th></tr></thead><tbody>
<tr><td>Labor subtotal</td><td>$310.50</td></tr>
<tr><td>Parts subtotal</td><td>$232.98</td></tr>
<tr><td>Shop supplies</td><td>$15.00</td></tr>
<tr><td>Sales tax 7.25% on parts ($232.98)</td><td>$16.89</td></tr>
<tr><td><strong>Total due</strong></td><td><strong>$575.37</strong></td></tr>
</tbody></table>
<p>The maths: labor is $67.50 + $243.00 = $310.50 (2.3 hours × $135). Parts are $68.99 + $149.00 (2 × $74.50) + $14.99 = $232.98. Tax is $232.98 × 0.0725 = $16.89 after rounding. Total: $310.50 + $232.98 + $15.00 + $16.89 = $575.37. You can check tax figures for your own rate with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Sales tax on auto repair: parts vs labor</h2>
<p>US sales tax treatment of auto repair varies significantly by state. Many states tax parts but not repair labor when it is stated separately on the invoice; others tax labor as well; and treatment of shop supplies and disposal fees differs again. Some states also have specific tire or battery fees. Because a combined "parts and labor" line can make the whole amount taxable in some states, it is safer to keep them separate. Confirm your obligations with your state revenue department or an accountant, and see our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> for the general principles.</p>

<h2>Estimates, authorization and consumer rules</h2>
<p>Auto repair is one of the more regulated consumer trades. Several states (California is a well-known example) require shops to be registered, to give a written estimate, to get the customer's authorization before work begins or before exceeding the estimate, and to provide an itemized invoice describing parts and labor. Many states also give customers the right to have replaced parts returned, unless they must be sent back for a warranty or core charge. Rules vary, so check with your state's consumer protection or automotive repair agency.</p>
<p>Good practice everywhere:</p>
<ol>
<li>Give a written estimate before starting and record the customer's approval, including any phone approvals with date, time and amount.</li>
<li>Get fresh approval for any additional work found during the repair.</li>
<li>Make the final invoice match the approved estimate line for line, with changes explained.</li>
</ol>
<p>For the difference between the two documents, see <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>.</p>

<h2>Warranty work, comebacks and customer-supplied parts</h2>
<p>Some situations need special handling on a mechanic invoice so your records stay clear and your margins stay intact.</p>
<h3>Warranty repairs and comebacks</h3>
<p>If a car comes back with a problem covered by your own parts and labor warranty, issue an invoice anyway, even if the total is zero. List the parts and labor at their normal prices, then show a warranty credit line that brings the balance to $0.00, and reference the original invoice number. This keeps a complete service history for the vehicle and shows you what comebacks cost. Where a parts supplier reimburses you for a failed part, record that separately in your books.</p>
<h3>Manufacturer and extended warranty claims</h3>
<p>Work billed to a manufacturer or an extended warranty company usually follows that payer's own claim process and labor times. The customer's invoice should show only what they owe, such as a deductible, plus any work outside the coverage.</p>
<h3>Customer-supplied parts</h3>
<p>If you agree to install a part the customer bought, note "customer-supplied part" on the line, charge labor only, and state clearly on the invoice that you do not warranty the part itself. Many shops limit labor warranties on customer-supplied parts, so put your policy in writing.</p>
<h3>Core charges</h3>
<p>Remanufactured parts such as alternators, starters and calipers often carry a core charge that is refunded when the old part is returned to the supplier. Show the core charge as its own line and explain whether the customer has already been credited.</p>

<h2>Tips for smoother pickups and payment</h2>
<ul>
<li><strong>Itemize everything.</strong> A detailed bill builds trust; our <a href="/blog/itemized-invoice">itemized invoice guide</a> explains how much detail to include.</li>
<li><strong>Walk the customer through the invoice.</strong> Point out the parts replaced and any recommendations for future work.</li>
<li><strong>Take payment at pickup.</strong> Accept cards and digital payments; our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> compares the options.</li>
<li><strong>Take a deposit on large or special-order jobs.</strong> A <a href="/blog/deposit-invoice">deposit invoice</a> protects you when ordering expensive parts.</li>
<li><strong>Print warranty terms</strong> on the invoice so the customer knows what is covered and for how long.</li>
<li><strong>Avoid common errors</strong> such as wrong VINs, missing mileage or arithmetic slips. See <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</li>
</ul>

<p>For cosmetic work rather than repairs, see the <a href="/blog/car-detailing-invoice-template">car detailing invoice template</a>.</p>

<h2>Create your auto repair invoice now</h2>
<p>A clear auto repair invoice template shows customers exactly what they paid for and keeps your shop's records in order. Open the generator with <a href="/invoice-generator/usa">US presets</a>, choose the strong, readable <a href="/invoice-templates/bold">Bold template</a>, add your parts and labor lines, and download a PDF ready to print at the counter.</p>
`,
  },
  {
    slug: "web-development-invoice-template",
    title: "Web Development Invoice Template: Milestones, Hours and Fees",
    description:
      "Free web development invoice template guide: bill fixed-price milestones, hourly work, change requests, hosting and licenses, with a worked invoice example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "it-managed-services-invoice-template",
      "milestone-payments",
      "freelance-invoice-template",
      "retainer-invoice",
    ],
    faqs: [
      {
        q: "How do web developers usually invoice clients?",
        a: "Web developers commonly bill fixed-price projects in milestones, such as a deposit, design approval and launch, or bill hourly for open-ended work. Ongoing maintenance is often billed as a monthly retainer.",
      },
      {
        q: "Should I charge a deposit for a website project?",
        a: "Many developers ask for a deposit before starting a fixed-price project to secure the schedule and reduce risk. The amount and terms should be set in your contract and invoiced separately before work begins.",
      },
      {
        q: "How do I bill a client for hosting, domains and plugin licenses?",
        a: "List each third-party cost as its own line with the service, term and amount, and say whether it is passed through at cost or includes a handling fee. Where possible, register domains and licenses in the client's name.",
      },
      {
        q: "How do I invoice for change requests or scope creep?",
        a: "Agree on a change request process in your contract. Price each approved change in writing, then invoice it as a separate line or a separate invoice that references the change request, rather than folding it into a milestone.",
      },
      {
        q: "Do I charge sales tax or VAT on web development?",
        a: "It depends on where you and your client are. Some US states tax certain digital or software services, and VAT may apply in the UK and EU, with reverse charge rules for many business clients abroad. Check with an accountant.",
      },
      {
        q: "How much should I charge for a website?",
        a: "Website prices vary with scope, so estimate rather than picking a number. Break the project into tasks such as discovery, design, templates, content entry, integrations, testing and launch, estimate hours for each, multiply by your rate and add a buffer for unknowns. Price hosting and maintenance separately. Put the scope and assumptions in your proposal so change requests are easy to spot.",
      },
      {
        q: "Who owns the website code after the client pays?",
        a: "Your contract decides. Many developers assign ownership of custom code to the client once the final invoice is paid, while keeping rights to reusable libraries, frameworks and tools they built before the project. Third-party themes and plugins stay under their own licenses. Set out ownership in the contract and repeat in the invoice notes that the transfer takes effect on full payment.",
      },
      {
        q: "Should I invoice weekly or monthly for hourly development work?",
        a: "Weekly or every two weeks suits new clients and long hourly projects, because it limits how much unpaid work builds up and gives the client regular visibility. Monthly invoicing is simpler for established clients and retainers. Whichever cycle you choose, put it in the contract, attach the time log for the period and invoice on the same day each cycle.",
      },
      {
        q: "What can I do if a client never pays the final website invoice?",
        a: "Send polite reminders, then a formal final notice referencing the contract. If your contract allows, you can delay launch, withhold the ownership transfer or suspend services you host and manage, but avoid taking down or altering a live site without clear contractual rights, as that can expose you to legal claims. Small claims court or a collections agency are options for unpaid amounts.",
      },
      {
        q: "Should I bill clients for my own software subscriptions?",
        a: "Usually not. Your own tools, such as your code editor, design software or project management apps, are business overheads covered by your rate. Bill a subscription to the client only when it is bought specifically for their project and they will keep using it, such as a premium plugin or SaaS account in their name. Agree pass-through costs in the proposal before buying.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A web development invoice template is a billing layout developers and agencies use to charge for building and maintaining websites and web apps. It should show the project name, the billing basis (milestone, hours or retainer), a clear description of what was delivered, any approved change requests, pass-through costs such as hosting or plugin licenses, tax where applicable, the total and payment terms. Linking each invoice to a milestone or approved estimate is what keeps payments on schedule.</p>

<p>This guide covers the common billing models for web development, what to include on the invoice, how to bill change requests and third-party costs, a worked milestone invoice, and tips for international clients. You can produce a professional developer invoice in minutes with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Web development billing models compared</h2>
<table><thead><tr><th>Model</th><th>How you invoice</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Fixed price with milestones</td><td>A percentage of the project fee at each agreed milestone</td><td>Brochure sites, e-commerce builds, well-defined projects</td><td>Scope creep; needs a clear change request process</td></tr>
<tr><td>Hourly or daily rate</td><td>Hours logged × rate, usually weekly or monthly</td><td>Open-ended development, bug fixing, legacy code</td><td>Clients want visibility; send time logs</td></tr>
<tr><td>Monthly retainer</td><td>A fixed fee each month for a block of hours or a service level</td><td>Maintenance, updates, security monitoring, small improvements</td><td>Define what happens to unused or extra hours</td></tr>
<tr><td>Value or package pricing</td><td>One price per package, such as "Starter site"</td><td>Productized services</td><td>Package contents must be explicit</td></tr>
</tbody></table>
<p>Many projects combine models: a fixed-price build invoiced in milestones, hourly billing for anything outside scope, and a retainer after launch. Our guides to <a href="/blog/milestone-payments">milestone payments</a> and <a href="/blog/retainer-invoice">retainer invoices</a> cover each model in depth.</p>

<h2>What to include on a web development invoice template</h2>
<ul>
<li><strong>Your details:</strong> name or business name, address, email, tax ID or VAT number if registered.</li>
<li><strong>Client details:</strong> the legal entity that signed the contract, billing address and any PO or project code.</li>
<li><strong>Invoice number, issue date and due date.</strong></li>
<li><strong>Project reference:</strong> project name, contract or proposal reference, milestone number.</li>
<li><strong>Deliverables:</strong> what was completed, such as "Homepage and 6 inner page templates built in staging, approved 15 Oct 2026".</li>
<li><strong>Hours and rate</strong> for time-based work, with a link to or attachment of the time log.</li>
<li><strong>Change requests:</strong> each one listed separately with its reference.</li>
<li><strong>Third-party costs:</strong> hosting, domain registration, premium themes or plugins, SaaS subscriptions, stock assets.</li>
<li><strong>Tax:</strong> only if you are registered and it applies.</li>
<li><strong>Payment terms and methods</strong>, plus how intellectual property or code ownership transfers on payment, if your contract says so.</li>
</ul>
<p>Number invoices consistently across all clients and projects. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a format such as <code>WEB-2026-027</code>.</p>

<h2>Worked example: milestone invoice for a website build</h2>
<p>A developer is building a small-business website for a fixed price of $12,000, billed in three milestones: 30% deposit, 40% on completion of design and front-end build, and 30% at launch. The deposit is paid. During the build, the client approved one change request for a booking form integration at six hours of work at $95 per hour, and the developer bought a premium plugin license and a domain on the client's behalf.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Milestone 2 of 3: design and front-end build complete (40% of $12,000 fixed fee)</td><td>1</td><td>$4,800.00</td><td>$4,800.00</td></tr>
<tr><td>Change request CR-03: booking form integration (hours, approved 8 Oct 2026)</td><td>6</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td>Premium forms plugin license, 1 year, passed through at cost</td><td>1</td><td>$249.00</td><td>$249.00</td></tr>
<tr><td>Domain registration, 1 year, registered in client's name, at cost</td><td>1</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td colspan="3"><strong>Total due by 5 November 2026</strong></td><td><strong>$5,637.00</strong></td></tr>
</tbody></table>
<p>The maths: 40% of $12,000 is $4,800.00; the change request is 6 × $95 = $570.00; pass-through costs are $249.00 + $18.00 = $267.00. Total: $4,800.00 + $570.00 + $267.00 = $5,637.00. The final milestone invoice at launch will be 30% of $12,000 = $3,600.00, plus any further approved changes. A short note on the invoice ("Paid to date: $3,600.00 deposit (INV WEB-2026-019). Remaining after this invoice: $3,600.00 at launch") helps the client follow the project budget. No tax is shown here; whether tax applies depends on your location and your client's (see below).</p>

<h2>Billing change requests, hosting and licenses</h2>
<h3>Change requests</h3>
<p>Scope creep is the biggest threat to profitability in web projects. Your contract should say how changes are requested, estimated and approved. Then, on the invoice, list each approved change as a separate line with its reference number, so the client sees the milestone price hasn't moved and the extras were agreed. Write the process into the contract before the project starts, not after the first dispute.</p>
<h3>Third-party costs</h3>
<p>Hosting, domains, premium plugins and SaaS tools are best registered in the client's name and paid by the client directly, so they own their assets if you part ways. Where you do pay on their behalf, invoice each cost with its term ("1 year, renews 8 Oct 2027") and be transparent about whether you add a handling fee.</p>
<h3>Ongoing maintenance</h3>
<p>After launch, a monthly maintenance retainer (updates, backups, security monitoring and a few hours of small changes) gives clients peace of mind and you predictable income. Invoice it on the same date each month and list what the retainer covered.</p>

<h2>Writing line items clients approve quickly</h2>
<p>Clients who aren't technical often can't judge a development invoice from code-level detail, and finance teams can't judge it at all. The goal is a description that connects each charge to something the client asked for and can recognize. Compare these examples:</p>
<table><thead><tr><th>Vague</th><th>Clear</th></tr></thead><tbody>
<tr><td>Development work</td><td>Milestone 2: responsive front-end build of homepage and 6 page templates, approved in staging 15 Oct 2026</td></tr>
<tr><td>Fixes</td><td>Fixed checkout error on mobile Safari and broken image uploads in admin (tickets #41, #44): 3.5 hours</td></tr>
<tr><td>Extras</td><td>Change request CR-03: booking form integrated with client's calendar tool: 6 hours, approved by email 8 Oct 2026</td></tr>
<tr><td>Hosting</td><td>Managed hosting, 12 months from 1 Nov 2026, passed through at cost</td></tr>
</tbody></table>
<p>A few habits make this easier:</p>
<ul>
<li><strong>Use the client's language.</strong> Name pages and features the way the client does in meetings, not by component or repository names.</li>
<li><strong>Reference approvals.</strong> A date and the name of the person who approved a milestone or change removes most questions before they arise.</li>
<li><strong>Group hourly work by task.</strong> Summarize hours per feature or ticket on the invoice and attach the detailed time log rather than listing every 15-minute entry.</li>
<li><strong>Show the project budget.</strong> On fixed-price work, a short "paid to date / this invoice / remaining" note lets the client see they are on track.</li>
</ul>
<p>For more on presenting freelance work clearly, see our <a href="/blog/freelance-invoice-template">freelance invoice template</a> guide.</p>

<h2>Taxes and international clients</h2>
<p>Web developers often work for clients in other states or countries, which makes tax more complicated:</p>
<ul>
<li><strong>US sales tax:</strong> most states don't tax custom web development services, but some tax certain digital products, software or data processing services. Rules vary by state, so check with an accountant.</li>
<li><strong>UK and EU VAT:</strong> if you are VAT-registered, domestic business clients are usually charged VAT. For business clients in another country, the reverse charge often applies, and the invoice needs specific wording. See our <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> guide.</li>
<li><strong>Currency and payments:</strong> state the currency explicitly, agree who pays transfer fees, and include the correct bank details. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the practicalities.</li>
</ul>

<h2>Tips to get paid on time for web projects</h2>
<ol>
<li><strong>Invoice the deposit before starting.</strong> Don't begin work until it's paid, and send it as its own invoice.</li>
<li><strong>Tie each milestone to client approval.</strong> Get sign-off in writing, then invoice the same day.</li>
<li><strong>Add a pay-now option.</strong> A card or bank payment link on the invoice removes friction for busy clients.</li>
<li><strong>Hold the launch until the final payment clears</strong>, if your contract allows it, or transfer code ownership only on full payment.</li>
<li><strong>Send time logs with hourly invoices</strong> so clients can see exactly where the hours went; our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> shows how to present them.</li>
</ol>

<h2>Create your web development invoice now</h2>
<p>A clear web development invoice template ties every payment to a milestone or approved piece of work, so clients pay without debate. Open the generator with <a href="/invoice-generator/uk">UK presets</a> or <a href="/invoice-generator/usa">US presets</a>, pick the clean, tech-friendly <a href="/invoice-templates/startup">Startup template</a>, add your milestone and extras, and download your PDF.</p>
`,
  },
  {
    slug: "tutoring-invoice-template",
    title: "Tutoring Invoice Template: How Tutors Bill Parents (2026)",
    description:
      "Free tutoring invoice template guide for private tutors: bill sessions, packages and cancellations, invoice parents clearly, plus a worked monthly example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "school-fee-voucher-format",
      "how-to-invoice-for-hourly-work",
      "recurring-invoices-guide",
      "how-to-invoice-without-a-business",
    ],
    faqs: [
      {
        q: "How do private tutors invoice parents?",
        a: "Most private tutors send a monthly invoice to the parent or guardian listing each session date, length and rate, plus any materials or cancellation fees. Others bill per session or sell prepaid packages and invoice each package up front.",
      },
      {
        q: "Should tutors charge for late cancellations?",
        a: "Many tutors charge all or part of the session fee for cancellations made with less than 24 hours' notice. It is fair only if the policy was agreed in writing before lessons started, so include it in your terms and show it as a separate invoice line.",
      },
      {
        q: "Do I need a business to send a tutoring invoice?",
        a: "In many countries, a self-employed tutor can invoice under their own name without forming a company. You will usually need to report the income and may need to register as self-employed, so check the rules with your tax authority.",
      },
      {
        q: "Do tutors charge VAT or sales tax?",
        a: "Usually not. Most US states do not tax tutoring services, and in the UK private tuition by an independent individual tutor in a subject ordinarily taught in schools or universities is generally VAT-exempt. Agencies and some subjects can be treated differently, so confirm with an accountant.",
      },
      {
        q: "Should tutors take payment in advance?",
        a: "Taking payment in advance, through monthly prepayment or session packages, reduces late payments and no-shows. Whatever you choose, state the due date clearly on each invoice and in your terms.",
      },
      {
        q: "How much should I charge for tutoring?",
        a: "Rates vary by subject, level, location and experience, so set yours from local research and your costs. Check what tutors with similar qualifications charge nearby or on platforms, then adjust for exam specialisms, travel time for home visits and marking outside lessons. Many tutors charge more for exam preparation and advanced levels. Review rates yearly and give families written notice of changes.",
      },
      {
        q: "Can parents pay for tutoring with a 529 plan?",
        a: "In the US, a 2025 federal law expanded qualified K-12 expenses for 529 plans to include certain tutoring, for withdrawals from July 5, 2025, within an annual K-12 limit. Conditions apply, including rules about who provides the tutoring, and state tax treatment can differ. Parents should confirm with their plan administrator, and your invoice should clearly show your name, session dates and amounts.",
      },
      {
        q: "Should I send separate tutoring invoices for siblings?",
        a: "Either works, so ask the family what they prefer. One combined invoice with a section per child is simpler for parents who pay together, while separate invoices help when different relatives pay for each child or a school or scheme funds one child's lessons. Always show each student's name on the session lines so the family can check dates quickly.",
      },
      {
        q: "What if a parent disputes a session on my tutoring invoice?",
        a: "Check your records first: the lesson date, start and end time, and any messages confirming or cancelling it. Share them calmly with the parent. If you made an error, correct it with a credit on the next invoice or a corrected invoice with a new number, rather than altering the old one. A simple lesson log with dates and topics prevents most disagreements.",
      },
      {
        q: "Should tutors charge for lesson preparation time?",
        a: "Most tutors build normal preparation into their session rate rather than billing it separately. Extra work beyond a regular lesson, such as marking full practice papers, writing a custom revision plan or preparing for an unfamiliar exam specification, can be billed as its own line if the family agreed in advance. Put this in your terms so parents know what the rate covers.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A tutoring invoice template is a simple billing layout private tutors use to charge parents or adult students for lessons. It should show your name and contact details, the person paying, the student's name, the billing period, each session with date, subject, length and rate, any materials or cancellation fees, discounts, the total and how and when to pay. Most tutors send one invoice per student each month.</p>

<p>This guide covers how tutoring billing usually works, what to put on the invoice, how to handle packages, cancellations and discounts, a worked monthly example and tax basics for tutors. You can make a friendly, professional tutor invoice with our <a href="/invoice-generator">free invoice generator</a> in a couple of minutes.</p>

<h2>How tutoring billing works</h2>
<p>Tutors usually choose one of four billing patterns. The right one depends on how regular your students are and how much admin you want to do.</p>
<table><thead><tr><th>Billing pattern</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Per session</td><td>Invoice after each lesson</td><td>Simple for occasional students</td><td>Lots of small invoices to track</td></tr>
<tr><td>Monthly in arrears</td><td>One invoice at month-end listing all sessions</td><td>Least admin; easy for parents</td><td>You wait up to a month to be paid</td></tr>
<tr><td>Monthly in advance</td><td>Invoice at the start of the month for scheduled sessions</td><td>Steady cash flow; fewer no-shows</td><td>Need a policy for credits on missed lessons</td></tr>
<tr><td>Prepaid package</td><td>Sell a block, such as 10 sessions, paid up front</td><td>Commitment and cash up front</td><td>Must track sessions used and an expiry policy</td></tr>
</tbody></table>
<p>Whichever pattern you use, send invoices on a predictable schedule. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how to set up a routine you don't have to think about. If you charge by the hour, the principles in <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> apply too.</p>

<h2>What to include on a tutoring invoice template</h2>
<ul>
<li><strong>Your details:</strong> name or business name, email, phone and, if registered, your tax ID.</li>
<li><strong>Bill to:</strong> the parent or guardian who pays (not the child), with their email and address.</li>
<li><strong>Student name:</strong> essential if a family has more than one child in lessons.</li>
<li><strong>Invoice number:</strong> a unique number for each invoice; our <a href="/tools/invoice-number-generator">invoice number generator</a> can create a simple format such as <code>TUT-2026-034</code>.</li>
<li><strong>Billing period, issue date and due date.</strong></li>
<li><strong>Session lines:</strong> date, subject or focus, length and rate for each lesson.</li>
<li><strong>Extras:</strong> materials, test papers, travel fees for in-home lessons, online platform fees.</li>
<li><strong>Adjustments:</strong> sibling or package discounts, credits for lessons you cancelled.</li>
<li><strong>Payment details:</strong> bank transfer details, payment link or accepted methods.</li>
<li><strong>A short note:</strong> a line about progress or next month's schedule keeps the invoice friendly.</li>
</ul>

<h2>Typical line items for tutors</h2>
<p>Tutoring invoices are usually short, but these lines cover most situations:</p>
<ul>
<li>One-to-one sessions by subject and length, such as "GCSE Maths, 60 min" or "SAT Reading, 90 min".</li>
<li>Group or small-group sessions, priced per student.</li>
<li>Online sessions, if you price them differently from in-person lessons.</li>
<li>Assessment or placement sessions for new students.</li>
<li>Marking of practice papers or essays outside lesson time.</li>
<li>Materials: workbooks, past papers, printing.</li>
<li>Travel fees for lessons at the student's home.</li>
<li>Late cancellation or no-show fees, per your written policy.</li>
<li>Discounts: sibling, package or loyalty discounts as a negative line.</li>
</ul>

<h2>Worked example: a monthly tutoring invoice</h2>
<p>A math tutor charges $60 per hour and bills monthly in arrears. In October 2026 the student had seven one-hour algebra sessions and one 1.5-hour test-prep session, cancelled one session with less than 24 hours' notice (the tutor's policy is a 50% fee), and the tutor bought a practice workbook. The family has two children with the tutor, so a 5% sibling discount applies to tuition only.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Algebra tutoring, 1 hour: 1, 6, 8, 13, 20, 22, 27 Oct (sessions)</td><td>7</td><td>$60.00</td><td>$420.00</td></tr>
<tr><td>SAT math test prep: 29 Oct (hours)</td><td>1.5</td><td>$60.00</td><td>$90.00</td></tr>
<tr><td>Late cancellation, 15 Oct (50% of 1-hour session, per policy)</td><td>1</td><td>$30.00</td><td>$30.00</td></tr>
<tr><td>SAT math practice workbook</td><td>1</td><td>$32.95</td><td>$32.95</td></tr>
<tr><td colspan="3">Subtotal</td><td>$572.95</td></tr>
<tr><td colspan="3">Sibling discount, 5% of tuition ($510.00)</td><td>−$25.50</td></tr>
<tr><td colspan="3"><strong>Total due by 7 November 2026</strong></td><td><strong>$547.45</strong></td></tr>
</tbody></table>
<p>The maths: 7 × $60 = $420.00 and 1.5 × $60 = $90.00, so tuition is $510.00. Adding the $30.00 cancellation fee and the $32.95 workbook gives a subtotal of $572.95. The discount is 5% of $510.00 = $25.50, applied to tuition only, leaving $547.45. Listing each session date lets the parent check it against their calendar in seconds.</p>

<h2>Packages, cancellations and discounts</h2>
<h3>Prepaid packages</h3>
<p>If you sell a package, invoice it once when sold ("10 × 1-hour English sessions, valid until 31 March 2027") and keep a running tally of sessions used. Showing "Sessions used: 4 of 10" in the notes on later receipts or statements prevents confusion. Decide in advance what happens to unused sessions when the package expires or the student stops, and put it in your terms.</p>
<h3>Cancellation policy</h3>
<p>Late cancellations are the most common source of awkward conversations for tutors. A clear written policy (for example "Cancellations with less than 24 hours' notice are charged at 50%") agreed before the first lesson makes the invoice line uncontroversial. Always show the cancellation as a separate line with the date, never hidden in a session total. If you cancel a lesson yourself, credit or reschedule it.</p>
<h3>Discounts</h3>
<p>Show discounts as their own line rather than lowering your rate. It keeps your standard price visible, and makes it easy to end the discount later without seeming to raise prices.</p>

<h2>Tax basics for tutors</h2>
<p>Most private tutors are self-employed, and the main tax obligation is reporting the income. Sales taxes rarely apply, but the details depend on where you work:</p>
<ul>
<li><strong>United States:</strong> most states do not apply sales tax to tutoring services. Self-employed tutors generally report the income on their tax return and may owe self-employment tax; check with the IRS or a tax professional.</li>
<li><strong>United Kingdom:</strong> self-employed tutors usually register for Self Assessment. Private tuition provided by an individual tutor acting independently, in a subject ordinarily taught in schools or universities, is generally exempt from VAT, but tuition through some agencies or in other subjects may be treated differently, so check HMRC guidance or ask an accountant. The <a href="/invoice-generator/uk">UK invoice generator</a> defaults to GBP, and our guide to <a href="/blog/sole-trader-invoice-uk">invoicing as a sole trader in the UK</a> covers the required details.</li>
<li><strong>No company needed:</strong> in many countries you can invoice in your own name. See <a href="/blog/how-to-invoice-without-a-business">how to invoice without a business</a> for what to include.</li>
</ul>

<h2>Online tutoring, adult learners and agencies</h2>
<p>The same tutoring invoice template adapts easily to other teaching setups, with a few tweaks:</p>
<ul>
<li><strong>Online tutoring.</strong> Note "online" on each session line and state the time zone if your students are abroad. For international families, state the currency clearly and agree who pays any transfer or conversion fees before the first lesson.</li>
<li><strong>Adult learners.</strong> When the student pays for themselves, bill them directly. If an employer pays for language or professional exam coaching, the employer's finance team may need a purchase order reference, their company name as the bill-to party and a tax ID on your invoice.</li>
<li><strong>Schools and organizations.</strong> Schools that hire you for intervention groups or exam workshops usually pay on longer terms and want an invoice per term or per month listing groups, dates and hours. Ask for their invoicing requirements before you start.</li>
<li><strong>Agencies and platforms.</strong> If an agency or tutoring platform books and bills the family, you normally invoice the agency for your sessions (or the platform pays you automatically) rather than invoicing the family. Read your agreement, since some agencies forbid direct billing of their clients.</li>
</ul>

<h2>Tips for getting paid on time by families</h2>
<ol>
<li><strong>Agree terms before the first lesson.</strong> Put your rate, billing schedule, due date and cancellation policy in a short written agreement or welcome email.</li>
<li><strong>Invoice on the same day every month.</strong> Parents budget better when your invoice arrives predictably.</li>
<li><strong>Make paying easy.</strong> Include bank details or a payment link on the invoice; our guide to <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> includes email wording you can adapt.</li>
<li><strong>Send a receipt.</strong> Some parents need proof of payment for childcare benefits or employer schemes; see our <a href="/blog/payment-receipt-template">payment receipt template</a>.</li>
<li><strong>Follow up warmly.</strong> A friendly nudge usually works; our guide on <a href="/blog/how-to-ask-for-payment">how to ask for payment politely</a> has scripts that won't strain the relationship.</li>
</ol>
<p>A calm, friendly design suits tutoring well: the soft <a href="/invoice-templates/lavender">Lavender template</a> feels approachable while staying professional.</p>

<p>Running regular childcare rather than lessons? The <a href="/blog/daycare-invoice-template">daycare invoice template</a> covers weekly tuition and the details parents need for tax purposes.</p>

<h2>Create your tutoring invoice now</h2>
<p>A clear tutoring invoice template saves you admin and gives families no reason to delay payment. Open the generator with <a href="/invoice-generator/usa">US presets</a>, choose the clean <a href="/invoice-templates/ocean">Ocean template</a>, add your sessions and extras, and download a PDF to send to parents today.</p>
`,
  },
  {
    slug: "catering-invoice-template",
    title: "Catering Invoice Template: Per-Person Pricing, Deposits & Tax",
    description:
      "Free catering invoice template guide: bill per-person menus, staffing, rentals, service charges, deposits and sales tax, with a worked wedding catering example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "restaurant-bill-format",
      "deposit-invoice",
      "invoice-vs-quotation",
      "sales-tax-on-invoices-us",
    ],
    faqs: [
      {
        q: "What should a catering invoice include?",
        a: "A catering invoice should include the event name, date, venue and guaranteed guest count, menu items with per-person or per-item prices, staffing hours, rentals, service charges, tax, deposits already paid, the balance due and the due date.",
      },
      {
        q: "Is a service charge the same as a tip on a catering invoice?",
        a: "No. A mandatory service charge is part of the price the client agreed to pay, while a tip is voluntary. In the US the two are often treated differently for sales tax and payroll purposes, so label them clearly and check your state's rules.",
      },
      {
        q: "How much deposit do caterers usually ask for?",
        a: "Deposits vary by caterer and event size, and are set in the catering contract. Many caterers take a deposit to reserve the date and a further payment closer to the event, with the balance due before or shortly after the event.",
      },
      {
        q: "What is a guaranteed guest count?",
        a: "The guaranteed guest count is the final number of guests the client confirms by a deadline before the event. The client is usually billed for at least that number even if fewer people attend, and for actual numbers if more attend.",
      },
      {
        q: "Do caterers charge sales tax?",
        a: "In many US states, catered food and related charges are subject to sales tax, and service charges may be taxable too. In the UK, catering is generally standard-rated for VAT. Rules vary, so confirm with your tax authority or accountant.",
      },
      {
        q: "How should caterers set a per-person price?",
        a: "Start with your food cost per guest for the menu, then add labor, equipment, transport, overhead and profit. Many caterers aim to keep food cost at a set share of the per-person price, but the right share depends on your menu and service style. Price staffing, rentals and service charges separately so clients can see exactly what the per-person rate covers.",
      },
      {
        q: "What happens to a catering deposit if the event is cancelled?",
        a: "That depends on your contract. Many catering contracts make the deposit non-refundable because the date was reserved and other bookings turned away, and some scale cancellation fees by how close to the event it is cancelled. Local consumer law can limit what you keep if it far exceeds your actual loss. Send a statement showing the deposit, any fee retained and any refund due.",
      },
      {
        q: "Should caterers charge for menu tastings?",
        a: "Many caterers charge for tastings, especially for large events, then credit the fee against the final invoice if the client books. Some offer tastings free only after the contract is signed. Whatever you choose, state it in your proposal and show it on the invoice, either as its own line or as a credit on the final bill, such as 'Tasting fee credit, 12 Aug 2026'.",
      },
      {
        q: "Do I need a sales tax permit to cater events?",
        a: "In US states that tax catered food, you generally need a seller's permit or sales tax registration before collecting tax, and you must file returns on the schedule your state sets. Events in another state or city may carry different rates or rules. Show your permit number on invoices where your state expects it, and check with your state revenue department before your first event.",
      },
      {
        q: "Can I charge a fee if the client changes the menu late?",
        a: "Yes, if your contract sets a deadline for menu changes and explains the fee. Late changes can waste ingredients already bought and require extra prep, so many caterers charge for wasted food plus any price difference. Show it as a separate line with the date the change was requested, and confirm the cost with the client in writing before you invoice it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A catering invoice template is a billing layout caterers use to charge clients for food and event services. It should show the event details and guaranteed guest count, menu items priced per person or per item, staffing hours, equipment and linen rentals, any service charge, sales tax, deposits already received, the balance due and the due date. Because most catering is billed in stages, the invoice should always make clear what has been paid and what remains.</p>

<p>This guide covers how catering billing works from quote to final invoice, what to include, typical line items, a worked wedding example with deposit and tax, and how service charges and tax are commonly handled. You can create a polished catering invoice with our <a href="/invoice-generator">free invoice generator</a> and download it as a PDF.</p>

<h2>How catering billing works</h2>
<p>Catering is rarely a single invoice. A typical event goes through several documents:</p>
<ol>
<li><strong>Quote or proposal:</strong> the menu, estimated guest count and pricing. See <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> for how the two differ.</li>
<li><strong>Contract and deposit invoice:</strong> the client signs and pays a deposit to secure the date.</li>
<li><strong>Interim payment:</strong> some caterers take a second payment closer to the event.</li>
<li><strong>Final count:</strong> the client confirms the guaranteed guest count by a deadline, often one to two weeks before.</li>
<li><strong>Final invoice:</strong> the full event cost, less all payments received, with the balance due before or shortly after the event.</li>
</ol>
<p>Our <a href="/blog/deposit-invoice">deposit invoice</a> guide explains how to bill the first stage, and how to show deposits on the final bill.</p>

<h2>What to include on a catering invoice template</h2>
<table><thead><tr><th>Section</th><th>What to show</th></tr></thead><tbody>
<tr><td>Your business</td><td>Name, address, phone, email, tax or sales tax permit number where applicable</td></tr>
<tr><td>Client</td><td>Name or company, billing address, contact on the day</td></tr>
<tr><td>Event details</td><td>Event name, date, venue, start and end times, service style (buffet, plated, family-style)</td></tr>
<tr><td>Guest count</td><td>Guaranteed count and, on the final invoice, actual count if higher</td></tr>
<tr><td>Menu</td><td>Package or items with per-person or per-item prices</td></tr>
<tr><td>Staffing</td><td>Number of servers, bartenders or chefs, hours and hourly rate</td></tr>
<tr><td>Rentals and extras</td><td>Linens, tableware, glassware, equipment, delivery, cake cutting</td></tr>
<tr><td>Charges and tax</td><td>Service charge, gratuity if any, sales tax</td></tr>
<tr><td>Payments</td><td>Deposits and interim payments received with dates</td></tr>
<tr><td>Balance and terms</td><td>Balance due, due date, payment methods, cancellation terms</td></tr>
</tbody></table>
<p>Give the deposit invoice and the final invoice separate numbers (our <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a format like <code>CAT-2026-0087</code>) and reference the deposit invoice number on the final bill.</p>

<h2>Typical catering line items</h2>
<ul>
<li><strong>Menu packages</strong> priced per person, such as "Buffet dinner package: 2 mains, 3 sides, salad, bread".</li>
<li><strong>Per-item food</strong> such as platters, passed appetizers, desserts or late-night snacks.</li>
<li><strong>Beverage service:</strong> soft drinks, coffee and tea, bar packages per person or per hour, where licensed.</li>
<li><strong>Staffing:</strong> servers, bartenders, chefs and event captain by the hour, often with a minimum.</li>
<li><strong>Rentals:</strong> linens, china, flatware, glassware, chafing dishes, tables and chairs.</li>
<li><strong>Delivery, setup and breakdown</strong> fees, and travel fees for distant venues.</li>
<li><strong>Cake cutting or corkage fees</strong> when the client supplies their own cake or wine.</li>
<li><strong>Service charge:</strong> a percentage, typically of food and beverage.</li>
<li><strong>Tax</strong> on taxable items.</li>
</ul>

<h2>Worked example: final wedding catering invoice</h2>
<p>A caterer serves a wedding on 14 November 2026 with a guaranteed count of 120 guests. The contract sets an 18% service charge on food, and the client paid a $2,500 deposit when booking. In this example, sales tax of 8% applies to the full subtotal including the service charge. Your state's rules may differ.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Buffet dinner package (per guest)</td><td>120</td><td>$48.00</td><td>$5,760.00</td></tr>
<tr><td>Passed appetizers, 4 varieties (per guest)</td><td>120</td><td>$9.50</td><td>$1,140.00</td></tr>
<tr><td>Servers: 5 staff × 6 hours (staff hours)</td><td>30</td><td>$35.00</td><td>$1,050.00</td></tr>
<tr><td>Bartenders: 2 staff × 5 hours (staff hours)</td><td>10</td><td>$45.00</td><td>$450.00</td></tr>
<tr><td>Linen, china and glassware rental (package)</td><td>1</td><td>$640.00</td><td>$640.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$9,040.00</td></tr>
<tr><td colspan="3">Service charge, 18% of food ($6,900.00)</td><td>$1,242.00</td></tr>
<tr><td colspan="3">Sales tax, 8% of $10,282.00</td><td>$822.56</td></tr>
<tr><td colspan="3">Event total</td><td>$11,104.56</td></tr>
<tr><td colspan="3">Less: deposit received 2 June 2026 (invoice CAT-2026-0041)</td><td>−$2,500.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 7 November 2026</strong></td><td><strong>$8,604.56</strong></td></tr>
</tbody></table>
<p>The maths: food is $5,760.00 + $1,140.00 = $6,900.00. Staffing is 30 × $35 = $1,050.00 and 10 × $45 = $450.00. The subtotal is $6,900.00 + $1,050.00 + $450.00 + $640.00 = $9,040.00. The service charge is 18% of $6,900.00 = $1,242.00. Tax is 8% of ($9,040.00 + $1,242.00) = 8% of $10,282.00 = $822.56. The event total is $11,104.56, and after the $2,500.00 deposit the balance is $8,604.56. You can check tax on your own figures with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Service charges, gratuities and sales tax</h2>
<p>This is the part of catering invoicing that most often causes confusion, so label everything precisely.</p>
<ul>
<li><strong>Service charge vs gratuity.</strong> A mandatory service charge written into the contract is part of the price. A gratuity or tip is voluntary and decided by the client. In the US, the IRS generally treats mandatory service charges paid to staff as wages rather than tips, which affects payroll. Don't call a mandatory charge a "gratuity" on the invoice.</li>
<li><strong>Sales tax.</strong> Many US states tax catered food, and some also tax mandatory service charges, rentals and delivery, while voluntary tips are usually not taxable. Treatment of staffing charges varies. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers the general principles; check your state's specific rules or ask an accountant.</li>
<li><strong>VAT.</strong> In the UK, catering services are generally standard-rated for VAT, so VAT-registered caterers charge VAT on food and service. Check HMRC guidance for your situation.</li>
<li><strong>Licensing.</strong> Alcohol service usually requires the right license or permit, and some caterers can only provide bar staff rather than sell alcohol. Bill only what your license allows.</li>
</ul>

<h2>Corporate catering and drop-off orders</h2>
<p>Not every catering job is a full-service event. Office lunches, boxed meals and drop-off platters are billed more like a product sale, and corporate clients have their own expectations:</p>
<ul>
<li><strong>Itemize by order.</strong> List each item with quantity and unit price ("Boxed lunch, turkey and avocado, 18 × $16.50"), plus delivery and any packaging or disposables fee.</li>
<li><strong>Reference the order.</strong> Include the order date, delivery date and time, delivery address and the name of the person who ordered, so the company's accounts team can match the invoice to an internal request or purchase order.</li>
<li><strong>Consolidate regular orders.</strong> For clients who order weekly, agree to a monthly statement-style invoice listing every order with its date and amount, instead of dozens of small invoices.</li>
<li><strong>Agree payment terms.</strong> Businesses often expect 14 or 30 days to pay, unlike private event clients who pay before the day. Decide what credit you are comfortable giving, and take card payment at order time for new or occasional customers.</li>
<li><strong>Note dietary labels.</strong> Labeling vegetarian, vegan or allergen-free items on the invoice and delivery note helps the client confirm they received what they ordered.</li>
</ul>

<h2>Changes after the final invoice</h2>
<p>Events change. If the actual guest count exceeded the guarantee, issue a supplementary invoice for the extra guests at the agreed per-person rate. If you need to refund or reduce something after the invoice was issued (for example a rental item that never arrived), issue a <a href="/blog/credit-note-guide">credit note</a> rather than editing the original invoice, so your records stay consistent. Lower actual attendance usually doesn't reduce the bill below the guaranteed count, which is exactly why the guarantee exists; make sure your contract says so.</p>

<h2>Tips to protect your cash flow as a caterer</h2>
<ul>
<li><strong>Never buy food on credit for an unpaid event.</strong> Time your interim payment so it covers ingredient costs.</li>
<li><strong>Set the final balance due before the event</strong> where possible, so you are not chasing payment after the party. Our guide to <a href="/blog/invoice-due-date">invoice due dates</a> explains how to set and state them.</li>
<li><strong>Put cancellation terms in the contract</strong> and repeat them on the deposit invoice.</li>
<li><strong>Agree late terms up front.</strong> If a corporate client pays late, our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to apply agreed charges.</li>
<li><strong>Match the design to the event.</strong> Weddings and private events suit a refined layout such as the <a href="/invoice-templates/elegant">Elegant template</a>; corporate lunches suit something plainer.</li>
</ul>

<p>If you plan the whole event rather than just the food, the <a href="/blog/event-planner-invoice-template">event planner invoice template</a> covers retainers and vendor pass-through costs.</p>

<h2>Create your catering invoice now</h2>
<p>A detailed catering invoice template keeps deposits, guest counts and tax clear from booking to the last plate. Open the generator with <a href="/invoice-generator/usa">US presets</a>, choose the warm <a href="/invoice-templates/sunset">Sunset template</a>, add your menu, staffing and payments, and download a PDF ready to send.</p>
`,
  },
  {
    slug: "hvac-invoice-template",
    title: "HVAC Invoice Template: Service Calls, Parts and Refrigerant",
    description:
      "Free HVAC invoice template guide: bill service calls, diagnostics, parts, refrigerant, installs and maintenance plans, with a worked AC repair invoice example.",
    category: "industry-invoices",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["plumbing-invoice-template", "electrician-invoice-template", "recurring-invoices-guide"],
    faqs: [
      {
        q: "What should be on an HVAC invoice?",
        a: "An HVAC invoice should show your business and license details, the customer and service address, the equipment worked on with make, model and serial number, the problem and work performed, labor, parts, refrigerant quantity and type, fees, tax, the total and warranty notes.",
      },
      {
        q: "Should HVAC companies charge a service call fee?",
        a: "Many HVAC businesses charge a service call or trip fee to cover travel and the first part of the visit, and some credit it toward the repair. State the fee and whether it is credited when the customer books, and show it as its own invoice line.",
      },
      {
        q: "How do I bill refrigerant on an HVAC invoice?",
        a: "List refrigerant as its own line with the refrigerant type and quantity, usually in pounds, at your per-pound price. Recording the amount added also supports your refrigerant records, which may be required under EPA rules in the US.",
      },
      {
        q: "Is flat-rate or time-and-materials pricing better for HVAC?",
        a: "Flat-rate pricing gives customers a fixed price per repair, which is easy to approve, while time-and-materials bills actual hours plus parts. Many shops use flat rates for common repairs and time-and-materials for unusual jobs.",
      },
      {
        q: "Do HVAC contractors charge sales tax?",
        a: "It depends on the state and the job. Some states tax parts and equipment on repairs, some tax repair labor, and new installations may be treated as construction contracts. Check your state revenue department's rules or ask an accountant.",
      },
      {
        q: "How should I invoice a repair on an R-22 system?",
        a: "Show the R-22 as its own line with the quantity in pounds and your per-pound price. US production and import of R-22 ended on January 1, 2020, so servicing relies on reclaimed or previously produced refrigerant, and prices can be high and change quickly. Recommend the customer consider replacement options if the system keeps leaking, and record the amount added.",
      },
      {
        q: "How much should I charge for an HVAC maintenance plan?",
        a: "Build the price from the work included: the number of tune-up visits a year, the average time and materials each takes, travel, and the cost of member benefits such as priority service or repair discounts. Then compare with local competitors. Monthly pricing is usually the annual price divided by 12, sometimes slightly higher to cover billing costs. Review prices when labor costs change.",
      },
      {
        q: "Can customers still get the federal tax credit for a new heat pump?",
        a: "The federal 25C energy efficient home improvement credit ended for property placed in service after December 31, 2025, so 2026 installations generally do not qualify. State, local and utility rebates may still be available. Put the make, model, serial numbers and efficiency ratings on the invoice so customers can apply, but point them to each program's rules rather than promising eligibility.",
      },
      {
        q: "How do I bill for ductwork repairs or duct cleaning?",
        a: "List ductwork as its own section: the scope, such as replacing flex duct to one bedroom or sealing joints in the attic, the materials used, labor hours or a fixed price, and any testing performed. For duct cleaning, state the number of vents or system size you priced. Before and after photos or airflow readings help customers see the value of work they cannot easily inspect.",
      },
      {
        q: "Can I charge more for HVAC service during a heat wave?",
        a: "You can set higher rates for after-hours or emergency calls, as long as customers are told before you dispatch. Raising prices sharply during a declared emergency can breach price-gouging laws in some states, particularly for essential services. Keep your standard rate card consistent, state emergency surcharges clearly, and check your state's rules whenever a state of emergency is declared.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An HVAC invoice template is a billing layout heating, ventilation and air conditioning contractors use to charge for service calls, repairs, installations and maintenance. It should include your business and license details, the service address, the equipment's make, model and serial number, the problem found and work performed, labor, parts, refrigerant type and quantity, any fees and discounts, tax, the total and warranty information. Detailed equipment and refrigerant lines make the invoice useful long after it is paid.</p>

<p>This guide covers HVAC pricing models, the fields to include, typical line items, a worked emergency repair example, installation and maintenance plan billing, and compliance notes. You can create a professional HVAC service invoice with our <a href="/invoice-generator">free invoice generator</a> and send it from the job site.</p>

<h2>How HVAC pricing works</h2>
<table><thead><tr><th>Pricing model</th><th>How it is billed</th><th>Best for</th></tr></thead><tbody>
<tr><td>Service call or diagnostic fee</td><td>A flat fee for the visit and diagnosis, sometimes credited toward the repair</td><td>Every repair call</td></tr>
<tr><td>Flat-rate repair pricing</td><td>A fixed price per task from your price book, including labor and standard parts</td><td>Common repairs: capacitors, motors, contactors, igniters</td></tr>
<tr><td>Time and materials</td><td>Actual labor hours × rate, plus parts and refrigerant</td><td>Complex diagnostics, ductwork changes, older systems</td></tr>
<tr><td>Fixed-price installation</td><td>One quoted price for equipment, labor, materials and permits, often with a deposit</td><td>System replacements and new installs</td></tr>
<tr><td>Maintenance agreement</td><td>Annual or monthly fee for scheduled tune-ups and member benefits</td><td>Residential and light commercial customers</td></tr>
</tbody></table>
<p>Whichever model you use, give the customer the price before the work. A written estimate for larger jobs protects both sides. See <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> for how the two documents fit together.</p>

<h2>What to include on an HVAC invoice template</h2>
<ul>
<li><strong>Business details:</strong> company name, address, phone, email, contractor license number where required, tax ID.</li>
<li><strong>Customer and site:</strong> billing name and address, and the service address if different (common with landlords and property managers).</li>
<li><strong>Invoice number, service date and due date.</strong></li>
<li><strong>Equipment:</strong> system type, make, model and serial number of each unit worked on.</li>
<li><strong>Complaint, diagnosis and work performed:</strong> a short, plain-language description of each.</li>
<li><strong>Labor:</strong> flat-rate task or hours and rate, with technician name.</li>
<li><strong>Parts:</strong> description, part number and quantity.</li>
<li><strong>Refrigerant:</strong> type and amount added or recovered.</li>
<li><strong>Fees and discounts:</strong> service call fee, after-hours premium, maintenance member discount.</li>
<li><strong>Tax, total, payments and balance due.</strong></li>
<li><strong>Warranty and recommendations:</strong> parts and labor warranty terms, and any recommended follow-up work.</li>
</ul>
<p>A consistent numbering format such as <code>HVAC-2026-0512</code> (easy to set up with our <a href="/tools/invoice-number-generator">invoice number generator</a>) lets you look up any unit's service history by invoice.</p>

<h2>Typical HVAC line items</h2>
<ul>
<li>Service call, trip or diagnostic fee; after-hours or emergency premium.</li>
<li>Repairs: capacitors, contactors, fan motors, blower motors, igniters, flame sensors, thermostats, control boards.</li>
<li>Refrigerant by the pound, plus leak search and repair.</li>
<li>Coil cleaning, drain line clearing, filter replacement.</li>
<li>Ductwork repair, sealing or modification.</li>
<li>Equipment supply and installation: furnaces, condensers, heat pumps, air handlers, mini-splits.</li>
<li>Installation materials: line sets, pads, disconnects, thermostat wire, condensate pumps.</li>
<li>Permit and inspection fees.</li>
<li>Removal and disposal of old equipment, including refrigerant recovery.</li>
<li>Maintenance agreement fees and member discounts.</li>
</ul>

<h2>Worked example: emergency AC repair invoice</h2>
<p>A homeowner's AC stops working on a Saturday evening. The technician finds a failed run capacitor and condenser fan motor, plus a low refrigerant charge. The company charges a $149 after-hours service call, $115 per hour labor, and gives maintenance-plan members 10% off labor. In this example, the state applies 6% sales tax to parts and refrigerant but not to separately stated labor or the service call. Your state may differ.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>After-hours service call and diagnosis</td><td>1</td><td>$149.00</td><td>$149.00</td></tr>
<tr><td>Labor: replace capacitor and condenser fan motor, check charge (hours)</td><td>2.5</td><td>$115.00</td><td>$287.50</td></tr>
<tr><td>Dual run capacitor 45/5 µF</td><td>1</td><td>$42.00</td><td>$42.00</td></tr>
<tr><td>Condenser fan motor, 1/4 HP, 825 RPM</td><td>1</td><td>$238.00</td><td>$238.00</td></tr>
<tr><td>Refrigerant R-410A added (lb)</td><td>2</td><td>$85.00</td><td>$170.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$886.50</td></tr>
<tr><td colspan="3">Maintenance plan discount, 10% of labor ($287.50)</td><td>−$28.75</td></tr>
<tr><td colspan="3">Sales tax, 6% of parts and refrigerant ($450.00)</td><td>$27.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$884.75</strong></td></tr>
</tbody></table>
<p>The maths: labor is 2.5 × $115 = $287.50; refrigerant is 2 × $85 = $170.00. The subtotal is $149.00 + $287.50 + $42.00 + $238.00 + $170.00 = $886.50. The discount is 10% of $287.50 = $28.75. Taxable parts and refrigerant come to $42.00 + $238.00 + $170.00 = $450.00, and 6% of that is $27.00. Total: $886.50 − $28.75 + $27.00 = $884.75. To check your own tax figures, use our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. The invoice would also list the condenser's make, model and serial number and a note recommending a leak search if the charge drops again.</p>

<h2>Billing installations and replacements</h2>
<p>System replacements are larger, quoted jobs and are usually billed in stages: a deposit when the customer accepts the proposal, then the balance on completion. A <a href="/blog/deposit-invoice">deposit invoice</a> secures the equipment order, which can be the largest cost on the job. On the final invoice:</p>
<ol>
<li>List each piece of equipment with make, model and serial number so the customer can register warranties.</li>
<li>Show installation labor and materials, or a single installation line if you quoted a package price.</li>
<li>List permit fees separately, with the permit number.</li>
<li>Include disposal of the old equipment and refrigerant recovery.</li>
<li>Subtract the deposit and show the balance due.</li>
</ol>
<p>Large commercial installs may involve progress billing and retainage, as covered in our <a href="/blog/construction-invoice-guide">construction invoice guide</a>. Rebate and tax-credit programs for high-efficiency equipment change often; if a customer plans to claim one, include the model numbers and efficiency ratings they may need and point them to the program's own rules rather than promising eligibility.</p>

<h2>Maintenance agreements and recurring billing</h2>
<p>Maintenance plans smooth out the seasonal swings of HVAC work. Bill them either annually up front or monthly, and keep each invoice simple: the plan name, the period covered, the visits included and the member benefits. Monthly plans are a natural fit for recurring invoices. See our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a>. When a member calls for a repair, show their discount as a separate line, as in the example above, so they can see the plan's value.</p>

<h2>Billing property managers and commercial accounts</h2>
<p>Property managers, landlords and commercial clients often generate steady HVAC work, but they pay through an accounts payable process rather than at the door. To avoid delays:</p>
<ul>
<li><strong>Bill the right party.</strong> Invoice the management company or owner named on the work order, and show the service address and unit number separately.</li>
<li><strong>Quote the work order number.</strong> Many property managers require their work order or PO number on every invoice and will reject invoices without it.</li>
<li><strong>Respect approval limits.</strong> Commercial clients often set a not-to-exceed amount per call. Get written approval before going over it, and note the approval on the invoice.</li>
<li><strong>Attach proof of work.</strong> Photos of the failed part, readings taken and a signed service ticket help a remote manager approve the bill without a site visit.</li>
<li><strong>Agree terms in advance.</strong> Commercial accounts commonly pay on 30-day terms; build that into your cash flow planning and invoice the same day the job is completed.</li>
</ul>

<h2>Compliance notes for HVAC invoices</h2>
<p>These are general points, not legal advice; check the rules for your state and country.</p>
<ul>
<li><strong>Licensing.</strong> Many states and localities require HVAC contractors to be licensed and to show the license number on contracts or invoices.</li>
<li><strong>Refrigerant handling.</strong> In the US, technicians who service equipment containing refrigerants generally need EPA Section 608 certification, and there are recordkeeping requirements for some equipment. The AIM Act phasedown of HFCs is also shifting new systems toward lower-GWP refrigerants such as R-454B and R-32, and refrigerant prices can change quickly, so review your per-pound pricing regularly.</li>
<li><strong>Sales tax.</strong> Treatment of repair parts, labor and installations varies widely by state. Some treat installs as construction contracts where the contractor pays tax on materials instead of charging it. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> explains the general picture; confirm with your state revenue department.</li>
<li><strong>Permits.</strong> Equipment replacements often require a permit and inspection; record them on the invoice.</li>
</ul>
<p>The structure of an HVAC invoice is close to other trades; our <a href="/blog/plumbing-invoice-template">plumbing invoice template</a> and <a href="/blog/electrician-invoice-template">electrician invoice template</a> guides cover overlapping details. A clean, technical layout such as the <a href="/invoice-templates/blue">Blue template</a> works well for service businesses.</p>

<h2>Create your HVAC invoice now</h2>
<p>A thorough HVAC invoice template records the equipment, parts and refrigerant on every job and gets you paid at the door. Open the generator with <a href="/invoice-generator/usa">US presets</a>, pick the fresh <a href="/invoice-templates/emerald">Emerald template</a>, add your service details and download a PDF for your customer.</p>
`,
  },
];
