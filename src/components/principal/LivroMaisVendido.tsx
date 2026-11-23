import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface LivroDestaqueProps {
  link: string;
  imagem: string;
  className?: string;
  titulo: string;
  autor: string;
  posicao: string;
}

export default function LivroDestaque(props: LivroDestaqueProps) {
  return (
    <Link
      href={props.link}
      className={`group relative rounded-xl overflow-hidden ${props.className}
        flex flex-col w-full items-center gap-3
        bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
        pb-6 border border-zinc-100
        `}
    >
      <div className="absolute top-0 left-4 z-10 bg-indigo-600 rounded-b-lg shadow-md">
        <span className="text-white text-xl font-black px-4 py-2 block">
          #{props.posicao}
        </span>
      </div>

      <div className="w-full h-80 relative overflow-hidden bg-zinc-100">
        <Image
          src={props.imagem}
          alt={`Capa do livro ${props.titulo}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col items-center gap-2 px-4 w-full">
        <span className="w-full text-base font-serif font-bold text-center text-zinc-900 leading-tight line-clamp-2 min-h-[3rem]">
          {props.titulo}
        </span>
        <span className="text-sm font-medium uppercase text-zinc-500 tracking-wide">
          {props.autor}
        </span>
        <div className="flex gap-0.5 text-amber-400 my-1">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
        </div>
        <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-2 px-6 rounded-full transition-colors shadow-sm w-full mt-2">
          <Image unoptimized src="/amazon.png" alt="Amazon" width={20} height={20} />
          <span>Ver na Amazon</span>
        </button>
      </div>
    </Link>
  );
}
