import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: isDevelopment,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  }
};

export default withBundleAnalyzer(nextConfig);
