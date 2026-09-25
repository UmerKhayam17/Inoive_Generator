import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE } from "@/data/site";
import "./globals.css";

/** Live AdSense publisher ID (also overridable via NEXT_PUBLIC_ADSENSE_CLIENT). */
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-9252917783014745";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const display = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Free Invoice Generator`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["free invoice generator", "invoice generator", "online invoice generator"],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Free Invoice Generator`,
    description: SITE.description,
    images: [{ url: "/invoice_logo.png", alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Free Invoice Generator`,
    description: SITE.description,
    images: ["/invoice_logo.png"],
  },
  icons: { icon: "/favicon.ico" },
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "customer support",
      },
      description: SITE.description,
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="_c7mZwE2FNiRLG4kNxK0KTZ9posJZy7vIx9Mr1rsyr4" />
        {/* Step 5: AdSense loader only (meta + ads.txt later if needed) */}
        <Script
          id="adsense-loader"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}
