import type { PostDraft } from "../blog";

export const TAX_GCC_ASIA_2026_POSTS: PostDraft[] = [
  {
    slug: "saudi-vat-registration",
    title: "Saudi VAT Registration: Threshold, Steps and Deadlines",
    description:
      "Saudi VAT registration explained: the SAR 375,000 mandatory threshold, the SAR 187,500 voluntary option, ZATCA registration steps, deadlines and fines.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Saudi Arabia",
    related: [
      "saudi-freelance-license",
      "zatca-e-invoicing-guide",
      "zatca-phase-2-wave-25",
      "arabic-english-invoice",
    ],
    faqs: [
      {
        q: "What is the VAT registration threshold in Saudi Arabia?",
        a: "Registration is mandatory for a resident business whose taxable supplies in the last 12 months exceeded SAR 375,000, or are expected to exceed SAR 375,000 in the next 12 months. A business may register voluntarily once its taxable supplies or taxable expenses exceed SAR 187,500. Non-resident businesses that make taxable supplies in the Kingdom generally have no threshold and may have to register from their first supply. Check the current figures on the ZATCA website before you rely on them.",
      },
      {
        q: "How long do I have to register for VAT after crossing SAR 375,000?",
        a: "Advisers generally describe a 30-day window: once you know you have crossed, or will cross, the SAR 375,000 mandatory threshold, you should apply to ZATCA within 30 days. The exact trigger, whether it runs from the day you exceed the figure or from the end of that month, is set in the VAT Implementing Regulations, so confirm the date that applies to your case with ZATCA or an adviser. Applying early is always safer than applying late.",
      },
      {
        q: "What is the penalty for not registering for VAT in Saudi Arabia?",
        a: "The Saudi VAT Law sets a fine of SAR 10,000 for a person who is required to register and fails to apply within the deadline. On top of that, ZATCA can register you itself and assess the VAT you should have charged from the date you became liable, plus late payment penalties. Because you usually cannot recover that VAT from customers after the fact, it ends up coming out of your margin. Penalty rules change, so check the current position.",
      },
      {
        q: "Can a freelancer register for VAT in Saudi Arabia?",
        a: "Yes, if the freelancer is carrying on an economic activity and meets the threshold or chooses to register voluntarily. A freelancer with taxable supplies above SAR 375,000 a year must register. One with supplies or expenses above SAR 187,500 can register voluntarily, which lets them recover input VAT on equipment and software. Registration also brings filing duties and ZATCA e-invoicing rules, so weigh the admin cost against the benefit before registering voluntarily.",
      },
      {
        q: "What documents do I need for ZATCA VAT registration?",
        a: "Expect to provide your commercial registration or freelance licence details, the national ID or Iqama of the owner or authorised person, contact details and a national address, a Saudi bank account (IBAN), a description of your business activities, and your turnover figures or forecasts. Companies may also need articles of association and details of partners. ZATCA can ask for more, so have scanned copies ready before you start the online application.",
      },
      {
        q: "What does a Saudi VAT number look like?",
        a: "A Saudi VAT registration number is 15 digits long and, in practice, starts and ends with the digit 3. You must show it on your tax invoices and simplified tax invoices. Customers who are VAT registered will also check that it matches the name on the invoice before they claim input tax, so make sure your invoice uses exactly the legal name on your ZATCA registration certificate.",
      },
      {
        q: "How often do Saudi VAT-registered businesses file returns?",
        a: "Businesses with annual taxable supplies above SAR 40 million file monthly. Most others file quarterly, although a smaller business can generally choose monthly filing. Returns and payment are due by the last day of the month after the end of the tax period. ZATCA confirms your filing period when you register, so check your certificate and your ZATCA account rather than assuming quarterly.",
      },
      {
        q: "Do I need e-invoicing software once I register for VAT in Saudi Arabia?",
        a: "Yes. Since ZATCA's Phase 1 started in December 2021, VAT-registered taxpayers must generate tax invoices and simplified tax invoices with a compliant electronic solution. Phase 2 then adds integration with ZATCA's Fatoora platform, rolled out in waves. A PDF made in a general invoice tool is not a ZATCA-compliant e-invoice, so registered businesses need software that meets the ZATCA specifications.",
      },
      {
        q: "Can I cancel my Saudi VAT registration if my sales fall?",
        a: "Possibly. A business that stops making taxable supplies must apply to deregister, and one whose supplies fall below the relevant threshold may be able to apply voluntarily. Amendments to the VAT Implementing Regulations that took effect in April 2025 also mean goods kept on hand at deregistration can be treated as a deemed supply, so VAT may be due on them. Get advice before applying.",
      },
    ],
    content: `
<p><strong>Saudi VAT registration</strong> is mandatory once a resident business's taxable supplies exceed SAR 375,000 in the past 12 months, or are expected to exceed it in the next 12. You can register voluntarily from SAR 187,500. You apply online with ZATCA, generally within 30 days of crossing the threshold, and late registration can mean a SAR 10,000 fine.</p>
<p>This guide walks through the KSA VAT threshold rules, who has to register, the ZATCA registration steps, worked examples and what changes on your invoices the day your registration takes effect. It is written for small businesses, freelancers and foreign sellers. It is a practical overview, not legal or tax advice, so confirm your own position with ZATCA or a qualified adviser.</p>

<h2>What Saudi VAT registration means</h2>
<p>Saudi Arabia introduced VAT on 1 January 2018 and raised the standard rate from 5% to 15% on 1 July 2020. The tax is run by the Zakat, Tax and Customs Authority (ZATCA). Once you are registered you must charge VAT on taxable sales, issue compliant tax invoices, file VAT returns and keep records. In exchange, you can usually recover the VAT you pay on business purchases.</p>
<p>Saudi VAT registration is not just a form. It changes how you price, how you invoice and which software you use. Since December 2021, every VAT-registered business must issue invoices through a ZATCA-compliant electronic solution, which we cover in detail in our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a>. If you are new to how VAT works in general, our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> explains the basics.</p>

<h2>The KSA VAT threshold: mandatory and voluntary</h2>
<p>There are two numbers to know. They are fixed in Saudi riyals and have not changed since VAT started, but check the ZATCA website for the current figures.</p>
<table>
<thead>
<tr><th>Situation</th><th>Threshold</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td>Mandatory registration (residents)</td><td>Taxable supplies above SAR 375,000 in the last 12 months, or expected in the next 12 months</td><td>You must apply to register</td></tr>
<tr><td>Voluntary registration (residents)</td><td>Taxable supplies or taxable expenses above SAR 187,500</td><td>You may register if it suits you</td></tr>
<tr><td>Below SAR 187,500</td><td>Under both figures</td><td>You cannot normally register</td></tr>
<tr><td>Non-residents making taxable supplies in KSA</td><td>Generally no threshold</td><td>You may have to register from the first supply where no one else accounts for the VAT</td></tr>
</tbody>
</table>
<p>Two details trip people up. First, the test is on a rolling 12-month basis, not the calendar year. You check at the end of every month whether the last 12 months, or the next 12, push you over SAR 375,000. Second, it counts taxable supplies: standard-rated and zero-rated sales both count, while exempt supplies such as most residential rent and certain financial services do not. Our article on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference.</p>

<h3>The forward-looking test</h3>
<p>Many small businesses only watch the backward-looking test. But if you sign a contract today that will clearly take your next 12 months of sales over SAR 375,000, you are already required to register. A consultant who wins a SAR 420,000 annual retainer in March does not wait until the money has been invoiced. The obligation arises when there are reasonable grounds to expect the threshold will be exceeded.</p>

<h2>Who needs to register for Saudi VAT</h2>
<ul>
<li><strong>Resident companies and establishments</strong> whose taxable supplies cross SAR 375,000.</li>
<li><strong>Freelancers and sole proprietors</strong> carrying on an economic activity. There is no special exemption for individuals once they cross the threshold.</li>
<li><strong>Non-resident businesses</strong> making taxable supplies in the Kingdom where they, rather than the customer, must account for the VAT. Foreign digital service providers selling to Saudi consumers are the common example. A non-resident may need to appoint a tax representative.</li>
<li><strong>Members of a VAT group</strong>, where related companies register together. The April 2025 amendments to the VAT Implementing Regulations tightened the rules for forming VAT groups, so take advice before setting one up.</li>
</ul>
<p>If you only make exempt supplies, you generally do not register. If your supplies are all zero-rated, for example exports, you may be able to ask ZATCA for an exception from registration, but most exporters still register so they can reclaim input VAT.</p>

<h2>ZATCA registration steps</h2>
<p>Saudi VAT registration is done online through ZATCA's e-services portal. The screens change from time to time, but the process usually follows these steps:</p>
<ol>
<li><strong>Check your turnover.</strong> Add up taxable supplies for the last 12 months and forecast the next 12. Keep the working, because ZATCA may ask for it.</li>
<li><strong>Gather documents.</strong> Commercial registration or freelance licence, national ID or Iqama of the owner or authorised signatory, national address, IBAN, activity details and financial information. Companies may need articles of association and partner details.</li>
<li><strong>Log in to ZATCA.</strong> Access the portal with your existing ZATCA account or through the national single sign-on, then choose VAT registration.</li>
<li><strong>Complete the application.</strong> Enter your business details, activities, turnover and the date you crossed, or expect to cross, the threshold. Pick mandatory or voluntary registration.</li>
<li><strong>Submit and track.</strong> ZATCA reviews the application and may request more information. Answer quickly, because the clock on your obligations does not stop.</li>
<li><strong>Download your certificate.</strong> Once approved, you receive a VAT certificate showing your 15-digit VAT number, your effective date and your tax period.</li>
<li><strong>Set up compliant invoicing.</strong> Choose an e-invoicing solution that meets ZATCA's specifications before you issue your first taxable invoice.</li>
</ol>
<p>The effective date of registration matters more than the approval date. VAT is due on taxable supplies from the effective date, even if your certificate arrives a few weeks later.</p>

<h3>Registration deadline and penalties</h3>
<p>Advisers generally describe a 30-day window to apply after the mandatory registration obligation arises. The exact starting point is set in the VAT Implementing Regulations, so check it for your situation. Missing it is expensive:</p>
<ul>
<li>The VAT Law sets a <strong>SAR 10,000 fine</strong> for failing to apply for registration within the deadline.</li>
<li>ZATCA can register you from the date you should have been registered and assess the VAT that should have been charged.</li>
<li>Late payment penalties can then apply to that VAT.</li>
</ul>
<p>The biggest cost is usually the VAT itself. If you should have registered in January but only notice in June, you owe 15% on five months of sales you priced without VAT. Most customers will not pay that extra after the fact.</p>

<h2>Worked examples with numbers</h2>
<h3>Example 1: a Riyadh design studio</h3>
<p>A design studio bills about SAR 30,000 a month. Its rolling 12-month total reaches SAR 360,000 at the end of December. In January it wins a branding project and invoices SAR 50,000. The rolling total drops last January's SAR 30,000 and adds the new SAR 50,000, giving SAR 380,000, so it passes SAR 375,000 at the end of January. The studio should apply for Saudi VAT registration promptly, within the 30-day window, and start charging 15% from its effective date. A SAR 10,000 net fee then becomes SAR 10,000 plus SAR 1,500 VAT, a SAR 11,500 total.</p>
<h3>Example 2: a voluntary registration</h3>
<p>A freelance developer earns SAR 200,000 a year, mostly from VAT-registered companies, and spends SAR 60,000 a year on laptops, software and coworking space, all with 15% VAT. That is SAR 9,000 of input VAT. Registering voluntarily lets the developer reclaim it. Because the clients are registered businesses that can recover the VAT they are charged, the extra 15% does not make the developer more expensive to them. The trade-off is filing returns and using compliant e-invoicing software.</p>
<h3>Example 3: staying below the threshold</h3>
<p>A home baker selling SAR 12,000 a month to consumers reaches SAR 144,000 a year. That is under the voluntary threshold, so the baker cannot normally register. If sales grow to SAR 32,000 a month, the rolling total crosses SAR 375,000 inside a year, and VAT registration becomes mandatory. Selling to consumers, the baker would then need to decide whether to raise prices by 15% or absorb the tax.</p>
<p>If you want to check VAT-inclusive and VAT-exclusive figures quickly, our <a href="/tools/sales-tax-calculator">sales tax and VAT calculator</a> works with a 15% rate.</p>

<h2>What changes on your invoices after registration</h2>
<p>Registration changes your invoices immediately. You must issue a tax invoice for supplies to businesses and a simplified tax invoice for supplies to consumers, generated with a ZATCA-compliant electronic solution. Key contents include:</p>
<ul>
<li>The words "Tax Invoice" or "Simplified Tax Invoice".</li>
<li>Your legal name, address and 15-digit VAT number.</li>
<li>The buyer's name, address and VAT number on standard tax invoices to registered customers.</li>
<li>A sequential invoice number, issue date and supply date if different.</li>
<li>A description of goods or services, the taxable amount, the VAT rate and VAT amount in SAR, and the total.</li>
<li>A QR code on simplified tax invoices, as required by ZATCA's e-invoicing rules.</li>
</ul>
<p>Arabic is required on tax invoices, and many businesses issue bilingual invoices. Our guide to an <a href="/blog/arabic-english-invoice">Arabic and English invoice</a> shows the layout, and our article on the <a href="/blog/qr-code-on-invoice">QR code on an invoice</a> explains what the code contains.</p>
<p>Then there is Phase 2 of ZATCA e-invoicing, which requires integration with the Fatoora platform. ZATCA brings taxpayers in by waves based on revenue. The latest wave, covered in our <a href="/blog/zatca-phase-2-wave-25">ZATCA Phase 2 Wave 25 checklist</a>, reaches businesses whose VAT-taxable revenue exceeded SAR 187,500 in a qualifying year, so most newly registered small businesses will meet integration duties soon after registration.</p>

<h2>Returns, records and deregistration</h2>
<p>After Saudi VAT registration, you file a VAT return for each tax period. Businesses with annual taxable supplies above SAR 40 million file monthly. Others usually file quarterly. The return and payment are due by the end of the month after the period ends. Keep invoices, contracts, import documents and accounting records for the period set in the VAT rules, and longer for real estate.</p>
<p>If your business stops making taxable supplies, you must apply to deregister. If turnover falls, you may be able to apply voluntarily. Under the 2025 amendments, goods you still hold at deregistration can be treated as a deemed supply, so VAT may be due on them. Take advice before you apply.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Using the calendar year.</strong> The KSA VAT threshold uses a rolling 12 months.</li>
<li><strong>Ignoring the next 12 months.</strong> A large signed contract can trigger registration before you invoice.</li>
<li><strong>Counting only standard-rated sales.</strong> Zero-rated sales count toward the threshold too.</li>
<li><strong>Charging VAT before the effective date.</strong> Do not show VAT or a VAT number on invoices until you are registered.</li>
<li><strong>Issuing PDF invoices after registration.</strong> Registered businesses need a ZATCA-compliant e-invoicing solution, not a generic PDF.</li>
<li><strong>Getting the name wrong.</strong> Your invoice name must match your registration certificate exactly. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers why that matters.</li>
</ul>

<h2>Where a free invoice generator fits</h2>
<p>Be clear about what a free tool can and cannot do. Our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser with one tax rate, so you can set 15% and show the VAT clearly. It is useful for quotes, pro forma invoices and invoices issued before you are VAT registered, or for business you do outside Saudi Arabia. It does not produce ZATCA e-invoice XML, does not generate the ZATCA QR code and does not connect to Fatoora. Once you complete Saudi VAT registration, your tax invoices must come from a ZATCA-compliant solution.</p>
<p>For more GCC and global tax topics, browse our <a href="/blog/category/tax-compliance">tax compliance articles</a>.</p>

<h2>Conclusion</h2>
<p>Saudi VAT registration comes down to three numbers and one habit. Register when taxable supplies pass SAR 375,000, consider registering voluntarily from SAR 187,500, and apply within the deadline to avoid a SAR 10,000 fine. The habit is checking your rolling 12-month total every month. Before registration, a clean PDF from our <a href="/invoice-generator">invoice generator</a> is enough for most small businesses. After it, move to compliant e-invoicing, and check the details with ZATCA or a qualified adviser.</p>
`,
  },
  {
    slug: "oman-e-invoicing",
    title: "Oman E-Invoicing (Fawtara): 2027 Dates and How to Prepare",
    description:
      "Oman e-invoicing under Fawtara starts 1 April 2027 for businesses above OMR 5 million and 1 October 2027 for the rest. Dates, model, scope and a prep plan.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Oman",
    related: ["e-invoicing-mandates-2027", "peppol-vs-clearance-model", "e-invoicing-guide"],
    faqs: [
      {
        q: "When does e-invoicing become mandatory in Oman?",
        a: "Under Decision No. 189/2026, published in August 2026, mandatory e-invoicing starts on 1 April 2027 for taxpayers whose annual supplies exceed OMR 5 million, and on 1 October 2027 for other covered taxpayers. This replaced an earlier plan that described a pilot from August 2026 followed by later phases. Check the Oman Tax Authority's e-invoicing pages for your own start date, because the authority confirms it directly.",
      },
      {
        q: "What is Fawtara?",
        a: "Fawtara is the name of the Oman Tax Authority's e-invoicing programme. Under it, VAT-registered businesses will issue invoices as structured electronic data that is exchanged through accredited service providers and reported to the Tax Authority, instead of sending PDF or paper invoices. The word comes from the Arabic for invoicing. You will see it on the Tax Authority's portal and in adviser guidance about the 2027 rollout.",
      },
      {
        q: "How is the OMR 5 million threshold measured?",
        a: "According to the Oman Tax Authority's e-invoicing FAQ, you fall into the 1 April 2027 group if your annual supplies for 1 April 2026 to 31 March 2027 exceed OMR 5 million, or if your expected supplies for 1 April 2027 to 31 March 2028 exceed that figure. VAT groups are assessed at group level, and non-residents count only supplies made in Oman. Confirm the calculation with the authority or an adviser.",
      },
      {
        q: "Does Oman e-invoicing apply to small businesses?",
        a: "Yes, the rollout is designed to reach VAT-registered businesses of all sizes, with smaller taxpayers joining later. Under the revised schedule, taxpayers below the OMR 5 million threshold are due to start on 1 October 2027. Businesses that are not registered for VAT are generally outside the VAT invoicing rules, but they should still watch for any later guidance from the Oman Tax Authority.",
      },
      {
        q: "What e-invoicing model does Oman use?",
        a: "Oman uses a five-corner model. The supplier sends invoice data through its accredited service provider, which exchanges it with the buyer's service provider, which delivers it to the buyer. The fifth corner is the Oman Tax Authority, which receives the invoice data. Advisers describe the network as Peppol-based, with an Oman-specific specification. Check the Tax Authority's technical documents for the exact format and rules.",
      },
      {
        q: "Can I keep using PDF invoices in Oman?",
        a: "Until your mandatory start date, you can keep issuing invoices that meet Oman's VAT invoice rules, including PDFs where they are allowed. Once e-invoicing applies to you, covered invoices need to be issued as structured e-invoices through the Fawtara system. A PDF can still be useful as a human-readable copy or for quotes, but it will not replace the e-invoice for covered transactions.",
      },
      {
        q: "Are there penalties for not complying with Oman e-invoicing?",
        a: "Advisers reported that Decision No. 189/2026 did not set out a specific penalty schedule for e-invoicing failures when it was published. That does not mean there is no risk. Oman's VAT Law already penalises failures to issue proper tax invoices and keep records, and the authority may add specific rules later. Check the current position with the Oman Tax Authority or a qualified adviser.",
      },
      {
        q: "How should a small business in Oman prepare for e-invoicing?",
        a: "Start by confirming your VAT status and your start date. Then clean up your customer master data, especially VAT numbers and addresses, choose an accredited service provider, check whether your accounting or ERP system can produce structured invoice data, and run test invoices well before your go-live date. Train staff on credit notes and corrections, which often cause the first errors after go-live.",
      },
    ],
    content: `
<p><strong>Oman e-invoicing</strong> is mandatory from 1 April 2027 for VAT-registered businesses whose annual supplies exceed OMR 5 million, and from 1 October 2027 for other covered taxpayers. The programme is called Fawtara. Invoices are exchanged as structured data through accredited service providers in a five-corner model, with the Oman Tax Authority receiving the data.</p>
<p>The timeline has moved during 2026, so this guide sets out the latest dates, explains what changed, and gives small and mid-sized businesses a practical plan. It is based on the Oman Tax Authority's published e-invoicing FAQ and dated adviser reports at the time of writing. It is not legal or tax advice, so confirm your own position with the Tax Authority or a qualified adviser.</p>

<h2>Oman e-invoicing at a glance</h2>
<table>
<thead>
<tr><th>Item</th><th>Position at the time of writing</th></tr>
</thead>
<tbody>
<tr><td>Programme name</td><td>Fawtara</td></tr>
<tr><td>Authority</td><td>Oman Tax Authority (OTA)</td></tr>
<tr><td>Legal basis</td><td>Decision No. 189/2026 amending the VAT Executive Regulations, published in August 2026</td></tr>
<tr><td>First mandatory date</td><td>1 April 2027, for taxpayers with annual supplies above OMR 5 million</td></tr>
<tr><td>Second mandatory date</td><td>1 October 2027, for other covered taxpayers</td></tr>
<tr><td>Model</td><td>Five-corner exchange via accredited service providers, reported to the OTA</td></tr>
<tr><td>VAT rate</td><td>5% standard rate</td></tr>
<tr><td>Voluntary early adoption</td><td>Possible, according to the OTA's FAQ</td></tr>
</tbody>
</table>
<p>For context on how Oman fits into the wider wave of 2027 mandates, see our overview of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates in 2027</a>.</p>

<h2>The latest Fawtara timeline</h2>
<p>The Oman e-invoicing timeline has changed twice in public guidance, which is why many articles online still show different dates.</p>
<h3>The earlier phased plan</h3>
<p>Through the first half of 2026, the Oman Tax Authority's FAQ described a first rollout in August 2026 covering around 100 large VAT-registered companies selected by the authority. Later rollouts were to follow according to legislation that had not yet been issued. Several advisers filled in later phases for February 2027 and August 2027, but those dates were not confirmed by a legal instrument.</p>
<h3>The revised schedule under Decision No. 189/2026</h3>
<p>In August 2026, Decision No. 189/2026 was published in the Official Gazette, amending the VAT Executive Regulations. Reported by several advisers and the Oman Observer, it replaced the phased plan with two dates:</p>
<ol>
<li><strong>1 April 2027:</strong> taxpayers whose annual supplies exceed OMR 5 million.</li>
<li><strong>1 October 2027:</strong> other taxpayers within scope.</li>
</ol>
<p>The Oman Tax Authority's e-invoicing FAQ now reflects the April and October 2027 dates. In places it still talks about phases and says SMEs join in a later phase, so read the latest version carefully and treat the authority's direct notifications as the final word on your own date.</p>

<h2>Who must comply and how the threshold works</h2>
<p>Oman e-invoicing is part of the VAT system, so it applies to VAT-registered taxpayers. Oman's mandatory VAT registration threshold is OMR 38,500 in annual taxable supplies, with voluntary registration available from OMR 19,250. If you are not VAT registered, the e-invoicing rules generally do not reach you yet.</p>
<p>The OMR 5 million figure decides when you start, not whether you are covered. According to the OTA's FAQ:</p>
<ul>
<li>You start on 1 April 2027 if your annual supplies from 1 April 2026 to 31 March 2027 exceed OMR 5 million, or if your expected supplies from 1 April 2027 to 31 March 2028 exceed it.</li>
<li>If neither test is met, you start on 1 October 2027.</li>
<li>VAT groups are assessed at group level.</li>
<li>Non-resident taxpayers count only supplies made in Oman.</li>
<li>The supplies counted include taxable supplies (excluding capital assets), reverse-charge supplies and intra-GCC supplies of goods and services.</li>
</ul>
<h3>Worked example</h3>
<p>A Muscat building supplies distributor had supplies of OMR 4.6 million in the year to 31 March 2027, so it fails the backward-looking test. But it has signed a framework contract that will lift supplies to about OMR 5.4 million in the year from 1 April 2027. On the forward-looking test it exceeds OMR 5 million, so it should plan for the 1 April 2027 start. A neighbouring retailer with OMR 900,000 of supplies is VAT registered but well under the threshold, so its date is 1 October 2027.</p>

<h2>How the five-corner model works</h2>
<p>Oman e-invoicing uses a five-corner model, which is similar in shape to the Peppol networks used in Europe and Asia. Our guide to <a href="/blog/what-is-peppol">what Peppol is</a> explains the network idea in plain English.</p>
<ol>
<li><strong>Supplier</strong> creates the invoice in its accounting or ERP system.</li>
<li><strong>Supplier's accredited service provider</strong> validates the data and sends it on.</li>
<li><strong>Buyer's accredited service provider</strong> receives it.</li>
<li><strong>Buyer</strong> receives the structured invoice in its own system.</li>
<li><strong>Oman Tax Authority</strong> receives the invoice data for tax purposes.</li>
</ol>
<p>The OTA describes e-invoices as electronically certified, with a unique verification code, and exchanged instantly between seller, buyer and the authority. Advisers report an Oman-specific Peppol specification, often referred to as PINT OM, and some guidance says B2C invoice data must reach the authority within 24 hours. Treat these technical points as items to confirm in the OTA's published specifications. If you want to understand how this differs from a central platform such as Saudi Arabia's, read our comparison of <a href="/blog/peppol-vs-clearance-model">Peppol and clearance models</a>.</p>

<h2>What changes for invoice content</h2>
<p>The fields on an Oman VAT invoice do not disappear. What changes is the format. Today, an invoice is a document a person reads. Under Oman e-invoicing it becomes structured data that systems read. In practice this means:</p>
<ul>
<li>Your VAT number and your customer's VAT number must be accurate, because systems will validate them.</li>
<li>Invoice numbers must be unique and sequential. Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains good practice.</li>
<li>Credit notes and corrections must reference the original invoice. Ad hoc fixes on a PDF will not work.</li>
<li>Amounts, tax rates and totals must reconcile exactly, line by line.</li>
<li>Customer names and addresses should be held in clean master data, not typed fresh on each invoice.</li>
</ul>
<p>A useful way to see the difference is to compare a PDF and a structured invoice side by side, which our article on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices vs PDF invoices</a> does.</p>

<h2>A preparation plan for 2027</h2>
<p>Whether your date is April or October 2027, the work is similar. A small business can usually prepare in three to six months if it starts early.</p>
<ol>
<li><strong>Confirm your status.</strong> Check your VAT registration, calculate supplies for both threshold periods and note your start date.</li>
<li><strong>Map your invoice flows.</strong> List every place an invoice or credit note is created: accounting software, point of sale, spreadsheets, manual books.</li>
<li><strong>Pick an accredited service provider.</strong> Use the Tax Authority's list of accredited providers, and ask about pricing per invoice, integration options and support in Arabic and English.</li>
<li><strong>Check your software.</strong> Ask your accounting or ERP vendor when it will support Oman e-invoicing and how it connects to your provider.</li>
<li><strong>Clean master data.</strong> Verify customer VAT numbers, legal names and addresses.</li>
<li><strong>Test.</strong> Send test invoices, credit notes and cross-border cases before go-live.</li>
<li><strong>Train staff.</strong> Make sure the people who raise and correct invoices understand the new rules.</li>
</ol>
<h3>Budgeting example</h3>
<p>A trading company issues 1,500 invoices a month. If a provider charged, say, OMR 0.050 per invoice, that would be OMR 75 a month, or OMR 900 a year, before any setup fee. Prices vary widely, so get quotes from more than one accredited provider and compare the total cost, not just the per-invoice fee.</p>

<h3>Common preparation mistakes</h3>
<ul>
<li><strong>Waiting for the October date to start work.</strong> Service providers and software vendors will be busy in the months before each go-live. Book onboarding early.</li>
<li><strong>Forgetting minor invoice sources.</strong> A branch that still writes invoices by hand, or a sales team that sends spreadsheet invoices, can break compliance even when the main system is ready.</li>
<li><strong>Ignoring incoming invoices.</strong> Oman e-invoicing affects what you receive as well as what you send. Your accounts payable team needs to receive, check and record structured invoices from suppliers.</li>
<li><strong>Testing only simple invoices.</strong> Credit notes, partial payments, advance payments, discounts and foreign currency invoices are where errors show up. Test them all.</li>
<li><strong>Assuming the threshold test is a one-off.</strong> If your supplies jump, the forward-looking test can bring your date forward. Recheck your figures before the first date.</li>
</ul>

<h2>Oman VAT invoices until your go-live date</h2>
<p>Until Oman e-invoicing applies to you, the existing VAT invoice rules still apply. A full tax invoice normally needs the words "Tax Invoice", your name, address and VAT number, the customer's details and VAT number where they are registered, a sequential number, the issue date and supply date, a description of the goods or services, the taxable amount, the 5% rate, the VAT amount in Omani rials and the total. Simplified invoices are allowed in some cases, such as certain sales to consumers.</p>
<p>A worked example: a Muscat marketing agency bills a VAT-registered client OMR 2,400 for a campaign. VAT at 5% is OMR 120, so the total due is OMR 2,520. If the agency invoices in US dollars, the VAT amount should still be shown in Omani rials, using an acceptable exchange rate. Our guide to a <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> covers how to show both amounts clearly. Getting these basics right now makes the switch to structured data much easier, because the same fields will be checked automatically later.</p>

<h2>Penalties and risk</h2>
<p>At publication, advisers noted that Decision No. 189/2026 did not include a separate penalty schedule for e-invoicing. Do not read that as a free pass. Oman's VAT Law already penalises failures to issue proper tax invoices and to keep records, and the authority can issue more rules before go-live. The practical risk is also commercial: large customers that are already live may refuse to pay invoices they cannot receive through the network.</p>

<h2>Where PDF invoices still fit</h2>
<p>PDF invoices are not going away overnight. Until your Oman e-invoicing start date, you can keep issuing VAT invoices that meet the current rules. After it, PDFs remain useful for quotes, pro forma invoices, non-VAT documents and human-readable copies.</p>
<p>Businesses that sell outside Oman are also in a mixed position. A Muscat consultancy may need structured e-invoices for Omani clients from 2027 while still sending PDF invoices to clients in countries without a mandate. Keep both workflows documented so staff know which route each customer needs, and record which invoices went through the network and which did not.</p>
<p>Our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in the browser with one tax rate, so you can set Oman's 5% VAT, add your logo and choose a currency. It does not create Fawtara e-invoices, does not connect to a service provider and does not report anything to the Tax Authority. When your mandate begins, use an accredited provider for covered invoices. For a clean layout in the meantime, try the <a href="/invoice-templates/corporate">corporate invoice template</a>.</p>

<h2>Conclusion</h2>
<p>Oman e-invoicing now has firm dates: 1 April 2027 if your annual supplies exceed OMR 5 million and 1 October 2027 for other covered taxpayers. Confirm your date, pick an accredited service provider, clean your data and test early. Keep an eye on the Oman Tax Authority's FAQ, because the guidance has moved during 2026. Until then, our <a href="/invoice-generator">invoice generator</a> can handle quotes and current PDF invoices, and you can browse more country guides in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>
`,
  },
  {
    slug: "bahrain-vat-invoice-requirements",
    title: "Bahrain VAT Invoice Requirements: 10% Rate and NBR Rules",
    description:
      "Bahrain VAT invoice requirements explained: the 10% rate, NBR registration thresholds, mandatory tax invoice fields, simplified invoices and a worked example.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Bahrain",
    related: ["uae-vat-invoice-requirements", "vat-invoice-guide", "saudi-vat-registration"],
    faqs: [
      {
        q: "What is the VAT rate in Bahrain?",
        a: "The standard VAT rate in Bahrain is 10%. Bahrain introduced VAT at 5% on 1 January 2019 and doubled the standard rate to 10% from 1 January 2022. Some supplies are zero-rated, such as listed basic food items, many healthcare and education services, and exports, and some are exempt, such as certain financial services and residential property. Check the National Bureau for Revenue's guides for the current lists.",
      },
      {
        q: "What is the VAT registration threshold in Bahrain?",
        a: "Registration is mandatory for a resident business whose annual taxable supplies exceed BHD 37,500, or are expected to exceed it in the next 12 months. Voluntary registration is possible once supplies or expenses exceed BHD 18,750. Non-resident businesses making taxable supplies in Bahrain generally have no threshold. You register through the National Bureau for Revenue, known as the NBR. Confirm the current thresholds on the NBR website before relying on them.",
      },
      {
        q: "What must a Bahrain tax invoice include?",
        a: "A full tax invoice generally needs the words Tax Invoice, the supplier's name, address and VAT account number, the customer's name and address and VAT number if registered, a unique sequential invoice number, the issue date and supply date if different, a description and quantity of goods or services, the price excluding VAT, the VAT rate and amount in Bahraini dinars, and the total. Reverse charge supplies need a note saying so.",
      },
      {
        q: "When can I issue a simplified tax invoice in Bahrain?",
        a: "Advisers describe two common cases: when the customer is not VAT registered, or when the invoice value including VAT does not exceed BHD 500. A simplified invoice still needs basic details, such as the supplier's name and VAT number, the date, a description of the supply, and the total including VAT or the VAT amount. Check the NBR's VAT guides for the current conditions, because they set out the exact contents required.",
      },
      {
        q: "How soon must I issue a VAT invoice in Bahrain?",
        a: "Bahrain's VAT rules generally require a tax invoice to be issued no later than the 15th day of the month following the month in which the supply took place. Many businesses simply issue the invoice at the time of supply, which is easier to manage. If you take advance payments, the advance can create a tax point, so check how the timing rules apply to deposits.",
      },
      {
        q: "Can a Bahrain VAT invoice be in English?",
        a: "In practice, many Bahrain businesses issue VAT invoices in English, and adviser guidance indicates that Arabic or English is acceptable, with the words Tax Invoice shown in either language. If you deal with government bodies or customers who prefer Arabic, a bilingual invoice avoids queries. If you invoice in another currency, show the VAT amount in Bahraini dinars as well. Check current NBR guidance if you are unsure.",
      },
      {
        q: "Is e-invoicing mandatory in Bahrain?",
        a: "At the time of writing, Bahrain has not put a mandatory e-invoicing system into force, and the NBR has not published a confirmed start date. It has, however, allowed businesses to issue and keep invoices electronically without prior approval since late 2023, and advisers expect a structured e-invoicing system in the future. Keep an eye on NBR announcements so you have time to prepare.",
      },
      {
        q: "How often do businesses file VAT returns in Bahrain?",
        a: "Filing frequency depends on turnover. Larger businesses, commonly described as those with annual supplies above BHD 3 million, file monthly, while smaller businesses usually file quarterly. Returns and payment are generally due by the last day of the month after the end of the tax period. The NBR confirms your filing period when you register, so check your registration details rather than relying on general guidance.",
      },
      {
        q: "How long must I keep VAT invoices in Bahrain?",
        a: "Bahrain's rules generally require VAT records, including invoices, to be kept for at least five years, with a longer period, commonly cited as 15 years, for records relating to real estate. Records can be kept electronically if they remain accessible and readable. Store invoices in a way that lets you retrieve them by date and number, because NBR audits usually start with invoice samples.",
      },
    ],
    content: `
<p><strong>Bahrain VAT</strong> is charged at a standard rate of 10%, and a VAT-registered business must issue a tax invoice showing its VAT number, the customer's details, a sequential number, dates, a description of the supply, the VAT rate and the VAT amount in Bahraini dinars. Registration with the NBR is mandatory once annual taxable supplies exceed BHD 37,500.</p>
<p>This guide covers the Bahrain VAT invoice requirements in practical terms: the rate, who registers with the National Bureau for Revenue (NBR), the fields a tax invoice needs, when you can use a simplified invoice, and a worked example. It is general information, not legal or tax advice, so check the NBR's current guides or a qualified adviser for your own case.</p>

<h2>Bahrain VAT basics</h2>
<p>Bahrain introduced VAT on 1 January 2019 under the GCC VAT framework, at 5%. The standard rate rose to 10% from 1 January 2022. The tax is administered by the National Bureau for Revenue. Like VAT elsewhere, a registered business charges VAT on its taxable sales, recovers VAT on its business purchases, and pays the difference to the NBR through periodic returns.</p>
<table>
<thead>
<tr><th>Item</th><th>Position at the time of writing</th></tr>
</thead>
<tbody>
<tr><td>Standard VAT rate</td><td>10% (since 1 January 2022)</td></tr>
<tr><td>Tax authority</td><td>National Bureau for Revenue (NBR)</td></tr>
<tr><td>Mandatory registration</td><td>Annual taxable supplies above BHD 37,500</td></tr>
<tr><td>Voluntary registration</td><td>Supplies or expenses above BHD 18,750</td></tr>
<tr><td>Non-residents</td><td>Generally no threshold</td></tr>
<tr><td>Simplified invoice limit</td><td>Commonly cited as BHD 500 including VAT</td></tr>
<tr><td>Invoice deadline</td><td>By the 15th day of the month after the supply</td></tr>
<tr><td>Mandatory e-invoicing</td><td>Not in force at the time of writing</td></tr>
</tbody>
</table>
<p>If you are comparing Gulf systems, the rate is the main difference: the UAE and Oman charge 5%, Saudi Arabia 15%, and Bahrain 10%. Our guide to <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a> explains how VAT differs from a sales tax.</p>

<h2>NBR registration: who must register</h2>
<p>You must register with the NBR if you are resident in Bahrain and your taxable supplies in the last 12 months exceeded BHD 37,500, or you expect them to exceed BHD 37,500 in the next 12 months. Taxable supplies include standard-rated and zero-rated sales, but not exempt ones. You may register voluntarily once supplies or taxable expenses exceed BHD 18,750, which can make sense if you buy a lot of equipment with VAT or sell mainly to registered businesses.</p>
<p>Non-resident businesses that make taxable supplies in Bahrain, where they are responsible for the VAT, generally have to register regardless of value, sometimes through a tax representative. Registration is done online through the NBR portal. Expect to provide your commercial registration, the owner's or signatory's ID, contact details, bank details, activity details and turnover figures. Once approved, you receive a VAT account number to show on your invoices.</p>
<p>The same mandatory and voluntary threshold structure applies across the GCC. Our guide to <a href="/blog/saudi-vat-registration">Saudi VAT registration</a> walks through a similar process in more depth.</p>

<h2>Bahrain VAT invoice requirements: the full tax invoice</h2>
<p>A full tax invoice is the standard document for supplies to VAT-registered customers. It is what your customer needs to recover input VAT, so missing fields can delay payment. Based on the VAT Executive Regulations and adviser guidance, a full tax invoice should show:</p>
<ol>
<li>The words "Tax Invoice", clearly displayed.</li>
<li>Your name, address and VAT account number.</li>
<li>The customer's name and address, and the customer's VAT number if they are registered.</li>
<li>A unique, sequential invoice number.</li>
<li>The date of issue, and the date of supply if it is different.</li>
<li>A description of the goods or services, with quantity or volume.</li>
<li>The unit price and the taxable amount excluding VAT, with any discount shown.</li>
<li>The VAT rate applied to each line.</li>
<li>The VAT amount in Bahraini dinars.</li>
<li>The total amount payable.</li>
<li>Where relevant, a note that the reverse charge applies or that a supply is zero-rated or exempt.</li>
</ol>
<p>If you need help with numbering, our <a href="/tools/invoice-number-generator">invoice number generator</a> creates sequential numbers, and our <a href="/blog/tax-id-on-invoice">guide to tax IDs on invoices</a> explains where to place your VAT number so it is easy to find.</p>

<h3>Language and currency</h3>
<p>Adviser guidance indicates that Bahrain VAT invoices can be issued in Arabic or English. Many businesses use English, or a bilingual layout for government and local customers; our <a href="/blog/arabic-english-invoice">Arabic and English invoice guide</a> shows how. You may invoice in a foreign currency, but the VAT amount should also be shown in Bahraini dinars, converted at an acceptable exchange rate.</p>

<h2>Simplified tax invoices</h2>
<p>A simplified tax invoice carries less detail. Advisers commonly describe it as available where the customer is not VAT registered, or where the invoice value including VAT does not exceed BHD 500. A simplified invoice generally still needs:</p>
<ul>
<li>Your name, address and VAT account number.</li>
<li>The date of issue.</li>
<li>A description of the goods or services.</li>
<li>The total consideration and either the VAT amount or a statement that the price includes VAT.</li>
</ul>
<p>Retailers, cafes and service businesses selling to the public mostly issue simplified invoices from their point of sale system. If your customer is VAT registered and asks for a full tax invoice, give them one, because they need it to reclaim VAT.</p>
<p>Here is a simple case. A florist in Riffa sells a bouquet to a walk-in customer for BHD 22.000 including VAT. The VAT inside that price is 22.000 multiplied by 10/110, which is BHD 2.000, so the net price is BHD 20.000. A simplified invoice showing the florist's name, address and VAT number, the date, "flower bouquet", the total of BHD 22.000 and the VAT of BHD 2.000 is enough. If a hotel buys BHD 750 of arrangements, the value is above BHD 500 and the hotel is a registered business, so the florist should issue a full tax invoice instead.</p>

<h2>Setting up your invoice step by step</h2>
<p>If you are newly registered, setting up a compliant invoice layout once saves time on every invoice after. A practical sequence:</p>
<ol>
<li><strong>Check your registration certificate.</strong> Copy your legal name and VAT account number exactly as the NBR shows them.</li>
<li><strong>Choose a heading.</strong> Use "Tax Invoice" for full invoices. Keep a separate simplified format for retail sales if you need one.</li>
<li><strong>Set a numbering scheme.</strong> A prefix and a running number, such as BH-2026-0001, keeps the sequence clear across years.</li>
<li><strong>Build the customer block.</strong> Include space for the customer's name, address and VAT number.</li>
<li><strong>Add dates.</strong> Show the issue date and, where different, the date of supply.</li>
<li><strong>Lay out the lines.</strong> Description, quantity, unit price and line total, with the VAT rate visible.</li>
<li><strong>Show the totals.</strong> Taxable amount, VAT at 10%, and total payable, in dinars to three decimals.</li>
<li><strong>Add payment terms.</strong> State the due date and bank details. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> has wording you can adapt.</li>
</ol>
<p>Save the layout as a template and review it whenever the NBR updates its guidance. A short internal checklist, covering the customer VAT number, dates and the VAT amount in dinars, catches most errors before an invoice goes out.</p>

<h2>Worked example: a Manama consultancy</h2>
<p>A Manama IT consultancy is registered for Bahrain VAT and bills a registered client for a system audit in October.</p>
<table>
<thead>
<tr><th>Line</th><th>Amount (BHD)</th></tr>
</thead>
<tbody>
<tr><td>System audit, 24 hours at BHD 45</td><td>1,080.000</td></tr>
<tr><td>Software licence resold</td><td>300.000</td></tr>
<tr><td>Discount 5%</td><td>-69.000</td></tr>
<tr><td>Taxable amount</td><td>1,311.000</td></tr>
<tr><td>VAT at 10%</td><td>131.100</td></tr>
<tr><td>Total payable</td><td>1,442.100</td></tr>
</tbody>
</table>
<p>The dinar is divided into 1,000 fils, so amounts are usually shown to three decimal places. The invoice is dated 31 October and the supply finished on 28 October. Under the timing rule, the consultancy could issue the invoice as late as 15 November, but invoicing promptly gets the client's payment clock running sooner.</p>
<p>If the client later disputes part of the bill, the consultancy should not edit and resend the original. It should issue a credit note that references the original invoice number. Our <a href="/blog/credit-note-guide">credit note guide</a> explains how.</p>

<h2>Zero-rated, exempt and reverse charge invoices</h2>
<p>Not every supply carries 10%. Bahrain zero-rates some supplies, including listed basic food items, many healthcare and education services, local transport, the construction of new buildings and exports, among others. Some supplies are exempt, such as certain financial services and the rental of residential property. The difference matters: zero-rated supplies count toward the registration threshold and let you recover input VAT, while exempt supplies do not. Our article on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains it in more detail.</p>
<p>When you buy services from a foreign supplier, you may have to account for VAT yourself under the reverse charge. When you supply a registered customer in a situation where the reverse charge applies, your invoice should say so instead of charging VAT. Check the NBR's guides for which cases apply, because the lists are detailed.</p>

<h2>Returns, records and e-invoicing outlook</h2>
<p>Registered businesses file Bahrain VAT returns through the NBR portal. Larger businesses, commonly described as those with annual supplies over BHD 3 million, file monthly, and others usually quarterly. Returns and payment are generally due by the last day of the month after the period ends.</p>
<p>Keep invoices and VAT records for at least five years, or longer for real estate. Electronic storage is fine if the records stay readable and accessible.</p>
<p>On e-invoicing, Bahrain is behind Saudi Arabia, the UAE and Oman. At the time of writing there is no mandatory e-invoicing system in force and no confirmed start date from the NBR, although it removed the need for prior approval to issue and keep electronic invoices in late 2023, and advisers expect a structured system later. Our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> explains what that shift usually involves.</p>

<h2>Common Bahrain VAT invoice mistakes</h2>
<ul>
<li><strong>Charging VAT before registration.</strong> Do not show VAT or a VAT number until the NBR has approved your registration.</li>
<li><strong>Missing the customer's VAT number</strong> on a full tax invoice to a registered business.</li>
<li><strong>Showing VAT only in a foreign currency.</strong> Show the VAT amount in dinars too.</li>
<li><strong>Rounding to two decimals.</strong> The dinar uses three, so totals can drift.</li>
<li><strong>Editing issued invoices.</strong> Use credit or debit notes instead.</li>
<li><strong>Breaking the number sequence.</strong> Gaps or duplicates attract questions in an audit.</li>
<li><strong>Using the wrong tax point.</strong> An advance payment can create a VAT liability before the work is done, so invoice deposits correctly.</li>
</ul>
<p>Most of these problems come from rushing. A business that issues a handful of invoices a month can check each one by eye. A business issuing hundreds should use accounting or point of sale software with VAT built in, and run a monthly reconciliation between the sales ledger and the VAT return before filing.</p>

<h2>Conclusion</h2>
<p>Bahrain VAT invoicing is straightforward once the basics are in place: register with the NBR when supplies pass BHD 37,500, charge 10% unless a zero rate or exemption applies, and include every required field on each tax invoice, with the VAT amount in dinars. Because Bahrain has no mandatory e-invoicing yet, a well-built PDF invoice is still acceptable. Our <a href="/invoice-generator">free invoice generator</a> lets you set a 10% tax rate, add your VAT number and logo, choose a currency and download a PDF, all in your browser. Check the NBR's guidance or a qualified adviser for anything specific to your business.</p>
`,
  },
  {
    slug: "philippines-e-invoicing",
    title: "Philippines E-Invoicing: BIR EIS Deadline and Who Is Covered",
    description:
      "Philippines e-invoicing explained: who must issue e-invoices through the BIR EIS by 31 December 2026, how CAS users are affected, and the steps to prepare.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Philippines",
    related: ["e-invoicing-mandates-2027", "invoice-vs-receipt", "e-invoice-vs-pdf-invoice"],
    faqs: [
      {
        q: "When is the e-invoicing deadline in the Philippines?",
        a: "Under Revenue Regulations No. 26-2025, covered taxpayers must be issuing e-invoices by 31 December 2026. That replaced the earlier deadline in RR 11-2025, which was originally set for March 2026. RR 26-2025 lets the Commissioner extend deadlines, but at the time of writing no further extension had been reported. Check the BIR website for the latest revenue issuances before you plan around the date.",
      },
      {
        q: "Who is covered by the BIR e-invoicing requirement?",
        a: "The groups covered by the 31 December 2026 deadline are large taxpayers, taxpayers engaged in e-commerce other than micro taxpayers, and taxpayers using a Computerized Accounting System, computer-based accounting system or other invoicing software. Other groups, such as some exporters and point of sale users, are expected to be covered by later regulations. Micro taxpayers, those with gross sales under PHP 3 million, are exempt from the mandate but may adopt e-invoicing voluntarily.",
      },
      {
        q: "What is the BIR EIS?",
        a: "EIS stands for Electronic Invoicing System. It is the BIR's platform for receiving sales data from e-invoices issued by taxpayers. Section 237-A of the Tax Code, added by the TRAIN law, requires covered taxpayers to issue electronic invoices and report sales data electronically. Taxpayers connect their own invoicing systems to the EIS, which needs certification, and transmit invoice data in the structured format the BIR prescribes, which is JSON.",
      },
      {
        q: "Do I still need official receipts in the Philippines?",
        a: "No. Under the Ease of Paying Taxes Act, Republic Act No. 11976, and RR 7-2024, the invoice became the main document for both sales of goods and services, and the official receipt is no longer the primary evidence of a sale. Official receipts can serve as supplementary documents. If your CAS or billing software still prints Official Receipt as the heading, it needs to be updated.",
      },
      {
        q: "Is an invoice made in Excel or Word an e-invoice?",
        a: "No. Under BIR rules, an e-invoice is a structured, system-generated invoice whose data can be extracted and transmitted to the BIR. Invoices created by hand in Word, Excel or Google Docs, or saved as PDFs or images, do not count as e-invoices. They may still serve as ordinary invoices for taxpayers outside the mandate if they are properly registered and contain the required information.",
      },
      {
        q: "What happens to CAS users under Philippines e-invoicing?",
        a: "Taxpayers using a Computerized Accounting System, computer-based accounting system or other invoicing software are in the first covered group, so they need to be issuing e-invoices by 31 December 2026. In practice that can mean updating the system to produce compliant e-invoices and transmit data, registering the change with the BIR, and passing EIS certification. Check with your software provider and your Revenue District Office.",
      },
      {
        q: "What are the penalties for not issuing e-invoices in the Philippines?",
        a: "Failure to issue proper invoices can lead to fines and other penalties under the Tax Code, and the BIR can suspend or close a business for certain VAT invoicing violations. Specific penalties for failing to report sales data electronically also exist in the Tax Code, but those depend on implementing rules. The EOPT law gives micro and small taxpayers reduced penalties for some violations. Ask a qualified adviser about your exposure.",
      },
      {
        q: "Do micro businesses in the Philippines have to issue e-invoices?",
        a: "Not under the current mandate. Micro taxpayers, generally those with gross sales below PHP 3 million, are exempt from mandatory e-invoicing under RR 11-2025. They still need to issue registered invoices as required by the Tax Code, for example for sales of PHP 500 or more, and VAT-registered taxpayers must invoice every sale. A micro business that chooses to issue e-invoices voluntarily must follow the same rules.",
      },
      {
        q: "What format do Philippine e-invoices use?",
        a: "The BIR's EIS receives invoice data in JSON format. Taxpayers can keep other structured formats internally as long as they can be converted to the format the BIR prescribes. Buyers can receive e-invoices by email, through a web portal, a QR code or an app. Check the latest EIS technical specifications and the BIR's certification requirements for the exact data fields.",
      },
    ],
    content: `
<p><strong>Philippines e-invoicing</strong> requires covered taxpayers to issue structured electronic invoices and report sales data to the BIR through its Electronic Invoicing System (EIS). Under RR 26-2025, large taxpayers, e-commerce sellers (except micro) and users of a CAS or invoicing software must be issuing e-invoices by 31 December 2026. Micro taxpayers are exempt.</p>
<p>The rules have moved several times, so this guide pulls together the current deadline, who is covered, how the EOPT changes to invoices and receipts fit in, and a practical plan. It reflects BIR issuances and dated adviser commentary at the time of writing. It is general information, not tax advice, so confirm your status with the BIR or a qualified adviser.</p>

<h2>Philippines e-invoicing at a glance</h2>
<table>
<thead>
<tr><th>Item</th><th>Position at the time of writing</th></tr>
</thead>
<tbody>
<tr><td>Legal basis</td><td>Section 237-A of the Tax Code, added by the TRAIN law</td></tr>
<tr><td>Main regulations</td><td>RR 11-2025 (coverage), RR 26-2025 (deadline), RMC 98-2026 (guidelines)</td></tr>
<tr><td>BIR platform</td><td>Electronic Invoicing System (EIS)</td></tr>
<tr><td>Deadline for covered taxpayers</td><td>31 December 2026</td></tr>
<tr><td>Exempt</td><td>Micro taxpayers (gross sales under PHP 3 million)</td></tr>
<tr><td>Data format</td><td>JSON for transmission to the EIS</td></tr>
<tr><td>VAT rate</td><td>12% standard rate</td></tr>
</tbody>
</table>
<p>The Philippines is one of several countries with deadlines clustered around the end of 2026 and 2027. Our round-up of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates in 2027</a> shows how it compares.</p>

<h2>How the rules got here</h2>
<p>Philippines e-invoicing has a long history. The TRAIN law of 2018 added Section 237-A to the Tax Code, requiring certain taxpayers to issue electronic invoices and report sales data electronically. The BIR built the EIS and ran a pilot with a small group of large taxpayers from 2022, but the broad mandate kept slipping.</p>
<ul>
<li><strong>RA 11976, the Ease of Paying Taxes (EOPT) Act</strong>, took effect in January 2024 and reshaped invoicing, making the invoice the main document for both goods and services.</li>
<li><strong>RR 7-2024</strong> set out the EOPT invoicing rules, including the minimum information on an invoice.</li>
<li><strong>RR 11-2025</strong>, issued in February 2025, defined an e-invoice, set out the covered groups, exempted micro taxpayers and gave covered taxpayers a compliance period, originally ending in March 2026.</li>
<li><strong>RR 26-2025</strong>, issued in October 2025, extended the deadline for covered taxpayers to 31 December 2026, deferred some other groups and allowed further extensions by the Commissioner.</li>
<li><strong>RMC 98-2026</strong>, dated 22 September 2026 according to adviser reports, consolidated guidance on matters such as the permit to issue e-invoices, EIS certification, the JSON format and corrections.</li>
</ul>
<p>At the time of writing, no further extension beyond 31 December 2026 had been reported. Advisers have pointed out that the detailed guidelines arrived only a few months before the deadline, so many businesses are short of time. Check the BIR website regularly in case of another revenue regulation.</p>

<h2>Who must comply with the BIR EIS deadline</h2>
<p>RR 11-2025 and RR 26-2025 focus on four groups that must be issuing e-invoices by 31 December 2026:</p>
<ol>
<li><strong>Taxpayers engaged in e-commerce</strong>, classified as small, medium or large. Micro e-commerce sellers are exempt.</li>
<li><strong>Taxpayers under the Large Taxpayers Service.</strong></li>
<li><strong>Large taxpayers</strong> as classified under the EOPT rules and RR 8-2024.</li>
<li><strong>Users of a Computerized Accounting System (CAS), a computer-based accounting system with e-invoicing, or other invoicing software.</strong></li>
</ol>
<p>Other groups, such as some exporters, registered business enterprises with incentives and point of sale users, are expected to be covered by separate regulations, according to adviser summaries. Exporters and incentive holders that already use a CAS or invoicing software appear to fall in the fourth group anyway. If a covered business has branches, the requirement generally applies to the head office and all branches.</p>
<h3>The micro taxpayer exemption</h3>
<p>Micro taxpayers, those with gross sales under PHP 3 million under RR 8-2024, are exempt from the mandate. A freelance graphic designer billing PHP 1.8 million a year, using a manual invoice booklet, is outside it. If the same designer moves to invoicing software and grows past PHP 3 million, the position changes, so recheck each year.</p>

<h2>CAS, e-receipts and the end of the official receipt</h2>
<p>Many small businesses are confused by the overlap between CAS registration, the old official receipts and e-invoicing. Here is how they fit together.</p>
<h3>From official receipts to invoices</h3>
<p>Before EOPT, sellers of services issued official receipts and sellers of goods issued sales invoices. Under EOPT and RR 7-2024, the invoice became the primary document for both. Official receipts, including electronic receipts generated by older CAS setups, are now supplementary at most and do not support input VAT claims. Our explainer on <a href="/blog/invoice-vs-receipt">invoices vs receipts</a> covers the general difference. If your system still prints "Official Receipt", update it.</p>
<h3>What CAS registration does and does not do</h3>
<p>Registering a CAS with the BIR allows you to use it for books and invoices. It does not by itself make your invoices compliant e-invoices. Adviser summaries of RMC 98-2026 describe a separate permit to issue e-invoices and an EIS certification process with test transactions. Changes to a CAS to add e-invoicing can count as a major enhancement requiring updated registration. Ask your software provider what they support.</p>
<h3>What counts as an e-invoice</h3>
<p>An e-invoice is structured and system-generated, with data that can be extracted and sent to the BIR. A PDF, scanned image or invoice typed in Word or Excel is not an e-invoice. Our article on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices vs PDF invoices</a> explains why.</p>

<h2>What a Philippine invoice must show</h2>
<p>Whether or not you are covered, invoices must meet the EOPT content rules. Under RR 7-2024 a VAT invoice generally shows:</p>
<ul>
<li>The word "Invoice", plus the seller's registered name, business style, address and TIN with branch code.</li>
<li>A statement that the seller is VAT-registered, followed by its TIN.</li>
<li>The date, a serial number and a description of goods or services with quantity and unit cost.</li>
<li>The buyer's name, address and TIN for sales of PHP 1,000 or more to a business buyer.</li>
<li>The VAT amount shown separately and a breakdown of VATable, zero-rated and exempt sales.</li>
</ul>
<p>Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers TIN placement. Check RR 7-2024 for the full list.</p>

<h2>Worked example: a Cebu online seller</h2>
<p>An online home goods seller in Cebu is VAT registered with gross sales of about PHP 9 million a year, so it is a small taxpayer, not micro. Because it sells through e-commerce, it falls in the first covered group.</p>
<p>A typical order: three items totalling PHP 3,360 including VAT. The VAT is PHP 3,360 multiplied by 12/112, or PHP 360, so VATable sales are PHP 3,000. Today, its e-commerce platform or invoicing software issues an invoice. By 31 December 2026, that invoice must be a compliant e-invoice: generated by a certified system, carrying the required fields, delivered to the buyer by email or a link, and with its data transmitted to the BIR in JSON. At roughly 2,700 orders a month, that is more than 32,000 e-invoices a year, so automation is essential.</p>
<h3>Example 2: a Makati consultancy using a CAS</h3>
<p>A management consultancy in Makati bills about PHP 40 million a year and uses a registered CAS for its books and invoices. It is not an e-commerce seller and not a large taxpayer, but because it uses a CAS it sits in the fourth covered group. A typical monthly retainer is PHP 250,000 plus 12% VAT of PHP 30,000, a total of PHP 280,000. For this firm, Philippines e-invoicing is mainly a software project: its CAS vendor must add e-invoice generation and EIS transmission, the firm must update its CAS registration and obtain the permit, and it must pass certification. With only around 60 invoices a month, volume is not the issue. Getting the system change approved in time is.</p>

<h2>A preparation checklist for Philippines e-invoicing</h2>
<ol>
<li><strong>Confirm your classification.</strong> Check whether you are micro, small, medium or large, and whether you are in a covered group.</li>
<li><strong>List every invoicing channel.</strong> Online store, marketplace, POS, CAS, manual booklets and branches.</li>
<li><strong>Talk to your software provider.</strong> Ask whether it can generate EIS-compliant e-invoices, transmit JSON and support certification.</li>
<li><strong>Apply for the permit.</strong> Follow the current BIR process for permission to issue e-invoices and update your CAS registration if needed.</li>
<li><strong>Complete EIS certification.</strong> Run the required test transactions before go-live.</li>
<li><strong>Fix master data.</strong> Check TINs, branch codes and customer details.</li>
<li><strong>Plan for errors and downtime.</strong> Know how to correct an e-invoice and what to do when the system is unavailable.</li>
</ol>
<h3>Correcting an e-invoice</h3>
<p>Under an e-invoicing system you cannot simply edit an issued invoice and resend it. Corrections follow set procedures, usually by issuing a new document that references the original, so that the data at the BIR matches your books. RMC 98-2026 reportedly covers corrections and system downtime, so read it alongside your software provider's guidance. Our general guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> explains the principle of never overwriting the original.</p>
<h3>Records and retention</h3>
<p>E-invoicing does not remove record-keeping duties. Keep books and supporting records for the period the Tax Code requires, generally five years under the EOPT rules, and make sure your system can produce them on request. Our article on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> compares retention rules in several countries.</p>

<h2>Penalties and risks</h2>
<p>The Tax Code penalises failure to issue proper invoices, and the BIR can suspend or close a business for certain VAT invoicing violations. Separate penalties for failing to report sales electronically exist in the law but depend on implementing rules. The EOPT Act reduces some penalties for micro and small taxpayers. Penalties can be heavy, so get specific advice if you are unsure whether you are covered.</p>
<p>There is also a commercial angle. Large buyers that are already live on Philippines e-invoicing may start asking suppliers for e-invoices so their own processing is simpler, even where the supplier is not yet covered. A small supplier that can issue structured invoices may find it easier to stay on approved vendor lists. If you are close to a threshold, or you sell mainly to large companies, it can be worth preparing before the rules force you to, as long as you follow the same permit and certification steps as covered taxpayers.</p>

<h2>Where a PDF invoice tool still fits</h2>
<p>Our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in the browser. You can set the 12% VAT rate, add your TIN in the business details, choose PHP as the currency and use a notes field for required statements. It is useful for quotes, pro formas and for businesses outside the mandate. It is not a CAS, it is not BIR registered and it does not create e-invoices or send data to the EIS, so covered taxpayers need a compliant system.</p>
<p>For more country guides, browse our <a href="/blog/category/tax-compliance">tax compliance articles</a>.</p>

<h2>Conclusion</h2>
<p>Philippines e-invoicing is now close. If you are a large taxpayer, a non-micro e-commerce seller or a CAS or invoicing software user, plan to be issuing compliant e-invoices through the BIR EIS by 31 December 2026, unless the BIR announces another extension. Confirm your classification, talk to your software provider and complete certification early. Meanwhile, use our <a href="/invoice-generator">invoice generator</a> for quotes and non-covered invoices, check the latest BIR issuances and speak to a qualified adviser for your own situation.</p>
`,
  },
  {
    slug: "vietnam-e-invoice",
    title: "Vietnam E-Invoice Rules: Decree 70/2025 and Decree 123 Guide",
    description:
      "Vietnam e-invoice rules in plain English: Decree 123, the Decree 70/2025 changes, cash register e-invoices, household business rules for 2026 and examples.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Vietnam",
    related: [
      "indonesia-e-faktur",
      "malaysia-lhdn-e-invoice",
      "e-invoicing-guide",
      "philippines-e-invoicing",
    ],
    faqs: [
      {
        q: "Are e-invoices mandatory in Vietnam?",
        a: "Yes. Under Decree 123/2020/ND-CP and Circular 78/2021/TT-BTC, enterprises and most other business organisations in Vietnam have had to use electronic invoices since 1 July 2022. Paper invoices are only allowed in limited cases. Household and individual businesses are covered under separate rules that depend on how they are taxed and on their revenue, and these rules were tightened from 1 June 2025 and again from 2026.",
      },
      {
        q: "What is Decree 70/2025/ND-CP?",
        a: "Decree 70/2025/ND-CP, issued on 20 March 2025 and effective from 1 June 2025, amends Decree 123/2020 on invoices and documents. It expanded e-invoices generated from cash registers, clarified when invoices must be issued for many types of business, changed how errors are corrected and adjusted, added rules for e-commerce and export invoices, and tightened obligations on service providers. It applies alongside Decree 123, not instead of it.",
      },
      {
        q: "Who must use e-invoices from cash registers in Vietnam?",
        a: "Decree 70/2025 requires e-invoices generated from cash registers connected to the tax authority for household and individual businesses with annual revenue of about VND 1 billion or more, and for enterprises selling directly to consumers in listed sectors, such as retail, supermarkets, food and beverage, restaurants, hotels, passenger transport and certain personal services. Check the decree text for the exact wording and sectors.",
      },
      {
        q: "What is the difference between coded and uncoded e-invoices in Vietnam?",
        a: "A coded e-invoice is sent to the tax authority, which assigns a code before the seller sends it to the buyer. Most businesses use coded invoices. An uncoded e-invoice is issued without that code, but its data is sent to the tax authority. Uncoded invoices are generally reserved for businesses in certain sectors, such as electricity, telecoms and finance, or those meeting technical conditions. Check eligibility with the tax authority or your provider.",
      },
      {
        q: "What changed for household businesses in Vietnam in 2026?",
        a: "Vietnam ended the presumptive lump-sum tax method for household businesses from 1 January 2026, moving them to declaring tax based on actual revenue. Reports also say the revenue threshold below which households pay no VAT or personal income tax rose to VND 1 billion a year, and that households above it must use e-invoices. Confirm the current rules with your local tax office, because implementing guidance has been changing.",
      },
      {
        q: "How do I correct a wrong e-invoice in Vietnam?",
        a: "Under Decree 70/2025, the seller and buyer should first agree in writing on the error, then the seller issues an adjusting or replacement e-invoice that references the original. If a coded e-invoice with an error has not yet been sent to the buyer, the seller can cancel it and issue a new one. Several erroneous invoices to the same buyer in the same month can be handled with one new invoice.",
      },
      {
        q: "Can a Vietnam e-invoice be in English or in US dollars?",
        a: "The invoice must be in Vietnamese, but you can add another language alongside it, usually in brackets or below the Vietnamese text. Amounts are normally shown in Vietnamese dong. If you sell in a foreign currency, you can show that currency, but the invoice must also show the exchange rate and the total converted into dong. Check the details with your e-invoice provider.",
      },
      {
        q: "When must an invoice be issued in Vietnam?",
        a: "For goods, the invoice is issued when ownership or the right to use passes to the buyer, regardless of payment. For services, it is issued when the service is completed, or when payment is received if you are paid in advance, though deposits are treated differently. Decree 70/2025 added specific timing rules for exports, large-volume supplies, insurance, medical services, taxis and other cases.",
      },
      {
        q: "Can a foreign company issue Vietnam e-invoices?",
        a: "A foreign supplier without a permanent establishment in Vietnam that sells e-commerce, digital or other services and registers for tax there can register to use e-invoices. Decree 70/2025 says such suppliers must follow Decree 123 as amended if they do, and they may use VAT invoices where the deduction method applies. Get local advice, because registration and invoicing rules for foreign suppliers are detailed.",
      },
    ],
    content: `
<p>A <strong>Vietnam e-invoice</strong> is mandatory for enterprises under Decree 123/2020, which made electronic invoices compulsory from 1 July 2022. Decree 70/2025, effective 1 June 2025, amended those rules: it expanded e-invoices generated from cash registers, clarified when invoices must be issued and changed how errors are corrected. Household businesses face tighter e-invoice rules from 2026.</p>
<p>This guide explains how the Vietnam e-invoice system works for small businesses, freelancers and foreign companies selling into Vietnam. It covers the types of e-invoice, what Decree 70/2025 changed, the new rules for household businesses, and worked examples. It is general information based on official texts and dated adviser summaries, not tax advice, so confirm your position with the tax authority or a qualified adviser.</p>

<h2>Vietnam e-invoice rules at a glance</h2>
<table>
<thead>
<tr><th>Item</th><th>Position at the time of writing</th></tr>
</thead>
<tbody>
<tr><td>Core rules</td><td>Decree 123/2020/ND-CP and Circular 78/2021/TT-BTC</td></tr>
<tr><td>Main amendment</td><td>Decree 70/2025/ND-CP, effective 1 June 2025</td></tr>
<tr><td>Mandatory for enterprises since</td><td>1 July 2022</td></tr>
<tr><td>Main types</td><td>Coded e-invoices, uncoded e-invoices, e-invoices generated from cash registers</td></tr>
<tr><td>Household businesses</td><td>Lump-sum tax method ended from 1 January 2026; e-invoices required above a revenue threshold</td></tr>
<tr><td>Language</td><td>Vietnamese, with another language allowed alongside</td></tr>
<tr><td>Standard VAT rate</td><td>10%, with a temporary reduction to 8% for many goods and services</td></tr>
</tbody>
</table>
<p>Vietnam is one of several Asian countries running real-time or near real-time invoice reporting. Our guide to <a href="/blog/malaysia-lhdn-e-invoice">Malaysia's LHDN e-invoice</a> and our article on <a href="/blog/philippines-e-invoicing">Philippines e-invoicing</a> cover two neighbours with different approaches.</p>

<h2>How the Vietnam e-invoice system works</h2>
<p>Vietnam uses a model in which invoice data flows to the tax authority, often before the buyer receives it. A business signs up with a licensed e-invoice service provider, registers to use e-invoices with the tax authority, and then issues invoices through the provider's software.</p>
<h3>Coded e-invoices</h3>
<p>Most businesses issue coded e-invoices. The seller creates the invoice, sends it to the tax authority's system, receives a unique code, and then sends the coded invoice to the buyer. The buyer can check the invoice on the tax authority's portal.</p>
<h3>Uncoded e-invoices</h3>
<p>Some businesses can issue e-invoices without a code and send the invoice data to the tax authority afterwards. This is generally reserved for large organisations in sectors such as electricity, petroleum, telecoms, transport, water, finance and insurance, or those that meet technical conditions. Decree 70/2025 also lists cases where a code is required for each transaction, such as businesses in bankruptcy proceedings that still operate.</p>
<h3>E-invoices generated from cash registers</h3>
<p>For retail and consumer-facing businesses, invoices can be generated by a cash register or POS system connected to the tax authority. Decree 70/2025 made this the expected route for many shops, restaurants and other businesses that sell to the public.</p>
<h3>Choosing a licensed provider</h3>
<p>Every business that issues e-invoices needs software from a provider approved to connect to the tax authority. When comparing providers, ask about the price per invoice or per package, whether the software links to your accounting system or POS, how it handles adjustments and replacements under Decree 70/2025, how long it stores invoices, and whether support is available in English if your finance team needs it. For a small business issuing a few hundred invoices a year, a prepaid package of invoices is often the cheapest option. Keep your provider contract and registration form, because the tax office may ask for them.</p>
<p>If you are new to the idea of structured invoices, our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> explains the general concepts.</p>

<h2>What Decree 70/2025 changed</h2>
<p>Decree 70/2025/ND-CP was issued on 20 March 2025 and took effect on 1 June 2025. It amends Decree 123 rather than replacing it. The main changes for small businesses are:</p>
<ul>
<li><strong>Cash register e-invoices.</strong> Household and individual businesses with annual revenue of about VND 1 billion or more, and enterprises selling directly to consumers in listed sectors, must use e-invoices generated from cash registers connected to the tax authority.</li>
<li><strong>Invoice timing.</strong> Clearer rules on when to issue invoices for goods, services, exports, large-volume supplies and sectors such as insurance, medical services and taxis.</li>
<li><strong>Corrections.</strong> A new process for replacing and adjusting invoices, built around a written agreement with the buyer.</li>
<li><strong>Per-transaction invoices.</strong> If a customer asks for an invoice for a transaction, the seller must issue one.</li>
<li><strong>Promotions.</strong> One invoice can cover the total value of a promotion, with a list of the items.</li>
<li><strong>E-commerce and exports.</strong> New rules for e-commerce invoice types, export processing enterprises and foreign suppliers.</li>
<li><strong>Prohibited acts.</strong> Failing to transfer e-invoice data to the tax authority as required is now listed explicitly.</li>
</ul>

<h2>Cash register e-invoices and household businesses</h2>
<p>For many small businesses, the biggest change is the push into cash register e-invoices. Under Decree 70/2025, these are required for:</p>
<ul>
<li>Household and individual businesses with annual revenue of about VND 1 billion or more. Some summaries say "VND 1 billion or more" and others "over VND 1 billion", so check the decree text if you are close to the line.</li>
<li>Enterprises and households selling goods or services directly to consumers in sectors such as shopping centres, supermarkets, retail (excluding vehicles), food and beverage, restaurants, hotels, passenger transport and certain personal services.</li>
</ul>
<p>A cash register e-invoice must show the seller's name, address and tax code, the buyer's details if the buyer asks (tax code, personal ID number or phone number), the goods or services, unit price, quantity and payment amount, the time of issue, and a code or data that lets the buyer look up the invoice. The buyer can receive it by text message, email, a link or a QR code.</p>
<h3>The 2026 household business reforms</h3>
<p>From 1 January 2026, Vietnam ended the lump-sum, or presumptive, tax method for household businesses. Instead of paying a fixed amount set by the tax office, households now declare tax based on actual revenue. Reports also say the revenue threshold below which households pay no VAT or personal income tax was raised from VND 500 million to VND 1 billion a year, and that households above VND 1 billion must use coded e-invoices or cash register e-invoices. Households below the threshold may be able to use e-invoices voluntarily. Several decrees and circulars have been issued and amended during 2026, so confirm the current rules with your local tax office.</p>

<h2>Worked examples</h2>
<h3>Example 1: a Hanoi noodle shop</h3>
<p>A family-run noodle shop in Hanoi takes about VND 110 million a month, or VND 1.32 billion a year. That is above VND 1 billion, so under the current rules it is expected to issue e-invoices generated from a cash register connected to the tax authority. It needs a compatible POS system and a contract with an e-invoice provider. A customer's bill of VND 270,000 would produce an e-invoice the customer can view by scanning a QR code on the receipt. If the shop's revenue were VND 800 million a year, it would be below the threshold and could choose whether to use e-invoices.</p>
<h3>Example 2: a Ho Chi Minh City software agency</h3>
<p>A software agency registered as a company bills a client VND 50,000,000 for a website build. At 10% VAT, the VAT is VND 5,000,000 and the total is VND 55,000,000. The agency issues a coded Vietnam e-invoice through its provider when the work is completed and accepted. If the client paid a 30% advance of VND 16,500,000 before work started, that payment would generally trigger an invoice at the time of payment, unless it is a deposit. Check whether your service qualifies for the temporary 8% rate; IT services generally do not.</p>
<h3>Example 3: an invoice in US dollars</h3>
<p>A design studio in Da Nang bills a Vietnamese client USD 2,000. The invoice must be in Vietnamese, may show English alongside, and must show the exchange rate and the total converted into dong. Our guide to a <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> covers the general principles.</p>

<h2>When to issue a Vietnam e-invoice</h2>
<p>Getting the timing wrong is one of the most common errors. The general rules after Decree 70/2025 are:</p>
<ol>
<li><strong>Goods:</strong> when ownership or the right to use passes to the buyer, regardless of whether payment has been received.</li>
<li><strong>Exports:</strong> no later than the next working day after customs clearance is completed.</li>
<li><strong>Services:</strong> when the service is completed, or when payment is received if it is collected in advance. Deposits are excluded.</li>
<li><strong>Large-volume, recurring supplies:</strong> by the 7th day of the following month, or within 7 days after the agreed period ends, in sectors where this is allowed.</li>
<li><strong>Special sectors:</strong> separate rules for insurance, medical services, taxis, lotteries, credit and other areas.</li>
</ol>

<h2>Correcting errors under Decree 70/2025</h2>
<p>You cannot simply edit an issued invoice. Under the amended rules:</p>
<ul>
<li>The seller and buyer agree in writing on the error before an adjusting or replacement invoice is issued. The seller keeps that agreement.</li>
<li>If the buyer is an individual, the seller notifies them, or posts a notice on its website if it has one.</li>
<li>If a coded invoice with an error has not yet been sent to the buyer, the seller cancels it and issues a new one.</li>
<li>One new invoice can adjust or replace several incorrect invoices issued to the same buyer in the same month.</li>
</ul>
<p>The same principle applies in most countries: never overwrite the original. Our guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> explains the logic.</p>

<h2>Language, currency and content basics</h2>
<p>A Vietnam e-invoice must be in Vietnamese. Another language can be added, usually in brackets or below the Vietnamese text. Numbers use Arabic numerals, and amounts are normally in dong. If you invoice in a foreign currency, show the exchange rate and the total converted to dong. Typical content includes the invoice name, form and series symbol, invoice number, the seller's and buyer's names, addresses and tax codes, the goods or services, quantity, unit price, amount before tax, the VAT rate and amount, the total, the time of issue and the code where applicable. Our overview of <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> shows how this compares with other markets.</p>

<h2>Where a PDF invoice generator fits</h2>
<p>A PDF is not a Vietnam e-invoice. Our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser with one tax rate, a choice of currency, your logo and notes. It does not connect to the tax authority, cannot obtain a code and is not a licensed e-invoice service. Inside Vietnam, use a licensed provider for invoices. A PDF tool is still useful for quotes, pro formas and invoices you issue from outside Vietnam to foreign clients, under your own country's rules. Our article on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices vs PDF invoices</a> explains the difference.</p>

<h2>Conclusion</h2>
<p>The Vietnam e-invoice system rests on Decree 123/2020, as amended by Decree 70/2025. Enterprises have used e-invoices since 2022. Decree 70 pushed many consumer-facing businesses into cash register e-invoices, and the 2026 reforms move household businesses above VND 1 billion firmly into the system. Choose a licensed provider, get timing and corrections right, and check updates with the tax authority or a qualified adviser. For quotes and non-Vietnam invoices, our <a href="/invoice-generator">invoice generator</a> is free to use, and more country guides are in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>
`,
  },
];
