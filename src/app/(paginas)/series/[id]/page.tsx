import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";
import Head from "next/head";

export interface SeriePageProps {
  params: Promise<{ id: string }>;
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

  return (
    <div>
      <Head>
        {/* Meta Tags para SEO */}
        <title>{titulo} - Série de Livros</title>
        <meta name="description" content={`Explore a série "${titulo}" escrita por ${autorNome}. ${descricao}`} />
        <meta name="keywords" content={`${titulo}, livros, série de livros, ${autorNome}, literatura`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={`${titulo} - Série de Livros`} />
        <meta property="og:description" content={`Explore a série "${titulo}" escrita por ${autorNome}. ${descricao}`} />
        <meta property="og:image" content={serieEspecifica.imagem} />
        <meta property="og:url" content={`https://aordemdoslivros.vercel.app/series/${serieEspecifica.id}`} />
        <meta property="og:type" content="book" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${titulo} - Série de Livros`} />
        <meta name="twitter:description" content={`Explore a série "${titulo}" escrita por ${autorNome}. ${descricao}`} />
        <meta name="twitter:image" content={serieEspecifica.imagem} />

        {/* Canonical */}
        <link rel="canonical" href={`https://aordemdoslivros.vercel.app/series/${serieEspecifica.id}`} />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BookSeries",
              "name": titulo,
              "description": descricao,
              "author": {
                "@type": "Person",
                "name": autorNome,
              },
              "numberOfBooks": serieEspecifica.livros.length,
              "image": serieEspecifica.imagem,
              "url": `https://aordemdoslivros.vercel.app/series/${serieEspecifica.id}`,
            }),
          }}
        />
      </Head>

      <ConteudoSerie
        id={serieEspecifica.id}
        titulo={titulo}
        imagem={serieEspecifica.imagem}
        nome={autorNome}
        descricao={descricao}
        autor={serieEspecifica.autor}
        livros={serieEspecifica.livros}
      />
    </div>
  );
}
