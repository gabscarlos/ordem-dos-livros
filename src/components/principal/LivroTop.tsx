import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface LivroTopProps {
  linkAmazon: string;
  imagem: string;
  className?: string;
  titulo: string;
  linkAutor: string;
  autor: string;
}

export default function LivroTop(props: LivroTopProps) {
  return (
    <div className="flex flex-row gap-2 p-1">
      <Link
        href={props.linkAmazon}
        target="_blank"
        className={`rounded-md overflow-hidden ${props.className} w-28`}
      >
        <Image
          src={props.imagem}
          alt="Imagem do Livro Destaque"
          width={200}
          height={200}
          className="object-cover rounded-lg drop-shadow-xl h-40"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase w-40">{props.titulo}</span>
        <Link href={props.linkAutor} className="-mt-2">
          <span className="text-xs text-gray-400">{props.autor}</span>
        </Link>
        <div className="flex gap-1">
          <StarIcon className="h-3 w-3" />
          <StarIcon className="h-3 w-3" />
          <StarIcon className="h-3 w-3" />
          <StarIcon className="h-3 w-3" />
          <StarIcon className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}