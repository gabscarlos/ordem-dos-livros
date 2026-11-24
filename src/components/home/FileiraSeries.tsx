import Link from "next/link";
import CapaLivro from "./CapaLivro";

export interface SerieNaFileira {
  id: string;
  titulo: string;
  autor: string;
  capa: string;
  totalLivros: number;
}

// Uma fileira de séries "em pé" sobre uma prateleira. Cada item leva um
// pedaço da tábua; juntos formam uma prateleira contínua que rola junto com
// os livros no celular.
export default function FileiraSeries({ series }: { series: SerieNaFileira[] }) {
  return (
    <ul className="flex overflow-x-auto snap-x pb-2 [scrollbar-width:thin]">
      {series.map((s) => (
        <li
          key={s.id}
          className="snap-start flex-none w-40 sm:w-44 lg:flex-1 lg:w-auto lg:min-w-0 first:[&_.tabua]:rounded-l-full last:[&_.tabua]:rounded-r-full"
        >
          <Link href={`/series/${s.id}`} className="group flex flex-col">
            <div className="flex items-end justify-center h-[13rem] sm:h-[14rem] lg:h-auto lg:aspect-[2/3.1] px-3.5">
              <CapaLivro src={s.capa} alt={`Capa de ${s.titulo}`} className="w-full" sizes="150px" />
            </div>
            <div
              aria-hidden="true"
              className="tabua h-3 bg-gradient-to-b from-areia-100 to-areia-300 shadow-[0_10px_14px_-8px_rgba(44,24,16,0.45)]"
            />
            <div className="flex flex-col gap-0.5 px-3.5 pt-3">
              <span className="font-serif text-areia-900 leading-tight line-clamp-2 group-hover:text-marca-600 transition-colors">
                {s.titulo}
              </span>
              <span className="text-xs text-areia-500">
                {s.autor} · {s.totalLivros} {s.totalLivros === 1 ? "livro" : "livros"}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
