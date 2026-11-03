import type { PostDraft } from "../blog";

export const US_TAX_FORMS_2026_C_POSTS: PostDraft[] = [
  {
    slug: "form-1099-da",
    title: "Form 1099-DA: Crypto Broker Reporting Explained",
    description:
      "Form 1099-DA explained: what crypto brokers report, cost basis rules from 2026, stablecoin and NFT thresholds, and how to match it to Form 8949 and invoices.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-accept-crypto-payments",
      "stablecoin-invoice-payments",
      "1099-k-threshold",
    ],
    faqs: [
      {
        q: "What is Form 1099-DA used for?",
        a: "Form 1099-DA, Digital Asset Proceeds From Broker Transactions, is an information return that US digital asset brokers file with the IRS and send to customers. It reports sales and exchanges of crypto and other digital assets that the broker effected for you, including gross proceeds and, for covered assets, cost basis. You use it to complete Form 8949 and Schedule D, but you still report all your digital asset transactions whether or not a form arrives.",
      },
      {
        q: "When do brokers have to send Form 1099-DA?",
        a: "Brokers generally must furnish Form 1099-DA to customers by February 15 of the year after the sales, moved to the next business day when that date falls on a weekend or holiday. For sales made in 2026 the furnishing date falls in mid-February 2027. Brokers can send a consolidated statement with other 1099 forms. If you have not received yours by late February, check the exchange's tax documents page before filing.",
      },
      {
        q: "Does Form 1099-DA show my cost basis?",
        a: "Only for covered securities. For transactions from 2026 onward, brokers must report basis for digital assets acquired after 2025 in a custodial account at that broker and held there until sale. Assets you bought before 2026, or transferred in from another wallet or exchange, are noncovered, so box 1g may be blank or reported voluntarily with box 9 checked. You must supply the correct basis yourself from your own records.",
      },
      {
        q: "Will I get a 1099-DA for small stablecoin sales?",
        a: "Possibly not. Under the optional method for qualifying stablecoins, a broker does not have to report designated sales if your total gross proceeds from those sales are $10,000 or less for the year. Specified NFTs have a similar optional method with a $600 threshold, and payment processor sales under $600 for the year are also exempt. These are reporting thresholds only; any gain is still taxable and must go on your return.",
      },
      {
        q: "Do I get a Form 1099-DA for crypto received as payment for my services?",
        a: "No. Payment for services is ordinary income and is not a sale reported on Form 1099-DA. If a client pays you in crypto, you report the dollar value on the date received as business income, usually on Schedule C. A 1099-DA appears later only if you sell or exchange that crypto through a broker. Keep the invoice and the dollar value at receipt, because that value becomes your cost basis.",
      },
      {
        q: "What if my Form 1099-DA is wrong?",
        a: "Contact the broker first and ask for a corrected form. If the broker will not correct it, report the transaction on Form 8949 using the figures on the form and then make an adjustment, for example with code B in column (f) when the reported basis is incorrect. Keep your records explaining the difference, such as the original purchase confirmation or transfer history, in case the IRS sends a notice.",
      },
    ],
    content: `
<p>Form 1099-DA is the information return that US crypto exchanges and other digital asset brokers use to report your sales and exchanges of digital assets to the IRS. The first forms covered 2025 sales and showed gross proceeds only; for sales from 2026 onward, brokers must also report cost basis for assets you bought in that account after 2025. If you sell, swap or spend crypto through a custodial platform, expect a Form 1099-DA and plan to reconcile it with your own records.</p>

<p>For freelancers and small businesses that take crypto from clients, the form matters twice: once when you receive crypto as income, which the 1099-DA does not report, and again when you sell it, which it does. This guide explains who files the form, what each box means, the stablecoin and NFT thresholds, and how to carry the numbers to Form 8949 without double-counting income. It is general information, not tax advice; check your situation with a tax professional.</p>

<h2>What is Form 1099-DA?</h2>
<p>Form 1099-DA, Digital Asset Proceeds From Broker Transactions, was created by Treasury regulations that apply the broker reporting rules long used for stocks (Form 1099-B) to digital assets. Under the <a href="https://www.irs.gov/instructions/i1099da" target="_blank" rel="noopener noreferrer">IRS instructions for Form 1099-DA</a>, a broker reports sales it effects for customers, which includes disposing of a digital asset for cash, for another digital asset, for a stored-value card, or as payment for broker services.</p>
<p>Generally only US digital asset brokers that take custody of customer assets must file. That covers centralized exchanges, hosted wallet providers that execute trades, digital asset kiosks and certain payment processors. In April 2025, Congress used the Congressional Review Act to repeal the separate rule that would have treated many decentralized finance (DeFi) front ends as brokers, so purely on-chain swaps from a self-custody wallet generally do not produce a Form 1099-DA. They are still taxable and you still report them.</p>

<h3>The rollout timeline</h3>
<table><thead><tr><th>Sales made in</th><th>What the broker reports</th><th>Form arrives</th></tr></thead><tbody>
<tr><td>2025</td><td>Gross proceeds; basis not required</td><td>Early 2026</td></tr>
<tr><td>2026 and later</td><td>Gross proceeds, plus cost basis for covered assets (acquired after 2025 in the same custodial account)</td><td>Early 2027 and each year after</td></tr>
<tr><td>Any year, noncovered assets</td><td>Gross proceeds; basis optional (box 9 checked if voluntarily reported)</td><td>With the regular form</td></tr>
</tbody></table>

<h2>Who gets a Form 1099-DA, and who does not</h2>
<p>You should expect a form if you sold, converted or traded digital assets on a US custodial platform during the year, unless a de minimis rule applies. You will usually not receive one for:</p>
<ul>
<li><strong>Crypto received as payment for work.</strong> A client paying your invoice in USDC or Bitcoin is income to you, not a sale. If you use a processor, it may send you a <a href="/blog/1099-k-threshold">Form 1099-K</a> instead, depending on its own reporting thresholds.</li>
<li><strong>Staking and other rewards.</strong> The instructions state that rewards and staking payments are not reported on Form 1099-DA. They are still ordinary income when you gain control of them.</li>
<li><strong>Transfers between your own wallets.</strong> Moving coins from an exchange to your hardware wallet is not a sale. The broker may record transfer-in dates (boxes 12a and 12b) when assets arrive.</li>
<li><strong>Self-custody DeFi activity.</strong> Software that only lets you control your own private keys is not treated as a broker.</li>
</ul>

<h2>Stablecoin, NFT and payment processor thresholds</h2>
<p>To avoid millions of tiny forms, the rules include optional methods and de minimis thresholds. Brokers may choose whether to use the optional methods, so two exchanges can treat the same activity differently.</p>
<table><thead><tr><th>Asset or activity</th><th>Threshold per customer per year</th><th>Effect</th></tr></thead><tbody>
<tr><td>Qualifying stablecoins (optional method)</td><td>$10,000 aggregate gross proceeds</td><td>No reporting of designated sales at or below the threshold; above it, aggregate reporting</td></tr>
<tr><td>Specified NFTs (optional method)</td><td>$600 aggregate gross proceeds</td><td>No reporting at or below the threshold</td></tr>
<tr><td>Processor digital asset payment (PDAP) sales</td><td>$600</td><td>No reporting at or below; above it, all such sales are reported</td></tr>
</tbody></table>
<p>These thresholds only switch off the broker's reporting. Your gains and losses remain taxable, which matters if you <a href="/blog/stablecoin-invoice-payments">take stablecoin invoice payments</a> and convert them in many small batches.</p>

<h2>Form 1099-DA boxes explained</h2>
<p>The form is organized around individual transactions. The boxes you will look at most:</p>
<table><thead><tr><th>Box</th><th>What it shows</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>1a-1c</td><td>Token identifier, asset name, number of units</td><td>Matches the transaction to your records</td></tr>
<tr><td>1d / 1e</td><td>Date acquired / date sold</td><td>Determines short-term vs long-term</td></tr>
<tr><td>1f</td><td>Gross proceeds</td><td>The sale amount for Form 8949 column (d)</td></tr>
<tr><td>1g</td><td>Cost or other basis</td><td>Only required for covered assets</td></tr>
<tr><td>1i</td><td>Wash sale loss disallowed</td><td>Rarely used for crypto; check if present</td></tr>
<tr><td>2</td><td>Basis reported to IRS</td><td>Decides which Form 8949 box you check</td></tr>
<tr><td>4</td><td>Federal income tax withheld</td><td>Backup withholding, claimed as a payment</td></tr>
<tr><td>9</td><td>Noncovered security</td><td>Basis was voluntary or missing</td></tr>
<tr><td>11a-11c</td><td>Optional-method details</td><td>Aggregate stablecoin or NFT reporting</td></tr>
<tr><td>12a-12b</td><td>Units and date transferred in</td><td>Flags assets moved in from elsewhere</td></tr>
</tbody></table>

<h2>How to use Form 1099-DA on your tax return</h2>
<ol>
<li><strong>Collect every form.</strong> Download 1099-DA statements from each exchange, plus any 1099-K, 1099-MISC or 1099-NEC from processors and clients.</li>
<li><strong>Pull your own transaction history.</strong> Export CSVs from every exchange and wallet, including the ones that did not issue a form.</li>
<li><strong>Reconcile proceeds.</strong> Make sure each sale on the 1099-DA appears in your records and that totals match.</li>
<li><strong>Fill in missing basis.</strong> For noncovered assets, use your purchase records or the dollar value on the date you received crypto as payment.</li>
<li><strong>Sort by box.</strong> On the 2025 and later Form 8949, digital assets use boxes G, H and I (short-term) and J, K and L (long-term). Our guide to <a href="/blog/form-8949">Form 8949</a> explains each one.</li>
<li><strong>Carry totals to Schedule D</strong> and answer the digital asset question on page 1 of Form 1040.</li>
</ol>

<h2>Worked example: a freelancer paid in crypto</h2>
<p>This example is illustrative. A web developer invoices a client $4,000 and accepts payment in USDC on March 10, 2026. On the same day she receives 0.05 BTC worth $3,000 for a second project. Both amounts, $7,000 in total, are business income on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> and are subject to <a href="/blog/schedule-se">self-employment tax via Schedule SE</a>.</p>
<p>In September she sells the 0.05 BTC on the same exchange for $3,600 and converts the USDC to dollars at $4,000. Her early-2027 Form 1099-DA shows:</p>
<ul>
<li>BTC sale: proceeds $3,600. If the BTC was received into her account after 2025 and the exchange tracked it as an acquisition, basis of $3,000 may be reported. If it was transferred in from a personal wallet, basis is likely blank.</li>
<li>USDC: $4,000 of qualifying stablecoin sales, at or under $10,000, so the exchange may not report them at all under the optional method.</li>
</ul>
<p>Her tax result: a $600 short-term capital gain on the BTC and zero gain on the USDC. She does not report the $3,000 again as a gain; the income was already taxed on Schedule C, and that $3,000 is her basis. The invoices she issued are her evidence of the value on the day of receipt.</p>

<h2>Common mistakes with Form 1099-DA</h2>
<ul>
<li><strong>Treating gross proceeds as profit.</strong> Without basis, the form can make it look as if the entire sale is gain. Always enter your real basis.</li>
<li><strong>Double-counting crypto income.</strong> Crypto received for services is taxed once as income; only the later change in value is a capital gain or loss.</li>
<li><strong>Ignoring transfers.</strong> Moving coins between exchanges breaks the broker's basis chain. Keep a record of where each lot came from.</li>
<li><strong>Assuming no form means no tax.</strong> DeFi swaps, foreign exchanges and small stablecoin sales may never appear on a form but are still reportable.</li>
<li><strong>Mixing business and personal wallets.</strong> A separate wallet or exchange account for client payments makes reconciliation far easier.</li>
</ul>

<h2>What to do if you received a 1099-DA you did not expect</h2>
<p>If a form shows sales you do not recognize, log in and check the account's trade history, auto-convert settings and card spending (spending crypto with a card is a sale). If the form is wrong, ask the broker for a corrected 1099-DA. If you already filed and later discover a missing form, you may need an <a href="/blog/amended-tax-return-1040-x">amended return on Form 1040-X</a>. The IRS matches information returns to tax returns automatically, so unreported proceeds usually lead to a CP2000 notice proposing tax on the full proceeds.</p>

<h2>Recordkeeping that makes 1099-DA season easy</h2>
<p>The broker sees only part of your activity. Your own records fill the gaps:</p>
<ul>
<li>Every invoice paid in crypto, showing the dollar amount, the token, the network and the transaction hash.</li>
<li>Exchange and wallet exports for each year, saved as files rather than relying on a platform that might close.</li>
<li>A lot-tracking spreadsheet or crypto tax software that assigns basis per wallet, which the IRS has required since 2025 rather than the older universal method.</li>
<li>Retention for at least as long as the IRS can audit; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices and records</a>.</li>
</ul>
<p>If you are still deciding whether to accept digital payments at all, our guide on <a href="/blog/how-to-accept-crypto-payments">how to accept crypto payments</a> compares processors and self-custody, and the <a href="/blog/1099-nec-threshold-2026">2026 1099-NEC threshold</a> post explains what clients report when they pay you.</p>

<h2>Form 1099-DA compared with other 1099 forms</h2>
<table><thead><tr><th>Form</th><th>Filed by</th><th>Reports</th></tr></thead><tbody>
<tr><td>1099-DA</td><td>Digital asset brokers</td><td>Sales and exchanges of digital assets</td></tr>
<tr><td>1099-B</td><td>Securities brokers</td><td>Sales of stocks, bonds and similar</td></tr>
<tr><td>1099-K</td><td>Payment settlement entities</td><td>Gross payments received for goods and services</td></tr>
<tr><td>1099-NEC</td><td>Businesses paying contractors</td><td>Nonemployee compensation ($2,000 threshold for 2026 payments)</td></tr>
<tr><td>1099-MISC</td><td>Payers of other income</td><td>Rewards, prizes and other income in some cases</td></tr>
</tbody></table>

<p>Clear invoices are the backbone of crypto recordkeeping: they prove what you were paid, when and in what token, which sets your basis for every later sale. Create professional invoices that state the dollar amount and the accepted token with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download each one as a PDF for your tax files.</p>
`,
  },
  {
    slug: "form-8949",
    title: "Form 8949: How to Report Capital Asset Sales",
    description:
      "Form 8949 guide: which box to check (A-L), how to fill columns (a)-(h), adjustment codes, crypto and stock examples, and when you can skip it for Schedule D.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-accept-crypto-payments",
      "federal-tax-brackets-2026",
      "amended-tax-return-1040-x",
    ],
    faqs: [
      {
        q: "Who needs to file Form 8949?",
        a: "Individuals use Form 8949 to report sales and exchanges of capital assets such as stocks, crypto, collectibles and investment property, along with items such as nonbusiness bad debts and worthless securities. You generally file it whenever you have capital transactions reported on Forms 1099-B, 1099-DA or 1099-K, or transactions with no form at all. Partnerships, corporations, estates and trusts also use it for certain transactions. It is attached to Schedule D.",
      },
      {
        q: "Can I skip Form 8949 and report directly on Schedule D?",
        a: "Sometimes. Exception 1 in the instructions lets you report totals directly on Schedule D line 1a (short-term) or 8a (long-term) when the broker reported basis to the IRS, you need no adjustments, and the sale is not a collectible or other special item. Many brokerage clients with simple stock sales qualify. Crypto sold from older holdings usually does not qualify, because basis was not reported for those assets.",
      },
      {
        q: "What is the difference between boxes A, B and C on Form 8949?",
        a: "The boxes describe how a non-digital-asset sale was reported to you. Box A means you received a 1099-B showing basis was reported to the IRS. Box B means a 1099-B was received but basis was not reported. Box C means no 1099-B was received. Boxes D, E and F are the long-term equivalents. From 2025, digital assets use separate boxes G, H, I (short-term) and J, K, L (long-term).",
      },
      {
        q: "How do I report a wash sale on Form 8949?",
        a: "Enter code W in column (f) and the disallowed loss as a positive number in column (g). This reduces the loss shown in column (h). The broker usually reports the disallowed amount in box 1g of Form 1099-B. If the broker amount is wrong, for example because you bought substantially identical stock in another account, enter the correct amount and keep records showing how you figured it.",
      },
      {
        q: "Is the gain on crypto I received as payment reported on Form 8949?",
        a: "Only the change in value after you received it. The dollar value on the day a client paid you is business income, reported on Schedule C, and that same amount becomes your basis. When you later sell, swap or spend the crypto, Form 8949 shows proceeds minus that basis. If the price fell, you have a capital loss. Your invoice and payment record support the basis figure.",
      },
      {
        q: "What happens if I forget to file Form 8949?",
        a: "If the IRS received a 1099-B or 1099-DA showing sales that are missing from your return, its matching system will likely send a CP2000 notice proposing tax on the full gross proceeds, because it may not know your basis. Respond with the correct figures or file an amended return on Form 1040-X with Form 8949 and Schedule D. Interest and possibly penalties apply to any additional tax owed.",
      },
    ],
    content: `
<p>Form 8949 is where you list each sale or exchange of a capital asset, such as stock, crypto, collectibles or investment property, before the totals flow to Schedule D. Each row shows what you sold, when you bought and sold it, the proceeds, your cost basis, any adjustment and the resulting gain or loss. The hardest part is not the arithmetic but picking the right checkbox and adjustment code, especially now that digital assets have their own boxes.</p>

<p>Self-employed people meet this form more often than they expect: selling crypto received from clients, cashing out stock grants from a former job, or selling an investment property. This guide walks through the 2025 version of the form, which is used for returns filed in 2026, with worked examples and the mistakes that trigger IRS notices. It is general information, not tax advice, so confirm details for your own return with a tax professional.</p>

<h2>What Form 8949 is for</h2>
<p>Form 8949, Sales and Other Dispositions of Capital Assets, reconciles the amounts brokers report on Forms 1099-B and 1099-DA with what you report on your return. According to the <a href="https://irs.gov/instructions/i8949" target="_blank" rel="noopener noreferrer">IRS Form 8949 instructions</a>, individuals use it for capital asset sales reported on Forms 1099-B, 1099-DA or 1099-K, sales not reported on any form, nonbusiness bad debts, worthless securities and qualified opportunity fund items. Form 8949 is completed before Schedule D, and Schedule D then applies the capital gain tax rates.</p>
<p>Business property used in a trade, such as equipment or a work vehicle, is not reported here. Its sale goes on Form 4797, and its depreciation history comes from <a href="/blog/form-4562">Form 4562</a>.</p>

<h2>Short-term vs long-term: Part I and Part II</h2>
<p>Part I is for assets held one year or less, and Part II for assets held more than one year. Count the holding period from the day after you acquired the asset through the day you sold it. Inherited property is generally long-term regardless of how long you held it, and nonbusiness bad debts are always short-term.</p>
<p>The split matters because long-term gains get lower rates. For 2026, the 0% long-term rate applies up to $49,450 of taxable income for single filers and $98,900 for married couples filing jointly, and the 15% rate up to $545,500 single and $613,700 joint, with 20% above those amounts (Rev. Proc. 2025-32). Short-term gains are taxed at your ordinary rates; see the <a href="/blog/federal-tax-brackets-2026">2026 federal tax brackets</a>.</p>

<h2>Which box to check on Form 8949 (A through L)</h2>
<p>Every Part I or Part II page must have exactly one box checked, and you use a separate page for each box that applies.</p>
<table><thead><tr><th>Situation</th><th>Short-term (Part I)</th><th>Long-term (Part II)</th></tr></thead><tbody>
<tr><td>Form 1099-B, basis reported to IRS</td><td>A</td><td>D</td></tr>
<tr><td>Form 1099-B, basis not reported</td><td>B</td><td>E</td></tr>
<tr><td>No 1099-B (non-digital asset)</td><td>C</td><td>F</td></tr>
<tr><td>Form 1099-DA, basis reported to IRS</td><td>G</td><td>J</td></tr>
<tr><td>Form 1099-DA, basis not reported</td><td>H</td><td>K</td></tr>
<tr><td>Digital asset, no 1099-DA received</td><td>I</td><td>L</td></tr>
</tbody></table>
<p>Do not use boxes C or F for digital assets. Most crypto sold in 2025 falls in H, K, I or L because brokers were not yet required to report basis. For how brokers fill the digital asset form, see our <a href="/blog/form-1099-da">Form 1099-DA guide</a>.</p>

<h2>How to fill out Form 8949 column by column</h2>
<table><thead><tr><th>Column</th><th>What to enter</th><th>Tip</th></tr></thead><tbody>
<tr><td>(a) Description</td><td>e.g. 100 sh XYZ Co; for crypto, units and token name</td><td>Add a transaction ID for digital assets if you have one</td></tr>
<tr><td>(b) Date acquired</td><td>Month, day, year</td><td>"VARIOUS" for multiple lots, "INHERITED" for inherited property</td></tr>
<tr><td>(c) Date sold</td><td>Month, day, year</td><td>Trade date, not settlement date</td></tr>
<tr><td>(d) Proceeds</td><td>Sales price from the 1099 or your records</td><td>Net of selling costs only if no 1099 was received</td></tr>
<tr><td>(e) Cost or other basis</td><td>Purchase price plus fees, or value when received</td><td>Crypto received as pay: dollar value on receipt date</td></tr>
<tr><td>(f) Code</td><td>Adjustment code(s), if any</td><td>Leave blank if no adjustment</td></tr>
<tr><td>(g) Adjustment</td><td>Amount of adjustment</td><td>Negative amounts in parentheses</td></tr>
<tr><td>(h) Gain or loss</td><td>(d) minus (e), then apply (g)</td><td>Totals carry to Schedule D</td></tr>
</tbody></table>

<h3>The adjustment codes you will actually use</h3>
<ul>
<li><strong>B</strong>: basis shown on the 1099 is wrong (common with stock compensation and crypto transfers).</li>
<li><strong>W</strong>: wash sale loss disallowed, entered as a positive adjustment.</li>
<li><strong>E</strong>: selling expenses or option premiums not reflected on the form.</li>
<li><strong>L</strong>: nondeductible loss, such as a personal-use item reported on a 1099-K that sold at a loss.</li>
<li><strong>H</strong>: excluded gain on the sale of your main home.</li>
<li><strong>M</strong>: multiple transactions summarized on one row with an attached statement.</li>
<li><strong>N</strong>: you received the form as a nominee for someone else.</li>
</ul>

<h2>When you can skip Form 8949</h2>
<p>Under Exception 1, you can put totals straight onto Schedule D line 1a or 8a when the broker reported basis to the IRS, no adjustments are needed and the transactions are not collectibles or other special items. Under Exception 2, you can attach a statement listing the same details (for example, a broker's tax report) and enter combined totals on Form 8949 with code M. Most tax software does this automatically when you import a consolidated 1099.</p>

<h2>Step by step: reporting your sales</h2>
<ol>
<li>Gather every Form 1099-B, 1099-DA and 1099-K, and your own records for sales with no form.</li>
<li>Group transactions by box (A to L) and by short-term or long-term.</li>
<li>Check each basis figure. Correct missing or wrong basis using purchase confirmations, invoices for crypto received as payment, or inheritance valuations.</li>
<li>Enter rows or summary totals, with codes and adjustments where needed.</li>
<li>Total each page and carry the totals to the matching Schedule D line.</li>
<li>Apply the $3,000 annual net capital loss limit ($1,500 if married filing separately) and carry any excess forward.</li>
</ol>

<h2>Worked example: stock and crypto on one return</h2>
<p>These figures are illustrative. A consultant had three sales in 2025:</p>
<table><thead><tr><th>Asset</th><th>Box</th><th>Proceeds</th><th>Basis</th><th>Code / adj.</th><th>Gain (loss)</th></tr></thead><tbody>
<tr><td>50 sh ABC, held 3 years, 1099-B basis reported</td><td>D</td><td>$9,000</td><td>$5,000</td><td>none</td><td>$4,000</td></tr>
<tr><td>0.1 BTC received as client payment in Jan 2025, sold Nov 2025</td><td>H</td><td>$9,500</td><td>$10,200</td><td>none</td><td>($700)</td></tr>
<tr><td>1,000 USDC, swapped on a DeFi app, no 1099-DA</td><td>I</td><td>$1,000</td><td>$1,000</td><td>none</td><td>$0</td></tr>
</tbody></table>
<p>The ABC sale could go directly on Schedule D line 8a under Exception 1. The bitcoin's $10,200 basis is the dollar value on the day the client paid, which was already reported as income on <a href="/blog/schedule-c-for-freelancers">Schedule C</a>. Her net result is a $4,000 long-term gain and a $700 short-term loss, which Schedule D nets together.</p>

<h2>Common Form 8949 mistakes</h2>
<ul>
<li><strong>Reporting zero basis.</strong> Leaving basis blank when the 1099 shows none can make you pay tax on the entire sale price.</li>
<li><strong>Taxing crypto income twice.</strong> Crypto received for work has a basis equal to the income you reported.</li>
<li><strong>Using the wrong box for crypto.</strong> Boxes C and F are not for digital assets from 2025 onward.</li>
<li><strong>Forgetting small or off-platform sales.</strong> A DeFi swap or a sale on a foreign exchange still belongs on the form.</li>
<li><strong>Deducting personal-use losses.</strong> Losses on personal items, such as a used car, are not deductible; use code L to zero out a 1099-K loss.</li>
<li><strong>Missing the holding-period day count.</strong> Selling one day too early turns a long-term gain into a short-term one.</li>
</ul>

<h2>Edge cases worth knowing</h2>
<h3>Gifted and inherited assets</h3>
<p>Inherited assets usually take a basis equal to fair market value at the date of death and are long-term. Gifted assets generally carry over the donor's basis, with special rules if the value was lower than basis at the time of the gift.</p>
<h3>Selling business property</h3>
<p>Equipment, vehicles and rental property used in business go on Form 4797, not Form 8949, and any depreciation claimed may be recaptured. If you sold part of your home that you used as an office, the depreciation from Form 8829 affects the result.</p>
<h3>Amending after a missed form</h3>
<p>If a 1099 arrives after you file, add the sale on an <a href="/blog/amended-tax-return-1040-x">amended return using Form 1040-X</a>. Gains may also mean you should raise your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> to avoid an underpayment penalty.</p>

<h2>How capital gains affect the rest of your return</h2>
<p>Form 8949 totals do more than set your capital gains tax. A large gain raises your adjusted gross income, which can phase out credits and deductions and push more of your ordinary income into higher brackets. Gains are not subject to self-employment tax, but they can trigger the 3.8% net investment income tax once modified adjusted gross income passes $200,000 for single filers or $250,000 for married couples filing jointly; those thresholds are not indexed for inflation.</p>
<p>Gains also change how much tax you should be paying during the year. Freelancers already make quarterly payments for business income; a big crypto or stock sale in, say, August should be reflected in the September or January estimated payment, otherwise the safe harbor rules may not protect you. Losses work the other way: net capital losses offset up to $3,000 of ordinary income a year, and the rest carries forward indefinitely until used.</p>
<table><thead><tr><th>Result on Schedule D</th><th>What happens</th></tr></thead><tbody>
<tr><td>Net long-term gain</td><td>Taxed at 0%, 15% or 20%, plus possible 3.8% NIIT</td></tr>
<tr><td>Net short-term gain</td><td>Taxed at ordinary income rates</td></tr>
<tr><td>Net loss up to $3,000</td><td>Deducted against other income</td></tr>
<tr><td>Net loss above $3,000</td><td>Carried forward to future years, keeping its character</td></tr>
</tbody></table>
<p>If you received crypto from clients and its value fell before you sold, the capital loss can offset gains on other investments. It does not reduce the self-employment tax already due on the income, which is one reason many businesses convert crypto payments to dollars quickly.</p>

<h2>Records to keep for every sale</h2>
<p>Basis disputes are won with paperwork. Keep trade confirmations, crypto exchange exports, wallet transaction hashes and, for crypto received as payment, the invoice showing the dollar amount and date. The IRS can generally audit three years back, and longer in some cases, so read <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> before deleting anything. If you accept digital payments, our post on <a href="/blog/how-to-accept-crypto-payments">accepting crypto payments</a> covers how to set this up cleanly.</p>

<p>For income received in crypto or any other form, a dated invoice is the simplest proof of value and basis. Create one in minutes with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download it as a PDF to keep alongside your Form 8949 records.</p>
`,
  },
  {
    slug: "schedule-se",
    title: "Schedule SE: Self-Employment Tax Form Line by Line",
    description:
      "Schedule SE line by line: how to figure self-employment tax, the 92.35% step, 2026 and 2027 wage bases, W-2 wage offsets, and the half-SE-tax deduction.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employment-tax",
      "schedule-c-for-freelancers",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "Who has to file Schedule SE?",
        a: "You must file Schedule SE if your net earnings from self-employment are $400 or more for the year, which is line 4c of the form. Church employees who earn $108.28 or more from an electing church must also file. Each spouse with self-employment income files a separate Schedule SE, even on a joint return. You may also choose to file to use an optional method that helps earn Social Security credits.",
      },
      {
        q: "Why does Schedule SE multiply net profit by 92.35%?",
        a: "The 92.35% factor gives self-employed people an equivalent of the employer's share deduction. An employee does not pay tax on the 7.65% FICA share the employer pays, so the law reduces your net profit by 7.65% before applying the 15.3% rate. The result, line 4a, is your net earnings from self-employment. This is separate from the income tax deduction for half of your self-employment tax.",
      },
      {
        q: "What is the Social Security wage base for 2026 and 2027?",
        a: "The 12.4% Social Security part of self-employment tax applies only up to the annual wage base. It is $184,500 for 2026. The Social Security Administration announced on October 14, 2026 that it will be $192,300 for 2027. Combined W-2 wages and self-employment earnings share one wage base, so wages from a job reduce the room left for self-employment income. The 2.9% Medicare part has no cap.",
      },
      {
        q: "Does having a W-2 job reduce my self-employment tax?",
        a: "It can, but only if your combined wages and self-employment earnings exceed the Social Security wage base. Line 8a of Schedule SE subtracts W-2 Social Security wages from the wage base, so less self-employment income is subject to the 12.4% portion. Below the wage base, a W-2 job does not lower self-employment tax at all. Medicare tax still applies to all self-employment earnings.",
      },
      {
        q: "Where does the Schedule SE total go on Form 1040?",
        a: "The self-employment tax on line 12 goes to Schedule 2 (Form 1040), which adds it to your total tax. Line 13, the deduction for one-half of self-employment tax, goes to Schedule 1 as an adjustment to income, which lowers your adjusted gross income. The deduction reduces income tax but not the self-employment tax itself, and it does not reduce your qualified business income deduction base directly.",
      },
      {
        q: "Can I reduce self-employment tax legally?",
        a: "Yes, mainly by claiming every legitimate business expense on Schedule C, since self-employment tax is figured on net profit. Some owners with steady profits elect S corporation status and pay themselves a reasonable salary, which can reduce the amount subject to payroll taxes. Retirement contributions and the health insurance deduction reduce income tax but not self-employment tax. Discuss structural changes with a tax professional first.",
      },
    ],
    content: `
<p>Schedule SE is the form self-employed people use to calculate self-employment tax, the 15.3% Social Security and Medicare tax on net earnings from your business. You take your net profit from Schedule C (or a partnership K-1), multiply it by 92.35%, apply 12.4% up to the Social Security wage base and 2.9% on everything, and carry the result to your Form 1040. Half of that tax then comes back to you as a deduction.</p>

<p>Our existing guide to <a href="/blog/self-employment-tax">self-employment tax</a> covers the rate and the big picture. This post goes one level deeper and walks through the form itself, line by line, using the 2025 form filed in 2026 and the figures for 2026 and 2027 planning. It is general information, not tax advice; a tax professional can confirm how it applies to you.</p>

<h2>Who must file Schedule SE</h2>
<p>According to the <a href="https://www.irs.gov/instructions/i1040sse" target="_blank" rel="noopener noreferrer">IRS Schedule SE instructions</a>, you file if:</p>
<ul>
<li>Your net earnings from self-employment (line 4c) are $400 or more, or</li>
<li>You had church employee income of $108.28 or more.</li>
</ul>
<p>Married couples filing jointly do not combine businesses on one Schedule SE; each spouse with self-employment income files their own. Spouses who run a business together can elect a qualified joint venture, each filing a separate Schedule C and Schedule SE, which also gives both spouses Social Security credit.</p>

<h2>Schedule SE line by line</h2>
<table><thead><tr><th>Line</th><th>What it is</th><th>Where the number comes from</th></tr></thead><tbody>
<tr><td>1a</td><td>Net farm profit or loss</td><td>Schedule F, or farm partnership K-1</td></tr>
<tr><td>1b</td><td>Conservation Reserve Program payments</td><td>Only if receiving Social Security benefits</td></tr>
<tr><td>2</td><td>Net nonfarm profit or loss</td><td>Schedule C line 31, partnership K-1 box 14 code A</td></tr>
<tr><td>3</td><td>Combine lines 1a, 1b and 2</td><td>Total self-employment profit</td></tr>
<tr><td>4a</td><td>Line 3 x 92.35%</td><td>If line 3 is a loss, enter it as is</td></tr>
<tr><td>4b</td><td>Optional methods</td><td>Part II, if you use them</td></tr>
<tr><td>4c</td><td>Net earnings from self-employment</td><td>Stop here if under $400 (unless church income)</td></tr>
<tr><td>5a / 5b</td><td>Church employee income, x 92.35%</td><td>Form W-2 from an electing church</td></tr>
<tr><td>6</td><td>Add lines 4c and 5b</td><td>Base for Medicare part and Additional Medicare Tax test</td></tr>
<tr><td>7</td><td>Social Security wage base</td><td>Printed on the form for the tax year</td></tr>
<tr><td>8a</td><td>Social Security wages and tips from W-2s</td><td>W-2 boxes 3 and 7</td></tr>
<tr><td>8b</td><td>Unreported tips</td><td>Form 4137</td></tr>
<tr><td>8c</td><td>Wages subject to Social Security on Form 8919</td><td>Misclassified workers</td></tr>
<tr><td>8d</td><td>Add lines 8a to 8c</td><td></td></tr>
<tr><td>9</td><td>Line 7 minus line 8d</td><td>Remaining room under the wage base</td></tr>
<tr><td>10</td><td>Smaller of line 6 or 9, x 12.4%</td><td>Social Security portion</td></tr>
<tr><td>11</td><td>Line 6 x 2.9%</td><td>Medicare portion, no cap</td></tr>
<tr><td>12</td><td>Self-employment tax (10 + 11)</td><td>To Schedule 2 (Form 1040)</td></tr>
<tr><td>13</td><td>Deduction for half of SE tax (line 12 x 50%)</td><td>To Schedule 1 (Form 1040)</td></tr>
</tbody></table>

<h2>The Social Security wage base: 2025, 2026 and 2027</h2>
<table><thead><tr><th>Tax year</th><th>Wage base (line 7)</th><th>Maximum 12.4% portion</th></tr></thead><tbody>
<tr><td>2025</td><td>$176,100</td><td>$21,836.40</td></tr>
<tr><td>2026</td><td>$184,500</td><td>$22,878.00</td></tr>
<tr><td>2027</td><td>$192,300 (announced October 14, 2026)</td><td>$23,845.20</td></tr>
</tbody></table>
<p>The 2027 figure comes from the Social Security Administration's annual announcement, reported by the <a href="https://www.journalofaccountancy.com/news/2026/oct/social-security-wage-base-and-cola-announced-for-2027/" target="_blank" rel="noopener noreferrer">Journal of Accountancy</a>. Above the wage base you still pay the 2.9% Medicare tax, and if line 6 plus your wages exceeds $200,000 single, $250,000 married filing jointly or $125,000 married filing separately, a further 0.9% Additional Medicare Tax applies through Form 8959.</p>

<h2>Worked example: a freelancer with $90,000 profit</h2>
<p>Illustrative figures for tax year 2026. A designer's Schedule C shows gross receipts of $118,000 and expenses of $28,000, so net profit is $90,000.</p>
<ol>
<li>Line 2: $90,000. Line 3: $90,000.</li>
<li>Line 4a: $90,000 x 0.9235 = $83,115. Line 4c and line 6: $83,115.</li>
<li>Line 7: $184,500. No W-2 wages, so line 9 is $184,500.</li>
<li>Line 10: $83,115 x 12.4% = $10,306.26.</li>
<li>Line 11: $83,115 x 2.9% = $2,410.34.</li>
<li>Line 12: self-employment tax of $12,716.60, carried to Schedule 2.</li>
<li>Line 13: deduction of $6,358.30 on Schedule 1, which lowers adjusted gross income.</li>
</ol>

<h3>Same freelancer with a $150,000 W-2 job</h3>
<p>Now assume she also earned $150,000 in Social Security wages from an employer. Line 8a is $150,000, so line 9 is $34,500 ($184,500 minus $150,000). Line 10 becomes $34,500 x 12.4% = $4,278. Line 11 is unchanged at $2,410.34. Total self-employment tax falls to $6,688.34 because the employer's withholding already covered most of the wage base.</p>

<h2>Optional methods (Part II)</h2>
<p>The farm and nonfarm optional methods let people with low or negative earnings report more net earnings, which can secure Social Security credits or increase credits like the earned income credit. For 2025, the nonfarm method requires net nonfarm profits under $7,840 and less than 72.189% of gross nonfarm income, and that you were regularly self-employed (net earnings of $400 or more in two of the prior three years). It can be used for only five years in total. Combined optional earnings cannot exceed $7,240 for 2025. The optional methods increase self-employment tax, so use them only when the benefit is clear.</p>

<h2>How Schedule SE connects to the rest of your return</h2>
<ul>
<li><strong>Schedule C drives everything.</strong> Every legitimate expense you claim on <a href="/blog/schedule-c-for-freelancers">Schedule C</a> lowers line 2 and cuts self-employment tax by about 14.1 cents per dollar on top of income tax savings.</li>
<li><strong>Home office and depreciation count.</strong> Deductions from <a href="/blog/form-8829">Form 8829</a> and <a href="/blog/form-4562">Form 4562</a> reduce net profit before Schedule SE.</li>
<li><strong>Health insurance and retirement do not.</strong> The <a href="/blog/self-employed-health-insurance-deduction">self-employed health insurance deduction</a> and SEP-IRA contributions reduce income tax only.</li>
<li><strong>Estimated taxes include SE tax.</strong> Your <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated payments</a> must cover self-employment tax as well as income tax, or you may owe an <a href="/blog/estimated-tax-penalty">estimated tax penalty</a>.</li>
</ul>

<h2>Records that support your Schedule SE</h2>
<p>Schedule SE has no attachments of its own, but every number on it traces back to Schedule C, so the records that support your profit support your self-employment tax. Keep a numbered invoice for every sale, bank statements that show the deposits, receipts for each expense, and your mileage log if you deduct vehicle costs. If the IRS questions your income, it typically compares deposits with reported gross receipts; invoices that match deposits one for one make that review short. Also keep copies of any Forms 1099-NEC and 1099-K you received and a note reconciling them with your gross receipts, since platform forms can include sales tax, refunds or amounts that belong to another year.</p>

<h2>Common Schedule SE mistakes</h2>
<ul>
<li><strong>Applying 15.3% to full profit.</strong> Skipping the 92.35% step overstates tax by about 7.65%.</li>
<li><strong>Forgetting W-2 wages on line 8a.</strong> High earners with a day job can overpay hundreds or thousands of dollars.</li>
<li><strong>Combining spouses.</strong> Each spouse needs a separate Schedule SE.</li>
<li><strong>Missing the line 13 deduction.</strong> Software handles it, but hand-prepared returns sometimes omit it.</li>
<li><strong>Assuming S corp distributions are exempt automatically.</strong> They are not subject to SE tax, but the IRS expects a reasonable salary first.</li>
<li><strong>Treating 1099 thresholds as filing thresholds.</strong> The $2,000 Form 1099-NEC threshold for 2026 payments is what clients report; the $400 SE threshold applies to you regardless of whether you got a form. See the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold</a> post.</li>
</ul>

<h2>Schedule SE for partners, LLC members and S corporation owners</h2>
<p>Not every business owner starts from Schedule C. How you reach Schedule SE depends on your entity:</p>
<table><thead><tr><th>Entity</th><th>Source of self-employment income</th><th>Files Schedule SE?</th></tr></thead><tbody>
<tr><td>Sole proprietor or single-member LLC</td><td>Schedule C net profit</td><td>Yes</td></tr>
<tr><td>General partner or active LLC member (partnership)</td><td>Schedule K-1 (Form 1065), box 14, which includes guaranteed payments</td><td>Yes</td></tr>
<tr><td>Limited partner</td><td>Generally only guaranteed payments for services</td><td>Sometimes</td></tr>
<tr><td>S corporation shareholder-employee</td><td>W-2 salary (payroll taxes withheld); distributions are not SE income</td><td>No, for the S corp income</td></tr>
<tr><td>Statutory employee</td><td>W-2 with box 13 checked; Schedule C, but no SE tax on that income</td><td>No, for that income</td></tr>
</tbody></table>
<p>The S corporation row is why many profitable freelancers consider electing S status: only the salary is subject to payroll tax. The catch is that the salary must be reasonable for the work done, and the S corporation adds payroll, a separate return and state costs. Our guides to <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a> and <a href="/blog/s-corp-election-form-2553">Form 2553</a> cover the trade-offs.</p>

<h2>Estimating self-employment tax during the year</h2>
<p>Because no employer withholds for you, Schedule SE is effectively a year-end true-up of the tax you should have paid in quarterly estimates. A practical method is to set aside a fixed share of every client payment as it arrives. Using the example above, $12,716.60 of SE tax on $90,000 of profit is about 14.1% of profit, before any income tax. Many freelancers keep 25% to 30% of each payment in a separate savings account to cover both, then adjust once they see their actual bracket. Paying on time each quarter, rather than in April, is what keeps the underpayment penalty away.</p>
<p>Your income tax bracket for 2026 also interacts with the line 13 deduction, which lowers adjusted gross income. If you expect income to jump in 2027, remember the wage base rises to $192,300, so the Social Security portion can grow even when rates stay the same.</p>

<h2>What if your business had a loss?</h2>
<p>If line 3 is a loss, you owe no self-employment tax for that business, and you skip most of the form. A loss from one business can offset profit from another on line 3, but it cannot offset W-2 wages for SE tax purposes. If you have a low or loss year and want to keep earning Social Security credits, review the optional methods with a professional.</p>

<p>Accurate gross receipts on Schedule C start with complete, numbered invoices that match your bank deposits. Create them with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download each invoice as a PDF so your income records are ready when you fill in Schedule SE.</p>
`,
  },
  {
    slug: "form-8829",
    title: "Form 8829: Home Office Deduction Form Guide",
    description:
      "Form 8829 guide for the home office deduction: who files it, business-use percentage, direct vs indirect costs, depreciation, carryovers and an example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "home-office-deduction",
      "schedule-c-for-freelancers",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "Who files Form 8829?",
        a: "Form 8829 is filed by self-employed people who report business income on Schedule C and use the regular (actual expense) method for the home office deduction. Partners and LLC members taxed as partnerships do not use Form 8829; they use a worksheet and claim unreimbursed partner expenses differently. Farmers on Schedule F also use the worksheet in Publication 587. If you use the simplified method, you do not file Form 8829.",
      },
      {
        q: "Should I use Form 8829 or the simplified method?",
        a: "The simplified method gives $5 per square foot for up to 300 square feet, a maximum of $1,500, with no depreciation and no Form 8829. The regular method uses your actual mortgage interest or rent, utilities, insurance, repairs and depreciation multiplied by your business-use percentage. If you rent in a high-cost area or have a large dedicated office, the regular method usually gives a bigger deduction. You can choose each year.",
      },
      {
        q: "Can Form 8829 create a loss?",
        a: "No. The home office deduction is limited to the gross income from the business use of your home minus other business expenses. Form 8829 applies the limit in a set order: mortgage interest and taxes first, then operating expenses, then depreciation. Any amount you cannot deduct this year carries forward to next year on Part IV, as long as you continue to qualify for the deduction.",
      },
      {
        q: "Do I have to depreciate my home on Form 8829?",
        a: "If you own your home and use the regular method, depreciation on the business portion is part of the calculation, and the IRS treats depreciation as allowed or allowable. That means when you sell, you may owe tax on depreciation you were entitled to claim even if you did not claim it. Home office depreciation uses a 39-year recovery period for nonresidential real property.",
      },
      {
        q: "Can W-2 employees use Form 8829?",
        a: "No. Form 8829 is attached to Schedule C, so only self-employed people use it. Unreimbursed employee expenses, including a home office for remote work, are not deductible for federal purposes. If your employer requires you to work from home, ask whether it offers a reimbursement under an accountable plan, which is tax-free to you. Some states have different rules for employee expenses.",
      },
      {
        q: "What happens to Form 8829 depreciation when I sell my house?",
        a: "The home sale exclusion of up to $250,000 ($500,000 for married couples) can still apply, but depreciation claimed after May 6, 1997 is generally taxed as unrecaptured section 1250 gain at a maximum 25% rate. If the office was a separate structure, such as a detached studio, the allocation rules differ. Keep every Form 8829 you file so you can prove the depreciation amount when you sell.",
      },
    ],
    content: `
<p>Form 8829, Expenses for Business Use of Your Home, is the IRS form self-employed people use to calculate the home office deduction under the regular method. It works out what share of your home is used for business, applies that percentage to rent or mortgage interest, utilities, insurance and depreciation, limits the total to your business income, and sends the result to Schedule C. If you take the flat-rate simplified method instead, you skip Form 8829 entirely.</p>

<p>Our <a href="/blog/home-office-deduction">home office deduction guide</a> explains whether you qualify. This post is the practical companion: how to fill out Form 8829 itself, part by part, with a worked example and the mistakes that cost people money years later when they sell. It is general information, not tax advice, so check specifics with a tax professional.</p>

<h2>Who uses Form 8829</h2>
<p>The <a href="https://www.irs.gov/forms-pubs/about-form-8829" target="_blank" rel="noopener noreferrer">IRS describes Form 8829</a> as the form used to figure allowable expenses for business use of your home on Schedule C and any carryover to the next year. You use it if all of these are true:</p>
<ul>
<li>You are a sole proprietor or single-member LLC filing <a href="/blog/schedule-c-for-freelancers">Schedule C</a>.</li>
<li>Part of your home is used regularly and exclusively for business (or qualifies under the daycare or inventory storage exceptions).</li>
<li>It is your principal place of business, or a place where you meet clients, or a separate structure used for business.</li>
<li>You choose the regular method rather than the simplified method.</li>
</ul>
<p>File a separate Form 8829 for each home you use for business. Employees, partners and farmers do not use the form.</p>

<h2>Regular method vs simplified method</h2>
<table><thead><tr><th>Feature</th><th>Regular method (Form 8829)</th><th>Simplified method</th></tr></thead><tbody>
<tr><td>Calculation</td><td>Actual expenses x business-use %</td><td>$5 x square feet, max 300 sq ft</td></tr>
<tr><td>Maximum</td><td>No fixed cap (limited by business income)</td><td>$1,500</td></tr>
<tr><td>Depreciation</td><td>Yes, 39-year recovery</td><td>None (and none to recapture)</td></tr>
<tr><td>Mortgage interest and property tax</td><td>Business share on Form 8829</td><td>Full amount stays on Schedule A if you itemize</td></tr>
<tr><td>Carryover of unused amount</td><td>Yes</td><td>No</td></tr>
<tr><td>Paperwork</td><td>Higher</td><td>Minimal</td></tr>
</tbody></table>
<p>You can switch methods from year to year. If you move from simplified back to regular, depreciation picks up using the tables for the remaining recovery period.</p>

<h2>Form 8829 part by part</h2>
<h3>Part I: Part of your home used for business</h3>
<p>You enter the square footage used regularly and exclusively for business and the total square footage of the home. The division gives your business-use percentage. Daycare providers who use space only part of the time also enter hours used to arrive at a time-space percentage, as explained in <a href="https://www.irs.gov/forms-pubs/about-publication-587" target="_blank" rel="noopener noreferrer">IRS Publication 587</a>.</p>

<h3>Part II: Figure your allowable deduction</h3>
<p>Start with the gross income from the business use of your home, typically the tentative profit from Schedule C before the home office deduction. Then list expenses in two columns:</p>
<ul>
<li><strong>Direct expenses</strong> benefit only the office, such as painting the office or repairing its window. They are deductible at 100%.</li>
<li><strong>Indirect expenses</strong> benefit the whole home, such as rent, mortgage interest, real estate taxes, homeowners insurance, utilities and general repairs. They are multiplied by the business-use percentage.</li>
</ul>
<p>Expenses that only benefit the non-business part of the home, such as landscaping or a kitchen remodel, are not deductible at all.</p>
<p>The form then applies the income limit in order: mortgage interest, real estate taxes and casualty losses first; then operating expenses such as utilities, insurance and repairs; and finally depreciation. Anything that does not fit becomes a carryover.</p>

<h3>Part III: Depreciation of your home</h3>
<p>Homeowners enter the smaller of the home's adjusted basis or fair market value when first used for business, subtract the value of the land (land is never depreciable), and multiply the building's basis by the business-use percentage. The depreciation percentage comes from the 39-year nonresidential real property table, with a mid-month convention in the first year. For a full year, that works out to about 2.564% of the business basis.</p>

<h3>Part IV: Carryover of unallowed expenses</h3>
<p>Operating expenses and depreciation you could not deduct because of the income limit carry forward to the next year's Form 8829. Keep each year's form so the carryover is not lost.</p>

<h2>Step by step: completing Form 8829</h2>
<ol>
<li>Measure the office and the whole home, and photograph the space to show exclusive use.</li>
<li>Gather annual totals: rent or mortgage interest statement (Form 1098), property tax bills, insurance, utilities and repair receipts.</li>
<li>Find your home's purchase price, cost of improvements and land value (from the property tax assessment or closing documents).</li>
<li>Calculate Schedule C tentative profit before the home office deduction.</li>
<li>Complete Parts I to IV, or let tax software do it from those inputs.</li>
<li>Carry the allowable amount to Schedule C line 30.</li>
</ol>

<h2>Worked example</h2>
<p>Illustrative numbers. A freelance bookkeeper owns a 2,000 square foot home and uses a 240 square foot room exclusively as an office, so the business-use percentage is 12%. Her Schedule C tentative profit is $62,000.</p>
<table><thead><tr><th>Expense</th><th>Annual total</th><th>Business share (12%)</th></tr></thead><tbody>
<tr><td>Mortgage interest</td><td>$14,000</td><td>$1,680</td></tr>
<tr><td>Real estate taxes</td><td>$5,000</td><td>$600</td></tr>
<tr><td>Homeowners insurance</td><td>$1,800</td><td>$216</td></tr>
<tr><td>Utilities</td><td>$3,600</td><td>$432</td></tr>
<tr><td>General repairs</td><td>$1,000</td><td>$120</td></tr>
<tr><td>Office repainting (direct)</td><td>$400</td><td>$400</td></tr>
<tr><td>Depreciation: building basis $300,000 x 12% x 2.564%</td><td></td><td>$923</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>$4,371</strong></td></tr>
</tbody></table>
<p>The simplified method would give 240 x $5 = $1,200. The regular method produces a deduction more than three times larger, which also lowers her <a href="/blog/schedule-se">self-employment tax on Schedule SE</a>. The trade-off is $923 a year of depreciation that may be taxed when she sells.</p>
<p>The remaining 88% of her mortgage interest and property taxes stays available on Schedule A if she itemizes. Under the 2025 tax law the state and local tax cap rose to $40,000 for 2025, rising 1% a year through 2029, with a phase-down at higher incomes, so the property-tax interaction is worth checking with software or a preparer.</p>

<h2>Common Form 8829 mistakes</h2>
<ul>
<li><strong>Claiming a shared room.</strong> A dining table you also eat at fails the exclusive-use test.</li>
<li><strong>Including land in the depreciable basis.</strong> Only the building can be depreciated.</li>
<li><strong>Skipping depreciation to "avoid recapture."</strong> The IRS taxes depreciation that was allowable whether or not you claimed it.</li>
<li><strong>Losing carryovers.</strong> Without last year's Form 8829, unallowed expenses quietly disappear.</li>
<li><strong>Deducting 100% of the internet or phone bill here.</strong> Those business-use costs go on Schedule C directly, using a reasonable percentage.</li>
<li><strong>Using Form 8829 as an employee.</strong> W-2 remote workers cannot claim it.</li>
</ul>

<h2>Special cases: daycare, inventory storage and separate structures</h2>
<p>The exclusive-use rule has two important exceptions. Licensed home daycare providers can deduct space used for daycare even if the family uses it at other times; instead of a pure square-footage percentage, they multiply it by the share of hours the space is available for daycare. A provider operating 55 hours a week uses 55 of 168 hours, about 32.7%, times the square-footage percentage. Sellers who store inventory or product samples at home can also deduct the storage area if the home is the only fixed location of the business and the space is used regularly for storage, even if not exclusively.</p>
<p>A detached studio, workshop or garage used regularly and exclusively for business qualifies without having to be the principal place of business. These structures are depreciated as nonresidential property too, and their expenses can be tracked directly rather than as a percentage of the whole home.</p>

<h2>Audit-proofing your home office claim</h2>
<p>Home office claims draw attention mainly when the facts are thin. Strengthen yours with a simple file:</p>
<ul>
<li>A floor plan or sketch with measurements of the office and the home.</li>
<li>Dated photographs showing the space set up as an office and not used for other purposes.</li>
<li>Evidence that it is your principal place of business: client meetings, invoices issued from the address, and a lack of another office.</li>
<li>The utility bills, insurance declarations and mortgage statements behind each line.</li>
<li>Copies of each year's Form 8829 to support carryovers and depreciation.</li>
</ul>
<p>Keep these until at least three years after you file the return for the year you sell the home, since depreciation affects the sale.</p>

<h2>Renters and Form 8829</h2>
<p>Renters often get the best value from the regular method because rent is fully an indirect expense with no depreciation to recapture. A renter paying $2,400 a month with a 15% office would deduct $4,320 of rent alone, plus a share of renters insurance and utilities. Keep the lease and bank records showing rent paid.</p>

<h2>What to do if you move or stop using the office</h2>
<p>If you move during the year, file a separate Form 8829 for each home, using only the months each was used. If you stop using the office, depreciation stops, and any carryover generally cannot be used. When you sell the home, report depreciation recapture, a process our <a href="/blog/form-4562">Form 4562 guide</a> and <a href="/blog/how-to-calculate-depreciation">depreciation calculation guide</a> help you understand. A <a href="/blog/fixed-asset-register">fixed asset register</a> is a simple way to track the office basis year to year.</p>

<p>For more ways to cut your Schedule C profit legitimately, see our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>. And because the home office limit depends on business income, accurate invoicing matters: create professional invoices with our <a href="/invoice-generator">free invoice generator</a>, no sign-up required, and download each as a PDF for your records.</p>
`,
  },
  {
    slug: "form-4562",
    title: "Form 4562: Depreciation and Amortization Guide",
    description:
      "Form 4562 explained: who must file, Section 179 and 100% bonus depreciation for 2025-2026, MACRS, listed property, amortization, and a worked example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "section-179-vs-bonus-depreciation",
      "how-to-calculate-depreciation",
      "amortization-vs-depreciation",
    ],
    faqs: [
      {
        q: "Who must file Form 4562?",
        a: "You file Form 4562 if you claim depreciation on property placed in service during the year, take a Section 179 deduction or carryover, depreciate any vehicle or other listed property regardless of when it was placed in service, deduct a vehicle on a form other than Schedule C, claim any depreciation on a corporate return other than Form 1120-S, or begin amortizing costs during the year. File one Form 4562 for each business or activity.",
      },
      {
        q: "What are the Section 179 limits for 2025 and 2026?",
        a: "For tax years beginning in 2025, the maximum Section 179 deduction is $2,500,000, reduced dollar for dollar once qualifying purchases exceed $4,000,000. For 2026, the inflation-adjusted figures in Rev. Proc. 2025-32 are $2,560,000 and $4,090,000. Section 179 is also limited to your business taxable income, with any excess carried forward. Heavy SUVs have a separate, lower Section 179 cap.",
      },
      {
        q: "Is bonus depreciation 100% again?",
        a: "Yes, for most qualified property acquired after January 19, 2025. The 2025 tax law, P.L. 119-21, permanently restored the 100% special depreciation allowance. Property acquired before January 20, 2025 under the old phase-down rules is limited to 40% for 2025. For the first tax year ending after January 19, 2025, you can elect to take 40% instead of 100% on newly acquired property if spreading deductions suits you better.",
      },
      {
        q: "Do I need Form 4562 every year for the same asset?",
        a: "Not usually for ordinary assets. After the first year, continuing MACRS depreciation on assets placed in service in earlier years goes straight to your business form, such as Schedule C line 13, without a new Form 4562, unless you are filing the form anyway for new assets. Vehicles and other listed property are different: Part V is required every year you claim depreciation or vehicle deductions on them.",
      },
      {
        q: "Should I take Section 179 or bonus depreciation?",
        a: "Both can write off the full cost of qualifying equipment in year one, but they work differently. Section 179 is elective per asset, cannot create a business loss and has dollar limits. Bonus depreciation applies automatically unless you elect out by class, can create a loss, and has no dollar cap. Many small businesses use Section 179 for selected assets and bonus for the rest. State conformity varies, which can change the answer.",
      },
      {
        q: "What happens when I sell an asset I fully expensed?",
        a: "Depreciation and Section 179 deductions reduce your basis, so selling the asset usually creates a gain equal to the sale price if it was fully expensed. For equipment, that gain is generally ordinary income under depreciation recapture, reported on Form 4797. If business use of a Section 179 asset drops to 50% or less before the end of its recovery period, you may also have to recapture part of the deduction.",
      },
    ],
    content: `
<p>Form 4562, Depreciation and Amortization, is where businesses claim depreciation on new assets, elect Section 179 expensing, report vehicles and other listed property, and start amortizing intangible costs. You file it in the year you place business property in service, and every year you claim deductions on a vehicle. With 100% bonus depreciation restored for property acquired after January 19, 2025, the form is again the place where many small businesses write off equipment in full.</p>

<p>If you want the concepts first, our guides to <a href="/blog/how-to-calculate-depreciation">calculating depreciation</a> and <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> cover them. This post focuses on the form: who files it, what goes in each part, current limits, and a worked example. It is general information, not tax advice; confirm your situation with a tax professional.</p>

<h2>Who must file Form 4562</h2>
<p>The <a href="https://www.irs.gov/forms-pubs/about-form-4562" target="_blank" rel="noopener noreferrer">IRS Form 4562 page</a> and its instructions say to file if you are claiming any of the following:</p>
<ul>
<li>Depreciation for property placed in service during the tax year.</li>
<li>A Section 179 expense deduction, including a carryover from a previous year.</li>
<li>Depreciation on any vehicle or other listed property, regardless of when it was placed in service.</li>
<li>A deduction for any vehicle reported on a form other than Schedule C.</li>
<li>Any depreciation on a corporate income tax return other than Form 1120-S.</li>
<li>Amortization of costs that begins during the tax year.</li>
</ul>
<p>File a separate Form 4562 for each business or activity on your return. Employees deducting vehicle expenses use Form 2106 instead.</p>

<h2>Current limits at a glance</h2>
<table><thead><tr><th>Item</th><th>Tax year 2025</th><th>Tax year 2026</th></tr></thead><tbody>
<tr><td>Section 179 maximum deduction</td><td>$2,500,000</td><td>$2,560,000</td></tr>
<tr><td>Section 179 phase-out begins (total purchases)</td><td>$4,000,000</td><td>$4,090,000</td></tr>
<tr><td>Bonus depreciation, property acquired after Jan 19, 2025</td><td>100% (or elect 40%)</td><td>100%</td></tr>
<tr><td>Bonus depreciation, property acquired before Jan 20, 2025</td><td>40%</td><td>Phase-down continues</td></tr>
<tr><td>Section 179 cap for heavy SUVs</td><td>$31,300</td><td>Indexed for inflation; see below</td></tr>
</tbody></table>
<p>The 2025 figures come from the 2025 Form 4562 instructions; the 2026 Section 179 amounts are from Rev. Proc. 2025-32. Heavy vehicles have their own rules, covered in our guide to the <a href="/blog/section-179-vehicle-6000-lbs">6,000 lb vehicle deduction</a>. The 2025 law also created a 100% allowance for qualified production property (certain manufacturing buildings) and new Section 174A, which again lets businesses deduct domestic research and experimental costs currently.</p>

<h2>Form 4562 part by part</h2>
<table><thead><tr><th>Part</th><th>What it covers</th><th>Typical small business use</th></tr></thead><tbody>
<tr><td>Part I</td><td>Section 179 election, business income limit, carryovers</td><td>Expensing a laptop, camera or machinery</td></tr>
<tr><td>Part II</td><td>Special (bonus) depreciation and other depreciation</td><td>100% bonus on equipment</td></tr>
<tr><td>Part III</td><td>MACRS depreciation for assets placed in service this year and earlier years</td><td>Spreading cost over 5, 7 or 39 years</td></tr>
<tr><td>Part IV</td><td>Summary that totals Parts I to III and V</td><td>Amount carried to Schedule C line 13</td></tr>
<tr><td>Part V</td><td>Listed property: vehicles and certain other property</td><td>Business car or truck, mileage and use percentage</td></tr>
<tr><td>Part VI</td><td>Amortization</td><td>Startup costs, goodwill, organization costs</td></tr>
</tbody></table>

<h3>Part I: Section 179</h3>
<p>You list each asset you elect to expense and its cost. The total cannot exceed the dollar limit or your business taxable income; any excess carries forward. The property must be used more than 50% for business. Section 179 is an election, so you choose which assets and how much.</p>

<h3>Parts II and III: bonus and MACRS</h3>
<p>Bonus depreciation applies by default to qualified property with a recovery period of 20 years or less. If you elect out for a class, those assets use regular MACRS in Part III, where you enter the recovery period, convention (half-year, mid-quarter or mid-month) and method. Watch the mid-quarter rule: if more than 40% of the depreciable basis of property placed in service during the year (excluding real property) is placed in service in the last three months, the mid-quarter convention generally applies to all of it.</p>

<h3>Part V: listed property and vehicles</h3>
<p>For each vehicle you report the date placed in service, business-use percentage, cost, method and the mileage breakdown. You also answer questions about written evidence of business use, which is why a <a href="/blog/mileage-log-template">mileage log</a> is essential. Passenger automobiles are subject to annual dollar caps; for a car acquired after September 27, 2017 and placed in service in 2025, the first-year limit with bonus depreciation is $20,200. If you use the standard mileage rate, you do not claim depreciation separately; see <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a>.</p>

<h3>Part VI: amortization</h3>
<p>Intangibles such as business startup costs (up to $5,000 deducted immediately, the rest over 180 months), organization costs and purchased goodwill are amortized here, each with its Code section. Our post on <a href="/blog/amortization-vs-depreciation">amortization vs depreciation</a> explains the difference.</p>

<h2>Step by step: filling out Form 4562</h2>
<ol>
<li>List every asset bought this year with date placed in service, cost and business-use percentage. A <a href="/blog/fixed-asset-register">fixed asset register</a> makes this quick.</li>
<li>Decide per asset: Section 179, bonus depreciation, or regular MACRS.</li>
<li>Complete Part I for Section 179 elections and check the business income limit.</li>
<li>Enter bonus depreciation in Part II and remaining MACRS in Part III.</li>
<li>Complete Part V for any vehicle, every year.</li>
<li>Enter new amortization in Part VI.</li>
<li>Carry the Part IV total to Schedule C line 13 (or the equivalent line on your entity return).</li>
</ol>

<h2>Worked example</h2>
<p>Illustrative figures. A video production freelancer filing Schedule C buys three items in 2026, all after January 19, 2025 and used 100% for business except the car:</p>
<table><thead><tr><th>Asset</th><th>Cost</th><th>Treatment</th><th>2026 deduction</th></tr></thead><tbody>
<tr><td>Camera and lenses</td><td>$12,000</td><td>Section 179 (Part I)</td><td>$12,000</td></tr>
<tr><td>Editing workstation</td><td>$4,500</td><td>100% bonus (Part II)</td><td>$4,500</td></tr>
<tr><td>Office furniture</td><td>$2,000</td><td>Elect out of bonus; 7-year MACRS half-year (Part III)</td><td>$286</td></tr>
<tr><td>Car, 70% business use</td><td>$38,000</td><td>Listed property (Part V), subject to the passenger auto cap</td><td>Limited by annual cap x 70%</td></tr>
</tbody></table>
<p>The first three lines alone deduct $16,786 in year one, which reduces both income tax and the self-employment tax on Schedule SE. Why elect out for the furniture? Some owners prefer to keep deductions for future years when they expect to be in a higher bracket.</p>

<h2>Choosing between the three methods for each asset</h2>
<p>A simple way to decide on Form 4562 is to ask three questions per asset. Is the business profitable enough this year to use a large deduction? If not, Section 179 may be limited and bonus or regular MACRS may be better. Will the asset stay above 50% business use for its whole recovery period? If you are unsure, avoid Section 179, because recapture applies if use drops. Do you expect higher income in later years? If so, slower MACRS depreciation can save deductions for when they are worth more. Whatever you choose, record the reasoning in your files; the elections are made on the return, and changing them later can be difficult.</p>

<h2>Common Form 4562 mistakes</h2>
<ul>
<li><strong>Expensing improvements to a home office as equipment.</strong> Building improvements usually follow real property rules; home office depreciation belongs on <a href="/blog/form-8829">Form 8829</a>.</li>
<li><strong>Taking Section 179 on a loss year.</strong> The business income limit pushes it into a carryover; bonus may be better.</li>
<li><strong>No mileage records.</strong> Without written evidence, vehicle deductions can be disallowed in full.</li>
<li><strong>Ignoring state rules.</strong> Many states do not follow federal bonus depreciation, so your state return may need a separate schedule.</li>
<li><strong>Forgetting recapture.</strong> Selling expensed equipment usually produces ordinary income on Form 4797.</li>
<li><strong>Depreciating supplies.</strong> Items under the de minimis safe harbor (generally $2,500 per invoice or item for businesses without audited financial statements) can be expensed directly if you make the election.</li>
</ul>

<h2>State conformity and the second set of numbers</h2>
<p>Form 4562 is a federal form, but many states attach their own version or require an addback. Several states have long decoupled from federal bonus depreciation, and some cap Section 179 at a lower amount than the federal limit. The practical effect is that a laptop fully expensed federally in 2026 may be depreciated over five years on your state return, so you need to track two basis figures for the same asset. Good tax software does this automatically, but if you prepare returns by hand, keep a column for state depreciation in your asset register.</p>

<h2>Fixing depreciation mistakes</h2>
<p>Errors on Form 4562 fall into two categories, and the fix differs:</p>
<table><thead><tr><th>Mistake</th><th>Typical fix</th></tr></thead><tbody>
<tr><td>Math or posting error in one year</td><td>Amended return for that year</td></tr>
<tr><td>Forgot to make a Section 179 election</td><td>Generally can be made on an amended return for that year</td></tr>
<tr><td>Used an impermissible method for two or more years (for example, never depreciated an asset)</td><td>Often an accounting method change using Form 3115, catching up the missed depreciation in the current year</td></tr>
<tr><td>Claimed bonus on property that did not qualify</td><td>Amend, or method change if repeated; get professional help</td></tr>
</tbody></table>
<p>The method-change route can be valuable: if you own a rental or home office and never claimed depreciation, Form 3115 can let you deduct the missed amount in one year rather than filing several amended returns. It is technical, so this is a job for a tax professional.</p>

<h2>Keep the paper trail</h2>
<p>Depreciation is recalculated when you sell, so keep purchase invoices, receipts and placed-in-service dates for the life of the asset plus the audit period. The rules on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> apply to purchase documents too. If you buy a lot of equipment toward year end, our <a href="/blog/year-end-tax-planning-small-business">year-end tax planning checklist</a> shows how to time purchases.</p>

<p>Bigger deductions are only half the story; steady income is the other. Bill clients promptly with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download each invoice as a PDF so your income and asset records live side by side.</p>
`,
  },
];
