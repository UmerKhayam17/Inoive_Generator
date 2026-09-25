/** Unique long-form HTML guides keyed by template slug. Authored in-repo for template detail pages. */
export const TEMPLATE_GUIDES: Record<string, string> = {
  modern: `
<h2>Why freelancers choose Modern</h2>
<p>Modern is the default recommendation for freelancers, consultants and solo operators who need a document that looks current without looking flashy. A bold coloured header bar carries your business name and invoice number; the body stays quiet so line items and totals dominate. Clients recognise it as a professional request for payment, not a branded flyer.</p>
<p>The layout works equally well on a laptop screen and when printed in black and white — important when your client still files paper. Whitespace is generous, which reduces the “wall of text” feel that causes accounts payable to skim and miss your due date.</p>
<h2>Layout details</h2>
<ul>
<li>Full-width accent header with clear hierarchy for title, number and dates.</li>
<li>Two-column bill-from / bill-to block that fits legal names and addresses.</li>
<li>Crisp item table with quantity, rate and line totals aligned for quick scanning.</li>
<li>Totals panel that keeps tax, discount and amount due visually separated.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Use Modern for milestone invoices (“Discovery complete — 40%”), hourly consulting retainers, and fixed-price project phases. Write line descriptions that a stranger in AP can approve: include deliverable names, date ranges and purchase-order references when the client uses them.</p>
<h2>Filling tips</h2>
<p>Upload a simple logo (transparent PNG works best). Keep your accent colour close to your brand, but avoid neon hues that wash out in print. Always set a due date or Net terms — “due on receipt” is valid but slower for many B2B buyers. Add bank details or a payment link in the notes field so the PDF is self-contained.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Corporate</strong> if you bill large enterprises that expect formal two-column reference blocks. Choose <strong>Minimal</strong> if you sell design or photography and want stationery-grade restraint. Choose <strong>Agency</strong> when multi-line project descriptions need a side rail for metadata.</p>
<p><a href="/invoice-generator?template=modern">Use the Modern template in the generator</a> — preview updates live, then download a matching PDF.</p>
`,
  minimal: `
<h2>Designed for typography-led businesses</h2>
<p>Minimal strips colour blocks and decorative boxes so type and rules do the work. Designers, writers, photographers and studios that already send carefully typeset proposals often want invoices that feel like the rest of their stationery — quiet, precise and easy to archive.</p>
<p>Because there is no loud header colour, the document relies on spacing and weight. That makes it ideal when your brand is black-and-white or when clients print invoices on shared office printers that muddy heavy fills.</p>
<h2>Layout details</h2>
<ul>
<li>Hairline rules and typographic hierarchy instead of colour panels.</li>
<li>Open margins that keep long project titles readable.</li>
<li>A compact totals ladder that still highlights amount due.</li>
<li>Excellent black-and-white print fidelity.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Bill art direction retainers, photo shoot packages, copywriting rounds, or usage licences. Separate creative fees from expenses (travel, props, stock) as distinct lines so the client can approve each category.</p>
<h2>Filling tips</h2>
<p>Use a monochrome or single-colour logo. Keep descriptions short but specific (“Brand guidelines v2 — 3 revisions included”). If you charge late fees, state them once in notes rather than decorating the header. Pair Minimal with clear payment instructions; the quiet look still needs unambiguous next steps.</p>
<h2>When to pick something else</h2>
<p>Pick <strong>Creative</strong> or <strong>Bold</strong> when you want the PDF to stand out in a crowded inbox. Pick <strong>Classic</strong> for wholesale or accounting clients who prefer ruled traditional forms. Pick <strong>Modern</strong> if you want a coloured header without losing clarity.</p>
<p><a href="/invoice-generator?template=minimal">Use the Minimal template in the generator</a> and export a print-ready PDF in one click.</p>
`,
  corporate: `
<h2>Built for accounts-payable workflows</h2>
<p>Corporate is for agencies, suppliers and contractors who bill enterprises. AP teams scan for purchase-order numbers, cost centres and matching totals. This template puts reference fields and a bordered totals panel where those reviewers expect them, reducing “please resubmit” emails.</p>
<p>The split header feels formal without looking outdated. Two-column billing keeps your legal entity and the client’s legal entity equally visible — critical when the person who hired you is not the entity that pays.</p>
<h2>Layout details</h2>
<ul>
<li>Split header with structured metadata space.</li>
<li>Clear labels for invoice number, PO, issue date and due date.</li>
<li>Bordered totals panel that survives print and PDF annotation tools.</li>
<li>Conservative colour that still brands the document lightly.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Use Corporate for statement-style project invoices, annual MSA drawdowns, hardware supply, and contractor timesheets that must attach to a PO. Itemise by SOW line or cost code when the client requires it.</p>
<h2>Filling tips</h2>
<p>Always include the PO or reference the client asked for — leave it blank only if they confirmed none exists. Match legal names to contracts, not nicknames. If tax is reverse-charged or zero-rated, say so in notes so AP does not “fix” your tax line.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Slate</strong> for law firms and advisory work with a quieter professional tone. Choose <strong>Agency</strong> when long creative scopes need a sidebar. Choose <strong>Startup</strong> if you bill indie product teams that expect a friendlier SaaS look.</p>
<p><a href="/invoice-generator?template=corporate">Use the Corporate template in the generator</a> for an AP-friendly PDF.</p>
`,
  elegant: `
<h2>When the invoice is part of the experience</h2>
<p>Elegant uses serif headings, airy spacing and hairline rules for luxury, boutique and high-touch services. Interior designers, event planners and premium studios often send mood boards and proposals that feel curated — the invoice should not break that spell with a harsh corporate form.</p>
<p>Clients still need clear totals and due dates. Elegant keeps those numbers prominent while the overall page feels refined rather than transactional.</p>
<h2>Layout details</h2>
<ul>
<li>Serif display type for titles and section labels.</li>
<li>Stacked header with breathing room above the item table.</li>
<li>Warm surface tint that prints softly on cream paper and cleanly on white.</li>
<li>Totals that remain easy to find despite the open layout.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Deposit invoices for events, final balances after installation, design retainers, and staged payments for custom furniture or styling packages. Separate design fees from third-party costs (florals, rentals, contractors) so the client can see what you mark up versus pass through.</p>
<h2>Filling tips</h2>
<p>Use a high-resolution logo; low-res marks look worse on a refined layout. Avoid stuffing the notes field with legalese — put payment terms once, politely. If you require a non-refundable deposit, state that clearly next to the amount due.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Sunset</strong> for hospitality energy. Choose <strong>Lavender</strong> for beauty and coaching brands. Choose <strong>Corporate</strong> when billing a large procurement team that prefers formal structure over atmosphere.</p>
<p><a href="/invoice-generator?template=elegant">Use the Elegant template in the generator</a> to match a premium client experience.</p>
`,
  blue: `
<h2>The reliable small-business staple</h2>
<p>Blue is the familiar “business invoice” look: a strong blue header and alternating table rows that many SMEs and trades already recognise. Familiarity reduces friction with new customers who have never worked with you before and simply want to pay the right amount on time.</p>
<p>It is a strong default for retail top-ups, service calls, installation jobs and local B2B supply where trust comes from clarity, not from creative design.</p>
<h2>Layout details</h2>
<ul>
<li>Classic coloured header bar with high contrast title.</li>
<li>Alternating row treatment that helps long item lists stay scannable.</li>
<li>Straightforward totals block suitable for counter or email PDF use.</li>
<li>Prints cleanly even on older office printers.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Job sheets turned into invoices, parts-plus-labour bills, delivery charges, and recurring monthly service fees. Keep labour and materials on separate lines when customers compare quotes.</p>
<h2>Filling tips</h2>
<p>Put the job address or site reference in the description or notes. If you collected a deposit on-site, show it as a negative line or credit so the balance due is obvious. Include VAT/sales tax rates explicitly for retail customers who reclaim tax.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Classic</strong> for ruled, traditional wholesale forms. Choose <strong>Emerald</strong> for clinics and wellness brands. Choose <strong>Modern</strong> if you want a slightly more contemporary freelance look.</p>
<p><a href="/invoice-generator?template=blue">Use the Blue template in the generator</a> for everyday SME billing.</p>
`,
  dark: `
<h2>A tech-forward first impression</h2>
<p>Dark opens with a deep charcoal header and light type — the kind of contrast product teams and tech studios already use in dashboards and pitch decks. The body returns to a clean light surface so printing remains practical; you get a modern edge without a full dark-mode PDF that wastes toner.</p>
<p>Use it when your brand is digital-native and you want invoices to feel like part of the product company, not like a generic Word template.</p>
<h2>Layout details</h2>
<ul>
<li>High-contrast dark header band with light typography.</li>
<li>Clean light body for tables and totals.</li>
<li>Strong visual break between identity and numbers.</li>
<li>Still readable when printed in greyscale.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Sprint invoices, implementation fees, API or usage true-ups, and design-system retainers. Break work by epic or milestone so engineering stakeholders can map spend to delivery.</p>
<h2>Filling tips</h2>
<p>Keep the logo light or monochrome so it survives the dark header. Put environment or account IDs in notes if the client reconciles invoices to cloud accounts. For subscriptions, state the period covered on every line (“Feb 2026 platform fee”).</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Mono</strong> for stark engineering documents with almost no colour. Choose <strong>Startup</strong> for a friendlier SaaS gradient feel. Choose <strong>Corporate</strong> when enterprise AP needs formal reference blocks more than brand mood.</p>
<p><a href="/invoice-generator?template=dark">Use the Dark template in the generator</a> for tech-studio PDFs.</p>
`,
  startup: `
<h2>Friendly invoices for product companies</h2>
<p>Startup is for early-stage companies, indie makers and subscription tools that want the invoice to feel like the rest of the product: logo-forward, soft gradient band, approachable rather than legalistic. Investors and first customers still need correct totals — Startup simply presents them without stiff corporate styling.</p>
<h2>Layout details</h2>
<ul>
<li>Stacked, brand-forward header with space for a recognisable mark.</li>
<li>Soft accent band that reads well on screen.</li>
<li>Open item table for plan names and add-ons.</li>
<li>Totals that stay obvious for finance teammates joining later.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Monthly SaaS plans, onboarding packages, usage overages, and founding-customer discounts. List the plan name and seat count explicitly; “Pro plan” alone causes upgrade disputes.</p>
<h2>Filling tips</h2>
<p>Show the billing period on every recurring line. If you offer annual prepay with a discount, show list price and discount as separate lines for clean books. Add your support email in notes so customers do not reply-all to a no-reply mailbox.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Dark</strong> or <strong>Mono</strong> for a more technical look. Choose <strong>Corporate</strong> once you sell into enterprises with strict AP portals. Choose <strong>Ocean</strong> for multi-phase consulting sold alongside the product.</p>
<p><a href="/invoice-generator?template=startup">Use the Startup template in the generator</a> for product-shaped invoices.</p>
`,
  agency: `
<h2>Project billing with room to explain</h2>
<p>Agency puts metadata in a side rail so the main column stays wide for multi-line scopes — ideal for marketing agencies, dev shops and consultancies that invoice retainers, media, and production on the same PDF. Clients can read the story of the work without hunting past a cramped table.</p>
<h2>Layout details</h2>
<ul>
<li>Sidebar for invoice number, dates and key references.</li>
<li>Wide item table for long descriptions and phase names.</li>
<li>Accent colour that brands without overwhelming type.</li>
<li>Clear totals that survive long scopes.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Monthly retainers plus project overages, campaign launches, development sprints, and pass-through media with a management fee. Separate agency fee, media, and tools so finance can code expenses correctly.</p>
<h2>Filling tips</h2>
<p>Reference the SOW or campaign name in the first line. If hours exceeded a cap, show approved overage as its own line with the approval date in the description. Keep the sidebar fields complete — empty PO fields look unfinished to client finance teams.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Ocean</strong> for a teal consultant variant of the sidebar idea. Choose <strong>Creative</strong> when the invoice should feel expressive. Choose <strong>Corporate</strong> for enterprise procurement that prefers split headers over side rails.</p>
<p><a href="/invoice-generator?template=agency">Use the Agency template in the generator</a> for retainer and project PDFs.</p>
`,
  creative: `
<h2>Stand out without sacrificing clarity</h2>
<p>Creative uses colour-blocked headers and an expressive amount-due treatment for illustrators, videographers and brand designers. Your invoice often lands next to mood boards and cutdowns — a grey form can feel disconnected from the work you just delivered.</p>
<p>Colour is used structurally, not randomly: hierarchy still leads the eye from identity to lines to totals.</p>
<h2>Layout details</h2>
<ul>
<li>Split colour header that frames brand and invoice title.</li>
<li>Expressive emphasis on the amount due.</li>
<li>Readable item table for shoot days, revisions and licences.</li>
<li>Accent that can align with a portfolio brand colour.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Production day rates, revision packs, music or footage licences, and usage extensions. Always separate creative fee from expenses (travel, props, talent) to avoid tax and markup confusion.</p>
<h2>Filling tips</h2>
<p>Name the project and deliverable versions. If usage is limited by territory or time, put that in the line description or notes — those terms protect you later. Prefer a logo that works on a coloured field.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Minimal</strong> for ultra-quiet stationery. Choose <strong>Bold</strong> when you want a loud corner accent for sales-driven offers. Choose <strong>Elegant</strong> for luxury clients who prefer serif refinement over bright blocks.</p>
<p><a href="/invoice-generator?template=creative">Use the Creative template in the generator</a> and download a matching PDF.</p>
`,
  classic: `
<h2>Traditional forms for traditional buyers</h2>
<p>Classic is the ruled, centred, accounting-friendly invoice. Wholesalers, accountants and long-standing businesses often prefer this look because it resembles the paper forms their teams already know how to stamp, file and audit.</p>
<h2>Layout details</h2>
<ul>
<li>Full-width rules and a centred title.</li>
<li>Serif cues that read as formal stationery.</li>
<li>Compact totals ladder for quick ink-on-paper review.</li>
<li>Minimal colour so photocopies stay legible.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Trade credit invoices, bulk goods, professional bookkeeping fees, and annual retainers for established clients. Include SKU or stock codes in descriptions when warehouses pick against your PDF.</p>
<h2>Filling tips</h2>
<p>Number invoices sequentially without gaps if your auditor expects it. Show credit terms clearly (Net 30, early-pay discount). If you ship goods, note delivery note numbers so warehouse and finance can reconcile.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Blue</strong> for a slightly more modern SME look. Choose <strong>Corporate</strong> for enterprise AP portals. Choose <strong>Slate</strong> for professional services that want quiet structure without full traditional ruling.</p>
<p><a href="/invoice-generator?template=classic">Use the Classic template in the generator</a> for traditional PDF invoices.</p>
`,
  nordic: `
<h2>Calm layouts for craft-led studios</h2>
<p>Nordic pairs a thin colour band with quiet whitespace — a Scandinavian-clean approach for architects, product designers and wellness brands that sell craft and calm. The invoice should feel considered, not crowded.</p>
<h2>Layout details</h2>
<ul>
<li>Thin band header instead of a heavy colour block.</li>
<li>Airy spacing between sections.</li>
<li>Soft surface tint that stays printable.</li>
<li>Gentle hierarchy that still highlights amount due.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Design development stages, site visits, prototype batches, and package retainers for spatial or product work. Phase names (“Concept”, “Developed design”, “Construction support”) help clients map invoices to project plans.</p>
<h2>Filling tips</h2>
<p>Keep descriptions precise but uncluttered. Reference drawing or revision numbers. If reimbursables are billed at cost, label them clearly. Avoid packing the notes field; let whitespace do part of the brand work.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Elegant</strong> for warmer luxury serif styling. Choose <strong>Emerald</strong> for healthcare and coaching trust cues. Choose <strong>Agency</strong> when scopes are long and need a sidebar.</p>
<p><a href="/invoice-generator?template=nordic">Use the Nordic template in the generator</a> for calm, craft-led invoices.</p>
`,
  emerald: `
<h2>Trust-first invoices for care brands</h2>
<p>Emerald’s green header suits clinics, coaches and eco-conscious brands that need to feel trustworthy and modern. Patients and clients often pay from personal accounts; clarity and calm matter more than corporate formality.</p>
<h2>Layout details</h2>
<ul>
<li>Confident green header bar.</li>
<li>Clear item table for sessions, packages and products.</li>
<li>Readable totals for card or transfer payments.</li>
<li>Clean print output for reception desks.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Session packages, memberships, product add-ons, and programme deposits. Separate clinical or coaching fees from retail products when tax treatment differs.</p>
<h2>Filling tips</h2>
<p>Include appointment or programme dates in descriptions. If cancellation policies affect refunds, summarise them once in notes. For packages, show sessions purchased versus billed so balances stay transparent.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Lavender</strong> for softer beauty and education brands. Choose <strong>Blue</strong> for general SME familiarity. Choose <strong>Slate</strong> for clinical practices that prefer a more formal professional-services look.</p>
<p><a href="/invoice-generator?template=emerald">Use the Emerald template in the generator</a> for care-oriented PDFs.</p>
`,
  sunset: `
<h2>Warm invoices for hospitality</h2>
<p>Sunset brings warm stacked headers and inviting accents for restaurants, hotels and event hosts. Guests and venue clients expect hospitality touchpoints to feel welcoming — including the bill after a booking or catering job.</p>
<h2>Layout details</h2>
<ul>
<li>Warm stacked header with energetic accent.</li>
<li>Soft surface that still prints cleanly.</li>
<li>Clear lines for packages, covers and add-ons.</li>
<li>Totals that work for deposits and final balances.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Event deposits, final guest-count true-ups, room blocks, catering menus, and AV add-ons. Always show the event date and space name; AP at corporate clients needs that to approve venue spend.</p>
<h2>Filling tips</h2>
<p>Separate food, beverage, service charge and tax when local rules require it. If a deposit is non-refundable after a date, write that next to the deposit line. Attach or reference the BEO or banquet event order number in notes.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Elegant</strong> for luxury boutiques and planners. Choose <strong>Bold</strong> for promotional offers. Choose <strong>Corporate</strong> when invoicing large corporate travel departments.</p>
<p><a href="/invoice-generator?template=sunset">Use the Sunset template in the generator</a> for hospitality billing.</p>
`,
  slate: `
<h2>Quiet professionalism for serious work</h2>
<p>Slate is for law firms, accountants and advisors who need invoices that look formal and easy to scan. Colour stays restrained; structure does the talking. Clients expect discretion and precision — loud templates can feel out of place.</p>
<h2>Layout details</h2>
<ul>
<li>Split header with clear reference block.</li>
<li>Restrained slate accent.</li>
<li>Scannable lines for matter or engagement codes.</li>
<li>Formal totals suitable for trust and business accounts.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Matter-based legal fees, fixed advisory retainers, disbursements, and staged transaction fees. Put matter numbers on every invoice; clients with many engagements will otherwise misallocate payment.</p>
<h2>Filling tips</h2>
<p>Itemise timekeepers or work types if the engagement letter requires it. Show disbursements separately from fees. State payment instructions to the correct client account, especially when funds must not mix with operating accounts.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Corporate</strong> for broader enterprise supplier billing. Choose <strong>Classic</strong> for ruled traditional accounting forms. Choose <strong>Ocean</strong> for consulting projects with longer narrative scopes.</p>
<p><a href="/invoice-generator?template=slate">Use the Slate template in the generator</a> for professional-services PDFs.</p>
`,
  bold: `
<h2>Hard to miss in a busy inbox</h2>
<p>Bold uses a large colour corner behind the title so sales teams, agencies and course creators can make the PDF noticeable without turning it into a flyer. The body stays structured so finance can still approve quickly.</p>
<h2>Layout details</h2>
<ul>
<li>Corner accent framing the invoice title.</li>
<li>Strong accent colour for brand recall.</li>
<li>Standard item table and totals beneath the flourish.</li>
<li>Works for digital-first delivery where screen presence matters.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Course cohorts, sales enablement retainers, launch packages, and performance bonuses. Name the offer and cohort dates clearly to reduce “which invoice is this?” replies.</p>
<h2>Filling tips</h2>
<p>Do not let the accent replace missing fields — still set number, dates and tax. If you sell online, include the order ID in notes. For payment plans, invoice each instalment separately with the instalment number in the title or first line.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Creative</strong> for artistic colour blocks. Choose <strong>Startup</strong> for softer SaaS branding. Choose <strong>Minimal</strong> when the client expects understated stationery.</p>
<p><a href="/invoice-generator?template=bold">Use the Bold template in the generator</a> when visibility matters.</p>
`,
  lavender: `
<h2>Soft branding for personal services</h2>
<p>Lavender’s lilac wash suits coaches, beauty studios and educators who bill retainers and packages with a personal tone. The invoice should feel approachable while still collecting payment on time.</p>
<h2>Layout details</h2>
<ul>
<li>Stacked header with gentle purple accent.</li>
<li>Soft surface tint for on-screen warmth.</li>
<li>Clear package and session lines.</li>
<li>Friendly but unambiguous totals.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Coaching months, beauty memberships, workshop seats, and course access fees. Show what’s included (sessions, messaging, resources) so scope creep is easier to manage later.</p>
<h2>Filling tips</h2>
<p>State the service window (“1 Mar–31 Mar coaching”). If you offer gift vouchers or prepaid packages, note remaining value policies briefly. Keep payment links in notes for clients who pay by phone.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Emerald</strong> for clinical or eco trust cues. Choose <strong>Elegant</strong> for luxury bridal or high-end styling. Choose <strong>Blue</strong> for a more conventional small-business look.</p>
<p><a href="/invoice-generator?template=lavender">Use the Lavender template in the generator</a> for personal-service invoices.</p>
`,
  ocean: `
<h2>Sidebar clarity for multi-phase work</h2>
<p>Ocean keeps metadata in a teal side rail so freelancers, dev studios and consultants can write long phase descriptions without crowding dates and numbers. It is the consulting cousin of Agency — tuned for project narratives rather than campaign jargon.</p>
<h2>Layout details</h2>
<ul>
<li>Teal sidebar for number, dates and references.</li>
<li>Wide column for multi-phase descriptions.</li>
<li>Clean totals after long scopes.</li>
<li>Professional colour that still feels modern.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Discovery, build and handover phases; advisory days; hybrid fixed-plus-time invoices. Number phases to match your proposal so clients can compare quote versus invoice line by line.</p>
<h2>Filling tips</h2>
<p>Put the project codename in the sidebar-friendly fields and expand deliverables in lines. If change requests altered scope, add them as new lines with “CR-03” style labels rather than silently increasing an old line.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Agency</strong> for marketing retainers. Choose <strong>Modern</strong> for simpler freelance bills. Choose <strong>Slate</strong> for formal advisory firms.</p>
<p><a href="/invoice-generator?template=ocean">Use the Ocean template in the generator</a> for project-phase PDFs.</p>
`,
  mono: `
<h2>Precision without decoration</h2>
<p>Mono is stark black-and-white with a thin top band — built for developers, engineers and SaaS tools that want invoices to feel like technical documents. No decorative colour means maximum clarity in diffs, printouts and archived PDFs.</p>
<h2>Layout details</h2>
<ul>
<li>Thin band header and high-contrast ink.</li>
<li>No accent colour beyond near-black.</li>
<li>Dense-but-readable tables for SKUs and line items.</li>
<li>Excellent archival and photocopy behaviour.</li>
</ul>
<h2>Typical billing scenarios</h2>
<p>Licence fees, support contracts, professional services hours, and infrastructure pass-throughs. Include contract IDs and environment names so finance can map cost to systems.</p>
<h2>Filling tips</h2>
<p>Use monospace-friendly short codes in descriptions if that matches how you ticket work. Keep tax lines explicit. Avoid embedding screenshots; link to portals in notes instead.</p>
<h2>When to pick something else</h2>
<p>Choose <strong>Dark</strong> for a tech look with a stronger branded header. Choose <strong>Startup</strong> for friendlier product branding. Choose <strong>Corporate</strong> for enterprise AP requirements.</p>
<p><a href="/invoice-generator?template=mono">Use the Mono template in the generator</a> for precise, technical invoices.</p>
`,
};

export function getTemplateGuide(slug: string): string | undefined {
  return TEMPLATE_GUIDES[slug];
}
