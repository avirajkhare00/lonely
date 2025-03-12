import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
};

const pwaConfig = withPWA({
  dest: 'public',
  register: false, // We handle registration in our custom component
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

export default pwaConfig(nextConfig);
