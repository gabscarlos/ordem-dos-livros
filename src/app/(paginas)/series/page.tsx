import type { Metadata } from "next";
import ItemSerie from "@/components/serie/ItemSerie";
import Titulo from "@/components/shared/Titulo";
import series from "@/constants/series";
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
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
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
