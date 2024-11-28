import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cnnbrasil.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'musicaecinema.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'images.edrawmind.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'ogimg.infoglobo.com.br',
        port:''
      },
    ]
  }
};

export default nextConfig;
