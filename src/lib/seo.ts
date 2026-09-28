import { SITE } from "@/data/site";

/**
 * Absolute self-referencing canonical URL.
 * Home uses a trailing slash to match the URL Next actually serves;
 * every other path has no trailing slash.
 */
export function canonicalFor(path: string = "/"): string {
  const base = SITE.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/`;
  }
  const normalized = (path.startsWith("/") ? path : `/${path}`).replace(/\/$/, "");
  return `${base}${normalized}`;
}

/** Stable site logo — always crawlable static asset. */
export function siteLogoUrl(): string {
  return `${SITE.url.replace(/\/$/, "")}/invoice_logo.png`;
}

/** Absolute URL for a path under the site origin. */
export function absoluteUrl(path: string): string {
  return canonicalFor(path === "/" ? "/" : path);
}

/**
 * Free digital download offer with the Offer properties Google flags on
 * Product / merchant-listing rich results (shipping + return policy).
 */
export function digitalOffer(options: {
  url: string;
  priceCurrency?: string;
  price?: string | number;
}) {
  const currency = options.priceCurrency ?? "USD";
  const price = options.price ?? "0";
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  return {
    "@type": "Offer" as const,
    url: options.url,
    price: String(price),
    priceCurrency: currency,
    priceValidUntil: validUntil.toISOString().slice(0, 10),
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: ["US", "GB", "AE", "PK"],
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      merchantReturnLink: absoluteUrl("/terms-and-conditions"),
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency,
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "HUR",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "HUR",
        },
      },
      shippingDestination: [
        { "@type": "DefinedRegion", addressCountry: "US" },
        { "@type": "DefinedRegion", addressCountry: "GB" },
        { "@type": "DefinedRegion", addressCountry: "AE" },
        { "@type": "DefinedRegion", addressCountry: "PK" },
      ],
    },
  };
}

/** Image list Google can crawl for Product / SoftwareApplication. */
export function schemaImages(...urls: (string | undefined)[]) {
  const logo = siteLogoUrl();
  const unique = [...new Set(urls.filter(Boolean) as string[])];
  if (!unique.includes(logo)) unique.push(logo);
  return unique;
}
