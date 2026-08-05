import { computeTotals, formatMoney, type InvoiceData } from "@/lib/invoice";
import { TEMPLATES, type InvoiceTemplate } from "@/data/templates";

/**
 * Print-accurate invoice document.
 *
 * Everything is inline-styled with hex colours on purpose: the same DOM node is
 * rasterised by html2canvas for the PDF export, which cannot parse oklch()
 * values coming from the app's design tokens.
 */

export const PAGE_WIDTH = 794; // A4 @ 96dpi

const A = {
  ink: "#111827",
  muted: "#6b7280",
  line: "#e5e7eb",
};

function tpl(slug: string): InvoiceTemplate {
  return TEMPLATES.find((t) => t.slug === slug) ?? TEMPLATES[0]!;
}

export function InvoicePreview({
  data,
  id = "invoice-document",
}: {
  data: InvoiceData;
  id?: string;
}) {
  const t = tpl(data.templateSlug);
  const totals = computeTotals(data);
  const serifStack = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif';
  const sansStack = 'Helvetica, Arial, "Segoe UI", sans-serif';
  const font = t.serif ? serifStack : sansStack;
  const money = (n: number) => formatMoney(n, data.currency);

  const headerDark = t.dark === true;
  const headerBg = headerDark ? "#0f172a" : t.accent;
  const isSidebar = t.headerStyle === "sidebar";

  const label: React.CSSProperties = {
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: A.muted,
    fontWeight: 700,
    margin: 0,
  };

  const logo = data.logo ? (
    <img
      src={data.logo}
      alt=""
      style={{ maxHeight: 56, maxWidth: 190, objectFit: "contain", display: "block" }}
    />
  ) : null;

  const partyBlock = (title: string, p: InvoiceData["from"]) => (
    <div style={{ maxWidth: 260 }}>
      <p style={label}>{title}</p>
      <p style={{ margin: "6px 0 0", fontWeight: 700, fontSize: 14, color: A.ink }}>
        {p.name || "—"}
      </p>
      {p.address ? (
        <p style={{ margin: "3px 0 0", fontSize: 12, color: A.muted, whiteSpace: "pre-line" }}>
          {p.address}
        </p>
      ) : null}
      {p.email ? (
        <p style={{ margin: "3px 0 0", fontSize: 12, color: A.muted }}>{p.email}</p>
      ) : null}
      {p.phone ? <p style={{ margin: "3px 0 0", fontSize: 12, color: A.muted }}>{p.phone}</p> : null}
      {p.taxId ? (
        <p style={{ margin: "3px 0 0", fontSize: 12, color: A.muted }}>Tax ID: {p.taxId}</p>
      ) : null}
    </div>
  );

  const meta = (
    <div style={{ display: "grid", gap: 6 }}>
      <div>
        <p style={label}>Invoice #</p>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: A.ink }}>
          {data.invoiceNumber || "—"}
        </p>
      </div>
      <div>
        <p style={label}>Issued</p>
        <p style={{ margin: 0, fontSize: 13, color: A.ink }}>{data.issueDate}</p>
      </div>
      <div>
        <p style={label}>Due</p>
        <p style={{ margin: 0, fontSize: 13, color: A.ink }}>{data.dueDate}</p>
      </div>
      {data.poNumber ? (
        <div>
          <p style={label}>PO number</p>
          <p style={{ margin: 0, fontSize: 13, color: A.ink }}>{data.poNumber}</p>
        </div>
      ) : null}
    </div>
  );

  const header = () => {
    switch (t.headerStyle) {
      case "bar":
        return (
          <div
            style={{
              background: headerBg,
              color: "#ffffff",
              padding: "26px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              {logo}
              <p style={{ margin: logo ? "10px 0 0" : 0, fontSize: 18, fontWeight: 700 }}>
                {data.from.name || "Your business"}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Invoice
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 13, opacity: 0.9 }}>
                #{data.invoiceNumber || "—"}
              </p>
            </div>
          </div>
        );
      case "split":
        return (
          <div style={{ display: "flex", borderBottom: `3px solid ${t.accent}` }}>
            <div style={{ flex: 1, padding: "28px 40px" }}>
              {logo}
              <p style={{ margin: logo ? "10px 0 0" : 0, fontSize: 17, fontWeight: 700, color: A.ink }}>
                {data.from.name || "Your business"}
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 12, color: A.muted, whiteSpace: "pre-line" }}>
                {data.from.address}
              </p>
            </div>
            <div
              style={{
                width: 250,
                padding: "28px 40px 28px 24px",
                background: `${t.accent}12`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 800,
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Invoice
              </p>
              <div style={{ marginTop: 10 }}>{meta}</div>
            </div>
          </div>
        );
      case "stacked":
        return (
          <div
            style={{
              padding: "34px 40px 26px",
              background: `linear-gradient(120deg, ${t.accent}1a, ${t.accent}05)`,
              borderBottom: `1px solid ${A.line}`,
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>{logo}</div>
            <p
              style={{
                margin: logo ? "12px 0 0" : 0,
                fontSize: 28,
                fontWeight: 700,
                color: t.accent,
                fontFamily: font,
                letterSpacing: t.serif ? "0.02em" : "0.06em",
                textTransform: "uppercase",
              }}
            >
              Invoice
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: A.muted }}>
              {data.from.name} · #{data.invoiceNumber || "—"}
            </p>
          </div>
        );
      case "minimal":
      default:
        return (
          <div style={{ padding: "36px 40px 22px", borderBottom: `2px solid ${A.ink}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                {logo}
                <p
                  style={{
                    margin: logo ? "10px 0 0" : 0,
                    fontSize: 24,
                    fontWeight: 700,
                    color: A.ink,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Invoice
                </p>
              </div>
              <div style={{ textAlign: "right", fontSize: 12, color: A.muted }}>
                <p style={{ margin: 0, fontWeight: 700, color: A.ink }}>{data.from.name}</p>
                <p style={{ margin: "3px 0 0" }}>#{data.invoiceNumber || "—"}</p>
                <p style={{ margin: "3px 0 0" }}>
                  {data.issueDate} → {data.dueDate}
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  const itemsTable = (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
      <thead>
        <tr
          style={{
            background: t.headerStyle === "minimal" ? "transparent" : `${t.accent}12`,
            borderBottom: `1px solid ${t.accent}55`,
          }}
        >
          <th style={{ textAlign: "left", padding: "9px 10px", color: A.ink, fontWeight: 700 }}>
            Description
          </th>
          <th style={{ textAlign: "right", padding: "9px 10px", color: A.ink, fontWeight: 700, width: 70 }}>
            Qty
          </th>
          <th style={{ textAlign: "right", padding: "9px 10px", color: A.ink, fontWeight: 700, width: 100 }}>
            Rate
          </th>
          <th style={{ textAlign: "right", padding: "9px 10px", color: A.ink, fontWeight: 700, width: 110 }}>
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item, i) => (
          <tr
            key={item.id}
            style={{
              borderBottom: `1px solid ${A.line}`,
              background: t.slug === "blue" && i % 2 === 1 ? "#f8fafc" : "transparent",
            }}
          >
            <td style={{ padding: "10px", color: A.ink }}>{item.description || "—"}</td>
            <td style={{ padding: "10px", textAlign: "right", color: A.muted }}>{item.quantity}</td>
            <td style={{ padding: "10px", textAlign: "right", color: A.muted }}>{money(item.rate)}</td>
            <td style={{ padding: "10px", textAlign: "right", color: A.ink, fontWeight: 600 }}>
              {money((Number(item.quantity) || 0) * (Number(item.rate) || 0))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const totalsRow = (name: string, value: string, strong = false) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 0",
        fontSize: strong ? 14 : 12.5,
        fontWeight: strong ? 800 : 500,
        color: strong ? A.ink : A.muted,
      }}
    >
      <span>{name}</span>
      <span style={{ color: A.ink }}>{value}</span>
    </div>
  );

  const totalsPanel = (
    <div style={{ width: 268 }}>
      {totalsRow("Subtotal", money(totals.subtotal))}
      {totals.discountAmount > 0 && totalsRow("Discount", `−${money(totals.discountAmount)}`)}
      {totalsRow(`Tax (${data.taxRate || 0}%)`, money(totals.taxAmount))}
      {totals.shipping > 0 && totalsRow("Shipping", money(totals.shipping))}
      <div
        style={{
          borderTop: `2px solid ${t.accent}`,
          marginTop: 6,
          paddingTop: 6,
          background: t.slug === "creative" ? `${t.accent}10` : "transparent",
        }}
      >
        {totalsRow("Total", money(totals.total), true)}
      </div>
      {(Number(data.amountPaid) || 0) > 0 && (
        <>
          {totalsRow("Amount paid", `−${money(Number(data.amountPaid) || 0)}`)}
          {totalsRow("Balance due", money(totals.balanceDue), true)}
        </>
      )}
    </div>
  );

  const footer = (
    <div style={{ display: "flex", gap: 28, marginTop: 30, alignItems: "flex-end" }}>
      <div style={{ flex: 1 }}>
        {data.notes ? (
          <>
            <p style={label}>Notes</p>
            <p style={{ margin: "5px 0 0", fontSize: 12, color: A.muted, whiteSpace: "pre-line" }}>
              {data.notes}
            </p>
          </>
        ) : null}
        {data.terms ? (
          <div style={{ marginTop: 14 }}>
            <p style={label}>Terms</p>
            <p style={{ margin: "5px 0 0", fontSize: 12, color: A.muted, whiteSpace: "pre-line" }}>
              {data.terms}
            </p>
          </div>
        ) : null}
      </div>
      <div style={{ width: 210, textAlign: "center" }}>
        {data.signature ? (
          <img
            src={data.signature}
            alt=""
            style={{ maxHeight: 60, maxWidth: 200, objectFit: "contain", margin: "0 auto", display: "block" }}
          />
        ) : (
          <div style={{ height: 60 }} />
        )}
        <div style={{ borderTop: `1px solid ${A.ink}`, marginTop: 4, paddingTop: 5 }}>
          <p style={{ margin: 0, fontSize: 11, color: A.muted }}>Authorised signature</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id={id}
      data-invoice-template={t.slug}
      style={{
        width: PAGE_WIDTH,
        minHeight: 1123,
        background: t.surface,
        color: A.ink,
        fontFamily: font,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isSidebar && header()}

      {isSidebar ? (
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              width: 210,
              background: t.accent,
              color: "#ffffff",
              padding: "32px 22px",
            }}
          >
            {logo}
            <p style={{ margin: logo ? "14px 0 0" : 0, fontSize: 22, fontWeight: 800, textTransform: "uppercase" }}>
              Invoice
            </p>
            <div style={{ marginTop: 18, fontSize: 12, lineHeight: 1.6 }}>
              <p style={{ margin: 0, opacity: 0.75 }}>Invoice #</p>
              <p style={{ margin: "0 0 12px", fontWeight: 700 }}>{data.invoiceNumber || "—"}</p>
              <p style={{ margin: 0, opacity: 0.75 }}>Issued</p>
              <p style={{ margin: "0 0 12px", fontWeight: 700 }}>{data.issueDate}</p>
              <p style={{ margin: 0, opacity: 0.75 }}>Due</p>
              <p style={{ margin: "0 0 12px", fontWeight: 700 }}>{data.dueDate}</p>
              <p style={{ margin: 0, opacity: 0.75 }}>Total</p>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 16 }}>{money(totals.total)}</p>
            </div>
          </div>
          <div style={{ flex: 1, padding: "32px 34px" }}>
            <div style={{ display: "flex", gap: 26, justifyContent: "space-between" }}>
              {partyBlock("From", data.from)}
              {partyBlock("Bill to", data.to)}
            </div>
            <div style={{ marginTop: 26 }}>{itemsTable}</div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
              {totalsPanel}
            </div>
            {footer}
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, padding: "30px 40px 40px" }}>
          <div style={{ display: "flex", gap: 26, justifyContent: "space-between" }}>
            {partyBlock("From", data.from)}
            {partyBlock("Bill to", data.to)}
            {t.headerStyle !== "split" ? meta : null}
          </div>

          {t.slug === "creative" ? (
            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                background: `${t.accent}12`,
                borderLeft: `5px solid ${t.accent}`,
              }}
            >
              <p style={label}>Amount due</p>
              <p style={{ margin: "4px 0 0", fontSize: 34, fontWeight: 800, color: t.accent }}>
                {money(totals.balanceDue)}
              </p>
            </div>
          ) : null}

          <div style={{ marginTop: 24 }}>{itemsTable}</div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
            {totalsPanel}
          </div>
          {footer}
        </div>
      )}
    </div>
  );
}
