import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:
      {
        bodySizeLimit: '5mb'
      }
  },
  reactStrictMode:false,
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
