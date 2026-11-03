import type { PostDraft } from "../blog";

export const INTL_FREELANCERS_2026_POSTS: PostDraft[] = [
  {
    slug: "form-5472",
    title: "Form 5472: Filing Guide for Foreign-Owned US LLCs (2026)",
    description:
      "Form 5472 for foreign-owned single-member US LLCs: who files, the pro forma 1120, what counts as a reportable transaction, deadlines and the $25,000 penalty.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-file-taxes-as-an-llc", "how-to-get-an-ein", "wyoming-vs-delaware-llc"],
    faqs: [
      {
        q: "Do I need to file Form 5472 if my LLC had no income?",
        a: "Usually yes. The filing is triggered by reportable transactions with related parties, not by profit. Paying the formation fee, the registered agent or the state annual tax with your own money, or putting money into the LLC bank account, counts as a transaction between the LLC and its foreign owner. Almost every foreign-owned single-member LLC has at least one of these in its first year, so the safe assumption is that you file every year the LLC exists.",
      },
      {
        q: "Can I e-file Form 5472 for a foreign-owned disregarded entity?",
        a: "No. The IRS instructions say a foreign-owned US disregarded entity cannot file Form 5472 electronically. You send the pro forma Form 1120 with Form 5472 attached by fax or by mail to the dedicated address in the instructions, with \"Foreign-owned U.S. DE\" written across the top of the Form 1120. Keep the fax confirmation or a tracked mailing receipt as proof of timely filing.",
      },
      {
        q: "What is the penalty for not filing Form 5472?",
        a: "The base penalty is $25,000 for each failure to file on time or to keep the required records. If the failure continues more than 90 days after the IRS notifies you, another $25,000 can be charged for each 30-day period, or part of one, that it continues. A substantially incomplete form is treated as not filed, so a rushed or blank form does not protect you.",
      },
      {
        q: "Does a foreign-owned LLC need an ITIN to file Form 5472?",
        a: "Not necessarily. The LLC needs its own EIN. For the foreign owner, Part II asks for a US identifying number such as an SSN or ITIN if one exists; if not, the instructions allow a reference ID number instead, and you also enter the owner's foreign tax identification number or \"None\" if there is none. Owners who need an ITIN for another reason can follow our ITIN application guide.",
      },
      {
        q: "What is the deadline for Form 5472?",
        a: "Form 5472 is due with the pro forma Form 1120, which for a calendar-year LLC is the 15th day of the fourth month after year end, so April 15. You can extend by filing Form 7004 by the original due date, sent to the same dedicated fax number or address used for the 5472 package. An extension gives more time to file, and there is normally no tax to pay with this return.",
      },
      {
        q: "Does a multi-member LLC owned by foreigners file Form 5472?",
        a: "Not in the same way. A multi-member LLC is taxed as a partnership by default and files Form 1065 with Schedules K-1, not a pro forma 1120. Partnerships with foreign partners have their own reporting and possible withholding rules. Form 5472 applies to US corporations that are at least 25% foreign-owned and to single-member LLCs wholly owned by a foreign person, so check which category your entity falls into.",
      },
    ],
    content: `
<p>Form 5472 is the information return a foreign-owned single-member US LLC must file every year to report money and other transactions between the LLC and its foreign owner or other related parties. Because the LLC is a disregarded entity, it attaches the 5472 to a mostly blank "pro forma" Form 1120 and faxes or mails the package to a special IRS unit. There is usually no tax due, but the penalty for missing it starts at $25,000, which makes it the most important deadline for non-resident LLC owners.</p>

<p>This guide is for freelancers, agencies and online sellers outside the US who formed a Delaware, Wyoming or other state LLC to invoice US clients or use US payment platforms. It explains who files, what counts as a reportable transaction, how to fill in the form, a worked example with numbers, and the mistakes that cause penalty notices. It is general information, not tax or legal advice; a US tax professional who works with foreign owners can confirm how the rules apply to you.</p>

<h2>Who must file Form 5472?</h2>
<p>Form 5472 has two groups of filers:</p>
<ul>
<li><strong>US corporations that are 25% foreign-owned.</strong> A foreign person owning at least 25% of the voting power or value, directly or through attribution rules, makes the company a "reporting corporation".</li>
<li><strong>Foreign-owned US disregarded entities.</strong> A domestic LLC with a single owner who is a foreign person, which the IRS treats as a corporation for Form 5472 purposes only. This is the group most freelancers fall into.</li>
</ul>
<p>The disregarded-entity rule has existed since the 2017 tax year. Before that, a foreign-owned single-member LLC with no US business often had no federal filing at all. The change was aimed at transparency, so the IRS now gets a yearly snapshot of who owns the LLC and how money moved between the LLC and its owner. If you are still deciding on a structure, our guide to <a href="/blog/us-llc-for-non-residents">forming a US LLC as a non-resident</a> explains the options before you get to this filing.</p>
<p>Some exceptions that apply to corporations, such as related parties filing Form 5471, do not apply to foreign-owned disregarded entities, according to the <a href="https://www.irs.gov/instructions/i5472" target="_blank" rel="noopener noreferrer">IRS Instructions for Form 5472</a>.</p>

<h2>What counts as a reportable transaction?</h2>
<p>For a foreign-owned disregarded entity, a reportable transaction is almost any movement of money or property between the LLC and a related party, including the owner. Common examples:</p>
<table><thead><tr><th>Transaction</th><th>Reportable?</th><th>Where it usually goes</th></tr></thead><tbody>
<tr><td>Owner pays formation fees, registered agent or state tax for the LLC</td><td>Yes</td><td>Part IV or Part V, plus statement</td></tr>
<tr><td>Owner transfers money into the LLC bank account</td><td>Yes (contribution)</td><td>Part V, with a statement</td></tr>
<tr><td>LLC transfers profits to the owner's personal account</td><td>Yes (distribution)</td><td>Part V, with a statement</td></tr>
<tr><td>LLC pays the owner's other company for services</td><td>Yes</td><td>Part IV</td></tr>
<tr><td>LLC lends money to the owner, or borrows from them</td><td>Yes</td><td>Part IV (amounts borrowed or loaned)</td></tr>
<tr><td>Payments from unrelated US clients for your invoices</td><td>No (not related-party)</td><td>Not on Form 5472</td></tr>
<tr><td>Fees to Stripe, Wise or a bank</td><td>No (unrelated)</td><td>Not on Form 5472</td></tr>
</tbody></table>
<p>The instructions specifically say foreign-owned disregarded entities check the Part V box for transactions such as those tied to formation, dissolution, acquisition, disposition, contributions and distributions, and describe them on an attached statement. Client revenue is not reported on the 5472 itself, but it still matters: your records of invoices and payments are what make the rest of the return defensible.</p>

<h2>How to file Form 5472 step by step</h2>
<ol>
<li><strong>Get an EIN for the LLC.</strong> You cannot file without one. Non-residents usually apply by phone or fax using Form SS-4; see <a href="/blog/how-to-get-an-ein">how to get an EIN</a> for the general process.</li>
<li><strong>Collect the year's numbers.</strong> Pull the LLC bank and payment-platform statements and list every transfer to or from you personally or your other companies.</li>
<li><strong>Prepare the pro forma Form 1120.</strong> Only the name, address and items B and E on page 1 are required. Write "Foreign-owned U.S. DE" across the top.</li>
<li><strong>Complete Form 5472.</strong> Part I covers the LLC (name, EIN, total assets, country of organization). Part II identifies the 25% foreign owner, including their foreign tax ID or "None". Part III covers related parties. Part IV lists monetary amounts, Part V flags disregarded-entity transactions, and Part VI covers non-monetary or less-than-full-value transactions.</li>
<li><strong>Attach a statement</strong> describing Part V transactions in plain language, for example "Owner contributed $1,850 to cover formation and registered agent fees".</li>
<li><strong>Fax or mail the package</strong> to the dedicated IRS address or fax number in the instructions, not the normal Form 1120 address. The IRS listed fax 855-887-7737 and a mailing address in Ogden, Utah at the time of writing; check the current instructions before sending.</li>
<li><strong>Keep proof</strong> of the fax transmission or tracked mail, plus the records behind every number, permanently.</li>
</ol>

<h2>Form 5472 due date and extensions</h2>
<p>The package is due when the pro forma Form 1120 is due. For a calendar-year LLC that is April 15 of the following year, so the 2026 return is due April 15, 2027. If you need more time, file Form 7004 by that date, sent to the same dedicated fax or address, which extends the deadline by six months. An extension of time to file is easy to get and costs nothing, so there is no reason to miss the deadline because the bookkeeping is late.</p>
<p>Note that the foreign owner may have separate US filings. If the LLC is engaged in a US trade or business, for example because work is performed in the US, the owner may need to file Form 1040-NR and pay tax. Our guide on <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes for an LLC</a> covers the different LLC tax treatments.</p>

<h2>Worked example: a design studio owner in Pakistan</h2>
<p>Ayesha lives in Lahore and owns 100% of a Wyoming LLC that invoices US agencies for branding work. The numbers below are illustrative for the 2026 calendar year.</p>
<table><thead><tr><th>Item</th><th>Amount</th><th>Reportable on 5472?</th></tr></thead><tbody>
<tr><td>Client payments received for 14 invoices</td><td>$48,600</td><td>No (unrelated clients)</td></tr>
<tr><td>Stripe and bank fees</td><td>$1,410</td><td>No</td></tr>
<tr><td>Ayesha paid the Wyoming annual report and registered agent from her personal card</td><td>$185</td><td>Yes</td></tr>
<tr><td>Initial transfer from Ayesha to the LLC account</td><td>$500</td><td>Yes (contribution)</td></tr>
<tr><td>Transfers from the LLC to Ayesha's account in Pakistan</td><td>$41,000</td><td>Yes (distributions)</td></tr>
<tr><td>Total assets at year end (cash in LLC account)</td><td>$6,875</td><td>Part I, line 1d</td></tr>
</tbody></table>
<p>Her 5472 reports the $685 she put in and the $41,000 she took out, with a short statement. Her client revenue does not appear on the form, but it is the reason the LLC has money to distribute, and the invoices issued from her LLC name support the whole picture. Because Ayesha performs all services from Pakistan and the LLC has no US office or employees, her adviser concludes there is likely no US income tax, though she reports the income in Pakistan. Her return is due April 15, 2027.</p>

<h2>Common Form 5472 mistakes</h2>
<ul>
<li><strong>Assuming no income means no filing.</strong> A single transfer from the owner triggers the requirement.</li>
<li><strong>E-filing or mailing to the wrong address.</strong> The disregarded-entity package goes to a dedicated unit; sending it to the normal Form 1120 address can mean it is never matched.</li>
<li><strong>Leaving Part II incomplete.</strong> The foreign owner's country, foreign tax ID (or "None") and other details are required. A substantially incomplete form is treated as not filed.</li>
<li><strong>Mixing personal and LLC money.</strong> Paying personal expenses from the LLC account creates more related-party transactions and muddles your records. A dedicated account, as covered in our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>, makes the 5472 a short job.</li>
<li><strong>Forgetting state obligations.</strong> Form 5472 is federal. The state still wants its annual report or tax: Delaware LLCs pay a flat $400 by June 1, and our <a href="/blog/wyoming-vs-delaware-llc">Wyoming vs Delaware LLC</a> comparison covers both states.</li>
<li><strong>Using a "US LLC" invoice without US details.</strong> Your invoices should show the LLC's legal name and address, and you may need the LLC's EIN on a W-9 or W-8 form depending on the client; see <a href="/blog/w-8ben-e">W-8BEN-E for foreign companies</a> and <a href="/blog/ein-vs-ssn">EIN vs SSN on invoices</a>.</li>
</ul>

<h2>What to do if you missed Form 5472</h2>
<p>If you discover that earlier years were never filed, do not simply start filing from the current year and hope. Talk to a US tax professional about filing the missed years with a reasonable-cause statement, or whether a formal relief procedure fits. The IRS can assess penalties for late filings, but voluntarily filed late returns with a clear explanation (for example, that you were a first-time foreign owner relying on a formation service that never mentioned the requirement) are in a much better position than returns filed after an IRS letter. Keep copies of everything you send.</p>

<h2>Records to keep</h2>
<p>The regulations require permanent books and records that support the return, including related-party transactions. In practice that means:</p>
<ul>
<li>Bank and payment-platform statements for every LLC account.</li>
<li>Copies of every invoice the LLC issued and every bill it paid.</li>
<li>A simple ledger of owner contributions and distributions.</li>
<li>Formation documents, the EIN letter and your <a href="/blog/llc-operating-agreement">LLC operating agreement</a>.</li>
</ul>
<p>Consistent invoicing makes this easy. When every client payment matches a numbered invoice, the year-end exercise is just separating owner transfers from client receipts. You can number invoices with our <a href="/tools/invoice-number-generator">invoice number generator</a> and keep a clean series from the LLC's first sale.</p>

<p>Form 5472 rewards simple habits: one LLC bank account, a clear record of what you put in and took out, and invoices issued in the LLC's name. Create those invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download each one as a PDF for your records.</p>
`,
  },
  {
    slug: "us-llc-for-non-residents",
    title: "US LLC for Non-Residents: How to Form One From Abroad",
    description:
      "How non-residents form a US LLC from abroad in 2026: choosing a state, registered agent, EIN without an SSN, banking, taxes, Form 5472 and yearly costs.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-start-an-llc", "wyoming-vs-delaware-llc", "registered-agent"],
    faqs: [
      {
        q: "Can a non-resident own a US LLC?",
        a: "Yes. No US citizenship, residency or visa is needed to form or own an LLC in any state. You need a registered agent with a physical address in the state of formation, and the LLC needs an EIN to open accounts and deal with the IRS. Owning an LLC does not give you the right to live or work in the US; immigration status is a separate matter entirely.",
      },
      {
        q: "Does a non-resident pay US tax on LLC income?",
        a: "It depends on where the work happens and how the LLC is classified. A single-member LLC owned by a non-resident is disregarded for income tax, so the owner is taxed only if the income is effectively connected with a US trade or business, for example because services are performed in the US or there is a US office or staff. Services performed entirely abroad often produce no US income tax, but the Form 5472 filing still applies.",
      },
      {
        q: "Which state is best for a non-resident LLC?",
        a: "For freelancers and small online businesses, Wyoming and New Mexico are popular for low annual costs, and Delaware is popular with startups and investors but charges a flat $400 annual LLC tax. If you will have a physical presence in a particular state, such as a warehouse or an employee, you will usually need to register there anyway, so forming elsewhere can mean paying two states.",
      },
      {
        q: "Can I get an EIN without an SSN or ITIN?",
        a: "Yes. The IRS allows international applicants to apply for an EIN by phone on 267-941-1099 (not toll-free, 6 a.m. to 11 p.m. Eastern, Monday to Friday), by fax or by mail using Form SS-4. Where the form asks for the responsible party's SSN or ITIN, the SS-4 instructions say to enter \"foreign\" or N/A if you do not have one and are not eligible.",
      },
      {
        q: "Do I need to file BOI reports for my US LLC?",
        a: "Under FinCEN's current rules, LLCs formed in the US are exempt from beneficial ownership information reporting. The requirement now applies only to certain entities formed under foreign law that register to do business in a US state. Rules have changed several times since 2024, so check FinCEN's website before relying on this, and see our BOI reporting guide for the history.",
      },
      {
        q: "Will a US LLC help me get paid by Stripe or PayPal?",
        a: "Often, yes. Many founders form a US LLC so they can open a Stripe account, US bank account or US marketplace seller account that is not available in their home country. Approval is still at the platform's discretion and depends on your business type, documents and risk review. Read the platform's current terms, and avoid describing your business inaccurately to get approved.",
      },
    ],
    content: `
<p>A non-resident can form a US LLC entirely online, from anywhere, without visiting the US or holding a visa. You choose a state, hire a registered agent there, file the articles of organization, get an EIN from the IRS without an SSN, and then open banking and payment accounts. The harder part is what comes after: yearly state fees, the Form 5472 filing, and paying tax correctly at home.</p>

<p>This guide walks through the full process for freelancers, agencies and online sellers based outside the US who want a US LLC for invoicing American clients or using US payment platforms. It covers the step-by-step setup, realistic yearly costs, how taxes work for a foreign-owned LLC, and the mistakes that cause trouble later. It is general information, not tax or legal advice, so check your specific case with a US tax adviser and an adviser in your country of residence.</p>

<h2>Why non-residents form a US LLC</h2>
<ul>
<li><strong>Payment access.</strong> Some payment processors, marketplaces and banks are only available to US entities.</li>
<li><strong>Client trust.</strong> US companies sometimes prefer invoices from a US entity, paid by ACH to a US account.</li>
<li><strong>Liability separation.</strong> The LLC, not you personally, signs contracts and owes its debts, provided you keep it properly separate.</li>
<li><strong>Simple structure.</strong> A single-member LLC needs no board, shareholders or annual meetings.</li>
</ul>
<p>It is not a tax shortcut. Most countries tax their residents on worldwide income, so profits from your LLC are usually still taxable at home. Some countries also have controlled foreign company or management-and-control rules that can treat the LLC as resident where you live. Talk to a local adviser before forming one.</p>

<h2>How to form a US LLC as a non-resident: step by step</h2>
<ol>
<li><strong>Choose the state.</strong> Without a US presence, most freelancers pick Wyoming, New Mexico or Delaware. Our <a href="/blog/wyoming-vs-delaware-llc">Wyoming vs Delaware LLC comparison</a> sets out filing fees and annual costs side by side.</li>
<li><strong>Pick a name.</strong> Check availability on the state business search and include "LLC" or a permitted variant.</li>
<li><strong>Hire a registered agent.</strong> Every state requires one with a physical address in that state to receive legal papers. As a non-resident you cannot be your own; see our guide to <a href="/blog/registered-agent">registered agents</a>.</li>
<li><strong>File the articles of organization</strong> (Delaware calls it a certificate of formation) online with the Secretary of State and pay the filing fee.</li>
<li><strong>Sign an operating agreement.</strong> Even a single-member LLC benefits from one, and banks often ask for it. Our <a href="/blog/llc-operating-agreement">LLC operating agreement guide</a> covers what to include.</li>
<li><strong>Get an EIN</strong> from the IRS using Form SS-4 (details below).</li>
<li><strong>Open a US business account</strong> with a bank or fintech that accepts non-resident owners.</li>
<li><strong>Set up payments and invoicing</strong> in the LLC's legal name.</li>
<li><strong>Diary your compliance dates:</strong> state annual report or tax, registered agent renewal and the federal Form 5472 package.</li>
</ol>
<p>You can do steps 1 to 6 yourself or pay a formation service. Services such as Stripe Atlas bundle state filing, registered agent and EIN for a set fee.</p>

<h2>Getting an EIN without an SSN</h2>
<p>The online EIN application is not available to applicants without a US address and SSN or ITIN, so non-residents use one of three routes listed in the <a href="https://www.irs.gov/instructions/iss4" target="_blank" rel="noopener noreferrer">IRS Instructions for Form SS-4</a>:</p>
<table><thead><tr><th>Method</th><th>Details</th><th>Typical speed</th></tr></thead><tbody>
<tr><td>Phone</td><td>267-941-1099 (not toll-free), 6 a.m. to 11 p.m. Eastern, Monday to Friday, for applicants with no US legal residence or principal place of business</td><td>EIN often issued during the call</td></tr>
<tr><td>Fax</td><td>Dedicated international fax numbers listed in the instructions</td><td>About a week or two, depending on backlog</td></tr>
<tr><td>Mail</td><td>Internal Revenue Service, Attn: EIN International Operation, Cincinnati, OH 45999</td><td>Several weeks</td></tr>
</tbody></table>
<p>On line 7b, where the form asks for the responsible party's SSN or ITIN, enter "foreign" or N/A if you have neither and are not eligible for one. The IRS limits EIN issuance to one per responsible party per day. You do not need an ITIN to get an EIN; you may need one later if you have to file a personal US return, as explained in our <a href="/blog/itin-application">ITIN application guide</a>.</p>

<h2>Yearly costs of a non-resident LLC</h2>
<table><thead><tr><th>Cost</th><th>Wyoming</th><th>Delaware</th></tr></thead><tbody>
<tr><td>Formation filing fee</td><td>$100</td><td>$110</td></tr>
<tr><td>Annual state fee or tax</td><td>Annual report license tax, minimum $60</td><td>Flat $400 LLC tax, due June 1</td></tr>
<tr><td>Registered agent</td><td>Commonly $25 to $150 a year</td><td>Commonly $50 to $300 a year</td></tr>
<tr><td>Federal filing (5472 + pro forma 1120)</td><td>DIY or paid preparer</td><td>DIY or paid preparer</td></tr>
<tr><td>Bank or fintech account</td><td>Often free for basic plans</td><td>Often free for basic plans</td></tr>
</tbody></table>
<p>State fees change, so confirm them on the state website before you file. Delaware's LLC tax has a $200 late penalty plus interest, which is a common surprise for first-year owners.</p>

<h2>How a foreign-owned US LLC is taxed</h2>
<p>A single-member LLC owned by a non-resident is a disregarded entity by default. The IRS looks through it to the owner, and two questions decide whether there is US income tax:</p>
<ol>
<li><strong>Is the income effectively connected with a US trade or business?</strong> If you perform services from your home country, have no US office, staff or dependent agent, and sell to US clients remotely, the income is generally foreign-source and not effectively connected. Work performed physically in the US, a US warehouse or US employees change the analysis.</li>
<li><strong>Does a tax treaty apply?</strong> If your country has a treaty with the US, business profits are often taxable in the US only if there is a permanent establishment there.</li>
</ol>
<p>Even if no tax is due, the LLC must file <a href="/blog/form-5472">Form 5472 with a pro forma Form 1120</a> every year it has transactions with you, which almost every LLC does. The penalty for missing it is $25,000. A multi-member LLC is a partnership by default and files Form 1065 instead, with its own rules for foreign partners. If you want the LLC taxed as a corporation, Form 8832 is the election.</p>
<p>US clients may ask your LLC for a tax form. A foreign-owned disregarded LLC generally gives the payer a W-8BEN for the individual owner, because the owner is the beneficial owner for tax purposes; see our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide for freelancers</a>. If you set up a foreign company that owns the LLC, the company provides a W-8BEN-E instead.</p>
<p>Beneficial ownership reporting to FinCEN no longer applies to US-formed LLCs under the current rules; our <a href="/blog/boi-reporting-2026">BOI reporting guide</a> explains what changed.</p>

<h2>Worked example: first-year budget</h2>
<p>Marco, a software consultant in Lisbon, forms a Wyoming LLC in February 2026 to bill a US client $9,500 a month. These figures are illustrative.</p>
<table><thead><tr><th>Item</th><th>Cost</th></tr></thead><tbody>
<tr><td>Wyoming filing fee</td><td>$100</td></tr>
<tr><td>Registered agent, first year</td><td>$60</td></tr>
<tr><td>EIN (applied by phone)</td><td>$0</td></tr>
<tr><td>Fintech business account</td><td>$0</td></tr>
<tr><td>Preparer for Form 5472 package (April 2027)</td><td>$350</td></tr>
<tr><td>Wyoming annual report, February 2027</td><td>$60</td></tr>
<tr><td><strong>Total, first 13 months</strong></td><td><strong>$570</strong></td></tr>
</tbody></table>
<p>Marco's client pays the LLC by ACH, saving the international wire fees he paid before. He works only from Portugal, so his adviser expects no US income tax, but the profits are taxable in Portugal and he reports them there. He moves profits to his personal account monthly, and each transfer is logged for the 5472.</p>

<h2>Common mistakes non-residents make</h2>
<ul>
<li><strong>Thinking "no US tax" means "no US filings".</strong> Form 5472 and the state report are still required.</li>
<li><strong>Ignoring home-country tax.</strong> A US LLC does not stop your country from taxing your income.</li>
<li><strong>Using a US address you do not have.</strong> Use the registered agent or a genuine mail service, and be truthful with banks and platforms.</li>
<li><strong>Mixing accounts.</strong> Personal spending from the LLC account weakens liability protection and complicates the 5472.</li>
<li><strong>Invoicing in your personal name.</strong> Invoices should come from the LLC, with its legal name, address and EIN where a client needs it.</li>
</ul>

<h2>Opening a US bank account as a non-resident</h2>
<p>Banking is where many non-resident LLC owners get stuck. Traditional banks often ask you to visit a branch in person, while several fintech platforms accept non-resident owners fully online, subject to their own risk checks and supported-country lists. Have these ready before you apply:</p>
<ul>
<li>The filed articles of organization and the state's acknowledgment.</li>
<li>The IRS EIN confirmation letter (CP 575) or EIN verification letter.</li>
<li>Your passport and proof of your home address.</li>
<li>Your operating agreement showing you as the sole member.</li>
<li>A website or short description of what the business sells and who its customers are.</li>
</ul>
<p>Be specific and consistent about the business activity across the bank, payment processor and your invoices. Mismatched descriptions are a common reason applications are paused for review. Once open, compare receiving and conversion costs with <a href="/blog/wise-business-fees">Wise Business fees</a> and similar services, because moving profits from a US account to your home currency is a recurring cost.</p>

<h2>What to do if your plans change</h2>
<ul>
<li><strong>You move to the US.</strong> As a US tax resident, your LLC income becomes taxable in the US on Schedule C, and Form 5472 no longer applies once you are not a foreign person.</li>
<li><strong>You add a partner.</strong> The LLC becomes a partnership for tax purposes, with a Form 1065 filing and possible withholding on foreign partners' shares of effectively connected income.</li>
<li><strong>You stop trading.</strong> Do not just abandon the LLC; unpaid state fees and missed 5472 filings keep accruing. Follow the formal steps in <a href="/blog/how-to-dissolve-an-llc">how to dissolve an LLC</a>, including a final federal filing.</li>
</ul>

<h2>Invoicing US clients from your LLC</h2>
<p>Each invoice should show the LLC's legal name, its US address (often the registered agent or a mail service if the agent permits), the client's details, a unique invoice number, dates, line items in USD and payment instructions for the LLC account. For billing currency and cross-border payment tips, see <a href="/blog/invoice-international-clients">how to invoice international clients</a>.</p>

<p>Once the LLC is set up, consistent invoicing does most of the work of keeping it compliant. Create invoices in your LLC's name with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, add your logo and payment details, and download each one as a PDF.</p>
`,
  },
  {
    slug: "itin-application",
    title: "ITIN Application (Form W-7): Step-by-Step Guide for 2026",
    description:
      "ITIN application guide for 2026: who needs one, how to fill out Form W-7, the passport rule, applying by mail, CAA or TAC, processing times and renewals.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["ein-vs-ssn", "w-8ben-form-freelancers", "how-to-get-an-ein"],
    faqs: [
      {
        q: "How long does an ITIN application take?",
        a: "The IRS says to allow 7 weeks to receive notice of your ITIN status. If you apply during tax season, which it defines as January 15 to April 30, or you apply from overseas, it can take 9 to 11 weeks. Applying through a Certifying Acceptance Agent does not change the IRS processing time, but it lets you keep your original passport rather than mailing it.",
      },
      {
        q: "Can I get an ITIN just to open a bank account?",
        a: "Generally no. An ITIN is issued only for federal tax purposes, which usually means you are filing a US tax return or meet one of the exceptions in the Form W-7 instructions, such as certain treaty claims or third-party withholding situations. Some banks accept an ITIN as identification, but wanting a bank account is not itself a reason the IRS accepts on Form W-7.",
      },
      {
        q: "Does it cost money to apply for an ITIN?",
        a: "The IRS charges nothing for an ITIN. Applying by mail or at an IRS Taxpayer Assistance Center is free, and some VITA sites help for free. Certifying Acceptance Agents and Acceptance Agents charge their own fees, which vary widely. Be wary of services that charge a high price but only mail your forms; that is something you can do yourself.",
      },
      {
        q: "Do I need to send my original passport?",
        a: "If you apply by mail, you must send original documents or copies certified by the issuing agency; ordinary notarized photocopies are not accepted. A passport is the only document that can stand alone to prove both identity and foreign status. To avoid mailing your passport, apply through a Certifying Acceptance Agent or an IRS Taxpayer Assistance Center, which can authenticate it and return it to you.",
      },
      {
        q: "When does an ITIN expire?",
        a: "An ITIN expires if it is not used on a US federal tax return at least once in three consecutive tax years. It expires on December 31 of the third year. ITINs issued before 2013 that were never renewed have also expired. To renew, you file a new Form W-7, check the renewal box and include your prior ITIN, usually with a tax return.",
      },
      {
        q: "Is an ITIN the same as an EIN?",
        a: "No. An ITIN identifies an individual who needs a US taxpayer number but cannot get a Social Security number. An EIN identifies a business entity, such as an LLC or corporation, and some sole proprietors. A non-resident who owns a US LLC usually needs an EIN for the LLC and may or may not need a personal ITIN, depending on their own US filing obligations.",
      },
    ],
    content: `
<p>An ITIN application is made on IRS Form W-7, normally attached to a US federal tax return, together with original or certified identity documents. You can mail the package to the IRS in Austin, Texas, or apply in person through a Certifying Acceptance Agent or an IRS Taxpayer Assistance Center so you do not have to post your passport. Expect about 7 weeks, or 9 to 11 weeks in tax season or from abroad.</p>

<p>Freelancers and small business owners outside the US usually meet the ITIN when they own a US LLC, get paid by US platforms, file a US return or claim a tax treaty benefit. This guide explains who needs one, how to fill out Form W-7 line by line, the document rules that trip people up, and a worked example. It is general information, not tax advice; a US tax professional can check your situation.</p>

<h2>What is an ITIN and who needs one?</h2>
<p>An Individual Taxpayer Identification Number is a nine-digit number starting with 9 that the IRS issues to individuals who must have a US taxpayer number but are not eligible for a Social Security number. It is for tax reporting only. It does not give work authorization, immigration status or eligibility for Social Security benefits.</p>
<p>Common reasons a freelancer or business owner needs one:</p>
<ul>
<li>You are a non-resident who must file a US return, such as Form 1040-NR, for example because you earned income connected with a US business or performed services while in the US.</li>
<li>You are a partner in a US partnership (including a multi-member LLC) that must report your share of income.</li>
<li>You claim a reduced treaty rate on certain US income and the payer or the IRS needs a US number.</li>
<li>You are the spouse or dependent of a US citizen or resident on a joint return, in limited cases.</li>
</ul>
<p>Many non-residents do not need one. If you only sell services to US clients from abroad, you generally give your client a <a href="/blog/w-8ben-form-freelancers">Form W-8BEN</a>, and the treaty section of that form often does not require a US number for services income. A non-resident who owns a single-member US LLC needs an EIN for the LLC, which can be obtained without an ITIN; see <a href="/blog/us-llc-for-non-residents">US LLC for non-residents</a>. And <a href="/blog/form-5472">Form 5472</a> allows a reference ID number for a foreign owner with no US number.</p>

<h2>ITIN vs SSN vs EIN</h2>
<table><thead><tr><th>Number</th><th>Who gets it</th><th>Issued by</th><th>Typical use for a freelancer</th></tr></thead><tbody>
<tr><td>SSN</td><td>US citizens and people authorized to work in the US</td><td>Social Security Administration</td><td>Personal tax, W-9, payroll</td></tr>
<tr><td>ITIN</td><td>Individuals with a US tax obligation who cannot get an SSN</td><td>IRS</td><td>Personal US return, treaty claims</td></tr>
<tr><td>EIN</td><td>Businesses, including LLCs owned by non-residents</td><td>IRS</td><td>Business accounts, W-9 or W-8 for the entity, invoices</td></tr>
</tbody></table>
<p>For how these numbers appear on invoices and tax forms, see <a href="/blog/ein-vs-ssn">EIN vs SSN</a> and <a href="/blog/tax-id-on-invoice">tax ID on invoices</a>.</p>

<h2>How to fill out Form W-7</h2>
<ol>
<li><strong>Application type.</strong> Check "Apply for a new ITIN" or "Renew an existing ITIN".</li>
<li><strong>Reason for applying.</strong> Check one box. Most non-resident business owners use the box for a nonresident alien filing a US federal tax return. Treaty claimants and some others use specific boxes and must add the treaty country and article where asked. If you claim an exception to attaching a return, enter the exception and attach the supporting evidence the instructions list.</li>
<li><strong>Line 1: name.</strong> Your legal name exactly as on your passport, plus your name at birth if different.</li>
<li><strong>Line 2: mailing address.</strong> Where the IRS will send your ITIN letter. A foreign address is fine.</li>
<li><strong>Line 3: foreign address.</strong> Your permanent address in your country of residence. Do not use a PO box or a care-of address here.</li>
<li><strong>Line 4: birth details.</strong> Date, country and city of birth.</li>
<li><strong>Line 5: gender.</strong></li>
<li><strong>Line 6: other information.</strong> Citizenship, foreign tax ID number, US visa details if any, the identity document you are submitting (type, issuer, number, expiry), date of entry to the US if applicable, and any prior IRS numbers.</li>
<li><strong>Signature.</strong> Sign and date. If someone signs for you, the instructions explain when a delegate can sign.</li>
</ol>
<p>The current form and its instructions are on the IRS page <a href="https://www.irs.gov/individuals/how-do-i-apply-for-an-itin" target="_blank" rel="noopener noreferrer">How do I apply for an ITIN?</a>. Use the latest revision; the IRS rejects outdated versions.</p>

<h2>ITIN supporting documents: the passport rule</h2>
<p>The IRS accepts 13 types of supporting documents. A current passport is the only one that proves both identity and foreign status on its own. Without a passport, you need at least two documents from the list, such as a national ID card with photo and a foreign driver's license, and at least one must have a photo.</p>
<ul>
<li><strong>Originals or certified copies only.</strong> A certified copy must be certified by the agency that issued the document. A notary's stamp on a photocopy is not enough.</li>
<li><strong>Documents must be current.</strong> An expired passport is not accepted.</li>
<li><strong>Visa pages.</strong> If a visa is needed for your reason for applying, the certified passport copy must include the visa pages.</li>
<li><strong>Returns.</strong> The IRS returns original documents by mail, but that can take weeks after your ITIN letter.</li>
</ul>

<h2>Where and how to apply</h2>
<table><thead><tr><th>Route</th><th>Cost</th><th>Passport stays with you?</th><th>Best for</th></tr></thead><tbody>
<tr><td>Mail to IRS ITIN Operation, Austin, TX</td><td>Free</td><td>No, unless you get a certified copy from the issuing agency</td><td>People comfortable mailing originals</td></tr>
<tr><td>Certifying Acceptance Agent (CAA), in the US or abroad</td><td>Agent's fee</td><td>Yes, for passports and most documents</td><td>Most non-residents abroad</td></tr>
<tr><td>Acceptance Agent</td><td>Agent's fee</td><td>No; reviews and mails but cannot authenticate</td><td>Rarely the best choice</td></tr>
<tr><td>IRS Taxpayer Assistance Center (US)</td><td>Free, by appointment</td><td>Yes, for most documents</td><td>People physically in the US</td></tr>
<tr><td>VITA site with ITIN services (US)</td><td>Free</td><td>Depends on the site</td><td>Lower-income filers in the US</td></tr>
</tbody></table>
<p>The IRS mailing address for US Postal Service is Internal Revenue Service, Austin Service Center, ITIN Operation, P.O. Box 149342, Austin, TX 78714-9342. A private courier uses a different street address listed on the same IRS page.</p>

<h2>Worked example: a freelance developer with US-source income</h2>
<p>Daniel, a Canadian-resident developer, spent six weeks working on site for a client in Austin in 2026 and was paid $14,800 for that work. Because he performed services in the US, he has a US filing requirement for that income, and he has no SSN. These facts are illustrative.</p>
<ol>
<li>He prepares his 2026 Form 1040-NR, leaving the SSN box blank, and claims any treaty position his adviser recommends.</li>
<li>He completes Form W-7, checking the reason for a nonresident alien filing a US return.</li>
<li>He books a Certifying Acceptance Agent in Toronto for C$180 so his passport is checked and returned on the spot.</li>
<li>The CAA sends the W-7, a certificate of accuracy and the return to the IRS in February 2027.</li>
<li>Applied in tax season, Daniel plans for 9 to 11 weeks. The return is processed once the ITIN is assigned.</li>
</ol>
<p>Before the trip, Daniel had invoiced the client separately for remote work and for on-site days. That split, visible on each invoice, is what let his adviser identify the US-source portion quickly. Our <a href="/blog/invoice-international-clients">international invoicing guide</a> covers how to lay out such invoices.</p>

<h2>Common ITIN application mistakes</h2>
<ul>
<li><strong>No tax return attached</strong> when no exception applies. This is the most common rejection reason.</li>
<li><strong>Notarized copies</strong> instead of originals or issuing-agency certified copies.</li>
<li><strong>Name mismatch</strong> between the W-7, passport and return.</li>
<li><strong>Applying when you do not need one,</strong> for example to give a US client a number for a W-8BEN on foreign-performed services.</li>
<li><strong>Letting it expire.</strong> If you do not use the ITIN on a return for three consecutive tax years, it expires on December 31 of the third year.</li>
</ul>

<h2>Do you actually need an ITIN? A quick decision guide</h2>
<table><thead><tr><th>Your situation</th><th>ITIN needed?</th></tr></thead><tbody>
<tr><td>Freelancer abroad, invoicing US clients for work done abroad</td><td>Usually no; give the client a W-8BEN</td></tr>
<tr><td>Non-resident owner of a single-member US LLC with no US activity</td><td>Usually no; the LLC needs an EIN, and Form 5472 accepts a reference ID for the owner</td></tr>
<tr><td>Non-resident who performed paid work while in the US</td><td>Often yes, to file Form 1040-NR</td></tr>
<tr><td>Foreign partner in a US partnership or multi-member LLC</td><td>Often yes, for the partnership's reporting and your own return</td></tr>
<tr><td>Royalty income (for example, book sales) with a treaty rate claim</td><td>Sometimes; it depends on the payer and the treaty claim</td></tr>
<tr><td>Spouse of a US citizen filing jointly</td><td>Yes, if not eligible for an SSN</td></tr>
</tbody></table>
<p>If you are unsure, start from the tax reason rather than the number: what US return or form needs your identifying number, and is there an exception? Applying without a valid reason wastes 7 to 11 weeks and often means your documents travel twice. Self-publishers can read our guide to <a href="/blog/amazon-kdp-royalties">Amazon KDP royalties</a> for how platform tax interviews handle foreign authors.</p>

<h2>What to do if your ITIN application is rejected or delayed</h2>
<ul>
<li><strong>Read the notice carefully.</strong> The IRS usually states the reason, such as a missing return, unacceptable document or incomplete line.</li>
<li><strong>Fix only what was asked</strong> and resubmit a complete package, including a new signed W-7 if requested.</li>
<li><strong>Check document returns.</strong> If your original passport has not come back within about 60 days, contact the IRS ITIN line given on its website.</li>
<li><strong>Do not file a second application</strong> while the first is still being processed; it can create duplicate records and further delay.</li>
</ul>

<h2>Renewing an expired ITIN</h2>
<p>Renew only when you need to file a return with it. Complete a new Form W-7, check "Renew an existing ITIN", enter your existing number where line 6 asks about prior ITINs, and attach your return and documents. If you file a return with an expired ITIN, it is processed, but certain credits and exemptions can be delayed or disallowed until the ITIN is renewed.</p>

<p>Whatever number you use, clean records of who paid you, when and for what make US filings straightforward. Create clear, numbered invoices for every client with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up and instant PDF download.</p>
`,
  },
  {
    slug: "w-8ben-e",
    title: "W-8BEN-E: How Foreign Companies Fill It Out (2026)",
    description:
      "W-8BEN-E guide for foreign companies billing US clients: who signs it, chapter 3 and 4 status, Active NFFE, treaty claims, validity and common mistakes.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["w-8ben-form-freelancers", "withholding-tax-on-invoices", "invoice-international-clients"],
    faqs: [
      {
        q: "Do I send Form W-8BEN-E to the IRS?",
        a: "No. You give it to the US company or financial institution that asked for it, which the IRS calls the withholding agent or payer. They keep it on file to show why they did not withhold tax, or withheld at a reduced treaty rate. Send it securely, because it contains your company's tax identification details, and keep a signed copy for your own records.",
      },
      {
        q: "How long is a W-8BEN-E valid?",
        a: "Generally from the date it is signed until the last day of the third calendar year after that. A form signed on March 10, 2026 stays valid until December 31, 2029, unless a change in circumstances makes the information wrong. If something changes, such as your country of residence or your company's status, you must tell the withholding agent within 30 days and provide a new form.",
      },
      {
        q: "What is the difference between W-8BEN and W-8BEN-E?",
        a: "Form W-8BEN is for individuals, including sole proprietors and freelancers working in their own name. Form W-8BEN-E is for entities, such as foreign corporations, limited companies and partnerships. If you invoice through a private limited company, the company completes the W-8BEN-E. If you invoice as yourself, you complete the W-8BEN even if you use a trading name.",
      },
      {
        q: "Will my US client withhold 30% from my invoices?",
        a: "Not usually for services. Fees for services performed outside the US are generally foreign-source income and not subject to US withholding, and a valid W-8BEN-E documents that you are a foreign payee. Withholding risk mostly arises for US-source income such as royalties, rent or services performed in the US. Without a valid form, a payer may apply 30% or backup withholding to some payments.",
      },
      {
        q: "Does my company need a US EIN for a W-8BEN-E?",
        a: "Usually only if you claim treaty benefits on income that requires one. The form lets you enter your foreign tax identification number on line 9b, and for many service companies that, together with the right Chapter 3 and Chapter 4 boxes, is enough. If you claim a reduced treaty rate on royalties or similar income, the instructions generally require a US TIN, unless the income falls in a listed exception.",
      },
      {
        q: "Is a small service company an Active NFFE?",
        a: "Most operating businesses that are not banks, funds or investment vehicles are Active NFFEs. The test is broadly that less than 50% of gross income in the prior year was passive income, such as interest, dividends and rents, and less than 50% of assets produce or are held to produce passive income. A design agency or software consultancy earning fees from clients usually meets that test.",
      },
    ],
    content: `
<p>Form W-8BEN-E is the form a foreign company gives a US client or platform to certify that it is not a US person, state its tax classification and FATCA status, and claim any tax treaty benefits. For a typical overseas agency or software company billing US clients for work done abroad, filling it out means completing Part I, the one short part that matches your FATCA status (usually Active NFFE), and the certification. It goes to the payer, never to the IRS.</p>

<p>US clients ask for it during vendor onboarding, often before they will pay your first invoice. This guide covers which form you need, the lines that matter for service businesses, a filled-out example, and the mistakes that cause accounts payable to reject the form. It is general information, not tax advice; check with a tax adviser for complex structures or royalty and investment income.</p>

<h2>W-8BEN-E vs W-8BEN vs W-9: which form?</h2>
<table><thead><tr><th>You are</th><th>Form</th></tr></thead><tbody>
<tr><td>A US citizen, resident or US company (including a US LLC)</td><td>W-9</td></tr>
<tr><td>A non-US individual or sole proprietor</td><td>W-8BEN (see our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide for freelancers</a>)</td></tr>
<tr><td>A non-US company, partnership or other entity</td><td>W-8BEN-E</td></tr>
<tr><td>A foreign entity whose income is effectively connected with a US business</td><td>W-8ECI</td></tr>
<tr><td>An intermediary or flow-through receiving for others</td><td>W-8IMY</td></tr>
</tbody></table>
<p>A US LLC owned by a non-resident is a special case. Because a single-member LLC is disregarded, the IRS treats its owner as the payee: a foreign individual owner usually provides a W-8BEN, and a foreign company that owns the LLC provides a W-8BEN-E. Disregarded entities generally do not complete the form for themselves. Our guide to the <a href="/blog/us-llc-for-non-residents">US LLC for non-residents</a> explains why.</p>

<h2>How to fill out W-8BEN-E: the lines that matter</h2>
<p>The form runs to many pages because it covers banks, funds and governments, but an ordinary trading company completes only a handful of sections. Line references below follow the October 2021 revision, which is current according to the <a href="https://www.irs.gov/instructions/iw8bene" target="_blank" rel="noopener noreferrer">IRS Instructions for Form W-8BEN-E</a>.</p>
<h3>Part I: identification</h3>
<ol>
<li><strong>Line 1:</strong> the company's full legal name, as on its registration certificate.</li>
<li><strong>Line 2:</strong> country of incorporation or organization.</li>
<li><strong>Line 3:</strong> leave blank unless a disregarded entity is receiving the payment.</li>
<li><strong>Line 4 (Chapter 3 status):</strong> check one box. A private limited company or similar is "Corporation". Answer the hybrid question only if you check a flow-through status.</li>
<li><strong>Line 5 (Chapter 4 / FATCA status):</strong> most operating companies check "Active NFFE". Then you complete only the matching part, Part XXV.</li>
<li><strong>Line 6:</strong> permanent residence address of the company. Not a PO box, and not a care-of address unless it is your registered address.</li>
<li><strong>Line 7:</strong> mailing address, if different.</li>
<li><strong>Line 8:</strong> US TIN (EIN), only if you have one or it is required for a treaty claim.</li>
<li><strong>Line 9b:</strong> foreign TIN, such as your company tax number in your country. Line 9c is a checkbox if you are not legally required to have one.</li>
<li><strong>Line 10:</strong> optional reference number, for example your vendor ID with the client.</li>
</ol>
<h3>Part III: treaty benefits (only if claiming)</h3>
<p>If you claim a reduced withholding rate under a tax treaty, line 14a names your treaty country, line 14b requires you to check the limitation on benefits (LOB) test you meet, and line 15 states the article, rate and income type when the treaty requires extra conditions. For fees on services performed entirely outside the US you often do not need this part, because that income is foreign-source and not subject to US withholding in the first place. Royalty and licensing income is different and often does need a treaty claim.</p>
<h3>Part XXV: Active NFFE</h3>
<p>Check the single box on line 39 certifying that less than 50% of your gross income for the preceding year was passive income and less than 50% of your assets produced or were held to produce passive income.</p>
<h3>Part XXX: certification</h3>
<p>An authorized officer or director signs, prints their name and dates the form, and checks the box confirming capacity to sign. Electronic signatures are allowed where the payer's system meets IRS standards.</p>

<h2>Worked example: a UK agency billing a US SaaS client</h2>
<p>Northlight Studio Ltd, a private limited company in Manchester, signs a retainer with a US software company for $6,500 a month of design work performed in the UK. These details are illustrative.</p>
<table><thead><tr><th>Line</th><th>Entry</th></tr></thead><tbody>
<tr><td>1</td><td>Northlight Studio Ltd</td></tr>
<tr><td>2</td><td>United Kingdom</td></tr>
<tr><td>4</td><td>Corporation; hybrid question not applicable</td></tr>
<tr><td>5</td><td>Active NFFE</td></tr>
<tr><td>6</td><td>Registered office address in Manchester</td></tr>
<tr><td>8</td><td>Blank (no US EIN)</td></tr>
<tr><td>9b</td><td>Company's UK Unique Taxpayer Reference</td></tr>
<tr><td>Part III</td><td>Not completed (service fees performed outside the US)</td></tr>
<tr><td>Part XXV, line 39</td><td>Checked</td></tr>
<tr><td>Part XXX</td><td>Signed by a director, dated March 10, 2026</td></tr>
</tbody></table>
<p>The form is valid until December 31, 2029. The client pays each $6,500 invoice in full with no US withholding. In the UK, Northlight's invoices are outside the scope of UK VAT under the place-of-supply rules for B2B services, so the invoice states the reason rather than charging VAT; our <a href="/blog/reverse-charge-invoice">reverse charge VAT invoice guide</a> covers the wording. If Northlight later licensed fonts to the client for a royalty, it would revisit Part III, because royalties can be US-source and subject to 30% withholding without a treaty claim.</p>

<h2>When will a US payer withhold tax?</h2>
<p>US withholding on payments to foreign persons applies to fixed or determinable US-source income, such as interest, dividends, rents and royalties, and to compensation for services performed in the US. The default rate is 30%, reduced or removed by treaty. A service company working remotely generally earns foreign-source income, so the W-8BEN-E serves mainly to document that you are foreign and avoid backup withholding or a 1099 being issued. If your team travels to the US to do work on site, discuss the US-source portion with an adviser and show on-site work separately on your invoices. Our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> explains how to show any withheld amount.</p>

<h2>Common W-8BEN-E mistakes</h2>
<ul>
<li><strong>Using the individual form for a company,</strong> or the company form when you invoice personally.</li>
<li><strong>Checking a FATCA status and not completing its part.</strong> Every status except a few requires its matching section.</li>
<li><strong>Missing foreign TIN.</strong> Many payers reject forms without line 9b or the 9c box.</li>
<li><strong>Claiming treaty benefits without the LOB box,</strong> or claiming them on income that needs no claim.</li>
<li><strong>US address on line 6.</strong> A US permanent residence address suggests you are not foreign and invalidates the claim unless explained.</li>
<li><strong>Not updating after changes.</strong> You must notify the payer within 30 days of a change in circumstances.</li>
<li><strong>Unsigned or undated form,</strong> or signed by someone without authority.</li>
</ul>

<h2>Other FATCA statuses a small company might see</h2>
<p>Active NFFE covers most trading businesses, but a few situations need a different box on line 5:</p>
<table><thead><tr><th>Status</th><th>Who typically uses it</th><th>Part to complete</th></tr></thead><tbody>
<tr><td>Active NFFE</td><td>Operating companies earning mainly fees or sales</td><td>Part XXV</td></tr>
<tr><td>Passive NFFE</td><td>Holding or investment companies earning mainly interest, dividends or rent</td><td>Part XXVI, and possibly Part XXIX listing substantial US owners</td></tr>
<tr><td>Participating FFI or similar</td><td>Banks, funds and other financial institutions</td><td>GIIN on line 9a and other parts</td></tr>
<tr><td>Nonprofit organization</td><td>Charities established outside the US</td><td>Part XXII</td></tr>
</tbody></table>
<p>If your company is a personal holding company that invoices for your services but also holds investments, check last year's income split before ticking Active NFFE. Getting the status wrong does not usually change withholding on service fees, but a payer's compliance team may reject a form that is internally inconsistent.</p>

<h2>Responding to questions from accounts payable</h2>
<p>Large US companies often run W-8 forms through software that flags issues automatically. Typical follow-ups and how to handle them:</p>
<ul>
<li><strong>"Please provide a US TIN."</strong> Explain that the company is foreign, earns fees for services performed outside the US, and does not claim treaty benefits that require a US TIN. Point to your foreign TIN on line 9b.</li>
<li><strong>"Your mailing address is in the US."</strong> If you use a US mail service for convenience, make sure line 6 shows the foreign permanent address and keep the US address on line 7 only.</li>
<li><strong>"Please confirm where services are performed."</strong> A one-line statement on letterhead, or wording on your invoices such as "All services performed in the United Kingdom", answers this and supports the foreign-source position.</li>
<li><strong>"Do you want us to send a 1099?"</strong> No. Foreign payees documented on a W-8 do not get a 1099-NEC; payments that are subject to withholding are reported on Form 1042-S instead.</li>
</ul>
<p>Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> shows the other documents clients commonly request alongside the tax form.</p>

<h2>Step by step: onboarding with a new US client</h2>
<ol>
<li>Confirm whether you are billing as an individual or a company.</li>
<li>Download the current W-8BEN-E from irs.gov rather than using an old copy.</li>
<li>Complete Part I, your FATCA status part and, only if needed, Part III.</li>
<li>Have an authorized officer sign and date it.</li>
<li>Upload it through the client's vendor portal or a secure link.</li>
<li>Send your first invoice showing your company's legal name and address exactly as on the form, the client's PO number and your bank details. If you bill in a currency other than USD, see our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a>.</li>
<li>Calendar the expiry date three calendar years out.</li>
</ol>
<p>For payment costs on those invoices, compare <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> before you share bank details, and read <a href="/blog/invoice-international-clients">how to invoice international clients</a> for currency and terms.</p>

<p>A correct W-8BEN-E gets you through vendor onboarding; a clear invoice gets you paid. Create invoices that match your company details exactly with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up and PDF download in seconds.</p>
`,
  },
  {
    slug: "stripe-atlas-review",
    title: "Stripe Atlas Review 2026: Costs and What You Get",
    description:
      "Stripe Atlas review for 2026: the $500 fee, what is included, the $100 yearly registered agent, LLC vs C corp, hidden ongoing costs and who should use it.",
    category: "comparisons",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["delaware-franchise-tax", "how-to-start-an-llc", "stripe-fees"],
    faqs: [
      {
        q: "How much does Stripe Atlas cost?",
        a: "Stripe lists a one-time $500 setup fee, which it says includes Delaware state filing fees and the first year of registered agent service. After the first year the registered agent renews automatically at $100 a year, and you can cancel. Your company then owes its own ongoing costs, such as Delaware's annual tax and filing fees, tax preparation and any bank or software subscriptions, which Atlas does not cover.",
      },
      {
        q: "Can I form a Wyoming LLC with Stripe Atlas?",
        a: "No. Atlas forms Delaware companies only, either a Delaware LLC or a Delaware C corporation, and also supports subsidiaries owned by a parent company. If you want a Wyoming or New Mexico LLC for lower annual costs, you need to file yourself or use another formation service, then get an EIN and set up payments separately.",
      },
      {
        q: "Does Stripe Atlas file my taxes?",
        a: "No. Atlas gets your EIN and files 83(b) elections for founders, but it is not a tax preparer and does not file your annual federal or state returns. A foreign-owned single-member LLC still needs Form 5472 with a pro forma Form 1120 every year, and a C corporation files Form 1120 and Delaware's annual report and franchise tax. Plan for a preparer or do it yourself.",
      },
      {
        q: "How long does Stripe Atlas take?",
        a: "Stripe says it can incorporate your company in one business day, with expedited Delaware processing included. Getting the EIN can take longer for founders without a US Social Security number, because the IRS processes those applications differently. Atlas lets you start accepting Stripe payments and open a Stripe financial account before the EIN arrives, which helps if you have a client waiting.",
      },
      {
        q: "Should I choose an LLC or C corp on Stripe Atlas?",
        a: "Choose a C corporation if you plan to raise venture capital, issue stock options or sell shares to investors; that is the structure most investors expect. Choose an LLC if you are a freelancer, agency or bootstrapped business that wants simple pass-through taxation and fewer formalities. Changing later is possible but costs time and legal fees, so decide based on your realistic plans.",
      },
    ],
    content: `
<p>Stripe Atlas is a $500 one-time service that forms a Delaware LLC or C corporation for you, gets the company an EIN, appoints a registered agent for the first year, and, for corporations, issues founder shares and files 83(b) elections. It is fast and polished, and it is especially useful for founders outside the US who need a US entity and Stripe account. It is not the cheapest route for a simple freelance LLC, and it leaves ongoing tax and state compliance to you.</p>

<p>This review covers exactly what the fee includes, the costs that come after year one, how Atlas compares with filing yourself, and who should and should not use it. Prices and features are taken from Stripe's own pages at the time of writing; check the <a href="https://stripe.com/atlas" target="_blank" rel="noopener noreferrer">Stripe Atlas page</a> for the current offer before signing up. This is general information, not legal or tax advice.</p>

<h2>What Stripe Atlas includes</h2>
<table><thead><tr><th>Included</th><th>Details</th></tr></thead><tbody>
<tr><td>Delaware formation</td><td>Delaware LLC or C corporation, with next-day expedited processing and state filing fees included</td></tr>
<tr><td>EIN</td><td>Atlas applies for your federal tax ID, including for founders without an SSN</td></tr>
<tr><td>Registered agent</td><td>First year included; renews at $100 a year</td></tr>
<tr><td>Founder equity</td><td>Share issuance and vesting terms for C corps; operating agreement for LLCs</td></tr>
<tr><td>83(b) elections</td><td>Filed automatically for founders, including non-US founders</td></tr>
<tr><td>Legal templates</td><td>Documents developed with the law firm Cooley, board consents, and post-money SAFEs</td></tr>
<tr><td>Stripe credits</td><td>$2,500 in Stripe product credits for the first year</td></tr>
<tr><td>Partner perks</td><td>Discounts from providers such as AWS, Mercury and Carta; Stripe cites over $50,000 in value</td></tr>
<tr><td>Payments before EIN</td><td>Stripe account and financial account available right after incorporation</td></tr>
</tbody></table>
<p>The <a href="https://docs.stripe.com/atlas" target="_blank" rel="noopener noreferrer">Stripe Atlas documentation</a> describes the company types and post-formation resources in detail. The perk values depend on whether you actually use the partner products, so treat them as a bonus rather than part of the price comparison.</p>

<h2>Stripe Atlas costs after year one</h2>
<p>The $500 is a setup fee. The company you create has its own yearly costs, and Atlas does not pay them:</p>
<table><thead><tr><th>Ongoing cost</th><th>Delaware LLC</th><th>Delaware C corporation</th></tr></thead><tbody>
<tr><td>Registered agent (via Atlas)</td><td>$100 a year from year two</td><td>$100 a year from year two</td></tr>
<tr><td>Delaware state</td><td>Flat $400 annual LLC tax, due June 1</td><td>Annual report and franchise tax, due March 1; amount depends on the calculation method</td></tr>
<tr><td>Federal return</td><td>Form 5472 + pro forma 1120 if single foreign owner; Schedule C if US owner; Form 1065 if multi-member</td><td>Form 1120 every year</td></tr>
<tr><td>Tax preparation</td><td>Optional; often a few hundred dollars for a simple 5472 package</td><td>Usually more, especially with investors</td></tr>
<tr><td>Foreign qualification</td><td>Needed if you operate in another US state</td><td>Needed if you operate in another US state</td></tr>
</tbody></table>
<p>Delaware corporations are the biggest trap. The default "authorized shares" method can produce a large franchise tax bill for a startup with millions of authorized shares, while the "assumed par value capital" method usually produces a much smaller one. Our <a href="/blog/delaware-franchise-tax">Delaware franchise tax guide</a> walks through both methods.</p>

<h2>Stripe Atlas vs doing it yourself</h2>
<p>Here is an illustrative first-two-year comparison for a single foreign founder forming an LLC:</p>
<table><thead><tr><th>Item</th><th>Stripe Atlas (Delaware LLC)</th><th>DIY Wyoming LLC</th></tr></thead><tbody>
<tr><td>Formation</td><td>$500 (includes state fee and year-one agent)</td><td>$100 state filing fee</td></tr>
<tr><td>Registered agent, year one</td><td>Included</td><td>About $60</td></tr>
<tr><td>EIN</td><td>Included</td><td>Free; you call or fax the IRS</td></tr>
<tr><td>State annual cost, year two</td><td>$400</td><td>$60 minimum</td></tr>
<tr><td>Registered agent, year two</td><td>$100</td><td>About $60</td></tr>
<tr><td><strong>Total over two years</strong></td><td><strong>$1,000</strong></td><td><strong>About $280</strong></td></tr>
</tbody></table>
<p>The DIY route saves roughly $700 over two years in this example, but costs you time: researching the state, choosing an agent, preparing an operating agreement and getting the EIN yourself, which is a phone call to the IRS international line for many founders. For a C corporation with co-founders, vesting and a fundraising plan, Atlas's documents and automatic 83(b) filing are worth far more than the price difference, because a missed 83(b) deadline can be expensive and cannot be fixed later. Our <a href="/blog/wyoming-vs-delaware-llc">Wyoming vs Delaware LLC comparison</a> covers the state side in depth.</p>

<h2>Pros and cons of Stripe Atlas</h2>
<h3>Pros</h3>
<ul>
<li>Fast, fully online formation, with incorporation in about one business day.</li>
<li>EIN handled for you, which removes a common headache for non-US founders.</li>
<li>Investor-standard legal documents and automatic 83(b) filing.</li>
<li>Stripe payments live right after incorporation, before the EIN arrives.</li>
<li>Clear, published pricing.</li>
</ul>
<h3>Cons</h3>
<ul>
<li>Delaware only, which is relatively expensive for a simple LLC.</li>
<li>No tax filing or bookkeeping included; you must handle Form 5472 or Form 1120 yourself.</li>
<li>The registered agent auto-renews; remember to budget for it or switch.</li>
<li>Your home country still taxes you; Atlas does not give tax advice for your residence country.</li>
</ul>

<h2>Who should use Stripe Atlas?</h2>
<ul>
<li><strong>Good fit:</strong> startup founders planning to raise money, teams with co-founders and vesting, and non-US founders who want a US company and Stripe account quickly with minimal paperwork.</li>
<li><strong>Possible fit:</strong> solo SaaS or ecommerce founders outside the US who value speed and the bundled Stripe setup over saving a few hundred dollars.</li>
<li><strong>Poor fit:</strong> freelancers and agencies who only need a low-cost LLC to invoice US clients. A DIY Wyoming or New Mexico LLC is usually cheaper; see <a href="/blog/us-llc-for-non-residents">how non-residents form a US LLC</a>.</li>
<li><strong>Not a fit:</strong> businesses Stripe does not support. Check Stripe's restricted business list before applying.</li>
</ul>

<h2>Delaware LLC or C corporation: choosing on Atlas</h2>
<p>Atlas asks you to pick a company type at the start, and the choice shapes your taxes and paperwork for years:</p>
<table><thead><tr><th>Factor</th><th>Delaware LLC</th><th>Delaware C corporation</th></tr></thead><tbody>
<tr><td>Federal tax (default)</td><td>Pass-through: disregarded if one owner, partnership if more</td><td>Corporate tax on profits; dividends taxed again to shareholders</td></tr>
<tr><td>Foreign single owner filing</td><td>Form 5472 + pro forma 1120, usually no US tax if no US business</td><td>Form 1120, plus Form 5472 if 25% foreign-owned</td></tr>
<tr><td>Investors and stock options</td><td>Awkward; most venture investors avoid LLCs</td><td>Standard structure for venture funding and SAFEs</td></tr>
<tr><td>Delaware annual cost</td><td>Flat $400 tax by June 1</td><td>Annual report and franchise tax by March 1</td></tr>
<tr><td>Formalities</td><td>Operating agreement; few required formalities</td><td>Board, bylaws, consents, stock ledger</td></tr>
<tr><td>Best for</td><td>Freelancers, agencies, bootstrapped online businesses</td><td>Startups planning to raise capital</td></tr>
</tbody></table>
<p>A non-US founder of a profitable service business can face very different results. With an LLC and no US trade or business, US tax may be nil and profits are taxed at home. With a C corporation, the company generally pays US corporate tax on its profits, and dividends to you may face US withholding, reduced by treaty in some cases. Our comparisons of <a href="/blog/llc-vs-corporation">LLC vs corporation</a> and <a href="/blog/s-corp-vs-c-corp">S corp vs C corp</a> cover the trade-offs; note that non-resident aliens cannot own S corporation shares.</p>

<h2>Worked example: a two-founder SaaS startup</h2>
<p>Priya (in Bangalore) and Tom (in Berlin) form a Delaware C corporation through Atlas in January 2026 with 10,000,000 authorized shares. These figures are illustrative.</p>
<ul>
<li>Atlas fee: $500, covering formation, EIN, year-one agent and 83(b) filings for both founders.</li>
<li>Stripe credits used in year one: about $1,200 of the $2,500 available.</li>
<li>March 2027: Delaware sends a franchise tax figure based on authorized shares. Their accountant recalculates under the assumed par value capital method using the company's gross assets and issued shares, which brings the bill down to a few hundred dollars plus the annual report fee.</li>
<li>April 2027: Form 1120 with Form 5472 (the company is more than 25% foreign-owned), prepared for $900.</li>
<li>Year two registered agent: $100.</li>
</ul>
<p>Their total compliance cost for the first 15 months is roughly $2,000 including Atlas. That is reasonable for a venture-track company, but would be excessive for a solo freelancer, who would usually be better served by a simple LLC.</p>

<h2>Step by step: after Atlas forms your company</h2>
<ol>
<li>Save the certificate of formation, EIN letter and operating agreement or bylaws.</li>
<li>Open a business account and keep all company money in it; see <a href="/blog/business-bank-account-for-freelancers">business bank accounts for freelancers</a>.</li>
<li>Set up invoicing in the company's legal name, with a numbered invoice series.</li>
<li>Give US clients a W-9 for the company if you are a US person or a corporation; foreign owners of a disregarded LLC usually give a W-8BEN instead.</li>
<li>Calendar the deadlines: Delaware LLC tax by June 1 or the corporation's annual report by March 1, and the federal return; foreign-owned LLCs must not miss <a href="/blog/form-5472">Form 5472</a>.</li>
<li>Review Stripe's processing costs; our <a href="/blog/stripe-fees">Stripe fees guide</a> shows card, invoicing and international rates.</li>
</ol>

<h2>Common mistakes after using Atlas</h2>
<ul>
<li>Assuming Atlas keeps the company compliant every year. It forms the company; ongoing filings are yours.</li>
<li>Ignoring the Delaware franchise tax notice because the number looks wrong. Recalculate it with the assumed par value method rather than paying an inflated bill or ignoring it.</li>
<li>Invoicing under a personal name after forming the company, which blurs liability protection. See <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a>.</li>
<li>Using Stripe Invoicing for every client when some prefer bank transfer; compare options in our <a href="/blog/stripe-invoicing-guide">Stripe invoicing guide</a>.</li>
</ul>

<p>Stripe Atlas gets the company created; regular, accurate invoices keep it earning. Whether you use Atlas or form the company yourself, you can create professional invoices in the company's name with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up and instant PDF download.</p>
`,
  },
];
