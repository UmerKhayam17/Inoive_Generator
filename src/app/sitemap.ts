import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES } from "@/data/blog";
import { TEMPLATES } from "@/data/templates";
import { LOCALES } from "@/data/locales";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/invoice-generator`, changeFrequency: "weekly", priority: 0.9 },
    ...LOCALES.map((l) => ({
      url: `${base}${l.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    { url: `${base}/invoice-templates`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/tools`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/search`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...staticRoutes,
    ...TEMPLATES.map((t) => ({
      url: `${base}/invoice-templates/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CATEGORIES.map((c) => ({
      url: `${base}/blog/category/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
