import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CapaLivro from "@/components/home/CapaLivro";
import detalhesSeries from "@/constants/detalhes-series";
import { encontrarLivro, livrosComPagina, urlDoLivro, type Livro } from "@/lib/livros";
import { url } from "@/lib/site";

interface LivroPageProps {
  params: Promise<{ id: string; livro: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return livrosComPagina().map((l) => ({ id: l.serie.id, livro: l.slug }));
}

const anoDe = (l: Livro) => ("ano" in l && typeof l.ano === "number" && l.ano > 0 ? l.ano : undefined);

export async function generateMetadata({ params }: LivroPageProps): Promise<Metadata> {
  const { id, livro } = await params;
  const dados = encontrarLivro(id, livro);
  if (!dados) return { title: "Livro não encontrado" };

  const { serie, livro: l, posicao, proximo } = dados;
  const total = serie.livros.length;
  const titulo = `${l.titulo}: livro ${posicao} de ${serie.titulo}`;
  const descricao = `${l.titulo} é o livro ${posicao} de ${total} da série ${serie.titulo}, de ${serie.autor.nome}. ${
    proximo ? `Depois dele, leia ${proximo.titulo}.` : "É o último livro da série."
  }`;
  const canonical = url(urlDoLivro(serie.id, l.titulo));

  return {
    title: titulo,
    description: descricao,
    alternates: { canonical },
    openGraph: { title: titulo, description: descricao, url: canonical, images: [l.imagem] },
  };
}

function CartaoVizinho({ rotulo, serieId, livro }: { rotulo: string; serieId: string; livro: Livro }) {
  return (
    <Link
      href={urlDoLivro(serieId, livro.titulo)}
      className="group flex items-center gap-4 rounded-2xl bg-white/70 border border-areia-200 p-4 hover:bg-white hover:shadow-estante transition-all"
    >
      <CapaLivro src={livro.imagem} alt={`Capa de ${livro.titulo}`} className="w-14" sizes="56px" />
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-marca-600">{rotulo}</span>
        <span className="font-serif text-lg leading-tight text-areia-900 group-hover:text-marca-700">
          {livro.titulo}
        </span>
      </div>
    </Link>
  );
}

export default async function LivroPage({ params }: LivroPageProps) {
  const { id, livro } = await params;
  const dados = encontrarLivro(id, livro);
  if (!dados) notFound();

  const { serie, livro: l, posicao, anterior, proximo } = dados;
  const total = serie.livros.length;
  const ano = anoDe(l);
  const primeiro = serie.livros[0];
  const notaOrdem = detalhesSeries[serie.id]?.notaOrdem;
  const urlSerie = url(`/series/${serie.id}`);
  const urlLivro = url(urlDoLivro(serie.id, l.titulo));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: l.titulo,
      author: { "@type": "Person", name: serie.autor.nome },
      image: l.imagem,
      url: urlLivro,
      inLanguage: "pt-BR",
      position: posicao,
      ...(ano ? { datePublished: String(ano) } : {}),
      isPartOf: { "@type": "BookSeries", name: serie.titulo, url: urlSerie },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url("/") },
        { "@type": "ListItem", position: 2, name: "Séries", item: url("/series") },
        { "@type": "ListItem", position: 3, name: serie.titulo, item: urlSerie },
        { "@type": "ListItem", position: 4, name: l.titulo, item: urlLivro },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb
        items={[
          { label: "Séries", href: "/series" },
          { label: serie.titulo, href: `/series/${serie.id}` },
          { label: l.titulo },
        ]}
      />

      {/* Estante: dados do livro à esquerda, capa em pé à direita */}
      <section className="rounded-[2rem] bg-gradient-to-b from-areia-50 to-areia-100 border border-areia-200 shadow-estante overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-end px-6 sm:px-10 pt-8 sm:pt-10">
          <div className="flex flex-col gap-4 self-center sm:pb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-marca-600">
              Livro {posicao} de {total} ·{" "}
              <Link href={`/series/${serie.id}`} className="underline underline-offset-4 hover:text-marca-800">
                {serie.titulo}
              </Link>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-areia-900 text-balance">{l.titulo}</h1>
            <p className="text-areia-600">
              de{" "}
              <Link href={`/autores/${serie.autor.id}`} className="font-semibold text-marca-700 hover:text-marca-900">
                {serie.autor.nome}
              </Link>
              {ano ? ` · ${ano}` : ""}
            </p>
            <a
              href={l.link}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="self-start inline-flex items-center rounded-full bg-marca-400 px-6 py-2.5 font-semibold text-areia-900 hover:bg-marca-300 transition-colors"
            >
              Ver na Amazon
            </a>
          </div>
          <div className="relative aspect-[2/3] w-36 sm:w-44 mx-auto overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro">
            <Image src={l.imagem} alt={`Capa de ${l.titulo}`} fill priority sizes="176px" className="object-cover" />
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mx-4 sm:mx-6 mb-6 h-3 rounded-full bg-gradient-to-b from-areia-100 to-areia-300 shadow-[0_10px_16px_-8px_rgba(44,24,16,0.45)]"
        />
      </section>

