import type { PostDraft } from "../blog";

export const US_LLC_2026_POSTS: PostDraft[] = [
  {
    slug: "llc-operating-agreement",
    title: "LLC Operating Agreement: What to Include and When You Need One",
    description:
      "An LLC operating agreement explained: which states require one, key clauses, a single-member operating agreement template outline and a worked profit split.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-an-llc",
      "llc-vs-sole-proprietorship",
      "s-corp-vs-llc",
      "how-to-file-taxes-as-an-llc",
    ],
    faqs: [
      {
        q: "Is an LLC operating agreement legally required?",
        a: "It depends on the state. Most states do not force an LLC to sign one, but a few do. New York's LLC Law, for example, says members shall adopt a written operating agreement, either before filing the articles of organization or within 90 days after. Even where it is optional, the SBA recommends having one, because without it your state's default LLC rules decide how profits, votes and exits work.",
      },
      {
        q: "Do I file my operating agreement with the state?",
        a: "Usually not. The operating agreement is an internal document that you sign and keep with your company records. The state only receives the articles of organization (or certificate of formation) and later reports. Banks, lenders, landlords and sometimes payment processors may ask to see a copy, so keep a signed PDF that is easy to send, and store the original with your EIN letter and formation documents.",
      },
      {
        q: "Does a single-member LLC need an operating agreement?",
        a: "Legally it often does not, unless your state requires one. Practically it is still worth having. A single-member operating agreement shows that the LLC is a separate business, which supports your liability protection, and it says what happens if you die or become incapacitated. Banks frequently ask for one before opening a business account, and it gives you a clear rule for adding a member later.",
      },
      {
        q: "What should an LLC operating agreement include?",
        a: "At minimum: the LLC's name, state and purpose; the members and their ownership percentages; capital contributions; how profits, losses and distributions are allocated; whether it is member-managed or manager-managed; voting rules; how new members join; transfer and buyout terms; what happens on death, disability or exit; tax classification; and dissolution steps. Add bookkeeping and banking rules so money matters are clear from day one.",
      },
      {
        q: "Can I write my own operating agreement?",
        a: "Yes. There is no rule that a lawyer must draft it, and many single-member owners use a template and adapt it. The risk grows with complexity. If you have several members, unequal contributions, outside investors, a planned S corporation election or valuable assets, paying a business attorney to draft or review the agreement is usually money well spent because a vague buyout clause can cost far more later.",
      },
      {
        q: "What happens if my LLC has no operating agreement?",
        a: "Your state's LLC statute fills the gaps. Those default rules may split profits equally regardless of who put in more money, require unanimous consent for major decisions, or treat a member's departure in a way nobody intended. Without a written agreement it is also harder to prove the LLC is a genuinely separate business, which can matter if a creditor tries to reach the owners' personal assets.",
      },
      {
        q: "Can an operating agreement be changed later?",
        a: "Yes. Most agreements include an amendment clause that says how changes are approved, often by a majority or unanimous vote of members. Put every amendment in writing, have all members sign it, date it, and keep it with the original. Common amendments cover a new member, a change in ownership percentages, a switch to manager management or a new tax election.",
      },
      {
        q: "Is an operating agreement the same as articles of organization?",
        a: "No. Articles of organization (called a certificate of formation in some states) are the short public filing that creates the LLC, usually listing its name, registered agent and address. The operating agreement is the private, much more detailed contract between the members about ownership, money, management and exits. You need the articles to exist as an LLC; you need the operating agreement to run it predictably.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An LLC operating agreement is the internal contract that sets out who owns your LLC, how profits are split, who makes decisions and what happens if a member leaves. A few states, such as New York, require a written one; most do not, but the SBA recommends having one anyway, including for a single-member LLC.</p>

<p>When you form a limited liability company, the state only sees a short public filing. Everything that really matters between the owners, from who gets paid first to who can sign a contract, lives in the LLC operating agreement. This guide explains when the law requires one, what to put in it, how a single-member operating agreement template differs from a multi-member one, and how the agreement connects to everyday tasks like opening a bank account and sending invoices from your <a href="/invoice-generator">free invoice generator</a>. If you have not formed the company yet, start with our walkthrough on <a href="/blog/how-to-start-an-llc">how to start an LLC</a>.</p>

<p><strong>Note:</strong> This is general information, not legal or tax advice. LLC law, fees and rules vary by state, so check your state's statute or speak with a business attorney before you sign.</p>

<h2>What an LLC operating agreement is</h2>
<p>An operating agreement is a private contract between the members (owners) of an LLC, and between the members and the company. The SBA describes it as a document that sets out the structure of your company's financial and functional decisions. It is not filed with the state in most cases. You sign it, store it with your records and pull it out when a question arises.</p>
<p>Think of the formation documents as two layers:</p>
<ul>
<li><strong>Articles of organization</strong> (or a certificate of formation): the short public filing that brings the LLC into existence. It usually lists the name, the <a href="/blog/registered-agent">registered agent</a> and sometimes the management structure.</li>
<li><strong>Operating agreement</strong>: the detailed rulebook. It covers ownership, money, voting, transfers, exits and dissolution.</li>
</ul>
<p>If the operating agreement is silent on something, your state's LLC statute supplies a default rule. Those defaults were not written with your business in mind, which is the main reason to write your own.</p>

<h2>Do you legally need an LLC operating agreement?</h2>
<p>In most states the agreement is optional, but not everywhere. New York is the clearest example: Section 417 of the New York LLC Law says the members of an LLC shall adopt a written operating agreement, and allows it to be made before the articles are filed, at filing, or within 90 days afterwards. You can read the text in the <a href="https://www.nysenate.gov/legislation/laws/LLC/417" target="_blank" rel="noopener noreferrer">New York LLC Law, Section 417</a>. A handful of other states also refer to operating agreements in their statutes, so check your own state's LLC act rather than assuming.</p>
<p>Even when the law is relaxed, outside parties often are not. You are likely to be asked for a copy when you:</p>
<ul>
<li>Open a business checking account (see our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>).</li>
<li>Apply for a loan, line of credit or lease.</li>
<li>Bring in a partner or investor.</li>
<li>Need to prove who can sign contracts on behalf of the LLC.</li>
</ul>
<p>The SBA's guidance on <a href="https://www.sba.gov/business-guide/launch-your-business/register-your-business" target="_blank" rel="noopener noreferrer">registering your business</a> puts it simply: having one is widely recommended even if your state does not mandate it.</p>

<h2>What to include in an LLC operating agreement</h2>
<p>Good agreements answer the questions that cause disputes before anyone is upset. The table below lists the core sections and why each one matters.</p>
<table>
<thead><tr><th>Section</th><th>What it covers</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Formation details</td><td>Legal name, state, principal address, purpose, start date</td><td>Matches your state filing and bank records</td></tr>
<tr><td>Members and ownership</td><td>Each member's name and percentage interest</td><td>Drives profit splits and voting</td></tr>
<tr><td>Capital contributions</td><td>Cash, equipment or services each member puts in, and whether more can be required</td><td>Avoids "who paid for what" disputes</td></tr>
<tr><td>Allocations and distributions</td><td>How profit and loss are allocated and when cash is paid out</td><td>Directly affects each member's tax return</td></tr>
<tr><td>Management</td><td>Member-managed or manager-managed, officer titles, signing authority</td><td>Shows who can bind the LLC</td></tr>
<tr><td>Voting</td><td>Which decisions need majority, supermajority or unanimous approval</td><td>Stops one member acting alone on big moves</td></tr>
<tr><td>Transfers and new members</td><td>Right of first refusal, approval for new members</td><td>Keeps strangers out of the company</td></tr>
<tr><td>Buyout and exit</td><td>Valuation method, payment terms, death and disability</td><td>The clause most often needed and most often missing</td></tr>
<tr><td>Tax classification</td><td>Default treatment or an S or C corporation election</td><td>Aligns with how you file</td></tr>
<tr><td>Dissolution</td><td>Who decides to close and how assets are distributed</td><td>Makes a clean wind-down possible</td></tr>
</tbody>
</table>

<h3>Money and record-keeping clauses</h3>
<p>Add a short section on financial housekeeping. State that the LLC keeps its own bank account, that members do not mix personal and business funds, and that every sale is billed on a numbered company invoice. Using a consistent sequence from an <a href="/tools/invoice-number-generator">invoice number generator</a> and keeping books under the LLC's name, as our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide describes, are habits that help show the LLC is a real, separate business.</p>

<h3>Tax classification clause</h3>
<p>By default the IRS treats a single-member LLC as a disregarded entity and a multi-member LLC as a partnership. The agreement should say which classification you use and who may make elections. If you are thinking about electing S corporation status, read our comparison of <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> first, because that election changes how members are paid.</p>

<h2>Single-member operating agreement template: what changes</h2>
<p>A single-member operating agreement is shorter, because there is nobody to vote against or buy out. It still matters, mainly for three reasons: it supports the separation between you and the business, it tells a bank who controls the account, and it says what happens to the company if you die or cannot act.</p>
<p>A practical single-member operating agreement template outline looks like this:</p>
<ol>
<li><strong>Article 1, Formation:</strong> name, state of formation, filing date, principal office, registered agent.</li>
<li><strong>Article 2, Purpose:</strong> "any lawful business" or a specific description.</li>
<li><strong>Article 3, Sole member:</strong> your name, 100% ownership, initial capital contribution.</li>
<li><strong>Article 4, Management:</strong> member-managed, with you authorized to sign contracts, open accounts and hire.</li>
<li><strong>Article 5, Finances:</strong> separate bank account, books kept under the LLC's name, fiscal year.</li>
<li><strong>Article 6, Tax treatment:</strong> disregarded entity unless an election is filed.</li>
<li><strong>Article 7, Liability and indemnification:</strong> the member is not personally liable for company debts beyond the law's limits; the LLC indemnifies the member for good-faith acts.</li>
<li><strong>Article 8, Succession:</strong> who takes over (a named successor, your estate or a designated manager) on death or incapacity.</li>
<li><strong>Article 9, Admission of new members:</strong> how a second member can join and that the agreement will be rewritten at that point.</li>
<li><strong>Article 10, Dissolution:</strong> how you wind up and where remaining assets go.</li>
</ol>
<p>Sign and date it, and attach a schedule listing your contribution. If you later add a partner, replace it with a full multi-member agreement rather than patching the single-member version.</p>

<h2>Multi-member agreements: the clauses that prevent disputes</h2>
<p>Once there are two or more owners, the agreement becomes a real negotiation. Focus on four areas.</p>
<h3>Capital and extra contributions</h3>
<p>Write down what each person contributed and its agreed value. Decide whether members must fund future shortfalls and what happens if one does not, for example a dilution of their percentage.</p>
<h3>Distributions and tax distributions</h3>
<p>Members of a multi-member LLC pay tax on their share of profit whether or not cash is distributed. A "tax distribution" clause requires the LLC to pay out at least enough cash for members to cover their estimated taxes. Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains why timing matters.</p>
<h3>Decision thresholds</h3>
<p>List decisions that need more than a simple majority: taking on debt above a set amount, selling the business, admitting a member, changing the agreement and dissolving the company.</p>
<h3>Buy-sell terms</h3>
<p>Spell out how a departing member's share is valued (an agreed formula, an annual agreed value or an independent appraisal) and how it is paid, such as a down payment plus installments over a set number of years.</p>

<h2>Member-managed vs manager-managed LLCs</h2>
<p>One of the biggest choices your agreement records is who runs the company day to day. The two models work very differently.</p>
<ul>
<li><strong>Member-managed:</strong> every owner can take part in running the business and, unless the agreement limits it, can sign contracts on the LLC's behalf. This suits single-member LLCs and small partnerships where all owners work in the business.</li>
<li><strong>Manager-managed:</strong> the members appoint one or more managers (who may or may not be members) to run operations. Passive members keep their economic rights but cannot bind the company. This suits LLCs with silent investors or family members who own a share but do not work in the business.</li>
</ul>
<p>Whichever you choose, make your formation filing and your agreement say the same thing. If your articles list the LLC as manager-managed but the agreement treats every member as a manager, a bank or court may not know whose signature counts. Also define spending limits: for example, any member may approve expenses up to a set amount, while larger purchases, new debt or hiring need a vote. Those limits are especially useful for approving supplier bills and signing client contracts, and they make it obvious who should approve and send each invoice.</p>

<h2>Worked example: a 60/40 profit distribution</h2>
<p>Here is how a clear agreement turns a year's numbers into payouts. Two members form a design studio LLC. Member A contributes $6,000 and Member B contributes $4,000, so total capital is $10,000 and ownership is 60% and 40%.</p>
<p>The agreement says profit is allocated by ownership percentage, and that the LLC keeps a 20% cash reserve before distributions.</p>
<table>
<thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Net profit for the year</td><td>From the books</td><td>$90,000</td></tr>
<tr><td>Reserve kept in the LLC</td><td>$90,000 x 20%</td><td>$18,000</td></tr>
<tr><td>Cash available to distribute</td><td>$90,000 - $18,000</td><td>$72,000</td></tr>
<tr><td>Member A distribution</td><td>$72,000 x 60%</td><td>$43,200</td></tr>
<tr><td>Member B distribution</td><td>$72,000 x 40%</td><td>$28,800</td></tr>
<tr><td>Member A taxable share of profit</td><td>$90,000 x 60%</td><td>$54,000</td></tr>
<tr><td>Member B taxable share of profit</td><td>$90,000 x 40%</td><td>$36,000</td></tr>
</tbody>
</table>
<p>Check: $43,200 + $28,800 = $72,000, and $54,000 + $36,000 = $90,000. Notice the gap: each member is taxed on their full share ($54,000 and $36,000) even though $18,000 stayed in the business. That is exactly why the tax distribution clause matters. Without the agreement, many state default rules would ignore the 60/40 contribution split altogether.</p>

<h2>How to create your operating agreement step by step</h2>
<ol>
<li><strong>Confirm your state's rules.</strong> Check whether your state requires a written agreement and by when (New York, for example, allows 90 days after filing).</li>
<li><strong>Gather formation details.</strong> Have your articles of organization, filing date, registered agent and EIN ready. If you do not have an EIN yet, see <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Choose a template that matches your structure.</strong> Single-member, member-managed multi-member or manager-managed.</li>
<li><strong>Agree the money terms.</strong> Contributions, ownership percentages, allocations, distributions and reserves.</li>
<li><strong>Agree control terms.</strong> Who manages, who signs, which decisions need a vote.</li>
<li><strong>Write the exit terms.</strong> Buyouts, death, disability, transfers and dissolution.</li>
<li><strong>Get a review if the stakes are high.</strong> Multi-member or investor-backed LLCs should have a lawyer check it.</li>
<li><strong>Sign, date and store it.</strong> Every member signs. Keep the signed PDF with your formation documents.</li>
<li><strong>Review it yearly.</strong> Update it when ownership, management or tax elections change.</li>
</ol>

<h2>Using your operating agreement in day-to-day business</h2>
<p>The agreement is not a document you sign and forget. It shapes ordinary paperwork:</p>
<ul>
<li><strong>Invoices and contracts go out in the LLC's name.</strong> Use the exact legal name from your articles (and any registered trade name or DBA), plus the LLC's own <a href="/blog/tax-id-on-invoice">tax ID on the invoice</a> where appropriate. A clean template from <a href="/invoice-templates/corporate">our corporate invoice template</a> keeps that consistent.</li>
<li><strong>Signing authority is clear.</strong> If the agreement says only managers sign contracts above a limit, follow it.</li>
<li><strong>Distributions follow the formula.</strong> Pay members by the agreed schedule rather than ad hoc transfers.</li>
<li><strong>Annual compliance gets done.</strong> Assign responsibility for the <a href="/blog/llc-annual-report">LLC annual report</a> and taxes so nothing is missed.</li>
</ul>

<h3>Common LLC operating agreement mistakes</h3>
<ul>
<li><strong>Copying a template without reading it.</strong> Generic forms may include clauses from another state's law or a structure you do not use.</li>
<li><strong>No buyout formula.</strong> The most expensive omission when members fall out.</li>
<li><strong>Ignoring tax distributions.</strong> Members end up owing tax on cash they never received.</li>
<li><strong>Mixing personal and business money.</strong> This undermines the separation the agreement describes.</li>
<li><strong>Never updating it.</strong> An agreement listing a member who left two years ago causes problems at the bank and on dissolution, a process covered in our guide on <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a>.</li>
</ul>

<h2>Create your first LLC invoice</h2>
<p>An LLC operating agreement gives your company clear rules on ownership, money and control; the next step is billing like the separate business it is. Put the LLC's legal name, address and invoice number on every bill with our <a href="/invoice-generator">free invoice generator</a>, pick a layout from the <a href="/invoice-templates">invoice templates</a> gallery, and see the <a href="/user-guide">user guide</a> if you want a quick tour first. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "registered-agent",
    title: "Registered Agent: What It Is, Cost and Being Your Own",
    description:
      "What a registered agent does for an LLC, state rules, whether to be your own registered agent, what agent services cost and how to change agents.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-an-llc",
      "llc-vs-sole-proprietorship",
      "what-is-a-dba",
      "how-to-get-an-ein",
    ],
    faqs: [
      {
        q: "What is a registered agent?",
        a: "A registered agent is the person or company named in your state filing to receive official papers for your business, such as lawsuits (service of process), subpoenas and state notices. The SBA says LLCs, corporations, partnerships and nonprofit corporations need one, and that the agent must be located in the state where you register. The agent's name and address are part of the public record.",
      },
      {
        q: "Can I be my own registered agent?",
        a: "In most states, yes, if you are an adult with a physical street address in that state and you are available there during normal business hours to accept papers. The drawbacks are privacy, because your address becomes public, and availability, because you must be reachable at that address. If you work from home, travel often or operate in several states, a commercial service is usually more practical.",
      },
      {
        q: "How much does a registered agent cost?",
        a: "Acting as your own agent costs nothing beyond your time. Commercial services charge an annual fee, and prices vary widely by provider and by what is bundled, such as mail scanning, compliance reminders or a first year included with formation. Compare the renewal price, not just the introductory offer, and remember you need an agent in every state where the LLC is registered.",
      },
      {
        q: "Can a registered agent use a PO box?",
        a: "Generally no. States require a physical street address where someone can actually be served in person. Delaware, for instance, describes the minimum requirement as maintaining a street address and office in Delaware that is open during normal business hours. A PO box or a mail drop with no one to accept papers will not satisfy the rule, and your filing may be rejected.",
      },
      {
        q: "What happens if I don't have a registered agent?",
        a: "Your state can refuse your formation filing, and an existing LLC without a valid agent can fall out of good standing and eventually be administratively dissolved. Worse, if someone sues the LLC and cannot serve the agent, the case may proceed through alternative service and you might not hear about it in time, which can lead to a default judgment against the company.",
      },
      {
        q: "How do I change my registered agent?",
        a: "File your state's change of registered agent form (often called a statement of change) with the secretary of state, or update the agent on your annual report if your state allows it. Get the new agent's consent first. Many states charge a small filing fee, which varies by state. Once filed, update your records and tell the old agent so mail is forwarded during the switch.",
      },
      {
        q: "Do I need a registered agent in every state?",
        a: "You need one in your home state and in every state where you register the LLC to do business as a foreign LLC. Each state requires an agent with an in-state street address. If you form in one state and operate in another, that usually means two agents, which is one reason many small businesses simply form in the state where they actually work.",
      },
      {
        q: "Is a registered agent the same as a business address?",
        a: "No. The registered agent's address is where legal papers are served. Your principal business address is where you run the company, and your mailing address is where ordinary mail goes. They can be the same if you act as your own agent, but many owners use a commercial agent's address for service of process and keep their home address off at least that part of the public record.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A registered agent is the person or company your LLC names to receive lawsuits and official state mail. Every state requires one with a physical in-state address. You can usually be your own registered agent for free, or pay a commercial service an annual fee; costs and rules vary by state.</p>

<p>When you form an LLC, one of the first boxes on the state form asks for a registered agent. It looks like a formality, but this is the channel through which courts and the state reach your business. This guide explains what a registered agent does, the legal requirements, the real cost of a service versus being your own registered agent, and how to switch. If you are still deciding on a structure, see <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>, and when you are ready to bill clients, our <a href="/invoice-generator">invoice generator</a> creates professional invoices in your LLC's name.</p>

<p><strong>Note:</strong> This is general information, not legal advice. Registered agent rules and fees vary by state, so confirm the details with your secretary of state.</p>

<h2>What a registered agent does</h2>
<p>A registered agent (called a statutory agent or resident agent in some states) is the official point of contact for legal and government documents. According to the SBA's guide to <a href="https://www.sba.gov/business-guide/launch-your-business/register-your-business" target="_blank" rel="noopener noreferrer">registering your business</a>, a registered agent receives official papers and legal documents on behalf of your company, and must be located in the state where you register. The agent typically handles:</p>
<ul>
<li><strong>Service of process:</strong> lawsuits, summonses and complaints against the LLC.</li>
<li><strong>Subpoenas and legal notices.</strong></li>
<li><strong>State correspondence:</strong> annual report reminders, franchise tax notices and good-standing warnings.</li>
<li><strong>Some tax notices</strong> sent by state agencies to the address of record.</li>
</ul>
<p>The agent's job is to accept these documents and pass them to you promptly. It is not a legal representative and does not answer the lawsuit for you.</p>

<h2>Registered agent requirements by state</h2>
<p>Every state sets its own rules, but the core requirements are remarkably consistent. Delaware's Division of Corporations, for example, summarizes the minimum legal requirement as maintaining a street address and office in Delaware that is open during normal business hours to accept service of process, and notes that the agent must consent to the appointment. Its page on <a href="https://corp.delaware.gov/agents/" target="_blank" rel="noopener noreferrer">Delaware registered agents</a> also states that registered agents are not regulated by the state, so owners should do their own due diligence.</p>
<table>
<thead><tr><th>Requirement</th><th>What it usually means</th><th>Common pitfall</th></tr></thead>
<tbody>
<tr><td>Physical in-state address</td><td>A real street address in the state of registration</td><td>Listing a PO box or virtual mailbox</td></tr>
<tr><td>Availability</td><td>Someone present during normal business hours</td><td>A home address where nobody is in during the day</td></tr>
<tr><td>Eligibility</td><td>An adult resident or a business entity authorized to act as agent</td><td>Naming a friend who later moves away</td></tr>
<tr><td>Consent</td><td>The agent agrees to serve before you file</td><td>Naming a service you have not signed up with</td></tr>
<tr><td>Public record</td><td>Agent name and address appear in the state database</td><td>Not realizing your home address becomes searchable</td></tr>
<tr><td>Keep it current</td><td>File a change if the agent or address changes</td><td>Letting the agent lapse and losing good standing</td></tr>
</tbody>
</table>
<p>Because requirements and fees vary by state, check your own secretary of state's website before you file your formation documents. Our guide to <a href="/blog/how-to-start-an-llc">starting an LLC</a> shows where the agent fits into the overall filing.</p>

<h2>Being your own registered agent: pros and cons</h2>
<p>Being your own registered agent is legal in most states if you are an adult with an in-state street address. It is the cheapest option, but it is not always the best.</p>
<h3>Advantages</h3>
<ul>
<li><strong>No annual fee.</strong> You avoid a recurring subscription.</li>
<li><strong>Direct receipt.</strong> Papers come straight to you with no forwarding delay.</li>
<li><strong>Simple for a single-state business</strong> run from a staffed office or shop.</li>
</ul>
<h3>Disadvantages</h3>
<ul>
<li><strong>Privacy.</strong> Your name and address go into a public database, which can attract junk mail and solicitations. For home-based freelancers this is the biggest drawback.</li>
<li><strong>Availability.</strong> You must be at that address during business hours. If you are on a job site, travelling or on vacation, service can be missed.</li>
<li><strong>Awkward delivery.</strong> A process server could arrive at your home or in front of customers.</li>
<li><strong>Multi-state limits.</strong> You cannot be the agent in a state where you have no address.</li>
</ul>
<p>A useful rule of thumb: if your business has a staffed storefront or office in one state, being your own agent often works fine. If you work from home, travel or are registered in more than one state, a service is usually worth considering.</p>

<h2>Registered agent cost: what you actually pay</h2>
<p>The cost breaks into three parts:</p>
<ol>
<li><strong>The agent itself.</strong> Free if you serve yourself or use a trusted person. Commercial providers charge an annual fee that varies by provider and bundle; Delaware alone lists over a hundred agents on its official page, from large national firms to small local offices.</li>
<li><strong>State filing fees.</strong> Naming an agent at formation costs nothing extra; changing agents later usually requires a state form with its own fee, which varies by state.</li>
<li><strong>Multi-state multiplier.</strong> Each state where the LLC is registered needs its own agent, so costs scale with your footprint.</li>
</ol>
<p>When comparing services, look beyond the headline price:</p>
<ul>
<li>Is the advertised price the first year only, with a higher renewal?</li>
<li>Does it include same-day scanning of documents and email alerts?</li>
<li>Does it forward ordinary mail, or only legal papers?</li>
<li>Does it send compliance reminders for your <a href="/blog/llc-annual-report">LLC annual report</a>?</li>
<li>Is there a fee to resign or transfer to another agent?</li>
</ul>
<h3>The hidden cost of a missed delivery</h3>
<p>The subscription fee is only part of the picture. The bigger financial risk is missing a document. If a lawsuit is served while nobody is at your address, or a state notice about an overdue report sits unopened, the consequences can include late penalties, loss of good standing or a default judgment. Compared with those outcomes, the annual fee for reliable coverage is modest, which is why many owners treat the agent as insurance rather than an optional extra. Whichever route you choose, record the expense or the time it takes in your books, and review the arrangement each year when you file your annual report.</p>

<h2>Worked example: comparing the true cost over three years</h2>
<p>Suppose a home-based consultant forms an LLC in her home state and also registers as a foreign LLC in a neighboring state where she has a large client. She receives a hypothetical quote of $125 per year per state from a commercial agent. Being her own agent is possible only in her home state, because she has no address in the second state.</p>
<table>
<thead><tr><th>Option</th><th>Calculation</th><th>3-year cost</th></tr></thead>
<tbody>
<tr><td>Commercial agent in both states</td><td>$125 x 2 states x 3 years</td><td>$750</td></tr>
<tr><td>Self in home state, service in second state</td><td>$0 + ($125 x 1 x 3)</td><td>$375</td></tr>
<tr><td>Difference</td><td>$750 - $375</td><td>$375</td></tr>
</tbody>
</table>
<p>Saving $375 over three years is real money, but she must weigh it against putting her home address in the public record and being available every business day. Many owners decide the privacy is worth roughly $10 a month ($125 / 12 = about $10.42). Plug in your own quotes: the arithmetic is the same.</p>
<p>If she bills her out-of-state client for that registration cost, it simply goes on the invoice as a line item. For example, a monthly retainer of $3,000 with a 5% early-payment discount comes to $2,850 in the <a href="/invoice-generator/usa">US invoice generator</a>, and if the client already paid a $1,000 deposit, the amount paid field shows a balance due of $1,850.</p>

<h2>When a registered agent service makes sense</h2>
<p>A commercial registered agent is not mandatory, but several situations make one the sensible choice:</p>
<ul>
<li><strong>You work from home.</strong> A service keeps your home address off the agent line of the public record and avoids a process server knocking on your front door. Your address may still appear elsewhere in your filings, so check what your state publishes.</li>
<li><strong>You are often away.</strong> Tradespeople on job sites, consultants who travel and seasonal businesses can easily miss a delivery during business hours.</li>
<li><strong>You operate in several states.</strong> Each state where you register as a foreign LLC needs an in-state agent, and a single national provider can cover all of them with one dashboard and one renewal date.</li>
<li><strong>You formed out of state.</strong> If you formed in a state where you have no office, you cannot be your own agent there at all.</li>
<li><strong>You want reminders.</strong> Many services send alerts for annual reports and franchise taxes, which helps if you tend to miss deadlines.</li>
</ul>
<p>On the other hand, if you run a shop with regular opening hours in a single state, naming yourself or a trusted manager at that address is usually straightforward. You can always switch later.</p>

<h3>Registered agent vs other roles</h3>
<p>New owners sometimes confuse the registered agent with other people named on business paperwork. The organizer is whoever signs and files the articles of organization; once the LLC exists, that role is over. Members own the LLC, managers run it if it is manager-managed, and the responsible party on your EIN application is the person the IRS treats as controlling the entity. The registered agent can be any of these people, or none of them. Its only job is to be reliably available to receive official documents at a fixed in-state address.</p>

<h2>How to choose a registered agent</h2>
<ol>
<li><strong>List every state where you are registered</strong> or plan to register as a foreign LLC.</li>
<li><strong>Decide where you can serve yourself</strong> (only states where you have a staffed street address).</li>
<li><strong>Get two or three quotes</strong> for the remaining states and compare renewal prices.</li>
<li><strong>Check the notification process:</strong> scanning speed, email alerts and an online document portal.</li>
<li><strong>Read the cancellation terms,</strong> including any resignation fees.</li>
<li><strong>Sign up and get consent</strong> before you name the agent on a state filing.</li>
<li><strong>Record the agent details</strong> in your operating agreement or company records. See our guide to the <a href="/blog/llc-operating-agreement">LLC operating agreement</a> for where this fits.</li>
</ol>

<h2>How to change your registered agent</h2>
<p>Switching agents is routine. The usual sequence is:</p>
<ol>
<li>Choose the new agent and get their written consent.</li>
<li>File your state's change of registered agent form (sometimes called a statement of change), or update the agent on your annual report if your state allows that route.</li>
<li>Pay the state filing fee, which varies by state.</li>
<li>Confirm the change appears in the state's online business search.</li>
<li>Notify the old agent and ask them to forward anything received during the transition.</li>
<li>Update your records, website footer and bank details if any address changed.</li>
</ol>
<p>Do not cancel the old service until the state has accepted the change. A gap with no valid agent can put the LLC out of good standing.</p>

<h2>Registered agent, business address and invoices</h2>
<p>A frequent question is which address goes on your invoices. The answer: your principal business address or mailing address, not necessarily the registered agent's address. The agent's address is for service of process. On invoices, show:</p>
<ul>
<li>The LLC's exact legal name (and a trade name if you use one, see <a href="/blog/what-is-a-dba">what a DBA is</a>).</li>
<li>Your business mailing address and contact email.</li>
<li>A unique invoice number from a consistent sequence, such as one from our <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li>Your EIN or other tax ID where a client needs it; our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers when to include it.</li>
</ul>
<p>Choosing a clean layout from our <a href="/invoice-templates/minimal">minimal invoice template</a> keeps all of that tidy on one page.</p>

<h3>What happens if your registered agent fails</h3>
<p>If your agent resigns, moves or stops responding, the state may treat the LLC as lacking a valid agent. Consequences can include loss of good standing, inability to get a certificate of good standing for a loan, and in time administrative dissolution. If a lawsuit cannot be served on the agent, a court may allow alternative service, and you might learn about a judgment only when your bank account is frozen. Check the state record once a year when you file your annual report, and if you ever decide to wind down the business, keep the agent in place until the process in our guide on <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a> is complete.</p>

<h2>Get your LLC paperwork and billing in order</h2>
<p>A registered agent keeps your LLC reachable and in good standing; whether you act as your own registered agent or pay a service, keep the details current in every state. Then make sure the money side is just as tidy: create branded invoices in your LLC's name with our <a href="/invoice-generator">free invoice generator</a>, or browse the <a href="/invoice-templates">invoice templates</a> to find a layout that suits your business. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "llc-annual-report",
    title: "LLC Annual Report: Fees, Deadlines and How to File in 2026",
    description:
      "LLC annual report guide: what the filing is, 2026 annual report fees and deadlines in key states, late penalties and how to file on time step by step.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-start-an-llc",
      "how-to-file-taxes-as-an-llc",
      "year-end-invoicing-checklist",
      "s-corp-vs-llc",
    ],
    faqs: [
      {
        q: "What is an LLC annual report?",
        a: "It is a short filing most states require so their business records stay current. It usually confirms the LLC's name, principal address, registered agent and members or managers, and comes with a fee. Despite the name, it is not a financial report and does not include your profit or tax figures. Some states call it a statement of information, a biennial statement or an annual list.",
      },
      {
        q: "When is my LLC annual report due?",
        a: "It depends on the state. Some use one fixed date for every LLC, such as Florida's May 1 deadline or Delaware's June 1 annual tax date. Others tie it to your formation anniversary, like New York's biennial statement, which is filed in the calendar month the LLC was originally formed. California wants a statement of information within 90 days of registering and then every two years.",
      },
      {
        q: "How much does an LLC annual report cost?",
        a: "Fees vary widely by state. As of 2026, examples include $20 every two years for California's statement of information and $9 every two years for New York's biennial statement. Delaware LLCs file no report but owe a $400 annual tax. Published 2026 guides put Florida's annual report at $138.75. Some states also charge a separate franchise or privilege tax.",
      },
      {
        q: "What happens if I miss my LLC annual report?",
        a: "Expect a late fee, then loss of good standing, and eventually administrative dissolution if you keep ignoring it. Delaware, for example, charges a $200 penalty plus 1.5% interest per month on unpaid LLC tax and penalty. A dissolved LLC may lose its name and its liability protection, and reinstating it usually costs more than the original filing would have.",
      },
      {
        q: "Do all states require an LLC annual report?",
        a: "No. Most do, but a few states have no general annual report for LLCs, and others require one only every two years. Some states without a report still collect an annual tax or a franchise tax report, as Delaware and Texas do. Check your secretary of state's website and your state revenue department, because the obligation may sit with either agency.",
      },
      {
        q: "Is the annual report the same as my LLC tax return?",
        a: "No. The annual report goes to the secretary of state and keeps the LLC registered. Tax returns go to the IRS and your state tax agency and report income. A single-member LLC usually reports on Schedule C, while a multi-member LLC files Form 1065. You have to do both, on separate deadlines, and paying one does not satisfy the other.",
      },
      {
        q: "Does a foreign LLC have to file an annual report?",
        a: "Yes, in most cases. If your LLC is registered to do business in a second state, it usually owes that state's annual report and fees on top of the report in its home state. That is why forming in Delaware or Wyoming while operating elsewhere often means paying two sets of fees. Track each state's deadline separately in your compliance calendar.",
      },
      {
        q: "Can I file my LLC annual report online?",
        a: "Almost every state now offers online filing through the secretary of state's portal, such as California's bizfile Online or Florida's Sunbiz. You typically look up the LLC by name or file number, confirm or update the details, and pay by card. Print or save the confirmation page and add the receipt to your bookkeeping as a business expense.",
      },
      {
        q: "Who should file the annual report for an LLC?",
        a: "Any authorized member, manager or officer can usually file, and many owners let their registered agent service or accountant do it. Whoever files, write the responsibility into your operating agreement or task list so it is not forgotten. Make sure the person filing has the current registered agent details and the correct principal address, because errors flow into the public record.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An LLC annual report is a short state filing that confirms your company's address, registered agent and managers and keeps the LLC in good standing. Annual report fees and deadlines vary by state: as of 2026, California charges $20 every two years, New York $9 every two years, and Delaware LLCs pay a $400 annual tax instead.</p>

<p>Forming the LLC is a one-time job; keeping it alive is an annual one. Every state wants to know that your company still exists, who runs it and where to send legal papers, and the LLC annual report is how they find out. Miss it and you can lose good standing, pay penalties and eventually see the company dissolved. This guide covers what the filing is, annual report fees and deadlines by state for several popular states, and a filing routine that fits alongside the rest of your admin, including billing through our <a href="/invoice-generator">free invoice generator</a>. If you are new to running an LLC, our guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a> explains where this fits.</p>

<p><strong>Note:</strong> This is general information, not legal or tax advice. Fees, deadlines and penalties vary by state and change over time, so confirm current figures on your secretary of state and state revenue websites before you file.</p>

<h2>What an LLC annual report is (and is not)</h2>
<p>An annual report is an informational filing with your state's business registry, usually the secretary of state. It typically asks you to confirm or update:</p>
<ul>
<li>The LLC's legal name and file number.</li>
<li>Principal office and mailing address.</li>
<li>Your <a href="/blog/registered-agent">registered agent</a> and its address.</li>
<li>Members or managers, depending on the state.</li>
<li>Sometimes a brief business description.</li>
</ul>
<p>It is not a financial statement. You do not attach a profit and loss report or a balance sheet, and it is not your tax return. Those go to the IRS and your state tax agency, covered in our guide to <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>.</p>
<p>The name differs from state to state: California calls it a statement of information, New York a biennial statement, Nevada an annual list. Some states, including Delaware for LLCs, skip the report and simply collect an annual tax.</p>

<h2>Annual report fees and deadlines by state</h2>
<p>The table below covers five popular states, using figures from official state sources where we could verify them as of 2026. It is a sample, not a full 50-state list, and fees vary by state and can change, so always confirm with the agency before filing.</p>
<table>
<thead><tr><th>State</th><th>Filing</th><th>Fee (as of 2026)</th><th>Deadline</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>California</td><td>Statement of Information (Form LLC-12)</td><td>$20</td><td>Within 90 days of registering, then every two years</td><td>Separate annual LLC tax ($800 minimum) paid to the Franchise Tax Board</td></tr>
<tr><td>Delaware</td><td>No annual report; annual LLC tax</td><td>$400 annual tax</td><td>June 1 (for the prior year)</td><td>Late: $200 penalty plus 1.5% interest per month</td></tr>
<tr><td>Texas</td><td>Franchise tax report plus Public Information Report</td><td>No tax due at or below $2.65 million revenue (2026 and 2027 reports)</td><td>May 15</td><td>Filed with the Comptroller, not the secretary of state</td></tr>
<tr><td>New York</td><td>Biennial statement</td><td>$9</td><td>Every two years, in the month the LLC was formed</td><td>Cannot be filed early or expedited</td></tr>
<tr><td>Florida</td><td>Annual report via Sunbiz</td><td>$138.75 (per published 2026 guides)</td><td>Window opens January 1, due May 1</td><td>Large late fee after May 1; confirm figures on Sunbiz</td></tr>
</tbody>
</table>
<p>Sources: the California Secretary of State's <a href="https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" target="_blank" rel="noopener noreferrer">California LLC forms and fees page</a>, Delaware's <a href="https://corp.delaware.gov/alt-entitytaxinstructions" target="_blank" rel="noopener noreferrer">LLC annual tax instructions</a>, the Texas Comptroller's franchise tax page and the New York Department of State's biennial statement page.</p>

<p>Beyond these five, the pattern is similar: most states charge a modest flat fee, a few collect a larger franchise or privilege tax, and the due date is either a fixed calendar day for everyone or your formation anniversary. Some states with higher fees offset them with no separate state income tax on the LLC, while others charge both. Nevada, for example, pairs an annual list with a state business licence renewal, so the true yearly cost there is more than the list fee alone. When you compare states, add every recurring item together rather than looking at the annual report fee on its own.</p>

<h3>California</h3>
<p>California's Statement of Information costs $20 and is due within 90 days of registration, then every two years. It is separate from the annual LLC tax and any fee based on gross receipts, which go to the Franchise Tax Board. Many new owners file the statement and forget the tax, or the other way round.</p>
<h3>Delaware</h3>
<p>Delaware LLCs do not file an annual report, but the Division of Corporations says domestic and registered LLCs must pay an annual tax of $400, due on or before June 1 for the prior year. The tax is assessed if the LLC was active on the state's records at any point in the year. Failure to pay brings a $200 penalty plus 1.5% interest per month on tax and penalty.</p>
<h3>Texas</h3>
<p>Texas LLCs report to the Comptroller rather than file a secretary of state annual report. The annual franchise tax report is due May 15. The no tax due threshold is $2.65 million for 2026 and 2027 reports; at or below it, the Comptroller says you file a Public Information Report or Ownership Report rather than a full tax report.</p>
<h3>New York</h3>
<p>New York LLCs file a biennial statement every two years with a $9 fee, during the calendar month in which the original articles of organization were filed. The Department of State does not allow early filing.</p>
<h3>Florida</h3>
<p>Florida's annual report is filed through Sunbiz between January 1 and May 1. Published 2026 guides put the LLC fee at $138.75 and describe a $400 late fee after May 1, with administrative dissolution in the autumn for companies that still have not filed. We could not load the state's fee page directly, so confirm the current amounts on Sunbiz before paying.</p>

<h2>Worked example: the yearly cost of a two-state LLC</h2>
<p>Suppose you form an LLC in Delaware but run your business from California, so it must also register in California as a foreign LLC. Using the 2026 figures above (and ignoring registered agent fees and California's gross-receipts fee, which applies only at higher revenue):</p>
<table>
<thead><tr><th>Item</th><th>Calculation</th><th>Two-year cost</th></tr></thead>
<tbody>
<tr><td>Delaware annual LLC tax</td><td>$400 x 2 years</td><td>$800</td></tr>
<tr><td>California annual LLC tax</td><td>$800 x 2 years</td><td>$1,600</td></tr>
<tr><td>California Statement of Information</td><td>$20 x 1 filing every two years</td><td>$20</td></tr>
<tr><td>Total</td><td>$800 + $1,600 + $20</td><td>$2,420</td></tr>
</tbody>
</table>
<p>That averages $1,210 a year ($2,420 / 2). Had the same owner formed directly in California, the Delaware line would disappear, saving $800 over the two years. This is why many small businesses form in the state where they actually operate.</p>
<p>Now consider a late Delaware payment. If the $400 tax is paid three months late, the penalty is $200, and interest at 1.5% per month on the $600 of tax and penalty is roughly $600 x 1.5% x 3 = $27 (a simplified illustration; the state computes the exact figure). The total becomes about $627, more than 50% above the original bill.</p>

<h2>How to file your LLC annual report step by step</h2>
<ol>
<li><strong>Find your deadline.</strong> Look up your LLC on the secretary of state's business search and note the due date or anniversary month.</li>
<li><strong>Check every state you are registered in.</strong> Foreign registrations have their own reports and fees.</li>
<li><strong>Gather the details:</strong> file number, principal address, registered agent, members or managers, and any changes since last year.</li>
<li><strong>Log in to the state portal,</strong> such as bizfile Online in California or Sunbiz in Florida.</li>
<li><strong>Review every field.</strong> Correct outdated addresses or managers; the report is often the cheapest way to update them.</li>
<li><strong>Pay the fee</strong> with a business card or business bank account, not a personal one.</li>
<li><strong>Save the confirmation</strong> and receipt with your company records.</li>
<li><strong>Record the expense</strong> in your books as a business licence or filing fee, as described in our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide.</li>
<li><strong>Set next year's reminder</strong> immediately, ideally a month before the deadline.</li>
</ol>

<h2>Penalties for late or missed annual reports</h2>
<p>Consequences escalate in a fairly predictable pattern across states:</p>
<ul>
<li><strong>Late fee or penalty:</strong> a flat charge, sometimes plus interest, as in Delaware.</li>
<li><strong>Loss of good standing:</strong> you may be unable to obtain a certificate of good standing, which lenders, landlords and some clients ask for.</li>
<li><strong>Administrative dissolution or forfeiture:</strong> the state ends the LLC's active status, and another business may be able to register your name.</li>
<li><strong>Loss of liability protection:</strong> owners can face personal exposure for obligations incurred while the LLC was not in good standing, depending on state law.</li>
<li><strong>Reinstatement costs:</strong> back fees, penalties and a reinstatement filing, usually far more than the original report.</li>
</ul>
<p>If you have already missed a deadline, file as soon as possible. In most states the cost keeps rising the longer the report is overdue.</p>
<h3>How to reinstate an LLC after a missed report</h3>
<p>If the state has already dissolved or forfeited your LLC, you can usually bring it back, but it takes more paperwork than the original report. The typical process is:</p>
<ol>
<li>Search the state database to confirm the LLC's status and the date it changed.</li>
<li>File every missing annual report or statement, or pay the overdue annual tax.</li>
<li>Pay accumulated late fees, penalties and interest.</li>
<li>File the state's reinstatement or revival form and pay its fee.</li>
<li>Get any required tax clearance from the state revenue agency.</li>
<li>Confirm your business name is still available; if another company has taken it, you may need to reinstate under a new name.</li>
</ol>
<p>Many states also allow reinstatement to relate back to the original dissolution date, which helps preserve liability protection for the gap, but rules vary by state. Ask an attorney if contracts were signed while the LLC was inactive.</p>

<h3>Using the annual report to make changes</h3>
<p>In many states the annual report doubles as a cheap way to update records. You can often change your principal or mailing address, update members or managers, and sometimes switch your registered agent without filing a separate amendment. Some changes, such as the LLC's legal name or its purpose, still need a formal amendment to the articles of organization. If your state's form lets you change something for free during the annual report, save those updates for the report rather than paying for a separate filing mid-year, provided the delay does not leave the public record misleading for months.</p>

<h2>Building annual compliance into your calendar</h2>
<p>The annual report is only one item in an LLC's compliance year. A simple calendar might include:</p>
<ul>
<li><strong>January:</strong> issue contractor forms; review the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold</a> and <a href="/blog/w9-and-1099-for-contractors">collect W-9s</a>.</li>
<li><strong>Quarterly:</strong> estimated tax payments; see <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
<li><strong>Spring:</strong> federal returns and many state reports (Texas May 15, Florida May 1, Delaware June 1).</li>
<li><strong>Your anniversary month:</strong> states like New York that key off formation date.</li>
<li><strong>Year end:</strong> run our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> so books are ready for tax season.</li>
</ul>
<p>For the full federal picture, see our <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a> guide.</p>

<h2>Annual report vs franchise tax vs income tax</h2>
<p>Three obligations get confused constantly:</p>
<table>
<thead><tr><th>Obligation</th><th>Who receives it</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Annual report</td><td>Secretary of state</td><td>Keeps your registration current and in good standing</td></tr>
<tr><td>Franchise or privilege tax</td><td>State revenue agency or secretary of state</td><td>A tax for the right to exist or do business in the state</td></tr>
<tr><td>Income tax return</td><td>IRS and state tax agency</td><td>Reports profit and calculates income tax</td></tr>
</tbody>
</table>
<p>Paying one never satisfies another. Delaware and Texas are good examples: neither asks LLCs for a classic annual report, but both expect a payment or tax filing every year.</p>

<h2>Keeping LLC records consistent</h2>
<p>The details on your annual report should match what clients see. Invoices should carry the LLC's exact legal name and current address, and any trade name you use should be properly registered (see <a href="/blog/what-is-a-dba">what a DBA is</a>). When you update your address on the report, update your <a href="/invoice-templates">invoice templates</a> the same day. If you are thinking of closing the business instead of renewing, our guide on <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a> explains how to stop the annual fees properly.</p>

<h2>Stay in good standing and keep billing</h2>
<p>Filing your LLC annual report on time is cheap insurance: a small fee keeps your liability protection, your name and your good standing intact. Put every state deadline in your calendar, save each receipt, and keep your invoices matching your official records with our <a href="/invoice-generator">invoice generator</a> or the <a href="/invoice-generator/usa">US invoice generator</a>. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
  {
    slug: "how-to-dissolve-an-llc",
    title: "How to Dissolve an LLC: Steps, Final Return and State Filings",
    description:
      "How to dissolve an LLC: vote, send final invoices, settle debts, file the final IRS return, cancel with the state and close your IRS business account.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-file-taxes-as-an-llc",
      "bad-debt-write-off",
      "interim-invoice-vs-final-invoice",
      "how-to-start-an-llc",
    ],
    faqs: [
      {
        q: "How do I dissolve an LLC?",
        a: "Follow your operating agreement to approve the dissolution, then wind up: finish or hand over work, send final invoices, collect receivables, pay debts, and distribute what is left to members. File your final federal and state tax returns, close payroll and sales tax accounts, file articles of dissolution or a certificate of cancellation with the state, and finally ask the IRS to close your business account.",
      },
      {
        q: "How much does it cost to dissolve an LLC?",
        a: "State filing fees vary by state. California, for example, lists no fee for its LLC-3 and LLC-4/7 termination forms, while other states charge a filing fee for articles of dissolution or a certificate of cancellation. Budget too for any unpaid annual reports or franchise taxes, a final tax return preparation fee and, if there are disputes or creditors, legal help.",
      },
      {
        q: "What is the final tax return for an LLC?",
        a: "It depends on how the LLC is taxed. A single-member LLC owned by an individual reports its final year on Schedule C with the owner's Form 1040. A multi-member LLC taxed as a partnership files a final Form 1065, checks the final return box and issues final K-1s. An LLC taxed as an S or C corporation files a final Form 1120-S or 1120.",
      },
      {
        q: "Do I need to cancel my EIN when I close my LLC?",
        a: "An EIN is never reused or reassigned, but you should ask the IRS to close the business account. The IRS says to send a letter to Internal Revenue Service, Cincinnati, OH 45999 with the business's legal name, EIN, address and reason for closing, plus a copy of the EIN assignment notice if you have it. It cannot close the account until all returns are filed and taxes paid.",
      },
      {
        q: "What happens if I just stop using my LLC without dissolving it?",
        a: "The state keeps treating it as active. Annual report fees and franchise taxes keep accruing, and penalties stack up, so a company you thought was closed can generate bills for years. The state may eventually dissolve it administratively, but that is not the same as a proper wind-up and can leave members exposed to unpaid obligations. Formally dissolving stops the clock.",
      },
      {
        q: "Can I dissolve an LLC with debts?",
        a: "Yes, but debts must be dealt with during the wind-up. Creditors are generally paid before members receive anything, and some states have procedures for notifying known and unknown creditors. If the LLC cannot pay everyone, speak with an attorney, because distributing money to members while debts remain unpaid can make members personally liable for those amounts.",
      },
      {
        q: "What is the difference between dissolution and winding up?",
        a: "Dissolution is the decision or event that starts the end of the LLC. Winding up is the process that follows: finishing business, collecting what is owed, paying debts and distributing remaining assets. Termination comes last, when the state accepts your final filing. During winding up the LLC still exists, can still invoice clients and must still meet its tax obligations.",
      },
      {
        q: "How long do I need to keep records after closing an LLC?",
        a: "Keep tax records until the period of limitations for the final year expires, and the IRS says to keep employment tax records for at least four years. Property records should be kept until the limitations period ends for the year you disposed of the property. In practice, many owners keep final returns, invoices, bank statements and dissolution filings for at least seven years.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To dissolve an LLC, the members vote to close it under the operating agreement, wind up the business (send final invoices, collect receivables, pay debts, distribute what is left), file the final federal and state tax returns, file articles of dissolution or a certificate of cancellation with the state, and ask the IRS to close the business account. Fees and forms vary by state.</p>

<p>Closing a business is harder than opening one, mostly because so many accounts have to be shut in the right order. Skip a step and you can keep receiving franchise tax bills, penalties or IRS notices long after you stopped trading. This guide walks through how to dissolve an LLC from the members' vote to the final return, including how to close an LLC's billing cleanly with final invoices from our <a href="/invoice-generator">free invoice generator</a>. For background on how your LLC has been taxed until now, see <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>.</p>

<p><strong>Note:</strong> This is general information, not legal or tax advice. Dissolution procedures, forms and fees vary by state, and creditors' rights can be complex. Check your state's rules and consider professional help, especially if the LLC has debts, employees or several members.</p>

<h2>Dissolution, winding up and termination</h2>
<p>Three terms describe the stages of closing an LLC:</p>
<ul>
<li><strong>Dissolution:</strong> the decision (or triggering event) that starts the end. Usually a members' vote under the operating agreement.</li>
<li><strong>Winding up:</strong> finishing work, collecting money, paying debts, selling assets and distributing what is left. The LLC still exists during this stage.</li>
<li><strong>Termination:</strong> the state accepts your final filing, and the LLC legally ceases to exist.</li>
</ul>
<p>Some states use a single form for the whole process; others separate a certificate of dissolution from a later certificate of cancellation. California, for example, offers its LLC-3 and LLC-4/7 termination forms with no filing fee, according to the Secretary of State's form listing.</p>

<h2>How to dissolve an LLC: the full checklist</h2>
<ol>
<li><strong>Read your operating agreement.</strong> Check the vote required to dissolve and how assets are distributed. If you never wrote one, state default rules apply; see our guide to the <a href="/blog/llc-operating-agreement">LLC operating agreement</a>.</li>
<li><strong>Hold the vote and record it.</strong> Write a short resolution or written consent signed by the required members, with the date.</li>
<li><strong>Stop taking new work</strong> and tell clients, suppliers and contractors your closing date.</li>
<li><strong>Finish or hand over current jobs</strong> and send final invoices promptly.</li>
<li><strong>Collect receivables.</strong> Chase overdue invoices; decide which ones to write off.</li>
<li><strong>Notify creditors and pay debts.</strong> Follow your state's creditor notice process if it has one.</li>
<li><strong>Sell or distribute assets</strong> such as equipment and inventory, and record each sale.</li>
<li><strong>Handle employees and contractors.</strong> Final wages, payroll returns, W-2s and 1099s.</li>
<li><strong>File final federal and state tax returns</strong> and pay any balance.</li>
<li><strong>Close state tax accounts:</strong> sales tax permits, payroll and withholding accounts.</li>
<li><strong>File dissolution or cancellation with the secretary of state,</strong> and any foreign LLC withdrawals in other states.</li>
<li><strong>Distribute remaining cash to members</strong> according to the agreement.</li>
<li><strong>Close the IRS business account,</strong> bank accounts, merchant accounts and licences.</li>
<li><strong>Keep your records</strong> for the required retention period.</li>
</ol>

<h2>Close out your billing: final invoices and receivables</h2>
<p>Winding up is when cash matters most, because every unpaid invoice is money that may never arrive once you have shut down. Practical steps:</p>
<ul>
<li><strong>Send final invoices immediately</strong> for all completed work, clearly labelled as final. Our guide to <a href="/blog/interim-invoice-vs-final-invoice">interim vs final invoices</a> explains how to reference earlier progress bills and deposits.</li>
<li><strong>Shorten payment terms</strong> where your contracts allow, and offer a small early-payment discount if it brings cash in faster.</li>
<li><strong>Follow up firmly</strong> on overdue accounts; if needed, send a <a href="/blog/final-notice-before-legal-action">final notice before legal action</a>.</li>
<li><strong>Write off what you cannot collect.</strong> See <a href="/blog/bad-debt-write-off">bad debt write-off</a> for how this affects your books and taxes.</li>
<li><strong>Keep numbering consistent.</strong> Continue your existing sequence so the final invoices fit your records; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps if you need a clean format.</li>
<li><strong>Charge sales tax correctly</strong> on final taxable sales, and file the last sales tax return before closing the account (see <a href="/blog/sellers-permit">seller's permit</a>).</li>
</ul>

<h2>Worked example: winding up a two-member LLC</h2>
<p>A two-member marketing LLC, owned 50/50, decides to close. It has one unbilled project: 30 hours at $95 per hour. The client paid a $1,000 deposit at the start.</p>
<p><strong>Step 1, the final invoice.</strong> In the invoice generator: 30 x $95 = $2,850 subtotal. The LLC offers a $150 fixed discount for payment within seven days, so the invoice total is $2,850 - $150 = $2,700 (no sales tax, as the services are not taxable in its state). Entering the $1,000 deposit in the amount paid field leaves a balance due of $2,700 - $1,000 = $1,700.</p>
<p><strong>Step 2, the wind-up statement.</strong></p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Cash in the business account</td><td>$9,400</td></tr>
<tr><td>Plus final invoice balance collected</td><td>+ $1,700</td></tr>
<tr><td>Plus sale of office equipment</td><td>+ $650</td></tr>
<tr><td>Total cash available</td><td>$11,750</td></tr>
<tr><td>Less supplier and credit card debts</td><td>- $2,350</td></tr>
<tr><td>Less final accounting and state filing costs</td><td>- $600</td></tr>
<tr><td>Cash left for members</td><td>$8,800</td></tr>
<tr><td>Distribution to each member (50%)</td><td>$4,400</td></tr>
</tbody>
</table>
<p>Check: $9,400 + $1,700 + $650 = $11,750; $11,750 - $2,350 - $600 = $8,800; $8,800 / 2 = $4,400. Creditors are paid before members receive anything. The equipment sale would also be reported on the final return (the IRS points to Form 4797 for sales of business property).</p>

<h2>Final IRS returns: close an LLC's federal taxes</h2>
<p>The IRS's <a href="https://www.irs.gov/businesses/small-businesses-self-employed/closing-a-business" target="_blank" rel="noopener noreferrer">closing a business</a> page lists what to file based on how the business is taxed. For an LLC, follow its tax classification, not its legal form.</p>
<table>
<thead><tr><th>How the LLC is taxed</th><th>Final income tax return</th><th>Extra steps</th></tr></thead>
<tbody>
<tr><td>Single-member (disregarded entity)</td><td>Schedule C with the owner's Form 1040 for the final year</td><td>Schedule SE if net earnings are $400 or more; Form 4797 for asset sales</td></tr>
<tr><td>Multi-member (partnership)</td><td>Form 1065, final return box checked</td><td>Final Schedule K-1 to each member</td></tr>
<tr><td>Elected S corporation</td><td>Form 1120-S, final return</td><td>Final K-1s; Form 966 if a plan to dissolve or liquidate is adopted</td></tr>
<tr><td>Elected C corporation</td><td>Form 1120, final return</td><td>Form 966 within the required time</td></tr>
</tbody>
</table>
<p>Form 8594 applies if you sell the business as a whole. A single-member LLC is a disregarded entity for income tax by default, but the IRS treats it as a separate entity for employment and certain excise taxes, so payroll filings still run under the LLC's own EIN.</p>

<h3>Closing a single-member LLC</h3>
<p>For a one-owner LLC the process is lighter but the same in principle. There is no members' vote, but you should still sign a short written consent to dissolve and keep it with your records. Because a single-member LLC is usually disregarded for income tax, there is no separate final business return: your last Schedule C covers the business through the closing date, filed with your own Form 1040. If you keep freelancing afterwards as a sole proprietor, start a new Schedule C business, use your own name or a registered trade name on invoices, and stop using the LLC's name, bank account and EIN for new work. Clients who paid the LLC during the year still need to receive correct forms in the LLC's name, so tell them the date the change takes effect.</p>

<h3>Employees and contractors</h3>
<p>If the LLC had employees, the IRS expects you to pay final wages and deposits, file the final Form 941 or 944 (marking the business as closed and entering the final wage date), file Form 940 for the year, and give each employee a W-2. For contractors, report qualifying payments made in the closing year on Form 1099-NEC; check the current <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a> and confirm you have <a href="/blog/w9-and-1099-for-contractors">W-9s on file</a>.</p>

<h3>Closing the IRS business account</h3>
<p>An EIN is never cancelled in the sense of being reassigned, but you can close the account. Send a letter to Internal Revenue Service, Cincinnati, OH 45999, with the business's legal name, EIN, address and reason for closing, and include the EIN assignment notice if you have it. The IRS states that it cannot close your account until you have filed all necessary returns and paid all taxes owed, so do this last.</p>

<h2>State filings: dissolution, cancellation and tax clearance</h2>
<p>At state level, closing an LLC usually involves several agencies:</p>
<ul>
<li><strong>Secretary of state:</strong> articles of dissolution, a certificate of termination or a certificate of cancellation. Names and fees vary by state.</li>
<li><strong>State tax agency:</strong> a final state income or franchise tax return. Some states require a tax clearance or will not accept the dissolution until taxes are current.</li>
<li><strong>Sales tax:</strong> file the final return and close the permit.</li>
<li><strong>Payroll and unemployment:</strong> final returns and account closure.</li>
<li><strong>Other states:</strong> if the LLC was registered as a foreign LLC elsewhere, file a withdrawal there too, or annual fees will continue.</li>
<li><strong>Local:</strong> business licences and any local tax registrations.</li>
</ul>
<p>The order matters. Bring your <a href="/blog/llc-annual-report">LLC annual report</a> and franchise taxes up to date first, because many states will reject a dissolution filing from a company that is not in good standing. Keep your <a href="/blog/registered-agent">registered agent</a> in place until the state confirms termination so no notice goes astray.</p>

<h3>Notifying creditors</h3>
<p>Many state LLC statutes include an optional creditor notice procedure. You send written notice to known creditors stating that the LLC is dissolving, how to submit a claim and a deadline; some states also allow a published notice for unknown claims. Claims not submitted by the deadline may be barred. The process takes extra time, but it gives members much more certainty that a forgotten bill will not surface after the money has been distributed. Keep copies of every notice and the proof of mailing with your dissolution records.</p>

<h3>Closing bank, payment and software accounts</h3>
<p>Leave the business bank account open until the last client payment has cleared, the final tax payments have gone through and every member distribution has been made. Then close it in writing and keep the final statement. Do the same for merchant accounts, payment processors, payroll software and subscriptions, many of which renew automatically. Cancel annual renewals before they bill, and download your invoice history and reports from any platform you used, because access often ends when the account closes.</p>

<h2>Distributing assets to members</h2>
<p>After creditors are paid, remaining assets go to members according to the operating agreement or, without one, state default rules. Common points:</p>
<ul>
<li>Pay creditors first. Members who take distributions while debts remain unpaid can be exposed to claims.</li>
<li>Return capital contributions if the agreement requires it, then split any remainder by ownership percentage.</li>
<li>Document each distribution with the date, amount and recipient.</li>
<li>Distributions of property, rather than cash, may have tax consequences; ask your tax adviser.</li>
</ul>

<h2>Mistakes to avoid when you close an LLC</h2>
<ul>
<li><strong>Abandoning the LLC instead of dissolving it.</strong> Fees and penalties keep running while the company is technically active.</li>
<li><strong>Closing the bank account too early.</strong> You still need it for final client payments, refunds and tax payments.</li>
<li><strong>Forgetting foreign registrations</strong> in other states.</li>
<li><strong>Skipping the final return box</strong> on Form 1065 or 1120-S, which can trigger notices for next year's missing return.</li>
<li><strong>Not sending final invoices</strong> before closing, leaving money uncollected.</li>
<li><strong>Throwing away records</strong> too soon. Keep invoices, bank statements, returns and dissolution filings.</li>
</ul>

<h2>Should you dissolve or convert instead?</h2>
<p>Not every exit needs a full dissolution. If you are simply changing structure, for example moving from an LLC to a corporation, or the business is being sold to a buyer who wants the entity intact, a conversion, merger or sale of membership interests may be simpler. If you are going back to freelancing on your own, compare the structures in <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> and our guide to <a href="/blog/business-entity-types">business entity types</a> before you decide.</p>

<h2>Send your final invoices before you close</h2>
<p>Knowing how to dissolve an LLC properly protects the members and stops fees from following you after the doors close. Before you file anything with the state, bill every outstanding job and record every deposit: create clear final invoices with balance due in our <a href="/invoice-generator">free invoice generator</a> and pick a layout from our <a href="/invoice-templates">invoice templates</a>. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "sellers-permit",
    title: "Seller's Permit: What It Is, Who Needs One and How to Get It",
    description:
      "A seller's permit lets you collect sales tax. Learn who needs a sales tax permit, 2026 costs, how to get one step by step and how to show tax on invoices.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sales-tax-on-services-by-state",
      "sales-tax-on-invoices-us",
      "resale-certificate",
      "sales-tax-nexus",
      "sales-tax-exemption-certificate",
    ],
    faqs: [
      {
        q: "What is a seller's permit?",
        a: "A seller's permit is the state registration that authorizes a business to sell taxable goods (and in some states taxable services) and to collect sales tax from customers. Names vary: California calls it a seller's permit, Texas a sales and use tax permit, and New York a Certificate of Authority. Once registered, you collect tax on taxable sales and file regular sales tax returns.",
      },
      {
        q: "Who needs a seller's permit?",
        a: "Generally anyone who sells or leases taxable tangible goods in a state with a sales tax, and in some states anyone selling taxable services. That includes home-based sellers, online shops, market and craft-fair vendors and pop-ups. New York says every person selling taxable goods or services must register, even sellers who sell only once a year. Out-of-state sellers may need one too if they have nexus.",
      },
      {
        q: "How much does a seller's permit cost?",
        a: "In many states it is free. California's tax agency describes online registration as free, and the Texas and New York application pages list no permit fee. Some states or cities do charge a registration or licence fee, and California may ask certain applicants for a security deposit that is refunded when the account closes, less anything owed. Check your own state, as fees vary by state.",
      },
      {
        q: "How long does it take to get a seller's permit?",
        a: "Online applications are often processed quickly, sometimes the same day, but timing varies. The Texas Comptroller says to allow two to three weeks to receive the permit. New York requires you to register at least 20 days before you begin business. Apply as soon as you know your start date so you are never selling before the permit is in place.",
      },
      {
        q: "Is a seller's permit the same as a resale certificate?",
        a: "No. The seller's permit registers you to collect and remit sales tax. A resale certificate is a form you give your suppliers so you can buy inventory tax-free because you will resell it. In most states you need a valid seller's permit number to issue a resale certificate, so the permit usually comes first and the certificate follows.",
      },
      {
        q: "What happens if I sell without a seller's permit?",
        a: "You can face penalties and still owe the tax you should have collected, plus interest. New York, for example, sets a maximum penalty of $10,000 for operating without a valid Certificate of Authority, with up to $500 for the first day and up to $200 for each additional day. If you have already been selling, register immediately and ask about voluntary disclosure options.",
      },
      {
        q: "Do I need a seller's permit for online sales?",
        a: "Usually yes in your home state if you sell taxable goods there. For other states, it depends on nexus: most states require remote sellers to register once they pass an economic threshold. Marketplace facilitator laws often make platforms like Etsy or Amazon collect tax on sales they handle, but you may still need your own permit for direct website sales.",
      },
      {
        q: "Do I need a seller's permit if I only sell services?",
        a: "It depends on the state. Many states tax few or no services, so a pure service business may not need one. Others tax a range of services; Texas, for example, asks you to register if you sell taxable services in the state, and New York requires registration for sellers of taxable services. Check your state's list of taxable services before you assume you are exempt.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A seller's permit (also called a sales tax permit or certificate of authority) is a state registration that lets you sell taxable goods or services and collect sales tax. You usually need one before your first taxable sale. As of 2026 many states, including California, Texas and New York, list no fee to apply online, but rules and fees vary by state.</p>

<p>If you sell products, from handmade candles to car parts, the state expects you to collect sales tax from customers and pass it on. The seller's permit is how you register to do that. This guide explains who needs a seller's permit, how to get one, what it costs and how to show sales tax correctly on every invoice you create in our <a href="/invoice-generator">free invoice generator</a>. For the mechanics of charging tax once you are registered, see our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Sales tax rules, permit names and fees vary by state and sometimes by city. Check with your state's tax agency before you start selling.</p>

<h2>What a seller's permit is</h2>
<p>A seller's permit is your registration with a state's sales tax agency. It gives you an account number, authorizes you to collect sales tax and obliges you to file returns and pay over what you collect. It is not a general business licence, and it is not an income tax registration.</p>
<p>Different states use different names for the same idea:</p>
<table>
<thead><tr><th>State</th><th>Name of the registration</th><th>Agency</th><th>Fee to apply (as of 2026)</th></tr></thead>
<tbody>
<tr><td>California</td><td>Seller's permit</td><td>California Department of Tax and Fee Administration (CDTFA)</td><td>Online registration described as free; a security deposit may be required for some applicants</td></tr>
<tr><td>Texas</td><td>Sales and use tax permit</td><td>Texas Comptroller of Public Accounts</td><td>No fee listed on the application page</td></tr>
<tr><td>New York</td><td>Certificate of Authority</td><td>NY Department of Taxation and Finance</td><td>No fee listed; register at least 20 days before starting</td></tr>
<tr><td>Other states</td><td>Sales tax licence, vendor's licence, transaction privilege tax licence and similar</td><td>State department of revenue</td><td>Varies by state</td></tr>
</tbody>
</table>
<p>A handful of states (Alaska at state level, Delaware, Montana, New Hampshire and Oregon) have no statewide sales tax, although some Alaska localities levy their own.</p>

<h2>Who needs a seller's permit</h2>
<p>You generally need a sales tax permit if you sell or lease taxable tangible personal property in a state with a sales tax. The California Department of Tax and Fee Administration says anyone doing business in California who sells or leases tangible personal property that would ordinarily be subject to sales tax at retail must have a seller's permit and display it at their place of business. New York goes further, saying every person who sells taxable tangible personal property or taxable services must register, including people selling from home, temporary vendors and those who sell only once a year.</p>
<p>Common situations that require a permit:</p>
<ul>
<li>Retail shops and online stores selling taxable products.</li>
<li>Craft fair, farmers' market and pop-up vendors (often a temporary permit).</li>
<li>Wholesalers, who need a permit to accept <a href="/blog/resale-certificate">resale certificates</a> from buyers and issue their own.</li>
<li>Service businesses in states that tax their services, such as certain repair, cleaning or data services.</li>
<li>Remote sellers who exceed another state's economic nexus threshold; see <a href="/blog/sales-tax-nexus">sales tax nexus</a>.</li>
</ul>
<p>Buying an existing business does not transfer its permit. California's CDTFA states that a new owner needs a permit of their own.</p>

<h3>Temporary seller's permits</h3>
<p>If you sell at a single location for a short period, some states issue a temporary permit. In California, sellers operating from one location for 90 days or less apply for a temporary seller's permit rather than a regular one.</p>

<h2>How to get a seller's permit step by step</h2>
<ol>
<li><strong>Confirm your sales are taxable.</strong> Check whether your products, and any services, are taxable in your state.</li>
<li><strong>Form your business and get an EIN if needed.</strong> Sole proprietors can often use an SSN; LLCs and partnerships usually use an EIN. See <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Gather your information:</strong> legal name and any trade name, business address, owners' or officers' details, start date, expected sales, and a NAICS code describing your activity. The Texas Comptroller lists Social Security numbers for owners and officers, the Texas Secretary of State file number for entities and a NAICS code among the items to have ready.</li>
<li><strong>Apply online</strong> with your state agency: CDTFA online registration in California, eSystems in Texas, New York Business Express in New York.</li>
<li><strong>Answer the questions about your activity:</strong> locations, whether you sell online or at events, estimated monthly taxable sales.</li>
<li><strong>Pay any fee or security deposit</strong> if your state requires one.</li>
<li><strong>Receive your permit and account number.</strong> Texas says to allow two to three weeks; some states issue numbers instantly online.</li>
<li><strong>Display the permit</strong> at your place of business if your state requires it, as California does.</li>
<li><strong>Note your filing frequency</strong> (monthly, quarterly or annual) and set reminders.</li>
</ol>
<p>Timing matters. New York's guidance on <a href="https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/how_to_register_for_nys_sales_tax.htm" target="_blank" rel="noopener noreferrer">how to register for New York sales tax</a> says to register at least 20 days before you begin business, and the state's maximum penalty for operating without a valid Certificate of Authority is $10,000.</p>

<h2>How much a seller's permit costs</h2>
<p>For many small businesses the permit itself is free. The <a href="https://www.cdtfa.ca.gov/services/permits-licenses.htm" target="_blank" rel="noopener noreferrer">CDTFA permits and licences page</a> describes online registration as free, and the Texas Comptroller's <a href="https://comptroller.texas.gov/taxes/permit/" target="_blank" rel="noopener noreferrer">sales and use tax permit application</a> page lists no permit fee. Costs that may still apply:</p>
<ul>
<li><strong>Security deposits:</strong> some states, including California for certain applicants, may require a deposit, refundable when you close the account less anything owed.</li>
<li><strong>State registration or licence fees</strong> in states that charge them.</li>
<li><strong>City or county licences:</strong> local business licences are separate from the state permit.</li>
<li><strong>Your time:</strong> regular returns, even when you owe nothing, are mandatory.</li>
</ul>
<p>Because fees vary by state and change over time, confirm the current amount on your state agency's site before you apply.</p>

<h2>After you register: collecting and filing</h2>
<p>The permit creates ongoing duties:</p>
<ul>
<li><strong>Charge the correct rate</strong> on taxable sales, including local add-ons. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> and guide on <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a> cover the arithmetic.</li>
<li><strong>Show tax separately on invoices and receipts.</strong> Customers, and auditors, need to see the taxable amount, the rate and the tax.</li>
<li><strong>Collect exemption and resale paperwork</strong> for tax-free sales; see our guide to the <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificate</a>.</li>
<li><strong>File every return on time,</strong> including zero returns in periods with no sales.</li>
<li><strong>Keep records</strong> of all sales, invoices and exemption certificates.</li>
<li><strong>Update or close the permit</strong> when you move, change ownership or stop selling. If you close the business entirely, see <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a>.</li>
</ul>

<h2>Worked example: a sales tax invoice under your permit</h2>
<p>A Texas furniture maker with a sales and use tax permit sells a custom table and two chairs to a local customer. In this example the combined state and local rate at the delivery address is 8.25%.</p>
<table>
<thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Dining table</td><td>1 x $800</td><td>$800.00</td></tr>
<tr><td>Chairs</td><td>2 x $200</td><td>$400.00</td></tr>
<tr><td>Subtotal</td><td>$800 + $400</td><td>$1,200.00</td></tr>
<tr><td>Discount (10%)</td><td>$1,200 x 10%</td><td>- $120.00</td></tr>
<tr><td>Taxable amount</td><td>$1,200 - $120</td><td>$1,080.00</td></tr>
<tr><td>Sales tax (8.25%)</td><td>$1,080 x 8.25%</td><td>$89.10</td></tr>
<tr><td>Shipping</td><td>Flat fee</td><td>$25.00</td></tr>
<tr><td>Total</td><td>$1,080 + $89.10 + $25</td><td>$1,194.10</td></tr>
<tr><td>Deposit paid</td><td>Amount paid field</td><td>- $500.00</td></tr>
<tr><td>Balance due</td><td>$1,194.10 - $500</td><td>$694.10</td></tr>
</tbody>
</table>
<p>This matches how the <a href="/invoice-generator/usa">US invoice generator</a> calculates: discount first, tax on the discounted amount, then shipping added after tax, and the amount paid field produces the balance due. One caution: some states treat delivery charges on a taxable sale as taxable. Because the shipping field is added after tax, if your state taxes delivery, enter it as a normal line item instead so the tax applies to it. The $89.10 is money you hold for the state and report on your next return, not income.</p>

<h2>Seller's permit vs related registrations</h2>
<table>
<thead><tr><th>Registration</th><th>Purpose</th><th>Who issues it</th></tr></thead>
<tbody>
<tr><td>Seller's permit / sales tax permit</td><td>Collect and remit sales tax</td><td>State tax agency</td></tr>
<tr><td>Resale certificate</td><td>Buy inventory tax-free for resale</td><td>You complete it and give it to suppliers</td></tr>
<tr><td>EIN</td><td>Federal tax ID for the business</td><td>IRS</td></tr>
<tr><td>Business licence</td><td>Permission to operate locally</td><td>City or county</td></tr>
<tr><td>DBA / trade name</td><td>Operate under a name other than the legal name</td><td>State or county; see <a href="/blog/what-is-a-dba">what a DBA is</a></td></tr>
</tbody>
</table>
<p>You may need all five. The permit number is often requested by wholesalers before they will sell to you tax-free on a resale certificate.</p>
<h3>Do freelancers need a seller's permit?</h3>
<p>Many freelancers do not, because most professional services such as writing, consulting or design are not taxable in a large number of states. But "many" is not "all". Some states tax specific services, and a freelancer who also sells physical products (printed artwork, photo prints, merchandise, equipment) usually needs a permit for those sales. Digital products are another grey area: some states tax downloads or software, others do not. Before you invoice, list everything you sell and check each item against your state's taxable list. If any of it is taxable, register before the first sale and charge tax only on the taxable lines.</p>

<h3>Filing frequency and your first return</h3>
<p>When your permit is issued, the agency assigns a filing frequency, usually based on your expected sales: larger sellers file monthly, smaller ones quarterly or annually. Each return reports total sales, deductible or exempt sales, taxable sales and the tax due, often broken down by local jurisdiction. Using the worked example above, that sale would add $1,080.00 of taxable sales and $89.10 of tax to the return for its period. Keep a running sales tax report from your invoices so the return is a matter of copying totals rather than reconstructing them. Set the money aside as you collect it, ideally in a separate account, so the payment is ready when the return is due.</p>

<h3>Selling at markets, fairs and pop-ups</h3>
<p>Event sellers are a common blind spot. Even if you sell only a few weekends a year, the state usually expects you to register, and some states issue temporary permits for this. Event organizers may also ask for your permit number before giving you a stall. Charge the rate that applies at the event's location, not your home address, and keep a simple record of each event's sales so you can report them correctly.</p>

<h2>Selling in more than one state</h2>
<p>A permit in your home state does not cover sales elsewhere. If you have physical presence in another state, such as a warehouse, employees or inventory, or you exceed that state's economic nexus threshold, you generally need to register there too. Marketplace facilitator laws often shift collection to platforms for sales made through them, so a seller who sells only through a marketplace may have fewer registrations than one who also runs a direct site. Our guide to <a href="/blog/ecommerce-invoice-shopify-woocommerce">e-commerce invoices for Shopify and WooCommerce</a> covers how that affects your paperwork.</p>

<h2>Common seller's permit mistakes</h2>
<ul>
<li><strong>Selling before registering.</strong> Even a single weekend market can require a temporary permit.</li>
<li><strong>Assuming services are exempt everywhere.</strong> Some states tax a wide range of services.</li>
<li><strong>Not filing zero returns.</strong> Missed returns trigger penalties even when no tax is due.</li>
<li><strong>Using one rate for every customer.</strong> Local rates differ; check the rate for each delivery address.</li>
<li><strong>Hiding the tax in the price.</strong> Show it as a separate line so the customer and the state can see it.</li>
<li><strong>Forgetting to close the permit</strong> when you stop selling, which keeps return obligations alive.</li>
<li><strong>Losing exemption paperwork.</strong> If an auditor asks why a sale had no tax and you cannot produce the customer's resale or exemption certificate, the state can assess the tax against you, plus interest. File each certificate with the invoice it supports.</li>
</ul>

<h2>Create sales tax invoices with your permit number</h2>
<p>A seller's permit is usually free and quick to get, and having one before your first sale keeps you on the right side of your state's sales tax rules. Once you have it, make every invoice show the taxable amount, rate and tax clearly: use our <a href="/invoice-generator">free invoice generator</a> with your sales tax permit number in the tax ID field, and choose a layout from our <a href="/invoice-templates/classic">classic invoice template</a> or the full <a href="/invoice-templates">invoice templates</a> gallery. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
];
