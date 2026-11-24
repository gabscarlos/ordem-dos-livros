import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Domínio principal: www.ordemlivro.com.br. O endereço antigo da Vercel
  // redireciona (permanente) para ele, mantendo o caminho da página.
  // O ordemlivro.com.br sem www é redirecionado para o www pela própria
  // Vercel (configuração de domínios); não repetir aqui, para não criar loop.
  async redirects() {
    return [
      {
        // O arquivo de verificação do Search Console fica fora do redirect,
        // para a propriedade antiga continuar verificada.
        source: "/:path((?!google7187fb85e434e81f\\.html$).*)",
        has: [{ type: "host" as const, value: "ordemlivro.vercel.app" }],
        destination: "https://www.ordemlivro.com.br/:path",
        permanent: true,
      },
    ];
  },

  images: {
    // Otimizador de imagens da Vercel desligado: cada largura de cada imagem
    // contava como uma "transformação" no plano, e o endpoint /_next/image
    // continuava aceitando pedidos de robôs e páginas antigas em cache.
    // As imagens são servidas como estão; as capas da Amazon já vêm no
    // tamanho de 385px (._SY385_), que serve para os cartões do site.
    unoptimized: true,
    // Sem origens permitidas: a infraestrutura da Vercel liga o otimizador
    // pela lista de origens (e ignora o unoptimized acima). Com a lista vazia,
    // /_next/image recusa (400) qualquer imagem externa e não conta
    // transformação. As imagens continuam aparecendo porque são servidas
    // direto da origem (unoptimized).
    remotePatterns: [],
    // Caminho local que não existe, pelo mesmo motivo.
    localPatterns: [{ pathname: "/sem-otimizacao/**", search: "" }]
  }
};

export default nextConfig;
