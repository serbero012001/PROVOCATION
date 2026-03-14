import type { NextConfig } from "next";

const nextConfig = {
  /* Eliminamos la clave 'eslint' que causaba el aviso */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
} as any;

export default nextConfig;
