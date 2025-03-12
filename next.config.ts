import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true, // Let next-pwa handle registration
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest.json$/],
  fallbacks: {
    document: '/' // Fallback for navigation requests
  }
});

export default pwaConfig(nextConfig);
