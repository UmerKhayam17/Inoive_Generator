import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_T: PostDraft[] = [
  {
    slug: "data-entry-invoice-template",
    title: "Data Entry Invoice Template: Per Record or Hourly",
    description:
      "Free data entry invoice template: bill per record, per page or by the hour, set accuracy terms, and copy a worked example with realistic line items and totals.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "virtual-assistant-invoice-template",
      "transcription-invoice-template",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "Is it better to charge per record or per hour for data entry?",
        a: "Per-record or per-page pricing works well for repetitive, consistent tasks such as entering invoices, forms or product listings, because it rewards speed and gives the client a predictable cost. Hourly billing suits messy source material, research-heavy work or tasks where record length varies a lot. Many freelancers run a short paid sample batch first, measure their speed, then set a per-record rate.",
      },
      {
        q: "What accuracy rate should a data entry contract promise?",
        a: "Promise a specific, measurable standard rather than 'perfect' work, for example 99% field-level accuracy checked on a random sample, with free correction of your own errors reported within a set number of days. Exclude errors caused by illegible or incorrect source documents. Writing this into your agreement and repeating it in the invoice notes prevents disputes about rework.",
      },
      {
        q: "How do I count records for a data entry invoice?",
        a: "Agree on the unit before you start: a row in a spreadsheet, a completed form, a business card, a product listing or a page. Then count from the delivered file, not your memory. Attach a summary or batch log showing the batch name, date and record count so the client can verify the quantity against their own system quickly.",
      },
      {
        q: "Should I charge extra for rush data entry jobs?",
        a: "Yes. If a client needs a large batch turned around faster than your normal schedule, a rush fee compensates you for extra hours and for pushing back other clients. A percentage surcharge such as 25% to 50% on the rush batch is a common approach. Agree on it before you start and show it as its own line on the invoice.",
      },
      {
        q: "How often should a data entry freelancer invoice?",
        a: "For ongoing work, weekly or biweekly invoicing keeps cash flowing and limits your risk if a client stops paying. For one-off projects, invoice on delivery, and for large projects consider a deposit plus batch-by-batch billing. Regular, small invoices are also easier for clients to approve than one large bill covering a month of work.",
      },
      {
        q: "Do I need a contract for data entry work?",
        a: "A short written agreement is strongly recommended. It should cover the unit price, accuracy standard, correction window, turnaround time, data confidentiality, how files are shared and deleted, and payment terms. Clients handling customer or financial data may also ask you to sign a confidentiality or data processing agreement before they share files.",
      },
      {
        q: "How do I handle confidential client data in data entry work?",
        a: "Work only in the systems or shared folders the client provides where possible, avoid downloading data to personal devices, use strong passwords and two-factor authentication, and delete local copies when the job ends. Never paste sensitive records into public tools without permission. Note your data handling approach in your agreement so clients can approve it.",
      },
      {
        q: "Do I get a 1099 for data entry work?",
        a: "If you are an independent contractor in the US and a business pays you $2,000 or more for services during 2026, it generally must file Form 1099-NEC, under the higher threshold for payments made after 2025. Payments through card processors or platforms may be reported differently. You owe tax on all income either way. This is general information, not tax advice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A data entry invoice template is an invoice for data entry clerks and virtual assistants that bills work by record, page, field or hour, lists each batch with its date and count, states the accuracy standard and correction terms, adds any rush or cleanup fees, and shows the total due with payment terms.</p>

<p>Data entry is easy to underprice and easy to dispute. Clients often think of it as quick typing, while the reality includes reading poor scans, checking duplicates, formatting and validating. A clear data entry invoice shows the volume you processed, how it was priced and what quality the client can expect. This guide covers how to price data entry, what your invoice should include, a worked example and the mistakes that cause disputes.</p>

<h2>What is a data entry invoice?</h2>
<p>A data entry invoice is a bill from a freelancer, <a href="/blog/virtual-assistant-invoice-template">virtual assistant</a> or small agency to a client for entering, updating or cleaning data. Typical jobs include entering paper forms into a CRM, typing receipts into accounting software, building product catalogs, updating spreadsheets from PDFs and cleaning duplicate contact lists. Like any <a href="/blog/freelance-invoice-template">freelance invoice</a>, it requests payment and creates a record, but it also needs to prove the volume of work.</p>

<h2>How to price data entry: per record, per page or per hour</h2>
<table><thead><tr><th>Pricing unit</th><th>Best for</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Per record or row</td><td>Forms, contacts, product listings</td><td>Predictable for the client, rewards speed</td><td>Records with many fields take longer</td></tr>
<tr><td>Per page</td><td>Typing documents, scanned pages</td><td>Simple to count</td><td>Dense pages and light pages pay the same</td></tr>
<tr><td>Per field or keystroke</td><td>Large-volume forms processing</td><td>Most precise</td><td>Hard for small clients to understand</td></tr>
<tr><td>Per hour</td><td>Messy sources, research, cleanup</td><td>You are paid for all the time</td><td>Clients may worry about open-ended cost</td></tr>
<tr><td>Monthly retainer</td><td>Ongoing admin and updates</td><td>Stable income</td><td>Volume can creep above the agreed level</td></tr>
</tbody></table>
<p>For context on employee pay, the U.S. Bureau of Labor Statistics publishes wage data for <a href="https://www.bls.gov/oes/current/oes439021.htm">data entry keyers (SOC 43-9021)</a>. Freelancers typically charge more than the employee hourly wage because they pay their own taxes, software and unbilled time. Our guide on <a href="/blog/how-to-set-freelance-rates">setting freelance rates</a> shows how to work out a sustainable number.</p>

<h3>How to convert an hourly rate into a per-record rate</h3>
<p>Time a sample batch. If you enter 40 records of a given type per hour and want to earn $24 per hour, your per-record price is $24 divided by 40, or $0.60. Add a small buffer for checking and formatting, for example rounding up to $0.65. Rerun the test whenever the client changes the form or source quality, because a new layout can change your speed a lot.</p>

<h2>What to include on a data entry invoice template</h2>
<ul>
<li><strong>Your details:</strong> name or business, email, address, tax ID if registered.</li>
<li><strong>Client details:</strong> company, contact and billing email.</li>
<li><strong>Invoice number, date and due date.</strong> Use a consistent sequence; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
<li><strong>Batch lines:</strong> batch name or date range, unit (record, page, hour), quantity, rate, amount.</li>
<li><strong>Extras:</strong> rush fees, data cleanup, deduplication, formatting, research lookups.</li>
<li><strong>Accuracy and correction terms:</strong> a one-line summary in the notes.</li>
<li><strong>Payment terms and methods</strong>, plus a late fee if your agreement allows it.</li>
<li><strong>Attachment:</strong> a batch log or timesheet backing up the counts.</li>
</ul>

<h2>Data entry invoice example with real numbers</h2>
<p>A freelancer enters vendor invoices into a small accounting firm's software and cleans a customer list. Rates are illustrative: $0.65 per invoice record, $28 per hour for cleanup, and a 30% rush surcharge on one batch.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Vendor invoice entry, batch A (Oct 1 to 10), records</td><td>620</td><td>$0.65</td><td>$403.00</td></tr>
<tr><td>Vendor invoice entry, batch B (Oct 13 to 24), records</td><td>540</td><td>$0.65</td><td>$351.00</td></tr>
<tr><td>Rush surcharge, batch B, 48-hour turnaround (30% of $351.00)</td><td>1</td><td>$105.30</td><td>$105.30</td></tr>
<tr><td>Customer list cleanup and deduplication, 3,200 rows (hours)</td><td>6.5</td><td>$28.00</td><td>$182.00</td></tr>
<tr><td>Missing data lookups from vendor websites (hours)</td><td>2</td><td>$28.00</td><td>$56.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,097.30</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 12, 2026 (net 14)</strong></td><td><strong>$1,097.30</strong></td></tr>
</tbody></table>
<p>The math: 620 x $0.65 = $403.00; 540 x $0.65 = $351.00; 30% of $351.00 = $105.30; 6.5 hours x $28 = $182.00; 2 hours x $28 = $56.00. Total $1,097.30. The notes might say: "Accuracy standard: 99% field-level accuracy on a random 5% sample. Errors in our entry reported within 10 days are corrected free. Errors caused by illegible source documents are flagged, not billed as rework."</p>

<h2>How to create a data entry invoice step by step</h2>
<ol>
<li><strong>Agree on the unit, rate, accuracy standard and turnaround</strong> in a short contract or email.</li>
<li><strong>Log each batch</strong> with date, unit count and any issues (missing pages, unreadable scans).</li>
<li><strong>Open the <a href="/invoice-generator">free invoice generator</a></strong> and enter your details and the client's.</li>
<li><strong>Add one line per batch</strong> with the quantity and unit price, plus separate lines for rush, cleanup or research hours.</li>
<li><strong>Add the accuracy note</strong> and payment terms, with a specific due date.</li>
<li><strong>Attach your batch log or <a href="/blog/timesheet-template">timesheet</a></strong>, download the PDF and send it.</li>
</ol>

<h2>Accuracy terms: what to put in writing</h2>
<p>Accuracy is where data entry disputes start. A client finds five errors in 2,000 records and asks for a discount on the whole job. Clear terms avoid this:</p>
<ul>
<li><strong>Measurable standard:</strong> for example 99% or 99.5% accuracy at the field level.</li>
<li><strong>How it is checked:</strong> a random sample, double-entry verification or spot checks by the client.</li>
<li><strong>Correction window:</strong> errors reported within, say, 10 days are fixed at no charge.</li>
<li><strong>Exclusions:</strong> illegible sources, wrong source data and later changes to instructions.</li>
<li><strong>Remedy:</strong> correction rather than refunds, unless accuracy falls below the agreed standard.</li>
</ul>
<p>Put the full terms in your agreement and a one-line summary in the invoice notes. Our <a href="/blog/invoice-notes-examples">invoice notes examples</a> include short wording you can adapt.</p>

<h2>Weekly, per batch or retainer: how often to invoice data entry work</h2>
<p>Invoice frequency matters as much as pricing in data entry, because volumes can be large and work is easy to underestimate. A comparison of the usual options:</p>
<table><thead><tr><th>Billing rhythm</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Per batch on delivery</td><td>One-off projects and new clients</td><td>Clients holding batches without paying</td></tr>
<tr><td>Weekly</td><td>Ongoing hourly or per-record work</td><td>More admin, so use a saved template</td></tr>
<tr><td>Biweekly or monthly</td><td>Trusted long-term clients</td><td>A month of unpaid work if things go wrong</td></tr>
<tr><td>Monthly retainer in advance</td><td>Steady admin support with a volume cap</td><td>Define overage pricing above the cap</td></tr>
</tbody></table>
<p>For a retainer, state the included volume (for example up to 2,000 records or 30 hours a month) and the rate for anything above it. Our <a href="/blog/retainer-invoice">retainer invoice guide</a> shows how to show the monthly fee and overages on one invoice. If you bill hourly, round to the nearest quarter hour and say so in the notes. Whichever rhythm you choose, set clear <a href="/blog/invoice-payment-terms">invoice payment terms</a> such as net 7 or net 14, and keep the same invoice number sequence for every client so your records stay tidy at tax time.</p>

<h2>Common data entry invoice mistakes</h2>
<ul>
<li><strong>"Data entry, 20 hours" with no detail.</strong> Name the batches and the units.</li>
<li><strong>No unit definition.</strong> If a "record" is not defined, a 40-field record and a 5-field record cost the same.</li>
<li><strong>Free cleanup.</strong> Deduplication and formatting are separate tasks; bill them.</li>
<li><strong>Monthly invoicing on large volumes.</strong> A month of unpaid work is a big risk. Invoice weekly or per batch.</li>
<li><strong>Promising 100% accuracy.</strong> No human or system is perfect; promise a measurable standard.</li>
<li><strong>No count evidence.</strong> Attach the log so the client can verify quantities.</li>
</ul>

<h2>Taxes and paperwork for data entry freelancers</h2>
<p>US-based independent contractors usually provide a W-9 to clients, and clients that pay $2,000 or more for services in 2026 generally file Form 1099-NEC (the threshold was $600 for payments through 2025). If you work through marketplaces, read our guides on <a href="/blog/upwork-fees">Upwork fees</a> and <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a>. This is general information, not tax advice.</p>

<p>A clear data entry invoice template, backed by a batch log and accuracy terms, gets approved quickly and protects you from rework disputes. Create yours with the <a href="/invoice-generator">free invoice generator</a>: no sign-up is needed, and it builds a PDF in your browser that you can download and send right away.</p>
`,
  },
  {
    slug: "transcription-invoice-template",
    title: "Transcription Invoice Template: Per Audio Minute Billing",
    description:
      "Transcription invoice template priced per audio minute, with rush fees, verbatim and timestamp add-ons, a worked example with totals and mistakes to avoid.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "data-entry-invoice-template",
      "translation-invoice-template",
      "podcast-editing-invoice-template",
    ],
    faqs: [
      {
        q: "Why do transcriptionists charge per audio minute?",
        a: "Per audio minute pricing is the industry standard because it is easy for clients to calculate from the length of their file and fair for both sides across a typical mix of recordings. It is simpler than per word or per hour billing. Difficult audio, multiple speakers, heavy accents or technical terminology are handled with surcharges rather than by changing the unit.",
      },
      {
        q: "What is the difference between clean verbatim and full verbatim?",
        a: "Clean verbatim removes filler words, false starts and stutters to produce readable text, and is the default for most business, podcast and interview work. Full or true verbatim captures every utterance, including ums, pauses and sounds, and is often needed for legal, research or qualitative analysis. Full verbatim takes longer, so many transcriptionists charge a surcharge per audio minute for it.",
      },
      {
        q: "How do I round audio minutes on a transcription invoice?",
        a: "Most transcriptionists round each file up to the nearest full minute, and some set a minimum charge per file, such as 5 or 10 minutes. State your rounding rule in your price list and on the invoice notes. Listing the exact file length next to the billed minutes, for example 42:17 billed as 43 minutes, shows the client exactly how the count was reached.",
      },
      {
        q: "How much extra should I charge for rush transcription?",
        a: "Rush fees are commonly tiered by turnaround, such as standard delivery within a few business days, a surcharge for 48-hour delivery and a higher surcharge for 24-hour or same-day delivery. Percentage or per-minute surcharges are both common. Publish your tiers so clients can choose, and show the rush charge as its own line rather than hiding it in the base rate.",
      },
      {
        q: "Do I charge extra for timestamps and speaker labels?",
        a: "Speaker identification is often included for up to two speakers, with a surcharge for more. Timestamps at set intervals, such as every 2 minutes or at each speaker change, are commonly an add-on charged per audio minute. Some legal and research clients need specific formatting. Price these extras in advance and list each as a separate invoice line.",
      },
      {
        q: "What payment terms should a transcriptionist use?",
        a: "For individual clients and small one-off jobs, payment upfront or on delivery is common, since files are easy to take and not pay for. Businesses, law firms and universities often pay on net 30 and may need a PO or vendor registration. For large projects, a deposit followed by batch invoices limits your risk if a client stops paying.",
      },
      {
        q: "Can I use AI transcription and still invoice for human transcription?",
        a: "Only if you are honest about your process. Many transcriptionists use automatic speech recognition for a first draft and then edit it thoroughly, which is fine if the client accepts it and the final accuracy meets the agreed standard. Do not describe AI-only output as human transcription. Some clients ban uploading their audio to third-party tools, so check confidentiality terms first.",
      },
      {
        q: "How do I handle confidential recordings?",
        a: "Agree on secure file transfer, avoid storing recordings on shared or personal cloud accounts without permission, and delete files after delivery unless the client asks you to keep them. Medical and legal recordings may carry extra obligations such as HIPAA business associate terms in the US. Sign any confidentiality agreement the client provides before accepting files.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A transcription invoice template is an invoice for transcriptionists that lists each audio or video file with its length, bills by the audio minute at your base rate, adds surcharges for rush turnaround, difficult audio, full verbatim, extra speakers or timestamps, and shows the total and payment terms. Per audio minute is the standard billing unit.</p>

<p>Transcription invoices look simple, but small details cause most of the follow-up questions: how minutes were rounded, why one file cost more than another, and what the rush fee was. A good template answers those questions on the page. This guide covers per-minute pricing, common surcharges, what to include on the invoice, a worked example and mistakes to avoid.</p>

<h2>What is a transcription invoice?</h2>
<p>A transcription invoice is a payment request from a transcriptionist or transcription service to a client for converting recorded speech into text. Clients include podcasters, researchers, journalists, law firms, market research agencies and businesses recording meetings. It works like a <a href="/blog/translation-invoice-template">translation invoice</a> in that the unit of work is measurable, but the unit here is audio time rather than words.</p>

<h2>How transcription pricing works</h2>
<p>Most transcriptionists bill per audio minute, meaning the length of the recording, not the time spent typing. Typing one minute of clear audio can take several minutes of work, and difficult audio takes much longer, which is why surcharges exist. For a market reference point, as of October 2026, large services publish their rates openly: for example, <a href="https://www.rev.com/pricing">Rev's pricing page</a> lists human transcription at about $1.99 per audio minute. Freelancers set their own rates, and specialist legal, medical or research transcription often costs more.</p>
<table><thead><tr><th>Charge</th><th>Typical basis</th><th>Notes</th></tr></thead><tbody>
<tr><td>Base transcription</td><td>Per audio minute</td><td>Clean verbatim, clear audio, 1 to 2 speakers</td></tr>
<tr><td>Rush turnaround</td><td>Per minute surcharge or percentage</td><td>Tiered, for example 48-hour and 24-hour</td></tr>
<tr><td>Difficult audio</td><td>Per minute surcharge</td><td>Background noise, poor phone line, heavy crosstalk</td></tr>
<tr><td>Full verbatim</td><td>Per minute surcharge</td><td>Fillers, pauses, non-verbal sounds included</td></tr>
<tr><td>Extra speakers</td><td>Per minute surcharge</td><td>Often from 3 or more speakers</td></tr>
<tr><td>Timestamps</td><td>Per minute add-on</td><td>Interval or at each speaker change</td></tr>
<tr><td>Technical or specialist terms</td><td>Higher base rate</td><td>Medical, legal, academic</td></tr>
<tr><td>Minimum charge</td><td>Per file or per order</td><td>Covers admin on very short files</td></tr>
</tbody></table>
<p>Publish these tiers on a simple <a href="/blog/price-list-template">price list</a> so clients can pick what they need when they order, rather than discovering surcharges on the invoice.</p>

<h2>What to include on a transcription invoice template</h2>
<ul>
<li>Your name or business, contact details and tax ID if registered</li>
<li>Client name, organization, billing contact and any PO or project number</li>
<li>Invoice number, issue date and calendar due date</li>
<li>One line per file: file name, exact length (mm:ss) and billed minutes</li>
<li>Transcription style: clean verbatim or full verbatim</li>
<li>Surcharges as separate lines: rush, difficult audio, extra speakers, timestamps</li>
<li>Rounding rule and minimum charge in the notes</li>
<li>Payment methods and late fee terms if your agreement allows them</li>
</ul>

<h2>Transcription invoice example with real numbers</h2>
<p>A freelance transcriptionist transcribes four research interviews for a university project. Rates are illustrative: $1.75 per audio minute base, $0.75 per minute for 48-hour rush, $0.50 per minute for difficult audio, $0.40 per minute for timestamps every 2 minutes. Each file is rounded up to the next full minute.</p>
<table><thead><tr><th>Description</th><th>Qty (min)</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Interview_01.mp3 (42:17), clean verbatim, 2 speakers</td><td>43</td><td>$1.75</td><td>$75.25</td></tr>
<tr><td>Interview_02.mp3 (38:05), clean verbatim, 2 speakers</td><td>39</td><td>$1.75</td><td>$68.25</td></tr>
<tr><td>Interview_03.m4a (51:40), clean verbatim, 2 speakers</td><td>52</td><td>$1.75</td><td>$91.00</td></tr>
<tr><td>Interview_04.m4a (29:12), clean verbatim, 2 speakers</td><td>30</td><td>$1.75</td><td>$52.50</td></tr>
<tr><td>Difficult audio surcharge, Interview_03 (cafe background noise)</td><td>52</td><td>$0.50</td><td>$26.00</td></tr>
<tr><td>Rush surcharge, 48-hour delivery, Interview_04</td><td>30</td><td>$0.75</td><td>$22.50</td></tr>
<tr><td>Timestamps every 2 minutes, all files</td><td>164</td><td>$0.40</td><td>$65.60</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$401.10</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 28, 2026 (net 30, PO 22-0918)</strong></td><td><strong>$401.10</strong></td></tr>
</tbody></table>
<p>Check the math: total billed minutes are 43 + 39 + 52 + 30 = 164. Base: 164 x $1.75 = $287.00. Surcharges: $26.00 + $22.50 + $65.60 = $114.10. Total $401.10. Showing the exact file length beside the billed minutes makes the rounding transparent.</p>

<h2>How to create a transcription invoice in 6 steps</h2>
<ol>
<li><strong>Confirm the order details:</strong> files, style (clean or full verbatim), speakers, timestamps, turnaround and rate.</li>
<li><strong>Record each file's exact length</strong> when you receive it, and note audio problems right away so surcharges are agreed before you start.</li>
<li><strong>Open the <a href="/invoice-generator">free invoice generator</a></strong> and enter your details and the client's, including any PO number.</li>
<li><strong>Add a line per file</strong> with billed minutes and base rate.</li>
<li><strong>Add surcharge lines</strong> for rush, difficult audio, extra speakers or timestamps. Our <a href="/blog/rush-fee">rush fee guide</a> has wording ideas.</li>
<li><strong>Add notes</strong> on rounding and corrections, set the due date and download the PDF.</li>
</ol>

<h2>Turnaround tiers and rush fees</h2>
<p>Turnaround is one of the easiest ways to add value. A simple tier structure might look like this (illustrative):</p>
<table><thead><tr><th>Turnaround</th><th>Surcharge</th><th>Example on 60 minutes at $1.75 base</th></tr></thead><tbody>
<tr><td>Standard (5 business days)</td><td>None</td><td>$105.00</td></tr>
<tr><td>Expedited (48 hours)</td><td>+$0.75 per minute</td><td>$150.00</td></tr>
<tr><td>Rush (24 hours)</td><td>+$1.25 per minute</td><td>$180.00</td></tr>
</tbody></table>
<p>Define when the clock starts (when the file is received and confirmed playable) and whether weekends count. If a client sends a file at 11 pm on Friday asking for 24-hour rush, your terms should answer whether that is due Saturday night or Monday.</p>

<h2>How long does transcription take, and why it affects your rate</h2>
<p>A per-minute rate only works if it reflects your real speed. Clear audio with two speakers might take an experienced transcriptionist roughly three to four minutes of work per audio minute, while noisy group recordings can take far longer. Those ratios are rough rules of thumb, not a standard, so measure your own:</p>
<ol>
<li>Pick three recent files of different difficulty.</li>
<li>Time yourself from first listen to final proofread for each.</li>
<li>Divide working minutes by audio minutes to get your ratio.</li>
<li>Multiply your ratio by your target hourly rate divided by 60.</li>
</ol>
<p>For example, if your ratio on clear audio is 4 and you want $30 per hour, your base rate is 4 x ($30 / 60) = $2.00 per audio minute. If difficult files run at a ratio of 6, the same target needs $3.00 per minute, which is why a difficult audio surcharge of $1.00 per minute makes sense. Revisit your rates each year, and compare them with what you charge for related work like <a href="/blog/translation-rates">translation</a>, since many linguists offer both. If you are building a language services business, our guide on <a href="/blog/how-to-become-a-freelance-translator">how to become a freelance translator</a> covers finding agency clients.</p>

<h2>Common transcription invoice mistakes</h2>
<ul>
<li><strong>Billing typing time instead of audio time.</strong> Clients expect audio minutes; keep your effort in your rate.</li>
<li><strong>Surprise surcharges.</strong> Flag difficult audio when you receive the file, not on the invoice.</li>
<li><strong>No rounding rule.</strong> Write "rounded up to the next full minute per file" in the notes.</li>
<li><strong>Delivering everything before payment from a new client.</strong> Ask for payment upfront or deliver in batches.</li>
<li><strong>Missing file names.</strong> Researchers and law firms match invoices to file lists.</li>
<li><strong>Forgetting the PO.</strong> Universities and corporates often cannot pay without it.</li>
</ul>

<h2>Taxes, records and confidentiality</h2>
<p>US independent contractors may receive Form 1099-NEC from business clients that pay $2,000 or more in 2026 under the new threshold. Track all income, including small client payments, and set money aside each month; our guide on <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> helps. If you transcribe medical recordings, ask whether the client needs a HIPAA business associate agreement. This is general information, not tax or legal advice. If you also handle forms and spreadsheets, our <a href="/blog/data-entry-invoice-template">data entry invoice template</a> covers per-record billing, and podcasters ordering transcripts alongside edits may prefer a combined <a href="/blog/podcast-editing-invoice-template">podcast editing invoice</a>.</p>

<p>A transcription invoice template that shows file lengths, billed minutes and every surcharge gets paid without back-and-forth. Make yours with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up, and creates a PDF in your browser you can download and send immediately. You can also pick a layout from our <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "influencer-invoice-template",
    title: "Influencer Invoice Template for Brand Deals (2026)",
    description:
      "Influencer invoice template for brand deals: list sponsored posts, deliverables, usage rights and exclusivity, plus an FTC disclosure note and worked example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "ugc-creator-invoice",
      "social-media-manager-invoice-template",
      "model-invoice-template",
    ],
    faqs: [
      {
        q: "Do influencers need to send invoices to brands?",
        a: "Yes, in most cases. Brands and agencies usually need an invoice to release payment, record the expense and meet their own accounting rules. Some influencer platforms generate payouts automatically, but direct brand deals almost always require you to send one. The invoice also documents the deliverables, usage rights and dates, which helps if there is any disagreement later.",
      },
      {
        q: "What is the difference between an influencer invoice and a UGC invoice?",
        a: "An influencer invoice bills for content posted to your own audience, so it covers sponsored posts, stories, reach and your channel. A UGC invoice bills for content created for the brand to post or run as ads, without posting it yourself. Usage rights matter in both, but UGC deals are usually priced mainly on content and licensing, while influencer deals also price your audience and engagement.",
      },
      {
        q: "How do influencers charge for usage rights?",
        a: "Usage rights let the brand reuse your content beyond your own post, such as on its website, organic social channels or in paid ads. Creators commonly charge extra for usage, often priced by duration (30, 60 or 90 days, or longer) and by type, with paid ad usage and whitelisting costing more. List usage as a separate line on the invoice with its start and end dates.",
      },
      {
        q: "What is whitelisting on an influencer invoice?",
        a: "Whitelisting, also called creator licensing or partnership ads, is when the brand runs paid ads through your account or handle, so the ad appears to come from you. It uses your credibility and requires granting account permissions, so it is priced separately from the post itself, usually monthly. State the platform, duration and spend limits on the invoice.",
      },
      {
        q: "Do influencers have to disclose sponsored posts?",
        a: "In the US, the FTC expects influencers to clearly disclose any material connection with a brand, such as payment or free products, in a way followers will notice, for example 'ad' or 'sponsored' at the start of a caption or said aloud in a video. Platform branded content tools help but may not be enough alone. Rules differ in other countries. This is general information, not legal advice.",
      },
      {
        q: "Should I charge a deposit for a brand deal?",
        a: "For larger campaigns or new brands, asking for 50% upfront and 50% after posting is common and reasonable. Many established brands and agencies prefer to pay after content goes live, often on net 30 or longer. If you accept full payment after posting, make sure the contract has a clear due date and a late payment clause.",
      },
      {
        q: "How do I invoice for gifted products?",
        a: "If a brand only sends free products, you usually do not invoice anything, but the products still have value. In the US, the IRS generally treats products received in exchange for content as income at fair market value, so keep a record. If the deal includes both products and a fee, invoice the fee and mention the products in the notes.",
      },
      {
        q: "What payment terms do brands use for influencers?",
        a: "Net 30 is common for brand and agency deals, and some large companies use net 45, net 60 or longer. Payments may also depend on the agency receiving money from the brand first. Negotiate terms before you sign, put the exact due date on the invoice, and ask whether the brand needs a W-9, vendor form or PO number to process payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An influencer invoice template is an invoice for content creators that bills a brand or agency for sponsored content: each deliverable (posts, reels, stories, videos), the campaign and posting dates, usage rights and whitelisting, exclusivity, any deposit received and the balance due. It should also reference the agreed disclosure requirements and payment terms.</p>

<p>Brand deals often start in direct messages and end in an accounts payable inbox. Somewhere in between, the details get fuzzy: how many stories, how long the brand can reuse the video, whether you agreed not to work with competitors. Your invoice is where those details are written down one last time before payment. This guide explains what an influencer invoice includes, how to price the parts of a deal, a full example invoice and mistakes that delay payment.</p>

<h2>What is an influencer invoice?</h2>
<p>An influencer invoice is a bill from a creator to a brand, agency or talent platform for sponsored content published on the creator's channels. It differs from a <a href="/blog/ugc-creator-invoice">UGC creator invoice</a>, where you make content for the brand to post, and from a <a href="/blog/social-media-manager-invoice-template">social media manager invoice</a>, where you run the brand's accounts. Influencer deals combine three things: the content, your audience and the rights to reuse that content.</p>

<h2>What should an influencer invoice template include?</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Creator details</td><td>Legal name or business name, handle, email, address, tax ID if registered</td></tr>
<tr><td>Client details</td><td>Brand or agency name, campaign contact, billing email, PO number</td></tr>
<tr><td>Invoice number and dates</td><td>INF-2026-031, issued Oct 29, 2026, due Nov 28, 2026</td></tr>
<tr><td>Campaign name</td><td>"Fall Skincare Launch"</td></tr>
<tr><td>Deliverables</td><td>1 Instagram Reel, 3 Stories, 1 TikTok video, with live dates and links</td></tr>
<tr><td>Usage rights</td><td>Organic reuse on brand channels, 90 days; paid ads, 30 days</td></tr>
<tr><td>Whitelisting</td><td>Partnership ads via creator handle, 30 days</td></tr>
<tr><td>Exclusivity</td><td>No competing skincare brands for 30 days after posting</td></tr>
<tr><td>Credits</td><td>Deposit received</td></tr>
<tr><td>Disclosure note</td><td>Content disclosed as #ad per FTC guidance and campaign brief</td></tr>
</tbody></table>
<p>Including live post links is one of the easiest ways to speed up payment: the person approving the invoice can click and confirm delivery in seconds.</p>

<h2>How influencers price brand deals</h2>
<p>There is no official rate card, and pricing varies with platform, niche, audience size, engagement and the brand's goals. Most creators build a quote from parts:</p>
<ul>
<li><strong>Content fee:</strong> the base price per deliverable, reflecting production effort and audience reach.</li>
<li><strong>Usage rights:</strong> the right for the brand to repost or run your content, priced by type and duration.</li>
<li><strong>Whitelisting or partnership ads:</strong> paid ads running through your handle, usually priced monthly.</li>
<li><strong>Exclusivity:</strong> compensation for turning down competing brands during a set window.</li>
<li><strong>Rush or extra revisions:</strong> for tight timelines or rounds beyond the brief.</li>
</ul>
<p>For help setting the base fee, our guide to <a href="/blog/value-based-pricing">value-based pricing</a> is useful, since brand deals are often priced on expected results rather than hours. If you also negotiate with agencies, read <a href="/blog/how-to-negotiate-freelance-rates">how to negotiate freelance rates</a>.</p>

<h2>Influencer invoice example with real numbers</h2>
<p>A lifestyle creator completes a campaign for a skincare brand through an agency. The agreed fee was $3,450 with 50% upfront. All figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Instagram Reel, 45 sec, live Oct 21, 2026 (link in notes)</td><td>1</td><td>$1,400.00</td><td>$1,400.00</td></tr>
<tr><td>Instagram Stories with link sticker, live Oct 21 to 23</td><td>3</td><td>$200.00</td><td>$600.00</td></tr>
<tr><td>TikTok video, 30 sec, live Oct 24, 2026</td><td>1</td><td>$900.00</td><td>$900.00</td></tr>
<tr><td>Usage: organic reuse on brand channels, 90 days from Oct 21, 2026</td><td>1</td><td>$300.00</td><td>$300.00</td></tr>
<tr><td>Whitelisting / partnership ads, Instagram, 30 days</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Less: 50% deposit received Oct 3, 2026 (INF-2026-027)</td><td>1</td><td>-$1,725.00</td><td>-$1,725.00</td></tr>
<tr><td colspan="3"><strong>Balance due by Nov 23, 2026 (net 30 from posting)</strong></td><td><strong>$1,725.00</strong></td></tr>
</tbody></table>
<p>The math: $1,400 + $600 + $900 + $300 + $250 = $3,450. Half of that, $1,725, was paid as a deposit, leaving $1,725. The notes could read: "Exclusivity: no competing skincare brand partnerships Oct 21 to Nov 20, 2026. All content disclosed with #ad and the platform's paid partnership label. Usage beyond the dates above requires a new license."</p>

<h2>How to send an influencer invoice step by step</h2>
<ol>
<li><strong>Get the agreement in writing.</strong> Even a confirmed email listing deliverables, dates, usage, exclusivity, fee and terms is better than DMs alone. Our <a href="/blog/freelance-contract-template">freelance contract template</a> covers the basics.</li>
<li><strong>Send a <a href="/blog/deposit-invoice">deposit invoice</a></strong> if you agreed one, before you create content.</li>
<li><strong>Track live dates and links</strong> as each deliverable goes up.</li>
<li><strong>Build the final invoice</strong> in the <a href="/invoice-generator">free invoice generator</a> with one line per deliverable plus usage, whitelisting and exclusivity lines.</li>
<li><strong>Credit the deposit</strong>, add the PO number, due date and payment details.</li>
<li><strong>Send it to the billing contact</strong>, not just your campaign manager, and copy the manager.</li>
<li><strong>Follow up on the due date.</strong> Our guide on <a href="/blog/how-to-ask-for-payment">how to ask for payment</a> has polite templates.</li>
</ol>

<h2>FTC disclosure and why it belongs in your paperwork</h2>
<p>In the US, the FTC's Endorsement Guides (16 CFR Part 255, updated in 2023) say that a material connection between an endorser and a brand, such as payment or free products, should be disclosed clearly and conspicuously. The FTC's plain-language guide <a href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers">Disclosures 101 for Social Media Influencers</a> recommends simple terms like "ad," "advertisement" or "sponsored," placed where followers will see them, and saying the disclosure in video content too. It also notes that platform disclosure tools may not be sufficient on their own.</p>
<p>Your invoice is not a legal disclosure, but a short note confirming that content was disclosed per the brief shows you met your side of the agreement and helps both parties keep good records. Other countries have their own rules, such as the UK's ASA and CMA guidance. This is general information, not legal advice.</p>

<h2>Agency deals, platforms and payment timing</h2>
<p>Many brand deals run through a talent agency, a marketing agency or an influencer platform rather than the brand itself. That changes who you invoice and when you get paid:</p>
<table><thead><tr><th>Deal type</th><th>Who you invoice</th><th>Typical timing</th></tr></thead><tbody>
<tr><td>Direct with brand</td><td>The brand's accounts payable</td><td>Deposit plus net 30 after posting is common</td></tr>
<tr><td>Through a marketing agency</td><td>The agency</td><td>Net 30 to net 60; check for pay-when-paid clauses</td></tr>
<tr><td>Through your talent manager</td><td>Often the manager invoices for you</td><td>Manager pays you after deducting commission</td></tr>
<tr><td>Influencer marketplace or platform</td><td>Usually no invoice; platform pays out</td><td>Per platform rules and payout schedule</td></tr>
</tbody></table>
<p>If an agency's contract says it pays only after the brand pays it, ask for a long-stop date, such as 60 days after posting, so your payment cannot drift indefinitely. Long terms are increasingly common with large brands; our guide on <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> explains how to negotiate them or price them in. If a payment is very late, a polite escalation sequence usually works better than public complaints.</p>

<h2>Common influencer invoice mistakes</h2>
<ul>
<li><strong>One line for the whole deal.</strong> "Campaign, $3,450" invites questions; itemize deliverables and rights.</li>
<li><strong>Undated usage.</strong> Without start and end dates, usage can quietly become permanent.</li>
<li><strong>Free whitelisting.</strong> Paid ads through your handle are worth more than the post; price them.</li>
<li><strong>Ignoring exclusivity.</strong> If you turn down competitors, that has a cost.</li>
<li><strong>Sending only to the campaign manager.</strong> Accounts payable needs it to pay you.</li>
<li><strong>No W-9 ready.</strong> US brands often need one before the first payment.</li>
<li><strong>Forgetting gifted product records.</strong> Keep a log of products received for tax purposes.</li>
</ul>

<h2>Taxes for influencers</h2>
<p>In the US, sponsorship income is generally self-employment income. A brand or agency that pays you $2,000 or more for services in 2026 generally files Form 1099-NEC, and payments through payment apps or marketplaces may be reported on Form 1099-K instead; see our guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a>. Products received in exchange for content can also count as income. Keep every invoice and set aside money for quarterly estimated taxes. This is general information, not tax advice.</p>

<p>A clear influencer invoice template that itemizes deliverables, usage, whitelisting and exclusivity gets approved faster and protects the value of your content. Create one with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, nothing to install, and you can download a professional PDF built in your browser in minutes.</p>
`,
  },
  {
    slug: "model-invoice-template",
    title: "Model Invoice Template: Day Rates, Usage and Commission",
    description:
      "Model invoice template for freelance and agency-booked models: day and half-day rates, usage fees, overtime, travel and agency commission, with an example.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "photography-invoice-template",
      "influencer-invoice-template",
      "makeup-artist-invoice-template",
    ],
    faqs: [
      {
        q: "Does a model with an agency need to send invoices?",
        a: "Usually not to the client. When an agency books you, the agency typically invoices the client, collects payment, deducts its commission and pays you, then gives you a statement. You may still need to invoice your agency in some arrangements, or invoice clients directly for jobs you book yourself if your contract allows it. Check your management agreement before billing anyone directly.",
      },
      {
        q: "What is a typical agency commission for models?",
        a: "Commission rates vary by country and contract, but in New York the Fashion Workers Act, effective June 19, 2025, caps the commission a model management company can take at 20% of the model's compensation and limits other deductions. Many agencies also charge clients a separate service fee on top of the model's rate. Read your contract carefully. This is general information, not legal advice.",
      },
      {
        q: "What is the difference between a day rate and a half-day rate?",
        a: "A day rate typically covers a set number of working hours, often 8, and a half-day rate covers about 4 hours. Half-day rates are usually more than half the day rate, because the model cannot easily book other work around a short shoot. Define the hours in the booking confirmation and charge overtime per hour beyond them.",
      },
      {
        q: "How do models charge for usage?",
        a: "Usage fees pay for how and where the images or video are used, such as e-commerce, social media, print, out-of-home advertising or TV, plus the territory and duration. A shoot for a brand's online store costs less than a national billboard campaign. List usage as its own line on the invoice with media, territory and dates so renewals can be billed later.",
      },
      {
        q: "Can models charge for fittings and travel?",
        a: "Yes. Fittings are commonly billed at an hourly rate or a portion of the day rate, and travel time, airfare, accommodation and per diems are billed for jobs outside the model's home city. Agree on these in the booking confirmation. On the invoice, list fittings, travel days and expenses as separate lines and keep receipts for any reimbursed costs.",
      },
      {
        q: "When should a freelance model get paid?",
        a: "Freelance models often ask for a deposit or full payment before the shoot for new or small clients, and net 30 for established brands. Agency-booked jobs are paid according to the agency's schedule; New York's Fashion Workers Act requires agencies to pay models within 45 days of the job. Put the agreed due date clearly on every invoice.",
      },
      {
        q: "What is a cancellation fee for a model booking?",
        a: "A cancellation fee compensates a model if a confirmed booking is canceled at short notice, since the model has turned down other work. A common structure is a percentage of the fee that rises as the shoot date gets closer, up to the full fee for same-day cancellations. Write the policy into the booking confirmation and invoice it as its own line.",
      },
      {
        q: "Are freelance models employees or contractors?",
        a: "It depends on the facts of the working relationship and local law. Many freelance models are treated as independent contractors and receive a 1099 in the US, but some arrangements, such as certain union or long-term bookings, may be employment. If you are unsure, check IRS guidance on worker classification or speak to an adviser. This is general information, not tax advice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A model invoice template is an invoice for fashion, commercial and fitness models that bills the shoot at a day or half-day rate, adds usage fees for where and how long the images will be used, lists overtime, fittings, travel and expenses, and, for agency-booked jobs, shows the agency commission and the net amount. Freelance models invoice clients directly.</p>

<p>Modeling fees are made of more parts than most clients expect. The rate for the time on set is only one piece; the usage of the images, overtime, fittings and travel all add up. If you book work yourself, your invoice needs to show each part. If you work with an agency, you need to understand how the agency's invoice, its commission and your payout fit together. This guide covers both, with a worked example and common mistakes.</p>

<h2>What is a model invoice?</h2>
<p>A model invoice is a payment request for modeling services: photo shoots, video and commercial shoots, runway shows, fittings, showroom work and promotional events. Freelance models send it directly to clients such as brands, photographers and production companies. Agency-represented models usually do not invoice clients; the agency bills the client and pays the model after deducting commission. Models working with a <a href="/blog/photography-invoice-template">photographer</a> or <a href="/blog/makeup-artist-invoice-template">makeup artist</a> on the same shoot each bill separately unless a producer collects everything.</p>

<h2>How models are paid: freelance vs agency bookings</h2>
<table><thead><tr><th>Booking type</th><th>Who invoices the client</th><th>How the model is paid</th></tr></thead><tbody>
<tr><td>Freelance, booked directly</td><td>The model</td><td>Client pays model directly per invoice terms</td></tr>
<tr><td>Agency-booked</td><td>The agency</td><td>Agency collects, deducts commission, pays model with a statement</td></tr>
<tr><td>Mother agency plus local agency</td><td>Local agency</td><td>Commissions may be split between agencies per contracts</td></tr>
<tr><td>Influencer-style content deal</td><td>The model or creator</td><td>Brand pays per deliverable; see our <a href="/blog/influencer-invoice-template">influencer invoice template</a></td></tr>
</tbody></table>
<p>In New York, the Fashion Workers Act, which took effect June 19, 2025, caps model management company commissions at 20% of the model's compensation, bars most deductions beyond the agreed commission and advanced items, and requires payment to models within 45 days of the job. Other states and countries have different rules. The <a href="https://dol.ny.gov/fashion-workers-act">New York State Department of Labor</a> publishes guidance. This is general information, not legal advice.</p>

<h2>What to include on a model invoice template</h2>
<ul>
<li><strong>Your details:</strong> legal name or business name, contact info, tax ID if registered.</li>
<li><strong>Client details:</strong> brand or production company, producer, billing contact, PO or job number.</li>
<li><strong>Invoice number, date and due date.</strong></li>
<li><strong>Job details:</strong> shoot date, location, photographer or production, call time and wrap time.</li>
<li><strong>Rate line:</strong> day or half-day rate, or hourly for short jobs.</li>
<li><strong>Overtime:</strong> hours beyond the booked time, at the agreed hourly rate.</li>
<li><strong>Usage:</strong> media, territory and duration of image or footage use.</li>
<li><strong>Fittings, travel days and expenses</strong>, with receipts.</li>
<li><strong>Cancellation or weather-hold fees</strong> if applicable.</li>
<li><strong>Payment terms and methods.</strong></li>
</ul>

<h2>Model invoice example with real numbers</h2>
<p>A freelance commercial model books a one-day e-commerce and social shoot directly with an apparel brand, plus a fitting the day before. Rates are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Day rate, e-commerce and social shoot, Oct 22, 2026 (8 hrs, call 9:00 am)</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Overtime beyond 8 hours (wrap 6:30 pm)</td><td>1.5</td><td>$150.00</td><td>$225.00</td></tr>
<tr><td>Fitting, Oct 21, 2026 (hours)</td><td>2</td><td>$100.00</td><td>$200.00</td></tr>
<tr><td>Usage: brand website, e-commerce and organic social, US, 1 year from Nov 1, 2026</td><td>1</td><td>$800.00</td><td>$800.00</td></tr>
<tr><td>Mileage to studio and back (round trip, miles)</td><td>48</td><td>$0.70</td><td>$33.60</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$2,458.60</strong></td></tr>
<tr><td colspan="3">Sales tax</td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Total due by Nov 28, 2026 (net 30)</strong></td><td><strong>$2,458.60</strong></td></tr>
</tbody></table>
<p>The math: $1,200 + $225 (1.5 x $150) + $200 (2 x $100) + $800 + $33.60 (48 x $0.70) = $2,458.60. The mileage rate shown is illustrative; agree it with the client in advance.</p>

<h3>The same job booked through an agency</h3>
<p>If an agency had booked the same work with total model fees of $2,425 (excluding mileage), and its contract took a 20% commission from the model, the model's statement would show $2,425 less $485 commission, or $1,940, plus reimbursed expenses. The agency might also bill the client a separate service fee on top; that is between the agency and client and should not reduce the model's pay.</p>

<h2>How to create a model invoice step by step</h2>
<ol>
<li><strong>Confirm the booking in writing:</strong> date, hours, rate, usage, overtime rate, fittings, travel and cancellation terms.</li>
<li><strong>Record call and wrap times</strong> on the day, ideally confirmed by the producer before you leave.</li>
<li><strong>Open the <a href="/invoice-generator">free invoice generator</a></strong> and add your details and the client's, with the job or PO number.</li>
<li><strong>Add separate lines</strong> for the rate, overtime, fittings, usage, travel and expenses.</li>
<li><strong>Write the usage grant</strong> in the notes: media, territory, start and end dates.</li>
<li><strong>Set the due date</strong>, download the PDF and send it the same day or the next morning.</li>
</ol>

<h2>Day rates, half-day rates and usage explained</h2>
<table><thead><tr><th>Term</th><th>Typical meaning</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>Day rate</td><td>Usually up to 8 working hours</td><td>State hours booked and call time</td></tr>
<tr><td>Half-day rate</td><td>About 4 hours, priced above half the day rate</td><td>State the window and overtime rate</td></tr>
<tr><td>Hourly rate</td><td>Short jobs, fittings, events</td><td>Often has a minimum, such as 2 hours</td></tr>
<tr><td>Overtime</td><td>Time beyond booked hours</td><td>Bill in agreed increments, such as 30 minutes</td></tr>
<tr><td>Usage or buyout</td><td>Rights to use images or footage</td><td>Media, territory, duration on a separate line</td></tr>
<tr><td>Weather or hold fee</td><td>Paid for holding a date that is postponed</td><td>Reference the booking terms</td></tr>
</tbody></table>
<p>Usage is where models most often lose money. A brand that pays for e-commerce use and later puts the image on a billboard should pay for that new use. Keeping usage dates on every invoice makes this easy to spot and bill, similar to how <a href="/blog/voice-over-invoice-template">voice over artists invoice usage</a>.</p>

<h2>How to bill travel days, per diems and expenses</h2>
<p>Out-of-town jobs add costs that should never come out of your fee. Agree in the booking confirmation whether the client books flights and hotels directly or reimburses you, and what travel days pay. A common approach is a travel day billed at half the day rate, plus a daily per diem for meals. When you invoice:</p>
<ul>
<li>List each travel day as its own line with the date and route.</li>
<li>Bill per diems as days multiplied by the agreed rate.</li>
<li>List reimbursable expenses (taxis, baggage fees, parking) at cost with receipts attached.</li>
<li>Do not add markup on reimbursements unless the client agreed to it.</li>
</ul>
<p>Our guide on <a href="/blog/how-to-bill-for-travel-time">how to bill for travel time</a> explains common rates and wording, and the <a href="/blog/mileage-invoice">mileage invoice guide</a> covers local driving. Keep a simple log of call times, wrap times and expenses on your phone during each job; it makes the invoice quick to build and easy to defend if a producer questions overtime.</p>

<h2>Common model invoice mistakes</h2>
<ul>
<li><strong>No usage terms.</strong> Without them, clients may treat images as unlimited.</li>
<li><strong>Unrecorded overtime.</strong> Get wrap time confirmed on the day.</li>
<li><strong>Free fittings.</strong> Fittings take time and travel; bill them.</li>
<li><strong>Missing cancellation terms.</strong> A canceled day can mean lost income; see our guide to <a href="/blog/cancellation-fee-invoice">cancellation fee invoices</a>.</li>
<li><strong>Invoicing a client directly while under exclusive management.</strong> Check your agency contract first.</li>
<li><strong>Not reviewing agency statements.</strong> Compare the gross fee, commission and deductions against your contract.</li>
</ul>

<h2>Taxes and records for models</h2>
<p>Freelance models in the US are often independent contractors. Clients that pay $2,000 or more for services in 2026 generally file Form 1099-NEC, and an agency that pays you may issue the form instead of the brand. Keep your invoices, agency statements and receipts for expenses such as travel, portfolio and fitness costs that may be deductible if they meet IRS rules. Our guide on <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> explains the difference. This is general information, not tax advice.</p>

<p>A complete model invoice template that separates the day rate, overtime, usage and expenses gets paid faster and protects the value of your image. Create one with our <a href="/invoice-generator">free invoice generator</a>: it is free, requires no sign-up, and builds a PDF in your browser that you can download and send right after the shoot.</p>
`,
  },
  {
    slug: "artist-commission-invoice-template",
    title: "Art Commission Invoice Template (Deposits + Example)",
    description:
      "Art commission invoice template for artists: take deposits, bill sketch approvals, add shipping and state copyright terms, with a worked example and checklist.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["illustrator-invoice-template", "illustration-pricing", "deposit-invoice"],
    faqs: [
      {
        q: "How much deposit should I take for an art commission?",
        a: "Many artists ask for 50% upfront before starting, and some ask for full payment upfront for small digital commissions or new clients. For large paintings or murals, a three-stage split such as one third at start, one third at sketch approval and one third before delivery is common. State whether the deposit is refundable, and under what conditions, in your terms.",
      },
      {
        q: "Is an art commission deposit refundable?",
        a: "That depends on your terms, so write them down. A common approach is that the deposit is non-refundable once work has started, because it covers your time and materials, while a full refund is offered if you cancel or cannot complete the work. Some artists refund part of the deposit if the client cancels before the sketch stage. Consumer protection laws vary by location.",
      },
      {
        q: "Does buying a commissioned artwork give the client the copyright?",
        a: "Not automatically in the US. The artist generally keeps the copyright in a commissioned artwork unless it is transferred in a written document signed by the artist, or the work qualifies as a work made for hire under a signed agreement. Buyers typically get the physical piece or file for personal use. State this in your terms and on the invoice. This is general information, not legal advice.",
      },
      {
        q: "How many revisions should an art commission include?",
        a: "A common approach is two rounds of changes at the sketch stage and minor tweaks only at the final stage, since major changes after painting or rendering are costly. Explain this before the client pays the deposit. If they want more changes, quote an extra fee per round or an hourly rate and show it as a separate line on the invoice.",
      },
      {
        q: "Should I charge for shipping on physical artwork?",
        a: "Yes. Shipping, insurance, protective packaging and crating for large or fragile works can be significant, so list them as separate lines or quote them in advance. International shipping may also involve customs paperwork and duties, which are usually paid by the buyer. Agree on carrier, insurance value and who bears the risk of loss or damage in transit.",
      },
      {
        q: "Do I need to charge sales tax on art commissions?",
        a: "In the US, sales of physical artwork are often taxable in states with a sales tax, while purely digital art and services may be treated differently depending on the state. Shipping charges can be taxable in some states too. Check your state revenue department's rules and register if required. This is general information, not tax advice.",
      },
      {
        q: "What if a commission client disappears after paying a deposit?",
        a: "Your terms should say how long you will hold the project, for example 30 days without a response to a sketch, after which the commission is considered canceled and the deposit is kept to cover work done. Send a written reminder before closing it. Clear timelines protect you from projects that sit unfinished in your queue for months.",
      },
      {
        q: "Can I use commissioned art in my portfolio?",
        a: "Usually yes, if you keep the copyright and your terms say you may display the work in your portfolio and on social media. Some clients, such as those commissioning private portraits or confidential business work, may ask you not to share it. Address portfolio use in your terms and, if a client pays for privacy, list it as an add-on.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An art commission invoice template is an invoice for artists creating custom work for a client. It describes the piece (size, medium, subject), splits payment into a deposit and later stages such as sketch approval and completion, lists extras like revisions, framing and shipping, and states copyright and usage terms, refund rules and the balance due.</p>

<p>Commissions are personal, and that is exactly why money can get awkward. A client describes a dream portrait, pays a deposit, then asks for a third round of changes and wants it shipped overseas next week. A clear art commission invoice sets the stages, the extras and the rights in writing, so you can keep the relationship friendly while getting paid fairly. This guide covers what to include, a worked example, steps to follow and common mistakes.</p>

<h2>What is an art commission invoice?</h2>
<p>An art commission invoice is a payment request from an artist to a person or business that ordered a custom artwork: a painted portrait, a pet portrait, a digital character illustration, a mural, a sculpture or a tattoo design. It is closely related to an <a href="/blog/illustrator-invoice-template">illustrator invoice</a>, but commissions from individuals usually involve smaller budgets, more emotional stakes, physical shipping and simpler rights (personal use) rather than commercial licensing.</p>

<h2>What to include on an art commission invoice template</h2>
<table><thead><tr><th>Field</th><th>What to write</th></tr></thead><tbody>
<tr><td>Artist details</td><td>Name or studio, email, website or shop, address, tax ID if registered</td></tr>
<tr><td>Client details</td><td>Name, email, shipping address</td></tr>
<tr><td>Invoice number and dates</td><td>Unique number, issue date, due date for this stage</td></tr>
<tr><td>Artwork description</td><td>Subject, size, medium, number of figures, background, color or monochrome</td></tr>
<tr><td>Payment stage</td><td>Deposit, sketch approval payment or final balance</td></tr>
<tr><td>Extras</td><td>Additional figures, extra revisions, rush, framing, commercial use</td></tr>
<tr><td>Shipping</td><td>Carrier, packaging, insurance, customs paperwork</td></tr>
<tr><td>Credits</td><td>Deposit and earlier payments received</td></tr>
<tr><td>Terms</td><td>Refund policy, revision limits, timeline, copyright and personal use</td></tr>
</tbody></table>
<p>Many artists also publish a short terms of service page. Linking it in the invoice notes, alongside the key points, keeps the invoice short while making the full terms easy to find.</p>

<h2>How to structure deposits and payment stages</h2>
<table><thead><tr><th>Commission size</th><th>Common payment structure</th><th>Why</th></tr></thead><tbody>
<tr><td>Small digital piece</td><td>100% upfront</td><td>Low value, quick turnaround, reduces no-shows</td></tr>
<tr><td>Medium digital or traditional piece</td><td>50% deposit, 50% before final file or shipping</td><td>Balances risk for both sides</td></tr>
<tr><td>Large painting or sculpture</td><td>One third at start, one third at sketch or underpainting, one third before delivery</td><td>Covers materials and long timelines</td></tr>
<tr><td>Mural or installation</td><td>Deposit, progress payments, balance on completion</td><td>Mirrors construction-style <a href="/blog/milestone-payments">milestone payments</a></td></tr>
</tbody></table>
<p>Whatever the split, send each stage as its own invoice and credit earlier payments on the final one. Our guides to <a href="/blog/deposit-invoice">deposit invoices</a> and <a href="/blog/partial-payment-invoice">partial payment invoices</a> show the layout.</p>

<h2>Art commission invoice example with real numbers</h2>
<p>A painter accepts a commission for a 16 x 20 inch oil portrait of a couple and their dog. The base price is $1,200 for one figure, plus $300 per additional figure. The client also wants a frame and insured shipping. Terms are 50% deposit, 50% before shipping. This is the final invoice; figures are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oil portrait, 16 x 20 in on stretched canvas, 1 figure base</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Additional figures (second person, dog)</td><td>2</td><td>$300.00</td><td>$600.00</td></tr>
<tr><td>Extra revision round at sketch stage (third round)</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Floater frame, black, fitted</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Packaging and insured ground shipping (declared value $2,000)</td><td>1</td><td>$85.00</td><td>$85.00</td></tr>
<tr><td colspan="3">Sales tax (illustrative 7% on artwork, frame and shipping, $2,100)</td><td>$147.00</td></tr>
<tr><td colspan="3">Less: 50% deposit received Sep 15, 2026 (on $1,800 base price)</td><td>-$900.00</td></tr>
<tr><td colspan="3"><strong>Balance due before shipping, by Nov 5, 2026</strong></td><td><strong>$1,347.00</strong></td></tr>
</tbody></table>
<p>The math: $1,200 + $600 + $75 + $140 + $85 = $2,100. Sales tax at an illustrative 7% is $147, for a total of $2,247. The deposit of $900 (50% of the $1,800 artwork price) leaves $1,347. Whether shipping and the revision fee are taxable depends on your state, so check before copying this structure; our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the arithmetic.</p>
<p>The notes might read: "Copyright remains with the artist. The client receives the original painting for personal display. The artist may show images of the work in a portfolio and on social media. Deposit is non-refundable once the sketch has been delivered."</p>

<h2>How to invoice an art commission step by step</h2>
<ol>
<li><strong>Confirm the brief and price</strong>: subject, size, medium, figures, background, deadline, revisions and extras.</li>
<li><strong>Share your terms</strong> and get the client's agreement before payment. A short <a href="/blog/service-agreement-template">service agreement</a> works for larger pieces.</li>
<li><strong>Send the deposit invoice</strong> from the <a href="/invoice-generator">free invoice generator</a> and wait for payment before you start.</li>
<li><strong>Share the sketch</strong> and get written approval; note any extra revision rounds.</li>
<li><strong>Complete the work</strong> and send progress photos if your terms include them.</li>
<li><strong>Send the final invoice</strong> with extras, shipping, tax and the deposit credit.</li>
<li><strong>Ship or deliver files after the balance clears</strong>, then send a <a href="/blog/payment-receipt-template">payment receipt</a> for the client's records.</li>
</ol>

<h2>Copyright, personal use and commercial use</h2>
<p>Buying a commissioned painting or digital file is not the same as buying the copyright. In the US, copyright belongs to the artist unless transferred in a signed writing, and a commission only counts as a work made for hire in limited categories with a signed agreement, as the <a href="https://www.copyright.gov/circs/circ30.pdf">U.S. Copyright Office explains in Circular 30</a>. In practice:</p>
<ul>
<li><strong>Personal use</strong> (display at home, a phone wallpaper, a profile picture) is usually included in the price.</li>
<li><strong>Commercial use</strong> (merchandise, book covers, a business logo, streaming branding) should be a separate, higher-priced line.</li>
<li><strong>Full copyright transfer</strong> is uncommon for personal commissions and should be priced accordingly and put in writing.</li>
</ul>
<p>For commercial pricing guidance, see our <a href="/blog/illustration-pricing">illustration pricing guide</a>. This is general information, not legal advice.</p>

<h2>How to price an art commission before you invoice</h2>
<p>Commission prices usually combine time, materials and the value of your style. A simple formula many artists use as a starting point is hours times hourly rate plus materials, then adjusted for demand. For the portrait above, an illustrative breakdown might be 20 hours at $55 ($1,100) plus $100 of canvas, paint and varnish, giving the $1,200 one-figure base price, with extra figures priced by the added hours. If you consistently have a waiting list, raising prices is usually the right response.</p>
<p>Publish a clear price sheet with base prices by size and medium, the cost of extra figures and backgrounds, and your commercial use fee. A tidy <a href="/blog/price-list-template">price list template</a> helps buyers choose before they message you, which cuts down on back-and-forth. Selling through marketplaces adds fees that come out of your price, so check them before you quote; if you sell on Etsy, see our <a href="/blog/etsy-invoice">Etsy invoice guide</a>.</p>

<h2>Common art commission invoice mistakes</h2>
<ul>
<li><strong>Starting before the deposit clears.</strong> It is the simplest protection you have.</li>
<li><strong>Unclear refund terms.</strong> Decide in advance what happens if either side cancels.</li>
<li><strong>Unlimited revisions.</strong> Set a limit at the sketch stage and price extra rounds.</li>
<li><strong>Underestimating shipping.</strong> Quote packaging and insurance before the client pays.</li>
<li><strong>Ignoring sales tax</strong> on physical art sold in a taxable state.</li>
<li><strong>Silence on copyright.</strong> A one-line rights note prevents surprise merchandise.</li>
<li><strong>Shipping before final payment</strong> to a new client.</li>
</ul>

<h2>Art commission invoice checklist</h2>
<ul>
<li>Artwork described by subject, size and medium</li>
<li>Payment stage and earlier payments credited</li>
<li>Extras itemized: figures, revisions, frame, rush</li>
<li>Shipping, insurance and tax on separate lines</li>
<li>Refund, revision and timeline terms summarized</li>
<li>Copyright and personal use note</li>
<li>Due date and accepted payment methods</li>
</ul>

<p>A clear art commission invoice template lets you focus on the art while deposits, extras and rights are handled in writing. Build yours with our <a href="/invoice-generator">free invoice generator</a>: no sign-up needed, it creates the PDF in your browser, and you can download and send it to your client in a couple of minutes.</p>
`,
  },
];
