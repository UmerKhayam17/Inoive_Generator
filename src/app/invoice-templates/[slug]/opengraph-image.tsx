import { ImageResponse } from "next/og";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";

export const alt = "Invoice template preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  const name = template?.name ?? "Invoice";
  const industry = template?.industry ?? "Business";
  const accent = template?.accent ?? "#2563eb";

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
            alignItems: "center",
            justifyContent: "space-between",
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
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: accent,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: accent,
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {industry}
          </div>
          <div
            style={{
              display: "flex",
              color: "#f8fafc",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            {name} Invoice Template
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
            Free professional invoice layout — customize and download as PDF.
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
          <div style={{ display: "flex" }}>nextfreeinvoicegenerator.com</div>
          <div
            style={{
              display: "flex",
              background: accent,
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
