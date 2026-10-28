import type { PostDraft } from "../blog";

export const UK_2026_B_POSTS: PostDraft[] = [
  {
    slug: "uk-e-invoicing-mandate-2029",
    title: "UK E-Invoicing Mandate 2029: Timeline, Peppol and Prep",
    description:
      "The UK e-invoicing mandate makes e-invoices compulsory for B2B and B2G VAT invoices from April 2029. See the timeline, the Peppol model and how to prepare.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["what-is-peppol", "e-invoicing-guide", "e-invoice-vs-pdf-invoice"],
    faqs: [
      {
        q: "When does UK e-invoicing become mandatory?",
        a: "The government announced at Budget 2025 that e-invoicing will be mandatory for all business-to-business and business-to-government VAT invoices from April 2029. An implementation roadmap was promised for Budget 2026, with guidance, technical specifications and legislation expected to follow by the end of 2027 to 2028. Until the mandate starts, e-invoicing remains voluntary for most UK businesses, although some public bodies, such as NHS England, already require it from their suppliers.",
      },
      {
        q: "Will a PDF invoice still be allowed after 2029?",
        a: "For VAT invoices in scope of the mandate, a PDF is unlikely to be enough. The government's consultation defined PDF, Word, image and HTML invoices as not being e-invoices, because they are not structured data a computer can read without human input. The final rules will be set out in the roadmap and legislation, so check GOV.UK. PDFs should remain fine for invoices outside the mandate, such as those from businesses that are not VAT registered.",
      },
      {
        q: "Does the UK e-invoicing mandate apply to small businesses?",
        a: "It applies to VAT invoices, so the key question is whether you are VAT registered. The consultation response said businesses that are not registered for VAT will not be required to adopt e-invoicing, which covers many of the smallest firms. If you are VAT registered and sell to other businesses or the public sector, expect to be in scope from April 2029, subject to any detail or phasing in the official roadmap.",
      },
      {
        q: "Is the UK using Peppol for e-invoicing?",
        a: "Yes. HMRC's Tax Update 2026 summary confirmed Peppol as the core interoperability network for UK e-invoicing. The government has focused on a decentralised model, where businesses exchange invoices through software providers and access points rather than through a single government portal. Details such as the exact data standard, accreditation of providers and how legacy systems connect are expected in the roadmap and later technical guidance.",
      },
      {
        q: "Will HMRC get my invoice data in real time?",
        a: "Not at the start. The consultation response said real-time digital reporting of invoice data to HMRC will not be introduced in 2029, but could follow once e-invoicing is well established. So the 2029 change is about the format and exchange of invoices between businesses. HMRC has not set a date for any reporting phase, so watch for future announcements rather than planning around one now.",
      },
      {
        q: "What is a decentralised four-corner model?",
        a: "In a four-corner model, the supplier (corner one) sends an invoice through its service provider (corner two), which passes it over a shared network to the buyer's provider (corner three), which delivers it to the buyer (corner four). Each business picks its own provider, and the providers talk to each other using common rules. Peppol is the best-known network built this way, and it is already used in many European countries and in Australia and Singapore.",
      },
      {
        q: "What should I do now to prepare for UK e-invoicing?",
        a: "Start with an inventory: how many VAT invoices you send and receive, which software creates them and whether your customers' data (VAT numbers, addresses, purchase order references) is complete. Ask your accounting software provider about its Peppol plans. Clean up your invoice numbering and product codes. Then follow the official roadmap, because the technical standard and any phasing will decide exactly what your software must do before April 2029.",
      },
      {
        q: "Do I need to keep issuing VAT invoices in the meantime?",
        a: "Yes. Nothing changes for VAT invoice content until the mandate starts. A full UK VAT invoice still needs details such as a unique sequential number, the issue date, the tax point if different, your name, address and VAT registration number, the customer's name and address, a description of the supply, the net amount, VAT rate and VAT due. Paper and PDF invoices remain valid today if they meet those rules.",
      },
    ],
    content: `<p>The <strong>UK e-invoicing mandate</strong> will require VAT-registered businesses to issue and receive structured electronic invoices for all business-to-business (B2B) and business-to-government (B2G) VAT invoices from April 2029. It was announced at Budget 2025, will run on a decentralised model with Peppol as the core network, and will not include real-time reporting to HMRC at launch.</p>

<p>That is the short answer. The longer one matters because the UK e-invoicing mandate changes what counts as an invoice. A PDF emailed to a customer, which is how most small firms bill today, is not an e-invoice under the government's definition. This guide covers what has been announced, what is still open, and the practical steps worth taking over the next two years.</p>

<h2>What the UK e-invoicing mandate actually requires</h2>

<p>An e-invoice is not just an invoice sent electronically. It is invoice data in a structured, machine-readable format that the buyer's system can read and process without anyone retyping it. The government's consultation listed PDF, Word, JPEG and HTML invoices, and invoices captured by scanning, as not being e-invoices. If you want the background, our guide to <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices versus PDF invoices</a> explains the difference in detail.</p>

<p>From what has been published on GOV.UK so far:</p>

<ul>
<li><strong>Scope:</strong> all VAT invoices for B2B and B2G transactions. Business-to-consumer sales generally fall outside, because VAT invoices are not usually issued to consumers.</li>
<li><strong>Start date:</strong> April 2029, as announced at Budget 2025 and repeated in HMRC's Transformation Roadmap update.</li>
<li><strong>Single start date:</strong> the consultation response described the move to e-invoicing for all VAT invoices from 2029 rather than a staged rollout by business size, although final details sit with the roadmap.</li>
<li><strong>Who is out:</strong> businesses not registered for VAT will not be required to adopt e-invoicing.</li>
<li><strong>No real-time reporting at launch:</strong> HMRC will not receive invoice data in real time in 2029. That could come later, once e-invoicing is established.</li>
</ul>

<p>If you are new to the subject, our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> covers how structured invoices work in general before you look at the UK specifics.</p>

<h2>Timeline: from consultation to April 2029</h2>

<p>The mandate did not appear overnight. Here is the sequence of official milestones, based on GOV.UK publications.</p>

<table>
<thead>
<tr><th>Date</th><th>Milestone</th></tr>
</thead>
<tbody>
<tr><td>February 2025</td><td>HMRC and the Department for Business and Trade publish the consultation on promoting e-invoicing</td></tr>
<tr><td>7 May 2025</td><td>Consultation closes</td></tr>
<tr><td>26 November 2025 (Budget 2025)</td><td>Government confirms mandatory e-invoicing for all B2B and B2G VAT invoices from April 2029</td></tr>
<tr><td>January to mid 2026</td><td>Stakeholder engagement on the design of the system</td></tr>
<tr><td>2026 (Tax Update 2026)</td><td>Peppol confirmed as the core interoperability network</td></tr>
<tr><td>Budget 2026 (28 October 2026)</td><td>Implementation roadmap due to be published</td></tr>
<tr><td>By end of 2027 to 2028</td><td>Guidance, technical specifications and legislation expected</td></tr>
<tr><td>April 2029</td><td>Mandate starts for VAT invoices</td></tr>
</tbody>
</table>

<p>Budget 2026 falls on the date this article was published, so the roadmap's detail may not be reflected here yet. Check GOV.UK for the latest version before you make firm plans or spend money on software.</p>

<h2>The model: decentralised, with Peppol at the core</h2>

<p>Countries take two broad approaches to e-invoicing. In a clearance model, every invoice passes through a government platform before it reaches the customer. In a decentralised model, businesses exchange invoices directly through accredited service providers, and the tax authority may or may not receive a copy. Our comparison of <a href="/blog/peppol-vs-clearance-model">Peppol and clearance models</a> walks through the trade-offs.</p>

<p>The UK has chosen the decentralised route. The consultation discussed a four-corner model: your software provider (an access point) sends the invoice across a shared network to your customer's access point, which delivers it into their system. In 2026 HMRC confirmed that Peppol will be the core interoperability network. If the name is unfamiliar, read <a href="/blog/what-is-peppol">what Peppol is and how it works</a>.</p>

<p>Peppol is not new to the UK. NHS England already requires suppliers to send Peppol e-invoices, and public bodies covered by the Public Procurement Act 2023 must accept invoices that meet the European standard BS EN 16931. So some suppliers already have the systems in place. For everyone else, the practical takeaway is that you will most likely send e-invoices through accounting or invoicing software connected to a Peppol access point, rather than by uploading anything to HMRC.</p>

<h3>What is still undecided</h3>

<p>At the time of writing, several points depend on the roadmap and later legislation:</p>

<ul>
<li>The exact UK data standard and any UK-specific rules on top of EN 16931</li>
<li>How service providers will be accredited</li>
<li>What happens to legacy systems, such as EDI, that cannot connect to Peppol directly</li>
<li>Whether there will be a soft-landing period or penalties in the first months</li>
<li>Record-keeping rules for structured invoices</li>
</ul>

<h2>Who is in scope and who is not</h2>

<p>The test is VAT registration and the type of customer. Here is how it is likely to land for common small business set-ups, based on the published scope. Treat this as a planning guide, not a ruling.</p>

<table>
<thead>
<tr><th>Your situation</th><th>Likely position from April 2029</th></tr>
</thead>
<tbody>
<tr><td>VAT-registered consultancy billing UK companies</td><td>In scope: e-invoices needed for VAT invoices</td></tr>
<tr><td>VAT-registered supplier to councils or the NHS</td><td>In scope (B2G), and some buyers already require Peppol</td></tr>
<tr><td>Sole trader below the VAT threshold, not registered</td><td>Not required to adopt e-invoicing</td></tr>
<tr><td>VAT-registered shop selling only to consumers</td><td>Generally outside, as VAT invoices are not usually issued to consumers</td></tr>
<tr><td>VAT-registered firm that also buys from other firms</td><td>Must be able to receive e-invoices as well as send them</td></tr>
</tbody>
</table>

<p>If you are close to the VAT registration threshold, our explainer on the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a> covers when registration becomes compulsory, which also decides when e-invoicing will apply to you.</p>

<h2>What changes for a small business: a worked example</h2>

<p>Take a VAT-registered marketing consultancy that sends 40 invoices a month to business clients and receives about 60 supplier invoices.</p>

<p><strong>Today:</strong> the owner creates each invoice, saves it as a PDF and emails it. For a typical job, the invoice shows £2,000 net, VAT at 20% of £400 and a total of £2,400. Supplier bills arrive as PDFs and someone keys them into the accounts.</p>

<p><strong>From April 2029:</strong> the same £2,000 + £400 invoice has to leave as structured data through a Peppol-connected provider. Each field (supplier VAT number, customer details, line description, net amount, VAT rate, VAT amount, total, due date) must be present and in the right format, or the invoice may be rejected. On the purchase side, the 60 supplier invoices arrive as data and can flow into the accounts without manual entry.</p>

<p>The business does not need to become a technical expert. It does need software that can send and receive Peppol invoices, customer records with correct VAT numbers and addresses, and clean, sequential invoice numbering. Small firms that already keep good records will find the switch far easier. Our guide on <a href="/blog/how-to-send-peppol-invoice">how to send a Peppol invoice</a> shows what the process looks like in countries that already use it.</p>

<h2>How to prepare for the UK e-invoicing mandate</h2>

<p>You have time, but not unlimited time. A sensible plan for a small business looks like this:</p>

<ol>
<li><strong>Confirm whether you are in scope.</strong> Are you VAT registered, and do you issue VAT invoices to businesses or public bodies? If not, you may not need to change anything for the mandate itself.</li>
<li><strong>List your invoice flows.</strong> Count invoices sent and received each month and note which system creates each type (accounting software, spreadsheets, a sales platform, a manual template).</li>
<li><strong>Ask your software provider about Peppol.</strong> Find out whether it is, or plans to become, a Peppol access point or connected to one, and when.</li>
<li><strong>Clean your data.</strong> Check customer legal names, addresses, VAT numbers and purchase order references. Structured invoices are less forgiving than PDFs.</li>
<li><strong>Standardise invoice content.</strong> Make sure every VAT invoice already carries the details required today. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists them.</li>
<li><strong>Review your VAT process.</strong> E-invoicing sits alongside Making Tax Digital for VAT. If your return still involves manual steps, our guide on <a href="/blog/how-to-file-vat-return-uk">filing a UK VAT return</a> is a good starting point.</li>
<li><strong>Read the roadmap when it lands.</strong> Note any phasing, testing windows and grace periods, then set your own internal deadline at least six months before April 2029.</li>
</ol>

<h2>Where a PDF invoice generator still fits</h2>

<p>Our free invoice generator creates PDF invoices in your browser. It does not produce e-invoice XML, does not connect to Peppol and does not send anything to HMRC. That is fine for many users, and it will stay fine after 2029 in several situations:</p>

<ul>
<li>Sole traders and small firms that are not VAT registered</li>
<li>Invoices to consumers</li>
<li>Invoices to overseas clients, where UK rules do not apply in the same way (check local rules in the client's country)</li>
<li>Pro forma invoices, quotes and payment requests that are not VAT invoices</li>
</ul>

<p>If you are VAT registered and bill UK businesses, plan to move those VAT invoices into Peppol-capable software before the mandate starts. In the meantime, the <a href="/invoice-generator/uk">UK invoice generator</a> has a UK preset with VAT and sterling, which helps you get the content right now. A well-structured invoice today is good practice for the structured data you will need later. For the technical side of the European standard, see our note on the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice format</a>.</p>

<h2>Costs and benefits of the UK e-invoicing mandate for small firms</h2>

<p>The government's stated aims are less paperwork, faster payment and fewer errors, which in turn should help reduce the VAT gap. For a small business, the benefits and costs are fairly predictable even before the final rules are published.</p>

<p><strong>Likely benefits:</strong></p>
<ul>
<li>Supplier invoices arrive as data, so there is less manual keying and fewer typing mistakes in your books.</li>
<li>Invoices reach the right inbox in the customer's system, which removes the "we never received it" excuse and can shorten payment times.</li>
<li>Delivery is confirmed by the network, giving you a clear audit trail.</li>
<li>VAT figures flow straight into your records, which makes the VAT return simpler.</li>
</ul>

<p><strong>Likely costs:</strong></p>
<ul>
<li>A subscription to software that connects to Peppol, if your current tools do not.</li>
<li>Time to clean up customer and product data and test the new process.</li>
<li>Possible changes to how you handle credit notes, corrections and purchase order references.</li>
</ul>

<p>Budget for a modest software cost and a few days of set-up time, and you will be in a much stronger position than a business that waits until early 2029.</p>

<h2>Common misconceptions</h2>

<ul>
<li><strong>"Emailing a PDF is already e-invoicing."</strong> Not under the government's definition. The mandate is about structured data.</li>
<li><strong>"HMRC will see every invoice in real time from 2029."</strong> Real-time reporting is not part of the 2029 launch.</li>
<li><strong>"Every business must comply."</strong> Businesses not registered for VAT are not required to adopt it.</li>
<li><strong>"I will need to log in to an HMRC portal for each invoice."</strong> The UK has chosen a decentralised model, so invoices travel through providers, not a government portal.</li>
</ul>

<p>This article is general information, not tax advice. The rules are still being finalised, so check with a qualified accountant or tax adviser about your own position.</p>

<h2>Conclusion</h2>

<p>The UK e-invoicing mandate gives VAT-registered businesses until April 2029 to move B2B and B2G VAT invoices to structured e-invoices over a Peppol-based network. Use the next two years to check whether you are in scope, clean up your data and choose software with a clear Peppol plan. For invoices that stay outside the mandate, and for getting your invoice content right today, you can keep using our free <a href="/invoice-generator/uk">UK invoice generator</a>. For more on rules and deadlines, browse our <a href="/blog/category/tax-compliance">tax compliance articles</a>.</p>`,
  },
  {
    slug: "companies-house-identity-verification",
    title: "Companies House Identity Verification: Deadlines and Steps",
    description:
      "Companies House identity verification is mandatory for UK directors and PSCs. See who must verify, the deadlines tied to your confirmation statement and how.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "sole-trader-vs-limited-company",
      "uk-dividend-tax-rates-2026",
      "self-assessment-tax-return-uk",
    ],
    faqs: [
      {
        q: "Do all company directors have to verify their identity with Companies House?",
        a: "Yes. Since 18 November 2025, identity verification has been a legal requirement for directors of UK companies and for people with significant control (PSCs). New directors must be verified before they are appointed. Existing directors had a 12-month transition period and must give their personal code on the company's next confirmation statement. Each person normally only verifies once, then reuses the same personal code for every company role they hold.",
      },
      {
        q: "When is my deadline to verify as an existing director?",
        a: "Your deadline is tied to your company's confirmation statement. Existing directors must provide their Companies House personal code in the next confirmation statement filed after 18 November 2025. Because every company has its own confirmation statement date, the deadline differs from company to company, but the transition period lasts 12 months from 18 November 2025. You can check each role's due date on the People tab of the company's page on the Companies House register.",
      },
      {
        q: "How do I verify my identity for Companies House?",
        a: "Most people verify online through GOV.UK One Login, using the app or website with accepted photo ID such as a biometric passport or UK photo driving licence. UK residents may also be offered verification at a Post Office or using bank or building society details. Alternatively, an Authorised Corporate Service Provider, such as an accountant or solicitor registered with Companies House, can verify you. Once verified, you receive a personal code to link to your roles.",
      },
      {
        q: "How much does Companies House identity verification cost?",
        a: "Verifying directly with Companies House through GOV.UK One Login is free. If you ask an Authorised Corporate Service Provider, such as your accountant, formation agent or solicitor, to verify you instead, they set their own fee, so ask before you start. In most cases you only need to verify once, because the same personal code can be used for every directorship and PSC role you hold.",
      },
      {
        q: "What happens if a director does not verify their identity?",
        a: "According to GOV.UK, a person who fails to verify could face criminal proceedings with a fine, civil penalties from the Registrar, and the register showing them as unverified. Directors can be prohibited from acting as a director, and the company cannot file its confirmation statement until every director has verified. That can also put the company at risk of further action, so treat the deadline seriously and verify early.",
      },
      {
        q: "Do people with significant control need to verify too?",
        a: "Yes. A PSC who is also a director gives the code on the confirmation statement as a director and must separately provide it for the PSC role within 14 days, starting the day after the confirmation statement date. A PSC who is not a director provides the code within the first 14 days of their birth month. PSCs added after 18 November 2025 provide the code when added to the register or within 14 days.",
      },
      {
        q: "What is a Companies House personal code?",
        a: "A personal code is the reference you receive after your identity has been verified. You give it to Companies House, along with a verification statement, for each role you hold, such as director of one company and PSC of another. The same code works for all roles but must be supplied for each one separately. Keep it safe and never share it with anyone you do not trust to file for you.",
      },
      {
        q: "Does identity verification apply to sole traders?",
        a: "No. Companies House identity verification applies to people connected to entities registered at Companies House, such as company directors, PSCs and, as the rules roll out, LLP members and people who file on a company's behalf. A sole trader is not registered at Companies House, so there is nothing to verify there. If you later incorporate a limited company, you will need to verify before you can be appointed a director.",
      },
      {
        q: "Can my accountant file for my company if I have verified?",
        a: "Yes, and over time Companies House is moving to a system where third parties who file for clients must register as Authorised Corporate Service Providers, which itself requires verification. Your accountant may already be registered. Filers themselves will need to verify under a later phase. Check with your accountant that they are set up, because an unregistered agent may not be able to file for you once those rules start.",
      },
    ],
    content: `<p><strong>Companies House identity verification</strong> is a legal requirement for UK company directors and people with significant control (PSCs) from 18 November 2025. New directors must verify before appointment. Existing directors must provide a personal code on their company's next confirmation statement, within a 12-month transition period. Verification is free through GOV.UK One Login.</p>

<p>The rules come from the Economic Crime and Corporate Transparency Act 2023, which gave Companies House new powers to check who is behind UK companies. If you run a limited company, even a one-person company, this applies to you. As of late October 2026, the transition period is close to its end, so if you have not verified yet, now is the time.</p>

<h2>Why Companies House identity verification exists</h2>

<p>For decades anyone could be named as a director at Companies House without proving who they were. That made it easy to set up companies with false identities and to misuse real people's names and addresses. The Economic Crime and Corporate Transparency Act 2023 changed the Registrar's role from a passive record keeper to an active gatekeeper. Identity verification is the centrepiece: it links every director and PSC to a verified real person.</p>

<p>For honest small business owners it is mainly an admin step, but it has real consequences if it is ignored. It also protects you, because it makes it much harder for someone to register a company using your name.</p>

<h2>Who must verify</h2>

<table>
<thead>
<tr><th>Role</th><th>Must verify?</th><th>When</th></tr>
</thead>
<tbody>
<tr><td>New director (appointed on or after 18 November 2025)</td><td>Yes</td><td>Before appointment; the code is given in the appointment or incorporation filing</td></tr>
<tr><td>Existing director</td><td>Yes</td><td>Code provided on the company's next confirmation statement after 18 November 2025</td></tr>
<tr><td>PSC who is also a director</td><td>Yes, separately for each role</td><td>PSC code within 14 days, starting the day after the confirmation statement date</td></tr>
<tr><td>PSC who is not a director</td><td>Yes</td><td>Within the first 14 days of their birth month</td></tr>
<tr><td>New PSC added after 18 November 2025</td><td>Yes</td><td>When added to the register or within 14 days</td></tr>
<tr><td>People filing for a company, and some other groups</td><td>Planned</td><td>Later phases; dates to be confirmed on GOV.UK</td></tr>
</tbody>
</table>

<p>Overseas companies with a UK establishment must confirm that all directors have verified by the anniversary of the UK establishment's registration. Corporate directors and certain other groups are being brought in under later phases. Always check the GOV.UK page "When you need to verify your identity for Companies House" for the current position.</p>

<h2>Timeline: from voluntary to mandatory</h2>

<ol>
<li><strong>October 2023:</strong> the Economic Crime and Corporate Transparency Act becomes law.</li>
<li><strong>8 April 2025:</strong> voluntary identity verification opens, so directors can verify early.</li>
<li><strong>18 November 2025:</strong> verification becomes a legal requirement. New directors must verify before appointment, and the 12-month transition for existing directors and PSCs begins.</li>
<li><strong>18 November 2025 to November 2026:</strong> existing directors provide their code on the company's next confirmation statement; PSCs follow their own 14-day windows.</li>
<li><strong>Later phases:</strong> verification for people who file documents and the move to Authorised Corporate Service Provider filing are being introduced afterwards. Companies House has not fixed every date, so watch GOV.UK.</li>
</ol>

<p>Note that 18 November 2025 was the start date, not a single deadline. Your personal deadline depends on your confirmation statement date or, for PSCs who are not directors, your birth month.</p>

<h2>How to verify: the four routes</h2>

<p>There are four main ways to complete Companies House identity verification:</p>

<ul>
<li><strong>GOV.UK One Login (online or app):</strong> free. You need accepted photo ID, your current address and the year you moved in, and a GOV.UK One Login account. The app scans your ID and takes a face check.</li>
<li><strong>Post Office:</strong> you enter your photo ID details online first, then complete the check in a branch. The service tells you if this route is available to you.</li>
<li><strong>Bank or building society details:</strong> for some UK residents, using your National Insurance number and security questions. Again, the service tells you if it is available.</li>
<li><strong>Authorised Corporate Service Provider (ACSP):</strong> an accountant, solicitor or other anti-money-laundering supervised professional registered with Companies House verifies you. They may charge a fee.</li>
</ul>

<h3>Accepted photo ID</h3>

<p>GOV.UK lists a biometric passport from any country, a UK photo driving licence (full or provisional), a UK biometric residence permit, a UK biometric residence card and a UK Frontier Worker permit. There are limited rules for expired documents: for example, a DVLA driving licence that expired within the last 90 days can be used in some routes, but an expired passport cannot be used with the app.</p>

<h3>Linking your personal code</h3>

<p>Once verified you receive a personal code. You then give that code, with a verification statement, for each role. Example: if you are a director of two companies and a PSC of one of them, you provide the code three times: on each company's confirmation statement and separately for the PSC role. Never give your code or login to someone you do not trust; GOV.UK warns that misuse of your identity could leave you legally responsible.</p>

<h2>Worked examples: when each person must act</h2>

<p><strong>Example 1: single-director company.</strong> Priya runs a design consultancy as a limited company. Its confirmation statement date is 10 December. Priya verified on GOV.UK One Login in summer 2025. When the company filed its confirmation statement with a statement date of 10 December 2025, she gave her personal code as director. Because she is also the PSC (she owns 100% of the shares), she had to provide the code again through the PSC verification service within 14 days starting 11 December 2025.</p>

<p><strong>Example 2: late confirmation statement date.</strong> A two-director building firm has a confirmation statement date of 5 November. Its first confirmation statement after 18 November 2025 is the one with a statement date of 5 November 2026. Both directors need their codes ready before that statement is filed. If one director has not verified, Companies House will not accept the statement.</p>

<p><strong>Example 3: investor who is not a director.</strong> Tom owns 30% of a friend's company but is not a director. His date of birth on the register is 22 March, so he must provide his code within the first 14 days of March, that is 1 to 14 March.</p>

<h2>What happens if you do not verify</h2>

<p>The GOV.UK factsheet on the Act lists the consequences for people who are required to verify and do not:</p>

<ul>
<li>Criminal proceedings, which could result in a fine</li>
<li>Civil penalties issued by the Registrar</li>
<li>Rejection of a new company's incorporation or a new appointment</li>
<li>Being unable to make certain statutory filings, including the confirmation statement</li>
<li>The public register showing the person as unverified</li>
<li>For directors, being prohibited from acting as a director</li>
</ul>

<p>A company that cannot file its confirmation statement is in breach of its own filing duties, which can lead to further action by Companies House. The safest approach is simple: verify early, then check the People tab on the register for every company you are linked to.</p>

<h2>Common Companies House identity verification problems</h2>

<p>Most people complete the check in a few minutes, but a few issues come up again and again.</p>

<h3>Your name or date of birth does not match the register</h3>

<p>The details on your ID need to match what Companies House holds closely enough to link your code to the role. If your register entry has an old surname, a typo or a missing middle name, file the correct change of details first, then provide your code. Leaving it until the day before the confirmation statement is due is how deadlines get missed.</p>

<h3>You have no accepted photo ID</h3>

<p>If you do not hold a passport or UK photo driving licence, look at whether the bank details route is offered to you, or use an ACSP. An ACSP can accept a wider set of documents under its own checks, although you will usually pay a fee.</p>

<h3>You used the wrong email address</h3>

<p>Your verified identity is tied to your GOV.UK One Login, and each email address can only be used to verify one identity. Use a personal email you will keep, not a shared company inbox or an address you might lose if you leave a business.</p>

<h3>Your co-director is overseas or hard to reach</h3>

<p>Directors abroad can verify with a biometric passport from any country through the app. Start early, because chasing someone in a different time zone during confirmation statement week is stressful and the statement cannot be filed until every director is verified.</p>

<h3>You are unsure whether you are a PSC</h3>

<p>Generally, a PSC holds more than 25% of the shares or voting rights, can appoint or remove a majority of the board, or otherwise has significant influence or control. In a small owner-managed company, the director-shareholder is usually also the PSC, so expect to provide the code twice.</p>

<h2>Practical checklist for small company owners</h2>

<ol>
<li>List every company where you are a director or PSC.</li>
<li>Find each company's confirmation statement date on the Companies House register.</li>
<li>Verify once through GOV.UK One Login or an ACSP and store your personal code safely.</li>
<li>Remind co-directors and PSCs, and confirm they have verified.</li>
<li>Provide codes on each confirmation statement and in each PSC window.</li>
<li>Check the register shows everyone as verified.</li>
<li>Ask your accountant whether they are registered as an ACSP if they file for you.</li>
</ol>

<p>Running a limited company also means keeping up with tax. If you pay yourself through salary and dividends, see our guides to <a href="/blog/uk-dividend-tax-rates-2026">UK dividend tax rates for 2026/27</a> and <a href="/blog/employer-national-insurance-2026">employer National Insurance</a>. Directors normally file a <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a> as well.</p>

<h2>What Companies House identity verification means for your invoices</h2>

<p>Verification does not change what goes on an invoice, but it is a good moment to check your company details are right everywhere. Companies must show their registered name, registered number and registered office on business letters, order forms and websites, and most companies show the same details on invoices. If you are VAT registered, your VAT number must appear on VAT invoices. Our guide to <a href="/blog/tax-id-on-invoice">tax IDs on invoices</a> explains what to include, and the <a href="/blog/sole-trader-invoice-uk">sole trader invoice guide</a> covers the different rules if you have not incorporated.</p>

<p>Verification also helps against fraud. Fake supplier invoices and bank detail change scams often rely on lookalike companies. A verified register makes it easier to check a supplier is real. See our guide to <a href="/blog/invoice-scams">invoice scams</a> for warning signs.</p>

<h2>Sole trader or limited company?</h2>

<p>If you are deciding whether to incorporate, identity verification is one more piece of admin on the limited company side, alongside the confirmation statement, annual accounts and corporation tax. It is not a reason on its own to stay a sole trader, but it belongs in the comparison. Our article on <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> sets out the full picture.</p>

<p>This article is general guidance, not legal advice. Rules and dates are being phased in, so check the latest GOV.UK guidance or speak to a qualified adviser about your situation.</p>

<h2>Conclusion</h2>

<p>Companies House identity verification is now part of running a UK company. Verify once, give your personal code on each confirmation statement and in each PSC window, and check the register. It takes minutes online and protects both you and your company. Once your company details are in order, you can create professional, correctly detailed invoices with our free <a href="/invoice-generator/uk">UK invoice generator</a>, and find more guides in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>`,
  },
  {
    slug: "employer-national-insurance-2026",
    title: "Employer National Insurance 2026/27: Rates and Examples",
    description:
      "Employer National Insurance for 2026/27: 15% above the £5,000 secondary threshold, a £10,500 Employment Allowance and worked examples for small employers.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["gross-pay-vs-net-pay", "uk-dividend-tax-rates-2026", "small-business-budget"],
    faqs: [
      {
        q: "What is the employer NIC rate for 2026/27?",
        a: "The main rate of secondary Class 1 National Insurance paid by employers is 15% for the 2026/27 tax year, which runs from 6 April 2026 to 5 April 2027. It applies to each employee's earnings above the secondary threshold of £5,000 a year, which is £417 a month or £96 a week. Class 1A contributions on taxable benefits in kind are also charged at 15%.",
      },
      {
        q: "What is the secondary threshold for 2026/27?",
        a: "The secondary threshold is £5,000 a year, £417 a month or £96 a week for 2026/27, according to HMRC's rates and thresholds for employers. It is the point above which an employer starts paying Class 1 National Insurance on an employee's earnings. It was cut from £9,100 to £5,000 from 6 April 2025, which brought far more part-time and low-paid jobs into employer National Insurance.",
      },
      {
        q: "How much is the Employment Allowance in 2026/27?",
        a: "The Employment Allowance is £10,500 for 2026/27. It reduces an eligible employer's Class 1 secondary National Insurance bill for the year by up to that amount, and is claimed through payroll software. Since April 2025, employers with Class 1 liabilities above £100,000 can also claim. Companies where the only employee paid above the secondary threshold is a single director cannot claim it.",
      },
      {
        q: "Can a single-director company claim the Employment Allowance?",
        a: "Not if the director is the only employee paid above the secondary threshold. HMRC's rules say a company with one director must not have that director as the only employee liable for secondary Class 1 National Insurance. If the company also employs someone else whose earnings exceed £5,000 a year, it can become eligible, even partway through the tax year, and can then claim the allowance.",
      },
      {
        q: "Do employers pay National Insurance on under-21s?",
        a: "Usually not, up to a limit. For employees under 21, apprentices under 25 and eligible veterans in their first civilian job, the employer rate is 0% on earnings up to the relevant upper secondary threshold of £50,270 a year. Above that, the normal 15% rate applies. The employee still pays their own National Insurance in the usual way, and the payroll category letter must be set correctly.",
      },
      {
        q: "How do I calculate employer National Insurance on a salary?",
        a: "Take the annual salary, subtract the £5,000 secondary threshold, and multiply the remainder by 15%. For a £30,000 salary that is £25,000 times 15%, or £3,750 a year. Payroll software works it out for each pay period using the weekly or monthly threshold, so the per-period figures may differ by a few pence from a simple annual calculation, especially if pay varies.",
      },
      {
        q: "Is employer National Insurance a deductible business expense?",
        a: "Yes. For a limited company, employer National Insurance on employees' and directors' salaries is normally an allowable expense for corporation tax, alongside the salaries themselves. For a sole trader employing staff, it is an allowable business expense against profits. Your own Class 2 or Class 4 contributions as a sole trader are not deductible. Ask an accountant if your situation includes benefits, bonuses or salary sacrifice arrangements.",
      },
      {
        q: "Do sole traders pay employer National Insurance?",
        a: "Only if they employ people. A sole trader does not pay employer contributions on their own profits; they pay Class 4 (and possibly voluntary Class 2) contributions through Self Assessment. If a sole trader takes on an employee and pays them above the secondary threshold, they must run payroll and pay employer National Insurance at 15% on the excess, and may be able to claim the Employment Allowance.",
      },
    ],
    content: `<p><strong>Employer National Insurance</strong> for 2026/27 is charged at 15% on each employee's earnings above the secondary threshold of £5,000 a year (£417 a month, £96 a week). Eligible employers can reduce their bill with the Employment Allowance of £10,500. On a £30,000 salary, the employer pays £3,750 a year before any allowance.</p>

<p>Those rates have applied since 6 April 2025, when the rate rose from 13.8% to 15% and the threshold fell from £9,100 to £5,000. They are unchanged for the 2026/27 tax year. This guide explains how employer National Insurance works, who pays what, and how to work out the cost of a hire with clear numbers.</p>

<h2>Employer NIC rates and thresholds for 2026/27</h2>

<p>These figures come from HMRC's "Rates and thresholds for employers 2026 to 2027" page and apply from 6 April 2026 to 5 April 2027.</p>

<table>
<thead>
<tr><th>Item</th><th>2026/27 figure</th></tr>
</thead>
<tbody>
<tr><td>Secondary Class 1 rate (employer)</td><td>15%</td></tr>
<tr><td>Secondary threshold</td><td>£96 a week, £417 a month, £5,000 a year</td></tr>
<tr><td>Upper secondary thresholds (under 21, apprentices under 25, veterans)</td><td>£967 a week, £4,189 a month, £50,270 a year</td></tr>
<tr><td>Freeport and Investment Zone upper secondary threshold</td><td>£481 a week, £2,083 a month, £25,000 a year</td></tr>
<tr><td>Employment Allowance</td><td>£10,500 a year</td></tr>
<tr><td>Class 1A (benefits in kind)</td><td>15%</td></tr>
<tr><td>Employee primary threshold</td><td>£242 a week, £1,048 a month, £12,570 a year</td></tr>
<tr><td>Employee main rate</td><td>8% to the upper earnings limit, 2% above</td></tr>
</tbody>
</table>

<p>The employee's contributions come out of their pay. The employer's contributions are an extra cost on top of gross salary. If the difference between the two still confuses you, our guide to <a href="/blog/gross-pay-vs-net-pay">gross pay vs net pay</a> sets it out step by step.</p>

<h2>What changed in April 2025, and what stayed the same in 2026</h2>

<p>The Autumn Budget 2024 made three changes from 6 April 2025:</p>

<ul>
<li>The employer rate rose from 13.8% to 15%.</li>
<li>The secondary threshold fell from £9,100 to £5,000 a year.</li>
<li>The Employment Allowance rose from £5,000 to £10,500, and the rule stopping employers with a previous-year Class 1 bill of £100,000 or more from claiming it was removed.</li>
</ul>

<p>For 2026/27 the rate, threshold and allowance are the same. The government said at the time that the threshold would stay at £5,000 until April 2028 and then rise with inflation, but check future Budgets for any change. The lower threshold matters most to small employers with part-time staff: someone earning £9,000 a year cost nothing in employer contributions before April 2025, and now costs £600.</p>

<h2>How to calculate employer National Insurance</h2>

<p>The basic formula is simple:</p>

<ol>
<li>Take the employee's gross earnings for the period.</li>
<li>Subtract the secondary threshold for that period (£96 weekly, £417 monthly, £5,000 annually).</li>
<li>Multiply what is left by 15%. If the result is negative, the charge is zero.</li>
<li>For under-21s, apprentices under 25 and eligible veterans, use 0% up to the upper secondary threshold and 15% above it.</li>
<li>Subtract any Employment Allowance you have left for the year.</li>
</ol>

<p>Payroll software does this every pay period and reports it to HMRC through Real Time Information. You pay HMRC monthly, or quarterly if your total PAYE bill is small enough. The examples below use annual figures so the arithmetic is easy to follow.</p>

<h2>Worked examples</h2>

<h3>Example 1: one full-time employee on £30,000</h3>

<p>Earnings above the threshold: £30,000 minus £5,000 equals £25,000. Employer contributions: £25,000 times 15% equals £3,750 a year, roughly £312 a month. The true cost of the hire before pension contributions is £33,750.</p>

<h3>Example 2: part-time employee on £9,000</h3>

<p>£9,000 minus £5,000 equals £4,000. £4,000 times 15% equals £600 a year. The employee pays no National Insurance themselves, because £9,000 is below the £12,570 primary threshold, but the employer still pays.</p>

<h3>Example 3: 19-year-old on £22,000</h3>

<p>Because the employee is under 21 and earns less than £50,270, the employer rate is 0%. Employer contributions are £0. If the same person earned £55,000, the employer would pay 15% on £4,730 (£55,000 minus £50,270), which is £709.50.</p>

<h3>Example 4: café with five staff on £24,000 each</h3>

<table>
<thead>
<tr><th>Step</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Earnings above threshold per employee (£24,000 minus £5,000)</td><td>£19,000</td></tr>
<tr><td>Employer contributions per employee (15%)</td><td>£2,850</td></tr>
<tr><td>Total for five employees</td><td>£14,250</td></tr>
<tr><td>Less Employment Allowance</td><td>minus £10,500</td></tr>
<tr><td>Employer National Insurance actually paid</td><td>£3,750</td></tr>
</tbody>
</table>

<p>The allowance is used up against the first payments of the year, so the café pays nothing for the first few months and then pays the full amount each month once the £10,500 is exhausted. Build that into your <a href="/blog/cash-flow-forecast">cash flow forecast</a> so the later months are not a surprise.</p>

<h3>Example 5: one-person limited company</h3>

<p>A director who is the company's only employee takes a salary of £12,570. Employer contributions are £7,570 times 15%, or £1,135.50. The Employment Allowance is not available, because the director is the only employee paid above the secondary threshold. A salary of £5,000 or less would avoid employer contributions entirely. Many directors still choose a salary around £12,570 because the salary and the employer contributions both reduce corporation tax, but the best figure depends on your profits and other income. We cover how salary and dividends combine in our guide to <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates for 2026/27</a>.</p>

<h2>The Employment Allowance in detail</h2>

<p>The Employment Allowance reduces your employer National Insurance bill by up to £10,500 a year. Under the GOV.UK eligibility rules:</p>

<ul>
<li>You must be a business or charity with employees, and do less than half your work in the public sector.</li>
<li>If you have one director, they must not be the only employee liable for secondary Class 1 contributions.</li>
<li>You cannot include people employed for personal, household or domestic work, such as a nanny or gardener (care and support workers are an exception).</li>
<li>Only one company in a group of connected companies can claim.</li>
<li>Since April 2025, a large previous-year bill (£100,000 or more) no longer stops you claiming.</li>
</ul>

<p>You claim through your payroll software, usually by ticking the allowance on your Employer Payment Summary. If you forget, you can usually claim for earlier years, but different rules apply, so check GOV.UK.</p>

<h2>Other employer contributions to know</h2>

<ul>
<li><strong>Class 1A:</strong> 15% on most taxable benefits in kind, such as a company car or private medical cover, paid annually after you report benefits.</li>
<li><strong>Class 1B:</strong> 15% on items in a PAYE Settlement Agreement, such as some staff entertainment.</li>
<li><strong>Off-payroll workers:</strong> if a medium or large client engages a contractor through their own company and the role falls inside the off-payroll rules, the fee payer pays employer contributions on the deemed payment. See our guide to <a href="/blog/ir35-off-payroll-rules">IR35 and the off-payroll rules</a>.</li>
<li><strong>Salary sacrifice:</strong> pension salary sacrifice currently reduces both employer and employee contributions. The Budget 2025 announced a cap on the National Insurance relief for sacrificed pension contributions from April 2029, so check the final rules before redesigning any scheme.</li>
</ul>

<h2>How employer costs affect your pricing</h2>

<p>Employer National Insurance is a direct labour cost, so it should be in every quote and rate you set. A simple approach for a service business:</p>

<ol>
<li>Work out the full annual cost of each employee: salary, employer contributions, pension contributions and any benefits.</li>
<li>Estimate the billable hours that employee can realistically deliver in a year, after holidays, training and admin.</li>
<li>Divide cost by billable hours to get a cost per hour, then add overheads and profit margin.</li>
</ol>

<p>For the £30,000 employee in Example 1, the cost before pension is £33,750. With 1,400 billable hours a year, that is about £24.11 an hour before overheads and profit. If you charge clients £35 an hour, your margin per hour is about £10.89 before rent, software and other costs. Our guides to <a href="/blog/how-to-set-freelance-rates">setting rates</a> and <a href="/blog/small-business-budget">building a small business budget</a> help you take this further.</p>

<h2>Should you hire an employee or use a contractor?</h2>

<p>Employer National Insurance is one reason small businesses compare hiring staff with engaging freelancers. Take a role worth £28,000 a year.</p>

<table>
<thead>
<tr><th>Option</th><th>Annual cost to you (before pension and overheads)</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Employee on £28,000</td><td>£28,000 plus £3,450 employer contributions = £31,450</td><td>Less any unused Employment Allowance</td></tr>
<tr><td>Self-employed freelancer invoicing £31,450</td><td>£31,450</td><td>No employer contributions, but no control over how they work</td></tr>
<tr><td>Contractor through their own company, small client</td><td>Agreed fee</td><td>Contractor's company decides status</td></tr>
</tbody>
</table>

<p>On cost alone, the numbers look similar once the freelancer prices in their own tax and lack of holiday pay. The real decision is about control and status. If you control how, when and where someone works, they may be an employee whatever the contract says, and HMRC can collect the missing contributions. Do not choose freelancers just to avoid employer costs. If the Employment Allowance would cover most of your bill, a direct hire may cost less than you think.</p>

<p>A quick rule of thumb for a first hire: if you will employ two or three people on ordinary salaries and you are eligible for the allowance, your employer National Insurance bill could be zero or close to it. For example, three staff on £20,000 each create £2,250 of contributions per person, £6,750 in total, which is fully covered by the £10,500 allowance. The bill only starts once total contributions pass £10,500 in the tax year.</p>

<h2>Paying HMRC and keeping records</h2>

<p>Employer contributions are paid to HMRC with PAYE income tax and employee contributions:</p>

<ul>
<li>Payments are due by the 22nd of the following tax month if you pay electronically (tax months run from the 6th to the 5th).</li>
<li>If your average monthly PAYE bill is less than £1,500, you may be able to pay quarterly instead.</li>
<li>Each payday you send a Full Payment Submission. Allowance claims and other adjustments go on an Employer Payment Summary.</li>
<li>Keep payroll records for at least three years after the end of the tax year they relate to.</li>
</ul>

<p>Directors of their own companies often weigh salary against dividends. Our guide to <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> explains how payroll fits into the wider choice of business structure.</p>

<h2>Common mistakes small employers make</h2>

<ul>
<li>Forgetting that part-time staff earning over £5,000 a year now trigger employer contributions.</li>
<li>Using the wrong category letter for under-21s or apprentices, and paying 15% when 0% was due.</li>
<li>Claiming the Employment Allowance as a single-director company with no other employee above the threshold.</li>
<li>Not budgeting for the jump in monthly payments once the allowance is used up.</li>
<li>Treating the employer cost as if it came out of the employee's pay. It does not; it is a separate business cost.</li>
</ul>

<p>Payslips should show the employee's deductions but not the employer's contributions as a deduction. See our <a href="/blog/salary-slip-format">salary slip format guide</a> for a clear layout.</p>

<p>This article is general information, not tax advice. Payroll rules have many special cases, so check with a qualified accountant or payroll adviser for your business.</p>

<h2>Conclusion</h2>

<p>For 2026/27, employer National Insurance is 15% on earnings above £5,000, with a £10,500 Employment Allowance for eligible businesses and 0% rates for under-21s and young apprentices up to £50,270. Know those numbers, build them into your prices, and your payroll costs will not catch you out. When you bill clients for the work your team delivers, our free <a href="/invoice-generator/uk">UK invoice generator</a> makes professional invoices in minutes. More guides are in our <a href="/blog/category/business-finance">business finance section</a>.</p>`,
  },
  {
    slug: "uk-dividend-tax-rates-2026",
    title: "Dividend Tax Rates 2026: What Changed and What You Pay",
    description:
      "Dividend tax rates 2026/27 rose to 10.75% and 35.75% from April 2026, with a £500 allowance. See the Budget 2025 changes and worked examples for directors.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "corporation-tax-uk",
      "sole-trader-vs-limited-company",
      "self-assessment-tax-return-uk",
      "employer-national-insurance-2026",
    ],
    faqs: [
      {
        q: "What are the dividend tax rates for 2026/27?",
        a: "For the 2026/27 tax year, which runs from 6 April 2026 to 5 April 2027, dividends above your allowances are taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. The first £500 of dividends each year is covered by the dividend allowance and taxed at 0%. Dividends that fall within any unused Personal Allowance are not taxed either.",
      },
      {
        q: "Did dividend tax go up in April 2026?",
        a: "Yes. The Budget on 26 November 2025 raised the dividend ordinary rate from 8.75% to 10.75% and the dividend upper rate from 33.75% to 35.75%, both from 6 April 2026. The additional rate stayed at 39.35%. The dividend allowance stayed at £500. For a basic rate taxpayer, that means an extra £20 of tax on every £1,000 of taxable dividends.",
      },
      {
        q: "What is the dividend allowance for 2026/27?",
        a: "The dividend allowance is £500 for 2026/27, the same as in the previous two tax years. It means the first £500 of dividend income is taxed at 0%, whatever your tax band. The allowance still uses up part of your basic or higher rate band, so it can affect the rate you pay on other dividends or savings. Dividends from shares held in an ISA are not taxed at all.",
      },
      {
        q: "How is dividend tax calculated?",
        a: "Add your dividends to your other taxable income, such as salary, to see which tax bands they fall into. Dividends are treated as the top slice of income. Any part covered by your unused Personal Allowance is tax-free, then the first £500 is covered by the dividend allowance. The rest is taxed at 10.75%, 35.75% or 39.35% depending on the band each pound falls into.",
      },
      {
        q: "Is it still worth paying myself dividends from a limited company?",
        a: "Often yes, but the gap has narrowed. Dividends are paid from profits that have already borne corporation tax at 19% to 25%, and the April 2026 increase adds two percentage points on top. A small salary plus dividends usually still costs less tax and National Insurance than paying everything as salary, but the best mix depends on your profits, other income and pension plans. An accountant can model the options.",
      },
      {
        q: "When do I pay tax on dividends?",
        a: "Most company directors pay dividend tax through Self Assessment. For dividends received in 2026/27, the return and the balancing payment are due by 31 January 2028. If your Self Assessment bill is large enough, you may also need to make payments on account on 31 January and 31 July. If you only have small dividends and are employed, HMRC may be able to collect the tax through your tax code.",
      },
      {
        q: "Do I need to report dividends under £500?",
        a: "Generally no. GOV.UK says you only need to tell HMRC about dividends if they exceed both your unused Personal Allowance and your dividend allowance. However, if you already file a Self Assessment return, for example as a company director, you should include all dividend income on it, even where no tax is due, so your return gives a complete picture of your income.",
      },
      {
        q: "Are dividend tax rates the same in Scotland?",
        a: "Yes. Scotland sets its own rates and bands for income from employment, self-employment and property, but dividend income is taxed using the UK-wide dividend rates and bands. So a Scottish taxpayer pays 10.75%, 35.75% or 39.35% on dividends in 2026/27, although their salary may be taxed under the Scottish rates, which can affect how much of the UK bands their dividends use.",
      },
    ],
    content: `<p>The <strong>dividend tax rates 2026</strong> changes took effect on 6 April 2026: the basic rate rose from 8.75% to 10.75%, the higher rate from 33.75% to 35.75%, and the additional rate stayed at 39.35%. The tax-free dividend allowance remains £500. For a typical director taking £40,000 in dividends, that is around £790 more tax a year.</p>

<p>The increase was announced in the Budget on 26 November 2025. It matters most to owners of small limited companies who pay themselves a low salary and take the rest as dividends. This guide sets out the rates, explains how dividends are taxed alongside salary, and works through real numbers so you can estimate your own bill.</p>

<h2>Dividend tax rates 2026/27 at a glance</h2>

<table>
<thead>
<tr><th>Tax band</th><th>Taxable income range (England, Wales, NI)</th><th>2025/26 dividend rate</th><th>2026/27 dividend rate</th></tr>
</thead>
<tbody>
<tr><td>Personal Allowance</td><td>Up to £12,570</td><td>0%</td><td>0%</td></tr>
<tr><td>Dividend allowance</td><td>First £500 of dividends</td><td>0%</td><td>0%</td></tr>
<tr><td>Basic rate</td><td>£12,571 to £50,270</td><td>8.75%</td><td>10.75%</td></tr>
<tr><td>Higher rate</td><td>£50,271 to £125,140</td><td>33.75%</td><td>35.75%</td></tr>
<tr><td>Additional rate</td><td>Over £125,140</td><td>39.35%</td><td>39.35%</td></tr>
</tbody>
</table>

<p>The 2026/27 figures match GOV.UK's "Tax on dividends" page. The Personal Allowance is reduced by £1 for every £2 of income over £100,000, so it disappears entirely at £125,140. Dividend income is taxed using these UK-wide bands even for Scottish taxpayers.</p>

<h2>What the Budget 2025 changed</h2>

<p>The Budget 2025 package on dividends, savings and property income included:</p>

<ul>
<li><strong>Dividends:</strong> ordinary rate up 2 points to 10.75% and upper rate up 2 points to 35.75%, from 6 April 2026. Additional rate unchanged at 39.35%.</li>
<li><strong>Savings income:</strong> rates rise 2 points to 22%, 42% and 47% from 6 April 2027.</li>
<li><strong>Property income:</strong> new separate rates of 22%, 42% and 47% from 6 April 2027.</li>
<li><strong>Thresholds:</strong> the Personal Allowance and basic rate limit stay frozen until 5 April 2031, so the higher rate threshold remains £50,270.</li>
</ul>

<p>The frozen thresholds matter as much as the rate rise. As profits and pay grow with inflation, more of your income drifts into the higher band, where dividends are taxed at 35.75%.</p>

<h2>How dividends are taxed alongside salary</h2>

<p>Dividend tax is not calculated in isolation. HMRC adds your dividends to your other income and treats dividends as the top slice. The order is:</p>

<ol>
<li>Salary, self-employed profits, pensions and property income use up your Personal Allowance and bands first.</li>
<li>Savings interest comes next.</li>
<li>Dividends sit on top. Any part that still falls within your Personal Allowance is tax-free.</li>
<li>The next £500 of dividends is covered by the dividend allowance at 0%, but it still uses up band space.</li>
<li>The remainder is taxed at 10.75%, 35.75% or 39.35% depending on where it falls.</li>
</ol>

<p>GOV.UK gives a simple example: someone with £29,570 in wages and £3,000 in dividends pays nothing on the first £500 of dividends and 10.75% on the remaining £2,500, which is £268.75.</p>

<h2>Worked examples for limited company directors</h2>

<p>These examples assume England, no other income, a director salary of £12,570 (which uses the whole Personal Allowance) and the 2026/27 rates. They compare the dividend tax rates 2026/27 bill with what the same dividends would have cost in 2025/26.</p>

<h3>Example 1: £20,000 of dividends</h3>

<p>All £20,000 falls in the basic rate band. The first £500 is tax-free. Tax: £19,500 times 10.75% equals £2,096.25. In 2025/26 it would have been £19,500 times 8.75%, or £1,706.25. Increase: £390.</p>

<h3>Example 2: £40,000 of dividends</h3>

<p>The basic rate band is £37,700 wide (£12,571 to £50,270). The first £37,700 of dividends sits in it: £500 at 0% and £37,200 at 10.75%, which is £3,999. The remaining £2,300 is in the higher band: £2,300 times 35.75% equals £822.25. Total: £4,821.25. In 2025/26 the same dividends would have cost £4,031.25. Increase: £790.</p>

<h3>Example 3: £80,000 of dividends</h3>

<p>Basic band as above: £3,999. The remaining £42,300 is taxed at 35.75%, which is £15,122.25. Total: £19,121.25, compared with £17,531.25 in 2025/26. Increase: £1,590. Total income here is £92,570, so the Personal Allowance is not yet tapered.</p>

<table>
<thead>
<tr><th>Dividends (with £12,570 salary)</th><th>Tax 2025/26</th><th>Tax 2026/27</th><th>Extra cost</th></tr>
</thead>
<tbody>
<tr><td>£20,000</td><td>£1,706.25</td><td>£2,096.25</td><td>£390</td></tr>
<tr><td>£40,000</td><td>£4,031.25</td><td>£4,821.25</td><td>£790</td></tr>
<tr><td>£80,000</td><td>£17,531.25</td><td>£19,121.25</td><td>£1,590</td></tr>
</tbody>
</table>

<h3>Example 4: the whole picture for a one-person company</h3>

<p>Imagine a consultancy company with £60,000 of profit before paying its director, and no associated companies.</p>

<ul>
<li>Director salary: £12,570. Employer National Insurance: 15% of £7,570, which is £1,135.50 (no Employment Allowance for a sole-director company). See our guide to <a href="/blog/employer-national-insurance-2026">employer National Insurance</a> for the detail.</li>
<li>Taxable profit: £60,000 minus £12,570 minus £1,135.50 equals £46,294.50.</li>
<li>Corporation tax at the 19% small profits rate: about £8,796.</li>
<li>Profit left to distribute: about £37,498.</li>
<li>Dividend tax if all paid out: (£37,498 minus £500) times 10.75%, about £3,977.</li>
<li>Director's take-home: £12,570 salary plus about £33,521 net dividends, roughly £46,091.</li>
</ul>

<p>Under the old 8.75% rate, the dividend tax would have been about £3,237, so the change costs this director roughly £740 a year. Profits above £50,000 pay corporation tax at a higher marginal rate (25% at £250,000 and above, with marginal relief in between), which changes the numbers.</p>

<h2>Sole trader vs limited company after the increase</h2>

<p>Higher dividend tax narrows the gap between running a limited company and working as a sole trader, but it does not close it for everyone. Sole traders pay income tax and Class 4 National Insurance on all profits as they arise. Company owners pay corporation tax, then dividend tax, but can leave profits in the company, pay pension contributions from it and choose when to take income. Our full comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> covers the admin, liability and tax trade-offs. Remember that running a company now also means <a href="/blog/companies-house-identity-verification">verifying your identity with Companies House</a>.</p>

<p>If you are a contractor working through your own company, the off-payroll rules can also change the picture. If a client decides a role is inside the rules, fees are taxed much like salary. See our guide to <a href="/blog/ir35-off-payroll-rules">IR35 and the off-payroll rules</a>.</p>

<h2>Ways to plan around the new rates</h2>

<p>None of these are loopholes; they are standard choices to discuss with an accountant:</p>

<ul>
<li><strong>Use the basic rate band each year.</strong> Taking dividends steadily up to the £50,270 threshold, rather than in one large year, can keep more income at 10.75% instead of 35.75%.</li>
<li><strong>Employer pension contributions.</strong> Contributions paid by the company are generally deductible for corporation tax and are not subject to dividend tax or National Insurance, within the usual pension rules.</li>
<li><strong>Retain profits.</strong> You do not have to extract everything. Profits left in the company are only taxed as dividends when paid out.</li>
<li><strong>Use ISAs for personal investments.</strong> Dividends from shares held in an ISA are tax-free.</li>
<li><strong>Check the paperwork.</strong> Dividends must come from distributable profits, with board minutes and dividend vouchers. Unlawful dividends can be treated as loans or salary.</li>
</ul>

<p>Be cautious with arrangements that move dividend income to a spouse or family member. They can work in some cases, but there are anti-avoidance rules. Get advice first.</p>

<h2>Reporting and paying dividend tax</h2>

<p>Most directors report dividends on a <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>. For dividends received in 2026/27, the online return and payment are due by 31 January 2028, with payments on account possible on 31 January and 31 July. GOV.UK says you need to report dividends to HMRC if they exceed both your unused Personal Allowance and your dividend allowance.</p>

<p>Making Tax Digital for Income Tax uses self-employment and property income to decide who must join, not dividends. A director whose only income is salary and dividends is not brought in by dividends alone. Our guide to <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> explains the thresholds.</p>

<h2>Dividend tax rates 2026 for investors and side income</h2>

<p>The same rates apply to anyone receiving dividends outside an ISA or pension, not just company directors. If you are employed on £45,000 and receive £2,000 of dividends from a share portfolio, your total income is £47,000, below the higher rate threshold. The first £500 is tax-free and the remaining £1,500 is taxed at 10.75%, which is £161.25. If your salary were £55,000, the same £1,500 would be taxed at 35.75%, or £536.25.</p>

<p>Moving shares into an ISA over time, using your partner's allowance where shares are genuinely owned by them, and holding income-producing investments in a pension are the usual ways to reduce this. Again, check the rules on gifts between spouses and the pension annual allowance before acting.</p>

<p>Pensioners and part-time workers with low other income can still receive a fair amount of dividends tax-free. Someone with a £9,000 pension and no other income has £3,570 of unused Personal Allowance. Dividends up to that amount are tax-free, the next £500 is covered by the dividend allowance, and only dividends above £4,070 are taxed at 10.75%. So £6,000 of dividends would create tax of £1,930 times 10.75%, which is about £207.48.</p>

<p>Shares held through a workplace or personal pension are not subject to dividend tax at all while the money stays inside the pension.</p>

<h2>Common mistakes with dividends</h2>

<ul>
<li><strong>Forgetting the higher band.</strong> Under the dividend tax rates 2026/27, every pound above £50,270 of total income costs 35.75%, not 10.75%. Check your total income before declaring a large final dividend.</li>
<li><strong>Ignoring the £100,000 taper.</strong> Between £100,000 and £125,140 of income, the Personal Allowance is withdrawn, which creates a very high effective rate on dividends in that range.</li>
<li><strong>Paying dividends without profits.</strong> If the company does not have enough retained profit, the payment is not a lawful dividend.</li>
<li><strong>Not budgeting for the January bill.</strong> Dividend tax is not deducted at source. Put money aside each time you take a dividend, roughly 10.75% or 35.75% of it depending on your band.</li>
<li><strong>Treating drawings as dividends.</strong> Money taken from the company without a declared dividend may sit on a director's loan account, which has its own tax rules.</li>
<li><strong>Missing payments on account.</strong> A first year of significant dividends can bring a large January bill plus the first payment on account for the next year.</li>
</ul>

<h2>Keeping the company side clean</h2>

<p>Your dividend capacity depends on profit, and profit depends on billing every piece of work and recording it properly. Know the difference between <a href="/blog/revenue-vs-profit">revenue and profit</a>, review a <a href="/blog/profit-and-loss-statement">profit and loss statement</a> before you declare a dividend, and make sure invoices go out promptly so cash is there when you want to pay yourself.</p>

<p>This article is general information, not tax advice. Tax depends on your full circumstances, so check with a qualified accountant or tax adviser before deciding how to pay yourself.</p>

<h2>Conclusion</h2>

<p>The dividend tax rates 2026 rise means 10.75% in the basic band, 35.75% in the higher band and 39.35% at the top, with a £500 allowance. For most small company directors the extra cost is a few hundred to a couple of thousand pounds a year, so it is worth reviewing your salary, dividend and pension mix now. Keep the income flowing by invoicing promptly with our free <a href="/invoice-generator/uk">UK invoice generator</a>, and find more UK tax guides in our <a href="/blog/category/tax-compliance">tax compliance section</a>.</p>`,
  },
  {
    slug: "ir35-off-payroll-rules",
    title: "IR35 Explained: Off-Payroll Rules and Contractor Invoices",
    description:
      "IR35 and the off-payroll working rules explained: who decides status, inside vs outside, the new small company thresholds, CEST and how to invoice correctly.",
    category: "freelancing",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "independent-contractor-invoice",
      "contractor-invoice-template",
      "sole-trader-vs-limited-company",
    ],
    faqs: [
      {
        q: "What is IR35 in simple terms?",
        a: "IR35 is the common name for UK tax rules that apply when someone works for a client through their own limited company (or another intermediary) but would be an employee if they were engaged directly. Where the rules apply, the fees are taxed broadly like employment income, with income tax and National Insurance. The aim is to stop people paying less tax just by putting a company between themselves and the client.",
      },
      {
        q: "Who decides if a contract is inside or outside IR35?",
        a: "For public sector clients and medium or large private sector clients, the client decides and must give a status determination statement with its reasons. For small private sector clients, the contractor's own company decides. A client counts as small if it meets at least two of the small company conditions on turnover, balance sheet total and employee numbers. Clients that are wholly overseas with no UK connection are generally outside the client-led rules.",
      },
      {
        q: "What changed for the small company exemption in April 2025?",
        a: "From 6 April 2025, the Companies Act thresholds for a small company rose: turnover to no more than £15 million (from £10.2 million) and balance sheet total to no more than £7.5 million (from £5.1 million). The 50-employee limit did not change. HMRC said the change will have no practical impact on off-payroll working until 6 April 2027 at the earliest, because company size is assessed using previous years' figures.",
      },
      {
        q: "What is the CEST tool?",
        a: "CEST stands for Check Employment Status for Tax. It is a free HMRC online tool that asks questions about a working arrangement, such as control, substitution and financial risk, and gives a view on whether the off-payroll rules apply. HMRC says it will stand by the result if the information you enter is accurate and the tool is used in line with its guidance. It does not consider every factor a tribunal might.",
      },
      {
        q: "How do I invoice if my contract is inside IR35?",
        a: "Invoice the agreed fee as normal from your limited company, plus VAT if you are registered, and reference the purchase order, timesheet or status determination if the client asks. The fee payer, usually the agency or client, then deducts income tax and employee National Insurance before paying your company, and reports this through its payroll. Your remittance will show the deductions. Do not deduct tax yourself on the invoice.",
      },
      {
        q: "Is VAT charged on an inside IR35 invoice?",
        a: "In general, yes. If your company is VAT registered, VAT is charged on the full value of your services as usual. The off-payroll deductions are calculated on the fee excluding VAT, so the VAT passes through to your company and is accounted for on your VAT return. Check how your agency handles this in its self-billing or payment process, and ask your accountant if the remittance does not match.",
      },
      {
        q: "Can I disagree with a client's status determination?",
        a: "Yes. If a medium or large client decides a role is inside the rules and you think that is wrong, you can ask the client to reconsider through its client-led disagreement process. The client must consider your representations and respond within 45 days, either confirming the decision with reasons or issuing a new determination. Set out the facts clearly, such as your right to send a substitute, and keep copies of contracts and correspondence.",
      },
      {
        q: "Do the off-payroll rules apply to sole traders?",
        a: "No. The rules apply when a worker provides services through an intermediary, usually their own limited company. A sole trader invoices in their own name and is already taxed on their profits personally, so there is no intermediary to look through. Separately, any engagement can still be challenged on whether the person is really self-employed or an employee, which is a different employment status question.",
      },
      {
        q: "Does IR35 apply if my client is outside the UK?",
        a: "Usually, the client-led rules do not apply to a client that has no UK connection, such as no UK permanent establishment. In that case responsibility for deciding status generally falls on the worker's intermediary, which must apply the original intermediaries legislation if the arrangement looks like employment. The rules for overseas clients are technical, so check the HMRC guidance and get advice if you work for foreign businesses through a UK company.",
      },
    ],
    content: `<p><strong>IR35</strong> is the name for the UK off-payroll working rules. They apply when you work for a client through your own limited company but would be an employee if hired directly. Inside the rules, your fees are taxed broadly like salary. For medium and large clients, the client decides your status; for small clients, your own company does.</p>

<p>For contractors, the answer to "inside or outside" changes your take-home pay by thousands of pounds and changes how you invoice. This guide explains who decides status, the small company thresholds that changed from April 2025, how HMRC's CEST tool fits in, and what your invoices should look like in each case.</p>

<h2>What IR35 means in practice</h2>

<p>The original intermediaries legislation dates from 2000. The more recent off-payroll working rules moved responsibility to the client: first in the public sector from April 2017, then for medium and large private sector clients from 6 April 2021. Today there are two regimes running side by side:</p>

<ul>
<li><strong>Client-led rules (Chapter 10, ITEPA 2003):</strong> for public sector clients and medium or large private and voluntary sector clients. The client decides status and the fee payer handles tax.</li>
<li><strong>Intermediary-led rules (Chapter 8):</strong> for small private sector clients and most clients with no UK connection. Your own company decides status and, if the rules apply, works out a deemed employment payment at the end of the tax year.</li>
</ul>

<p>The underlying question is always the same: if your company did not exist and you contracted directly, would you be an employee or self-employed?</p>

<h2>Inside vs outside: how status is judged</h2>

<p>There is no single test. HMRC and the tribunals look at the whole picture, including:</p>

<ul>
<li><strong>Control:</strong> does the client decide what you do, how, when and where?</li>
<li><strong>Substitution:</strong> can you genuinely send someone else to do the work, and has that right ever been used?</li>
<li><strong>Mutuality of obligation:</strong> is the client obliged to offer work and are you obliged to accept it?</li>
<li><strong>Financial risk:</strong> do you price fixed jobs, fix defects at your own cost, or invest in equipment?</li>
<li><strong>Part and parcel:</strong> are you treated like staff, with a line manager, staff benefits or appraisals?</li>
<li><strong>Business on own account:</strong> do you have several clients, marketing and your own working methods?</li>
</ul>

<p>A clear written contract helps, but only if it matches how the work actually happens. A <a href="/blog/statement-of-work-template">statement of work</a> that defines deliverables rather than hours, and a <a href="/blog/freelance-contract-template">well-drafted contract</a>, are useful evidence.</p>

<h3>The CEST tool</h3>

<p>HMRC's Check Employment Status for Tax (CEST) tool asks a series of questions and gives a view on whether the off-payroll rules apply. HMRC says it will stand by the result if your information is accurate and the tool is used as intended. Many clients use it as part of their decision, but some advisers point out that it does not weigh every factor a tribunal might, so treat it as one input, not the final word.</p>

<h2>Who decides: the client size test</h2>

<p>For private and voluntary sector clients, status responsibility depends on the client's size. A company is small if it meets at least two of the three small company conditions. The thresholds rose for accounting periods beginning on or after 6 April 2025:</p>

<table>
<thead>
<tr><th>Condition</th><th>Old small company limit</th><th>New limit (periods from 6 April 2025)</th></tr>
</thead>
<tbody>
<tr><td>Annual turnover</td><td>Not more than £10.2 million</td><td>Not more than £15 million</td></tr>
<tr><td>Balance sheet total</td><td>Not more than £5.1 million</td><td>Not more than £7.5 million</td></tr>
<tr><td>Average employees</td><td>Not more than 50</td><td>Not more than 50 (unchanged)</td></tr>
</tbody>
</table>

<p>HMRC's April 2025 Employer Bulletin says the threshold changes will have no practical impact for off-payroll working until 6 April 2027 at the earliest, because a company's size is determined by reference to previous years. So for the 2026/27 tax year, most clients assess themselves on the old figures. From April 2027 onwards, some mid-sized clients may become small, and responsibility for deciding status would pass back to contractors' own companies.</p>

<p>Other points on size:</p>

<ul>
<li>If a parent company is medium or large, its subsidiaries must apply the client-led rules too.</li>
<li>Clients that are not companies (for example, some partnerships) use a simpler turnover-only test. GOV.UK has shown this at £10.2 million; check the current figure.</li>
<li>Public sector clients always decide status, whatever their size.</li>
</ul>

<h2>The status determination statement</h2>

<p>A medium or large client must give you and the next party in the chain a status determination statement (SDS) explaining its conclusion and the reasons for it. It must take reasonable care in reaching that decision. If you disagree, you can make representations, and the client must respond within 45 days. If the client fails to give an SDS, it can end up liable for the tax itself.</p>

<p>Keep every SDS with your contract records. You may need it if HMRC asks questions later, and it is useful evidence when your accountant prepares your company's accounts.</p>

<h2>What inside IR35 does to your pay: a worked example</h2>

<p>Here is a simplified example for a contractor whose role is inside the rules for a full year, with no other income, in England, using 2026/27 rates.</p>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Fees for the year (£500 a day, 200 days), excluding VAT</td><td>£100,000</td></tr>
<tr><td>Income tax: 20% on £37,700 plus 40% on £49,730</td><td>£27,432</td></tr>
<tr><td>Employee National Insurance: 8% on £37,700 plus 2% on £49,730</td><td>£4,010.60</td></tr>
<tr><td>Net paid to your company</td><td>£68,557.40</td></tr>
<tr><td>Employer National Insurance paid by the fee payer: 15% on £95,000</td><td>£14,250</td></tr>
</tbody>
</table>

<p>The fee payer bears the employer contributions, but in practice agencies often factor that cost into the rate they offer, which is why inside rates are frequently quoted lower or on an "umbrella" basis. Your company does not pay corporation tax again on the deemed payment it has already been taxed on, but it should record it correctly. For how employer contributions are calculated, see our guide to <a href="/blog/employer-national-insurance-2026">employer National Insurance</a>.</p>

<p>Outside the rules, the same £100,000 would be your company's income. It would pay corporation tax on profits, and you would extract money through salary and dividends, now taxed at higher rates after April 2026. Our guide to <a href="/blog/uk-dividend-tax-rates-2026">UK dividend tax rates for 2026/27</a> shows that side of the calculation.</p>

<h2>How to invoice when you are inside or outside IR35</h2>

<p>The off-payroll rules change who deducts tax, not the basic invoice. Your limited company still invoices for the work. Here is how it differs.</p>

<h3>Outside the rules</h3>

<ol>
<li>Invoice your agreed day rate or project fee from your company.</li>
<li>Add VAT at 20% if your company is VAT registered. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists what a valid VAT invoice must show.</li>
<li>State payment terms and your bank details. You receive the full amount.</li>
<li>Your company accounts for corporation tax and pays you as it chooses.</li>
</ol>

<h3>Inside the rules</h3>

<ol>
<li>Invoice the same way, with the agreed fee and VAT if registered. Do not deduct tax on the invoice.</li>
<li>Reference the purchase order, timesheet and SDS if the client or agency asks you to.</li>
<li>The fee payer deducts income tax and employee National Insurance from the VAT-exclusive amount and pays your company the net amount plus VAT.</li>
<li>Match the remittance advice to your invoice and keep the payroll details. You will see the deductions on a payslip-style statement.</li>
<li>Tell your accountant which income was taxed at source so it is not taxed twice.</li>
</ol>

<p>Many agencies use self-billing, where they raise the invoice for you. If so, check the figures carefully against your timesheets. Our guides to <a href="/blog/independent-contractor-invoice">independent contractor invoices</a> and the <a href="/blog/contractor-invoice-template">contractor invoice template</a> cover the essential fields.</p>

<h3>Using our invoice generator for contract work</h3>

<p>Our free generator lets you add your company name, registered details, VAT at one rate, a PO number, and notes, which is a good place for a timesheet reference or "Status: outside off-payroll rules per SDS dated 1 May 2026". It creates a PDF in your browser. It does not calculate PAYE deductions, track payments or send invoices for you, which is fine, because the fee payer handles deductions. A clean layout like the <a href="/invoice-templates/corporate">corporate invoice template</a> suits agency and enterprise clients.</p>

<h2>What happens if HMRC disagrees</h2>

<p>If HMRC later decides that a role should have been inside the rules, the party responsible for the tax (usually the fee payer, or the client if it failed to take reasonable care or issue an SDS) can face a bill for the income tax and National Insurance that should have been deducted, plus interest and possibly penalties. Since April 2024, rules allow the tax already paid by the worker and their company on that income to be offset against the deemed employer's bill in some cases, which reduces the risk of the same income being taxed twice. The detail is technical, so take advice if you receive an enquiry.</p>

<p>Where your own company is responsible (small or overseas clients), HMRC can assess the company directly for the tax on a deemed employment payment. Keep a written record of your status assessment for each contract, your CEST result if you used it, and evidence of how the work was actually carried out.</p>

<h2>IR35 checklist before you sign a contract</h2>

<ol>
<li>Find out whether the end client is public sector, medium or large, or small, and ask who will make the status decision.</li>
<li>Ask for the SDS before you start, not after the first invoice.</li>
<li>Read the contract for control, substitution and obligation clauses, and check they reflect reality.</li>
<li>Agree the day rate on the right basis. An inside rate and an outside rate are not comparable.</li>
<li>Confirm who the fee payer is in the chain and how you will be paid.</li>
<li>Agree invoicing details: who raises invoices, payment terms, PO numbers and timesheet approval.</li>
<li>Diary a review if the role changes, because a role can move inside or outside the rules as duties change.</li>
</ol>

<p>Many contractors keep a simple file per engagement: contract, SDS, CEST printout, timesheets and invoices. It costs nothing and makes any later IR35 conversation with a client, agency or HMRC much easier.</p>

<h2>Common mistakes contractors make</h2>

<ul>
<li>Accepting an inside determination without checking whether the facts were described correctly.</li>
<li>Deducting PAYE on their own invoice as well as having it deducted by the agency.</li>
<li>Assuming that a small client automatically means outside. With a small client, your company still has to assess status under the original rules.</li>
<li>Forgetting that working practices matter more than contract wording.</li>
<li>Missing late payments. If an agency pays late, you may be able to claim <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> on business-to-business debts.</li>
</ul>

<p>If you are weighing up whether to keep trading through a company at all, our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> sets out the costs and benefits.</p>

<p>This article is general guidance, not tax or legal advice. Employment status is fact-specific, so speak to a qualified accountant or employment status specialist about your contracts.</p>

<h2>Conclusion</h2>

<p>The off-payroll rules decide who carries the tax risk and how your fees are taxed. Medium and large clients decide status and issue an SDS; small clients leave it to your company. The April 2025 small company thresholds will start to matter from April 2027. Whatever your status, invoice clearly and keep your records tidy. You can create a professional contractor invoice in minutes with our free <a href="/invoice-generator/uk">UK invoice generator</a>, and find more guides in our <a href="/blog/category/freelancing">freelancing section</a>.</p>`,
  },
];
