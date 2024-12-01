import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";
import Head from "next/head";

export interface SeriePageProps {
  params: Promise<{ id: string }>;
}

export default async function Serie({ params }: SeriePageProps) {
  // Obtém o ID de forma assíncrona
  const { id } = await params;

  // Localiza a série específica pelo ID
  const serieEspecifica = series.find((serie) => serie.id === id);

  if (!serieEspecifica) {
    return <div>Série não encontrada</div>;
  }

  return (
    <div>
      <Head>
        {/* Meta Tags para SEO */}
        <title>{serieEspecifica.titulo} - Série de Livros</title>
        <meta 
          name="description" 
          content={`Explore a série "${serieEspecifica.titulo}" escrita por ${serieEspecifica.autor.nome}. ${serieEspecifica.descricao}`} 
        />
        <meta name="keywords" content={`${serieEspecifica.titulo}, livros, série de livros, ${serieEspecifica.autor.nome}, literatura`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta property="og:title" content={`${serieEspecifica.titulo} - Série de Livros`} />
        <meta 
          property="og:description" 
          content={`Explore a série "${serieEspecifica.titulo}" escrita por ${serieEspecifica.autor.nome}. ${serieEspecifica.descricao}`} 
        />
        <meta property="og:image" content={serieEspecifica.imagem} />
        <meta property="og:url" content={`https://aordemdoslivros.vercel.app/series/${serieEspecifica.id}`} />
        <meta property="og:type" content="book" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${serieEspecifica.titulo} - Série de Livros`} />
        <meta 
          name="twitter:description" 
          content={`Explore a série "${serieEspecifica.titulo}" escrita por ${serieEspecifica.autor.nome}. ${serieEspecifica.descricao}`} 
        />
        <meta name="twitter:image" content={serieEspecifica.imagem} />

        {/* Link Canonical */}
        <link rel="canonical" href={`https://aordemdoslivros.vercel.app/series/${serieEspecifica.id}`} />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BookSeries",
              "name": serieEspecifica.titulo,
              "description": serieEspecifica.descricao,
              "author": {
                "@type": "Person",
                "name": serieEspecifica.autor.nome,
              },
              "numberOfBooks": serieEspecifica.livros.length,
              "image": serieEspecifica.imagem,
            }),
          }}
        />
      </Head>

      {/* Conteúdo da Série */}
      <ConteudoSerie
        id={serieEspecifica.id}
        titulo={serieEspecifica.titulo}
        imagem={serieEspecifica.imagem}
        nome={serieEspecifica.autor.nome}
        descricao={serieEspecifica.descricao}
        autor={serieEspecifica.autor}
        livros={serieEspecifica.livros}
      />
    </div>
  );
}
