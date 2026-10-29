import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_P: PostDraft[] = [
  {
    slug: "dental-invoice-template",
    title: "Dental Invoice Template: Insurance Receipts and CDT Codes",
    description:
      "Use this dental invoice template to bill patients clearly, list CDT codes, show insurance payments and issue a dental receipt for insurance or HSA claims.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "medical-invoice-template",
      "superbill-template",
      "payment-receipt-template",
      "partial-payment-invoice",
    ],
    faqs: [
      {
        q: "What should a dental invoice include?",
        a: "Include the practice name, address, phone and provider details, the patient name and account number, a unique invoice number, the date of service, each procedure with its CDT code, tooth number or area where relevant, and fee, then any insurance payment or adjustment, the patient balance, the due date and how to pay. A clear dental invoice template answers the questions patients and insurers ask most often.",
      },
      {
        q: "What is a dental receipt for insurance?",
        a: "It is a paid statement the patient can send to a dental plan for reimbursement, usually when the office does not file the claim itself. It should show the treating dentist, the date of service, each CDT code with tooth number and surfaces, the fee charged and the amount paid. Many insurers prefer the standard ADA claim form, so ask the plan what it accepts before relying on a plain receipt.",
      },
      {
        q: "What are CDT codes?",
        a: "CDT codes are the Code on Dental Procedures and Nomenclature maintained by the American Dental Association. Each code starts with D and describes one procedure, such as D0120 for a periodic oral evaluation or D1110 for adult prophylaxis. Dental plans use them to decide what is covered. The code set is updated every year, and CDT 2026 took effect on 1 January 2026.",
      },
      {
        q: "Do dental invoices need CDT codes if the patient pays cash?",
        a: "They are not legally required on a self-pay bill in most places, but adding them is good practice. Patients often submit receipts to an insurer later, or claim the cost against an HSA or FSA, and codes make that much easier. They also keep your invoices consistent with your clinical records, which helps if a patient questions a charge months later.",
      },
      {
        q: "Can patients use a dental invoice for HSA or FSA reimbursement?",
        a: "Often, yes. IRS Publication 502 treats preventive care and treatment for dental disease, such as cleanings, fillings, braces and extractions, as medical expenses, but not teeth whitening. Plan administrators usually want an itemized receipt showing the date, the provider, the service and the amount paid, so label cosmetic work separately so patients do not claim it by mistake.",
      },
      {
        q: "How do I show an insurance payment on a dental invoice?",
        a: "List the full fee for each procedure first, then show the insurance payment and any contractual write-off as separate lines or in the amount paid field, leaving the patient balance at the bottom. If the claim is still pending, label the balance as an estimate. Once the explanation of benefits arrives, send an updated statement with the final patient share.",
      },
      {
        q: "Should dental offices charge sales tax or VAT?",
        a: "Dental treatment is generally not subject to US sales tax, and in the UK dental care by registered professionals is normally VAT exempt. Retail products such as electric toothbrushes or whitening kits can be taxable in some places. Check your state revenue department or HMRC guidance, and if you sell taxable items, keep them on separate lines so the tax applies only to them.",
      },
      {
        q: "What payment terms do dental practices use?",
        a: "Most practices collect the estimated patient share at the time of service and bill any remaining balance once insurance pays, often due within 15 to 30 days. Larger treatment plans may use deposits or instalments. Whatever you choose, put the due date on every invoice, explain finance options before treatment starts and follow the late fee rules in your state.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A dental invoice template lists the practice and patient details, a unique invoice number, the date of service, each procedure with its CDT code, tooth number and fee, any insurance payment or adjustment, and the patient balance with a due date. Add the amount the patient paid so the same document can serve as a dental receipt for insurance or HSA claims.</p>

<p>Dental billing is more complicated than most service work because two parties usually pay: the patient and a dental plan. A good dental invoice template keeps both clear. It shows the full fee for every procedure, what insurance covered, what was written off and what the patient still owes. You can build one in a few minutes with our <a href="/invoice-generator">free invoice generator</a>, then download a PDF to email or hand over at the front desk.</p>

<p>This guide covers the fields a dental invoice needs, how CDT codes work, how to show insurance payments and estimates, how to write a receipt patients can submit for reimbursement, a worked example with real arithmetic, and the mistakes that cause disputes. It is written for small and independent practices, mobile hygienists and specialists who bill some patients directly.</p>

<h2>What a dental invoice template should include</h2>
<p>A dental invoice should let a patient understand the bill without calling the office, and let an insurer or plan administrator match it to a claim. Include:</p>
<ul>
<li><strong>Practice details:</strong> practice name, address, phone, email, logo and the treating dentist's name. Add your NPI or tax ID where your patients' plans expect it.</li>
<li><strong>Patient details:</strong> name, account or chart number and, if different, the responsible party paying the bill.</li>
<li><strong>Invoice number and date:</strong> a unique sequential number such as DENT-2026-1184. The <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format that will not clash with your other records.</li>
<li><strong>Date of service:</strong> the day each procedure was done, which can differ from the invoice date for multi-visit treatment.</li>
<li><strong>Procedures:</strong> each line with the CDT code, a plain description, tooth number and surfaces where relevant, and the fee.</li>
<li><strong>Insurance information:</strong> plan name, estimated or actual insurance payment, and any contractual adjustment.</li>
<li><strong>Payments and balance:</strong> what the patient paid today and the remaining balance.</li>
<li><strong>Payment terms:</strong> due date, accepted payment methods and finance or instalment options.</li>
</ul>
<p>Keep clinical notes, X-ray findings and medical history off the invoice. They belong in the patient record, and leaving them out also limits what is exposed if a bill is sent to the wrong email address.</p>

<h2>CDT codes on a dental invoice</h2>
<p>CDT stands for the Code on Dental Procedures and Nomenclature, the code set maintained by the American Dental Association. Every code begins with D, and dental plans use these codes to decide coverage and payment. The set changes every year. According to <a href="https://adanews.ada.org/ada-news/2025/june/60-changes-coming-to-cdt-code-in-2026-1/" target="_blank" rel="noopener noreferrer">ADA News coverage of the CDT 2026 changes</a>, the 2026 update brought 60 changes, including 31 new codes, 14 revisions and 6 deletions, all effective 1 January 2026. Dates of service decide which version applies, so use current codes for 2026 visits.</p>
<p>The table shows common codes many general practices put on invoices. Fees are deliberately left out because they vary widely by region, practice and plan contract.</p>
<table><thead><tr><th>CDT code</th><th>Description (short form)</th><th>Typical invoice detail</th></tr></thead><tbody>
<tr><td>D0150</td><td>Comprehensive oral evaluation, new or established patient</td><td>New patient exam</td></tr>
<tr><td>D0120</td><td>Periodic oral evaluation, established patient</td><td>Recall exam</td></tr>
<tr><td>D0274</td><td>Bitewings, four radiographic images</td><td>Routine X-rays</td></tr>
<tr><td>D1110</td><td>Prophylaxis, adult</td><td>Cleaning</td></tr>
<tr><td>D1351</td><td>Sealant, per tooth</td><td>Tooth number</td></tr>
<tr><td>D2392</td><td>Resin-based composite, two surfaces, posterior</td><td>Tooth number and surfaces</td></tr>
<tr><td>D2740</td><td>Crown, porcelain or ceramic</td><td>Tooth number</td></tr>
<tr><td>D7140</td><td>Extraction, erupted tooth or exposed root</td><td>Tooth number</td></tr>
</tbody></table>
<p>On a patient-facing dental invoice, pair each code with a plain description. Patients do not know what D2392 means, but they understand "Filling, two surfaces, back tooth (tooth 30)". Showing both makes the bill readable and keeps it useful for insurance.</p>

<h2>How to show dental insurance on the invoice</h2>
<p>Most practices that bill insurance work from an estimate at the visit and a final figure once the plan pays. Your invoice should make that difference obvious.</p>
<h3>Before insurance pays</h3>
<p>Show the full fee for each procedure, then the estimated insurance payment and the estimated patient share. Label the patient amount as an estimate. Many offices collect that estimated share at the visit, which you can record in the amount paid field so the balance updates.</p>
<h3>After the explanation of benefits arrives</h3>
<p>When the plan pays, send an updated statement: full fees, actual insurance payment, contractual write-off if you are in network, payments already made and the final balance. If the patient overpaid, show a credit and either refund it or apply it to their next visit. Our <a href="/blog/credit-note-guide">credit note guide</a> explains how to correct a bill without deleting the original.</p>
<h3>Out-of-network patients</h3>
<p>If you do not file claims, give patients a paid, itemized receipt they can send to their plan. Some dental plans insist on the standard ADA claim form rather than a receipt, so tell patients to check with their insurer first. For medical out-of-network billing the equivalent document is a superbill, covered in detail in our <a href="/blog/superbill-template">superbill template guide</a>.</p>

<h2>Dental receipt for insurance and HSA claims</h2>
<p>A dental receipt for insurance is simply a dental invoice marked as paid, with enough detail for a plan administrator to process it. It needs the treating dentist, practice address, patient name, date of service, CDT codes with tooth numbers, the fee for each procedure, the amount paid, the payment date and the payment method. Our <a href="/blog/payment-receipt-template">payment receipt template</a> and <a href="/blog/invoice-vs-receipt">invoice vs receipt guide</a> explain how the two documents differ.</p>
<p>Many patients reimburse dental costs from a health savings account or flexible spending account. <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer">IRS Publication 502</a> treats preventive care such as cleanings and sealants, and treatment for dental disease such as fillings, braces and extractions, as medical expenses, but it excludes teeth whitening. Put cosmetic work on its own line with a clear description so patients do not claim it by mistake. Plan rules differ, so the patient should confirm what their administrator accepts.</p>

<h2>Sample dental invoice with real numbers</h2>
<p>Here is a self-pay example for a recall visit with a filling. The fees are illustrative, not a benchmark: use your own fee schedule.</p>
<table><thead><tr><th>Code</th><th>Description</th><th>Tooth</th><th>Fee</th></tr></thead><tbody>
<tr><td>D0120</td><td>Periodic oral evaluation</td><td>-</td><td>$65.00</td></tr>
<tr><td>D0274</td><td>Bitewings, four images</td><td>-</td><td>$75.00</td></tr>
<tr><td>D1110</td><td>Adult cleaning</td><td>-</td><td>$110.00</td></tr>
<tr><td>D2392</td><td>Composite filling, two surfaces, posterior</td><td>30 (MO)</td><td>$240.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$490.00</td></tr>
<tr><td colspan="3">Self-pay discount (10%)</td><td>-$49.00</td></tr>
<tr><td colspan="3">Total</td><td>$441.00</td></tr>
<tr><td colspan="3">Paid at visit (card)</td><td>$200.00</td></tr>
<tr><td colspan="3">Balance due within 30 days</td><td>$241.00</td></tr>
</tbody></table>
<p>The check: $65 + $75 + $110 + $240 = $490. Ten percent of $490 is $49, so the total is $441. After the $200 card payment, $241 remains. No tax applies because the visit is dental treatment. In the generator, enter the four lines, apply a 10% discount, leave tax at zero and type 200 in the amount paid field. The PDF shows the balance due automatically. Once the patient pays the rest, issue a final copy marked paid as their dental receipt for insurance.</p>

<h2>How to create a dental invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> or the <a href="/invoice-generator/usa">US invoice generator</a> and add your practice name, address, logo and the treating dentist.</li>
<li>Enter the patient name, account number and the responsible party if someone else pays.</li>
<li>Give the invoice a unique number and set the invoice date and due date.</li>
<li>Add one line per procedure: CDT code, plain description, tooth and surfaces, and fee.</li>
<li>Apply any self-pay or membership discount as a percentage or fixed amount.</li>
<li>Leave tax at zero for treatment, unless you are also selling taxable retail items.</li>
<li>Record what the patient paid today in the amount paid field so the balance is correct.</li>
<li>Add notes: insurance estimate wording, finance options and your accepted payment methods.</li>
<li>Download the PDF, send it securely and keep a copy with the patient's financial record.</li>
</ol>
<p>For a clean, clinical look, the minimal or corporate invoice templates both work well for healthcare practices.</p>

<h2>Treatment plans, deposits and payment options</h2>
<p>Crowns, implants, orthodontics and full-mouth work often run over several visits and months. Give the patient a written estimate before you start, listing each phase with codes and fees. Then bill in stages: a deposit when treatment is accepted, then invoices as each phase is completed. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> and <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> show how to carry the paid amount forward so each bill shows the true balance.</p>
<p>In-house membership plans for uninsured patients are another common model: a fixed monthly or annual fee covering preventive visits plus a discount on other treatment. Invoice the membership on a regular schedule and show the member discount as its own line on treatment invoices so patients see the value.</p>

<h2>Common dental invoice mistakes</h2>
<ul>
<li><strong>Codes without descriptions:</strong> patients call the office to ask what D-codes mean. Always include plain wording.</li>
<li><strong>Outdated codes:</strong> billing a code deleted in CDT 2026 for a 2026 date of service invites a rejected claim.</li>
<li><strong>Missing tooth numbers:</strong> restorations and extractions without tooth and surface details are hard for insurers to process.</li>
<li><strong>Estimates shown as final:</strong> if insurance has not paid yet, label the patient share as an estimate.</li>
<li><strong>Mixing cosmetic and medical lines:</strong> whitening and other cosmetic work should be listed separately for HSA and FSA purposes.</li>
<li><strong>Editing a sent invoice:</strong> issue a corrected invoice or credit note instead, or follow our guide on <a href="/blog/how-to-void-an-invoice">how to void an invoice</a>.</li>
</ul>
<p>Medical practices outside dentistry have similar issues. If you also run a chiropractic or physical therapy service, see our <a href="/blog/chiropractic-invoice-template">chiropractic invoice guide</a> and <a href="/blog/physical-therapy-invoice-template">physical therapy invoice guide</a>, and our broader <a href="/blog/medical-invoice-template">medical invoice template</a> for private practice billing.</p>

<h2>Dental billing models compared</h2>
<p>How a practice is paid shapes what its dental invoice template needs to show. Most practices mix several of these models, so it helps to set up a consistent layout for each one.</p>
<table><thead><tr><th>Model</th><th>Who pays</th><th>What the invoice must show</th><th>When to send it</th></tr></thead><tbody>
<tr><td>In-network insurance</td><td>Plan pays its share, patient pays the rest</td><td>Full fee, estimated or actual plan payment, contractual write-off, patient balance</td><td>Estimate at the visit, final statement after the plan pays</td></tr>
<tr><td>Out-of-network insurance</td><td>Patient pays, then claims from the plan</td><td>Full fee, CDT codes, tooth numbers, amount paid, treating dentist</td><td>Paid receipt at the visit</td></tr>
<tr><td>Self-pay</td><td>Patient only</td><td>Fees, any self-pay discount, payments and balance</td><td>At the visit, with any balance invoiced</td></tr>
<tr><td>Membership plan</td><td>Patient pays a regular fee</td><td>Plan period and fee, member discount on treatment lines</td><td>Monthly or annually, plus treatment invoices</td></tr>
<tr><td>Third party</td><td>Employer, school or charity programme</td><td>Programme reference, patient list or count, procedures and fees</td><td>As agreed, often monthly</td></tr>
</tbody></table>
<p>Mobile hygienists, sedation providers and visiting specialists who bill another practice rather than the patient should treat that practice as the client. Invoice it for the sessions or procedures you provided, quote its reference and leave patient identifiers out unless your agreement requires them.</p>

<h3>Collecting dental balances without upsetting patients</h3>
<p>Unpaid balances are a common problem for dental offices, usually because patients were surprised by what insurance did not cover. The best fix happens before treatment: give a written estimate showing the full fee, the expected plan payment and the patient share, and explain that the estimate can change once the plan processes the claim.</p>
<p>After treatment, send the final statement promptly once the explanation of benefits arrives. A balance that appears three months later is far harder to collect than one sent within a week. State the due date clearly, list every way to pay, and send a polite reminder a few days after the due date. If you charge late fees or interest, make sure the patient agreed to them in writing and that they comply with your state's rules; our guide to <a href="/blog/late-payment-fees">late payment fees</a> covers the basics. For larger balances, a short instalment plan with a written schedule usually works better than repeated reminders.</p>

<h3>Privacy and secure delivery</h3>
<p>A dental invoice contains health information: the patient name together with the procedures they had. In the US, covered providers must protect that information under HIPAA, and other countries have their own health privacy rules. Send invoices through a patient portal or secure email where you can, confirm the address before sending, and avoid putting procedure detail in the email subject line. Paper copies handed over at the desk should not be left where other patients can read them.</p>
<p>This article is general information, not legal, tax or billing compliance advice. Check payer contracts, state rules and current CDT descriptors before relying on any code.</p>

<h2>Create your dental invoice</h2>
<p>A clear dental invoice template gets patients paying faster and makes insurance reimbursement easier for everyone. Use current CDT codes with plain descriptions, separate insurance from the patient share, record payments as they arrive and issue a paid copy as the patient's receipt. Build your next one now in the free <a href="/invoice-generator">online invoice generator</a>: add your practice details, list the procedures, apply any discount and download a professional PDF in minutes.</p>
`,
  },
  {
    slug: "chiropractic-invoice-template",
    title: "Chiropractic Invoice Template: Superbills and Cash Pay Rates",
    description:
      "Use this chiropractic invoice template to bill adjustments and care plans, list CPT codes, handle Medicare rules and give patients a chiropractic superbill.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "superbill-template",
      "medical-invoice-template",
      "massage-therapy-invoice-template",
      "partial-payment-invoice",
    ],
    faqs: [
      {
        q: "What should a chiropractic invoice include?",
        a: "Include the clinic name, address, phone and treating chiropractor, the patient name and account number, a unique invoice number, each date of service, every procedure with its CPT code and number of units, the fee per line, any discount, payments received and the balance due with a due date. For patients who will claim from insurance, add diagnosis codes, NPI and tax ID so the invoice can double as a superbill.",
      },
      {
        q: "What is a chiropractic superbill?",
        a: "A chiropractic superbill is an itemized statement a cash-pay patient sends to their insurer to request out-of-network reimbursement. It lists the provider's NPI and tax ID, the patient's details, dates of service, CPT procedure codes such as 98940 or 98941, ICD-10 diagnosis codes, fees and the amount paid. The patient files it; the clinic does not bill the insurer directly.",
      },
      {
        q: "What CPT codes do chiropractors use?",
        a: "The core chiropractic manipulative treatment codes are 98940 for one to two spinal regions, 98941 for three to four regions and 98942 for five regions, with 98943 for extraspinal areas. Chiropractors also commonly bill evaluation and management codes for exams and therapy codes such as 97140 manual therapy and 97110 therapeutic exercise, subject to each payer's rules.",
      },
      {
        q: "Does Medicare cover chiropractic care?",
        a: "Medicare Part B covers only manual manipulation of the spine to correct a subluxation when it is active or corrective treatment. Claims for 98940 to 98942 need the AT modifier, and maintenance care is not considered medically necessary. Exams, X-rays, therapies and supplies ordered or performed by a chiropractor are excluded, so patients pay for those themselves.",
      },
      {
        q: "How much do chiropractors charge for cash pay visits?",
        a: "Cash pay rates vary widely by city, clinic and what the visit includes, such as an adjustment alone or an adjustment with soft tissue work or therapy. Many clinics publish a self-pay fee schedule and offer care plan packages at a lower per-visit price. Base your own rates on local competitors, your costs and the time each visit takes, and apply them consistently.",
      },
      {
        q: "Can chiropractors offer cash discounts?",
        a: "Many do, but discounts need care. Offering different prices to insured and uninsured patients, or routinely waiving copays, can conflict with insurance contracts and anti-fraud rules, especially for government payers. Keep one published fee schedule, document the reason for any discount such as prompt payment or financial hardship, and get advice from a healthcare compliance professional before setting a policy.",
      },
      {
        q: "How do I invoice a chiropractic care plan?",
        a: "List the package as a line item, such as 12 adjustment visits, with the agreed price, then record any upfront payment in the amount paid field. If the plan is paid in instalments, issue an invoice for each instalment that shows the total plan price, payments received to date and the remaining balance. Explain your refund policy for unused visits in writing before the patient pays.",
      },
      {
        q: "Is chiropractic care HSA or FSA eligible?",
        a: "IRS Publication 502 says fees paid to a chiropractor for medical care count as medical expenses, so they are often eligible for HSA and FSA reimbursement. Plan administrators usually want an itemized receipt with the date, provider, service and amount paid. Wellness extras such as supplements or general massage may not qualify, so list them on separate lines.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A chiropractic invoice lists the clinic and patient details, a unique invoice number, each date of service, every procedure with its CPT code and units (such as 98941 for a three to four region adjustment), the fee, any discount, payments received and the balance due. For cash-pay patients, add ICD-10 diagnosis codes, NPI and tax ID so the same document works as a chiropractic superbill.</p>

<p>Chiropractic clinics bill in more ways than most healthcare practices: single cash visits, care plan packages, in-network insurance, Medicare with its own strict rules, and personal injury cases. A consistent chiropractic invoice template keeps all of them clear. You can create one with our <a href="/invoice-generator/usa">US invoice generator</a> and download a PDF for the patient in a few minutes.</p>

<p>This guide covers the fields a chiropractic invoice needs, the CPT codes you will use most, how Medicare treats chiropractic care in 2026, how to set and present cash pay rates and care plans, a worked example, and how a chiropractic superbill fits in. It is written for US practices; if you also run physical therapy services, see our sibling <a href="/blog/physical-therapy-invoice-template">physical therapy invoice guide</a>.</p>

<h2>What a chiropractic invoice should include</h2>
<p>Every chiropractic invoice should be readable by the patient and usable by an insurer. Include:</p>
<ul>
<li><strong>Clinic details:</strong> clinic name, address, phone, email, logo, treating chiropractor, NPI and tax ID (EIN).</li>
<li><strong>Patient details:</strong> name, date of birth or account number, and the responsible party if different.</li>
<li><strong>Invoice number and date:</strong> sequential, such as CHIRO-2026-0731. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a format.</li>
<li><strong>Dates of service:</strong> one line per procedure per date, not a single lump sum for the month.</li>
<li><strong>CPT codes and units:</strong> with a plain description of each service.</li>
<li><strong>Diagnosis codes:</strong> ICD-10 codes when the invoice may be used for reimbursement.</li>
<li><strong>Fees, discounts and payments:</strong> fee per line, any package or prompt-pay discount, amounts paid and the balance.</li>
<li><strong>Terms:</strong> due date, accepted payment methods and your cancellation or missed appointment policy.</li>
</ul>

<h2>Chiropractic CPT codes on invoices</h2>
<p>Chiropractic manipulative treatment (CMT) codes are based on how many spinal regions you treat, not how long the visit takes. Other services have their own codes. The table shows codes commonly seen on chiropractic invoices; always check the current CPT descriptors and each payer's policy.</p>
<table><thead><tr><th>CPT code</th><th>Service</th><th>Billing note</th></tr></thead><tbody>
<tr><td>98940</td><td>CMT, spinal, one to two regions</td><td>Per visit, not timed</td></tr>
<tr><td>98941</td><td>CMT, spinal, three to four regions</td><td>Per visit, not timed</td></tr>
<tr><td>98942</td><td>CMT, spinal, five regions</td><td>Per visit, not timed</td></tr>
<tr><td>98943</td><td>CMT, extraspinal, one or more regions</td><td>Not covered by Medicare</td></tr>
<tr><td>99202 to 99205</td><td>New patient evaluation and management</td><td>Level depends on complexity or time</td></tr>
<tr><td>99212 to 99214</td><td>Established patient evaluation and management</td><td>Separate exam on the same day may need a modifier</td></tr>
<tr><td>97140</td><td>Manual therapy</td><td>Timed, 15-minute units</td></tr>
<tr><td>97110</td><td>Therapeutic exercise</td><td>Timed, 15-minute units</td></tr>
</tbody></table>
<p>On the patient copy, add a plain description next to each code, such as "Spinal adjustment, 3 to 4 regions (98941)". The code helps the insurer; the description helps the patient.</p>

<h2>Medicare rules for chiropractic billing in 2026</h2>
<p>Medicare is the area where chiropractic invoices most often go wrong. According to the <a href="https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleId=56273" target="_blank" rel="noopener noreferrer">CMS billing and coding article for chiropractic services</a>:</p>
<ul>
<li>Medicare covers only manual manipulation of the spine to correct a subluxation (98940, 98941 and 98942). Extraspinal manipulation (98943) is not covered.</li>
<li>Active or corrective treatment must carry the AT modifier. Claims without it are treated as not medically necessary.</li>
<li>Once the patient reaches maximum therapeutic benefit, ongoing maintenance care is not considered medically necessary.</li>
<li>If you expect Medicare to deny a service as not medically necessary, the patient must sign an Advance Beneficiary Notice (ABN) before treatment and the claim carries the GA modifier.</li>
<li>Other services ordered or performed by a chiropractor, including exams, X-rays, physiotherapy, traction, supplies and supplements, are excluded.</li>
</ul>
<p>In practice this means Medicare patients often receive two kinds of bill: the patient share of covered manipulation after Medicare pays, and a direct invoice for excluded services or maintenance care they agreed in writing to pay for. Keep those clearly separated on your invoices so patients understand why some lines are not going to Medicare.</p>

<h2>Chiropractic superbill for out-of-network patients</h2>
<p>Many chiropractors run cash-based practices and give patients a superbill to claim out-of-network benefits. A chiropractic superbill adds the details an insurer needs: provider NPI and tax ID, the patient's date of birth, ICD-10 diagnosis codes, CPT codes with units, place of service, fees and the amount paid. Our full <a href="/blog/superbill-template">superbill template guide</a> walks through every field and the reimbursement arithmetic, so we will not repeat it here.</p>
<p>The practical rule: a superbill is issued after payment, for the patient to file. Your invoice is the request for payment. Many clinics send an invoice, then send a superbill once it is paid, often monthly for patients on care plans. Our <a href="/blog/invoice-vs-receipt">invoice vs receipt guide</a> explains why the two documents are different.</p>

<h2>Cash pay rates and care plan pricing</h2>
<p>Cash pay chiropractic rates vary widely by city, clinic and what is included in a visit, so there is no single correct price. Rather than quote national averages, here are the pricing models clinics actually use and how each one looks on an invoice.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Per visit</td><td>One price per adjustment visit, with add-ons priced separately</td><td>Spinal adjustment, 3 to 4 regions (98941), 14 Oct</td></tr>
<tr><td>New patient package</td><td>Exam, any imaging and first adjustment at one price</td><td>New patient exam and first adjustment</td></tr>
<tr><td>Care plan</td><td>A set number of visits paid upfront or in instalments at a lower per-visit price</td><td>Care plan, 12 visits, instalment 2 of 3</td></tr>
<tr><td>Wellness membership</td><td>Monthly fee covering a fixed number of visits</td><td>Wellness membership, November, 2 visits</td></tr>
</tbody></table>
<p>Set your cash rates by looking at what local clinics publish, the time each visit takes and your overhead. Be careful with discounts: offering lower prices to uninsured patients than you bill insurers, or routinely waiving copays, can create problems under payer contracts and anti-fraud rules. Keep one published fee schedule and document any discount, such as a prompt-pay or hardship discount, consistently. A healthcare compliance adviser can review your policy.</p>
<p>Some states regulate prepaid care plans, for example around refunds for unused visits. Put your refund policy in writing before the patient pays, and show the total plan price, payments to date and remaining balance on every instalment invoice. Our <a href="/blog/discount-on-invoice">guide to showing a discount on an invoice</a> covers the formatting.</p>

<h2>Sample chiropractic invoice with real numbers</h2>
<p>Here is a monthly invoice for a self-pay patient on a short treatment course. The fees are illustrative; use your own fee schedule.</p>
<table><thead><tr><th>Date</th><th>Code</th><th>Service</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oct 2, 9, 16, 23</td><td>98941</td><td>Spinal adjustment, 3 to 4 regions</td><td>4</td><td>$65.00</td><td>$260.00</td></tr>
<tr><td>Oct 2, 16</td><td>97140</td><td>Manual therapy, 15 min</td><td>2</td><td>$40.00</td><td>$80.00</td></tr>
<tr><td>Oct 9, 23</td><td>97110</td><td>Therapeutic exercise, 15 min</td><td>2</td><td>$35.00</td><td>$70.00</td></tr>
<tr><td colspan="5">Subtotal</td><td>$410.00</td></tr>
<tr><td colspan="5">Prompt-pay discount (10%)</td><td>-$41.00</td></tr>
<tr><td colspan="5">Total</td><td>$369.00</td></tr>
<tr><td colspan="5">Paid at first visit</td><td>$150.00</td></tr>
<tr><td colspan="5">Balance due</td><td>$219.00</td></tr>
</tbody></table>
<p>The check: $260 + $80 + $70 = $410. Ten percent of $410 is $41, so the total is $369. After the $150 already paid, $219 remains. Healthcare services are generally not subject to sales tax, so tax stays at zero. In our generator you would enter the three lines, apply a 10% discount and type 150 in the amount paid field; the balance due calculates itself. Once paid, issue a superbill with diagnosis codes for the patient to submit.</p>

<h2>How to create a chiropractic invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">free invoice generator</a> and add your clinic name, logo, address, NPI and tax ID.</li>
<li>Enter the patient's name and account number, and the payer if it is a personal injury or third-party case.</li>
<li>Add a unique invoice number, invoice date and due date.</li>
<li>Add one line per service: date, CPT code, plain description, units and rate.</li>
<li>Apply any documented package or prompt-pay discount.</li>
<li>Leave tax at zero for treatment; add tax only if you sell taxable retail products and your state requires it.</li>
<li>Record deposits or payments in the amount paid field to show the true balance.</li>
<li>Add notes covering your cancellation policy and how to pay, then download the PDF.</li>
</ol>
<p>The <a href="/invoice-templates/modern">modern invoice template</a> and <a href="/invoice-templates/emerald">emerald invoice template</a> suit wellness-focused clinics, while the <a href="/invoice-templates/classic">classic template</a> works for a traditional medical look.</p>

<h2>Special chiropractic billing situations</h2>
<p>Most visits follow the simple pattern above, but a few situations cause most of the billing questions chiropractic offices receive. Handle each one with a written policy, a clear invoice line and the same treatment for every patient.</p>
<h3>Missed appointments and care plan changes</h3>
<p>Missed visits matter more in chiropractic than in many services because care plans depend on a steady schedule. Set a written policy before the first visit: how much notice the patient must give, whether a missed visit is charged or deducted from a package, and how many missed visits end a care plan discount. If you charge a fee, show it on the invoice as its own line, for example "Missed appointment, 18 Oct, per signed policy", so the patient can see exactly why it is there.</p>
<p>Medicare patients need extra care here. Check current CMS guidance before charging Medicare beneficiaries a missed appointment fee, and apply the same policy to every patient rather than only to Medicare patients. For patients who stop a prepaid care plan early, calculate the refund using the method in your written agreement, for example the visits used at the full per-visit rate subtracted from the amount paid, and show that arithmetic on a final statement.</p>
<p>Patients who move from active care to maintenance or wellness visits should also see the change on their invoices. Use a different line description, such as "Wellness adjustment", and remember that Medicare does not cover maintenance care, so an ABN signed in advance is needed if you expect Medicare to deny it.</p>

<h3>Personal injury and third-party billing</h3>
<p>Personal injury billing is where clear invoices matter most, because they may end up as evidence in a settlement. Auto accident and workplace injury cases often involve an insurer, attorney or employer paying instead of the patient. Bill the responsible party named in your agreement, include the claim or case number on every invoice, and keep the same line-by-line CPT detail. Lien cases can take months to settle, so track them separately in your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> rather than letting them blur into ordinary overdue bills. State rules for these cases differ, so follow local guidance. When the case settles, issue a final statement showing every charge, every payment received and any reduction agreed with the attorney, so your records match the settlement figures.</p>

<h3>HSA, FSA and payment terms</h3>
<p><a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer">IRS Publication 502</a> lists fees paid to a chiropractor for medical care as medical expenses, so chiropractic visits are often reimbursable from an HSA or FSA. Patients need an itemized, paid receipt with the provider, date, service and amount. Put supplements, pillows or other retail items on separate lines, since they may not qualify.</p>
<p>Most clinics collect payment at the time of service, which keeps balances small and avoids chasing patients between visits. Card on file, with written consent, works well for care plans paid in instalments: charge on the agreed date and send the invoice as the record. For balances, net 15 or net 30 terms are common, and many keep a card on file for care plans. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> covers the wording, and the <a href="/blog/medical-invoice-template">medical invoice template</a> covers wider private practice billing. Dental colleagues can use our <a href="/blog/dental-invoice-template">dental invoice template</a>.</p>
<h2>Common chiropractic invoice mistakes</h2>
<ul>
<li><strong>Lumping a month into one line:</strong> insurers and HSA administrators need each date of service and code.</li>
<li><strong>Billing 98943 to Medicare:</strong> extraspinal manipulation is not covered, so bill the patient directly with a signed notice where required.</li>
<li><strong>Missing the AT modifier:</strong> Medicare treats manipulation without it as not medically necessary.</li>
<li><strong>Two price lists:</strong> charging insured and uninsured patients different prices for the same service without a documented reason creates contract and compliance risk.</li>
<li><strong>Superbills without diagnosis codes:</strong> insurers send them back unprocessed.</li>
<li><strong>Undocumented care plan refunds:</strong> put the refund formula in writing before the patient pays.</li>
</ul>
<p>This article is general information, not legal, tax or billing compliance advice. Confirm codes and payer rules with current CMS guidance and your payer contracts.</p>

<h2>Create your chiropractic invoice</h2>
<p>A clean chiropractic invoice lists every service by date with CPT codes and units, keeps Medicare-covered and excluded services apart, shows discounts and payments clearly, and gives cash-pay patients what they need for a chiropractic superbill. Build yours in the free <a href="/invoice-generator">invoice generator</a>, download the PDF and keep a copy with each patient's financial record.</p>
`,
  },
  {
    slug: "physical-therapy-invoice-template",
    title: "Physical Therapy Invoice: PT Superbill and the 8-Minute Rule",
    description:
      "Build a physical therapy invoice that lists CPT codes and units correctly, applies the 8-minute rule, tracks 2026 Medicare limits and works as a PT superbill.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "superbill-template",
      "medical-invoice-template",
      "home-health-care-invoice-template",
      "massage-therapy-invoice-template",
    ],
    faqs: [
      {
        q: "What should a physical therapy invoice include?",
        a: "Include the clinic or therapist name, address, NPI and tax ID, the patient's name and account number, a unique invoice number, each date of service, every CPT code with units and minutes for timed codes, the fee per line, discounts, payments received and the balance due with terms. For out-of-network patients, add ICD-10 diagnosis codes so the physical therapy invoice can be used as a PT superbill.",
      },
      {
        q: "What is the 8-minute rule in physical therapy?",
        a: "The 8-minute rule is Medicare's method for converting treatment minutes into billable 15-minute units for timed CPT codes. You add up all direct, one-on-one timed minutes for the day and divide by 15. A remainder of 8 minutes or more earns one more unit. So 8 to 22 minutes is one unit, 23 to 37 is two units and 38 to 52 is three units.",
      },
      {
        q: "Do private insurers use the 8-minute rule?",
        a: "Not always. Medicare and many plans that follow Medicare pool timed minutes across codes. Some commercial payers instead apply the AMA approach, counting each code separately, which can produce a different number of units for the same visit. Check each payer's policy and bill the way your contract requires, and keep minutes per code in your notes either way.",
      },
      {
        q: "What is a PT superbill?",
        a: "A PT superbill is an itemized, paid statement a patient sends to their health insurer to request out-of-network reimbursement for physical therapy. It shows the therapist's NPI and tax ID, the patient's details, dates of service, CPT codes with units, ICD-10 diagnosis codes, fees and amounts paid. The patient files it with the insurer; the clinic does not submit it.",
      },
      {
        q: "What is the KX modifier threshold for 2026?",
        a: "CMS set the 2026 KX modifier threshold at $2,480 for physical therapy and speech-language pathology combined, with a separate $2,480 threshold for occupational therapy. Above that amount, claims need the KX modifier to confirm the care is medically necessary, or they are denied. A targeted medical review threshold of $3,000 also applies. Track each Medicare patient's running total on your invoices.",
      },
      {
        q: "Can patients see a physical therapist without a referral?",
        a: "In most cases, yes. The American Physical Therapy Association reports that all 50 states, Washington DC and the US Virgin Islands allow some form of direct access to physical therapist evaluation and treatment, though some states still attach conditions. Insurers can have their own referral rules, and Medicare requires a certified plan of care, so check before treating.",
      },
      {
        q: "How much does a physical therapy session cost without insurance?",
        a: "Self-pay prices vary by region, setting and session length, and initial evaluations usually cost more than follow-up visits. Many cash-based clinics publish a flat price per evaluation and per follow-up session, sometimes with package discounts. Set your rates from local competitors, the time each visit takes and your costs, and give patients a written estimate before treatment starts.",
      },
      {
        q: "Is physical therapy HSA eligible?",
        a: "Generally, yes. IRS Publication 502 lets you include amounts paid for therapy received as medical treatment, which covers most physical therapy. Plan administrators normally ask for an itemized receipt with the provider, date, service and amount paid. General fitness programs and gym memberships do not qualify, so keep wellness classes on separate invoice lines.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A physical therapy invoice lists the clinic and patient details, a unique invoice number, each date of service, every CPT code with its units and treatment minutes, the fee, any discount, payments received and the balance due. Count timed codes with the 8-minute rule (8 to 22 minutes is one unit), and add ICD-10 codes, NPI and tax ID so the invoice works as a PT superbill.</p>

<p>Physical therapy billing turns minutes into money. The difference between a two-unit and three-unit visit is a few minutes on the clock, and payers check that your units match your notes. A clear physical therapy invoice template shows the codes, units and minutes so patients, insurers and auditors can follow it. You can build one with our <a href="/invoice-generator">free invoice generator</a> and download a PDF in minutes.</p>

<p>This guide covers what a PT invoice must include, the common CPT codes, how the 8-minute rule works with a worked calculation, the 2026 Medicare thresholds, how to give cash-pay patients a PT superbill, and a sample invoice with real arithmetic. It applies to outpatient clinics, mobile and home-visit therapists, and cash-based practices.</p>

<h2>What a physical therapy invoice should include</h2>
<ul>
<li><strong>Provider details:</strong> clinic or therapist name, address, phone, logo, NPI and tax ID.</li>
<li><strong>Patient details:</strong> name, date of birth or account number, and the responsible party if someone else pays.</li>
<li><strong>Invoice number and date:</strong> sequential and unique, for example PT-2026-0518. Use our <a href="/tools/invoice-number-generator">invoice number generator</a> to choose a format.</li>
<li><strong>Dates of service:</strong> each visit on its own lines.</li>
<li><strong>CPT codes, units and minutes:</strong> list total timed minutes per visit so the units can be checked.</li>
<li><strong>Diagnosis codes:</strong> ICD-10 codes when the patient will seek reimbursement.</li>
<li><strong>Fees, discounts and payments:</strong> fee per line, package discounts, amounts paid and balance.</li>
<li><strong>Terms:</strong> due date, payment methods, and late cancellation or no-show policy.</li>
</ul>

<h2>Common physical therapy CPT codes</h2>
<p>PT codes fall into two groups. Service-based (untimed) codes are billed once per visit regardless of length. Timed codes are billed in 15-minute units. Mixing up the two is one of the most common billing errors.</p>
<table><thead><tr><th>CPT code</th><th>Service</th><th>Type</th></tr></thead><tbody>
<tr><td>97161 / 97162 / 97163</td><td>PT evaluation, low / moderate / high complexity</td><td>Untimed, once per evaluation</td></tr>
<tr><td>97164</td><td>PT re-evaluation</td><td>Untimed</td></tr>
<tr><td>97110</td><td>Therapeutic exercise</td><td>Timed, 15-minute units</td></tr>
<tr><td>97112</td><td>Neuromuscular re-education</td><td>Timed, 15-minute units</td></tr>
<tr><td>97140</td><td>Manual therapy</td><td>Timed, 15-minute units</td></tr>
<tr><td>97530</td><td>Therapeutic activities</td><td>Timed, 15-minute units</td></tr>
<tr><td>97116</td><td>Gait training</td><td>Timed, 15-minute units</td></tr>
<tr><td>97014</td><td>Electrical stimulation, unattended</td><td>Untimed (Medicare uses a G code)</td></tr>
</tbody></table>
<p>Pair each code with a plain description on the patient copy, such as "Therapeutic exercise (97110), 2 units". Patients and HSA administrators understand words, while insurers need the codes.</p>

<h2>The 8-minute rule explained</h2>
<p>The 8-minute rule is how Medicare converts direct, one-on-one treatment time into units for timed codes. Add up all timed minutes for the visit, divide by 15, and if 8 or more minutes remain, bill one more unit. Untimed services such as evaluations do not count toward the total.</p>
<table><thead><tr><th>Total timed minutes</th><th>Billable units</th></tr></thead><tbody>
<tr><td>Fewer than 8</td><td>0</td></tr>
<tr><td>8 to 22</td><td>1</td></tr>
<tr><td>23 to 37</td><td>2</td></tr>
<tr><td>38 to 52</td><td>3</td></tr>
<tr><td>53 to 67</td><td>4</td></tr>
<tr><td>68 to 82</td><td>5</td></tr>
</tbody></table>
<h3>Worked 8-minute rule calculation</h3>
<p>A patient receives 23 minutes of therapeutic exercise (97110), 10 minutes of manual therapy (97140) and 7 minutes of neuromuscular re-education (97112). Total timed minutes are 23 + 10 + 7 = 40, which falls in the 38 to 52 band, so the visit supports 3 units.</p>
<p>Next, assign the units. 97110 has one full 15-minute unit, leaving 8 minutes. The remaining minutes are 8 (97110), 10 (97140) and 7 (97112). Two units are left to assign, and they go to the codes with the most remaining minutes: 97140 (10) and 97110 (8). The invoice shows 97110 x 2 and 97140 x 1. The 7 minutes of 97112 are documented in the notes but not billed as a separate unit.</p>
<p>Two practical habits make the 8-minute rule easier to defend. First, record start and stop times or total minutes for each timed code in the daily note, not just the units. Second, record total timed minutes and total treatment time for the visit, so anyone checking the claim can repeat your calculation. If the minutes in the note do not support the units on the invoice, reduce the units rather than hoping nobody checks.</p>
<p>Some commercial payers follow a different approach that counts each code on its own. Bill the way each payer's policy requires, and always keep minutes per code in your treatment notes.</p>

<h2>2026 Medicare thresholds for therapy</h2>
<p>Medicare no longer caps outpatient therapy, but it uses thresholds that affect how you bill. According to the <a href="https://www.cms.gov/medicare/coding-billing/therapy-services" target="_blank" rel="noopener noreferrer">CMS therapy services page</a>, as of 2026:</p>
<ul>
<li>The KX modifier threshold is $2,480 for physical therapy and speech-language pathology combined, and a separate $2,480 for occupational therapy.</li>
<li>Claims above the threshold need the KX modifier, which confirms the care is medically necessary and documented. Without it, they are denied.</li>
<li>A targeted medical review threshold of $3,000 applies, at which claims may be reviewed.</li>
<li>Services furnished in whole or in part by a physical therapist assistant carry the CQ modifier alongside the GP modifier, and Medicare pays them at a reduced rate.</li>
</ul>
<p>For example, if a patient's allowed therapy charges reach $2,350 by mid-year and the next visit adds $160, the running total becomes $2,510, which is above the $2,480 threshold. That visit and later ones need the KX modifier, supported by notes showing why continued therapy is medically necessary.</p>
<p>For Medicare patients, keep a running total of allowed charges for the year in your notes or on statements, so you know when the KX modifier is needed. Medicare also requires a plan of care certified by a physician or other qualified practitioner, even though patients can usually see a PT directly.</p>

<h2>Direct access, cash-based PT and the PT superbill</h2>
<p>The <a href="https://www.apta.org/advocacy/issues/direct-access-advocacy" target="_blank" rel="noopener noreferrer">American Physical Therapy Association</a> reports that, as of July 2025, all 50 states, Washington DC and the US Virgin Islands offer some form of direct access to physical therapist evaluation and treatment, though some states still attach conditions. That has helped cash-based practices grow: patients book directly, pay at the visit and, if they wish, claim out-of-network benefits.</p>
<p>Cash-based clinics usually price per evaluation and per follow-up session, often with packages. Prices vary too much by region and session length for a national average to be useful, so set yours from local competitors, visit length and your costs. Show packages on the invoice as a line item, record what was prepaid and give patients a written estimate before treatment. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> and <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> cover the layout.</p>

<h3>PT superbill for out-of-network reimbursement</h3>
<p>A PT superbill is a paid, itemized statement the patient sends to their own insurer. It adds what a plain receipt lacks: provider NPI and tax ID, patient date of birth, ICD-10 diagnosis codes, CPT codes with units, place of service, fees and amounts paid. Our <a href="/blog/superbill-template">superbill template guide</a> covers every field and shows the reimbursement arithmetic, so use it as your reference. Many cash-based clinics issue one superbill per month listing every visit, which is easier for patients than one per session.</p>
<p>Each visit line on a PT superbill should carry enough detail for the insurer to price it. A typical line looks like this:</p>
<table><thead><tr><th>Date</th><th>CPT</th><th>Units</th><th>Timed minutes</th><th>ICD-10</th><th>Fee</th></tr></thead><tbody>
<tr><td>Oct 13</td><td>97110</td><td>2</td><td>23</td><td>M54.50</td><td>$80.00</td></tr>
<tr><td>Oct 13</td><td>97140</td><td>1</td><td>10</td><td>M54.50</td><td>$40.00</td></tr>
</tbody></table>
<p>The units follow the 8-minute rule example above, and the fees add up to the $120 session price the patient paid ($80 + $40). Matching the superbill lines to the invoice total in this way avoids awkward questions from insurers.</p>
<p>Because therapy received as medical treatment counts as a medical expense under <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer">IRS Publication 502</a>, the same itemized receipt usually supports HSA or FSA reimbursement. Keep general fitness classes on separate lines, since they generally do not qualify.</p>

<h2>Sample physical therapy invoice with real numbers</h2>
<p>A cash-pay patient has an evaluation and five follow-up visits in October. The fees are illustrative; use your own fee schedule.</p>
<table><thead><tr><th>Date</th><th>Service</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oct 1</td><td>PT evaluation, moderate complexity (97162)</td><td>1</td><td>$160.00</td><td>$160.00</td></tr>
<tr><td>Oct 6 to 27</td><td>Follow-up session, 45 min (97110, 97140, 97112)</td><td>5</td><td>$120.00</td><td>$600.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$760.00</td></tr>
<tr><td colspan="4">Package discount (fixed)</td><td>-$40.00</td></tr>
<tr><td colspan="4">Total</td><td>$720.00</td></tr>
<tr><td colspan="4">Paid at visits</td><td>$480.00</td></tr>
<tr><td colspan="4">Balance due</td><td>$240.00</td></tr>
</tbody></table>
<p>The check: 5 x $120 = $600, plus $160 is $760. Less the $40 fixed discount, the total is $720. After $480 already paid, $240 is due. Treatment is not taxed, so tax stays at zero. In the generator, enter the two lines, choose a fixed $40 discount and type 480 in the amount paid field. For the superbill version, break each follow-up into its CPT codes and units using the 8-minute rule, and add diagnosis codes.</p>

<h2>How to create a physical therapy invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> (or the <a href="/invoice-generator/uk">UK version</a> for physiotherapy practices billing in pounds) and add your practice details, NPI and tax ID.</li>
<li>Add the patient's name, account number and responsible party.</li>
<li>Set a unique invoice number, invoice date and due date.</li>
<li>List each date of service with CPT codes, units and timed minutes.</li>
<li>Check units against the 8-minute rule or the payer's own method before you finalise.</li>
<li>Apply any package or prompt-pay discount and record payments in the amount paid field.</li>
<li>Add notes with your cancellation policy and payment methods, then download and send the PDF securely.</li>
</ol>
<p>The <a href="/invoice-templates/minimal">minimal template</a> and <a href="/invoice-templates/ocean">ocean template</a> give a clean clinical look.</p>

<h2>Special physical therapy billing situations</h2>
<p>A few situations account for most PT billing questions. Each one is easier to handle when the rule is written down before treatment and the invoice line explains itself.</p>
<h3>Cancellations, no-shows and package refunds</h3>
<p>A missed physical therapy visit costs a clinic the full appointment slot, so most cash-based practices set a written cancellation policy, such as 24 hours' notice or a fee. Show any fee on the invoice as a separate line with the date and reason, for example "Late cancellation, 15 Oct, per signed policy", and never give it a CPT code, because no treatment was provided.</p>
<p>Prepaid packages need clear refund terms. A common method is to charge visits already used at the full single-visit rate and refund the rest. For example, a patient who prepaid $550 for a five-visit package and used three visits at a $120 single rate would receive $550 minus $360, which is $190. Write the formula into your agreement before the patient pays, and show the arithmetic on the final statement. For Medicare patients, check current CMS guidance before charging missed appointment fees and apply the same policy to everyone.</p>

<h3>Home visits, mobile PT and contracts with facilities</h3>
<p>Mobile and home-visit therapists often charge a higher session rate or a separate travel fee to cover driving time. On the invoice, list the travel fee as its own line or in the extra field, so it is clear it is not a medical service; insurers and HSA administrators may treat it differently from treatment. If you contract with a skilled nursing facility, school, sports team or employer, the organisation is your client: invoice it for sessions or hours as your contract specifies, quote its purchase order or contract reference, and leave patient details off unless the agreement asks for them. Our <a href="/blog/how-to-invoice-for-hourly-work">guide to invoicing hourly work</a> covers time-based contracts.</p>

<h2>Common PT invoice mistakes</h2>
<ul>
<li><strong>Units that do not match minutes:</strong> billing 3 units for 35 minutes of timed care fails a basic check.</li>
<li><strong>Counting evaluation time as timed minutes:</strong> evaluations are untimed and stay out of the total.</li>
<li><strong>Missing the KX modifier:</strong> Medicare claims above $2,480 in 2026 are denied without it.</li>
<li><strong>Superbills without diagnosis codes:</strong> insurers return them unprocessed.</li>
<li><strong>Billing group time as one-on-one:</strong> group therapy has its own code (97150) and is not counted as one-on-one minutes.</li>
<li><strong>Travel fees with CPT codes:</strong> travel and cancellation fees are not treatment and should never carry a procedure code.</li>
</ul>
<p>Related practices face similar issues: see our <a href="/blog/chiropractic-invoice-template">chiropractic invoice template</a>, <a href="/blog/massage-therapy-invoice-template">massage therapy invoice template</a> and <a href="/blog/home-health-care-invoice-template">home health care invoice template</a>.</p>
<p>This article is general information, not legal, tax or billing compliance advice. Confirm codes, thresholds and payer rules with CMS and your payer contracts.</p>

<h2>Create your physical therapy invoice</h2>
<p>A reliable physical therapy invoice shows codes, units and minutes that agree with your notes, keeps Medicare thresholds in view and gives cash-pay patients a PT superbill they can file. Build your next one in the free <a href="/invoice-generator">online invoice generator</a>, download the PDF and keep a copy with the patient's billing record.</p>
`,
  },
  {
    slug: "yoga-instructor-invoice-template",
    title: "Yoga Instructor Invoice: Private Sessions and Studio Billing",
    description:
      "Create a yoga instructor invoice for private clients, studios and corporate classes, with pricing models, package examples, contractor tips and a sample.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "personal-trainer-invoice-template",
      "independent-contractor-invoice",
      "life-coach-invoice-template",
      "w9-and-1099-for-contractors",
    ],
    faqs: [
      {
        q: "What should a yoga instructor invoice include?",
        a: "Include your name or business name, contact details and logo, the client or studio name, a unique invoice number, the invoice date, the service period, each class or session with date, length and rate, any travel fee, discount or package price, tax if it applies, the total, payments received, the due date and how to pay. Studios also often want your tax ID or W-9 on file.",
      },
      {
        q: "How do yoga teachers bill studios?",
        a: "Most freelance teachers invoice studios monthly or per pay period, listing each class taught with the date, time and agreed rate. Common pay models are a flat fee per class, a per-student rate, or a base fee plus a bonus above a set attendance. Agree the model in writing first and include attendance figures on the invoice when your pay depends on them.",
      },
      {
        q: "How much do private yoga sessions cost?",
        a: "Private yoga rates vary a lot by city, experience, session length and whether you travel to the client. Private sessions almost always cost more per hour than a group class, and many teachers sell packs of five or ten sessions at a lower per-session price. Research what teachers near you charge, add travel time and costs, and publish clear package terms.",
      },
      {
        q: "Am I an employee or contractor when teaching at a studio?",
        a: "It depends on the relationship, not the job title. The IRS looks at behavioral control, financial control and the type of relationship. A studio that sets your schedule, style and pay and treats you like staff may be an employer. If you set your own methods, teach for several studios and invoice them, you are more likely a contractor. Ask an adviser if unsure.",
      },
      {
        q: "Will a studio send me a 1099?",
        a: "If you are a US contractor and a studio pays you enough during the year to cross the Form 1099-NEC reporting threshold, it should send you one. The threshold rose for payments made in 2026, so check our 1099 threshold guide for the current figure. Either way, all of your yoga income is taxable, so track every invoice and payment yourself.",
      },
      {
        q: "Do yoga instructors charge sales tax?",
        a: "Usually not in most US states, but some states and cities tax fitness or instruction services, and retail items such as mats or props are often taxable. In the UK, VAT only applies once you are VAT registered. Check your state revenue department or HMRC guidance before adding tax, and keep taxable products on separate lines.",
      },
      {
        q: "How should I handle late cancellations for private clients?",
        a: "Put a cancellation policy in writing before the first session, such as 24 hours' notice or the session is charged or deducted from the package. On the invoice, show a cancelled session as its own line, for example Late cancellation, 12 Oct, charged per policy, so the client can see exactly why it is there.",
      },
      {
        q: "Can I use a free invoice generator for yoga classes?",
        a: "Yes. A free online invoice generator lets you list classes or sessions, apply a percentage or fixed package discount, add a travel fee and record a deposit so the balance due is correct, then download a PDF. It does not send recurring invoices automatically, so create each studio or client invoice yourself on a fixed day each month.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A yoga instructor invoice lists your business details, the client or studio, a unique invoice number, the service period, each class or private session with date, length and rate, any package discount or travel fee, tax only where it applies, payments received and the balance due with payment terms. Studios usually get one invoice per month; private clients pay per session or per package.</p>

<p>Most yoga teachers earn from several sources at once: classes at two or three studios, a few private clients, a corporate lunchtime class, maybe a retreat or online course. Each pays in a different way, and without a consistent yoga instructor invoice it is easy to miss a class or forget who still owes for a package. You can make a clean invoice for each in a few minutes with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This guide covers what to put on a yoga invoice, the pricing models used for private yoga and studio contractor billing, contractor status and tax basics, a worked example with real numbers, and the mistakes that cost teachers money.</p>

<h2>What a yoga instructor invoice should include</h2>
<ul>
<li><strong>Your details:</strong> name or business name, email, phone, website and logo. US teachers often add a tax ID; studios will usually ask for a W-9 before paying.</li>
<li><strong>Client or studio:</strong> legal business name and address for studios and companies, full name for private clients.</li>
<li><strong>Invoice number and date:</strong> a unique number such as YOGA-2026-041. Our <a href="/tools/invoice-number-generator">invoice number generator</a> suggests formats.</li>
<li><strong>Service period:</strong> for example 1 to 31 October 2026.</li>
<li><strong>Classes or sessions:</strong> date, class name or style, length and rate for each.</li>
<li><strong>Attendance:</strong> where your pay depends on headcount.</li>
<li><strong>Extras:</strong> travel fees, workshop fees, props supplied or room hire passed on.</li>
<li><strong>Discounts, payments and balance:</strong> package discounts, deposits and what is still due.</li>
<li><strong>Payment terms:</strong> due date, payment methods and cancellation policy.</li>
</ul>

<h2>Yoga pricing models and how they look on an invoice</h2>
<p>Yoga rates vary widely by city, experience, class type and whether you travel, so national averages are not much help. What matters on an invoice is that the model is clear. These are the models teachers use most.</p>
<table><thead><tr><th>Model</th><th>Who uses it</th><th>How it works</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Per private session</td><td>Private clients</td><td>One rate per session, often with travel added</td><td>Private yoga, 60 min, 14 Oct</td></tr>
<tr><td>Session package</td><td>Private clients</td><td>Prepaid pack of 5 or 10 at a lower per-session rate</td><td>10-session private package</td></tr>
<tr><td>Flat fee per class</td><td>Studios, gyms</td><td>Same fee whatever the attendance</td><td>Vinyasa 60, 7 Oct, flat rate</td></tr>
<tr><td>Per student</td><td>Studios, community spaces</td><td>Pay rises with headcount</td><td>Hatha 75, 9 Oct, 14 students</td></tr>
<tr><td>Base plus bonus</td><td>Studios</td><td>Flat fee plus an amount for each student above a set number</td><td>Attendance bonus, 30 students above 10 per class</td></tr>
<tr><td>Corporate or event</td><td>Companies, retreats</td><td>Flat fee per session or per day, plus travel</td><td>Corporate chair yoga, 4 sessions</td></tr>
</tbody></table>
<h3>Private yoga rates</h3>
<p>Private sessions cost more per hour than group classes because the client gets your full attention and often a home or office visit. When setting private yoga rates, include your travel time and costs, preparation and the hours you cannot fill around the session. Many teachers sell packages to secure commitment, with an expiry date and a cancellation rule printed on the invoice.</p>
<h3>Setting your rate</h3>
<p>A simple way to set a private rate is to work out what you need per teaching hour, then add the hours that surround it. A 60-minute home session can take two hours once you include travel and setup, so the rate has to cover both. Look at what experienced teachers in your area publish, decide where you sit, and review your prices once a year. Raise rates for new clients first, and give existing clients at least a month's notice.</p>
<h3>Studio contractor billing</h3>
<p>If you teach as a contractor, the studio is your client, and you should invoice it like any other business. Agree your rate, pay model, invoicing schedule and substitute rules in writing. Then send one invoice per month or per pay period listing every class you taught. If pay depends on attendance, include the headcount per class, taken from the studio's booking system, so payroll can check it quickly. Our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> covers the general format.</p>

<h2>Contractor or employee? What studios look at</h2>
<p>Being paid by invoice does not by itself make you a contractor. The IRS looks at the whole relationship, grouped into behavioral control, financial control and the type of relationship. Its guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer">independent contractor versus employee status</a> sets out the factors. A studio that controls when, where and how you teach, provides everything and treats you like staff may be an employer. A teacher who sets their own methods, works for several studios and runs their own business is more likely a contractor.</p>
<p>For US contractors, the practical steps are a W-9 for each studio, an invoice for each pay period and good records. Read our guides on <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms</a> and the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold</a>. Whether or not you receive a 1099, all of your teaching income is taxable, so keep records of every payment and your business costs from the start.</p>

<h2>Sample yoga instructor invoices with real numbers</h2>
<h3>Example 1: monthly studio invoice</h3>
<p>You teach 12 classes in October at a flat $45 per class, plus a $3 bonus per student above 10 per class. Across the month, students above the threshold total 30.</p>
<table><thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Group classes, 60 min, October (dates listed in notes)</td><td>12</td><td>$45.00</td><td>$540.00</td></tr>
<tr><td>Attendance bonus, students above 10 per class</td><td>30</td><td>$3.00</td><td>$90.00</td></tr>
<tr><td colspan="3">Total due within 15 days</td><td>$630.00</td></tr>
</tbody></table>
<p>The check: 12 x $45 = $540, 30 x $3 = $90, total $630.</p>
<h3>Example 2: private client package</h3>
<p>A private client buys 8 sessions at $90 each, with a 10% package discount and a $40 travel fee for home visits. They pay half upfront.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Private yoga sessions, 8 x $90</td><td>$720.00</td></tr>
<tr><td>Package discount (10%)</td><td>-$72.00</td></tr>
<tr><td>Travel fee</td><td>$40.00</td></tr>
<tr><td>Total</td><td>$688.00</td></tr>
<tr><td>Deposit paid</td><td>$344.00</td></tr>
<tr><td>Balance due</td><td>$344.00</td></tr>
</tbody></table>
<p>The check: $720 less 10% ($72) is $648, plus $40 travel is $688. Half is $344 paid, so $344 is due. In our generator, enter the sessions line, apply a 10% discount, put $40 in the shipping or extra field, leave tax at zero and enter 344 as the amount paid.</p>

<h2>How to create a yoga instructor invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a>, choose your currency and add your name, logo and contact details.</li>
<li>Enter the studio's business name and address, or the private client's name.</li>
<li>Add a unique invoice number, the invoice date and the service period.</li>
<li>List each class or session with date, length and rate, or one line per class type with a quantity.</li>
<li>Add attendance bonuses, package discounts or travel fees as needed.</li>
<li>Leave tax at zero unless your location taxes your services or you sell taxable products.</li>
<li>Record any deposit in the amount paid field so the balance is right.</li>
<li>Add your cancellation policy and payment details in the notes, then download the PDF.</li>
</ol>
<p>The <a href="/invoice-templates/lavender">lavender template</a>, nordic template or minimal template suit a calm wellness brand.</p>

<h2>Corporate yoga, workshops and retreats</h2>
<p>Corporate wellness programmes usually want a quote first, then an invoice after each block of sessions, often on net 30 terms. Include a purchase order number if the company gives you one. Workshops and retreats need a deposit to secure the booking, with the balance due before the event; our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to label each stage. If you pass on venue or travel costs, list them separately at cost so the client can see what they are paying for.</p>
<h3>Retreat invoice example</h3>
<p>Say you run a weekend retreat for 10 guests at $450 each, and the venue charges you $2,000. Each guest gets their own invoice: $450, with a $150 deposit due on booking and $300 due 30 days before the retreat. Across the group that is $4,500 in income, $1,500 of it collected as deposits, leaving $2,500 after the venue cost before your other expenses. Write your refund rules for cancelled places into the booking terms, and record each deposit in the amount paid field so every guest's invoice shows the right balance.</p>
<h3>Online classes and memberships</h3>
<p>Online classes follow the same rules. If you sell to clients abroad, see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> for currency and payment tips. If you sell a monthly membership to a private group or a company, issue an invoice for each month at the start of the period, list the classes included and note how unused classes are handled.</p>
<h3>Keeping records for tax time</h3>
<p>Keep a copy of every invoice, note the date each one is paid and store receipts for costs such as training, insurance, music licences, props and travel. A simple monthly routine of matching payments to invoices makes your tax return far easier and shows quickly which studios pay late. US teachers can read our <a href="/blog/self-employed-tax-deductions">self-employed tax deductions guide</a> for the costs that commonly qualify.</p>

<h2>Payment terms and getting paid on time</h2>
<p>Getting paid on time is mostly about consistency. Private clients usually pay per session at the time of booking, or upfront for a package. Studios and gyms often pay contractors on a fixed cycle, such as monthly or twice a month, so ask for their payroll cut-off date and send your invoice before it. Corporate clients commonly expect net 30. Whatever the client, print the due date on the invoice rather than leaving it implied.</p>
<p>Make paying easy: include bank details, a card payment link or an app handle in the notes. Send invoices on the same day each month so studios get used to your schedule, and send a polite reminder the day after the due date. Keep a simple list of unpaid invoices, because small amounts from several studios are easy to lose track of. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> has wording you can copy.</p>
<h3>Substitute classes and cover</h3>
<p>Covering another teacher's class is easy to forget by the end of the month. Note each sub on the day, then list it on the invoice with the date, class and the name of the teacher you covered for, so the studio can match it to its schedule. If a sub pays a different rate, show it as its own line. When another teacher covers your class, leave it off your invoice so the studio does not pay twice, and make sure the cover teacher bills it instead.</p>

<h2>Wellness, therapy and HSA questions</h2>
<p>Clients sometimes ask whether they can claim yoga from an HSA or FSA. IRS rules generally exclude expenses that only improve general health, such as gym or health club dues, so ordinary yoga classes usually do not qualify. Do not describe classes as therapy on an invoice unless that is genuinely what you provide and are qualified to provide. If you work alongside clinicians, our <a href="/blog/physical-therapy-invoice-template">physical therapy invoice guide</a> shows how clinical billing differs.</p>

<h2>Common yoga invoice mistakes</h2>
<p>Most billing problems for yoga teachers come from informal arrangements that were never written down. A quick message confirming the rate, the pay model and when you will invoice prevents most of them. The mistakes below are the ones that cost teachers the most money over a year.</p>
<ul>
<li><strong>Bundling a month into one vague line:</strong> list dates or class counts so the studio can match its schedule.</li>
<li><strong>No cancellation rule:</strong> without a written policy, late cancellations are hard to charge.</li>
<li><strong>Undated packages:</strong> print the purchase date and expiry on the package invoice.</li>
<li><strong>Not invoicing subs promptly:</strong> covered classes are easy to forget by the end of the month.</li>
<li><strong>Waiting to be paid without an invoice:</strong> some studios only pay against a received invoice.</li>
</ul>
<p>Teachers who also train clients one-on-one can compare our <a href="/blog/personal-trainer-invoice-template">personal trainer invoice template</a> and the <a href="/blog/personal-trainer-rates">personal trainer rates guide</a> for package pricing ideas, and new teachers can read <a href="/blog/how-to-become-a-freelancer">how to become a freelancer</a>.</p>

<h2>Create your yoga instructor invoice</h2>
<p>A clear yoga instructor invoice lists every class or session, shows how your pay was calculated, applies packages and deposits correctly and states your terms. That makes it easy for studios to pay on time and for private clients to trust your billing. Build your next one in the free <a href="/invoice-generator">online invoice generator</a> and download a polished PDF in minutes.</p>
`,
  },
  {
    slug: "musician-invoice-template",
    title: "Musician Invoice Template: Gig, Band and Wedding Deposits",
    description:
      "Use this musician invoice template to bill gigs, weddings and session work, take a band deposit, split pay between members and get paid on time after shows.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "dj-invoice-template",
      "deposit-invoice",
      "music-lesson-invoice-template",
      "event-planner-invoice-template",
    ],
    faqs: [
      {
        q: "What should a musician invoice include?",
        a: "Include your name or band name, contact details and logo, the client's name and address, a unique invoice number, the invoice date, the event date, venue and performance times, each item such as performance fee, extra sets, PA hire, travel or overtime, any discount, the total, deposits received, the balance due, the due date and how to pay. Reference your performance agreement so terms are clear.",
      },
      {
        q: "How do I write a band invoice?",
        a: "Issue the band invoice from whoever holds the booking, usually the bandleader or the band's business. List the client, event details and the agreed fee, plus extras such as sound equipment, overtime or travel. Show the deposit already paid and the balance due before or on the event date. Pay band members separately and keep records of what each person received.",
      },
      {
        q: "How much deposit should a wedding band take?",
        a: "There is no fixed rule, but many bands and solo performers ask for a non-refundable deposit of a quarter to half of the fee to secure the date, with the balance due before or on the day. Whatever you choose, put it in the contract, state the deposit and refund terms on the invoice and send a separate invoice for the balance.",
      },
      {
        q: "When should musicians send an invoice?",
        a: "Send a deposit invoice when the booking is confirmed and a balance invoice a few weeks before the event, or on the night if payment is due then. For venues and corporate clients that pay after the gig, invoice the same day or the next morning. Session work and recurring residencies are usually invoiced per session or monthly.",
      },
      {
        q: "Do musicians need to charge sales tax?",
        a: "In most US states, live performance fees are not subject to sales tax, but some states and cities tax admissions or entertainment, and merchandise sales are usually taxable. In the UK, VAT applies only once you are VAT registered. Check your state revenue department or HMRC guidance, and keep merchandise or equipment sales on separate lines.",
      },
      {
        q: "How do I split payment between band members?",
        a: "Agree the split in writing before the gig, for example equal shares after costs or a fixed fee per musician with the leader keeping the remainder. Collect the full fee under one invoice, then pay each member and keep a record. In the US, a leader or band business that pays contractors may need W-9s and, above the reporting threshold, Form 1099-NEC.",
      },
      {
        q: "What payment terms should a gig invoice use?",
        a: "For private events, balance due before the event or on the day before you play is common, so you are not chasing a couple after their wedding. Venues and corporate clients often pay within 7 to 30 days. Print the due date clearly, list accepted payment methods and state any overtime rate so extra time can be billed without argument.",
      },
      {
        q: "Can I use a free invoice generator for gigs?",
        a: "Yes. A free online invoice generator lets you list performance fees and extras, apply a discount, add travel in the extra field and record a deposit so the balance due is correct, then download a PDF to email or text. It does not take card payments, so add a payment link or bank details in the notes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A musician invoice template lists your name or band name, the client, a unique invoice number, the event date, venue and set times, the performance fee and extras such as PA hire, overtime or travel, any deposit already paid and the balance due with a clear due date. For weddings and private events, take a deposit when you book and collect the balance before or on the day.</p>

<p>Musicians get paid in more ways than most freelancers: a wedding band with a deposit and balance, a venue that pays a guarantee or door split, a corporate party on net 30, a session fee, a church service, a residency. A clear musician invoice or band invoice makes each of these straightforward, and stops you chasing money after the music stops. Build one in our <a href="/invoice-generator">free invoice generator</a> and send the PDF from your phone.</p>

<p>This guide covers what to include on a gig invoice, how musicians price their work, how to handle the wedding band deposit, splitting pay between band members, tax basics, a worked example, and the mistakes that leave performers unpaid.</p>

<h2>What a musician invoice template should include</h2>
<ul>
<li><strong>Your details:</strong> name or band name, contact details, website and logo. If the band has a business entity, use its name.</li>
<li><strong>Client details:</strong> the person or company paying, with billing address. For weddings, this is usually the couple or a parent, not the venue.</li>
<li><strong>Invoice number and date:</strong> unique and sequential, such as GIG-2026-077. Keep the sequence going across every gig.</li>
<li><strong>Event details:</strong> date, venue, load-in time, performance times and number of sets.</li>
<li><strong>Line items:</strong> performance fee, ceremony music, extra sets, PA and lighting, learning a special song, overtime, travel or accommodation.</li>
<li><strong>Deposit and balance:</strong> what has been paid and what remains.</li>
<li><strong>Terms:</strong> due date, payment methods, overtime rate and a reference to your performance contract.</li>
</ul>

<h2>How musicians price gigs</h2>
<p>Gig fees vary enormously by genre, location, band size, experience and the type of event, so there is no reliable national rate card. What you can control is the structure. These are the models most performers use.</p>
<table><thead><tr><th>Model</th><th>Common for</th><th>How it works</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Flat fee</td><td>Weddings, private and corporate events</td><td>One agreed price for the performance</td><td>Reception performance, 5-piece band, 4 hours</td></tr>
<tr><td>Per musician</td><td>Function bands, orchestral and session work</td><td>Fee per player, totalled for the line-up</td><td>String quartet, 4 players x 2 hours</td></tr>
<tr><td>Per set or hour</td><td>Bars, restaurants, residencies</td><td>Rate per set or per hour played</td><td>Acoustic sets, 3 x 45 min</td></tr>
<tr><td>Guarantee or door split</td><td>Venues and promoters</td><td>A fixed guarantee, a share of ticket sales, or the greater of the two</td><td>Guarantee $300 vs 70% of door, settled</td></tr>
<tr><td>Session fee</td><td>Studio recording</td><td>Per song, per hour or per day, with usage terms agreed</td><td>Session guitar, 3-hour session</td></tr>
</tbody></table>
<h3>Pricing extras clearly</h3>
<p>Extras are where gig invoices cause arguments. Price them in your quote and contract, then use the same wording on the invoice. Common extras include a fee for learning a first dance or special request song, PA and lighting when the venue has none, a second setup for a ceremony in a different room, extended sets or overtime, travel beyond a set distance, and accommodation for late finishes far from home. Meals and a changing room are usually written into your rider rather than billed.</p>
<h3>Covering your real costs</h3>
<p>When you set your gig price, include rehearsal time, travel, equipment wear, insurance and the hours spent loading in and out, not just the time on stage. Private event clients are usually comparing the total, so a clear flat fee with optional extras is easier to sell than a long list of small charges.</p>

<h2>Wedding band deposits and balance invoices</h2>
<p>Weddings are booked months ahead, and turning down other offers for that date has a real cost. That is why most wedding bands and soloists take a deposit when the contract is signed. Many ask for something in the region of a quarter to half of the fee, usually non-refundable, with the balance due a few weeks before the wedding or on the day before you play.</p>
<p>Use two invoices: a deposit invoice when the booking is confirmed, and a balance invoice that lists the full fee, shows the deposit as paid and states the remaining amount. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> and <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> show the layout. If the couple adds overtime on the night, send a short final invoice the next day for the extra time at the rate stated in your contract.</p>

<h2>Sample wedding band invoice with real numbers</h2>
<p>A five-piece band plays ceremony music and a four-hour reception, provides PA and lighting, and plays 30 minutes of overtime. A $1,500 deposit was paid on booking. The figures are illustrative.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Ceremony music, acoustic duo, 45 minutes</td><td>$600.00</td></tr>
<tr><td>Reception performance, 5-piece band, 4 hours</td><td>$3,200.00</td></tr>
<tr><td>PA and lighting package</td><td>$350.00</td></tr>
<tr><td>Overtime, 30 minutes (agreed on the night)</td><td>$400.00</td></tr>
<tr><td>Subtotal</td><td>$4,550.00</td></tr>
<tr><td>Travel (extra field)</td><td>$120.00</td></tr>
<tr><td>Total</td><td>$4,670.00</td></tr>
<tr><td>Deposit paid</td><td>$1,500.00</td></tr>
<tr><td>Balance due</td><td>$3,170.00</td></tr>
</tbody></table>
<p>The check: $600 + $3,200 + $350 + $400 = $4,550. Adding $120 travel gives $4,670. After the $1,500 deposit, $3,170 is due. In our generator, enter the four lines, leave tax at zero for the performance, put 120 in the shipping or extra field and 1500 in the amount paid field. The balance due appears on the PDF.</p>

<h2>How to create a gig invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> (or the <a href="/invoice-generator/uk">UK invoice generator</a> if you bill in pounds) and add your name or band name and logo.</li>
<li>Enter the client who signed the contract, with their billing address.</li>
<li>Add a unique invoice number, the invoice date and a due date that matches your contract.</li>
<li>Describe the event: date, venue and performance times.</li>
<li>List the performance fee and each extra on its own line.</li>
<li>Add travel in the extra field and apply any agreed discount.</li>
<li>Record the deposit in the amount paid field so the balance due is correct.</li>
<li>Add payment details and your overtime rate in the notes, then download and send the PDF.</li>
</ol>
<p>For a bold look that matches gig posters, try the <a href="/invoice-templates/dark">dark invoice template</a>, the bold template or the creative template.</p>

<h2>Session work, residencies and splitting band pay</h2>
<h3>Session work and residencies</h3>
<p>Not every music job is a one-off show. Studio session work is usually billed per song, per hour or per day. Agree in writing what the client may do with the recording, and put that usage note on the invoice, for example "Session guitar, 3-hour session, for use on one single release". If the client later wants wider use, that is a new fee.</p>
<p>Residencies at bars, hotels and restaurants are easier to bill monthly. List each date and set length on one invoice rather than sending a separate bill every night, and agree the payment date with the venue manager. Church services, choir accompaniment and theatre pit work often follow a similar pattern, with a fixed fee per service or per show and extra for rehearsals.</p>
<p>If you also teach, keep lessons on separate invoices with their own numbering, as described in the music lesson guide linked below. It keeps your records clean and makes it easy to see which part of your work earns the most.</p>

<h3>Splitting pay between band members</h3>
<p>A band invoice should come from one party, usually the bandleader or the band's business, so the client deals with one name and pays once. Agree how money is split before the gig: equal shares after costs, a fixed fee per member with the leader keeping the rest, or a different rate for deps and session players. Write it down, then pay each member promptly and keep a record of every payment.</p>
<p>In the US, a leader or band business that pays other musicians as contractors should collect a W-9 from each and may need to file Form 1099-NEC above the reporting threshold. See our guides to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms</a> and the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold</a>. Members who invoice the leader can use the same invoice format as any contractor.</p>

<h2>Tax basics for working musicians</h2>
<p>Gig income is business income. In the US, the IRS says you generally must file a return if your net earnings from self-employment are $400 or more, and part-time and gig work counts; see its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer">self-employed individuals tax center</a>. Track every invoice and payment, keep receipts for strings, equipment, rehearsal space and travel, and log driving to gigs with a <a href="/blog/mileage-log-template">mileage log</a>.</p>
<p>Performance fees are not taxed by sales tax in most US states, though some states and cities tax admissions or entertainment, and merchandise is usually taxable. If you sell CDs or shirts at a gig, keep them off the performance invoice and check local rules. This is general information, not tax advice.</p>

<h2>Getting paid on the night and after</h2>
<p>For private events, ask for the balance before the event or at the start of the night, not after the last song. Accept the methods your clients actually use, such as bank transfer, card links or apps; our guide to <a href="/blog/venmo-zelle-cash-app-invoice">Venmo, Zelle and Cash App invoicing</a> covers the trade-offs. Venues and corporate clients often pay on terms, so invoice the next morning and follow up on the due date. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> covers what you can charge when a client pays late.</p>

<h3>Cancellations, weather and force majeure</h3>
<p>Outdoor weddings and festivals carry real cancellation risk. Your contract should say what happens if the client cancels, if the event is postponed, and if bad weather or a venue power failure stops the performance. A common approach is that the deposit is kept on cancellation, a postponed date can move the deposit if you are free, and a weather stop after you have started means the full fee is due. Whatever you agree, the invoice should show the deposit terms in the notes so nobody is surprised.</p>
<p>Postponements need their own invoice treatment. If a couple moves their wedding to a new date and you agree to carry the deposit forward, issue a short note or revised invoice showing the new date, the deposit already held and the balance due, so both sides have the same record. If the new date costs you other bookings, your contract can allow a rebooking fee.</p>
<p>If you cancel, for example through illness, return the deposit or arrange an agreed replacement act, and issue a credit note against the original invoice rather than deleting it.</p>

<h3>Venue settlements and door deals</h3>
<p>For ticketed shows, the deal is often a guarantee against a share of the door. Suppose the deal is $300 guaranteed or 70% of ticket sales, whichever is higher. If 120 tickets sell at $10, gross sales are $1,200 and 70% is $840, so the band is owed $840. If only 30 tickets sell, 70% of $300 is $210, so the $300 guarantee applies. Agree the deal in writing, get a settlement sheet from the venue on the night and send an invoice that matches it, listing the ticket count, the percentage and the amount due.</p>
<p>Corporate events usually work differently: the company will want a quote, may issue a purchase order, and often pays 30 days after the invoice. Put the PO number on your invoice, invoice promptly after the event and diary the due date so a late payment is spotted quickly.</p>

<h2>Common musician invoice mistakes</h2>
<ul>
<li><strong>No deposit:</strong> without one, a cancelled wedding leaves you with an empty date and nothing to show for it.</li>
<li><strong>Billing the venue instead of the client:</strong> invoice whoever signed your contract.</li>
<li><strong>Vague extras:</strong> agree the overtime rate in advance and print it on the invoice.</li>
<li><strong>Waiting days to invoice:</strong> send the invoice the same day or the next morning while the gig is fresh.</li>
<li><strong>No record of member payments:</strong> keep a simple ledger of who was paid what and when.</li>
</ul>
<p>DJs and teachers have their own guides: see the <a href="/blog/dj-invoice-template">DJ invoice template</a> and <a href="/blog/music-lesson-invoice-template">music lesson invoice template</a>. If music is becoming your full-time work, read <a href="/blog/how-to-become-a-freelancer">how to become a freelancer</a>.</p>

<h2>Create your musician invoice</h2>
<p>A professional musician invoice template lists the event, the fee and every extra, records the deposit and shows the balance clearly, so clients pay before the final song rather than weeks later. Whether you are a soloist, a session player or a full wedding band, build your next band invoice in the free <a href="/invoice-generator">online invoice generator</a> and download a polished PDF in minutes.</p>
`,
  },
];
