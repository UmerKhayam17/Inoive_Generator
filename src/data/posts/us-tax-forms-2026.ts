import type { PostDraft } from "../blog";

export const US_TAX_FORMS_2026_POSTS: PostDraft[] = [
  {
    slug: "schedule-k-1",
    title: "Schedule K-1 Explained: Partnerships and S Corps",
    description:
      "Schedule K-1 form explained: what partnership and S corp K-1s report, key boxes, due dates, basis, self-employment tax and how to use a K-1 on your 1040.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "partnership-vs-llc",
      "s-corp-vs-llc",
      "how-to-file-taxes-as-an-llc",
    ],
    faqs: [
      {
        q: "When should I receive my Schedule K-1?",
        a: "Partnerships and S corporations must furnish K-1s by the due date of their own return: March 15 for calendar-year entities, which for 2026 returns is Monday, March 15, 2027. If the entity files a Form 7004 extension, the deadline moves to September 15. Trusts and estates issue K-1s with Form 1041, generally due April 15. Late K-1s are common, which is why many partners and shareholders extend their personal returns.",
      },
      {
        q: "Do I pay tax on K-1 income if I did not receive any cash?",
        a: "Yes. Partnerships and S corporations are pass-through entities, so you are taxed on your share of the profit whether or not it was distributed to you. This is often called phantom income. Distributions themselves are generally not taxed again as long as they do not exceed your basis in the business. Many businesses make tax distributions so owners have cash to pay the tax on their share.",
      },
      {
        q: "Do I pay self-employment tax on K-1 income?",
        a: "It depends on the entity. General partners and most LLC members taxed as partnerships pay self-employment tax on their share of ordinary business income and guaranteed payments, reported in box 14 of the partnership K-1. S corporation shareholders do not pay self-employment tax on K-1 income; instead, owners who work in the business must take a reasonable salary through payroll, which is subject to Social Security and Medicare taxes.",
      },
      {
        q: "What if my K-1 is wrong?",
        a: "Contact the partnership or S corporation and ask for a corrected K-1. Do not simply report different numbers on your return, because the IRS receives the entity's copy and will match it to your return. If you must file before a correction arrives, partners can file Form 8082 to notify the IRS of an inconsistent treatment, but get advice first. If a corrected K-1 arrives after you file, you may need to amend.",
      },
      {
        q: "Can I file my taxes without a K-1?",
        a: "You should not file a return that omits K-1 income. If your K-1 has not arrived by April, file Form 4868 to extend your personal return to October 15 and pay an estimate of the tax you owe. Estimating and filing without the K-1, then amending, is possible but often costs more in preparation fees and risks mismatch notices from the IRS.",
      },
      {
        q: "Does a single-member LLC get a K-1?",
        a: "No. A single-member LLC is disregarded by default, so its income goes directly on your Schedule C and there is no partnership return or K-1. A K-1 is issued only if the LLC has two or more members and is taxed as a partnership, or if it elected S corporation status. An LLC taxed as a C corporation pays its own tax and issues Form 1099-DIV for dividends instead.",
      },
    ],
    content: `
<p>A Schedule K-1 is the form a partnership, S corporation, trust or estate gives each owner or beneficiary to report their share of the entity's income, deductions and credits. The business itself generally pays no federal income tax; you report the numbers from your K-1 on your own Form 1040, whether or not you received any cash. This guide explains the K-1 form for partnerships and S corps, the boxes that matter most, deadlines, basis rules and a worked example.</p>

<p>This is general information, not tax advice; pass-through taxation has many special rules, so check your situation with a tax professional.</p>

<h2>What is a K-1 form?</h2>
<p>There are three main versions of Schedule K-1, each attached to a different entity return:</p>
<table><thead><tr><th>K-1 version</th><th>Issued by</th><th>Entity return</th><th>Calendar-year due date (2026 returns)</th></tr></thead><tbody>
<tr><td>Schedule K-1 (Form 1065)</td><td>Partnerships and multi-member LLCs</td><td>Form 1065</td><td>March 15, 2027</td></tr>
<tr><td>Schedule K-1 (Form 1120-S)</td><td>S corporations</td><td>Form 1120-S</td><td>March 15, 2027</td></tr>
<tr><td>Schedule K-1 (Form 1041)</td><td>Trusts and estates</td><td>Form 1041</td><td>April 15, 2027</td></tr>
</tbody></table>
<p>All three follow the same idea: the entity calculates its income, splits it among owners according to ownership or the partnership agreement, and reports each person's share. A Form 7004 extension pushes partnership and S corporation deadlines to September 15.</p>
<p>If you are still choosing a structure, our comparisons of <a href="/blog/partnership-vs-llc">partnership vs LLC</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> explain when you end up receiving a K-1.</p>

<h2>Key boxes on a partnership K-1 (Form 1065)</h2>
<p>Part I identifies the partnership, Part II identifies you and shows your ownership percentage and capital account, and Part III contains the numbers you report.</p>
<table><thead><tr><th>Box</th><th>What it shows</th><th>Where it usually goes</th></tr></thead><tbody>
<tr><td>1</td><td>Ordinary business income (loss)</td><td>Schedule E, Part II</td></tr>
<tr><td>2</td><td>Net rental real estate income (loss)</td><td>Schedule E, subject to passive rules</td></tr>
<tr><td>4</td><td>Guaranteed payments (for services or capital)</td><td>Schedule E; also self-employment income if for services</td></tr>
<tr><td>5, 6</td><td>Interest and dividends</td><td>Schedule B / Form 1040</td></tr>
<tr><td>8, 9</td><td>Capital gains</td><td>Schedule D</td></tr>
<tr><td>12, 13</td><td>Section 179 and other deductions</td><td>Various, by code</td></tr>
<tr><td>14</td><td>Self-employment earnings</td><td>Schedule SE</td></tr>
<tr><td>19</td><td>Distributions</td><td>Not taxable unless above basis</td></tr>
<tr><td>20</td><td>Other information, including QBI data</td><td>Form 8995 or 8995-A</td></tr>
</tbody></table>

<h2>Key boxes on an S corp K-1 (Form 1120-S)</h2>
<p>The S corporation K-1 looks similar but has a few important differences:</p>
<ul>
<li><strong>Box 1</strong> reports ordinary business income, which goes on Schedule E.</li>
<li><strong>There is no self-employment box.</strong> S corp profit is not subject to self-employment tax; your salary from the S corp is reported on a W-2 instead.</li>
<li><strong>Box 16</strong> covers items affecting your stock basis, with code D showing distributions.</li>
<li><strong>Box 17</strong> includes QBI information used for the <a href="/blog/qbi-deduction-section-199a">qualified business income deduction</a>.</li>
</ul>
<p>Because S corp owners can split income between salary and distributions, the salary has to be reasonable for the work done. Our new guide to <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a> covers how to set it.</p>

<h2>How K-1 income is taxed</h2>
<h3>You are taxed on your share, not on cash received</h3>
<p>If a partnership earns $100,000 and you own 50%, your K-1 shows $50,000 of income even if the partnership kept all of it in the bank. This is the most common surprise for new partners. Many partnership agreements require tax distributions for this reason.</p>
<h3>Basis limits losses and tax-free distributions</h3>
<p>Your basis starts with what you invested and rises with your share of income; it falls with distributions and losses. You can deduct losses only up to your basis (and then at-risk and passive activity rules apply), and distributions above basis are taxed as capital gain. S corporation shareholders who claim losses, receive distributions or sell stock generally must attach Form 7203 to show their basis calculation.</p>
<h3>Self-employment tax</h3>
<p>Partners usually pay 15.3% <a href="/blog/self-employment-tax">self-employment tax</a> on box 14 earnings. S corp shareholders pay payroll taxes only on wages. This difference is the main reason profitable LLCs consider an S corp election; see <a href="/blog/s-corp-election-form-2553">Form 2553 and the S corp election</a>.</p>

<h2>Worked example: two partners in a design studio</h2>
<p>Ana and Ben own a design LLC taxed as a partnership, 50/50. Ana receives guaranteed payments of $40,000 for managing the studio. Figures are illustrative.</p>
<table><thead><tr><th>Item</th><th>Partnership total</th><th>Ana's K-1</th><th>Ben's K-1</th></tr></thead><tbody>
<tr><td>Revenue from client invoices</td><td>$310,000</td><td></td><td></td></tr>
<tr><td>Expenses (rent, software, contractors)</td><td>$150,000</td><td></td><td></td></tr>
<tr><td>Guaranteed payment to Ana (deducted)</td><td>$40,000</td><td>Box 4: $40,000</td><td></td></tr>
<tr><td>Ordinary business income</td><td>$120,000</td><td>Box 1: $60,000</td><td>Box 1: $60,000</td></tr>
<tr><td>Self-employment earnings</td><td></td><td>Box 14: $100,000</td><td>Box 14: $60,000</td></tr>
<tr><td>Cash distributions</td><td>$80,000</td><td>Box 19: $40,000</td><td>Box 19: $40,000</td></tr>
</tbody></table>
<p>Ana reports $100,000 of income ($60,000 plus the $40,000 guaranteed payment) and pays self-employment tax on it, although she received only $80,000 in cash ($40,000 guaranteed payment plus $40,000 distribution). Ben reports $60,000 although he received $40,000. The $40,000 the partnership retained still increases both partners' basis, so it can later be distributed tax-free.</p>

<h2>Step by step: using your K-1 on your return</h2>
<ol>
<li><strong>Check the details.</strong> Confirm your name, taxpayer ID, ownership percentage and whether the K-1 is marked final or amended.</li>
<li><strong>Read the codes.</strong> Many boxes use letter codes; the partner or shareholder instructions explain each one.</li>
<li><strong>Enter income on Schedule E</strong> and other amounts on the forms the instructions specify.</li>
<li><strong>Calculate self-employment tax</strong> on partnership box 14 amounts using Schedule SE.</li>
<li><strong>Track basis</strong> each year, especially if you receive distributions or losses.</li>
<li><strong>Check state K-1s.</strong> You may need to file in states where the business operates, and some entities pay a pass-through entity tax on your behalf.</li>
<li><strong>Adjust estimated taxes.</strong> K-1 income has no withholding; see our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
</ol>

<h2>What to do if your K-1 is late</h2>
<p>Late K-1s are routine, especially from investment partnerships and businesses that extend their own returns to September 15. If April is approaching and you do not have yours:</p>
<ol>
<li><strong>Ask the business for an estimate.</strong> Most managing partners or S corp bookkeepers can give a rough figure for your share of income well before the final K-1 is ready.</li>
<li><strong>File Form 4868</strong> by April 15 to extend your personal return to October 15.</li>
<li><strong>Pay an estimate</strong> of the tax on your expected K-1 income with the extension, because the extension does not delay payment.</li>
<li><strong>Review the final K-1</strong> when it arrives and compare it with the estimate before filing.</li>
</ol>
<p>If the K-1 changes after you file, for example because the partnership amends its return, you may receive a corrected K-1 marked as amended. Larger partnerships under the centralized audit regime may instead push adjustments to partners in a later year using a statement, so read any letter that comes with a corrected form carefully before amending.</p>

<h2>K-1s from trusts, estates and investments</h2>
<p>If you inherit from an estate or are the beneficiary of a trust, you may receive a Schedule K-1 (Form 1041). It reports your share of the trust or estate's distributable income, such as interest, dividends, capital gains in some cases and rental income. The trust or estate deducts what it distributes, and you pay the tax instead. These K-1s rarely involve self-employment tax.</p>
<p>Investors in publicly traded partnerships, such as many energy and commodity funds, also receive partnership K-1s. These can be long, often arrive late and may require state filings in states where the partnership operates. If you hold such investments in a regular brokerage account, budget for extra preparation time. Holding them in an IRA avoids most K-1 complexity, although unrelated business taxable income rules can still apply.</p>

<h2>Penalties for late or missing K-1s</h2>
<p>For 2025 returns, the IRS penalty for a late partnership or S corporation return is $255 per partner or shareholder for each month or part of a month it is late, up to 12 months, according to the <a href="https://www.irs.gov/instructions/i1120s" target="_blank" rel="noopener noreferrer">Form 1120-S instructions</a>. A separate penalty, $340 per K-1 for 2025, can apply when K-1s are not furnished on time or are incorrect. These amounts are inflation-adjusted each year. A three-partner LLC filing two months late could face $1,530 in penalties before any K-1 penalties.</p>

<h2>Common K-1 mistakes</h2>
<ul>
<li><strong>Filing before the K-1 arrives.</strong> Use an extension instead; see our guide to <a href="/blog/form-4868">Form 4868</a>.</li>
<li><strong>Treating distributions as income.</strong> Distributions are reported separately and are usually not taxable.</li>
<li><strong>Forgetting self-employment tax</strong> on partnership income.</li>
<li><strong>Not tracking basis,</strong> which can lead to disallowed losses or unexpected gains years later.</li>
<li><strong>Mixing business and personal invoicing.</strong> If you invoice clients personally for work that belongs to the partnership, your K-1 income and Schedule C income will overlap. Invoice in the business's name, as explained in our guide to <a href="/blog/how-to-invoice-as-an-llc">invoicing as an LLC</a>.</li>
</ul>

<h2>Where invoices fit in</h2>
<p>The income on every K-1 starts with the business's revenue, and for service partnerships that is the sum of the invoices paid during the year (or issued, for accrual-basis firms). Clean, numbered invoices make the entity's books, the K-1s and any later IRS questions much easier. Our guide to <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a> shows how the pieces fit together for each entity type.</p>

<p>Whatever your structure, accurate K-1s start with accurate invoices. Bill clients in your business's name with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, and every invoice downloads as a professional PDF.</p>
`,
  },
  {
    slug: "form-1120-vs-1120-s",
    title: "Form 1120 vs 1120-S: Which Corporate Return You File",
    description:
      "Form 1120 vs 1120-S: which corporate tax return your business files, the 21% C corp tax vs pass-through, due dates, penalties and a worked tax comparison.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "s-corp-vs-c-corp",
      "s-corp-election-form-2553",
      "llc-vs-corporation",
    ],
    faqs: [
      {
        q: "Who files Form 1120?",
        a: "Form 1120 is filed by domestic C corporations, including LLCs that elected to be taxed as corporations and have not elected S status. The corporation pays federal income tax itself at a flat 21% rate on taxable income. Dividends paid to shareholders are then taxed again on their personal returns. A calendar-year C corporation's 2026 Form 1120 is due April 15, 2027, or October 15, 2027 with a Form 7004 extension.",
      },
      {
        q: "Who files Form 1120-S?",
        a: "Form 1120-S is filed by corporations and LLCs that have a valid S corporation election on Form 2553. The S corporation generally pays no federal income tax; profit passes through to shareholders on Schedule K-1. A calendar-year S corporation's 2026 return is due March 15, 2027, and a Form 7004 extension moves it to September 15, 2027. Shareholder K-1s are due at the same time.",
      },
      {
        q: "Can an LLC file Form 1120-S?",
        a: "Yes, if it elects S corporation status. An LLC files Form 2553, which treats it as having elected corporate classification at the same time, so a separate Form 8832 is usually not needed. After that, it files Form 1120-S each year instead of Schedule C or Form 1065. The LLC remains an LLC under state law; only its federal tax treatment changes.",
      },
      {
        q: "What happens if I file the wrong corporate return?",
        a: "If the IRS has no record of a valid S election, it will expect Form 1120, and a Form 1120-S filed instead may be rejected or trigger notices. This often happens when a Form 2553 was never filed or was filed late. Check your IRS acceptance letter (CP261) for the S election. If the election was late, relief may be available under Rev. Proc. 2013-30, often by attaching a statement to the Form 1120-S.",
      },
      {
        q: "Is a C corporation ever better than an S corporation?",
        a: "Sometimes. C corporations can have unlimited shareholders, foreign owners, multiple classes of stock and venture capital investors, none of which S corps allow. Profit kept in the business is taxed at a flat 21%, which can be lower than an owner's personal rate. Qualified small business stock under Section 1202 can make gains on a sale tax-free. For owners who take most profit out each year, an S corp usually costs less in total tax.",
      },
      {
        q: "Do S corporations ever pay tax on Form 1120-S?",
        a: "Usually not, but there are exceptions. An S corporation that used to be a C corporation can owe built-in gains tax on appreciated assets sold within five years of conversion, and tax on excess passive investment income if it has old C corporation earnings. Some states tax S corporations at the entity level, and many states let S corporations elect a pass-through entity tax that can help owners with the SALT cap.",
      },
    ],
    content: `
<p>Form 1120 is the income tax return for C corporations, which pay a flat 21% federal tax themselves; Form 1120-S is the return for S corporations, which generally pay no federal income tax and pass profit through to shareholders on Schedule K-1. Which one you file depends on whether your corporation or LLC has a valid S election, not on the company's size or name. This guide compares Form 1120 vs 1120-S on eligibility, tax, deadlines and penalties, with a worked example.</p>

<p>This is general information, not tax advice. Entity choice has long-term consequences, so review yours with a CPA.</p>

<h2>Form 1120 vs 1120-S at a glance</h2>
<table><thead><tr><th></th><th>Form 1120 (C corporation)</th><th>Form 1120-S (S corporation)</th></tr></thead><tbody>
<tr><td>Who files</td><td>Corporations and LLCs taxed as corporations without an S election</td><td>Corporations and LLCs with a valid Form 2553 election</td></tr>
<tr><td>Federal income tax</td><td>Flat 21% paid by the corporation</td><td>Generally none at entity level; owners pay on their share</td></tr>
<tr><td>Owner tax on profit</td><td>Again when paid as dividends (double taxation)</td><td>Once, on personal return, whether or not distributed</td></tr>
<tr><td>Owner forms</td><td>W-2 for salary, 1099-DIV for dividends</td><td>W-2 for salary, Schedule K-1 for share of profit</td></tr>
<tr><td>Calendar-year due date (2026 return)</td><td>April 15, 2027</td><td>March 15, 2027</td></tr>
<tr><td>Extended due date (Form 7004)</td><td>October 15, 2027</td><td>September 15, 2027</td></tr>
<tr><td>Shareholder limits</td><td>None</td><td>Up to 100 shareholders, generally US individuals, one class of stock</td></tr>
<tr><td>QBI deduction for owners</td><td>Not available</td><td>Available on qualifying pass-through income</td></tr>
<tr><td>Retained earnings</td><td>Taxed at 21%</td><td>Taxed to owners at personal rates</td></tr>
</tbody></table>
<p>Our broader comparison of <a href="/blog/s-corp-vs-c-corp">S corp vs C corp</a> covers non-tax differences such as fundraising and stock options.</p>

<h2>Who files Form 1120</h2>
<p>Every domestic corporation files Form 1120 unless it qualifies for and elects another return. That includes:</p>
<ul>
<li>Corporations formed under state law that never filed Form 2553.</li>
<li>LLCs that filed Form 8832 to be taxed as a corporation, without an S election.</li>
<li>Former S corporations whose election terminated, for example because they issued a second class of stock or took on an ineligible shareholder.</li>
</ul>
<p>The C corporation calculates taxable income on Form 1120 and pays 21% on it. If it pays dividends, shareholders pay qualified dividend rates (generally 0%, 15% or 20%) plus the 3.8% net investment income tax where it applies. Corporations that expect to owe $500 or more must also make quarterly estimated payments.</p>

<h2>Who files Form 1120-S</h2>
<p>To file Form 1120-S, the business must be a domestic corporation or LLC with a valid S election and meet these rules:</p>
<ul>
<li>No more than 100 shareholders (family members can be treated as one).</li>
<li>Shareholders are generally US citizens or residents, certain trusts and estates; no partnerships, corporations or nonresident aliens.</li>
<li>Only one class of stock (differences in voting rights are allowed).</li>
<li>Not an ineligible corporation, such as certain banks and insurance companies.</li>
</ul>
<p>The election is made on Form 2553, generally no more than two months and 15 days after the start of the tax year it is to take effect. Our guide to <a href="/blog/s-corp-election-form-2553">Form 2553 and the S corp election</a> walks through it, and the new guide to <a href="/blog/late-s-corp-election-relief">late S corp election relief</a> covers what to do if you missed the deadline.</p>

<h2>How the tax works on each return</h2>
<h3>Form 1120: two layers</h3>
<p>Profit is taxed at 21% inside the corporation. Whatever is paid out as dividends is taxed again to the shareholder. Salary paid to owner-employees is deductible by the corporation, so it is taxed once, but it carries payroll taxes.</p>
<h3>Form 1120-S: one layer</h3>
<p>The S corporation reports income and deductions on Form 1120-S, then allocates each shareholder's share on <a href="/blog/schedule-k-1">Schedule K-1</a>. Shareholders pay income tax on that share at their own rates, with the potential benefit of the 20% <a href="/blog/qbi-deduction-section-199a">QBI deduction</a>. Profit passed through on the K-1 is not subject to self-employment tax, but owners who work in the business must take a <a href="/blog/s-corp-reasonable-salary">reasonable salary</a> through payroll.</p>

<h2>Worked example: $200,000 of profit, two ways</h2>
<p>Jordan owns a consulting company that earns $200,000 before paying Jordan. In both cases Jordan takes a $90,000 salary and takes the rest out of the business. Jordan is single with no other income. Figures are approximate and illustrative, using 2026 federal rates and ignoring state tax.</p>
<table><thead><tr><th>Step</th><th>C corporation (Form 1120)</th><th>S corporation (Form 1120-S)</th></tr></thead><tbody>
<tr><td>Profit before owner pay</td><td>$200,000</td><td>$200,000</td></tr>
<tr><td>Salary plus employer payroll taxes</td><td>$96,885</td><td>$96,885</td></tr>
<tr><td>Remaining profit</td><td>$103,115</td><td>$103,115</td></tr>
<tr><td>Entity income tax</td><td>21% = about $21,650</td><td>$0</td></tr>
<tr><td>Paid to Jordan beyond salary</td><td>Dividend of about $81,450</td><td>Distribution of $103,115 (taxed via K-1)</td></tr>
<tr><td>Jordan's personal income tax</td><td>About $23,000 (wages plus dividends at 15%)</td><td>About $30,000 (wages plus K-1 income, after QBI deduction)</td></tr>
<tr><td>Total payroll taxes (both halves)</td><td>About $13,770</td><td>About $13,770</td></tr>
<tr><td>Total federal tax</td><td>About $58,600</td><td>About $43,800</td></tr>
</tbody></table>
<p>In this example the S corporation saves around $14,800 a year because profit is taxed once and, assuming Jordan qualifies for the full QBI deduction, a fifth of the K-1 income is deducted. The C corporation looks better only if Jordan leaves most profit inside the company for years, plans a sale that qualifies for the Section 1202 exclusion, or needs investors that an S corp cannot accept.</p>

<h2>What each return reports</h2>
<p>The two returns look similar on page one. Both report gross receipts, cost of goods sold, officer compensation, salaries, rent, taxes, interest, depreciation and other deductions. The differences show up after that:</p>
<ul>
<li><strong>Form 1120</strong> calculates taxable income, applies special deductions such as the dividends-received deduction, computes tax at 21%, and reconciles estimated payments and credits. Schedule M-1 or M-3 reconciles book income to taxable income, and Schedule L shows the balance sheet.</li>
<li><strong>Form 1120-S</strong> calculates ordinary business income, then lists separately stated items on Schedule K (such as charitable contributions, Section 179 and capital gains) that pass through to shareholders on their K-1s. It also tracks the accumulated adjustments account, which matters for how distributions are taxed.</li>
</ul>
<p>Both returns include a balance sheet in many cases, so your books need to be in good shape: bank accounts reconciled, receivables and payables recorded, and owner draws separated from expenses. Our <a href="/blog/month-end-close-checklist">month-end close checklist</a> keeps that work manageable through the year.</p>

<h2>Switching between C and S status</h2>
<p>Businesses do change status. A C corporation can elect S status with Form 2553 if it meets the eligibility rules, but it may then owe built-in gains tax on appreciated assets sold within five years, and any old C corporation earnings can create tax on excess passive income or taxable dividends later. An S corporation can revoke its election with the consent of shareholders holding more than half the shares, or lose it by breaking an eligibility rule; after a termination it generally cannot re-elect S status for five years without IRS consent. Because of these traps, plan a switch with an adviser, ideally effective at the start of a tax year so the business does not need to split the year between two returns.</p>

<h2>Deadlines and late-filing penalties</h2>
<p>For calendar-year businesses, the 2026 Form 1120-S is due March 15, 2027 and the 2026 Form 1120 is due April 15, 2027. Both can be extended six months with Form 7004, but a C corporation's extension does not extend the time to pay. You can confirm these dates in <a href="https://www.irs.gov/publications/p509" target="_blank" rel="noopener noreferrer">IRS Publication 509, Tax Calendars</a> and our <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a> list.</p>
<ul>
<li><strong>Form 1120-S late:</strong> for 2025 returns, $255 per shareholder per month or part month, up to 12 months, even if no tax is due, according to the <a href="https://www.irs.gov/instructions/i1120s" target="_blank" rel="noopener noreferrer">Form 1120-S instructions</a>. The amount is adjusted for inflation each year.</li>
<li><strong>Form 1120 late:</strong> 5% of unpaid tax per month, up to 25%, with a minimum penalty for returns more than 60 days late, plus late-payment penalties and interest.</li>
</ul>
<p>See our guide to <a href="/blog/business-tax-extension">business tax extensions</a> for how Form 7004 works.</p>

<h2>Step by step: confirming which return to file</h2>
<ol>
<li><strong>Check your formation documents.</strong> Corporation or LLC?</li>
<li><strong>Look for IRS election letters.</strong> A CP261 notice confirms an accepted S election; an acceptance letter for Form 8832 confirms corporate classification.</li>
<li><strong>If you are an LLC with no election:</strong> you file Schedule C (single member) or Form 1065 (multi-member), not either corporate return. See <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>.</li>
<li><strong>If you are a corporation with an S election:</strong> file Form 1120-S and issue K-1s.</li>
<li><strong>Otherwise:</strong> file Form 1120.</li>
<li><strong>Check eligibility each year.</strong> A new shareholder, trust or class of stock can end an S election without you noticing.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Assuming an LLC files Form 1120-S automatically.</strong> It needs an accepted Form 2553.</li>
<li><strong>Skipping owner salary in an S corp.</strong> Taking only distributions invites IRS reclassification.</li>
<li><strong>Paying personal expenses from the corporation.</strong> In a C corp these can become constructive dividends; in either type they muddy the books.</li>
<li><strong>Invoicing clients in the owner's name.</strong> Income belongs on the corporate return only if the corporation is the one billing. Use the company's legal name and EIN on invoices; our guide to the <a href="/blog/tax-id-on-invoice">tax ID on invoices</a> explains what to show.</li>
<li><strong>Ignoring state rules.</strong> Some states do not recognize S status fully or charge minimum franchise taxes, so check your state's treatment before electing.</li>
</ul>

<p>Whichever return your company files, it starts with revenue you can document. Create invoices in your corporation's name with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, and every invoice downloads as a clean PDF for your records.</p>
`,
  },
  {
    slug: "form-4868",
    title: "Form 4868: How to File a Personal Tax Extension",
    description:
      "Form 4868 explained: how to file a personal tax extension to October 15, 2027, estimate what you owe, avoid penalties, and what the extension does not cover.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "business-tax-extension",
      "business-tax-deadlines-2027",
      "how-to-pay-irs-online",
    ],
    faqs: [
      {
        q: "Does Form 4868 give me more time to pay my taxes?",
        a: "No. Form 4868 extends only the time to file your return, from April 15 to October 15. Any tax you owe is still due by the original deadline. If you pay late, you owe interest on the unpaid amount from April 15 and usually a failure-to-pay penalty of 0.5% per month. Filing the extension does, however, protect you from the much larger failure-to-file penalty of 5% per month.",
      },
      {
        q: "Do I need a reason to file Form 4868?",
        a: "No. The extension is automatic. You do not have to explain why you need more time, and the IRS does not send an approval unless you file electronically, in which case you get an acknowledgment. You just need to file the form, or make an electronic payment marked as an extension, by the regular due date, which for 2026 returns is April 15, 2027.",
      },
      {
        q: "Can I file Form 4868 electronically?",
        a: "Yes. You can e-file Form 4868 through most tax software or IRS Free File, which accepts extension requests from all taxpayers regardless of income. You can also get an extension without filing the form by paying all or part of your estimated balance through IRS Direct Pay, the Electronic Federal Tax Payment System or a debit or credit card and selecting extension as the reason for payment.",
      },
      {
        q: "Does Form 4868 extend my state tax return?",
        a: "Not necessarily. Each state has its own extension rules. Some states automatically grant an extension if you have a federal extension, some grant automatic extensions without any form, and others require their own extension form or payment. As with federal rules, a state extension almost never extends the time to pay, so estimate and pay any state balance by the state's original deadline.",
      },
      {
        q: "What if I live outside the United States?",
        a: "US citizens and resident aliens whose tax home and residence are outside the United States, and those serving in the military outside the US, get an automatic two-month extension to June 15 to file and pay, though interest still runs from April 15. You can then file Form 4868 by June 15 to get an additional four months, to October 15. Check the box on Form 4868 that indicates you are out of the country.",
      },
      {
        q: "Does a tax extension increase my audit risk?",
        a: "There is no evidence that filing an extension by itself increases audit risk. Millions of taxpayers file extensions every year, often because they are waiting on K-1s, corrected 1099s or brokerage statements. Filing an accurate return later is generally better than filing an inaccurate return on time and amending it. Just make sure you pay your estimated balance by April 15.",
      },
    ],
    content: `
<p>Form 4868 gives individuals an automatic six-month extension to file their federal income tax return, moving the deadline for 2026 returns from April 15, 2027 to October 15, 2027. It does not extend the time to pay: you still need to estimate what you owe and pay it by April 15 to avoid penalties and interest. For freelancers, sole proprietors and partners waiting on K-1s, it is often the most sensible way to get an accurate return filed. This guide covers how to file Form 4868, how to estimate your balance and the penalties it does and does not prevent.</p>

<p>This is general information, not tax advice; check with a tax professional for your situation.</p>

<h2>What Form 4868 does and does not extend</h2>
<table><thead><tr><th>Item</th><th>Extended by Form 4868?</th><th>Notes</th></tr></thead><tbody>
<tr><td>Filing Form 1040 (including Schedule C, E, SE)</td><td>Yes, to October 15, 2027</td><td>Six months from April 15</td></tr>
<tr><td>Paying income tax owed</td><td>No</td><td>Due April 15, 2027</td></tr>
<tr><td>2027 first-quarter estimated tax</td><td>No</td><td>Also due April 15, 2027</td></tr>
<tr><td>IRA and HSA contributions for 2026</td><td>No</td><td>Deadline stays April 15</td></tr>
<tr><td>SEP IRA employer contributions</td><td>Yes</td><td>Can be made up to the extended due date</td></tr>
<tr><td>Partnership or S corp returns</td><td>No</td><td>Use Form 7004 instead</td></tr>
<tr><td>Forms 1099 you must send</td><td>No</td><td>Separate deadlines</td></tr>
<tr><td>State return</td><td>Depends on the state</td><td>Check state rules</td></tr>
</tbody></table>
<p>Business entity extensions work differently; our guide to <a href="/blog/business-tax-extension">business tax extensions</a> covers Form 7004.</p>

<h2>How to file Form 4868: three methods</h2>
<h3>1. E-file the form</h3>
<p>Most tax software and IRS Free File let you e-file Form 4868 for free. You receive an acknowledgment that the IRS accepted it, which is useful proof.</p>
<h3>2. Pay electronically and select extension</h3>
<p>If you pay all or part of your estimated balance through IRS Direct Pay, EFTPS or a card processor and indicate the payment is for an extension, the IRS automatically treats it as an extension request; you do not need to file the form. Our guide to <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a> walks through each payment option.</p>
<h3>3. Mail a paper form</h3>
<p>Complete the paper <a href="https://www.irs.gov/pub/irs-pdf/f4868.pdf" target="_blank" rel="noopener noreferrer">Form 4868</a> and mail it to the address in the instructions for your state, postmarked by April 15, 2027. Keep proof of mailing.</p>

<h2>Filling out Form 4868 line by line</h2>
<ol>
<li><strong>Lines 1-3:</strong> name, address and Social Security numbers (yours and your spouse's if filing jointly).</li>
<li><strong>Line 4:</strong> estimate of your total 2026 tax liability.</li>
<li><strong>Line 5:</strong> total 2026 payments already made: withholding, estimated payments and credits.</li>
<li><strong>Line 6:</strong> balance due (line 4 minus line 5).</li>
<li><strong>Line 7:</strong> amount you are paying with the extension.</li>
<li><strong>Line 8:</strong> check if you are out of the country.</li>
<li><strong>Line 9:</strong> check if you file Form 1040-NR and did not receive wages subject to withholding.</li>
</ol>
<p>The estimate on line 4 must be a reasonable good-faith figure. An extension can be treated as invalid if the estimate is not reasonable, so do the math rather than entering zero.</p>

<h2>How to estimate what you owe as a freelancer</h2>
<p>Self-employed people have the hardest time estimating because nothing is withheld. A practical approach:</p>
<ol>
<li><strong>Total your 2026 income.</strong> Add up all invoices paid during 2026 (for cash-basis filers), plus any 1099-NEC, 1099-K and K-1 amounts. Your invoice records are the most complete source; 1099s may not cover everything.</li>
<li><strong>Subtract business expenses</strong> to estimate net profit for Schedule C; see our <a href="/blog/schedule-c-for-freelancers">Schedule C guide</a>.</li>
<li><strong>Calculate self-employment tax</strong> at roughly 15.3% of 92.35% of net profit.</li>
<li><strong>Estimate income tax</strong> using the <a href="/blog/federal-tax-brackets-2026">2026 federal tax brackets</a>, after half of self-employment tax, the standard deduction and the QBI deduction.</li>
<li><strong>Subtract what you paid</strong> in quarterly estimates and any withholding.</li>
<li><strong>Pay the difference, plus a cushion,</strong> by April 15. Overpaying slightly is refunded or applied to next year; underpaying costs interest and penalties.</li>
</ol>

<h2>Penalties: why the extension still matters</h2>
<table><thead><tr><th>Penalty</th><th>Rate</th><th>Avoided by Form 4868?</th></tr></thead><tbody>
<tr><td>Failure to file</td><td>5% of unpaid tax per month or part month, up to 25%</td><td>Yes, if you file by October 15</td></tr>
<tr><td>Minimum late-filing penalty (over 60 days late)</td><td>Lesser of a fixed amount ($525 for returns required to be filed in 2026) or 100% of tax owed</td><td>Yes, if you file by October 15</td></tr>
<tr><td>Failure to pay</td><td>0.5% of unpaid tax per month, up to 25%</td><td>No, unless you paid at least 90% of your tax by April 15 and pay the rest with the return</td></tr>
<tr><td>Interest</td><td>Federal short-term rate plus 3%, compounded daily (7% for the quarter starting October 1, 2026)</td><td>No</td></tr>
</tbody></table>
<p>The IRS explains how these interact on its <a href="https://www.irs.gov/payments/failure-to-file-penalty" target="_blank" rel="noopener noreferrer">failure-to-file penalty page</a>. A draft of the 2026 Form 4868 lists a higher inflation-adjusted minimum penalty for returns due in 2027; check the final form for the exact figure.</p>
<p>The failure-to-file penalty is ten times larger than the failure-to-pay penalty. That is why, if you cannot pay in full, you should still file an extension (or the return) on time and pay as much as you can.</p>

<h2>Worked example: a consultant waiting on a K-1</h2>
<p>Lena is a self-employed consultant who also owns 20% of a partnership. The partnership extended its return and will not issue her K-1 until August. Figures are illustrative.</p>
<ul>
<li>Estimated 2026 total tax (line 4): $31,000</li>
<li>Quarterly estimates paid (line 5): $24,000</li>
<li>Balance due (line 6): $7,000</li>
<li>Payment with extension on April 15 (line 7): $7,500, adding a cushion</li>
</ul>
<p>Lena's K-1 arrives in August and her final tax is $32,000, so she owes $500 more. She files on September 10 and pays the $500. Because she paid more than 90% of her tax by April 15 and paid the rest with an extended return, she generally avoids the failure-to-pay penalty, and owes only a few dollars of interest on the $500. Had she skipped the extension and filed in September without paying, the failure-to-file penalty on $8,000 unpaid could have reached about $2,000.</p>

<h2>Extension checklist for self-employed filers</h2>
<p>Before you file Form 4868, gather the documents you will need later anyway, so the extension buys you time rather than just postponing the scramble:</p>
<table><thead><tr><th>Document</th><th>Why you need it</th><th>Where to find it</th></tr></thead><tbody>
<tr><td>Invoice register for 2026</td><td>Total gross receipts, by client</td><td>Your invoicing tool or spreadsheet</td></tr>
<tr><td>Forms 1099-NEC and 1099-K</td><td>Match to invoices to avoid IRS mismatch notices</td><td>Mail, email, client and platform dashboards</td></tr>
<tr><td>Bank and card statements</td><td>Confirm deposits and business expenses</td><td>Online banking</td></tr>
<tr><td>Expense receipts</td><td>Support Schedule C deductions</td><td>Receipts folder or app</td></tr>
<tr><td>Mileage log</td><td>Vehicle deduction</td><td>Log or tracking app</td></tr>
<tr><td>Estimated payment confirmations</td><td>Credit for 2026 payments (line 5)</td><td>IRS online account</td></tr>
<tr><td>K-1s and brokerage 1099s</td><td>Pass-through and investment income</td><td>Entities and brokers, often arriving later</td></tr>
</tbody></table>
<p>Your IRS online account shows the estimated payments the IRS has credited, which is the safest figure for line 5. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> helps if your receipts are scattered.</p>

<h2>What to do after you file the extension</h2>
<ol>
<li><strong>Save the confirmation</strong> or payment receipt that shows the extension.</li>
<li><strong>Set a personal deadline</strong> of mid-August or early September, not October 15.</li>
<li><strong>Collect missing forms</strong> as they arrive, especially K-1s and corrected 1099s.</li>
<li><strong>Make your 2027 estimated payments</strong> on schedule: June 15 and September 15 still apply.</li>
<li><strong>File the return</strong> and pay any balance as soon as it is ready; interest stops on the date you pay.</li>
</ol>

<h2>Special situations</h2>
<ul>
<li><strong>Out of the country:</strong> automatic extension to June 15 (June 15, 2027 for 2026 returns), with Form 4868 available for more time.</li>
<li><strong>Disaster areas:</strong> the IRS often postpones deadlines for affected areas automatically; check IRS disaster relief announcements.</li>
<li><strong>Combat zones:</strong> service members get additional time under separate rules.</li>
<li><strong>Married couples undecided on filing status:</strong> you can file a joint extension and still choose to file separately later, and the Form 4868 instructions let you divide the extension payment between the two separate returns in any agreed amounts.</li>
<li><strong>Expecting a refund:</strong> there is no failure-to-file penalty when no tax is due, but you have only three years from the original due date to claim a refund, so do not let an extended return slide indefinitely.</li>
<li><strong>Still need more time after October 15:</strong> there is no further extension for most taxpayers. File as soon as possible to stop the failure-to-file penalty.</li>
</ul>

<h2>Common Form 4868 mistakes</h2>
<ul>
<li><strong>Thinking the extension delays payment.</strong> It does not.</li>
<li><strong>Entering zero on line 4</strong> without a real estimate.</li>
<li><strong>Forgetting the April 15 estimated payment for 2027,</strong> which is due the same day. See our guide to the <a href="/blog/underpayment-penalty-form-2210">underpayment penalty and Form 2210</a>.</li>
<li><strong>Missing a state deadline</strong> because you assumed the federal extension covered it.</li>
<li><strong>Leaving the work until October 14.</strong> Start in early summer so you can still correct errors. If something is missed after filing, our guide to <a href="/blog/amended-tax-return-1040-x">amending a return with Form 1040-X</a> explains the fix.</li>
</ul>
<p>For the full list of 2027 filing dates, see our <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a>.</p>

<p>The fastest way to estimate a freelance tax bill is to start from a complete set of invoices. Keep every bill consistent with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, numbered invoices, and PDF downloads you can hand to your tax preparer.</p>
`,
  },
  {
    slug: "irs-cp2000-notice",
    title: "IRS CP2000 Notice: What to Do When Income Doesn't Match",
    description:
      "Got an IRS CP2000 notice? Learn what it means, how to respond within 30 days, how to dispute 1099 mismatches with invoices, and how to avoid the next one.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "1099-nec-vs-1099-misc-vs-1099-k",
      "1099-k-threshold",
      "irs-penalty-abatement",
    ],
    faqs: [
      {
        q: "Is a CP2000 notice an audit?",
        a: "Not exactly. A CP2000 is an automated underreporter notice, generated when the income and payment information the IRS received from third parties, such as employers, banks, clients and payment platforms, does not match your return. It proposes changes and asks you to agree or explain. It is handled by correspondence, not an in-person examination, but you must respond, because the proposed tax becomes final if you ignore it.",
      },
      {
        q: "How long do I have to respond to a CP2000?",
        a: "The IRS asks you to respond within 30 days of the date on the notice, or 60 days if you live outside the United States. The response date is printed on the notice. If you need more time to gather records, you can request an extension using the contact information on the notice. Responding late or not at all leads to a statutory notice of deficiency (CP3219A).",
      },
      {
        q: "Should I file an amended return after receiving a CP2000?",
        a: "Usually no. The IRS generally asks you not to file Form 1040-X in response to a CP2000, because the notice itself adjusts your return. Respond using the response form, marking whether you agree or disagree and attaching documents. An amended return can make sense only if you have other changes the notice does not cover, such as additional deductions, and even then follow the instructions on the notice.",
      },
      {
        q: "Can I claim deductions the CP2000 did not include?",
        a: "Yes. If the notice adds self-employment income from a Form 1099-NEC or 1099-K, you can claim the related business expenses you did not deduct originally, which reduces the proposed tax. Include a signed statement, a corrected Schedule C and SE calculation if helpful, and copies of supporting receipts and invoices. The IRS reviews these with your response.",
      },
      {
        q: "What if I cannot pay the amount on the CP2000?",
        a: "Respond on time anyway. Agree to the changes you accept, then pay what you can and apply for a payment plan online at IRS.gov. Paying the agreed amount within 30 days stops additional interest from accruing on that amount. If you have a clean compliance history, ask about first-time penalty abatement for any accuracy penalty, or reasonable cause relief if circumstances outside your control caused the error.",
      },
      {
        q: "How do I know a CP2000 is real and not a scam?",
        a: "Genuine CP2000 notices arrive by US mail, not by email, text or social media. They include your name, the tax year, a notice number and a response form, and they direct you to IRS.gov or the phone number printed on the notice. Do not call numbers or click links from unsolicited messages. If in doubt, log in to your IRS online account to see whether the notice appears there.",
      },
    ],
    content: `
<p>An IRS CP2000 notice means the income or payments reported to the IRS by third parties, such as clients, employers, banks and payment apps, do not match what you reported on your return. It is a proposal, not a final bill: you have 30 days from the notice date to agree, partly agree or disagree with supporting documents. For freelancers, the most common causes are duplicate reporting on 1099-NEC and 1099-K forms and income that was simply missed. This guide explains how to respond to a CP2000, how to use your invoices as evidence and how to prevent the next one.</p>

<p>This is general information, not tax or legal advice. For large amounts or complex issues, consider a CPA, enrolled agent or tax attorney.</p>

<h2>What a CP2000 notice is</h2>
<p>The IRS Automated Underreporter program matches information returns (W-2, 1099-NEC, 1099-K, 1099-INT, 1099-B and others) against your Form 1040. When something does not match, it sends a CP2000 showing:</p>
<ul>
<li>The income items that do not match, with the payer's name and amount.</li>
<li>The proposed change to your tax, plus any accuracy-related penalty (generally 20% of the underpayment if the shortfall is substantial or due to negligence) and interest.</li>
<li>A response form and the deadline to reply.</li>
</ul>
<p>The IRS describes the process on its <a href="https://www.irs.gov/individuals/understanding-your-cp2000-series-notice" target="_blank" rel="noopener noreferrer">Understanding your CP2000 series notice</a> page and in <a href="https://www.irs.gov/taxtopics/tc652" target="_blank" rel="noopener noreferrer">Topic 652, Notice of underreported income</a>. CP2000s often arrive a year or more after you filed, so they can catch you off guard.</p>

<h2>Common causes of a CP2000 for freelancers and small businesses</h2>
<table><thead><tr><th>Cause</th><th>What happened</th><th>Typical fix</th></tr></thead><tbody>
<tr><td>Missed 1099-NEC</td><td>A client reported paying you, but the income was left off Schedule C</td><td>Agree, and claim related expenses</td></tr>
<tr><td>Double-counted payments</td><td>A client paid through a card processor or payment app and also sent a 1099-NEC, so the same income appears on both a 1099-NEC and a 1099-K</td><td>Disagree in part; show invoices and payment records proving one payment</td></tr>
<tr><td>1099-K gross amounts</td><td>1099-K reports gross payments including sales tax, refunds and fees, not net income</td><td>Reconcile gross to reported income with records</td></tr>
<tr><td>Personal payments on a 1099-K</td><td>Reimbursements from friends or sales of personal items at a loss reported as payments</td><td>Explain and document that they are not business income</td></tr>
<tr><td>Income reported under another category</td><td>You reported 1099-NEC income as other income, or combined several clients on one line</td><td>Show where the income appears on your return</td></tr>
<tr><td>Payer error</td><td>Wrong amount, wrong year or wrong taxpayer ID on the 1099</td><td>Get a corrected form from the payer; include it</td></tr>
<tr><td>Stock sale without basis</td><td>A 1099-B showed proceeds but no cost basis</td><td>Provide purchase records</td></tr>
</tbody></table>
<p>Our explainer on <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> shows why the same payment can end up on two forms. Under the One Big Beautiful Bill Act, payment platforms issue 1099-Ks only above $20,000 and 200 transactions; see our <a href="/blog/1099-k-threshold">1099-K threshold guide</a>, and our new guide to the <a href="/blog/ebay-seller-1099-k">eBay 1099-K</a> for marketplace sellers.</p>

<h2>How to respond to a CP2000 step by step</h2>
<ol>
<li><strong>Do not panic, and do not ignore it.</strong> Note the response date printed on the notice.</li>
<li><strong>Verify it is genuine.</strong> Real notices come by mail and appear in your IRS online account.</li>
<li><strong>Compare each item</strong> with your return. Was it reported somewhere else, reported twice or not reported at all?</li>
<li><strong>Pull your records:</strong> invoices, bank and processor statements, 1099s and your filed return.</li>
<li><strong>Choose your response:</strong> agree, partly agree or disagree on the response form.</li>
<li><strong>Write a short signed statement</strong> explaining each item you dispute, referencing attached documents by number.</li>
<li><strong>Claim missing expenses</strong> related to added self-employment income.</li>
<li><strong>Send copies, not originals,</strong> via the IRS Documentation Upload Tool if your notice allows it, fax or mail as instructed. Joint filers both sign.</li>
<li><strong>Pay what you agree to,</strong> or set up a payment plan, to stop further interest on that amount.</li>
<li><strong>Keep a copy</strong> of everything you sent and proof of delivery.</li>
</ol>
<p>If the IRS accepts your response, you will receive a letter or revised notice. If it does not, or if you do not reply, the next step is a CP3219A statutory notice of deficiency, which gives you 90 days (150 days if addressed outside the US) to petition the US Tax Court before the tax is assessed.</p>

<h2>Using invoices to dispute a CP2000</h2>
<p>For self-employed taxpayers, invoices are the strongest evidence that a 1099 overlaps with income you already reported. A useful reconciliation shows, for each client: invoice numbers and dates, the amount billed, how it was paid (check, ACH, card, PayPal), which 1099 it appears on, and where it appears on your Schedule C. Sequential invoice numbers, as produced by an <a href="/tools/invoice-number-generator">invoice number generator</a>, make it easy to show nothing is missing. Our guide to <a href="/blog/invoice-audit-preparation">invoice audit preparation</a> covers how to organize records for any IRS inquiry.</p>

<h2>Worked example: a designer's duplicated income</h2>
<p>Tom, a freelance designer, reported $68,000 of gross receipts on Schedule C for 2025. His CP2000 lists two items he did not match. Figures are illustrative.</p>
<table><thead><tr><th>Item on CP2000</th><th>Amount</th><th>Tom's records</th><th>Response</th></tr></thead><tbody>
<tr><td>1099-NEC from Acme Co.</td><td>$9,500</td><td>Already in his $68,000; Acme paid four invoices by card</td><td>Disagree</td></tr>
<tr><td>1099-K from card processor</td><td>$24,000</td><td>Includes the $9,500 Acme payments and $14,500 from other clients, all in his $68,000</td><td>Disagree</td></tr>
<tr><td>1099-NEC from Beta LLC</td><td>$3,200</td><td>Missed; invoice 1047 paid in December</td><td>Agree</td></tr>
</tbody></table>
<p>The CP2000 proposed adding $36,700 of income and a tax increase of about $11,000 plus a 20% accuracy penalty. Tom's response agrees to the $3,200, claims $400 of software costs tied to that job, and disputes the rest with an invoice-to-deposit reconciliation showing the Acme payments appear on both forms. If accepted, his additional tax falls to roughly $1,000 to $1,100 including self-employment tax, and the accuracy penalty is unlikely to apply because the remaining underpayment is small.</p>

<h2>CP2000 compared with other IRS notices</h2>
<table><thead><tr><th>Notice</th><th>What it means</th><th>What to do</th></tr></thead><tbody>
<tr><td>CP2501</td><td>Early, informal inquiry about a possible mismatch</td><td>Explain or agree; may prevent a CP2000</td></tr>
<tr><td>CP2000</td><td>Proposed changes to your return based on information returns</td><td>Agree, partly agree or disagree by the response date</td></tr>
<tr><td>CP3219A</td><td>Statutory notice of deficiency after no response or unresolved disagreement</td><td>Petition Tax Court within the deadline, or the tax is assessed</td></tr>
<tr><td>CP14</td><td>Balance due on an assessed tax</td><td>Pay or set up a payment plan</td></tr>
<tr><td>Letter 525</td><td>Audit report proposing changes after an examination</td><td>Respond within 30 days; appeal rights apply</td></tr>
</tbody></table>
<p>IRS Publication 5181 explains how reviews by mail work, including the CP2000 and CP2501. A CP2000 is far more common than a full audit, and most are resolved by mail if you respond with clear records.</p>

<h3>What to write in your response statement</h3>
<p>Keep the statement short and factual. A typical structure is: the tax year and notice date; for each disputed item, the payer, the amount, why it is already included or not taxable, and the attachment that proves it; then the items you agree with and any related expenses you are claiming. For example: Item 2, card processor 1099-K for $24,000. This amount is included in the $68,000 gross receipts on Schedule C, line 1. Attachment B lists invoices 1001 to 1063 with payment method and deposit date, reconciling to the 1099-K total. Sign and date it, and write your name, Social Security number and the tax year on each page.</p>

<h2>Penalties, interest and relief</h2>
<ul>
<li><strong>Interest</strong> runs from the original due date on any tax ultimately owed. The underpayment rate was 7% for the quarter starting October 1, 2026.</li>
<li><strong>Accuracy-related penalty</strong> of 20% may apply to a substantial understatement or negligence. You can ask for removal if you had reasonable cause; see our guide to <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>.</li>
<li><strong>Payment plans</strong> are available online for most individuals; see <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a>.</li>
</ul>

<h2>How to avoid the next CP2000</h2>
<ul>
<li><strong>Reconcile 1099s to your invoices</strong> before filing. Every 1099 amount should trace to invoices you reported.</li>
<li><strong>Ask clients how they will report.</strong> Payments made by card or through payment apps are usually reported by the processor on 1099-K, not by the client on 1099-NEC.</li>
<li><strong>Report gross receipts, then deduct fees.</strong> If a 1099-K includes processor fees and refunds, report the gross and deduct fees and refunds as expenses so totals match.</li>
<li><strong>Request corrected forms early</strong> if a payer's 1099 is wrong. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms</a> explains how payers issue them.</li>
<li><strong>If you spot an error yourself</strong> before the IRS does, consider an amended return; see our new guide to <a href="/blog/amended-tax-return-1040-x">Form 1040-X</a>.</li>
</ul>

<h2>If you already paid or the notice is wrong</h2>
<p>Sometimes a CP2000 covers income you corrected yourself, for example with an amended return the IRS had not yet processed. Say so in your response, include a copy of the amended return and the date you filed it, and ask the IRS to reconcile the two. If the notice is simply wrong and the IRS does not accept your explanation, you can request a conference with the IRS Independent Office of Appeals in many cases, and the Taxpayer Advocate Service can help if the problem is causing significant hardship or has stalled.</p>

<p>Clear, numbered invoices are the best defense when IRS records do not match yours. Create them with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, and every invoice downloads as a PDF you can attach to a response if you ever need to.</p>
`,
  },
  {
    slug: "underpayment-penalty-form-2210",
    title: "Underpayment Penalty (Form 2210): How to Avoid It",
    description:
      "The IRS underpayment penalty explained: Form 2210 safe harbors, the $1,000 rule, how the penalty is calculated, the annualized method and how to reduce it.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "estimated-tax-penalty",
      "quarterly-estimated-taxes-freelancers",
      "how-much-to-set-aside-for-taxes",
    ],
    faqs: [
      {
        q: "What is the safe harbor to avoid the underpayment penalty?",
        a: "You generally avoid the penalty if your withholding and timely estimated payments total at least 90% of your current-year tax or 100% of your prior-year tax, whichever is smaller. If your prior-year adjusted gross income was more than $150,000 ($75,000 if married filing separately), the prior-year test rises to 110%. The payments must also be made on time each quarter, not just by year-end.",
      },
      {
        q: "Do I owe an underpayment penalty if I owe less than $1,000?",
        a: "Generally no. You do not owe the penalty if the tax you owe after subtracting withholding and refundable credits is less than $1,000. You also do not owe it if you had no tax liability for the prior year, were a US citizen or resident for the whole year, and that prior year covered 12 months. These exceptions are listed in the Form 2210 instructions.",
      },
      {
        q: "Do I have to file Form 2210?",
        a: "Often not. If you owe a penalty and do not need to claim a waiver or use the annualized income method, the IRS can calculate the penalty and send you a bill, or your software calculates it automatically. You must file Form 2210 if you are requesting a waiver, using the annualized income installment method, or treating withholding as paid on the actual dates rather than evenly through the year.",
      },
      {
        q: "How is the underpayment penalty calculated?",
        a: "The penalty works like interest. For each quarterly installment, the IRS multiplies the amount you underpaid by the underpayment interest rate for the period it was late, counted in days, until it was paid or the April 15 due date, whichever comes first. The rate is the federal short-term rate plus 3 percentage points and is set every quarter; it was 7% for the quarter beginning October 1, 2026.",
      },
      {
        q: "Can the IRS waive the underpayment penalty?",
        a: "Yes, in limited situations. The IRS can waive it if the underpayment was due to a casualty, disaster or other unusual circumstance that would make the penalty inequitable, or if you retired after reaching age 62 or became disabled during the year or the prior year and the underpayment was due to reasonable cause. Request the waiver on Form 2210 with an explanation and supporting documents.",
      },
      {
        q: "How can freelancers with uneven income avoid the penalty?",
        a: "Use the annualized income installment method on Schedule AI of Form 2210. It calculates each required payment based on income actually earned through each period, so if most of your income came late in the year, your early required payments are smaller. Alternatively, pay based on 100% or 110% of last year's tax in four equal installments, which is predictable regardless of how this year goes.",
      },
    ],
    content: `
<p>The IRS underpayment penalty applies when you did not pay enough tax during the year through withholding or quarterly estimated payments. You avoid it if you owe less than $1,000 at filing, or if your timely payments cover at least 90% of this year's tax or 100% of last year's (110% if last year's AGI was over $150,000). Form 2210 is the form used to calculate the penalty, claim a waiver or use the annualized method for uneven income. This guide explains each rule, shows a worked calculation and gives practical ways to reduce or avoid the penalty.</p>

<p>This is general information, not tax advice; check your own figures with a tax professional.</p>

<h2>Who owes the underpayment penalty</h2>
<p>The US tax system is pay-as-you-go. Employees pay through withholding; freelancers, sole proprietors, partners, S corp shareholders with large distributions and people with investment income usually make quarterly estimated payments. If those payments fall short of what was required for any quarter, the penalty applies to that quarter, even if you pay the full amount by April 15.</p>
<p>For 2026, the four estimated payment due dates are:</p>
<table><thead><tr><th>Installment</th><th>Income period</th><th>Due date</th></tr></thead><tbody>
<tr><td>1</td><td>January 1 to March 31, 2026</td><td>April 15, 2026</td></tr>
<tr><td>2</td><td>April 1 to May 31, 2026</td><td>June 15, 2026</td></tr>
<tr><td>3</td><td>June 1 to August 31, 2026</td><td>September 15, 2026</td></tr>
<tr><td>4</td><td>September 1 to December 31, 2026</td><td>January 15, 2027</td></tr>
</tbody></table>
<p>Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> covers how to calculate and pay each installment.</p>

<h2>Safe harbors: how to avoid the underpayment penalty</h2>
<table><thead><tr><th>Rule</th><th>Requirement</th><th>Best for</th></tr></thead><tbody>
<tr><td>Under $1,000 owed</td><td>Tax due after withholding and refundable credits is under $1,000</td><td>People with mostly withheld income</td></tr>
<tr><td>Current-year test</td><td>Timely payments equal at least 90% of this year's tax</td><td>Stable or falling income</td></tr>
<tr><td>Prior-year test</td><td>Timely payments equal at least 100% of last year's tax</td><td>Rising income; AGI last year $150,000 or less</td></tr>
<tr><td>Prior-year test, higher income</td><td>110% of last year's tax if prior-year AGI was over $150,000 ($75,000 married filing separately)</td><td>Higher earners with rising income</td></tr>
<tr><td>No prior-year tax</td><td>No tax liability for a full 12-month prior year as a US citizen or resident</td><td>First year of self-employment after a zero-tax year</td></tr>
</tbody></table>
<p>The required payment is generally split into four equal installments of 25% of the annual requirement. The prior-year test is the most predictable for growing businesses: you know the number in January, and it protects you even if this year's income doubles. You still owe the full balance by April 15, but without the penalty.</p>

<h2>How the penalty is calculated on Form 2210</h2>
<p>The penalty is effectively interest on each late or short installment:</p>
<ol>
<li>Determine the required annual payment (the smaller of the current-year and prior-year tests).</li>
<li>Divide it into four required installments.</li>
<li>Compare what you actually paid by each due date. Withholding is treated as paid evenly across the year unless you elect otherwise.</li>
<li>For each shortfall, multiply by the underpayment rate and the number of days late, until paid or April 15 of the following year.</li>
</ol>
<p>The rate is the federal short-term rate plus 3 percentage points, reset quarterly. It was 6% for the quarter beginning April 1, 2026 and 7% for the quarter beginning October 1, 2026, according to the <a href="https://www.irs.gov/newsroom/interest-rates-remain-the-same-for-the-fourth-quarter-of-2026" target="_blank" rel="noopener noreferrer">IRS announcement</a>. Historical rates are on the IRS <a href="https://www.irs.gov/payments/quarterly-interest-rates" target="_blank" rel="noopener noreferrer">quarterly interest rates</a> page.</p>

<h2>Worked example: one big payment in January</h2>
<p>Chris is a freelance developer. Chris's 2025 tax was $18,000 with AGI under $150,000. 2026 tax will be $24,000. Chris made no estimated payments until paying $18,000 on January 15, 2027. Figures are illustrative and use a flat 7% rate for simplicity.</p>
<ul>
<li>Required annual payment: the smaller of 90% of $24,000 ($21,600) or 100% of $18,000 = $18,000.</li>
<li>Required per installment: $4,500.</li>
</ul>
<table><thead><tr><th>Installment</th><th>Due</th><th>Shortfall</th><th>Days late (to Jan 15, 2027)</th><th>Approx. penalty</th></tr></thead><tbody>
<tr><td>1</td><td>Apr 15, 2026</td><td>$4,500</td><td>275</td><td>$237</td></tr>
<tr><td>2</td><td>Jun 15, 2026</td><td>$4,500</td><td>214</td><td>$185</td></tr>
<tr><td>3</td><td>Sep 15, 2026</td><td>$4,500</td><td>122</td><td>$105</td></tr>
<tr><td>4</td><td>Jan 15, 2027</td><td>$0</td><td>0</td><td>$0</td></tr>
<tr><td>Total</td><td></td><td></td><td></td><td>About $527</td></tr>
</tbody></table>
<p>Paying $4,500 on each due date would have cost the same $18,000 and avoided the penalty entirely. Chris still owes the remaining $6,000 by April 15, 2027, but no penalty applies to it because the safe harbor was met in full by January. Because actual rates varied by quarter in 2026, the exact Form 2210 result would differ slightly.</p>

<h2>Annualized income method for uneven income</h2>
<p>If your income arrived mostly late in the year, for example because a large project paid in November, the standard calculation assumes you should have paid evenly and penalizes you for early quarters. Schedule AI of Form 2210 lets you calculate each required installment based on the income you actually earned through March 31, May 31, August 31 and December 31. It requires more work, and you must attach Form 2210 with Schedule AI, but it can reduce or eliminate the penalty for seasonal businesses and freelancers with lumpy invoices.</p>

<h2>Practical ways to reduce or avoid the penalty</h2>
<ul>
<li><strong>Use the prior-year safe harbor</strong> and pay one-quarter of it on each due date.</li>
<li><strong>Increase W-2 withholding late in the year.</strong> If you or your spouse have a job, extra withholding in December is treated as paid evenly through the year, which can wipe out earlier shortfalls. A new <a href="/blog/form-w-4">Form W-4</a> makes the change.</li>
<li><strong>Set aside tax from every invoice payment.</strong> Moving a fixed percentage of each payment into a tax account makes quarterly payments painless; our guide to <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> suggests percentages.</li>
<li><strong>Catch up as soon as you notice.</strong> The penalty accrues daily, so paying a missed installment now stops it growing.</li>
<li><strong>Use the annualized method</strong> if income was back-loaded.</li>
<li><strong>Request a waiver</strong> for disasters, casualties, retirement after 62 or disability with reasonable cause.</li>
</ul>
<p>Our existing guide to the <a href="/blog/estimated-tax-penalty">estimated tax penalty</a> also covers state penalties, which follow similar but not identical rules.</p>

<h2>Build a payment routine from your invoices</h2>
<p>For freelancers, the underpayment penalty is usually a cash flow problem, not a knowledge problem: the money for taxes got spent before the due date. The fix is a routine tied to each payment you receive:</p>
<ol>
<li><strong>Open a separate savings account</strong> just for taxes.</li>
<li><strong>Move a set percentage</strong> of every client payment into it on the day it arrives. Many self-employed people use 25% to 30%, which covers <a href="/blog/self-employment-tax">self-employment tax</a> plus federal and state income tax at moderate incomes.</li>
<li><strong>Pay the IRS on each due date</strong> from that account, using IRS Direct Pay or your online account; see <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a>.</li>
<li><strong>Check in each quarter.</strong> Compare year-to-date invoices paid with your projection and adjust the next payment if income is running higher.</li>
</ol>
<p>Example: a freelancer who invoices $8,000 a month and moves 28% of each payment to a tax account sets aside $2,240 a month, or $6,720 a quarter. If the prior-year safe harbor requires $5,500 a quarter, the account covers it with a cushion for the April balance. People earning on the side of a salaried job can often skip estimated payments altogether by raising withholding; our guide to <a href="/blog/side-hustle-taxes">side hustle taxes</a> explains how.</p>

<h2>Special cases</h2>
<ul>
<li><strong>Farmers and fishermen</strong> who earn at least two-thirds of gross income from farming or fishing need to pay only 66 2/3% of current-year tax, or can make one payment by January 15 or file and pay by March 1.</li>
<li><strong>Corporations</strong> use Form 2220, not Form 2210, and have different safe harbor rules.</li>
<li><strong>New self-employed people</strong> who had zero tax the prior year generally owe no penalty for the first year, if the prior year was a full 12 months as a US citizen or resident.</li>
<li><strong>Disaster postponements</strong> can move due dates automatically for affected areas.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Paying everything in January</strong> and assuming the safe harbor protects earlier quarters. It does not.</li>
<li><strong>Using 100% instead of 110%</strong> when prior-year AGI exceeded $150,000.</li>
<li><strong>Forgetting the first 2027 payment,</strong> due April 15, 2027, the same day as your 2026 balance and any <a href="/blog/form-4868">Form 4868 extension</a>.</li>
<li><strong>Ignoring state estimated taxes,</strong> which have their own penalties.</li>
<li><strong>Not planning for growth.</strong> When income jumps, review your <a href="/blog/year-end-tax-planning-small-business">year-end tax planning</a> by November so there is time to adjust the January payment.</li>
</ul>

<h2>Is the penalty worth avoiding at any cost?</h2>
<p>The underpayment penalty is effectively an interest charge, recently around 7% a year, and it is not deductible. That is cheaper than credit card debt but more expensive than most savings accounts pay, so paying on time is almost always the better choice. Borrowing at a high rate to pay estimated tax, however, usually is not. If cash is genuinely tight because clients are paying late, focus first on collecting what you are owed: firm payment terms, prompt reminders and deposits on new projects shorten the gap between finishing work and having the cash to pay tax on it. Then pay the IRS as soon as the money arrives, since every day of delay adds a little more penalty.</p>

<p>Paying estimated tax on time is much easier when you know exactly what you have billed and collected. Keep clean records with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, numbered invoices, and instant PDF downloads.</p>
`,
  },
];
