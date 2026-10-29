import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_S: PostDraft[] = [
  {
    slug: "podcast-editing-invoice-template",
    title: "Podcast Editing Invoice Template (Free, With Example)",
    description:
      "Free podcast editing invoice template: bill per episode or per hour, add show notes and revisions, and see a worked example with real line items and totals.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "video-editing-invoice-template",
      "freelance-invoice-template",
      "voice-over-invoice-template",
    ],
    faqs: [
      {
        q: "Should I charge per episode or per hour for podcast editing?",
        a: "Per-episode pricing suits most shows because clients can budget each release and you are rewarded for working efficiently. Hourly billing is safer for new clients with messy audio, long multi-guest recordings or unclear scope. A common middle ground is a per-episode rate that covers a set length of raw audio, with an hourly or per-minute charge for anything beyond it, written into your agreement before the first file arrives.",
      },
      {
        q: "How do I invoice a podcast client who releases weekly?",
        a: "You can invoice each episode on delivery, or bundle a month of episodes into one invoice. Monthly invoicing cuts admin for both sides, and many editors move regular shows onto a monthly retainer billed in advance. List each episode by number and title on the invoice so the client can match it to their publishing calendar, and keep the same invoice number sequence across every client.",
      },
      {
        q: "Do I charge extra for show notes and transcripts?",
        a: "Usually, yes. Show notes, timestamps, episode titles, transcripts and audiograms are separate tasks with their own time cost, so list them as separate line items or bundle them into a clearly named package. If a package includes show notes, say so on the invoice. Clients compare editors on what is included, and itemizing shows them exactly what they are paying for.",
      },
      {
        q: "How many revisions should a podcast edit include?",
        a: "One round of revisions per episode is a common default, delivered as a single list of timestamped changes. Additional rounds can be billed at your hourly rate or a flat fee per round. Put the revision limit in your agreement and repeat it in the invoice notes so the client sees it every time. Fixes for your own mistakes should always be free.",
      },
      {
        q: "Can I ask for a deposit before editing a podcast?",
        a: "Yes. For new clients or launch packages, asking for 50% upfront before you start is common and reasonable. For an ongoing show, billing the month in advance does the same job. Send the deposit as its own invoice, then show it as a credit on the final invoice so the balance due is clear and nobody pays twice.",
      },
      {
        q: "What payment terms should a podcast editor use?",
        a: "Many freelance editors use due on receipt or net 7 for small per-episode invoices and net 14 or net 30 for agency or corporate clients. Shorter terms keep cash flowing when you edit several shows a week. Whatever you choose, state the due date as a calendar date on the invoice, not only the term, and note any late fee your contract allows.",
      },
      {
        q: "Do podcast editors need to collect sales tax?",
        a: "In the US, editing is generally treated as a service, and many states do not tax it, but rules vary by state and some states tax certain digital or production services. Check your own state's revenue department guidance. Outside the US, VAT or GST may apply once you pass a registration threshold. This is general information, not tax advice.",
      },
      {
        q: "What should I do if a podcast client pays late?",
        a: "Send a polite reminder a day or two after the due date with the invoice attached, then a firmer follow-up a week later. If the client is still silent, pause delivery of new episodes until the account is current, as long as your agreement allows it. Holding finished files until payment is a common and fair lever for per-episode work.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A podcast editing invoice template is a ready-made invoice for audio editors that lists each episode edited, the pricing basis (per episode, per hour or per finished minute), extras such as show notes, transcripts and revisions, and the total due with payment terms. It helps shows understand what they paid for and helps you get paid on time.</p>

<p>Podcast editing looks simple from the outside: a client sends raw audio, you send back a clean episode. In practice, one episode can involve noise reduction, removing filler words, leveling multiple guests, adding intro and outro music, writing show notes and handling a round of changes. If your invoice only says "Podcast editing, $150," you invite questions and scope creep. This guide shows what a good podcast editing invoice includes, how to price the common services, a full worked example and the mistakes that slow payment.</p>

<h2>What is a podcast editing invoice?</h2>
<p>A podcast editing invoice is a bill from an audio editor or production service to a podcast host, brand or agency. Like any <a href="/blog/freelance-invoice-template">freelance invoice template</a>, it is a request for payment that also serves as a record for both parties' bookkeeping. What makes it specific to podcasting is the detail: episode numbers, raw and finished runtime, the editing level and any add-ons.</p>
<p>Podcast editors typically bill in one of three ways:</p>
<ul>
<li><strong>Per episode:</strong> a flat fee per finished episode, often tied to a maximum raw audio length.</li>
<li><strong>Per hour:</strong> billed on time spent, common for messy audio or one-off restoration jobs.</li>
<li><strong>Monthly package:</strong> a set number of episodes per month for a fixed fee, usually invoiced in advance as a <a href="/blog/retainer-invoice">retainer invoice</a>.</li>
</ul>

<h2>What should a podcast editing invoice template include?</h2>
<p>Every invoice needs the basics covered in our guide on <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>. For podcast work, add the fields that answer the client's likely questions before they ask.</p>
<table><thead><tr><th>Field</th><th>What to enter</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Your details</td><td>Name or business name, email, address, tax ID if registered</td><td>Identifies who is billing and who gets paid</td></tr>
<tr><td>Client details</td><td>Show name, host or company name, billing contact</td><td>Agencies and networks often run several shows</td></tr>
<tr><td>Invoice number and date</td><td>Unique sequential number, issue date</td><td>Needed for tracking and tax records</td></tr>
<tr><td>Episode reference</td><td>Episode number, title, guest name</td><td>Lets the client match the bill to their calendar</td></tr>
<tr><td>Raw and finished length</td><td>For example 74 min raw, 52 min finished</td><td>Justifies overage charges for long recordings</td></tr>
<tr><td>Service level</td><td>Basic cleanup, standard edit, full production</td><td>Clarifies what the rate covered</td></tr>
<tr><td>Add-ons</td><td>Show notes, transcript, audiogram, chapter markers</td><td>Itemized extras reduce disputes</td></tr>
<tr><td>Revisions</td><td>Included rounds and any extra rounds billed</td><td>Protects you from endless changes</td></tr>
<tr><td>Payment terms</td><td>Due date, accepted methods, late fee policy</td><td>Sets clear expectations</td></tr>
</tbody></table>
<p>Use a consistent numbering format such as PE-2026-041 so you never repeat a number. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set one up.</p>

<h2>How much do podcast editors charge?</h2>
<p>There is no official rate table for podcast editing, and prices vary widely by experience, audio quality, turnaround and how much production is involved. The ranges below are <strong>illustrative only</strong>, based on how freelance editors commonly structure packages, not a survey. Use them to think about structure, then set your own numbers using our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>
<table><thead><tr><th>Service</th><th>Typical pricing basis</th><th>Illustrative range (USD)</th></tr></thead><tbody>
<tr><td>Basic cleanup (noise, levels, cuts)</td><td>Per episode up to 60 min raw</td><td>$50 to $150</td></tr>
<tr><td>Standard edit (plus filler removal, music)</td><td>Per episode</td><td>$100 to $300</td></tr>
<tr><td>Full production (story edit, sound design)</td><td>Per episode or per finished minute</td><td>$300 and up</td></tr>
<tr><td>Hourly editing</td><td>Per hour</td><td>$35 to $100+</td></tr>
<tr><td>Show notes and timestamps</td><td>Per episode</td><td>$25 to $75</td></tr>
<tr><td>Extra raw audio beyond package limit</td><td>Per 15 or 30 min block</td><td>Set in your agreement</td></tr>
</tbody></table>
<p>If you also edit video podcasts, compare your pricing with our <a href="/blog/video-editing-rates">video editing rates guide</a>, since video versions take far longer than audio-only edits.</p>

<h2>Podcast editing invoice example (worked numbers)</h2>
<p>Here is a realistic monthly invoice for a weekly interview show. The editor charges $140 per standard episode for up to 60 minutes of raw audio, $20 per extra 15 minutes, $40 for show notes, and bills one extra revision round at $45 per hour.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Ep. 88 "Pricing Your First Product", standard edit (58 min raw)</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Ep. 89 "Hiring Contractors", standard edit (71 min raw)</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Extra raw audio, Ep. 89 (15 min block)</td><td>1</td><td>$20.00</td><td>$20.00</td></tr>
<tr><td>Ep. 90 "Cash Flow Basics", standard edit (55 min raw)</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Ep. 91 "Q and A Special", standard edit (60 min raw)</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Show notes with timestamps, Ep. 88 to 91</td><td>4</td><td>$40.00</td><td>$160.00</td></tr>
<tr><td>Second revision round, Ep. 90 (hours)</td><td>1.5</td><td>$45.00</td><td>$67.50</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$807.50</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 14, 2026</strong></td><td><strong>$807.50</strong></td></tr>
</tbody></table>
<p>The math: four episodes at $140 is $560, plus one $20 overage, $160 of show notes and $67.50 for the extra revision (1.5 hours at $45) gives $807.50. Sales tax is zero here on the assumption that the editor's state does not tax this service; check your own state.</p>
<p>Notice that each episode is named, the overage is tied to a specific episode, and the extra revision is shown separately. A client who reads this invoice knows exactly why it is not $560.</p>

<h2>How to create a podcast editing invoice in 6 steps</h2>
<ol>
<li><strong>Confirm the scope in writing first.</strong> Agree on the rate, the raw audio limit, included revisions and turnaround before you edit. A short <a href="/blog/statement-of-work-template">statement of work</a> or email is enough.</li>
<li><strong>Track each episode as you go.</strong> Log the episode number, raw length, delivery date and any extra work in a spreadsheet or <a href="/blog/timesheet-template">timesheet</a>.</li>
<li><strong>Open the <a href="/invoice-generator">free invoice generator</a></strong> and add your details, logo and the client's billing contact.</li>
<li><strong>Add one line per episode</strong>, then separate lines for overages, show notes, transcripts and extra revisions.</li>
<li><strong>Set terms and notes.</strong> Add a calendar due date, payment methods and a one-line reminder of your revision policy.</li>
<li><strong>Download the PDF and send it</strong> with a short email listing the episodes covered and the due date.</li>
</ol>

<h2>Per-episode, hourly or retainer: which billing model fits?</h2>
<p>The billing model changes how your invoice looks and how predictable your income is. A quick comparison:</p>
<table><thead><tr><th>Model</th><th>Best for</th><th>Invoice timing</th><th>Main risk</th></tr></thead><tbody>
<tr><td>Per episode</td><td>Regular shows with consistent audio</td><td>On delivery or monthly</td><td>Long or messy recordings eat your margin</td></tr>
<tr><td>Hourly</td><td>Restoration, one-off or unclear jobs</td><td>Weekly or on completion</td><td>Client anxiety about open-ended cost</td></tr>
<tr><td>Monthly retainer</td><td>Weekly shows and agencies</td><td>In advance, start of month</td><td>Unused episodes and rollover disputes</td></tr>
</tbody></table>
<p>For a deeper look at the trade-off, see our comparison of <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a> billing. Many editors start new clients hourly for two or three episodes, then switch to a per-episode rate once they know how long the show takes.</p>

<h3>How to handle a launch package</h3>
<p>A new show often needs a trailer, three to five launch episodes, intro music licensing and artwork coordination. Treat this as a project: take a deposit, bill the balance on delivery, and keep music licensing fees as a separate pass-through line so the client sees what went to the music library. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> shows how to credit the upfront payment on the final bill.</p>

<h2>Common podcast editing invoice mistakes</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Editing services" tells the client nothing. Name the episode and the service level.</li>
<li><strong>No raw audio limit.</strong> Without a cap, a 2-hour unplanned recording costs you double the time for the same fee.</li>
<li><strong>Unlimited revisions by default.</strong> State the included rounds and bill extras, or one picky guest can take over your week.</li>
<li><strong>Bundling pass-through costs.</strong> Music licenses, hosting fees or transcription software should be separate lines so the client can see them.</li>
<li><strong>Relative due dates only.</strong> "Net 14" is easy to forget; write the actual date.</li>
<li><strong>Sending files before a first payment from a new client.</strong> Watermarked previews or a deposit protect you until trust is built.</li>
<li><strong>Not following up.</strong> If an invoice is late, use a polite script from our guide on <a href="/blog/how-to-ask-for-payment">how to ask for payment</a>.</li>
</ul>

<h2>Taxes and records for podcast editors</h2>
<p>Most podcast editors work as independent contractors. In the US, a business client who pays you $2,000 or more in a year for services may issue a Form 1099-NEC for payments made in 2026 onward (the threshold was $600 for 2025 and earlier), and will usually ask for a Form W-9 first. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> covers the details, and the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center">IRS Self-Employed Individuals Tax Center</a> explains self-employment tax. You owe tax on all income whether or not a 1099 arrives, so keep a copy of every invoice. This is general information, not tax advice.</p>

<h2>Podcast editing invoice checklist</h2>
<ul>
<li>Unique invoice number and issue date</li>
<li>Show name and billing contact</li>
<li>Each episode listed by number and title</li>
<li>Pricing basis stated (per episode, per hour, package)</li>
<li>Overage, show notes and extra revisions as separate lines</li>
<li>Deposits or retainer payments credited</li>
<li>Calendar due date and payment methods</li>
<li>Late fee wording if your agreement allows it</li>
</ul>

<p>A clear podcast editing invoice template saves you from awkward conversations and gets shows paying on time. Build yours with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and creates a PDF right in your browser that you can download and send in a couple of minutes.</p>
`,
  },
  {
    slug: "voice-over-invoice-template",
    title: "Voice Over Invoice Template: Session Fees and Usage",
    description:
      "Voice over invoice template for session fees, usage and licensing, and buyouts. See what to include, a worked example with totals and mistakes to avoid.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["voice-over-rates", "podcast-editing-invoice-template", "musician-invoice-template"],
    faqs: [
      {
        q: "What is the difference between a session fee and a usage fee?",
        a: "A session fee pays for your time and performance in recording the script. A usage fee pays for the right to use that recording in specific media, regions and time periods, such as a regional radio campaign for 13 weeks. Many non-broadcast jobs bundle both into one rate, but broadcast and paid advertising work usually separates them so usage can be renewed or expanded later.",
      },
      {
        q: "What does a buyout mean in voice over work?",
        a: "A buyout is a one-time payment that grants the client broad usage of a recording, often in perpetuity or across all media, so no renewal fees are due later. Because you give up future income from that recording, buyouts are priced higher than limited-term usage. Always state exactly what the buyout covers on the invoice, because 'buyout' can mean different things to different clients.",
      },
      {
        q: "Should a voice actor charge for retakes?",
        a: "Retakes caused by your own errors, such as mispronunciations or audio problems, are normally free. Changes caused by the client, such as script rewrites after approval or a new direction, are usually billed as pickups at a minimum fee or a portion of the session rate. Write your pickup policy into your quote and repeat it in the invoice notes.",
      },
      {
        q: "How do I invoice for a usage renewal?",
        a: "Create a new invoice referencing the original job, recording date and invoice number. Describe the renewed usage clearly: media, region, start and end dates. Renewals are usually billed before the new period starts. Tracking expiry dates in a spreadsheet makes it easy to remind clients ahead of time instead of discovering an expired ad still running.",
      },
      {
        q: "Do union voice actors use the same invoice?",
        a: "Union work under a SAG-AFTRA or Equity contract is often paid through the producer or a payroll company using union rates, with pension and health contributions handled separately, so you may not invoice the way a non-union freelancer does. Follow the paperwork your union contract and the signatory producer require. The invoice template here is designed for non-union and freelance work.",
      },
      {
        q: "Can I invoice for studio time and editing?",
        a: "Yes. If you record in a rented studio or provide directed sessions over a remote connection service, you can bill studio time and any connection fees as separate lines. Editing, file splitting and naming hundreds of e-learning or phone system files is also real work and is often charged per hour or per file. Agree on these extras in the quote.",
      },
      {
        q: "When should a voice actor send the invoice?",
        a: "Most voice actors invoice on delivery of the final files, or after the session for directed work. For larger projects such as audiobooks or long e-learning courses, a deposit upfront and the balance on delivery is common. Sending promptly matters, because many agencies and corporate clients only start their payment clock when the invoice reaches accounts payable.",
      },
      {
        q: "What payment terms do voice over clients expect?",
        a: "Small businesses and direct clients often pay within 7 to 14 days, while production companies and agencies commonly use net 30, and some large brands push for net 60. Agree on terms in the quote, put the exact due date on the invoice, and confirm whether the client needs a purchase order number before they can pay.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A voice over invoice template is an invoice built for voice actors that separates the session fee (recording time and performance) from usage or licensing fees (where, how long and in which media the recording can be used), lists any buyout, pickups, studio time and editing, and states the total and payment terms. Clear usage terms protect your future income.</p>

<p>Voice over pricing is different from most freelance work because the same 30 seconds of audio can be worth $250 for an internal training video or many times more for a national TV campaign. The difference is usage. Your invoice should make it obvious what the client bought and for how long, so renewals and expansions are easy to bill later. This guide explains the fields, the main pricing structures, a full example invoice and the errors that cost voice talent money.</p>

<h2>What is a voice over invoice?</h2>
<p>A voice over invoice is a payment request from a voice actor or voice production service to a client such as an ad agency, production company, e-learning developer or small business. It works like any <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>, but it also records the license you granted. That second job is why vague invoices are risky: if the invoice and quote do not state the usage, it is harder to prove a client went beyond what they paid for.</p>

<h2>Session fees, usage and buyouts explained</h2>
<p>Most voice over jobs are priced using some mix of three building blocks.</p>
<table><thead><tr><th>Term</th><th>What it pays for</th><th>Common examples</th></tr></thead><tbody>
<tr><td>Session fee</td><td>Your time and performance in recording, often with a minimum</td><td>One-hour directed session, per finished minute for e-learning</td></tr>
<tr><td>Usage or license fee</td><td>Right to use the recording in specific media, regions and time periods</td><td>Regional radio for 13 weeks, online paid ads for 1 year</td></tr>
<tr><td>Buyout</td><td>One payment for broad or unlimited usage, often in perpetuity</td><td>Corporate explainer used on all channels indefinitely</td></tr>
<tr><td>Pickups</td><td>Short re-records requested by the client after approval</td><td>Updated price in a radio spot</td></tr>
<tr><td>Studio and connection fees</td><td>Studio rental or remote session connection services</td><td>Live-directed session over a remote patch</td></tr>
</tbody></table>
<p>Non-broadcast work (corporate narration, e-learning, explainer videos for a company website) is often quoted as an all-in fee. Broadcast and paid advertising work usually splits session and usage, because usage gets renewed. Industry rate guides such as the Global Voice Acting Academy (GVAA) rate guide are widely used as a reference; for a full breakdown, see our guide to <a href="/blog/voice-over-rates">voice over rates</a>.</p>

<h2>What should a voice over invoice template include?</h2>
<ul>
<li><strong>Your details:</strong> name or business name, contact info, tax ID if registered.</li>
<li><strong>Client details:</strong> company, contact, and the end client or brand if you were hired by an agency.</li>
<li><strong>Invoice number, issue date and due date.</strong></li>
<li><strong>Job reference:</strong> project name, script title, PO number, recording date.</li>
<li><strong>Session line:</strong> hours or finished minutes, rate, amount.</li>
<li><strong>Usage line:</strong> media (radio, TV, online paid, internal), region, term with start and end dates.</li>
<li><strong>Extras:</strong> pickups, studio time, editing, file delivery formats, rush delivery.</li>
<li><strong>License statement:</strong> one or two sentences in the notes that summarize what usage is granted and that further use requires a new license.</li>
<li><strong>Payment terms and methods</strong>, plus any late fee your agreement allows.</li>
</ul>
<p>If you are not sure how to phrase the license note, our collection of <a href="/blog/invoice-notes-examples">invoice notes examples</a> has ready-made wording you can adapt.</p>

<h2>Voice over invoice example with real numbers</h2>
<p>A freelance voice actor records a 30-second online ad and a 60-second website explainer for a regional furniture brand through a small agency. The prices below are illustrative, not a rate recommendation.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Session fee, 30-sec online ad "Fall Sale", recorded Oct 20, 2026 (1-hr session minimum)</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Usage: paid online and social ads, US only, Nov 1, 2026 to Jan 31, 2027 (13 weeks)</td><td>1</td><td>$500.00</td><td>$500.00</td></tr>
<tr><td>Website explainer, 60 sec, non-broadcast, all-in (company website and YouTube channel, perpetual)</td><td>1</td><td>$400.00</td><td>$400.00</td></tr>
<tr><td>Pickup session, revised price line after script change</td><td>1</td><td>$100.00</td><td>$100.00</td></tr>
<tr><td>Remote directed session connection fee</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,325.00</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 28, 2026 (net 30, PO 4471)</strong></td><td><strong>$1,325.00</strong></td></tr>
</tbody></table>
<p>Check the math: $250 + $500 + $400 + $100 + $75 = $1,325. The usage line names media, territory and dates, so if the brand wants to run the ad on TV or extend it into spring, the voice actor simply issues a new usage invoice referencing this one.</p>
<p>Notes on this invoice might read: "Usage granted as listed above. Broadcast, additional regions or use after Jan 31, 2027 require a separate license. Pickups for client script changes billed at $100 minimum."</p>

<h2>How to fill out a voice over invoice step by step</h2>
<ol>
<li><strong>Start from the approved quote.</strong> Copy the agreed session, usage and extras so the invoice matches what the client already signed off on.</li>
<li><strong>Open the <a href="/invoice-generator">free invoice generator</a>.</strong> Add your logo, contact info and the agency or client billing details, including the PO number.</li>
<li><strong>Add a session line</strong> with the recording date and the length or hours.</li>
<li><strong>Add a separate usage line</strong> with media, region and exact start and end dates, or a buyout line stating what it covers.</li>
<li><strong>Add extras</strong> such as pickups, studio time, editing or rush delivery as their own lines. See our guide to <a href="/blog/rush-fee">rush fees</a> for wording.</li>
<li><strong>Write the license note</strong>, set the due date and download the PDF.</li>
<li><strong>Diary the usage expiry date</strong> so you can offer a renewal before the term ends.</li>
</ol>

<h2>How to price usage and buyouts on an invoice</h2>
<p>Usage pricing depends on audience size and exposure. A few practical rules keep it manageable:</p>
<ul>
<li><strong>Price by media and market.</strong> Local radio, regional TV, national TV, paid online and internal corporate use each carry a different value.</li>
<li><strong>Set a term.</strong> Common terms are 13 weeks, 6 months, 1 year or perpetual. Longer terms cost more.</li>
<li><strong>Treat buyouts as premium.</strong> A buyout replaces all the renewals you would otherwise earn, so price it accordingly and define it in writing.</li>
<li><strong>Do not discount usage silently.</strong> If you give a deal, show the full rate and a separate <a href="/blog/discount-on-invoice">discount line</a> so the client knows the true value next time.</li>
</ul>

<h3>Audiobook, e-learning and IVR jobs</h3>
<p>Audiobooks are commonly priced per finished hour (PFH), e-learning per finished minute or per word count, and phone system (IVR) prompts per prompt or per session with a minimum. Put the unit on the invoice so the client can see how the total was reached, for example "6.4 finished hours at $X PFH." Long-form work like audiobooks usually justifies a deposit; our <a href="/blog/milestone-payments">milestone payments guide</a> explains how to split it.</p>

<h3>What to write in the invoice email</h3>
<p>Keep the covering email short: the project name, the files delivered, the total, the due date and the PO number. For example: "Hi Dana, attached is invoice VO-2026-052 for the Fall Sale online spot and the website explainer, total $1,325, due Nov 28 under PO 4471. Usage details are in the notes. Thanks for the session!" Agencies forward invoices to accounts payable, so a clear subject line such as "Invoice VO-2026-052, PO 4471, Fall Sale VO" helps it reach the right person.</p>

<h2>Common voice over invoice mistakes</h2>
<ul>
<li><strong>Leaving usage off the invoice.</strong> If the license is only in an email thread, it is easy to lose. Put it on the invoice too.</li>
<li><strong>Using "buyout" without defining it.</strong> Always state media, territory and term, even for buyouts.</li>
<li><strong>Charging nothing for client-caused pickups.</strong> Free retakes for your own errors are fair; free rewrites are not.</li>
<li><strong>Missing the PO number.</strong> Agencies often cannot pay an invoice without it.</li>
<li><strong>Forgetting renewal dates.</strong> Expired usage is lost income if you never follow up.</li>
<li><strong>Mixing union and non-union paperwork.</strong> Union jobs follow the signatory's payroll process, not your own invoice.</li>
</ul>

<h2>Taxes and paperwork for freelance voice actors</h2>
<p>Non-union freelance voice actors in the US are usually independent contractors. Clients may ask for a W-9, and for payments made in 2026 or later a business generally issues a Form 1099-NEC only once it pays you $2,000 or more in the year. You still report all of your income. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center">IRS self-employed tax center</a> explains estimated payments, and our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> walks through the dates. This is general information, not tax advice.</p>

<h2>Voice over invoice checklist</h2>
<ul>
<li>Session and usage on separate lines (or a clearly defined all-in or buyout fee)</li>
<li>Media, region and start and end dates for every usage line</li>
<li>Pickups, studio, editing and rush fees itemized</li>
<li>PO number and end client named</li>
<li>License note in the invoice notes</li>
<li>Exact due date and payment methods</li>
<li>Usage expiry date logged for renewal</li>
</ul>

<p>A voice over invoice template that spells out session fees, usage and buyouts protects both your performance and your future earnings. Create one in minutes with our <a href="/invoice-generator">free invoice generator</a>: there is no sign-up, it works in your browser, and you can download a clean PDF to send to your client right away.</p>
`,
  },
  {
    slug: "motion-graphics-invoice-template",
    title: "Motion Graphics Invoice Template (Pricing + Example)",
    description:
      "Motion graphics invoice template for animators: bill per second or per project, handle revisions and deposits, and copy a worked example with clear totals.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "video-editing-invoice-template",
      "graphic-design-invoice-template",
      "illustrator-invoice-template",
    ],
    faqs: [
      {
        q: "How do motion graphics designers usually charge?",
        a: "Most charge per project for defined pieces such as explainer videos, logo animations or social ad packs, often derived from a per-second or per-minute estimate. Hourly or day rates are common for agency in-house bookings and open-ended work. Per-project pricing with clear milestones and a revision limit is usually easiest for clients to approve and for you to invoice.",
      },
      {
        q: "What is per-second pricing in animation?",
        a: "Per-second pricing multiplies the finished duration of an animation by a rate per second that reflects complexity, such as simple kinetic typography versus character animation or 3D. It is a quick way to quote explainer videos. On the invoice, show the duration and the rate so the client can see how the total was reached, and treat changes in length as a change order.",
      },
      {
        q: "How much deposit should I take for a motion graphics project?",
        a: "Many motion designers ask for 30% to 50% upfront before storyboarding begins, with the rest split across milestones such as styleframes, animatic and final delivery. A deposit covers your time if the client cancels early and confirms they are committed. Bill it as its own invoice and credit it on later invoices so the running balance is easy to follow.",
      },
      {
        q: "How many revisions should a motion graphics quote include?",
        a: "Two rounds of revisions per stage is a common default: two at styleframes, two at animatic and one or two at final animation. Changes are cheaper early, so explain that revisions to storyboards cost far less than changes after animation is rendered. Bill extra rounds at your hourly rate and list them as separate invoice lines.",
      },
      {
        q: "Should I charge for stock assets, fonts and music?",
        a: "Yes, if the project needs licensed stock footage, music, fonts or plugins bought specifically for it. Bill them as pass-through costs at cost or with a stated markup, and note which license was purchased and in whose name. Clients often need the license in their own name for broadcast or paid ads, so agree on this early.",
      },
      {
        q: "Who owns the project files in motion graphics work?",
        a: "It depends on your contract. Many designers deliver final rendered files and grant usage rights, but keep source project files such as After Effects or Cinema 4D files unless the client pays extra for them. If the client needs source files or a full copyright transfer, price it as a separate line item and put the transfer in a signed agreement.",
      },
      {
        q: "What if the client cancels a motion graphics project halfway?",
        a: "A good contract includes a cancellation or kill fee that pays you for work done to date, typically tied to the milestones reached. Invoice the completed stages plus any non-refundable costs, credit the deposit, and state that no rights transfer for unused work unless agreed. Clear milestones make this calculation simple and hard to dispute.",
      },
      {
        q: "Can I invoice in a foreign currency for international clients?",
        a: "Yes. Many motion designers bill overseas agencies in USD, EUR or GBP. State the currency clearly next to every amount, agree who pays transfer fees, and list the payment method details. For tax and bookkeeping, record the amount in your home currency on the date you receive payment, following your local tax authority's rules.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A motion graphics invoice template is an invoice for animators and motion designers that lists the project stages (script, styleframes, animatic, animation, final delivery), the pricing basis (per project, per second or per hour), revision rounds, deposits already paid and any licensed assets, and ends with a clear balance due and payment terms.</p>

<p>Motion graphics projects run in stages, and money problems usually start when the invoice does not follow those stages. A client approves styleframes, then asks for a new color palette after the animation is rendered, and suddenly a two-week job takes six. A well-built invoice ties every payment to a milestone and every extra to a change. This guide covers what to include, how per-second and project pricing translate to invoice lines, a worked example and mistakes to avoid.</p>

<h2>What is a motion graphics invoice?</h2>
<p>A motion graphics invoice is a bill from a motion designer, animator or studio to a client for animated video work: explainer videos, logo stings, title sequences, social ads, UI animations or broadcast graphics. It sits between a <a href="/blog/video-editing-invoice-template">video editing invoice</a> and a <a href="/blog/graphic-design-invoice-template">graphic design invoice</a>: it has design deliverables and usage questions like design work, and time-based production like video.</p>

<h2>How to price motion graphics: per second, per project or hourly</h2>
<table><thead><tr><th>Method</th><th>How it works</th><th>Best for</th><th>Invoice wording example</th></tr></thead><tbody>
<tr><td>Per second (or per minute)</td><td>Finished duration multiplied by a complexity-based rate</td><td>Explainers and ads with clear length</td><td>"60-sec 2D explainer, 60 sec at $X/sec"</td></tr>
<tr><td>Per project</td><td>Fixed fee for defined deliverables and revisions</td><td>Logo animations, social packs, title sequences</td><td>"Logo animation package, 3 versions"</td></tr>
<tr><td>Hourly or day rate</td><td>Time billed against a timesheet</td><td>Agency bookings, ongoing edits, unclear scope</td><td>"Motion design, 3 days at $X/day"</td></tr>
<tr><td>Retainer</td><td>Monthly fee for a set amount of capacity</td><td>Brands needing regular social content</td><td>"October content retainer, up to 20 hrs"</td></tr>
</tbody></table>
<p>Complexity drives price more than length: simple kinetic type takes far less time per second than character animation or 3D. Rates vary widely by market and experience, so this guide does not quote a universal rate. Use your own target hourly rate and a time estimate per stage, then convert to a project fee. Our guide on <a href="/blog/value-based-pricing">value-based pricing</a> explains when to price on outcome instead of hours.</p>

<h2>What to include on a motion graphics invoice template</h2>
<ul>
<li>Your name or studio, contact info, tax ID if registered, and logo</li>
<li>Client company, contact, and PO or project code</li>
<li>Invoice number, issue date and calendar due date</li>
<li>Project title, deliverable list, durations and formats (for example 16:9, 9:16 and 1:1 versions)</li>
<li>Milestone being billed (deposit, styleframes, animatic, final)</li>
<li>Revision rounds included and any extra rounds billed</li>
<li>Pass-through costs: stock footage, music, fonts, voice over</li>
<li>Usage or license summary and whether source files are included</li>
<li>Previous payments credited and balance due</li>
</ul>

<h2>Motion graphics invoice example (milestone billing)</h2>
<p>A freelance motion designer quotes a 90-second 2D explainer for a SaaS company at $6,300, billed in three milestones: 40% deposit, 30% on animatic approval, 30% on final delivery. Below is the final invoice, after the client added a vertical cut-down and one extra revision round. Figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>90-sec 2D explainer "How Ledgerly Works", final milestone (30% of $6,300)</td><td>1</td><td>$1,890.00</td><td>$1,890.00</td></tr>
<tr><td>Change order: 15-sec 9:16 social cut-down</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Extra revision round on final animation (hours)</td><td>4</td><td>$85.00</td><td>$340.00</td></tr>
<tr><td>Licensed music track, standard web license (pass-through)</td><td>1</td><td>$49.00</td><td>$49.00</td></tr>
<tr><td>Voice over talent fee (pass-through, invoice attached)</td><td>1</td><td>$400.00</td><td>$400.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$3,329.00</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 28, 2026</strong></td><td><strong>$3,329.00</strong></td></tr>
</tbody></table>
<p>The full project picture: deposit invoice $2,520 (40%), animatic invoice $1,890 (30%), and this final invoice $3,329. Total paid across the project is $7,739: the original $6,300 plus $650 for the cut-down, $340 for extra revisions and $449 in pass-through costs. Listing the milestone percentage on each invoice keeps the client's finance team on the same page.</p>

<h2>How to bill a motion graphics project in 7 steps</h2>
<ol>
<li><strong>Write a scope and quote</strong> that lists deliverables, durations, formats, revision rounds per stage and the milestone schedule. A <a href="/blog/statement-of-work-template">statement of work</a> works well here.</li>
<li><strong>Send a deposit invoice</strong> before storyboarding. See how a <a href="/blog/deposit-invoice">deposit invoice</a> is laid out.</li>
<li><strong>Get written approval at each stage</strong>: script, styleframes, animatic, final. Approval emails are your evidence if scope is questioned.</li>
<li><strong>Log changes as change orders</strong> with a price before you do the work. Our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a> has templates.</li>
<li><strong>Invoice each milestone on approval</strong> using the <a href="/invoice-generator">free invoice generator</a>, crediting prior payments.</li>
<li><strong>Attach pass-through receipts</strong> for music, stock and voice talent.</li>
<li><strong>Deliver final files after the final payment</strong> clears, or deliver watermarked previews until then, as your contract allows.</li>
</ol>

<h2>Revisions, rights and source files</h2>
<h3>How to limit revisions without upsetting clients</h3>
<p>Explain early that changes get more expensive as the project moves forward. A color change at styleframes takes minutes; the same change after animation can mean re-rendering every scene. Put the included rounds per stage in your quote, and when the client exceeds them, bill extra rounds hourly with a short description on the invoice.</p>
<h3>Usage rights and copyright</h3>
<p>Under US law, a freelancer generally owns the copyright in work they create unless it is transferred in a signed writing or qualifies as a work made for hire. Parts of an audiovisual work are one of the categories that can be commissioned as work made for hire, but only with a written agreement signed by both parties, according to the <a href="https://www.copyright.gov/circs/circ30.pdf">U.S. Copyright Office's Circular 30</a>. If you transfer rights or hand over source files, price it and state it in the contract. This is general information, not legal advice.</p>
<h3>Cancellation and kill fees</h3>
<p>If a client stops the project midway, a <a href="/blog/kill-fee">kill fee</a> clause lets you invoice the stages completed plus non-refundable costs. Milestone billing makes this simple, because each stage already has a value.</p>

<h2>How to estimate a motion graphics fee before you invoice</h2>
<p>Your invoice is only as good as the quote behind it. A simple way to build a project fee is to estimate hours per stage, multiply by your target rate, then add a buffer for feedback and rendering. Here is an illustrative estimate for the 90-second explainer above, at a target rate of $85 per hour:</p>
<table><thead><tr><th>Stage</th><th>Estimated hours</th><th>Cost at $85/hr</th></tr></thead><tbody>
<tr><td>Script review and storyboard</td><td>8</td><td>$680</td></tr>
<tr><td>Styleframes (3 frames, 2 rounds)</td><td>12</td><td>$1,020</td></tr>
<tr><td>Animatic</td><td>10</td><td>$850</td></tr>
<tr><td>Animation and sound sync</td><td>32</td><td>$2,720</td></tr>
<tr><td>Final revisions, renders and exports</td><td>8</td><td>$680</td></tr>
<tr><td><strong>Total</strong></td><td><strong>70</strong></td><td><strong>$5,950</strong></td></tr>
</tbody></table>
<p>Rounded up with a small contingency, that becomes the $6,300 fixed fee. Dividing $6,300 by 90 seconds gives an effective rate of $70 per finished second, which is the figure you might quote next time a client asks for per-second pricing on similar work. If the client later asks for 120 seconds, you already know the extra 30 seconds will add roughly a third of the animation hours, so you can price the change order with confidence.</p>
<p>Keep your estimate spreadsheet after the project. Comparing estimated hours to actual hours across several jobs is the fastest way to find out whether your per-second rates are profitable or whether certain stages, often revisions, are quietly eating your margin.</p>

<h2>Common motion graphics invoice mistakes</h2>
<ul>
<li><strong>Invoicing the whole fee at the end.</strong> A cancelled six-week project can leave you with nothing. Use milestones.</li>
<li><strong>Not pricing aspect ratio versions.</strong> 9:16 and 1:1 cuts are new layouts, not exports. Quote them.</li>
<li><strong>Absorbing asset costs.</strong> Music, stock and fonts are real expenses; pass them through.</li>
<li><strong>Doing change requests before pricing them.</strong> Quote first, then work.</li>
<li><strong>Silent source file handover.</strong> Project files have value; charge for them if requested.</li>
<li><strong>No running balance.</strong> Show deposit and milestone credits so the client can follow the total.</li>
</ul>

<h2>Motion graphics invoice checklist</h2>
<ul>
<li>Milestone and percentage being billed</li>
<li>Deliverables with durations and aspect ratios</li>
<li>Revision rounds used and extras billed</li>
<li>Change orders listed separately</li>
<li>Pass-through costs with license types</li>
<li>Rights and source file status in the notes</li>
<li>Prior payments credited and due date shown</li>
</ul>
<p>If you are building a freelance animation career, our guide on <a href="/blog/how-to-become-a-freelance-video-editor">how to become a freelance video editor</a> covers client finding and portfolio tips that apply to motion work too.</p>

<p>A clear motion graphics invoice template keeps milestone payments flowing and makes extra work easy to bill. Use our <a href="/invoice-generator">free invoice generator</a> to create yours: no sign-up, it builds the PDF in your browser, and you can download and send it as soon as each stage is approved. You can also browse ready layouts on our <a href="/invoice-templates">invoice templates</a> page.</p>
`,
  },
  {
    slug: "illustrator-invoice-template",
    title: "Illustrator Invoice Template: Usage Rights and Kill Fees",
    description:
      "Illustrator invoice template for commissions: bill sketches, finals and usage rights, add a kill fee clause and copy a worked example with realistic totals.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "illustration-pricing",
      "artist-commission-invoice-template",
      "graphic-design-invoice-template",
    ],
    faqs: [
      {
        q: "How do illustrators split payments on a commission?",
        a: "A common structure is 50% upfront before sketches and 50% on delivery of final art, or a three-stage split such as one third at start, one third at sketch approval and one third at final. Larger publishing or advertising jobs may follow the client's own payment schedule. Whatever the split, bill each stage on its own invoice and credit earlier payments on the final one.",
      },
      {
        q: "What is a kill fee for an illustrator?",
        a: "A kill fee is a payment you receive if a client cancels a commission after work has started, compensating you for time spent. It is often set as a percentage of the total fee, commonly higher once sketches are approved. The kill fee should be written into your contract, and when a job is killed, you invoice it as a clear line item referencing that clause.",
      },
      {
        q: "Should usage rights be listed on an illustration invoice?",
        a: "Yes. Usage rights describe how the client may use the artwork: the media, territory, duration and whether use is exclusive. Listing them on the invoice creates a clear record alongside the contract. If the client later wants to use the art on merchandise or in a new campaign, you can point to the original grant and quote an additional license.",
      },
      {
        q: "Do illustrators charge for revisions?",
        a: "Most illustrators include a set number of revisions at the sketch stage and fewer at the final stage, since changes to finished art take much longer. Extra revisions, or major changes after sketch approval, are commonly billed at an hourly rate or a flat fee per change. State the included rounds in your quote and invoice extras on separate lines.",
      },
      {
        q: "Can a client buy the copyright to my illustration?",
        a: "Yes, but a full copyright transfer is a significant step and is usually priced much higher than a limited license. In the US, a transfer of copyright must be in a writing signed by the owner. Many illustrators prefer to grant an exclusive license for a defined use instead. Get advice for high-value deals; this is general information, not legal advice.",
      },
      {
        q: "How do I invoice for original physical artwork?",
        a: "If you create a physical piece, list the original artwork as a separate line from the license to reproduce it, because selling the object does not automatically transfer copyright. Include dimensions, medium and shipping or framing costs. Physical goods may also be subject to sales tax in your state, unlike some services, so check your state's rules.",
      },
      {
        q: "What payment terms do publishers and agencies use?",
        a: "Publishers and agencies often pay on net 30 or longer, and some pay on publication rather than on delivery, which can delay your money for months. Negotiate payment on acceptance of final art where you can. Always put the agreed due date on the invoice and include any PO or job number the client gives you so it reaches accounts payable quickly.",
      },
      {
        q: "Should I charge a rush fee for illustrations?",
        a: "Yes, if the deadline forces you to work evenings or weekends or push back other clients. A rush fee of an extra percentage on the total is common, but agree on it before you start. List it as its own line on the invoice so the client sees the standard price and the premium they chose to pay for speed.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An illustrator invoice template is an invoice built for commissioned illustration that bills by stage (deposit, sketches, final art), lists the usage rights granted (media, territory, duration, exclusivity), includes revision and rush charges, references a kill fee for cancellations, and shows payments already received and the balance due.</p>

<p>Illustration is priced on two things at once: the work and the rights. A spot illustration for a small blog might be a few hundred dollars, while the same drawing used on national packaging can be worth much more. Your invoice is where those rights get recorded. This guide covers what an illustrator invoice should include, how to bill commission stages, a full example with numbers and the mistakes that cost illustrators money.</p>

<h2>What is an illustrator invoice?</h2>
<p>An illustrator invoice is a payment request from an illustrator to a client such as a publisher, agency, brand, game studio or private individual. It covers the creative work and, crucially, the license to use it. It is similar to a <a href="/blog/graphic-design-invoice-template">graphic design invoice</a>, but illustration jobs lean more on usage rights, staged approvals and kill fees, so those belong on the invoice too. Private commissions for fans and collectors are covered in our <a href="/blog/artist-commission-invoice-template">art commission invoice</a> guide.</p>

<h2>What to include on an illustrator invoice template</h2>
<table><thead><tr><th>Section</th><th>Details</th></tr></thead><tbody>
<tr><td>Header</td><td>Your name or studio, logo, contact, tax ID if registered</td></tr>
<tr><td>Client</td><td>Company, art director or contact, billing address, PO or job number</td></tr>
<tr><td>Invoice data</td><td>Invoice number, issue date, due date</td></tr>
<tr><td>Job description</td><td>Title, number of pieces, size or format, style, color or black and white</td></tr>
<tr><td>Stage billed</td><td>Deposit, sketch approval, final art, or full fee</td></tr>
<tr><td>Usage rights</td><td>Media (print, web, packaging, merchandise), territory, term, exclusivity</td></tr>
<tr><td>Extras</td><td>Additional revisions, rush fee, physical original, shipping</td></tr>
<tr><td>Credits</td><td>Deposit or earlier stage payments received</td></tr>
<tr><td>Terms</td><td>Payment methods, late fee policy, kill fee reference</td></tr>
</tbody></table>
<p>Number your invoices consistently, for example ILL-2026-018. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains simple formats that work for solo creatives.</p>

<h2>How illustrators price commissions</h2>
<p>Illustrators usually set a base creative fee from the time involved (sketches, refinement, final rendering) and then adjust for usage. Rates vary hugely by market, client size and experience, so treat the factors below as a framework rather than a price list. For numbers and examples, see our <a href="/blog/illustration-pricing">illustration pricing guide</a>.</p>
<ul>
<li><strong>Complexity:</strong> a single character on a plain background versus a detailed scene.</li>
<li><strong>Size and placement:</strong> a spot illustration, a half page, a full page, a cover, or a key visual.</li>
<li><strong>Usage:</strong> editorial one-time use, advertising, packaging, merchandise or unlimited use.</li>
<li><strong>Term and territory:</strong> one year in one country costs less than worldwide in perpetuity.</li>
<li><strong>Exclusivity:</strong> exclusive rights prevent you from licensing the image elsewhere, so they cost more.</li>
<li><strong>Deadline:</strong> rushed work carries a <a href="/blog/rush-fee">rush fee</a>.</li>
</ul>

<h2>Illustrator invoice example with real numbers</h2>
<p>An illustrator creates a cover illustration and two interior spot illustrations for a small publisher's children's nonfiction book. The agreed creative fee is $2,400 for the cover and $300 per spot. The deal is 50% at start, 50% on final delivery. This is the final invoice; figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Cover illustration "Ocean Machines", full color, 7 x 10 in, print and ebook</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Interior spot illustrations, black and white</td><td>2</td><td>$300.00</td><td>$600.00</td></tr>
<tr><td>Additional revision round on cover after final approval (hours)</td><td>3</td><td>$60.00</td><td>$180.00</td></tr>
<tr><td>Rush fee: interior spots delivered 5 days early (15% of $600)</td><td>1</td><td>$90.00</td><td>$90.00</td></tr>
<tr><td>Less: deposit received Oct 6, 2026 (invoice ILL-2026-014)</td><td>1</td><td>-$1,500.00</td><td>-$1,500.00</td></tr>
<tr><td colspan="3"><strong>Balance due by Nov 28, 2026</strong></td><td><strong>$1,770.00</strong></td></tr>
</tbody></table>
<p>The math: $2,400 + $600 + $180 + $90 = $3,270 total charges. The deposit was 50% of the $3,000 base fee, or $1,500, leaving $1,770 due. The invoice notes would state the usage: "License: exclusive use of cover and interior art in the print and ebook editions of 'Ocean Machines' and related marketing of the book, worldwide, for the life of the edition. Merchandise and other uses require a separate license. Copyright remains with the illustrator."</p>

<h2>How to invoice an illustration commission step by step</h2>
<ol>
<li><strong>Agree on the brief, fee, usage and schedule in writing.</strong> Our <a href="/blog/freelance-contract-template">freelance contract template</a> covers the clauses you need, including a kill fee.</li>
<li><strong>Send a deposit invoice</strong> before you start sketches. Do not begin until it is paid if the client is new.</li>
<li><strong>Get sketch approval in writing</strong>, including a note that later changes will be billed.</li>
<li><strong>Track extra changes and rush requests</strong> as they happen, with the time spent.</li>
<li><strong>Create the final invoice</strong> in the <a href="/invoice-generator">free invoice generator</a>: list each piece, extras, the usage grant and the deposit credit.</li>
<li><strong>Deliver final files</strong> once paid, or with the invoice for trusted clients, as your terms allow.</li>
<li><strong>Keep the invoice and license together</strong> in your records so future license requests are easy to price.</li>
</ol>

<h2>Usage rights, copyright and kill fees</h2>
<h3>What usage rights should the invoice state?</h3>
<p>State the media, territory, term and exclusivity, plus who owns the copyright. In the US, the creator generally owns copyright in a commissioned illustration unless it is transferred by a signed writing, or the work fits one of the narrow work-made-for-hire categories with a signed agreement, as explained in <a href="https://www.copyright.gov/circs/circ30.pdf">Circular 30 from the U.S. Copyright Office</a>. Granting a license rather than selling copyright lets you charge again if the client wants more uses. This is general information, not legal advice; if AI tools were involved in your process, see our note on <a href="/blog/ai-generated-work-copyright">AI-generated work and copyright</a>.</p>
<h3>How to invoice a kill fee</h3>
<p>If the client cancels, invoice the kill fee as stated in the contract, for example "Kill fee per clause 7: 50% of $3,000 creative fee after sketch approval, $1,500, less deposit received $1,500, balance $0." Make it clear that no usage rights pass for killed work unless agreed. Our <a href="/blog/kill-fee">kill fee guide</a> covers common percentages and wording.</p>

<h2>Which payment structure suits which illustration client?</h2>
<p>Different clients pay in different ways, and your invoice schedule should match. The table below summarizes typical arrangements; treat it as a starting point for negotiation, not a rule.</p>
<table><thead><tr><th>Client type</th><th>Typical structure</th><th>What to watch</th></tr></thead><tbody>
<tr><td>Private individual</td><td>50% to 100% upfront, balance before files or shipping</td><td>Refund expectations, shipping costs</td></tr>
<tr><td>Small business or brand</td><td>50% deposit, 50% on final</td><td>Usage creep into merchandise and ads</td></tr>
<tr><td>Ad or design agency</td><td>Agency schedule, often net 30 with a PO</td><td>Agency waiting for its own client to pay</td></tr>
<tr><td>Book publisher</td><td>Split payments on signing, sketches and acceptance</td><td>Payment tied to publication dates</td></tr>
<tr><td>Magazine or editorial</td><td>Flat fee on acceptance or publication</td><td>Kill fee if the story is dropped</td></tr>
</tbody></table>
<p>Agencies deserve special attention. Some write "pay when paid" terms into their contracts, meaning they only pay you after their client pays them. Try to replace that with a fixed due date, or at least a long-stop date such as 60 days after delivery. If an invoice does go unpaid, our guide on <a href="/blog/client-not-paying-invoice">what to do when a client is not paying</a> walks through reminders, final notices and small claims options.</p>
<p>For private commissions from overseas buyers, ask for payment in full before you start or before you ship, and quote in a single currency. Card and platform fees can take a noticeable bite out of small commissions, so decide upfront whether you will absorb them or add a stated processing fee where the law allows.</p>

<h2>Common illustrator invoice mistakes</h2>
<ul>
<li><strong>No usage statement.</strong> Without it, clients may assume they can use the art anywhere, forever.</li>
<li><strong>Selling copyright by accident.</strong> Phrases like "all rights" on an invoice can cause disputes. Be specific.</li>
<li><strong>Starting without a deposit.</strong> New clients and private buyers should pay something upfront.</li>
<li><strong>Free changes after final approval.</strong> Bill them, or the job never ends.</li>
<li><strong>Mixing the original artwork and the license.</strong> They are separate items with separate tax treatment.</li>
<li><strong>Accepting payment on publication without a long-stop date.</strong> If publication slips, so does your pay.</li>
</ul>

<h2>Illustrator invoice checklist</h2>
<ul>
<li>Each illustration listed with size, format and color</li>
<li>Stage billed and deposit credited</li>
<li>Usage: media, territory, term, exclusivity, copyright owner</li>
<li>Extra revisions and rush fee itemized</li>
<li>Kill fee clause referenced in notes</li>
<li>PO or job number and calendar due date</li>
</ul>

<p>A specific illustrator invoice template protects your rights and makes every commission easier to get paid for. Build yours in our <a href="/invoice-generator">free invoice generator</a>: no sign-up, nothing to install, and it creates a downloadable PDF in your browser in a few minutes.</p>
`,
  },
  {
    slug: "ux-design-invoice-template",
    title: "UX Design Invoice Template: Milestone Billing Guide",
    description:
      "UX design invoice template for discovery, research, wireframes and prototypes. Learn milestone billing, see a worked example and avoid common mistakes.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "web-development-invoice-template",
      "milestone-payments",
      "graphic-design-invoice-template",
    ],
    faqs: [
      {
        q: "How do UX designers usually bill clients?",
        a: "Freelance UX designers commonly bill per project with milestones tied to phases such as discovery, research, wireframes, prototype and usability testing. Hourly or day-rate billing is common for contract roles embedded in a product team and for open-ended advisory work. Monthly retainers suit ongoing design support. The phase-based model is popular because each invoice matches a deliverable the client can review.",
      },
      {
        q: "What should a UX discovery phase invoice include?",
        a: "List the discovery activities completed: stakeholder interviews, kickoff workshop, competitor review, analytics review and the resulting deliverable, such as a findings report or project brief. Show the fee for the phase and whether it was fixed or billed by hours. Discovery is often sold as a paid standalone phase, so the invoice should make clear it is complete and what the client received.",
      },
      {
        q: "Should I charge separately for user research participants?",
        a: "Yes. Participant incentives, recruiting panel fees and research tool subscriptions bought for the project are real costs. List them as pass-through expenses at cost or with a stated markup, and attach receipts. Some clients prefer to pay incentives directly. Agree on the approach before research starts so nobody is surprised by a recruiting bill on the invoice.",
      },
      {
        q: "How much deposit should a UX designer ask for?",
        a: "A deposit of 25% to 50% of the project fee before kickoff is common for freelance UX work, especially with new clients. Some designers instead bill discovery in full upfront as a small first engagement. The deposit secures your schedule and filters out clients who are not ready. Credit it clearly on later invoices so the running balance stays accurate.",
      },
      {
        q: "How do I bill for extra screens or flows in a UX project?",
        a: "Define the scope by screens, flows or features in the proposal. When the client asks for more, send a change order with a price or an hourly estimate before starting. On the invoice, list the change order with its reference and description, such as 'CO-2: checkout flow, 6 additional screens.' This keeps the original fee intact and makes additions easy to approve.",
      },
      {
        q: "Who owns the Figma files after a UX project?",
        a: "Ownership depends on your contract. Many clients expect working design files and full rights to the final designs once paid, and many designers agree to transfer them on final payment. Put the transfer condition in writing and mention it on the final invoice. If you keep reusable components or a personal design system, state that too.",
      },
      {
        q: "What payment terms work best for UX freelancers?",
        a: "Net 14 or net 15 is common for startups and small companies, while larger companies often require net 30 or longer and a purchase order. Phase-based billing helps by spreading payments across the project. Always confirm the client's invoicing process, such as a vendor portal or required PO number, before the first invoice to avoid delays.",
      },
      {
        q: "Do UX designers need to charge sales tax?",
        a: "In the US, design services are often not taxable, but some states tax certain digital products or services, and rules differ when you deliver tangible items. Check your state revenue department's guidance. In the UK, EU, Canada or Australia, VAT or GST applies once you are registered. This is general information, not tax advice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A UX design invoice template is an invoice for user experience designers that bills by project phase (discovery, research, information architecture, wireframes, prototype, usability testing, handoff), shows the milestone or hours being charged, lists research costs such as participant incentives, credits any deposit and states the balance and payment terms.</p>

<p>UX projects have a lot of invisible work. Interviews, synthesis, journey maps and test sessions do not look like "design" to some clients, so an invoice that only says "UX design, $8,000" can trigger questions. A phase-based invoice explains what was done, matches the proposal, and makes payment a routine approval. This guide covers the fields, milestone billing, a worked example and common mistakes.</p>

<h2>What is a UX design invoice?</h2>
<p>A UX design invoice is a bill from a UX designer, product designer or UX research consultant to a client for work that shapes how users experience a product, app or website. It is closely related to a <a href="/blog/web-development-invoice-template">web development invoice</a>, since the two are often part of the same product build, but UX invoices focus on research and design deliverables rather than code.</p>

<h2>Typical UX project phases and what to bill</h2>
<table><thead><tr><th>Phase</th><th>Typical activities</th><th>Deliverable to name on the invoice</th></tr></thead><tbody>
<tr><td>Discovery</td><td>Stakeholder interviews, kickoff workshop, analytics and competitor review</td><td>Discovery findings and project brief</td></tr>
<tr><td>User research</td><td>User interviews, surveys, recruiting, synthesis</td><td>Research report, personas, journey map</td></tr>
<tr><td>Information architecture</td><td>Sitemap, user flows, card sorting</td><td>Sitemap and flow diagrams</td></tr>
<tr><td>Wireframes</td><td>Low and mid-fidelity screens</td><td>Wireframe set (number of screens)</td></tr>
<tr><td>Prototype and UI</td><td>Interactive prototype, visual design</td><td>Clickable prototype, UI screens</td></tr>
<tr><td>Usability testing</td><td>Test plan, sessions, analysis</td><td>Test report with recommendations</td></tr>
<tr><td>Handoff</td><td>Specs, annotations, developer walkthrough</td><td>Annotated design files and handoff session</td></tr>
</tbody></table>
<p>Naming deliverables on each invoice line connects your bill to something the client can open and review. That is the main reason milestone billing gets paid faster than a lump sum.</p>

<h2>What to include on a UX design invoice template</h2>
<ul>
<li>Your name or studio, contact details, tax ID if registered, logo</li>
<li>Client company, project owner, billing contact, PO number if required</li>
<li>Invoice number, issue date and exact due date</li>
<li>Project name and the phase or milestone being billed</li>
<li>Deliverables completed in that phase</li>
<li>Pricing basis: fixed phase fee, hours times rate, or retainer</li>
<li>Change orders with reference numbers</li>
<li>Pass-through costs: participant incentives, recruiting fees, tools</li>
<li>Deposit and prior payments credited</li>
<li>Payment methods and a note on file and rights transfer</li>
</ul>
<p>Hourly UX contractors should attach a timesheet. Our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> shows a clean format.</p>

<h2>UX design invoice example: milestone billing</h2>
<p>A freelance UX designer agrees a $12,000 fixed fee to redesign a booking app's onboarding and checkout, split as 25% deposit, 25% after research, 25% after wireframes and 25% after prototype and testing. Mid-project, the client adds a loyalty sign-up flow. Here is invoice 3 of 4. Figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Milestone 3: wireframes, onboarding and checkout (22 screens), approved Oct 23, 2026 (25% of $12,000)</td><td>1</td><td>$3,000.00</td><td>$3,000.00</td></tr>
<tr><td>Change order CO-1: loyalty sign-up flow wireframes (hours)</td><td>14</td><td>$95.00</td><td>$1,330.00</td></tr>
<tr><td>Usability test participant incentives, round 1 (pass-through)</td><td>6</td><td>$60.00</td><td>$360.00</td></tr>
<tr><td>Recruiting panel fee (pass-through, receipt attached)</td><td>1</td><td>$240.00</td><td>$240.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$4,930.00</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 13, 2026 (net 15)</strong></td><td><strong>$4,930.00</strong></td></tr>
</tbody></table>
<p>The math: $3,000 milestone + $1,330 change order (14 hours at $95) + $360 incentives (6 participants at $60) + $240 recruiting = $4,930. A short "project summary" in the notes helps: "Paid to date: $6,000 (milestones 1 and 2). This invoice: $4,930. Remaining fixed fee: $3,000 (milestone 4)."</p>

<h2>How to set up milestone billing for UX projects</h2>
<ol>
<li><strong>Break the project into phases</strong> with named deliverables and approval points.</li>
<li><strong>Assign a percentage or fee to each phase.</strong> Front-load slightly so research and discovery are paid before design starts. Our <a href="/blog/milestone-payments">milestone payments guide</a> covers common splits.</li>
<li><strong>Collect a deposit</strong> before kickoff using a <a href="/blog/deposit-invoice">deposit invoice</a>.</li>
<li><strong>Define what "approved" means</strong>, for example written sign-off or no response within 5 business days.</li>
<li><strong>Invoice each milestone on approval</strong> in the <a href="/invoice-generator">free invoice generator</a>, naming the deliverables.</li>
<li><strong>Handle extra scope as change orders</strong>, priced before work begins. See <a href="/blog/scope-creep-change-order">how to manage scope creep with change orders</a>.</li>
<li><strong>Transfer final files and rights on final payment</strong>, and say so in the notes.</li>
</ol>

<h2>Fixed fee, hourly or retainer for UX work?</h2>
<table><thead><tr><th>Model</th><th>When it fits</th><th>Invoice frequency</th></tr></thead><tbody>
<tr><td>Fixed fee with milestones</td><td>Defined projects such as a redesign or new feature</td><td>Per milestone</td></tr>
<tr><td>Hourly or daily</td><td>Embedded contract roles, audits, unclear scope</td><td>Weekly, biweekly or monthly</td></tr>
<tr><td>Monthly retainer</td><td>Ongoing design support for a product team</td><td>Monthly in advance</td></tr>
<tr><td>Paid discovery then fixed fee</td><td>Clients unsure about scope</td><td>Discovery upfront, then milestones</td></tr>
</tbody></table>
<p>For the pros and cons in depth, read <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a>. Ongoing product support is often best billed as a <a href="/blog/retainer-invoice">retainer invoice</a> with a set number of hours.</p>

<h2>How much do UX designers charge?</h2>
<p>UX fees depend on experience, location, industry and project risk, and there is no official rate card. For context, the U.S. Bureau of Labor Statistics groups many UX roles with web developers and digital designers; its <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm">Occupational Outlook Handbook entry</a> shows employee pay for the field, which freelancers typically mark up to cover benefits, taxes, software and unbilled time. A practical way to set a freelance rate:</p>
<ol>
<li>Start with the annual income you want, say $110,000.</li>
<li>Add business costs such as Figma and research tool subscriptions, insurance, equipment and self-employment tax, say $20,000.</li>
<li>Estimate billable hours. Many freelancers bill around 1,000 to 1,200 hours a year after sales, admin and time off.</li>
<li>Divide: $130,000 divided by 1,100 hours is about $118 per hour.</li>
</ol>
<p>Fixed-fee projects are then priced from estimated hours per phase. For example, discovery at 20 hours, research at 30, wireframes at 40, prototype and testing at 30 is 120 hours, or about $14,000 at $118. The figures here are illustrative, so plug in your own numbers. Our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through the same method in more detail, and <a href="/blog/how-to-negotiate-freelance-rates">negotiating freelance rates</a> covers what to do when a client pushes back.</p>

<h2>What to write in the UX invoice email</h2>
<p>Product teams approve invoices faster when the email repeats what they already signed off. Keep it to four lines: the milestone name, the approval date, the total and the due date, plus a link to the deliverables. For example: "Hi Priya, attached is invoice UX-2026-009 for milestone 3 (wireframes, approved Oct 23) and change order CO-1, total $4,930, due Nov 13. Wireframes are in the shared Figma project. Milestone 4 is scheduled for Nov 20." If the client uses a vendor portal, upload the PDF there as well and keep a screenshot of the submission.</p>

<h2>Common UX design invoice mistakes</h2>
<ul>
<li><strong>Billing research as "consulting."</strong> Name the interviews, tests and reports so the value is visible.</li>
<li><strong>Doing extra flows without a change order.</strong> Scope grows quietly in UX; price it before you draw it.</li>
<li><strong>Paying incentives out of your fee.</strong> Participant payments and tools are pass-through costs.</li>
<li><strong>Back-loading payment.</strong> If 70% is due at handoff and the project stalls, you carry the risk.</li>
<li><strong>Ignoring vendor portals.</strong> Larger clients may require invoices in their procurement system with a PO.</li>
<li><strong>Handing over files before final payment</strong> when your contract ties transfer to payment.</li>
</ul>

<h2>Taxes and records for freelance UX designers</h2>
<p>Most freelance UX designers in the US work as independent contractors and may receive a Form 1099-NEC from clients who pay $2,000 or more for services in 2026, under the higher threshold that applies to payments made after 2025. Keep every invoice, and set aside money for income and self-employment tax; our guide on <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains deadlines, and the <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec">IRS Form 1099-NEC page</a> has the official instructions. This is general information, not tax advice.</p>

<h2>UX design invoice checklist</h2>
<ul>
<li>Phase or milestone name and percentage</li>
<li>Deliverables listed and approval date</li>
<li>Change orders with references and pricing</li>
<li>Pass-through research costs with receipts</li>
<li>Paid-to-date and remaining fee summary</li>
<li>PO number, due date and payment methods</li>
<li>File and rights transfer note</li>
</ul>

<p>A phase-based UX design invoice template turns invisible research and design work into clear, payable milestones. Create yours with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and generates a PDF in your browser that you can download and send the moment a milestone is approved.</p>
`,
  },
];
