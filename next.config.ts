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
      {
        protocol: 'https',
        hostname: 'ingresso-a.akamaihd.net',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'cinepop.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'img.odcdn.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'rocco.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'p2.trrsf.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port:''
      },
    ]
  }
};

export default nextConfig;
