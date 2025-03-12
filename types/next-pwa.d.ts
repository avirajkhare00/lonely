declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  interface PWAOptions {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    scope?: string;
    sw?: string;
    skipWaiting?: boolean;
    runtimeCaching?: any[];
    [key: string]: any;
  }
  
  type WithPWA = (options?: PWAOptions) => (nextConfig?: NextConfig) => NextConfig;
  
  const withPWA: WithPWA;
  
  export default withPWA;
}
