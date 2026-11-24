import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Domínio principal: ordemlivro.com.br. O endereço antigo da Vercel e o
  // www redirecionam (301) para ele, mantendo o caminho da página.
  async redirects() {
    return ["ordemlivro.vercel.app", "www.ordemlivro.com.br"].map((host) => ({
      // O arquivo de verificação do Search Console fica fora do redirect,
      // para a propriedade antiga continuar verificada.
      source: "/:path((?!google7187fb85e434e81f\\.html$).*)",
      has: [{ type: "host" as const, value: host }],
      destination: "https://ordemlivro.com.br/:path",
      permanent: true,
    }));
  },

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
      {
        protocol: 'https',
        hostname: 'www.historylink.org',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'sm.ign.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'muralzinhodeideias.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'www.monoanimation.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'npr.brightspotcdn.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'i.cbc.ca',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'poltronanerd.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'cultura.ilfilo.net',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'deliriumnerd.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'www.intrinseca.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'gizmodo.uol.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'www.planocritico.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'tm.ibxk.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'disneyplusbrasil.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 't.ctcdn.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'ovicio.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'rollingstone.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'nerdizmo.ig.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'voicers.com.br',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'thumb.wikimedia.org',
        port:''
      },
    ]
  }
};

export default nextConfig;
