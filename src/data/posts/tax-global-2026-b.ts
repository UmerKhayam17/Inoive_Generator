import type { PostDraft } from "../blog";

export const TAX_GLOBAL_2026_B_POSTS: PostDraft[] = [
  {
    slug: "greece-mydata-e-invoicing",
    title: "Greece E-Invoicing 2026: myDATA B2B Mandate Explained",
    description:
      "Greece e-invoicing explained: who must issue B2B e-invoices through myDATA, the March and November 2026 start dates, providers, AADE's free apps and penalties.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Greece",
    related: ["e-invoicing-mandates-2027", "peppol-vs-clearance-model", "e-invoice-vs-pdf-invoice"],
    faqs: [
      {
        q: "When does B2B e-invoicing become mandatory in Greece?",
        a: "Greece is rolling out mandatory B2B e-invoicing in two waves. Businesses with gross revenue above 1 million euros in their 2023 income tax return started on 2 March 2026, after a postponement from 2 February. All other in-scope businesses start on 2 November 2026, after a postponement from 1 October announced by AADE on 30 September 2026. Each wave has a transition period before approved channels become the only accepted route. Check AADE's announcements for any further changes.",
      },
      {
        q: "What is myDATA in Greece?",
        a: "myDATA (my Digital Accounting and Tax Application) is the electronic platform run by AADE, the Greek tax authority. Businesses transmit summary data of their invoices and other tax documents to it, and each transmitted document receives a unique registration number called a MARK. Under the e-invoicing mandate, myDATA remains the reporting hub, but covered B2B invoices must be issued and transmitted through an approved e-invoicing provider or AADE's own free applications.",
      },
      {
        q: "Can small businesses in Greece use a free e-invoicing tool?",
        a: "Yes. AADE offers free applications, timologio and myDATAapp, that let businesses issue invoices and transmit them to myDATA without paying a provider. They suit businesses with a low number of invoices. Reported guidance says that businesses using only these apps from the start of their wave do not need to file the declaration of start of electronic issuance. Businesses with higher volumes usually prefer a licensed provider connected to their accounting or ERP software.",
      },
      {
        q: "What are the penalties for not issuing e-invoices in Greece?",
        a: "Advisory summaries of AADE guidance say an invoice issued outside the approved channels after the transition period is treated as not issued. For transactions subject to VAT, the reported fine is 50 percent of the related VAT. For transactions without VAT, fixed fines per audit have been reported, depending on whether the business keeps simplified or double-entry books. Penalty rules can change, so confirm the current amounts with AADE or a Greek accountant.",
      },
      {
        q: "Does the Greek e-invoicing mandate apply to sales to other EU countries?",
        a: "According to the decision setting the mandate, the scope covers domestic B2B transactions, B2B transactions with businesses established outside the EU, and B2G transactions. Intra-EU B2B supplies are reported to have been left out of the mandatory scope for now, as are invoices to consumers, which follow separate receipt and cash register rules. The EU's VAT in the Digital Age package will bring its own cross-border reporting rules later, so expect this to change.",
      },
      {
        q: "Do foreign businesses need to issue Greek e-invoices?",
        a: "The mandate is aimed at businesses established in Greece and Greek permanent establishments. A foreign business that is only VAT registered in Greece, without an establishment there, is generally reported to be outside the core B2B obligation, but the rules for non-established businesses are detailed and still evolving. If you sell to Greek clients from abroad, ask your client what they need from you and confirm your position with a Greek tax adviser.",
      },
      {
        q: "What is an e-invoicing provider in Greece?",
        a: "An e-invoicing provider is a private company licensed by AADE to issue, transmit and store electronic invoices on behalf of businesses. The provider sends invoice data to myDATA, receives the MARK, and delivers the invoice to the buyer. AADE publishes a register of approved providers. A business can use more than one provider, and many accounting and ERP packages used in Greece connect to a provider rather than sending invoices to myDATA directly.",
      },
      {
        q: "Can I still send PDF invoices to Greek clients?",
        a: "For transactions inside the mandate, a PDF on its own will not meet the rules once the transition period ends, because the invoice must go through an approved channel and be reported to myDATA. A PDF copy can still be useful as a human-readable version. For transactions outside the mandate, such as some intra-EU or consumer sales, PDF invoices may still be acceptable as long as they meet Greek and EU VAT content rules.",
      },
    ],
    content: `
<p><strong>Greece e-invoicing is now mandatory for domestic B2B sales.</strong> Large businesses (gross revenue above 1 million euros in 2023) had to start issuing e-invoices through an approved channel on 2 March 2026. Every other in-scope business starts on 2 November 2026, with a transition period until 31 January 2027. Invoices must go through a licensed provider or AADE's free apps and be reported to myDATA.</p>

<p>That is the short answer. The details matter, because the dates have moved several times, the scope is narrower than many people assume, and the penalty for getting it wrong is tied to the VAT on each invoice. This guide covers the timeline, who is in scope, the three ways to issue a compliant invoice, the declaration you may need to file, and a practical checklist. It is written for small business owners and freelancers in Greece, and for anyone abroad who invoices Greek clients.</p>

<h2>What Greece e-invoicing means in practice</h2>
<p>Greece has had digital tax reporting for several years through myDATA, the platform run by AADE (the Independent Authority for Public Revenue). Businesses already send summary invoice data to myDATA, and each document gets a unique registration number called a <strong>MARK</strong>. What changes with the B2B mandate is how the invoice itself is created and transmitted.</p>
<p>Under the mandate, covered invoices must be issued as structured electronic invoices through one of the approved channels, not typed up in a word processor and emailed as a PDF. The invoice data reaches myDATA as part of the issuing process, so the tax authority sees the transaction close to real time. This places Greece in the group of countries that combine e-invoicing with real-time reporting, a model explained in our guide to <a href="/blog/peppol-vs-clearance-model">Peppol versus clearance e-invoicing models</a>.</p>
<p>Public sector invoicing (B2G) went electronic earlier, under the EU public procurement rules that Greece transposed through Law 4601/2019. The 2026 mandate extends the obligation to business-to-business sales.</p>

<h2>Greece e-invoicing timeline: phases and deadlines</h2>
<p>The rollout was set by AADE decision A.1128/2025 and has since been amended. The original plan started large businesses in February 2026 and everyone else in October 2026. Both dates slipped. On 17 February 2026 the Ministry of Finance and AADE moved the first wave to 2 March 2026. On 30 September 2026 decision A.1197/2026 moved the second wave from 1 October to 2 November 2026.</p>
<table>
<thead><tr><th>Wave</th><th>Who</th><th>Original start</th><th>Current start</th><th>Transition period ends</th></tr></thead>
<tbody>
<tr><td>Wave 1</td><td>Businesses with gross revenue above 1 million euros in their 2023 income tax return</td><td>2 February 2026</td><td>2 March 2026</td><td>3 May 2026</td></tr>
<tr><td>Wave 2</td><td>All other in-scope businesses, including those at or below 1 million euros</td><td>1 October 2026</td><td>2 November 2026</td><td>31 January 2027</td></tr>
<tr><td>Exclusive channels</td><td>Wave 2 businesses</td><td>-</td><td>1 February 2027</td><td>Only approved channels accepted</td></tr>
</tbody>
</table>
<p>The transition period is not a delay. Reports of the second-wave decision stress that 2 November 2026 is the start date. During the transition you may keep issuing invoices with your existing software or ERP and reporting them to myDATA the old way, while you move to an approved channel. From 1 February 2027, direct ERP-to-myDATA transmission of covered invoices is reported to stop being accepted.</p>
<p>Dates have changed more than once, so treat this table as accurate at the time of writing and check AADE's site for any newer decision. For the wider European picture, see our overview of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates coming in 2027</a>.</p>

<h2>Which transactions are covered</h2>
<p>The mandate does not cover every invoice a Greek business issues. Based on decision A.1128/2025 as summarised by advisers, the scope is:</p>
<ul>
<li><strong>Domestic B2B sales</strong> between businesses established in Greece.</li>
<li><strong>B2B sales to businesses established outside the EU</strong>.</li>
<li><strong>B2G transactions</strong>, including public contracts and general government expenditure.</li>
</ul>
<p>Two big categories are reported to be outside the mandatory scope for now:</p>
<ul>
<li><strong>Intra-EU B2B supplies</strong>, which will be shaped by the EU's <a href="/blog/vida-vat-in-the-digital-age">VAT in the Digital Age (ViDA) package</a> later in the decade.</li>
<li><strong>Retail sales to consumers</strong>, which follow separate rules for receipts and cash registers linked to myDATA.</li>
</ul>
<p>If most of your sales go to consumers or to EU clients outside Greece, the core B2B obligation may touch only a small share of your invoices. You still need to report those other documents to myDATA under the existing rules.</p>

<h2>Three ways to issue a compliant invoice</h2>
<p>Greece e-invoicing gives you a choice of channel. Pick the one that matches your volume and the software you already use.</p>
<h3>1. A licensed e-invoicing provider</h3>
<p>Private providers are assessed and licensed by AADE. The provider issues the invoice in a structured format, sends the data to myDATA, receives the MARK and delivers the invoice to your buyer. AADE publishes the list of approved providers. Most Greek accounting and ERP packages connect to one, so your staff keep using familiar screens. Providers charge fees, usually per invoice or by subscription, so compare pricing before you sign.</p>
<h3>2. AADE's timologio application</h3>
<p>timologio is a free web application from AADE for issuing invoices. It suits sole traders and small businesses with a modest number of invoices each month. You enter invoices manually, and the data goes to myDATA automatically.</p>
<h3>3. AADE's myDATAapp</h3>
<p>myDATAapp is the mobile option, aimed at very small businesses and professionals who issue invoices on the go. Like timologio, it is free.</p>
<p>What about your existing ERP? You can keep it, but after the transition it must connect through an approved provider rather than send covered invoices to myDATA directly. Businesses that run several systems can use more than one provider.</p>

<h2>The declaration of start of electronic issuance</h2>
<p>If you choose a licensed provider, you have to file a <strong>declaration of start of electronic issuance of documents</strong> with AADE. For the second wave, reports say the declaration must carry an effective date of 2 November 2026, and electronic issuance should begin during the transition period. Filing the declaration on time is also a condition for keeping your old software running in parallel during the transition.</p>
<p>Businesses that use only timologio or myDATAapp from 2 November 2026, without a gradual transition, are reported not to need the declaration. AADE sent reminders earlier in 2026 to first-wave businesses that had not filed it, including some that already used a provider, so do not assume your provider files it for you. Ask them directly.</p>

<h2>Penalties for non-compliance</h2>
<p>The penalty regime is what makes Greece e-invoicing hard to ignore. According to advisory summaries of AADE circular E.2004/2026 and Law 5104/2024:</p>
<ul>
<li>An invoice issued outside the approved channels after the transition period is <strong>treated as not issued</strong>.</li>
<li>For VAT transactions, the fine is reported as <strong>50 percent of the VAT</strong> on the invoice.</li>
<li>For transactions without VAT, fixed fines per audit have been reported, with lower amounts for businesses on simplified books than for those on double-entry books.</li>
<li>Manual issuance is allowed only in exceptional cases, such as a loss of connectivity, with the invoice reported later.</li>
</ul>
<p>Here is how the 50 percent rule adds up. Suppose a small design studio issues 20 invoices a month at 2,000 euros net each, all at the standard Greek VAT rate of 24 percent. Each invoice carries 480 euros of VAT. If those invoices were issued outside an approved channel after the transition, the reported fine would be 240 euros per invoice, or 4,800 euros for a single month. Even one month of non-compliance costs far more than a year of most provider subscriptions.</p>
<p>Penalty amounts and audit practice can change. Treat these figures as a guide and confirm them with AADE or a Greek accountant.</p>

<h2>What should be on a Greek invoice</h2>
<p>The approved channels handle the technical format, but the commercial content is still your job. A compliant invoice needs the usual elements found in our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>, plus the Greek specifics:</p>
<table>
<thead><tr><th>Element</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Supplier and buyer details</td><td>Names, addresses and Greek tax numbers (AFM), or EU VAT numbers where relevant</td></tr>
<tr><td>Invoice series and number</td><td>Sequential numbering by series; see our <a href="/blog/invoice-numbering-system">invoice numbering guide</a></td></tr>
<tr><td>Date of issue and supply</td><td>Issue promptly; Greek rules set deadlines for issuing after supply</td></tr>
<tr><td>Description, quantity and price</td><td>Clear line items with net amounts</td></tr>
<tr><td>VAT rate and amount</td><td>Standard rate 24 percent, with reduced rates for some goods and services</td></tr>
<tr><td>MARK</td><td>Assigned by myDATA when the document is transmitted</td></tr>
</tbody>
</table>
<p>For a broader comparison of what different countries require, see <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>

<h2>A practical checklist for small businesses</h2>
<p>If you are in the second wave, you have very little time. Work through these steps now:</p>
<ol>
<li><strong>Confirm your wave.</strong> Check the gross revenue in your 2023 income tax return. At or below 1 million euros means the 2 November 2026 start.</li>
<li><strong>List your invoice types.</strong> Separate domestic B2B, non-EU B2B, B2G, intra-EU and consumer sales. Only the first three fall under the mandate.</li>
<li><strong>Choose a channel.</strong> Low volume and simple invoices may fit timologio or myDATAapp. Regular volume and accounting software usually point to a provider.</li>
<li><strong>Ask your software vendor</strong> which provider it connects to and what changes on your screens.</li>
<li><strong>File the declaration</strong> if you use a provider, with the correct effective date, and keep proof of filing.</li>
<li><strong>Clean up master data.</strong> Make sure customer AFMs, addresses and product VAT codes are correct, because errors are rejected or flagged in real time.</li>
<li><strong>Run test invoices</strong> during the transition and check that each gets a MARK.</li>
<li><strong>Train whoever issues invoices</strong> on the new workflow and the rules for exceptional manual issuance.</li>
</ol>

<h2>If you invoice Greek clients from abroad</h2>
<p>The mandate is aimed at businesses established in Greece and Greek permanent establishments. A freelancer or company based elsewhere that sells services to a Greek business is generally not issuing Greek e-invoices, and cross-border B2B services within the EU usually follow the <a href="/blog/reverse-charge-invoice">reverse charge rules</a>. Your Greek client may still ask for specific details, such as their AFM and VAT number on your invoice, so they can record the purchase correctly in myDATA. If you have a fixed establishment or VAT registration in Greece, get local advice, because the rules for non-established businesses are detailed.</p>

<h2>Where a PDF invoice still fits</h2>
<p>A browser-based PDF tool like our free <a href="/invoice-generator">invoice generator</a> does not produce Greek e-invoices, does not connect to myDATA and cannot obtain a MARK. For transactions inside the mandate you need a licensed provider or AADE's apps. A PDF invoice is still useful for documents outside the mandate, such as invoices from a non-Greek business to Greek clients, quotes and pro forma invoices, and as a readable copy for your records. Our explainer on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices versus PDF invoices</a> covers the difference in detail.</p>

<h2>Conclusion</h2>
<p>Greece e-invoicing is live for large businesses and starts for everyone else on 2 November 2026. Confirm your wave, pick a channel, file the declaration if you need one, and test before the transition ends on 31 January 2027. This guide is general information, not tax advice. Check the latest AADE decisions and speak to a qualified Greek accountant about your own situation. For invoices outside the mandate, you can still create a clean PDF in minutes with our <a href="/invoice-generator">free invoice generator</a> and browse more guides in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>
`,
  },
  {
    slug: "uae-vat-changes-2026",
    title: "UAE VAT Changes 2026: What the New Amendments Mean",
    description:
      "UAE VAT changes 2026 explained: no more reverse charge self-invoices, a five-year limit on refunds with a 31 December 2026 deadline, and new input tax checks.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Arab Emirates",
    related: ["uae-vat-invoice-requirements", "uae-e-invoicing-2027", "uae-vat-return-filing"],
    faqs: [
      {
        q: "What are the main UAE VAT changes in 2026?",
        a: "Federal Decree-Law No. 16 of 2025 amended the UAE VAT Law from 1 January 2026, alongside Decree-Law No. 17 of 2025 amending the Tax Procedures Law. The main changes are: businesses no longer need to issue self-invoices under the reverse charge, excess refundable VAT must be reclaimed within five years, the FTA can deny input tax linked to tax evasion if the business knew or should have known, and voluntary disclosure rules were relaxed for minor errors.",
      },
      {
        q: "Do I still need to issue a self-invoice for reverse charge in the UAE?",
        a: "No, not as a general rule. From 1 January 2026 the requirement to issue a self-invoice for reverse charge supplies, such as imported services, was removed from Article 48 of the VAT Law. You still account for the VAT in your return and must keep supporting documents, such as the supplier's invoice and the contract. Advisers note a self-invoice may still help support input tax recovery if supplier documents are missing.",
      },
      {
        q: "What is the five-year rule for UAE VAT refunds?",
        a: "Under the amended law, excess recoverable input tax can be carried forward or refunded only within five years from the end of the tax period in which it arose. After that, the right is lost. A transitional rule gives businesses whose five-year period had already expired, or expires within one year of 1 January 2026, until the end of 2026 to file refund requests. Check old credit balances now.",
      },
      {
        q: "Can the FTA refuse my input VAT claim?",
        a: "Yes. The 2026 amendments let the Federal Tax Authority deny input tax recovery where the supply forms part of a tax evasion arrangement and you knew, or should have known, about it. You are treated as aware if you fail to take reasonable steps to verify the supply. In practice, check that suppliers are genuinely registered, that their TRN is valid, and that goods or services were actually received.",
      },
      {
        q: "Did the UAE VAT rate change in 2026?",
        a: "No. The standard UAE VAT rate remains 5 percent, and zero-rated and exempt categories were not changed by the January 2026 amendments. The registration thresholds also stayed the same, at AED 375,000 of taxable supplies for mandatory registration and AED 187,500 for voluntary registration. The changes focus on procedures: self-invoicing, time limits, refunds, input tax checks and voluntary disclosures.",
      },
      {
        q: "Do I need a voluntary disclosure for small VAT errors now?",
        a: "Reported summaries of the amended Tax Procedures Law say voluntary disclosures are no longer required for errors with no tax impact or minor errors, which can instead be corrected in a later tax return. The FTA is expected to specify which cases still require a voluntary disclosure. Until that guidance is clear for your situation, check the FTA's latest rules or ask a tax agent before deciding not to file.",
      },
      {
        q: "How do the 2026 VAT changes relate to UAE e-invoicing?",
        a: "They are separate projects. The January 2026 amendments changed VAT and procedural rules. The UAE e-invoicing system is a different program, with phased mandatory dates expected from 2027 using an accredited service provider model. Both push businesses toward accurate, well-documented invoices and clean supplier data, so improving your records now helps with both.",
      },
      {
        q: "What should UAE small businesses do about the 2026 VAT changes?",
        a: "Review any VAT credit balances older than four years and file refund requests before the transitional deadline at the end of 2026. Update your reverse charge process so staff stop raising unnecessary self-invoices but keep supplier documents. Add a simple supplier verification step, such as checking TRNs. Finally, ask your tax agent how the new voluntary disclosure rules affect how you correct past errors.",
      },
    ],
    content: `
<p><strong>The UAE VAT changes 2026 came into force on 1 January 2026</strong> through Federal Decree-Law No. 16 of 2025, with matching changes to the Tax Procedures Law. Businesses no longer issue self-invoices for reverse charge supplies, excess VAT credits must be reclaimed within five years, and the FTA can deny input tax linked to evasion. The 5 percent rate is unchanged.</p>

<p>Most of these changes simplify paperwork, but one of them has a hard deadline that is only weeks away at the time of writing: businesses with old VAT credit balances have until the end of 2026 to claim them under the transitional rule. This guide walks through each amendment, shows the effect with worked examples, and gives a short action list for small businesses, freelancers and finance teams in the UAE.</p>

<h2>The two laws behind the UAE VAT changes 2026</h2>
<p>The UAE Ministry of Finance published two federal decree-laws in November 2025, both effective 1 January 2026:</p>
<ul>
<li><strong>Federal Decree-Law No. 16 of 2025</strong>, which amends the VAT Law (Federal Decree-Law No. 8 of 2017).</li>
<li><strong>Federal Decree-Law No. 17 of 2025</strong>, which amends the Tax Procedures Law and covers refunds, voluntary disclosures and audit periods across taxes.</li>
</ul>
<p>The Ministry described the goal as simplifying procedures while keeping transparency and alignment with international standards. In practice, the amendments fall into four groups: invoicing, time limits on credits, input tax risk, and corrections. The summary below is based on the Ministry's announcement and published adviser commentary; always check the official text and the FTA's guides for your case.</p>

<h2>Change 1: no more reverse charge self-invoicing</h2>
<p>Before 2026, a UAE business that imported services or certain goods under the reverse charge was expected to issue a tax invoice to itself, known as a self-invoice. The amendment to Article 48 of the VAT Law removed that requirement. You still account for the VAT in your return, but you do not raise an internal invoice for each reverse charge purchase.</p>
<p>You must still keep the supporting documents set out in the Executive Regulation, such as the supplier's invoice, the contract and proof of payment. Advisers note that a self-invoice may still be useful as evidence to support input tax recovery where the supplier's documents are unavailable.</p>
<h3>Worked example: imported software service</h3>
<p>A Dubai marketing agency, registered for VAT, buys a software subscription from a UK supplier for AED 20,000. The UK supplier does not charge UAE VAT.</p>
<ul>
<li>The agency reports output VAT of AED 1,000 (5 percent of AED 20,000) in its return under the reverse charge.</li>
<li>If the software is used for taxable business activities, the agency also recovers AED 1,000 as input tax in the same return.</li>
<li>The net VAT effect is zero, as before.</li>
<li><strong>What changed:</strong> the agency no longer issues itself an AED 20,000 self-invoice. It files the supplier's invoice and contract instead.</li>
</ul>
<p>For a refresher on how reverse charge works in general, see our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>. If you are a UAE supplier selling abroad, the zero-rating rules for exports are not affected by this change.</p>

<h2>Change 2: a five-year limit on excess VAT credits</h2>
<p>This is the change with the biggest money at stake. Under the amended Article 74, excess recoverable input tax can be carried forward or refunded only within <strong>five years from the end of the tax period</strong> in which it arose. After that, the right is lost. The separate statute of limitation article in the VAT Law was repealed to align with the Tax Procedures Law.</p>
<p>There is a transitional window. Businesses whose five-year period had already expired before 1 January 2026, or will expire within one year of that date, may still request a refund or set the balance against other tax liabilities, but only within one year of 1 January 2026. Advisers read this as a deadline at the end of 2026. Given today's date, that window closes in roughly two months.</p>
<h3>Worked example: a stranded credit from 2021</h3>
<p>A trading company in Sharjah built up an excess input tax balance of AED 85,000 in its quarterly return for the period ending 31 March 2021, after a large equipment purchase. It has carried the balance forward ever since. Under the new rule, five years from the end of that period ended on 31 March 2026, so the balance falls inside the transitional relief. If the company files a refund request before the transitional deadline, it can still recover the AED 85,000. If it waits until 2027, the credit is likely gone.</p>
<table>
<thead><tr><th>Credit arose in tax period ending</th><th>Five years ends</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>2018 to 2020</td><td>Already expired before 2026</td><td>Covered by transitional relief only if claimed by the end of 2026</td></tr>
<tr><td>During 2021</td><td>During 2026</td><td>Claim now under the transitional window</td></tr>
<tr><td>During 2022</td><td>During 2027</td><td>Plan a refund or use the credit before the five years ends</td></tr>
<tr><td>2023 onward</td><td>2028 onward</td><td>Track the five-year date for each period</td></tr>
</tbody>
</table>
<p>The amended Tax Procedures Law also gives the FTA extra time to audit a refund claim filed late in the five-year window, so keep your records ready. Our guide to <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers record-keeping periods in more detail.</p>

<h2>Change 3: input tax can be denied for evasion chains</h2>
<p>The amendments to Article 54 add new conditions for recovering input tax. The FTA can deny recovery where the supply is part of a tax evasion arrangement and the business <strong>knew or should have known</strong> about it. A business is treated as aware if it fails to verify the validity and integrity of the supply under the FTA's procedures.</p>
<p>This puts real weight on supplier due diligence. For a small business, practical steps are:</p>
<ul>
<li>Check each new supplier's Tax Registration Number using the FTA's verification service. Our guide to the <a href="/blog/trn-number-uae">UAE TRN number</a> explains the format.</li>
<li>Be wary of unusually low prices, suppliers with no trading history, or requests to pay third parties.</li>
<li>Keep evidence that goods were delivered or services performed, not just the invoice.</li>
<li>Make sure the supplier's tax invoice meets the content rules in our <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements guide</a>.</li>
</ul>

<h2>Change 4: corrections, voluntary disclosures and audits</h2>
<p>The Tax Procedures Law amendments change how you fix mistakes. According to published summaries:</p>
<ul>
<li><strong>Voluntary disclosures</strong> are no longer required for errors with no tax impact or minor errors. These can be corrected in a later return, and the FTA is expected to specify which cases still need a disclosure.</li>
<li><strong>Refund requests</strong> for credit balances must be filed within five years of the end of the relevant tax period, with shorter windows for credits that arise late in that period from an FTA decision.</li>
<li><strong>Audit periods:</strong> the default five-year period for FTA audits and assessments stays, but if you file a refund claim in the fifth year, the FTA gets up to two more years to audit it.</li>
<li><strong>Set-off:</strong> the FTA's power to offset credits against liabilities is limited to five years from the end of the relevant tax period.</li>
</ul>
<p>If you file returns yourself, read our <a href="/blog/uae-vat-return-filing">UAE VAT return filing guide</a> alongside the FTA's updated user guides.</p>

<h2>Summary table of the UAE VAT changes 2026</h2>
<table>
<thead><tr><th>Area</th><th>Before 2026</th><th>From 1 January 2026</th></tr></thead>
<tbody>
<tr><td>Reverse charge</td><td>Self-invoice expected</td><td>No self-invoice required; keep supporting documents</td></tr>
<tr><td>Excess input tax</td><td>Could be carried forward without a clear end date</td><td>Five-year limit from the end of the tax period</td></tr>
<tr><td>Old credits</td><td>-</td><td>Transitional window to claim, ending one year after 1 January 2026</td></tr>
<tr><td>Input tax recovery</td><td>Standard conditions</td><td>Can be denied if linked to evasion you knew or should have known about</td></tr>
<tr><td>Minor errors</td><td>Voluntary disclosure often needed</td><td>Can be corrected in a later return, subject to FTA rules</td></tr>
<tr><td>VAT rate</td><td>5 percent</td><td>5 percent (unchanged)</td></tr>
</tbody>
</table>

<h2>What did not change</h2>
<p>The UAE VAT changes 2026 are procedural, and the core of the system is the same. The standard rate is still 5 percent. The registration thresholds are unchanged at AED 375,000 of taxable supplies for mandatory registration and AED 187,500 for voluntary registration. The content rules for full and simplified tax invoices are the same, and so are the return periods. Corporate tax is a separate regime; freelancers can read our guide to <a href="/blog/uae-corporate-tax-freelancers">UAE corporate tax for freelancers</a>.</p>
<p>The UAE's e-invoicing program is also separate. It is expected to phase in from 2027 using accredited service providers, and our guide to <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing in 2027</a> covers the timeline. Clean supplier data and accurate invoices now will make that move easier.</p>

<h2>How the changes affect your own invoices</h2>
<p>None of the amendments changes what a valid tax invoice looks like, but several of them make the quality of invoices more important than before. If you sell to other VAT-registered businesses, your customers now carry more risk when they recover input tax. A customer whose claim is questioned will look first at the invoice you issued, so expect more of them to check your details before paying.</p>
<p>Make sure every tax invoice you issue includes:</p>
<ul>
<li>The words "Tax Invoice" where a full tax invoice is required, as the FTA rules expect.</li>
<li>Your legal name, address and TRN, and the customer's TRN for business customers.</li>
<li>A sequential invoice number and the date of issue and supply.</li>
<li>A clear description, quantity, unit price, the 5 percent rate and the VAT amount in AED.</li>
</ul>
<p>Our full checklist is in the <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements guide</a>. A generic PDF tool may use a different document heading from the one the FTA expects, so check the heading and fields before you send anything to a VAT-registered customer.</p>
<p>On the buying side, the removal of self-invoicing does not remove the need for evidence. Keep the foreign supplier's invoice, the contract or order, and proof of payment in one place for each reverse charge purchase. If a supplier's invoice is missing or poor, ask for a corrected copy rather than relying on your own internal document. Our guide to <a href="/blog/how-to-correct-an-invoice">correcting an invoice</a> explains what a proper correction looks like.</p>
<p>Finally, think about timing. With a five-year clock now running on every excess credit, a business that habitually carries credits forward should diarise the expiry date of each tax period's balance. A simple spreadsheet with the period end, the credit amount and the five-year date is enough for most small businesses. Review it every quarter when you file your return.</p>

<h2>Action list for the UAE VAT changes 2026</h2>
<ol>
<li><strong>Pull your VAT credit history.</strong> Find any excess input tax carried forward from 2021 or earlier and decide whether to claim a refund before the transitional deadline.</li>
<li><strong>Stop routine self-invoices</strong> for reverse charge purchases, but keep the supplier invoice, contract and payment proof together.</li>
<li><strong>Add supplier verification</strong> to onboarding: TRN check, trade licence and a named contact.</li>
<li><strong>Review your correction process</strong> with your tax agent under the new voluntary disclosure rules.</li>
<li><strong>Tidy your own invoices</strong> so customers can recover their input tax without questions.</li>
</ol>

<h2>Conclusion</h2>
<p>The UAE VAT changes 2026 reduce paperwork but add firm time limits and more responsibility for checking suppliers. The most urgent job is reviewing old credit balances before the transitional window closes at the end of 2026. This article is general information, not tax advice; check the Ministry of Finance and FTA publications and speak to a registered tax agent about your own position. When you need a clean tax invoice with your TRN and 5 percent VAT, use our <a href="/invoice-generator/uae">UAE invoice generator</a>, which builds a PDF in your browser.</p>
`,
  },
  {
    slug: "income-tax-act-2025-india",
    title: "Income Tax Act 2025: What Changes for Small Businesses",
    description:
      "The Income Tax Act 2025 replaced the 1961 Act on 1 April 2026. See the new tax year, renumbered sections like 44ADA and 194J, and what freelancers must update.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "section-44ad",
      "section-44ada-freelancers",
      "tds-on-professional-fees",
      "gst-invoice-guide",
    ],
    faqs: [
      {
        q: "When did the Income Tax Act 2025 come into force?",
        a: "The Income-tax Act, 2025 came into force on 1 April 2026. Parliament passed it in August 2025 and it received presidential assent on 21 August 2025 as Act No. 30 of 2025. It replaces the Income-tax Act, 1961 for income earned from 1 April 2026. Income earned up to 31 March 2026, including returns filed during 2026 for that year, generally stays under the old Act through saving provisions.",
      },
      {
        q: "What is the tax year under the new Income Tax Act?",
        a: "The new Act replaces the old pair of previous year and assessment year with a single tax year. The tax year is the financial year in which you earn the income, running from 1 April to 31 March. So income earned between 1 April 2026 and 31 March 2027 belongs to tax year 2026-27. Under the old Act, the same income would have been previous year 2026-27 and assessment year 2027-28.",
      },
      {
        q: "Have income tax rates changed under the Income Tax Act 2025?",
        a: "The new Act was mainly a rewrite to simplify language and structure, not a rate overhaul. Rates and slabs continue to be set through the Act and annual Finance Acts, and the new tax regime remains the default for individuals. Check the slabs announced in the latest Union Budget for the tax year you are filing, because annual Finance Acts can change rates independently of the 2025 rewrite.",
      },
      {
        q: "What replaced section 44ADA in the new Income Tax Act?",
        a: "Presumptive taxation for professionals now sits in section 58 of the Income-tax Act, 2025, which also absorbs the old sections 44AD and 44AE in a single table. For professionals, commentaries report the same core rule: 50 percent of gross receipts treated as income, with a limit of 50 lakh rupees, or 75 lakh rupees where cash receipts are no more than 5 percent of the total.",
      },
      {
        q: "What replaced section 194J for TDS?",
        a: "Most non-salary TDS provisions, including section 194J for professional and technical fees, are now in section 393 of the new Act, which uses a table of payment types, rates and thresholds. Commentaries report that the professional fees rate stays at 10 percent and the technical services rate at 2 percent, with a 50,000 rupee annual threshold. Payments credited or paid before 1 April 2026 stay under section 194J.",
      },
      {
        q: "Is Form 26AS still used under the new Act?",
        a: "Under the Income-tax Rules, 2026, the annual tax credit statement previously known as Form 26AS has been renumbered as Form 168, and the non-salary TDS certificate Form 16A as Form 131, according to the department's notified forms and commentary. For returns covering income up to 31 March 2026, you will still see the old form names. Check the e-filing portal for the current labels.",
      },
      {
        q: "Does the Income Tax Act 2025 change GST?",
        a: "No. GST is governed by separate laws, mainly the CGST Act, 2017 and the state and integrated GST Acts. The Income Tax Act 2025 deals only with income tax. Your GST registration, GST rates, invoice rules and returns are unaffected by the rewrite, although GST rates themselves were changed separately in 2025 through the GST Council's rate rationalisation.",
      },
      {
        q: "Do freelancers need to do anything because of the new Income Tax Act?",
        a: "Mostly, update references and habits. Contracts, invoices and notes that cite old sections such as 194J or 44ADA should refer to the new sections or say formerly. Check your tax software and accountant are using the new forms for tax year 2026-27. Keep an eye on your Form 168 or annual information statement for TDS credits, and pay advance tax under the new provisions as usual.",
      },
      {
        q: "Are old income tax notices and cases still valid after 1 April 2026?",
        a: "Yes. The new Act includes saving provisions so that assessments, appeals, notices and other proceedings relating to years before the new Act continue under the old law where specified. If you receive a notice for an older year, it will usually cite the 1961 Act. Ask a chartered accountant if you are unsure which law applies to a particular notice or year.",
      },
    ],
    content: `
<p><strong>The Income Tax Act 2025 replaced India's Income-tax Act, 1961 on 1 April 2026.</strong> It keeps most tax rules but rewrites them in simpler language, cuts the number of sections to 536, and introduces a single "tax year" in place of previous year and assessment year. Familiar sections are renumbered: 44ADA moves to section 58 and 194J to section 393.</p>

<p>For small businesses and freelancers the rewrite is less dramatic than the headlines suggested. Your income is still taxed in much the same way. What changes is the vocabulary: section numbers, form names and the way the year is described. If your contracts, invoices, software and habits still talk in 1961 Act language, now is the time to update them. This guide explains what the Income Tax Act 2025 is, how the tax year works, which sections you are most likely to meet under new numbers, and a checklist for the first full year.</p>

<h2>What is the Income Tax Act 2025?</h2>
<p>The Income-tax Act, 2025 (the official spelling uses a hyphen and comma) is a complete rewrite of India's income tax law. Key facts:</p>
<ul>
<li>Passed by Parliament in August 2025 and given presidential assent on 21 August 2025 as Act No. 30 of 2025.</li>
<li>Came into force on 1 April 2026, replacing the Income-tax Act, 1961, which had grown to more than 800 sections over six decades of amendments.</li>
<li>Contains 536 sections in 23 chapters with 16 schedules. Many conditions that used to be buried in provisos and explanations now appear in tables.</li>
<li>Supported by the Income-tax Rules, 2026, notified by the CBDT in March 2026 and also effective from 1 April 2026, which replace the 1962 Rules and renumber most forms.</li>
</ul>
<p>The government's stated aim was simplification, not a new tax policy. Rates, slabs and most deductions continue, though annual Finance Acts can still change them. The new tax regime remains the default for individuals.</p>

<h2>The tax year concept explained</h2>
<p>The change most people notice first is the tax year. Under the 1961 Act you earned income in a "previous year" and were assessed in the following "assessment year". That caused endless confusion: income earned in 2025-26 was filed as AY 2026-27. The Income Tax Act 2025 replaces both terms with a single tax year, which is simply the financial year in which you earn the income.</p>
<table>
<thead><tr><th>Income earned between</th><th>Old Act description</th><th>New Act description</th><th>Which law applies</th></tr></thead>
<tbody>
<tr><td>1 April 2025 to 31 March 2026</td><td>FY 2025-26, AY 2026-27</td><td>Not applicable</td><td>Income-tax Act, 1961</td></tr>
<tr><td>1 April 2026 to 31 March 2027</td><td>Would have been FY 2026-27, AY 2027-28</td><td>Tax year 2026-27</td><td>Income Tax Act 2025</td></tr>
<tr><td>1 April 2027 to 31 March 2028</td><td>-</td><td>Tax year 2027-28</td><td>Income Tax Act 2025</td></tr>
</tbody>
</table>
<p>This creates an overlap during 2026. The return you file in mid-2026 covers income from 2025-26, so it is filed under the old Act with the old form names. Your first return under the new Act will cover tax year 2026-27 and is due in 2027. Advance tax instalments you pay during 2026-27 relate to the new Act.</p>

<h2>Section renumbering: the ones small businesses use</h2>
<p>Most professionals do not need the full mapping, only the dozen or so sections they actually meet. The table below shows commonly cited mappings from the 1961 Act to the Income Tax Act 2025, based on official materials and professional commentary. Always confirm against the Act text, because some provisions were merged or split.</p>
<table>
<thead><tr><th>Topic</th><th>1961 Act</th><th>Income-tax Act, 2025</th></tr></thead>
<tbody>
<tr><td>Presumptive tax for professionals</td><td>Section 44ADA</td><td>Section 58 (merged with 44AD and 44AE)</td></tr>
<tr><td>Presumptive tax for small businesses</td><td>Section 44AD</td><td>Section 58</td></tr>
<tr><td>Tax audit</td><td>Section 44AB</td><td>Section 63</td></tr>
<tr><td>TDS on professional and technical fees</td><td>Section 194J</td><td>Section 393(1), table entry for professional or technical services</td></tr>
<tr><td>TDS on contractors, rent, commission</td><td>Sections 194C, 194I, 194H</td><td>Section 393 (single table)</td></tr>
<tr><td>Rebate for lower incomes</td><td>Section 87A</td><td>Section 156</td></tr>
<tr><td>Annual tax credit statement</td><td>Form 26AS</td><td>Form 168 (under the 2026 Rules)</td></tr>
<tr><td>Non-salary TDS certificate</td><td>Form 16A</td><td>Form 131 (under the 2026 Rules)</td></tr>
</tbody>
</table>
<p>Two of these matter most for freelancers, and each has its own guide: <a href="/blog/section-44ada-freelancers">presumptive taxation under 44ADA and section 58</a>, and <a href="/blog/tds-on-professional-fees">TDS on professional fees under 194J and section 393</a>.</p>

<h2>What changes for freelancers and professionals</h2>
<h3>Presumptive taxation</h3>
<p>Section 58 combines the old presumptive schemes in one table. For professionals, commentaries report the same core numbers as before: 50 percent of gross receipts is treated as income, with a limit of 50 lakh rupees, rising to 75 lakh rupees when cash receipts are no more than 5 percent of the total. One wording change has drawn attention. Section 58(4) says no loss, allowance or deduction under the Act is allowed against the presumptive income, which some advisers read as wider than the old 44ADA wording. If you claim deductions, ask your accountant how this affects you.</p>
<h3>TDS on your fees</h3>
<p>Clients who deduct TDS on your fees now do so under section 393. Commentaries report the professional fees rate is still 10 percent with a 50,000 rupee annual threshold, and technical services still 2 percent. The timing rule decides which law applies: if the client credited or paid your fee before 1 April 2026, section 194J applies; from 1 April 2026 the new Act applies.</p>
<h3>Forms and statements</h3>
<p>Your annual statement of TDS credits is now Form 168 (previously Form 26AS), and the certificate your client gives you is Form 131 (previously Form 16A), according to the notified 2026 Rules and commentary. The e-filing portal labels may still show familiar names during the changeover, so look for both.</p>

<h2>What does not change</h2>
<p>It is easy to over-read the rewrite. These things are broadly the same:</p>
<ul>
<li><strong>GST</strong> is a separate law and is not affected. Your <a href="/blog/gst-registration-india">GST registration</a>, <a href="/blog/gst-invoice-guide">GST invoice rules</a> and returns carry on as before.</li>
<li><strong>The financial year</strong> still runs from 1 April to 31 March.</li>
<li><strong>Advance tax</strong> is still payable during the year in instalments if your tax liability crosses the threshold, with a simpler single-instalment option for presumptive taxpayers under the old rules. Confirm the due dates under the new Act.</li>
<li><strong>PAN, Aadhaar linking and the e-filing portal</strong> remain the main identity and filing tools.</li>
<li><strong>Record keeping</strong> obligations continue. Keep invoices, bank statements and TDS certificates for each tax year.</li>
</ul>

<h2>Worked example: one freelancer, two laws in one calendar year</h2>
<p>Priya is a Bengaluru-based UX designer who opts for presumptive taxation. In 2026 she deals with both laws:</p>
<ol>
<li><strong>March 2026:</strong> she invoices a client 1,20,000 rupees plus GST. The client credits the fee in its books on 25 March 2026 and deducts TDS of 12,000 rupees under section 194J of the old Act.</li>
<li><strong>April 2026:</strong> she invoices the same client 1,50,000 rupees plus GST. The client credits it on 10 April 2026 and deducts TDS of 15,000 rupees under section 393 of the new Act.</li>
<li><strong>July 2026:</strong> she files her return for income earned in 2025-26 (AY 2026-27) under the old Act, using 44ADA. The March invoice and its 12,000 rupee TDS belong here.</li>
<li><strong>2027:</strong> she will file her first return under the Income Tax Act 2025 for tax year 2026-27, using section 58. The April invoice and its 15,000 rupee TDS belong there.</li>
</ol>
<p>The lesson: the date the client credits or pays decides which law and which year a payment belongs to, so date your invoices accurately and keep clear records of when payments arrive. A <a href="/blog/invoice-numbering-system">consistent invoice numbering system</a> makes this much easier at year end.</p>

<h2>What the rewrite means for invoices and contracts</h2>
<p>Invoices themselves are not governed by the Income Tax Act 2025; GST law decides what a tax invoice must contain. But many invoices, contracts and statements of work quote income tax sections in passing, and those references now age quickly.</p>
<h3>Invoice notes</h3>
<p>The most common reference is a TDS note, such as "TDS under 194J at 10 percent". For services credited or paid from 1 April 2026, change it to section 393, adding "formerly 194J" for a year or two so the client's accounts team recognises it. Keep your PAN on the invoice so clients can deduct against the right number; our guide to <a href="/blog/tax-id-on-invoice">tax IDs on invoices</a> explains which numbers belong where.</p>
<h3>Contracts and engagement letters</h3>
<p>Payment clauses often say the client "may deduct tax at source under section 194J". A safer wording is "may deduct tax at source as required under the Income-tax Act, 2025 or any law that replaces it". The same applies to clauses about tax residency, withholding on foreign payments and tax indemnities. For international work, our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> covers how other countries handle the same issue.</p>
<h3>Books and audit</h3>
<p>The requirement to keep books of account and the tax audit rules have moved to new section numbers (the audit provision is reported as section 63), but the logic is familiar. If you use presumptive taxation and declare at least the deemed income, you generally avoid detailed books and audit. If you leave the scheme, or your turnover crosses the audit thresholds, the regular rules apply. Your accountant will now quote the new numbers in their reports, so it helps to recognise them.</p>
<h3>Software and record keeping</h3>
<p>Accounting software used by small firms has generally been updated for the new Act and form names, but older versions may still label reports with 1961 Act sections. Check that your TDS and tax reports are tagged to the correct law based on the date of credit or payment, especially for transactions around 31 March 2026. Keep records for the period your accountant recommends; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> gives a starting point.</p>

<h2>Checklist for your first tax year under the new Act</h2>
<ol>
<li><strong>Update templates.</strong> Replace references such as "TDS under 194J" in invoice notes with "TDS under section 393 (formerly 194J)".</li>
<li><strong>Update contracts.</strong> Clauses that cite old sections should refer to the Income Tax Act 2025 or say "or its successor provision".</li>
<li><strong>Check your accounting software</strong> and your accountant's tools for tax year 2026-27 support and new form names.</li>
<li><strong>Review presumptive eligibility</strong> under section 58, especially the cash receipts test and the new deductions wording.</li>
<li><strong>Reconcile TDS quarterly</strong> against Form 168 so missing credits are fixed while clients still have time to correct their returns.</li>
<li><strong>Pay advance tax</strong> on time under the new provisions.</li>
<li><strong>Keep both sets of records</strong> clearly separated: up to 31 March 2026 and from 1 April 2026.</li>
</ol>

<h2>Conclusion</h2>
<p>The Income Tax Act 2025 is mostly a new map of familiar ground. Learn the tax year concept, note the new numbers for the sections you use, and update your paperwork. This article is general information based on official announcements and professional commentary at the time of writing, not tax advice. Check incometaxindia.gov.in and talk to a chartered accountant about your own situation. When you need a clear invoice with GST and a notes line for TDS, our free <a href="/invoice-generator">invoice generator</a> creates a PDF in your browser, and our <a href="/blog/category/tax-compliance">tax compliance guides</a> cover the details.</p>
`,
  },
  {
    slug: "section-44ada-freelancers",
    title: "Section 44ADA: Presumptive Tax for Professionals (2026)",
    description:
      "Section 44ADA explained for freelancers: who qualifies, the 50 and 75 lakh limits, the 50% rule, the move to section 58 from April 2026, and a worked example.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "section-44ad",
      "income-tax-act-2025-india",
      "tds-on-professional-fees",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "What is section 44ADA of the Income Tax Act?",
        a: "Section 44ADA of the Income-tax Act, 1961 is a presumptive taxation scheme for resident professionals. Instead of calculating actual profit, an eligible professional can declare 50 percent of gross receipts as taxable income, with no need to keep detailed books of account or get a tax audit. From tax year 2026-27, the scheme continues under section 58 of the Income-tax Act, 2025.",
      },
      {
        q: "What is the 44ADA limit for 2026?",
        a: "For income earned up to 31 March 2026, the limit under 44ADA is 50 lakh rupees of gross receipts, or 75 lakh rupees if cash receipts are no more than 5 percent of total receipts. Commentaries on section 58 of the new Act, which applies from 1 April 2026, report the same 50 lakh and 75 lakh limits with the same 5 percent cash test. Confirm against the Act text.",
      },
      {
        q: "Can freelancers use 44ADA?",
        a: "Freelancers can use 44ADA if their work falls within the specified professions, such as legal, medical, engineering, architecture, accountancy, technical consultancy, interior decoration, film artists, company secretaries and information technology. Many software developers and IT consultants rely on it. Writers, marketers and some designers may fall outside the list and use the business scheme instead, so check with a chartered accountant.",
      },
      {
        q: "Is a tax audit required under 44ADA?",
        a: "No tax audit is needed if you declare at least 50 percent of gross receipts as income and stay within the limit. If you declare less than 50 percent and your total income exceeds the basic exemption limit, you must keep books of account and get them audited. Above the receipts limit, the presumptive scheme does not apply and normal audit thresholds are considered.",
      },
      {
        q: "Which ITR form is used for 44ADA?",
        a: "For returns under the 1961 Act, individuals using 44ADA usually file ITR-4 (Sugam) if their total income and other conditions fit, or ITR-3 otherwise, for example where they have capital gains beyond the ITR-4 limits or are directors. For tax year 2026-27 under the new Act, the returns forms are renumbered under the Income-tax Rules, 2026, so check the e-filing portal for the correct form.",
      },
      {
        q: "Can I claim expenses under 44ADA?",
        a: "No. The 50 percent deemed income already allows for your expenses, so you cannot separately claim rent, equipment, internet, travel or depreciation against professional income. Under the new section 58(4), the restriction is worded more widely, covering any loss, allowance or deduction against the presumptive income. If your real expenses exceed half your receipts, the regular method with books may give a lower tax bill.",
      },
      {
        q: "Does 44ADA apply to foreign clients?",
        a: "Yes. 44ADA looks at total gross receipts from your profession, wherever the client is based, as long as you are a resident of India. Payments from overseas clients through bank transfer or platforms count as non-cash receipts, which helps you meet the 5 percent cash test. Convert foreign currency receipts to rupees at the applicable rate and keep your bank records.",
      },
      {
        q: "Does 44ADA affect GST?",
        a: "No. 44ADA is an income tax scheme and has no effect on GST. If your aggregate turnover crosses the GST registration threshold, generally 20 lakh rupees for service providers in most states, you must register and charge GST regardless of whether you use 44ADA. Exports of services may be zero-rated under GST rules if conditions are met.",
      },
      {
        q: "How is advance tax paid under 44ADA?",
        a: "Under the 1961 Act, professionals using 44ADA can pay their entire advance tax in a single instalment by 15 March of the financial year, instead of the four quarterly instalments others pay. Missing it leads to interest. Check the advance tax provisions of the new Act for tax year 2026-27, and pay on time to avoid interest.",
      },
    ],
    content: `
<p><strong>Section 44ADA lets resident professionals in India declare 50 percent of their gross receipts as taxable income, without detailed books or a tax audit.</strong> The limit is 50 lakh rupees of receipts, or 75 lakh rupees if cash receipts are no more than 5 percent. From 1 April 2026 the scheme continues under section 58 of the Income-tax Act, 2025.</p>

<p>For freelancers, this scheme is one of the most useful provisions in Indian tax law. It turns a complicated profit calculation into one line, cuts compliance costs and, for most people with modest expenses, lowers the tax bill. This guide explains who qualifies, the limits, how the scheme moved into the new Act, a worked example with numbers, and the situations where you should not use it.</p>

<h2>What is section 44ADA?</h2>
<p>Section 44ADA of the Income-tax Act, 1961 is a presumptive taxation scheme for professionals. "Presumptive" means the law presumes your profit is a fixed share of your receipts. Under this scheme that share is 50 percent. You can declare a higher figure if your actual profit is higher, but not a lower one unless you leave the scheme.</p>
<p>The benefits are simple:</p>
<ul>
<li>No requirement to maintain detailed books of account for the professional income.</li>
<li>No tax audit, as long as you declare at least 50 percent and stay within the limit.</li>
<li>A simpler return in most cases.</li>
<li>Historically, a single advance tax payment by 15 March instead of four instalments.</li>
</ul>

<h2>44ADA under the Income-tax Act, 2025: section 58</h2>
<p>From tax year 2026-27, which covers income earned from 1 April 2026 to 31 March 2027, the old sections 44AD, 44ADA and 44AE are merged into section 58 of the new Act. Section 58 uses a table, with a separate row for specified professions. The 44ADA rules continue to apply to income earned up to 31 March 2026, which you file during 2026.</p>
<table>
<thead><tr><th>Feature</th><th>Section 44ADA (1961 Act)</th><th>Section 58 (2025 Act), professions row</th></tr></thead>
<tbody>
<tr><td>Applies to income earned</td><td>Up to 31 March 2026</td><td>From 1 April 2026 (tax year 2026-27 onward)</td></tr>
<tr><td>Deemed income</td><td>50 percent of gross receipts</td><td>50 percent of gross receipts (reported)</td></tr>
<tr><td>Receipts limit</td><td>50 lakh rupees</td><td>50 lakh rupees (reported)</td></tr>
<tr><td>Higher limit</td><td>75 lakh rupees if cash receipts are 5 percent or less</td><td>75 lakh rupees if cash receipts are 5 percent or less (reported)</td></tr>
<tr><td>Who can use it</td><td>Resident individuals and partnership firms, not LLPs</td><td>Resident individuals and partnership firms, not LLPs (reported)</td></tr>
<tr><td>Deductions against presumptive income</td><td>Sections 30 to 38 deemed allowed</td><td>Section 58(4): no loss, allowance or deduction allowed against it</td></tr>
</tbody>
</table>
<p>The "reported" labels reflect that these details come from professional commentary on the enacted Act; check the official text on incometaxindia.gov.in before relying on them. The section 58(4) wording is the one real change advisers have flagged. It is wider than the old wording, and the practical effect on items such as carried-forward losses is something to discuss with your accountant. For the wider rewrite, see our guide to the <a href="/blog/income-tax-act-2025-india">Income Tax Act 2025</a>.</p>

<h2>Who can use 44ADA</h2>
<p>You need to tick three boxes.</p>
<h3>1. You are a resident</h3>
<p>The scheme is for residents of India. Non-residents cannot use it.</p>
<h3>2. You are an eligible person</h3>
<p>Resident individuals and partnership firms can use it. Limited liability partnerships cannot. Companies are taxed under their own rules.</p>
<h3>3. Your work is a specified profession</h3>
<p>The scheme covers professions listed for books of account purposes, including:</p>
<ul>
<li>Legal, medical, engineering and architectural work</li>
<li>Accountancy and technical consultancy</li>
<li>Interior decoration</li>
<li>Film artists, such as actors, directors, editors and cameramen</li>
<li>Company secretaries</li>
<li>Information technology</li>
<li>Other professions notified by the CBDT</li>
</ul>
<p>Software developers and IT consultants commonly use it. Content writers, digital marketers, translators and some designers are not clearly on the list and often use the business scheme (44AD, now also in section 58) or regular books instead. Classification is a judgement call, so get a chartered accountant's view if your work sits on the boundary.</p>

<h2>The cash receipts test</h2>
<p>The 75 lakh rupee limit only applies if cash receipts are no more than 5 percent of total gross receipts. Cheques or bank drafts that are not account payee count as cash for this test. For most freelancers paid by bank transfer, UPI or international platforms this is easy, but it pays to check.</p>
<table>
<thead><tr><th>Gross receipts</th><th>Cash receipts</th><th>Cash share</th><th>Eligible?</th></tr></thead>
<tbody>
<tr><td>45 lakh</td><td>6 lakh</td><td>13.3 percent</td><td>Yes, under the 50 lakh limit</td></tr>
<tr><td>70 lakh</td><td>2 lakh</td><td>2.9 percent</td><td>Yes, under the 75 lakh limit</td></tr>
<tr><td>70 lakh</td><td>5 lakh</td><td>7.1 percent</td><td>No, above 50 lakh and cash above 5 percent</td></tr>
<tr><td>80 lakh</td><td>0</td><td>0 percent</td><td>No, above 75 lakh</td></tr>
</tbody>
</table>
<p>Ask clients to pay electronically, and put your bank details clearly on every invoice. Our guide to <a href="/blog/bank-details-on-invoice">adding bank details to an invoice</a> shows what to include.</p>

<h2>Worked example: a software consultant</h2>
<p>Arjun is a resident freelance software consultant. In the year he receives 40 lakh rupees in fees, all by bank transfer from Indian and overseas clients. His actual expenses (laptop, software, co-working, internet) are about 6 lakh rupees. His Indian clients deducted TDS of 2,50,000 rupees.</p>
<ol>
<li><strong>Presumptive income:</strong> 50 percent of 40 lakh rupees = 20 lakh rupees.</li>
<li><strong>Tax under the new regime:</strong> using the slabs in force for 2025-26 (nil up to 4 lakh, 5 percent from 4 to 8 lakh, 10 percent from 8 to 12 lakh, 15 percent from 12 to 16 lakh, 20 percent from 16 to 20 lakh), tax is 0 + 20,000 + 40,000 + 60,000 + 80,000 = 2,00,000 rupees.</li>
<li><strong>Health and education cess</strong> at 4 percent adds 8,000 rupees, for a total of 2,08,000 rupees.</li>
<li><strong>Less TDS credit:</strong> 2,08,000 minus 2,50,000 leaves a refund of 42,000 rupees, once TDS shows in his tax credit statement.</li>
</ol>
<p>If Arjun used regular books instead, his profit would be 40 lakh minus 6 lakh = 34 lakh rupees, and his tax would be far higher. With low expenses, the presumptive route is the clear winner. The comparison flips only when real expenses exceed half of receipts. Slabs can change each year through the Finance Act, so recheck the rates for the year you are filing.</p>

<h2>When 44ADA is not the right choice</h2>
<ul>
<li><strong>High expenses.</strong> If your genuine costs are more than half your receipts, for example because you pay subcontractors, regular books may give a lower tax bill. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> helps you estimate.</li>
<li><strong>Receipts above the limit.</strong> Above 50 or 75 lakh rupees the scheme is not available, and tax audit rules (section 44AB, now section 63) come into view.</li>
<li><strong>Losses you want to use.</strong> The section 58(4) wording means you should check with an adviser before relying on presumptive income to absorb losses or deductions.</li>
<li><strong>Your work is not a specified profession.</strong> Use the right scheme rather than forcing a fit.</li>
</ul>
<p>If you declare less than 50 percent and your total income exceeds the basic exemption limit, you must keep books and get them audited.</p>
<p>A quick test helps. Add up last year's genuine professional expenses and divide by gross receipts. If the result is well below 50 percent, presumptive taxation almost always costs less tax and less time. If it is close to or above 50 percent, ask your accountant to run both methods before you file, because the cheaper option can change from year to year as your costs and client mix change.</p>

<h2>Invoices, GST and TDS under 44ADA</h2>
<p>Presumptive taxation reduces bookkeeping, but it does not remove the need for proper invoices. Your gross receipts figure comes from your invoices and bank statements, and clients need a valid invoice to deduct TDS and, if you are GST registered, to claim input tax credit.</p>
<ul>
<li><strong>GST is separate.</strong> Presumptive taxation has no effect on GST registration. Service providers generally need to register once aggregate turnover crosses 20 lakh rupees in most states. See our <a href="/blog/gst-registration-india">GST registration guide</a>.</li>
<li><strong>Gross receipts exclude GST.</strong> Professional commentary generally treats GST collected as not part of your gross receipts for presumptive purposes. Confirm with your accountant.</li>
<li><strong>TDS still applies.</strong> Indian business clients deduct TDS on your fees, typically 10 percent. Our guide to <a href="/blog/tds-on-professional-fees">TDS on professional fees</a> shows how to show it on an invoice.</li>
<li><strong>Foreign clients</strong> count toward gross receipts. See our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</li>
</ul>
<p>Keep invoices numbered in order, dated accurately and matched to bank receipts. A clean <a href="/blog/freelancer-invoice-guide">freelancer invoicing routine</a> also makes your year-end reconciliation much faster.</p>

<h2>Record keeping on the presumptive scheme</h2>
<p>A common misunderstanding is that presumptive taxation means no records at all. It removes the need for detailed books of account for your professional income, but you still need evidence of what you received, who paid it and how. If the tax department questions your gross receipts or your cash share, your invoices and bank statements are your defence.</p>
<p>A sensible minimum for a freelancer on the scheme:</p>
<ul>
<li><strong>Every invoice</strong>, numbered in sequence with no gaps. A tool such as our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a consistent format.</li>
<li><strong>A simple receipts register</strong>: invoice number, client, date paid, amount received, payment method and TDS deducted.</li>
<li><strong>Bank statements</strong> for the account where fees arrive, so the cash receipts test is easy to prove.</li>
<li><strong>TDS certificates</strong> from each client and a quarterly check against your tax credit statement.</li>
<li><strong>Foreign currency records</strong> showing the rupee value credited for overseas payments.</li>
</ul>
<h3>Moving between presumptive and regular methods</h3>
<p>Some freelancers switch methods as their business changes, for example after hiring subcontractors. Moving to regular books is usually straightforward in practice, but the new Act includes rules on opting out of the presumptive scheme, and commentaries describe consequences for some taxpayers who leave and later want to return. Before you switch, ask your accountant how the section 58 rules apply to your profession and whether any waiting period affects you. Whatever you decide, keep using the same invoice numbering and receipts register so your records stay consistent across years.</p>

<h2>How to opt in and file</h2>
<ol>
<li>Confirm your profession is on the specified list and your receipts are within the limit.</li>
<li>Check the cash receipts share if you are between 50 and 75 lakh rupees.</li>
<li>Reconcile invoices with bank statements and your tax credit statement for TDS.</li>
<li>Pay advance tax on time. Under the old Act, presumptive taxpayers could pay it in a single instalment by 15 March; confirm the rule under the new Act for tax year 2026-27.</li>
<li>File the right return. Under the old Act this is usually ITR-4 or ITR-3; for tax year 2026-27, use the renumbered forms on the e-filing portal.</li>
</ol>

<h2>Conclusion</h2>
<p>44ADA, now continued as section 58, is a simple and often cheaper way for freelance professionals to handle income tax, as long as your work qualifies, you stay within the limits and your real expenses are modest. This is general information, not tax advice; check the official Act and talk to a chartered accountant before you choose. Whichever method you use, your invoices are the foundation, so create clear, numbered invoices with our free <a href="/invoice-generator">invoice generator</a> and browse more <a href="/blog/category/freelancing">freelancing guides</a>.</p>
`,
  },
  {
    slug: "tds-on-professional-fees",
    title: "TDS on Professional Fees: 194J Rate and Threshold 2026",
    description:
      "TDS on professional fees in India: 10% and 2% rates, the 50,000 rupee threshold, the move from section 194J to 393, and how freelancers show TDS on invoices.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "tds-rate-chart",
      "msme-45-days-payment-rule",
      "withholding-tax-on-invoices",
      "income-tax-act-2025-india",
      "section-44ada-freelancers",
    ],
    faqs: [
      {
        q: "What is the TDS rate on professional fees?",
        a: "The TDS rate on fees for professional services is 10 percent, both under section 194J of the old Act and, according to commentary, under section 393 of the Income-tax Act, 2025 from 1 April 2026. Fees for technical services, call centre payments and royalty for films are taxed at 2 percent. If the payee does not provide a valid PAN, a higher rate of 20 percent generally applies.",
      },
      {
        q: "What is the threshold for TDS on professional fees in 2026?",
        a: "TDS applies when total professional fees paid or credited to one person in a financial year exceed 50,000 rupees. The same 50,000 rupee threshold applies separately to fees for technical services. The threshold was raised from 30,000 rupees from 1 April 2025, and commentaries report it continues under section 393. Director remuneration other than salary has no threshold.",
      },
      {
        q: "Is TDS deducted on GST in professional fees?",
        a: "Under a CBDT circular issued under the old Act, TDS is not deducted on the GST component if GST is shown separately on the invoice. So on a fee of 1,00,000 rupees plus 18,000 rupees GST, TDS is 10,000 rupees, not 11,800. Showing GST as a separate line on your invoice helps clients deduct correctly. Confirm the position under the new Act with your accountant.",
      },
      {
        q: "Who has to deduct TDS on professional fees?",
        a: "Businesses, companies, firms and other specified payers must deduct TDS when paying professional fees above the threshold. Individuals and Hindu undivided families are excluded if they were not required to get a tax audit in the preceding financial year. Under the old Act, some such individuals still had to deduct under a separate section for large payments, so check the current rules if you are paying professionals.",
      },
      {
        q: "How do I show TDS on my invoice?",
        a: "Invoice the full fee and GST as usual, then add a note showing the expected TDS and the net amount payable. For example: Fee 1,00,000, GST 18,000, invoice total 1,18,000, less TDS at 10 percent on the fee 10,000, net payable 1,08,000. Do not reduce the invoice total itself, because the client deducts TDS and deposits it with the government on your behalf.",
      },
      {
        q: "How do I check TDS deducted on my fees?",
        a: "Check your annual tax credit statement on the income tax e-filing portal. Under the old rules this was Form 26AS; under the Income-tax Rules, 2026 it is Form 168. Your annual information statement also shows TDS entries. Compare each entry with your invoices and the TDS certificates your clients issue, and ask clients to correct their TDS returns if an amount is missing or wrong.",
      },
      {
        q: "Can I get TDS refund as a freelancer?",
        a: "Yes. TDS is an advance payment of your income tax. When you file your return, total TDS credits are set against your actual tax liability. If TDS exceeds the tax due, for example because you use presumptive taxation and have modest income, the excess is refunded. The refund only works smoothly if the TDS appears correctly against your PAN in your tax credit statement.",
      },
      {
        q: "Do foreign clients deduct Indian TDS on my fees?",
        a: "Generally no. Indian TDS rules apply to payers who are subject to Indian tax obligations, so an overseas client paying an Indian freelancer from abroad does not normally deduct Indian TDS. The foreign client's own country may apply withholding tax under its laws, and a tax treaty may reduce it. Keep records of any foreign tax withheld, because you may be able to claim credit in India.",
      },
      {
        q: "What happens if a client deducts TDS but does not deposit it?",
        a: "If the client deducts TDS but does not deposit it or file its TDS return correctly, the credit will not appear in your tax credit statement and you may struggle to claim it. Ask the client for the challan details and their TDS certificate, and remind them to correct their return. Keep your invoices and payment records as evidence, and raise a grievance on the portal if needed.",
      },
    ],
    content: `
<p><strong>TDS on professional fees is 10 percent of the fee when a client pays a professional more than 50,000 rupees in a financial year.</strong> Technical services are at 2 percent. Until 31 March 2026 this was section 194J; from 1 April 2026 it is section 393 of the Income-tax Act, 2025. TDS is calculated on the fee before GST, and the client deposits it as credit against your tax.</p>

<p>If you are a freelancer or consultant in India, TDS on professional fees affects almost every invoice you send to a business client. Get it right and the deducted amount comes back to you as a tax credit or refund. Get it wrong and you chase clients for missing amounts and certificates. This guide covers rates, thresholds, the move from 194J to section 393, how to show TDS on your invoice, and how to check the credit in your tax statement.</p>

<h2>What is TDS on professional fees?</h2>
<p>TDS stands for tax deducted at source. When a business pays you for professional services, the law requires it to withhold part of the payment and deposit it with the government against your PAN. You receive the balance. The deducted amount is not lost; it is an advance payment of your income tax, credited when you file your return.</p>
<p>India's version is one example of withholding tax, which many countries use. Our general guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> compares how it works elsewhere.</p>

<h2>Section 194J becomes section 393</h2>
<p>Under the Income-tax Act, 1961, TDS on professional and technical fees sat in section 194J. The Income-tax Act, 2025, effective 1 April 2026, consolidates most non-salary TDS provisions into section 393, with a table listing each type of payment, its rate and threshold. Professional and technical fees now appear in that table under section 393(1).</p>
<p>The timing rule decides which law applies. According to commentary on the transition, if the client credited your fee in its books or paid it on or before 31 March 2026, section 194J applies. If the earlier of credit or payment happened on or after 1 April 2026, section 393 applies. For the full picture of the rewrite, see our guide to the <a href="/blog/income-tax-act-2025-india">Income Tax Act 2025</a>.</p>

<h2>TDS rates and thresholds for 2026</h2>
<p>The table below shows the main categories as reported by professional commentary on section 393. The rates carry over from 194J. Check the official Act text and the income tax department's TDS rate chart before relying on them.</p>
<table>
<thead><tr><th>Payment type</th><th>TDS rate</th><th>Annual threshold per payee</th></tr></thead>
<tbody>
<tr><td>Fees for professional services</td><td>10 percent</td><td>Above 50,000 rupees</td></tr>
<tr><td>Fees for technical services</td><td>2 percent</td><td>Above 50,000 rupees</td></tr>
<tr><td>Payments to call centres</td><td>2 percent</td><td>Above 50,000 rupees</td></tr>
<tr><td>Royalty for sale, distribution or exhibition of films</td><td>2 percent</td><td>Above 50,000 rupees</td></tr>
<tr><td>Other royalty</td><td>10 percent</td><td>Above 50,000 rupees</td></tr>
<tr><td>Director remuneration other than salary</td><td>10 percent</td><td>No threshold</td></tr>
<tr><td>Any of the above where PAN is not provided</td><td>20 percent</td><td>As above</td></tr>
</tbody>
</table>
<p>A few points to note:</p>
<ul>
<li>The 50,000 rupee threshold applies per payee, per financial year, and separately for professional and technical fees. It was raised from 30,000 rupees from 1 April 2025.</li>
<li>Once total fees to you cross the threshold in the year, TDS applies to the whole amount, including earlier payments that year, in the usual practice under 194J.</li>
<li>The distinction between "professional" and "technical" services matters: 10 percent versus 2 percent. Software development and consulting are often treated as professional, but contracts and facts vary.</li>
</ul>

<h2>Who deducts TDS on professional fees</h2>
<p>Not every client has to deduct TDS on professional fees, so do not be surprised if some pay you in full.</p>
<p>Companies, firms, LLPs and other businesses that pay professional fees must deduct TDS. Individuals and Hindu undivided families are excluded if they were not required to get a tax audit (now under section 63 of the new Act) in the preceding financial year. A family paying a lawyer for a personal matter, for example, usually does not deduct.</p>
<p>Under the old Act, a separate section required certain individuals not liable to audit to deduct TDS on large contract and professional payments. Commentaries say section 393 absorbs that too. If you are the one paying professionals, check the current rules with your accountant.</p>

<h2>How freelancers show TDS on an invoice</h2>
<p>This is where most confusion happens. The key principle: <strong>invoice the full amount</strong>. TDS is deducted by the client from the payment, not by you from the invoice. You add a clear note so both sides agree on the net amount you will receive.</p>
<h3>Worked example: consulting fee with GST</h3>
<p>Meera is a GST-registered architect. She invoices a company for a monthly design retainer. The company has already paid her more than 50,000 rupees this year, so TDS applies.</p>
<table>
<thead><tr><th>Line</th><th>Amount (rupees)</th></tr></thead>
<tbody>
<tr><td>Professional fee</td><td>1,00,000</td></tr>
<tr><td>GST at 18 percent</td><td>18,000</td></tr>
<tr><td><strong>Invoice total</strong></td><td><strong>1,18,000</strong></td></tr>
<tr><td>Less TDS at 10 percent on the fee (not on GST)</td><td>10,000</td></tr>
<tr><td><strong>Net amount payable to Meera</strong></td><td><strong>1,08,000</strong></td></tr>
</tbody>
</table>
<p>Because GST is shown separately on the invoice, the client deducts TDS on 1,00,000 rupees, not 1,18,000. A CBDT circular under the old Act confirmed this treatment when GST is shown separately; confirm it remains the position under the new Act. Meera receives 1,08,000 rupees, and 10,000 rupees appears as a tax credit against her PAN.</p>
<h3>Suggested invoice note</h3>
<p>A simple note at the bottom of the invoice works well: "TDS at 10 percent on the professional fee of 1,00,000 rupees (10,000 rupees) to be deducted under section 393 of the Income-tax Act, 2025 (formerly section 194J). Net payable: 1,08,000 rupees. Please share the TDS certificate after filing your quarterly return."</p>
<p>In our free <a href="/invoice-generator">invoice generator</a>, you would enter the fee as a line item, set the tax rate to 18 percent for GST, and put the TDS wording in the notes field. The tool does not calculate TDS automatically. When the client pays 1,08,000 rupees, you can record that as the amount paid on an updated copy, and note that the 10,000 rupee balance is covered by TDS. Our guides to <a href="/blog/gst-invoice-guide">GST invoices</a> and <a href="/blog/hsn-sac-code">SAC codes</a> cover the other fields Indian clients expect.</p>

<h2>Reading your tax credit statement (Form 26AS / Form 168)</h2>
<p>Your tax credit statement shows every TDS amount clients have reported against your PAN. Under the old rules it was Form 26AS; under the Income-tax Rules, 2026 it has been renumbered as Form 168, the annual information statement. You view it through the income tax e-filing portal.</p>
<p>Check it at least once a quarter:</p>
<ol>
<li>Download the statement and list every client and amount.</li>
<li>Match each entry to your invoices and bank receipts for the same period.</li>
<li>Look for missing clients, wrong amounts or entries under the wrong section.</li>
<li>Ask the client for their TDS certificate (Form 16A under the old rules, Form 131 under the new rules) and challan details for anything missing.</li>
<li>If the client made a mistake, ask them to file a correction to their quarterly TDS return.</li>
</ol>
<p>Clients deposit TDS monthly and file quarterly TDS returns, so a payment made in April may not appear until after the quarter's return is processed. Do not panic if a recent entry is missing; chase it if it is still missing after the filing deadline.</p>

<h2>Claiming TDS credit or a refund</h2>
<p>When you file your return, total TDS credits are set against your tax. Many freelancers who use presumptive taxation end up with a refund, because 10 percent of gross fees is often more than the tax due on 50 percent deemed income. Our guide to <a href="/blog/section-44ada-freelancers">section 44ADA and section 58</a> includes a worked example where TDS of 2,50,000 rupees against a tax bill of 2,08,000 rupees produces a 42,000 rupee refund.</p>
<p>To make sure you can claim every rupee:</p>
<ul>
<li>Give every client your correct PAN before the first payment.</li>
<li>Invoice in the right financial year and keep dates accurate.</li>
<li>Treat the gross fee, not the net receipt, as your income; the TDS is credited separately.</li>
<li>Keep invoices, payment records and certificates for each year.</li>
</ul>

<h2>Special cases freelancers run into</h2>
<h3>Advance payments and retainers</h3>
<p>TDS applies at the earlier of crediting the fee in the client's books or paying it. So if a client pays you an advance before the work starts, TDS is usually deducted on the advance itself. For monthly <a href="/blog/retainer-invoice">retainer invoices</a>, each month's fee counts toward the 50,000 rupee annual threshold, and once it is crossed, deductions continue on every invoice.</p>
<h3>Reimbursed expenses</h3>
<p>If you bill a client for travel, software or other costs on top of your fee, the TDS treatment depends on how you bill them and on current guidance. In practice, many clients deduct TDS on the full amount unless expenses are clearly separate and supported by bills. Show expenses as separate lines with receipts attached, as explained in our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a>, and agree the treatment with the client before you invoice.</p>
<h3>Lower deduction certificates</h3>
<p>If your actual tax liability is much lower than the TDS deducted, you may be able to apply for a certificate allowing clients to deduct at a lower rate or not at all. This existed under the old Act, and the new Act is reported to carry a corresponding provision. It is worth considering if large refunds are a recurring cash flow problem for you, but it adds paperwork, so discuss it with your accountant.</p>
<h3>Payments that cross 31 March 2026</h3>
<p>An invoice issued in March 2026 but paid in April 2026 may still fall under section 194J if the client credited it in its books in March. Ask clients which section they used, and match it to your tax credit statement.</p>

<h2>Common TDS mistakes on invoices</h2>
<ul>
<li><strong>Reducing the invoice total by TDS.</strong> This understates your income and confuses the client's GST records. Invoice the full amount.</li>
<li><strong>Calculating TDS on the GST-inclusive total.</strong> Show GST separately so TDS is calculated on the fee only.</li>
<li><strong>Treating the short payment as a dispute.</strong> A payment of 1,08,000 rupees against a 1,18,000 rupee invoice is not underpayment if TDS was deducted correctly. Record it as settled once the credit appears. See our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a> for genuine shortfalls.</li>
<li><strong>Wrong section or rate.</strong> If a client treats your professional fee as technical (2 percent) or as a contract payment, the amounts and your records will not match. Clarify at the start.</li>
<li><strong>Ignoring foreign withholding.</strong> Overseas clients do not deduct Indian TDS, but their country may withhold tax. Keep records to claim foreign tax credit.</li>
</ul>

<h2>Conclusion</h2>
<p>TDS on professional fees is simple once you know the rules: 10 percent on professional fees above 50,000 rupees a year, calculated before GST, now under section 393 rather than 194J. Invoice the full amount, add a clear TDS note, and reconcile your tax credit statement every quarter. This article is general information, not tax advice; check incometaxindia.gov.in and speak to a chartered accountant about your situation. Build a clean GST invoice with a TDS note in minutes using our free <a href="/invoice-generator">invoice generator</a>, or start from a <a href="/invoice-templates/minimal">minimal invoice template</a>.</p>
`,
  },
];
