import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES } from "@/data/blog";
import { TEMPLATES } from "@/data/templates";
import { assertLocalePaths, LOCALES } from "@/data/locales";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  assertLocalePaths();
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/invoice-generator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...LOCALES.map((l) => ({
      url: `${base}${l.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    {
      url: `${base}/invoice-templates`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${base}/user-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    {
      url: `${base}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  return [
    ...staticRoutes,
    ...TEMPLATES.map((t) => ({
      url: `${base}/invoice-templates/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CATEGORIES.map((c) => ({
      url: `${base}/blog/category/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
