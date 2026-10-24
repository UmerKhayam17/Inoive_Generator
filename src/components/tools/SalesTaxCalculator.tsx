"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function money(n: number) {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Browser-side tax maths — educational helper, not filing advice. */
export function SalesTaxCalculatorTool() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(8.25);
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");

  const result = useMemo(() => {
    const a = Math.max(0, amount);
    const r = Math.max(0, rate) / 100;
    if (mode === "exclusive") {
      const tax = a * r;
      return { net: a, tax, gross: a + tax };
    }
    const net = r === 0 ? a : a / (1 + r);
    const tax = a - net;
    return { net, tax, gross: a };
  }, [amount, rate, mode]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="space-y-4 rounded-xl border border-border bg-card p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <Label htmlFor="mode">Amount type</Label>
          <select
            id="mode"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={mode}
            onChange={(e) => setMode(e.target.value as "exclusive" | "inclusive")}
          >
            <option value="exclusive">Amount before tax (add tax)</option>
            <option value="inclusive">Amount includes tax (extract tax)</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            min={0}
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rate">Tax rate (%)</Label>
          <Input
            id="rate"
            type="number"
            min={0}
            step="0.01"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value) || 0)}
          />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Rates vary by country, state and product type. This calculator does not look up live rates
          and is not tax advice. Confirm the rate your registration requires before you invoice.
        </p>
      </form>

      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Result
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Net (before tax)</dt>
            <dd className="font-semibold tabular-nums">{money(result.net)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Tax</dt>
            <dd className="font-semibold tabular-nums">{money(result.tax)}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-border pt-3 text-base">
            <dt className="font-bold">Gross (with tax)</dt>
            <dd className="font-bold tabular-nums">{money(result.gross)}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          Transfer these figures into your invoice line items or tax field in the{" "}
          <a href="/invoice-generator" className="underline">
            invoice generator
          </a>
          .
        </p>
      </div>
    </div>
  );
}
