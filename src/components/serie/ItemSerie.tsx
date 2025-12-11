import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export interface ItemSerieProps {
  id: string;
  titulo: string;
  imagem: string;
  descricao: string;
}

export default function ItemSerie(props: ItemSerieProps) {
  return (
    <Link
      href={`/series/${props.id}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100"
    >
      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
        <Image
          src={props.imagem}
          alt={`Capa da série ${props.titulo}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 p-5 flex-1">
        <span className="text-2xl font-serif font-bold text-zinc-900">{props.titulo}</span>
        <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 flex-1">
          {props.descricao}
        </p>
        <button className="self-start px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Leia Mais
        </button>
      </div>
    </Link>
  );
}
