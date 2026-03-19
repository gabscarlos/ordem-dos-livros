import { Metadata } from "next";
import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";

export interface SeriePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: SeriePageProps): Promise<Metadata> {
  const { id } = await params;
  const serie = series.find((s) => s.id === id);

  if (!serie) {
    return {
      title: "Série não encontrada",
    };
  }

  const titulo = `${serie.titulo} - Série de Livros | Ordem dos Livros`;
  const descricao = `Explore a ordem cronológica e de leitura da série "${serie.titulo}" escrita por ${serie.autor?.nome}. ${serie.descricao}`;

  return {
    title: titulo,
    description: descricao,
    keywords: [serie.titulo, "ordem dos livros", serie.autor?.nome, "leitura", "cronológica"],
    openGraph: {
      title: titulo,
      description: descricao,
      images: [serie.imagem],
      url: `https://ordemlivro.vercel.app/series/${serie.id}`,
      type: "book",
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
      images: [serie.imagem],
    },
    alternates: {
      canonical: `https://ordemlivro.vercel.app/series/${serie.id}`,
    },
    robots: "index, follow",
  };
}

export default async function Serie({ params }: SeriePageProps) {
  const { id } = await params;

  const serieEspecifica = series.find((serie) => serie.id === id);

  if (!serieEspecifica) {
    return <div>Série não encontrada</div>;
  }

  const titulo = serieEspecifica.titulo || "Série Desconhecida";
  const descricao =
    serieEspecifica.descricao ||
    "Explore os detalhes de uma série incrível de livros.";
  const autorNome = serieEspecifica.autor?.nome || "Autor Desconhecido";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    name: titulo,
    description: descricao,
    author: {
      "@type": "Person",
      name: autorNome,
    },
    numberOfBooks: serieEspecifica.livros.length,
    image: serieEspecifica.imagem,
    url: `https://ordemlivro.vercel.app/series/${serieEspecifica.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConteudoSerie
        id={serieEspecifica.id}
        titulo={titulo}
        imagem={serieEspecifica.imagem}
        nome={autorNome}
        descricao={descricao}
        autor={serieEspecifica.autor}
        livros={serieEspecifica.livros}
      />
    </>
  );
}
