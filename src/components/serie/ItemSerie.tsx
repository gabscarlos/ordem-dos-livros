import Image from "next/image";
import Link from "next/link";

export interface ItemSerieProps {
  id: string;
  titulo: string;
  descricao: string;
  autor: { nome: string };
  livros: { titulo: string; imagem: string }[];
}

const resumo = (texto: string, max = 150) =>
  texto.length <= max ? texto : `${texto.slice(0, max).replace(/\s+\S*$/, "")}…`;

// Cartão de série: as três primeiras capas em pé numa prateleira pequena,
// com título, autor e quantidade de livros embaixo.
export default function ItemSerie(props: ItemSerieProps) {
  const capas = props.livros.slice(0, 3);
  const tamanhos = ["w-24", "w-[4.5rem]", "w-16"];

  return (
    <Link
      href={`/series/${props.id}`}
      className="group flex flex-col w-full h-full rounded-[1.75rem] overflow-hidden bg-white/70 border border-areia-200 hover:bg-white hover:shadow-estante transition-all"
    >
      <div className="relative bg-gradient-to-b from-areia-50 to-areia-100 px-6 pt-6">
        <div className="flex items-end justify-center gap-2 h-36">
          {capas.map((livro, i) => (
            <div
              key={livro.titulo}
              className={`relative aspect-[2/3] flex-none overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro transition-transform duration-300 ${
                tamanhos[i]
              } ${i === 0 ? "group-hover:-translate-y-1.5" : ""}`}
            >
              <Image src={livro.imagem} alt={`Capa de ${livro.titulo}`} fill sizes="96px" className="object-cover" />
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/25 to-transparent" />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="h-2.5 -mx-2 rounded-full bg-gradient-to-b from-areia-100 to-areia-300 shadow-[0_8px_12px_-8px_rgba(44,24,16,0.45)]"
        />
      </div>

      <div className="flex flex-col gap-2 p-6 pt-5 flex-1">
        <h3 className="font-serif text-xl leading-tight text-areia-900 group-hover:text-marca-700 transition-colors">
          {props.titulo}
        </h3>
        <p className="text-xs text-areia-500">
          {props.autor.nome} · {props.livros.length} {props.livros.length === 1 ? "livro" : "livros"}
        </p>
        <p className="text-sm text-areia-600 leading-relaxed">{resumo(props.descricao)}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-marca-700">Ver a ordem dos livros →</span>
      </div>
    </Link>
  );
}
