import type { PostDraft } from "../blog";

export const START_BUSINESS_2026_POSTS: PostDraft[] = [
  {
    slug: "how-to-start-an-llc",
    title: "How to Start an LLC in 2026: Steps, State Costs and Paperwork",
    description:
      "How to start an LLC in 2026, step by step: pick a state, file articles of organization, write an operating agreement, get an EIN and budget for state fees.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-invoice-as-an-llc",
      "business-entity-types",
      "llc-vs-sole-proprietorship",
      "how-to-get-an-ein",
      "s-corp-vs-llc",
      "business-bank-account-for-freelancers",
    ],
    faqs: [
      {
        q: "How much does it cost to start an LLC in 2026?",
        a: "The main cost is your state's filing fee for articles of organization. The SBA says total registration costs are often under $300, and published 2026 state fee tables run from around $35 in Montana to $500 in Massachusetts. Add any annual report fee or franchise tax, a registered agent if you do not act as your own, and optional costs such as legal review of your operating agreement.",
      },
      {
        q: "Can I start an LLC by myself?",
        a: "Yes. Every state allows a single-member LLC, and you can file the paperwork yourself on your Secretary of State's website without a lawyer or a formation service. You will need a business name that is available in your state, a registered agent with a physical address in the state, and the filing fee. A formation service only saves time; it does not give you any extra legal protection.",
      },
      {
        q: "Do I need an operating agreement for a single-member LLC?",
        a: "Most states do not require you to file one, but the SBA strongly recommends having one anyway. For a single-member LLC it shows banks, courts and the IRS that the business is separate from you, which supports your liability protection. It also sets out what happens if you add a partner, become unable to run the business or want to sell, which saves a lot of trouble later.",
      },
      {
        q: "How is a single-member LLC taxed?",
        a: "By default the IRS treats a single-member LLC as a disregarded entity, so profit is reported on your personal return, usually on Schedule C, and you pay self-employment tax on net earnings. A multi-member LLC is taxed as a partnership by default. Either can elect to be taxed as a corporation with Form 8832, or as an S corporation, if that suits the numbers better.",
      },
      {
        q: "Do I need an EIN for my LLC?",
        a: "A single-member LLC without employees can use the owner's Social Security number for income tax, according to the IRS. In practice most owners still get an EIN because banks ask for one to open a business account, and it keeps your SSN off W-9 forms you send to clients. You need an EIN if the LLC has employees or certain excise tax obligations. It is free from the IRS.",
      },
      {
        q: "How long does it take to form an LLC?",
        a: "Online filings in many states are approved within a few business days, while mail filings can take several weeks. Most states sell expedited processing for an extra fee. Once approved, you can get an EIN online the same day, then open a bank account. Allow a couple of weeks end to end if you also need local licenses before you can start invoicing clients.",
      },
      {
        q: "Which state should I form my LLC in?",
        a: "For most small businesses, the answer is the state where you live and work. If you form elsewhere, such as Delaware or Wyoming, you usually still have to register as a foreign LLC in your home state, which means paying two sets of fees and keeping two registered agents. Out-of-state formation mostly makes sense for venture-backed companies or businesses with no real home base.",
      },
      {
        q: "Does an LLC protect my personal assets?",
        a: "Generally yes. The SBA notes that LLC members are typically shielded from business debts and lawsuits, so a home or savings is not on the line for a business judgment. The protection has limits: it does not cover your own negligence, debts you personally guarantee, or cases where you mix personal and business money so much that a court ignores the LLC. Keep separate accounts and sign contracts in the LLC's name.",
      },
      {
        q: "Do I still have to file a BOI report for a new LLC?",
        a: "Under FinCEN's March 2025 interim final rule, companies created in the United States and their US beneficial owners are exempt from beneficial ownership information reporting under the Corporate Transparency Act. Foreign companies registered to do business in a US state may still have to report. Rules in this area have changed several times, so check FinCEN's current guidance when you form your LLC.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To start an LLC, choose your state, check that your business name is available, appoint a registered agent, file articles of organization with the Secretary of State and pay the fee, write an operating agreement, then get a free EIN and open a business bank account. State filing fees in 2026 range from roughly $35 to $500.</p>

<p>Learning how to start an LLC is less complicated than most people expect. For a freelancer, consultant or small trade business, the whole process can be done online in an afternoon, often without a lawyer. What matters is doing the steps in the right order and understanding the ongoing costs, not just the first filing fee. If you are still deciding whether you need an LLC at all, read our comparison of an <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> first, then come back here. Once the LLC is approved, you can bill clients under its name straight away with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This guide walks through the 2026 process step by step, shows what LLC formation costs by state, explains the operating agreement, and covers how your new LLC is taxed and how its name should appear on invoices. It is general information, not legal or tax advice.</p>

<h2>What an LLC is and why owners choose one</h2>

<p>A limited liability company is a business structure created under state law. It combines the liability protection of a corporation with the simpler tax treatment of a sole proprietorship or partnership. According to the <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" target="_blank" rel="noopener noreferrer">SBA guide to choosing a business structure</a>, LLC members are generally protected from personal liability for business debts and lawsuits, while profits can pass through to the owners' personal returns without corporate tax.</p>

<p>Owners usually form an LLC for three reasons:</p>
<ul>
<li><strong>Liability protection:</strong> a client lawsuit or unpaid supplier bill is aimed at the company, not your house or savings, as long as you keep business and personal finances separate.</li>
<li><strong>Credibility:</strong> larger clients and procurement teams often prefer to contract with a registered entity, and an LLC name looks more established on a proposal or contract.</li>
<li><strong>Tax flexibility:</strong> an LLC can stay a pass-through entity or elect corporate or S corporation taxation later, which our <a href="/blog/s-corp-vs-llc">S corp vs LLC guide</a> covers in detail.</li>
</ul>

<p>The trade-off is paperwork and ongoing fees. Some states charge an annual report fee or minimum tax every year, whether or not the business makes money.</p>

<h2>How to start an LLC: the 8 steps</h2>

<p>Here is the sequence that works in every state. Names of forms differ (Texas calls it a certificate of formation, most states say articles of organization), but the logic is identical.</p>

<ol>
<li><strong>Choose your state.</strong> Form in the state where you live and work. Forming in Delaware or Wyoming and then operating at home usually means registering as a foreign LLC as well, so you pay twice.</li>
<li><strong>Pick and check your name.</strong> Search your Secretary of State's business database. Most states require "LLC" or "Limited Liability Company" in the name. Also search the USPTO trademark database so you do not build a brand on someone else's mark.</li>
<li><strong>Appoint a registered agent.</strong> This is the person or company that receives legal papers for the LLC. It must have a physical address in the state. You can be your own agent, or pay a registered agent service.</li>
<li><strong>File articles of organization.</strong> File online or by mail with the Secretary of State and pay the fee. The form asks for the LLC name, address, registered agent, and whether it is member-managed or manager-managed.</li>
<li><strong>Write an operating agreement.</strong> It sets ownership percentages, decision-making, how profits are shared and what happens if a member leaves.</li>
<li><strong>Get an EIN.</strong> Apply online with the IRS; it is free and usually issued immediately. Our step-by-step guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> covers the form.</li>
<li><strong>Open a business bank account.</strong> Bring your approved articles, EIN letter and operating agreement. See our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>.</li>
<li><strong>Handle licenses, tax registrations and annual filings.</strong> Register for state sales tax or payroll tax if they apply, get any local licenses, and put your annual report date in the calendar.</li>
</ol>

<h2>LLC formation cost by state</h2>

<p>The filing fee is the one cost every LLC pays. The SBA says total registration costs are often under $300. Published 2026 state fee tables put filing fees between about $35 (Montana) and $500 (Massachusetts). The table below shows a selection of states to illustrate the range; fees change, so confirm the current figure on your Secretary of State's website before filing.</p>

<table>
<thead>
<tr><th>State</th><th>Formation filing fee (as of 2026)</th><th>Ongoing cost to watch</th></tr>
</thead>
<tbody>
<tr><td>Kentucky</td><td>$40</td><td>Low annual report fee</td></tr>
<tr><td>California</td><td>$70</td><td>$800 minimum annual tax from the first year, plus an LLC fee once gross receipts pass set thresholds</td></tr>
<tr><td>Texas</td><td>$300 (Form 205, certificate of formation)</td><td>Annual franchise tax report, even when no tax is due</td></tr>
<tr><td>Massachusetts</td><td>$500</td><td>$500 annual report, the highest in the country</td></tr>
</tbody>
</table>

<p>Notice how the cheapest filing state is not always the cheapest to run. California's filing fee is modest, but its $800 annual tax applies to almost every LLC registered or doing business there. Budget for the full first-year cost, not just the formation fee.</p>

<h3>Other costs to budget for</h3>
<ul>
<li><strong>Registered agent service:</strong> optional if you act as your own agent, otherwise an annual fee.</li>
<li><strong>Expedited processing:</strong> many states charge extra for faster approval.</li>
<li><strong>Name reservation or DBA:</strong> needed only if you want to hold a name before filing or trade under a different name. Our guide on <a href="/blog/what-is-a-dba">what a DBA is</a> explains when that applies.</li>
<li><strong>Local business licenses:</strong> covered in our guide on <a href="/blog/how-to-get-a-business-license">how to get a business license</a>.</li>
<li><strong>Professional help:</strong> a lawyer to review a multi-member operating agreement, or an accountant to advise on tax elections.</li>
</ul>

<h2>Worked example: first-year cost of a Texas LLC</h2>

<p>Maria is a freelance web developer in Austin. She forms a single-member LLC in Texas and wants to know what the first year will cost before she sends her first invoice.</p>

<table>
<thead>
<tr><th>Item</th><th>Cost</th></tr>
</thead>
<tbody>
<tr><td>Certificate of formation (Form 205)</td><td>$300</td></tr>
<tr><td>Registered agent (she acts as her own agent at her home office)</td><td>$0</td></tr>
<tr><td>EIN from the IRS</td><td>$0</td></tr>
<tr><td>Operating agreement (she adapts a template herself)</td><td>$0</td></tr>
<tr><td>Business bank account (no-fee account)</td><td>$0</td></tr>
<tr><td><strong>Total first-year formation cost</strong></td><td><strong>$300</strong></td></tr>
</tbody>
</table>

<p>If Maria had hired a registered agent service at, say, $125 a year and paid $25 for expedited filing, her total would be $300 + $125 + $25 = $450. The same business formed in California would pay a $70 filing fee plus the $800 annual tax, so $870 before any optional extras. That gap is why you should compare total cost, not headline fees.</p>

<h2>The operating agreement: what to include</h2>

<p>An operating agreement is the LLC's internal rulebook. Most states do not require you to file it, but the SBA strongly recommends having one even for a one-person business. It helps prove the LLC is a real, separate entity, which supports your liability protection, and it answers questions before they become disputes.</p>

<p>A good operating agreement covers:</p>
<ul>
<li>Members and ownership percentages, and how much each contributed.</li>
<li>Whether the LLC is member-managed or manager-managed.</li>
<li>How profits, losses and distributions are allocated.</li>
<li>Voting rules for major decisions such as taking on debt or adding members.</li>
<li>What happens if a member dies, becomes disabled, wants out or is bought out.</li>
<li>How the LLC is dissolved.</li>
</ul>

<p>Some states limit an LLC's lifespan or require it to be dissolved and re-formed when membership changes unless the operating agreement says otherwise, according to the SBA. A buy-sell clause avoids that problem.</p>

<h2>How a new LLC is taxed</h2>

<p>An LLC is a state legal entity, not a federal tax category. The IRS applies default rules:</p>
<ul>
<li><strong>Single-member LLC:</strong> disregarded for income tax. Profit goes on your Form 1040, usually on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>, and you pay <a href="/blog/self-employment-tax">self-employment tax</a> on net earnings, exactly as a sole proprietor would.</li>
<li><strong>Multi-member LLC:</strong> taxed as a partnership, filing Form 1065 and issuing Schedule K-1s to members.</li>
<li><strong>Elections:</strong> either type can elect to be taxed as a C corporation (Form 8832) or an S corporation (Form 2553). An S election can reduce self-employment tax once profit is high enough to justify running payroll.</li>
</ul>

<p>The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" target="_blank" rel="noopener noreferrer">IRS page on single-member LLCs</a> also notes that even a disregarded LLC is treated as a separate entity for employment taxes, so if you hire staff, payroll runs under the LLC's own name and EIN. For the filing side, see our sibling guide on <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes for an LLC</a>, and remember quarterly payments: our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains the deadlines.</p>

<h2>Invoicing correctly after you form your LLC</h2>

<p>Liability protection depends partly on acting like a company. The simplest daily habit is to invoice in the LLC's name, not yours. Every invoice should show:</p>
<ul>
<li>The full legal name exactly as registered, including "LLC".</li>
<li>Any registered trade name, written as "Smith Design LLC dba Pixel Studio" if you use one.</li>
<li>The business address and contact details.</li>
<li>Payment details for the LLC's bank account, never your personal account.</li>
<li>A unique invoice number. Our <a href="/tools/invoice-number-generator">invoice number generator</a> creates a clean sequence.</li>
</ul>

<p>Update your W-9 with clients so 1099s are issued to the LLC's EIN, and update contracts so they are signed by you as a member of the LLC. If you sell taxable goods, add sales tax with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>. A professional layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> works well for a newly formed company.</p>

<h2>DIY filing vs an LLC formation service</h2>

<p>You do not need a formation service to start an LLC. Every state accepts filings directly from owners, and most have an online portal that walks you through the articles of organization. Formation services bundle the state filing with extras such as a registered agent, an operating agreement template, EIN application help and compliance reminders, and charge a service fee on top of the state fee.</p>

<p>DIY filing makes sense when:</p>
<ul>
<li>You are a single-member LLC with a straightforward business.</li>
<li>You live in the state of formation and can act as your own registered agent.</li>
<li>You are comfortable following the state's instructions and tracking your own annual report date.</li>
</ul>

<p>A service or a lawyer is worth considering when you have several members with different contributions, plan to raise investment, are registering in more than one state, or want privacy because acting as your own registered agent puts your home address on the public record. Whichever route you choose, the state filing fee is the same and the LLC's legal protection is identical.</p>

<h3>Your first-year compliance calendar</h3>
<ul>
<li><strong>Week 1:</strong> file articles, get the EIN, open the bank account, sign the operating agreement.</li>
<li><strong>Month 1:</strong> register for state taxes and local licenses, and send updated W-9s to clients.</li>
<li><strong>Each quarter:</strong> pay federal and any state estimated taxes.</li>
<li><strong>State due date:</strong> file the annual report and pay any annual tax or fee.</li>
</ul>

<h2>Mistakes that weaken your LLC</h2>

<ul>
<li><strong>Mixing money:</strong> paying personal bills from the business account, or receiving client payments into a personal account, is the fastest way to give a court a reason to ignore the LLC.</li>
<li><strong>Missing annual reports:</strong> states can administratively dissolve an LLC that does not file, which can strip away its protection.</li>
<li><strong>Signing personally:</strong> sign contracts as "Maria Lopez, Member, Lopez Web LLC", not just your name.</li>
<li><strong>Forming in the wrong state:</strong> an out-of-state LLC operating at home usually needs foreign registration and a second set of fees.</li>
<li><strong>Ignoring licenses:</strong> forming the LLC does not license the activity. Check state and local rules for your trade.</li>
</ul>

<h2>Create your first LLC invoice</h2>

<p>Knowing how to start an LLC is the first step; getting paid as one is the next. Once your articles are approved and your EIN and bank account are in place, open the <a href="/invoice-generator">invoice generator</a>, enter your LLC's legal name and new payment details, and download a professional PDF in under a minute. US-based businesses can start from the <a href="/invoice-generator/usa">US invoice generator</a>, which is set up for American date and tax formats.</p>
`,
  },
  {
    slug: "what-is-a-dba",
    title: "What Is a DBA? Doing Business As Names Explained for 2026",
    description:
      "What is a DBA? Learn how a doing business as (fictitious) name works, when you must register one, what it costs, and how to invoice under a DBA correctly.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-invoice-as-a-sole-proprietor",
      "registered-agent",
      "llc-vs-sole-proprietorship",
      "how-to-invoice-without-a-business",
      "business-bank-account-for-freelancers",
      "how-to-get-an-ein",
    ],
    faqs: [
      {
        q: "What does DBA stand for?",
        a: "DBA stands for doing business as. It is a name a person or company uses publicly that is different from its legal name. Depending on the state, the same thing is called a trade name, fictitious business name or assumed name. For example, Jane Smith might trade as Bright Spark Electrical, or Smith Holdings LLC might run a shop called The Corner Bakery.",
      },
      {
        q: "Is a DBA the same as an LLC?",
        a: "No. An LLC is a separate legal entity that can protect your personal assets. A DBA is only a registered name; it creates no entity and no liability protection. A sole proprietor with a DBA is still personally responsible for the business's debts. An LLC can also have a DBA if it wants to trade under a name other than its registered legal name.",
      },
      {
        q: "Do I need a DBA if I use my own name?",
        a: "Usually not. If you are a sole proprietor trading under your full legal name, such as Jane Smith or Jane Smith Consulting in some states, you generally do not need to file. The rules differ on whether adding words like Consulting or Design counts as a fictitious name, so check your state or county. An LLC trading under its exact registered name does not need a DBA either.",
      },
      {
        q: "How much does a DBA cost?",
        a: "Fees are set by the state, county or city where you register, and they vary widely, from a small filing fee in some places to a higher amount where newspaper publication is required. Some jurisdictions require the filing to be renewed every few years. Check the exact fee and any publication rules with your Secretary of State or county clerk before you file.",
      },
      {
        q: "Where do I register a DBA?",
        a: "The SBA says DBAs are typically registered with the state, county or city where your business is located, depending on your structure and location. Corporations and LLCs often file with the Secretary of State, while sole proprietors frequently file with the county clerk. Some businesses need to file at more than one level, so check both state and local offices.",
      },
      {
        q: "Does a DBA protect my business name?",
        a: "Not really. The SBA states that registering a DBA does not give you legal protection by itself, and more than one business in a state can use the same DBA. To protect a brand nationally, you need a federal trademark through the USPTO. Registering a DBA also does not exempt you from trademark infringement, so search the USPTO database before you commit.",
      },
      {
        q: "Can I open a bank account under a DBA?",
        a: "Yes, in most cases. Banks usually ask for your DBA filing certificate plus an EIN or your Social Security number. The SBA notes that a DBA and an EIN let you open a business bank account. This lets clients write checks or send transfers to your trade name rather than your personal name, which looks more professional and keeps records clean.",
      },
      {
        q: "How do I show a DBA on an invoice?",
        a: "Put your legal name first and the trade name after it, for example Jane Smith dba Bright Spark Electrical, or Smith Holdings LLC dba The Corner Bakery. Use the same name your bank account and tax records use, so payments match. Many businesses put the trade name in large type as the brand and the legal name in the footer or business details block.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A DBA, short for "doing business as", is a registered name a sole proprietor, partnership, LLC or corporation uses instead of its legal name. It is also called a trade name, fictitious name or assumed name. A DBA does not create a separate company or protect personal assets; it simply lets you trade, bank and invoice under a brand name.</p>

<p>If you have ever seen a contract signed "Jane Smith dba Bright Spark Electrical", you have already seen a DBA in action. So what is a DBA in practical terms? It is the legal bridge between who you are on paper and the name your customers know. For freelancers and small businesses it is often the cheapest way to build a brand. This guide explains how DBAs work in 2026, when you must file one, what it costs, how it compares with an LLC, and how to put a DBA on an invoice so payments never bounce. If you are ready to bill under your trade name, the <a href="/invoice-generator">free invoice generator</a> lets you show both names cleanly.</p>

<p>This is general information, not legal advice; DBA rules are set state by state and sometimes county by county.</p>

<h2>What is a DBA and how does it work?</h2>

<p>Every business has a legal name. For a sole proprietor it is your personal name. For an LLC or corporation it is the exact name registered with the state, including "LLC" or "Inc." Any other name you use to deal with the public is a fictitious or assumed name, and most states require you to register it.</p>

<p>The <a href="https://www.sba.gov/business-guide/launch-your-business/choose-your-business-name" target="_blank" rel="noopener noreferrer">SBA guide to choosing a business name</a> describes a DBA as a name that lets you operate under something other than your personal name or formal entity name. It notes three points every owner should know:</p>
<ul>
<li>Most states require registration if you use a DBA.</li>
<li>Registering a DBA does not give you legal protection by itself.</li>
<li>Multiple businesses in the same state can use the same DBA.</li>
</ul>

<p>The registration exists mainly for consumer protection: anyone dealing with "Bright Spark Electrical" can look up the public record and see that Jane Smith is the person behind it.</p>

<h2>DBA vs LLC vs trademark</h2>

<p>The three are often confused because each involves a name. They do very different jobs.</p>

<table>
<thead>
<tr><th>Feature</th><th>DBA</th><th>LLC</th><th>Federal trademark</th></tr>
</thead>
<tbody>
<tr><td>What it is</td><td>A registered trade name</td><td>A separate legal entity</td><td>Brand protection for a name or logo</td></tr>
<tr><td>Where you file</td><td>State, county or city</td><td>Secretary of State</td><td>USPTO</td></tr>
<tr><td>Personal liability protection</td><td>None</td><td>Yes, within limits</td><td>None</td></tr>
<tr><td>Stops others using the name</td><td>No</td><td>Only the identical entity name in that state</td><td>Yes, in your industry nationwide</td></tr>
<tr><td>Changes how you are taxed</td><td>No</td><td>Can, through elections</td><td>No</td></tr>
<tr><td>Typical cost level</td><td>Low</td><td>Low to moderate, plus annual fees</td><td>Highest of the three</td></tr>
</tbody>
</table>

<p>If you mainly want liability protection, a DBA is not the answer; read our guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a> and the comparison of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>. If you want a brand name cheaply and are happy staying a sole proprietor, a DBA is often enough.</p>

<h2>Who needs a DBA?</h2>

<h3>Sole proprietors and partnerships</h3>
<p>A sole proprietor trading as "Jane Smith" needs nothing extra. Trading as "Bright Spark Electrical" usually requires a DBA. States differ on whether adding a descriptor to your own name, such as "Jane Smith Design", counts as a fictitious name, so check locally. General partnerships trading under anything other than the partners' surnames generally need one too.</p>

<h3>LLCs and corporations</h3>
<p>An LLC called "Smith Holdings LLC" that runs a bakery called "The Corner Bakery" needs a DBA for the bakery name. This is a common way to run several brands from one entity without forming multiple LLCs, although every brand then shares the same liability pool.</p>

<h3>Freelancers who want to look established</h3>
<p>Many freelancers start under their own name, as covered in our guide to <a href="/blog/how-to-invoice-without-a-business">invoicing without a registered business</a>. A DBA is the next step up: a brand name on proposals and invoices, and a bank account in that name, without forming an entity.</p>

<h3>Common DBA examples</h3>
<ul>
<li><strong>Tradesperson:</strong> "Carlos Ruiz dba Ruiz Roofing", so customers can pay a recognizable name.</li>
<li><strong>Consultant:</strong> "Amy Chen dba Northline Advisory", to present as a firm rather than an individual.</li>
<li><strong>LLC with a storefront:</strong> "Patel Ventures LLC dba Main Street Coffee", keeping a holding-style legal name separate from the consumer brand.</li>
<li><strong>LLC with two service lines:</strong> one LLC running "Bright Paws Grooming" and "Bright Paws Pet Sitting" under two DBAs.</li>
</ul>

<h2>How to register a DBA in 7 steps</h2>

<ol>
<li><strong>Decide on the name.</strong> Keep it distinct and easy to spell. Avoid words like "Inc." or "LLC" unless you actually are one; most states prohibit that.</li>
<li><strong>Search for conflicts.</strong> Check your state's business name database, the county fictitious name index and the USPTO trademark database.</li>
<li><strong>Find the right office.</strong> The SBA says registration is typically with the state, county or city where you are located. LLCs and corporations often file with the Secretary of State; sole proprietors often file with the county clerk.</li>
<li><strong>Complete the form.</strong> You will usually give the DBA name, your legal name or entity name, business address, and the owners' names.</li>
<li><strong>Pay the fee.</strong> Fees vary by jurisdiction.</li>
<li><strong>Publish a notice if required.</strong> Some states and counties require you to publish the new name in a local newspaper for several weeks and file proof of publication.</li>
<li><strong>Note the renewal date.</strong> Many DBAs expire after a set number of years and must be renewed, or the name lapses.</li>
</ol>

<h2>What a DBA costs in 2026</h2>

<p>There is no single national fee. Filing fees are set locally and range from modest county charges to higher state fees, and the newspaper publication requirement in some places can cost more than the filing itself. Because fees and rules change, confirm the current amount on your Secretary of State or county clerk website before you file. Formation services will file a DBA for you, but they charge their own fee on top of the government fee and do not give you any extra rights.</p>

<p>When you compare the cost, look at three items together: the filing fee itself, any publication cost where a newspaper notice is required, and the renewal fee multiplied by how long you expect to use the name. A cheap filing that must be renewed every few years can cost more over a decade than a single higher fee. If you operate in more than one county, check whether you need a separate filing in each one, as some states register fictitious names at county level only.</p>

<h2>Worked example: invoicing and getting paid under a DBA</h2>

<p>Jane Smith is a sole proprietor electrician who registers "Bright Spark Electrical" as a DBA with her county. She opens a business checking account titled "Jane Smith dba Bright Spark Electrical" using the DBA certificate and her EIN. Here is her first job invoice:</p>

<table>
<thead>
<tr><th>Line item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Labor: panel upgrade</td><td>6 hours</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td>Materials: 200A panel and breakers</td><td>1</td><td>$640.00</td><td>$640.00</td></tr>
<tr><td>Permit fee (pass-through)</td><td>1</td><td>$90.00</td><td>$90.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,300.00</strong></td></tr>
<tr><td colspan="3">Sales tax at 8% on materials only ($640.00 x 0.08)</td><td>$51.20</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$1,351.20</strong></td></tr>
</tbody>
</table>

<p>The check is made out to "Bright Spark Electrical". Because her bank account carries the DBA, the bank deposits it without question. Without the DBA on file, a bank can refuse a check payable to a name that does not match the account. Whether materials, labor or both are taxable depends on your state; our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains how to check, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> does the arithmetic.</p>

<h2>How to show a DBA on an invoice</h2>

<p>Clients pay the name they see, and accountants match payments by name. A clear format prevents both from going wrong.</p>
<ul>
<li><strong>Header:</strong> use the trade name as your brand, for example "Bright Spark Electrical".</li>
<li><strong>Business details block:</strong> show the full legal identity, "Jane Smith dba Bright Spark Electrical" or "Smith Holdings LLC dba The Corner Bakery".</li>
<li><strong>Payment instructions:</strong> state the exact payee name on your bank account and the account details. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> lists what to include.</li>
<li><strong>Tax ID:</strong> if a client needs it for 1099 reporting, use the EIN or SSN that matches the legal name, not the DBA. See <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</li>
<li><strong>Numbering:</strong> keep one invoice sequence per legal entity, even if you run several DBAs. The <a href="/tools/invoice-number-generator">invoice number generator</a> can add a prefix per brand.</li>
</ul>

<p>For layout, a brand-forward design such as the <a href="/invoice-templates/modern">modern invoice template</a> puts the trade name front and centre while keeping the legal details in a tidy block.</p>

<h2>DBA tax and banking questions</h2>

<p>A DBA does not change your taxes. A sole proprietor with a DBA still reports income on Schedule C under their own name and SSN or EIN, and an LLC with a DBA files exactly as it did before. On a W-9, the legal name goes on line 1 and the DBA on line 2, the "business name/disregarded entity name" line. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> walks through it.</p>

<p>Getting an EIN is optional for a sole proprietor without employees, but many banks prefer one for a DBA account and it keeps your SSN off client paperwork. See <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</p>

<h3>Changing, renewing or cancelling a DBA</h3>
<p>If you stop using a trade name, most jurisdictions let you file a withdrawal or abandonment form so the public record stays accurate. If you change the name, you normally file a new DBA rather than amending the old one, then update your bank account, invoices, website and client records. When you later form an LLC, an old sole proprietor DBA does not transfer automatically: the LLC has to file its own DBA for the same name if it wants to keep trading under it, and clients should receive a new W-9 showing the LLC as the legal payee. Missing a renewal date is the most common slip, because a lapsed DBA can leave your bank account and incoming checks in a name you are no longer registered to use.</p>

<h2>When a DBA is not enough</h2>

<p>A DBA is a naming tool. Consider forming an LLC instead, or as well, if you:</p>
<ul>
<li>Work in a field with real liability risk, such as trades, events or physical products.</li>
<li>Have significant personal assets to protect.</li>
<li>Sign larger contracts where clients expect a registered entity.</li>
<li>Plan to bring in partners or investors.</li>
</ul>
<p>Even then, you may still need a <a href="/blog/how-to-get-a-business-license">business license</a> for the activity itself; neither a DBA nor an LLC replaces that.</p>

<h2>Create invoices under your DBA</h2>

<p>Now you know what a DBA is: a low-cost way to trade under a brand name that does not change your legal structure or taxes. Once your filing is approved and your bank account matches, open the <a href="/invoice-generator">invoice generator</a>, add your trade name and legal name, and send a professional invoice your clients can pay without confusion. Browse the <a href="/invoice-templates">invoice templates</a> to find a design that fits your new brand. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "how-to-get-a-business-license",
    title: "How to Get a Business License in 2026: Steps and Costs",
    description:
      "How to get a business license in 2026: which federal, state and local licenses you need, how to apply step by step, what a business license costs and renewals.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-a-food-truck-business",
      "how-to-start-a-junk-removal-business",
      "llc-vs-sole-proprietorship",
      "how-to-get-an-ein",
      "sales-tax-nexus",
      "hobby-vs-business",
    ],
    faqs: [
      {
        q: "Do I need a business license to start a business?",
        a: "Most businesses need at least one license or permit, but there is no single national business license in the United States. The SBA explains that requirements depend on your activity and location, and come from federal, state, county and city governments. A home-based freelancer may only need a city business registration, while a restaurant or contractor needs several permits.",
      },
      {
        q: "How much does a business license cost?",
        a: "The SBA does not publish a standard fee because costs vary by business activity, issuing agency and location. A basic city or county registration is often an inexpensive annual fee, while professional and trade licenses cost more once exams, bonds and insurance are included. Some cities charge based on gross receipts or employee count. Check the exact fee with each agency before you apply.",
      },
      {
        q: "Do freelancers and online businesses need a business license?",
        a: "Often yes, at the local level. Many cities require anyone doing business within city limits, including home-based and online businesses, to hold a general business license or tax registration. If you sell taxable goods or services you also need a state sales tax permit. Some cities exempt very small businesses, so check your city and county websites.",
      },
      {
        q: "What is the difference between a business license and a permit?",
        a: "The terms overlap, but a license generally authorizes you to operate a business or practice a profession, while a permit approves a specific activity or location, such as a building permit, health permit, sign permit or home occupation permit. Many businesses need both: a general license to operate plus permits for particular things they do.",
      },
      {
        q: "Is an LLC the same as a business license?",
        a: "No. Forming an LLC registers a legal entity with your state. It does not authorize you to carry out a regulated activity or satisfy local registration rules. After forming an LLC you still need any state professional licenses, local business licenses and tax registrations that apply. The LLC name should appear on those licenses.",
      },
      {
        q: "How long does it take to get a business license?",
        a: "A basic city business license or state sales tax permit can often be issued online within days. Professional and occupational licenses take longer because of exams, background checks or inspections, sometimes weeks or months. Health and building permits depend on inspection schedules. Start applications as soon as your business name and structure are settled.",
      },
      {
        q: "What happens if I operate without a business license?",
        a: "Consequences depend on the jurisdiction and the license. They can include fines, back fees, an order to stop operating, and difficulty enforcing contracts, especially for unlicensed contractors in states that bar them from suing for payment. Clients and platforms may also ask for license numbers. It is cheaper to get licensed upfront than to fix it later.",
      },
      {
        q: "Do business licenses expire?",
        a: "Many do. The SBA notes that some licenses expire and recommends tracking renewal dates. City business licenses are commonly renewed every year, while professional licenses may renew every one to three years and often require continuing education. Renewal fees are sometimes based on the previous year's gross receipts, so keep good invoicing records.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To get a business license, identify every agency that regulates your activity (federal, state, county and city), choose your business structure and name, get an EIN, then apply to each agency online or in person and pay its fee. Most small businesses need a local business license plus a state sales tax permit; regulated trades also need a professional license.</p>

<p>Working out how to get a business license is confusing because there is no single license in the United States. Instead, you collect the specific approvals your activity and location require. A home-based copywriter might need only a city registration, while a food truck needs a health permit, a fire inspection and a vending permit on top. This guide shows you how to find what applies to you, the order to apply in, what a business license costs, and how to keep licenses current. Once you are licensed, you can start billing with our <a href="/invoice-generator">free invoice generator</a> and add license numbers to every invoice.</p>

<p>This is general information, not legal advice. Always confirm requirements with the agencies that issue them.</p>

<h2>Federal, state and local: the three levels of licensing</h2>

<p>The <a href="https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" target="_blank" rel="noopener noreferrer">SBA guide to licenses and permits</a> splits requirements into three levels. Most businesses deal with state and local only.</p>

<h3>Federal licenses</h3>
<p>You need a federal license only if a federal agency regulates your activity. The SBA lists examples including agriculture (USDA), alcohol (TTB), aviation (FAA), firearms and explosives (ATF), commercial fishing (NOAA Fisheries), broadcasting (FCC) and oversize or overweight vehicles (DOT, with permits issued by states). A typical freelancer or service business needs no federal license.</p>

<h3>State licenses and registrations</h3>
<p>States regulate a broader range of activities. Common state-level requirements include:</p>
<ul>
<li><strong>Professional and occupational licenses:</strong> contractors, electricians, plumbers, cosmetologists, real estate agents, accountants, health practitioners and many more.</li>
<li><strong>Sales tax permit (seller's permit):</strong> needed if you sell taxable goods or services. Our guide to <a href="/blog/sales-tax-nexus">sales tax nexus</a> explains when out-of-state sales trigger registration.</li>
<li><strong>Employer registrations:</strong> state withholding and unemployment insurance accounts once you hire.</li>
<li><strong>Entity registration:</strong> if you form an LLC or corporation. See <a href="/blog/how-to-start-an-llc">how to start an LLC</a>.</li>
</ul>

<h3>County and city licenses</h3>
<p>The SBA notes that counties and cities often regulate activities such as construction, plumbing, restaurants, retail, dry cleaning and vending machines. Many cities also require a general business license or business tax registration from anyone operating within city limits, including home-based businesses. Zoning rules may require a home occupation permit if clients visit or you store stock at home.</p>

<h2>How to get a business license: 8 steps</h2>

<ol>
<li><strong>Define what you do and where.</strong> Write one sentence: "I install residential HVAC systems in Maricopa County" or "I sell handmade candles online from my apartment in Denver". Activity and location drive everything else.</li>
<li><strong>Choose your structure and name.</strong> Licenses are issued to a legal person or entity, so settle on sole proprietor, LLC or corporation first, and register a DBA if you trade under another name. See <a href="/blog/what-is-a-dba">what a DBA is</a>.</li>
<li><strong>Get an EIN.</strong> Many applications ask for one, and it is free from the IRS. Follow our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Check federal requirements.</strong> Compare your activity with the SBA's federal list. If nothing matches, move on.</li>
<li><strong>Check state requirements.</strong> Start with your Secretary of State and state licensing board websites, and your state revenue department for sales tax.</li>
<li><strong>Check county and city requirements.</strong> Search your city's business licensing page and your county clerk's site. Call the city if your activity is unusual; clerks get these questions daily.</li>
<li><strong>Apply and pay.</strong> Submit each application with supporting documents: ID, entity documents, EIN, proof of insurance or bonding, exam results and lease or zoning approval where required.</li>
<li><strong>Record license numbers and renewal dates.</strong> The SBA notes some licenses expire. Put every renewal date in your calendar with a reminder 60 days before.</li>
</ol>

<h2>Common licenses by business type</h2>

<table>
<thead>
<tr><th>Business type</th><th>Typical licenses and permits</th><th>Usually issued by</th></tr>
</thead>
<tbody>
<tr><td>Freelance writer, designer or consultant</td><td>General business license or tax registration</td><td>City or county</td></tr>
<tr><td>Online store selling physical goods</td><td>Sales tax permit, local business license, home occupation permit</td><td>State revenue department, city</td></tr>
<tr><td>Electrician, plumber, HVAC</td><td>State or local trade license, contractor registration, permits per job</td><td>State licensing board, city building department</td></tr>
<tr><td>Cleaning or lawn care</td><td>Local business license; sales tax permit in states that tax these services</td><td>City or county, state</td></tr>
<tr><td>Home bakery or food business</td><td>Cottage food registration or health permit, food handler card</td><td>State or county health department</td></tr>
<tr><td>Salon or barber</td><td>Individual cosmetology license, establishment license</td><td>State board of cosmetology</td></tr>
<tr><td>Brewery or liquor retail</td><td>Federal TTB permit, state and local alcohol licenses</td><td>TTB, state ABC board</td></tr>
</tbody>
</table>

<p>Industry-specific invoicing tips are in our guides for <a href="/blog/electrician-invoice-template">electricians</a> and <a href="/blog/cleaning-service-invoice-template">cleaning services</a>.</p>

<h2>What does a business license cost?</h2>

<p>The SBA does not publish fees because they vary by business activity, issuing agency, location and government rules. As a rule of thumb, as of 2026:</p>
<ul>
<li><strong>General city or county licenses</strong> are usually the cheapest item, typically a flat annual fee, though some cities scale the fee with gross receipts or headcount.</li>
<li><strong>State sales tax permits</strong> are free or low cost in many states, though some require a security deposit for higher-risk sellers.</li>
<li><strong>Professional and trade licenses</strong> cost the most once you include exams, background checks, surety bonds, required insurance and continuing education.</li>
<li><strong>Permits</strong> such as health or building permits are charged per inspection, location or job.</li>
</ul>

<h2>Worked example: budgeting licenses for a mobile detailing business</h2>

<p>Andre is starting a mobile car detailing business as a single-member LLC. He lists every approval he needs and phones each office to get the current fee. Using the figures he was quoted (illustrative, not national averages), his budget looks like this:</p>

<table>
<thead>
<tr><th>Item</th><th>Agency</th><th>Fee quoted</th></tr>
</thead>
<tbody>
<tr><td>City business license (annual)</td><td>City</td><td>$75</td></tr>
<tr><td>Home occupation permit (no customers on site)</td><td>City planning</td><td>$50</td></tr>
<tr><td>State sales tax permit</td><td>State revenue department</td><td>$0</td></tr>
<tr><td>Stormwater discharge approval for mobile washing</td><td>County environmental office</td><td>$120</td></tr>
<tr><td><strong>First-year licensing total</strong></td><td></td><td><strong>$245</strong></td></tr>
</tbody>
</table>

<p>$75 + $50 + $0 + $120 = $245. If the city charged its license fee as 0.1% of gross receipts instead, and Andre billed $60,000 in his first year, that line would be $60,000 x 0.001 = $60. Either way, he adds the license cost to his overheads before setting prices, and builds it into his <a href="/blog/small-business-budget">small business budget</a>.</p>

<h2>License numbers on invoices and estimates</h2>

<p>Many states require licensed contractors to show their license number on contracts, estimates and invoices, and in advertising. Even where it is not required, a license number reassures clients and speeds up approval in procurement departments. Put it in the business details block under your name, alongside your contact details and, where relevant, your sales tax permit number.</p>

<p>Keep your licensing tidy in your paperwork:</p>
<ul>
<li>Show the license number on <a href="/blog/estimate-template">estimates</a>, contracts and invoices.</li>
<li>Charge sales tax only once you hold a permit; use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> for the amount.</li>
<li>Number invoices consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a>; auditors and licensing boards may ask for records.</li>
<li>Choose a clean layout, such as the <a href="/invoice-templates/classic">classic invoice template</a>, with room for license and permit numbers.</li>
</ul>

<h2>Documents to gather before you apply</h2>

<p>Applications go faster when everything is ready in one folder. Most agencies ask for some combination of the following:</p>
<ul>
<li><strong>Owner identification:</strong> a government ID for each owner, and sometimes a Social Security number for background checks.</li>
<li><strong>Entity documents:</strong> approved articles of organization or incorporation, your operating agreement or bylaws, and any DBA certificate.</li>
<li><strong>Tax identifiers:</strong> your EIN confirmation letter and, once issued, your state sales tax permit number.</li>
<li><strong>Location proof:</strong> a lease, property deed or home occupation approval showing you can operate at the address.</li>
<li><strong>Qualification evidence:</strong> exam results, education transcripts or proof of experience for professional and trade licenses.</li>
<li><strong>Insurance and bonds:</strong> certificates of general liability or workers' compensation insurance, and surety bonds where a licensing board requires them.</li>
<li><strong>Inspection approvals:</strong> fire, health or building inspection sign-offs for premises-based businesses.</li>
</ul>
<p>Scan everything as PDF and keep the license certificates themselves in the same folder once issued. Some licenses must also be displayed physically at your place of business or carried in a work vehicle. Keep digital copies handy too, because commercial clients and online marketplaces increasingly ask for license and insurance certificates before they will approve you as a vendor.</p>

<h2>Special cases: home-based, online and multi-city businesses</h2>

<h3>Home-based businesses</h3>
<p>Working from home does not exempt you from licensing. Many cities still expect a general business license, and zoning rules may limit customer visits, signage, employees working on site, parking and storage of equipment or stock. A home occupation permit is the usual way to confirm you comply. If you rent, check your lease and any homeowners association rules too, as they can be stricter than the city's.</p>

<h3>Online and remote businesses</h3>
<p>Selling online does not move your business onto the internet for licensing purposes: you are licensed where you are physically based. Sales tax is the exception that reaches further. Once your sales into another state pass that state's economic nexus threshold, you may need to register and collect tax there, even with no physical presence. Track sales by destination state from your invoices so you can see when a threshold is getting close.</p>

<h3>Several cities or service areas</h3>
<p>A contractor or mobile service working across several cities may need a license in each city where work is performed, not only where the business is based. Some states have reciprocity arrangements for trade licenses, but most local registrations do not transfer. List every city you regularly work in and check each one; a single job outside your home city can trigger a requirement.</p>

<h3>Hiring your first employee</h3>
<p>Your first hire adds registrations rather than licenses: state income tax withholding, state unemployment insurance and, in most states, workers' compensation coverage. Set these up before the first payday, not after it.</p>

<h2>Renewals and staying compliant</h2>

<p>Licenses are not a one-time task. Typical ongoing obligations include annual city renewals, professional license renewals with continuing education, updating the agency when you move or change your business name, and filing sales tax returns on schedule even when you owe nothing. If a renewal fee depends on last year's gross receipts, your <a href="/blog/invoice-tracker-spreadsheet">invoice tracker</a> becomes the source for that number.</p>

<p>If you are starting part time, read <a href="/blog/hobby-vs-business">hobby vs business</a>: once you are trying to make a profit, licensing and tax rules generally apply even if the business is small.</p>

<h2>Start invoicing as a licensed business</h2>

<p>Now you know how to get a business license: map your activity against federal, state and local rules, apply to each agency, and track renewals. With licenses in hand, open the <a href="/invoice-generator">invoice generator</a>, add your license and permit numbers to your business details, and send compliant invoices from day one. The <a href="/user-guide">user guide</a> shows where each field goes. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
  {
    slug: "how-to-pay-yourself-as-a-business-owner",
    title: "How to Pay Yourself as a Business Owner: Draw vs Salary",
    description:
      "How to pay yourself as a business owner: owner's draw vs salary by business type, how much to take, the tax impact, and a worked example with real 2026 numbers.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "directors-loan-account",
      "s-corp-vs-llc",
      "self-employment-tax",
      "cash-flow-management",
      "retained-earnings",
    ],
    faqs: [
      {
        q: "What is an owner's draw?",
        a: "An owner's draw is money a sole proprietor, partner or LLC member takes out of the business for personal use. It is not a wage and not a business expense, so it does not reduce taxable profit. You are taxed on the business's profit whether you draw it or leave it in the account. Draws simply reduce your owner's equity on the balance sheet.",
      },
      {
        q: "Can I pay myself a salary from my LLC?",
        a: "It depends on how the LLC is taxed. A single-member LLC taxed by default is a disregarded entity, so you take draws, not a W-2 salary. If the LLC elects S corporation or C corporation tax treatment, you become an employee of your own company and can be paid a salary through payroll with withholding. Partners in a multi-member LLC take draws or guaranteed payments.",
      },
      {
        q: "How much should I pay myself as a business owner?",
        a: "Start from profit, not revenue. A common approach is to set aside tax first, keep a cash buffer of a few months' expenses in the business, then pay yourself a regular amount you could sustain in a slow month. Review it quarterly and take a top-up distribution when profit is ahead. S corporation owners must also pay themselves a reasonable salary for the work they do.",
      },
      {
        q: "Is an owner's draw taxable?",
        a: "The draw itself is not a separate taxable event. Sole proprietors and partners pay income tax and self-employment tax on their share of business profit, whether or not they withdraw it. So drawing $50,000 from a business that made $80,000 profit means you are still taxed on $80,000. That is why you need to set aside tax from every payment you receive.",
      },
      {
        q: "What is reasonable compensation for an S corp owner?",
        a: "The IRS requires S corporation shareholders who work in the business to receive reasonable wages before taking non-wage distributions. Factors the IRS lists include your training and experience, duties, time spent, what comparable businesses pay for similar services, and whether the company's income comes from your personal services. Paying yourself an unrealistically low salary risks reclassification and back employment taxes.",
      },
      {
        q: "Should I pay myself weekly, monthly or quarterly?",
        a: "Most owners find a fixed monthly or twice-monthly payment easiest because it mirrors a paycheck and makes personal budgeting predictable. Seasonal businesses often pay a lower base amount all year and take larger distributions after their busy season. Whatever the schedule, keep it consistent and record each transfer, so your books show exactly what you took and when.",
      },
      {
        q: "Can I pay myself a draw from a corporation?",
        a: "No. Owners who work in a C corporation or S corporation are generally employees and must be paid wages through payroll. They can also receive dividends or S corporation distributions as shareholders. Moving money out of a corporation informally as a draw can be treated as wages or dividends by the IRS and lead to back taxes, so use payroll and formal distributions.",
      },
      {
        q: "Should I pay myself before paying business bills?",
        a: "Pay committed business costs and set aside tax first, because unpaid suppliers or tax penalties cost you more later. But do not leave yourself unpaid indefinitely; build a fixed owner's pay line into your budget and price your work so it is covered. Many owners use separate bank accounts for tax, operating costs and owner's pay to make the split automatic.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> How you pay yourself as a business owner depends on your structure. Sole proprietors, partners and default LLCs take an owner's draw, transferring profit to themselves and paying tax on the full profit. S corporation and C corporation owners who work in the business must be paid a salary through payroll, and can take distributions or dividends on top.</p>

<p>Figuring out how to pay yourself is one of the first real money decisions a new owner faces, and getting it wrong causes two classic problems: a surprise tax bill, or a business account that runs dry the month a big client pays late. This guide explains owner's draw vs salary, which method applies to each business type, how much you can safely take, and walks through a worked example with real 2026 figures. Before you can pay yourself, you need money coming in; a clear, prompt invoice from our <a href="/invoice-generator">free invoice generator</a> is where that starts.</p>

<p>The tax rules below are US federal rules; in other countries the same principles apply but rates and terms differ. This is general information, not tax advice.</p>

<h2>Owner's draw vs salary at a glance</h2>

<table>
<thead>
<tr><th>Business type (US tax treatment)</th><th>How you pay yourself</th><th>Deductible to the business?</th><th>How you are taxed</th></tr>
</thead>
<tbody>
<tr><td>Sole proprietor</td><td>Owner's draw</td><td>No</td><td>Income tax and self-employment tax on all net profit</td></tr>
<tr><td>Single-member LLC (default)</td><td>Owner's draw</td><td>No</td><td>Same as sole proprietor, on Schedule C</td></tr>
<tr><td>Partnership or multi-member LLC</td><td>Draws and guaranteed payments</td><td>Guaranteed payments yes, draws no</td><td>Each partner taxed on their share via Schedule K-1</td></tr>
<tr><td>S corporation (including LLC electing S status)</td><td>Reasonable W-2 salary plus distributions</td><td>Salary yes, distributions no</td><td>Payroll tax on salary; income tax on salary and profit share</td></tr>
<tr><td>C corporation</td><td>W-2 salary plus optional dividends</td><td>Salary yes, dividends no</td><td>Corporate tax on profit, then personal tax on salary and dividends</td></tr>
</tbody>
</table>

<p>If you are still choosing a structure, our guides on <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> explain the trade-offs, and our new guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a> covers the setup.</p>

<h2>How the owner's draw works</h2>

<p>An owner's draw is simply a transfer from the business account to your personal account. In your books it is recorded against owner's equity, not as an expense, so it does not reduce your profit. That is the key point many new owners miss: you are taxed on profit, not on what you withdraw.</p>

<p>Sole proprietors and single-member LLC owners pay <a href="/blog/self-employment-tax">self-employment tax</a> of 15.3% on 92.35% of net earnings (12.4% Social Security up to the 2026 wage base of $184,500, plus 2.9% Medicare with no cap), plus ordinary income tax. None of that is withheld, so you must make <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a> or risk an <a href="/blog/estimated-tax-penalty">estimated tax penalty</a>.</p>

<p>Advantages of the draw method:</p>
<ul>
<li>Flexible: take more in good months and less in lean ones, which suits seasonal and project-based work.</li>
<li>No payroll setup, payroll software or quarterly payroll filings.</li>
<li>Simple bookkeeping: one equity account tracks exactly what you took and when.</li>
</ul>
<p>The risk is that flexibility becomes inconsistency. Without a rule, owners either drain the account or never pay themselves at all.</p>

<h2>How paying yourself a salary works</h2>

<p>Once your business is taxed as a corporation, you are an employee of it. You run payroll, withhold income tax and FICA, and the company pays the employer share. The IRS is explicit that S corporation shareholder-employees must receive reasonable compensation before taking non-wage distributions. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues" target="_blank" rel="noopener noreferrer">IRS guidance on S corporation compensation</a> lists factors such as your training and experience, duties, time devoted to the business, what comparable businesses pay for similar services, and whether the company's income comes from your personal work.</p>

<p>Why bother? In an S corporation, profit paid out as distributions on top of a reasonable salary is not subject to self-employment or payroll tax. Once profit is well above what a reasonable salary would be, that saving can outweigh the cost of payroll software, a separate return and extra bookkeeping. Below that point, the draw method is usually simpler and cheaper.</p>

<h2>How much should you pay yourself?</h2>

<p>Use a profit-first sequence rather than paying yourself whatever is left:</p>

<ol>
<li><strong>Calculate trailing profit.</strong> Look at the last three to six months of revenue minus expenses from your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>.</li>
<li><strong>Set aside tax.</strong> Move a fixed percentage of every payment received into a separate tax account. Many sole proprietors use 25% to 30% of profit as a starting estimate; refine it with your actual bracket.</li>
<li><strong>Fund a cash buffer.</strong> Keep a few months of fixed business costs in the operating account, so a late client payment does not stop you paying rent or suppliers.</li>
<li><strong>Set a base pay amount.</strong> Pick a monthly figure you could sustain in your slowest month and pay it on a fixed date.</li>
<li><strong>Take quarterly top-ups.</strong> When the quarter closes ahead of plan, take an extra draw or distribution from the surplus.</li>
<li><strong>Review every quarter.</strong> Raise base pay as profit grows, and revisit your structure if profit becomes large enough for an S election to pay off.</li>
</ol>

<p>Late-paying clients are the biggest threat to a steady owner's paycheck. Tighten <a href="/blog/invoice-payment-terms">payment terms</a>, send <a href="/blog/payment-reminder-emails">payment reminders</a> on schedule, and read our guide to <a href="/blog/cash-flow-management">cash flow management</a>.</p>

<h2>Worked example: a sole proprietor designer in 2026</h2>

<p>Priya is a sole proprietor graphic designer. In the first half of 2026 her invoices total $72,000 and her business expenses (software, contractor help, equipment) total $12,000.</p>

<table>
<thead>
<tr><th>Step</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Six-month profit</td><td>$72,000 - $12,000</td><td>$60,000</td></tr>
<tr><td>Monthly profit</td><td>$60,000 / 6</td><td>$10,000</td></tr>
<tr><td>Tax set-aside at 28%</td><td>$10,000 x 0.28</td><td>$2,800</td></tr>
<tr><td>Buffer top-up until she holds 3 months of $1,500 fixed costs ($4,500)</td><td>Fixed amount per month for 3 months</td><td>$1,500</td></tr>
<tr><td>Available for owner's draw</td><td>$10,000 - $2,800 - $1,500</td><td>$5,700</td></tr>
</tbody>
</table>

<p>Priya sets her base draw at $5,000 a month and leaves the remaining $700 in the business toward quarterly top-ups. After three months the buffer is funded, so her available amount rises to $10,000 - $2,800 = $7,200 a month, and she can raise her base draw or take a quarterly distribution.</p>

<p>Her self-employment tax check for the half year: $60,000 x 0.9235 = $55,410 of net earnings; $55,410 x 0.153 = $8,477.73. That is part of what the 28% set-aside ($2,800 x 6 = $16,800) has to cover alongside income tax. Even though she drew only $30,000 in those six months, she owes tax on the full $60,000 profit, which is exactly why the set-aside comes first.</p>

<h2>Worked example: when an S corp salary starts to pay off</h2>

<p>Suppose Priya's full-year profit grows to $120,000 and she elects S corporation status. Comparable in-house designers in her market earn about $70,000, so she sets a reasonable salary of $70,000 and takes the remaining $50,000 as distributions.</p>

<table>
<thead>
<tr><th>Item</th><th>Sole proprietor</th><th>S corporation</th></tr>
</thead>
<tbody>
<tr><td>Earnings subject to Social Security and Medicare</td><td>$120,000 x 0.9235 = $110,820</td><td>$70,000 salary</td></tr>
<tr><td>Combined 15.3% tax</td><td>$110,820 x 0.153 = $16,955.46</td><td>$70,000 x 0.153 = $10,710.00</td></tr>
<tr><td>Difference before extra costs</td><td colspan="2">$16,955.46 - $10,710.00 = $6,245.46</td></tr>
</tbody>
</table>

<p>That gross saving shrinks once you subtract payroll software, a separate S corporation return, state fees and any state-level tax on S corporations. If those costs came to $2,500, the net benefit would be $6,245.46 - $2,500 = $3,745.46, before smaller income tax effects. At lower profit the saving can disappear entirely, so run your own numbers with an accountant before electing.</p>

<h2>Set up a simple owner pay system</h2>

<p>Most owners who pay themselves reliably use a few separate bank accounts, so the split happens by rule rather than by mood:</p>
<ol>
<li><strong>Income account:</strong> every client payment lands here.</li>
<li><strong>Tax account:</strong> on a fixed day, move your tax percentage of new deposits here, and touch it only to pay estimates.</li>
<li><strong>Operating account:</strong> funds bills, subscriptions and suppliers, and holds your cash buffer.</li>
<li><strong>Owner's pay transfer:</strong> on payday, move your base pay to your personal account, recorded as a draw or run through payroll.</li>
</ol>
<p>Twice a month is a common rhythm for many small owners: it matches typical client payment cycles and keeps each transfer small enough to be painless. Reconcile the accounts monthly so your books show exactly what went to tax, operations and you; our guide to <a href="/blog/bank-reconciliation">bank reconciliation</a> walks through the process.</p>

<h2>Paying yourself across different structures</h2>

<h3>Partnerships and multi-member LLCs</h3>
<p>Partners cannot be W-2 employees of their own partnership. The IRS says they report income through Form 1065 and Schedule K-1. Partners commonly take guaranteed payments for work they do (deductible to the partnership, taxable to the partner) plus draws against their profit share. Your operating or partnership agreement should state how and when each is paid.</p>

<h3>S corporations</h3>
<p>Run payroll for a reasonable salary on a regular schedule, then take distributions from remaining profit in proportion to ownership. Keep a note of how you set the salary, such as comparable job pay data, in case the IRS asks.</p>

<h3>C corporations</h3>
<p>Salary is deductible to the company; dividends are paid from after-tax profit and taxed again personally. Avoid informal transfers. The IRS warns that loans to officers need real loan terms, or they may be treated as wages or dividends.</p>

<h2>Mistakes to avoid when paying yourself</h2>

<ul>
<li><strong>Treating draws as expenses:</strong> they never reduce taxable profit. Record them in an owner's draw or equity account. See our guide to <a href="/blog/chart-of-accounts">setting up a chart of accounts</a>.</li>
<li><strong>Paying personal bills from the business account:</strong> transfer your pay first, then spend from your personal account. Mixing funds also undermines LLC liability protection.</li>
<li><strong>Skipping the tax set-aside:</strong> the most common cause of April panic for freelancers.</li>
<li><strong>Underpaying an S corp salary:</strong> it invites IRS reclassification and back payroll taxes.</li>
<li><strong>Paying yourself nothing for too long:</strong> if the business can only survive because you take no pay, the problem is pricing or costs, not your paycheck. Recalculate your rates so they cover a market-level wage for your own time, your taxes and your overheads, then raise prices for new clients first and existing clients at their next renewal.</li>
<li><strong>Forgetting state taxes:</strong> most states tax business profit through your personal return too, so include state income tax in your set-aside percentage.</li>
<li><strong>No paper trail:</strong> label every transfer ("Owner draw, March 1") so your bookkeeper or accountant can classify it correctly at year end, and keep draws separate from reimbursements for business expenses you paid personally, which are not draws at all.</li>
<li><strong>Ignoring retained earnings:</strong> money left in a corporation builds <a href="/blog/retained-earnings">retained earnings</a>; plan deliberately how much to keep for growth.</li>
</ul>

<h2>Keep the money coming in</h2>

<p>The best plan for how to pay yourself only works if clients pay on time. Send clear, itemized invoices the day work is delivered, with payment details and a due date, using the <a href="/invoice-generator">invoice generator</a>. A clean design such as the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps the focus on what is owed and when. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "net-30-vendor-accounts",
    title: "Net 30 Accounts: Best Net 30 Vendors to Build Business Credit",
    description:
      "Net 30 accounts explained: how net 30 vendors help build business credit, what you need to apply, how reporting works, and a step-by-step plan to start.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "business-credit-score",
      "invoice-payment-terms",
      "customer-credit-policy",
      "how-to-get-an-ein",
    ],
    faqs: [
      {
        q: "What is a net 30 account?",
        a: "A net 30 account is a trade credit line from a supplier that lets your business buy now and pay the full invoice within 30 days, usually without interest. Many suppliers report payment history on these accounts to business credit bureaus, so paying on time helps a new business build a credit file separate from the owner's personal credit.",
      },
      {
        q: "Do net 30 accounts really build business credit?",
        a: "Only if the vendor reports your payments to a business credit bureau such as Dun & Bradstreet, Experian Business or Equifax Business. Not all suppliers report, and reporting practices change, so confirm with each vendor before you rely on it. You also need a D-U-N-S number or an established business profile for the bureau to match the reported payments to your company.",
      },
      {
        q: "What do I need to open a net 30 account?",
        a: "Most vendors ask for a registered business name, a business address and phone number, an EIN, and sometimes a D-U-N-S number and business bank account. Some approve new businesses on a small first order, while others want to see a few months of operating history or ask you to prepay your first orders. Having a consistent name and address everywhere speeds approval.",
      },
      {
        q: "Is a D-U-N-S number free?",
        a: "Yes. Dun & Bradstreet says there is no cost to request and receive a D-U-N-S Number. In most cases it arrives within 30 business days, and you can pay for expedited delivery, which takes up to eight business days. Many large companies and government agencies also ask for a D-U-N-S number on supplier applications, so it is worth getting early.",
      },
      {
        q: "Do net 30 vendors check personal credit?",
        a: "Many starter net 30 vendors evaluate your business profile rather than pulling the owner's personal credit, which is part of their appeal. Others may ask for a personal guarantee or check personal credit for larger limits. Read the application terms before you submit, and ask whether a hard inquiry will be made on your personal file.",
      },
      {
        q: "What happens if I pay a net 30 account late?",
        a: "Late payments can be reported to business credit bureaus and drag down scores such as the Dun & Bradstreet PAYDEX, which rewards paying on or before the due date. The vendor may also charge late fees, cut your credit limit or move you back to prepay. Paying early, not just on time, tends to produce the best payment scores.",
      },
      {
        q: "How long does it take to build business credit with net 30 accounts?",
        a: "Expect several months. Each vendor reports on its own schedule, and bureaus generally need several reported trade lines before they produce a meaningful score. Opening a handful of reporting accounts, making small regular purchases and paying early each month gives the fastest, most reliable result. There is no legitimate shortcut that skips the payment history.",
      },
      {
        q: "Should I offer net 30 terms to my own customers?",
        a: "You can, but it means you finance your customers for a month. Offer net 30 to established clients with a good record, use a written credit policy, and invoice promptly with the due date clearly shown. Consider deposits or shorter terms for new clients, and an early payment discount if cash flow matters more than margin.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Net 30 accounts are supplier credit lines that let your business buy now and pay in full within 30 days. When the vendor reports your on-time payments to business credit bureaus such as Dun & Bradstreet, Experian Business or Equifax Business, those accounts build a business credit file separate from your personal credit.</p>

<p>For a new company, net 30 accounts are one of the most practical ways to start a business credit history. A good payment record with a few reporting suppliers can later help you qualify for higher limits, business credit cards and loans without relying on your personal credit. This guide explains how net 30 vendors work, what you need before you apply, which kinds of suppliers commonly offer starter terms, and a step-by-step plan to build credit. If you also extend terms to your own customers, our <a href="/invoice-generator">free invoice generator</a> lets you set net 30 due dates on every invoice.</p>

<p>We have not been paid by any vendor named here, and vendor policies change, so confirm terms and credit reporting directly with each supplier before applying.</p>

<h2>What a net 30 account is</h2>

<p>"Net 30" is a payment term: the full (net) amount of the invoice is due 30 days after the invoice date. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> covers net 30 alongside other common terms, and the related guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 terms</a> covers longer options.</p>

<p>A net 30 vendor account is the supplier side of that arrangement. Instead of paying by card at checkout, you receive an invoice and pay it within 30 days. For the supplier it is trade credit; for you it is a short, usually interest-free loan, and, if reported, a line on your business credit file.</p>

<h2>Why net 30 accounts matter for business credit</h2>

<p>Business credit bureaus build reports from data that suppliers and lenders send them. A brand-new LLC has no such data. Net 30 accounts are often the first trade lines a new business can get, because suppliers extend small limits and see low risk.</p>

<p>The best-known business score, the Dun & Bradstreet PAYDEX, is based on how promptly you pay suppliers relative to terms, so paying early helps more than paying on the due date. Our guide to the <a href="/blog/business-credit-score">business credit score</a> explains the main bureaus and scores.</p>

<table>
<thead>
<tr><th>Bureau</th><th>Identifier it uses</th><th>What it emphasises</th></tr>
</thead>
<tbody>
<tr><td>Dun & Bradstreet</td><td>D-U-N-S Number</td><td>Payment timeliness against terms (PAYDEX)</td></tr>
<tr><td>Experian Business</td><td>Business name, address and EIN matching</td><td>Payment history, credit usage, public records</td></tr>
<tr><td>Equifax Business</td><td>Business name, address and EIN matching</td><td>Payment history and risk of serious delinquency</td></tr>
</tbody>
</table>

<h2>What you need before applying</h2>

<p>Vendors want to see a real, consistent business. Get these in place first:</p>
<ul>
<li><strong>A registered business:</strong> an LLC or corporation is easiest. See <a href="/blog/how-to-start-an-llc">how to start an LLC</a>. If you trade under another name, register it; see <a href="/blog/what-is-a-dba">what a DBA is</a>.</li>
<li><strong>An EIN:</strong> free from the IRS. See <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>A D-U-N-S Number:</strong> Dun & Bradstreet states on its <a href="https://www.dnb.com/en-us/smb/duns/get-a-duns.html" target="_blank" rel="noopener noreferrer">D-U-N-S Number request page</a> that there is no cost to get one; it usually arrives within 30 business days, or up to eight business days if you pay for expedited service.</li>
<li><strong>A business bank account:</strong> in the business's exact legal name. See <a href="/blog/business-bank-account-for-freelancers">business bank accounts for freelancers</a>.</li>
<li><strong>Consistent contact details:</strong> the same name, address and phone number on your state filing, bank, website and bureau profiles. Mismatches are a common reason trade lines fail to attach to your file.</li>
<li><strong>Any required licenses:</strong> see <a href="/blog/how-to-get-a-business-license">how to get a business license</a>.</li>
</ul>

<h2>Types of net 30 vendors to consider</h2>

<p>Starter net 30 vendors tend to be suppliers of things almost every business buys, which makes it easy to place small, regular orders. Businesses frequently start with:</p>

<table>
<thead>
<tr><th>Vendor category</th><th>Examples often cited</th><th>Typical use</th></tr>
</thead>
<tbody>
<tr><td>Shipping and packaging supplies</td><td>Uline</td><td>Boxes, mailers, tape, warehouse supplies</td></tr>
<tr><td>Office supplies</td><td>Quill and other office suppliers</td><td>Paper, ink, breakroom items</td></tr>
<tr><td>Industrial and maintenance supplies</td><td>Grainger and similar distributors</td><td>Tools, safety gear, facility supplies</td></tr>
<tr><td>Business services with invoiced billing</td><td>Marketing, printing and software vendors</td><td>Recurring monthly services</td></tr>
</tbody>
</table>

<p>Approval rules differ. Some vendors offer net 30 at checkout on a first order; others require a minimum first purchase or a few months of operating history, and some ask brand-new businesses to prepay initial orders. Reporting differs too: a vendor may report to one bureau but not another, and practices change over time. Ask each supplier directly which bureaus it reports to before you count on it.</p>

<p>Be cautious with "credit builder" programs that charge a membership fee for net 30 terms on products you would not otherwise buy. Some are legitimate, but you are paying for the reporting, so weigh the fee against simply buying supplies you already need from a reporting vendor.</p>

<h3>How to apply for your first net 30 account</h3>
<p>The application itself is usually short. Expect to give your legal business name, any DBA, business address and phone, EIN, D-U-N-S Number if you have one, years in business, and a contact for accounts payable. Some vendors also ask for a bank reference or trade references. Apply from a business email address on your own domain if you can, and make sure the address you enter matches your state filing exactly, including suite numbers. If a vendor declines you or asks for prepayment, place a few prepaid orders, then ask again: many suppliers reconsider once they have seen several months of purchases from you. Keep a simple list of every account, its limit, due-date pattern and which bureaus it reports to.</p>

<h2>How to build business credit with net 30 accounts: 7 steps</h2>

<ol>
<li><strong>Set up the foundations.</strong> Register the business, get an EIN and D-U-N-S Number, and open a business bank account in the same name.</li>
<li><strong>Match your details everywhere.</strong> Use identical name, address and phone on every application and bureau profile.</li>
<li><strong>Open two or three reporting accounts.</strong> Choose suppliers you will genuinely use, and confirm which bureaus they report to.</li>
<li><strong>Make small, regular purchases.</strong> A modest order each month creates steady reported activity.</li>
<li><strong>Pay early.</strong> Pay well before day 30; early payment typically scores best.</li>
<li><strong>Check your files.</strong> After a few months, check that the trade lines appear on your Dun & Bradstreet, Experian and Equifax business reports, and dispute errors.</li>
<li><strong>Step up.</strong> With several positive trade lines, apply for larger vendor limits, a business credit card or a line of credit. Our guide to <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a> covers the next step.</li>
</ol>

<h2>Worked example: using net 30 terms to manage cash flow</h2>

<p>Leo runs a small e-commerce candle business. On October 1 he places a $640 packaging order on net 30 terms. He sells the finished candles to a gift shop on October 5, invoicing $2,400 on net 15 terms, and pays his supplier early on October 20.</p>

<table>
<thead>
<tr><th>Date</th><th>Event</th><th>Cash in</th><th>Cash out</th></tr>
</thead>
<tbody>
<tr><td>Oct 1</td><td>Packaging order on net 30 (due Oct 31)</td><td>$0</td><td>$0</td></tr>
<tr><td>Oct 5</td><td>Invoice gift shop $2,400, net 15 (due Oct 20)</td><td>$0</td><td>$0</td></tr>
<tr><td>Oct 18</td><td>Gift shop pays</td><td>$2,400</td><td>$0</td></tr>
<tr><td>Oct 20</td><td>Leo pays supplier, 11 days early</td><td>$0</td><td>$640</td></tr>
<tr><td colspan="2"><strong>Net cash position</strong></td><td colspan="2"><strong>$2,400 - $640 = $1,760</strong></td></tr>
</tbody>
</table>

<p>Leo never had to front the $640 from his own pocket: the customer's payment arrived before the supplier's bill was due. He also paid 11 days early, which is the kind of behavior that builds a strong payment score. If his customer had paid late, he still had until October 31, which is why he offers his own customers shorter terms than he receives. Tracking how long cash is tied up between paying suppliers and collecting from customers helps you plan this timing.</p>

<h2>Net 30 accounts vs other ways to build business credit</h2>

<p>Net 30 accounts are usually the first rung, not the only one. Here is how they compare with the other common credit-building tools for a young business:</p>

<table>
<thead>
<tr><th>Tool</th><th>Typical entry barrier</th><th>Cost if paid on time</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Net 30 vendor account</td><td>Low: registered business, EIN, sometimes a D-U-N-S Number</td><td>Usually none</td><td>Building first trade lines</td></tr>
<tr><td>Business credit card</td><td>Moderate: often a personal credit check and personal guarantee</td><td>None if paid in full monthly; annual fee on some cards</td><td>Everyday spending and rewards</td></tr>
<tr><td>Business line of credit</td><td>Higher: operating history, revenue and a credit file</td><td>Interest on amounts drawn, plus fees</td><td>Covering cash gaps and seasonality</td></tr>
<tr><td>Term loan or SBA loan</td><td>Highest: financial statements, history, often collateral</td><td>Interest and fees over the term</td><td>Equipment, expansion, larger projects</td></tr>
</tbody>
</table>

<p>A sensible sequence is net 30 accounts first, a business credit card once a few trade lines are reporting, and a line of credit after you have around a year of revenue and a credit file lenders can review.</p>

<h3>Reading your payment score</h3>
<p>Payment-based scores look at when you paid relative to the due date. A business that always pays on day 30 shows as on time; one that pays on day 20 shows as early, which generally scores higher. Scores also depend on how many trade lines are reporting, so one perfect account is less persuasive than three good ones. Check each bureau's report separately, because a vendor that reports to only one bureau will not move the others.</p>

<h2>Offering net 30 terms to your own customers</h2>

<p>Once you understand net 30 from the buyer's side, you can use it as a seller. Offering net 30 can win larger B2B clients, but it means you wait a month or more for money you have already earned. Good practice:</p>
<ul>
<li>Write a <a href="/blog/customer-credit-policy">customer credit policy</a> that says who gets terms and what limit.</li>
<li>Show the invoice date, due date and "Net 30" clearly on every invoice. Our guide to <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a> covers the details.</li>
<li>Number invoices consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a> so customers can reference them on payment.</li>
<li>Consider an <a href="/blog/early-payment-discount">early payment discount</a> such as 2/10 net 30 if speed matters more than margin.</li>
<li>Chase overdue balances promptly, starting with a polite reminder on day one past due.</li>
</ul>

<h2>Common mistakes with net 30 accounts</h2>

<ul>
<li><strong>Assuming every vendor reports:</strong> many do not. Confirm before you buy.</li>
<li><strong>Applying everywhere at once:</strong> several small active accounts beat a long list of unused ones.</li>
<li><strong>Buying things you do not need:</strong> credit history is not worth wasted cash.</li>
<li><strong>Paying on day 30 or later:</strong> on time is good, early is better, late is damaging.</li>
<li><strong>Inconsistent business details:</strong> a mismatched address can stop payments attaching to your file.</li>
</ul>

<h2>Invoice your customers on net 30 terms</h2>

<p>Net 30 accounts help you build business credit and smooth cash flow on the buying side; clear net 30 invoices protect you on the selling side. Create professional invoices with due dates, payment terms and your bank details in the <a href="/invoice-generator">invoice generator</a>, or pick a polished layout from the <a href="/invoice-templates/startup">startup invoice template</a> to match your new business. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
];
