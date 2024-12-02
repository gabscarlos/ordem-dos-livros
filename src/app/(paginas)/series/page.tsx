import ItemSerie from "@/components/serie/ItemSerie";
import Titulo from "@/components/shared/Titulo";
import series from "@/constants/series";
import Head from "next/head";

export default function Series() {
  return (
    <>
      <Head>
        {/* Meta Tags para SEO */}
        <title>Séries - Descubra as Melhores Séries de Livros</title>
        <meta
          name="description"
          content="Explore uma lista das melhores séries de livros, conheça autores incríveis e descubra histórias fascinantes para sua próxima leitura."
        />
        <meta
          name="keywords"
          content="séries de livros, livros populares, histórias incríveis, autores renomados, literatura, leitura"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content="Séries - Descubra as Melhores Séries de Livros"
        />
        <meta
          property="og:description"
          content="Explore uma lista das melhores séries de livros, conheça autores incríveis e descubra histórias fascinantes para sua próxima leitura."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aordemdoslivros.vercel.app/series" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Séries - Descubra as Melhores Séries de Livros"
        />
        <meta
          name="twitter:description"
          content="Explore uma lista das melhores séries de livros, conheça autores incríveis e descubra histórias fascinantes para sua próxima leitura."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Link Canonical */}
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/series" />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Séries de Livros",
              description:
                "Explore uma lista das melhores séries de livros, conheça autores incríveis e descubra histórias fascinantes para sua próxima leitura.",
              url: "https://aordemdoslivros.vercel.app/series",
              itemListElement: series.map((serie, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://aordemdoslivros.vercel.app/series/${serie.id}`,
                name: serie.titulo,
                image: serie.imagem,
                author: {
                  "@type": "Person",
                  name: serie.autor.nome,
                },
              })),
            }),
          }}
        />
      </Head>

      <div className="flex flex-col gap-5">
        <Titulo
          principal="Séries"
          secundario="Conheça as séries das histórias que você ama!"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
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
