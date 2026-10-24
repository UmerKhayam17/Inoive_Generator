/** Unique per-template extras for detail pages — reduces “boilerplate farm” signals. */
export type TemplateExtra = {
  scenario: string;
  lineItemExamples: string[];
  fieldsToInclude: string[];
  commonMistakes: string[];
};

export const TEMPLATE_EXTRAS: Record<string, TemplateExtra> = {
  modern: {
    scenario:
      "A freelance UX designer invoices a SaaS startup for a completed discovery phase (40% of a fixed project). The client’s AP team needs a clear PO reference and a due date in Net 14.",
    lineItemExamples: [
      "Discovery workshop (1 day)",
      "Wireframes (v1–v3): fixed package",
      "Stakeholder playback deck",
    ],
    fieldsToInclude: ["PO / reference", "Milestone name", "Bank transfer details", "Net terms"],
    commonMistakes: [
      "Vague lines like “Design work” with no date range",
      "Forgetting the milestone percentage agreed in the proposal",
    ],
  },
  minimal: {
    scenario:
      "A photographer bills a brand for a half-day shoot plus image licensing. The invoice must feel like stationery, not a retail receipt, while still showing usage rights clearly.",
    lineItemExamples: [
      "Half-day studio shoot",
      "Retouched selects (12 images)",
      "Web usage licence (12 months)",
    ],
    fieldsToInclude: ["Licence / usage notes", "Shot date", "Delivery folder link (in notes)"],
    commonMistakes: [
      "Mixing creative fees and expenses on one vague line",
      "Omitting licence duration so the client assumes perpetual rights",
    ],
  },
  corporate: {
    scenario:
      "A staffing supplier invoices a multinational against a purchase order for August contractor hours. AP will reject anything missing the PO and cost centre.",
    lineItemExamples: [
      "Contractor hours: Week 1 (cost centre 4402)",
      "Contractor hours: Week 2",
      "Platform / admin fee",
    ],
    fieldsToInclude: ["PO number", "Cost centre", "Legal entity names", "Tax registration IDs"],
    commonMistakes: [
      "Using the hiring manager’s nickname instead of the legal buyer name",
      "Leaving PO blank when the MSA requires one",
    ],
  },
  elegant: {
    scenario:
      "An interior designer issues a 50% deposit invoice before procurement. The client expects the same refined tone as the mood boards already shared.",
    lineItemExamples: [
      "Design fee: concept package",
      "Procurement deposit: furnishings",
      "Site visit: weekend surcharge",
    ],
    fieldsToInclude: ["Deposit vs balance wording", "Project address", "Non-refundable deposit note"],
    commonMistakes: [
      "Hiding the deposit amount in a long paragraph of notes",
      "Low-resolution logos that look cheap on a refined layout",
    ],
  },
  blue: {
    scenario:
      "A local trades business invoices a homeowner for labour and materials after a bathroom install. Familiar blue layout reduces “is this legit?” hesitation.",
    lineItemExamples: ["Labour: 2 plumbers × 3 days", "Fixtures supplied", "Disposal / skip hire"],
    fieldsToInclude: ["Job address", "Warranty note", "Cash / bank payment options"],
    commonMistakes: [
      "Combining labour and materials so the homeowner cannot see mark-up",
      "No job address when the client has multiple properties",
    ],
  },
  dark: {
    scenario:
      "A product studio bills a client for a sprint of UI engineering. The PDF should feel modern on screen and still readable when printed greyscale for finance.",
    lineItemExamples: ["Sprint 14: frontend", "Design QA pass", "Bugfix buffer (4 h)"],
    fieldsToInclude: ["Sprint dates", "Repo / ticket references", "Hourly vs fixed line split"],
    commonMistakes: [
      "Neon accents that wash out in black-and-white print",
      "Bundling “misc engineering” without ticket IDs",
    ],
  },
  startup: {
    scenario:
      "An indie SaaS founder invoices an agency partner for monthly white-label seats. Soft branding keeps the invoice on-brand with the product UI.",
    lineItemExamples: ["White-label seats × 25", "Priority support add-on", "Onboarding call"],
    fieldsToInclude: ["Billing period", "Seat count", "Cancellation / prorate note"],
    commonMistakes: [
      "Missing the service period so renewals look like duplicate charges",
      "No tax ID when selling cross-border into VAT regions",
    ],
  },
  agency: {
    scenario:
      "A marketing agency invoices a retainer plus a one-off campaign production fee. The side rail keeps campaign codes visible without crowding the description column.",
    lineItemExamples: [
      "Monthly retainer: October",
      "Campaign production: Autumn launch",
      "Paid media management fee",
    ],
    fieldsToInclude: ["Campaign code", "Retainer period", "Media vs fees separation"],
    commonMistakes: [
      "Mixing pass-through ad spend with agency fees on one line",
      "No campaign code when the client runs multiple brands",
    ],
  },
  creative: {
    scenario:
      "A motion designer invoices for a 30-second brand film. Colour blocks help the PDF stand out in a creative director’s inbox without hiding the total.",
    lineItemExamples: ["Concept & storyboard", "Animation (30s)", "Music licence pass-through"],
    fieldsToInclude: ["Revision rounds included", "Delivery format", "Usage territory"],
    commonMistakes: [
      "Unlimited revisions implied by silence",
      "Forgetting to pass through stock / music costs separately",
    ],
  },
  classic: {
    scenario:
      "A wholesale supplier invoices a retailer for a mixed SKU order. Ruled layout matches what older AP clerks expect on paper files.",
    lineItemExamples: ["SKU-1044: cartons × 20", "SKU-2091: cartons × 8", "Freight"],
    fieldsToInclude: ["SKU codes", "Ship-to address", "Payment terms printed clearly"],
    commonMistakes: [
      "Fancy branding that clips when faxed or photocopied",
      "Missing SKUs so warehouse cannot match the packing list",
    ],
  },
  nordic: {
    scenario:
      "An architecture studio invoices stage 2: developed design. Calm layout matches the studio’s proposal aesthetic.",
    lineItemExamples: [
      "Stage 2: developed design",
      "Consultant coordination",
      "Printed drawing set",
    ],
    fieldsToInclude: ["Project name / address", "Stage reference", "Fee basis (fixed / % )"],
    commonMistakes: [
      "Billing a stage before contractual deliverables are listed",
      "Omitting the site address on multi-site clients",
    ],
  },
  emerald: {
    scenario:
      "A physiotherapy clinic invoices an insurer-friendly session package for a private client. Trustworthy green header; clear session counts.",
    lineItemExamples: ["Initial assessment", "Treatment sessions × 6", "Home exercise plan"],
    fieldsToInclude: ["Patient / client reference (non-sensitive)", "Session dates", "Clinic tax ID"],
    commonMistakes: [
      "Putting clinical notes on the invoice PDF",
      "Unclear package vs per-session pricing",
    ],
  },
  sunset: {
    scenario:
      "A boutique hotel invoices a corporate client for a two-night stay plus meeting-room hire. Warm layout fits hospitality branding.",
    lineItemExamples: ["Room nights × 2", "Meeting room (half day)", "Breakfast package"],
    fieldsToInclude: ["Guest names", "Confirmation number", "Check-in / check-out dates"],
    commonMistakes: [
      "Missing confirmation numbers AP needs to match the booking",
      "Bundling F&B without itemising for expense policies",
    ],
  },
  slate: {
    scenario:
      "A law firm invoices monthly advisory time with matter numbers. Formal split header helps partners and clients reconcile matters quickly.",
    lineItemExamples: [
      "Matter 2026-118: advisory hours",
      "Document review",
      "Disbursements: filings",
    ],
    fieldsToInclude: ["Matter number", "Fee earner initials", "Disbursements separate"],
    commonMistakes: [
      "Narrative that is too short for the client to approve hours",
      "Mixing multiple matters on one invoice without subtotals",
    ],
  },
  bold: {
    scenario:
      "A course creator invoices a corporate L&D team for a workshop plus seat licences. Strong corner accent makes the PDF hard to miss.",
    lineItemExamples: ["On-site workshop (1 day)", "Seat licences × 40", "Workbook PDF pack"],
    fieldsToInclude: ["Workshop date / venue", "Attendee cap", "Cancellation policy"],
    commonMistakes: [
      "No attendee cap leading to scope fights",
      "Licence period missing for digital seats",
    ],
  },
  lavender: {
    scenario:
      "A beauty studio invoices a bridal package deposit. Soft colour keeps the tone personal while totals stay obvious.",
    lineItemExamples: ["Bridal trial", "Day-of package deposit", "Assistant artist"],
    fieldsToInclude: ["Event date", "Deposit balance schedule", "Travel fee if any"],
    commonMistakes: [
      "Deposit amount unclear vs remaining balance",
      "No event date when the studio books multiple weddings a week",
    ],
  },
  ocean: {
    scenario:
      "A consultant invoices phase 2 of a process-improvement engagement. Side rail holds phase codes; descriptions stay readable.",
    lineItemExamples: [
      "Phase 2: process mapping",
      "Stakeholder interviews × 6",
      "Recommendations workshop",
    ],
    fieldsToInclude: ["Phase / SOW reference", "On-site vs remote days", "Expenses policy"],
    commonMistakes: [
      "Billing outside the SOW without a change note",
      "Lumping travel into professional fees",
    ],
  },
  mono: {
    scenario:
      "A contract developer invoices a fixed milestone for API work. Stark mono layout matches engineering culture and prints cleanly.",
    lineItemExamples: [
      "API milestone: auth service",
      "Integration tests",
      "Handover documentation",
    ],
    fieldsToInclude: ["Repo / PR references", "Acceptance criteria met", "Warranty window"],
    commonMistakes: [
      "No link between invoice lines and merged PRs",
      "Assuming “done” without written acceptance",
    ],
  },
};

export function getTemplateExtra(slug: string): TemplateExtra | undefined {
  return TEMPLATE_EXTRAS[slug];
}
