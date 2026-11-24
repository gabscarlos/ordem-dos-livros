import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";
import { url } from "@/lib/site";

export interface SeriePageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return series.map((serie) => ({ id: serie.id }));
}

const resumo = (texto: string, max = 160) =>
  texto.length <= max ? texto : `${texto.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;

export async function generateMetadata({
  params,
}: SeriePageProps): Promise<Metadata> {
  const { id } = await params;
  const serie = series.find((s) => s.id === id);

  if (!serie) return { title: "Série não encontrada" };

  const total = serie.livros.length;
  const titulo = `${serie.titulo}: ordem dos livros (${total} livros)`;
  const descricao = resumo(
    `Ordem de leitura da série ${serie.titulo}, de ${serie.autor.nome}: lista completa dos ${total} livros em ordem, começando por "${serie.livros[0].titulo}".`
  );
  const canonical = url(`/series/${serie.id}`);

  return {
    title: titulo,
    description: descricao,
    keywords: [
      serie.titulo,
      `${serie.titulo} ordem dos livros`,
      `${serie.titulo} ordem de leitura`,
      `livros ${serie.titulo}`,
      serie.autor.nome,
    ],
    alternates: { canonical },
    openGraph: {
      title: titulo,
      description: descricao,
      images: [serie.imagem],
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
      images: [serie.imagem],
    },
  };
}

export default async function Serie({ params }: SeriePageProps) {
  const { id } = await params;
  const serie = series.find((s) => s.id === id);

  if (!serie) notFound();

  const pageUrl = url(`/series/${serie.id}`);
  const livrosOrdenados = [...serie.livros].sort(
    (a, b) => (a.ordem ?? 0) - (b.ordem ?? 0)
  );
  const outrasDoAutor = series.filter(
    (s) => s.autor.id === serie.autor.id && s.id !== serie.id
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BookSeries",
      name: serie.titulo,
      description: serie.descricao,
      inLanguage: "pt-BR",
      author: {
        "@type": "Person",
        name: serie.autor.nome,
        url: url(`/autores/${serie.autor.id}`),
      },
      image: serie.imagem,
      url: pageUrl,
      hasPart: livrosOrdenados.map((livro, i) => ({
        "@type": "Book",
        name: livro.titulo,
        position: i + 1,
        image: livro.imagem,
        author: { "@type": "Person", name: serie.autor.nome },
        ...(livro.ano ? { datePublished: String(livro.ano) } : {}),
        ...(livro.link ? { offers: { "@type": "Offer", url: livro.link } } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Ordem dos livros de ${serie.titulo}`,
      numberOfItems: livrosOrdenados.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: livrosOrdenados.map((livro, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: livro.titulo,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url("/") },
        { "@type": "ListItem", position: 2, name: "Séries", item: url("/series") },
        { "@type": "ListItem", position: 3, name: serie.titulo, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConteudoSerie
        id={serie.id}
        titulo={serie.titulo}
        imagem={serie.imagem}
        nome={serie.autor.nome}
        descricao={serie.descricao}
        autor={serie.autor}
        livros={serie.livros}
      />

      <section className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-20 flex flex-col gap-6">
        <h2 className="text-2xl font-serif font-bold text-zinc-900">
          Qual a ordem de leitura de {serie.titulo}?
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          A série {serie.titulo}, de {serie.autor.nome}, tem{" "}
          {livrosOrdenados.length} livros. A ordem recomendada de leitura é:
        </p>
        <ol className="list-decimal pl-6 flex flex-col gap-1 text-zinc-800">
          {livrosOrdenados.map((livro) => (
            <li key={livro.id}>
              <strong>{livro.titulo}</strong>
              {livro.ano ? ` (${livro.ano})` : ""}
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
          Por qual livro de {serie.titulo} começar?
        </h3>
        <p className="text-zinc-700 leading-relaxed">
          Comece por <strong>{livrosOrdenados[0].titulo}</strong>, o primeiro
          livro da série. Daí siga a lista acima para acompanhar a história na
          ordem certa.
        </p>

        {outrasDoAutor.length > 0 && (
          <>
            <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
              Outras séries de {serie.autor.nome}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {outrasDoAutor.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/series/${s.id}`}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="text-xs text-zinc-500">
          Como associado da Amazon, o Ordem Livro ganha comissão com compras
          qualificadas feitas pelos links desta página.
        </p>
      </section>
    </>
  );
}
