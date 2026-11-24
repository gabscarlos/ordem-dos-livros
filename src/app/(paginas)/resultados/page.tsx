import Image from "next/image";
import Link from "next/link";
import series from "@/constants/series";
import autores from "@/constants/autores";
import ItemAutor from "@/components/autor/ItemAutor";
import ItemSerie from "@/components/serie/ItemSerie";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Titulo from "@/components/shared/Titulo";

// Remove acentos e deixa em minúsculas, para "pilar" achar "Pilar" e "nárnia" achar "Narnia".
const normalizar = (texto: string) =>
  texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

interface ResultadosProps {
  searchParams: Promise<{ search?: string | string[] }>;
}

export default async function Resultados({ searchParams }: ResultadosProps) {
  const { search } = await searchParams;
  const termo = (Array.isArray(search) ? search[0] : search) ?? "";
  const busca = normalizar(termo);

  const seriesEncontradas = busca
    ? series.filter(
        (serie) =>
          normalizar(serie.titulo).includes(busca) ||
          normalizar(serie.autor.nome).includes(busca)
      )
    : [];

  const autoresEncontrados = busca
    ? autores.filter((autor) => normalizar(autor.nome).includes(busca))
    : [];

  // Livros cujo título bate com a busca, sem repetir os de séries já listadas acima.
  const idsSeries = new Set(seriesEncontradas.map((s) => s.id));
  const livrosEncontrados = busca
    ? series
        .filter((serie) => !idsSeries.has(serie.id))
        .flatMap((serie) =>
          serie.livros
            .map((livro, i) => ({ livro, serie, posicao: i + 1 }))
            .filter(({ livro }) => normalizar(livro.titulo).includes(busca))
        )
        .slice(0, 24)
    : [];

  const total =
    seriesEncontradas.length + autoresEncontrados.length + livrosEncontrados.length;

  return (
    <div className="flex flex-col gap-6 pb-20">
      <Breadcrumb items={[{ label: "Busca" }, ...(termo ? [{ label: termo }] : [])]} />

      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <Titulo
            principal={termo ? `Busca: ${termo}` : "O que você procura?"}
            secundario={
              !termo
                ? "Digite o nome de uma série, livro ou autor na busca do topo."
                : total > 0
                ? `Encontramos ${total} ${total === 1 ? "resultado" : "resultados"} para sua pesquisa.`
                : "Não encontramos nada com esse termo. Tente algo diferente!"
            }
          />
        </header>

        {seriesEncontradas.length > 0 && (
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-areia-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-areia-900">Séries</h2>
              <span className="bg-marca-100 text-marca-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {seriesEncontradas.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {seriesEncontradas.map((serie) => (
                <ItemSerie
                  key={serie.id}
                  id={serie.id}
                  titulo={serie.titulo}
                  imagem={serie.imagem}
                  descricao={serie.descricao}
                />
              ))}
            </div>
          </section>
        )}

        {livrosEncontrados.length > 0 && (
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-areia-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-areia-900">Livros</h2>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {livrosEncontrados.length}
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {livrosEncontrados.map(({ livro, serie, posicao }) => (
                <li key={`${serie.id}-${livro.id}`}>
                  <Link
                    href={`/series/${serie.id}`}
                    className="group flex gap-4 items-center bg-white p-4 rounded-2xl border border-areia-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded-md shadow">
                      <Image
                        src={livro.imagem}
                        alt={`Capa de ${livro.titulo}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-serif font-bold text-areia-900 leading-tight group-hover:text-marca-600">
                        {livro.titulo}
                      </span>
                      <span className="text-sm text-areia-600">
                        Livro {posicao} de {serie.livros.length} da série{" "}
                        <strong>{serie.titulo}</strong>
                      </span>
                      <span className="text-xs text-marca-600 font-semibold">
                        Ver a ordem completa →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {autoresEncontrados.length > 0 && (
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-areia-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-areia-900">Autores</h2>
              <span className="bg-marca-100 text-marca-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {autoresEncontrados.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {autoresEncontrados.map((autor) => (
                <ItemAutor key={autor.id} id={autor.id} nome={autor.nome} imagem={autor.imagem} />
              ))}
            </div>
          </section>
        )}

        {total === 0 && termo && (
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-areia-100 text-center flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-areia-50 rounded-full flex items-center justify-center text-areia-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-areia-500 max-w-md text-lg">
              Não encontramos nenhuma série, livro ou autor com <strong>&quot;{termo}&quot;</strong>.
              Que tal tentar outro nome?
            </p>
            <Link href="/series" className="text-marca-600 font-bold hover:underline">
              Ver todas as séries
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
