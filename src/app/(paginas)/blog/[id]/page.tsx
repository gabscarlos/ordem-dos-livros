import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConteudoBlog from "@/components/blog/ConteudoBlog";
import ItemSerie from "@/components/serie/ItemSerie";
import series from "@/constants/series";
import noticias from "@/constants/blog/noticias";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";
import { SITE_URL } from "@/lib/site";

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
      url: `${SITE_URL}/blog/${id}`,
      type: "article",
    },
    alternates: { canonical: `${SITE_URL}/blog/${id}` },
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

  if (!conteudoEspecifico) notFound();

  // As datas estão em DD-MM-AAAA; o schema.org espera AAAA-MM-DD.
  const [dia, mes, ano] = conteudoEspecifico.data.split("-");
  const dataIso = ano && mes && dia ? `${ano}-${mes}-${dia}` : undefined;
  const pageUrl = `${SITE_URL}/blog/${id}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: conteudoEspecifico.titulo,
      description: conteudoEspecifico.descricao,
      image: [conteudoEspecifico.imagem],
      ...(dataIso ? { datePublished: dataIso, dateModified: dataIso } : {}),
      inLanguage: "pt-BR",
      mainEntityOfPage: pageUrl,
      author: { "@type": "Organization", name: "Ordem Livro", url: `${SITE_URL}` },
      publisher: {
        "@type": "Organization",
        name: "Ordem Livro",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: conteudoEspecifico.titulo, item: pageUrl },
      ],
    },
  ];

  // Séries do site citadas no post, para levar o leitor à ordem dos livros.
  // A busca diferencia maiúsculas ("A Seleção" e não "a seleção de livros"),
  // e títulos que também são palavras comuns ficam de fora.
  const TITULOS_AMBIGUOS = new Set(["a-selecao", "robos", "perdida", "fala-serio"]);
  const textoDoPost = `${conteudoEspecifico.titulo}\n${conteudoEspecifico.conteudo}`;
  const seriesDoPost = series
    .filter((s) => !TITULOS_AMBIGUOS.has(s.id))
    .filter((s) => textoDoPost.includes(s.titulo.replace(/ \(.*\)$/, "")))
    .slice(0, 8);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Conteúdo */}
      <ConteudoBlog {...conteudoEspecifico} />

      {seriesDoPost.length > 0 && (
        <section className="mt-12 flex flex-col gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-areia-900">
            Veja a ordem dos livros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {seriesDoPost.map((serie) => (
              <ItemSerie key={serie.id} {...serie} />
            ))}
          </div>
        </section>
      )}

      <div className="flex justify-end mt-12 pb-8">
        <Link
          href={`/blog`}
          className="inline-flex items-center gap-2 bg-marca-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-marca-700 transition-colors shadow-md hover:shadow-lg"
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
