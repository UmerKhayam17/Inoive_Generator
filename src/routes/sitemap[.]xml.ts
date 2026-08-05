import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS, CATEGORIES } from "@/data/blog";
import { TEMPLATES } from "@/data/templates";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/invoice-generator", changefreq: "weekly", priority: "0.9" },
          { path: "/invoice-templates", changefreq: "weekly", priority: "0.9" },
          { path: "/blog", changefreq: "daily", priority: "0.8" },
          { path: "/tools", changefreq: "monthly", priority: "0.6" },
          { path: "/about", changefreq: "yearly", priority: "0.4" },
          { path: "/contact", changefreq: "yearly", priority: "0.4" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/search", changefreq: "monthly", priority: "0.3" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.2" },
          { path: "/cookie-policy", changefreq: "yearly", priority: "0.2" },
          { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.2" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.2" },
          ...TEMPLATES.map((t) => ({
            path: `/invoice-templates/${t.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...CATEGORIES.map((c) => ({
            path: `/blog/category/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.6",
          })),
          ...POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: p.date,
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
