import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";
import guias from "@/constants/guias";
import { itensDoGuia } from "@/lib/guias";
import { url } from "@/lib/site";

interface GuiaPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guias.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: GuiaPageProps): Promise<Metadata> {
  const { id } = await params;
  const guia = guias.find((g) => g.id === id);
  if (!guia) return { title: "Guia não encontrado" };
  const canonical = url(`/guias/${guia.id}`);
  return {
    title: guia.titulo,
    description: guia.descricao,
    alternates: { canonical },
    openGraph: { title: guia.titulo, description: guia.descricao, url: canonical },
  };
}

export default async function GuiaPage({ params }: GuiaPageProps) {
  const { id } = await params;
  const guia = guias.find((g) => g.id === id);
  if (!guia) notFound();

  const itens = itensDoGuia(guia);
  const outros = guias.filter((g) => g.id !== guia.id);
  const pageUrl = url(`/guias/${guia.id}`);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: guia.titulo,
      description: guia.descricao,
      url: pageUrl,
      numberOfItems: itens.length,
      itemListElement: itens.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: url(`/series/${item.serie.id}`),
        name: item.serie.titulo,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url("/") },
        { "@type": "ListItem", position: 2, name: "Guias", item: url("/guias") },
        { "@type": "ListItem", position: 3, name: guia.nome, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "Guias", href: "/guias" }, { label: guia.nome }]} />

      <header className="flex flex-col gap-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-marca-600">
          Guia · {itens.length} séries
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-areia-900 text-balance">{guia.titulo}</h1>
        <p className="text-areia-700 leading-relaxed">{guia.intro}</p>
      </header>

      <ol className="flex flex-col gap-5">
        {itens.map(({ serie, motivo, idade }, i) => (
          <li key={serie.id}>
            <article className="flex flex-col sm:flex-row gap-5 sm:gap-8 rounded-[1.75rem] bg-white/70 border border-areia-200 p-5 sm:p-7">
              <Link href={`/series/${serie.id}`} className="flex items-end gap-1.5 flex-none self-center sm:self-start" aria-label={`Ver a ordem de ${serie.titulo}`}>
                {serie.livros.slice(0, 3).map((livro, j) => (
                  <div
                    key={livro.id}
                    className={`relative aspect-[2/3] overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro ${["w-20", "w-14", "w-11"][j]}`}
                  >
                    <Image src={livro.imagem} alt={`Capa de ${livro.titulo}`} fill sizes="80px" className="object-cover" />
                  </div>
                ))}
              </Link>
              <div className="flex flex-col gap-2 min-w-0">
                <h2 className="font-serif text-2xl leading-tight text-areia-900">
                  <span className="text-marca-500 mr-2">{i + 1}.</span>
                  <Link href={`/series/${serie.id}`} className="hover:text-marca-700">
                    {serie.titulo}
                  </Link>
                </h2>
                <p className="text-xs text-areia-500">
                  {serie.autor.nome} · {serie.livros.length} {serie.livros.length === 1 ? "livro" : "livros"}
                  {idade ? ` · ${idade}` : ""}
                </p>
                <p className="text-areia-700 leading-relaxed">{motivo}</p>
                <p className="text-sm text-areia-600">
                  Comece por <strong className="text-areia-800">{serie.livros[0].titulo}</strong>.{" "}
                  <Link href={`/series/${serie.id}`} className="font-semibold text-marca-700 hover:text-marca-900">
                    Ver a ordem dos livros →
                  </Link>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-areia-900">Outros guias</h2>
        <ul className="flex flex-wrap gap-3">
          {outros.map((g) => (
            <li key={g.id}>
              <Link
                href={`/guias/${g.id}`}
                className="inline-flex rounded-full border border-areia-300 bg-white/70 px-5 py-2.5 font-serif text-areia-900 hover:border-marca-400 hover:bg-marca-50 transition-colors"
              >
                {g.nome}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
