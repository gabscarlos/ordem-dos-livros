import ConteudoAutor from "@/components/autor/ConteudoAutor";
import autores from "@/constants/autores";
import Head from "next/head";
import Link from "next/link";
import series from "@/constants/series";

export interface AutorPageProps {
  params: Promise<{ id: string }>;
}

export default async function Autor({ params }: AutorPageProps) {
  // Aguarde o objeto params
  const { id } = await params;

  // Encontra o autor com o id correspondente
  const autorEspecifico = autores.find((autor) => autor.id === id);

  if (!autorEspecifico) {
    return <div>Autor não encontrado</div>;
  }

  return (
    <div>
      <Head>
        {/* Meta Tags para SEO */}
        <title>{autorEspecifico.nome} - Biografia e Obras</title>
        <meta
          name="keywords"
          content={`${autorEspecifico.nome}, biografia, autor, literatura, obras, livros`}
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content={`${autorEspecifico.nome} - Biografia e Obras`}
        />
        <meta property="og:image" content={autorEspecifico.imagem} />
        <meta
          property="og:url"
          content={`https://ordemlivro.vercel.app/autores/${autorEspecifico.id}`}
        />
        <meta property="og:type" content="profile" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${autorEspecifico.nome} - Biografia e Obras`}
        />
        <meta
          name="twitter:description"
          content={`Conheça a trajetória de ${autorEspecifico.nome}, autor renomado na literatura.`}
        />
        <meta name="twitter:image" content={autorEspecifico.imagem} />

        {/* Link Canonical */}
        <link
          rel="canonical"
          href={`https://ordemlivro.vercel.app/autores/${autorEspecifico.id}`}
        />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: autorEspecifico.nome,
              description: autorEspecifico.biografia,
              image: autorEspecifico.imagem,
              mainEntityOfPage: `https://ordemlivro.vercel.app/autores/${autorEspecifico.id}`,
              worksFor: {
                "@type": "Organization",
                name: "Ordem Livro",
              },
            }),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8791475834761530"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* Conteúdo do Autor */}
      <ConteudoAutor {...autorEspecifico} />
      <div className="flex justify-end mt-10">
        <Link
          href={`/series/${
            series.find((serie) => serie.autor.id === autorEspecifico.id)?.id ||
            ""
          }`}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
        >
          <span>Ver Séries do Autor</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
