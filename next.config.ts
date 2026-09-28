import type { NextConfig } from "next";

const SITE_HOST = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nextfreeinvoicegenerator.com"
).replace(/^https?:\/\//, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.88.54", "localhost"],
  eslint: {
    // Prettier CRLF noise on Windows should not block production builds.
    ignoreDuringBuilds: true,
  },
  // Keep old category URLs working after slug corrections.
  async redirects() {
    return [
      {
        source: "/blog/category/tax",
        destination: "/blog/category/tax-compliance",
        permanent: true,
      },
      {
        source: "/blog/category/design",
        destination: "/blog/category/design-templates",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${SITE_HOST}` }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
