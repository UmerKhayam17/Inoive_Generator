import type { PostDraft } from "../blog";

export const EINVOICING_2027_B_POSTS: PostDraft[] = [
  {
    slug: "italy-sdi-e-invoicing",
    title: "Italy E-Invoicing SDI Guide: FatturaPA and Codice Destinatario",
    description:
      "Italy e-invoicing via the SDI explained: who must use FatturaPA XML, the codice destinatario, the 12-day deadline, forfettari rules and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Italy",
    related: [
      "e-invoicing-mandates-2027",
      "peppol-vs-clearance-model",
      "e-invoicing-guide",
      "vida-vat-in-the-digital-age",
    ],
    faqs: [
      {
        q: "What is the SDI in Italian e-invoicing?",
        a: "The Sistema di Interscambio (SDI) is the exchange platform run by the Agenzia delle Entrate. Every domestic invoice between Italian businesses, and between businesses and consumers, must be sent to the SDI as a structured XML file. The SDI checks the file, rejects it if it fails validation, and delivers it to the buyer's channel. An invoice that has not passed through the SDI is not treated as legally issued.",
      },
      {
        q: "What is FatturaPA?",
        a: "FatturaPA is the name of the XML format used for Italian electronic invoices. It started with invoices to the public administration, which is where the PA comes from, and the same schema family is now used for business-to-business and business-to-consumer invoices too. The Agenzia delle Entrate publishes the technical specifications; version 1.9.1 became usable from 15 May 2026, according to its e-invoicing page.",
      },
      {
        q: "What is the codice destinatario?",
        a: "It is the routing code that tells the SDI where to deliver the invoice. Private businesses receive a seven-character code from their software provider or intermediary. Public administration offices use a six-character codice univoco ufficio. If the buyer has no code, you can use a PEC email address, and for consumers or buyers without a channel you enter seven zeros (0000000). Foreign customers use XXXXXXX.",
      },
      {
        q: "Do forfettari have to issue electronic invoices?",
        a: "Yes. Since 1 January 2024, all taxpayers in the regime forfettario must issue e-invoices through the SDI, regardless of revenue. Those with revenue above 25,000 euros had already been brought in from July 2022. Forfettari charge no VAT, so their invoices normally use regime code RF19, the nature code N2.2 for the non-taxable line, and the two-euro stamp duty when the amount exceeds 77.47 euros.",
      },
      {
        q: "How long do I have to send an invoice to the SDI?",
        a: "For an immediate invoice, you generally have 12 days from the date of the transaction to transmit it. For deferred invoices that group several deliveries or services backed by transport documents or similar records, the deadline is the 15th day of the month after the transactions. The invoice date in the XML should still reflect the transaction date, not the transmission date.",
      },
      {
        q: "Can I still send a PDF invoice to an Italian client?",
        a: "For a domestic B2B or B2C sale, a PDF on its own is not a valid Italian invoice. You can send a PDF courtesy copy, but the legal invoice is the XML that passed through the SDI. If you are a foreign business with no Italian VAT registration selling to an Italian company, you are outside the SDI obligation and can invoice normally, while your client handles any reverse-charge reporting.",
      },
      {
        q: "How do Italian businesses invoice foreign customers?",
        a: "They may send the invoice through the SDI using the conventional code XXXXXXX, with the customer's country code and identifier in the buyer fields. Since July 2022, cross-border data that used to go in the separate esterometro return is reported through the SDI instead. A copy of the invoice still has to reach the foreign customer by email or another channel, because the customer has no SDI mailbox.",
      },
      {
        q: "Is Italy allowed to keep mandatory e-invoicing under EU law?",
        a: "Yes. Mandatory e-invoicing requires a derogation from the EU VAT Directive. Council Implementing Decision (EU) 2024/3150 extended Italy's authorisation until 31 December 2027, or earlier if a general EU system applies before then. The EU's VAT in the Digital Age package is expected to make domestic e-invoicing mandates possible without a derogation, so Italy's model is likely to continue after 2027.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Italy e-invoicing runs through the SDI (Sistema di Interscambio), the Agenzia delle Entrate's clearance hub. Almost every Italian business and self-employed person, including forfettari since 1 January 2024, must issue invoices as FatturaPA XML files, address them with a codice destinatario or PEC, and transmit them to the SDI, usually within 12 days of the sale.</p>
<p>Italy was the first EU country to make e-invoicing mandatory for business-to-business and business-to-consumer sales, starting in 2019, and its system has become a template for later mandates. If you are comparing countries, our overview of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates coming in 2027</a> shows where Italy fits. If you just need a clean invoice for a client outside Italy's system, you can build one in our free <a href="/invoice-generator">invoice generator</a>.</p>
<p><strong>Important:</strong> This is general information, not tax or legal advice. Italian rules have many sector exceptions, so confirm your position with a commercialista.</p>

<h2>How Italy e-invoicing through the SDI works</h2>
<p>Italy uses a clearance model. That means the tax authority sits in the middle of every invoice instead of receiving data after the fact. If the difference is new to you, our guide to <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance models</a> explains it in detail. In practice, the flow looks like this:</p>
<ol>
<li>The seller creates the invoice as an XML file in the FatturaPA format, using accounting software, an intermediary, or the free tools in the Agenzia delle Entrate's Fatture e Corrispettivi area.</li>
<li>The file is signed if required and sent to the SDI by web upload, PEC, web service or FTP channel.</li>
<li>The SDI runs format and content checks: VAT numbers, tax codes, mandatory fields, arithmetic and file naming.</li>
<li>If the file fails, the SDI returns a rejection notice (notifica di scarto) and the invoice is treated as never issued. You fix it and resend.</li>
<li>If it passes, the SDI delivers it to the buyer's channel identified by the codice destinatario or PEC, and sends the seller a delivery receipt.</li>
<li>If delivery is impossible, for example because the buyer has no channel, the SDI makes the invoice available in the buyer's reserved area and tells the seller to send a copy another way.</li>
</ol>
<p>Because the SDI sees each invoice, the Agenzia uses the data for pre-filled VAT records and risk analysis. That is the main reason Italy's VAT gap narrowed after the mandate, and why so many countries copied the approach. For a broader introduction to structured invoices, read our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</p>

<h2>Who must use FatturaPA and the SDI</h2>
<p>The obligation covers taxable persons who are established or identified for VAT in Italy. In 2026 that includes:</p>
<ul>
<li><strong>Companies and partnerships</strong> for B2B and B2C sales, since 1 January 2019.</li>
<li><strong>Suppliers to the public administration</strong>, which has required FatturaPA since 2014 for central bodies and 2015 for local ones.</li>
<li><strong>Forfettari (flat-rate taxpayers)</strong>: those with revenue above 25,000 euros from 1 July 2022, and all of them from 1 January 2024.</li>
<li><strong>Cross-border reporting</strong>: since 1 July 2022, sales to and purchases from foreign parties are reported through the SDI rather than the old esterometro return.</li>
</ul>
<p>There are notable exclusions. Healthcare providers who send patient expense data to the Sistema Tessera Sanitaria are barred from e-invoicing those services to private individuals, to protect medical data. A few small categories, such as farmers in the special exemption regime, also sit outside. Non-resident businesses that are not VAT-identified in Italy are not required to issue through the SDI.</p>

<h2>Codice destinatario, PEC and special codes</h2>
<p>The codice destinatario is the most common source of delivery problems, so get it right before you send. This table shows which value goes in the field:</p>
<table>
<thead><tr><th>Buyer</th><th>What to enter</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Italian business with a provider</td><td>Its seven-character codice destinatario</td><td>Ask for it with the buyer's partita IVA</td></tr>
<tr><td>Italian business using PEC only</td><td>0000000 plus the PEC address</td><td>The SDI delivers to the certified email</td></tr>
<tr><td>Public administration office</td><td>Six-character codice univoco ufficio</td><td>Listed in the IPA public index; CIG or CUP codes may also be required</td></tr>
<tr><td>Italian consumer</td><td>0000000 and the buyer's codice fiscale</td><td>Give the consumer a paper or PDF copy</td></tr>
<tr><td>Foreign customer (EU or non-EU)</td><td>XXXXXXX</td><td>Country code in IdPaese, identifier in IdCodice; send a copy directly</td></tr>
</tbody>
</table>
<p>Note that if the buyer has registered a preferred channel in the Agenzia's portal, the SDI will deliver there regardless of what you entered. That registration is why many small businesses tell suppliers to "just use seven zeros".</p>
<h3>Receiving e-invoices in Italy</h3>
<p>The receiving side matters as much as sending. Every Italian VAT number can see the invoices addressed to it in the Fatture e Corrispettivi reserved area, even when no codice destinatario was given. Buyers should record purchase invoices from the SDI data, not from PDF copies, because the SDI file is the legal document and the date it is delivered affects when input VAT can be claimed. When an Italian business buys services from a foreign supplier that does not use the SDI, it creates a reverse-charge integration document (type TD17 for services, TD18 for intra-EU goods, TD19 for certain goods bought from non-residents) and sends that to the SDI itself. That is why a foreign freelancer billing an Italian company can send a normal invoice: the client does the SDI reporting on its side.</p>

<h3>Key fields in a FatturaPA file</h3>
<p>Beyond the routing code, a valid XML invoice carries the same content a normal <a href="/blog/vat-invoice-guide">VAT invoice</a> would, in structured form:</p>
<ul>
<li>Document type code, for example TD01 for a standard invoice or TD04 for a credit note.</li>
<li>Seller and buyer partita IVA and/or codice fiscale. Our guide to <a href="/blog/tax-id-on-invoice">tax IDs on invoices</a> covers why these must match the registry exactly.</li>
<li>A progressive invoice number and date. A consistent sequence matters, so a tool like our <a href="/tools/invoice-number-generator">invoice number generator</a> helps when you plan your series.</li>
<li>Tax regime code (RF01 for ordinary, RF19 for forfettario).</li>
<li>Line descriptions, quantities, unit prices, VAT rate or a nature code (N1 to N7) explaining why no VAT is charged.</li>
<li>Withholding tax block (DatiRitenuta) for professionals billing Italian businesses.</li>
<li>Stamp duty block (DatiBollo) where the 2-euro bollo applies.</li>
<li>Payment terms and IBAN.</li>
</ul>

<h2>Deadlines: when to transmit</h2>
<p>Italian VAT law fixes the invoice date by the date of the transaction, but gives you time to transmit:</p>
<table>
<thead><tr><th>Invoice type</th><th>Transmission deadline</th></tr></thead>
<tbody>
<tr><td>Immediate invoice (fattura immediata)</td><td>Within 12 days of the transaction</td></tr>
<tr><td>Deferred invoice (fattura differita)</td><td>By the 15th of the month after the transactions it covers</td></tr>
<tr><td>Reporting of purchases from abroad (TD17, TD18, TD19)</td><td>By the 15th of the month after receipt or the transaction</td></tr>
<tr><td>Resubmission after an SDI rejection</td><td>Within 5 days of the rejection notice, keeping the original number and date</td></tr>
</tbody>
</table>
<p>Corrections work differently from paper invoicing. Once the SDI has delivered an invoice, you cannot edit or delete it. You issue a credit note (TD04) and, if needed, a new invoice. Our <a href="/blog/credit-note-guide">credit note guide</a> explains the logic, which is the same in Italy, just in XML.</p>

<h2>Forfettari, withholding tax and the bollo</h2>
<p>Most freelancers in Italy fall into one of two camps: the flat-rate regime forfettario, or the ordinary regime with VAT. Their invoices look very different.</p>
<h3>Forfettario invoices</h3>
<p>Forfettari do not charge VAT and are not subject to withholding by their clients. Their XML invoices use regime RF19, nature code N2.2 on the lines, and a short statement that the transaction is carried out under the flat-rate regime. If the invoice total exceeds 77.47 euros, a 2-euro stamp duty (imposta di bollo) applies and must be flagged in the DatiBollo block. The Agenzia then calculates the bollo due from SDI data each quarter and the issuer pays it.</p>
<h3>Ordinary regime professionals</h3>
<p>Professionals in the ordinary regime charge VAT (22% standard rate) and, when billing an Italian business that acts as withholding agent, suffer a 20% ritenuta d'acconto on the fee. The client pays the withholding to the state on your behalf. For the general concept, see our explainer on <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Worked example: two Italian invoices</h2>
<p><strong>Forfettario consultant.</strong> Giulia is a forfettaria consultant. She bills a Milan company 1,500 euros for a project. No VAT is charged (N2.2), there is no withholding, and the total is above 77.47 euros, so the 2-euro bollo applies. Many forfettari recharge it to the client:</p>
<ul>
<li>Fee: 1,500.00 euros</li>
<li>VAT: 0.00 (N2.2)</li>
<li>Stamp duty recharged: 2.00 euros</li>
<li>Total invoice and amount due: 1,502.00 euros</li>
</ul>
<p><strong>Ordinary regime designer.</strong> Marco is in the ordinary regime and bills an Italian agency 2,000 euros:</p>
<ul>
<li>Fee: 2,000.00 euros</li>
<li>VAT at 22%: 440.00 euros</li>
<li>Invoice total: 2,440.00 euros</li>
<li>Withholding at 20% of the fee: 400.00 euros</li>
<li>Net amount the agency pays Marco: 2,440.00 minus 400.00 = 2,040.00 euros</li>
</ul>
<p>Both invoices go to the SDI as XML within 12 days of completing the work. If you want to sanity-check the VAT arithmetic before you enter it, our guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> walks through the formulas.</p>

<h2>Storage, free tools and penalties</h2>
<p>E-invoices must be kept in compliant digital storage (conservazione sostitutiva). The Agenzia offers a free storage service if you sign the agreement in its portal, and most accounting software includes one. Italian law generally requires tax records to be kept for at least ten years; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> compares this with other countries.</p>
<p>The <a href="https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" target="_blank" rel="noopener noreferrer">Agenzia delle Entrate e-invoicing section</a> lists free services to prepare, send, store and consult invoices, including a web form and the FatturAE app. For a handful of invoices a month, these are enough.</p>
<p>Penalties for failing to issue an invoice, or issuing one outside the SDI, are calculated as a percentage of the VAT involved, with fixed minimums where no VAT was due. The sanctions system was reformed from 1 September 2024 and you can reduce penalties through ravvedimento operoso if you correct quickly. The exact figure depends on the case, so ask an adviser rather than estimating it yourself.</p>

<h2>Italy after 2027: what changes next</h2>
<p>Italy's mandate needs an EU derogation. <a href="https://eur-lex.europa.eu/eli/dec_impl/2024/3150/oj/eng" target="_blank" rel="noopener noreferrer">Council Implementing Decision (EU) 2024/3150</a> extends it until 31 December 2027, with any renewal request due by 31 March 2027. The EU's VAT in the Digital Age reform is set to let member states impose domestic e-invoicing without a derogation, and to introduce EU-wide digital reporting for cross-border B2B sales from 2030. Our explainer on <a href="/blog/vida-vat-in-the-digital-age">ViDA</a> covers that timeline.</p>
<p>For businesses, the practical message is that the SDI is not going away. Expect continued technical updates, such as the 1.9.1 specifications in 2026, and closer alignment with the European standard EN 16931 over time. Other clearance systems, such as <a href="/blog/romania-e-factura">Romania's e-Factura</a> and <a href="/blog/mexico-cfdi-invoice">Mexico's CFDI</a>, follow similar logic, so the habits you build for Italy carry over.</p>

<h2>Practical checklist for Italy e-invoicing</h2>
<ol>
<li>Confirm whether you are VAT-established or identified in Italy. If not, the SDI obligation does not apply to you.</li>
<li>Choose a channel: Agenzia free tools, accounting software, or an intermediary.</li>
<li>Collect each client's partita IVA or codice fiscale, plus codice destinatario or PEC.</li>
<li>Set the right regime code (RF01 or RF19) and VAT or nature codes on every line.</li>
<li>Add withholding and bollo blocks where they apply.</li>
<li>Transmit within 12 days and watch for rejection notices.</li>
<li>Correct with credit notes, never by editing a delivered invoice.</li>
<li>Activate compliant storage and keep files for at least ten years.</li>
</ol>

<h2>Create your invoices for clients outside the SDI</h2>
<p>Italy e-invoicing through the SDI is strict, but it is predictable once your codes, deadlines and regime settings are right. If you are a foreign freelancer billing an Italian company, or you need a clear PDF courtesy copy alongside your XML, create it in minutes with our free <a href="/invoice-generator">invoice generator</a> and keep the format consistent with an <a href="/invoice-templates/minimal">invoice template</a>.</p>
`,
  },
  {
    slug: "mexico-cfdi-invoice",
    title: "CFDI Invoice Guide: Mexico's CFDI 4.0 Factura Electrónica Rules",
    description:
      "CFDI invoice basics for Mexico: what CFDI 4.0 requires, the RFC and receiver data SAT checks, PUE vs PPD, retentions, cancellation rules and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Mexico",
    related: [
      "brazil-nfe-invoice",
      "peppol-vs-clearance-model",
      "e-invoicing-guide",
      "withholding-tax-on-invoices",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "What is a CFDI invoice?",
        a: "CFDI stands for Comprobante Fiscal Digital por Internet, Mexico's mandatory electronic invoice. It is an XML file built to SAT's Anexo 20 specification, sealed with the issuer's digital seal and then certified (timbrado) by an authorised provider (PAC) or SAT's own free service. Only a certified CFDI is a valid tax receipt. The PDF most people see is just a printed representation of the XML.",
      },
      {
        q: "Is CFDI 4.0 mandatory?",
        a: "Yes. CFDI 4.0 has been the only accepted version since 1 April 2023, when the transition period with version 3.3 ended. Every invoice, credit note, payment receipt (complemento de pago) and payroll receipt issued in Mexico must use version 4.0. Issuers who try to stamp an older version will be rejected by their PAC.",
      },
      {
        q: "What receiver data does CFDI 4.0 require?",
        a: "You need the buyer's RFC, their name or company name exactly as it appears in SAT records, the postal code of their tax address, their tax regime code and the uso CFDI code describing how they will use the invoice. Article 29-A of the Federal Tax Code lists these requirements. The quickest way to get them right is to ask the client for their Constancia de Situación Fiscal.",
      },
      {
        q: "What is the difference between PUE and PPD?",
        a: "PUE (Pago en una sola exhibición) means the invoice was paid in full when issued or within the same month. PPD (Pago en parcialidades o diferido) means payment comes later or in instalments. If you mark an invoice PPD, you must issue a payment receipt CFDI, the complemento de pago or REP, when each payment arrives, generally by the fifth day of the following month.",
      },
      {
        q: "How do I invoice a customer without an RFC?",
        a: "Use the generic RFC XAXX010101000 for domestic buyers who do not give an RFC, with the name PUBLICO EN GENERAL. Many businesses group these sales into a factura global with the InformacionGlobal node showing the period. For foreign customers without a Mexican RFC, the generic foreign RFC XEXX010101000 is used along with their country and foreign tax ID.",
      },
      {
        q: "How long do I have to cancel a CFDI?",
        a: "Under Article 29-A of the Federal Tax Code, a CFDI can be cancelled no later than the month in which the annual income tax return for the year of issue is due, which is March for companies and April for individuals. Most cancellations also require the receiver's acceptance, and you must choose one of four official cancellation reasons. Income invoices that are cancelled must be supported with documentation.",
      },
      {
        q: "Can freelancers outside Mexico issue a CFDI?",
        a: "Generally no. A CFDI requires a Mexican RFC, an e.firma and a digital seal certificate, so it is issued by Mexican taxpayers. A foreign freelancer billing a Mexican company usually sends a normal commercial invoice. The Mexican client then handles any tax obligations on imported services. Your invoice should still show the client's RFC and full legal name to help their accounting.",
      },
      {
        q: "Does SAT offer a free CFDI tool?",
        a: "Yes. SAT's free invoicing service, accessed with your RFC and e.firma or password in the SAT portal, lets taxpayers create and stamp CFDI 4.0 invoices without paying a PAC. It suits low volumes. Businesses issuing many invoices, payment receipts or invoices with complex complements usually use paid billing software connected to a PAC for speed and automation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A CFDI invoice is Mexico's mandatory electronic invoice: an XML file in CFDI 4.0 format, sealed by the issuer and certified by a PAC or SAT's free service. It must include the issuer's and buyer's RFC, the buyer's exact name, tax postal code, tax regime and uso CFDI, or SAT will reject it.</p>
<p>Mexico has required electronic invoicing for years, and it runs one of the most comprehensive clearance systems in the world. Whether you are a Mexican freelancer issuing your first factura electrónica or a foreign company receiving CFDIs from suppliers, this guide covers what you need. If you are outside Mexico and simply need a professional invoice for a Mexican client, our free <a href="/invoice-generator">invoice generator</a> handles that.</p>
<p><strong>Important:</strong> This is general information, not tax advice. SAT rules change every year through the Resolución Miscelánea Fiscal, so confirm details with a contador.</p>

<h2>What a CFDI invoice is and how certification works</h2>
<p>A CFDI (Comprobante Fiscal Digital por Internet) is not just an invoice that happens to be digital. It is a structured XML file built to SAT's Anexo 20 standard. The process works like this:</p>
<ol>
<li>The issuer creates the XML in billing software or SAT's free service.</li>
<li>The issuer signs it with their digital seal certificate (CSD), obtained from SAT using an e.firma.</li>
<li>A PAC (Proveedor Autorizado de Certificación) validates the file against SAT rules, including a real-time check of the receiver's RFC, name, postal code and regime.</li>
<li>If valid, the PAC adds the timbre fiscal digital with a unique folio fiscal (UUID) and reports it to SAT.</li>
<li>The issuer sends the XML and a PDF representation to the customer.</li>
</ol>
<p>Only the stamped XML has legal value. The PDF is a convenience. This is a classic clearance model, similar in spirit to <a href="/blog/italy-sdi-e-invoicing">Italy's SDI</a>, and different from network models like Peppol. Our comparison of <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance models</a> explains the trade-offs, and the <a href="/blog/e-invoicing-guide">e-invoicing guide</a> covers the basics.</p>

<h2>CFDI 4.0 requirements: the data SAT checks</h2>
<p>CFDI 4.0 has been the only valid version since 1 April 2023. Its biggest change was stricter receiver data. Article 29-A of the Federal Tax Code (CFF) lists the core requirements, which this table summarises:</p>
<table>
<thead><tr><th>Field</th><th>What to enter</th><th>Common mistake</th></tr></thead>
<tbody>
<tr><td>Issuer RFC, name and régimen fiscal</td><td>Your RFC and regime code, such as 612 or 626</td><td>Using an outdated regime after switching to RESICO</td></tr>
<tr><td>Lugar de expedición</td><td>Postal code where the invoice is issued</td><td>Using a branch address that is not registered</td></tr>
<tr><td>Receiver RFC</td><td>The buyer's 12 or 13 character RFC</td><td>Typos; using a generic RFC when the buyer has one</td></tr>
<tr><td>Receiver name</td><td>Exactly as in SAT records, without the legal form suffix such as "SA de CV"</td><td>Adding the company type or trade name</td></tr>
<tr><td>Receiver tax postal code</td><td>Postal code of the buyer's domicilio fiscal</td><td>Using the delivery address</td></tr>
<tr><td>Receiver régimen fiscal</td><td>The buyer's current regime code</td><td>Not rechecking after the buyer changes regime</td></tr>
<tr><td>Uso CFDI</td><td>How the buyer will use it, such as G03 general expenses</td><td>A code incompatible with the buyer's regime</td></tr>
<tr><td>Product and unit keys</td><td>SAT catalogue codes for each line</td><td>Using a generic code for everything</td></tr>
<tr><td>Payment method and form</td><td>PUE or PPD, plus forma de pago such as 03 transfer</td><td>Marking PUE when the invoice is unpaid</td></tr>
<tr><td>Exportación and objeto de impuesto</td><td>Whether it is an export and whether the line is subject to tax</td><td>Leaving defaults that do not match the sale</td></tr>
</tbody>
</table>
<p>The simplest fix for nearly every rejection is to ask the client for their Constancia de Situación Fiscal and copy the data exactly. It is the same principle behind putting the correct <a href="/blog/tax-id-on-invoice">tax ID on any invoice</a>, but SAT enforces it automatically.</p>
<h3>The most common CFDI 4.0 rejection errors</h3>
<p>When a PAC refuses to stamp an invoice, the error message usually points to one of a short list of problems:</p>
<ul>
<li><strong>Name mismatch:</strong> the receiver name differs from SAT records by a single letter, an accent or an added "SA de CV".</li>
<li><strong>Postal code mismatch:</strong> the code is the buyer's delivery or branch address instead of the domicilio fiscal on their certificate.</li>
<li><strong>Regime and uso CFDI conflict:</strong> for example, a uso CFDI that is only valid for companies sent to an individual.</li>
<li><strong>Expired or revoked seal certificate:</strong> CSDs expire after a few years and must be renewed with the e.firma.</li>
<li><strong>Tax object flag:</strong> a line marked as not subject to tax while VAT is still calculated on it.</li>
</ul>
<p>Fix the data at the source, in your customer list, rather than editing each invoice, and most rejections disappear.</p>
<h3>CFDI document types</h3>
<p>CFDI is not only for sales. Each file carries a type: I (ingreso) for invoices, E (egreso) for credit notes, discounts and returns, P (pago) for payment receipts, N (nómina) for payroll and T (traslado) for goods in transit. A freelancer typically uses I, P and occasionally E. Credit notes (E) must reference the related invoice UUID, which keeps the chain auditable for SAT.</p>

<h2>PUE vs PPD and the complemento de pago</h2>
<p>CFDI 4.0 makes you declare up front whether the invoice is already paid:</p>
<ul>
<li><strong>PUE (pago en una sola exhibición):</strong> paid in full at issue or within the same month. No further document needed.</li>
<li><strong>PPD (pago en parcialidades o diferido):</strong> paid later or in instalments. When each payment arrives, you issue a separate payment receipt CFDI, the complemento de pago (REP), generally by the fifth day of the following month.</li>
</ul>
<p>Freelancers on net-30 terms should usually use PPD, then issue an REP when the client pays. If you take deposits and final payments, the logic mirrors our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a>, just with SAT documents attached to each step.</p>

<h2>Withholdings on professional services (retenciones)</h2>
<p>When an individual (persona física) bills a company (persona moral) for professional services or rent, the company typically withholds tax and the CFDI must show it. Under the general business regime (612), the usual retentions are 10% income tax (ISR) and two-thirds of the 16% VAT. Under RESICO (626), the ISR retention is 1.25% instead. RESICO is a simplified regime for individuals with annual income up to 3.5 million pesos, where income tax is charged at low rates on gross income. Many freelancers move to it for that reason, but it changes the retention on every invoice to companies, so update your billing software the day your regime changes. Clients will also check that the regime on your invoice matches your Constancia, so a stale regime code can delay payment even when the arithmetic is right. For context on how withholding appears on invoices in other countries, see our explainer on <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Worked example: a CFDI with retentions</h2>
<p>Ana is a freelance web developer in Guadalajara registered under regime 612. She invoices a client company for a website at a subtotal of 20,000 pesos, marked PPD because the client pays in 30 days.</p>
<table>
<thead><tr><th>Line</th><th>Regime 612</th><th>RESICO (626)</th></tr></thead>
<tbody>
<tr><td>Subtotal</td><td>20,000.00</td><td>20,000.00</td></tr>
<tr><td>VAT 16%</td><td>+3,200.00</td><td>+3,200.00</td></tr>
<tr><td>ISR retention</td><td>-2,000.00 (10%)</td><td>-250.00 (1.25%)</td></tr>
<tr><td>VAT retention (two-thirds of 3,200)</td><td>-2,133.33</td><td>-2,133.33</td></tr>
<tr><td>Total payable</td><td>19,066.67</td><td>20,816.67</td></tr>
</tbody>
</table>
<p>Check the regime 612 column: 20,000 plus 3,200 is 23,200, minus 2,000 is 21,200, minus 2,133.33 is 19,066.67 pesos. When the client pays, Ana issues an REP for 19,066.67 pesos referencing the invoice UUID. If you want to double-check percentages before stamping, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> handles the VAT part.</p>

<h2>Público en general, factura global and foreign buyers</h2>
<p>Not every buyer has or gives an RFC. CFDI 4.0 handles this with generic RFCs:</p>
<ul>
<li><strong>Domestic buyers without an RFC:</strong> use XAXX010101000 with the name PUBLICO EN GENERAL. Retailers often group these sales in a periodic factura global, which must include the InformacionGlobal node showing the period, month and year.</li>
<li><strong>Foreign buyers:</strong> use XEXX010101000, plus the buyer's country and foreign tax ID. Exports of services may qualify for 0% VAT if the conditions in the VAT law are met, so check before you zero-rate.</li>
</ul>
<p>If you are on the other side, a foreign business billing a Mexican company, you do not issue a CFDI. Send a standard commercial invoice in the agreed currency; our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the details, including how to state currency and exchange rates.</p>

<h2>How to cancel a CFDI</h2>
<p>You cannot edit a stamped CFDI. You cancel it and, if needed, issue a replacement. The rules:</p>
<ol>
<li><strong>Choose a reason code.</strong> SAT uses four: 01 invoice issued with errors and replaced (you must cite the replacement UUID), 02 errors with no replacement, 03 operation did not take place, and 04 nominative operation related to a factura global.</li>
<li><strong>Request cancellation</strong> through SAT's portal or your PAC.</li>
<li><strong>Get receiver acceptance</strong> where required. The receiver generally has three business days to accept or reject. If they do not respond, the request is treated as accepted, with some exceptions in the 2026 Miscellaneous Tax Resolution.</li>
<li><strong>Meet the deadline.</strong> Under Article 29-A of the CFF, cancellation must happen no later than the month in which the annual income tax return for the year of issue is due.</li>
<li><strong>Document the reason</strong> for any cancelled income invoice, because SAT can verify it.</li>
</ol>
<p>SAT's <a href="https://www.sat.gob.mx/minisitio/Factura/documentos/cancelacion/ar_esquema_cancelacion.pdf" target="_blank" rel="noopener noreferrer">CFDI cancellation scheme document</a> describes the receiver acceptance flow. For a non-Mexican view of fixing invoice errors, our guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> covers credit notes and voiding in general.</p>

<h2>Getting set up to issue CFDIs</h2>
<ol>
<li>Register with SAT and get your RFC.</li>
<li>Obtain your e.firma at a SAT office.</li>
<li>Generate your CSD (digital seal certificate) using the e.firma.</li>
<li>Choose SAT's free invoicing service or a PAC-connected billing platform.</li>
<li>Load your regime, postal code and product keys into the software.</li>
<li>Collect each client's Constancia de Situación Fiscal before the first invoice.</li>
<li>Store every XML; the XML, not the PDF, is your legal record.</li>
</ol>
<p>Plan for the first month to take longer than you expect. Most new issuers spend more time collecting clients' fiscal data and learning the catalogue codes than on the invoices themselves. Once your customer list and product keys are set up correctly, issuing a CFDI takes about as long as filling in a normal invoice, and the stamped XML gives both you and your client a record SAT already holds.</p>
<p>Keep a predictable internal series as well. Even though the UUID is the legal identifier, a clean serie and folio scheme makes reconciliation easier, which is where an <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</p>

<h2>How Mexico compares with other e-invoicing regimes</h2>
<p>Mexico's CFDI is broader than most systems: it covers invoices, payments, payroll and transport waybills. Countries building newer mandates, from <a href="/blog/nigeria-e-invoicing">Nigeria's NRS rollout</a> to <a href="/blog/romania-e-factura">Romania's e-Factura</a>, use similar validation-before-validity logic. Our roundup of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates for 2027</a> puts them side by side.</p>

<h2>Create your invoice for Mexican clients</h2>
<p>A valid CFDI invoice comes down to accurate receiver data, the right PUE or PPD choice, correct retentions and disciplined cancellation. If you are a foreign supplier billing a Mexican company, create a clear commercial invoice with the client's RFC and legal name in our free <a href="/invoice-generator">invoice generator</a>, then pick a layout from our <a href="/invoice-templates/corporate">corporate invoice template</a>. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "nigeria-e-invoicing",
    title: "Nigeria E-Invoicing 2026: NRS MBS Rollout Dates and Rules",
    description:
      "Nigeria e-invoicing explained: the NRS (formerly FIRS) MBS rollout for large, medium and emerging taxpayers, live dates, IRNs, APPs and how to prepare now.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Nigeria",
    related: [
      "e-invoicing-mandates-2027",
      "peppol-vs-clearance-model",
      "e-invoicing-guide",
      "malaysia-lhdn-e-invoice",
    ],
    faqs: [
      {
        q: "Is e-invoicing mandatory in Nigeria?",
        a: "Yes, in phases. The Nigeria Revenue Service (NRS), which replaced the Federal Inland Revenue Service under the 2025 tax reform laws, requires businesses to transmit invoices through its E-Invoicing and Electronic Fiscal System. Large taxpayers with turnover above 5 billion naira had to be fully compliant by 31 July 2026. Medium taxpayers went live on 1 July 2026, and emerging taxpayers are scheduled to go live on 1 July 2027.",
      },
      {
        q: "What is the FIRS MBS?",
        a: "MBS stands for Merchant Buyer Solution, the national e-invoicing platform first launched by FIRS and now run by the NRS. Sellers transmit invoice data to the MBS, which validates it and assigns an Invoice Reference Number (IRN). Buyers can then confirm that supplier invoices are genuine. Businesses connect to it directly or through approved Access Point Providers and system integrators.",
      },
      {
        q: "When do medium taxpayers have to comply?",
        a: "According to the NRS phased timeline, medium taxpayers with annual turnover between 1 billion and 5 billion naira had stakeholder engagement from January to March 2026, a pilot from April to June 2026 and go-live on 1 July 2026. A post go-live review runs in October and November 2026, with compliance enforcement scheduled for January to March 2027.",
      },
      {
        q: "Do small businesses in Nigeria need e-invoicing yet?",
        a: "Businesses with turnover below 1 billion naira are classed as emerging taxpayers. Their schedule starts with stakeholder engagement in January to March 2027, a pilot in April to June 2027 and go-live on 1 July 2027, with enforcement from January to March 2028. Small suppliers to large companies may feel pressure sooner, because their customers want invoices that match the MBS data.",
      },
      {
        q: "What is an IRN on a Nigerian invoice?",
        a: "An IRN, or Invoice Reference Number, is the unique identifier attached to an invoice once it has been validated on the NRS platform. Large taxpayers are expected to confirm that inbound B2B supplier invoices carry a valid IRN. Think of it as proof the invoice exists in the tax authority's records, similar to the UUID on a Mexican CFDI.",
      },
      {
        q: "What are Access Point Providers in Nigeria?",
        a: "Access Point Providers (APPs) are NRS-approved technology providers that connect a business's ERP, accounting or point-of-sale system to the MBS through standard APIs. System integrators do similar work for larger set-ups. Most medium and large businesses use one rather than building a direct integration, because the APP handles formatting, transmission and status updates.",
      },
      {
        q: "What happens if a company does not comply?",
        a: "The NRS has said non-compliant large taxpayers face enforcement action, statutory penalties under the tax reform laws and possible operational disruption, and it began compliance monitoring in mid-2026. Advisers also warn that expenses not backed by compliant e-invoices may be harder to deduct and that input VAT claims may be questioned. The precise penalty depends on the provision applied.",
      },
      {
        q: "Does Nigerian e-invoicing apply to foreign freelancers?",
        a: "The mandate applies to businesses within the Nigerian tax net. A foreign freelancer who is not registered in Nigeria and bills a Nigerian company typically sends a normal commercial invoice. The Nigerian company handles any VAT self-accounting or withholding on imported services. Including the client's TIN and full legal name on your invoice makes their compliance easier.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Nigeria e-invoicing is live in phases through the NRS Merchant Buyer Solution (MBS), the platform launched by FIRS. Large taxpayers (turnover above 5 billion naira) had to be fully compliant by 31 July 2026, medium taxpayers (1 to 5 billion naira) went live on 1 July 2026 with enforcement from early 2027, and smaller "emerging" taxpayers go live on 1 July 2027.</p>
<p>Nigeria is one of Africa's most significant new e-invoicing mandates, and as of late 2026 it is in the middle of its rollout. This guide explains who is covered now, who is next, and what to do today. For a wider view, see our roundup of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates coming in 2027</a>. If you just need a clean invoice for a Nigerian client today, our free <a href="/invoice-generator">invoice generator</a> creates one in minutes.</p>
<p><strong>Important:</strong> This is general information, not tax or legal advice. The NRS publishes updates by public notice, so confirm dates with your adviser or Access Point Provider.</p>

<h2>What Nigeria e-invoicing is and who runs it</h2>
<p>The system was launched by the Federal Inland Revenue Service (FIRS), which became the Nigeria Revenue Service (NRS) under the tax reform laws enacted in 2025. The official name is the National E-Invoicing and Electronic Fiscal System (EFS), and the platform at its centre is the Merchant Buyer Solution, or MBS.</p>
<p>The model is a real-time clearance system. Sellers transmit invoice data to the MBS, the platform validates it and assigns an Invoice Reference Number (IRN), and buyers can verify the invoice against NRS records. That puts Nigeria closer to Mexico's <a href="/blog/mexico-cfdi-invoice">CFDI system</a> than to European network models. Our explainer on <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance models</a> covers the difference, and the general <a href="/blog/e-invoicing-guide">e-invoicing guide</a> explains structured invoices from scratch.</p>
<p>Although MBS is primarily a VAT control tool, advisers expect it to feed income tax checks as well, as has happened in Kenya and elsewhere.</p>
<p>The reason for the mandate is straightforward. Nigeria charges VAT at 7.5%, and for years the tax authority relied on periodic returns and audits to find under-declared sales and inflated input VAT claims. Real-time invoice data lets the NRS match what sellers report against what buyers claim, transaction by transaction. It also gives honest businesses a defence: an invoice with a valid IRN is much easier to support in an audit than a PDF in an inbox.</p>

<h2>FIRS MBS rollout timeline by taxpayer size</h2>
<p>The NRS announced a phased rollout by public notice in early 2026. Large taxpayers started in November 2025. The timeline, as summarised in the notice and adviser alerts, is:</p>
<table>
<thead><tr><th>Category</th><th>Annual turnover</th><th>Pilot</th><th>Go-live</th><th>Post go-live review</th><th>Enforcement</th></tr></thead>
<tbody>
<tr><td>Large taxpayers</td><td>Above 5 billion naira</td><td>Completed</td><td>Completed (from Nov 2025)</td><td>Jan to Mar 2026</td><td>Apr to Jun 2026; final deadline 31 Jul 2026</td></tr>
<tr><td>Medium taxpayers</td><td>1 billion to 5 billion naira</td><td>Apr to Jun 2026</td><td>1 Jul 2026</td><td>Oct to Nov 2026</td><td>Jan to Mar 2027</td></tr>
<tr><td>Emerging taxpayers</td><td>Below 1 billion naira</td><td>Apr to Jun 2027</td><td>1 Jul 2027</td><td>Oct to Nov 2027</td><td>Jan to Mar 2028</td></tr>
</tbody>
</table>
<h3>Where things stand in late 2026</h3>
<ul>
<li><strong>Large taxpayers</strong> are fully in scope. The NRS set 31 July 2026 as the date by which they had to complete onboarding, integration and validation and be transmitting live, and it has started compliance monitoring.</li>
<li><strong>Medium taxpayers</strong> are live and in the post go-live review window. This is the period to fix rejections and data gaps before enforcement begins in the first quarter of 2027.</li>
<li><strong>Emerging taxpayers</strong> are not yet required to transmit. Their stakeholder engagement starts in January 2027.</li>
</ul>
<h3>How to work out your category</h3>
<p>The categories are based on annual gross turnover, not profit, staff numbers or VAT registration date. Use your most recent full-year accounts. If you are close to a boundary, for example turnover of 950 million naira that is growing quickly, plan as if you are in the higher category, because moving up mid-rollout gives you less time. Groups should check each legal entity separately, since each company has its own TIN and its own invoices. If you are unsure which list you are on, the NRS and approved APPs can confirm it during onboarding.</p>

<h2>What large taxpayers had to do</h2>
<p>The NRS described a five-step compliance path, which medium taxpayers are now following too:</p>
<ol>
<li>Onboard onto the MBS platform.</li>
<li>Integrate the ERP or accounting software through an approved Access Point Provider (APP) or system integrator.</li>
<li>Complete end-to-end data validation and schema testing.</li>
<li>Transmit sales invoices, credit notes and debit notes to the NRS in real time.</li>
<li>Confirm that inbound B2B supplier invoices carry a valid IRN.</li>
</ol>
<p>Step five is the one that pulls smaller suppliers in early. A large buyer that must confirm IRNs on supplier invoices will start asking vendors whether they are on the system, even before those vendors are formally required to be.</p>

<h2>What a compliant Nigerian invoice contains</h2>
<p>MBS invoices are structured data rather than free-form PDFs, but the content is familiar. Expect to provide:</p>
<ul>
<li>Seller and buyer legal names and Tax Identification Numbers (TINs). Clean TIN data is the most common integration issue; see our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</li>
<li>A unique invoice number from your own series; an <a href="/tools/invoice-number-generator">invoice number generator</a> helps you design one that will not collide across branches.</li>
<li>Issue date, line descriptions, quantities, unit prices and totals.</li>
<li>VAT at the applicable rate (7.5% standard) or the reason it does not apply.</li>
<li>The IRN returned by the platform after validation.</li>
<li>Links between credit or debit notes and the original invoice.</li>
</ul>
<p>Corrections work through credit and debit notes, not edits. Our <a href="/blog/credit-note-guide">credit note guide</a> covers how to structure them.</p>

<h2>What this means if you sell to large companies</h2>
<p>Even if you are an emerging taxpayer with no go-live date until July 2027, the rollout can reach you through your customers. Large buyers must confirm that B2B supplier invoices carry a valid IRN, and their procurement teams are under pressure to show clean input VAT records. In practice that can mean:</p>
<ul>
<li>New supplier onboarding forms that ask for your TIN, VAT status and e-invoicing readiness.</li>
<li>Requests for invoices in a consistent structure, with your legal name exactly as registered.</li>
<li>Slower payment for invoices that cannot be matched to MBS data.</li>
<li>Questions about when you plan to connect through an APP.</li>
</ul>
<p>None of this is a legal obligation for you yet, but it is a commercial one. The simplest response is to tidy your invoicing now: one numbering series per entity, correct TINs for every customer, VAT shown separately and credit notes linked to the original invoice. If you also bill clients abroad, keep those invoices consistent too; our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and tax ID details.</p>

<h2>Worked example: is your company in scope yet?</h2>
<p>Chinedu runs a Lagos distribution company with annual turnover of 3.2 billion naira. That is between 1 billion and 5 billion, so it is a medium taxpayer. The company went live on 1 July 2026, is now in the October to November review window, and faces enforcement from January 2027.</p>
<p>A typical sale looks like this:</p>
<ul>
<li>Goods: 2,000,000 naira</li>
<li>VAT at 7.5%: 2,000,000 x 0.075 = 150,000 naira</li>
<li>Invoice total: 2,150,000 naira</li>
</ul>
<p>The invoice is transmitted through the company's APP, the MBS returns an IRN, and the customer, a large retailer, checks that IRN before booking the purchase. If the transmission had failed and the retailer received only a PDF, its finance team could hold payment until a valid IRN arrives. You can check the VAT figure with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>
<p>His supplier, a printing firm with turnover of 400 million naira, is an emerging taxpayer. It is not required to transmit until 1 July 2027, but it may still be asked by Chinedu's company for invoices that are easy to reconcile.</p>
<p>Notice what changed for Chinedu's finance team. Before go-live, a mistake on an invoice could be fixed quietly with a new PDF. Now every sales invoice, credit note and debit note exists in NRS records with its own IRN, so corrections must be made with linked credit or debit notes, and the sequence has to make sense to an auditor reading the platform data.</p>

<h2>Penalties and tax consequences</h2>
<p>The NRS has said that large taxpayers who missed the deadline face immediate enforcement action, statutory penalties and possible operational disruption. Nigeria's 2025 tax reform laws require the use of government-approved fiscal systems and prescribe penalties for non-compliance. Advisers also flag two indirect costs:</p>
<ul>
<li><strong>Expense deductibility:</strong> expenses not backed by compliant e-invoices may become harder to deduct for income tax.</li>
<li><strong>Input VAT:</strong> mismatches between your records and MBS data can trigger questions when you reclaim input VAT.</li>
</ul>
<p>We have not quoted penalty amounts because they depend on the provision applied. Ask your adviser for the figure that fits your case.</p>

<h2>How to prepare: a checklist for medium and emerging taxpayers</h2>
<ol>
<li>Confirm your category using last year's annual turnover.</li>
<li>Clean customer and supplier master data, especially TINs and legal names.</li>
<li>Pick an NRS-approved APP or system integrator and ask about their onboarding timeline.</li>
<li>Map your invoice fields to the MBS schema, including VAT treatment and credit notes.</li>
<li>Test in the sandbox, then run a pilot on a slice of transactions.</li>
<li>Train sales and finance teams that invoices without an IRN are not final.</li>
<li>Ask key suppliers about their own timelines so your purchase records line up.</li>
</ol>
<h3>Questions to ask an Access Point Provider</h3>
<p>Not all APPs are the same, and switching later is painful. Before you sign, ask:</p>
<ul>
<li>Are you on the current NRS list of approved providers, and for which services?</li>
<li>Which ERP, accounting and point-of-sale systems do you already connect to?</li>
<li>How do you handle rejected invoices and resubmissions, and how quickly do we see errors?</li>
<li>Do you support credit notes, debit notes and inbound IRN checks on supplier invoices?</li>
<li>What happens to invoicing if your service or the MBS is temporarily unavailable?</li>
<li>How is pricing structured: per invoice, per month or per entity?</li>
</ul>
<p>Write the answers into your project plan, and run the pilot on real but low-risk transactions before switching every invoice over.</p>
<p>The official <a href="https://einvoice.nrs.gov.ng" target="_blank" rel="noopener noreferrer">NRS Merchant Buyer Solution portal</a> is the entry point for onboarding.</p>

<h2>Lessons from other markets</h2>
<p>Nigeria's phased approach, with large companies first and small ones later, follows a path similar to <a href="/blog/malaysia-lhdn-e-invoice">Malaysia's LHDN e-invoice</a> and <a href="/blog/zatca-e-invoicing-guide">Saudi Arabia's ZATCA waves</a>. Next door in East Africa, <a href="/blog/kenya-etims-invoice">Kenya's eTIMS</a> shows where it may go: once invoice data is complete, the authority starts matching it against income tax returns. Businesses that treat e-invoicing as a data project, not just a software install, cope best.</p>

<h2>Create invoices that are ready for the MBS</h2>
<p>Nigeria e-invoicing is live for large and medium taxpayers, with emerging businesses following in July 2027. Until your go-live date, keep invoices clean, numbered and complete so the switch is painless. Our free <a href="/invoice-generator">invoice generator</a> lets you produce consistent invoices with TINs and VAT lines today, and our <a href="/invoice-templates/classic">classic invoice template</a> keeps the layout simple. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
  {
    slug: "kenya-etims-invoice",
    title: "KRA eTIMS Invoice Guide for Freelancers and Service Providers",
    description:
      "KRA eTIMS explained for freelancers and service providers: who must issue eTIMS invoices, which solution to use, the 2026 expense validation and an example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Kenya",
    related: [
      "freelancer-invoice-guide",
      "withholding-tax-on-invoices",
      "e-invoicing-guide",
      "e-invoicing-mandates-2027",
    ],
    faqs: [
      {
        q: "What is KRA eTIMS?",
        a: "eTIMS is the Electronic Tax Invoice Management System run by the Kenya Revenue Authority. It is a software-based way to generate tax invoices and transmit them to KRA, replacing older hardware tax registers. Each invoice is recorded by KRA, which lets it check sales, purchases and expenses against what businesses declare in their tax returns. Most solutions are free to use.",
      },
      {
        q: "Do non-VAT registered businesses need eTIMS?",
        a: "Yes. KRA's public notice of November 2023 confirmed that, under the Finance Act 2023, all persons carrying on business must generate and transmit invoices through eTIMS, including those not registered for VAT, effective from 1 September 2023. Non-VAT businesses issue a non-VAT eTIMS invoice. Being below the VAT threshold changes the invoice type, not whether you need one.",
      },
      {
        q: "Do freelancers in Kenya need to issue eTIMS invoices?",
        a: "If you are carrying on business in Kenya, including providing professional services to clients, yes. Your clients have a strong reason to ask: since 1 January 2024, business expenses not supported by an eTIMS invoice are not deductible, and from 2026 KRA validates returns against eTIMS data. Employment income under PAYE is exempt, so salaried work does not need eTIMS invoices.",
      },
      {
        q: "Which eTIMS solution should a freelancer use?",
        a: "Most individuals and sole proprietors start with eTIMS Lite, available on the web through eCitizen, through the USSD code *222# and as a mobile app. KRA's guidelines describe the Lite options as suited to non-VAT taxpayers with low invoice volumes. Businesses with higher volumes use the eTIMS Client or online portal, and companies with ERP systems integrate through OSCU or VSCU.",
      },
      {
        q: "What changed for eTIMS in 2026?",
        a: "From 1 January 2026, KRA validates income and expenses declared in income tax returns against eTIMS and TIMS invoice data, withholding tax returns and customs records. Expenses without compliant eTIMS invoices, and not covered by an exemption, risk being disallowed, and income seen in eTIMS but missing from a return may be treated as undeclared. KRA also added eTIMS compliance to Tax Compliance Certificate checks.",
      },
      {
        q: "Which expenses do not need an eTIMS invoice?",
        a: "Section 23A of the Tax Procedures Act and the 2024 Electronic Tax Invoice Regulations exempt several categories, including PAYE employment income, imported goods and imported services, core fees of licensed financial institutions and insurers, transactions subject to final withholding tax, airline passenger tickets, investment allowance items and internal accounting entries. The Commissioner can exempt other categories under the law.",
      },
      {
        q: "Is eTIMS free?",
        a: "KRA provides its eTIMS solutions, including eTIMS Lite web and app, the online portal and the eTIMS Client, without a software licence fee. Reports differ on whether a nominal charge applies to some USSD sessions, so check the current position with KRA. Businesses that integrate an ERP through OSCU or VSCU may pay a third-party integrator, but that cost is set by the provider, not KRA.",
      },
      {
        q: "Can I send a normal PDF invoice to a Kenyan client?",
        a: "You can send a PDF as a cover document or quote, but if you are carrying on business in Kenya, the tax invoice your client needs for deduction is the one generated through eTIMS. Foreign freelancers billing a Kenyan company are generally outside eTIMS, because imported services are exempt from the electronic invoicing requirement, so a standard commercial invoice works.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> KRA eTIMS is Kenya's mandatory electronic tax invoicing system. Every person carrying on business, including freelancers and non-VAT service providers, must issue invoices through eTIMS. Clients cannot deduct expenses without an eTIMS invoice, and from 1 January 2026 KRA validates income tax returns against eTIMS data, so compliant invoices now directly affect your clients' tax bills.</p>
<p>For freelancers, consultants and small service businesses, eTIMS has gone from a VAT tool to something every client asks about. This guide covers who needs it, which eTIMS solution fits, what changed in 2026 and how an eTIMS invoice works in practice. If you invoice foreign clients and need a standard invoice instead, use our free <a href="/invoice-generator">invoice generator</a>, and see our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> for the basics.</p>
<p><strong>Important:</strong> This is general information, not tax advice. KRA issues frequent public notices, so check the latest guidance or speak to a tax agent.</p>

<h2>What KRA eTIMS is</h2>
<p>eTIMS (Electronic Tax Invoice Management System) is KRA's software-based invoicing platform. It replaced the older hardware Electronic Tax Registers and sits alongside TIMS for businesses using tax control devices. Each invoice generated through eTIMS is recorded by KRA in real time or near real time.</p>
<p>That makes eTIMS a clearance-style system, similar in effect to <a href="/blog/mexico-cfdi-invoice">Mexico's CFDI</a> or <a href="/blog/nigeria-e-invoicing">Nigeria's MBS</a>. If the concept is new, our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> explains how structured invoices differ from PDFs.</p>

<h2>Who must issue eTIMS invoices</h2>
<p>The key milestones are:</p>
<table>
<thead><tr><th>Date</th><th>Change</th><th>Source</th></tr></thead>
<tbody>
<tr><td>1 September 2023</td><td>All persons carrying on business, including non-VAT registered, must generate and transmit invoices through eTIMS</td><td>Finance Act 2023; KRA public notice</td></tr>
<tr><td>1 January 2024</td><td>Business expenses not supported by an eTIMS invoice are not deductible</td><td>KRA public notice</td></tr>
<tr><td>2024</td><td>Tax Procedures (Electronic Tax Invoice) Regulations set the detailed rules and exemptions</td><td>Regulations under the Tax Procedures Act</td></tr>
<tr><td>October 2025</td><td>eTIMS/TIMS compliance added to Tax Compliance Certificate applications</td><td>KRA public notice</td></tr>
<tr><td>1 January 2026</td><td>Income tax returns validated against eTIMS, TIMS, withholding and customs data</td><td>KRA notice; adviser alerts</td></tr>
<tr><td>31 August 2026</td><td>eTIMS integrated with the government IFMIS system for public sector suppliers</td><td>KRA public notice</td></tr>
</tbody>
</table>
<p>KRA's <a href="https://www.kra.go.ke/news-center/public-notices/2071-on-boarding-of-non-vat-taxpayers-on-etims" target="_blank" rel="noopener noreferrer">public notice on onboarding non-VAT taxpayers</a> states the rule plainly: any business expenditure not supported by an eTIMS-generated invoice is not deductible for tax purposes.</p>
<p>In practice, this covers companies, partnerships, sole proprietors, professionals, turnover tax payers and landlords. Salaried employees do not need eTIMS for their employment income.</p>

<h2>eTIMS invoice for freelancers and service providers</h2>
<p>Freelancers often assume eTIMS is only for shops. It is not. If you design logos, write code, consult, tutor or provide any service as a business, your Kenyan business clients need an eTIMS invoice to deduct what they pay you. Since the 2026 validation started, many procurement teams will not pay without one.</p>
<h3>VAT vs non-VAT eTIMS invoices</h3>
<ul>
<li><strong>Not VAT registered:</strong> you issue a non-VAT eTIMS invoice showing your KRA PIN, the client's PIN, the service and the amount, with no VAT.</li>
<li><strong>VAT registered:</strong> once your taxable turnover passes the VAT threshold and you register, you issue VAT eTIMS invoices at the 16% standard rate where applicable. Our guide to <a href="/blog/vat-invoice-guide">VAT invoices</a> explains the general content rules.</li>
</ul>
<h3>What a non-VAT eTIMS invoice shows</h3>
<p>A non-VAT eTIMS invoice is simple, but every field matters for validation. Expect it to show your name and KRA PIN, the buyer's name and KRA PIN, the date, a description of each service or item, quantity, unit price and total, and the control details eTIMS adds when it records the invoice. Write descriptions that match your contract, such as "Logo and brand guidelines, phase 1" rather than "services", so your client's finance team can map the invoice to a purchase order without asking you.</p>
<h3>Deposits, retainers and milestone billing</h3>
<p>Many freelancers take a deposit before starting. The safest approach is to issue an eTIMS invoice for each amount you bill, whether it is a deposit, a milestone or a monthly retainer, so that every payment your client makes is supported by an invoice in KRA's records. If a project is cancelled after a deposit, issue an eTIMS credit note for the unused part rather than simply refunding. Our guides to <a href="/blog/retainer-invoice">retainer invoices</a> and <a href="/blog/milestone-payments">milestone payments</a> explain how to structure these arrangements.</p>
<p>In both cases, include the client's KRA PIN. Missing buyer PINs are one of the most common reasons an otherwise genuine invoice fails validation, the same problem we cover in our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</p>

<h2>Choosing an eTIMS solution</h2>
<p>KRA offers several eTIMS solutions. Their <a href="https://www.kra.go.ke/helping-tax-payers/faqs/learn-about-etims" target="_blank" rel="noopener noreferrer">eTIMS FAQ page</a> describes each one. In summary:</p>
<table>
<thead><tr><th>Solution</th><th>Best for</th><th>Internet needed?</th></tr></thead>
<tbody>
<tr><td>eTIMS Lite (USSD *222#)</td><td>Individuals and sole proprietors, low volumes, basic phones</td><td>No</td></tr>
<tr><td>eTIMS Lite (web via eCitizen, mobile app)</td><td>Freelancers and small non-VAT businesses</td><td>Yes</td></tr>
<tr><td>Online portal</td><td>Small businesses invoicing from a computer</td><td>Yes, stable connection</td></tr>
<tr><td>eTIMS Client</td><td>Businesses with steady volumes; works offline and syncs</td><td>Can invoice during downtime</td></tr>
<tr><td>OSCU</td><td>Fully online businesses integrating an ERP or billing system</td><td>Yes, stable connection</td></tr>
<tr><td>VSCU</td><td>High-volume or mixed online and offline operations integrating systems</td><td>Can invoice during downtime</td></tr>
</tbody>
</table>
<p>For a typical freelancer, eTIMS Lite on the web or app is the practical choice. Move to the Client or an integration only when volume grows.</p>
<p>A useful rule of thumb: if you send fewer than a dozen invoices a month and work mostly from your phone, eTIMS Lite is enough. If you invoice daily, run a shop alongside your services, or already use accounting software, look at the eTIMS Client or ask your software provider whether it supports an OSCU or VSCU integration, so invoices are created once and reach KRA automatically. Whichever you choose, test it with a small invoice to a friendly client before you rely on it for a large one, and keep KRA's support contacts handy for onboarding questions.</p>

<h2>How to issue an eTIMS invoice: step by step</h2>
<ol>
<li>Make sure you have an active KRA PIN with the relevant business obligation.</li>
<li>Onboard on eTIMS through the KRA portal or eCitizen and choose your solution.</li>
<li>Add your client using their KRA PIN and legal name.</li>
<li>Enter the service description, quantity, unit price and tax type (non-VAT, or VAT rate).</li>
<li>Generate the invoice; eTIMS records it with KRA and produces the invoice with its control details.</li>
<li>Send the eTIMS invoice to the client, with a cover email or statement if you like.</li>
<li>Use eTIMS credit notes, not new invoices, to correct mistakes. Our <a href="/blog/credit-note-guide">credit note guide</a> explains the logic.</li>
</ol>
<p>Keep your own sequence for reference numbers and job codes so you can match eTIMS invoices to contracts; an <a href="/tools/invoice-number-generator">invoice number generator</a> is handy for that.</p>

<h2>Reconciling eTIMS with your own tax return</h2>
<p>The 2026 validation works in both directions. KRA compares the income in your return with the sales recorded in eTIMS and the withholding tax your clients have declared on payments to you. Adviser alerts describe KRA using the higher of declared income and its data for income, and the lower of declared expenses and eTIMS purchase data for expenses. If your eTIMS sales total 1.5 million shillings but your return shows 1.2 million, expect a question or an automatic adjustment.</p>
<p>A simple monthly routine prevents most problems:</p>
<ol>
<li>Export your eTIMS sales list for the month.</li>
<li>Match each invoice to a payment received or an open balance.</li>
<li>Check that credit notes are recorded for any cancelled work.</li>
<li>Compare withholding certificates from clients with the invoices they relate to.</li>
<li>Keep the reconciliation with your records for the return.</li>
</ol>
<p>On the expense side, ask your own suppliers for eTIMS invoices for software, co-working, equipment and subcontracted work. If a supplier cannot give one, the expense may not be deductible, so factor that into the price you accept.</p>
<h3>Government suppliers and the IFMIS link</h3>
<p>From 31 August 2026, KRA and the National Treasury integrated eTIMS with IFMIS, the government's financial management system. If you supply services to a ministry, county or state agency, expect payment processing to depend on a matching eTIMS invoice. Make sure the invoice details match the purchase order exactly, because mismatches now surface automatically.</p>

<h2>Worked example: a freelancer and a client</h2>
<p>Wanjiku is a freelance graphic designer in Nairobi who is not VAT registered. She designs a brand pack for a Nairobi company for 80,000 shillings.</p>
<ul>
<li>She issues a non-VAT eTIMS invoice for 80,000 shillings with the company's KRA PIN.</li>
<li>The company treats the fee as a professional fee and withholds tax at the resident rate of 5%: 80,000 x 0.05 = 4,000 shillings.</li>
<li>Wanjiku receives 80,000 minus 4,000 = 76,000 shillings, plus a withholding certificate she can credit against her own income tax.</li>
</ul>
<p>Now look at it from the client's side. Suppose the company's annual return claims 1,200,000 shillings of design and consulting costs, but 200,000 of that came from freelancers who sent only PDF invoices. Under 2026 validation, KRA can use the lower of declared expenses and eTIMS purchase data, so the 200,000 may be disallowed. At Kenya's 30% corporate rate, that is 200,000 x 0.30 = 60,000 shillings of extra tax, before penalties and interest. That is why clients now insist on eTIMS. For the general mechanics of deductions at source, see our explainer on <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Exemptions from eTIMS</h2>
<p>Section 23A of the Tax Procedures Act and the 2024 regulations exempt certain transactions from electronic tax invoicing, including:</p>
<ul>
<li>Employment income subject to PAYE.</li>
<li>Imported goods and imported services.</li>
<li>Core fees of licensed financial institutions and insurers.</li>
<li>Transactions subject to final withholding tax, such as certain dividends and interest.</li>
<li>Investment allowance items and airline passenger tickets.</li>
<li>Internal accounting adjustments that are not supplies.</li>
</ul>
<p>The imported services exemption matters for foreign freelancers: if you are outside Kenya and bill a Kenyan company, you are generally not expected to use eTIMS. A clear commercial invoice is enough; see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>Common eTIMS mistakes to avoid</h2>
<ul>
<li>Issuing a PDF invoice and promising the eTIMS invoice "later", then forgetting.</li>
<li>Leaving out the buyer's PIN or using the wrong one.</li>
<li>Vague descriptions such as "services" that do not match contracts.</li>
<li>Correcting by issuing a second invoice instead of a credit note, which doubles reported income.</li>
<li>Not reconciling eTIMS sales with what you declare in your own return; KRA will see both.</li>
</ul>
<p>Most of these mistakes come from treating eTIMS as an extra step after the real invoice. Flip that around: make the eTIMS invoice the only invoice you issue to Kenyan business clients, and attach any PDF summary, timesheet or statement as supporting material rather than as a separate bill. Your clients get one document to pay against, and your records match KRA's from the start.</p>
<p>Kenya's approach is a preview of where other mandates are going. Our roundup of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates for 2027</a> shows how widely data matching is spreading.</p>

<h2>Prepare your client invoices</h2>
<p>KRA eTIMS is now the backbone of business invoicing in Kenya, and the 2026 validation rules mean your clients will expect an eTIMS invoice every time. Use eTIMS for Kenyan clients, and for quotes, statements or invoices to foreign clients, create a professional document in our free <a href="/invoice-generator">invoice generator</a> with a <a href="/invoice-templates/modern">modern invoice template</a>. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "romania-e-factura",
    title: "Romania e-Factura Guide: RO e-Factura, SPV and B2C Rules 2026",
    description:
      "Romania e-Factura explained: B2B and B2C rules, the SPV, the 5 working day deadline from 2026, CNP changes under Law 88/2026, fines and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Romania",
    related: [
      "e-invoicing-mandates-2027",
      "e-invoice-template-en-16931",
      "peppol-vs-clearance-model",
      "vida-vat-in-the-digital-age",
    ],
    faqs: [
      {
        q: "What is RO e-Factura?",
        a: "RO e-Factura is Romania's national e-invoicing system, run by the tax agency ANAF. Businesses upload invoices as structured XML files based on the European standard EN 16931 (the Romanian CIUS-RO specification). ANAF validates each file, adds its electronic seal and makes it available to the buyer. For B2B sales, an invoice that has not gone through the system is not treated as a valid invoice.",
      },
      {
        q: "What is the SPV in Romania?",
        a: "SPV stands for Spatiul Privat Virtual, ANAF's online private area. Businesses use it, usually with a qualified digital certificate, to register for e-Factura, view sent and received invoices and download messages. Accounting software connects to e-Factura through the same credentials. ANAF has confirmed that private individuals buying goods or services are not obliged to access the SPV or download their invoices.",
      },
      {
        q: "Is e-Factura mandatory for B2C sales in Romania?",
        a: "Yes. Since 1 January 2025, Romanian taxable persons must report invoices issued to individuals through RO e-Factura, with fines applying from 1 July 2025. If the buyer does not give a personal numeric code (CNP), the invoice uses thirteen zeros in the buyer ID field. The rule covers invoices actually issued; it does not create a new duty to issue invoices for every retail sale covered by a fiscal receipt.",
      },
      {
        q: "What is the e-Factura deadline in 2026?",
        a: "From 1 January 2026, under Emergency Ordinance 89/2025, invoices must be uploaded within 5 working days of the issue date, and no later than 5 working days after the legal deadline for issuing the invoice. Previously the limit was 5 calendar days. Weekends and public holidays do not count. Invoices issued up to 31 December 2025 stayed under the old calendar-day rule.",
      },
      {
        q: "Do PFAs and freelancers have to use e-Factura?",
        a: "Generally yes. Authorised individuals (PFA), sole enterprises and liberal professions that are registered for tax purposes with a fiscal code must use RO e-Factura for B2B and B2C invoices, whether or not they are VAT registered. The relief in Law 88/2026 applies to suppliers identified only by their personal numeric code, such as many people earning royalty income, not to PFAs.",
      },
      {
        q: "What did Law 88/2026 change?",
        a: "Law 88/2026, published in the Official Gazette at the end of May 2026 and applicable from 1 June 2026, removed the obligation for suppliers identified by CNP to use RO e-Factura. Ordinance 89/2025 had brought them in from 15 January 2026, and Ordinance 6/2026 had postponed that to 1 June 2026. They can now register voluntarily or ask to be removed from the e-Factura register.",
      },
      {
        q: "What are the fines for not using e-Factura?",
        a: "Fines for not uploading invoices on time depend on taxpayer size: 1,000 to 2,500 lei for small taxpayers and individuals such as PFAs, 2,500 to 5,000 lei for medium taxpayers and 5,000 to 10,000 lei for large taxpayers. For B2B invoices issued outside the system, a separate fine of 15% of the invoice value can apply to the issuer, and to a buyer who books an invoice received through another channel.",
      },
      {
        q: "Do foreign companies need to use RO e-Factura?",
        a: "The obligation centres on taxable persons established in Romania. A foreign business that is not established in Romania and bills a Romanian company usually sends a normal invoice, and the Romanian buyer applies reverse charge where relevant. Non-established businesses registered for VAT in Romania should check the current scope with an adviser, because the rules for them have changed several times.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Romania e-Factura (RO e-Factura) is ANAF's mandatory e-invoicing system. Romanian businesses must upload B2B invoices (since 2024) and B2C invoices (since 1 January 2025) as XML through the system, accessed via the SPV, within 5 working days of issue from 2026. Since 1 June 2026, Law 88/2026 has made it optional for suppliers identified only by CNP.</p>
<p>Romania moved from voluntary e-invoicing to one of the EU's broadest mandates in about three years, and the rules kept shifting through 2025 and 2026. This guide sets out what applies as of late 2026, with dates, fines and a worked example. For the European picture, see our overview of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates coming in 2027</a>. If you are a foreign supplier billing a Romanian client, you can build a standard invoice in our free <a href="/invoice-generator">invoice generator</a>.</p>
<p><strong>Important:</strong> This is general information, not tax or legal advice. Romanian e-invoicing law has been amended repeatedly, so confirm with a Romanian accountant.</p>

<h2>How Romania e-Factura works</h2>
<p>RO e-Factura is a clearance-style system. The invoice is not complete until ANAF has processed it:</p>
<ol>
<li>The seller creates the invoice as XML in the CIUS-RO format, Romania's national specification of the European standard EN 16931. Our guide to the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice format</a> explains the underlying data model.</li>
<li>The file is uploaded to RO e-Factura, either through accounting software connected with your digital certificate or manually through the SPV.</li>
<li>ANAF validates the structure and content. If it fails, you receive an error message and must correct and re-upload.</li>
<li>If it passes, ANAF applies its electronic seal and the invoice becomes available to the buyer in their SPV or software.</li>
</ol>
<p>Because ANAF sees every invoice, it can cross-check e-Factura data with VAT returns and SAF-T. That is the same logic used by <a href="/blog/italy-sdi-e-invoicing">Italy's SDI</a>, the system Romania's model is most often compared with. For how these differ from Peppol networks, read <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance models</a>.</p>
<h3>What the XML must contain</h3>
<p>The CIUS-RO file carries the content of a normal <a href="/blog/vat-invoice-guide">VAT invoice</a> in structured fields: seller and buyer names, fiscal codes (CUI or CIF for businesses, CNP or thirteen zeros for individuals), addresses including county codes, the invoice number and date, line descriptions, quantities, unit prices, VAT category and rate, totals, and payment details. Romania applies stricter checks on some fields than the base European standard, especially addresses and VAT category codes, so generic EN 16931 output from foreign software does not always pass first time.</p>
<h3>Common reasons ANAF rejects a file</h3>
<ul>
<li>Wrong or inactive buyer fiscal code.</li>
<li>County or city codes that do not match Romanian formats.</li>
<li>VAT category codes that conflict with the rate charged.</li>
<li>Totals that do not add up after rounding.</li>
<li>Uploading the same invoice number twice.</li>
</ul>
<p>A rejected file is not an issued invoice, so fix and re-upload within the deadline.</p>

<h2>The SPV: your access point</h2>
<p>The SPV (Spatiul Privat Virtual) is ANAF's private online area. Businesses use it to:</p>
<ul>
<li>Register in the RO e-Factura register where registration is required.</li>
<li>Upload invoices manually or authorise software to connect.</li>
<li>Download received invoices and ANAF messages, including validation errors.</li>
</ul>
<p>Access usually requires a qualified digital certificate for companies. Most businesses never upload by hand; their invoicing software sends files automatically. Individuals who buy from businesses do not need SPV access, and ANAF has said consumers are not obliged to download their invoices.</p>

<h2>Romania e-Factura timeline: B2G, B2B and B2C 2025</h2>
<table>
<thead><tr><th>Date</th><th>Change</th></tr></thead>
<tbody>
<tr><td>2022</td><td>Mandatory for public procurement (B2G) and for B2B sales of high fiscal risk goods</td></tr>
<tr><td>1 January 2024</td><td>All B2B invoices between Romanian-established taxable persons must be reported through RO e-Factura</td></tr>
<tr><td>1 July 2024</td><td>B2B invoices outside the system are no longer treated as valid; 15% invoice-value fine applies</td></tr>
<tr><td>1 January 2025</td><td>B2C invoices to individuals must be reported (Ordinance 138/2024)</td></tr>
<tr><td>1 July 2025</td><td>Fines start for not reporting B2C invoices</td></tr>
<tr><td>1 January 2026</td><td>Upload deadline becomes 5 working days (Ordinance 89/2025)</td></tr>
<tr><td>15 January 2026 (planned)</td><td>Suppliers identified by CNP brought in; postponed to 1 June 2026 by Ordinance 6/2026</td></tr>
<tr><td>1 June 2026</td><td>Law 88/2026 removes the obligation for CNP-identified suppliers; use becomes optional</td></tr>
</tbody>
</table>

<h3>How B2C reporting works</h3>
<p>For B2C sales, the invoice goes through RO e-Factura just like a B2B one. If the buyer gives their CNP, it goes in the buyer ID field. If not, you enter thirteen zeros. Sales documented only with a fiscal receipt from a cash register are not reported, unless the customer asks for an invoice, in which case the invoice must go through the system. You still send or hand the customer their copy directly.</p>
<p>Some everyday examples: a plumber who invoices a homeowner for a repair must upload that invoice; a café that gives customers fiscal receipts does not upload them, unless a customer asks for an invoice; an online shop that issues an invoice with every order must upload each one. Utility and telecom companies continue to send bills to customers as before, with the e-Factura upload happening in the background.</p>

<h2>Deadlines: the 5 working day rule</h2>
<p>From 1 January 2026, you must upload each invoice within 5 working days of its issue date, and no later than 5 working days after the legal deadline for issuing it. Saturdays, Sundays and public holidays do not count. Invoices issued up to 31 December 2025 followed the old 5 calendar day rule even if their deadline fell in 2026.</p>
<p>Under Romanian VAT rules, invoices generally have to be issued by the 15th of the month after the supply, which is why the "no later than" clause matters for businesses that issue monthly invoices. In practice, if you issue an invoice on the last permitted day, you still get 5 working days to upload it, but if you backdate an invoice to an earlier issue date, the upload window is counted from that earlier date. Build a buffer into your process: many accountants recommend uploading on the day of issue, so that a rejected file can be corrected and resent well inside the deadline. Keep a clear sequence across branches with an <a href="/tools/invoice-number-generator">invoice number generator</a>, because duplicate numbers are a common rejection reason.</p>

<h2>Worked example: deadline and fine</h2>
<p>Elena runs a Bucharest IT services company. On Friday 14 August 2026 she issues an invoice to a Romanian client:</p>
<ul>
<li>Services: 10,000 lei</li>
<li>VAT at the 21% standard rate: 10,000 x 0.21 = 2,100 lei</li>
<li>Invoice total: 12,100 lei</li>
</ul>
<p><strong>Deadline:</strong> counting working days from the issue date, Monday 17, Tuesday 18, Wednesday 19, Thursday 20 and Friday 21 August. The invoice must be in RO e-Factura by Friday 21 August 2026.</p>
<p><strong>Risk if she skips the system:</strong> if Elena emailed only a PDF and never uploaded the XML, the B2B invoice would not be valid, and a fine of 15% of its value could apply: 12,100 x 0.15 = 1,815 lei. Her client could face the same 15% if it booked the PDF. Separately, late upload fines for a small taxpayer range from 1,000 to 2,500 lei. To check VAT maths in reverse, see our guide on <a href="/blog/how-to-calculate-vat">how to calculate VAT</a>.</p>

<h2>Who is covered after Law 88/2026</h2>
<p>As of late 2026, the position is:</p>
<ul>
<li><strong>Companies (SRL, SA) established in Romania:</strong> covered for B2B, B2G and B2C.</li>
<li><strong>PFAs, sole enterprises (II), family enterprises and liberal professions:</strong> covered, whether or not VAT registered. If you are a Romanian freelancer working through a PFA, every client invoice goes through e-Factura.</li>
<li><strong>Suppliers identified only by CNP</strong> (for example, many people with royalty or occasional independent income): no longer obliged since 1 June 2026 under <a href="https://static.anaf.ro/static/10/Anaf/legislatie/L_88_2026.pdf" target="_blank" rel="noopener noreferrer">Law 88/2026 as published by ANAF</a>. They may register voluntarily or request removal.</li>
<li><strong>Farmers under the special regime:</strong> exempt.</li>
<li><strong>Non-established foreign suppliers:</strong> generally outside the system; they invoice normally and the Romanian buyer applies <a href="/blog/reverse-charge-invoice">reverse charge</a> where relevant.</li>
</ul>

<h2>Fines for non-compliance</h2>
<table>
<thead><tr><th>Taxpayer</th><th>Fine for late or missing upload</th></tr></thead>
<tbody>
<tr><td>Small taxpayers and individuals (PFA, II, IF)</td><td>1,000 to 2,500 lei</td></tr>
<tr><td>Medium taxpayers</td><td>2,500 to 5,000 lei</td></tr>
<tr><td>Large taxpayers</td><td>5,000 to 10,000 lei</td></tr>
<tr><td>B2B invoice issued outside the system</td><td>Additional 15% of invoice value (issuer, and buyer who books it)</td></tr>
</tbody>
</table>
<p>These figures come from the rules in force through 2025 and 2026 as summarised by Romanian tax publications; check the current amounts with your accountant before relying on them.</p>
<p>Fines are not the only cost. A buyer whose supplier invoice is missing from RO e-Factura may be unable to deduct the input VAT on it, so business customers increasingly refuse to pay until the invoice appears in their SPV. For a small business, that payment delay can hurt cash flow more than the fine itself. The practical lesson is to treat the upload as part of issuing the invoice, not as an admin task for the end of the week, and to check the upload status before you chase a client for payment.</p>

<h2>Correcting and storing e-Factura invoices</h2>
<p>Once ANAF has sealed an invoice, you do not edit it. You issue a correction invoice (a storno, or credit note) through the system, then a new invoice if needed. Our <a href="/blog/credit-note-guide">credit note guide</a> and <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> explain the principle. Download and archive both the XML and ANAF's sealed response; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers retention more generally.</p>
<h3>Choosing e-Factura software</h3>
<p>For a handful of invoices a month, ANAF's own tools and the SPV can work, but most businesses use invoicing software that uploads automatically. Before choosing, check that it:</p>
<ol>
<li>Generates CIUS-RO compliant XML, not just a PDF.</li>
<li>Uploads automatically and tracks the 5 working day deadline per invoice.</li>
<li>Shows ANAF validation errors in plain language.</li>
<li>Downloads incoming supplier invoices from the SPV into your books.</li>
<li>Archives the XML and ANAF's sealed response together.</li>
</ol>
<p>Ask the provider how it handles changes in the law, because Romania amended its e-Factura rules several times in 2025 and 2026 and software that lags behind can leave you exposed to fines for invoices you thought were sent.</p>

<h2>Romania in the wider EU picture</h2>
<p>For most Romanian businesses, the system is now settled: every domestic B2B and B2C invoice goes through RO e-Factura, with a short upload window and validation before delivery. The open questions in late 2026 are mainly at the edges, such as individuals identified by CNP and some cross-border situations, where the law changed several times in a single year.</p>
<p>Romania, like Italy, uses an EU derogation to run a domestic mandate. The EU's VAT in the Digital Age package will allow national e-invoicing mandates without derogations and adds digital reporting for cross-border B2B sales from 2030; our <a href="/blog/vida-vat-in-the-digital-age">ViDA explainer</a> covers that. Neighbouring regimes such as <a href="/blog/belgium-poland-e-invoicing-mandates">Poland's KSeF</a> are moving the same way.</p>

<h2>Create your invoices with confidence</h2>
<p>Romania e-Factura now covers almost every Romanian business invoice, with a 5 working day upload deadline and real fines. Use your RO e-Factura software for Romanian sales, and for foreign clients, quotes or clear PDF copies, create them in our free <a href="/invoice-generator">invoice generator</a> with a <a href="/invoice-templates/nordic">clean invoice template</a>.</p>
`,
  },
];
