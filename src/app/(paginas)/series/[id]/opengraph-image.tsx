import { ImageResponse } from "next/og";
import series from "@/constants/series";

export const alt = "Ordem dos livros da série";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return series.map((serie) => ({ id: serie.id }));
}

// Imagem de compartilhamento (WhatsApp, Facebook, X): título da série,
// quantidade de livros e as primeiras capas na ordem de leitura.
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const serie = series.find((s) => s.id === id);
  const titulo = serie?.titulo ?? "Ordem Livro";
  const capas = (serie?.livros ?? []).slice(0, 5);
  const total = serie?.livros.length ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#fbbf24", fontWeight: 700 }}>
            ORDEM DOS LIVROS · {total} {total === 1 ? "LIVRO" : "LIVROS"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titulo.length > 28 ? 60 : 76,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1070,
            }}
          >
            {titulo}
          </div>
          {serie && (
            <div style={{ display: "flex", fontSize: 30, color: "#c7d2fe" }}>
              de {serie.autor.nome}
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 18 }}>
            {capas.map((livro, i) => (
              <div key={livro.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={livro.imagem}
                  width={124}
                  height={186}
                  style={{ objectFit: "cover", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                />
                <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>{i + 1}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>
            ORDEM LIVRO
          </div>
        </div>
      </div>
    ),
    size
  );
}
