"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function pad(n: number, width: number) {
  const s = String(Math.max(0, Math.floor(n)));
  return s.length >= width ? s : "0".repeat(width - s.length) + s;
}

/** Interactive helper — builds sequential invoice numbers clients can paste into the generator. */
export function InvoiceNumberGeneratorTool() {
  const [prefix, setPrefix] = useState("INV");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [start, setStart] = useState(1);
  const [count, setCount] = useState(5);
  const [width, setWidth] = useState(4);
  const [separator, setSeparator] = useState("-");

  const numbers = useMemo(() => {
    const list: string[] = [];
    const safeCount = Math.min(50, Math.max(1, count));
    const safeWidth = Math.min(8, Math.max(1, width));
    for (let i = 0; i < safeCount; i++) {
      const parts = [prefix.trim(), year.trim(), pad(start + i, safeWidth)].filter(Boolean);
      list.push(parts.join(separator));
    }
    return list;
  }, [prefix, year, start, count, width, separator]);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(numbers.join("\n"));
      toast.success("Copied", { description: `${numbers.length} invoice numbers on the clipboard.` });
    } catch {
      toast.error("Could not copy", { description: "Select the list and copy manually." });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="space-y-4 rounded-xl border border-border bg-card p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="prefix">Prefix</Label>
            <Input id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year (optional)</Label>
            <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="start">Start number</Label>
            <Input
              id="start"
              type="number"
              min={1}
              value={start}
              onChange={(e) => setStart(Number(e.target.value) || 1)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="count">How many to generate</Label>
            <Input
              id="count"
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => setCount(Number(e.target.value) || 1)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="width">Digit padding</Label>
            <Input
              id="width"
              type="number"
              min={1}
              max={8}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 4)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sep">Separator</Label>
            <Input
              id="sep"
              value={separator}
              onChange={(e) => setSeparator(e.target.value.slice(0, 3))}
            />
          </div>
        </div>
        <Button type="button" onClick={copyAll}>
          Copy all numbers
        </Button>
      </form>

      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Preview
        </h2>
        <ol className="mt-4 space-y-2 font-mono text-sm">
          {numbers.map((n) => (
            <li key={n} className="rounded-md border border-border bg-card px-3 py-2">
              {n}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          Use one number per invoice and never reuse a number after you send it. Paste the next
          value into the invoice number field in the generator.
        </p>
      </div>
    </div>
  );
}
