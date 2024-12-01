import ItemSerie from "@/components/serie/ItemSerie";
import Pagina from "@/components/template/Pagina";
import series from "@/constants/series";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Tags para SEO */}
        <link
          rel="icon"
          type="image/png"
          href="%PUBLIC_URL%/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/apple-touch-icon.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        <title>Início - Descubra Séries de Livros Incríveis</title>
        <meta
          name="description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta
          name="keywords"
          content="séries de livros, autores, literatura, livros populares, histórias épicas"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content="Início - Descubra Séries de Livros Incríveis"
        />
        <meta
          property="og:description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aordemdoslivros.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Início - Descubra Séries de Livros Incríveis"
        />
        <meta
          name="twitter:description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Link Canonical */}
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/" />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Séries de Livros",
              description:
                "Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes.",
              url: "https://aordemdoslivros.vercel.app/",
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

      <Pagina>
        <div className="flex flex-col gap-5">
          {series.map((serie) => (
            <ItemSerie key={serie.id} {...serie} />
          ))}
        </div>
      </Pagina>
    </>
  );
}
