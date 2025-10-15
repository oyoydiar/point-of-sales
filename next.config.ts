import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: [
      'gsydmhwfexnceolzergi.storage.supabase.co',
      'gsydmhwfexnceolzergi.supabase.co',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gsydmhwfexnceolzergi.storage.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gsydmhwfexnceolzergi.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
