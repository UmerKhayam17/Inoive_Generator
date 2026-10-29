import type { PostDraft } from "../blog";

export const COMPARISONS_2026_H_POSTS: PostDraft[] = [
  {
    slug: "ein-vs-ssn",
    title: "EIN vs SSN: Which to Use on Invoices and Your W-9",
    description:
      "EIN vs SSN for freelancers and small businesses: which number goes on a W-9, invoice or 1099, when an EIN is required, and how to protect your SSN.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-get-an-ein", "tax-id-on-invoice", "w9-and-1099-for-contractors"],
    faqs: [
      {
        q: "Can a sole proprietor use an SSN instead of an EIN?",
        a: "Yes. A sole proprietor with no employees, no Keogh or solo 401(k) plan that requires one, and no excise tax filings can use their Social Security number for business tax purposes. Many freelancers still get a free EIN anyway so they can give clients a business number on W-9 forms and invoices instead of their SSN, which reduces identity theft risk.",
      },
      {
        q: "Does getting an EIN change how I am taxed?",
        a: "No. An EIN is just an identification number. A sole proprietor or single-member LLC that gets an EIN is still taxed the same way, reporting business income on Schedule C of Form 1040 and paying self-employment tax. Your tax status changes only if you form a different entity or file an election such as Form 2553 for S corporation status or Form 8832.",
      },
      {
        q: "How long does it take to get an EIN?",
        a: "If you apply online through the IRS website and your application is validated, you receive the EIN immediately at the end of the session and can download the confirmation letter (CP 575). Applying by fax usually takes about four business days, and by mail about four weeks. The IRS does not charge a fee, so avoid websites that charge to apply for you.",
      },
      {
        q: "Is it safe to put my SSN on a W-9?",
        a: "A W-9 is a legitimate IRS form and clients need a taxpayer identification number to file Form 1099. The risk is in how it is sent and stored. Send W-9s through a secure portal or encrypted email rather than plain email, and only to clients you have verified. Using an EIN instead of your SSN limits damage if a client's records are ever breached.",
      },
      {
        q: "Can I have both an EIN and use my SSN?",
        a: "Yes. Everyone filing a personal return keeps their SSN, and a business can have an EIN at the same time. A sole proprietor with an EIN still files Form 1040 under their SSN, listing the EIN on Schedule C. Use the EIN consistently for business paperwork so your clients' 1099s and your own records match.",
      },
      {
        q: "What happens if I give a client the wrong tax ID?",
        a: "If the name and number on a W-9 do not match IRS records, the client may receive a notice from the IRS and be required to start backup withholding at 24% on your payments until you provide a correct, certified number. Make sure the name on line 1 of the W-9 matches the name the IRS has for that number, especially for LLCs and businesses with trade names.",
      },
      {
        q: "Do I need a new EIN if my business changes?",
        a: "Sometimes. A sole proprietor generally needs a new EIN when incorporating, taking on partners, or filing for bankruptcy. A business changing its name or address usually keeps its EIN and just notifies the IRS. Single-member LLCs that add members or elect corporate taxation may need a new number in certain cases. Check the IRS guidance on when a new EIN is required.",
      },
      {
        q: "What if I am not a US citizen and have no SSN?",
        a: "Foreign individuals who need a US taxpayer number for tax reporting may apply for an ITIN using Form W-7. Foreign-owned US LLCs and corporations can get an EIN, though applicants without an SSN or ITIN usually apply by fax, mail or phone rather than online. Non-US freelancers working for US clients normally provide Form W-8BEN instead of a W-9.",
      },
      {
        q: "Should my EIN appear on my business bank account and invoices?",
        a: "Banks usually require an EIN to open an account for an LLC, corporation or partnership, and many will open a sole proprietor account with either an SSN or an EIN. On invoices, a tax ID is optional in the US for most businesses. Including your EIN can save larger clients a step during vendor setup, but never print your SSN on an invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An SSN (Social Security number) identifies you as an individual. An EIN (Employer Identification Number) is a nine-digit federal tax ID for a business, issued free by the IRS. Sole proprietors without employees can use either on a W-9, but using an EIN keeps your SSN off client paperwork and reduces identity theft risk.</p>

<p>Freelancers run into the EIN vs SSN question the first time a client sends a W-9 form or asks for a tax ID before paying an invoice. The short version: some businesses must have an EIN, everyone else may choose one, and most self-employed people are better off with one. This guide explains which number to use on W-9s, invoices and 1099s, who must get an EIN, and how to apply. It is general information, not tax or legal advice.</p>

<h2>What is the difference between an EIN and an SSN?</h2>
<p>Both are nine-digit taxpayer identification numbers (TINs) that the IRS uses to match income to a taxpayer. They look different and serve different purposes:</p>
<table><thead><tr><th>Feature</th><th>SSN</th><th>EIN</th></tr></thead><tbody>
<tr><td>Issued by</td><td>Social Security Administration</td><td>Internal Revenue Service</td></tr>
<tr><td>Format</td><td>XXX-XX-XXXX</td><td>XX-XXXXXXX</td></tr>
<tr><td>Identifies</td><td>An individual person</td><td>A business entity, trust, estate or employer</td></tr>
<tr><td>Cost</td><td>Free</td><td>Free from IRS.gov</td></tr>
<tr><td>Used for</td><td>Personal tax returns, employment, Social Security benefits, credit</td><td>Business tax returns, payroll, business bank accounts, W-9s, 1099s</td></tr>
<tr><td>Risk if exposed</td><td>High: tied to personal credit and identity</td><td>Lower: business number, often semi-public</td></tr>
<tr><td>Can be changed</td><td>Rarely</td><td>Business can get a new one when structure changes</td></tr>
</tbody></table>
<p>The IRS describes the EIN on its page about <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers" rel="noopener">Employer ID Numbers</a>. Despite the name, you do not need employees to get one.</p>

<h2>Who must have an EIN?</h2>
<p>According to the IRS, you need an EIN if any of these apply:</p>
<ul>
<li>You have employees</li>
<li>You operate as a corporation or partnership</li>
<li>You file employment, excise, or alcohol, tobacco and firearms tax returns</li>
<li>You withhold taxes on income, other than wages, paid to a nonresident alien</li>
<li>You have a Keogh plan or certain other retirement plans</li>
<li>Your business is a multi-member LLC, or a single-member LLC with employees or certain excise tax obligations</li>
<li>You are involved with certain trusts, estates, nonprofits, farmers' cooperatives or real estate mortgage investment conduits</li>
</ul>
<p>If none of these apply, as with most solo freelancers and single-owner LLCs without employees, an EIN is optional. Our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> walks through the free online application.</p>

<h2>EIN vs SSN on a W-9: which number do you enter?</h2>
<p>Form W-9 asks for your name, federal tax classification and TIN. The right entry depends on your business structure, and getting it wrong is a common reason clients receive IRS mismatch notices.</p>
<table><thead><tr><th>Your setup</th><th>Line 1 (name)</th><th>TIN to enter</th></tr></thead><tbody>
<tr><td>Sole proprietor, no EIN</td><td>Your personal name</td><td>Your SSN</td></tr>
<tr><td>Sole proprietor with an EIN</td><td>Your personal name (business name on line 2)</td><td>Your SSN or your EIN (either is allowed; the IRS encourages SSN, but many use the EIN for privacy)</td></tr>
<tr><td>Single-member LLC (disregarded entity)</td><td>The owner's name; LLC name on line 2</td><td>The owner's SSN or the owner's EIN, not the LLC's EIN (the LLC's own EIN is for employment and excise taxes)</td></tr>
<tr><td>Multi-member LLC taxed as a partnership</td><td>The LLC's legal name</td><td>The LLC's EIN</td></tr>
<tr><td>LLC taxed as S or C corporation</td><td>The LLC's legal name</td><td>The LLC's EIN</td></tr>
<tr><td>Corporation</td><td>The corporation's legal name</td><td>The corporation's EIN</td></tr>
</tbody></table>
<p>The single-member LLC row surprises many people: the IRS instructions for Form W-9 say a disregarded entity should not enter its own EIN on the form. Check the current <a href="https://www.irs.gov/forms-pubs/about-form-w-9" rel="noopener">Form W-9 instructions</a> before you sign, because the form was revised in recent years. For the client side of the process, see our guide to <a href="/blog/w9-and-1099-for-contractors">W-9s and 1099s for contractors</a>.</p>

<h2>Which number goes on an invoice?</h2>
<p>US law does not require most businesses to show a federal tax ID on an invoice. Your invoice must clearly show who you are, what you provided, the amount and the payment terms. Whether to add a tax ID depends on your clients:</p>
<ul>
<li><strong>Never put your SSN on an invoice.</strong> Invoices are emailed, printed, forwarded and stored by people you will never meet.</li>
<li><strong>Adding an EIN is optional.</strong> Some corporate clients ask for it during vendor onboarding, and printing it can save a back-and-forth.</li>
<li><strong>State sales tax permit numbers</strong> are sometimes required on invoices or resale paperwork, depending on the state. See our <a href="/blog/tax-id-on-invoice">tax ID on invoice guide</a> for country-by-country rules.</li>
</ul>
<p>Here is an example invoice header and body for a freelance web developer who uses an EIN:</p>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>From</td><td>Maya Lopez, DBA Lopez Web Studio, 214 Elm St, Austin, TX 78701</td></tr>
<tr><td>EIN</td><td>12-3456789 (illustrative)</td></tr>
<tr><td>Bill to</td><td>Northwind Dental Group LLC</td></tr>
<tr><td>Invoice number and date</td><td>INV-2026-031, October 29, 2026</td></tr>
<tr><td>Website redesign, 5 pages (fixed fee)</td><td>$3,200.00</td></tr>
<tr><td>Booking form integration, 6 hours at $95</td><td>$570.00</td></tr>
<tr><td>Hosting setup, first year</td><td>$180.00</td></tr>
<tr><td><strong>Total due (Net 30)</strong></td><td><strong>$3,950.00</strong></td></tr>
</tbody></table>
<p>You can build an invoice like this in a few minutes with our <a href="/invoice-generator">free invoice generator</a>, adding your EIN in the business details field only if you want it shown.</p>

<h2>Worked example: what happens at 1099 time</h2>
<p>Maya, from the example above, bills Northwind $3,950 in October and $2,100 in December 2026, for $6,050 in the year. Because the total is above the Form 1099-NEC reporting threshold for payments made in 2026 (raised to $2,000 by the One Big Beautiful Bill Act, from the long-standing $600), Northwind files a 1099-NEC in early 2027 using the TIN Maya gave on her W-9.</p>
<ul>
<li>If Maya gave her EIN as a sole proprietor, the 1099 shows the EIN. She reports the $6,050 on Schedule C, listing the same EIN.</li>
<li>If she gave her SSN, the 1099 shows her SSN and is mailed to her, and copies sit in Northwind's files.</li>
<li>If she gave a number that does not match her name in IRS records, Northwind may get a CP2100 notice and have to start backup withholding at 24%.</li>
</ul>
<p>Our guide to the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a> covers the new rule in detail, and <a href="/blog/how-to-file-1099-nec">how to file a 1099-NEC</a> covers the payer side.</p>

<h2>Why freelancers should consider an EIN even when it is optional</h2>
<ol>
<li><strong>Privacy.</strong> Every client, platform and agency that pays you over the threshold asks for a TIN. An EIN keeps your SSN in fewer databases.</li>
<li><strong>Professional image.</strong> Corporate vendor forms often expect a business tax ID.</li>
<li><strong>Banking.</strong> Many banks prefer or require an EIN for a business account, which helps keep personal and business money apart.</li>
<li><strong>Future growth.</strong> If you hire an employee later, you will need an EIN anyway.</li>
<li><strong>Cost.</strong> It is free and the online application takes minutes.</li>
</ol>
<p>A sole proprietor's EIN does not create a separate legal entity or change your taxes. If you want liability protection, look at forming an LLC; our guides to <a href="/blog/how-to-invoice-as-a-sole-proprietor">invoicing as a sole proprietor</a> and <a href="/blog/how-to-invoice-as-an-llc">invoicing as an LLC</a> show what changes on your paperwork.</p>

<h2>How to get an EIN in five steps</h2>
<ol>
<li>Go to the IRS EIN Assistant on IRS.gov. Only the IRS site issues EINs, and it is free.</li>
<li>Choose your entity type (sole proprietor, LLC, corporation, partnership).</li>
<li>Enter the responsible party's name and SSN or ITIN, plus business name, address and start date.</li>
<li>Answer questions about employees and excise taxes.</li>
<li>Submit and download the confirmation letter (CP 575) immediately. Save it, because banks and clients may ask for it.</li>
</ol>
<p>The online application is available only during IRS operating hours and is limited to one EIN per responsible party per day. Applicants without an SSN or ITIN apply by fax or mail using Form SS-4.</p>

<h2>What about ITINs and non-US freelancers?</h2>
<p>A third type of TIN, the Individual Taxpayer Identification Number (ITIN), is for people who need to file US taxes but cannot get an SSN. Non-US freelancers working for US clients usually do not need any US number: they complete Form W-8BEN to certify foreign status instead of a W-9. See our <a href="/blog/w-8ben-form-freelancers">W-8BEN guide for freelancers</a> for details.</p>

<h2>How to protect your SSN as a freelancer</h2>
<p>Identity theft involving SSNs often starts with ordinary paperwork. A few habits limit your exposure:</p>
<ul>
<li><strong>Use your EIN on every business form</strong> where it is allowed: W-9s, vendor applications, marketplace tax settings and business bank accounts.</li>
<li><strong>Send W-9s securely.</strong> Use the client's vendor portal, a password-protected PDF with the password sent separately, or an encrypted file-sharing link that expires.</li>
<li><strong>Verify requests.</strong> Scammers send fake W-9 requests posing as clients or the IRS. The IRS does not ask you for a W-9 by email.</li>
<li><strong>Get an IRS Identity Protection PIN.</strong> The IRS offers IP PINs to any taxpayer who can verify their identity, which blocks others from filing a return with your SSN.</li>
<li><strong>Check your credit reports</strong> and consider freezing your credit with the three bureaus if your SSN may have been exposed.</li>
</ul>

<h2>EIN vs SSN by business type: quick reference</h2>
<table><thead><tr><th>Business type</th><th>EIN required?</th><th>Use on W-9</th><th>Personal return</th></tr></thead><tbody>
<tr><td>Freelancer, sole proprietor, no employees</td><td>No (optional)</td><td>SSN or own EIN</td><td>Form 1040 with Schedule C</td></tr>
<tr><td>Sole proprietor with employees</td><td>Yes</td><td>SSN or EIN</td><td>Form 1040 with Schedule C</td></tr>
<tr><td>Single-member LLC, no employees</td><td>No (optional)</td><td>Owner's SSN or owner's EIN</td><td>Form 1040 with Schedule C</td></tr>
<tr><td>Multi-member LLC</td><td>Yes</td><td>LLC's EIN</td><td>Members receive Schedule K-1</td></tr>
<tr><td>S corporation or C corporation</td><td>Yes</td><td>Corporation's EIN</td><td>Owners receive W-2 wages and K-1s or dividends</td></tr>
</tbody></table>
<p>If you are still choosing a structure, our <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship guide</a> compares the options.</p>

<h2>Common mistakes with EINs and SSNs</h2>
<ul>
<li><strong>Paying a website to get an EIN.</strong> The IRS application is free.</li>
<li><strong>Putting a single-member LLC's EIN on a W-9.</strong> For a disregarded LLC, use the owner's SSN or EIN.</li>
<li><strong>Name and TIN mismatch.</strong> Line 1 must match the name the IRS has for the number.</li>
<li><strong>Emailing W-9s unencrypted.</strong> Use a secure portal or an encrypted file.</li>
<li><strong>Printing your SSN on invoices or quotes.</strong> There is no reason to, and it creates real risk.</li>
<li><strong>Applying for multiple EINs by accident.</strong> If you lose your number, find it on your CP 575 letter, old returns or bank records, or call the IRS Business and Specialty Tax Line.</li>
</ul>

<p>One last practical tip: once you have an EIN, update it everywhere at once. Send new W-9s to active clients, update the tax settings on any marketplace or payment platform that pays you, and tell your bank. Mixing numbers across clients in the same year makes it harder to match 1099s to your Schedule C, and it can trigger mismatch notices for clients.</p>

<h2>EIN vs SSN: the bottom line</h2>
<p>In the EIN vs SSN choice, required cases are simple: employers, partnerships, corporations and multi-member LLCs need an EIN. For solo freelancers it is optional, but a free EIN keeps your Social Security number off W-9s and vendor forms, and it is the number to use if you ever show a tax ID on invoices. Once your details are set, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a downloadable PDF in your browser, with an optional field for your business tax ID.</p>
`,
  },
  {
    slug: "honeybook-vs-dubsado",
    title: "HoneyBook vs Dubsado (2026): Pricing and Invoicing",
    description:
      "HoneyBook vs Dubsado compared for 2026: plan prices, payment fees, invoicing, contracts, automation and which client management tool suits your business.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-generator-vs-accounting-software",
      "freshbooks-vs-wave",
      "best-free-invoicing-software",
    ],
    faqs: [
      {
        q: "Is HoneyBook or Dubsado cheaper?",
        a: "On subscription price, Dubsado is usually cheaper: as of October 2026 its annual plans are listed at $335 (Starter) and $525 (Premier) a year, while HoneyBook's annual plans start at $29 a month ($348 a year) for Starter and rise to $49 and $109 a month. Payment processing fees also matter, and both charge similar card percentages, so compare total cost at your expected volume.",
      },
      {
        q: "Does Dubsado charge transaction fees?",
        a: "Dubsado does not process payments itself. You connect a payment processor such as Stripe, Square or PayPal, and that processor charges its normal fees on each payment. Check Dubsado's current help documentation for the supported processors in your country, and the processor's pricing page for the exact card and bank transfer rates that will apply to your invoices.",
      },
      {
        q: "Can I use HoneyBook outside the United States?",
        a: "HoneyBook is built for the US and Canada, and its payment processing is available only to businesses based there. If you work from elsewhere, Dubsado is often the better fit because it supports multiple currencies and connects to processors that operate internationally. Confirm current country support on each company's website before you sign up, because availability can change.",
      },
      {
        q: "Which is easier to learn, HoneyBook or Dubsado?",
        a: "HoneyBook is generally considered easier to learn, with guided setup, templates and a cleaner interface for combining proposals, contracts and invoices. Dubsado is more flexible and customizable, especially with forms and workflows, but has a steeper learning curve. Many Dubsado users hire a setup specialist or spend several days building their templates before going live.",
      },
      {
        q: "Do HoneyBook and Dubsado replace accounting software?",
        a: "No. Both are client management tools that handle leads, proposals, contracts, invoices and payments. They track what clients owe, but they do not reconcile bank accounts, track all expenses or produce full tax-ready financial statements. Most users connect them to QuickBooks Online or another accounting system, or export payment reports to their bookkeeper at month end.",
      },
      {
        q: "Can I take deposits and payment plans in HoneyBook and Dubsado?",
        a: "Yes. Both let you split a project price into a deposit or retainer plus scheduled installments, with automatic reminders and optional autopay. This is one of their main draws for wedding, event and creative businesses that take a booking fee months before the work happens. Set the schedule clearly in the contract so it matches the invoice.",
      },
      {
        q: "Is there a free trial for HoneyBook or Dubsado?",
        a: "Both offer free trials. As of October 2026, Dubsado's pricing page describes a 21-day free trial with full access to Premier features and no credit card required. HoneyBook also offers a free trial; check its pricing page for the current length and terms. Use the trial to build one real proposal, contract and invoice flow before you commit to an annual plan.",
      },
      {
        q: "What is a good alternative if I only need invoices?",
        a: "If you do not need lead capture, scheduling or contract workflows, a CRM like HoneyBook or Dubsado may be more than you need. A free invoice generator plus a payment link from Stripe, Square or PayPal covers basic billing, and simple accounting software adds tracking. Upgrade to a client management tool once manual follow-up starts costing you bookings.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> HoneyBook and Dubsado are client management (CRM) tools for service businesses that combine proposals, contracts, invoices and payments. HoneyBook is easier to learn and processes payments itself in the US and Canada. Dubsado is cheaper on annual plans, more customizable, and uses outside processors like Stripe, Square or PayPal.</p>

<p>Photographers, wedding planners, designers, coaches and other creative freelancers often narrow their software choice to HoneyBook vs Dubsado. Both promise to take a client from inquiry to paid invoice without spreadsheets. They differ in price, payment handling, flexibility and learning curve. This guide compares pricing as of October 2026, invoicing features, payment fees, and who each tool suits best.</p>

<h2>What are HoneyBook and Dubsado?</h2>
<p><strong>HoneyBook</strong> is an all-in-one client flow platform: lead capture forms, scheduling, proposals that combine a quote, contract and invoice in one file, automated reminders and built-in payment processing. Payments are processed through HoneyBook's own system.</p>
<p><strong>Dubsado</strong> is a business management platform with forms, contracts, invoices, scheduling and workflows. It is known for deep customization of forms and branding. Dubsado connects to third-party payment processors rather than processing payments itself.</p>
<p>Both are a step up from a standalone invoice tool. If you are unsure whether you need a CRM at all, read our comparison of <a href="/blog/invoice-generator-vs-accounting-software">invoice generators and accounting software</a> first.</p>

<h2>HoneyBook vs Dubsado pricing (as of October 2026)</h2>
<table><thead><tr><th>Plan</th><th>HoneyBook</th><th>Dubsado</th></tr></thead><tbody>
<tr><td>Entry plan</td><td>Starter: $29/month billed yearly (about $36 billed monthly)</td><td>Starter: $335/year billed yearly</td></tr>
<tr><td>Mid plan</td><td>Essentials: $49/month billed yearly ($59 monthly)</td><td>Premier: $525/year billed yearly</td></tr>
<tr><td>Top plan</td><td>Premium: $109/month billed yearly ($129 monthly)</td><td>No higher published tier</td></tr>
<tr><td>Extra users</td><td>Varies by plan</td><td>3 additional users free; larger teams pay monthly add-on fees</td></tr>
<tr><td>Free trial</td><td>Yes, check current terms</td><td>21 days of Premier, no credit card</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.honeybook.com/pricing" rel="noopener">HoneyBook pricing</a> and <a href="https://www.dubsado.com/pricing" rel="noopener">Dubsado pricing</a>, checked October 2026. Both companies have changed prices more than once in recent years, and promotions are common, so confirm before you subscribe. Monthly-billing prices for HoneyBook Starter and for Dubsado are not always displayed on the main pricing page.</p>

<h2>Payment processing fees compared</h2>
<table><thead><tr><th>Fee</th><th>HoneyBook</th><th>Dubsado</th></tr></thead><tbody>
<tr><td>Card payments</td><td>HoneyBook's own processing; its pricing page lists card fees around 2.9% + 25 cents, with lower starting rates shown for some cases (as of October 2026)</td><td>Your processor's rate (for example Stripe, Square or PayPal)</td></tr>
<tr><td>Bank transfer (ACH)</td><td>1.5% per HoneyBook's pricing page</td><td>Depends on processor; Stripe ACH is typically a low capped fee</td></tr>
<tr><td>Who pays</td><td>Business by default; some users pass fees on where legal</td><td>Business by default</td></tr>
<tr><td>Payouts</td><td>To your linked bank through HoneyBook</td><td>Through your processor's payout schedule</td></tr>
</tbody></table>
<p>For a business that bills mostly by bank transfer, processing fees can outweigh the subscription. Read our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a> and check the <a href="/blog/credit-card-surcharge-rules">surcharge rules</a> before adding a card fee to invoices.</p>

<h2>Worked example: a wedding photographer's yearly cost</h2>
<p>A wedding photographer books 25 weddings a year at an average of $4,000, or $100,000 in revenue. Half the clients pay by card and half by ACH. Using the rates above as illustrative inputs:</p>
<table><thead><tr><th>Cost</th><th>HoneyBook Essentials</th><th>Dubsado Premier + Stripe</th></tr></thead><tbody>
<tr><td>Subscription</td><td>$49 x 12 = $588</td><td>$525</td></tr>
<tr><td>Card fees on $50,000 (75 payments)</td><td>2.9% + $0.25 = $1,469</td><td>Stripe standard 2.9% + $0.30 = $1,473 (check Stripe's current rates)</td></tr>
<tr><td>ACH fees on $50,000 (75 payments)</td><td>1.5% = $750</td><td>Stripe ACH 0.8% capped at $5 = $375 (illustrative)</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$2,807</strong></td><td><strong>$2,373</strong></td></tr>
</tbody></table>
<p>The subscriptions are close, and the real difference comes from ACH fees on large payments. If more clients pay by bank transfer, Dubsado with a low-cost processor becomes cheaper still. If the photographer values HoneyBook's simpler setup and all-in-one payments, the difference of a few hundred dollars may be worth it. Run your own mix, and see our <a href="/blog/photography-pricing-guide">photography pricing guide</a> for pricing your packages.</p>

<h2>Invoicing features: HoneyBook vs Dubsado</h2>
<table><thead><tr><th>Feature</th><th>HoneyBook</th><th>Dubsado</th></tr></thead><tbody>
<tr><td>Invoice templates</td><td>Branded templates, combined with proposals and contracts</td><td>Highly customizable templates and packages</td></tr>
<tr><td>Payment schedules</td><td>Deposits, installments, autopay</td><td>Deposits, installments, autopay</td></tr>
<tr><td>Automatic reminders</td><td>Yes</td><td>Yes, through workflows</td></tr>
<tr><td>Multiple currencies</td><td>US and Canadian businesses</td><td>Supports many currencies via processors</td></tr>
<tr><td>Tax on invoices</td><td>Tax rates per line or invoice</td><td>Tax rates per line or invoice</td></tr>
<tr><td>Proposal plus contract plus invoice in one</td><td>Yes, core feature</td><td>Yes, using proposals with packages</td></tr>
<tr><td>Accounting integration</td><td>QuickBooks Online sync</td><td>QuickBooks Online sync</td></tr>
</tbody></table>
<p>Both handle the typical creative workflow: a retainer to book the date, then installments, then a final balance before delivery. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> explains how to word retainer terms so they match your contract.</p>

<h3>Example payment schedule invoice</h3>
<table><thead><tr><th>Item</th><th>Due date</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wedding photography package: 8 hours, two photographers, online gallery</td><td></td><td>$3,600.00</td></tr>
<tr><td>Engagement session add-on</td><td></td><td>$400.00</td></tr>
<tr><td colspan="2"><strong>Package total</strong></td><td><strong>$4,000.00</strong></td></tr>
<tr><td>Retainer (non-refundable, books the date)</td><td>On signing</td><td>$1,000.00</td></tr>
<tr><td>Second installment</td><td>90 days before event</td><td>$1,500.00</td></tr>
<tr><td>Final balance</td><td>14 days before event</td><td>$1,500.00</td></tr>
</tbody></table>
<p>You can reproduce a schedule like this with separate invoices from our <a href="/invoice-generator">free invoice generator</a> if you are not ready for a CRM yet. Our <a href="/blog/photography-invoice-template">photography invoice template</a> and <a href="/blog/event-planner-invoice-template">event planner invoice template</a> show more examples.</p>

<h2>Contracts, forms and automation</h2>
<ul>
<li><strong>Contracts:</strong> Both offer e-signature contracts with smart fields that pull in client names, dates and prices. Have a lawyer review your template; see our <a href="/blog/freelance-contract-template">freelance contract template</a> for the clauses to include.</li>
<li><strong>Forms and questionnaires:</strong> Dubsado's form builder is more flexible, with conditional fields and detailed styling. HoneyBook's forms are simpler to set up.</li>
<li><strong>Automation:</strong> Dubsado's workflows on Premier can trigger emails, forms and reminders based on dates and actions. HoneyBook offers automations on its paid plans with a more guided setup.</li>
<li><strong>Scheduling:</strong> Both include booking calendars; on Dubsado the scheduler is part of Premier.</li>
<li><strong>Client portal:</strong> Both give clients a portal or project page to see files, sign and pay.</li>
</ul>

<h2>Which is better for your type of business?</h2>
<table><thead><tr><th>Business</th><th>Better fit</th><th>Reason</th></tr></thead><tbody>
<tr><td>Wedding or portrait photographer in the US</td><td>HoneyBook or Dubsado</td><td>Both handle retainers and payment plans well; HoneyBook is quicker to set up</td></tr>
<tr><td>Wedding or event planner with detailed questionnaires</td><td>Dubsado</td><td>More flexible forms and workflows</td></tr>
<tr><td>Designer or creative outside the US and Canada</td><td>Dubsado</td><td>International currencies and processors</td></tr>
<tr><td>Coach or consultant selling packages</td><td>HoneyBook</td><td>Simple proposals, scheduling and payments in one flow</td></tr>
<tr><td>Small agency with several team members</td><td>Compare both</td><td>Check user pricing and permissions</td></tr>
<tr><td>Freelancer who only needs invoices</td><td>Neither</td><td>An invoice tool or basic accounting software is cheaper</td></tr>
</tbody></table>

<h2>Pros and cons at a glance</h2>
<h3>HoneyBook</h3>
<ul>
<li><strong>Pros:</strong> Easy setup, polished client experience, built-in payments, combined proposal, contract and invoice, mobile app.</li>
<li><strong>Cons:</strong> Higher monthly cost on upper tiers, US and Canada only, less form customization, card and ACH fees set by HoneyBook.</li>
</ul>
<h3>Dubsado</h3>
<ul>
<li><strong>Pros:</strong> Lower annual price, deep customization, powerful workflows on Premier, works internationally, choose your own processor.</li>
<li><strong>Cons:</strong> Steeper learning curve, setup can take days, interface feels less streamlined, payment processing depends on a separate account.</li>
</ul>

<h2>How HoneyBook and Dubsado fit with your accounting</h2>
<p>Neither tool is a full accounting system. They record what clients were invoiced and what they paid, but your bookkeeping still needs bank reconciliation, expense tracking and tax reports. Most users either sync payments to QuickBooks Online or export a monthly payments report for their bookkeeper. Watch one detail: payouts from a processor arrive as a net deposit after fees, so record the gross payment as income and the processing fee as an expense. Our guide to <a href="/blog/how-to-create-invoice-in-freshbooks">creating invoices in FreshBooks</a> and our <a href="/blog/freshbooks-vs-wave">FreshBooks vs Wave comparison</a> cover accounting-first alternatives if you want invoicing and bookkeeping in one product instead.</p>

<h2>How to choose between HoneyBook and Dubsado</h2>
<ol>
<li><strong>Check your country.</strong> If you are outside the US or Canada, Dubsado is usually the practical choice.</li>
<li><strong>Estimate payment mix.</strong> Calculate card and ACH volume and model fees on both.</li>
<li><strong>Decide how much setup time you have.</strong> HoneyBook is faster to launch; Dubsado rewards time invested.</li>
<li><strong>Map your client journey.</strong> Inquiry, proposal, contract, retainer, questionnaire, final payment. Build it in both trials.</li>
<li><strong>Check integrations.</strong> Confirm QuickBooks, calendar and email connections work as you need.</li>
<li><strong>Review your onboarding steps</strong> against our <a href="/blog/client-onboarding-checklist">client onboarding checklist</a>.</li>
</ol>

<h2>How to move your clients into HoneyBook or Dubsado</h2>
<ol>
<li><strong>Export your client list</strong> from your email, spreadsheet or old CRM with names, emails, phone numbers and event or project dates.</li>
<li><strong>Build your templates first:</strong> brand colors and logo, one proposal or package, one contract, one invoice with a payment schedule, and one questionnaire.</li>
<li><strong>Connect payments.</strong> In HoneyBook, verify your business and bank details for payouts. In Dubsado, connect your Stripe, Square or PayPal account and test a small payment.</li>
<li><strong>Import clients</strong> and create projects for active bookings, entering payments already received so balances are correct.</li>
<li><strong>Set up one automation at a time,</strong> such as a payment reminder three days before each installment.</li>
<li><strong>Send a test proposal to yourself</strong> and complete the whole client flow, including signing and paying, before sending one to a real client.</li>
</ol>
<p>Keep invoices for bookings you started outside the new system where they are until they are paid, then start fresh with new bookings. That avoids duplicated balances and confused clients. If clients will see a new payment page, let them know in advance so an unfamiliar email does not look like phishing.</p>

<h2>Common mistakes when switching to a CRM</h2>
<ul>
<li><strong>Choosing on subscription price alone.</strong> Processing fees often cost more than the plan.</li>
<li><strong>Skipping the contract review.</strong> Templates are a starting point, not legal advice.</li>
<li><strong>Not matching invoice and contract terms.</strong> Deposit amounts and refund rules must agree.</li>
<li><strong>Automating too early.</strong> Map your process manually first, then automate the steps that repeat.</li>
<li><strong>Forgetting your bookkeeping.</strong> CRM payments still need to reach your accounting records.</li>
<li><strong>Locking into an annual plan before testing.</strong> Use the full trial with a real client flow.</li>
</ul>

<h2>What happens if you outgrow either tool?</h2>
<p>Switching CRMs later is possible but tedious. Contracts, signed documents and payment histories usually need to be downloaded as PDFs and stored elsewhere, and active payment schedules have to be rebuilt in the new system. Before you commit to an annual plan, check how each tool exports client data and documents, and keep your own copy of every signed contract and paid invoice in a folder you control. That habit also helps at tax time, since your bookkeeper or accountant will want the paid invoices and processor reports regardless of which platform produced them. If you invoice clients for retainers, our <a href="/blog/retainer-invoice">retainer invoice guide</a> shows how to document them clearly in any system.</p>

<h2>HoneyBook vs Dubsado: the verdict</h2>
<p>Choose HoneyBook if you are in the US or Canada, want the quickest setup, and like having payments built in. Choose Dubsado if you want lower annual pricing, deep customization, international support or a cheaper processor for large bank payments. For the HoneyBook vs Dubsado decision, the best test is to run one real client through each trial. And if you only need to send a professional invoice today, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and downloads a PDF straight from your browser. For more software options, see our roundup of the <a href="/blog/best-free-invoicing-software">best free invoicing software</a>.</p>
`,
  },
  {
    slug: "invoice-vs-bill-of-sale",
    title: "Invoice vs Bill of Sale: Differences and When to Use",
    description:
      "Invoice vs bill of sale: one requests payment, the other proves ownership transfer. Learn what each must include, when you need both, with examples for 2026.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["bill-of-sale-template", "invoice-vs-receipt", "what-is-an-invoice"],
    faqs: [
      {
        q: "Is a bill of sale the same as a receipt?",
        a: "No, although they overlap. A receipt confirms that a payment was received. A bill of sale confirms that ownership of a specific item passed from the seller to the buyer, often listing serial numbers or a VIN, and is signed by the seller and sometimes the buyer. A bill of sale may also state that payment was received, which is why people confuse the two.",
      },
      {
        q: "Can an invoice be used as proof of ownership?",
        a: "Sometimes, but it is weaker than a bill of sale. A paid invoice shows that a buyer was charged and, if marked paid, that they paid. It usually does not include signed language transferring title or warranties about liens. For vehicles, boats, trailers and other titled or high-value items, agencies and buyers generally expect a signed bill of sale or the official title document.",
      },
      {
        q: "Does a bill of sale need to be notarized?",
        a: "Usually not, but some states require notarization for certain vehicle, boat or trailer bills of sale, and notarizing adds evidence that the signatures are genuine. Check the motor vehicle or natural resources agency in the state where the item will be registered. For ordinary goods such as furniture or equipment, a signed and dated bill of sale without notarization is typically enough.",
      },
      {
        q: "Should a business issue a bill of sale for every sale?",
        a: "No. Most routine business sales only need an invoice or receipt. A bill of sale is useful when ownership of a specific, identifiable item needs to be documented, such as used vehicles, machinery, livestock, firearms where permitted, or the sale of business assets. Many businesses issue both for these items: an invoice to collect payment and a bill of sale on completion.",
      },
      {
        q: "What is an as-is clause in a bill of sale?",
        a: "An as-is clause says the buyer accepts the item in its current condition and the seller gives no warranties about quality or fitness, apart from any required by law. It is common in private and used equipment sales. As-is language does not usually excuse fraud or hiding known defects, and consumer protection laws may limit it, so describe the item's condition honestly.",
      },
      {
        q: "Do I charge sales tax on a bill of sale?",
        a: "Sales tax depends on the transaction, not the document name. A business selling taxable goods generally collects sales tax and shows it on the invoice or bill of sale. Private party sales of vehicles are often taxed when the buyer registers the vehicle rather than by the seller. Check the rules in your state, and use a sales tax calculator for the rate.",
      },
      {
        q: "Who keeps the original bill of sale?",
        a: "The buyer keeps the original because it supports their ownership and any registration. The seller should keep a signed copy as evidence that ownership transferred, which can matter for liability, such as parking tickets or accidents after a vehicle sale, and for tax records showing the sale price. Digital copies with clear signatures are usually fine for business records.",
      },
      {
        q: "Can I combine an invoice and a bill of sale in one document?",
        a: "Yes, for simple sales some businesses use a single document titled invoice and bill of sale that lists the items, price and payment terms, and includes transfer of ownership language with signature lines. Keep in mind that ownership usually transfers on full payment, so the bill of sale part should be signed only once the invoice is paid.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice is a seller's request for payment that lists goods or services, amounts and due date. A bill of sale is a signed document that records the transfer of ownership of a specific item from seller to buyer. Invoices collect money; bills of sale prove who owns what. High-value sales often need both.</p>

<p>The invoice vs bill of sale question comes up when you sell something tangible and specific: a used truck, a piece of equipment, a horse, inventory from a closing business. Using the wrong document can leave a buyer unable to register a vehicle or leave a seller without proof that payment was due. This guide explains the difference, what each must include, when to use both, and common mistakes. It is general information, not legal advice.</p>

<h2>What is an invoice?</h2>
<p>An invoice is a commercial document a seller sends to a buyer to request payment for goods delivered or services performed. It records the details of the sale and sets payment terms. A typical invoice includes:</p>
<ul>
<li>Seller and buyer names and addresses</li>
<li>A unique invoice number and issue date</li>
<li>Line items with quantities, unit prices and amounts</li>
<li>Subtotal, sales tax and total due</li>
<li>Payment terms such as due upon receipt or Net 30, and accepted payment methods</li>
</ul>
<p>For a full breakdown, read <a href="/blog/what-is-an-invoice">what an invoice is</a>. An invoice creates an accounts receivable record for the seller and a payable for the buyer. It does not, on its own, transfer legal title.</p>

<h2>What is a bill of sale?</h2>
<p>A bill of sale is a written record that ownership of personal property has passed from one party to another. It is common for:</p>
<ul>
<li>Vehicles, motorcycles, trailers and boats (often required alongside the title by state agencies)</li>
<li>Used machinery, tools and business equipment</li>
<li>Livestock and horses</li>
<li>Firearms, where state law permits private sales</li>
<li>Business assets sold as part of a business sale (an asset purchase agreement usually includes a bill of sale)</li>
</ul>
<p>A bill of sale usually includes a precise description of the item (make, model, year, serial number or VIN), the sale price, the date, any warranty or as-is language, and signatures. Our <a href="/blog/bill-of-sale-template">bill of sale template</a> includes a fill-in layout.</p>

<h2>Invoice vs bill of sale: key differences</h2>
<table><thead><tr><th>Factor</th><th>Invoice</th><th>Bill of sale</th></tr></thead><tbody>
<tr><td>Main purpose</td><td>Request payment</td><td>Prove transfer of ownership</td></tr>
<tr><td>Timing</td><td>Sent before payment (or at delivery)</td><td>Signed when the sale completes, usually on full payment</td></tr>
<tr><td>Used for</td><td>Goods and services</td><td>Specific tangible items</td></tr>
<tr><td>Signatures</td><td>Not required</td><td>Seller's signature required; buyer often signs too</td></tr>
<tr><td>Item detail</td><td>Description and quantity</td><td>Identifying details: serial number, VIN, hull ID</td></tr>
<tr><td>Legal effect</td><td>Evidence of a debt and sale terms</td><td>Evidence of title transfer; may include warranties</td></tr>
<tr><td>Who keeps the original</td><td>Buyer receives; seller keeps a copy</td><td>Buyer keeps the original; seller keeps a copy</td></tr>
<tr><td>Accounting role</td><td>Creates accounts receivable</td><td>Supports asset disposal and purchase records</td></tr>
</tbody></table>
<p>The invoice also differs from a receipt, which confirms payment was made. See our <a href="/blog/invoice-vs-receipt">invoice vs receipt guide</a>. In short: invoice asks for money, receipt confirms money, bill of sale confirms ownership.</p>

<h2>When do you need both an invoice and a bill of sale?</h2>
<p>Use both when payment terms matter and ownership of an identifiable item changes hands. Common scenarios:</p>
<ul>
<li><strong>A business selling used equipment</strong> on payment terms: invoice for the price and terms, bill of sale on final payment.</li>
<li><strong>A dealer or contractor selling a trailer or vehicle:</strong> invoice for the sale, bill of sale plus title for registration.</li>
<li><strong>Selling assets from a closing business:</strong> invoices for each buyer, bills of sale for valuable items.</li>
<li><strong>Farm sales of livestock:</strong> invoice for payment, bill of sale or brand inspection paperwork depending on the state.</li>
</ul>
<p>For everyday sales of inventory or services, an invoice and receipt are enough. A bakery does not issue a bill of sale for a wedding cake.</p>

<h2>Worked example: selling a used espresso machine</h2>
<p>A cafe owner upgrades equipment and sells a commercial espresso machine to another cafe for $3,500, with a $500 deposit and the balance due on pickup.</p>
<h3>Step 1: The invoice</h3>
<table><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Used commercial espresso machine, 2-group, model XR-200, serial SN-48213 (illustrative), sold as-is</td><td>1</td><td>$3,500.00</td><td>$3,500.00</td></tr>
<tr><td>Grinder burr set (spare)</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$3,620.00</td></tr>
<tr><td colspan="3">Sales tax (8.25%, illustrative)</td><td>$298.65</td></tr>
<tr><td colspan="3">Total</td><td>$3,918.65</td></tr>
<tr><td colspan="3">Less deposit received</td><td>-$500.00</td></tr>
<tr><td colspan="3"><strong>Balance due on pickup</strong></td><td><strong>$3,418.65</strong></td></tr>
</tbody></table>
<p>Whether the sale of used business equipment is taxable, and whether occasional-sale exemptions apply, depends on the state; check our <a href="/blog/sales-tax-by-state">sales tax by state guide</a> or the <a href="/tools/sales-tax-calculator">sales tax calculator</a> for rates. The seller creates this with a <a href="/invoice-generator">free invoice generator</a> and sends it when the deal is agreed.</p>
<h3>Step 2: The bill of sale</h3>
<p>On pickup, after the balance is paid, both owners sign a bill of sale that states: seller name and address, buyer name and address, the machine's make, model and serial number, the $3,500 price (plus the grinder burrs), the date, a statement that the seller owns the machine free of liens, the as-is clause, and signatures. The buyer keeps the original; the seller keeps a copy with the paid invoice.</p>

<h2>What should a bill of sale include? A checklist</h2>
<ol>
<li>Title: "Bill of Sale"</li>
<li>Date of sale and location (city and state)</li>
<li>Full legal names and addresses of seller and buyer</li>
<li>Detailed item description with identifying numbers (serial, VIN, hull ID)</li>
<li>For vehicles, odometer reading (federal law requires an odometer disclosure for many vehicle transfers)</li>
<li>Purchase price and how it was paid</li>
<li>Statement that the seller owns the item and has the right to sell it</li>
<li>Liens or encumbrances, or a statement that there are none</li>
<li>Warranty terms or an as-is clause</li>
<li>Signatures of seller and buyer, and notary block if your state requires it</li>
</ol>
<p>Some state motor vehicle agencies provide their own bill of sale forms. If one exists for your transaction, use it.</p>

<h2>Invoice vs bill of sale vs other sales documents</h2>
<table><thead><tr><th>Document</th><th>What it does</th><th>Related guide</th></tr></thead><tbody>
<tr><td>Quote or estimate</td><td>Proposes a price before the sale</td><td><a href="/blog/quote-vs-estimate">Quote vs estimate</a></td></tr>
<tr><td>Purchase order</td><td>Buyer's formal order</td><td><a href="/blog/invoice-vs-purchase-order">Invoice vs purchase order</a></td></tr>
<tr><td>Sales order</td><td>Seller's confirmation of an order</td><td><a href="/blog/invoice-vs-sales-order">Invoice vs sales order</a></td></tr>
<tr><td>Packing slip</td><td>Lists items in a shipment</td><td><a href="/blog/packing-slip-vs-invoice">Packing slip vs invoice</a></td></tr>
<tr><td>Invoice</td><td>Requests payment</td><td>This guide</td></tr>
<tr><td>Receipt</td><td>Confirms payment</td><td><a href="/blog/payment-receipt-template">Payment receipt template</a></td></tr>
<tr><td>Bill of sale</td><td>Transfers ownership</td><td>This guide</td></tr>
</tbody></table>
<p>Note that a "bill" in everyday language usually means an invoice you have received, which is different again from a bill of sale. Our <a href="/blog/invoice-vs-bill">invoice vs bill guide</a> covers that naming confusion.</p>

<h2>How does ownership transfer, legally?</h2>
<p>For goods, the Uniform Commercial Code (adopted in some form by every US state) governs when title passes. Unless the parties agree otherwise, title to goods generally passes when the seller completes delivery. Parties often agree that title passes only on full payment, which is why businesses selling on credit include retention-of-title or security interest language in their terms. A bill of sale records the moment and terms of transfer so there is no argument later.</p>
<p>For titled property such as cars, trucks, motorcycles, boats and trailers, state law adds a separate step: the certificate of title must be signed over and the buyer must register the transfer with the state agency, often within a set number of days. In those cases, the bill of sale supports the title transfer but does not replace it. Some states require a bill of sale for registration, and some require it to be notarized.</p>

<h2>Bill of sale for business assets vs everyday inventory</h2>
<p>Businesses sell two kinds of things: inventory (goods bought or made for resale) and business assets (equipment, vehicles and furniture used to run the business). The paperwork differs:</p>
<table><thead><tr><th>Sale</th><th>Typical documents</th><th>Bill of sale needed?</th></tr></thead><tbody>
<tr><td>Retail sale of inventory</td><td>Receipt or invoice</td><td>No</td></tr>
<tr><td>Wholesale order of inventory</td><td>Purchase order, invoice, packing slip</td><td>No</td></tr>
<tr><td>Sale of used equipment</td><td>Invoice, bill of sale</td><td>Recommended</td></tr>
<tr><td>Sale of a company vehicle</td><td>Invoice or agreement, bill of sale, signed title, odometer disclosure</td><td>Yes in practice</td></tr>
<tr><td>Sale of the whole business (asset sale)</td><td>Asset purchase agreement, bill of sale, assignment of contracts</td><td>Yes</td></tr>
</tbody></table>
<p>Whenever you invoice for a large sale, consider whether ownership also needs to be recorded separately. For the payment side of an asset sale, a clear invoice with the serial number or VIN in the line description links the two documents together.</p>

<h2>Tax and record-keeping points</h2>
<ul>
<li><strong>For sellers:</strong> The sale of a business asset may create a gain or loss for income tax, based on the sale price compared with the asset's adjusted basis after depreciation. Keep the invoice and bill of sale as support. The IRS explains asset sales in <a href="https://www.irs.gov/publications/p544" rel="noopener">Publication 544, Sales and Other Dispositions of Assets</a>.</li>
<li><strong>For buyers:</strong> The bill of sale and paid invoice support the purchase price as the asset's cost basis for depreciation.</li>
<li><strong>Sales tax:</strong> Businesses that sell taxable goods regularly usually need a <a href="/blog/sellers-permit">seller's permit</a>. Vehicle sales tax is often collected at registration.</li>
<li><strong>Retention:</strong> Keep both documents for as long as you own the asset plus the period you could be audited for the year you sell it.</li>
</ul>

<h2>Can a bill of sale be electronic?</h2>
<p>For most goods, yes. The federal ESIGN Act and the Uniform Electronic Transactions Act, adopted by nearly every state, generally give electronic signatures and records the same legal effect as paper. Vehicle and boat transfers are the main exception in practice, because many state agencies still require original signed titles and their own forms. When in doubt, sign a paper copy for titled property and keep a scan.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating an unpaid invoice as proof of ownership.</strong> Title usually passes on full payment unless the contract says otherwise.</li>
<li><strong>Signing the bill of sale before payment clears.</strong> If a check bounces, you have already documented the transfer.</li>
<li><strong>Vague item descriptions.</strong> "Used truck" is not enough. Include the VIN or serial number.</li>
<li><strong>Leaving out lien information.</strong> Buyers need to know if a lender has a claim on the item.</li>
<li><strong>Skipping the as-is or warranty statement.</strong> Silence can create disputes about what was promised.</li>
<li><strong>Not keeping copies.</strong> Sellers may need proof of the sale date for liability and tax purposes.</li>
</ul>

<p>A final tip for sellers: number your bills of sale the same way you number invoices, or reference the invoice number on the bill of sale. If you sell several pieces of equipment over a year, a simple cross-reference (for example, "Bill of sale for invoice INV-2026-118") makes it easy to match the documents for your accountant, the buyer's lender or an insurance claim. Store both in the same folder as the asset's original purchase records so the full history from purchase to sale is in one place.</p>

<h2>Invoice vs bill of sale: the bottom line</h2>
<p>The invoice vs bill of sale distinction is simple once you separate money from ownership. Send an invoice to request payment and set terms, issue a receipt once you are paid, and sign a bill of sale when ownership of a specific item changes hands, especially for vehicles, equipment and other high-value property. For the payment side, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a downloadable PDF in your browser.</p>
`,
  },
  {
    slug: "quickbooks-vs-excel",
    title: "QuickBooks vs Excel: When Spreadsheets Stop Working",
    description:
      "QuickBooks vs Excel for small business bookkeeping: real costs, what each does well, signs you have outgrown spreadsheets and how to switch safely.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "quickbooks-online-vs-desktop",
      "invoice-tracker-spreadsheet",
      "quickbooks-alternatives",
    ],
    faqs: [
      {
        q: "Can I run a small business on Excel instead of QuickBooks?",
        a: "Yes, many very small businesses do, especially sole proprietors with one bank account, few transactions and no employees or inventory. Excel can track income, expenses and invoices, and produce a simple profit and loss. It becomes risky as volume grows, because there are no bank feeds, no built-in double-entry checks and no audit trail, and errors in formulas can go unnoticed.",
      },
      {
        q: "Is Excel accepted by the IRS for bookkeeping?",
        a: "The IRS does not require any particular software. It requires records that clearly show income and expenses and are supported by documents such as invoices, receipts, bank statements and canceled checks. A well-kept spreadsheet with source documents can meet that standard. The IRS discusses record keeping in Publication 583, which explains what to keep and for how long.",
      },
      {
        q: "How much does QuickBooks cost compared with Excel?",
        a: "As of October 2026, QuickBooks Online lists at $38 to $340 a month depending on the plan, before any promotion, payroll or payment fees. Excel is included in many Microsoft 365 subscriptions, and a free web version is available with a Microsoft account. So Excel is cheaper in software cost, but you pay with your time for manual entry and reconciliation.",
      },
      {
        q: "Can I import my Excel data into QuickBooks?",
        a: "Yes. QuickBooks Online lets you import customers, vendors, products and services, chart of accounts and some transactions such as invoices and bank transactions from spreadsheet or CSV files. Clean the data first: consistent names, dates and amounts in separate columns. Many businesses import lists and opening balances only, and start transactions fresh from a cutover date.",
      },
      {
        q: "Is Google Sheets a good alternative to Excel for bookkeeping?",
        a: "For a very small business, Google Sheets works much like Excel and makes sharing with a bookkeeper easy. It has the same weaknesses: no bank feeds, no double-entry enforcement and easy-to-break formulas. Use version history and protected ranges, keep a backup, and treat it as a stepping stone to accounting software as your transaction volume grows.",
      },
      {
        q: "What does QuickBooks do that Excel cannot?",
        a: "QuickBooks connects to bank and card accounts to import transactions, enforces double-entry bookkeeping so the books balance, tracks unpaid invoices and bills automatically, accepts online invoice payments, handles sales tax and payroll with add-ons, keeps an audit log, and produces standard financial reports instantly. Excel can imitate parts of this with effort but does not do it automatically.",
      },
      {
        q: "Will my accountant prefer QuickBooks over Excel?",
        a: "Most accountants prefer accounting software because it saves them cleanup time and makes adjustments easier, and many charge more to work from spreadsheets. That said, a tidy, reconciled spreadsheet is better than messy software data. Ask your accountant before switching; many will recommend a specific system and can help with setup.",
      },
      {
        q: "Are there free alternatives to both QuickBooks and Excel?",
        a: "Yes. Some accounting tools offer free plans with invoicing and basic bookkeeping, and free spreadsheet apps exist too. A common low-cost setup is a free invoice generator for billing, a spreadsheet tracker for payments and expenses, and a separate business bank account. Compare free accounting software options before paying for QuickBooks if your needs are simple.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Excel is a general spreadsheet you can shape into a simple bookkeeping system; it is cheap and flexible but fully manual. QuickBooks is accounting software that imports bank transactions, enforces double-entry, tracks invoices and bills, and produces reports automatically. Excel suits very small, simple businesses; QuickBooks pays off as transactions, staff or tax complexity grow.</p>

<p>Most businesses start their books in a spreadsheet. The QuickBooks vs Excel question usually arrives later, when month-end takes a weekend, an invoice slips through the cracks, or a tax preparer sends back a bill for cleanup. This guide compares costs and capabilities, lists the warning signs that a spreadsheet has stopped working, and gives a step-by-step plan to switch.</p>

<h2>What is the difference between QuickBooks and Excel for bookkeeping?</h2>
<p><strong>Microsoft Excel</strong> is a spreadsheet program. You design the structure: an income log, an expense log, an invoice tracker, and formulas to total them. Nothing stops you from entering an amount twice or forgetting one.</p>
<p><strong>QuickBooks</strong> (usually QuickBooks Online for new users) is purpose-built accounting software. Every transaction posts to a chart of accounts using double-entry rules, so the balance sheet always balances. Bank feeds pull in transactions, and reports such as profit and loss, balance sheet and AR aging are generated instantly. If you are deciding between the QuickBooks versions themselves, see <a href="/blog/quickbooks-online-vs-desktop">QuickBooks Online vs Desktop</a>.</p>

<h2>QuickBooks vs Excel: side-by-side comparison</h2>
<table><thead><tr><th>Capability</th><th>Excel (or Google Sheets)</th><th>QuickBooks Online</th></tr></thead><tbody>
<tr><td>Software cost</td><td>Included in many Microsoft 365 plans; free web version</td><td>$38 to $340/month list price as of October 2026</td></tr>
<tr><td>Bank and card feeds</td><td>No; download and paste CSV files</td><td>Yes, automatic</td></tr>
<tr><td>Double-entry checks</td><td>Only if you build them</td><td>Built in</td></tr>
<tr><td>Invoicing</td><td>Template, manual numbering, manual tracking</td><td>Numbered invoices, online payments, reminders</td></tr>
<tr><td>Accounts receivable tracking</td><td>Manual status column</td><td>Automatic AR aging</td></tr>
<tr><td>Bills and payables</td><td>Manual list</td><td>Bills, due dates, bill pay (plan dependent)</td></tr>
<tr><td>Sales tax</td><td>Manual formulas</td><td>Sales tax tracking and reports</td></tr>
<tr><td>Payroll</td><td>No</td><td>Add-on</td></tr>
<tr><td>Audit trail</td><td>Limited (version history)</td><td>Audit log of changes</td></tr>
<tr><td>Accountant access</td><td>Share a file</td><td>Dedicated accountant user</td></tr>
<tr><td>Flexibility</td><td>Unlimited custom analysis</td><td>Standard reports, custom report builder on higher plans</td></tr>
</tbody></table>
<p>QuickBooks pricing is from Intuit's <a href="https://quickbooks.intuit.com/pricing/" rel="noopener">pricing page</a>, checked October 2026. Check Microsoft's site for current Microsoft 365 plans that include the Excel desktop app.</p>

<h2>What Excel does well</h2>
<ul>
<li><strong>Low cost:</strong> No extra subscription if you already have Microsoft 365.</li>
<li><strong>Total control:</strong> Track exactly the columns you care about, such as client, project or mileage.</li>
<li><strong>Analysis:</strong> Pivot tables, charts and what-if models beat most accounting software reports.</li>
<li><strong>Simple invoices:</strong> Our guide to <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a> shows how to build a reusable template.</li>
<li><strong>Learning:</strong> Building your own ledger teaches you how money moves through the business.</li>
</ul>
<p>Even QuickBooks users keep Excel for budgets and forecasts. If you want AI help with formulas, see our guide to <a href="/blog/chatgpt-for-excel">using ChatGPT for Excel</a>.</p>

<h2>When do spreadsheets stop working? 10 warning signs</h2>
<ol>
<li>You have more than about 50 to 100 transactions a month and categorizing them takes hours.</li>
<li>You use more than one bank account or credit card.</li>
<li>You cannot quickly answer "who owes me money, and how late is it?"</li>
<li>You have found a formula error that changed a total.</li>
<li>You pay employees or need to file payroll taxes.</li>
<li>You track inventory or cost of goods sold.</li>
<li>You collect sales tax in one or more states.</li>
<li>Your accountant charges for cleanup, or asks you to switch.</li>
<li>A lender or investor wants a balance sheet and you cannot produce one.</li>
<li>More than one person edits the file and versions conflict.</li>
</ol>
<p>Three or more of these is a strong signal to move to accounting software, whether QuickBooks or one of the <a href="/blog/quickbooks-alternatives">cheaper QuickBooks alternatives</a>.</p>

<h2>Worked example: the real cost of staying in Excel</h2>
<p>A home-cleaning business has two bank accounts, one credit card and about 180 transactions a month, and invoices 40 recurring clients. The owner values their time at $40 an hour. Using illustrative time estimates:</p>
<table><thead><tr><th>Monthly task</th><th>Excel time</th><th>QuickBooks time</th></tr></thead><tbody>
<tr><td>Import and categorize transactions</td><td>4 hours</td><td>1.5 hours (bank feeds and rules)</td></tr>
<tr><td>Create and send 40 invoices</td><td>2 hours</td><td>0.5 hours (recurring invoices)</td></tr>
<tr><td>Match payments and chase late invoices</td><td>2 hours</td><td>0.5 hours (AR aging, reminders)</td></tr>
<tr><td>Reconcile 3 accounts</td><td>2 hours</td><td>1 hour</td></tr>
<tr><td><strong>Total time</strong></td><td><strong>10 hours</strong></td><td><strong>3.5 hours</strong></td></tr>
<tr><td>Value of time at $40/hour</td><td>$400</td><td>$140</td></tr>
<tr><td>Software cost</td><td>$0 extra</td><td>$85 (Essentials list price)</td></tr>
<tr><td><strong>Monthly total</strong></td><td><strong>$400</strong></td><td><strong>$225</strong></td></tr>
</tbody></table>
<p>In this example, software saves about $175 a month of owner time. For a freelancer with 15 transactions a month, the math reverses: Excel takes perhaps an hour, and a subscription would cost more than the time saved. The break-even point depends on your volume, not on a rule of thumb. Also count the cost of errors: one missed invoice of a few hundred dollars, or a tax preparer billing two extra hours to untangle a spreadsheet, can outweigh several months of subscription fees.</p>

<h2>What a basic Excel bookkeeping setup looks like</h2>
<p>If you stay with a spreadsheet, a minimal but reliable workbook has four tabs:</p>
<table><thead><tr><th>Tab</th><th>Columns</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Income</td><td>Date, client, invoice number, description, amount, payment method, date paid</td><td>Every sale and payment received</td></tr>
<tr><td>Expenses</td><td>Date, vendor, category, amount, payment method, receipt link</td><td>Every business cost, matched to receipts</td></tr>
<tr><td>Invoices</td><td>Invoice number, client, issue date, due date, amount, status, days overdue</td><td>Who owes you money</td></tr>
<tr><td>Summary</td><td>Monthly totals by category using SUMIFS, bank balance check</td><td>A simple profit and loss</td></tr>
</tbody></table>
<p>Use the same expense categories as Schedule C (advertising, car and truck expenses, contract labor, insurance, office expense, supplies, travel and so on) if you are a sole proprietor; it makes tax time much faster. The IRS explains what records to keep in <a href="https://www.irs.gov/publications/p583" rel="noopener">Publication 583, Starting a Business and Keeping Records</a>.</p>

<h2>Is QuickBooks the only option after Excel?</h2>
<p>No. QuickBooks is the most widely used small business accounting software in the US, and many accountants know it best, but several alternatives cover the same basics for less. Free or low-cost options exist for invoicing and simple bookkeeping, while tools such as Xero, Zoho Books and FreshBooks compete directly with QuickBooks Online. If your accountant uses QuickBooks, that alone can be a good reason to choose it, because shared access and familiar reports save fees. If you work alone and mostly invoice, a lighter tool may be the better step up from a spreadsheet.</p>
<p>A middle path also works for many freelancers: keep the spreadsheet as your ledger, but stop building invoices in Excel. Create them in a dedicated tool so numbering, totals and layout stay consistent, and log only the final figures. That removes the most error-prone part of a spreadsheet system without adding a subscription. Our <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a> is another option if you prefer to keep everything in sheets.</p>

<h2>How to keep Excel working longer</h2>
<p>If spreadsheets still fit, make them sturdier:</p>
<ul>
<li>Use a separate business bank account so every line in your statement belongs in the books.</li>
<li>Keep one tab per year with consistent columns: date, payee, description, category, amount, invoice number.</li>
<li>Use Excel tables and data validation for categories so totals do not break.</li>
<li>Reconcile to the bank statement every month and record the ending balance.</li>
<li>Track invoices in a dedicated sheet; our <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> has a ready layout.</li>
<li>Create invoices with a <a href="/invoice-generator">free invoice generator</a> and sequential numbers from the <a href="/tools/invoice-number-generator">invoice number generator</a>, then log each one.</li>
<li>Keep receipts in a folder that mirrors your spreadsheet categories.</li>
</ul>
<p>Our guide to <a href="/blog/bookkeeping-basics">bookkeeping basics</a> explains the categories and reports a spreadsheet should still produce.</p>

<h2>How to switch from Excel to QuickBooks</h2>
<ol>
<li><strong>Choose a start date.</strong> The first day of a month, quarter or year keeps opening balances simple.</li>
<li><strong>Close out the spreadsheet.</strong> Reconcile every account through the day before your start date.</li>
<li><strong>Pick the right plan.</strong> Check user, inventory and bill pay needs.</li>
<li><strong>Set up the chart of accounts</strong> to match your spreadsheet categories, ideally with your accountant.</li>
<li><strong>Import lists.</strong> Customers, vendors and products from CSV.</li>
<li><strong>Enter opening balances</strong> for bank accounts, credit cards, loans and owner's equity.</li>
<li><strong>Add open invoices and bills</strong> so AR and AP aging are correct from day one. Compare with your <a href="/blog/accounts-receivable-aging-report">AR aging report</a>.</li>
<li><strong>Connect bank feeds</strong> starting on your start date only.</li>
<li><strong>Keep the old spreadsheet</strong> read-only for history and tax records.</li>
</ol>

<h2>How does each handle invoices and getting paid?</h2>
<p>Invoicing is where the difference shows first for most service businesses. In Excel, you copy a template, change the number, type the line items, save a PDF, email it, and then remember to update your tracker when the client pays. Every step is manual, and the most common errors are duplicate invoice numbers, formulas that skip a new row, and payments never marked as received.</p>
<p>In QuickBooks Online, invoice numbers increment automatically, totals and sales tax are calculated for you, invoices can be emailed from the system with a pay button, reminders go out on a schedule, and payments match to the invoice automatically when they come through QuickBooks Payments or the bank feed. The trade-off is cost: card and ACH payments through QuickBooks carry processing fees, explained in our <a href="/blog/quickbooks-payments-fees">QuickBooks Payments fees guide</a>.</p>
<p>A good test of whether you have outgrown spreadsheets is to ask how long it takes to answer: which invoices are more than 30 days overdue right now? If the answer takes more than a minute, your invoicing system is costing you money in late payments.</p>

<h2>Common mistakes in the QuickBooks vs Excel decision</h2>
<ul>
<li><strong>Switching mid-month without a cutover plan.</strong> You end up with duplicates or gaps.</li>
<li><strong>Importing years of messy history.</strong> Start clean with opening balances instead.</li>
<li><strong>Assuming software fixes bad habits.</strong> You still need to review categories and reconcile.</li>
<li><strong>Paying for features you do not use.</strong> Start on the lowest plan that fits.</li>
<li><strong>Abandoning Excel entirely.</strong> It remains the best tool for budgets and forecasts.</li>
<li><strong>Not comparing alternatives.</strong> See <a href="/blog/wave-vs-quickbooks">Wave vs QuickBooks</a> if cost is the main concern.</li>
</ul>

<p>If you are on the fence, try a hybrid for one quarter: keep your spreadsheet, but run a QuickBooks Online trial (or a free accounting tool) side by side with your bank feed connected. At the end of the month, compare how long each took and whether the reports matched. Real numbers from your own business will settle the QuickBooks vs Excel question faster than any general rule, and your accountant can help you read the results.</p>

<h2>QuickBooks vs Excel: the bottom line</h2>
<p>For the QuickBooks vs Excel choice, start simple and upgrade when the warning signs appear. Excel is fine for a freelancer or tiny business with few transactions and one account. Once you have multiple accounts, employees, inventory, sales tax or dozens of invoices a month, accounting software saves more time than it costs. Either way, send consistent, numbered invoices: our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a downloadable PDF in your browser that you can log in your spreadsheet or QuickBooks.</p>
`,
  },
  {
    slug: "certified-check-vs-cashiers-check",
    title: "Certified Check vs Cashier's Check: Safety, Fees, Fraud",
    description:
      "Certified check vs cashier's check: who guarantees the funds, typical fees, how fast deposits clear, how to spot fakes and which to ask clients for.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["positive-pay-check-fraud", "how-to-write-a-check", "how-to-fill-out-a-money-order"],
    faqs: [
      {
        q: "Which is safer, a certified check or a cashier's check?",
        a: "A cashier's check is generally considered slightly safer because it is drawn on the bank's own funds and signed by a bank employee, so the bank itself is the payer. A certified check is the customer's personal check that the bank has verified and guaranteed. Both are far safer than a personal check when genuine, but both are frequently counterfeited, so always verify them.",
      },
      {
        q: "How much does a cashier's check cost?",
        a: "Banks typically charge a fee in the range of about $5 to $15 for a cashier's check, though amounts vary by bank and account type, and some premium or business accounts include them free. Credit unions are often cheaper. Check your bank's fee schedule. The fee is separate from the check amount, which is taken from your account when the check is issued.",
      },
      {
        q: "Can a cashier's check bounce?",
        a: "A genuine cashier's check should not bounce, because the bank guarantees it. However, counterfeit cashier's checks are common, and a fake one will be returned unpaid, sometimes weeks after the bank made the funds available. When that happens, the depositor is usually responsible for the full amount. That is why you should verify the check with the issuing bank before releasing goods.",
      },
      {
        q: "Can I stop payment on a cashier's check?",
        a: "Generally no, because the bank, not you, is the drawer. If a cashier's check is lost, stolen or destroyed, you can usually file a declaration of loss with the issuing bank. Under the Uniform Commercial Code, the claim generally becomes enforceable 90 days after the check's date, so expect a waiting period before the bank refunds or reissues it, and possibly a fee.",
      },
      {
        q: "Do banks still offer certified checks?",
        a: "Many large banks no longer issue certified checks and offer cashier's checks or official bank checks instead. Some banks and credit unions still provide them. If a contract or court specifically requires a certified check, call the bank in advance. Often the recipient will accept a cashier's check instead, but confirm in writing before you rely on that.",
      },
      {
        q: "How long does it take a cashier's check to clear?",
        a: "Under Federal Reserve Regulation CC, banks generally must make funds from cashier's, certified and teller's checks available by the next business day when deposited in person to the payee's account, subject to exceptions such as large deposits or new accounts. Availability is not the same as final clearing. A fake check can still be returned after the funds appear in your account.",
      },
      {
        q: "Should my business accept certified or cashier's checks?",
        a: "They can be useful for large one-off payments from customers you do not know well, such as equipment or vehicle sales. For regular clients, ACH or wire transfer is usually faster and harder to counterfeit. If you accept a cashier's check, verify it with the issuing bank using a phone number you look up yourself, and wait until the bank confirms the check has been paid before releasing goods.",
      },
      {
        q: "What is the difference between a cashier's check and a money order?",
        a: "Both are prepaid, but money orders are usually sold for smaller amounts, often capped around $1,000 per order, by post offices, retailers and banks. Cashier's checks are issued by banks for any amount and are better for large payments such as a down payment. Money orders are useful if you do not have a bank account or need a low-cost option for small amounts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A certified check is your own personal check that your bank verifies and guarantees by setting aside the funds. A cashier's check is written by the bank on its own funds and signed by a bank officer. Both are guaranteed payments, but cashier's checks are more widely available and slightly safer; both are often faked.</p>

<p>When a large payment needs to be guaranteed, such as a vehicle purchase, an equipment sale, a deposit on a lease or a settlement, the other party may ask for a certified check or a cashier's check. The certified check vs cashier's check difference matters for how much protection you get, what it costs and how you verify it. This guide covers the definitions, fees, clearing times, fraud risks and how businesses should handle each.</p>

<h2>What is a certified check?</h2>
<p>A certified check is a check written by an account holder on their own checking account. The bank verifies the signature and that the money is available, then sets those funds aside and stamps or marks the check as certified. Because the bank has guaranteed it, the check should not bounce for lack of funds.</p>
<p>The money still comes from your account, and the check carries your name as the drawer. Fewer banks offer certified checks today, and many large banks have replaced them with cashier's or official checks.</p>

<h2>What is a cashier's check?</h2>
<p>A cashier's check is drawn on the bank's own account. You pay the bank the amount (plus a fee), and the bank issues a check payable to your recipient, signed by a bank employee. The bank is the payer, so the guarantee comes directly from the institution. The OCC's <a href="https://www.helpwithmybank.gov/help-topics/bank-accounts/cashiers-checks/index.html" rel="noopener">HelpWithMyBank guidance on cashier's checks</a> explains common questions about how they work.</p>
<p>Related instruments include teller's checks (drawn by a bank on another bank) and money orders, which are prepaid but usually for smaller amounts. See our guide on <a href="/blog/how-to-fill-out-a-money-order">how to fill out a money order</a>.</p>

<h2>Certified check vs cashier's check: comparison table</h2>
<table><thead><tr><th>Factor</th><th>Certified check</th><th>Cashier's check</th></tr></thead><tbody>
<tr><td>Whose funds</td><td>The account holder's, set aside by the bank</td><td>The bank's own funds</td></tr>
<tr><td>Who signs</td><td>Account holder</td><td>Bank employee or officer</td></tr>
<tr><td>Guarantee</td><td>Bank certifies funds are available</td><td>Bank is the drawer and pays it</td></tr>
<tr><td>Availability</td><td>Fewer banks offer them</td><td>Offered by most banks and credit unions</td></tr>
<tr><td>Typical fee</td><td>Often similar to a cashier's check, varies by bank</td><td>Often about $5 to $15, varies by bank and account</td></tr>
<tr><td>Need an account?</td><td>Yes, a checking account</td><td>Usually yes, at the issuing bank</td></tr>
<tr><td>Stop payment</td><td>Generally not possible once certified</td><td>Generally not possible; lost-check claims take time</td></tr>
<tr><td>Funds availability for the depositor</td><td>Usually next business day under Regulation CC</td><td>Usually next business day under Regulation CC</td></tr>
<tr><td>Counterfeit risk</td><td>High</td><td>High</td></tr>
</tbody></table>
<p>Fees above are illustrative ranges; check your bank's current fee schedule.</p>

<h2>How fast do certified and cashier's checks clear?</h2>
<p>Federal Reserve Regulation CC requires banks to make funds from cashier's, certified and teller's checks available quickly, generally by the next business day when you deposit them in person into an account in the payee's name, with some exceptions for large deposits, new accounts and other cases. Mobile and ATM deposits can take a little longer.</p>
<p>The trap is that <strong>available is not the same as cleared</strong>. Your bank may let you withdraw the money before it learns the check is fake. If the check is returned as counterfeit days or weeks later, the bank reverses the deposit and you owe the money back. For large amounts, that risk is why many businesses prefer wires; see <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> and our guide to <a href="/blog/wire-transfer-fees">wire transfer fees</a>.</p>

<h2>Fake cashier's check scams: how they work and how to verify</h2>
<p>The Federal Trade Commission warns that fake check scams often involve realistic cashier's checks. A typical pattern: a buyer sends a cashier's check for more than the invoice amount and asks you to wire back the difference, or to forward money to a "shipper." By the time the check bounces, your money is gone. Read the <a href="https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" rel="noopener">FTC guide to fake check scams</a>.</p>
<h3>Verification steps</h3>
<ol>
<li><strong>Look up the issuing bank's phone number yourself</strong> from its official website. Do not use the number printed on the check.</li>
<li><strong>Call and give the check number, amount, date and payee</strong>, and ask whether the bank issued it and whether it is still outstanding.</li>
<li><strong>Inspect the check.</strong> Look for a watermark, microprinting, a bank officer signature and a properly printed routing number. Poor print quality is a warning sign, but good print quality proves nothing.</li>
<li><strong>Deposit and wait.</strong> Ask your own bank when the check has actually been paid by the issuing bank, not just when funds are available.</li>
<li><strong>Never refund an overpayment</strong> or release valuable goods until the check has fully cleared.</li>
<li><strong>Better still, go to the bank together.</strong> For vehicle or equipment sales, meet the buyer at their bank and watch the teller issue the check.</li>
</ol>
<p>Businesses that write their own checks face fraud too; our guide to <a href="/blog/positive-pay-check-fraud">positive pay and check fraud</a> explains how banks help prevent altered or counterfeit checks on your account.</p>

<h2>Worked example: selling a work truck</h2>
<p>A landscaping company sells a used work truck to a private buyer for $18,500. The buyer offers a cashier's check.</p>
<table><thead><tr><th>Step</th><th>What happens</th><th>Why</th></tr></thead><tbody>
<tr><td>1. Invoice</td><td>The company sends an invoice for $18,500, payable by cashier's check or wire, due before pickup</td><td>Sets the price, VIN and terms in writing</td></tr>
<tr><td>2. Meet at the buyer's bank</td><td>Teller issues a cashier's check for exactly $18,500 payable to the company's legal name</td><td>Removes counterfeit risk and overpayment schemes</td></tr>
<tr><td>3. Deposit</td><td>Company deposits the check in person the same day</td><td>Next-business-day availability under Regulation CC</td></tr>
<tr><td>4. Bill of sale and title</td><td>Signed once payment is confirmed; buyer takes the truck</td><td>Documents ownership transfer</td></tr>
<tr><td>5. Receipt</td><td>Company marks the invoice paid and sends a receipt</td><td>Closes the record for bookkeeping and tax</td></tr>
</tbody></table>
<p>The bank fee for the cashier's check, perhaps $10, is paid by the buyer. Our <a href="/blog/bill-of-sale-template">bill of sale template</a> covers step 4, and you can create the invoice in step 1 with a <a href="/invoice-generator">free invoice generator</a>, listing accepted payment methods clearly.</p>

<h2>How to get a cashier's or certified check</h2>
<ol>
<li>Confirm the exact payee name and amount with the recipient.</li>
<li>Visit your bank branch with ID (some banks allow online ordering with mail delivery).</li>
<li>Make sure you have the amount plus the fee in your account.</li>
<li>Ask for a cashier's check, or a certified check if the recipient specifically requires one and your bank offers it.</li>
<li>Keep the receipt or carbon copy; you will need it if the check is lost.</li>
<li>Deliver the check securely, ideally in person, and get a receipt.</li>
</ol>
<p>If you are writing a regular check instead, follow our guide on <a href="/blog/how-to-write-a-check">how to write a check</a>.</p>

<h2>Should businesses accept these checks or use electronic payments?</h2>
<p>Paper checks are in decline. The federal government has been phasing out paper checks for its own payments, as we cover in our article on the <a href="/blog/us-paper-checks-phase-out">US paper check phase-out</a>. For business-to-business invoices, electronic payments are usually better:</p>
<table><thead><tr><th>Method</th><th>Guaranteed?</th><th>Speed</th><th>Main risk</th></tr></thead><tbody>
<tr><td>Cashier's check</td><td>Yes, if genuine</td><td>Next-day availability; final clearing can take longer</td><td>Counterfeits</td></tr>
<tr><td>Certified check</td><td>Yes, if genuine</td><td>Same as cashier's check</td><td>Counterfeits; fewer banks offer them</td></tr>
<tr><td>Wire transfer</td><td>Final once received</td><td>Same day domestically, usually</td><td>Sending to a fraudster's account by mistake</td></tr>
<tr><td>ACH</td><td>Can be returned in some cases</td><td>Same day to a few days</td><td>Returns for insufficient funds or unauthorized debits</td></tr>
<tr><td>Escrow</td><td>Funds held by a third party</td><td>Depends on conditions</td><td>Fees; use a licensed escrow service</td></tr>
</tbody></table>
<p>See our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> and our guide to <a href="/blog/escrow-payments">escrow payments</a> for high-value deals.</p>

<h2>What should an invoice say about check payments?</h2>
<p>If you accept checks, make your requirements clear before the buyer goes to the bank. Useful lines on an invoice or quote:</p>
<ul>
<li>Payee name exactly as it should appear, for example "Make checks payable to Greenline Landscaping LLC"</li>
<li>Which checks you accept, for example "Cashier's checks accepted for amounts over $5,000; personal checks not accepted for vehicle sales"</li>
<li>When goods are released, for example "Equipment released after the check is confirmed paid by the issuing bank"</li>
<li>Electronic alternatives with your bank details, for buyers who prefer a wire or ACH</li>
<li>The invoice number to write in the memo line</li>
</ul>
<p>Putting these terms in writing protects you if a buyer argues about delays, and it filters out many scam attempts, because fraudsters prefer sellers who release goods quickly. If you need help formatting payment details, see our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</p>

<h2>Certified check vs cashier's check for common situations</h2>
<table><thead><tr><th>Situation</th><th>Usually requested</th><th>Tip</th></tr></thead><tbody>
<tr><td>Private vehicle or equipment sale</td><td>Cashier's check</td><td>Meet at the buyer's bank and watch it being issued</td></tr>
<tr><td>Real estate closing</td><td>Wire transfer or cashier's check</td><td>Confirm wire instructions by phone with the title company; wire fraud is common</td></tr>
<tr><td>Rental security deposit</td><td>Cashier's check or money order</td><td>Get a receipt from the landlord</td></tr>
<tr><td>Court payments or settlements</td><td>Certified or cashier's check</td><td>Check the court's or agency's exact requirement</td></tr>
<tr><td>Regular business invoices</td><td>ACH, card or business check</td><td>Guaranteed checks are rarely needed for repeat clients</td></tr>
</tbody></table>

<h2>Common mistakes</h2>
<ul>
<li><strong>Trusting a check because it is "certified" or "cashier's."</strong> These are the most commonly faked types.</li>
<li><strong>Calling the number printed on the check.</strong> Scammers print their own numbers.</li>
<li><strong>Confusing availability with clearing.</strong> Funds can appear before the check is confirmed good.</li>
<li><strong>Accepting overpayments.</strong> A request to send back the difference is a classic scam.</li>
<li><strong>Losing the purchase receipt.</strong> It is your evidence if you need to file a lost-check claim.</li>
<li><strong>Not specifying the payee name.</strong> Checks made out to a trade name your bank does not recognize can be refused.</li>
</ul>

<h2>What if you lose a cashier's check?</h2>
<p>Contact the issuing bank immediately with your purchase receipt. The bank will usually ask you to sign a declaration of loss, and under the Uniform Commercial Code a claim on a lost cashier's, teller's or certified check generally becomes enforceable 90 days after the check's date. The bank may also require an indemnity bond for large amounts. Until then, the money is not available to you, so treat these checks like cash, deliver them in person where possible, and never mail one without tracking.</p>

<h2>Certified check vs cashier's check: the bottom line</h2>
<p>In the certified check vs cashier's check comparison, a cashier's check is the more common and slightly stronger guarantee because the bank itself is the payer, while a certified check is your own check backed by the bank. Both are useful for large one-off payments, and both are heavily counterfeited, so verify every one with the issuing bank before releasing goods. For everyday billing, list your preferred payment methods on every invoice: our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a downloadable PDF in your browser.</p>
`,
  },
];
