import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // <--- ESTA LÍNEA ES VITAL
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
} as any;

export default nextConfig;
