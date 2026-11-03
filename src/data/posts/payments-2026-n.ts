import type { PostDraft } from "../blog";

export const PAYMENTS_2026_N_POSTS: PostDraft[] = [
  {
    slug: "cash-discount-program",
    title: "Cash Discount Program vs Surcharging: Which Is Legal?",
    description:
      "How a cash discount program works, how it differs from surcharging, where each is legal in 2026, Visa's posted-price rule and how to show it on an invoice.",
    category: "payments",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "credit-card-surcharge-rules",
      "convenience-fee",
      "credit-card-processing-fees",
    ],
    faqs: [
      {
        q: "Is a cash discount program legal in every US state?",
        a: "Offering a genuine discount for paying with cash is broadly allowed across the US, including in states such as Connecticut and Massachusetts that ban credit card surcharges. The catch is the word genuine. The posted or quoted price must be the card price, and the cash price must be a reduction from it. A program that lists a lower price and then adds a fee at checkout is treated as a surcharge, and surcharge laws and card network rules then apply. Check your state's current rules before launching.",
      },
      {
        q: "What is the difference between a cash discount and dual pricing?",
        a: "They are close cousins. A cash discount program usually shows one posted price, the card price, and applies a discount at checkout when the customer pays cash. Dual pricing shows two prices side by side, a cash price and a card price, on menus, shelf tags or quotes. Visa's guidance allows either showing only the card price or showing both prices together. Both approaches put the higher price in front of the customer before they decide how to pay.",
      },
      {
        q: "Can I charge debit card users the card price in a cash discount program?",
        a: "Yes. In a cash discount program the discount is for cash (and sometimes checks or bank transfers), so a debit card customer simply pays the regular posted price. That is a key advantage over surcharging, because card network rules do not allow surcharges on debit cards even in states where credit card surcharges are legal. Make sure your signage explains which payment methods earn the discount so nobody feels misled at the counter.",
      },
      {
        q: "How much should the cash discount be?",
        a: "Most businesses set the discount so it roughly matches what they pay to accept cards, often somewhere around 3% to 4% of the card price, depending on their processing rates. There is no Visa percentage cap on a cash discount the way there is a 3% cap on surcharges, but a discount far larger than your real costs invites customer complaints and scrutiny. Base the number on your actual effective rate from your processing statements.",
      },
      {
        q: "Do I need my payment processor's approval for a cash discount program?",
        a: "You do not legally need approval to offer a cash discount, but you should tell your processor and use its supported settings. Many POS systems, including Toast, have built-in cash discount features that print both prices on receipts and adjust totals automatically. Setting it up through the processor helps keep receipts, signage and reporting consistent, and avoids your program being flagged as a non-compliant surcharge during a review.",
      },
      {
        q: "Does a cash discount reduce the sales tax I collect?",
        a: "Usually the tax is calculated on the price the customer actually pays, so a cash sale at the discounted price often carries slightly less sales tax than a card sale. However, states treat discounts differently, and some have specific rules about whether the discount must appear on the invoice or receipt. Confirm your state's treatment with the revenue department, and make sure your POS calculates tax after the discount is applied.",
      },
    ],
    content: `
<p>A <strong>cash discount program</strong> lets a business recover card processing costs by posting its card price as the regular price and giving customers a discount when they pay with cash. Surcharging does the opposite: it posts a lower price and adds a fee when someone pays by credit card. Both can cover roughly the same costs, but they are governed by different rules, and the difference decides whether your program is legal in your state and compliant with Visa and Mastercard.</p>

<p>We already cover the state-by-state surcharge picture in our <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules guide</a>. This article focuses on the other side: how a cash discount program works in practice, when it beats surcharging, the mistakes that turn a "discount" into an illegal surcharge, and how to show the prices on invoices and receipts. This is general information, not legal advice; confirm the rules in your state with a professional or your state attorney general's guidance.</p>

<h2>How a cash discount program works</h2>
<p>In a compliant program, every price a customer sees on menus, shelf tags, websites, quotes and invoices is the card price. When the customer pays with cash (and, if you choose, a check or bank transfer), the register or invoice applies a discount, usually a percentage that roughly matches your card processing cost.</p>
<p>The legal basis is long-standing: federal law has allowed merchants to give discounts for cash for decades, and card network rules allow it as long as the discount is taken off the posted price. A <a href="https://www.afslaw.com/perspectives/alerts/visa-reduces-its-merchant-surcharge-cap-3-effective-april-15-2023-merchants" target="_blank" rel="noopener noreferrer">law-firm summary of Visa's rules</a> notes that Visa lets merchants offer a cash discount but requires prices to be displayed either as the card price only, or as both the card and cash price side by side.</p>

<h3>The rule that matters most: the posted price is the card price</h3>
<p>In October 2018, Visa issued a bulletin warning that many so-called cash discount programs were really surcharges in disguise. The pattern Visa objected to was a business posting a low price, then adding a "non-cash adjustment" or "service fee" at the register and removing it for cash payers. Visa said that model is not a compliant cash discount, as <a href="https://www.pymnts.com/visa/2018/non-compliant-cash-discount-card-fees/" target="_blank" rel="noopener noreferrer">PYMNTS reported at the time</a>. If your program adds anything on top of the posted price for card payments, you are surcharging, and surcharge rules apply in full.</p>

<h2>Cash discount program vs surcharging: side-by-side</h2>
<table><thead><tr><th>Feature</th><th>Cash discount program</th><th>Credit card surcharge</th></tr></thead><tbody>
<tr><td>Posted price</td><td>Card price</td><td>Cash price (lower)</td></tr>
<tr><td>What changes at checkout</td><td>Discount for cash payers</td><td>Fee added for credit card payers</td></tr>
<tr><td>Debit card customers</td><td>Pay the posted (card) price</td><td>Cannot be surcharged under network rules</td></tr>
<tr><td>Network cap</td><td>No percentage cap on the discount</td><td>Visa 3% (since April 15, 2023), or your cost if lower</td></tr>
<tr><td>States that ban surcharges</td><td>Generally allowed (for example Connecticut, Massachusetts)</td><td>Not allowed</td></tr>
<tr><td>Advance notice to networks</td><td>Not required</td><td>Required (Visa and Mastercard registration or notice through your acquirer)</td></tr>
<tr><td>Customer perception</td><td>"You saved money"</td><td>"You charged me a fee"</td></tr>
<tr><td>Cost recovery</td><td>On every non-cash payment, including debit</td><td>Only on credit card payments</td></tr>
</tbody></table>
<p>The table shows why many restaurants, salons, auto shops and contractors prefer a cash discount program: it recovers costs on debit cards too, it works in states that prohibit surcharges, and it avoids the network registration steps. The trade-off is that your posted prices look higher, which can matter if you compete on advertised price.</p>

<h2>When is surcharging the better choice?</h2>
<p>A cash discount program is not always the right answer. Surcharging can make more sense when:</p>
<ul>
<li><strong>You sell on price comparison sites or bids.</strong> Raising every posted price by 3% to 4% can make you look more expensive than competitors who surcharge.</li>
<li><strong>Most customers pay by ACH or check already.</strong> B2B sellers who invoice on <a href="/blog/net-30-payment-terms">net 30 terms</a> often only want to pass costs to the few clients who insist on paying invoices by credit card.</li>
<li><strong>You only want to target credit cards.</strong> If debit is a small share and you prefer not to change your price list, a compliant surcharge is a narrower tool.</li>
</ul>
<p>For flat fees for a different payment channel, such as paying a utility bill online, the separate rules for a <a href="/blog/convenience-fee">convenience fee</a> may apply instead.</p>

<h2>How to set up a compliant cash discount program (step by step)</h2>
<ol>
<li><strong>Calculate your effective card cost.</strong> Divide total monthly processing fees by total card volume on your statements. Our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a> explains interchange, assessments and markups.</li>
<li><strong>Decide which payments earn the discount.</strong> Cash only, or cash plus checks and bank transfers. Write it down and apply it consistently.</li>
<li><strong>Reprice everything at the card price.</strong> Menus, shelf tags, online listings, estimates and your price list. If you show two prices, show them together.</li>
<li><strong>Configure your POS or invoicing tool.</strong> Many systems have a built-in setting; for example, <a href="https://support.toasttab.com/article/Toast-Cash-Discount-Overview" target="_blank" rel="noopener noreferrer">Toast's cash discount overview</a> describes how the feature shows prices and adjusts totals.</li>
<li><strong>Post clear signage.</strong> At the entrance and point of sale: "Prices shown are card prices. Pay with cash and save 3.5%."</li>
<li><strong>Train staff.</strong> They should describe it as a discount, never as a "card fee".</li>
<li><strong>Check your state's law.</strong> A few states have specific price-display or disclosure rules; California and New York, for instance, have rules on showing the full price up front.</li>
<li><strong>Review quarterly.</strong> If your processing rates drop, adjust the discount so it still reflects real costs.</li>
</ol>

<h2>Worked example: a cafe switches to a cash discount program</h2>
<p>The figures below are illustrative. A cafe takes $40,000 a month in card payments and pays an effective processing rate of 3.1%, or $1,240 a month. Its cash sales are $6,000 a month.</p>
<table><thead><tr><th>Item</th><th>Before</th><th>After cash discount program</th></tr></thead><tbody>
<tr><td>Latte posted price</td><td>$5.00</td><td>$5.18 (card price)</td></tr>
<tr><td>Cash price</td><td>$5.00</td><td>$5.00 (3.5% discount off $5.18, rounded)</td></tr>
<tr><td>Monthly card revenue (same items)</td><td>$40,000</td><td>$41,440</td></tr>
<tr><td>Processing fees at 3.1%</td><td>$1,240</td><td>$1,285</td></tr>
<tr><td>Net card revenue</td><td>$38,760</td><td>$40,155</td></tr>
</tbody></table>
<p>Card customers now pay 3.6% more than before, which covers the processing fee on the higher amount. Cash customers pay exactly what they did before. Debit card users pay the card price as well, which a surcharge could not have achieved. Some customers will switch to cash, which also lowers fees, though it raises cash handling work; a <a href="/blog/petty-cash-log">petty cash log</a> and daily reconciliation keep that under control.</p>

<h2>How to show a cash discount on an invoice or receipt</h2>
<p>For service businesses and contractors who bill by invoice, the cash discount needs to be visible before the client pays. A clean format:</p>
<ul>
<li>List each line item at the card price.</li>
<li>Show the subtotal and any sales tax.</li>
<li>Add a line such as: "Cash, check or ACH discount (3.5%): -$52.50. Total if paid by cash, check or ACH: $1,447.50."</li>
<li>State the card total clearly: "Total if paid by card: $1,500.00."</li>
</ul>
<p>This also nudges clients toward cheaper payment methods; our guide on <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> covers setting that up. Do not confuse this with an early payment discount such as 2/10 net 30, which rewards timing, not payment method. If you also <a href="/blog/late-payment-fees">charge late payment fees</a>, keep those terms separate from the cash discount wording so the invoice stays easy to read.</p>
<p>Not sure whether a percentage-based line will calculate correctly? Build the invoice in our <a href="/invoice-generator">free invoice generator</a>, add the discount as a negative line item, and download the PDF.</p>

<h2>Common mistakes that turn a cash discount into a surcharge</h2>
<ul>
<li><strong>Labelling it a "service fee" or "non-cash adjustment" added to the total.</strong> That is a surcharge by definition.</li>
<li><strong>Posting cash prices on the menu</strong> and charging more for cards at the register.</li>
<li><strong>Calling it a discount on the sign but a fee on the receipt.</strong> Receipts should show the card price and the discount, not a fee.</li>
<li><strong>Applying the discount inconsistently</strong>, for example only to regulars, which undermines the claim that it is a published price policy.</li>
<li><strong>Ignoring online prices.</strong> If your website or delivery apps show the lower price, the "posted price" is no longer the card price.</li>
<li><strong>Setting a discount far above your real cost.</strong> It is not capped by Visa, but it invites complaints and can attract attention from consumer protection officials.</li>
</ul>

<h2>What to do if a customer or processor challenges your program</h2>
<p>If a customer complains, explain the policy calmly and point to the posted prices; a short line on receipts helps. If your processor or acquirer says the program is non-compliant, ask exactly which element is the problem, usually the receipt wording or a fee line, and fix it promptly. Keep screenshots of your signage, menus and price lists with dates. If you operate in several states, document how you checked each one. Where a processor insists on surcharge treatment, you can switch to a registered surcharge (within the cap, credit cards only, never debit) or drop cost recovery and negotiate better rates instead.</p>
<p>Alongside pricing, think about which methods you want customers to use. Our roundup of the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a> compares fees, and if you are rethinking your processor itself, see our guide to the <a href="/blog/payment-facilitator">payment facilitator vs merchant account</a> choice, which often has a bigger effect on cost than any discount program.</p>

<h2>Cash discount program vs early payment discount</h2>
<p>Invoicing businesses often mix these up, but they solve different problems. A cash discount program rewards the <em>method</em> of payment. An <a href="/blog/early-payment-discount">early payment discount</a>, such as <a href="/blog/2-10-net-30">2/10 net 30</a>, rewards <em>timing</em>: the client takes 2% off if they pay within 10 days.</p>
<table><thead><tr><th></th><th>Cash discount program</th><th>Early payment discount</th></tr></thead><tbody>
<tr><td>Rewards</td><td>Paying by cash, check or ACH</td><td>Paying before a deadline</td></tr>
<tr><td>Main goal</td><td>Offset card processing fees</td><td>Speed up cash flow</td></tr>
<tr><td>Typical size</td><td>Close to your card cost, often 3% to 4%</td><td>1% to 2%</td></tr>
<tr><td>Card network rules</td><td>Must be a discount off the posted card price</td><td>Not a card rule issue</td></tr>
<tr><td>Where it appears</td><td>Signage, price list and invoice</td><td>Payment terms line on the invoice</td></tr>
</tbody></table>
<p>You can offer both, but keep the arithmetic clear. For example: "Card total $5,000. Pay by ACH: $4,825 (3.5% discount). Pay by ACH within 10 days: a further 1% off." Spell out which discount applies first so the client does not have to guess, and make sure your accounting records the discounts as reductions of revenue rather than as expenses.</p>

<h2>Bottom line</h2>
<p>A cash discount program is legal and widely used when it is done honestly: card price posted, discount for cash, clear signs and receipts. It recovers costs on debit cards and works in states that ban surcharges. Surcharging suits businesses that want to keep posted prices low and only pass costs to credit card users. Whichever you choose, put the payment method terms on every quote and invoice. You can create invoices that show card and cash totals with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download them as PDFs in seconds.</p>
`,
  },
  {
    slug: "payment-facilitator",
    title: "Payment Facilitator (PayFac) vs Merchant Account",
    description:
      "What a payment facilitator is, how PayFacs like Stripe and Square differ from a merchant account, plus costs, payout holds and when to switch.",
    category: "payments",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "merchant-account-vs-payment-processor",
      "stripe-fees",
      "credit-card-processing-fees",
    ],
    faqs: [
      {
        q: "Is Stripe a payment facilitator?",
        a: "Yes. Stripe, Square and PayPal work on the payment facilitator model for most small businesses: they hold a master merchant relationship with acquiring banks and onboard you as a sub-merchant under it. That is why you can sign up in minutes without a separate merchant account application. Larger businesses can sometimes negotiate custom pricing or different structures with these providers, but the default small-business setup is a sub-merchant account under the provider's master account.",
      },
      {
        q: "What is the difference between a PayFac and an ISO?",
        a: "An ISO (independent sales organization) resells merchant accounts on behalf of an acquiring bank. Each business still gets its own merchant ID and its own agreement with the acquirer, after underwriting. A payment facilitator instead signs up businesses as sub-merchants under its own master merchant account, handles underwriting itself and often pays out funds directly. ISOs usually take longer to approve you but can offer custom pricing; PayFacs are faster and simpler but use standardized pricing.",
      },
      {
        q: "Why did my payment facilitator freeze my funds?",
        a: "Because the PayFac carries the risk for every sub-merchant, its systems watch for sudden volume spikes, unusual ticket sizes, high refund or chargeback rates, and business types it considers risky. When something looks off, it may hold payouts, add a reserve or ask for documents such as invoices, contracts and delivery proof. Respond quickly with clear documentation. Keeping professional invoices and signed agreements for large jobs makes these reviews much faster to resolve.",
      },
      {
        q: "When should I switch from a PayFac to a merchant account?",
        a: "Consider it when your card volume is large and steady enough that interchange-plus pricing would save meaningful money, when your average ticket is high, or when you need more stable funding and a dedicated relationship. Many businesses start comparing quotes somewhere in the hundreds of thousands of dollars per year in card volume. Card network rules also generally require a direct merchant agreement once a sub-merchant passes about $1 million in annual volume on a network.",
      },
      {
        q: "Are payment facilitator fees negotiable?",
        a: "Standard published rates, such as Stripe's 2.9% plus 30 cents for online US cards, apply to most small businesses and are rarely negotiable at low volume. Once you process significant volume, Stripe, Square and others may offer custom or interchange-plus pricing on request. It is worth asking once your monthly volume is substantial and stable, and bringing a competing merchant account quote to the conversation.",
      },
      {
        q: "Can I use a payment facilitator and a merchant account at the same time?",
        a: "Yes. Many businesses keep a PayFac for online checkout or invoice payments and a traditional merchant account for in-person or high-ticket transactions, or the reverse. Running two providers adds reconciliation work, so tag each payment by source in your bookkeeping. Make sure invoices tell clients exactly which payment link or method to use, so payments do not land in the wrong account.",
      },
    ],
    content: `
<p>A <strong>payment facilitator</strong> (PayFac) is a company that holds one master merchant account with an acquiring bank and signs up many smaller businesses underneath it as sub-merchants. Stripe, Square and PayPal are the best-known examples. A traditional merchant account, by contrast, gives your business its own merchant ID and its own contract with an acquirer after full underwriting. The PayFac route is faster and simpler; the merchant account route usually costs less at higher volume and gives you more control.</p>

<p>If you have ever opened a Stripe account in ten minutes and taken a card payment the same day, you have used a payment facilitator. This guide explains how the model works, what you give up for that speed, how pricing compares, and the signals that it is time to move to a dedicated merchant account. For the broader terminology, see our explainer on <a href="/blog/merchant-account-vs-payment-processor">merchant accounts vs payment processors</a>.</p>

<h2>How the payment facilitator model works</h2>
<p>Card payments involve the cardholder's bank (issuer), the card network, an acquiring bank and the merchant. Acquirers are responsible for the merchants they sign up, so historically every business had to be individually underwritten. The PayFac model, which the card networks formalized in the 2010s, lets a registered facilitator take on that role for many small merchants:</p>
<ol>
<li>The PayFac registers with Visa and Mastercard through a sponsoring acquirer and holds a master merchant account.</li>
<li>You sign the PayFac's sub-merchant terms online and pass its automated identity and business checks.</li>
<li>Your card payments are processed under the PayFac's master account.</li>
<li>The PayFac collects the funds, deducts its fees and pays out to your bank account.</li>
<li>The PayFac monitors your activity and carries the risk if you generate chargebacks or fraud you cannot cover.</li>
</ol>

<h3>The $1 million threshold</h3>
<p>Card networks expect sub-merchants that grow large to have a direct relationship with the acquirer. Mastercard set its sub-merchant threshold at $1 million in annual Mastercard volume, as <a href="https://www.digitaltransactions.net/mastercard-sub-merchants-dont-need-to-own-accounts-until-volume-hits-1-million/" target="_blank" rel="noopener noreferrer">Digital Transactions reported</a>, and acquirer agreements commonly cite about $1 million for Visa and Mastercard. In practice, your PayFac handles this transition, often by having you accept additional terms with its partner bank. Most small businesses never reach it.</p>

<h2>Payment facilitator vs merchant account compared</h2>
<table><thead><tr><th>Factor</th><th>Payment facilitator (Stripe, Square, PayPal)</th><th>Dedicated merchant account (via bank or ISO)</th></tr></thead><tbody>
<tr><td>Approval time</td><td>Minutes to a day</td><td>Several days to a few weeks</td></tr>
<tr><td>Underwriting</td><td>Light at sign-up, ongoing automated monitoring</td><td>Full up front: statements, financials, owner credit</td></tr>
<tr><td>Pricing</td><td>Flat rate, e.g. 2.9% + 30 cents online</td><td>Interchange-plus or tiered, often lower at volume</td></tr>
<tr><td>Monthly fees</td><td>Usually none on basic plans</td><td>Often statement, PCI, gateway or minimum fees</td></tr>
<tr><td>Contract</td><td>Month to month</td><td>Sometimes multi-year with early termination fees</td></tr>
<tr><td>Fund holds</td><td>More likely after sudden changes in activity</td><td>Risk assessed at approval; reserves set up front</td></tr>
<tr><td>Merchant ID</td><td>Shared master account</td><td>Your own MID</td></tr>
<tr><td>Best for</td><td>New, small, variable-volume and online businesses</td><td>Established businesses with steady, larger volume</td></tr>
</tbody></table>

<h2>What does each option really cost?</h2>
<p>Flat-rate PayFac pricing bundles interchange, network assessments and the provider's margin into one number. At the time of writing, Stripe lists 2.9% plus 30 cents for standard online US card payments; our <a href="/blog/stripe-fees">Stripe fees guide</a> and <a href="/blog/square-invoice-fees">Square invoice fees guide</a> break down the variations for in-person, international and invoice payments.</p>
<p>Merchant accounts more often use interchange-plus pricing: you pay the actual interchange (which varies by card type) plus a fixed markup, for example interchange plus 0.3% and 10 cents. Average interchange on consumer credit cards is often below 2%, so the total can undercut a flat rate, especially if many customers use debit cards, which carry low interchange for large issuers.</p>

<h3>Worked example: $50,000 a month in card payments</h3>
<p>Illustrative figures for a business processing $50,000 a month across 500 transactions (average ticket $100):</p>
<table><thead><tr><th>Cost item</th><th>PayFac flat rate (2.9% + $0.30)</th><th>Merchant account (interchange + 0.30% + $0.10)</th></tr></thead><tbody>
<tr><td>Percentage fees</td><td>$1,450</td><td>Interchange about $900 (assumed 1.8% blend) + markup $150</td></tr>
<tr><td>Per-transaction fees</td><td>$150</td><td>$50</td></tr>
<tr><td>Monthly and PCI fees</td><td>$0</td><td>$40 (assumed)</td></tr>
<tr><td>Total monthly cost</td><td>$1,600 (3.2% effective)</td><td>$1,140 (2.28% effective)</td></tr>
<tr><td>Annual difference</td><td colspan="2">About $5,520 in favor of the merchant account in this example</td></tr>
</tbody></table>
<p>Change the assumptions and the gap shrinks or grows. A business with $5,000 a month in volume would save perhaps a few hundred dollars a year at most, which rarely justifies extra fees, a contract and more paperwork. Always compare using your real statements; our <a href="/blog/credit-card-processing-fees">processing fees explainer</a> shows how to calculate your effective rate.</p>

<h2>Pros and cons of using a payment facilitator</h2>
<h3>Advantages</h3>
<ul>
<li><strong>Instant onboarding.</strong> Start accepting payments the day you start your business.</li>
<li><strong>Built-in tools.</strong> Payment links, invoices, subscriptions, a <a href="/blog/virtual-terminal">virtual terminal</a> and card readers in one dashboard.</li>
<li><strong>Predictable pricing.</strong> One rate is easy to quote into your prices.</li>
<li><strong>No long contract.</strong> Leave whenever you want.</li>
</ul>
<h3>Disadvantages</h3>
<ul>
<li><strong>Higher cost at volume.</strong> You pay the same flat rate on cheap debit transactions as on premium rewards cards.</li>
<li><strong>Risk of sudden holds.</strong> Because underwriting happens after the fact, a large first invoice or a spike in sales can trigger a payout pause.</li>
<li><strong>Less support.</strong> You are one of millions of accounts.</li>
<li><strong>Restricted industries.</strong> Many PayFacs prohibit or restrict businesses considered risky; those businesses need a <a href="/blog/high-risk-merchant-account">high-risk merchant account</a> instead.</li>
</ul>

<h2>How to avoid payout holds with a PayFac</h2>
<ol>
<li><strong>Describe your business accurately at sign-up</strong>, including typical ticket size and delivery timelines.</li>
<li><strong>Warn your provider before big jobs.</strong> If you usually invoice $800 and suddenly bill $25,000, tell support first.</li>
<li><strong>Keep documentation.</strong> Signed contracts, detailed invoices, proof of delivery and client communication answer most risk reviews.</li>
<li><strong>Keep chargebacks low.</strong> Clear descriptors and refund policies help; see our guide on <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a>.</li>
<li><strong>Use ACH for large B2B invoices.</strong> Bank payments cost less and are less likely to trigger card-risk rules.</li>
</ol>

<h2>When to move to a merchant account</h2>
<p>Signs that a dedicated merchant account is worth quoting:</p>
<ul>
<li>Steady card volume in the hundreds of thousands of dollars a year or more.</li>
<li>A high share of debit or business cards where interchange-plus pricing saves the most.</li>
<li>Repeated holds or reserves from your PayFac despite a clean record.</li>
<li>A need for a dedicated account manager, custom funding schedules or specific industry support.</li>
</ul>
<p>Get at least two interchange-plus quotes, read the contract for early termination and monthly minimum fees, and confirm PCI compliance requirements; our <a href="/blog/pci-compliance-small-business">PCI compliance guide</a> explains the questionnaires you may be asked to complete. If you want to cut costs without switching, a <a href="/blog/cash-discount-program">cash discount program</a> can offset fees on card payments.</p>

<h2>PayFac vs ISO vs aggregator: the terms explained</h2>
<p>Processor sales pages use these words loosely, so here is how they usually differ:</p>
<table><thead><tr><th>Model</th><th>Who holds the merchant relationship</th><th>Your merchant ID</th><th>Typical example</th></tr></thead><tbody>
<tr><td>Payment facilitator</td><td>The PayFac, under its sponsoring acquirer</td><td>Sub-merchant under the PayFac's master account</td><td>Stripe, Square, PayPal for small sellers</td></tr>
<tr><td>Independent sales organization (ISO)</td><td>The acquirer; the ISO sells and services the account</td><td>Your own MID</td><td>Local merchant services reseller</td></tr>
<tr><td>Direct acquirer relationship</td><td>The acquiring bank or processor</td><td>Your own MID</td><td>Large retailers and high-volume merchants</td></tr>
<tr><td>Marketplace or merchant of record</td><td>The platform sells to the customer itself and pays you</td><td>None; the platform is the merchant</td><td>App stores, some digital product platforms</td></tr>
</tbody></table>
<p>The merchant of record model is worth knowing if you sell digital products internationally: the platform, not you, is the seller on the card statement and usually handles sales tax or VAT, in exchange for a higher fee.</p>

<h2>Should your own business become a payment facilitator?</h2>
<p>Software companies that serve other businesses, such as booking tools for salons or invoicing platforms for contractors, sometimes consider becoming a PayFac to earn revenue on their users' payments. Full registration means taking on underwriting, risk monitoring, chargeback liability, demanding PCI compliance obligations and a contract with a sponsoring acquirer, which requires significant capital and staff. Most smaller platforms instead use an embedded payments product, such as Stripe Connect or similar offerings, which lets them add payments to their software and share revenue without becoming the registered facilitator. For an ordinary service business, none of this is necessary; you simply choose between being a sub-merchant or having your own merchant account.</p>

<h2>Questions to ask before you sign with any provider</h2>
<ul>
<li>What is my effective rate at my real card mix, including monthly fees?</li>
<li>How fast are payouts, and what triggers a hold or reserve?</li>
<li>Is there a contract term, early termination fee or equipment lease?</li>
<li>How are chargebacks handled, and what does each one cost?</li>
<li>Can I export transactions to my accounting software for <a href="/blog/bank-reconciliation">bank reconciliation</a>?</li>
<li>Does the provider support invoice payment links, ACH and recurring billing?</li>
</ul>

<h2>Where your invoices fit in</h2>
<p>Whichever model you use, the invoice is the document that links a payment to a job. Put your payment link or bank details on every invoice, use clear invoice numbers that match the payment reference, and keep copies; they are the first thing a PayFac asks for during a risk review and the first thing you need in a dispute. Create professional invoices in our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download them as PDFs to attach to emails or payment requests.</p>
`,
  },
  {
    slug: "high-risk-merchant-account",
    title: "High-Risk Merchant Account: Who Needs One and Costs",
    description:
      "What a high risk merchant account is, who needs one, typical fees and rolling reserves, MATCH list and 2026 VAMP chargeback rules, and how to get approved.",
    category: "payments",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "merchant-account-vs-payment-processor",
      "how-to-handle-chargebacks",
      "pci-compliance-small-business",
    ],
    faqs: [
      {
        q: "What makes a business high risk for payment processing?",
        a: "Processors label a business high risk when they expect more chargebacks, fraud, refunds or legal exposure than average. Common triggers include the industry (for example travel, subscriptions, CBD, firearms, adult content, nutraceuticals, debt collection and online gaming), long gaps between payment and delivery, large average tickets, high card-not-present volume, international customers, a short processing history, poor owner credit and past chargeback problems. One factor alone may be enough, or several together can push you into the category.",
      },
      {
        q: "How much does a high-risk merchant account cost?",
        a: "Expect higher rates than standard accounts, often several percentage points per transaction plus per-transaction fees, monthly fees, higher chargeback fees and a rolling reserve that holds back a percentage of sales for a period of months. Exact pricing depends on your industry, history and chargeback rate, and varies widely between providers. Ask for every fee in writing, including reserve terms and early termination fees, and compare at least two quotes.",
      },
      {
        q: "What is a rolling reserve?",
        a: "A rolling reserve is a portion of each day's card sales that the processor holds back for a set period, then releases on a rolling basis. For example, a provider might hold 10% of each day's sales for 180 days. The reserve protects the processor if you later face chargebacks or go out of business. Plan cash flow around it, because that money is unavailable to you for months, and negotiate a review date to reduce or end it.",
      },
      {
        q: "How long do you stay on the MATCH list?",
        a: "Entries on Mastercard's MATCH list, also called the Terminated Merchant File, generally remain for five years from the date they are added. Only the acquirer that listed you can usually remove the entry early, and only in limited circumstances such as an error. While listed, most mainstream processors will decline you, so specialist high-risk providers are often the only option. Keep your own chargeback rate low to avoid being listed in the first place.",
      },
      {
        q: "Can I use Stripe or PayPal if my business is high risk?",
        a: "Sometimes, but it is risky. Payment facilitators publish lists of prohibited and restricted businesses, and if your business falls into one of them, they can close your account and hold funds once their monitoring flags you. Some restricted categories are allowed with extra review. Read the provider's restricted business list before signing up and describe your business honestly. If you are clearly in a prohibited category, start with a high-risk merchant account instead.",
      },
    ],
    content: `
<p>A <strong>high risk merchant account</strong> is a card processing account built for businesses that mainstream processors consider likely to generate chargebacks, fraud or regulatory trouble. It lets you accept cards when Stripe, Square or your bank say no, but at a price: higher fees, longer contracts and usually a rolling reserve. You need one if your industry, sales model or processing history puts you outside a standard provider's risk appetite.</p>

<p>This guide explains who gets labelled high risk, what these accounts cost, the 2026 chargeback thresholds that matter, how the MATCH list works, and practical steps to get approved and eventually move to standard pricing. If you are new to the terminology, start with our explainer on <a href="/blog/merchant-account-vs-payment-processor">merchant accounts vs payment processors</a>.</p>

<h2>Who needs a high risk merchant account?</h2>
<p>Processors assess risk in three broad areas: what you sell, how you sell it, and your history.</p>
<table><thead><tr><th>Risk factor</th><th>Examples</th><th>Why processors worry</th></tr></thead><tbody>
<tr><td>Industry</td><td>Travel, ticketing, subscriptions and memberships, CBD, vaping, firearms, nutraceuticals, adult, gambling, debt collection, credit repair</td><td>Higher dispute rates or regulatory exposure</td></tr>
<tr><td>Delivery timing</td><td>Deposits taken months before an event or build</td><td>If the business fails, customers charge back</td></tr>
<tr><td>Ticket size</td><td>Very large single payments, e.g. $10,000+ invoices on cards</td><td>Bigger losses per dispute</td></tr>
<tr><td>Sales channel</td><td>Mostly online or phone (card-not-present)</td><td>More fraud than chip transactions</td></tr>
<tr><td>Customer location</td><td>Large share of international cards</td><td>Higher fraud and cross-border disputes</td></tr>
<tr><td>History</td><td>New business, past account termination, high chargeback ratio, poor owner credit</td><td>No track record, or a bad one</td></tr>
</tbody></table>
<p>Being high risk is not an accusation. Plenty of honest businesses, such as event venues taking deposits, B2B companies with large invoices or subscription software, simply fall into categories where losses are statistically higher.</p>

<h2>What does a high risk merchant account cost?</h2>
<p>Pricing is set case by case, so treat any published figure with caution. The cost components to compare are:</p>
<ul>
<li><strong>Discount rate:</strong> the percentage on each transaction, typically well above the 2.9% flat rates of mainstream providers.</li>
<li><strong>Per-transaction fee:</strong> a fixed amount per sale.</li>
<li><strong>Monthly and gateway fees.</strong></li>
<li><strong>Chargeback fees:</strong> charged on each dispute, usually higher than standard.</li>
<li><strong>Rolling reserve:</strong> a percentage of sales held back for months.</li>
<li><strong>Contract terms:</strong> length, auto-renewal and early termination fees.</li>
</ul>

<h3>Worked example: how a rolling reserve affects cash flow</h3>
<p>Illustrative figures: an online supplement brand processes $60,000 a month. Its provider charges a 10% rolling reserve held for 180 days.</p>
<table><thead><tr><th>Month</th><th>Sales</th><th>Held in reserve</th><th>Released</th><th>Total reserve balance</th></tr></thead><tbody>
<tr><td>1</td><td>$60,000</td><td>$6,000</td><td>$0</td><td>$6,000</td></tr>
<tr><td>3</td><td>$60,000</td><td>$6,000</td><td>$0</td><td>$18,000</td></tr>
<tr><td>6</td><td>$60,000</td><td>$6,000</td><td>$0</td><td>$36,000</td></tr>
<tr><td>7</td><td>$60,000</td><td>$6,000</td><td>$6,000</td><td>$36,000</td></tr>
</tbody></table>
<p>For the first six months, the business loses access to $36,000 of revenue, and that balance stays tied up as long as sales are steady. Plan for this in your <a href="/blog/cash-flow-forecast">cash flow forecast</a> before you sign, or negotiate a lower percentage, a cap, or a review after six clean months.</p>

<h2>Chargeback thresholds in 2026: VAMP and Mastercard</h2>
<p>Your chargeback ratio is the number that decides whether you stay with a processor. Visa replaced its older dispute and fraud monitoring programs with the Visa Acquirer Monitoring Program (VAMP). Under VAMP, the ratio combines reported fraud and disputes divided by settled card-not-present transactions. Industry guides, including <a href="https://justt.ai/blog/visa-vamp-threshold-changes-april-2026/" target="_blank" rel="noopener noreferrer">this summary of the April 2026 change</a>, report that the merchant "excessive" threshold dropped to 1.5% on April 1, 2026 in regions including North America and Europe, with per-dispute fees for merchants above it. Mastercard runs its own excessive chargeback program with separate ratio and count thresholds.</p>
<p>Acquirers often act well before you reach the network limits, because they are measured on their whole portfolio. Aim to keep disputes well under 1% of transactions. Our <a href="/blog/how-to-handle-chargebacks">chargeback guide</a> covers prevention and responses, and <a href="/blog/3d-secure">3D Secure authentication</a> can reduce fraud disputes on online payments.</p>

<h2>The MATCH list: why one closure can follow you</h2>
<p>When an acquirer terminates a merchant for reasons such as excessive chargebacks, fraud, PCI violations or money laundering, it can add the business and its principals to Mastercard's MATCH database, also called the Terminated Merchant File. <a href="https://docs.stripe.com/disputes/match" target="_blank" rel="noopener noreferrer">Stripe's documentation on terminated merchant files</a> explains how these lists are used by acquirers when reviewing new applications. Entries generally stay for five years, and most mainstream providers decline MATCH-listed applicants automatically.</p>
<p>If you are listed in error, contact the acquirer that listed you and ask for removal with evidence. If the listing is accurate, specialist high-risk providers may still accept you, usually with a larger reserve.</p>

<h2>How to get approved for a high risk merchant account (step by step)</h2>
<ol>
<li><strong>Gather documents:</strong> business registration and <a href="/blog/how-to-get-an-ein">EIN</a>, owner ID, three to six months of bank and processing statements, voided check, and licenses for regulated products.</li>
<li><strong>Clean up your website:</strong> clear pricing, refund and cancellation policy, shipping policy, terms, contact details and a customer service phone number.</li>
<li><strong>Prepare your chargeback history</strong> and explain any spikes.</li>
<li><strong>Apply to two or three specialist providers or ISOs</strong> that state they support your industry.</li>
<li><strong>Compare the full fee schedule</strong>, reserve terms, contract length and termination fees.</li>
<li><strong>Read the contract</strong> for automatic renewal and liquidated damages clauses.</li>
<li><strong>Set up fraud tools</strong> such as address verification, CVV checks, 3D Secure and velocity limits from day one.</li>
</ol>

<h2>Common mistakes high risk merchants make</h2>
<ul>
<li><strong>Hiding the business type on a mainstream processor.</strong> When it is discovered, funds can be held for months and the closure may lead to a MATCH listing.</li>
<li><strong>Using a single processor.</strong> Keep a backup account so one closure does not stop all sales.</li>
<li><strong>Vague billing descriptors.</strong> Customers who do not recognize the charge dispute it.</li>
<li><strong>Hard-to-cancel subscriptions.</strong> They drive disputes and regulatory risk.</li>
<li><strong>Weak paperwork.</strong> Without signed agreements, invoices and delivery proof, you lose disputes you should win.</li>
</ul>

<h2>Ways to reduce risk and processing costs</h2>
<p>Move large B2B invoices to ACH or wire, where fees are lower and chargebacks do not apply in the same way; see our <a href="/blog/how-to-accept-ach-payments">ACH payments guide</a>. Take deposits in smaller milestones rather than one large card payment. Send itemized invoices and receipts that match the billing descriptor. Stay compliant with card data rules; our <a href="/blog/pci-compliance-small-business">PCI compliance guide</a> explains the basics. After 6 to 12 months of low disputes, ask your provider to reduce the reserve, or shop for better rates. If you are deciding between a specialist account and a <a href="/blog/payment-facilitator">payment facilitator</a>, read the facilitator's prohibited business list first.</p>

<h2>High risk vs prohibited: know the difference</h2>
<p>"High risk" means a processor will accept you on tougher terms. "Prohibited" means it will not accept you at all. Mainstream payment facilitators publish both lists, and the same business can be high risk at one provider and prohibited at another. Some activities, such as unlicensed gambling or selling products that are illegal where the customer lives, are effectively prohibited everywhere. If your business is legal but sits on a provider's prohibited list, do not try to work around it; apply to a specialist that explicitly supports your category.</p>

<h2>Domestic vs offshore high-risk accounts</h2>
<p>Some brokers offer offshore merchant accounts with acquirers outside the US for businesses that domestic banks will not take. They can work for genuinely international sellers, but they usually bring higher fees, larger reserves, currency conversion on settlements, slower payouts and more difficulty resolving disputes. For most US businesses, a domestic specialist acquirer is the better first choice, with offshore options considered only after careful legal and tax review.</p>

<h2>Application documents checklist</h2>
<table><thead><tr><th>Document</th><th>Why it is requested</th></tr></thead><tbody>
<tr><td>Formation documents and EIN letter</td><td>Confirms the legal entity</td></tr>
<tr><td>Government ID for each significant owner</td><td>Identity and beneficial ownership checks</td></tr>
<tr><td>Recent bank statements</td><td>Shows cash flow and stability</td></tr>
<tr><td>Prior processing statements</td><td>Shows volume, ticket size and chargeback history</td></tr>
<tr><td>Website, policies and product list</td><td>Confirms what you sell and how you disclose terms</td></tr>
<tr><td>Licenses or lab certificates</td><td>Required for regulated products such as CBD or firearms</td></tr>
<tr><td>Sample invoices, contracts or order confirmations</td><td>Shows how you document each sale</td></tr>
</tbody></table>

<h2>How to graduate to standard pricing</h2>
<p>Risk labels are not permanent. After a year or so of clean processing, with chargebacks consistently low and steady volume, ask your provider to review the rate and reserve, and request quotes from standard providers using your statements as evidence. Changing your sales model can also help: shorter gaps between payment and delivery, smaller deposits, more ACH and fewer card-not-present sales all reduce perceived risk.</p>

<h2>Red flags when choosing a high-risk provider</h2>
<ul>
<li>Guaranteed approval promises before seeing any documents.</li>
<li>Large upfront "application" or "setup" fees paid before approval.</li>
<li>Reluctance to put the full fee schedule and reserve terms in writing.</li>
<li>Contracts that auto-renew for several years with steep liquidated damages.</li>
<li>No clear name of the acquiring bank behind the account.</li>
</ul>
<p>A reputable provider will tell you which acquirer it works with, what reserve it expects and why, and how you can earn better terms over time.</p>

<h2>Final thoughts</h2>
<p>A high risk merchant account is a tool, not a punishment. Price in the higher fees and reserve, keep chargebacks low, and document every sale so you can graduate to better terms. Clear, numbered invoices with full descriptions are one of the cheapest dispute defences you have. Create them with our <a href="/invoice-generator">free invoice generator</a>, which needs no sign-up and lets you download each invoice as a PDF.</p>
`,
  },
  {
    slug: "3d-secure",
    title: "3D Secure Explained for Small Businesses (2026)",
    description:
      "What 3D Secure is, how 3DS2 works, the fraud liability shift, UK and EU SCA rules and exemptions, and when small businesses should turn it on.",
    category: "payments",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-handle-chargebacks",
      "ai-fraud-detection-payments",
      "pci-compliance-small-business",
    ],
    faqs: [
      {
        q: "Is 3D Secure required in the United States?",
        a: "No US law requires 3D Secure for online card payments. It is optional for US merchants, and many use it selectively, for example on high-value or risky transactions, to gain the fraud liability shift. In the UK and the European Economic Area, strong customer authentication rules mean most online card payments with cards issued there must be authenticated, and 3D Secure is the standard way to do that. If you sell to European customers, your processor will usually trigger it automatically.",
      },
      {
        q: "Does 3D Secure stop all chargebacks?",
        a: "No. When a payment is successfully authenticated with 3D Secure, liability for most fraud-related chargebacks, such as a cardholder saying they did not make the purchase, generally shifts to the card issuer. It does not protect you against non-fraud disputes, such as item not received, not as described, or cancelled subscription. Those still depend on your evidence: invoices, contracts, delivery proof and refund policies. Exempted payments also usually keep the liability with the merchant.",
      },
      {
        q: "Will 3D Secure lower my conversion rate?",
        a: "It can, if every customer gets a challenge. The modern version, 3DS2, sends much more data to the issuer, so many payments are approved without the customer doing anything (a frictionless flow). Only riskier payments get a challenge such as a banking app approval or one-time code. Turning on dynamic or risk-based 3D Secure, rather than forcing it on every payment, is the usual balance between fraud protection and checkout friction.",
      },
      {
        q: "Does 3D Secure cost extra?",
        a: "Some processors include it in their standard pricing, while others charge a small per-attempt fee or include it only on certain plans. Check your provider's pricing page or contract. The cost is often small compared with a fraud chargeback, which loses you the sale, the goods or time, and a dispute fee. For low-value, low-risk payments, merchants sometimes skip it to save fees and friction.",
      },
      {
        q: "What is the difference between 3D Secure 1 and 3D Secure 2?",
        a: "The original 3D Secure redirected customers to a bank page, often asking for a static password, which was clunky and caused many abandoned checkouts. EMV 3D Secure, known as 3DS2, shares richer data such as device and transaction details with the issuer, works inside apps, supports banking-app approvals and biometrics, and allows frictionless approvals for low-risk payments. The card networks have retired the old version, so current integrations use 3DS2.",
      },
      {
        q: "Do I need 3D Secure for invoice payment links?",
        a: "If you send invoices with a card payment link, the hosted payment page from your processor will apply 3D Secure according to your settings and the customer's location. For European cards, it is usually required. For US cards, consider enabling it for large invoices or new clients, where a fraudulent payment and later chargeback would hurt most. Bank transfer or ACH payment for big invoices avoids card fraud disputes altogether.",
      },
    ],
    content: `
<p><strong>3D Secure</strong> (3DS) is an extra authentication step for online card payments in which the cardholder's bank confirms the buyer is really the cardholder, often through a banking app approval, a one-time code or biometrics. For a small business, the main benefits are fewer fraudulent payments and a liability shift: if an authenticated payment later turns out to be fraud, the card issuer, not you, usually absorbs the chargeback. The cost is a little extra friction at checkout.</p>

<p>You have probably seen 3D Secure branded as Visa Secure, Mastercard Identity Check or American Express SafeKey. This guide explains how it works, when it is required (UK and EU) or optional (US), what it does and does not protect, and how to set it up sensibly for online sales and invoice payment links.</p>

<h2>How 3D Secure works</h2>
<p>The "3D" refers to three domains: the merchant and its acquirer, the card issuer, and the card network infrastructure that connects them. A typical 3DS2 payment runs like this:</p>
<ol>
<li>The customer enters card details on your checkout or invoice payment page.</li>
<li>Your processor sends an authentication request with transaction and device data (amount, shipping address, browser or app data, purchase history signals).</li>
<li>The issuer's risk engine decides. Low risk: the payment is approved without any customer action (frictionless). Higher risk: the customer gets a challenge.</li>
<li>The customer completes the challenge, for example approving in their banking app.</li>
<li>The authenticated payment then goes for normal authorization, carrying proof of authentication.</li>
</ol>
<p>The modern standard, EMV 3-D Secure (3DS2), replaced the original version, which relied on redirects and static passwords and caused many abandoned checkouts.</p>

<h2>The liability shift: what 3D Secure protects</h2>
<p>When a payment is successfully authenticated, liability for fraud-type disputes (the cardholder says "I did not make this purchase") generally moves from the merchant to the issuer. That is the main financial reason to use it.</p>
<table><thead><tr><th>Dispute type</th><th>Covered by 3DS liability shift?</th><th>What protects you instead</th></tr></thead><tbody>
<tr><td>Fraud: cardholder did not authorize</td><td>Usually yes, if authenticated</td><td>3DS authentication record</td></tr>
<tr><td>Product or service not received</td><td>No</td><td>Delivery proof, signed completion, timesheets</td></tr>
<tr><td>Not as described</td><td>No</td><td>Detailed invoice, contract, scope of work</td></tr>
<tr><td>Subscription cancelled</td><td>No</td><td>Clear cancellation terms and records</td></tr>
<tr><td>Duplicate or incorrect amount</td><td>No</td><td>Accurate invoicing and refund records</td></tr>
<tr><td>Payment processed under an SCA exemption</td><td>Generally no</td><td>Your own fraud screening</td></tr>
</tbody></table>
<p>Because 3DS only covers fraud, it is not a substitute for good documentation. Our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> explains the evidence that wins non-fraud disputes, and a detailed invoice is usually exhibit one.</p>

<h2>Is 3D Secure required? US vs UK and EU</h2>
<h3>United States</h3>
<p>There is no legal requirement. US merchants choose whether to use 3DS. Many turn it on dynamically, for example for orders above a set amount, first-time customers, or orders flagged by the processor's fraud tools. Other US fraud defences include address verification, CVV checks and machine-learning screening, which we cover in <a href="/blog/ai-fraud-detection-payments">AI fraud detection in payments</a>.</p>
<h3>UK and European Economic Area</h3>
<p>Under PSD2 strong customer authentication (SCA) rules and the UK equivalent, most customer-initiated online card payments with cards issued in these regions must be authenticated with two factors, and 3DS is how merchants meet that requirement. Several exemptions exist, requested by the merchant or acquirer and accepted or rejected by the issuer:</p>
<ul>
<li><strong>Low-value payments:</strong> up to EUR 30, subject to cumulative limits (Checkout.com's <a href="https://www.checkout.com/docs/payments/authenticate-payments/3d-secure/sessions/3ds-exemptions" target="_blank" rel="noopener noreferrer">3DS exemptions documentation</a> describes triggers such as five uses or EUR 100 spent without authentication).</li>
<li><strong>Transaction risk analysis (TRA):</strong> available when the acquirer's fraud rate is below set thresholds for the payment amount.</li>
<li><strong>Trusted beneficiaries</strong> (customer whitelists the merchant with their bank).</li>
<li><strong>Merchant-initiated transactions</strong>, such as subscription renewals after an authenticated first payment.</li>
<li><strong>Secure corporate payments</strong> using certain business card processes.</li>
</ul>
<p>If an issuer rejects an exemption, the payment may be soft-declined and must be retried with authentication. Most modern processors handle that automatically.</p>

<h2>Pros and cons of 3D Secure for small businesses</h2>
<table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Fraud liability shift on authenticated payments</td><td>Some customers abandon when challenged</td></tr>
<tr><td>Fewer fraudulent orders getting through</td><td>Possible per-attempt fees with some providers</td></tr>
<tr><td>Required for most European cards anyway</td><td>Does not cover non-fraud disputes</td></tr>
<tr><td>Frictionless approvals for most low-risk 3DS2 payments</td><td>Occasional technical failures with older bank systems</td></tr>
<tr><td>Helps keep dispute ratios low with acquirers</td><td>Exempted payments keep liability with you</td></tr>
</tbody></table>
<p>Keeping fraud disputes down matters more than ever, because Visa's monitoring program counts fraud reports and disputes against your card-not-present volume. Merchants who exceed thresholds face fees or may need a <a href="/blog/high-risk-merchant-account">high-risk merchant account</a>.</p>

<h2>How to set up 3D Secure (step by step)</h2>
<ol>
<li><strong>Check your processor's settings.</strong> Stripe, Adyen, Checkout.com, Square and most gateways support 3DS2; many trigger it automatically where SCA applies.</li>
<li><strong>Use the processor's hosted checkout or SDK</strong> so the challenge window works on mobile and in apps. Hosted pages also reduce your <a href="/blog/pci-compliance-small-business">PCI compliance</a> scope.</li>
<li><strong>Choose rules for US cards</strong>, such as "request 3DS on payments over $500" or "when the risk score is elevated".</li>
<li><strong>Send good data:</strong> customer email, billing and shipping address, and phone. Richer data means more frictionless approvals.</li>
<li><strong>Save authenticated cards properly</strong> for future merchant-initiated charges like subscriptions or installment invoices.</li>
<li><strong>Monitor results monthly:</strong> challenge rate, authentication success rate, declines and chargebacks.</li>
</ol>

<h2>Worked example: is 3D Secure worth it?</h2>
<p>Illustrative figures for an online business selling $150 average orders, 1,000 orders a month, with 0.6% of orders resulting in fraud chargebacks without 3DS.</p>
<table><thead><tr><th>Item</th><th>Without 3DS</th><th>With risk-based 3DS</th></tr></thead><tbody>
<tr><td>Fraud chargebacks per month</td><td>6</td><td>1 (on non-authenticated or exempt payments)</td></tr>
<tr><td>Lost revenue and goods (6 x $150, plus cost)</td><td>$900 + goods</td><td>$150 + goods</td></tr>
<tr><td>Dispute fees at $15 each</td><td>$90</td><td>$15</td></tr>
<tr><td>Lost sales from abandoned challenges (assume 5 orders)</td><td>$0</td><td>$750 revenue, but only lost margin matters</td></tr>
</tbody></table>
<p>If margins are 40%, the abandoned orders cost about $300 in profit, while the fraud savings are about $825 plus the goods not lost. Results depend on your fraud rate; a business with almost no fraud may prefer 3DS only on large or flagged orders.</p>

<h2>3D Secure on invoice payment links</h2>
<p>Service businesses and freelancers mostly encounter 3DS when clients pay invoices by card through a payment link. A few practical points:</p>
<ul>
<li>European clients will usually be asked to approve in their banking app; warn them in the invoice email so the step is expected.</li>
<li>For new clients paying large invoices by card, request 3DS to secure the liability shift.</li>
<li>For large B2B amounts, offer bank transfer or ACH as the default; see our guide to <a href="/blog/best-payment-methods-for-small-business">the best payment methods for small business</a>.</li>
<li>Watch for <a href="/blog/invoice-scams">invoice scams</a> that spoof your payment links; tell clients which domain your payment page uses.</li>
</ul>
<p>Whether your processor is a <a href="/blog/payment-facilitator">payment facilitator</a> like Stripe or a dedicated merchant account, the 3DS settings sit in the same place: the fraud or risk section of the dashboard.</p>

<h2>3D Secure for subscriptions and recurring invoices</h2>
<p>If you bill clients monthly, authenticate the first payment and save the card properly as a merchant-initiated agreement. Later charges can then usually go through without the customer being present, because they are initiated by you under the original authenticated mandate. If an issuer still requests authentication on a renewal, your processor will typically email the customer a link to approve it. Make sure your <a href="/blog/recurring-invoices-guide">recurring invoices</a> and subscription terms state the amount, frequency and how to cancel, which also reduces "cancelled recurring" disputes that 3DS does not cover.</p>

<h2>3D Secure metrics to watch</h2>
<table><thead><tr><th>Metric</th><th>What it tells you</th><th>Action if it looks wrong</th></tr></thead><tbody>
<tr><td>Challenge rate</td><td>Share of authentications that required customer action</td><td>Send richer customer data; review rules forcing challenges</td></tr>
<tr><td>Authentication success rate</td><td>Share of challenged customers who completed it</td><td>Test the mobile flow; warn customers in invoice emails</td></tr>
<tr><td>Frictionless rate</td><td>Payments approved without a challenge</td><td>Higher is better; improve data quality</td></tr>
<tr><td>Fraud dispute rate</td><td>Fraud chargebacks per transaction</td><td>Tighten rules or extend 3DS to more payments</td></tr>
<tr><td>Soft declines</td><td>Exemptions rejected by issuers</td><td>Check automatic retry with authentication is on</td></tr>
</tbody></table>

<h2>What to do if a customer cannot complete 3D Secure</h2>
<p>Customers sometimes fail authentication because their bank app is not set up, the code goes to an old phone number, or a browser blocks the pop-up window. Ask them to contact their card issuer to update contact details, try a different browser or device, or pay by another card. For invoice clients, offering bank transfer or ACH as an alternative avoids losing the payment altogether. Never offer to bypass authentication by taking card details over email, which creates PCI compliance problems and leaves you liable for any fraud.</p>

<h2>Common 3D Secure mistakes</h2>
<ul>
<li><strong>Forcing a challenge on every payment</strong>, which hurts conversion without adding much protection for low-risk orders.</li>
<li><strong>Assuming exempt payments are protected.</strong> If you request an exemption, fraud liability usually stays with you.</li>
<li><strong>Building a custom checkout without testing 3DS on mobile.</strong> Challenge windows that break on phones lose sales.</li>
<li><strong>Ignoring non-fraud disputes.</strong> Keep invoices, delivery proof and clear refund terms.</li>
</ul>

<h2>Summary</h2>
<p>3D Secure verifies the cardholder with their bank, shifts liability for authenticated fraud disputes to the issuer, and is effectively mandatory for most UK and EU card payments. Use risk-based rules to limit friction, and keep strong invoices and contracts for the disputes 3DS does not cover. Create clear, numbered invoices with payment links in our <a href="/invoice-generator">free invoice generator</a>, no sign-up required, and download them as PDFs to send to clients.</p>
`,
  },
  {
    slug: "mercury-vs-relay-vs-bluevine",
    title: "Mercury vs Relay vs Bluevine: Business Banking 2026",
    description:
      "Mercury vs Relay vs Bluevine compared for 2026: plan prices, interest rates, FDIC sweep limits, wires and cash deposits, and which account suits you.",
    category: "comparisons",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "business-bank-account-for-freelancers",
      "wire-transfer-fees",
      "revolut-business-vs-wise",
    ],
    faqs: [
      {
        q: "Are Mercury, Relay and Bluevine real banks?",
        a: "No. All three are financial technology companies that provide business banking services through partner banks, which hold the deposits and provide FDIC insurance. Bluevine works with Coastal Community Bank and other program banks, Relay with Thread Bank's sweep program, and Mercury with its own partner bank network. FDIC coverage applies if the partner bank fails, subject to pass-through conditions, but it does not protect you against the fintech company itself failing operationally, so keep good records.",
      },
      {
        q: "Which is best for depositing cash: Mercury, Relay or Bluevine?",
        a: "None of them is built around cash. Mercury generally does not support cash deposits. Relay and Bluevine allow cash deposits through retail partner networks, which charge a fee per deposit and have limits. If your business handles a lot of cash, such as a restaurant or retail store, a traditional bank or credit union with branches is usually a better primary account, with an online account alongside it for savings or payments.",
      },
      {
        q: "Which account pays the most interest?",
        a: "It depends on balance and plan. On the providers' pricing pages checked in November 2026, Bluevine paid 1.3% APY on checking balances up to $250,000 on its free Standard plan (with activity requirements) and 3.0% on all balances on Premier; Relay's savings APY ranged from 1.19% on Starter to 3.21% on Scale; Mercury advertised treasury yields up to 4.10% for larger balances. Rates are variable and change often, so check current pages.",
      },
      {
        q: "Can I have more than one business bank account?",
        a: "Yes, and many small businesses do. A common setup is one operating account for income and expenses, a separate tax savings account, and sometimes a payroll account. Relay and Bluevine let you open many sub-accounts within one login, which makes Profit First style allocation easy. Using two providers also gives you a backup if one account is frozen for review, which happens occasionally with online banks.",
      },
      {
        q: "Do Mercury, Relay and Bluevine check my credit?",
        a: "Opening a business checking account typically does not involve a hard credit pull, but all three verify identity and business details, such as your EIN, formation documents and ownership. Credit products, such as Bluevine's line of credit or card products, may involve credit checks. Approval also depends on your industry; some business types are not supported. Have your formation documents and EIN letter ready before applying.",
      },
    ],
    content: `
<p>Comparing <strong>Mercury vs Relay</strong> vs Bluevine comes down to how your business moves money. Mercury suits startups and online businesses that send wires and hold larger balances; Relay suits small businesses that want many sub-accounts for budgeting and Profit First; Bluevine suits owners who want interest on checking and the option to deposit cash or write checks. All three offer free starter plans and are fintechs backed by FDIC-insured partner banks rather than banks themselves.</p>

<p>Below, we compare 2026 plan prices, interest rates, FDIC coverage, wires, cash deposits and invoicing features, using each provider's own pricing pages checked in November 2026. Rates and fees change frequently, so treat the numbers as a snapshot and confirm before you open an account. If you are still deciding whether you need a separate account at all, read our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> first.</p>

<h2>Mercury vs Relay vs Bluevine at a glance</h2>
<table><thead><tr><th>Feature</th><th>Mercury</th><th>Relay</th><th>Bluevine</th></tr></thead><tbody>
<tr><td>Free plan</td><td>Mercury ($0)</td><td>Starter ($0)</td><td>Standard ($0)</td></tr>
<tr><td>Paid plans</td><td>Plus $29.90/mo, Pro $299/mo</td><td>Grow $30/mo, Scale $120/mo (discounted to $90 at the time of checking)</td><td>Plus $30/mo, Premier $95/mo (both waivable)</td></tr>
<tr><td>Interest</td><td>Treasury product, up to 4.10% with $250K+ balance</td><td>Savings APY 1.19% (Starter) to 3.21% (Scale)</td><td>Checking APY 1.3% (Standard, up to $250K, activity required) to 3.0% (Premier, all balances)</td></tr>
<tr><td>FDIC coverage via sweep</td><td>Up to $5M</td><td>Up to $3M</td><td>Up to $3M</td></tr>
<tr><td>Domestic wires</td><td>$0</td><td>Fee applies (reduced on paid plans)</td><td>Outgoing up to $15</td></tr>
<tr><td>International wires</td><td>USD free (OUR option $15); 1% FX fee for non-USD</td><td>Supported, fees apply</td><td>Supported, fees apply</td></tr>
<tr><td>Cash deposits</td><td>Generally not supported</td><td>Via retail partner network, fee per deposit</td><td>Via retail partner network, fee per deposit</td></tr>
<tr><td>Sub-accounts</td><td>Multiple accounts</td><td>20 checking accounts (50 on Scale)</td><td>Up to 50 sub-accounts</td></tr>
<tr><td>Invoicing</td><td>Free invoicing with card/ACH acceptance</td><td>Receivables tools on paid plans</td><td>Invoicing and bill pay tools</td></tr>
<tr><td>Best for</td><td>Startups, online and international businesses</td><td>Budget-focused small businesses and Profit First users</td><td>Interest on checking, check writers, cash deposits</td></tr>
</tbody></table>
<p>Sources: <a href="https://mercury.com/pricing" target="_blank" rel="noopener noreferrer">Mercury pricing</a>, <a href="https://relayfi.com/pricing" target="_blank" rel="noopener noreferrer">Relay pricing</a> (APYs as of 9/17/2026) and <a href="https://www.bluevine.com/business-checking" target="_blank" rel="noopener noreferrer">Bluevine business checking</a>. All rates are variable.</p>

<h2>Mercury: best for startups and wires</h2>
<p>Mercury built its reputation with venture-backed startups, and its strengths still show that. Domestic wires and USD international wires are free on every plan, invoicing and bill pay are included, and balances can be spread across partner banks for up to $5 million in FDIC coverage. Larger balances can earn a treasury yield, which is an investment product rather than a deposit, so it is not FDIC insured.</p>
<p><strong>Watch out for:</strong> a 1% currency exchange fee on non-USD wires and a 3% FX fee on non-USD card transactions, no meaningful cash deposit option, and an approval process that can reject some industries. Freelancers who bill international clients should compare FX costs with Wise; see our <a href="/blog/revolut-business-vs-wise">Revolut Business vs Wise</a> comparison.</p>

<h2>Relay: best for budgeting with sub-accounts</h2>
<p>Relay's standout feature is account structure. Even on the free Starter plan you can open up to 20 checking accounts, plus debit cards per account, which makes it easy to separate operating money, payroll, tax reserves and owner pay. That fits the <a href="/blog/profit-first-method">Profit First method</a> neatly. Savings APY rises with the plan, from 1.19% on Starter to 3.21% on Scale.</p>
<p><strong>Watch out for:</strong> checking balances do not earn interest, wire and same-day ACH fees apply on lower plans, and FDIC coverage up to $3 million depends on funds being placed through the sweep program.</p>

<h2>Bluevine: best for interest on checking</h2>
<p>Bluevine pays interest directly on checking. On the free Standard plan you earn 1.3% on balances up to $250,000 if you spend $500 a month with the debit card or receive $2,500 a month in customer payments. Plus and Premier raise the rate, with Premier paying 3.0% on all balances. The monthly fees on paid plans can be waived by meeting balance or spend requirements.</p>
<p><strong>Watch out for:</strong> $1.50 per check sent through bill pay on Standard, outgoing wire fees, and the activity condition on Standard interest. Check that the waiver conditions are realistic for your balances.</p>

<h2>Worked example: which account earns more?</h2>
<p>Illustrative only, using the rates above and ignoring rate changes. A design studio keeps an average of $40,000 in operating cash and $30,000 set aside for taxes.</p>
<table><thead><tr><th>Setup</th><th>Monthly fee</th><th>Annual interest (approx.)</th><th>Net annual result</th></tr></thead><tbody>
<tr><td>Bluevine Standard, all $70,000 in checking (activity met)</td><td>$0</td><td>$910 (1.3%)</td><td>$910</td></tr>
<tr><td>Relay Starter, $30,000 in savings at 1.19%</td><td>$0</td><td>$357</td><td>$357</td></tr>
<tr><td>Relay Grow, $30,000 in savings at 1.87%</td><td>$30</td><td>$561</td><td>$201 after $360 fees</td></tr>
<tr><td>Bluevine Premier, $70,000 at 3.0% (fee waived if requirements met)</td><td>$0 or $95</td><td>$2,100</td><td>$2,100 or $960</td></tr>
</tbody></table>
<p>The lesson: paid plans only pay off with larger balances or features you will actually use. For the tax money itself, see our dedicated guide to a <a href="/blog/business-savings-account">business savings account for tax money</a>, and for spare cash beyond your emergency fund, <a href="/blog/treasury-bills-for-business">Treasury bills for business</a> are another option.</p>

<h2>How to choose: a step-by-step checklist</h2>
<ol>
<li><strong>List how you get paid:</strong> ACH, wires, card payments, checks, cash. Cash-heavy businesses should rule out Mercury as a primary account.</li>
<li><strong>List how you pay:</strong> contractors by ACH, suppliers by check, international vendors by wire.</li>
<li><strong>Estimate balances:</strong> average operating balance and tax reserves.</li>
<li><strong>Check your industry is supported</strong> in each provider's terms.</li>
<li><strong>Compare the real annual cost:</strong> plan fees minus interest, plus wire, check and cash deposit fees at your volumes.</li>
<li><strong>Check integrations</strong> with your accounting software for <a href="/blog/bank-reconciliation">bank reconciliation</a>.</li>
<li><strong>Keep a backup account</strong> at a second institution in case of a temporary freeze or review.</li>
</ol>

<h2>Common mistakes when picking an online business bank</h2>
<ul>
<li><strong>Chasing the highest APY</strong> while ignoring wire, check and FX fees that outweigh it.</li>
<li><strong>Assuming everything is FDIC insured.</strong> Treasury and money market sweep products are investments, not deposits.</li>
<li><strong>Using one account for everything.</strong> Separate tax money so you do not spend it.</li>
<li><strong>Forgetting cash.</strong> Retail deposit fees add up for cash businesses.</li>
<li><strong>Not putting bank details on invoices correctly.</strong> Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers routing numbers, account numbers and SWIFT codes.</li>
</ul>

<h2>Getting paid into your new account</h2>
<p>Once your account is open, update every invoice template with the new account and routing numbers, and tell existing clients in writing; changed bank details are a classic <a href="/blog/invoice-scams">invoice scam</a> pattern, so clients may ask you to confirm by phone. For large invoices, compare <a href="/blog/wire-transfer-fees">wire transfer fees</a> with ACH costs before choosing which method to request.</p>

<h2>Who each account is not for</h2>
<ul>
<li><strong>Mercury is not ideal</strong> for cash-heavy businesses, owners who want a branch to visit, or anyone who mostly pays suppliers in foreign currencies, where the 1% FX fee on non-USD wires adds up.</li>
<li><strong>Relay is not ideal</strong> if you want interest on your main operating balance or send many wires on the free plan.</li>
<li><strong>Bluevine is not ideal</strong> if you cannot reliably meet the Standard plan's activity requirement, or if you need many free outgoing wires.</li>
</ul>
<p>None of the three is a full replacement for a bank relationship if you need SBA loans, merchant services and local support in one place; our guide to <a href="/blog/sba-loans">SBA loans</a> explains where traditional banks still help.</p>

<h2>How to switch business banks without missing a payment</h2>
<ol>
<li>Open the new account and verify it fully before closing anything.</li>
<li>Move payment details in this order: payroll, tax payments (EFTPS or IRS Direct Pay), loans and leases, recurring vendors, then subscriptions.</li>
<li>Update your payment processor payout account and wait for one successful payout.</li>
<li>Update invoice templates, email signatures and your client portal with new details.</li>
<li>Email clients a signed notice of the change and invite them to confirm by phone.</li>
<li>Keep the old account open with a small balance for 60 to 90 days to catch stragglers.</li>
<li>Download all old statements before closing; you will need them for taxes and audits.</li>
</ol>

<h2>Account freezes and how to avoid them</h2>
<p>Online banks run automated compliance checks, and unusual activity, such as a large incoming wire from a new country or many rapid transfers, can trigger a review that freezes the account for days. Reduce the risk by describing your business accurately at sign-up, keeping invoices and contracts for large payments ready to upload, and warning support before an unusually large transaction. Keeping a secondary account elsewhere means payroll and taxes can still go out if one account is under review.</p>

<h2>Security features to compare</h2>
<p>All three offer two-factor login, card freezing in the app and user permissions for team members. Before choosing, check whether you can require approval for outgoing payments above a set amount, restrict which team members can add new payees, and receive alerts for every outgoing transfer. Those controls matter more than they seem: business email compromise, where a fraudster impersonates a vendor and asks you to pay new bank details, is one of the most common ways small businesses lose money.</p>

<h2>Verdict</h2>
<p>Choose Mercury for free wires, startup tools and high FDIC coverage; Relay for many sub-accounts and budgeting discipline; Bluevine for interest on checking and check or cash flexibility. All three are capable, and the cheapest choice is the one that matches how money actually flows through your business. Whichever you pick, put the new account details on professional invoices made with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download them as PDFs ready to send.</p>
`,
  },
];
