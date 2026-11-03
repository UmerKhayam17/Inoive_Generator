import type { PostDraft } from "../blog";

export const ENTITY_SETUP_2026_POSTS: PostDraft[] = [
  {
    slug: "form-8832",
    title: "Form 8832: Entity Classification Election Explained",
    description:
      "Form 8832 explained: who files it, default LLC tax rules, the 75-day and 60-month limits, late election relief and when to use Form 2553 instead.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "s-corp-election-form-2553",
      "llc-tax-rate",
      "business-entity-types",
    ],
    faqs: [
      {
        q: "Do I need to file Form 8832 for a new LLC?",
        a: "Only if you want a classification different from the default. A new single-member LLC is automatically disregarded (taxed like a sole proprietorship) and a multi-member LLC is automatically a partnership. If either default suits you, do not file Form 8832. You file it when you want the LLC taxed as a corporation, or when an existing entity wants to change its classification. If your goal is S corporation status, file Form 2553 instead, because a timely Form 2553 is treated as also electing corporate classification.",
      },
      {
        q: "What is the difference between Form 8832 and Form 2553?",
        a: "Form 8832 chooses whether an eligible entity, such as an LLC, is taxed as a corporation, a partnership or a disregarded entity. Form 2553 elects S corporation status for an entity that is already, or is treated as, a corporation. An LLC that wants S corporation treatment normally files only Form 2553; the IRS instructions say an entity that timely files Form 2553 is deemed to have elected corporate classification. An LLC that wants to be a C corporation files Form 8832.",
      },
      {
        q: "How far back can a Form 8832 election take effect?",
        a: "Generally no more than 75 days before the date you file it, and no later than 12 months after the filing date. You choose the date on line 8; if you leave it blank, the election is effective on the date filed. If you missed the 75-day window, you may qualify for late election relief under Revenue Procedure 2009-41, which is available only if three years and 75 days have not passed since the requested effective date and the other conditions are met.",
      },
      {
        q: "How long does the IRS take to approve Form 8832?",
        a: "The instructions say the entity should generally receive a determination within 60 days of filing. The IRS mails an acceptance or nonacceptance letter to the address on the form. If you hear nothing after 60 days, the instructions suggest calling 1-800-829-0115 or writing to the service center. Keep proof of filing, such as a certified mail receipt or the IRS acceptance letter, with your permanent company records because you may need it years later.",
      },
      {
        q: "Can I change my LLC's tax classification back later?",
        a: "Yes, but the 60-month rule usually applies. After an election to change classification, an entity generally cannot change again by election for 60 months from the effective date, unless the IRS grants permission by private letter ruling, which is possible when more than 50% of the ownership has changed. An initial election by a newly formed entity effective on its formation date does not trigger the limit. Changing back can also cause a deemed liquidation with real tax costs.",
      },
      {
        q: "Can Form 8832 be filed online?",
        a: "No. Form 8832 is a paper form mailed to the IRS service center that matches the location of the entity's principal business. The IRS has updated the addresses since the 2013 revision of the form, so use the mailing table on the cover page of the current PDF from irs.gov. You must also attach a copy to the entity's federal return for the year of the election.",
      },
    ],
    content: `
<p>Form 8832 is the IRS form an eligible business entity, usually an LLC, files to choose how it is taxed: as a corporation, a partnership, or an entity disregarded from its owner. Most new LLCs never need it, because the default rules already give them sole-proprietor or partnership treatment. You file Form 8832 when you want something other than the default, most often C corporation taxation, or when an existing entity wants to change its classification.</p>

<p>The form itself is two pages, but the timing rules, the 60-month lock-in and the tax effects of switching catch many owners out. This guide covers who files, how to fill it in, the deadlines, late relief, and how the choice shows up on your invoices and books. It is general information, not tax advice; for your own facts, check with a CPA or enrolled agent before you mail anything.</p>

<h2>What is Form 8832 and who files it?</h2>
<p>The IRS calls Form 8832 the Entity Classification Election. Under the so-called check-the-box regulations, an "eligible entity" is a business entity that is not automatically a corporation. That covers LLCs, partnerships and many foreign entities. Entities formed as corporations under state law are already corporations and cannot use the form.</p>
<p>The <a href="https://www.irs.gov/forms-pubs/about-form-8832" target="_blank" rel="noopener noreferrer">IRS page for Form 8832</a> describes its purpose simply: an eligible entity uses it to elect how it will be classified for federal tax purposes. If you have not yet picked an entity type at all, start with our overview of <a href="/blog/business-entity-types">business entity types</a>.</p>

<h3>The default classification rules</h3>
<p>If you never file Form 8832, the IRS applies defaults:</p>
<table><thead><tr><th>Entity</th><th>Owners</th><th>Default federal tax treatment</th><th>Return filed</th></tr></thead><tbody>
<tr><td>Domestic LLC</td><td>One</td><td>Disregarded entity (treated like a sole proprietorship if owned by an individual)</td><td>Schedule C on the owner's Form 1040</td></tr>
<tr><td>Domestic LLC</td><td>Two or more</td><td>Partnership</td><td>Form 1065 plus a Schedule K-1 for each member</td></tr>
<tr><td>Foreign eligible entity</td><td>Two or more, at least one without limited liability</td><td>Partnership</td><td>Form 1065 if US filing is required</td></tr>
<tr><td>Foreign eligible entity</td><td>All members have limited liability</td><td>Corporation</td><td>Form 1120-F or none, depending on US activity</td></tr>
<tr><td>Foreign eligible entity</td><td>One owner without limited liability</td><td>Disregarded entity</td><td>Reported by the owner</td></tr>
</tbody></table>
<p>The defaults are why our guide to the <a href="/blog/llc-tax-rate">LLC tax rate</a> says an LLC has no tax rate of its own: by default its profit flows to the members' personal returns.</p>

<h2>When does filing Form 8832 make sense?</h2>
<ul>
<li><strong>You want C corporation treatment.</strong> Profit retained in the business is taxed at the flat 21% corporate rate rather than at the owners' individual rates. This can suit companies that reinvest most profit, plan to raise equity, or want to explore the qualified small business stock rules. Compare the trade-offs in <a href="/blog/s-corp-vs-c-corp">S corp vs C corp</a>.</li>
<li><strong>You want to undo a corporate election.</strong> An LLC that elected corporate status can elect back to partnership or disregarded status, subject to the 60-month rule and the deemed liquidation explained below.</li>
<li><strong>A foreign entity needs a different US classification.</strong> International structures often use Form 8832 so a foreign subsidiary is treated as disregarded or as a partnership for US purposes.</li>
</ul>

<h3>When not to file it</h3>
<p>Do not file Form 8832 if you want S corporation status. The IRS instructions say an eligible entity that timely files Form 2553 and meets the S corporation requirements is deemed to have elected to be an association taxable as a corporation. One form does the job; see our <a href="/blog/s-corp-election-form-2553">Form 2553 S corp election guide</a>. Missed the 2553 deadline? Our new guide on <a href="/blog/late-s-corp-election-relief">late S corp election relief</a> covers that route. Tax-exempt organizations and REITs also do not use Form 8832.</p>

<h2>Form 8832 deadlines: the 75-day and 12-month rules</h2>
<p>The election takes effect on the date you write on line 8, or on the filing date if you leave line 8 blank. That date cannot be more than <strong>75 days before</strong> the date you file, nor more than <strong>12 months after</strong> it. Practically, a new LLC that wants to be a corporation from day one should file within 75 days of formation.</p>

<h3>The 60-month limitation</h3>
<p>Once an entity elects to change its classification, it generally cannot change again by election for 60 months after the effective date. Lines 2a and 2b of the form test this. There are two escape routes: an initial classification election by a newly formed entity, effective on its formation date, does not count; and the IRS may permit an earlier change by private letter ruling when more than 50% of the ownership interests are held by people who were not owners on the earlier election date.</p>

<h2>How to fill out Form 8832, step by step</h2>
<ol>
<li><strong>Get an EIN first.</strong> The form asks for the entity's employer identification number. If you do not have one, see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Part I, line 1.</strong> Check 1a for an initial classification by a newly formed entity, or 1b for a change in current classification.</li>
<li><strong>Lines 2a and 2b.</strong> Answer the 60-month questions. If the form tells you to stop, you are generally not eligible to elect yet.</li>
<li><strong>Line 3 and line 4.</strong> State whether the entity has more than one owner, and for single-owner entities give the owner's name and identifying number.</li>
<li><strong>Line 5.</strong> Complete only if the entity is owned by affiliated corporations filing a consolidated return.</li>
<li><strong>Line 6.</strong> Choose the classification: a domestic or foreign entity electing corporation, partnership or disregarded status.</li>
<li><strong>Line 7.</strong> For foreign entities, list the country of organization.</li>
<li><strong>Line 8.</strong> Enter the effective date, respecting the 75-day and 12-month limits.</li>
<li><strong>Consent statement.</strong> Either every member signs, or an officer, manager or member authorized to make the election signs for the entity.</li>
<li><strong>Part II.</strong> Complete only if you are requesting late election relief.</li>
<li><strong>Mail it and keep proof.</strong> Use certified mail and file the receipt with your company records.</li>
</ol>

<h3>Where to mail Form 8832</h3>
<p>The current PDF on irs.gov carries a cover page with updated addresses that replace those in the 2013 instructions. Entities in Connecticut, Delaware, the District of Columbia, Georgia, Illinois, Indiana, Kentucky, Maine, Maryland, Massachusetts, Michigan, New Hampshire, New Jersey, New York, North Carolina, Ohio, Pennsylvania, Rhode Island, South Carolina, Vermont, Virginia, West Virginia and Wisconsin mail to Kansas City, MO 64999. Most western and southern states, including California, Florida and Texas, mail to Ogden, UT 84201, and foreign entities use Ogden, UT 84201-0023. Always check the cover page of the <a href="https://www.irs.gov/pub/irs-pdf/f8832.pdf" target="_blank" rel="noopener noreferrer">current Form 8832 PDF</a> before mailing.</p>
<p>You must also attach a copy of Form 8832 to the entity's federal tax or information return for the year of the election. Missing the attachment does not invalidate a valid election, but penalties can apply.</p>

<h2>Worked example: an LLC that filed too late</h2>
<p>This example is illustrative. Maya forms a two-member consulting LLC on February 2, 2026. The members want C corporation treatment from day one, but they only mail Form 8832 on May 10, 2026, asking for a February 2 effective date.</p>
<table><thead><tr><th>Item</th><th>Date or result</th></tr></thead><tbody>
<tr><td>Formation date</td><td>February 2, 2026</td></tr>
<tr><td>Filing date</td><td>May 10, 2026</td></tr>
<tr><td>Days between them</td><td>97 days</td></tr>
<tr><td>Earliest allowed effective date (filing date minus 75 days)</td><td>February 24, 2026</td></tr>
<tr><td>Gap not covered</td><td>February 2 to February 23</td></tr>
</tbody></table>
<p>The LLC has two options. It can accept February 24 as the effective date, which means it is a partnership for the first 22 days and files a short Form 1065 for that stub period, plus a corporate return from February 24. Or it can ask for late election relief under Revenue Procedure 2009-41 so the corporate election runs from formation. Most owners in Maya's position prefer relief, because one return for the year is cleaner than two.</p>

<h2>Late election relief under Rev. Proc. 2009-41</h2>
<p>The Form 8832 instructions list four requirements for relief:</p>
<ol>
<li>The entity failed to get its requested classification solely because Form 8832 was not filed on time.</li>
<li>Either the return for the first intended year is not yet due, or the entity (and affected owners) filed all returns consistently with the requested classification, on time or within six months of the due date excluding extensions.</li>
<li>The entity has reasonable cause for the late filing.</li>
<li>No more than three years and 75 days have passed since the requested effective date.</li>
</ol>
<p>You request relief by completing Part II, explaining reasonable cause, and signing the extra declaration. If you are outside these conditions, relief generally requires a private letter ruling, which is slower and expensive.</p>

<h2>Tax effects of changing classification</h2>
<p>Switching is not just paperwork. The regulations treat each change as a deemed transaction:</p>
<table><thead><tr><th>Change</th><th>What the IRS treats as happening</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Partnership to corporation</td><td>Partnership contributes assets and liabilities to a new corporation for stock, then distributes the stock to partners</td><td>Liabilities exceeding basis can create gain</td></tr>
<tr><td>Disregarded entity to corporation</td><td>Owner contributes assets and liabilities to the corporation for stock</td><td>Usually tax-free under section 351 if requirements are met</td></tr>
<tr><td>Corporation to partnership or disregarded</td><td>Corporation liquidates, distributing everything to its owners</td><td>Corporate-level and shareholder-level tax on appreciated assets</td></tr>
</tbody></table>
<p>Going from corporation back to pass-through status is where owners get surprised: a business with valuable goodwill or equipment can face tax on the built-in gain as if it sold everything. Model it with a professional first.</p>

<h2>Common Form 8832 mistakes</h2>
<ul>
<li><strong>Filing 8832 and 2553 together for S status.</strong> Usually unnecessary; the 2553 does both.</li>
<li><strong>Leaving line 8 blank by accident.</strong> The election then starts on the filing date, not the formation date.</li>
<li><strong>Not every member signing.</strong> Without full consent or an authorized signer, the election can be invalid.</li>
<li><strong>Filing returns inconsistent with the election.</strong> The instructions note penalties for members whose returns do not match the entity's election.</li>
<li><strong>Losing the acceptance letter.</strong> Banks, buyers and future accountants ask for it.</li>
</ul>

<h2>How the election affects invoicing and bookkeeping</h2>
<p>Your classification election does not change the legal name on your invoices; you still bill as the LLC. It does change what clients and your bookkeeper need. A clean <a href="/blog/how-to-invoice-as-an-llc">invoice from your LLC</a> should show the exact legal name, address and your EIN where clients require it. Clients filing 1099s will want an updated W-9: an LLC taxed as a C corporation checks the C corporation box, and corporations are generally exempt from 1099-NEC reporting, as our article on <a href="/blog/does-an-llc-get-a-1099">whether an LLC gets a 1099</a> explains. Corporate-taxed LLCs also file Form 1120 rather than Schedule C or Form 1065; see the new <a href="/blog/form-1120-vs-1120-s">Form 1120 vs 1120-S</a> comparison.</p>
<p>Whatever classification you choose, consistent numbered invoices make each year's return easier to prepare. Create them with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add your LLC name and EIN, and download a professional PDF in under a minute.</p>
`,
  },
  {
    slug: "wyoming-vs-delaware-llc",
    title: "Wyoming vs Delaware LLC: Fees, Privacy and Taxes",
    description:
      "Wyoming vs Delaware LLC compared: filing fees, the $60 vs $400 annual cost, privacy, courts and taxes, plus why your home state usually matters most.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-start-an-llc", "registered-agent", "llc-annual-report"],
    faqs: [
      {
        q: "Is a Wyoming or Delaware LLC cheaper?",
        a: "Wyoming is cheaper to keep. Its LLC filing fee is $100 and the annual report license tax is a minimum of $60 a year for most small companies. Delaware charges $110 to form an LLC and a flat $400 annual tax due June 1. Over five years, that difference adds up to well over a thousand dollars before registered agent fees, and both states require you to pay for a registered agent with a physical address in the state.",
      },
      {
        q: "Do I have to pay taxes in Wyoming or Delaware if I live elsewhere?",
        a: "Usually you owe each state its annual fee or tax, but your income is taxed where you live and work. Wyoming has no personal or corporate income tax. Delaware does not tax an LLC's income when the business operates outside Delaware, but it still charges the $400 annual tax. Your home state will tax your share of profit, and it may require the LLC to register there as a foreign LLC.",
      },
      {
        q: "Does a Wyoming LLC keep my name private?",
        a: "Wyoming does not require the names of members or managers in the articles of organization, so owners do not appear in the public filing, although the organizer and registered agent do. Delaware's certificate of formation is similarly minimal. Since March 2025, domestic US companies are also exempt from federal beneficial ownership reporting under FinCEN's interim final rule. Privacy is not secrecy: banks, the IRS and courts can still learn who owns the company.",
      },
      {
        q: "Should a startup raising venture capital choose Delaware?",
        a: "Usually, but as a Delaware C corporation, not an LLC. Venture investors are familiar with Delaware corporate law and the Court of Chancery, and many funds cannot easily invest in pass-through LLCs. If you plan to raise institutional money soon, ask your lawyer about forming a Delaware corporation directly rather than forming an LLC and converting later.",
      },
      {
        q: "Do I need to register my out-of-state LLC in my home state?",
        a: "If you are doing business in your home state, almost certainly yes. Having an office, employees or regular in-person work there generally counts. Foreign registration means a second filing fee, a second annual report and sometimes an annual tax such as California's $800 minimum. Operating without registration can bring penalties and stop the LLC from suing in that state's courts until it registers.",
      },
      {
        q: "When is the Wyoming annual report due?",
        a: "On the first day of the month in which the LLC was formed, every year after formation. An LLC formed in April 2026 files its first annual report by April 1, 2027. The fee is $60 or two-tenths of a mill on each dollar of assets located and employed in Wyoming, whichever is greater. Delaware LLCs file no annual report but pay their $400 tax by June 1.",
      },
    ],
    content: `
<p>For most small businesses comparing a Wyoming vs Delaware LLC, Wyoming wins on cost and simplicity: $100 to form and a $60 minimum annual fee, against Delaware's $110 filing fee and $400 annual tax. Delaware's real advantage is its business court and investor familiarity, which matters mainly for companies raising venture money, and they usually form a corporation instead. And for a freelancer or local business, the honest answer is often neither: forming in your home state avoids paying two states.</p>

<p>Below is a fee-by-fee comparison using each state's published figures, a three-year cost example, the privacy and tax facts behind the marketing, and a checklist for deciding. It is general information, not legal or tax advice.</p>

<h2>Wyoming vs Delaware LLC at a glance</h2>
<table><thead><tr><th>Factor</th><th>Wyoming LLC</th><th>Delaware LLC</th></tr></thead><tbody>
<tr><td>State filing fee to form</td><td>$100 (small card fee online)</td><td>$110 for a domestic certificate of formation</td></tr>
<tr><td>Ongoing state cost</td><td>Annual report license tax: $60 or $0.0002 per dollar of Wyoming assets, whichever is greater</td><td>Flat $400 annual tax</td></tr>
<tr><td>Due date</td><td>First day of the anniversary month of formation</td><td>June 1 each year for the prior year</td></tr>
<tr><td>Annual report</td><td>Yes, filed with the license tax</td><td>No annual report for LLCs</td></tr>
<tr><td>Late penalty</td><td>Entity can be administratively dissolved if not filed</td><td>$200 penalty plus 1.5% interest per month on tax and penalty</td></tr>
<tr><td>State income tax on the LLC</td><td>None; Wyoming has no corporate or personal income tax</td><td>None on LLC income from operations outside Delaware</td></tr>
<tr><td>Owner names in formation filing</td><td>Not required</td><td>Not required</td></tr>
<tr><td>Court system</td><td>State courts; less business case law than Delaware</td><td>Court of Chancery, long-established for business disputes</td></tr>
<tr><td>Registered agent</td><td>Required, physical Wyoming address</td><td>Required, physical Delaware address</td></tr>
</tbody></table>
<p>Delaware figures come from the Division of Corporations: the <a href="https://corp.delaware.gov/alt-entitytaxinstructions/" target="_blank" rel="noopener noreferrer">LLC annual tax page</a> lists $400 due by June 1, with a $200 late penalty and 1.5% monthly interest, and the August 2026 fee schedule lists $110 to form a domestic LLC. Delaware's annual LLC tax was $300 for years; if you read an older guide, that figure is out of date.</p>

<h2>What does each LLC cost over three years?</h2>
<p>Here is an illustrative comparison for an LLC formed in April 2026, using the state charges above and a typical commercial registered agent fee of $125 a year (agent prices vary widely; some charge less, some more).</p>
<table><thead><tr><th>Cost item</th><th>Wyoming</th><th>Delaware</th></tr></thead><tbody>
<tr><td>Formation filing</td><td>$100</td><td>$110</td></tr>
<tr><td>Annual fee or tax, 3 years (tax years 2026 to 2028)</td><td>3 x $60 = $180</td><td>3 x $400 = $1,200</td></tr>
<tr><td>Registered agent, 3 years</td><td>$375</td><td>$375</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$655</strong></td><td><strong>$1,685</strong></td></tr>
</tbody></table>
<p>Now add the step most comparison sites skip. If the owner lives and works in, say, Illinois, the LLC almost certainly has to register there as a foreign LLC, pay Illinois's filing fee and file Illinois annual reports too. In that case the cheapest structure is usually a single Illinois LLC, with no Wyoming or Delaware layer at all. Our guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a> walks through home-state formation.</p>

<h2>Why your home state usually decides it</h2>
<p>States require an out-of-state ("foreign") LLC to register when it is "doing business" there. The definition varies, but an owner who lives in the state and runs the business from a home office, keeps inventory there, hires local staff or meets clients there is normally doing business there. Registration brings:</p>
<ul>
<li>a second filing fee and second annual report;</li>
<li>any minimum annual tax in that state, such as California's $800 LLC tax (see our new <a href="/blog/california-llc-800-tax">California LLC $800 tax guide</a>);</li>
<li>a second registered agent if you do not want to use your home address;</li>
<li>state income tax on the profit, wherever the LLC was formed.</li>
</ul>
<p>A Wyoming LLC does not let a California resident escape California tax. Income is taxed where you live and where the work is done.</p>

<h2>When a Wyoming LLC makes sense</h2>
<ul>
<li><strong>Non-US founders</strong> selling online who need a US entity, a US bank account and an EIN, with no US home state.</li>
<li><strong>Holding companies</strong> that own assets or other entities and have little in-state activity anywhere.</li>
<li><strong>Owners who live in Wyoming</strong>, obviously.</li>
<li><strong>Owners who value low upkeep</strong>: one short annual report and $60.</li>
</ul>
<p>Wyoming is also known for strong charging-order protection for LLC members, which limits what a member's personal creditors can reach. That protection is real but often oversold, especially for single-member LLCs and owners who live in states with different rules.</p>

<h2>When a Delaware LLC makes sense</h2>
<ul>
<li><strong>Companies expecting complex agreements or disputes</strong> where Delaware's body of LLC case law and its Court of Chancery give predictability.</li>
<li><strong>Funds, joint ventures and real estate syndications</strong> whose investors and lenders expect Delaware entities.</li>
<li><strong>Businesses that may raise outside capital</strong> and want lawyers on both sides to work from familiar law.</li>
</ul>
<p>For venture-backed startups the standard vehicle is a Delaware C corporation, not an LLC. Delaware corporations pay a separate franchise tax with its own calculation; see our new explainer on the <a href="/blog/delaware-franchise-tax">Delaware franchise tax</a>.</p>

<h2>Privacy: what each state actually shows</h2>
<p>Neither state requires members or managers to be named in the formation filing. Wyoming's articles list the organizer and registered agent; Delaware's certificate of formation lists the name and registered agent. If you use a commercial registered agent and organizer, your name may not appear in the state's public database.</p>
<p>The federal picture changed in 2025. FinCEN's interim final rule of March 2025 exempted US-formed companies from beneficial ownership reporting under the Corporate Transparency Act, leaving the requirement on certain foreign companies registered to do business in the US. That rule could change again, so check FinCEN's site when you form.</p>
<p>Anonymity has practical limits. Your bank collects owner identification, the IRS knows who applied for the EIN, and your invoices and contracts must use the LLC's legal name. A registered agent is still essential either way; read our guide to choosing a <a href="/blog/registered-agent">registered agent</a>.</p>

<h2>Step by step: choosing between Wyoming, Delaware and home state</h2>
<ol>
<li><strong>Write down where you live and work.</strong> If you have a physical US base, price a home-state LLC first.</li>
<li><strong>List your foreign registration costs.</strong> For each state where you would be doing business, add its fees and minimum taxes.</li>
<li><strong>Consider investors.</strong> Raising venture capital within a year or two points to a Delaware corporation.</li>
<li><strong>Consider disputes and partners.</strong> A multi-member LLC with significant money at stake may benefit from Delaware law and a solid <a href="/blog/llc-operating-agreement">LLC operating agreement</a>.</li>
<li><strong>Total five years of costs</strong>, including agent fees, annual taxes and accountant time for multi-state filings.</li>
<li><strong>Calendar the deadlines.</strong> Wyoming: first day of your anniversary month. Delaware: June 1. Missing them costs your good standing with the state, which banks and lenders check before they work with you.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Chasing "no state income tax"</strong> while living in a state that taxes you anyway.</li>
<li><strong>Skipping foreign registration</strong> in the home state, then discovering penalties and back fees when opening a bank account or applying for a loan.</li>
<li><strong>Using old fee figures.</strong> Delaware's LLC tax is now $400, not $300.</li>
<li><strong>Forgetting the annual filing</strong> because there is no bill in the mail. Both states expect you to remember. Our <a href="/blog/llc-annual-report">LLC annual report guide</a> lists what to track.</li>
<li><strong>Forming an LLC when investors want a corporation.</strong> Converting later costs legal fees and can have tax consequences.</li>
</ul>

<h2>What if you already formed in the wrong state?</h2>
<p>Plenty of owners form a Wyoming or Delaware LLC on the strength of a social media tip, then realise they owe fees in two states. You have three realistic options:</p>
<table><thead><tr><th>Option</th><th>What it involves</th><th>Best when</th></tr></thead><tbody>
<tr><td>Keep it and register as foreign</td><td>File a foreign registration in your home state and keep both annual filings</td><td>You genuinely benefit from the formation state's law or have investors who expect it</td></tr>
<tr><td>Convert or domesticate</td><td>Move the existing LLC to your home state through a statutory conversion, where both states allow it</td><td>You want one state and to keep the same entity, contracts and bank account</td></tr>
<tr><td>Dissolve and re-form</td><td>Form a new home-state LLC, move contracts and accounts, then dissolve the old one</td><td>The old LLC has little history, few contracts and no assets</td></tr>
</tbody></table>
<p>A conversion usually keeps the same legal entity, which can make banking and client contracts simpler, though your accountant should confirm whether your EIN carries over in your situation. Dissolving creates a new entity, so you will need new W-9s for clients, possibly a new EIN, and updated invoice details. Whichever route you pick, settle the old state's outstanding taxes first, because unpaid annual fees follow the entity and can block a clean exit. If the old LLC was never used, check whether the formation state lets you cancel quickly before the first annual fee is due.</p>
<p>Before you act, list everything tied to the old entity: client contracts, the business bank account, payment processors, domain and software subscriptions, insurance policies and any licenses. Each one needs either the new entity's name or a confirmation that nothing changes after a conversion. Missing one can lead to payments being held because the name on the account no longer matches the name on the invoice.</p>

<h2>Invoicing from a Wyoming or Delaware LLC</h2>
<p>Wherever you form, invoice in the LLC's exact legal name, as registered, and include the address you use for business. Clients do not care where you formed, but they do need a correct W-9 and consistent details for their records. Our guide on <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a> covers the details, and the tax treatment of the profit is covered in <a href="/blog/llc-tax-rate">LLC tax rate</a>.</p>
<p>Once the LLC is set up, send your first invoices with our free <a href="/invoice-generator">invoice generator</a>. There is no sign-up: add your LLC's legal name, logo and payment terms, and download a clean PDF ready to email.</p>
`,
  },
  {
    slug: "certificate-of-good-standing",
    title: "Certificate of Good Standing: What It Is and How to Get One",
    description:
      "What a certificate of good standing is, who asks for one, how to order it online from your state, what it costs, and how to fix a business not in good standing.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-annual-report", "registered-agent", "how-to-dissolve-an-llc"],
    faqs: [
      {
        q: "How long is a certificate of good standing valid?",
        a: "The certificate itself has no expiry date; it shows your status on the day it was issued. The party asking for it decides how recent it must be. Banks, lenders and other states commonly want one dated within the last 30, 60 or 90 days, and some closing attorneys want one dated within days of a transaction. Ask the requester what date window they accept before you order, so you do not pay twice.",
      },
      {
        q: "How much does a certificate of good standing cost?",
        a: "It depends on the state and the format. Some states let you print or validate one free online; Wyoming is an example. Others charge a modest fee. Delaware's August 2026 fee schedule lists $50 for a short-form good standing certificate and $175 for a long-form certificate, with extra charges for same-day or 24-hour service. Third-party services charge more on top of the state fee for convenience.",
      },
      {
        q: "Is a certificate of good standing the same as a certificate of existence?",
        a: "Usually, yes. States use different names for the same document: certificate of good standing, certificate of existence, certificate of status or certificate of fact. All confirm the entity exists on the state's records and is current on required filings and fees with the filing office. Some states also have a separate tax clearance or account status certificate issued by the tax agency, which is a different document.",
      },
      {
        q: "Why would my LLC not be in good standing?",
        a: "The most common reasons are a missed annual report, an unpaid annual tax or franchise tax, and the loss of a registered agent. Some states also revoke good standing when the tax agency reports unfiled returns. The status often changes automatically after the deadline passes, without much warning, so many owners discover the problem only when a bank or lender asks for a certificate.",
      },
      {
        q: "Can I still invoice clients if my LLC is not in good standing?",
        a: "Usually you can still send invoices, and clients generally still owe what they agreed to pay. But a business out of good standing may face limits, such as being unable to sue in that state's courts until it is reinstated, and if the state administratively dissolves the entity, the liability protection of the LLC can be at risk. Fix the status quickly, because clients, lenders and government buyers may check it.",
      },
      {
        q: "Who issues a certificate of good standing?",
        a: "The state office that keeps business entity records, usually the Secretary of State or a Division of Corporations. You request it from the state where the entity was formed, and if the business is registered as a foreign entity in other states, each of those states can also issue a certificate confirming the foreign registration is current.",
      },
    ],
    content: `
<p>A certificate of good standing is an official document from your state's business filing office confirming that your LLC or corporation legally exists and is current on its required state filings and fees. Banks, lenders, other states and larger clients ask for one before opening accounts, approving loans or signing contracts. In most states you can order it online from the Secretary of State in minutes, often for a small fee or free.</p>

<p>The hard part is not ordering the certificate. It is finding out you cannot get one because an annual report or franchise tax slipped. This guide explains what the certificate shows, who asks for it, how to get it, what it costs, and how to restore good standing if you have lost it.</p>

<h2>What is a certificate of good standing?</h2>
<p>The certificate is a one-page statement, often with a seal and an authentication number, that says something like "the entity is duly formed under the laws of this state and is in good standing as of" a given date. It confirms two things: the business exists on the state's records, and it has met the state filing office's requirements, typically its annual report or tax and keeping a registered agent.</p>
<p>It does not prove that you have paid every tax, hold every license, or have no lawsuits. Some states issue a separate tax clearance or account status certificate through the tax agency for that purpose.</p>

<h3>Other names for the same document</h3>
<table><thead><tr><th>Name used</th><th>Where you will see it</th></tr></thead><tbody>
<tr><td>Certificate of good standing</td><td>Delaware, Wyoming and many other states</td></tr>
<tr><td>Certificate of existence</td><td>Several states, often meaning the same thing</td></tr>
<tr><td>Certificate of status</td><td>California and others</td></tr>
<tr><td>Certificate of fact</td><td>Texas</td></tr>
<tr><td>Long-form certificate</td><td>States such as Delaware that also list the entity's filing history</td></tr>
</tbody></table>

<h2>Who asks for a certificate of good standing?</h2>
<ul>
<li><strong>Banks</strong> opening a business account or adding signers, especially for out-of-state entities.</li>
<li><strong>Lenders</strong> for business loans, equipment finance and SBA loans. See our <a href="/blog/sba-loans">SBA loans guide</a>.</li>
<li><strong>Other states</strong> when you register as a foreign LLC or corporation; most want a certificate from your home state dated recently.</li>
<li><strong>Clients and procurement teams</strong> onboarding a new supplier. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> shows what else they collect.</li>
<li><strong>Government agencies</strong> for licenses, permits and contracting. Our new guide to <a href="/blog/sam-gov-registration">SAM.gov registration</a> covers federal vendor setup.</li>
<li><strong>Buyers and investors</strong> during due diligence when you sell a business or raise money.</li>
<li><strong>Landlords and franchisors</strong> before signing commercial leases or franchise agreements.</li>
</ul>

<h2>How to get a certificate of good standing</h2>
<ol>
<li><strong>Find the right state.</strong> Order from the state where the entity was formed. If the requester wants proof of a foreign registration, order from that state too.</li>
<li><strong>Go to the business search or certificate page</strong> of the Secretary of State or Division of Corporations.</li>
<li><strong>Search your exact legal name or entity file number</strong> and check the status shown, such as "active", "good standing" or "delinquent".</li>
<li><strong>Choose the certificate type.</strong> Short form is usually enough; long form lists filing history and is mainly needed for legal transactions.</li>
<li><strong>Pay the fee</strong> and choose standard or expedited service if offered.</li>
<li><strong>Download or receive the certificate</strong> and check the name, entity number and date before sending it on.</li>
</ol>

<h3>What it costs: examples</h3>
<table><thead><tr><th>State</th><th>Document</th><th>State fee</th></tr></thead><tbody>
<tr><td>Delaware</td><td>Good standing, short form (any entity)</td><td>$50 per certificate</td></tr>
<tr><td>Delaware</td><td>Good standing, long form (domestic)</td><td>$175 per certificate</td></tr>
<tr><td>Delaware</td><td>Same-day or 24-hour service</td><td>Extra $50 or $40 for short form</td></tr>
<tr><td>Wyoming</td><td>Online good standing certificate</td><td>Can be printed online at no cost</td></tr>
<tr><td>Most other states</td><td>Online certificate</td><td>Free to modest fees; check the state fee schedule</td></tr>
</tbody></table>
<p>Delaware's figures are from the <a href="https://corp.delaware.gov/fee/" target="_blank" rel="noopener noreferrer">Division of Corporations fee schedule</a> revised August 1, 2026. Ordering through a formation company or registered agent adds a service fee, which can be worth it when a closing deadline is hours away.</p>

<h2>Why a business loses good standing</h2>
<table><thead><tr><th>Cause</th><th>What usually happens</th><th>How to prevent it</th></tr></thead><tbody>
<tr><td>Missed annual report</td><td>Status turns delinquent, then the state may administratively dissolve the entity</td><td>Calendar the due date; see <a href="/blog/llc-annual-report">LLC annual report</a></td></tr>
<tr><td>Unpaid annual or franchise tax</td><td>Penalties and interest; status lost until paid</td><td>Budget the tax as a fixed cost</td></tr>
<tr><td>No registered agent</td><td>Agent resigns after unpaid fees; state cannot serve notices</td><td>Keep the <a href="/blog/registered-agent">registered agent</a> paid and current</td></tr>
<tr><td>Tax agency referral</td><td>Some states suspend entities with unfiled state tax returns</td><td>File state returns even in zero-profit years</td></tr>
<tr><td>Unregistered in a state where you operate</td><td>Penalties and no access to that state's courts</td><td>Register as a foreign entity where required</td></tr>
</tbody></table>

<h2>Worked example: restoring a Delaware LLC before a bank deadline</h2>
<p>This is an illustrative example. A two-member Delaware LLC applies for a $75,000 equipment loan on November 2, 2026. The lender asks for a certificate of good standing dated within 30 days. The owners search the Delaware site and see the LLC is not in good standing: the $400 annual tax due June 1, 2026 was never paid.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Annual tax due June 1, 2026</td><td>$400.00</td></tr>
<tr><td>Late payment penalty</td><td>$200.00</td></tr>
<tr><td>Interest: 1.5% per month on $600 for 5 months (June to November)</td><td>$45.00</td></tr>
<tr><td>Short-form certificate</td><td>$50.00</td></tr>
<tr><td><strong>Total to fix and prove it</strong></td><td><strong>$695.00</strong></td></tr>
</tbody></table>
<p>The owners pay the balance online, confirm the status updates, then order the certificate with 24-hour service so the loan stays on schedule. The lesson: $295 of the bill was avoidable with a calendar reminder. Interest is computed by the state; use its payoff figure, not your own estimate.</p>

<h2>How to restore good standing</h2>
<ol>
<li><strong>Look up the reason.</strong> The state record or a call to the filing office tells you which reports or taxes are missing.</li>
<li><strong>File every missing report</strong> and pay back fees, penalties and interest.</li>
<li><strong>Appoint or reinstate a registered agent</strong> if the old one resigned.</li>
<li><strong>File for reinstatement or revival</strong> if the entity was administratively dissolved, voided or forfeited. This is a separate form and fee in most states.</li>
<li><strong>Clear state tax issues</strong> if the tax agency triggered the suspension; you may need its clearance before the filing office acts.</li>
<li><strong>Order a fresh certificate</strong> once the record shows good standing.</li>
</ol>
<p>If you no longer want the business, formally closing it is cheaper than letting it lapse and accruing penalties; see <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a>.</p>

<h2>Common mistakes and edge cases</h2>
<ul>
<li><strong>Ordering too early.</strong> If the lender wants a certificate dated within 30 days and the deal slips, you will order again.</li>
<li><strong>Sending the wrong state's certificate.</strong> Another state registering you as a foreign entity wants the home-state certificate, not its own.</li>
<li><strong>Name mismatch.</strong> Your invoices, contracts and bank account should use the exact registered name; a missing comma or "LLC" vs "L.L.C." can delay onboarding.</li>
<li><strong>Assuming good standing means tax compliance.</strong> It covers the filing office only. A separate tax clearance may be needed when selling a business.</li>
<li><strong>Forgetting foreign registrations.</strong> Each state where you registered has its own annual report, and losing status in one can block a contract there.</li>
</ul>

<h2>Keeping your business record clean year-round</h2>
<h2>Good standing vs other company documents</h2>
<p>Requesters often ask for a bundle of documents, and owners sometimes send the wrong one. Here is how the certificate fits with the rest:</p>
<table><thead><tr><th>Document</th><th>Issued by</th><th>What it proves</th></tr></thead><tbody>
<tr><td>Certificate of good standing</td><td>State filing office</td><td>The entity exists and is current with that office today</td></tr>
<tr><td>Articles of organization or certificate of formation</td><td>State filing office (stamped copy)</td><td>The entity was created, and when</td></tr>
<tr><td>IRS EIN confirmation letter</td><td>IRS</td><td>The entity's federal tax ID; see <a href="/blog/how-to-get-an-ein">how to get an EIN</a></td></tr>
<tr><td>Operating agreement or bylaws</td><td>Your own company</td><td>Who owns and manages the business and who can sign</td></tr>
<tr><td>Certificate of incumbency</td><td>Your company or registered agent</td><td>Current officers or managers, often for banks abroad</td></tr>
<tr><td>Tax clearance or account status letter</td><td>State tax agency</td><td>State taxes are filed and paid, often needed when selling or closing</td></tr>
</tbody></table>
<h3>Using a certificate abroad</h3>
<p>If a foreign bank, marketplace or government asks for proof of your US company, a plain certificate may not be enough. Countries that belong to the Hague Apostille Convention usually want the certificate authenticated with an apostille, which the Secretary of State of the issuing state attaches. Order the certificate first, then the apostille, and allow extra time for mailing. Countries outside the convention may require further legalization through their consulate.</p>
<p>A practical tip for anyone who deals with banks or marketplaces often: keep a recent PDF certificate in a shared folder with your formation documents, EIN letter and operating agreement, and note the date it was issued. When a request arrives, you can see at a glance whether the existing certificate falls inside the requester's date window or whether you need a fresh one. Ordering on the same day you need it is usually possible online, but state systems do go down for maintenance, often at the worst moment.</p>

<h2>Keeping your business record clean year-round</h2>
<p>Set annual reminders for each state report and tax, keep your registered agent current, and store certificates with your formation documents. For Delaware companies, our new guide to the <a href="/blog/delaware-franchise-tax">Delaware franchise tax</a> explains the corporate side.</p>
<p>Good records on the invoicing side help too: when a lender asks for proof of revenue, numbered invoices in your exact legal name are easy to hand over. Create them with our free <a href="/invoice-generator">invoice generator</a>, with no sign-up needed, and download each one as a PDF.</p>
`,
  },
  {
    slug: "duns-number",
    title: "DUNS Number: What It Is and How to Get One Free",
    description:
      "What a DUNS number is, how to get one free from Dun & Bradstreet, how long it takes, and when you need it now that SAM.gov uses the Unique Entity ID.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-invoice-the-federal-government",
      "business-credit-score",
      "net-30-vendor-accounts",
    ],
    faqs: [
      {
        q: "Is a DUNS number free?",
        a: "Yes. Dun & Bradstreet states there is no cost to request and receive a D-U-N-S Number. The free route can take up to 30 business days. D&B sells an optional expedited service that delivers a number within about eight business days, and it also markets paid credit-monitoring and credit-building products during signup. None of those paid products are required to get the number itself.",
      },
      {
        q: "Do I need a DUNS number for SAM.gov or federal contracts?",
        a: "No. Since April 4, 2022, the federal government has used the Unique Entity ID, a 12-character identifier assigned by SAM.gov, instead of the DUNS number. When you register in SAM.gov you receive a UEI automatically. A DUNS number may still help with private-sector suppliers and business credit, but it is no longer the federal identifier.",
      },
      {
        q: "How do I find out if my business already has a DUNS number?",
        a: "Search Dun & Bradstreet's lookup tool with your legal business name and address. D&B builds files from public records and trade data, so a business can have a number it never requested. Apple's developer program also offers a lookup during enrollment. If you find a record, claim it and correct any wrong details rather than requesting a duplicate.",
      },
      {
        q: "Do sole proprietors need a DUNS number?",
        a: "Only if someone asks for it. Freelancers and sole proprietors rarely need one unless a large client's supplier portal requires it, they want to build a business credit file with Dun & Bradstreet, or they enroll in a program that requires an organization identifier. Individuals enrolling in the Apple Developer Program, for example, do not need a D-U-N-S Number; organizations do.",
      },
      {
        q: "Is a DUNS number the same as an EIN?",
        a: "No. An EIN is issued by the IRS for tax purposes. A DUNS number is issued by a private company, Dun & Bradstreet, to identify a business location in its commercial database. You need an EIN for many tax and banking tasks; you need a DUNS number only when a client, platform or lender asks for it. Most businesses that have one also have an EIN.",
      },
      {
        q: "Does each business location need its own DUNS number?",
        a: "Generally yes. Dun & Bradstreet assigns numbers by physical location, so a company with several addresses can have a separate number for each, linked to a headquarters record. That is why D&B asks for a business address and notes that you need a separate number for each location. Use the headquarters number unless a client asks for a specific site.",
      },
    ],
    content: `
<p>A DUNS number is a free nine-digit identifier that Dun &amp; Bradstreet assigns to a business location in its commercial database. You can request one at no cost on D&amp;B's website; the free route can take up to 30 business days, and a paid expedited option is faster. Today you mainly need one for large corporate supplier portals, app store organization accounts and business credit, not for federal contracts, which switched to SAM.gov's Unique Entity ID in 2022.</p>

<p>The signup process mixes the free number with paid credit products, so many owners either overpay or give up. This guide explains who needs a DUNS number, the free step-by-step route, how long it takes, and how it connects to your business credit and billing.</p>

<h2>What is a DUNS number?</h2>
<p>D-U-N-S stands for Data Universal Numbering System. Dun &amp; Bradstreet created it in the 1960s to identify businesses in its credit reports, and it is now used worldwide by procurement teams and trade partners. Each number points to a D&amp;B record holding your legal name, address, phone, industry, year founded, employee count, ownership and payment history with suppliers.</p>
<p>Unlike an EIN, which the IRS issues, the DUNS number is private and assigned per location. Our article on <a href="/blog/ein-vs-ssn">EIN vs SSN</a> covers the tax identifiers you will use on invoices and W-9s.</p>

<h2>Do you need a DUNS number in 2026?</h2>
<table><thead><tr><th>Situation</th><th>DUNS needed?</th><th>Notes</th></tr></thead><tbody>
<tr><td>Registering in SAM.gov for federal contracts or grants</td><td>No</td><td>SAM.gov assigns a Unique Entity ID; DUNS was retired as the federal identifier on April 4, 2022</td></tr>
<tr><td>Apple Developer Program as an organization</td><td>Yes</td><td>Individuals enrolling in their own name do not need one</td></tr>
<tr><td>Supplier onboarding with large corporations</td><td>Often</td><td>Many procurement systems ask for it to verify vendors</td></tr>
<tr><td>Building a Dun &amp; Bradstreet business credit file</td><td>Yes</td><td>Payment data from suppliers attaches to your number</td></tr>
<tr><td>Applying for some net-30 trade accounts</td><td>Sometimes</td><td>Some vendors report to D&amp;B and ask for the number</td></tr>
<tr><td>Freelancer invoicing small clients</td><td>No</td><td>An EIN or SSN on your W-9 is what clients need</td></tr>
</tbody></table>
<p>The federal change is worth stressing because many older articles still say you need a DUNS number for government work. The <a href="https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-systems-switch-to-unique-entity-id-sam-on-april-4-2022-03162022" target="_blank" rel="noopener noreferrer">GSA announcement</a> confirms the switch to the Unique Entity ID (SAM) on April 4, 2022. If government contracting is your goal, read our new <a href="/blog/sam-gov-registration">SAM.gov registration guide</a> and <a href="/blog/how-to-invoice-the-federal-government">how to invoice the federal government</a>.</p>

<h2>How to get a DUNS number for free, step by step</h2>
<ol>
<li><strong>Search first.</strong> Use D&amp;B's lookup to see whether your business already has a number. D&amp;B creates records from public data, so many registered LLCs already exist in its system.</li>
<li><strong>Gather your details.</strong> D&amp;B asks for your registered legal name, physical business address, phone number, the owner or CEO's name, legal structure, year founded, primary industry and total employees.</li>
<li><strong>Use the free request form.</strong> On D&amp;B's <a href="https://www.dnb.com/en-us/smb/duns/get-a-duns.html" target="_blank" rel="noopener noreferrer">Get a D-U-N-S Number page</a>, choose the free option. Read each screen carefully; paid products are offered along the way.</li>
<li><strong>Verify your identity and business.</strong> D&amp;B may call or email to confirm details. Answer promptly; unanswered verification is a common cause of delays.</li>
<li><strong>Receive the number</strong> by email once the record is created, usually within 30 business days on the free route.</li>
<li><strong>Review and update your record</strong> so your name, address and industry match your state registration and your invoices.</li>
</ol>

<h3>Free vs expedited</h3>
<table><thead><tr><th>Option</th><th>Cost</th><th>Typical time</th></tr></thead><tbody>
<tr><td>Standard request</td><td>Free</td><td>Up to 30 business days</td></tr>
<tr><td>Expedited request</td><td>Fee set by D&amp;B</td><td>Within about 8 business days</td></tr>
<tr><td>Apple developer lookup route</td><td>Free</td><td>Apple says allow up to 5 business days for D&amp;B, plus up to 2 business days for Apple to receive it</td></tr>
</tbody></table>
<p>If you are enrolling in the Apple Developer Program, Apple's own D-U-N-S lookup tool lets eligible organizations request a free number, and Apple notes that paying D&amp;B to expedite does not shorten its waiting period.</p>

<h2>Worked example: timing an app launch around a DUNS number</h2>
<p>This example is illustrative. A two-person studio, Northbeam Apps LLC, plans to publish its first iOS app under the company name, with a launch date of December 1. On November 3 it learns that organization enrollment requires a D-U-N-S Number.</p>
<table><thead><tr><th>Date</th><th>Step</th></tr></thead><tbody>
<tr><td>Nov 3</td><td>Search D&amp;B and Apple's lookup; no existing record found</td></tr>
<tr><td>Nov 3</td><td>Request a free number through Apple's lookup tool using the exact name on the state certificate</td></tr>
<tr><td>Nov 10</td><td>Number arrives (5 business days)</td></tr>
<tr><td>Nov 12</td><td>Apple receives the D&amp;B data (up to 2 more business days); studio enrolls</td></tr>
<tr><td>Nov 14 to 24</td><td>App review and fixes</td></tr>
<tr><td>Dec 1</td><td>Launch on schedule</td></tr>
</tbody></table>
<p>Had the studio requested through the general free route and hit the full 30 business days, the number could have arrived around mid-December, pushing the launch. The safest habit is to request the number as soon as the LLC is formed, even if you do not need it yet, because a number that sits unused costs nothing and saves weeks later.</p>

<h2>DUNS vs UEI vs CAGE vs EIN</h2>
<p>Business owners collect identifiers fast, and procurement forms often ask for several at once. This table sorts them out:</p>
<table><thead><tr><th>Identifier</th><th>Issued by</th><th>Format</th><th>Main use</th><th>Cost</th></tr></thead><tbody>
<tr><td>D-U-N-S Number</td><td>Dun &amp; Bradstreet (private)</td><td>9 digits</td><td>Commercial credit files, supplier verification, app store organization accounts</td><td>Free; paid expedite optional</td></tr>
<tr><td>Unique Entity ID (SAM)</td><td>SAM.gov (federal government)</td><td>12 characters, letters and numbers</td><td>Federal contracts, grants and assistance</td><td>Free</td></tr>
<tr><td>CAGE code</td><td>Defense Logistics Agency, assigned through SAM.gov registration</td><td>5 characters</td><td>Identifies a contractor facility in federal procurement</td><td>Free</td></tr>
<tr><td>EIN</td><td>IRS</td><td>9 digits (XX-XXXXXXX)</td><td>Federal tax filings, W-9s, payroll, bank accounts</td><td>Free</td></tr>
</tbody></table>
<p>For most freelancers the EIN is the only identifier they will ever put on an invoice. For a company selling to enterprises or government, it is normal to hold all four and to list the relevant ones in a vendor profile. Keep a single document with each number, the exact legal name used to obtain it, and the address on file, so that a mismatch does not hold up a supplier application or payment.</p>

<h2>Keeping your D&amp;B record accurate</h2>
<p>Once your number exists, the record attached to it is visible to anyone who buys a D&amp;B report on your company, including prospective clients and suppliers checking whether to extend credit. Review it once a year and after any change in address, ownership, name or headcount. Typical problems are an old address from public records, an industry code that does not match what you do, or a sole proprietorship listed under the owner's personal name instead of the trade name. D&amp;B provides free tools to request corrections; you do not need a paid subscription to fix factual errors. Accurate data also reduces the chance of a procurement system flagging your company for manual review, which can delay your first payment by weeks.</p>
<p>Expect sales calls and emails after you request a number. They usually promote credit monitoring, credit-building subscriptions or report access. Some owners find these useful, but they are optional. If you only need the number for an app store or a supplier portal, you can decline politely and keep using the free record. Write down the date you requested the number and any case reference, so you can follow up if nothing arrives within the stated time.</p>

<h2>DUNS numbers and business credit</h2>
<p>Your DUNS number anchors your Dun &amp; Bradstreet credit file. Suppliers that report to D&amp;B add your payment history, which feeds scores such as the PAYDEX score. Paying trade accounts early or on time helps; paying late hurts. Our guide to your <a href="/blog/business-credit-score">business credit score</a> explains how D&amp;B, Experian and Equifax differ, and <a href="/blog/net-30-vendor-accounts">net-30 vendor accounts</a> lists suppliers that report payment history.</p>
<p>You do not have to buy D&amp;B's credit products to have a file. Many businesses keep a free number, correct their record, and let supplier reports build the history naturally.</p>

<h2>Common DUNS mistakes</h2>
<ul>
<li><strong>Paying for the number.</strong> The number is free. Paid services add speed or monitoring, not eligibility.</li>
<li><strong>Requesting a duplicate.</strong> If your business already has a record, claim and update it instead.</li>
<li><strong>Using a different name than your registration.</strong> Apple, banks and procurement teams compare your D&amp;B name with your state record and invoices. Keep "Northbeam Apps LLC" identical everywhere.</li>
<li><strong>Using a virtual mailbox as the address.</strong> D&amp;B ties numbers to physical locations; a mismatch can delay verification.</li>
<li><strong>Ignoring verification calls.</strong> Unreturned calls are a common reason requests stall.</li>
<li><strong>Thinking DUNS is required for federal work.</strong> It has not been since 2022.</li>
</ul>

<h2>Where a DUNS number appears in billing</h2>
<p>Some enterprise clients ask suppliers to include their DUNS number on invoices or in their supplier portal profile so accounts payable can match payments to the right vendor record. If a client asks, add it as a line in your business details block next to your EIN or VAT number. For federal invoices, use the UEI and CAGE code instead. A clean vendor profile matters as much as the invoice itself, as our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> shows.</p>
<p>Once your identifiers are sorted, create consistent invoices with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, add your company details and any identifiers your clients require, and download a PDF ready to upload to any supplier portal.</p>
`,
  },
  {
    slug: "eori-number",
    title: "EORI Number: What It Is and How to Apply",
    description:
      "What an EORI number is, who needs one to import or export, how to apply for a GB, XI or EU EORI for free, and where the EORI goes on customs invoices.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "commercial-invoice-template",
      "incoterms-on-invoice",
      "hs-code-on-commercial-invoice",
    ],
    faqs: [
      {
        q: "Is an EORI number free?",
        a: "Yes. HMRC does not charge to apply for a GB or XI EORI number, and EU customs authorities do not charge for EU EORI numbers either. Be wary of websites that charge a fee to apply on your behalf; they submit the same free application. The only costs in the process are your time and, if you use one, a customs agent's fees for the declarations themselves.",
      },
      {
        q: "How long does it take to get an EORI number?",
        a: "For a GB EORI, HMRC says you usually get the number immediately, unless it needs to make checks, which can take up to 5 working days. An XI EORI for Northern Ireland arrives within 5 days, and you must hold a GB EORI first. EU timing depends on the member state's customs authority. Apply before your first shipment so goods are not held at the border.",
      },
      {
        q: "Do I need an EORI number to send parcels to customers abroad?",
        a: "If you are a business moving goods into or out of the UK or EU, usually yes, because customs declarations need the trader's EORI. Couriers will ask for it on export paperwork. Individuals sending non-controlled goods for personal use do not need one. Whether your customer also needs one depends on who acts as importer, which the Incoterms on your invoice decide.",
      },
      {
        q: "Does a US business need an EORI number?",
        a: "Only if it will be the declarant or importer of record in the UK or EU, for example when shipping on DDP terms and handling import clearance itself. A non-EU business applies in the EU country where it first carries out a customs operation, and that one EORI works across the EU. Under DAP or similar terms, the buyer usually imports and uses its own EORI.",
      },
      {
        q: "What does an EORI number look like?",
        a: "It starts with a country code. A GB EORI starts with GB followed by 12 digits, and for VAT-registered UK businesses it is commonly the VAT number with 000 added. An XI EORI starts with XI. EU EORI numbers start with the issuing member state's two-letter code followed by up to 15 alphanumeric characters, for example DE or FR plus an identifier.",
      },
      {
        q: "How can I check if an EORI number is valid?",
        a: "Use the official checkers. GOV.UK has a Check an EORI number service for GB numbers, and the European Commission's EORI validation tool checks EU numbers and can show the registered name and address if the holder agreed to publication. Checking a customer's EORI before you ship on DDP or DAP terms avoids delays caused by typos on commercial invoices.",
      },
    ],
    content: `
<p>An EORI number (Economic Operators Registration and Identification number) is the identifier customs authorities in the UK and EU use to track businesses that import or export goods. If your business moves goods into or out of Great Britain, Northern Ireland or the EU, you will usually need one before your first shipment clears customs. Applying is free: UK businesses apply to HMRC and often receive a GB EORI immediately, while EU businesses apply to the customs authority of their member state.</p>

<p>This guide covers who needs an EORI, GB vs XI vs EU numbers, how to apply step by step, where the number goes on your commercial invoice and customs paperwork, and the mistakes that leave parcels stuck. It is general information, not customs or legal advice; for complex supply chains, speak to a customs broker.</p>

<h2>What is an EORI number?</h2>
<p>The EORI number identifies an "economic operator" in customs systems. Customs declarations, entry and exit summary declarations, and many transit and temporary storage filings require it. The European Commission's <a href="https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export-0/customs-procedures/economic-operators-registration-and-identification-number-eori_en" target="_blank" rel="noopener noreferrer">EORI guidance</a> describes it as mandatory for clearing all types of customs operations in the EU customs territory, valid with no expiry, and limited to one valid number per operator.</p>
<p>It is not a VAT number, even though UK numbers often look similar. VAT registration is a separate process with its own threshold, covered in our guide to the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a>.</p>

<h2>Who needs an EORI number?</h2>
<ul>
<li><strong>UK businesses importing or exporting goods</strong> between Great Britain and countries outside the UK, including the EU.</li>
<li><strong>Businesses moving goods between Great Britain and Northern Ireland</strong>, or between Northern Ireland and non-EU countries, which may need an XI EORI.</li>
<li><strong>EU-established businesses</strong> carrying out customs operations, which apply in their own member state.</li>
<li><strong>Non-UK and non-EU businesses</strong> that will lodge customs declarations, act as importer of record, or act as carriers.</li>
</ul>
<p>GOV.UK says you do <a href="https://www.gov.uk/eori" target="_blank" rel="noopener noreferrer">not need an EORI</a> if you are moving goods that are both non-controlled and for personal use only. Businesses in the Channel Islands moving goods to or from the UK are also exempt. Service businesses that never move physical goods do not need one.</p>

<h2>GB, XI and EU EORI numbers compared</h2>
<table><thead><tr><th>Type</th><th>Issued by</th><th>Format</th><th>Used for</th><th>Prerequisite</th></tr></thead><tbody>
<tr><td>GB EORI</td><td>HMRC</td><td>GB plus 12 digits</td><td>Customs movements into or out of Great Britain</td><td>None; usually UK premises</td></tr>
<tr><td>XI EORI</td><td>HMRC</td><td>XI plus digits</td><td>Movements to and from Northern Ireland under its arrangements</td><td>Must already hold a GB EORI</td></tr>
<tr><td>EU EORI</td><td>Member state customs authority</td><td>Two-letter country code plus up to 15 characters</td><td>Customs operations anywhere in the EU</td><td>Apply in country of establishment, or of first customs operation if non-EU</td></tr>
</tbody></table>
<p>One EU EORI covers the whole EU customs territory. A UK exporter who also imports into the EU as importer of record would need an EU EORI in addition to its GB number.</p>

<h2>How to apply for a GB EORI number</h2>
<ol>
<li><strong>Check you need one</strong> and that your business has qualifying UK premises, such as a registered office or permanent establishment.</li>
<li><strong>Gather your details.</strong> HMRC asks for your Unique Taxpayer Reference, business start date and SIC code (both on the Companies House register for companies), your VAT number and effective date if VAT registered, and your National Insurance number if you are a sole trader.</li>
<li><strong>Sign in or create sign-in details</strong> on GOV.UK and complete the online form via <a href="https://www.gov.uk/eori/apply-for-eori" target="_blank" rel="noopener noreferrer">Apply for an EORI number</a>.</li>
<li><strong>Receive your number</strong>, usually immediately, or within 5 working days if HMRC needs to make checks.</li>
<li><strong>Apply for an XI EORI</strong> separately if you move goods to or from Northern Ireland and need one.</li>
<li><strong>Share it</strong> with your courier, freight forwarder or customs agent, and add it to your commercial invoice template.</li>
</ol>
<p>Sole traders follow the same process. If you have just started, our guide on <a href="/blog/how-to-register-as-self-employed-uk">how to register as self-employed in the UK</a> covers getting a UTR first.</p>

<h3>Applying for an EU EORI</h3>
<p>EU-established businesses apply to the national customs authority where they are established. A business with no EU establishment applies in the member state where it will carry out its first customs operation, such as lodging an import declaration. After that, the same number is used across the EU.</p>

<h2>Where the EORI goes on your paperwork</h2>
<table><thead><tr><th>Document</th><th>Whose EORI</th><th>Notes</th></tr></thead><tbody>
<tr><td><a href="/blog/commercial-invoice-template">Commercial invoice</a></td><td>Exporter's, and importer's if known</td><td>Show next to name, address and VAT number</td></tr>
<tr><td>Export declaration</td><td>Exporter or declarant</td><td>Usually lodged by your courier or agent using your details</td></tr>
<tr><td>Import declaration</td><td>Importer of record</td><td>Depends on Incoterms; DDP shifts this to the seller</td></tr>
<tr><td>Courier or postal customs forms</td><td>Sender for business shipments</td><td>Couriers prompt for it on business exports</td></tr>
<tr><td><a href="/blog/proforma-invoice-for-customs">Proforma invoice for customs</a></td><td>Exporter's</td><td>For samples, repairs or goods not yet sold</td></tr>
</tbody></table>
<p>Alongside the EORI, customs will want accurate commodity codes; see our guide to the <a href="/blog/hs-code-on-commercial-invoice">HS code on a commercial invoice</a>.</p>

<h2>Worked example: a UK seller shipping to Germany</h2>
<p>This example is illustrative. Harbour Ceramics Ltd, a VAT-registered company in Bristol, sells £4,800 of tableware to a café group in Berlin.</p>
<table><thead><tr><th>Item</th><th>Under DAP terms</th><th>Under DDP terms</th></tr></thead><tbody>
<tr><td>Who exports from GB</td><td>Harbour Ceramics, using its GB EORI</td><td>Harbour Ceramics, using its GB EORI</td></tr>
<tr><td>Who imports into Germany</td><td>The Berlin buyer, using its DE EORI</td><td>Harbour Ceramics, needing an EU EORI</td></tr>
<tr><td>Who pays German import VAT and duty</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>EORIs on the commercial invoice</td><td>GB EORI for seller, DE EORI for buyer</td><td>Seller's GB EORI and its EU EORI</td></tr>
</tbody></table>
<p>Because Harbour Ceramics has no EU establishment, choosing DDP would mean applying for an EU EORI in Germany, where its first EU customs operation would happen, and probably registering for German VAT. Most small UK sellers choose DAP for B2B orders and quote the buyer's EORI on the invoice. Our guide to <a href="/blog/incoterms-on-invoice">Incoterms on an invoice</a> explains these choices.</p>

<h2>Common EORI mistakes</h2>
<ul>
<li><strong>Waiting until goods are at the border.</strong> Apply when you take your first export order.</li>
<li><strong>Typing the VAT number instead of the EORI.</strong> The GB EORI usually ends in 000 for VAT-registered firms; check it.</li>
<li><strong>Not holding an XI EORI</strong> when Northern Ireland movements require one.</li>
<li><strong>Agreeing to DDP without an EU EORI</strong> or a plan for import VAT.</li>
<li><strong>Not validating the customer's EORI.</strong> Use GOV.UK's checker or the EU validation tool before shipping.</li>
<li><strong>Paying a third-party site to apply.</strong> The official application is free.</li>
</ul>

<h2>EORI, VAT and customs agents: how they fit together</h2>
<p>The EORI identifies you to customs; it does not register you for VAT or pay anything. When a VAT-registered UK business imports goods, it can usually account for import VAT on its VAT return through postponed VAT accounting rather than paying it at the border, but that also relies on customs records tied to the right EORI and VAT number. If the numbers on the declaration do not match your registration, the VAT statement you need for your return may not show the import.</p>
<p>Most small businesses do not file customs declarations themselves. A courier, freight forwarder or customs broker lodges them using your EORI, and you authorise them to act for you, either directly (they act in your name) or indirectly (they share liability). Either way, you remain responsible for the accuracy of the data you supply: the description, value, origin and commodity code on your commercial invoice. Before your first shipment, send your agent:</p>
<ul>
<li>your GB EORI (and XI or EU EORI if relevant) and VAT number;</li>
<li>a sample commercial invoice showing Incoterms, currency and values;</li>
<li>commodity codes and country of origin for each product line;</li>
<li>the buyer's EORI and contact details when the buyer is importing.</li>
</ul>
<h3>Small online sellers</h3>
<p>Ecommerce sellers posting low-value parcels to EU consumers face extra layers such as the EU's Import One-Stop Shop for VAT. Those VAT rules are separate from the EORI, but couriers will still request your EORI for business exports. If you sell to EU consumers regularly, read our overview of the <a href="/blog/eu-vat-one-stop-shop">EU VAT One Stop Shop</a>. Some large EU buyers also ask suppliers for a <a href="/blog/duns-number">DUNS number</a> during onboarding, a separate identifier that has nothing to do with customs.</p>

<h2>What to do if your EORI details change</h2>
<p>If your company name, address or legal entity changes, update HMRC or your EU customs authority. A sole trader who incorporates becomes a new legal person and needs a new EORI for the company. The same applies when a business is sold as a going concern to a new owner entity. If you stop trading altogether, you can ask for the number to be deactivated, which avoids someone else using stale details. Keep records of the date each EORI was valid, because customs can query declarations made years earlier, and you will need to show which entity was responsible at the time. Keep invoices, declarations and courier profiles consistent with the new details, and record the change in your <a href="/blog/invoice-international-clients">international client invoicing</a> templates.</p>
<p>When your EORI is ready, add it to every export invoice. Our free <a href="/invoice-generator">invoice generator</a> lets you include your EORI, VAT number and Incoterms in the business details, with no sign-up, and download the finished invoice as a PDF for customs.</p>
`,
  },
];
