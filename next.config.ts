import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.88.54", "localhost"],
  eslint: {
    // Prettier CRLF noise on Windows should not block production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
