import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ItemSerie from "@/components/serie/ItemSerie";
import Titulo from "@/components/shared/Titulo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import series from "@/constants/series";
import generos from "@/constants/generos";
import detalhesSeries from "@/constants/detalhes-series";
import { url } from "@/lib/site";

interface GeneroPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

const seriesDoGenero = (id: string) =>
  series
    .filter((s) => detalhesSeries[s.id]?.generos.includes(id))
    .sort((a, b) => a.titulo.localeCompare(b.titulo));

export function generateStaticParams() {
  return generos
    .filter((g) => seriesDoGenero(g.id).length > 0)
    .map((g) => ({ id: g.id }));
}

export async function generateMetadata({
  params,
}: GeneroPageProps): Promise<Metadata> {
  const { id } = await params;
  const genero = generos.find((g) => g.id === id);
  if (!genero) return { title: "Gênero não encontrado" };

  const canonical = url(`/generos/${genero.id}`);
  return {
    title: `${genero.titulo} em ordem de leitura`,
    description: genero.descricao,
    alternates: { canonical },
    openGraph: {
      title: genero.titulo,
      description: genero.descricao,
      url: canonical,
      images: ["/logo.png"],
    },
  };
}

export default async function Genero({ params }: GeneroPageProps) {
  const { id } = await params;
  const genero = generos.find((g) => g.id === id);
  if (!genero) notFound();

  const lista = seriesDoGenero(genero.id);
  const outros = generos.filter(
    (g) => g.id !== genero.id && seriesDoGenero(g.id).length > 0
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: genero.titulo,
      description: genero.descricao,
      url: url(`/generos/${genero.id}`),
      itemListElement: lista.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: url(`/series/${s.id}`),
        name: s.titulo,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url("/") },
        { "@type": "ListItem", position: 2, name: "Séries", item: url("/series") },
        {
          "@type": "ListItem",
          position: 3,
          name: genero.nome,
          item: url(`/generos/${genero.id}`),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[{ label: "Séries", href: "/series" }, { label: genero.nome }]}
      />
      <Titulo principal={genero.titulo} secundario={genero.descricao} />

      <p className="text-areia-700">
        {lista.length === 1
          ? "Encontramos 1 série"
          : `Encontramos ${lista.length} séries`}{" "}
        de {genero.nome.toLowerCase()}. Clique em uma delas para ver todos os
        livros na ordem certa de leitura.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {lista.map((serie) => (
          <ItemSerie key={serie.id} {...serie} />
        ))}
      </div>

      <section className="flex flex-col gap-4 mt-6">
        <h2 className="text-2xl font-serif font-bold text-areia-900">
          Outros gêneros
        </h2>
        <ul className="flex flex-wrap gap-3">
          {outros.map((g) => (
            <li key={g.id}>
              <Link
                href={`/generos/${g.id}`}
                className="inline-block bg-marca-50 text-marca-700 font-semibold px-4 py-2 rounded-full hover:bg-marca-100 transition-colors"
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
