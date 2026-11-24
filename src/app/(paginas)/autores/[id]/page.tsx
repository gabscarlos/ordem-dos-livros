import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConteudoAutor from "@/components/autor/ConteudoAutor";
import autores from "@/constants/autores";
import series from "@/constants/series";
import { url } from "@/lib/site";

export interface AutorPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return autores.map((autor) => ({ id: autor.id }));
}

export async function generateMetadata({
  params,
}: AutorPageProps): Promise<Metadata> {
  const { id } = await params;
  const autor = autores.find((a) => a.id === id);

  if (!autor) return { title: "Autor não encontrado" };

  const seriesDoAutor = series.filter((s) => s.autor.id === autor.id);
  const nomesSeries = seriesDoAutor.map((s) => s.titulo).join(", ");
  const titulo = `${autor.nome}: biografia e livros em ordem`;
  const descricao = nomesSeries
    ? `Conheça a biografia de ${autor.nome} e a ordem de leitura dos livros de ${nomesSeries}.`
    : `Conheça a biografia de ${autor.nome} e suas principais obras.`;
  const canonical = url(`/autores/${autor.id}`);

  return {
    title: titulo,
    description: descricao,
    alternates: { canonical },
    openGraph: {
      title: titulo,
      description: descricao,
      images: [autor.imagem],
      url: canonical,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
      images: [autor.imagem],
    },
  };
}

export default async function Autor({ params }: AutorPageProps) {
  const { id } = await params;
  const autor = autores.find((a) => a.id === id);

  if (!autor) notFound();

  const seriesDoAutor = series.filter((s) => s.autor.id === autor.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: autor.nome,
    description: autor.descricao,
    image: autor.imagem,
    url: url(`/autores/${autor.id}`),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConteudoAutor {...autor} />

      {seriesDoAutor.map((serie) => (
        <section
          key={serie.id}
          className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-zinc-100 mt-10 flex flex-col gap-6"
        >
          <h2 className="text-2xl font-serif font-bold text-zinc-900">
            Livros de {serie.titulo} em ordem
          </h2>
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {serie.livros.map((livro, i) => (
              <li key={livro.id} className="flex flex-col gap-2">
                <a
                  href={livro.link}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="group flex flex-col gap-2"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={livro.imagem}
                      alt={`Capa de ${livro.titulo}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 180px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-sm text-zinc-500 font-bold">{i + 1}.</span>
                  <span className="font-serif font-bold text-zinc-900 leading-tight group-hover:text-indigo-600">
                    {livro.titulo}
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <Link
            href={`/series/${serie.id}`}
            className="self-end inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
              <span>Ver a série completa</span>
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
        </section>
      ))}
    </div>
  );
}
