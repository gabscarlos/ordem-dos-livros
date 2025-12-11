import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface LivroDestaqueProps {
  link: string;
  imagem: string;
  className?: string;
  titulo: string;
  autor: string;
}

export default function LivroDestaque(props: LivroDestaqueProps) {
  return (
    <Link
      href={props.link}
      className={`group rounded-md overflow-hidden ${props.className} flex flex-col w-56 gap-2 hover:opacity-90 transition-opacity`}
    >
      <div className="overflow-hidden rounded-lg drop-shadow-xl">
        <Image
          src={props.imagem}
          alt={`Capa do livro ${props.titulo}`}
          width={224}
          height={320}
          className="h-80 w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <span className="text-base font-serif font-bold text-zinc-900 leading-tight line-clamp-2">{props.titulo}</span>
        <span className="text-sm text-zinc-600 font-medium">{props.autor}</span>
        <div className="flex gap-0.5 text-amber-400">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
        </div>      
      </div>
    </Link>
  );
}
