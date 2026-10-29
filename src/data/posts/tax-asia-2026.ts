import type { PostDraft } from "../blog";

export const TAX_ASIA_2026_POSTS: PostDraft[] = [
  {
    slug: "zatca-phase-2-wave-25",
    title: "ZATCA Phase 2 Wave 25: SAR 187,500 Checklist",
    description:
      "ZATCA Phase 2 Wave 25 readiness checklist: who is in scope at SAR 187,500, the 1 February 2027 deadline, Fatoora onboarding steps and common integration errors.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Saudi Arabia",
    related: ["zatca-e-invoicing-guide", "qr-code-on-invoice", "arabic-english-invoice"],
    faqs: [
      {
        q: "I have not received a ZATCA notification. Am I still in Wave 25?",
        a: "Possibly. ZATCA says it notifies selected taxpayers directly, generally at least six months before the integration date, but scope is set by the revenue criterion, not by whether a message reached you. If your VAT-taxable revenue exceeded SAR 187,500 in any of 2022, 2023, 2024 or 2025, check your status on the Fatoora portal and ask your adviser rather than assume you are out.",
      },
      {
        q: "My revenue fell below SAR 187,500 in 2025. Does Wave 25 still apply?",
        a: "Based on the published criterion, yes if any one of the four years (2022 to 2025) was above SAR 187,500. The test is not limited to your latest year, so a single strong year can bring you into scope. Confirm with ZATCA if your situation is unusual, such as a deregistration or a business transfer.",
      },
      {
        q: "Can I ask ZATCA for an extension beyond 1 February 2027?",
        a: "ZATCA has not published a general extension for Wave 25 at the time of writing. Do not plan around one. If you have a genuine technical barrier, raise it with ZATCA through its official channels early and keep a record of your correspondence and your readiness work.",
      },
      {
        q: "Do I need a new invoicing system for Phase 2, or can I upgrade my current one?",
        a: "You can keep your current ERP, accounting or POS system if its vendor supports Phase 2 integration: generating UBL 2.1 XML, signing invoices, chaining hashes and calling ZATCA's APIs. Many small businesses switch because their existing tool cannot do this. Ask the vendor to show a completed onboarding, not just a feature list.",
      },
      {
        q: "Does Wave 25 affect my Phase 1 obligations?",
        a: "No, Phase 1 continues to apply. You still need a compliant electronic solution, no handwritten invoices, Arabic content, QR codes on simplified invoices and no editing of issued invoices. Wave 25 adds the integration layer on top: connecting that solution to ZATCA's Fatoora platform.",
      },
      {
        q: "What happens to invoices I issue on the go-live day if my integration fails?",
        a: "Plan for this before go-live. Ask your vendor how its solution queues simplified invoices for reporting within the 24-hour window and how it handles standard invoices that cannot be cleared immediately. ZATCA's technical guidelines describe expected behavior, so make sure your provider has tested outage scenarios.",
      },
      {
        q: "How much does a ZATCA Phase 2 solution cost?",
        a: "It depends on the vendor and how many invoicing units you need. Pricing models include per invoice, per device or branch, and monthly subscriptions, sometimes with setup fees. Compare at least two providers on their official pricing pages at the time of writing, and ask what is included, such as onboarding support, archiving and credit note handling.",
      },
      {
        q: "Does Phase 2 apply to non-resident businesses registered for Saudi VAT?",
        a: "Generally no. ZATCA's e-invoicing regulation applies to resident taxable persons and to those issuing invoices on their behalf, and non-residents are reported to be outside its scope. Non-resident suppliers still have VAT obligations, though. If your business has a Saudi branch or other presence, take advice on whether you are treated as resident.",
      },
      {
        q: "Do I need to resubmit invoices issued before my integration date?",
        a: "No. Phase 2 clearance and reporting apply to invoices issued from your integration date. Invoices issued before then remain under the Phase 1 rules and should be kept in your records for the required retention period. Credit or debit notes issued after go-live that relate to older invoices should go through your integrated system.",
      },
      {
        q: "Do credit notes and debit notes go through ZATCA too?",
        a: "Yes. After integration, credit and debit notes follow the same route as the invoice they adjust: notes linked to standard tax invoices are cleared by ZATCA, and notes linked to simplified invoices are reported within 24 hours. Each note must reference the original invoice and give a reason. Check that your solution supports partial returns before go-live.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> ZATCA Phase 2 Wave 25 covers VAT-registered businesses in Saudi Arabia whose VAT-taxable revenue exceeded SAR 187,500 in any of 2022, 2023, 2024 or 2025. They must integrate their e-invoicing solution with ZATCA's Fatoora platform by 1 February 2027. That leaves roughly 14 weeks from late October 2026 to choose a compliant system, onboard every invoicing unit and test.</p>

<p>Wave 25 is the widest ZATCA Phase 2 wave so far. The threshold halves Wave 24's SAR 375,000, and for the first time 2025 revenue counts. This post is a practical readiness checklist for Wave 25 specifically. If you need the background first (Phase 1 vs Phase 2, standard vs simplified invoices, invoice fields), read our full <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> and come back.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. ZATCA can update its technical rules and wave announcements. Confirm your status on ZATCA's official <a href="https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx" target="_blank" rel="noopener noreferrer">Wave 25 announcement</a> and the <a href="https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx" target="_blank" rel="noopener noreferrer">ZATCA e-invoicing pages</a>, or ask a Saudi tax adviser.</p>

<h2>What is ZATCA Phase 2 Wave 25?</h2>
<p>ZATCA rolls out Phase 2 (the "integration phase") in waves. Each wave is defined by VAT-taxable revenue in past years, and taxpayers in that wave must connect their e-invoicing solution to Fatoora by a fixed date. ZATCA announced Wave 25 in July 2026, and a ZATCA Governor's decision published in the Official Gazette sets the compliance date.</p>
<table><thead><tr><th></th><th>Wave 24</th><th>Wave 25</th></tr></thead><tbody>
<tr><td>Revenue criterion</td><td>Over SAR 375,000 (in 2022 or 2023)</td><td>Over SAR 187,500 in 2022, 2023, 2024 or 2025</td></tr>
<tr><td>Integration deadline</td><td>30 June 2026</td><td>1 February 2027</td></tr>
<tr><td>Years tested</td><td>Two</td><td>Four, including 2025 for the first time</td></tr>
</tbody></table>
<p>SAR 187,500 is also the voluntary VAT registration threshold in Saudi Arabia (mandatory registration starts at SAR 375,000). In practice, Wave 25 reaches most small VAT-registered businesses that were not already covered by earlier waves.</p>

<h2>Who must comply with Wave 25?</h2>
<p>You are likely in Wave 25 if all of the following are true:</p>
<ul>
<li>You are a resident taxpayer registered for VAT in Saudi Arabia.</li>
<li>Your VAT-taxable revenue was more than SAR 187,500 in at least one of 2022, 2023, 2024 or 2025.</li>
<li>You were not already selected in an earlier wave.</li>
</ul>
<p>Revenue here means the revenue subject to VAT, as reported in your VAT returns. Use your filed returns, not management accounts, to check each year. Certain categories are excluded from e-invoicing entirely under ZATCA's regulation, so confirm whether an exclusion applies to you before assuming either way.</p>

<h3>Worked example: does this business cross SAR 187,500?</h3>
<p>A Jeddah interior design studio registered for VAT voluntarily. Its VAT-taxable revenue, taken from its returns:</p>
<table><thead><tr><th>Year</th><th>VAT-taxable revenue (SAR)</th><th>Above SAR 187,500?</th></tr></thead><tbody>
<tr><td>2022</td><td>148,000</td><td>No</td></tr>
<tr><td>2023</td><td>171,500</td><td>No</td></tr>
<tr><td>2024</td><td>184,900</td><td>No (SAR 2,600 below)</td></tr>
<tr><td>2025</td><td>203,750</td><td>Yes (SAR 16,250 above)</td></tr>
</tbody></table>
<p>The arithmetic: 184,900 is 2,600 short of 187,500, but 203,750 minus 187,500 = 16,250 over. One qualifying year is enough, so the studio is in Wave 25 and must integrate by 1 February 2027. Under the Wave 24 rules it would have stayed out, because neither its 2022 nor 2023 revenue came close to SAR 375,000.</p>

<h2>What ZATCA integration requires in practice</h2>
<p>ZATCA e-invoicing requirements for the integration phase are technical, but you only need to understand what your system must do, not how to code it:</p>
<ul>
<li><strong>Structured XML:</strong> every tax invoice, credit note and debit note is produced as UBL 2.1 XML (a PDF/A-3 with the XML embedded can be shared as the readable copy).</li>
<li><strong>Cryptographic stamp:</strong> each invoicing unit (ZATCA calls it an EGS unit, an e-invoice generation solution) holds a cryptographic stamp identifier (CSID) and signs every invoice.</li>
<li><strong>Hash chain and counter:</strong> each invoice carries a UUID, its own hash, the previous invoice's hash and an invoice counter, so gaps or edits are detectable.</li>
<li><strong>Clearance for standard invoices:</strong> B2B standard tax invoices are sent to ZATCA and must be cleared before you share them with the buyer.</li>
<li><strong>Reporting for simplified invoices:</strong> B2C simplified invoices are given to the customer first and reported to ZATCA within 24 hours.</li>
<li><strong>QR code:</strong> mandatory on simplified invoices and including cryptographic data in Phase 2. Our explainer on the <a href="/blog/qr-code-on-invoice">QR code on an invoice</a> compares ZATCA's QR with other countries' versions.</li>
</ul>
<p>This is a clearance-style model, the same family as India and Turkey rather than Europe's Peppol networks. Our comparison of the <a href="/blog/peppol-vs-clearance-model">clearance model vs Peppol</a> explains the difference if you also trade with the EU or the UAE.</p>

<h2>Fatoora integration: the onboarding steps</h2>
<p>Fatoora integration follows the same sequence for every wave. Your software provider usually drives the technical parts, but you control the portal access and the one-time passwords.</p>
<ol>
<li><strong>Log in to the Fatoora portal</strong> with your ZATCA credentials and confirm the business details ZATCA holds for you.</li>
<li><strong>Generate a one-time password (OTP)</strong> for each EGS unit you want to onboard. Every POS terminal, branch system or ERP instance that issues invoices counts as a unit.</li>
<li><strong>Create a certificate signing request (CSR)</strong> from your solution, using the OTP. Your vendor's software does this.</li>
<li><strong>Receive a compliance CSID</strong> and run the compliance checks: sample standard and simplified invoices, credit notes and debit notes, as your solution supports.</li>
<li><strong>Receive the production CSID</strong> once the checks pass. From this point the unit is live and must clear or report real invoices.</li>
<li><strong>Monitor rejections and warnings</strong> in your system and on the portal during the first weeks.</li>
</ol>
<p>Leave time between steps 4 and 5. Compliance checks are where incorrect VAT categories, missing buyer data and rounding differences show up.</p>

<h2>ZATCA Wave 25 readiness checklist</h2>
<p>Work backwards from 1 February 2027. A realistic plan for a small business:</p>
<table><thead><tr><th>By</th><th>Task</th><th>Done when</th></tr></thead><tbody>
<tr><td>Early November 2026</td><td>Confirm Wave 25 status from VAT returns and the Fatoora portal</td><td>You have a written yes/no with the qualifying year</td></tr>
<tr><td>Mid November 2026</td><td>Choose a Phase 2 capable solution or confirm your current vendor's upgrade</td><td>Signed contract and an onboarding date</td></tr>
<tr><td>Late November 2026</td><td>List every EGS unit: branches, tills, ERP, online store</td><td>An inventory with an owner per unit</td></tr>
<tr><td>December 2026</td><td>Clean customer master data: legal names, addresses, VAT numbers</td><td>Every B2B customer has a validated VAT number</td></tr>
<tr><td>December 2026</td><td>Map invoice scenarios: returns, deposits, discounts, exports, zero-rated lines</td><td>Each scenario has a tested sample</td></tr>
<tr><td>Early January 2027</td><td>Run compliance checks and obtain production CSIDs</td><td>All units onboarded</td></tr>
<tr><td>January 2027</td><td>Train staff on clearance, rejections and credit notes</td><td>Staff can issue and correct invoices unaided</td></tr>
<tr><td>1 February 2027</td><td>Go live and monitor daily</td><td>No unresolved rejections after the first week</td></tr>
</tbody></table>

<h3>Questions to ask your e-invoicing provider</h3>
<ul>
<li>Have you onboarded customers in earlier waves, and can you show it working end to end?</li>
<li>How do you handle simplified invoices when the connection to ZATCA is down, and how do you guarantee reporting within 24 hours?</li>
<li>Do you support credit notes against both standard and simplified invoices, including partial returns?</li>
<li>Can your invoices show Arabic alongside English? See our <a href="/blog/arabic-english-invoice">Arabic-English invoice guide</a> for layout tips.</li>
<li>Where is the XML archive stored, and can you export it if you change vendor?</li>
<li>What is the pricing model: per invoice, per unit, or per month?</li>
</ul>

<h2>Worked example: a simplified invoice after go-live</h2>
<p>From 1 February 2027, the Jeddah studio sells a set of cushions to a walk-in customer. The price is shown VAT-inclusive at SAR 460.</p>
<ul>
<li>Net price: 460 ÷ 1.15 = SAR 400.00</li>
<li>VAT at 15%: 400 × 0.15 = SAR 60.00</li>
<li>Total: 400 + 60 = SAR 460.00</li>
</ul>
<p>The POS creates a simplified tax invoice in XML, signs it, prints the receipt with the Phase 2 QR code and hands it over. Within 24 hours the system reports the XML to ZATCA. If the same customer were a VAT-registered company buying for its office, the studio would issue a standard tax invoice with the buyer's VAT number and wait for ZATCA clearance before sending it. You can double-check VAT-inclusive arithmetic with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>, but the invoice itself must come from the integrated system.</p>

<h2>Common Wave 25 mistakes</h2>
<ul>
<li><strong>Waiting for a notification.</strong> Scope follows the revenue test. Check yourself.</li>
<li><strong>Onboarding one unit and forgetting the others.</strong> A second branch till or a website checkout that issues invoices also needs a CSID.</li>
<li><strong>Editing an issued invoice.</strong> Corrections are made with credit or debit notes. Our <a href="/blog/credit-note-guide">credit note guide</a> explains the logic.</li>
<li><strong>Bad buyer VAT numbers.</strong> Standard invoices fail clearance when the buyer's VAT number or address is wrong.</li>
<li><strong>Restarting invoice numbering.</strong> Phase 2 chains invoices, so numbering and counters must be continuous per unit.</li>
<li><strong>No archive plan.</strong> The XML is the legal record. Check ZATCA's retention rules and our overview of <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>Penalties for missing the Wave 25 deadline</h2>
<p>ZATCA's e-invoicing penalty schedule covers failing to issue electronic invoices, missing required elements, failing to integrate or report, and deleting or altering invoices. ZATCA has said it may issue warnings before fines for some first violations. Penalty amounts are set in regulation and can change, so use the figures on ZATCA's website rather than numbers quoted in vendor marketing.</p>

<h2>Where a free invoice generator still fits</h2>
<p>Our <a href="/invoice-generator">free invoice generator</a> runs in your browser and exports a PDF. It does not produce UBL XML, sign invoices, hold a CSID or connect to ZATCA, so it cannot be your tax invoicing system once you are in Wave 25. It remains useful for quotations, proformas and price estimates before a sale, and for businesses that are not VAT-registered and simply need a clear bill (without calling it a tax invoice or showing VAT). The <a href="/invoice-generator?template=corporate">Corporate template</a> keeps tax IDs and notes easy to read for those uses. Our guide to <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices vs PDF invoices</a> explains why a PDF alone does not count.</p>

<h2>Next step</h2>
<p>Pull your VAT returns for 2022 to 2025 today and check each year against SAR 187,500. If any year is over, log in to the Fatoora portal, list your invoicing units and book an onboarding date with your provider before the end of November 2026. For the wider rules behind Phase 2, keep the <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> open alongside this checklist.</p>
`,
  },
  {
    slug: "gst-2-0-new-gst-rates",
    title: "GST 2.0: New GST Rates and Invoice Changes",
    description:
      "New GST rates under GST 2.0 explained: the 5%, 18% and 40% slabs from 22 September 2025, what moved, the rate-change rules for invoices and a worked example.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: ["gst-invoice-guide", "gst-invoice-management-system", "india-e-invoice-limit"],
    faqs: [
      {
        q: "Did the GST invoice format change under GST 2.0?",
        a: "Not in substance. The mandatory fields under Rule 46 of the CGST Rules still apply: supplier and recipient GSTIN, invoice number and date, HSN or SAC, taxable value, rate and CGST, SGST or IGST amounts, and place of supply. What changed is the rate you apply to many HSN codes, so your item master and billing software must be updated.",
      },
      {
        q: "Is the 12% GST slab completely gone?",
        a: "As a general slab, yes. GST 2.0 moved most items previously taxed at 12% to 5% and some to 18%, and most 28% items to 18% or the new 40% rate. A few specific rates outside the main slabs, such as those for precious metals, continue. Always look up the current rate for your exact HSN or SAC code.",
      },
      {
        q: "Is compensation cess still charged on invoices?",
        a: "For most goods, no. Compensation cess was withdrawn on most products when the new rates took effect on 22 September 2025, with tobacco products kept on the old structure for a period. Reports indicate tobacco moved off the old cess in early 2026. Check current CBIC notifications before charging any cess.",
      },
      {
        q: "What happens to input tax credit on stock bought at 28% and sold at 18%?",
        a: "Generally, input tax credit already availed on purchases remains available and can be used against output tax at the new rate. If your output tax is now lower than your input tax, you may build up a credit balance. Inverted duty structure refunds have their own conditions, so speak to your chartered accountant.",
      },
      {
        q: "Do I have to pass the GST rate cut on to customers?",
        a: "The government asked businesses to pass on the benefit through lower prices, and anti-profiteering scrutiny has applied to earlier rate cuts. Beyond the legal question, customers can see the old and new rates, so a price that stays the same while GST falls will be noticed. Document how you repriced.",
      },
      {
        q: "Where can I check the official GST rate for my HSN or SAC code?",
        a: "Use official sources: the CBIC rate notifications and the GST rate tools on CBIC's website, and the HSN and SAC search on the GST portal. Blogs and supplier price lists can be out of date or simplified. Note any condition attached to a rate, such as 'without ITC', and keep a dated record of the rate you relied on.",
      },
      {
        q: "Do I need to change my GST registration because of the new rates?",
        a: "Generally no. A rate change does not change your GSTIN or registration. You only need to amend your registration if your business details change, such as your address, business type or the goods and services you supply. What you must change is the rate in your item master, price lists and billing software.",
      },
      {
        q: "How is the 40% GST rate shown on an invoice?",
        a: "The same way as other rates. For an intra-state sale, it is split equally into CGST at 20% and SGST or UTGST at 20%. For an inter-state sale, you charge IGST at 40%. Show the taxable value, rate and tax amount for each line, and check whether any other levy also applies to the product.",
      },
      {
        q: "Did GST 2.0 change the e-invoicing threshold?",
        a: "No. GST 2.0 changed rates, not the e-invoicing rules. Businesses whose aggregate turnover exceeds the e-invoicing limit, currently Rs 5 crore, still need to generate an IRN for eligible B2B invoices. The rate on each line in the e-invoice must match the new rates. Check our e-invoice limit guide and the GST portal for any later changes.",
      },
      {
        q: "What should I do if my supplier still charges the old GST rate?",
        a: "Ask the supplier to correct it with a credit note or a revised invoice at the correct rate. You can keep the record pending or reject it in IMS while it is being fixed. Do not claim more input tax credit than the tax that is legally due. Keep the correspondence in case the difference is queried later.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The new GST rates under GST 2.0 took effect on 22 September 2025. India moved to two main slabs, 5% and 18%, plus a special 40% rate for luxury and "sin" goods, with essentials at nil. The 12% and 28% slabs were folded into these. Your GST invoice format stays the same, but you must update HSN rates and apply the rate-change rules correctly.</p>

<p>GST 2.0 is the biggest change to India's GST rates since GST began in 2017. If you issue GST invoices, the practical questions are simple: which rate applies to each item now, what to do with invoices that straddle the change date, and whether anything on the invoice itself must change. This guide answers those. For field-by-field invoice rules, see our <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Rates are fixed by CBIC notifications for each HSN or SAC code, and the GST Council can revise them. Check the official <a href="https://gstcouncil.gov.in/" target="_blank" rel="noopener noreferrer">GST Council</a> site and the <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST portal</a>, or ask a chartered accountant, before setting a rate in your billing software.</p>

<h2>What is GST 2.0?</h2>
<p>"GST 2.0" is the popular name for the rate rationalization recommended by the 56th meeting of the GST Council on 3 September 2025. The government notified the new rates on 17 September 2025, and they applied from 22 September 2025. The aim was a simpler structure with fewer slabs, lower tax on everyday goods and fewer classification disputes.</p>
<table><thead><tr><th></th><th>Before 22 September 2025</th><th>From 22 September 2025 (GST 2.0)</th></tr></thead><tbody>
<tr><td>Main slabs</td><td>5%, 12%, 18%, 28%</td><td>5% and 18%</td></tr>
<tr><td>Special rate</td><td>28% plus compensation cess on many luxury and sin goods</td><td>40% on specified luxury and sin goods</td></tr>
<tr><td>Nil rate</td><td>Essentials</td><td>Essentials, plus individual life and health insurance</td></tr>
<tr><td>Compensation cess</td><td>On cars, tobacco, aerated drinks and others</td><td>Withdrawn on most goods; tobacco kept on the old structure for a transition period</td></tr>
</tbody></table>

<h2>New GST rates: what moved where</h2>
<p>The full list runs to hundreds of HSN entries, so use this as orientation, not as your rate table.</p>

<h3>28% to 18%</h3>
<ul>
<li>Air conditioners and dishwashers</li>
<li>LED and LCD televisions above 32 inches, monitors and projectors</li>
<li>Small cars (petrol up to 1,200 cc and diesel up to 1,500 cc, within 4,000 mm length)</li>
<li>Motorcycles up to 350 cc, three-wheelers and goods transport vehicles</li>
</ul>

<h3>12% (and some 18%) to 5%</h3>
<p>Many packaged foods, personal care items and household goods moved down to 5%. Some services also moved to 5%, in several cases without input tax credit (for example, reported changes for hotel accommodation up to Rs 7,500 per night and for beauty and fitness services). Where a 5% rate comes "without ITC", you cannot claim input tax credit on related purchases, which changes your pricing maths.</p>

<h3>To 40%</h3>
<ul>
<li>Pan masala, tobacco products and cigarettes (tobacco moved once the transition period ended)</li>
<li>Aerated and sugary drinks</li>
<li>Larger cars and motorcycles above 350 cc</li>
<li>Yachts, private aircraft and similar luxury items</li>
</ul>

<h3>To nil</h3>
<p>Individual life and health insurance policies became exempt, along with a number of essential goods and medicines.</p>

<h2>How the GST rate cut affects your invoices</h2>
<p>The GST invoice format did not change. Rule 46 of the CGST Rules still sets the mandatory fields, and e-invoicing taxpayers still need an IRN (see our guide to the <a href="/blog/india-e-invoice-limit">e-invoice limit in GST</a>). What changes is the rate on each line, and that has knock-on effects:</p>
<ul>
<li><strong>Item master:</strong> update the rate for every HSN or SAC code you sell. A single wrong code can mean under-charging tax you then owe yourself.</li>
<li><strong>Price lists and quotes:</strong> quotations issued before the change at the old rate need re-issuing. Our <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> explainer helps if your team mixes the two.</li>
<li><strong>Cess fields:</strong> remove compensation cess from items where it no longer applies.</li>
<li><strong>Recipient side:</strong> your buyers see the new rate in GSTR-2B through the <a href="/blog/gst-invoice-management-system">Invoice Management System (IMS)</a>, so wrong rates lead to rejected invoices.</li>
</ul>

<h2>Which rate applies when a sale straddles 22 September 2025?</h2>
<p>Section 14 of the CGST Act decides the time of supply when the rate changes. It looks at three events: the date of supply, the invoice date and the date payment is received. In simple terms, the rate that applies is the one in force when two of those three events happened.</p>
<table><thead><tr><th>Supply</th><th>Invoice</th><th>Payment</th><th>Rate applied</th></tr></thead><tbody>
<tr><td>Before</td><td>Before</td><td>After</td><td>Old rate</td></tr>
<tr><td>Before</td><td>After</td><td>Before</td><td>Old rate</td></tr>
<tr><td>Before</td><td>After</td><td>After</td><td>New rate</td></tr>
<tr><td>After</td><td>Before</td><td>Before</td><td>Old rate</td></tr>
<tr><td>After</td><td>Before</td><td>After</td><td>New rate</td></tr>
<tr><td>After</td><td>After</td><td>Before</td><td>New rate</td></tr>
</tbody></table>
<p>"Before" means before 22 September 2025, "after" means on or after it. The change is a year old now, but these rules still matter for late invoices, credit notes on older sales and audits of the 2025-26 return, and the same Section 14 logic will apply to any future rate change.</p>

<h2>Worked example: an AC dealer's GST invoice</h2>
<p>A dealer in Pune (Maharashtra) sells an air conditioner and installation to a business customer in the same state. Air conditioners moved from 28% to 18%. Installation is shown as a separate service line at 18% here for illustration; check whether your supply is composite in your case.</p>
<table><thead><tr><th>Line</th><th>Taxable value (Rs)</th><th>CGST 9% (Rs)</th><th>SGST 9% (Rs)</th><th>Line total (Rs)</th></tr></thead><tbody>
<tr><td>Split AC, 1.5 ton</td><td>40,000.00</td><td>3,600.00</td><td>3,600.00</td><td>47,200.00</td></tr>
<tr><td>Installation</td><td>2,500.00</td><td>225.00</td><td>225.00</td><td>2,950.00</td></tr>
<tr><td><strong>Totals</strong></td><td><strong>42,500.00</strong></td><td><strong>3,825.00</strong></td><td><strong>3,825.00</strong></td><td><strong>50,150.00</strong></td></tr>
</tbody></table>
<p>The maths: 18% on Rs 42,500 = Rs 7,650, split equally as CGST Rs 3,825 and SGST Rs 3,825 because the sale is intra-state. Total Rs 50,150. Under the old 28% rate, tax on the AC alone would have been Rs 40,000 × 28% = Rs 11,200 instead of Rs 7,200, so the customer pays Rs 4,000 less tax on that line. If the buyer were in Karnataka, the dealer would charge IGST at 18% (Rs 7,650) instead of CGST plus SGST. Our <a href="/tools/sales-tax-calculator">tax calculator</a> works for GST percentages too.</p>

<h2>GST slabs 5%, 18% and 40%: quick reference</h2>
<table><thead><tr><th>Rate</th><th>Typical goods and services</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>Nil</td><td>Essentials, individual life and health insurance</td><td>Use a bill of supply if all supplies are exempt</td></tr>
<tr><td>5%</td><td>Many everyday goods; some services without ITC</td><td>Note "ITC not available" internally where it applies</td></tr>
<tr><td>18%</td><td>Most goods and services, including many former 28% items</td><td>Default for most B2B services</td></tr>
<tr><td>40%</td><td>Sin goods and luxury items</td><td>Check whether any separate levy also applies</td></tr>
</tbody></table>

<h2>How to update your billing for GST 2.0 rates</h2>
<p>Whether you use an ERP, accounting software or a spreadsheet, the update follows the same steps. Doing them in order avoids the most common errors.</p>
<ol>
<li><strong>List every HSN and SAC code you use.</strong> Pull a sales report by code for the last 12 months, plus any codes on open quotes and purchase orders.</li>
<li><strong>Look up the current rate for each code</strong> in the CBIC rate notifications, not in a blog list. Note any condition attached, such as "without ITC".</li>
<li><strong>Update the item master</strong> and remove compensation cess where it no longer applies. Keep a record of the old and new rate for each item.</li>
<li><strong>Test a sample invoice</strong> for an intra-state and an inter-state customer, and check the CGST, SGST or IGST split.</li>
<li><strong>Update e-invoice and e-way bill settings</strong> if you generate IRNs: the JSON carries the rate per line, and the IRP validates rate and tax arithmetic.</li>
<li><strong>Reprice and communicate.</strong> Update price lists and tell regular customers how prices changed.</li>
</ol>
<p>Businesses that bill by hand should take extra care with the last digit of HSN codes: two products that look alike can sit in different headings and now carry different rates. When in doubt, ask your chartered accountant for a classification opinion and keep it on file.</p>

<h2>Common mistakes after the new GST rates</h2>
<ul>
<li><strong>Updating some HSN codes, not all.</strong> Run a report of every code you sold in the last year and check each one.</li>
<li><strong>Leaving cess on the invoice.</strong> Charging cess that no longer applies over-collects from your customer.</li>
<li><strong>Applying the new rate to a pre-change invoice.</strong> Use the Section 14 table above for credit and debit notes on old sales. Our <a href="/blog/debit-note-vs-credit-note">debit note vs credit note</a> guide explains which to issue.</li>
<li><strong>Claiming ITC on "without ITC" services.</strong> Some 5% services carry no credit, for you or for your supplier.</li>
<li><strong>Reusing old quotes.</strong> A quote at 28% accepted after the change still invoices at the new rate if the Section 14 test says so.</li>
</ul>

<h2>GST 2.0 invoice checklist</h2>
<ul>
<li>Item master updated with the current rate for every HSN or SAC code</li>
<li>Compensation cess removed where withdrawn</li>
<li>Correct CGST plus SGST or IGST based on place of supply</li>
<li>Rate-change date logic applied to straddling transactions</li>
<li>Price lists, website prices and quotes reissued</li>
<li>Credit notes on old sales use the old rate where Section 14 requires it</li>
<li>Records of repricing kept in case of profiteering queries</li>
</ul>

<h2>Can I make a GST invoice with a free generator?</h2>
<p>If your aggregate turnover is below the e-invoicing limit, a clear PDF tax invoice with all GST fields is normal practice. Our <a href="/invoice-generator">free invoice generator</a> lets you enter each line's rate and shows the tax, and it runs in your browser without an account. It does not look up HSN rates, split CGST and SGST automatically by place of supply, or generate an IRN, so you must enter the correct rate yourself. Above the e-invoice limit, use GST software that connects to an IRP.</p>

<h2>Next step</h2>
<p>Export your sales by HSN code for the last 12 months and confirm the current rate for each one against CBIC's notifications. Then check how your buyers are treating your invoices in IMS, using our guide to the <a href="/blog/gst-invoice-management-system">GST Invoice Management System</a>.</p>
`,
  },
  {
    slug: "gst-invoice-management-system",
    title: "GST IMS: Invoice Management System Explained",
    description:
      "The GST Invoice Management System explained: how to accept, reject or keep pending invoices on the GST portal, how IMS feeds GSTR-2B and GSTR-3B, with examples.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "input-tax-credit-gst",
      "gst-2-0-new-gst-rates",
      "gst-invoice-guide",
      "india-e-invoice-limit",
    ],
    faqs: [
      {
        q: "Is it mandatory to take action on every invoice in IMS?",
        a: "Taking action has generally been optional. Records you leave untouched are treated as deemed accepted when GSTR-2B is generated, and their ITC is included. Acting on records is still good practice, because rejecting or keeping pending wrong invoices is the only way to keep incorrect ITC out of your GSTR-2B. Some commentators expect stricter rules, so check GSTN advisories.",
      },
      {
        q: "Can I change my IMS action after accepting an invoice?",
        a: "You can change an action on the IMS dashboard until you file GSTR-3B for that period, then recompute GSTR-2B. After you file GSTR-3B, the action for that period is locked, and corrections have to be made through later amendments by the supplier or through ITC reversal in your return.",
      },
      {
        q: "What happens to the supplier when I reject an invoice in IMS?",
        a: "The rejection and any remarks are visible to the supplier. The supplier can then amend the invoice in GSTR-1A or a later GSTR-1, or issue a correct document. If you reject a credit note, the tax the supplier reduced through that credit note is typically added back to the supplier's liability.",
      },
      {
        q: "Does IMS cover reverse charge invoices and imports?",
        a: "IMS was designed for documents your suppliers report in GSTR-1, GSTR-1A or IFF. Reverse charge supplies and certain other documents have been handled differently, and GSTN has added some record types over time, such as import bills of entry. Check the IMS user manual on the GST portal for the current list.",
      },
      {
        q: "How long can I keep an invoice pending in IMS?",
        a: "For ordinary invoices, you can generally keep them pending until the time limit for claiming ITC under Section 16(4) of the CGST Act. From the October 2025 tax period, credit notes and certain amendments can be kept pending for only one tax period: one month for monthly filers and one quarter for quarterly filers.",
      },
      {
        q: "Can quarterly QRMP filers use IMS?",
        a: "Yes. Records your suppliers upload through IFF or GSTR-1 appear on your IMS dashboard whether you file monthly or quarterly. If you are a QRMP taxpayer receiving invoices, you act on them in the same way, and your actions flow into the GSTR-2B used for your quarterly return. Check the IMS user manual on the GST portal for timing details.",
      },
      {
        q: "What if a supplier has not uploaded an invoice yet?",
        a: "It will not appear in IMS or your GSTR-2B, so you generally cannot claim the input tax credit for that period. Ask the supplier to report it in GSTR-1 or IFF. Once it appears, you can accept it in a later period, as long as you are within the time limit for claiming ITC under Section 16(4) of the CGST Act.",
      },
      {
        q: "Can I accept only part of an invoice in IMS?",
        a: "No. IMS actions apply to the whole record: you accept, reject or keep it pending. If only part of an invoice is wrong, such as one line at the wrong rate, keep it pending or reject it with a remark and ask the supplier to correct it with a credit note or amendment. The October 2025 changes allow partial ITC reversal declarations only for certain credit notes.",
      },
      {
        q: "Does rejecting an invoice in IMS mean I do not have to pay the supplier?",
        a: "No. IMS only decides what input tax credit appears in your GSTR-2B. Whether you owe the supplier money depends on your contract and what was actually supplied. If you reject an invoice because it is wrong, sort out the commercial side directly with the supplier, usually by agreeing a corrected invoice or credit note.",
      },
      {
        q: "Do e-invoices with an IRN show up in IMS automatically?",
        a: "Details of e-invoices registered on the IRP are auto-populated into the supplier's GSTR-1, so they normally reach your IMS dashboard without the supplier retyping them. The supplier still has to file the return, and you still need to act on the record. If an IRN invoice is missing, ask the supplier to check their GSTR-1.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The invoice management system (IMS) on the GST portal lets you, as a buyer, accept, reject or keep pending each invoice your suppliers report. Accepted records flow into GSTR-2B as eligible input tax credit (ITC), rejected ones are excluded, pending ones wait for a later period, and untouched records are deemed accepted. GSTR-2B then feeds your GSTR-3B.</p>

<p>Before IMS, a buyer's only real tool against a wrong supplier invoice was to ignore it in GSTR-3B and hope the reconciliation held up. The invoice management system in GST gives buyers a formal way to respond to each record, and gives suppliers visibility of what was rejected and why. This guide explains how IMS works, the three actions, how it affects GSTR-2B and GSTR-3B, and the October 2025 changes. For the invoice fields themselves, see our <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. GSTN updates IMS functionality through advisories on the <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST portal</a>, and some rules have changed since launch. Check the latest advisory or ask a chartered accountant before relying on any date or time limit here.</p>

<h2>What is the GST invoice management system?</h2>
<p>IMS is a dashboard on the GST portal, available from the October 2024 tax period. It shows every inward supply record your suppliers have saved or filed in GSTR-1, GSTR-1A or the Invoice Furnishing Facility (IFF): invoices, debit notes, credit notes and their amendments. For each record, you choose an action. Your choices decide what appears as available ITC in your GSTR-2B for the period.</p>
<p>IMS does not replace GSTR-2B or GSTR-3B. It sits before them. Think of it as an inbox: suppliers send records in, you sort them, and the sorted result becomes your GSTR-2B statement.</p>

<h2>Who uses IMS?</h2>
<ul>
<li><strong>Recipients (buyers):</strong> any GST-registered business that claims ITC on purchases. This is the main user.</li>
<li><strong>Suppliers:</strong> they see buyer actions and remarks on their outward supplies dashboard, which tells them which invoices need correcting.</li>
<li><strong>Accountants and tax practitioners:</strong> they typically run the monthly IMS review for clients.</li>
</ul>
<p>Composition taxpayers, who cannot claim ITC, have little reason to use it. Businesses above the e-invoicing limit still use IMS; e-invoices reported through an IRP flow into GSTR-1 and then into the buyer's IMS like any other record. Our post on the <a href="/blog/india-e-invoice-limit">e-invoice limit in GST</a> covers that flow.</p>

<h2>Accept, reject or pending: the IMS actions</h2>
<table><thead><tr><th>Action</th><th>When to use it</th><th>Effect on your GSTR-2B</th><th>What the supplier sees</th></tr></thead><tbody>
<tr><td>Accept</td><td>Invoice is correct and goods or services received</td><td>Included as eligible ITC</td><td>Accepted</td></tr>
<tr><td>Reject</td><td>Wrong GSTIN, not your purchase, duplicate, wrong amount or rate</td><td>Excluded from ITC (shown separately)</td><td>Rejected, with your remarks</td></tr>
<tr><td>Pending</td><td>Goods not yet received, dispute in progress, need to check</td><td>Excluded this period, carried forward</td><td>Pending, with your remarks</td></tr>
<tr><td>No action</td><td>You did nothing</td><td>Deemed accepted and included</td><td>Treated as accepted</td></tr>
</tbody></table>
<p>"No action" is the trap. If you never open IMS, every record your suppliers upload, correct or not, lands in your GSTR-2B as ITC. You then either claim credit you are not entitled to or have to reverse it manually in GSTR-3B.</p>

<h2>How IMS works with GSTR-2B and GSTR-3B</h2>
<ol>
<li><strong>Suppliers report:</strong> during the month, suppliers save or file records in GSTR-1, GSTR-1A or IFF.</li>
<li><strong>You act in IMS:</strong> records appear on your IMS dashboard as they come in. You can act at any time.</li>
<li><strong>GSTR-2B is generated:</strong> on the 14th of the following month, the portal generates your draft GSTR-2B using your IMS actions, with untouched records deemed accepted.</li>
<li><strong>Recompute if needed:</strong> if you take or change actions after the 14th but before filing GSTR-3B, you can recompute GSTR-2B.</li>
<li><strong>File GSTR-3B:</strong> ITC in GSTR-3B is auto-populated from GSTR-2B. Once filed, IMS actions for that period are locked.</li>
</ol>
<p>This creates a monthly rhythm: review IMS in the first two weeks, act before GSTR-2B is generated, recompute if late changes come in, then file GSTR-3B by its due date.</p>

<h2>IMS vs GSTR-2A vs GSTR-2B</h2>
<p>Three screens on the GST portal show your purchases, and they are easy to mix up. The short version: GSTR-2A is a live view, IMS is where you act, and GSTR-2B is the fixed monthly result you claim ITC from.</p>
<table><thead><tr><th></th><th>GSTR-2A</th><th>IMS</th><th>GSTR-2B</th></tr></thead><tbody>
<tr><td>What it is</td><td>Dynamic statement of inward supplies</td><td>Action dashboard for inward records</td><td>Static monthly ITC statement</td></tr>
<tr><td>Updates</td><td>Continuously, as suppliers file</td><td>Continuously, as suppliers save or file</td><td>Generated on the 14th; can be recomputed before filing GSTR-3B</td></tr>
<tr><td>Can you act on records?</td><td>No</td><td>Yes: accept, reject, pending</td><td>No, it reflects your IMS actions</td></tr>
<tr><td>Used for</td><td>Tracking and reconciliation</td><td>Deciding which records count as ITC</td><td>Auto-populating ITC in GSTR-3B</td></tr>
</tbody></table>
<p>Because GSTR-2B is the statement that feeds GSTR-3B, the decisions you make in IMS are what actually change your return. Reconcile your purchase register against IMS during the month, then use GSTR-2B as the final check before filing. If your purchase register shows an invoice that never appears in IMS, the supplier has not reported it yet; chase the supplier rather than claiming ITC on it.</p>

<h2>IMS changes from October 2025</h2>
<p>A GSTN advisory in September 2025 introduced changes that apply prospectively from the October 2025 tax period:</p>
<ul>
<li><strong>Pending credit notes:</strong> credit notes, and certain amendments of credit notes, invoices and debit notes, can be kept pending for one tax period only (one month for monthly filers, one quarter for quarterly filers), counted from when the supplier reported them.</li>
<li><strong>ITC reversal declaration:</strong> when you accept a credit note on an invoice where you never claimed ITC, or claimed only part of it, you can declare the ITC actually availed and reverse only that amount instead of the full credit note value.</li>
<li><strong>Remarks:</strong> you can add remarks when you reject or keep a record pending. Remarks appear in your GSTR-2B and on the supplier's dashboard.</li>
</ul>
<p>GSTN has also added an offline IMS tool for bulk actions. Other changes have been discussed in commentary, including stricter rules on deemed acceptance, but confirm any such change on the portal before acting on it.</p>

<h2>Worked example: a monthly IMS review</h2>
<p>A Bengaluru trading business reviews five inward records for October 2026 before the 14th of November.</p>
<table><thead><tr><th>Record</th><th>Taxable value (Rs)</th><th>Tax (Rs)</th><th>Situation</th><th>Action</th></tr></thead><tbody>
<tr><td>Invoice A (interstate)</td><td>1,00,000</td><td>IGST 18,000</td><td>Correct, goods received</td><td>Accept</td></tr>
<tr><td>Invoice B (local)</td><td>50,000</td><td>CGST 4,500 + SGST 4,500</td><td>Correct, service received</td><td>Accept</td></tr>
<tr><td>Invoice C</td><td>20,000</td><td>IGST 3,600</td><td>Not our purchase (wrong GSTIN)</td><td>Reject</td></tr>
<tr><td>Invoice D</td><td>30,000</td><td>IGST 5,400</td><td>Goods in transit</td><td>Pending</td></tr>
<tr><td>Credit note E (against A)</td><td>-10,000</td><td>IGST -1,800</td><td>Agreed discount</td><td>Accept</td></tr>
</tbody></table>
<p>The maths: ITC available in GSTR-2B = 18,000 (A) + 9,000 (B: 4,500 + 4,500) - 1,800 (E) = Rs 25,200. Invoice C's Rs 3,600 is excluded and visible to the supplier with the remark "Wrong GSTIN, not our purchase". Invoice D's Rs 5,400 is carried forward and can be accepted in November once the goods arrive. Had the business left everything untouched, GSTR-2B would have shown 18,000 + 9,000 + 3,600 + 5,400 - 1,800 = Rs 34,200, overstating eligible ITC by Rs 9,000.</p>

<h2>Common IMS mistakes</h2>
<ul>
<li><strong>Never opening IMS.</strong> Deemed acceptance pulls every record into GSTR-2B, including wrong ones.</li>
<li><strong>Rejecting instead of pending.</strong> If the invoice is right but goods have not arrived, keep it pending. A rejection forces the supplier to act.</li>
<li><strong>Rejecting genuine credit notes to protect ITC.</strong> This adds tax back to the supplier and usually triggers a dispute.</li>
<li><strong>Acting after filing GSTR-3B.</strong> Actions lock once the return is filed.</li>
<li><strong>Not telling suppliers.</strong> Remarks help, but a direct email resolves most rejections faster.</li>
<li><strong>Wrong rates after GST 2.0.</strong> Suppliers still using an old rate generate mismatches. See <a href="/blog/gst-2-0-new-gst-rates">new GST rates under GST 2.0</a>.</li>
</ul>

<h2>How suppliers can avoid IMS rejections</h2>
<p>If you sell to GST-registered businesses, IMS means buyers can now formally push back on your invoices. Reduce rejections by getting the basics right on every invoice:</p>
<ul>
<li>Verify the buyer's GSTIN and state before invoicing. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> explains GSTIN structure.</li>
<li>Match the PO number and amounts the buyer expects. See <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li>Use the correct place of supply so the tax type (IGST vs CGST plus SGST) is right.</li>
<li>Report credit notes promptly and agree them with the buyer first.</li>
<li>Keep invoice numbers unique and sequential; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you plan a series.</li>
</ul>

<h2>IMS monthly checklist</h2>
<ul>
<li>Open IMS weekly, not just before the 14th</li>
<li>Match each record against your purchase register and goods receipt</li>
<li>Accept correct records, keep pending those awaiting delivery, reject wrong ones with a remark</li>
<li>Track pending credit notes against the one-period limit</li>
<li>Recompute GSTR-2B if you act after the 14th</li>
<li>Reconcile GSTR-2B with your books, then file GSTR-3B</li>
<li>Email suppliers about every rejection</li>
</ul>

<h2>Next step</h2>
<p>Log in to the GST portal and open the IMS dashboard for the current period before your next GSTR-2B is generated. Sort every record into accept, reject or pending. If you also issue invoices, review your own GST invoice layout using the <a href="/blog/gst-invoice-guide">GST invoice guide</a>, and for small-volume invoicing below the e-invoice limit, our <a href="/invoice-generator">free invoice generator</a> produces a clear PDF with GSTIN and tax lines.</p>
`,
  },
  {
    slug: "finance-act-2026-pakistan-sales-tax",
    title: "Finance Act 2026 Pakistan: Sales Tax Invoice Changes",
    description:
      "Finance Act 2026 Pakistan for invoicing: mandatory FBR e-invoicing, blacklisting, fake invoice penalties, input tax risks, retail price items and section 99B.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Pakistan",
    related: [
      "srb-sales-tax-on-services",
      "fbr-e-invoicing-pakistan",
      "sales-tax-invoice-pakistan",
      "freelancer-tax-pakistan-2026",
    ],
    faqs: [
      {
        q: "When did the Finance Act 2026 take effect in Pakistan?",
        a: "The Finance Act 2026 was enacted in late June 2026 after the National Assembly passed the Finance Bill on 26 June 2026. Its amendments apply from 1 July 2026 unless a provision gives a different date. Some measures, such as the special procedure for small retailers, were brought in by later S.R.O.s.",
      },
      {
        q: "Is section 99B a sales tax rule?",
        a: "No. Section 99B is in the Income Tax Ordinance, 2001. It allows a special income tax procedure for small retailers, set out in S.R.O. 1166(I)/2026, with tax of 1% of gross turnover and a minimum of PKR 25,000. Reports say participants get relief from some POS and digital invoicing requirements, so it affects how small shops invoice. Confirm details with FBR.",
      },
      {
        q: "Can I still claim input tax if my supplier is later blacklisted?",
        a: "According to reports on the new provisions, input tax claimed on invoices from an entity placed on the simulated invoice issuers register is lost from the date of listing. Input tax that does not match the supplier's declared output tax may also attract a penalty. Check suppliers' status regularly and confirm the exact rules with your adviser.",
      },
      {
        q: "Does the Finance Act 2026 change the standard sales tax rate?",
        a: "Public summaries of the Finance Act 2026 do not report a change to the 18% standard rate under the Sales Tax Act, 1990. The changes centre on enforcement, the retail price schedule, exemptions and penalties. Reduced and special rates in the schedules can change, so check the current schedules for your goods.",
      },
      {
        q: "Do freelancers need to worry about these sales tax changes?",
        a: "Most freelancers exporting IT services are not registered for federal sales tax, so FBR digital invoicing does not apply to them. Provincial sales tax on services is a separate question. Income tax changes for IT exporters, such as the reported extension of the 0.25% final tax regime, are covered in our freelancer tax guide.",
      },
      {
        q: "How can I check whether a supplier is a registered and active taxpayer?",
        a: "Use FBR's online Active Taxpayer List search or its SMS verification service, and check the supplier's sales tax registration number before you buy. Repeat the check regularly, not just at onboarding, because a supplier's status can change. Keep screenshots or records of each check with your purchase file as evidence of due diligence.",
      },
      {
        q: "What must a sales tax invoice in Pakistan show?",
        a: "Under section 23 of the Sales Tax Act, a tax invoice must include, among other things, the names, addresses and registration numbers of the supplier and the buyer, the date, a serial number, a description and quantity of the goods, the value excluding tax, the tax rate and amount, and the value including tax. FBR integration adds its own invoice number and QR code. Confirm current requirements with FBR.",
      },
      {
        q: "Do provincial sales tax authorities follow FBR's e-invoicing rules?",
        a: "Not automatically. Sales tax on services is collected by provincial authorities such as the Punjab Revenue Authority, Sindh Revenue Board, KPRA and BRA, and each sets its own registration and invoicing rules. Some run their own electronic invoicing or monitoring systems. If you supply services, check the rules of each province where you are registered.",
      },
      {
        q: "What is PRAL's role in FBR e-invoicing?",
        a: "PRAL, Pakistan Revenue Automation (Private) Limited, is the company that runs FBR's IT systems. Registered persons can integrate with FBR's digital invoicing system through PRAL or through a licensed integrator. Compare the options for cost, support and compatibility with your existing billing software, and check FBR's website for the current list of licensed integrators.",
      },
      {
        q: "Is extra tax charged when I sell to an unregistered buyer?",
        a: "Often yes. The Sales Tax Act provides for further tax on taxable supplies to persons who are not registered, on top of the standard rate, subject to exceptions. The rate and exceptions can change in each Finance Act, so check the current section 3(1A) and related notifications on FBR's website or with your tax practitioner before invoicing.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The Finance Act 2026 Pakistan, effective 1 July 2026, tightens sales tax invoicing. All sales tax registered persons must integrate with FBR's e-invoicing system, and FBR can deregister or blacklist those who do not. Reported anti-fraud measures add a public register of fake invoice issuers, loss of input tax on their invoices and penalties up to the invoice value.</p>

<p>For most registered businesses, the Finance Act 2026 does not change what a sales tax invoice looks like. It changes the consequences of getting invoicing wrong: not integrating, issuing a fake invoice, or claiming input tax from the wrong supplier. This guide pulls together the invoicing-related changes from Budget 2026-27 and what to do about each. For the fields a sales tax invoice must show, see our <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice guide for Pakistan</a>, and for the mechanics of integration, our <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing guide</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Several measures below come from professional firm summaries and press reports of the Finance Bill and Act, not from our own reading of the gazetted text. Confirm every point on the <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR website</a> or with a tax practitioner before acting.</p>

<h2>What is the Finance Act 2026 Pakistan?</h2>
<p>The Finance Act 2026 is the law that enacts the federal Budget 2026-27. The National Assembly approved the Finance Bill 2026 on 26 June 2026, and the Act was enacted the following day according to KPMG Pakistan's summary. It amends the Income Tax Ordinance, 2001, the Sales Tax Act, 1990, the Federal Excise Act, 2005 and the Customs Act, 1969. Amendments apply from 1 July 2026 unless a provision says otherwise.</p>

<h2>Finance Act 2026 sales tax changes at a glance</h2>
<table><thead><tr><th>Area</th><th>Change (as reported)</th><th>Who it affects</th></tr></thead><tbody>
<tr><td>FBR e-invoicing</td><td>Integration mandatory for all sales tax registered persons; deregistration or blacklisting for non-integration</td><td>Every registered person</td></tr>
<tr><td>Production monitoring</td><td>Integration with FBR's production monitoring systems in specified sectors</td><td>Notified manufacturers</td></tr>
<tr><td>Debit and credit notes</td><td>Issued through an electronic adjustment mechanism</td><td>Anyone correcting invoices</td></tr>
<tr><td>Fake (simulated) invoices</td><td>Public register of issuers, penalty equal to invoice value, loss of buyer's input tax</td><td>Issuers and their buyers</td></tr>
<tr><td>Unmatched input tax</td><td>Penalty on input tax that does not match supplier output tax</td><td>Buyers claiming input tax</td></tr>
<tr><td>Penalties</td><td>Substantially increased for non-compliance, including improper invoices and missed returns</td><td>All registered persons</td></tr>
<tr><td>Retail price (Third Schedule)</td><td>More goods taxed on printed retail price, such as confectionery, sauces, utensils, plastic and ceramic products</td><td>Manufacturers and importers of those goods</td></tr>
<tr><td>Small retailers (section 99B, income tax)</td><td>Voluntary 1% turnover regime with relief from some POS and digital invoicing obligations</td><td>Eligible single-shop retailers</td></tr>
</tbody></table>

<h2>Mandatory FBR e-invoicing and blacklisting</h2>
<p>FBR e-invoicing for sales tax registered persons started with S.R.O. 709(I)/2025. The Finance Act 2026 puts integration on a firmer footing in the Act itself and, according to KPMG's summary of the enacted law, allows the Board to deregister or blacklist businesses that fail to integrate with its e-invoicing system. A blacklisted supplier is a problem for its customers too, because buyers generally cannot rely on invoices from a blacklisted person for input tax.</p>
<p>Reported penalties for failing to integrate with FBR's digital monitoring systems include a fixed penalty of PKR 1 million, a further penalty of up to PKR 5 million if the failure continues after a month, and possible sealing of premises. These figures come from secondary reporting of the budget measures; check the current section 33 penalty table before relying on them.</p>
<h3>What to do</h3>
<ul>
<li>If you are registered and not yet integrated, contact a licensed integrator or PRAL now.</li>
<li>Check that every outlet, warehouse and billing system that issues invoices is integrated, not just head office.</li>
<li>Keep records of your integration work and any FBR correspondence.</li>
</ul>

<h2>Fake invoices: the simulated invoice issuers register</h2>
<p>Fake or "flying" invoices, issued for sales that never happened so a buyer can claim input tax, have long been one of FBR's main enforcement targets. Budget 2026-27 measures, as reported by tax news services, include:</p>
<ul>
<li><strong>A public register</strong> of persons found to issue simulated invoices.</li>
<li><strong>A penalty equal to the full value</strong> of the fake invoice, including sales tax, for the issuer.</li>
<li><strong>Loss of input tax</strong> for buyers on invoices from a listed entity, from the date of listing.</li>
<li><strong>Removal from the register</strong> only after paying penalties and surcharges and showing compliance.</li>
<li><strong>A penalty on unmatched input tax:</strong> where a buyer's claimed input tax does not match the supplier's declared output tax, a reported penalty of 20% of the unmatched amount, plus reversal and default surcharge.</li>
</ul>
<p>Whether every element appears in the final Act in exactly this form is something we could not confirm from the gazetted text, so treat the detail as reported and verify with FBR.</p>

<h2>Worked example: what a fake supplier invoice could cost</h2>
<p>A Faisalabad textile trader buys yarn from a supplier and receives a sales tax invoice for PKR 500,000 plus 18% sales tax.</p>
<ul>
<li>Value excluding tax: PKR 500,000</li>
<li>Sales tax at 18%: 500,000 × 0.18 = PKR 90,000</li>
<li>Invoice total: PKR 590,000</li>
</ul>
<p>Three months later the supplier is placed on the simulated invoice issuers register. Under the reported rules, the trader loses the PKR 90,000 input tax claimed on that invoice, has to reverse it and pays default surcharge. If the supplier never declared the matching output tax, a 20% penalty on the unmatched amount would add 90,000 × 0.20 = PKR 18,000. The supplier, if the sale was fictitious, faces a penalty equal to the invoice value of PKR 590,000. The trader's protection is due diligence before buying: check the supplier's registration and active taxpayer status, pay through banking channels and keep delivery records such as a <a href="/blog/delivery-challan-format">delivery challan</a>. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> is handy for checking amounts like these.</p>

<h2>Debit notes, credit notes and penalties</h2>
<p>According to KPMG's summary, debit and credit notes will be governed by an electronic adjustment mechanism, which fits with FBR's earlier general order limiting edits or cancellations of digital invoices to 72 hours after generation. In practice, plan for every correction after that window to go through a debit or credit note recorded electronically. Our guide to <a href="/blog/debit-note-vs-credit-note">debit notes vs credit notes</a> explains which document to use.</p>
<p>Penalties for non-compliance, including failing to issue proper invoices and failing to file returns, were reported as substantially increased. Because the amounts sit in section 33 of the Sales Tax Act and can be updated, use the current text rather than older figures.</p>

<h2>Retail price items and section 99B for small retailers</h2>
<h3>Third Schedule expansion</h3>
<p>The Third Schedule of the Sales Tax Act lists goods taxed on their printed retail price rather than the sale price. The Finance Act 2026 reportedly added items such as confectionery, pasta, sauces, household utensils, plastic and ceramic products, cosmetics and footwear. If you make or import these, your invoices must show the retail price and tax calculated on it.</p>
<h3>Section 99B special procedure</h3>
<p>Section 99B of the Income Tax Ordinance (an income tax provision, not a sales tax one) supports a voluntary special procedure for small retailers. KPMG reports that S.R.O. 1166(I)/2026, issued on 27 July 2026, sets tax at 1% of gross turnover, with a minimum of PKR 25,000, for individuals whose income is mainly from a retail shop with turnover up to PKR 200 million. Multi-shop owners, Tier-1 retailers and jewelers are excluded. Participants are reported to get relief from audits (with exceptions) and from certain withholding, POS and digital invoicing requirements. Some early press reports gave different figures, so confirm eligibility with FBR.</p>

<h2>Who is affected, and how</h2>
<table><thead><tr><th>Your situation</th><th>Key Finance Act 2026 point</th><th>Action</th></tr></thead><tbody>
<tr><td>Sales tax registered manufacturer or distributor</td><td>Mandatory integration, blacklisting risk, fake invoice rules</td><td>Integrate, vet suppliers, reconcile input tax monthly</td></tr>
<tr><td>Tier-1 retailer</td><td>POS integration continues; excluded from section 99B</td><td>Keep POS integration current</td></tr>
<tr><td>Small single-shop retailer</td><td>May opt into section 99B</td><td>Compare 1% of turnover with normal tax; ask an adviser</td></tr>
<tr><td>Maker or importer of newly listed retail price goods</td><td>Tax on printed retail price</td><td>Print retail prices and update invoice calculations</td></tr>
<tr><td>Freelancer or IT exporter, not sales tax registered</td><td>Little direct sales tax impact</td><td>See our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax in Pakistan</a> guide</td></tr>
</tbody></table>

<h2>Common mistakes under the new rules</h2>
<ul>
<li><strong>Assuming integration is optional</strong> because a deadline passed without a notice.</li>
<li><strong>Buying from the cheapest unregistered or unverified supplier</strong> and claiming input tax on its invoices.</li>
<li><strong>Editing invoices after 72 hours</strong> instead of issuing a debit or credit note.</li>
<li><strong>Paying suppliers in cash,</strong> which weakens your evidence that a purchase was real.</li>
<li><strong>Using an old retail price</strong> after an item moved into the Third Schedule.</li>
<li><strong>Confusing section 99B with sales tax relief.</strong> It is an income tax regime with its own conditions. Watch out for <a href="/blog/invoice-scams">fake invoice scams</a> too, which overlap with the fraud FBR is targeting.</li>
</ul>

<h2>Finance Act 2026 invoicing checklist</h2>
<ul>
<li>FBR e-invoicing integration live for every billing point</li>
<li>Supplier list checked for registration, active status and any listing</li>
<li>Monthly reconciliation of input tax with supplier output declarations</li>
<li>Corrections made through electronic debit or credit notes</li>
<li>Retail price goods priced and taxed correctly</li>
<li>Payments made through banks, with delivery evidence kept</li>
<li>Records retained for the statutory period; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a></li>
</ul>

<h2>Where a PDF invoice still fits in Pakistan</h2>
<p>Our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> is free, runs in your browser and exports a PDF with NTN and STRN fields. It does not connect to FBR, PRAL or a licensed integrator, so it is not a substitute for FBR digital invoicing if you are sales tax registered. It suits freelancers and businesses that are not registered for sales tax, quotations and proformas, and invoices to foreign clients for exported services.</p>

<h2>Next step</h2>
<p>If you are sales tax registered, confirm your integration status and run a supplier check this month. If you are unsure whether the Finance Act 2026 changes your position, take this list to your tax practitioner and ask for confirmation against the gazetted Act and FBR's S.R.O.s. For the integration process itself, read the <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing guide</a>.</p>
`,
  },
];
