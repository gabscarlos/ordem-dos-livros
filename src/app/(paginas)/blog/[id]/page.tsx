import Link from "next/link";
import Head from "next/head";
import ConteudoBlog from "@/components/blog/ConteudoBlog";
import noticias from "@/constants/blog/noticias";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";

export interface ConteudoPageProps {
  params: Promise<{ id: string }>;
}

export default async function Conteudo({ params }: ConteudoPageProps) {
  // Aguarde o objeto params
  const { id } = await params;

  // Encontra o conteúdo com o ID correspondente
  const conteudoEspecifico =
    resenhas.find((resenha) => resenha.id === id) ||
    listasTematicas.find((lista) => lista.id === id) ||
    curiosidadesLiterarias.find((curiosidade) => curiosidade.id === id) ||
    noticias.find((noticia) => noticia.id === id);

  if (!conteudoEspecifico) {
    return <div>Conteúdo não encontrado</div>;
  }

  return (
    <div>
      {/* SEO Dinâmico */}
      <Head>
        <title>{conteudoEspecifico.titulo} | Ordem Livro</title>
        <meta name="description" content={conteudoEspecifico.descricao} />
        <meta
          property="og:title"
          content={`${conteudoEspecifico.titulo} | Ordem Livro`}
        />
        <meta
          property="og:description"
          content={conteudoEspecifico.descricao}
        />
        <meta property="og:image" content={conteudoEspecifico.imagem} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://ordemlivro.vercel.app/blog/${id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${conteudoEspecifico.titulo} | Ordem Livro`}
        />
        <meta
          name="twitter:description"
          content={conteudoEspecifico.descricao}
        />
        <meta name="twitter:image" content={conteudoEspecifico.imagem} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8791475834761530"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* Conteúdo */}
      <ConteudoBlog {...conteudoEspecifico} />
      <div className="flex justify-end mt-12 pb-8">
        <Link
          href={`/blog`}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Voltar ao Blog</span>
        </Link>
      </div>
    </div>
  );
}
