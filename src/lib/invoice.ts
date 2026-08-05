import { z } from "zod";

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface Party {
  name: string;
  email: string;
  address: string;
  phone: string;
  taxId: string;
}

export interface InvoiceData {
  templateSlug: string;
  currency: string;
  logo: string | null;
  signature: string | null;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  poNumber: string;
  from: Party;
  to: Party;
  items: LineItem[];
  taxRate: number;
  discount: number;
  discountType: "percent" | "fixed";
  shipping: number;
  amountPaid: number;
  notes: string;
  terms: string;
}

export const CURRENCIES = [
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "INR", symbol: "₹", label: "Indian Rupee" },
  { code: "AUD", symbol: "A$", label: "Australian Dollar" },
  { code: "CAD", symbol: "C$", label: "Canadian Dollar" },
  { code: "AED", symbol: "AED ", label: "UAE Dirham" },
  { code: "PKR", symbol: "₨", label: "Pakistani Rupee" },
] as const;

export const uid = () => Math.random().toString(36).slice(2, 10);

const today = () => new Date().toISOString().slice(0, 10);
const inDays = (days: number) =>
  new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);

export function createDefaultInvoice(): InvoiceData {
  return {
    templateSlug: "modern",
    currency: "USD",
    logo: null,
    signature: null,
    invoiceNumber: `${new Date().getFullYear()}-0001`,
    issueDate: today(),
    dueDate: inDays(14),
    poNumber: "",
    from: {
      name: "Your Business Ltd",
      email: "billing@yourbusiness.com",
      address: "12 Market Street\nAustin, TX 78701",
      phone: "",
      taxId: "",
    },
    to: {
      name: "Client Company Inc",
      email: "accounts@clientcompany.com",
      address: "480 Harbour Road\nSeattle, WA 98101",
      phone: "",
      taxId: "",
    },
    items: [
      { id: uid(), description: "Website design — discovery & wireframes", quantity: 1, rate: 1200 },
      { id: uid(), description: "Frontend development (hours)", quantity: 18, rate: 85 },
    ],
    taxRate: 8.25,
    discount: 0,
    discountType: "percent",
    shipping: 0,
    amountPaid: 0,
    notes: "Thank you for your business. Payment via bank transfer or card.",
    terms: "Net 14. Late payments incur 2% interest per month.",
  };
}

export interface Totals {
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  shipping: number;
  total: number;
  balanceDue: number;
}

export function computeTotals(d: InvoiceData): Totals {
  const subtotal = d.items.reduce(
    (sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.rate) || 0),
    0,
  );
  const discountAmount =
    d.discountType === "percent" ? (subtotal * (Number(d.discount) || 0)) / 100 : Number(d.discount) || 0;
  const taxable = Math.max(subtotal - discountAmount, 0);
  const taxAmount = (taxable * (Number(d.taxRate) || 0)) / 100;
  const shipping = Number(d.shipping) || 0;
  const total = taxable + taxAmount + shipping;
  return {
    subtotal,
    discountAmount,
    taxAmount,
    shipping,
    total,
    balanceDue: total - (Number(d.amountPaid) || 0),
  };
}

export function formatMoney(amount: number, currency: string) {
  const entry = CURRENCIES.find((c) => c.code === currency);
  const value = (Number.isFinite(amount) ? amount : 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${entry?.symbol ?? "$"}${value}`;
}

/* ---------------------------------- validation --------------------------------- */

const partySchema = (who: string) =>
  z.object({
    name: z.string().trim().min(2, `${who} name must be at least 2 characters.`).max(120),
    email: z
      .string()
      .trim()
      .max(255)
      .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
        message: `Enter a valid ${who.toLowerCase()} email address, or leave it blank.`,
      }),
    address: z.string().max(400).optional().default(""),
    phone: z.string().max(40).optional().default(""),
    taxId: z.string().max(60).optional().default(""),
  });

export const invoiceSchema = z
  .object({
    invoiceNumber: z
      .string()
      .trim()
      .min(1, "Add an invoice number — accounts teams reject invoices without one.")
      .max(40, "Invoice number must be 40 characters or fewer."),
    issueDate: z.string().min(1, "Choose an issue date."),
    dueDate: z.string().min(1, "Choose a due date."),
    from: partySchema("Your business"),
    to: partySchema("Client"),
    items: z
      .array(
        z.object({
          description: z.string().trim().max(300),
          quantity: z.number().min(0, "Quantity cannot be negative."),
          rate: z.number().min(0, "Rate cannot be negative."),
        }),
      )
      .min(1, "Add at least one line item."),
    taxRate: z.number().min(0, "Tax rate cannot be negative.").max(100, "Tax rate cannot exceed 100%."),
    discount: z.number().min(0, "Discount cannot be negative."),
    shipping: z.number().min(0, "Shipping cannot be negative."),
    amountPaid: z.number().min(0, "Amount paid cannot be negative."),
  })
  .superRefine((d, ctx) => {
    if (d.issueDate && d.dueDate && d.dueDate < d.issueDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dueDate"],
        message: "The due date cannot be before the issue date.",
      });
    }
    if (d.items.every((i) => i.description.trim() === "")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["items"],
        message: "Describe at least one line item so your client knows what they are paying for.",
      });
    }
  });

/** Returns a map of dotted field path -> human readable message. */
export function validateInvoice(d: InvoiceData): Record<string, string> {
  const result = invoiceSchema.safeParse(d);
  if (result.success) return {};
  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".") || "form";
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

/* ---------------------------------- persistence -------------------------------- */

export const DRAFT_KEY = "invoiceforge:draft:v1";

export function loadDraft(): InvoiceData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<InvoiceData>;
    const base = createDefaultInvoice();
    return {
      ...base,
      ...parsed,
      from: { ...base.from, ...(parsed.from ?? {}) },
      to: { ...base.to, ...(parsed.to ?? {}) },
      items:
        Array.isArray(parsed.items) && parsed.items.length
          ? parsed.items.map((i) => ({ id: i.id ?? uid(), description: i.description ?? "", quantity: Number(i.quantity) || 0, rate: Number(i.rate) || 0 }))
          : base.items,
    };
  } catch {
    return null;
  }
}

export function saveDraft(data: InvoiceData) {
  try {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function clearDraft() {
  try {
    window.localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}
