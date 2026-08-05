import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Check,
  Download,
  Loader2,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { AdSlot } from "@/components/layout/AdSlot";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InvoicePreview, PAGE_WIDTH } from "@/components/invoice/InvoicePreview";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { exportInvoicePdf, safeFileName } from "@/lib/pdf";
import {
  CURRENCIES,
  clearDraft,
  computeTotals,
  createDefaultInvoice,
  formatMoney,
  loadDraft,
  saveDraft,
  uid,
  validateInvoice,
  type InvoiceData,
  type Party,
} from "@/lib/invoice";

const TITLE = `Free Invoice Generator — Live Preview & Instant PDF | ${SITE.name}`;
const DESCRIPTION =
  "Fill in your details, add line items and download a print-ready PDF invoice. Live calculations, logo and signature upload, 10 templates and automatic local autosave.";

export const Route = createFileRoute("/invoice-generator")({
  component: GeneratorPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/invoice-generator" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/invoice-generator" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: `${SITE.name} Invoice Generator`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any (web browser)",
          description: DESCRIPTION,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

const MAX_IMAGE_BYTES = 1_500_000;

function readImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.readAsDataURL(file);
  });
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p className="mt-1 flex items-start gap-1.5 text-xs font-medium text-destructive">
      <AlertCircle className="mt-px size-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function GeneratorPage() {
  const [data, setData] = useState<InvoiceData>(() => createDefaultInvoice());
  const [hydrated, setHydrated] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showErrors, setShowErrors] = useState(false);
  const [exporting, setExporting] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  /* restore autosaved draft */
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setData(draft);
      toast.success("Draft restored", { description: "We picked up where you left off." });
    }
    setHydrated(true);
  }, []);

  /* autosave (debounced) */
  useEffect(() => {
    if (!hydrated) return;
    const id = window.setTimeout(() => {
      if (saveDraft(data)) setSavedAt(new Date());
    }, 600);
    return () => window.clearTimeout(id);
  }, [data, hydrated]);

  /* live validation once the user has tried to export */
  useEffect(() => {
    if (showErrors) setErrors(validateInvoice(data));
  }, [data, showErrors]);

  const totals = useMemo(() => computeTotals(data), [data]);
  const money = (n: number) => formatMoney(n, data.currency);

  const patch = useCallback((partial: Partial<InvoiceData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const patchParty = (which: "from" | "to", field: keyof Party, value: string) =>
    setData((prev) => ({ ...prev, [which]: { ...prev[which], [field]: value } }));

  const patchItem = (id: string, field: "description" | "quantity" | "rate", value: string) =>
    setData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? { ...item, [field]: field === "description" ? value : Number(value) || 0 }
          : item,
      ),
    }));

  const addItem = () =>
    setData((prev) => ({
      ...prev,
      items: [...prev.items, { id: uid(), description: "", quantity: 1, rate: 0 }],
    }));

  const removeItem = (id: string) =>
    setData((prev) => ({
      ...prev,
      items: prev.items.length > 1 ? prev.items.filter((i) => i.id !== id) : prev.items,
    }));

  const uploadImage = async (kind: "logo" | "signature", file?: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("That file isn't an image", { description: "Use a PNG, JPG or SVG file." });
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      toast.error("Image is too large", { description: "Please use a file under 1.5 MB." });
      return;
    }
    try {
      patch({ [kind]: await readImage(file) } as Partial<InvoiceData>);
      toast.success(kind === "logo" ? "Logo added" : "Signature added");
    } catch {
      toast.error("Could not read that image. Try another file.");
    }
  };

  const resetAll = () => {
    clearDraft();
    setData(createDefaultInvoice());
    setErrors({});
    setShowErrors(false);
    toast.success("Invoice reset", { description: "Your saved draft was cleared." });
  };

  const download = async () => {
    setShowErrors(true);
    const found = validateInvoice(data);
    setErrors(found);
    const count = Object.keys(found).length;
    if (count > 0) {
      toast.error(`${count} field${count > 1 ? "s" : ""} need attention`, {
        description: Object.values(found)[0],
      });
      document.querySelector("[data-invalid='true']")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    const node = documentRef.current;
    if (!node) return;
    setExporting(true);
    try {
      await exportInvoicePdf(node, safeFileName(data.invoiceNumber, data.to.name));
      trackEvent("invoice_pdf_download", { template: data.templateSlug, currency: data.currency });
      toast.success("PDF downloaded", { description: "Check your downloads folder." });
    } catch (error) {
      console.error(error);
      toast.error("PDF export failed", { description: "Please try again in a moment." });
    } finally {
      setExporting(false);
    }
  };

  const invalid = (key: string) => showErrors && Boolean(errors[key]);

  const partyFields = (which: "from" | "to", heading: string) => (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {heading}
      </h2>
      <div className="mt-4 grid gap-4">
        <div data-invalid={invalid(`${which}.name`)}>
          <Label htmlFor={`${which}-name`}>Name *</Label>
          <Input
            id={`${which}-name`}
            value={data[which].name}
            maxLength={120}
            aria-invalid={invalid(`${which}.name`)}
            onChange={(e) => patchParty(which, "name", e.target.value)}
          />
          {showErrors && <FieldError message={errors[`${which}.name`]} />}
        </div>
        <div data-invalid={invalid(`${which}.email`)}>
          <Label htmlFor={`${which}-email`}>Email</Label>
          <Input
            id={`${which}-email`}
            type="email"
            value={data[which].email}
            maxLength={255}
            aria-invalid={invalid(`${which}.email`)}
            onChange={(e) => patchParty(which, "email", e.target.value)}
          />
          {showErrors && <FieldError message={errors[`${which}.email`]} />}
        </div>
        <div>
          <Label htmlFor={`${which}-address`}>Address</Label>
          <Textarea
            id={`${which}-address`}
            rows={3}
            maxLength={400}
            value={data[which].address}
            onChange={(e) => patchParty(which, "address", e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor={`${which}-phone`}>Phone</Label>
            <Input
              id={`${which}-phone`}
              value={data[which].phone}
              maxLength={40}
              onChange={(e) => patchParty(which, "phone", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor={`${which}-tax`}>Tax / VAT ID</Label>
            <Input
              id={`${which}-tax`}
              value={data[which].taxId}
              maxLength={60}
              onChange={(e) => patchParty(which, "taxId", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Invoice generator" }]} />

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">Invoice generator</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Everything calculates live and autosaves to this browser. When it looks right, download
            the PDF — the export always matches the template shown in the preview.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {savedAt ? (
              <>
                <Check className="size-3.5 text-primary" aria-hidden="true" /> Draft saved{" "}
                {savedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </>
            ) : (
              "Autosave on"
            )}
          </span>
          <Button variant="outline" size="sm" onClick={resetAll}>
            <RotateCcw className="mr-1 size-3.5" aria-hidden="true" /> Reset
          </Button>
          <Button size="sm" onClick={download} disabled={exporting}>
            {exporting ? (
              <Loader2 className="mr-1 size-3.5 animate-spin" aria-hidden="true" />
            ) : (
              <Download className="mr-1 size-3.5" aria-hidden="true" />
            )}
            {exporting ? "Building PDF…" : "Download PDF"}
          </Button>
        </div>
      </div>

      {showErrors && Object.keys(errors).length > 0 && (
        <div className="mt-6 rounded-lg border border-destructive/40 bg-destructive/10 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-destructive">
            <AlertCircle className="size-4" aria-hidden="true" /> Fix these before downloading
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-destructive">
            {Object.entries(errors).map(([key, message]) => (
              <li key={key}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* ------------------------------- Editor ------------------------------- */}
        <div className="grid gap-6">
          {/* Template switcher */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Template
              </h2>
              <Link to="/invoice-templates" className="text-xs font-medium text-primary underline">
                Compare all 10
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {TEMPLATES.map((t) => {
                const active = t.slug === data.templateSlug;
                return (
                  <button
                    key={t.slug}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      patch({ templateSlug: t.slug });
                      trackEvent("template_selected", { template: t.slug });
                    }}
                    className={`rounded-lg border p-2 text-left transition-colors ${
                      active
                        ? "border-primary bg-primary/10"
                        : "border-border hover:bg-accent/10"
                    }`}
                  >
                    <span
                      className="block h-6 rounded"
                      style={{ background: t.accent }}
                      aria-hidden="true"
                    />
                    <span className="mt-1.5 block text-xs font-semibold">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Branding */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Branding
            </h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {(["logo", "signature"] as const).map((kind) => (
                <div key={kind}>
                  <Label htmlFor={`${kind}-upload`} className="capitalize">
                    {kind}
                  </Label>
                  <div className="mt-2 flex items-center gap-3">
                    <label
                      htmlFor={`${kind}-upload`}
                      className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-md border border-input px-3 text-sm font-medium hover:bg-accent/20"
                    >
                      <Upload className="size-4" aria-hidden="true" /> Upload
                    </label>
                    <input
                      id={`${kind}-upload`}
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => uploadImage(kind, e.target.files?.[0])}
                    />
                    {data[kind] ? (
                      <>
                        <img
                          src={data[kind] as string}
                          alt=""
                          className="h-10 w-auto max-w-24 rounded border border-border bg-white object-contain p-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => patch({ [kind]: null } as Partial<InvoiceData>)}
                        >
                          Remove
                        </Button>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground">PNG, JPG or SVG · max 1.5 MB</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice meta */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Invoice details
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div data-invalid={invalid("invoiceNumber")}>
                <Label htmlFor="invoice-number">Invoice number *</Label>
                <Input
                  id="invoice-number"
                  value={data.invoiceNumber}
                  maxLength={40}
                  aria-invalid={invalid("invoiceNumber")}
                  onChange={(e) => patch({ invoiceNumber: e.target.value })}
                />
                {showErrors && <FieldError message={errors["invoiceNumber"]} />}
              </div>
              <div>
                <Label htmlFor="po-number">PO number</Label>
                <Input
                  id="po-number"
                  value={data.poNumber}
                  maxLength={40}
                  onChange={(e) => patch({ poNumber: e.target.value })}
                />
              </div>
              <div data-invalid={invalid("issueDate")}>
                <Label htmlFor="issue-date">Issue date *</Label>
                <Input
                  id="issue-date"
                  type="date"
                  value={data.issueDate}
                  onChange={(e) => patch({ issueDate: e.target.value })}
                />
                {showErrors && <FieldError message={errors["issueDate"]} />}
              </div>
              <div data-invalid={invalid("dueDate")}>
                <Label htmlFor="due-date">Due date *</Label>
                <Input
                  id="due-date"
                  type="date"
                  value={data.dueDate}
                  aria-invalid={invalid("dueDate")}
                  onChange={(e) => patch({ dueDate: e.target.value })}
                />
                {showErrors && <FieldError message={errors["dueDate"]} />}
              </div>
              <div>
                <Label htmlFor="currency">Currency</Label>
                <select
                  id="currency"
                  value={data.currency}
                  onChange={(e) => patch({ currency: e.target.value })}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} — {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {partyFields("from", "From (your business)")}
            {partyFields("to", "Bill to (client)")}
          </div>

          {/* Line items */}
          <div className="rounded-xl border border-border bg-card p-5" data-invalid={invalid("items")}>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Line items
            </h2>
            <div className="mt-4 grid gap-3">
              {data.items.map((item, index) => (
                <div key={item.id} className="grid gap-2 sm:grid-cols-[1fr_80px_110px_auto]">
                  <div>
                    {index === 0 && <Label className="sr-only">Description</Label>}
                    <Input
                      aria-label={`Item ${index + 1} description`}
                      placeholder="Design work, consulting hours…"
                      value={item.description}
                      maxLength={300}
                      onChange={(e) => patchItem(item.id, "description", e.target.value)}
                    />
                  </div>
                  <Input
                    aria-label={`Item ${index + 1} quantity`}
                    type="number"
                    min={0}
                    step="0.01"
                    value={item.quantity}
                    onChange={(e) => patchItem(item.id, "quantity", e.target.value)}
                  />
                  <Input
                    aria-label={`Item ${index + 1} rate`}
                    type="number"
                    min={0}
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => patchItem(item.id, "rate", e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove item ${index + 1}`}
                    onClick={() => removeItem(item.id)}
                    disabled={data.items.length === 1}
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              ))}
            </div>
            {showErrors && <FieldError message={errors["items"]} />}
            <Button variant="outline" size="sm" className="mt-4" onClick={addItem}>
              <Plus className="mr-1 size-3.5" aria-hidden="true" /> Add line item
            </Button>

            <Separator className="my-5" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div data-invalid={invalid("taxRate")}>
                <Label htmlFor="tax-rate">Tax rate (%)</Label>
                <Input
                  id="tax-rate"
                  type="number"
                  min={0}
                  max={100}
                  step="0.01"
                  value={data.taxRate}
                  aria-invalid={invalid("taxRate")}
                  onChange={(e) => patch({ taxRate: Number(e.target.value) || 0 })}
                />
                {showErrors && <FieldError message={errors["taxRate"]} />}
              </div>
              <div data-invalid={invalid("discount")}>
                <Label htmlFor="discount">Discount</Label>
                <div className="flex gap-2">
                  <Input
                    id="discount"
                    type="number"
                    min={0}
                    step="0.01"
                    value={data.discount}
                    onChange={(e) => patch({ discount: Number(e.target.value) || 0 })}
                  />
                  <select
                    aria-label="Discount type"
                    value={data.discountType}
                    onChange={(e) =>
                      patch({ discountType: e.target.value as InvoiceData["discountType"] })
                    }
                    className="h-10 rounded-md border border-input bg-background px-2 text-sm"
                  >
                    <option value="percent">%</option>
                    <option value="fixed">{data.currency}</option>
                  </select>
                </div>
                {showErrors && <FieldError message={errors["discount"]} />}
              </div>
              <div>
                <Label htmlFor="shipping">Shipping / extra</Label>
                <Input
                  id="shipping"
                  type="number"
                  min={0}
                  step="0.01"
                  value={data.shipping}
                  onChange={(e) => patch({ shipping: Number(e.target.value) || 0 })}
                />
                {showErrors && <FieldError message={errors["shipping"]} />}
              </div>
              <div>
                <Label htmlFor="amount-paid">Amount already paid</Label>
                <Input
                  id="amount-paid"
                  type="number"
                  min={0}
                  step="0.01"
                  value={data.amountPaid}
                  onChange={(e) => patch({ amountPaid: Number(e.target.value) || 0 })}
                />
                {showErrors && <FieldError message={errors["amountPaid"]} />}
              </div>
            </div>

            <dl className="mt-5 space-y-1.5 rounded-lg bg-muted/50 p-4 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Subtotal</dt>
                <dd>{money(totals.subtotal)}</dd>
              </div>
              {totals.discountAmount > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <dt>Discount</dt>
                  <dd>−{money(totals.discountAmount)}</dd>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <dt>Tax</dt>
                <dd>{money(totals.taxAmount)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-bold">
                <dt>Balance due</dt>
                <dd>{money(totals.balanceDue)}</dd>
              </div>
            </dl>
          </div>

          {/* Notes */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Notes & terms
            </h2>
            <div className="mt-4 grid gap-4">
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  maxLength={600}
                  value={data.notes}
                  onChange={(e) => patch({ notes: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="terms">Payment terms</Label>
                <Textarea
                  id="terms"
                  rows={3}
                  maxLength={600}
                  value={data.terms}
                  onChange={(e) => patch({ terms: e.target.value })}
                />
              </div>
            </div>
          </div>

          <AdSlot id="generator-below-form" format="rectangle" />
        </div>

        {/* ------------------------------- Preview ------------------------------ */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Live preview ·{" "}
              {TEMPLATES.find((t) => t.slug === data.templateSlug)?.name ?? "Modern"}
            </h2>
            <Button size="sm" variant="outline" onClick={download} disabled={exporting}>
              {exporting ? (
                <Loader2 className="mr-1 size-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Download className="mr-1 size-3.5" aria-hidden="true" />
              )}
              PDF
            </Button>
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-muted/40 p-3">
            <div className="mx-auto w-full overflow-hidden" style={{ maxWidth: "100%" }}>
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(var(--preview-scale, 0.52))",
                  width: PAGE_WIDTH,
                  height: 1123 * 0.52,
                }}
              >
                <div ref={documentRef} className="shadow-elegant">
                  <InvoicePreview data={data} />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            The preview is scaled to fit; the PDF exports at full A4 size using the template you
            selected above.
          </p>
        </div>
      </div>
    </div>
  );
}
