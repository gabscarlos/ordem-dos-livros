import { ImageResponse } from "next/og";
import series from "@/constants/series";

// Imagem vertical (1000x1500, formato do Pinterest) com a ordem dos livros
// de cada série. Gerada no build para todas as séries: /pins/<id-da-serie>.

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return series.map((s) => ({ id: s.id }));
}

const LARGURA = 1000;
const ALTURA = 1500;
const MAX_LINHAS = 8;

const cores = {
  fundo: "#F7F0E6",
  painel: "#FBF7F1",
  marca: "#C48F45",
  marcaClara: "#DAAA63",
  tinta: "#2C1810",
  tintaSuave: "#6C5B4B",
  borda: "#EADFCF",
};

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const serie = series.find((s) => s.id === id);
  if (!serie) return new Response("Série não encontrada", { status: 404 });

  const total = serie.livros.length;
  // Séries longas: mostra os primeiros livros e uma linha "+ N livros".
  const cabem = total > MAX_LINHAS ? MAX_LINHAS - 1 : total;
  const livros = serie.livros.slice(0, cabem);
  const restantes = total - cabem;
  // Séries curtas ganham capas e textos maiores para ocupar o painel.
  const grande = livros.length <= 4;
  const enorme = livros.length <= 2;
  const capa = enorme ? { w: 200, h: 300 } : grande ? { w: 120, h: 180 } : { w: 72, h: 108 };
  const tamanhoTitulo = serie.titulo.length > 30 ? 58 : serie.titulo.length > 20 ? 70 : 84;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: cores.fundo,
          padding: "64px 64px 48px",
          fontFamily: "sans-serif",
          color: cores.tinta,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, letterSpacing: 6, color: cores.marca }}>
          ORDEM DOS LIVROS
        </div>
        <div style={{ display: "flex", fontSize: tamanhoTitulo, fontWeight: 800, lineHeight: 1.05, marginTop: 14 }}>
          {serie.titulo}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: cores.tintaSuave, marginTop: 14 }}>
          de {serie.autor.nome} · {total} {total === 1 ? "livro" : "livros"}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: grande ? 34 : 14,
            justifyContent: grande ? "center" : "flex-start",
            marginTop: 40,
            padding: 24,
            background: cores.painel,
            border: `2px solid ${cores.borda}`,
            borderRadius: 28,
            flexGrow: 1,
          }}
        >
          {livros.map((livro, i) => (
            <div key={livro.id} style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  background: cores.tinta,
                  color: cores.marcaClara,
                  fontSize: 26,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={livro.imagem}
                width={capa.w}
                height={capa.h}
                style={{ objectFit: "cover", borderRadius: 6, boxShadow: "4px 6px 12px rgba(44,24,16,0.35)", flexShrink: 0 }}
              />
              <div style={{ display: "flex", fontSize: enorme ? 46 : grande ? (livro.titulo.length > 48 ? 34 : 40) : livro.titulo.length > 48 ? 28 : 32, fontWeight: 600, lineHeight: 1.15, flexShrink: 1 }}>
                {livro.titulo}
              </div>
            </div>
          ))}
          {restantes > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 6 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  border: `3px solid ${cores.marcaClara}`,
                  color: cores.marca,
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                +
              </div>
              <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: cores.tintaSuave }}>
                mais {restantes} {restantes === 1 ? "livro" : "livros"} — veja a lista completa no site
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", height: 14, borderRadius: 7, background: "#D8C8B3", marginTop: 32 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 26 }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: 3 }}>ORDEM LIVRO</div>
          <div style={{ display: "flex", fontSize: 28, color: cores.tintaSuave }}>www.ordemlivro.com.br</div>
        </div>
      </div>
    ),
    { width: LARGURA, height: ALTURA }
  );
}
