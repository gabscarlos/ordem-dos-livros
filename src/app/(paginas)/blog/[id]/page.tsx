import { Metadata } from "next";
import Link from "next/link";
import ConteudoBlog from "@/components/blog/ConteudoBlog";
import noticias from "@/constants/blog/noticias";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";

export interface ConteudoPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [...resenhas, ...listasTematicas, ...curiosidadesLiterarias, ...noticias].map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: ConteudoPageProps): Promise<Metadata> {
  const { id } = await params;
  const conteudo =
    resenhas.find((r) => r.id === id) ||
    listasTematicas.find((l) => l.id === id) ||
    curiosidadesLiterarias.find((c) => c.id === id) ||
    noticias.find((n) => n.id === id);

  if (!conteudo) return { title: "Conteúdo não encontrado" };

  return {
    title: conteudo.titulo,
    description: conteudo.descricao,
    openGraph: {
      title: `${conteudo.titulo} | Ordem Livro`,
      description: conteudo.descricao,
      images: [conteudo.imagem],
      url: `https://ordemlivro.vercel.app/blog/${id}`,
      type: "article",
    },
    alternates: { canonical: `https://ordemlivro.vercel.app/blog/${id}` },
    twitter: {
      card: "summary_large_image",
      title: `${conteudo.titulo} | Ordem Livro`,
      description: conteudo.descricao,
      images: [conteudo.imagem],
    },
  };
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
