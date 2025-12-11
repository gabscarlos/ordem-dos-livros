import Titulo from "@/components/shared/Titulo";
import LivroMaisVendido from "@/components/principal/LivroMaisVendido";
import maisVendidos from "@/constants/mais-vendidos";
import Head from "next/head";

export default function MaisVendidos() {
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
          content="livros mais vendidos, best sellers, literatura, leitura, livros populares"
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
        <meta
          property="og:url"
          content="https://ordemlivro.vercel.app/mais-vendidos"
        />
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
        <link
          rel="canonical"
          href="https://ordemlivro.vercel.app/mais-vendidos"
        />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Livros Mais Vendidos",
              description:
                "Explore uma lista dos livros mais vendidos do mercado.",
              url: "https://ordemlivro.vercel.app/mais-vendidos",
              itemListElement: maisVendidos.map((livro, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://ordemlivro.vercel.app/mais-vendidos`, // Ideally this would link to a detail page if it existed
                name: livro.titulo,
                image: livro.imagem,
                author: {
                  "@type": "Person",
                  name: livro.autor,
                },
              })),
            }),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8791475834761530"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="flex flex-col gap-8">
        <Titulo
          principal="Mais Vendidos Amazon"
          secundario="Explore os livros mais vendidos do mercado"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
          {[...maisVendidos]
            .sort(
              (a, b) =>
                parseInt(a.posicao.replace("#", "")) -
                parseInt(b.posicao.replace("#", ""))
            )
            .map((livro) => (
              <LivroMaisVendido key={livro.id} {...livro} />
            ))}
        </div>
      </div>
    </>
  );
}
