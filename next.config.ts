import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (better quality/size ratio), fall back to WebP
    formats: ["image/avif", "image/webp"],

    // Extended device sizes to cover 2× and 3× Retina displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
  },
};

export default nextConfig;
