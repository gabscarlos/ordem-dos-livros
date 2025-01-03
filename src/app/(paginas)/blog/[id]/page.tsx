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
        <title>{conteudoEspecifico.titulo} | Ordem dos Livros</title>
        <meta name="description" content={conteudoEspecifico.descricao} />
        <meta property="og:title" content={`${conteudoEspecifico.titulo} | Ordem dos Livros`} />
        <meta property="og:description" content={conteudoEspecifico.descricao} />
        <meta property="og:image" content={conteudoEspecifico.imagem} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://aordemdoslivros.vercel.app/blog/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${conteudoEspecifico.titulo} | Ordem dos Livros`} />
        <meta name="twitter:description" content={conteudoEspecifico.descricao} />
        <meta name="twitter:image" content={conteudoEspecifico.imagem} />
      </Head>

      {/* Conteúdo */}
      <ConteudoBlog {...conteudoEspecifico} />
      <Link href={`/blog`} className="flex justify-end mt-10">
        <button className="botao roxo">Voltar ao Blog</button>
      </Link>
    </div>
  );
}
