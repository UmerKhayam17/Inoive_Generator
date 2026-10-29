import type { PostDraft } from "../blog";

export const UAE_GLOBAL_TAX_2026_POSTS: PostDraft[] = [
  {
    slug: "uae-vat-registration",
    title: "UAE VAT Registration: Threshold, EmaraTax Steps and Deadlines",
    description:
      "UAE VAT registration for 2026: the AED 375,000 mandatory and AED 187,500 voluntary thresholds, EmaraTax steps, documents and invoicing once you get a TRN.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Arab Emirates",
    related: [
      "dubai-trade-license",
      "trn-number-uae",
      "uae-vat-invoice-requirements",
      "uae-vat-return-filing",
      "uae-vat-changes-2026",
    ],
    faqs: [
      {
        q: "What is the VAT registration threshold in the UAE?",
        a: "As of 2026, the Federal Tax Authority sets the mandatory registration threshold at AED 375,000 of taxable supplies and imports over the previous 12 months, or expected in the next 30 days. The voluntary threshold is AED 187,500, and for voluntary registration it can be measured on taxable supplies, imports or taxable expenses. The mandatory threshold does not apply to foreign businesses, which may need to register from their first taxable supply.",
      },
      {
        q: "How do I register for VAT in the UAE?",
        a: "You apply online through EmaraTax, the Federal Tax Authority's portal, which you sign in to with UAE Pass. You create a taxable person profile, choose VAT registration, enter business, turnover and bank details, upload your trade licence, owner identification and turnover evidence, then submit. If the FTA approves, it issues a 15-digit Tax Registration Number (TRN) and a VAT certificate that shows your effective registration date.",
      },
      {
        q: "Is UAE VAT registration free?",
        a: "Yes. The Federal Tax Authority does not charge a fee to apply for VAT registration through EmaraTax. What costs money is getting it wrong: the FTA's administrative penalty for failing to register on time is widely reported as AED 10,000, and you may also owe the VAT you should have charged from the date registration was required. Many small businesses pay a tax agent to prepare the application, but that is optional.",
      },
      {
        q: "Do zero-rated sales count towards the UAE VAT threshold?",
        a: "Yes. Zero-rated supplies, such as many exports of goods and services, are taxable supplies at 0%, so they count towards the AED 375,000 and AED 187,500 thresholds. Exempt supplies, such as certain residential property and some financial services, and out-of-scope income do not count. A business making only zero-rated supplies may be able to ask the FTA for an exception from registration.",
      },
      {
        q: "How long does the FTA take to approve VAT registration?",
        a: "The FTA does not publish a single guaranteed time on its registration page, and processing depends on how complete your application is. Applications with clear trade licence details, matching turnover evidence and correct bank information tend to move faster. If the FTA asks for more information, the clock effectively restarts when you resubmit, so check your EmaraTax inbox and email often after applying.",
      },
      {
        q: "Can a freelancer register for VAT in the UAE?",
        a: "Yes. A freelancer with a freelance permit or licence is a person conducting business, so the same thresholds apply. If your taxable supplies pass AED 375,000 in any rolling 12 months, you must register. Below that, you can register voluntarily once you pass AED 187,500. Registration means you charge 5% VAT on standard-rated invoices and file regular VAT returns, so weigh the admin against the benefit of recovering input VAT.",
      },
      {
        q: "What happens if I register for VAT late in the UAE?",
        a: "Late registration usually brings a fixed administrative penalty, widely reported as AED 10,000, and the FTA can backdate your registration to the date you should have registered. You then owe output VAT on sales made since that date, even if you never charged it to customers. Register within 30 days of crossing the threshold and keep the monthly turnover records that show when you crossed it.",
      },
      {
        q: "Do I need to show my TRN on invoices after registering?",
        a: "Yes. Once registered, every tax invoice you issue must show your TRN, the words Tax Invoice, your name and address, the invoice date and number, the customer's details, a description of the supply, the VAT rate and the VAT amount in AED. Before your registration date, you must not show a TRN or charge VAT. You can check any supplier's TRN with the FTA's verification tool.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> UAE VAT registration is mandatory once your taxable supplies and imports pass AED 375,000 in the previous 12 months, or will pass it in the next 30 days. You can register voluntarily from AED 187,500. You apply free of charge on the Federal Tax Authority's EmaraTax portal using UAE Pass, and receive a 15-digit TRN when approved.</p>

<p>Value added tax has applied in the UAE since 2018 at a standard rate of 5%, and every growing business eventually hits the point where VAT registration becomes a legal requirement. This guide explains the UAE VAT registration rules in plain English: how the thresholds are measured, when voluntary registration makes sense, the EmaraTax steps, the documents you need and what changes on your invoices once you hold a <a href="/blog/trn-number-uae">Tax Registration Number (TRN)</a>. If you only need to bill a client today, you can build a compliant invoice in our free <a href="/invoice-generator">invoice generator</a> and come back to the detail later.</p>

<p><strong>Note:</strong> This is general information, not tax or legal advice. Rules for designated zones, tax groups and non-resident businesses have extra conditions, so confirm your position with the FTA or a registered tax agent.</p>

<h2>UAE VAT registration thresholds in 2026</h2>
<p>According to the <a href="https://tax.gov.ae/en/taxes/Vat/Vat.Topics/registration.for.vat.aspx" target="_blank" rel="noopener noreferrer">Federal Tax Authority's VAT registration page</a>, there are two thresholds, and each has a backward-looking and a forward-looking test.</p>
<table>
<thead><tr><th>Type</th><th>Threshold</th><th>What is measured</th><th>When the test is met</th></tr></thead>
<tbody>
<tr><td>Mandatory</td><td>AED 375,000</td><td>Taxable supplies and imports</td><td>Total exceeded the threshold over the previous 12 months, or is expected to exceed it in the next 30 days</td></tr>
<tr><td>Voluntary</td><td>AED 187,500</td><td>Taxable supplies, imports or taxable expenses</td><td>Total exceeded the threshold over the previous 12 months, or is expected to exceed it in the next 30 days</td></tr>
<tr><td>Foreign businesses</td><td>No threshold</td><td>Taxable supplies in the UAE where no one else accounts for the VAT</td><td>Usually from the first such supply</td></tr>
</tbody>
</table>
<p>Two details catch people out. First, the 12-month window is rolling, not a calendar year. You test it at the end of every month by adding up the last 12 months. Second, the forward test is about the next 30 days alone: if you sign a single contract that will bring in more than AED 375,000 of taxable supplies within a month, you must register now, even if your history is small.</p>

<h3>What counts towards the threshold</h3>
<ul>
<li><strong>Standard-rated supplies</strong> at 5%, which covers most goods and services sold in the UAE.</li>
<li><strong>Zero-rated supplies</strong> at 0%, such as many exports, international transport and certain education and healthcare. These are taxable supplies, so they count. Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference.</li>
<li><strong>Imports</strong> of goods and services on which you would account for VAT under the reverse charge.</li>
</ul>
<p>Exempt supplies (for example, certain residential property and some financial services) and out-of-scope income, such as salary or genuinely private income, do not count.</p>

<h2>Mandatory vs voluntary registration: which applies to you?</h2>
<p>If you are over AED 375,000, there is no choice. Between AED 187,500 and AED 375,000, voluntary registration is an option worth weighing honestly.</p>
<table>
<thead><tr><th>Factor</th><th>Register voluntarily</th><th>Stay unregistered</th></tr></thead>
<tbody>
<tr><td>Customers are mostly VAT-registered businesses</td><td>Good fit: they recover the 5% you charge</td><td>You absorb VAT on your own costs</td></tr>
<tr><td>Customers are mostly consumers</td><td>Your prices rise 5% or your margin falls</td><td>Often the better choice</td></tr>
<tr><td>High set-up or equipment costs</td><td>You can recover input VAT on purchases</td><td>Input VAT becomes a cost</td></tr>
<tr><td>Admin capacity</td><td>Returns, records and tax invoices required</td><td>Simpler bookkeeping</td></tr>
</tbody>
</table>
<p>Voluntary registration also lets a new business that has spent heavily on fit-out or equipment register on the basis of taxable expenses, before sales have taken off. Once registered, you take on the full set of obligations, including <a href="/blog/uae-vat-return-filing">filing UAE VAT returns</a> on time even in quiet periods.</p>

<h2>Worked example: when does registration become mandatory?</h2>
<p>Layla runs a Dubai design studio. Her monthly taxable sales from November 2025 to September 2026 were a steady AED 30,000, and October 2026 brought a larger project worth AED 48,000.</p>
<ul>
<li>November 2025 to September 2026: 11 months x AED 30,000 = AED 330,000</li>
<li>October 2026: AED 48,000</li>
<li>Rolling 12-month total at 31 October 2026: AED 330,000 + AED 48,000 = AED 378,000</li>
</ul>
<p>AED 378,000 is above AED 375,000, so Layla has crossed the mandatory threshold at the end of October. She should apply on EmaraTax within 30 days. Had she checked at the end of April 2026, her total would have been 12 x AED 30,000 = AED 360,000, below the mandatory threshold but well above the AED 187,500 voluntary threshold.</p>
<p>After her registration takes effect, a AED 20,000 design invoice to a Dubai client carries VAT of AED 20,000 x 5% = AED 1,000, for a total of AED 21,000. Before the effective date she must not charge VAT or show a TRN.</p>

<h2>How to register for VAT on EmaraTax, step by step</h2>
<p>All FTA services now run through EmaraTax, and the FTA states that access is through UAE Pass. The flow looks like this:</p>
<ol>
<li><strong>Set up UAE Pass</strong> for the person who will act for the business, usually the owner or an authorised signatory.</li>
<li><strong>Sign in to EmaraTax</strong> and create or select the taxable person profile for your business (your trade licence entity, or yourself as a natural person if you freelance).</li>
<li><strong>Open the VAT registration form</strong> and confirm whether you are applying on mandatory or voluntary grounds.</li>
<li><strong>Enter entity details</strong>: legal name in English and Arabic, trade licence number and issuing authority, business activities, address and contact details.</li>
<li><strong>Enter turnover details</strong>: taxable supplies for the last 12 months, expected supplies for the next 30 days, and whether you import or export.</li>
<li><strong>Add bank details</strong> so refunds can be paid, using an account in the business name.</li>
<li><strong>Upload documents</strong> and declare the information is correct.</li>
<li><strong>Submit and monitor</strong> your EmaraTax inbox and email. If the FTA asks for more information, answer quickly, because the application waits until you do.</li>
<li><strong>Download your VAT certificate</strong> once approved. It shows your TRN and the effective date of registration.</li>
</ol>

<h3>Documents to prepare</h3>
<ul>
<li>Trade licence or freelance permit (and for a freelancer, passport and Emirates ID)</li>
<li>Passport and Emirates ID of the owner(s) and authorised signatory</li>
<li>Memorandum or articles of association for companies</li>
<li>Evidence of turnover: sales invoices, a turnover declaration and, where relevant, audited or management accounts</li>
<li>Customs registration details if you import or export goods</li>
<li>Bank account letter or IBAN certificate</li>
</ul>
<p>Make sure the turnover figure you enter matches the invoices you upload. Mismatches are a common reason for the FTA to send an application back.</p>

<h2>Deadlines and penalties for late registration</h2>
<p>Once you cross the mandatory threshold, the FTA expects your application within 30 days. Missing it is expensive. The administrative penalty for failing to register on time is widely reported as a fixed AED 10,000, and the FTA can set your effective registration date back to when you should have registered. That means you owe 5% output VAT on sales made since then, even if you never collected it from customers.</p>
<p>The UAE revised its tax penalty framework during 2026, and our summary of <a href="/blog/uae-vat-changes-2026">UAE VAT changes in 2026</a> covers the wider updates, so check the current penalty schedule on the FTA site before relying on any figure. The safest habit is a monthly check: keep a simple invoice tracker with a rolling 12-month total and you will see the threshold coming well before you reach it.</p>

<h2>What changes on your invoices after you get a TRN</h2>
<p>From your effective registration date, each sale you make at the standard rate needs a tax invoice. The full list is in our guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>, but the core items are:</p>
<ul>
<li>The words "Tax Invoice" clearly displayed</li>
<li>Your name, address and TRN</li>
<li>The customer's name, address and TRN if they are registered</li>
<li>A unique, sequential invoice number and the date of issue (our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the sequence clean)</li>
<li>Date of supply if different from the invoice date</li>
<li>Description, quantity and unit price of each item</li>
<li>Rate of VAT and the VAT amount, shown in AED</li>
<li>Any discount applied and the total amount payable</li>
</ul>
<p>Many UAE businesses also issue <a href="/blog/arabic-english-invoice">bilingual Arabic-English invoices</a>, which customers and auditors often prefer. Keep in mind that the UAE is moving to structured e-invoicing; our guide to <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing from 2027</a> covers the timeline, so choose an invoice format that will be easy to migrate.</p>

<h2>Common UAE VAT registration mistakes</h2>
<ul>
<li><strong>Using a calendar year.</strong> The test is a rolling 12 months, checked every month.</li>
<li><strong>Ignoring zero-rated exports.</strong> Exports count towards the threshold even though no VAT is charged.</li>
<li><strong>Charging VAT before approval.</strong> Do not add VAT or a TRN to invoices until your certificate confirms the effective date.</li>
<li><strong>Forgetting the forward test.</strong> One large contract in the next 30 days can trigger registration.</li>
<li><strong>Splitting a business</strong> between related licences to stay under the threshold. The FTA can treat artificially separated businesses as one.</li>
<li><strong>Mixing up VAT and corporate tax.</strong> They are separate registrations with separate rules. Freelancers should also read our guide to <a href="/blog/uae-corporate-tax-freelancers">UAE corporate tax for freelancers</a>.</li>
</ul>

<h3>Related rules: exceptions, tax groups and deregistration</h3>
<p>A business that makes only zero-rated supplies can ask the FTA for an exception from registration, which saves filing returns but also means no input VAT recovery. Related companies under common control can apply to form a tax group, which files one return and ignores supplies between members. At the other end, if your taxable supplies fall below the voluntary threshold, or you stop trading, you may have to apply to deregister within the FTA's deadline, so do not simply stop filing.</p>
<p>If you trade across the Gulf, remember that Saudi Arabia, Bahrain and Oman each run their own VAT registration rules and thresholds. And if you want to sense-check VAT figures before you send an invoice, our guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> shows the 5% formulas with worked examples.</p>

<h2>Registering as a freelancer or sole establishment</h2>
<p>VAT registration is not just for companies. The FTA treats a natural person who conducts business as a taxable person, so a freelancer, consultant or sole establishment owner applies in their own name, linked to their freelance permit or trade licence. The thresholds are exactly the same. In practice, freelancers hit two specific issues:</p>
<ul>
<li><strong>Export-heavy income.</strong> Many UAE freelancers bill overseas clients. Those services are often zero-rated, which means no VAT on the invoice, but the income still counts towards AED 375,000. You can be required to register even if almost none of your invoices will carry 5% VAT, and registering lets you recover input VAT on your local costs.</li>
<li><strong>Several income streams.</strong> If you hold more than one licence or work through a mix of personal and company arrangements, add up all taxable supplies made by the same person. Our guide to the <a href="/blog/uae-freelance-permit">UAE freelance permit</a> explains how the licence and the person relate.</li>
</ul>

<h2>Your first 30 days after registration</h2>
<p>Getting the TRN is the start, not the finish. In the first month after approval:</p>
<ul>
<li><strong>Check the effective date</strong> on your certificate and review any invoices issued after it. If you issued invoices without VAT after that date, speak to your accountant about correcting them.</li>
<li><strong>Update every template</strong>: add "Tax Invoice", your TRN, a VAT column and an AED VAT total.</li>
<li><strong>Tell your customers</strong> your TRN and the date from which you will charge VAT, so their accounts teams can update supplier records.</li>
<li><strong>Collect supplier tax invoices</strong> for your own purchases, because you can only recover input VAT backed by valid tax invoices.</li>
<li><strong>Note your tax periods</strong> and return due dates in EmaraTax, and put them in your calendar.</li>
<li><strong>Separate VAT in your bookkeeping</strong>, so output VAT collected is never mistaken for income you can spend.</li>
</ul>

<h2>Create your UAE VAT invoice</h2>
<p>UAE VAT registration comes down to three habits: track your rolling 12-month taxable turnover, apply on EmaraTax within 30 days of crossing AED 375,000, and switch to compliant tax invoices from your effective date. When your TRN arrives, open our free <a href="/invoice-generator">invoice generator</a>, add your TRN and 5% VAT, and download a professional tax invoice in minutes. Prefer a ready design? Browse our <a href="/invoice-templates/corporate">corporate invoice template</a>, the full <a href="/invoice-templates">invoice template gallery</a>, or the <a href="/invoice-generator/uae">UAE invoice generator</a> with local fields preset. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "uae-freelance-permit",
    title: "UAE Freelance Permit: Dubai Freelance Visa Costs and Options",
    description:
      "UAE freelance permit guide for 2026: Dubai GoFreelance and other licences, realistic freelance visa costs in AED, Green Visa rules and how to invoice clients.",
    category: "freelancing",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Arab Emirates",
    related: [
      "dubai-trade-license",
      "uae-corporate-tax-freelancers",
      "freelance-invoice-template",
      "trn-number-uae",
      "digital-nomad-tax",
    ],
    faqs: [
      {
        q: "What is a freelance permit in the UAE?",
        a: "A freelance permit is an authorisation that lets an individual work for multiple clients without an employer sponsor or employment contract. In the UAE it is issued by a licensing body such as a free zone or an emirate's economic department, and on the federal side the Ministry of Human Resources and Emiratisation issues freelance work permits. The permit covers your activity; residence comes through a separate visa that may be sponsored by the permit issuer or obtained as a Green Visa.",
      },
      {
        q: "How much does a freelance visa cost in Dubai?",
        a: "Published 2026 cost guides put the Dubai GoFreelance licence at about AED 7,500 a year plus small knowledge and innovation fees, with an establishment card of around AED 2,000 and a residence visa of roughly AED 4,600 to 5,000. That puts a realistic first-year total at about AED 12,000 to 15,000 before medical tests, Emirates ID and health insurance. Prices change often, so get an official quote before you pay.",
      },
      {
        q: "Is a freelance permit the same as a freelance visa?",
        a: "No. The permit or licence is permission to carry out freelance activity, while the visa is your right to live in the UAE. Some packages bundle both, and some permits are available to people who already hold residence through a spouse, parent or employer. A Green Visa is a separate five-year self-sponsored residence for skilled freelancers who meet the education and income conditions set by ICP.",
      },
      {
        q: "Who can apply for a Green Visa as a freelancer?",
        a: "According to ICP, a freelancer applying for the self-employed Green Visa needs a freelance or self-employment permit from the Ministry of Human Resources and Emiratisation, a bachelor's degree or specialised diploma or equivalent, and annual freelance income of at least AED 360,000 over the previous two years, or proof of financial solvency. The visa lasts five years, is renewable and does not need an employer sponsor.",
      },
      {
        q: "Can I freelance in Dubai without a permit?",
        a: "Not legally if you are working for clients in the UAE. Doing paid work without the right licence or permit can lead to fines and problems with your residence status. If you hold residence through an employer, you may need their consent and a part-time or freelance permit before taking side work. Remote work for overseas clients while visiting is a grey area, so check the rules before relying on it.",
      },
      {
        q: "Do UAE freelancers need to register for VAT?",
        a: "Only once taxable supplies pass AED 375,000 in a rolling 12 months, or will pass it in the next 30 days. Below that you can register voluntarily from AED 187,500. Exports of services to overseas clients are often zero-rated, but they still count towards the threshold. Until you are registered, your invoices must not show a TRN or charge VAT.",
      },
      {
        q: "Do freelancers pay corporate tax in the UAE?",
        a: "Individuals who do business in the UAE fall under corporate tax only when their business turnover exceeds AED 1 million in a calendar year. Below that, a freelancer generally does not need to register for corporate tax. Above it, they register, keep accounts and file a return, with the first AED 375,000 of taxable income taxed at 0% and the rest at 9%.",
      },
      {
        q: "Which is the cheapest freelance permit in the UAE?",
        a: "There is no single answer because each authority bundles different things. Licence-only options in Sharjah, Ajman or Abu Dhabi can be cheaper than Dubai packages, but they may not include a visa or may limit where you can work. Compare the total first-year cost with the visa, establishment card, medical and insurance included, and check the activity list matches what you actually do.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A UAE freelance permit lets you work for multiple clients without an employer sponsor. In Dubai the best known route is GoFreelance, with a licence that published 2026 guides price at about AED 7,500 a year. Add an establishment card and residence visa and a realistic first-year freelance visa budget is about AED 12,000 to 15,000.</p>

<p>Thousands of designers, developers, writers, consultants and trainers base themselves in the UAE, attracted by zero personal income tax and direct access to Gulf clients. To do it legally, you need two things: a <strong>freelance permit</strong> (or licence) for your activity, and a <strong>residence visa</strong>. This guide explains the main options, what a freelance permit in Dubai costs in 2026, how the Green Visa fits in, and what to put on your invoices once you start working. If you have your first client lined up, you can already draft a bill in our free <a href="/invoice-generator">invoice generator</a>.</p>

<p><strong>Note:</strong> This is general information, not legal, immigration or tax advice. Fees and eligibility change frequently, so confirm everything with the issuing authority before you pay.</p>

<h2>Freelance permit vs freelance visa: what you actually need</h2>
<p>People often say "freelance visa UAE" when they mean a bundle of separate items:</p>
<table>
<thead><tr><th>Item</th><th>What it does</th><th>Who issues it</th></tr></thead>
<tbody>
<tr><td>Freelance permit or licence</td><td>Allows you to carry out a listed freelance activity and sign client contracts</td><td>A free zone, an emirate's economic department, or the Ministry of Human Resources and Emiratisation (MoHRE)</td></tr>
<tr><td>Establishment card</td><td>Registers you as a sponsor so a visa can be issued against your licence</td><td>Immigration authority, via the licensing body</td></tr>
<tr><td>Residence visa</td><td>Your right to live in the UAE, plus Emirates ID</td><td>Immigration authority (GDRFA in Dubai, ICP federally)</td></tr>
<tr><td>Green Visa (self-employed)</td><td>Five-year self-sponsored residence for qualifying freelancers</td><td>ICP or GDRFA</td></tr>
</tbody>
</table>
<p>If you already hold residence through a spouse, parent or employer, you may only need the permit. If you are moving to the UAE for freelancing, you need the full bundle.</p>

<h2>The main freelance permit options in 2026</h2>
<h3>Dubai: GoFreelance (TECOM communities)</h3>
<p>GoFreelance is the freelance licence offered through TECOM Group's business communities. Its <a href="https://dmc.ae/offerings/gofreelance" target="_blank" rel="noopener noreferrer">Dubai Media City GoFreelance page</a> groups activities into four areas: tech (Dubai Internet City), media (Dubai Media City), education (Dubai Knowledge Park) and design (Dubai Design District). Typical activities include software and web development, photography, copywriting, journalism, training, coaching, fashion and interior design. Applications are submitted online through the axs portal.</p>
<p>Some 2026 reports say certain communities have paused new individual freelance visa issuance while renewals continue. We could not confirm this on an official page, so ask GoFreelance directly whether new visas are available for your activity before you budget.</p>

<h3>Other free zones and emirates</h3>
<ul>
<li><strong>Other Dubai free zones</strong> offer freelance or sole-establishment packages, some covering a wider list of consulting and trading activities.</li>
<li><strong>Abu Dhabi</strong> issues a freelancer licence through its business centre, aimed at a long list of professional and digital activities.</li>
<li><strong>Sharjah, Ajman and Ras Al Khaimah</strong> free zones sell freelance packages, often with a lower licence fee and optional visa add-ons.</li>
<li><strong>MoHRE freelance work permit</strong> is for people who want to work independently and may be sponsoring themselves through a Green Visa.</li>
</ul>

<h3>Green Visa for self-employed freelancers</h3>
<p>The <a href="https://icp.gov.ae/en/services/uae-green-residency/" target="_blank" rel="noopener noreferrer">ICP Green Residence guide</a> describes a renewable five-year residence that lets freelancers live and work without a sponsor. ICP lists three main conditions: a freelance or self-employment permit from MoHRE, a bachelor's degree or specialised diploma (or equivalent), and annual freelance income of at least AED 360,000 over the previous two years, or proof of financial solvency. It suits established freelancers rather than newcomers.</p>

<h2>Freelance permit Dubai cost: a 2026 budget</h2>
<p>Official fee schedules are not always published in one place, and packages bundle items differently. Published 2026 cost guides put the main Dubai GoFreelance items at roughly these levels:</p>
<table>
<thead><tr><th>Cost item</th><th>Typical 2026 figure (AED)</th><th>How often</th></tr></thead>
<tbody>
<tr><td>Freelance licence</td><td>About 7,500, plus about 20 in knowledge and innovation fees</td><td>Every year</td></tr>
<tr><td>Establishment card</td><td>About 2,000</td><td>On issue and renewal</td></tr>
<tr><td>Residence visa</td><td>Roughly 4,600 to 5,000 depending on validity</td><td>Per visa term</td></tr>
<tr><td>Medical test, Emirates ID, biometrics</td><td>Several hundred, varies by service level</td><td>Per visa term</td></tr>
<tr><td>Health insurance</td><td>Varies widely with age and cover</td><td>Every year</td></tr>
</tbody>
</table>
<p>Licence-only packages in other emirates can cost less, but compare the total including the visa. A package that looks cheap without a visa can end up costing the same once residence is added.</p>

<h3>Worked example: first-year budget and break-even</h3>
<p>Omar is moving to Dubai as a freelance web developer. Using the guide figures above:</p>
<ul>
<li>Licence: AED 7,500 + AED 20 = AED 7,520</li>
<li>Establishment card: AED 2,000</li>
<li>One-year visa: AED 4,600</li>
<li>Subtotal: AED 7,520 + AED 2,000 + AED 4,600 = AED 14,120</li>
</ul>
<p>Spread over 12 months, that is AED 14,120 / 12 = about AED 1,177 a month before insurance and medical costs. If Omar charges AED 250 an hour, he needs AED 1,177 / 250 = about 4.7 billable hours a month just to cover his permit and visa. Pricing your time is easier once you know this number; our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through the full calculation.</p>

<h2>Which freelance permit should you choose?</h2>
<p>The right route depends less on price and more on where you live, who your clients are and whether you need a visa. Use this as a starting point:</p>
<table>
<thead><tr><th>Your situation</th><th>Route to look at first</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Moving to Dubai, work is tech, media, education or design</td><td>GoFreelance (if accepting new visas)</td><td>Activity list fits, licence and visa in one place</td></tr>
<tr><td>Already resident through a spouse or parent</td><td>Licence-only package in any emirate</td><td>You do not need a second visa, so the cheapest compliant licence often wins</td></tr>
<tr><td>Employed full time, want side projects</td><td>Employer consent plus a part-time or freelance permit</td><td>Protects your existing visa and contract</td></tr>
<tr><td>Established freelancer earning well over AED 360,000 a year</td><td>MoHRE permit plus Green Visa</td><td>Five-year self-sponsored residence with no employer or licensing body sponsor</td></tr>
<tr><td>Consulting or trading outside the GoFreelance categories</td><td>Free zone freelance or sole-establishment package</td><td>Wider activity lists</td></tr>
<tr><td>Want to hire staff or take on larger contracts</td><td>Free zone or mainland company</td><td>A permit is for one person working alone</td></tr>
</tbody>
</table>
<p>Before committing, check two practical points. First, whether you may work for mainland clients and onshore premises under the licence, as some free zone permits limit this. Second, whether the licensing body issues an official invoice-ready licence document in English, since clients' finance teams will ask for it during <a href="/blog/vendor-onboarding-checklist">vendor onboarding</a>.</p>

<h2>How to get a freelance permit, step by step</h2>
<ol>
<li><strong>Match your activity.</strong> Check the issuing authority's activity list. If your work is not on it, the licence will not cover it.</li>
<li><strong>Compare total cost.</strong> Price the licence, establishment card, visa, medical and insurance together, not just the headline fee.</li>
<li><strong>Prepare documents.</strong> Usually a passport copy, photo, CV, portfolio or proof of experience, and sometimes degree certificates, a no-objection letter from a current sponsor, or bank statements.</li>
<li><strong>Apply online.</strong> For GoFreelance, register on the axs portal, submit the application and pay online or in person.</li>
<li><strong>Receive the permit,</strong> then apply for the establishment card if you need a visa.</li>
<li><strong>Complete visa steps:</strong> entry permit, medical test, biometrics and Emirates ID.</li>
<li><strong>Open a bank account</strong> for your freelance income. Our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> explains why separating money matters.</li>
<li><strong>Set renewal reminders</strong> for the licence, visa and insurance, which may fall on different dates.</li>
</ol>

<h2>Taxes for UAE freelancers: VAT and corporate tax</h2>
<p>Zero personal income tax does not mean zero tax admin. Two regimes can apply:</p>
<ul>
<li><strong>VAT:</strong> once your taxable supplies pass AED 375,000 in a rolling 12 months, you must register and charge 5% VAT. You can register voluntarily from AED 187,500. Our step-by-step guide to <a href="/blog/uae-vat-registration">UAE VAT registration</a> covers EmaraTax and the documents you need.</li>
<li><strong>Corporate tax:</strong> an individual doing business is in scope only when business turnover passes AED 1 million in a calendar year. Read our guide to <a href="/blog/uae-corporate-tax-freelancers">UAE corporate tax for freelancers</a> for registration and the 0% band.</li>
</ul>
<p>If you split your year between countries, residence rules elsewhere may still tax you, as our <a href="/blog/digital-nomad-tax">digital nomad tax</a> guide explains.</p>

<h2>Invoicing as a UAE freelancer</h2>
<p>Your permit gives you the legal name and licence number to put on your invoices. A clean freelance invoice in the UAE should show:</p>
<ul>
<li>Your name as it appears on the permit, licence number and issuing authority</li>
<li>Your contact details and the client's name and address</li>
<li>A unique invoice number and issue date (use our <a href="/tools/invoice-number-generator">invoice number generator</a> if you are starting fresh)</li>
<li>A description of the work, rate, hours or milestones and the total</li>
<li>Currency, payment terms and bank details</li>
<li>TRN and VAT only once you are VAT registered (see our <a href="/blog/trn-number-uae">TRN guide</a>)</li>
</ul>
<p>Most UAE freelancers work with overseas clients too, so read our tips on <a href="/blog/invoice-international-clients">invoicing international clients</a> and <a href="/blog/foreign-currency-invoice">foreign currency invoices</a>. A written <a href="/blog/freelance-contract-template">freelance contract</a> that sets scope, payment terms and late fees will save you many awkward chases.</p>

<h2>Getting paid: banking, currency and payment terms</h2>
<p>A permit makes you legal; getting paid on time keeps you in business. A few habits help UAE freelancers in particular:</p>
<ul>
<li><strong>Quote in the client's currency where it helps them,</strong> but state the currency on every line and the total. AED is pegged to the US dollar, which makes USD quotes predictable for many freelancers.</li>
<li><strong>Agree payment terms in writing</strong> before work starts. Net 14 or Net 30 terms are common, and a deposit of 30% to 50% is normal for new clients and fixed-price projects.</li>
<li><strong>Put full bank details on the invoice,</strong> including IBAN and SWIFT code for international transfers, so payments do not bounce.</li>
<li><strong>Bill on milestones</strong> for long projects rather than waiting until the end.</li>
<li><strong>Follow up early.</strong> A polite reminder on the due date is more effective than an angry email a month later.</li>
</ul>
<p>Remember that your licence renewal is a fixed annual cost. Setting aside about one twelfth of it every month, AED 1,177 in Omar's example, means renewal day is never a cash-flow shock.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Picking the cheapest licence without checking activities.</strong> A permit for "media" will not cover management consulting.</li>
<li><strong>Working before the permit is issued.</strong> Wait for the document, not just the payment receipt.</li>
<li><strong>Letting the visa and licence drift apart.</strong> If your licence lapses, the visa linked to it is at risk.</li>
<li><strong>Charging VAT without a TRN.</strong> Unregistered freelancers must not add VAT to invoices.</li>
<li><strong>Ignoring renewal costs.</strong> The licence fee recurs every year, so price it into your rates.</li>
</ul>

<h2>Start invoicing under your freelance permit</h2>
<p>A UAE freelance permit is the foundation of a legal freelance business: pick the authority whose activity list fits your work, budget for the full first-year cost rather than the headline fee, and keep your licence, visa and VAT position in step. When the first project lands, create a professional bill in our free <a href="/invoice-generator">invoice generator</a> or start from the <a href="/invoice-templates/creative">creative invoice template</a>, add your licence details, and get paid faster. Looking for clients? Our roundup of the <a href="/blog/best-freelance-websites">best freelance websites</a> is a good next read. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "how-to-calculate-vat",
    title: "How to Calculate VAT: Add and Remove VAT Formulas (20%, 5%)",
    description:
      "How to calculate VAT with simple formulas to add or remove VAT, the 1/6 and 1/21 fractions, UK 20%, UAE 5% and EU examples, rounding rules and a full invoice.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: [
      "reverse-sales-tax-calculation",
      "vat-invoice-guide",
      "sales-tax-vs-vat-vs-gst",
      "zero-rated-vs-exempt-vat",
    ],
    faqs: [
      {
        q: "What is the formula to calculate VAT?",
        a: "To add VAT, multiply the net price by the VAT rate as a decimal: VAT = net x rate. The gross price is net x (1 + rate). To remove VAT from a gross price, divide by 1 plus the rate: net = gross / (1 + rate), and VAT = gross - net. For 20% VAT, 100 net becomes 120 gross, and 120 gross contains 20 of VAT.",
      },
      {
        q: "How do I calculate 20% VAT?",
        a: "Multiply the net amount by 0.20 to get the VAT, or by 1.20 to get the total. For example, 250 x 0.20 = 50 VAT, and 250 x 1.20 = 300 including VAT. To take 20% VAT out of a total, divide by 1.20: 300 / 1.20 = 250 net, so the VAT is 50. A quick shortcut is that VAT is one sixth of a 20% VAT-inclusive price.",
      },
      {
        q: "Why can't I just take 20% off a VAT-inclusive price?",
        a: "Because the 20% was calculated on the net price, not the gross. Taking 20% off 120 gives 96, not the original 100. The VAT inside a 20% inclusive price is 20/120, which is one sixth, or about 16.67% of the gross. Always divide by 1.20 to remove UK standard-rate VAT, or multiply the gross by 1/6 to find the VAT element.",
      },
      {
        q: "How do I calculate 5% VAT in the UAE?",
        a: "Multiply the net amount by 0.05 for the VAT and by 1.05 for the total. AED 2,000 net carries AED 100 VAT, for a total of AED 2,100. To remove 5% VAT, divide the gross by 1.05: AED 2,100 / 1.05 = AED 2,000. The VAT fraction for a 5% rate is 5/105, which simplifies to 1/21 of the VAT-inclusive price.",
      },
      {
        q: "What is the VAT fraction?",
        a: "The VAT fraction is the share of a VAT-inclusive price that is tax. The formula is rate / (100 + rate). For 20% it is 20/120, or 1/6. For 5% it is 5/105, or 1/21. For 19% it is 19/119. Multiply the gross price by the fraction to find the VAT inside it without first working out the net price.",
      },
      {
        q: "Should VAT be rounded per line or on the invoice total?",
        a: "Rules vary by country, so check local guidance. In the UK, HMRC allows VAT to be calculated per line or on the invoice total, rounding to the nearest penny, as long as you are consistent. Japan allows one rounding per tax rate on each invoice. Rounding per line can produce a total a penny or two different from rounding once, which is why consistency matters more than method.",
      },
      {
        q: "How do I calculate VAT owed to the tax authority?",
        a: "Add up the output VAT you charged on sales during the period, then subtract the input VAT you paid on business purchases that you are allowed to reclaim. A positive result is what you pay; a negative result is a refund. For example, output VAT of 4,800 minus input VAT of 1,350 means you pay 3,450 for that return period.",
      },
      {
        q: "Is VAT calculated before or after a discount?",
        a: "Generally after. VAT is charged on the amount the customer actually pays for the supply, so a discount shown on the invoice reduces the taxable amount first. A 1,000 net service with a 10% discount becomes 900, and 20% VAT on that is 180, for a total of 1,080. Prompt payment discounts can have special treatment, so check your country's rules for those.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To calculate VAT, multiply the net price by the rate: at 20%, 100 x 0.20 = 20 VAT, so the total is 120. To remove VAT, divide the gross by 1 plus the rate: 120 / 1.20 = 100 net. At the UAE's 5% rate, multiply by 0.05 to add VAT and divide by 1.05 to remove it.</p>

<p>Knowing how to calculate VAT correctly is the difference between an invoice your client accepts and one that comes back for correction. The maths is simple once you have the right formula for the job: adding VAT to a net price, extracting VAT from a gross price, or totting up a mixed-rate invoice. This guide covers all three with real numbers for the UK, the UAE and the EU. If you would rather skip the arithmetic, our <a href="/invoice-generator">free invoice generator</a> calculates VAT on every line automatically.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Which rate applies to a supply, and how to round, depends on local law.</p>

<h2>The two VAT formulas you need</h2>
<p>Every VAT calculation starts from one of two places: a <strong>net</strong> price (before VAT) or a <strong>gross</strong> price (VAT-inclusive). Write the rate as a decimal: 20% = 0.20, 5% = 0.05, 19% = 0.19.</p>
<table>
<thead><tr><th>You know</th><th>You want</th><th>Formula</th><th>Example at 20%</th></tr></thead>
<tbody>
<tr><td>Net price</td><td>VAT amount</td><td>VAT = net x rate</td><td>250 x 0.20 = 50</td></tr>
<tr><td>Net price</td><td>Gross price</td><td>Gross = net x (1 + rate)</td><td>250 x 1.20 = 300</td></tr>
<tr><td>Gross price</td><td>Net price</td><td>Net = gross / (1 + rate)</td><td>300 / 1.20 = 250</td></tr>
<tr><td>Gross price</td><td>VAT amount</td><td>VAT = gross x rate / (1 + rate)</td><td>300 x 0.20 / 1.20 = 50</td></tr>
</tbody>
</table>
<p>The last row is often called the <strong>VAT fraction</strong>. Expressed in percentages it is rate / (100 + rate), so for 20% VAT it is 20/120, which is exactly one sixth.</p>

<h2>How to add VAT to a price</h2>
<ol>
<li><strong>Confirm the rate</strong> that applies to the item (standard, reduced or zero).</li>
<li><strong>Convert the rate to a decimal</strong> by dividing by 100.</li>
<li><strong>Multiply the net price by the decimal</strong> to get the VAT.</li>
<li><strong>Round</strong> the VAT to two decimal places (or the smallest currency unit).</li>
<li><strong>Add VAT to the net</strong> to get the amount the customer pays.</li>
</ol>
<p>Example: a consultant bills 1,450 net at 20%. VAT = 1,450 x 0.20 = 290. Total = 1,450 + 290 = 1,740.</p>

<h2>How to remove VAT from a gross price (reverse VAT)</h2>
<p>This is the calculation most people get wrong. If a receipt says 240 including 20% VAT, the VAT is <em>not</em> 20% of 240 (48). The 20% was charged on the net amount, so you divide:</p>
<ul>
<li>Net = 240 / 1.20 = 200</li>
<li>VAT = 240 - 200 = 40</li>
<li>Check with the fraction: 240 x 1/6 = 40</li>
</ul>
<p>Taking 20% off 240 would give 192, which understates the net price by 8. The same logic applies to US-style sales tax; see our guide to <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> and the sibling post on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a>.</p>

<h3>Handy VAT fractions</h3>
<table>
<thead><tr><th>VAT rate</th><th>Multiply net by</th><th>Divide gross by</th><th>VAT fraction of gross</th></tr></thead>
<tbody>
<tr><td>5% (UAE, UK reduced)</td><td>1.05</td><td>1.05</td><td>5/105 = 1/21</td></tr>
<tr><td>15% (EU minimum standard)</td><td>1.15</td><td>1.15</td><td>15/115 = 3/23</td></tr>
<tr><td>19% (Germany)</td><td>1.19</td><td>1.19</td><td>19/119</td></tr>
<tr><td>20% (UK, France)</td><td>1.20</td><td>1.20</td><td>20/120 = 1/6</td></tr>
<tr><td>21% (Spain, Netherlands)</td><td>1.21</td><td>1.21</td><td>21/121</td></tr>
<tr><td>23% (Ireland)</td><td>1.23</td><td>1.23</td><td>23/123</td></tr>
</tbody>
</table>

<h2>VAT rates you are most likely to use in 2026</h2>
<p>Rates change, so always confirm with the tax authority, but as of 2026:</p>
<ul>
<li><strong>United Kingdom:</strong> standard 20%, reduced 5% (for example home energy and children's car seats) and zero 0% (most food and children's clothing), according to <a href="https://www.gov.uk/vat-rates" target="_blank" rel="noopener noreferrer">GOV.UK VAT rates</a>.</li>
<li><strong>United Arab Emirates:</strong> a single standard rate of 5%, with zero-rating for items such as many exports. See our <a href="/blog/uae-vat-registration">UAE VAT registration guide</a> for when you must start charging it.</li>
<li><strong>European Union:</strong> each country sets its own rates, but the <a href="https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm" target="_blank" rel="noopener noreferrer">EU's Your Europe VAT page</a> confirms the standard rate cannot be below 15%. Examples include Luxembourg 17%, Germany 19%, France 20%, Spain and the Netherlands 21%, Italy 22%, Ireland 23% and Hungary 27%.</li>
</ul>
<p>Some countries call the same tax GST or consumption tax; our explainer on <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a> covers the differences. Japan's 10% and 8% rates, for example, come with their own invoice rules, explained in our guide to the <a href="/blog/japan-qualified-invoice-system">Japan qualified invoice system</a>.</p>

<h2>Worked example: a mixed-rate UK invoice</h2>
<p>A UK retailer sells three items to a business customer on one invoice. Each line has a different VAT rate.</p>
<table>
<thead><tr><th>Item</th><th>Net</th><th>Rate</th><th>VAT</th><th>Gross</th></tr></thead>
<tbody>
<tr><td>Installation consultancy</td><td>1,200.00</td><td>20%</td><td>240.00</td><td>1,440.00</td></tr>
<tr><td>Children's car seat</td><td>150.00</td><td>5%</td><td>7.50</td><td>157.50</td></tr>
<tr><td>Printed books</td><td>80.00</td><td>0%</td><td>0.00</td><td>80.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>1,430.00</strong></td><td></td><td><strong>247.50</strong></td><td><strong>1,677.50</strong></td></tr>
</tbody>
</table>
<p>Check the arithmetic: net 1,200 + 150 + 80 = 1,430. VAT 240 + 7.50 + 0 = 247.50. Gross 1,430 + 247.50 = 1,677.50. A proper <a href="/blog/vat-invoice-guide">VAT invoice</a> shows the VAT for each rate separately, not just a single blended figure.</p>

<h3>Worked example: removing 5% UAE VAT</h3>
<p>A Dubai supplier quotes AED 8,400 including VAT. Net = 8,400 / 1.05 = 8,000. VAT = 8,400 - 8,000 = 400. Check: 8,400 x 1/21 = 400.</p>

<h3>Worked example: 19% German VAT</h3>
<p>A Berlin client receives an invoice for EUR 1,190 gross. Net = 1,190 / 1.19 = 1,000. VAT = 190. If you sell to EU consumers from another member state, the rate is usually the customer's country rate, not yours, so confirm which one applies before you calculate.</p>

<h2>Discounts, shipping and rounding</h2>
<h3>Discounts come before VAT</h3>
<p>VAT is charged on what the customer actually pays. A 1,000 net service with a 10% discount is 900 net, VAT at 20% is 180 and the total is 1,080. Calculating VAT on 1,000 and then discounting gives the wrong answer. Show the discount as its own line so the customer can follow the calculation.</p>
<h3>Delivery charges follow the goods</h3>
<p>In many VAT systems, delivery charged with goods takes the same VAT treatment as the goods. Add shipping as its own line with the matching rate.</p>
<h3>Rounding</h3>
<p>Round VAT to the smallest currency unit. HMRC lets UK businesses round per line or on the invoice total, as long as the method is consistent. If you round each line, the total VAT may differ by a penny from rounding once at the end. Pick one method and use it every time.</p>

<h2>How to calculate the VAT you owe on a return</h2>
<p>Your VAT return is simply output VAT minus input VAT for the period. Use the VAT figures shown on your invoices and your suppliers' invoices, not a recalculation from turnover, so the return matches your records line by line.</p>
<ul>
<li>Output VAT on sales: 24,000 net at 20% = 4,800</li>
<li>Input VAT on reclaimable purchases: 6,750 net at 20% = 1,350</li>
<li>VAT payable: 4,800 - 1,350 = 3,450</li>
</ul>
<p>If input VAT is bigger than output VAT, you are due a refund. UK businesses can follow our guide on <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return in the UK</a>. Special schemes, such as the UK Flat Rate Scheme, use a different calculation based on a percentage of gross turnover, so check whether one applies to you.</p>

<h2>Practical tips: spreadsheets, quotes and cross-border sales</h2>
<h3>How to calculate VAT in Excel or Google Sheets</h3>
<p>If you keep prices in a spreadsheet, a few formulas do all the work. Put the net price in column A and the VAT rate as a percentage in column B (for example 20% or 5%):</p>
<ul>
<li><strong>VAT amount:</strong> <code>=ROUND(A2*B2,2)</code></li>
<li><strong>Gross price:</strong> <code>=A2+ROUND(A2*B2,2)</code></li>
<li><strong>Net from gross</strong> (gross in column C): <code>=ROUND(C2/(1+B2),2)</code></li>
<li><strong>VAT inside a gross price:</strong> <code>=C2-ROUND(C2/(1+B2),2)</code></li>
</ul>
<p>Wrapping each result in ROUND stops tiny fractions of a penny from piling up across hundreds of rows. If your rates are stored as whole numbers (20 rather than 20%), divide by 100 inside the formula. For a full spreadsheet workflow, see our guide on <a href="/blog/how-to-make-an-invoice-in-excel">how to make an invoice in Excel</a>.</p>

<h3>Quoting prices with or without VAT</h3>
<p>Once you know how to calculate VAT, the next decision is how to show it. The general rule of thumb:</p>
<table>
<thead><tr><th>Customer type</th><th>Usual way to quote</th><th>Reason</th></tr></thead>
<tbody>
<tr><td>VAT-registered businesses</td><td>Net price "plus VAT"</td><td>They reclaim the VAT, so the net figure is their real cost</td></tr>
<tr><td>Consumers</td><td>Gross price including VAT</td><td>Consumer protection rules in many countries require the full price to be shown</td></tr>
<tr><td>Mixed customer base</td><td>Show both clearly</td><td>Avoids disputes about whether VAT was included</td></tr>
</tbody>
</table>
<p>If a quote does not say whether VAT is included, a customer may argue the price was VAT-inclusive, leaving you to absorb the tax. On a 1,200 quote at 20%, that is the difference between receiving 1,200 net and receiving only 1,000 net with 200 going to the tax authority. Always write "plus VAT" or "including VAT" on quotes, estimates and invoices.</p>

<h3>VAT on cross-border invoices</h3>
<p>Cross-border sales are where the "how much VAT" question often becomes "whose VAT". When a business in one country supplies services to a VAT-registered business in another, the customer often accounts for the VAT under the reverse charge, and the supplier's invoice shows 0 VAT with a reverse charge note. Exports of goods are commonly zero-rated with proof of export. In both cases your calculation is easy, because the VAT on the invoice is zero, but the wording and the evidence matter.</p>
<p>Exchange rates add one more step. Many countries require the VAT amount to be shown in local currency even when the invoice is in another one. If a UK business bills a UK customer USD 5,000 plus 20% VAT, the VAT is USD 1,000, and at an illustrative rate of 0.78 GBP per USD it would also be shown as GBP 780.00 on the invoice. Use the rate your tax authority accepts for the invoice date, and note which rate you used so the figure can be checked later.</p>

<h2>Common VAT calculation mistakes</h2>
<ul>
<li><strong>Taking the rate off a gross price</strong> instead of dividing by 1 plus the rate.</li>
<li><strong>Applying VAT to exempt or zero-rated lines.</strong> Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference.</li>
<li><strong>Charging VAT when you are not registered.</strong> Below the threshold (for example the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a>), you must not add VAT.</li>
<li><strong>Charging VAT to a foreign business customer</strong> when the <a href="/blog/reverse-charge-invoice">reverse charge</a> applies.</li>
<li><strong>Mixing rounding methods</strong> across invoices, which makes reconciliations painful.</li>
<li><strong>Using the wrong currency.</strong> Many countries require the VAT amount in local currency even when you invoice in another.</li>
</ul>

<h2>Calculate VAT automatically on your next invoice</h2>
<p>Learning how to calculate VAT comes down to two moves: multiply net by (1 + rate) to add it, divide gross by (1 + rate) to remove it, then show each rate separately on your invoice. To check a single figure quickly, try our <a href="/tools/sales-tax-calculator">tax calculator</a>. To produce the finished document, open the <a href="/invoice-generator">invoice generator</a>, set your VAT rate per line, and download a clean PDF, or start from the <a href="/invoice-templates/minimal">minimal invoice template</a> or our <a href="/invoice-generator/uk">UK invoice generator</a>.</p>
`,
  },
  {
    slug: "japan-qualified-invoice-system",
    title: "Japan Qualified Invoice System: T-Number and Invoice Rules",
    description:
      "Japan qualified invoice system (invoice seido) explained: T-number registration, required invoice items, 10% and 8% rates and the 70% credit from October 2026.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Japan",
    related: [
      "invoice-requirements-by-country",
      "tax-id-on-invoice",
      "invoice-international-clients",
      "singapore-gst-tax-invoice",
    ],
    faqs: [
      {
        q: "What is Japan's qualified invoice system?",
        a: "It is the consumption tax invoicing method Japan introduced on October 1, 2023, known locally as invoice seido. Buyers can generally claim input consumption tax credit only if they keep a qualified invoice issued by a registered qualified invoice issuer, together with proper ledgers. The invoice must show the issuer's registration number, the T-number, plus amounts and tax separated by rate.",
      },
      {
        q: "What is a T-number in Japan?",
        a: "A T-number is the registration number the National Tax Agency gives a qualified invoice issuer. It is the letter T followed by 13 digits. For a corporation the digits are its existing corporate number, while sole proprietors receive a separate number that is not their My Number. Anyone can check whether a T-number is valid on the NTA's public qualified invoice issuer lookup site.",
      },
      {
        q: "What must a qualified invoice include?",
        a: "According to the NTA, a qualified invoice must show the issuer's name and registration number, the transaction date, transaction details with reduced-rate items marked, the consideration totalled separately by tax rate with the applicable rates, the consumption tax amount by rate, and the name of the customer. There is no prescribed form, so any document, including a handwritten one, qualifies if it has these items.",
      },
      {
        q: "What is a simplified qualified invoice?",
        a: "Businesses selling to many unspecified people, such as retailers, restaurants and taxis, may issue a simplified qualified invoice instead. It can leave out the customer's name, and it may show either the applicable tax rate or the consumption tax amount by rate rather than both. All other items, including the issuer's name and T-number, are still required.",
      },
      {
        q: "Can I still claim credit on purchases from unregistered suppliers?",
        a: "Partly, under transitional measures. After the FY2026 tax reform, the NTA says buyers can deduct 70% of the deemed tax on purchases from non-registered businesses from October 1, 2026 for two years, then 50% from October 1, 2028 for two years, then 30% from October 1, 2030 for one year, with no deduction from October 1, 2031. Ledgers must note that the special measure applies.",
      },
      {
        q: "Do foreign businesses need a T-number in Japan?",
        a: "Only if they are taxable businesses for Japanese consumption tax and want to issue qualified invoices, for example foreign suppliers selling digital services or goods to Japanese business customers. A foreign company that sells only to customers outside Japan does not need one. Foreign businesses that register usually need a tax representative in Japan, so get local advice before applying.",
      },
      {
        q: "What is the 20% special measure and the new 30% measure?",
        a: "The 20% special measure let small businesses that registered as invoice issuers from tax-exempt status pay only 20% of their output consumption tax. The NTA says it ends with the tax period that includes September 30, 2026. Sole proprietors who meet the conditions can then use a 30% special measure for their 2027 and 2028 returns. Corporations cannot use the 30% measure.",
      },
      {
        q: "How is consumption tax rounded on a qualified invoice?",
        a: "The NTA allows rounding of the consumption tax only once per tax rate on each qualified invoice. You may round up, round down or round half up, at your choice. You cannot round each line and then add the rounded figures, because that is more than one rounding per rate. Total the lines for each rate first, then calculate and round the tax.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Japan's qualified invoice system, or invoice seido, started on October 1, 2023. Buyers generally claim consumption tax credit only with a qualified invoice from a registered issuer, which must show a T-number (T plus 13 digits), amounts and tax split by the 10% and 8% rates, and the customer's name. From October 2026, purchases from unregistered suppliers get a 70% transitional credit.</p>

<p>If you sell to Japanese businesses, or freelance for Japanese clients, the Japan qualified invoice system decides whether your customers can recover the consumption tax on your bill. That makes it a commercial issue as much as a tax one: clients increasingly ask suppliers for a registration number before they pay. This guide explains who needs a T-number, exactly what a qualified invoice must contain, how the transitional measures changed in 2026, and how to calculate the tax correctly. For a quick overview of other countries, see our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> guide, or start a draft in our <a href="/invoice-generator">invoice generator</a>.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Japanese consumption tax has many special rules, so confirm your position with the National Tax Agency or a Japanese tax accountant (zeirishi).</p>

<h2>What the qualified invoice system is and why it exists</h2>
<p>Japan's consumption tax has two rates: a standard 10% and a reduced 8% that applies mainly to food and drink (other than alcohol and dining out) and certain newspaper subscriptions. The qualified invoice-based method was introduced to make sure input tax credits match tax actually charged at each rate. In the NTA's words, it is "a method to receive tax credit for consumption tax on purchases corresponding to multiple tax rates."</p>
<p>Under the system, a buyer's input tax credit generally requires two things: ledgers containing certain items, and qualified invoices issued by a registered qualified invoice issuer. Purchases from unregistered businesses and consumers are not eligible for full credit, which is why registration has become so important for suppliers.</p>

<h2>Who needs to register for a T-number</h2>
<p>Registration is voluntary in law but often necessary in practice.</p>
<table>
<thead><tr><th>Your situation</th><th>Do you need a T-number?</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Taxable business selling to Japanese businesses</td><td>Usually yes</td><td>Customers need qualified invoices for full credit</td></tr>
<tr><td>Small tax-exempt business (base-period taxable sales of 10 million yen or less) selling to businesses</td><td>Commercial choice</td><td>Registering makes you a taxpayer, but clients may prefer registered suppliers</td></tr>
<tr><td>Business selling only to consumers</td><td>Often no</td><td>Consumers do not claim input credit</td></tr>
<tr><td>Foreign business with Japanese business customers</td><td>Possibly</td><td>Depends on whether your supplies are taxable in Japan</td></tr>
<tr><td>Foreign freelancer billing a Japanese company for work done abroad</td><td>Often no</td><td>Services performed outside Japan are often outside Japanese consumption tax; check your case</td></tr>
</tbody>
</table>
<p>One important consequence: the NTA notes that once registered, you must file consumption tax returns even if your base-period taxable sales are below 10 million yen. Registration removes the small business exemption.</p>

<h3>How the T-number is structured</h3>
<p>The registration number is the letter T followed by 13 digits. Corporations use T plus their existing 13-digit corporate number. Sole proprietors get a separate 13-digit number that is not their personal My Number. Every registered issuer appears on the NTA's public qualified invoice issuer lookup site, where customers can check a number before paying. For a broader look at displaying tax IDs, see our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</p>

<h2>How to register as a qualified invoice issuer</h2>
<ol>
<li><strong>Decide whether to register,</strong> weighing the extra consumption tax you will pay against the risk of losing clients who need qualified invoices.</li>
<li><strong>Prepare the application</strong> for registration as a qualified invoice issuer. Domestic businesses usually file online through e-Tax; paper filing to the NTA's invoice registration centre is also possible.</li>
<li><strong>Check special cases:</strong> tax-exempt businesses can register partway through a year, and foreign businesses may need a tax representative in Japan.</li>
<li><strong>Receive your registration notice</strong> with your T-number and effective date.</li>
<li><strong>Confirm your listing</strong> on the NTA's public lookup site.</li>
<li><strong>Update invoice templates</strong> to show the T-number and split amounts by rate, then tell your customers.</li>
</ol>

<h2>What a qualified invoice must include</h2>
<p>The NTA's English guidance lists the items below. There is no prescribed form: any document, including a handwritten one, counts as a qualified invoice if these items appear on it, whether it is called an invoice, receipt or delivery note.</p>
<table>
<thead><tr><th>Item</th><th>Qualified invoice</th><th>Simplified qualified invoice</th></tr></thead>
<tbody>
<tr><td>Issuer's name and registration number (T-number)</td><td>Required</td><td>Required</td></tr>
<tr><td>Transaction date</td><td>Required</td><td>Required</td></tr>
<tr><td>Transaction details, marking reduced-rate items</td><td>Required</td><td>Required</td></tr>
<tr><td>Consideration totalled separately by tax rate (tax-exclusive or inclusive)</td><td>Required, with the applicable rate</td><td>Required</td></tr>
<tr><td>Consumption tax amount by rate</td><td>Required</td><td>Either the tax amount or the applicable rate (or both)</td></tr>
<tr><td>Customer's name</td><td>Required</td><td>Not required</td></tr>
</tbody>
</table>
<p>Simplified qualified invoices are for businesses that sell to many unspecified people, such as retailers, restaurants and taxi operators. The full rules are in the NTA's <a href="https://www.nta.go.jp/english/taxes/consumption_tax/pdf/2023/simplified_04.pdf" target="_blank" rel="noopener noreferrer">English guide to the qualified invoice-based method</a>.</p>
<p>Registered issuers must issue a qualified invoice when a taxable business customer asks for one, and keep a copy. If you need to fix an error, issue a corrected qualified invoice; see our general guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</p>

<h2>Worked example: calculating tax on a qualified invoice</h2>
<p>A Tokyo caterer invoices a registered corporate client for a staff event:</p>
<table>
<thead><tr><th>Line</th><th>Rate</th><th>Amount (tax-exclusive)</th></tr></thead>
<tbody>
<tr><td>Event planning service</td><td>10%</td><td>100,000 yen</td></tr>
<tr><td>Packaged food for takeaway (reduced rate, marked)</td><td>8%</td><td>5,000 yen</td></tr>
</tbody>
</table>
<ul>
<li>10% subtotal: 100,000 yen, consumption tax 100,000 x 10% = 10,000 yen</li>
<li>8% subtotal: 5,000 yen, consumption tax 5,000 x 8% = 400 yen</li>
<li>Total tax: 10,000 + 400 = 10,400 yen</li>
<li>Invoice total: 100,000 + 5,000 + 10,400 = 115,400 yen</li>
</ul>
<p>The invoice must show both subtotals, both rates and both tax amounts, plus the caterer's T-number and the client's name. Note the rounding rule: the NTA allows rounding only <strong>once per tax rate per invoice</strong>, using round up, round down or round half up. Total each rate first, then round the tax. Our general guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> explains the same add-tax formulas.</p>

<h2>Transitional measures after the FY2026 tax reform</h2>
<p>To soften the change, Japan allows buyers to deduct part of the deemed tax on purchases from unregistered suppliers. The original schedule was 80% to September 30, 2026, then 50% to September 30, 2029. The NTA's <a href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice-review/index.htm" target="_blank" rel="noopener noreferrer">invoice system review page</a> (in Japanese) sets out the revised schedule from the FY2026 tax reform:</p>
<table>
<thead><tr><th>Purchase period</th><th>Deductible share of deemed tax</th></tr></thead>
<tbody>
<tr><td>October 1, 2023 to September 30, 2026</td><td>80%</td></tr>
<tr><td>October 1, 2026 to September 30, 2028</td><td>70%</td></tr>
<tr><td>October 1, 2028 to September 30, 2030</td><td>50%</td></tr>
<tr><td>October 1, 2030 to September 30, 2031</td><td>30%</td></tr>
<tr><td>From October 1, 2031</td><td>0%</td></tr>
</tbody>
</table>
<p>The reform also cuts the annual cap on purchases from a single unregistered supplier that can use the measure, from 1 billion yen to 100 million yen (tax-inclusive), for tax periods starting on or after October 1, 2026. To use the transitional credit, buyers must keep an invoice with the usual details and note in their ledger that the special measure applies.</p>

<h3>Worked example: what an unregistered supplier costs the buyer</h3>
<p>A company buys design work for 110,000 yen tax-inclusive from an unregistered freelancer in November 2026. Deemed tax = 110,000 x 10/110 = 10,000 yen. At 70%, the buyer can deduct 7,000 yen and loses 3,000 yen of credit. Under the old 80% rule it would have lost 2,000 yen. That gap is why many clients ask suppliers to register or negotiate a lower price.</p>

<h3>Relief for small sellers and small purchases</h3>
<ul>
<li><strong>20% special measure:</strong> small businesses that registered from tax-exempt status could pay just 20% of output tax. It ends with the tax period that includes September 30, 2026.</li>
<li><strong>New 30% special measure:</strong> qualifying sole proprietors can pay 30% of output tax for their 2027 and 2028 returns. Corporations are excluded.</li>
<li><strong>Small-amount purchases:</strong> businesses with taxable sales of 100 million yen or less in the reference period (or 50 million yen or less in a specified period) can claim credit on purchases under 10,000 yen tax-inclusive per transaction with only ledger records, until September 30, 2029.</li>
</ul>

<h2>How the system affects pricing and client relationships</h2>
<p>The Japan qualified invoice system is a tax rule, but its biggest day-to-day effect is commercial. Because buyers lose part of their credit on purchases from unregistered suppliers, many Japanese companies now ask every supplier one question at onboarding: "Do you have an invoice registration number?" The answer shapes the conversation that follows.</p>
<ul>
<li><strong>If you are registered,</strong> your invoices give full credit, and you are on equal footing with larger suppliers. The trade-off is that you now file consumption tax returns and pay the tax you collect, minus your own credits.</li>
<li><strong>If you are not registered,</strong> some clients will accept that and absorb the lost credit, some will ask for a price reduction roughly equal to it, and some will prefer registered suppliers. Japan's Fair Trade Commission has warned large buyers against unilaterally cutting prices paid to small suppliers because of the system, so any change should be negotiated, not imposed.</li>
<li><strong>If you are deciding,</strong> compare the consumption tax you would pay after registering (reduced by the 20% measure through 2026 and the 30% measure for qualifying sole proprietors in 2027 and 2028) with the business you could lose by staying unregistered.</li>
</ul>

<h3>Checklist before you send a qualified invoice</h3>
<ol>
<li>Your legal name and T-number are shown and match the NTA listing.</li>
<li>The customer's name is shown (unless a simplified invoice is allowed).</li>
<li>The transaction date or period is clear.</li>
<li>Reduced-rate items are marked, for example with an asterisk and a note.</li>
<li>Amounts are totalled separately for 10% and 8%, with each rate stated.</li>
<li>Consumption tax is calculated per rate and rounded once per rate.</li>
<li>A copy is saved in your records.</li>
</ol>

<h2>Electronic invoices and record keeping</h2>
<p>Qualified invoices can be issued electronically, and Japan supports Peppol-based e-invoicing, although e-invoicing is not mandatory. If you issue or receive invoices electronically, keep them in a way that meets Japan's electronic record-keeping rules. Our guides to <a href="/blog/what-is-peppol">what Peppol is</a> and <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> give useful background.</p>

<h2>Tips for foreign freelancers and suppliers</h2>
<ul>
<li><strong>Ask your client why they want a T-number.</strong> If your service is performed outside Japan, it may be outside Japanese consumption tax entirely.</li>
<li><strong>Show amounts clearly by rate</strong> if you are registered, and keep the currency consistent. See our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</li>
<li><strong>Never invent or borrow a T-number.</strong> Customers can and do check numbers on the NTA lookup site.</li>
<li><strong>Use sequential numbering</strong> and keep copies; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
</ul>
<p>Comparing Asian regimes? Our guides to the <a href="/blog/singapore-gst-tax-invoice">Singapore GST tax invoice</a> and <a href="/blog/malaysia-lhdn-e-invoice">Malaysia's LHDN e-invoice</a> cover neighbouring rules, and our <a href="/blog/israel-invoice-allocation-number">Israel allocation number</a> guide shows a very different, clearance-style approach.</p>

<h2>Create a qualified invoice for Japanese clients</h2>
<p>The Japan qualified invoice system rewards suppliers who get the basics right: register for a T-number if your customers need it, split every invoice by the 10% and 8% rates, round once per rate, and keep copies. Build your next invoice in our free <a href="/invoice-generator">invoice generator</a>, add your T-number in the business details, and pick a clean layout such as the <a href="/invoice-templates/nordic">Nordic invoice template</a> so each rate and tax amount stands out. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "israel-invoice-allocation-number",
    title: "Israel Invoice Allocation Number: 2026 Thresholds and Rules",
    description:
      "Israel invoice allocation number (mispar haktzaa) guide: the 2026 NIS 10,000 and NIS 5,000 thresholds, who needs one, how to get it and what buyers risk.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Israel",
    related: [
      "e-invoicing-guide",
      "peppol-vs-clearance-model",
      "invoice-requirements-by-country",
      "vat-invoice-guide",
    ],
    faqs: [
      {
        q: "What is an allocation number in Israel?",
        a: "An allocation number, mispar haktzaa in Hebrew, is a unique 9-digit code the Israel Tax Authority issues for a specific tax invoice before it is sent. It is part of the Israel Invoices reform and works as a real-time clearance check. The supplier requests the number, prints it on the invoice alongside the normal document number, and the business customer needs it to deduct the input VAT on that invoice.",
      },
      {
        q: "What is the allocation number threshold in 2026?",
        a: "The threshold, measured before VAT, fell twice in 2026. It was NIS 20,000 during 2025, dropped to NIS 10,000 from January 1, 2026, and dropped again to NIS 5,000 from June 1, 2026. So as of late 2026, B2B tax invoices above NIS 5,000 excluding VAT need an allocation number. Always test an invoice against the threshold in force on its issue date.",
      },
      {
        q: "Is the allocation number threshold before or after VAT?",
        a: "Before VAT. An invoice for NIS 4,500 plus 18% VAT totals NIS 5,310, but its pre-VAT amount is below NIS 5,000, so it does not need an allocation number. An invoice for NIS 6,000 plus VAT does need one. Summaries differ slightly on whether exactly NIS 5,000 is covered, so check the Tax Authority's service page if your invoice sits exactly on the line.",
      },
      {
        q: "Who needs to request an allocation number?",
        a: "VAT-registered dealers (osek murshe and companies) issuing tax invoices to business customers who will claim input VAT, where the pre-VAT amount is above the threshold. Most businesses get numbers automatically through accounting or invoicing software connected to the Tax Authority. Dealers using manual invoice books or unconnected software can request numbers online through the Tax Authority's service on gov.il.",
      },
      {
        q: "Do exempt dealers (osek patur) need an allocation number?",
        a: "Generally no. An osek patur, or exempt dealer, does not charge VAT and cannot issue a tax invoice, so there is no input VAT for the customer to deduct and no allocation number to request. The requirement applies to tax invoices from VAT-registered dealers. If your turnover grows and you become an osek murshe, the rule will apply to your larger B2B invoices.",
      },
      {
        q: "What happens if an invoice is missing the allocation number?",
        a: "The business customer cannot deduct the input VAT shown on the invoice. On a NIS 10,000 invoice at 18% VAT, that is NIS 1,800 of tax the customer loses, which is why many customers now refuse to pay invoices above the threshold until a valid number is shown. The supplier usually has to issue a corrected invoice with a valid allocation number.",
      },
      {
        q: "Do consumer sales need an allocation number?",
        a: "Generally no. The allocation number exists so that a business customer can claim input VAT, so it applies to tax invoices issued to VAT-registered businesses. Sales to private consumers, who cannot deduct VAT, are not the target of the requirement. If you sell to both, make sure your invoicing software can tell which customers are businesses so it requests numbers only where needed.",
      },
      {
        q: "Can the Tax Authority refuse an allocation number?",
        a: "Yes. The Israel Tax Authority can decline to issue an allocation number if it considers an invoice irregular, for example because of suspected fictitious invoicing or problems with the supplier's VAT file. Refusals can trigger a review process. If you are refused, contact your accountant and the Tax Authority quickly, because your customer will not be able to deduct VAT until the issue is resolved.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An Israel invoice allocation number (mispar haktzaa) is a 9-digit code from the Israel Tax Authority that must appear on B2B tax invoices above a threshold, measured before VAT. The threshold fell to NIS 10,000 on January 1, 2026 and to NIS 5,000 on June 1, 2026. Without it, your customer cannot deduct the input VAT.</p>

<p>Israel has moved quickly towards a clearance-style invoicing system under the Israel Invoices reform. The Israel allocation number is the core of it: before a VAT-registered business issues a large enough tax invoice to another business, it gets a unique number from the Tax Authority and prints it on the invoice. For suppliers, that means a new step in every big invoice. For buyers, it means checking incoming invoices before paying. This guide explains the 2026 thresholds, who is affected, how to get a number and how to avoid losing VAT. For context on similar regimes worldwide, see our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>, or draft your invoice now in our <a href="/invoice-generator">invoice generator</a>.</p>

<p><strong>Note:</strong> This is general information, not tax or legal advice. The Israel Tax Authority updates its instructions often, so confirm current rules with your accountant (roeh heshbon) or the Tax Authority.</p>

<h2>What the allocation number is and how it works</h2>
<p>The allocation number is a unique identifier, usually described as 9 digits, that the Israel Tax Authority assigns to one specific tax invoice. It appears on the invoice in addition to your own sequential document number. The process works like this:</p>
<ol>
<li><strong>The supplier prepares a tax invoice</strong> for a VAT-registered business customer.</li>
<li><strong>The supplier's system checks the pre-VAT amount</strong> against the threshold in force on the issue date.</li>
<li><strong>If above the threshold, the system requests a number</strong> from the Tax Authority, sending the supplier's and customer's VAT numbers, the date and the amounts.</li>
<li><strong>The Tax Authority returns a number</strong> (or declines the request).</li>
<li><strong>The number is printed on the invoice</strong> and the invoice is sent to the customer.</li>
<li><strong>The customer records the number</strong> and can deduct the input VAT in its VAT report.</li>
</ol>
<p>Because the request happens before the invoice is sent, the number cannot be added afterwards to an invoice that has already gone out. If you forget, the usual fix is to cancel the original with a credit document and issue a new tax invoice that carries a valid number, which is slower and more confusing for your customer than getting it right first time.</p>
<p>This is a clearance model: the tax authority sees the invoice data before the customer does. Our explainer on <a href="/blog/peppol-vs-clearance-model">Peppol vs the clearance model</a> shows how this differs from the network-based approach used in much of Europe.</p>

<h2>Allocation number thresholds: 2024 to 2026</h2>
<p>The requirement started in May 2024 with a high threshold and has been lowered in stages. The 2026 steps were brought forward from an earlier plan that had pushed them into 2027 and 2028.</p>
<table>
<thead><tr><th>Period</th><th>Invoices needing an allocation number (amount before VAT)</th></tr></thead>
<tbody>
<tr><td>May 2024 to end of 2024</td><td>Above NIS 25,000</td></tr>
<tr><td>2025</td><td>Above NIS 20,000</td></tr>
<tr><td>January 1, 2026 to May 31, 2026</td><td>Above NIS 10,000</td></tr>
<tr><td>From June 1, 2026</td><td>Above NIS 5,000</td></tr>
</tbody>
</table>
<p>The June 2026 step was announced in a Tax Authority VAT implementation instruction in December 2025. Because the threshold has changed several times, test every invoice against the threshold that applied on the day it was issued, not today's figure. The <a href="https://www.gov.il/en/service/request-assignment-number-for-tax-invoice" target="_blank" rel="noopener noreferrer">Israel Tax Authority's allocation number service page</a> is the place to confirm the current amount.</p>

<h2>Who must comply, and who is outside the rule</h2>
<table>
<thead><tr><th>Business type or sale</th><th>Allocation number needed?</th></tr></thead>
<tbody>
<tr><td>Osek murshe or company, tax invoice to a VAT-registered business, above threshold</td><td>Yes</td></tr>
<tr><td>Same, but pre-VAT amount at or below threshold</td><td>No</td></tr>
<tr><td>Sale to a private consumer</td><td>Generally no, as the consumer cannot deduct VAT</td></tr>
<tr><td>Osek patur (exempt dealer)</td><td>No, as it cannot issue a tax invoice</td></tr>
<tr><td>Foreign supplier invoicing an Israeli business from abroad</td><td>Depends on whether the supplier is registered for Israeli VAT; get local advice</td></tr>
</tbody>
</table>
<p>The threshold depends on the invoice amount, not on your annual turnover. A small consultancy issuing one NIS 6,000 invoice is caught just like a large company.</p>

<h2>Worked examples: does this invoice need a number?</h2>
<p>Israel's standard VAT rate is 18% (it rose from 17% on January 1, 2025). Here are three invoices issued in September 2026, when the NIS 5,000 threshold applied:</p>
<table>
<thead><tr><th>Invoice</th><th>Amount before VAT</th><th>VAT at 18%</th><th>Total</th><th>Allocation number?</th></tr></thead>
<tbody>
<tr><td>A: website maintenance</td><td>NIS 4,500</td><td>NIS 810</td><td>NIS 5,310</td><td>No, pre-VAT amount is below NIS 5,000</td></tr>
<tr><td>B: design project</td><td>NIS 6,000</td><td>NIS 1,080</td><td>NIS 7,080</td><td>Yes</td></tr>
<tr><td>C: consulting retainer</td><td>NIS 12,500</td><td>NIS 2,250</td><td>NIS 14,750</td><td>Yes</td></tr>
</tbody>
</table>
<p>Check the arithmetic: 4,500 x 18% = 810; 6,000 x 18% = 1,080; 12,500 x 18% = 2,250. Invoice A shows why the test is pre-VAT: its total is above NIS 5,000 but it does not need a number. If invoice B went out without one, the customer would lose NIS 1,080 of input VAT. Had invoice B been issued in March 2026, when the threshold was NIS 10,000, it would not have needed a number at all.</p>
<p>Splitting one supply into several smaller invoices to stay under the threshold is a bad idea. It distorts your records, draws attention from the Tax Authority and frustrates customers who know the rules. If you bill in stages for genuine reasons, use a clear <a href="/blog/milestone-payments">milestone payment schedule</a>.</p>

<h2>How to get an allocation number</h2>
<h3>Through connected software (most businesses)</h3>
<p>Most Israeli accounting and invoicing systems now connect to the Tax Authority's API. Once you register for the Tax Authority's digital services and authorise the software, it requests numbers automatically whenever an invoice crosses the threshold. KPMG notes that taxpayers must register for these digital services and authorise the staff who will handle the process.</p>
<h3>Through the online service (manual invoices)</h3>
<p>Dealers who use manual invoice books, or software that is not connected to the service, can request an allocation number online through the Tax Authority's service on gov.il, entering the invoice details and copying the number onto the invoice.</p>
<h3>If the system is down</h3>
<p>Vendors describe an emergency fallback in which numbers obtained in advance can be used when the normal request fails. Ask your software provider how they handle outages before you need it.</p>

<h2>Setting up your invoicing process for allocation numbers</h2>
<p>For most businesses the rule is not hard to follow once the process is built into the way invoices are produced. A practical set-up looks like this:</p>
<ol>
<li><strong>Register for the Tax Authority's digital services</strong> and decide which staff members or software providers are authorised to request numbers.</li>
<li><strong>Confirm your software is connected</strong> to the allocation number service, and test it on a real invoice above the threshold.</li>
<li><strong>Store every customer's VAT number</strong> in your customer records. Requests cannot be made without it, and mistyped numbers are a common reason for failures.</li>
<li><strong>Build the threshold into your workflow,</strong> with the current figure (NIS 5,000 before VAT since June 1, 2026) as a setting you can change, because the Tax Authority has already changed it several times.</li>
<li><strong>Agree an outage plan</strong> with your software provider so you know what to do if a request fails at month end.</li>
<li><strong>Train whoever issues invoices</strong> to check that the number printed and to never edit an invoice after the number was issued.</li>
</ol>

<h3>What it means for freelancers and small businesses</h3>
<p>The drop to NIS 5,000 has brought many small suppliers into the system for the first time. A freelance developer or designer registered as an osek murshe who bills NIS 8,000 a month to a business client now needs an allocation number on every one of those invoices. If you still issue invoices from a word processor or a generic template, that is the moment to move to software that connects to the Tax Authority, or at least to use the online request service before every qualifying invoice. Corporate clients increasingly reject invoices without a number, so the cost of not adapting shows up as delayed payments.</p>

<h2>What buyers should check on incoming invoices</h2>
<ul>
<li><strong>Is the pre-VAT amount above the threshold</strong> in force on the invoice date?</li>
<li><strong>Is an allocation number shown,</strong> clearly separate from the invoice number?</li>
<li><strong>Is it valid?</strong> The Tax Authority offers a verification service for recipients.</li>
<li><strong>Do the details match:</strong> your VAT number, the supplier's VAT number, the date and the amounts?</li>
<li><strong>If anything is missing,</strong> ask for a corrected invoice before you pay or record the VAT.</li>
</ul>
<p>Buyers should also think about timing. Input VAT on an invoice that arrives without a valid number cannot be claimed until a corrected invoice with a valid number is received, which can push the deduction into a later VAT period and tie up cash. On a busy month with several large supplier invoices, that delay can add up quickly. For example, three supplier invoices of NIS 15,000 before VAT each carry NIS 2,700 of VAT apiece, so NIS 8,100 of input VAT would be on hold until the suppliers fix them.</p>
<p>Building this into an <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> and a <a href="/blog/three-way-match">three-way match</a> keeps rejected VAT out of your books.</p>

<h2>What a compliant Israeli tax invoice shows</h2>
<p>Alongside the allocation number, a standard Israeli tax invoice (heshbonit mas) typically includes the supplier's name, address and VAT or company number, the customer's name and VAT number, a sequential invoice number and date, a description of the goods or services, the amount before VAT, the VAT rate and amount, and the total. Many businesses issue a combined tax invoice and receipt (heshbonit mas kabala) when payment is made at the same time. For the general principles, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> and <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide.</p>

<h2>Common mistakes with allocation numbers</h2>
<ul>
<li><strong>Testing the total including VAT</strong> instead of the pre-VAT amount.</li>
<li><strong>Using an old threshold</strong> after the January and June 2026 changes.</li>
<li><strong>Typing the number into the wrong field,</strong> such as the invoice number or reference.</li>
<li><strong>Reusing a number</strong> on a different invoice. Each number belongs to one invoice only.</li>
<li><strong>Not handling credit notes properly.</strong> If an invoice is cancelled or reduced, follow your software's process for a <a href="/blog/credit-note-guide">credit note</a> rather than editing the original.</li>
<li><strong>Ignoring foreign-currency invoices.</strong> Convert to shekels on the correct date to apply the threshold; see our <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> guide.</li>
</ul>
<p>Israel's approach mirrors a wider trend towards real-time controls. Compare it with Greece's <a href="/blog/greece-mydata-e-invoicing">myDATA e-invoicing</a>, the <a href="/blog/japan-qualified-invoice-system">Japan qualified invoice system</a> and upcoming mandates in our sibling guide to <a href="/blog/italy-sdi-e-invoicing">Italy's SDI e-invoicing</a>.</p>

<h2>Create invoices ready for the allocation number</h2>
<p>The Israel invoice allocation number rule is simple to apply once your process is set: check the pre-VAT amount against the threshold on the issue date (NIS 5,000 since June 1, 2026), get the number before sending, and print it clearly. For quotes, smaller invoices or clients outside Israel, our free <a href="/invoice-generator">invoice generator</a> gives you a clean, professional layout in minutes; add a custom field for the allocation number and VAT details, or start from the <a href="/invoice-templates/classic">classic invoice template</a>. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
];
