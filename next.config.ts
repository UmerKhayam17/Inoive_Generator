import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
