#!/usr/bin/env node
/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver, Yep…), so new and updated pages get crawled within minutes.
 * Google does not use IndexNow; it picks changes up from sitemap.xml,
 * which robots.txt already advertises.
 *
 * Run after each deploy:  npm run indexnow
 * Needs INDEXNOW_KEY (same value as on the server) and NEXT_PUBLIC_SITE_URL.
 * Reads .env.local / .env when the variables aren't already set.
 */
import { existsSync, readFileSync } from "node:fs";

for (const file of [".env.local", ".env"]) {
  if (!existsSync(file)) continue;
  for (const line of readFileSync(file, "utf8").replace(/^﻿/, "").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const key = process.env.INDEXNOW_KEY?.trim();
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nextfreeinvoicegenerator.com")
  .replace(/^http:\/\//i, "https://")
  .replace(/\/$/, "");

if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error("INDEXNOW_KEY is missing or invalid (8-128 chars: letters, digits, dashes).");
  process.exit(1);
}

const keyLocation = `${siteUrl}/indexnow-key.txt`;
const keyRes = await fetch(keyLocation);
const served = keyRes.ok ? (await keyRes.text()).trim() : "";
if (served !== key) {
  console.error(`${keyLocation} does not serve INDEXNOW_KEY. Set it on the server and redeploy.`);
  process.exit(1);
}

const sitemapRes = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not fetch sitemap: HTTP ${sitemapRes.status}`);
  process.exit(1);
}
const urls = [...(await sitemapRes.text()).matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("Sitemap contains no URLs.");
  process.exit(1);
}

// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const urlList = urls.slice(i, i + 10000);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(siteUrl).host, key, keyLocation, urlList }),
  });
  if (res.status !== 200 && res.status !== 202) {
    console.error(`IndexNow rejected the submission: HTTP ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`Submitted ${urlList.length} URLs to IndexNow (HTTP ${res.status}).`);
}
