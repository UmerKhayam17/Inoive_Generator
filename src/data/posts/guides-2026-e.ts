import type { PostDraft } from "../blog";

export const GUIDES_2026_E_POSTS: PostDraft[] = [
  {
    slug: "how-to-send-an-invoice-by-text",
    title: "How to Send an Invoice by Text Message (2026 Guide)",
    description:
      "How to send an invoice by text message: PDF vs payment link, iPhone and Android steps, message wording, TCPA consent basics and mistakes that delay payment.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-send-an-invoice",
      "how-to-make-an-invoice-on-your-phone",
      "add-payment-link-to-invoice",
    ],
    faqs: [
      {
        q: "Is it professional to send an invoice by text?",
        a: "Yes, for many small businesses it is now normal, especially in home services, beauty, tutoring, events and other local work where customers already text you to book. Business clients with accounts payable teams usually still expect email, because invoices need to be forwarded and filed. A good rule is to text when the customer has been texting you, and send email as well whenever the client is a company.",
      },
      {
        q: "Can I text a PDF invoice?",
        a: "Yes. On most phones you can attach a PDF to a message, and it will usually arrive intact between modern smartphones using iMessage, RCS or similar chat features. Over basic SMS and MMS, attachments may be compressed, converted or blocked, depending on the carrier and phone. Sending a secure link to the PDF or a payment page is often more reliable than attaching the file itself.",
      },
      {
        q: "Do I need permission to text invoices to customers?",
        a: "You should have the customer's consent to text them, and the best evidence is that they gave you their mobile number for billing or job updates. Invoices and receipts are generally treated as informational rather than marketing messages, which carry stricter consent rules under the TCPA. Keep records of how you got each number, honor opt-out requests promptly and keep promotional texts separate from billing.",
      },
      {
        q: "What should an invoice text message say?",
        a: "Identify your business, then give the invoice number, amount, due date and how to pay, in that order. For example: Hi Jen, this is Ace Plumbing. Invoice 1043 for $285.00 is due Nov 14. View and pay here: [link]. Reply with any questions. Keep it under about 300 characters, avoid all-caps or urgent language and never include full card or bank account numbers.",
      },
      {
        q: "How do I send invoices by text from accounting software?",
        a: "Many invoicing and field service apps include a text or SMS option that sends a link to the online invoice. You enter the customer's mobile number, choose text as the delivery method and the app sends a message with your business name and a payment link. Business texting from software usually goes through numbers registered with carriers, so the provider handles that registration for you.",
      },
      {
        q: "Why didn't my customer receive my invoice text?",
        a: "Common causes are a wrong number, a landline number, carrier spam filters blocking links from unregistered business numbers, a customer who has blocked unknown senders, or an attachment too large for MMS. Ask the customer to confirm receipt, send from a number they have already saved, use a well-known link domain rather than a shortener and follow up by email if the text does not arrive.",
      },
      {
        q: "Is texting bank details for an invoice safe?",
        a: "It is risky. Invoice fraud often works by sending fake bank details that look like they came from a real supplier, and texts are easy to spoof. A safer approach is to send a link to a secure payment page or put your bank details on the PDF invoice, and tell customers you will never change bank details by text. Ask them to call a known number to confirm any change.",
      },
      {
        q: "Can I send payment reminders by text?",
        a: "Yes, and text reminders are often read faster than emails. Keep them polite, short and factual, include the invoice number, amount and a payment link, and send them during reasonable daytime hours in the customer's time zone. Stop texting if the customer asks you to, and switch to email or a call. Many businesses use one text reminder on the due date and email for later stages.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To send an invoice by text message, create the invoice as a PDF or online invoice, then text the customer a short message with your business name, the invoice number, amount, due date and either the PDF attached or a secure payment link. Only text customers who gave you their number for billing, and keep a copy of every invoice you send.</p>

<p>Customers who book by text often prefer to pay by text too. A text gets read within minutes, while an email can sit unopened for days. This guide shows how to send an invoice by text message step by step on iPhone and Android, when to attach a PDF and when to send a link, what to write, the consent rules that apply to business texts in the US, and the mistakes that stop invoices from being delivered or paid.</p>

<h2>Can you send an invoice by text message?</h2>

<p>Yes. There is no legal requirement that an invoice arrive by mail or email. What matters is that the invoice contains the right details, such as your business name, invoice number, date, description, amount and payment terms, and that the customer receives it. Text works well for:</p>

<ul>
<li>Home services: plumbing, cleaning, lawn care, pest control, handyman work.</li>
<li>Personal services: hair, nails, massage, pet care, tutoring, coaching.</li>
<li>Events and one-off jobs: photographers, DJs, caterers, movers.</li>
<li>Repeat customers who already text you about bookings.</li>
</ul>

<p>For business clients, text is a useful extra, not a replacement. Their accounts payable team needs an invoice they can forward and file, so email the PDF too. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> covers email, mail and portals.</p>

<h2>PDF attachment or payment link: which is better?</h2>

<table>
<thead><tr><th>Option</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>PDF attached to text</td><td>You attach the invoice PDF in your messaging app</td><td>Customer has the actual document; no account needed</td><td>May be compressed or blocked over basic SMS/MMS; harder to pay in one tap</td></tr>
<tr><td>Link to online invoice</td><td>Your invoicing app sends a link to a hosted invoice</td><td>Small message; customer can view and pay in one place</td><td>Links from unknown numbers can trigger spam filters or suspicion</td></tr>
<tr><td>Payment link only</td><td>A link to a card or bank payment page, such as from your processor</td><td>Fastest way to get paid</td><td>Customer may still need a proper invoice for records</td></tr>
<tr><td>Screenshot of invoice</td><td>An image of the invoice</td><td>Displays instantly</td><td>Not a good record; hard to read; avoid for anything over a small amount</td></tr>
</tbody>
</table>

<p>The best option for most small businesses is a short text with a payment link, plus the PDF attached or sent by email. If you are new to payment links, see <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</p>

<h2>How to send an invoice by text on iPhone</h2>

<ol>
<li><strong>Create the invoice.</strong> Fill it in using our <a href="/invoice-generator">free invoice generator</a> in Safari and download the PDF. It saves to the Files app, usually in Downloads.</li>
<li><strong>Open Messages</strong> and start a conversation with the customer.</li>
<li><strong>Tap the plus (+) button</strong>, then choose the option to attach a file or document, and pick the PDF from Files. You can also open the PDF in Files, tap Share and choose Messages.</li>
<li><strong>Type your message</strong> with the invoice number, amount, due date and how to pay.</li>
<li><strong>Send</strong>, and check it shows as delivered. If the customer uses Android, confirm they can open it.</li>
</ol>

<h2>How to send an invoice by text on Android</h2>

<ol>
<li><strong>Create and download the PDF.</strong> It usually lands in the Downloads folder or the Files app.</li>
<li><strong>Open your messaging app</strong>, such as Google Messages, and open the customer's conversation.</li>
<li><strong>Tap the attachment or plus icon</strong>, choose Files, and select the invoice PDF. Or open the PDF in Files, tap Share and pick Messages.</li>
<li><strong>Add the message text</strong> and send.</li>
<li><strong>Check delivery.</strong> If the attachment fails, send a link instead or follow up by email.</li>
</ol>

<p>Our guide on <a href="/blog/how-to-make-an-invoice-on-your-phone">how to make an invoice on your phone</a> covers creating the invoice itself on a mobile device.</p>

<h2>What should an invoice text message say?</h2>

<p>Lead with who you are, then the facts. Customers delete texts that look like scams, and an unknown number with a link is the classic scam pattern. These templates keep it clear:</p>

<h3>New invoice</h3>
<p><em>Hi [Name], this is [Your name] from [Business]. Thanks for choosing us today. Invoice [number] for $[amount] is due [date]. View and pay here: [link]. Reply with any questions.</em></p>

<h3>Invoice with PDF attached</h3>
<p><em>Hi [Name], [Business] here. Attached is invoice [number] for $[amount], due [date]. You can pay by [methods]. Thank you!</em></p>

<h3>Deposit request</h3>
<p><em>Hi [Name], to confirm your booking for [date], a deposit of $[amount] is due by [date]. Pay securely here: [link]. [Business]</em></p>

<h3>Friendly reminder</h3>
<p><em>Hi [Name], a quick reminder from [Business] that invoice [number] for $[amount] is due today. Pay here: [link]. If you have already paid, thank you and please ignore this.</em></p>

<h3>Overdue reminder</h3>
<p><em>Hi [Name], invoice [number] for $[amount] from [Business] was due on [date] and is still open. Could you let me know when to expect payment? Pay here: [link]</em></p>

<p>For longer reminder sequences, our <a href="/blog/payment-reminder-emails">payment reminder templates</a> and <a href="/blog/dunning-process">dunning process guide</a> show how to escalate politely. When payment arrives, send a short <a href="/blog/thank-you-for-your-payment-message">thank you for your payment message</a>.</p>

<h2>Consent and TCPA basics for invoice texts</h2>

<p>In the US, the Telephone Consumer Protection Act (TCPA) and Federal Communications Commission rules govern many business texts. The <a href="https://www.fcc.gov/general/telemarketing-and-robocalls" target="_blank" rel="noopener noreferrer">FCC's telemarketing and robocall rules</a> are the primary source. The key points for invoices:</p>

<ul>
<li><strong>Marketing vs informational messages.</strong> Promotional texts sent using automated systems generally require prior express written consent. Informational messages such as invoices, receipts and appointment reminders have a lower bar, generally prior express consent, which is often shown by the customer giving you their number for that purpose.</li>
<li><strong>Keep records.</strong> Note when and how each customer gave you their mobile number and for what purpose, for example on a booking form that says you will text job updates and invoices.</li>
<li><strong>Honor opt-outs.</strong> FCC rules adopted in 2024 let consumers revoke consent by any reasonable means, such as replying STOP or "no more texts", and require businesses to honor the request promptly. Stop texting and switch to email.</li>
<li><strong>Do not mix in marketing.</strong> Adding a promotion to an invoice text can turn it into a marketing message with stricter consent rules.</li>
<li><strong>Check state law.</strong> Some states have their own telemarketing and texting laws with extra requirements.</li>
</ul>

<p>Texting a customer one-to-one from your own phone is different from sending texts in bulk through software. If you use an app to send invoice texts from a business number, US carriers require business senders to register through a process known as 10DLC (10-digit long code) registration. Most invoicing and texting platforms handle this for you, sometimes for a small fee. Unregistered business traffic is increasingly filtered or blocked. This section is general information, not legal advice.</p>

<h2>Worked example: texting an invoice after a service call</h2>

<p>Marco, a handyman, finishes a job on November 4, 2026: mounting a TV, replacing a faucet and patching drywall. He creates the invoice on his phone and texts it while still in the driveway.</p>

<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>TV wall mounting, 65 in, includes bracket install</td><td>1</td><td>$140.00</td><td>$140.00</td></tr>
<tr><td>Kitchen faucet replacement (labor)</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Faucet supplied by customer</td><td>1</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Drywall patch and paint touch-up</td><td>1.5 hr</td><td>$75.00</td><td>$112.50</td></tr>
<tr><td>Materials (patch kit, paint sample)</td><td>1</td><td>$18.40</td><td>$18.40</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$390.90</strong></td></tr>
</tbody>
</table>

<p>His text: <em>Hi Jen, this is Marco from Marco's Home Repair. Thanks for having me today. Invoice 2026-118 for $390.90 is due Nov 11. Pay by card here: [link], or Zelle to the number on the invoice. PDF attached.</em></p>

<p>Jen pays by card that evening. Marco's next step is to mark the invoice paid and text a one-line receipt. Sending the invoice before leaving the job is one of the simplest ways to get paid faster, because the work is fresh in the customer's mind. If you accept app payments, see <a href="/blog/venmo-zelle-cash-app-invoice">invoicing with Venmo, Zelle and Cash App</a>.</p>

<h2>How to make invoice texts trustworthy</h2>

<ul>
<li><strong>Text from a number the customer knows.</strong> The number you used to arrange the job is best.</li>
<li><strong>Start with your name and business.</strong> Every time, even with repeat customers.</li>
<li><strong>Use recognizable links.</strong> Link shorteners from unknown numbers look like phishing. A link from your payment processor or invoicing app is better.</li>
<li><strong>Never ask for card numbers by text.</strong> Use a secure payment page or <a href="/blog/tap-to-pay-on-iphone">tap to pay</a> in person.</li>
<li><strong>Do not change bank details by text.</strong> Fraudsters impersonate suppliers this way; our guide to <a href="/blog/invoice-scams">invoice scams</a> explains the common patterns.</li>
<li><strong>Add a QR code to the PDF.</strong> A <a href="/blog/qr-code-on-invoice">QR code on the invoice</a> gives customers another safe way to reach your payment page.</li>
</ul>

<h2>Common mistakes when sending invoices by text</h2>

<ul>
<li><strong>Texting only a screenshot.</strong> The customer needs a real invoice for their records.</li>
<li><strong>Leaving out the invoice number or due date.</strong> "Here's your bill, $390" is not enough.</li>
<li><strong>Texting at night or very early.</strong> Send during normal daytime hours in the customer's time zone.</li>
<li><strong>Not following up when a text goes unanswered.</strong> Delivery is not guaranteed; email the invoice too.</li>
<li><strong>Using a personal number with no record.</strong> Save invoices and messages so you can show what was sent and when.</li>
<li><strong>Mass-texting invoices from a personal phone.</strong> Use a proper platform with carrier registration if you send many texts.</li>
<li><strong>Ignoring STOP replies.</strong> Opt-outs must be honored.</li>
</ul>

<h2>Should you take payment in person instead?</h2>

<p>For jobs where you are with the customer at the end, the fastest option is often to take payment on the spot and text the receipt instead of the invoice. Card readers and phone-based tap to pay let you collect immediately, and the invoice becomes a paid record rather than a request. Texting an invoice is best when:</p>

<ul>
<li>The customer is not present when the work finishes (pet sitting, cleaning, property maintenance).</li>
<li>The final amount depends on materials or time you calculate after the job.</li>
<li>The customer needs to check the invoice with a partner or employer before paying.</li>
<li>You bill regular customers monthly rather than per visit.</li>
</ul>

<h2>How to track text invoices and follow up</h2>

<p>Texts are easy to send and easy to lose. Keep a simple log, even a spreadsheet, with the invoice number, customer, amount, date sent, channel and payment status. Check it twice a week. If a texted invoice is unpaid on its due date, send one text reminder; if it is still unpaid a week later, call or email. Our <a href="/blog/overdue-invoice">overdue invoice guide</a> covers what to do when reminders do not work.</p>

<p>If you use invoicing software that sends texts, it usually records delivery and payment for you. If you text from your own phone, save the PDF in a folder named by month, and do not rely on your message history as your only copy, because phones get replaced and chats get deleted.</p>

<h2>Text, email or WhatsApp?</h2>

<table>
<thead><tr><th>Channel</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Text (SMS, MMS, iMessage, RCS)</td><td>Local US customers, fast payment after a job</td><td>Attachment limits, spam filters, consent rules</td></tr>
<tr><td>Email</td><td>Business clients, larger invoices, record keeping</td><td>Slower to be read; spam folders</td></tr>
<tr><td>WhatsApp</td><td>International clients and countries where WhatsApp is the main messenger</td><td>Business vs personal accounts; data privacy</td></tr>
</tbody>
</table>

<p>If your customers use WhatsApp more than SMS, see our step-by-step guide on <a href="/blog/how-to-send-invoice-on-whatsapp">how to send an invoice on WhatsApp</a>. Whichever channel you use, a clear subject or first line matters; our list of <a href="/blog/invoice-email-subject-lines">invoice email subject lines</a> has wording you can adapt for texts too.</p>

<p>Texting invoices is quick, personal and effective when the message is clear and the customer expects it. Create the invoice on your phone or computer with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and downloads a PDF in your browser that you can attach to a text or email in seconds.</p>
`,
  },
  {
    slug: "how-to-send-invoice-on-whatsapp",
    title: "How to Send an Invoice on WhatsApp (Step by Step)",
    description:
      "How to send an invoice on WhatsApp: share a PDF, use WhatsApp Business tools, add payment links by country, message templates and privacy tips for small firms.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-send-an-invoice-by-text",
      "add-payment-link-to-invoice",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "Can I send an invoice on WhatsApp?",
        a: "Yes. You can send an invoice on WhatsApp as a PDF document in any chat, from either the regular WhatsApp app or the free WhatsApp Business app. The PDF arrives as a file the customer can open, save or forward to their accountant. Add a short message with the invoice number, amount, due date and how to pay, and keep a copy of the invoice in your own records.",
      },
      {
        q: "Does WhatsApp Business have an invoice feature?",
        a: "The WhatsApp Business app does not include a full invoicing tool with numbering, tax and accounting records. It offers business tools that help, such as a business profile, catalog, quick replies, labels and greeting messages. Some markets also have order and payment features. Most businesses create the invoice elsewhere, such as an invoice generator or accounting software, and share the PDF or link on WhatsApp.",
      },
      {
        q: "Can customers pay an invoice inside WhatsApp?",
        a: "Only in some countries. Payments to businesses inside WhatsApp have been available mainly in India, using UPI, and Brazil, with availability in other markets limited or in pilots and subject to change. Elsewhere, including the US and UK, customers usually pay through a link you send, such as a card payment page, bank transfer details on the PDF or a local payment app. Check what is live in your country.",
      },
      {
        q: "Is it safe to send invoices on WhatsApp?",
        a: "WhatsApp messages are end-to-end encrypted between devices, which protects them in transit. The bigger risks are sending to the wrong contact, someone else accessing an unlocked phone, and fraudsters impersonating businesses. Confirm the customer's number, avoid sending full bank or card details in chat text, and tell customers you will never change bank details by WhatsApp message alone.",
      },
      {
        q: "Should I use WhatsApp Business or regular WhatsApp for invoices?",
        a: "Use WhatsApp Business if WhatsApp is a regular sales channel. It is free, keeps business chats separate from personal ones, shows a business profile with your hours and address, and offers quick replies and labels such as Unpaid and Paid. Regular WhatsApp works for occasional invoices, but customers cannot see business details and it is harder to stay organized as volumes grow.",
      },
      {
        q: "Can I send automated invoice messages on WhatsApp?",
        a: "Automated messages at scale require the WhatsApp Business Platform, often called the WhatsApp API, usually accessed through a provider such as an invoicing or customer messaging tool. Business-initiated messages use pre-approved templates, and Meta charges for some message types, so check current pricing. Small businesses usually start with the free WhatsApp Business app and move to the platform only when volume justifies it.",
      },
      {
        q: "What file format is best for a WhatsApp invoice?",
        a: "PDF is best. It keeps the layout, fonts and totals exactly as you designed them, opens on any phone and is accepted by accountants and tax authorities as a normal invoice copy. Avoid sending invoices as photos or screenshots, which are compressed, hard to read and poor records. Name the file clearly, such as Invoice-2026-118-ClientName.pdf, so the customer can find it later.",
      },
      {
        q: "Do I need customer consent to send invoices on WhatsApp?",
        a: "WhatsApp's own business policies expect businesses to message only people who have given their number and agreed to be contacted on WhatsApp, and to respect requests to stop. Data protection laws, such as GDPR in Europe, also apply to the personal data in your chats. In practice, ask customers if they would like invoices on WhatsApp, note their agreement and use email for anyone who prefers it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To send an invoice on WhatsApp, create the invoice as a PDF, open the customer's chat, tap the attachment icon, choose Document and select the PDF. Add a short message with the invoice number, amount, due date and a payment link or bank details. The free WhatsApp Business app adds labels, quick replies and a business profile.</p>

<p>In much of the world, WhatsApp is how customers talk to small businesses, from tailors in Lagos and tutors in Karachi to builders in Madrid and freelancers working with clients abroad. Sending invoices where the conversation already happens gets them opened and paid faster. This guide covers how to send an invoice on WhatsApp step by step, what WhatsApp Business adds, how payment links work in different countries, message templates, privacy, and common mistakes.</p>

<h2>Can you send an invoice through WhatsApp?</h2>

<p>Yes. WhatsApp lets you send documents, including PDFs, in any one-to-one or group chat. The customer receives the actual file and can open it, save it to their phone or forward it to their accountant. Legally, an invoice is defined by its content (seller and buyer details, invoice number, date, items, amounts, taxes and terms), not by how it is delivered, so a WhatsApp invoice is as valid as an emailed one in most countries. The exception is where a country requires invoices to be issued through a government e-invoicing system, in which case WhatsApp can carry a copy but not replace the official e-invoice. See our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> for countries with mandates.</p>

<h2>How to send an invoice on WhatsApp step by step</h2>

<ol>
<li><strong>Create the invoice.</strong> Use our <a href="/invoice-generator">free invoice generator</a> on your phone or computer and download the PDF.</li>
<li><strong>Check the details.</strong> Customer name, invoice number, due date, totals and payment instructions.</li>
<li><strong>Name the file clearly.</strong> For example Invoice-2026-118-AhmedTraders.pdf.</li>
<li><strong>Open the customer's chat</strong> in WhatsApp or WhatsApp Business.</li>
<li><strong>Tap the attachment icon</strong> (paperclip on Android, plus sign on iPhone) and choose Document.</li>
<li><strong>Select the PDF</strong> from Downloads or Files. Add a caption if your app version allows, or send a message straight after.</li>
<li><strong>Send your message</strong> with the invoice number, amount, due date and how to pay.</li>
<li><strong>Watch for the blue ticks</strong> (if the customer has read receipts on). If the message stays unread, follow up by phone or email.</li>
</ol>

<h3>Sending from WhatsApp Web or desktop</h3>

<p>If you create invoices on a computer, use WhatsApp Web or the desktop app. Open the chat, click the attachment icon, choose Document and pick the PDF from your computer. This avoids moving the file to your phone first.</p>

<h2>What does WhatsApp Business add?</h2>

<p>The <a href="https://business.whatsapp.com/products/business-app" target="_blank" rel="noopener noreferrer">WhatsApp Business app</a> is free and built for small businesses. It does not create invoices, but several features make invoicing easier:</p>

<table>
<thead><tr><th>Feature</th><th>How it helps with invoicing</th></tr></thead>
<tbody>
<tr><td>Business profile</td><td>Shows your business name, address, hours, email and website, so customers know the invoice is genuine</td></tr>
<tr><td>Labels</td><td>Tag chats as New order, Invoice sent, Unpaid, Paid to track receivables</td></tr>
<tr><td>Quick replies</td><td>Save invoice and reminder messages and insert them with a shortcut</td></tr>
<tr><td>Catalog</td><td>Lists products or services with prices, so quotes and invoices match what customers saw</td></tr>
<tr><td>Greeting and away messages</td><td>Tell customers when you will reply about billing questions</td></tr>
<tr><td>Orders and payments (some markets)</td><td>In some countries customers can place orders or pay inside WhatsApp</td></tr>
</tbody>
</table>

<p>For larger businesses sending many messages automatically, Meta offers the WhatsApp Business Platform (often called the API), usually accessed through an invoicing, CRM or messaging provider. It uses pre-approved message templates for business-initiated messages such as payment reminders, and Meta charges for some message types. Check Meta's current pricing for your country before building it into your process.</p>

<h2>How do customers pay a WhatsApp invoice?</h2>

<p>Payment options depend heavily on where you and your customer are. In-app payments to businesses are only available in a few markets, and availability changes, so check what is live in your country (as of October 2026).</p>

<table>
<thead><tr><th>Country or region</th><th>Common ways to get paid from a WhatsApp invoice</th></tr></thead>
<tbody>
<tr><td>India</td><td>UPI (including payments within WhatsApp where available), UPI QR code on the invoice, payment links from Indian gateways, bank transfer</td></tr>
<tr><td>Brazil</td><td>Pix (including payments within WhatsApp where available), Pix QR code, card payment links</td></tr>
<tr><td>Pakistan</td><td>Bank transfer (IBAN), Raast, mobile wallets, card payment links</td></tr>
<tr><td>UK and EU</td><td>Bank transfer (IBAN or sort code and account number), card payment links, pay by bank links</td></tr>
<tr><td>United States</td><td>Card or ACH payment links, Zelle, PayPal; WhatsApp in-app business payments are not offered</td></tr>
<tr><td>International clients</td><td>Payment links from processors that accept foreign cards, or multi-currency accounts</td></tr>
</tbody>
</table>

<p>A payment link in your WhatsApp message lets the customer pay in one tap. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>, and for Indian businesses with foreign clients, <a href="/blog/upi-international-payments">UPI international payments</a> and <a href="/blog/receive-money-from-abroad-india">how to receive money from abroad</a>. A <a href="/blog/qr-code-on-invoice">QR code on the invoice</a> also works well for customers who pay with banking apps.</p>

<h2>WhatsApp invoice message templates</h2>

<h3>New invoice</h3>
<p><em>Hi [Name], thank you for your order. Please find invoice [number] attached for [amount], due on [date]. You can pay here: [link], or by bank transfer using the details on the invoice. Let me know if you have any questions.</em></p>

<h3>Deposit or advance payment</h3>
<p><em>Hi [Name], to confirm your order we need an advance of [amount] (50%). Invoice [number] is attached. The balance of [amount] will be due on delivery.</em></p>

<h3>Due-date reminder</h3>
<p><em>Hi [Name], a friendly reminder that invoice [number] for [amount] is due today. Payment link: [link]. If you have already paid, thank you!</em></p>

<h3>Overdue reminder</h3>
<p><em>Hi [Name], invoice [number] for [amount] was due on [date] and is still showing as unpaid. Could you let me know when we can expect payment? I have attached the invoice again for convenience.</em></p>

<h3>Payment received</h3>
<p><em>Thank you [Name], we have received [amount] for invoice [number]. The paid invoice is attached for your records.</em></p>

<p>Save these as quick replies in WhatsApp Business. For more wording, see our <a href="/blog/payment-reminder-emails">payment reminder templates</a> and <a href="/blog/thank-you-for-your-payment-message">thank you for your payment messages</a>.</p>

<h2>Worked example: a tailoring business invoicing on WhatsApp</h2>

<p>Ayesha runs a small tailoring business and takes most orders on WhatsApp. A customer orders two outfits on November 2, 2026. Ayesha's catalog lists her prices, so the invoice matches what the customer saw.</p>

<table>
<thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Formal suit stitching, client fabric</td><td>2</td><td>Rs 6,500</td><td>Rs 13,000</td></tr>
<tr><td>Embroidery on neckline and sleeves</td><td>2</td><td>Rs 2,500</td><td>Rs 5,000</td></tr>
<tr><td>Express delivery (5 days)</td><td>1</td><td>Rs 1,500</td><td>Rs 1,500</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>Rs 19,500</strong></td></tr>
<tr><td colspan="3">Advance received (50%)</td><td>-Rs 9,750</td></tr>
<tr><td colspan="3"><strong>Balance due on delivery</strong></td><td><strong>Rs 9,750</strong></td></tr>
</tbody>
</table>

<p>She sends the PDF with a message giving the invoice number, the advance amount and her bank details on the PDF, labels the chat "Advance pending", and changes the label to "In progress" when the advance arrives. On delivery she sends the final invoice showing the balance, then a paid copy. Labels let her see at a glance which customers still owe money, a simple form of the receivables tracking explained in our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>.</p>

<h2>Privacy, security and record keeping</h2>

<ul>
<li><strong>Encryption:</strong> WhatsApp messages are end-to-end encrypted between devices, but anyone with access to an unlocked phone can see them. Use a screen lock.</li>
<li><strong>Personal data:</strong> invoices contain names, addresses and sometimes tax IDs. Data protection laws, such as GDPR in Europe, apply to how you store and share them.</li>
<li><strong>Bank detail fraud:</strong> fraudsters impersonate businesses on WhatsApp and send fake bank details. Put bank details on the PDF, not just in chat, and tell customers you never change them by message. Our guide to <a href="/blog/invoice-scams">invoice scams</a> covers warning signs.</li>
<li><strong>Records:</strong> chats can be deleted or lost with a phone. Keep the original invoice files and a sales record in your accounting system or spreadsheet, not only in WhatsApp.</li>
<li><strong>Consent:</strong> WhatsApp's business policies expect you to message people who agreed to be contacted on WhatsApp and to stop when asked.</li>
</ul>

<h2>Common mistakes when sending invoices on WhatsApp</h2>

<ul>
<li><strong>Sending a photo of a handwritten bill.</strong> Hard to read and a weak record. Send a proper PDF.</li>
<li><strong>Forgetting the invoice number.</strong> Customers with several orders need it to match payments.</li>
<li><strong>Using voice notes for amounts.</strong> Put every figure in writing.</li>
<li><strong>Sending to group chats.</strong> Invoices are private; send to the person responsible for payment.</li>
<li><strong>No follow-up when a message stays unread.</strong> Grey ticks for days mean you should call or email.</li>
<li><strong>Not keeping copies.</strong> WhatsApp is a delivery channel, not your accounting system.</li>
<li><strong>Mixing currencies without saying so.</strong> For foreign clients, state the currency clearly; see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</li>
</ul>

<h2>How to organize invoicing with WhatsApp Business labels</h2>

<p>Labels are the simplest receivables tracker many small businesses will ever need. Set up a short, fixed list and use it on every chat:</p>

<table>
<thead><tr><th>Label</th><th>When to apply it</th><th>Next action</th></tr></thead>
<tbody>
<tr><td>Quote sent</td><td>You sent prices or a quotation</td><td>Follow up after 2 to 3 days</td></tr>
<tr><td>Advance pending</td><td>Order confirmed, deposit requested</td><td>Start work when the deposit arrives</td></tr>
<tr><td>Invoice sent</td><td>Final invoice delivered</td><td>Remind on the due date</td></tr>
<tr><td>Overdue</td><td>Due date has passed</td><td>Send reminder, then call</td></tr>
<tr><td>Paid</td><td>Payment confirmed in your bank</td><td>Send paid invoice and thank you</td></tr>
</tbody>
</table>

<p>Once a week, filter chats by Invoice sent and Overdue and work through them. Keep the same invoice numbers in WhatsApp messages and in your spreadsheet or accounting software, so you can match each payment to the right invoice. An <a href="/tools/invoice-number-generator">invoice number generator</a> helps you settle on a consistent format if you do not have one yet.</p>

<h3>Quick replies worth saving</h3>

<ul>
<li><strong>/invoice:</strong> the new invoice message with your payment options.</li>
<li><strong>/bank:</strong> a reminder that bank details are on the PDF and never change by message.</li>
<li><strong>/due:</strong> the due-date reminder.</li>
<li><strong>/paid:</strong> the payment received message.</li>
</ul>

<h2>What about invoices for customers who order from your catalog?</h2>

<p>If customers browse your WhatsApp catalog and send you a cart, treat the cart as an order request, not an invoice. Confirm availability, delivery charges and any tax, then send a proper invoice PDF with an invoice number, so the customer has a document that matches what they actually pay. Keeping catalog prices up to date avoids the most common dispute: a customer pointing to an old price they saw in the catalog.</p>

<h2>Sending invoices to international clients on WhatsApp</h2>

<p>WhatsApp is often the main channel for freelancers and exporters working across borders. A few extra points apply:</p>

<ul>
<li><strong>State the currency on every amount</strong> (USD, GBP, EUR, PKR, INR), not just a symbol.</li>
<li><strong>Agree who pays transfer fees.</strong> Add a line such as "Bank charges for the sender's account" if that is the deal.</li>
<li><strong>Include the details your client's bank needs</strong>, such as SWIFT/BIC and IBAN, on the PDF.</li>
<li><strong>Mind time zones</strong> when sending reminders.</li>
<li><strong>Check tax rules</strong> on cross-border services in your country, such as zero-rating or reverse charge notes.</li>
</ul>

<h2>WhatsApp vs SMS vs email for invoices</h2>

<p>WhatsApp is usually the best channel where customers already use it daily and in cross-border work, because it is free over data and handles PDFs well. SMS reaches anyone with a phone and suits US customers who rarely use WhatsApp; see <a href="/blog/how-to-send-an-invoice-by-text">how to send an invoice by text</a>. Email remains the standard for companies with accounts payable teams. Many businesses send the invoice by email for records and a short WhatsApp message to make sure it is seen.</p>

<p>Sending invoices on WhatsApp is fast and familiar for customers, as long as you send a proper PDF, a clear message and a safe way to pay. Create that PDF with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and builds the PDF in your browser, ready to share in any WhatsApp chat.</p>
`,
  },
  {
    slug: "how-to-invoice-the-federal-government",
    title: "How to Invoice the Federal Government (IPP, WAWF, 2026)",
    description:
      "How to invoice the federal government in 2026: SAM.gov registration, IPP and PIEE/WAWF steps, proper invoice rules, Prompt Payment Act interest and an example.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["prompt-payment-act", "three-way-match", "e-invoicing-guide"],
    faqs: [
      {
        q: "How long does the federal government take to pay invoices?",
        a: "Under the Prompt Payment Act, the standard due date for most federal contracts is 30 days after the designated billing office receives a proper invoice, or 30 days after the government accepts the goods or services if that is later. Agencies are also encouraged to pay small business contractors faster where possible. If payment is late, interest is generally added automatically at the Treasury Prompt Payment rate.",
      },
      {
        q: "Does it cost money to use IPP or WAWF?",
        a: "No. Treasury states that the Invoice Processing Platform is provided at no charge to agencies and their vendors, and DoD's PIEE and WAWF are also free for contractors. SAM.gov registration is free too. Be cautious of companies that charge to register you in SAM or submit invoices on your behalf without making clear that the government systems themselves are free to use.",
      },
      {
        q: "What is the difference between IPP and WAWF?",
        a: "IPP, the Invoice Processing Platform, is a Treasury system used by many civilian agencies to receive purchase orders and invoices from vendors. WAWF, Wide Area Workflow, is the Department of Defense invoicing and receiving application inside the PIEE environment. Which one you use depends on the agency and on the invoicing clause in your contract, not on your choice. Some agencies use their own portals.",
      },
      {
        q: "Do I need a UEI to invoice the government?",
        a: "Yes, for prime contracts in almost all cases. The Unique Entity ID is assigned when you register your entity in SAM.gov, and it identifies your business on contracts, invoices and payments. Your SAM registration also holds the banking details the government uses for electronic payment. Keep the registration active by renewing it every year, because an expired registration can delay or stop payments.",
      },
      {
        q: "Can I invoice the government with a PDF invoice by email?",
        a: "Only if your contract tells you to. Most federal contracts require electronic submission through a specific system such as IPP or WAWF, and an emailed PDF may simply be ignored. Some agencies and small orders still accept email or other portals, and the instructions will be in the contract or order. Even when you submit through a portal, keeping a PDF copy of each invoice is good practice.",
      },
      {
        q: "What happens if my invoice is rejected?",
        a: "Under the Prompt Payment rules, the agency should return an improper invoice with the reasons, generally within seven days of receipt. The payment clock then restarts when you submit a corrected, proper invoice. Common reasons include a wrong contract or line item number, missing receiving information, quantities above what was ordered and mismatched remittance details. Fix the issue and resubmit promptly through the same system.",
      },
      {
        q: "How do subcontractors get paid on federal contracts?",
        a: "Subcontractors invoice the prime contractor, not the government, under the terms of their subcontract. The prime then bills the agency. Federal rules require primes on many contracts to pay small business subcontractors promptly and to notify the contracting officer of reduced or late payments, but your subcontract governs the details. Many states also have prompt pay laws for public construction subcontracts.",
      },
      {
        q: "Is the government getting rid of paper checks?",
        a: "Yes. A March 2025 executive order directed Treasury to stop issuing paper checks for most federal disbursements from September 30, 2025, with limited exceptions. Federal contract payments were already made mostly by electronic funds transfer to the bank account in your SAM registration, so for most vendors the practical step is to keep those banking details current and accurate.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To invoice the federal government, register your business in SAM.gov to get a Unique Entity ID and set up electronic payment, then submit a proper invoice through the system named in your contract, usually Treasury's Invoice Processing Platform (IPP) for civilian agencies or PIEE/WAWF for the Department of Defense. Payment is generally due 30 days after a proper invoice is received.</p>

<p>Winning a government contract is the hard part. Getting paid should be routine, but first-time contractors often lose weeks to rejected invoices, expired registrations or the wrong portal. This guide explains how to invoice the federal government in 2026: registration, which invoicing system to use, what makes a proper invoice under the Federal Acquisition Regulation (FAR), how Prompt Payment Act interest works, a worked example and the mistakes that delay payment. This is general information, not legal advice; your contract's terms control.</p>

<h2>What do you need before invoicing the federal government?</h2>

<table>
<thead><tr><th>Requirement</th><th>What it is</th><th>Where to get it</th></tr></thead>
<tbody>
<tr><td>SAM.gov registration</td><td>Entity registration required for most prime contracts; renew every year</td><td><a href="https://sam.gov" target="_blank" rel="noopener noreferrer">SAM.gov</a> (free)</td></tr>
<tr><td>Unique Entity ID (UEI)</td><td>12-character ID that identifies your business on contracts and payments</td><td>Assigned in SAM.gov</td></tr>
<tr><td>CAGE code</td><td>Commercial and Government Entity code, assigned during SAM registration for US entities</td><td>Assigned during registration</td></tr>
<tr><td>EIN or TIN</td><td>Taxpayer identification number, validated with the IRS</td><td>IRS; see <a href="/blog/how-to-get-an-ein">how to get an EIN</a></td></tr>
<tr><td>Banking details</td><td>Account for electronic funds transfer (EFT) payments</td><td>Entered in your SAM registration</td></tr>
<tr><td>Invoicing system account</td><td>IPP, PIEE/WAWF or the agency's own system</td><td>Per your contract instructions</td></tr>
</tbody>
</table>

<p>Registration is free. Start early, because SAM registrations can take time to activate, especially if your business details need validation. Make sure your legal business name and address in SAM match your IRS records exactly, because mismatches are a frequent cause of delays.</p>

<h2>Which system do you use to submit invoices?</h2>

<p>The government does not have one single invoicing portal. Your contract, order or agreement tells you where to submit, usually in a clause on electronic invoicing or in the "invoice instructions" section. The main systems are:</p>

<h3>Invoice Processing Platform (IPP)</h3>

<p>The <a href="https://www.ipp.gov" target="_blank" rel="noopener noreferrer">Invoice Processing Platform</a> is run by the Treasury Department's Bureau of the Fiscal Service. Many civilian agencies use it to send purchase orders to vendors, receive invoices and send payment notifications. Treasury describes IPP as free for agencies and vendors. Agencies that adopt IPP typically send each vendor an enrollment email with login instructions; you then submit invoices against the purchase orders shown in your account and can track their status.</p>

<h3>PIEE and Wide Area Workflow (WAWF)</h3>

<p>The Department of Defense uses the Procurement Integrated Enterprise Environment (PIEE) at <a href="https://piee.eb.mil" target="_blank" rel="noopener noreferrer">piee.eb.mil</a>. Inside PIEE, the Wide Area Workflow (WAWF) application handles invoices and receiving reports. DoD contracts generally include DFARS clause 252.232-7006, which requires electronic submission through WAWF and lists the document type and routing codes to use. You register in PIEE, request the Vendor role for your CAGE code, and your company's electronic business point of contact approves it.</p>

<h3>Agency-specific systems and email</h3>

<p>A few agencies use their own portals, and some small orders still allow email submission to a designated billing office. If the contract names a system, use it; invoices sent anywhere else may never reach the paying office.</p>

<h3>Is there a 2026 consolidation of federal invoicing systems?</h3>

<p>More agencies continue to move onto IPP, and some have announced migrations in 2026 (for example, NIST notified vendors of a move to IPP with a temporary pause in invoice submissions). As of October 2026 we found no single governmentwide deadline replacing all agency systems with one portal, and DoD still uses PIEE/WAWF. Separately, the FAR itself has been undergoing a major rewrite since 2025, so clause numbers and wording in new contracts may differ from older ones. Always follow the invoice instructions in your own contract and any notice from your contracting officer.</p>

<h2>What is a proper invoice?</h2>

<p>The Prompt Payment clock only starts when the billing office receives a proper invoice. <a href="https://www.acquisition.gov/far/32.905" target="_blank" rel="noopener noreferrer">FAR 32.905</a> lists what a proper invoice must contain:</p>

<ul>
<li>Your business name and address, matching your SAM registration.</li>
<li>Invoice date and a unique invoice number. A clear <a href="/blog/invoice-numbering-system">invoice numbering system</a> helps.</li>
<li>Contract number or other authorization, including the order number and contract line item number (CLIN).</li>
<li>Description, quantity, unit of measure, unit price and extended price of the goods delivered or services performed.</li>
<li>Shipping and payment terms, such as shipment number and date of shipment, if applicable.</li>
<li>Name and address of the contractor official to whom payment is to be sent, if different.</li>
<li>Name, title and phone number of the person to notify about a defective invoice.</li>
<li>Your taxpayer identification number (TIN), unless already in your registration as the contract allows. See <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> for how to show it.</li>
<li>Electronic funds transfer banking information, if required by the contract.</li>
<li>Any other information or documentation the contract requires, such as timesheets or receiving reports.</li>
</ul>

<p>The government matches your invoice to the contract and to evidence that the goods or services were received and accepted, similar to a commercial <a href="/blog/three-way-match">three-way match</a>. Anything that does not match, such as a quantity above what was ordered, will cause a rejection.</p>

<h2>How to invoice the federal government step by step</h2>

<ol>
<li><strong>Register in SAM.gov</strong> and confirm your UEI, CAGE code and banking details are active.</li>
<li><strong>Read the contract's invoicing instructions.</strong> Note the system, billing frequency, required documents, CLINs and the designated billing office.</li>
<li><strong>Set up your system account.</strong> Respond to the IPP enrollment email, or register in PIEE and request the Vendor role.</li>
<li><strong>Deliver and document.</strong> Keep delivery receipts, timesheets or acceptance records the contract asks for.</li>
<li><strong>Prepare the invoice.</strong> Bill only what was delivered or performed in the billing period, by CLIN, at contract prices.</li>
<li><strong>Submit through the required system.</strong> In WAWF, choose the document type the contract specifies (for example, a combined invoice and receiving report for many supply contracts).</li>
<li><strong>Track status.</strong> IPP and WAWF show when an invoice is received, approved, rejected or paid.</li>
<li><strong>Fix rejections quickly.</strong> A corrected proper invoice restarts the payment clock.</li>
<li><strong>Reconcile payments.</strong> Match deposits and remittance details to each invoice, and check any Prompt Payment interest.</li>
</ol>

<h2>When will you be paid, and what if it is late?</h2>

<p>Under the <a href="/blog/prompt-payment-act">Prompt Payment Act</a>, payment on most contracts is due 30 days after the designated billing office receives a proper invoice, or 30 days after government acceptance, whichever is later. Agencies should return an improper invoice with reasons, generally within seven days. The FAR also directs agencies to accelerate payments to small business contractors where possible, with a goal of paying within 15 days of a proper invoice.</p>

<p>If the government pays late, interest is generally added automatically, without you having to ask. Treasury publishes the rate every six months on its <a href="https://fiscal.treasury.gov/prompt-payment/rates.html" target="_blank" rel="noopener noreferrer">Prompt Payment interest rate page</a>; for July 1 to December 31, 2026 it is 4.75% a year. Interest is calculated on a 360-day year.</p>

<h2>Worked example: a federal services invoice</h2>

<p>BrightPath Training LLC has a firm-fixed-price contract with a civilian agency for staff training, with invoices submitted monthly through IPP. In October 2026 it delivered four on-site sessions and the course materials.</p>

<table>
<thead><tr><th>CLIN</th><th>Description</th><th>Qty</th><th>Unit</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>0001</td><td>On-site leadership training session, 1 day</td><td>4</td><td>Each</td><td>$6,250.00</td><td>$25,000.00</td></tr>
<tr><td>0002</td><td>Participant course materials</td><td>80</td><td>Each</td><td>$45.00</td><td>$3,600.00</td></tr>
<tr><td>0003</td><td>Post-training assessment report</td><td>1</td><td>Each</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td colspan="5"><strong>Total amount due</strong></td><td><strong>$31,000.00</strong></td></tr>
</tbody>
</table>

<p>The invoice shows the contract and order number, invoice number BPT-2026-010, invoice date November 2, 2026, service period October 1 to 31, 2026, the UEI, the contact for invoice problems and a note that payment is by EFT to the account in SAM.</p>

<p>The billing office receives the proper invoice on November 2. Acceptance happened on October 31, so the due date is 30 days after receipt: December 2, 2026. Suppose payment arrives on December 22, 20 days late. Interest at 4.75% would be about $31,000 x 4.75% x 20 / 360 = $81.81, added to the payment. If the invoice had been rejected for a wrong CLIN and resubmitted on November 12, the clock would restart and the due date would move to December 12.</p>

<h2>Common mistakes when invoicing the government</h2>

<ul>
<li><strong>Letting SAM registration expire.</strong> Payments can stop until it is renewed. Set a reminder well before the renewal date.</li>
<li><strong>Using the wrong system or document type.</strong> Check the contract clause every time, especially with a new agency.</li>
<li><strong>Billing ahead of delivery.</strong> Unless the contract allows advance or progress payments, bill only for accepted work. For long projects, contracts may provide for partial or <a href="/blog/progress-billing">progress billing</a>.</li>
<li><strong>Mismatched details.</strong> Name, address and bank details must match SAM; CLINs, prices and quantities must match the contract.</li>
<li><strong>Missing documents.</strong> Timesheets, receiving reports or certifications required by the contract.</li>
<li><strong>Duplicate submissions.</strong> Resubmitting the same invoice number in a different system creates confusion and delays.</li>
<li><strong>Ignoring rejection notices.</strong> Check the system regularly; each day an invoice sits rejected is a day of unpaid work.</li>
<li><strong>Paying for "free" services.</strong> SAM registration, IPP and PIEE cost nothing to use.</li>
</ul>

<h2>What about purchase cards and small orders?</h2>

<p>Not every federal sale goes through IPP or WAWF. For small purchases, agencies often pay with the Government Purchase Card, a Visa or Mastercard issued to authorized federal buyers. In that case you take a normal card payment and provide a receipt or invoice for the buyer's records; there is no portal submission and no Prompt Payment clock. Your invoice should still show the buyer's name, agency, order details and a clear description, because cardholders must keep documentation for their purchases. Ask the buyer before adding any card surcharge or fee, since card rules and agency policy apply.</p>

<h2>How invoicing works for different contract types</h2>

<table>
<thead><tr><th>Contract type</th><th>What you bill</th><th>Typical supporting documents</th></tr></thead>
<tbody>
<tr><td>Firm-fixed-price supplies</td><td>Quantities delivered and accepted, at contract unit prices</td><td>Receiving report or combined invoice and receiving report, shipping documents</td></tr>
<tr><td>Firm-fixed-price services</td><td>Monthly or milestone amounts set in the contract</td><td>Evidence of performance, deliverables accepted</td></tr>
<tr><td>Time-and-materials or labor-hour</td><td>Hours by labor category at contract rates, plus allowable materials</td><td>Timesheets, labor category mapping, material receipts</td></tr>
<tr><td>Cost-reimbursement</td><td>Allowable incurred costs plus fee</td><td>Cost vouchers; often subject to audit by the contracting agency</td></tr>
<tr><td>Construction</td><td>Progress payments based on work completed, less retainage if applicable</td><td>Schedule of values, progress estimates, certifications</td></tr>
</tbody>
</table>

<p>The more complex the contract type, the more documentation the government needs before it can pay, and the more important it is to set up your billing process before the first invoice is due. If your company is new to retainage on construction contracts, our guide to <a href="/blog/retainage-invoice">retainage invoices</a> explains how withheld amounts are shown and released.</p>

<h2>Tips for small businesses new to federal invoicing</h2>

<ul>
<li><strong>Keep a contract summary sheet:</strong> contract number, CLINs, prices, billing office, system and contracting officer contact.</li>
<li><strong>Use the system's training.</strong> Treasury and DoD offer vendor training and help desks for IPP and PIEE.</li>
<li><strong>Prepare your own PDF too.</strong> Even when you key data into a portal, drafting the invoice first in our <a href="/invoice-generator">free invoice generator</a> gives you a clean record and a checklist of every line.</li>
<li><strong>Accept ACH only.</strong> Federal payments arrive by EFT; see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> to understand timing and remittance data.</li>
<li><strong>Watch cash flow.</strong> Even on-time payment can mean 30 to 45 days from delivery. Plan for it as you would with any <a href="/blog/net-30-payment-terms">net 30 customer</a>.</li>
</ul>

<p>Paper checks are also on the way out: a March 2025 executive order directed Treasury to stop issuing paper checks for most federal payments from September 30, 2025, with limited exceptions, so accurate bank details in SAM matter more than ever.</p>

<p>Invoicing the federal government is mostly about precision: the right registration, the right system and an invoice that matches the contract line by line. Draft and keep a copy of every invoice with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and creates a PDF in your browser that you can keep alongside your IPP or WAWF submissions.</p>
`,
  },
  {
    slug: "how-to-bill-insurance-companies-as-a-contractor",
    title: "Bill Insurance Company for Repairs: Contractor Guide",
    description:
      "How contractors bill an insurance company for repairs: scope of loss, ACV vs RCV, supplements, direction to pay, deductibles and a worked roof claim example.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "roofing-invoice-template",
      "water-damage-restoration-invoice-template",
      "construction-invoice-guide",
    ],
    faqs: [
      {
        q: "Can a contractor bill an insurance company directly?",
        a: "Usually the contractor's contract is with the property owner, and the insurer pays the owner, not the contractor. Contractors can send their invoice and estimate to the adjuster and may be paid directly if the owner signs a valid direction to pay or, in states that allow it, an assignment of benefits. Some states restrict these arrangements, so check local law before relying on direct payment.",
      },
      {
        q: "What is recoverable depreciation?",
        a: "Under a replacement cost policy, the insurer often pays the actual cash value first, which is the replacement cost minus depreciation. The withheld depreciation is recoverable: the insurer releases it once the repairs are completed and documented, usually with a final invoice and photos. If the work is never done, the owner may only receive the actual cash value. Deadlines for claiming recoverable depreciation vary by policy.",
      },
      {
        q: "Who pays the deductible on an insurance repair?",
        a: "The property owner. The insurer subtracts the deductible from its payment, and the owner pays that amount to the contractor. Several states, including Texas, prohibit contractors from waiving, absorbing or rebating a deductible, because it misrepresents the cost of the repair to the insurer. Even where not explicitly banned, waiving a deductible can raise insurance fraud issues, so bill it plainly.",
      },
      {
        q: "What is a supplement in insurance restoration?",
        a: "A supplement is a request to the insurer to add items or costs that were missed or not visible in the original adjuster's estimate. Common examples include hidden water damage found during demolition, code-required upgrades, extra layers of roofing and items like drip edge or flashing. A strong supplement includes photos, measurements, the code reference if relevant and pricing in the same format as the original estimate.",
      },
      {
        q: "Why are insurance checks made out to the homeowner and the mortgage company?",
        a: "If the property has a mortgage, the lender is usually named on the policy because it has a financial interest in the home. Claim checks for the building are often made payable to both the owner and the lender. The lender may hold the funds and release them in stages as repairs are inspected, which can slow contractor payments, so plan your draw schedule with this in mind.",
      },
      {
        q: "Can a contractor negotiate a claim for the homeowner?",
        a: "Contractors can provide estimates, documentation and explain the scope of the repair, but in many states only a licensed public adjuster or attorney may negotiate a claim on the owner's behalf for compensation. Advertising that you will handle the claim or fight the insurer can break those laws. Stick to supporting the repair scope and pricing, and let the owner or their adjuster deal with coverage decisions.",
      },
      {
        q: "What is overhead and profit on an insurance estimate?",
        a: "Overhead and profit, often called O&P, is an allowance added to an estimate for the general contractor's business overhead and profit. It is commonly requested when a job needs a general contractor to coordinate several trades. Whether it is included depends on the policy, the insurer and the complexity of the job, and some states have case law on it. Request it with an explanation of why coordination is required.",
      },
      {
        q: "How long does an insurance company take to pay a contractor?",
        a: "Timelines vary by state, insurer and claim complexity. Many states set deadlines for insurers to acknowledge, decide and pay claims once they have the information they need, but mortgage company endorsements, supplements and depreciation releases can add weeks. Contractors protect cash flow by collecting the first insurance payment and deductible before or at the start of work and invoicing promptly at completion.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To bill an insurance company for repairs, base your invoice on the adjuster's scope of loss, invoice the property owner (or the insurer if the owner signs a valid direction to pay), show the replacement cost, the deductible the owner pays and insurance payments received, submit supplements for missed items with photos, and send a final invoice to release recoverable depreciation.</p>

<p>Insurance work can keep a roofing, restoration or general contracting business busy for months after a storm. It also brings paperwork most contractors never see on private jobs: adjuster estimates, depreciation holdbacks, mortgage company endorsements and supplements. This guide explains how insurance repair billing works, who pays what, how to structure the invoice, a worked roof example with real numbers and the mistakes that leave contractors unpaid or in legal trouble. It is general information, not legal or insurance advice; rules vary by state and policy.</p>

<h2>Who pays the contractor on an insurance claim?</h2>

<p>On most property claims there are three or four parties:</p>

<ul>
<li><strong>Policyholder (owner):</strong> your customer. Your contract is normally with them, and they owe you for the work.</li>
<li><strong>Insurance company and adjuster:</strong> decides what is covered and how much it will pay under the policy.</li>
<li><strong>Mortgage lender:</strong> often named on the policy and on claim checks for the building.</li>
<li><strong>Contractor:</strong> you. You do the work and, unless arranged otherwise, are paid by the owner from the insurance money plus the owner's deductible.</li>
</ul>

<p>The key point is that the insurer's obligation is to its policyholder, not to you. That is why your contract with the owner must say clearly that the owner is responsible for payment, including the deductible and any amounts the insurer does not cover.</p>

<h3>Direction to pay vs assignment of benefits</h3>

<table>
<thead><tr><th>Arrangement</th><th>What it does</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Direction to pay (DTP)</td><td>Owner instructs the insurer to pay you directly or to add you as a payee; the claim stays the owner's</td><td>Some insurers will not honor it; some states scrutinize it closely</td></tr>
<tr><td>Assignment of benefits (AOB)</td><td>Owner transfers some claim rights to you, so you deal with the insurer and can pursue payment</td><td>Florida bars AOBs under residential and commercial property policies issued on or after January 1, 2023; other states regulate them</td></tr>
<tr><td>Owner pays you</td><td>Insurer pays the owner (and lender); owner pays your invoices</td><td>You depend on the owner passing money on; use a clear payment schedule and lien rights</td></tr>
</tbody>
</table>

<p>Florida's Chief Financial Officer has warned that some "direction to pay" documents used after the AOB ban are effectively prohibited assignments, so Florida contractors should have their forms reviewed by a lawyer. In every state, protect yourself with a written contract and your <a href="/blog/mechanics-lien">mechanics lien rights</a>.</p>

<h2>Key insurance terms contractors must know</h2>

<table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Scope of loss</td><td>The adjuster's list of damaged items and repairs the insurer agrees to cover</td></tr>
<tr><td>RCV (replacement cost value)</td><td>The cost to repair or replace with like kind and quality at today's prices</td></tr>
<tr><td>ACV (actual cash value)</td><td>Replacement cost minus depreciation</td></tr>
<tr><td>Recoverable depreciation</td><td>Depreciation withheld until repairs are completed, then released under a replacement cost policy</td></tr>
<tr><td>Deductible</td><td>The amount the owner pays before insurance; subtracted from the insurer's payment</td></tr>
<tr><td>Supplement</td><td>A request to add missed or hidden items to the scope</td></tr>
<tr><td>O&amp;P (overhead and profit)</td><td>An allowance for general contractor overhead and profit, commonly requested on multi-trade jobs</td></tr>
<tr><td>Ordinance or law coverage</td><td>Coverage for code-required upgrades, if the policy includes it</td></tr>
</tbody>
</table>

<p>The <a href="https://www.tdi.texas.gov/pubs/consumer/cb025.html" target="_blank" rel="noopener noreferrer">Texas Department of Insurance home insurance guide</a> explains replacement cost and actual cash value from the policyholder's side, including why replacement cost claims are often paid in two checks. The NAIC also explains the difference for <a href="https://content.naic.org/article/rebuilding-after-storm-know-difference-between-replacement-cost-and-actual-cash-value-when-it-comes" target="_blank" rel="noopener noreferrer">roof claims after storms</a>.</p>

<h2>How to bill an insurance company for repairs step by step</h2>

<ol>
<li><strong>Sign a contract with the owner first.</strong> State the scope, that the price will follow the approved insurance scope plus agreed supplements and upgrades, and that the owner pays the deductible and any uncovered items.</li>
<li><strong>Document the damage.</strong> Dated photos, measurements, moisture readings for water losses and notes on the cause and date of loss.</li>
<li><strong>Get the adjuster's estimate.</strong> Ask the owner to share the full scope of loss with line items, quantities and pricing.</li>
<li><strong>Compare your estimate line by line.</strong> Many insurers use estimating software such as Xactimate, so matching their line format makes discussions easier.</li>
<li><strong>Collect the first payment and deductible.</strong> Typically the ACV check (minus deductible) plus the owner's deductible, before or at the start of work. Our guide to <a href="/blog/deposit-invoice">deposit invoices</a> shows how to bill it.</li>
<li><strong>Submit supplements as you find them.</strong> Photos, measurements and code references, sent through the owner or with their authorization.</li>
<li><strong>Complete the work and send the final invoice.</strong> Show the full replacement cost, approved supplements, payments received and balance due, plus completion photos.</li>
<li><strong>Help the owner claim recoverable depreciation.</strong> Insurers usually need the final invoice and proof of completion to release it.</li>
<li><strong>Provide lien waivers as you are paid.</strong> Lenders and owners often require a <a href="/blog/lien-waiver">lien waiver</a> before releasing funds.</li>
</ol>

<h2>Worked example: a storm-damaged roof</h2>

<p>A hailstorm damages Jordan's roof. The insurer's scope of loss on a replacement cost policy shows:</p>

<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Replacement cost value (RCV) of approved scope</td><td>$18,400.00</td></tr>
<tr><td>Less depreciation (recoverable)</td><td>-$5,200.00</td></tr>
<tr><td>Actual cash value (ACV)</td><td>$13,200.00</td></tr>
<tr><td>Less deductible</td><td>-$2,000.00</td></tr>
<tr><td><strong>First insurance payment</strong></td><td><strong>$11,200.00</strong></td></tr>
</tbody>
</table>

<p>During tear-off, the contractor finds the local code requires ice and water shield at the eaves and drip edge that the original estimate missed. A supplement with photos and the code reference is approved for $1,350.00. The project payments then work out like this:</p>

<table>
<thead><tr><th>Payment</th><th>From</th><th>When</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>First insurance check (ACV minus deductible)</td><td>Insurer via owner and lender</td><td>Start of job</td><td>$11,200.00</td></tr>
<tr><td>Deductible</td><td>Owner</td><td>Start of job</td><td>$2,000.00</td></tr>
<tr><td>Approved supplement</td><td>Insurer</td><td>After approval</td><td>$1,350.00</td></tr>
<tr><td>Recoverable depreciation</td><td>Insurer</td><td>After completion</td><td>$5,200.00</td></tr>
<tr><td colspan="3"><strong>Total contract (RCV + supplement)</strong></td><td><strong>$19,750.00</strong></td></tr>
</tbody>
</table>

<p>The insurer pays $17,750.00 in total ($11,200 + $1,350 + $5,200), and the owner pays the $2,000 deductible. If Jordan also asked for an upgrade to impact-resistant shingles that the policy does not cover, that would be a separate line paid by the owner, agreed in writing through a <a href="/blog/scope-creep-change-order">change order</a>.</p>

<h3>The final invoice</h3>

<table>
<thead><tr><th>Description</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Roof replacement per insurance scope of loss, claim no. [number], date of loss [date]</td><td>$18,400.00</td></tr>
<tr><td>Supplement 1: ice and water shield at eaves, drip edge (code required), approved [date]</td><td>$1,350.00</td></tr>
<tr><td><strong>Total contract amount</strong></td><td><strong>$19,750.00</strong></td></tr>
<tr><td>Less payment received: insurance check no. [number]</td><td>-$11,200.00</td></tr>
<tr><td>Less payment received: deductible from owner</td><td>-$2,000.00</td></tr>
<tr><td>Less payment received: supplement</td><td>-$1,350.00</td></tr>
<tr><td><strong>Balance due (recoverable depreciation)</strong></td><td><strong>$5,200.00</strong></td></tr>
</tbody>
</table>

<p>Attach completion photos and a certificate of completion if the insurer asks for one. You can lay out an invoice like this in our <a href="/invoice-generator">free invoice generator</a>, listing the claim number in the notes. For trade-specific layouts, see our <a href="/blog/roofing-invoice-template">roofing invoice template</a> and <a href="/blog/water-damage-restoration-invoice-template">water damage restoration invoice template</a>.</p>

<h2>Billing water damage and mitigation claims</h2>

<p>Water losses are billed differently from roofs because the work happens in two phases, often with different contracts:</p>

<ul>
<li><strong>Emergency mitigation:</strong> water extraction, removing wet materials, setting dehumidifiers and air movers, and monitoring until dry. This is usually billed on a separate invoice as soon as drying is complete, with daily moisture logs, equipment counts and photos as support.</li>
<li><strong>Reconstruction:</strong> replacing drywall, flooring, cabinets and paint after the structure is dry. This follows the scope of loss and supplements like any other repair.</li>
</ul>

<p>Mitigation invoices are commonly questioned on equipment days and quantities, so record each piece of equipment placed and removed by date, room and reading. Keep the drying log and the invoice consistent: if the log shows four air movers for three days in a room, the invoice should not show five for four. Where the owner wants reconstruction done by another contractor, your mitigation invoice still goes to the owner (or to the insurer under a valid direction to pay), and you should be paid for mitigation regardless of who rebuilds.</p>

<h2>What should every insurance repair invoice include?</h2>

<ul>
<li>Your business name, address, license number and contact details.</li>
<li>The owner's name and property address.</li>
<li>The insurance company, claim number, policy number if the owner provides it and date of loss.</li>
<li>Invoice number and date, plus the period of work.</li>
<li>Line items that follow the scope of loss, with supplements listed and dated separately.</li>
<li>Owner-paid upgrades or uncovered items on their own lines.</li>
<li>Every payment received, with check numbers and dates, and the balance due.</li>
<li>Payment terms, accepted methods and who the payment should come from.</li>
<li>Any sales tax on materials, where your state requires it; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help check it.</li>
</ul>

<h2>How to write a supplement that gets approved</h2>

<ul>
<li><strong>Be specific:</strong> item, quantity, unit and price, ideally in the same format as the adjuster's estimate.</li>
<li><strong>Prove it:</strong> dated photos showing the condition, measurements and, for hidden damage, photos taken as it was uncovered.</li>
<li><strong>Cite the reason:</strong> code requirement (with the code section), manufacturer installation instructions or damage not visible at inspection.</li>
<li><strong>Send it promptly:</strong> before the work is covered up where possible, and ask whether the adjuster wants to re-inspect.</li>
<li><strong>Keep it factual:</strong> explain what the repair requires; leave coverage arguments to the owner or their public adjuster.</li>
</ul>

<h2>Should you wait for insurance before starting work?</h2>

<p>Usually yes, at least for the first payment. Starting a large repair before the claim is approved risks doing work the insurer will not pay for and the owner cannot afford. The exception is emergency work to prevent further damage, such as tarping a roof or extracting water, which most policies expect the owner to arrange promptly. Bill emergency services on their own invoice right away, and wait for the approved scope and first payment before ordering materials for the full repair.</p>

<h2>Legal lines contractors should not cross</h2>

<ul>
<li><strong>Do not waive or absorb deductibles.</strong> Several states, including Texas, prohibit it, and elsewhere it can be treated as insurance fraud.</li>
<li><strong>Do not act as a public adjuster.</strong> In many states, negotiating a claim for the owner requires a public adjuster license.</li>
<li><strong>Do not inflate invoices.</strong> Bill the actual work at agreed prices. Padding an insurance invoice is fraud.</li>
<li><strong>Follow your state's rules on contracts after disasters.</strong> Some states have cancellation rights and restrictions for storm-related contracts.</li>
<li><strong>Use compliant AOB or DTP forms.</strong> Especially in Florida, where AOBs are barred for newer policies.</li>
</ul>

<h2>Common billing mistakes on insurance jobs</h2>

<ul>
<li><strong>Starting work without a signed contract with the owner.</strong> The insurer is not your customer.</li>
<li><strong>Invoicing only the ACV.</strong> Your contract price is usually the full replacement cost plus supplements.</li>
<li><strong>Forgetting the deductible.</strong> Collect it as you would any other payment.</li>
<li><strong>No claim number or date of loss on invoices.</strong> Insurers and lenders need both to process payments.</li>
<li><strong>Late final invoice.</strong> Recoverable depreciation often has a deadline in the policy.</li>
<li><strong>Not planning for lender delays.</strong> Mortgage companies may hold funds and release them after inspections, so build that into your <a href="/blog/progress-billing">progress billing</a> schedule.</li>
<li><strong>Mixing upgrades into the insurance scope.</strong> Bill owner-paid upgrades separately so the insurer is not charged for them.</li>
</ul>

<h2>How to protect your cash flow on insurance work</h2>

<p>Insurance jobs pay well but slowly. Collect the first insurance check and deductible at the start, order materials only after funds arrive, and invoice the moment work is complete. Keep a claim file per job: contract, scope of loss, supplements, photos, invoices, lien waivers and copies of checks. If an owner keeps insurance money without paying you, your lien rights and contract are your main tools; see our <a href="/blog/construction-invoice-guide">construction invoice guide</a> and the <a href="/blog/contractor-invoice-template">contractor invoice template</a> for clear payment terms.</p>

<p>Billing insurance repairs correctly comes down to matching the adjuster's scope, documenting every change and showing every payment on a clear final invoice. Build that invoice with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and downloads a PDF in your browser that you can send to the owner, the adjuster and the mortgage company.</p>
`,
  },
];
