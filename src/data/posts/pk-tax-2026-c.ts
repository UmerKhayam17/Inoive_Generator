import type { PostDraft } from "../blog";

export const PK_TAX_2026_C_POSTS: PostDraft[] = [
  {
    slug: "how-to-become-filer-pakistan",
    title: "How to Become Filer in Pakistan 2026: NTN, Return and ATL",
    description:
      "How to become filer in Pakistan in 2026: get an NTN on IRIS, file your return, join the Active Taxpayer List, and see what filer vs non-filer status costs you.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "secp-company-registration",
      "active-taxpayer-list-pakistan",
      "how-to-get-ntn-number-pakistan",
      "income-tax-return-pakistan-iris",
      "withholding-tax-rates-pakistan",
    ],
    faqs: [
      {
        q: "How do I become a filer in Pakistan?",
        a: "Register on FBR's IRIS portal to get an NTN (for individuals, your CNIC number), then file your income tax return for the latest tax year, with a wealth statement if you are an individual. Once the return is accepted, your name is added to the Active Taxpayer List (ATL). If you file after the due date, you are only added to the ATL after paying the section 182A surcharge, unless a different route applies to you.",
      },
      {
        q: "What is the difference between a filer and a non-filer?",
        a: "A filer is someone who appears on FBR's Active Taxpayer List because they filed their latest income tax return on time, or filed late and paid the surcharge. A non-filer is anyone not on that list, even if they have an NTN. The practical difference is cost: under FBR's withholding tax card for tax year 2027, non-ATL persons generally pay double the filer rate on many payments, including services and supplies.",
      },
      {
        q: "Can I become a filer with zero income?",
        a: "Yes. You can file a return declaring nil or low income, and if it is filed by the due date you will appear on the ATL. Many students, homemakers and new freelancers do this to avoid higher withholding on bank, property and vehicle transactions. Your wealth statement still needs to be complete and honest, because FBR compares declared assets with your transactions and expenses over time.",
      },
      {
        q: "How long does it take to appear on the Active Taxpayer List?",
        a: "If you file your return by the due date, your name is normally picked up in the next ATL refresh after the return is accepted. Press reports in 2026 said late filers who pay the surcharge can appear quickly, sometimes the following day. Check your status by sending ATL followed by a space and your CNIC to 9966, or using FBR's online ATL search, before telling clients you are active.",
      },
      {
        q: "What is the late filing surcharge to join the ATL in 2026?",
        a: "Section 182A requires late filers to pay a surcharge before inclusion in the ATL. Several reports say the Finance Act 2026 raised it from Rs 1,000 to Rs 25,000 for individuals, with higher amounts for AOPs and companies. In October 2026 FBR also published a draft undertaking route for some individuals, but it was not final at the time. Confirm the current amount on FBR's website before paying.",
      },
      {
        q: "What is the deadline to file my 2026 return and stay a filer?",
        a: "For tax year 2026 (1 July 2025 to 30 June 2026), the original deadline for individuals was 30 September 2026. FBR extended it to 15 October and then to 31 October 2026, according to press reports of its announcements. An extension of time to file is not an extension of time to pay, so any tax due still carries default surcharge if paid late.",
      },
      {
        q: "Do freelancers need to become filers?",
        a: "In practice, yes. Freelancers receiving IT export proceeds through banks are usually taxed under a reduced final regime, but being on the ATL still matters: banks and local clients deduct more tax from non-filers, and PSEB renewal asks for your latest tax return. Filing also creates a record of income that helps with visas, loans and property purchases later.",
      },
      {
        q: "Can I become a filer without a tax consultant?",
        a: "Many salaried people and small freelancers file on their own through IRIS or FBR's Tax Asaan app, especially when income is simple. A consultant is worth considering if you have several income sources, rental property, business accounts, foreign assets or past years to catch up on. Whoever files, you are responsible for the accuracy of the return and wealth statement.",
      },
      {
        q: "Should my invoices show my NTN once I am a filer?",
        a: "It is good practice. Pakistani business clients often ask for your NTN to check your ATL status before deciding which withholding rate to apply. Putting your NTN, legal name and address on every invoice speeds up their accounts payable process and reduces the chance that tax is deducted at the higher non-filer rate by mistake.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To become filer in Pakistan, register on FBR's IRIS portal to get an NTN, file your income tax return (and wealth statement, for individuals) for the latest tax year, and check that your name appears on the Active Taxpayer List. File by the due date to avoid the section 182A surcharge that late filers pay to join the list.</p>
<p>Knowing how to become filer in Pakistan is one of the cheapest ways a freelancer or small business can cut tax. Clients, banks and registrars all check the Active Taxpayer List (ATL), and non-filers usually have tax deducted at roughly double the filer rate. This guide walks through the steps on IRIS, the filer vs non-filer gap with real numbers, the 2026 deadlines and surcharge, and what to put on your invoices once you are active. If you bill clients, you can create a professional invoice with your NTN in minutes using our free <a href="/invoice-generator">online invoice generator</a>.</p>
<p><strong>Important:</strong> This is general information, not tax advice. Rates and rules come from FBR publications and reporting on the Finance Act 2026; confirm anything significant with FBR or a qualified tax practitioner.</p>

<h2>What does "filer" mean in Pakistan?</h2>
<p>"Filer" is everyday shorthand for a person whose name is on FBR's Active Taxpayer List for income tax. Having an NTN alone does not make you a filer. You become active by filing your income tax return for the latest tax year by the due date, or by filing late and then meeting the section 182A condition (normally paying a surcharge).</p>
<p>The ATL is used across the economy. Under FBR's withholding tax card, the rate a client or bank deducts from you often depends on whether you appear on the list on the date of payment. Our detailed <a href="/blog/active-taxpayer-list-pakistan">guide to the Active Taxpayer List</a> explains how the list is refreshed and how to read the result.</p>

<h2>Filer vs non-filer: what changes in practice</h2>
<p>The filer vs non-filer gap is mostly about withholding and advance tax. FBR's withholding tax card for tax year 2027 (1 July 2026 to 30 June 2027) shows that, for most section 153 payments, the non-ATL rate is double the ATL rate. The same pattern appears on many other transactions, from property to vehicle registration.</p>
<table>
<thead><tr><th>Payment type (section 153, TY2027 card)</th><th>Filer (ATL) rate</th><th>Non-filer rate</th></tr></thead>
<tbody>
<tr><td>IT and IT-enabled services</td><td>4%</td><td>8%</td></tr>
<tr><td>Certain listed services</td><td>7%</td><td>14%</td></tr>
<tr><td>Independent professionals (doctors, lawyers, accountants, developers working on their own)</td><td>15%</td><td>30%</td></tr>
<tr><td>Other services not covered elsewhere</td><td>14%</td><td>28%</td></tr>
<tr><td>Supply of goods by individuals and AOPs</td><td>5.5%</td><td>11%</td></tr>
</tbody>
</table>
<p>For the full list, including goods, contracts and the notes on minimum tax, see our breakdown of <a href="/blog/withholding-tax-rates-pakistan">withholding tax rates in Pakistan for 2026-27</a>.</p>
<p>Beyond withholding, the Finance Act 2025 inserted section 114C, which separates "eligible" and "ineligible" persons for large purchases such as property and vehicles. Reporting in 2026 says those restrictions only take effect from a date notified by the federal government, and sources disagree on whether that has happened. Either way, the direction is clear: being a non-filer is becoming more expensive and more restrictive.</p>

<h2>How to become filer in Pakistan: step by step</h2>
<p>Here is the process most individuals follow. Companies and AOPs follow a similar path with their own forms.</p>
<ol>
<li><strong>Register on IRIS.</strong> Go to FBR's IRIS portal and complete the registration for unregistered persons using your CNIC, a mobile number registered in your name and an email address. For individuals, your NTN is your CNIC number. Our step-by-step guide on <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a> covers each screen.</li>
<li><strong>Collect your records.</strong> Gather salary certificates, bank statements and withholding certificates, freelance payment records, rent receipts, property and vehicle documents, and opening balances of cash and assets.</li>
<li><strong>File the income tax return.</strong> In IRIS, open the return for the latest tax year (for most people, tax year 2026), enter income by source, claim tax already deducted, and calculate any balance payable. Our <a href="/blog/income-tax-return-pakistan-iris">IRIS return filing guide</a> walks through the forms.</li>
<li><strong>File the wealth statement.</strong> Individuals file a wealth statement alongside the return, listing assets and liabilities at the year end and a reconciliation of how wealth changed.</li>
<li><strong>Pay any tax due.</strong> Generate a PSID in IRIS and pay through internet banking, a bank branch or a mobile wallet. If you are unsure how, read <a href="/blog/how-to-pay-fbr-challan-psid">how to pay an FBR challan with a PSID</a>.</li>
<li><strong>Submit and keep the acknowledgment.</strong> A saved draft is not a filed return. Make sure you submit and download the acknowledgment.</li>
<li><strong>Check your ATL status.</strong> Send ATL, a space and your CNIC to 9966, or use the online ATL search on FBR's website. If you filed late, pay the section 182A surcharge (or follow any undertaking route that applies) before checking again.</li>
</ol>
<h3>Salaried, freelancer or business owner: what changes</h3>
<p>The steps are the same for everyone, but the information you enter differs. A salaried person mainly reports salary and the tax the employer deducted, which appears on the employer's certificate. A freelancer reports foreign remittances (often under a final tax regime), any local client payments and the withholding certificates those clients issue. A sole proprietor running a shop or agency reports business income and expenses, and may need to keep proper books. If you have more than one source, enter each one in its own section rather than lumping everything together.</p>
<h3>Catching up on past years</h3>
<p>If you never filed before, you do not have to file every missed year to appear on the ATL; the list is based on the latest tax year. That said, FBR can ask about earlier years, and your first wealth statement needs an opening position that makes sense. People with significant assets or unexplained income from earlier years should take advice before filing, because the first return sets the baseline FBR will compare against in future.</p>

<h2>2026 deadlines and the late-filer surcharge</h2>
<p>For tax year 2026 (1 July 2025 to 30 June 2026), the return deadline for individuals was originally 30 September 2026. FBR extended it to 15 October and then to 31 October 2026, as widely reported in the press. Filing within the extended date keeps you on the ATL without a surcharge.</p>
<h3>What late filers pay</h3>
<p>Section 182A of the Income Tax Ordinance, 2001 says a person who files after the due date is only included in the ATL after paying a surcharge. Several reports say the Finance Act 2026 raised this from Rs 1,000 to Rs 25,000 for individuals, with Rs 50,000 for AOPs and Rs 100,000 for companies cited by some sources. The Pakistan Tax Bar Association asked FBR to withdraw the higher amount, so check the current figure on <a href="https://fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR's official website</a> before paying.</p>
<h3>The proposed undertaking route</h3>
<p>In October 2026, FBR issued a draft amendment under which some individual late filers could join the ATL without the surcharge by submitting an undertaking (Form ATL-U) in IRIS, promising not to acquire property for six months. At publication, the draft was open for comments and was not final law. Do not rely on it until FBR confirms it.</p>

<h2>Worked example: what non-filer status costs a freelancer</h2>
<p>Ayesha is a software developer in Lahore. Besides foreign clients, she bills a Pakistani company Rs 250,000 a month for IT services. The company is a withholding agent under section 153.</p>
<table>
<thead><tr><th>Item</th><th>Filer (4%)</th><th>Non-filer (8%)</th></tr></thead>
<tbody>
<tr><td>Monthly invoice</td><td>Rs 250,000</td><td>Rs 250,000</td></tr>
<tr><td>Tax withheld per month</td><td>Rs 10,000</td><td>Rs 20,000</td></tr>
<tr><td>Cash received per month</td><td>Rs 240,000</td><td>Rs 230,000</td></tr>
<tr><td>Tax withheld over 12 months</td><td>Rs 120,000</td><td>Rs 240,000</td></tr>
</tbody>
</table>
<p>Over a year, staying a non-filer costs Ayesha an extra Rs 120,000 in withholding on this one client (Rs 240,000 minus Rs 120,000). Even if she filed late and paid the reported Rs 25,000 surcharge, she would still be Rs 95,000 better off than staying off the list (Rs 120,000 minus Rs 25,000). Whether the extra deduction is refundable depends on the provision, and some section 153 deductions act as minimum tax, so the money may simply be lost.</p>
<p>To estimate her total liability for the year, she would also apply the <a href="/blog/income-tax-slabs-pakistan-2026-27">income tax slabs for 2026-27</a> to any income taxed under normal rules.</p>

<h2>Becoming a filer as a freelancer</h2>
<p>Freelancers often ask whether filing matters if their foreign income is already taxed by the bank. It does, for three reasons:</p>
<ul>
<li><strong>Local withholding.</strong> Any Pakistani client paying you is likely to check the ATL. Non-filer rates double the deduction.</li>
<li><strong>PSEB renewal.</strong> PSEB asks for your latest income tax return when you renew. Our guide to <a href="/blog/pseb-registration-freelancers">PSEB registration for freelancers</a> explains why that registration cuts tax on IT export proceeds from 1% to 0.25%.</li>
<li><strong>A clean record.</strong> Returns and wealth statements document where your money came from, which helps with property, vehicles, loans and visa applications.</li>
</ul>
<p>For the full picture on export income, read our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax guide for Pakistan 2026</a>. If you are just starting out, get your NTN and first return done before your income grows; it is much easier to build good records from day one.</p>
<p>A practical tip: file your return as soon as your bank issues its annual withholding and remittance statements, usually in July. Freelancers who wait until the last week of the deadline often find IRIS slow, and a single missing document can push them past the due date and into the surcharge.</p>

<h2>What to put on your invoices once you are a filer</h2>
<p>Being on the ATL only helps if clients can verify it. Add these details to every invoice you send to Pakistani clients:</p>
<ul>
<li>Your legal name exactly as registered with FBR, and your business name if different.</li>
<li>Your NTN (CNIC number for individuals) and, if you are registered for sales tax, your STRN or provincial registration number.</li>
<li>A unique invoice number from a consistent sequence. Our free <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep one.</li>
<li>A clear service description, so the client applies the right section 153 category.</li>
<li>Payment terms and bank details, including IBAN.</li>
</ul>
<p>The <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> includes fields for NTN and tax lines, and our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> shows how to word a note about deductions.</p>

<h2>Common mistakes that keep people off the ATL</h2>
<ul>
<li><strong>Saving but not submitting.</strong> Only a submitted return with an acknowledgment counts.</li>
<li><strong>Skipping the wealth statement.</strong> Individuals generally need both documents.</li>
<li><strong>Missing the extended deadline.</strong> Filing one day late can mean paying the surcharge.</li>
<li><strong>Assuming an NTN equals filer status.</strong> Registration alone does not put you on the list.</li>
<li><strong>Not checking after filing.</strong> Confirm your status by SMS or online before telling clients.</li>
</ul>

<h2>Keep your filer status every year</h2>
<p>ATL status is not permanent. Each year the list is rebuilt around returns for the latest tax year, so you need to file every year to stay on it. A simple routine helps: keep invoices, bank statements and withholding certificates in one folder through the year, reconcile them before July, and file early rather than waiting for an extension.</p>
<p>If you also provide taxable services in a province, remember that provincial sales tax authorities keep their own lists. Our guides to <a href="/blog/pra-sales-tax-on-services">PRA sales tax on services in Punjab</a> and <a href="/blog/srb-sales-tax-on-services">SRB sales tax on services in Sindh</a> cover that side.</p>

<h2>Create invoices that show your filer details</h2>
<p>Now that you know how to become filer in Pakistan, make the benefit visible: put your NTN and correct legal name on every invoice so clients deduct at the filer rate. Our free <a href="/invoice-generator">invoice generator</a> lets you add NTN, tax lines and bank details, then download a clean PDF, with no sign-up needed. Prefer a ready design? Browse the <a href="/invoice-templates/corporate">corporate invoice template</a> and other free layouts.</p>
`,
  },
  {
    slug: "pseb-registration-freelancers",
    title: "PSEB Registration for Freelancers 2026: Fees, Documents, Tax",
    description:
      "PSEB registration for freelancers in 2026: Rs 1,000 fee, required documents, step-by-step portal process, renewal, and how it cuts tax on IT exports to 0.25%.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "freelancer-tax-pakistan-2026",
      "receive-payment-from-abroad-pakistan",
      "how-to-start-freelancing-in-pakistan",
      "freelancer-digital-account-pakistan",
    ],
    faqs: [
      {
        q: "How much does PSEB registration cost for freelancers?",
        a: "According to PSEB's TechDestination portal, the fee for a new freelancer registration is Rs 1,000 and annual renewal is Rs 2,000. Companies pay more: Rs 5,000 or Rs 10,000 for new registration depending on how long they have existed, and renewal from Rs 10,000 upward based on annual revenue. Fees can be paid by card on the portal or by pay order. Check the portal for current amounts before you apply.",
      },
      {
        q: "What documents do I need for PSEB freelancer registration?",
        a: "PSEB's facilitation page lists three items for freelancers: a personal NTN (with no business attached), a personal bank account opening or maintenance certificate, and your CNIC. For renewal, PSEB asks only for your latest income tax return, filed on FBR's Form 114. Keep scans ready as clear PDFs or images before starting the online form, because missing documents are the most common cause of delay.",
      },
      {
        q: "How long does PSEB registration take?",
        a: "PSEB states that applications from entities not registered with SECP, which includes individual freelancers, are processed within up to one working day after submission. SECP-registered companies can be processed much faster. Delays usually come from mismatched names between your CNIC, NTN and bank certificate, so make sure all three show the same spelling before you apply.",
      },
      {
        q: "Does PSEB registration reduce my tax?",
        a: "Yes, if you export IT or IT-enabled services and receive the money through banking channels. PSEB states that registered exporters pay 0.25% tax on export proceeds compared with 1% for those not registered. Banks deduct this at the time of conversion, and it is treated as a final tax on that income. You must share your valid certificate with your bank for the lower rate to apply.",
      },
      {
        q: "Is the 0.25% rate available after June 2026?",
        a: "The concession had been due to end on 30 June 2026. Several reports on the Finance Act 2026 say it was extended to 30 June 2029. FBR had not published a plain-language confirmation that we could verify at the time of writing, so check with your bank or a tax adviser that the reduced rate is still being applied to your remittances.",
      },
      {
        q: "Do I need PSEB registration to work on Upwork or Fiverr?",
        a: "No. You can work on any platform without registering with PSEB. Registration matters for tax, not for platform access: without it, banks generally deduct 1% on IT export proceeds instead of 0.25%. For someone receiving regular foreign income, the saving usually exceeds the Rs 1,000 registration fee and Rs 2,000 renewal within the first few months.",
      },
      {
        q: "What happens if my PSEB registration expires?",
        a: "If your certificate lapses, your bank may go back to deducting the higher 1% rate on export proceeds until you renew and share the updated certificate. PSEB says your registration date stays the same after renewal and only the year changes. For companies and call centres, PSEB also charges a late renewal surcharge, so renewing before the expiry date is the safer habit.",
      },
      {
        q: "Should I register with PSEB as a freelancer or as a company?",
        a: "Most solo freelancers register in the freelancer category, which uses a personal NTN and personal bank account and has the lowest fees. If you have formed a company with SECP, hire staff or invoice through a business bank account, the company category fits better. The company route costs more but brings access to additional PSEB programmes. A tax adviser can help if your setup is mixed.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> PSEB registration for freelancers is done online on PSEB's TechDestination portal using a personal NTN, CNIC and a personal bank account certificate. The new registration fee is Rs 1,000 and annual renewal is Rs 2,000. Registered IT exporters pay 0.25% tax on export proceeds received through banks, instead of 1%.</p>
<p>PSEB registration for freelancers is one of the simplest tax savings available to Pakistani developers, designers, writers and other IT-enabled service providers. It takes minutes to apply, and the lower rate on foreign remittances usually pays back the fee within weeks. This guide covers who should register, the documents and fees, the step-by-step portal process, renewal, a worked example of the savings, and what your invoices should show. To bill clients abroad, you can use our free <a href="/invoice-generator">invoice generator</a> with multi-currency support.</p>
<p><strong>Important:</strong> This is general information, not tax advice. Fees and documents come from PSEB's official portal as of October 2026; tax rates depend on FBR rules and your bank's treatment. Confirm with your bank or a tax practitioner.</p>

<h2>What is PSEB and why freelancers register</h2>
<p>The Pakistan Software Export Board (PSEB) is the federal body that promotes IT and IT-enabled services exports. Its website now redirects to its TechDestination portal, where companies, call centres and freelancers register as members.</p>
<p>For freelancers, the main reason to register is tax. PSEB's own benefits page states that registered IT exporters pay 0.25% tax on export proceeds, while those not registered pay 1%. Banks deduct this when your foreign currency is converted, and it is generally treated as a final tax on that income. Our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax guide for Pakistan 2026</a> explains the regime in more depth.</p>
<h3>Reduced tax rate on IT exports: the conditions</h3>
<ul>
<li>Your work is IT or IT-enabled services provided to clients abroad.</li>
<li>Payment arrives in Pakistan through formal banking channels into your own account, with the correct purpose code.</li>
<li>Your PSEB certificate is valid and has been shared with your bank.</li>
<li>You stay compliant with FBR, including filing your annual return (PSEB asks for it on renewal).</li>
</ul>
<p>The 0.25% concession had been due to lapse on 30 June 2026. Several reports on the Finance Act 2026 say it was extended to 30 June 2029; confirm with your bank that the rate is still being applied.</p>
<h3>Who should register</h3>
<p>PSEB registration is worth considering if most of your income comes from clients outside Pakistan for work such as:</p>
<ul>
<li>Software, web and mobile app development.</li>
<li>UI and UX design, graphic design for digital products and website design.</li>
<li>Digital marketing, SEO and social media management.</li>
<li>Content writing, copywriting and translation delivered online.</li>
<li>Data entry, virtual assistance and other IT-enabled support services.</li>
<li>Video editing, animation and other digital production.</li>
</ul>
<p>Whether a specific service counts as IT-enabled for tax purposes follows FBR's definitions, and your bank applies the rate based on the purpose code of each remittance. If your work is borderline, ask your bank how it classifies the payments before you rely on the lower rate. If you are still choosing where to find clients, our new guide to the <a href="/blog/best-freelance-websites">best freelance websites</a> compares the main platforms.</p>

<h2>PSEB fees for 2026</h2>
<p>PSEB publishes its membership fees on the <a href="https://techdestination.com/industry-facilitation/" target="_blank" rel="noopener noreferrer">TechDestination industry facilitation page</a>. As of October 2026:</p>
<table>
<thead><tr><th>Category</th><th>New registration</th><th>Annual renewal</th></tr></thead>
<tbody>
<tr><td>Freelancer (individual)</td><td>Rs 1,000</td><td>Rs 2,000</td></tr>
<tr><td>Company or firm, under 12 months old</td><td>Rs 5,000</td><td>From Rs 10,000 (by revenue)</td></tr>
<tr><td>Company or firm, over 12 months old</td><td>Rs 10,000</td><td>From Rs 10,000 (by revenue)</td></tr>
<tr><td>Call centre, main office</td><td>Rs 20,000</td><td>Rs 20,000</td></tr>
<tr><td>Call centre, each branch</td><td>Rs 10,000</td><td>Rs 10,000</td></tr>
</tbody>
</table>
<p>Company renewal fees rise with annual revenue, from Rs 10,000 for up to Rs 50 million to Rs 30,000 for Rs 600 million and above. Late renewal surcharges apply to companies (Rs 5,000) and call centres (Rs 10,000). Fees can be paid by debit or credit card on the portal, or by pay order.</p>

<h2>Documents required</h2>
<p>PSEB keeps the freelancer list short:</p>
<ul>
<li><strong>Personal NTN</strong> with no business attached. If you do not have one yet, follow our guide on <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a>.</li>
<li><strong>Personal bank account opening or maintenance certificate</strong> from your bank, in the same name as your CNIC.</li>
<li><strong>CNIC</strong>, front and back.</li>
</ul>
<p>For renewal, PSEB asks only for your latest income tax return (FBR Form 114). That is one more reason to stay a filer; see <a href="/blog/how-to-become-filer-pakistan">how to become filer in Pakistan</a>.</p>

<h2>How to register with PSEB as a freelancer: step by step</h2>
<ol>
<li><strong>Prepare your documents.</strong> Scan your CNIC, NTN certificate and bank certificate. Check that your name is spelled the same on all three.</li>
<li><strong>Create an account.</strong> Open the TechDestination portal and choose new registration. Enter your email, mobile number and a password.</li>
<li><strong>Select the freelancer category.</strong> Choose freelancer rather than company or call centre.</li>
<li><strong>Fill in your profile.</strong> Enter personal details, NTN, bank details and the IT or IT-enabled services you provide.</li>
<li><strong>Upload documents.</strong> Attach the three documents in the formats the portal accepts.</li>
<li><strong>Pay the fee.</strong> Pay Rs 1,000 by card on the portal, or by pay order as PSEB describes.</li>
<li><strong>Wait for approval.</strong> PSEB says non-SECP applications, including freelancers, are processed within up to one working day.</li>
<li><strong>Download your certificate and send it to your bank.</strong> Ask the bank to apply the reduced rate to future export remittances. Without this step, you may keep paying 1%.</li>
</ol>
<p>PSEB lists a support helpline, 0800-01010, on its portal for login and registration issues.</p>
<p>A few habits make the process smoother. Apply from a laptop rather than a phone so uploads are easier to check. Use an email address you will still have next year, because renewal reminders and login resets go there. Save the payment receipt and the certificate PDF in the same folder as your tax records, so you can send them to your bank, your accountant or PSEB again without searching.</p>

<h2>Worked example: how much PSEB registration saves</h2>
<p>Bilal is a WordPress developer in Peshawar who earns USD 2,000 a month from clients abroad, paid into his bank through formal channels. For illustration, assume an exchange rate of PKR 280 per USD.</p>
<table>
<thead><tr><th>Item</th><th>Not registered (1%)</th><th>PSEB-registered (0.25%)</th></tr></thead>
<tbody>
<tr><td>Annual proceeds (USD 24,000 x 280)</td><td>Rs 6,720,000</td><td>Rs 6,720,000</td></tr>
<tr><td>Tax deducted by bank</td><td>Rs 67,200</td><td>Rs 16,800</td></tr>
<tr><td>PSEB fee (first year)</td><td>Rs 0</td><td>Rs 1,000</td></tr>
<tr><td>Total cost</td><td>Rs 67,200</td><td>Rs 17,800</td></tr>
</tbody>
</table>
<p>Registration saves Bilal Rs 49,400 in the first year (Rs 67,200 minus Rs 17,800). In later years the renewal fee is Rs 2,000, so the saving is Rs 48,400 (Rs 67,200 minus Rs 16,800 minus Rs 2,000). Even a freelancer earning a quarter of this amount saves well over the fee.</p>
<h3>Break-even point</h3>
<p>The difference between 1% and 0.25% is 0.75% of your proceeds. To recover the Rs 2,000 renewal fee, you need Rs 266,667 of export proceeds a year (Rs 2,000 divided by 0.0075), which is roughly USD 950 at the illustrative rate above. Almost any freelancer earning regularly from abroad clears that within a month or two. The bigger risk is not the fee but forgetting to share the certificate with your bank, which means paying 1% anyway.</p>
<p>Keep in mind that this tax is deducted on proceeds that reach your Pakistani account. Platform fees, withdrawal charges and exchange rate margins are separate costs that happen before the money arrives, so compare routes carefully.</p>

<h2>Getting paid the right way</h2>
<p>The reduced rate depends on how your money reaches Pakistan. Proceeds that arrive through a bank or an authorised channel, with the correct purpose code for IT services, are what banks treat as export proceeds. Our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a> compares the options, and <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> looks at two common routes.</p>
<p>Many freelancers also open a Freelancer Digital Account, which can hold part of their earnings in foreign currency; see our <a href="/blog/freelancer-digital-account-pakistan">Freelancer Digital Account guide</a>. If you work through marketplaces, our new guides to <a href="/blog/upwork-fees">Upwork fees</a> and <a href="/blog/fiverr-fees">Fiverr fees</a> explain what the platforms deduct before money reaches you.</p>

<h2>What your invoices to foreign clients should show</h2>
<p>Clear invoices make it easier to prove that receipts are export proceeds for IT services. Include:</p>
<ul>
<li>Your full name, address in Pakistan and NTN.</li>
<li>Your PSEB registration number (optional, but useful for your own records).</li>
<li>The client's name and country, showing the service is exported.</li>
<li>A description that clearly identifies IT or IT-enabled services, such as "Website development" or "UI design".</li>
<li>Amount and currency, for example USD, with payment instructions. See our guide to <a href="/blog/foreign-currency-invoice">invoicing in a foreign currency</a>.</li>
<li>A unique invoice number and date that match your bank credits.</li>
</ul>
<p>The <a href="/invoice-templates/modern">modern invoice template</a> works well for overseas clients, and the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> lets you add NTN and currency in one place.</p>

<h2>Renewal and common problems</h2>
<p>PSEB registration runs year to year. When you renew, PSEB keeps your original registration date and updates the year. Problems freelancers commonly report include:</p>
<ul>
<li><strong>Bank still deducting 1%.</strong> Send the bank your current certificate and NTN and ask it to update your profile.</li>
<li><strong>Lapsed certificate.</strong> If you miss renewal, the bank may revert to 1% until you renew.</li>
<li><strong>Name mismatch.</strong> A different spelling on your CNIC, NTN and bank account can delay approval.</li>
<li><strong>No tax return for renewal.</strong> File your return first; PSEB asks for Form 114.</li>
</ul>
<h3>How to renew</h3>
<ol>
<li>Log in to the TechDestination portal as an existing member.</li>
<li>Open the renewal option for your membership.</li>
<li>Upload your latest income tax return (Form 114).</li>
<li>Pay the Rs 2,000 renewal fee by card or pay order.</li>
<li>Download the renewed certificate and send it to your bank again.</li>
</ol>
<p>Set a calendar reminder a month before expiry. Renewal depends on your tax return, so filing on time with FBR and renewing with PSEB go hand in hand.</p>
<h3>Freelancer or company category?</h3>
<p>If you have registered a company with SECP, work through a firm, or employ a team, the company category is designed for you. It uses a business NTN and business bank account, costs Rs 5,000 or Rs 10,000 to join, and renewal rises with revenue. PSEB's benefits page lists extra programmes for registered companies, such as subsidised certifications, trainings and exhibition support. Solo freelancers usually stay in the freelancer category, which is cheaper and simpler.</p>

<h2>PSEB and sales tax on services</h2>
<p>PSEB registration deals with income tax on export proceeds. Provincial sales tax on services is separate. Exports of services are generally treated as not taxable or zero-rated under provincial laws, subject to conditions such as payment in foreign exchange through banks. If you also sell services to clients inside Pakistan, read our guides to <a href="/blog/pra-sales-tax-on-services">PRA sales tax on services</a> and <a href="/blog/srb-sales-tax-on-services">SRB sales tax on services</a>.</p>

<h2>Start invoicing as a registered freelancer</h2>
<p>PSEB registration for freelancers costs Rs 1,000, takes about a day and can cut the tax on your foreign income from 1% to 0.25%. Once your certificate is with your bank, send clean invoices that match every remittance. Create one now with our free <a href="/invoice-generator">invoice generator</a>, then download a PDF in USD, GBP, EUR or PKR.</p>
`,
  },
  {
    slug: "pra-sales-tax-on-services",
    title: "PRA Sales Tax on Services 2026: Punjab Rates and Registration",
    description:
      "PRA sales tax on services in Punjab for 2026-27: 16% standard rate, new 8% reduced rates, free PRA registration on e-PRA, return dates and invoice rules.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "strn-registration-pakistan",
      "sales-tax-invoice-pakistan",
      "finance-act-2026-pakistan-sales-tax",
      "fbr-e-invoicing-pakistan",
    ],
    faqs: [
      {
        q: "What is the PRA sales tax rate on services?",
        a: "The standard rate of Punjab sales tax on services is 16% of the value of the service, according to the Punjab Revenue Authority. Some services carry different rates: telecommunication is 19.5%, and a list of services in Part III of the Second Schedule is taxed at reduced rates without input tax adjustment. After the Punjab Finance Act 2026, many of those reduced rates rose from 5% to 8%.",
      },
      {
        q: "Who must register with PRA?",
        a: "PRA's FAQs state that every person engaged in providing taxable services in Punjab is liable to register. There is no general turnover threshold for taxable services, though the government can set one for specific sectors. If you provide services that are not on the exempt list, you should assume registration applies and confirm your category with PRA or a tax practitioner.",
      },
      {
        q: "Is there a fee for PRA registration?",
        a: "No. PRA's FAQs say there is no fee or charge for obtaining sales tax registration. Registration is done electronically on the e-PRA portal. Anyone with an NTN can enrol, regardless of where the business or head office is located, and persons already registered with FBR for sales tax are given a PRA number with a P prefix instead of a completely new registration.",
      },
      {
        q: "When are PRA returns and payments due?",
        a: "PRA returns are monthly. PRA's tax calendar shows payment due by the 15th and the return due by the 18th of the following month for most listed service categories, while telecommunication services pay and file by the 21st. Due dates can be extended by notification, so check the current PRA calendar each month rather than relying on a fixed date.",
      },
      {
        q: "Do I charge PRA sales tax on services exported abroad?",
        a: "Generally no. PRA's FAQs say export of a taxable service as such is not liable to tax, provided the service is consumed outside Pakistan and paid for in convertible foreign exchange through declared banking channels, subject to conditions. Freelancers exporting IT services to foreign clients usually fall here, but services delivered to clients inside Pakistan are taxable at the applicable rate.",
      },
      {
        q: "What changed for PRA sales tax in the Punjab Finance Act 2026?",
        a: "According to KPMG's brief on provincial laws, the Act raised several 5% reduced rates to 8% (including accountants, architects, interior designers, property dealers, restaurants paid by card or wallet, and event management), cut the maximum input tax adjustment from 90% to 80% of output tax, and blocked input tax on invoices from suppliers not on the ATL. It also tightened the definition of active taxpayer.",
      },
      {
        q: "Can I claim input tax on purchases under PRA?",
        a: "Registered persons paying the standard rate can usually adjust input tax on business purchases, subject to conditions. After the Punjab Finance Act 2026, adjustment is capped at 80% of output tax, input tax on capital goods is spread over twelve monthly instalments, and invoices from suppliers not on the PRA or FBR active taxpayer list are not admissible. Reduced-rate services generally cannot claim input tax at all.",
      },
      {
        q: "What must a PRA sales tax invoice include?",
        a: "A tax invoice should show the supplier's name, address and PRA registration number, the buyer's details, a serial number and date, a description of the service, the value excluding tax, the rate and amount of Punjab sales tax, and the total. Credit and debit notes must reference the original invoice. Some sectors must also issue invoices through PRA's electronic invoice monitoring system.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> PRA sales tax on services is Punjab's provincial sales tax, collected by the Punjab Revenue Authority. The standard rate is 16%, with reduced rates (many now 8%) for listed services. Every person providing taxable services in Punjab must register on the e-PRA portal, for free, and file a monthly return.</p>
<p>If you run an agency, consultancy, salon, restaurant or other service business in Lahore, Faisalabad, Rawalpindi or anywhere else in Punjab, PRA sales tax on services is likely part of your monthly routine. Since the Punjab Finance Act 2026 took effect, several reduced rates have gone up and input tax rules have tightened. This guide covers who must register, current rates, the registration and return process, invoice requirements and a worked example. You can prepare compliant invoices with our free <a href="/invoice-generator">invoice generator</a>, which lets you add tax lines and registration numbers.</p>
<p><strong>Important:</strong> This is general information, not tax advice. Figures come from PRA's published FAQs and tax calendar and KPMG's 2026 summary of provincial tax laws. Confirm your category and rate with PRA or a tax practitioner.</p>

<h2>What is PRA sales tax on services?</h2>
<p>Under Pakistan's constitution, sales tax on goods is federal and handled by FBR, while sales tax on services is provincial. In Punjab, the law is the Punjab Sales Tax on Services Act, 2012, administered by the Punjab Revenue Authority (PRA). Other provinces have their own authorities, including the Sindh Revenue Board; our guide to <a href="/blog/srb-sales-tax-on-services">SRB sales tax on services</a> covers Sindh.</p>
<p>If you sell both goods and services, you may deal with FBR for goods and PRA for services. Our <a href="/blog/strn-registration-pakistan">STRN registration guide</a> explains the federal side.</p>

<h2>PRA registration: who must register</h2>
<p>PRA's own FAQs are direct: every person engaged in providing taxable services is liable to register. There is no general turnover threshold for taxable services, although the government can set one for specific sectors such as hotels. Key points:</p>
<ul>
<li><strong>Registration is free.</strong> PRA states there is no fee or charge for sales tax registration.</li>
<li><strong>Any NTN holder can enrol.</strong> Location of the head office does not matter.</li>
<li><strong>FBR-registered persons are not re-registered.</strong> They get their existing number with a P prefix.</li>
<li><strong>New contract rules.</strong> After the Punjab Finance Act 2026, PRA can direct licensing bodies and procuring agencies not to issue licences or award contracts unless the person is PRA-registered and on the active taxpayer list, with a six-month grace period for newly established businesses.</li>
</ul>

<h2>How to register with PRA: step by step</h2>
<ol>
<li><strong>Get an NTN first.</strong> PRA enrolment relies on your federal NTN. If you need one, see <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a>.</li>
<li><strong>Open the e-PRA portal.</strong> Go to <a href="https://e.pra.punjab.gov.pk/" target="_blank" rel="noopener noreferrer">PRA's e-PRA portal</a> and start a new registration.</li>
<li><strong>Enter business details.</strong> Provide your legal name, CNIC or company details, business address in Punjab, bank account and contact information.</li>
<li><strong>Select your services.</strong> Choose the service categories you provide. This drives the rate PRA expects you to charge.</li>
<li><strong>Upload supporting documents.</strong> PRA's registration manual lists what each type of person needs; have CNIC copies, proof of business premises and, for companies, incorporation documents ready.</li>
<li><strong>Submit and verify.</strong> Complete verification steps and note your PRA registration number once issued.</li>
<li><strong>Start charging tax.</strong> From the date your service is taxable, issue tax invoices and file monthly returns.</li>
</ol>
<p>Before you submit, double-check that the business address and service categories are correct, because they determine which rate PRA expects on your returns. After registration, update your invoice template, quotation format and website terms so every document shows the PRA number and states whether prices include or exclude Punjab sales tax. Telling existing clients in writing avoids disputes when tax first appears on their bills.</p>

<h2>Punjab sales tax on services rates for 2026-27</h2>
<p>PRA's FAQs give a standard rate of 16% of the value of a service, with telecommunication at 19.5%. Part III of the Second Schedule lists reduced rates, usually without input tax adjustment. KPMG's brief on the Punjab Finance Act 2026 reports these changes:</p>
<table>
<thead><tr><th>Service</th><th>Before 2026 Act</th><th>2026-27</th></tr></thead>
<tbody>
<tr><td>Standard rate (most services)</td><td>16%</td><td>16%</td></tr>
<tr><td>Telecommunication</td><td>19.5%</td><td>19.5%</td></tr>
<tr><td>Accountants, auditors, tax and corporate law consultants (qualifying services)</td><td>5%, no input tax</td><td>8%, no input tax</td></tr>
<tr><td>Architects, town planners, interior designers</td><td>5%, no input tax</td><td>8%, no input tax</td></tr>
<tr><td>Property dealers and realtors</td><td>5%, no input tax</td><td>8%, no input tax</td></tr>
<tr><td>Restaurants paid by card, wallet or QR</td><td>5%, no input tax</td><td>8%, no input tax</td></tr>
<tr><td>Event management (new separate entry)</td><td>Part of another entry</td><td>8%, no input tax</td></tr>
<tr><td>Foreign exchange dealers and money changers</td><td>Exempt</td><td>3%, no input tax</td></tr>
</tbody>
</table>
<p>Where the conditions for a reduced rate are not met, the 16% standard rate applies. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out tax at any rate, and the guide to <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> helps if your price already includes tax.</p>

<h2>Input tax rules after the Punjab Finance Act 2026</h2>
<p>Businesses at the standard rate can usually adjust input tax paid on business purchases. The 2026 Act tightened this in four ways, according to KPMG:</p>
<ul>
<li><strong>80% cap.</strong> Input tax adjustment is limited to 80% of output tax for the period (down from 90%), so at least 20% of output tax is paid in cash.</li>
<li><strong>Capital goods spread.</strong> Input tax on machinery and fixed assets is adjusted in twelve equal monthly instalments.</li>
<li><strong>ATL suppliers only.</strong> Input tax is not admissible on invoices from suppliers who are not on the PRA or FBR active taxpayer list.</li>
<li><strong>Risk-based checks.</strong> PRA can defer or disallow claims flagged by its risk system, after giving a hearing.</li>
</ul>
<p>The active taxpayer definition also changed: a registered person who misses the due date for the two most recent consecutive returns is no longer active. That makes filing on time more important than ever, for you and for your suppliers.</p>

<h2>Worked example: a Lahore design studio</h2>
<p>A Lahore interior design studio bills a client Rs 400,000 for design services in November 2026. The studio qualifies for the reduced rate, which is now 8% without input tax.</p>
<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Design fee</td><td>Rs 400,000</td></tr>
<tr><td>Punjab sales tax at 8%</td><td>Rs 32,000</td></tr>
<tr><td>Invoice total</td><td>Rs 432,000</td></tr>
</tbody>
</table>
<p>Under the old 5% rate, tax would have been Rs 20,000, so the client now pays Rs 12,000 more in tax on the same fee. If the studio had quoted a tax-inclusive price of Rs 420,000 before July, the new rate means the fee portion drops to Rs 388,889 (Rs 420,000 divided by 1.08), so check older quotes and contracts before issuing invoices.</p>
<p>Now take a digital marketing agency at the standard rate. Its output tax for the month is Rs 40,000 and it has Rs 38,000 of valid input tax. With the 80% cap, it can adjust at most Rs 32,000 (80% of Rs 40,000), so it pays Rs 8,000 in cash (Rs 40,000 minus Rs 32,000) and carries the remaining Rs 6,000 of input tax forward as the rules allow.</p>

<h2>PRA returns and payment deadlines</h2>
<p>Registered persons file a monthly return on e-PRA. <a href="https://reg.pra.punjab.gov.pk/ptms/TaxeCalander.aspx" target="_blank" rel="noopener noreferrer">PRA's tax calendar</a> shows payment by the 15th and filing by the 18th of the following month for most listed categories, with telecom services paying and filing by the 21st. A simple monthly routine:</p>
<ol>
<li>Close your invoice register for the month and check each invoice has the correct rate.</li>
<li>Collect purchase invoices and confirm suppliers are on the active taxpayer list.</li>
<li>Calculate output tax, admissible input tax and the cash payable.</li>
<li>Generate the payment challan and pay by the 15th.</li>
<li>File the return by the 18th and save the acknowledgment.</li>
</ol>

<h2>PRA tax invoice requirements</h2>
<p>PRA expects registered persons to issue tax invoices and keep proper records. Each invoice should include:</p>
<ul>
<li>Supplier name, address and PRA registration number.</li>
<li>Buyer name, address and registration number if registered.</li>
<li>A unique serial number and date; our <a href="/tools/invoice-number-generator">invoice number generator</a> keeps sequences tidy.</li>
<li>Description of the service, value excluding tax, tax rate and tax amount.</li>
<li>Total amount payable.</li>
</ul>
<p>Credit and debit notes must reference the original invoice, as explained in our <a href="/blog/credit-note-guide">credit note guide</a>. Some sectors, such as restaurants, must also report through PRA's electronic invoice monitoring system. For the federal version of these rules, see our guide to the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a>.</p>

<h2>Exports and freelancers</h2>
<p>PRA states that export of a taxable service is not liable to tax, provided the service is consumed outside Pakistan and paid for in convertible foreign exchange through declared banking channels, subject to conditions. A freelancer in Punjab working only for foreign clients usually has no PRA tax to charge on those invoices, but must check whether registration applies to any local work. Income tax on export proceeds is a separate matter covered in <a href="/blog/pseb-registration-freelancers">PSEB registration for freelancers</a>.</p>
<h3>Mixed local and foreign work</h3>
<p>Many Punjab freelancers and agencies serve both foreign and local clients. A common approach is to keep separate invoice series for exports and local work, so the PRA return clearly shows taxable local sales and the export sales that are not taxed. Keep bank credit advices or proceeds realisation documents for each export invoice; they are the evidence that payment arrived in foreign exchange through banking channels. Our guide to <a href="/blog/invoice-numbering-system">invoice numbering systems</a> shows how to run parallel series without gaps.</p>
<h3>Which services are taxable in Punjab?</h3>
<p>Reporting on the Punjab Finance Act 2025 says Punjab moved to a negative list approach from 1 July 2025, meaning services are broadly taxable unless listed as exempt. In practice, if you sell a service in Punjab and cannot find it in the exempt list, assume it is taxable and check with PRA. Examples that regularly appear in PRA's schedules include advertising, consultancy, IT services sold locally, construction, restaurants, salons, rent-a-car, event management, courier services and property dealing.</p>
<h3>Monthly compliance checklist</h3>
<ul>
<li>Registration active and details current on e-PRA.</li>
<li>Every invoice shows your PRA number, rate and tax amount.</li>
<li>Supplier invoices checked against the active taxpayer list before claiming input tax.</li>
<li>Tax paid by the 15th and return filed by the 18th, or by the current notified dates.</li>
<li>Records kept for at least the period required by law.</li>
</ul>
<h3>Common PRA mistakes to avoid</h3>
<ul>
<li>Charging the old 5% rate after 1 July 2026 on services that moved to 8%.</li>
<li>Claiming input tax on invoices from suppliers who are not on the ATL.</li>
<li>Filing late twice in a row and losing active taxpayer status.</li>
<li>Assuming FBR sales tax registration covers services; you still need the PRA side.</li>
<li>Issuing invoices without a PRA number, which makes it harder for registered clients to claim input tax and may lead them to delay payment.</li>
<li>Mixing taxable local work and exempt export work on one invoice without separating the lines.</li>
</ul>

<h2>Create PRA-ready invoices</h2>
<p>PRA sales tax on services comes down to three habits: register on e-PRA, charge the correct rate (16% or the new 8% reduced rates), and file by the monthly deadlines. Our free <a href="/invoice-generator">invoice generator</a> lets you add your PRA number, a tax line at any rate and a clear service description, then download a PDF. For a clean layout, try the <a href="/invoice-templates/classic">classic invoice template</a>.</p>
`,
  },
  {
    slug: "srb-sales-tax-on-services",
    title: "SRB Sales Tax on Services 2026: Sindh Rates and Registration",
    description:
      "SRB sales tax on services in Sindh for 2026-27: the 15% standard rate, Finance Act 2026 changes, SRB registration steps, monthly returns and invoice rules.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "sales-tax-invoice-pakistan",
      "strn-registration-pakistan",
      "finance-act-2026-pakistan-sales-tax",
      "fbr-e-invoicing-pakistan",
    ],
    faqs: [
      {
        q: "What is the SRB sales tax rate on services in 2026?",
        a: "The standard rate of Sindh sales tax on services is 15%, as reflected in KPMG's summary of the Sindh Finance Act 2026. Certain services are listed in the Second Schedule at reduced rates, such as 8% for ready-mix concrete and dredging, 5% or 8% for beauty services depending on SRB integration, and 2% or 3% for insurance agents and brokers. Check the current schedule for your exact service.",
      },
      {
        q: "Who must register with the Sindh Revenue Board?",
        a: "Persons providing taxable services in or from Sindh are generally required to register under the Sindh Sales Tax on Services Act, 2011. Registration is done electronically through SRB's online system. If you are unsure whether your service is taxable or exempt, check the First Schedule (exempt services) and the Second Schedule (rates), or ask SRB or a tax practitioner before you start invoicing.",
      },
      {
        q: "What changed in the Sindh Finance Act 2026?",
        a: "According to KPMG, the Act moved accounting, auditing and bookkeeping from the 8% reduced rate to the 15% standard rate, did the same for repair and maintenance of machinery and most construction services, cut insurance agents to 2% and brokers to 3%, extended SRB's time to decide de-registration to 180 days, and introduced penalties for supplying invoicing software that does not meet SRB rules.",
      },
      {
        q: "When are SRB returns due?",
        a: "SRB returns are filed monthly through its e-filing system, with tax deposited separately before the return is filed. SRB publishes deposit and filing dates and frequently notifies extensions, so the safest approach is to check the current SRB notice each month and treat the earliest published date as your target. Late deposit and late filing can attract default surcharge and penalties.",
      },
      {
        q: "Do I charge SRB sales tax on services exported from Sindh?",
        a: "Exports of services are generally zero-rated or exempt under provincial laws, subject to conditions such as the service being consumed outside Pakistan and payment arriving in foreign exchange through banking channels. A Karachi freelancer working only for overseas clients usually does not add Sindh sales tax to those invoices, but should confirm the conditions with SRB guidance or a tax adviser.",
      },
      {
        q: "Do I need both PRA and SRB registration?",
        a: "Only if you provide taxable services in both provinces. Each province taxes services provided within its territory, so a firm with offices or clients in both Karachi and Lahore may need registration with both SRB and PRA and must apportion its services correctly. Firms that only operate from Sindh normally deal with SRB alone. Get advice if your services cross provincial lines regularly.",
      },
      {
        q: "Can I claim input tax under SRB?",
        a: "Registered persons charging the standard rate can generally adjust input tax paid on business purchases against their output tax, subject to the conditions and limits in the Act and rules. Services taxed at reduced rates often come without input tax adjustment. The Sindh Finance Act 2026 also clarified when a person who opted out of a reduced rate can switch back, so check your position before choosing a rate.",
      },
      {
        q: "What should a Sindh sales tax invoice include?",
        a: "An SRB tax invoice should show the supplier's name, address and SRB registration number, the buyer's details, a unique serial number and date, a description of the service, the value excluding tax, the rate and amount of Sindh sales tax, and the total. Businesses in sectors required to integrate with SRB's systems must issue invoices through compliant software.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> SRB sales tax on services is Sindh's provincial sales tax, collected by the Sindh Revenue Board under the Sindh Sales Tax on Services Act, 2011. The standard rate is 15%, with reduced rates for listed services. Service providers in Sindh register online with SRB, charge tax on invoices and file monthly returns.</p>
<p>For agencies, consultants, contractors, salons and other service businesses in Karachi, Hyderabad and the rest of Sindh, SRB sales tax on services is a monthly fact of life. The Sindh Finance Act 2026, in force from 1 July 2026, moved several services from reduced rates to the 15% standard rate and added new penalties linked to invoicing software. This guide covers SRB registration, current rates, the 2026 changes, returns, invoice requirements and a worked example. You can build a Sindh-ready invoice with our free <a href="/invoice-generator">invoice generator</a> in a few minutes.</p>
<p><strong>Important:</strong> This is general information, not tax advice. Rates come from the Sindh Finance Act 2026 and KPMG's 2026 brief on provincial tax laws. Check SRB's current notifications and consult a tax practitioner for your specific case.</p>

<h2>What is SRB sales tax on services?</h2>
<p>Sales tax on services is a provincial subject in Pakistan. Sindh was the first province to set up its own authority, the Sindh Revenue Board (SRB), which administers the Sindh Sales Tax on Services Act, 2011 and its rules. Federal sales tax on goods remains with FBR; see our <a href="/blog/strn-registration-pakistan">STRN registration guide</a> for that side.</p>
<p>Each province taxes services provided within its territory. If you also operate in Punjab, read our companion guide to <a href="/blog/pra-sales-tax-on-services">PRA sales tax on services</a>.</p>

<h2>SRB registration: who needs it</h2>
<p>If you provide a taxable service in or from Sindh, you are generally required to register with SRB. Services are taxable unless they appear in the exempt list (the First Schedule) or another exemption applies. Examples of commonly taxable services include advertising, consultancy, IT services delivered locally, construction, accounting, repair and maintenance, beauty services and event management.</p>
<h3>How to register with SRB</h3>
<ol>
<li><strong>Get an NTN.</strong> Your federal NTN is the starting point. See <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a>.</li>
<li><strong>Open SRB's online registration.</strong> Use SRB's e-registration system on its website and create an account.</li>
<li><strong>Enter business and owner details.</strong> Provide legal name, CNIC or company details, business address in Sindh, bank account and contacts.</li>
<li><strong>Select your services.</strong> Choose the categories you provide, which determine the rate.</li>
<li><strong>Upload documents.</strong> Attach the documents SRB requests for your type of person, such as CNIC copies, proof of premises and incorporation papers for companies.</li>
<li><strong>Complete verification.</strong> SRB may verify your premises or details before activating your registration.</li>
<li><strong>Start invoicing with tax.</strong> Once registered, charge Sindh sales tax and file monthly.</li>
</ol>
<h3>Exempt services and services across provinces</h3>
<p>The First Schedule lists exempt services. The 2026 Act adjusted several entries: for example, life insurance for individuals is exempt for policy cover up to Rs 3,500,000 (up from Rs 500,000), and school and university education is exempt where fees do not exceed Rs 500,000 per student per year. Storage and warehousing exemption is now limited to food grains and fresh fruit and vegetables not further processed.</p>
<p>If you provide services in more than one province, each authority taxes the services provided in its territory. A Karachi agency running a campaign for a Lahore client, or a firm with branches in both cities, needs to work out which province's tax applies to each service and may need registration with both SRB and PRA. Keep the place of service clear on each invoice and get advice if the split is not obvious.</p>
<p>If you stop providing taxable services, you can apply to de-register. The Sindh Finance Act 2026 extended SRB's time to dispose of a de-registration application from three months to 180 days, and confirmed that liabilities for past periods remain.</p>

<h2>Sindh sales tax on services rates for 2026-27</h2>
<p>The standard rate is 15%. KPMG's summary of the <a href="https://www.sindhlaws.gov.pk/Setup/Publications_SindhCode/PUB-NEW-26-000096.pdf" target="_blank" rel="noopener noreferrer">Sindh Finance Act 2026</a> lists these changes to reduced rates:</p>
<table>
<thead><tr><th>Service</th><th>Before 1 July 2026</th><th>From 1 July 2026</th></tr></thead>
<tbody>
<tr><td>Accounting, auditing and bookkeeping</td><td>8% reduced</td><td>15% standard</td></tr>
<tr><td>Maintenance and repair of machinery and equipment</td><td>8% reduced</td><td>15% standard</td></tr>
<tr><td>Construction services (most)</td><td>15%, or 8% by option</td><td>15%, no reduced option</td></tr>
<tr><td>Ready-mix concrete; dredging and silt removal</td><td>15%, or 8% by option</td><td>8%</td></tr>
<tr><td>Property developers and promoters</td><td>Fixed amounts</td><td>Rs 100 per sq yd of land plus Rs 50 per sq ft covered area</td></tr>
<tr><td>Insurance agents / insurance brokers</td><td>5%</td><td>2% / 3%</td></tr>
<tr><td>Beauty and physical well-being services</td><td>8%</td><td>8%, or 5% if integrated with SRB</td></tr>
<tr><td>Education (fees above Rs 500,000 per student per year)</td><td>3%</td><td>3%</td></tr>
</tbody>
</table>
<p>Reduced rates often come with conditions, such as filing through SRB's e-filing option or integrating sales with SRB's computerised system, as with the 5% rate for integrated beauty services. If you do not meet the condition, the higher rate applies, so read the conditions column, not just the percentage. For rates not listed, check the current Second Schedule or ask SRB. Use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to work out tax at 15%, 8% or any other rate.</p>

<h2>Worked example: a Karachi bookkeeping firm</h2>
<p>A small Karachi bookkeeping firm bills a client Rs 200,000 a month. Before 1 July 2026, bookkeeping was taxed at the 8% reduced rate. From July, it falls under the 15% standard rate.</p>
<table>
<thead><tr><th>Line</th><th>Before (8%)</th><th>2026-27 (15%)</th></tr></thead>
<tbody>
<tr><td>Monthly fee</td><td>Rs 200,000</td><td>Rs 200,000</td></tr>
<tr><td>Sindh sales tax</td><td>Rs 16,000</td><td>Rs 30,000</td></tr>
<tr><td>Invoice total</td><td>Rs 216,000</td><td>Rs 230,000</td></tr>
<tr><td>Tax over 12 months</td><td>Rs 192,000</td><td>Rs 360,000</td></tr>
</tbody>
</table>
<p>The client pays Rs 14,000 more tax each month (Rs 30,000 minus Rs 16,000), or Rs 168,000 a year. Because the firm now charges the standard rate, it may be able to adjust input tax on its own business purchases, such as software and office services, subject to the rules. Firms in this position should update price lists and engagement letters so clients are not surprised by the higher total.</p>
<p>The same arithmetic applies to repair and maintenance workshops and most construction contractors that lost the reduced rate. A workshop billing Rs 80,000 for machinery repair now adds Rs 12,000 of Sindh sales tax (15%) instead of Rs 6,400 (8%), a difference of Rs 5,600 per job. If your contracts quote prices "inclusive of all taxes", the higher rate comes out of your margin, so review long-running contracts signed before July 2026 and agree how the change will be handled.</p>

<h2>Input tax and switching rates</h2>
<p>Under the standard rate, registered persons can generally adjust input tax paid on purchases used for taxable services, subject to conditions. Reduced rates often come without input tax. The 2026 Act clarified the rules for companies that opted out of a reduced rate to claim input tax and later want to switch back, allowing this subject to the general permission conditions. Before choosing, compare your likely input tax with the difference between the two rates.</p>

<h2>SRB returns and payments</h2>
<p>SRB returns are monthly. Tax is deposited electronically and the return is e-filed through SRB's system, each with its own deadline, and SRB often announces extensions. A practical routine:</p>
<ol>
<li>Close the month's invoice register and check every invoice shows the correct rate.</li>
<li>Gather purchase invoices for input tax and confirm suppliers are registered and active.</li>
<li>Calculate output tax, admissible input tax and net payable.</li>
<li>Generate the payment challan and deposit tax by SRB's due date.</li>
<li>E-file the return and keep the acknowledgment with your records.</li>
</ol>
<h3>What happens if you file or pay late</h3>
<p>Late deposit of tax generally attracts default surcharge on the unpaid amount, and late or missing returns can lead to penalties and, eventually, assessment by SRB. The 2026 Act also changed the appeal process: to get an automatic stay on recovery while an appeal is pending, a taxpayer now generally pays 20% of the tax demanded instead of 10%. Disputes are cheaper to avoid than to fight, so file on time even if you cannot pay the full amount, and talk to SRB or an adviser early.</p>
<p>Many service businesses in Sindh also deal with FBR for income tax. Staying on both lists matters: see <a href="/blog/how-to-become-filer-pakistan">how to become filer in Pakistan</a> for the income tax side.</p>

<h2>SRB invoice requirements and software</h2>
<p>A Sindh sales tax invoice should include:</p>
<ul>
<li>Supplier's name, address and SRB registration number.</li>
<li>Buyer's name, address and registration number if registered.</li>
<li>A unique serial number and date; our <a href="/tools/invoice-number-generator">invoice number generator</a> keeps your sequence consistent.</li>
<li>Description of the service, value excluding tax, rate and Sindh sales tax amount.</li>
<li>Total payable, plus payment terms.</li>
</ul>
<p>Sectors that SRB requires to integrate with its systems must issue invoices through conforming software. The 2026 Act introduced a penalty of Rs 100,000 to Rs 1,000,000 on anyone who designs, develops or supplies invoicing software that does not meet SRB's invoice and online integration rules, so check that any POS or billing software you buy is approved. For FBR's parallel system, see our guide to <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing in Pakistan</a>.</p>
<h3>Sample invoice layout</h3>
<p>Here is how the bookkeeping firm from the example above might lay out its monthly invoice:</p>
<ul>
<li><strong>Header:</strong> firm name, Karachi address, NTN and SRB registration number.</li>
<li><strong>Invoice details:</strong> invoice number KHI-2026-0112, date 30 November 2026, due date 15 December 2026.</li>
<li><strong>Client:</strong> client company name, address and registration number.</li>
<li><strong>Line item:</strong> "Monthly bookkeeping services, November 2026": Rs 200,000.</li>
<li><strong>Tax:</strong> Sindh sales tax at 15%: Rs 30,000.</li>
<li><strong>Total:</strong> Rs 230,000, with IBAN and payment terms.</li>
</ul>
<p>Our guide to <a href="/blog/tax-invoice-guide">what makes a valid tax invoice</a> explains why each field matters.</p>

<h2>Sindh vs Punjab at a glance</h2>
<table>
<thead><tr><th>Item</th><th>Sindh (SRB)</th><th>Punjab (PRA)</th></tr></thead>
<tbody>
<tr><td>Law</td><td>Sindh Sales Tax on Services Act, 2011</td><td>Punjab Sales Tax on Services Act, 2012</td></tr>
<tr><td>Standard rate</td><td>15%</td><td>16%</td></tr>
<tr><td>Accounting and bookkeeping</td><td>15% from July 2026</td><td>8% reduced (qualifying services) from July 2026</td></tr>
<tr><td>Returns</td><td>Monthly e-filing</td><td>Monthly, typically pay by 15th, file by 18th</td></tr>
<tr><td>Exports of services</td><td>Generally zero-rated or exempt, conditions apply</td><td>Not taxable, conditions apply</td></tr>
</tbody>
</table>

<h2>Exports and Karachi freelancers</h2>
<p>Exports of services are generally zero-rated or exempt under provincial laws, subject to conditions such as consumption outside Pakistan and receipt of foreign exchange through banks. If you are a Karachi freelancer billing only overseas clients, Sindh sales tax usually does not appear on those invoices. Income tax on export proceeds is handled by your bank under FBR's regime; see <a href="/blog/pseb-registration-freelancers">PSEB registration for freelancers</a> to cut that rate to 0.25%. If you also invoice local companies, our guide to <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a> shows how to lay out the tax lines.</p>

<h2>Create SRB-compliant invoices</h2>
<p>SRB sales tax on services in 2026-27 means a 15% standard rate for most services, higher rates for several previously reduced categories, and stricter software rules. Register with SRB, charge the right rate, and file every month on time. Our free <a href="/invoice-generator">invoice generator</a> lets you add your SRB number, a 15% tax line and your bank details, then download a PDF. For a professional look, try the <a href="/invoice-templates/slate">slate invoice template</a>.</p>
`,
  },
  {
    slug: "jazzcash-easypaisa-business-account",
    title: "JazzCash Business Account vs Easypaisa Merchant Account 2026",
    description:
      "JazzCash business account vs Easypaisa merchant account in 2026: how to sign up, QR and IBFT fees, limits, bank transfers and invoicing for wallet payments.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "payment-gateway-pakistan",
      "raast-business-payments-pakistan",
      "qr-code-on-invoice",
      "bank-details-on-invoice",
    ],
    faqs: [
      {
        q: "How do I open a JazzCash business account?",
        a: "Download the JazzCash Business app, register with your CNIC and a mobile number in your name, complete the verification steps and set up your business profile. Mobilink Microfinance Bank's Q1 2026 schedule of charges lists business account registration and maintenance as free. Once approved, you receive a merchant QR code and can accept payments from customers' wallets and bank apps.",
      },
      {
        q: "How do I become an Easypaisa merchant?",
        a: "In the Easypaisa app, choose the option to become an Easypaisa merchant, accept the terms and complete the KYC steps. Easypaisa says this route is designed for individuals and sole proprietors running small businesses and that your QR code is issued right after registration, with the process taking a few minutes. Larger businesses may need a different merchant product with business documents.",
      },
      {
        q: "What are JazzCash business account fees in 2026?",
        a: "Mobilink Microfinance Bank's Q1 2026 schedule lists a standard merchant discount rate of 0.25% including FED on QR and Till payments, 2% on incoming IBFT, 2% on funds from a JazzCash account, 3% on pay via link, 1% on Raast request to pay, and 2% on tap on phone. Transfers to any bank account are free up to Rs 50,000 a month. Fees change quarterly, so check the current schedule.",
      },
      {
        q: "Is it free to receive money in an Easypaisa merchant account?",
        a: "Easypaisa's merchant QR terms allow the bank to debit applicable charges, but we could not verify a current published merchant fee for 2026. Charges can differ by payment method and change over time. Check the latest schedule of charges on Easypaisa's website or the fee shown in the app before you rely on a particular rate, and compare it with JazzCash and Raast for your expected volume.",
      },
      {
        q: "What are the limits on a JazzCash or Easypaisa business account?",
        a: "Limits depend on your account level, KYC and merchant category. SBP's 2025 rules require providers to classify merchants into three categories and set transaction and balance limits based on sales turnover and risk. Easypaisa's onboarding page mentions limits for its simplified merchant route. Check the limits shown in your app and ask about upgrading if your monthly sales are growing.",
      },
      {
        q: "Can freelancers use JazzCash to receive international payments?",
        a: "Mobilink Microfinance Bank's schedule lists a 5% merchant discount rate on international payments received through pay via link for the freelance segment. That is far higher than most bank routes. Freelancers exporting IT services usually do better receiving foreign currency into a bank account through formal channels, which also supports the reduced 0.25% income tax rate for PSEB-registered exporters.",
      },
      {
        q: "Should I put my wallet number on invoices?",
        a: "You can, but a QR code or Raast ID is usually better. Wallet numbers are mobile numbers, which some clients mistype, and a bank-to-wallet transfer may be charged as incoming IBFT on your side. Show a merchant QR or Raast ID for local customers, and your IBAN for business clients who pay by bank transfer, so you receive payments through the cheapest channel.",
      },
      {
        q: "JazzCash or Easypaisa: which is better for a small business?",
        a: "Both are widely used, and most customers in Pakistan can pay either through Raast-enabled QR codes. Choose based on the fees in each provider's current schedule, settlement to your bank, the app experience and which wallet your customers already use. Many small businesses keep both and display both QR codes at the counter, then compare costs after a few months of real transactions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A JazzCash business account or Easypaisa merchant account lets a small business accept payments by QR code, wallet transfer and bank transfer. Both are opened in-app with your CNIC. JazzCash's Q1 2026 schedule lists free registration and a 0.25% fee on QR payments, but 2% on incoming bank transfers, so the payment method matters.</p>
<p>Shops, home businesses, tutors and freelancers across Pakistan use a JazzCash business account or an Easypaisa merchant account to get paid without cash. Setup takes minutes, but fees vary widely by how the customer pays, and few owners read the schedule of charges. This guide compares the two, walks through sign-up, shows the 2026 fees we could verify with a worked example, and explains how to invoice for wallet payments. To send a professional bill with a QR code or payment details, use our free <a href="/invoice-generator">invoice generator</a>.</p>

<h2>What is a JazzCash business account?</h2>
<p>JazzCash Business is the merchant app operated with Mobilink Microfinance Bank. It gives you a business wallet, a merchant QR code (also usable as a Till ID), payment links, and transfers to bank accounts. Customers pay by scanning your QR from JazzCash or other Raast-enabled apps, or by sending money to your account.</p>
<p>According to <a href="https://mobilinkbank.com/assets/documents/SOC_Q1_2026.pdf" target="_blank" rel="noopener noreferrer">Mobilink Microfinance Bank's Q1 2026 schedule of charges</a>, business account registration, maintenance, SMS alerts for each transaction and MPIN setup are free.</p>

<h2>What is an Easypaisa merchant account?</h2>
<p>Easypaisa, operated by easypaisa Bank, offers a merchant option inside its app. Easypaisa describes it as a way to get a unique QR code so customers can pay straight into your account. Its onboarding page says the simplified route is aimed at individuals and sole proprietors, the QR is issued right after registration, and the process takes a few minutes. Easypaisa also supports Raast person-to-merchant QR payments, with static and dynamic codes. Its <a href="https://easypaisa.com.pk/public-information/downloads/Terms-and-Conditions-Merchnat-QR-04022026.pdf" target="_blank" rel="noopener noreferrer">merchant QR terms</a> were updated in February 2026.</p>
<h3>JazzCash vs Easypaisa at a glance</h3>
<table>
<thead><tr><th>Feature</th><th>JazzCash Business</th><th>Easypaisa merchant</th></tr></thead>
<tbody>
<tr><td>How to sign up</td><td>Separate JazzCash Business app</td><td>Become-a-merchant option in the Easypaisa app</td></tr>
<tr><td>Main ID needed</td><td>CNIC and SIM in your name</td><td>CNIC and SIM in your name</td></tr>
<tr><td>QR payments</td><td>Yes, merchant QR and Till</td><td>Yes, static and dynamic QR</td></tr>
<tr><td>Raast QR support</td><td>Yes</td><td>Yes (P2M)</td></tr>
<tr><td>Payment links</td><td>Yes, 3% (Q1 2026 schedule)</td><td>Check current Easypaisa offering</td></tr>
<tr><td>Published 2026 merchant fees</td><td>Yes, in the quarterly schedule of charges</td><td>Check the app or current schedule</td></tr>
</tbody>
</table>
<h3>Business account vs personal wallet</h3>
<p>Many small sellers start by taking payments into a personal JazzCash or Easypaisa wallet. That works for a while, but a merchant account is better once you sell regularly: personal wallets have lower limits, mixing household and business money makes bookkeeping harder, and receiving frequent business payments in a personal wallet can trigger account reviews. A business account also gives you a merchant QR with your business name, which reassures customers that they are paying the right person.</p>

<h2>JazzCash business account fees in 2026</h2>
<p>These figures come from Mobilink Microfinance Bank's Q1 2026 schedule for the JazzCash Business (Merchant) app. Fees can change each quarter, so confirm the current schedule before relying on them.</p>
<table>
<thead><tr><th>Service</th><th>JazzCash Business (Q1 2026)</th></tr></thead>
<tbody>
<tr><td>Account registration and maintenance</td><td>Free</td></tr>
<tr><td>Receiving QR or Till payments</td><td>0.25% including FED</td></tr>
<tr><td>Incoming IBFT (bank to wallet)</td><td>2% including FED</td></tr>
<tr><td>Receiving from a JazzCash account</td><td>2% including FED</td></tr>
<tr><td>Pay via link</td><td>3%</td></tr>
<tr><td>Raast request to pay</td><td>1% including FED</td></tr>
<tr><td>Tap on phone (card acceptance)</td><td>2%</td></tr>
<tr><td>International payments via link (freelance segment)</td><td>5%</td></tr>
<tr><td>Send money to any bank account</td><td>Free up to Rs 50,000 a month, then 0.1% or Rs 200, whichever is lower</td></tr>
<tr><td>ATM cash withdrawal via 1-Link</td><td>Free up to Rs 50,000, then consumer pricing</td></tr>
<tr><td>Cash deposit through agent</td><td>0.5%</td></tr>
</tbody>
</table>
<p>The schedule also notes that refunds made the same day do not incur the merchant fee, while refunds on a later day do. For Easypaisa, we could not verify a current published merchant fee for 2026; check the schedule of charges on Easypaisa's site or the fee shown in the app.</p>

<h2>How to open a JazzCash business account or Easypaisa merchant account</h2>
<ol>
<li><strong>Use a SIM in your name.</strong> Both providers verify the mobile number against your CNIC.</li>
<li><strong>Download the right app.</strong> Use JazzCash Business for JazzCash, or the main Easypaisa app and its become-a-merchant option.</li>
<li><strong>Register with your CNIC.</strong> Enter your CNIC number and issue date, and complete biometric or selfie verification as prompted.</li>
<li><strong>Add business details.</strong> Enter the business name, category, city and address. Larger businesses may be asked for NTN or other documents.</li>
<li><strong>Set your MPIN and accept the terms.</strong> Read the merchant terms, including the right to debit charges.</li>
<li><strong>Get your QR code.</strong> Download or print it, and request a standee if offered.</li>
<li><strong>Link a bank account.</strong> Add your IBAN so you can move takings to your bank account regularly.</li>
</ol>
<h3>Security tips for merchant accounts</h3>
<ul>
<li>Never share your MPIN or one-time codes, including with callers claiming to be from JazzCash, Easypaisa or a bank.</li>
<li>Confirm each payment in the app or by SMS before handing over goods; screenshots can be faked.</li>
<li>Keep the printed QR where staff can see it, so nobody can cover it with a different code.</li>
<li>Move surplus balances to your bank account on a regular schedule.</li>
<li>Use the refund function on the same day where possible, since same-day refunds avoid the JazzCash merchant fee.</li>
</ul>

<h2>Limits and SBP merchant rules</h2>
<p>Wallet limits depend on your account level, verification and merchant type. Under SBP's 2025 payment systems rules, providers must classify merchants into three categories and set periodic transaction and balance limits for the larger categories based on sales turnover and risk. Easypaisa's onboarding page also mentions limits for its simplified merchant route. If your sales grow, ask the provider to upgrade your account rather than splitting payments across personal wallets, which can cause compliance problems.</p>

<h2>Worked example: what a month of payments costs</h2>
<p>Sana runs a home bakery in Karachi with a JazzCash business account. In one month she receives Rs 400,000:</p>
<table>
<thead><tr><th>Payment method</th><th>Amount</th><th>Fee rate</th><th>Fee</th></tr></thead>
<tbody>
<tr><td>QR payments at the counter</td><td>Rs 300,000</td><td>0.25%</td><td>Rs 750</td></tr>
<tr><td>Bank transfers (IBFT) from customers</td><td>Rs 100,000</td><td>2%</td><td>Rs 2,000</td></tr>
<tr><td>Total</td><td>Rs 400,000</td><td></td><td>Rs 2,750</td></tr>
</tbody>
</table>
<p>Her effective cost is about 0.69% (Rs 2,750 divided by Rs 400,000). If she nudged the bank-transfer customers to scan her QR instead, the fee on that Rs 100,000 would fall from Rs 2,000 to Rs 250, cutting her monthly cost to Rs 1,000 (Rs 750 plus Rs 250), or 0.25%. Moving money to her bank: the first Rs 50,000 a month is free, and each transfer after that costs 0.1% or Rs 200, whichever is lower, so moving the balance in larger transfers keeps costs predictable.</p>

<h2>Invoicing customers who pay by wallet</h2>
<p>For anything beyond a counter sale, such as catering orders, tuition fees or freelance work, send an invoice so the customer knows exactly what to pay and you can match payments later. Include:</p>
<ul>
<li>Your business name and contact number, plus NTN if you have one.</li>
<li>A unique invoice number, which customers can enter as the payment reference. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a sequence.</li>
<li>Your merchant QR code or Raast ID. Our guide to <a href="/blog/qr-code-on-invoice">adding a QR code to an invoice</a> shows how.</li>
<li>Your IBAN for business clients who pay by bank; see <a href="/blog/bank-details-on-invoice">which bank details to put on an invoice</a>.</li>
<li>Clear payment terms and a due date, as explained in our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
</ul>
<p>Add a short line such as "Please pay by scanning the QR code and enter the invoice number as the reference." Customers follow simple instructions, and a clear reference turns month-end matching from guesswork into a quick tick-off against your statement.</p>
<p>The <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> supports PKR amounts and payment notes, and the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps the QR and payment details easy to find on a phone screen.</p>

<h3>Which one should you choose?</h3>
<p>There is no single winner. A few practical questions settle it for most businesses:</p>
<ul>
<li><strong>Which wallet do your customers use?</strong> If most of your regulars use one app, start there, but remember Raast QR lets other banking apps pay too.</li>
<li><strong>How do customers usually pay?</strong> If many send bank transfers, look closely at the incoming IBFT fee, since 2% on JazzCash is eight times the QR rate.</li>
<li><strong>How often will you move money to your bank?</strong> Compare free transfer allowances and charges above them.</li>
<li><strong>Do you need payment links or online checkout?</strong> Link and gateway fees are higher than QR, so use them only where needed.</li>
</ul>
<p>Also think about settlement. Money in a merchant wallet is convenient for paying suppliers who also use wallets, but rent, salaries and tax payments usually go from a bank account. A business that moves takings to the bank once a week, rather than after every sale, keeps transfer costs low and still has cash where it needs it.</p>
<p>Many shops simply run both accounts for a quarter, display both QR codes, and then keep the one with lower real costs based on their own statements.</p>

<h2>Wallets vs Raast vs bank gateways</h2>
<p>Raast, SBP's instant payment system, now connects banks and wallets, so a customer with any major banking app can usually pay your QR. Our guide to <a href="/blog/raast-business-payments-pakistan">Raast business payments in Pakistan</a> explains how it works. If you sell online and need card payments and checkout pages, compare options in our <a href="/blog/payment-gateway-pakistan">payment gateway Pakistan guide</a>.</p>
<p>Freelancers billing overseas clients should look elsewhere: the 5% fee on international pay-via-link payments is high, and receiving foreign currency through a bank supports the reduced income tax rate described in <a href="/blog/pseb-registration-freelancers">PSEB registration for freelancers</a>. See also <a href="/blog/receive-payment-from-abroad-pakistan">how to receive payment from abroad in Pakistan</a>.</p>

<h2>Tax and record-keeping</h2>
<p>At month end, download the statement from your merchant app and reconcile it against your invoices: mark each invoice paid, note the fee deducted, and follow up on anything still open. Recording fees as a business expense keeps your profit figures accurate. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> helps if some customers regularly pay after the due date.</p>
<p>Wallet receipts are business income. Keep monthly statements from the app, match them to your invoices, and use them when you file your return; see <a href="/blog/how-to-become-filer-pakistan">how to become filer in Pakistan</a>. If your services are taxable in your province, wallet payments do not change your obligation to charge provincial sales tax, as covered in our guide to <a href="/blog/pra-sales-tax-on-services">PRA sales tax on services</a>.</p>

<h2>Send your first wallet-ready invoice</h2>
<p>A JazzCash business account or Easypaisa merchant account is a quick, low-cost way to get paid in Pakistan, especially when customers pay by QR rather than bank transfer. Add your QR code, invoice number and IBAN to every bill so payments land through the cheapest channel and are easy to match. Create one now with our free <a href="/invoice-generator">invoice generator</a> and download a PDF to share on WhatsApp or email.</p>
`,
  },
];
