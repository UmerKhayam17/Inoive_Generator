import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — Free Invoice Generator`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#94a3b8",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {SITE.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              color: "#38bdf8",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Free · No signup · Instant PDF
          </div>
          <div
            style={{
              display: "flex",
              color: "#f8fafc",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Create professional invoices online
          </div>
          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 30,
              fontWeight: 500,
              maxWidth: 900,
            }}
          >
            Live preview, tax & discounts, logo support — download a print-ready PDF.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#64748b",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>{SITE.host}</div>
          <div
            style={{
              display: "flex",
              background: "#2563eb",
              color: "#ffffff",
              padding: "12px 22px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Free PDF download
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
