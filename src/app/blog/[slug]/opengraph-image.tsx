import { ImageResponse } from "next/og";
import { getPost } from "@/data/blog";
import { SITE } from "@/data/site";

export const alt = "Blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Invoicing guide";
  const category = post?.category?.replace(/-/g, " ") ?? "guides";

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
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {SITE.name} · Blog
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: "#38bdf8",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              color: "#f8fafc",
              fontSize: title.length > 70 ? 48 : 58,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#64748b",
            fontSize: 24,
          }}
        >
          {SITE.host}
        </div>
      </div>
    ),
    { ...size },
  );
}
