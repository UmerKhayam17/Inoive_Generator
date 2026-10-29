import type { PostDraft } from "../blog";

export const BUSINESS_FINANCE_2026_G_POSTS: PostDraft[] = [
  {
    slug: "business-insurance",
    title: "Business Insurance: Types, Costs and What You Need (2026)",
    description:
      "Small business insurance explained: general liability, professional liability, BOP, workers comp and cyber, with 2026 median costs and a checklist to buy right.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "workers-compensation-insurance",
      "startup-costs",
      "how-to-bill-insurance-companies-as-a-contractor",
    ],
    faqs: [
      {
        q: "Is business insurance required by law?",
        a: "Some types are. Most states require workers' compensation once you have employees, and every state requires liability coverage on vehicles, which means commercial auto for business-owned vehicles. General liability and professional liability are usually not legally required, but clients, landlords, lenders and licensing boards often require them by contract. In practice, many small businesses cannot sign a lease or a commercial contract without a certificate of insurance.",
      },
      {
        q: "Does homeowners or renters insurance cover my home business?",
        a: "Usually only a little, and sometimes not at all. Many homeowners policies limit business property to a small amount and exclude liability from business activities, such as a client tripping on your steps or a product you sold causing harm. Ask your insurer about a home-based business endorsement, or buy a separate policy or BOP if you keep inventory, equipment or client visits at home.",
      },
      {
        q: "What is the difference between occurrence and claims-made policies?",
        a: "An occurrence policy covers incidents that happen during the policy period, even if the claim is filed years later. A claims-made policy covers claims made while the policy is active, as long as the incident happened after the retroactive date. General liability is commonly occurrence-based, while professional liability is usually claims-made, so keep it continuous or buy tail coverage when you close or switch insurers.",
      },
      {
        q: "Is business insurance tax deductible?",
        a: "Premiums for insurance that protects your business, such as general liability, professional liability, commercial property, commercial auto and workers' compensation, are generally deductible as ordinary and necessary business expenses. Self-employed health insurance follows its own rules. Prepaid multi-year premiums may need to be spread over the years covered. This is general information, so confirm your situation with a tax professional and current IRS guidance on business expenses.",
      },
      {
        q: "How much general liability coverage do I need?",
        a: "A common starting point for small businesses is $1 million per occurrence and $2 million aggregate, mainly because many contracts and leases ask for those limits. Higher-risk work, large commercial clients or public venues may require more, which an umbrella policy can add cheaply. Read the insurance clause in your contracts before you buy, because the client's requirement usually sets your minimum.",
      },
      {
        q: "What is a certificate of insurance?",
        a: "A certificate of insurance, often the ACORD 25 form, is a one-page summary from your agent or insurer showing your policies, limits and policy dates. Clients and landlords ask for it before work starts. It does not change coverage by itself; if a client must be an additional insured, your policy needs an endorsement that adds them. Most insurers issue certificates online within minutes.",
      },
      {
        q: "Do freelancers need business insurance?",
        a: "Many do, even working alone from home. A consultant, designer or developer can be sued for a mistake or missed deadline, which professional liability covers. Freelancers who visit client sites or meet clients may also need general liability. Some platforms and enterprise clients require proof of coverage before onboarding. Coverage for a low-risk solo freelancer is often priced at the low end of the market.",
      },
      {
        q: "Can I pay business insurance monthly?",
        a: "Yes, most small business insurers offer monthly installments, though some add a small installment fee or require a down payment. Paying annually sometimes earns a discount. Workers' compensation can also be offered on a pay-as-you-go basis tied to your payroll provider, which spreads the cost across payroll runs and reduces the size of any audit adjustment at the end of the policy year.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Business insurance is a set of policies that pay for claims, lawsuits and losses your business could not easily absorb. Most small businesses start with general liability, add professional liability if they give advice or services, carry workers' compensation once they hire, and often bundle liability and property into a business owner's policy (BOP).</p>

<p>Small business insurance is one of those costs owners put off until a client contract or a landlord demands a certificate. This guide explains each common policy in plain language, what it covers and does not cover, what policies typically cost in 2026 according to a named data source, and how to decide what you actually need. It ends with a buying checklist and the mistakes that lead to denied claims.</p>

<h2>What is business insurance?</h2>
<p>Business insurance (also called commercial insurance) transfers specific financial risks from your business to an insurer in exchange for a premium. Each policy covers defined events, up to defined limits, minus a deductible. No single policy covers everything, which is why insurers sell bundles and why it helps to think in terms of risks rather than product names.</p>
<p>The main risks a small business faces are:</p>
<ul>
<li><strong>Third-party injury or damage:</strong> a customer slips in your shop, or you damage a client's floor while working.</li>
<li><strong>Professional mistakes:</strong> advice, design or code that causes a client a financial loss.</li>
<li><strong>Employee injuries:</strong> a worker is hurt on the job.</li>
<li><strong>Your own property:</strong> fire, theft or storm damage to equipment, inventory or premises.</li>
<li><strong>Lost income:</strong> you cannot operate for weeks after a covered loss.</li>
<li><strong>Vehicles:</strong> accidents in cars or trucks used for business.</li>
<li><strong>Data and cyber events:</strong> a breach, ransomware or a fraudulent payment request.</li>
</ul>
<p>Insurance pays out against these risks, but it does not replace a sound business setup. Your <a href="/blog/business-entity-types">business entity type</a> separates personal and business liability to a degree, and insurance pays the costs that the entity still has to face.</p>

<h2>What are the main types of small business insurance?</h2>
<p>The table below lists the policies most small businesses consider, what each one is for, and who usually needs it.</p>
<table><thead><tr><th>Policy</th><th>What it covers</th><th>Who usually needs it</th></tr></thead><tbody>
<tr><td>General liability (GL)</td><td>Bodily injury and property damage to third parties, plus personal and advertising injury such as libel</td><td>Almost every business that meets clients, visits sites or sells products</td></tr>
<tr><td>Professional liability (E&amp;O)</td><td>Claims that your advice, service or work product caused a financial loss</td><td>Consultants, designers, developers, accountants, agencies, real estate and health professionals</td></tr>
<tr><td>Business owner's policy (BOP)</td><td>General liability plus commercial property and business interruption in one package</td><td>Small businesses with premises, equipment or inventory</td></tr>
<tr><td>Workers' compensation</td><td>Medical costs and lost wages for employees hurt at work, plus employer's liability</td><td>Employers in nearly every state (see our <a href="/blog/workers-compensation-insurance">workers comp insurance guide</a>)</td></tr>
<tr><td>Commercial auto</td><td>Liability and physical damage for vehicles used for business</td><td>Any business that owns vehicles or uses them for deliveries and jobs</td></tr>
<tr><td>Cyber liability</td><td>Breach response, data restoration, ransomware, some funds transfer fraud</td><td>Businesses that store customer data or take online payments</td></tr>
<tr><td>Commercial umbrella</td><td>Extra limits above GL, auto and employer's liability</td><td>Businesses with large contracts or higher-severity risks</td></tr>
<tr><td>Product liability</td><td>Injury or damage caused by products you make or sell</td><td>Manufacturers, sellers of physical goods, food businesses</td></tr>
</tbody></table>

<h3>General liability insurance</h3>
<p>General liability covers claims from people outside your business: a customer injury, damage you cause to someone else's property, or advertising injury. It pays legal defense costs, settlements and judgments up to your limits. It does not cover your own employees (that is workers' comp), your own property, professional errors, or vehicles.</p>

<h3>Professional liability insurance</h3>
<p>Also called errors and omissions (E&amp;O), professional liability covers claims that your work caused a financial loss: a missed deadline that cost a client a launch, an incorrect tax filing, or a design flaw. For service businesses this is often the more important policy, because their biggest risk is a client claim rather than a physical injury.</p>

<h3>Business owner's policy (BOP)</h3>
<p>A BOP bundles general liability with commercial property and business interruption coverage, usually at a lower price than buying each separately. It suits retailers, restaurants, offices and contractors with equipment. Insurers restrict BOPs to smaller, lower-risk businesses, and a BOP does not include professional liability, workers' comp or commercial auto.</p>

<h2>How much does small business insurance cost?</h2>
<p>Premiums depend on your industry, location, revenue, payroll, claims history, limits and deductible. For a named benchmark, the online broker Insureon publishes median premiums from policies bought by its small business customers. Its cost page, updated February 6, 2026, lists the following monthly figures:</p>
<table><thead><tr><th>Policy</th><th>Insureon median monthly premium (2026)</th></tr></thead><tbody>
<tr><td>General liability</td><td>$45 (about $538 per year)</td></tr>
<tr><td>Business owner's policy (BOP)</td><td>$83 (about $990 per year)</td></tr>
<tr><td>Professional liability / E&amp;O</td><td>$88</td></tr>
<tr><td>Workers' compensation</td><td>$54</td></tr>
<tr><td>Cyber insurance</td><td>$129</td></tr>
</tbody></table>
<p>Source: <a href="https://www.insureon.com/small-business-insurance/cost" target="_blank" rel="noopener noreferrer">Insureon small business insurance costs</a>, as of October 2026. These are medians across many industries, so a roofer or a restaurant will often pay far more and a solo consultant may pay less. Other publishers report different averages because they use different data, so use these as a sanity check, not a quote.</p>

<h3>What drives your premium up or down</h3>
<ul>
<li><strong>Industry risk:</strong> construction, food service and transport cost more than desk-based work.</li>
<li><strong>Size:</strong> GL is often rated on revenue, workers' comp on payroll, auto on vehicles and drivers.</li>
<li><strong>Limits and deductible:</strong> higher limits cost more; a higher deductible lowers the premium.</li>
<li><strong>Claims history:</strong> prior claims raise renewal prices.</li>
<li><strong>Location:</strong> state rules, litigation climate and weather exposure all matter.</li>
<li><strong>Risk controls:</strong> safety programs, contracts with limitation-of-liability clauses and good cybersecurity can earn credits.</li>
</ul>

<h2>Worked example: insurance budget for a small contractor</h2>
<p>Consider a two-person remodeling business with one employee, a work van, about $250,000 in annual revenue and $55,000 of employee payroll. The figures below are illustrative quotes for budgeting, not market data.</p>
<table><thead><tr><th>Policy</th><th>Illustrative annual premium</th><th>Notes</th></tr></thead><tbody>
<tr><td>General liability, $1M/$2M limits</td><td>$1,800</td><td>Rated on revenue and trade</td></tr>
<tr><td>Workers' comp</td><td>$3,300</td><td>$55,000 payroll at an illustrative $6.00 per $100 of payroll</td></tr>
<tr><td>Commercial auto, one van</td><td>$2,400</td><td>Depends on driver records and state</td></tr>
<tr><td>Inland marine (tools and equipment)</td><td>$400</td><td>Covers tools in transit and on job sites</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$7,900</strong></td><td>About $658 per month</td></tr>
</tbody></table>
<p>At $250,000 of revenue, that is about 3.2% of sales. Build it into your <a href="/blog/startup-costs">startup costs</a> and your <a href="/blog/overhead-costs">overhead costs</a> so your prices cover it. If a job requires higher limits or an additional insured endorsement, the added cost belongs in that job's quote.</p>

<h2>How to choose the right business insurance: step by step</h2>
<ol>
<li><strong>List your risks.</strong> Use the seven risk categories above and note which apply to you.</li>
<li><strong>Check legal requirements.</strong> Your state's workers' comp rules, commercial auto minimums and any licensing board bond or insurance rules.</li>
<li><strong>Read your contracts and lease.</strong> Note required limits, additional insured wording, waiver of subrogation and primary/non-contributory clauses.</li>
<li><strong>Decide limits and deductibles.</strong> Choose a deductible you could pay tomorrow from cash.</li>
<li><strong>Get quotes from at least two sources.</strong> An independent agent can compare several insurers; online brokers are faster for simple risks.</li>
<li><strong>Compare coverage, not just price.</strong> Check exclusions, sublimits, occurrence vs claims-made, and the retroactive date.</li>
<li><strong>Set up certificates.</strong> Learn how to issue certificates of insurance quickly, since clients ask before work starts.</li>
<li><strong>Review every year.</strong> New services, employees, vehicles or a big contract can leave gaps.</li>
</ol>

<h2>Who needs which policy? Quick guide by business type</h2>
<table><thead><tr><th>Business type</th><th>Core policies</th><th>Often added</th></tr></thead><tbody>
<tr><td>Solo consultant or freelancer</td><td>Professional liability</td><td>General liability, cyber</td></tr>
<tr><td>Retail shop or online store</td><td>BOP, product liability</td><td>Cyber, workers' comp once hiring</td></tr>
<tr><td>Contractor or trades</td><td>General liability, workers' comp, commercial auto</td><td>Inland marine, umbrella, surety bonds</td></tr>
<tr><td>Restaurant or caterer</td><td>BOP, workers' comp</td><td>Liquor liability, commercial auto</td></tr>
<tr><td>Agency or software firm</td><td>Professional liability, cyber</td><td>General liability, workers' comp</td></tr>
</tbody></table>
<p>If you do insurance restoration or repair work, also read our guide to <a href="/blog/how-to-bill-insurance-companies-as-a-contractor">billing insurance companies as a contractor</a>, which is about getting paid by insurers rather than buying coverage.</p>

<h2>Which business insurance is required by law?</h2>
<p>Only a few policies are legally required, and the rules come mostly from states:</p>
<ul>
<li><strong>Workers' compensation:</strong> required for employers in nearly every state, with employee-count thresholds in some states and an opt-out in Texas.</li>
<li><strong>Commercial auto:</strong> nearly every state requires liability insurance on vehicles, and business-owned vehicles generally need a commercial policy rather than a personal one.</li>
<li><strong>State disability or paid leave programs:</strong> a few states, such as California, New York and New Jersey, require coverage or payroll contributions for non-work disability.</li>
<li><strong>Licenses and bonds:</strong> contractors, movers and some other licensed trades must show proof of insurance or a surety bond to get or renew a license. Our guide on <a href="/blog/how-to-get-a-business-license">getting a business license</a> covers where to check.</li>
</ul>
<p>Everything else is a business decision, but contracts make many policies mandatory in practice. Commercial leases almost always require general liability and often property coverage, and enterprise clients usually require general liability, professional liability and cyber limits before they sign a vendor agreement. Forming an LLC or corporation does not replace insurance; our comparison of an <a href="/blog/llc-vs-sole-proprietorship">LLC vs a sole proprietorship</a> explains what the entity does and does not protect.</p>

<h2>How do business insurance claims work?</h2>
<p>When something happens that could lead to a claim, the clock starts. A typical claim follows these stages:</p>
<ol>
<li><strong>Report promptly.</strong> Notify your agent or insurer as soon as you know about an incident or receive a demand letter, even if you think it will go nowhere. Most policies require prompt notice.</li>
<li><strong>Document everything.</strong> Photos, names of witnesses, emails, contracts, invoices and timesheets related to the job.</li>
<li><strong>Do not admit fault or settle on your own.</strong> Liability policies usually give the insurer the right to control the defense and settlement.</li>
<li><strong>Work with the adjuster.</strong> The insurer assigns an adjuster who investigates, may appoint a defense lawyer and decides whether the claim is covered.</li>
<li><strong>Pay the deductible or retention.</strong> Your share comes first, then the insurer pays up to the limit.</li>
</ol>
<p>Claims affect renewal prices, so some owners pay small property losses themselves. Liability claims are different: always report them, because a late report can void coverage for a claim that grows. For cyber incidents, call the insurer's breach hotline before you call a vendor, since many policies require you to use approved response firms. Good card security practices, covered in our guide to <a href="/blog/pci-compliance-small-business">PCI compliance for small businesses</a>, also help with cyber underwriting.</p>

<h2>Common business insurance mistakes</h2>
<ul>
<li><strong>Assuming homeowners insurance covers business activity.</strong> It usually covers very little.</li>
<li><strong>Treating contractors as uninsured.</strong> If your subcontractors have no coverage, your GL or workers' comp insurer may charge you for their payroll at audit. Collect certificates before work starts, as covered in our article on <a href="/blog/how-to-pay-contractors">how to pay contractors</a>.</li>
<li><strong>Underestimating payroll or revenue.</strong> Premiums are adjusted at audit, so low estimates create a surprise bill.</li>
<li><strong>Letting claims-made coverage lapse.</strong> A gap can leave earlier work uninsured.</li>
<li><strong>Ignoring cyber and funds transfer fraud.</strong> A fake bank-change email can cost more than a slip-and-fall claim, and many policies exclude it unless you add the coverage.</li>
<li><strong>Not reporting claims promptly.</strong> Late notice is a common reason for denial.</li>
</ul>

<h2>How insurance fits into pricing and invoicing</h2>
<p>Insurance is a fixed overhead cost, so it should show up in your rates rather than as a surprise. Some trades pass project-specific costs through on the invoice, such as an additional insured endorsement fee or a builder's risk policy bought for one job. If you do that, list it as a separate line with a clear description, and agree to it in the quote first. You can set up those line items in our <a href="/invoice-generator">free invoice generator</a> and save the layout for future jobs.</p>
<p>Keep your declarations pages, certificates and endorsements in one folder alongside contracts, and track premiums in your <a href="/blog/business-expense-categories">business expense categories</a> so you can deduct them at tax time.</p>
<p>This article is general information, not insurance, tax or legal advice. Coverage depends on policy wording, so read your policy and ask a licensed agent about your situation.</p>

<p>Small business insurance protects the business you have built from the one claim that could end it. Start with the policies your contracts and state law require, add the ones that match your real risks, and price the cost into your work. When it is time to bill, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up, and builds a downloadable PDF right in your browser.</p>
`,
  },
  {
    slug: "workers-compensation-insurance",
    title: "Workers Comp Insurance: Who Needs It and What It Costs",
    description:
      "Workers comp insurance explained: state requirements (including the Texas opt-out), how premiums are priced per $100 of payroll, contractors and audits.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["business-insurance", "hiring-your-first-employee", "employer-payroll-taxes"],
    faqs: [
      {
        q: "Do I need workers comp if I only have one employee?",
        a: "In many states, yes. Several states require coverage from the first employee, while others start at three, four or five employees, and construction often has lower thresholds than other industries. Part-time workers usually count toward the total. Check your state workers' compensation agency's website before your first hire, because penalties for operating without required coverage can include fines, stop-work orders and personal liability for injury costs.",
      },
      {
        q: "Does workers comp cover the business owner?",
        a: "It depends on the business structure and the state. Sole proprietors and partners are often excluded by default but can usually elect coverage for themselves. Corporate officers and LLC members may be included automatically with an option to exclude themselves, subject to state rules. Owners in physically risky trades often choose to be covered, and some general contractors require it before letting you work on their sites.",
      },
      {
        q: "What is a workers comp premium audit?",
        a: "Because your premium is based on estimated payroll, the insurer checks actual payroll after the policy year ends. An auditor reviews payroll records, tax forms such as Form 941, job duties by class code and payments to subcontractors. If actual payroll was higher than estimated, you owe additional premium; if lower, you get a refund or credit. Keeping payroll split by class code and certificates for subcontractors makes audits smoother.",
      },
      {
        q: "Is workers comp the same as disability insurance?",
        a: "No. Workers' comp covers injuries and illnesses that arise from work, regardless of fault. Disability insurance covers income loss from injuries or illnesses that happen outside work. A handful of states, such as California, New York and New Jersey, also require or run short-term disability programs for non-work conditions, which are separate from workers' comp and have their own payroll deductions or premiums.",
      },
      {
        q: "Can an employee sue me if I have workers comp?",
        a: "Generally, workers' comp is the exclusive remedy for workplace injuries, meaning the employee receives benefits without proving fault and in return usually cannot sue the employer for negligence. There are exceptions, such as intentional harm, and some states allow suits in specific situations. Employer's liability coverage, Part Two of a standard workers' comp policy, helps defend claims that fall outside the exclusive remedy rule.",
      },
      {
        q: "How do I lower my workers comp premium?",
        a: "Classify employees correctly so clerical staff are not rated as field workers, run a written safety program, report injuries quickly and return injured workers to light duty when possible, which helps your experience mod over time. Collect certificates from subcontractors so their payroll is not added at audit. Pay-as-you-go billing does not lower the rate, but it keeps cash flow smoother and reduces audit surprises.",
      },
      {
        q: "Is workers comp tax deductible?",
        a: "Yes, workers' compensation premiums paid by a business for its employees are generally deductible as an ordinary and necessary business expense. Benefits received by an injured worker under a workers' compensation act are generally not taxable income to that worker. Premiums you pay for coverage on yourself as an owner may be treated differently depending on your entity, so confirm with a tax professional.",
      },
      {
        q: "What happens if I am caught without workers comp?",
        a: "Consequences vary by state but can be severe: fines that may be calculated per day or per employee, stop-work orders that shut down a job site, criminal charges in some states, and personal liability for an injured worker's medical bills and lost wages. Some states also bar uninsured employers from public contracts. If you discover a gap, contact an agent or your state fund immediately.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Workers comp insurance pays medical bills and lost wages for employees injured on the job and protects the employer from most related lawsuits. Nearly every state requires it once you hire, with Texas the main exception, where private employers may opt out. Premiums are priced per $100 of payroll, based on each job's class code and your claims history.</p>

<p>Workers' compensation is often the first insurance a growing small business is legally required to carry. It is also one of the most confusing: rules are set by each state, rates depend on job classifications, and the bill is adjusted after the policy year by an audit. This guide covers who needs workers comp insurance, how premiums are calculated with a worked example, how contractors fit in, and how to avoid the mistakes that lead to fines and surprise audit bills.</p>

<h2>What is workers compensation insurance?</h2>
<p>Workers' compensation is a no-fault system created by state law. When an employee is injured or becomes ill because of their job, the policy pays for medical care, a portion of lost wages, rehabilitation and, in the worst cases, death benefits to dependents. In exchange, the employee generally gives up the right to sue the employer for negligence. This trade-off is called the exclusive remedy rule.</p>
<p>A standard policy has two parts:</p>
<ul>
<li><strong>Part One, workers' compensation:</strong> pays the benefits required by your state's law, with no dollar limit other than what the law sets.</li>
<li><strong>Part Two, employer's liability:</strong> covers lawsuits that fall outside the exclusive remedy rule, such as a claim from an injured worker's spouse, up to stated limits (often $100,000 / $500,000 / $100,000 on a basic policy).</li>
</ul>
<p>Federal employees, longshore and harbor workers, and some other groups are covered by federal programs instead, but private small businesses deal with their state system.</p>

<h2>Who needs workers comp insurance?</h2>
<p>Each state decides who must carry coverage. The rules usually turn on how many employees you have, your industry, and whether workers are employees or independent contractors.</p>
<table><thead><tr><th>Situation</th><th>Typical rule</th></tr></thead><tbody>
<tr><td>Employer with one or more employees</td><td>Required in many states from the first employee</td></tr>
<tr><td>Small employers in some states</td><td>Thresholds of 3, 4 or 5 employees apply in some states (for example, Georgia starts at 3, Florida at 4 for non-construction businesses, Alabama at 5)</td></tr>
<tr><td>Construction</td><td>Often required with a single employee, even in states with higher thresholds for other industries (Florida is one example)</td></tr>
<tr><td>Texas private employers</td><td>Coverage is optional; employers that opt out are "nonsubscribers" and must file a notice with the Texas Department of Insurance and notify employees</td></tr>
<tr><td>Sole proprietor with no employees</td><td>Usually not required for the owner, though clients may require it</td></tr>
<tr><td>Independent contractors</td><td>Not your employees if properly classified, but misclassified workers can be treated as employees</td></tr>
</tbody></table>
<p>Thresholds change and include exceptions for farm labor, domestic workers and corporate officers, so confirm the rules on your state workers' compensation agency's website. Texas nonsubscribers lose the exclusive remedy protection, which means injured employees can sue and the employer loses certain defenses, so opting out is a risk decision rather than a free saving.</p>

<h3>Where you buy coverage: private insurers, state funds and monopolistic states</h3>
<p>In most states, you buy workers comp from private insurers, through an agent or online broker, or from a competitive state fund. Four states, North Dakota, Ohio, Washington and Wyoming, run monopolistic state funds, where employers must buy coverage from the state rather than a private insurer. Businesses that cannot find coverage in the voluntary market can usually get it through their state's assigned risk plan, typically at a higher price.</p>

<h2>How much does workers comp insurance cost?</h2>
<p>Workers' comp premiums are calculated from payroll, not from a flat price. The basic formula is:</p>
<p><strong>Premium = (Payroll / 100) x Class code rate x Experience modification factor</strong>, then adjusted for schedule credits or debits, premium discounts, state assessments and minimum premiums.</p>
<ul>
<li><strong>Class code:</strong> each type of work has a code, assigned by NCCI in most states or by a state bureau in others. Clerical office employees (code 8810 in NCCI states) carry a very low rate, while roofing, framing and tree trimming carry very high rates.</li>
<li><strong>Rate per $100 of payroll:</strong> set by the insurer, starting from benchmarks published by the rating bureau.</li>
<li><strong>Experience mod:</strong> once your premium is large enough to qualify, your claims history is compared with similar businesses. A mod of 0.85 lowers your premium 15%; a mod of 1.20 raises it 20%.</li>
</ul>

<h3>Benchmark rates from state regulators (2026)</h3>
<table><thead><tr><th>State</th><th>2026 benchmark</th><th>What it means</th></tr></thead><tbody>
<tr><td>California</td><td>Average advisory pure premium of $1.65 per $100 of payroll, for policies effective on or after September 1, 2026</td><td>A benchmark for expected losses only; insurers add expenses and set their own rates</td></tr>
<tr><td>Washington</td><td>L&amp;I adopted a 4.9% average increase in workers' comp rates for 2026</td><td>Washington is a monopolistic state, so employers pay the state fund</td></tr>
<tr><td>Small business median (all states)</td><td>Insureon reports a median of $54 per month for workers' comp bought through its platform (as of February 2026)</td><td>Skews toward very small, lower-risk employers</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.insurance.ca.gov/0400-news/0100-press-releases/2026/release024-2026.cfm" target="_blank" rel="noopener noreferrer">California Department of Insurance</a>, <a href="https://lni.wa.gov/insurance/rates-risk-classes/rates-for-workers-compensation/rates-notice" target="_blank" rel="noopener noreferrer">Washington L&amp;I</a> and <a href="https://www.insureon.com/small-business-insurance/cost" target="_blank" rel="noopener noreferrer">Insureon</a>, as of October 2026. Your actual rate depends on your class codes, so an office-based company may pay a fraction of these averages while a roofing company may pay many times more.</p>

<h2>Worked example: calculating a workers comp premium</h2>
<p>A small landscaping company has two kinds of employees: an office manager earning $48,000 a year and three field workers with combined payroll of $126,000. The rates below are illustrative, chosen to show the math, not quotes for any state.</p>
<table><thead><tr><th>Class</th><th>Payroll</th><th>Illustrative rate per $100</th><th>Manual premium</th></tr></thead><tbody>
<tr><td>Clerical office (8810)</td><td>$48,000</td><td>$0.15</td><td>$72</td></tr>
<tr><td>Landscape gardening (field)</td><td>$126,000</td><td>$4.20</td><td>$5,292</td></tr>
<tr><td><strong>Total manual premium</strong></td><td><strong>$174,000</strong></td><td></td><td><strong>$5,364</strong></td></tr>
<tr><td>Experience mod 0.92</td><td></td><td></td><td>$4,934.88</td></tr>
<tr><td>State assessments and fees (illustrative)</td><td></td><td></td><td>$150</td></tr>
<tr><td><strong>Estimated annual premium</strong></td><td></td><td></td><td><strong>$5,084.88</strong></td></tr>
</tbody></table>
<p>Notice the cost of misclassification. If the office manager were coded as a field worker, the premium for that $48,000 would jump from $72 to $2,016. Keep job descriptions and payroll records split by class so the auditor can see the difference. If you run payroll yourself, our guide to <a href="/blog/how-to-do-payroll-yourself">doing payroll yourself</a> shows how to keep those records clean.</p>

<h2>Workers comp and independent contractors</h2>
<p>Independent contractors are not covered by your policy, because they are not your employees. Two problems come up often:</p>
<ul>
<li><strong>Misclassification:</strong> if a worker is really an employee under your state's test, the state can treat them as uninsured employees, with penalties. Our comparison of <a href="/blog/w2-vs-1099">W-2 employees vs 1099 contractors</a> covers the main tests.</li>
<li><strong>Uninsured subcontractors:</strong> at audit, insurers commonly add the payroll of uninsured subcontractors to your premium, because if their workers are injured on your job, your policy may end up paying. Always collect a current certificate of insurance before a subcontractor starts work and keep it with their invoice and W-9.</li>
</ul>
<p>When a subcontractor invoices you, check the dates on their certificate against the dates of the work. Our <a href="/blog/construction-subcontractor-invoice-template">construction subcontractor invoice template</a> includes fields for this.</p>

<h2>How to get workers comp coverage: step by step</h2>
<ol>
<li><strong>Confirm whether your state requires it</strong> and whether you are in a monopolistic state.</li>
<li><strong>Gather payroll estimates</strong> for the next 12 months, split by job type.</li>
<li><strong>Identify class codes</strong> with your agent; ask why each code was chosen.</li>
<li><strong>Decide on owner coverage</strong>: include or exclude yourself, as your state allows.</li>
<li><strong>Get quotes</strong> from an agent, an online broker, your state fund and, if relevant, your payroll provider's pay-as-you-go program.</li>
<li><strong>Post required notices</strong> at your workplace, as most states require.</li>
<li><strong>Set up an injury reporting process</strong> so claims are reported within your insurer's and state's deadlines.</li>
<li><strong>Prepare for the audit</strong> by keeping payroll reports, Form 941 filings and subcontractor certificates organized.</li>
</ol>

<h2>What does workers comp cover?</h2>
<p>Benefits are set by state law, so the details differ, but most states pay the same categories:</p>
<table><thead><tr><th>Benefit</th><th>What it pays</th></tr></thead><tbody>
<tr><td>Medical care</td><td>Doctor visits, hospital care, surgery, prescriptions and therapy related to the work injury, usually with no deductible for the employee</td></tr>
<tr><td>Temporary disability</td><td>A share of lost wages, often around two-thirds of average weekly wages up to a state maximum, after a short waiting period</td></tr>
<tr><td>Permanent disability</td><td>Payments for lasting impairment, based on state schedules</td></tr>
<tr><td>Vocational rehabilitation</td><td>Retraining or job placement help when a worker cannot return to the old job</td></tr>
<tr><td>Death benefits</td><td>Funeral costs and income benefits to dependents</td></tr>
</tbody></table>
<p>Coverage applies to injuries and illnesses that arise out of and in the course of employment: a fall from a ladder, a back injury from lifting, repetitive strain, or an occupational illness. It generally does not cover injuries from intoxication, intentional self-injury, horseplay outside job duties or a normal commute, though states draw these lines differently.</p>

<h2>How does a workers comp claim work?</h2>
<ol>
<li><strong>The employee reports the injury</strong> to you, ideally the same day. States set deadlines for both the worker and the employer.</li>
<li><strong>You arrange medical care</strong> and give the employee the state's claim form if required.</li>
<li><strong>You report the claim to your insurer</strong> (or state fund) within its deadline, using the first report of injury form.</li>
<li><strong>The insurer investigates</strong> and accepts or denies the claim, then pays medical providers and wage benefits directly.</li>
<li><strong>You plan return to work</strong>, including light or modified duty where possible, which lowers claim costs.</li>
</ol>
<p>Do not pay a work injury out of pocket to avoid a claim. It can break state rules, leave the worker without benefits if the injury worsens, and still end up as a claim later with less documentation.</p>

<h3>Pay-as-you-go workers comp</h3>
<p>Many insurers and payroll providers offer pay-as-you-go billing, where the premium is calculated from actual payroll each pay period instead of a large deposit based on an estimate. It improves cash flow for seasonal businesses and shrinks the year-end audit adjustment. It works best when your payroll software tags each employee with the right class code. Your quarterly <a href="/blog/form-941">Form 941</a> filings and annual <a href="/blog/form-w-2">Form W-2</a> totals are what an auditor can compare against, so keep them consistent with the payroll you report to the insurer.</p>

<h2>Common workers comp mistakes</h2>
<ul>
<li><strong>Waiting until after the first hire.</strong> Coverage should start the day the employee starts.</li>
<li><strong>Wrong class codes.</strong> Too high costs money; too low leads to back-premium at audit.</li>
<li><strong>Underestimating payroll</strong> to get a lower deposit, then facing a large audit bill.</li>
<li><strong>Ignoring overtime rules.</strong> In many states, the premium portion of overtime pay is excluded from rated payroll, but only if your records show it separately.</li>
<li><strong>No certificates from subcontractors</strong>, which turns their payroll into yours at audit.</li>
<li><strong>Delaying injury reports</strong>, which raises claim costs and can hurt your experience mod.</li>
</ul>

<h2>Budgeting for workers comp alongside payroll taxes</h2>
<p>Workers' comp is one of several costs on top of wages. Add it to the employer share of FICA, federal and state unemployment taxes, and benefits when you price your services. Our guides to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> and <a href="/blog/hiring-your-first-employee">hiring your first employee</a> show the full cost of an employee, and our overview of <a href="/blog/business-insurance">small business insurance</a> covers the other policies you are likely to need.</p>
<p>If you pass insurance costs to customers, build them into your rates rather than adding a surprise surcharge. Contractors working on large jobs sometimes list project-specific coverage, such as an owner-required policy or a wrap-up program credit, as its own line. You can set up a reusable layout for that in our <a href="/invoice-generator">free invoice generator</a>.</p>
<p>This article is general information, not legal or insurance advice. Workers' comp rules are set by each state, so confirm requirements with your state agency or a licensed agent.</p>

<p>Workers comp insurance is a legal requirement for most employers and a real safety net for your team. Get the class codes right, keep clean payroll records and collect certificates from subcontractors, and the annual audit becomes routine. When you bill clients for the work your crew does, our <a href="/invoice-generator">free invoice generator</a> needs no sign-up and downloads a PDF invoice built right in your browser.</p>
`,
  },
  {
    slug: "small-business-grants",
    title: "Small Business Grants: Where to Find Real Funding (2026)",
    description:
      "Small business grants in 2026: federal SBIR/STTR, state and local programs, private grant contests, how to apply on Grants.gov and how to spot grant scams.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "sba-loans",
      "how-to-start-a-small-business",
      "how-to-invoice-the-federal-government",
    ],
    faqs: [
      {
        q: "Does the SBA give grants to start a business?",
        a: "Generally, no. The SBA states that it does not provide grants for starting or expanding a business. Its grant programs mostly fund nonprofits, educational organizations and resource partners that help small businesses, plus specific programs such as SBIR and STTR for research and development. For startup money, the SBA's main tools are loan guarantees, such as 7(a) and microloans, made through participating lenders.",
      },
      {
        q: "Are small business grants taxable?",
        a: "In most cases, yes. A grant paid to a for-profit business is generally included in gross income unless a specific law excludes it, and some past disaster relief programs had special exclusions. Spending the grant on deductible expenses can offset the income. Keep the award letter and track how the money was spent, and ask a tax professional how to report it. This is general information, not tax advice.",
      },
      {
        q: "Are there grants for women-owned or minority-owned businesses?",
        a: "Yes, some private foundations, corporations and local programs target women, minority, veteran or rural business owners. Federal grants are rarely limited by the owner's personal characteristics, but programs such as SBA resource partner centers offer free counseling to these groups. Private grant contests change every year, so check the sponsor's official site for current eligibility, deadlines and award amounts before applying.",
      },
      {
        q: "How long does it take to get a small business grant?",
        a: "It varies widely. Private grant contests may announce winners within a few weeks or months of a deadline. Federal research grants such as SBIR typically take several months from submission to award, and registration in SAM.gov can itself take weeks. State and local grants depend on the program cycle. Plan grant funding as a possible bonus, not as the money you need to make payroll next month.",
      },
      {
        q: "Do I need a business plan to apply for a grant?",
        a: "Most grant applications ask for elements of a business plan: what the business does, who it serves, how the money will be spent, and what results it will produce. Federal research grants require a detailed technical proposal and budget. Having a current plan with financial projections makes it much faster to complete each application and to show reviewers that the funds will be used well.",
      },
      {
        q: "Can I get a grant to pay off business debt?",
        a: "Rarely. Most grants fund a specific project, purchase, hiring plan, research effort or community outcome, and many prohibit using funds to repay existing debt. A few emergency relief programs in past years allowed broader uses, but those were temporary. If debt is the problem, compare refinancing options such as SBA loans or a line of credit, and talk to your lender about restructuring.",
      },
      {
        q: "What is a UEI number and do I need one?",
        a: "The Unique Entity ID is a 12-character identifier assigned when you register an entity in SAM.gov, the federal System for Award Management. You need it, along with an active SAM.gov registration, to apply for most federal grants and to receive federal contracts. Registration is free. Be wary of companies that charge fees to register you, because you can do it yourself directly on SAM.gov.",
      },
      {
        q: "Do I have to pay back a grant?",
        a: "Normally not, if you meet the grant's terms. But grants come with conditions, such as spending the money on approved costs, filing progress and financial reports, and keeping records. If you misuse funds or fail to complete the project, the grantor may demand repayment. Read the award agreement carefully, and keep receipts and invoices for every grant-funded purchase in case of a review or audit.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Small business grants are funds you do not repay, awarded by government agencies, nonprofits or companies for specific purposes. Real options include federal SBIR and STTR research awards, state and local economic development grants, and private grant contests. Grants are competitive and project-specific, and anyone asking you to pay a fee to receive one is likely running a scam.</p>

<p>Free money is the most searched funding idea and the most misunderstood. There is no general federal grant for starting a business, but there are real programs worth applying for if your business fits. This guide covers where small business grants actually come from in 2026, how the SBIR and STTR programs work after their reauthorization, how to apply through Grants.gov and SAM.gov, a realistic worked example, and how to avoid grant scams.</p>

<h2>What is a small business grant?</h2>
<p>A grant is an award of money given for a specific purpose, with conditions on how it is spent and reported, that does not need to be repaid if you meet those conditions. That makes it different from a loan, which must be repaid with interest, and from equity investment, which gives up ownership.</p>
<table><thead><tr><th>Funding type</th><th>Repay?</th><th>Give up ownership?</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Grant</td><td>No, if terms are met</td><td>No</td><td>Defined projects, research, community goals</td></tr>
<tr><td>Loan (for example <a href="/blog/sba-loans">SBA loans</a>)</td><td>Yes, with interest</td><td>No</td><td>Startup costs, equipment, working capital</td></tr>
<tr><td>Line of credit</td><td>Yes, as drawn</td><td>No</td><td>Short-term cash gaps</td></tr>
<tr><td>Equity</td><td>No</td><td>Yes</td><td>High-growth startups</td></tr>
</tbody></table>
<p>Because grants are competitive and slow, most small businesses fund their launch with savings, revenue and loans, then use grants for specific projects. Our guide to <a href="/blog/startup-costs">estimating startup costs</a> helps you see how much of the gap a grant would really fill.</p>

<h2>Where do small business grants come from?</h2>

<h3>Federal grants: SBIR and STTR</h3>
<p>The largest federal grant programs aimed at for-profit small businesses are the Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) programs. Federal agencies with large research budgets set aside funds for small businesses developing new technology with commercial potential. STTR requires a formal partnership with a research institution such as a university.</p>
<ul>
<li><strong>Phase I:</strong> feasibility and proof of concept, usually a smaller award over months.</li>
<li><strong>Phase II:</strong> full research and development, a larger award over about two years.</li>
<li><strong>Phase III:</strong> commercialization, funded by private capital or non-SBIR government contracts.</li>
</ul>
<p>The programs' authority lapsed on September 30, 2025, which paused new solicitations and awards. Congress then passed a reauthorization that was signed in April 2026, extending SBIR and STTR through September 30, 2031, with changes that include a new post-Phase II award category and proposal limits for very frequent applicants. Agencies restarted their solicitations on different schedules, so check <a href="https://www.sbir.gov/" target="_blank" rel="noopener noreferrer">SBIR.gov</a> and each agency's page for open topics and award sizes as of today.</p>

<h3>Other federal grants on Grants.gov</h3>
<p><a href="https://www.grants.gov/" target="_blank" rel="noopener noreferrer">Grants.gov</a> lists federal grant opportunities from every agency. Most are open to governments, universities and nonprofits rather than for-profit businesses, but some agricultural, energy, export and rural development programs include small businesses. Filter by eligibility before reading the details. If you run or plan a nonprofit, more doors open, which our guide on <a href="/blog/how-to-start-a-nonprofit">how to start a nonprofit</a> covers.</p>

<h3>State and local grants</h3>
<p>State economic development agencies, cities and counties fund grants for job creation, workforce training, exporting, storefront and facade improvements, and businesses in specific neighborhoods or industries. These are often less competitive than national programs because they are limited to local applicants. Ask your local Small Business Development Center (SBDC), which is a free SBA resource partner, what is open in your area.</p>

<h3>Private and corporate grants</h3>
<p>Companies and foundations run grant contests and programs for small businesses, such as the FedEx Small Business Grant Contest, the Amber Grant for women entrepreneurs and grant programs listed by Hello Alice. Eligibility, amounts and deadlines change every cycle, so read the official rules on the sponsor's site. Treat contests as marketing exercises too: a strong application often doubles as a pitch you can reuse.</p>

<h2>How to find and apply for small business grants: step by step</h2>
<ol>
<li><strong>Define the project.</strong> Grants fund outcomes. Write one paragraph on what you will do, what it costs and what it will achieve.</li>
<li><strong>Search the right sources.</strong> SBIR.gov and Grants.gov for federal, your state economic development agency, your city, your SBDC and reputable private programs.</li>
<li><strong>Check eligibility first.</strong> Location, industry, size, ownership and business age rules eliminate most opportunities quickly.</li>
<li><strong>Register early for federal funding.</strong> Create a free SAM.gov registration to get a Unique Entity ID, then a Grants.gov account. This can take weeks.</li>
<li><strong>Prepare core documents.</strong> Business plan, financial statements, tax returns, budget and resumes of key people.</li>
<li><strong>Write to the scoring criteria.</strong> Reviewers score against published criteria; mirror their headings.</li>
<li><strong>Build a detailed budget.</strong> Show each cost, how you estimated it and how it serves the project.</li>
<li><strong>Submit before the deadline.</strong> Federal portals get slow on deadline day.</li>
<li><strong>Plan for reporting.</strong> If you win, you will need receipts, invoices and progress reports.</li>
</ol>

<h2>Worked example: a realistic grant budget</h2>
<p>A small food manufacturer applies for an illustrative $25,000 state export development grant that reimburses 50% of eligible costs. It plans a $50,000 project:</p>
<table><thead><tr><th>Budget line</th><th>Total cost</th><th>Grant share (50%)</th><th>Business share</th></tr></thead><tbody>
<tr><td>Trade show booth and travel</td><td>$18,000</td><td>$9,000</td><td>$9,000</td></tr>
<tr><td>Label and packaging translation</td><td>$6,000</td><td>$3,000</td><td>$3,000</td></tr>
<tr><td>Export compliance consulting</td><td>$10,000</td><td>$5,000</td><td>$5,000</td></tr>
<tr><td>Product samples and shipping</td><td>$16,000</td><td>$8,000</td><td>$8,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$50,000</strong></td><td><strong>$25,000</strong></td><td><strong>$25,000</strong></td></tr>
</tbody></table>
<p>Two lessons: matching grants require you to spend your own money too, and reimbursement grants pay after you spend, so you need cash or credit to bridge the gap. A short-term <a href="/blog/business-line-of-credit">business line of credit</a> is a common bridge. Keep each vendor invoice and proof of payment, because reimbursement claims are checked against them.</p>

<h2>What do grant reviewers look for?</h2>
<p>Whether the reviewer is a federal panel or a local committee, most applications are scored on similar questions:</p>
<table><thead><tr><th>Criterion</th><th>What a strong answer shows</th></tr></thead><tbody>
<tr><td>Fit with the program's goal</td><td>Your project directly delivers the outcome the grant exists to fund</td></tr>
<tr><td>Need</td><td>Evidence of a problem or opportunity, with data where possible</td></tr>
<tr><td>Feasibility</td><td>A realistic plan, timeline and team able to carry it out</td></tr>
<tr><td>Budget</td><td>Specific, reasonable costs that link to project activities</td></tr>
<tr><td>Impact</td><td>Measurable results: jobs, revenue, customers served, technical milestones</td></tr>
<tr><td>Sustainability</td><td>How the work continues after the grant money is spent</td></tr>
</tbody></table>
<p>Your <a href="/blog/business-plan-template">business plan</a> and <a href="/blog/small-business-budget">small business budget</a> already contain most of this material. Pull numbers from them rather than writing estimates from scratch, so your application matches your financial statements if the reviewer asks for them.</p>

<h2>Grants vs loans: which should a small business pursue?</h2>
<p>Grants are attractive because they are not repaid, but they cost time. A federal research proposal can take weeks of work, and a popular private contest may receive far more entries than it has awards. A loan application is usually faster and more predictable, but it has to be repaid with interest.</p>
<ul>
<li><strong>Pursue grants when</strong> your project clearly matches a program's purpose, you have time before you need the money, and you can meet reporting rules.</li>
<li><strong>Pursue loans or credit when</strong> you need funds by a specific date, the purpose is general working capital, or the business would struggle with grant restrictions.</li>
<li><strong>Combine both when</strong> a grant reimburses costs after you spend or requires matching funds.</li>
</ul>
<p>A useful rule of thumb is to estimate the hours an application will take, multiply by the value of your time, and compare that with the award amount and your realistic chance of winning. Local programs with few applicants often beat national contests on this test, even when the award is smaller.</p>

<h3>Industry-specific and community programs</h3>
<p>Beyond the main sources, look at programs tied to your sector or community: the US Department of Agriculture for farms and rural businesses, state energy offices for efficiency upgrades, arts councils for creative businesses, and community development financial institutions (CDFIs) that sometimes combine small grants with loans. Chambers of commerce and business associations also publicize local awards. Our guide on <a href="/blog/how-to-start-a-small-business">how to start a small business</a> lists the local partners worth contacting early.</p>

<h2>How to spot small business grant scams</h2>
<p>The Federal Trade Commission warns that real government agencies do not call, text or message you out of the blue to offer a grant, and they do not charge fees to receive one. Watch for these red flags:</p>
<ul>
<li>You "qualify" for a grant you never applied for.</li>
<li>You must pay a processing, release or tax fee first, often by gift card, wire or crypto.</li>
<li>The sender asks for your bank login or Social Security number to "deposit" funds.</li>
<li>A company charges to register you in SAM.gov or to access a "secret" grant list.</li>
<li>The message uses an official-sounding name but a free email address.</li>
</ul>
<p>Grants.gov, SBIR.gov and SAM.gov are free to use. If in doubt, contact the agency through the contact details on its official .gov website, not the details in the message.</p>

<h2>Common small business grant mistakes</h2>
<ul>
<li><strong>Applying without reading eligibility.</strong> Most rejections are for basic eligibility.</li>
<li><strong>Vague budgets.</strong> "Marketing: $10,000" scores poorly; break it into specific costs.</li>
<li><strong>Counting on a grant for survival.</strong> Award timing is unpredictable.</li>
<li><strong>Missing registrations.</strong> No active SAM.gov registration means no federal award.</li>
<li><strong>Poor recordkeeping after the award.</strong> Missing invoices can force repayment.</li>
<li><strong>Ignoring tax.</strong> Grant income is generally taxable for businesses.</li>
</ul>

<h2>What records should you keep for grant-funded work?</h2>
<p>Grantors can ask you to prove that every dollar went where the budget said it would, sometimes years after the award. Build the record as you go:</p>
<ul>
<li><strong>The award agreement</strong> and any approved budget changes, in writing.</li>
<li><strong>Vendor quotes, purchase orders and invoices</strong> for each grant-funded purchase, matched to the budget line.</li>
<li><strong>Proof of payment</strong>, such as bank statements or card statements, showing the invoice was actually paid.</li>
<li><strong>Timesheets</strong> for staff whose wages are charged to the grant, showing hours on grant activities.</li>
<li><strong>Progress reports and deliverables</strong> submitted to the grantor, with submission dates.</li>
<li><strong>Your own invoices</strong> if the grant reimburses work you bill, numbered consistently so they match your books.</li>
</ul>
<p>For federal awards, the general rule in the Uniform Guidance is to keep records for three years from the date you submit the final financial report, though some awards and audits extend that period. Store everything digitally in one folder per award. If you bill a grantor or a program partner for completed milestones, our <a href="/invoice-generator">invoice generator</a> creates numbered PDF invoices you can attach to reimbursement requests.</p>

<h2>Managing grant money once you win</h2>
<p>Track grant spending separately, with a dedicated class or tag in your bookkeeping. Save every vendor invoice, receipt and payment confirmation, and match them to the approved budget lines. Our guide to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> shows a simple system. If the grant leads to selling to federal agencies, our guide on <a href="/blog/how-to-invoice-the-federal-government">invoicing the federal government</a> explains how payment works there, including SAM.gov and the Invoice Processing Platform.</p>
<p>This article is general information, not legal, tax or financial advice. Program rules change, so confirm details with the grantor.</p>

<p>Small business grants are real, but they reward businesses with a clear project, solid records and patience. Combine grants with loans and your own revenue rather than waiting for one. When you bill customers or document grant-funded work, our <a href="/invoice-generator">free invoice generator</a> creates a clean PDF in your browser with no sign-up, and our <a href="/invoice-templates">invoice templates</a> give you a ready layout.</p>
`,
  },
  {
    slug: "business-credit-card",
    title: "Business Credit Card: How It Works, Pros, Cons and Uses",
    description:
      "Business credit card guide: how they work, personal guarantees, credit reporting, rewards, fees and when a line of credit is better, with a cost example.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["business-line-of-credit", "business-credit-score", "net-30-vendor-accounts"],
    faqs: [
      {
        q: "Can I get a business credit card as a sole proprietor?",
        a: "Yes. Most issuers accept sole proprietors and freelancers, and you can usually apply using your Social Security number in place of an EIN, listing your business name or your own name. The issuer will check your personal credit, because a sole proprietor's card is backed by a personal guarantee. Having a separate card still helps by keeping business spending away from personal purchases.",
      },
      {
        q: "Does a business credit card affect my personal credit score?",
        a: "Applying usually triggers a personal credit inquiry. After that, it depends on the issuer: some report business card activity to personal credit bureaus only if the account becomes seriously delinquent, while others report all activity. Because of the personal guarantee, missed payments can damage your personal credit either way. Ask the issuer how it reports before you apply if keeping utilization off your personal report matters.",
      },
      {
        q: "What is the difference between a business credit card and a corporate card?",
        a: "A business credit card is designed for small businesses and is usually approved on the owner's personal credit with a personal guarantee. A corporate card is issued to larger companies based on the company's own financials and revenue, often with corporate liability instead of personal liability, plus central billing and expense controls. Some fintech issuers offer corporate-style cards to startups based on cash balances in place of personal credit.",
      },
      {
        q: "Can I use a business credit card for personal expenses?",
        a: "You should not. Mixing personal spending on a business card makes bookkeeping harder, can weaken the separation between you and an LLC or corporation, and creates problems at tax time when you must separate deductible from personal costs. Many card agreements also say the card is for business purposes. If a personal charge happens by mistake, repay it from personal funds and record it as an owner draw.",
      },
      {
        q: "Are business credit card rewards taxable?",
        a: "Cash back and points earned from spending are generally treated by the IRS as a rebate or reduction in the price of what you bought, not as taxable income. Sign-up bonuses that do not require spending, or bonuses for opening an account, can be treated differently. For businesses, rebates may reduce the deductible cost of expenses. Confirm the treatment with your tax preparer, since this is general information.",
      },
      {
        q: "Can I pay suppliers with a business credit card?",
        a: "Often, yes. Many suppliers accept cards directly, and bill pay services can charge your card and send a check or ACH to vendors that do not, usually for a fee of a few percent. That fee can cancel out your rewards. Paying by card can stretch your cash for up to about 50 days when you pay the statement in full, which is useful but should not turn into carried debt.",
      },
      {
        q: "How many business credit cards should I have?",
        a: "Most small businesses do well with one primary card, plus employee cards with limits if staff make purchases. A second card can make sense for a different rewards category, a backup if one card is frozen for fraud, or a lower-rate option for financing a purchase. More cards add annual fees, accounts to reconcile and statements to track, so add them only for a clear reason.",
      },
      {
        q: "What credit score do I need for a business credit card?",
        a: "Issuers set their own standards, and most small business cards rely heavily on the owner's personal credit. Cards with premium rewards generally look for good to excellent personal credit, while secured business cards or cards from some fintech issuers can work for owners who are still building credit. Revenue, time in business and existing debts also affect approval and the credit limit you receive.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A business credit card is a revolving credit account issued in your business's name, used for business purchases and repaid monthly. Most small business cards require the owner's personal guarantee, report to business credit bureaus and offer rewards or employee cards. Pay the full statement balance each month and the card is low cost; carry a balance and it becomes expensive financing.</p>

<p>For most small businesses, a business credit card is the first credit line they ever open. It can keep spending organized, earn rewards on costs you already pay, and stretch your cash between paying suppliers and getting paid by clients. It can also quietly become high-interest debt. This guide explains how business credit cards work, how they differ from personal cards and from a line of credit, a worked cost example, and how to use one well.</p>

<h2>What is a business credit card and how does it work?</h2>
<p>A business credit card works like a personal card: the issuer gives you a credit limit, you make purchases, you receive a monthly statement, and you pay at least the minimum by the due date. If you pay the full statement balance by the due date, you usually pay no interest on purchases because of the grace period. If you carry a balance, interest accrues at the card's APR.</p>
<p>The differences are in who is responsible and what is reported:</p>
<ul>
<li><strong>Personal guarantee:</strong> most small business cards make the owner personally liable for the debt, even if the account is in an LLC's name.</li>
<li><strong>Credit reporting:</strong> activity is reported to business credit bureaus such as Dun &amp; Bradstreet, Experian Business and Equifax Business, which helps build your <a href="/blog/business-credit-score">business credit score</a>. Reporting to personal bureaus varies by issuer.</li>
<li><strong>Employee cards:</strong> you can issue cards to staff with their own limits, all billed to one account.</li>
<li><strong>Consumer protections:</strong> many protections in the federal CARD Act of 2009, such as limits on certain rate increases, apply to consumer cards, not to most business cards. Some issuers extend them voluntarily.</li>
</ul>

<h2>Types of business credit cards</h2>
<table><thead><tr><th>Type</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Cash back card</td><td>Flat or category-based cash back on spending</td><td>Simple rewards without travel</td></tr>
<tr><td>Travel rewards card</td><td>Points or miles, often with an annual fee and travel perks</td><td>Owners who travel for work</td></tr>
<tr><td>0% intro APR card</td><td>No interest on purchases for a promotional period</td><td>Financing a planned purchase you can repay in time</td></tr>
<tr><td>Charge card</td><td>No preset limit but balance must be paid in full each month</td><td>High spenders who never carry a balance</td></tr>
<tr><td>Secured business card</td><td>Credit limit backed by a cash deposit</td><td>Owners building or rebuilding credit</td></tr>
<tr><td>Corporate or fintech card</td><td>Approval based on company cash or revenue, often no personal guarantee</td><td>Funded startups and larger companies</td></tr>
</tbody></table>

<h2>Business credit card vs line of credit: which is better?</h2>
<p>Both are revolving credit, but they serve different jobs. A card is a spending tool with a grace period. A <a href="/blog/business-line-of-credit">business line of credit</a> is a borrowing tool that deposits cash into your bank account, usually at a lower interest rate than a card's APR, with interest starting the day you draw.</p>
<table><thead><tr><th>Feature</th><th>Business credit card</th><th>Business line of credit</th></tr></thead><tbody>
<tr><td>Access to funds</td><td>Card purchases (cash advances are costly)</td><td>Cash transfers to your bank account</td></tr>
<tr><td>Interest</td><td>None if paid in full; typically higher APR on balances</td><td>From the draw date; often a lower rate</td></tr>
<tr><td>Rewards</td><td>Often yes</td><td>No</td></tr>
<tr><td>Best use</td><td>Everyday expenses, travel, software, supplies</td><td>Payroll, rent, inventory, bridging slow-paying invoices</td></tr>
<tr><td>Can pay payroll or rent?</td><td>Usually not directly</td><td>Yes</td></tr>
</tbody></table>
<p>If your cash gap comes from clients paying late, also look at our comparison of <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a>.</p>

<h2>Worked example: the real cost of carrying a balance</h2>
<p>A small agency puts $10,000 of equipment on a business card, then pays it down over three months. The rates are illustrative, chosen to show the math rather than quote any lender.</p>
<table><thead><tr><th>Option</th><th>Assumptions</th><th>Approximate interest over 3 months</th></tr></thead><tbody>
<tr><td>Business card, carried balance</td><td>24% APR (2% per month), average balance about $6,700</td><td>About $400</td></tr>
<tr><td>Line of credit</td><td>11% APR, same paydown, $100 draw fee</td><td>About $185 plus $100 fee, so $285</td></tr>
<tr><td>Business card, 0% intro APR</td><td>Paid off before promo ends</td><td>$0</td></tr>
<tr><td>Business card, paid in full by due date</td><td>Statement balance paid within grace period</td><td>$0</td></tr>
</tbody></table>
<p>Now consider rewards. If the agency puts $6,000 a month of regular expenses on a 2% cash back card and pays in full, it earns about $120 a month, or $1,440 a year, minus any annual fee. That gain disappears quickly if even one month's balance is carried at 24%. The rule is simple: rewards are only worth it if you pay in full.</p>

<h2>How to choose and use a business credit card: checklist</h2>
<ol>
<li><strong>Look at where you spend.</strong> Pull three months of expenses by category from your books; pick the card that rewards your biggest categories.</li>
<li><strong>Compare total cost.</strong> Annual fee, APR, foreign transaction fees, late fees and employee card fees.</li>
<li><strong>Check the guarantee and reporting.</strong> Ask whether the card reports to personal bureaus.</li>
<li><strong>Set up autopay for the full statement balance</strong> from your business checking account.</li>
<li><strong>Issue employee cards with limits</strong> and require receipts within a set number of days.</li>
<li><strong>Connect the card to your bookkeeping</strong> and reconcile monthly against the statement.</li>
<li><strong>Keep it business-only.</strong> One personal charge creates a cleanup job.</li>
<li><strong>Review once a year.</strong> If your spending pattern changed, the best card may have too.</li>
</ol>

<h2>How to apply for a business credit card</h2>
<p>Applications usually take minutes online. Have this information ready:</p>
<ul>
<li><strong>Business details:</strong> legal name, DBA if any, address, phone, industry, entity type and years in business.</li>
<li><strong>Tax ID:</strong> your EIN, or your Social Security number if you are a sole proprietor without one.</li>
<li><strong>Annual business revenue</strong> and estimated monthly card spending.</li>
<li><strong>Owner details:</strong> name, address, Social Security number, date of birth and personal income, because the issuer checks personal credit.</li>
<li><strong>Number of employees</strong> and whether you want employee cards.</li>
</ul>
<p>New businesses with little revenue can still qualify based on the owner's credit; report revenue honestly, because issuers may ask for bank statements or tax returns to verify it. If you are turned down, the issuer must give you the reasons or tell you how to request them, which shows you what to fix before applying again.</p>

<h2>Business credit card fees explained</h2>
<table><thead><tr><th>Fee</th><th>What it is</th><th>How to avoid or reduce it</th></tr></thead><tbody>
<tr><td>Annual fee</td><td>A yearly charge, from $0 on basic cards to several hundred dollars on premium cards</td><td>Choose a no-fee card unless rewards clearly exceed the fee</td></tr>
<tr><td>Interest (APR)</td><td>Charged on balances carried past the due date</td><td>Pay the full statement balance every month</td></tr>
<tr><td>Late fee</td><td>Charged when the minimum payment is late</td><td>Set autopay for at least the minimum</td></tr>
<tr><td>Cash advance fee</td><td>A percentage of each cash withdrawal, plus a higher APR</td><td>Use a line of credit for cash needs</td></tr>
<tr><td>Foreign transaction fee</td><td>A percentage of purchases in foreign currencies or from foreign merchants</td><td>Pick a card with no foreign transaction fee if you buy abroad</td></tr>
<tr><td>Employee card fee</td><td>Some premium cards charge per additional card</td><td>Check before issuing cards to every staff member</td></tr>
</tbody></table>

<h2>Managing employee cards and expense controls</h2>
<p>Employee cards save time compared with reimbursing out-of-pocket purchases, but only with clear rules. Set a spending limit per card, restrict merchant categories if your issuer allows it, and require a receipt and a short business purpose for every charge within a few days. Many issuers and expense apps let employees snap a photo of the receipt so it matches the transaction automatically. For one-off supplier payments or subscriptions, single-use <a href="/blog/virtual-cards-for-business">virtual cards for business</a> limit fraud risk because each number can be locked to one merchant or amount.</p>
<p>At month end, reconcile the card statement against receipts and code each charge to the right account. Our list of <a href="/blog/business-expense-categories">business expense categories</a> helps keep coding consistent, and our guide to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> shows a simple monthly routine.</p>

<h3>Do you need an LLC to get a business credit card?</h3>
<p>No. Sole proprietors can apply, as covered in the FAQs below. An LLC or corporation can help you build a separate business credit profile over time, but the personal guarantee means the owner is still on the hook for most small business cards.</p>

<h2>Common business credit card mistakes</h2>
<ul>
<li><strong>Using the card to cover a cash flow problem every month.</strong> If you cannot pay in full, the issue is collections or pricing, not credit. Our guide to <a href="/blog/cash-flow-management">cash flow management</a> covers fixes.</li>
<li><strong>Taking cash advances.</strong> They usually carry a fee, a higher APR and no grace period.</li>
<li><strong>Ignoring card processing fees on bill pay services</strong>, which can exceed rewards.</li>
<li><strong>Mixing personal and business charges</strong>, which complicates deductions and weakens LLC separation.</li>
<li><strong>Losing receipts.</strong> The statement shows the amount, not what you bought; keep receipts for tax records.</li>
<li><strong>Maxing the limit.</strong> High utilization can lower credit scores even if you pay on time.</li>
</ul>

<h2>Using a business card alongside trade credit and invoicing</h2>
<p>Cards are one piece of a credit mix. <a href="/blog/net-30-vendor-accounts">Net 30 vendor accounts</a> give you 30 days to pay suppliers with no interest and help build business credit, and they work well for regular supplies. Use the card for purchases where suppliers do not offer terms, and a line of credit for larger gaps.</p>
<p>The other side of the equation is getting paid faster. Clear invoices with due dates and payment links shorten the time you need to float costs on credit. Our <a href="/invoice-generator">free invoice generator</a> helps you send professional invoices quickly, and our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> covers taking cards from your own customers.</p>
<p>This article is general information, not financial or tax advice. Card terms vary by issuer, so read the cardholder agreement before applying.</p>

<h2>Business credit cards and taxes</h2>
<p>A business card does not change what is deductible: the purchase is deductible if it is an ordinary and necessary business expense, whether you pay by card, check or bank transfer. A few points are specific to cards:</p>
<ul>
<li><strong>Timing:</strong> for cash-method taxpayers, an expense charged to a credit card is generally treated as paid on the date of the charge, not when you pay the card bill. A December purchase on a card paid in January is usually a December expense.</li>
<li><strong>Interest:</strong> interest on a card used only for business is generally deductible as a business expense. Interest on personal purchases is not, which is another reason to keep the card business-only.</li>
<li><strong>Fees:</strong> annual fees and late fees on a business card are generally deductible business costs.</li>
<li><strong>Records:</strong> the card statement shows date, merchant and amount, but you still need receipts or notes showing the business purpose, especially for meals and travel.</li>
</ul>
<p>This is general information, not tax advice. Your tax preparer can confirm how these rules apply to your business structure.</p>

<p>A business credit card is a useful tool when it simplifies spending, builds business credit and pays you rewards on costs you already have. Pay the statement in full, keep the card business-only and match it with good invoicing so clients pay on time. When you bill those clients, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a PDF built entirely in your browser.</p>
`,
  },
  {
    slug: "inventory-accounting",
    title: "Inventory Accounting: FIFO, LIFO and Weighted Average",
    description:
      "Inventory accounting explained: FIFO, LIFO, weighted average and specific ID with a worked example, perpetual vs periodic systems and IRS small business rules.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["cost-of-goods-sold", "inventory-turnover-ratio", "inventory-management-spreadsheet"],
    faqs: [
      {
        q: "Which inventory method is best for a small business?",
        a: "Many small businesses choose FIFO because it matches how most goods physically move, is accepted under both US GAAP and IFRS, and leaves the balance sheet close to current costs. Weighted average suits interchangeable goods such as fuel, grain or bulk materials. LIFO can reduce taxable income when costs rise but adds complexity and conformity rules. Businesses selling unique high-value items often use specific identification.",
      },
      {
        q: "Can I change my inventory method later?",
        a: "Yes, but not freely. For tax purposes, changing an inventory method is usually a change in accounting method that requires IRS consent, typically by filing Form 3115, and some changes qualify for automatic consent procedures. Under GAAP, a change must be justified as preferable and is applied retrospectively in most cases. Choose carefully at the start and talk to an accountant before switching.",
      },
      {
        q: "Is LIFO allowed under IFRS?",
        a: "No. IAS 2, the IFRS inventory standard, prohibits LIFO. It permits FIFO, weighted average cost and specific identification for items that are not ordinarily interchangeable. US GAAP allows LIFO, and US tax law allows it if you elect it on Form 970 and follow the LIFO conformity rule, which generally requires using LIFO in your financial reports to owners and lenders as well.",
      },
      {
        q: "What is inventory shrinkage and how is it recorded?",
        a: "Shrinkage is the difference between the inventory your records say you have and what a physical count finds, caused by theft, damage, spoilage, errors or vendor fraud. When you count, you adjust the inventory account down to the actual amount and record the difference as an expense, usually within cost of goods sold or as a separate shrinkage line. Regular cycle counts catch problems earlier.",
      },
      {
        q: "Do service businesses need inventory accounting?",
        a: "Usually not in the full sense. Pure service businesses have no goods for resale, although they may hold supplies that are expensed when bought or used. Businesses that mix services and parts, such as repair shops, HVAC contractors or salons that sell products, do hold inventory and need a method for valuing parts and products on hand at year end and for cost of goods sold.",
      },
      {
        q: "What is the lower of cost or net realizable value rule?",
        a: "Under US GAAP, inventory measured with FIFO or average cost must be written down when its net realizable value, the expected selling price minus costs to complete and sell, falls below cost. LIFO and retail method inventory use the older lower of cost or market test. The write-down is recorded as an expense in the period it happens, so obsolete or damaged stock is not overstated on the balance sheet.",
      },
      {
        q: "How often should I count inventory?",
        a: "At least once a year at year end, because your financial statements and tax return depend on ending inventory. Many businesses also run cycle counts, counting a portion of items every week or month, with high-value or fast-moving items counted more often. A perpetual system still needs physical counts to correct errors, theft and data entry mistakes. Record the count date and who performed it.",
      },
      {
        q: "Does the inventory method change my cash flow?",
        a: "Not directly, because you pay suppliers the same amount regardless of the method. The method changes how costs are split between cost of goods sold and ending inventory, which changes reported profit and therefore income tax. In periods of rising prices, LIFO generally lowers taxable income and tax payments compared with FIFO, which improves after-tax cash flow, while FIFO shows higher profit.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Inventory accounting is how a business values the goods it holds for sale and decides which costs move to cost of goods sold when items are sold. The main inventory costing methods are FIFO (first in, first out), LIFO (last in, first out), weighted average and specific identification. The choice changes reported profit, taxes and the balance sheet when purchase prices change.</p>

<p>If you sell physical products, inventory is often your biggest asset and your biggest expense. Getting inventory accounting right decides whether your gross margin is real, whether your tax return is correct, and whether a lender trusts your balance sheet. This guide explains each inventory costing method with one worked example, compares perpetual and periodic systems, covers the IRS rules for small businesses, and lists the mistakes that distort profit.</p>

<h2>What is inventory accounting?</h2>
<p>Inventory accounting tracks the cost of goods you buy or make for resale, from purchase through sale. It answers two questions every period:</p>
<ul>
<li><strong>What is the cost of the goods we sold?</strong> This becomes <a href="/blog/cost-of-goods-sold">cost of goods sold (COGS)</a> on the <a href="/blog/profit-and-loss-statement">profit and loss statement</a>.</li>
<li><strong>What is the cost of the goods still on hand?</strong> This becomes ending inventory, a current asset on the <a href="/blog/balance-sheet-small-business">balance sheet</a>.</li>
</ul>
<p>The basic relationship is: <strong>Beginning inventory + Purchases - Ending inventory = Cost of goods sold</strong>. Inventory cost includes the purchase price plus costs to get goods ready for sale, such as inbound freight, duties and, for manufacturers, materials, direct labor and allocated overhead. Outbound shipping to customers is a selling expense, not inventory cost.</p>

<h2>What are the main inventory costing methods?</h2>
<table><thead><tr><th>Method</th><th>Which costs go to COGS first</th><th>Allowed under</th><th>Typical users</th></tr></thead><tbody>
<tr><td>FIFO</td><td>Oldest costs</td><td>US GAAP, IFRS, IRS</td><td>Most retailers, food, perishables, ecommerce</td></tr>
<tr><td>LIFO</td><td>Newest costs</td><td>US GAAP and IRS (with Form 970 election); not IFRS</td><td>US businesses with steadily rising costs, such as some distributors and manufacturers</td></tr>
<tr><td>Weighted average</td><td>Average cost of all units available</td><td>US GAAP, IFRS, IRS</td><td>Interchangeable goods: fuel, grain, chemicals, bulk parts</td></tr>
<tr><td>Specific identification</td><td>Actual cost of each unit sold</td><td>US GAAP, IFRS, IRS</td><td>Cars, jewelry, art, custom furniture, high-value serialized items</td></tr>
</tbody></table>
<p>Note that the method is a cost flow assumption. Under LIFO you can still physically ship your oldest stock first; the method only decides which costs are charged to COGS.</p>

<h2>Worked example: FIFO vs LIFO vs weighted average</h2>
<p>A small online store sells one product, a ceramic mug set. During the year:</p>
<table><thead><tr><th>Date</th><th>Event</th><th>Units</th><th>Cost per unit</th><th>Total cost</th></tr></thead><tbody>
<tr><td>Jan 1</td><td>Beginning inventory</td><td>100</td><td>$10.00</td><td>$1,000</td></tr>
<tr><td>Apr 10</td><td>Purchase</td><td>200</td><td>$12.00</td><td>$2,400</td></tr>
<tr><td>Sep 5</td><td>Purchase</td><td>150</td><td>$14.00</td><td>$2,100</td></tr>
<tr><td></td><td><strong>Goods available for sale</strong></td><td><strong>450</strong></td><td></td><td><strong>$5,500</strong></td></tr>
</tbody></table>
<p>The store sold 300 units during the year at $25 each, for $7,500 of revenue, leaving 150 units at year end. Using a periodic system, the three methods give:</p>
<table><thead><tr><th></th><th>FIFO</th><th>LIFO</th><th>Weighted average</th></tr></thead><tbody>
<tr><td>COGS calculation</td><td>100 x $10 + 200 x $12</td><td>150 x $14 + 150 x $12</td><td>300 x $12.2222 ($5,500 / 450)</td></tr>
<tr><td>Cost of goods sold</td><td>$3,400</td><td>$3,900</td><td>$3,666.67</td></tr>
<tr><td>Ending inventory</td><td>$2,100 (150 x $14)</td><td>$1,600 (50 x $12 + 100 x $10)</td><td>$1,833.33</td></tr>
<tr><td>Check: COGS + ending</td><td>$5,500</td><td>$5,500</td><td>$5,500</td></tr>
<tr><td>Revenue</td><td>$7,500</td><td>$7,500</td><td>$7,500</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$4,100</strong></td><td><strong>$3,600</strong></td><td><strong>$3,833.33</strong></td></tr>
<tr><td>Gross margin</td><td>54.7%</td><td>48.0%</td><td>51.1%</td></tr>
</tbody></table>
<p>Same sales, same purchases, same cash, but gross profit differs by $500 between FIFO and LIFO. Because costs rose during the year, LIFO charges the expensive recent units to COGS, lowering taxable profit. At an illustrative 21% corporate tax rate, that $500 difference is $105 of tax deferred this year. FIFO shows higher profit and a balance sheet inventory value closer to current replacement cost. When prices fall, the effects reverse.</p>
<p>Your method also affects ratios like gross margin and <a href="/blog/inventory-turnover-ratio">inventory turnover</a>, so compare businesses only when they use the same method.</p>

<h2>Perpetual vs periodic inventory systems</h2>
<p>The costing method is separate from how often you update the records:</p>
<ul>
<li><strong>Periodic system:</strong> you record purchases during the period and calculate COGS at the end after a physical count. Simple, common with spreadsheets, but you do not know COGS or stock levels in real time.</li>
<li><strong>Perpetual system:</strong> every sale and purchase updates inventory and COGS immediately, usually through point-of-sale, ecommerce or accounting software with inventory tracking. Better control, reorder alerts and faster month-end.</li>
</ul>
<p>Under a perpetual system, LIFO and weighted average can produce slightly different numbers than in the periodic example above, because costs are assigned at the moment of each sale (moving average instead of an annual average). FIFO gives the same result under both. A simple <a href="/blog/inventory-management-spreadsheet">inventory management spreadsheet</a> works as a periodic system for a small catalog.</p>

<h2>How the IRS treats inventory for small businesses</h2>
<p>Tax rules for inventory follow the Internal Revenue Code and IRS Publication 538. Key points as of 2026:</p>
<ul>
<li><strong>Small business exception:</strong> businesses that meet the gross receipts test (average annual gross receipts of $32 million or less for the prior three years, for tax years beginning in 2026, per the inflation adjustment in Rev. Proc. 2025-32) can use the cash method and are not required to keep inventories in the traditional way. They may treat inventory as non-incidental materials and supplies or follow the method used in their books.</li>
<li><strong>LIFO election:</strong> made by filing Form 970 with the tax return for the first year LIFO is used.</li>
<li><strong>LIFO conformity rule:</strong> if you use LIFO for tax, you generally must also use it in financial statements given to owners, creditors and lenders.</li>
<li><strong>Method changes:</strong> generally require filing Form 3115.</li>
</ul>
<p>See <a href="https://www.irs.gov/publications/p538" target="_blank" rel="noopener noreferrer">IRS Publication 538, Accounting Periods and Methods</a>, for details. This is general information, not tax advice; small businesses should confirm their eligibility and method with a tax professional.</p>

<h2>How to set up inventory accounting: step by step</h2>
<ol>
<li><strong>Decide what counts as inventory.</strong> Goods for resale, raw materials, work in process and finished goods; not office supplies.</li>
<li><strong>Choose a costing method</strong> (FIFO is the usual default) and document it.</li>
<li><strong>Choose periodic or perpetual tracking</strong> based on SKU count and sales volume.</li>
<li><strong>Capitalize the right costs:</strong> purchase price, inbound freight, duties and handling.</li>
<li><strong>Record purchases</strong> from supplier invoices and match them to purchase orders and receiving records.</li>
<li><strong>Record sales</strong> with COGS, using <a href="/blog/journal-entries">journal entries</a> such as debit COGS, credit inventory.</li>
<li><strong>Count physically</strong> at least at year end, plus cycle counts during the year.</li>
<li><strong>Adjust for shrinkage and obsolescence</strong>, and write down stock whose value has fallen below cost.</li>
<li><strong>Review margins monthly</strong> by product to catch pricing or cost errors.</li>
</ol>

<h2>Journal entries for inventory: a simple example</h2>
<p>Using the FIFO numbers from the mug example under a perpetual system, the store would record its purchases and sales like this (amounts shown for the April purchase and a sale of 100 units at $25):</p>
<table><thead><tr><th>Transaction</th><th>Debit</th><th>Credit</th><th>Amount</th></tr></thead><tbody>
<tr><td>Buy 200 units on account at $12</td><td>Inventory</td><td>Accounts payable</td><td>$2,400</td></tr>
<tr><td>Sell 100 units on account at $25</td><td>Accounts receivable</td><td>Sales revenue</td><td>$2,500</td></tr>
<tr><td>Record cost of the 100 units sold (oldest layer, $10 each)</td><td>Cost of goods sold</td><td>Inventory</td><td>$1,000</td></tr>
<tr><td>Year-end count finds 2 units missing at $14</td><td>Inventory shrinkage (COGS)</td><td>Inventory</td><td>$28</td></tr>
</tbody></table>
<p>In a periodic system, purchases go to a Purchases account during the year and a closing entry sets ending inventory and COGS after the count. Either way, the totals must reconcile: the inventory account in your <a href="/blog/general-ledger">general ledger</a> should equal the value of your counted stock.</p>

<h2>Inventory for manufacturers: raw materials, WIP and finished goods</h2>
<p>Businesses that make products track three inventory stages:</p>
<ul>
<li><strong>Raw materials:</strong> inputs not yet used, such as wood, fabric or ingredients.</li>
<li><strong>Work in process (WIP):</strong> partly finished goods, including materials, direct labor and overhead applied so far.</li>
<li><strong>Finished goods:</strong> completed products ready to sell.</li>
</ul>
<p>Overhead, such as factory rent, equipment depreciation and utilities, is allocated to units produced, usually by labor hours or machine hours. Under the uniform capitalization (UNICAP) rules in Section 263A, larger businesses must also capitalize certain indirect costs into inventory for tax purposes; small businesses meeting the gross receipts test are exempt. If you depreciate production equipment, our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> explains the amounts you allocate.</p>

<h2>Lower of cost or net realizable value: an example</h2>
<p>Suppose 40 of the store's mugs, carried at $14 each ($560), have a printing defect and can only be sold for $9 each, with $1 per unit in selling costs. Net realizable value is $8 per unit, or $320. The store writes inventory down by $240 ($560 - $320) and records the loss, usually in COGS. Under US GAAP the write-down is not reversed if prices recover later. Checking for slow-moving and damaged stock each quarter keeps both your balance sheet and your margins honest.</p>

<h2>How inventory affects working capital and ratios</h2>
<p>Inventory is part of current assets, so it directly affects <a href="/blog/working-capital">working capital</a> and the current ratio, while the quick ratio excludes it because inventory is harder to turn into cash. Holding too much stock ties up cash that could pay suppliers or payroll; holding too little loses sales. Track days of inventory on hand (365 divided by inventory turnover) alongside gross margin by product, and reorder based on actual sell-through rather than gut feel.</p>

<h2>Common inventory accounting mistakes</h2>
<ul>
<li><strong>Expensing all purchases immediately</strong> when you are required to keep inventories, which understates profit in growth years and overstates it later.</li>
<li><strong>Leaving out inbound freight and duties</strong>, which makes margins look better than they are. Tariffs matter here too.</li>
<li><strong>Skipping the year-end count</strong>, so ending inventory is a guess.</li>
<li><strong>Ignoring dead stock</strong> that should be written down.</li>
<li><strong>Switching methods casually</strong> without IRS consent.</li>
<li><strong>Pricing from purchase cost only</strong> instead of landed cost. Our guide on <a href="/blog/how-to-price-a-product">how to price a product</a> uses landed cost.</li>
</ul>

<h2>Inventory accounting and your invoices</h2>
<p>Inventory data and invoices are linked on both sides. Supplier invoices give you the cost layers that FIFO, LIFO and average methods depend on, so keep them with receiving records. Sales invoices record quantities shipped, which drive COGS in a perpetual system. Use consistent product names and SKUs on both. Our <a href="/invoice-generator">free invoice generator</a> lets you add SKU-style item codes and quantities to each line, and our guide to <a href="/blog/how-to-calculate-profit-margin">calculating profit margin</a> shows how to turn the results into pricing decisions.</p>

<h2>Which inventory method suits ecommerce and multichannel sellers?</h2>
<p>Online sellers often hold the same product in several places: a home garage, a third-party warehouse and a marketplace fulfillment center. FIFO with a perpetual system is usually the practical choice, because ecommerce platforms and inventory apps track stock by SKU and location and most support FIFO costing. Add landed costs to each purchase batch, including freight to the warehouse, duties and any prep fees, so marketplace fees are the only costs left to deduct from the selling price. Reconcile the platform's inventory reports with your own records monthly, because returns, damaged units and lost units in a warehouse are easy to miss until year end.</p>

<p>Inventory accounting does not need to be complicated: pick a method that fits your goods, track costs consistently, count regularly and review margins. The method you choose shapes reported profit and taxes, so set it up deliberately. When you sell that inventory, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a clean PDF built right in your browser.</p>
`,
  },
];
