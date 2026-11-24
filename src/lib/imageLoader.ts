// Loader de imagens do next/image. Em vez de redimensionar tudo na Vercel
// (cada largura de cada imagem conta como uma "transformação" no plano),
// pede o tamanho certo direto para quem já sabe redimensionar:
//
// - Amazon: o tamanho vai no nome do arquivo (ex.: ._SX300_.jpg).
// - Pexels: o tamanho vai no parâmetro w da URL.
// - Demais (Wikimedia, imagens do blog, arquivos locais): usa a imagem
//   original, que já é pequena ou aparece pouco.

interface LoaderParams {
  src: string;
  width: number;
  quality?: number;
}

// Capas da Amazon raramente passam de 1500px no arquivo original.
const LARGURA_MAXIMA_AMAZON = 1500;

export default function imageLoader({ src, width }: LoaderParams): string {
  if (src.startsWith("https://m.media-amazon.com/images/I/")) {
    const largura = Math.min(width, LARGURA_MAXIMA_AMAZON);
    // Troca o sufixo de tamanho (._SY385_, ._SL1500_, ._UF894,1000_QL80_...)
    // por ._SX<largura>_, que pede a imagem com essa largura.
    return src.replace(/\._[^/]*_\.(jpe?g|png)$/i, `._SX${largura}_.$1`);
  }

  if (src.startsWith("https://images.pexels.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.delete("h");
    url.searchParams.set("dpr", "1");
    return url.toString();
  }

  return src;
}
