import Image from "next/image";
import Link from "next/link";
import Busca from "@/components/template/Busca";
import CapaLivro from "./CapaLivro";
import Prateleira from "./Prateleira";

export interface EstanteDestaqueProps {
  totalSeries: number;
  totalLivros: number;
  serieDoDia: {
    id: string;
    titulo: string;
    autor: string;
    totalLivros: number;
    capas: { titulo: string; imagem: string }[];
  };
  autorDaSemana: {
    id: string;
    nome: string;
    imagem: string;
    series: number;
  };
  comecePorAqui: {
    serieId: string;
    serie: string;
    titulo: string;
    imagem: string;
    autor: string;
    totalLivros: number;
  }[];
}

// Destaque da página inicial em forma de estante: chamada e busca à esquerda,
// a série do dia "em pé" no meio e o autor da semana à direita. Embaixo da
// prateleira, quatro séries para começar.
export default function EstanteDestaque(props: EstanteDestaqueProps) {
  const { serieDoDia, autorDaSemana } = props;
  const [principal, ...seguintes] = serieDoDia.capas;

  return (
    <section className="rounded-[2rem] bg-gradient-to-b from-areia-50 to-areia-100 border border-areia-200 shadow-estante overflow-hidden">
      {/* Parte de cima da estante */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_0.7fr] gap-10 lg:gap-8 items-end px-6 sm:px-10 pt-10">
        <div className="flex flex-col gap-5 self-center lg:pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-marca-600">
            Ordem Livro
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-areia-900">
            Séries de livros em ordem de leitura
          </h1>
          <p className="text-areia-600 max-w-md">
            Descubra por qual livro começar e siga cada série na ordem certa, do primeiro ao
            último volume.
          </p>
          {/* No celular a busca da barra do topo já aparece logo acima. */}
          <div className="hidden sm:block max-w-md">
            <Busca grande id="busca-destaque" />
          </div>
          <p className="text-xs text-areia-500">
            {props.totalSeries} séries · {props.totalLivros} livros
          </p>
        </div>

        {/* Série do dia, em pé na prateleira */}
        <Link href={`/series/${serieDoDia.id}`} className="group flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-areia-500">
            Série do dia
          </span>
          <div className="flex items-end gap-3">
            {principal && (
              <CapaLivro
                src={principal.imagem}
                alt={`Capa de ${principal.titulo}`}
                className="w-40 sm:w-48"
                sizes="192px"
                priority
              />
            )}
            <div className="hidden sm:flex items-end gap-2">
              {seguintes.slice(0, 2).map((c) => (
                <CapaLivro key={c.titulo} src={c.imagem} alt={`Capa de ${c.titulo}`} className="w-20" sizes="80px" />
              ))}
            </div>
          </div>
        </Link>

        {/* Autor da semana */}
        <Link
          href={`/autores/${autorDaSemana.id}`}
          className="group hidden lg:flex items-end gap-3 justify-end"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold uppercase tracking-[0.25em] text-areia-500 pb-2">
            Autor da semana
          </span>
          <div className="w-40 rounded-2xl bg-marca-300 overflow-hidden shadow-livro transition-transform duration-300 group-hover:-translate-y-1.5">
            <div className="px-4 pt-4 pb-2 text-center">
              <p className="font-serif text-lg leading-tight text-areia-900">{autorDaSemana.nome}</p>
              <p className="text-[11px] text-areia-800 mt-1">
                {autorDaSemana.series} {autorDaSemana.series === 1 ? "série" : "séries"} no site
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src={autorDaSemana.imagem}
                alt={`Foto de ${autorDaSemana.nome}`}
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Link>
      </div>

      <Prateleira className="mx-4 sm:mx-6" />

      {/* Texto da série do dia, embaixo da prateleira */}
      <p className="text-center text-sm text-areia-600 px-6 pt-3">
        <Link href={`/series/${serieDoDia.id}`} className="font-serif text-base text-areia-900 hover:text-marca-600">
          {serieDoDia.titulo}
        </Link>{" "}
        · {serieDoDia.autor} · {serieDoDia.totalLivros} livros
      </p>

      {/* Comece por aqui */}
      <div className="mt-8 border-t border-areia-200 bg-white/60 px-6 sm:px-10 py-8 flex flex-col lg:flex-row gap-6 lg:items-center">
        <span className="lg:[writing-mode:vertical-rl] lg:rotate-180 text-xs font-semibold uppercase tracking-[0.25em] text-areia-500">
          Comece por aqui
        </span>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
          {props.comecePorAqui.map((l) => (
            <li key={l.serieId}>
              <Link href={`/series/${l.serieId}`} className="group flex items-center gap-4">
                <CapaLivro src={l.imagem} alt={`Capa de ${l.titulo}`} className="w-16" sizes="64px" />
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-serif text-areia-900 leading-tight line-clamp-2">{l.titulo}</span>
                  <span className="text-xs text-areia-500 truncate">{l.autor}</span>
                  <span className="mt-1 inline-flex w-fit items-center rounded-full border border-marca-400 px-3 py-1 text-xs font-semibold text-marca-700 group-hover:bg-marca-400 group-hover:text-areia-900 transition-colors">
                    Ver os {l.totalLivros} livros
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
