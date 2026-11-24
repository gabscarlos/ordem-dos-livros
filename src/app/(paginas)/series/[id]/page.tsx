import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";
import detalhesSeries from "@/constants/detalhes-series";
import generos from "@/constants/generos";
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
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
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
  const anos = livrosOrdenados
    .map((l) => ("ano" in l ? l.ano : undefined))
    .filter((a): a is number => typeof a === "number" && a > 0)
    .sort((a, b) => a - b);
  const detalhes = detalhesSeries[serie.id];
  const generosDaSerie = (detalhes?.generos ?? [])
    .map((id) => generos.find((g) => g.id === id))
    .filter((g): g is (typeof generos)[number] => Boolean(g));
  const parecidas = series
    .filter((s) => s.id !== serie.id && s.autor.id !== serie.autor.id)
    .map((s) => ({
      serie: s,
      pontos: (detalhesSeries[s.id]?.generos ?? []).filter((g) =>
        detalhes?.generos.includes(g)
      ).length,
    }))
    .filter((x) => x.pontos > 0)
    .sort((a, b) => b.pontos - a.pontos || a.serie.titulo.localeCompare(b.serie.titulo))
    .slice(0, 4)
    .map((x) => x.serie);

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
        autor={{
          id: serie.autor.id,
          nome: serie.autor.nome,
          imagem: serie.autor.imagem,
        }}
        livros={serie.livros.map((l) => ({
          id: l.id,
          titulo: l.titulo,
          imagem: l.imagem,
          link: l.link,
        }))}
      />

      {"box" in serie && serie.box && (
        <section className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
            <Image
              src={serie.box.imagem}
              alt={serie.box.titulo}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h2 className="text-2xl font-serif font-bold text-zinc-900">
              Quer a coleção completa?
            </h2>
            <p className="text-zinc-700">
              Compre todos os livros de {serie.titulo} de uma vez no{" "}
              <strong>{serie.box.titulo}</strong>.
            </p>
            <a
              href={serie.box.link}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="self-center sm:self-start flex items-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] text-zinc-900 font-bold py-2.5 px-6 rounded-xl transition-all shadow-md"
            >
              <Image src="/amazon.png" alt="Amazon" width={20} height={20} />
              <span>Ver box na Amazon</span>
            </a>
          </div>
        </section>
      )}

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
          Quantos livros tem {serie.titulo}?
        </h3>
        <p className="text-zinc-700 leading-relaxed">
          A série tem <strong>{livrosOrdenados.length} livros</strong>
          {anos.length > 0 &&
            (anos[0] === anos[anos.length - 1]
              ? `, lançados em ${anos[0]}`
              : `, lançados entre ${anos[0]} e ${anos[anos.length - 1]}`)}
          .
        </p>

        <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
          Por qual livro de {serie.titulo} começar?
        </h3>
        <p className="text-zinc-700 leading-relaxed">
          Comece por <strong>{livrosOrdenados[0].titulo}</strong>, o primeiro
          livro da série. Daí siga a lista acima para acompanhar a história na
          ordem certa.
        </p>

        {detalhes && (
          <>
            <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
              Para qual idade é {serie.titulo}?
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Recomendamos a série <strong>{detalhes.idade}</strong>.
            </p>
          </>
        )}

        {detalhes?.adaptacao && (
          <>
            <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
              {serie.titulo} tem filme ou série?
            </h3>
            <p className="text-zinc-700 leading-relaxed">{detalhes.adaptacao}</p>
          </>
        )}

        {generosDaSerie.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-sm font-bold text-zinc-900">Gêneros:</span>
            {generosDaSerie.map((g) => (
              <Link
                key={g.id}
                href={`/generos/${g.id}`}
                className="text-sm bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
              >
                {g.nome}
              </Link>
            ))}
          </div>
        )}

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

        {parecidas.length > 0 && (
          <>
            <h3 className="text-xl font-serif font-bold text-zinc-900 mt-2">
              Se você gostou de {serie.titulo}, leia também
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {parecidas.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/series/${s.id}`}
                    className="group flex flex-col gap-2"
                  >
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={s.livros[0].imagem}
                        alt={`Capa de ${s.titulo}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-serif font-bold text-zinc-900 group-hover:text-indigo-600 leading-tight">
                      {s.titulo}
                    </span>
                    <span className="text-xs text-zinc-500">{s.autor.nome}</span>
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
