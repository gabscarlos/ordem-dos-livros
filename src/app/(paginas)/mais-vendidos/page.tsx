import Titulo from "@/components/shared/Titulo";
import LivroMaisVendido from "@/components/principal/LivroMaisVendido";
import maisVendidos from "@/constants/mais-vendidos";
import Head from "next/head";

export default function Series() {
  return (
    <>
      <Head>
        {/* Meta Tags para SEO */}
        <title>Mais Vendidos - Explore os livros mais vendidos</title>
        <meta
          name="description"
          content="Explore uma lista com os livros mais vendidos do mercado"
        />
        <meta
          name="keywords"
          content="séries de livros, livros populares, histórias incríveis, autores renomados, literatura, leitura"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content="Mais Vendidos - Explore os livros mais vendidos"
        />
        <meta
          property="og:description"
          content="Explore uma lista com os livros mais vendidos do mercado"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aordemdoslivros.vercel.app/mais-vendidos" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mais Vendidos - Explore os livros mais vendidos"
        />
        <meta
          name="twitter:description"
          content="Explore uma lista com os livros mais vendidos do mercado"
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Link Canonical */}
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/mais-vendidos" />

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
              itemListElement: maisVendidos.map((maisVendidos, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://aordemdoslivros.vercel.app/mais-vendidos`,
                name: maisVendidos.titulo,
                image: maisVendidos.imagem,
                author: {
                  "@type": "Person",
                  name: maisVendidos.autor,
                },
              })),
            }),
          }}
        />
      </Head>

      <div className="flex flex-col gap-5">
        <Titulo
          principal="Mais Vendidos"
          secundario="Explore os livros mais vendidos do mercado"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-6">
          {[...maisVendidos]  
            .sort((a, b) => parseInt(a.posicao.replace("#", "")) - parseInt(b.posicao.replace("#", "")))         
            .map((serie) => (
              <LivroMaisVendido key={serie.id} {...serie} />
            ))}
        </div>
      </div>
    </>
  );
}