      {/* Anterior e próximo */}
      {(anterior || proximo) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {anterior ? <CartaoVizinho rotulo="Livro anterior" serieId={serie.id} livro={anterior} /> : <div className="hidden sm:block" />}
          {proximo && <CartaoVizinho rotulo="Próximo livro" serieId={serie.id} livro={proximo} />}
        </div>
      )}

      {/* Perguntas */}
      <section className="max-w-3xl flex flex-col gap-6">
        <div>
          <h2 className="font-serif text-2xl text-areia-900 mb-2">Qual livro vem depois de {l.titulo}?</h2>
          <p className="text-areia-700 leading-relaxed">
            {proximo ? (
              <>
                Depois de <strong>{l.titulo}</strong>, o próximo livro da série é{" "}
                <Link href={urlDoLivro(serie.id, proximo.titulo)} className="font-semibold text-marca-700 hover:underline">
                  {proximo.titulo}
                </Link>{" "}
                (livro {posicao + 1} de {total}).
              </>
            ) : (
              <>
                <strong>{l.titulo}</strong> é o último livro de {serie.titulo}. Com ele, você termina os {total} livros da série.
              </>
            )}
          </p>
        </div>

        {anterior && (
          <div>
            <h2 className="font-serif text-2xl text-areia-900 mb-2">Qual livro vem antes de {l.titulo}?</h2>
            <p className="text-areia-700 leading-relaxed">
              Antes de {l.titulo}, leia{" "}
              <Link href={urlDoLivro(serie.id, anterior.titulo)} className="font-semibold text-marca-700 hover:underline">
                {anterior.titulo}
              </Link>{" "}
              (livro {posicao - 1} de {total}).
            </p>
          </div>
        )}

        <div>
          <h2 className="font-serif text-2xl text-areia-900 mb-2">
            {l.titulo} é o primeiro livro de {serie.titulo}?
          </h2>
          <p className="text-areia-700 leading-relaxed">
            {posicao === 1 ? (
              <>Sim. {l.titulo} é o primeiro livro da série, e é por ele que você deve começar.</>
            ) : (
              <>
                Não. {l.titulo} é o livro {posicao}. A série começa por{" "}
                <Link href={urlDoLivro(serie.id, primeiro.titulo)} className="font-semibold text-marca-700 hover:underline">
                  {primeiro.titulo}
                </Link>
                .
              </>
            )}
          </p>
        </div>

        {notaOrdem && (
          <div>
            <h2 className="font-serif text-2xl text-areia-900 mb-2">Qual a melhor ordem para ler {serie.titulo}?</h2>
            <p className="text-areia-700 leading-relaxed">{notaOrdem}</p>
          </div>
        )}
      </section>

      {/* Ordem completa */}
      <section className="bg-white/70 p-6 sm:p-10 rounded-[2rem] border border-areia-200 flex flex-col gap-4 max-w-3xl">
        <h2 className="font-serif text-2xl text-areia-900">Ordem completa de {serie.titulo}</h2>
        <ol className="flex flex-col gap-1.5">
          {serie.livros.map((outro, i) => {
            const atual = i + 1 === posicao;
            const anoOutro = anoDe(outro);
            return (
              <li key={outro.id} className="flex gap-3 items-baseline">
                <span className={`font-serif w-6 text-right flex-none ${atual ? "text-marca-600" : "text-areia-400"}`}>{i + 1}.</span>
                {atual ? (
                  <span className="font-semibold text-areia-900">
                    {outro.titulo} <span className="text-xs text-marca-600 font-semibold">(você está aqui)</span>
                  </span>
                ) : (
                  <Link href={urlDoLivro(serie.id, outro.titulo)} className="text-areia-800 hover:text-marca-700 hover:underline">
                    {outro.titulo}
                  </Link>
                )}
                {anoOutro && <span className="text-xs text-areia-500">{anoOutro}</span>}
              </li>
            );
          })}
        </ol>
        <Link href={`/series/${serie.id}`} className="self-start text-sm font-semibold text-marca-700 hover:text-marca-900">
          Ver a página completa da série →
        </Link>
      </section>

      <p className="text-xs text-areia-500">
        Como associado da Amazon, o Ordem Livro ganha comissão com compras qualificadas feitas pelos links desta página.
      </p>
    </div>
  );
}
