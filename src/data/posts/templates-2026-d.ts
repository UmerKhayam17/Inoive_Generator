import type { PostDraft } from "../blog";

export const TEMPLATES_2026_D_POSTS: PostDraft[] = [
  {
    slug: "invoice-paper-size",
    title: "Invoice Paper Size: A4 vs Letter (Margins, PDF, Print)",
    description:
      "Which invoice paper size should you use, A4 or US Letter? Exact dimensions, safe margins, PDF settings and how to print or email invoices across borders.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-pdf-print-checklist", "invoice-template-pdf", "invoice-header-and-footer"],
    faqs: [
      {
        q: "Is there a legal paper size for invoices?",
        a: "No major tax authority requires a specific paper size. The IRS, HMRC, the EU VAT Directive and most national rules care about what the invoice says, such as names, dates, numbers, amounts and tax details, not the sheet it is printed on. Use A4 or US Letter depending on where you and your client are, keep the text readable, and make sure every required field fits without being cut off when printed.",
      },
      {
        q: "Can I send an A4 invoice to a client in the United States?",
        a: "Yes. A4 PDFs open and print fine in the US. If the client prints with 'Fit to page' or 'Shrink oversized pages' selected, the page is scaled slightly to fit Letter paper and nothing is lost. If you have generous margins of at least 15 mm, the content usually prints correctly even at actual size, because A4 is narrower than Letter and only about 18 mm taller.",
      },
      {
        q: "What size is an invoice in pixels?",
        a: "Paper size in pixels depends on resolution. At 72 points per inch, the unit PDFs use internally, A4 is 595 x 842 points and US Letter is 612 x 792 points. At 300 DPI, a common print resolution, A4 is about 2480 x 3508 pixels and Letter is 2550 x 3300 pixels. If you design an invoice as an image, work at 300 DPI so logos and small text stay sharp when printed.",
      },
      {
        q: "What paper weight should I use for printed invoices?",
        a: "Standard office paper, around 80 gsm in A4 countries or 20 lb bond in the US, works for almost all invoices. Some businesses use slightly heavier 90 to 100 gsm (24 lb) paper for a more solid feel, especially for invoices handed over in person. Avoid glossy stock, because it smudges with laser and inkjet printers and is harder to write on if a client adds notes.",
      },
      {
        q: "Should a multi-page invoice repeat the header?",
        a: "Ideally yes. On page two and beyond, repeat at least your business name, the invoice number and the client name, and add page numbers such as 'Page 2 of 3'. This keeps pages together if they are separated in a scanner or accounts payable queue. Put the totals, tax summary and payment details on the last page so the client finds them where they expect.",
      },
      {
        q: "What size envelope fits a folded invoice?",
        a: "An A4 invoice folded in thirds fits a DL envelope, which measures 110 x 220 mm and is common in the UK, Europe and Australia. A US Letter invoice folded in thirds fits a No. 10 envelope, which is 4 1/8 x 9 1/2 inches. If you use window envelopes, place the client's address block so it lines up with the window after folding, and test with one printed copy first.",
      },
      {
        q: "Is A5 a good size for invoices?",
        a: "A5 (148 x 210 mm) works for short invoices with a few line items, such as market stalls, small repairs or tradespeople writing invoices on site. It saves paper and fits a small binder. For invoices with many lines, tax breakdowns or payment terms, A4 or Letter is easier to read and less likely to push content onto extra pages. Most clients file A5 invoices without any problem.",
      },
      {
        q: "Why does my invoice PDF print with cut-off edges?",
        a: "Usually the margins are too small for the printer's unprintable area, or the PDF is a different size than the paper in the tray and the print dialog is set to actual size. Fix it by keeping margins at 12 mm (0.5 inch) or more, matching the PDF size to your region, and choosing 'Fit' or 'Shrink oversized pages' when printing a foreign-size document.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Use <strong>A4</strong> (210 x 297 mm) for invoices if you or your client are in Europe, the UK, Asia, Africa, Australia or most of the world, and <strong>US Letter</strong> (8.5 x 11 inches) if you are in the United States, Canada or Mexico. Keep margins of at least 12 to 20 mm (0.5 to 0.75 inch) so either size prints cleanly.</p>

<p>Invoice paper size sounds like a small detail until a client prints your PDF and the bank details at the bottom are cut off. This guide explains the standard invoice sizes, which one to pick for domestic and international clients, the margins and fonts that keep an invoice readable, and how PDF settings affect what your client sees on screen and on paper.</p>

<h2>What is the standard invoice paper size?</h2>
<p>There is no single global invoice size. The standard is simply the normal office paper in your country. Most of the world uses the ISO 216 "A" series, defined by the <a href="https://www.iso.org/standard/36631.html" rel="noopener" target="_blank">International Organization for Standardization (ISO 216)</a>, where A4 is the everyday sheet. The United States and Canada use North American sizes, where US Letter is the everyday sheet.</p>
<p>Tax authorities do not specify a size either. The IRS, HMRC and the EU VAT Directive set rules about invoice <em>content</em> (who, what, when, how much, what tax), not about paper. So your choice is practical: pick the size your client's printer and filing system expect, and design the layout so it survives the other size.</p>

<h2>Invoice size comparison: A4 vs Letter vs Legal vs A5</h2>
<table><thead><tr><th>Size</th><th>Millimeters</th><th>Inches</th><th>PDF points</th><th>Where it is used for invoices</th></tr></thead><tbody>
<tr><td>A4</td><td>210 x 297</td><td>8.27 x 11.69</td><td>595 x 842</td><td>UK, EU, India, Pakistan, UAE, Australia, New Zealand, most of Asia, Africa and South America</td></tr>
<tr><td>US Letter</td><td>215.9 x 279.4</td><td>8.5 x 11</td><td>612 x 792</td><td>United States, Canada, Mexico, Philippines (widely)</td></tr>
<tr><td>US Legal</td><td>215.9 x 355.6</td><td>8.5 x 14</td><td>612 x 1008</td><td>Rarely for invoices; some legal and real estate documents</td></tr>
<tr><td>A5</td><td>148 x 210</td><td>5.83 x 8.27</td><td>420 x 595</td><td>Short invoices, receipt books, on-site trade invoices</td></tr>
<tr><td>Thermal roll</td><td>80 or 58 mm wide</td><td>about 3.1 or 2.3 wide</td><td>variable length</td><td>Point-of-sale receipts and simplified invoices</td></tr>
</tbody></table>
<p>The key difference: A4 is about 6 mm narrower and 18 mm taller than Letter. That is why an invoice designed edge to edge for one size gets clipped or shrunk on the other, while an invoice with sensible margins looks almost identical on both.</p>

<h2>A4 or Letter: which invoice size should you choose?</h2>
<p>Use this simple rule of thumb:</p>
<ul>
<li><strong>All your clients are local:</strong> use your country's standard size. A UK plumber uses A4; a Texas contractor uses Letter.</li>
<li><strong>You are in the US and bill a European client:</strong> Letter is fine. Most people never print invoices now, and those who do usually print with "Fit to page".</li>
<li><strong>You bill a large company with an accounts payable team abroad:</strong> match their size if you know it, because some scanning and OCR workflows are tuned to local paper.</li>
<li><strong>You bill clients everywhere:</strong> pick your home size and keep margins at 15 to 20 mm. That is the most practical way to make one template work worldwide.</li>
</ul>
<p>For more on billing across borders, including currency and tax IDs, see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> and the overview of <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>

<h2>How big should invoice margins be?</h2>
<p>Most office printers cannot print right to the edge. The unprintable area is typically 3 to 6 mm, more on some inkjets. Margins also make the invoice look calm and give room for hole punches, staples and handwritten notes from the client's finance team.</p>
<table><thead><tr><th>Element</th><th>Recommended size</th><th>Why</th></tr></thead><tbody>
<tr><td>Side margins</td><td>15 to 20 mm (0.6 to 0.8 in)</td><td>Survives A4/Letter scaling and printer limits</td></tr>
<tr><td>Top margin</td><td>12 to 20 mm (0.5 to 0.8 in)</td><td>Room for logo and header without crowding</td></tr>
<tr><td>Bottom margin</td><td>15 to 25 mm (0.6 to 1 in)</td><td>Footers with bank details are the first thing cut off</td></tr>
<tr><td>Body text</td><td>9 to 11 pt</td><td>Readable on paper and on a phone screen</td></tr>
<tr><td>Totals and amount due</td><td>12 to 16 pt, bold</td><td>The number the client looks for first</td></tr>
<tr><td>Fine print (terms)</td><td>8 pt minimum</td><td>Anything smaller is hard to read when printed</td></tr>
</tbody></table>
<p>If you add company registration details, a VAT number or payment instructions at the bottom, follow our tips on the <a href="/blog/invoice-header-and-footer">invoice header and footer</a> so they stay inside the safe area.</p>

<h2>How does invoice size work in a PDF?</h2>
<p>A PDF stores its page size in points (1 point = 1/72 inch). When someone opens your invoice on screen, the page size barely matters because the viewer zooms to fit. It matters when they print. Most PDF readers offer three options:</p>
<ol>
<li><strong>Actual size:</strong> prints at 100%. An A4 PDF on Letter paper loses a few millimeters at the top and bottom unless your margins absorb it.</li>
<li><strong>Fit or Shrink oversized pages:</strong> scales the page down so everything fits. A Letter invoice printed on A4 shrinks by about 3%, which nobody notices.</li>
<li><strong>Custom scale:</strong> rarely needed for invoices.</li>
</ol>
<p>Practical takeaway: generate your invoice in your home size, keep margins generous, and you rarely need to think about it again. Our <a href="/blog/invoice-template-pdf">invoice template PDF guide</a> covers file naming, fonts and how to keep the PDF small enough to email.</p>

<h2>Worked example: one invoice on A4 and on Letter</h2>
<p>Say a freelance designer in Manchester bills a client in Chicago. The invoice is created on A4 with 18 mm margins on every side. Here is the content:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Brand identity design, logo and color palette</td><td>1</td><td>1,800.00</td><td>1,800.00</td></tr>
<tr><td>Business card and letterhead layouts</td><td>2</td><td>250.00</td><td>500.00</td></tr>
<tr><td>Brand guidelines PDF (12 pages)</td><td>1</td><td>650.00</td><td>650.00</td></tr>
<tr><td>Revision hours beyond 2 rounds</td><td>3</td><td>75.00</td><td>225.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>3,175.00</strong></td></tr>
<tr><td colspan="3">VAT (outside the scope of UK VAT, B2B service to US client)</td><td>0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>3,175.00</strong></td></tr>
</tbody></table>
<p>What happens when the Chicago client prints it:</p>
<ul>
<li><strong>Actual size on Letter:</strong> the page is about 17.6 mm too tall. With an 18 mm bottom margin, about 9 mm is lost at the top and 9 mm at the bottom, which falls inside the margins. Nothing important is cut.</li>
<li><strong>Fit to page on Letter:</strong> the page scales to about 94% to fit Letter's 279 mm height. The 10 pt body text prints at roughly 9.4 pt, still easy to read.</li>
</ul>
<p>Had the designer used 5 mm margins with the bank details at the very bottom, the actual-size print would have clipped the IBAN, and the client might have paid late or asked for a resend.</p>

<h2>How to set up an invoice template that prints well anywhere</h2>
<ol>
<li><strong>Choose your page size first.</strong> Pick A4 or Letter before you design, because changing it later shifts every element.</li>
<li><strong>Set margins of 15 to 20 mm.</strong> Treat this as a hard boundary for text, totals and payment details.</li>
<li><strong>Place the address block for window envelopes.</strong> If you post invoices, align the client's address with a DL (110 x 220 mm) or US No. 10 envelope window.</li>
<li><strong>Keep the logo small and high resolution.</strong> Around 30 to 45 mm wide at 300 DPI is plenty. Our guide on <a href="/blog/how-to-add-logo-to-invoice">how to add a logo to an invoice</a> covers file types and placement.</li>
<li><strong>Use a clear table for line items.</strong> Description, quantity, rate and amount, with totals right-aligned.</li>
<li><strong>Put payment details near the total.</strong> Not in tiny footer text that can be trimmed.</li>
<li><strong>Repeat key details on extra pages.</strong> Invoice number, client name and "Page X of Y".</li>
<li><strong>Test print once on both sizes.</strong> Print at actual size and at fit to page, and check that nothing is cut.</li>
</ol>
<p>You can skip most of this setup by using our <a href="/invoice-generator">free invoice generator</a>, which lays out a clean, print-safe invoice and downloads it as a PDF. If you prefer starting from a file, browse the <a href="/invoice-templates">invoice templates</a> page.</p>

<h2>What about receipts, thermal printers and e-invoices?</h2>
<p>Retail and hospitality businesses often print receipts or simplified invoices on 80 mm or 58 mm thermal rolls. These are fine as proof of payment for small sales, but many countries require a full invoice for business customers who want to reclaim VAT or GST, so keep an A4 or Letter version available on request.</p>
<p>Structured e-invoices (XML formats such as UBL, CII or Peppol BIS) have no paper size at all, because they are data, not documents. A PDF copy may be attached for humans to read. If your country is moving to mandatory e-invoicing, read our explainer on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoices vs PDF invoices</a> to understand what still counts as a valid invoice.</p>

<h2>Should an invoice be portrait or landscape?</h2>
<p>Portrait. Almost every accounting team, scanner and filing system expects invoices in portrait orientation, and a portrait page reads naturally on a phone screen too. Landscape only makes sense for an attachment with many columns, such as a detailed timesheet or a shipment manifest. In that case, keep the invoice itself in portrait and attach the wide schedule as a separate page or file, referenced by the invoice number.</p>
<h3>Does the size affect how an invoice is stored?</h3>
<p>Not legally. Tax authorities accept invoices kept as PDFs regardless of the page size, as long as the file is complete, readable and unchanged. What matters more is a consistent file name (for example "INV-2026-041 Client Name.pdf") and a backup. If a client's AP system extracts data automatically, a clean layout with clear labels for invoice number, date and total helps far more than any particular paper size.</p>

<h2>Common invoice size and layout mistakes</h2>
<ul>
<li><strong>Edge-to-edge designs.</strong> Background colors and borders that run to the edge print with white strips or get clipped.</li>
<li><strong>Payment details in the bottom 10 mm.</strong> The area most likely to be cut off when an A4 file is printed on Letter.</li>
<li><strong>Mixing sizes in one PDF.</strong> A Letter invoice with an A4 timesheet attached prints inconsistently. Keep every page the same size.</li>
<li><strong>Tiny fonts to squeeze everything onto one page.</strong> Two readable pages beat one unreadable page.</li>
<li><strong>Screenshots instead of PDFs.</strong> Images have no fixed paper size, often print blurry and cannot be searched.</li>
<li><strong>Huge logo files.</strong> A 10 MB logo makes a 10 MB invoice that email filters may block.</li>
</ul>
<p>Before you send, run through our <a href="/blog/invoice-pdf-print-checklist">invoice PDF and print checklist</a> to catch these issues in under a minute.</p>

<h2>Invoice paper size checklist</h2>
<ul>
<li>Page size matches your home country (A4 or US Letter).</li>
<li>Margins of at least 15 mm (0.6 inch) on all sides.</li>
<li>Body text 9 to 11 pt; total due bold and larger.</li>
<li>Payment details placed near the total, not in the outer edge.</li>
<li>Every page the same size; header details repeated on extra pages.</li>
<li>Logo crisp at 300 DPI and under about 200 KB.</li>
<li>Test printed at actual size and fit to page.</li>
</ul>

<p>In short, the right invoice paper size is the standard sheet in your market: A4 for most of the world and US Letter for North America, with margins wide enough that the invoice prints correctly on either. Our free invoice generator needs no sign-up, builds the invoice in your browser and downloads a print-ready PDF, so you can create a clean <a href="/invoice-generator">A4 or Letter invoice</a> in a few minutes.</p>
`,
  },
  {
    slug: "spanish-invoice-template",
    title: "Spanish Invoice Template: Bilingual Factura Guide (Free)",
    description:
      "Free Spanish invoice template guide: bilingual English-Spanish factura fields, an example invoice, and key rules for Spain, Mexico and Latin America in 2026.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "mexico-cfdi-invoice",
      "spain-e-invoicing-verifactu",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "How do you say invoice in Spanish?",
        a: "The standard word is 'factura'. A receipt is 'recibo', a quote is 'presupuesto' in Spain or 'cotización' in much of Latin America, a credit note is 'nota de crédito' in Latin America or 'factura rectificativa' in Spain, and a pro forma invoice is 'factura proforma'. Invoice number is 'número de factura', due date is 'fecha de vencimiento', and total amount due is 'total a pagar' or 'importe total'.",
      },
      {
        q: "Can a US freelancer send a Spanish-language invoice?",
        a: "Yes. US rules do not require invoices to be in English, so you can send a Spanish or bilingual invoice to a client in Spain or Latin America. Keep your own records understandable in English for your bookkeeping and taxes, and make sure amounts, dates and currency are unambiguous. A bilingual layout, with English and Spanish labels side by side, usually works best for both parties.",
      },
      {
        q: "What is a factura simplificada in Spain?",
        a: "A factura simplificada is Spain's simplified invoice, used mainly for retail sales to consumers. It is generally allowed for amounts up to 400 euros including VAT, and up to 3,000 euros in certain sectors such as retail and hospitality. It needs fewer details than a full invoice (factura completa), but a business customer can ask for a full invoice with its NIF so it can deduct the VAT.",
      },
      {
        q: "Do I charge Spanish VAT to a client in Spain if I am not based there?",
        a: "Usually not for B2B services. If you supply most services to a business client registered for VAT in Spain, the reverse charge typically applies: you invoice without Spanish IVA and the client accounts for it. Show the client's NIF-IVA and a note such as 'Inversión del sujeto pasivo'. Sales of goods and services to consumers follow different rules, so check with an adviser.",
      },
      {
        q: "What is IRPF retention on Spanish invoices?",
        a: "IRPF retention (retención de IRPF) is an income tax withholding that Spanish freelancers (autónomos) usually apply on invoices to Spanish businesses for professional services. The general rate is 15%, with a reduced 7% rate in the first years of activity. The client withholds that amount and pays it to the tax agency. Foreign freelancers billing Spanish clients do not normally apply IRPF on their invoices.",
      },
      {
        q: "Is a PDF invoice valid in Mexico?",
        a: "Not as a tax invoice. In Mexico, the legally valid invoice is the CFDI, an electronic XML file certified by an authorized provider and registered with the SAT. A PDF printout of the CFDI is common, but the XML is the legal document. A foreign freelancer billing a Mexican client usually sends a normal commercial invoice, which the client handles under its own import of services rules.",
      },
      {
        q: "Which currency should a Spanish invoice use?",
        a: "Use the currency agreed in the contract. Spain uses the euro (EUR), Mexico the peso (MXN), Argentina the peso (ARS), Colombia the peso (COP) and Chile the peso (CLP), while some Latin American clients prefer US dollars for cross-border work. Always write the ISO code, not just a symbol, because the $ sign is used by several Latin American currencies as well as the US dollar.",
      },
      {
        q: "How should dates be written on a Spanish invoice?",
        a: "Spanish-speaking countries write dates as day, month, year, for example 05/11/2026 for 5 November 2026. To avoid confusion with the US month-first format, write the month as a word on bilingual invoices, such as '5 de noviembre de 2026 / November 5, 2026', or use the ISO format 2026-11-05, which is unambiguous in every country.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Spanish invoice template (plantilla de factura) is an invoice laid out with Spanish labels such as <em>número de factura</em>, <em>fecha</em>, <em>base imponible</em>, <em>IVA</em> and <em>total</em>. For cross-border work, a bilingual English-Spanish factura is safest. Spain and most of Latin America add country-specific tax IDs and, increasingly, mandatory electronic invoice systems.</p>

<p>If you bill clients in Spain, Mexico, Colombia, Argentina or anywhere else in the Spanish-speaking world, an invoice your client's accounting team can read without translation gets processed faster. This guide gives you the full list of bilingual invoice fields, an example factura with real numbers, and the rules that change between Spain and Latin America, so you know when a simple template is enough and when the client needs a government-registered e-invoice instead.</p>

<h2>What is a factura?</h2>
<p>A <strong>factura</strong> is the Spanish term for an invoice: a commercial and tax document that records a sale of goods or services, the parties, the amounts and the tax charged. In Spain, the content of a factura is set by the invoicing regulation, Real Decreto 1619/2012 (the <em>Reglamento de facturación</em>). In Latin America, each country's tax authority (SAT in Mexico, DIAN in Colombia, ARCA in Argentina, SII in Chile, SUNAT in Peru) defines its own rules, and most now require the official invoice to be electronic.</p>
<p>That gives you two different jobs a Spanish invoice template can do:</p>
<ul>
<li><strong>A commercial invoice from a foreign business</strong> (for example, a US freelancer billing a Madrid agency). A bilingual template is perfect here.</li>
<li><strong>A local tax invoice</strong> issued by a business registered in Spain or Latin America. Here the template must meet local legal content, and in many countries it must be issued through the official e-invoicing system.</li>
</ul>

<h2>Spanish invoice fields: English to Spanish glossary</h2>
<p>Use these labels in a bilingual template. Spain and Latin America share most terms, with a few regional differences noted.</p>
<table><thead><tr><th>English</th><th>Spanish (Spain)</th><th>Spanish (Latin America)</th></tr></thead><tbody>
<tr><td>Invoice</td><td>Factura</td><td>Factura</td></tr>
<tr><td>Invoice number</td><td>Número de factura</td><td>Número de factura / Folio</td></tr>
<tr><td>Issue date</td><td>Fecha de expedición</td><td>Fecha de emisión</td></tr>
<tr><td>Due date</td><td>Fecha de vencimiento</td><td>Fecha de vencimiento</td></tr>
<tr><td>Seller / Supplier</td><td>Emisor / Proveedor</td><td>Emisor / Proveedor</td></tr>
<tr><td>Client / Bill to</td><td>Cliente / Destinatario</td><td>Cliente / Receptor</td></tr>
<tr><td>Tax ID</td><td>NIF (or NIF-IVA for EU VAT)</td><td>RFC (Mexico), NIT (Colombia), CUIT (Argentina), RUT (Chile), RUC (Peru)</td></tr>
<tr><td>Description</td><td>Concepto / Descripción</td><td>Concepto / Descripción</td></tr>
<tr><td>Quantity</td><td>Cantidad</td><td>Cantidad</td></tr>
<tr><td>Unit price</td><td>Precio unitario</td><td>Precio unitario / Valor unitario</td></tr>
<tr><td>Subtotal / Taxable base</td><td>Base imponible</td><td>Subtotal</td></tr>
<tr><td>VAT</td><td>IVA (cuota de IVA)</td><td>IVA</td></tr>
<tr><td>Income tax withholding</td><td>Retención de IRPF</td><td>Retención de ISR (Mexico)</td></tr>
<tr><td>Discount</td><td>Descuento</td><td>Descuento</td></tr>
<tr><td>Total due</td><td>Total a pagar / Importe total</td><td>Total a pagar</td></tr>
<tr><td>Payment method</td><td>Forma de pago</td><td>Forma de pago / Método de pago</td></tr>
<tr><td>Bank transfer</td><td>Transferencia bancaria</td><td>Transferencia bancaria</td></tr>
<tr><td>Credit note</td><td>Factura rectificativa</td><td>Nota de crédito</td></tr>
<tr><td>Quote / Estimate</td><td>Presupuesto</td><td>Cotización</td></tr>
</tbody></table>

<h2>Example bilingual Spanish invoice</h2>
<p>Here is an example invoice from a US-based web developer to a company in Valencia, Spain, for a B2B service. Because the client is VAT-registered in Spain and the supplier is outside the EU, the invoice shows no Spanish IVA and notes that the client accounts for it under the reverse charge.</p>
<p><strong>Invoice / Factura No. 2026-041</strong> | Issue date / Fecha de emisión: 2026-10-29 | Due date / Fecha de vencimiento: 2026-11-28<br>
<strong>From / Emisor:</strong> Bright Pixel LLC, 120 Elm St, Austin, TX 78701, USA, EIN 12-3456789<br>
<strong>Bill to / Cliente:</strong> Soluciones Mediterráneas S.L., Calle de Colón 15, 46004 Valencia, España, NIF-IVA ESB12345678</p>
<table><thead><tr><th>Description / Concepto</th><th>Qty / Cantidad</th><th>Unit price / Precio unitario (EUR)</th><th>Amount / Importe (EUR)</th></tr></thead><tbody>
<tr><td>Website redesign, 8 templates / Rediseño web, 8 plantillas</td><td>1</td><td>3,200.00</td><td>3,200.00</td></tr>
<tr><td>Spanish/English language switcher / Selector de idioma</td><td>1</td><td>450.00</td><td>450.00</td></tr>
<tr><td>Development hours / Horas de desarrollo</td><td>12</td><td>65.00</td><td>780.00</td></tr>
<tr><td>Hosting setup / Configuración del hosting</td><td>1</td><td>120.00</td><td>120.00</td></tr>
<tr><td colspan="3"><strong>Subtotal / Base imponible</strong></td><td><strong>4,550.00</strong></td></tr>
<tr><td colspan="3">VAT / IVA: reverse charge / inversión del sujeto pasivo</td><td>0.00</td></tr>
<tr><td colspan="3"><strong>Total due / Total a pagar</strong></td><td><strong>EUR 4,550.00</strong></td></tr>
</tbody></table>
<p><strong>Payment / Forma de pago:</strong> Bank transfer / Transferencia bancaria, IBAN and SWIFT/BIC listed below. Payment terms / Condiciones de pago: 30 days / 30 días.</p>
<p>Two formatting notes. First, Spain writes numbers as 4.550,00 (dot for thousands, comma for decimals), while Mexico and much of Central America use 4,550.00. On a bilingual invoice, pick one style and label the currency with its ISO code so there is no doubt. Second, if you invoice in euros but keep books in dollars, record the exchange rate you used. Our guide to the <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> explains how.</p>

<h2>Spanish invoice requirements in Spain</h2>
<p>A Spanish business issuing a full invoice (factura completa) under Real Decreto 1619/2012 generally needs:</p>
<ol>
<li>Invoice number and, where used, series (serie), in a correlative sequence.</li>
<li>Date of issue, and the date of the transaction if different.</li>
<li>Full name or company name of the issuer and the recipient.</li>
<li>NIF of the issuer and, in most cases, of the recipient.</li>
<li>Addresses of both parties.</li>
<li>Description of the goods or services.</li>
<li>Taxable base (base imponible), VAT rate applied and VAT amount (cuota).</li>
<li>Total amount.</li>
<li>A legal reference when VAT is not charged, such as an exemption or the reverse charge (inversión del sujeto pasivo).</li>
</ol>
<p>Spain's standard IVA rate is 21%, with reduced rates of 10% and 4% for specific goods and services. Spanish freelancers (autónomos) who provide professional services to Spanish businesses usually deduct IRPF withholding, generally 15% (7% in the first years of activity), shown as a negative line below the VAT. Check details on the <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank">Agencia Tributaria</a> website.</p>
<p>Spain is also rolling out Verifactu, a regime that requires invoicing software to keep tamper-proof records and, optionally, send them to the tax agency. After repeated postponements, the start dates currently in law are in 2027 (1 January 2027 for companies paying corporate tax and 1 July 2027 for other taxpayers, including most autónomos), and a separate B2B e-invoicing mandate is in preparation. Read our <a href="/blog/spain-e-invoicing-verifactu">Spain e-invoicing and Verifactu guide</a> for the current timeline.</p>

<h3>Worked example: Spanish autónomo invoice with IVA and IRPF</h3>
<p>A Seville graphic designer bills a Spanish company 2,000 euros for a project:</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount (EUR)</th></tr></thead><tbody>
<tr><td>Base imponible</td><td>Agreed fee</td><td>2,000.00</td></tr>
<tr><td>IVA 21%</td><td>2,000 x 21%</td><td>+420.00</td></tr>
<tr><td>Retención IRPF 15%</td><td>2,000 x 15%</td><td>-300.00</td></tr>
<tr><td><strong>Total a pagar</strong></td><td>2,000 + 420 - 300</td><td><strong>2,120.00</strong></td></tr>
</tbody></table>
<p>The client pays 2,120 euros to the designer and 300 euros to the tax agency on the designer's behalf.</p>

<h2>Spanish invoice rules in Latin America</h2>
<p>Latin America led the world in mandatory electronic invoicing, so for local businesses the "template" is usually generated by certified software rather than designed freely. The table summarizes the basics; always confirm with the local tax authority.</p>
<table><thead><tr><th>Country</th><th>Tax authority</th><th>Official invoice</th><th>Tax ID</th><th>Standard VAT</th></tr></thead><tbody>
<tr><td>Mexico</td><td>SAT</td><td>CFDI 4.0 (XML, certified by a PAC)</td><td>RFC</td><td>IVA 16%</td></tr>
<tr><td>Colombia</td><td>DIAN</td><td>Factura electrónica de venta</td><td>NIT</td><td>IVA 19%</td></tr>
<tr><td>Argentina</td><td>ARCA (formerly AFIP)</td><td>Factura electrónica A, B, C or E</td><td>CUIT</td><td>IVA 21%</td></tr>
<tr><td>Chile</td><td>SII</td><td>Factura electrónica / boleta</td><td>RUT</td><td>IVA 19%</td></tr>
<tr><td>Peru</td><td>SUNAT</td><td>Factura electrónica</td><td>RUC</td><td>IGV 18% (including municipal tax)</td></tr>
</tbody></table>
<p>For Mexico in particular, the details of RFC validation, uso del CFDI and payment complements are covered in our <a href="/blog/mexico-cfdi-invoice">Mexico CFDI invoice guide</a>, and the <a href="https://www.sat.gob.mx/" rel="noopener" target="_blank">SAT</a> publishes the official technical rules.</p>

<h2>Spain vs Latin America: what changes on the invoice?</h2>
<p>Even with the same language, a factura for Madrid and a factura for Monterrey look different. The main differences to plan for in a template:</p>
<ul>
<li><strong>Vocabulary.</strong> Spain says <em>presupuesto</em> for a quote and <em>factura rectificativa</em> for a correcting invoice; Latin America generally says <em>cotización</em> and <em>nota de crédito</em>. Mexico uses <em>folio</em> for the invoice number and <em>RFC</em> for the tax ID.</li>
<li><strong>Number formats.</strong> Spain, Argentina, Colombia and Chile usually write 1.250,50; Mexico and much of Central America write 1,250.50.</li>
<li><strong>Who issues the legal invoice.</strong> In Spain, a business can still issue a compliant PDF factura today, with software rules arriving under Verifactu. In Mexico, Colombia, Argentina, Chile and Peru, local businesses issue the official invoice through the tax authority's e-invoicing system.</li>
<li><strong>Withholdings.</strong> Spain has IRPF retention for autónomos; Mexico has ISR and IVA withholding in some cases when companies pay individuals; other countries have their own withholding regimes. Foreign freelancers generally leave these to the client.</li>
<li><strong>Payment details.</strong> Spain uses IBAN; Mexico uses an 18-digit CLABE; most other countries use local account numbers plus SWIFT for international payments.</li>
</ul>
<p>For a foreign freelancer, the practical answer is simple: a clean bilingual commercial invoice in the agreed currency, with the client's tax ID and a short tax note, is what most Spanish-speaking clients expect. If the client needs a local e-invoice for its own records, it will tell you, and that usually means you are dealing with a local entity rather than a cross-border supply.</p>

<h2>How to create a Spanish invoice step by step</h2>
<ol>
<li><strong>Confirm who you are invoicing.</strong> Get the client's legal name (razón social), address and tax ID (NIF, RFC, NIT, CUIT, RUT or RUC).</li>
<li><strong>Agree the currency and language.</strong> Bilingual is safest for cross-border work.</li>
<li><strong>Set a unique invoice number.</strong> Use a consistent sequence; our <a href="/tools/invoice-number-generator">invoice number generator</a> can help.</li>
<li><strong>Write clear line items in both languages.</strong> "Diseño de logotipo / Logo design" is clearer than a vague "servicios".</li>
<li><strong>Apply the right tax treatment.</strong> Local VAT, reverse charge, or no VAT for an export of services, with a short legal note.</li>
<li><strong>Add payment details.</strong> IBAN and BIC for Spain; CLABE for Mexican bank transfers; SWIFT for international wires.</li>
<li><strong>Download a PDF and keep a copy.</strong> The <a href="/invoice-generator">free invoice generator</a> lets you rename labels and download the result as a PDF.</li>
</ol>

<h2>Common mistakes on Spanish invoices</h2>
<ul>
<li><strong>Using the $ sign alone.</strong> It could mean USD, MXN, ARS, COP or CLP. Always add the ISO code.</li>
<li><strong>Charging IVA on a reverse charge service.</strong> If the client is a VAT-registered EU business, you usually should not add Spanish IVA. Check the number in VIES with our guide to the <a href="/blog/vies-vat-number-check">VIES VAT number check</a>.</li>
<li><strong>Machine-translating legal notes.</strong> Use standard phrases such as "Inversión del sujeto pasivo" rather than a literal translation.</li>
<li><strong>Treating a PDF as a valid Latin American tax invoice.</strong> Local businesses usually need the official e-invoice.</li>
<li><strong>Ambiguous dates.</strong> 05/11/2026 is 5 November in Spain and May 11 in the US. Write the month in words.</li>
<li><strong>Missing the client's tax ID.</strong> Spanish and Latin American finance teams often cannot book an invoice without it. See <a href="/blog/tax-id-on-invoice">putting a tax ID on an invoice</a>.</li>
</ul>

<h2>Spanish invoice template checklist</h2>
<ul>
<li>Bilingual labels for every field.</li>
<li>Invoice number, issue date and due date in an unambiguous format.</li>
<li>Your legal name, address and tax ID; client's legal name, address and tax ID.</li>
<li>Line items with quantity, unit price and amount.</li>
<li>Subtotal, tax lines (IVA, reverse charge note or IRPF) and total.</li>
<li>Currency ISO code and payment details (IBAN, CLABE or SWIFT).</li>
</ul>
<p>If you also bill French or German clients, compare these rules with our guides to <a href="/blog/french-invoice-requirements">French invoice requirements</a> and <a href="/blog/german-invoice-requirements">German invoice requirements</a>, and see the broader guide to <a href="/blog/invoice-international-clients">invoicing clients abroad</a>.</p>

<p>A good Spanish invoice template uses clear bilingual labels, the right tax ID and tax treatment for the client's country, and an unambiguous currency and date. Our free invoice generator needs no sign-up, lets you edit labels into Spanish, and downloads a PDF built in your browser, so your next <a href="/invoice-generator">bilingual factura</a> takes minutes.</p>
`,
  },
  {
    slug: "french-invoice-requirements",
    title: "French Invoice Requirements: Mandatory Mentions 2026",
    description:
      "French invoice requirements in 2026: every mandatory mention (mentions obligatoires), the new e-invoicing fields, late payment penalties, fines and a checklist.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "France",
    related: [
      "france-e-invoicing-reform",
      "german-invoice-requirements",
      "invoice-requirements-by-country",
    ],
    faqs: [
      {
        q: "Does an invoice in France have to be in French?",
        a: "Invoices issued by French businesses are expected to be in French, and the tax administration can ask for a certified translation of an invoice written in another language. In practice, many businesses issue bilingual invoices for foreign clients. If you are a foreign supplier billing a French client, an English invoice is usually accepted commercially, but a bilingual French-English layout makes the client's checks easier.",
      },
      {
        q: "What does 'TVA non applicable, art. 293 B du CGI' mean?",
        a: "It is the mandatory note for businesses using the VAT franchise (franchise en base de TVA), the small business scheme that exempts micro-entrepreneurs and other small businesses from charging VAT while their turnover stays under the thresholds. The invoice shows prices without VAT and must carry this sentence so the client knows why no VAT is charged. Check current thresholds on impots.gouv.fr, as they have been debated in recent finance laws.",
      },
      {
        q: "Can I issue an invoice in France without a SIRET number?",
        a: "A French business should show its SIREN or SIRET identifier on invoices, as it is one of the mandatory mentions. If you have just registered and are waiting for the number, wait for it or ask your registration center, because invoices without it are incomplete. Foreign businesses without a French establishment do not have a SIREN and instead show their home country registration and tax details.",
      },
      {
        q: "What is the 40 euro recovery fee on French invoices?",
        a: "French commercial law sets a fixed compensation for recovery costs (indemnité forfaitaire pour frais de recouvrement) of 40 euros, owed by a business customer that pays late, in addition to late payment interest. B2B invoices must mention it. It applies per unpaid invoice, and the supplier can claim more if actual recovery costs are higher and justified. It does not apply to sales to consumers.",
      },
      {
        q: "How long must invoices be kept in France?",
        a: "French commercial law requires accounting documents, including invoices, to be kept for 10 years, while the tax right of inspection generally runs for 6 years. Most businesses therefore keep invoices for 10 years. Electronic invoices must be kept in their original electronic form, with guaranteed integrity and legibility, so a printout of an e-invoice does not replace the original file.",
      },
      {
        q: "Do foreign companies need to follow French invoice rules?",
        a: "It depends on where the supply is taxed. If the sale is subject to French VAT and the foreign supplier must charge it, French invoicing rules apply. If the client is a French business and the reverse charge applies, the supplier usually follows its own country's invoicing rules, but the invoice should show the client's French VAT number and an 'Autoliquidation' note. Ask an adviser for complex supply chains.",
      },
      {
        q: "What is a facture d'acompte?",
        a: "A facture d'acompte is a deposit invoice issued when a client pays an advance before the goods or services are delivered. In France, VAT on services is generally due when payment is received, so the deposit invoice shows VAT on the advance. The final invoice then lists the full price and deducts the deposit already invoiced. Both invoices need the usual mandatory mentions.",
      },
      {
        q: "Are rounded totals or invoices without a due date allowed in France?",
        a: "No. A French B2B invoice must state the payment due date, and totals must match the line items, the VAT per rate and the amount payable. Missing due dates are one of the most common errors found in controls by the DGCCRF, the consumer and competition authority. Under the general rule, payment terms between businesses cannot exceed 60 days from the invoice date, or 45 days end of month if agreed.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A French invoice (facture) must include the <em>mentions obligatoires</em>: a unique sequential number, issue date, seller and buyer names and addresses, SIREN, VAT numbers, sale or service date, detailed line items, prices excluding tax, VAT rate and amount, total, due date, late payment penalty rate and the 40 euro recovery fee. Since September 2026, four new mentions apply too.</p>

<p>France has some of the most detailed invoice rules in Europe, and it is in the middle of a nationwide switch to electronic invoicing. This guide lists every mandatory mention with its French term, explains the new 2026 fields, walks through an example invoice with real numbers, and covers penalties, payment terms and the most common errors. It is written for French businesses, micro-entrepreneurs and foreign suppliers billing French clients.</p>
<p><em>This is general information, not tax or legal advice. Rules change, so confirm details with an expert-comptable or the official sources linked below.</em></p>

<h2>What are the mandatory invoice mentions in France?</h2>
<p>French invoice content comes from two sets of rules: the General Tax Code (Code général des impôts, article 242 nonies A of annex II) and the Commercial Code (Code de commerce, article L441-9). Together they define the <strong>mentions obligatoires</strong>. The official list is published on <a href="https://entreprendre.service-public.fr/vosdroits/F31808" rel="noopener" target="_blank">entreprendre.service-public.fr</a>.</p>
<table><thead><tr><th>Mandatory mention</th><th>French term</th><th>Notes</th></tr></thead><tbody>
<tr><td>Invoice date</td><td>Date d'émission</td><td>The date the invoice is issued</td></tr>
<tr><td>Invoice number</td><td>Numéro de facture</td><td>Unique, chronological, no gaps; separate series allowed</td></tr>
<tr><td>Seller identity</td><td>Nom ou dénomination sociale, adresse</td><td>Plus billing address of the buyer if different</td></tr>
<tr><td>Buyer identity</td><td>Nom et adresse du client</td><td>Legal name and address</td></tr>
<tr><td>Company identifier</td><td>SIREN or SIRET</td><td>Seller's number; buyer's SIREN required from Sept 2026 (see below)</td></tr>
<tr><td>Legal form and share capital</td><td>Forme juridique, capital social</td><td>For companies, e.g. "SAS au capital de 10 000 €"</td></tr>
<tr><td>Trade register</td><td>RCS + city, or RM number</td><td>For registered traders and artisans</td></tr>
<tr><td>VAT numbers</td><td>Numéro de TVA intracommunautaire</td><td>Seller's, and buyer's for B2B and EU transactions</td></tr>
<tr><td>Date of sale or service</td><td>Date de la vente ou de la prestation</td><td>If different from invoice date</td></tr>
<tr><td>Description</td><td>Désignation, quantité</td><td>Precise description of each product or service</td></tr>
<tr><td>Unit price excluding tax</td><td>Prix unitaire hors taxes (HT)</td><td>Plus any discounts (rabais, remises, ristournes)</td></tr>
<tr><td>VAT rate and amount</td><td>Taux et montant de TVA</td><td>Per rate, if several rates apply</td></tr>
<tr><td>Totals</td><td>Total HT, total TVA, total TTC</td><td>Excluding tax, VAT, including tax</td></tr>
<tr><td>Payment due date</td><td>Date d'échéance</td><td>Required for B2B</td></tr>
<tr><td>Early payment discount</td><td>Conditions d'escompte</td><td>Or "Pas d'escompte pour paiement anticipé"</td></tr>
<tr><td>Late payment penalties</td><td>Taux des pénalités de retard</td><td>Rate applied if paid late</td></tr>
<tr><td>Recovery fee</td><td>Indemnité forfaitaire de 40 €</td><td>B2B only</td></tr>
<tr><td>Legal notes when relevant</td><td>Mentions spécifiques</td><td>Exemption, reverse charge, margin scheme, insurance</td></tr>
</tbody></table>

<h3>Special mentions that apply only in some cases</h3>
<ul>
<li><strong>VAT franchise:</strong> "TVA non applicable, art. 293 B du CGI" for micro-entrepreneurs and small businesses under the franchise en base.</li>
<li><strong>Reverse charge:</strong> "Autoliquidation" when the buyer accounts for VAT, for example on B2B services to EU businesses. See our guide to the <a href="/blog/reverse-charge-invoice">reverse charge invoice</a>.</li>
<li><strong>Intra-EU supply of goods:</strong> "Exonération de TVA, article 262 ter I du CGI".</li>
<li><strong>Exports outside the EU:</strong> an exemption reference such as article 262 I of the CGI.</li>
<li><strong>Construction artisans:</strong> details of the mandatory professional insurance (assurance décennale), including insurer and coverage area.</li>
<li><strong>Management centers:</strong> members of an approved management body (organisme de gestion agréé) mention it and accept payment by cheque or card.</li>
</ul>

<h2>What changed in September 2026? The four new mentions</h2>
<p>France's e-invoicing reform started on 1 September 2026. From that date every VAT-registered business established in France must be able to receive electronic invoices, large and mid-sized companies must issue them, and small and micro businesses follow from 1 September 2027. The reform also added four mentions to invoices:</p>
<ol>
<li><strong>The buyer's SIREN number</strong> (numéro SIREN du client), used to route the e-invoice to the right business.</li>
<li><strong>The delivery address</strong> (adresse de livraison des biens), when it differs from the buyer's billing address.</li>
<li><strong>The category of the transaction</strong> (catégorie de l'opération): delivery of goods, provision of services, or both.</li>
<li><strong>The option to pay VAT on debits</strong> (option pour le paiement de la TVA d'après les débits), when the supplier has chosen it.</li>
</ol>
<p>The timing of these new mentions is tied to the reform, so check the latest guidance from your platform (plateforme agréée) or accountant. Our <a href="/blog/france-e-invoicing-reform">France e-invoicing reform guide</a> covers the calendar, approved platforms, e-reporting and the Factur-X, UBL and CII formats. For the structure behind those formats, see the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice template</a>.</p>

<h2>Example French invoice with VAT</h2>
<p>A Lyon web agency (SAS) bills a Paris client for a website project. Standard VAT in France is 20%; reduced rates are 10%, 5.5% and 2.1% for specific goods and services. The rates are listed on <a href="https://www.impots.gouv.fr/" rel="noopener" target="_blank">impots.gouv.fr</a> and in our table of <a href="/blog/eu-vat-rates-2026">EU VAT rates for 2026</a>.</p>
<p><strong>FACTURE N° 2026-0187</strong> | Date d'émission: 29/10/2026 | Date de la prestation: 01/10/2026 au 24/10/2026 | Catégorie: prestation de services<br>
<strong>Vendeur:</strong> Atelier Rhône Digital SAS au capital de 5 000 €, 12 rue de la République, 69002 Lyon, SIREN 123 456 789, RCS Lyon, TVA FR12123456789<br>
<strong>Client:</strong> Maison Lefèvre SARL, 40 boulevard Haussmann, 75009 Paris, SIREN 987 654 321, TVA FR45987654321</p>
<table><thead><tr><th>Désignation</th><th>Qté</th><th>PU HT (€)</th><th>Total HT (€)</th></tr></thead><tbody>
<tr><td>Création site vitrine, 6 pages</td><td>1</td><td>4 200,00</td><td>4 200,00</td></tr>
<tr><td>Rédaction de contenus (par page)</td><td>6</td><td>150,00</td><td>900,00</td></tr>
<tr><td>Formation à l'outil de gestion (heures)</td><td>3</td><td>90,00</td><td>270,00</td></tr>
<tr><td>Remise commerciale 5%</td><td></td><td></td><td>-268,50</td></tr>
<tr><td colspan="3"><strong>Total HT</strong></td><td><strong>5 101,50</strong></td></tr>
<tr><td colspan="3">TVA 20%</td><td>1 020,30</td></tr>
<tr><td colspan="3"><strong>Total TTC</strong></td><td><strong>6 121,80</strong></td></tr>
</tbody></table>
<p><strong>Échéance:</strong> 28/11/2026 (30 jours). Pas d'escompte pour paiement anticipé. Pénalités de retard: taux BCE majoré de 10 points. Indemnité forfaitaire pour frais de recouvrement: 40 €. Paiement par virement: IBAN FR76 ...</p>
<p>Check the math: 4,200 + 900 + 270 = 5,370; a 5% discount is 268.50, giving 5,101.50 excluding VAT; VAT at 20% is 1,020.30; total 6,121.80 euros.</p>

<h2>Payment terms and late payment penalties in France</h2>
<p>France caps payment terms between businesses under the Code de commerce (article L441-10):</p>
<ul>
<li><strong>Default term:</strong> 30 days after receipt of the goods or performance of the service, if nothing is agreed.</li>
<li><strong>Maximum agreed term:</strong> 60 days from the invoice date, or 45 days end of month if expressly agreed in the contract.</li>
<li><strong>Late payment interest:</strong> the rate in your terms cannot be lower than three times the legal interest rate. If no rate is stated, the default is the European Central Bank refinancing rate plus 10 percentage points.</li>
<li><strong>Recovery fee:</strong> 40 euros per late invoice, owed automatically by business customers.</li>
</ul>
<p>Late payment is a well-known issue in France, so stating these terms clearly on every invoice matters. If you need a template for chasing, our guide to an <a href="/blog/overdue-invoice">overdue invoice</a> covers reminder wording and timing.</p>

<h2>What are the penalties for incorrect French invoices?</h2>
<p>Two different authorities can sanction invoice errors:</p>
<table><thead><tr><th>Breach</th><th>Possible sanction</th><th>Source</th></tr></thead><tbody>
<tr><td>Missing or incorrect tax mention</td><td>Tax fine per missing or inaccurate mention (article 1737 CGI), capped relative to the invoice amount</td><td>Tax administration (DGFiP)</td></tr>
<tr><td>Missing commercial mentions (due date, penalties, 40 € fee)</td><td>Administrative fine, with higher maximums for companies than for individuals</td><td>DGCCRF</td></tr>
<tr><td>Payment terms beyond legal limits</td><td>Administrative fine, often published</td><td>DGCCRF</td></tr>
<tr><td>Failure to issue e-invoices once mandatory</td><td>Fine per non-compliant invoice, with an annual cap</td><td>Reform rules (from 2026/2027)</td></tr>
</tbody></table>
<p>The amounts are revised from time to time, so check the current figures with your accountant or on service-public.fr. Beyond fines, a client's accounts payable team will often simply reject an invoice that lacks its SIREN, VAT number or due date, which delays payment.</p>

<h2>How to issue a compliant French invoice: step by step</h2>
<ol>
<li><strong>Collect the client's details:</strong> legal name, billing address, SIREN, intra-EU VAT number and delivery address if different.</li>
<li><strong>Assign the next number in your sequence.</strong> No gaps, no reuse. A separate series per year (2026-0001) is common. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the format consistent.</li>
<li><strong>State the date of sale or service</strong> and the category of the transaction.</li>
<li><strong>List each item</strong> with quantity, unit price HT and any discount.</li>
<li><strong>Apply the right VAT rate</strong> or the correct exemption or reverse charge mention.</li>
<li><strong>Show totals:</strong> HT, VAT per rate, TTC.</li>
<li><strong>Add the commercial mentions:</strong> due date, escompte, penalty rate, 40 € fee.</li>
<li><strong>Issue through an approved platform</strong> once the e-invoicing obligation applies to you; until then, a PDF invoice remains acceptable for businesses not yet in scope.</li>
<li><strong>Keep the invoice for 10 years</strong> in its original format.</li>
</ol>
<p>For corrections, never edit an issued invoice: issue a credit note (avoir) referencing the original, then a new invoice.</p>

<h2>How do French businesses invoice foreign clients?</h2>
<p>The mandatory mentions still apply, but the VAT treatment changes:</p>
<ul>
<li><strong>B2B services to an EU business:</strong> no French VAT; show both VAT numbers and the mention "Autoliquidation". Declare the service on the monthly European services declaration (DES).</li>
<li><strong>B2B services to a business outside the EU:</strong> usually no French VAT, with a note such as "TVA non applicable, article 259-1 du CGI".</li>
<li><strong>Services to consumers abroad:</strong> often French VAT applies, but digital services and some others follow the customer's country rules and may go through the One Stop Shop. Our guide to the <a href="/blog/eu-vat-one-stop-shop">EU VAT One Stop Shop</a> explains when.</li>
<li><strong>Invoices in a foreign currency:</strong> allowed, but show the VAT amount in euros when French VAT is charged, and keep a record of the exchange rate used.</li>
</ul>
<p>For bilingual invoices, keep the French mandatory mentions and add English labels; foreign clients appreciate it and French auditors still see the required wording. A quick way to draft one is our <a href="/invoice-generator">free invoice generator</a>, where you can rename every label.</p>

<h2>Common mistakes on French invoices</h2>
<ul>
<li><strong>Forgetting the late penalty rate and the 40 euro fee.</strong> These are the mentions most often missing on B2B invoices.</li>
<li><strong>No due date</strong> or a due date beyond the 60-day limit.</li>
<li><strong>Charging VAT under the franchise</strong> or forgetting the 293 B mention.</li>
<li><strong>Not validating the client's VAT number.</strong> Check intra-EU numbers in VIES before applying the reverse charge; see our <a href="/blog/vies-vat-number-check">VIES check guide</a>.</li>
<li><strong>Gaps in numbering</strong> after deleting a draft invoice.</li>
<li><strong>Missing the buyer's SIREN</strong> now that it is used for e-invoice routing.</li>
<li><strong>Using a non-French template without the commercial mentions.</strong> Generic US-style templates rarely include escompte or penalty terms.</li>
</ul>

<h2>French invoice requirements checklist</h2>
<ul>
<li>Unique sequential number and issue date.</li>
<li>Seller: name, address, SIREN/SIRET, legal form, capital, RCS/RM, VAT number.</li>
<li>Buyer: name, address, SIREN, VAT number; delivery address if different.</li>
<li>Date of sale or service and category (goods, services or both).</li>
<li>Line items with quantity, unit price HT and discounts.</li>
<li>VAT rate and amount per rate, or exemption/reverse charge mention.</li>
<li>Total HT, VAT and TTC.</li>
<li>Due date, escompte terms, late penalty rate, 40 € recovery fee.</li>
<li>VAT on debits option, if chosen.</li>
</ul>
<p>Compare with neighboring rules in our guides to <a href="/blog/german-invoice-requirements">German invoice requirements</a> and <a href="/blog/vat-invoice-guide">VAT invoices in general</a>, or browse <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>

<p>Meeting French invoice requirements comes down to a complete set of mandatory mentions, correct VAT treatment and clear B2B payment terms, plus the new SIREN, delivery address, transaction category and VAT-on-debits fields under the 2026 reform. For businesses not yet required to issue e-invoices, our free invoice generator needs no sign-up, lets you add every mention, and downloads a PDF built in your browser. Start with the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "german-invoice-requirements",
    title: "German Invoice Requirements: §14 UStG Checklist 2026",
    description:
      "German invoice requirements under §14 UStG: every mandatory field (Pflichtangaben), invoices up to €250, Kleinunternehmer rules, e-invoicing and an example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Germany",
    related: [
      "germany-e-invoicing-2027",
      "kleinunternehmerregelung",
      "french-invoice-requirements",
    ],
    faqs: [
      {
        q: "What is a Kleinbetragsrechnung?",
        a: "A Kleinbetragsrechnung is a small-amount invoice with a gross total of up to 250 euros. Under §33 of the VAT implementing ordinance (UStDV), it only needs the supplier's full name and address, the issue date, the quantity and type of goods or services, and the gross amount with the applicable tax rate (or an exemption note). Customer details, invoice number and tax number are not required, and it is exempt from the e-invoice obligation.",
      },
      {
        q: "Do I need a Steuernummer or a USt-IdNr. on my German invoice?",
        a: "You need one of them. §14 UStG requires either the tax number (Steuernummer) issued by your local tax office or the VAT identification number (Umsatzsteuer-Identifikationsnummer, USt-IdNr.) from the Federal Central Tax Office. Many freelancers prefer the USt-IdNr. because it reveals less about them. For intra-EU supplies and reverse charge services, you must show your own and the customer's VAT ID.",
      },
      {
        q: "How long do I have to issue an invoice in Germany?",
        a: "If you supply goods or services to another business, or for certain property-related work to private customers, you must issue the invoice within six months of the supply under §14(2) UStG. For intra-EU supplies and reverse charge services, the deadline is the 15th day of the month after the supply. Late invoicing can trigger a fine, and it also delays your cash flow.",
      },
      {
        q: "Can a German invoice be in English?",
        a: "Yes. German VAT law does not require invoices to be in German, so an English invoice with all mandatory details is valid. The tax office can request a translation during an audit. For reverse charge invoices, a standard English phrase such as 'Reverse charge' is accepted, though many businesses also add the German wording 'Steuerschuldnerschaft des Leistungsempfängers'.",
      },
      {
        q: "What happens if I show VAT incorrectly on a German invoice?",
        a: "Under §14c UStG, VAT shown on an invoice is owed to the tax office even if it was wrong. If you show too much VAT, or a Kleinunternehmer shows VAT at all, you owe that amount until you correct the invoice. Correction requires a corrected invoice or credit note, and in some cases the tax office must confirm there is no risk to tax revenue before the amount can be reclaimed.",
      },
      {
        q: "How long must invoices be kept in Germany?",
        a: "Since 2025, invoices and other accounting vouchers (Buchungsbelege) must generally be kept for eight years, reduced from ten by the Fourth Bureaucracy Relief Act. The period starts at the end of the calendar year in which the invoice was issued. E-invoices must be kept in their original electronic format, readable and unchanged, together with any data needed to verify them.",
      },
      {
        q: "What is the difference between Rechnung and Quittung?",
        a: "A Rechnung is an invoice: a request for payment that, when it meets §14 UStG, lets a business customer deduct input VAT. A Quittung is a receipt confirming that payment was received. A cash sale can be documented with a document that serves as both, but for VAT deduction the document must contain the invoice details, or the Kleinbetragsrechnung details for amounts up to 250 euros.",
      },
      {
        q: "Do foreign freelancers billing German clients need to follow §14 UStG?",
        a: "Not usually for B2B services. If you are established outside Germany and provide most services to a German business, the reverse charge applies and the German client accounts for the VAT. Your invoice should follow your own country's rules, show the client's USt-IdNr. if you are in the EU, and carry a reverse charge note. Different rules apply to goods located in Germany and to consumers.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A German invoice (Rechnung) must meet §14(4) UStG: full name and address of supplier and customer, tax number or VAT ID, issue date, a unique sequential invoice number, quantity and type of goods or services, date of supply, net amount by tax rate, the VAT rate and amount (or an exemption note), and any agreed price reductions. Invoices up to 250 euros need less.</p>

<p>Germany is strict about invoice content because a correct invoice is the basis for the customer's input VAT deduction. A missing field can lead the tax office to refuse the client's deduction, and clients know it, so they reject incomplete invoices quickly. This guide explains every mandatory field (Pflichtangaben) with its German name, the special cases for small invoices, Kleinunternehmer and reverse charge, the e-invoicing obligation, and a worked example you can copy.</p>
<p><em>This is general information, not tax advice. For your situation, check with a Steuerberater or the official sources linked below.</em></p>

<h2>What is §14 UStG?</h2>
<p>Section 14 of the German VAT Act (Umsatzsteuergesetz, UStG) defines what counts as an invoice, when one must be issued and what it must contain. Related rules sit in §14a UStG (special cases such as reverse charge and intra-EU supplies), §14c UStG (incorrectly shown VAT), and §§31 to 34a of the VAT implementing ordinance (UStDV), which cover simplifications. You can read the full text on <a href="https://www.gesetze-im-internet.de/ustg_1980/__14.html" rel="noopener" target="_blank">gesetze-im-internet.de</a>, and the Federal Ministry of Finance publishes guidance at <a href="https://www.bundesfinanzministerium.de/" rel="noopener" target="_blank">bundesfinanzministerium.de</a>.</p>

<h2>German invoice mandatory fields (Pflichtangaben)</h2>
<table><thead><tr><th>#</th><th>Mandatory field</th><th>German term</th><th>Practical notes</th></tr></thead><tbody>
<tr><td>1</td><td>Full name and address of supplier and customer</td><td>Vollständiger Name und Anschrift des leistenden Unternehmers und des Leistungsempfängers</td><td>A PO box is accepted as an address</td></tr>
<tr><td>2</td><td>Tax number or VAT ID of the supplier</td><td>Steuernummer oder USt-IdNr.</td><td>Either one is enough for domestic invoices</td></tr>
<tr><td>3</td><td>Issue date</td><td>Ausstellungsdatum</td><td>Date the invoice is created</td></tr>
<tr><td>4</td><td>Unique sequential invoice number</td><td>Fortlaufende Rechnungsnummer</td><td>Can include letters and separate series, but must be unique</td></tr>
<tr><td>5</td><td>Quantity and type of goods, or scope and type of service</td><td>Menge und Art der Lieferung, Umfang und Art der Leistung</td><td>"Consulting" alone is too vague; describe the actual work</td></tr>
<tr><td>6</td><td>Date of supply or service</td><td>Zeitpunkt der Lieferung oder Leistung</td><td>The month is enough; "Leistungsdatum entspricht Rechnungsdatum" is common</td></tr>
<tr><td>7</td><td>Net amount broken down by tax rate, plus agreed reductions</td><td>Entgelt nach Steuersätzen aufgeschlüsselt, Entgeltminderungen</td><td>Mention any agreed early payment discount (Skonto)</td></tr>
<tr><td>8</td><td>VAT rate and VAT amount, or exemption note</td><td>Steuersatz und Steuerbetrag oder Hinweis auf Steuerbefreiung</td><td>Standard 19%, reduced 7%</td></tr>
<tr><td>9</td><td>Retention notice for private customers on property work</td><td>Hinweis auf Aufbewahrungspflicht</td><td>Construction and property services to consumers: client must keep the invoice for 2 years</td></tr>
<tr><td>10</td><td>Note on self-billing, reverse charge or margin scheme</td><td>Gutschrift, Steuerschuldnerschaft des Leistungsempfängers, Differenzbesteuerung</td><td>Only when relevant (§14a UStG)</td></tr>
</tbody></table>
<p>Germany's standard VAT rate is 19%, and the reduced rate of 7% covers items such as most food, books and certain cultural services. Compare with other countries in our list of <a href="/blog/eu-vat-rates-2026">EU VAT rates for 2026</a>.</p>

<h2>Example German invoice (Rechnung) with 19% VAT</h2>
<p>A Berlin freelance developer bills a Munich company for October work. Both are in Germany, so domestic VAT applies.</p>
<p><strong>Rechnung Nr. 2026-112</strong> | Rechnungsdatum: 29.10.2026 | Leistungszeitraum: 01.10.2026 bis 24.10.2026<br>
<strong>Von:</strong> Jana Becker, Softwareentwicklung, Torstraße 50, 10119 Berlin, USt-IdNr. DE123456789<br>
<strong>An:</strong> Alpenblick Logistik GmbH, Leopoldstraße 20, 80802 München</p>
<table><thead><tr><th>Pos.</th><th>Beschreibung</th><th>Menge</th><th>Einzelpreis (€)</th><th>Gesamt netto (€)</th></tr></thead><tbody>
<tr><td>1</td><td>Entwicklung Kundenportal, Modul Sendungsverfolgung</td><td>42 Std.</td><td>95,00</td><td>3.990,00</td></tr>
<tr><td>2</td><td>Code-Review und Dokumentation</td><td>6 Std.</td><td>95,00</td><td>570,00</td></tr>
<tr><td>3</td><td>Server-Konfiguration (Pauschale)</td><td>1</td><td>350,00</td><td>350,00</td></tr>
<tr><td colspan="4"><strong>Nettobetrag</strong></td><td><strong>4.910,00</strong></td></tr>
<tr><td colspan="4">zzgl. 19% USt</td><td>932,90</td></tr>
<tr><td colspan="4"><strong>Rechnungsbetrag (brutto)</strong></td><td><strong>5.842,90</strong></td></tr>
</tbody></table>
<p>Zahlbar innerhalb von 14 Tagen ohne Abzug. Bei Zahlung innerhalb von 7 Tagen 2% Skonto (116,86 €). Bankverbindung: IBAN DE..., BIC ...</p>
<p>The math: 3,990 + 570 + 350 = 4,910 euros net; 19% VAT is 932.90; gross 5,842.90. The 2% Skonto is calculated on the gross amount here (5,842.90 x 2% = 116.86), and because it reduces the price if used, it is stated on the invoice as an agreed reduction.</p>

<h2>Small invoices up to 250 euros (Kleinbetragsrechnung)</h2>
<p>For invoices with a gross total of up to 250 euros, §33 UStDV allows a simplified invoice with only:</p>
<ul>
<li>Full name and address of the supplier.</li>
<li>Issue date.</li>
<li>Quantity and type of goods or scope and type of service.</li>
<li>Gross amount and the applicable tax rate, or a note on the exemption.</li>
</ul>
<p>No customer name, invoice number or tax number is required, which is why restaurant and taxi receipts qualify. Kleinbetragsrechnungen are also exempt from the e-invoice obligation, so a paper or PDF receipt remains fine for them.</p>

<h2>Invoices from small businesses (Kleinunternehmer)</h2>
<p>The small business scheme in §19 UStG lets businesses with low turnover skip charging VAT. Since 1 January 2025, it applies if turnover was no more than 25,000 euros in the previous year and does not exceed 100,000 euros in the current year. Crossing 100,000 euros during the year ends the exemption immediately, from the transaction that crosses the limit.</p>
<p>A Kleinunternehmer invoice must not show VAT or a VAT rate, and it needs a note explaining why, for example: <em>"Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."</em> Since 2025, simplified content rules for these invoices are set out in §34a UStDV. If a Kleinunternehmer shows VAT by mistake, it is owed under §14c UStG. Our explainer on the <a href="/blog/kleinunternehmerregelung">Kleinunternehmerregelung</a> covers eligibility and the switch to standard VAT.</p>

<h2>Reverse charge and EU invoices</h2>
<p>When a German business provides services to a business in another EU country, the customer usually accounts for the VAT under the reverse charge. The invoice must show:</p>
<ul>
<li>Your USt-IdNr. and the customer's VAT ID (check it with the EU's VIES service; see our <a href="/blog/vies-vat-number-check">VIES VAT number check guide</a>).</li>
<li>The net amount, with no German VAT.</li>
<li>The note "Steuerschuldnerschaft des Leistungsempfängers" (or "Reverse charge").</li>
</ul>
<p>Intra-EU supplies of goods need the note "steuerfreie innergemeinschaftliche Lieferung" and both VAT IDs. These invoices must be issued by the 15th of the month after the supply, and the transactions also go on your EC Sales List (Zusammenfassende Meldung). More detail in our general <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>.</p>

<h2>Is e-invoicing mandatory in Germany?</h2>
<p>For domestic B2B transactions, yes, in stages:</p>
<table><thead><tr><th>Date</th><th>Obligation</th></tr></thead><tbody>
<tr><td>1 January 2025</td><td>All businesses must be able to receive and process structured e-invoices</td></tr>
<tr><td>Until 31 December 2026</td><td>Paper and PDF invoices may still be issued (PDF with the recipient's agreement)</td></tr>
<tr><td>1 January 2027</td><td>Businesses with prior-year turnover above 800,000 euros must issue e-invoices</td></tr>
<tr><td>1 January 2028</td><td>All businesses must issue e-invoices for domestic B2B supplies (with exceptions)</td></tr>
</tbody></table>
<p>A PDF is not an e-invoice under German law; the e-invoice must be in a structured format that complies with EN 16931, such as XRechnung or ZUGFeRD (version 2.0.1 or later, except the Minimum and Basic WL profiles). Kleinbetragsrechnungen and tickets are excluded. For full detail, see <a href="/blog/germany-e-invoicing-2027">Germany e-invoicing 2027</a> and the format comparison in <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung vs ZUGFeRD</a>.</p>

<h2>Advance, partial and final invoices in Germany</h2>
<p>German businesses often bill in stages, especially in construction, software projects and events. Each stage has its own rules:</p>
<table><thead><tr><th>Invoice type</th><th>German term</th><th>Key point</th></tr></thead><tbody>
<tr><td>Advance payment invoice</td><td>Anzahlungsrechnung</td><td>VAT is due when the advance is received; the invoice should say the supply has not yet been made</td></tr>
<tr><td>Partial invoice</td><td>Teilrechnung</td><td>For a completed, separately agreed part of the work</td></tr>
<tr><td>Final invoice</td><td>Schlussrechnung</td><td>Shows the full price and deducts advances already paid, with their VAT shown separately</td></tr>
<tr><td>Correction</td><td>Rechnungskorrektur / Stornorechnung</td><td>Reference the original invoice number; never overwrite the original</td></tr>
</tbody></table>
<p>Worked example: a 10,000 euro net project with a 30% advance. The Anzahlungsrechnung shows 3,000 euros net plus 570 euros VAT (3,570 gross). The Schlussrechnung shows 10,000 net plus 1,900 VAT (11,900 gross), minus the advance of 3,000 net and 570 VAT, leaving 7,000 net plus 1,330 VAT, so 8,330 euros payable. Getting the VAT deduction on the final invoice wrong is a classic source of §14c problems, so show it line by line. You can lay out each stage with our <a href="/invoice-generator">free invoice generator</a> and keep the numbers in one sequence.</p>

<h2>How to create a compliant German invoice: step by step</h2>
<ol>
<li><strong>Check your status:</strong> regular VAT, Kleinunternehmer, or e-invoice obligation from 2027 or 2028.</li>
<li><strong>Enter both parties' full names and addresses.</strong> For companies, use the registered name including legal form (GmbH, UG, AG).</li>
<li><strong>Add your Steuernummer or USt-IdNr.</strong></li>
<li><strong>Assign a unique invoice number.</strong> The <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a clean sequence.</li>
<li><strong>Describe the goods or services precisely</strong> and give the date or period of supply.</li>
<li><strong>Show net amounts per tax rate, VAT rate, VAT amount and gross total</strong>, or the correct exemption or reverse charge note.</li>
<li><strong>State payment terms and any Skonto.</strong></li>
<li><strong>Issue within the deadline:</strong> six months for B2B, or by the 15th of the next month for EU transactions.</li>
<li><strong>Archive for eight years</strong>, keeping e-invoices in their original format.</li>
</ol>

<h2>Common mistakes on German invoices</h2>
<ul>
<li><strong>Missing date of supply.</strong> The single most common error. If it equals the invoice date, say so.</li>
<li><strong>Vague descriptions</strong> such as "Dienstleistungen" or "Beratung" without detail.</li>
<li><strong>Duplicate invoice numbers</strong> across clients or years.</li>
<li><strong>Kleinunternehmer showing VAT.</strong> The VAT becomes payable under §14c UStG.</li>
<li><strong>Applying the reverse charge to German customers</strong> for ordinary services, where it does not apply.</li>
<li><strong>Using the wrong VAT rate</strong>, for example 7% for services that are taxed at 19%.</li>
<li><strong>Treating a PDF as an e-invoice</strong> once the issuing obligation applies.</li>
</ul>
<p>Breaches of invoice issuing and retention duties can lead to fines of up to 5,000 euros under §26a UStG, and a client may lose its input VAT deduction, which is why German finance teams return incomplete invoices.</p>

<h2>German invoice requirements checklist</h2>
<ul>
<li>Full name and address of you and your client.</li>
<li>Steuernummer or USt-IdNr. (both VAT IDs for EU transactions).</li>
<li>Issue date and unique invoice number.</li>
<li>Quantity and type of goods or scope of services.</li>
<li>Date or period of supply.</li>
<li>Net amount by tax rate, VAT rate and amount, gross total.</li>
<li>Exemption, Kleinunternehmer or reverse charge note when relevant.</li>
<li>Agreed reductions such as Skonto.</li>
</ul>
<p>If you also bill clients in France, compare these rules with our guide to <a href="/blog/french-invoice-requirements">French invoice requirements</a>, and see <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> for other markets.</p>

<p>German invoice requirements under §14 UStG are strict but predictable: get the ten Pflichtangaben right, use the simplified rules for invoices up to 250 euros or as a Kleinunternehmer, and plan for structured e-invoices from 2027 or 2028. Until your e-invoice obligation starts, our free invoice generator needs no sign-up, includes fields for every mandatory detail, and downloads a PDF built in your browser. Try the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "sales-commission-invoice-template",
    title: "Sales Commission Invoice Template (Free + Examples)",
    description:
      "Free sales commission invoice template for agents and independent reps: what to include, how to calculate flat, tiered and split commissions, with examples.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "real-estate-commission-invoice",
      "independent-contractor-invoice",
      "how-to-pay-contractors",
    ],
    faqs: [
      {
        q: "Do employees send commission invoices?",
        a: "No. Employees are paid commission through payroll, with tax withheld, and the employer produces a commission statement or payslip. Commission invoices are for independent contractors: manufacturer's reps, sales agents, brokers, referral partners and affiliates who run their own business. If you send invoices, you are generally treated as self-employed for tax purposes, so plan for income and self-employment tax on your commission.",
      },
      {
        q: "Is sales tax charged on a commission invoice?",
        a: "In most US states, a sales commission is a fee for a service and is not subject to sales tax, but a few states tax certain services broadly, so check your state's rules. In VAT countries, commission is usually a taxable service, so a VAT-registered agent adds VAT, or applies the reverse charge for business clients abroad. When in doubt, ask your state revenue department or an accountant.",
      },
      {
        q: "When should a sales agent invoice for commission?",
        a: "Invoice when the commission is earned under your agreement. Common triggers are when the customer's order is accepted, when the principal invoices the customer, or when the customer pays the principal. Many reps invoice monthly for all commissions earned in the period. Check your contract, because invoicing before the trigger date usually just leads to a rejected invoice.",
      },
      {
        q: "What is a commission clawback?",
        a: "A clawback, or chargeback, is when the principal recovers commission already paid because the underlying sale fell through: the customer returned goods, cancelled within a set period, or never paid. On your next invoice, show the clawback as a separate negative line with the original order reference, so both sides can match it to the earlier commission and the net amount is clear.",
      },
      {
        q: "What is a draw against commission?",
        a: "A draw is an advance paid to a salesperson before commissions are earned, then deducted from commissions later. For example, a rep receives a $2,000 monthly draw; if they earn $3,500 in commission that month, they are owed $1,500 more. Draws are more common for employees, but some independent agents negotiate them. If you have one, show the draw deduction on each commission invoice.",
      },
      {
        q: "Will I get a 1099 for my commissions?",
        a: "If you are a US independent contractor and a business pays you commissions above the reporting threshold in a calendar year, it generally reports them on Form 1099-NEC. The threshold was $600 for many years and is $2,000 for payments made from 2026 under recent legislation. Whether or not you receive a form, all commission income must be reported on your tax return.",
      },
      {
        q: "Should I attach a sales report to my commission invoice?",
        a: "Yes, if possible. A short sales report or commission statement listing each order, customer, sale value, rate and commission makes the invoice easy to verify and speeds up payment. Some principals send the statement to you first; in that case, reference its number or period on your invoice and make sure your totals match theirs exactly.",
      },
      {
        q: "Can a commission invoice include expenses?",
        a: "Only if your agreement allows it. Some reps are reimbursed for trade show fees, samples or travel, while others cover all their own costs from commission. If expenses are billable, list them on separate lines with dates and receipts, below the commission lines, so the principal can see the commission total and the reimbursements separately.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A sales commission invoice is a bill that an independent sales agent, broker or rep sends to the company they sell for (the principal) to request commission earned. It lists the sales period, each qualifying sale, the sale value, the commission rate and amount, any clawbacks or draws, the total due and payment terms.</p>

<p>If you sell on behalf of other companies as a contractor, you are not on payroll, so nobody pays your commission until you ask for it in the right form. This guide gives you a sales commission invoice template layout, explains how to calculate flat, tiered and split commissions with worked numbers, and covers the common mistakes that delay commission payments.</p>

<h2>What is a sales commission invoice?</h2>
<p>A sales commission invoice is a request for payment of commission, a fee calculated as a percentage of sales (or a fixed amount per sale) under an agent or representation agreement. It is used by:</p>
<ul>
<li><strong>Independent sales reps and manufacturer's representatives</strong> who sell product lines for several brands.</li>
<li><strong>Sales agents and brokers</strong> in insurance, freight, advertising, wholesale and real estate.</li>
<li><strong>Referral partners and affiliates</strong> paid a percentage of the revenue they bring in.</li>
<li><strong>Freelance business developers</strong> paid on closed deals.</li>
</ul>
<p>Real estate agents often follow brokerage-specific rules, covered in our <a href="/blog/real-estate-commission-invoice">real estate commission invoice</a> guide. If you are an artist taking commissioned work (a different meaning of "commission"), see the <a href="/blog/artist-commission-invoice-template">artist commission invoice template</a> instead.</p>

<h2>What to include on a sales commission invoice</h2>
<table><thead><tr><th>Section</th><th>What to include</th></tr></thead><tbody>
<tr><td>Header</td><td>"Commission Invoice", your business name, address, email, tax ID</td></tr>
<tr><td>Invoice details</td><td>Invoice number, issue date, due date, commission period (e.g. October 2026)</td></tr>
<tr><td>Bill to</td><td>Principal's legal name, address, accounts payable contact</td></tr>
<tr><td>Agreement reference</td><td>Contract or rep agreement date or number</td></tr>
<tr><td>Commission lines</td><td>Order or invoice number, customer, sale date, sale amount, rate, commission</td></tr>
<tr><td>Adjustments</td><td>Clawbacks, returns, draws already paid, bonuses</td></tr>
<tr><td>Expenses</td><td>Reimbursable costs, only if the agreement allows</td></tr>
<tr><td>Totals</td><td>Gross commission, adjustments, tax if applicable, total due</td></tr>
<tr><td>Payment details</td><td>Bank transfer or ACH details, accepted methods, terms such as Net 15</td></tr>
</tbody></table>
<p>The basics are the same as any <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>; the commission-specific part is the line-by-line link between each sale and the commission it earned.</p>

<h2>Sales commission invoice template example</h2>
<p><strong>COMMISSION INVOICE #C-2026-10</strong> | Issue date: November 3, 2026 | Due: November 18, 2026 (Net 15) | Commission period: October 1 to 31, 2026<br>
<strong>From:</strong> Rivera Sales Group LLC, 88 Market St, Denver, CO 80202, EIN 98-7654321<br>
<strong>Bill to:</strong> Summit Outdoor Gear Inc., Accounts Payable, 1500 Industrial Way, Boulder, CO 80301<br>
<strong>Agreement:</strong> Independent Sales Representative Agreement dated March 1, 2026 (8% on net sales)</p>
<table><thead><tr><th>Order #</th><th>Customer</th><th>Date paid</th><th>Net sale ($)</th><th>Rate</th><th>Commission ($)</th></tr></thead><tbody>
<tr><td>SO-4411</td><td>Peak Trail Outfitters</td><td>Oct 4</td><td>12,400.00</td><td>8%</td><td>992.00</td></tr>
<tr><td>SO-4427</td><td>Riverbend Sports</td><td>Oct 11</td><td>8,750.00</td><td>8%</td><td>700.00</td></tr>
<tr><td>SO-4452</td><td>Canyon Camp Supply</td><td>Oct 19</td><td>15,300.00</td><td>8%</td><td>1,224.00</td></tr>
<tr><td>SO-4460</td><td>Alpine Edge Co.</td><td>Oct 28</td><td>6,050.00</td><td>8%</td><td>484.00</td></tr>
<tr><td colspan="5"><strong>Gross commission</strong> (net sales $42,500.00)</td><td><strong>3,400.00</strong></td></tr>
<tr><td>SO-4318</td><td>Riverbend Sports</td><td>Return Oct 15</td><td>-1,200.00</td><td>8%</td><td>-96.00</td></tr>
<tr><td colspan="5">Trade show booth share, Denver Outdoor Expo (approved Sept 12)</td><td>250.00</td></tr>
<tr><td colspan="5"><strong>Total due</strong></td><td><strong>3,554.00</strong></td></tr>
</tbody></table>
<p>Check: 992 + 700 + 1,224 + 484 = 3,400; minus the 96 clawback = 3,304; plus 250 approved expense = 3,554 dollars. You can build this layout in minutes with the <a href="/invoice-generator">free invoice generator</a>, using one line per order.</p>

<h2>How to calculate sales commission</h2>
<p>The formula is simple: <strong>commission = commissionable sales x commission rate</strong>. The details that cause disputes are what counts as "commissionable" (gross or net of discounts, returns, shipping and tax) and when the sale counts (order, shipment or payment). Common structures:</p>
<table><thead><tr><th>Structure</th><th>How it works</th><th>Example</th></tr></thead><tbody>
<tr><td>Flat rate</td><td>One percentage on all sales</td><td>8% of $42,500 = $3,400</td></tr>
<tr><td>Tiered</td><td>Higher rate above a threshold</td><td>5% up to $20,000, 8% above</td></tr>
<tr><td>Gross margin</td><td>Percentage of profit, not revenue</td><td>20% of $10,000 margin = $2,000</td></tr>
<tr><td>Flat fee per sale</td><td>Fixed amount per unit or deal</td><td>$150 per signed contract</td></tr>
<tr><td>Split</td><td>Commission shared between reps</td><td>60/40 split of a $1,000 commission</td></tr>
<tr><td>Residual</td><td>Ongoing percentage of recurring revenue</td><td>10% of monthly subscription for 12 months</td></tr>
</tbody></table>

<h3>Worked example: tiered commission</h3>
<p>A rep earns 5% on the first $20,000 of monthly sales and 8% on everything above. October sales are $42,500.</p>
<ul>
<li>First tier: $20,000 x 5% = $1,000</li>
<li>Second tier: ($42,500 - $20,000) x 8% = $22,500 x 8% = $1,800</li>
<li>Total commission: $2,800</li>
</ul>
<p>Make sure your agreement says whether tiers reset monthly, quarterly or annually, and whether the higher rate applies only above the threshold (as above) or retroactively to all sales once the threshold is reached. Retroactive tiers would pay $42,500 x 8% = $3,400 in this example, a $600 difference.</p>

<h3>Worked example: split commission</h3>
<p>Two reps close a $30,000 deal at 6% with a 60/40 split. Total commission is $1,800; the lead rep invoices $1,080 and the second rep invoices $720, each referencing the same order number and the split.</p>

<h2>How to create a commission invoice: step by step</h2>
<ol>
<li><strong>Re-read your agreement:</strong> rate, commissionable base, trigger date, payment terms and clawback window.</li>
<li><strong>Collect the period's sales data:</strong> from the principal's portal, CRM or commission statement.</li>
<li><strong>List each qualifying sale</strong> with order number, customer, date, net amount, rate and commission.</li>
<li><strong>Apply adjustments:</strong> returns, cancellations, draws, bonuses or approved expenses.</li>
<li><strong>Add tax only if it applies</strong> (VAT or a state that taxes the service). Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help with the math.</li>
<li><strong>Give the invoice a unique number</strong> such as C-2026-10, using the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Set clear payment terms.</strong> Net 15 or Net 30 is typical; see our guide to <a href="/blog/net-30-payment-terms">Net 30 payment terms</a>.</li>
<li><strong>Attach the sales report</strong> and send the PDF to the accounts payable contact.</li>
</ol>

<h2>Commission invoice vs commission statement</h2>
<p>A <strong>commission statement</strong> is usually produced by the principal and shows what it believes you earned. A <strong>commission invoice</strong> is produced by you and requests payment. Many companies send the statement first and pay against your invoice once the numbers match. If they differ, resolve the difference before invoicing, because a disputed invoice tends to sit unpaid. The general difference between the two document types is covered in <a href="/blog/invoice-vs-statement">invoice vs statement</a>.</p>

<h2>How to protect your commission before you invoice</h2>
<p>Most commission disputes start long before the invoice. A few terms in your representation agreement prevent most of them:</p>
<ol>
<li><strong>Define the commissionable base.</strong> Spell out whether commission is on gross or net sales, and what is deducted: discounts, returns, freight, taxes, bad debts.</li>
<li><strong>Define when commission is earned.</strong> On order acceptance, shipment, or customer payment. Payment-based triggers are common for reps but delay income, so negotiate payment within a fixed number of days after the trigger.</li>
<li><strong>Cover house accounts and territory.</strong> Which existing customers are excluded, and whether you earn commission on orders from your territory that you did not personally close.</li>
<li><strong>Limit clawbacks.</strong> Set a window (for example 90 days) after which commission is final, and say whether clawbacks apply to customer non-payment or only to returns.</li>
<li><strong>Get statements.</strong> Ask for a monthly commission statement or portal access, so you can check orders against your own records.</li>
<li><strong>Post-termination commission.</strong> Agree how long you earn commission on orders you generated after the agreement ends. Several US states have sales representative commission laws that set deadlines for paying commission after termination, so check your state.</li>
</ol>
<h3>Worked example: commission earned on payment</h3>
<p>Your agreement pays 7% on customer payments, due by the 15th of the following month. A $20,000 order ships in September, the customer pays $12,000 in October and $8,000 in November. You invoice $840 (7% of $12,000) on November 1 for October, and $560 (7% of $8,000) on December 1 for November. Showing the partial payments line by line keeps the total of $1,400 easy to reconcile with the principal's records.</p>
<p>Keep a simple tracker of every order, its status and the commission you expect; our <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> works well for this.</p>

<h2>Tax considerations for commission income</h2>
<ul>
<li><strong>United States:</strong> independent reps are self-employed. Businesses that pay you commissions report them on Form 1099-NEC once payments reach the threshold, which rises from $600 to $2,000 for payments made in 2026 (see <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec" rel="noopener" target="_blank">IRS Form 1099-NEC</a>). You pay income tax and <a href="/blog/self-employment-tax">self-employment tax</a> on net commission.</li>
<li><strong>UK and EU:</strong> commission is generally a VAT-able service once you are VAT registered. EU commercial agents also have protections under the Commercial Agents Directive, such as rights to statements and compensation on termination.</li>
<li><strong>Everywhere:</strong> keep each invoice and the supporting sales report, as they prove how your income was calculated.</li>
</ul>
<p><em>This is general information, not tax advice.</em></p>

<h2>Common mistakes on sales commission invoices</h2>
<ul>
<li><strong>Calculating on gross instead of net sales</strong> when the agreement says net (after discounts, returns and freight).</li>
<li><strong>Invoicing before the trigger</strong>, for example on order when commission is earned on customer payment.</li>
<li><strong>Lumping all sales into one line</strong>, which makes the invoice impossible to verify.</li>
<li><strong>Hiding clawbacks</strong> or netting them silently, which creates reconciliation problems later.</li>
<li><strong>Adding unapproved expenses.</strong> Only bill what the agreement allows.</li>
<li><strong>No agreement reference.</strong> AP teams often need the contract to approve payment.</li>
<li><strong>Not following up.</strong> Commissions are easy for a principal to deprioritize; send a polite reminder the day after the due date.</li>
</ul>

<h2>Sales commission invoice checklist</h2>
<ul>
<li>Title "Commission Invoice", unique number, issue and due dates.</li>
<li>Commission period and agreement reference.</li>
<li>One line per sale: order, customer, date, amount, rate, commission.</li>
<li>Adjustments shown as separate lines.</li>
<li>Totals and any applicable tax.</li>
<li>Payment method and terms.</li>
<li>Sales report attached.</li>
</ul>
<p>For other contractor billing formats, see the <a href="/blog/freelance-invoice-template">freelance invoice template</a> and our <a href="/blog/service-invoice-template">service invoice template</a>, or learn how companies <a href="/blog/how-to-pay-contractors">pay contractors</a> so you know what their AP team expects.</p>

<p>A clear sales commission invoice template shows exactly how each dollar of commission was earned, applies adjustments openly and references your agreement, which is what gets reps paid on time. Our free invoice generator needs no sign-up, builds your commission invoice in the browser and downloads it as a PDF. Open the <a href="/invoice-generator">free invoice generator</a> to create yours.</p>
`,
  },
];
