import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['gsydmhwfexnceolzergi.supabase.co'],
    remotePatterns: [
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
