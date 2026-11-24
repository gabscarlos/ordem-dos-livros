import type { Metadata } from "next";
import ItemSerie from "@/components/serie/ItemSerie";
import Titulo from "@/components/shared/Titulo";
import Link from "next/link";
import series from "@/constants/series";
import generos from "@/constants/generos";
import detalhesSeries from "@/constants/detalhes-series";
import { url } from "@/lib/site";

const titulo = "Séries de livros em ordem de leitura";
const descricao =
  "Lista de séries de livros com a ordem certa de leitura: Harry Potter, Percy Jackson, Diário de Pilar, Maze Runner, Jogos Vorazes e muito mais.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: url("/series") },
  openGraph: {
    title: titulo,
    description: descricao,
    url: url("/series"),
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: ["/logo.png"],
  },
};

export default function Series() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: titulo,
    description: descricao,
    url: url("/series"),
    itemListElement: series.map((serie, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: url(`/series/${serie.id}`),
      name: serie.titulo,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-8">
        <Titulo
          principal="Séries"
          secundario="Conheça as séries das histórias que você ama!"
        />
        <nav aria-label="Gêneros" className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-areia-900 mr-1">
            Navegue por gênero:
          </span>
          {generos
            .filter((g) =>
              series.some((s) => detalhesSeries[s.id]?.generos.includes(g.id))
            )
            .map((g) => (
              <Link
                key={g.id}
                href={`/generos/${g.id}`}
                className="text-sm bg-marca-50 text-marca-700 font-semibold px-3 py-1 rounded-full hover:bg-marca-100 transition-colors"
              >
                {g.nome}
              </Link>
            ))}
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...series]
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((serie) => (
              <ItemSerie key={serie.id} {...serie} />
            ))}
        </div>
      </div>
    </>
  );
}
