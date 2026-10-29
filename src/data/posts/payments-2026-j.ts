import type { PostDraft } from "../blog";

export const PAYMENTS_2026_J_POSTS: PostDraft[] = [
  {
    slug: "zelle-business-limits",
    title: "Zelle Limits for Business: Daily Caps by Bank (2026)",
    description:
      "Zelle limits for business accounts are set by your bank, not Zelle. See reported daily and monthly caps, how to check yours, and what to do with large invoices.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["venmo-zelle-cash-app-invoice", "zelle-vs-venmo", "how-to-accept-ach-payments"],
    faqs: [
      {
        q: "Does Zelle charge businesses a fee to receive money?",
        a: "Zelle itself does not charge consumers or small businesses a fee to send or receive money, and most participating banks do not add one either. Some banks may treat business use differently or apply account-level fees, so check your bank's Zelle terms and business account fee schedule. Unlike card processing, there is no percentage taken from each payment you receive, which is why many service businesses like it for local invoices.",
      },
      {
        q: "Can I use Zelle with a personal account for my business?",
        a: "You can technically receive money, but it is a bad habit. Many banks' Zelle terms restrict personal accounts to personal use, and mixing business income into a personal account makes bookkeeping and tax time harder. If you invoice clients regularly, open a business checking account at a bank that supports Zelle for small businesses and display that account's email or phone number on your invoices.",
      },
      {
        q: "Is there a limit on how much I can receive with Zelle?",
        a: "Limits mainly apply to the sender. Your client's bank decides how much they can send per day and per month, so a large payment may be blocked on their side even if your account has no receiving cap. Some banks also apply their own receiving rules or reviews. If a client hits a limit, they can split the payment over several days or pay that invoice by ACH or wire instead.",
      },
      {
        q: "How long does a Zelle payment take to arrive?",
        a: "When both people are already enrolled with Zelle through their banks, money typically arrives within minutes, including on weekends. The first payment to a new recipient, or a payment your bank flags for review, can take longer. If the recipient is not yet enrolled, the money waits until they enroll, and it can be cancelled or returned if they never do within the bank's time window.",
      },
      {
        q: "Does Zelle report business payments to the IRS?",
        a: "Zelle has said it does not issue Form 1099-K, because money moves directly between bank accounts rather than through a third-party settlement account. That does not make the income tax-free. Every Zelle payment you receive for work is business income, and you report it on your return just like a check or cash. Keep invoices and bank records so you can match each payment to a sale.",
      },
      {
        q: "Can I cancel a Zelle payment I sent by mistake?",
        a: "Only if the recipient has not enrolled with Zelle yet; in that case you can usually cancel from your banking app. Once money goes to an enrolled user, it is generally final. You can ask the recipient to send it back or contact your bank, but recovery is not guaranteed. Double-check the email address or phone number, and send a small test amount first when paying a new contact.",
      },
      {
        q: "Why did my Zelle limit go down?",
        a: "Banks set limits dynamically. A new enrollment, a recent change to your email or phone number, unusual activity, or a fraud review can all lower your limit for a while. Some banks start new users with low caps that rise after 30 days or so. Check the limit shown in your bank's app, and call the bank if you need a temporary increase for a known payment.",
      },
      {
        q: "Is Zelle safe for receiving invoice payments?",
        a: "Receiving money is low risk for you, because the funds land directly in your bank account and Zelle payments are hard to reverse. The bigger risk is scams aimed at you, such as fake payment notification emails or overpayment schemes where someone asks you to send back the difference. Always confirm a payment in your banking app, not from an email, before you release goods or mark an invoice paid.",
      },
      {
        q: "What is the best alternative to Zelle for large business payments?",
        a: "For payments above your clients' Zelle limits, ACH bank transfers are usually the best low-cost option, and wire transfers work for urgent or very large amounts. Cards and payment links are convenient for clients but cost you a processing fee. Many businesses list two or three methods on the invoice, such as Zelle for small jobs and ACH details for anything over a few thousand dollars.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Zelle does not set one universal limit. Each participating bank sets its own daily and monthly sending caps, and business accounts usually get higher limits than personal ones. Reported business caps range from a few thousand dollars a day to around $15,000, but your bank's app shows the only figure that counts for your account.</p>

<p>If you invoice clients and let them pay by Zelle, limits matter more than you might think. A client who owes you $7,000 cannot always send it in one go, and a new business enrollment may start with lower caps than an established one. This guide explains how Zelle limits for business work, gives reported examples from major banks, and shows how to set up your invoices so large payments still arrive on time.</p>

<h2>What is Zelle for business?</h2>
<p>Zelle is a bank-to-bank payment network owned by Early Warning Services, a company owned by several large US banks. Money moves directly from one US bank account to another, usually within minutes, using an email address or US mobile number as the identifier. Zelle for business simply means using Zelle through a small business checking account at a bank that supports it.</p>
<p>A few points that shape how it works for a small business:</p>
<ul>
<li><strong>It lives inside your bank's app.</strong> Zelle shut down its standalone app in 2025, so you now send and receive only through a participating bank or credit union's app or website.</li>
<li><strong>It is not a card processor.</strong> There is no merchant account, no percentage fee and no chargeback process. That makes it cheap, but it also means clients get no purchase protection.</li>
<li><strong>Not every bank supports business use.</strong> Some banks allow Zelle only on personal accounts, and some allow small business accounts but not larger commercial ones. Check with your bank before you print Zelle details on invoices.</li>
<li><strong>Payments are hard to reverse.</strong> Once money reaches an enrolled user, the sender usually cannot pull it back.</li>
</ul>
<p>For an overview of where Zelle fits next to other options, see our guide to the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a>.</p>

<h2>How do Zelle limits work?</h2>
<p>Zelle limits are set by the sender's bank, not by the Zelle network itself. Banks typically set three kinds of limits:</p>
<ol>
<li><strong>A daily or rolling 24-hour limit</strong> on the total amount you can send.</li>
<li><strong>A weekly, monthly or rolling 30-day limit</strong> on total dollars and sometimes on the number of payments.</li>
<li><strong>A per-transaction or per-recipient limit</strong>, which some banks set dynamically based on risk.</li>
</ol>
<p>Banks adjust these limits based on account type, how long you have been enrolled, the recipient, your transaction history and fraud signals. That is why two customers at the same bank can see different limits, and why a newly enrolled business account may start low and increase after 30 days or so.</p>
<p>The key point for invoicing: the limit that usually stops a payment is your <em>client's</em> sending limit. Your receiving account rarely caps incoming Zelle payments, but if your client's bank allows only $3,500 a day, a $6,000 invoice will not go through in one payment.</p>

<h2>Zelle limits by bank: reported examples</h2>
<p>The table below shows limits reported for major banks as of October 2026. These figures come from bank disclosures and banking publications and change often, so treat them as examples and confirm the current figure in your own banking app.</p>
<table><thead><tr><th>Bank</th><th>Account type</th><th>Reported sending limit</th><th>Notes</th></tr></thead><tbody>
<tr><td>Chase</td><td>Small business (enrolled 31+ days)</td><td>About $5,000 per day, $40,000 per month</td><td>Newer enrollments start lower; personal limits are set per recipient</td></tr>
<tr><td>Wells Fargo</td><td>Business</td><td>Up to about $15,000 per rolling 24 hours</td><td>Depends on the funding account, recipient and history</td></tr>
<tr><td>Wells Fargo</td><td>Personal</td><td>About $3,500 per day, $20,000 per month</td><td>Some customers see higher limits</td></tr>
<tr><td>Bank of America</td><td>Personal</td><td>About $3,500 per day, around $20,000 per 30 days</td><td>Business limits vary; check the app</td></tr>
<tr><td>Smaller banks and credit unions</td><td>Varies</td><td>Often $500 to $2,500 per day</td><td>Some do not allow business use at all</td></tr>
</tbody></table>
<p>Because these limits are not published in one central place, the most reliable way to check is to open your bank's app, start a Zelle payment and look for a "limits" link, or call business banking. Zelle's own <a href="https://www.zelle.com/" target="_blank" rel="noopener">official website</a> also points users to their bank for limit questions.</p>

<h2>How to set up Zelle for a small business account</h2>
<p>Setting up Zelle for business takes a few minutes if your bank supports it:</p>
<ol>
<li><strong>Confirm eligibility.</strong> Ask your bank, or check its Zelle page, whether small business checking accounts can enroll. Some banks limit Zelle to sole proprietors or to accounts below a certain size.</li>
<li><strong>Choose a dedicated identifier.</strong> Use a business email such as payments@yourbusiness.com rather than your personal phone number. An email address can only be enrolled with one bank at a time, so pick one you will keep.</li>
<li><strong>Enroll in the bank's app.</strong> Open Zelle in your business banking app, add the email or phone number, and confirm it with the one-time code.</li>
<li><strong>Check the display name.</strong> Clients see the name on the enrolled account when they confirm a payment. A clear legal business name reduces the chance they hesitate or send money to the wrong place.</li>
<li><strong>Note your limits and receiving rules.</strong> Write down the daily and monthly figures and any review periods so you can set the right expectations on invoices.</li>
<li><strong>Run a test.</strong> Ask a colleague or friend to send $1 so you can see how payments and memos appear.</li>
</ol>

<h2>Zelle, taxes and recordkeeping</h2>
<p>Because Zelle moves money straight between bank accounts, it does not issue Form 1099-K to you, and you will not get a year-end Zelle tax statement. That makes your own records the only link between a deposit and the sale behind it. A simple routine works well:</p>
<ul>
<li>Match each Zelle deposit to an invoice number on the day it arrives.</li>
<li>Record split payments as separate receipts against one invoice.</li>
<li>Keep invoices and bank statements together for at least the period your tax authority requires (the IRS generally points to three years, longer in some cases).</li>
<li>Treat refunds sent by Zelle as negative receipts linked to the original invoice.</li>
</ul>
<p>For freelancers and contractors who receive most income this way, it is worth reading our guide to <a href="/blog/how-to-invoice-as-a-sole-proprietor">invoicing as a sole proprietor</a>, which covers numbering and record retention.</p>

<h2>How to check and raise your Zelle business limit</h2>
<ol>
<li><strong>Find the limit in your app.</strong> Most banks show daily and monthly limits on the Zelle send screen or in settings.</li>
<li><strong>Confirm your account type.</strong> Make sure Zelle is linked to your business checking account, not a personal one. Business accounts often carry higher caps.</li>
<li><strong>Wait out the new-enrollment period.</strong> If you just enrolled or changed your email or phone number, limits may rise automatically after a few weeks of normal use.</li>
<li><strong>Ask about a temporary increase.</strong> Some banks raise limits for a specific known payment if you call. Others never make exceptions.</li>
<li><strong>Consider a different product.</strong> If you regularly move more than your Zelle limit allows, ACH or wire transfers are built for larger amounts.</li>
</ol>

<h2>Worked example: a large invoice and a Zelle limit</h2>
<p>A plumbing company finishes a water heater replacement and sends invoice #2026-0418 for $6,240. The homeowner wants to pay by Zelle, but their bank allows $3,500 per day.</p>
<table><thead><tr><th>Option</th><th>How it works</th><th>Cost to the plumber</th><th>When paid in full</th></tr></thead><tbody>
<tr><td>Split Zelle payments</td><td>$3,500 today, $2,740 tomorrow</td><td>$0</td><td>Day 2</td></tr>
<tr><td>ACH bank transfer</td><td>Client pays from their bank using your routing and account numbers</td><td>$0 to a small per-transfer fee, depending on your bank</td><td>Usually 1 to 2 business days</td></tr>
<tr><td>Card via payment link</td><td>Client pays online with a card</td><td>About 3% of $6,240, or roughly $187 (illustrative)</td><td>Same day, funds settle in 1 to 2 days</td></tr>
</tbody></table>
<p>Split payments are fine as long as you record both against the same invoice. Note each payment's date and amount, and send one <a href="/blog/payment-receipt-template">payment receipt</a> once the balance hits zero. If the client pays part and stops, treat the rest as an <a href="/blog/overdue-invoice">overdue invoice</a> and follow up the same way you would any unpaid balance.</p>

<h2>How to add Zelle to your invoices</h2>
<p>Zelle has no invoice feature of its own, so your invoice carries the instructions. Keep them short and exact:</p>
<ul>
<li>The email address or US mobile number enrolled with your business account.</li>
<li>The business name the client will see when they confirm the recipient.</li>
<li>The invoice number to put in the memo.</li>
<li>A note on limits, such as "For amounts above $3,000, please pay by ACH using the bank details below."</li>
</ul>
<p>You can add a payment instructions section in our <a href="/invoice-generator">free invoice generator</a> and save it for every invoice. If you also accept other apps, our guide on <a href="/blog/venmo-zelle-cash-app-invoice">invoicing with Venmo, Zelle and Cash App</a> shows how to list several options without clutter, and <a href="/blog/zelle-vs-venmo">Zelle vs Venmo</a> compares the two for business use.</p>

<h3>Example payment block</h3>
<table><thead><tr><th>Method</th><th>Details</th></tr></thead><tbody>
<tr><td>Zelle (up to your bank's limit)</td><td>payments@brightflowplumbing.com, Bright Flow Plumbing LLC</td></tr>
<tr><td>ACH (any amount)</td><td>Routing 000000000, Account ending 4421 (full details on request)</td></tr>
<tr><td>Memo</td><td>Invoice 2026-0418</td></tr>
</tbody></table>
<p>For more on what to print and what to keep private, see <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</p>

<h2>Zelle vs other ways to get paid</h2>
<table><thead><tr><th>Method</th><th>Typical speed</th><th>Typical cost to you</th><th>Limits</th><th>Reversible?</th></tr></thead><tbody>
<tr><td>Zelle</td><td>Minutes</td><td>Usually free</td><td>Sender's bank limit</td><td>Rarely</td></tr>
<tr><td>ACH transfer</td><td>Same day to 2 business days</td><td>Free to low flat fee</td><td>Bank limits; Same Day ACH up to $1 million per payment</td><td>Returns possible in set windows</td></tr>
<tr><td>Wire transfer</td><td>Same day</td><td>Incoming fee often $15 or so (varies)</td><td>High</td><td>Very rarely</td></tr>
<tr><td>Card or payment link</td><td>Instant authorization</td><td>About 2.5% to 3.5% plus fixed fee</td><td>Card limits</td><td>Chargebacks possible</td></tr>
<tr><td>Check</td><td>Days</td><td>Low</td><td>None in practice</td><td>Can bounce</td></tr>
</tbody></table>
<p>For larger B2B balances, our guide on <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> walks through setup, and <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> explains which suits bigger invoices.</p>

<h2>Common mistakes with Zelle business payments</h2>
<ul>
<li><strong>Using a personal account for business income.</strong> It muddies your books and may break your bank's terms.</li>
<li><strong>Assuming the client can send any amount.</strong> State an alternative method on every invoice above a few thousand dollars.</li>
<li><strong>Trusting payment emails.</strong> Scammers send fake "payment received" or "upgrade to business to receive funds" emails. Check your banking app before you mark an invoice paid. Our guide to <a href="/blog/invoice-scams">invoice scams</a> covers the common patterns.</li>
<li><strong>Accepting overpayments.</strong> If someone "accidentally" sends too much and asks for a refund to a different account, stop. That is a classic scam.</li>
<li><strong>Not recording the invoice number.</strong> Zelle memos are short and optional, so match payments to invoices the day they arrive.</li>
<li><strong>Using Zelle with strangers for goods.</strong> With no buyer protection either way, Zelle works best with clients you know.</li>
</ul>

<h2>Is Zelle a good fit for your business?</h2>
<p>Zelle works well for local service businesses, contractors and freelancers with repeat clients who already bank in the US and pay invoices of a few hundred to a few thousand dollars. It is weaker for e-commerce, international clients, or invoices that regularly exceed common daily limits. A sensible setup is Zelle for smaller invoices, ACH for larger ones, and a card link only when the client insists, with any card fee handled under your local <a href="/blog/credit-card-surcharge-rules">surcharge rules</a>.</p>
<p>Whatever mix you choose, make the instructions part of the invoice itself. Our <a href="/invoice-generator">free invoice generator</a> needs no sign-up, builds the PDF right in your browser, and lets you add Zelle limits, ACH details and your invoice number in one place, so clients know exactly how to pay before they hit their Zelle limit.</p>
`,
  },
  {
    slug: "tap-to-pay-on-iphone",
    title: "Tap to Pay on iPhone: Setup, Fees and Limits (2026)",
    description:
      "Tap to Pay on iPhone lets you take card payments with no reader. Compare Square, Stripe and PayPal fees, see setup steps, and learn the limits before you start.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "card-readers-for-small-business",
      "apple-pay-google-pay-business",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "Which iPhones support Tap to Pay?",
        a: "Apple lists iPhone XS or later running a recent version of iOS as the requirement, along with a supported payment app from a provider such as Square, Stripe or PayPal. Older models cannot accept contactless payments this way. Keep iOS updated, because Apple and the payment apps sometimes require newer versions for features like PIN entry. Check Apple's Tap to Pay on iPhone page for the current device list in your country.",
      },
      {
        q: "Does Apple charge a fee for Tap to Pay on iPhone?",
        a: "Apple does not bill merchants directly for Tap to Pay on iPhone. You pay the processing fees of the payment provider whose app you use, such as Square, Stripe or PayPal. Some providers charge exactly their standard in-person rate, while others add a small per-transaction fee for Tap to Pay. Compare the provider's current pricing page before you commit, especially if you take many small payments.",
      },
      {
        q: "Can customers pay with a physical card, not just Apple Pay?",
        a: "Yes. Tap to Pay on iPhone accepts contactless credit and debit cards as well as Apple Pay and other digital wallets on phones and watches. The card must have the contactless symbol. Customers with older chip-only or magstripe-only cards cannot tap, so keep a backup such as a payment link, a card reader, or manual entry if your provider supports it.",
      },
      {
        q: "Is Tap to Pay on iPhone secure?",
        a: "Apple says card numbers are not stored on the iPhone or on Apple servers, and payments are encrypted using the same Secure Element technology as Apple Pay. Your payment provider handles processing and fraud tools. You still need to protect your phone with a passcode, keep the payment app logged in only on devices you control, and never write card numbers down if a tap fails.",
      },
      {
        q: "Can I use Tap to Pay on iPhone without internet?",
        a: "An internet connection is normally required to authorize payments. Some providers offer limited offline modes that store payments and process them when you reconnect, but these carry a risk that a card is later declined, and you absorb that loss. If you work in places with weak signal, test coverage first and consider a reader with a proper offline mode as backup.",
      },
      {
        q: "Is there a maximum amount for Tap to Pay on iPhone?",
        a: "Limits depend on your payment provider, your account and sometimes the card type. Some providers set per-transaction caps for new accounts or for contactless cards, and banks may require PIN entry above certain amounts. For large jobs, many businesses send an invoice with an ACH or payment link option instead. Check your provider's help center for its current limits.",
      },
      {
        q: "Do I need a business account to use Tap to Pay on iPhone?",
        a: "You need an account with a supported payment provider, which typically asks for your business details, tax ID or Social Security number, and a bank account for payouts. Sole proprietors can usually sign up with their own name and SSN. Using a separate business bank account for payouts keeps your records cleaner and makes it easier to match deposits to sales.",
      },
      {
        q: "How do refunds work with Tap to Pay on iPhone?",
        a: "Refunds are handled in the payment provider's app or dashboard, not by Apple. You usually find the original payment and issue a full or partial refund back to the same card. Whether the original processing fee is returned depends on the provider's policy, so read it before you set your refund terms, and record the refund against the original invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Tap to Pay on iPhone turns a compatible iPhone into a contactless card terminal. Customers tap a card, phone or watch on your iPhone, and a payment app such as Square, Stripe or PayPal processes the sale. There is no reader to buy; you pay the provider's in-person processing fee, typically around 2.3% to 2.7% plus a few cents.</p>

<p>For mobile service businesses, market stalls and anyone who invoices on site, Tap to Pay on iPhone removes the need to carry extra hardware. This guide covers how it works, what you need, how fees compare across the main providers as of October 2026, step-by-step setup, and the limits worth knowing before you rely on it.</p>

<h2>What is Tap to Pay on iPhone?</h2>
<p>Tap to Pay on iPhone is an Apple feature that uses the phone's built-in NFC chip to read contactless payments. Apple provides the technology; a payment service provider supplies the app, the merchant account and the processing. The customer sees a payment screen on your iPhone and taps their card or device near the top of the phone.</p>
<p>It accepts:</p>
<ul>
<li>Contactless credit and debit cards (Visa, Mastercard, American Express, Discover and others supported by your provider).</li>
<li>Apple Pay on iPhone and Apple Watch.</li>
<li>Other digital wallets, such as Google Pay on Android phones.</li>
</ul>
<p>Apple's <a href="https://developer.apple.com/tap-to-pay/" target="_blank" rel="noopener">Tap to Pay on iPhone page</a> lists the supported countries and payment platforms. Where supported, customers can also enter a PIN on your screen with accessibility options.</p>
<p>If you also want to accept wallets online, see our guide to <a href="/blog/apple-pay-google-pay-business">Apple Pay and Google Pay for business</a>.</p>

<h2>What do you need to use Tap to Pay on iPhone?</h2>
<table><thead><tr><th>Requirement</th><th>Details</th></tr></thead><tbody>
<tr><td>iPhone</td><td>iPhone XS or later with a recent iOS version</td></tr>
<tr><td>Payment app</td><td>A supported provider app such as Square Point of Sale, Stripe-powered apps, or PayPal / Venmo business tools</td></tr>
<tr><td>Merchant account</td><td>An approved account with that provider, which includes identity checks</td></tr>
<tr><td>Payout account</td><td>A bank account for deposits, ideally a business checking account</td></tr>
<tr><td>Apple Account</td><td>Signed in on the iPhone; the app links Tap to Pay during setup</td></tr>
<tr><td>Internet</td><td>Wi-Fi or cellular data to authorize payments</td></tr>
</tbody></table>

<h2>How much does Tap to Pay on iPhone cost?</h2>
<p>Apple does not charge you a separate fee. You pay your payment provider's rate. The table below shows reported US in-person rates as of October 2026. Rates change, and some providers offer different pricing by plan or volume, so check each provider's pricing page before you choose.</p>
<table><thead><tr><th>Provider</th><th>Reported in-person rate</th><th>Extra Tap to Pay fee</th><th>Monthly fee</th></tr></thead><tbody>
<tr><td>Square (Free plan)</td><td>2.6% + 15 cents</td><td>None reported</td><td>$0 on the Free plan; paid plans have lower rates</td></tr>
<tr><td>Stripe (Terminal / Tap to Pay)</td><td>2.7% + 5 cents</td><td>About 10 cents per Tap to Pay authorization</td><td>None for standard pricing</td></tr>
<tr><td>PayPal (Point of Sale / Zettle)</td><td>2.29% + 9 cents</td><td>None reported</td><td>None for standard pricing</td></tr>
</tbody></table>
<p>Sources: provider pricing pages and pricing summaries reviewed in October 2026. See <a href="https://squareup.com/us/en/pricing" target="_blank" rel="noopener">Square pricing</a> and <a href="https://stripe.com/pricing" target="_blank" rel="noopener">Stripe pricing</a> for the current figures.</p>

<h3>Worked example: fees on an $80 sale</h3>
<table><thead><tr><th>Provider</th><th>Calculation</th><th>Fee</th><th>You keep</th></tr></thead><tbody>
<tr><td>Square</td><td>$80 x 2.6% + $0.15</td><td>$2.23</td><td>$77.77</td></tr>
<tr><td>Stripe</td><td>$80 x 2.7% + $0.05 + $0.10</td><td>$2.31</td><td>$77.69</td></tr>
<tr><td>PayPal</td><td>$80 x 2.29% + $0.09</td><td>$1.92</td><td>$78.08</td></tr>
</tbody></table>
<p>On 300 sales a month at $80, the gap between the cheapest and most expensive option is roughly $117 a month. For very small tickets, the fixed fee matters more than the percentage. Our breakdowns of <a href="/blog/stripe-fees">Stripe fees</a>, <a href="/blog/paypal-fees">PayPal fees</a> and <a href="/blog/credit-card-processing-fees">credit card processing fees</a> go deeper.</p>

<h2>How to set up Tap to Pay on iPhone (step by step)</h2>
<ol>
<li><strong>Pick a provider.</strong> Choose based on fees, the rest of your setup (invoicing, online store, point of sale) and payout speed. If you already send invoices through one provider, staying with it keeps reporting in one place.</li>
<li><strong>Create and verify your merchant account.</strong> Enter your legal business name, address, EIN or SSN, and bank details. Approval is often quick but can take longer if extra checks are needed.</li>
<li><strong>Update your iPhone.</strong> Install the latest iOS and the provider's app.</li>
<li><strong>Enable Tap to Pay in the app.</strong> The app walks you through accepting Apple's terms and linking your Apple Account.</li>
<li><strong>Run a test payment.</strong> Charge a small amount to your own card, then refund it to confirm everything works end to end.</li>
<li><strong>Set receipts and tips.</strong> Turn on email or text receipts, tip prompts if relevant, and your sales tax settings.</li>
<li><strong>Train anyone else using it.</strong> Show staff where to hold the card (near the top of the phone) and what to do when a tap fails.</li>
</ol>

<h2>Tap to Pay on iPhone vs a card reader</h2>
<table><thead><tr><th>Factor</th><th>Tap to Pay on iPhone</th><th>Dedicated card reader</th></tr></thead><tbody>
<tr><td>Hardware cost</td><td>$0 beyond your phone</td><td>From about $50 for basic readers to several hundred for terminals</td></tr>
<tr><td>Chip and swipe cards</td><td>No, contactless only</td><td>Usually yes</td></tr>
<tr><td>Battery</td><td>Uses your phone's battery</td><td>Separate battery</td></tr>
<tr><td>Printed receipts</td><td>Digital only unless you add a printer</td><td>Some terminals print</td></tr>
<tr><td>Best for</td><td>Low to medium volume, mobile work</td><td>Counters, high volume, customers with older cards</td></tr>
</tbody></table>
<p>Our guide to <a href="/blog/card-readers-for-small-business">card readers for small business</a> compares hardware if you need chip support, and <a href="/blog/square-vs-clover">Square vs Clover</a> covers fuller point-of-sale systems.</p>

<h2>Limits and restrictions to know</h2>
<p>Tap to Pay on iPhone is convenient, but it has practical limits that catch new users:</p>
<ul>
<li><strong>Contactless only.</strong> It cannot read a chip by insertion or a magnetic stripe. Most US cards issued in recent years are contactless, but not all.</li>
<li><strong>Transaction caps.</strong> Providers may set per-payment or daily limits, especially for new accounts. Large tickets may need a payment link or invoice instead.</li>
<li><strong>Country availability.</strong> The feature and specific providers are available only in supported countries, and an account opened in one country normally cannot take payments in another.</li>
<li><strong>One app at a time.</strong> You can install several provider apps, but each payment runs through one provider, and fees and payouts follow that account.</li>
<li><strong>Payout timing.</strong> Standard payouts typically land in your bank in one to two business days; instant payouts usually cost an extra percentage.</li>
<li><strong>Phone dependency.</strong> If your iPhone is lost, broken or out of battery, you cannot take payments until you have another compatible device signed in.</li>
</ul>

<h2>Tips, sales tax and receipts: a worked example</h2>
<p>A mobile dog groomer finishes a full groom and nail trim. The services, totaling $95, are taxable in her area at an illustrative combined rate of 7.25%, and the customer adds a 15% tip on the pre-tax amount in the payment app.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full groom, medium dog</td><td>$80.00</td></tr>
<tr><td>Nail trim add-on</td><td>$15.00</td></tr>
<tr><td>Subtotal</td><td>$95.00</td></tr>
<tr><td>Sales tax (7.25%, illustrative)</td><td>$6.89</td></tr>
<tr><td>Invoice total</td><td>$101.89</td></tr>
<tr><td>Tip (15% of $95)</td><td>$14.25</td></tr>
<tr><td>Charged by Tap to Pay</td><td>$116.14</td></tr>
<tr><td>Square fee (2.6% + $0.15)</td><td>$3.17</td></tr>
<tr><td>Net payout</td><td>$112.97</td></tr>
</tbody></table>
<p>In her books, she records $95.00 of sales, $6.89 of sales tax collected (owed to the state), $14.25 of tips and $3.17 of processing fees. Whether services are taxable, and at what rate, depends on your state and locality; our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the arithmetic once you know the rate.</p>

<h2>Taxes: will you get a 1099-K?</h2>
<p>Payments you take through Square, Stripe, PayPal and similar processors are reported by the processor on Form 1099-K once you pass the federal reporting threshold. Under the One Big Beautiful Bill Act, that threshold returned to more than $20,000 in payments and more than 200 transactions per year. Some states set lower thresholds. Either way, all business income is taxable whether or not you receive a form, so reconcile your processor's reports with your invoices each month. The IRS explains the form on its <a href="https://www.irs.gov/businesses/understanding-your-form-1099-k" target="_blank" rel="noopener">Understanding your Form 1099-K</a> page.</p>

<h2>Using Tap to Pay on iPhone with invoices</h2>
<p>Many service businesses send an invoice and then take payment on the spot. A clean workflow looks like this:</p>
<ol>
<li>Create the invoice with an invoice number, line items and tax. You can do this in our <a href="/invoice-generator">free invoice generator</a>.</li>
<li>Show or send the PDF to the client and confirm the total.</li>
<li>Charge the exact total with Tap to Pay and enter the invoice number in the payment note.</li>
<li>Send the provider's receipt or your own <a href="/blog/payment-receipt-template">payment receipt</a>, and mark the invoice paid.</li>
</ol>
<p>If the client cannot pay on site, add a link instead. Our guide to <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows how.</p>

<h2>Which provider should you choose?</h2>
<p>Fees are only part of the decision. Match the provider to how you sell:</p>
<table><thead><tr><th>If you mainly...</th><th>Consider</th><th>Why</th></tr></thead><tbody>
<tr><td>Sell at a counter or market with a product catalog</td><td>Square</td><td>Free point-of-sale app with items, inventory and reports built in</td></tr>
<tr><td>Already take online payments with a developer or platform</td><td>Stripe (via a Stripe-powered app)</td><td>In-person and online sales in one account and one set of reports</td></tr>
<tr><td>Have customers who already use PayPal or Venmo</td><td>PayPal Point of Sale</td><td>Lower reported percentage and a familiar brand for buyers</td></tr>
<tr><td>Send invoices first and collect later</td><td>Whichever you use for invoices or payment links</td><td>One dashboard for invoice payments and taps</td></tr>
</tbody></table>
<p>Switching later is easy because there is no hardware to replace. Many small businesses start with Square for its simple app, then compare after three months of real sales data. Our <a href="/blog/stripe-vs-square">Stripe vs Square</a> comparison covers the wider feature differences.</p>

<h2>Common mistakes with Tap to Pay on iPhone</h2>
<ul>
<li><strong>No backup for non-contactless cards.</strong> Some customers still carry chip-only cards. Keep a payment link or reader handy.</li>
<li><strong>Relying on weak signal.</strong> Test reception at job sites, markets and venues before event day.</li>
<li><strong>Adding a card fee without checking rules.</strong> Surcharges have card-network and state rules. Read our <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first.</li>
<li><strong>Forgetting sales tax.</strong> Set tax in the app or on the invoice so the charged total matches your records.</li>
<li><strong>Mixing personal and business payouts.</strong> Route deposits to a business account.</li>
<li><strong>Not reconciling payouts.</strong> Providers deposit net of fees, so record gross sales and fees separately in your books.</li>
</ul>

<h2>Is Tap to Pay on iPhone right for your business?</h2>
<p>Tap to Pay on iPhone is a strong fit for mobile trades, pop-up sellers, personal trainers, tutors and anyone who meets clients in person and wants to avoid buying hardware. It is less suited to high-volume counters, places with poor coverage, or customers who mostly carry older cards. Start with the provider you already use for invoicing or online sales, test a few payments, then compare actual fees after a month.</p>
<p>Pair it with a clear invoice so every tap matches a record. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and creates a PDF in your browser that you can show the customer right before they tap to pay on your iPhone.</p>
`,
  },
  {
    slug: "collection-agency-for-unpaid-invoices",
    title: "Collection Agency for Unpaid Invoices: Fees and When to Use",
    description:
      "When should you hand unpaid invoices to a collection agency? Typical contingency fees, the FDCPA basics, how to choose an agency and what to try first.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-collections",
      "small-claims-court-unpaid-invoice",
      "demand-letter-for-payment",
    ],
    faqs: [
      {
        q: "How much of the debt does a collection agency keep?",
        a: "Most commercial and consumer agencies work on contingency, keeping a percentage of what they actually collect. Rates commonly fall somewhere between about 20% and 50%, with lower rates for large, recent balances and higher rates for small, old or hard-to-find debtors. Legal action usually costs extra. These ranges are illustrative, so get a written rate schedule from each agency you consider.",
      },
      {
        q: "Does using a collection agency hurt my client relationship?",
        a: "Usually, yes. Once an account goes to collections, most clients will not work with you again, and some will dispute the debt more firmly. That is why agencies are normally a last step for clients you are prepared to lose. Before you place an account, send a final notice that names the agency date, which sometimes produces payment without any fee at all.",
      },
      {
        q: "Can I send an invoice to collections without a contract?",
        a: "Yes. A signed contract helps, but an agency can collect on any valid, documented debt. Emails approving the work, purchase orders, delivery records, signed estimates and the invoice itself all support your claim. The weaker your paperwork, the more likely the debtor disputes it, and some agencies charge more or decline accounts with thin documentation.",
      },
      {
        q: "Does the FDCPA apply to business debts?",
        a: "Generally no. The federal Fair Debt Collection Practices Act covers third-party collectors collecting consumer debts, meaning debts for personal, family or household purposes. Business-to-business invoices are usually outside it. State laws may still regulate collectors and collection practices, and reputable commercial agencies follow professional codes. If your customers are individuals, the FDCPA and Regulation F apply to the agency you hire.",
      },
      {
        q: "Can a collection agency report my client to credit bureaus?",
        a: "Some can. Consumer collection agencies may report to the consumer credit bureaus, subject to strict accuracy and notice rules. Commercial agencies may report to business credit bureaus. Not every agency reports, and reporting is not always useful for small balances. Ask how the agency handles reporting and disputes before you sign.",
      },
      {
        q: "Can I deduct an unpaid invoice as a bad debt?",
        a: "It depends on your accounting method. Businesses using the accrual method that already reported the invoice as income can often deduct a business bad debt once it becomes worthless. Cash-method businesses usually cannot, because they never reported the unpaid amount as income. Collection fees on amounts recovered are generally deductible business expenses. Confirm with a tax professional.",
      },
      {
        q: "What is the difference between assigning and selling a debt?",
        a: "When you place an account with an agency on contingency, you still own the debt and the agency collects on your behalf for a fee. When you sell a debt, a buyer pays you a lump sum, often a small fraction of face value, and keeps whatever it collects. Selling ends your involvement quickly but returns far less money.",
      },
      {
        q: "Can I take an account back from a collection agency?",
        a: "Usually yes, but read the agreement first. Many agencies allow you to recall an account, though some charge a fee or claim their percentage if the debtor pays you directly after placement. Tell the agency immediately if a client contacts you to pay, so collection activity stops and you avoid paying a commission twice or misleading the debtor.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A collection agency for unpaid invoices is a third party that pursues an overdue balance for you, usually on contingency, keeping a share of what it recovers. Use one when an invoice is 90 or more days late, your own reminders and a final notice have failed, and the amount is worth giving up a meaningful percentage to recover.</p>

<p>Hiring a collector is a big step. It usually ends the client relationship and costs a fee you will feel. But for a business with real money stuck in old invoices, it can be the most practical way to recover something without going to court yourself. This guide covers how collection agencies work, typical fees, the FDCPA basics, when to use one, and the steps to take first.</p>

<h2>What is a collection agency?</h2>
<p>A collection agency is a company that recovers overdue debts for creditors. For small businesses, there are two main types:</p>
<ul>
<li><strong>Commercial collection agencies</strong> handle business-to-business debts, such as unpaid invoices from companies, contractors or agencies.</li>
<li><strong>Consumer collection agencies</strong> handle debts owed by individuals for personal, family or household purposes, such as a homeowner's repair bill or a patient's balance.</li>
</ul>
<p>Agencies contact the debtor by letter, phone and email, negotiate payment plans or settlements, locate debtors who have moved, and in some cases coordinate with collection attorneys if a lawsuit is needed. Most work on contingency: no recovery, no fee.</p>

<h2>How much does a collection agency charge?</h2>
<p>Contingency rates depend on the age of the debt, the balance, the documentation and how many accounts you place. The ranges below are illustrative and based on common industry practice; always get a written fee schedule.</p>
<table><thead><tr><th>Account profile</th><th>Typical contingency range (illustrative)</th></tr></thead><tbody>
<tr><td>Recent B2B debt (under 6 months), larger balance</td><td>About 20% to 30%</td></tr>
<tr><td>Older debt (6 to 12 months)</td><td>About 30% to 40%</td></tr>
<tr><td>Very old, small or hard-to-locate debtor</td><td>About 40% to 50%</td></tr>
<tr><td>Accounts sent to a collection attorney</td><td>Higher rate plus possible court costs or upfront fees</td></tr>
</tbody></table>
<p>Some agencies offer flat-fee demand letter services (a fixed charge per account for a series of letters) before full contingency collection. Those are cheap and sometimes effective on recent debts where the client simply needs a firm push.</p>

<h3>Worked example: is it worth it?</h3>
<p>A marketing consultant has a $4,800 invoice that is 120 days overdue. Reminders and a final notice have not worked. A commercial agency quotes 30% contingency.</p>
<table><thead><tr><th>Outcome</th><th>Recovered</th><th>Agency fee (30%)</th><th>Consultant receives</th></tr></thead><tbody>
<tr><td>Full recovery</td><td>$4,800</td><td>$1,440</td><td>$3,360</td></tr>
<tr><td>Settlement at 75%</td><td>$3,600</td><td>$1,080</td><td>$2,520</td></tr>
<tr><td>Nothing recovered</td><td>$0</td><td>$0</td><td>$0</td></tr>
</tbody></table>
<p>Compared with writing off the full $4,800, receiving $3,360 is a good result. Compared with filing a <a href="/blog/small-claims-court-unpaid-invoice">small claims case for an unpaid invoice</a> yourself, it costs more but takes less of your time, and an agency may locate assets or a new address that you cannot.</p>

<h2>When should you use a collection agency?</h2>
<p>A collection agency makes sense when most of these are true:</p>
<ol>
<li>The invoice is at least 60 to 90 days past due.</li>
<li>You have sent reminders, made phone calls and issued a written final notice.</li>
<li>The client has stopped responding, keeps breaking promises, or refuses without a real dispute.</li>
<li>The balance is large enough that recovering 50% to 80% of it is worth the effort.</li>
<li>You have documentation: a contract or accepted quote, the invoice, delivery proof and your correspondence.</li>
<li>You are prepared to lose the client.</li>
</ol>
<p>It is usually <em>not</em> the right move when the client disputes the quality of the work in good faith. Resolve that first using an <a href="/blog/invoice-dispute">invoice dispute process</a>. It is also a poor fit for very small balances where a fee would eat most of the recovery.</p>

<h2>What to try before a collection agency</h2>
<p>Most unpaid invoices are collected without outside help. Work through an escalation sequence first:</p>
<ol>
<li><strong>Friendly reminder</strong> a few days after the due date. Our guide on <a href="/blog/overdue-invoice">handling an overdue invoice</a> includes wording.</li>
<li><strong>Phone call</strong> to find out whether there is a problem with the invoice, the approval process or cash flow.</li>
<li><strong>Payment plan offer</strong> in writing. A signed <a href="/blog/payment-plan-agreement">payment plan agreement</a> often recovers more than a collector would.</li>
<li><strong>Late fees or interest</strong> if your terms allow them, or under statute where available.</li>
<li><strong>Demand letter</strong> stating the amount, the deadline and the consequences. See our <a href="/blog/demand-letter-for-payment">demand letter for payment</a> template.</li>
<li><strong>Final notice</strong> naming the date you will pass the account to an agency or court. Our <a href="/blog/final-notice-before-legal-action">final notice before legal action</a> guide has a sample.</li>
</ol>
<p>For the full process from first reminder to write-off, read our pillar guide to <a href="/blog/invoice-collections">invoice collections</a>.</p>

<h2>FDCPA basics for small businesses</h2>
<p>The Fair Debt Collection Practices Act (FDCPA) is the main US federal law on debt collection. Key points for a small business owner:</p>
<ul>
<li><strong>It covers consumer debts.</strong> Debts for personal, family or household purposes. Most B2B invoices fall outside it.</li>
<li><strong>It mainly covers third-party collectors.</strong> Collection agencies and debt collection lawyers, not usually the original business collecting its own debts in its own name.</li>
<li><strong>It bans abusive, unfair and deceptive practices.</strong> Such as threats, harassment, false statements about the amount or legal consequences, and contacting people at unreasonable times.</li>
<li><strong>Consumers can dispute and request validation.</strong> The collector must provide validation information, and Regulation F, administered by the CFPB, sets detailed rules on communications.</li>
</ul>
<p>The FTC's summary of the <a href="https://www.ftc.gov/legal-library/browse/statutes/fair-debt-collection-practices-act" target="_blank" rel="noopener">Fair Debt Collection Practices Act</a> and the <a href="https://www.consumerfinance.gov/rules-policy/regulations/1006/" target="_blank" rel="noopener">CFPB's Regulation F</a> are the authoritative sources. Many states add their own licensing and conduct rules for collectors, including some that cover commercial debts. If you collect from consumers, choose a licensed agency that can show its compliance process, because its conduct can reflect on your business.</p>
<p><em>This is general information, not legal advice. Collection law varies by state and country; consult an attorney for your situation.</em></p>

<h2>What happens after you place an account</h2>
<ol>
<li><strong>Intake.</strong> You sign an agreement and upload the invoice and supporting documents. The agency checks the debtor's details and may run skip tracing if contact information is stale.</li>
<li><strong>Demand phase.</strong> The agency sends written demands and makes calls. For consumer debts, it must send the validation information required under Regulation F within the required timeframe.</li>
<li><strong>Negotiation.</strong> Many debtors pay in full once a third party is involved. Others propose installments or a reduced lump sum. Good agencies ask you before accepting any settlement below the full amount.</li>
<li><strong>Remittance.</strong> Collected funds are typically deposited into the agency's trust account and remitted to you, net of commission, on a monthly or set schedule.</li>
<li><strong>Legal referral.</strong> If the debtor has assets but will not pay, the agency may recommend a collection attorney. You decide whether to approve the extra cost.</li>
<li><strong>Closure.</strong> Accounts that cannot be collected are closed and returned, with notes you can use for a bad debt write-off.</li>
</ol>

<h2>Collection agency vs small claims vs attorney</h2>
<table><thead><tr><th>Option</th><th>Upfront cost</th><th>Typical cost if successful</th><th>Your time</th><th>Best for</th></tr></thead><tbody>
<tr><td>Collection agency</td><td>Usually none</td><td>Contingency percentage</td><td>Low</td><td>Unresponsive debtors, moderate balances</td></tr>
<tr><td>Small claims court</td><td>Filing and service fees</td><td>Fees, possibly recoverable</td><td>Medium to high</td><td>Clear debts under your state's limit</td></tr>
<tr><td>Collection attorney</td><td>Sometimes a retainer or suit fee</td><td>Contingency or hourly</td><td>Low to medium</td><td>Large balances, debtors with assets</td></tr>
<tr><td>Debt sale</td><td>None</td><td>You accept a fraction of face value</td><td>Very low</td><td>Old portfolios you want off the books</td></tr>
</tbody></table>
<p>A court judgment is not the same as cash. Even after you win, you may still need to enforce it through bank levies or wage garnishment, which is one reason some owners prefer an agency that handles the whole process.</p>

<h2>How to choose a collection agency</h2>
<table><thead><tr><th>What to check</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Commercial vs consumer focus</td><td>B2B and consumer collection need different skills and compliance</td></tr>
<tr><td>Licensing and bonding</td><td>Many states require collectors to be licensed; ask for proof</td></tr>
<tr><td>Contingency rate and extra fees</td><td>Look for fees on legal action, skip tracing or account recall</td></tr>
<tr><td>Trust account handling</td><td>Collected funds should be held separately and remitted on a set schedule</td></tr>
<tr><td>Reporting</td><td>You should see activity and status updates on each account</td></tr>
<tr><td>Professional memberships</td><td>Commercial collectors may belong to groups such as the Commercial Collection Agency Association</td></tr>
<tr><td>References</td><td>Ask for clients in your industry and balance range</td></tr>
</tbody></table>

<h2>How collection fees affect your pricing and taxes</h2>
<p>Agency commissions are a cost of doing business, so build the risk into your terms. Some contracts include a clause making the client responsible for reasonable collection costs if an account goes to collections. Whether that clause is enforceable, and how much can be added, depends on your state and on whether the client is a consumer or a business, so have an attorney review it before you rely on it. For bookkeeping, record the full amount collected as a payment against the invoice and the commission as a separate collection expense, rather than recording only the net check. That keeps your receivables accurate and gives your accountant a clear picture at tax time.</p>

<h2>What to send the agency</h2>
<ul>
<li>A copy of each unpaid invoice with its number, date and due date. If you need to reissue a clean copy, our <a href="/invoice-generator">free invoice generator</a> creates one in minutes.</li>
<li>The contract, signed quote, statement of work or purchase order.</li>
<li>Proof of delivery or completion, such as signed work orders, photos or delivery confirmations.</li>
<li>Your reminder emails, notes from calls and any partial payments received.</li>
<li>Debtor contact details, including owners or principals for small companies.</li>
</ul>

<h2>Common mistakes with collection agencies</h2>
<ul>
<li><strong>Waiting too long.</strong> Recovery rates fall as debts age, and a debt can eventually pass the <a href="/blog/statute-of-limitations-unpaid-invoice">statute of limitations on unpaid invoices</a>.</li>
<li><strong>Placing disputed invoices.</strong> If the work is genuinely contested, a collector will struggle and the debtor may escalate.</li>
<li><strong>Signing without reading the fee terms.</strong> Watch for commissions on direct payments, minimum fees and long exclusivity periods.</li>
<li><strong>Continuing to chase after placement.</strong> Coordinate with the agency so the debtor gets one consistent message.</li>
<li><strong>Making threats yourself.</strong> Never threaten action you will not take or that the law does not allow.</li>
<li><strong>Not fixing the cause.</strong> Tighten deposits, terms and credit checks so fewer accounts reach this point. Our data on <a href="/blog/late-payment-statistics">late payment statistics</a> shows how common the problem is.</li>
</ul>

<h2>Preventing the next unpaid invoice</h2>
<p>A collection agency recovers money after the fact. Preventing late payment is cheaper: take deposits on larger jobs, set clear terms such as <a href="/blog/net-30-payment-terms">net 30 payment terms</a>, invoice promptly, and make paying easy with several methods listed on the invoice. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and downloads a professional PDF from your browser, so every invoice carries the due date, terms and payment details you would need if you ever had to hand it to a collection agency.</p>
`,
  },
  {
    slug: "statute-of-limitations-unpaid-invoice",
    title: "Statute of Limitations on Unpaid Invoices (US and UK)",
    description:
      "How long can you chase an unpaid invoice? See statute of limitations ranges by US state, the UK six-year rule, when the clock starts and what restarts it.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "small-claims-court-unpaid-invoice",
      "collection-agency-for-unpaid-invoices",
      "invoice-collections",
    ],
    faqs: [
      {
        q: "Does an unpaid invoice ever expire?",
        a: "The debt itself may still exist, but once the statute of limitations runs out, you generally lose the ability to win a lawsuit to collect it if the debtor raises the time limit as a defense. You can still ask for payment, and the client can still choose to pay. That is why it pays to act on overdue invoices long before the deadline approaches.",
      },
      {
        q: "Is an invoice a written contract for limitation purposes?",
        a: "Not always. An invoice on its own is often treated as evidence of the debt rather than a full written contract, especially if the client never signed anything. Courts may treat the claim as an oral contract, an open account or a sale of goods, each of which can carry a different deadline. A signed agreement or accepted quote makes the written contract period more likely to apply.",
      },
      {
        q: "Does sending reminders restart the statute of limitations?",
        a: "Generally no. Your own reminders, statements and demand letters do not reset the clock. What can restart or extend it in many places is action by the debtor, such as a written acknowledgment of the debt or a partial payment. The rules differ by state and country, so check the law that applies to your contract before relying on a restart.",
      },
      {
        q: "What is the statute of limitations for unpaid invoices in California?",
        a: "California generally allows four years for actions on a written contract and two years for oral contracts, under its Code of Civil Procedure. Claims on open book accounts can carry their own rules, and sales of goods may fall under the four-year UCC period. Confirm the current statute and how it applies to your facts with a California attorney or the court's self-help resources.",
      },
      {
        q: "How long do you have to sue for an unpaid invoice in the UK?",
        a: "In England and Wales, and in Northern Ireland, the general limitation period for a simple contract debt is six years from when the payment became due. Contracts made as deeds have a longer 12-year period. Scotland uses a different system with a five-year prescriptive period for most contractual debts. A written acknowledgment or part payment can restart the period in England and Wales.",
      },
      {
        q: "Can the contract shorten the statute of limitations?",
        a: "In many US states, parties can agree to a shorter limitation period, within limits. For sales of goods, the UCC allows the period to be reduced to as little as one year but not extended. Some contracts include such clauses quietly in the terms, so read your client agreements and supplier terms, because they could cut the time you have to sue.",
      },
      {
        q: "Which state's statute of limitations applies to my invoice?",
        a: "It is often the state where the lawsuit is filed, but a choice-of-law clause in your contract, the location of the parties and borrowing statutes can change the answer. If you and your client are in different states, assume the shorter period until a lawyer tells you otherwise, and file well inside it.",
      },
      {
        q: "Can I still report an old unpaid invoice to a collection agency?",
        a: "You can place an old business debt with a collector, but recovery rates drop sharply with age, and many agencies decline debts near or past the limitation period. For consumer debts, federal rules restrict collectors from suing or threatening to sue on time-barred debts. Act on overdue invoices within months, not years, to keep every option open.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The statute of limitations on unpaid invoices is the deadline to file a lawsuit to collect. In the US it is set by each state and usually runs 3 to 10 years for written contracts and 2 to 6 years for oral agreements, often starting on the due date. In England and Wales it is generally six years.</p>

<p>Most businesses never need to know this number, because invoices get paid or written off long before the deadline. But if a client owes you a significant amount and keeps stalling, the statute of limitations decides how long you have before the law stops helping you. This guide explains how limitation periods work for unpaid invoices, gives examples by US state and for the UK, shows when the clock starts and restarts, and lists the steps to protect your claim.</p>
<p><em>This is general information, not legal advice. Limitation periods change and depend on facts; check the current statute in your jurisdiction or ask a lawyer.</em></p>

<h2>What is a statute of limitations for an unpaid invoice?</h2>
<p>A statute of limitations (called a limitation period in the UK) is a law that sets the maximum time after a breach in which you can start legal proceedings. For an unpaid invoice, the breach is usually the client's failure to pay by the due date. After the period ends, the client can raise the time limit as a defense, and the court will normally dismiss the claim.</p>
<p>Three things decide which period applies:</p>
<ol>
<li><strong>The type of agreement.</strong> Written contract, oral contract, open account (a running balance of transactions), promissory note, or sale of goods.</li>
<li><strong>The governing law.</strong> Usually the state or country where you sue, unless the contract chooses another law.</li>
<li><strong>When the claim "accrued."</strong> For invoices, typically the payment due date or the date of the last transaction on an open account.</li>
</ol>

<h2>Statute of limitations on unpaid invoices by US state</h2>
<p>Every state sets its own periods. The examples below reflect commonly cited state statutes as of October 2026; they can change, and courts sometimes classify invoice claims differently. Verify the current text with your state legislature's website or a local attorney.</p>
<table><thead><tr><th>State</th><th>Written contract</th><th>Oral contract</th><th>Notes</th></tr></thead><tbody>
<tr><td>California</td><td>4 years</td><td>2 years</td><td>Open book accounts have their own provisions</td></tr>
<tr><td>Florida</td><td>5 years</td><td>4 years</td><td>Under Florida Statutes chapter 95</td></tr>
<tr><td>Illinois</td><td>10 years</td><td>5 years</td><td>One of the longer written-contract periods</td></tr>
<tr><td>New York</td><td>6 years</td><td>6 years</td><td>Contract actions under CPLR 213</td></tr>
<tr><td>Ohio</td><td>6 years</td><td>4 years</td><td>Shortened by a 2021 law</td></tr>
<tr><td>Pennsylvania</td><td>4 years</td><td>4 years</td><td>Written instruments under seal can differ</td></tr>
<tr><td>Texas</td><td>4 years</td><td>4 years</td><td>Debt claims generally 4 years</td></tr>
</tbody></table>

<h3>Sales of goods: the UCC four-year rule</h3>
<p>If your invoice is for goods rather than services, Article 2 of the Uniform Commercial Code, adopted in nearly every state, generally sets a four-year limitation period from the breach (UCC 2-725). The parties can shorten it by agreement to no less than one year but cannot extend it. Mixed contracts (goods plus installation, for example) are classified by their main purpose, which affects which rule applies.</p>

<h2>Statute of limitations on unpaid invoices in the UK</h2>
<table><thead><tr><th>Jurisdiction</th><th>General period for contract debts</th><th>Source</th></tr></thead><tbody>
<tr><td>England and Wales</td><td>6 years from when payment fell due (12 years for deeds)</td><td>Limitation Act 1980, sections 5 and 8</td></tr>
<tr><td>Northern Ireland</td><td>6 years for simple contracts</td><td>Limitation (Northern Ireland) Order 1989</td></tr>
<tr><td>Scotland</td><td>5-year prescriptive period for most contractual debts</td><td>Prescription and Limitation (Scotland) Act 1973</td></tr>
</tbody></table>
<p>You can read section 5 of the <a href="https://www.legislation.gov.uk/ukpga/1980/58/section/5" target="_blank" rel="noopener">Limitation Act 1980 on legislation.gov.uk</a>. In England and Wales, a written and signed acknowledgment of the debt or a part payment starts a fresh six-year period. UK businesses chasing late B2B payments can also claim interest and fixed compensation; see our guides to <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> and the <a href="/blog/uk-late-payment-law-2026">UK late payment law in 2026</a>.</p>

<h2>When does the clock start?</h2>
<p>For a single invoice with a stated due date, the clock usually starts the day after the due date passes without payment. Some practical examples:</p>
<ul>
<li><strong>Invoice dated March 1, 2026, terms net 30.</strong> Due March 31, 2026. A four-year period would generally end around March 31, 2030.</li>
<li><strong>Invoice marked "due on receipt."</strong> The clock may start on the invoice date or when the client received it.</li>
<li><strong>Open account with monthly purchases.</strong> Many states start the period from the last charge or last payment on the account.</li>
<li><strong>Installment agreement.</strong> Each missed installment may have its own clock, unless the contract has an acceleration clause and you invoke it.</li>
</ul>
<p>Clear due dates help. If your invoices say "net 30" without a date, add the actual due date. Our guide to <a href="/blog/net-30-payment-terms">net 30 payment terms</a> explains how to write them.</p>

<h2>What restarts or pauses the statute of limitations?</h2>
<table><thead><tr><th>Event</th><th>Typical effect (varies by jurisdiction)</th></tr></thead><tbody>
<tr><td>Debtor's written acknowledgment of the debt</td><td>Often restarts the period</td></tr>
<tr><td>Partial payment by the debtor</td><td>Often restarts the period</td></tr>
<tr><td>New written promise to pay</td><td>Often restarts or creates a new obligation</td></tr>
<tr><td>Your reminders and demand letters</td><td>Generally no effect</td></tr>
<tr><td>Debtor leaves the state or files bankruptcy</td><td>May pause (toll) the period</td></tr>
<tr><td>Filing a lawsuit</td><td>Stops the clock for that claim</td></tr>
</tbody></table>
<p>A signed <a href="/blog/payment-plan-agreement">payment plan agreement</a> is useful for two reasons: it gets money moving, and in many places it counts as a written acknowledgment.</p>

<h2>Worked example: a contractor's old invoice</h2>
<p>A Texas flooring contractor installed $9,350 of flooring for a property manager. The signed estimate included net 30 terms, and the invoice was dated June 2, 2023, due July 2, 2023. The client paid $2,000 on November 15, 2023, then stopped.</p>
<table><thead><tr><th>Date</th><th>Event</th><th>Balance</th></tr></thead><tbody>
<tr><td>June 2, 2023</td><td>Invoice issued</td><td>$9,350</td></tr>
<tr><td>July 2, 2023</td><td>Payment due</td><td>$9,350</td></tr>
<tr><td>November 15, 2023</td><td>Partial payment</td><td>$7,350</td></tr>
<tr><td>October 2026</td><td>Contractor reviews options</td><td>$7,350</td></tr>
</tbody></table>
<p>With a four-year period, the contractor likely has until at least July 2027, and possibly later if the partial payment restarted the clock under Texas law. Because the exact restart rule matters, the contractor should not wait. Sensible next steps are a <a href="/blog/demand-letter-for-payment">demand letter</a> this month, then a <a href="/blog/small-claims-court-unpaid-invoice">small claims filing</a> (Texas justice courts hear claims up to $20,000) or a <a href="/blog/collection-agency-for-unpaid-invoices">collection agency</a> if the client ignores it. A contractor in this position may also have lien rights, which have far shorter deadlines; see <a href="/blog/mechanics-lien">mechanics liens</a>.</p>

<h2>Other deadlines that can matter more</h2>
<p>The statute of limitations is usually the longest deadline in a collection, not the most urgent one. Watch these shorter clocks:</p>
<table><thead><tr><th>Deadline</th><th>Typical timeframe</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Mechanics lien filing (construction)</td><td>Often 60 to 120 days after last work, varies by state</td><td>Miss it and you lose lien rights against the property</td></tr>
<tr><td>Preliminary notices (construction)</td><td>Often within 20 to 60 days of first furnishing work</td><td>Required in some states to preserve lien rights</td></tr>
<tr><td>Bankruptcy proof of claim</td><td>Set by the bankruptcy court</td><td>File on time or you may get nothing from the estate</td></tr>
<tr><td>Contract dispute or notice clauses</td><td>Whatever the contract says</td><td>Some contracts require written notice of claims within days</td></tr>
<tr><td>Government contract claims</td><td>Set by statute or contract</td><td>Prompt payment and claims rules have their own timelines</td></tr>
</tbody></table>
<p>Contractors should read our guides to <a href="/blog/lien-waiver">lien waivers</a> and <a href="/blog/prompt-payment-act">the Prompt Payment Act</a> alongside this one.</p>

<h2>Consumer debts and time-barred debt</h2>
<p>If your customers are individuals rather than businesses, extra rules apply once a debt is old. Under the CFPB's Regulation F, third-party debt collectors may not sue or threaten to sue on a time-barred consumer debt. Several states go further and restrict collection or require specific disclosures on old consumer debts. Some states also have rules on whether a partial payment revives a time-barred consumer debt. If you hand old consumer balances to a collector, choose one that tracks these rules by state. See our guide to choosing a <a href="/blog/collection-agency-for-unpaid-invoices">collection agency for unpaid invoices</a> for what to ask.</p>

<h2>Clients in another state or country</h2>
<p>When your client is elsewhere, three questions decide your deadline: where you can sue (jurisdiction), which law the court applies (choice of law), and whether that state has a borrowing statute that imports a shorter foreign period. A choice-of-law clause in your terms, such as "This agreement is governed by the laws of the State of Texas," makes the answer far more predictable. For international clients, enforcement is often the bigger problem than the deadline itself, which is why deposits and milestone billing matter more for cross-border work.</p>

<h2>Steps to protect your right to collect</h2>
<ol>
<li><strong>Put dates on everything.</strong> Invoice date, due date and terms on every invoice. Our <a href="/invoice-generator">free invoice generator</a> includes both fields.</li>
<li><strong>Keep the paper trail.</strong> Contracts, accepted quotes, delivery proof, emails and payment records for at least the limitation period plus a margin.</li>
<li><strong>Track aging.</strong> Review receivables monthly and flag anything over 90 days.</li>
<li><strong>Escalate on a schedule.</strong> Reminder, call, final notice, then outside action. Our <a href="/blog/invoice-collections">invoice collections guide</a> lays out the sequence.</li>
<li><strong>Get acknowledgments in writing.</strong> If a client admits the debt, ask them to confirm it by email or signed letter.</li>
<li><strong>Calendar the deadline.</strong> Note the earliest possible expiry date and act well before it.</li>
</ol>

<h2>Records to keep while the clock runs</h2>
<p>If you ever need to sue, the court will want proof of the agreement, the work, the amount and the missed due date. Keep these together in one folder per client: the signed contract or accepted quote, every invoice and statement, delivery or completion proof, change orders, all correspondence about payment, and a ledger of payments received. A PDF copy of each invoice, saved on the day you issue it, is far more convincing than a document recreated years later.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Assuming the longest period applies.</strong> If the claim is classified as oral or as a sale of goods, your deadline may be shorter than you expect.</li>
<li><strong>Counting from the invoice date instead of the due date</strong>, or the other way round, without checking the rule.</li>
<li><strong>Believing reminders reset the clock.</strong> They usually do not.</li>
<li><strong>Ignoring contract clauses</strong> that shorten the period or choose another state's law.</li>
<li><strong>Waiting until the last month.</strong> Courts, process servers and collectors all take time.</li>
<li><strong>Threatening suit on a time-barred consumer debt.</strong> That can break consumer protection law.</li>
</ul>

<h2>Bottom line</h2>
<p>The statute of limitations on unpaid invoices gives you years, not months, in most places, but recovery gets harder every month an invoice ages. Treat the limitation period as a hard outer wall and aim to resolve every unpaid balance within the first few months. Start with clear, dated invoices: our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and downloads a PDF built in your browser, so you have a clean record if you ever need to rely on the statute of limitations on an unpaid invoice.</p>
`,
  },
  {
    slug: "swift-code-vs-iban",
    title: "SWIFT Code vs IBAN: What to Put on Your Invoice",
    description:
      "SWIFT code vs IBAN explained: what each identifies, formats by country, which you need for US, UK and EU payments, and a sample invoice payment block.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "bank-details-on-invoice",
      "how-long-does-a-wire-transfer-take",
      "wire-transfer-fees",
    ],
    faqs: [
      {
        q: "Is a SWIFT code the same as a BIC?",
        a: "Yes, for practical purposes. BIC stands for Business Identifier Code, defined by the ISO 9362 standard, and Swift is the registration authority that issues them. Banks, invoices and payment forms use SWIFT code, SWIFT/BIC and BIC interchangeably. It is an 8 or 11 character code that identifies a bank, and sometimes a specific branch, in international transfers.",
      },
      {
        q: "Do US bank accounts have an IBAN?",
        a: "No. The United States does not use the IBAN system. To receive an international payment into a US account, you give the payer your bank's SWIFT code, your ABA routing number and your account number, plus the bank's name and address. Some online services generate IBAN-style details for US businesses through partner banks abroad, but that is a different account, not your US account.",
      },
      {
        q: "Do I need a SWIFT code for a SEPA payment?",
        a: "Usually not. For euro transfers within the Single Euro Payments Area, the IBAN alone is normally enough, and banks can derive the BIC if needed. Some older forms still ask for it, so including your BIC on invoices does no harm. For payments outside SEPA or in other currencies, the payer's bank will typically need your SWIFT/BIC as well as the IBAN.",
      },
      {
        q: "How long is an IBAN?",
        a: "IBAN length is fixed per country, up to a maximum of 34 characters. A UK IBAN has 22 characters, a German IBAN 22, a French IBAN 27, and a Spanish IBAN 24. Every IBAN starts with a two-letter country code and two check digits. If a client's IBAN has the wrong length for its country, it contains an error and the payment will likely be rejected.",
      },
      {
        q: "Where do I find my SWIFT code and IBAN?",
        a: "Most banks show both in online banking, often under account details or international payments, and on paper or PDF statements. Your bank's website usually lists its SWIFT code too, but some banks use different codes for different branches or for incoming payments in certain currencies, so confirm the exact code for receiving international payments with your bank.",
      },
      {
        q: "What happens if the SWIFT code on my invoice is wrong?",
        a: "The payment may be rejected, delayed while banks investigate, or in rare cases routed to the wrong bank. Returned international payments often incur fees on both sides and can come back in a different amount due to exchange rate changes. Copy your details directly from your bank's documents, double-check them on the invoice template, and ask new clients to confirm receipt of the first payment.",
      },
      {
        q: "Is it safe to put my IBAN on an invoice?",
        a: "Generally yes. An IBAN lets people send you money, not take it, and it is routinely printed on invoices across Europe. The main risk is fraud aimed at your clients: criminals send fake invoices with altered bank details. Tell clients your details will not change by email alone, and ask them to confirm by phone if they ever receive a change request.",
      },
      {
        q: "Who pays the fees on an international wire?",
        a: "It depends on the charge option the payer selects. OUR means the sender pays all fees, SHA means each side pays its own bank's fees, and BEN means the recipient bears all fees, deducted from the amount. SHA is common. If you need the full invoice amount, state on the invoice that bank charges are for the payer's account and ask them to choose OUR.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A SWIFT code (also called a BIC) identifies a bank in an international transfer. An IBAN identifies an individual bank account, including the country and bank. For international payments, put both on your invoice where your country uses IBANs; US businesses have no IBAN and give a SWIFT code, routing number and account number instead.</p>

<p>If you invoice clients in other countries, the payment section of your invoice is where most delays start. A missing SWIFT code, an IBAN with a typo, or the wrong details for the currency can hold up a payment for days. This guide explains SWIFT code vs IBAN in plain terms, shows the formats, tells you what to include for common countries, and gives you a sample invoice payment block you can copy.</p>

<h2>What is a SWIFT code?</h2>
<p>A SWIFT code, or BIC (Business Identifier Code), is an 8 or 11 character code defined by ISO 9362 that identifies a financial institution in the Swift network, which banks use to send payment messages internationally. Swift explains the structure on its <a href="https://www.swift.com/standards/data-standards/bic-business-identifier-code" target="_blank" rel="noopener">BIC standards page</a>.</p>
<table><thead><tr><th>Part</th><th>Characters</th><th>Meaning</th><th>Example (DEUTDEFF500)</th></tr></thead><tbody>
<tr><td>Bank code</td><td>4 letters</td><td>Identifies the institution</td><td>DEUT</td></tr>
<tr><td>Country code</td><td>2 letters</td><td>ISO country</td><td>DE</td></tr>
<tr><td>Location code</td><td>2 letters or digits</td><td>City or region</td><td>FF</td></tr>
<tr><td>Branch code (optional)</td><td>3 letters or digits</td><td>Specific branch; XXX often means head office</td><td>500</td></tr>
</tbody></table>
<p>An 8-character code refers to the bank's primary office. Many banks ask you to use a specific code for incoming international payments, so check with yours.</p>

<h2>What is an IBAN?</h2>
<p>An IBAN (International Bank Account Number), defined by ISO 13616, is a standardized account number used in Europe, the Middle East, parts of Africa and Latin America, and elsewhere. It packs the country, a check value, the bank and the account number into one string of up to 34 characters.</p>
<table><thead><tr><th>Part</th><th>Example (GB33BUKB20201555555555)</th></tr></thead><tbody>
<tr><td>Country code</td><td>GB</td></tr>
<tr><td>Check digits</td><td>33</td></tr>
<tr><td>Bank identifier</td><td>BUKB</td></tr>
<tr><td>Sort code (UK)</td><td>202015</td></tr>
<tr><td>Account number</td><td>55555555</td></tr>
</tbody></table>
<p>The check digits let banks catch most typos before a payment is sent, which is one reason IBAN payments fail less often than payments with free-typed account numbers.</p>

<h2>SWIFT code vs IBAN: the key differences</h2>
<table><thead><tr><th></th><th>SWIFT code / BIC</th><th>IBAN</th></tr></thead><tbody>
<tr><td>Identifies</td><td>A bank (and optionally a branch)</td><td>A specific account at a bank</td></tr>
<tr><td>Length</td><td>8 or 11 characters</td><td>Up to 34, fixed per country</td></tr>
<tr><td>Standard</td><td>ISO 9362</td><td>ISO 13616</td></tr>
<tr><td>Used in the US?</td><td>Yes, for international wires</td><td>No</td></tr>
<tr><td>Needed for SEPA euro transfers?</td><td>Usually not</td><td>Yes</td></tr>
<tr><td>Can someone take money with it?</td><td>No</td><td>Not by itself; direct debits need a mandate</td></tr>
</tbody></table>
<p>Think of it this way: the SWIFT code tells the sending bank which bank to route the money to, and the IBAN tells that bank which account to credit. For most cross-border payments into IBAN countries, you need both.</p>

<h2>What to put on your invoice by country</h2>
<table><thead><tr><th>Your country</th><th>Include for international payments</th></tr></thead><tbody>
<tr><td>United States</td><td>Account name, bank name and address, SWIFT code, ABA routing number (for wires), account number</td></tr>
<tr><td>United Kingdom</td><td>Account name, IBAN, SWIFT/BIC; sort code and account number for UK payers</td></tr>
<tr><td>Eurozone</td><td>Account name, IBAN, BIC</td></tr>
<tr><td>Canada</td><td>Account name, bank name, SWIFT code, institution number, transit number, account number</td></tr>
<tr><td>Australia</td><td>Account name, SWIFT code, BSB, account number</td></tr>
<tr><td>India</td><td>Account name, bank name, SWIFT code, IFSC, account number</td></tr>
</tbody></table>
<p>For US accounts, ask your bank whether international wires use the same routing number as domestic ones; some banks use a dedicated wire routing number. Our guide to <a href="/blog/routing-number-vs-account-number">routing numbers vs account numbers</a> explains the difference. Indian freelancers should also read <a href="/blog/receive-money-from-abroad-india">how to receive money from abroad in India</a>, and Pakistani businesses our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a>.</p>

<h2>Example invoice with international payment details</h2>
<p>Here is a realistic invoice from a UK design studio to a US client, laid out the way your invoice should read.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (USD)</th><th>Amount (USD)</th></tr></thead><tbody>
<tr><td>Brand identity design: logo, palette, typography</td><td>1</td><td>3,200.00</td><td>3,200.00</td></tr>
<tr><td>Website design, 6 page templates</td><td>6</td><td>450.00</td><td>2,700.00</td></tr>
<tr><td>Revisions beyond scope (hours)</td><td>4</td><td>95.00</td><td>380.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td></td><td>6,280.00</td></tr>
<tr><td>VAT (outside scope: B2B service to non-UK customer)</td><td></td><td></td><td>0.00</td></tr>
<tr><td><strong>Total due</strong></td><td></td><td></td><td><strong>6,280.00</strong></td></tr>
</tbody></table>
<table><thead><tr><th>Payment details</th><th></th></tr></thead><tbody>
<tr><td>Account name</td><td>Northlight Studio Ltd</td></tr>
<tr><td>Bank</td><td>Example Bank plc, 1 High Street, London</td></tr>
<tr><td>IBAN</td><td>GB33 BUKB 2020 1555 5555 55 (example only)</td></tr>
<tr><td>SWIFT/BIC</td><td>BUKBGB22</td></tr>
<tr><td>Currency</td><td>USD to a USD-denominated account, or GBP equivalent at payer's bank rate</td></tr>
<tr><td>Charges</td><td>OUR (all bank charges paid by sender)</td></tr>
<tr><td>Reference</td><td>INV-2026-0147</td></tr>
</tbody></table>
<p>Whether VAT applies depends on your situation, so confirm the treatment for cross-border services with your accountant. You can build this layout in our <a href="/invoice-generator">free invoice generator</a> by adding the payment details to the notes section and setting the currency to USD.</p>

<h2>How to add SWIFT and IBAN details to an invoice (checklist)</h2>
<ol>
<li><strong>Get the details from your bank,</strong> not from a website directory, and ask which SWIFT code to use for incoming payments in the invoice currency.</li>
<li><strong>Write the IBAN in groups of four</strong> for readability (GB33 BUKB 2020 ...), but tell payers to enter it without spaces if their bank asks.</li>
<li><strong>Match the account name exactly</strong> to the legal name on the account.</li>
<li><strong>State the currency</strong> and whether the account can receive it directly.</li>
<li><strong>Specify the charge option</strong> (OUR, SHA or BEN) if you need the full amount.</li>
<li><strong>Ask for a reference,</strong> usually the invoice number, so you can match the payment.</li>
<li><strong>Save it as a template</strong> so the details are identical on every invoice. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers what to include for domestic payers too.</li>
</ol>

<h2>Worked example: what reaches your account</h2>
<p>Using the invoice above, here is how charge options can change what the UK studio receives. Bank fees here are illustrative; actual fees depend on the banks involved.</p>
<table><thead><tr><th>Charge option</th><th>Sender pays</th><th>Intermediary deduction</th><th>Studio's incoming fee</th><th>Studio receives</th></tr></thead><tbody>
<tr><td>OUR</td><td>$6,280 plus their bank's fees</td><td>Covered by sender</td><td>$0 to small fee</td><td>About $6,280</td></tr>
<tr><td>SHA</td><td>$6,280 plus their own bank's fee</td><td>$20</td><td>$15</td><td>$6,245</td></tr>
<tr><td>BEN</td><td>$6,280</td><td>$20</td><td>$15 plus the sender's fee of $30</td><td>$6,215</td></tr>
</tbody></table>
<p>If a payment arrives short, record the bank charge as an expense, or invoice the shortfall if your terms say charges are for the payer's account. Either way, mark the invoice as paid only when the books balance, and note the cause so you can adjust the instructions for that client next time.</p>

<h2>Fees and timing for SWIFT and IBAN payments</h2>
<p>International transfers through the Swift network can pass through one or more intermediary (correspondent) banks, each of which may deduct a fee. That is why a $6,280 invoice sometimes arrives as $6,245. Typical international wires take one to five business days. The move to the ISO 20022 message format has made payment data richer, which can help with matching; see <a href="/blog/iso-20022-payments">ISO 20022 payments</a>.</p>
<p>For more on cost and speed, read <a href="/blog/wire-transfer-fees">wire transfer fees</a>, <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> and <a href="/blog/cross-border-payment-fees">cross-border payment fees</a>. Services such as Wise can give you local account details in several currencies, which often costs less than receiving a Swift wire; compare them in our <a href="/blog/wise-business-fees">Wise Business fees</a> guide.</p>

<h2>IBAN length by country</h2>
<table><thead><tr><th>Country</th><th>IBAN length</th><th>Starts with</th></tr></thead><tbody>
<tr><td>Belgium</td><td>16</td><td>BE</td></tr>
<tr><td>Netherlands</td><td>18</td><td>NL</td></tr>
<tr><td>Switzerland</td><td>21</td><td>CH</td></tr>
<tr><td>Germany</td><td>22</td><td>DE</td></tr>
<tr><td>Ireland</td><td>22</td><td>IE</td></tr>
<tr><td>United Kingdom</td><td>22</td><td>GB</td></tr>
<tr><td>United Arab Emirates</td><td>23</td><td>AE</td></tr>
<tr><td>Spain</td><td>24</td><td>ES</td></tr>
<tr><td>Pakistan</td><td>24</td><td>PK</td></tr>
<tr><td>Saudi Arabia</td><td>24</td><td>SA</td></tr>
<tr><td>France</td><td>27</td><td>FR</td></tr>
<tr><td>Italy</td><td>27</td><td>IT</td></tr>
<tr><td>Poland</td><td>28</td><td>PL</td></tr>
</tbody></table>
<p>If an IBAN a client or supplier gives you does not match the length for its country code, ask them to recheck it before you send or expect money.</p>

<h3>How IBAN validation works</h3>
<p>The two check digits are calculated using a modulo 97 formula. To validate, a bank moves the first four characters to the end, converts letters to numbers (A=10, B=11 and so on), and checks that the resulting number divided by 97 leaves a remainder of 1. You do not need to do this by hand: most banking apps and accounting tools validate IBANs as you type, and free IBAN checkers exist. The check catches almost all single typos and swapped digits, but it cannot confirm that the account belongs to the name on your invoice.</p>

<h2>Ways to receive international payments compared</h2>
<table><thead><tr><th>Method</th><th>What you give the payer</th><th>Typical speed</th><th>Cost notes</th></tr></thead><tbody>
<tr><td>Swift wire to your bank</td><td>SWIFT code plus IBAN or account and routing numbers</td><td>1 to 5 business days</td><td>Incoming fee plus possible intermediary deductions and FX margin</td></tr>
<tr><td>Local account details (Wise, Payoneer and similar)</td><td>Local details in the payer's currency, such as a UK sort code or EUR IBAN</td><td>Often same day to 2 days</td><td>Conversion fee when you move money to your home currency</td></tr>
<tr><td>SEPA transfer (euro to euro)</td><td>IBAN (BIC optional)</td><td>Usually 1 business day; instant where supported</td><td>Usually low or free</td></tr>
<tr><td>PayPal or card link</td><td>Email or payment link</td><td>Minutes</td><td>Percentage fee plus cross-border and conversion fees</td></tr>
</tbody></table>
<p>For a side-by-side view of two popular platforms, see <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a>.</p>

<h2>Common mistakes with SWIFT codes and IBANs</h2>
<ul>
<li><strong>Listing an IBAN for a US account.</strong> US accounts do not have one, and inventing one causes rejections.</li>
<li><strong>Using the wrong branch code.</strong> An 11-character code for a branch that does not handle international payments can delay funds.</li>
<li><strong>Typos in the IBAN.</strong> Copy and paste from your bank; never retype.</li>
<li><strong>Omitting the account holder name</strong> or using a trading name the bank does not recognize.</li>
<li><strong>Forgetting the currency.</strong> Clients may send the wrong currency and you lose on conversion.</li>
<li><strong>Changing bank details by email.</strong> This is the classic setup for payment diversion fraud. See <a href="/blog/invoice-scams">invoice scams</a> for warning signs.</li>
</ul>

<h2>Summary</h2>
<p>The SWIFT code points the money to your bank; the IBAN points it to your account. Include both when you have both, use routing and account numbers when you are in the US, and state the currency, charges and reference on every international invoice. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a downloadable PDF in your browser, so you can save one clean payment block and reuse it every time a client asks about SWIFT code vs IBAN.</p>
`,
  },
];
