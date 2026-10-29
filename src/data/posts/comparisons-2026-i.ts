import type { PostDraft } from "../blog";

export const COMPARISONS_2026_I_POSTS: PostDraft[] = [
  {
    slug: "waybill-vs-bill-of-lading",
    title: "Waybill vs Bill of Lading: Key Differences (2026 Guide)",
    description:
      "Waybill vs bill of lading explained: negotiable vs non-negotiable, sea and air waybills, when banks demand an original B/L, and how each links to your invoice.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "bill-of-lading-vs-commercial-invoice",
      "commercial-invoice-template",
      "incoterms-on-invoice",
    ],
    faqs: [
      {
        q: "Is an air waybill a bill of lading?",
        a: "No. An air waybill (AWB) works like a bill of lading in that it is a receipt for the cargo and evidence of the contract of carriage, but it is not a document of title and cannot be negotiated. Air freight moves too fast for paper title documents to be practical, so the airline releases the goods to the consignee named on the AWB once it proves its identity and clears customs.",
      },
      {
        q: "Can a sea waybill be used with a letter of credit?",
        a: "It can, but only if the letter of credit specifically allows a non-negotiable sea waybill. Under the ICC rules most banks follow (UCP 600), a sea waybill is an accepted transport document type, yet many credits still call for a full set of original negotiable bills of lading because the bank wants control of the goods as security. Read the credit terms before you choose the document.",
      },
      {
        q: "What does 'to order' mean on a bill of lading?",
        a: "A bill of lading made out 'to order' or 'to the order of' a named party is negotiable. The holder can transfer the right to collect the goods by endorsing the original document and handing it over. Banks commonly ask for bills made out to their order under a letter of credit, so they control the cargo until the buyer pays or accepts the documents.",
      },
      {
        q: "What is a telex release?",
        a: "A telex release is a carrier's instruction to its destination office to release cargo without the original paper bill of lading. The shipper surrenders the originals at origin, often after the buyer has paid, and the carrier sends the release message. It is faster than couriering paper, but once the originals are surrendered the shipper no longer controls the goods through the document.",
      },
      {
        q: "How many originals of a bill of lading are issued?",
        a: "Ocean carriers usually issue a set of three originals, and the number is printed on the face of the bill. Presenting any one original is normally enough to collect the cargo, after which the others become void. That is why letters of credit typically require the 'full set' of originals: anyone holding a single stray original could otherwise claim the goods.",
      },
      {
        q: "Who issues a waybill or bill of lading?",
        a: "The carrier or its agent issues both documents, not the seller. A shipping line or NVOCC issues ocean bills of lading and sea waybills, an airline or air freight forwarder issues the air waybill (master or house), and a trucking company issues the road bill of lading or consignment note. The shipper supplies the cargo details, and the carrier signs to confirm receipt.",
      },
      {
        q: "What is an electronic bill of lading?",
        a: "An electronic bill of lading (eBL) is a digital version that keeps the document-of-title function through an approved platform that tracks who holds it. Several countries have passed laws recognizing electronic trade documents, such as the UK Electronic Trade Documents Act 2023, and major carriers have committed to wider eBL use. Check that your carrier, bank and buyer all accept the platform before relying on one.",
      },
      {
        q: "Do I need a bill of lading for a domestic truck shipment?",
        a: "Most US truck freight moves on a straight (non-negotiable) bill of lading that the carrier or shipper prepares, often on the standard VICS format used by retailers and LTL carriers. It records the shipper, consignee, freight class, piece count and weight, and the driver signs it at pickup. Keep the signed copy, because it is your proof of what was handed over if a freight claim arises.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> A bill of lading is a carrier's receipt for goods, evidence of the contract of carriage and, when issued in negotiable form, a document of title that can be endorsed and sold. A waybill (sea waybill or air waybill) does the first two jobs but is never a title document, so the carrier simply releases the cargo to the named consignee.</p>

<p>The difference sounds technical, but it decides who controls your goods while they are in transit, whether you can get paid under a letter of credit, and how quickly your buyer can collect the shipment. This guide compares waybill vs bill of lading side by side, explains the air waybill and sea waybill, and shows how each document connects to your <a href="/blog/commercial-invoice-template">commercial invoice</a> and packing list.</p>

<h2>What is a bill of lading?</h2>

<p>A bill of lading (often shortened to B/L or BOL) is issued by a carrier, or by an NVOCC or freight forwarder acting as carrier, when it takes cargo for shipment. In ocean shipping it has three functions:</p>

<ol>
<li><strong>Receipt for the goods.</strong> It records what was loaded, the number of packages, the weight and the apparent condition. A "clean" bill has no notes about damage; a "claused" or "foul" bill records problems such as torn cartons.</li>
<li><strong>Evidence of the contract of carriage.</strong> The terms on the back (or incorporated by reference) set out the carrier's obligations and liability limits, often under the Hague-Visby Rules or, in the US, the Carriage of Goods by Sea Act.</li>
<li><strong>Document of title.</strong> A negotiable ("order") bill represents the goods themselves. Whoever lawfully holds an original, properly endorsed, can demand delivery at the destination port.</li>
</ol>

<p>That third function is what makes the bill of lading powerful. A seller can keep the originals until the buyer pays, or a bank can hold them as security under a letter of credit. Goods can even be sold while still at sea by endorsing the bill to a new buyer.</p>

<h3>Types of bill of lading</h3>

<ul>
<li><strong>Order (negotiable) bill:</strong> made out "to order" or "to the order of" a named party, often the shipper or a bank. Transferred by endorsement.</li>
<li><strong>Straight bill:</strong> consigned to a named party and not negotiable. Common in US domestic trucking and rail, and in ocean trade when no bank is involved.</li>
<li><strong>Bearer bill:</strong> deliverable to whoever holds it. Rare because a lost bearer bill is as good as lost cargo.</li>
<li><strong>House vs master bill:</strong> a freight forwarder issues a house B/L to its customer, while the shipping line issues a master B/L to the forwarder.</li>
<li><strong>Through or multimodal bill:</strong> covers more than one mode, such as truck to port and then ocean.</li>
</ul>

<h2>What is a waybill?</h2>

<p>A waybill is a non-negotiable transport document. It confirms the carrier received the goods and evidences the carriage contract, but it does not represent title. The carrier delivers to the consignee named on the waybill, who usually only needs to prove its identity and handle customs clearance. Nobody needs to present an original paper document.</p>

<h3>Sea waybill</h3>

<p>A sea waybill is the ocean version. It is popular between related companies, long-term trading partners and buyers who pay on open account, where nobody needs to use the document as security. Because there are no originals to courier, cargo is not held up at the destination port waiting for paperwork.</p>

<h3>Air waybill (AWB)</h3>

<p>Air freight almost always moves on an air waybill. It follows the IATA standard format and carries an 11-digit number: a 3-digit airline prefix followed by an 8-digit serial number, which is what you use to track the shipment. Freight forwarders issue a house air waybill (HAWB) to their customers and receive a master air waybill (MAWB) from the airline. The air waybill is never negotiable, partly because flights arrive long before paper could be mailed.</p>

<h3>Road and rail consignment notes</h3>

<p>Other modes use similar non-negotiable documents. International road freight in Europe uses the CMR consignment note, and rail uses consignment notes under the CIM or SMGS rules. In the US, truck freight usually moves on a straight bill of lading, which in practice behaves like a waybill.</p>

<h2>Waybill vs bill of lading: side-by-side comparison</h2>

<table>
<thead>
<tr><th>Feature</th><th>Bill of lading (negotiable)</th><th>Sea or air waybill</th></tr>
</thead>
<tbody>
<tr><td>Receipt for goods</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Evidence of carriage contract</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Document of title</td><td>Yes</td><td>No</td></tr>
<tr><td>Negotiable or transferable</td><td>Yes, by endorsement</td><td>No</td></tr>
<tr><td>Originals needed to collect cargo</td><td>Yes, usually one of a set of three</td><td>No, named consignee proves identity</td></tr>
<tr><td>Modes</td><td>Mainly ocean, multimodal</td><td>Ocean (sea waybill), air (AWB), road, rail</td></tr>
<tr><td>Speed of release</td><td>Slower if originals are delayed</td><td>Fast</td></tr>
<tr><td>Works with letters of credit</td><td>Standard requirement</td><td>Only if the credit allows it</td></tr>
<tr><td>Risk if lost</td><td>High, requires a bank guarantee to release cargo</td><td>Low, no original to lose</td></tr>
<tr><td>Typical users</td><td>New buyers, LC trades, commodity sales</td><td>Repeat buyers, open account, intercompany, air freight</td></tr>
</tbody>
</table>

<h2>When should you use a bill of lading instead of a waybill?</h2>

<p>The choice comes down to trust and payment terms. Use a negotiable bill of lading when:</p>

<ul>
<li>You are selling to a new buyer and want to keep control of the goods until payment arrives.</li>
<li>You are paid by documentary collection (documents against payment or acceptance) or a letter of credit. Banks need a title document to protect themselves.</li>
<li>The cargo may be resold while in transit, which is common for commodities such as grain, metals and oil.</li>
<li>Your buyer's lender is financing the purchase and wants the goods as collateral.</li>
</ul>

<p>Use a sea waybill or air waybill when:</p>

<ul>
<li>The buyer has already paid in advance, or you trade on open account with <a href="/blog/invoice-payment-terms">agreed payment terms</a>.</li>
<li>You are shipping between related companies.</li>
<li>Speed matters more than control, for example perishable goods or short ocean routes where the ship arrives before couriered paper would.</li>
<li>You ship by air, where the AWB is the norm.</li>
</ul>

<h2>How does each document relate to the commercial invoice?</h2>

<p>Neither a waybill nor a bill of lading replaces your invoice. The transport document tells the carrier and customs what moved and who receives it; the <a href="/blog/bill-of-lading-vs-commercial-invoice">commercial invoice is the bill for the goods</a> and the document customs uses to value them. Under a letter of credit the bank checks that they agree with each other, so details must match exactly across the set:</p>

<ul>
<li>Shipper and consignee names and addresses</li>
<li>Description of goods, and <a href="/blog/hs-code-on-commercial-invoice">HS codes</a> where shown</li>
<li>Number of packages, gross weight and marks</li>
<li>Port of loading and discharge</li>
<li>The <a href="/blog/incoterms-on-invoice">Incoterms rule</a>, which tells everyone who pays freight and when risk transfers</li>
</ul>

<p>Put the bill of lading or air waybill number on the invoice once you have it. It makes reconciliation easier for the buyer and lets a bank match the documents in seconds. You can add a reference field in the <a href="/invoice-generator">free invoice generator</a> and list it under the invoice number.</p>

<h2>Worked example: same shipment, two documents</h2>

<p>A furniture maker in North Carolina sells 40 dining chairs to a retailer in Rotterdam for $18,400, shipped CIF Rotterdam in one 20-foot container.</p>

<p><strong>Scenario A, new buyer, letter of credit.</strong> The buyer's bank opens a letter of credit requiring a full set of three original clean on-board bills of lading made out "to the order of" the issuing bank, plus the commercial invoice, packing list and insurance certificate. The seller ships, receives the three originals from the line and presents them to its bank with the other documents. Once the bank confirms they comply, the seller is paid. The buyer collects the container only after its bank endorses and releases a B/L original.</p>

<p><strong>Scenario B, repeat buyer, net 30.</strong> The same retailer has bought six containers over two years and pays on <a href="/blog/net-30-payment-terms">net 30 terms</a>. The seller asks the line for a sea waybill naming the retailer as consignee. When the ship arrives, the retailer's customs broker clears the goods and collects the container with no original documents. The seller emails the invoice the day the ship sails, and payment is due 30 days later.</p>

<table>
<thead>
<tr><th>Invoice line</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Oak dining chair, model DC-12 (HS 9401.61)</td><td>40</td><td>$410.00</td><td>$16,400.00</td></tr>
<tr><td>Ocean freight to Rotterdam (CIF)</td><td>1</td><td>$1,750.00</td><td>$1,750.00</td></tr>
<tr><td>Cargo insurance (110% of value)</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td colspan="3"><strong>Total (USD)</strong></td><td><strong>$18,400.00</strong></td></tr>
</tbody>
</table>

<p>In both scenarios the invoice shows the transport document number (B/L or sea waybill number), the container number and "CIF Rotterdam, Incoterms 2020". Only the release mechanism changes.</p>

<h2>How to choose the right transport document: checklist</h2>

<ol>
<li><strong>Check your payment terms.</strong> Letter of credit or documentary collection usually means an original negotiable B/L.</li>
<li><strong>Read the credit wording.</strong> If it says "full set of original bills of lading", a waybill will be a discrepancy and the bank can refuse payment.</li>
<li><strong>Assess the buyer.</strong> Prepaid or trusted buyers can use a waybill. New buyers on credit terms are a reason to keep title control.</li>
<li><strong>Consider the route.</strong> Short sea routes and air freight favor waybills to avoid cargo waiting for paper.</li>
<li><strong>Confirm consignee details.</strong> On a waybill, the named consignee is who gets the goods. Mistakes are hard to fix after departure.</li>
<li><strong>Match the documents.</strong> Align the invoice, <a href="/blog/packing-list-template">packing list</a> and transport document before submitting anything.</li>
<li><strong>Keep copies.</strong> Store the signed B/L or waybill with the invoice for customs audits and freight claims.</li>
</ol>

<h2>Common mistakes with waybills and bills of lading</h2>

<ul>
<li><strong>Releasing originals before payment.</strong> Sending all three originals straight to a new buyer gives away your leverage. If you want payment first, send them through a bank or hold them.</li>
<li><strong>Asking for a waybill on an LC shipment.</strong> This creates a discrepancy that can delay or stop payment.</li>
<li><strong>Mismatched descriptions.</strong> A vague invoice description ("furniture") against a detailed B/L ("40 oak dining chairs") can trigger questions from banks and customs.</li>
<li><strong>Losing an original.</strong> Carriers will usually release cargo without the original only against a letter of indemnity, often backed by a bank guarantee that costs money and takes time.</li>
<li><strong>Confusing the freight invoice with the B/L.</strong> The carrier's <a href="/blog/freight-invoice">freight invoice</a> bills you for transport; the bill of lading is not a request for payment.</li>
<li><strong>Using the wrong consignee.</strong> On a straight bill or waybill, the carrier delivers to the named party, even if the commercial relationship has changed.</li>
</ul>

<h2>Waybill vs bill of lading in US domestic freight</h2>

<p>Inside the US, most truckload and LTL freight moves on a straight bill of lading. Many shippers use the Voluntary Interindustry Commerce Solutions (VICS) format, which retailers often require. It lists the shipper, consignee, third-party billing party, freight class under the NMFC system, piece count, weight and any special instructions. Because it is non-negotiable, it behaves like a waybill: the carrier delivers to the consignee shown. Carriers who run <a href="/blog/trucking-invoice-template">trucking invoices</a> or brokers using a <a href="/blog/freight-broker-invoice-template">freight broker invoice</a> attach the signed BOL and proof of delivery to get paid.</p>

<p>For more on how these documents flow together, the US International Trade Administration publishes plain-language export guides at <a href="https://www.trade.gov/export-documentation" rel="noopener" target="_blank">trade.gov</a>, and the ICC publishes the Incoterms rules and UCP 600 used by banks.</p>

<h2>Bottom line</h2>

<p>In the waybill vs bill of lading decision, the bill of lading wins when you need control of the goods or a bank needs security; the waybill wins on speed and simplicity when trust or prepayment is already in place. Whichever you use, put its number on a clear commercial invoice that matches every detail. You can build that invoice in our <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up, builds the PDF right in your browser and lets you download it immediately.</p>`,
  },
  {
    slug: "partnership-vs-llc",
    title: "Partnership vs LLC: Liability, Taxes and Paperwork (2026)",
    description:
      "Partnership vs LLC compared: personal liability, Form 1065 taxes, self-employment tax, formation costs and paperwork, with a worked example and checklist.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["llc-vs-sole-proprietorship", "form-1065", "how-to-start-an-llc"],
    faqs: [
      {
        q: "Is a multi-member LLC the same as a partnership?",
        a: "For federal tax purposes, often yes: a multi-member LLC is taxed as a partnership by default, files Form 1065 and issues Schedule K-1s. Legally, though, they are different. The LLC is a separate entity formed under a state statute that shields every member from business debts, while a general partnership offers no shield. The tax return can look identical while the liability picture is completely different.",
      },
      {
        q: "Do you need a written agreement to form a partnership?",
        a: "No. A general partnership can form automatically when two or more people carry on a business together for profit, even with a handshake. That is exactly why a written partnership agreement matters: without one, your state's default partnership law decides profit splits, voting and what happens when someone leaves, which usually means equal shares regardless of who contributed what.",
      },
      {
        q: "Can a partnership convert to an LLC?",
        a: "Yes. Most states allow a statutory conversion, or the partners can form a new LLC and contribute the partnership's assets and business to it. A conversion of a partnership into an LLC that is also taxed as a partnership is generally treated as a continuation for tax purposes, so the EIN can often stay the same. Check with your state and a tax adviser before converting.",
      },
      {
        q: "What is an LLP and how is it different?",
        a: "A limited liability partnership (LLP) is a partnership registered with the state that protects partners from the malpractice and debts caused by other partners, while each partner usually stays liable for their own negligence. Many states restrict LLPs to licensed professions such as law and accounting. It is taxed as a partnership and is a common alternative to an LLC for professional firms.",
      },
      {
        q: "Who pays self-employment tax in a partnership?",
        a: "General partners pay self-employment tax on their share of ordinary business income plus any guaranteed payments, reported on Schedule SE. Limited partners in a limited partnership are generally exempt on their distributive share, though not on guaranteed payments for services. For LLC members, the treatment depends on their role, and active managing members are usually treated like general partners.",
      },
      {
        q: "Does an LLC protect you from everything?",
        a: "No. An LLC protects your personal assets from the business's debts and from claims against the company, but you remain personally liable for your own negligence, for debts you personally guarantee (common with bank loans and leases), and for unpaid payroll trust fund taxes. Courts can also pierce the veil if you mix personal and business funds or ignore the LLC's separate identity.",
      },
      {
        q: "Which is cheaper, a partnership or an LLC?",
        a: "A general partnership is usually cheaper to start because no state formation filing is needed, although you may need a DBA, business licenses and an EIN. An LLC requires articles of organization and a filing fee that varies by state, plus annual or biennial reports in most states. Some states also charge LLCs annual taxes, such as California's $800 minimum franchise tax.",
      },
      {
        q: "Can an LLC with two members elect S corp status?",
        a: "Yes. A multi-member LLC can file Form 2553 to be taxed as an S corporation if it meets the eligibility rules, such as having no more than 100 shareholders, only eligible owners (generally US individuals, certain trusts and estates) and one class of stock. That means profits must be split in proportion to ownership, which removes the flexible special allocations a partnership allows.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> A general partnership and an LLC can be taxed the same way (both file Form 1065 and give owners a Schedule K-1), but only the LLC shields owners from business debts and lawsuits. A partnership costs less to form and needs no state filing; an LLC requires articles of organization, fees and annual reports in exchange for limited liability.</p>

<p>If two or more of you are going into business together, the partnership vs LLC question is usually the first legal decision you make. This guide compares the two on liability, taxes, paperwork and cost, works through a numbers example and gives a checklist for choosing. It is general information for US businesses, not legal or tax advice for your situation.</p>

<h2>What is a partnership?</h2>

<p>A partnership is a business owned by two or more people (or entities) who share profits and losses. The main types are:</p>

<ul>
<li><strong>General partnership (GP):</strong> every partner can manage the business and bind it to contracts, and every partner is personally liable for all partnership debts. It can form without any filing.</li>
<li><strong>Limited partnership (LP):</strong> at least one general partner runs the business with unlimited liability, while limited partners invest and have liability limited to their investment, as long as they do not take part in control. Requires a state filing.</li>
<li><strong>Limited liability partnership (LLP):</strong> partners are protected from other partners' errors and the firm's debts, usually limited to licensed professions. Requires a state filing.</li>
</ul>

<p>When people compare partnership vs LLC, they usually mean a general partnership, because that is what you get by default if you start a business with someone and file nothing.</p>

<h2>What is an LLC?</h2>

<p>A limited liability company is a separate legal entity created by filing articles of organization (called a certificate of formation in some states) with the secretary of state. Its owners are called members. Members are not personally liable for the LLC's debts or for claims against it, and the LLC can be member-managed or manager-managed. An <a href="/blog/llc-operating-agreement">operating agreement</a> sets out ownership, profit splits, voting and exit rules.</p>

<p>For taxes, the IRS treats a multi-member LLC as a partnership by default. A single-member LLC is a disregarded entity taxed like a sole proprietorship. Either can elect to be taxed as a corporation or an S corporation.</p>

<h2>Partnership vs LLC: comparison table</h2>

<table>
<thead>
<tr><th>Factor</th><th>General partnership</th><th>Multi-member LLC</th></tr>
</thead>
<tbody>
<tr><td>Formation</td><td>Automatic, no state filing</td><td>Articles of organization filed with the state</td></tr>
<tr><td>Personal liability</td><td>Unlimited, joint and several</td><td>Limited to investment in most cases</td></tr>
<tr><td>Liability for a partner's actions</td><td>Yes</td><td>Generally no</td></tr>
<tr><td>Default federal tax</td><td>Partnership, Form 1065</td><td>Partnership, Form 1065</td></tr>
<tr><td>Owner tax forms</td><td>Schedule K-1, Schedule E, Schedule SE</td><td>Schedule K-1, Schedule E, Schedule SE</td></tr>
<tr><td>Can elect S corp or C corp tax</td><td>Must become an entity first (in practice, form an LLC or corporation)</td><td>Yes, Form 2553 or Form 8832</td></tr>
<tr><td>Governing document</td><td>Partnership agreement (optional but wise)</td><td>Operating agreement (required in some states)</td></tr>
<tr><td>State fees</td><td>Usually none, beyond DBA and licenses</td><td>Filing fee plus annual or biennial report in most states</td></tr>
<tr><td>Credibility with banks and clients</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Ownership transfer</td><td>Often dissolves the partnership by default</td><td>Governed by operating agreement</td></tr>
</tbody>
</table>

<h2>How are partnerships and LLCs taxed?</h2>

<p>This is where the two look nearly identical. A multi-member LLC that does not elect corporate treatment files the same return as a partnership.</p>

<h3>Form 1065 and Schedule K-1</h3>

<p>The business files <a href="/blog/form-1065">Form 1065, U.S. Return of Partnership Income</a>, an information return. The entity itself pays no federal income tax. Instead, it issues each owner a Schedule K-1 showing their share of income, deductions and credits, and owners report those amounts on their personal returns. For calendar-year businesses, Form 1065 is due March 15 (the 15th day of the third month after year end), and K-1s must go to partners by the same date. The IRS explains the rules on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/partnerships" rel="noopener" target="_blank">partnerships page</a>.</p>

<h3>Self-employment tax</h3>

<p>General partners and most active LLC members pay <a href="/blog/self-employment-tax">self-employment tax</a> of 15.3% on net earnings: 12.4% Social Security on earnings up to the 2026 wage base of $184,500, plus 2.9% Medicare on all earnings, with an extra 0.9% Medicare tax above certain income levels. Limited partners in an LP are generally exempt on their distributive share. LLC members fall in a gray area, but members who work in the business are typically treated like general partners.</p>

<h3>Guaranteed payments and special allocations</h3>

<p>Both partnerships and LLCs taxed as partnerships can pay an owner a guaranteed payment for services (similar to a salary, but not run through payroll), and both can use special allocations to split profits differently from ownership percentages, provided the allocations have substantial economic effect under the tax regulations. This flexibility is a key reason people choose partnership taxation over an S corp.</p>

<h3>QBI deduction and state taxes</h3>

<p>Owners of both may qualify for the 20% <a href="/blog/qbi-deduction-section-199a">qualified business income deduction</a>, subject to income limits and rules for specified service businesses. State treatment differs more. California, for example, charges LLCs an $800 annual minimum franchise tax plus a gross-receipts-based fee, while a general partnership is not subject to that minimum tax. See our guide to <a href="/blog/how-to-file-taxes-as-an-llc">how LLCs file taxes</a> for the full picture.</p>

<h2>How does liability differ?</h2>

<p>In a general partnership, each partner is jointly and severally liable for partnership debts. If the business owes a supplier $60,000 and cannot pay, the supplier can pursue any partner's personal assets for the full amount, and that partner then has to chase the others for their share. Each partner can also bind the partnership to contracts within the ordinary course of business, so one partner's bad deal becomes everyone's problem.</p>

<p>In an LLC, the creditor's claim is against the company. Members typically risk only what they invested, with important exceptions:</p>

<ul>
<li>Personal guarantees on loans, leases and credit cards</li>
<li>Your own negligence or professional malpractice</li>
<li>Unpaid payroll withholding (trust fund) taxes</li>
<li>Veil piercing, where a court ignores the LLC because owners mixed funds, undercapitalized it or ignored its separate existence</li>
</ul>

<p>Insurance matters in both structures. General liability and professional liability coverage protect against claims that limited liability alone does not stop. Our <a href="/blog/business-insurance">small business insurance guide</a> covers the main policies.</p>

<h2>What paperwork does each require?</h2>

<h3>Starting a general partnership</h3>

<ol>
<li>Agree on terms and sign a written partnership agreement.</li>
<li>Register a trade name (DBA) if you are not operating under the partners' surnames. Some states and counties call this an assumed name or fictitious business name filing.</li>
<li><a href="/blog/how-to-get-an-ein">Get an EIN</a> from the IRS, which every partnership needs.</li>
<li>Obtain local and state business licenses and a sales tax permit if you sell taxable goods.</li>
<li>Open a business bank account in the partnership's name.</li>
</ol>

<h3>Starting an LLC</h3>

<ol>
<li>Choose an available name that includes "LLC" or a similar designator.</li>
<li>Appoint a registered agent with a physical address in the state to receive legal papers.</li>
<li>File articles of organization and pay the state fee. Fees vary widely by state, from under $100 in some to several hundred dollars in others.</li>
<li>Sign an operating agreement covering capital contributions, profit splits, management and buyouts.</li>
<li>Get an EIN, licenses and a business bank account.</li>
<li>Calendar the annual report and any franchise tax due dates.</li>
</ol>

<p>The step-by-step guide to <a href="/blog/how-to-start-an-llc">starting an LLC</a> covers each filing in detail.</p>

<h2>Worked example: two partners, one bad year</h2>

<p>Maya and Jordan run a kitchen remodeling business. In 2026 the business earns $160,000 of net profit, split 50/50, and neither has a W-2 job.</p>

<table>
<thead>
<tr><th>Item</th><th>General partnership</th><th>LLC taxed as partnership</th></tr>
</thead>
<tbody>
<tr><td>Federal entity tax</td><td>$0 (Form 1065 is informational)</td><td>$0 (Form 1065 is informational)</td></tr>
<tr><td>Each owner's K-1 income</td><td>$80,000</td><td>$80,000</td></tr>
<tr><td>Self-employment tax each (approx.)</td><td>$80,000 x 92.35% x 15.3% = $11,304</td><td>Same, $11,304</td></tr>
<tr><td>State formation and annual costs</td><td>DBA fee only</td><td>State filing fee plus annual report</td></tr>
<tr><td>Exposure if a $200,000 lawsuit exceeds insurance</td><td>Both partners' personal assets at risk</td><td>Generally limited to LLC assets</td></tr>
</tbody>
</table>

<p>The federal tax bill is the same either way. The difference shows up only when something goes wrong: if a customer wins a $200,000 judgment and insurance covers $150,000, the remaining $50,000 can be collected from Maya's or Jordan's personal savings in a partnership, but generally not in an LLC (unless one of the exceptions above applies). For most owners, that protection is worth a few hundred dollars a year in state fees.</p>

<h2>Which should you choose? Decision checklist</h2>

<ul>
<li><strong>Choose an LLC</strong> if you have personal assets to protect, will sign contracts or leases, hire employees, carry inventory or work in a field with injury or property damage risk.</li>
<li><strong>Choose an LLC</strong> if you may later want S corp taxation to manage self-employment tax, or plan to bring in investors.</li>
<li><strong>A general partnership may be enough</strong> for a short, low-risk joint venture, such as two freelancers splitting one project, when insurance covers the realistic risks.</li>
<li><strong>Consider an LLP</strong> if you are licensed professionals in a state that permits them and you want partnership culture with liability protection.</li>
<li><strong>Consider an LP</strong> if passive investors fund the business while one manager runs it.</li>
</ul>

<p>If you are still comparing structures, see <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a>, <a href="/blog/llc-vs-corporation">LLC vs corporation</a> and <a href="/blog/s-corp-vs-c-corp">S corp vs C corp</a>.</p>

<h2>Common mistakes when choosing between a partnership and an LLC</h2>

<ul>
<li><strong>Forming a partnership by accident.</strong> Two people sharing profits without any filing are often a general partnership, with all the liability that brings.</li>
<li><strong>Skipping the agreement.</strong> Default state rules rarely match what the owners intended about contributions, pay and exit.</li>
<li><strong>Assuming the LLC changes your taxes.</strong> A multi-member LLC is taxed exactly like a partnership unless you elect otherwise.</li>
<li><strong>Mixing funds.</strong> Paying personal bills from the LLC account weakens liability protection. Keep separate accounts and records, and record every transaction in the business books.</li>
<li><strong>Missing Form 1065.</strong> The IRS charges a penalty per partner, per month for late partnership returns, even when no tax is due.</li>
<li><strong>Invoicing in personal names.</strong> Bill clients in the business's legal name so contracts and payments sit with the entity, as explained in <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a>.</li>
</ul>

<h2>What should a partnership or operating agreement include?</h2>

<p>The agreement is where co-owners avoid most future disputes, and the topics are almost the same whether you sign a partnership agreement or an LLC operating agreement:</p>

<ul>
<li><strong>Capital contributions:</strong> who puts in cash, equipment or work, how each is valued, and whether more capital can be required later.</li>
<li><strong>Ownership and profit split:</strong> percentages, any special allocations, and when distributions are paid (many agreements require tax distributions so owners can pay tax on K-1 income).</li>
<li><strong>Owner pay:</strong> guaranteed payments for owners who work in the business, and how they are set.</li>
<li><strong>Management and voting:</strong> day-to-day authority, and which decisions need unanimous consent, such as borrowing, selling assets or admitting a new owner.</li>
<li><strong>Exit and buyout:</strong> what happens on death, disability, divorce or a partner wanting out, how the share is valued and how the buyout is paid.</li>
<li><strong>Deadlock and disputes:</strong> mediation or arbitration before litigation.</li>
<li><strong>Dissolution:</strong> how assets are sold and debts paid if the business closes.</li>
</ul>

<p>A partnership without a written agreement is governed by your state's version of the Uniform Partnership Act, which generally splits profits equally regardless of capital contributed. An LLC without an operating agreement falls back on the state LLC statute in the same way. In both cases, a few hours with a business attorney is cheap compared with a dispute between owners.</p>

<h2>How to invoice as a partnership or LLC</h2>

<p>Whatever you choose, your invoices should show the business's legal name (including "LLC" if applicable), any DBA, business address, EIN only where required, invoice number, dates, line items and payment terms. Keep numbering consistent with the <a href="/tools/invoice-number-generator">invoice number generator</a> so both owners can track receivables. Our <a href="/invoice-generator">free invoice generator</a> lets you put the entity name and DBA in the header and save the PDF for your records.</p>

<h2>Partnership vs LLC: the bottom line</h2>

<p>Partnership vs LLC is mostly a liability decision, not a tax one: both default to Form 1065 and K-1s, but only the LLC separates your personal assets from the business. For most small businesses with real customers and contracts, the LLC's modest filing costs are worth it. Once your entity is set up, create professional invoices in our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and the PDF is built in your browser for instant download.</p>`,
  },
  {
    slug: "s-corp-vs-c-corp",
    title: "S Corp vs C Corp: Taxes, Eligibility and Examples (2026)",
    description:
      "S corp vs C corp: compare the 21% corporate rate and double taxation with pass-through S corp rules, eligibility limits and a worked tax example for owners.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["s-corp-vs-llc", "s-corp-election-form-2553", "llc-vs-corporation"],
    faqs: [
      {
        q: "Is an S corp a different legal entity from a C corp?",
        a: "No. S corp and C corp are tax classifications, not separate legal entity types. Every business corporation is formed under state law the same way, and it is a C corporation for federal tax purposes unless it files Form 2553 to elect S status. An LLC can also elect to be taxed as an S corp while staying an LLC under state law.",
      },
      {
        q: "Can a C corp switch to an S corp later?",
        a: "Yes, if it meets the eligibility rules, by filing Form 2553. There are traps: a former C corp that converts may owe built-in gains tax if it sells appreciated assets within five years, and may face a tax on excess passive income if it has accumulated earnings and profits from its C corp years. Plan the timing with a tax adviser before switching.",
      },
      {
        q: "Do S corps pay any tax at the entity level?",
        a: "Usually not federally, but there are exceptions such as the built-in gains tax and the tax on excess net passive income for former C corps. Many states also tax S corps: some charge a franchise or entity-level tax, California charges a 1.5% tax on S corp net income with an $800 minimum, and some states do not recognize S status at all. Check your state's rules.",
      },
      {
        q: "What is a reasonable salary for an S corp owner?",
        a: "The IRS requires shareholder-employees to take reasonable compensation for the services they perform before taking distributions. There is no fixed percentage. Courts look at what similar businesses would pay someone for the same work, the owner's duties and time, training and experience, and the company's profitability. Paying an unrealistically low salary to avoid payroll tax is a common audit issue.",
      },
      {
        q: "Why do venture capitalists require C corps?",
        a: "Investors usually want preferred stock with liquidation preferences, which an S corp cannot issue because it may have only one class of stock. Funds structured as partnerships or with foreign investors also cannot be S corp shareholders. C corps can issue unlimited shares to any type of owner and may qualify for the Section 1202 qualified small business stock exclusion, which is attractive to founders and investors.",
      },
      {
        q: "Does a C corp pay tax on dividends it pays out?",
        a: "The corporation cannot deduct dividends, so it pays the 21% corporate tax on profits first, then shareholders pay tax on the dividends they receive. Qualified dividends are taxed at 0%, 15% or 20% depending on the shareholder's income, and higher earners may owe the 3.8% net investment income tax on top. That two-layer result is what people call double taxation.",
      },
      {
        q: "Can an S corp have foreign owners?",
        a: "No. S corp shareholders generally must be US citizens or resident aliens, certain trusts, estates and tax-exempt organizations. A nonresident alien shareholder terminates the S election, as does a corporate or partnership shareholder. If foreign founders or investors are part of the plan, a C corp or an LLC taxed as a partnership is usually the better fit.",
      },
      {
        q: "Which is better for a small business, S corp or C corp?",
        a: "For most owner-operated small businesses that distribute most of their profit, an S corp tends to produce a lower combined tax bill because profit is taxed once and the owner can split pay between salary and distributions. A C corp can make sense when the company will reinvest most earnings, raise outside capital, or qualify for the Section 1202 exclusion on a future sale.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> A C corp pays a flat 21% federal corporate income tax, and shareholders pay tax again on dividends, so profits can be taxed twice. An S corp is a pass-through: profits flow to owners' personal returns and are taxed once. S corps face strict eligibility limits, including 100 shareholders, one class of stock and US owners only.</p>

<p>Choosing between an S corp vs C corp is one of the biggest tax decisions a growing business makes. Both are corporations under state law, with the same liability protection, boards and shares. The difference lies in how the IRS taxes them, who can own them and how easily they can raise money. This guide covers taxation, eligibility, a double tax worked example and the situations where each one wins. It is general information, not tax advice.</p>

<h2>What is the difference between an S corp and a C corp?</h2>

<p>When you incorporate in any state, the corporation starts life as a C corporation, named after Subchapter C of the Internal Revenue Code. If it meets the requirements and files <a href="/blog/s-corp-election-form-2553">Form 2553</a>, it becomes an S corporation under Subchapter S. An LLC can also elect S corp taxation, which is why you see comparisons like <a href="/blog/s-corp-vs-llc">S corp vs LLC</a>.</p>

<ul>
<li><strong>C corp:</strong> separate taxpayer. Files Form 1120, pays corporate income tax, and shareholders pay tax on dividends.</li>
<li><strong>S corp:</strong> pass-through. Files Form 1120-S as an information return, issues Schedule K-1s, and shareholders report their share of profit whether or not it is distributed.</li>
</ul>

<h2>S corp vs C corp comparison table</h2>

<table>
<thead>
<tr><th>Feature</th><th>S corporation</th><th>C corporation</th></tr>
</thead>
<tbody>
<tr><td>Federal tax on profits</td><td>None at entity level (generally); owners pay at individual rates</td><td>21% flat corporate rate</td></tr>
<tr><td>Tax on distributions</td><td>Generally tax-free up to basis</td><td>Dividends taxed at 0%, 15% or 20%, plus 3.8% NIIT for some</td></tr>
<tr><td>Federal return</td><td>Form 1120-S plus K-1s</td><td>Form 1120</td></tr>
<tr><td>Shareholder limit</td><td>100 (family members can count as one)</td><td>Unlimited</td></tr>
<tr><td>Eligible owners</td><td>US citizens and residents, certain trusts, estates, exempt orgs</td><td>Anyone, including foreign persons, corporations, funds</td></tr>
<tr><td>Classes of stock</td><td>One (voting differences allowed)</td><td>Multiple, including preferred</td></tr>
<tr><td>Losses</td><td>Pass through to owners, subject to basis and at-risk limits</td><td>Stay in the company as net operating losses</td></tr>
<tr><td>Owner pay</td><td>Reasonable salary required, rest as distributions</td><td>Salary, bonuses, dividends</td></tr>
<tr><td>QBI deduction</td><td>Owners may qualify for 20% deduction</td><td>Not available</td></tr>
<tr><td>Section 1202 QSBS exclusion</td><td>Not available</td><td>Available if requirements met</td></tr>
<tr><td>Best for</td><td>Owner-operated profitable businesses</td><td>Venture-backed startups, reinvesting companies</td></tr>
</tbody>
</table>

<h2>How is a C corp taxed?</h2>

<p>Since the Tax Cuts and Jobs Act took effect in 2018, C corps pay a flat 21% federal income tax on taxable income, with no graduated brackets. The corporation deducts salaries, rent and other business expenses but cannot deduct dividends. When it distributes after-tax profit, shareholders pay tax on the dividends: qualified dividends are taxed at 0%, 15% or 20%, and high earners may add the 3.8% net investment income tax.</p>

<p>This is the "double tax". It only bites when profits are paid out as dividends. Profits kept in the company to fund growth are taxed once at 21%, which is lower than the top individual rate of 37%. Owners who work in a C corp can also take a deductible salary, which is taxed once at personal rates plus payroll taxes.</p>

<h2>How is an S corp taxed?</h2>

<p>An S corp generally pays no federal income tax. Its income, deductions and credits pass through to shareholders on Schedule K-1 in proportion to ownership, and they pay tax at <a href="/blog/federal-tax-brackets-2026">individual rates</a> whether or not the cash is distributed. Owner-employees must take a reasonable salary through payroll, which carries Social Security and Medicare taxes. Profit above that salary passes through without <a href="/blog/self-employment-tax">self-employment tax</a>, which is the main attraction compared with a sole proprietorship or partnership.</p>

<p>S corp owners may also qualify for the 20% <a href="/blog/qbi-deduction-section-199a">qualified business income deduction</a> on their pass-through profit (not on their salary), subject to income thresholds and limits for specified service businesses. The deduction was made permanent by the 2025 tax law known as the One Big Beautiful Bill Act.</p>

<h2>Who is eligible for S corp status?</h2>

<p>To elect and keep S status, the corporation must:</p>

<ol>
<li>Be a domestic corporation (or an LLC that elects corporate treatment).</li>
<li>Have no more than 100 shareholders, with family members able to elect to count as one.</li>
<li>Have only eligible shareholders: individuals who are US citizens or residents, certain trusts, estates and some tax-exempt organizations. No partnerships, corporations or nonresident aliens.</li>
<li>Have only one class of stock. Differences in voting rights are allowed, but every share must have identical rights to distributions and liquidation proceeds.</li>
<li>Not be an ineligible corporation, such as certain banks and insurance companies.</li>
</ol>

<p>Form 2553 is generally due no more than two months and 15 days after the start of the tax year the election is to take effect (March 15 for a calendar-year company), though the IRS provides relief for late elections in many cases. All shareholders must sign consent. See the IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations" rel="noopener" target="_blank">S corporations page</a> for the official rules.</p>

<h2>Worked example: double tax vs pass-through</h2>

<p>Consider one owner whose company earns $200,000 of profit before paying the owner, in 2026. To keep the math readable, assume an illustrative 24% average federal income tax rate on the owner's taxable income and ignore state taxes. Real rates depend on filing status, other income and deductions.</p>

<h3>C corp, all profit paid as dividends</h3>

<table>
<thead>
<tr><th>Step</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Corporate profit</td><td>$200,000</td></tr>
<tr><td>Corporate tax at 21%</td><td>$42,000</td></tr>
<tr><td>Dividend paid to owner</td><td>$158,000</td></tr>
<tr><td>Dividend tax at 15% (qualified)</td><td>$23,700</td></tr>
<tr><td><strong>Total federal tax</strong></td><td><strong>$65,700</strong></td></tr>
<tr><td>Owner keeps</td><td>$134,300</td></tr>
</tbody>
</table>

<h3>S corp, $90,000 salary plus pass-through profit</h3>

<table>
<thead>
<tr><th>Step</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Owner salary</td><td>$90,000</td></tr>
<tr><td>Employer share of FICA (7.65%), deductible</td><td>$6,885</td></tr>
<tr><td>Pass-through profit ($200,000 - $90,000 - $6,885)</td><td>$103,115</td></tr>
<tr><td>QBI deduction (20% of $103,115, if eligible)</td><td>-$20,623</td></tr>
<tr><td>Taxable income ($90,000 + $103,115 - $20,623)</td><td>$172,492</td></tr>
<tr><td>Income tax at illustrative 24%</td><td>$41,398</td></tr>
<tr><td>Total FICA (employer + employee, 15.3%)</td><td>$13,770</td></tr>
<tr><td><strong>Total federal tax</strong></td><td><strong>$55,168</strong></td></tr>
</tbody>
</table>

<p>In this illustration the S corp saves roughly $10,500 a year when the owner takes all the profit out. But if the C corp instead kept the $158,000 in the business to fund expansion, its tax this year would be only $42,000. That is why fast-growing companies that reinvest everything, or plan an exit that could qualify for the Section 1202 exclusion, often stay C corps. Under the 2025 law, for qualifying stock issued after July 4, 2025, the exclusion phases in after three years and reaches 100% after five, subject to dollar caps, so confirm current limits with a tax adviser.</p>

<h2>When does a C corp make more sense?</h2>

<ul>
<li>You plan to raise venture capital or issue preferred stock.</li>
<li>Owners include foreign persons, other companies or investment funds.</li>
<li>The business will retain most profits for growth rather than distribute them.</li>
<li>You hope to sell the company and may qualify for the Section 1202 qualified small business stock exclusion.</li>
<li>You want more than 100 shareholders, such as a broad employee stock plan.</li>
</ul>

<h2>When does an S corp make more sense?</h2>

<ul>
<li>You run a profitable owner-operated business and take most profits out.</li>
<li>Your profit is comfortably above a reasonable salary, so the payroll tax savings outweigh extra costs.</li>
<li>Early-year losses could offset owners' other income (subject to basis, at-risk and passive activity rules).</li>
<li>All owners are US individuals and you do not need multiple share classes.</li>
</ul>

<p>Read <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> for salary and distribution mechanics, and <a href="/blog/how-to-do-payroll-yourself">how to run payroll yourself</a> if you will process the owner's salary in-house.</p>

<h2>Steps to choose and set up your corporate tax status</h2>

<ol>
<li><strong>Estimate profit.</strong> Project net income for the next two to three years.</li>
<li><strong>Set a reasonable salary.</strong> Use market pay data for your role and hours.</li>
<li><strong>Model both options.</strong> Run the numbers with your actual tax bracket and state taxes, including payroll and bookkeeping costs.</li>
<li><strong>Check ownership plans.</strong> Any foreign owner, investor fund or preferred stock rules out an S corp.</li>
<li><strong>Form the entity.</strong> Incorporate or <a href="/blog/how-to-start-an-llc">form an LLC</a>, then <a href="/blog/how-to-get-an-ein">get an EIN</a>.</li>
<li><strong>File Form 2553 on time</strong> if you choose S status, with every shareholder's consent.</li>
<li><strong>Set up payroll</strong> for owner-employees, quarterly <a href="/blog/form-941">Form 941</a> filings and year-end W-2s.</li>
<li><strong>Review annually.</strong> The right answer can change as profits, owners and tax laws change.</li>
</ol>

<h2>What extra costs and paperwork come with each?</h2>

<p>The tax rate is only part of the comparison. Each status brings its own compliance work:</p>

<table>
<thead>
<tr><th>Obligation</th><th>S corp</th><th>C corp</th></tr>
</thead>
<tbody>
<tr><td>Federal income tax return</td><td>Form 1120-S, due March 15 for calendar-year companies</td><td>Form 1120, due April 15 for calendar-year companies</td></tr>
<tr><td>Owner tax forms</td><td>Schedule K-1 to each shareholder</td><td>Form 1099-DIV for dividends</td></tr>
<tr><td>Payroll for owner-employees</td><td>Required (reasonable salary)</td><td>Required if owners take a salary</td></tr>
<tr><td>Estimated taxes</td><td>Paid by shareholders personally</td><td>Paid by the corporation quarterly</td></tr>
<tr><td>Basis tracking</td><td>Shareholders must track stock and debt basis</td><td>Simpler, basis matters mainly on sale</td></tr>
<tr><td>State filings</td><td>Annual report; some states add entity taxes</td><td>Annual report and state corporate income or franchise tax</td></tr>
<tr><td>Corporate formalities</td><td>Bylaws, board and shareholder minutes</td><td>Same</td></tr>
</tbody>
</table>

<p>Payroll is the biggest new cost for many S corp owners: a payroll service, quarterly Form 941 filings, state withholding and unemployment accounts and a year-end W-2. Accountants also typically charge more to prepare Form 1120-S and K-1s than a sole proprietor's Schedule C. A common rule of thumb among advisers is that S corp status starts to pay off once profit is well above what a reasonable salary for your role would be, but the break-even point depends on your state, your salary level and your accountant's fees, so model it with real numbers.</p>

<h3>How are losses treated?</h3>

<p>Early-stage losses are another difference. S corp losses pass through and can offset a shareholder's other income, limited to the shareholder's stock and debt basis and subject to at-risk and passive activity rules. C corp losses stay inside the company as net operating losses that can be carried forward to offset future corporate profits (generally limited to 80% of taxable income in a given year), but never reach the owners' personal returns. A founder who expects a few years of losses before profitability, and has other income, may benefit from S status in those years.</p>

<h2>Common mistakes with S corps and C corps</h2>

<ul>
<li><strong>Electing S status too early.</strong> If profit is low, payroll costs and extra filings can exceed the tax savings.</li>
<li><strong>Paying no salary.</strong> S corp owners who take only distributions risk having them recharacterized as wages, with back payroll taxes and penalties.</li>
<li><strong>Disproportionate distributions.</strong> Paying one shareholder more than their ownership share can be treated as a second class of stock, threatening the election.</li>
<li><strong>Adding an ineligible shareholder.</strong> Selling shares to an LLC, a corporation or a nonresident alien terminates S status.</li>
<li><strong>Ignoring state rules.</strong> Some states tax S corps at the entity level or do not recognize the election.</li>
<li><strong>Mixing personal and corporate money.</strong> Both entity types need separate accounts, minutes and records to keep liability protection.</li>
</ul>

<h2>How invoicing works for either corporation</h2>

<p>The tax election does not change how you bill customers. Invoices should show the corporation's legal name (with "Inc.", "Corp." or "LLC"), address, invoice number, dates, line items, any <a href="/tools/sales-tax-calculator">sales tax</a> and payment terms. Clear invoices make revenue easy to match to bank deposits, which matters for both Form 1120 and Form 1120-S. You can create them in our <a href="/invoice-generator">free invoice generator</a> and number them consistently with the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>

<h2>S corp vs C corp: final take</h2>

<p>For most profitable owner-run small businesses, the S corp vs C corp comparison favors the S corp because profits are taxed once and owners can blend salary and distributions. The C corp wins for companies that reinvest heavily, raise outside capital or have ineligible owners. Model both with your accountant, then keep your billing tidy with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and the PDF is built right in your browser.</p>`,
  },
  {
    slug: "gusto-vs-adp",
    title: "Gusto vs ADP: Payroll Pricing and Features (2026)",
    description:
      "Gusto vs ADP for small business payroll: plan prices as of October 2026, features, tax filing, HR tools and support compared, plus which fits your team.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-do-payroll-yourself", "employer-payroll-taxes", "hiring-your-first-employee"],
    faqs: [
      {
        q: "Is Gusto cheaper than ADP?",
        a: "For very small teams, Gusto usually costs less and is easier to estimate because its prices are published: as of October 2026 its Simple plan is listed at $49 a month plus $6 per person. ADP does not publish RUN prices, so you need a quote. ADP quotes vary by headcount, state and promotions, and can be competitive, so compare a written quote against Gusto's total for your exact team.",
      },
      {
        q: "Does Gusto file payroll taxes automatically?",
        a: "Yes. Gusto's full-service payroll plans calculate, file and pay federal, state and local payroll taxes for you, including quarterly Form 941, annual Form 940 and year-end W-2s for employees. It also prepares 1099-NEC forms for contractors paid through the platform. You remain responsible for giving accurate information and keeping your tax account registrations current with each state.",
      },
      {
        q: "What is ADP RUN?",
        a: "RUN Powered by ADP is ADP's payroll platform for small businesses, generally aimed at companies with about 1 to 49 employees. It comes in four packages: Essential Payroll, Enhanced Payroll, Complete Payroll and HR Plus, and HR Pro. Larger companies are usually moved to ADP Workforce Now, and businesses wanting to outsource HR entirely can use ADP TotalSource, its PEO service.",
      },
      {
        q: "Can I pay contractors only with Gusto or ADP?",
        a: "Gusto offers a Contractor Only plan for businesses with no W-2 employees, listed at $35 a month plus $6 per contractor as of October 2026, with Gusto running promotions that waive the base fee from time to time. ADP RUN can also pay 1099 contractors, typically as part of a payroll package, so ask for contractor-only pricing in your quote.",
      },
      {
        q: "Which payroll provider has better customer support?",
        a: "Both offer phone, chat and email support, and experiences vary. Gusto offers priority support and access to HR experts on higher plans or as paid add-ons. ADP often assigns a payroll specialist or service team and offers 24/7 support on many packages. Read recent user reviews for your company size and ask each provider how support works during payroll deadlines.",
      },
      {
        q: "Can I switch from ADP to Gusto mid-year?",
        a: "Yes, but switching at the start of a quarter is simplest because tax filings stay with one provider for the full quarter. If you switch mid-quarter, the new provider needs year-to-date payroll totals for every employee so W-2s and quarterly returns are accurate. Both providers have migration teams, and you should keep reports from the old system for at least four years.",
      },
      {
        q: "Do Gusto and ADP integrate with accounting software?",
        a: "Yes. Both sync payroll journal entries with popular accounting tools such as QuickBooks Online and Xero, so wages, taxes and benefits post to the right accounts without manual entry. Gusto also integrates with many time tracking and expense apps. Check the current integration list for your accounting software before you sign up, because supported apps and sync depth change.",
      },
      {
        q: "Is a PEO better than payroll software?",
        a: "A PEO, such as ADP TotalSource or Gusto's partner options, becomes the co-employer of your staff and takes on payroll, benefits administration and some compliance work, often giving access to large-group health plans. It costs more than payroll software and involves a co-employment agreement. Small teams that mainly need accurate pay and tax filings usually start with payroll software.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> Gusto is generally the simpler, more transparent choice for small teams: as of October 2026 it lists plans from $49 a month plus $6 per person, with automatic tax filing on every plan. ADP RUN is quote-based and suits businesses that want a long-established provider, dedicated service teams and a path to larger HR and PEO options as they grow.</p>

<p>Choosing between Gusto vs ADP usually comes down to price transparency, how much HR you need and how big you expect to get. Both run full-service payroll: they calculate wages and withholding, pay employees by direct deposit, file payroll tax returns and produce W-2s and 1099s. This comparison covers pricing as of October 2026, features, a cost example and the mistakes to avoid when switching.</p>

<h2>What are Gusto and ADP?</h2>

<p><strong>Gusto</strong> is a cloud payroll and HR platform founded in 2011, built for small businesses. It is known for its clean interface, published pricing and automatic payroll tax filing in all 50 states.</p>

<p><strong>ADP</strong> (Automatic Data Processing) is one of the largest payroll and HR providers in the world, founded in 1949. Its small business product is <strong>RUN Powered by ADP</strong>, typically for companies with about 1 to 49 employees. Larger employers use ADP Workforce Now, and ADP TotalSource is its professional employer organization (PEO).</p>

<h2>How much do Gusto and ADP cost? (as of October 2026)</h2>

<h3>Gusto pricing</h3>

<p>Gusto publishes its prices. As of October 2026, its plans are listed as follows (verify on <a href="https://gusto.com/product/pricing" rel="noopener" target="_blank">Gusto's pricing page</a>, since prices and promotions change):</p>

<table>
<thead>
<tr><th>Gusto plan</th><th>Monthly base</th><th>Per person per month</th><th>Highlights</th></tr>
</thead>
<tbody>
<tr><td>Contractor Only</td><td>$35 (base fee sometimes waived by promotion)</td><td>$6 per contractor</td><td>Contractor payments, 1099 preparation</td></tr>
<tr><td>Simple</td><td>$49</td><td>$6</td><td>Full-service single-state payroll, tax filing, employee self-service</td></tr>
<tr><td>Plus</td><td>$80</td><td>$12</td><td>Multi-state payroll, time tracking, onboarding and HR tools</td></tr>
<tr><td>Premium</td><td>$180</td><td>$22</td><td>Advanced HR, HR expert access, dedicated support</td></tr>
</tbody>
</table>

<p>Gusto also lists paid add-ons, such as priority support and state compliance services. Gusto's base price rose earlier in 2026, so older reviews quoting lower figures are out of date.</p>

<h3>ADP RUN pricing</h3>

<p>ADP does not publish prices for RUN. You get a quote from a sales representative based on your headcount, pay frequency, states and the package you choose. RUN comes in four packages:</p>

<table>
<thead>
<tr><th>ADP RUN package</th><th>What it adds</th></tr>
</thead>
<tbody>
<tr><td>Essential Payroll</td><td>Payroll processing, direct deposit, tax filing, new hire reporting</td></tr>
<tr><td>Enhanced Payroll</td><td>Adds items such as state unemployment insurance management, background checks and labor law posters</td></tr>
<tr><td>Complete Payroll and HR Plus</td><td>Adds HR tools, an employee handbook wizard and HR support</td></tr>
<tr><td>HR Pro</td><td>Adds deeper HR support, training and legal resources</td></tr>
</tbody>
</table>

<p>Third-party estimates for ADP RUN conflict and cannot be confirmed against an official ADP price list, so treat any figure you see online as rough and ask for a written quote. ADP frequently offers promotions such as free months for new clients. Time tracking, benefits administration, workers' compensation and retirement plans are typically separate add-ons. Details are on <a href="https://www.adp.com/what-we-offer/products/run-powered-by-adp.aspx" rel="noopener" target="_blank">ADP's RUN page</a>.</p>

<h2>Gusto vs ADP: feature comparison</h2>

<table>
<thead>
<tr><th>Feature</th><th>Gusto</th><th>ADP RUN</th></tr>
</thead>
<tbody>
<tr><td>Pricing</td><td>Published online</td><td>Quote only</td></tr>
<tr><td>Automatic federal, state and local tax filing</td><td>Yes, all plans with employees</td><td>Yes</td></tr>
<tr><td>Unlimited pay runs</td><td>Yes</td><td>Depends on package and quote</td></tr>
<tr><td>Contractor payments and 1099s</td><td>Yes, including a contractor-only plan</td><td>Yes</td></tr>
<tr><td>Multi-state payroll</td><td>Plus and Premium (or add-on)</td><td>Yes</td></tr>
<tr><td>Time tracking</td><td>Included from Plus</td><td>Add-on</td></tr>
<tr><td>Benefits administration</td><td>Health, 401(k) and others through Gusto's brokerage and partners</td><td>Through ADP and partners, often an add-on</td></tr>
<tr><td>Workers' comp pay-as-you-go</td><td>Through partners</td><td>Through ADP's insurance agency</td></tr>
<tr><td>HR support</td><td>HR resources; expert access on Premium or add-on</td><td>HR support on higher packages</td></tr>
<tr><td>Growth path</td><td>Plans scale to mid-size companies</td><td>Workforce Now for larger firms, TotalSource PEO</td></tr>
<tr><td>Accounting integrations</td><td>QuickBooks, Xero and others</td><td>QuickBooks, Xero and others</td></tr>
</tbody>
</table>

<h2>Worked example: what will payroll cost for 10 people?</h2>

<p>A landscaping company has 8 W-2 employees and 2 contractors paid each month, all in one state. Gusto counts each active employee and contractor paid in the month toward the per-person fee.</p>

<table>
<thead>
<tr><th>Gusto plan</th><th>Calculation</th><th>Monthly cost</th><th>Annual cost</th></tr>
</thead>
<tbody>
<tr><td>Simple</td><td>$49 + (10 x $6)</td><td>$109</td><td>$1,308</td></tr>
<tr><td>Plus</td><td>$80 + (10 x $12)</td><td>$200</td><td>$2,400</td></tr>
<tr><td>Premium</td><td>$180 + (10 x $22)</td><td>$400</td><td>$4,800</td></tr>
</tbody>
</table>

<p>To compare fairly, ask ADP for a written quote for the same 10 people, the same pay frequency and the features you actually need (for example, time tracking). Then compare annual totals including add-ons, setup fees and the price after any first-year promotion ends. Payroll software fees are separate from the <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> you owe, such as the employer half of FICA, FUTA on the first $7,000 of each employee's wages and state unemployment.</p>

<h2>What does payroll cost beyond the software fee?</h2>

<p>Whichever provider you choose, the subscription is the smallest part of payroll. Employer taxes are the same on Gusto and ADP, because they are set by law, not by the vendor. For one employee earning $50,000 a year in 2026, the federal employer costs look like this:</p>

<table>
<thead>
<tr><th>Employer cost</th><th>Rate</th><th>Annual amount on $50,000</th></tr>
</thead>
<tbody>
<tr><td>Social Security (employer share)</td><td>6.2% up to the $184,500 wage base</td><td>$3,100</td></tr>
<tr><td>Medicare (employer share)</td><td>1.45%, no cap</td><td>$725</td></tr>
<tr><td>FUTA</td><td>Effectively 0.6% on the first $7,000 with full state credit</td><td>$42</td></tr>
<tr><td>State unemployment (SUTA)</td><td>Varies by state and experience rating</td><td>Check your state notice</td></tr>
<tr><td>Workers' compensation</td><td>Varies by state, job class and insurer</td><td>Quote from insurer</td></tr>
</tbody>
</table>

<p>Gusto and ADP calculate, deposit and file these for you, but they do not reduce them. What the software does reduce is the risk of late deposit penalties and the time you spend on filings. See our guide to <a href="/blog/workers-compensation-insurance">workers' compensation insurance</a> for how pay-as-you-go policies through payroll providers work.</p>

<h2>What payroll tasks do both providers handle?</h2>

<p>For businesses with W-2 employees, both Gusto and ADP RUN cover the core full-service payroll jobs:</p>

<ul>
<li>Calculating gross pay, overtime, federal and state income tax withholding and FICA.</li>
<li>Paying employees by direct deposit, with paper checks or pay cards as options.</li>
<li>Depositing federal and state payroll taxes on the required schedule.</li>
<li>Filing quarterly Form 941 and state withholding returns, annual Form 940, and state unemployment reports.</li>
<li>Producing W-2s for employees and 1099-NEC forms for contractors paid through the system.</li>
<li>Reporting new hires to the state, as required for child support enforcement.</li>
<li>Handling deductions for health insurance, retirement plans and wage garnishments.</li>
</ul>

<p>The differences are mostly about price, how much HR is bundled, the interface and support style, rather than whether taxes get filed.</p>

<h2>How does setup and switching work?</h2>

<p>Setting up either provider takes the same raw information: your EIN, legal business name and address, state withholding and unemployment account numbers and rates, bank account for debits, employee details (W-4, I-9 completed and kept on file, direct deposit, pay rate) and, if you have paid anyone this year, year-to-date payroll totals. Gusto handles most of this through an online checklist and employee self-onboarding; ADP usually assigns a specialist to collect it.</p>

<p>Switching providers is easiest on January 1 or the first day of a quarter. If you switch mid-quarter, the new provider files the full quarter's Form 941 using your prior payroll data, so accurate year-to-date figures for every employee are essential. Ask the old provider for a final payroll register, tax filing confirmations and any credit balances on tax accounts before you cancel.</p>

<h2>Which is easier to use?</h2>

<p>Gusto is widely regarded as easier for first-time employers. Setup walks you through company details, state tax registrations, bank verification and employee onboarding, and employees enter their own W-4 and direct deposit details. Running payroll is typically a few clicks once hours are entered.</p>

<p>ADP RUN has a more traditional interface, but many owners like having an ADP representative help with setup and changes. ADP also offers a mobile app for running payroll and for employees to view pay stubs. If you have never run payroll, read <a href="/blog/hiring-your-first-employee">hiring your first employee</a> first so you know which registrations you need before either platform can file taxes for you.</p>

<h2>How to choose between Gusto and ADP</h2>

<ol>
<li><strong>Count your people.</strong> Include employees and contractors paid each month, and where they live and work.</li>
<li><strong>List must-have features.</strong> Time tracking, multi-state payroll, benefits, workers' comp, HR handbook, PTO tracking.</li>
<li><strong>Price Gusto online</strong> using the published plan rates for your headcount.</li>
<li><strong>Request an ADP quote in writing</strong> with the same assumptions, and ask what the price will be after promotions end.</li>
<li><strong>Check integrations</strong> with your accounting, time tracking and point-of-sale software.</li>
<li><strong>Ask about support hours</strong> on payroll deadline days and how errors are fixed.</li>
<li><strong>Review the contract</strong> for minimum terms, cancellation fees and year-end form charges.</li>
<li><strong>Plan the switch date</strong> for the start of a quarter if you are moving from another provider.</li>
</ol>

<h2>When Gusto is the better fit</h2>

<ul>
<li>You have fewer than about 50 employees and want predictable published pricing.</li>
<li>You pay a mix of employees and US contractors and want one system.</li>
<li>You want employee self-service onboarding with minimal paperwork.</li>
<li>You prefer to set things up yourself online rather than through a sales rep.</li>
</ul>

<h2>When ADP is the better fit</h2>

<ul>
<li>You expect to grow past 50 employees and want to stay with one vendor as you move to Workforce Now.</li>
<li>You want a PEO option (TotalSource) for benefits and co-employment.</li>
<li>You value a dedicated service relationship and are comfortable negotiating price.</li>
<li>You operate in many states or have complex compliance needs and want ADP's scale.</li>
</ul>

<h2>Common mistakes when choosing payroll software</h2>

<ul>
<li><strong>Comparing only the base price.</strong> Per-person fees, add-ons and post-promotion rates often matter more.</li>
<li><strong>Forgetting contractors.</strong> Contractors paid through the platform count toward per-person pricing. If you pay contractors by invoice instead, see <a href="/blog/how-to-pay-contractors">how to pay contractors</a> and collect a W-9 first. Contractors can send you bills from any tool, including our <a href="/invoice-generator">free invoice generator</a>.</li>
<li><strong>Misclassifying workers.</strong> Payroll software will not fix a <a href="/blog/w2-vs-1099">W-2 vs 1099</a> classification error. The 1099-NEC reporting threshold is $2,000 for payments made in 2026.</li>
<li><strong>Switching mid-quarter without year-to-date data.</strong> This causes wrong W-2s and mismatched quarterly filings.</li>
<li><strong>Ignoring state registrations.</strong> Neither provider can file until you have state withholding and unemployment accounts.</li>
<li><strong>Not testing direct deposit timing.</strong> Know your provider's processing deadlines so employees are paid on time. See <a href="/blog/how-to-set-up-direct-deposit">setting up direct deposit</a>.</li>
</ul>

<h2>What about doing payroll yourself?</h2>

<p>A business with one or two employees can run payroll manually using IRS Publication 15 withholding tables, quarterly <a href="/blog/form-941">Form 941</a> filings, annual Form 940 and year-end <a href="/blog/form-w-2">Form W-2</a>. It saves subscription fees but takes time and carries penalty risk if a deposit is late. Our guide to <a href="/blog/how-to-do-payroll-yourself">doing payroll yourself</a> explains the steps, and the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" rel="noopener" target="_blank">IRS employment taxes page</a> lists the forms.</p>

<h2>Gusto vs ADP: final verdict</h2>

<p>In the Gusto vs ADP decision, Gusto wins on transparent pricing and ease of use for small teams, while ADP wins on scale, service relationships and a clear path to enterprise HR and PEO services. Get both totals in writing for your real headcount before deciding. Payroll pays your team; invoices bring the money in, and steady collections are what keep payroll funded. For billing clients on time, use our <a href="/invoice-generator">free invoice generator</a>, or start from one of the <a href="/invoice-templates">invoice templates</a>: no account needed, and it builds a downloadable PDF in your browser.</p>`,
  },
  {
    slug: "fob-shipping-point-vs-destination",
    title: "FOB Shipping Point vs Destination: Title, Risk, Revenue",
    description:
      "FOB shipping point vs destination explained: when title and risk transfer, who pays freight, how each affects invoicing and revenue timing, with examples.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["incoterms-on-invoice", "revenue-recognition-asc-606", "freight-invoice"],
    faqs: [
      {
        q: "Who pays freight under FOB shipping point?",
        a: "Usually the buyer, because ownership and risk pass to the buyer when the goods leave the seller. In practice the freight term is often stated separately: 'FOB shipping point, freight collect' means the buyer pays the carrier directly, while 'FOB shipping point, freight prepaid and add' means the seller pays the carrier and adds the charge to the invoice for the buyer to repay.",
      },
      {
        q: "Who files a damage claim under FOB destination?",
        a: "Under FOB destination the seller owns the goods and bears the risk until delivery, so the seller normally files the freight claim with the carrier and arranges a replacement for the buyer. The buyer should still inspect the shipment, note any visible damage on the delivery receipt before signing, and report concealed damage quickly so the seller's claim is not weakened.",
      },
      {
        q: "Is FOB the same as an Incoterm?",
        a: "Not exactly. FOB is also an Incoterms 2020 rule meaning Free On Board a vessel at a named port of shipment, used only for sea and inland waterway transport. US domestic 'FOB shipping point' and 'FOB destination' come from commercial practice and the older Uniform Commercial Code shipping terms. For international sales, name an Incoterms rule and version to avoid confusion.",
      },
      {
        q: "How does FOB affect year-end inventory counts?",
        a: "Goods shipped FOB shipping point belong to the buyer once they leave the seller, so the buyer includes in-transit goods in its inventory and the seller excludes them. Under FOB destination, goods in transit stay in the seller's inventory until delivery. Auditors check shipments around year end, so keep shipping documents and delivery dates with your cutoff records.",
      },
      {
        q: "Can the invoice date differ from the shipping date?",
        a: "Yes. Many sellers invoice on the ship date for FOB shipping point sales and on the delivery date for FOB destination sales, matching when revenue is earned. Some invoice on the ship date regardless and start payment terms from delivery. Whatever you choose, state the terms on the invoice and apply them consistently so customers know when payment is due.",
      },
      {
        q: "What does FOB origin mean?",
        a: "FOB origin is another name for FOB shipping point. Ownership and risk pass to the buyer at the seller's location when the carrier takes the goods. You may also see the location named, such as 'FOB Dallas' or 'FOB our dock', which means the same thing if Dallas or the dock is where the shipment starts. Similarly, 'FOB destination' may be written as 'FOB buyer's warehouse'.",
      },
      {
        q: "Does FOB affect sales tax on shipping?",
        a: "It can. In some states, whether delivery charges are taxable depends on when title passes and whether the shipping charge is separately stated. If title passes at the buyer's location, the delivery may be treated as part of the sale. Check your state's rules on shipping and handling, and use a sales tax calculator once you know whether the freight line is taxable.",
      },
      {
        q: "Which FOB term is better for the seller?",
        a: "FOB shipping point is usually better for the seller: revenue is recognized earlier, risk of loss shifts sooner and the buyer handles freight. FOB destination is a selling point for buyers who want delivered pricing and no transit risk, so sellers often accept it for large customers and build the freight and insurance cost into the price.",
      },
    ],
    content: `<p><strong>Quick answer:</strong> Under FOB shipping point, ownership (title) and risk of loss pass to the buyer when the goods leave the seller, so the buyer usually pays freight and owns goods in transit. Under FOB destination, title and risk stay with the seller until the goods arrive at the buyer, so the seller usually pays freight and recognizes revenue on delivery.</p>

<p>FOB stands for "free on board". On a purchase order or invoice, the FOB term tells everyone three things: when the buyer becomes the owner, who bears the loss if the shipment is damaged, and (often) who pays the freight. It also affects when the seller can record revenue and which company counts the goods in inventory at year end. This guide compares FOB shipping point vs destination with examples, invoice wording and common mistakes.</p>

<h2>What does FOB shipping point mean?</h2>

<p>FOB shipping point (also called FOB origin) means the seller's responsibility ends when it hands the goods to the carrier at its own location. From that moment:</p>

<ul>
<li><strong>Title</strong> transfers to the buyer.</li>
<li><strong>Risk of loss</strong> transfers to the buyer, so if the truck crashes, the buyer owns damaged goods and files the claim with the carrier.</li>
<li><strong>Freight</strong> is typically the buyer's cost, either paid directly to the carrier (freight collect) or prepaid by the seller and added to the invoice.</li>
<li><strong>Revenue</strong> can usually be recognized by the seller at shipment.</li>
</ul>

<p>Shipping point terms are common when the buyer has negotiated freight rates of its own, for example a retailer with national LTL contracts, or when a buyer collects goods with its own trucks. The named place matters: "FOB Chicago" means the seller's Chicago facility if that is where the shipment begins. If goods ship from a third-party warehouse or drop-ship supplier, name that location so there is no doubt about where risk changes hands.</p>

<h2>What does FOB destination mean?</h2>

<p>FOB destination means the seller keeps responsibility until the goods reach the buyer's named location. Until delivery:</p>

<ul>
<li><strong>Title</strong> stays with the seller.</li>
<li><strong>Risk of loss</strong> stays with the seller, which files any carrier claim and replaces damaged goods.</li>
<li><strong>Freight</strong> is typically the seller's cost, often built into the price (freight prepaid).</li>
<li><strong>Revenue</strong> is usually recognized on delivery.</li>
</ul>

<h2>FOB shipping point vs destination: comparison table</h2>

<table>
<thead>
<tr><th>Item</th><th>FOB shipping point</th><th>FOB destination</th></tr>
</thead>
<tbody>
<tr><td>Title passes</td><td>At seller's dock, when carrier takes goods</td><td>At buyer's location, on delivery</td></tr>
<tr><td>Risk of loss in transit</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Who usually pays freight</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Who files a carrier claim</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Goods in transit are inventory of</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Seller recognizes revenue</td><td>Generally at shipment</td><td>Generally at delivery</td></tr>
<tr><td>Buyer records purchase and payable</td><td>At shipment</td><td>At delivery</td></tr>
<tr><td>Who favors it</td><td>Sellers</td><td>Buyers</td></tr>
</tbody>
</table>

<h2>How freight payment terms combine with FOB</h2>

<p>Title and freight are separate questions, so invoices and purchase orders often name both. The four common combinations are:</p>

<table>
<thead>
<tr><th>Term</th><th>Title and risk pass</th><th>Who pays carrier</th><th>Who bears freight cost</th></tr>
</thead>
<tbody>
<tr><td>FOB shipping point, freight collect</td><td>At origin</td><td>Buyer</td><td>Buyer</td></tr>
<tr><td>FOB shipping point, freight prepaid and add</td><td>At origin</td><td>Seller</td><td>Buyer (added to invoice)</td></tr>
<tr><td>FOB destination, freight prepaid</td><td>At destination</td><td>Seller</td><td>Seller</td></tr>
<tr><td>FOB destination, freight collect</td><td>At destination</td><td>Buyer</td><td>Buyer pays, seller still bears risk</td></tr>
</tbody>
</table>

<p>"Prepaid and add" is the one that shows up on your invoice as a separate freight line. If you pass through the carrier's charge, attach or reference the <a href="/blog/freight-invoice">freight invoice</a> so the buyer can see the cost.</p>

<h2>How does FOB affect revenue recognition?</h2>

<p>Under US GAAP (ASC 606) and IFRS 15, a seller recognizes revenue when it transfers <em>control</em> of goods to the customer. Indicators of control include legal title, physical possession, the risks and rewards of ownership, a present right to payment and customer acceptance. FOB terms point to when title and risk move, so in most cases:</p>

<ul>
<li>FOB shipping point supports recognizing revenue when the goods ship.</li>
<li>FOB destination supports recognizing revenue when the goods are delivered.</li>
</ul>

<p>There are exceptions. If a seller routinely replaces goods lost in transit under FOB shipping point terms, it may in substance still bear the risk, and its auditors may push recognition to delivery. Shipping and handling performed after control transfers can be treated as a fulfillment activity rather than a separate performance obligation, which is a policy election under ASC 606. See our guide to <a href="/blog/revenue-recognition-asc-606">revenue recognition under ASC 606</a> for the five steps.</p>

<p>For businesses using <a href="/blog/cash-vs-accrual-accounting">cash basis accounting</a>, revenue is recorded when payment arrives, so FOB matters less for the books but still decides who bears the loss.</p>

<h2>Worked example: a shipment that crosses year end</h2>

<p>Northline Supply sells $25,000 of shelving to a retailer. It ships on December 30, 2026, and the goods arrive January 3, 2027. Northline's fiscal year ends December 31. The shelving cost Northline $15,000 to make, and freight is $600.</p>

<h3>If the terms are FOB shipping point, freight prepaid and add</h3>

<ul>
<li>Northline records $25,000 revenue and $15,000 cost of goods sold in 2026.</li>
<li>The shelving is not in Northline's December 31 inventory. The retailer counts it as inventory in transit.</li>
<li>Northline invoices on December 30 for $25,600, including the $600 freight line.</li>
<li>If the truck is damaged on January 2, the retailer files the claim.</li>
</ul>

<h3>If the terms are FOB destination, freight prepaid</h3>

<ul>
<li>Northline records the $25,000 revenue and cost of goods sold in 2027, on delivery.</li>
<li>The shelving stays in Northline's December 31 inventory at $15,000.</li>
<li>Northline pays the $600 freight as a selling expense, and invoices $25,000 on January 3.</li>
<li>If the truck is damaged on January 2, Northline files the claim and ships replacements.</li>
</ul>

<p>The invoice for the FOB shipping point version might look like this:</p>

<table>
<thead>
<tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Steel shelving unit, 72 in., 5-shelf</td><td>100</td><td>$210.00</td><td>$21,000.00</td></tr>
<tr><td>Wall-mount bracket kit</td><td>200</td><td>$20.00</td><td>$4,000.00</td></tr>
<tr><td>Freight, LTL, prepaid and added (BOL 448812)</td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$25,600.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong> (FOB shipping point, Net 30 from ship date)</td><td><strong>$25,600.00</strong></td></tr>
</tbody>
</table>

<p>Sales tax is omitted because the retailer provided a <a href="/blog/resale-certificate">resale certificate</a>. If your sale is taxable, check whether freight is taxable in your state using our guide to <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>, and calculate it with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>What journal entries do the buyer and seller make?</h2>

<p>Using the FOB shipping point version of the Northline example (accrual basis, perpetual inventory), the entries on December 30, 2026 are:</p>

<table>
<thead>
<tr><th>Company</th><th>Account</th><th>Debit</th><th>Credit</th></tr>
</thead>
<tbody>
<tr><td>Seller</td><td>Accounts receivable</td><td>$25,600</td><td></td></tr>
<tr><td>Seller</td><td>Sales revenue</td><td></td><td>$25,000</td></tr>
<tr><td>Seller</td><td>Freight reimbursement (or freight-out offset)</td><td></td><td>$600</td></tr>
<tr><td>Seller</td><td>Cost of goods sold</td><td>$15,000</td><td></td></tr>
<tr><td>Seller</td><td>Inventory</td><td></td><td>$15,000</td></tr>
<tr><td>Buyer</td><td>Inventory (including freight-in)</td><td>$25,600</td><td></td></tr>
<tr><td>Buyer</td><td>Accounts payable</td><td></td><td>$25,600</td></tr>
</tbody>
</table>

<p>Under FOB destination, the same entries move to January 3, 2027, and the seller records its own $600 freight as freight-out (a selling expense) instead of billing it. Note that the buyer capitalizes freight-in as part of inventory cost, which then flows into its <a href="/blog/cost-of-goods-sold">cost of goods sold</a> when the shelving is sold.</p>

<h2>Which FOB term should a small seller offer?</h2>

<p>Many small manufacturers and wholesalers default to FOB shipping point because it shifts transit risk and freight cost to the buyer and lets them invoice on the ship date. That works well when buyers have their own freight accounts or prefer to choose the carrier.</p>

<p>FOB destination can win business, though. Large retailers and many consumers expect delivered pricing, and quoting "delivered" removes a reason for the buyer to shop around. If you offer FOB destination:</p>

<ul>
<li>Build freight and an allowance for damage into your price, or quote freight separately as a prepaid line.</li>
<li>Buy cargo insurance or check your carrier's liability limits, which for LTL freight are often based on weight and freight class rather than full value.</li>
<li>Pack well and photograph shipments, since damage claims are now yours to file.</li>
<li>Expect revenue and cash to arrive a few days later than with shipping point terms, and plan cash flow accordingly.</li>
</ul>

<p>Some sellers offer both: FOB shipping point as the standard, with a delivered price available on request. Whichever you choose, put it in your quote template and terms of sale so every order starts with the same assumption.</p>

<h2>FOB vs Incoterms: which should you use?</h2>

<p>Domestic FOB shipping point and FOB destination are US commercial terms rooted in the Uniform Commercial Code's shipment and destination contract rules (the UCC's specific F.O.B. sections were removed from many states' versions, but the concepts and trade usage remain). Internationally, use the ICC's Incoterms 2020 rules instead. The Incoterms <strong>FOB</strong> rule means the seller delivers goods loaded on board a vessel at a named port of shipment, and it applies only to sea and inland waterway transport. For containers and multimodal shipments, FCA (Free Carrier) is usually more appropriate. Our guide to <a href="/blog/incoterms-on-invoice">putting Incoterms on an invoice</a> explains how to write them, and the ICC publishes the rules at <a href="https://iccwbo.org/business-solutions/incoterms-rules/" rel="noopener" target="_blank">iccwbo.org</a>.</p>

<h2>How to put FOB terms on your invoice: step by step</h2>

<ol>
<li><strong>Agree the term in the quote or purchase order.</strong> State "FOB shipping point" or "FOB destination" plus the named location.</li>
<li><strong>State the freight term.</strong> Collect, prepaid, or prepaid and add.</li>
<li><strong>Match the invoice to the PO.</strong> Copy the FOB term exactly so the buyer's accounts payable team can match the PO, receiving report and invoice without a query.</li>
<li><strong>Reference the bill of lading.</strong> Add the BOL or tracking number so the ship date is provable.</li>
<li><strong>Date the invoice consistently.</strong> Ship date for FOB shipping point, delivery date (or ship date with terms from delivery) for FOB destination.</li>
<li><strong>Show freight separately</strong> when it is added to the invoice.</li>
<li><strong>Record revenue on the right date</strong> and include year-end shipments in your cutoff review.</li>
</ol>

<p>You can add the FOB and freight terms to the notes or terms field in our <a href="/invoice-generator">free invoice generator</a>, alongside your <a href="/blog/invoice-payment-terms">payment terms</a>.</p>

<h2>Common mistakes with FOB terms</h2>

<ul>
<li><strong>Leaving the term off.</strong> Without a stated term, disputes over who pays for damaged goods fall back on contract law and trade usage, which is slow and uncertain.</li>
<li><strong>Confusing freight payment with title.</strong> "Freight prepaid" says who pays the carrier, not when ownership passes.</li>
<li><strong>Using FOB for air or container freight internationally.</strong> Under Incoterms 2020 FOB is for sea cargo loaded on board a vessel; FCA fits containers and air.</li>
<li><strong>Recording revenue at shipment on FOB destination sales.</strong> This overstates revenue at period end and is a common audit adjustment.</li>
<li><strong>Double counting inventory in transit.</strong> Both companies sometimes count the same goods, or neither does. Agree the cutoff using the BOL date.</li>
<li><strong>Signing a clean delivery receipt for damaged goods.</strong> Note damage on the carrier's receipt, whichever side bears the risk.</li>
</ul>

<h2>Related documents</h2>

<p>FOB terms work alongside the rest of your shipping paperwork: the <a href="/blog/purchase-order-template">purchase order</a> where the term is agreed, the bill of lading that proves the ship date (see <a href="/blog/waybill-vs-bill-of-lading">waybill vs bill of lading</a>), the <a href="/blog/packing-list-template">packing list</a> and, for exports, the <a href="/blog/commercial-invoice-template">commercial invoice</a>.</p>

<h2>FOB shipping point vs destination: summary</h2>

<p>FOB shipping point vs destination decides when title and risk pass, who pays and claims for freight, and in which period the seller books revenue. Write the term and the freight arrangement on every quote, PO and invoice so nobody argues later. To create an invoice with FOB terms, a freight line and a BOL reference, try our <a href="/invoice-generator">free invoice generator</a>: no sign-up required, and it builds a PDF in your browser that you can download straight away.</p>`,
  },
];
