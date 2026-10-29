import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_L: PostDraft[] = [
  {
    slug: "veterinary-invoice-template",
    title: "Veterinary Invoice Template: Itemized Vet Bills and Estimates",
    description:
      "Use this veterinary invoice template to itemize exams, tests, medicines and procedures, turn a vet estimate into a clear bill and get paid faster.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "medical-invoice-template",
      "estimate-template",
      "itemized-invoice",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "What should a veterinary invoice include?",
        a: "A veterinary invoice should show the practice name, address and contact details, the client's name and address, the patient's name and species, a unique invoice number and date, each exam, test, medicine, procedure and supply as its own line with quantity and price, any tax that applies, deposits or payments received, the balance due and accepted payment methods. Many practices also add the attending vet's name and the visit date.",
      },
      {
        q: "What is the difference between a vet estimate and a vet bill?",
        a: "A vet estimate is given before treatment and shows the expected cost, usually as a low to high range because what a vet finds under anaesthetic can change the plan. The vet bill, or invoice, is issued after treatment and shows what was actually done and charged. A good final invoice references the estimate number so the client can compare the two and see why any figure changed.",
      },
      {
        q: "How much does a vet visit cost in 2026?",
        a: "Published 2026 US cost guides generally put a basic dog or cat exam fee at roughly $50 to $100, with a full routine visit including vaccines and tests often landing somewhere around $70 to $250 or more. Emergency exams cost more before any treatment. Prices vary widely by region, clinic and species, so these figures are a rough guide, not a fee schedule.",
      },
      {
        q: "Do vets charge sales tax on their invoices?",
        a: "In the US it depends on the state. Professional veterinary services are commonly outside sales tax, while retail items a clinic sells, such as pet food, shampoos, toys or some over-the-counter products, are often taxable as goods. In the UK, VAT-registered practices generally charge VAT on their fees. Check your state revenue department or HMRC guidance, and confirm with a tax adviser.",
      },
      {
        q: "What changed for UK vet invoices after the CMA investigation?",
        a: "The CMA's final decision in March 2026 requires practices to publish price lists for standard services, give a written estimate for treatment expected to cost 500 pounds or more except in emergencies, provide itemised bills and cap written prescription fees at 21 pounds for the first medicine and 12.50 pounds for each additional one. The legal orders were due by 23 September 2026, with most remedies phasing in over the following months.",
      },
      {
        q: "Should a vet clinic take a deposit before surgery?",
        a: "Many clinics ask for a deposit before planned procedures such as dentals, orthopaedic surgery or hospital stays, often a share of the low end of the estimate. Record the deposit with a receipt, then show it as an amount paid on the final invoice so the balance is correct. State your deposit and refund policy in writing before treatment so there is no surprise at pick-up.",
      },
      {
        q: "Can pet insurance pay a vet invoice directly?",
        a: "Some insurers pay vets directly, but in many cases the owner pays the clinic and claims the money back. Either way, insurers usually need an itemised invoice showing the pet's name, the date, the diagnosis or reason for the visit and each charge. Keeping line descriptions clear and specific, rather than one lump sum, makes claims faster and reduces follow-up questions to your front desk.",
      },
      {
        q: "Can I use a free invoice generator for a veterinary practice?",
        a: "Yes, for small or mobile practices, relief vets, equine vets and specialists billing other clinics. A free invoice generator lets you add your logo, list services and medicines, apply one tax rate and download a PDF. It is not practice management software, so it does not hold medical records, stock levels or reminders. Many relief vets use it to bill the clinics they cover.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A veterinary invoice lists the practice and client details, the patient's name and species, a unique invoice number and date, each exam, test, medicine, procedure and supply as a separate line with quantity and price, any tax due, deposits already paid, the balance and how to pay. Reference the original vet estimate so owners can see what changed.</p>

<p>Vet bills are some of the most emotional invoices a small business sends. The client is often worried about their animal, may not have expected the cost and wants to understand every charge. A clear veterinary invoice turns that into a simple conversation, and you can build one in a couple of minutes with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This guide covers what to put on a vet bill template, how estimates and final invoices fit together, typical pricing structures, tax on veterinary services and products, the new UK rules on itemised bills, a worked example with real arithmetic and the mistakes that cause disputes. It is written for small and mobile practices, relief vets, equine and farm vets, and veterinary specialists who invoice other clinics.</p>

<h2>What a veterinary invoice should include</h2>
<p>A veterinary invoice has two jobs: it asks for payment, and it is often the document the owner sends to their pet insurer. Build it to serve both. Include:</p>
<ul>
<li><strong>Practice details:</strong> practice name, address, phone, email, logo and, where relevant, your tax or VAT number.</li>
<li><strong>Client details:</strong> the owner's name, billing address and contact details. For farm or equine work, the business name of the yard or farm.</li>
<li><strong>Patient details:</strong> the animal's name, species, breed and, if you use them, a patient or microchip reference. Clients with several pets need to know which one the bill is for.</li>
<li><strong>Invoice number and dates:</strong> a sequential number such as VET-2026-1187, the invoice date and the date or dates of treatment.</li>
<li><strong>Attending vet:</strong> the name of the vet who treated the animal, which helps with insurance claims and follow-up questions.</li>
<li><strong>Itemized charges:</strong> consultation, diagnostics, procedures, anaesthesia, hospitalization, medicines and supplies, each on its own line.</li>
<li><strong>Estimate reference:</strong> if you gave a written estimate, its number and the agreed range.</li>
<li><strong>Tax:</strong> only on the items where tax applies in your area.</li>
<li><strong>Payments and balance:</strong> deposits, insurance payments received directly, and the balance due.</li>
<li><strong>Payment terms:</strong> due date, accepted methods and any late fee or payment plan terms.</li>
</ul>
<p>Keep clinical notes off the invoice. A short reason for the visit, such as "Annual wellness exam and vaccines" or "Dental cleaning with two extractions", is enough. The full history belongs in the medical record. For a general view of how to break charges down, see our guide to the <a href="/blog/itemized-invoice">itemized invoice</a>.</p>

<h2>Vet estimate vs vet bill: how they work together</h2>
<p>For anything beyond a routine visit, most clinics give an estimate before treatment and an invoice afterwards. The two documents do different jobs:</p>
<table><thead><tr><th>Document</th><th>When it is issued</th><th>What it shows</th><th>Legal weight</th></tr></thead><tbody>
<tr><td>Vet estimate</td><td>Before treatment, at consultation or drop-off</td><td>Planned procedures and a low to high cost range, plus a deposit if required</td><td>A forecast the owner agrees to, not a demand for payment</td></tr>
<tr><td>Vet invoice (bill)</td><td>After treatment, at discharge or pick-up</td><td>What was actually done, every charge, payments received and the balance</td><td>The request for payment and the record for accounts and insurers</td></tr>
<tr><td>Receipt</td><td>When payment is received</td><td>Amount paid, date and method</td><td>Proof of payment</td></tr>
</tbody></table>
<p>Ranges matter because a vet often cannot know the full picture until the animal is under anaesthetic. A dental estimate, for example, may cover cleaning plus "up to four extractions". If the final bill lands inside the range, the conversation is easy. If it goes above, contact the owner before you exceed the estimate wherever you can, and note that call on the invoice. Our <a href="/blog/estimate-template">estimate template guide</a> explains how to set out low and high figures,, and keeping both documents on the same numbering logic makes them easy to match.</p>

<h2>Common veterinary pricing structures</h2>
<p>Most practices price with a mix of fixed fees and item-by-item charges. How you price shapes how the vet bill template reads.</p>
<h3>Consultation and exam fees</h3>
<p>A fixed fee for the examination, with separate higher fees for emergency, out-of-hours or house-call visits. Published 2026 US cost guides generally put a basic dog or cat exam at roughly $50 to $100, with whole routine visits including vaccines and tests often reaching $70 to $250 or more. Treat those figures as rough illustrations, because prices vary sharply by region and clinic.</p>
<h3>Diagnostics</h3>
<p>Blood panels, urinalysis, fecal tests, X-rays and ultrasound, each priced per test. If you send samples to an outside laboratory, decide whether to bill the lab fee at cost plus a handling charge or as one fixed price.</p>
<h3>Procedures and packages</h3>
<p>Spays, neuters and dental cleanings are often sold as packages, while complex surgery is priced from its parts: anaesthesia by time, surgeon time, theatre fees, medicines and hospitalization per night. If you sell packages, list what is included in the description so the client sees why the package costs what it does.</p>
<h3>Medicines and supplies</h3>
<p>Dispensed medicines are usually charged per unit or per pack, plus a dispensing fee at some clinics. Supplies such as cones, bandages and prescription diets go on separate lines.</p>
<p>Whatever mix you use, apply it consistently. If anaesthesia or surgery is priced by time, put the minutes in the description so the owner can see how the figure was reached.</p>

<h2>Worked example: a wellness visit and a dental procedure</h2>
<p>The figures below are illustrative, not a recommended fee schedule. They show how a vet bill template adds up.</p>
<h3>Example 1: routine wellness visit</h3>
<p>Bella, a four-year-old Labrador, comes in for her annual check. The clinic is in a state where its veterinary services are not taxed, so tax is left at zero. Your situation may be different.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wellness exam, Dr. Patel, 14 Oct 2026</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>DHPP vaccine</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td>Rabies vaccine, 3-year</td><td>1</td><td>$30.00</td><td>$30.00</td></tr>
<tr><td>Heartworm and tick-borne disease test</td><td>1</td><td>$55.00</td><td>$55.00</td></tr>
<tr><td>Fecal parasite test</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>Heartworm preventive, monthly dose</td><td>6</td><td>$12.00</td><td>$72.00</td></tr>
<tr><td>Nail trim</td><td>1</td><td>$20.00</td><td>$20.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$332.00</strong></td></tr>
</tbody></table>
<p>Check the sum: 75 + 35 + 30 + 55 + 45 + 72 + 20 = 332. Seven clear lines answer every question the owner is likely to ask at the desk.</p>
<h3>Example 2: dental procedure with estimate and deposit</h3>
<p>Milo, a nine-year-old cat, needs a dental cleaning. The clinic gives a written estimate of $650 to $900 and asks for a deposit of half the low end: $650 x 50% = $325. Two extractions are needed. The final bill comes to $780, inside the estimate range.</p>
<table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>Pre-anaesthetic blood panel</td><td>$95.00</td></tr>
<tr><td>General anaesthesia and monitoring, 60 minutes</td><td>$210.00</td></tr>
<tr><td>Dental scale and polish</td><td>$180.00</td></tr>
<tr><td>Dental X-rays, full mouth</td><td>$120.00</td></tr>
<tr><td>Surgical extraction, 2 teeth at $60</td><td>$120.00</td></tr>
<tr><td>Pain relief to go home, 5 days</td><td>$55.00</td></tr>
<tr><td><strong>Total charges</strong></td><td><strong>$780.00</strong></td></tr>
<tr><td>Less deposit paid 20 Oct 2026</td><td>-$325.00</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$455.00</strong></td></tr>
</tbody></table>
<p>Check the sums: 95 + 210 + 180 + 120 + 120 + 55 = 780, and 780 - 325 = 455. Add the estimate number in the notes, for example "Estimate EST-0412, range $650 to $900", so the owner can see the bill stayed inside what they approved. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains how to record the upfront payment properly.</p>

<h2>How to create a veterinary invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> and pick the USA or UK preset, depending on where you practise. The UK preset sets pounds and VAT wording.</li>
<li>Upload your practice logo and enter your name, address, phone and any tax or VAT number.</li>
<li>Add the owner's details, and put the patient's name and species at the top of your first line description or in the notes.</li>
<li>Enter a unique invoice number, the invoice date and the due date.</li>
<li>Add each service, test, medicine and supply as its own line with a quantity and rate. Totals calculate automatically.</li>
<li>Set the tax rate only if your charges are taxable. The generator applies one tax rate per invoice, so if only retail products are taxable in your area, consider invoicing them separately.</li>
<li>Enter any deposit as amount paid so the balance due is correct.</li>
<li>Add notes: estimate reference, aftercare reminder, and payment details. Then download the PDF and email or print it.</li>
</ol>
<p>A calm, clinical design suits most practices. The <a href="/invoice-templates/minimal">minimal invoice template</a> prints cleanly and keep long line lists readable.</p>

<h2>Tax on veterinary services and products</h2>
<p>Tax on vet bills is not uniform, which is why one-line totals cause problems.</p>
<ul>
<li><strong>United States:</strong> professional veterinary services are commonly outside sales tax, but rules are set state by state. Retail items such as pet food, toys, shampoos and some non-prescription products are often taxable as goods. If you sell both, keep products on separate lines or a separate invoice. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> and the sibling article on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a> walk through the arithmetic, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out the figure.</li>
<li><strong>United Kingdom:</strong> VAT-registered practices generally charge VAT at the standard rate on their fees and goods. Once your taxable turnover passes the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a>, you must register and show VAT on your invoices. Our sibling guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> shows how to add or remove 20%.</li>
</ul>
<p>This is general information, not tax or legal advice. Check your state revenue department or HMRC, and confirm with a qualified accountant.</p>

<h2>UK vets: itemised bills and estimates after the CMA reforms</h2>
<p>If you practise in the UK, invoicing is now a compliance matter as well as good service. In March 2026 the Competition and Markets Authority concluded its market investigation into veterinary services. According to the <a href="https://www.gov.uk/government/news/cma-concludes-market-investigation-with-major-reforms-to-veterinary-sector" target="_blank" rel="noopener noreferrer">CMA's final decision announcement</a>, the main remedies include:</p>
<ul>
<li>Publishing a price list for standard services, including consultations, common procedures, diagnostics, written prescriptions and cremation options.</li>
<li>Giving a written estimate in advance for treatment expected to cost 500 pounds or more, including aftercare, with emergencies the only exception.</li>
<li>Providing an itemised bill.</li>
<li>Capping written prescription fees at 21 pounds for the first medicine and 12.50 pounds for each additional medicine, and telling owners they can ask for a written prescription.</li>
</ul>
<p>The CMA said its legally binding orders would be in place by 23 September 2026, with nearly all remedies taking effect within three to 12 months after that and smaller businesses getting three extra months for most of them. Check the CMA case page for the current timetable that applies to your practice. In practical terms, the habits in this guide, separate lines, an estimate reference and clear totals, are exactly what the new rules expect.</p>

<h2>Payment terms, deposits and payment plans</h2>
<p>Most pet owners pay at discharge, so many clinics print "Due on receipt" on every invoice. Our article on <a href="/blog/due-upon-receipt">due upon receipt</a> covers when that term works best. Other common arrangements:</p>
<ul>
<li><strong>Deposits for planned procedures:</strong> a share of the estimate, recorded and shown as paid on the final bill.</li>
<li><strong>Payment plans:</strong> for large surgical bills, a written plan with dates and amounts. See our <a href="/blog/payment-plan-agreement">payment plan agreement guide</a>, and record each instalment against the invoice as it arrives.</li>
<li><strong>Account clients:</strong> farms, stables, shelters and breeders often run monthly accounts on net 30 terms, billed with one invoice per month that lists each visit and animal.</li>
<li><strong>Referral and relief work:</strong> specialists and relief vets invoice the referring clinic, not the owner, usually monthly.</li>
</ul>
<p>If a bill goes unpaid, a polite, factual reminder works better than silence. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> give wording that keeps the relationship intact.</p>

<h2>Common veterinary invoice mistakes</h2>
<ul>
<li><strong>One lump sum.</strong> "Dental procedure, $780" invites questions and insurance delays. Itemize.</li>
<li><strong>Missing patient name.</strong> Owners with several animals, and their insurers, need to know which one was treated.</li>
<li><strong>No link to the estimate.</strong> If the final figure differs, the reason should be visible.</li>
<li><strong>Taxing everything or nothing.</strong> Services and retail products may be treated differently.</li>
<li><strong>Deposits not shown.</strong> Forgetting to subtract a deposit is the fastest way to lose a client's trust.</li>
<li><strong>Reused invoice numbers.</strong> Keep one sequence for the whole practice so your accounts reconcile.</li>
</ul>

<h2>Create your veterinary invoice</h2>
<p>A good veterinary invoice is specific, honest and easy to match against the estimate: patient name, dated lines for every exam, test, medicine and procedure, the right tax treatment, deposits subtracted and a clear balance. Build your next vet bill in the <a href="/invoice-generator">free invoice generator</a>, or compare layouts in our <a href="/invoice-templates">invoice templates gallery</a> before you start.</p>
`,
  },
  {
    slug: "music-lesson-invoice-template",
    title: "Music Lesson Invoice Template: Term Billing for Teachers",
    description:
      "Use this music lesson invoice template to bill weekly, monthly or term lessons, handle missed lessons and sibling discounts, and get paid on time.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "tutoring-invoice-template",
      "recurring-invoices-guide",
      "prorated-invoice",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "What should a music lesson invoice include?",
        a: "Include your name or studio name and contact details, the parent or adult student's name, the student's name and instrument, an invoice number and date, the billing period or term dates, the number and length of lessons, the rate, any books, exam entry or recital fees, discounts, the total, the due date and how to pay. A short note on your missed lesson policy saves many awkward conversations later.",
      },
      {
        q: "Should I bill music lessons per lesson, monthly or per term?",
        a: "Each works. Per-lesson billing suits adults and casual students but creates more admin and cancellations. Monthly billing is common in the US, often as a flat fee based on the yearly number of lessons divided by twelve. Term billing, paid in advance for 10 to 12 weeks, is standard in the UK and many studios. Term or monthly billing in advance gives the steadiest income.",
      },
      {
        q: "How do I invoice for a missed music lesson?",
        a: "Follow your written policy. Many teachers do not refund or credit lessons the student misses without notice, offer a limited number of make-up lessons for absences with notice, and always credit or reschedule lessons the teacher cancels. On the invoice, show the number of lessons in the period and list any credit as a separate negative line with a short reason, so the parent can see the adjustment.",
      },
      {
        q: "How much do music teachers charge per lesson?",
        a: "Rates vary widely with location, instrument, teacher qualifications and lesson length, from modest rates for students and beginners' teachers to premium rates for experienced, highly qualified teachers in big cities. There is no single official rate table. Research local studios and teachers with similar experience, then price lesson lengths consistently, for example making a 45-minute lesson 1.5 times your 30-minute rate.",
      },
      {
        q: "Do music teachers charge VAT in the UK?",
        a: "Private tuition can be exempt from VAT when it is given by a sole trader or partner in a personal capacity in a subject regularly taught in schools or universities, which usually covers instrumental and singing lessons. Tuition delivered by teachers you engage, or through a limited company, can be standard-rated. HMRC's VAT Notice 701/30 sets out the conditions, so check it and confirm with an accountant.",
      },
      {
        q: "How do I bill siblings or families with several students?",
        a: "Send one invoice per family with a separate line for each student, showing the student's name, instrument, lesson length and number of lessons. If you offer a sibling discount, show it as a separate negative line rather than quietly lowering the rate, so the full price and the saving are both clear. One invoice per family also means one payment to track instead of several.",
      },
      {
        q: "Should I charge for music books and exam fees on the invoice?",
        a: "Yes, as separate lines. List method books, sheet music, exam entry fees, recital or concert fees and accompanist fees individually with their price. If you pass an exam board fee straight through at cost, say so in the description. Keeping these items separate from tuition also helps with tax, since goods can be treated differently from lessons in some places.",
      },
      {
        q: "Can I use a free invoice generator for music lessons?",
        a: "Yes. A free invoice generator lets you add your studio name, list each student's lessons, books and fees, apply a discount and download a PDF to email to parents. It does not repeat invoices automatically or collect payments, so you create each term or monthly invoice yourself, but your draft stays in your browser, so updating dates and lesson counts takes a minute or two.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A music lesson invoice shows your studio details, the parent or student, the student's name and instrument, the billing period or term dates, the number and length of lessons with the rate, extras such as books or exam fees, any discount or credit, the total and the due date. Bill in advance per term or per month, with a written missed lesson policy.</p>

<p>Music teaching is steady, relationship-based work, but billing can become messy fast: a lesson missed for a school trip, a sibling discount, a term with a bank holiday in it, a method book bought for a student. A clear music lesson invoice template handles all of that in a format parents understand at a glance, and our <a href="/invoice-generator">free invoice generator</a> turns it into a PDF in minutes.</p>

<p>This guide covers what to include on a piano teacher invoice or any instrument teacher's bill, the three main billing models, how term billing works, missed lessons and make-ups, VAT and tax, a worked example with real arithmetic and the common mistakes that cause late payment.</p>

<h2>What to include on a music lesson invoice</h2>
<p>Parents read your invoice in a few seconds between other bills. Make every line obvious. Include:</p>
<ul>
<li><strong>Your details:</strong> your name or studio name, address or teaching area, phone, email and logo if you have one.</li>
<li><strong>Bill-to:</strong> the parent or guardian, or the adult student, with email and address.</li>
<li><strong>Student and instrument:</strong> for example "Ava Khan, piano". Essential when you teach siblings.</li>
<li><strong>Invoice number and date:</strong> a sequential number such as MUS-2026-031. Use our <a href="/tools/invoice-number-generator">invoice number generator</a> if you need a format.</li>
<li><strong>Billing period:</strong> the term or month, with dates, for example "Autumn term, 8 Sep to 14 Nov 2026".</li>
<li><strong>Lessons:</strong> number of lessons, length in minutes and rate per lesson.</li>
<li><strong>Extras:</strong> method books, sheet music, exam entry, recital fees or accompanist fees.</li>
<li><strong>Discounts and credits:</strong> sibling discounts, make-up credits or a prepayment discount, each on its own line.</li>
<li><strong>Payment terms:</strong> due date, accepted methods and what happens if payment is late.</li>
<li><strong>Policy reminder:</strong> one line on cancellations and make-up lessons.</li>
</ul>
<p>For one-to-one teaching in other subjects, the same structure applies. Our <a href="/blog/tutoring-invoice-template">tutoring invoice template</a> covers academic tutoring in more detail.</p>

<h2>Billing models: per lesson, monthly or term billing</h2>
<p>The way you bill has more effect on your income than almost anything else in your studio admin. Here is how the three common models compare:</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Best for</th><th>Main drawback</th></tr></thead><tbody>
<tr><td>Per lesson</td><td>Student pays for each lesson, before or after</td><td>Adults, casual or trial students</td><td>Frequent cancellations and many small payments to chase</td></tr>
<tr><td>Monthly flat fee</td><td>Yearly lessons times rate, divided into 12 equal payments</td><td>US studios, ongoing students</td><td>Needs a clear explanation of months with 3 or 5 weeks</td></tr>
<tr><td>Term billing</td><td>Fixed number of weeks paid in advance at the start of the term</td><td>UK and school-term schedules, children's lessons</td><td>Larger single payment for families</td></tr>
<tr><td>Lesson packages</td><td>Bundle of 5 or 10 lessons paid upfront, used within a time limit</td><td>Adults with irregular schedules</td><td>Tracking remaining lessons</td></tr>
</tbody></table>
<h3>How a flat monthly fee works</h3>
<p>Studios that bill monthly often charge the same amount every month, even though some months have five lesson weeks and others three. The fee is worked out from the year: if you teach 36 lessons a year at $40, that is 36 x $40 = $1,440, divided by 12 = $120 a month. Put that calculation in your studio policy so parents understand why a five-week month costs the same as a three-week one.</p>
<h3>How term billing works</h3>
<p>Term billing means one invoice at the start of each school term for every lesson in it. A 10-week term at $35 per 30-minute lesson is 10 x $35 = $350, due before or at the first lesson. It front-loads your cash, cuts down weekly chasing, and makes cancellations the student's cost rather than yours, provided your policy says so. If a student joins mid-term, bill only the remaining lessons. Our guide to the <a href="/blog/prorated-invoice">prorated invoice</a> shows how to work out a part-period charge.</p>
<p>Lesson packages work a lot like the session bundles coaches sell. The sibling guide to the <a href="/blog/life-coach-invoice-template">coaching invoice template</a> covers package billing if you want another angle on it.</p>

<h2>Setting your rates and lesson lengths</h2>
<p>There is no official rate table for music teachers. Rates depend on your instrument, qualifications, experience, location, whether you travel to students and the local market. Practical steps:</p>
<ol>
<li>List what similar teachers in your area charge for 30, 45 and 60-minute lessons.</li>
<li>Work out your costs: travel, instrument maintenance, sheet music, studio rent, insurance and unpaid admin time.</li>
<li>Set a base rate for 30 minutes, then scale longer lessons consistently, for example 1.5 times for 45 minutes and twice for 60 minutes.</li>
<li>Add a travel supplement if you teach in students' homes.</li>
<li>Review once a year and give notice of any increase before the new term.</li>
</ol>
<p>Our guides on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> and <a href="/blog/how-to-raise-prices">how to raise prices</a> go deeper into the numbers and the conversation with parents.</p>

<h2>Worked example: a term invoice for two siblings</h2>
<p>A piano and violin teacher bills one family for the autumn term. Both children have weekly 30-minute lessons at $35, the studio offers 10% off the second sibling's tuition, and one child needs a new method book. The figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Ava, piano, 30-min lessons, 8 Sep to 10 Nov 2026</td><td>10</td><td>$35.00</td><td>$350.00</td></tr>
<tr><td>Leo, violin, 30-min lessons, 8 Sep to 10 Nov 2026</td><td>10</td><td>$35.00</td><td>$350.00</td></tr>
<tr><td>Sibling discount, 10% of Leo's tuition</td><td>1</td><td>-$35.00</td><td>-$35.00</td></tr>
<tr><td>Method book, Violin Level 2</td><td>1</td><td>$12.50</td><td>$12.50</td></tr>
<tr><td colspan="3"><strong>Total due by first lesson</strong></td><td><strong>$677.50</strong></td></tr>
</tbody></table>
<p>Check the sums: 10 x $35 = $350 for each child, 10% of $350 = $35, and 350 + 350 - 35 + 12.50 = $677.50. Showing the discount as its own line keeps your full rate visible, which matters when the older child stops lessons and the discount ends. See our guide to adding a <a href="/blog/discount-on-invoice">discount on an invoice</a> for other ways to present it.</p>
<p>If Ava misses a lesson with notice and gets a make-up, nothing changes on this invoice. If you cancel a lesson yourself and cannot reschedule, credit it on the next term's invoice as "Credit, teacher cancellation 6 Oct, -$35.00".</p>

<h2>How to create a music lesson invoice in our generator</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> and choose your country preset, such as the <a href="/invoice-generator/usa">US invoice generator</a> or the UK version.</li>
<li>Add your studio name, contact details and logo.</li>
<li>Enter the parent's name and email as the client.</li>
<li>Set the invoice number, invoice date and a due date such as the first lesson of the term.</li>
<li>Add one line per student with the instrument, lesson length and term dates, the number of lessons as quantity and your rate.</li>
<li>Add books, exam fees and discounts as separate lines. The totals update automatically.</li>
<li>Write your payment details and a one-line cancellation policy in the notes, then download the PDF.</li>
</ol>
<p>Next term, open the same draft, change the dates and lesson counts and download a new PDF. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> has tips for keeping repeat billing consistent. For a creative look, the <a href="/invoice-templates/lavender">lavender invoice template</a> suits music studios well.</p>

<h2>Missed lessons, make-ups and cancellations</h2>
<p>Missed lessons cause more billing disputes for music teachers than anything else. Put a written policy in your studio agreement, share it at enrolment, and summarise it on each invoice. A common structure:</p>
<ul>
<li><strong>Student misses without notice:</strong> no credit and no make-up. The slot was reserved.</li>
<li><strong>Student misses with notice:</strong> a limited number of make-up lessons per term, for example one, subject to availability.</li>
<li><strong>Teacher cancels:</strong> always a make-up or a credit on the next invoice.</li>
<li><strong>Illness or emergencies:</strong> handled case by case, with online lessons as an option.</li>
<li><strong>Withdrawal mid-term:</strong> state the notice period and whether unused lessons are refunded.</li>
</ul>
<p>Whatever you choose, apply it the same way to every family. Showing credits as clear negative lines makes the policy visible without awkward conversations. If you need to correct an invoice already sent, our guide on the <a href="/blog/credit-note-guide">credit note</a> explains the clean way to do it.</p>

<h2>Recitals, exams, group classes and online lessons</h2>
<p>Many teachers earn more than weekly tuition, and each extra service needs its own line so parents can see what they are paying for.</p>
<ul>
<li><strong>Graded exams:</strong> list the exam board entry fee separately from any extra preparation lessons. If you pay the board on the family's behalf, say "exam entry fee, passed through at cost" so it is clear you are not marking it up.</li>
<li><strong>Accompanist fees:</strong> for exams and recitals, bill the accompanist's fee as its own line, or ask the accompanist to invoice the family directly.</li>
<li><strong>Recitals and concerts:</strong> a flat participation fee per student covers venue hire, programmes and your time on the day. Invoice it with the term fees or as a small separate invoice a few weeks before.</li>
<li><strong>Group classes:</strong> charge per student per term, with the class name, day and time in the description, and state a minimum class size in your policy.</li>
<li><strong>Online lessons:</strong> use the same rate and the same line format, adding "online" to the description. Remote students in other countries may need an invoice in their own currency, so agree that before the first lesson.</li>
</ul>
<p>Keeping these items separate also makes your year-end bookkeeping easier, because you can see at a glance how much of your income came from tuition and how much from exams, books and events.</p>

<h2>Tax and VAT on music lessons</h2>
<p>Most self-employed music teachers report their lesson income as business income and can deduct related costs such as sheet music, instrument maintenance and travel. In the US, see our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>. Sales tax is often not charged on lessons, but books or instruments you sell can be taxable goods, so check your state's rules.</p>
<p>In the UK, private tuition can be exempt from VAT. HMRC's <a href="https://www.gov.uk/guidance/vat-on-education-and-vocational-training-notice-70130#private-tuition" target="_blank" rel="noopener noreferrer">VAT Notice 701/30 on private tuition</a> says the exemption covers a teacher acting in a personal capacity as a sole proprietor or member of a partnership, in a subject taught regularly in a number of schools or universities. If you engage other teachers, the tuition they deliver is standard-rated, and you may need to apportion your fees or treat them all as taxable. Books and materials not integral to the tuition can be standard-rated too. Our sibling guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> shows the arithmetic if VAT does apply. This is general information, not tax advice: confirm your position with HMRC guidance or an accountant.</p>

<h2>Common music lesson invoice mistakes</h2>
<ul>
<li><strong>No dates.</strong> "Piano lessons, $350" does not say which term. Always show the period.</li>
<li><strong>Billing in arrears for children's lessons.</strong> It encourages last-minute cancellations. Bill in advance.</li>
<li><strong>Hidden discounts.</strong> Lowering the rate instead of showing a discount line makes later price changes harder.</li>
<li><strong>No written cancellation policy.</strong> Every missed lesson becomes a negotiation.</li>
<li><strong>Separate invoices per child.</strong> Families prefer one bill and one payment.</li>
<li><strong>Late invoices.</strong> Send term invoices at least a week before the term starts so parents can budget.</li>
</ul>

<h2>Create your music lesson invoice</h2>
<p>A good music lesson invoice template is simple: the student and instrument, the period, the lesson count and rate, extras and discounts on their own lines, and a due date before the first lesson. Combine it with term or monthly billing in advance and a clear missed lesson policy, and payment becomes routine. Build your next music lesson invoice in the <a href="/invoice-generator">free invoice generator</a> and download a PDF ready to send to parents today.</p>
`,
  },
  {
    slug: "editing-proofreading-invoice-template",
    title: "Editing Invoice Template: Proofreading Rates and Billing",
    description:
      "Use this editing invoice template to bill proofreading, copyediting and developmental edits per word, page or hour, with 2026 EFA rate ranges and an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "copywriter-invoice-template",
      "translation-invoice-template",
      "freelance-invoice-template",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "What should an editing invoice include?",
        a: "An editing invoice should include your name or business name and contact details, the client's details, a unique invoice number and date, the project or manuscript title, the type of edit such as proofreading or copyediting, the word count, pages or hours, your rate, any rush fee or extra pass, deposits received, the balance due, the due date and how to pay. Add the delivery date of the edited file as well.",
      },
      {
        q: "How much do proofreaders charge per word in 2026?",
        a: "The Editorial Freelancers Association's 2026 rate chart, based on a member survey covering 2025 work, shows proofreading ranges from about 1.2 to 2.0 cents per word for fiction and 2.0 to 3.0 cents for nonfiction and business writing, with academic and medical work higher. The EFA does not set rates, so treat these as benchmarks rather than a price list.",
      },
      {
        q: "Should editors charge per word, per page or per hour?",
        a: "Per-word pricing is the most transparent for manuscripts because the client knows the cost upfront. Per-page pricing usually assumes 250 words per page, so it is simply per-word pricing in a different unit. Hourly billing suits messy, unpredictable or very technical documents. Many editors quote per word or a flat project fee, but track hours privately to check the job was profitable.",
      },
      {
        q: "What is the difference between proofreading and copyediting rates?",
        a: "Proofreading is a final check for typos, consistency and formatting errors, so it is the lightest and usually cheapest service. Copyediting corrects grammar, usage, consistency and style throughout, and line editing and developmental editing go deeper into sentences and structure. The EFA 2026 chart reflects that ladder: for fiction, proofreading sits below copyediting, which sits below line editing and developmental editing.",
      },
      {
        q: "Should editors take a deposit?",
        a: "Yes, for most book-length projects. A common approach is 25% to 50% when the client books the slot, with the balance due on delivery or in milestones for long projects. Issue a deposit invoice, then show the deposit as an amount paid on the final invoice. A deposit protects the time you reserved if the author pulls out or delivers the manuscript late.",
      },
      {
        q: "How do I calculate word count for an editing invoice?",
        a: "Use the word count from the client's file before you start, and state in your agreement whether footnotes, references, captions and appendices are included. Put the exact count on the invoice, such as 82,000 words, and the rate. If the client sends a longer version later, issue a revised quote or a separate invoice for the extra words rather than absorbing the difference.",
      },
      {
        q: "Do I need to send a 1099 or charge tax as an editor?",
        a: "In the US, business clients who pay a freelance editor more than the IRS reporting threshold for the year may need to issue a Form 1099-NEC, and you report all of your editing income whether or not you receive one. Editing services are generally not subject to sales tax in most places. In the UK you charge VAT only once VAT-registered. Check current rules with an adviser.",
      },
      {
        q: "Can I use a free invoice generator for editing work?",
        a: "Yes. A free invoice generator lets you enter the word count as a quantity and a per-word rate such as 0.024, add rush fees or extra passes as separate lines, record a deposit as amount paid and download a professional PDF. It is ideal for freelance editors and proofreaders who invoice a handful of clients a month and do not need full accounting software.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An editing invoice template lists your details and the client's, an invoice number and date, the manuscript title, the type of edit, the word count, pages or hours, your rate per word or hour, any rush fee or extra pass, deposits paid and the balance due. Per-word pricing is the clearest for clients, and 2026 EFA survey data gives a useful benchmark.</p>

<p>Freelance editors and proofreaders sell careful, invisible work. The client sees a cleaner manuscript, not the hours behind it, so the invoice has to explain the value in plain numbers: how many words, which level of edit, at what rate. A clear editing invoice template does that, and you can build one in a couple of minutes with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This guide covers what to include on an editing or proofreading invoice, the main pricing methods, current proofreading rates per word from the Editorial Freelancers Association's 2026 chart, deposits and milestones, a worked example with real arithmetic and the billing mistakes that cost editors money.</p>

<h2>What to include on an editing invoice template</h2>
<p>Whether you edit novels, theses, reports or marketing copy, the core fields are the same:</p>
<ul>
<li><strong>Your details:</strong> name or business name, email, address and logo if you have one.</li>
<li><strong>Client details:</strong> the author, publisher, agency or company, with a contact name and email.</li>
<li><strong>Invoice number and date:</strong> sequential, for example EDT-2026-047, with no gaps or repeats.</li>
<li><strong>Project:</strong> the manuscript or document title and the version or file name you worked on.</li>
<li><strong>Service level:</strong> proofreading, copyediting, line editing or developmental edit, plus the number of passes.</li>
<li><strong>Quantity:</strong> word count, pages at 250 words each, or hours worked.</li>
<li><strong>Rate:</strong> per word, per page, per hour or a flat project fee.</li>
<li><strong>Extras:</strong> rush fees, style sheet creation, a second pass, or editorial letter.</li>
<li><strong>Payments:</strong> deposit or milestone payments already received and the balance due.</li>
<li><strong>Terms:</strong> due date, payment methods and currency, especially for international clients.</li>
</ul>
<p>If you also write for clients, the same structure works for writing work. See our <a href="/blog/copywriter-invoice-template">copywriter invoice template</a> guide for content billing, and the <a href="/blog/translation-invoice-template">translation invoice template</a> if you translate as well as edit.</p>

<h2>Pricing methods: per word, per page, per hour or per project</h2>
<p>How you price changes how your invoice reads and how much risk you carry.</p>
<table><thead><tr><th>Method</th><th>How it is calculated</th><th>Invoice line example</th><th>Best for</th></tr></thead><tbody>
<tr><td>Per word</td><td>Word count x rate</td><td>Copyedit, 82,000 words x $0.024</td><td>Manuscripts and long documents with a known count</td></tr>
<tr><td>Per page</td><td>Pages x rate, usually 250 words per page</td><td>Proofread, 50 pages x $5.00</td><td>Clients who think in pages, academic work</td></tr>
<tr><td>Per hour</td><td>Hours x hourly rate</td><td>Editing, 6.5 hours x $50.00</td><td>Messy, technical or unpredictable jobs</td></tr>
<tr><td>Flat project fee</td><td>Fixed price agreed upfront</td><td>Developmental edit and editorial letter</td><td>Experienced editors who estimate accurately</td></tr>
</tbody></table>
<p>Per-word quotes are the most transparent, which is why many clients ask for them. Hourly billing protects you on difficult texts but makes the final cost uncertain for the client. If you bill hourly, keep a timesheet and attach a summary. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> shows how to present it.</p>
<h3>Converting between per word and per page</h3>
<p>The industry convention is 250 words per manuscript page. A rate of 2 cents per word is therefore $0.02 x 250 = $5.00 per page, and an 82,000-word manuscript is 82,000 / 250 = 328 pages. Show the word count on the invoice even when you quote per page, so the client can check your maths.</p>

<h2>Proofreading rates per word and editing rates in 2026</h2>
<p>The <a href="https://www.the-efa.org/wp-content/uploads/2026/03/2026-Rate-Chart.pdf" target="_blank" rel="noopener noreferrer">Editorial Freelancers Association 2026 rate chart</a> is the most widely cited benchmark. It is based on a survey of EFA members run from November 2025 to mid-January 2026, with over 1,100 respondents reporting the rates they charged in 2025, and it uses 250 words per page. The EFA states that it does not set rates or advise members which rates to use, so treat the ranges as context, not a price list. Selected ranges from the chart, as of 2026:</p>
<table><thead><tr><th>Service and genre</th><th>Per word</th><th>Per hour</th></tr></thead><tbody>
<tr><td>Proofreading, fiction</td><td>1.2 to 2.0 cents</td><td>$35 to $45</td></tr>
<tr><td>Proofreading, nonfiction</td><td>2.0 to 3.0 cents</td><td>$40 to $55</td></tr>
<tr><td>Proofreading, business and marketing</td><td>2.0 to 3.0 cents</td><td>$45 to $60</td></tr>
<tr><td>Proofreading, medical</td><td>3.0 to 4.0 cents</td><td>$55 to $65</td></tr>
<tr><td>Copyediting, fiction</td><td>2.0 to 2.7 cents</td><td>$40 to $50</td></tr>
<tr><td>Copyediting, nonfiction</td><td>3.0 to 4.0 cents</td><td>$45 to $60</td></tr>
<tr><td>Line editing, fiction</td><td>2.7 to 3.5 cents</td><td>$50 to $60</td></tr>
<tr><td>Developmental editing, fiction</td><td>3.0 to 3.5 cents</td><td>$52.50 to $70</td></tr>
<tr><td>Developmental editing, nonfiction</td><td>4.0 to 5.0 cents</td><td>$57.50 to $70</td></tr>
</tbody></table>
<p>The pattern is consistent: lighter edits cost less per word, and specialist subjects such as medical, legal, technical and academic STEM work sit higher. Your own rate should reflect your experience, turnaround time, the condition of the text and your local costs. For a broader look at pricing creative services, see our guides on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> and the sibling article on <a href="/blog/freelance-writing-rates">freelance writing rates</a>.</p>

<h2>Worked example: invoicing a copyedit with a deposit</h2>
<p>An editor agrees to copyedit an 82,000-word novel at 2.4 cents per word, within the EFA fiction range. She asks for 50% upfront to reserve the slot and the balance on delivery. She also creates a style sheet for a flat $75, and the author asks for a 48-hour rush on the final chapter check, priced at $60.</p>
<p>The quote: 82,000 x $0.024 = $1,968.00. The deposit: $1,968 x 50% = $984.00, invoiced and paid when the author booked.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Copyedit, "The Salt Road", manuscript v3, words</td><td>82,000</td><td>$0.024</td><td>$1,968.00</td></tr>
<tr><td>Style sheet</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Rush review of final chapter, 48 hours</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$2,103.00</strong></td></tr>
<tr><td colspan="3">Less deposit paid 2 Sep 2026</td><td>-$984.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$1,119.00</strong></td></tr>
</tbody></table>
<p>Check the sums: 1,968 + 75 + 60 = 2,103, and 2,103 - 984 = 1,119. Showing the word count as the quantity lets the author verify the figure against their own file. Our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how to issue the upfront bill, and <a href="/blog/milestone-payments">milestone payments</a> covers longer projects split into stages.</p>
<h3>A quick hourly example</h3>
<p>A business client sends a report that needs heavy fixes, so you bill hourly: 6.5 hours x $50 = $325.00. Put the hours as the quantity and the rate per hour, with a short description such as "Copyedit and tracked changes, Q3 board report".</p>

<h2>How to create an editing invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> and choose your country preset.</li>
<li>Add your name, business name, contact details and logo.</li>
<li>Enter the client's name, company and email.</li>
<li>Add the invoice number, date and due date. Net 14 or due on delivery is common for individual authors.</li>
<li>Add your main line: service, manuscript title and version, word count as quantity, per-word rate as the rate. The total calculates automatically.</li>
<li>Add extras such as rush fees, a second pass or a style sheet as separate lines.</li>
<li>Enter any deposit as amount paid so the balance is correct.</li>
<li>Add payment details and download the PDF.</li>
</ol>
<p>A clean, text-focused design fits editorial work. The <a href="/invoice-templates/classic">classic invoice template</a> feels calm and literary.</p>

<h2>Scope, revisions and changes to word count</h2>
<p>Most editing disputes are really scope disputes. Write these points into your agreement before you start, and refer to them on the invoice:</p>
<ul>
<li><strong>What counts toward word count:</strong> main text only, or also front matter, footnotes, references and captions.</li>
<li><strong>Number of passes:</strong> one pass for proofreading, or a copyedit plus a review of the author's changes.</li>
<li><strong>Turnaround:</strong> the delivery date, and the rush fee for anything faster.</li>
<li><strong>Manuscript changes:</strong> if the author adds 10,000 words mid-project, those words are billed at the same rate as an extra line.</li>
<li><strong>Cancellation:</strong> what happens to the deposit if the project is cancelled or delayed.</li>
</ul>
<p>Our <a href="/blog/freelance-contract-template">freelance contract template</a> covers these clauses, and the guide on <a href="/blog/scope-creep-change-order">scope creep and change orders</a> shows how to bill extra work fairly.</p>

<h2>Billing publishers, agencies and academic clients</h2>
<p>Different client types expect different invoices, and matching their process gets you paid sooner.</p>
<h3>Independent authors</h3>
<p>Self-publishing authors are usually paying from personal funds. They value a clear quote, a deposit that secures their slot and a final invoice that matches the quote exactly. Send the balance invoice with the edited file, or just before, so payment and delivery happen together.</p>
<h3>Publishers and packagers</h3>
<p>Traditional publishers and book packagers often issue a purchase order or contract with a fixed fee per title. Quote their reference number on your invoice, use the exact title and ISBN if they give you one, and follow their accounts payable instructions on where to send the invoice. Many pay on fixed monthly cycles, so invoice promptly on delivery to catch the next run.</p>
<h3>Agencies and businesses</h3>
<p>Content agencies and corporate clients often batch work. A monthly invoice that lists each document, its word count and its date keeps their approvals simple. Ask whether they need a W-9 or supplier form before the first invoice so payment is not held up.</p>
<h3>Students and academics</h3>
<p>For theses and journal articles, state the word count, the style guide, such as APA or Chicago, and the scope of the edit. Many universities have rules on what editors may change in assessed work, so describe the service accurately on the invoice, for example "Proofreading for language and consistency, no content changes".</p>

<h2>Getting paid: terms, platforms and taxes</h2>
<p>Individual authors often pay on delivery, while publishers and agencies may run their own payment cycles of net 30 or longer. Agree terms before the work starts and print the due date on every invoice. If you find clients on marketplaces, platform fees change your effective rate, so read the sibling guide on <a href="/blog/upwork-fees">Upwork fees</a> before you quote there.</p>
<p>For international clients, invoice in an agreed currency and state the currency code. Our guide on how to <a href="/blog/invoice-international-clients">invoice international clients</a> covers exchange rates and payment methods.</p>
<p>On tax: in the US, editing income is self-employment income, and business clients may send a Form 1099-NEC. The sibling guide on <a href="/blog/how-to-file-1099-nec">how to file a 1099-NEC</a> explains the client side. Editing services are generally not subject to sales tax, and in the UK you only add VAT once you are VAT-registered. This is general information, not tax advice, so check with an accountant.</p>

<h2>Common editing invoice mistakes</h2>
<ul>
<li><strong>No word count.</strong> "Editing, $1,968" hides the basis of your price. Show quantity and rate.</li>
<li><strong>Unclear service level.</strong> Clients often confuse proofreading with copyediting. Name the service exactly.</li>
<li><strong>Forgetting the deposit.</strong> Always subtract it, with the date it was paid.</li>
<li><strong>Absorbing extra words.</strong> A longer manuscript is new work. Bill it.</li>
<li><strong>Vague due dates.</strong> "Payment on completion" is not a date. Print one.</li>
<li><strong>Rounding the rate.</strong> If you quoted 2.4 cents, invoice 2.4 cents, not a rounded total.</li>
</ul>

<h2>Create your editing invoice</h2>
<p>A strong editing invoice template is precise, like your editing: the service level, the word count, the rate, extras on their own lines and any deposit subtracted. Benchmark your rates against current EFA data, set scope in writing and print a real due date. Build your next proofreading or editing invoice in the <a href="/invoice-generator">free invoice generator</a> and send a polished PDF today.</p>
`,
  },
  {
    slug: "vacation-rental-invoice-template",
    title: "Vacation Rental Invoice Template: Airbnb and Direct Bookings",
    description:
      "Use this vacation rental invoice template for Airbnb-style and direct bookings: nightly rate, cleaning fee, occupancy tax and deposits, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "hotel-invoice-template",
      "rent-invoice-template",
      "property-management-invoice-template",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "Does Airbnb provide an invoice for guests?",
        a: "Yes. When a guest books through Airbnb, the platform issues the booking receipt, and in many countries a VAT invoice for its own service fee. Hosts usually do not need to issue a separate invoice for platform bookings. A host invoice is mainly needed for direct bookings, corporate guests who need a company-addressed invoice, or extra charges agreed outside the platform's checkout flow.",
      },
      {
        q: "What should a vacation rental invoice include?",
        a: "Include your name or rental business and contact details, the guest's name and address, a unique invoice number and date, the property address, check-in and check-out dates, number of nights and nightly rate, cleaning and pet fees, any occupancy or sales taxes, the security deposit shown separately, payments already received, the balance and the due date. Add your cancellation policy in the notes.",
      },
      {
        q: "How much does Airbnb charge hosts in 2026?",
        a: "Airbnb's help center says most hosts on the single host-only fee pay 15.5% of the booking subtotal, with others typically between 14% and 16% and hosts in Brazil and Mexico at 16%. The older split fee, where most hosts pay 3% and guests pay a separate fee, is being phased out. Check your own payout breakdown, as the rate depends on your listing and country.",
      },
      {
        q: "Do I charge occupancy tax on a vacation rental invoice?",
        a: "Usually yes, if the property is in a place that levies lodging, occupancy or tourist taxes on short stays. Airbnb collects and remits some of these taxes on hosts' behalf in certain jurisdictions, but hosts remain responsible for any taxes the platform does not cover, and for direct bookings you collect them yourself. Check your state and local tax authority for rates and registration.",
      },
      {
        q: "Should the security deposit be on the invoice?",
        a: "Show it, but keep it separate from the rental charges. A refundable security deposit is not income unless you keep it for damage, so list it below the taxable total or on a separate deposit receipt, with the refund date and conditions. If you deduct for damage after check-out, issue an itemized statement showing what you kept and why, with photos referenced.",
      },
      {
        q: "Is the cleaning fee taxable on a short-term rental?",
        a: "In many places a mandatory cleaning fee is treated as part of the taxable rent for occupancy tax purposes, because the guest must pay it to stay. Optional extras can be treated differently. Rules vary by state, county and city, so check with the local tax authority. If the cleaning fee is taxable where you are, include it in the amount you calculate tax on.",
      },
      {
        q: "Do I need to report rental income if I only rent for a few days?",
        a: "In the US, IRS guidance has a special rule: if you use a dwelling unit as a residence and rent it for fewer than 15 days in the year, you do not report the rental income and do not deduct rental expenses. Rent for more days and the income is reportable. Other countries have their own rules, so check with a tax adviser for your situation.",
      },
      {
        q: "Can I use a free invoice generator for vacation rental bookings?",
        a: "Yes. A free invoice generator lets you add nights as a quantity, your nightly rate, cleaning and pet fees, one tax rate for occupancy tax and any deposit as amount paid, then download a PDF to email the guest. It does not take card payments, manage calendars or sync with Airbnb, so it suits hosts handling direct and repeat bookings alongside a platform.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A vacation rental invoice, sometimes called an Airbnb invoice, shows the host and guest details, the property, check-in and check-out dates, nights x nightly rate, cleaning and other fees, occupancy taxes, payments received and the balance due, with any refundable security deposit listed separately. Airbnb issues its own receipts, so host invoices are mainly for direct bookings and business guests.</p>

<p>Short-term rental hosts handle more paperwork than most people expect: platform payouts, direct bookings from repeat guests, corporate stays that need a company invoice, occupancy taxes and security deposits. A clear vacation rental invoice template keeps all of that tidy, and our <a href="/invoice-generator">free invoice generator</a> produces one in a few minutes.</p>

<p>This guide explains when you need your own invoice versus the platform's receipt, what to include, how Airbnb's 2026 host fees affect your pricing, occupancy tax and cleaning fees, security deposits, a worked example with real arithmetic and the mistakes that lead to disputes or tax problems.</p>

<h2>Airbnb receipt vs your own vacation rental invoice</h2>
<p>When a guest books through Airbnb or a similar platform, the platform takes payment and gives the guest a receipt. In many countries the platform also issues an invoice for its own service fee. So when do you need your own short-term rental receipt or invoice?</p>
<ul>
<li><strong>Direct bookings:</strong> repeat guests or referrals who book with you by email or phone and pay you directly.</li>
<li><strong>Business travellers:</strong> companies that need an invoice addressed to the employer with their tax ID or a PO number.</li>
<li><strong>Extra charges after the stay:</strong> damage, extra guests or late check-out charges agreed outside the platform's resolution process.</li>
<li><strong>Longer stays:</strong> monthly stays billed in instalments, which work more like a <a href="/blog/rent-invoice-template">rent invoice</a>.</li>
<li><strong>Property managers:</strong> owners billed by a manager for management fees and costs. Our <a href="/blog/property-management-invoice-template">property management invoice template</a> covers that side.</li>
</ul>
<p>For platform bookings, do not issue a second invoice for the same stay. The guest has already paid and received a receipt, and a duplicate document causes confusion.</p>

<h2>What a vacation rental invoice should include</h2>
<p>Guests compare your invoice with what you quoted, so every number should be traceable:</p>
<ul>
<li><strong>Host details:</strong> your name or rental business, contact details and any local registration or permit number your city requires.</li>
<li><strong>Guest details:</strong> name, address and email, plus company details for business stays.</li>
<li><strong>Invoice number and date:</strong> a unique number such as STR-2026-058.</li>
<li><strong>Property:</strong> the listing name and address.</li>
<li><strong>Stay dates:</strong> check-in and check-out dates and the number of nights.</li>
<li><strong>Accommodation:</strong> nights x nightly rate, with weekend or seasonal rates on separate lines if they differ.</li>
<li><strong>Fees:</strong> cleaning fee, pet fee, extra guest fee, early check-in or linen fee.</li>
<li><strong>Taxes:</strong> lodging, occupancy, tourist or sales tax as they apply.</li>
<li><strong>Payments:</strong> booking deposit received and the balance with its due date.</li>
<li><strong>Security deposit:</strong> shown separately with refund terms.</li>
<li><strong>Policies:</strong> cancellation terms and house rules reference.</li>
</ul>
<p>The structure is close to a hotel folio. Our <a href="/blog/hotel-invoice-template">hotel invoice template</a> guide covers multi-room and corporate billing if you run several units.</p>

<h2>Airbnb host fees in 2026 and how they affect pricing</h2>
<p>Platform fees decide how much of the nightly rate you actually keep, which in turn shapes what you charge for direct bookings. According to <a href="https://www.airbnb.com/help/article/1857" target="_blank" rel="noopener noreferrer">Airbnb's help center article on service fees</a>, as of 2026:</p>
<table><thead><tr><th>Fee structure</th><th>Host pays</th><th>Guest pays</th><th>Status</th></tr></thead><tbody>
<tr><td>Single (host-only) fee</td><td>Most hosts 15.5%; others typically 14% to 16%; Brazil and Mexico 16%</td><td>No separate guest service fee</td><td>Mandatory for most hosts, including those using property management software</td></tr>
<tr><td>Split fee</td><td>Most hosts 3%, some more; Brazil and Mexico 4%</td><td>A separate guest service fee at checkout</td><td>Being phased out</td></tr>
</tbody></table>
<p>Under the host-only fee, the guest sees one all-in price and your payout is that price minus the fee. On a booking subtotal of $880, a 15.5% fee is $880 x 0.155 = $136.40, so the payout before taxes is $880 - $136.40 = $743.60. Check your own payout breakdown, because your rate depends on your listing type and country.</p>
<p>That gap is why many hosts offer repeat guests a slightly lower direct rate: both sides save, as long as you handle payment, invoicing and taxes properly yourself. If you take card payments directly, factor in your processor's fees as well. The sibling guide on <a href="/blog/stripe-fees">Stripe fees</a> explains the costs.</p>

<h2>Occupancy tax, cleaning fees and other charges</h2>
<h3>Occupancy and lodging taxes</h3>
<p>Many states, counties and cities tax short stays through lodging, occupancy, hotel or tourist taxes, sometimes alongside sales tax. Airbnb's help center says that in certain jurisdictions it calculates and collects these taxes from guests at booking and remits them on hosts' behalf, but hosts in those areas remain responsible for any other tax obligations, including other state and city taxes. For direct bookings, there is no platform in the middle: you charge the tax, collect it and file it.</p>
<p>Look up your property's address with the state department of revenue and the city or county, register where required, and charge the combined rate on your invoices. The sibling guide on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a> shows the arithmetic, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out the figure. In the UK and EU, VAT may apply to holiday accommodation once you are registered. See the sibling guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a>.</p>
<h3>Cleaning fees</h3>
<p>A mandatory cleaning fee is often treated as part of the taxable rent, because the guest cannot stay without paying it. List it as its own line so the guest sees it, and include it in your taxable total if that is how your jurisdiction treats it. If you hire cleaners, the sibling guide on <a href="/blog/how-to-start-a-cleaning-business">how to start a cleaning business</a> shows things from your cleaner's side, including how they will invoice you.</p>
<h3>Other fees</h3>
<p>Pet fees, extra guest fees, early check-in and late check-out each belong on their own line. Avoid surprise fees that were not in the quote: they are the most common reason guests dispute a direct-booking invoice.</p>

<h2>Worked example: a direct booking invoice</h2>
<p>A repeat guest books a cabin directly for four nights at $180 per night. The host charges a $120 cleaning fee and a $40 pet fee. For this illustration, assume a combined occupancy tax rate of 10% that applies to the nightly rate and all mandatory fees. Your actual rate and rules will differ. The guest paid 50% at booking and the balance is due 14 days before arrival. A $300 refundable security deposit is held separately.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Lakeview Cabin, nights 6 to 10 Nov 2026</td><td>4</td><td>$180.00</td><td>$720.00</td></tr>
<tr><td>Cleaning fee</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Pet fee, 1 dog</td><td>1</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$880.00</td></tr>
<tr><td colspan="3">Occupancy tax, 10% (illustrative)</td><td>$88.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$968.00</strong></td></tr>
<tr><td colspan="3">Less booking payment received 1 Oct 2026</td><td>-$484.00</td></tr>
<tr><td colspan="3"><strong>Balance due 23 Oct 2026</strong></td><td><strong>$484.00</strong></td></tr>
</tbody></table>
<p>Check the sums: 4 x 180 = 720; 720 + 120 + 40 = 880; 10% of 880 = 88; 880 + 88 = 968; half of 968 = 484, so the balance is 968 - 484 = 484. The $300 security deposit goes in the notes or on a separate deposit receipt, not in the total, because it is refundable and not rental income unless you keep it for damage. Our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how to bill the booking payment.</p>

<h2>How to create a vacation rental invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> and choose your country preset, such as the <a href="/invoice-generator/usa">US invoice generator</a> or the UAE version for Dubai holiday homes.</li>
<li>Add your rental business name, contact details, logo and any local permit number.</li>
<li>Enter the guest's name, email and address, or company details for business stays.</li>
<li>Set the invoice number, date and balance due date.</li>
<li>Add the stay as one line with the number of nights as quantity and your nightly rate.</li>
<li>Add cleaning, pet and other fees as separate lines.</li>
<li>Enter the combined occupancy tax rate. The generator applies one tax rate to the invoice, so if some fees are not taxable where you are, bill them on a separate invoice or ask your adviser how to present them.</li>
<li>Enter the booking payment as amount paid, add the security deposit and cancellation policy in the notes, and download the PDF.</li>
</ol>
<p>A relaxed, coastal look suits holiday lets. The <a href="/invoice-templates/ocean">ocean invoice template</a> works well for cabins and beach houses.</p>

<h2>Business guests, long stays and repeat bookings</h2>
<p>Direct bookings often come from your best guests: companies housing staff, families who return every summer and contractors on long projects. Each needs a slightly different invoice.</p>
<ul>
<li><strong>Corporate stays:</strong> address the invoice to the company, include its billing address, tax ID or VAT number if it asks, the guest's name and any PO or cost-centre reference. Many companies cannot pay an invoice addressed only to an individual.</li>
<li><strong>Long stays:</strong> for a month or longer, bill in advance per week or per month, with each invoice covering a clear date range. Check local rules, because stays above a certain length can be treated differently for occupancy tax or tenancy law.</li>
<li><strong>Repeat guests:</strong> keep the same line format every year, so guests can compare prices easily, and note any returning-guest discount as a separate negative line.</li>
<li><strong>Group bookings:</strong> if several guests split the cost, issue one invoice to the lead booker and let them collect shares, rather than splitting the booking into several invoices.</li>
</ul>

<h2>Security deposits, damage and cancellations</h2>
<ul>
<li><strong>Security deposits:</strong> state the amount, how it is held, and the refund date, for example within seven days of check-out. Keep it out of your taxable total.</li>
<li><strong>Damage charges:</strong> if you keep part of a deposit, send an itemized statement listing each repair or replacement with its cost and photos referenced.</li>
<li><strong>Cancellations:</strong> spell out refund tiers by date in your booking terms, and if you keep a cancellation fee, issue an invoice or receipt for that fee only.</li>
<li><strong>Refunds:</strong> if you refund part of a payment, issue a <a href="/blog/credit-note-guide">credit note</a> rather than editing the original invoice.</li>
</ul>

<h2>Income tax, records and common mistakes</h2>
<p>Keep every invoice, platform payout statement and expense receipt. In the US, the <a href="https://www.irs.gov/taxtopics/tc415" target="_blank" rel="noopener noreferrer">IRS guidance on renting residential and vacation property</a> includes a special rule: if you use a dwelling as a residence and rent it for fewer than 15 days in the year, you do not report the rental income or deduct rental expenses. A unit counts as a residence if your personal use exceeds the greater of 14 days or 10% of the days it is rented at a fair price. Beyond that, the income is reportable, and platforms may also send information returns. Our guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a> explains when that happens. This is general information, not tax advice: rules differ by country and situation, so speak to an accountant.</p>

<h3>Common vacation rental invoice mistakes</h3>
<ul>
<li><strong>Invoicing platform bookings twice.</strong> Airbnb already issued the receipt.</li>
<li><strong>Mixing the security deposit into the total.</strong> It inflates income and the tax base.</li>
<li><strong>Forgetting occupancy tax on direct bookings.</strong> You owe it whether or not you charged it.</li>
<li><strong>No stay dates.</strong> Always show check-in, check-out and nights.</li>
<li><strong>Surprise fees.</strong> Every fee should match the quote the guest accepted.</li>
</ul>

<h2>Create your vacation rental invoice</h2>
<p>A good vacation rental invoice template is transparent: nights x rate, each fee on its own line, the right occupancy tax, payments received, a clear balance and the security deposit kept separate. Use the platform's receipts for platform bookings and your own invoice for direct and business stays. Build your next Airbnb-style invoice in the <a href="/invoice-generator">free invoice generator</a> and send it to your guest as a PDF today.</p>
`,
  },
  {
    slug: "equipment-rental-invoice-template",
    title: "Equipment Rental Invoice Template: Rates, Waivers and Fees",
    description:
      "Use this equipment rental invoice template to bill daily, weekly and monthly rates, damage waivers, delivery, fuel and late returns, with a worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "car-rental-invoice-template",
      "construction-invoice-guide",
      "contractor-invoice-template",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "What should an equipment rental invoice include?",
        a: "Include your company details, the customer and job site, a unique invoice number and date, the rental agreement or contract number, each item with make, model and serial or asset number, the out and return dates and times, the rate period such as day, week or four weeks, delivery and pickup, damage waiver, fuel, cleaning, any damage or late charges, tax, deposits and the balance due.",
      },
      {
        q: "What is a damage waiver on an equipment rental?",
        a: "A damage waiver is a charge, often a percentage of the rental, that limits the customer's responsibility for accidental damage to the equipment. It is not insurance, and it usually excludes misuse, theft, negligence or certain parts. State whether it is optional or mandatory, what it covers and the excess, and list it as its own line so the customer can see exactly what they paid for.",
      },
      {
        q: "How do equipment rental companies charge: daily, weekly or monthly?",
        a: "Most rental houses publish day, week and four-week rates, and the weekly and four-week rates cost far less than paying the daily rate for every day. Invoice the cheapest combination of periods that covers the actual rental time, and say how you round, for example any time over a set grace period counts as an extra day. Print the rate period on each line.",
      },
      {
        q: "Is a damage waiver taxable?",
        a: "It depends on the state and on how the waiver is sold. California's tax agency, for example, says a damage waiver the customer must buy on a taxable lease is taxable, while optional charges the customer is not obliged to pay are generally not. Other states have different rules. Check your state revenue department's guidance on rentals before deciding how to tax each line.",
      },
      {
        q: "Should I charge a security deposit for equipment rental?",
        a: "Many rental companies take a deposit or a card hold for new or cash customers, and use credit accounts for established contractors. Record the deposit in the rental agreement, show it on the invoice as a payment or note, and refund or apply it according to your written terms. If you deduct for damage or cleaning, list each deduction as a separate line with its cost.",
      },
      {
        q: "How do I bill for late equipment returns?",
        a: "Set the rule in your rental agreement, such as charging an extra day for any return after the agreed time plus a grace period, then apply it consistently on the invoice. Show the agreed return date and the actual return date and time so the customer can see why the extra period was charged. In some states extra rental time is taxable like the original rental, so check local rules.",
      },
      {
        q: "Do I need a rental agreement as well as an invoice?",
        a: "Yes. The rental agreement is the contract signed at pickup or delivery: it covers responsibility for the equipment, use restrictions, damage waiver terms, insurance requirements and return conditions. The invoice is the bill for the rental period and charges. Put the agreement number on the invoice so both documents link together if there is a dispute about damage, timing or fees.",
      },
      {
        q: "Can I use a free invoice generator for equipment rentals?",
        a: "Yes, especially for small rental businesses, contractors renting out their own machines and party or AV rental companies. A free invoice generator lets you add each item, rate period and fee, apply one tax rate, record a deposit as amount paid and download a PDF. It does not track fleet availability or meter hours, so pair it with a simple log or rental software as you grow.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An equipment rental invoice lists the rental agreement number, each item with its model and serial or asset number, the out and return dates, the rate period such as day, week or four weeks, delivery and pickup, damage waiver, fuel and cleaning, any damage or late return charges, applicable tax, deposits received and the balance due. Each charge should match the signed rental agreement.</p>

<p>Equipment rental billing looks simple until a machine comes back a day late, low on fuel, caked in mud and with a cracked bucket tooth. Then every line on the invoice has to be justified against the rental agreement. A clear equipment rental invoice template does that work for you, and our <a href="/invoice-generator">free invoice generator</a> turns it into a professional PDF in a few minutes.</p>

<p>This guide is for small rental yards, contractors renting out their own machines, tool hire shops and party, event and AV rental businesses. It covers what to include, rate periods, damage waivers, delivery and fuel charges, tax on rentals, deposits, a worked example with real arithmetic and the mistakes that lead to disputes.</p>

<h2>What an equipment rental invoice should include</h2>
<p>Your invoice must tie back to the rental agreement the customer signed at pickup or delivery. Include:</p>
<ul>
<li><strong>Company details:</strong> business name, address, phone, email, logo and tax registration where required.</li>
<li><strong>Customer and job site:</strong> billing name, account number and the site address where the equipment was used, which can affect the tax rate.</li>
<li><strong>Invoice and agreement numbers:</strong> a sequential invoice number such as RNT-2026-0219 and the rental agreement number.</li>
<li><strong>PO number:</strong> contractors and larger customers often require one before they will pay.</li>
<li><strong>Equipment:</strong> make, model, and serial or asset number for each item.</li>
<li><strong>Rental period:</strong> date and time out, date and time returned, and the rate period charged.</li>
<li><strong>Meter readings:</strong> hour meter out and in, if you limit hours per shift.</li>
<li><strong>Fees:</strong> delivery and pickup, damage waiver, fuel, cleaning, environmental or disposal fees.</li>
<li><strong>Damage, loss or late charges:</strong> each as a separate line with a short explanation.</li>
<li><strong>Tax, deposit and balance:</strong> tax on the taxable lines, any deposit received and the amount due.</li>
</ul>

<h2>Rate periods: daily, weekly and four-week rentals</h2>
<p>Most rental businesses publish three rates per item, and each longer period is cheaper per day than the one below it. How you apply them on the invoice is where most customer questions come from.</p>
<table><thead><tr><th>Rate period</th><th>Typical use</th><th>How to bill it</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Half day or 4 hours</td><td>Small tools, quick jobs</td><td>Flat rate, with a set return time</td><td>Plate compactor, 4 hours</td></tr>
<tr><td>Day (often 8 hours or 24 hours)</td><td>Short jobs</td><td>Per calendar day or 24-hour period, as your agreement says</td><td>Scissor lift, 2 days x $185</td></tr>
<tr><td>Week</td><td>Projects of several days</td><td>Flat weekly rate, usually far below seven daily rates</td><td>Mini excavator, 1 week</td></tr>
<tr><td>Four weeks (monthly)</td><td>Long projects, site equipment</td><td>Flat four-week rate, then per week or day after</td><td>Generator, 4 weeks</td></tr>
</tbody></table>
<p>Two rules prevent most disputes. First, bill the cheapest combination of periods that covers the actual time: if a week costs less than five days, a customer who keeps a machine for five days should pay the weekly rate. Second, define the day: whether it is a calendar day, a 24-hour period or an 8-hour shift with overtime for extra meter hours. Print that definition on your rental agreement and refer to it in the invoice notes.</p>
<p>Partial periods at the end of a long rental work like a <a href="/blog/prorated-invoice">prorated invoice</a>: one extra day at the daily rate, or a pro rata share of the weekly rate, as your terms say.</p>

<h2>Damage waivers, delivery, fuel and other fees</h2>
<h3>Damage waiver</h3>
<p>A damage waiver limits what the customer pays if the equipment is accidentally damaged. Rental companies commonly price it as a percentage of the rental charge. It is not insurance, and it typically excludes misuse, negligence, theft, overloading, and wear items such as tyres, tracks or glass. On your invoice:</p>
<ul>
<li>List the waiver as a separate line with the percentage and the base it was calculated on.</li>
<li>State whether it was optional and accepted, or mandatory unless the customer provided proof of insurance.</li>
<li>Reference the waiver terms in the rental agreement.</li>
</ul>
<h3>Delivery and pickup</h3>
<p>Charge delivery and pickup as separate lines, often per trip or by distance zone. For large machines on a trailer, note the haul vehicle if your rates differ by size.</p>
<h3>Fuel, cleaning and consumables</h3>
<p>Machines usually leave full and should return full. If not, bill the refill per gallon or litre with the quantity. Charge cleaning only if your agreement sets a standard, such as "returned free of concrete and excess mud", and list consumables such as blades, bits or bags by quantity.</p>
<h3>Late returns, damage and loss</h3>
<p>Show the agreed and actual return times, and bill extra periods exactly as your terms say. For damage beyond the waiver, list each repair with parts and labour, and attach the inspection report or photos. If a machine is lost or stolen, bill the agreed replacement value separately from the rental.</p>
<p>The billing logic is the same one vehicle rental firms use. Our <a href="/blog/car-rental-invoice-template">car rental invoice template</a> guide covers mileage, fuel and damage on vehicles.</p>

<h2>Sales tax on equipment rentals</h2>
<p>In many US states, renting or leasing tangible personal property is taxed much like a sale, but the details vary a lot by state. Fees attached to the rental can be taxed differently too. The <a href="https://cdtfa.ca.gov/industry/rental-companies/industry-topics.htm" target="_blank" rel="noopener noreferrer">California CDTFA tax guide for rental companies</a> is a good example of how granular this gets:</p>
<ul>
<li>On a taxable heavy equipment lease, a damage waiver the customer is required to buy is taxable.</li>
<li>Optional charges the customer is not obliged to pay are generally not taxable, in the car rental context.</li>
<li>A late return charge is treated as an extra charge for use and is taxable, while a late payment charge is generally not.</li>
<li>Mandatory cleaning or maintenance charges are taxable, while separately stated optional ones are not, in the portable toilet rental context.</li>
</ul>
<p>Other states take different positions, and some taxes follow the location where the equipment is used rather than your yard. Equipment rented with an operator can also be treated as a service rather than a rental in some states. Check your state revenue department, and if you buy equipment purely to rent out, read the sibling guide on the <a href="/blog/resale-certificate">resale certificate</a>, since some states let rental companies buy rental fleet without paying sales tax up front. The sibling guide on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a> and our <a href="/tools/sales-tax-calculator">sales tax calculator</a> help with the arithmetic. This is general information, not tax advice: confirm with a tax professional.</p>

<h2>Worked example: a one-week mini excavator rental</h2>
<p>A landscaping contractor rents a mini excavator for one week. The weekly rate is $1,050. The customer accepts the optional 12% damage waiver. Delivery and pickup cost $75 each way. The machine comes back 8 gallons short on diesel, billed at $4.50 per gallon. For illustration, assume all lines are taxable at a combined 8% rate in this location. Your state may tax some lines and not others. The customer paid a $500 deposit at pickup, applied to the invoice under the rental agreement.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Mini excavator 3.5t, asset EX-014, 3 to 10 Nov 2026, weekly rate</td><td>1</td><td>$1,050.00</td><td>$1,050.00</td></tr>
<tr><td>Damage waiver, 12% of $1,050 rental (optional, accepted)</td><td>1</td><td>$126.00</td><td>$126.00</td></tr>
<tr><td>Delivery and pickup, zone 2</td><td>2</td><td>$75.00</td><td>$150.00</td></tr>
<tr><td>Diesel refill, gallons</td><td>8</td><td>$4.50</td><td>$36.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$1,362.00</td></tr>
<tr><td colspan="3">Sales tax, 8% (illustrative)</td><td>$108.96</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,470.96</strong></td></tr>
<tr><td colspan="3">Less deposit received 3 Nov 2026</td><td>-$500.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$970.96</strong></td></tr>
</tbody></table>
<p>Check the sums: 12% of 1,050 = 126; 2 x 75 = 150; 8 x 4.50 = 36; 1,050 + 126 + 150 + 36 = 1,362; 8% of 1,362 = 108.96; 1,362 + 108.96 = 1,470.96; and 1,470.96 - 500 = 970.96. Note that the weekly rate was used because the customer kept the machine for seven days, and the waiver is shown with its base so nobody has to guess how $126 was reached.</p>

<h2>How to create an equipment rental invoice step by step</h2>
<ol>
<li>Open the <a href="/invoice-generator">invoice generator</a> and choose your country preset, such as the <a href="/invoice-generator/usa">US invoice generator</a> or the UK preset for plant and tool hire.</li>
<li>Add your company name, logo, address and tax details.</li>
<li>Enter the customer, account number and job site address.</li>
<li>Add the invoice number, rental agreement number, PO number, invoice date and due date.</li>
<li>Add one line per item with the asset number, dates and rate period, then separate lines for the waiver, delivery, fuel and any other fees.</li>
<li>Set the tax rate. The generator applies one rate per invoice, so if some fees are exempt where you work, bill them on a separate invoice or check with your adviser.</li>
<li>Enter the deposit as amount paid, add your payment terms and download the PDF.</li>
</ol>
<p>A strong, industrial design suits rental yards. Try the <a href="/invoice-templates/bold">bold invoice template</a>, which handles long line lists clearly.</p>

<h2>Deposits, credit accounts and payment terms</h2>
<p>Rental businesses usually split customers into two groups:</p>
<ol>
<li><strong>Cash and new customers:</strong> pay upfront or leave a deposit or card hold, with the final invoice settled on return. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> explains how to record the upfront payment.</li>
<li><strong>Account customers:</strong> established contractors on credit terms, often net 30, billed per rental or with a monthly statement. Set limits and checks through a written <a href="/blog/customer-credit-policy">customer credit policy</a>.</li>
</ol>
<p>For long-term rentals, invoice every four weeks in advance rather than waiting for the machine to come back. Construction customers may also expect your invoices to fit their own pay application process. Our <a href="/blog/construction-invoice-guide">construction invoice guide</a> explains how contractors bill upstream, which helps you understand when they can pay you. If payment stalls, our guide to an <a href="/blog/overdue-invoice">overdue invoice</a> sets out next steps.</p>

<h2>Common equipment rental invoice mistakes</h2>
<ul>
<li><strong>No asset or serial number.</strong> Without it, damage claims are hard to prove.</li>
<li><strong>Missing return time.</strong> Late charges need the agreed and actual times on paper.</li>
<li><strong>Daily rates for a full week.</strong> Charging seven daily rates when a weekly rate is cheaper damages trust.</li>
<li><strong>Waiver without a base.</strong> Show the percentage and the amount it was calculated on.</li>
<li><strong>Damage with no evidence.</strong> Attach inspection notes and photos to every damage line.</li>
<li><strong>Taxing every line the same way without checking.</strong> Fees can be taxed differently from the rental itself.</li>
<li><strong>Waiting until the machine comes back.</strong> On long rentals, invoice each four-week period in advance so you are not financing the customer's project for months.</li>
</ul>

<h2>Create your equipment rental invoice</h2>
<p>A reliable equipment rental invoice template links every charge to the signed agreement: asset numbers, out and return times, the right rate period, a clearly explained damage waiver, delivery, fuel and any damage on their own lines, the correct tax and the deposit applied. Build your next rental invoice in the <a href="/invoice-generator">free invoice generator</a>, or browse the <a href="/invoice-templates">invoice templates</a> to match your brand first.</p>
`,
  },
];
