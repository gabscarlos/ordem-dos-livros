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
      className={`rounded-md overflow-hidden ${props.className} flex flex-col justify-between w-56 gap-1`}
    >
      <Image
        src={props.imagem}
        alt="Imagem do Livro Destaque"
        width={200}
        height={200}
        className="h-72 drop-shadow-xl rounded-lg object-cover"
      />
      <span className="flex text-sm uppercase mt-2">{props.titulo}</span>
      <span className="flex text-xs uppercase text-zinc-600">{props.autor}</span>
      <div className="flex gap-1">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
      </div>      
    </Link>
  );
}
