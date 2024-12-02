import ItemAutor from "@/components/autor/ItemAutor";
import Titulo from "@/components/shared/Titulo";
import autores from "@/constants/autores";
import Head from "next/head";

export default function Autores() {
  return (
    <div className="flex flex-col gap-10">
      <Head>
        {/* Meta Tags para SEO */}
        <title>Autores - Conheça os Escritores das Histórias que Você Ama</title>
        <meta 
          name="description" 
          content="Conheça os autores das histórias que você ama! Descubra mais sobre escritores famosos, suas obras e trajetórias." 
        />
        <meta 
          name="keywords" 
          content="autores, escritores, livros, literatura, biografias, histórias, obras literárias" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/autores" />

        {/* Open Graph para Redes Sociais */}
        <meta property="og:title" content="Autores - Conheça os Escritores das Histórias que Você Ama" />
        <meta 
          property="og:description" 
          content="Explore detalhes sobre escritores famosos, suas obras e contribuições para a literatura mundial." 
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aordemdoslivros.vercel.app/autores" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Autores - Conheça os Escritores das Histórias que Você Ama" />
        <meta 
          name="twitter:description" 
          content="Descubra mais sobre os autores que criaram suas histórias favoritas e veja suas principais obras." 
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Autores",
              description: "Lista de autores famosos e suas obras.",
              url: "https://aordemdoslivros.vercel.app/autores",
              itemListElement: autores.map((autor, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://aordemdoslivros.vercel.app/autores/${autor.id}`,
                name: autor.nome,
                image: autor.imagem,
                description: autor.biografia,
              })),
            }),
          }}
        />
      </Head>

      {/* Conteúdo da Página */}
      <Titulo
        principal="Autores"
        secundario="Conheça os autores que escrevem as histórias que você ama!"
      />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
        {autores.map((autor) => (
          <ItemAutor key={autor.id} {...autor} />
        ))}
      </div>
    </div>
  );
}
